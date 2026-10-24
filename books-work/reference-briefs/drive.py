"""Capture formula cards and diagram cases of Physics Class 12 chapters on the Android emulator.

Usage: python3 -I drive.py 1c 2d ...   (chapter number + c = cards, d = diagrams); needs manifest.json.
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
OUT = os.path.join(HERE, 'shots')
NEXT = (962, 2258)
PREV = (820, 2258)
KLASS = 12
LIST_TITLES = {1: 'Electric Charges and Fields', 2: 'Electrostatic Potential and Capacitance', 3: 'Current Electricity', 4: 'Moving Charges and Magnetism', 5: 'Magnetism and Matter', 6: 'Electromagnetic Induction', 7: 'Alternating Current', 8: 'Electromagnetic Waves'}


def adb(*args, out=None):
    if out:
        with open(out, 'wb') as f:
            subprocess.run([ADB, *args], stdout=f, check=True)
        return ''
    return subprocess.run([ADB, *args], capture_output=True, text=True).stdout


def tap(xy, wait=1.0):
    adb('shell', 'input', 'tap', str(xy[0]), str(xy[1]))
    time.sleep(wait)


def shot(path):
    adb('exec-out', 'screencap', '-p', out=path)


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


def link(screen, n):
    home()
    url = f"monklearningapp://{screen}?subject=physics&classLevel={KLASS}&title={quote(LIST_TITLES[n])}&number={n}"
    adb('shell', 'am', 'start', '-a', 'android.intent.action.VIEW', '-d', f"'{url}'")
    time.sleep(4.0)


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
        path = os.path.join(OUT, f'k{KLASS}-c{n:02d}-card{k:03d}.png')
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
            stable_shot(os.path.join(OUT, f'k{KLASS}-c{n:02d}-dg{j:02d}-{ci}.png'))
            if chip:
                adb('shell', 'input', 'swipe', '540', '900', '540', '1600', '300')
                time.sleep(0.8)
        if j < len(ch['diagrams']):
            tap(NEXT, 2.5)
    log(f'ch{n}: diagrams {len(ch["diagrams"])} done')


if __name__ == '__main__':
    manifest = {c['n']: c for c in json.load(open(os.path.join(HERE, 'manifest.json')))}
    os.makedirs(OUT, exist_ok=True)
    for job in sys.argv[1:]:
        n, part = int(job[:-1]), job[-1]
        (cards if part == 'c' else diagrams)(manifest[n])
        time.sleep(2.0)
    log('DONE')
