/**
 * lines_planes_3d — closed-form 3-D affine geometry, the orthographic camera,
 * and the board layout. No React, no rendering.
 *
 * WHAT THIS WIDGET IS FOR. `content/concept-archetypes.csv` carries 17 rows at
 * `archetype_v2 == 'gap_3d_lines_planes'`. Twelve of them want ONE picture:
 * a point, a line r = a + λb, a plane n·r = d, and the perpendicular
 * relationships between them. This module is the maths behind that picture.
 * The other five want a cuboid, a tetrahedron, a planar parallelogram, a
 * 1-D division line and an octant reference figure — see this directory's
 * sibling note in the scoping report; they are NOT this widget.
 *
 * EVERY NUMBER IS CLOSED-FORM. Nothing here iterates, samples or solves
 * numerically. The formulas are the ones the Class 12 Ch 11 master reference
 * derives, and they are cross-checked in __tests__/independent-routes.test.ts
 * by DIFFERENT derivations — Heron's formula for the angle, volume-over-base
 * for the point–plane distance, a dense grid minimisation for the skew-line
 * distance, sign-change bisection for the line–plane intersection. A check
 * that rearranges the same equation catches nothing (CLAUDE.md §6).
 *
 * THE PROJECTION IS A PARAMETER, NOT A CONSTANT, AND THAT IS FORCED. A 3-D
 * figure on a 2-D board is a projection choice, and `lib/widgets/CLAUDE.md`
 * §"Exactly one WebView" forbids a second WebView, so a rotatable view is out
 * — this is SVG and the projection is static. But a single static projection
 * has a KERNEL: any line whose direction is parallel to the view direction
 * projects to a single point, and two distinct lines can project onto each
 * other. So `view` names one of three orthographic cameras with genuinely
 * different view directions, and `fitProblems` REFUSES a payload that
 * collapses under the chosen one, naming the views that would work.
 */

/* --------------------------------------------------------------- vectors */

export type Vec3 = readonly [number, number, number];

export const v3 = (x: number, y: number, z: number): Vec3 => [x, y, z];
export const add = (a: Vec3, b: Vec3): Vec3 => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
export const sub = (a: Vec3, b: Vec3): Vec3 => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
export const mul = (a: Vec3, k: number): Vec3 => [a[0] * k, a[1] * k, a[2] * k];
export const dot = (a: Vec3, b: Vec3): number => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
export const cross = (a: Vec3, b: Vec3): Vec3 => [
  a[1] * b[2] - a[2] * b[1],
  a[2] * b[0] - a[0] * b[2],
  a[0] * b[1] - a[1] * b[0],
];
export const len = (a: Vec3): number => Math.sqrt(dot(a, a));
export function unit(a: Vec3): Vec3 {
  const n = len(a);
  return n === 0 ? [0, 0, 0] : [a[0] / n, a[1] / n, a[2] / n];
}

/**
 * Relative tolerance for "this vector is zero" / "these are parallel".
 *
 * RELATIVE, not absolute: direction ratios (1e-4, 0, 0) name a perfectly good
 * line, and an absolute epsilon would call it degenerate. Every use below
 * divides the candidate magnitude by the magnitudes it came from first.
 */
export const EPS = 1e-9;

/* ---------------------------------------------------------------- camera */

/**
 * A right-handed orthographic camera, azimuth about +z then elevation.
 *
 *   right = (-sin θ,  cos θ, 0)
 *   up    = (-cos θ sin φ, -sin θ sin φ, cos φ)
 *   view  = ( cos θ cos φ,  sin θ cos φ, sin φ)      <- the KERNEL direction
 *
 * `up` has zero x- and y-tilt in the z component, so the world z-axis always
 * projects straight up the board — the orientation every textbook figure in
 * this chapter uses, and the reason a student can read "height" off the page.
 */
export interface Camera {
  readonly right: Vec3;
  readonly up: Vec3;
  readonly view: Vec3;
}

export const VIEW_IDS = ['standard', 'swing', 'high'] as const;
export type ViewId = (typeof VIEW_IDS)[number];

/**
 * Three cameras whose view directions are LINEARLY INDEPENDENT, which is a
 * stronger property than "different" and is what makes "try another view" a
 * guarantee instead of a hope.
 *
 *   standard  az 25  el 20   ->  (0.852, 0.397, 0.342)
 *   swing     az 65  el 18   ->  (0.402, 0.862, 0.309)
 *   high      az 45  el 55   ->  (0.406, 0.406, 0.819)
 *
 *   det [ standard; swing; high ] = 0.350
 *
 * The consequence: a plane is edge-on in view i exactly when its normal is
 * perpendicular to view direction i, so a plane edge-on in TWO views has a
 * normal parallel to their cross product — and the triple product with the
 * third view is the determinant above, which is not zero. So no plane is
 * edge-on in all three, and no line direction is parallel to more than one
 * view direction. There is ALWAYS a working view, and `fitProblems` names it
 * by checking rather than by assuming.
 *
 * THIS WAS NOT TRUE OF THE FIRST VERSION. `high` originally shared
 * `standard`'s azimuth of 25°, which put both view directions in one vertical
 * plane; any plane containing that plane was edge-on in both, and only
 * `swing` was a way out. The first draft of the edge-on test asserted `high`
 * fixed it, and failed — which is the whole reason this note exists.
 */
const VIEW_ANGLES: Record<ViewId, { az: number; el: number }> = {
  standard: { az: 25, el: 20 },
  swing: { az: 65, el: 18 },
  high: { az: 45, el: 55 },
};

export function cameraFor(id: ViewId): Camera {
  const { az, el } = VIEW_ANGLES[id];
  const a = (az * Math.PI) / 180;
  const e = (el * Math.PI) / 180;
  return {
    right: [-Math.sin(a), Math.cos(a), 0],
    up: [-Math.cos(a) * Math.sin(e), -Math.sin(a) * Math.sin(e), Math.cos(e)],
    view: [Math.cos(a) * Math.cos(e), Math.sin(a) * Math.cos(e), Math.sin(e)],
  };
}

/** World point -> camera plane, in WORLD units. Screen scaling happens later. */
export function project(p: Vec3, cam: Camera): { u: number; v: number } {
  return { u: dot(p, cam.right), v: dot(p, cam.up) };
}

/* ------------------------------------------------------- closed-form maths */

/**
 * Foot of the perpendicular from P to the line r = a + λb.
 *
 *   λ0 = (AP·b)/|b|²      F = a + λ0 b      PF = |AP × b| / |b|
 *
 * Master reference, Class 12 Ch 11 Subtopic 04, Theorem 1. The distance
 * divides by ONE power of |b|, not two — the cross product already carries
 * one, which is that subtopic's named speed trap.
 */
export function footOnLine(p: Vec3, a: Vec3, b: Vec3): { lambda: number; foot: Vec3; dist: number } {
  const ap = sub(p, a);
  const bb = dot(b, b);
  const lambda = bb === 0 ? 0 : dot(ap, b) / bb;
  const foot = add(a, mul(b, lambda));
  const dist = len(cross(ap, b)) / Math.sqrt(bb);
  return { lambda, foot, dist };
}

/**
 * Foot, distance and image for the plane n·r = d.
 *
 *   t = (n·P − d)/|n|²     F = P − t n     dist = |n·P − d|/|n|     P' = P − 2t n
 *
 * Master reference Subtopic 03. `t` is SIGNED — which side of the plane P is
 * on is information the picture uses, so it is returned rather than absorbed
 * into the modulus.
 */
export function footOnPlane(
  p: Vec3,
  n: Vec3,
  d: number
): { t: number; foot: Vec3; image: Vec3; dist: number } {
  const nn = dot(n, n);
  const t = nn === 0 ? 0 : (dot(n, p) - d) / nn;
  return {
    t,
    foot: sub(p, mul(n, t)),
    image: sub(p, mul(n, 2 * t)),
    dist: Math.abs(dot(n, p) - d) / Math.sqrt(nn),
  };
}

