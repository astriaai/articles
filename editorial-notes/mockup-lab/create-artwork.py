"""Original fictional demonstration artwork; no customer or stock brand assets."""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

OUT = Path(__file__).resolve().parents[2] / 'static/img/mockup-lab'
OUT.mkdir(parents=True, exist_ok=True)
navy = '#203d4c'
cream = '#f5f0e6'

# An isolated mark: transparent padding allows natural breathing room on a cup.
logo = Image.new('RGBA', (1600, 1600), (0, 0, 0, 0))
d = ImageDraw.Draw(logo)
font = '/System/Library/Fonts/Avenir Next.ttc'
d.arc((555, 330, 1045, 820), 190, 350, fill=navy, width=20)
d.line((610, 640, 990, 640), fill=navy, width=12)
d.text((800, 760), 'COVE', font=ImageFont.truetype(font, 205), fill=navy, anchor='mm')
d.text((800, 920), 'COFFEE & GOODS', font=ImageFont.truetype(font, 44), fill=navy, anchor='mm')
d.text((800, 1000), 'DAILY RITUALS', font=ImageFont.truetype(font, 30), fill=navy, anchor='mm')
logo.save(OUT / 'cove-artwork.png')

# Seamless geometric repeat, drawn at native resolution rather than upscaled.
pattern = Image.new('RGB', (1600, 1600), cream)
d = ImageDraw.Draw(pattern)
colors = ['#31586a', '#b8bca3', '#cb7f5e', '#e3d6ba']
for row in range(4):
    for col in range(4):
        x, y = col * 400, row * 400
        d.rectangle((x, y, x + 399, y + 399), fill=colors[(row + col) % 4])
        if (row + col) % 2:
            d.pieslice((x, y, x + 800, y + 800), 180, 270, fill=cream)
        else:
            d.pieslice((x - 400, y - 400, x + 400, y + 400), 0, 90, fill=cream)
pattern.save(OUT / 'cove-repeat.png')
pattern.save(OUT / 'cove-repeat.webp', quality=92)

# White-page preview makes the transparent source readable in the article.
preview = Image.new('RGBA', logo.size, cream)
preview.alpha_composite(logo)
preview.convert('RGB').save(OUT / 'cove-artwork-preview.webp', quality=92)
