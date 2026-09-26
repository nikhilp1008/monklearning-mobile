/**
 * A CELL THAT CANNOT BE READ IS A WRONG ANSWER.
 *
 * Both defects here were found by hand-reviewing all 191 published boards on
 * 2026-09-19, and neither is a payload fault — every one of these payloads is
 * correct to three significant figures and rendered "fine".
 *
 *   numeric      `formatCell` rounded to two decimals, full stop. NINE boards
 *                printed a correct value as "0": an amine Kb column of
 *                1.8e-05, 4.4e-04, 4.3e-10 showed as 0, 0, 0, and an
 *                electromagnetic spectrum whose seven rows all satisfy
 *                c = f*lambda showed five wavelengths as 0.
 *   categorical  cells were sliced at 8 characters, so the two match-the-band
 *                boards read "Antenna ", "Oscillat", "Klystron", "Radioact".
 */
import { formatCell, wrapCell } from '../trend-math';
import { colLabelCap, dataTableTrend } from '../index';
import { CHAR_W } from '../../chrome';

describe('numeric cells', () => {
  test.each([
    [1.8e-5, '1.8×10⁻⁵'],
    [4.4e-4, '4.4×10⁻⁴'],
    [4.3e-10, '4.3×10⁻¹⁰'],
    [3e-12, '3×10⁻¹²'],
    [1e20, '10²⁰'],
    [3e19, '3×10¹⁹'],
    [-2.5e-7, '-2.5×10⁻⁷'],
  ])('%p renders as %p, not as 0', (v, want) => {
    expect(formatCell(v as number)).toBe(want);
  });

  test.each([[0.03, '0.03'], [300, '300'], [4.75, '4.75'], [500, '500'], [0, '0']])(
    '%p inside the plain band is unchanged', (v, want) => {
      expect(formatCell(v as number)).toBe(want);
    });

  test('0.001 is inside the band and STILL must not print as 0', () => {
    // The band alone would have left the defect sitting exactly on its edge:
    // 0.001 >= 1e-3 takes the plain branch and rounds to 0 at two decimals.
    // The guard, not the boundary, is what actually fixes this.
    expect(formatCell(0.001)).not.toBe('0');
  });

  test('NO value in the EM spectrum board prints as 0', () => {
    // The seven bands, exactly as published. c = f*lambda holds on every row;
    // five of the wavelengths used to render as "0".
    const rows: [string, number, number][] = [
      ['Radio', 1e3, 3e5], ['Microwave', 1e-2, 3e10], ['Infrared', 1e-5, 3e13],
      ['Visible', 5e-7, 6e14], ['Ultraviolet', 1e-8, 3e16],
      ['X-ray', 1e-10, 3e18], ['Gamma', 1e-12, 3e20],
    ];
    for (const [band, lambda, f] of rows) {
      expect(Math.abs(lambda * f - 3e8) / 3e8).toBeLessThan(0.05);   // the physics
      expect(formatCell(lambda)).not.toBe('0');                      // and it is legible
      expect(formatCell(f)).not.toBe('0');
      expect(formatCell(lambda)).toMatch(/\d/);
      void band;
    }
  });
});

describe('categorical cells', () => {
  test.each([
    ['Antenna circuits', ['Antenna', 'circuits']],
    // LOSSLESS: the second line carries the rest, even when it overflows.
    // It used to read ['Oscillat', 'ing char'] — the wrap was itself
    // truncating, in a widget whose whole rule is that nothing is cut.
    //
    // HYPHENATED where there is no space inside the cap to break at, so the
    // break reads as one word continuing. Without it "Radioact" / "ive decay"
    // presents a word that ends, and the eye takes "Radioact" for the term.
    ['Oscillating charges', ['Oscilla-', 'ting charges']],
    ['Radioactive decay', ['Radioac-', 'tive decay']],
    ['Hot bodies', ['Hot', 'bodies']],
  ])('%p wraps instead of being cut', (text, want) => {
    expect(wrapCell(text as string, 8)).toEqual(want);
  });

  test('a cell that already fits is left as one line', () => {
    expect(wrapCell('Klystron', 8)).toEqual(['Klystron']);
    expect(wrapCell('Radio', 8)).toEqual(['Radio']);
  });

  test('validate keeps enough of the string for two lines', () => {
    const r = dataTableTrend.validate({
      ...dataTableTrend.defaults,
      cell_kind: 'categorical',
      row_labels: ['Radio', 'Microwave'], col_labels: ['Source'],
      text_values: ['Antenna circuits', 'Klystron'], values: [],
    });
    expect(r.ok).toBe(true);
    if (r.ok) {
      const cell = (r.params as unknown as { text_values: string[] }).text_values[0];
      expect(cell).toBe('Antenna circuits');       // not 'Antenna '
      expect(wrapCell(cell, 8)).toHaveLength(2);
    }
  });
});

