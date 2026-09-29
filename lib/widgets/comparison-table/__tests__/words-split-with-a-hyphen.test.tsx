/**
 * A WORD IS NEVER SPLIT WITHOUT A HYPHEN.
 *
 * `wrapCell` broke at the last space and, when there was none, hard-cut at
 * the line: "Mineralisation" drew as "Mineralisatio" / "n", "Directional" as
 * "Direction" / "al" — which reads as a real word — and "Exhaustive detail"
 * as "Exhaustiv" / "e detail". validate() passed every one, because `fits()`
 * prices only the LONGEST line and both halves were short.
 *
 * The fix is data_table_trend's rule, not a new one, so the two tables break
 * a word the same way. Refusing instead was the alternative; it would have
 * turned the widget's own "Stratification is wrapped, not refused" contract
 * into a refusal and dropped stored tables to the fallback. What validated
 * still validates, except the one string no hyphen can fit (last test).
 */
import { comparisonTable, validate } from '../index';
import { colLabelCap, rowLabelCap, wrapCell } from '../table-layout';
import { wrapCell as trendWrapCell } from '../../data-table-trend/trend-math';
import { renderWidgetTreeAt } from '../../__tests__/test-utils';

// Every string the review found cut mid-word, at the cap it was drawn with.
const CUT: [string, number][] = [
  ['Mineralisation', colLabelCap(2)],     // 645cf0f8:5, a column label
  ['Stabilising', colLabelCap(3)],        // df4669f4:5, all three labels
  ['Directional', colLabelCap(3)],
  ['Disruptive', colLabelCap(3)],
  ['Exhaustive detail', colLabelCap(3)],  // 3ac176cf:6, a cell
  ['Inside/outside', rowLabelCap(2)],     // 4da86f9d:7, a row label
  ['Gas-independent', colLabelCap(2)],    // bd760348:3, a cell
];

describe('the wrap itself', () => {
  test.each(CUT)('%p breaks at a space or with a hyphen, never bare', (text, cap) => {
    const [a, b] = wrapCell(text, cap);
    expect(b).toBeDefined();
    const atSpace = `${a} ${b}` === text;
    const hyphenated = a.endsWith('-') && `${a.slice(0, -1)}${b}` === text;
    expect(atSpace || hyphenated).toBe(true);
    // The hyphen is paid for inside the line, not hung off the end of it.
    expect(a.length).toBeLessThanOrEqual(cap);
  });

  test('the break is where data_table_trend puts it', () => {
    expect(wrapCell('Mineralisation', 13)).toEqual(['Mineralisati-', 'on']);
    expect(wrapCell('Directional', 9)).toEqual(['Directio-', 'nal']);
    expect(wrapCell('Exhaustive detail', 9)).toEqual(['Exhausti-', 've detail']);
    for (const [text, cap] of CUT) {
      expect(wrapCell(text, cap)).toEqual(trendWrapCell(text, cap));
    }
  });

  test('a string with a space still breaks at the last one that fits', () => {
    expect(wrapCell('Grazing chain food', 13)).toEqual(['Grazing chain', 'food']);
    expect(wrapCell('Standing State', 13)).toEqual(['Standing', 'State']);
  });
});

describe('what validated still validates, and draws the hyphen', () => {
  const MODES = {       // df4669f4:5, as stored
    kind: 'comparison',
    rows: ['Effect on peak', 'Favours', 'Example'],
    cells: ['taller, narrower', 'shifts one way', 'splits in two', 'average form',
      'one extreme', 'both extremes', 'human birth wt', 'peppered moth', 'bird bill size'],
    caption: 'Three modes of natural selection',
    columns: ['Stabilising', 'Directional', 'Disruptive'],
    highlight: null,
  };
  const DECOMPOSITION = {   // 645cf0f8:5, as stored
    kind: 'comparison',
    rows: ['Action', 'Product', 'Nutrient role'],
    cells: ['Builds humus', 'Breaks humus', 'Humus (dark, resistant)', 'CO2, H2O, ions',
      'Stores nutrients', 'Releases nutrients'],
    caption: 'Humify stores, Mineralise frees',
    columns: ['Humification', 'Mineralisation'],
    highlight: null,
  };

  test.each([
    ['three single-word labels', MODES, ['Stabilis-', 'Directio-', 'Disrupti-'], 'Stabilisi'],
    ['the key term as a label', DECOMPOSITION, ['Mineralisati-', 'on'], 'Mineralisatio'],
  ])('%s', (_name, payload, drawn, notDrawn) => {
    const v = validate(payload);
    expect(v.ok).toBe(true);
    if (!v.ok) return;
    const json = JSON.stringify(renderWidgetTreeAt(comparisonTable, v.params, {}, 343, 236));
    for (const s of drawn) expect(json).toContain(`"content":"${s}"`);
    expect(json).not.toContain(`"content":"${notDrawn}"`);
  });

  test('the one string it can no longer draw is refused, with the measurement', () => {
    // adfd3853:5. 26 characters and no space: two FULL lines, so a hyphen
    // leaves 14 for the second. It could only ever be drawn cut bare
    // mid-token ("…·g" / "'(h(x))·h'(x)"), which is the defect itself.
    const v = validate({
      kind: 'comparison',
      rows: ['Structure', 'Derivative', 'Factors'],
      cells: ['f(g(x))', 'f(g(h(x)))', "f'(g(x))·g'(x)", "f'(g(h(x)))·g'(h(x))·h'(x)",
        '2 factors', '3 factors'],
      caption: 'Extending the chain rule',
      columns: ['Two layers', 'Three layers'],
      highlight: null,
    });
    expect(v.ok).toBe(false);
    if (!v.ok) expect(v.errors.join(' ')).toMatch(/cell \[1,1\].*needs .*pt but only/);
  });
});
