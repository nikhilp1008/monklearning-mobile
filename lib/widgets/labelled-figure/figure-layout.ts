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
  CHAR_W, DEVA_MAX_CHAR_W, LABEL_SIZE, LINE_STROKE, PAD_EDGE, READOUT_BAND,
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
 * The Devanagari width path stays live regardless. It costs nothing when no
 * Devanagari appears, and it is the one thing standing between a future
 * Devanagari term and a label off the board. It is no longer the unmeasured
 * CHAR_W_DEVA guardrail: chrome.ts now prices Devanagari code unit by code
 * unit from Anek Devanagari's own advance table.
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
  /**
   * Which reveal STEP of the active group to draw, 0-based.
   *
   * Only meaningful at the phone frame, where a group larger than
   * MAX_LABELS_PHONE is paged. Optional and defaulting to 0, so every payload
   * written before paging existed renders exactly as it did — and on a tablet
   * frame it is ignored entirely, because there is only ever one page.
   */
  page?: number;
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

/* ---------------------------------------------- NEAR-ANCHOR PLACEMENT (v2)

 * Labels sit BESIDE the structure they name, not stacked in a column at the
 * frame edge with a long leader reaching back. The column layout is gone.
 *
 * Raasikh reviewed the edge-column render on 2026-09-11 and rejected the
 * LAYOUT while accepting the anchors: a reader should not have to trace a
 * 200pt line across the plate to find out what a dot is called.
 */

/** Gap between the anchor dot and the nearest edge of the pill, at 1x. */
export const LABEL_OFFSET = 14;
/** Hard cap on leader length at 1x. Past this the label is not "near". */
export const LEADER_MAX = 40;
/** Below this a leader is noise between two things already touching. */
export const LEADER_MIN_DRAW = 8;
/** Step used when no direction fits at the default offset. */
export const LEADER_STEP = 12;
/** Every pill stays this far inside the frame. */
export const FRAME_INSET = 6;

export const PILL_PAD_X = 6;
export const PILL_PAD_Y = 3;
export const PILL_RADIUS = 4;
/** Text box model is `fontSize * 1.15`, matching the gate. */
export const PILL_H = LABEL_SIZE * 1.15 + 2 * PILL_PAD_Y;

/**
 * The phone frame shows at most this many labels at once.
 *
 * A group larger than this is PAGED — rendered in successive reveal steps of
 * five, in group-list order. Tablet-and-wider frames show the whole group.
 */
export const MAX_LABELS_PHONE = 5;
/** Frames narrower than this are treated as the phone board. 343 is in,
 *  495 (the small tablet frame) is out. */
export const PHONE_MAX_W = 400;

/** The eight compass directions, in SVG axes (y grows downward). */
export const COMPASS: readonly { name: string; x: number; y: number }[] = [
  { name: 'E', x: 1, y: 0 },
  { name: 'SE', x: Math.SQRT1_2, y: Math.SQRT1_2 },
  { name: 'S', x: 0, y: 1 },
  { name: 'SW', x: -Math.SQRT1_2, y: Math.SQRT1_2 },
  { name: 'W', x: -1, y: 0 },
  { name: 'NW', x: -Math.SQRT1_2, y: -Math.SQRT1_2 },
  { name: 'N', x: 0, y: -1 },
  { name: 'NE', x: Math.SQRT1_2, y: -Math.SQRT1_2 },
];

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
 * THE REAL CAP IS PER STRING, and `termCapFor` below is what validate() uses.
 * The two constants here are the endpoints of the range it can return, kept
 * as named reference points rather than as the thing doing the work:
 *
 *   MAX_TERM_LATIN  the board's default Latin width (chrome.CHAR_W)
 *   MAX_TERM_DEVA   the WIDEST single codepoint in Anek Devanagari's block,
 *                   so no Devanagari term of any composition can need a
 *                   shorter cap than this
 *
 * This used to be one cap per SCRIPT, chosen by `hasDevanagari`, with the
 * Devanagari one derived from chrome's `CHAR_W_DEVA` — a number whose own doc
 * comment said in capitals that it was not a measurement. Both are gone.
 * chrome.ts now prices each code unit from the measured advance of the face
 * that draws it, so a term's cap can simply be computed from the term, and a
 * mixed-script term gets a cap that reflects its actual mixture instead of
 * being charged the Devanagari rate for its Latin half.
 */
export const MAX_TERM_LATIN = maxTermChars(CHAR_W);
export const MAX_TERM_DEVA = maxTermChars(DEVA_MAX_CHAR_W);

function maxTermChars(charW: number): number {
  const budget = SMALLEST_BOARD.width - 2 * PAD_EDGE - 2 * LEADER_STUB;
  return Math.floor(budget / (2 * LABEL_SIZE * charW));
}

/**
 * The cap that applies to THIS term, measured from the term itself.
 *
 * `charWidthFor` returns the string's own average advance per code unit under
 * the measured tables, so this is exact for pure Latin, exact for pure
 * Devanagari, and correct for a term that mixes the two — which the old
 * script-flag version could not represent at all.
 */
