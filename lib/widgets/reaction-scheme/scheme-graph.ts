/**
 * reaction_scheme — the graph maths behind a reaction scheme: ranking, layout,
 * formula parsing, and the READING of the scheme.
 *
 * Nothing here is a worklet, and that is a design decision rather than an
 * omission. The one animatable param (`step_progress`) moves a point along a
 * straight segment whose two endpoints are fixed by `params`; the endpoints are
 * computed here on the JS thread, and the only arithmetic left on the UI thread
 * is `x0 + (x1 - x0) * t`. Same shape as data_table_trend's band. So this file
 * imports nothing but `../chrome` (which itself imports nothing), which is what
 * lets its assertions run before any React exists.
 *
 * WHAT THE MODEL SENDS, AND WHAT THIS COMPUTES. Per CLAUDE.md §3 the model
 * never emits coordinates. It emits an EDGE LIST — species labels plus
 * from/to/reagent triples — and this module ranks it, lays it out, and reads
 * it. Rank is longest-path-from-a-source, computed one way for every shape:
 *
 *     chain     A -> B -> C            ranks 0, 1, 2
 *     fan       A -> B, C, D, E        ranks 0, 1, 1, 1, 1
 *     converge  A, B, C -> D           ranks 0, 0, 0, 1
 *
 * There is no `layout` param and no branch on shape. A widget that asked the
 * model which shape it was sending would be asking the model to draw.
 *
 * The scheme's READING — not its payload — is what `derive` returns.
 * `stepCount` is told to us; `pathSteps`, `branchCount` and the carbon/mass
 * numbers are worked out, and reference 5 below is the fixture that proves the
 * two are different quantities.
 *
 * ---------------------------------------------------------------------------
 * ATOMIC WEIGHTS ARE PINNED to the IUPAC 2021 abridged standard atomic weights
 * (the table NCERT reprints on the inside back cover of both Chemistry
 * volumes). The three that the references below actually turn on:
 *
 *     H  1.008        C  12.011        Br  79.904
 *
 * If that table is ever swapped for a different edition, reference 1 and 2
 * move in the third decimal place and the tests below are the alarm.
 * ---------------------------------------------------------------------------
 *
 * REFERENCE VALUES — computed by hand, then asserted in
 * lib/widgets/__tests__/physics.test.ts.
 *
 *   1. Molar mass of bromoethane, C2H5Br
 *        2(12.011) + 5(1.008) + 79.904
 *      = 24.022    + 5.040    + 79.904  = 108.966  -> molarMass 108.97
 *
 *   2. Wurtz reaction DOUBLES the chain — NCERT Cl.12, "Haloalkanes and
 *      Haloarenes": 2 C2H5Br + 2 Na --dry ether--> C4H10 + 2 NaBr
 *        carbonStart 2, carbonEnd 4, carbonDelta +2
 *        molarMassEnd = 4(12.011) + 10(1.008) = 48.044 + 10.080 = 58.124
 *                     -> 58.12
 *
 *   3. Decarboxylation REMOVES one — NCERT Cl.11, "Hydrocarbons":
 *      CH3COONa + NaOH/CaO --heat--> CH4 + Na2CO3
 *        CH3COONa parses to C2H3O2Na, so carbonStart 2, carbonEnd 1,
 *        carbonDelta -1.
 *      Together with reference 2 this is the pair that proves carbonDelta is
 *      SIGNED: one scheme must give +2 and the other -1 from the same code.
 *      A magnitude would pass reference 2 alone and be silently wrong here.
 *
 *   4. The interconversion chain — NCERT Cl.11, "Hydrocarbons":
 *      C2H6 -> C2H4 -> C2H2 -> C6H6 (the last step is 3 C2H2 over a red-hot
 *      iron tube at 873 K)
 *        pathSteps 3 (three edges on the longest path)
 *        unsatEnd = DoU(C6H6) = (2C + 2 + N - H - X)/2
 *                             = (2(6) + 2 + 0 - 6 - 0)/2 = 8/2 = 4
 *      Four is right: three C=C plus one ring.
 *
 *   5. The diazonium starburst — NCERT Cl.12, "Amines": benzenediazonium
 *      chloride goes to five different products in one step each.
 *        C6H5N2Cl -> C6H5Cl | C6H5Br | C6H5CN | C6H5OH | C6H6
 *        stepCount 5, pathSteps 1, branchCount 5
 *      This is the fixture that proves pathSteps is not stepCount. A widget
 *      that reported "5 steps deep" for a one-step starburst would be reading
 *      the payload back rather than reading the scheme.
 *
 * DoU is generalised so a salt still reads correctly: X counts halogens AND
 * the alkali metals, both being monovalent substituents. Sodium acetate,
 * C2H3O2Na, then gives (4 + 2 - 3 - 1)/2 = 1 — the one C=O — instead of the
 * meaningless 1.5 a halogen-only X returns.
 *
 * UNPARSEABLE LABELS RETURN 0, they do not reject. A node may legitimately be
 * a name ("benzene", "Grignard") rather than a formula; the scheme is still a
 * correct scheme, it just has no mass to report. Rejecting there would make
 * the arithmetic, rather than the chemistry, decide what a lesson may draw.
 */
