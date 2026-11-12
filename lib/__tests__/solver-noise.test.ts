import { clearControlChars, latexToSegments, latexToText } from '@/lib/latex-text';
import { solutionRows } from '@/lib/solution-rows';
import { normaliseDisplayMath, parseSolutionStep } from '@/lib/solution-steps';

const onScreen = (raw: string) =>
  solutionRows(parseSolutionStep(raw)).map((row) => [row.kind, latexToText(row.raw)]);

describe('a solver answer that ran off the rails', () => {
  // The step from a live snap on the App Store build, 3 Nov 2026. It showed a
  // literal "$", then "utomaticallyachor" and "utomatically$" on their own lines.
  const LIVE =
    'Find the range\nExponentiating the defining equation gives each range value for a non-negative integer x.\n' +
    '$y = (2/5)^x,\\or\n\u0007utomaticallyachor\n\u0007utomatically$';

  it('shows the live step clean, with its formula', () => {
    expect(onScreen(LIVE)).toEqual([
      ['title', 'Find the range'],
      ['text', 'Exponentiating the defining equation gives each range value for a non-negative integer x.'],
      ['display', 'y = (2/5)ˣ'],
    ]);
  });

  it('shows it clean when the control character was already lost on the way', () => {
    expect(onScreen(LIVE.split('\u0007').join(''))).toEqual(onScreen(LIVE));
  });

  it('shows it clean when the backslash survived instead', () => {
    expect(onScreen(LIVE.split('\u0007').join('\\a'))).toEqual(onScreen(LIVE));
  });
});

describe('a maths block across lines', () => {
  it('becomes one formula per line, with no dollar signs on screen', () => {
    expect(normaliseDisplayMath('$7^2 = 49\n7^4 = 2401$')).toBe('$7^2 = 49$\n$7^4 = 2401$');
  });

  it('keeps the words before it, and a full stop after it does not stop it closing', () => {
    expect(normaliseDisplayMath('Thus $a = 1\nb = 2$.')).toBe('Thus\n$a = 1$\n$b = 2$');
  });

  it('keeps a word that does join two lines, as words', () => {
    expect(normaliseDisplayMath('$a = 1\nhence\nb = 2$')).toBe('$a = 1$\nhence\n$b = 2$');
  });

  it('keeps an "or" that has a result after it', () => {
    const [first, second] = normaliseDisplayMath('$x = 1,\\or\nx = 2$').split('\n');
    expect(latexToText(first).trim()).toBe('x = 1, or');
    expect(latexToText(second)).toBe('x = 2');
  });

  it('keeps a real command on a line of its own', () => {
    expect(normaliseDisplayMath('$a = 1\n\\therefore\nb = 2$')).toBe('$a = 1$\n$\\therefore$\n$b = 2$');
  });

  it('never joins two prices on two lines', () => {
    const prices = 'The first costs $5 a kilo\nThe second costs $6 a kilo';
    expect(normaliseDisplayMath(prices)).toBe(prices);
  });

  it('leaves balanced lines exactly as they were', () => {
    const fine = 'Use energy.\n$E = mc^2$\nSo $m$ is the mass of $x$.';
    expect(normaliseDisplayMath(fine)).toBe(fine);
  });

  it('leaves a block with no end alone', () => {
    const open = 'Then $a = 1\nand more words';
    expect(normaliseDisplayMath(open)).toBe(open);
  });
});

describe('control characters', () => {
  it('puts the backslash back in front of a real command', () => {
    expect(clearControlChars('$\u0005ce{CN^-}$')).toBe('$\\ce{CN^-}$');
    expect(latexToText('$\u0000rightarrow$')).toBe('→');
  });

  it('removes a terminal code and keeps the command after it', () => {
    expect(latexToText('$\u001b[?25l\\theta$')).toBe('θ');
  });

  it('removes a meaningless word inside maths', () => {
    expect(latexToText('$y = 2\u0007utomatically$')).toBe('y = 2');
  });

  it('keeps the word in prose, where it may be real', () => {
    expect(latexToText('The \u0007force acts down.')).toBe('The force acts down.');
  });

  it('keeps a single-letter variable after one', () => {
    expect(latexToText('$y = 2\u0007x$')).toBe('y = 2x');
  });

  it('leaves tabs and newlines as whitespace', () => {
    expect(clearControlChars('a\tb\nc')).toBe('a\tb\nc');
  });

  it('cannot break the fraction drawing, which uses control characters as its own marks', () => {
    const segments = latexToSegments('Take $\\frac{1}{2}$\u0011 and go on.');
    expect(segments.some((s) => s.kind === 'fraction')).toBe(true);
    expect(JSON.stringify(segments)).not.toMatch(/\\u00(0|1)/);
  });
});
