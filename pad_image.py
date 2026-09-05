from PIL import Image

def pad_image(path, scale=0.8):
    img = Image.open(path).convert("RGBA")
    new_w = int(img.width / scale)
    new_h = int(img.height / scale)
    
    # Create a new transparent image
    new_img = Image.new("RGBA", (new_w, new_h), (0, 0, 0, 0))
    
    # Paste the original image into the center
    offset_x = (new_w - img.width) // 2
    offset_y = (new_h - img.height) // 2
    new_img.paste(img, (offset_x, offset_y))
    
    new_img.save(path)
    print(f"Padded {path}")

pad_image("public/images/icons/services/licensing.png", 0.75)
