/**
 * region_plot — two boundaries on one set of axes, and the region between.
 *
 * No React, no worklets. This file answers three questions the widget draws:
 * where the boundaries cross, which y is on top between them, and what the
 * region's area actually is.
 *
 * `xy_plot` is v = f(u), one value per abscissa, and says so: "CANNOT:
 * circles, ellipses, closed 2-D regions". `conic_plot` draws one conic at a
 * time and cannot overlay a second curve. Five Application of Integrals
 * objectives sit exactly in that seam, and three rounds of spec-wording moved
 * the subtopic 0/8 → 0/8 → 0/8. Wording was never the blocker.
 *
 * BOUNDARIES ARE UPPER/LOWER FUNCTIONS OF x, even for a circle: the widget
 * draws the region between an upper boundary and a lower one over a shared
 * interval, so a full circle is the pair (+√(a²−x²), −√(a²−x²)). That is the
 * same decomposition the integral uses, which is the point — the picture and
 * the integral must be the same object or the picture teaches the wrong
 * method.
 *
 * REFERENCE VALUES, recomputed by hand before this file was written:
 *
 *   circle a=1, full                  area = π          = 3.14159265
 *   quarter circle a=1, x∈[0,1]       area = π/4        = 0.78539816
 *   |x|+|y| ≤ 1                       area = 2          (diagonal 2 × 2 /2)
 *   y = x² and y = x, x∈[0,1]         area = 1/6        = 0.16666667
 *   circle x²+y²=8 and parabola y²=4x meet at x = 2, y = ±2√2·… → x=2, y=2
 *                                     (8 = x²+4x ⇒ x=2); the split abscissa
 *                                     the "splitting" objective names.
 *
 * The Simpson integration below is a SECOND route to those areas, not the
 * primary one: the widget draws from the boundary functions directly, and
 * `area()` exists so a test can check the drawn region against a number
 * reached a different way.
 */

export type BoundaryKind =
  | 'line'          // y = a·x + c
  | 'parabola'      // y = a·x² + b·x + c
  | 'circle_upper'  // y = +√(r² − x²)
  | 'circle_lower'  // y = −√(r² − x²)
  | 'sqrt'          // y = a·√x            (the y² = 4ax branch)
  | 'abs';          // y = a·|x| + c       (the modulus disguise)

export const BOUNDARY_KINDS: readonly BoundaryKind[] = [
  'line', 'parabola', 'circle_upper', 'circle_lower', 'sqrt', 'abs',
];

export interface Boundary {
  readonly kind: BoundaryKind;
  readonly a: number;
  readonly b: number;
  readonly c: number;
  /** Circle radius, for the two circle kinds. Ignored otherwise. */
  readonly r: number;
}

/**
 * y at x, or NaN where the boundary is not defined there.
 *
 * NaN rather than 0 deliberately: a circle has no y outside |x| ≤ r and a
 * square root has none below 0, and returning 0 would draw a boundary
 * through the origin that does not exist. Every caller filters.
 */
export function yAt(bd: Boundary, x: number): number {
  switch (bd.kind) {
    case 'line': return bd.a * x + bd.c;
    case 'parabola': return bd.a * x * x + bd.b * x + bd.c;
    case 'abs': return bd.a * Math.abs(x) + bd.c;
    case 'sqrt': return x < 0 ? NaN : bd.a * Math.sqrt(x) + bd.c;
    case 'circle_upper': {
      const v = bd.r * bd.r - x * x;
      return v < 0 ? NaN : Math.sqrt(v);
    }
    case 'circle_lower': {
      const v = bd.r * bd.r - x * x;
      return v < 0 ? NaN : -Math.sqrt(v);
    }
    default: return NaN;
  }
}

/** Where the boundary stops existing — the natural domain, clipped to [lo,hi]. */
export function domain(bd: Boundary, lo: number, hi: number): [number, number] {
  if (bd.kind === 'circle_upper' || bd.kind === 'circle_lower') {
    return [Math.max(lo, -bd.r), Math.min(hi, bd.r)];
  }
  if (bd.kind === 'sqrt') return [Math.max(lo, 0), hi];
  return [lo, hi];
}

