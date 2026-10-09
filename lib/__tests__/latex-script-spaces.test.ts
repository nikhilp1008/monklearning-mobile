import { latexToText } from '@/lib/latex-text';

// Question banks type a power as `10 ^ { - 7 }`. The spaces mean nothing in
// LaTeX; read literally they left a gap between a number and its power.
describe('spaces around a script', () => {
  test('a spaced power closes up', () => {
    expect(latexToText('$1.5 \\times 10 ^ { - 7 }$ cm')).toBe('1.5 × 10⁻⁷ cm');
  });
  test('a spaced subscript closes up', () => {
    expect(latexToText('$x _ 1 + x _ { 2 }$')).toBe('x₁ + x₂');
  });
  test('a tidy power is unchanged', () => {
    expect(latexToText('$1.5 \\times 10^{-7}$ m')).toBe('1.5 × 10⁻⁷ m');
  });
});