/**
 * The common perpendicular of two skew lines: both feet, and its length.
 *
 * The length is the master reference's Theorem 2,
 * d = |(a2−a1)·(b1×b2)| / |b1×b2|, i.e. the parallelepiped's volume over its
 * base area. The FEET need the 2x2 normal-equation solve:
 *
 *   w0 = a1 − a2,  A = b1·b1,  B = b1·b2,  C = b2·b2,  D = b1·w0,  E = b2·w0
 *   Δ = AC − B²   (zero exactly when the lines are parallel)
 *   λ = (B E − C D)/Δ      μ = (A E − B D)/Δ
 *
 * `ok` is false for parallel lines: Δ = 0, there is no unique common
 * perpendicular, and the gap is constant everywhere. That case has its own
 * formula (|b × (a2−a1)|/|b|) and its own picture, and this widget refuses it
 * rather than drawing one perpendicular out of the infinitely many.
 */
export function skewBridge(
  a1: Vec3,
  b1: Vec3,
  a2: Vec3,
  b2: Vec3
): { ok: boolean; f1: Vec3; f2: Vec3; dist: number; lambda: number; mu: number } {
  const w0 = sub(a1, a2);
  const A = dot(b1, b1);
  const B = dot(b1, b2);
  const C = dot(b2, b2);
  const D = dot(b1, w0);
  const E = dot(b2, w0);
  const det = A * C - B * B;
  if (det <= EPS * A * C) {
    return { ok: false, f1: a1, f2: a2, dist: 0, lambda: 0, mu: 0 };
  }
  const lambda = (B * E - C * D) / det;
  const mu = (A * E - B * D) / det;
  const f1 = add(a1, mul(b1, lambda));
  const f2 = add(a2, mul(b2, mu));
  const cr = cross(b1, b2);
  return { ok: true, f1, f2, dist: Math.abs(dot(sub(a2, a1), cr)) / len(cr), lambda, mu };
}

/**
 * Where the line r = a + λb meets the plane n·r = d.
 *
 *   K = n·b.  K = 0 means the line never crosses. Then n·a = d says it LIES
 *   IN the plane and n·a ≠ d says it runs strictly parallel — the master
 *   reference's "decisive second test", and the trap it names is stopping at
 *   K = 0 and calling the line contained.
 */
export function lineMeetsPlane(
  a: Vec3,
  b: Vec3,
  n: Vec3,
  d: number
): { kind: 'crosses' | 'in-plane' | 'parallel'; lambda: number; point: Vec3 } {
  const K = dot(n, b);
  if (Math.abs(K) <= EPS * len(n) * len(b)) {
    const kind = Math.abs(dot(n, a) - d) <= EPS * (Math.abs(d) + len(n) * len(a) + 1)
      ? 'in-plane'
      : 'parallel';
    return { kind, lambda: 0, point: a };
  }
  const lambda = (d - dot(n, a)) / K;
  return { kind: 'crosses', lambda, point: add(a, mul(b, lambda)) };
}

/** Acute angle in degrees between two directions. Always in [0, 90]. */
export function acuteAngleDeg(u: Vec3, w: Vec3): number {
  const den = len(u) * len(w);
  if (den === 0) return 0;
  const c = Math.min(1, Math.abs(dot(u, w)) / den);
  return (Math.acos(c) * 180) / Math.PI;
}

/** Angle between a line of direction b and a plane of normal n: sin φ = |b·n|/(|b||n|). */
export function lineePlaneAngleDeg(b: Vec3, n: Vec3): number {
  const den = len(b) * len(n);
  if (den === 0) return 0;
  const s = Math.min(1, Math.abs(dot(b, n)) / den);
  return (Math.asin(s) * 180) / Math.PI;
}

/**
 * A point on the crease of two non-parallel planes, chosen as the point of
 * the crease NEAREST THE ORIGIN — the standard
 *
 *   p0 = [ (d1 C − d2 B) n1 + (d2 A − d1 B) n2 ] / (A C − B²),
 *   A = n1·n1, B = n1·n2, C = n2·n2
 *
 * which lies in both planes by construction. Choosing the nearest point (not
 * an arbitrary one) keeps the drawn crease centred on the picture instead of
 * wandering off with whatever parameterisation happened to be used.
 */
export function planeCrease(
  n1: Vec3,
  d1: number,
  n2: Vec3,
  d2: number
): { ok: boolean; point: Vec3; dir: Vec3 } {
  const A = dot(n1, n1);
  const B = dot(n1, n2);
  const C = dot(n2, n2);
  const det = A * C - B * B;
  if (det <= EPS * A * C) return { ok: false, point: [0, 0, 0], dir: [0, 0, 0] };
  const k1 = (d1 * C - d2 * B) / det;
  const k2 = (d2 * A - d1 * B) / det;
  return { ok: true, point: add(mul(n1, k1), mul(n2, k2)), dir: unit(cross(n1, n2)) };
}

/**
 * Two orthonormal in-plane directions for a plane of normal n.
 *
 * The seed axis is the one LEAST aligned with n, so `cross(n, seed)` can
 * never be near-zero — picking a fixed seed would collapse for a plane whose
 * normal happens to be that axis, which is exactly the xy/yz/zx coordinate
 * planes the Class 11 rows are about.
 */
export function planeBasis(n: Vec3): { e1: Vec3; e2: Vec3 } {
  const ax = Math.abs(n[0]);
  const ay = Math.abs(n[1]);
  const az = Math.abs(n[2]);
  const seed: Vec3 = ax <= ay && ax <= az ? [1, 0, 0] : ay <= az ? [0, 1, 0] : [0, 0, 1];
  const e1 = unit(cross(n, seed));
  const e2 = unit(cross(n, e1));
  return { e1, e2 };
}

/* ------------------------------------------------------------------ params */

export const MODES = ['two_lines', 'point_line', 'point_plane', 'line_plane', 'two_planes'] as const;
export type Mode = (typeof MODES)[number];

export interface LineSpec {
  at: Vec3;
  dir: Vec3;
}
export interface PlaneSpec {
  normal: Vec3;
  /** The plane is n·r = d. NOT ax+by+cz+d=0 — the sign convention is the
   *  master reference's (r−a)·n = 0 expanded, i.e. r·n = a·n = d. */
  d: number;
}

export interface LinesPlanes3dParams {
  mode: Mode;
  view: ViewId;
  point: Vec3;
  line1: LineSpec;
  line2: LineSpec;
  plane1: PlaneSpec;
  plane2: PlaneSpec;
  show_image: boolean;
  show_axes: boolean;
  caption: string;
}

/** Which slots each mode reads. Everything else is defaulted and NOT drawn. */
export const SLOTS: Record<Mode, readonly (keyof LinesPlanes3dParams)[]> = {
  two_lines: ['line1', 'line2'],
  point_line: ['point', 'line1'],
  point_plane: ['point', 'plane1'],
  line_plane: ['line1', 'plane1'],
  two_planes: ['plane1', 'plane2'],
};

export const MAX_CAPTION_CHARS = 72;
/** Coordinates and direction ratios are bounded so the readout stays readable
 *  and the fit cannot be handed 1e300. The picture itself is scale-free — the
 *  camera auto-fits — so this bound costs nothing geometrically. */
export const COORD_MAX = 1000;

/**
 * How far a plane may sit from the origin: |d| / |n|, not |d|.
 *
 * The plane is n·r = d, and (n, d) and (2n, 2d) are THE SAME PLANE — so a
 * bound on `d` alone bounds nothing, it just bounds one arbitrary scaling of
 * the normal. |d|/|n| is the distance from the origin to the plane's nearest
 * point, which is the quantity that has to be comparable to COORD_MAX for the
 * figure to be a figure.
 *
 * The first version bounded |d| ≤ COORD_MAX², which admitted a plane a
 * million units away; a line nearly parallel to it then met it at a point
 * with seven-digit coordinates, and that point is DERIVED, so no bound on the
 * inputs caught it. Both halves are now bounded: this one on the input, and
 * `MAX_DERIVED_COORD` on the result.
 */
export const PLANE_OFFSET_MAX = COORD_MAX;

/**
 * A derived point — a foot, an image, a crossing — beyond this is refused.
 *
 * Feet and images are bounded by their inputs (a foot lies in the span of the
 * things it is dropped onto), but the point where a line meets a plane is NOT:
 * λ = (d − n·a)/(n·b), and a small n·b sends it arbitrarily far. That is not a
 * corner of the schema, it is the generic near-parallel case, and the figure
 * it produces is a plane and a line meeting somewhere off in the distance,
 * with the interesting part of the picture compressed to nothing.
 */
export const MAX_DERIVED_COORD = COORD_MAX * 10;

