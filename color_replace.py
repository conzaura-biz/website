from PIL import Image
import math

def color_distance(c1, c2):
    return math.sqrt(sum((a - b)**2 for a, b in zip(c1, c2)))

def adjust_image():
    # Load original
    img = Image.open('public/images/smart-solutions.jpg').convert('RGB')
    pixels = img.load()
    
    # Target and Source roughly
    # source yellow is roughly 241, 189, 21 (#F1BD15)
    # target is 200, 144, 4 (#C89004)
    # We will convert to HSV or just apply a blend if it's close to yellow
    
    for y in range(img.height):
        for x in range(img.width):
            r, g, b = pixels[x, y]
            
            # Simple heuristic for yellow in this specific image
            # Yellow text should have high R and G, low B
            if r > 150 and g > 100 and b < 100 and r > b + 50 and g > b + 30:
                # Let's do a relative shift
                # Decrease R by ~15%, G by ~20%, B by ~50%
                new_r = int(r * (200 / 241))
                new_g = int(g * (144 / 189))
                new_b = int(b * (4 / 21)) if b > 5 else b
                
                # Clamp
                new_r = max(0, min(255, new_r))
                new_g = max(0, min(255, new_g))
                new_b = max(0, min(255, new_b))
                
                pixels[x, y] = (new_r, new_g, new_b)

    img.save('public/images/smart-solutions.jpg')

adjust_image()
print("Done")
