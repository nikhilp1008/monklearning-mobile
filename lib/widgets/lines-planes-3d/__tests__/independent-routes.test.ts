/**
 * lines_planes_3d — the maths, checked by DIFFERENT derivations.
 *
 * CLAUDE.md §6: "A self-check must not be an identity." `circuit_network`
 * asserted `terminal_v === i_total * r_eq` as proof its cell-bank maths was
 * right; given i = V/(R+r) that is true for every input, however wrong the
 * model, and it swept 75 combinations at under 1e-9 deviation while proving
 * nothing. So none of the checks below rearranges the formula it is checking.
 * Each one states, in its own comment, WHAT IT COULD CATCH — because if you
 * cannot say that, it catches nothing.
 *
 *   quantity                      closed form under test        independent route
 *   ---------------------------   ---------------------------   -------------------------------
 *   shortest distance, skew       |(a2−a1)·(b1×b2)|/|b1×b2|     dense 2-D grid minimisation of
 *                                                               |r1(λ) − r2(μ)|, refined
 *   point→line distance           |AP × b|/|b|                  Heron's area of triangle APQ,
 *                                                               then h = 2·Area/|AQ|
 *   point→plane distance          |n·P − d|/|n|                 tetrahedron volume over base
 *                                                               area: h = 3V/A
 *   angle between directions      acos(|b1·b2|/(|b1||b2|))      atan2(|b1×b2|, |b1·b2|) — the
 *                                                               SINE, which the cosine formula
 *                                                               never computes
 *   line ∩ plane                  λ = (d − n·a)/(n·b)           sign-change bisection on
 *                                                               f(λ) = n·(a+λb) − d
 *   the image P'                  P − 2t n  /  2F − P           the DEFINING property: P and P'
 *                                                               are equidistant from every point
 *                                                               of the mirror
 *   the foot F                    a + λ0 b  /  P − t n          brute-force nearest point over a
 *                                                               dense sample of the line/plane
 */
import {
  COORD_MAX, MIN_DIHEDRAL_DEG, REF_H, REF_W,
  acuteAngleDeg, add, cameraFor, computeDerived, cross, dot, fmt, footOnLine, footOnPlane,
  layout, len, lineMeetsPlane, lineePlaneAngleDeg, mul, planeBasis, planeCrease,
  project, skewBridge, sub, unit,
  type FrameChrome, type LinesPlanes3dParams, type Vec3, type ViewId,
} from '../space-math';
import { linesPlanes3d } from '../index';
import { REFERENCE_CASES as CASES } from '../reference-cases';
import {
  CHAR_W, LABEL_SIZE, PAD_EDGE, PAD_SIDE, READOUT_BAND, charWidthFor, fitReadout,
} from '../../chrome';

const FRAME: FrameChrome = {
  labelSize: LABEL_SIZE,
  charW: charWidthFor,
  readoutBand: READOUT_BAND,
  padSide: PAD_SIDE,
  padEdge: PAD_EDGE,
};

/* ------------------------------------------------------- independent routes */

/**
 * Nearest approach of two lines, by SEARCH rather than by formula.
 *
 * Coarse grid over (λ, μ), then five rounds of shrink-and-refine around the
 * best cell. Touches neither the cross product nor the 2x2 normal-equation
 * solve, so it would catch: a swapped a1/a2, a missing modulus, dividing by
 * |b1×b2|² instead of |b1×b2|, and a sign error in `cross`.
 */
function nearestApproachBySearch(a1: Vec3, b1: Vec3, a2: Vec3, b2: Vec3, span: number): number {
  // ARC LENGTH, not raw parameter: the bracket has to contain the optimum, and
  // with a short direction vector the optimal λ can be enormous while the
  // optimal arc length never is. (The first draft searched raw λ over ±30 and
  // was wrong by 0.20 on a fifth of the sweep — the sweep caught the TEST,
  // which is what an independent route is supposed to do in both directions.)
  b1 = unit(b1);
  b2 = unit(b2);
  let loL = -span;
  let hiL = span;
  let loM = -span;
  let hiM = span;
  let best = Infinity;
  for (let round = 0; round < 7; round++) {
    const N = 60;
    let bl = 0;
    let bm = 0;
    best = Infinity;
    for (let i = 0; i <= N; i++) {
      const l = loL + ((hiL - loL) * i) / N;
      const p = add(a1, mul(b1, l));
      for (let j = 0; j <= N; j++) {
        const m = loM + ((hiM - loM) * j) / N;
        const q = add(a2, mul(b2, m));
        const dd = len(sub(p, q));
        if (dd < best) {
          best = dd;
          bl = l;
          bm = m;
        }
      }
    }
    const wl = (hiL - loL) / N;
    const wm = (hiM - loM) / N;
    loL = bl - wl;
    hiL = bl + wl;
    loM = bm - wm;
    hiM = bm + wm;
  }
  return best;
}

/** Heron's area from three side lengths — no dot product, no cross product. */
function heronArea(a: number, b: number, c: number): number {
  const s = (a + b + c) / 2;
  return Math.sqrt(Math.max(0, s * (s - a) * (s - b) * (s - c)));
}

/**
 * Point-to-line distance as the altitude of a triangle: h = 2·Area/base, with
 * the area from Heron on the three EDGE LENGTHS.
 *
 * Would catch: dividing by |b|² instead of |b| (the subtopic's own named speed
 * trap), and any error in `cross`, which Heron never calls.
 */
function pointLineDistByHeron(p: Vec3, a: Vec3, b: Vec3): number {
  const q = add(a, b);
  const ab = len(sub(q, a));
  const ap = len(sub(p, a));
  const qp = len(sub(p, q));
  return (2 * heronArea(ab, ap, qp)) / ab;
}

/**
 * Point-to-plane distance as h = 3V/A: the volume of the tetrahedron on three
 * plane points plus P, over the area of its base triangle.
 *
 * Would catch: normalising by |n|² instead of |n|, a sign convention flipped
 * between n·r = d and ax+by+cz+d = 0, and a wrong `planeBasis`.
 */
function pointPlaneDistByVolume(p: Vec3, n: Vec3, d: number): number {
  const { e1, e2 } = planeBasis(n);
  const base = mul(unit(n), d / len(n)); // the plane point nearest the origin
  const A = base;
  const B = add(base, mul(e1, 3.7));
  const C = add(base, mul(e2, 2.9));
  const ab = sub(B, A);
  const ac = sub(C, A);
  const ap = sub(p, A);
  const vol6 = Math.abs(dot(ap, cross(ab, ac)));
  const area = heronArea(len(ab), len(ac), len(sub(C, B)));
  return vol6 / 6 / (area / 3);
}

/**
 * The acute angle from the SINE side: atan2(|u × w|, |u · w|).
 *
 * Would catch a missing modulus in the cosine formula — that error reports the
 * obtuse supplement, and this route reports the acute one.
 */
function acuteAngleByAtan2(u: Vec3, w: Vec3): number {
  const raw = (Math.atan2(len(cross(u, w)), dot(u, w)) * 180) / Math.PI;
  return Math.min(raw, 180 - raw);
}

/**
 * λ at the line/plane crossing, by sign-change bisection on
 * f(λ) = n·(a + λb) − d. Never divides by n·b.
 *
 * Would catch a flipped numerator ((n·a − d) instead of (d − n·a)), which
 * lands the "intersection" reflected through the line's own base point.
 */
function crossingLambdaByBisection(a: Vec3, b: Vec3, n: Vec3, d: number): number {
  const f = (l: number) => dot(n, add(a, mul(b, l))) - d;
  let lo = -1;
  let hi = 1;
  for (let k = 0; k < 200 && f(lo) * f(hi) > 0; k++) {
    lo *= 1.7;
    hi *= 1.7;
  }
  for (let k = 0; k < 200; k++) {
    const mid = (lo + hi) / 2;
    if (f(lo) * f(mid) <= 0) hi = mid;
    else lo = mid;
  }
  return (lo + hi) / 2;
}

