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
    // `πr²`, not `π r²`. 74ed13f made a LETTER-LIKE glyph bind to what follows,
    // because `$\\Delta H$` was reading as "Δ H" and an enthalpy is one
    // quantity. π binds to r for the same reason; `2 \\times 10^6` stays
    // spaced because × is an operator, not a letter.
    expect(latexToText('Area is $A = \\pi r^2$ here')).toBe('Area is A = πr² here');
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

test('the cost this rule USED to have, and no longer does', () => {
  // My original rule was "a `$` followed by a digit is currency", and this
  // fixture recorded its price: `$2x + 1$` opens with a digit, so it stayed
  // literal. I called that an acceptable trade because formulas arrive in
  // their own undelimited `latex` field.
  //
  // A survey of all 11,300 servable questions (81e3009) showed the trade was
  // not acceptable at all — the bank is full of `$2 x+3 y=9$` and `$15d$`, and
  // a digit-only test ate them. The rule now also requires the span to read
  // like PROSE: a run of three or more letters. A price body is words; no
  // price contains an equals sign.
  //
  // So this asserts the improvement rather than the old limitation.
  expect(latexToText('$2x + 1$')).toBe('2x + 1');
  expect(latexToText('$2 x+3 y=9$')).toBe('2 x+3 y=9');
});