import { ARROW_LEN, CHAR_W, LABEL_SIZE, PAD_EDGE, PAD_SIDE, READOUT_BAND, textWidth } from '../chrome';

export type StepKind = 'plain' | 'major' | 'minor';

export interface ReactionSchemeParams {
  /** Node labels. Order is the model's; rank decides where they go. */
  species: readonly string[];
  /** Edge list. The three step_* arrays plus step_kind are index-aligned. */
  step_from: readonly number[];
  step_to: readonly number[];
  step_reagent: readonly string[];
  step_kind: readonly StepKind[];
  /** Which step is emphasised. -1 = none. NOT animatable — see index.tsx. */
  highlight_step: number;
  /** How far along the highlighted arrow the tracer has travelled. ANIMATABLE. */
  step_progress: number;
  caption: string;
}

export interface SchemeDerived {
  stepCount: number;
  pathSteps: number;
  branchCount: number;
  carbonStart: number;
  carbonEnd: number;
  carbonDelta: number;
  unsatEnd: number;
  molarMassEnd: number;
  [key: string]: number;
}

/* ------------------------------------------------------------------- caps */

export const MAX_SPECIES = 8;
export const MAX_SPECIES_CHARS = 10;
export const MAX_STEPS = 8;
export const MAX_REAGENT_CHARS = 12;
export const MAX_CAPTION_CHARS = 40;

/** The board validate() measures against. Not the biggest one — the smallest
 *  real one. A floor derived at 900x430 is not a floor
 *  (docs/small-screen-rendering-rules.md). */
export const REF_W = 343;
export const REF_H = 236;

/** 6pt of plate either side of a species label => chipW(L) = 6.96L + 12. */
export const CHIP_PAD_X = 6;
/** 21pt of visible shaft plus the ARROW_LEN=7 head. */
export const GAP_MIN = 21 + ARROW_LEN;
/**
 * Clear space demanded between a reagent label and the species label either
 * side of it. Measured against the species TEXT box, not the chip plate,
 * because that is what verify-render's assertion 4 compares — which is why
 * CHIP_PAD_X comes back off in `gapNeeds` below.
 */
export const REAGENT_CLEAR = 6;

/** verify-render's own text-box model, reused so the widget lays out to
 *  exactly what the checker measures. */
export const LABEL_BOX_H = LABEL_SIZE * 1.15;      // 13.8
export const LABEL_HALF_H = LABEL_BOX_H / 2;       // 6.9
/** Baseline offset that puts the CENTRE of that box on a given y. */
export const BASELINE_DY = LABEL_SIZE * 0.245;     // 2.94
/** A row must clear each bracketing rule by 4pt, measured on the box above. */
export const ROW_INSET = LABEL_HALF_H + 4;         // 10.9

