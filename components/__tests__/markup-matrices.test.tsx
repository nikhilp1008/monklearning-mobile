/**
 * MATRICES AND DETERMINANTS IN THE READER. Mathematics 12 Ch 3–4 print every
 * matrix as a grid in brackets and every determinant between two bars, and so
 * does the app: <bmat>, <pmat> and <vmat>, one <r> per row and one <c> per
 * cell (components/textbook/markup.tsx gridRun), drawn inline, never
 * "[1 2; 3 4]" on one line.
 */
import React from 'react';
import { Platform } from 'react-native';
import TestRenderer, { act } from 'react-test-renderer';

import { Markup, markupToText, WJ } from '@/components/textbook/markup';
import { pieces, REF, width } from '@/content/textbooks/test-support/measure';
import { gridToText } from '@/lib/grid-text';
import { buildFormulaCards, pieceWidth } from '@/lib/revise/formula-cards';
import { boxes, cutAtSpaces, narrowGrids } from '@/lib/revise/formula-layout';
import type { Chapter } from '@/lib/textbooks';

type Json = TestRenderer.ReactTestRendererJSON;

function draw(html: string, look: 'pilot' | 'stix' = 'pilot', lineHeight = 24) {
  let r!: TestRenderer.ReactTestRenderer;
  act(() => {
    r = TestRenderer.create(<Markup html={html} size={16} look={look} style={{ fontFamily: look === 'pilot' ? 'Onest_400Regular' : 'STIXTwoText_400Regular', fontSize: 16, lineHeight, color: '#111' }} />);
  });
  return r.toJSON() as Json;
}

const kids = (j: Json) => (j.children ?? []) as (Json | string)[];
const styleOf = (j: Json) => Object.assign({}, ...[j.props.style].flat(3).filter(Boolean)) as Record<string, unknown>;

/** Every node in the drawn tree that passes `is`. */
function all(j: Json | string | null, is: (n: Json) => boolean): Json[] {
  if (j == null || typeof j === 'string') return [];
  return [...(is(j) ? [j] : []), ...kids(j).flatMap((c) => all(c, is))];
}
function strings(j: Json | string | null): string[] {
  if (j == null) return [];
  if (typeof j === 'string') return [j];
  return kids(j).flatMap(strings);
}
/** A cell: a Text that breaks simply and ends on the thin space (the slack Android needs; Mathematics 12 Ch 4), set at the line's own size (a fraction's half is smaller). */
const cells = (j: Json) => all(j, (n) => n.type === 'Text' && n.props.textBreakStrategy === 'simple' && styleOf(n).fontSize === 16 && strings(n).join('').endsWith('\u2009'));
const cellText = (j: Json) => cells(j).map((c) => strings(c).join('').replace(/[\u2009\u200a\u2060]/g, ''));

const A2 = '<bmat><r><c>1</c><c>2</c></r><r><c>3</c><c>−1</c></r></bmat>';
const D2 = '<vmat><r><c><i>a</i></c><c><i>b</i></c></r><r><c><i>c</i></c><c><i>d</i></c></r></vmat>';
const half = (n: string, d: string) => `<frac><num>${n}</num><den>${d}</den></frac>`;
const M33 = `<bmat><r><c>${half('1', '2')}</c><c>0</c><c>−${half('3', '4')}</c></r><r><c>2</c><c>${half('<i>x</i> + 1', '5')}</c><c>1</c></r><r><c>0</c><c>−1</c><c>${half('7', '8')}</c></r></bmat>`;

