import { countChars, revealChars } from '@/lib/word-reveal';
import { parseSolutionStep } from '@/lib/solution-steps';

const steps = [parseSolutionStep('The answer is $x=\\frac{a}{b}$ here.')];
const shownText = (budget: number) =>
  revealChars(steps, budget)
    .flatMap((s) => [s.title, ...s.lines.map((l) => l.raw)].filter(Boolean))
    .join('|');

describe('letter-by-letter reveal', () => {
  test('prose arrives a letter at a time', () => {
    expect(shownText(5)).toBe('The a');
  });

  test('a formula is never cut: it appears whole once reached', () => {
    const shown = shownText(15);
    expect(shown).toContain('$x=\\frac{a}{b}$');
    expect(shown.split('$').length - 1).toBe(2);
  });

  test('the full budget shows everything', () => {
    expect(shownText(countChars(steps))).toBe('The answer is $x=\\frac{a}{b}$ here.');
  });

  test('nothing is shown at zero', () => {
    expect(revealChars(steps, 0)).toEqual([]);
  });

  test('a formula with spaces inside it is still never cut', () => {
    const spaced = [parseSolutionStep('Isliye $\\lambda_{max} = c / f$ hota hai.')];
    for (let b = 0; b <= countChars(spaced); b++) {
      const raw = revealChars(spaced, b).flatMap((s) => s.lines.map((l) => l.raw)).join('');
      expect((raw.match(/\$/g) ?? []).length % 2).toBe(0);
    }
  });
});
