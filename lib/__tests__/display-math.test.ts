import { isDisplayWorthy, splitDisplay } from '@/lib/display-math';

describe('isDisplayWorthy', () => {
  test.each([
    ['v=3t^2-12t+9=3(t-1)(t-3)', true],
    ['h=\\frac{864.36}{19.6}', true],
    ['v^2=u^2+2as', true],
    ['s(1)=1-6+9=4', true],
    // Quantities and plain assignments stay in the sentence.
    ['u=29.4', false],
    // A unit is not working: these are quantities, whatever is in the braces.
    ['u=29.4\\,\\mathrm{m/s}', false],
    ['a=-g=-9.8\\,\\text{m/s}^2', false],
    ['a=-g=-9.8', false],
    ['t=1', false],
    ['[0,1], [1,3], [3,4]', false],
    ['29.4', false],
  ])('%s → %s', (tex, expected) => {
    expect(isDisplayWorthy(tex)).toBe(expected);
  });
});

describe('splitDisplay', () => {
  test('a title with an equation becomes the words, then the equation', () => {
    expect(splitDisplay('Factor the velocity: $v=3t^2-12t+9=3(t-1)(t-3)$')).toEqual([
      { kind: 'text', raw: 'Factor the velocity:' },
      { kind: 'display', raw: '$v=3t^2-12t+9=3(t-1)(t-3)$' },
    ]);
  });

  test('units travel with their equation, and the commas left behind go', () => {
    expect(
      splitDisplay('Compute displacements: $s(1)=1-6+9=4$ m, $s(3)=27-54+27=0$ m.')
    ).toEqual([
      { kind: 'text', raw: 'Compute displacements:' },
      { kind: 'display', raw: '$s(1)=1-6+9=4$ m' },
      { kind: 'display', raw: '$s(3)=27-54+27=0$ m' },
    ]);
  });

  test('a sentence with only quantities is left whole', () => {
    const raw = 'The velocity is zero at $t=1$ s and $t=3$ s.';
    expect(splitDisplay(raw)).toEqual([{ kind: 'text', raw }]);
  });

  test('\\( \\) is read as maths too', () => {
    expect(splitDisplay('So \\(v^2=u^2+2as\\).').map((p) => p.kind)).toEqual(['text', 'display']);
  });

  test('a connective rides on the equation it introduces', () => {
    expect(
      splitDisplay('Substituting gives $0=(29.4)^2+2(-9.8)h$, so $h=\\frac{(29.4)^2}{2\\times 9.8}$.')
    ).toEqual([
      { kind: 'text', raw: 'Substituting gives' },
      { kind: 'display', raw: '$0=(29.4)^2+2(-9.8)h$' },
      { kind: 'display', raw: 'so $h=\\frac{(29.4)^2}{2\\times 9.8}$' },
    ]);
  });

  test('a preposition left dangling goes with its equation', () => {
    expect(splitDisplay('Reading a point: at $\\sigma=20+3$ N.')).toEqual([
      { kind: 'text', raw: 'Reading a point:' },
      { kind: 'display', raw: 'at $\\sigma=20+3$ N' },
    ]);
  });

  test('pick can lift just the last one', () => {
    const pieces = splitDisplay(
      'So $s(1)=1-6+9=4$ and $s(3)=27-54+27=0$.',
      (k, n) => k === n - 1
    );
    expect(pieces.map((p) => p.kind)).toEqual(['text', 'display']);
    // The trailing "and" goes with the equation it introduces.
    expect(pieces[0].raw).toBe('So $s(1)=1-6+9=4$');
    expect(pieces[1].raw).toBe('and $s(3)=27-54+27=0$');
  });

  test('an equation mid-sentence after "is" stays in its sentence', () => {
    const raw = 'The displacement function is $s(t)=\\int v\\,dt=t^3-6t^2+9t$ (taking $s(0)=0$).';
    expect(splitDisplay(raw)).toEqual([{ kind: 'text', raw }]);
  });

  test('"is" stays with its words when the equation ends the sentence', () => {
    expect(splitDisplay('The answer is $x=\\frac{a+b}{2}$.')).toEqual([
      { kind: 'text', raw: 'The answer is' },
      { kind: 'display', raw: '$x=\\frac{a+b}{2}$' },
    ]);
  });
});

describe('compound units stay with their number', () => {
  const { splitDisplay } = require('@/lib/display-math');
  test.each([
    ['$L = r × p = (10î + 5ĵ) × (2î + 1.5ĵ) = (10 × 1.5 − 5 × 2) k̂ = 5k̂$ J·s', 'J·s'],
    ['$τ = r × F = (10î + 5ĵ) × (2î + 3ĵ) = (10 × 3 − 5 × 2) k̂ = 20k̂$ N·m', 'N·m'],
    ['$p = 0.1v = 0.1(20î + 15ĵ) = 2î + 1.5ĵ$ kg·m/s', 'kg·m/s'],
    ['$a = (F − f)/m = (20 − 12)/2 = 4$ m/s²', 'm/s²'],
  ])('%s', (raw, unit) => {
    const pieces = splitDisplay(raw);
    expect(pieces).toHaveLength(1);
    expect(pieces[0]).toMatchObject({ kind: 'display' });
    expect(pieces[0].raw.endsWith(unit)).toBe(true);
  });

  test('a word after the equation is not mistaken for a unit', () => {
    const pieces = splitDisplay('$τ = r × F = (10î + 5ĵ) × (2î + 3ĵ) = 20k̂$ Therefore, it turns.');
    expect(pieces[0]).toMatchObject({ kind: 'display' });
    expect(pieces[0].raw.endsWith('20k̂$')).toBe(true);
    expect(pieces.some((p: { kind: string; raw: string }) => p.kind === 'text' && p.raw.startsWith('Therefore'))).toBe(true);
  });
});
