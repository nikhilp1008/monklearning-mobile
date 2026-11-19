"""Formula cards only, for chapter n, into out: python3 cards-only.py n out"""
import importlib.util, json, os, sys
HERE = os.path.dirname(os.path.abspath(__file__))
n, out = int(sys.argv[1]), sys.argv[2]
spec = importlib.util.spec_from_file_location('d', os.path.join(HERE, 'drive-c11.py'))
d = importlib.util.module_from_spec(spec)
spec.loader.exec_module(d)
d.OUT, d.KLASS, d.SUBJECT = out, 11, 'mathematics'
d.LIST_TITLES.clear()
d.LIST_TITLES.update({11: 'Introduction to Three Dimensional Geometry', 12: 'Limits and Derivatives', 13: 'Statistics', 14: 'Probability'})
os.makedirs(out, exist_ok=True)
d.cards(json.load(open(os.path.join(HERE, 'math11', f'manifest-m11-{n}.json')))[0])
