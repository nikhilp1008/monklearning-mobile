/**
 * `region_plot@1`, N3 / gap G9.
 *
 * The areas are checked against CLOSED FORMS — π, π/4, 1/6, 2 — which the
 * widget's own Simpson integration knows nothing about, and the crossings
 * against algebra solved by hand. Both are independent routes: a check that
 * re-ran the same quadrature could not fail however wrong the boundaries were.
 */
import { spawnSync } from 'node:child_process';
import { mkdtempSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';

import { regionPlot, validate } from '../index';
import { area, crossings, domain, yAt, type Boundary } from '../regions';
import { renderWidgetTreeAt } from '../../__tests__/test-utils';

const ROOT = resolve(__dirname, '../../../..');
const GATE = resolve(ROOT, 'scripts/verify-render.mjs');
const dir = mkdtempSync(join(tmpdir(), 'g9-'));
const FRAMES = [
  [340, 340], [343, 236], [495, 270], [702, 289], [900, 430],
] as const;

const bd = (kind: string, o: Partial<Boundary> = {}): Boundary =>
  ({ kind, a: 1, b: 0, c: 0, r: 1, ...o } as Boundary);

describe('areas, against closed forms the quadrature does not know', () => {
  test('the full unit circle is π', () => {
    const a = area(bd('circle_upper'), bd('circle_lower'), -1, 1, 20000);
    expect(a).toBeCloseTo(Math.PI, 3);
  });

  test('the quarter circle is π/4', () => {
    const a = area(bd('circle_upper'), bd('line', { a: 0, c: 0 }), 0, 1, 20000);
    expect(a).toBeCloseTo(Math.PI / 4, 3);
  });

  test('between y = x and y = x² on [0,1] is 1/6', () => {
    // Simpson is exact for quadratics, so this one should be tight.
    const a = area(bd('line', { a: 1, c: 0 }), bd('parabola', { a: 1, c: 0 }), 0, 1);
    expect(a).toBeCloseTo(1 / 6, 10);
  });

  test('the modulus diamond |x| + |y| ≤ 1 has area 2', () => {
    // upper y = 1 − |x|, lower y = |x| − 1
    const a = area(bd('abs', { a: -1, c: 1 }), bd('abs', { a: 1, c: -1 }), -1, 1);
    expect(a).toBeCloseTo(2, 10);
  });
});

describe('crossings, against algebra done by hand', () => {
  test('y = x and y = x² meet at 0 and 1', () => {
    const c = crossings(bd('line', { a: 1 }), bd('parabola', { a: 1 }), -0.5, 1.5);
    expect(c).toHaveLength(2);
    expect(c[0]).toBeCloseTo(0, 6);
    expect(c[1]).toBeCloseTo(1, 6);
  });

  test('x² + y² = 8 and y² = 4x meet at x = 2', () => {
    // 8 − x² = 4x ⇒ x² + 4x − 8 = 0 ⇒ x = −2 + 2√3 = 1.4641…
    // (the objective's own "splitting" example; solved here, not in the code)
    const want = -2 + 2 * Math.sqrt(3);
    const c = crossings(bd('circle_upper', { r: Math.sqrt(8) }),
                        bd('sqrt', { a: 2 }), 0, 2.8);
    expect(c.length).toBeGreaterThanOrEqual(1);
    expect(c[0]).toBeCloseTo(want, 4);
  });

  test('a TOUCH is a split too — |x| against y = 0 at the origin', () => {
    // O2, 2026-09-23. The first version looked only for sign changes, which
    // finds every crossing and misses every touch. |x| − 0 is zero at the
    // origin and positive either side, so nothing changed sign, no split line
    // was drawn — and that split is the WHOLE of "find the area under a
    // modulus curve by splitting the interval at points where the inside
    // expression changes sign". The board was judged n for it.
    const c = crossings(bd('abs', { a: 1, c: 0 }), bd('line', { a: 0, c: 0 }), -2, 3);
    expect(c).toHaveLength(1);
    expect(c[0]).toBeCloseTo(0, 6);
  });

  test('a touch OFF THE SAMPLE GRID is found', () => {
    // THE TEST THAT ACTUALLY EXERCISES THE TOUCH LOOP, and the reason it is
    // written this way is worth keeping.
    //
    // The first two touch fixtures — |x| at the origin over [-2,3], and
    // (x−1)² over [-1,3] — both put the touch EXACTLY on a sample point.
    // `f` is then exactly 0 there, `Math.sign(0)` is 0, that differs from the
    // sign either side, and the ordinary sign-change branch fires. Both
    // passed with the touch loop deleted. They were testing the sampling's
    // luck, not the code.
    //
    // (x − 1/3)² over [-1, 3] at 400 steps has its touch at 0.3333…, and the
    // grid lands on -1 + 0.01i, so no sample is exactly zero and the
    // sign-change branch cannot see it.
    const c = crossings(bd('parabola', { a: 1, b: -2 / 3, c: 1 / 9 }),
                        bd('line', { a: 0, c: 0 }), -1, 3);
    expect(c).toHaveLength(1);
    expect(c[0]).toBeCloseTo(1 / 3, 4);
  });

  test('a near-miss is NOT reported as a split', () => {
    // The other direction, and the one a tolerance gets wrong: y = x² + 0.5
    // against y = 2x − 1 never reaches zero — the minimum gap is 1.5 — and a
    // loose tolerance would invent a split at the point of closest approach.
    expect(crossings(bd('parabola', { a: 1, b: 0, c: 0.5 }),
                     bd('line', { a: 2, c: -1 }), -1, 3)).toEqual([]);
  });

  test('curves that never meet report no crossing', () => {
    expect(crossings(bd('line', { a: 0, c: 3 }), bd('line', { a: 0, c: 1 }), -2, 2))
      .toEqual([]);
  });
});

describe('the boundaries are honest about where they do not exist', () => {
  test('a circle is NaN outside its radius, not zero', () => {
    // Returning 0 would draw a boundary through the origin that is not there.
    expect(Number.isNaN(yAt(bd('circle_upper', { r: 1 }), 1.5))).toBe(true);
    expect(yAt(bd('circle_upper', { r: 1 }), 0)).toBeCloseTo(1, 12);
  });
  test('a square root is NaN below zero', () => {
    expect(Number.isNaN(yAt(bd('sqrt'), -0.5))).toBe(true);
  });
  test('domain clips a circle to its radius', () => {
    expect(domain(bd('circle_upper', { r: 2 }), -5, 5)).toEqual([-2, 2]);
    expect(domain(bd('sqrt'), -5, 5)).toEqual([0, 5]);
  });
});

describe('refusals', () => {
  const good = regionPlot.defaults;

  test.each(['split_at', 'intersection', 'area', 'region_area'])(
    '%p cannot be authored', (k) => {
      const r = validate({ ...good, [k]: 1.2 });
      expect(r.ok).toBe(false);
      if (!r.ok) expect(r.errors.join(' ')).toMatch(/is not a parameter/);
    });

  test('a region with no area is refused, with the percentage', () => {
    // Two parallel lines with the box far larger than the gap between them:
    // a picture of two curves, not of a region, and the widget is the region.
    const r = validate({
      ...good, upper: bd('line', { a: 0, c: 0.01 }), lower: bd('line', { a: 0, c: 0 }),
      x_min: -5, x_max: 5, y_min: -5, y_max: 5,
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.errors.join(' ')).toMatch(/of the view box/);
  });

  test('a boundary carrying keys the widget does not read', () => {
    const r = validate({ ...good, upper: { ...bd('line'), expression: 'x^2' } });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.errors.join(' ')).toMatch(/does not read/);
  });

  test('b on a line, which is never read', () => {
    const r = validate({ ...good, upper: bd('line', { b: 4 }) });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.errors.join(' ')).toMatch(/never read/);
  });

  test('an inverted or empty view box', () => {
    expect(validate({ ...good, x_min: 2, x_max: 1 }).ok).toBe(false);
    expect(validate({ ...good, y_min: 1, y_max: 1 }).ok).toBe(false);
  });

  test('a bad kind, a non-positive radius, NaN, and non-objects', () => {
    expect(validate({ ...good, upper: bd('hyperbola') }).ok).toBe(false);
    expect(validate({ ...good, upper: bd('circle_upper', { r: 0 }) }).ok).toBe(false);
    expect(validate({ ...good, x_min: NaN }).ok).toBe(false);
    expect(validate({}).ok).toBe(false);
    expect(validate(3).ok).toBe(false);
    expect(validate(null).ok).toBe(false);
  });

  test('the defaults validate and computeDerived matches `derived`', () => {
    expect(validate(regionPlot.defaults).ok).toBe(true);
    const d = regionPlot.computeDerived!(regionPlot.defaults);
    expect(Object.keys(d).sort()).toEqual([...regionPlot.derived!].sort());
    expect(d.regionArea).toBeGreaterThan(0);
  });
});

