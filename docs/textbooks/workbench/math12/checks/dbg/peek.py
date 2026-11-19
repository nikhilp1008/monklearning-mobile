"""Open a Maths 12 part and print the on-screen text nodes with invisible characters shown. Usage: peek.py ch part [swipes]"""
import importlib.util, os, sys, time
HERE = os.path.expanduser('~/Developer/monk-books')
spec = importlib.util.spec_from_file_location('d', os.path.join(HERE, 'drive-c11.py'))
d = importlib.util.module_from_spec(spec); spec.loader.exec_module(d)
d.KLASS, d.SUBJECT = 12, 'mathematics'
T = {11: 'Three Dimensional Geometry', 12: 'Linear Programming'}
n, part = int(sys.argv[1]), int(sys.argv[2]); sw = int(sys.argv[3]) if len(sys.argv) > 3 else 0
d.LIST_TITLES.clear(); d.LIST_TITLES.update({n: T[n]})
d.link('textbook-part', n, f'&part={part}'); time.sleep(8)
for _ in range(sw):
    d.adb('shell', 'input', 'swipe', '540', '1700', '540', '900', '800'); time.sleep(1.5)
M = {' ': '[NB]', '⁠': '[WJ]', ' ': '[HAIR]', ' ': '[THIN]', ' ': '[NNB]', '￼': '[OBJ]', '​': '[ZW]'}
for t, c in d.nodes():
    if t.strip():
        print(c, ''.join(M.get(ch, ch) for ch in t)[:400])
d.shot(os.path.join(HERE, 'math12', 'checks', 'dbg', f'p{n}-{part}-{sw}.png'))
