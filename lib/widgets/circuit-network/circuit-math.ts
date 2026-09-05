/**
 * circuit_network — the REDUCTION of a lumped two-terminal network drawn on a
 * NAMED TOPOLOGY, plus every coordinate that drawing needs.
 *
 * Nothing here is a worklet. The two animatable params move a charge-fill quad
 * and an arrowhead along ONE straight segment whose endpoints are fixed by
 * `params`, and rotate ONE needle about a fixed centre; all three centres and
 * endpoints are computed here on the JS thread, so the only arithmetic left on
 * the UI thread is `a + (b - a) * t`, `Math.exp` and one `cos/sin` pair. That
 * is why this file imports nothing but `../chrome` (which imports nothing),
 * which is what lets its assertions run before any React exists.
 *
 * ---------------------------------------------------------------------------
 * WHAT IS IN SCOPE, AND WHAT WAS DELIBERATELY SPLIT OUT
 *
 * IN: the lumped DC / reactive network — resistors, capacitors, inductors, a
 * cell, a switch, a galvanometer, a lamp, wired into one of six named shapes,
 * and reduced to an equivalent.
 *
 * OUT, and each for a structural reason rather than a scheduling one:
 *   - PHASORS (`ac_phasor` is its own widget). A phasor diagram has no
 *     topology at all — it is two arrows and an angle — so a topology-typed
 *     slot list has nothing to say about it.
 *   - LOGIC GATES. A gate network is a directed acyclic GRAPH, which is
 *     `process_flow`/`reaction_scheme`'s problem, not a two-terminal
 *     reduction: there is no such thing as the equivalent resistance of an
 *     AND gate.
 *   - p-n JUNCTIONS. A depletion region has no elements and no nodes; it is a
 *     one-dimensional field profile, i.e. an `xy_plot`.
 *   - TRANSFORMERS. Two magnetically coupled loops are not one two-terminal
 *     network, and the turns ratio is the whole lesson rather than an
 *     equivalent.
 * If a concept needs one of those, it is OUT OF SCOPE for this widget. Do not
 * widen the kind list to reach it.
 *
 * ---------------------------------------------------------------------------
 * NAMED TOPOLOGIES WITH TYPED SLOTS, NEVER A NETLIST.
 *
 * The model sends `topology` plus an ORDERED element list whose position in
 * the list IS its place in the drawing. It never sends nodes, edges or
 * coordinates. Auto-placement was considered and rejected, for three reasons
 * that are worth keeping written down because "just lay out the netlist" is
 * the obvious-looking answer:
 *
 *   1. It RELOCATES the layout problem into the widget rather than removing
 *      it. Somebody still has to decide where the resistor goes; a placer
 *      just makes that decision unreviewable.
 *   2. scripts/verify-render.mjs assertion 4 is a HARD ERROR on any two
 *      overlapping text boxes. A placer can TRY to avoid that; it cannot
 *      GUARANTEE it, so every generated payload becomes a coin flip against
 *      CI. A named topology with a fixed slot count can be checked ONCE, by
 *      arithmetic, for every payload the schema admits.
 *   3. The syllabus needs six shapes, not arbitrary graphs. Six is a list.
 *
 * SLOT ORDER, per topology — this is the contract the payload is written to:
 *
 *   series           0..n-1 left to right along the top rail          n = 1..4
 *   parallel         0..n-1 top to bottom, one branch each            n = 2..3
 *   series_parallel  [A1, A2, B1, B2] — two two-branch banks in series    n = 4
 *   ladder           [series1, shunt1, series2, shunt2]                   n = 4
 *   bridge           [P (N-W arm), Q (N-E arm), R (W-S arm),
 *                     S (E-S arm), galvanometer]                          n = 5
 *   two_loop         [top-left, bottom-left, middle, top-right,
 *                     bottom-right, right]                                n = 6
 *
 * THE UNIT IS FIXED BY `kind` AND IS NEVER SUPPLIED AS TEXT. resistor/lamp/
 * galvanometer are ohms, capacitor is microfarad, inductor is millihenry,
 * cell is volts, switch has no value to show. A free-text "10 ohm" would be
 * unparseable by computeDerived, unbounded for the collision arithmetic below
 * (a 14-character value string is 97pt wide against a 52pt cell pitch), and an
 * alignment hazard the moment a caption quotes it. The widget formats the
 * display string itself: `fmtOhms(4700)` is `"4.7 kΩ"`, never `"4.700 kΩ"`.
 *
 * ---------------------------------------------------------------------------
 * REFERENCE VALUES — computed by hand, cited, then asserted in
 * lib/widgets/__tests__/physics.test.ts. Each one is chosen so that a stub
 * cannot pass it.
 *
 *  1. COMBINATION OF RESISTORS + terminal voltage.
 *     NCERT Class 12 Physics Part I, Ch.3 "Current Electricity" (combination
 *     of resistors; V = ε − I r).
 *       topology series_parallel, banks {4 Ω, 4 Ω} and {12 Ω, 6 Ω},
 *       ε = 16 V, r = 1 Ω.
 *         4‖4  = 16/8  = 2 Ω
 *         12‖6 = 72/18 = 4 Ω
 *         r_eq = 2 + 4 = 6 Ω,   total = 6 + 1 = 7 Ω
 *         i_total    = 16/7        = 2.285714 A
 *         terminal_v = 16 − 2.285714(1) = 13.714286 V
 *         power      = (16/7)² × 6 = (256/49) × 6 = 31.346939 W
 *     SELF-CHECKING: terminal_v must ALSO equal i_total × r_eq
 *     (2.285714 × 6 = 13.714286). Two independent routes to one number, so a
 *     sign slip in `ε − I r` cannot pass quietly.
 *
 *  2. METRE BRIDGE.
 *     Same chapter. Standard resistance R in slot 0, null point at 53.5 cm:
 *       r_unknown = R (100 − l)/l = 6 × 46.5 / 53.5 = 5.214953 Ω
 *     Deliberately OFF the 50 cm mark: at 50 cm the answer is R itself, so a
 *     stub that returns slot 0's value would pass. At 53.5 it returns 6 and
 *     fails by 15%.
 *
 *  3. RC CHARGING.
 *     NCERT Class 12 Part I, Ch.3 / Ch.2 (RC time constant, V_C = V(1 − e^−t/τ)).
 *       topology series, [resistor 20 kΩ, capacitor 5 µF], ε = 12 V
 *         τ = RC = 20000 × 5×10⁻⁶ = 0.1 s exactly
 *       The widget's charge animation runs t over a CHARGE_WINDOW_TAU = 2.5 τ
 *       window, so t_frac 0.4 is exactly one τ and t_frac 1 is 2.5 τ:
 *         V_C(t_frac 0.4) = 12(1 − e⁻¹)   = 7.585447 V
 *         V_C(t_frac 1.0) = 12(1 − e⁻²·⁵) = 11.014980 V
 *     A stub LINEAR in t_frac returns 12 × 0.4 = 4.8 V at the τ point — a 58%
 *     error no tolerance hides, which is exactly why the exponential is
 *     asserted at a fraction rather than at the endpoints (0 and 1 agree by
 *     construction for any monotone stub).
 *
 *  4. CAPACITORS IN SERIES.
 *     NCERT Class 12 Part I, Ch.2 "Electrostatic Potential and Capacitance"
 *     (1/C = Σ 1/Cᵢ; U = ½CV²).
 *       topology series, [2 µF, 3 µF, 4 µF], V = 12 V
 *         1/C = 1/2 + 1/3 + 1/4 = 6/12 + 4/12 + 3/12 = 13/12
 *         c_eq = 12/13 = 0.923077 µF
 *         Q    = c_eq V = 11.076923 µC
 *         U    = ½ c_eq V² = 0.5 × 0.923077 × 144 = 66.461538 µJ
 *     Every plausible stub fails VISIBLY: summing gives 9, averaging gives 3,
 *     the parallel formula gives 9. Only the reciprocal sum gives 0.92.
 *
 *  5. SERIES LCR AT RESONANCE.
 *     NCERT Class 12 Part I, Ch.7 "Alternating Current", the chapter's own
 *     worked values: L = 5.0 H, C = 80 µF, R = 40 Ω.
 *       topology series, [resistor 40 Ω, inductor 5000 mH, capacitor 80 µF]
 *         ω₀ = 1/√(LC) = 1/√(5 × 80×10⁻⁶) = 1/√(4×10⁻⁴) = 1/0.02 = 50 rad/s
 *         f₀ = ω₀/2π = 7.957747 Hz
 *         Q  = ω₀L/R = 50 × 5 / 40 = 6.25
 *     A stub that returns ω₀ where f₀ was asked — the commonest bug in this
 *     formula — answers 50 instead of 7.96 and fails loudly. Note the unit
 *     conversion this fixture also pins: the payload carries 5000 mH, not 5.
 *
 * ---------------------------------------------------------------------------
 * THE CAPS, AND THE ARITHMETIC THEY COME FROM.
 *
 * Measured at 343x236 — `spec-small`, the smallest board this app checks
 * (docs/small-screen-rendering-rules.md). A floor derived at 900x430 is not a
 * floor. Enforced in validate(), never by thinning the render.
 *
 *   usable width  = 343 − 2·PAD_SIDE(12)                       = 319
 *   rail          = 319 − 2·CORNER(14)                         = 291
 *   usable height = 236 − READOUT_BAND(28.4) − PAD_EDGE(10)    = 197.6
 *
 * LABEL CAPS — this is what closes the dense-mesh risk.
 *   name  ≤ 3 characters
 *   value display ≤ 6 characters, and the widget writes it, not the model
 *   6 × LABEL_SIZE(12) × CHAR_W(0.58) = 41.76pt of text
 *   against CELL_PITCH 52                     ⇒ 10.24pt clear
 *   7 characters would be 48.72pt             ⇒ only 3.28pt clear
 * So `fmtOhms` must emit "4.7 kΩ" and never "4.700 kΩ"; the unit is chosen so
 * the mantissa always lands in [1, 1000) and the whole string fits in 6.
 *
 * Two stacked labels per cell need a baseline separation of at least one text
 * line, LABEL_SIZE × 1.15 = 13.8pt; LABEL_STACK is 14. The pair plus its
 * clearance from the wire reserves 40pt on the label side of that wire
 * (name box top at y−35.84 through value box bottom at y−8.04 is 27.8, plus
 * 8.04 of wire clearance and ~4 of margin).
 *
 * SLOT COUNTS, fixed by topology:
 *   series           1..4   4 × 52 = 208 ≤ 291 (83pt spare).
 *                           6 × 52 = 312 > 291 — arithmetically impossible.
 *                           5 × 52 = 260 fits the pitch but leaves 31pt of
 *                           slack across the WHOLE rail, under one cell of
 *                           margin, so the cap is set at 4.
 *   parallel         2..3   3 × 52 branch pitch + 28 of rail ends = 184 ≤ 197.6.
 *                           4 would need 4 × 52 + 28 = 236 > 197.6 — fails.
 *   series_parallel  = 4    two banks of two.
 *   ladder           = 4    two series arms, two shunts.
 *   bridge           = 5    four arms and the galvanometer.
 *   two_loop         = 6    the six branches of a two-mesh network.
 *
 * REJECT, NEVER PAD. An `elements.length` that does not match the topology is
 * an ERROR: padding with a default resistor invents circuit the model did not
 * send, and a student reading "R₄ = 1 Ω" off a board where the model named
 * three resistors is being shown a fabricated answer.
 *
 * THE ONE GENUINE GLYPH HAZARD, and it lives in `bridge`. The source symbol
 * and the galvanometer are BOTH circles at GLYPH_R = 10, so verify-render
 * assertion 8 demands 2r + 4 = 24pt between them. They sit on opposite
 * diagonals — galvanometer at the centre of the W–E detector diagonal, source
 * outside the diamond on the N–S supply diagonal — but LONG ARM LABELS SHRINK
 * THE DIAMOND, and a shrunk diamond brings them together. So `bridgeGeometry`
 * enforces a floor of HALF_DIAG_MIN = 40pt on BOTH half-diagonals, and
 * `fitProblems` REJECTS a payload whose arm and galvanometer labels do not
 * clear each other AT THAT FLOOR. It does not shrink the floor to fit.
 *   worked: the binding pair at the floor is the galvanometer's own label,
 *   centred under its circle and half of 41.76 = 20.88pt wide, against the SE
 *   arm label which starts at hx/2 + 10 = 30pt from the centre. 30 − 20.88 =
 *   9.12pt of clearance at hx = 40, and 0 at hx = 21.76. Raising
 *   MAX_VALUE_CHARS to 9 (w/2 = 31.3) would make the floor insufficient and
 *   fitProblems would say so, which is the point of checking rather than
 *   asserting.
 */
