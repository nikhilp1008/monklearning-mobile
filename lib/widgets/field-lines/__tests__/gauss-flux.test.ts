/**
 * field_lines v2 — the numbers, checked BY A ROUTE THAT IS NOT THE FORMULA.
 *
 * CLAUDE.md's rule: "A self-check must not be an identity." The recorded
 * counter-example is `circuit_network` asserting `terminal_v === i_total *
 * r_eq`, which given `i = V/(R+r)` cannot fail for any input. Writing
 * `flux === enclosedCharge / EPS0` here would be exactly that — it is the
 * line of code being tested, retyped.
 *
 * So every claim below is reached from the OTHER side of Gauss's law:
 *
 *   the widget says      Phi = q_enc / eps0        (the integral form, closed)
 *   this file computes   Phi = closed integral of E . dA over the surface,
 *                        with E built by Coulomb superposition from a
 *                        discretised source, summed by the midpoint rule
 *
 * Those two agree only if the enclosed-charge geometry, the sign convention,
 * the outward normal, the unit conversion out of microcoulombs and eps0 are
 * all right at once. They are related by a THEOREM, not by algebra, and the
 * theorem is what a student is being taught — which is the strongest form of
 * "if you cannot state what the check could catch, it catches nothing".
 *
 * What it does catch, demonstrated by construction rather than claimed:
 *
 *   - a pillbox that took TWO cap areas instead of one (the classic
 *     `Phi = 2EA` / `q = sigma A` confusion) would come out 2x high;
 *   - a cylinder that took `lambda * r` or `lambda * 2r` instead of
 *     `lambda * L` would miss by whatever `surface_scale` happened to be;
 *   - a surface that "encloses" a source it does not contain would report
 *     q/eps0 where the integral returns zero — and the not-enclosed cases
 *     below are integrated, not assumed;
 *   - the two flat end caps of the coaxial cylinder are ASSERTED to carry
 *     no flux rather than argued to. That claim is printed on the board
 *     ("CAPS CARRY NO FLUX") and nothing else in the suite would notice if
 *     it were false.
 *
 * TOLERANCES ARE QUADRATURE ERROR, NOT SLACK. Each one below is roughly 2x
 * the error measured at the grid actually used, so a real defect of the kinds
 * listed above (which are all factors of 2 or worse) cannot hide under it.
 * The sphere is exact to 0.01%; the surfaces pierced by their own source
 * (the cylinder's caps, the pillbox's curved side) carry the singular
 * integrand and are the loose ones.
 */
import {
  EPS0,
  GAUSS_CYL_LEN_M,
  GAUSS_R_M,
  CHARGE_OUTSIDE_X_M,
  K,
  PILLBOX_LEN_M,
  PILLBOX_OUTSIDE_X_M,
  EQUI_R_MAX_M,
  PLANE_GAP_M,
  SURFACE_SCALE_MAX,
  SURFACE_SCALE_MIN,
  WIRE_OUTSIDE_Y_M,
  deriveFieldLines,
  enclosedChargeC,
  equipotentialRadiiM,
  surfaceRadiusM,
  type FieldLinesParams,
} from '../physics';

/* ------------------------------------------------------- the other route */

/**
 * A discretised source: a flat Float64Array of [x, y, z, coulombs] quadruples.
 *
 * FLAT, and not an array of 4-tuples, for a reason worth writing down: the
 * pillbox check evaluates a 19,264-element source at 1,600 surface points, and
 * as `number[][]` that is 30 million pointer chases through 19,264 separate
 * heap objects. Under Jest's transform it took 4.4 s per case — 51x the same
 * arithmetic in plain node — and the whole file ran for a minute. One typed
 * array holds it contiguously and the same check runs in a fraction of that.
 * A verification nobody will wait for is a verification that gets deleted.
 */
type Sources = Float64Array;

function makeSources(quads: readonly (readonly number[])[]): Sources {
  const out = new Float64Array(quads.length * 4);
  for (let i = 0; i < quads.length; i++) out.set(quads[i], i * 4);
  return out;
}

