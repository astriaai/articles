"""Caption the America Basics denim walkthrough captured in production Darkroom.

Usage: /usr/bin/python3 render.py /path/to/capture
The capture directory contains the numbered 1280 x 720 JPEGs under frames/.
Requires Pillow, ffmpeg and the macOS Helvetica font.
"""
from io import BytesIO
import json
from pathlib import Path
import subprocess
import sys

from PIL import Image, ImageDraw, ImageFont

NOTES = Path(__file__).resolve().parent
SITE = NOTES.parents[1]
VIDEO = SITE / 'static/video/darkroom-color-match'
CAPTURE = Path(sys.argv[1]) / 'frames'
FPS = 8
FONT = ImageFont.truetype('/System/Library/Fonts/Helvetica.ttc', 27)
beats = json.loads((NOTES / 'capture-beats.json').read_text())


def timestamp(frame):
    seconds = frame / FPS
    return f'00:{int(seconds // 60):02d}:{seconds % 60:06.3f}'


def caption_frame(index, beat):
    with Image.open(CAPTURE / f'{index:05d}.jpg') as shot:
        canvas = Image.new('RGB', (1280, 804), '#10171d')
        canvas.paste(shot)
    draw = ImageDraw.Draw(canvas)
    point = beat['point']
    relative_time = (index - beat['start']) / FPS
    if point and 0 <= beat['at'] - relative_time <= 0.7:
        x, y = point
        ring = (x - 19, y - 19, x + 19, y + 19)
        draw.ellipse(ring, outline='#15242c', width=5)
        draw.ellipse(ring, outline='#6ae5f1', width=3)
    draw.text((30, 762), beat['label'], font=FONT, anchor='lm', fill='white')
    return canvas


timeline = []
written = 0
with subprocess.Popen([
    'ffmpeg', '-hide_banner', '-loglevel', 'error', '-y', '-f', 'image2pipe',
    '-framerate', str(FPS), '-vcodec', 'mjpeg', '-i', '-', '-an', '-c:v', 'libx264',
    '-preset', 'medium', '-crf', '17', '-pix_fmt', 'yuv420p', '-r', '24',
    '-movflags', '+faststart', str(VIDEO / 'walkthrough.mp4'),
], stdin=subprocess.PIPE) as encoder:
    for beat in beats:
        start = written
        for index in range(beat['start'], beat['end']):
            image = caption_frame(index, beat)
            encoded = BytesIO()
            image.save(encoded, 'JPEG', quality=95)
            # Hold a real frame during Before so the pale original is easy to inspect.
            copies = 13 if index == 311 else 1
            encoder.stdin.write(encoded.getvalue() * copies)
            written += copies
        timeline.append(dict(start=start/FPS, end=written/FPS, label=beat['label']))
    encoder.stdin.close()
    if encoder.wait():
        raise RuntimeError('Video encoding failed')

(NOTES / 'timeline.json').write_text(json.dumps(timeline, indent=2)+'\n')
(VIDEO / 'walkthrough.vtt').write_text('WEBVTT\n\n'+'\n\n'.join(
    f"{timestamp(round(b['start']*FPS))} --> {timestamp(round(b['end']*FPS))}\n{b['label']}"
    for b in timeline)+'\n')
# Opening comparison: the pale render beside its unselected indigo reference.
with Image.open(CAPTURE / '00100.jpg') as poster:
    poster.save(SITE / 'static/img/darkroom-color-match/walkthrough-poster.webp',
                'WEBP', quality=92)
print(f'{written/FPS:.3f} seconds, {len(timeline)} caption cues')