/**
 * MAX_ROWS = 5, and the binding case is a FAN, not a row.
 *
 * Fanning from one node to k rows puts every edge midpoint at
 * (y_centre + y_i)/2, which HALVES the vertical spacing of the reagent labels
 * to rowPitch/2. Two 13.8pt label boxes need 13.8 + 4 = 17.8pt of pitch.
 *
 * At REF_H = 236:  band = 236 - PAD_EDGE(10) - READOUT_BAND(28.4) = 197.6
 *                  inner = 197.6 - 2(10.9) = 175.8
 *   rows 5 -> rowPitch 175.8/4 = 43.95, fan spacing 21.98 >= 17.8   OK
 *   rows 6 -> rowPitch 175.8/5 = 35.16, fan spacing 17.58 <  17.8   FAILS
 *
 * Capped in the schema, never thinned in the render — where density carries
 * meaning, cap the parameter (docs/small-screen-rendering-rules.md).
 */
export const MAX_ROWS = 5;
/** Two label boxes clear each other at this pitch and no less. */
export const MIN_LABEL_PITCH = LABEL_BOX_H + 4;    // 17.8

/** chipW(L) = 6.96L + 12. The 6.96 is LABEL_SIZE * CHAR_W, the same glyph
 *  model verify-render uses; the 12 is the plate's own padding. */
export function chipW(len: number): number {
  return LABEL_SIZE * CHAR_W * len + 2 * CHIP_PAD_X;
}

/** Width a rank's column must have to hold its widest label. */
export function columnWidth(labels: readonly string[]): number {
  let longest = 0;
  for (const s of labels) longest = Math.max(longest, s.length);
  return chipW(longest);
}

export function usableWidth(width: number): number {
  return width - 2 * PAD_SIDE;
}

/* --------------------------------------------------------- formula parsing */

/**
 * IUPAC 2021 abridged standard atomic weights. Deliberately not exhaustive —
 * this is the set a JEE/NEET reaction scheme actually names. An element
 * missing from here makes the whole label unparseable, which returns 0 rather
 * than a wrong mass.
 */
export const ATOMIC_MASS: Readonly<Record<string, number>> = {
  H: 1.008, He: 4.003, Li: 6.94, Be: 9.012, B: 10.81, C: 12.011, N: 14.007,
  O: 15.999, F: 18.998, Ne: 20.180, Na: 22.990, Mg: 24.305, Al: 26.982,
  Si: 28.085, P: 30.974, S: 32.06, Cl: 35.45, Ar: 39.95, K: 39.098,
  Ca: 40.078, Ti: 47.867, V: 50.942, Cr: 51.996, Mn: 54.938, Fe: 55.845,
  Co: 58.933, Ni: 58.693, Cu: 63.546, Zn: 65.38, As: 74.922, Se: 78.971,
  Br: 79.904, Kr: 83.798, Rb: 85.468, Sr: 87.62, Ag: 107.868, Cd: 112.414,
  Sn: 118.710, Sb: 121.760, I: 126.904, Xe: 131.293, Cs: 132.905,
  Ba: 137.327, Pt: 195.084, Au: 196.967, Hg: 200.592, Pb: 207.2,
  Bi: 208.980, U: 238.029,
};

/** Monovalent substituents for the DoU formula — halogens, and the alkali
 *  metals a salt carries. See the header note on sodium acetate. */
const MONOVALENT = ['F', 'Cl', 'Br', 'I', 'Li', 'Na', 'K', 'Rb', 'Cs'];

const isUpper = (c: string) => c >= 'A' && c <= 'Z';
const isLower = (c: string) => c >= 'a' && c <= 'z';
const isDigit = (c: string) => c >= '0' && c <= '9';

