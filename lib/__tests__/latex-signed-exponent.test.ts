import { latexToText } from '@/lib/latex-text';

/**
 * AN EXPONENT IS THE WHOLE RUN OF DIGITS, WITH ITS SIGN.
 *
 * The bare-text path took one character after `^`, so a stored line reading "2×10^-7 N/m" showed
 * "2×10⁻7 N/m" and "6.02×10^23" showed "10²3": the sign was raised and the digits left on the line.
 * 272 board lines and takeaways write exponents this way (K^-1, T^-2, 10^-19).
 */
describe('signed and multi-digit exponents', () => {
  test.each([
    ['2×10^-7 N/m', '2×10⁻⁷ N/m'],
    ['[dy/dx] = [Y][X]^-1', '[dy/dx] = [Y][X]⁻¹'],
    ['6.02×10^23 per mole', '6.02×10²³ per mole'],
    ['alpha in K^-1 and T^-2', 'alpha in K⁻¹ and T⁻²'],
    ['the term a_12 is next', 'the term a₁₂ is next'],
    ['x^2y stays x^2 then y', 'x²y stays x² then y'],
  ])('%s', (input, expected) => {
    expect(latexToText(input)).toBe(expected);
  });

  test('a lone sign after a caret is still a charge, and snake_case is still prose', () => {
    expect(latexToText('Cl^- and Na^+ ions')).toBe('Cl⁻ and Na⁺ ions');
    expect(latexToText('see the snake_case name')).toBe('see the snake_case name');
    expect(latexToText('v_y = u sin theta')).toContain('v_y');
  });

  test('inside $…$ the same exponents convert, braced or not', () => {
    expect(latexToText('$10^{-7}$ and $10^-7$')).toBe('10⁻⁷ and 10⁻⁷');
  });
});