import {
  CHAR_W,
  GLYPH_R,
  LABEL_SIZE,
  PAD_EDGE,
  PAD_SIDE,
  READOUT_BAND,
  READOUT_SIZE,
} from '../chrome';

/* ------------------------------------------------------------------- types */

export type Topology =
  | 'series'
  | 'parallel'
  | 'series_parallel'
  | 'ladder'
  | 'bridge'
  | 'two_loop';

export type ElementKind =
  | 'resistor'
  | 'capacitor'
  | 'inductor'
  | 'cell'
  | 'switch'
  | 'galvanometer'
  | 'lamp';

export interface CircuitElement {
  kind: ElementKind;
  /** At most 3 characters — "R1", "C", "Rg". */
  name: string;
  /** Strictly positive, in the unit `kind` fixes. Never carries a unit itself. */
  value: number;
}

export interface CircuitNetworkParams {
  topology: Topology;
  elements: readonly CircuitElement[];
  source_v: number;
  internal_r: number;
  bridge_null_cm: number;
  show_current: boolean;
  /** Charge/current phase, 0..1. ANIMATABLE. */
  t_frac: number;
  /** Galvanometer needle deflection, −1..1. ANIMATABLE. */
  bridge_delta: number;
  caption: string;
}

/**
 * EXACTLY SEVEN KEYS, THE SAME SET IN EVERY TOPOLOGY, zeros where the
 * topology has nothing to say. A derived map whose SHAPE changes with the
 * payload cannot be referenced by a `{{token}}` caption written in advance,
 * which is the whole reason `derived` exists (types.ts, `WidgetModule.derived`).
 */