describe('the three disguises, through the REAL gate at five frames', () => {
  const CASES: { n: string; p: Record<string, unknown> }[] = [
    { n: 'circle-parabola', p: regionPlot.defaults as never },
    { n: 'modulus-diamond', p: {
      ...regionPlot.defaults,
      upper: bd('abs', { a: -1, c: 1 }), lower: bd('abs', { a: 1, c: -1 }),
      x_min: -1.2, x_max: 1.2, y_min: -1.2, y_max: 1.2, show_strips: false,
    } },
    { n: 'strict-wedge', p: {
      ...regionPlot.defaults,
      upper: bd('circle_upper', { r: 1 }), lower: bd('line', { a: 1, c: 0 }),
      x_min: -1.1, x_max: 1.1, y_min: -1.1, y_max: 1.1, strict: true,
    } },
    { n: 'quarter-circle-strips', p: {
      ...regionPlot.defaults,
      upper: bd('circle_upper', { r: 1 }), lower: bd('line', { a: 0, c: 0 }),
      x_min: 0, x_max: 1, y_min: 0, y_max: 1.1, show_strips: true,
    } },
    { n: 'line-parabola', p: {
      ...regionPlot.defaults,
      upper: bd('line', { a: 1, c: 0 }), lower: bd('parabola', { a: 1, c: 0 }),
      x_min: 0, x_max: 1, y_min: 0, y_max: 1.1,
    } },
  ];

  for (const c of CASES) {
    for (const [w, h] of FRAMES) {
      test(`${c.n} at ${w}x${h}`, () => {
        const v = validate(c.p);
        expect(v.ok).toBe(true);
        if (!v.ok) return;
        const json = JSON.stringify(
          renderWidgetTreeAt(regionPlot, v.params, {}, w, h));
        expect(json).not.toContain('NaN');
        const f = join(dir, `${c.n}-${w}x${h}.json`);
        writeFileSync(f, json);
        const r = spawnSync('node', [GATE, f, '--w', String(w), '--h', String(h)],
                            { cwd: ROOT, encoding: 'utf8' });
        if (r.status !== 0) throw new Error(`${c.n} ${w}x${h}:\n${r.stdout}${r.stderr}`);
      }, 20_000);
    }
  }

  test('strictness reaches the drawing', () => {
    // Solid for ≤, dashed for <. A picture that draws both the same way has
    // thrown away part of what the region IS.
    const loose = validate({ ...CASES[2].p, strict: false });
    const strict = validate({ ...CASES[2].p, strict: true });
    if (!loose.ok || !strict.ok) throw new Error('fixture invalid');
    const a = JSON.stringify(renderWidgetTreeAt(regionPlot, loose.params, {}, 343, 236));
    const b = JSON.stringify(renderWidgetTreeAt(regionPlot, strict.params, {}, 343, 236));
    expect(a).not.toBe(b);
    expect(b).toContain('5 4');
  });

  test('a Hinglish caption at 343x236 changes nothing but the caption', () => {
    const en = validate({ ...regionPlot.defaults, caption: 'Area between curves' });
    const hi = validate({ ...regionPlot.defaults,
      caption: 'Do curves ke beech ka area nikalte hain' });
    if (!en.ok || !hi.ok) throw new Error('fixture invalid');
    const strip = (t: unknown) =>
      JSON.stringify(t).replace(/"content":"[^"]*"/g, '"content":"X"');
    expect(strip(renderWidgetTreeAt(regionPlot, hi.params, {}, 343, 236)))
      .toBe(strip(renderWidgetTreeAt(regionPlot, en.params, {}, 343, 236)));
  });
});
