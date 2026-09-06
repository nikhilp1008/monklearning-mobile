/**
 * Electric field lines, GAUSSIAN SURFACES and EQUIPOTENTIAL CONTOURS.
 *
 * Point charges by superposition, uniform field between parallel plates, the
 * three Gauss's-law surfaces NCERT actually draws, and the two equipotential
 * pictures Chapter 2 derives E = -dV/dr from. Nothing here is a worklet:
 * `field_lines` is snap-only and `animatable` is `[]` — see index.tsx's module
 * export for the v2 reason, which is no longer only about line count.
 *
 * ---------------------------------------------------------------------------
 * WHY v2 EXISTS, MEASURED
 *
 * A corpus-wide reclassification read from the book's own chunks
 * (content/reclass/physics-12.csv, 2026-09-06) gave `field_lines` ZERO
 * verdicts across all 139 physics-12 concepts, where the old name-based
 * column claimed it 41 times. v1 drew four static configurations; the book
 * draws something else. The two gap rows this file now answers, with the
 * classifier's own evidence:
 *
 *   gap_gaussian_surface (3 concepts)
 *     ch1 Electric Flux                  high  "Fig 1.10 coaxial Gaussian
 *                                              cylinder, Fig 1.11 pillbox,
 *                                              Fig 1.13 parallel sheets"
 *     ch1 Gauss's Law and Its Applications high "Fig 1.10 cylinder, Fig 1.11
 *                                              pillbox, Fig 1.12 shell with
 *                                              two dashed Gaussian spheres"
 *     ch2 Electrostatics of Conductors    med  "Fig 2.5, the Gaussian pillbox
 *                                              straddling the conductor
 *                                              surface, E = sigma/epsilon0"
 *
 *   gap_equipotential_surfaces (2 concepts)
 *     ch2 Equipotential Surfaces and Electric Field Relation  high
 *         "Fig 2.1 — two closely spaced equipotential surfaces with the
 *          perpendicular dl and field vector — driving E = -dV/dr"
 *     ch2 Electrostatic Potential and Potential Difference    med
 *
 * The chunks behind those rows could NOT be re-read while building this: the
 * only Supabase credential in the tree is the anon publishable key, and
 * `pdf_chunks` returns zero rows to it under RLS — PostgREST answers the
 * exact-count probe with a total of zero. The
 * geometry below was therefore built against the repo's own authored lesson
 * sections for the same chapters, which ARE derived from the book and are in
 * the tree — components/scenes/P12Ch01Sec52-62 and P12Ch02Sec3/5/7. Each
 * constant cites the section it came from.
 *
 * ---------------------------------------------------------------------------
 * REFERENCE RESULTS
 *
 * v1, unchanged (k = 8.988e9 N*m^2/C^2, eps0 = 8.854e-12 F/m):
 *   point, charge_uc=10, at REF_DISTANCE_M=0.10 m
 *     -> E = k*q/r^2 = 8.988e9 * 10e-6 / 0.01 = 8.988e6 N/C, radially outward
 *   dipole, charge_uc=10 (+/-10uC), SEPARATION_M=0.20 m, at the midpoint
 *     -> each charge is 0.10 m away; fields from +q and -q point the SAME
 *        direction at the midpoint (toward the negative charge) and add:
 *        E = 2 * (k*q/0.10^2) = 2 * 8.988e6 = 1.798e7 N/C
 *   like_charges, charge_uc=10, SEPARATION_M=0.20 m, at the midpoint
 *     -> equal charges, equal distance, fields point in OPPOSITE directions
 *        and cancel: E = 0 exactly, regardless of charge_uc
 *   parallel_plates, charge_uc=10 (read as sigma = 10 uC/m^2)
 *     -> E = sigma / eps0 = 10e-6 / 8.854e-12 = 1.129e6 N/C, independent of
 *        plate separation (the standard infinite-sheet capacitor result)
 *
 * v2, each one a NCERT standard result carried by an authored section:
 *
 *   gaussian_sphere, charge_uc=10, enclosed
 *     P12Ch01Sec54 "Foundation: why the flux is q over epsilon nought"
 *     -> Q_enc = 10 uC; Phi = q/eps0 = 10e-6 / 8.854e-12 = 1.1294e6 N m^2/C,
 *        and the section's whole point is that this does NOT depend on the
 *        radius: E = kq/r^2 falls as 1/r^2 while A = 4*pi*r^2 grows as r^2.
 *     -> at GAUSS_R_M = 0.075 m: E = 8.988e9*1e-5/0.075^2 = 1.5979e7 N/C
 *
 *   gaussian_sphere, charge_uc=10, NOT enclosed
 *     P12Ch01Sec53 beat 4 "Charges outside surface contribute 0 net flux"
 *     -> Q_enc = 0 exactly, so Phi = 0 exactly, WHILE E on the surface is
 *        nowhere zero. Reported E is at the surface point nearest the charge,
 *        d = CHARGE_OUTSIDE_X_M - r: at r = 0.075, d = 0.145 m,
 *        E = 8.988e9*1e-5/0.145^2 = 4.2749e6 N/C. Zero flux, non-zero field —
 *        which is the misconception the figure exists to kill.
 *
 *   gaussian_cylinder, charge_uc=10 read as lambda = 10 uC/m
 *     P12Ch01Sec55 "Derivation: field of an infinite line charge"
 *     -> Q_enc = lambda * L = 10e-6 * 0.30 = 3.0e-6 C over GAUSS_CYL_LEN_M,
 *        independent of the cylinder's radius;
 *        Phi = 3.0e-6 / 8.854e-12 = 3.3883e5 N m^2/C
 *     -> E = lambda/(2*pi*eps0*r) = 2*k*lambda/r
 *          = 2*8.988e9*1e-5/0.075 = 2.3968e6 N/C
 *     -> the two flat end caps carry ZERO flux (E is radial, E perp dA there),
 *        which is asserted numerically, not assumed — see __tests__.
 *
 *   gaussian_pillbox, charge_uc=10 read as sigma = 10 uC/m^2
 *     P12Ch01Sec56 "Derivation: field of an infinite plane sheet" and
 *     P12Ch02 Fig 2.5's conductor pillbox
 *     -> Q_enc = sigma * A_cap = 10e-6 * pi * 0.075^2 = 1.7671e-7 C
 *        (ONE cap area — the pillbox encloses one patch of the sheet. The
 *        factor-of-two trap lives here: the FLUX is 2*E*A through two caps,
 *        the CHARGE is sigma*A through one patch, and 2EA = sigma*A/eps0 is
 *        what gives E = sigma/(2 eps0).)
 *     -> Phi = 1.7671e-7 / 8.854e-12 = 1.9959e4 N m^2/C
 *     -> E = sigma/(2*eps0) = 10e-6/(2*8.854e-12) = 5.6472e5 N/C, the same
 *        everywhere including when the pillbox is moved off the sheet, where
 *        Phi collapses to 0 and E does not change at all.
 *
 *   equipotential_point, charge_uc=10
 *     P12Ch02Sec3 "Equipotential surfaces — walking the contour lines", which
 *     draws V1=100 V, V2=75 V, V3=50 V: EQUAL potential steps, so the radii
 *     r = kq/V crowd toward the charge. Contour n carries V = n*dV, so
 *     r_n = R_max/n — R_max, R_max/2, R_max/3, R_max/4.
 *     -> dV = k q / EQUI_R_MAX_M = 8.988e9*1e-5/0.14 = 6.4200e5 V
 *     -> E on the outermost contour = k q / R_max^2
 *          = 8.988e9*1e-5/0.0196 = 4.5857e6 N/C, and E = dV/(spacing) only
 *        holds in the limit — the contours are NOT equally spaced, which is
 *        the whole reason the picture teaches anything.
 *
 *   equipotential_uniform, charge_uc=10 read as sigma = 10 uC/m^2
 *     P12Ch02Sec7 "Deriving E = -dV/dr from equipotential surfaces" (Fig 2.1),
 *     with the field taken as the capacitor field of P12Ch01Sec61.
 *     -> E = sigma/eps0 = 1.1294e6 N/C, uniform
 *     -> dV = E * PLANE_GAP_M = 1.1294e6 * 0.06 = 6.7766e4 V per surface,
 *        and here the surfaces ARE equally spaced because E is constant.
 *
 * Every one of these is checked in __tests__/gauss-flux.test.ts against a route
 * that does not rearrange the same equation — a numerical surface integral of
 * the Coulomb field over the closed surface, which reaches q_enc/eps0 from
 * the field side and reaches 0 for a source outside. See that file's header.
 */