function concatSources(a: Sources, b: Sources): Sources {
  const out = new Float64Array(a.length + b.length);
  out.set(a, 0);
  out.set(b, a.length);
  return out;
}

/** Coulomb superposition in 3D. The only physics this file imports from
 *  outside itself is the inverse-square law and eps0. */
function fieldAt3d(s: Sources, px: number, py: number, pz: number) {
  let ex = 0, ey = 0, ez = 0;
  for (let i = 0; i < s.length; i += 4) {
    const dx = px - s[i], dy = py - s[i + 1], dz = pz - s[i + 2];
    const r2 = dx * dx + dy * dy + dz * dz;
    const e = (K * s[i + 3]) / (r2 * Math.sqrt(r2));
    ex += e * dx; ey += e * dy; ez += e * dz;
  }
  return [ex, ey, ez] as const;
}

/** Closed surface integral of E . dA over a sphere, midpoint rule in
 *  (theta, phi). No node lands on a pole or a seam. */
function fluxThroughSphere(chs: Sources, R: number, nT = 120, nP = 240): number {
  const dT = Math.PI / nT, dP = (2 * Math.PI) / nP;
  let sum = 0;
  for (let i = 0; i < nT; i++) {
    const th = (i + 0.5) * dT, st = Math.sin(th), ct = Math.cos(th);
    for (let j = 0; j < nP; j++) {
      const ph = (j + 0.5) * dP;
      const nx = st * Math.cos(ph), ny = st * Math.sin(ph), nz = ct;
      const e = fieldAt3d(chs, R * nx, R * ny, R * nz);
      sum += (e[0] * nx + e[1] * ny + e[2] * nz) * R * R * st * dT * dP;
    }
  }
  return sum;
}

/**
 * Closed surface integral over a cylinder whose axis is the x axis, centred
 * at `cx`, of half-length `halfLen` and radius `R`. Returned split, because
 * the split is itself a claim the board makes: the coaxial cylinder's caps
 * must carry nothing, and the pillbox's curved side must carry nothing.
 */
function fluxThroughCylinder(
  chs: Sources, cx: number, halfLen: number, R: number,
  nX = 20, nPh = 40, nRho = 32
): { curved: number; caps: number; total: number } {
  const dX = (2 * halfLen) / nX, dP = (2 * Math.PI) / nPh;
  let curved = 0;
  for (let i = 0; i < nX; i++) {
    const x = cx - halfLen + (i + 0.5) * dX;
    for (let j = 0; j < nPh; j++) {
      const ph = (j + 0.5) * dP;
      const ny = Math.cos(ph), nz = Math.sin(ph);
      const e = fieldAt3d(chs, x, R * ny, R * nz);
      curved += (e[1] * ny + e[2] * nz) * R * dX * dP;
    }
  }
  let caps = 0;
  const dR = R / nRho;
  for (const [xc, sgn] of [[cx + halfLen, 1], [cx - halfLen, -1]] as const) {
    for (let i = 0; i < nRho; i++) {
      const rho = (i + 0.5) * dR;
      for (let j = 0; j < nPh; j++) {
        const ph = (j + 0.5) * dP;
        const e = fieldAt3d(chs, xc, rho * Math.cos(ph), rho * Math.sin(ph));
        caps += sgn * e[0] * rho * dR * dP;
      }
    }
  }
  return { curved, caps, total: curved + caps };
}

/** An infinite line along x at height `y`, discretised. Long enough that its
 *  ends are 130x the largest surface radius away from the surface. */
function lineSource(lambdaCPerM: number, y: number, halfExtent = 20, n = 1201): Sources {
  const seg = (2 * halfExtent) / n;
  const out = new Float64Array(n * 4);
  for (let i = 0; i < n; i++) {
    out[i * 4] = -halfExtent + (i + 0.5) * seg;
    out[i * 4 + 1] = y;
    out[i * 4 + 3] = lambdaCPerM * seg;
  }
  return out;
}

