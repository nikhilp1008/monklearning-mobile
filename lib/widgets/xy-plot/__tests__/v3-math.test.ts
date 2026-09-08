/**
 * xy_plot v3 — the maths, checked by a DIFFERENT ROUTE from the one that
 * computes it.
 *
 * CLAUDE.md: "a cross-check that reaches the same number by rearranging the
 * same equation proves only that algebra works." So none of the checks below
 * re-derive an answer from the same antiderivative table the widget uses:
 *
 *   the exact integrals            against a MIDPOINT RIEMANN SUM over the
 *                                  same integrand. Antiderivative against
 *                                  quadrature is the textbook independent
 *                                  pair, and it is allowed to be approximate
 *                                  precisely because it is only the check —
 *                                  the widget itself still never quadratures.
 *   the exact derivative           against a CENTRAL DIFFERENCE of `evalCurve`,
 *                                  which touches `derivCurve` nowhere.
 *   the tangent                    against the identity that the area between
 *                                  a parabola and its tangent at x0 over
 *                                  [x0−h, x0+h] is 2|a|h³/3. That number
 *                                  comes out of `areaBetween`, so it tests the
 *                                  derivative WITHOUT differentiating.
 *   the piecewise partition        against a payload written as ONE curve
 *                                  where the pieces happen to agree, which
 *                                  must give the identical number.
 *   the named shapes               against the physics they were generated
 *                                  from, stated independently: plateau
 *                                  lengths from latent heats, pH from
 *                                  dilution, the Lennard-Jones minimum at
 *                                  2^(1/6), PE + KE = E.
 *
 * Every expected value was derived from NCERT or a standard table BEFORE the
 * corresponding function was run. Where that discipline caught something, it
 * is written down at the point it caught it.
 */
import {
  areaBetween,
  areaBetweenPieces,
  definiteIntegral,
  definiteIntegralPieces,
  derivCurve,
  evalCurve,
  evalPieces,
  lineSlopeAt,
  pieceCells,
  type CurveKind,
  type CurvePiece,
} from '../plot-math';
import { NAMED_CURVES } from '../named-curves';
import { xyPlot } from '..';

/* ------------------------------------------------------- the quadrature check */

/**
 * Midpoint rule. Deliberately a DIFFERENT method from anything in the widget:
 * it never touches an antiderivative, so it cannot inherit a mistake from
 * one. 200k intervals puts the smooth-integrand error near 1e-11 and the
 * kink-at-a-breakpoint error near 1e-9, both far below the 1e-6 these are
 * asserted at.
 */
function midpoint(f: (x: number) => number, lo: number, hi: number, n = 200000): number {
  const h = (hi - lo) / n;
  let s = 0;
  for (let i = 0; i < n; i++) s += f(lo + h * (i + 0.5));
  return s * h;
}

/* -------------------------------------------------------------- fixtures */

/** |x| as two pieces, over [−1, 1]. The single most important payload v3
 *  adds: v2's own header said this shape "takes two payloads". */
const MODULUS: CurvePiece[] = [
  { from: -1, to: 0, curve: 'line', a: -1, b: 0, c: 0 },
  { from: 0, to: 1, curve: 'line', a: 1, b: 0, c: 0 },
];

/** |x − 1| over [0, 2], whose SIGNED integral differs from its unsigned one
 *  nowhere — and whose sibling `V_SHAPE` below differs everywhere. */
const ABS_SHIFTED: CurvePiece[] = [
  { from: 0, to: 1, curve: 'line', a: -1, b: 0, c: 1 },
  { from: 1, to: 2, curve: 'line', a: 1, b: 0, c: -1 },
];

const STAIRCASE: CurvePiece[] = [0, 1, 2, 3].map((k) => ({
  from: k, to: k + 1, curve: 'line' as CurveKind, a: 0, b: 0, c: k,
}));