export type FieldLinesConfiguration =
  | 'point'
  | 'dipole'
  | 'like_charges'
  | 'parallel_plates'
  | 'gaussian_sphere'
  | 'gaussian_cylinder'
  | 'gaussian_pillbox'
  | 'equipotential_point'
  | 'equipotential_uniform';

export interface FieldLinesParams {
  configuration: FieldLinesConfiguration;
  /**
   * Magnitude of the source, in the unit its configuration reads it as:
   *   point / dipole / like_charges / gaussian_sphere / equipotential_point
   *                                       microcoulombs               [uC]
   *   gaussian_cylinder            lambda, microcoulombs per metre    [uC/m]
   *   parallel_plates / gaussian_pillbox / equipotential_uniform
   *                                sigma, microcoulombs per m^2       [uC/m^2]
   * v1 already carried two of these three readings; v2 adds no new kind of
   * ambiguity, and `sourceUnit()` below names the unit for every case so the
   * readout can never label it wrong.
   */
  charge_uc: number;
  /**
   * NEW IN v2. Multiplies the world size of the Gaussian surface — the sphere
   * radius, the cylinder radius, the pillbox cap radius. IGNORED by every
   * other configuration (`surfaceRadiusM` returns 0 for them), which is
   * asserted rather than documented: a v1 payload has no such key, takes the
   * default, and must render byte-for-byte what v1 rendered.
   *
   * This is the param a cue moves to make P12Ch01Sec53's point — "doubling
   * sphere radius R -> Area x4, Field /4 => Flux UNCHANGED". It SNAPS; see
   * index.tsx's `animatable: []` for why this widget still cannot tween.
   */
  surface_scale: number;
  /**
   * NEW IN v2. Whether the Gaussian surface encloses its source.
   *
   * `false` is not a degenerate case, it is P12Ch01Sec53 beat 4 and
   * P12Ch01Sec60 problem 3: the source is moved OUTSIDE the closed surface,
   * Q_enc and therefore Phi collapse to exactly zero, and E on the surface
   * does not. Ignored by every non-Gaussian configuration.
   */
  enclosed: boolean;
  show_arrows: boolean;
  annotate: 'neutral_point' | 'termination' | null;
  /** NEW IN v2. Board caption; width-fitted by chrome.fitReadout. '' = none. */
  caption: string;
}

