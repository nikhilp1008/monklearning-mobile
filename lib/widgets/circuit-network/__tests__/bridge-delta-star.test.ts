/**
 * The UNBALANCED Wheatstone bridge's equivalent resistance.
 *
 * This file exists because `circuit_network` reported `(P + R) ‖ (Q + S)` for
 * `bridge` — the answer you get by DELETING the galvanometer branch, which is
 * exact only when no current flows through it, i.e. only at balance. The widget
 * animates `bridge_delta`; it draws the deflected needle of an unbalanced
 * bridge, so the one case it is drawing is the one case the old number was
 * wrong for, printed to three significant figures.
 *
 * It lives beside the widget rather than in `lib/widgets/__tests__/physics.ts`
 * deliberately: this is one physics claim with one independent check, and it
 * should be readable as a unit.
 *
 * THE INDEPENDENT ROUTE. `derive()` reaches r_eq by the Δ–Y transformation.
 * `branchCurrentReq` below reaches it by writing Kirchhoff's laws for the five
 * branch currents and solving the 5x5 system by Gaussian elimination — two KCL
 * equations, three KVL loops, no series/parallel folding and no Δ–Y identity
 * anywhere in it. It shares no algebra with the thing it checks, which is the
 * property this widget's PREVIOUS self-check lacked: `terminal_v === i_total *
 * r_eq` is `V − i·r ≡ i·R`, true by construction for any r_eq however wrong,
 * and it is what let a 0.41%-to-16-million-percent error sit green.
 */
import {
  VALUE_MIN,
  VALUE_MAX_BY_KIND,
  bridgeDeltaStar,
  derive,
  equivalentHenry,
  type CircuitElement,
  type CircuitNetworkParams,
} from '../circuit-math';
import { circuitNetwork } from '../index';

/* --------------------------------------------------------- the two routes */

/**
 * ROUTE 2 — branch currents, from Kirchhoff's laws directly.
 *
 * Nodes A (supply +), B (supply −), C (west), D (east). Positive current
 * directions: i_P A→C, i_Q A→D, i_R C→B, i_S D→B, i_G C→D.
 *
 *   KCL at C          i_P − i_R − i_G       = 0
 *   KCL at D          i_Q + i_G − i_S       = 0
 *   KVL A→C→D→A       i_P·P + i_G·G − i_Q·Q = 0
 *   KVL C→B→D→C       i_R·R − i_S·S − i_G·G = 0
 *   KVL A→C→B         i_P·P + i_R·R         = V
 *
 * r_eq = V / (i_P + i_Q).
 */
function branchCurrentReq(p: number, q: number, r: number, s: number, g: number): number {
  const V = 1;
  const M = [
    [1, 0, -1, 0, -1],
    [0, 1, 0, -1, 1],
    [p, -q, 0, 0, g],
    [0, 0, r, -s, -g],
    [p, 0, r, 0, 0],
  ];
  const [iP, iQ] = gaussianSolve(M, [0, 0, 0, 0, V]);
  return V / (iP + iQ);
}

/** Gaussian elimination with partial pivoting. Deliberately the textbook one. */
function gaussianSolve(A: number[][], b: number[]): number[] {
  const n = b.length;
  const m = A.map((row, i) => [...row, b[i]]);
  for (let k = 0; k < n; k++) {
    let piv = k;
    for (let i = k + 1; i < n; i++) if (Math.abs(m[i][k]) > Math.abs(m[piv][k])) piv = i;
    [m[k], m[piv]] = [m[piv], m[k]];
    for (let i = k + 1; i < n; i++) {
      const f = m[i][k] / m[k][k];
      for (let j = k; j <= n; j++) m[i][j] -= f * m[k][j];
    }
  }
  const x = new Array<number>(n).fill(0);
  for (let i = n - 1; i >= 0; i--) {
    let acc = m[i][n];
    for (let j = i + 1; j < n; j++) acc -= m[i][j] * x[j];
    x[i] = acc / m[i][i];
  }
  return x;
}

/** The formula this change REPLACED, kept so the balance case can be asserted
 *  against it rather than against a number retyped from it. */
const oldParallelApproximation = (p: number, q: number, r: number, s: number): number =>
  ((p + r) * (q + s)) / (p + r + q + s);

/* ------------------------------------------------------------- the payload */

const Rel = (name: string, value: number): CircuitElement =>
  ({ kind: 'resistor', name, value });

function bridgeParams(
  p: number, q: number, r: number, s: number, g: number
): CircuitNetworkParams {
  return {
    topology: 'bridge',
    elements: [Rel('P', p), Rel('Q', q), Rel('R', r), Rel('S', s),
      { kind: 'galvanometer', name: 'G', value: g }],
    source_v: 2,
    internal_r: 0,
    bridge_null_cm: 53.5,
    show_current: false,
    t_frac: 0,
    bridge_delta: 0.6,
    caption: '',
  };
}

