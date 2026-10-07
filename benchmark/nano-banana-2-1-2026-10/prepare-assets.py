"""Package reviewed selections without resizing or cropping; no generative edits."""
import json
from pathlib import Path
from PIL import Image

root = Path(__file__).resolve().parent
public = root.parents[1] / 'static/img/model-benchmarks/2026-10/nb21'
public.mkdir(parents=True, exist_ok=True)
Image.open(root / 'assets/references/jacket.jpg').save(public / 'source-jacket.webp', quality=92)
for role in ['cast', 'necklace']:
    Image.open(root / f'assets/references/{role}.jpg').save(public / f'source-{role}.webp', quality=92)
runs = json.loads((root / 'results.json').read_text())
for run in runs:
    source = root / 'assets/outputs' / f"{run['case']}-{run['model']}-00.jpg"
    im = Image.open(source)
    run['actual_pixels'] = list(im.size)
    approved = (run['case'] == 'jacket' and run['model'] != 'nano-banana-2-1') or run['case'] in ['identity-front', 'identity-three-quarter', 'hero-portrait']
    if approved:
        name = f"{run['case']}-{run['model']}.webp"
        im.save(public / name, quality=92)
        run['eligible_candidate_asset'] = '/articles/img/model-benchmarks/2026-10/nb21/' + name
        run.pop('publication_note', None)
    else:
        run['eligible_candidate_asset'] = None
        run['publication_note'] = 'Internal only: exact label, product/accessory preservation or requested framing did not pass. See review.json.'
(root / 'results.json').write_text(json.dumps(runs, indent=2) + '\n')
