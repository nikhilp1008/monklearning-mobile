import { C, LABEL_GAP, Rect, Sketch, mathW, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * MATHEMATICS CLASS 11, CHAPTER 2 (Relations and Functions): every drawing of the Master Reference book
 * (October edition) on pp. 101–176, redrawn. TWELVE drawings: the seven of Topics 01–04 and the range addendum,
 * then the five of the Additional topics (their own section at the end of the file; K has none).
 *
 *   Figure 2.1 (p. 104; caption first on p. 103), Topic 01, topic index 0.
 *   Figure 2.2 (p. 114; caption p. 113), Topic 02, index 1.
 *   Topic 03's own "Figure 1" (p. 121, the vertical line test), m11-02-03-d1, index 2.
 *   Topic 03's own "Figure 2" (p. 123, graphs of six standard functions), m11-02-03-d2, index 2.
 *   Figure 2.5 (p. 150; caption p. 149), the range addendum's figure, shown in Example 6 of Topic 03, index 2.
 *   Figure 2.3 (p. 132; caption p. 131) and Figure 2.4 (p. 136; caption p. 135), Topic 04, index 3.
 *   Addendum F's "Figure 1" (p. 155), m11-02-F-d1, index 4; G's "Figure 2" (p. 158), m11-02-G-d1, index 5;
 *   H's "Figure 3" (p. 162), m11-02-H-d1, index 6; I's "Figure 4" (p. 166), m11-02-I-d1, index 7;
 *   J's "Figure 5" (p. 170), m11-02-J-d1, index 8.
 *
 * NO FILLS. The book's tinted cells and band (Fig 2.3's diagonal, Fig 2.5's range band) are marigold hatching,
 * the drawing's one highlight, computed line by line from the region it shades and kept clear of every label, line
 * and dot. Elsewhere the highlight is the thing the drawing is about: Fig 2.2's ring round 7 and its note, "Figure
 * 1"'s vertical test lines and the points where they meet the curve, "Figure 2"'s graph itself. Fig 2.1 and Fig 2.4
 * (no shading in the book) carry none; the book's second and third colours there are ink. In the additional topics:
 * F the line x = 3 and its meeting points (filled dots); G the failure (f(x′), the cross, the dashed arrow, "g undefined"), with Dom(g),
 * the book's neutral tint, hatched in grey; H the dashed reflected half; I the band 1 ≤ x ≤ 2 hatched with T = 1;
 * J the roots' rings (panels 1–3) and the mirror branch −f (panel 4), whose empty strip is hatched in grey.
 * Multi-panel figures are cases (one panel per chip, full phone width), except I's two stacked panels, which are
 * one comparison. The book's ✗ and ✓ are drawn as strokes, not glyphs.
 *
 * GRAPHS: axes with arrowheads, named x, y and O, in grey; every curve built from its equation; open and closed
 * dots exactly as drawn (hollow and filled). The book's matplotlib panels (pp. 121, 123) are boxed with a grid and
 * numbered on the box's edge; here the axes cross at O, the grid is left out, and each tick is numbered beside its
 * own axis, the value 0 being the O. Asymptote y = 0 (Fig 2.5) dashed, as printed.
 *
 * ERRATA (p. 1258, "Remaining known issues"): "Figure 2", greatest-integer panel: the book's axes stop at ±4 and cut
 * the [−4, −3) step and the open dot at (4, 3) in half. Drawn whole here: the axes run to ±4.7, with a filled dot at
 * (−4, −4) and an open dot at (4, 3).
 *
 * FRACTIONS are stacked by hand (two runs and a short rule): Fig 2.5's ½ and −½ at the band's edges, (1, ½),
 * (−1, −½) and Range = [−½, ½]; its caption's x/(1 + x²), 1/2 and −1/2 are written <frac> (the reader stacks them).
 *
 * THE BOOK'S VALUES: every label, element, pair, tick and region name is as printed; the one em dash (Fig 2.3's
 * legend "I_A — all three …") is a colon. Positions are re-laid for a phone; every graph is to scale on its axes.
 */

const W = 340;
type P = [number, number];
const fmt = (n: number, d = 2) => String(+n.toFixed(d)).replace('-', '−');
const len = (a: P, b: P) => Math.hypot(b[0] - a[0], b[1] - a[1]);
const plain = (html: string) => html.replace(/<[^>]+>/g, '');
const widthOf = (html: string, size: number) => Math.max(mathW(html, size), plain(html).length * size * 0.5);
const centre = (r: Rect): P => [(r[0] + r[2]) / 2, (r[1] + r[3]) / 2];
const I = (t: string) => `<i>${t}</i>`;
const same = (a: unknown[], b: unknown[]) => a.length === b.length && a.every((x, i) => x === b[i]);
const close = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) < tol;

/* ---------- lines, labels and the layout checks (as in mathematics-11-01.ts) ---------- */
type Stroke = { color?: string; w?: number; dash?: boolean; name?: string };
/** Every line a label must keep clear of, by sketch, with its name so a check can read it back. */
const LINES = new WeakMap<Sketch, { name: string; pts: P[] }[]>();
const keep = (s: Sketch, pts: P[], name = '') => { const l = LINES.get(s) ?? []; l.push({ name, pts }); LINES.set(s, l); };
const linesNamed = (s: Sketch, re: RegExp) => (LINES.get(s) ?? []).filter((l) => re.test(l.name));
function path(s: Sketch, pts: P[], o: Stroke = {}) {
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ');
  s.add(`<path d="${d}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}" stroke-linejoin="round" stroke-linecap="round"${o.dash ? ' stroke-dasharray="5 4"' : ''}/>`);
  keep(s, pts, o.name);
}
const rectPts = (r: Rect): P[] => [[r[0], r[1]], [r[2], r[1]], [r[2], r[3]], [r[0], r[3]], [r[0], r[1]]];
/** An oval (a circle when rx = ry), kept as a fine polygon for the clearance check. */
function oval(s: Sketch, c: P, rx: number, ry: number, o: Stroke = {}) {
  s.add(`<ellipse cx="${r1(c[0])}" cy="${r1(c[1])}" rx="${r1(rx)}" ry="${r1(ry)}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}"${o.dash ? ' stroke-dasharray="5 4"' : ''}/>`);
  keep(s, Array.from({ length: 241 }, (_, i): P => [c[0] + rx * Math.cos((2 * Math.PI * i) / 240), c[1] + ry * Math.sin((2 * Math.PI * i) / 240)]), o.name);
}
/** An arrow (a line and a filled head), kept for the clearance check. */
function arrow(s: Sketch, a: P, b: P, o: Stroke = {}) {
  s.vec(a[0], a[1], b[0], b[1], { color: o.color ?? C.ink, w: o.w ?? 1.5, dash: o.dash });
  keep(s, [a, b], o.name);
}
const rectDist = (r: Rect, p: P) => Math.hypot(Math.max(r[0] - p[0], 0, p[0] - r[2]), Math.max(r[1] - p[1], 0, p[1] - r[3]));
const boxToLine = (r: Rect, pts: P[]) => {
  let gap = Infinity;
  for (let i = 0; i < pts.length - 1; i++) {
    const a = pts[i], b = pts[i + 1], n = Math.max(1, Math.ceil(len(a, b) * 2));
    for (let k = 0; k <= n; k++) gap = Math.min(gap, rectDist(r, [a[0] + ((b[0] - a[0]) * k) / n, a[1] + ((b[1] - a[1]) * k) / n]));
  }
  if (pts.length === 1) gap = rectDist(r, pts[0]);
  return gap;
};
/** Distance from p to a polyline. */
function toPoly(p: P, pts: P[]): number {
  let d = Infinity;
  for (let i = 0; i < pts.length - 1; i++) {
    const a = pts[i], b = pts[i + 1], dx = b[0] - a[0], dy = b[1] - a[1], L = dx * dx + dy * dy || 1;
    const k = Math.max(0, Math.min(1, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / L));
    d = Math.min(d, Math.hypot(p[0] - a[0] - k * dx, p[1] - a[1] - k * dy));
  }
  return d;
}
function clearance(s: Sketch): { gap: number; what: string } {
  let gap = Infinity, what = '';
  const boxes: [string, Rect][] = [...s.tags.map((t): [string, Rect] => [t.name, t.rect]), ...s.labels.map((l): [string, Rect] => [l.text, l.rect])];
  for (const { pts } of LINES.get(s) ?? []) for (const [name, r] of boxes) { const d = boxToLine(r, pts); if (d < gap) { gap = d; what = name; } }
  return { gap, what };
}
const clearCheck = (s: Sketch): Check => {
  const { gap, what } = clearance(s);
  return [`Every label stays at least ${LABEL_GAP} px clear of every line, curve, dot and hatch stroke: the closest is "${what}", ${fmt(gap, 1)} px`, gap >= LABEL_GAP - 1e-9];
};
const labelsApart = (s: Sketch): Check => {
  const L = s.labels;
  const bad = L.flatMap((a, i) => L.slice(i + 1).filter((b) => !(a.rect[2] + 2 <= b.rect[0] || b.rect[2] + 2 <= a.rect[0] || a.rect[3] + 2 <= b.rect[1] || b.rect[3] + 2 <= a.rect[1])).map((b) => `${a.text} / ${b.text}`));
  return [`No two labels on the drawing touch${bad.length ? `: ${bad.join(', ')}` : ''}`, bad.length === 0];
};
const inFrame = (s: Sketch): Check => {
  const out = s.labels.filter((l) => l.rect[0] < 0 || l.rect[2] > s.w || l.rect[1] < 0 || l.rect[3] > s.h).map((l) => l.text);
  return [`Every label lies inside the frame${out.length ? `: not ${out.join(', ')}` : ''}`, out.length === 0];
};
const layout = (s: Sketch): Check[] => [clearCheck(s), labelsApart(s), inFrame(s)];
const labelsNamed = (s: Sketch, t: string) => s.labels.filter((l) => l.text === t);
const hasLabel = (s: Sketch, t: string) => labelsNamed(s, t).length > 0;
const allLabels = (s: Sketch, ts: string[]) => ts.filter((t) => !hasLabel(s, t));

/** A line of STIX on the drawing, from its baseline, its box at its true width (subscripts counted). */
function lab(s: Sketch, x: number, y: number, html: string, o: { size?: number; anchor?: 'start' | 'middle' | 'end'; color?: string } = {}): Rect {
  const size = o.size ?? 13, anchor = o.anchor ?? 'middle', w = widthOf(html, size);
  const x0 = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w : x;
  const rect: Rect = [x0, y - size * 0.72, x0 + w, y + size * (html.includes('<sub>') ? 0.36 : 0.22)];
  s.labels.push({ text: plain(html), rect });
  s.text(x, y, html, { size, anchor, color: o.color ?? C.text });
  return rect;
}

/* ---------- stacked fractions, drawn by hand ---------- */
type Piece = { t: string } | { num: string; den: string };
/** Every stacked fraction drawn, so a check can see it really is stacked: numerator over the rule over denominator. */
const FRACS = new WeakMap<Sketch, { num: string; den: string; rule: [number, number, number]; numY: number; denY: number; numW: number; denW: number }[]>();
const FRAC_PAD = 2;
const fracW = (num: string, den: string, size: number) => Math.max(widthOf(num, size), widthOf(den, size)) + 2 * FRAC_PAD;
/** A stacked fraction centred on x with its rule at y. */
function frac(s: Sketch, x: number, y: number, num: string, den: string, size: number, color: string): Rect {
  const w = fracW(num, den, size), numY = y - 3, denY = y + 3 + size * 0.68;
  s.text(x, numY, num, { size, color });
  s.text(x, denY, den, { size, color });
  s.add(`<line x1="${r1(x - w / 2)}" y1="${r1(y)}" x2="${r1(x + w / 2)}" y2="${r1(y)}" stroke="${color}" stroke-width="1.1"/>`);
  FRACS.set(s, [...(FRACS.get(s) ?? []), { num, den, rule: [x - w / 2, x + w / 2, y], numY, denY, numW: widthOf(num, size), denW: widthOf(den, size) }]);
  return [x - w / 2, numY - size * 0.72, x + w / 2, denY + size * 0.22];
}
const pieceW = (p: Piece, size: number) => ('t' in p ? mathW(p.t, size) : fracW(p.num, p.den, size) + 2);
/** One label made of runs: text and stacked fractions (their rule on the maths axis). Registered as ONE label. */
function runs(s: Sketch, x: number, y: number, parts: Piece[], o: { size?: number; anchor?: 'start' | 'middle' | 'end'; color?: string } = {}): Rect {
  const size = o.size ?? 13, color = o.color ?? C.text, ws = parts.map((p) => pieceW(p, size)), total = ws.reduce((a, b) => a + b, 0);
  let at = o.anchor === 'middle' ? x - total / 2 : o.anchor === 'end' ? x - total : x;
  const box: Rect = [at, y - size * 0.72, at + total, y + size * 0.22];
  parts.forEach((p, i) => {
    if ('t' in p) s.text(at, y, p.t, { size, anchor: 'start', color });
    else {
      const r = frac(s, at + ws[i] / 2, y - size * 0.27, p.num, p.den, size, color);
      box[1] = Math.min(box[1], r[1]); box[3] = Math.max(box[3], r[3]);
    }
    at += ws[i];
  });
  s.labels.push({ text: parts.map((p) => ('t' in p ? plain(p.t) : `${plain(p.num)}/${plain(p.den)}`)).join(''), rect: box });
  return box;
}