export interface FieldLinesDerived {
  /** N/C, at a configuration-specific reference point — see the header. */
  fieldMagnitude: number;
  /**
   * Traced field lines drawn IN THE FIGURE — the total, across every source
   * the renderer seeds from. Zero for the configurations that draw none, and
   * that zero is checked against the rendered tree, not asserted here.
   *
   * IT WAS PER SEEDING SOURCE UNTIL 2026-09-06, and that is the defect this
   * key exists to not have again. `like_charges` seeds BOTH of its positive
   * charges, so `charge_uc: 10` puts 20 curves on the board while the readout
   * printed `lines 10` and `derivedAliases.lineCount` handed the same 10 to
   * narration — Drona saying "ten field lines" over a board showing twenty.
   * The per-source number is `lineCount / seedingSourceCount(p)`; nothing
   * needs it today, and a figure total is what a student can count.
   */
  lineCount: number;
  /** Charge inside the closed surface, in microcoulombs. 0 for every
   *  configuration that draws no closed surface, and exactly 0 — not
   *  "unavailable" — when a Gaussian surface excludes its source. */
  enclosedChargeUc: number;
  /** Net flux through the closed surface, N m^2/C (= V m). q_enc / eps0. */
  flux: number;
  /** Potential difference between adjacent equipotential surfaces, volts. */
  potentialStepV: number;
  [key: string]: number;
}

/**
 * NOT EXACTLY MUTUALLY CONSISTENT, and that is inherited, not chosen.
 *
 * `1 / (4 * pi * EPS0)` is 8.98755e9, so `K` is high by 2.9e-5 relative —
 * every k-based number here is 0.003% away from its eps0-based counterpart,
 * and `E * A` for a sphere therefore does not equal `q / eps0` to machine
 * precision. Both constants are the values NCERT quotes and both predate v2;
 * changing either would move v1's four reference results.
 *
 * Written down because it is the floor on any tolerance in this widget: a
 * check tighter than ~1e-4 relative between a k-route and an eps0-route will
 * fail on the constants rather than on the physics. Found by a verifier who
 * computed its own k from its own eps0 and saw the gap.
 */
export const K = 8.988e9;
export const EPS0 = 8.854e-12;