export function termCapFor(text: string): number {
  return text.length === 0 ? MAX_TERM_LATIN : maxTermChars(charWidthFor(text));
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
  /** Which compass direction was chosen, e.g. 'NE'. Inspectable in the dev
   *  overlay and asserted in the fixture. */
  dir: string;
  /** Drawn leader length in points. Below LEADER_MIN_DRAW no leader is drawn. */
  leaderLen: number;
  /** True when no direction fit even at LEADER_MAX and the pill was placed
   *  overlapping. Always accompanied by a console warning naming the label. */
  overlapped: boolean;
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

/* ------------------------------------------------------- placement helpers */

interface Rect { x: number; y: number; w: number; h: number }

/** Distance from the anchor to the nearest point of the pill — the leader as
 *  it is actually drawn. */
function leaderLenFor(anchor: { x: number; y: number }, r: Rect): number {
  const sx = Math.min(Math.max(anchor.x, r.x), r.x + r.w);
  const sy = Math.min(Math.max(anchor.y, r.y), r.y + r.h);
  return Math.hypot(sx - anchor.x, sy - anchor.y);
}

function rectsOverlap(a: Rect, b: Rect): boolean {
  return a.x < b.x + b.w && b.x < a.x + a.w && a.y < b.y + b.h && b.y < a.y + a.h;
}

function insideFrame(r: Rect, W: number, H: number): boolean {
  return (
    r.x >= FRAME_INSET && r.y >= FRAME_INSET &&
    r.x + r.w <= W - FRAME_INSET && r.y + r.h <= H - FRAME_INSET
  );
}

function intersectArea(a: Rect, b: Rect): number {
  const w = Math.min(a.x + a.w, b.x + b.w) - Math.max(a.x, b.x);
  const h = Math.min(a.y + a.h, b.y + b.h) - Math.max(a.y, b.y);
  return w > 0 && h > 0 ? w * h : 0;
}

/**
 * Pill rect for one candidate direction.
 *
 * `LABEL_OFFSET` (or an extended leader) is measured from the anchor to the
 * pill's NEAREST EDGE, not to its centre — otherwise a long term would sit
 * closer than a short one in the same direction.
 */
function pillRect(anchor: { x: number; y: number }, d: { x: number; y: number },
                  len: number, w: number, h: number): Rect {
  const halfW = w / 2;
  const halfH = h / 2;
  const reach = len + Math.abs(d.x) * halfW + Math.abs(d.y) * halfH;
  return { x: anchor.x + d.x * reach - halfW, y: anchor.y + d.y * reach - halfH, w, h };
}

/**
 * How much ART a candidate pill would cover — the (iii) term.
 *
 * DELIBERATELY A PROXY, AND SAID SO. The brief asks to "sample plate
 * alpha/darkness under the pill rect". This runtime cannot: the art is an
 * `<Image>` handed to react-native-svg, there is no pixel read at layout
 * time, and CLAUDE.md forbids a layout that could differ between the CI tree
 * and the device. A real ink term needs a coarse darkness grid computed at
 * INGEST and carried with the asset — and the same brief freezes the label-set
 * schema, so there is nowhere to put one yet.
 *
 * So the cost uses two things already known, both exact and both deterministic:
 *   - the fraction of the pill that lands on the DRAWN ART rect at all
 *     (outside the letterboxed art there is nothing to cover);
 *   - whether it would sit on another label's anchor dot, which marks a
 *     structure and is therefore ink that matters.
 * The second is an integer penalty and dominates, so a pill never lands on a
 * neighbouring dot to save a little art overlap.
 */
function inkCost(r: Rect, art: Rect, dots: readonly { x: number; y: number }[]): number {
  const covered = intersectArea(r, art) / (r.w * r.h);
  let onDots = 0;
  for (const p of dots) {
    if (p.x >= r.x - 2 && p.x <= r.x + r.w + 2 && p.y >= r.y - 2 && p.y <= r.y + r.h + 2) onDots++;
  }
  return onDots * 10 + covered;
}

/**
 * The labels drawn at one board width, as reveal STEPS.
 *
 * At the phone frame a group of more than five is split into successive steps
 * of five in group-list order; wider frames return the whole group as one
 * step. Splitting is a LAYOUT decision, not a content one — the same label set
 * pages differently on a phone and a tablet, and neither is a different figure.
 */
export function pagesFor(labels: readonly LabelRecord[], W: number): LabelRecord[][] {
  if (W >= PHONE_MAX_W || labels.length <= MAX_LABELS_PHONE) return [[...labels]];
  const out: LabelRecord[][] = [];
  for (let i = 0; i < labels.length; i += MAX_LABELS_PHONE) {
    out.push(labels.slice(i, i + MAX_LABELS_PHONE));
  }
  return out;
}

/**
 * Place the ACTIVE GROUP's labels beside the structures they name.
 *
 * For each label, in group order:
 *   1. take the outward vector from the art's centre through the anchor;
 *   2. try the eight compass directions, nearest that vector first;
 *   3. keep the candidates that stay inside the frame and clear every pill
 *      already placed, and take the one covering least art;
 *   4. if none fit, extend the leader in LEADER_STEP points up to LEADER_MAX
 *      and try again;
 *   5. if it still cannot fit, place it outward at LABEL_OFFSET, mark it
 *      `overlapped`, and warn naming the label.
 *
 * Order matters and is the record order, so the layout is deterministic: the
 * same set at the same box always produces the same picture.
 */
export function layoutFigure(
  params: LabelledFigureParams,
  W: number,
  H: number
): FigureLayout {
  const fit = fitRect(W, H, params.art.intrinsic_w, params.art.intrinsic_h);
  const multi = params.groups.length > 1;
  const group = activeLabels(params);
  const pages = pagesFor(group, W);
  const page = Math.min(Math.max(params.page ?? 0, 0), pages.length - 1);
  const drawn = pages[page] ?? [];

  const artRect: Rect = { x: fit.ox, y: fit.oy, w: fit.sW, h: fit.sH };
  const centre = { x: fit.ox + fit.sW / 2, y: fit.oy + fit.sH / 2 };
  const dots = drawn.map((l) => anchorAt(fit, l.anchor.u, l.anchor.v));

  const placed: Rect[] = [];
  const out: PlacedLabel[] = [];

  drawn.forEach((l, idx) => {
    const text = termFor(l, params.lang);
    const tw = textWidth(text, LABEL_SIZE);
    const w = tw + 2 * PILL_PAD_X;
    const h = PILL_H;
    const anchor = dots[idx];

    // Outward from the plate centre. A label on a structure at the centre has
    // no outward direction; E is the deterministic fallback.
    let ox = anchor.x - centre.x;
    let oy = anchor.y - centre.y;
    const mag = Math.hypot(ox, oy);
    if (mag < 1e-6) { ox = 1; oy = 0; } else { ox /= mag; oy /= mag; }

    const order = [...COMPASS].sort(
      (a, b) => (b.x * ox + b.y * oy) - (a.x * ox + a.y * oy)
    );

    let chosen: { rect: Rect; dir: string } | null = null;
    for (let len = LABEL_OFFSET; len <= LEADER_MAX && !chosen; len += LEADER_STEP) {
      let best: { rect: Rect; dir: string; cost: number } | null = null;
      for (const d of order) {
        const r = pillRect(anchor, d, len, w, h);
        if (!insideFrame(r, W, H)) continue;
        if (placed.some((p) => rectsOverlap(p, r))) continue;
        // MEASURED, not assumed. `len` is the offset along the direction
        // axis; the drawn leader runs to the nearest point of the rect, and
        // on a diagonal that is a CORNER, which is further. A 38pt step was
        // measuring 42.99pt on the frog heart. The cap is on what is drawn.
        if (leaderLenFor(anchor, r) > LEADER_MAX) continue;
        // Other labels' dots, not this one's.
        const others = dots.filter((_, i) => i !== idx);
        const cost = inkCost(r, artRect, others);
        if (!best || cost < best.cost) best = { rect: r, dir: d.name, cost };
      }
      if (best) chosen = { rect: best.rect, dir: best.dir };
    }

    let overlapped = false;
    if (!chosen) {
      overlapped = true;
      const d = order[0];
      chosen = { rect: pillRect(anchor, d, LABEL_OFFSET, w, h), dir: d.name };
      // Loud, and it names the label: a silently overlapping pill is a wrong
      // figure that looks like a rendered one.
      console.warn(
        `[labelled_figure] "${l.id}" could not be placed clear of the frame and ` +
          `its neighbours at any of the eight directions up to ${LEADER_MAX}pt — ` +
          `placed ${d.name} with overlap. The group is too dense for this board.`
      );
    }

    const r = chosen.rect;
    placed.push(r);

    const stub = {
      x: Math.min(Math.max(anchor.x, r.x), r.x + r.w),
      y: Math.min(Math.max(anchor.y, r.y), r.y + r.h),
    };
    const leaderLen = Math.hypot(stub.x - anchor.x, stub.y - anchor.y);

    out.push({
      id: l.id,
      text,
      side: anchor.x < W / 2 ? 'left' : 'right',
      anchor,
      via: l.leader_via ? anchorAt(fit, l.leader_via.u, l.leader_via.v) : null,
      tx: r.x + PILL_PAD_X,
      ty: r.y + PILL_PAD_Y + LABEL_SIZE * 0.82,
      textAnchor: 'start',
      plate: { x: r.x, y: r.y, w: r.w, h: r.h },
      stub,
      dir: chosen.dir,
      leaderLen,
      overlapped,
    });
  });

  return {
    fit,
    labels: out,
    strip: multi || pages.length > 1 ? stripFor(params, W, page, pages.length) : null,
  };
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
function stripFor(params: LabelledFigureParams, W: number, page = 0, pageCount = 1) {
  const i = params.groups.findIndex((g) => g.id === params.active_group);
  const full = params.groups[i] ? params.groups[i].label[params.lang] : '';
  // A paged group says which STEP it is too, or the board would claim to be
  // showing a group it is showing five of.
  const counter = pageCount > 1
    ? `${i + 1}/${params.groups.length} \u00b7 ${page + 1} of ${pageCount}`
    : `${i + 1}/${params.groups.length}`;
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