/* ---------- hatching: the book's shading, as lines ---------- */
/**
 * Marigold hatching at 45° over every point `inside` says is shaded, kept `gap` px clear of each label and each
 * rect in `avoid`. Built line by line at half-pixel steps; each stroke is kept for the clearance check and returned
 * so a check can test that it lies in the shaded region.
 */
function hatch(s: Sketch, inside: (p: P) => boolean, box: Rect, o: { step?: number; avoid?: Rect[]; gap?: number; keepAs?: string; color?: string } = {}): [P, P][] {
  const step = (o.step ?? 7) * Math.SQRT2, gap = o.gap ?? LABEL_GAP + 1, avoid = [...s.labels.map((l) => l.rect), ...(o.avoid ?? [])];
  const ok = (p: P) => inside(p) && avoid.every((r) => rectDist(r, p) >= gap);
  const segs: [P, P][] = [];
  for (let k = box[0] + box[1] + step / 2; k <= box[2] + box[3]; k += step) {
    const xa = Math.max(box[0], k - box[3]), xb = Math.min(box[2], k - box[1]);
    let a: P | null = null, b: P | null = null;
    const end = () => { if (a && b && len(a, b) >= 3) segs.push([a, b]); a = null; };
    for (let x = xa; x <= xb + 1e-9; x += 0.5) {
      const p: P = [x, k - x];
      if (ok(p)) { if (!a) a = p; b = p; } else end();
    }
    end();
  }
  s.add(`<path d="${segs.map(([a, b]) => `M${r1(a[0])} ${r1(a[1])} L${r1(b[0])} ${r1(b[1])}`).join(' ')}" fill="none" stroke="${o.color ?? C.mari}" stroke-width="1" stroke-linecap="round"/>`);
  segs.forEach((sg) => keep(s, sg, o.keepAs ?? 'hatch'));
  return segs;
}
const HATCH = new WeakMap<Sketch, [P, P][]>();
/** Every hatch stroke's ends and middle pass the test. */
const hatchAll = (s: Sketch, test: (p: P) => boolean) => (HATCH.get(s) ?? []).every(([a, b]) => test(a) && test(b) && test([(a[0] + b[0]) / 2, (a[1] + b[1]) / 2]));

/* ---------- graphs: axes through O, curves from their equations, open and closed dots ---------- */
/** A graph's frame: where O is, px per unit along each axis, and how far each axis runs (in units). */
type Gr = { ox: number; oy: number; ux: number; uy: number; x: [number, number]; y: [number, number] };
const gx = (g: Gr, v: number) => g.ox + v * g.ux;
const gy = (g: Gr, v: number) => g.oy - v * g.uy;
const gp = (g: Gr, p: P): P => [gx(g, p[0]), gy(g, p[1])];
const unPx = (g: Gr, p: P): P => [(p[0] - g.ox) / g.ux, (g.oy - p[1]) / g.uy];
type AxOpt = {
  xt?: number[]; yt?: number[];
  /** Where O sits: below left or below right of the crossing. */
  O?: 'bl' | 'br';
  /** The y-axis's name to the right of its arrow (default) or to the left. */
  yName?: 'right' | 'left';
  /** A tick value moved up (−) or down (+) off a line that runs through its usual spot. */
  ydy?: Record<string, number>;
  /** Tick values numbered to the right of the y-axis (a line runs through the usual left-hand spot). */
  yRight?: string[];
  /** How far below the x-axis its numbers sit (baseline, default 17), and which numbers sit above it instead. */
  xdy?: number; xAbove?: string[];
  /** A number moved sideways off a curve that runs down through its usual spot. */
  xdx?: Record<string, number>;
  /** No O at the crossing; or O at its own offset from the crossing (baseline point and anchor). */
  noO?: boolean; Oat?: [number, number, 'start' | 'end'];
};
const AXIS_W = 1.3;
function axes(s: Sketch, g: Gr, o: AxOpt = {}) {
  const xL = gx(g, g.x[0]), xR = gx(g, g.x[1]), yB = gy(g, g.y[0]), yT = gy(g, g.y[1]);
  arrow(s, [xL, g.oy], [xR, g.oy], { color: C.slate, w: AXIS_W, name: 'axis:x' });
  arrow(s, [g.ox, yB], [g.ox, yT], { color: C.slate, w: AXIS_W, name: 'axis:y' });
  lab(s, xR + 5, g.oy + 5, I('x'), { anchor: 'start', size: 15 });
  if (o.yName === 'left') lab(s, g.ox - 7, yT + 6, I('y'), { anchor: 'end', size: 15 });
  else lab(s, g.ox + 7, yT + 6, I('y'), { anchor: 'start', size: 15 });
  (o.xt ?? []).forEach((t) => {
    const x = gx(g, t);
    s.line(x, g.oy - 4, x, g.oy + 4, { color: C.slate, w: 1.1 });
    keep(s, [[x, g.oy - 4], [x, g.oy + 4]], `tick:x:${t}`);
    lab(s, x + (o.xdx?.[String(t)] ?? 0), o.xAbove?.includes(String(t)) ? g.oy - 11 : g.oy + (o.xdy ?? 17), fmt(t), { size: 11.5, color: C.slate });
  });
  (o.yt ?? []).forEach((t) => {
    const y = gy(g, t);
    s.line(g.ox - 4, y, g.ox + 4, y, { color: C.slate, w: 1.1 });
    keep(s, [[g.ox - 4, y], [g.ox + 4, y]], `tick:y:${t}`);
    const right = o.yRight?.includes(String(t));
    lab(s, g.ox + (right ? 10 : -10), y + 4 + (o.ydy?.[String(t)] ?? 0), fmt(t), { anchor: right ? 'start' : 'end', size: 11.5, color: C.slate });
  });
  if (o.noO) return;
  if (o.Oat) { lab(s, g.ox + o.Oat[0], g.oy + o.Oat[1], I('O'), { anchor: o.Oat[2], size: 13 }); return; }
  if (o.O === 'br') lab(s, g.ox + 7, g.oy + 17, I('O'), { anchor: 'start', size: 13 });
  else lab(s, g.ox - 7, g.oy + 17, I('O'), { anchor: 'end', size: 13 });
}
/** A curve through data points (x, y). */
function curve(s: Sketch, g: Gr, pts: P[], o: Stroke = {}) {
  path(s, pts.map((p) => gp(g, p)), { color: o.color ?? C.ink, w: o.w ?? 2, dash: o.dash, name: o.name ?? 'curve' });
}
const sample = (f: (x: number) => number, a: number, b: number, n = 160): P[] => Array.from({ length: n + 1 }, (_, i) => { const x = a + ((b - a) * i) / n; return [x, f(x)]; });
const DOTS = new WeakMap<Sketch, { x: number; y: number; open: boolean }[]>();
const DOT_R = 4.2;
/** A dot at data point (x, y): filled when the value is taken, hollow when it is not. Kept as a ring for the clearance check. */
function gdot(s: Sketch, g: Gr, x: number, y: number, open: boolean, col: string = C.ink) {
  const [px, py] = gp(g, [x, y]);
  s.point(px, py, DOT_R, open ? `<circle cx="${r1(px)}" cy="${r1(py)}" r="${DOT_R}" fill="#fff" stroke="${col}" stroke-width="1.8"/>` : `<circle cx="${r1(px)}" cy="${r1(py)}" r="${DOT_R}" fill="${col}"/>`);
  keep(s, Array.from({ length: 25 }, (_, i): P => [px + (DOT_R + 1) * Math.cos((2 * Math.PI * i) / 24), py + (DOT_R + 1) * Math.sin((2 * Math.PI * i) / 24)]), 'dot');
  DOTS.set(s, [...(DOTS.get(s) ?? []), { x, y, open }]);
}
/** The curves drawn, read back off the drawing as data points. */
const curvesBack = (s: Sketch, g: Gr, re = /^curve/) => linesNamed(s, re).map((l) => l.pts.map((p) => unPx(g, p)));