describe('parsing a matrix', () => {
  it('draws every cell as a Text of its own, column by column, and no tag or bracket as text', () => {
    const tree = draw(`<i>A</i> = ${A2}`);
    // Columns are drawn one after the other, each top to bottom.
    expect(cellText(tree)).toEqual(['1', '3', '2', '−1']);
    const text = strings(tree).join('');
    expect(text).not.toMatch(/<|\[|\]|bmat/);
  });

  it('keeps the matrix joined to what is written against it', () => {
    const text = strings(draw(`${A2}<sup>T</sup>, and`)).join('');
    expect(text.startsWith(WJ)).toBe(true);
    expect(text).toContain(WJ);
  });

  it('ignores the spaces and line breaks a writer leaves between the tags', () => {
    const tree = draw('<bmat>\n  <r> <c>1</c> <c>2</c> </r>\n  <r><c>3</c><c>4</c></r>\n</bmat>');
    expect(cellText(tree)).toEqual(['1', '3', '2', '4']);
  });

  it('lines up a short row with the columns it has, the missing cell left empty', () => {
    expect(cellText(draw('<bmat><r><c>1</c><c>2</c><c>3</c></r><r><c>4</c></r></bmat>'))).toEqual(['1', '4', '2', '', '3', '']);
  });

  it('draws inline markup in a cell: italics, scripts, ⋯ ⋮ ⋱ and fractions', () => {
    const tree = draw('<bmat><r><c><i>a</i><sub>11</sub></c><c>⋯</c></r><r><c>⋮</c><c>⋱</c></r></bmat> and ' + M33);
    const text = strings(tree).join('');
    expect(text).toMatch(/⋯/);
    expect(text).toMatch(/⋮/);
    expect(text).toMatch(/⋱/);
    // Four fractions in the 3 × 3, each with its rule.
    expect(all(tree, (n) => n.type === 'View' && !!styleOf(n).backgroundColor && styleOf(n).height !== undefined && (styleOf(n).height as number) < 2)).toHaveLength(4);
  });

  it('draws a malformed matrix (no rows) as its text, never losing it', () => {
    expect(strings(draw('<bmat>1 2</bmat>')).join('')).toContain('1 2');
  });
});

describe('the brackets and bars', () => {
  const fences = (j: Json) => all(j, (n) => n.type === 'View' && (styleOf(n).borderTopWidth !== undefined || (!!styleOf(n).backgroundColor && (styleOf(n).height as number) > 10)));
  it('<bmat> has two square brackets as tall as the grid', () => {
    const f = fences(draw(A2));
    expect(f).toHaveLength(2);
    expect(styleOf(f[0]).borderLeftWidth).toBeGreaterThan(0);
    expect(styleOf(f[1]).borderRightWidth).toBeGreaterThan(0);
    // Two rows of 1.35 × 16, less the inset each end.
    expect(styleOf(f[0]).height).toBeCloseTo(2 * 1.35 * 16 - 2 * 0.1 * 16);
  });
  it('<pmat> has two drawn round brackets', () => {
    expect(all(draw('<pmat><r><c>1</c></r><r><c>2</c></r></pmat>'), (n) => n.type === 'RNSVGPath' || n.type === 'Path')).toHaveLength(2);
  });
  it('<vmat> has two thin bars', () => {
    const f = fences(draw(D2));
    expect(f).toHaveLength(2);
    for (const bar of f) expect(styleOf(bar).width).toBeLessThan(2);
  });
});

describe('where the grid sits in the line', () => {
  const grid = (j: Json) => all(j, (n) => n.type === 'View' && styleOf(n).flexDirection === 'row' && !!styleOf(n).transform)[0];
  it('ends its box on the baseline and is moved down by a transform, never laid out below it', () => {
    const g = grid(draw(A2));
    const s = styleOf(g);
    expect(s.marginTop).toBeCloseTo(0.7 * 16 - (s.height as number));
    const shift = (s.transform as { translateY: number }[])[0].translateY;
    // Its middle at the middle of a line of Onest text: (0.97 − 0.305) / 2 em above the baseline.
    expect((s.height as number) / 2 - shift).toBeCloseTo(((0.97 - 0.305) / 2) * 16);
  });
  it('makes every row as tall as the tallest: a 3 × 3 with fractions has fraction rows', () => {
    expect(styleOf(grid(draw(M33))).height).toBeCloseTo(3 * 2.1 * 16);
  });
  it('keeps a row vector about one line high', () => {
    expect(styleOf(grid(draw('<bmat><r><c>1</c><c>2</c><c>3</c></r></bmat>'))).height).toBeCloseTo(1.35 * 16);
  });
});