export interface CircuitDerived {
  /** Equivalent resistance of the resistive slots, ohms. */
  r_eq: number;
  /** Equivalent capacitance of the capacitive slots, microfarad. */
  c_eq: number;
  /** Source current through r_eq + internal_r, amperes. */
  i_total: number;
  /** ε − I r, volts. */
  terminal_v: number;
  /** I² r_eq, watts. */
  power: number;
  /** r_eq × c_eq, seconds. */
  tau: number;
  /** Metre-bridge unknown, ohms. Zero outside `bridge`. */
  r_unknown: number;
  [key: string]: number;
}

/* -------------------------------------------------------------------- caps */

export const TOPOLOGIES: readonly Topology[] = [
  'series', 'parallel', 'series_parallel', 'ladder', 'bridge', 'two_loop',
];

export const ELEMENT_KINDS: readonly ElementKind[] = [
  'resistor', 'capacitor', 'inductor', 'cell', 'switch', 'galvanometer', 'lamp',
];

/** Inclusive slot count, fixed by topology. See the header's arithmetic. */
export const SLOTS: Readonly<Record<Topology, { min: number; max: number }>> = {
  series: { min: 1, max: 4 },
  parallel: { min: 2, max: 3 },
  series_parallel: { min: 4, max: 4 },
  ladder: { min: 4, max: 4 },
  bridge: { min: 5, max: 5 },
  two_loop: { min: 6, max: 6 },
};

export const MAX_NAME_CHARS = 3;
export const MAX_VALUE_CHARS = 6;
export const MAX_CAPTION_CHARS = 40;

export const SOURCE_V_MIN = 0.1;
export const SOURCE_V_MAX = 500;
export const INTERNAL_R_MIN = 0;
export const INTERNAL_R_MAX = 100;
export const NULL_CM_MIN = 1;
export const NULL_CM_MAX = 99;

/**
 * Strictly positive, and bounded PER KIND so the unit choice below always
 * lands the mantissa in [1, 1000) and the display string inside
 * MAX_VALUE_CHARS. The ceilings are not decorative: `fmtVolts(1e7)` is
 * "10000000 V", ten characters, 69.6pt of text against a 52pt cell pitch —
 * found by sweeping the declared range against `fmtElement`, not by reading
 * the formatter. A cell's ceiling is SOURCE_V_MAX for the same reason the
 * supply's is.
 */
export const VALUE_MIN = 0.01;
export const VALUE_MAX_BY_KIND: Readonly<Record<ElementKind, number>> = {
  resistor: 1e7,       // 10 MΩ  -> "10 MΩ"
  lamp: 1e7,
  galvanometer: 1e7,
  capacitor: 1e5,      // 100 mF -> "100 mF"
  inductor: 1e5,       // 100 H  -> "100 H"
  cell: SOURCE_V_MAX,  // 500 V  -> "500 V"
  switch: 1e7,         // never displayed
};

/** The window the charge animation covers, in time constants. t_frac 0.4 is
 *  therefore exactly one τ — see reference 3. */
export const CHARGE_WINDOW_TAU = 2.5;

/** The board every cap is measured at. `spec-small`. */
export const REF_W = 343;
export const REF_H = 236;

/* ------------------------------------------------------------------ chrome */

/** Inset of the first and last cell from the vertical rails. */
export const CORNER = 14;
/** Minimum pitch between two labelled cells: 41.76pt of value text + 10.24 clear. */
export const CELL_PITCH = 52;
/** Drawn length of an element symbol along its own axis. */
export const ELEM_LEN = 26;
/** Drawn width of an element body across its axis. */
export const ELEM_H = 10;
/** Baseline separation of the two stacked labels. ≥ LABEL_BOX_H (13.8). */
export const LABEL_STACK = 14;
/** Wire to the nearer of the two baselines. */
export const LABEL_GAP = 12;
/** A vertical element's body edge to its side labels. */
export const SIDE_GAP = 8;
/** A lamp's glyph. Deliberately NOT GLYPH_R: verify-render assertion 8 only
 *  compares circles of the SAME radius, so a distinct radius keeps lamps out
 *  of the source/galvanometer spacing budget entirely. */
export const LAMP_R = 7;
/** Junction dot. Two of them must clear 2r+4 = 12pt. */
export const NODE_R = 4;
/** Half-diagonal floor for `bridge`. See the header's glyph-hazard note. */
export const HALF_DIAG_MIN = 40;
/** Vertical drop from the diamond's S node to the source on the return rail. */
export const SRC_DROP = 26;

/** verify-render's own text-box model, reused so the widget lays out to
 *  exactly what the checker measures. */
export const LABEL_BOX_H = LABEL_SIZE * 1.15;        // 13.8
export const LABEL_ASCENT = LABEL_SIZE * 0.82;       // 9.84
export const CHAR_PT = LABEL_SIZE * CHAR_W;          // 6.96
/**
 * Bottom of the readout line's own text box, in the same model:
 * baseline READOUT_BAND − READOUT_SIZE/2 = 21.4, box
 * [21.4 − 14(0.82), 21.4 − 11.48 + 14(1.15)] = [9.92, 26.02].
 * Every label this widget draws must start below it — checked, not assumed,
 * because computing the readout STRING here would duplicate the component's
 * own formatting and let the two drift.
 */
export const READOUT_BOX_BOTTOM =
  READOUT_BAND - READOUT_SIZE * 0.5 - READOUT_SIZE * 0.82 + READOUT_SIZE * 1.15;

export function textW(s: string): number {
  return s.length * CHAR_PT;
}

/* -------------------------------------------------------------- formatting */

const trimZeros = (s: string): string =>
  s.indexOf('.') < 0 ? s : s.replace(/0+$/, '').replace(/\.$/, '');

/** At most 3 characters, for a 3-character unit suffix (" kΩ", " µF", " mH"). */
export function sig3(v: number): string {
  if (v >= 9.995) return String(Math.round(v));
  return trimZeros(v.toFixed(1));
}

/** At most 4 characters, for a 2-character unit suffix (" Ω", " V", " H"). */
export function sig4(v: number): string {
  if (v >= 99.95) return String(Math.round(v));
  if (v >= 9.995) return trimZeros(v.toFixed(1));
  return trimZeros(v.toFixed(2));
}

/**
 * The unit is always chosen so the mantissa lands in [1, 1000). That is what
 * keeps every display string inside MAX_VALUE_CHARS without ever slicing one
 * — a sliced number is a different number, which is exactly the failure the
 * 6-character cap exists to prevent.
 *
 * THE THRESHOLDS ARE 999.5, NOT 1000, AND 0.9995, NOT 1. `sig3` ROUNDS, so a
 * value of 0.99956 Ω picked into the milliohm branch prints "1000 mΩ" — seven
 * characters, 48.7pt against a 52pt pitch. The unit has to be chosen against
 * the number that will be PRINTED, not the number that was passed. Found by
 * sweeping the whole declared range through `fmtElement` and measuring the
 * longest string it produced, which is the only way this class of boundary
 * bug shows up: every round number in the range formats correctly.
 */
export function fmtOhms(v: number): string {
  if (v >= 999500) return `${sig3(v / 1e6)} MΩ`;
  if (v >= 999.5) return `${sig3(v / 1e3)} kΩ`;
  if (v >= 0.9995) return `${sig4(v)} Ω`;
  return `${sig3(v * 1e3)} mΩ`;
}

