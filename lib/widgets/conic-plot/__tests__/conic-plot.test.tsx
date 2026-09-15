/**
 * `conic_plot`, judged against NCERT before it is judged against itself.
 *
 * Every reference number here was derived from the book first and only then
 * compared to the module's output — the same rule `plot-math.ts` states for
 * its own table. A test that reads its expected value out of the code it is
 * testing proves the code agrees with itself.
 */
import { conicPlot, validateConicPlot, REF_W, REF_H } from '../index';
import { renderWidgetTreeAt } from '../../__tests__/test-utils';
import {
  eccentricity, focalDistance, latusRectumLength, regionArea, conicPath,
} from '../conic-math';

const FRAMES = [[340, 340], [343, 236], [495, 270], [702, 289], [900, 430]] as const;

/** The refusal reason, or a loud empty string if it was accepted — so a test
 *  that expects a refusal and gets a pass fails on the message, not a cast. */
const why = (raw: unknown) => {
  const r = validateConicPlot(raw);
  return r.ok ? '' : r.errors.join(' ');
};

const accept = (raw: unknown) => {
  const r = validateConicPlot(raw);
  if (!r.ok) throw new Error(`refused: ${r.errors.join('; ')}`);
  return r.params;
};

/* ── 1. the maths, against the book ──────────────────────────────────────── */

describe('the reference conics', () => {
  test('x² + y² = 16 — area 16π, e = 0', () => {
    const s = { kind: 'circle' as const, a: 4, b: 4, cx: 0, cy: 0, rotateDeg: 0 as const };
    expect(regionArea(s, 'interior', 0)).toBeCloseTo(16 * Math.PI, 10);
    expect(eccentricity(s)).toBe(0);
    expect(focalDistance(s)).toBe(0);
  });

  test('x²/25 + y²/9 = 1 — c = 4, e = 4/5, latus rectum 18/5', () => {
    const s = { kind: 'ellipse' as const, a: 5, b: 3, cx: 0, cy: 0, rotateDeg: 0 as const };
    expect(focalDistance(s)).toBeCloseTo(4, 12);
    expect(eccentricity(s)).toBeCloseTo(0.8, 12);
    expect(latusRectumLength(s)).toBeCloseTo(18 / 5, 12);
    expect(regionArea(s, 'interior', 0)).toBeCloseTo(15 * Math.PI, 10);
  });

  test('y² = 12x — a = 3, e = 1, latus rectum 12, interior unbounded', () => {
    const s = { kind: 'parabola' as const, a: 3, b: 3, cx: 0, cy: 0, rotateDeg: 0 as const };
    expect(focalDistance(s)).toBe(3);
    expect(eccentricity(s)).toBe(1);
    expect(latusRectumLength(s)).toBe(12);
    // 0 is a STATEMENT here, not a gap: the region is unbounded and the
    // readout shows nothing rather than a number that would be a lie.
    expect(regionArea(s, 'interior', 0)).toBe(0);
  });

  test('x²/16 − y²/9 = 1 — c = 5, e = 5/4', () => {
    const s = { kind: 'hyperbola' as const, a: 4, b: 3, cx: 0, cy: 0, rotateDeg: 0 as const };
    expect(focalDistance(s)).toBeCloseTo(5, 12);
    expect(eccentricity(s)).toBeCloseTo(1.25, 12);
    expect(latusRectumLength(s)).toBeCloseTo(4.5, 12);
  });

  test('a chord at x = 1 on r = 2 cuts 4π/3 − √3', () => {
    const s = { kind: 'circle' as const, a: 2, b: 2, cx: 0, cy: 0, rotateDeg: 0 as const };
    expect(regionArea(s, 'chord', 1)).toBeCloseTo((4 * Math.PI) / 3 - Math.sqrt(3), 10);
  });

  test('a chord that misses the circle cuts nothing', () => {
    const s = { kind: 'circle' as const, a: 2, b: 2, cx: 0, cy: 0, rotateDeg: 0 as const };
    expect(regionArea(s, 'chord', 2)).toBe(0);
    expect(regionArea(s, 'chord', 9)).toBe(0);
  });
});

/* ── 2. validate refuses what the board cannot draw ──────────────────────── */

