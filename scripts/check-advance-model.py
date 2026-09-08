#!/usr/bin/env python3
"""
How wrong is the width model, on the labels this app actually draws?

    python3 scripts/check-advance-model.py [build/trees]

WHY THIS IS NOT A TEST
lib/widgets/chrome.ts and scripts/verify-render.mjs estimate a string's width
as (code units) x (font size) x (a per-family MEAN advance) x (a 5% margin).
A mean is not a bound. Asserting "the margin is enough" inside the same
arithmetic that defines the margin proves nothing — it is the identity
CLAUDE.md's "a self-check must not be an identity" section is about.

So this takes an INDEPENDENT route to the same quantity: it opens the .ttf
files with fontTools and sums the real per-glyph advance of every label in
every checked-in render tree, then compares that to what the model charged.
Nothing here imports the model; it re-reads only the generated table's family
names so it knows which face to open.

WHAT IT CANNOT SEE
The true number here is the sum of NOMINAL advances, not the shaped width.
For Latin that is the same thing to within kerning (which only ever narrows).
For Devanagari it is an over-estimate, because a virama fuses the consonants
around it into a conjunct narrower than its parts — so a Devanagari label's
real error is MORE favourable than this reports, never less.

READ THE OUTPUT AS: a positive margin means the model charged more than the
glyphs need, which is the safe direction. A negative one is a label that will
be wider on a device than either the widget or the gate believes.
"""
import json
import os
import statistics
import string
import sys

from fontTools.ttLib import TTFont

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TABLE = json.load(open(os.path.join(ROOT, 'lib', 'widgets', 'advance-widths.json'),
                       encoding='utf-8'))
GF = os.path.join(ROOT, 'node_modules', '@expo-google-fonts')

PATHS = {
    'Onest_400Regular': f'{GF}/onest/400Regular/Onest_400Regular.ttf',
    'Onest_500Medium': f'{GF}/onest/500Medium/Onest_500Medium.ttf',
    'Onest_600SemiBold': f'{GF}/onest/600SemiBold/Onest_600SemiBold.ttf',
    'Onest_700Bold': f'{GF}/onest/700Bold/Onest_700Bold.ttf',
    'Onest_800ExtraBold': f'{GF}/onest/800ExtraBold/Onest_800ExtraBold.ttf',
    'AnekDevanagari_500Medium': f'{GF}/anek-devanagari/500Medium/AnekDevanagari_500Medium.ttf',
    'Menlo': '/System/Library/Fonts/Menlo.ttc',
}
_cache = {}


def face(name):
    if name not in _cache:
        path = PATHS.get(name)
        if path is None or not os.path.exists(path):
            _cache[name] = None
        else:
            f = (TTFont(path, fontNumber=0, lazy=True) if path.endswith('.ttc')
                 else TTFont(path, lazy=True))
            _cache[name] = (f['head'].unitsPerEm, f.getBestCmap(), f['hmtx'])
    return _cache[name]


def true_em(text, family):
    """Sum of nominal advances, in em. Devanagari always from the Deva face."""
    latin = face(family) or face(TABLE['latinFallbackFamily'])
    deva = face(TABLE['devanagariFamily'])
    total, unmapped = 0.0, 0
    for ch in text:
        cp = ord(ch)
        upm, cmap, hmtx = deva if 0x0900 <= cp <= 0x097F else latin
        g = cmap.get(cp)
        if g is None:
            unmapped += 1
            continue
        total += hmtx[g][0] / upm
    return total, unmapped


def model_em(text, family):
    latin = TABLE['latin'].get(family, TABLE['latin'][TABLE['latinFallbackFamily']])
    dmax = max(TABLE['devanagari'].values())
    m = TABLE['safetyMargin']
    total = 0.0
    for ch in text:
        cp = ord(ch)
        total += (TABLE['devanagari'].get(str(cp), dmax) if 0x0900 <= cp <= 0x097F
                  else latin) * m
    return total


def labels(node, out):
    if isinstance(node, list):
        for n in node:
            labels(n, out)
        return
    if not isinstance(node, dict):
        return
    p = node.get('props') or {}
    f = p.get('font')
    if isinstance(f, dict) and f.get('fontSize'):
        parts = []

        def dig(n):
            if isinstance(n, list):
                for x in n:
                    dig(x)
                return
            if not isinstance(n, dict):
                return
            c = (n.get('props') or {}).get('content')
            if isinstance(c, str):
                parts.append(c)
            for x in (n.get('children') or []):
                dig(x)
        for c in (node.get('children') or []):
            dig(c)
        text = ''.join(parts)
        if text:
            out.append((text, f.get('fontFamily'), f.get('fontSize')))
    for c in (node.get('children') or []):
        labels(c, out)


def main():
    d = sys.argv[1] if len(sys.argv) > 1 else os.path.join(ROOT, 'build', 'trees')
    rows, families, unmapped_total = [], {}, 0
    for name in sorted(os.listdir(d)):
        if not name.endswith('.json'):
            continue
        found = []
        labels(json.load(open(os.path.join(d, name), encoding='utf-8')), found)
        for text, family, size in found:
            fam = family or TABLE['latinFallbackFamily']
            families[fam] = families.get(fam, 0) + 1
            t, un = true_em(text, fam)
            unmapped_total += un
            m = model_em(text, fam)
            if t == 0:
                continue
            rows.append(((m - t) / t, m * size, t * size, text, fam, name))

    rows.sort()
    print(f'{len(rows)} labels across the trees in {d}')
    for fam, n in sorted(families.items(), key=lambda kv: -kv[1]):
        print(f'  {n:5d}  {fam}')
    marg = [r[0] for r in rows]
    print(f'\nmodel margin over the true nominal advance:')
    print(f'  worst   {marg[0] * 100:+.2f}%')
    print(f'  median  {statistics.median(marg) * 100:+.2f}%')
    print(f'  best    {marg[-1] * 100:+.2f}%')
    if unmapped_total:
        print(f'  ({unmapped_total} code units had no glyph in their face '
              f'and were charged nothing by the TRUE side)')
    under = [r for r in rows if r[0] < 0]
    print(f'\n{len(under)} label(s) the model UNDER-charges — these are wider on a '
          f'device than either chrome.ts or verify-render.mjs believes:')
    for margin, mw, tw, text, fam, tree in under[:15]:
        print(f'  {margin * 100:+7.2f}%  model {mw:6.1f}pt  true {tw:6.1f}pt  '
              f'{fam:24s} {text!r}')
        print(f'            {tree}')
    return 1 if under else 0


if __name__ == '__main__':
    raise SystemExit(main())
