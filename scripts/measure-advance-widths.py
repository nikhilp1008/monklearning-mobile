#!/usr/bin/env python3
"""
Regenerates lib/widgets/advance-widths.json from the font binaries this app
actually loads.

    python3 scripts/measure-advance-widths.py            # rewrite the JSON
    python3 scripts/measure-advance-widths.py --check    # fail if it is stale

WHY THIS EXISTS
lib/widgets/chrome.ts and scripts/verify-render.mjs both need to know how wide
a string will be before anything is laid out. They used to share one number,
CHAR_W = 0.58, "fitted to Latin, family-agnostic" — and a second, CHAR_W_DEVA
= 0.75, whose own doc comment said in capitals that it was NOT a measurement.

0.58 over-estimated Anek Latin 400 (0.4955) by 17%, and that 17% was the only
safety cushion the layout had. Onest 400 measures 0.5697, so the same 0.58
over-estimates it by 1.8% — the cushion is gone. Rather than pick a new
family-agnostic number and inherit the same problem at the next migration,
the widths are measured per family and per weight, here, from the .ttf files
in node_modules, and the safety margin is stated separately so a reader can
see which part is measurement and which part is insurance.

THE GLYPH SET
The Latin figure for a family is the mean advance width, in em, over 67
glyphs: A-Z, a-z, 0-9, space, full stop, comma, and the two parentheses. That
is a *typical-prose* estimate, not an upper bound — "WWW" in Onest 400 is
0.983 em per glyph, 73% above the mean, and no margin makes a mean-based
model safe against an adversarial string. What the margin buys is headroom
for ordinary board captions and readouts; scripts/check-advance-model.py
measures the real error against every label in build/trees.

DEVANAGARI IS PER CODEPOINT, NOT A MEAN
Both callers count JavaScript String.length, i.e. UTF-16 code units, and for
Devanagari a mean over code units is wrong in both directions at once:
below/above-base matras have ZERO advance (23 of the 128 mapped codepoints in
the block do), while base consonants average 0.649 em, well above any Latin
mean. The errors cancel unpredictably per string, which is exactly why
chrome.ts's old comment said "the fix is NOT a retuned constant". So the
Devanagari block is written out codepoint by codepoint, straight from hmtx.

That table is an UPPER BOUND on the shaped width, which is the safe direction:
shaping only ever removes width here. A virama is zero-advance and turns the
two consonants around it into one narrower conjunct, so summing the nominal
advances of क + ् + ष over-charges for क्ष rather than under-charging.

MENLO
theme.monoFontFamily is 'Menlo', and it is the family MOST widget text is
actually drawn in — every readout, every tick label. It is a system face, not
an npm package, so it is measured from the macOS copy when that is present
and otherwise carried as the recorded constant below. Menlo is monospaced:
every glyph is exactly 1233/2048 = 0.60205 em, so this is an exact number and
not a mean. The old 0.58 UNDER-charged it by 3.7%, on the majority of the
text on the board.
"""
import json
import os
import statistics
import string
import sys

from fontTools.ttLib import TTFont

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, 'lib', 'widgets', 'advance-widths.json')
GF = os.path.join(ROOT, 'node_modules', '@expo-google-fonts')

# 67 glyphs. Named here rather than described, so the number is reproducible.
LATIN_SET = string.ascii_letters + string.digits + " .,()"

# Families the board can draw with. Onest is the app's typeface after the
# migration; AnekDevanagari is kept because it is still loaded (it is the only
# Devanagari face) and figure labels can still be set in it.
LATIN_FONTS = {
    'Onest_400Regular': f'{GF}/onest/400Regular/Onest_400Regular.ttf',
    'Onest_500Medium': f'{GF}/onest/500Medium/Onest_500Medium.ttf',
    'Onest_600SemiBold': f'{GF}/onest/600SemiBold/Onest_600SemiBold.ttf',
    'Onest_700Bold': f'{GF}/onest/700Bold/Onest_700Bold.ttf',
    'Onest_800ExtraBold': f'{GF}/onest/800ExtraBold/Onest_800ExtraBold.ttf',
    'AnekDevanagari_500Medium': f'{GF}/anek-devanagari/500Medium/AnekDevanagari_500Medium.ttf',
}