const rel = (a: number, b: number) => Math.abs(a - b) / Math.max(Math.abs(b), Number.MIN_VALUE);

/* ------------------------------------------------------------------ tests */

describe('bridge r_eq — the two routes agree', () => {
  /**
   * The three payloads the defect was measured on, plus the schema-extreme one
   * where the old formula was off by five orders of magnitude. Every expected
   * value here was derived by the Δ–Y reduction BY HAND and confirmed by the
   * branch-current solve before being typed; none was read out of the widget.
   */
  test.each([
    // arms + G                       Δ–Y result     old formula   old error
    [6, 4, 3, 5, 50, 4.481633, 4.5],
    [6, 3, 4, 5, 50, 4.426096, 4.444444],
    [6, 3, 4, 5, 0.5, 4.244444, 4.444444],
    [100, 100, 100, 150, 50, 110.344828, 111.111111],
    [0.01, 10000, 10000, 0.01, 0.01, 0.03, 5000.005],
  ])('P%p Q%p R%p S%p G%p -> %p Ω (the old formula said %p)',
    (p, q, r, s, g, expected, old) => {
      expect(derive(bridgeParams(p, q, r, s, g)).r_eq).toBeCloseTo(expected, 6);
      expect(oldParallelApproximation(p, q, r, s)).toBeCloseTo(old, 6);
    });

  test('the worst case closed: 5000.005 Ω reported where the answer is 0.030 Ω', () => {
    // P 0.01, S 0.01 are near-shorts from A to C and from D to B; G 0.01 then
    // ties C to D, so the network is a whisker, not a 5 kΩ resistor. The old
    // formula could not see it because the branch doing the shorting was the
    // one it deleted.
    const d = derive(bridgeParams(0.01, 10000, 10000, 0.01, 0.01));
    expect(d.r_eq).toBeCloseTo(0.0299999, 6);
    expect(oldParallelApproximation(0.01, 10000, 10000, 0.01)).toBeCloseTo(5000.005, 6);
    expect(oldParallelApproximation(0.01, 10000, 10000, 0.01) / d.r_eq).toBeGreaterThan(100000);
  });

  test('agrees with the branch-current solve across a spread of unbalanced bridges', () => {
    const vals = [0.01, 0.5, 3, 6, 47, 470, 4700, 1e5, 1e7];
    let worst = 0;
    let worstAt: number[] = [];
    for (const p of vals) for (const q of vals) for (const g of vals) {
      // r and s chosen to keep the sweep at 3^5-ish size without pinning the
      // ratio: two off-balance choices per (p, q).
      for (const [r, s] of [[q, p], [4, 5], [1e7, 0.01]] as const) {
        const a = derive(bridgeParams(p, q, r, s, g)).r_eq;
        const b = branchCurrentReq(p, q, r, s, g);
        expect(Number.isFinite(a)).toBe(true);
        const e = rel(a, b);
        if (e > worst) { worst = e; worstAt = [p, q, r, s, g]; }
      }
    }
    expect([worst < 1e-9, worstAt]).toEqual([true, worstAt]);
  });

  test('agrees at all 32 corners of the schema box, which is where it could overflow', () => {
    // CLAUDE.md §3: the extreme legal values are CORNERS, not endpoints. Five
    // numeric arms means 2^5 combinations, and the largest intermediate the
    // reduction can form is a product of two 10 MΩ arms — 1e14, which a double
    // holds exactly enough of.
    const EX = [VALUE_MIN, VALUE_MAX_BY_KIND.resistor];
    for (const p of EX) for (const q of EX) for (const r of EX)
      for (const s of EX) for (const g of EX) {
        const a = derive(bridgeParams(p, q, r, s, g)).r_eq;
        const b = branchCurrentReq(p, q, r, s, g);
        expect([p, q, r, s, g, Number.isFinite(a) && a > 0]).toEqual([p, q, r, s, g, true]);
        expect([p, q, r, s, g, rel(a, b) < 1e-9]).toEqual([p, q, r, s, g, true]);
      }
  });
});