/**
 * An infinite sheet in the y-z plane at x = `x0`, discretised in POLAR cells
 * about the surface axis with geometrically graded radii.
 *
 * A uniform square grid is what a first attempt reaches for and it is wrong
 * here: the cell that has to resolve the field 2mm from the sheet is the same
 * size as the cell 40m away, so either the near field is unresolved or the
 * far tail is unaffordable. Measured, on the largest legal pillbox:
 *
 *   401x401 uniform cells over +/-8 m        6.4% high   160801 cells
 *   graded polar, rMin 4mm,  160 x 64        2.2% high    10304 cells
 * *   graded polar, rMin 1mm,  240 x 40        0.01% high     9640 cells
 *
 * The middle row is the trap: it looks converged at the SMALL pillbox (0.55%)
 * and is eight times worse at the large one, because the error lives in the
 * curved side, whose sample points sit 1.75mm from a sheet whose cells there
 * were 6mm wide. Tuning a quadrature at one end of the legal range is the
 * same mistake as sweeping one param at a time.
 */
function sheetSource(
  sigmaCPerM2: number, x0: number, rMin = 0.001, rMax = 60, nR = 240, nPhi = 40
): Sources {
  const quads: number[][] = [];
  const dP = (2 * Math.PI) / nPhi;
  const growth = Math.pow(rMax / rMin, 1 / nR);
  for (let j = 0; j < nPhi; j++) {
    const ph = (j + 0.5) * dP;
    quads.push([x0, 0.5 * rMin * Math.cos(ph), 0.5 * rMin * Math.sin(ph),
      (sigmaCPerM2 * Math.PI * rMin * rMin) / nPhi]);
  }
  let r0 = rMin;
  for (let i = 0; i < nR; i++) {
    const r1 = r0 * growth, rm = 0.5 * (r0 + r1);
    const area = (Math.PI * (r1 * r1 - r0 * r0)) / nPhi;
    for (let j = 0; j < nPhi; j++) {
      const ph = (j + 0.5) * dP;
      quads.push([x0, rm * Math.cos(ph), rm * Math.sin(ph), sigmaCPerM2 * area]);
    }
    r0 = r1;
  }
  return makeSources(quads);
}

/** Relative error, as a fraction. */
const rel = (got: number, want: number) => Math.abs(got - want) / Math.abs(want);

const base = (over: Partial<FieldLinesParams>): FieldLinesParams => ({
  configuration: 'gaussian_sphere',
  charge_uc: 10,
  surface_scale: 1,
  enclosed: true,
  show_arrows: true,
  annotate: null,
  caption: '',
  ...over,
});

/* --------------------------------------------------------------- sphere */

