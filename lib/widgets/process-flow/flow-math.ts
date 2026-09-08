/**
 * process_flow — the STRUCTURE of a pathway: how many steps it has, whether it
 * closes back on itself, and where it branches.
 *
 * WHY ONE WIDGET WITH A `layout` PARAM AND NOT TWO. `ring` and `chain` look
 * like two diagrams and are one. NCERT Cl.11 Ch.13 teaches cyclic and
 * non-cyclic photophosphorylation by CONTRASTING them, and the contrast is the
 * teaching point: the same electron path, once returning to its source and once
 * not. A chain that closes (`layout: 'chain'`, `closes: true`) draws the linear
 * run AND the return edge on ONE board. Two widgets cannot render one board.
 *
 * Nothing here is a worklet. The one animatable param (`active_node`) moves a
 * single highlight Rect, and the trig it needs is small enough to live in the
 * component's own worklet rather than being imported into it — so this file is
 * plain TypeScript over `chrome.ts` (which has no imports of its own), which is
 * what lets its assertions run before any React exists.
 *
 * WHAT THIS WIDGET ACTUALLY COMPUTES. The node LABELS are payload, so asserting
 * "step 3 is isocitrate" would test the payload, not the widget. The widget's
 * own output is the READING of the topology: how many directed steps the
 * pathway has, whether the last one returns to the first, and whether any node
 * has out-degree greater than one. Those three are what a caption says and what
 * a student is asked in an exam.
 *
 * Reference structures (NCERT, independently recounted before this was written):
 *
 *   Citric acid (Krebs) cycle — Cl.11 Bio Ch.14 "Respiration in Plants"
 *     8 intermediates: citrate, isocitrate, a-ketoglutarate, succinyl-CoA,
 *     succinate, fumarate, malate, oxaloacetate -> back to citrate.
 *       layout ring, nodeCount 8, stepCount 8, closes 1, branchAt -1,
 *       outDegreeMax 1
 *
 *   Glycolysis (EMP pathway) — same chapter, "a series of ten reactions"
 *     glucose ... pyruvate, and it does NOT return to glucose.
 *       layout chain, nodeCount 10, stepCount 9, closes 0, outDegreeMax 1
 *     ^ THE OPPOSITE FIXTURE. `closes` must be capable of answering 0, or a
 *       "does it close" detector that always says yes is not a detector
 *       (docs/small-screen-rendering-rules.md, "every assertion needs a
 *       fixture that fails it"). Krebs and glycolysis are the same shape of
 *       payload and must give opposite answers.
 *
 *   Calvin cycle — Cl.11 Bio Ch.13 "Photosynthesis in Higher Plants"
 *     three stages: carboxylation, reduction, regeneration -> carboxylation.
 *       layout ring, nodeCount 3, stepCount 3, closes 1
 *
 *   Cyclic photophosphorylation — Cl.11 Bio Ch.13
 *     PS I -> ferredoxin -> cyt b6f -> plastocyanin -> PS I. Only PS I is
 *     involved and the electron comes back, so the chain closes.
 *       layout chain, nodeCount 4, stepCount 4, closes 1
 *
 *   Non-cyclic photophosphorylation — Cl.11 Bio Ch.13, the same board
 *     PS II -> PQ -> cyt b6f -> PC -> PS I -> Fd -> NADP+ : the electron ends
 *     on NADPH and never returns to PS II.
 *       layout chain, nodeCount 7, stepCount 6, closes 0
 *
 *   Fate of pyruvate — Cl.11 Bio Ch.14
 *     glucose -> pyruvate -> acetyl-CoA, with pyruvate ALSO going to lactate /
 *     ethanol. Pyruvate is the branch point.
 *       branchAt 1, outDegreeMax 2      <- a branch point has out-degree > 1
 *
 * ---------------------------------------------------------------------------
 * THE CAPS, and the arithmetic they come from.
 *
 * Every number below is measured at the SMALLEST board this app checks
 * (343x236, docs/small-screen-rendering-rules.md's `spec-small`), because a
 * floor derived at 900x430 is not a floor. They are enforced in `validate()`,
 * never by thinning the render: where the count of things carries meaning, cap
 * the parameter.
 *
 * At LABEL_SIZE 12 and verify-render's own 0.58 char-width model:
 *     one character   = 12 * 0.58        =  6.96 pt
 *     one text line   = 12 * 1.15        = 13.80 pt   (verify-render's box)
 *     one node box    = bandFor(12, 0)   = 19.20 pt   (NODE_H, >= 13.80)
 *
 * RING. Vertical budget at 343x236 is 236 - READOUT_BAND(28.4) - PAD_EDGE(10)
 * = 197.6, so ry = (197.6 - 19.2) / 2 = 89.2. Nodes are laid POINTY-TOP (node
 * 0 at -90 degrees, then clockwise) and ORIENTATION IS NOT COSMETIC: a
 * flat-top hexagon puts its 60 and 120 degree nodes 1.000*rx apart against a
 * box that can be 137pt wide, which is a hard label-collision error. Pointy-top
 * puts the tightest same-y pair at 1.732*rx for n = 3 and 6, 1.414*rx for n = 8.
 *
 * The ring is an ELLIPSE, not a circle, because the board is landscape and the
 * odd node counts need the extra width: rx = min((W - 24 - nodeW)/2,
 * 1.9*ry). The 1.9 ceiling keeps it a recognisable ring rather than a slot.
 *
 * MAX_NODES_RING = 8, and the ninth node is where the ring stops being worth
 * drawing rather than where it stops fitting. Past n = 8 a NEW kind of pair
 * appears: nodes whose y differ by less than one text line without being
 * mirror images at all. At n = 12 the 60 and 90 degree nodes sit
 * (1 - sin 60) * ry = 0.134 * 89.2 = 12.0pt apart in y, INSIDE the 13.8pt
 * text-line height, so nothing but horizontal separation keeps their labels
 * apart — and that separation is only 0.5*rx. Running the same scan past the
 * cap shows what that costs:
 *
 *     n:      9    10   11   12
 *     chars:  9     8    7    6
 *
 * Six characters cannot name a metabolic intermediate, so a 12-node ring is
 * not a ring we can render legibly even though the boxes technically clear.
 * It is capped at 8, where the budget is still 16.
 *
 * MAX_LABEL = 18 is the declared ceiling. The EFFECTIVE cap is per-n, because
 * the tightest same-y separation is a function of n, and the schema's legal
 * range must be a subset of what renders correctly — so `maxRingLabelChars`
 * scans down from 18 to the largest length whose boxes clear each other by
 * NODE_GAP at 343x236. The table it produces:
 *
 *     n:      3    4    5    6    7    8
 *     chars: 18   18   14   18   11   16
 *
 *   worked, n = 8: same-y pairs are (-45,-135) and (45,135), separated by
 *   1.4142*rx. At L=18 nodeW=137.3 so rx=(319-137.3)/2=90.9 and the pair is
 *   128.5pt apart against a 141.3pt requirement — FAILS. At L=16 nodeW=123.4,
 *   rx=97.8, separation 138.3 against 127.4 — passes. Hence 16, not 18.
 *
 *   worked, n = 7: the tightest pair is (64.29, 115.71) at 0.8678*rx. At L=11
 *   nodeW=88.6, rx=115.2, separation 100.0 against 92.6 — passes; L=12 gives
 *   97.0 against 99.5 and fails. Hence 11.
 *
 * CHAIN. Serpentine (boustrophedon) rows, never a single column: a vertical
 * chain of bare text has about 2pt of ink over 391.6pt of height at 900x430 =
 * 0.2% coverage, a hard error on verify-render's assertion 2. `chainGrid`
 * therefore forces rows >= 2 AND cols >= 2. Column pitch is nodeW + 16 at
 * minimum; row pitch is availH/rows and is never below NODE_H + 12.
 *
 * MAX_NODES_CHAIN = 10 (glycolysis is exactly ten). The chain label cap is
 * a single number rather than a table, because the binding case is the same
 * one every time — two columns must fit in the narrowest grid, which is the
 * closing chain's (it gives up RETURN_LANE = 16pt to the return edge's lane):
 *     (343 - 24 - 16)/2 = 151.5 available per column
 *     nodeW + 16 <= 151.5  ->  L <= (135.5 - 12)/6.96 = 17.7  ->  17
 *
 * Node boxes are `Rect`. That is not decoration: verify-render's boundsOf
 * understands Path/Circle/Line/Rect and NOTHING ELSE, so TEXT CONTRIBUTES
 * NOTHING to ink coverage and a pathway drawn as bare labels is a degenerate
 * payload however well it reads. Connectors are `Path`, and every path this
 * widget emits is M/L only — NEVER an `A` arc command, because pathBounds
 * pairs the numbers in `d` positionally and would read an arc's `rx ry rot
 * laf sf` as coordinates and report bounds that do not exist.
 */

