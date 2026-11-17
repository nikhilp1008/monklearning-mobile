"""Capture formula cards, diagram cases and risky reading pages of Chemistry Class 11 on the Android emulator.

Usage: python3 -I drive-c11.py 1c 2d 3p ...  (chapter + c = cards, d = diagrams, p = risky reading pages);
needs chem11/manifest-c11.json and chem11/risky-parts-c11.json. Shots go to chem11/shots/.
"""
import hashlib
import json
import os
import re
import subprocess
import sys
import time
from urllib.parse import quote

ADB = os.path.expanduser('~/Library/Android/sdk/platform-tools/adb')
HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, 'chem11', 'shots')
NEXT = (962, 2258)
PREV = (820, 2258)
KLASS = 11
SUBJECT = 'chemistry'
LIST_TITLES = {1: 'Some Basic Concepts', 2: 'Atomic Structure', 3: 'Classification of Elements', 4: 'Chemical Bonding', 5: 'Thermodynamics', 6: 'Equilibrium', 7: 'Redox Reactions', 8: 'General Organic Chemistry'}


def adb(*args, out=None):
    if out:
        with open(out, 'wb') as f:
            subprocess.run([ADB, *args], stdout=f, check=True)
        return ''
    return subprocess.run([ADB, *args], capture_output=True, text=True).stdout


def tap(xy, wait=1.0):
    adb('shell', 'input', 'tap', str(xy[0]), str(xy[1]))
    time.sleep(wait)


def frozen():
    """The app's "isn't responding" box is up (Nov 14: a two-hour run froze at Ch 7 page 99 and every later
    shot was of the box)."""
    return 'Application Not Responding' in adb('shell', 'dumpsys', 'window', 'windows')


def unfreeze():
    if frozen():
        log('ANR: the app froze; closing it and opening it again')
        adb('shell', 'am', 'force-stop', 'com.monklearning.mobile')
        time.sleep(3.0)


def shot(path):
    adb('exec-out', 'screencap', '-p', out=path)
    if frozen():
        log(f'ANR in shot {os.path.basename(path)}')