describe('the line a matrix sits on grows to hold it', () => {
  const OS = Platform.OS;
  afterEach(() => {
    Platform.OS = OS;
  });
  const lineHeights = (j: Json) => all(j, (n) => n.type === 'Text' && styleOf(n).lineHeight !== undefined && n.props.textBreakStrategy !== 'simple').map((n) => styleOf(n).lineHeight as number);

  it('on Android, only the paragraph holding a tall grid, its <br> included', () => {
    Platform.OS = 'android';
    const tree = draw(`Let<br><i>A</i> = ${M33}<br>and so on.`);
    const [outer, ...inner] = lineHeights(tree);
    expect(outer).toBe(24 * 1.25); // the block keeps its fraction lead
    expect(inner).toEqual([3 * 2.1 * 16 + 2 * 0.12 * 16]);
    // The paragraph's own <br> is inside the taller run.
    const tall = all(tree, (n) => n.type === 'Text' && styleOf(n).lineHeight === inner[0])[0];
    expect(strings(tall).join('')).toMatch(/\n$/);
  });

  it('on iOS, the whole block, as one baseline offset is applied to every line', () => {
    Platform.OS = 'ios';
    expect(lineHeights(draw(`Let<br><i>A</i> = ${A2}<br>and so on.`))).toEqual([2 * 1.35 * 16 + 2 * 0.12 * 16]);
  });

  it('a row vector needs no taller line than the text has', () => {
    Platform.OS = 'android';
    expect(lineHeights(draw('the row <bmat><r><c>1</c><c>2</c><c>3</c></r></bmat> is a vector', 'pilot', 22))).toEqual([22]);
  });
});

describe('a matrix as plain text', () => {
  it('reads as its rows, in its brackets', () => {
    expect(markupToText(`<i>A</i> = ${A2}`)).toBe('A = [1 2; 3 −1]');
    expect(markupToText(`Δ = ${D2}`)).toBe('Δ = |a b; c d|');
    expect(markupToText('<pmat><r><c><i>x</i></c><c><i>y</i></c></r></pmat>')).toBe('(x y)');
  });
  it('reads the fractions in its cells as fractions', () => {
    expect(markupToText(`<bmat><r><c>${half('1', '2')}</c><c>0</c></r><r><c>0</c><c>${half('<i>x</i> + 1', '5')}</c></r></bmat>`)).toBe('[1/2 0; 0 (x + 1)/5]');
  });
  it('reads a matrix inside a cell inside its own', () => {
    expect(gridToText(`<bmat><r><c>${A2}</c><c><i>O</i></c></r></bmat>`)).toBe('[[1 2; 3 −1] O]');
  });
});

describe('a matrix on the formula sheet', () => {
  it('is never cut apart where its cells have spaces', () => {
    const line = `<i>A</i> + <i>B</i> = <bmat><r><c><i>a</i> + 1</c><c>0</c></r><r><c>0</c><c><i>b</i> − 1</c></r></bmat> here`;
    const cut = cutAtSpaces(line);
    expect(cut.filter((p) => p.includes('<bmat>'))).toHaveLength(1);
    expect(cut.find((p) => p.includes('<bmat>'))).toMatch(/<\/bmat>$/);
  });

  it('counts as wide as its widest cells, not all of them in a row', () => {
    expect(narrowGrids(A2)).toBe('[1 −1]');
    expect(pieceWidth(A2)).toBe(6);
  });

  it('builds a card whose formula line holds the matrix whole, with a fraction beside it', () => {
    const chapter: Chapter = {
      chapter: '03',
      title: 'Matrices',
      subject: 'Mathematics',
      klass: 'Class 12',
      topics: [
        {
          n: '01',
          title: 'Inverse',
          blocks: [
            {
              t: 'formula',
              kicker: 'Inverse of a 2 × 2 matrix',
              main: `<i>A</i><sup>−1</sup> = ${half('1', '|⁠<i>A</i>|')} ${'<bmat><r><c><i>d</i></c><c>−<i>b</i></c></r><r><c>−<i>c</i></c><c><i>a</i></c></r></bmat>'}<br>${M33}`,
              legend: ['<i>A</i> = a square matrix with |⁠<i>A</i>| ≠ 0'],
              note: null,
            },
          ],
        } as unknown as Chapter['topics'][number],
      ],
    };
    const [card] = buildFormulaCards(chapter);
    const exprs = card.items.map((it) => it.expr);
    expect(exprs.join('')).toContain('<bmat>');
    for (const e of exprs) {
      // Every box holding a matrix holds all of it.
      for (const box of boxes(e)) for (const p of box) if (p.kind === 'text') expect((p.html.match(/<bmat>/g) ?? []).length).toBe((p.html.match(/<\/bmat>/g) ?? []).length);
      // And it draws.
      expect(cells(draw(e, 'stix', 27)).length).toBeGreaterThan(0);
    }
  });
});

