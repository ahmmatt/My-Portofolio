"""
Convert photo to ASCII art for README.md
Usage: python make_ascii.py <image_path>
"""
from PIL import Image
import sys

def image_to_ascii(image_path, width=42, chars=None):
    """Convert image to ASCII art with fine-grained shading."""
    if chars is None:
        # Dense to light shading characters
        chars = "@%#*W N M m w n k h j t + = ; : , . ` ' "
        chars = list(reversed(chars.split()))

    img = Image.open(image_path).convert('L')  # grayscale

    # Resize preserving aspect ratio, adjusting for character aspect ratio
    orig_w, orig_h = img.size
    aspect = orig_h / orig_w
    new_h = int(width * aspect * 0.45)  # chars are taller than wide
    img = img.resize((width, new_h), Image.LANCZOS)

    pixels = list(img.getdata())
    result = []
    for i in range(new_h):
        row = pixels[i * width:(i + 1) * width]
        line = ""
        for p in row:
            idx = int(p / 255 * (len(chars) - 1))
            line += chars[idx]
        result.append(line)
    return "\n".join(result)

if __name__ == "__main__":
    path = sys.argv[1] if len(sys.argv) > 1 else "face.jpg"
    art = image_to_ascii(path, width=42)
    print(art)
