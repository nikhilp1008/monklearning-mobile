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
});