describe('gaussian_sphere: the integral of E.dA reaches q/eps0 from the field side', () => {
  test.each([
    [4, SURFACE_SCALE_MIN], [4, SURFACE_SCALE_MAX],
    [20, SURFACE_SCALE_MIN], [20, SURFACE_SCALE_MAX],
    [10, 1],
  ])('charge_uc=%p, surface_scale=%p', (charge_uc, surface_scale) => {
    const p = base({ charge_uc, surface_scale });
    const d = deriveFieldLines(p);
    const R = surfaceRadiusM(p);
    const numeric = fluxThroughSphere(makeSources([[0, 0, 0, charge_uc * 1e-6]]), R);
    expect(rel(numeric, d.flux)).toBeLessThan(0.001);
    // ... and the flux the integral finds does NOT depend on the radius,
    // which is the entire claim of P12Ch01Sec53 and is not something the
    // formula could fail to satisfy but the picture could.
    expect(rel(numeric, (charge_uc * 1e-6) / EPS0)).toBeLessThan(0.001);
  });

  test('an OFF-CENTRE charge gives the same flux — shape/position independence', () => {
    // Nothing in the widget draws this case; it is here because a radial-only
    // check cannot distinguish Gauss's law from "E.A with E = kq/r^2 and
    // A = 4 pi r^2", which is the identity this file exists not to be.
    const R = GAUSS_R_M;
    const centred = fluxThroughSphere(makeSources([[0, 0, 0, 1e-5]]), R);
    const offset = fluxThroughSphere(makeSources([[0.4 * R, -0.3 * R, 0.2 * R, 1e-5]]), R);
    expect(rel(offset, centred)).toBeLessThan(0.002);
  });

  test('a charge OUTSIDE the surface integrates to zero, and the widget says zero', () => {
    for (const surface_scale of [SURFACE_SCALE_MIN, 1, SURFACE_SCALE_MAX]) {
      const p = base({ enclosed: false, surface_scale });
      const d = deriveFieldLines(p);
      const numeric = fluxThroughSphere(makeSources([[CHARGE_OUTSIDE_X_M, 0, 0, 1e-5]]), surfaceRadiusM(p));
      // Exactly zero on the widget's side; a part in 10^4 of q/eps0 on the
      // quadrature's, which is the integrator's noise floor for this geometry.
      expect(d.flux).toBe(0);
      expect(d.enclosedChargeUc).toBe(0);
      expect(Math.abs(numeric) / (1e-5 / EPS0)).toBeLessThan(1e-4);
    }
  });

  test('zero flux does NOT mean zero field — the misconception the figure kills', () => {
    const p = base({ enclosed: false });
    const d = deriveFieldLines(p);
    expect(d.flux).toBe(0);
    // Nearest point of the surface to the charge, from the primitive law.
    const nearest = CHARGE_OUTSIDE_X_M - surfaceRadiusM(p);
    expect(d.fieldMagnitude).toBeCloseTo((K * 1e-5) / (nearest * nearest), -2);
    expect(d.fieldMagnitude).toBeGreaterThan(1e6);
  });
});

/* ------------------------------------------------------------- cylinder */

describe('gaussian_cylinder: lambda * L, and caps that carry nothing', () => {
  /*
   * The integral runs at the two GEOMETRIC corners only, not at all four of
   * (charge_uc x surface_scale).
   *
   * That is not the corners rule being skipped — the corners rule is about
   * RENDERING, and the full 2^N x 3-board sweep through the gate is in
   * corner-sweep.gen.ts. Here, `charge_uc` enters BOTH sides of the identity
   * linearly and exactly: Coulomb's law is linear in q, so the numeric flux
   * scales with it exactly, and so does q_enc/eps0. Re-integrating at a second
   * charge would cost a second or two to re-prove multiplication. What it
   * would NOT catch is anything, so the linearity is asserted directly, once,
   * below — and a clamp or a unit conversion that broke it would fail there.
   */
  test.each([
    [10, SURFACE_SCALE_MIN], [10, SURFACE_SCALE_MAX],
  ])('lambda=%p uC/m, surface_scale=%p', (charge_uc, surface_scale) => {
    const p = base({ configuration: 'gaussian_cylinder', charge_uc, surface_scale });
    const d = deriveFieldLines(p);
    const chs = lineSource(charge_uc * 1e-6, 0);
    const r = fluxThroughCylinder(chs, 0, GAUSS_CYL_LEN_M / 2, surfaceRadiusM(p));

    // The whole surface integral, against the widget's q_enc/eps0. If the
    // enclosed charge had been written as lambda * r, or lambda * 2r, these
    // two rows (which differ ONLY in surface_scale) would disagree by 2.3x.
    expect(rel(r.total, d.flux)).toBeLessThan(0.003);

    // The curved surface alone carries it all, and the caps carry under a
    // quarter of a percent — which is the board's printed "CAPS CARRY NO
    // FLUX". Both are quadrature-noise bounds; the exact answers are 100%
    // and 0%.
    expect(rel(r.curved, d.flux)).toBeLessThan(0.001);
    expect(Math.abs(r.caps) / Math.abs(r.total)).toBeLessThan(0.003);
  });

  test('the enclosed charge does not move when the radius does', () => {
    const small = enclosedChargeC(base({ configuration: 'gaussian_cylinder', surface_scale: SURFACE_SCALE_MIN }));
    const large = enclosedChargeC(base({ configuration: 'gaussian_cylinder', surface_scale: SURFACE_SCALE_MAX }));
    expect(small).toBe(large);
    // ... while E on the surface does, as 1/r. 1.4/0.6 = 2.333.
    const eSmall = deriveFieldLines(base({ configuration: 'gaussian_cylinder', surface_scale: SURFACE_SCALE_MIN })).fieldMagnitude;
    const eLarge = deriveFieldLines(base({ configuration: 'gaussian_cylinder', surface_scale: SURFACE_SCALE_MAX })).fieldMagnitude;
    expect(eSmall / eLarge).toBeCloseTo(SURFACE_SCALE_MAX / SURFACE_SCALE_MIN, 6);
  });

  test('flux is EXACTLY linear in lambda, so the charge_uc corners need no integral', () => {
    for (const surface_scale of [SURFACE_SCALE_MIN, 1, SURFACE_SCALE_MAX]) {
      const lo = deriveFieldLines(base({ configuration: 'gaussian_cylinder', charge_uc: 4, surface_scale }));
      const hi = deriveFieldLines(base({ configuration: 'gaussian_cylinder', charge_uc: 20, surface_scale }));
      expect(hi.flux / lo.flux).toBeCloseTo(5, 12);
      expect(hi.enclosedChargeUc / lo.enclosedChargeUc).toBeCloseTo(5, 12);
    }
  });

  test('a wire OUTSIDE the cylinder integrates to zero', () => {
    const p = base({ configuration: 'gaussian_cylinder', enclosed: false });
    expect(deriveFieldLines(p).flux).toBe(0);
    const chs = lineSource(1e-5, -WIRE_OUTSIDE_Y_M);
    const r = fluxThroughCylinder(chs, 0, GAUSS_CYL_LEN_M / 2, surfaceRadiusM(p));
    // Against what it WOULD have been had the wire run through it.
    const wouldHaveBeen = (1e-5 * GAUSS_CYL_LEN_M) / EPS0;
    expect(Math.abs(r.total) / wouldHaveBeen).toBeLessThan(0.005);
  });
});

