/**
 * xy_plot — NAMED CURVES: the shapes the book PRINTS, as opposed to the
 * shapes it defines.
 *
 * WHY THIS IS A SEPARATE MECHANISM, AND SPECIFICALLY NOT `data` MODE.
 *
 * v2's `data` mode is a ONE-DIMENSIONAL STATISTICS SAMPLE. Its `values` key is
 * a list of observations, `derive` runs mean/median/variance over it, and the
 * component draws one bar per observation at integer positions 1..N. It has no
 * abscissa at all. Verified by reading `statistics`, `derive` and the `isData`
 * branch of `planFrame` before writing a line of this file, because "there is
 * already a data mode" is exactly the kind of thing that is true of the NAME
 * and false of the CODE. Feeding a stress-strain curve through it would
 * produce a bar chart with a mean line, and a readout saying `sd 41.7` about a
 * quantity that has no distribution.
 *
 * So `data` is left alone and this is its own mode. The two are different
 * objects that happen to both be "not a formula": one is a sample of a random
 * variable, the other is a printed shape.
 *
 * WHY NOT LET THE PAYLOAD CARRY THE POINTS. CLAUDE.md §3: the model never
 * emits coordinates. A model asked for "the stress-strain curve of a metal"
 * would emit a plausible polyline with the yield point in the wrong place, and
 * nothing downstream could tell. So the payload carries an IDENTIFIER — the
 * same contract `molecule_3d` uses for `pubchem:5957` — and the geometry lives
 * here, written once and reviewable once.
 *
 * WHERE A FORMULA EXISTS, THE POINTS ARE GENERATED FROM IT. Six of the nine
 * shapes below (heating, titration, diode, solar cell, potential energy,
 * resonance, growth) have exact closed forms; their control points are
 * computed from the constants rather than eyeballed, so the landmark that says
 * "equivalence, pH 7" is at pH 7 because the arithmetic put it there. Only
 * `stress_strain` is genuinely qualitative — NCERT Fig 9.3 prints no ordinate
 * values — and it says so in its own `source`.
 *
 * NO AREA IS EVER REPORTED FOR A NAMED SHAPE, and that is deliberate rather
 * than unfinished. Several of these are polylines through a qualitative shape;
 * ∫ under a curve whose ordinate is "stress, illustrative" is a number with no
 * referent, and this widget's whole contract is that a number on the board is
 * exact. `derive` returns area 0 in `named` mode and the readout carries no
 * number at all — the same treatment `curve` mode gets, for the same reason.
 *
 * REFERENCE VALUES, each taken from NCERT or a standard table BEFORE any of
 * this was run:
 *
 *   heating      1 kg of water, −20 °C to 120 °C. c_ice 2100, c_water 4186,
 *                c_steam 2010 J/kg·K; L_f 3.34e5, L_v 22.6e5 J/kg (NCERT
 *                Physics XI Ch11). The melting plateau is therefore 334 kJ
 *                long and the boiling plateau 2260 kJ — a factor of 6.77,
 *                which is the single most important thing the figure teaches
 *                and the thing a hand-drawn version always gets wrong.
 *   titration    25.00 mL of 0.100 M HCl with 0.100 M NaOH. pH 1.000 at the
 *                start, 7.000 at 25.00 mL, 12.523 at 50.00 mL — all three
 *                from the dilution arithmetic, not from a figure.
 *   diode        Si, n = 2, V_T = 25.85 mV at 300 K. Knee near 0.7 V
 *                (NCERT Physics XII Ch14).
 *   solar cell   the same diode equation minus a photocurrent:
 *                I = I_L − I_S(e^{V/nV_T} − 1). I_sc = 40 mA, V_oc = 0.60 V.
 *   binding      B/A in MeV: ²H 1.11, ⁴He 7.07, ¹²C 7.68, ¹⁶O 7.98,
 *                ⁵⁶Fe 8.79 (the maximum), ²³⁸U 7.57 (NCERT Physics XII
 *                Ch13 Fig 13.1).
 *   potential    Lennard-Jones 12-6. The minimum is at r = 2^{1/6}σ =
 *                1.1225σ with U = −ε, both exact.
 *   resonance    a driven damped oscillator, A(ω) = (F₀/m) /
 *                √((ω₀²−ω²)² + (bω/m)²). At ω = ω₀ = 1 and b/m = 0.2 the
 *                amplitude is exactly 5.
 *   shm          E = ½kA², PE = ½kx², KE = ½k(A²−x²). PE + KE = E at every
 *                x, which is the whole figure.
 *   growth       logistic N = K/(1 + e^{a−rt}), inflection at N = K/2 = 50
 *                (NCERT Biology XII Ch13).
 */