/**
 * The legal magnitude of `charge_uc`, in whatever unit its configuration reads
 * it as. Exported so `validate()`, the dev harness and any sweep read the same
 * two numbers rather than three copies of `4` and `20`.
 *
 * The UPPER bound is the line-density cap: `charge_uc` IS the line count per
 * source, and 20 is what stays countable at 343x236.
 *
 * There is no lower bound of the same kind — 4 is the smallest count that
 * still reads as a field rather than as four stray strokes. Values below it
 * are CLAMPED UP, because that only changes the magnitude of a source. Values
 * at or below ZERO are REJECTED instead, because they change its sign or its
 * existence, which no clamp may quietly do — see `validate()`.
 */
export const CHARGE_UC_MIN = 4;
export const CHARGE_UC_MAX = 20;

/* ------------------------------------------------------------ v1 constants */

/** World constants — metres, fixed regardless of charge_uc so the scale never
 *  depends on the one param a cue can change (CLAUDE.md's params/motion rule,
 *  which applies to any value scaffolding depends on, animatable or not). */
export const SEPARATION_M = 0.2;
export const PLATE_GAP_M = 0.18;
export const REF_DISTANCE_M = 0.1;
export const WORLD_HALF_W = 0.3;
export const WORLD_HALF_H = 0.16;

/* ------------------------------------------------------------ v2 constants */

/**
 * Base radius of every Gaussian surface, in metres, before `surface_scale`.
 *
 * 0.075 is not a round number chosen for looks — it is the largest base that
 * keeps the OUT-OF-SURFACE cases legible. `surface_scale` tops out at 1.4, so
 * the largest surface radius is 0.105 m, and the not-enclosed cylinder puts
 * its wire at WIRE_OUTSIDE_Y_M = 0.15: the clearance between the wire and the
 * surface it does not pass through is 0.045 m at the worst corner, which is
 * 22px at the 343x236 board and 53px at 900x430. A base of 0.10 would leave
 * 0.01 m there — 5px at 343x236 — and the picture would read as a wire ON the
 * surface, which is the one thing it must not read as.
 */
export const GAUSS_R_M = 0.075;
export const SURFACE_SCALE_MIN = 0.6;
export const SURFACE_SCALE_MAX = 1.4;
/** Length of the coaxial Gaussian cylinder, metres. P12Ch01Sec55's `l`. */
export const GAUSS_CYL_LEN_M = 0.3;
/** End-to-end length of the Gaussian pillbox, metres. P12Ch01Sec56. */
export const PILLBOX_LEN_M = 0.14;
/** Where the point charge sits when the sphere does NOT enclose it. */
export const CHARGE_OUTSIDE_X_M = 0.22;
/** Where the wire sits when the cylinder does NOT enclose it. */
export const WIRE_OUTSIDE_Y_M = 0.15;
/** Centre of the pillbox when it sits entirely on ONE side of the sheet. */
export const PILLBOX_OUTSIDE_X_M = 0.12;
/** Radius of the OUTERMOST equipotential contour, metres. */
export const EQUI_R_MAX_M = 0.14;
/** Contours drawn, at equal potential steps: radii R, R/2, R/3, R/4. */
export const EQUI_CONTOURS = 4;
/**
 * Spacing of the uniform-field equipotential planes, metres — Fig 2.1's dr.
 *
 * DERIVED FROM `PLATE_GAP_M`, not chosen. With four planes at +/-0.5g and
 * +/-1.5g, g = PLATE_GAP_M / 3 puts the outermost pair exactly ON the
 * capacitor plates `parallel_plates` draws, which is not a coincidence to be
 * tidied away: a conductor plate IS an equipotential surface, so the two
 * figures now agree by construction if a lesson shows them together.
 *
 * It was 0.09 — an independent number that spread the planes across 0.27 m
 * against the plates' 0.18 m, so the equipotentials of a capacitor field
 * extended past where the capacitor was. Caught by a verifier comparing the
 * two constants, not by any test: each figure is self-consistent and only the
 * PAIR is wrong.
 */
export const PLANE_GAP_M = PLATE_GAP_M / 3;
export const EQUI_PLANES = 4;

/** Foreshortening of a cylinder end cap drawn in 2D: rx = ry * this. */
export const CAP_RX_RATIO = 0.28;

const STEP_M = 0.004;
const MAX_STEPS = 260;

export interface Charge {
  x: number;
  y: number;
  /** Coulombs, signed. */
  q: number;
}