/**
 * Element counts for a condensed or parenthesised formula, or null if the
 * label is not a formula at all.
 *
 *   CH3CH2OH   -> { C: 2, H: 6, O: 1 }
 *   (CH3)2CHOH -> { C: 3, H: 8, O: 1 }
 *   CH3COONa   -> { C: 2, H: 3, O: 2, Na: 1 }
 *   benzene    -> null      (a name, not a formula — worth 0, not an error)
 *
 * A trailing charge is stripped so carbocations and carbanions still parse:
 * "CH3+" is CH3. Anything else unrecognised aborts the whole parse rather
 * than being skipped — a parser that ignores what it does not understand
 * returns a confident wrong number, which is worse than returning nothing.
 */
export function parseFormula(raw: string): Record<string, number> | null {
  const s = raw.trim().replace(/[+-]+$/, '');
  if (!s) return null;

  const stack: Record<string, number>[] = [{}];
  let i = 0;

  while (i < s.length) {
    const c = s.charAt(i);

    if (c === '(' || c === '[') {
      stack.push({});
      i += 1;
      continue;
    }

    if (c === ')' || c === ']') {
      if (stack.length < 2) return null;
      const group = stack.pop() as Record<string, number>;
      i += 1;
      let n = 0;
      let digits = 0;
      while (i < s.length && isDigit(s.charAt(i))) {
        n = n * 10 + Number(s.charAt(i));
        i += 1;
        digits += 1;
      }
      const mult = digits === 0 ? 1 : n;
      const cur = stack[stack.length - 1];
      for (const k of Object.keys(group)) cur[k] = (cur[k] ?? 0) + group[k] * mult;
      continue;
    }

    if (!isUpper(c)) return null;

    let sym = c;
    if (i + 1 < s.length && isLower(s.charAt(i + 1))) {
      const two = c + s.charAt(i + 1);
      // Two-letter wins when it is a real element; otherwise the single
      // letter must be one, or the label is not a formula ("PhOH").
      if (ATOMIC_MASS[two] !== undefined) sym = two;
      else return null;
    }
    if (ATOMIC_MASS[sym] === undefined) return null;
    i += sym.length;

    let n = 0;
    let digits = 0;
    while (i < s.length && isDigit(s.charAt(i))) {
      n = n * 10 + Number(s.charAt(i));
      i += 1;
      digits += 1;
    }
    const cur = stack[stack.length - 1];
    cur[sym] = (cur[sym] ?? 0) + (digits === 0 ? 1 : n);
  }

  if (stack.length !== 1) return null;             // unclosed bracket
  const out = stack[0];
  return Object.keys(out).length > 0 ? out : null;
}

const round2 = (v: number) => Math.round(v * 100) / 100;

export function molarMass(label: string): number {
  const f = parseFormula(label);
  if (!f) return 0;
  let m = 0;
  for (const k of Object.keys(f)) m += (ATOMIC_MASS[k] as number) * f[k];
  return round2(m);
}

export function carbonCount(label: string): number {
  const f = parseFormula(label);
  return f ? (f.C ?? 0) : 0;
}

/** Degree of unsaturation, (2C + 2 + N - H - X)/2, clamped at 0. */
export function degreeOfUnsaturation(label: string): number {
  const f = parseFormula(label);
  if (!f) return 0;
  const c = f.C ?? 0;
  if (c === 0) return 0;
  const n = (f.N ?? 0) + (f.P ?? 0);
  const h = f.H ?? 0;
  let x = 0;
  for (const e of MONOVALENT) x += f[e] ?? 0;
  const d = (2 * c + 2 + n - h - x) / 2;
  return d > 0 ? round2(d) : 0;
}

/* --------------------------------------------------------------- the graph */

/**
 * Rank of every node by longest path from a source, or null if the edge list
 * contains a cycle.
 *
 * ONE code path for chain, fan and converge. Kahn's algorithm in ascending
 * index order gives a deterministic topological sequence; relaxing
 * rank[to] = max(rank[to], rank[from] + 1) along it is the longest path,
 * because a node is only relaxed after every predecessor is final.
 */