/** A deterministic PRNG, so a failing sweep case is reproducible by seed. */
function rng(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

/* ------------------------------------------- 0. the camera's own guarantee */

describe('the three views', () => {
  test('their view directions are LINEARLY INDEPENDENT — the escape hatch is real', () => {
    // space-math's VIEW_ANGLES comment claims det[standard; swing; high] ≈ 0.35,
    // and the whole "try another view" remedy rests on it. A claim written in
    // a comment and never checked is what CLAUDE.md §8 exists about, so it is
    // checked. Independent route: the determinant is computed here from
    // cameraFor's OUTPUT, not from the azimuth/elevation table.
    const a = cameraFor('standard').view;
    const b = cameraFor('swing').view;
    const c = cameraFor('high').view;
    expect(dot(a, cross(b, c))).toBeCloseTo(0.35, 2);

    for (const cam of [a, b, c]) expect(len(cam)).toBeCloseTo(1, 12);

    // Independence has a consequence the refusals depend on: no plane can be
    // edge-on in all three views (its normal would have to be perpendicular
    // to three independent vectors, i.e. zero), and no line direction can be
    // parallel to more than one. Swept over 4000 random directions.
    const rand = rng(4055);
    for (let i = 0; i < 4000; i++) {
      const n = unit([rand() * 2 - 1, rand() * 2 - 1, rand() * 2 - 1] as Vec3);
      if (len(n) === 0) continue;
      const edgeOn = [a, b, c].filter((v) => Math.abs(dot(n, v)) < 0.12);
      expect(edgeOn.length).toBeLessThanOrEqual(2);
      const alongKernel = [a, b, c].filter((v) => len(cross(n, v)) < 0.12);
      expect(alongKernel.length).toBeLessThanOrEqual(1);
    }
  });

  test('the world z-axis projects straight up in every view', () => {
    // The convention every figure in this chapter uses, and the reason a
    // student can read "height" off the page. It is a property of the camera
    // construction, not of any one view, so it is asserted for all three.
    for (const id of ['standard', 'swing', 'high'] as ViewId[]) {
      const cam = cameraFor(id);
      const up = project([0, 0, 1], cam);
      expect(up.u).toBeCloseTo(0, 12);
      expect(up.v).toBeGreaterThan(0.5);
    }
  });
});

/* ---------------------------------------------- 1. NCERT reference values */

/**
 * Five worked examples, transcribed from the checked-in
 * `Drona_Class12_Mathematics_Master_Reference.pdf`, Chapter 11. Every one has
 * an exact answer, which is why these are the reference set: a formula that is
 * subtly wrong almost never produces an integer.
 */
describe('reference values from the Class 12 Ch 11 master reference', () => {
  test('Subtopic 02 Example 3 — shortest distance between skew lines is exactly 4', () => {
    // r = (1,2,−1) + λ(2,1,−2) and r = (3,−1,1) + μ(1,2,2).
    // b1×b2 = (6,−6,3), |b1×b2| = 9, (a2−a1)·(b1×b2) = 36, d = 36/9 = 4.
    const br = skewBridge([1, 2, -1], [2, 1, -2], [3, -1, 1], [1, 2, 2]);
    expect(br.ok).toBe(true);
    expect(br.dist).toBeCloseTo(4, 12);
  });

  test('Subtopic 04 Example 1 — foot (0,3,2), distance √6, image (−2,2,3)', () => {
    // P(2,4,1) against r = (1,2,3) + λ(1,−1,1).
    const f = footOnLine([2, 4, 1], [1, 2, 3], [1, -1, 1]);
    expect(f.lambda).toBeCloseTo(-1, 12);
    expect(f.foot[0]).toBeCloseTo(0, 12);
    expect(f.foot[1]).toBeCloseTo(3, 12);
    expect(f.foot[2]).toBeCloseTo(2, 12);
    expect(f.dist).toBeCloseTo(Math.sqrt(6), 12);
    const image = sub(mul(f.foot, 2), [2, 4, 1]);
    expect(image.map((n) => Math.round(n * 1e9) / 1e9)).toEqual([-2, 2, 3]);
  });

  test('Subtopic 04 Example 2 — point–line distance is √29/3', () => {
    const f = footOnLine([1, 0, 2], [3, 1, 1], [2, 2, 1]);
    expect(f.dist).toBeCloseTo(Math.sqrt(29) / 3, 12);
  });

  test('Subtopic 03 Example 3 — foot (11/3, 5/3, 7/3), distance 1, image (10/3, 7/3, 5/3)', () => {
    // P(4,1,3) against x − 2y + 2z − 5 = 0, i.e. n = (1,−2,2), d = 5.
    const f = footOnPlane([4, 1, 3], [1, -2, 2], 5);
    expect(f.t).toBeCloseTo(1 / 3, 12);
    expect(f.dist).toBeCloseTo(1, 12);
    expect(f.foot[0]).toBeCloseTo(11 / 3, 12);
    expect(f.foot[1]).toBeCloseTo(5 / 3, 12);
    expect(f.foot[2]).toBeCloseTo(7 / 3, 12);
    expect(f.image[0]).toBeCloseTo(10 / 3, 12);
    expect(f.image[1]).toBeCloseTo(7 / 3, 12);
    expect(f.image[2]).toBeCloseTo(5 / 3, 12);
  });

  test('Subtopic 05 Example 1 — the line meets the plane at (1, 0, 1), λ = −1', () => {
    // (x−2)/1 = (y+1)/(−1) = (z−3)/2 against 2x + y − z = 1.
    const hit = lineMeetsPlane([2, -1, 3], [1, -1, 2], [2, 1, -1], 1);
    expect(hit.kind).toBe('crosses');
    expect(hit.lambda).toBeCloseTo(-1, 12);
    expect(hit.point.map((n) => Math.round(n * 1e9) / 1e9)).toEqual([1, 0, 1]);
  });

  test('Subtopic 02 Example 2 — (2,−1,1) and (1,1,−1) are perpendicular', () => {
    expect(acuteAngleDeg([2, -1, 1], [1, 1, -1])).toBeCloseTo(90, 10);
  });

  test('Subtopic 03 Practice 3 — the angle between two planes is arccos(4/21)', () => {
    // 2x − y + 2z = 5 and 3x + 6y − 2z = 7. n1·n2 = 6 − 6 − 4 = −4, |n1| = 3,
    // |n2| = 7. The MODULUS is what makes this 79.02° and not 100.98°, and
    // dropping it is the mistake the chapter warns about by name.
    const theta = acuteAngleDeg([2, -1, 2], [3, 6, -2]);
    expect(Math.cos((theta * Math.PI) / 180)).toBeCloseTo(4 / 21, 12);
    expect(theta).toBeCloseTo(79.0194245724, 8);
    expect(theta).toBeLessThanOrEqual(90);
  });

  test('Subtopic 05 Example 4 — the BISECTOR PLANES reproduce the same angle', () => {
    /*
     * THE INDEPENDENT ROUTE TO THE ANGLE BETWEEN TWO PLANES, and it comes from
     * the book rather than from rearranging cos θ = |n1·n2|/(|n1||n2|).
     *
     * The master reference works the bisectors of 2x − y + 2z + 3 = 0 and
     * 3x − 2y + 6z − 8 = 0 and states the answer: 5x − y − 4z + 45 = 0 and
     * 23x − 13y + 32z − 3 = 0, "mutually perpendicular". A bisector plane is
     * defined by EQUIDISTANCE, not by any angle formula — so if
     * `acuteAngleDeg` is right, each published bisector normal must make the
     * SAME angle with n1 as with n2, and twice its complement must come back
     * as the angle between the original planes. Neither statement is
     * derivable from the formula under test; both are consequences of the
     * geometry, checked against numbers someone else published.
     */
    const n1: Vec3 = [2, -1, 2];
    const n2: Vec3 = [3, -2, 6];
    const between = acuteAngleDeg(n1, n2);
    expect(between).toBeCloseTo(17.7527901619, 8);

    for (const nb of [[5, -1, -4], [23, -13, 32]] as Vec3[]) {
      const a1 = acuteAngleDeg(nb, n1);
      const a2 = acuteAngleDeg(nb, n2);
      // equidistant => equally inclined to both normals
      expect(a1).toBeCloseTo(a2, 10);
      // and it bisects: twice the half-angle is the whole angle
      expect(2 * Math.min(a1, 90 - a1)).toBeCloseTo(between, 8);
    }
    // the book's own check, restated: the two bisectors are perpendicular
    expect(dot([5, -1, -4], [23, -13, 32])).toBe(0);
  });
});

/* ------------------------------------- 2. the closed forms vs other routes */

describe('every closed form, against an independent derivation', () => {
  const N = 400;

  test('shortest distance between skew lines == nearest approach found by search', () => {
    const rand = rng(20260906);
    let checked = 0;
    let worst = 0;
    for (let i = 0; i < N; i++) {
      const rv = (): Vec3 => [rand() * 8 - 4, rand() * 8 - 4, rand() * 8 - 4];
      const a1 = rv();
      const b1 = rv();
      const a2 = rv();
      const b2 = rv();
      if (len(b1) < 0.4 || len(b2) < 0.4) continue;
      if (len(cross(b1, b2)) < 0.4 * len(b1) * len(b2)) continue; // near-parallel: refused anyway
      const br = skewBridge(a1, b1, a2, b2);
      // The optimal arc length is bounded by |a2−a1|/sin θ, and the filter
      // above holds sin θ ≥ 0.4, so 8·|a2−a1| + 10 always contains it.
      const search = nearestApproachBySearch(a1, b1, a2, b2, 8 * len(sub(a2, a1)) + 10);
      worst = Math.max(worst, Math.abs(br.dist - search));
      checked++;
    }
    expect(checked).toBeGreaterThan(200);
    // The search is a refined grid, not exact; 1e-6 is far below anything a
    // wrong formula would produce (a missing modulus or a squared denominator
    // moves this by whole units).
    expect(worst).toBeLessThan(1e-6);
  });

  test('the two feet really are the ends of the shortest segment', () => {
    // NOT `|f1 − f2| === dist` — that IS an identity given how f1, f2 were
    // solved. Instead: perturb each foot along its own line and confirm the
    // gap only ever grows. A wrong λ or μ fails this immediately.
    const rand = rng(7);
    for (let i = 0; i < 60; i++) {
      const rv = (): Vec3 => [rand() * 6 - 3, rand() * 6 - 3, rand() * 6 - 3];
      const a1 = rv();
      const b1 = rv();
      const a2 = rv();
      const b2 = rv();
      if (len(cross(b1, b2)) < 0.5 * len(b1) * len(b2)) continue;
      const br = skewBridge(a1, b1, a2, b2);
      const base = len(sub(br.f1, br.f2));
      for (const dl of [-0.3, -0.05, 0.05, 0.3]) {
        for (const dm of [-0.3, 0, 0.3]) {
          const p = add(br.f1, mul(unit(b1), dl));
          const q = add(br.f2, mul(unit(b2), dm));
          expect(len(sub(p, q))).toBeGreaterThanOrEqual(base - 1e-9);
        }
      }
    }
  });

  test('point→line distance == 2·Heron area / base', () => {
    const rand = rng(31337);
    let worst = 0;
    for (let i = 0; i < N; i++) {
      const rv = (): Vec3 => [rand() * 10 - 5, rand() * 10 - 5, rand() * 10 - 5];
      const p = rv();
      const a = rv();
      const b = rv();
      if (len(b) < 0.5) continue;
      const closed = footOnLine(p, a, b).dist;
      const heron = pointLineDistByHeron(p, a, b);
      worst = Math.max(worst, Math.abs(closed - heron) / Math.max(1, closed));
      }
    // Heron is ill-conditioned for thin triangles, which is exactly the case
    // of a point nearly on the line, so the tolerance is relative and loose.
    // It is still four orders of magnitude tighter than any real defect.
    expect(worst).toBeLessThan(1e-6);
  });

  test('point→plane distance == 3·tetrahedron volume / base area', () => {
    const rand = rng(4242);
    let worst = 0;
    for (let i = 0; i < N; i++) {
      const rv = (): Vec3 => [rand() * 10 - 5, rand() * 10 - 5, rand() * 10 - 5];
      const p = rv();
      const n = rv();
      const d = rand() * 10 - 5;
      if (len(n) < 0.5) continue;
      const closed = footOnPlane(p, n, d).dist;
      const byVolume = pointPlaneDistByVolume(p, n, d);
      worst = Math.max(worst, Math.abs(closed - byVolume) / Math.max(1, closed));
    }
    expect(worst).toBeLessThan(1e-9);
  });

  test('the acute angle from the cosine == the acute angle from atan2 of the sine', () => {
    const rand = rng(99);
    let worst = 0;
    for (let i = 0; i < N; i++) {
      const rv = (): Vec3 => [rand() * 4 - 2, rand() * 4 - 2, rand() * 4 - 2];
      const u = rv();
      const w = rv();
      if (len(u) < 0.3 || len(w) < 0.3) continue;
      worst = Math.max(worst, Math.abs(acuteAngleDeg(u, w) - acuteAngleByAtan2(u, w)));
    }
    expect(worst).toBeLessThan(1e-9);
  });

  test('line∩plane λ from the formula == λ from sign-change bisection', () => {
    const rand = rng(5150);
    let worst = 0;
    let checked = 0;
    for (let i = 0; i < N; i++) {
      const rv = (): Vec3 => [rand() * 8 - 4, rand() * 8 - 4, rand() * 8 - 4];
      const a = rv();
      const b = rv();
      const n = rv();
      const d = rand() * 8 - 4;
      if (len(b) < 0.5 || len(n) < 0.5) continue;
      if (Math.abs(dot(n, b)) < 0.3 * len(n) * len(b)) continue; // near-parallel: refused anyway
      const hit = lineMeetsPlane(a, b, n, d);
      const bis = crossingLambdaByBisection(a, b, n, d);
      worst = Math.max(worst, Math.abs(hit.lambda - bis) / Math.max(1, Math.abs(bis)));
      checked++;
    }
    expect(checked).toBeGreaterThan(150);
    expect(worst).toBeLessThan(1e-9);
  });

  test("P' is a genuine mirror image: equidistant from every point of the mirror", () => {
    // The DEFINING property of a reflection, and it uses nothing from the
    // formula that produced P'. A wrong factor (F − P instead of 2F − P, or
    // t instead of 2t) breaks it at every sample point.
    const rand = rng(8);
    for (let i = 0; i < 80; i++) {
      const rv = (): Vec3 => [rand() * 8 - 4, rand() * 8 - 4, rand() * 8 - 4];
      const p = rv();

      const a = rv();
      const b = rv();
      if (len(b) > 0.5) {
        const f = footOnLine(p, a, b);
        const img = sub(mul(f.foot, 2), p);
        for (const t of [-2.3, -0.7, 0, 1.1, 3.9]) {
          const onLine = add(a, mul(b, t));
          expect(len(sub(p, onLine))).toBeCloseTo(len(sub(img, onLine)), 9);
        }
      }

      const n = rv();
      const d = rand() * 8 - 4;
      if (len(n) > 0.5) {
        const f = footOnPlane(p, n, d);
        const { e1, e2 } = planeBasis(n);
        const base = mul(unit(n), d / len(n));
        for (const [s, t] of [
          [0, 0], [2.1, -1.3], [-3.4, 0.9], [1.2, 4.4], [-2.2, -2.2],
        ]) {
          const inPlane = add(add(base, mul(e1, s)), mul(e2, t));
          expect(Math.abs(dot(n, inPlane) - d)).toBeLessThan(1e-9 * (len(n) * len(inPlane) + 1));
          expect(len(sub(p, inPlane))).toBeCloseTo(len(sub(f.image, inPlane)), 9);
        }
      }
    }
  });

  test('the foot really is the nearest point, by brute force', () => {
    const rand = rng(1234);
    for (let i = 0; i < 60; i++) {
      const rv = (): Vec3 => [rand() * 8 - 4, rand() * 8 - 4, rand() * 8 - 4];
      const p = rv();
      const a = rv();
      const b = rv();
      if (len(b) < 0.5) continue;
      const f = footOnLine(p, a, b);
      let best = Infinity;
      for (let k = -4000; k <= 4000; k++) {
        best = Math.min(best, len(sub(p, add(a, mul(unit(b), k * 0.01)))));
      }
      expect(f.dist).toBeLessThanOrEqual(best + 1e-9);
      expect(best - f.dist).toBeLessThan(1e-4);

      const n = rv();
      const d = rand() * 8 - 4;
      if (len(n) < 0.5) continue;
      const fp = footOnPlane(p, n, d);
      const { e1, e2 } = planeBasis(n);
      const base = mul(unit(n), d / len(n));
      // Coarse sweep then refine around the winner. A single 0.2-step grid
      // leaves a quadratic residue of ~1e-2 near the minimum, which says
      // nothing about the formula and everything about the grid.
      let bs = 0;
      let bt = 0;
      let bestP = Infinity;
      let lo = -12;
      let hi = 12;
      for (let round = 0; round < 5; round++) {
        const step = (hi - lo) / 60;
        bestP = Infinity;
        for (let si = 0; si <= 60; si++) {
          for (let ti = 0; ti <= 60; ti++) {
            const sv = bs + lo + si * step;
            const tv = bt + lo + ti * step;
            const dd = len(sub(p, add(add(base, mul(e1, sv)), mul(e2, tv))));
            if (dd < bestP) {
              bestP = dd;
              bs = sv;
              bt = tv;
            }
          }
        }
        lo = -step;
        hi = step;
        bs = 0 + bs;
        bt = 0 + bt;
      }
      // The strict direction is the meaningful one: the closed form is never
      // beaten by an exhaustive search of the plane. The reverse bound is
      // limited by the search, not by the formula.
      expect(fp.dist).toBeLessThanOrEqual(bestP + 1e-9);
      expect(bestP - fp.dist).toBeLessThan(1e-6);
    }
  });

  test('the crease of two planes lies in BOTH planes and runs along n1×n2', () => {
    const rand = rng(606);
    for (let i = 0; i < 120; i++) {
      const rv = (): Vec3 => [rand() * 6 - 3, rand() * 6 - 3, rand() * 6 - 3];
      const n1 = rv();
      const n2 = rv();
      const d1 = rand() * 6 - 3;
      const d2 = rand() * 6 - 3;
      if (len(cross(n1, n2)) < 0.4 * len(n1) * len(n2)) continue;
      const cr = planeCrease(n1, d1, n2, d2);
      expect(cr.ok).toBe(true);
      for (const t of [-3.1, 0, 2.7]) {
        const q = add(cr.point, mul(cr.dir, t));
        expect(Math.abs(dot(n1, q) - d1)).toBeLessThan(1e-8 * (len(n1) * len(q) + 1));
        expect(Math.abs(dot(n2, q) - d2)).toBeLessThan(1e-8 * (len(n2) * len(q) + 1));
      }
    }
  });

  test('line–plane angle φ and line–normal angle sum to 90°', () => {
    // Not an identity in this codebase: `lineePlaneAngleDeg` uses asin of
    // |b·n|/(|b||n|) and `acuteAngleDeg` uses acos of the same ratio through a
    // different transcendental. A modulus dropped in one and not the other,
    // or a sin/cos swap, breaks the sum.
    const rand = rng(777);
    for (let i = 0; i < 200; i++) {
      const rv = (): Vec3 => [rand() * 6 - 3, rand() * 6 - 3, rand() * 6 - 3];
      const b = rv();
      const n = rv();
      if (len(b) < 0.4 || len(n) < 0.4) continue;
      expect(lineePlaneAngleDeg(b, n) + acuteAngleDeg(b, n)).toBeCloseTo(90, 9);
    }
  });

  test('every quantity is invariant under a rigid rotation of the whole scene', () => {
    // Rotating the world must not change an angle or a distance. A formula
    // that accidentally depends on a coordinate axis — a hardcoded seed in
    // planeBasis, say — fails here and nowhere else.
    const rand = rng(2718);
    const rot = (v: Vec3, c: number, s: number): Vec3 => {
      // about x, then y, then z, by the same angle: a genuinely general rotation
      const a: Vec3 = [v[0], c * v[1] - s * v[2], s * v[1] + c * v[2]];
      const b: Vec3 = [c * a[0] + s * a[2], a[1], -s * a[0] + c * a[2]];
      return [c * b[0] - s * b[1], s * b[0] + c * b[1], b[2]];
    };
    for (let i = 0; i < 120; i++) {
      const rv = (): Vec3 => [rand() * 6 - 3, rand() * 6 - 3, rand() * 6 - 3];
      const th = rand() * Math.PI * 2;
      const c = Math.cos(th);
      const s = Math.sin(th);
      const p = rv();
      const a = rv();
      const b = rv();
      if (len(b) < 0.5) continue;
      expect(footOnLine(rot(p, c, s), rot(a, c, s), rot(b, c, s)).dist).toBeCloseTo(
        footOnLine(p, a, b).dist,
        9
      );

      const n = rv();
      if (len(n) < 0.5) continue;
      const d = rand() * 6 - 3;
      // n·r = d rotates to (Rn)·(Rr) = d, so the plane constant is unchanged.
      expect(footOnPlane(rot(p, c, s), rot(n, c, s), d).dist).toBeCloseTo(
        footOnPlane(p, n, d).dist,
        9
      );
    }
  });
});

/* ------------------------------------------------- 3. what it must refuse */

const base: LinesPlanes3dParams = linesPlanes3d.defaults;
const mod = linesPlanes3d;

function errorsFor(patch: Record<string, unknown>): readonly string[] {
  const r = mod.validate({ ...base, ...patch });
  return r.ok ? [] : r.errors;
}

describe('validate() refuses exactly the configurations the picture would lie about', () => {
  test('a non-object, an empty object, a missing mode', () => {
    for (const bad of [null, 42, 'x', [], undefined]) {
      const r = mod.validate(bad);
      expect(r.ok).toBe(false);
      if (!r.ok) expect(r.errors.length).toBeGreaterThan(0);
    }
    expect(mod.validate({}).ok).toBe(false);
    expect(errorsFor({ mode: 'wat' })[0]).toContain('mode must be one of');
  });

  test('NaN and Infinity in any coordinate', () => {
    for (const bad of [NaN, Infinity, -Infinity]) {
      expect(errorsFor({ line1: { at: [bad, 0, 0], dir: [1, 0, 0] } })[0]).toContain('finite');
      expect(errorsFor({ line1: { at: [0, 0, 0], dir: [1, bad, 0] } })[0]).toContain('finite');
    }
  });

  test('zero direction ratios and a zero normal', () => {
    expect(errorsFor({ line1: { at: [1, 1, 1], dir: [0, 0, 0] } }).join(' ')).toContain(
      'direction ratios of zero do not define a line'
    );
    expect(
      errorsFor({ mode: 'point_plane', point: [1, 1, 1], plane1: { normal: [0, 0, 0], d: 1 } }).join(' ')
    ).toContain('zero normal does not define a plane');
  });

  test('PARALLEL LINES — no unique common perpendicular', () => {
    const e = errorsFor({
      line1: { at: [0, 0, 0], dir: [2, 1, -2] },
      line2: { at: [1, 5, 1], dir: [-4, -2, 4] }, // the same direction, reversed and scaled
    }).join(' ');
    expect(e).toContain('parallel');
    expect(e).toContain('NO unique common perpendicular');
  });

  test('A POINT ON THE LINE — nothing to measure', () => {
    const e = errorsFor({
      mode: 'point_line',
      point: [5, 4, -5], // = (1,2,−1) + 2(2,1,−2)
      line1: { at: [1, 2, -1], dir: [2, 1, -2] },
    }).join(' ');
    expect(e).toContain('lies ON line1');
  });

  test('A POINT IN THE PLANE — the foot and the image are the point', () => {
    const e = errorsFor({
      mode: 'point_plane',
      point: [5, 0, 0],
      plane1: { normal: [1, -2, 2], d: 5 },
    }).join(' ');
    expect(e).toContain('lies IN plane1');
  });

  test('A LINE LYING IN THE PLANE is distinguished from one merely PARALLEL', () => {
    // n·b = 0 for both; only the point test separates them, which is the trap
    // the master reference names.
    const contained = errorsFor({
      mode: 'line_plane',
      line1: { at: [5, 0, 0], dir: [2, 1, 0] },
      plane1: { normal: [1, -2, 2], d: 5 },
    }).join(' ');
    expect(contained).toContain('LIES IN plane1');

    const parallel = errorsFor({
      mode: 'line_plane',
      line1: { at: [9, 0, 0], dir: [2, 1, 0] },
      plane1: { normal: [1, -2, 2], d: 5 },
    }).join(' ');
    expect(parallel).toContain('strictly PARALLEL');
    expect(parallel).not.toContain('LIES IN');
  });

  test('NEAR-PARALLEL planes are refused — the faces would draw on top of each other', () => {
    /*
     * The COINCIDENT refusal's stated reason is "the two faces would be drawn
     * on top of each other" — and until this floor existed, a pair 0.06° apart
     * was ADMITTED and did exactly that, printing "θ 0.1°". The parallel test
     * is |n1×n2| ≤ 1e-9·|n1||n2|, about 0.0001°, which is a numerical
     * degeneracy guard and was never a legibility one. Found by an independent
     * verifier.
     *
     * The floor is enforced on the MEASURED arm separation in pixels, so it is
     * board-aware like every other floor here; MIN_DIHEDRAL_DEG only decides
     * which of the two messages is the honest one.
     */
    const wedge = (tilt: number) => ({
      ...base,
      mode: 'two_planes' as const,
      plane1: { normal: [0, 0, 1] as Vec3, d: 0 },
      plane2: { normal: [tilt, 0, 1] as Vec3, d: 0 },
    });

    for (const tilt of [0.001, 0.01, 0.05, 0.1]) {
      const r = mod.validate(wedge(tilt));
      expect([tilt, r.ok]).toEqual([tilt, false]);
      if (!r.ok) {
        const text = r.errors.join(' ');
        expect(text).toContain('nearly parallel');
        // It must NOT blame the camera. What it says about the cameras is now
        // MEASURED (`no other view opens them either`) rather than asserted —
        // see the case below for why the assertion could not stay.
        expect(text).toContain('no other view opens them either');
        expect(text).not.toMatch(/looking down the crease|try (standard|swing|high)/);
      }
    }

    /*
     * WHY THE MESSAGE NO LONGER CLAIMS "no view and no board size changes
     * that". That sentence was false on both halves, and this is the payload
     * that falsifies it: θ = 8.5°, UNDER the 8.6° floor, where `swing` still
     * separates the arms by 10.08px at 343x236 — over the 10px floor — and
     * validates clean. The old text refused it while denying that any camera
     * could help, which is the very advice-that-sends-you-nowhere this
     * widget's refusals exist to avoid. (The board half was false further out
     * still: at θ = 5° the arms are 15.4px apart at 900x430.)
     *
     * MIN_DIHEDRAL_DEG is an upper bound on what any camera can do at the
     * binding board, and measurement puts it within 1.4% of attained — so the
     * arms are measured first and θ explains the answer only when nothing
     * opens them.
     */
    const nearFloor = {
      ...base,
      mode: 'two_planes' as const,
      view: 'standard' as const,
      plane1: { normal: [0, 0, 1] as Vec3, d: 1 },
      plane2: {
        normal: [Math.sin((8.5 * Math.PI) / 180), 0, Math.cos((8.5 * Math.PI) / 180)] as Vec3,
        d: 1,
      },
    };
    expect(computeDerived(nearFloor).angle_deg).toBeLessThan(MIN_DIHEDRAL_DEG);
    const near = mod.validate(nearFloor);
    expect(near.ok).toBe(false);
    if (!near.ok) {
      // swing is named, and naming it is only allowed because it validates.
      expect(near.errors.join(' ')).toContain('clean in swing');
      expect(mod.validate({ ...nearFloor, view: 'swing' as const }).ok).toBe(true);
    }

    // A dihedral wide enough to read is admitted, and the boundary sits where
    // the arithmetic in MIN_ARM_SEPARATION_PX's comment says it should.
    for (const tilt of [0.2, 0.5, 1, 3]) {
      const r = mod.validate(wedge(tilt));
      expect([tilt, r.ok ? [] : r.errors]).toEqual([tilt, []]);
    }
    let lo = 0;
    let hi = 1;
    for (let k = 0; k < 40; k++) {
      const m = (lo + hi) / 2;
      if (mod.validate(wedge(m)).ok) hi = m;
      else lo = m;
    }
    const boundary = computeDerived(wedge(hi)).angle_deg;
    expect(boundary).toBeGreaterThan(MIN_DIHEDRAL_DEG);
    expect(boundary).toBeLessThan(15);

    // And the book's own pair — 79.02° — is nowhere near the floor.
    expect(mod.validate(CASES.two_planes).ok).toBe(true);
  });

  test('COINCIDENT planes are named as coincident, PARALLEL ones as parallel', () => {
    const coincident = errorsFor({
      mode: 'two_planes',
      plane1: { normal: [1, -2, 2], d: 6 },
      plane2: { normal: [2, -4, 4], d: 12 }, // literally the same plane
    }).join(' ');
    expect(coincident).toContain('COINCIDENT');

    const parallel = errorsFor({
      mode: 'two_planes',
      plane1: { normal: [1, -2, 2], d: 6 },
      plane2: { normal: [1, -2, 2], d: 15 },
    }).join(' ');
    expect(parallel).toContain('PARALLEL');
    expect(parallel).not.toContain('COINCIDENT');
  });

  test('A LINE ALONG THE CAMERA’S OWN LINE OF SIGHT is refused, and the cause is DIAGNOSED', () => {
    // The kernel of view "standard" is its own view direction: a line with
    // that direction projects to a single point.
    const cam = cameraFor('standard');
    const payload = {
      ...base,
      mode: 'point_line' as const,
      view: 'standard' as ViewId,
      point: [0, 0, 3] as Vec3,
      line1: { at: [0, 0, 0] as Vec3, dir: cam.view },
      show_axes: false,
    };
    const e = errorsFor(payload).join(' ');
    // It must say the camera is looking ALONG the segment — the foreshortening
    // branch — rather than asserting that cause unconditionally.
    expect(e).toMatch(/looking along it/);
    const named = (['swing', 'high'] as ViewId[]).filter((v) => e.includes(v));
    expect(named.length).toBeGreaterThan(0);
    for (const v of named) {
      const fixed = mod.validate({ ...payload, view: v });
      expect([v, fixed.ok ? [] : fixed.errors]).toEqual([v, []]);
    }
  });

  test('EVERY VIEW A REFUSAL RECOMMENDS ACTUALLY WORKS — and silence means none does', () => {
    /*
     * The contract behind every "try swing or high" in this widget. Advice
     * that names a camera which also fails sends the payload generator round
     * a loop it cannot get out of, and advice that blames the camera when the
     * geometry is at fault is worse than no advice at all.
     *
     * So: sweep, collect refusals, and for each one check BOTH directions —
     * every view the message names must validate, and if it names none, no
     * view may be clean. The second half is what stops the check passing by
     * simply never recommending anything.
     */
    const rand = rng(20260906);
    let refusals = 0;
    let suggestions = 0;
    let honestSilences = 0;
    for (let i = 0; i < 1200; i++) {
      const scale = [0.1, 1, 60][i % 3];
      const rv = (): Vec3 => [
        (rand() * 2 - 1) * scale,
        (rand() * 2 - 1) * scale,
        (rand() * 2 - 1) * scale,
      ];
      const modes = ['two_lines', 'point_line', 'point_plane', 'line_plane', 'two_planes'] as const;
      const view = (['standard', 'swing', 'high'] as ViewId[])[i % 3];
      const p = {
        mode: modes[i % modes.length],
        view,
        point: rv(),
        line1: { at: rv(), dir: rv() },
        line2: { at: rv(), dir: rv() },
        plane1: { normal: rv(), d: (rand() * 2 - 1) * scale },
        plane2: { normal: rv(), d: (rand() * 2 - 1) * scale },
        show_image: i % 2 === 0,
        show_axes: i % 4 === 0,
        caption: 'sweep',
      };
      const r = mod.validate(p);
      if (r.ok) continue;
      refusals++;
      const text = r.errors.join(' ');
      const others = (['standard', 'swing', 'high'] as ViewId[]).filter((v) => v !== view);
      const named = others.filter((v) => text.includes(v));
      const clean = others.filter((v) => mod.validate({ ...p, view: v }).ok);

      for (const v of named) {
        // A named view must actually validate.
        expect([i, v, mod.validate({ ...p, view: v }).ok]).toEqual([i, v, true]);
        suggestions++;
      }
      if (named.length === 0 && clean.length === 0) honestSilences++;
      // Never stay silent while a clean view exists AND the message is one of
      // the view-fixable kinds.
      if (named.length === 0 && clean.length > 0) {
        expect([i, text.includes('short in ALL THREE views') || text.includes('bounded') ||
          text.includes('lies ON') || text.includes('lies IN') || text.includes('PARALLEL') ||
          text.includes('COINCIDENT') || text.includes('does not define') ||
          text.includes('derived coordinate') || text.includes('readout value') ||
          text.includes('from the origin') || text.includes('meet far outside')]).toEqual([i, true]);
      }
    }
    expect(refusals).toBeGreaterThan(50);
    expect(suggestions).toBeGreaterThan(20);
    expect(honestSilences).toBeGreaterThan(0);
  });

  test('AN EDGE-ON PLANE is refused, with a way out', () => {
    // A plane whose normal is perpendicular to the view direction is seen
    // exactly edge-on and projects to a line.
    const cam = cameraFor('standard');
    const n = unit(cross(cam.view, [0, 0, 1]));
    const payload = {
      ...base,
      mode: 'point_plane' as const,
      view: 'standard' as ViewId,
      point: mul(n, 3),
      plane1: { normal: n, d: 0 },
      show_axes: false,
    };
    const e = errorsFor(payload).join(' ');
    expect(e).toContain('edge-on');
    // The message names the views it CHECKED and found clean, so every view it
    // names must actually work. Anything less is advice that loops.
    const named = (['standard', 'swing', 'high'] as ViewId[]).filter(
      (v) => v !== 'standard' && e.includes(v)
    );
    expect(named.length).toBeGreaterThan(0);
    for (const v of named) {
      expect([v, mod.validate({ ...payload, view: v }).ok]).toEqual([v, true]);
    }
  });

  test("A SCENE FLATTER THAN THE BOARD is refused — the verifier's finding", () => {
    /*
     * Built, not searched. The projected height of a point is r·up, so a scene
     * living in the plane spanned by `right` and `view` — the two camera axes
     * perpendicular to `up` — projects into a thin HORIZONTAL band with no
     * vertical extent at all. Two non-parallel lines in that plane necessarily
     * meet, so this is a perfectly legal intersecting-lines payload: nothing
     * is off-board, no label collides, no segment is short. Only the
     * ink-coverage ratio collapses.
     *
     * validate() admitted a payload of this shape until an independent
     * verifier ran the real gate over 900 admitted payloads and found one at
     * 5.0% of a 900x430 board.
     */
    const cam = cameraFor('standard');
    const flat = {
      ...base,
      view: 'standard' as ViewId,
      show_axes: false,
      line1: { at: [0, 0, 0] as Vec3, dir: cam.right },
      line2: { at: [0, 0, 0] as Vec3, dir: add(cam.right, cam.view) as Vec3 },
    };
    const r = mod.validate(flat);
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.errors.join(' ')).toContain('drawn content covers');

    // And this is NOT a blanket ban on wide figures: the SAME geometry seen
    // from a camera it is not flat against is admitted. That is the half that
    // proves the check discriminates rather than just rejects.
    const opened = mod.validate({ ...flat, view: 'high' });
    expect([opened.ok ? [] : opened.errors]).toEqual([[]]);
  });

  test('coordinates beyond ±COORD_MAX', () => {
    expect(errorsFor({ line1: { at: [COORD_MAX * 2, 0, 0], dir: [1, 0, 0] } })[0]).toContain(
      `±${COORD_MAX}`
    );
  });

  test('fmt never prints "-0", and agrees with the path builder', () => {
    // (-0.004).toFixed(2) is "-0.00", which trims to "-0". The path builder
    // normalised negative zero and `fmt` did not, so the same number could
    // reach the board as "-0" in a readout and "0.00" in a path.
    for (const n of [-0, -1e-9, -0.0004, -0.004, -0.00499]) {
      expect(fmt(n)).toBe('0');
      expect(fmt(n, 1)).toBe('0');
    }
    // and a real negative still reads as negative
    expect(fmt(-0.4)).toBe('-0.4');
    expect(fmt(-0.006)).toBe('-0.01');
    expect(fmt(-12.5)).toBe('-12.5');
    // no readout of any reference case contains a negative zero
    for (const [name, p] of Object.entries(CASES)) {
      const v = layout(p, REF_W, REF_H, FRAME).readoutValue;
      expect([name, /-0(?![.\d])/.test(v)]).toEqual([name, false]);
    }
  });

  test('a non-finite coordinate cannot pass validate() on a comparison', () => {
    /*
     * Every floor in fitProblems is a comparison, and `NaN < MIN` and
     * `NaN > MAX` are BOTH false — so a NaN slips through a floor written in
     * either direction. The floors are in the NaN-safe polarity, but that is
     * six separate comparisons staying right forever; the explicit scan is
     * what actually closes the class.
     *
     * Asserted by making the scan run on a payload whose layout is finite
     * (it must NOT fire) and by checking the polarity of each floor directly
     * against NaN (each must fire).
     */
    expect(mod.validate(CASES.skew_lines).ok).toBe(true);

    const floorFires = (value: number, min: number) => !(value >= min);
    expect(floorFires(NaN, 14)).toBe(true);
    expect(floorFires(NaN, 700)).toBe(true);
    expect(floorFires(NaN, 0.07)).toBe(true);
    expect(floorFires(NaN, 70)).toBe(true);
    expect(floorFires(NaN, 10)).toBe(true);
    // The shape that does NOT work, kept as the contrast. The comparison IS
    // the assertion here -- this line records that `NaN < x` is false, which
    // is the bug `floorFires` was written to avoid -- so the rule is off for
    // it rather than the assertion being rewritten into something else.
    // eslint-disable-next-line use-isnan
    expect(NaN < 14).toBe(false);

    // And the inputs that could produce one are refused before layout runs.
    for (const bad of [NaN, Infinity, -Infinity]) {
      expect(mod.validate({ ...base, line1: { at: [bad, 0, 0], dir: [1, 0, 0] } }).ok).toBe(false);
      expect(mod.validate({ ...base, line2: { at: [0, 0, 0], dir: [0, bad, 1] } }).ok).toBe(false);
      expect(
        mod.validate({ ...base, mode: 'point_plane', point: [1, 1, 1], plane1: { normal: [0, 0, 1], d: bad } }).ok
      ).toBe(false);
    }
  });

  test('validate() never throws, on anything', () => {
    const junk: unknown[] = [
      undefined, null, 0, '', [], {}, { mode: 'two_lines' },
      { mode: 'two_lines', line1: 'x' },
      { mode: 'two_lines', line1: { at: [1, 2], dir: [1, 2, 3] }, line2: base.line2 },
      { mode: 'point_plane', point: [1, 2, 3], plane1: { normal: [1, 1, 1], d: 'x' } },
      { mode: 'two_planes', plane1: null, plane2: undefined },
      { ...base, caption: 42 },
      { ...base, show_axes: 'yes' },
    ];
    for (const j of junk) {
      expect(() => mod.validate(j)).not.toThrow();
      const r = mod.validate(j);
      if (!r.ok) expect(r.errors.every((e) => typeof e === 'string' && e.length > 0)).toBe(true);
    }
  });
});