describe('measuring a matrix (the display-fit checks)', () => {
  it('measures a 3 × 3 with fractions as columns, and it fits the card and the page', () => {
    const card = width(M33, REF.cardExpr, 'stix');
    const page = width(M33, REF.read, 'pilot');
    // Three columns of a fraction's width or less, two gaps, two brackets: well under the line.
    expect(card).toBeGreaterThan(REF.cardExpr * 4);
    expect(card).toBeLessThan(REF.card * 0.97);
    expect(page).toBeLessThan(REF.inCard * 0.97);
    // Narrower than the same cells written in a row.
    const flat = width(M33.replace(/<\/?(?:bmat|r)>/g, '').replace(/<c>/g, ' ').replace(/<\/c>/g, ''), REF.cardExpr, 'stix');
    expect(card).toBeLessThan(flat);
  });
  it('is one piece a line cannot break inside', () => {
    expect(pieces(`so <i>A</i> = ${M33}, and`).filter((p) => p.includes('<bmat>'))).toHaveLength(1);
  });
});

describe('a sample page of Chapters 3 and 4', () => {
  // The forms the authoring brief gives the writers, in both looks (the reader's Onest and the cards' STIX).
  const PAGE = [
    `If <i>A</i> = ${A2}, then <i>A</i><sup>T</sup> = <bmat><r><c>1</c><c>3</c></r><r><c>2</c><c>−1</c></r></bmat>.`,
    `Δ = ${D2} = <i>ad</i> − <i>bc</i>, and |⁠<i>A</i>| ≠ 0.`,
    `The row matrix <bmat><r><c>1</c><c>2</c><c>3</c></r></bmat> and the column matrix <bmat><r><c>1</c></r><r><c>2</c></r><r><c>3</c></r></bmat>.`,
    `A general matrix:<br><i>A</i> = <bmat><r><c><i>a</i><sub>11</sub></c><c><i>a</i><sub>12</sub></c><c>⋯</c><c><i>a</i><sub>1<i>n</i></sub></c></r><r><c>⋮</c><c>⋮</c><c>⋱</c><c>⋮</c></r><r><c><i>a</i><sub><i>m</i>1</sub></c><c><i>a</i><sub><i>m</i>2</sub></c><c>⋯</c><c><i>a</i><sub><i>mn</i></sub></c></r></bmat><br>where each entry is a number.`,
    `<i>R</i><sub>1</sub> → <i>R</i><sub>1</sub> − 2<i>R</i><sub>2</sub> gives <vmat><r><c>${half('1', '2')}</c><c>0</c></r><r><c>3</c><c>${half('<i>x</i>', '4')}</c></r></vmat> = ${half('<i>x</i>', '8')}.`,
  ];
  for (const look of ['pilot', 'stix'] as const)
    it(`draws every paragraph in the ${look} look, every cell in it`, () => {
      for (const html of PAGE) {
        const tree = draw(html, look);
        const expected = (html.match(/<c>/g) ?? []).length;
        expect(cells(tree)).toHaveLength(expected);
        expect(strings(tree).join('')).not.toMatch(/<\/?(?:bmat|pmat|vmat|r|c)>/);
      }
    });
});
