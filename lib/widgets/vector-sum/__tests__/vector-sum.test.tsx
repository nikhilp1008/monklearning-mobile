/**
 * `vector_sum@1`, N3 / gap G6.
 *
 * The reference values are checked by an INDEPENDENT route wherever one
 * exists — the cosine rule against Cartesian addition — because
 * `R² = A² + B² + 2AB cos θ` rearranged is still the cosine rule, and a
 * check that rearranges the same equation proves only that algebra works.
 * lib/widgets/CLAUDE.md: "If you cannot state what a check could catch, it
 * catches nothing."
 */
import { vectorSum, validate, MODES } from '../index';
import { components, DEG, resultant, resultantRange } from '../geometry';
import { renderWidgetTreeAt } from '../../__tests__/test-utils';

const GATE_FRAMES = [
  [340, 340], [343, 236], [495, 270], [702, 289], [900, 430],
] as const;

const good = {
  mode: 'parallelogram', a_mag: 3, b_mag: 4, theta_deg: 90,
  a_label: 'A', b_label: 'B', show_perpendicular: true,
  caption: 'Parallelogram law',
};

describe('the maths, against a second derivation', () => {
  /*
   * CARTESIAN ADDITION. Put A along the x-axis and B at θ to it, add the
   * components, take the modulus. That reaches |R| without ever writing the
   * cosine rule, so agreement is evidence rather than an identity — the trap
   * `circuit_network` fell into when it "proved" terminal_v === i*r_eq.
   */
  function byComponents(a: number, b: number, thetaDeg: number) {
    const t = thetaDeg * DEG;
    const x = a + b * Math.cos(t);
    const y = b * Math.sin(t);
    return { r: Math.hypot(x, y), alphaDeg: Math.atan2(y, x) / DEG };
  }

  test.each([
    [3, 4, 90], [1, 1, 60], [5, 3, 0], [5, 3, 180], [1, 1, 90],
    [2, 7, 35], [9, 2, 145], [4, 4, 120], [6, 1, 17], [3, 8, 173],
  ])('A=%p B=%p θ=%p agrees with Cartesian addition', (a, b, th) => {
    const mine = resultant(a, b, th);
    const other = byComponents(a, b, th);
    expect(mine.r).toBeCloseTo(other.r, 10);
    expect(mine.alphaDeg).toBeCloseTo(other.alphaDeg, 10);
  });

  test('the five NCERT-level reference rows', () => {
    // Written down in geometry.ts and recomputed by hand before it was.
    expect(resultant(3, 4, 90).r).toBeCloseTo(5, 10);
    expect(resultant(3, 4, 90).alphaDeg).toBeCloseTo(53.13010235, 6);
    expect(resultant(1, 1, 60).r).toBeCloseTo(Math.sqrt(3), 10);
    expect(resultant(1, 1, 60).alphaDeg).toBeCloseTo(30, 10);
    expect(resultant(5, 3, 0).r).toBeCloseTo(8, 10);
    expect(resultant(5, 3, 180).r).toBeCloseTo(2, 10);
    expect(resultant(1, 1, 90).r).toBeCloseTo(Math.SQRT2, 10);
  });

  test('θ=180 with A=B is the ZERO vector, and is not given a direction', () => {
    // atan2 does not rescue this case and an earlier comment claimed it did.
    // sin(π) is 1.2246e-16, not 0, while a + b·cos(π) is exactly 0, so a bare
    // atan2 reports 90° — a confident right angle for a vector that does not
    // exist. This test is what caught that.
    const s = resultant(4, 4, 180);
    expect(s.r).toBeCloseTo(0, 10);
    expect(Number.isNaN(s.alphaDeg)).toBe(false);
    expect(s.alphaDeg).toBe(0);
    // and the raw atan2 really would have said 90, so the guard is load-bearing
    expect(Math.atan2(4 * Math.sin(Math.PI), 4 + 4 * Math.cos(Math.PI)) / DEG)
      .toBeCloseTo(90, 6);
  });

  test('a resultant too short to draw is REFUSED, not drawn', () => {
    const r = validate({ ...good, a_mag: 4, b_mag: 4, theta_deg: 180 });
    expect(r.ok).toBe(false);
    if (!r.ok) {
      expect(r.errors.join(' ')).toMatch(/zero vector/);
      expect(r.errors.join(' ')).toMatch(/picture of nothing/);
    }
    // near-degenerate too, not only the exact point
    expect(validate({ ...good, a_mag: 4, b_mag: 4, theta_deg: 179 }).ok).toBe(false);
    // ...and an honest cancellation-adjacent figure still passes
    expect(validate({ ...good, a_mag: 5, b_mag: 3, theta_deg: 180 }).ok).toBe(true);
  });

  test('the resultant always lies in |A−B| … A+B', () => {
    // The property the "use the resultant range to check possible
    // magnitudes" objective asks for, swept rather than sampled.
    for (let a = 1; a <= 9; a += 2) {
      for (let b = 1; b <= 9; b += 2) {
        const [lo, hi] = resultantRange(a, b);
        for (let th = 0; th <= 180; th += 5) {
          const r = resultant(a, b, th).r;
          expect(r).toBeGreaterThanOrEqual(lo - 1e-9);
          expect(r).toBeLessThanOrEqual(hi + 1e-9);
        }
      }
    }
  });

  test('components close the right triangle', () => {
    const c = components(5, 37);
    expect(Math.hypot(c.x, c.y)).toBeCloseTo(5, 10);
  });
});