import { CHAR_W, LABEL_SIZE, PAD_EDGE, PAD_SIDE, READOUT_BAND, bandFor } from '../chrome';

export type FlowLayout = 'ring' | 'chain';

export interface ProcessFlowParams {
  layout: FlowLayout;
  /** One label per step. Order IS the pathway. */
  nodes: readonly string[];
  /** Does the last step return to the first? Forced true for `ring`. */
  closes: boolean;
  /** Node a side-branch leaves from. -1 = none. */
  branch_at: number;
  /** Highlighted step. -1 = none. ANIMATABLE. */
  active_node: number;
  caption: string;
}

export interface FlowDerived {
  nodeCount: number;
  /** Directed edges along the main pathway, including the return edge. */
  stepCount: number;
  closes: number;
  branchAt: number;
  /** 2 when some node has a side-branch, else 1. A branch point is exactly
   *  a node with out-degree greater than one. */
  outDegreeMax: number;
  activeIndex: number;
  /** Structurally a Record<string, number> so `derive` can serve directly as
   *  computeDerived — one function, not two that can drift. */
  [key: string]: number;
}

/* ----------------------------------------------------------------- chrome */

/** Height of one node box. Same "container sized from the chrome it holds"
 *  rule as chrome.ts's `bandFor`, which is where this comes from. */
