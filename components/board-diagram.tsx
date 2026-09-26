import { useEffect, useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

import { INK, INK_MUTED } from '@/components/classroom-chrome';
import { svgParseError, utf8ByteLength } from '@/lib/widgets/svg-parse';

/**
 * A figure sent by the API as one `diagram` board event.
 *
 * The `svg` is complete, static, self-contained markup — no external
 * references, no scripts, no fonts to fetch. `diagram_author.validate()`
 * enforces that server-side and drops anything failing it, so this renders the
 * string as it arrives. Deliberately no sanitising pass of our own: the
 * element and attribute whitelist already ran, and an over-eager filter here
 * would silently strip `<g>` or an attribute it did not recognise, which is
 * exactly the failure mode the server-side validation exists to remove.
 *
 * Three things the host app owes every diagram, per the API handoff, and this
 * component does all three:
 *
 * 1. Remap the palette. The generator emits a neutral set; leave it and every
 *    figure clashes with the board.
 * 2. Supply the font. The markup carries no `font-family`, on purpose, so the
 *    host decides.
 * 3. Scale it to the space, preserving aspect.
 *
 * What it does NOT do: move anything. The author computed label positions
 * against the viewBox and the server geometrically verified that no two labels
 * overlap. Re-wrapping or re-laying-out text throws that away.
 */

/**
 * The generator's neutral palette → the house one. A literal string swap; the
 * validator guarantees every colour in the markup is one of exactly these nine.
 *
 * `#ffffff` is the tenth and is NOT in this table, because it is the one value
 * whose right answer depends on what is painted with it — see
 * `remapWhitePaint`. It used to be here, mapped to `transparent`, which is
 * correct for the background rect it was written for and wrong for everything
 * else: an audit of the live corpus found 69 white-filled text labels across 41
 * segments, 39 of them over a pale fill or the background, i.e. invisible in
 * any renderer. A blind swap cannot tell a page from a label.
 */
const HOUSE_PALETTE: readonly (readonly [string, string])[] = [
  ['#1f2933', '#1C1A16'],
  ['#2563eb', '#9A6A12'],
  ['#dbeafe', '#FCF4E0'],
  ['#64748b', '#9C988C'],
  ['#f1f5f9', '#FFFEFB'],
  ['#d97706', '#B87A14'],
  ['#dc2626', '#DD4433'],
  ['#059669', '#157A45'],
];

/** The board's own body face, so a label reads as part of the same hand. */
const DIAGRAM_FONT = 'Onest_400Regular';

const VIEW_BOX = /viewBox\s*=\s*["']\s*([-\d.]+)[\s,]+([-\d.]+)[\s,]+([-\d.]+)[\s,]+([-\d.]+)\s*["']/;

function housePalette(svg: string): string {
  let out = svg;
  for (const [from, to] of HOUSE_PALETTE) {
    // Case-insensitive: the validator fixes the nine values, not their casing.
    out = out.replace(new RegExp(from, 'gi'), to);
  }
  return out;
}

/* --------------------------------------------------------------- white paint */

/**
 * The share of the viewBox a white `rect`/`path` has to cover before its fill
 * is read as the page rather than as part of the drawing.
 *
 * Derived from the gap between the two populations rather than picked:
 *
 * - A background is authored to cover the canvas, so full-bleed is 100%. The
 *   loosest thing that is still a page is a card inset by a margin, and the
 *   margin is bounded by the canvas: on the smallest one the generator emits
 *   (340×240, the size the sizing handoff is written against) a generous
 *   20-unit margin on all four sides still leaves
 *   (1 − 40/340) × (1 − 40/240) = 0.88 × 0.83 ≈ 0.74 of the viewBox. Tighter
 *   canvases make the floor higher, not lower, because 20 units of margin is
 *   already visually heavy at 240 tall.
 * - Nothing inside the drawing comes near that. A legend chip or a swatch is
 *   single digits; a plate behind one line of 12-unit text on a 240-tall canvas
 *   is ~5%; the largest white foreground shape that still leaves room for a
 *   figure to be a figure is a panel filling half the canvas, 50%.
 *
 * 0.6 sits in the empty band between those (0.50 … 0.74) with headroom on both
 * sides: a page has to shrink past any plausible margin to be missed, and a
 * shape has to grow past half the canvas to be stripped. The asymmetry runs the
 * same way on purpose — a missed page is a white card on cream paper, ugly and
 * still readable; a stripped label is simply gone, which is the bug being fixed.
 */
const BACKGROUND_AREA_SHARE = 0.6;

/**
 * White in every form this pass recognises: `#fff`, `#ffff`, `#ffffff`,
 * `#ffffffff`, `white`, any casing.
 *
 * NOT recognised, and therefore left exactly as authored: `rgb(255,255,255)`,
 * `rgb(100%,100%,100%)`, `hsl(0,0%,100%)`, and near-whites like `#fefefe`,
 * `snow`, `ivory`. The validator pins every colour in the corpus to one of ten
 * literal hex values, so those forms do not occur; if one ever does it renders
 * as authored, which is white-on-paper rather than an exception.
 */
const WHITE = /^(?:#(?:f{3}|f{4}|f{6}|f{8})|white)$/i;

function isWhite(value: string): boolean {
  return WHITE.test(value.trim());
}

/**
 * Elements that paint nothing themselves and only hand paint down to children.
 * A white `fill` on one of these keeps the OLD blanket behaviour — transparent
 * — and that is deliberate, not an oversight: a `<rect>` inheriting it is the
 * page, and inking the container would turn that page black. A `<text>`
 * inheriting it is still invisible, which is the one part of the bug this pass
 * does not fix; every one of the 69 audited labels carries its own `fill`, and
 * doing better needs a real parse with an inheritance stack, not a regex.
 */
const CONTAINER_TAGS = new Set([
  'svg', 'g', 'a', 'switch', 'defs', 'symbol', 'marker', 'mask', 'clippath',
  'pattern', 'use', 'lineargradient', 'radialgradient', 'stop', 'style',
  'title', 'desc', 'metadata',
]);

/**
 * One element's opening tag. `[^>]*?` means an attribute value containing a
 * literal `>` would cut the tag short — no whitelisted attribute can hold one.
 * Closing tags cannot match (`/` is not `[A-Za-z]`), nor can comments or
 * doctypes, and a tag with no white paint is rebuilt byte-identically.
 */
const TAG = /<([A-Za-z][\w:.-]*)([^>]*?)(\/?)>/g;

/** `fill="…"` / `stroke='…'`. `fill-opacity=` and `stroke-width=` cannot match:
 *  the `=` has to follow the property name directly. */
const PAINT_ATTR = /(^|\s)(fill|stroke)(\s*=\s*)(["'])([^"']*)\4/gi;

const STYLE_ATTR = /(^|\s)style(\s*=\s*)(["'])([^"']*)\3/i;

/**
 * A transform on a container can scale a small `<rect>` up into a full-bleed
 * page, and no regex pass can see an ancestor. Where one exists we do not guess
 * a rect's or path's true area at all — those keep the old blanket `transparent`
 * — while text, tspans, strokes and every other element are still fixed. That
 * trades the legend-chip case (rare, cosmetic) for never inking a page black.
 */
const CONTAINER_TRANSFORM = /<(?:g|svg|use|symbol|a|switch)\b[^>]*\btransform\s*=/i;

// Only real path commands split the string, so an exponent (`1e3`) stays inside
// the number chunk rather than reading as an unknown command.
const PATH_COMMAND = /([MmLlHhVvZzCcSsQqTtAa])([^MmLlHhVvZzCcSsQqTtAa]*)/g;
const PATH_NUMBER = /[-+]?(?:\d+\.?\d*|\.\d+)(?:e[-+]?\d+)?/gi;

type Box = { minX: number; minY: number; width: number; height: number };

function parseViewBox(svg: string): Box | null {
  const match = VIEW_BOX.exec(svg);
  if (!match) return null;
  const minX = Number(match[1]);
  const minY = Number(match[2]);
  const width = Number(match[3]);
  const height = Number(match[4]);
  if (!Number.isFinite(minX) || !Number.isFinite(minY)) return null;
  if (!(width > 0) || !(height > 0)) return null;
  return { minX, minY, width, height };
}

/** `width="640"` / `height="260"` on the root, in user units. */
const ROOT_LENGTH = (svg: string, name: 'width' | 'height'): number | null => {
  const root = /<svg\b[^>]*>/i.exec(svg);
  if (!root) return null;
  const m = new RegExp(`\\b${name}\\s*=\\s*["']\\s*([\\d.]+)\\s*(px)?\\s*["']`, 'i').exec(root[0]);
  if (!m) return null;
  const v = Number(m[1]);
  return v > 0 ? v : null;
};

/** Every coordinate the shape primitives name, as a bounding box. */
const CONTENT_NUMBERS = [
  /<rect\b[^>]*?\bx\s*=\s*["']([-\d.]+)["'][^>]*?\by\s*=\s*["']([-\d.]+)["'][^>]*?\bwidth\s*=\s*["']([\d.]+)["'][^>]*?\bheight\s*=\s*["']([\d.]+)["']/gi,
];

function contentBox(svg: string): Box | null {
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  const see = (x: number, y: number) => {
    if (!Number.isFinite(x) || !Number.isFinite(y)) return;
    if (x < minX) minX = x; if (y < minY) minY = y;
    if (x > maxX) maxX = x; if (y > maxY) maxY = y;
  };
  for (const re of CONTENT_NUMBERS) {
    re.lastIndex = 0;
    for (let m = re.exec(svg); m; m = re.exec(svg)) {
      const x = Number(m[1]), y = Number(m[2]);
      see(x, y); see(x + Number(m[3]), y + Number(m[4]));
    }
  }
  for (const [re, cx, cy, r] of [
    [/<circle\b[^>]*>/gi, 'cx', 'cy', 'r'],
    [/<ellipse\b[^>]*>/gi, 'cx', 'cy', 'rx'],
  ] as const) {
    re.lastIndex = 0;
    for (let m = re.exec(svg); m; m = re.exec(svg)) {
      const num = (n: string) => {
        const a = new RegExp(`\\b${n}\\s*=\\s*["']([-\\d.]+)["']`, 'i').exec(m![0]);
        return a ? Number(a[1]) : NaN;
      };
      const x = num(cx), y = num(cy), rad = Math.abs(num(r)) || 0;
      see(x - rad, y - rad); see(x + rad, y + rad);
    }
  }
  // `line`, `polyline`, `polygon` and `path` are read as bare coordinate runs:
  // a bounding box only needs the extremes, and a control point of a Bezier is
  // still inside the box the curve is drawn in (it bounds it, never clips it).
  for (const re of [/<(?:line|polyline|polygon|path)\b[^>]*>/gi]) {
    re.lastIndex = 0;
    for (let m = re.exec(svg); m; m = re.exec(svg)) {
      const geom = /\b(?:d|points|x1|y1|x2|y2)\s*=\s*["']([^"']*)["']/gi;
      for (let g = geom.exec(m[0]); g; g = geom.exec(m[0])) {
        const nums = (g[1].match(/-?\d+(?:\.\d+)?/g) ?? []).map(Number);
        for (let i = 0; i + 1 < nums.length; i += 2) see(nums[i], nums[i + 1]);
      }
    }
  }
  if (!Number.isFinite(minX) || maxX <= minX || maxY <= minY) return null;
  return { minX, minY, width: maxX - minX, height: maxY - minY };
}

/**
 * The box to draw this figure in, and WHY IT IS NOT JUST THE viewBox.
 *
 * S3, 2026-09-24. An SVG with no readable `viewBox` was dropped — `return null`
 * with no gap event, so the board went blank and the feed said nothing at all.
 * That is the worst shape a failure can take here: `gap_report.py` counts what
 * the client reports, and a silent blank is invisible to the one instrument
 * the diagram tiers have. It is also not hypothetical — `verify-fixtures` and
 * the corpus audit both key on `viewBox`, so anything reaching the board
 * without one had already slipped past every check upstream.
 *
 * Three sources, in descending order of how much the author told us:
 *
 *   1. `viewBox` — what the author computed the geometry against;
 *   2. the root `width`/`height` — the same aspect, stated a different way.
 *      An SVG with `width="640" height="260"` and no viewBox is well-formed
 *      and unambiguous: the user-space origin is (0,0) by definition;
 *   3. the bounding box of the CONTENT. A guess, and labelled one: `derived`
 *      is returned so the caller can report it. It cannot distort the figure
 *      (the aspect comes from the drawing itself) but it can crop a stroke
 *      that sits outside every coordinate it names, so it is last.
 *
 * Nothing left means the figure genuinely cannot be sized, and THAT is now a
 * reported `svg_invalid` rather than a silent null.
 */
export type BoxSource = 'viewBox' | 'width-height' | 'content-bounds';

export function diagramBox(svg: string): { box: Box; source: BoxSource } | null {
  const fromViewBox = parseViewBox(svg);
  if (fromViewBox) return { box: fromViewBox, source: 'viewBox' };

  const w = ROOT_LENGTH(svg, 'width');
  const h = ROOT_LENGTH(svg, 'height');
  if (w && h) return { box: { minX: 0, minY: 0, width: w, height: h }, source: 'width-height' };

  const fromContent = contentBox(svg);
  if (fromContent) return { box: fromContent, source: 'content-bounds' };
  return null;
}

function attrValue(attrs: string, name: string): string | null {
  const match = new RegExp(`(?:^|\\s)${name}\\s*=\\s*(["'])([^"']*)\\1`, 'i').exec(attrs);
  return match ? match[2] : null;
}

/** The winning `fill:`/`stroke:` declaration inside `style="…"`, if any. */
function styleValue(attrs: string, prop: 'fill' | 'stroke'): string | null {
  const style = attrValue(attrs, 'style');
  if (style === null) return null;
  let found: string | null = null;
  for (const declaration of style.split(';')) {
    const colon = declaration.indexOf(':');
    if (colon < 0) continue;
    if (declaration.slice(0, colon).trim().toLowerCase() === prop) {
      found = declaration.slice(colon + 1);
    }
  }
  return found;
}

/** `style` beats the presentation attribute, which is the cascade's own rule. */
function paintOf(attrs: string, prop: 'fill' | 'stroke'): string | null {
  const styled = styleValue(attrs, prop);
  return styled !== null ? styled : attrValue(attrs, prop);
}

function lengthOf(raw: string | null, basis: number): number | null {
  if (raw === null) return null;
  const text = raw.trim();
  const percent = /^([-+]?(?:\d+\.?\d*|\.\d+))%$/.exec(text);
  if (percent) return (Number(percent[1]) / 100) * basis;
  const absolute = /^([-+]?(?:\d+\.?\d*|\.\d+))(?:px)?$/i.exec(text);
  if (!absolute) return null;
  const value = Number(absolute[1]);
  return Number.isFinite(value) ? value : null;
}

/** Exact, and clipped to the viewBox so an off-canvas slab is not a page. */
function rectAreaShare(attrs: string, box: Box): number | null {
  const width = lengthOf(attrValue(attrs, 'width'), box.width);
  const height = lengthOf(attrValue(attrs, 'height'), box.height);
  if (width === null || height === null) return null;
  const x = lengthOf(attrValue(attrs, 'x'), box.width) ?? 0;
  const y = lengthOf(attrValue(attrs, 'y'), box.height) ?? 0;
  const overlapW = Math.min(x + width, box.minX + box.width) - Math.max(x, box.minX);
  const overlapH = Math.min(y + height, box.minY + box.height) - Math.max(y, box.minY);
  if (!(overlapW > 0) || !(overlapH > 0)) return 0;
  return (overlapW * overlapH) / (box.width * box.height);
}

/**
 * The true filled area of a curve-free path, by the shoelace formula over its
 * vertices — not its bounding box, which would read a diagonal band spanning
 * the canvas as full-bleed and strip it.
 *
 * Returns null for any path carrying a curve or arc command (C S Q T A, either
 * case): a page is a rectangle, and the area under a Bézier is not something
 * this pass will pretend to know. Such a path is therefore never classified as
 * a background — see `backgroundVerdict` for what happens to it instead.
 * An unclosed subpath is measured closed, which is how a fill paints it anyway.
 */
function pathAreaShare(d: string, box: Box): number | null {
  let total = 0;
  let cx = 0;
  let cy = 0;
  let startX = 0;
  let startY = 0;
  let poly: { x: number; y: number }[] = [];

  const closeSubpath = () => {
    if (poly.length > 2) {
      let sum = 0;
      for (let i = 0; i < poly.length; i += 1) {
        const a = poly[i];
        const b = poly[(i + 1) % poly.length];
        sum += a.x * b.y - b.x * a.y;
      }
      total += Math.abs(sum) / 2;
    }
    poly = [];
  };

  PATH_COMMAND.lastIndex = 0;
  for (let match = PATH_COMMAND.exec(d); match; match = PATH_COMMAND.exec(d)) {
    const command = match[1];
    const numbers = (match[2].match(PATH_NUMBER) ?? []).map(Number);
    switch (command) {
      case 'M':
      case 'm':
      case 'L':
      case 'l': {
        if (numbers.length < 2 || numbers.length % 2 !== 0) return null;
        const relative = command === command.toLowerCase();
        for (let i = 0; i < numbers.length; i += 2) {
          const moving = (command === 'M' || command === 'm') && i === 0;
          cx = relative ? cx + numbers[i] : numbers[i];
          cy = relative ? cy + numbers[i + 1] : numbers[i + 1];
          if (moving) {
            closeSubpath();
            startX = cx;
            startY = cy;
          }
          poly.push({ x: cx, y: cy });
        }
        break;
      }
      case 'H':
      case 'h':
      case 'V':
      case 'v': {
        if (numbers.length < 1) return null;
        for (const value of numbers) {
          if (command === 'H') cx = value;
          else if (command === 'h') cx += value;
          else if (command === 'V') cy = value;
          else cy += value;
          poly.push({ x: cx, y: cy });
        }
        break;
      }
      case 'Z':
      case 'z':
        cx = startX;
        cy = startY;
        closeSubpath();
        break;
      default:
        return null;
    }
  }
  closeSubpath();
  return total / (box.width * box.height);
}

/**
 * WHITE IS RIGHT WHEN WHAT IS BEHIND IT IS DARK.
 *
 * `Thermal Properties of Matter / radiation and Stefan's law` seg 1 draws
 *
 *     <circle cx="120" cy="120" r="52" fill="#1f2933"/>
 *     <text x="128" y="112" fill="#ffffff">r = 5 cm</text>
 *
 * — a radius label INSIDE the black body it measures. The author picked white
 * because the backdrop is black, and inking it would hide the label just as
 * thoroughly as the blanket `transparent` did, while this file claimed to have
 * fixed exactly that. Three of the corpus's 69 white labels are like this, all
 * three a label inside a dark disc; the other 66 sit on the board or on a pale
 * fill and want ink.
 *
 * So the choice is made by CONTRAST rather than by a threshold: paint the label
 * whichever of white or `INK` reads better against what is behind it. That has
 * no tunable in it, and on the corpus's own palette it agrees with the author
 * every time — white wins on `#dc2626` (4.25 against 4.02), `#059669` and
 * `#d97706`, ink wins by more than 10x on every pale fill and on the board.
 *
 * This is only possible now that the blanket swap is gone: before it, a label
 * left white became `transparent`, so "keep it white" was not an option that
 * reached the screen.
 */

/**
 * The colour this backdrop will actually be PAINTED, not the one it is written
 * as. `housePalette` runs after this pass, and two of its nine swaps move a
 * colour across the white/ink crossover:
 *
 *     #059669 -> #157A45   authored green says INK (4.54 : 3.77)
 *                          painted  green says WHITE (5.45 : 3.20)
 *     #64748b -> #9C988C   authored grey says WHITE, painted grey says ink
 *
 * The first one is not hypothetical: `Continuity / Rolle's theorem` seg 2
 * numbers its four steps inside `#059669` discs, and judging the authored
 * colour inked three of them onto a green that white reads better on. Caught by
 * cross-checking every white label against a pixel probe of the RENDERED
 * figure — the markup route and the pixel route disagreed on exactly those
 * three, and the pixel route was right.
 */
const AS_PAINTED = new Map(HOUSE_PALETTE.map(([from, to]) => [from.toLowerCase(), to]));

/** WCAG relative luminance, or null for a colour this pass cannot read. */
function relativeLuminance(colour: string): number | null {
  const value = colour.trim().toLowerCase();
  let hex: string | null = null;
  if (/^#[0-9a-f]{3,4}$/.test(value)) {
    hex = value[1] + value[1] + value[2] + value[2] + value[3] + value[3];
  } else if (/^#[0-9a-f]{6}([0-9a-f]{2})?$/.test(value)) {
    hex = value.slice(1, 7);
  } else if (value === 'white') {
    hex = 'ffffff';
  }
  if (hex === null) return null;
  const channel = (pair: string) => {
    const c = parseInt(pair, 16) / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * channel(hex.slice(0, 2))
       + 0.7152 * channel(hex.slice(2, 4))
       + 0.0722 * channel(hex.slice(4, 6));
}

const contrast = (a: number, b: number) =>
  (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);

/** `colors.paper` — what a figure is drawn on when nothing is behind it. */
const BOARD_LUMINANCE = relativeLuminance('#FFFDF8') as number;
const INK_LUMINANCE = relativeLuminance(INK) as number;
const WHITE_LUMINANCE = 1;

/**
 * A path's outline as straight-line subpaths, curves reduced to their
 * ENDPOINTS.
 *
 * `pathAreaShare` refuses a curve outright, because a chord's AREA is not the
 * curve's area and the page decision has to be honest about size. Containment
 * is a different question and the chord answers it well enough: the label this
 * exists for is `Thermal / radiation and Stefan's law` seg 4, where "dull
 * black" sits at the middle of a `Q`-cornered pot, nowhere near the corners the
 * approximation touches.
 *
 * The approximation errs where a curve bulges INWARD, which reports a point
 * inside that is really outside. That costs a label the ink it would have had
 * — the state all 69 were in before this pass — and never paints anything over
 * anything. Cross-checked against a pixel probe of all 69: see the sweep note
 * in the Q3 report.
 */
function pathOutline(d: string): { x: number; y: number }[][] {
  const subpaths: { x: number; y: number }[][] = [];
  let poly: { x: number; y: number }[] = [];
  let cx = 0, cy = 0, startX = 0, startY = 0;
  const close = () => { if (poly.length > 2) subpaths.push(poly); poly = []; };

  PATH_COMMAND.lastIndex = 0;
  for (let match = PATH_COMMAND.exec(d); match; match = PATH_COMMAND.exec(d)) {
    const command = match[1];
    const upper = command.toUpperCase();
    const relative = command !== upper;
    const numbers = (match[2].match(PATH_NUMBER) ?? []).map(Number);
    //: How many numbers one repetition of each command takes, and how far back
    //  from its end the x of its ENDPOINT sits.
    const stride: Record<string, number> = { M: 2, L: 2, T: 2, S: 4, Q: 4, C: 6, A: 7 };
    if (upper === 'Z') { cx = startX; cy = startY; close(); continue; }
    if (upper === 'H' || upper === 'V') {
      for (const value of numbers) {
        if (upper === 'H') cx = relative ? cx + value : value;
        else cy = relative ? cy + value : value;
        poly.push({ x: cx, y: cy });
      }
      continue;
    }
    const step = stride[upper];
    if (!step || numbers.length < step || numbers.length % step !== 0) return [];
    for (let i = 0; i < numbers.length; i += step) {
      // The endpoint is the last pair of every one of these commands, `A`
      // included — its first five numbers are radii, rotation and flags.
      const ex = numbers[i + step - 2];
      const ey = numbers[i + step - 1];
      cx = relative ? cx + ex : ex;
      cy = relative ? cy + ey : ey;
      if (upper === 'M' && i === 0) { close(); startX = cx; startY = cy; }
      poly.push({ x: cx, y: cy });
    }
  }
  close();
  return subpaths;
}

/** Even-odd ray cast, the same test every renderer uses for `fill-rule`. */
function insidePolygon(poly: { x: number; y: number }[], px: number, py: number): boolean {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i, i += 1) {
    const a = poly[i], b = poly[j];
    if ((a.y > py) !== (b.y > py)
        && px < ((b.x - a.x) * (py - a.y)) / (b.y - a.y) + a.x) {
      inside = !inside;
    }
  }
  return inside;
}

/** A filled shape that can sit behind a label, in document order. */
type Backdrop = { at: number; luminance: number; hit: (x: number, y: number) => boolean };

/**
 * Every dark-enough filled `rect`/`circle`/`ellipse`, with where it starts.
 *
 * `polygon` is NOT collected — its `points` are trivially readable, but nothing
 * in the corpus paints a dark polygon behind anything, and an untested branch
 * on this path is worse than an honest gap. `path` IS collected, by chords; see
 * `pathOutline` for what that approximates and which way it errs.
 */
function backdrops(svg: string, box: Box | null, containerTransform: boolean): Backdrop[] {
  if (!box || containerTransform) return [];
  const found: Backdrop[] = [];
  for (const m of svg.matchAll(TAG)) {
    const tag = m[1].toLowerCase();
    const attrs = m[2];
    if (tag !== 'rect' && tag !== 'circle' && tag !== 'ellipse' && tag !== 'path') continue;
    if (attrValue(attrs, 'transform') !== null) continue;
    const fill = paintOf(attrs, 'fill');
    if (fill === null || isWhite(fill)) continue;
    const luminance = relativeLuminance(AS_PAINTED.get(fill.trim().toLowerCase()) ?? fill);
    if (luminance === null) continue;
    const n = (name: string, basis: number) => lengthOf(attrValue(attrs, name), basis);
    let hit: ((x: number, y: number) => boolean) | null = null;
    if (tag === 'rect') {
      const x = n('x', box.width) ?? 0, y = n('y', box.height) ?? 0;
      const w = n('width', box.width), h = n('height', box.height);
      if (w !== null && h !== null) {
        hit = (px, py) => px >= x && px <= x + w && py >= y && py <= y + h;
      }
    } else if (tag === 'path') {
      const outline = pathOutline(attrValue(attrs, 'd') ?? '');
      if (outline.length) {
        hit = (px, py) => outline.some((poly) => insidePolygon(poly, px, py));
      }
    } else {
      const cx = n('cx', box.width) ?? 0, cy = n('cy', box.height) ?? 0;
      const rx = tag === 'circle' ? n('r', box.width) : n('rx', box.width);
      const ry = tag === 'circle' ? rx : n('ry', box.height);
      if (rx !== null && ry !== null && rx > 0 && ry > 0) {
        hit = (px, py) =>
          ((px - cx) / rx) ** 2 + ((py - cy) / ry) ** 2 <= 1;
      }
    }
    if (hit) found.push({ at: m.index ?? 0, luminance, hit });
  }
  return found;
}

/**
 * Should this white label STAY white?
 *
 * Only the nearest backdrop matters, and "nearest" is the last one that starts
 * before the label — SVG paints in document order, so a later shape covers an
 * earlier one. The anchor point is the baseline origin: glyphs sit above it, so
 * a label whose baseline is inside a dark disc is inside it, and one that only
 * overhangs the edge is not. Erring towards ink is erring towards the 66.
 */
function keepsWhiteOver(x: number, y: number, at: number, shapes: Backdrop[]): boolean {
  let behind = BOARD_LUMINANCE;
  for (const shape of shapes) {
    if (shape.at >= at) break;          // painted later: in front, not behind
    if (shape.hit(x, y)) behind = shape.luminance;
  }
  return contrast(WHITE_LUMINANCE, behind) > contrast(INK_LUMINANCE, behind);
}

function labelKeepsWhite(attrs: string, at: number, shapes: Backdrop[]): boolean {
  if (!shapes.length) return false;
  if (attrValue(attrs, 'transform') !== null) return false;
  const x = Number(attrValue(attrs, 'x'));
  const y = Number(attrValue(attrs, 'y'));
  if (!Number.isFinite(x) || !Number.isFinite(y)) return false;
  return keepsWhiteOver(x, y, at, shapes);
}

/**
 * THE SAME QUESTION FOR A SHAPE, AND WHY IT IS NOT THE SAME ANSWER AS `transparent`.
 *
 * `Wave Optics / diffraction of light` seg 8 draws the barrier and then punches
 * the slits out of it:
 *
 *     <rect x="40" y="40" width="10" height="180" fill="#1f2933"/>   the barrier
 *     <rect x="40" y="98"  width="10" height="14" fill="#ffffff"/>   a slit
 *
 * `transparent` there shows the BARRIER through the slit, not the board, so the
 * slit disappears — the blanket swap had already lost it, and inking it loses
 * it again in the other colour. Only `#ffffff`, left exactly as authored, draws
 * a slit. `transparent` and white are interchangeable on the bare board and are
 * opposites over anything painted, which is the whole reason this pass exists.
 *
 * So a white shape over a dark backdrop keeps its white, by the same contrast
 * test the labels use, at the shape's own centre.
 */
function shapeReferencePoint(tag: string, attrs: string, box: Box): [number, number] | null {
  const n = (name: string, basis: number) => lengthOf(attrValue(attrs, name), basis);
  if (tag === 'rect') {
    const x = n('x', box.width) ?? 0, y = n('y', box.height) ?? 0;
    const w = n('width', box.width), h = n('height', box.height);
    return w === null || h === null ? null : [x + w / 2, y + h / 2];
  }
  if (tag === 'circle' || tag === 'ellipse') {
    const cx = n('cx', box.width) ?? 0, cy = n('cy', box.height) ?? 0;
    return [cx, cy];
  }
  if (tag === 'line') {
    const x1 = n('x1', box.width) ?? 0, y1 = n('y1', box.height) ?? 0;
    const x2 = n('x2', box.width) ?? 0, y2 = n('y2', box.height) ?? 0;
    return [(x1 + x2) / 2, (y1 + y2) / 2];
  }
  if (tag === 'polygon' || tag === 'polyline') {
    const numbers = (attrValue(attrs, 'points') ?? '').match(PATH_NUMBER)?.map(Number) ?? [];
    if (numbers.length < 6 || numbers.length % 2) return null;
    let sx = 0, sy = 0;
    for (let i = 0; i < numbers.length; i += 2) { sx += numbers[i]; sy += numbers[i + 1]; }
    return [sx / (numbers.length / 2), sy / (numbers.length / 2)];
  }
  return null;               // `path`: no honest centre from a regex
}

function shapeKeepsWhite(
  tag: string, attrs: string, at: number, box: Box | null, shapes: Backdrop[],
): boolean {
  if (!shapes.length || !box) return false;
  if (attrValue(attrs, 'transform') !== null) return false;
  const point = shapeReferencePoint(tag, attrs, box);
  return point !== null && keepsWhiteOver(point[0], point[1], at, shapes);
}

/**
 * Is this white fill the PAGE — the rect an authored figure paints over the
 * board's own paper before drawing anything?
 *
 * This is the one question asked before any other, and the only one whose
 * answer is `transparent` unconditionally. Everything else white is judged by
 * what is behind it (`shapeKeepsWhite`) and otherwise keeps the pre-fix
 * `transparent`, because — measured over all 1,226 stored figures — THERE IS NO
 * WHITE SHAPE IN THIS CORPUS THAT WANTS INK. Every candidate turned out to be a
 * knockout whose ink is a solid black hole in the picture:
 *
 *   - `Aldehydes / distinguishing tests`: the Ketone tube's contents, captioned
 *     "Colorless", inked to a solid black tube;
 *   - `Thermal / calorimetry`: the thermometer's empty column above the mercury,
 *     inked to a black stem;
 *   - `Wave Optics / diffraction` seg 8: the slits punched out of the barrier;
 *   - and with an area threshold rather than a stroke test, 194 of the 1,226
 *     figures changed, almost all of them bordered call-out boxes and open node
 *     dots turning into black slabs over their own dark text.
 *
 * So `BACKGROUND_AREA_SHARE` decides ONE thing — page or not-page — and the
 * not-page branch never inks. What would reopen this: a figure that draws a
 * white mark on the bare board and means it to be seen. None exists today, and
 * the fix then is a rule for that mark, not a threshold.
 *
 * `null` means unmeasurable, which only a `rect`/`path` can be, and which takes
 * the same `transparent` as not-page.
 */
function isPage(
  tag: string,
  attrs: string,
  box: Box | null,
  containerTransform: boolean,
): boolean {
  if (tag !== 'rect' && tag !== 'path') return false;
  // No viewBox is not a real case — the component drops such a figure rather
  // than guess its aspect — but the transform runs before that check.
  if (!box) return false;
  if (containerTransform || attrValue(attrs, 'transform') !== null) return false;
  const share =
    tag === 'rect' ? rectAreaShare(attrs, box) : pathAreaShare(attrValue(attrs, 'd') ?? '', box);
  return share !== null && share >= BACKGROUND_AREA_SHARE;
}

/**
 * `#ffffff`, per element rather than per string.
 *
 * Handled: `fill`/`stroke` as an attribute or inside `style="…"`, in either
 * quote style, on any element — `text`, `tspan`, `rect`, `path` and the rest —
 * with `#fff` / `#ffff` / `#ffffff` / `#ffffffff` / `white` in any casing.
 *
 * NOT handled, deliberately, and each is left as authored:
 * - `rgb()` / `hsl()` / near-whites (see `WHITE`).
 * - CSS in a `<style>` element or reached through a `class` — neither is on the
 *   server's whitelist, and a selector cannot be resolved without a real parse.
 * - Inherited paint from a container (see `CONTAINER_TAGS`).
 * - `stop-color`, `flood-color`, `lighting-color`, and a white gradient or
 *   pattern behind `fill="url(#…)"`. The old blanket swap turned a white
 *   gradient stop into `transparent`, which was never right for a stop either;
 *   these now keep their white.
 * - `fill-opacity` / `opacity`: a label at `fill-opacity="0.05"` inks at 0.05
 *   and stays near-invisible. Nothing here reads them.
 * - `transform`, on the element or an ancestor (see `CONTAINER_TRANSFORM`).
 *
 * `rewrites` counts the paint values actually changed. It exists for the test's
 * vacuity guard: a pass whose regexes match nothing would otherwise "handle"
 * every case in the corpus perfectly.
 */
export function remapWhitePaint(svg: string): { svg: string; rewrites: number } {
  const box = parseViewBox(svg);
  const containerTransform = CONTAINER_TRANSFORM.test(svg);
  const shapes = backdrops(svg, box, containerTransform);
  let rewrites = 0;

  const out = svg.replace(TAG, (whole: string, name: string, attrs: string,
                                slash: string, offset: number) => {
    const tag = name.toLowerCase();
    const fill = paintOf(attrs, 'fill');
    const stroke = paintOf(attrs, 'stroke');
    const fillWhite = fill !== null && isWhite(fill);
    const strokeWhite = stroke !== null && isWhite(stroke);
    if (!fillWhite && !strokeWhite) return whole;

    const container = CONTAINER_TAGS.has(tag);
    const label = tag === 'text' || tag === 'tspan';
    // What is painted behind this element, asked once and used by both paints.
    const overDark = container
      ? false
      : label
        ? labelKeepsWhite(attrs, offset, shapes)
        : shapeKeepsWhite(tag, attrs, offset, box, shapes);

    // The page is the page whatever is behind it — nothing is, it is first.
    const page = fillWhite && (container || isPage(tag, attrs, box, containerTransform));
    let fillTarget: string | null = null;
    if (fillWhite) {
      fillTarget = page
        ? 'transparent'
        : overDark
          ? null                        // leave it exactly as authored
          : label
            ? INK                       // the bug this pass exists for
            : 'transparent';            // a shape is never inked; see `isPage`
    }
    // A white stroke is ink — a leader line, an arrow, an outlined label — with
    // one exception: on an element whose white fill we just stripped, inking
    // the stroke would draw a frame around the whole figure that nobody drew.
    // The exception keys on the PAGE, not on "the fill went transparent" — every
    // non-page white shape strips too, and suppressing their strokes as well
    // would leave a white-on-white marker with nothing drawn at all.
    const strokeTarget = !strokeWhite
      ? null
      : container || page
        ? 'transparent'
        : overDark
          ? null
          : INK;

    let changed = 0;
    let next = attrs.replace(
      STYLE_ATTR,
      (_style: string, lead: string, eq: string, quote: string, body: string) => {
        const rebuilt = body
          .split(';')
          .map((declaration) => {
            const colon = declaration.indexOf(':');
            if (colon < 0) return declaration;
            const prop = declaration.slice(0, colon).trim().toLowerCase();
            const target = prop === 'fill' ? fillTarget : prop === 'stroke' ? strokeTarget : null;
            if (target === null || !isWhite(declaration.slice(colon + 1))) return declaration;
            changed += 1;
            return `${declaration.slice(0, colon)}:${target}`;
          })
          .join(';');
        return `${lead}style${eq}${quote}${rebuilt}${quote}`;
      },
    );
    next = next.replace(
      PAINT_ATTR,
      (paint: string, lead: string, prop: string, eq: string, quote: string, value: string) => {
        const target = prop.toLowerCase() === 'fill' ? fillTarget : strokeTarget;
        if (target === null || !isWhite(value)) return paint;
        changed += 1;
        return `${lead}${prop}${eq}${quote}${target}${quote}`;
      },
    );

    if (!changed) return whole;
    rewrites += changed;
    return `<${name}${next}${slash}>`;
  });

  return { svg: out, rewrites };
}

/**
 * Attaches the font to the root element rather than to each label.
 *
 * `font-family` inherits, so one attribute covers every `<text>` in the tree —
 * and it leaves each label's own `font-size` untouched, which is required:
 * those sizes are what the author's scaling maths was computed against.
 */
function withFont(svg: string): string {
  return svg.replace(/<svg\b/i, `<svg font-family="${DIAGRAM_FONT}"`);
}

/**
 * The whole string transform, in order: white paint first, so it reads the nine
 * authored colours rather than their house replacements, then the flat palette
 * swap (which cannot touch `#1C1A16` or `transparent`), then the font.
 *
 * Exported for the test file; the component's only caller is below.
 */
export function prepareDiagramSvg(svg: string): string {
  return withFont(housePalette(remapWhitePaint(svg).svg));
}

/**
 * WILL THIS FIGURE DRAW — decided before anything is rendered, and the same
 * answer for every caller.
 *
 * Two ways a stored svg is refused, both reported as `svg_invalid`:
 *
 *   - it does not PARSE (U5). Put through react-native-svg's own `parse` — the
 *     function `SvgXml` would call — via `svgParseError`. This used to be left
 *     to `SvgXml`'s `fallback`/`onError`, which caught the throw, printed a
 *     warning and drew an empty View: a silent blank that `gap_report.py`
 *     could not see, found by the offline corpus check on an unclosed `<g>`.
 *     Asking first makes the outcome deterministic and lets the CALLER fall to
 *     its next rung, which a fallback element never can;
 *   - it cannot be SIZED (S3): no viewBox, no root width/height, no content.
 *
 * The stored string is parsed first, so the parser's offsets point into what
 * the corpus holds; the prepared string — what `SvgXml` actually receives —
 * is parsed too, and a failure there is labelled as ours, not the author's.
 *
 * `reason` stays a readable phrase (S3's detail already carried one) and
 * `error` is the parser's own message; `bytes` is UTF-8, matching the column
 * the corpus check measures.
 */
export const SVG_UNSIZABLE = 'no viewBox, no width/height, no content bounds';

export type DiagramVerdict =
  | { ok: true; xml: string; box: Box; source: BoxSource }
  | { ok: false; bytes: number; reason: string; error?: string };

/** The `svg_invalid` detail for a refusal, shared with `BoardBlockView` so
 *  both report the same shape. */
export function svgInvalidDetail(
  refused: Extract<DiagramVerdict, { ok: false }>,
): { bytes: number; reason: string; error?: string } {
  return refused.error === undefined
    ? { bytes: refused.bytes, reason: refused.reason }
    : { bytes: refused.bytes, reason: refused.reason, error: refused.error };
}

export function diagramVerdict(svg: string): DiagramVerdict {
  const bytes = utf8ByteLength(svg);
  const stored = svgParseError(svg);
  if (stored !== null) return { ok: false, bytes, reason: 'does not parse', error: stored };

  const sized = diagramBox(svg);
  if (!sized) return { ok: false, bytes, reason: SVG_UNSIZABLE };

  let xml = prepareDiagramSvg(svg);
  if (sized.source !== 'viewBox') {
    // A DERIVED box has to be written INTO the markup, not just used for
    // layout: `SvgXml` sizes the drawing from the root element, and a figure
    // with no viewBox renders at its intrinsic size inside whatever width and
    // height we pass, which is how a 640x260 plate ends up as a dot in the
    // corner of the board.
    const { minX, minY, width, height } = sized.box;
    xml = xml.replace(/<svg\b/i, `<svg viewBox="${minX} ${minY} ${width} ${height}"`);
  }
  const prepared = svgParseError(xml);
  if (prepared !== null) {
    return { ok: false, bytes, reason: 'does not parse after board preparation', error: prepared };
  }
  return { ok: true, xml, box: sized.box, source: sized.source };
}

export function BoardDiagram({
  svg,
  caption,
  availableWidth,
  maxHeight,
  onGap,
}: {
  svg: string;
  caption?: string;
  /** Same contract as BoardWidget's: a figure that cannot be drawn says so. */
  onGap?: (reason: string, detail: unknown) => void;
  /** Board content width — the widest the figure may be drawn. */
  availableWidth: number;
  /** The tallest it may be drawn, so it cannot swallow the whole board. */
  maxHeight: number;
}) {
  const verdict = useMemo(() => diagramVerdict(svg), [svg]);

  // Reported, not swallowed. `onGap` is called from an effect rather than
  // during render: `BoardWidget`'s own gaps are render-time calls and this
  // component is reached from the same tree, but this one can fire on the very
  // first commit of a figure that never changes, and a setState in a parent
  // during render is the one thing that turns a missing picture into a broken
  // screen.
  //
  // `BoardBlockView` asks `diagramVerdict` itself before mounting this, so on
  // the board a refused figure never reaches here and is reported THERE, with
  // its rung and the chain's terminal gap after it. This effect is the guard
  // for any other caller: it still refuses to hand `SvgXml` a string that will
  // not draw, and still says so.
  useEffect(() => {
    if (!verdict.ok) {
      onGap?.('svg_invalid', svgInvalidDetail(verdict));
    } else if (verdict.source !== 'viewBox') {
      onGap?.('svg_viewbox_derived', { source: verdict.source, ...verdict.box });
    }
  }, [verdict, onGap]);

  // Unsizable or unparseable: drawing it would either distort the geometry the
  // author computed or hand the renderer a string it will throw on. The caller
  // has been told, so this is a reported fall rather than a silent blank.
  if (!verdict.ok) return null;
  const box = verdict.box;

  /**
   * Height is the binding constraint here, which inverts the web app's problem.
   *
   * The handoff's sizing maths is written for a portrait column ~300px wide and
   * warns about labels shrinking below legibility. The classroom board is
   * landscape and its content box is far wider — a 340×240 canvas drawn to full
   * width would stand taller than the whole screen. So fit to the height first
   * and let width follow: on an iPhone 17 that lands near 354pt, comfortably
   * above the ~300px floor the handoff flags, so labels stay legible without
   * anyone retuning `DETAIL_LEVELS`.
   */
  const aspect = box.width / box.height;
  const width = Math.min(availableWidth, maxHeight * aspect);
  const height = width / aspect;

  return (
    <View style={styles.wrap}>
      {/* No overflow:hidden anywhere on this path. A label can sit a hair
          outside the viewBox, and clipping cuts it off mid-word.

          `fallback`/`onError` are the library's own guard against a parse that
          throws. `diagramVerdict` has already run the same parser on this
          exact string, so this is unreachable — but it runs mid-class, and a
          figure failing to draw must cost the student a figure, not the
          lesson. */}
      <SvgXml
        xml={verdict.xml}
        width={width}
        height={height}
        fallback={<View />}
        onError={(err) => console.warn('[board-diagram] could not draw a figure:', err)}
      />
      {caption ? <Text style={styles.caption}>{caption}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    // Breathing room rather than a clip: gives a slightly-oversized label
    // somewhere to land instead of being cut.
    paddingVertical: 8,
    paddingHorizontal: 4,
    alignItems: 'flex-start',
  },
  caption: {
    fontFamily: 'Onest_400Regular',
    fontSize: 12.5,
    lineHeight: 18,
    color: INK_MUTED,
    marginTop: 4,
  },
});
