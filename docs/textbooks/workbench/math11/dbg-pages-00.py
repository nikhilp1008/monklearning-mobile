import importlib.util, os, sys, json
HERE = os.path.expanduser('~/Developer/monk-books')
spec = importlib.util.spec_from_file_location('d', os.path.join(HERE, 'drive-c11.py'))
d = importlib.util.module_from_spec(spec); spec.loader.exec_module(d)
d.OUT = os.path.join(HERE, 'math11', sys.argv[1]); d.KLASS = 11; d.SUBJECT = 'mathematics'
d.LIST_TITLES.clear(); d.LIST_TITLES.update({0: "Basic Mathematics"})
os.makedirs(d.OUT, exist_ok=True)
ch = json.load(open(os.path.join(HERE, 'math11', 'manifest-m11-00.json')))[0]
by = {p['index']: p for p in ch['parts']}
d.pages(0, [{"ch": 0, 'index': i, 'topic': by[i]['topic'], 'part': by[i]['part']} for i in map(int, sys.argv[2:])])
d.log('DONE')