export function schemeRanks(
  n: number,
  from: readonly number[],
  to: readonly number[]
): number[] | null {
  const deg = new Array<number>(n).fill(0);
  for (let e = 0; e < to.length; e++) deg[to[e]] += 1;

  const queue: number[] = [];
  for (let v = 0; v < n; v++) if (deg[v] === 0) queue.push(v);

  const order: number[] = [];
  while (queue.length > 0) {
    queue.sort((a, b) => a - b);
    const v = queue.shift() as number;
    order.push(v);
    for (let e = 0; e < from.length; e++) {
      if (from[e] !== v) continue;
      deg[to[e]] -= 1;
      if (deg[to[e]] === 0) queue.push(to[e]);
    }
  }
  if (order.length !== n) return null;             // a cycle

  const rank = new Array<number>(n).fill(0);
  for (const v of order) {
    for (let e = 0; e < from.length; e++) {
      if (from[e] !== v) continue;
      rank[to[e]] = Math.max(rank[to[e]], rank[v] + 1);
    }
  }
  return rank;
}

/**
 * The longest path through the scheme, as a node sequence. Ties are broken by
 * the LOWEST start index, then the lowest end index — so the answer is a
 * property of the payload and not of iteration order.
 */
export function longestPath(
  n: number,
  from: readonly number[],
  to: readonly number[]
): number[] {
  if (n === 0) return [];
  const rank = schemeRanks(n, from, to);
  if (!rank) return [0];

  const order = rank.map((_, i) => i).sort((a, b) => rank[a] - rank[b] || a - b);
  const len = new Array<number>(n).fill(0);
  const start = rank.map((_, i) => i);
  const prev = new Array<number>(n).fill(-1);

  for (const u of order) {
    for (let e = 0; e < from.length; e++) {
      if (from[e] !== u) continue;
      const v = to[e];
      const cand = len[u] + 1;
      if (cand > len[v] || (cand === len[v] && start[u] < start[v])) {
        len[v] = cand;
        start[v] = start[u];
        prev[v] = u;
      }
    }
  }

  let best = 0;
  for (let v = 1; v < n; v++) {
    if (len[v] > len[best]) best = v;
    else if (len[v] === len[best] && start[v] < start[best]) best = v;
  }

  const path: number[] = [];
  for (let v: number = best; v >= 0; v = prev[v]) path.push(v);
  return path.reverse();
}

export function outDegrees(n: number, from: readonly number[]): number[] {
  const out = new Array<number>(n).fill(0);
  for (const v of from) out[v] += 1;
  return out;
}

export function derive(p: ReactionSchemeParams): SchemeDerived {
  const n = p.species.length;
  const path = longestPath(n, p.step_from, p.step_to);
  const startLabel = p.species[path[0] ?? 0] ?? '';
  const endLabel = p.species[path[path.length - 1] ?? 0] ?? '';
  const outs = outDegrees(n, p.step_from);

  const carbonStart = carbonCount(startLabel);
  const carbonEnd = carbonCount(endLabel);

  return {
    stepCount: p.step_from.length,
    pathSteps: Math.max(0, path.length - 1),
    branchCount: outs.length > 0 ? Math.max(...outs) : 0,
    carbonStart,
    carbonEnd,
    carbonDelta: carbonEnd - carbonStart,
    unsatEnd: degreeOfUnsaturation(endLabel),
    molarMassEnd: molarMass(endLabel),
  };
}

/* ------------------------------------------------------------------ layout */

export interface LayoutNode {
  i: number;
  label: string;
  rank: number;
  slot: number;
  /** Chip centre, in device points. */
  cx: number;
  cy: number;
  /** The chip plate, sized to this label rather than to its column. */
  plateX: number;
  plateW: number;
}

