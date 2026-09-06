/**
 * Layout maths for the `labelled_figure` illustration tier.
 *
 * Implements docs/label-layer.md §1.3 (the letterbox arithmetic), §2.2 (two
 * columns pinned to the art, leaders back to the anchor), §2.3 (deterministic
 * vertical de-collision) and §2.4 (the schema caps, derived at 343x236) —
 * with one structural change the spec did not anticipate, recorded in
 * "WHERE THE SPEC IS WRONG" below.
 *
 * No React and no react-native import in this file, on purpose — same reason
 * `projectile-motion/physics.ts` is separate: this is the part that needs
 * reviewing as geometry, and it is the part the tests assert over directly.
 *
 * THE FRAME RULE (docs/small-screen-rendering-rules.md), applied to labels:
 * a label's POSITION is a world quantity and scales with the board; its FONT
 * SIZE is chrome and never does. Every constant below is one or the other and
 * says which.
 *
 * ---------------------------------------------------------------------------
 * WHERE THE SPEC IS WRONG: the 10-label cap is a wall, not a cap.
 *
 * docs/label-layer.md §2.4 proposes "cap: 10 per figure" and adds that "a
 * figure that genuinely needs 18 labels is two figures". Measured against the
 * real work order (48 anchored biology plates, `illustration-manifest.csv`):
 *
 *     labels per figure   min 6   median 11.5   max 28   total 595
 *     figures over 10     28 of 48  (58%)
 *
 * The spec's cap therefore rejects the majority of the corpus, and "it is two
 * figures" is not available: `must_show` binds each figure to ONE anchor
 * plate — cockroach morphology AND digestive system is one 1886 Miall & Denny
 * engraving — so splitting the figure means re-sourcing the art.
 *
 * The resolution is that the cap is per GROUP, not per figure. A figure
 * declares ordered subsets ("digestive", "nervous"), each within the cap, and
 * the board draws one at a time — selected by the existing `Cue.seq` track, so
 * the labels on screen are the ones the narration is talking about. See
 * `MAX_LABELS_PER_GROUP` and `boardCapacity` for the measured numbers this
 * rests on.
 * ---------------------------------------------------------------------------
 */
import {
  CHAR_W, CHAR_W_DEVA, LABEL_SIZE, LINE_STROKE, PAD_EDGE, READOUT_BAND,
  READOUT_SIZE, TICK_R, charWidthFor, hasDevanagari, textWidth,
} from '../chrome';

/* ------------------------------------------------------------------ types */

/**
 * The two languages a session can run in, named EXACTLY as the app names them
 * (`lib/preferences.ts`: `LanguageId = 'hinglish' | 'english'`).
 *
 * This was 'english' | 'hinglish'. Nothing in the app can produce 'hinglish' -- there is no
 * Hindi mode -- so the second-language branch was unreachable while
 * `validate()` still REFUSED every record that lacked a `hi` term. All 48
 * commissioned figures were blocked on a language the product does not have.
 *
 * WHAT 'hinglish' IS, because the name misleads: romanised Latin, not
 * Devanagari. From app/drona/persona.py:
 *
 *     "Bahut badhiya! Chalo {subtopic} shuru karte hain."
 *
 * There is no Devanagari string anywhere in either repo. The app does load
 * AnekDevanagari_500Medium and use it for the classroom caption strip
 * (components/classroom-chrome.tsx:410) -- that family renders Latin too, and
 * is chosen there for its metrics -- so a Devanagari FACE being present is not
 * evidence that Devanagari TEXT is ever shown.
 *
 * The CHAR_W_DEVA width guardrail stays live regardless. It costs nothing when
 * no Devanagari appears, and it is the one thing standing between a future
 * Devanagari term and a label off the board.
 */
export type Lang = 'english' | 'hinglish';
export type Side = 'left' | 'right';

/** Where the art comes from. A bundled asset module id, or a LOCAL file uri
 *  already written to disk by the resolver's prefetch. Never a remote URL:
 *  CLAUDE.md §3 "Never fetch at render time" — a live class renders with the
 *  radio off. */
