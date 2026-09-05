from PIL import Image

img = Image.open('/Users/naveen/.gemini/antigravity/brain/ac04825c-640c-4859-b91f-99b3fa2ba19c/.user_uploaded/media_1788597283276.png').convert('RGBA')

data = img.getdata()
new_data = []
for item in data:
    if item[0] < 120 and item[1] < 120 and item[2] < 120:
        new_data.append(item)
    else:
        new_data.append((255, 255, 255, 0))
img.putdata(new_data)

def crop_and_trim(x, y, name):
    box = img.crop((x-40, y-40, x+40, y+40))
    bbox = box.getbbox()
    if bbox:
        box = box.crop(bbox)
        box.save(f'public/images/icons/services/{name}.png')
        print(f"Saved {name} with size {box.size}")
    else:
        print(f"Failed to find bounds for {name}")

crop_and_trim(134, 106, 'firm-registration')
crop_and_trim(460, 106, 'ipr')
crop_and_trim(788, 106, 'auditing-accounting')
# Bottom row centers
crop_and_trim(134, 590, 'income-tax')
crop_and_trim(460, 590, 'gst')
crop_and_trim(788, 590, 'licensing')

