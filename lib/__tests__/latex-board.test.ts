import { latexToText } from '@/lib/latex-text';

/**
 * The board's LaTeX consumer, pinned against the commands the precomputed
 * corpus actually emits.
 *
 * Measured on the 28 formula board items of Biology 11 Ch1: 11 distinct
 * commands, of which 2 leaked their own name into the rendered line —
 * "Same Class nRightarrow Same Order" reached the board. That is the same
 * defect shape as _latex_to_speech deleting \int: an unhandled token
 * producing plausible-looking wrong output rather than an error.
 */
describe('latexToText — commands the corpus emits', () => {
  test('negated relations render, rather than leaking their name', () => {
    expect(latexToText(String.raw`\text{Same Class} \nRightarrow \text{Same Order}`))
      .toBe('Same Class ⇏ Same Order');
    expect(latexToText(String.raw`A \nrightarrow B`)).toBe('A ↛ B');
  });

  test('a labelled arrow keeps its label ON the arrow', () => {
    // Not a transparent wrapper: the brace argument labels the arrow. Treating
    // it as transparent would give "A Ni B", which reads as a third term.
    expect(latexToText(String.raw`A \xrightarrow{Ni} B`)).toBe('A →(Ni) B');
    expect(latexToText(String.raw`A \xrightarrow{} B`)).toBe('A → B');
  });

  test('the nine that already worked did not regress', () => {
    expect(latexToText(String.raw`A \rightarrow B`)).toBe('A → B');
    expect(latexToText(String.raw`A \Rightarrow B`)).toBe('A ⇒ B');
    expect(latexToText(String.raw`A \equiv B`)).toBe('A ≡ B');
    expect(latexToText(String.raw`A \subset B`)).toBe('A ⊂ B');
    expect(latexToText(String.raw`A \uparrow`)).toBe('A ↑');
    expect(latexToText(String.raw`\mathbf{Bold}`)).toBe('Bold');
    expect(latexToText(String.raw`\textit{Ital}`)).toBe('Ital');
    expect(latexToText(String.raw`\text{Species}`)).toBe('Species');
  });

  test('the real seven-rank ladder from the corpus', () => {
    expect(
      latexToText(String.raw`\text{Species} \rightarrow \text{Genus} \rightarrow \text{Family}`),
    ).toBe('Species → Genus → Family');
  });
});


/**
 * `\xrightarrow` with LaTeX's OPTIONAL [below] argument.
 *
 * Found on a live device, mid-lesson, on the carbon cycle. The board read
 *
 *     6CO₂ + 6H₂O xrightarrow[]sunlight C₆H₁₂O₆ + 6O₂
 *
 * because the handler demanded `{` immediately after the command name and
 * `\xrightarrow[]{sunlight}` therefore matched nothing. An unmatched command
 * does not degrade quietly -- it prints its own name to a student.
 *
 * Same family as the `\ce{}` leak. The lesson each time is that the failure
 * mode of this converter is LOUD AND WRONG, so a command shape nobody
 * anticipated is a board defect, not a cosmetic one.
 */
describe('xrightarrow with an optional [below] argument', () => {
  const cases: [string, string][] = [
    ['6CO_2 + 6H_2O \\xrightarrow[]{sunlight} C_6H_{12}O_6 + 6O_2', 'sunlight'],
    ['A \\xrightarrow{Ni} B', 'Ni'],
    ['A \\xrightarrow[heat]{cat} B', 'cat'],
    ['A \\xrightarrow[heat]{} B', 'heat'],
  ];
  for (const [src, must] of cases) {
    test(src, () => {
      const out = latexToText(src);
      expect(out).not.toMatch(/xrightarrow/);
      expect(out).toContain('→');
      expect(out).toContain(must);
    });
  }

  test('both labels are kept when both are given', () => {
    expect(latexToText('A \\xrightarrow[heat]{cat} B')).toContain('→(cat/heat)');
  });
});
