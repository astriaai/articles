"""Original scene blockouts. No external photograph, image or font input.

These are composition/material references for reference-driven photo generation,
not photographs or depictions of an existing bedroom or manufactured product.
"""
from pathlib import Path
import hashlib, base64, json
from PIL import Image, ImageDraw

OUT = Path(__file__).resolve().parent
SIZE = (3000, 2250)

def poly(d, pts, fill, outline='#a6a297', width=5):
    d.polygon(pts, fill=fill)
    d.line(pts+[pts[0]], fill=outline, width=width, joint='curve')

def room():
    im=Image.new('RGB',SIZE,'#dddcd3'); d=ImageDraw.Draw(im)
    poly(d,[(0,0),(810,0),(810,1430),(0,1880)],'#d1d5d0')
    poly(d,[(810,0),(3000,0),(3000,1560),(810,1430)],'#e5e3d8')
    poly(d,[(0,1880),(810,1430),(3000,1560),(3000,2250),(0,2250)],'#c3ad8e')
    for x in range(-1000,4000,240): d.line([(810+x*.4,1430),(x,2250)],fill='#b7a083',width=3)
    # Tall, left-wall window with broad stone reveal; deliberately no wall decor.
    poly(d,[(120,220),(650,135),(650,1230),(120,1450)],'#a9b6b5')
    poly(d,[(150,255),(610,185),(610,1195),(150,1380)],'#f6f5e8')
    d.line([(380,220),(380,1290)],fill='#b5b8ad',width=18)
    d.line([(150,795),(610,645)],fill='#b5b8ad',width=18)
    return im,d

im,d=room()
# A low, broad oak headboard and full bed, with foot facing the viewer-left.
poly(d,[(1430,520),(2480,570),(2480,1290),(1430,1230)],'#b99970')
for x in range(1470,2480,36):d.line([(x,555),(x,1230)],fill='#ad8e68',width=3)
poly(d,[(610,1550),(1710,1680),(2540,1250),(1450,1140)],'#aa8963')
poly(d,[(610,1550),(1710,1680),(1710,1810),(610,1660)],'#94744e')
poly(d,[(1710,1680),(2540,1250),(2540,1380),(1710,1810)],'#9d7c55')
poly(d,[(680,1460),(1710,1595),(2460,1170),(1460,1070)],'#f3eee1')
poly(d,[(680,1460),(1710,1595),(1710,1690),(680,1550)],'#e3ded2')
poly(d,[(1710,1595),(2460,1170),(2460,1260),(1710,1690)],'#d5d0c5')
# One wide pillow with a clear boundary, plain fitted sheet, broad duvet folds.
poly(d,[(1510,1000),(2170,1050),(2350,800),(1710,750)],'#faf7ed')
poly(d,[(520,1460),(1500,1580),(2290,1160),(1330,1060)],'#f8f3e6')
poly(d,[(520,1460),(1500,1580),(1490,1890),(550,1760)],'#e4ddcd')
poly(d,[(1500,1580),(2290,1160),(2310,1490),(1490,1890)],'#d6cebe')
for pts in [[(750,1410),(820,1510),(800,1745)],[(1040,1290),(1090,1535),(1060,1810)],[(1420,1200),(1510,1500),(1570,1790)],[(1760,1295),(1880,1445),(1880,1635)]]:
    d.line(pts,fill='#cfc7b7',width=8,joint='curve')
# Small olive plinth instead of the previous bedroom's furniture/accessories.
poly(d,[(2560,1110),(2810,1125),(2870,1050),(2620,1035)],'#65786e')
poly(d,[(2560,1110),(2810,1125),(2810,1420),(2560,1400)],'#738176')
poly(d,[(2810,1125),(2870,1050),(2870,1350),(2810,1420)],'#50685e')
im.save(OUT/'original-bedding-blockout.png')

im=Image.new('RGB',SIZE,'#e3dfd3');d=ImageDraw.Draw(im)
poly(d,[(0,1550),(3000,1450),(3000,2250),(0,2250)],'#c3ad91')
# Original simple walnut bench in a quiet studio alcove; no chair source input.
poly(d,[(480,1140),(2050,1060),(2590,1330),(960,1460)],'#9b7753')
poly(d,[(960,1460),(2590,1330),(2590,1450),(960,1570)],'#765538')
for pts in [[(990,1530),(1130,1520),(1130,1950),(990,1960)],[(2380,1410),(2500,1400),(2500,1820),(2380,1840)],[(540,1240),(650,1250),(650,1650),(540,1660)]]:poly(d,pts,'#745337')
# Ivory cotton throw drapes across the seat and down the front, broad creases.
poly(d,[(840,1130),(1700,1090),(2150,1330),(1190,1430)],'#f4edde')
poly(d,[(1190,1430),(2150,1330),(2120,1830),(1960,1930),(1690,1870),(1450,1980),(1210,1880)],'#e8dfcd')
for pts in [[(1020,1150),(1350,1400),(1380,1910)],[(1280,1130),(1560,1390),(1540,1910)],[(1510,1110),(1790,1370),(1770,1860)],[(1730,1150),(1990,1360),(1980,1900)]]:
    d.line(pts,fill='#cfc2ab',width=13,joint='curve')
for x in range(1220,2130,18):
    y=1880+int(35*__import__('math').sin(x/70))
    d.line([(x,y-20),(x+5,y+75)],fill='#d6c9b1',width=5)
# Distinct blue-grey arched niche and small ceramic bowl, without copied decor.
d.rounded_rectangle((2280,200,2800,1000),radius=260,fill='#b7c2bd')
d.rectangle((2280,550,2800,1000),fill='#b7c2bd')
d.ellipse((2410,850,2670,920),fill='#8a6750');d.arc((2410,810,2670,990),0,180,fill='#6e503c',width=20)
im.save(OUT/'original-throw-blockout.png')
for p in [OUT/'original-bedding-blockout.png',OUT/'original-throw-blockout.png']:
    b=p.read_bytes();print(json.dumps({'path':str(p),'byte_size':len(b),'checksum':base64.b64encode(hashlib.md5(b).digest()).decode(),'content_type':'image/png'}))