/** `value` is in microfarad, always. */
export function fmtFarad(v: number): string {
  if (v >= 999.5) return `${sig3(v / 1e3)} mF`;
  if (v >= 0.9995) return `${sig3(v)} µF`;
  return `${sig3(v * 1e3)} nF`;
}

/** `value` is in millihenry, always. */
export function fmtHenry(v: number): string {
  if (v >= 999.5) return `${sig4(v / 1e3)} H`;
  if (v >= 0.9995) return `${sig3(v)} mH`;
  return `${sig3(v * 1e3)} µH`;
}

export function fmtVolts(v: number): string {
  if (v >= 0.9995) return `${sig4(v)} V`;
  return `${sig3(v * 1e3)} mV`;
}

export function fmtAmps(v: number): string {
  if (v >= 999.5) return `${sig3(v / 1e3)} kA`;
  if (v >= 0.9995) return `${sig4(v)} A`;
  if (v >= 0.0009995) return `${sig3(v * 1e3)} mA`;
  return `${sig3(v * 1e6)} µA`;
}

export function fmtSeconds(v: number): string {
  if (v >= 999.5) return `${sig3(v / 1e3)} ks`;
  if (v >= 0.9995) return `${sig4(v)} s`;
  if (v >= 0.0009995) return `${sig3(v * 1e3)} ms`;
  return `${sig3(v * 1e6)} µs`;
}

/** The display string for one element. Empty for a switch, which has no
 *  quantity to show — its `value` is required only to keep the element shape
 *  uniform and is never rendered or summed. */
export function fmtElement(el: CircuitElement): string {
  switch (el.kind) {
    case 'capacitor': return fmtFarad(el.value);
    case 'inductor': return fmtHenry(el.value);
    case 'cell': return fmtVolts(el.value);
    case 'switch': return '';
    default: return fmtOhms(el.value);
  }
}

/* ------------------------------------------------------------ the network */

/** Kinds that carry resistance into r_eq. A cell's resistance is the payload's
 *  `internal_r`, an ideal closed switch is a wire, a capacitor blocks DC and an
 *  inductor is a short at DC — all four contribute 0. */
const RESISTIVE: readonly ElementKind[] = ['resistor', 'lamp', 'galvanometer'];

export function resistanceOf(el: CircuitElement | undefined): number {
  if (!el) return 0;
  return RESISTIVE.indexOf(el.kind) >= 0 ? el.value : 0;
}

export function capacitanceOf(el: CircuitElement | undefined): number {
  return el && el.kind === 'capacitor' ? el.value : 0;
}

export function inductanceOf(el: CircuitElement | undefined): number {
  return el && el.kind === 'inductor' ? el.value : 0;
}

/**
 * Two resistive branches in parallel.
 *
 * A branch total of 0 means "this branch holds no resistive element at all",
 * not "this branch is a 0 Ω short" — the two are indistinguishable in the
 * number and distinguishable in the schema, which is why validate() refuses a
 * bank that mixes a resistive branch with a non-resistive one (r_eq and c_eq
 * are BOTH meaningless there). With that refused, a bank is homogeneous, and a
 * homogeneous non-resistive bank correctly contributes 0.
 */
export function parR(a: number, b: number): number {
  return a > 0 && b > 0 ? (a * b) / (a + b) : 0;
}

export function parListR(values: readonly number[]): number {
  if (values.length === 0) return 0;
  let inv = 0;
  for (const v of values) {
    if (!(v > 0)) return 0;
    inv += 1 / v;
  }
  return 1 / inv;
}

export const serListR = (values: readonly number[]): number =>
  values.reduce((a, v) => a + v, 0);

/** Capacitors in series: 1/C = Σ 1/Cᵢ over the slots that ACTUALLY hold a
 *  capacitor. A slot holding a resistor is a wire in the capacitive reading,
 *  not a zero-farad open, so it is skipped rather than zeroing the answer. */
export function serListC(values: readonly number[]): number {
  const nz = values.filter((v) => v > 0);
  if (nz.length === 0) return 0;
  return 1 / nz.reduce((a, v) => a + 1 / v, 0);
}

export const parListC = (values: readonly number[]): number =>
  values.reduce((a, v) => a + v, 0);

/** Inductors combine like resistors: series adds, parallel is the reciprocal sum. */
export const serListL = serListR;
export const parListL = parListR;

/** Every slot's resistance, capacitance and inductance, index-aligned. */
function slotValues(p: CircuitNetworkParams): {
  R: number[]; C: number[]; L: number[];
} {
  return {
    R: p.elements.map(resistanceOf),
    C: p.elements.map(capacitanceOf),
    L: p.elements.map(inductanceOf),
  };
}

/**
 * The equivalent, per topology. Each line is the reduction the drawing shows,
 * with the same combination rule applied under three different algebras
 * (series-adds for R and L, series-reciprocal for C).
 */
function reduce(
  topology: Topology,
  v: readonly number[],
  ser: (x: readonly number[]) => number,
  par: (x: readonly number[]) => number
): number {
  const at = (i: number) => v[i] ?? 0;
  switch (topology) {
    case 'series':
      return ser(v);
    case 'parallel':
      return par(v);
    // Two banks of two, in series.
    case 'series_parallel':
      return ser([par([at(0), at(1)]), par([at(2), at(3)])]);
    // series1 + (shunt1 ‖ (series2 + shunt2)).
    case 'ladder':
      return ser([at(0), par([at(1), ser([at(2), at(3)])])]);
    // (P + R) ‖ (Q + S). The galvanometer is on the OTHER diagonal and is not
    // part of either path, which is why slot 4 never appears here.
    case 'bridge':
      return par([ser([at(0), at(2)]), ser([at(1), at(3)])]);
    // top-left + bottom-left + (middle ‖ (top-right + right + bottom-right)).
    case 'two_loop':
      return ser([at(0), at(1), par([at(2), ser([at(3), at(5), at(4)])])]);
    default:
      return 0;
  }
}

/**
 * The branches that sit in parallel with one another, per topology, as slot
 * index groups. Used by validate() to refuse a bank that mixes a resistive
 * branch with a capacitive one — see `parR`.
 */
export function parallelBanks(topology: Topology, n: number): number[][][] {
  switch (topology) {
    case 'parallel':
      return [Array.from({ length: n }, (_, i) => [i])];
    case 'series_parallel':
      return [[[0], [1]], [[2], [3]]];
    case 'ladder':
      return [[[1], [2, 3]]];
    case 'bridge':
      return [[[0, 2], [1, 3]]];
    case 'two_loop':
      return [[[2], [3, 5, 4]]];
    default:
      return [];
  }
}

export function metreBridgeUnknown(knownR: number, nullCm: number): number {
  if (!(nullCm > 0 && nullCm < 100)) return 0;
  return (knownR * (100 - nullCm)) / nullCm;
}

export function derive(p: CircuitNetworkParams): CircuitDerived {
  const { R, C } = slotValues(p);

  const r_eq = reduce(p.topology, R, serListR, parListR);
  const c_eq = reduce(p.topology, C, serListC, parListC);

  const total = r_eq + p.internal_r;
  const i_total = total > 0 ? p.source_v / total : 0;
  const terminal_v = p.source_v - i_total * p.internal_r;
  const power = i_total * i_total * r_eq;
  // c_eq is microfarad; τ is seconds.
  const tau = r_eq * c_eq * 1e-6;
  const r_unknown =
    p.topology === 'bridge'
      ? metreBridgeUnknown(p.elements[0] ? p.elements[0].value : 0, p.bridge_null_cm)
      : 0;

  return { r_eq, c_eq, i_total, terminal_v, power, tau, r_unknown };
}