describe('R cannot be authored — the refusal this widget exists for', () => {
  test.each(['r', 'r_mag', 'resultant', 'resultant_mag', 'alpha_deg'])(
    '%p is refused by name', (key) => {
      const res = validate({ ...good, [key]: 5 });
      expect(res.ok).toBe(false);
      if (!res.ok) {
        expect(res.errors.join(' ')).toMatch(/is not a parameter/);
        expect(res.errors.join(' ')).toMatch(/DERIVED/);
      }
    });

  test('the message says what the stored board actually did', () => {
    // A refusal that only says "unknown key" teaches nothing. This one names
    // the defect it exists to prevent, which is in the corpus.
    const res = validate({ ...good, r: 1.0 });
    if (res.ok) throw new Error('should have refused');
    expect(res.errors.join(' ')).toMatch(/A\+B\+R/);
  });

  test('computeDerived is where the resultant comes from', () => {
    const d = vectorSum.computeDerived!({ ...good, mode: 'parallelogram' } as never);
    expect(d.r).toBeCloseTo(5, 10);
    expect(d.alphaDeg).toBeCloseTo(53.13010235, 6);
    expect(Object.keys(d).sort()).toEqual([...vectorSum.derived!].sort());
  });
});

describe('the other refusals', () => {
  test('a reflex angle', () => {
    const r = validate({ ...good, theta_deg: 200 });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.errors.join(' ')).toMatch(/never reflex/);
  });
  test('a negative angle', () => {
    expect(validate({ ...good, theta_deg: -10 }).ok).toBe(false);
  });
  test('a magnitude outside the drawable range', () => {
    expect(validate({ ...good, a_mag: 0 }).ok).toBe(false);
    expect(validate({ ...good, b_mag: 1e6 }).ok).toBe(false);
  });
  test('NaN and Infinity', () => {
    expect(validate({ ...good, a_mag: NaN }).ok).toBe(false);
    expect(validate({ ...good, b_mag: Infinity }).ok).toBe(false);
  });
  test('an over-long label, with the measurement', () => {
    const r = validate({ ...good, a_label: 'velocity' });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.errors.join(' ')).toMatch(/2 over the 6/);
  });
  test('a bad mode', () => {
    expect(validate({ ...good, mode: 'triangle' }).ok).toBe(false);
  });
  test('an empty object, and a bare number, without throwing', () => {
    expect(validate({}).ok).toBe(false);
    expect(validate(42).ok).toBe(false);
    expect(validate(null).ok).toBe(false);
    expect(validate([1, 2]).ok).toBe(false);
  });
  test('the defaults validate', () => {
    expect(validate(vectorSum.defaults).ok).toBe(true);
  });
});

describe('it renders at every gate frame', () => {
  test.each(GATE_FRAMES)('parallelogram at %ix%i', (w, h) => {
    const v = validate(good);
    if (!v.ok) throw new Error('fixture invalid');
    const tree = renderWidgetTreeAt(vectorSum, v.params, {}, w, h);
    const json = JSON.stringify(tree);
    expect(tree).not.toBeNull();
    expect(json).not.toContain('NaN');
    expect(json).toContain('"A"');
    expect(json).toContain('"R"');
  });

  test.each(GATE_FRAMES)('components at %ix%i', (w, h) => {
    const v = validate({ ...good, mode: 'components', b_label: 'u', theta_deg: 37 });
    if (!v.ok) throw new Error('fixture invalid');
    const json = JSON.stringify(renderWidgetTreeAt(vectorSum, v.params, {}, w, h));
    expect(json).not.toContain('NaN');
  });

  test('the collinear corners render — θ=0 and θ=180', () => {
    // The two special cases the objectives name, and the two where the
    // figure degenerates: at θ=180 with A=B the whole drawing collapses to a
    // point and the scale divides by a zero span.
    for (const [a, b, th] of [[5, 3, 0], [5, 3, 180], [9, 1, 175]] as const) {
      const v = validate({ ...good, a_mag: a, b_mag: b, theta_deg: th });
      if (!v.ok) throw new Error(`${a},${b},${th} should validate`);
      for (const [w, h] of GATE_FRAMES) {
        const json = JSON.stringify(renderWidgetTreeAt(vectorSum, v.params, {}, w, h));
        expect(json).not.toContain('NaN');
        expect(json).not.toContain('Infinity');
      }
    }
  });

  test('a Hinglish caption at 343x236 does not change the figure', () => {
    // The default language, at the binding board, with a caption of realistic
    // length — "Do vectors ko jodne ka parallelogram tareeka" is what
    // persona.py actually produces, and it is longer than its English twin.
    const en = validate({ ...good, caption: 'Adding two vectors' });
    const hi = validate({ ...good,
      caption: 'Do vectors ko jodne ka parallelogram tareeka' });
    if (!en.ok || !hi.ok) throw new Error('fixture invalid');
    const strip = (t: unknown) =>
      JSON.stringify(t).replace(/"content":"[^"]*"/g, '"content":"X"');
    expect(strip(renderWidgetTreeAt(vectorSum, hi.params, {}, 343, 236)))
      .toBe(strip(renderWidgetTreeAt(vectorSum, en.params, {}, 343, 236)));
  });
});

describe('it declares no animatable params, and that is the contract', () => {
  test('R terminates in a label, so θ cannot tween', () => {
    expect(vectorSum.animatable).toEqual([]);
    expect(MODES).toContain('parallelogram');
  });
});
