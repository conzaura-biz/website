from PIL import Image

img = Image.open('/Users/naveen/.gemini/antigravity/brain/ac04825c-640c-4859-b91f-99b3fa2ba19c/.user_uploaded/media_1788597283276.png').convert('RGB')
width, height = img.size

# print dark pixels in bottom row
for y in range(450, height, 10):
    for x in range(120, 150):
        pixel = img.getpixel((x, y))
        if pixel[0] < 50 and pixel[1] < 100 and pixel[2] < 50:
            print("Dark at", x, y)