/* ---------------------------------------------- the physics the caption uses */

/** Total inductance, in HENRY, reduced on the same topology. */
export function equivalentHenry(p: CircuitNetworkParams): number {
  const { L } = slotValues(p);
  return reduce(p.topology, L, serListL, parListL) * 1e-3;
}

/**
 * V_C at a charge phase, volts. `t_frac` is the ANIMATION phase, and the
 * window is CHARGE_WINDOW_TAU time constants wide — so t_frac 0.4 is one τ.
 * Returns the source voltage flat when there is no RC to speak of, which is
 * the drawable-at-zero requirement: an unsupplied motion key is 0, and 0 must
 * render.
 */
export function capacitorVoltage(p: CircuitNetworkParams, tFrac: number): number {
  const d = derive(p);
  const t = Math.min(1, Math.max(0, tFrac));
  if (!(d.tau > 0)) return d.c_eq > 0 ? p.source_v * t : 0;
  return p.source_v * (1 - Math.exp(-CHARGE_WINDOW_TAU * t));
}

/** Fraction of full charge, 0..1 — what the fill height is a multiple of. */
export function chargeFraction(tFrac: number): number {
  const t = Math.min(1, Math.max(0, tFrac));
  return 1 - Math.exp(-CHARGE_WINDOW_TAU * t);
}

/** Q = C V, in microcoulomb (c_eq is microfarad). */
export function capacitorCharge(p: CircuitNetworkParams): number {
  return derive(p).c_eq * p.source_v;
}

/** U = ½ C V², in microjoule. */
export function capacitorEnergy(p: CircuitNetworkParams): number {
  return 0.5 * derive(p).c_eq * p.source_v * p.source_v;
}

/** ω₀ = 1/√(LC), rad/s. Zero unless the network has both an L and a C. */
export function resonantOmega(p: CircuitNetworkParams): number {
  const l = equivalentHenry(p);
  const c = derive(p).c_eq * 1e-6;
  if (!(l > 0 && c > 0)) return 0;
  return 1 / Math.sqrt(l * c);
}

/** f₀ = ω₀/2π, Hz. NOT ω₀ — see reference 5. */
export function resonantFreq(p: CircuitNetworkParams): number {
  return resonantOmega(p) / (2 * Math.PI);
}

/** Q = ω₀L/R. */
export function qualityFactor(p: CircuitNetworkParams): number {
  const d = derive(p);
  const l = equivalentHenry(p);
  const w = resonantOmega(p);
  if (!(d.r_eq > 0 && l > 0 && w > 0)) return 0;
  return (w * l) / d.r_eq;
}

/* ------------------------------------------------------------------ layout */

export type Axis = 'h' | 'v';
/** Which side of its own wire an element's two stacked labels sit on. */
export type LabelSide = 'above' | 'below' | 'left' | 'right';

export interface Seg { x0: number; y0: number; x1: number; y1: number }

export interface PlacedElement {
  slot: number;
  kind: ElementKind;
  name: string;
  value: number;
  /** The formatted string. The widget writes it; the model never sends it. */
  display: string;
  axis: Axis;
  /** Centre, on the wire. */
  cx: number;
  cy: number;
  side: LabelSide;
  /** Perpendicular distance from the centre to the nearer baseline. */
  off: number;
  /** Direction along the wire — a bridge arm is diagonal, so this is not
   *  always axis-aligned and every symbol is drawn from it rather than from
   *  a rotation transform. verify-render's boundsOf ignores `transform`
   *  entirely, so a rotated Rect would be measured at the wrong place. */
  ux: number;
  uy: number;
}

export interface Glyph { x: number; y: number; r: number; what: string }

export interface CircuitLayout {
  wires: Seg[];
  elements: PlacedElement[];
  /** Every circle this widget draws, for verify-render assertion 8. */
  glyphs: Glyph[];
  source: { x: number; y: number; side: LabelSide; off: number };
  galvo: { x: number; y: number } | null;
  /** The straight run the travelling current arrow moves along. */
  currentRun: Seg;
  /** The capacitor the charge fill draws between the plates of. */
  fill: { x: number; y: number; axis: Axis } | null;
  bridge: { cx: number; cy: number; hx: number; hy: number } | null;
}

export interface LabelPlacement {
  x: number;
  y: number;
  anchor: 'start' | 'middle' | 'end';
}

/** The two stacked baselines for one label pair. */
export function labelSlots(
  cx: number, cy: number, side: LabelSide, off: number
): [LabelPlacement, LabelPlacement] {
  switch (side) {
    case 'above':
      return [
        { x: cx, y: cy - off - LABEL_STACK, anchor: 'middle' },
        { x: cx, y: cy - off, anchor: 'middle' },
      ];
    case 'below':
      return [
        { x: cx, y: cy + off, anchor: 'middle' },
        { x: cx, y: cy + off + LABEL_STACK, anchor: 'middle' },
      ];
    case 'right':
      return [
        { x: cx + off, y: cy - LABEL_STACK / 2, anchor: 'start' },
        { x: cx + off, y: cy + LABEL_STACK / 2, anchor: 'start' },
      ];
    default:
      return [
        { x: cx - off, y: cy - LABEL_STACK / 2, anchor: 'end' },
        { x: cx - off, y: cy + LABEL_STACK / 2, anchor: 'end' },
      ];
  }
}

/** Default perpendicular offsets, in device points. `below` is larger than
 *  `above` because the name box's TOP has to clear the element body
 *  (ELEM_H/2 = 5): 16 − 9.84 = 6.16 of clearance, against 12 − 3.96 = 8.04
 *  going the other way. */
export const OFF_ABOVE = LABEL_GAP;                 // 12
export const OFF_BELOW = LABEL_GAP + 4;             // 16
export const OFF_SIDE = ELEM_H / 2 + SIDE_GAP;      // 13
export const OFF_GLYPH = GLYPH_R + 6;               // 16
/** A bridge arm is diagonal, so its labels hang off the midpoint horizontally. */
export const OFF_ARM = 10;

const seg = (x0: number, y0: number, x1: number, y1: number): Seg => ({ x0, y0, x1, y1 });

/**
 * Removes each element's footprint from the wire that runs through it.
 *
 * Without this the rail is drawn straight through a capacitor's gap and the
 * board shows a short circuit — the diagram is WRONG rather than untidy, which
 * is the class of defect this whole runtime exists to make impossible. Doing it
 * by carving generic segments (rather than by emitting pre-split ones per
 * topology) means a new topology cannot forget it.
 */