/* ===================================================================== */
/* Figure 2.1 · A × B as a grid of points (Topic 01, p. 104)             */
/* ===================================================================== */
const CAP21 = 'The six ordered pairs of <i>A</i> × <i>B</i>: every size meets every flavour exactly once.';
/** p. 104: the sizes along A, the flavours up B, as printed. */
const A21 = ['S', 'M', 'L'], B21 = ['Adrak', 'Elaichi'];
const G21 = { ox: 78, oy: 196, cols: [132, 210, 288], rows: [146, 80], xEnd: 322, yEnd: 40 };
const PTS21 = new WeakMap<Sketch, { a: string; b: string; p: P }[]>();
const pair21 = (a: string, b: string) => `(${a}, ${b})`;
const fig21: Diagram = {
  id: 'm11-02-fig-2.1',
  topic: 0,
  name: 'A × B as a grid of points',
  cases: [{ chip: 'Six pairs', cap: CAP21 }],
  draw() {
    const s = new Sketch(W, 256), G = G21, pts: { a: string; b: string; p: P }[] = [];
    arrow(s, [G.ox, G.oy], [G.xEnd, G.oy], { color: C.ink, w: 1.5, name: 'axis:A' });
    arrow(s, [G.ox, G.oy], [G.ox, G.yEnd], { color: C.ink, w: 1.5, name: 'axis:B' });
    lab(s, G.xEnd + 5, G.oy + 6, I('A'), { anchor: 'start', size: 17 });
    lab(s, G.ox, G.yEnd - 10, I('B'), { size: 17 });
    A21.forEach((a, i) => lab(s, G.cols[i], G.oy + 21, a, { size: 15 }));
    B21.forEach((b, j) => lab(s, G.ox - 10, G.rows[j] + 5, b, { anchor: 'end', size: 14.5 }));
    // the dashed guides: each row from B's axis past L, each column from A's axis up, broken under the pair names
    B21.forEach((_, j) => { s.line(G.ox, G.rows[j], G.xEnd - 14, G.rows[j], { color: C.grey, w: 1, dash: true }); keep(s, [[G.ox, G.rows[j]], [G.xEnd - 14, G.rows[j]]], `guide:row:${j}`); });
    const size = 11.5, nameY = (j: number) => G.rows[j] - 11;
    A21.forEach((_, i) => {
      const x = G.cols[i], top = nameY(1) - size * 0.72 - 6;
      s.line(x, G.oy, x, G.rows[0] + 1, { color: C.grey, w: 1, dash: true });
      keep(s, [[x, G.oy], [x, G.rows[0]]], `guide:col:${i}`);
      s.line(x, nameY(0) - size * 0.72 - 6, x, top + 2, { color: C.grey, w: 1, dash: true });
      keep(s, [[x, nameY(0) - size * 0.72 - 6], [x, G.rows[1]]], `guide:col:${i}`);
    });
    A21.forEach((a, i) => B21.forEach((b, j) => {
      const p: P = [G.cols[i], G.rows[j]];
      s.dot(p[0], p[1], 4.2);
      lab(s, p[0], nameY(j), pair21(a, b), { size });
      pts.push({ a, b, p });
    }));
    lab(s, G.cols[1], G.oy + 48, `${I('n')}(${I('A')} × ${I('B')}) = 3 × 2 = 6`, { size: 14, color: C.slate });
    PTS21.set(s, pts);
    return s;
  },
  check() {
    const s = fig21.draw(fig21.cases[0]), out: Check[] = [], pts = PTS21.get(s)!, G = G21;
    // read each dot's pair back off the axes: its column names the size, its row the flavour
    const read = s.points.map((p) => ({ a: A21[G.cols.findIndex((x) => close(x, p.x))], b: B21[G.rows.findIndex((y) => close(y, p.y))] }));
    const want = A21.flatMap((a) => B21.map((b) => pair21(a, b))).sort();
    out.push([`${read.length} dots, read back off the axes as ${read.map((r) => pair21(r.a, r.b)).join(', ')}: every pair of A × B once, n(A × B) = 3 × 2 = ${A21.length * B21.length}`, same(read.map((r) => pair21(r.a, r.b)).sort(), want) && read.length === A21.length * B21.length]);
    out.push(['Each pair is named directly above its own dot, first coordinate the size, second the flavour', pts.every(({ a, b, p }) => labelsNamed(s, pair21(a, b)).some((l) => close(centre(l.rect)[0], p[0]) && l.rect[3] < p[1] && p[1] - l.rect[3] < 12))]);
    out.push(['The sizes S, M, L along A (left to right) and the flavours Adrak, Elaichi up B (bottom to top), as printed', A21.every((a, i) => close(centre(labelsNamed(s, a)[0].rect)[0], G.cols[i])) && B21.every((b, j) => Math.abs(centre(labelsNamed(s, b)[0].rect)[1] - G.rows[j]) < 4)]);
    const miss = allLabels(s, ['A', 'B', 'n(A × B) = 3 × 2 = 6', ...want]);
    out.push([`The labels as printed: A, B, S, M, L, Adrak, Elaichi, the six pairs and n(A × B) = 3 × 2 = 6${miss.length ? `; missing ${miss.join(', ')}` : ''}`, miss.length === 0 && 3 * 2 === 6]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 2.2 · the relation y = x + 2 as an arrow diagram (Topic 02, p. 114) */
/* ===================================================================== */
const CAP22 = 'The relation <i>y</i> = <i>x</i> + 2: element 7 is in the codomain but outside the range.';
/** p. 114: A = {1, 2, 3, 4}, B = {3, 4, 5, 6, 7}, as printed. */
const A22 = [1, 2, 3, 4], B22 = [3, 4, 5, 6, 7];
const rule22 = (x: number) => x + 2;
const G22 = { a: [88, 159] as P, b: [252, 159] as P, ra: [40, 96], rb: [48, 115], step: 42 };
const yA22 = (i: number) => G22.a[1] + (i - (A22.length - 1) / 2) * G22.step;
const yB22 = (j: number) => G22.b[1] + (j - (B22.length - 1) / 2) * G22.step;
const setText = (xs: number[]) => `{${xs.join(', ')}}`;
const fig22: Diagram = {
  id: 'm11-02-fig-2.2',
  topic: 1,
  name: 'Arrow diagram of y = x + 2',
  cases: [{ chip: 'Range and codomain', cap: CAP22 }],
  draw() {
    const s = new Sketch(W, 332), G = G22;
    oval(s, G.a, G.ra[0], G.ra[1], { w: 1.7, name: 'oval:A' });
    oval(s, G.b, G.rb[0], G.rb[1], { w: 1.7, name: 'oval:B' });
    lab(s, G.a[0], G.a[1] - G.ra[1] - 11, I('A'), { size: 18 });
    lab(s, G.b[0], G.b[1] - G.rb[1] - 10, I('B'), { size: 18 });
    lab(s, 170, 58, `${I('y')} = ${I('x')} + 2`, { size: 15, color: C.slate });
    A22.forEach((v, i) => { s.dot(G.a[0], yA22(i), 4); lab(s, G.a[0] - 14, yA22(i) + 5, String(v), { anchor: 'end', size: 15 }); });
    B22.forEach((v, j) => { s.dot(G.b[0], yB22(j), 4); lab(s, G.b[0] + 15, yB22(j) + 5, String(v), { anchor: 'start', size: 15 }); });
    // an arrow from each x in A to x + 2 in B
    A22.forEach((v, i) => { const j = B22.indexOf(rule22(v)); arrow(s, [G.a[0] + 8, yA22(i)], [G.b[0] - 8, yB22(j)], { color: C.slate, w: 1.4, name: `arrow:${v}` }); });
    // the element no arrow reaches: ringed, with its note, the highlight
    B22.filter((v) => !A22.map(rule22).includes(v)).forEach((v) => oval(s, [G.b[0], yB22(B22.indexOf(v))], 9, 9, { color: C.mari, w: 1.7, name: `ring:${v}` }));
    lab(s, W - 10, 296, 'in codomain, not in range', { anchor: 'end', size: 13, color: C.amber });
    lab(s, 10, 282, `Dom(${I('R')}) = ${setText(A22)}`, { anchor: 'start', size: 13.5, color: C.slate });
    lab(s, 10, 302, `Range(${I('R')}) = ${setText(A22.map(rule22))}`, { anchor: 'start', size: 13.5, color: C.slate });
    lab(s, 10, 322, `Codomain(${I('R')}) = ${I('B')} = ${setText(B22)}`, { anchor: 'start', size: 13.5, color: C.slate });
    return s;
  },
  check() {
    const s = fig22.draw(fig22.cases[0]), out: Check[] = [], G = G22;
    // the arrows read back: which A dot each starts at, which B dot it ends at
    const arrows = linesNamed(s, /^arrow:/).map(({ pts }) => [A22[[0, 1, 2, 3].find((i) => close(pts[0][1], yA22(i)))!], B22[[0, 1, 2, 3, 4].find((j) => close(pts[1][1], yB22(j)))!]]);
    out.push([`Four arrows, read back as ${arrows.map(([a, b]) => `${a} → ${b}`).join(', ')}: each x goes to x + 2`, arrows.length === 4 && arrows.every(([a, b]) => b === rule22(a))]);
    const dom = arrows.map(([a]) => a).sort(), range = arrows.map(([, b]) => b).sort((p, q) => p - q);
    out.push([`Dom(R) = ${setText(dom)} = A (every element of A has its arrow) and Range(R) = ${setText(range)}, as printed`, same(dom, A22) && same(range, [3, 4, 5, 6]) && hasLabel(s, `Dom(R) = ${setText(A22)}`) && hasLabel(s, 'Range(R) = {3, 4, 5, 6}')]);
    const rings = linesNamed(s, /^ring:/).map((l) => l.name.slice(5));
    out.push([`Codomain(R) = B = ${setText(B22)}; Range ⊆ Codomain, and B − Range = {${B22.filter((v) => !range.includes(v)).join(', ')}}: the ringed element is 7, the only one no arrow reaches`, same(rings, ['7']) && same(B22.filter((v) => !range.includes(v)), [7]) && range.every((v) => B22.includes(v)) && hasLabel(s, `Codomain(R) = B = ${setText(B22)}`)]);
    const inOval = (c: P, r: number[], p: P) => ((p[0] - c[0]) / r[0]) ** 2 + ((p[1] - c[1]) / r[1]) ** 2 < 1;
    out.push(['A\'s four dots inside A\'s oval, B\'s five inside B\'s, the two ovals apart', A22.every((_, i) => inOval(G.a, G.ra, [G.a[0], yA22(i)])) && B22.every((_, j) => inOval(G.b, G.rb, [G.b[0], yB22(j)])) && G.a[0] + G.ra[0] < G.b[0] - G.rb[0]]);
    const miss = allLabels(s, ['A', 'B', 'y = x + 2', 'in codomain, not in range', '1', '7']);
    out.push([`The labels as printed: A, B, y = x + 2, 1 to 4, 3 to 7, in codomain, not in range${miss.length ? `; missing ${miss.join(', ')}` : ''}`, miss.length === 0]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Topic 03's "Figure 1" · the vertical line test (p. 121)               */
/* ===================================================================== */
const CAPD1 = 'The vertical line test: the parabola <i>y</i> = <i>x</i><sup>2</sup> is met by any vertical line at most once (a function); the circle <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> = 25 is met twice by some vertical lines (not a function).';
type VCase = { chip: string; cap: string; title: string; kind: 'parabola' | 'circle'; line: number };
/** p. 121, the two panels as printed: the test lines at x = 1 and x = 3. */
const VCASES: VCase[] = [
  { chip: 'Function', cap: CAPD1, title: 'Function (vertical line meets once)', kind: 'parabola', line: 1 },
  { chip: 'Not a function', cap: CAPD1, title: 'Not a function (meets twice)', kind: 'circle', line: 3 },
];
const GV: Record<VCase['kind'], { g: Gr; h: number; xt: number[]; yt: number[] }> = {
  parabola: { g: { ox: 170, oy: 252, ux: 44, uy: 21, x: [-3.4, 3.4], y: [-0.6, 9.6] }, h: 276, xt: [-3, -2, -1, 1, 2, 3], yt: [2, 4, 6, 8] },
  circle: { g: { ox: 170, oy: 172, ux: 20, uy: 20, x: [-6.6, 6.6], y: [-6.6, 6.6] }, h: 312, xt: [-6, -4, -2, 2, 4, 6], yt: [-6, -4, -2, 2, 4, 6] },
};
const R_CIRCLE = 5;
/** Where the vertical line x = c meets the curve, from its equation. */
const meets = (k: VCase['kind'], c: number): number[] => (k === 'parabola' ? [c * c] : Math.abs(c) < R_CIRCLE ? [Math.sqrt(R_CIRCLE ** 2 - c * c), -Math.sqrt(R_CIRCLE ** 2 - c * c)] : Math.abs(c) === R_CIRCLE ? [0] : []);
const figD1: Diagram = {
  id: 'm11-02-03-d1',
  topic: 2,
  name: 'The vertical line test',
  cases: VCASES,
  draw(c: VCase) {
    const { g, h, xt, yt } = GV[c.kind], s = new Sketch(W, h);
    lab(s, W / 2, 18, c.title, { size: 13.5 });
    axes(s, g, { xt, yt, O: 'bl' });
    if (c.kind === 'parabola') curve(s, g, sample((x) => x * x, -3, 3, 120));
    else curve(s, g, Array.from({ length: 241 }, (_, i): P => [R_CIRCLE * Math.cos((2 * Math.PI * i) / 240), R_CIRCLE * Math.sin((2 * Math.PI * i) / 240)]));
    // the test line, dashed, and where it meets the curve: the highlight
    const y0 = c.kind === 'parabola' ? 0 : g.y[0] + 0.3, y1 = g.y[1] - 0.2;
    s.line(gx(g, c.line), gy(g, y0), gx(g, c.line), gy(g, y1), { color: C.mari, w: 1.8, dash: true });
    keep(s, [gp(g, [c.line, y0]), gp(g, [c.line, y1])], 'test');
    meets(c.kind, c.line).forEach((y) => gdot(s, g, c.line, y, false, C.mari));
    return s;
  },
  check(c: VCase) {
    const s = figD1.draw(c), out: Check[] = [], { g } = GV[c.kind], [pts] = curvesBack(s, g), dots = DOTS.get(s)!;
    const onCurve = (p: P) => (c.kind === 'parabola' ? close(p[1], p[0] * p[0], 1e-3) : close(p[0] * p[0] + p[1] * p[1], 25, 1e-2));
    out.push([c.kind === 'parabola' ? 'The curve read back off the drawing is y = x² for −3 ≤ x ≤ 3, as printed' : 'The curve read back off the drawing is x² + y² = 25: a circle of radius 5 about O', pts.every(onCurve) && (c.kind === 'circle' || (close(pts[0][0], -3) && close(pts[pts.length - 1][0], 3)))]);
    // count crossings of the drawn curve with the test line, and with every vertical line across the panel
    const crossings = (x: number) => pts.slice(1).filter((q, i) => (pts[i][0] - x) * (q[0] - x) < 0 || close(q[0], x)).length;
    const hit = crossings(c.line), most = Math.max(...Array.from({ length: 121 }, (_, i) => crossings(-5.9 + (11.8 * i) / 120 + 1e-4)));
    if (c.kind === 'parabola') out.push([`The test line x = 1 meets the drawn curve ${hit} time, at (1, 1) (1² = 1); no vertical line across the panel meets it more than ${most} time: a function`, hit === 1 && most <= 1 && dots.length === 1 && close(dots[0].x, 1) && close(dots[0].y, 1)]);
    else out.push([`The test line x = 3 meets the drawn circle ${hit} times, at (3, 4) and (3, −4) (3² + 4² = 9 + 16 = 25): one x, two y's, so not a function`, hit === 2 && most === 2 && same(dots.map((d) => d.y).sort((p, q) => p - q), [-4, 4]) && dots.every((d) => d.x === 3 && 9 + d.y * d.y === 25)]);
    out.push(['The meeting points marked with filled dots, as printed, on the dashed test line', dots.every((d) => !d.open) && linesNamed(s, /^test$/).length === 1]);
    out.push([`The panel titled "${c.title}", as printed; axes named x, y and O`, hasLabel(s, c.title) && ['x', 'y', 'O'].every((t) => hasLabel(s, t))]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Topic 03's "Figure 2" · graphs of six standard functions (p. 123)     */
/* ===================================================================== */
const CAPD2 = 'Graphs of six of the seven standard functions (the rational function is omitted). Note the open/filled dots on the signum and greatest-integer graphs: they mark which endpoint each step actually attains.';
type Seg = P[];
type FCase = {
  chip: string; cap: string; title: string; f: (x: number) => number; g: Gr; h: number; ax: AxOpt;
  segs: Seg[]; dots: [number, number, boolean][];
  /** What the panel shows, recomputed from the drawing. */
  says: (pts: P[][], dots: { x: number; y: number; open: boolean }[]) => [string, boolean];
};
const sgn = (x: number) => (x > 0 ? 1 : x < 0 ? -1 : 0);
const U2 = 26;
const frame2 = (y: [number, number], uy = U2, top = 34): Gr => ({ ox: 170, oy: top + 14 + y[1] * uy, ux: U2, uy, x: [-4.7, 4.7], y });
const hOf = (g: Gr) => Math.ceil(gy(g, g.y[0]) + 22);
const flatOn = (pts: P[][], v: number) => pts.flat().every((p) => close(p[1], v, 1e-6));
/** p. 123, each panel as printed; the greatest-integer panel drawn whole (errata, p. 1258). */
const FCASES: FCase[] = [
  (() => { const g = frame2([-4.6, 4.6]); return {
    chip: 'Identity', cap: CAPD2, title: `Identity: ${I('f')}(${I('x')}) = ${I('x')}`, f: (x: number) => x, g, h: hOf(g), ax: { xt: [-4, -2, 2, 4], yt: [-4, -2, 2, 4], O: 'br' },
    segs: [[[-4, -4], [4, 4]]], dots: [],
    says: (pts) => { const [[a, b]] = pts, ang = (Math.atan2((b[1] - a[1]) * U2, (b[0] - a[0]) * U2) * 180) / Math.PI; return [`The line runs from (−4, −4) to (4, 4) through O at ${fmt(ang, 3)}° on equal scales: every input maps to itself`, close(ang, 45) && close(a[0], -4) && close(b[1], 4)]; },
  }; })(),
  (() => { const g = frame2([-4.6, 4.6]); return {
    chip: 'Constant', cap: CAPD2, title: `Constant: ${I('f')}(${I('x')}) = 2`, f: () => 2, g, h: hOf(g), ax: { xt: [-4, -2, 2, 4], yt: [-4, -2, 2, 4], O: 'bl', ydy: { '2': -11 } },
    segs: [[[-4, 2], [4, 2]]], dots: [],
    says: (pts) => [`A horizontal line at height 2 across the panel: every input lands on 2, range {2}`, flatOn(pts, 2)],
  }; })(),
  (() => { const g = frame2([-1.5, 4.6], 34); return {
    chip: 'Modulus', cap: CAPD2, title: `Modulus: ${I('f')}(${I('x')}) = |${I('x')}|`, f: Math.abs, g, h: hOf(g), ax: { xt: [-4, -2, 2, 4], yt: [-1, 1, 2, 3, 4], O: 'bl' },
    segs: [[[-4, 4], [0, 0], [4, 4]]], dots: [],
    says: (pts) => { const ys = pts.flat().map((p) => p[1]); return [`A "V" with its vertex at O, never below the x-axis: lowest drawn value ${fmt(Math.min(...ys))}, range [0, ∞)`, Math.min(...ys) === 0 && pts.flat().some((p) => p[0] === 0 && p[1] === 0)]; },
  }; })(),
  (() => { const g = frame2([-2.4, 2.4], 40); return {
    chip: 'Signum', cap: CAPD2, title: `Signum: sgn(${I('x')})`, f: sgn, g, h: hOf(g), ax: { xt: [-4, -2, 2, 4], yt: [-2, -1, 1, 2], O: 'bl', yRight: ['-1'] },
    segs: [[[-4, -1], [0, -1]], [[0, 1], [4, 1]]], dots: [[0, 1, true], [0, 0, false], [0, -1, true]],
    says: (pts) => { const vals = [...new Set(pts.flat().map((p) => (p[0] === 0 ? null : p[1])).filter((v) => v !== null))].sort(); return [`Three values: −1 for x < 0, +1 for x > 0 (open at x = 0), and 0 at x = 0 (the one filled dot): range {−1, 0, 1}`, same(vals, [-1, 1]) && sgn(0) === 0]; },
  }; })(),
  (() => { const g = frame2([-4.7, 4.7]); const steps = [-4, -3, -2, -1, 0, 1, 2, 3]; return {
    chip: 'Greatest integer', cap: CAPD2, title: `Greatest integer: ${I('f')}(${I('x')}) = [${I('x')}]`, f: Math.floor, g, h: hOf(g), ax: { xt: [-4, -2, 2, 4], yt: [-4, -2, 2, 4], O: 'bl', yRight: ['-2'] },
    segs: steps.map((n): Seg => [[n, n], [n + 1, n]]), dots: steps.flatMap((n): [number, number, boolean][] => [[n, n, false], [n + 1, n, true]]),
    says: (pts, dots) => {
      const ok = pts.every(([a, b]) => Number.isInteger(a[1]) && a[0] === a[1] && b[0] === a[0] + 1 && b[1] === a[1]);
      const whole = dots.some((d) => d.x === -4 && d.y === -4 && !d.open) && dots.some((d) => d.x === 4 && d.y === 3 && d.open);
      const inside = dots.every((d) => gx(g, d.x) - DOT_R > gx(g, g.x[0]) && gx(g, d.x) + DOT_R < gx(g, g.x[1]) && gy(g, d.y) + DOT_R < gy(g, g.y[0]));
      return [`Eight steps [n, n + 1) at height n for n = −4 to 3, filled at the left end and open at the right (left-closed); drawn whole, as the errata (p. 1258) reads it: a filled dot at (−4, −4) and an open dot at (4, 3), both inside the axes`, ok && pts.length === 8 && whole && inside];
    },
  }; })(),
  (() => { const g: Gr = { ox: 170, oy: 48 + 9.6 * 21, ux: 42, uy: 21, x: [-3.5, 3.5], y: [-1, 9.6] }; return {
    chip: 'Polynomial', cap: CAPD2, title: `Polynomial: ${I('f')}(${I('x')}) = ${I('x')}<sup>2</sup>`, f: (x: number) => x * x, g, h: hOf(g), ax: { xt: [-3, -2, -1, 1, 2, 3], yt: [2, 4, 6, 8], O: 'bl' },
    segs: [sample((x) => x * x, -3, 3, 120)], dots: [],
    says: (pts) => { const ys = pts.flat().map((p) => p[1]); return [`An upward parabola, vertex at O, from (−3, 9) to (3, 9): lowest value ${fmt(Math.min(...ys))}, range [0, ∞)`, Math.min(...ys) === 0 && close(Math.max(...ys), 9)]; },
  }; })(),
];
const figD2: Diagram = {
  id: 'm11-02-03-d2',
  topic: 2,
  name: 'Graphs of the standard functions',
  cases: FCASES,
  draw(c: FCase) {
    const s = new Sketch(W, c.h);
    lab(s, W / 2, 18, c.title, { size: 14 });
    axes(s, c.g, c.ax);
    c.segs.forEach((sg, i) => curve(s, c.g, sg, { color: C.mari, w: 2.2, name: `curve:${i}` }));
    c.dots.forEach(([x, y, open]) => gdot(s, c.g, x, y, open, C.mari));
    return s;
  },
  check(c: FCase) {
    const s = figD2.draw(c), out: Check[] = [], pts = curvesBack(s, c.g), dots = DOTS.get(s) ?? [];
    // every drawn point is on the graph, or is the end a step runs up to and leaves open
    const openAt = (p: P) => dots.some((d) => d.open && close(d.x, p[0]) && close(d.y, p[1]));
    out.push([`Every point of the drawn graph satisfies y = f(x), except the ends marked by an open dot`, pts.flat().every((p) => close(p[1], c.f(p[0]), 1e-6) || openAt(p))]);
    out.push([dots.length ? `The dots as printed: ${dots.map((d) => `(${fmt(d.x)}, ${fmt(d.y)}) ${d.open ? 'open' : 'filled'}`).join(', ')}; each filled exactly where f takes that value` : 'No open or filled dots on this graph, as printed', dots.every((d) => (c.f(d.x) === d.y) === !d.open)]);
    out.push(c.says(pts, dots));
    out.push([`The panel titled "${plain(c.title)}", as printed; axes named x, y and O`, hasLabel(s, plain(c.title)) && ['x', 'y', 'O'].every((t) => hasLabel(s, t))]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 2.5 · y = x/(1 + x²) and its range band (Topic 03, p. 150)     */
/* ===================================================================== */
const CAP25 = '<i>y</i> = <frac><num><i>x</i></num><den>1 + <i>x</i><sup>2</sup></den></frac> peaks at <frac><num>1</num><den>2</den></frac> and bottoms at −<frac><num>1</num><den>2</den></frac>, so its range is that band.';
const f25 = (x: number) => x / (1 + x * x);
const G25: Gr = { ox: 30 + 6.6 * 22, oy: 140, ux: 22, uy: 180, x: [-6.6, 6.6], y: [-0.69, 0.69] };
const fig25: Diagram = {
  id: 'm11-02-fig-2.5',
  topic: 2,
  name: 'Range band of x/(1 + x²)',
  cases: [{ chip: 'Range band', cap: CAP25 }],
  draw() {
    const s = new Sketch(W, 276), g = G25, xL = gx(g, g.x[0]), xR = gx(g, g.x[1]), size = 13;
    axes(s, g, { xt: [-6, -4, -2, 2, 4, 6], O: 'br', yName: 'left' });
    // the asymptote y = 0, dashed over the x-axis, as printed
    s.line(xL, g.oy, xR - 12, g.oy, { color: C.ink, w: 2.4, dash: true });
    lab(s, gx(g, -3), g.oy - 10, `${I('y')} = 0`, { size: 13, color: C.slate });
    // the band's edges y = ±1/2, dashed, the highlight, with their values stacked at the left
    [0.5, -0.5].forEach((v) => {
      s.line(xL, gy(g, v), xR, gy(g, v), { color: C.mari, w: 1.3, dash: true });
      keep(s, [[xL, gy(g, v)], [xR, gy(g, v)]], `edge:${v}`);
    });
    runs(s, xL - 5, gy(g, 0.5) + size * 0.27, [{ num: '1', den: '2' }], { size: 12, anchor: 'end', color: C.amber });
    runs(s, xL - 5, gy(g, -0.5) + size * 0.27, [{ t: '−' }, { num: '1', den: '2' }], { size: 12, anchor: 'end', color: C.amber });
    const pts = sample(f25, -6, 6, 600);
    curve(s, g, pts, { w: 2 });
    gdot(s, g, 1, 0.5, false, C.mari);
    gdot(s, g, -1, -0.5, false, C.mari);
    runs(s, gx(g, 1) + 8, gy(g, 0.5) - 21, [{ t: '(1, ' }, { num: '1', den: '2' }, { t: ')' }], { size });
    runs(s, gx(g, -1) + 8, gy(g, -0.5) + 27, [{ t: '(−1, −' }, { num: '1', den: '2' }, { t: ')' }], { size, anchor: 'end' });
    runs(s, W - 8, 262, [{ t: 'Range = [−' }, { num: '1', den: '2' }, { t: ', ' }, { num: '1', den: '2' }, { t: ']' }], { size: 13.5, anchor: 'end', color: C.amber });
    // the band hatched, clear of the curve, the axes and the dots
    const curvePx = pts.map((p) => gp(g, p)), top = gy(g, 0.5), bot = gy(g, -0.5);
    const inBand = (p: P) => p[1] > top + 3 && p[1] < bot - 3 && p[0] > xL && p[0] < xR - 2 && Math.abs(p[1] - g.oy) > 4 && Math.abs(p[0] - g.ox) > 4 && toPoly(p, curvePx) > 4;
    const dotBoxes = (DOTS.get(s) ?? []).map((d): Rect => { const [x, y] = gp(g, [d.x, d.y]); return [x - DOT_R, y - DOT_R, x + DOT_R, y + DOT_R]; });
    const ticks: Rect[] = [-6, -4, -2, 2, 4, 6].map((t) => [gx(g, t), g.oy - 4, gx(g, t), g.oy + 4]);
    HATCH.set(s, hatch(s, inBand, [xL, top, xR, bot], { avoid: [...dotBoxes, ...ticks], gap: 5 }));
    return s;
  },
  check() {
    const s = fig25.draw(fig25.cases[0]), out: Check[] = [], g = G25, [pts] = curvesBack(s, g), dots = DOTS.get(s)!;
    out.push(['The curve read back off the drawing is y = x/(1 + x²) for −6 ≤ x ≤ 6, as printed', pts.every((p) => close(p[1], f25(p[0]), 1e-3)) && close(pts[0][0], -6) && close(pts[pts.length - 1][0], 6)]);
    const ys = Array.from({ length: 24001 }, (_, i) => f25(-60 + i / 200)), hi = Math.max(...ys), lo = Math.min(...ys);
    out.push([`Its peak is f(1) = 1/2 and its trough f(−1) = −1/2: f′(x) = (1 − x²)/(1 + x²)² is 0 only at x = ±1, and on [−60, 60] the largest value is ${fmt(hi, 6)}, the smallest ${fmt(lo, 6)}`, f25(1) === 0.5 && f25(-1) === -0.5 && close(hi, 0.5, 1e-9) && close(lo, -0.5, 1e-9)]);
    out.push(['The discriminant agrees: yx² − x + y = 0 has a real x exactly when D = 1 − 4y² ≥ 0, i.e. −1/2 ≤ y ≤ 1/2 (y = 0 from x = 0); range [−1/2, 1/2], both ends attained', [0.5, -0.5, 0.3, 0].every((y) => 1 - 4 * y * y >= 0) && 1 - 4 * 0.51 * 0.51 < 0 && f25(0) === 0]);
    out.push(['The peak (1, 1/2) and the trough (−1, −1/2) are filled dots on the curve, at the band\'s edges', dots.length === 2 && dots.every((d) => !d.open && close(f25(d.x), d.y) && Math.abs(d.y) === 0.5)]);
    out.push([`y → 0 as |x| grows (f(6) = ${fmt(f25(6), 4)}, f(100) = ${fmt(f25(100), 4)}): the x-axis is the asymptote y = 0, drawn dashed`, Math.abs(f25(6)) < 0.17 && Math.abs(f25(100)) < 0.01 && hasLabel(s, 'y = 0')]);
    const H = HATCH.get(s) ?? [], top = gy(g, 0.5), bot = gy(g, -0.5);
    out.push([`The band −1/2 ≤ y ≤ 1/2 hatched (${H.length} strokes), every stroke between its dashed edges`, H.length > 60 && hatchAll(s, (p) => p[1] > top && p[1] < bot)]);
    const fr = FRACS.get(s) ?? [];
    out.push([`Every 1/2 on the drawing is stacked (${fr.length}): 1 above the rule, 2 below it`, fr.length === 6 && fr.every((f) => f.num === '1' && f.den === '2' && f.numY < f.rule[2] && f.denY - 8 > f.rule[2] && f.rule[1] - f.rule[0] >= Math.max(f.numW, f.denW))]);
    const miss = allLabels(s, ['1/2', '−1/2', '(1, 1/2)', '(−1, −1/2)', 'Range = [−1/2, 1/2]', 'y = 0', '−6', '6', 'x', 'y', 'O']);
    out.push([`The labels as printed: 1/2 and −1/2 at the band's edges, (1, 1/2), (−1, −1/2), Range = [−1/2, 1/2], y = 0, ticks −6 to 6${miss.length ? `; missing ${miss.join(', ')}` : ''}`, miss.length === 0]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 2.3 · the nine cells of A × A (Topic 04, p. 132)               */
/* ===================================================================== */
const CAP23 = 'Reflexive, symmetric and transitive, read off the nine cells of <i>A</i> × <i>A</i>.';
const G23 = { x0: 100, y0: 70, c: 60, n: 3 };
const cellRect = (i: number, j: number): Rect => [G23.x0 + (j - 1) * G23.c, G23.y0 + (i - 1) * G23.c, G23.x0 + j * G23.c, G23.y0 + i * G23.c];
const cellOf = (p: P): [number, number] => [Math.floor((p[1] - G23.y0) / G23.c) + 1, Math.floor((p[0] - G23.x0) / G23.c) + 1];
const pairTxt = (i: number, j: number) => `(${i}, ${j})`;
/** p. 132: the symmetric arrow joins (1, 2) and (2, 1); the transitive one runs (1, 2) to (2, 3) and forces (1, 3). */
const SYM23: [P, P] = [[175, 115], [145, 145]];
const TRANS23: [P, P] = [[213, 116], [238, 150]];
const FORCED23: Rect = [224, 74, 276, 126];
const fig23: Diagram = {
  id: 'm11-02-fig-2.3',
  topic: 3,
  name: 'Reading the properties off A × A',
  cases: [{ chip: 'Nine cells', cap: CAP23 }],
  draw() {
    const s = new Sketch(W, 354), G = G23, x1 = G.x0 + G.n * G.c, y1 = G.y0 + G.n * G.c;
    lab(s, (G.x0 + x1) / 2, 28, 'second coordinate', { size: 14 });
    for (let j = 1; j <= G.n; j++) lab(s, G.x0 + (j - 0.5) * G.c, 56, String(j), { size: 15 });
    lab(s, 42, G.y0 + 1.5 * G.c - 3, 'first', { size: 14 });
    lab(s, 42, G.y0 + 1.5 * G.c + 14, 'coordinate', { size: 14 });
    for (let i = 1; i <= G.n; i++) lab(s, G.x0 - 12, G.y0 + (i - 0.5) * G.c + 5, String(i), { anchor: 'end', size: 15 });
    for (let k = 1; k < G.n; k++) {
      path(s, [[G.x0 + k * G.c, G.y0], [G.x0 + k * G.c, y1]], { color: C.grey, w: 1.3, name: 'grid' });
      path(s, [[G.x0, G.y0 + k * G.c], [x1, G.y0 + k * G.c]], { color: C.grey, w: 1.3, name: 'grid' });
    }
    path(s, rectPts([G.x0, G.y0, x1, y1]), { color: C.slate, w: 1.4, name: 'grid:frame' });
    for (let i = 1; i <= G.n; i++) for (let j = 1; j <= G.n; j++) lab(s, G.x0 + (j - 0.5) * G.c, G.y0 + (i - 0.5) * G.c + 5, pairTxt(i, j), { size: 14, color: i === j ? C.text : C.slate });
    // symmetric: a two-headed arrow between (1, 2) and (2, 1)
    const mid: P = [(SYM23[0][0] + SYM23[1][0]) / 2, (SYM23[0][1] + SYM23[1][1]) / 2];
    arrow(s, mid, SYM23[0], { w: 1.6, name: 'sym' });
    arrow(s, mid, SYM23[1], { w: 1.6, name: 'sym' });
    // transitive: (1, 2) then (2, 3), dashed, and the forced cell (1, 3) boxed with a dashed outline
    arrow(s, TRANS23[0], TRANS23[1], { color: C.slate, w: 1.5, dash: true, name: 'trans' });
    s.add(`<rect x="${FORCED23[0]}" y="${FORCED23[1]}" width="${FORCED23[2] - FORCED23[0]}" height="${FORCED23[3] - FORCED23[1]}" rx="5" fill="none" stroke="${C.slate}" stroke-width="1.5" stroke-dasharray="5 4"/>`);
    keep(s, rectPts(FORCED23), 'forced');
    lab(s, 297, 60, 'forced', { anchor: 'start', size: 13, color: C.slate });
    arrow(s, [304, 68], [FORCED23[2] + 3, FORCED23[1] + 3], { color: C.slate, w: 1.3, name: 'forced:pointer' });
    // the key
    const kx = 22, tx = 46, sw = 13, y = [280, 298, 322, 346];
    const swatch: Rect = [kx, y[0] - 11, kx + sw, y[0] + 2];
    path(s, rectPts(swatch), { color: C.slate, w: 1.1, name: 'key:IA' });
    lab(s, tx, y[0], `${I('I')}<sub>${I('A')}</sub>: all three diagonal cells must be`, { anchor: 'start', size: 13 });
    lab(s, tx, y[1], 'present (reflexive)', { anchor: 'start', size: 13 });
    s.line(kx, y[2] - 4, kx + sw, y[2] - 4, { w: 2.2 });
    keep(s, [[kx, y[2] - 4], [kx + sw, y[2] - 4]], 'key:sym');
    lab(s, tx, y[2], 'symmetric: in together or out together', { anchor: 'start', size: 13 });
    s.line(kx, y[3] - 4, kx + sw, y[3] - 4, { color: C.slate, w: 2, dash: true });
    keep(s, [[kx, y[3] - 4], [kx + sw, y[3] - 4]], 'key:trans');
    lab(s, tx, y[3], `transitive: ${pairTxt(1, 2)} then ${pairTxt(2, 3)} forces ${pairTxt(1, 3)}`, { anchor: 'start', size: 13 });
    // the diagonal I_A hatched, the highlight, and the key's swatch the same
    const inner = (p: P) => { const [i, j] = cellOf(p), r = cellRect(i, j); return i === j && i >= 1 && i <= G.n && p[0] > r[0] + 3 && p[0] < r[2] - 3 && p[1] > r[1] + 3 && p[1] < r[3] - 3; };
    HATCH.set(s, hatch(s, inner, [G.x0, G.y0, x1, y1], { step: 6 }));
    hatch(s, (p) => p[0] > swatch[0] + 2 && p[0] < swatch[2] - 2 && p[1] > swatch[1] + 2 && p[1] < swatch[3] - 2, swatch, { step: 4, gap: 0, keepAs: 'key:hatch' });
    return s;
  },
  check() {
    const s = fig23.draw(fig23.cases[0]), out: Check[] = [], G = G23;
    const A = [1, 2, 3], cells = A.flatMap((i) => A.map((j) => pairTxt(i, j)));
    const at = cells.map((t) => cellOf(centre(labelsNamed(s, t)[0].rect)));
    out.push([`Nine cells, n(A × A) = 3² = ${3 ** 2}, each pair (a, b) in row a, column b`, at.every(([i, j], k) => cells[k] === pairTxt(i, j)) && at.length === 9]);
    const H = HATCH.get(s) ?? [], hatched = [...new Set(H.map(([a]) => cellOf(a).join()))].sort();
    out.push([`The hatched cells are ${hatched.map((c) => `(${c.replace(',', ', ')})`).join(', ')}: exactly the diagonal I_A = {(a, a) : a ∈ A}, every stroke inside its cell`, same(hatched, ['1,1', '2,2', '3,3']) && hatchAll(s, (p) => { const [i, j] = cellOf(p); return i === j; })]);
    const [p, q] = SYM23, ps = cellOf(p), qs = cellOf(q);
    out.push([`The symmetric arrow joins cell (${ps.join(', ')}) and cell (${qs.join(', ')}): mirror images across the diagonal, (a, b) and (b, a)`, ps[0] === qs[1] && ps[1] === qs[0] && ps[0] !== ps[1] && linesNamed(s, /^sym$/).length === 2]);
    const [t0, t1] = TRANS23.map(cellOf), forced = cellOf(centre(FORCED23));
    out.push([`The transitive arrow runs from (${t0.join(', ')}) to (${t1.join(', ')}): (a, b) then (b, c) with b = ${t0[1]} = ${t1[0]}, so (a, c) = (${forced.join(', ')}) is forced, the boxed cell`, t0[1] === t1[0] && forced[0] === t0[0] && forced[1] === t1[1] && same(forced, [1, 3])]);
    const miss = allLabels(s, ['second coordinate', 'first', 'coordinate', 'forced', 'IA: all three diagonal cells must be', 'present (reflexive)', 'symmetric: in together or out together', 'transitive: (1, 2) then (2, 3) forces (1, 3)', ...cells]);
    out.push([`The labels as printed (the key's em dash a colon): second coordinate, first coordinate, 1 to 3, the nine pairs, forced, and the three key lines${miss.length ? `; missing ${miss.join(', ')}` : ''}`, miss.length === 0 && s.texts.every((t) => !t.html.includes('—'))]);
    out.push([`The grid ${G.n} × ${G.n} cells of ${G.c} px, the forced box inside cell (1, 3)`, (() => { const r = cellRect(1, 3); return FORCED23[0] > r[0] && FORCED23[2] < r[2] && FORCED23[1] > r[1] && FORCED23[3] < r[3]; })()]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 2.4 · equivalence classes partition A (Topic 04, p. 136)       */
/* ===================================================================== */
const CAP24 = 'Equivalence classes cut <i>A</i> into non-empty, disjoint blocks that cover all of <i>A</i>.';
/** p. 136 in the book's proportions: the dividers meet the oval 0.284 of its half-width either side of the middle and bow 0.05 of its width inwards. */
const G24 = { c: [170, 112] as P, rx: 150, ry: 76, dx: 42.6, bow: 14 };
const divEnds = (side: -1 | 1) => { const x = G24.c[0] + side * G24.dx, h = G24.ry * Math.sqrt(1 - (G24.dx / G24.rx) ** 2); return { x, top: G24.c[1] - h, bot: G24.c[1] + h }; };
/** The divider's x at height y: a quadratic curve from the oval's top to its bottom, bowed towards the middle. */
function divX(side: -1 | 1, y: number): number {
  const { x, top, bot } = divEnds(side), t = (y - top) / (bot - top);
  return x - side * 2 * G24.bow * 2 * t * (1 - t);
}
/** Which block holds p: 0 the left, 1 the middle, 2 the right (or −1 outside the oval). */
const blockOf = (p: P) => ((((p[0] - G24.c[0]) / G24.rx) ** 2 + ((p[1] - G24.c[1]) / G24.ry) ** 2) >= 1 ? -1 : p[0] < divX(-1, p[1]) ? 0 : p[0] < divX(1, p[1]) ? 1 : 2);
const CLASSES24 = [{ n: 'a', x: 76 }, { n: 'b', x: 170 }, { n: 'c', x: 267 }];
const fig24: Diagram = {
  id: 'm11-02-fig-2.4',
  topic: 3,
  name: 'Equivalence classes partition A',
  cases: [{ chip: 'Three classes', cap: CAP24 }],
  draw() {
    const s = new Sketch(W, 238), G = G24;
    oval(s, G.c, G.rx, G.ry, { w: 1.9, name: 'oval:A' });
    lab(s, 18, 30, I('A'), { anchor: 'start', size: 19 });
    ([-1, 1] as const).forEach((side) => {
      const { x, top, bot } = divEnds(side);
      s.add(`<path d="M${r1(x)} ${r1(top)} Q${r1(x - side * 2 * G.bow)} ${r1(G.c[1])} ${r1(x)} ${r1(bot)}" fill="none" stroke="${C.slate}" stroke-width="1.6"/>`);
      keep(s, Array.from({ length: 61 }, (_, i): P => { const y = top + ((bot - top) * i) / 60; return [divX(side, y), y]; }), `divider:${side}`);
    });
    CLASSES24.forEach(({ n, x }) => {
      lab(s, x, 82, `[${I(n)}]`, { size: 17 });
      s.dot(x, 119, 4);
      lab(s, x + 9, 132, I(n), { anchor: 'start', size: 15 });
    });
    const t = lab(s, G.c[0], 220, `non-empty, pairwise disjoint, union = ${I('A')}`, { size: 14, color: C.slate });
    const box: Rect = [t[0] - 9, t[1] - 6, t[2] + 9, t[3] + 6];
    s.add(`<rect x="${r1(box[0])}" y="${r1(box[1])}" width="${r1(box[2] - box[0])}" height="${r1(box[3] - box[1])}" rx="5" fill="none" stroke="${C.grey}" stroke-width="1.3"/>`);
    keep(s, rectPts(box), 'box');
    return s;
  },
  check() {
    const s = fig24.draw(fig24.cases[0]), out: Check[] = [];
    const where = CLASSES24.map(({ n }) => ({ cls: blockOf(centre(labelsNamed(s, `[${n}]`)[0].rect)), dot: blockOf(s.points[CLASSES24.findIndex((c) => c.n === n)] ? [s.points[CLASSES24.findIndex((c) => c.n === n)].x, s.points[CLASSES24.findIndex((c) => c.n === n)].y] : [0, 0]) }));
    out.push([`Each element sits in its own class: a and [a] in block ${where[0].dot + 1}, b and [b] in block ${where[1].dot + 1}, c and [c] in block ${where[2].dot + 1} (a ∈ [a], by reflexivity)`, where.every((w, i) => w.cls === i && w.dot === i)]);
    const [l, r] = [divEnds(-1), divEnds(1)];
    const apart = Array.from({ length: 101 }, (_, i) => l.top + ((l.bot - l.top) * i) / 100).every((y) => divX(-1, y) < divX(1, y) - 40);
    const onOval = [l, r].every((d) => [d.top, d.bot].every((y) => close(((d.x - G24.c[0]) / G24.rx) ** 2 + ((y - G24.c[1]) / G24.ry) ** 2, 1, 1e-9)));
    out.push(['The two dividers run from the oval\'s top edge to its bottom edge and never meet: three blocks, pairwise disjoint, whose union is the whole oval A', apart && onOval]);
    out.push(['Every block is non-empty: each holds its element\'s dot', new Set(where.map((w) => w.dot)).size === 3]);
    const miss = allLabels(s, ['A', '[a]', '[b]', '[c]', 'a', 'b', 'c', 'non-empty, pairwise disjoint, union = A']);
    out.push([`The labels as printed: A, [a], [b], [c], a, b, c, and non-empty, pairwise disjoint, union = A${miss.length ? `; missing ${miss.join(', ')}` : ''}`, miss.length === 0]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* ADDITIONAL TOPICS F–K: their own drawings                             */
/* ===================================================================== */
/**
 * A ring marking a point the book circles (a root): drawn hollow, as printed. With `filled`, a filled dot instead:
 * F-d1's meeting points and H-d1's O are points ON the graph, and in this chapter a hollow ring reads as "not
 * included" (founder, 2026-11-10). Kept for the clearance check.
 */
const RINGS = new WeakMap<Sketch, { x: number; y: number; filled: boolean }[]>();
const RING_R = 5.5;
const FILLED_R = 4.8;
function ring(s: Sketch, g: Gr, x: number, y: number, col: string = C.ink, r = RING_R, filled = false) {
  const [px, py] = gp(g, [x, y]);
  s.point(px, py, r, filled ? `<circle cx="${r1(px)}" cy="${r1(py)}" r="${r}" fill="${col}"/>` : `<circle cx="${r1(px)}" cy="${r1(py)}" r="${r}" fill="none" stroke="${col}" stroke-width="1.8"/>`);
  keep(s, Array.from({ length: 25 }, (_, i): P => [px + (r + 1) * Math.cos((2 * Math.PI * i) / 24), py + (r + 1) * Math.sin((2 * Math.PI * i) / 24)]), 'ring');
  RINGS.set(s, [...(RINGS.get(s) ?? []), { x, y, filled }]);
}
/** The book's ✗ and ✓, drawn as strokes (no font holds them the same on every phone). */
function crossMark(s: Sketch, c: P, r: number, col: string) {
  path(s, [[c[0] - r, c[1] - r], [c[0] + r, c[1] + r]], { color: col, w: 2, name: 'mark:cross' });
  path(s, [[c[0] - r, c[1] + r], [c[0] + r, c[1] - r]], { color: col, w: 2, name: 'mark:cross' });
}
function checkMark(s: Sketch, c: P, r: number, col: string) {
  path(s, [[c[0] - r, c[1]], [c[0] - r * 0.3, c[1] + r * 0.7], [c[0] + r, c[1] - r]], { color: col, w: 2.2, name: 'mark:check' });
}
/** A vertical line x = c from y0 to y1 (data), dashed, broken round the x-axis's numbers. */
function vline(s: Sketch, g: Gr, c: number, y0: number, y1: number, gapTop: number, gapBot: number, o: Stroke) {
  const x = gx(g, c), top = gy(g, y1), bot = gy(g, y0);
  s.line(x, top, x, gapTop, { color: o.color, w: o.w, dash: true });
  s.line(x, gapBot, x, bot, { color: o.color, w: o.w, dash: true });
  keep(s, [[x, top], [x, gapTop]], o.name);
  keep(s, [[x, gapBot], [x, bot]], o.name);
}

/* Additional topic F's "Figure 1" · counting m on the circle and the semicircle (p. 155) */
const CAPF1 = 'Counting the solutions <i>m</i> that one vertical line meets: on the full circle <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> = 25 the line <i>x</i> = 3 gives <i>m</i> = 2, so the circle is not a function, while on the upper semicircle <i>y</i> = √(25 − <i>x</i><sup>2</sup>) the same three lines give <i>m</i> = 0, 1, 1.';
type CaseF = { chip: string; cap: string; upper: boolean; eq: string; verdict: string; printed: number[] };
/** p. 155: the three lines and the m printed over each, panel by panel. */
const LINESF = [-6, 3, 5];
const CASESF: CaseF[] = [
  { chip: 'Full circle', cap: CAPF1, upper: false, eq: `${I('x')}<sup>2</sup> + ${I('y')}<sup>2</sup> = 25`, verdict: 'not a function', printed: [0, 2, 1] },
  { chip: 'Upper semicircle', cap: CAPF1, upper: true, eq: `${I('y')} = √(25 − ${I('x')}<sup>2</sup>)`, verdict: 'a function', printed: [0, 1, 1] },
];
const GF: Gr = { ox: 160, oy: 164, ux: 20, uy: 20, x: [-7, 6.6], y: [-6.6, 6.6] };
/** Where x = c meets the curve, from its equation: y² = 25 − c², and only y ≥ 0 on the semicircle. */
const meetsF = (upper: boolean, c: number): number[] => { const r = 25 - c * c; return r < 0 ? [] : r === 0 ? [0] : upper ? [Math.sqrt(r)] : [Math.sqrt(r), -Math.sqrt(r)]; };
const figF1: Diagram = {
  id: 'm11-02-F-d1',
  topic: 4,
  name: 'Counting m on a circle and a semicircle',
  cases: CASESF,
  draw(c: CaseF) {
    const s = new Sketch(W, 342), g = GF, xdy = 21;
    axes(s, g, { xt: [-6, -4, 3, 5], yt: [3], xdy, xdx: { '5': 9 }, O: 'bl' });
    const pts = c.upper ? sample((x) => Math.sqrt(Math.max(0, 25 - x * x)), -5, 5, 200) : Array.from({ length: 241 }, (_, i): P => [5 * Math.cos((2 * Math.PI * i) / 240), 5 * Math.sin((2 * Math.PI * i) / 240)]);
    curve(s, g, pts);
    LINESF.forEach((x, k) => {
      const hi = x === 3, m = meetsF(c.upper, x);
      vline(s, g, x, -6.2, 6.1, g.oy + 8, g.oy + xdy + 7, { color: hi ? C.mari : C.slate, w: hi ? 1.8 : 1.2, name: `line:${x}` });
      lab(s, gx(g, x), 30, `${I('m')} = ${c.printed[k]}`, { size: 12, color: hi ? C.amber : C.slate });
      m.forEach((y) => ring(s, g, x, y, hi ? C.mari : C.ink, FILLED_R, true));
    });
    lab(s, 16, 310, c.eq, { anchor: 'start', size: 14 });
    if (c.upper) checkMark(s, [24, 328], 6, C.ink); else crossMark(s, [24, 328], 5, C.ink);
    lab(s, 38, 333, c.verdict, { anchor: 'start', size: 13.5 });
    return s;
  },
  check(c: CaseF) {
    const s = figF1.draw(c), out: Check[] = [], [pts] = curvesBack(s, GF), rings = RINGS.get(s) ?? [];
    out.push([c.upper ? 'The curve read back is y = √(25 − x²): the upper half of the circle, −5 ≤ x ≤ 5, y ≥ 0' : 'The curve read back is the whole circle x² + y² = 25', pts.every((p) => close(p[0] * p[0] + p[1] * p[1], 25, 1e-2) && (!c.upper || p[1] >= -1e-9))]);
    const m = LINESF.map((x) => rings.filter((r) => close(r.x, x)).length);
    out.push([`The filled dots (points on the graph) read back on x = −6, 3, 5: m = ${m.join(', ')}, as printed over the lines (${c.printed.join(', ')}); each from y² = 25 − x² (x = −6: 25 − 36 < 0, none; x = 3: y² = 16${c.upper ? ', y = 4 only' : ', y = ±4'}; x = 5: y = 0, the tangent)`, same(m, c.printed) && LINESF.every((x, k) => meetsF(c.upper, x).length === c.printed[k]) && rings.every((r) => r.filled && close(r.x * r.x + r.y * r.y, 25))]);
    const fn = Math.max(...m) <= 1;
    out.push([`Largest m is ${Math.max(...m)}: ${fn ? 'no line meets twice, so a function' : 'a line meets twice, so not a function'}, as the mark says (${c.upper ? '✓' : '✗'} ${c.verdict})`, fn === c.upper && hasLabel(s, c.verdict) && linesNamed(s, c.upper ? /^mark:check$/ : /^mark:cross$/).length > 0]);
    const miss = allLabels(s, [plain(c.eq), ...c.printed.map((k) => `m = ${k}`), '−6', '−4', '3', '5', 'x', 'y', 'O']);
    out.push([`The labels as printed: ${plain(c.eq)}, m over each line, ticks −6, −4, 3, 5 and 3 on y${miss.length ? `; missing ${miss.join(', ')}` : ''}`, miss.length === 0]);
    out.push(...layout(s));
    return out;
  },
};

/* Additional topic G's "Figure 2" · the two-stage journey (p. 158) */
const CAPG1 = 'The two-stage journey <i>x</i> ↦ <i>f</i>(<i>x</i>) ↦ <i>g</i>(<i>f</i>(<i>x</i>)): <i>x</i>′ is legal for <i>f</i>, but its image <i>f</i>(<i>x</i>′) lands outside the shaded Dom(<i>g</i>), so <i>g</i> is undefined there and <i>x</i>′ ∉ Dom(<i>g</i> ∘ <i>f</i>).';
type Ov = { c: P; rx: number; ry: number };
const inOv = (o: Ov, p: P, m = 0) => ((p[0] - o.c[0]) / (o.rx - m)) ** 2 + ((p[1] - o.c[1]) / (o.ry - m)) ** 2 < 1;
const GG = {
  domF: { c: [62, 120], rx: 40, ry: 62 } as Ov, codF: { c: [178, 120], rx: 46, ry: 74 } as Ov, domG: { c: [178, 100], rx: 38, ry: 40 } as Ov, codG: { c: [290, 120], rx: 40, ry: 62 } as Ov,
  x: [62, 98] as P, fx: [172, 112] as P, gfx: [290, 112] as P, x2: [62, 150] as P, fx2: [172, 160] as P,
};
const figG1: Diagram = {
  id: 'm11-02-G-d1',
  topic: 5,
  name: 'The two-stage journey of g ∘ f',
  cases: [{ chip: 'x and x′', cap: CAPG1 }],
  draw() {
    const s = new Sketch(W, 248), G = GG;
    ([['domF', 'Dom(<i>f</i>)'], ['codF', 'codomain of <i>f</i>'], ['codG', 'codomain of <i>g</i>']] as const).forEach(([k, t]) => { const o = G[k]; oval(s, o.c, o.rx, o.ry, { w: 1.7, name: `oval:${k}` }); lab(s, o.c[0], 36, t, { size: 13 }); });
    oval(s, G.domG.c, G.domG.rx, G.domG.ry, { color: C.slate, w: 1.4, name: 'oval:domG' });
    lab(s, G.domG.c[0], 80, `Dom(${I('g')})`, { size: 12, color: C.slate });
    ([G.x, G.fx, G.gfx, G.x2] as P[]).forEach((p) => s.dot(p[0], p[1], 3.8));
    s.dot(G.fx2[0], G.fx2[1], 3.8, C.mari);
    lab(s, G.x[0] + 9, G.x[1] - 8, I('x'), { anchor: 'start', size: 14 });
    lab(s, G.fx[0], G.fx[1] - 10, `${I('f')}(${I('x')})`, { size: 13 });
    lab(s, G.gfx[0], G.gfx[1] - 10, `${I('g')}(${I('f')}(${I('x')}))`, { size: 13 });
    lab(s, G.x2[0] - 9, G.x2[1] + 5, `${I('x')}′`, { anchor: 'end', size: 14 });
    lab(s, G.fx2[0], G.fx2[1] + 16, `${I('f')}(${I('x')}′)`, { size: 13 });
    arrow(s, [G.x[0] + 7, G.x[1] + 1], [G.fx[0] - 8, G.fx[1]], { color: C.slate, w: 1.4, name: 'arrow:f' });
    arrow(s, [G.x2[0] + 7, G.x2[1] + 1], [G.fx2[0] - 8, G.fx2[1]], { color: C.slate, w: 1.4, name: 'arrow:f2' });
    arrow(s, [G.fx[0] + 7, G.fx[1]], [G.gfx[0] - 8, G.gfx[1]], { color: C.slate, w: 1.4, name: 'arrow:g' });
    lab(s, 117, 90, I('f'), { size: 15, color: C.slate });
    lab(s, 236, 103, I('g'), { size: 15, color: C.slate });
    // the failure, the highlight: f(x′) outside Dom(g), crossed out, g's dashed arrow going nowhere
    crossMark(s, [198, 157], 5, C.mari);
    arrow(s, [208, 156], [245, 150], { color: C.mari, w: 1.4, dash: true, name: 'arrow:g:undefined' });
    lab(s, 206, 197, `${I('g')} undefined`, { anchor: 'start', size: 12.5, color: C.amber });
    lab(s, W / 2, 222, `${I('x')}′ is legal for ${I('f')} but its image is illegal for ${I('g')},`, { size: 12.5, color: C.slate });
    lab(s, W / 2, 239, `so ${I('x')}′ ∉ Dom(${I('g')} ∘ ${I('f')})`, { size: 12.5, color: C.slate });
    // Dom(g), the book's shaded set, hatched in grey (the book's own neutral tint), clear of its dot and labels
    const d = G.domG, dotBox: Rect = [G.fx[0] - 4, G.fx[1] - 4, G.fx[0] + 4, G.fx[1] + 4];
    HATCH.set(s, hatch(s, (p) => inOv(d, p, 4) && !linesNamed(s, /^arrow:g$/).some((l) => toPoly(p, l.pts) < 5), [d.c[0] - d.rx, d.c[1] - d.ry, d.c[0] + d.rx, d.c[1] + d.ry], { color: C.grey, avoid: [dotBox], step: 5 }));
    return s;
  },
  check() {
    const s = figG1.draw(figG1.cases[0]), out: Check[] = [], G = GG;
    const domGin = Array.from({ length: 72 }, (_, i): P => [G.domG.c[0] + G.domG.rx * Math.cos((i * Math.PI) / 36), G.domG.c[1] + G.domG.ry * Math.sin((i * Math.PI) / 36)]).every((p) => inOv(G.codF, p));
    out.push(['Dom(g) drawn inside the codomain of f, as printed: g accepts only part of what f can output', domGin]);
    out.push(['x and x′ both in Dom(f): f is defined at each', inOv(G.domF, G.x) && inOv(G.domF, G.x2)]);
    out.push(['f(x) lands inside Dom(g), so g(f(x)) exists and lands in the codomain of g', inOv(G.domG, G.fx) && inOv(G.codG, G.gfx)]);
    out.push(['f(x′) lands in the codomain of f but outside Dom(g): g is undefined there, so x′ ∉ Dom(g ∘ f) = {x ∈ Dom(f) : f(x) ∈ Dom(g)}', inOv(G.codF, G.fx2) && !inOv(G.domG, G.fx2)]);
    const H = HATCH.get(s) ?? [];
    out.push([`Dom(g), the book's shaded set, hatched (${H.length} strokes), every stroke inside it`, H.length > 10 && hatchAll(s, (p) => inOv(G.domG, p))]);
    const ends = (n: string) => linesNamed(s, new RegExp(`^arrow:${n}$`))[0].pts;
    out.push(['Arrows f: x → f(x) and x′ → f(x′), g: f(x) → g(f(x)); g\'s arrow from f(x′) dashed, ending short of the codomain of g', len(ends('f')[0], G.x) < 9 && len(ends('f')[1], G.fx) < 9 && len(ends('f2')[1], G.fx2) < 9 && len(ends('g')[0], G.fx) < 9 && len(ends('g')[1], G.gfx) < 9 && !inOv(G.codG, ends('g:undefined')[1])]);
    const miss = allLabels(s, ['Dom(f)', 'codomain of f', 'codomain of g', 'Dom(g)', 'x', 'f(x)', 'g(f(x))', 'x′', 'f(x′)', 'f', 'g', 'g undefined', 'x′ is legal for f but its image is illegal for g,', 'so x′ ∉ Dom(g ∘ f)']);
    out.push([`The labels as printed (the footnote on two lines)${miss.length ? `; missing ${miss.join(', ')}` : ''}`, miss.length === 0]);
    out.push(...layout(s));
    return out;
  },
};

/* Additional topic H's "Figure 3" · even and odd, half the plotting (p. 162) */
const CAPH1 = 'Half the plotting: for the even <i>f</i>(<i>x</i>) = <i>x</i><sup>4</sup> − 3<i>x</i><sup>2</sup> + 1 the solid arc on <i>x</i> ≥ 0 is reflected in the <i>y</i>-axis, and for the odd <i>f</i>(<i>x</i>) = <i>x</i>|<i>x</i>| it is half-turned about the origin, which forces <i>f</i>(0) = 0.';
type CaseH = { chip: string; cap: string; odd: boolean; title: string; note: string; f: (x: number) => number; g: Gr; h: number; ax: AxOpt; solid: [number, number]; dashed: [number, number] };
const CASESH: CaseH[] = [
  { chip: 'Even', cap: CAPH1, odd: false, title: `even: ${I('f')}(−${I('x')}) = ${I('f')}(${I('x')})`, note: `draw once, reflect in the ${I('y')}-axis`, f: (x) => x ** 4 - 3 * x * x + 1,
    g: { ox: 170, oy: 220, ux: 50, uy: 40, x: [-2.5, 2.5], y: [-1.6, 4.6] }, h: 318, ax: { xt: [-2, 2], yt: [2, 4], O: 'bl' }, solid: [0, 1.974], dashed: [-1.974, 0] },
  { chip: 'Odd', cap: CAPH1, odd: true, title: `odd: ${I('f')}(−${I('x')}) = −${I('f')}(${I('x')})`, note: `half-turn about the origin; ${I('f')}(0) = 0 is forced`, f: (x) => x * Math.abs(x),
    g: { ox: 170, oy: 178, ux: 50, uy: 40, x: [-2.5, 2.5], y: [-2.6, 3.6] }, h: 316, ax: { xt: [-2, 2], yt: [3], Oat: [9, 19, 'start'] }, solid: [0, 1.8], dashed: [-1.55, 0] },
];
const figH1: Diagram = {
  id: 'm11-02-H-d1',
  topic: 6,
  name: 'Even and odd: half the plotting',
  cases: CASESH,
  draw(c: CaseH) {
    const s = new Sketch(W, c.h), g = c.g;
    lab(s, W / 2, 18, c.title, { size: 14 });
    axes(s, g, c.ax);
    curve(s, g, sample(c.f, c.solid[0], c.solid[1], 120), { w: 2.2, name: 'curve:solid' });
    curve(s, g, sample(c.f, c.dashed[0], c.dashed[1], 120), { color: C.mari, w: 2, dash: true, name: 'curve:image' });
    if (c.odd) {
      ring(s, g, 0, 0, C.ink, FILLED_R, true);
      const R = 44, a0 = 25, a1 = 192, n = 40, arc: P[] = Array.from({ length: n + 1 }, (_, i) => { const a = ((a0 + ((a1 - a0) * i) / n) * Math.PI) / 180; return [g.ox + R * Math.cos(a), g.oy - R * Math.sin(a)]; });
      path(s, arc.slice(0, -1), { color: C.slate, w: 1.4, name: 'halfturn' });
      s.vec(arc[n - 2][0], arc[n - 2][1], arc[n][0], arc[n][1], { color: C.slate, w: 1.4 });
    }
    lab(s, W / 2, c.h - 10, c.note, { size: 13, color: C.slate });
    return s;
  },
  check(c: CaseH) {
    const s = figH1.draw(c), out: Check[] = [], [solid] = curvesBack(s, c.g, /^curve:solid$/), [image] = curvesBack(s, c.g, /^curve:image$/);
    out.push([`The solid arc is ${c.odd ? 'f(x) = x|x|' : 'f(x) = x⁴ − 3x² + 1'} on x ≥ 0, read back off the drawing`, solid.every((p) => p[0] >= -1e-9 && close(p[1], c.f(p[0]), 1e-3))]);
    const xs = Array.from({ length: 41 }, (_, i) => -2 + i / 10);
    out.push([c.odd ? 'f(−x) = (−x)|−x| = −x|x| = −f(x) at every sample: odd' : 'f(−x) = (−x)⁴ − 3(−x)² + 1 = f(x) at every sample: even', xs.every((x) => close(c.f(-x), c.odd ? -c.f(x) : c.f(x), 1e-9))]);
    const mapped = image.every(([x, y]) => close(c.f(-x), c.odd ? -y : y, 1e-3) && x <= 1e-9);
    out.push([c.odd ? 'Every point of the dashed part is the half-turn (x, y) → (−x, −y) of a point on the solid arc' : 'Every point of the dashed part is the mirror (x, y) → (−x, y) of a point on the solid arc, in the y-axis', mapped && image.length > 20]);
    if (c.odd) out.push(['f(0) = −f(0) forces f(0) = 0: the curve passes through O, marked with a filled dot (a point on the graph), and the half-turn arrow swings from the solid arc round to the dashed one', c.f(0) === 0 && (RINGS.get(s) ?? []).some((r) => r.x === 0 && r.y === 0 && r.filled) && linesNamed(s, /^halfturn$/).length === 1]);
    else out.push([`Its lowest points: f′(x) = 4x³ − 6x = 0 at x = ±√1.5, f = ${fmt(c.f(Math.sqrt(1.5)), 3)}, on both halves; f(0) = 1 on the y-axis`, close(c.f(Math.sqrt(1.5)), -1.25) && close(c.f(-Math.sqrt(1.5)), -1.25) && c.f(0) === 1]);
    out.push([`The panel titled "${plain(c.title)}" with "${plain(c.note)}" under it, as printed`, hasLabel(s, plain(c.title)) && hasLabel(s, plain(c.note))]);
    out.push(...layout(s));
    return out;
  },
};

/* Additional topic I's "Figure 4" · the sawtooth and the staircase (p. 166) */
const CAPI1 = 'The sawtooth <i>y</i> = {<i>x</i>} repeats exactly on every unit band, so its fundamental period is <i>T</i> = 1; the greatest-integer staircase drawn beneath it is built from the same ingredient but climbs forever and never repeats.';
const GI_TOP: Gr = { ox: 169.6, oy: 130, ux: 44, uy: 70, x: [-3.4, 3.55], y: [-0.3, 1.5] };
const GI_BOT: Gr = { ox: 169.6, oy: 262, ux: 44, uy: 26, x: [-3.4, 3.55], y: [-3.3, 2.5] };
const frac1 = (x: number) => x - Math.floor(x);
const NS_I = [-3, -2, -1, 0, 1, 2];
const figI1: Diagram = {
  id: 'm11-02-I-d1',
  topic: 7,
  name: 'Sawtooth and staircase',
  cases: [{ chip: 'Period T = 1', cap: CAPI1 }],
  draw() {
    const s = new Sketch(W, 380), gt = GI_TOP, gb = GI_BOT;
    // top: y = {x}
    axes(s, gt, { xt: [-3, -2, -1, 1, 2, 3], yt: [1], xdy: 19, O: 'br' });
    lab(s, 16, 30, `${I('y')} = {${I('x')}} = ${I('x')} − [${I('x')}]`, { anchor: 'start', size: 13 });
    NS_I.forEach((n) => curve(s, gt, [[n, 0], [n + 1, 1]], { w: 2, name: `saw:${n}` }));
    NS_I.forEach((n) => { gdot(s, gt, n, 0, false); gdot(s, gt, n + 1, 1, true); });
    const topDots = (DOTS.get(s) ?? []).slice();
    // the band 1 ≤ x ≤ 2, the highlight: T = 1 over it and the band hatched
    const ya = gy(gt, 1.32), xa = gx(gt, 1), xb = gx(gt, 2), mid = (xa + xb) / 2;
    arrow(s, [mid, ya], [xa + 2, ya], { color: C.mari, w: 1.5, name: 'T' });
    arrow(s, [mid, ya], [xb - 2, ya], { color: C.mari, w: 1.5, name: 'T' });
    lab(s, mid, ya - 10, `${I('T')} = 1`, { size: 13, color: C.amber });
    // bottom: y = [x]
    axes(s, gb, { xt: [-3, -2, -1, 1, 2, 3], yt: [2, -2], xdy: 19, xAbove: ['-3', '-2', '-1'], O: 'br' });
    lab(s, 16, 205, `${I('y')} = [${I('x')}]`, { anchor: 'start', size: 13 });
    NS_I.forEach((n) => curve(s, gb, [[n, n], [n + 1, n]], { w: 2, name: `stair:${n}` }));
    NS_I.forEach((n) => { gdot(s, gb, n, n, false); gdot(s, gb, n + 1, n, true); });
    lab(s, W / 2, 372, 'same ingredient, drifts upward forever, never repeats', { size: 12.5, color: C.slate });
    const saw = linesNamed(s, /^saw:/).map((l) => l.pts), dotBoxes = topDots.map((d): Rect => { const [x, y] = gp(gt, [d.x, d.y]); return [x - DOT_R, y - DOT_R, x + DOT_R, y + DOT_R]; });
    HATCH.set(s, hatch(s, (p) => p[0] > xa + 4 && p[0] < xb - 4 && p[1] > gy(gt, 1.22) && p[1] < gy(gt, -0.22) && Math.abs(p[1] - gt.oy) > 4 && saw.every((q) => toPoly(p, q) > 4), [xa, gy(gt, 1.22), xb, gy(gt, -0.22)], { avoid: dotBoxes }));
    return s;
  },
  check() {
    const s = figI1.draw(figI1.cases[0]), out: Check[] = [], dots = DOTS.get(s)!, top = dots.slice(0, 12), bot = dots.slice(12);
    const saw = curvesBack(s, GI_TOP, /^saw:/), stair = curvesBack(s, GI_BOT, /^stair:/);
    out.push([`Six teeth read back: each from (n, 0) to (n + 1, 1), the line y = x − n = x − [x] on [n, n + 1), n = −3 to 2`, saw.length === 6 && saw.every(([a, b], i) => close(a[0], NS_I[i]) && close(a[1], 0) && close(b[0], NS_I[i] + 1) && close(b[1], 1) && close(frac1(a[0] + 0.5), (a[1] + b[1]) / 2))]);
    out.push(['Filled dots on the x-axis at each integer ({n} = 0) and open dots at height 1 (never reached: {x} < 1)', top.length === 12 && top.every((d) => (d.y === 0) === !d.open && (d.open ? frac1(d.x) !== d.y : frac1(d.x) === d.y))]);
    const xs = Array.from({ length: 61 }, (_, i) => -3 + i / 10 + 0.013);
    out.push(['{x + 1} = {x} at every sample, while T = 1/2 fails ({0.5} = 0.5 ≠ {0} = 0): fundamental period 1', xs.every((x) => close(frac1(x + 1), frac1(x), 1e-9)) && frac1(0.5) !== frac1(0)]);
    const H = HATCH.get(s) ?? [], xa = gx(GI_TOP, 1), xb = gx(GI_TOP, 2), T = linesNamed(s, /^T$/);
    out.push([`The band 1 ≤ x ≤ 2 hatched (${H.length} strokes) and spanned by the double arrow T = 1, one tooth exactly`, H.length > 8 && hatchAll(s, (p) => p[0] > xa && p[0] < xb) && T.length === 2 && close(Math.min(...T.map((l) => l.pts[1][0])), xa + 2) && close(Math.max(...T.map((l) => l.pts[1][0])), xb - 2)]);
    out.push([`Six steps read back: height n on [n, n + 1), filled at the left end, open at the right; [x + 1] = [x] + 1, so it climbs and never repeats`, stair.length === 6 && stair.every(([a, b], i) => close(a[1], NS_I[i]) && close(b[1], NS_I[i]) && close(a[0], NS_I[i]) && close(b[0], NS_I[i] + 1)) && bot.length === 12 && bot.every((d) => (Math.floor(d.x) === d.y) === !d.open) && Math.floor(2.5 + 1) === Math.floor(2.5) + 1]);
    const miss = allLabels(s, ['y = {x} = x − [x]', 'y = [x]', 'T = 1', 'same ingredient, drifts upward forever, never repeats', '1', '2', '−2', '−3', '3']);
    out.push([`The labels as printed${miss.length ? `; missing ${miss.join(', ')}` : ''}`, miss.length === 0]);
    out.push(...layout(s));
    return out;
  },
};

/* Additional topic J's "Figure 5" · four readings of one parabola (p. 170) */
const CAPJ1 = 'Four readings of the same parabola <i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> − 4<i>x</i> + 3 (dashed grey reference in the last three panels): <i>f</i>(<i>x</i>) with vertex (2, −1); |<i>f</i>(<i>x</i>)| with the arc between the roots flipped to a hump at (2, 1); <i>f</i>(|<i>x</i>|) with the <i>x</i> ≥ 0 branch mirrored, giving roots ±1, ±3 and a local peak at (0, 3); and |<i>y</i>| = <i>f</i>(<i>x</i>), which is empty on 1 < <i>x</i> < 3 and doubles up elsewhere, so it is not a function.';
const fJ = (x: number) => x * x - 4 * x + 3;
type CaseJ = { chip: string; cap: string; k: 0 | 1 | 2 | 3; title: string; g: Gr; h: number; ax: AxOpt };
const GJ_A: Gr = { ox: 55, oy: 210, ux: 50, uy: 30, x: [-0.7, 4.9], y: [-1.6, 5.8] };
const CASESJ: CaseJ[] = [
  { chip: 'f(x)', cap: CAPJ1, k: 0, title: `${I('f')}(${I('x')}) = ${I('x')}<sup>2</sup> − 4${I('x')} + 3`, g: GJ_A, h: 268, ax: { xt: [1, 3], yt: [3], xdy: 21, O: 'bl' } },
  { chip: '|f(x)|', cap: CAPJ1, k: 1, title: `|${I('f')}(${I('x')})|: flip the negative arc up`, g: GJ_A, h: 268, ax: { xt: [1, 3], yt: [3], xdy: 21, O: 'bl' } },
  { chip: 'f(|x|)', cap: CAPJ1, k: 2, title: `${I('f')}(|${I('x')}|): keep ${I('x')} ≥ 0, mirror it`, g: { ox: 170, oy: 210, ux: 32, uy: 30, x: [-4.9, 4.9], y: [-1.6, 5.8] }, h: 268, ax: { xt: [-3, -1, 1, 3], yt: [3], xdy: 21, xdx: { '-3': -9, '-1': 9, '1': -9, '3': 9 }, Oat: [-7, -8, 'end'] } },
  { chip: '|y| = f(x)', cap: CAPJ1, k: 3, title: `|${I('y')}| = ${I('f')}(${I('x')}): not a function`, g: { ox: 55, oy: 158, ux: 50, uy: 21, x: [-0.7, 4.9], y: [-5.8, 5.8] }, h: 290, ax: { xt: [1, 3], yt: [4, -4], yRight: ['4', '-4'], xdy: 21, O: 'bl' } },
];
const outside = (x: number) => x <= 1 + 1e-9 || x >= 3 - 1e-9;
const figJ1: Diagram = {
  id: 'm11-02-J-d1',
  topic: 8,
  name: 'Four readings of one parabola',
  cases: CASESJ,
  draw(c: CaseJ) {
    const s = new Sketch(W, c.h), g = c.g;
    lab(s, W / 2, 18, c.title, { size: 14 });
    axes(s, g, c.ax);
    const ref = (a: number, b: number) => curve(s, g, sample(fJ, a, b, 80), { color: C.grey, w: 1.6, dash: true, name: 'curve:ref' });
    if (c.k === 0) {
      curve(s, g, sample(fJ, -0.5, 4.5, 200), { w: 2.2, name: 'curve:main' });
      [1, 3].forEach((x) => ring(s, g, x, 0, C.mari));
      gdot(s, g, 2, -1, false);
      lab(s, gx(g, 2) + 14, gy(g, -1) + 21, '(2, −1)', { size: 12.5 });
    } else if (c.k === 1) {
      ref(1, 3);
      curve(s, g, sample((x) => Math.abs(fJ(x)), -0.5, 4.5, 200), { w: 2.2, name: 'curve:main' });
      [1, 3].forEach((x) => ring(s, g, x, 0, C.mari));
      gdot(s, g, 2, 1, false);
      lab(s, gx(g, 2) + 18, gy(g, 1) - 14, '(2, 1)', { size: 12.5 });
    } else if (c.k === 2) {
      ref(-0.61, 0);
      curve(s, g, sample((x) => fJ(Math.abs(x)), -4.5, 4.5, 360), { w: 2.2, name: 'curve:main' });
      [-3, -1, 1, 3].forEach((x) => ring(s, g, x, 0, C.mari));
      gdot(s, g, 0, 3, false); gdot(s, g, -2, -1, false); gdot(s, g, 2, -1, false);
      lab(s, gx(g, 0) + 10, gy(g, 3) - 8, '(0, 3)', { anchor: 'start', size: 12.5 });
      lab(s, gx(g, 2) + 14, gy(g, -1) + 22, '(±2, −1)', { size: 12.5 });
    } else {
      ref(1, 3);
      [[-0.5, 1], [3, 4.5]].forEach(([a, b]) => {
        curve(s, g, sample(fJ, a, b, 100), { w: 2.2, name: 'curve:main' });
        curve(s, g, sample((x) => -fJ(x), a, b, 100), { color: C.mari, w: 2.2, name: 'curve:mirror' });
      });
      [1, 3].forEach((x) => ring(s, g, x, 0, C.ink));
      lab(s, gx(g, 2), gy(g, -3.2), 'no points', { size: 12, color: C.slate });
      lab(s, gx(g, 2), gy(g, -3.2) + 15, 'here', { size: 12, color: C.slate });
      const refPts = linesNamed(s, /^curve:ref$/)[0].pts, xa = gx(g, 1), xb = gx(g, 3), top = gy(g, 5.6), bot = gy(g, -5.6);
      const rings: Rect[] = [1, 3].map((x) => [gx(g, x) - 7, g.oy - 7, gx(g, x) + 7, g.oy + 7]);
      HATCH.set(s, hatch(s, (p) => p[0] > xa + 4 && p[0] < xb - 4 && p[1] > top && p[1] < bot && Math.abs(p[1] - g.oy) > 4 && toPoly(p, refPts) > 4, [xa, top, xb, bot], { color: C.grey, avoid: rings }));
    }
    return s;
  },
  check(c: CaseJ) {
    const s = figJ1.draw(c), out: Check[] = [], g = c.g, main = curvesBack(s, g, /^curve:main$/).flat(), rings = RINGS.get(s) ?? [], dots = DOTS.get(s) ?? [];
    const rule = [(x: number) => fJ(x), (x: number) => Math.abs(fJ(x)), (x: number) => fJ(Math.abs(x)), (x: number) => fJ(x)][c.k];
    out.push([`The solid curve read back satisfies ${['y = x² − 4x + 3', 'y = |x² − 4x + 3|', 'y = |x|² − 4|x| + 3', 'y = f(x) where f(x) ≥ 0'][c.k]} at every point`, main.every((p) => close(p[1], rule(p[0]), 1e-3)) && (c.k !== 3 || main.every((p) => outside(p[0])))]);
    out.push([`The roots ringed: ${rings.map((r) => fmt(r.x)).join(', ')}, where ${c.k === 2 ? 'f(|x|) = 0, |x| = 1 or 3' : 'f(x) = (x − 1)(x − 3) = 0'}`, rings.every((r) => r.y === 0 && close(rule(r.x), 0)) && rings.length === (c.k === 2 ? 4 : 2)]);
    if (c.k === 0) out.push(['Vertex at x = −b/2a = 2, f(2) = 4 − 8 + 3 = −1, the lowest point, dotted and labelled (2, −1); y-intercept f(0) = 3, the tick 3', fJ(2) === -1 && dots.length === 1 && dots[0].x === 2 && dots[0].y === -1 && fJ(0) === 3 && hasLabel(s, '(2, −1)')]);
    if (c.k === 1) out.push(['On (1, 3) f < 0 and |f| = −f: the dip to −1 flips to a hump at (2, 1); the original dip dashed grey', fJ(2) === -1 && Math.abs(fJ(2)) === 1 && dots[0].y === 1 && curvesBack(s, g, /^curve:ref$/)[0].every((p) => p[1] <= 1e-9) && hasLabel(s, '(2, 1)')]);
    if (c.k === 2) out.push(['f(|x|) is even: peak (0, 3) where the two branches meet, minima (±2, −1); the left branch is the mirror of x ≥ 0, and the dashed grey shows f itself for x < 0', main.every((p) => close(rule(-p[0]), p[1], 1e-3)) && same(dots.map((d) => `${d.x},${d.y}`), ['0,3', '-2,-1', '2,-1']) && fJ(0) === 3 && hasLabel(s, '(0, 3)') && hasLabel(s, '(±2, −1)')]);
    if (c.k === 3) {
      const mirror = curvesBack(s, g, /^curve:mirror$/).flat(), H = HATCH.get(s) ?? [];
      out.push(['The mirror branch is y = −f(x): every point (x, y) drawn has |y| = f(x), two y\'s for each x outside [1, 3], so not a function', mirror.every((p) => close(p[1], -fJ(p[0]), 1e-3)) && [...main, ...mirror].every((p) => close(Math.abs(p[1]), fJ(p[0]), 1e-3)) && mirror.length > 50]);
      out.push([`On 1 < x < 3, f(x) < 0 (f(2) = −1) and |y| = f(x) has no solution: the strip is hatched (${H.length} strokes), no curve point inside it, "no points here"`, fJ(2) < 0 && fJ(1.01) < 0 && fJ(2.99) < 0 && H.length > 20 && hatchAll(s, (p) => p[0] > gx(g, 1) && p[0] < gx(g, 3)) && hasLabel(s, 'no points') && hasLabel(s, 'here')]);
    }
    out.push([`The panel titled "${plain(c.title)}", as printed with its dash a colon`, hasLabel(s, plain(c.title)) && !c.title.includes('—')]);
    out.push(...layout(s));
    return out;
  },
};

/** Mathematics 11, Chapter 2 Relations and Functions: the book's figures, redrawn. */
export const DIAGRAMS_MATHEMATICS_11_02: Diagram[] = [fig21, fig22, figD1, figD2, fig25, fig23, fig24, figF1, figG1, figH1, figI1, figJ1];