/** A polyline the shape prints. `dash` null means solid. */
export interface NamedCurveTrace {
  points: readonly (readonly [number, number])[];
  dash: string | null;
}

/**
 * A callout on a named shape.
 *
 * `marker` false means the label names a CURVE rather than a point — the
 * "KE" beside the falling parabola — so it gets text and no dot. One
 * mechanism rather than two, because a curve name and a point name have the
 * same collision problem and want the same hand-placed offset.
 *
 * `dx`/`dy` are DEVICE POINTS, not world units, and that is the frame rule:
 * the offset holds a fixed-size glyph clear of a fixed-size dot, so it must
 * not scale with the board. The consequence is that labels are tightest at
 * the SMALLEST board, which is where every one of these was placed and
 * checked.
 */
export interface NamedLandmark {
  u: number;
  v: number;
  label: string;
  dx: number;
  dy: number;
  anchor: 'start' | 'middle' | 'end';
  marker: boolean;
}

export interface NamedCurveDef {
  id: string;
  xLabel: string;
  yLabel: string;
  uMin: number;
  uMax: number;
  curves: readonly NamedCurveTrace[];
  landmarks: readonly NamedLandmark[];
  /** Where the numbers came from. Read this before changing any of them. */
  source: string;
}

/**
 * Samples `f` at `n + 1` evenly spaced points on [lo, hi], plus any `extra`
 * abscissae merged in.
 *
 * `extra` EXISTS BECAUSE A UNIFORM GRID MISSES THE EXACT FEATURE. The
 * Lennard-Jones minimum is at r = 2^(1/6) = 1.12246, which is not a multiple
 * of the 0.0256 step, so the drawn curve's lowest vertex was −0.99869 rather
 * than −1 and a test asserting the exact minimum failed. The right fix is not
 * a looser tolerance: the landmark is placed at the ANALYTIC minimum, so if
 * the curve does not actually reach it the marker floats off the polyline by
 * a pixel or two on a big board. Pinning the exact abscissa makes the drawing
 * and the arithmetic agree.
 */
function sample(
  lo: number, hi: number, n: number, f: (u: number) => number,
  extra: readonly number[] = []
): (readonly [number, number])[] {
  const us: number[] = [];
  for (let i = 0; i <= n; i++) us.push(lo + ((hi - lo) * i) / n);
  for (const u of extra) if (u > lo && u < hi) us.push(u);
  us.sort((a, b) => a - b);
  return us.map((u) => [u, f(u)] as const);
}

/* ------------------------------------------------------------ the heating curve */

const C_ICE = 2.1;      // kJ/kg·K
const C_WATER = 4.186;  // kJ/kg·K
const C_STEAM = 2.01;   // kJ/kg·K
const L_FUSION = 334;   // kJ/kg
const L_VAPOUR = 2260;  // kJ/kg

/** The five vertices of the heating curve for 1 kg, computed from the
 *  constants above rather than placed by eye. */