/* -------------------------------------------------------- board constants */

/** The binding board (CLAUDE.md §6). Every fit assertion is measured here. */
export const REF_W = 343;
export const REF_H = 236;

/** A drawn segment shorter than this is not a segment a student can read. */
export const MIN_SEG_PX = 14;
/** A plane seen edge-on projects to a sliver. Below this it is not a plane. */
export const MIN_PLANE_AREA_PX = 700;
/**
 * The DIAGONAL of the objects' own projected box, at the binding board.
 *
 * Distinct from verify-render's ink-coverage assertion, which measures every
 * drawn element including the coordinate axes. A figure whose objects sit far
 * from the origin gets axes an order of magnitude longer than itself; the
 * coverage assertion then passes on the AXES while the actual geometry is a
 * few pixels wide — a pass for the wrong reason, exactly the shape of the
 * always-mounted quad that reported 93.6% against 68.9% actual. This measures
 * only the objects.
 */
export const MIN_OBJECT_SPAN_PX = 70;

/**
 * How far apart the two arms of a dihedral must be, at the binding board.
 *
 * `two_planes` draws two faces meeting along a crease and one arm in each,
 * perpendicular to the crease; θ is the angle between those arms. As θ → 0
 * the two faces come to lie ON TOP OF EACH OTHER — which is precisely the
 * reason the COINCIDENT refusal gives for refusing coincident planes, so
 * admitting a 0.001° pair and drawing it is that refusal contradicting itself.
 * There was no floor at all: the parallel test is |n1×n2| ≤ 1e-9·|n1||n2|,
 * about 0.0001°, so `tilt 0.001` was admitted, printed "θ 0.1°" and drew two
 * arms 0.08° apart. Found by an independent verifier.
 *
 * 10px is a little under four EMPHASIS_STROKE widths (2.6), i.e. the point at
 * which two strokes read as two strokes rather than one thick one.
 *
 * WHAT ANGLE THAT CORRESPONDS TO, at 343x236: the faces span about
 * 2·half by 1.44·half, so the fit scale is at most 175.76/(1.44·half) and an
 * arm of 0.55·half is at most 0.55 × 175.76 / 1.44 = 67.1px. The tips are
 * 2·arm·sin(θ/2) apart, so the floor bites at
 * sin(θ/2) = 10/134.2 → θ ≈ 8.6°. Below that no camera and no board size
 * helps, because the ratio is fixed by the geometry.
 */
export const MIN_ARM_SEPARATION_PX = 10;

/**
 * The angle at which `MIN_ARM_SEPARATION_PX` becomes unsatisfiable, from the
 * arithmetic in its own comment. Not an independent threshold — it exists so
 * the ERROR can name the real cause ("these two planes are within 8.6° of
 * parallel") instead of quoting a pixel count nobody can act on.
 */
export const MIN_DIHEDRAL_DEG = 8.6;

/**
 * Ink coverage — verify-render.mjs's assertion 2, asserted here so the schema
 * cannot admit what the gate rejects.
 *
 * The gate errors below 0.05 and warns below 0.20. This is the ERROR floor
 * plus a margin, not the warn threshold: a warn is not an incorrect diagram,
 * and refusing every payload that merely warns would throw away most of the
 * chapter (see the aspect-ratio note in the render harness).
 *
 * THE THREE BOARDS ALL HAVE TO BE CHECKED, and this is the one assertion in
 * this widget for which the SMALLEST board is not the binding one. Every other
 * floor here is a fixed number of device points against a shrinking frame, so
 * 343x236 binds by construction — which is what CLAUDE.md means by "measure
 * the new bound at the SMALLEST board". Coverage is not that shape: it is a
 * RATIO, and its worst case is wherever the scene's projected aspect disagrees
 * most with the board's. A flat, wide scene fills 343x236 (1.45:1) and leaves
 * most of 900x430 (2.09:1) empty. That is not hypothetical — it is the payload
 * an independent verifier found, admitted by validate() and failing the gate
 * at 900x430 only.
 */
export const MIN_COVERAGE = 0.07;

/**
 * The readout's VALUE must survive the smallest board intact.
 *
 * `chrome.fitReadout` budgets `maxChars(343 − 2·PAD_SIDE, 14, latin)` =
 * floor(319 / (14 × 0.58)) = 39 code units, and gives the caption's characters
 * away first. If the value alone exceeds 39 it is cut at a TERM boundary, so a
 * whole term disappears — and a figure that draws and labels a point X while
 * the readout has silently stopped naming it is a diagram disagreeing with
 * itself.
 *
 * This widget's readout carries no units (only coordinates and degrees), so
 * the `τ 100` / `τ 100 ms` class of defect cannot arise here — but a dropped
 * `X (…)` term still can, and did: a 20,000-payload sweep produced
 * `φ 0°   X (-2967348.96, -2430888.51, -2315399.61)` at 48 characters. The
 * cause was a DERIVED point, not an input — see PLANE_OFFSET_MAX below.
 */
export const MAX_READOUT_VALUE_CHARS = 39;

/** Every board this widget is verified at. `REF_W x REF_H` is the first. */
export const BOARDS: readonly (readonly [number, number])[] = [
  [REF_W, REF_H],
  [495, 270],
  [900, 430],
];
/** How far a label sits from the thing it names. Chrome — never scaled. */
export const LABEL_OFFSET = 11;

/* ------------------------------------------------------------------ derived */

export const DERIVED_KEYS = [
  'angle_deg',
  'distance',
  'foot_x',
  'foot_y',
  'foot_z',
  'mate_x',
  'mate_y',
  'mate_z',
] as const;

/**
 * The SAME eight keys in every mode (circuit_network's precedent — a caption
 * is written before the payload exists, so a derived map whose shape depended
 * on the mode could not be referenced at all).
 *
 * What each means per mode, stated because "0 where inapplicable" would be a
 * lie in two of them:
 *
 *   two_lines    angle_deg = the acute angle between the directions
 *                distance  = the shortest distance
 *                foot      = the foot on L1;  mate = the foot on L2
 *   point_line   angle_deg = 90 — the angle the diagram MARKS, and true
 *                distance  = PF;  foot = F;  mate = the image P'
 *   point_plane  angle_deg = 90, same reason
 *                distance  = the perpendicular distance;  mate = the image P'
 *   line_plane   angle_deg = φ, the angle between the line and the plane
 *                distance  = 0 (they meet);  foot = mate = the meeting point
 *   two_planes   angle_deg = the dihedral angle
 *                distance  = 0 (they meet);  foot = the crease point nearest
 *                the origin, mate = one unit further along the crease, so the
 *                two together name the crease line
 */
export function computeDerived(p: LinesPlanes3dParams): Record<string, number> {
  let angle = 0;
  let distance = 0;
  let foot: Vec3 = [0, 0, 0];
  let mate: Vec3 = [0, 0, 0];

  switch (p.mode) {
    case 'two_lines': {
      angle = acuteAngleDeg(p.line1.dir, p.line2.dir);
      const br = skewBridge(p.line1.at, p.line1.dir, p.line2.at, p.line2.dir);
      distance = br.dist;
      foot = br.f1;
      mate = br.f2;
      break;
    }
    case 'point_line': {
      const f = footOnLine(p.point, p.line1.at, p.line1.dir);
      angle = 90;
      distance = f.dist;
      foot = f.foot;
      mate = sub(mul(f.foot, 2), p.point);
      break;
    }
    case 'point_plane': {
      const f = footOnPlane(p.point, p.plane1.normal, p.plane1.d);
      angle = 90;
      distance = f.dist;
      foot = f.foot;
      mate = f.image;
      break;
    }
    case 'line_plane': {
      angle = lineePlaneAngleDeg(p.line1.dir, p.plane1.normal);
      const hit = lineMeetsPlane(p.line1.at, p.line1.dir, p.plane1.normal, p.plane1.d);
      foot = hit.point;
      mate = hit.point;
      break;
    }
    default: {
      angle = acuteAngleDeg(p.plane1.normal, p.plane2.normal);
      const cr = planeCrease(p.plane1.normal, p.plane1.d, p.plane2.normal, p.plane2.d);
      foot = cr.point;
      mate = add(cr.point, cr.dir);
      break;
    }
  }

  return {
    angle_deg: angle,
    distance,
    foot_x: foot[0],
    foot_y: foot[1],
    foot_z: foot[2],
    mate_x: mate[0],
    mate_y: mate[1],
    mate_z: mate[2],
  };
}

