"""Mathematics 11 Ch 0 Basic Mathematics (Raasikh's): every reading page and any diagrams. Shots to math11/shots-00/.
Start Metro with --clear and force-stop the app first."""
import hashlib, importlib.util, json, os, subprocess, tempfile
HERE = os.path.dirname(os.path.abspath(__file__))
spec = importlib.util.spec_from_file_location('d', os.path.join(HERE, 'drive-c11.py'))
d = importlib.util.module_from_spec(spec)
spec.loader.exec_module(d)
d.OUT = os.path.join(HERE, 'math11', 'shots-00')
d.KLASS = 11
d.SUBJECT = 'mathematics'
d.LIST_TITLES.clear()
d.LIST_TITLES.update({0: "Basic Mathematics"})
os.makedirs(d.OUT, exist_ok=True)
TMP = os.path.join(tempfile.gettempdir(), 'm11-00-crop.png')
def area_md5(path):
    subprocess.run(['sips', '-c', '1800', '1080', '--cropOffset', '250', '0', path, '--out', TMP], capture_output=True)
    return hashlib.md5(open(TMP, 'rb').read()).hexdigest()
d.md5 = area_md5
ch = json.load(open(os.path.join(HERE, 'math11', 'manifest-m11-00.json')))[0]
if ch['diagrams']: d.diagrams(ch)
d.pages(0, [{"ch": 0, 'index': p['index'], 'topic': p['topic'], 'part': p['part']} for p in ch['parts']])
d.log('DONE')