describe('xy_plot v3 — piecewise integrals', () => {
  test('∫₀²|x − 1| dx = 1, and a midpoint sum agrees', () => {
    // Two triangles of base 1 and height 1. Derived from the picture, not
    // from the module.
    expect(definiteIntegralPieces(ABS_SHIFTED, 0, 2)).toBeCloseTo(1, 12);
    expect(definiteIntegralPieces(ABS_SHIFTED, 0, 2))
      .toBeCloseTo(midpoint((x) => Math.abs(x - 1), 0, 2), 6);
  });

  test('the SIGNED integral of x − 1 over the same span is 0, where |x − 1| is 1', () => {
    // The pair that proves `area` and `area_between` are different questions
    // on a piecewise payload rather than two spellings of one.
    const signed: CurvePiece[] = [{ from: 0, to: 2, curve: 'line', a: 1, b: 0, c: -1 }];
    expect(definiteIntegralPieces(signed, 0, 2)).toBeCloseTo(0, 12);
    expect(areaBetweenPieces(signed, 'line', 0, 0, 0, 0, 2)).toBeCloseTo(1, 12);
    // And the two genuinely differ, or the fixture proves nothing.
    expect(Math.abs(definiteIntegralPieces(signed, 0, 2) - areaBetweenPieces(signed, 'line', 0, 0, 0, 0, 2)))
      .toBeGreaterThan(0.5);
  });

  test('∫₀⁴⌊x⌋dx = 6 over four unit steps', () => {
    // 0 + 1 + 2 + 3, by hand.
    expect(definiteIntegralPieces(STAIRCASE, 0, 4)).toBeCloseTo(6, 12);
    expect(definiteIntegralPieces(STAIRCASE, 0, 4))
      .toBeCloseTo(midpoint((x) => Math.floor(x), 0, 4), 6);
  });

  test('reversing the limits negates a piecewise integral', () => {
    expect(definiteIntegralPieces(ABS_SHIFTED, 2, 0)).toBeCloseTo(-1, 12);
  });

  test('a piecewise definition that is really one curve gives the one-curve answer', () => {
    // The partition must be invisible when it does not partition anything.
    // An INDEPENDENT route to the piecewise machinery: same integrand, no
    // pieces, a completely different code path.
    const split: CurvePiece[] = [
      { from: 0, to: 1, curve: 'parabola', a: 1, b: 0, c: 0 },
      { from: 1, to: 2, curve: 'parabola', a: 1, b: 0, c: 0 },
    ];
    expect(definiteIntegralPieces(split, 0, 2))
      .toBeCloseTo(definiteIntegral('parabola', 1, 0, 0, 0, 2), 12);
    expect(definiteIntegralPieces(split, 0, 2)).toBeCloseTo(8 / 3, 12);
  });

  test('a partial interval integrates only its overlap with each piece', () => {
    // ∫_{0.5}^{1.5}|x − 1| = two half-triangles of base 0.5, so 2 × 1/8 = 1/4.
    expect(definiteIntegralPieces(ABS_SHIFTED, 0.5, 1.5)).toBeCloseTo(0.25, 12);
    expect(definiteIntegralPieces(ABS_SHIFTED, 0.5, 1.5))
      .toBeCloseTo(midpoint((x) => Math.abs(x - 1), 0.5, 1.5), 6);
  });
});