const GAUSSIAN: ReadonlySet<string> = new Set([
  'gaussian_sphere',
  'gaussian_cylinder',
  'gaussian_pillbox',
]);

/** True for the three configurations that draw a closed Gaussian surface. */
export function isGaussian(c: FieldLinesConfiguration): boolean {
  return GAUSSIAN.has(c);
}

/** The unit `charge_uc` is read in, per configuration. One place, so the
 *  readout can never label microcoulombs per metre as microcoulombs. */
export function sourceUnit(c: FieldLinesConfiguration): 'uC' | 'uC/m' | 'uC/m2' {
  if (c === 'gaussian_cylinder') return 'uC/m';
  if (c === 'parallel_plates' || c === 'gaussian_pillbox' || c === 'equipotential_uniform') {
    return 'uC/m2';
  }
  return 'uC';
}

/** Surface radius in metres, or 0 for a configuration that draws no surface.
 *  The `0` is what makes `surface_scale` provably inert everywhere else. */
export function surfaceRadiusM(p: FieldLinesParams): number {
  return isGaussian(p.configuration) ? GAUSS_R_M * p.surface_scale : 0;
}

export function chargesFor(p: FieldLinesParams): Charge[] {
  const q = p.charge_uc * 1e-6;
  switch (p.configuration) {
    case 'point':
      return [{ x: 0, y: 0, q }];
    case 'dipole':
      return [
        { x: -SEPARATION_M / 2, y: 0, q },
        { x: SEPARATION_M / 2, y: 0, q: -q },
      ];
    case 'like_charges':
      return [
        { x: -SEPARATION_M / 2, y: 0, q },
        { x: SEPARATION_M / 2, y: 0, q },
      ];
    case 'parallel_plates':
      return [];
    // The Gaussian sphere and the point-charge equipotential map are both
    // drawn around ONE point charge; the sphere's sits off-axis when the
    // surface does not enclose it.
    case 'gaussian_sphere':
      return [{ x: p.enclosed ? 0 : CHARGE_OUTSIDE_X_M, y: 0, q }];
    case 'equipotential_point':
      return [{ x: 0, y: 0, q }];
    // A line and a sheet are not point charges and are never superposed as
    // one — their fields are the closed forms in `deriveFieldLines`.
    case 'gaussian_cylinder':
    case 'gaussian_pillbox':
    case 'equipotential_uniform':
      return [];
  }
}

export function fieldAt(
  charges: readonly Charge[],
  x: number,
  y: number
): { ex: number; ey: number } | null {
  let ex = 0;
  let ey = 0;
  for (const c of charges) {
    const dx = x - c.x;
    const dy = y - c.y;
    const r2 = dx * dx + dy * dy;
    if (r2 < 1e-8) return null;
    const r = Math.sqrt(r2);
    const e = (K * c.q) / r2;
    ex += (e * dx) / r;
    ey += (e * dy) / r;
  }
  return { ex, ey };
}

/**
 * Traces one field line by stepping along the normalised E direction. Stops
 * at a negative charge (absorption), at the world bounds (representing a line
 * that continues to infinity), or after MAX_STEPS.
 */
export function traceFieldLine(
  charges: readonly Charge[],
  start: { x: number; y: number },
  worldHalfW: number,
  worldHalfH: number,
  absorbR: number
): Array<[number, number]> {
  const pts: Array<[number, number]> = [[start.x, start.y]];
  let x = start.x;
  let y = start.y;
  for (let i = 0; i < MAX_STEPS; i++) {
    const f = fieldAt(charges, x, y);
    if (!f) break;
    const mag = Math.hypot(f.ex, f.ey);
    if (mag < 1e-9) break;
    x += (f.ex / mag) * STEP_M;
    y += (f.ey / mag) * STEP_M;
    pts.push([x, y]);
    if (Math.abs(x) > worldHalfW || Math.abs(y) > worldHalfH) break;
    const hitNegative = charges.some((c) => c.q < 0 && Math.hypot(x - c.x, y - c.y) < absorbR);
    if (hitNegative) break;
  }
  return pts;
}

/** Converts traced world points (metres) into an SVG path `d` string. World
 *  and pixel space share the same y-down convention here, so no axis flip. */