/* -------------------------------------------------------------- pillbox */

describe('gaussian_pillbox: ONE cap area of sheet, not two', () => {
  // Two geometric corners; the charge_uc corner is covered by the exact
  // linearity assertion below, for the reason stated on the cylinder above.
  test.each([
    [10, SURFACE_SCALE_MIN], [10, SURFACE_SCALE_MAX],
  ])('sigma=%p uC/m2, surface_scale=%p', (charge_uc, surface_scale) => {
    const p = base({ configuration: 'gaussian_pillbox', charge_uc, surface_scale });
    const d = deriveFieldLines(p);
    const a = surfaceRadiusM(p);
    const chs = sheetSource(charge_uc * 1e-6, 0);
    const r = fluxThroughCylinder(chs, 0, PILLBOX_LEN_M / 2, a, 16, 32, 16);

    expect(rel(r.total, d.flux)).toBeLessThan(0.003);
    // The two caps carry it all; the curved side carries nothing, because E
    // is perpendicular to the sheet and therefore parallel to that side.
    expect(rel(r.caps, d.flux)).toBeLessThan(0.005);
    expect(Math.abs(r.curved) / Math.abs(r.total)).toBeLessThan(0.005);

    // The factor-of-two trap, stated as its own assertion so a future reader
    // sees which way round it goes: the FLUX is 2*E*A, the CHARGE is sigma*A.
    expect(rel(r.total, 2 * d.fieldMagnitude * Math.PI * a * a)).toBeLessThan(0.003);
    expect(d.enclosedChargeUc).toBeCloseTo(charge_uc * Math.PI * a * a, 9);
  });

  test('flux is EXACTLY linear in sigma, so the charge_uc corners need no integral', () => {
    for (const surface_scale of [SURFACE_SCALE_MIN, 1, SURFACE_SCALE_MAX]) {
      const lo = deriveFieldLines(base({ configuration: 'gaussian_pillbox', charge_uc: 4, surface_scale }));
      const hi = deriveFieldLines(base({ configuration: 'gaussian_pillbox', charge_uc: 20, surface_scale }));
      expect(hi.flux / lo.flux).toBeCloseTo(5, 12);
      expect(hi.enclosedChargeUc / lo.enclosedChargeUc).toBeCloseTo(5, 12);
    }
  });

  test('a pillbox entirely on ONE side of the sheet integrates to zero', () => {
    const p = base({ configuration: 'gaussian_pillbox', enclosed: false });
    const d = deriveFieldLines(p);
    expect(d.flux).toBe(0);
    const a = surfaceRadiusM(p);
    const chs = sheetSource(1e-5, 0);
    const r = fluxThroughCylinder(chs, PILLBOX_OUTSIDE_X_M, PILLBOX_LEN_M / 2, a, 16, 32, 16);
    const wouldHaveBeen = (1e-5 * Math.PI * a * a) / EPS0;
    expect(Math.abs(r.total) / wouldHaveBeen).toBeLessThan(0.01);
    // ... and E is UNCHANGED, which is what makes the pair of figures teach
    // something rather than just differ.
    expect(d.fieldMagnitude).toBe(
      deriveFieldLines(base({ configuration: 'gaussian_pillbox', enclosed: true })).fieldMagnitude
    );
  });

  test('E on the sheet is sigma/2eps0, reached by superposing the sheet itself', () => {
    // Coulomb superposition + quadrature, against the Gauss result. The sheet
    // is finite here (60 m) and the point is 5 cm off it, so the discrepancy
    // is the finite-extent tail, not the physics.
    const sigma = 1e-5;
    const chs = sheetSource(sigma, 0);
    const e = fieldAt3d(chs, 0.05, 0, 0);
    expect(rel(e[0], sigma / (2 * EPS0))).toBeLessThan(0.005);
    expect(Math.hypot(e[1], e[2]) / Math.abs(e[0])).toBeLessThan(1e-6); // purely axial
    expect(deriveFieldLines(base({ configuration: 'gaussian_pillbox' })).fieldMagnitude)
      .toBeCloseTo(sigma / (2 * EPS0), -2);
  });
});