describe('xy_plot v3 — the region between a piecewise f and one curve', () => {
  test('y = |x| against y = x² on [−1,1] is 1/3, IN ONE PAYLOAD', () => {
    // NCERT Class 12 Ch8. By symmetry 2∫₀¹(x − x²)dx = 2(1/2 − 1/3) = 1/3.
    // plot-math.ts's own v2 header says of this shape: "NOT expressible as
    // one payload: |x| is piecewise, so it takes two (each 1/6)". It is now.
    expect(areaBetweenPieces(MODULUS, 'parabola', 1, 0, 0, -1, 1)).toBeCloseTo(1 / 3, 12);
    // Independent route: a midpoint sum of the same integrand.
    expect(areaBetweenPieces(MODULUS, 'parabola', 1, 0, 0, -1, 1))
      .toBeCloseTo(midpoint((x) => Math.abs(Math.abs(x) - x * x), -1, 1), 6);
    // And it is the sum of the two v2 payloads, which is the third route.
    const right = areaBetween('line', 1, 0, 0, 'parabola', 1, 0, 0, 0, 1);
    const left = areaBetween('line', -1, 0, 0, 'parabola', 1, 0, 0, -1, 0);
    expect(right + left).toBeCloseTo(1 / 3, 12);
  });

  test('a crossing INSIDE a piece is still split — |x| against y = 0.5', () => {
    /*
     * THE CASE THAT NEEDS BOTH PARTITIONS AT ONCE. |x| crosses the line
     * y = 0.5 at −0.5 and at +0.5, one crossing strictly inside each piece.
     * Over [−1, 1] the exact area is four triangles of base 0.5 and height
     * 0.5, i.e. 4 × (1/2)(0.5)(0.5) = 0.5.
     *
     * A version that split only at breakpoints and integrated each piece
     * whole would report |∫(|x| − 0.5)| per piece = |0.5 − 0.5| = 0 on each,
     * for a total of ZERO — a confidently blank answer under a picture with
     * four visible triangles in it. This is the v2 crossing lesson surviving
     * the addition of pieces, and it is the reason `areaBetweenPieces` calls
     * `areaBetween` per cell rather than `definiteIntegral`.
     */
    expect(areaBetweenPieces(MODULUS, 'line', 0, 0, 0.5, -1, 1)).toBeCloseTo(0.5, 12);
    expect(areaBetweenPieces(MODULUS, 'line', 0, 0, 0.5, -1, 1))
      .toBeCloseTo(midpoint((x) => Math.abs(Math.abs(x) - 0.5), -1, 1), 6);
    // The naive per-piece signed version, written out so the fixture has
    // something to fail against.
    const naivePerPiece =
      Math.abs(definiteIntegral('line', -1, 0, 0, -1, 0) - definiteIntegral('line', 0, 0, 0.5, -1, 0)) +
      Math.abs(definiteIntegral('line', 1, 0, 0, 0, 1) - definiteIntegral('line', 0, 0, 0.5, 0, 1));
    expect(naivePerPiece).toBeCloseTo(0, 12);
  });

  test('a piece whose kind has no closed-form crossing makes the whole thing NaN', () => {
    const withSine: CurvePiece[] = [
      { from: 0, to: 1, curve: 'line', a: 1, b: 0, c: 0 },
      { from: 1, to: 2, curve: 'sine', a: 1, b: 1, c: 0 },
    ];
    expect(Number.isNaN(areaBetweenPieces(withSine, 'line', 1, 0, 0, 0, 2))).toBe(true);
  });

  test('pieceCells partitions the interval at the breakpoints inside it, and nowhere else', () => {
    expect(pieceCells(MODULUS, -1, 1)).toEqual([-1, 0, 1]);
    // A breakpoint outside the requested span is not a cut.
    expect(pieceCells(MODULUS, 0.25, 0.75)).toEqual([0.25, 0.75]);
    // A breakpoint ON the boundary is not a duplicate cut either.
    expect(pieceCells(MODULUS, 0, 1)).toEqual([0, 1]);
  });

  test('evalPieces is single-valued at a breakpoint and undefined outside', () => {
    expect(evalPieces(MODULUS, 0)).toBeCloseTo(0, 12);
    expect(evalPieces(MODULUS, -0.5)).toBeCloseTo(0.5, 12);
    expect(evalPieces(MODULUS, 0.5)).toBeCloseTo(0.5, 12);
    expect(Number.isNaN(evalPieces(MODULUS, 2))).toBe(true);
  });
});

/* ------------------------------------------------------------- derivatives */

