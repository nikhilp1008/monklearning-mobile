import { NBSP, spaceOperators } from '@/lib/math-spacing';

/** Read the no-break spaces inside brackets as ordinary ones for the cases
 *  below; the bracket rule has its own test. */
const plain = (s: string) => s.replace(new RegExp(NBSP, 'g'), ' ');

describe('spaceOperators', () => {
  test('a bracketed group cannot break across lines', () => {
    expect(spaceOperators('3(t-1)(t-3)')).toBe(`3(t${NBSP}−${NBSP}1)(t${NBSP}−${NBSP}3)`);
    // Outside the brackets the spaces are ordinary, so the line can wrap there.
    expect(spaceOperators('v=3(t-1)+2t+9=0')).toBe(`v = 3(t${NBSP}−${NBSP}1) + 2t + 9 = 0`);
  });

  test('a short equation never breaks across lines', () => {
    expect(spaceOperators('t=1')).toBe(`t${NBSP}=${NBSP}1`);
    expect(spaceOperators('h=44.1')).toBe(`h${NBSP}=${NBSP}44.1`);
  });

  test.each([
    // The solver's own shapes, seen on real doubts.
    ['v=3t²-12t+9=3(t-1)(t-3)', 'v = 3t² − 12t + 9 = 3(t − 1)(t − 3)'],
    ['s(1)=1-6+9=4', 's(1) = 1 − 6 + 9 = 4'],
    ['=|s(1)-s(0)|+|s(3)-s(1)|', '= |s(1) − s(0)| + |s(3) − s(1)|'],
    ['19.6H=864.36⇒H=44.1', '19.6H = 864.36 ⇒ H = 44.1'],
    ['2×9.8', '2 × 9.8'],
    // A sign on its own stays on its number.
    ['a=-g=-9.8', 'a = −g = −9.8'],
    ['2(-9.8)h', '2(−9.8)h'],
    ['-4', '−4'],
    // Already spaced is left as it was.
    ['x = 1 + 2', 'x = 1 + 2'],
    // Scientific notation keeps its exponent.
    ['1.6e-19', '1.6e−19'],
    // An equation that starts or ends on a relation gets no stray space.
    ['=4', '= 4'],
    ['h=', 'h ='],
    // ASCII two-character relations are kept whole.
    ['x<=5', 'x <= 5'],
  ])('%s', (input, expected) => {
    expect(plain(spaceOperators(input))).toBe(expected);
  });
});