def nodes():
    adb('shell', 'uiautomator', 'dump', '/sdcard/ui.xml')
    x = adb('shell', 'cat', '/sdcard/ui.xml')
    found = []
    for m in re.finditer(r'<node [^>]*>', x):
        n = m.group(0)
        t = re.search(r' text="([^"]*)"', n)
        b = re.search(r'bounds="\[(\d+),(\d+)\]\[(\d+),(\d+)\]"', n)
        if not b:
            continue
        x1, y1, x2, y2 = map(int, b.groups())
        found.append(((t.group(1) if t else ''), ((x1 + x2) // 2, (y1 + y2) // 2)))
    return found


def unesc(s):
    return s.replace('&amp;', '&').replace('&quot;', '"').replace('&#39;', "'").replace('&lt;', '<').replace('&gt;', '>')


def find(label, starts=False, tries=3, swipe=True):
    for i in range(tries):
        for t, c in nodes():
            t = unesc(t)
            if t == label or (starts and t.startswith(label)):
                return c
        if swipe and i < tries - 1:
            adb('shell', 'input', 'swipe', '540', '1700', '540', '1000', '400')
            time.sleep(1.0)
    return None


def log(*a):
    print(*a, flush=True)


def home():
    for _ in range(6):
        if any(t == 'Textbooks' and c[1] > 2150 for t, c in nodes()):
            break
        adb('shell', 'input', 'keyevent', 'KEYCODE_BACK')
        time.sleep(1.5)
    tab = [c for t, c in nodes() if t == 'Home' and c[1] > 2150]
    if tab:
        tap(tab[0], 2.0)


def clear_error():
    """The development build's error overlay ("Console Error" / "Log 1 of 1", e.g. "Unable to activate keep
    awake" after the Mac wakes) covers the screen; it never appears in a store build. Dismiss it."""
    tmp = os.path.join(OUT, '_check.png')
    for _ in range(3):
        shot(tmp)
        out = subprocess.run([os.path.join(HERE, 'tools', 'ocr-fast'), tmp], capture_output=True, text=True).stdout
        if 'Console Error' not in out and not re.search(r'Log \d+ of \d+', out):
            break
        btn = [r.split('\t') for r in out.splitlines() if r.endswith('\tDismiss')]
        x, y, w, h = (map(int, btn[0][:4]) if btn else (100, 2250, 160, 50))
        log('dismissing the dev error overlay')
        tap((x + w // 2, y + h // 2), 1.5)
    if os.path.exists(tmp):
        os.remove(tmp)


def ensure_app():
    """The app must be in front, running the live code. Pressing Back to reach a home tab could leave the app
    for the development launcher (Oct 30), where every link then lands on the launcher. So: no Back presses;
    if the launcher (or anything else) is in front, open the app on the dev server again."""
    for _ in range(3):
        top = adb('shell', 'dumpsys', 'activity', 'activities')
        m = re.search(r'topResumedActivity=\S+ \S+ (\S+)', top)
        if m and m.group(1).startswith('com.monklearning.mobile/.MainActivity'):
            return
        log(f'app not in front ({m.group(1) if m else "?"}): reopening it')
        adb('shell', 'am', 'start', '-a', 'android.intent.action.VIEW', '-d', "'monklearningapp://expo-development-client/?url=http%3A%2F%2Flocalhost%3A8081'")
        time.sleep(35.0)
        clear_error()


def link(screen, n, extra=''):
    unfreeze()
    ensure_app()
    clear_error()
    url = f"monklearningapp://{screen}?subject={SUBJECT}&classLevel={KLASS}&title={quote(LIST_TITLES[n])}&number={n}{extra}"
    adb('shell', 'am', 'start', '-a', 'android.intent.action.VIEW', '-d', f"'{url}'")
    time.sleep(4.0)
    clear_error()


def counter():
    for t, c in nodes():
        m = re.match(r'^(\d+) of (\d+)$', t)
        if m:
            return int(m.group(1)), int(m.group(2))
    return None


def md5(path):
    return hashlib.md5(open(path, 'rb').read()).hexdigest()


def stable_shot(path, tries=10):
    shot(path)
    h = md5(path)
    for _ in range(tries):
        time.sleep(0.6)
        shot(path)
        h2 = md5(path)
        if h2 == h:
            return h
        h = h2
    return h


def cards(ch):
    n = ch['n']
    cn = None
    for _ in range(4):
        link('textbook-formulas', n)
        for _ in range(2):
            cn = counter()
            if cn and cn[1] == ch['cards']:
                break
            time.sleep(2.0)
        if cn and cn[1] == ch['cards']:
            break
        cn = None
    if not cn:
        log(f'ch{n}: formula sheet did not open (skipping)')
        return
    k0, total = cn
    for _ in range(k0 - 1):
        tap(PREV, 0.6)
    time.sleep(1.0)
    prev = None
    for k in range(1, total + 1):
        path = os.path.join(OUT, f'c{KLASS}-c{n:02d}-card{k:03d}.png')
        for attempt in range(6):
            h = stable_shot(path)
            if h != prev:
                break
            time.sleep(1.0)
            if attempt in (2, 4):
                tap(NEXT, 1.5)
        else:
            log(f'ch{n}: card {k} looks identical to card {k - 1}')
        prev = h
        if k < total:
            tap(NEXT, 1.2)
    log(f'ch{n}: cards {total}, counter at end {counter()}')


def diagrams(ch):
    n = ch['n']
    first_name = ch['diagrams'][0]['name']
    fc = None
    for _ in range(4):
        link('textbook-diagrams', n)
        time.sleep(1.5)
        fc = find(first_name[:18], starts=True, swipe=False)
        if fc:
            break
        time.sleep(2.0)
    if not fc:
        log(f'ch{n}: could not open first diagram ({first_name})')
        return
    tap(fc, 3.0)
    cn = counter()
    for _ in range(5):  # a slow diagram page shows its counter late (Maths 12 Ch 13)
        if cn:
            break
        time.sleep(2.0)
        cn = counter()
    if not cn or cn[1] != len(ch['diagrams']):
        log(f'ch{n}: diagram page counter {cn} != {len(ch["diagrams"])} (skipping)')
        return
    for _ in range(cn[0] - 1):
        tap(PREV, 1.0)
    for j, d in enumerate(ch['diagrams'], 1):
        if j > 1:
            for attempt in range(4):
                cn = counter()
                if cn and cn[0] == j:
                    break
                time.sleep(1.5)
                if attempt == 2:
                    tap(NEXT, 2.0)
            else:
                log(f'ch{n}: could not reach diagram {j} (counter {cn})')
                return
        chips = d['chips'] or [None]
        for ci, chip in enumerate(chips, 1):
            if chip:
                cc = find(chip, tries=2) or find(chip[:10], starts=True, tries=1, swipe=False)
                if cc:
                    tap(cc, 1.8)
                else:
                    log(f'ch{n}: diagram {j} chip not found: {chip}')
            stable_shot(os.path.join(OUT, f'c{KLASS}-c{n:02d}-dg{j:02d}-{ci}.png'))
            if chip:
                adb('shell', 'input', 'swipe', '540', '900', '540', '1600', '300')
                time.sleep(0.8)
        if j < len(ch['diagrams']):
            tap(NEXT, 2.5)
    log(f'ch{n}: diagrams {len(ch["diagrams"])} done')


# The fast recogniser: ~0.4 s a screen. The accurate one began failing on Oct 30 (Neural Engine error, 18 s a read).
OCR = os.path.join(HERE, 'tools', 'ocr-fast')
TOP, BOTTOM = 250, 2100   # below the header, above the reader's foot
SET_LABELS = ('solved example', 'crack the MCQ', 'practice')
NEXT_CARD_X = 922   # the › on a set's label row


_OCR_SEEN = {}


def ocr(path):
    """Text lines on a screenshot. Read once per distinct image: the shooter asks several times about the same
    unchanged screen (answers to open, options to tap, sets to turn), and each read takes ~1.5 s."""
    key = md5(path)
    if key in _OCR_SEEN:
        return _OCR_SEEN[key]
    out = subprocess.run([OCR, path], capture_output=True, text=True).stdout
    lines = []
    for row in out.splitlines():
        x, y, w, h, t = row.split('\t', 4)
        lines.append((int(x), int(y), int(w), int(h), t.strip()))
    _OCR_SEEN[key] = [l for l in lines if TOP < l[1] < BOTTOM]
    return _OCR_SEEN[key]


class Shooter:
    def __init__(self, n, i):
        self.n, self.i, self.k = n, i, 0

    def shot(self):
        self.k += 1
        path = os.path.join(OUT, f'c{KLASS}-c{self.n:02d}-p{self.i:03d}-{self.k:02d}.png')
        stable_shot(path)
        return path

    def reveal(self, path):
        """Open every visible practice answer, and try the visible MCQ's options in turn."""
        for _ in range(6):
            btn = [l for l in ocr(path) if l[4] == 'Check answer']
            if not btn:
                break
            x, y, w, h, _ = btn[0]
            tap((x + w // 2, y + h // 2), 1.2)
            path = self.shot()
        for k, letter in enumerate('ABCD'):
            lines = ocr(path)
            if any(l[4].lower() == 'solved' for l in lines):
                break
            # Each option's row from its letter; a letter the fast reader dropped is placed from its neighbours
            # (the options are evenly spaced).
            rows = {l[4][0]: l[1] + l[3] // 2 for l in lines if re.match(r'^[A-D]\s', l[4]) and l[0] < 260}
            if letter in rows:
                y = rows[letter]
            elif len(rows) >= 2:
                ks = sorted('ABCD'.index(c) for c in rows)
                a, b = ks[0], ks[-1]
                ya, yb = rows['ABCD'[a]], rows['ABCD'[b]]
                y = int(ya + (yb - ya) * (k - a) / (b - a))
            else:
                break
            tap((540, y), 1.2)
            path = self.shot()
        return path


def pages(n, risky):
    """Every risky reading page of chapter n: scrolled top to bottom; in every set of worked examples, MCQs or
    practice ("solved example", "crack the MCQ", "practice" label, "1/4 ›" counter) every card is turned, practice
    answers opened and MCQ options tried (shots c11-cNN-pIII-KK.png). Cards are turned by tapping › on the label's
    row until the screen stops changing: the OCR misreads counters ("‹ 3/5" as "83/sł")."""
    for r in [x for x in risky if x['ch'] == n]:
        i = r['index']
        link('textbook-part', n, f'&part={i}')
        time.sleep(2.0)
        sh = Shooter(n, i)
        path = sh.shot()
        for _ in range(30):
            path = sh.reveal(path)
            labels = [l for l in ocr(path) if l[4] in SET_LABELS and l[0] < 400]
            for x, y, w, h, t in labels:
                for _turn in range(12):
                    before = md5(path)
                    tap((NEXT_CARD_X, y + h // 2), 1.5)
                    new = sh.shot()
                    if md5(new) == before:
                        os.remove(new)
                        sh.k -= 1
                        break
                    path = sh.reveal(new)
            before = md5(path)
            adb('shell', 'input', 'swipe', '540', '1800', '540', '700', '600')
            time.sleep(1.2)
            path = sh.shot()
            if md5(path) == before:
                os.remove(path)
                sh.k -= 1
                break
        log(f'ch{n}: page {i} ({r["topic"]} {r["part"]}) {sh.k} shots')


if __name__ == '__main__':
    manifest = {c['n']: c for c in json.load(open(os.path.join(HERE, 'chem11', 'manifest-c11.json')))}
    risky = json.load(open(os.path.join(HERE, 'chem11', os.environ.get('RISKY', 'risky-parts-c11.json'))))
    os.makedirs(OUT, exist_ok=True)
    for job in sys.argv[1:]:
        n, part = int(job[:-1]), job[-1]
        if part == 'p':
            pages(n, risky)
        else:
            (cards if part == 'c' else diagrams)(manifest[n])
        time.sleep(2.0)
    log('DONE')