describe('xy_plot v3 — the derivative and the tangent', () => {
  /** Central difference of `evalCurve` — never touches `derivCurve`. */
  const numeric = (kind: CurveKind, a: number, b: number, c: number, x: number) => {
    const h = 1e-6;
    return (evalCurve(kind, a, b, c, x + h) - evalCurve(kind, a, b, c, x - h)) / (2 * h);
  };

  test.each([
    ['line', 2, 0, 1, 3, 2],                       // d/dx (2x + 1) = 2
    ['parabola', 1, 0, 0, 3, 6],                   // d/dx (x²) at 3 = 6
    ['parabola', -1, 4, 0, 2, 0],                  // the vertex of −x² + 4x
    ['sine', 1, 1, 0, 0, 1],                       // d/dx sin x at 0 = 1
    ['sine', 1, 1, 0, Math.PI / 2, 0],             // ...and 0 at the crest
    ['exponential', 1, 1, 0, 0, 1],                // d/dx eˣ at 0 = 1
    ['reciprocal', 1, 0, 0, 2, -0.25],             // d/dx (1/x) at 2 = −1/4
  ] as [CurveKind, number, number, number, number, number][])(
    '%s(%p, %p, %p) has the known derivative at %p',
    (kind, a, b, c, x, expected) => {
      // The value NCERT would give, first.
      expect(derivCurve(kind, a, b, c, x)).toBeCloseTo(expected, 10);
      // Then the independent route: a central difference of the curve itself.
      expect(derivCurve(kind, a, b, c, x)).toBeCloseTo(numeric(kind, a, b, c, x), 5);
    }
  );

  test('the normal is the negative reciprocal, and vertical at a stationary point', () => {
    expect(lineSlopeAt('parabola', 1, 0, 0, 3, 'tangent')).toBeCloseTo(6, 12);
    expect(lineSlopeAt('parabola', 1, 0, 0, 3, 'normal')).toBeCloseTo(-1 / 6, 12);
    // At the vertex the tangent is horizontal and the normal is vertical.
    expect(lineSlopeAt('parabola', 1, 0, 0, 0, 'tangent')).toBe(0);
    expect(Number.isFinite(lineSlopeAt('parabola', 1, 0, 0, 0, 'normal'))).toBe(false);
    expect(lineSlopeAt('parabola', 1, 0, 0, 0, 'none')).toBe(0);
  });

  test('the tangent is right by an identity that never differentiates anything', () => {
    /*
     * THE STRONGEST CHECK HERE, and the one that is not a rearrangement.
     *
     * For y = ax² + bx + c, the tangent at x0 is the unique line meeting the
     * curve there with a double root, so f − tangent = a(x − x0)². The area
     * between them on [x0 − h, x0 + h] is therefore
     *
     *     ∫ |a|(x − x0)² dx = 2|a|h³/3,
     *
     * a number that depends on `a` and `h` and NOT on the slope. If
     * `derivCurve` returned 2ax0 + b + ε, the line would not have a double
     * root, the area would pick up a term linear in ε, and this would fail —
     * while any check of the form "slope equals 2ax0 + b" would pass, because
     * that is the formula being checked.
     *
     * `areaBetween` computes it, so the route runs through the integrator and
     * the crossing solver rather than through the differentiator.
     */
    for (const [a, b, c, x0, h] of [
      [1, 0, 0, 3, 1], [1, 0, 0, 3, 0.5], [2, -3, 5, -1, 1.5], [-0.5, 4, 0, 2, 2],
    ]) {
      const m = derivCurve('parabola', a, b, c, x0);
      const yAt = evalCurve('parabola', a, b, c, x0);
      // The tangent as a LINE payload: y = m x + (y0 − m x0).
      const area = areaBetween(
        'parabola', a, b, c,
        'line', m, 0, yAt - m * x0,
        x0 - h, x0 + h
      );
      expect(area).toBeCloseTo((2 * Math.abs(a) * h * h * h) / 3, 10);
    }
  });

  test('derive() reports the slope of the drawn line and the point it touches', () => {
    const base = xyPlot.defaults;
    const p = {
      ...base, mode: 'curve' as const, curve: 'parabola' as const,
      a: 1, b: 0, c: 0, x_min: 0, x_max: 4,
      tangent_kind: 'normal' as const, tangent_at: 3,
    };
    const d = xyPlot.computeDerived(p);
    // The NORMAL's slope, not f′ — the student is looking at the normal.
    expect(d.slope).toBeCloseTo(-1 / 6, 12);
    expect(d.tangentX).toBeCloseTo(3, 12);
    expect(d.tangentY).toBeCloseTo(9, 12);
  });

  test('on a piecewise f the tangent reads the piece it touches, not the top-level curve', () => {
    const p = {
      ...xyPlot.defaults, mode: 'curve' as const,
      // A top-level curve that is deliberately WRONG for the region, so a
      // tangent computed from it would be visibly different.
      curve: 'parabola' as const, a: 99, b: 0, c: 0,
      x_min: -1, x_max: 1, pieces: MODULUS,
      tangent_kind: 'tangent' as const, tangent_at: 0.5,
    };
    // The right half of |x| is y = x, slope 1. From the top-level parabola it
    // would be 2 × 99 × 0.5 = 99.
    expect(xyPlot.computeDerived(p).slope).toBeCloseTo(1, 12);
    expect(xyPlot.computeDerived({ ...p, tangent_at: -0.5 }).slope).toBeCloseTo(-1, 12);
  });
});

