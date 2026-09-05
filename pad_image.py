from PIL import Image

def pad_image(src_path, dest_path, scale=0.6):
    img = Image.open(src_path).convert("RGBA")
    new_w = int(img.width / scale)
    new_h = int(img.height / scale)
    
    # Create a new transparent image
    new_img = Image.new("RGBA", (new_w, new_h), (0, 0, 0, 0))
    
    # Paste the original image into the center
    offset_x = (new_w - img.width) // 2
    offset_y = (new_h - img.height) // 2
    new_img.paste(img, (offset_x, offset_y))
    
    new_img.save(dest_path)
    print(f"Padded {dest_path}")

pad_image("/Users/naveen/.gemini/antigravity/brain/ac04825c-640c-4859-b91f-99b3fa2ba19c/.user_uploaded/media_1788600205756.png", "public/images/icons/services/gst.png", 0.6)
pad_image("/Users/naveen/.gemini/antigravity/brain/ac04825c-640c-4859-b91f-99b3fa2ba19c/.user_uploaded/media_1788600145180.png", "public/images/icons/services/licensing-v2.png", 0.6)