function heatingPoints(): (readonly [number, number])[] {
  const q1 = C_ICE * 20;             //  42.0  ice, −20 -> 0
  const q2 = q1 + L_FUSION;          // 376.0  melting plateau
  const q3 = q2 + C_WATER * 100;     // 794.6  water, 0 -> 100
  const q4 = q3 + L_VAPOUR;          // 3054.6 boiling plateau
  const q5 = q4 + C_STEAM * 20;      // 3094.8 steam, 100 -> 120
  return [
    [0, -20], [q1, 0], [q2, 0], [q3, 100], [q4, 100], [q5, 120],
  ] as const as (readonly [number, number])[];
}

const HEATING_END = C_ICE * 20 + L_FUSION + C_WATER * 100 + L_VAPOUR + C_STEAM * 20;

/* ---------------------------------------------------------- the titration curve */

/** pH of 25.00 mL of 0.100 M HCl after `v` mL of 0.100 M NaOH. Exact
 *  dilution arithmetic; no figure was consulted. */
function strongAcidPh(v: number): number {
  const acid = 2.5 - 0.1 * v;   // mmol H+ remaining
  const total = 25 + v;         // mL
  if (Math.abs(acid) < 1e-12) return 7;
  if (acid > 0) return -Math.log10(acid / total);
  return 14 + Math.log10(-acid / total);
}

/**
 * Denser sampling near the equivalence point, because that is where the curve
 * is vertical — a uniform grid draws the jump as a diagonal and loses the one
 * feature the figure exists to show.
 */
function titrationPoints(): (readonly [number, number])[] {
  const vs: number[] = [];
  for (let v = 0; v < 24; v += 1) vs.push(v);
  for (let v = 24; v < 25; v += 0.1) vs.push(v);
  vs.push(25);
  for (let v = 25.05; v < 26; v += 0.1) vs.push(v);
  for (let v = 26; v <= 50; v += 1) vs.push(v);
  return vs.map((v) => [v, strongAcidPh(v)] as const);
}

/* --------------------------------------------------------- the diode and the cell */

const V_T = 0.02585;        // thermal voltage at 300 K, volts
const N_SI = 2;             // ideality factor for silicon
const NVT = N_SI * V_T;
/** Chosen so the forward current reaches 30 mA at 0.75 V, which puts the
 *  knee at 0.7 V — NCERT's own number for a silicon diode. */
const I_S_DIODE = 30 / Math.exp(0.75 / NVT);   // mA

function diodeForward(v: number): number {
  return I_S_DIODE * (Math.exp(v / NVT) - 1);
}

const V_BREAKDOWN = -5;

/**
 * The full characteristic on ONE LINEAR CURRENT AXIS.
 *
 * NCERT Fig 14.6 draws forward current in mA and reverse in µA, on two
 * different scales meeting at the origin — which no single linear axis can
 * do. Drawn to one scale, as here, the reverse current before breakdown is
 * flat on the axis, which is the honest picture and is what a student sees on
 * a real tracer. The split-scale figure is NOT reproduced and this widget
 * should not be used where that split is the teaching point.
 */
function diodePoints(): (readonly [number, number])[] {
  const out: (readonly [number, number])[] = [];
  // Breakdown knee, drawn first so the polyline runs left to right.
  out.push([-6, -20]);
  out.push([V_BREAKDOWN - 0.05, -2]);
  out.push([V_BREAKDOWN, 0]);
  for (const [u, v] of sample(V_BREAKDOWN, 0, 12, () => 0)) out.push([u, v] as const);
  for (const [u, v] of sample(0, 0.8, 48, diodeForward)) out.push([u, Math.min(v, 40)] as const);
  return out;
}

const I_L = 40;                                    // short-circuit current, mA
const NVT_CELL = 1.5 * V_T;
/** Fixed by demanding I(V_oc) = 0 at V_oc = 0.60 V. */
const I_S_CELL = I_L / (Math.exp(0.6 / NVT_CELL) - 1);

function cellCurrent(v: number): number {
  return I_L - I_S_CELL * (Math.exp(v / NVT_CELL) - 1);
}