export type FigureArtSource = number | { uri: string };

/**
 * An ordered subset of a figure's labels (see "WHERE THE SPEC IS WRONG").
 *
 * `id` is what a `Cue.patch` names; `label` is bilingual for the same reason
 * every term is — retrofitting a second language is how a layout budget gets
 * discovered after the figures are authored.
 */
export interface FigureGroup {
  id: string;
  label: { english: string; hinglish: string };
}

/** docs/label-layer.md §1.2, plus `group`. */
export interface LabelRecord {
  id: string;
  term: { english: string; hinglish: string };
  /** Normalised 0..1 against the art's INTRINSIC size (§1.3). */
  anchor: { u: number; v: number };
  /** Authored: a judgement about which way the structure faces (§1.5). */
  side: Side;
  /**
   * Which subset this label belongs to. REQUIRED, with no default and no
   * "ungrouped" fallback — §4.2's rule is that a field which can be satisfied
   * by a plausible value nobody supplied is the bug, and `group: "general"`
   * auto-filled by an ingest tool is exactly that shape. A figure with one
   * group declares one group and every label names it.
   */
  group: string;
  /** A HINT for the label's row, consumed BEFORE de-collision, never after. */
  v_hint?: number;
  /** Optional elbow, to route a leader around ink. */
  leader_via?: { u: number; v: number };
}

export interface FigureArt {
  source: FigureArtSource;
  /** Pixels, of THIS file, measured at ingest (§1.3). */
  intrinsic_w: number;
  intrinsic_h: number;
}

/** The widget's params ARE the figure record plus what is being drawn right
 *  now. The resolver's whole job is turning an `asset_slug` into this. */
export interface LabelledFigureParams {
  asset_slug: string;
  art: FigureArt;
  /** Ordered. `groups[0]` is where a reveal starts. */
  groups: readonly FigureGroup[];
  labels: readonly LabelRecord[];
  /** ONE language is drawn (§5.1); both ship in the payload. */
  lang: Lang;
  /** The group currently drawn. Patched by a cue to advance the reveal. */
  active_group: string;
}

/* -------------------------------------------------------------- constants */

/* CHROME — device points, never multiplied by a board dimension. */

/** The gate models a text box as `fontSize * 1.15` tall. ROW adds 4pt of
 *  slack on top of that: 12 * 1.15 + 4 = 17.80 (§2.3). Slack, not a floor. */
export const ROW = LABEL_SIZE * 1.15 + 4;
/** How far a leader reaches between the plate's inner edge and the art. */
export const LEADER_STUB = 8;
/** Horizontal breathing room inside a plate, each side. */
export const PLATE_PAD_X = 3;
/**
 * Plate height.
 *
 * DEVIATION from §2.1, which says `bandFor(LABEL_SIZE)`. That is
 * `12 * 1.6 + 6 = 25.2pt`, TALLER than ROW (17.8) — two plates in adjacent
 * de-collided rows would overlap by 7.4pt and hide each other. Sized from the
 * gate's own text-box model instead (`fontSize * 1.15` plus 1.5pt either
 * side), which leaves exactly 1pt of art visible between rows.
 */
export const PLATE_H = LABEL_SIZE * 1.15 + 3;
/** Where the gate puts a text box's top relative to its baseline. Mirrored
 *  here so the plate and the checker agree about what is being covered. */
export const TEXT_ASCENT = LABEL_SIZE * 0.82;

/** The dot at the anchor. A bare line-end reads as ambiguous on dense art. */
export const ANCHOR_R = TICK_R;
export const LEADER_STROKE = LINE_STROKE;

/** The group strip's baseline, when one is drawn. */
export const STRIP_BASELINE = 18;

/** WORLD — the sizes the caps below were derived at. §2.4/§2.5: "measure the
 *  new bound at the SMALLEST board". */
export const SMALLEST_BOARD = { width: 343, height: 236 } as const;