export interface LayoutEdge {
  step: number;
  from: number;
  to: number;
  reagent: string;
  kind: StepKind;
  /** Shaft start — the source column's right edge. */
  x0: number;
  y0: number;
  /** Where the shaft stops, one ARROW_LEN short of the tip. */
  x1: number;
  y1: number;
  /** Arrowhead tip — the target column's left edge. */
  tipX: number;
  tipY: number;
  /** dirArrowHead is CENTRED, so the head is drawn here, not at the tip. */
  headCX: number;
  headCY: number;
  angle: number;
  midX: number;
  midY: number;
}

export interface SchemeLayout {
  ranks: number;
  rows: number;
  rowPitch: number;
  bandTop: number;
  bandBottom: number;
  colX: number[];
  colW: number[];
  gap: number[];
  nodes: LayoutNode[];
  edges: LayoutEdge[];
}

/**
 * How wide each arrow gap must be, in device points.
 *
 * A reagent label rides on the middle of its shaft, so the gap has to hold it.
 * The label is middle-anchored in the gap and the species labels either side
 * already sit CHIP_PAD_X in from their column edges, so what the gap must
 * actually cover is
 *
 *     reagentWidth + 2*REAGENT_CLEAR - 2*CHIP_PAD_X   =   reagentWidth
 *
 * with the constants above, floored at GAP_MIN so a bare arrow is still an
 * arrow. THIS TERM IS THE CORRECTION TO THE FLAT GAP_MIN BUDGET. A flat
 * GAP_MIN admits, for instance, 4 ranks of 5-char species with a 12-char
 * reagent: 43.9pt gaps holding an 83.5pt label, which overhangs 19.9pt into
 * a column whose species text starts 6pt in — a hard label collision in the
 * commonest shape there is, a chain, where every label shares one y.
 */
export function gapNeeds(p: ReactionSchemeParams, rank: readonly number[], ranks: number): number[] {
  const need = new Array<number>(Math.max(0, ranks - 1)).fill(GAP_MIN);
  for (let e = 0; e < p.step_from.length; e++) {
    const a = rank[p.step_from[e]];
    const b = rank[p.step_to[e]];
    const w =
      textWidth(p.step_reagent[e] ?? '', LABEL_SIZE) + 2 * REAGENT_CLEAR - 2 * CHIP_PAD_X;
    for (let g = Math.min(a, b); g < Math.max(a, b); g++) {
      if (g >= 0 && g < need.length) need[g] = Math.max(need[g], w);
    }
  }
  return need;
}

/**
 * The whole geometry, from params and the MEASURED box only. No hardcoded
 * canvas, no scaling of a design-time drawing (the frame rule).
 */