/* ------------------------------------------------------------------ layout */

export interface Pt2 {
  x: number;
  y: number;
}
export interface Seg {
  a: Pt2;
  b: Pt2;
  /** 'solid' the object itself, 'measure' the quantity being measured,
   *  'construction' a dashed helper, 'axis' a coordinate axis. */
  kind: 'solid' | 'measure' | 'construction' | 'axis';
}
export interface Marker {
  at: Pt2;
  r: number;
}
export interface PlacedLabel {
  text: string;
  x: number;
  y: number;
}
export interface Poly {
  points: readonly Pt2[];
  /** A closed translucent face (a plane) or an open polyline (an angle mark). */
  closed: boolean;
}
export interface Arrow {
  at: Pt2;
  angle: number;
}

export interface Layout {
  segs: Seg[];
  polys: Poly[];
  markers: Marker[];
  arrows: Arrow[];
  labels: PlacedLabel[];
  readoutValue: string;
  /** Diagnostics fitProblems and the verification harness read; not drawn. */
  planeAreas: number[];
  objectSpanPx: number;
  /**
   * The dihedral's two arms, in WORLD coordinates, for `two_planes` only.
   *
   * Here so the ANGLE THE FIGURE DRAWS can be measured and compared against
   * the angle the readout PRINTS. A projection does not preserve angles, so
   * that comparison cannot be made from the 2-D output, and without it the
   * two are only equal because someone reasoned they were — which is how a
   * shape came to report `secondary_angle 0`, meaning "none", while drawing
   * the angle it denied having.
   */
  dihedral?: { apex: Vec3; arm1: Vec3; arm2: Vec3 };
  /** The dihedral's arm TIPS in board pixels, so `fitProblems` can measure how
   *  far apart the two faces actually read. `two_planes` only. */
  dihedralTipsPx?: { t1: Pt2; t2: Pt2 };
}

const f2 = (n: number) => (Object.is(n, -0) ? 0 : n).toFixed(2);

/** M/L only — NEVER an `A` arc. verify-render's pathBounds pairs the numbers
 *  in `d` positionally, so an arc's `rx ry rot laf sf` are read as
 *  coordinates and corrupt every bound after them (CLAUDE.md's gate note). */