/* ------------------------------------------------------- integration axis */

describe('xy_plot v3 — integrating along either axis', () => {
  const accept = (raw: Record<string, unknown>) => {
    const r = xyPlot.validate(raw);
    if (!r.ok) throw new Error(r.errors.join(' | '));
    return r.params;
  };

  test('the transpose does not change the number, because it is a projection', () => {
    /*
     * ∫f du is the same integral whichever pixel axis u is drawn on, so this
     * is the invariant that says `integrate_along` is a rendering flag and
     * not a second implementation of the maths. If it ever fails, something
     * in `planFrame` has leaked into `derive`.
     */
    const raw = {
      ...xyPlot.defaults, mode: 'area_between' as const,
      curve: 'line' as const, a: 0, b: 0, c: 1,
      curve2: 'parabola' as const, a2: 0.25, b2: 0, c2: 0,
      x_min: -2.4, x_max: 2.4, shade_from: -2, shade_to: 2,
    };
    const alongX = xyPlot.computeDerived(accept({ ...raw, integrate_along: 'x' })).area;
    const alongY = xyPlot.computeDerived(accept({ ...raw, integrate_along: 'y' })).area;
    expect(alongX).toBe(alongY);
    // NCERT Class 12 Ch8: the area bounded by y² = 4ax and its latus rectum
    // is 8a²/3, which is 8/3 at a = 1. Derived from the textbook, then
    // compared — and confirmed by a midpoint sum of the same integrand.
    expect(alongY).toBeCloseTo(8 / 3, 10);
    expect(alongY).toBeCloseTo(midpoint((y) => Math.abs(1 - (y * y) / 4), -2, 2), 6);
  });

  test('A SQUARE ROOT AGAINST A LINE, with no sqrt curve kind anywhere', () => {
    /*
     * y = √x against y = x, which meet at (0,0) and (1,1):
     *   ∫₀¹(√x − x)dx = 2/3 − 1/2 = 1/6.
     *
     * Integrating along y instead turns BOTH boundaries into functions of y:
     * y = √x becomes x = y², a parabola, and y = x becomes x = y, a line. So
     * the picture on the board IS a square root against a line — the plotted
     * set {(u², u)} is exactly {(x, √x)} — with the widget's existing
     * polynomial machinery and no new curve kind at all.
     *
     * This was NOT the reason `integrate_along` was built and it was not
     * noticed until the coverage was counted; it closes gap_sqrt_curve_vs_line
     * outright. Note what it does NOT close: y = x² against y = √x, the
     * function-and-inverse case, whose y-boundaries are x = √y and x = y² —
     * one missing sqrt kind turning into another. Covering one and not the
     * other is exactly the kind of thing that gets claimed wrongly from a
     * concept name, so both are fixtures.
     */
    const p = accept({
      ...xyPlot.defaults, mode: 'area_between', integrate_along: 'y',
      curve: 'parabola', a: 1, b: 0, c: 0,
      curve2: 'line', a2: 1, b2: 0, c2: 0,
      x_min: -0.2, x_max: 1.2, shade_from: 0, shade_to: 1,
    });
    expect(xyPlot.computeDerived(p).area).toBeCloseTo(1 / 6, 12);
    // The independent route: quadrature of the ORIGINAL, un-transposed
    // integrand, √x − x, which never mentions a parabola.
    expect(xyPlot.computeDerived(p).area)
      .toBeCloseTo(midpoint((x) => Math.abs(Math.sqrt(x) - x), 0, 1), 5);
  });

  test('...and the function-against-its-inverse case is still NOT one payload', () => {
    // y = x² against y = √x. Along y the boundaries are x = √y and x = y²,
    // so transposing swaps which side needs the missing kind rather than
    // removing the need. The best a single payload can do is the region
    // between y = x² and y = x, which is HALF of it by the symmetry about
    // y = x: 1/6 against the true 1/3.
    const half = accept({
      ...xyPlot.defaults, mode: 'area_between',
      curve: 'parabola', a: 1, b: 0, c: 0,
      curve2: 'line', a2: 1, b2: 0, c2: 0,
      x_min: -0.2, x_max: 1.2, shade_from: 0, shade_to: 1,
    });
    expect(xyPlot.computeDerived(half).area).toBeCloseTo(1 / 6, 12);
    expect(midpoint((x) => Math.abs(Math.sqrt(x) - x * x), 0, 1)).toBeCloseTo(1 / 3, 5);
    // The two differ by a factor of two, which is why this is a NO and not a
    // "close enough".
    expect(2 * xyPlot.computeDerived(half).area).toBeCloseTo(1 / 3, 10);
  });

  test('a named shape is never transposed even when the payload asks', () => {
    // Swapping the axes of a stress-strain curve is a different and wrong
    // figure, so `planFrame` ignores the flag there. Asserted through the
    // rendered readout's axis order rather than through planFrame, which is
    // not exported.
    const p = accept({
      ...xyPlot.defaults, mode: 'named', named_shape: 'stress_strain',
      integrate_along: 'y',
    });
    expect(p.x_label).toBe(NAMED_CURVES.stress_strain.xLabel);
    expect(p.y_label).toBe(NAMED_CURVES.stress_strain.yLabel);
  });
});