export function pathFromWorldPoints(
  points: ReadonlyArray<readonly [number, number]>,
  originX: number,
  originY: number,
  pxPerM: number
): string {
  let d = '';
  for (let i = 0; i < points.length; i++) {
    const [wx, wy] = points[i];
    const px = originX + wx * pxPerM;
    const py = originY + wy * pxPerM;
    d += (i === 0 ? 'M' : 'L') + px.toFixed(2) + ' ' + py.toFixed(2);
  }
  return d;
}

/**
 * A closed ellipse as a POLYLINE, not an SVG arc.
 *
 * Deliberate: scripts/verify-render.mjs derives a path's bounding box by
 * reading every number in `d` IN PAIRS. An `A rx ry rot laf sf x y` command
 * carries seven numbers, so a single arc desynchronises the pairing for the
 * whole rest of the string and the checker reports a bounding box that is not
 * the shape's — which would make assertions 2 and 3 (ink coverage, off-board)
 * silently wrong on every Gaussian surface. A polyline of M/L pairs is exactly
 * what that reader models, so the box it computes is the true one.
 *
 * 64 segments is smooth at every board size we render: the largest surface is
 * ~123px across at 900x430, so a segment subtends under 2px of chord.
 */
export function ellipsePolyline(
  cxWorld: number,
  cyWorld: number,
  rxWorld: number,
  ryWorld: number,
  segments = 64
): Array<[number, number]> {
  const pts: Array<[number, number]> = [];
  for (let i = 0; i <= segments; i++) {
    const t = (i / segments) * 2 * Math.PI;
    pts.push([cxWorld + rxWorld * Math.cos(t), cyWorld + ryWorld * Math.sin(t)]);
  }
  return pts;
}

/**
 * The closed Gaussian surface, in world metres, as one or more polylines.
 *
 * Sphere      one circle.
 * Cylinder    the two silhouette lines plus both end caps drawn as ellipses —
 *             the standard 2D projection of a coaxial cylinder, and the shape
 *             P12Ch01Sec55 calls "curved surface + two circular end caps".
 * Pillbox     the same solid, short and straddling the sheet (P12Ch01Sec56).
 *
 * `centreX` is where the surface sits; only the pillbox ever moves off zero,
 * and only when it does not enclose the sheet.
 */
export function gaussianSurfacePolylines(p: FieldLinesParams): Array<Array<[number, number]>> {
  const r = surfaceRadiusM(p);
  if (r <= 0) return [];
  if (p.configuration === 'gaussian_sphere') {
    return [ellipsePolyline(0, 0, r, r)];
  }
  const halfLen =
    p.configuration === 'gaussian_cylinder' ? GAUSS_CYL_LEN_M / 2 : PILLBOX_LEN_M / 2;
  const cx =
    p.configuration === 'gaussian_pillbox' && !p.enclosed ? PILLBOX_OUTSIDE_X_M : 0;
  const rx = r * CAP_RX_RATIO;
  return [
    // curved-surface silhouette, top then bottom
    [
      [cx - halfLen, -r],
      [cx + halfLen, -r],
    ],
    [
      [cx - halfLen, r],
      [cx + halfLen, r],
    ],
    ellipsePolyline(cx - halfLen, 0, rx, r),
    ellipsePolyline(cx + halfLen, 0, rx, r),
  ];
}

/**
 * Where to draw the E arrows that sit ON the closed surface, and which way
 * each points. World metres; `angle` is the field direction in radians, in the
 * same y-down frame the renderer uses.
 *
 * These are the `E . dA` arrows of the figure, so their direction is the real
 * field direction at that point — not an outward normal. That is what makes
 * the not-enclosed cases correct without a special case: arrows enter one side
 * of the surface and leave the other, and the net flux they depict is zero.
 */
export interface SurfaceArrow {
  x: number;
  y: number;
  angle: number;
}

