"""Reading pages only (the main shoot's proven method): python3 pages-only.py n out idx idx ..."""
import importlib.util, json, os, sys
HERE = os.path.dirname(os.path.abspath(__file__))
n, out, idx = int(sys.argv[1]), sys.argv[2], [int(x) for x in sys.argv[3:]]
spec = importlib.util.spec_from_file_location('d', os.path.join(HERE, 'drive-c11.py'))
d = importlib.util.module_from_spec(spec)
spec.loader.exec_module(d)
d.OUT, d.KLASS, d.SUBJECT = out, 11, 'mathematics'
d.LIST_TITLES.clear()
d.LIST_TITLES.update({11: 'Introduction to Three Dimensional Geometry', 12: 'Limits and Derivatives', 13: 'Statistics', 14: 'Probability'})
os.makedirs(out, exist_ok=True)
by = {p['index']: p for p in json.load(open(os.path.join(HERE, 'math11', f'manifest-m11-{n}.json')))[0]['parts']}
d.pages(n, [{'ch': n, 'index': i, 'topic': by[i]['topic'], 'part': by[i]['part']} for i in idx])