/* ------------------------------------------------------------ named shapes */

describe('xy_plot v3 — the named shapes, against the physics they came from', () => {
  const yAt = (id: string, u: number, curve = 0): number => {
    const pts = NAMED_CURVES[id].curves[curve].points;
    let best = pts[0];
    for (const p of pts) if (Math.abs(p[0] - u) < Math.abs(best[0] - u)) best = p;
    return best[1];
  };

  test('the heating curve plateaus are the latent heats, and their ratio is 6.77', () => {
    /*
     * NCERT Physics XI Ch11, for 1 kg: L_f = 3.34e5 J/kg and L_v = 22.6e5
     * J/kg, so the boiling plateau is 2260 kJ against the melting plateau's
     * 334 — a factor of 6.766. That ratio is the single thing the figure
     * teaches and the thing a hand-drawn version always gets wrong.
     * Measured off the DRAWN VERTICES, not off the constants.
     */
    const pts = NAMED_CURVES.heating.curves[0].points;
    const melt = pts[2][0] - pts[1][0];
    const boil = pts[4][0] - pts[3][0];
    expect(melt).toBeCloseTo(334, 6);
    expect(boil).toBeCloseTo(2260, 6);
    expect(boil / melt).toBeCloseTo(6.766, 3);
    // The plateaus are flat, at 0 °C and 100 °C.
    expect(pts[1][1]).toBe(0);
    expect(pts[2][1]).toBe(0);
    expect(pts[3][1]).toBe(100);
    expect(pts[4][1]).toBe(100);
    // Water 0 -> 100 costs c·ΔT = 4186 × 100 = 418.6 kJ.
    expect(pts[3][0] - pts[2][0]).toBeCloseTo(418.6, 6);
  });

  test('the titration curve is pH 1.000 at the start, 7 at equivalence, 12.523 at the end', () => {
    // 25.00 mL of 0.100 M HCl with 0.100 M NaOH. Computed by hand from the
    // dilution: [H+] = 0.1 at 0 mL; exactly neutral at 25.00 mL;
    // [OH−] = 2.5/75 = 0.03333 at 50 mL, so pOH = 1.4771 and pH = 12.5229.
    expect(yAt('titration', 0)).toBeCloseTo(1.0, 6);
    expect(yAt('titration', 25)).toBeCloseTo(7.0, 6);
    expect(yAt('titration', 50)).toBeCloseTo(12.5229, 3);
    // The jump across the equivalence point is the figure's whole subject: a
    // 0.2 mL window either side spans more than six pH units.
    expect(yAt('titration', 25.05) - yAt('titration', 24.9)).toBeGreaterThan(6);
    // The equivalence landmark is AT the equivalence point, not near it.
    expect(NAMED_CURVES.titration.landmarks[0].u).toBe(25);
    expect(NAMED_CURVES.titration.landmarks[0].v).toBe(7);
  });

  test('the interatomic potential has its minimum at 2^(1/6) sigma with U = -epsilon', () => {
    // Lennard-Jones 12-6: dU/dr = 0 at r = 2^(1/6) = 1.12246, where U = −ε.
    // Both exact, both from the algebra rather than from the sampled curve.
    const pts = NAMED_CURVES.potential_energy.curves[0].points;
    let min = pts[0];
    for (const p of pts) if (p[1] < min[1]) min = p;
    expect(min[0]).toBeCloseTo(Math.pow(2, 1 / 6), 1);
    expect(min[1]).toBeCloseTo(-1, 3);
    // U = 0 at r = sigma = 1, which is the other exact point on this curve.
    const atSigma = pts.find((p) => Math.abs(p[0] - 1) < 0.02);
    if (atSigma) expect(Math.abs(atSigma[1])).toBeLessThan(0.35);
    // The landmark is placed at the analytic minimum, not at a sample.
    expect(NAMED_CURVES.potential_energy.landmarks[0].u).toBeCloseTo(Math.pow(2, 1 / 6), 12);
    expect(NAMED_CURVES.potential_energy.landmarks[0].v).toBe(-1);
  });

  test('the SHM energy curves satisfy PE + KE = E at every drawn x', () => {
    /*
     * This is the figure. Asserted POINTWISE rather than trusted to the two
     * formulas having been typed correctly — the failure mode of a
     * hand-written KE = k(A²−x²)/2 is a dropped factor of 2, which looks
     * perfectly plausible on the board and breaks exactly this identity.
     */
    const [pe, ke, total] = NAMED_CURVES.shm_energy.curves;
    expect(pe.points.length).toBe(ke.points.length);
    for (let i = 0; i < pe.points.length; i++) {
      expect(pe.points[i][0]).toBeCloseTo(ke.points[i][0], 12);
      expect(pe.points[i][1] + ke.points[i][1]).toBeCloseTo(0.5, 12);
    }
    for (const p of total.points) expect(p[1]).toBeCloseTo(0.5, 12);
  });

  test('binding energy per nucleon peaks at Fe-56 and is 7.57 at U-238', () => {
    // NCERT Physics XII Ch13 Fig 13.1. 8.79 MeV at A = 56 is the maximum of
    // the whole curve, which is what makes fusion below it and fission above
    // it both release energy.
    const pts = NAMED_CURVES.binding_energy.curves[0].points;
    let peak = pts[0];
    for (const p of pts) if (p[1] > peak[1]) peak = p;
    expect(peak[0]).toBe(56);
    expect(peak[1]).toBeCloseTo(8.79, 6);
    expect(yAt('binding_energy', 2)).toBeCloseTo(1.11, 6);
    expect(yAt('binding_energy', 4)).toBeCloseTo(7.07, 6);
    expect(yAt('binding_energy', 238)).toBeCloseTo(7.57, 6);
  });

  test('the resonance peaks are 1/(b/m) at the natural frequency', () => {
    // A(ω₀) = (F₀/m)/√(0 + (bω₀/m)²) = 1/(b/m) at ω₀ = 1, F₀/m = 1. So the
    // three damped curves peak at 5, 2.5 and 1.25 — derived from the formula
    // before the module was run.
    const expected = [5, 2.5, 1.25];
    NAMED_CURVES.resonance.curves.forEach((trace, i) => {
      const at1 = trace.points.reduce((best, p) =>
        Math.abs(p[0] - 1) < Math.abs(best[0] - 1) ? p : best);
      expect(at1[1]).toBeCloseTo(expected[i], 3);
    });
    // Heavier damping is lower everywhere near resonance — the ordering the
    // figure exists to show.
    const at = (i: number) => NAMED_CURVES.resonance.curves[i].points
      .reduce((b, p) => (Math.abs(p[0] - 1) < Math.abs(b[0] - 1) ? p : b))[1];
    expect(at(0)).toBeGreaterThan(at(1));
    expect(at(1)).toBeGreaterThan(at(2));
  });

  test('the logistic growth curve has its inflection at half the carrying capacity', () => {
    // N = K/(1 + e^{a−rt}) with K = 100, r = 0.5, a = 5, so N = 50 at
    // t = a/r = 10 exactly, and N -> K from below.
    expect(yAt('growth_curve', 10)).toBeCloseTo(50, 3);
    const pts = NAMED_CURVES.growth_curve.curves[0].points;
    expect(pts[pts.length - 1][1]).toBeLessThan(100);
    expect(pts[pts.length - 1][1]).toBeGreaterThan(99);
    // The J-curve starts from the same N0 and is clipped where it leaves the
    // box, which is what the book draws.
    const j = NAMED_CURVES.growth_curve.curves[1].points;
    expect(j[0][1]).toBeCloseTo(pts[0][1], 6);
    expect(j[j.length - 1][1]).toBeCloseTo(110, 3);
  });

  test('the diode knee is at 0.7 V and the solar cell has Isc 40 mA, Voc 0.60 V', () => {
    // Silicon, NCERT Physics XII Ch14. The forward current at 0.7 V is a few
    // mA and at 0.75 V is 30 mA by construction — an order of magnitude in
    // 50 mV is what "knee" means.
    const at07 = yAt('diode_iv', 0.7);
    const at05 = yAt('diode_iv', 0.5);
    expect(at07).toBeGreaterThan(5);
    expect(at07 / Math.max(at05, 1e-9)).toBeGreaterThan(10);
    // Reverse of breakdown, the current is flat on the axis at this scale.
    expect(Math.abs(yAt('diode_iv', -2))).toBeLessThan(1e-6);

    const cell = NAMED_CURVES.solar_cell_iv.curves[0].points;
    expect(cell[0][0]).toBe(0);
    expect(cell[0][1]).toBeCloseTo(40, 6);
    // I(V_oc) = 0 at 0.60 V, which is what I_S was solved for.
    const atVoc = cell.reduce((b, p) => (Math.abs(p[0] - 0.6) < Math.abs(b[0] - 0.6) ? p : b));
    expect(Math.abs(atVoc[1])).toBeLessThan(1.5);
    // The maximum-power point sits strictly inside, which is the whole point
    // of marking it.
    const mpp = NAMED_CURVES.solar_cell_iv.landmarks[2];
    expect(mpp.u).toBeGreaterThan(0.3);
    expect(mpp.u).toBeLessThan(0.6);
    expect(mpp.v).toBeGreaterThan(0);
  });

  test('no named shape reports an area, in any mode', () => {
    // Several of these are qualitative, so ∫ under them is a number with no
    // referent. `derive` must return 0 rather than something plausible.
    for (const id of Object.keys(NAMED_CURVES)) {
      const r = xyPlot.validate({ ...xyPlot.defaults, mode: 'named', named_shape: id });
      expect(r.ok).toBe(true);
      const d = xyPlot.computeDerived((r as { ok: true; params: typeof xyPlot.defaults }).params);
      expect(d.area).toBe(0);
      expect(d.slope).toBe(0);
    }
  });

  test('every named shape carries a source note naming where its numbers came from', () => {
    for (const [id, def] of Object.entries(NAMED_CURVES)) {
      expect(def.source.length).toBeGreaterThan(80);
      expect(def.curves.length).toBeGreaterThan(0);
      expect(def.landmarks.length).toBeGreaterThan(0);
      expect(def.uMax).toBeGreaterThan(def.uMin);
      expect(def.id).toBe(id);
      for (const trace of def.curves) {
        expect(trace.points.length).toBeGreaterThan(2);
        for (const [u, v] of trace.points) {
          expect(Number.isFinite(u)).toBe(true);
          expect(Number.isFinite(v)).toBe(true);
        }
      }
    }
  });
});
