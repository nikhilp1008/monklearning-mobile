/**
 * A price is not a maths delimiter.
 *
 * `latexToText` runs over EVERY board prose line (app/live-classroom.tsx),
 * and its own comment claimed it "leaves text carrying no commands alone".
 * That was false for `$`: a line with two prices gave `indexOf` a closing
 * delimiter, so the span between them was converted as maths and both symbols
 * were deleted. "US $33 trillion vs US $18 trillion" reached the board as
 * "US 33 trillion vs US 18 trillion".
 *
 * Found on Ecosystem Services and Their Economic Valuation, the one NEET
 * concept whose subject IS money — its chunks carry "US $33 trillion" and
 * "~US $18 trillion" on nearly every page.
 */
import { latexToText } from '../latex-text';

describe('a dollar sign followed by a digit is currency', () => {
  test.each([
    ['one price', 'Costanza 1997: US $33 trillion per year'],
    ['two prices — the case that was broken', 'US $33 trillion vs global GNP US $18 trillion'],
    ['three prices', 'Worth $33 tn, nearly 2x the $18 tn GNP, per $ of value'],
    ['four prices', 'Values: $33 tn services, $18 tn GNP, $2 tn forests, $5 tn soil'],
    ['a price at the very end', 'The figure everyone quotes is $33'],
  ])('%s survives intact', (_label, line) => {
    expect(latexToText(line)).toBe(line);
  });
});

describe('real inline maths still converts', () => {
  test('a letter after the delimiter is maths, not a price', () => {
    expect(latexToText('Area is $A = \\pi r^2$ here')).toBe('Area is A = π r² here');
  });

  test('a command after the delimiter is maths', () => {
    expect(latexToText('Angle $\\theta$ matters')).toBe('Angle θ matters');
  });

  test('display maths is untouched by the currency rule', () => {
    // Nobody writes a price as `$$33`, so `$$` keeps its old behaviour and
    // this is the fixture that says so.
    expect(latexToText('$$\\theta$$')).toBe('θ');
  });
});

test('the cost of the rule, stated rather than discovered later', () => {
  // `$2x + 1$` opens with a digit and is now read as a price. Nothing in this
  // corpus writes that — formulas arrive in their own `latex` field,
  // undelimited — but the trade is real and belongs in a fixture rather than
  // in a comment nobody runs.
  expect(latexToText('$2x + 1$')).toBe('$2x + 1$');
});