export function carve(wires: readonly Seg[], cuts: readonly PlacedElement[]): Seg[] {
  const out: Seg[] = [];
  for (const w of wires) {
    const dx = w.x1 - w.x0;
    const dy = w.y1 - w.y0;
    const len = Math.hypot(dx, dy);
    if (!(len > 0)) continue;
    const ux = dx / len;
    const uy = dy / len;

    const marks: number[][] = [];
    for (const c of cuts) {
      const t = (c.cx - w.x0) * ux + (c.cy - w.y0) * uy;
      // Perpendicular distance from this element's centre to the wire's line.
      const px = w.x0 + ux * t - c.cx;
      const py = w.y0 + uy * t - c.cy;
      if (Math.hypot(px, py) > 0.5) continue;
      const a = t - ELEM_LEN / 2;
      const b = t + ELEM_LEN / 2;
      if (b <= 0 || a >= len) continue;
      marks.push([Math.max(0, a), Math.min(len, b)]);
    }
    marks.sort((a, b) => a[0] - b[0]);

    let at = 0;
    for (const [a, b] of marks) {
      if (a > at) out.push(seg(w.x0 + ux * at, w.y0 + uy * at, w.x0 + ux * a, w.y0 + uy * a));
      at = Math.max(at, b);
    }
    if (at < len) out.push(seg(w.x0 + ux * at, w.y0 + uy * at, w.x1, w.y1));
  }
  return out;
}

interface Spot {
  axis: Axis;
  cx: number;
  cy: number;
  side: LabelSide;
  off: number;
  ux?: number;
  uy?: number;
}

function placeAll(p: CircuitNetworkParams, spots: readonly Spot[]): PlacedElement[] {
  const out: PlacedElement[] = [];
  for (let i = 0; i < spots.length && i < p.elements.length; i++) {
    const s = spots[i];
    const el = p.elements[i];
    out.push({
      slot: i,
      kind: el.kind,
      name: el.name,
      value: el.value,
      display: fmtElement(el),
      axis: s.axis,
      cx: s.cx,
      cy: s.cy,
      side: s.side,
      off: s.off,
      ux: s.ux ?? (s.axis === 'h' ? 1 : 0),
      uy: s.uy ?? (s.axis === 'h' ? 0 : 1),
    });
  }
  return out;
}

/**
 * The `bridge` diamond, with the half-diagonal FLOOR applied.
 *
 * Both half-diagonals are clamped UP to HALF_DIAG_MIN and never down to fit a
 * label; a payload whose labels do not clear at the floor is refused by
 * `fitProblems` instead. Shrinking the diamond to make room would trade a
 * rejected payload for a board where the source and the galvanometer — two
 * r = 10 circles — sit inside verify-render's 24pt glyph floor.
 */
export function bridgeGeometry(width: number, height: number) {
  const cx = width / 2;
  const yN = READOUT_BAND + 26;
  const yBotRail = height - PAD_EDGE - 4;
  const yS = yBotRail - SRC_DROP;
  const cy = (yN + yS) / 2;
  const hy = Math.max(HALF_DIAG_MIN, (yS - yN) / 2);
  // 16pt of lane on the right for the supply's return run, and the diamond is
  // held under 2.2:1 so it stays a diamond rather than a slot on a wide board.
  const hx = Math.max(HALF_DIAG_MIN, Math.min(cx - PAD_SIDE - 16, 2.2 * hy));
  return { cx, cy, hx, hy, yN, yS, yBotRail, yLane: READOUT_BAND + 4 };
}