/**
 * Term length caps, derived at 343x236 (§2.4).
 *
 * Worst case is a left and a right label on the SAME row:
 *
 *     2 * (L * LABEL_SIZE * charW) + 2 * PAD_EDGE + 2 * LEADER_STUB <= W
 *
 *   Latin  13.92 * L <= 307  ->  L <= 22.05  ->  22 code units
 *   Deva   18.00 * L <= 307  ->  L <= 17.05  ->  17 code units
 *
 * The Devanagari number is shorter because `CHAR_W_DEVA` deliberately
 * OVER-estimates — see its UNMEASURED note in chrome.ts. It is a guardrail,
 * not a measurement, and this cap inherits that status.
 */
export const MAX_TERM_LATIN = maxTermChars(CHAR_W);
export const MAX_TERM_DEVA = maxTermChars(CHAR_W_DEVA);

function maxTermChars(charW: number): number {
  const budget = SMALLEST_BOARD.width - 2 * PAD_EDGE - 2 * LEADER_STUB;
  return Math.floor(budget / (2 * LABEL_SIZE * charW));
}

/** The cap that applies to a term, chosen by the script it is written in. */
export function termCapFor(text: string): number {
  return hasDevanagari(text) ? MAX_TERM_DEVA : MAX_TERM_LATIN;
}

/**
 * How many label rows one column can hold at a board height, MEASURED.
 *
 *   first baseline  top    = oy + LABEL_SIZE           (>= 12)
 *   last  baseline  bottom = oy + sH - PAD_EDGE        (<= H - 10)
 *   rows            n      : top + (n-1) * ROW <= bottom
 *   =>              n      = floor((H - PAD_EDGE - LABEL_SIZE) / ROW) + 1
 *
 * For a full-height art (`oy = 0`, `sH = H`), at the three boards this runtime
 * renders into:
 *
 *   | board   | usable band | rows/column | both columns |
 *   |---------|------------:|------------:|-------------:|
 *   | 900x430 |      408.0  |          23 |           46 |
 *   | 495x270 |      248.0  |          14 |           28 |
 *   | 343x236 |      214.0  |          13 |           26 |
 *
 * `reserveStrip` takes the top READOUT_BAND (28.4pt) for the group strip,
 * giving 22 / 13 / 11 rows per column — 44 / 26 / 22 in total.
 *
 * This is a GEOMETRIC CEILING, not a shippable number: at the ceiling every
 * plate touches its neighbour and every label has been displaced from its true
 * `v`. `MAX_LABELS_PER_GROUP` is the shippable figure.
 */
export function rowsPerColumn(H: number, reserveStrip = false): number {
  const band = H - PAD_EDGE - LABEL_SIZE - (reserveStrip ? READOUT_BAND : 0);
  return Math.max(0, Math.floor(band / ROW) + 1);
}

/** Both columns. See `rowsPerColumn` for the arithmetic and the caveat. */
export function boardCapacity(H: number, reserveStrip = false): number {
  return 2 * rowsPerColumn(H, reserveStrip);
}

/**
 * Labels drawn at once (§2.4's reasoning, rescoped to a group).
 *
 * The number is unchanged from the spec and the argument is unchanged with
 * it: at 10 (5/5) each column is 89 of 216pt — 41% occupied — so de-collision
 * rarely displaces a label more than one ROW from its true `v` and leaders
 * stay short. At 16 (8/8) occupancy is 66%, displacement is routine, and a
 * leader becomes a line that crosses the illustration. What changed is what
 * the cap applies TO: a figure may carry any number of labels, in as many
 * groups as it needs, and only one group is on the board at a time.
 *
 * The geometric ceiling at 343x236 is 26 (22 with a strip). The manifest's
 * largest figure is 28. So the spec's "cap" was not merely tight for that
 * figure — it is over the ceiling, and no arrangement of 28 simultaneous
 * labels fits the smallest board at the 11pt font floor. That is the fact
 * that makes grouping mandatory rather than preferable.
 */
export const MAX_LABELS_PER_GROUP = 10;