describe('bridge r_eq — the balance case is the regression guard', () => {
  /**
   * The whole change is safe exactly insofar as it leaves the balanced bridge
   * alone: at P/Q = R/S the galvanometer carries no current, deleting it is
   * legitimate, and the Δ–Y answer MUST be the old one. Asserted at floating
   * point, not to three decimals.
   */
  test('a balanced bridge computes identically both ways, for every G', () => {
    const ratios = [0.25, 0.5, 1, 2, 7, 1000];
    const qs = [0.01, 1, 47, 4700, 1e6];
    const ss = [0.01, 3, 220, 1e5];
    const gs = [VALUE_MIN, 0.5, 50, 4700, VALUE_MAX_BY_KIND.galvanometer];
    let worst = 0;
    for (const k of ratios) for (const q of qs) for (const s of ss) for (const g of gs) {
      const p = k * q;
      const r = k * s;
      if (p > 1e7 || r > 1e7 || p < VALUE_MIN || r < VALUE_MIN) continue;
      const viaDeltaStar = bridgeDeltaStar(p, q, r, s, g);
      const viaOld = oldParallelApproximation(p, q, r, s);
      worst = Math.max(worst, rel(viaDeltaStar, viaOld));
    }
    expect(worst).toBeLessThan(1e-12);
  });

  test('at balance the answer does not depend on G at all', () => {
    // The algebraic cancellation, made observable: G moves over nine orders of
    // magnitude and the number must not move at all.
    const at = (g: number) => bridgeDeltaStar(10, 20, 30, 60, g);
    expect(at(0.01)).toBeCloseTo(at(1e7), 12);
    expect(at(0.01)).toBeCloseTo(26.666666666667, 10);
    expect(at(50)).toBeCloseTo(oldParallelApproximation(10, 20, 30, 60), 12);
  });

  test('OFF balance it does depend on G, monotonically, between two known limits', () => {
    // The check the balance case cannot make: that the galvanometer branch is
    // actually in the answer. As G rises the branch closes and the result must
    // climb to the (P+R)‖(Q+S) limit from below.
    const seq = [0.01, 0.1, 1, 10, 100, 1e4, 1e7].map((g) => bridgeDeltaStar(6, 3, 4, 5, g));
    for (let i = 1; i < seq.length; i++) expect(seq[i]).toBeGreaterThan(seq[i - 1]);
    expect(seq[seq.length - 1]).toBeCloseTo(oldParallelApproximation(6, 3, 4, 5), 6);
    expect(seq[0]).toBeLessThan(oldParallelApproximation(6, 3, 4, 5));
    // G → 0 shorts C to D, which is P‖Q + R‖S — the other closed form.
    expect(bridgeDeltaStar(6, 3, 4, 5, 0)).toBeCloseTo((6 * 3) / 9 + (4 * 5) / 9, 12);
  });
});

describe('bridge r_eq — the degenerate inputs the schema admits', () => {
  test('G at the schema floor and at the ceiling both give a finite answer', () => {
    for (const g of [VALUE_MIN, VALUE_MAX_BY_KIND.galvanometer]) {
      const p = bridgeParams(6, 3, 4, 5, g);
      expect(circuitNetwork.validate(p).ok).toBe(true);
      const d = derive(p);
      expect(Number.isFinite(d.r_eq) && d.r_eq > 0).toBe(true);
      expect(d.r_eq).toBeCloseTo(branchCurrentReq(6, 3, 4, 5, g), 9);
    }
  });

  test('G = 0 — a galvanometer that is a dead short — does not divide by zero', () => {
    // Not reachable through validate() (VALUE_MIN floors it at 0.01), so this
    // asserts the function is TOTAL rather than that the schema needs it.
    expect(bridgeDeltaStar(6, 3, 4, 5, 0)).toBeCloseTo(4.222222222222, 10);
    expect(Number.isFinite(bridgeDeltaStar(6, 3, 4, 5, 0))).toBe(true);
    // ...and all three of P, Q, G zero collapses the whole Δ to a point, R ‖ S.
    expect(bridgeDeltaStar(0, 0, 4, 5, 0)).toBeCloseTo((4 * 5) / 9, 12);
    expect(bridgeDeltaStar(0, 0, 0, 0, 0)).toBe(0);
  });

  test('a bridge whose arms hold no resistance reports r_eq 0, as it always did', () => {
    // validate() admits four capacitor arms with a galvanometer — no parallel
    // bank mixes families — and the resistive reading of that network is empty.
    const caps: CircuitNetworkParams = {
      ...bridgeParams(6, 3, 4, 5, 50),
      elements: [
        { kind: 'capacitor', name: 'C1', value: 6 },
        { kind: 'capacitor', name: 'C2', value: 3 },
        { kind: 'capacitor', name: 'C3', value: 3 },
        { kind: 'capacitor', name: 'C4', value: 3 },
        { kind: 'galvanometer', name: 'G', value: 50 },
      ],
    };
    expect(circuitNetwork.validate(caps).ok).toBe(true);
    expect(derive(caps).r_eq).toBe(0);
    // and c_eq is untouched by this change: the Δ–Y transform for capacitors
    // degenerates to the parallel form because a galvanometer is an OPEN in
    // the capacitive reading. (6 series 3) ‖ (3 series 3) = 2 + 1.5.
    expect(derive(caps).c_eq).toBeCloseTo(3.5, 12);
  });

  test('a non-resistive ARM is a wire, and the reduction says so', () => {
    // An inductor in slot 0 contributes no resistance, i.e. shorts A to C.
    // The network is then R ‖ ((Q‖G) + S), which no series/parallel folding of
    // the four arms alone can produce — the old formula answered 8/3.
    const p: CircuitNetworkParams = {
      ...bridgeParams(6, 3, 4, 5, 50),
      elements: [
        { kind: 'inductor', name: 'L', value: 10 },
        Rel('Q', 3), Rel('R', 4), Rel('S', 5),
        { kind: 'galvanometer', name: 'G', value: 50 },
      ],
    };
    expect(circuitNetwork.validate(p).ok).toBe(true);
    const qg = (3 * 50) / 53;
    expect(derive(p).r_eq).toBeCloseTo((4 * (qg + 5)) / (4 + qg + 5), 12);
    expect(derive(p).r_eq).toBeCloseTo(branchCurrentReq(1e-12, 3, 4, 5, 50), 6);
    expect(oldParallelApproximation(0, 3, 4, 5)).toBeCloseTo(8 / 3, 12);
  });

  test('inductance reduces on the same transformation, since it is the same algebra', () => {
    // Slot 4 is a galvanometer, 0 H, which in an inductance-only reading is a
    // wire across the detector diagonal — so (L_P‖L_Q) + (L_R‖L_S) in henry.
    const p: CircuitNetworkParams = {
      ...bridgeParams(6, 3, 4, 5, 50),
      elements: [
        { kind: 'inductor', name: 'L1', value: 6000 },
        { kind: 'inductor', name: 'L2', value: 3000 },
        { kind: 'inductor', name: 'L3', value: 4000 },
        { kind: 'inductor', name: 'L4', value: 5000 },
        { kind: 'galvanometer', name: 'G', value: 50 },
      ],
    };
    expect(circuitNetwork.validate(p).ok).toBe(true);
    expect(equivalentHenry(p)).toBeCloseTo((6 * 3) / 9 + (4 * 5) / 9, 12);
  });
});

