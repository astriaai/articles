"""Compose the real CUA browser capture, captions and pointer into a silent MP4.
Run with the bundled Python runtime after capturing frames in the directory below.
"""
import json, math, subprocess
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
ROOT=Path(__file__).resolve().parents[2]
CAPTURE=Path('/private/tmp/lynx-composer-recording')
meta=json.loads((CAPTURE/'capture.json').read_text())
frames=meta['frames']; events={e['event']:e['t'] for e in meta['events']}
font_path='/System/Library/Fonts/Supplemental/Arial.ttf'
font=ImageFont.truetype(font_path,25);small=ImageFont.truetype(font_path,18)
width,height=1200,640;fps=30;duration=14.5
# Preserve the screen capture at native resolution. Crop account/billing UI above it.
crop=(60,100,1220,640);offset=(20,64)
cog=(796.5,587.9);toggle=(781.5,354.7);generate=(1184,588)
keys=[(0,(440,414)),(1.4,(440,414)),(events['open advanced']-.25,cog),(events['open advanced']+.8,cog),(events['enable Lynx']-.25,toggle),(events['enable Lynx']+1.25,toggle),(events['close advanced']-.25,cog),(events['close advanced']+.5,cog),(12.3,generate),(duration,generate)]
def pointer(t):
 for (t0,p0),(t1,p1) in zip(keys,keys[1:]):
  if t0<=t<=t1:
   u=(t-t0)/(t1-t0);u=4*u*u*u if u<.5 else 1-(-2*u+2)**3/2
   dx=p1[0]-p0[0];dy=p1[1]-p0[1];bow=math.sin(math.pi*u)*.10
   return (p0[0]+dx*u-dy*bow,p0[1]+dy*u+dx*bow)
 return keys[-1][1]
raw_cache={};idx=0
out=ROOT/'static/video/lynx/enable-lynx.mp4';out.parent.mkdir(parents=True,exist_ok=True)
cmd=['ffmpeg','-hide_banner','-loglevel','error','-y','-f','rawvideo','-pix_fmt','rgb24','-s',f'{width}x{height}','-r',str(fps),'-i','-','-an','-c:v','libx264','-preset','medium','-crf','19','-g','30','-pix_fmt','yuv420p','-movflags','+faststart',str(out)]
proc=subprocess.Popen(cmd,stdin=subprocess.PIPE)
for n in range(round(duration*fps)):
 t=n/fps
 while idx+1<len(frames) and frames[idx+1]['t']<=t:idx+=1
 if idx not in raw_cache:
  raw_cache={idx:Image.open(CAPTURE/frames[idx]['file']).convert('RGB').crop(crop)}
 canvas=Image.new('RGB',(width,height),'#191919');canvas.paste(raw_cache[idx],offset);d=ImageDraw.Draw(canvas)
 if t<events['open advanced']:caption='1. With references attached, open the cog wheel.'
 elif t<events['enable Lynx']:caption='2. Find Lynx in Advanced options and switch it on.'
 elif t<events['close advanced']:caption='Lynx is enabled.'
 else:caption='3. Ready: select Generate to create your image.'
 d.text((22,19),caption,font=font,fill='white')
 d.text((22,615),'Automatic detail refinement · Manual Lynx areas are optional',font=small,fill='#c0c0c0')
 px,py=pointer(t);px=px-crop[0]+offset[0];py=py-crop[1]+offset[1]
 # Pointer overlay follows the actual controls; rings mark recorded click times.
 for at in events.values():
  dt=t-at
  if 0<=dt<.6:
   radius=13+25*dt/.6;d.ellipse((px-radius,py-radius,px+radius,py+radius),outline='#b7abff',width=3)
 shape=[(px,py),(px,py+24),(px+6,py+18),(px+11,py+29),(px+17,py+26),(px+12,py+16),(px+22,py+16)]
 d.polygon(shape,fill='white',outline='black',width=2)
 if n==round(8.4*fps):canvas.save(ROOT/'static/img/lynx/enable-lynx-poster.webp',quality=94,method=6)
 if n in [30,150,250,390]:canvas.save(CAPTURE/f'review-{n}.jpg',quality=94)
 proc.stdin.write(canvas.tobytes())
proc.stdin.close();assert proc.wait()==0
record={'source':'Live Astria composer, captured via CUA screenshots during actual UI actions','url':'https://www.astria.ai/prompts?ws=1092&text=lynx-activation-demo','workspace':1092,'capture_frames':len(frames),'capture_events':meta['events'],'source_crop':crop,'output':[width,height],'duration_seconds':duration,'fps':fps,'processing':'Native-resolution crop, instruction captions, animated pointer and click rings; real menu/toggle states, no fabricated interface','privacy':'Crop excludes account navigation, billing balance and generation metrics','generation':'No Generate click; no new media generation or charge','references':[5929781,3994556]}
(ROOT/'editorial-notes/lynx/composer-demo.json').write_text(json.dumps(record,indent=2)+'\n')
print(out, out.stat().st_size)