/** Assertion 8's floor: two circles of the same radius closer than 2r + 4 are
 *  a hard error. Anchor dots are all ANCHOR_R, so this binds on every pair
 *  DRAWN AT ONCE — i.e. within a group, not across the whole figure. */
export const MIN_ANCHOR_GAP_PT = 2 * ANCHOR_R + 4;

/* ------------------------------------------------------- the letterbox (§1.3) */

export interface FittedRect {
  /** Scale from intrinsic pixels to board points. */
  s: number;
  /** The DRAWN size of the art, which is not the board size. */
  sW: number;
  sH: number;
  /** Top-left of the drawn art within the board. */
  ox: number;
  oy: number;
}

/**
 * Letterbox the art into the board box, preserving aspect.
 *
 *   s  = min(W / intrinsic_w, H / intrinsic_h)
 *   sW = s * intrinsic_w        sH = s * intrinsic_h
 *   ox = (W - sW) / 2           oy = (H - sH) / 2
 *
 * This is the same "fit to the box, preserve aspect" job
 * `components/board-diagram.tsx` does for the SVG tier, and its arithmetic is
 * correct — but it is not reusable here. It fits a viewBox read out of a
 * markup string, returns only a width/height for a React `<SvgXml>`, and
 * never computes the OFFSET. The offset is the entire point of this function:
 * a normalised anchor must map through the FITTED rect, and without `ox`/`oy`
 * every label on a letterboxed figure lands in the wrong place.
 */
export function fitRect(W: number, H: number, iw: number, ih: number): FittedRect {
  const s = Math.min(W / iw, H / ih);
  const sW = s * iw;
  const sH = s * ih;
  return { s, sW, sH, ox: (W - sW) / 2, oy: (H - sH) / 2 };
}

/** A normalised 0..1 anchor, through the fitted rect, in board points. */
export function anchorAt(fit: FittedRect, u: number, v: number): { x: number; y: number } {
  return { x: fit.ox + u * fit.sW, y: fit.oy + v * fit.sH };
}

/* ------------------------------------------------------------- the layout */

export interface PlacedLabel {
  id: string;
  text: string;
  side: Side;
  /** The point on the art this label names. */
  anchor: { x: number; y: number };
  /** Optional elbow the leader routes through. */
  via: { x: number; y: number } | null;
  /** Text baseline. `textAnchor` is 'end' on the left column, 'start' right. */
  tx: number;
  ty: number;
  textAnchor: 'start' | 'end';
  /** The filled plate under the text. Fill only — NEVER a stroke, or
   *  assertion 7's 1.2 floor becomes a live risk for a decorative hairline. */
  plate: { x: number; y: number; w: number; h: number };
  /** Where the leader leaves the plate. */
  stub: { x: number; y: number };
}

export interface FigureLayout {
  fit: FittedRect;
  labels: PlacedLabel[];
  /** The group strip, or null for a single-group figure. */
  strip: { text: string; x: number; y: number; plate: { x: number; y: number; w: number; h: number } } | null;
}

/** The term actually drawn, for the language being rendered. */
export function termFor(label: LabelRecord, lang: Lang): string {
  return label.term[lang];
}

/** The labels of the active group, in record order. */
export function activeLabels(params: LabelledFigureParams): LabelRecord[] {
  return params.labels.filter((l) => l.group === params.active_group);
}

/**
 * Vertical de-collision, per column (§2.3).
 *
 * Deterministic by construction — no measured text, no solver. CLAUDE.md §3a:
 * nothing is created during a live session, and a layout that depends on a
 * solver is a layout that can differ between the CI tree and the device.
 *
 * DEVIATION from §2.3, stated because it changes an outcome: the spec clamps
 * the column to the ART's vertical band (`oy + LABEL_SIZE` to
 * `oy + sH - PAD_EDGE`). For a very wide art the drawn band is short — a
 * 2000x500 art at 343x236 is only 85.75pt tall — and ten labels in one column
 * need 160.2pt, so "shift the column up by the excess" walks the top label off
 * the board and trips assertion 3. So the art band is PREFERRED and the BOARD
 * band is the fallback when the art band cannot hold the column. The board
 * band always can at the cap: `rowsPerColumn(236, true) = 11 >= 10`.
 */