export function layout(p: CircuitNetworkParams, width: number, height: number): CircuitLayout {
  const x0 = PAD_SIDE;
  const x1 = width - PAD_SIDE;
  const n = p.elements.length;

  let wires: Seg[] = [];
  let elements: PlacedElement[] = [];
  const glyphs: Glyph[] = [];
  let source = { x: x0, y: height / 2, side: 'right' as LabelSide, off: OFF_GLYPH };
  let galvo: { x: number; y: number } | null = null;
  let currentRun: Seg = seg(x0, READOUT_BAND, x1, READOUT_BAND);
  let bridge: { cx: number; cy: number; hx: number; hy: number } | null = null;

  const dot = (x: number, y: number) => glyphs.push({ x, y, r: NODE_R, what: 'node' });

  if (p.topology === 'series') {
    const yTop = READOUT_BAND + 10;
    const yBot = height - PAD_EDGE;
    const railL = x0 + CORNER;
    const railR = x1 - CORNER;
    const pitch = (railR - railL) / Math.max(1, n);
    const srcY = (yTop + yBot) / 2;
    source = { x: x0, y: srcY, side: 'right', off: OFF_GLYPH };

    elements = placeAll(
      p,
      Array.from({ length: n }, (_, i) => ({
        axis: 'h' as Axis, cx: railL + pitch * (i + 0.5), cy: yTop,
        side: 'below' as LabelSide, off: OFF_BELOW,
      }))
    );
    wires = [
      seg(x0, yTop, x1, yTop),
      seg(x1, yTop, x1, yBot),
      seg(x0, yBot, x1, yBot),
      seg(x0, yTop, x0, srcY - GLYPH_R),
      seg(x0, srcY + GLYPH_R, x0, yBot),
    ];
    currentRun = seg(railL, yTop, railR, yTop);
  } else if (p.topology === 'parallel') {
    const yTopRail = READOUT_BAND + 4;
    const yBotRail = height - PAD_EDGE;
    // 20pt of lead above the first branch and 38 below the last — the last
    // branch's own label band reaches y + 33.96.
    const pitch = Math.max(CELL_PITCH, (yBotRail - yTopRail - 58) / Math.max(1, n - 1));
    const ys = Array.from({ length: n }, (_, i) => yTopRail + 20 + pitch * i);
    const xA = x0 + 56;
    const xB = x1 - 20;
    const srcY = (yTopRail + yBotRail) / 2;
    source = { x: x0, y: srcY, side: 'right', off: OFF_GLYPH };

    elements = placeAll(
      p,
      ys.map((y) => ({
        axis: 'h' as Axis, cx: (xA + xB) / 2, cy: y,
        side: 'below' as LabelSide, off: OFF_BELOW,
      }))
    );
    wires = [
      seg(xA, ys[0], xA, yTopRail),
      seg(x0, yTopRail, xA, yTopRail),
      seg(x0, yTopRail, x0, srcY - GLYPH_R),
      seg(x0, srcY + GLYPH_R, x0, yBotRail),
      seg(x0, yBotRail, xB, yBotRail),
      seg(xB, yBotRail, xB, ys[n - 1]),
      seg(xA, ys[0], xA, ys[n - 1]),
      seg(xB, ys[0], xB, ys[n - 1]),
      ...ys.map((y) => seg(xA, y, xB, y)),
    ];
    for (const y of ys) { dot(xA, y); dot(xB, y); }
    currentRun = seg(x0, yTopRail, xA, yTopRail);
  } else if (p.topology === 'series_parallel') {
    const yMid = READOUT_BAND + 62;
    const yUp = yMid - CELL_PITCH / 2;
    const yDn = yMid + CELL_PITCH / 2;
    const yBot = height - PAD_EDGE;
    const railL = x0 + CORNER;
    const railR = x1 - CORNER;
    const rail = railR - railL;
    const bw = Math.max(90, Math.min(rail * 0.36, (rail - 40) / 2));
    const aL = railL;
    const aR = aL + bw;
    const bR = railR;
    const bL = bR - bw;
    const srcY = (yMid + yBot) / 2;
    source = { x: x0, y: srcY, side: 'right', off: OFF_GLYPH };

    elements = placeAll(p, [
      { axis: 'h', cx: (aL + aR) / 2, cy: yUp, side: 'above', off: OFF_ABOVE },
      { axis: 'h', cx: (aL + aR) / 2, cy: yDn, side: 'above', off: OFF_ABOVE },
      { axis: 'h', cx: (bL + bR) / 2, cy: yUp, side: 'above', off: OFF_ABOVE },
      { axis: 'h', cx: (bL + bR) / 2, cy: yDn, side: 'above', off: OFF_ABOVE },
    ]);
    wires = [
      seg(x0, yMid, aL, yMid),
      seg(aL, yUp, aL, yDn), seg(aR, yUp, aR, yDn),
      seg(aL, yUp, aR, yUp), seg(aL, yDn, aR, yDn),
      seg(aR, yMid, bL, yMid),
      seg(bL, yUp, bL, yDn), seg(bR, yUp, bR, yDn),
      seg(bL, yUp, bR, yUp), seg(bL, yDn, bR, yDn),
      seg(bR, yMid, x1, yMid),
      seg(x1, yMid, x1, yBot),
      seg(x0, yBot, x1, yBot),
      seg(x0, yMid, x0, srcY - GLYPH_R),
      seg(x0, srcY + GLYPH_R, x0, yBot),
    ];
    dot(aL, yMid); dot(aR, yMid); dot(bL, yMid); dot(bR, yMid);
    currentRun = seg(railL, yBot, railR, yBot);
  } else if (p.topology === 'ladder') {
    const yTop = READOUT_BAND + 10;
    const yBot = height - PAD_EDGE;
    const xA = x0 + (x1 - x0) * 0.46;
    const mid = (yTop + yBot) / 2;
    const srcY = mid;
    source = { x: x0, y: srcY, side: 'right', off: OFF_GLYPH };

    elements = placeAll(p, [
      { axis: 'h', cx: (x0 + CORNER + xA) / 2, cy: yTop, side: 'below', off: OFF_BELOW },
      { axis: 'v', cx: xA, cy: mid, side: 'right', off: OFF_SIDE },
      { axis: 'h', cx: (xA + x1 - CORNER) / 2, cy: yTop, side: 'below', off: OFF_BELOW },
      { axis: 'v', cx: x1, cy: mid, side: 'left', off: OFF_SIDE },
    ]);
    wires = [
      seg(x0, yTop, x1, yTop),
      seg(x0, yBot, x1, yBot),
      seg(xA, yTop, xA, yBot),
      seg(x1, yTop, x1, yBot),
      seg(x0, yTop, x0, srcY - GLYPH_R),
      seg(x0, srcY + GLYPH_R, x0, yBot),
    ];
    dot(xA, yTop); dot(xA, yBot);
    currentRun = seg(x0 + CORNER, yTop, x1 - CORNER, yTop);
  } else if (p.topology === 'bridge') {
    const g = bridgeGeometry(width, height);
    bridge = { cx: g.cx, cy: g.cy, hx: g.hx, hy: g.hy };
    const W = g.cx - g.hx;
    const E = g.cx + g.hx;
    galvo = { x: g.cx, y: g.cy };
    source = { x: g.cx, y: g.yBotRail, side: 'right', off: OFF_GLYPH };

    const arm = (sx: number, sy: number, ex: number, ey: number, side: LabelSide): Spot => {
      const dx = ex - sx;
      const dy = ey - sy;
      const len = Math.hypot(dx, dy) || 1;
      return {
        axis: 'h', cx: (sx + ex) / 2, cy: (sy + ey) / 2,
        side, off: OFF_ARM, ux: dx / len, uy: dy / len,
      };
    };
    elements = placeAll(p, [
      arm(W, g.cy, g.cx, g.yN, 'left'),
      arm(g.cx, g.yN, E, g.cy, 'right'),
      arm(W, g.cy, g.cx, g.yS, 'left'),
      arm(g.cx, g.yS, E, g.cy, 'right'),
      // The galvanometer's labels go UNDERNEATH its circle, not beside it:
      // beside, they would reach cx + 13 + 41.76 and collide with the NE arm
      // label, which starts at cx + hx/2 + 10 = cx + 30 at the floor.
      { axis: 'h', cx: g.cx, cy: g.cy, side: 'below', off: OFF_GLYPH },
    ]);
    wires = [
      seg(W, g.cy, g.cx, g.yN), seg(g.cx, g.yN, E, g.cy),
      seg(W, g.cy, g.cx, g.yS), seg(g.cx, g.yS, E, g.cy),
      seg(W, g.cy, g.cx - GLYPH_R, g.cy), seg(g.cx + GLYPH_R, g.cy, E, g.cy),
      seg(g.cx, g.yS, g.cx, g.yBotRail - GLYPH_R),
      seg(g.cx + GLYPH_R, g.yBotRail, x1, g.yBotRail),
      seg(x1, g.yBotRail, x1, g.yLane),
      seg(x1, g.yLane, g.cx, g.yLane),
      seg(g.cx, g.yLane, g.cx, g.yN),
    ];
    dot(g.cx, g.yN); dot(g.cx, g.yS); dot(W, g.cy); dot(E, g.cy);
    currentRun = seg(x1, g.yBotRail, x1, g.yLane);
  } else {
    // two_loop
    const yTop = READOUT_BAND + 10;
    const yBot = height - PAD_EDGE;
    const xM = (x0 + x1) / 2;
    const mid = (yTop + yBot) / 2;
    source = { x: x0, y: mid, side: 'right', off: OFF_GLYPH };

    elements = placeAll(p, [
      { axis: 'h', cx: (x0 + CORNER + xM) / 2, cy: yTop, side: 'below', off: OFF_BELOW },
      { axis: 'h', cx: (x0 + CORNER + xM) / 2, cy: yBot, side: 'above', off: OFF_ABOVE },
      { axis: 'v', cx: xM, cy: mid, side: 'right', off: OFF_SIDE },
      { axis: 'h', cx: (xM + x1 - CORNER) / 2, cy: yTop, side: 'below', off: OFF_BELOW },
      { axis: 'h', cx: (xM + x1 - CORNER) / 2, cy: yBot, side: 'above', off: OFF_ABOVE },
      { axis: 'v', cx: x1, cy: mid, side: 'left', off: OFF_SIDE },
    ]);
    wires = [
      seg(x0, yTop, x1, yTop),
      seg(x0, yBot, x1, yBot),
      seg(xM, yTop, xM, yBot),
      seg(x1, yTop, x1, yBot),
      seg(x0, yTop, x0, mid - GLYPH_R),
      seg(x0, mid + GLYPH_R, x0, yBot),
    ];
    dot(xM, yTop); dot(xM, yBot);
    currentRun = seg(x0 + CORNER, yTop, xM, yTop);
  }

  glyphs.push({ x: source.x, y: source.y, r: GLYPH_R, what: 'source' });
  if (galvo) glyphs.push({ x: galvo.x, y: galvo.y, r: GLYPH_R, what: 'galvanometer' });
  for (const el of elements) {
    if (el.kind === 'lamp') glyphs.push({ x: el.cx, y: el.cy, r: LAMP_R, what: 'lamp' });
  }

  const cap = elements.find((e) => e.kind === 'capacitor') ?? null;

  return {
    wires: carve(wires, elements),
    elements,
    glyphs,
    source,
    galvo,
    currentRun,
    fill: cap ? { x: cap.cx, y: cap.cy, axis: cap.axis } : null,
    bridge,
  };
}

/* ------------------------------------------------------- labels and the fit */

export interface TextBox { x0: number; x1: number; y0: number; y1: number; s: string }

