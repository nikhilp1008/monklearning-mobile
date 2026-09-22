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

# THE COMPANION FACE. Onest has no glyph for any Greek letter, subscript
# digit, superscript sign, micro sign or Ohm sign, and 40 of the 260 stored
# boards use one. iOS substitutes per glyph, so those characters render in the
# system face while the rest of the caption renders in Onest — a board set in
# two typefaces, which lib/widgets/CLAUDE.md names as reading like a bug.
#
# Inter over Noto Sans, measured 2026-09-22 against the 26 characters the
# corpus actually needs:
#
#                  covers   mean Latin advance   vs Onest    x-height
#   Onest            0/26         0.5931             --        0.527
#   Inter           23/26         0.6071          +2.4%        0.546
#   Noto Sans       22/26         0.5423          -8.6%        0.536
#
# Inter covers more AND sits within 2.4% of Onest's advance, so a companion
# run does not visibly change the rhythm of a line. Noto Sans is 8.6% narrower,
# which is a visible step mid-string at 12pt and would make every mixed cap
# measure short.
#
# The three Inter does not cover are U+2225, U+222E and U+2640, one use each
# in the whole corpus. They are REFUSED by name rather than bundled for, and
# the three boards re-authored — see companion_table's note in chrome.ts.
COMPANION_FONT = ('Inter_400Regular',
                  f'{GF}/inter/400Regular/Inter_400Regular.ttf')

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


def companion_table():
    """Per-codepoint advances for every character Onest cannot draw.

    Per CODEPOINT, not a mean. A Latin mean is defensible for Latin because
    the advances cluster; it is not defensible here, where the set spans a
    subscript digit and a capital Phi. Measured: U+2080 is 0.398 em and
    U+03A6 is 0.769 em in Inter, a 1.9x spread, and charging either at the
    0.607 mean is wrong by a quarter of a character in one direction or the
    other.

    Keyed the same way `devanagari` is — decimal codepoint as a string — so
    chrome.ts reads both with one lookup shape.
    """
    name, path = COMPANION_FONT
    f = TTFont(path, lazy=True)
    upm = f['head'].unitsPerEm
    cmap = f.getBestCmap()
    hmtx = f['hmtx']
    board = TTFont(LATIN_FONTS['Onest_400Regular'], lazy=True).getBestCmap()
    table = {}
    # Everything Inter maps that Onest does not, restricted to the ranges a
    # board can plausibly use. Shipping Inter's whole cmap would put ~2800
    # entries in a file read at module load for no benefit.
    ranges = [(0x00B5, 0x00B5), (0x0370, 0x03FF),          # micro, Greek
              (0x1D62, 0x1D6A),                             # Latin subscripts
              (0x2070, 0x209F),                             # super/subscripts
              (0x2200, 0x22FF),                             # maths operators
              (0x2190, 0x21FF)]                             # arrows
    for lo, hi in ranges:
        for cp in range(lo, hi + 1):
            if cp in board:          # Onest draws it; not a companion run
                continue
            g = cmap.get(cp)
            if g is None:
                continue
            table[str(cp)] = round(hmtx[g][0] / upm, 4)
    return name, table


def board_coverage_ranges():
    """Onest's own coverage, as ranges, so the runtime can tell SUPPORTED from
    UNSUPPORTED without shipping a cmap.

    Needed because the companion table answers only "does Inter have this and
    Onest not". It cannot answer "does anything have this", and that is the
    question a refusal has to ask. Without it a character in neither face
    would fall through to the board family's Latin mean and be drawn as tofu —
    the exact failure this whole change exists to remove, reintroduced one
    level down.

    Ranges rather than a list: Onest maps 1000-odd codepoints and the run-length
    form is about 90 pairs.
    """
    cmap = TTFont(LATIN_FONTS['Onest_400Regular'], lazy=True).getBestCmap()
    cps = sorted(cp for cp in cmap if cp >= 0x80)
    out, lo, prev = [], None, None
    for cp in cps:
        if lo is None:
            lo = prev = cp
        elif cp == prev + 1:
            prev = cp
        else:
            out.append([lo, prev]); lo = prev = cp
    if lo is not None:
        out.append([lo, prev])
    return out


def per_char_tables():
    """Per-codepoint advances for every family the board can draw Latin in.

    The `latin` means stay — callers that need ONE number for a family still
    use them, and an unmeasured codepoint still falls back to them. But a mean
    is a bad model of a real string: measured 2026-09-22, the Onest mean prices
    "3.2 x 10^-3" 27% high and "lambda = c/f" 30% high, because the mean is
    taken over A-Z a-z 0-9 while real strings are full of spaces, points,
    slashes and equals signs that are half that wide.

    Over-charging is the safe direction, so nothing was broken by it — it just
    meant captions were cut that would have fitted, and every cap derived from
    a mean was tighter than the board really is.
    """
    out = {}
    for name, path in sorted(LATIN_FONTS.items()):
        f = TTFont(path, lazy=True)
        upm = f['head'].unitsPerEm
        cmap = f.getBestCmap()
        hmtx = f['hmtx']
        t = {}
        for cp in list(range(0x20, 0x250)) + [0x2013, 0x2014, 0x2018, 0x2019,
                                              0x201C, 0x201D, 0x2022, 0x2026,
                                              0x00B0, 0x00B7, 0x00D7, 0x2212]:
            g = cmap.get(cp)
            if g is not None:
                t[str(cp)] = round(hmtx[g][0] / upm, 4)
        out[name] = t
    return out


def build():
    menlo, menlo_src = menlo_mean()
    deva_family, deva = devanagari_table()
    comp_family, comp = companion_table()
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
        '_companion_note': (
            'per-codepoint advance in em from Inter_400Regular hmtx, for every '
            'codepoint Onest does NOT map. A string is split into runs by '
            'coverage and each run is drawn AND measured in the face that has '
            'the glyph, so no character reaches the iOS per-glyph fallback. '
            'A codepoint in neither face is refused by the widget, not '
            'substituted.'),
        'companionFamily': comp_family,
        'companion': comp,
        '_board_coverage_note': (
            'Onest_400Regular cmap above U+007F, run-length encoded. Answers '
            '"can the board face draw this", which the companion table cannot: '
            'that one only says "can Inter draw what Onest cannot". A codepoint '
            'in neither is REFUSED rather than drawn, because drawing it means '
            'tofu or a third typeface.'),
        'boardCoverage': board_coverage_ranges(),
        '_per_char_note': (
            'per-codepoint advance in em, per family, U+0020-U+024F plus the '
            'punctuation a board actually uses. Falls back to the family mean '
            'in `latin` for anything not listed. Menlo is monospaced and is '
            'therefore its mean exactly, which is why it is not tabulated.'),
        'perChar': per_char_tables(),
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
    print(f'  per-char    ' + ', '.join(f'{k} {len(v)}' for k, v in data['perChar'].items()))
    print(f'  board cov.  {len(data["boardCoverage"])} ranges above U+007F')
    print(f'  companion   {len(data["companion"])} codepoints from '
          f'{data["companionFamily"]}')
    print(f'  devanagari  {len(data["devanagari"])} codepoints, '
          f'{sum(1 for v in data["devanagari"].values() if v == 0)} zero-advance')
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
