"""Re-shoot card sets (worked examples, MCQs) that the main shoot could not turn: open the part, and for each card
1..M tap › on the counter row at the top (919, 590), then scroll the card to its end, a shot per screen.
Usage: python3 reshoot-cards.py <chapter n> <out dir> <part index>:<cards> ..."""
import hashlib, importlib.util, json, os, re, subprocess, sys, tempfile, time

HERE = os.path.dirname(os.path.abspath(__file__))
spec = importlib.util.spec_from_file_location('d', os.path.join(HERE, 'drive-c11.py'))
d = importlib.util.module_from_spec(spec)
spec.loader.exec_module(d)
d.KLASS, d.SUBJECT = 12, 'mathematics'
TITLES = {1: 'Relations and Functions', 2: 'Inverse Trigonometric Functions', 3: 'Matrices', 4: 'Determinants', 5: 'Continuity and Differentiability', 6: 'Applications of Derivatives', 7: 'Integrals', 8: 'Application of Integrals', 9: 'Differential Equations', 10: 'Vector Algebra', 11: 'Three Dimensional Geometry', 12: 'Linear Programming', 13: 'Probability'}
TMP = os.path.join(tempfile.gettempdir(), 'reshoot-crop.png')


def area_md5(path):
    # the reading area only: the teacher orb in the dock animates
    subprocess.run(['sips', '-c', '1500', '1080', '--cropOffset', '250', '0', path, '--out', TMP], capture_output=True)
    return hashlib.md5(open(TMP, 'rb').read()).hexdigest()


n, out = int(sys.argv[1]), sys.argv[2]
d.LIST_TITLES.clear()
d.LIST_TITLES.update({n: TITLES[n]})
os.makedirs(out, exist_ok=True)
# each part's page number inside its topic ("2 of 4"), from the shoot manifest
_parts = json.load(open(os.path.join(HERE, 'math12', f'manifest-m12-{n:02d}.json')))[0]['parts']
POS = {}
for p in _parts:
    POS[p['index']] = sum(1 for q in _parts if q['topic'] == p['topic'] and q['index'] <= p['index'])
d.OUT = out
for job in sys.argv[3:]:
    i, m = map(int, job.split(':'))
    for k in range(1, m + 1):
        d.link('textbook-part', n, f'&part={i}')
        time.sleep(6.0)
        for _ in range(3):  # the page can reopen part-way down: back to the top
            d.adb('shell', 'input', 'swipe', '540', '700', '540', '1900', '700')
            time.sleep(1.2)
        time.sleep(1.5)
        # The app remembers the card a set was left on: step to card k by its counter, either way.
        for _ in range(10):
            # The card counter sits between the ‹ and › arrows; a page's own "2/9" elsewhere is not it
            # (Maths 12 Ch 12 part 13 turned reading pages; Ch 13 part 63 never left card 1).
            nn = [(t.strip(), c) for t, c in d.nodes() if t.strip()]
            row = [nn[j] for j in range(len(nn)) if re.match(r'^\d+/\d+$', nn[j][0]) and int(nn[j][0].split('/')[1]) == m
                   and ((j > 0 and nn[j - 1][0] == '‹') or (j + 1 < len(nn) and nn[j + 1][0] == '›'))]
            if not row:
                d.log(f'ch{n}: part {i}: no card counter on screen')
                break
            at = int(row[0][0].split('/')[0])
            if at == k:
                break
            d.tap((922 if at < k else 722, row[0][1][1]), 3.0)
        # Open the card's answer so it is checked too: "Check answer" on practice, the first option on an MCQ
        # (any option opens the worked solution). Only nodes on the card, above the dock.
        for t, c in d.nodes():
            if t.strip().lower() in ('check answer', 'show answer', 'reveal answer') and c[1] < 1950:
                d.tap(c, 2.0)
                break
        else:
            opts = [c for t, c in d.nodes() if t.strip() == 'A' and 500 < c[1] < 1950]
            if opts:
                d.tap(opts[0], 2.0)
        s = 1
        prev = None
        while s < 15:
            p = os.path.join(out, f'r{n}-p{i:03d}-card{k}-{s:02d}.png')
            d.shot(p)
            time.sleep(0.3)
            h = area_md5(p)
            if h == prev:
                os.remove(p)
                break
            prev = h
            d.adb('shell', 'input', 'swipe', '540', '1700', '540', '900', '800')
            time.sleep(1.8)
            s += 1
        d.log(f'ch{n}: part {i} card {k}/{m}: {s - 1} shots')
d.log('DONE')