/**
 * The x where two boundaries cross, found by bisection on their difference.
 *
 * Bisection rather than solving each pair in closed form: there are six kinds,
 * so fifteen pairs, and fifteen closed forms is fifteen chances to be wrong
 * about one. Bisection is one routine whose correctness does not depend on
 * which pair it is given — and the tests check it against the closed forms
 * that ARE known, which is the independent route.
 *
 * TOUCHES COUNT AS CROSSINGS. The first version looked only for sign changes,
 * which finds every crossing and misses every touch — and a touch is a split.
 * See the second loop.
 */
export function crossings(up: Boundary, low: Boundary,
                          lo: number, hi: number, steps = 400): number[] {
  const f = (x: number) => yAt(up, x) - yAt(low, x);
  const out: number[] = [];
  const xs: number[] = [];
  const vs: number[] = [];
  for (let i = 0; i <= steps; i++) {
    const x = lo + ((hi - lo) * i) / steps;
    const v = f(x);
    if (Number.isFinite(v)) { xs.push(x); vs.push(v); }
  }
  if (xs.length < 3) return out;

  // The scale the tolerance is relative to. A difference is "zero" when it is
  // a millionth of how far the two boundaries get apart anywhere in the
  // window — absolute tolerances are meaningless here, where one board is in
  // metres and the next in units of a.
  const scale = Math.max(...vs.map(Math.abs)) || 1;

  for (let i = 1; i < xs.length; i++) {
    const a0 = vs[i - 1];
    const b0 = vs[i];
    if (a0 !== 0 && Math.sign(b0) !== Math.sign(a0)) {
      let a = xs[i - 1];
      let b = xs[i];
      for (let k = 0; k < 60; k++) {
        const m = (a + b) / 2;
        if (Math.sign(f(m)) === Math.sign(f(a))) a = m;
        else b = m;
      }
      out.push((a + b) / 2);
    }
  }

  // A SPLIT WHERE THE BOUNDARIES TOUCH WITHOUT CROSSING.
  //
  // The sign-change scan above finds every crossing and misses every TOUCH,
  // and a touch is a split too. |x| against y = 0 is the case that found
  // this: the difference is zero at the origin and positive either side, so
  // nothing changed sign, no split line was drawn — and that split is the
  // whole of "find the area under a modulus curve by splitting the interval
  // at points where the inside expression changes sign".
  //
  // A touch is a local minimum of |difference| that reaches zero. Ternary
  // refinement rather than bisection, because bisection needs a sign change
  // and this is the case that has none.
  for (let i = 1; i < xs.length - 1; i++) {
    const prev = Math.abs(vs[i - 1]);
    const here = Math.abs(vs[i]);
    const next = Math.abs(vs[i + 1]);
    if (!(here <= prev && here <= next)) continue;
    let a = xs[i - 1];
    let b = xs[i + 1];
    for (let k = 0; k < 80; k++) {
      const m1 = a + (b - a) / 3;
      const m2 = b - (b - a) / 3;
      if (Math.abs(f(m1)) < Math.abs(f(m2))) b = m2;
      else a = m1;
    }
    const x = (a + b) / 2;
    if (Math.abs(f(x)) > 1e-6 * scale) continue;
    if (out.some((c) => Math.abs(c - x) < (hi - lo) / steps)) continue;
    out.push(x);
  }

  return out.sort((p, q) => p - q);
}

/**
 * Area between the two boundaries over [lo, hi], by Simpson's rule.
 *
 * A SECOND ROUTE to a number the widget already implies, so a test can check
 * the drawn region against something that is not the drawing. Simpson because
 * it is exact for the quadratics that make up most of these regions and
 * converges fast on the circular ones.
 */
export function area(up: Boundary, low: Boundary,
                     lo: number, hi: number, n = 2000): number {
  const m = n % 2 === 0 ? n : n + 1;
  const h = (hi - lo) / m;
  const g = (x: number) => {
    const d = yAt(up, x) - yAt(low, x);
    return Number.isFinite(d) ? Math.max(0, d) : 0;
  };
  let sum = g(lo) + g(hi);
  for (let i = 1; i < m; i++) {
    sum += g(lo + i * h) * (i % 2 === 0 ? 2 : 4);
  }
  return (h / 3) * sum;
}