export function surfaceArrows(p: FieldLinesParams): SurfaceArrow[] {
  const r = surfaceRadiusM(p);
  if (r <= 0) return [];
  const out: SurfaceArrow[] = [];

  if (p.configuration === 'gaussian_sphere') {
    const charges = chargesFor(p);
    for (let i = 0; i < 8; i++) {
      const t = (i / 8) * 2 * Math.PI;
      const x = r * Math.cos(t);
      const y = r * Math.sin(t);
      const f = fieldAt(charges, x, y);
      if (!f) continue;
      out.push({ x, y, angle: Math.atan2(f.ey, f.ex) });
    }
    return out;
  }

  if (p.configuration === 'gaussian_cylinder') {
    // Radial, perpendicular to the wire, on the curved surface only — the
    // end caps carry no flux and drawing an arrow there would say they do.
    const wireY = p.enclosed ? 0 : -WIRE_OUTSIDE_Y_M;
    for (let i = 0; i < 3; i++) {
      const x = (-1 + i) * (GAUSS_CYL_LEN_M / 3);
      for (const side of [-1, 1]) {
        const y = side * r;
        // The infinite wire's field is radial from the wire, so on the
        // surface it points straight away from it — up above the wire, down
        // below. With the wire outside, BOTH arrows point the same way.
        out.push({ x, y, angle: y > wireY ? Math.PI / 2 : -Math.PI / 2 });
      }
    }
    return out;
  }

  // Pillbox: axial, through the caps. E is uniform and perpendicular to the
  // sheet, so with the box straddling the sheet the two caps face opposite
  // ways and both carry outward flux; with the box on one side, the field
  // goes in one cap and out the other and the net is zero.
  const cx = p.enclosed ? 0 : PILLBOX_OUTSIDE_X_M;
  const half = PILLBOX_LEN_M / 2;
  for (const side of [-1, 1]) {
    const x = cx + side * half;
    // Field direction points away from the sheet at x = 0.
    const angle = x >= 0 ? 0 : Math.PI;
    for (const yOff of [-0.5, 0.5]) {
      out.push({ x, y: yOff * r, angle });
    }
  }
  return out;
}

/** Equipotential contour radii, metres, outermost first. Equal POTENTIAL
 *  steps, so r_n = R_max / n and the contours crowd toward the charge —
 *  P12Ch02Sec3's 100 V / 75 V / 50 V picture. */
export function equipotentialRadiiM(): number[] {
  const out: number[] = [];
  for (let n = 1; n <= EQUI_CONTOURS; n++) out.push(EQUI_R_MAX_M / n);
  return out;
}

/** x positions of the uniform-field equipotential planes, metres. Equally
 *  spaced, because E is constant — the contrast with the point charge above
 *  is the lesson. */
export function equipotentialPlaneXsM(): number[] {
  const out: number[] = [];
  for (let i = 0; i < EQUI_PLANES; i++) out.push((i - (EQUI_PLANES - 1) / 2) * PLANE_GAP_M);
  return out;
}

/** The zero-field point, only meaningful (and only ever exactly zero) for two
 *  equal charges of the same sign — see the header comment's third reference. */
export function neutralPointWorld(p: FieldLinesParams): { x: number; y: number } | null {
  return p.configuration === 'like_charges' ? { x: 0, y: 0 } : null;
}

/** Where field lines terminate on a finite point — only exists when the
 *  configuration has a sink for flux (a negative charge or plate). A single
 *  positive charge or two like charges have no finite termination: their
 *  lines all run to the world bounds, standing in for infinity. */
export function terminationPointWorld(p: FieldLinesParams): { x: number; y: number } | null {
  if (p.configuration === 'dipole') return { x: SEPARATION_M / 2, y: 0 };
  if (p.configuration === 'parallel_plates') return { x: PLATE_GAP_M / 2, y: 0 };
  return null;
}

/** Charge enclosed by the closed surface, in COULOMBS. 0 for every
 *  configuration with no closed surface, and for a surface that excludes its
 *  source. See the header for the one-cap-area trap in the pillbox case. */
export function enclosedChargeC(p: FieldLinesParams): number {
  if (!isGaussian(p.configuration) || !p.enclosed) return 0;
  const r = surfaceRadiusM(p);
  switch (p.configuration) {
    case 'gaussian_sphere':
      return p.charge_uc * 1e-6;
    case 'gaussian_cylinder':
      // lambda [C/m] times the enclosed length. Independent of r, which is
      // exactly why growing the cylinder leaves the flux alone.
      return p.charge_uc * 1e-6 * GAUSS_CYL_LEN_M;
    case 'gaussian_pillbox':
      // sigma [C/m^2] times ONE cap area — the patch of sheet inside the box.
      return p.charge_uc * 1e-6 * Math.PI * r * r;
    default:
      return 0;
  }
}

/**
 * The configurations that TRACE field lines by stepping the superposed field.
 *
 * `equipotential_point` is deliberately absent even though `chargesFor`
 * returns a charge for it: it draws contours and radial E vectors, never a
 * traced line. The renderer's own branch says the same thing, and the two are
 * asserted equal against the rendered tree in __tests__/render-v2.test.tsx —
 * a count derived from a list the renderer does not consult is exactly the
 * defect this pair of functions was written to end.
 */