export function layout(p: ReactionSchemeParams, width: number, height: number): SchemeLayout {
  const n = p.species.length;
  const rank = schemeRanks(n, p.step_from, p.step_to) ?? new Array<number>(n).fill(0);
  const ranks = n === 0 ? 0 : Math.max(...rank) + 1;

  const members: number[][] = [];
  for (let k = 0; k < ranks; k++) members.push([]);
  for (let v = 0; v < n; v++) members[rank[v]].push(v);

  const rows = members.reduce((m, list) => Math.max(m, list.length), 1);
  const colW = members.map((list) => columnWidth(list.map((v) => p.species[v])));
  const need = gapNeeds(p, rank, ranks);

  // Leftover width goes into the gaps, which lengthens the arrows — the one
  // part of a reaction scheme that WANTS the room, since the reagent rides on
  // the shaft. Never below GAP_MIN; validate() has already refused a payload
  // whose columns and gaps do not fit.
  const totalFixed = colW.reduce((a, b) => a + b, 0) + need.reduce((a, b) => a + b, 0);
  const extra = need.length > 0 ? Math.max(0, usableWidth(width) - totalFixed) / need.length : 0;
  const gap = need.map((g) => g + extra);

  const colX: number[] = [];
  let x = PAD_SIDE;
  for (let k = 0; k < ranks; k++) {
    colX.push(x);
    x += colW[k] + (gap[k] ?? 0);
  }

  const bandTop = READOUT_BAND;
  const bandBottom = height - PAD_EDGE;
  const innerTop = bandTop + ROW_INSET;
  const innerBottom = bandBottom - ROW_INSET;
  /**
   * THE NaN TRAP. `(innerBottom - innerTop) / (rows - 1)` is Infinity when
   * rows === 1 — which is the single-chain case, i.e. the most common payload
   * this widget will ever get. Special-cased here, once, rather than guarded
   * at every call site.
   */
  const rowPitch = rows > 1 ? (innerBottom - innerTop) / (rows - 1) : 0;
  const bandMid = (bandTop + bandBottom) / 2;
  const yOf = (slot: number) => (rows > 1 ? innerTop + slot * rowPitch : bandMid);

  const nodes: LayoutNode[] = [];
  const byIndex = new Array<LayoutNode | undefined>(n);
  for (let k = 0; k < ranks; k++) {
    const list = members[k];
    // Ranks with fewer nodes than the tallest are CENTRED on the row grid, so
    // a fan's source sits opposite the middle of its products.
    const offset = (rows - list.length) / 2;
    for (let j = 0; j < list.length; j++) {
      const v = list[j];
      const label = p.species[v];
      const slot = j + offset;
      const w = chipW(label.length);
      const cx = colX[k] + colW[k] / 2;
      const node: LayoutNode = {
        i: v, label, rank: k, slot, cx, cy: yOf(slot),
        plateX: cx - w / 2, plateW: w,
      };
      nodes.push(node);
      byIndex[v] = node;
    }
  }

  const edges: LayoutEdge[] = [];
  for (let e = 0; e < p.step_from.length; e++) {
    const a = byIndex[p.step_from[e]];
    const b = byIndex[p.step_to[e]];
    if (!a || !b) continue;
    const x0 = colX[a.rank] + colW[a.rank];
    const y0 = a.cy;
    const tipX = colX[b.rank];
    const tipY = b.cy;
    const angle = Math.atan2(tipY - y0, tipX - x0);
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    edges.push({
      step: e,
      from: p.step_from[e],
      to: p.step_to[e],
      reagent: p.step_reagent[e] ?? '',
      kind: p.step_kind[e] ?? 'plain',
      x0, y0,
      x1: tipX - ARROW_LEN * cos,
      y1: tipY - ARROW_LEN * sin,
      tipX, tipY,
      headCX: tipX - 0.5 * ARROW_LEN * cos,
      headCY: tipY - 0.5 * ARROW_LEN * sin,
      angle,
      midX: (x0 + tipX) / 2,
      midY: (y0 + tipY) / 2,
    });
  }

  return { ranks, rows, rowPitch, bandTop, bandBottom, colX, colW, gap, nodes, edges };
}

/* ---------------------------------------------------------- the fit checks */

export interface TextBox {
  x0: number;
  x1: number;
  y0: number;
  y1: number;
  s: string;
}

/**
 * Every label box this widget will emit inside the scheme band, in exactly
 * the model scripts/verify-render.mjs measures with (width = len * size *
 * 0.58, top = y - 0.82 * size, height = 1.15 * size).
 *
 * The readout line is deliberately NOT included: it is baselined at
 * READOUT_BAND - 7, so its box runs [9.92, 26.02] and every box below runs
 * from bandTop + ROW_INSET - LABEL_HALF_H = 32.4 downwards. The two cannot
 * meet, and computing the readout string here would mean duplicating the
 * component's formatting in the validator.
 */
export function labelBoxes(p: ReactionSchemeParams, width: number, height: number): TextBox[] {
  const l = layout(p, width, height);
  const boxes: TextBox[] = [];
  const push = (cx: number, cy: number, s: string) => {
    if (!s) return;
    const w = textWidth(s, LABEL_SIZE);
    boxes.push({ x0: cx - w / 2, x1: cx + w / 2, y0: cy - LABEL_HALF_H, y1: cy + LABEL_HALF_H, s });
  };
  for (const node of l.nodes) push(node.cx, node.cy, node.label);
  for (const edge of l.edges) push(edge.midX, edge.midY, edge.reagent);
  return boxes;
}

