"""Formula cards only, for chapter n, into out: python3 cards-only.py n out"""
import importlib.util, json, os, sys
HERE = os.path.dirname(os.path.abspath(__file__))
n, out = int(sys.argv[1]), sys.argv[2]
spec = importlib.util.spec_from_file_location('d', os.path.join(HERE, 'drive-c11.py'))
d = importlib.util.module_from_spec(spec)
spec.loader.exec_module(d)
d.OUT, d.KLASS, d.SUBJECT = out, 12, 'mathematics'
d.LIST_TITLES.clear()
d.LIST_TITLES.update({1: 'Relations and Functions', 2: 'Inverse Trigonometric Functions', 3: 'Matrices', 4: 'Determinants', 5: 'Continuity and Differentiability', 6: 'Applications of Derivatives', 7: 'Integrals', 8: 'Application of Integrals', 9: 'Differential Equations', 10: 'Vector Algebra', 11: 'Three Dimensional Geometry', 12: 'Linear Programming', 13: 'Probability'})
os.makedirs(out, exist_ok=True)
d.cards(json.load(open(os.path.join(HERE, 'math12', f'manifest-m12-{n:02d}.json')))[0])
