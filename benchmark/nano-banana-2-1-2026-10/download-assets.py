"""Download the recorded, completed benchmark outputs; never submits generations."""
import json
from pathlib import Path
import subprocess
from PIL import Image

root = Path(__file__).resolve().parent
dest = root / 'assets' / 'outputs'
dest.mkdir(parents=True, exist_ok=True)
for run in json.loads((root / 'results.json').read_text()):
    for index, url in enumerate(run['images']):
        path = dest / f"{run['case']}-{run['model']}-{index:02}.jpg"
        if not path.exists():
            subprocess.run(['curl', '--fail', '--silent', '--show-error', '--location', url, '--output', str(path)], check=True)
        im = Image.open(path)
        print(path.name, im.size)
