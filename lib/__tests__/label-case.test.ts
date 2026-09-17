import { labelCase } from '@/lib/label-case';

/**
 * The textbook's section labels, out of capitals.
 *
 * The cases here are the real strings from the chapter files, including the
 * ones that are the whole reason these go to lowercase rather than to sentence
 * case: an all-caps label has already lost the fact that Biot and Savart were
 * people, and no rule can put it back.
 */

describe('labelCase', () => {
  it('brings an authored all-caps label down', () => {
    expect(labelCase('HOW TO · EXTRACTING MOTION DATA FROM A SINGLE GRAPH')).toBe(
      'how to · extracting motion data from a single graph'
    );
    expect(labelCase('FIGURE 2.1 · FROM SECANT TO TANGENT')).toBe(
      'figure 2.1 · from secant to tangent'
    );
  });

  it('brings a mixed-case label down too, so the page is consistent', () => {
    expect(labelCase('How to · Reading a graph')).toBe('how to · reading a graph');
  });

  it('keeps acronyms up, because lowercasing those is wrong rather than stylish', () => {
    expect(labelCase('FORMULA · RMS VALUE OF AC')).toBe('formula · RMS value of AC');
    expect(labelCase('CRACK THE MCQ · Q1 OF 4')).toBe('crack the MCQ · Q1 of 4');
    expect(labelCase('DERIVATION · SI UNITS')).toBe('derivation · SI units');
  });

  it('does not mistake a common short word for an acronym', () => {
    expect(labelCase('FORMULA · THE WAY OF IT')).toBe('formula · the way of it');
    expect(labelCase('HOW TO · DO NOT ALL ARE')).toBe('how to · do not all are');
  });

  it('leaves digits, separators and punctuation alone', () => {
    expect(labelCase('SOLVED EXAMPLE · 3 OF 12')).toBe('solved example · 3 of 12');
    expect(labelCase("FORMULA · NEWTON'S LAW")).toBe("formula · newton's law");
  });

  it('handles an acronym in brackets or with a stop', () => {
    expect(labelCase('FIGURE · THE (AC) CIRCUIT.')).toBe('figure · the (AC) circuit.');
  });
});