function decollide(desired: number[], H: number, fit: FittedRect, stripTop: number): number[] {
  const n = desired.length;
  if (n === 0) return [];

  const need = (n - 1) * ROW;
  let top = Math.max(fit.oy + LABEL_SIZE, stripTop);
  let bottom = fit.oy + fit.sH - PAD_EDGE;
  if (bottom - top < need) {
    top = Math.max(LABEL_SIZE, stripTop);
    bottom = H - PAD_EDGE;
  }

  const y = [...desired].sort((a, b) => a - b);
  y[0] = Math.max(y[0], top);
  for (let i = 1; i < n; i++) y[i] = Math.max(y[i], y[i - 1] + ROW);

  const excess = y[n - 1] - bottom;
  if (excess > 0) for (let i = 0; i < n; i++) y[i] -= excess;

  // Re-clamp down. Reachable only when the column cannot fit even the board
  // band — which needs a board shorter than 12 + 28.4 + 10 + 9 * 17.8 = 210pt,
  // and MAX_LABELS_PER_GROUP is what keeps that unreachable here.
  // Rigid-packing from the top is the deterministic answer rather than
  // leaving labels off the top edge.
  if (y[0] < top) for (let i = 0; i < n; i++) y[i] = top + i * ROW;

  return y;
}

/**
 * Place the ACTIVE GROUP's labels for one language at one board box.
 *
 * Columns are pinned to the ART's edges (a world quantity) but the hard bound
 * is the BOARD, because assertion 3 is what actually errors. Where the art is
 * narrow, the plate is pushed INWARD over the illustration rather than off the
 * board — §2.2's deliberate trade, and §2.1's honest cost: every label hides a
 * rectangle of the art, about 153 x 17pt at the 22-character cap.
 */
export function layoutFigure(
  params: LabelledFigureParams,
  W: number,
  H: number
): FigureLayout {
  const fit = fitRect(W, H, params.art.intrinsic_w, params.art.intrinsic_h);
  const mid = W / 2;
  const multi = params.groups.length > 1;
  // The group strip takes the top READOUT_BAND, and ONLY when there is a
  // group to name. A single-group figure reserves nothing, so §1.3's worked
  // arithmetic holds for it exactly as written.
  const stripTop = multi ? LABEL_SIZE + READOUT_BAND : 0;
  const drawn = activeLabels(params);
  const out: PlacedLabel[] = [];

  for (const side of ['left', 'right'] as const) {
    const column = drawn.filter((l) => l.side === side);
    if (column.length === 0) continue;

    // `v_hint` is consumed HERE, before de-collision — never after (§1.5).
    const order = column
      .map((l) => ({ l, d: fit.oy + (l.v_hint ?? l.anchor.v) * fit.sH }))
      .sort((a, b) => a.d - b.d);
    const rows = decollide(order.map((o) => o.d), H, fit, stripTop);

    order.forEach(({ l }, i) => {
      const text = termFor(l, params.lang);
      const w = textWidth(text, LABEL_SIZE);
      const ty = rows[i];

      let tx: number;
      if (side === 'left') {
        // Text is right-aligned; `tx` is its RIGHT edge.
        tx = Math.max(fit.ox - LEADER_STUB, PAD_EDGE + w);
        tx = Math.min(tx, mid - LEADER_STUB);
      } else {
        // Text is left-aligned; `tx` is its LEFT edge.
        tx = Math.min(fit.ox + fit.sW + LEADER_STUB, W - PAD_EDGE - w);
        tx = Math.max(tx, mid + LEADER_STUB);
      }

      out.push({
        id: l.id,
        text,
        side,
        anchor: anchorAt(fit, l.anchor.u, l.anchor.v),
        via: l.leader_via ? anchorAt(fit, l.leader_via.u, l.leader_via.v) : null,
        tx,
        ty,
        textAnchor: side === 'left' ? 'end' : 'start',
        plate: {
          x: side === 'left' ? tx - w - PLATE_PAD_X : tx - PLATE_PAD_X,
          y: ty - TEXT_ASCENT - 1.5,
          w: w + 2 * PLATE_PAD_X,
          h: PLATE_H,
        },
        stub: {
          x: side === 'left' ? tx + PLATE_PAD_X : tx - PLATE_PAD_X,
          y: ty - TEXT_ASCENT + (LABEL_SIZE * 1.15) / 2,
        },
      });
    });
  }

  return { fit, labels: out, strip: multi ? stripFor(params, W) : null };
}