/** The maximum-power point, found by argmax over the same grid the curve is
 *  drawn from. It is a LABEL POSITION, not a reported number — the MPP of a
 *  Shockley cell is a Lambert-W expression and this widget does not claim a
 *  value for it, so nothing here prints one. */
function cellMpp(): { u: number; v: number } {
  let best = { u: 0, v: I_L };
  let bestP = 0;
  for (let i = 0; i <= 600; i++) {
    const u = (0.62 * i) / 600;
    const v = cellCurrent(u);
    if (v < 0) continue;
    if (u * v > bestP) {
      bestP = u * v;
      best = { u, v };
    }
  }
  return best;
}

/* ------------------------------------------------------- binding energy per nucleon */

/**
 * Measured B/A, in MeV. Standard values; ⁵⁶Fe at 8.79 is the maximum and
 * ²H at 1.11 the outlier that makes the left edge of the curve steep.
 */
const BINDING: (readonly [number, number])[] = [
  [2, 1.11], [4, 7.07], [6, 5.33], [7, 5.61], [9, 6.46], [12, 7.68],
  [16, 7.98], [20, 8.03], [24, 8.26], [32, 8.49], [40, 8.55], [56, 8.79],
  [75, 8.70], [100, 8.60], [127, 8.45], [150, 8.35], [180, 8.25],
  [209, 7.85], [238, 7.57],
];

/* --------------------------------------------------------- interatomic potential */

/** Lennard-Jones 12-6 in units of ε, with σ = 1. Minimum at 2^{1/6}. */
function lennardJones(r: number): number {
  const s6 = Math.pow(1 / r, 6);
  return 4 * (s6 * s6 - s6);
}
const LJ_R0 = Math.pow(2, 1 / 6);

/* ------------------------------------------------------------------- resonance */

/** Driven damped oscillator amplitude, ω₀ = 1 and F₀/m = 1. */
function resonanceAmp(w: number, damping: number): number {
  const a = 1 - w * w;
  return 1 / Math.sqrt(a * a + damping * damping * w * w);
}

/* ------------------------------------------------------------------------ SHM */

const SHM_A = 1;
const SHM_K = 1;
const SHM_E = 0.5 * SHM_K * SHM_A * SHM_A;

/* --------------------------------------------------------------------- growth */

const GROWTH_K = 100;
const GROWTH_R = 0.5;
const GROWTH_A = 5;
const GROWTH_N0 = GROWTH_K / (1 + Math.exp(GROWTH_A));
/** Where the J-curve leaves the top of the box. The book draws it running off
 *  the figure, so it is clipped rather than rescaled — rescaling to fit it
 *  would flatten the logistic curve into the axis. */
const GROWTH_J_END = Math.log(110 / GROWTH_N0) / GROWTH_R;

/* ------------------------------------------------------------------ the shapes */