/* -------------------------------------- 4. the schema is a subset of the gate */

/**
 * The cases come from ../reference-cases.ts, which the render harness in
 * lib/widgets/__tests__/render-trees.test.tsx imports too — one list, so the
 * two suites cannot disagree about which payloads matter.
 */
describe('the legal range renders — schema ⊆ gate', () => {
  test.each(Object.keys(CASES))('%s is a payload validate() admits', (name) => {
    const r = mod.validate(CASES[name]);
    expect([name, r.ok ? [] : r.errors]).toEqual([name, []]);
  });

  test.each(Object.keys(CASES))('%s clears the gate floors at every board size', (name) => {
    for (const [w, h] of [
      [343, 236],
      [495, 270],
      [900, 430],
    ]) {
      const L = layout(CASES[name], w, h, FRAME);
      const all = [
        ...L.segs.flatMap((g) => [g.a, g.b]),
        ...L.polys.flatMap((q) => [...q.points]),
        ...L.markers.map((m) => m.at),
      ];
      for (const q of all) {
        expect(Number.isFinite(q.x) && Number.isFinite(q.y)).toBe(true);
        expect(q.x).toBeGreaterThan(-1);
        expect(q.y).toBeGreaterThan(-1);
        expect(q.x).toBeLessThan(w + 1);
        expect(q.y).toBeLessThan(h + 1);
      }
      /*
       * Assertion 2's ink coverage, computed the way verify-render computes
       * it. The threshold here is the gate's HARD floor (0.05), not its warn
       * threshold (0.20), and that is a deliberate, measured decision rather
       * than a relaxation to make a test pass.
       *
       * The camera scale is UNIFORM — it has to be, because a non-uniform one
       * would stop a right angle looking like a right angle, and half the
       * figures in this chapter are about right angles — and the world z-axis
       * is pinned to screen-vertical, which is the convention the whole
       * chapter's figures use. Between them those two fix the projected
       * aspect ratio of a scene, and a tall scene on a 2.1:1 landscape board
       * therefore cannot fill the width no matter what. The default skew-line
       * payload measures 0.206 / 0.177 / 0.190 at the three boards: a `warn`
       * at two of them, an error at none. Raising it would mean distorting
       * the projection, which is the wrong trade.
       */
      const xs = all.map((q) => q.x);
      const ys = all.map((q) => q.y);
      const cover =
        ((Math.max(...xs) - Math.min(...xs)) * (Math.max(...ys) - Math.min(...ys))) / (w * h);
      expect([name, w, cover > 0.05]).toEqual([name, w, true]);
    }
  });

  /**
   * THE CORNERS, NOT THE ENDPOINTS.
   *
   * A payload carries up to 16 numbers, so 2^16 axis corners is not a set
   * anyone enumerates — and CLAUDE.md is right that sweeping one param at a
   * time misses every bug that needs two extremes at once. What makes this
   * tractable is that the camera AUTO-FITS: the absolute magnitude of every
   * coordinate divides out of the drawn picture entirely (asserted directly,
   * two tests below), so the only extremes that reach the board are SHAPE
   * extremes. Those are swept exhaustively here — 4 shape axes crossed with 3
   * views crossed with 3 board sizes — plus a 1500-payload random sweep whose
   * seed is fixed so a failure is reproducible.
   */
  test('the SHAPE corners, crossed with every view and every board', () => {
    const near = 1e-3;
    const shapes: [string, Partial<LinesPlanes3dParams>][] = [
      ['near-parallel lines', { line1: { at: [0, 0, 0], dir: [1, 0, 0] }, line2: { at: [0, 2, 1], dir: [1, near, near] } }],
      ['perpendicular lines', { line1: { at: [0, 0, 0], dir: [1, 0, 0] }, line2: { at: [0, 2, 1], dir: [0, 0, 1] } }],
      ['almost-touching lines', { line1: { at: [0, 0, 0], dir: [1, 0, 0] }, line2: { at: [0, 0, near], dir: [0, 1, 0] } }],
      ['far-apart lines', { line1: { at: [0, 0, 0], dir: [1, 0, 0] }, line2: { at: [0, 0, 900], dir: [0, 1, 0] } }],
    ];
    let admitted = 0;
    for (const [label, patch] of shapes) {
      for (const view of ['standard', 'swing', 'high'] as ViewId[]) {
        for (const axes of [false, true]) {
          const p = { ...base, ...patch, view, show_axes: axes };
          const r = mod.validate(p);
          if (!r.ok) continue; // a refusal is a correct outcome; it is not a corner that ships
          admitted++;
          for (const [w, h] of [[343, 236], [495, 270], [900, 430]]) {
            const L = layout(r.params, w, h, FRAME);
            const pts = [
              ...L.segs.flatMap((g) => [g.a, g.b]),
              ...L.polys.flatMap((q) => [...q.points]),
              ...L.markers.map((m) => m.at),
            ];
            for (const q of pts) {
              expect([label, view, axes, w, Number.isFinite(q.x) && Number.isFinite(q.y)]).toEqual([
                label, view, axes, w, true,
              ]);
              expect([label, view, axes, w, q.x > -1 && q.x < w + 1 && q.y > -1 && q.y < h + 1]).toEqual([
                label, view, axes, w, true,
              ]);
            }
            for (const l of L.labels) {
              expect(Number.isFinite(l.x) && Number.isFinite(l.y)).toBe(true);
            }
          }
        }
      }
    }
    // If every shape corner were refused this test would pass vacuously —
    // exactly the "passes for the wrong reason" failure the verifiers found
    // four times in one week. So assert that some were actually drawn.
    expect(admitted).toBeGreaterThan(8);
  });

  test('a 1500-payload random sweep: admitted ⇒ nothing off-board, no NaN', () => {
    const rand = rng(20260906);
    let admitted = 0;
    let refused = 0;
    for (let i = 0; i < 1500; i++) {
      const scale = [0.01, 1, 100][i % 3];
      const rv = (): Vec3 => [
        (rand() * 2 - 1) * scale,
        (rand() * 2 - 1) * scale,
        (rand() * 2 - 1) * scale,
      ];
      const modes = ['two_lines', 'point_line', 'point_plane', 'line_plane', 'two_planes'] as const;
      const p = {
        mode: modes[i % modes.length],
        view: (['standard', 'swing', 'high'] as ViewId[])[(i >> 2) % 3],
        point: rv(),
        line1: { at: rv(), dir: rv() },
        line2: { at: rv(), dir: rv() },
        plane1: { normal: rv(), d: (rand() * 2 - 1) * scale },
        plane2: { normal: rv(), d: (rand() * 2 - 1) * scale },
        show_image: i % 2 === 0,
        show_axes: i % 5 === 0,
        caption: 'sweep',
      };
      const r = mod.validate(p);
      if (!r.ok) {
        refused++;
        expect(r.errors.every((e) => typeof e === 'string' && e.length > 0)).toBe(true);
        continue;
      }
      admitted++;
      for (const [w, h] of [[343, 236], [900, 430]]) {
        const L = layout(r.params, w, h, FRAME);
        const pts = [
          ...L.segs.flatMap((g) => [g.a, g.b]),
          ...L.polys.flatMap((q) => [...q.points]),
          ...L.markers.map((m) => m.at),
        ];
        for (const q of pts) {
          expect([i, Number.isFinite(q.x) && Number.isFinite(q.y)]).toEqual([i, true]);
          expect([i, q.x > -1 && q.x < w + 1 && q.y > -1 && q.y < h + 1]).toEqual([i, true]);
        }
        const boxes = L.labels.map((l) => ({
          x0: l.x,
          x1: l.x + l.text.length * LABEL_SIZE * CHAR_W,
          y0: l.y - LABEL_SIZE * 0.82,
          y1: l.y - LABEL_SIZE * 0.82 + LABEL_SIZE * 1.15,
        }));
        for (const b of boxes) {
          expect([i, b.x0 > -1 && b.x1 < w + 1 && b.y0 > -1 && b.y1 < h + 1]).toEqual([i, true]);
        }
        if (w === REF_W) {
          for (let a = 0; a < boxes.length; a++) {
            for (let c = a + 1; c < boxes.length; c++) {
              const A = boxes[a];
              const B = boxes[c];
              expect([i, A.x0 < B.x1 && B.x0 < A.x1 && A.y0 < B.y1 && B.y0 < A.y1]).toEqual([i, false]);
            }
          }
        }
      }
      /*
       * ASSERTION 2, AT EVERY BOARD, ON EVERY ADMITTED PAYLOAD.
       *
       * This is the check the first version of this sweep did not make, and
       * an independent verifier found the gap by running the REAL gate over
       * 900 random admitted payloads: one of them covered 5.0% of a 900x430
       * board and verify-render called it degenerate. validate() admitted it,
       * which is a straight CLAUDE.md §3 violation — the schema's legal range
       * has to be a SUBSET of what renders correctly.
       *
       * Note WHICH board it failed at. Every other floor in this widget is a
       * fixed device-point quantity against a shrinking frame, so 343x236
       * binds. Coverage is a RATIO against the board's aspect, and a flat
       * scene fails at the WIDEST board while passing the narrowest — so
       * "measure the bound at the smallest board" is the wrong rule for this
       * one assertion, and checking only 343x236 is what let it through.
       */
      for (const [bw, bh] of [[343, 236], [495, 270], [900, 430]]) {
        const B = layout(r.params, bw, bh, FRAME);
        const xs: number[] = [];
        const ys: number[] = [];
        for (const g of B.segs) { xs.push(g.a.x, g.b.x); ys.push(g.a.y, g.b.y); }
        for (const q of B.polys) for (const t of q.points) { xs.push(t.x); ys.push(t.y); }
        for (const mk of B.markers) {
          xs.push(mk.at.x - mk.r, mk.at.x + mk.r);
          ys.push(mk.at.y - mk.r, mk.at.y + mk.r);
        }
        const cover =
          ((Math.max(...xs) - Math.min(...xs)) * (Math.max(...ys) - Math.min(...ys))) / (bw * bh);
        expect([i, bw, cover > 0.05]).toEqual([i, bw, true]);
      }

      const der = computeDerived(r.params);
      for (const [k, val] of Object.entries(der)) {
        expect([i, k, Number.isFinite(val)]).toEqual([i, k, true]);
      }
    }
    // 1341 admitted / 159 refused at this seed. Both bounds matter: a sweep
    // that refused everything would pass vacuously, and one that refused
    // nothing would mean the degeneracy checks never fire.
    expect(admitted).toBeGreaterThan(300);
    expect(refused).toBeGreaterThan(0);
  });
});