DEVA_FONT = ('AnekDevanagari_500Medium',
             f'{GF}/anek-devanagari/500Medium/AnekDevanagari_500Medium.ttf')

MENLO_CANDIDATES = [
    '/System/Library/Fonts/Menlo.ttc',
    '/System/Library/Fonts/Supplemental/Menlo.ttc',
]
MENLO_RECORDED = 1233 / 2048  # 0.60205078125, uniform across every glyph


def latin_mean(path):
    f = TTFont(path, lazy=True)
    upm = f['head'].unitsPerEm
    cmap = f.getBestCmap()
    hmtx = f['hmtx']
    widths = [hmtx[cmap[ord(c)]][0] / upm for c in LATIN_SET if ord(c) in cmap]
    if len(widths) != len(LATIN_SET):
        raise SystemExit(f'{path}: only {len(widths)}/{len(LATIN_SET)} glyphs mapped')
    return round(statistics.mean(widths), 4)


def menlo_mean():
    for cand in MENLO_CANDIDATES:
        if not os.path.exists(cand):
            continue
        f = TTFont(cand, fontNumber=0, lazy=True)
        upm = f['head'].unitsPerEm
        cmap = f.getBestCmap()
        hmtx = f['hmtx']
        widths = {hmtx[cmap[ord(c)]][0] / upm for c in LATIN_SET if ord(c) in cmap}
        if len(widths) != 1:
            raise SystemExit(f'{cand}: Menlo is not monospaced here: {sorted(widths)}')
        return round(widths.pop(), 4), cand
    return round(MENLO_RECORDED, 4), 'recorded constant 1233/2048 (Menlo.ttc not on this machine)'


def devanagari_table():
    name, path = DEVA_FONT
    f = TTFont(path, lazy=True)
    upm = f['head'].unitsPerEm
    cmap = f.getBestCmap()
    hmtx = f['hmtx']
    table = {}
    for cp in range(0x0900, 0x0980):
        g = cmap.get(cp)
        if g is None:
            continue
        table[str(cp)] = round(hmtx[g][0] / upm, 4)
    return name, table


def build():
    menlo, menlo_src = menlo_mean()
    deva_family, deva = devanagari_table()
    latin = {n: latin_mean(p) for n, p in sorted(LATIN_FONTS.items())}
    latin['Menlo'] = menlo
    return {
        '_generated_by': 'scripts/measure-advance-widths.py — do not hand-edit',
        '_glyph_set': 'A-Z a-z 0-9 and " .,()" — 67 glyphs; mean advance in em',
        '_menlo_source': menlo_src,
        '_devanagari_note': (
            'per-codepoint advance in em from AnekDevanagari_500Medium hmtx, '
            'U+0900-U+097F. Zero means a mark with no advance width. An upper '
            'bound on the shaped width: conjuncts render narrower than the sum '
            'of their parts.'
        ),
        'safetyMargin': 1.05,
        '_safety_margin_note': (
            'NOT part of any measurement. A 5% cushion over the measured mean, '
            'applied by chrome.ts and verify-render.mjs alike. Kept as its own '
            'field so nobody has to guess which part of a width is measured.'
        ),
        'latinFallbackFamily': 'Menlo',
        'devanagariFamily': deva_family,
        'latin': latin,
        'devanagari': deva,
    }


def main():
    data = build()
    text = json.dumps(data, indent=1, ensure_ascii=True) + '\n'
    if '--check' in sys.argv:
        current = open(OUT, encoding='utf-8').read() if os.path.exists(OUT) else ''
        if current != text:
            print('advance-widths.json is STALE — run scripts/measure-advance-widths.py')
            return 1
        print('advance-widths.json is current.')
        return 0
    with open(OUT, 'w', encoding='utf-8') as fh:
        fh.write(text)
    print(f'wrote {OUT}')
    for k, v in data['latin'].items():
        print(f'  latin  {k:26s} {v}')
    print(f'  devanagari  {len(data["devanagari"])} codepoints, '
          f'{sum(1 for v in data["devanagari"].values() if v == 0)} zero-advance')
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