const overlaps = (a: TextBox, b: TextBox) =>
  a.x0 < b.x1 && b.x0 < a.x1 && a.y0 < b.y1 && b.y0 < a.y1;

/**
 * Every reason this payload cannot be drawn legibly at `width` x `height`.
 * Empty means it renders.
 *
 * THE SCHEMA'S LEGAL RANGE MUST BE A SUBSET OF WHAT RENDERS CORRECTLY
 * (CLAUDE.md §3), so validate() runs this at REF_W x REF_H and refuses
 * anything it reports. The first three checks are arithmetic and produce a
 * message a payload author can act on; the fourth is the geometric backstop,
 * which catches the combinations the arithmetic does not name — two edges
 * whose midpoints coincide, most of all.
 */
export function fitProblems(p: ReactionSchemeParams, width = REF_W, height = REF_H): string[] {
  const problems: string[] = [];
  const n = p.species.length;

  const rank = schemeRanks(n, p.step_from, p.step_to);
  if (!rank) {
    return ['step_from/step_to form a cycle — a reaction scheme must be acyclic'];
  }
  const ranks = n === 0 ? 0 : Math.max(...rank) + 1;

  // 1. No edge may skip a rank. A skipping arrow is drawn straight through
  //    the column it bypasses, landing its reagent label on top of a species
  //    chip. Adding the intermediate species, or splitting the scheme, is the
  //    fix — routing a bypass would be a second code path for one shape.
  for (let e = 0; e < p.step_from.length; e++) {
    const span = rank[p.step_to[e]] - rank[p.step_from[e]];
    if (span !== 1) {
      problems.push(
        `step ${e} (${p.species[p.step_from[e]]} -> ${p.species[p.step_to[e]]}) spans ${span} ranks; every step must join adjacent ranks`
      );
    }
  }

  // 2. The row cap. Derived at REF_H from a FAN, not a row — see MAX_ROWS.
  const counts = new Array<number>(Math.max(1, ranks)).fill(0);
  for (let v = 0; v < n; v++) counts[rank[v]] += 1;
  const rows = Math.max(...counts, 1);
  if (rows > MAX_ROWS) {
    problems.push(
      `${rows} species share one stage; at most ${MAX_ROWS} fit at ${width}x${height} (a fan halves the reagent-label pitch to rowPitch/2)`
    );
  }

  // 3. The budget rule.
  //      sum(chipW(longest label in rank)) + sum(gapNeed) <= usableWidth
  //    gapNeed carries the reagent term (see gapNeeds) rather than being a
  //    flat GAP_MIN: the reagent rides in the gap, so a gap that cannot hold
  //    its label puts that label on top of a species chip.
  const members: string[][] = [];
  for (let k = 0; k < ranks; k++) members.push([]);
  for (let v = 0; v < n; v++) members[rank[v]].push(p.species[v]);
  const cols = members.map(columnWidth).reduce((a, b) => a + b, 0);
  const gaps = gapNeeds(p, rank, ranks).reduce((a, b) => a + b, 0);
  const budget = usableWidth(width);
  if (cols + gaps > budget) {
    problems.push(
      `the scheme needs ${(cols + gaps).toFixed(1)}pt of width (${cols.toFixed(1)} of species chips + ${gaps.toFixed(1)} of arrow gaps) but only ${budget}pt is usable at ${width}pt — shorten the labels or split the scheme`
    );
  }

  if (problems.length > 0) return problems;

  // 4. The geometric backstop.
  const boxes = labelBoxes(p, width, height);
  for (let i = 0; i < boxes.length; i++) {
    for (let j = i + 1; j < boxes.length; j++) {
      if (overlaps(boxes[i], boxes[j])) {
        problems.push(`labels "${boxes[i].s}" and "${boxes[j].s}" collide at ${width}x${height}`);
      }
    }
  }
  return problems;
}