const TRACED: ReadonlySet<string> = new Set([
  'point',
  'dipole',
  'like_charges',
  'gaussian_sphere',
]);

/**
 * How many independent sources the renderer seeds a full fan of lines from.
 *
 * `like_charges` is 2 — both of its charges are positive and both are seeded —
 * and that 2 is the whole of the `lines 10` / twenty-curves defect: the count
 * was computed per source and reported as if it were the figure.
 * `parallel_plates` seeds no charge at all; it lays one set of rows across the
 * gap, so it is one source by construction.
 */
export function seedingSourceCount(p: FieldLinesParams): number {
  if (p.configuration === 'parallel_plates') return 1;
  if (!TRACED.has(p.configuration)) return 0;
  // Lines originate on positive sources only — the same test the renderer
  // applies before it seeds (`if (charge.q <= 0) continue`).
  return chargesFor(p).filter((c) => c.q > 0).length;
}

/**
 * Lines seeded per source. `charge_uc` IS the density knob — NCERT's "the
 * number of lines is proportional to the charge" — and the floor of 1 is the
 * renderer's own, kept here so both read one function rather than two copies
 * of `Math.round`. `validate()` clamps to [4, 20], so the floor is inert on
 * any validated payload and exists for callers that build params by hand.
 */
export function linesPerSource(p: FieldLinesParams): number {
  return Math.max(1, Math.round(p.charge_uc));
}

/** Traced field lines in the FIGURE: per source, times the sources drawn. */
export function fieldLineCount(p: FieldLinesParams): number {
  return linesPerSource(p) * seedingSourceCount(p);
}

export function deriveFieldLines(p: FieldLinesParams): FieldLinesDerived {
  const q = p.charge_uc * 1e-6;
  const r = surfaceRadiusM(p);
  let fieldMagnitude: number;
  let potentialStepV = 0;

  switch (p.configuration) {
    case 'point':
      fieldMagnitude = (K * q) / (REF_DISTANCE_M * REF_DISTANCE_M);
      break;
    case 'dipole': {
      const d = SEPARATION_M / 2;
      fieldMagnitude = 2 * ((K * q) / (d * d));
      break;
    }
    case 'like_charges':
      fieldMagnitude = 0;
      break;
    case 'parallel_plates':
      fieldMagnitude = q / EPS0;
      break;
    case 'gaussian_sphere': {
      // Enclosed: E on the surface, kq/r^2. Not enclosed: the field is not
      // uniform over the surface at all, so the honest single number is E at
      // the surface point NEAREST the charge — the largest value on it, and
      // the one that makes "zero flux, non-zero field" concrete.
      const d = p.enclosed ? r : CHARGE_OUTSIDE_X_M - r;
      fieldMagnitude = (K * q) / (d * d);
      break;
    }
    case 'gaussian_cylinder': {
      // 2 k lambda / d, the infinite-line result. Not enclosed: distance from
      // the wire to the nearest point of the surface.
      const d = p.enclosed ? r : WIRE_OUTSIDE_Y_M - r;
      fieldMagnitude = (2 * K * q) / d;
      break;
    }
    case 'gaussian_pillbox':
      // sigma / 2 eps0 — uniform, and identical whether or not the box
      // straddles the sheet. That invariance is the point of the figure.
      fieldMagnitude = q / (2 * EPS0);
      break;
    case 'equipotential_point':
      fieldMagnitude = (K * q) / (EQUI_R_MAX_M * EQUI_R_MAX_M);
      potentialStepV = (K * q) / EQUI_R_MAX_M;
      break;
    case 'equipotential_uniform':
      fieldMagnitude = q / EPS0;
      potentialStepV = (q / EPS0) * PLANE_GAP_M;
      break;
  }

  const enclosedC = enclosedChargeC(p);
  return {
    fieldMagnitude,
    // Computed ONCE, from the same two functions the renderer seeds with,
    // rather than per case: five hand-written `Math.round(p.charge_uc)`
    // assignments were what let `like_charges` report a per-source count as a
    // figure total, and a sixth configuration would have inherited it.
    lineCount: fieldLineCount(p),
    enclosedChargeUc: enclosedC * 1e6,
    flux: enclosedC / EPS0,
    potentialStepV,
  };
}