/* ---------------------------------- 5. the properties the fit is claimed on */

describe('the auto-fit is what makes magnitude irrelevant — asserted, not claimed', () => {
  const same = (a: LinesPlanes3dParams, b: LinesPlanes3dParams) => {
    const A = layout(a, REF_W, REF_H, FRAME);
    const B = layout(b, REF_W, REF_H, FRAME);
    expect(A.segs.length).toBe(B.segs.length);
    for (let i = 0; i < A.segs.length; i++) {
      expect(A.segs[i].a.x).toBeCloseTo(B.segs[i].a.x, 6);
      expect(A.segs[i].a.y).toBeCloseTo(B.segs[i].a.y, 6);
      expect(A.segs[i].b.x).toBeCloseTo(B.segs[i].b.x, 6);
      expect(A.segs[i].b.y).toBeCloseTo(B.segs[i].b.y, 6);
    }
    expect(A.labels.map((l) => l.text)).toEqual(B.labels.map((l) => l.text));
  };

  test('scaling the direction ratios does not change one pixel', () => {
    // (2,1,−2) and (6,3,−6) are the SAME line. A picture that differed would
    // mean the drawn extent came from the arbitrary magnitude of the ratios,
    // which is exactly what it did until the reach was rebuilt from intrinsic
    // lengths only.
    same(base, {
      ...base,
      line1: { at: base.line1.at, dir: mul(base.line1.dir, 3) },
      line2: { at: base.line2.at, dir: mul(base.line2.dir, 7) },
    });
  });

  test('REVERSING a direction ratio draws the same line, the other way round', () => {
    // Deliberately NOT pixel-identity. b and −b name the same line but not the
    // same DIRECTED line, and the figure shows an arrowhead — so the segment
    // must be the same segment with its ends swapped, and the arrow must have
    // turned round. Asserting identity here would be asserting that the arrow
    // means nothing.
    const A = layout(base, REF_W, REF_H, FRAME);
    const B = layout(
      { ...base, line1: { at: base.line1.at, dir: mul(base.line1.dir, -1) } },
      REF_W,
      REF_H,
      FRAME
    );
    const a0 = A.segs[0];
    const b0 = B.segs[0];
    expect(b0.a.x).toBeCloseTo(a0.b.x, 6);
    expect(b0.a.y).toBeCloseTo(a0.b.y, 6);
    expect(b0.b.x).toBeCloseTo(a0.a.x, 6);
    expect(b0.b.y).toBeCloseTo(a0.a.y, 6);
    expect(Math.abs(A.arrows[0].angle - B.arrows[0].angle)).toBeCloseTo(Math.PI, 6);
  });

  test('TRANSLATING `at` ALONG ITS OWN LINE does not change one pixel', () => {
    /*
     * THE FREE PARAMETER THE SUITE WAS MISSING, AND THE ONE THAT CAUGHT A BUG.
     *
     * `r = a + λb` has infinitely many valid `a`: every point of the line
     * names the same line. The suite already covered the other two freedoms
     * of the equation — scaling `b` and reversing `b` — and covered scaling
     * the whole scene, but never this one. An independent verifier found the
     * consequence: with `reach` built partly from `|a2 − a1|`, sliding
     * `line2.at` along its own line changed the picture and then, at
     * `at = (0,100,2)`, made validate() REFUSE a configuration it admitted at
     * `at = (0,0,2)` — with `computeDerived` returning d = 2, θ = 90 for both.
     *
     * Swept over every mode that owns a line, at every view, with the axes
     * both on and off. Axes ON is the strict case: it pins the origin into
     * the fit, so nothing may move relative to it either.
     */
    const slide = (l: { at: Vec3; dir: Vec3 }, t: number) => ({
      at: add(l.at, mul(l.dir, t)) as Vec3,
      dir: l.dir,
    });

    const cases: [string, LinesPlanes3dParams][] = [
      ['two_lines', CASES.skew_lines],
      ['intersecting', CASES.intersecting_lines],
      ['point_line', CASES.point_line],
      ['line_plane', CASES.line_plane],
    ];

    let compared = 0;
    for (const [name, params] of cases) {
      for (const view of ['standard', 'swing', 'high'] as ViewId[]) {
        for (const show_axes of [false, true]) {
          const p0 = { ...params, view, show_axes };
          const r0 = mod.validate(p0);
          if (!r0.ok) continue;
          const A = layout(r0.params, REF_W, REF_H, FRAME);

          // Slide each base point a long way along its own direction, in both
          // senses, including magnitudes far larger than the figure itself.
          /*
           * ONE LINE AT A TIME, AND NOT ONLY BOTH TOGETHER.
           *
           * This loop used to slide both bases in the same breath, and that
           * is why it passed over a live bug for a whole verification round:
           * `d` is |(a2−a1)·(b1×b2)|/|b1×b2|, and for the coplanar case the
           * two slides cancelled inside the triple product, so `d` stayed
           * EXACTLY 0.0 and the `d > 0` test it fed never saw the noise.
           * Slide line1 alone by 3.7 and `d` becomes 5.4e−16 — the same pair
           * of lines, a reach of 1.0e−15, a figure of 0.00px, and a REFUSAL.
           * The freedom is per-line, so the sweep has to be per-line too.
           */
          const plans: [string, (q: LinesPlanes3dParams, t: number) => LinesPlanes3dParams][] = [
            ['both', (q, t) => ({ ...q, line1: slide(q.line1, t), line2: slide(q.line2, -t * 1.7) })],
            ['line1 only', (q, t) => ({ ...q, line1: slide(q.line1, t) })],
            ['line2 only', (q, t) => ({ ...q, line2: slide(q.line2, t) })],
          ];
          for (const t of [-97.3, -12, -3.7, -0.5, 0.5, 3.7, 12, 97.3]) {
          for (const [plan, apply] of plans) {
            const p1 = apply(p0, t);
            const r1 = mod.validate(p1);
            // A slide along the line must never change the VERDICT either.
            expect([name, view, show_axes, plan, t, r1.ok ? [] : r1.errors]).toEqual([
              name, view, show_axes, plan, t, [],
            ]);
            if (!r1.ok) continue;
            const B = layout(r1.params, REF_W, REF_H, FRAME);

            expect([name, view, t, B.segs.length]).toEqual([name, view, t, A.segs.length]);
            for (let i = 0; i < A.segs.length; i++) {
              expect(B.segs[i].a.x).toBeCloseTo(A.segs[i].a.x, 6);
              expect(B.segs[i].a.y).toBeCloseTo(A.segs[i].a.y, 6);
              expect(B.segs[i].b.x).toBeCloseTo(A.segs[i].b.x, 6);
              expect(B.segs[i].b.y).toBeCloseTo(A.segs[i].b.y, 6);
            }
            expect(B.labels.map((l) => l.text)).toEqual(A.labels.map((l) => l.text));
            for (let i = 0; i < A.labels.length; i++) {
              expect(B.labels[i].x).toBeCloseTo(A.labels[i].x, 6);
              expect(B.labels[i].y).toBeCloseTo(A.labels[i].y, 6);
            }
            expect(B.readoutValue).toEqual(A.readoutValue);

            // and every derived number is untouched
            const dA = computeDerived(r0.params);
            const dB = computeDerived(r1.params);
            for (const k of Object.keys(dA)) {
              expect([name, k, t]).toEqual([name, k, t]);
              expect(dB[k]).toBeCloseTo(dA[k], 6);
            }
            compared++;
          }
          }
        }
      }
    }
    // Guard against a vacuous pass: if every payload had been refused, the
    // loops above would assert nothing at all.
    expect(compared).toBeGreaterThan(60);
  });

  test('scaling the whole scene by 1000 does not change one pixel', () => {
    const k = 1000;
    same(
      { ...base, show_axes: true },
      {
        ...base,
        show_axes: true,
        line1: { at: mul(base.line1.at, k), dir: mul(base.line1.dir, k) },
        line2: { at: mul(base.line2.at, k), dir: mul(base.line2.dir, k) },
      }
    );
  });

  test('the layout is a pure function — same payload, same pixels, every time', () => {
    for (const name of Object.keys(CASES)) {
      const a = JSON.stringify(layout(CASES[name], REF_W, REF_H, FRAME));
      const b = JSON.stringify(layout(CASES[name], REF_W, REF_H, FRAME));
      expect([name, a === b]).toEqual([name, true]);
    }
  });

  test('no chrome constant scales with the board', () => {
    // The frame rule, as a check: the label positions must move with the box
    // but the label SIZES and marker radii must not. Marker radii are the
    // observable ones in the layout output.
    const small = layout(base, REF_W, REF_H, FRAME);
    const big = layout(base, 900, 430, FRAME);
    expect(small.markers.map((m) => m.r)).toEqual(big.markers.map((m) => m.r));
    expect(small.labels.map((l) => l.text)).toEqual(big.labels.map((l) => l.text));
  });
});

