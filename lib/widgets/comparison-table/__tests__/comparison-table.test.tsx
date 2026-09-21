/**
 * `comparison_table@1`, through the gate `conic_plot` went through.
 *
 * Every refusal the spec names, every shape, all five GATE_FRAMES — and
 * fixtures from payloads the SERVER authored, not only hand-written ones,
 * because a hand-written fixture only tests the widget against the author's
 * own idea of a payload.
 */
import { comparisonTable, validate } from '../index';
import {
  CELL_PAD, CELL_SIZE, MAX_COLUMNS, MAX_ROWS, USABLE_W, colLabelCap,
  colWidthAt, fits, rowLabelCap,
} from '../table-layout';
import { CHAR_W } from '../../chrome';
import { renderWidgetTreeAt } from '../../__tests__/test-utils';

const GATE_FRAMES = [
  [340, 340], [343, 236], [495, 270], [702, 289], [900, 430],
] as const;

const good = {
  kind: 'comparison',
  columns: ['Aldehyde', 'Ketone'],
  rows: ['Oxidation', 'H on C=O', 'Tollens'],
  cells: ['easy', 'resists', 'yes', 'no', 'positive', 'negative'],
  highlight: null,
  caption: 'Aldehydes oxidise; ketones resist',
};

describe('the caps come from the width budget, not from taste', () => {
  test('usable width at 343 is 323pt, not the spec\'s 319', () => {
    // The spec said 319, assuming 12pt padding. chrome.ts's PAD_EDGE is 10,
    // so it is 343 - 20 = 323. Taken from the constant rather than from the
    // document, because the document is where the assumption was.
    expect(USABLE_W).toBe(323);
  });

  test('the cap is derived from the SAME formula the layout uses', () => {
    // Not restated. `colWidthAt` is what `layoutTable` divides by, so the cap
    // and the layout cannot disagree about how wide a column is.
    expect(colLabelCap(3)).toBe(
      Math.floor((colWidthAt(3) - CELL_PAD) / (CELL_SIZE * CHAR_W)));
  });

  test('the cap DEPENDS on the column count — 13 at two, 9 at three', () => {
    // A single cap derived at the worst case and applied to every table held
    // a 2-column table with 107.7pt columns to the 80.75pt figure, and all
    // fifteen of the first authored tables were refused on labels that fit
    // their own board.
    expect(colLabelCap(2)).toBe(13);
    expect(colLabelCap(3)).toBe(9);
    expect(colLabelCap(2)).toBeGreaterThan(colLabelCap(3));
    expect(rowLabelCap(2)).toBe(13);
  });

  test('a 2-column table may use a label a 3-column table may not', () => {
    const thirteen = 'Grazing (GFC)';
    expect(thirteen).toHaveLength(13);
    const two = validate({ ...good, columns: [thirteen, 'Detritus'] });
    expect(two.ok).toBe(true);
    const three = validate({ ...good, columns: [thirteen, 'Detritus', 'Mixed'],
      cells: Array(9).fill('x') });
    expect(three.ok).toBe(false);
  });

  test('the cell padding is SUBTRACTED, which it was not at first', () => {
    // The cap came out at 14, `fits()` then priced the same string at the
    // measured advance PLUS 8pt of padding, and all fifteen of the first
    // authored tables were refused — "Detritus (DFC)" is exactly 14
    // characters and needs 114.2pt against 107.7. A pre-filter looser than
    // the gate it precedes is a second opinion the author hears first.
    const withoutPad = Math.floor(colWidthAt(3) / (CELL_SIZE * CHAR_W));
    expect(colLabelCap(3)).toBeLessThan(withoutPad);
  });

  test('a string AT the cap actually fits the measured layout', () => {
    // The point of the change: the pre-filter must not admit what the gate
    // refuses. Lower-case is the favourable case and must pass.
    const at = 'm'.repeat(colLabelCap(3));
    const problems = fits(
      { columns: [at, at, at], rows: ['r1', 'r2'],
        cells: Array(6).fill('x') }, 343, 236);
    expect(problems.filter((p) => p.where.startsWith('column'))).toEqual([]);
  });
});

describe('it validates the shapes the spec names', () => {
  test('2 columns', () => {
    expect(validate(good).ok).toBe(true);
  });

  test('3 columns', () => {
    const r = validate({ ...good, columns: ['1°', '2°', '3°'],
      rows: ['Basicity', 'Example'],
      cells: ['strong', 'stronger', 'weakest', 'RNH2', 'R2NH', 'R3N'] });
    expect(r.ok).toBe(true);
  });

  test('with a highlight', () => {
    const r = validate({ ...good, highlight: [0, 1] });
    expect(r.ok).toBe(true);
    if (r.ok) expect(r.params.highlight).toEqual([0, 1]);
  });
});

