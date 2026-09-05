from PIL import Image

img = Image.open('/Users/naveen/.gemini/antigravity/brain/ac04825c-640c-4859-b91f-99b3fa2ba19c/.user_uploaded/media_1788596435034.png').convert('RGBA')

# Make the background transparent for the icons so they blend perfectly.
# The background is roughly #f1f9f6. Let's make anything close to that transparent.
data = img.getdata()
new_data = []
for item in data:
    if item[0] > 230 and item[1] > 240 and item[2] > 235:
        new_data.append((255, 255, 255, 0))
    else:
        new_data.append(item)
img.putdata(new_data)

import os
os.makedirs('public/images/icons/why', exist_ok=True)

# Let's crop manually estimated regions for the 4 icons. 
# We'll make them 100x100 to ensure we capture the whole icon.
# Simple Process: x=465, y=70
img.crop((455, 60, 520, 120)).save('public/images/icons/why/simple-process.png')
# Expert Guidance: x=735, y=70
img.crop((735, 60, 790, 120)).save('public/images/icons/why/expert-guidance.png')
# Transparent Support: x=455, y=270
img.crop((455, 270, 520, 320)).save('public/images/icons/why/transparent-support.png')
# End-to-End Assistance: x=735, y=270
img.crop((735, 270, 790, 320)).save('public/images/icons/why/end-to-end-assistance.png')

print("Cropped icons!")
