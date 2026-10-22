"""Original artwork for the apparel and bedding walkthroughs, at native size."""
from pathlib import Path
import math
from PIL import Image, ImageDraw, ImageFont

OUT = Path(__file__).resolve().parents[2] / 'static/img/mockup-lab'
NAVY = '#263e4b'
SAGE = '#6d7965'
RUST = '#b6684e'
IVORY = '#f6f0e5'
FONT = '/System/Library/Fonts/Avenir Next.ttc'

def branch(draw, x, y, scale=1, color=SAGE, lean=1):
    points = [(x + lean * math.sin(i / 18) * 32 * scale, y - i * 5 * scale) for i in range(75)]
    draw.line(points, fill=color, width=max(2, round(5 * scale)))
    for i in range(7, 65, 9):
        sx, sy = points[i]
        side = -1 if (i // 9) % 2 else 1
        ex, ey = sx + side * 70 * scale, sy - 65 * scale
        draw.polygon([(sx, sy), (sx + side * 26 * scale, sy - 60 * scale), (ex, ey), (sx + side * 52 * scale, sy - 10 * scale)], fill=color)
        draw.line([(sx, sy), (ex, ey)], fill=IVORY, width=max(1, round(2 * scale)))

def flower(draw, x, y, radius, color=RUST):
    for i in range(8):
        a = i * math.pi / 4
        cx, cy = x + math.cos(a) * radius * .65, y + math.sin(a) * radius * .65
        draw.ellipse((cx - radius * .42, cy - radius * .42, cx + radius * .42, cy + radius * .42), fill=color)
    draw.ellipse((x-radius*.25,y-radius*.25,x+radius*.25,y+radius*.25),fill=NAVY)
    for i in range(8):
        a=i*math.pi/4
        cx,cy=x+math.cos(a)*radius*.14,y+math.sin(a)*radius*.14
        draw.ellipse((cx-2,cy-2,cx+2,cy+2),fill=IVORY)

art = Image.new('RGBA', (1800, 2000), (0,0,0,0))
d=ImageDraw.Draw(art)
d.text((900,360),'FIELD STUDIES',font=ImageFont.truetype(FONT,119),fill=NAVY,anchor='mm')
d.text((900,470),'BOTANICAL SERIES  /  06',font=ImageFont.truetype(FONT,39),fill=NAVY,anchor='mm')
branch(d,760,1390,1.8,SAGE,-1)
branch(d,1080,1390,1.55,NAVY,1)
d.line([(900,1390),(905,1080),(1010,850)],fill=NAVY,width=8)
d.line([(900,1390),(850,1050),(710,800)],fill=SAGE,width=7)
flower(d,1010,820,112)
flower(d,700,780,80)
flower(d,875,1000,64,color='#c89b5f')
d.line([(575,1490),(1225,1490)],fill=NAVY,width=3)
d.text((900,1560),'COASTAL WILDFLOWERS',font=ImageFont.truetype(FONT,47),fill=NAVY,anchor='mm')
d.text((900,1640),'OBSERVATIONS FROM THE SHORE',font=ImageFont.truetype(FONT,29),fill=NAVY,anchor='mm')
art.save(OUT/'field-studies-artwork.png')
# Upload-only compensation for the tested surface mapping; preserve the upright master.
art.transpose(Image.Transpose.FLIP_LEFT_RIGHT).save(OUT/'field-studies-wrapped-upload.png')
preview=Image.new('RGBA',art.size,IVORY);preview.alpha_composite(art)
preview.convert('RGB').save(OUT/'field-studies-artwork-preview.webp',quality=93)

# Motifs are contained inside each repeat cell; no cut edge produces a seam.
tile=Image.new('RGB',(1600,1600),IVORY)
d=ImageDraw.Draw(tile)
for row in range(4):
    for col in range(4):
        x=200+col*400
        y=360+row*400
        branch(d,x,y,.72,SAGE,1 if (row+col)%2 else -1)
        flower(d,x+70,y-240,28,color=RUST if (row+col)%2 else '#c89b5f')
        d.line([(x,y-100),(x+70,y-215)],fill=SAGE,width=3)
tile.save(OUT/'coastal-linen-repeat.png')
tile.save(OUT/'coastal-linen-repeat.webp',quality=93)