/**
 * "Nervous system  ·  2/3" — what tells the student they are looking at a
 * SUBSET rather than a complete figure.
 *
 * This is why grouping is not the same failure as silently rendering ten of
 * twenty-eight labels: the board says which subset it is showing and how many
 * there are, and `group_index`/`group_count` are `derived` quantities, so a
 * caption cannot disagree with it either.
 */
function stripFor(params: LabelledFigureParams, W: number) {
  const i = params.groups.findIndex((g) => g.id === params.active_group);
  const full = params.groups[i] ? params.groups[i].label[params.lang] : '';
  const counter = `${i + 1}/${params.groups.length}`;
  const sep = '  \u00b7  ';

  // The font is fixed; what varies with the box is how many characters FIT
  // (chrome.ts's maxChars rule, not a shrunken font). The counter is never
  // dropped — it is the part that says this is a subset.
  const perChar = READOUT_SIZE * charWidthFor(full + sep + counter);
  const room = W - 2 * PAD_EDGE - 2 * PLATE_PAD_X;
  const budget = Math.max(0, Math.floor(room / perChar) - sep.length - counter.length);
  const name = full.slice(0, budget);
  const text = name.length > 0 ? `${name}${sep}${counter}` : counter;

  return {
    text,
    x: PAD_EDGE + PLATE_PAD_X,
    y: STRIP_BASELINE,
    plate: {
      x: PAD_EDGE,
      y: STRIP_BASELINE - READOUT_SIZE * 0.82 - 1.5,
      w: textWidth(text, READOUT_SIZE) + 2 * PLATE_PAD_X,
      h: READOUT_SIZE * 1.15 + 3,
    },
  };
}

/* --------------------------------------------------- schema-side checks */

/**
 * Anchor separations WITHIN a group, checked at the SMALLEST board (§2.5).
 *
 * 343x236 is always the tightest of the three boards this runtime renders:
 * `s = min(W / iw, H / ih)` is monotonic in both W and H, and 343x236 is
 * smaller than 495x270 and 900x430 in both. A separation that clears here
 * clears everywhere, so the other two need no check.
 *
 * Per GROUP, not per figure: assertion 8 compares circles that are in the
 * tree together, and two anchors in different groups are never drawn at the
 * same time. This is a real relaxation the spec did not have — a 28-label
 * plate could not satisfy a whole-figure separation rule at 343pt.
 *
 * Returns the offending pairs as `[idA, idB, gapPt]`.
 */
export function tooCloseAnchors(
  labels: readonly LabelRecord[],
  art: FigureArt
): [string, string, number][] {
  const fit = fitRect(
    SMALLEST_BOARD.width, SMALLEST_BOARD.height, art.intrinsic_w, art.intrinsic_h
  );
  const byGroup = new Map<string, LabelRecord[]>();
  for (const l of labels) {
    const list = byGroup.get(l.group);
    if (list) list.push(l);
    else byGroup.set(l.group, [l]);
  }

  const bad: [string, string, number][] = [];
  for (const group of byGroup.values()) {
    const pts = group.map((l) => ({ id: l.id, ...anchorAt(fit, l.anchor.u, l.anchor.v) }));
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y);
        if (d < MIN_ANCHOR_GAP_PT) bad.push([pts[i].id, pts[j].id, d]);
      }
    }
  }
  return bad;
}