/* -------------------------------------------------------- equipotentials */

describe('equipotential_point: contours at EQUAL potential steps', () => {
  test('the radii are R, R/2, R/3, R/4 — crowding toward the charge', () => {
    const radii = equipotentialRadiiM();
    expect(radii).toHaveLength(4);
    radii.forEach((r, i) => expect(r).toBeCloseTo(EQUI_R_MAX_M / (i + 1), 12));
    // Not equally spaced. Stated as an assertion because an equally spaced
    // set is what a careless implementation produces and it would look fine.
    expect(radii[0] - radii[1]).toBeGreaterThan(2 * (radii[1] - radii[2]));
  });

  test.each([4, 10, 20])('charge_uc=%p: the step matches a QUADRATURE of E dr', (charge_uc) => {
    const p = base({ configuration: 'equipotential_point', charge_uc });
    const d = deriveFieldLines(p);
    const q = charge_uc * 1e-6;
    const radii = equipotentialRadiiM();

    // V(r_n) - V(r_1) integrated from the inverse-square law by the midpoint
    // rule — an antiderivative against a Riemann sum, which is CLAUDE.md's own
    // example of an independent route. It reads NOTHING from the widget but
    // the radii and the reported step.
    for (let n = 2; n <= radii.length; n++) {
      const a = radii[n - 1], b = radii[0];
      const N = 200000, h = (b - a) / N;
      let integral = 0;
      for (let i = 0; i < N; i++) {
        const r = a + (i + 0.5) * h;
        integral += ((K * q) / (r * r)) * h;
      }
      expect(rel(integral, (n - 1) * d.potentialStepV)).toBeLessThan(1e-6);
    }
  });

  test('E on the outermost contour is the field the readout prints', () => {
    const d = deriveFieldLines(base({ configuration: 'equipotential_point', charge_uc: 10 }));
    // Central-difference of V(r) = potentialStep * R_max / r, differentiated
    // numerically rather than by rearranging E = kq/r^2.
    const V = (r: number) => (d.potentialStepV * EQUI_R_MAX_M) / r;
    const h = 1e-6;
    const negGrad = -(V(EQUI_R_MAX_M + h) - V(EQUI_R_MAX_M - h)) / (2 * h);
    expect(rel(negGrad, d.fieldMagnitude)).toBeLessThan(1e-6);
  });
});

