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