describe('bridge r_eq — everything downstream of it moved with it', () => {
  /**
   * r_eq feeds i_total, power and the readout. A fix that corrected the number
   * but left the current computed off the old one would be a worse bug than
   * the one being fixed, so this pins the chain — through the SOURCE current,
   * not through `terminal_v`, which is an identity in r_eq and cannot fail.
   */
  test('i_total and power follow the corrected r_eq', () => {
    const p = bridgeParams(6, 4, 3, 5, 50);
    const d = derive(p);
    expect(d.r_eq).toBeCloseTo(4.481633, 6);
    expect(d.i_total).toBeCloseTo(2 / 4.481632653, 9);
    expect(d.i_total).toBeCloseTo(0.446265938, 8);
    expect(d.power).toBeCloseTo(0.892531876, 8);
    // The old chain: 4.5 Ω gave 444.444 mA and 888.889 mW. The readout rounds
    // to three figures, so this IS a visible difference on the board — the
    // strip reads "I 446 mA" where it read "I 444 mA".
    expect(d.i_total).not.toBeCloseTo(2 / 4.5, 4);
    expect(d.power).not.toBeCloseTo(0.888888889, 4);
  });

  test('the metre-bridge reading is unaffected — it is a ratio, not a reduction', () => {
    // r_unknown = R(100−l)/l reads slot 0 against the null point and never
    // touched r_eq. Pinned so the change cannot be blamed for moving it.
    expect(derive(bridgeParams(6, 4, 3, 5, 50)).r_unknown).toBeCloseTo(5.214953, 6);
  });

  test('no other topology moved', () => {
    // reduce() gained an argument; the five non-bridge branches must be byte
    // for byte the same answers. NCERT reference 1 is the load-bearing one.
    const d = derive(circuitNetwork.defaults);
    expect(d.r_eq).toBeCloseTo(6, 12);
    expect(d.i_total).toBeCloseTo(16 / 7, 12);
    const ladder: CircuitNetworkParams = {
      ...circuitNetwork.defaults,
      topology: 'ladder',
      elements: [Rel('R1', 10), Rel('R2', 20), Rel('R3', 30), Rel('R4', 40)],
    };
    expect(derive(ladder).r_eq).toBeCloseTo(10 + (20 * 70) / 90, 12);
    const twoLoop: CircuitNetworkParams = {
      ...circuitNetwork.defaults,
      topology: 'two_loop',
      elements: [Rel('R1', 10), Rel('R2', 20), Rel('R3', 30),
        Rel('R4', 40), Rel('R5', 50), Rel('R6', 60)],
    };
    expect(derive(twoLoop).r_eq).toBeCloseTo(10 + 20 + (30 * 150) / 180, 12);
  });
});
