/**
 * The geometry of one conic, in maths rather than pixels.
 *
 * Separate from index.tsx for the reason `plot-math.ts` and `scheme-graph.ts`
 * are: the arithmetic here is testable without a renderer, and every reference
 * value below was derived from NCERT before being compared to any output of
 * this file.
 *
 * WHY A SEPARATE WIDGET AND NOT A `curve` KIND ON xy_plot.
 * `xy_plot`'s whole geometry is v = f(u): one value per integration
 * coordinate, shaded by a difference of antiderivatives. A circle has TWO
 * values of y for most x, and the area between a chord and an arc is not the
 * difference of two functions over an interval. Adding `circle` there would
 * mean a second geometry engine inside a widget whose header says it has one.
 *
 * REFERENCE RESULTS, each from the book first:
 *   x² + y² = 16                 area 16π; e = 0; no directrix
 *   x²/25 + y²/9 = 1             a=5 b=3 → c=4, e=4/5, latus rectum 2b²/a=18/5
 *   y² = 12x                     4a=12 → a=3, focus (3,0), directrix x=-3,
 *                                latus rectum 4a=12, e=1
 *   x²/16 − y²/9 = 1             a=4 b=3 → c=5, e=5/4, asymptotes y=±3x/4
 *   circle r=2, chord at x=1     segment area = r²·acos(d/r) − d·√(r²−d²)
 *                                = 4·acos(0.5) − 1·√3 = 4π/3 − √3
 */

export type ConicKind = 'circle' | 'ellipse' | 'parabola' | 'hyperbola';
export type ConicRegion = 'interior' | 'chord' | 'with_line';
export type ConicMark =
  | 'foci' | 'directrix' | 'axes' | 'vertices' | 'latus_rectum' | 'asymptotes';

export interface ConicShape {
  kind: ConicKind;
  a: number;
  b: number;
  cx: number;
  cy: number;
  rotateDeg: 0 | 90 | 180 | 270;
}

/** c, the focal distance from centre (or from vertex, for a parabola). */
export function focalDistance(s: ConicShape): number {
  switch (s.kind) {
    case 'circle': return 0;
    case 'ellipse': return Math.sqrt(Math.max(0, s.a * s.a - s.b * s.b));
    case 'parabola': return s.a;                       // y² = 4ax → focus at a
    case 'hyperbola': return Math.sqrt(s.a * s.a + s.b * s.b);
  }
}

export function eccentricity(s: ConicShape): number {
  switch (s.kind) {
    case 'circle': return 0;
    case 'ellipse': return s.a === 0 ? 0 : focalDistance(s) / s.a;
    case 'parabola': return 1;
    case 'hyperbola': return s.a === 0 ? 0 : focalDistance(s) / s.a;
  }
}

/** Length of the latus rectum. 2b²/a for the central conics, 4a for a parabola. */
export function latusRectumLength(s: ConicShape): number {
  if (s.kind === 'circle') return 2 * s.a;             // any chord through the centre
  if (s.kind === 'parabola') return 4 * s.a;
  return s.a === 0 ? 0 : (2 * s.b * s.b) / s.a;
}

/**
 * Area of the region named, or 0 where the region is unbounded.
 *
 * A hyperbola's interior and a parabola's interior are both unbounded, and
 * returning 0 for them is a deliberate statement rather than a gap: the
 * readout shows nothing instead of a number that would be a lie.
 */
export function regionArea(s: ConicShape, region: ConicRegion | null,
                           lineC: number): number {
  if (!region) return 0;
  if (region === 'interior') {
    if (s.kind === 'circle') return Math.PI * s.a * s.a;
    if (s.kind === 'ellipse') return Math.PI * s.a * s.b;
    return 0;                                          // unbounded
  }
  if (region === 'chord' && s.kind === 'circle') {
    // Circular segment cut off by the vertical chord x = lineC.
    const r = s.a;
    const d = Math.abs(lineC - s.cx);
    if (d >= r) return 0;                              // the chord misses
    return r * r * Math.acos(d / r) - d * Math.sqrt(r * r - d * d);
  }
  if (region === 'chord' && s.kind === 'ellipse') {
    // The same segment on the unit circle, scaled by b/a in y. An ellipse is
    // an affine image of its auxiliary circle, so the segment area scales by
    // exactly that factor — no second integral.
    const r = s.a;
    const d = Math.abs(lineC - s.cx);
    if (d >= r) return 0;
    const circleSeg = r * r * Math.acos(d / r) - d * Math.sqrt(r * r - d * d);
    return circleSeg * (s.b / s.a);
  }
  return 0;
}

/** Points on the conic, as (x, y) in MATHS coordinates, for the renderer. */
export function conicPath(s: ConicShape, samples = 180): Array<[number, number]> {
  const pts: Array<[number, number]> = [];
  const rot = (s.rotateDeg * Math.PI) / 180;
  const place = (x: number, y: number): [number, number] => {
    const cos = Math.cos(rot), sin = Math.sin(rot);
    return [s.cx + x * cos - y * sin, s.cy + x * sin + y * cos];
  };
  if (s.kind === 'circle' || s.kind === 'ellipse') {
    const rx = s.a, ry = s.kind === 'circle' ? s.a : s.b;
    for (let i = 0; i <= samples; i += 1) {
      const t = (i / samples) * 2 * Math.PI;
      pts.push(place(rx * Math.cos(t), ry * Math.sin(t)));
    }
    return pts;
  }
  if (s.kind === 'parabola') {
    // y² = 4ax, swept in y so both branches come out in one pass.
    const yMax = 4 * Math.max(s.a, 1);
    for (let i = 0; i <= samples; i += 1) {
      const y = -yMax + (2 * yMax * i) / samples;
      pts.push(place((y * y) / (4 * s.a), y));
    }
    return pts;
  }
  // hyperbola: the right branch only. The left is its mirror and the renderer
  // draws it as a second path — one array per branch keeps the SVG `d` honest
  // about there being two curves, rather than joining them across the gap.
  const tMax = 1.6;
  for (let i = 0; i <= samples; i += 1) {
    const t = -tMax + (2 * tMax * i) / samples;
    pts.push(place(s.a * Math.cosh(t), s.b * Math.sinh(t)));
  }
  return pts;
}

/** The mirrored branch of a hyperbola, or null for every other kind. */
export function secondBranch(s: ConicShape, samples = 180):
    Array<[number, number]> | null {
  if (s.kind !== 'hyperbola') return null;
  return conicPath({ ...s, cx: 0, cy: 0 }, samples)
    .map(([x, y]) => [s.cx - (x), s.cy + y] as [number, number]);
}

/** A view box that contains the conic with margin, when none was given. */
export function autoView(s: ConicShape): { xMin: number; xMax: number;
                                           yMin: number; yMax: number } {
  const r = s.kind === 'parabola' ? 4 * Math.max(s.a, 1)
          : Math.max(s.a, s.b) * (s.kind === 'hyperbola' ? 2.6 : 1.35);
  return { xMin: s.cx - r, xMax: s.cx + r, yMin: s.cy - r, yMax: s.cy + r };
}