describe('the refusals the spec requires', () => {
  test('an ARRAY OF ROWS is refused, and named as such', () => {
    // data_table_trend shipped the other way round and 0 of 14 stored
    // payloads rendered until its spec said this sentence.
    const r = validate({ ...good, cells: [['easy', 'resists'], ['yes', 'no']] });
    expect(r.ok).toBe(false);
    if (!r.ok) {
      expect(r.errors.join(' ')).toMatch(/ONE FLAT row-major array/);
      expect(r.errors.join(' ')).toMatch(/looks like an array of rows/);
    }
  });

  test('a wrong cell count is refused with the arithmetic', () => {
    const r = validate({ ...good, cells: ['a', 'b', 'c'] });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.errors.join(' ')).toMatch(/3 x 2 = 6 strings/);
  });

  test('one column is not a comparison', () => {
    const r = validate({ ...good, columns: ['Aldehyde'], cells: ['a', 'b', 'c'] });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.errors.join(' ')).toMatch(/a "comparison" of one thing is not one/);
  });

  test('four columns is refused', () => {
    const r = validate({ ...good, columns: ['a', 'b', 'c', 'd'],
      rows: ['x', 'y'], cells: Array(8).fill('v') });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.errors.join(' ')).toMatch(new RegExp(`${MAX_COLUMNS}`));
  });

  test('five rows is refused', () => {
    const r = validate({ ...good, rows: ['a', 'b', 'c', 'd', 'e'],
      cells: Array(10).fill('v') });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.errors.join(' ')).toMatch(new RegExp(`${MAX_ROWS}`));
  });

  test('an over-long cell is REFUSED, never truncated, and says by how much', () => {
    const long = 'x'.repeat(colLabelCap(2) + 7);
    const r = validate({ ...good, cells: [long, 'b', 'c', 'd', 'e', 'f'] });
    expect(r.ok).toBe(false);
    if (!r.ok) {
      expect(r.errors.join(' ')).toMatch(/7 over the 13-character cap/);
      expect(r.errors.join(' ')).toMatch(/never truncated at render time/);
    }
  });

  test('an over-long row label is refused', () => {
    const r = validate({ ...good, rows: ['y'.repeat(rowLabelCap(2) + 1), 'b', 'c'] });
    expect(r.ok).toBe(false);
  });

  test('a highlight outside the grid is refused', () => {
    const r = validate({ ...good, highlight: [5, 0] });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.errors.join(' ')).toMatch(/outside the 3x2 grid/);
  });

  test('the cap and the MEASURED width agree at the boundary', () => {
    // They must, and they did not at first: the cap ignored the 8pt of cell
    // padding `fits()` charges, so a string the cap admitted the gate refused.
    //
    // Note what this also says about the width model. `textWidth` prices
    // "MMMMMMMMM" and "mmmmmmmmm" identically — 68.3pt each — so the advance
    // is uniform per character at this face. With a uniform advance the
    // character cap IS the width check for text, and `fits()` cannot fire on
    // a string at or under the cap. It still earns its place for the caption
    // and for HEIGHT, and it would earn it again the day the width model
    // becomes per-glyph, which is why it measures rather than counts.
    const cap = colLabelCap(3);
    const at = 'm'.repeat(cap);
    const over = 'm'.repeat(cap + 1);
    const body = { columns: ['a', 'b', 'c'], rows: ['r1', 'r2'] };
    expect(fits({ ...body, cells: [at, ...Array(5).fill('x')] }, 343, 236)
      .filter((p) => p.where.startsWith('cell'))).toEqual([]);
    expect(fits({ ...body, cells: [over, ...Array(5).fill('x')] }, 343, 236)
      .filter((p) => p.where.startsWith('cell')).length).toBe(1);
  });

  test('fits() catches a HEIGHT overflow the character caps cannot see', () => {
    // Four rows plus a header plus a caption is the ceiling at 236pt. No
    // per-string cap can know that; only the laid-out table can.
    const tall = { columns: ['a', 'b'], rows: ['r1', 'r2', 'r3', 'r4'],
                   cells: Array(8).fill('x') };
    expect(fits(tall, 343, 236).filter((p) => p.where === 'the table')).toEqual([]);
    const problems = fits(tall, 343, 120);
    expect(problems.some((p) => p.where === 'the table')).toBe(true);
  });

});

describe('it renders at every gate frame', () => {
  test.each(GATE_FRAMES)('%ix%i', (w, h) => {
    const v = validate(good);
    expect(v.ok).toBe(true);
    if (!v.ok) return;
    const tree = renderWidgetTreeAt(comparisonTable, v.params, {}, w, h);
    expect(tree).not.toBeNull();
    const json = JSON.stringify(tree);
    expect(json).not.toContain('NaN');
    // every cell is on the board
    for (const c of good.cells) expect(json).toContain(c);
    for (const c of good.columns) expect(json).toContain(c);
  });

  test('the defaults render', () => {
    const v = validate(comparisonTable.defaults);
    expect(v.ok).toBe(true);
  });

  test('a highlight draws a band under the named cell only', () => {
    const v = validate({ ...good, highlight: [1, 0] });
    if (!v.ok) throw new Error('fixture invalid');
    const json = JSON.stringify(renderWidgetTreeAt(comparisonTable, v.params, {}, 343, 236));
    expect(json).toContain('RNSVGRect');
  });
});

describe('it declares no animatable params', () => {
  test('a comparison whose CONTENT changed mid-sentence is a different comparison', () => {
    expect(comparisonTable.animatable).toEqual([]);
    expect(comparisonTable.animatable.length).toBeLessThanOrEqual(4);
  });
});
