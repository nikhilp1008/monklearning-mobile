import { splitProse } from '@/lib/prose-paragraphs';

/**
 * Breaking a long authored block into readable paragraphs.
 *
 * The invariant that matters most is the last test: whatever this does, joining
 * the result must return the input exactly. A renderer that silently drops or
 * duplicates a clause in a physics textbook is worse than one that leaves a
 * long paragraph alone.
 */

const S = (n: number, word = 'word') =>
  `${Array.from({ length: n }, () => word).join(' ')}.`;

describe('splitProse', () => {
  it('leaves a short block alone', () => {
    const one = 'A force pointing at the hinge cannot turn anything.';
    expect(splitProse(one)).toEqual([one]);
  });

  it('breaks a long block at sentence boundaries', () => {
    // Long enough to be worth breaking: five sentences, ~500 characters,
    // which is the corpus median.
    const html = [S(20), S(20), S(20), S(20), S(20)].join(' ');
    const out = splitProse(html);
    expect(out.length).toBeGreaterThan(1);
    // Every chunk starts a sentence, so none may begin mid-word or lowercase
    // after a space-stripped join.
    for (const chunk of out) expect(chunk.trim()).toMatch(/\.$|\.\s*$/);
  });

  it('never splits a single long sentence', () => {
    const one = `${Array.from({ length: 120 }, () => 'word').join(' ')}.`;
    expect(one.length).toBeGreaterThan(420);
    expect(splitProse(one)).toEqual([one]);
  });

  it('does not split on a decimal point', () => {
    const html = `${S(20)} The value is 3.5 metres per second and stays there. ${S(20)} ${S(20)}`;
    for (const chunk of splitProse(html)) {
      expect(chunk).not.toMatch(/3\.\s*$/);
    }
  });

  it('does not split on an abbreviation', () => {
    const html = `${S(22)} Take a rigid body, e.g. a wheel on an axle, and spin it. ${S(22)} ${S(22)}`;
    for (const chunk of splitProse(html)) {
      expect(chunk.trimEnd()).not.toMatch(/e\.g\.$/);
    }
  });

  it('does not split inside maths', () => {
    const html = `${S(22)} The result is $v = 3.5\\,\\text{m s}^{-1}. $ and it holds. ${S(22)} ${S(22)}`;
    for (const chunk of splitProse(html)) {
      // A chunk containing a $ must contain an even number of them.
      expect((chunk.match(/\$/g) ?? []).length % 2).toBe(0);
    }
  });

  it('does not leave a stray short chunk at the end', () => {
    const html = `${S(30)} ${S(30)} Yes.`;
    const out = splitProse(html);
    expect(out[out.length - 1].trim().length).toBeGreaterThan(20);
  });

  it('keeps bold spans whole', () => {
    const html = `${S(24)} Distance is a plain number, a <b>scalar</b>. ${S(24)} ${S(24)}`;
    for (const chunk of splitProse(html)) {
      expect((chunk.match(/<b>/g) ?? []).length).toBe((chunk.match(/<\/b>/g) ?? []).length);
    }
  });

  it('returns the input exactly when its chunks are joined', () => {
    const samples = [
      [S(14), S(9), S(20), S(11), S(16)].join(' '),
      `${S(30)} And then $x = 1.5$ holds. ${S(30)} ${S(12)}`,
      `${S(40)} ${S(40)}`,
      'One sentence only, but a very long one that runs past every threshold set in the module and therefore cannot be broken anywhere at all without cutting a sentence in half, which is not allowed.',
    ];
    for (const html of samples) {
      expect(splitProse(html).join('')).toBe(html);
    }
  });
});