describe('validate', () => {
  test('an ellipse with b > a is REFUSED, not silently swapped', () => {
    const r = validateConicPlot({ ...conicPlot.defaults, kind: 'ellipse', a: 3, b: 5 });
    expect(r.ok).toBe(false);
    expect(why({ ...conicPlot.defaults, kind: 'ellipse', a: 3, b: 5 })).toMatch(/semi-MAJOR/);
  });

  test('a view box that does not contain the conic is refused', () => {
    const r = validateConicPlot({
      ...conicPlot.defaults, kind: 'circle', a: 10,
      x_min: -1, x_max: 1, y_min: -1, y_max: 1,
    });
    expect(r.ok).toBe(false);
    expect(why({ ...conicPlot.defaults, kind: 'circle', a: 10,
                 x_min: -1, x_max: 1, y_min: -1, y_max: 1 })).toMatch(/view box holds only/);
  });

  test('marks that the kind does not have are refused', () => {
    for (const [kind, mark] of [['circle', 'foci'], ['circle', 'directrix'],
                                ['ellipse', 'asymptotes']] as const) {
      const r = validateConicPlot({ ...conicPlot.defaults, kind, a: 4, b: 3, show: [mark] });
      expect(r.ok).toBe(false);
    }
  });

  test('an arbitrary rotation is refused; the four quarter turns are not', () => {
    expect(validateConicPlot({ ...conicPlot.defaults, rotate_deg: 37 }).ok).toBe(false);
    for (const deg of [0, 90, 180, 270]) {
      expect(validateConicPlot({ ...conicPlot.defaults, rotate_deg: deg }).ok).toBe(true);
    }
  });

  test('more than MAX_MARKS is refused', () => {
    const r = validateConicPlot({
      ...conicPlot.defaults, kind: 'hyperbola', a: 4, b: 3,
      show: ['axes', 'vertices', 'foci', 'directrix', 'latus_rectum', 'asymptotes', 'axes'],
    });
    expect(r.ok).toBe(false);
  });

  test('the defaults are valid — a widget whose own defaults fail cannot ship', () => {
    expect(validateConicPlot(conicPlot.defaults).ok).toBe(true);
  });
});

/* ── 3. it draws, at every frame, for every kind ─────────────────────────── */

const CASES = {
  circle: { kind: 'circle', a: 4, b: 4, show: ['axes', 'vertices'], caption: 'x² + y² = 16' },
  ellipse: { kind: 'ellipse', a: 5, b: 3, show: ['axes', 'foci'], caption: 'x²/25 + y²/9 = 1' },
  parabola: { kind: 'parabola', a: 3, b: 3, show: ['axes', 'directrix', 'foci'], caption: 'y² = 12x' },
  hyperbola: { kind: 'hyperbola', a: 4, b: 3, show: ['axes', 'asymptotes'], caption: 'x²/16 − y²/9 = 1' },
} as const;

describe.each(Object.entries(CASES))('%s', (name, base) => {
  test('validates and renders a path at all five frames', () => {
    const params = accept({ ...conicPlot.defaults, ...base, region: null, shade: false });
    for (const [w, h] of FRAMES) {
      const json = JSON.stringify(renderWidgetTreeAt(conicPlot, params, {}, w, h));
      // A `d` with real numbers in it. "renders nothing" is the failure the
      // render harness exists to catch, and an empty path passes a naive
      // "did it render" check.
      expect(json).toMatch(/"d":"M-?\d/);
      expect(json.length).toBeGreaterThan(200);
    }
  });
});

test('a hyperbola draws BOTH branches, not one joined across the gap', () => {
  const params = accept({ ...conicPlot.defaults, kind: 'hyperbola', a: 4, b: 3,
                          show: ['axes'], region: null, shade: false });
  const json = JSON.stringify(renderWidgetTreeAt(conicPlot, params, {}, REF_W, REF_H));
  expect((json.match(/"d":"M/g) ?? []).length).toBeGreaterThanOrEqual(2);
});

/* ── 4. the module contract ──────────────────────────────────────────────── */

test('at most four animatable params, and none of them changes what the picture IS', () => {
  expect(conicPlot.animatable.length).toBeLessThanOrEqual(4);
  for (const k of ['kind', 'region', 'show']) {
    expect(conicPlot.animatable).not.toContain(k);
  }
});

test('derived and computeDerived agree — neither may drift from the other', () => {
  const got = Object.keys(conicPlot.computeDerived(conicPlot.defaults)).sort();
  expect(got).toEqual([...conicPlot.derived].sort());
});

test('every derived key has an alias the direction lint can match', () => {
  for (const k of conicPlot.derived) {
    expect(conicPlot.derivedAliases[k]?.length ?? 0).toBeGreaterThan(0);
  }
});

/* ── 5. the payloads the SERVER actually authored ────────────────────────────
 * Hand-written fixtures test the widget against my idea of a payload. These
 * five came out of `planner._attach_widget_payload` for maths 12 ch8
 * "Area of Regions Bounded by Circles and Ellipses" — the chapter row that
 * routes to conic_plot — and they are the only fixtures here that can catch a
 * spec which describes params the widget does not have. Regenerate them by
 * re-running the authoring probe; do not hand-edit.
 */
import AUTHORED from './authored-payloads.json';

describe.each(Object.entries(AUTHORED as Record<string, { widget: string; params: unknown }>))(
  'authored %s', (_name, entry) => {
    test('is a conic_plot payload that validates and draws at all five frames', () => {
      expect(entry.widget).toBe('conic_plot');
      const params = accept(entry.params);
      for (const [w, h] of FRAMES) {
        const json = JSON.stringify(renderWidgetTreeAt(conicPlot, params, {}, w, h));
        expect(json).toMatch(/"d":"M-?\d/);
      }
    });
  }
);
