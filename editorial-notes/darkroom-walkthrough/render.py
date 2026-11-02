"""Render paced real-browser captures with instructional captions and click markers.

Input: /tmp/darkroom-walkthrough/frames and capture-beats.json (CUA screenshots).
No generated UI, image regeneration, or changes to the photographed product.
"""
import concurrent.futures
import json
from pathlib import Path
import subprocess

ROOT = Path(__file__).resolve().parents[2]
CAPTURE = Path('/tmp/darkroom-walkthrough')
OUT = ROOT / 'static/video/darkroom-color-match'
FRAMES = CAPTURE / 'captioned'
FRAMES.mkdir(exist_ok=True)
beats = json.loads((Path(__file__).parent / 'capture-beats.json').read_text())
# Retake 2–3 places the controls visibly in frame before clicking them.
beats = [beats[0], beats[14], beats[15], *beats[3:14]]
targets = [(1177,542),(1120,360),(1120,403),(732,670),(270,573),None,
           (680,330),(554,41),(1097,405),(1097,405),(1231,405),
           (1231,405),(1033,686),(1015,648)]
fps = 5
jobs = []
timeline = []
for beat, target in zip(beats, targets):
    start = len(jobs)
    for local, source in enumerate(range(beat['start'], beat['end'])):
        jobs.append((source, beat['label'], target if local < 8 else None))
    timeline.append({'start': start/fps, 'end': len(jobs)/fps, 'label':beat['label']})

def render(pair):
    index, (source, label, target) = pair
    cmd = ['/opt/homebrew/bin/magick', str(CAPTURE/'frames'/f'{source:05d}.jpg'),
           '-background', '#10171d', '-gravity','north','-extent','1280x816']
    if target:
        x,y = target
        cmd += ['-fill','none','-stroke','#35d3e5','-strokewidth','3',
                '-draw',f'circle {x},{y} {x+19},{y}']
    cmd += ['-font','/System/Library/Fonts/Helvetica.ttc','-fill','#ffffff',
            '-stroke','none','-gravity','northwest','-pointsize','26',
            '-annotate','+32+746',label,'-quality','94',str(FRAMES/f'{index:05d}.jpg')]
    subprocess.run(cmd,check=True)

with concurrent.futures.ThreadPoolExecutor(max_workers=4) as executor:
    list(executor.map(render,enumerate(jobs)))
subprocess.run(['/opt/homebrew/bin/ffmpeg','-hide_banner','-loglevel','error','-y',
    '-framerate',str(fps),'-i',str(FRAMES/'%05d.jpg'),'-c:v','libx264','-preset','medium',
    '-crf','19','-pix_fmt','yuv420p','-r','30','-movflags','+faststart',
    str(OUT/'walkthrough.mp4')],check=True)
def timestamp(value):
    return f'00:{int(value//60):02d}:{value%60:06.3f}'
(OUT/'walkthrough.vtt').write_text('WEBVTT\n\n'+'\n\n'.join(
    f"{timestamp(b['start'])} --> {timestamp(b['end'])}\n{b['label']}" for b in timeline)+'\n')
(Path(__file__).parent/'timeline.json').write_text(json.dumps(timeline,indent=2)+'\n')
subprocess.run(['/opt/homebrew/bin/magick',str(FRAMES/'00167.jpg'),'-quality','90',
    str(ROOT/'static/img/darkroom-color-match/walkthrough-poster.webp')],check=True)
print(f'Rendered {len(jobs)/fps:.1f}s, {len(jobs)} source captures, {len(timeline)} beats')
