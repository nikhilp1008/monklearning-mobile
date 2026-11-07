/**
 * `\,` `\;` `\:` `\!` and `\ ` are spacing, never text.
 *
 * Found by rendering every board line of the 290 stored plans through the
 * release converter (2026-10-04): 41 of 26,060 lines wrote a literal `\,` or
 * `\;` on the board. They are all lines with NO `\command` in them — `dA = x \,
 * dy`, `q\,E(r+a)` — so the converter took them for prose and handled only the
 * bare scripts. Inside `$…$`, or in a line that also has a `\command`, the same
 * escapes were always turned into spaces; the bare path never was.
 *
 * The lines below are verbatim from the audit.
 */
import { latexToText } from '@/lib/latex-text';

const NO_LEAK = /\\[,;:!]/;

describe('a spacing escape on a line with no other command', () => {
  const cases: [string, string, string][] = [
    ['dA = x \\, dy', 'dA = x dy', 'a thin space between a factor and its differential'],
    ['dA = [f(x) - g(x)]\\,dx', 'dA = [f(x) - g(x)] dx', 'with no spaces in the source'],
    ['V = E + Ir = 6 + (1.6)(0.5) = 6.8\\,V', 'V = E + Ir = 6 + (1.6)(0.5) = 6.8 V', 'between a number and its unit'],
    ['E = k\\,l_1', 'E = k l₁', 'next to a script'],
    ['[E] = [M\\,L\\,T^{-3}\\,A^{-1}]', '[E] = [M L T⁻³ A⁻¹]', 'a dimension formula'],
    ['C_1 V_1 + C_2 V_2 = (C_1 + C_2)\\, V_c', 'C₁ V₁ + C₂ V₂ = (C₁ + C₂) V_c', 'a space after the escape is not doubled'],
    ['dA = l\\,dx = l\\,v\\,dt', 'dA = l dx = l v dt', 'several in one line'],
  ];
  it.each(cases)('%s', (raw, expected) => {
    const out = latexToText(raw);
    expect(out).not.toMatch(NO_LEAK);
    expect(out).toBe(expected);
  });

  it('leaves the labelled-arrow lines clean too', () => {
    // The arrow is resolved first, which leaves no \\command behind for the
    // line to be recognised by.
    const out = latexToText('2\\,HCHO \\xrightarrow{conc.\\,NaOH} CH_3OH + HCOONa');
    expect(out).not.toMatch(NO_LEAK);
    expect(out).toContain('2 HCHO');
  });

  it('turns \\; into a space and keeps the line readable', () => {
    const out = latexToText('>C=O \\;\\xrightarrow{Nu^-}\\; >C(Nu)-O^-');
    expect(out).not.toMatch(NO_LEAK);
    expect(out).toBe('>C=O →(Nu⁻) >C(Nu)-O⁻');
  });

  it('\\! is a negative space: nothing at all', () => {
    expect(latexToText('a\\!b')).toBe('ab');
  });

  it('backslash-space is a space', () => {
    expect(latexToText('4\\ A')).toBe('4 A');
  });
});

describe('what it must not touch', () => {
  it('keeps the same escapes inside $…$ exactly as before', () => {
    expect(latexToText('$8\\,\\text{H}$')).toBe(latexToText('$8\\,\\text{H}$'));
    expect(latexToText('$a \\, b$')).not.toMatch(NO_LEAK);
  });

  it('keeps a double backslash (a line break) as it was', () => {
    expect(latexToText('a \\\\, b')).toContain('\\\\');
  });

  it('leaves ordinary prose alone', () => {
    expect(latexToText('The bulb glows, then dims; why?')).toBe('The bulb glows, then dims; why?');
  });
});