describe('labels are REFUSED, not sliced', () => {
  const base = {
    ...dataTableTrend.defaults, cell_kind: 'numeric' as const,
    row_labels: ['Radio', 'Microwave'], col_labels: ['nm'],
    values: [1, 2], text_values: [],
  };

  test('an over-long column header is refused with the measurement', () => {
    // The hand review of 2026-09-21 found a cut header on fifteen of
    // seventeen published tables. Measured at THREE columns, where a column
    // is 62.4pt and holds 8 characters a line, so 17 across two.
    const three = {
      ...base, cell_kind: 'categorical' as const,
      col_labels: ['a', 'b', 'c'], values: [],
      text_values: ['1', '2', '3', '4', '5', '6'], trend_col: -1,
    };
    const r = dataTableTrend.validate({
      ...three, col_labels: ['Electromagnetic wave', 'b', 'c'] });
    expect(r.ok).toBe(false);
    if (!r.ok) {
      expect(r.errors.join(' ')).toMatch(/col_labels\[0\].*3 over the 17/);
      expect(r.errors.join(' ')).toMatch(/never truncated at render time/);
    }
  });

  test('the cap is DERIVED from the column count, not a literal', () => {
    // It was the literal 5, and 5 was never measured — it was the length of
    // the old `.slice()`, reinterpreted as a per-line budget when the slice
    // became a wrap. Three categorical columns are 62.4pt and hold 8; four
    // numeric columns are 46.8pt and hold 6; two columns hold more than
    // either. A single cap cannot be right for all three.
    expect(colLabelCap(3)).toBe(8);
    expect(colLabelCap(4)).toBe(6);
    expect(colLabelCap(2)).toBeGreaterThan(colLabelCap(3));
    // and it agrees with the formula the layout actually divides by
    expect(colLabelCap(3)).toBe(
      Math.floor(((343 - 12 - 22 - (12 + 0.32 * 343)) / 3) / (12 * CHAR_W)));
  });

  test('a header the OLD literal refused fits its own board', () => {
    // "Wavelength" is 10 characters. The literal 5 gave it a budget of 11
    // and split it mid-word at 5; the measured cap at three columns is 8, so
    // it wraps once, with a hyphen, and nothing is lost.
    const three = {
      ...base, cell_kind: 'categorical' as const,
      col_labels: ['Wavelength', 'Source'], values: [],
      text_values: ['1', '2', '3', '4'], trend_col: -1,
    };
    expect(dataTableTrend.validate(three).ok).toBe(true);
  });

  test('an over-long row label is refused', () => {
    // Row labels get 12 per line, so 25 across two. 26 is one over.
    const r = dataTableTrend.validate({ ...base, row_labels: ['x'.repeat(26), 'b'] });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.errors.join(' ')).toMatch(/row_labels\[0\]/);
  });

  test('a label that FITS two lines still passes', () => {
    expect(dataTableTrend.validate({ ...base, col_labels: ['Wavelength'] }).ok).toBe(true);
    expect(dataTableTrend.validate({
      ...base, row_labels: ['Electromagnet', 'b'] }).ok).toBe(true);
  });

  test('nothing is silently shortened any more', () => {
    const r = dataTableTrend.validate({ ...base, col_labels: ['Wavelength'] });
    expect(r.ok).toBe(true);
    if (r.ok) {
      expect((r.params as unknown as { col_labels: string[] }).col_labels[0])
        .toBe('Wavelength');
    }
  });
});
