from PIL import Image
import colorsys

def adjust_image():
    img = Image.open('public/images/smart-solutions.jpg').convert('RGBA')
    pixels = img.load()
    
    # Target color: #C89004 -> R=200, G=144, B=4
    # Let's find its HSV
    target_r, target_g, target_b = 200/255.0, 144/255.0, 4/255.0
    th, ts, tv = colorsys.rgb_to_hsv(target_r, target_g, target_b)
    
    # Source color approx: #F1BD15 -> R=241, G=189, B=21
    sh, ss, sv = colorsys.rgb_to_hsv(241/255.0, 189/255.0, 21/255.0)
    
    hue_shift = th - sh
    
    for y in range(img.height):
        for x in range(img.width):
            r, g, b, a = pixels[x, y]
            
            # Convert to HSV
            h, s, v = colorsys.rgb_to_hsv(r/255.0, g/255.0, b/255.0)
            
            # Filter for yellow (Hue around 40-55 degrees, which is 40/360 to 55/360)
            # 46 / 360 is ~0.127
            if 0.08 < h < 0.18 and s > 0.4 and v > 0.4:
                # Apply hue shift
                new_h = h + hue_shift
                if new_h < 0: new_h += 1
                if new_h > 1: new_h -= 1
                
                # We can also scale value and saturation to match the target's darker, more intense look
                # target value is ~0.78, source is ~0.94
                new_v = v * (tv / sv)
                new_s = s * (ts / ss)
                
                new_v = max(0, min(1, new_v))
                new_s = max(0, min(1, new_s))
                
                nr, ng, nb = colorsys.hsv_to_rgb(new_h, new_s, new_v)
                pixels[x, y] = (int(nr*255), int(ng*255), int(nb*255), a)

    # Save with high quality to preserve the rest of the image
    img = img.convert('RGB')
    img.save('public/images/smart-solutions.jpg', quality=95)

adjust_image()
print("Done")