describe('equipotential_uniform: Fig 2.1, equally spaced because E is constant', () => {
  test.each([4, 10, 20])('sigma=%p uC/m2: E is the superposition of two sheets', (charge_uc) => {
    const d = deriveFieldLines(base({ configuration: 'equipotential_uniform', charge_uc }));
    const sigma = charge_uc * 1e-6;
    // The capacitor field, built from Coulomb rather than from sigma/eps0:
    // a +sigma sheet and a -sigma sheet, superposed at a point between them.
    const plus = sheetSource(sigma, -0.05);
    const minus = sheetSource(-sigma, 0.05);
    const both = concatSources(plus, minus);
    const e = fieldAt3d(both, 0, 0, 0);
    expect(rel(e[0], d.fieldMagnitude)).toBeLessThan(0.01);
    // ... and outside the pair it cancels, which is the other half of
    // P12Ch01Sec61 and the reason the planes are equally spaced.
    const outside = fieldAt3d(both, 0.6, 0, 0);
    expect(Math.abs(outside[0]) / d.fieldMagnitude).toBeLessThan(0.01);
  });

  test('the step between planes is a line integral of E, not E times d retyped', () => {
    const d = deriveFieldLines(base({ configuration: 'equipotential_uniform', charge_uc: 10 }));
    const sigma = 1e-5;
    const plus = sheetSource(sigma, -0.6);
    const minus = sheetSource(-sigma, 0.6);
    // Integrate the SUPERPOSED field along x across one plane gap. The field
    // is only approximately uniform here (finite sheets), which is the point:
    // this number comes from the geometry, not from multiplying two params.
    const both = concatSources(plus, minus);
    const N = 120, h = PLANE_GAP_M / N;
    let dv = 0;
    for (let i = 0; i < N; i++) {
      const x = -PLANE_GAP_M / 2 + (i + 0.5) * h;
      dv += fieldAt3d(both, x, 0, 0)[0] * h;
    }
    expect(rel(dv, d.potentialStepV)).toBeLessThan(0.02);
  });
});

/* ------------------------------------ the header's own numbers, pinned */

/**
 * physics.ts's header states a reference value for every v2 configuration.
 * A header is a claim, and CLAUDE.md section 8 exists because this repo has
 * been burned by contracts citing things that were never true. These pin the
 * stated numbers to the code, so the comment cannot drift away from it.
 *
 * They are NOT the independent check — the surface integrals above are. This
 * block only guarantees that what the header says is what `deriveFieldLines`
 * returns, at the exact defaults the header quotes (charge_uc 10,
 * surface_scale 1, enclosed).
 *
 * Each tolerance is HALF A UNIT IN THE LAST DIGIT THE HEADER QUOTES, so a
 * value written to five significant figures is pinned to five. Writing it
 * looser is how a pin stops pinning: at a tolerance of 500 the header's
 * "4.2745e6" passed against an actual 4274910.8, and the comment was simply
 * wrong. Two of the numbers in that header were wrong in their fifth digit
 * when this block was added, and the loose tolerance is what let one of them
 * through on the first run.
 */
