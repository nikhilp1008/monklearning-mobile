"""Mathematics 12 Ch 13 Probability Android check: all formula cards, every diagram (each chip), and the
reading pages with fractions or a new layout (tables, cheat sheets, MCQs, the slotted range section). Shots to
math11/shots-03/. Screens compared on the reading area only (the teacher orb animates). Run under caffeinate."""
import hashlib, importlib.util, json, os, subprocess, tempfile
HERE = os.path.dirname(os.path.abspath(__file__))
spec = importlib.util.spec_from_file_location('d', os.path.join(HERE, 'drive-c11.py'))
d = importlib.util.module_from_spec(spec)
spec.loader.exec_module(d)
d.OUT = os.path.join(HERE, 'math12', 'shots-13')
d.KLASS = 12
d.SUBJECT = 'mathematics'
d.LIST_TITLES.clear()
d.LIST_TITLES.update({13: "Probability"})
os.makedirs(d.OUT, exist_ok=True)
TMP = os.path.join(tempfile.gettempdir(), 'm12-13-crop.png')


def area_md5(path):
    subprocess.run(['sips', '-c', '1800', '1080', '--cropOffset', '250', '0', path, '--out', TMP], capture_output=True)
    return hashlib.md5(open(TMP, 'rb').read()).hexdigest()


d.md5 = area_md5
ch = json.load(open(os.path.join(HERE, 'math12', 'manifest-m12-13.json')))[0]
by = {p['index']: p for p in ch['parts']}
PAGES = json.load(open(os.path.join(HERE, 'math12', 'pages-m12-13.json')))
print(len(PAGES), PAGES, flush=True)
d.cards(ch)
if ch['diagrams']: d.diagrams(ch)  # a chapter with no drawings (Maths 12 Ch 4)
d.pages(13, [{"ch": 13, 'index': i, 'topic': by[i]['topic'], 'part': by[i]['part']} for i in PAGES])
d.log('DONE')