export function polyPath(points: readonly Pt2[], closed: boolean): string {
  const body = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${f2(p.x)} ${f2(p.y)}`).join('');
  return closed ? `${body}Z` : body;
}

/**
 * Trailing-zero-free fixed formatting, for readouts and labels.
 *
 * NEGATIVE ZERO IS NORMALISED, and it was not. `(-0.004).toFixed(2)` is
 * "-0.00", which trims to "-0" — so any coordinate in (−0.005, 0) printed as
 * `F (-0, 3, 2)` on the board. `f2`, the path builder right below, already
 * normalised it and this did not, so the two disagreed about the same number.
 * Rounding happens first, then the sign is dropped if what is left is zero:
 * a real −0.4 still prints as −0.4.
 */
export function fmt(n: number, dp = 2): string {
  if (!Number.isFinite(n)) return '—';
  const rounded = Number(n.toFixed(dp));
  const s = (rounded === 0 ? 0 : rounded).toFixed(dp);
  return s.includes('.') ? s.replace(/0+$/, '').replace(/\.$/, '') : s;
}

const fmtVec = (p: Vec3) => `(${fmt(p[0])}, ${fmt(p[1])}, ${fmt(p[2])})`;

/**
 * The readout reads EVERY number from `computeDerived`, never from a second
 * call to the same formula.
 *
 * Both would give the same answer today, which is exactly why this is easy to
 * get wrong: two call sites cannot disagree until one of them is edited, and
 * then the board prints one number while a `{{token}}` caption prints another.
 * `circuit_network`'s `derive()` computing a metre-bridge RESISTANCE from a
 * CAPACITANCE is the same shape of defect — one path was maintained and the
 * other was not. There is one number here, and this is where it comes from.
 */
const derFoot = (der: Record<string, number>): Vec3 => [der.foot_x, der.foot_y, der.foot_z];

/**
 * The scene, in world space, before any projection.
 *
 * Split out from `layout` because it is the part `fitProblems` and the
 * component must agree on exactly, and because the LINE EXTENTS are the one
 * genuinely subtle choice here: a line is infinite, so how much of it to draw
 * is a decision, and drawing a fixed number of world units would make the
 * picture depend on the arbitrary magnitude of the direction ratios. Each
 * line is instead drawn over ±`reach` of ARC LENGTH about the point of
 * interest on it (its foot, or the intersection), so (2,1,−2) and (4,2,−4)
 * — the same line — draw identically. That property is asserted directly in
 * __tests__/independent-routes.test.ts rather than left as a claim.
 */
interface Scene {
  segs: { a: Vec3; b: Vec3; kind: Seg['kind'] }[];
  faces: Vec3[][];
  marks: Vec3[][];
  markers: { at: Vec3; r: number }[];
  anchors: { text: string; at: Vec3 }[];
  arrows: { at: Vec3; along: Vec3 }[];
  readoutValue: string;
  dihedral?: { apex: Vec3; arm1: Vec3; arm2: Vec3 };
}

/** Marker radii. Chrome, and DELIBERATELY DIFFERENT between the two kinds:
 *  verify-render assertion 8 only compares circles within 0.5 of each other's
 *  radius, so a point and a foot can sit close without tripping a floor that
 *  is about repeated glyphs of one kind. Two markers of the SAME kind are
 *  still checked, in fitProblems. */
const POINT_R = 5;
const FOOT_R = 3;

function buildScene(p: LinesPlanes3dParams): Scene {
  const sc: Scene = {
    segs: [],
    faces: [],
    marks: [],
    markers: [],
    anchors: [],
    arrows: [],
    readoutValue: '',
  };
  const der = computeDerived(p);
  const SEP = '   ';

  /** A segment of `l` of arc length 2*reach centred at parameter t0. */
  const drawLine = (l: LineSpec, t0: number, reach: number) => {
    const u = unit(l.dir);
    const c = add(l.at, mul(l.dir, t0));
    const a = sub(c, mul(u, reach));
    const b = add(c, mul(u, reach));
    sc.segs.push({ a, b, kind: 'solid' });
    sc.arrows.push({ at: b, along: u });
  };

  /** A plane as a parallelogram. `along`, when given, pins one edge direction
   *  — used by two_planes so both faces share the crease exactly. */
  const drawFace = (pl: PlaneSpec, centre: Vec3, half: number, along?: Vec3) => {
    const n = pl.normal;
    let e1: Vec3;
    if (along && len(along) > 0) e1 = unit(along);
    else e1 = planeBasis(n).e1;
    const e2 = unit(cross(n, e1));
    const h2 = half * 0.72;
    sc.faces.push([
      add(add(centre, mul(e1, -half)), mul(e2, -h2)),
      add(add(centre, mul(e1, half)), mul(e2, -h2)),
      add(add(centre, mul(e1, half)), mul(e2, h2)),
      add(add(centre, mul(e1, -half)), mul(e2, h2)),
    ]);
    return { e1, e2 };
  };

  /** The small square that says "these two meet at a right angle". */
  const rightAngle = (corner: Vec3, u1: Vec3, u2: Vec3, size: number) => {
    const a = add(corner, mul(unit(u1), size));
    const b = add(corner, mul(unit(u2), size));
    sc.marks.push([a, add(a, mul(unit(u2), size)), b]);
  };

  switch (p.mode) {
    case 'two_lines': {
      const br = skewBridge(p.line1.at, p.line1.dir, p.line2.at, p.line2.dir);
      /*
       * TWO SKEW LINES HAVE EXACTLY ONE INTRINSIC LENGTH, AND IT IS `d`.
       *
       * The pair is determined up to a rigid motion by (d, θ), and θ is
       * dimensionless — so `d` is the only length the configuration owns, and
       * the drawn extent may be built from nothing else.
       *
       * `|a2 − a1|` is NOT such a length, and an earlier version used it. It
       * is a property of the two base points the payload happened to name,
       * not of the lines: `r = a + λb` has infinitely many valid `a`, so
       * sliding `line2.at` ALONG ITS OWN LINE describes the identical pair of
       * lines while `|a2 − a1|` grows without bound. The picture drifted as it
       * grew and then stopped rendering entirely — at `at = (0,100,2)` the
       * bridge measured 4.2px and validate() refused a configuration it had
       * admitted at `at = (0,0,2)`, with `computeDerived` returning d = 2,
       * θ = 90 for both. Found by an independent verifier; the invariance test
       * that now guards it is "translating `at` along its own line".
       *
       * The consequence is worth stating because it fixes a second defect:
       * the drawn scene is now ~3.8d long and d across, so the bridge cannot
       * be an arbitrarily small fraction of the figure. A short bridge on the
       * board is therefore genuine foreshortening, which is what makes
       * `fitProblems`'s diagnosis of a short segment meaningful at all.
       *
       * When d = 0 the lines intersect and the configuration has NO length —
       * two intersecting lines are fixed up to similarity by θ alone. Any
       * constant works there, and the auto-fit cancels it: the scene is
       * symmetric about the crossing and scaling it changes no pixel.
       */
      const reach = br.dist > 0 ? br.dist * 1.9 : 1;
      drawLine(p.line1, br.lambda, reach);
      drawLine(p.line2, br.mu, reach);
      sc.anchors.push({ text: 'L1', at: add(br.f1, mul(unit(p.line1.dir), -reach * 0.8)) });
      sc.anchors.push({ text: 'L2', at: add(br.f2, mul(unit(p.line2.dir), -reach * 0.8)) });
      sc.markers.push({ at: br.f1, r: FOOT_R });
      if (br.dist > reach * 1e-6) {
        sc.segs.push({ a: br.f1, b: br.f2, kind: 'measure' });
        const bridge = sub(br.f2, br.f1);
        rightAngle(br.f1, p.line1.dir, bridge, reach * 0.1);
        rightAngle(br.f2, p.line2.dir, mul(bridge, -1), reach * 0.1);
        sc.anchors.push({ text: 'd', at: add(br.f1, mul(bridge, 0.5)) });
      } else {
        // The lines intersect: the common perpendicular is a POINT, not a
        // segment. Drawing a zero-length "d" would assert a gap the geometry
        // denies, so the crossing is marked instead — and the readout still
        // prints d 0, which is the coplanarity statement the chapter makes.
        sc.anchors.push({ text: 'X', at: br.f1 });
      }
      sc.readoutValue = `θ ${fmt(der.angle_deg, 1)}°${SEP}d ${fmt(der.distance)}`;
      break;
    }

    case 'point_line': {
      const f = footOnLine(p.point, p.line1.at, p.line1.dir);
      // Intrinsic length only — see the note in two_lines. PF is positive here
      // because validate() refuses a point that lies on the line.
      const reach = f.dist * 1.6;
      drawLine(p.line1, f.lambda, reach);
      sc.anchors.push({ text: 'L', at: add(f.foot, mul(unit(p.line1.dir), -reach * 0.82)) });
      sc.segs.push({ a: p.point, b: f.foot, kind: 'measure' });
      sc.markers.push({ at: p.point, r: POINT_R });
      sc.markers.push({ at: f.foot, r: FOOT_R });
      sc.anchors.push({ text: 'P', at: p.point });
      sc.anchors.push({ text: 'F', at: f.foot });
      rightAngle(f.foot, p.line1.dir, sub(p.point, f.foot), f.dist * 0.16);
      if (p.show_image) {
        const img = sub(mul(f.foot, 2), p.point);
        sc.segs.push({ a: f.foot, b: img, kind: 'construction' });
        sc.markers.push({ at: img, r: POINT_R });
        sc.anchors.push({ text: "P'", at: img });
      }
      sc.readoutValue = `PF ${fmt(der.distance)}${SEP}F ${fmtVec(derFoot(der))}`;
      break;
    }

    case 'point_plane': {
      const f = footOnPlane(p.point, p.plane1.normal, p.plane1.d);
      const half = Math.max(f.dist * 1.6, 1e-6);
      drawFace(p.plane1, f.foot, half);
      sc.segs.push({ a: p.point, b: f.foot, kind: 'measure' });
      sc.markers.push({ at: p.point, r: POINT_R });
      sc.markers.push({ at: f.foot, r: FOOT_R });
      sc.anchors.push({ text: 'P', at: p.point });
      sc.anchors.push({ text: 'F', at: f.foot });
      rightAngle(f.foot, planeBasis(p.plane1.normal).e1, sub(p.point, f.foot), f.dist * 0.16);
      if (p.show_image) {
        sc.segs.push({ a: f.foot, b: f.image, kind: 'construction' });
        sc.markers.push({ at: f.image, r: POINT_R });
        sc.anchors.push({ text: "P'", at: f.image });
      }
      sc.readoutValue = `d ${fmt(der.distance)}${SEP}F ${fmtVec(derFoot(der))}`;
      break;
    }

    case 'line_plane': {
      const hit = lineMeetsPlane(p.line1.at, p.line1.dir, p.plane1.normal, p.plane1.d);
      /*
       * A line and a plane have NO intrinsic length: the pair is fixed up to a
       * rigid motion by the angle φ alone. So the scale cannot come from the
       * configuration, and the only other thing in the picture is the ORIGIN —
       * which is really in the picture whenever `show_axes` is on.
       *
       * `|at − X|` was used here and is wrong for the same reason `|a2 − a1|`
       * was wrong in two_lines: `at` is one arbitrary point of the line among
       * infinitely many, so sliding it along its own line changed the figure's
       * size. With the axes OFF the auto-fit cancels that and the defect is
       * invisible; with the axes ON the origin is pinned and the figure grows
       * against it. That is why this one survived a verification pass that
       * checked line_plane and correctly found it invariant — the check was
       * run with the axes off.
       *
       * `|X|` is invariant under both freedoms of the equation and is the
       * honest scale: it sizes the figure against the axes it is drawn among.
       */
      const half = (len(hit.point) || 1) * 0.6;
      drawFace(p.plane1, hit.point, half);
      const reach = half * 1.4;
      drawLine(p.line1, hit.lambda, reach);
      sc.anchors.push({ text: 'L', at: add(hit.point, mul(unit(p.line1.dir), -reach * 0.82)) });
      sc.markers.push({ at: hit.point, r: FOOT_R });
      sc.anchors.push({ text: 'X', at: hit.point });
      // The line's own shadow in the plane is the second arm of φ. Without it
      // "the angle between a line and a plane" has nothing to be an angle
      // between, which is precisely why sin φ (not cos) appears in the formula.
      const un = unit(p.plane1.normal);
      const bIn = sub(p.line1.dir, mul(un, dot(p.line1.dir, un)));
      if (len(bIn) > EPS * len(p.line1.dir)) {
        const shadow = add(hit.point, mul(unit(bIn), reach * 0.66));
        sc.segs.push({ a: hit.point, b: shadow, kind: 'construction' });
        sc.anchors.push({ text: 'φ', at: add(hit.point, mul(unit(bIn), reach * 0.3)) });
      }
      const nTip = add(hit.point, mul(un, half * 0.6));
      sc.segs.push({ a: hit.point, b: nTip, kind: 'construction' });
      sc.arrows.push({ at: nTip, along: un });
      sc.anchors.push({ text: 'n', at: nTip });
      sc.readoutValue = `φ ${fmt(der.angle_deg, 1)}°${SEP}X ${fmtVec(derFoot(der))}`;
      break;
    }

    default: {
      const cr = planeCrease(p.plane1.normal, p.plane1.d, p.plane2.normal, p.plane2.d);
      // `cr.point` is the crease point NEAREST THE ORIGIN, so it is a property
      // of the two planes and not of any parameterisation — nothing to slide.
      // `|| 1` rather than `Math.max(…, 1)` so the scale stays covariant with
      // the scene for a crease closer than one unit, instead of clamping.
      const half = len(cr.point) || 1;
      // Both faces are spanned by the crease direction and their OWN in-plane
      // perpendicular to it, so they meet along the crease exactly.
      const f1 = drawFace(p.plane1, cr.point, half, cr.dir);
      const f2 = drawFace(p.plane2, cr.point, half, cr.dir);
      // Orient the two arms to the SAME side of the crease. Without this the
      // drawn angle can be the obtuse supplement while the readout prints the
      // acute one — the picture and the number disagreeing, which is the one
      // failure this whole runtime exists to make impossible.
      const w1 = f1.e2;
      const w2 = dot(f1.e2, f2.e2) < 0 ? mul(f2.e2, -1) : f2.e2;
      sc.segs.push({
        a: sub(cr.point, mul(cr.dir, half)),
        b: add(cr.point, mul(cr.dir, half)),
        kind: 'solid',
      });
      sc.markers.push({ at: cr.point, r: FOOT_R });
      const arm = half * 0.55;
      const t1 = add(cr.point, mul(w1, arm));
      const t2 = add(cr.point, mul(w2, arm));
      sc.segs.push({ a: cr.point, b: t1, kind: 'measure' });
      sc.segs.push({ a: cr.point, b: t2, kind: 'measure' });
      sc.marks.push([t1, t2]);
      sc.dihedral = { apex: cr.point, arm1: sub(t1, cr.point), arm2: sub(t2, cr.point) };
      sc.anchors.push({ text: 'θ', at: mul(add(t1, t2), 0.5) });
      sc.anchors.push({ text: 'p1', at: add(cr.point, mul(w1, half * 0.62)) });
      sc.anchors.push({ text: 'p2', at: add(cr.point, mul(w2, half * 0.62)) });
      sc.readoutValue = `θ ${fmt(der.angle_deg, 1)}°`;
      break;
    }
  }

  return sc;
}

/** Every world point the fit must contain. */
function scenePoints(sc: Scene): Vec3[] {
  const out: Vec3[] = [];
  for (const s of sc.segs) out.push(s.a, s.b);
  for (const f of sc.faces) out.push(...f);
  for (const m of sc.marks) out.push(...m);
  for (const m of sc.markers) out.push(m.at);
  for (const a of sc.anchors) out.push(a.at);
  return out;
}

/**
 * Eight compass offsets, tried in order, for one label.
 *
 * Greedy first-fit rather than a fixed side, because a fixed side is how
 * field_lines put a label exactly where a glyph already was — see chrome.ts's
 * `cornerAnchor` note. Deterministic: the order never depends on the data, so
 * the same payload always places the same labels in the same slots.
 */
const COMPASS: readonly Pt2[] = [
  { x: 1, y: -1 },
  { x: 1, y: 1 },
  { x: -1, y: -1 },
  { x: -1, y: 1 },
  { x: 0, y: -1.3 },
  { x: 0, y: 1.3 },
  { x: 1.4, y: 0 },
  { x: -1.4, y: 0 },
];

export interface Box {
  x0: number;
  x1: number;
  y0: number;
  y1: number;
}

/** The same box model scripts/verify-render.mjs uses, deliberately — see
 *  chrome.ts's CHAR_W note. `start`-anchored, which is what the component
 *  renders. */
export function labelBox(text: string, x: number, y: number, size: number, charW: number): Box {
  const w = text.length * size * charW;
  return { x0: x, x1: x + w, y0: y - size * 0.82, y1: y - size * 0.82 + size * 1.15 };
}

const boxesOverlap = (a: Box, b: Box) => a.x0 < b.x1 && b.x0 < a.x1 && a.y0 < b.y1 && b.y0 < a.y1;

export interface FrameChrome {
  labelSize: number;
  charW: (text: string) => number;
  readoutBand: number;
  padSide: number;
  padEdge: number;
}

/**
 * Projects the scene, fits it to the plot box, and places every label.
 *
 * THE FIT IS THE REASON THE CORNER SWEEP IS TRACTABLE. A payload carries up
 * to 16 numbers, i.e. 2^16 corners, which is not a set anyone enumerates.
 * Because the camera fits the projected bounding box to the plot box, the
 * absolute MAGNITUDE of every coordinate divides out — only the scene's
 * SHAPE reaches the board. So the corners that matter are shape corners
 * (near-parallel, near-perpendicular, near-degenerate under the projection),
 * a small enumerable set, and the magnitudes are covered by a scale-
 * invariance assertion instead of by a sweep. Both are in
 * __tests__/independent-routes.test.ts.
 *
 * WORLD CONSTANTS SCALE, CHROME CONSTANTS NEVER. `s` below is the only world
 * scale and it is derived from the measured box; every quantity taken from
 * `chrome` (label size, offsets, pads, marker radii) is in device points and
 * is NOT multiplied by a board dimension.
 */
export function layout(
  p: LinesPlanes3dParams,
  width: number,
  height: number,
  chrome: FrameChrome
): Layout {
  const cam = cameraFor(p.view);
  const sc = buildScene(p);

  const objPts = scenePoints(sc);
  const axisSegs: { a: Vec3; b: Vec3; kind: Seg['kind'] }[] = [];
  const axisAnchors: { text: string; at: Vec3 }[] = [];
  const axisArrows: { at: Vec3; along: Vec3 }[] = [];

  if (p.show_axes) {
    // Axis extents come from the OBJECT box, computed first, so the fit is a
    // two-pass computation and never circular. The origin is inside the box
    // by construction (lo starts at 0), which is what makes the coordinates
    // readable off the figure at all.
    const lo = [0, 0, 0];
    const hi = [0, 0, 0];
    for (const q of objPts) {
      for (let k = 0; k < 3; k++) {
        lo[k] = Math.min(lo[k], q[k]);
        hi[k] = Math.max(hi[k], q[k]);
      }
    }
    const reach = Math.max(...hi.map(Math.abs), ...lo.map(Math.abs), 1e-6) * 0.5;
    const names = ['x', 'y', 'z'];
    for (let k = 0; k < 3; k++) {
      const dir: Vec3 = [k === 0 ? 1 : 0, k === 1 ? 1 : 0, k === 2 ? 1 : 0];
      const tip = mul(dir, Math.max(hi[k], 0) + reach);
      const tail = mul(dir, Math.min(lo[k], 0));
      axisSegs.push({ a: tail, b: tip, kind: 'axis' });
      axisArrows.push({ at: tip, along: dir });
      axisAnchors.push({ text: names[k], at: tip });
    }
  }

  const allSegs = [...sc.segs, ...axisSegs];
  const allAnchors = [...sc.anchors, ...axisAnchors];
  const allArrows = [...sc.arrows, ...axisArrows];
  const allPts = [...objPts, ...axisSegs.flatMap((g) => [g.a, g.b])];

  const proj = allPts.map((q) => project(q, cam));
  const uMin = Math.min(...proj.map((q) => q.u));
  const uMax = Math.max(...proj.map((q) => q.u));
  const vMin = Math.min(...proj.map((q) => q.v));
  const vMax = Math.max(...proj.map((q) => q.v));

  // Inset by one label offset all round so a corner-most label has room. This
  // is the container rule: the gutter is sized from the CHROME it must hold,
  // never as a fraction of the frame.
  const inset = LABEL_OFFSET + chrome.labelSize * 0.6;
  const left = chrome.padSide + inset;
  const right = width - chrome.padSide - inset;
  const top = chrome.readoutBand + inset * 0.6;
  const bottom = height - chrome.padEdge - inset * 0.6;
  const plotW = Math.max(right - left, 1);
  const plotH = Math.max(bottom - top, 1);

  const s = Math.min(plotW / Math.max(uMax - uMin, 1e-9), plotH / Math.max(vMax - vMin, 1e-9));
  const cx = (left + right) / 2;
  const cy = (top + bottom) / 2;
  const uc = (uMin + uMax) / 2;
  const vc = (vMin + vMax) / 2;

  const to2 = (q: Vec3): Pt2 => {
    const { u, v } = project(q, cam);
    return { x: cx + (u - uc) * s, y: cy - (v - vc) * s };
  };

  const segs: Seg[] = allSegs.map((g) => ({ a: to2(g.a), b: to2(g.b), kind: g.kind }));
  const polys: Poly[] = [
    ...sc.faces.map((f) => ({ points: f.map(to2), closed: true })),
    ...sc.marks.map((m) => ({ points: m.map(to2), closed: false })),
  ];
  const markers: Marker[] = sc.markers.map((m) => ({ at: to2(m.at), r: m.r }));
  // The arrowhead angle is scale-free: it only needs a second point BEHIND
  // the tip along the same world direction, and any positive step gives the
  // same projected angle because the projection is linear.
  const arrows: Arrow[] = allArrows.map((a) => {
    const tip = to2(a.at);
    const back = to2(sub(a.at, unit(a.along)));
    return { at: tip, angle: Math.atan2(tip.y - back.y, tip.x - back.x) };
  });

  const centreX = (left + right) / 2;
  const centreY = (top + bottom) / 2;
  const placed: Box[] = [];
  const labels: PlacedLabel[] = [];
  for (const a of allAnchors) {
    const at = to2(a.at);
    /*
     * The preferred side is "away from the middle of the figure" — but that
     * direction DOES NOT EXIST for an anchor sitting at the middle, and the
     * normalisation there divides by ~0 and returns whichever way the last
     * bit of floating error happened to point.
     *
     * That is not a hypothetical anchor. Two intersecting lines are symmetric
     * about their crossing, so the crossing lands exactly on the fit centre
     * and the "X" label flipped sides — 14.48px, one compass slot — between
     * two payloads describing the identical pair of lines. Below a pixel of
     * offset there is no outward direction to prefer, so the fixed compass
     * order decides, which is deterministic by construction.
     */
    const offX = at.x - centreX;
    const offY = at.y - centreY;
    const mag = Math.hypot(offX, offY);
    const dirs: Pt2[] =
      mag < 1 ? [...COMPASS] : [{ x: offX / mag, y: offY / mag }, ...COMPASS];
    const w = a.text.length * chrome.labelSize * chrome.charW(a.text);
    let best: { x: number; y: number; box: Box } | null = null;
    let fallback: { x: number; y: number; box: Box } | null = null;
    for (const dir of dirs) {
      const lx = at.x + dir.x * LABEL_OFFSET - (dir.x < -0.2 ? w : dir.x > 0.2 ? 0 : w / 2);
      const ly =
        at.y +
        dir.y * LABEL_OFFSET +
        (dir.y > 0.2 ? chrome.labelSize * 0.7 : dir.y < -0.2 ? 0 : chrome.labelSize * 0.35);
      const box = labelBox(a.text, lx, ly, chrome.labelSize, chrome.charW(a.text));
      if (!fallback) fallback = { x: lx, y: ly, box };
      const inBoard =
        box.x0 >= 1 &&
        box.x1 <= width - 1 &&
        box.y0 >= chrome.readoutBand &&
        box.y1 <= height - 1;
      if (!inBoard) continue;
      if (placed.some((q) => boxesOverlap(q, box))) continue;
      best = { x: lx, y: ly, box };
      break;
    }
    const chosen = best ?? fallback!;
    placed.push(chosen.box);
    labels.push({ text: a.text, x: chosen.x, y: chosen.y });
  }

  const planeAreas = sc.faces.map((f) => {
    const q = f.map(to2);
    let a2 = 0;
    for (let i = 0; i < q.length; i++) {
      const r = q[(i + 1) % q.length];
      a2 += q[i].x * r.y - r.x * q[i].y;
    }
    return Math.abs(a2) / 2;
  });

  const objProj = objPts.map(to2);
  const objectSpanPx = Math.hypot(
    Math.max(...objProj.map((q) => q.x)) - Math.min(...objProj.map((q) => q.x)),
    Math.max(...objProj.map((q) => q.y)) - Math.min(...objProj.map((q) => q.y))
  );

  return {
    segs,
    polys,
    markers,
    arrows,
    labels,
    readoutValue: sc.readoutValue,
    planeAreas,
    objectSpanPx,
    dihedral: sc.dihedral,
    dihedralTipsPx: sc.dihedral
      ? {
          t1: to2(add(sc.dihedral.apex, sc.dihedral.arm1)),
          t2: to2(add(sc.dihedral.apex, sc.dihedral.arm2)),
        }
      : undefined,
  };
}

/**
 * THE GEOMETRIC BACKSTOP: what `validate()` refuses that a shape check cannot
 * see, measured at 343x236 because CLAUDE.md §3 says the schema's legal range
 * must be a SUBSET of what renders correctly, and a floor derived at 900x430
 * is not a floor.
 *
 * Three of these are verify-render.mjs's own assertions 3, 4 and 8, asserted
 * here so a payload the gate would reject can never be admitted by the schema.
 * The other two exist because a PROJECTION can destroy a figure that is
 * geometrically perfect, and no amount of coordinate checking would see it:
 *
 *   - a segment shorter than MIN_SEG_PX: that line runs along the camera's
 *     own line of sight and has collapsed toward a point;
 *   - a face thinner than MIN_PLANE_AREA_PX: the plane is edge-on and reads
 *     as a line, so "the plane" is not in the picture at all.
 *
 * Both name the remedies — the other two views, and `show_axes: false` —
 * because those are the only two things that fix them.
 */
export function fitProblems(
  p: LinesPlanes3dParams,
  chrome: FrameChrome,
  /**
   * When true (the default) the error text names the OTHER views that were
   * actually checked and came back clean, rather than the ones that merely
   * exist. Recursion terminates because the recursive calls pass false — one
   * level deep, three calls, no cycle. This matters: the views' kernels are
   * linearly independent so a clean view always exists, and an error that
   * says "try high" when high fails too would send the payload generator
   * round a loop it cannot get out of.
   */
  suggestViews = true
): string[] {
  const problems: string[] = [];
  const clean = suggestViews
    ? VIEW_IDS.filter((v) => v !== p.view && fitProblems({ ...p, view: v }, chrome, false).length === 0)
    : [];
  const others = clean.length
    ? `try ${clean.join(' or ')}`
    : suggestViews
      ? 'no other view is clean either — the figure needs different geometry, not a different camera'
      : `try ${VIEW_IDS.filter((v) => v !== p.view).join(' or ')}`;
  const L = layout(p, REF_W, REF_H, chrome);

  /*
   * A SHORT SEGMENT HAS THREE POSSIBLE CAUSES AND THIS DIAGNOSES WHICH.
   *
   * The first version blamed the camera's line of sight every time. That is
   * only one of the three, and naming it unconditionally is worse than saying
   * nothing: it sends someone to a different view when the fix is different
   * geometry. (An independent verifier hit exactly that — a bridge short in
   * ALL three views because d was small next to the rest of the figure, with
   * the error confidently blaming view "standard".)
   *
   * So the segment is re-measured in the other two cameras, and the message
   * names the cause the measurement supports:
   *
   *   longer elsewhere  -> foreshortening. This camera looks along it. Name
   *                        the views where it opens up.
   *   short everywhere  -> the length itself is a small fraction of the
   *                        figure. No camera can help; report the fraction so
   *                        the reader knows what to change.
   */
  const segLengths = (lay: Layout) =>
    lay.segs.map((g) => Math.hypot(g.b.x - g.a.x, g.b.y - g.a.y));
  const here = segLengths(L);
  for (let i = 0; i < L.segs.length; i++) {
    const g = L.segs[i];
    if (g.kind === 'axis') continue;
    // `!(x >= MIN)` rather than `x < MIN`: the second is FALSE for NaN, so a
    // NaN length would slip past every floor in this function and reach the
    // board, caught only by an assertion that does not run at render time.
    if (here[i] >= MIN_SEG_PX) continue;

    // Where the segment opens up...
    const opensUp = VIEW_IDS.filter((v) => v !== p.view).filter((v) => {
      const alt = segLengths(layout({ ...p, view: v }, REF_W, REF_H, chrome));
      return i < alt.length && alt[i] >= MIN_SEG_PX;
    });
    /*
     * ...INTERSECTED WITH WHERE THE WHOLE PAYLOAD IS CLEAN.
     *
     * "This segment is longer over there" is not the same claim as "over there
     * works": the other camera can open the segment up and still fail on its
     * own coverage or its own label collision. Recommending it on the strength
     * of the segment alone is the same defect this branch was written to fix,
     * one level down — and the sweep in __tests__ caught it doing exactly that
     * before this intersection was added.
     */
    const worth = opensUp.filter((v) => clean.includes(v));

    problems.push(
      worth.length > 0
        ? `a ${g.kind} segment is ${here[i].toFixed(1)}px long at ${REF_W}x${REF_H}, under the ${MIN_SEG_PX}px floor — view "${p.view}" is looking along it; it opens up and the whole figure is clean in ${worth.join(' or ')}`
        : opensUp.length > 0
          // Deliberately does NOT name the views the segment opens up in.
          // They do not work, and a view named in an error reads as a
          // recommendation however it is phrased — which is the whole defect
          // this branch exists to avoid.
          ? `a ${g.kind} segment is ${here[i].toFixed(1)}px long at ${REF_W}x${REF_H}, under the ${MIN_SEG_PX}px floor — view "${p.view}" is looking along it, and the views where it opens up fail for their own reasons, so no camera fixes this payload`
          : `a ${g.kind} segment is ${here[i].toFixed(1)}px long at ${REF_W}x${REF_H}, under the ${MIN_SEG_PX}px floor, and it is short in ALL THREE views — it is only ${((here[i] / Math.max(L.objectSpanPx, 1)) * 100).toFixed(1)}% of the figure's own span, so this is the geometry and not the camera: no view will fix it, the lengths in the payload have to be closer together`
    );
    break;
  }

  for (const area of L.planeAreas) {
    if (!(area >= MIN_PLANE_AREA_PX)) {
      problems.push(
        `a plane projects to ${area.toFixed(0)}px² at ${REF_W}x${REF_H}, under the ${MIN_PLANE_AREA_PX}px² floor — it is edge-on in view "${p.view}" and reads as a line, not a plane; ${others}${p.show_axes ? ', or show_axes: false' : ''}`
      );
      break;
    }
  }

  /*
   * Ink coverage, computed the way verify-render's assertion 2 computes it —
   * the bounding box of the DRAWN elements (never the text, which contributes
   * nothing there) over the board area — at all three boards.
   *
   * Deliberately a slight UNDER-estimate: the arrowhead Paths extend a few
   * points past the segment tips they sit on and are not counted here. Under-
   * estimating coverage makes this refuse slightly more than the gate would,
   * which is the safe direction to be wrong; over-estimating would let a
   * degenerate payload through, which is the whole failure this exists to
   * prevent.
   */
  for (const [bw, bh] of BOARDS) {
    const B = bw === REF_W && bh === REF_H ? L : layout(p, bw, bh, chrome);
    const xs: number[] = [];
    const ys: number[] = [];
    for (const g of B.segs) {
      xs.push(g.a.x, g.b.x);
      ys.push(g.a.y, g.b.y);
    }
    for (const q of B.polys) for (const r of q.points) { xs.push(r.x); ys.push(r.y); }
    for (const m of B.markers) { xs.push(m.at.x - m.r, m.at.x + m.r); ys.push(m.at.y - m.r, m.at.y + m.r); }
    if (xs.length === 0) continue;
    const cover =
      ((Math.max(...xs) - Math.min(...xs)) * (Math.max(...ys) - Math.min(...ys))) / (bw * bh);
    if (!(cover >= MIN_COVERAGE)) {
      problems.push(
        `drawn content covers ${(cover * 100).toFixed(1)}% of a ${bw}x${bh} board, under the ${(MIN_COVERAGE * 100).toFixed(0)}% floor — the figure is far flatter or far taller than the board, and the camera cannot stretch it without distorting the angles it exists to show; ${others}`
      );
      break;
    }
  }

  if (L.dihedralTipsPx) {
    const sep = Math.hypot(
      L.dihedralTipsPx.t1.x - L.dihedralTipsPx.t2.x,
      L.dihedralTipsPx.t1.y - L.dihedralTipsPx.t2.y
    );
    const theta = computeDerived(p).angle_deg;
    if (!(sep >= MIN_ARM_SEPARATION_PX)) {
      problems.push(
        theta < MIN_DIHEDRAL_DEG
          ? `plane1 and plane2 meet at ${fmt(theta, 2)}°, under the ${MIN_DIHEDRAL_DEG}° floor — they are so nearly parallel that the two faces draw on top of each other, which is the same picture the COINCIDENT refusal exists to prevent. Their arms would sit ${sep.toFixed(1)}px apart at ${REF_W}x${REF_H}, under the ${MIN_ARM_SEPARATION_PX}px floor; no view and no board size changes that, because the ratio is fixed by the geometry`
          : `the two faces' arms are ${sep.toFixed(1)}px apart at ${REF_W}x${REF_H}, under the ${MIN_ARM_SEPARATION_PX}px floor — the dihedral is ${fmt(theta, 2)}° but view "${p.view}" is looking down the crease; ${others}`
      );
    }
  }

  if (!(L.objectSpanPx >= MIN_OBJECT_SPAN_PX)) {
    problems.push(
      `the figure itself spans only ${L.objectSpanPx.toFixed(0)}px at ${REF_W}x${REF_H}, under the ${MIN_OBJECT_SPAN_PX}px floor${p.show_axes ? ' — the coordinate axes are much larger than the objects and the fit has crushed them; try show_axes: false' : ''}`
    );
  }

  /*
   * NON-FINITE GEOMETRY, CHECKED EXPLICITLY.
   *
   * Every floor in this function is a comparison, and comparisons are FALSE
   * for NaN in both directions — `d < MIN` and `d > MAX` both miss it. The
   * floors are written in the NaN-safe polarity now, but relying on the
   * polarity of six separate comparisons staying correct through future edits
   * is exactly the kind of guarantee that quietly stops holding. verify-render
   * assertion 5 would catch a NaN at CI time; nothing would catch it at
   * validate() time, which is the only thing standing between a live doubt and
   * a student's board. So it is checked once, directly, here.
   */
  const finitePt = (q: Pt2) => Number.isFinite(q.x) && Number.isFinite(q.y);
  const allPts: Pt2[] = [
    ...L.segs.flatMap((g) => [g.a, g.b]),
    ...L.polys.flatMap((q) => [...q.points]),
    ...L.markers.map((m) => m.at),
    ...L.labels.map((l) => ({ x: l.x, y: l.y })),
  ];
  if (!allPts.every(finitePt) || !L.markers.every((m) => Number.isFinite(m.r))) {
    problems.push(
      'the layout produced a non-finite coordinate — no comparison-based floor can catch that, so it is refused outright'
    );
  }

  const outside = (q: Pt2) => q.x < -1 || q.y < -1 || q.x > REF_W + 1 || q.y > REF_H + 1;
  const geometry: Pt2[] = [
    ...L.segs.flatMap((g) => [g.a, g.b]),
    ...L.polys.flatMap((q) => [...q.points]),
    ...L.markers.map((m) => m.at),
  ];
  const off = geometry.find(outside);
  if (off) {
    problems.push(
      `geometry reaches (${off.x.toFixed(0)}, ${off.y.toFixed(0)}), outside the ${REF_W}x${REF_H} board`
    );
  }

  if (L.readoutValue.length > MAX_READOUT_VALUE_CHARS) {
    problems.push(
      `the readout value is ${L.readoutValue.length} characters ("${L.readoutValue}") and only ${MAX_READOUT_VALUE_CHARS} fit at ${REF_W}x${REF_H} — fitReadout would drop a whole term, so the board would draw a point the readout has stopped naming`
    );
  }

  const boxes = L.labels.map((l) => ({
    l,
    b: labelBox(l.text, l.x, l.y, chrome.labelSize, chrome.charW(l.text)),
  }));
  for (const { l, b } of boxes) {
    if (b.x0 < -1 || b.x1 > REF_W + 1 || b.y0 < -1 || b.y1 > REF_H + 1) {
      problems.push(`label "${l.text}" runs off the ${REF_W}x${REF_H} board`);
    }
  }
  for (let i = 0; i < boxes.length; i++) {
    for (let j = i + 1; j < boxes.length; j++) {
      if (boxesOverlap(boxes[i].b, boxes[j].b)) {
        problems.push(
          `labels "${boxes[i].l.text}" and "${boxes[j].l.text}" collide at ${REF_W}x${REF_H} — no compass slot is free; ${others}${p.show_axes ? ', or show_axes: false' : ''}`
        );
      }
    }
  }

  for (let i = 0; i < L.markers.length; i++) {
    for (let j = i + 1; j < L.markers.length; j++) {
      const a = L.markers[i];
      const b = L.markers[j];
      if (Math.abs(a.r - b.r) > 0.5) continue;
      const d = Math.hypot(a.at.x - b.at.x, a.at.y - b.at.y);
      if (!(d >= 2 * a.r + 4)) {
        problems.push(
          `two r=${a.r} markers are ${d.toFixed(1)}px apart at ${REF_W}x${REF_H}, under the 2r+4 = ${(2 * a.r + 4).toFixed(0)} floor`
        );
      }
    }
  }

  return problems;
}
