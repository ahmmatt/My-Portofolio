from PIL import Image, ImageEnhance

def image_to_ascii(image_path, width=44, crop_box=None):
    """
    Convert image to ASCII art.
    crop_box: (left, top, right, bottom) as fractions 0-1
    """
    # Characters from darkest to lightest
    chars = '@%#WNMmwnkhjt+=;:,.\' '
    
    img = Image.open(image_path).convert('L')
    
    # Optional crop
    if crop_box:
        w, h = img.size
        box = (
            int(crop_box[0] * w),
            int(crop_box[1] * h),
            int(crop_box[2] * w),
            int(crop_box[3] * h),
        )
        img = img.crop(box)
    
    # Enhance contrast slightly
    img = ImageEnhance.Contrast(img).enhance(1.4)
    
    orig_w, orig_h = img.size
    aspect = orig_h / orig_w
    new_h = int(width * aspect * 0.48)
    img = img.resize((width, new_h), Image.LANCZOS)
    
    pixels = list(img.getdata())
    result = []
    for i in range(new_h):
        row = pixels[i * width:(i + 1) * width]
        line = ''
        for p in row:
            idx = int(p / 255 * (len(chars) - 1))
            line += chars[idx]
        result.append(line)
    return '\n'.join(result)

# Try converting pp_luigisww.png (the profile picture)
art = image_to_ascii(
    r'src/assets/pp_luigisww.png',
    width=44,
    crop_box=None  # use full image, it's already a square
)
print(art)
