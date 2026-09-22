#!/usr/bin/env python3
"""Ground truth for the mixed-face width fixtures, straight from the .ttf files.

    python3 scripts/measure-type-fixtures.py

Writes lib/widgets/__tests__/type-fixtures.json: for each fixture string, the
summed advance at 12pt taken from Onest for the characters Onest maps and from
Inter for the rest.

This is deliberately a SECOND, INDEPENDENT route to a number chrome.ts also
computes. It shares no code with chrome.ts — different language, different
library, and it walks the cmap itself rather than reading the generated
advance-widths.json — so agreement between the two is evidence, where a check
that rearranged chrome's own arithmetic would be an identity and could not
fail. lib/widgets/CLAUDE.md: "If you cannot state what a check could catch,
it catches nothing."

What it catches: a wrong run split (a character drawn in the face that does
not have it), a stale advance-widths.json, and a codepoint priced from the
wrong table.
"""
import json
from pathlib import Path
from fontTools.ttLib import TTFont

ROOT = Path(__file__).resolve().parent.parent
GF = ROOT / 'node_modules/@expo-google-fonts'
SIZE = 12

#: The five the directive names, each exercising a different failure.
#:   Greek letter mid-Latin           lambda
#:   Greek + subscript + root         omega-nought
#:   superscript sign and digit       scientific notation, which
#:                                    data_table_trend emits on every negative
#:                                    exponent
#:   a lone companion character       Ohm
#:   micro sign against a Latin cap   microfarad
FIXTURES = ['λ = c/f', 'ω₀ = 1/√LC',
            '3.2 × 10⁻³', 'Ω', 'µF']


def advances(path):
    f = TTFont(path, lazy=True)
    upm = f['head'].unitsPerEm
    hmtx = f['hmtx']
    return {cp: hmtx[g][0] / upm for cp, g in f.getBestCmap().items()}


def main():
    board = advances(GF / 'onest/400Regular/Onest_400Regular.ttf')
    comp = advances(GF / 'inter/400Regular/Inter_400Regular.ttf')
    out = {}
    for s in FIXTURES:
        total = 0.0
        for ch in s:
            cp = ord(ch)
            if cp in board:
                total += board[cp]
            elif cp in comp:
                total += comp[cp]
            else:
                raise SystemExit(f'no bundled face draws U+{cp:04X} ({ch!r}) '
                                 f'in fixture {s!r}')
        out[s] = round(total * SIZE, 4)
    p = ROOT / 'lib/widgets/__tests__/type-fixtures.json'
    p.write_text(json.dumps(out, ensure_ascii=False, indent=1) + '\n')
    print(f'wrote {p}')
    for k, v in out.items():
        print(f'  {k!r:22} {v}pt at {SIZE}pt')


if __name__ == '__main__':
    main()