export const NODE_H = bandFor(LABEL_SIZE, 0);
/** Breathing room inside a node box, each side. */
export const NODE_PAD_X = 6;
/** Clearance two node boxes must keep from each other. */
export const NODE_GAP = 4;
/** Horizontal clearance between columns of a serpentine chain. */
export const COL_GAP = 16;
/** Vertical clearance a chain row must keep beyond the box itself. */
export const ROW_GAP = 12;
/** Lane the return edge of a closing chain runs in, left and below the grid. */
export const RETURN_LANE = 16;

/** Points per character, the SAME model verify-render measures text with. */
export const CHAR_PT = LABEL_SIZE * CHAR_W;

/* ------------------------------------------------------------------- caps */

/** The readout caption is CUT to this, with no ellipsis, in `validate()`.
 *  Named because the payload generator is told this number and a literal 40
 *  in one file cannot be checked against a prompt in another repo. */
export const MAX_CAPTION_CHARS = 40;

export const MIN_NODES = 3;
export const MAX_NODES_RING = 8;
export const MAX_NODES_CHAIN = 10;
/** Declared ceiling. The effective cap is `maxRingLabelChars` / `maxChainLabelChars`. */
export const MAX_LABEL = 18;
/** Keeps the ellipse a ring rather than a slot. */
export const RING_MAX_ASPECT = 1.9;

/** The board every cap above is measured at — `spec-small`, the smallest this
 *  app checks. A floor derived at 900x430 is not a floor. */
export const CAP_BOARD_W = 343;
export const CAP_BOARD_H = 236;

export function nodeWidth(labelLen: number): number {
  return labelLen * CHAR_PT + 2 * NODE_PAD_X;
}

/* ------------------------------------------------------------ ring layout */

export interface RingGeometry {
  cx: number;
  cy: number;
  rx: number;
  ry: number;
}

export function ringGeometry(width: number, height: number, maxLabelLen: number): RingGeometry {
  const availW = Math.max(1, width - 2 * PAD_SIDE);
  const availH = Math.max(1, height - READOUT_BAND - PAD_EDGE);
  const ry = Math.max(1, (availH - NODE_H) / 2);
  const rx = Math.max(1, Math.min((availW - nodeWidth(maxLabelLen)) / 2, RING_MAX_ASPECT * ry));
  return { cx: width / 2, cy: READOUT_BAND + NODE_H / 2 + ry, rx, ry };
}

/** Angle of node `i`, radians. POINTY-TOP: node 0 at the top, then clockwise.
 *  Not cosmetic — see the header. */
export function ringAngle(n: number, i: number): number {
  return (-90 + (i * 360) / Math.max(1, n)) * (Math.PI / 180);
}

export function ringNodeCentre(
  g: RingGeometry,
  n: number,
  i: number
): { x: number; y: number } {
  const t = ringAngle(n, i);
  return { x: g.cx + g.rx * Math.cos(t), y: g.cy + g.ry * Math.sin(t) };
}

/**
 * Can `n` nodes of `labelLen` characters each be laid on a ring at this board
 * without two boxes colliding?
 *
 * The y-threshold is NODE_H (19.2), not the 13.8pt text line: the Rects are
 * taller than the text they hold, so checking the text alone would admit
 * payloads whose boxes overlap even though verify-render — which cannot see a
 * Rect overlap at all — would pass them. Checking the box is stricter in the
 * direction that matters.
 */
export function ringFits(n: number, labelLen: number, width: number, height: number): boolean {
  const g = ringGeometry(width, height, labelLen);
  if (!(g.rx > 1 && g.ry > 1)) return false;
  const need = nodeWidth(labelLen) + NODE_GAP;
  for (let i = 0; i < n; i++) {
    const a = ringNodeCentre(g, n, i);
    for (let j = i + 1; j < n; j++) {
      const b = ringNodeCentre(g, n, j);
      if (Math.abs(a.y - b.y) < NODE_H && Math.abs(a.x - b.x) < need) return false;
    }
  }
  return true;
}

