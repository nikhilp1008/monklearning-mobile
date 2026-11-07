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
import { latexToSegments, latexToText } from '../latex-text';

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

/**
 * `\$` — the same defect, from the other side.
 *
 * The rule above decides whether a bare `$` followed by a digit is a price. It never
 * considered a dollar that was ESCAPED, and the scan walked straight over the
 * backslash and took it for a delimiter. One `\$` only ever worked because it had no
 * second dollar to pair with; two of them read everything between as maths. The
 * Ecosystem Services board holds exactly that line, stored as the formula
 *
 *     \text{Costanza valuation} \approx \text{US \$33 trillion/yr} \approx 2 \times \text{global GNP (\$18 trillion)}
 *
 * and it reached students as "US 33 trillion/yr ≈ 2 × global GNP (18 trillion)}" —
 * both dollar signs gone, and the brace of the second `\text{` left on screen.
 */
describe('an escaped dollar is a dollar, never a delimiter', () => {
  test.each([
    [
      'the stored Ecosystem Services line, two of them',
      String.raw`\text{Costanza valuation} \approx \text{US \$33 trillion/yr} \approx 2 \times \text{global GNP (\$18 trillion)}`,
      'Costanza valuation ≈ US $33 trillion/yr ≈ 2 × global GNP ($18 trillion)',
    ],
    [
      'one, as it always worked',
      String.raw`\text{Global GNP} \approx \text{US \$18 trillion}`,
      'Global GNP ≈ US $18 trillion',
    ],
    ['two in prose with no command in the line', String.raw`costs \$5 and \$6`, 'costs $5 and $6'],
    ['beside a real maths span', String.raw`It costs \$5, so $x = 5$`, 'It costs $5, so x = 5'],
    ['inside a maths span', String.raw`$x = \$5$`, 'x = $5'],
  ])('%s', (_label, raw, expected) => {
    expect(latexToText(raw)).toBe(expected);
  });

  test('no stray brace is left behind', () => {
    const raw = String.raw`\text{US \$33 trillion/yr} \approx 2 \times \text{global GNP (\$18 trillion)}`;
    expect(latexToText(raw)).not.toMatch(/[{}\\]/);
  });

  test('the drawn path keeps the money too', () => {
    // MathLine draws this line, so it is `latexToSegments` that has to keep both signs.
    const raw = String.raw`\text{Costanza valuation} \approx \text{US \$33 trillion/yr} \approx 2 \times \text{global GNP (\$18 trillion)}`;
    const shown = latexToSegments(raw)
      .map((s) => ('text' in s ? s.text : ''))
      .join('');
    expect(shown).toBe('Costanza valuation ≈ US $33 trillion/yr ≈ 2 × global GNP ($18 trillion)');
  });

  test('a line break straight before a real delimiter is not an escape', () => {
    // `\\` is a row break and `$x$` is maths. With no space between them the second
    // backslash and the dollar LOOK like `\$`, and taking them for one left a lone
    // delimiter on screen, so the dollars must still pair up.
    expect(latexToText(String.raw`a \\$x$`)).not.toContain('$');
    expect(latexToText(String.raw`a \\ $x$ and \$5`)).toBe(String.raw`a \\ x and $5`);
  });
});

describe('two prices are two prices, however short the words between them', () => {
  test.each([
    // A body with no word of three letters used to read as maths: "5 to 10".
    ['"to" is two letters', 'between $5 to $10'],
    ['"or" is two letters', 'worth $33 or $18'],
    ['a price with markup around it', String.raw`\text{US $33 trillion/yr} \approx \text{US $18 trillion}`],
  ])('%s', (_label, raw) => {
    const out = latexToText(raw);
    expect(out.match(/\$/g)).toHaveLength(2);
    expect(out).not.toMatch(/[{}\\]/);
  });

  test('the second dollar opens the next price, so it is never a closing delimiter', () => {
    expect(latexToText('between $5 to $10')).toBe('between $5 to $10');
    expect(latexToText(String.raw`\text{US $33 trillion/yr} \approx \text{US $18 trillion}`)).toBe(
      'US $33 trillion/yr ≈ US $18 trillion',
    );
  });

  test('real maths that opens with a digit still converts', () => {
    // The practice bank's own shapes, and two spans side by side.
    expect(latexToText(String.raw`$5 \times 10^6 m^{-1}$ and $5000 A^0$`)).toBe('5 × 10⁶ m⁻¹ and 5000 A⁰');
    expect(latexToText('$5$ and $6$')).toBe('5 and 6');
    expect(latexToText('$2 x+3 y=9$')).toBe('2 x+3 y=9');
  });
});