/* ---------------------------------------------- 6. derived / caption contract */

describe('derived', () => {
  test('derived matches what computeDerived actually returns', () => {
    expect(Object.keys(mod.computeDerived(mod.defaults)).sort()).toEqual([...mod.derived].sort());
    for (const key of Object.keys(mod.derivedAliases)) expect(mod.derived).toContain(key);
  });

  test('every number in every readout comes from computeDerived', () => {
    // Rule 2's whole point: there is ONE number, and both the readout and a
    // {{token}} caption read it from here. This is a WIRING assertion, not a
    // maths one — the maths is checked above by independent routes. What it
    // catches is a second call site drifting from the first, which is how
    // circuit_network came to print a resistance derived from a capacitance.
    const trim = (n: number, dp = 2) =>
      n.toFixed(dp).replace(/0+$/, '').replace(/\.$/, '');
    for (const name of Object.keys(CASES)) {
      const der = computeDerived(CASES[name]);
      const value = layout(CASES[name], 900, 430, FRAME).readoutValue;
      // Whatever a mode prints, every numeral in it must be a derived value
      // rendered at the widget's own precision — no third source.
      const numerals = value.match(/-?\d+(?:\.\d+)?/g) ?? [];
      expect([name, numerals.length]).not.toEqual([name, 0]);
      const allowed = new Set<string>();
      for (const v of Object.values(der)) {
        allowed.add(trim(v));
        allowed.add(trim(v, 1));
      }
      for (const numeral of numerals) {
        expect([name, numeral, allowed.has(numeral)]).toEqual([name, numeral, true]);
      }
    }
  });

  test('THE FIGURE DRAWS THE ANGLE THE READOUT PRINTS (two_planes)', () => {
    // The one place in this widget where the picture and the number could
    // disagree silently. The readout's θ comes from the DOT PRODUCT of the two
    // normals; the drawn arms are built from CROSS PRODUCTS with the crease
    // direction and then sign-corrected. Two different routes to one angle —
    // and until the sign correction was added, the drawn one could be the
    // obtuse supplement while the printed one stayed acute.
    const rand = rng(31415);
    let checked = 0;
    for (let i = 0; i < 300; i++) {
      const rv = (): Vec3 => [rand() * 6 - 3, rand() * 6 - 3, rand() * 6 - 3];
      const n1 = rv();
      const n2 = rv();
      const d1 = rand() * 6 - 3;
      const d2 = rand() * 6 - 3;
      const p = {
        ...base,
        mode: 'two_planes' as const,
        plane1: { normal: n1, d: d1 },
        plane2: { normal: n2, d: d2 },
      };
      const r = mod.validate(p);
      if (!r.ok) continue;
      const L = layout(r.params, 900, 430, FRAME);
      expect(L.dihedral).toBeDefined();
      const { apex, arm1, arm2 } = L.dihedral!;
      // 1. each arm lies in its OWN plane
      expect(Math.abs(dot(n1, add(apex, arm1)) - d1)).toBeLessThan(1e-8 * (len(n1) * len(apex) + Math.abs(d1) + 1));
      expect(Math.abs(dot(n2, add(apex, arm2)) - d2)).toBeLessThan(1e-8 * (len(n2) * len(apex) + Math.abs(d2) + 1));
      // 2. the dihedral is measured perpendicular to the crease, so both arms
      //    must be perpendicular to it — otherwise the angle drawn is a
      //    projection of the dihedral, not the dihedral.
      const crease = cross(n1, n2);
      expect(Math.abs(dot(unit(arm1), unit(crease)))).toBeLessThan(1e-9);
      expect(Math.abs(dot(unit(arm2), unit(crease)))).toBeLessThan(1e-9);
      // 3. THE ANGLE BETWEEN THE ARMS IS THE ANGLE ON THE BOARD.
      const drawn = (Math.acos(Math.min(1, dot(unit(arm1), unit(arm2)))) * 180) / Math.PI;
      const printed = computeDerived(r.params).angle_deg;
      expect([i, Math.abs(drawn - printed) < 1e-8]).toEqual([i, true]);
      // and it is the ACUTE one, which is the convention the chapter states.
      expect(drawn).toBeLessThanOrEqual(90 + 1e-9);
      checked++;
    }
    expect(checked).toBeGreaterThan(100);
  });

  test('two_lines reports the angle and the distance the master reference does', () => {
    const der = computeDerived(base);
    expect(der.distance).toBeCloseTo(4, 12);
    // cos θ = |(2)(1)+(1)(2)+(−2)(2)| / (3·3) = 0/9 ⇒ the skew lines of
    // Example 3 are perpendicular. Independently: b1·b2 = 2+2−4 = 0.
    expect(dot(base.line1.dir, base.line2.dir)).toBe(0);
    expect(der.angle_deg).toBeCloseTo(90, 10);
  });
});