/**
 * Largest label length a ring of `n` nodes may carry.
 *
 * Monotone by construction — a longer label makes the box wider AND the ring
 * narrower — so scanning down from the ceiling finds the true maximum, not an
 * approximation of it.
 */
export function maxRingLabelChars(n: number): number {
  for (let L = MAX_LABEL; L >= 1; L--) {
    if (ringFits(n, L, CAP_BOARD_W, CAP_BOARD_H)) return L;
  }
  return 1;
}

/* ----------------------------------------------------------- chain layout */

export interface ChainGrid {
  rows: number;
  cols: number;
  colPitch: number;
  rowPitch: number;
  /** Left edge of the node grid — right of the return lane when one exists. */
  gridLeft: number;
  top: number;
  /** y of the horizontal run of a closing chain's return edge. */
  laneY: number;
  /** x of the vertical run of a closing chain's return edge. */
  laneX: number;
}

export function chainGrid(
  width: number,
  height: number,
  n: number,
  maxLabelLen: number,
  closes: boolean
): ChainGrid {
  const lane = closes ? RETURN_LANE : 0;
  const gridLeft = PAD_SIDE + lane;
  const gridW = Math.max(1, width - PAD_SIDE - gridLeft);
  const availH = Math.max(1, height - READOUT_BAND - PAD_EDGE - lane);
  const top = READOUT_BAND;

  const colsFit = Math.max(1, Math.floor(gridW / (nodeWidth(maxLabelLen) + COL_GAP)));
  // rows >= 2 ALWAYS. A one-row chain is 19.2pt of ink on a 430pt board, and a
  // one-COLUMN chain is worse; both are assertion-2 failures, so the layout
  // refuses to produce either rather than leaving it to the payload.
  const rows = Math.max(2, Math.ceil(n / colsFit));
  const cols = Math.max(2, Math.ceil(n / rows));

  return {
    rows,
    cols,
    colPitch: gridW / cols,
    rowPitch: availH / rows,
    gridLeft,
    top,
    laneY: top + availH + lane / 2,
    laneX: PAD_SIDE + lane / 2,
  };
}

/** Grid cell of node `i` — BOUSTROPHEDON, so consecutive nodes are always in
 *  adjacent cells. That is what lets the highlight interpolate along a
 *  straight line between them without ever crossing a third node. */
export function chainCell(g: ChainGrid, i: number): { row: number; col: number } {
  const row = Math.floor(i / g.cols);
  const pos = i % g.cols;
  return { row, col: row % 2 === 0 ? pos : g.cols - 1 - pos };
}

export function chainNodeCentre(g: ChainGrid, i: number): { x: number; y: number } {
  const { row, col } = chainCell(g, i);
  return {
    x: g.gridLeft + g.colPitch * (col + 0.5),
    y: g.top + g.rowPitch * (row + 0.5),
  };
}

/**
 * Largest label length a chain may carry — one number, not a table, because
 * the binding case never changes: two columns must fit in the narrowest grid
 * this widget can produce, which is a CLOSING chain at 343x236 (it gives up
 * RETURN_LANE to the return edge). The row-pitch floor is checked at the same
 * time at the worst node count, so a length that passes here cannot produce a
 * row too short to hold a node box.
 */
export function maxChainLabelChars(): number {
  for (let L = MAX_LABEL; L >= 1; L--) {
    const g = chainGrid(CAP_BOARD_W, CAP_BOARD_H, MAX_NODES_CHAIN, L, true);
    const wideEnough = g.colPitch >= nodeWidth(L) + COL_GAP;
    const tallEnough = g.rowPitch >= NODE_H + ROW_GAP;
    if (wideEnough && tallEnough && g.cols >= 2 && g.rows >= 2) return L;
  }
  return 1;
}

/* --------------------------------------------------------------- derived */

/** Truncates every label to what this layout can actually render. The
 *  component applies it too, so an unvalidated `params` cannot collide. */
export function capLabels(p: ProcessFlowParams): string[] {
  const cap =
    p.layout === 'ring' ? maxRingLabelChars(p.nodes.length) : maxChainLabelChars();
  return p.nodes.map((s) => s.slice(0, cap));
}

export function derive(p: ProcessFlowParams): FlowDerived {
  const n = p.nodes.length;
  // A ring is closed by definition; only a chain gets to answer 0.
  const closes = p.layout === 'ring' ? true : p.closes;
  const branchAt = p.branch_at >= 0 && p.branch_at < n ? p.branch_at : -1;
  return {
    nodeCount: n,
    stepCount: n < 2 ? 0 : p.layout === 'ring' ? n : n - 1 + (closes ? 1 : 0),
    closes: closes ? 1 : 0,
    branchAt,
    outDegreeMax: branchAt >= 0 ? 2 : 1,
    activeIndex: p.active_node >= 0 && p.active_node < n ? p.active_node : -1,
  };
}
