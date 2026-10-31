"""Encode the reviewed Tudor frames without retouching or upscaling.

Usage: python3 editorial-notes/lynx/build-tudor-assets.py /path/to/source-files
Source directory must contain tudor-original.png, tudor-before.jpg and
tudor-after.jpg downloaded from the URLs in tudor-selection.json.
"""
import hashlib
import json
from pathlib import Path
import subprocess
import sys

root = Path(__file__).resolve().parents[2]
source = Path(sys.argv[1])
assets = root / 'static/img/lynx'
crop = (0.43, 0.405, 0.575, 0.595)
frames = []
expected_hashes = {
    'before': 'b33ede9cb208aff65597e7a07050a306260c93e5fbdf8c72882e0c084115e1e3',
    'after': '0d5c6a29e37a81d39b4e18c99d2209f3eb38c48d3c4d29ccb2ef708f3197d482',
}

def dimensions(path):
    return list(map(int, subprocess.check_output(
        ['magick', 'identify', '-format', '%w %h', str(path)], text=True).split()))

for role, filename in [('before', 'tudor-before.jpg'), ('after', 'tudor-after.jpg')]:
    original = source / filename
    assert hashlib.sha256(original.read_bytes()).hexdigest() == expected_hashes[role], f'Wrong {role} source frame'
    w, h = dimensions(original)
    x0, y0, x1, y1 = [round(v * dim) for v, dim in zip(crop, (w, h, w, h))]
    full = assets / f'47505171-{role}.webp'
    detail = assets / f'47505171-{role}-detail.webp'
    subprocess.run(['magick', str(original), '-resize', '2400x2400>', '-quality', '94', str(full)], check=True)
    subprocess.run(['magick', str(original), '-crop', f'{x1-x0}x{y1-y0}+{x0}+{y0}', '+repage', '-resize', '1200x1200>', '-quality', '96', str(detail)], check=True)
    frames.append(dict(role=role, source_sha256=hashlib.sha256(original.read_bytes()).hexdigest(), native_dimensions=[w,h], normalized_crop=crop, pixel_crop=[x0,y0,x1,y1], full_asset=str(full.relative_to(root)), full_dimensions=dimensions(full), detail_asset=str(detail.relative_to(root)), detail_dimensions=dimensions(detail)))

reference = source / 'tudor-original.png'
subprocess.run(['magick', str(reference), '-quality', '94', str(assets / '6000014-reference.webp')], check=True)
manifest = dict(prompt_id=47505171, reference_id=6000014, workspace_id=896, model='nano-banana-2', model_tune_id=4180298, resolution='4K', aspect_ratio='4:3', output_count=1,
    source_page='https://www.tudorwatch.com/en/watches/black-bay-58/m7939a1a0nu-0001',
    reference_url='https://media.tudorwatch.com/image/upload/v1/catalogue/0yi5ee8b69yh3/upright-cb-centred-with-drop-shadow/tudor-m7939a1a0nu-0001',
    reference_sha256=hashlib.sha256(reference.read_bytes()).hexdigest(), reference_dimensions=dimensions(reference),
    processing='Identical normalized crops, WebP encoding and downsampling only. No retouching or upscaling.', frames=frames)
result = json.loads((root / 'editorial-notes/lynx/tudor-result.json').read_text())
assert result['id'] == 47505171 and result['trained_at'] and result['debug_images']
for frame, url in zip(frames, [result['debug_images'][0], result['images'][0]]):
    frame['url'] = url
manifest['selection_rationale'] = 'User explicitly selected this exact coastal wristshot pair on 2026-10-31, superseding the still life. Small text changes from malformed to readable. The extra lower TUDOR / GENEVE mark is absent from the reference and is explicitly disclosed in the article caption.'
(root / 'editorial-notes/lynx/tudor-selection.json').write_text(json.dumps(manifest, indent=2) + '\n')
print(json.dumps(manifest, indent=2))
