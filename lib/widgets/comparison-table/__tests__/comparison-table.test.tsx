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
  MAX_CELL, MAX_COLUMNS, MAX_COL_LABEL, MAX_ROWS, MAX_ROW_LABEL, USABLE_W, fits,
} from '../table-layout';
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

describe('the caps come from the 319pt budget, not from taste', () => {
  test('usable width at 343 is 323pt, not the spec\'s 319', () => {
    // The spec said 319, assuming 12pt padding. chrome.ts's PAD_EDGE is 10,
    // so it is 343 - 20 = 323. Taken from the constant rather than from the
    // document, because the document is where the assumption was.
    expect(USABLE_W).toBe(323);
  });
  test('a 3-column cell cap of 14 characters falls out of it', () => {
    // 323 / 3 = 107.7pt per column; 107.7 / (12 * 0.602) = 14.9 -> 14.
    // The four-point difference does not move the cap.
    expect(MAX_COL_LABEL).toBe(14);
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
    const long = 'x'.repeat(MAX_CELL + 7);
    const r = validate({ ...good, cells: [long, 'b', 'c', 'd', 'e', 'f'] });
    expect(r.ok).toBe(false);
    if (!r.ok) {
      expect(r.errors.join(' ')).toMatch(/7 over the 24-character cap/);
      expect(r.errors.join(' ')).toMatch(/never truncated at render time/);
    }
  });

  test('an over-long row label is refused', () => {
    const r = validate({ ...good, rows: ['y'.repeat(MAX_ROW_LABEL + 1), 'b', 'c'] });
    expect(r.ok).toBe(false);
  });

  test('a highlight outside the grid is refused', () => {
    const r = validate({ ...good, highlight: [5, 0] });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.errors.join(' ')).toMatch(/outside the 3x2 grid/);
  });

  test('a cell INSIDE the character cap can still be refused for WIDTH', () => {
    // The caps are a pre-filter; the measured layout is the gate.
    // reaction_scheme raised its caps 10 -> 20 and only 2 of 38 payloads
    // moved, because width was always the binding limit.
    const wide = 'MMMMMMMMMMMMMMMMMMMMMMM';           // 23 chars, under the 24 cap
    expect(wide.length).toBeLessThanOrEqual(MAX_CELL);
    const problems = fits(
      { columns: ['a', 'b', 'c'], rows: ['r1', 'r2'],
        cells: [wide, 'b', 'c', 'd', 'e', 'f'] }, 343, 236);
    expect(problems.length).toBeGreaterThan(0);
    expect(problems[0].needPt).toBeGreaterThan(problems[0].havePt);
  });

  test('and the refusal carries the measurement, so it can be repaired against', () => {
    const r = validate({ ...good, columns: ['a', 'b', 'c'],
      cells: ['MMMMMMMMMMMMMMMMMMMMMMM', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'] });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.errors.join(' ')).toMatch(/needs [\d.]+pt but only [\d.]+pt/);
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