describe("the values physics.ts's header states", () => {
  const at = (configuration: FieldLinesParams['configuration'], enclosed = true) =>
    deriveFieldLines(base({ configuration, enclosed }));

  test('gaussian_sphere, enclosed: Q_enc 10 uC, Phi 1.1294e6, E 1.5979e7', () => {
    const d = at('gaussian_sphere');
    expect(d.enclosedChargeUc).toBeCloseTo(10, 9);
    expect(d.flux).toBeCloseTo(1.1294e6, -2);
    expect(d.fieldMagnitude).toBeCloseTo(1.5979e7, -3);
  });

  test('gaussian_sphere, NOT enclosed: Phi 0 exactly, E 4.2749e6 at the nearest point', () => {
    const d = at('gaussian_sphere', false);
    expect(d.flux).toBe(0);
    expect(d.fieldMagnitude).toBeCloseTo(4.2749e6, -2);
  });

  test('gaussian_cylinder: Q_enc 3.0 uC, Phi 3.3883e5, E 2.3968e6', () => {
    const d = at('gaussian_cylinder');
    expect(d.enclosedChargeUc).toBeCloseTo(3, 9);
    expect(d.flux).toBeCloseTo(3.3883e5, -1);
    expect(d.fieldMagnitude).toBeCloseTo(2.3968e6, -2);
  });

  test('gaussian_pillbox: Q_enc 0.17671 uC, Phi 1.9959e4, E 5.6472e5', () => {
    const d = at('gaussian_pillbox');
    expect(d.enclosedChargeUc).toBeCloseTo(0.17671, 5);
    expect(d.flux).toBeCloseTo(1.9959e4, 0);
    expect(d.fieldMagnitude).toBeCloseTo(5.6472e5, -1);
  });

  test('equipotential_point: dV 6.4200e5 V, E 4.5857e6 N/C', () => {
    const d = at('equipotential_point');
    expect(d.potentialStepV).toBeCloseTo(6.42e5, -1);
    expect(d.fieldMagnitude).toBeCloseTo(4.5857e6, -2);
  });

  test('equipotential_uniform: E 1.1294e6 N/C, dV 6.7766e4 V per surface', () => {
    const d = at('equipotential_uniform');
    expect(d.fieldMagnitude).toBeCloseTo(1.1294e6, -2);
    expect(d.potentialStepV).toBeCloseTo(6.7766e4, 0);
  });

  test('v1\'s four reference results are untouched', () => {
    expect(at('point').fieldMagnitude).toBeCloseTo(8.988e6, -2);
    expect(at('dipole').fieldMagnitude).toBeCloseTo(1.798e7, -4);
    expect(at('like_charges').fieldMagnitude).toBe(0);
    expect(at('parallel_plates').fieldMagnitude).toBeCloseTo(1.129e6, -3);
  });
});

/* --------------------------------------- the derived contract, per config */

describe('derived values are honest about what is NOT drawn', () => {
  const ALL = [
    'point', 'dipole', 'like_charges', 'parallel_plates',
    'gaussian_sphere', 'gaussian_cylinder', 'gaussian_pillbox',
    'equipotential_point', 'equipotential_uniform',
  ] as const;

  test.each(ALL)('%s: every derived key is a finite number', (configuration) => {
    for (const enclosed of [true, false]) {
      for (const surface_scale of [SURFACE_SCALE_MIN, 1, SURFACE_SCALE_MAX]) {
        for (const charge_uc of [4, 20]) {
          const d = deriveFieldLines(base({ configuration, enclosed, surface_scale, charge_uc }));
          for (const [k, v] of Object.entries(d)) {
            expect(`${configuration}.${k}=${v}`).toBe(`${configuration}.${k}=${v}`);
            expect(Number.isFinite(v)).toBe(true);
          }
        }
      }
    }
  });

  test.each(ALL)('%s: flux and enclosed charge are non-zero ONLY where a closed surface is drawn', (configuration) => {
    const d = deriveFieldLines(base({ configuration }));
    const isGauss = configuration.startsWith('gaussian_');
    expect(d.flux !== 0).toBe(isGauss);
    expect(d.enclosedChargeUc !== 0).toBe(isGauss);
    expect(d.potentialStepV !== 0).toBe(configuration.startsWith('equipotential_'));
  });
});