function boxAt(pl: LabelPlacement, s: string): TextBox {
  const w = textW(s);
  const x0 = pl.anchor === 'middle' ? pl.x - w / 2 : pl.anchor === 'end' ? pl.x - w : pl.x;
  const y0 = pl.y - LABEL_ASCENT;
  return { x0, x1: x0 + w, y0, y1: y0 + LABEL_BOX_H, s };
}

/** The source's own two lines. The second exists only when the cell has
 *  internal resistance — a "r 0 Ω" line would be a claim the payload did not
 *  make. */
export function sourceLabels(p: CircuitNetworkParams): string[] {
  const lines = [fmtVolts(p.source_v)];
  if (p.internal_r > 0) lines.push(`r ${fmtOhms(p.internal_r)}`);
  return lines;
}

/**
 * Every label box this widget draws inside the circuit area, in exactly the
 * model scripts/verify-render.mjs measures with (width = len × 12 × 0.58,
 * top = y − 0.82 × 12, height = 1.15 × 12).
 *
 * The readout line is NOT one of these — computing its string here would
 * duplicate the component's own formatting and let the two drift. Instead
 * `fitProblems` asserts every box below starts under READOUT_BOX_BOTTOM,
 * which is the same guarantee without the duplication.
 */
export function labelBoxes(p: CircuitNetworkParams, width: number, height: number): TextBox[] {
  const l = layout(p, width, height);
  const boxes: TextBox[] = [];

  for (const el of l.elements) {
    const [a, b] = labelSlots(el.cx, el.cy, el.side, el.off);
    if (el.name) boxes.push(boxAt(a, el.name));
    if (el.display) boxes.push(boxAt(b, el.display));
  }

  const lines = sourceLabels(p);
  const [sa, sb] = labelSlots(l.source.x, l.source.y, l.source.side, l.source.off);
  if (lines.length === 1) {
    // One line sits on the glyph's own centre line rather than half a stack above it.
    boxes.push(boxAt({ ...sa, y: l.source.y + LABEL_SIZE * 0.35 }, lines[0]));
  } else {
    boxes.push(boxAt(sa, lines[0]));
    boxes.push(boxAt(sb, lines[1]));
  }
  return boxes;
}

const hits = (a: TextBox, b: TextBox) =>
  a.x0 < b.x1 && b.x0 < a.x1 && a.y0 < b.y1 && b.y0 < a.y1;

/**
 * The five `bridge` label boxes as they would be AT THE HALF-DIAGONAL FLOOR.
 *
 * This is the check the header's glyph-hazard note is about. Layout clamps the
 * half-diagonals UP to HALF_DIAG_MIN; validate() then refuses any payload whose
 * labels would not clear each other at that floor, rather than letting the
 * diamond shrink to accommodate them. The binding pair is the galvanometer's
 * own centred label (half-width w/2) against the SE arm label, which starts
 * hx/2 + OFF_ARM = 30pt from the centre at the floor.
 */
export function bridgeFloorBoxes(
  p: CircuitNetworkParams,
  hx: number = HALF_DIAG_MIN,
  hy: number = HALF_DIAG_MIN
): TextBox[] {
  const cx = 0;
  const cy = 0;
  const spots: { cx: number; cy: number; side: LabelSide; off: number }[] = [
    { cx: cx - hx / 2, cy: cy - hy / 2, side: 'left', off: OFF_ARM },
    { cx: cx + hx / 2, cy: cy - hy / 2, side: 'right', off: OFF_ARM },
    { cx: cx - hx / 2, cy: cy + hy / 2, side: 'left', off: OFF_ARM },
    { cx: cx + hx / 2, cy: cy + hy / 2, side: 'right', off: OFF_ARM },
    { cx, cy, side: 'below', off: OFF_GLYPH },
  ];
  const boxes: TextBox[] = [];
  for (let i = 0; i < spots.length && i < p.elements.length; i++) {
    const el = p.elements[i];
    const [a, b] = labelSlots(spots[i].cx, spots[i].cy, spots[i].side, spots[i].off);
    if (el.name) boxes.push(boxAt(a, el.name));
    const d = fmtElement(el);
    if (d) boxes.push(boxAt(b, d));
  }
  return boxes;
}

/**
 * Every reason this payload cannot be drawn legibly at `width` x `height`.
 * Empty means it renders.
 *
 * THE SCHEMA'S LEGAL RANGE MUST BE A SUBSET OF WHAT RENDERS CORRECTLY
 * (CLAUDE.md §3), so validate() runs this at REF_W x REF_H — the smallest
 * board this app checks — and refuses anything it reports. The first check is
 * the named arithmetic one that produces a message a payload author can act
 * on; the rest are the GEOMETRIC BACKSTOP, asserting exactly what
 * verify-render's assertions 3, 4 and 8 assert, so a payload that collides on
 * a phone can never be admitted in the first place.
 */
export function fitProblems(
  p: CircuitNetworkParams,
  width: number = REF_W,
  height: number = REF_H
): string[] {
  const problems: string[] = [];

  // 1. The bridge half-diagonal floor, checked AT the floor.
  if (p.topology === 'bridge') {
    const floor = bridgeFloorBoxes(p);
    for (let i = 0; i < floor.length; i++) {
      for (let j = i + 1; j < floor.length; j++) {
        if (hits(floor[i], floor[j])) {
          problems.push(
            `bridge labels "${floor[i].s}" and "${floor[j].s}" collide at the ${HALF_DIAG_MIN}pt half-diagonal floor — shorten the arm names, do not widen the diamond`
          );
        }
      }
    }
  }

  const boxes = labelBoxes(p, width, height);

  // 2. On the board, and clear of the readout line's own text box.
  for (const b of boxes) {
    if (b.x0 < -1 || b.x1 > width + 1 || b.y1 > height + 1) {
      problems.push(`label "${b.s}" runs off a ${width}x${height} board`);
    } else if (b.y0 < READOUT_BOX_BOTTOM) {
      problems.push(
        `label "${b.s}" sits at y ${b.y0.toFixed(1)}, inside the readout band that ends at ${READOUT_BOX_BOTTOM.toFixed(1)}`
      );
    }
  }

  // 3. No two labels on top of each other — verify-render assertion 4.
  for (let i = 0; i < boxes.length; i++) {
    for (let j = i + 1; j < boxes.length; j++) {
      if (hits(boxes[i], boxes[j])) {
        problems.push(`labels "${boxes[i].s}" and "${boxes[j].s}" collide at ${width}x${height}`);
      }
    }
  }

  // 4. Same-radius glyph spacing — verify-render assertion 8, which compares
  //    circles of equal radius and demands 2r + 4 between them. The source and
  //    the galvanometer are BOTH GLYPH_R, which is the one pair that can
  //    genuinely get close.
  const g = layout(p, width, height).glyphs;
  for (let i = 0; i < g.length; i++) {
    for (let j = i + 1; j < g.length; j++) {
      if (Math.abs(g[i].r - g[j].r) > 0.5) continue;
      const dist = Math.hypot(g[i].x - g[j].x, g[i].y - g[j].y);
      const need = 2 * g[i].r + 4;
      if (dist < need) {
        problems.push(
          `${g[i].what} and ${g[j].what} are ${dist.toFixed(1)}pt apart at ${width}x${height} — below the 2r+4 = ${need.toFixed(1)} glyph floor`
        );
      }
    }
  }

  return problems;
}