export const NAMED_CURVES: Readonly<Record<string, NamedCurveDef>> = {
  stress_strain: {
    id: 'stress_strain',
    xLabel: 'strain',
    yLabel: 'stress (10^6 N/m^2)',
    uMin: 0,
    uMax: 0.3,
    curves: [{
      points: [
        [0, 0], [0.005, 37.5], [0.01, 75], [0.015, 112.5], [0.02, 150],
        [0.025, 168], [0.03, 175], [0.04, 178], [0.05, 180],
        [0.08, 225], [0.12, 265], [0.16, 288], [0.2, 300],
        [0.24, 292], [0.27, 275], [0.3, 250],
      ],
      dash: null,
    }],
    landmarks: [
      { u: 0.03, v: 175, label: 'elastic limit', dx: 6, dy: -10, anchor: 'start', marker: true },
      { u: 0.2, v: 300, label: 'ultimate', dx: -6, dy: -4, anchor: 'end', marker: true },
      { u: 0.3, v: 250, label: 'fracture', dx: -4, dy: 14, anchor: 'end', marker: true },
    ],
    source:
      'NCERT Physics XI Ch9 Fig 9.3, a ductile metal. QUALITATIVE: the figure ' +
      'prints no ordinate values, so the stresses here are illustrative and no ' +
      'number derived from them is reported anywhere. The ORDER and the SHAPE ' +
      'of the landmarks are what the figure teaches and they are exact. ' +
      'ONLY THREE CALLOUTS FIT, AND THAT IS A FINDING RATHER THAN A CHOICE: ' +
      "NCERT marks four points, but its proportional limit and yield point sit " +
      '0.02 and 0.05 along a strain axis 0.3 wide, which is 28pt apart on the ' +
      '282.6pt plot of a 343x236 board — closer than either label is wide. ' +
      'labelFitProblems refuses the four-callout version outright, and the ' +
      'right fix is a leader-line mechanism this widget does not have, not a ' +
      'shorter word. The elastic limit is kept because the plateau after it is ' +
      'what distinguishes the two.',
  },

  heating: {
    id: 'heating',
    xLabel: 'heat added (kJ per kg)',
    yLabel: 'temperature (C)',
    uMin: 0,
    uMax: HEATING_END,
    curves: [{ points: heatingPoints(), dash: null }],
    landmarks: [
      { u: 42 + L_FUSION / 2, v: 0, label: 'melting, 0 C', dx: 0, dy: 15, anchor: 'middle', marker: false },
      { u: 794.6 + L_VAPOUR / 2, v: 100, label: 'boiling, 100 C', dx: 0, dy: -8, anchor: 'middle', marker: false },
    ],
    source:
      'NCERT Physics XI Ch11. c_ice 2100, c_water 4186, c_steam 2010 J/kg-K; ' +
      'L_f 3.34e5, L_v 22.6e5 J/kg, for 1 kg from -20 C to 120 C. Every vertex ' +
      'is computed from those five constants; the boiling plateau is 2260 kJ ' +
      'against the melting plateau of 334, a ratio of 6.77.',
  },

  titration: {
    id: 'titration',
    xLabel: 'NaOH added (mL)',
    yLabel: 'pH',
    uMin: 0,
    uMax: 50,
    curves: [{ points: titrationPoints(), dash: null }],
    landmarks: [
      { u: 25, v: 7, label: 'equivalence, pH 7', dx: 6, dy: 4, anchor: 'start', marker: true },
    ],
    source:
      '25.00 mL of 0.100 M HCl titrated with 0.100 M NaOH. pH from the ' +
      'dilution arithmetic alone: 1.000 at 0 mL, 7.000 at 25.00 mL, 12.523 at ' +
      '50.00 mL. Strong acid against strong base, so no Ka term appears.',
  },

  diode_iv: {
    id: 'diode_iv',
    xLabel: 'voltage (V)',
    yLabel: 'current (mA)',
    uMin: -6,
    uMax: 0.8,
    curves: [{ points: diodePoints(), dash: null }],
    landmarks: [
      { u: 0.7, v: diodeForward(0.7), label: 'knee, 0.7 V', dx: -6, dy: -6, anchor: 'end', marker: true },
      { u: V_BREAKDOWN, v: 0, label: 'breakdown', dx: 4, dy: 14, anchor: 'start', marker: true },
    ],
    source:
      'Shockley, I = I_S(e^{V/nV_T} - 1), silicon: n = 2, V_T = 25.85 mV at ' +
      '300 K, I_S set so the forward current is 30 mA at 0.75 V. Knee at 0.7 V ' +
      'per NCERT Physics XII Ch14. ONE LINEAR CURRENT AXIS, so the reverse ' +
      'branch is flat on the axis rather than on a separate uA scale.',
  },

  solar_cell_iv: {
    id: 'solar_cell_iv',
    xLabel: 'voltage (V)',
    yLabel: 'current (mA)',
    uMin: 0,
    uMax: 0.65,
    curves: [{ points: sample(0, 0.65, 80, cellCurrent).map(([u, v]) => [u, Math.max(v, -10)] as const), dash: null }],
    landmarks: [
      { u: 0, v: I_L, label: 'I_sc', dx: 6, dy: -6, anchor: 'start', marker: true },
      { u: 0.6, v: 0, label: 'V_oc', dx: -6, dy: -8, anchor: 'end', marker: true },
      { u: cellMpp().u, v: cellMpp().v, label: 'max power', dx: -6, dy: -8, anchor: 'end', marker: true },
    ],
    source:
      'I = I_L - I_S(e^{V/nV_T} - 1) with I_L = 40 mA, n = 1.5, and I_S fixed ' +
      'by I(V_oc) = 0 at V_oc = 0.60 V. The maximum-power point is an argmax ' +
      'over the drawn grid and is LABELLED, never reported as a number: its ' +
      'closed form is a Lambert-W expression this widget does not compute.',
  },

  binding_energy: {
    id: 'binding_energy',
    xLabel: 'mass number A',
    yLabel: 'B/A (MeV)',
    uMin: 0,
    uMax: 240,
    curves: [{ points: BINDING, dash: null }],
    landmarks: [
      { u: 56, v: 8.79, label: 'Fe-56, 8.79', dx: 0, dy: -8, anchor: 'middle', marker: true },
      { u: 238, v: 7.57, label: 'U-238', dx: -4, dy: 14, anchor: 'end', marker: true },
    ],
    source:
      'Measured binding energy per nucleon, NCERT Physics XII Ch13 Fig 13.1: ' +
      '2H 1.11, 4He 7.07, 12C 7.68, 16O 7.98, 56Fe 8.79 (the maximum), ' +
      '238U 7.57 MeV. Plotted as data, because it IS data.',
  },

  potential_energy: {
    id: 'potential_energy',
    xLabel: 'separation r (sigma)',
    yLabel: 'potential energy (epsilon)',
    uMin: 0.95,
    uMax: 3,
    // The exact minimum and the exact zero are pinned into the grid, so the
    // drawn curve passes through (2^(1/6), -1) and (1, 0) rather than near them.
    curves: [{ points: sample(0.95, 3, 80, lennardJones, [LJ_R0, 1]), dash: null }],
    landmarks: [
      { u: LJ_R0, v: -1, label: 'bond length', dx: 4, dy: 14, anchor: 'start', marker: true },
    ],
    source:
      'Lennard-Jones 12-6, U = 4e[(s/r)^12 - (s/r)^6], in units of e with ' +
      's = 1. The minimum is at r = 2^(1/6) = 1.1225 s with U = -e, both exact ' +
      'and both asserted in __tests__/named-curves.test.ts.',
  },

  resonance: {
    id: 'resonance',
    xLabel: 'driving frequency (w0)',
    yLabel: 'amplitude',
    uMin: 0,
    uMax: 2.5,
    curves: [
      { points: sample(0, 2.5, 120, (w) => resonanceAmp(w, 0.2)), dash: null },
      { points: sample(0, 2.5, 120, (w) => resonanceAmp(w, 0.4)), dash: '7 5' },
      { points: sample(0, 2.5, 120, (w) => resonanceAmp(w, 0.8)), dash: '3 4' },
    ],
    landmarks: [
      { u: 1, v: 5, label: 'least damping', dx: 6, dy: 4, anchor: 'start', marker: true },
      { u: 1, v: resonanceAmp(1, 0.8), label: 'most damping', dx: 8, dy: 12, anchor: 'start', marker: false },
    ],
    source:
      'A(w) = (F0/m)/sqrt((w0^2-w^2)^2 + (bw/m)^2) with w0 = 1 and F0/m = 1, ' +
      'at b/m = 0.2, 0.4 and 0.8. At w = w0 the amplitude is exactly ' +
      '1/(b/m), i.e. 5, 2.5 and 1.25 — the three curves are one formula at ' +
      'three dampings, which is what the figure is about.',
  },

  shm_energy: {
    id: 'shm_energy',
    xLabel: 'displacement x (A)',
    yLabel: 'energy (units of kA^2)',
    uMin: -1,
    uMax: 1,
    curves: [
      { points: sample(-1, 1, 60, (x) => 0.5 * SHM_K * x * x), dash: null },
      { points: sample(-1, 1, 60, (x) => 0.5 * SHM_K * (SHM_A * SHM_A - x * x)), dash: '7 5' },
      { points: sample(-1, 1, 8, () => SHM_E), dash: '3 4' },
    ],
    landmarks: [
      { u: 0.85, v: 0.5 * SHM_K * 0.85 * 0.85, label: 'PE', dx: 6, dy: 2, anchor: 'start', marker: false },
      { u: -0.85, v: 0.5 * SHM_K * (1 - 0.85 * 0.85), label: 'KE', dx: -6, dy: -6, anchor: 'end', marker: false },
      { u: 0, v: SHM_E, label: 'total E', dx: 0, dy: -8, anchor: 'middle', marker: false },
    ],
    source:
      'PE = kx^2/2, KE = k(A^2-x^2)/2, E = kA^2/2, at k = 1 and A = 1. ' +
      'PE + KE = E at every x — that identity is the figure, and it is ' +
      'asserted pointwise in __tests__/named-curves.test.ts rather than ' +
      'trusted to the two formulas being typed correctly.',
  },

  growth_curve: {
    id: 'growth_curve',
    xLabel: 'time',
    yLabel: 'population N',
    uMin: 0,
    uMax: 20,
    curves: [
      {
        points: sample(0, 20, 80, (t) => GROWTH_K / (1 + Math.exp(GROWTH_A - GROWTH_R * t))),
        dash: null,
      },
      {
        points: sample(0, GROWTH_J_END, 40, (t) => GROWTH_N0 * Math.exp(GROWTH_R * t)),
        dash: '7 5',
      },
    ],
    landmarks: [
      { u: 17, v: GROWTH_K, label: 'K', dx: 4, dy: -6, anchor: 'start', marker: false },
      { u: 16, v: 97, label: 'logistic (S)', dx: -4, dy: 16, anchor: 'end', marker: false },
      { u: GROWTH_J_END, v: 110, label: 'exponential (J)', dx: -6, dy: 12, anchor: 'end', marker: false },
    ],
    source:
      'NCERT Biology XII Ch13. Logistic N = K/(1 + e^{a-rt}) with K = 100, ' +
      'r = 0.5, a = 5, so the inflection is at t = a/r = 10 and N = K/2 = 50. ' +
      'The J-curve is N0 e^{rt} from the same N0, clipped where it leaves the ' +
      'box — the book draws it running off the figure, and rescaling to fit it ' +
      'would flatten the logistic curve onto the axis.',
  },
};

export const NAMED_SHAPE_IDS: readonly string[] = Object.keys(NAMED_CURVES);

/** The value range a named shape's curves occupy — what the axis has to
 *  hold. Reads the drawn points, so it cannot disagree with the drawing. */
export function namedRange(def: NamedCurveDef): { yMin: number; yMax: number } {
  let yMin = Infinity;
  let yMax = -Infinity;
  for (const trace of def.curves) {
    for (const [, v] of trace.points) {
      if (!Number.isFinite(v)) continue;
      if (v < yMin) yMin = v;
      if (v > yMax) yMax = v;
    }
  }
  for (const m of def.landmarks) {
    if (m.v < yMin) yMin = m.v;
    if (m.v > yMax) yMax = m.v;
  }
  if (!Number.isFinite(yMin) || !Number.isFinite(yMax)) return { yMin: 0, yMax: 1 };
  if (Math.abs(yMax - yMin) < 1e-9) return { yMin: yMin - 1, yMax: yMax + 1 };
  return { yMin, yMax };
}
