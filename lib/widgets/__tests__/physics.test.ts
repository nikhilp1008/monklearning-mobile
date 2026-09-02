/**
 * CLAUDE.md §6 rung 3: "numeric output checked against at least three known
 * values from an NCERT or standard reference, written into the maths module
 * as a comment." physics.ts's own header already states them — this is that
 * comment turned into an assertion, not a new derivation.
 *
 * Needs no RN mocking of any kind: physics.ts has zero imports and every
 * export is a pure `'worklet'`-marked function (the directive is an inert
 * string literal without the Reanimated Babel plugin running, which is fine
 * here — nothing about these assertions depends on it).
 */
import { derive } from '../projectile-motion/physics';

test('v0=22, theta=45, g=9.81 -> R=49.34 m, H=12.34 m, T=3.17 s', () => {
  const d = derive({ launch_angle_deg: 45, initial_speed_ms: 22, gravity_ms2: 9.81, body: 'earth' });
  expect(d.range).toBeCloseTo(49.34, 1);
  expect(d.apexHeight).toBeCloseTo(12.34, 1);
  expect(d.flightTime).toBeCloseTo(3.17, 1);
});

test('v0=22, theta=65, g=9.81 -> R=37.79 m, H=20.26 m', () => {
  const d = derive({ launch_angle_deg: 65, initial_speed_ms: 22, gravity_ms2: 9.81, body: 'earth' });
  expect(d.range).toBeCloseTo(37.79, 1);
  expect(d.apexHeight).toBeCloseTo(20.26, 1);
});

test('complementary angles (25 / 65) share a range', () => {
  const base = { initial_speed_ms: 22, gravity_ms2: 9.81, body: 'earth' as const };
  const a = derive({ ...base, launch_angle_deg: 25 });
  const b = derive({ ...base, launch_angle_deg: 65 });
  expect(a.range).toBeCloseTo(b.range, 6);
});
