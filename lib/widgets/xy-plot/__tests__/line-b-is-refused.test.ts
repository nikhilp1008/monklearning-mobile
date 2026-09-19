/**
 * `line` is `a*x + c`. `b` is not read, and a payload carrying one is refused.
 *
 * Eight published boards wrote a slope into `b` by analogy with `parabola`'s
 * `a*x^2 + b*x + c`, and the widget drew a different line without complaint —
 * the intended y = 2x drawing as y = x (computed area 1.0000 against the 4/3
 * its caption claimed), and a Q = mcDT board with 8372 in `b` drawing Q = 0.
 *
 * The re-author loop is why this is a REFUSAL rather than a lint. Handed a
 * reviewer's reason that named the trap in plain words — "`line` is a*x+c and
 * IGNORES b" — the author model resent `b2: 3` and `b2: 1` unchanged on two of
 * four boards. A rule the author cannot see is a rule it will keep breaking;
 * a measured refusal is one its repair loop already knows how to act on.
 */
import { xyPlot } from '../index';

const base = { ...xyPlot.defaults, mode: 'curve', curve: 'line',
               x_min: 0, x_max: 5 } as Record<string, unknown>;

test('a line with a non-zero b is refused, and the message names the fix', () => {
  const r = xyPlot.validate({ ...base, a: 0, b: 8372, c: 0 });
  expect(r.ok).toBe(false);
  if (!r.ok) {
    expect(r.errors.join(' ')).toMatch(/b is 8372 on a line/);
    expect(r.errors.join(' ')).toMatch(/Put the slope in a and the intercept in c/);
  }
});

test('the second curve is checked too', () => {
  const r = xyPlot.validate({
    ...base, mode: 'area_between', curve: 'parabola', a: 1, b: 0, c: 0,
    curve2: 'line', a2: 1, b2: 2, c2: 0, x_min: -1, x_max: 3,
    shade_from: 0, shade_to: 2 });
  expect(r.ok).toBe(false);
  if (!r.ok) expect(r.errors.join(' ')).toMatch(/b2 is 2 on a line/);
});

test('the same coefficients on a PARABOLA are fine — b is read there', () => {
  expect(xyPlot.validate({ ...base, curve: 'parabola', a: 1, b: 2, c: 0 }).ok).toBe(true);
});

test('a line with b exactly zero passes', () => {
  expect(xyPlot.validate({ ...base, a: 2, b: 0, c: 3 }).ok).toBe(true);
});

test('a line with b absent passes', () => {
  const p = { ...base, a: 2, c: 3 } as Record<string, unknown>;
  delete p.b;
  expect(xyPlot.validate(p).ok).toBe(true);
});
