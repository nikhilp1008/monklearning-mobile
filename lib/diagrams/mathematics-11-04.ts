import { C, LABEL_GAP, Rect, Sketch, mathW, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';
import { setRun, stixW } from '@/lib/diagrams/mathematics-11-03b';

/**
 * MATHEMATICS CLASS 11, CHAPTER 4 (Complex Numbers and Quadratic Equations): every drawing of the Master
 * Reference book (October edition) on pp. 337–413, redrawn.
 *
 *   Figure 4.1 (p. 339; caption first on p. 338), multiplying by i is a quarter-turn, Topic 01, topic index 0.
 *   Figure 4.2 (p. 347; caption p. 346), the conjugate as a mirror image, Topic 02, index 1.
 *   Figure 4.3 (p. 354; caption p. 353), polar form, Topic 03, index 2.
 *   Figure 4.4 (p. 360; caption p. 359), where the roots sit for D > 0, D = 0, D < 0, Topic 04, index 3.
 *   Figure 4.5 (p. 367; caption p. 366), the roots of unity as regular polygons, Topic 05, index 4.
 *   Figure 4.6 (p. 373; caption p. 372), the rotation theorem and the circle locus, Topic 06, index 5.
 *   Figure 4.7 (p. 382; caption p. 381), sign, vertex and range of a real quadratic, Topic 07, index 6.
 *   Figure 4.8 (p. 384; caption p. 383), locating the roots against a signpost k, Topic 07, index 6.
 *   Topic 08's own "Figure 1" (p. 400), the transformation rule, m11-04-08-d1, index 7.
 *   Topic 09's own "Figure 2" (p. 410), the orthocentre H = z₁ + z₂ + z₃ and dot and cross from ūv, m11-04-09-d1, index 8.
 *
 * ONE HIGHLIGHT. The book's orange is the one marigold highlight wherever it marks the thing the drawing is about:
 * 4.1 the four ×i quarter-turn arrows; 4.2 the conjugate z̅ and its vector; 4.3 the angle θ = arg z; 4.5 the angle
 * 2π/n; 4.6 the angle θ (rotation) and the circle |z − z₀| = r with its nearest and farthest points (circle); 4.8 the
 * signpost k, its dashed line and f(k); Topic 08's Figure 1 the solid arrows φ; Topic 09's Figure 2 the altitude from A
 * through H (and H), and the angle θ between u and v. Where the book has none, or more than one use: 4.4 the roots in every case
 * (the book's orange is only on the conjugate pair; here every case's roots are the highlight, so the cases read
 * alike); 4.7 the vertex (−b/2a, −D/4a), which sets the range. The book's navy and green are ink, its grey slate.
 *
 * NO FILLS. 4.5's pale polygons and 4.6's pale triangle and disc, and Topic 09's Figure 2's pale triangle, are tints that mark no region a question asks about:
 * left out (the outlines stay). 4.7 and 4.8 colour a band along the x-axis, teal where f(x) > 0 and terracotta where
 * f(x) < 0: here (decision 18) the band and its key are gone, and a small "+" or "−" in ink is printed just above the
 * x-axis over each stretch where f(x) > 0 or f(x) < 0, the sign scheme used for inequalities (the marigold is kept for
 * the vertex and for k). Where f keeps one sign along the whole axis, a sign stands on each side of the vertex.
 *
 * POINTS on a graph, a circle or the plane are filled dots (decision 10): 4.7 and 4.8's roots, printed as hollow
 * rings, are filled; 4.4's repeated root keeps the book's ring round its dot (it marks the double root).
 *
 * DEPARTURES, for a phone: the book's grid lines are left out (the tick numbers stay); labels the book runs along a
 * line (4.2's |z| = √13, 4.3's r = |z| and y = r sin θ, 4.6's z₂ − z₁ and z₃ − z₁) are set level beside it; dashed
 * helpers are broken round the labels they cross (4.2's and 4.3's projections at the tick 3 and 1, 4.3's at θ = arg z,
 * 4.6's line OZ at z₀ = 3 + 4i). Multi-panel figures are chips, one panel each, on one scale: 4.4 (three cases), 4.5
 * (n = 3 and n = 4), 4.6 (rotation and locus), Topic 09's Figure 2 (orthocentre; dot and cross), 4.7 (six cases, the book's heading as the chip and on the drawing), 4.8
 * (four cases). The house O is added at the origin of every Argand plane (the book prints it only on 4.6's right
 * panel), and 4.7 and 4.8 gain axis names x and y. Fractions on the drawings (2π/3, 2π/4, π/3, −b/2a, −D/4a) are stacked
 * by hand with STIX's real widths (stixW, setRun from mathematics-11-03b.ts); captions write them with <frac>. Topic 08's Figure 1 sets the
 * second φ label right of its arrow (the book: left, where it would crowd ψ); its caption's pair of dashes round "the dashed
 * arrow" become commas. Topic 09's Figure 2 draws A at 100°, B and C at 210° and 330° on the circumcircle (BC level, as
 * printed). No em dash.
 */

const W = 340;
type P = [number, number];
const fmt = (n: number, d = 2) => String(+n.toFixed(d)).replace('-', '−');
const len = (a: P, b: P) => Math.hypot(b[0] - a[0], b[1] - a[1]);
const plain = (html: string) => html.replace(/<[^>]+>/g, '');
const widthOf = (html: string, size: number) => Math.max(mathW(html, size), plain(html).length * size * 0.5);
const I = (t: string) => `<i>${t}</i>`;
const close = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) < tol;
const fr = (n: string, d: string) => `<frac><num>${n}</num><den>${d}</den></frac>`;
const DEG = Math.PI / 180;
/** A point at `r` from c, at `deg` degrees measured anticlockwise from the x-axis (screen y runs down). */
const pol = (c: P, r: number, deg: number): P => [c[0] + r * Math.cos(deg * DEG), c[1] - r * Math.sin(deg * DEG)];
const angOf = (c: P, p: P) => { const a = Math.atan2(c[1] - p[1], p[0] - c[0]) / DEG; return a < 0 ? a + 360 : a; };

/* ---------- lines, labels and the layout checks (as in mathematics-11-02.ts) ---------- */
type Stroke = { color?: string; w?: number; dash?: boolean | string; name?: string };
const LINES = new WeakMap<Sketch, { name: string; pts: P[] }[]>();
const keep = (s: Sketch, pts: P[], name = '') => { const l = LINES.get(s) ?? []; l.push({ name, pts }); LINES.set(s, l); };
const linesNamed = (s: Sketch, re: RegExp) => (LINES.get(s) ?? []).filter((l) => re.test(l.name));
const dashAttr = (d: Stroke['dash']) => (d === true ? ' stroke-dasharray="5 4"' : d ? ` stroke-dasharray="${d}"` : '');
function path(s: Sketch, pts: P[], o: Stroke = {}) {
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ');
  s.add(`<path d="${d}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}" stroke-linejoin="round" stroke-linecap="round"${dashAttr(o.dash)}/>`);
  keep(s, pts, o.name);
}
function arrow(s: Sketch, a: P, b: P, o: Stroke = {}) {
  s.vec(a[0], a[1], b[0], b[1], { color: o.color ?? C.ink, w: o.w ?? 1.5, dash: !!o.dash });
  keep(s, [a, b], o.name);
}
/** An arc of a circle, from a0 to a1 degrees, as a polyline. */
const arcPts = (c: P, r: number, a0: number, a1: number, n = 60): P[] => Array.from({ length: n + 1 }, (_, i) => pol(c, r, a0 + ((a1 - a0) * i) / n));
/** A polyline drawn in pieces, broken wherever it comes within `gap` of a rect in `avoid`. */
function brokenPath(s: Sketch, pts: P[], avoid: Rect[], gap: number, o: Stroke = {}) {
  const fine: P[] = [];
  for (let i = 0; i < pts.length - 1; i++) {
    const n = Math.max(1, Math.ceil(len(pts[i], pts[i + 1])));
    for (let k = 0; k < n; k++) fine.push([pts[i][0] + ((pts[i + 1][0] - pts[i][0]) * k) / n, pts[i][1] + ((pts[i + 1][1] - pts[i][1]) * k) / n]);
  }
  fine.push(pts[pts.length - 1]);
  let run: P[] = [];
  const flush = () => { if (run.length > 1) path(s, run, o); run = []; };
  fine.forEach((p) => { if (avoid.some((r) => rectDist(r, p) < gap)) flush(); else run.push(p); });
  flush();
}
/** A curved arrow: a quadratic Bézier from a through ctrl to b, with a head at b. */
function bend(s: Sketch, a: P, ctrl: P, b: P, o: Stroke = {}) {
  const pts = Array.from({ length: 31 }, (_, i): P => { const t = i / 30, u = 1 - t; return [u * u * a[0] + 2 * u * t * ctrl[0] + t * t * b[0], u * u * a[1] + 2 * u * t * ctrl[1] + t * t * b[1]]; });
  path(s, pts.slice(0, -3), { ...o, w: o.w ?? 1.3 });
  s.vec(pts[pts.length - 4][0], pts[pts.length - 4][1], b[0], b[1], { color: o.color ?? C.slate, w: o.w ?? 1.3 });
  keep(s, pts.slice(-4), o.name);
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
function clearance(s: Sketch): { gap: number; what: string } {
  let gap = Infinity, what = '';
  const boxes: [string, Rect][] = [...s.tags.map((t): [string, Rect] => [t.name, t.rect]), ...s.labels.map((l): [string, Rect] => [l.text, l.rect])];
  for (const { pts, name: ln } of LINES.get(s) ?? []) for (const [name, r] of boxes) { const d = boxToLine(r, pts); if (d < gap) { gap = d; what = `${name}" (from the ${ln || 'line'}`; } }
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
const hasLabel = (s: Sketch, t: string) => s.labels.some((l) => l.text === t);
const allLabels = (s: Sketch, ts: string[]) => ts.filter((t) => !hasLabel(s, t));
const labelsCheck = (s: Sketch, ts: string[], what = 'The labels as printed'): Check => {
  const miss = allLabels(s, ts);
  return [`${what}: ${ts.join(' · ')}${miss.length ? `; missing ${miss.join(', ')}` : ''}`, miss.length === 0];
};
/** No vulgar-fraction characters and no em dash in anything the drawing shows. */
const noBadChars = (s: Sketch, d: Diagram): Check => {
  const all = [...s.labels.map((l) => l.text), d.name, ...d.cases.flatMap((c) => [c.chip, c.cap])].join(' ');
  return ['No em dash and no vulgar-fraction character in the labels, name, chips or captions', !/[\u2014\u00bc-\u00be\u2150-\u215e]/.test(all)];
};

/** A line of STIX on the drawing, from its baseline, its box at its true width. */
function lab(s: Sketch, x: number, y: number, html: string, o: { size?: number; anchor?: 'start' | 'middle' | 'end'; color?: string } = {}): Rect {
  const size = o.size ?? 13, anchor = o.anchor ?? 'middle', w = widthOf(html, size);
  const x0 = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w : x;
  const rect: Rect = [x0, y - size * 0.72, x0 + w, y + size * (html.includes('<sub>') ? 0.36 : 0.22)];
  s.labels.push({ text: plain(html), rect });
  s.text(x, y, html, { size, anchor, color: o.color ?? C.text });
  return rect;
}

/* ---------- stacked fractions, drawn by hand ---------- */
/**
 * A run of a label: text; text set larger (a bracket round a stacked fraction); a stacked fraction; or a Σ with
 * its limits stacked over and under it.
 */
type Piece = { t: string; big?: boolean } | { num: string; den: string } | { sum: true; top: string; bot: string };
const FRACS = new WeakMap<Sketch, { num: string; den: string; rule: [number, number, number]; numY: number; denY: number; numW: number; denW: number }[]>();
const FRAC_PAD = 2;
const fracW = (num: string, den: string, size: number) => Math.max(widthOf(num, size), widthOf(den, size)) + 2 * FRAC_PAD;
function frac(s: Sketch, x: number, y: number, num: string, den: string, size: number, color: string): Rect {
  const w = fracW(num, den, size), numY = y - 3, denY = y + 3 + size * 0.68;
  s.text(x, numY, num, { size, color });
  s.text(x, denY, den, { size, color });
  s.add(`<line x1="${r1(x - w / 2)}" y1="${r1(y)}" x2="${r1(x + w / 2)}" y2="${r1(y)}" stroke="${color}" stroke-width="1.1"/>`);
  FRACS.set(s, [...(FRACS.get(s) ?? []), { num, den, rule: [x - w / 2, x + w / 2, y], numY, denY, numW: widthOf(num, size), denW: widthOf(den, size) }]);
  return [x - w / 2, numY - size * 0.72, x + w / 2, denY + size * 0.22];
}
const BIG = 1.45;
const SUM_LIM = 0.75;
/** A run's own width on the phone; a fraction keeps its rule (as wide as mathW says) and a point of room each side. */
const pieceW = (p: Piece, size: number) =>
  'sum' in p ? Math.max(stixW('∑', size * 1.5), stixW(p.bot, size * SUM_LIM), stixW(p.top, size * SUM_LIM)) + 3 : 't' in p ? stixW(p.t, p.big ? size * BIG : size) + (p.big ? 1 : 0) : fracW(p.num, p.den, size) + 2;
const pieceText = (p: Piece) => ('sum' in p ? `∑[${plain(p.bot)}..${plain(p.top)}]` : 't' in p ? plain(p.t) : `${plain(p.num)}/${plain(p.den)}`);
/** One label made of runs, its fractions' rules on the maths axis. Registered as ONE label. */
function runs(s: Sketch, x: number, y: number, parts: Piece[], o: { size?: number; anchor?: 'start' | 'middle' | 'end'; color?: string } = {}): Rect {
  const size = o.size ?? 13, color = o.color ?? C.text, ws = parts.map((p) => pieceW(p, size)), total = ws.reduce((a, b) => a + b, 0);
  let at = o.anchor === 'middle' ? x - total / 2 : o.anchor === 'end' ? x - total : x;
  const box: Rect = [at, y - size * 0.72, at + total, y + size * 0.22];
  parts.forEach((p, i) => {
    if ('sum' in p) {
      const cx = at + ws[i] / 2;
      s.text(cx, y + size * 0.2, '∑', { size: size * 1.5, color });
      s.text(cx, y - size * 1.02, p.top, { size: size * SUM_LIM, color });
      s.text(cx, y + size * 0.98, p.bot, { size: size * SUM_LIM, color });
      box[1] = Math.min(box[1], y - size * 1.6); box[3] = Math.max(box[3], y + size * 1.15);
    } else if ('t' in p) {
      if (p.big) { s.text(at, y + size * 0.13, p.t, { size: size * BIG, anchor: 'start', color }); box[1] = Math.min(box[1], y - size * 1.1); box[3] = Math.max(box[3], y + size * 0.45); }
      else setRun(s, at, ws[i], y, p.t, size, color, i < parts.length - 1);
    } else {
      const r = frac(s, at + ws[i] / 2, y - size * 0.27, p.num, p.den, size, color);
      box[1] = Math.min(box[1], r[1]); box[3] = Math.max(box[3], r[3]);
    }
    at += ws[i];
  });
  s.labels.push({ text: parts.map(pieceText).join(''), rect: box });
  return box;
}
/** Every stacked fraction really is stacked: numerator above the rule, denominator below, the rule as wide as both. */
const stackedCheck = (s: Sketch, want: string[]): Check => {
  const fr = FRACS.get(s) ?? [], got = fr.map((f) => `${plain(f.num)}/${plain(f.den)}`);
  const ok = fr.every((f) => f.numY < f.rule[2] && f.denY - 6 > f.rule[2] && f.rule[1] - f.rule[0] >= Math.max(f.numW, f.denW)) && want.every((w) => got.includes(w));
  return [`Every fraction on the drawing is stacked by hand (${fr.length}: ${[...new Set(got)].join(', ')}), numerator over the rule over denominator`, ok];
};

/* ---------- dots and graphs ---------- */
const DOTS = new WeakMap<Sketch, { p: P; name: string }[]>();
const DOT_R = 3.6;
/** A filled dot (a point on a curve, a circle or a line: decision 10), kept as a ring for the clearance check. */
function pt(s: Sketch, p: P, name: string, col: string = C.ink, r = DOT_R) {
  s.dot(p[0], p[1], r, col);
  keep(s, Array.from({ length: 25 }, (_, i): P => [p[0] + (r + 1) * Math.cos((2 * Math.PI * i) / 24), p[1] + (r + 1) * Math.sin((2 * Math.PI * i) / 24)]), `dot:${name}`);
  DOTS.set(s, [...(DOTS.get(s) ?? []), { p, name }]);
}
const dotsOf = (s: Sketch) => DOTS.get(s) ?? [];
const dotAt = (s: Sketch, name: string) => dotsOf(s).find((d) => d.name === name)?.p;
type Gr = { ox: number; oy: number; ux: number; uy: number };
const gx = (g: Gr, v: number) => g.ox + v * g.ux;
const gy = (g: Gr, v: number) => g.oy - v * g.uy;
const gp = (g: Gr, p: P): P => [gx(g, p[0]), gy(g, p[1])];
const unPx = (g: Gr, p: P): P => [(p[0] - g.ox) / g.ux, (g.oy - p[1]) / g.uy];
const AXIS_W = 1.3;
const tick = (s: Sketch, x: number, y: number, vertical = true) => {
  if (vertical) { s.line(x, y - 4, x, y + 4, { color: C.slate, w: 1.1 }); keep(s, [[x, y - 4], [x, y + 4]], 'tick'); }
  else { s.line(x - 4, y, x + 4, y, { color: C.slate, w: 1.1 }); keep(s, [[x - 4, y], [x + 4, y]], 'tick'); }
};
const sample = (f: (x: number) => number, a: number, b: number, n = 200): P[] => Array.from({ length: n + 1 }, (_, i) => { const x = a + ((b - a) * i) / n; return [x, f(x)]; });
const curve = (s: Sketch, g: Gr, pts: P[], o: Stroke = {}) => path(s, pts.map((p) => gp(g, p)), { color: o.color ?? C.ink, w: o.w ?? 2, dash: o.dash, name: o.name ?? 'curve' });
const curvesBack = (s: Sketch, g: Gr, re: RegExp) => linesNamed(s, re).map((l) => l.pts.map((p) => unPx(g, p)));
/** A small angle mark: an arc at c of radius r from a0 to a1 degrees. */
const angle = (s: Sketch, c: P, r: number, a0: number, a1: number, o: Stroke = {}) => path(s, arcPts(c, r, a0, a1, 40), { color: o.color ?? C.ink, w: o.w ?? 1.5, name: o.name ?? 'angle' });
/** A right-angle mark at corner c, its legs along unit directions u and v. */
function square(s: Sketch, c: P, u: P, v: P, k = 9, col: string = C.slate) {
  const a: P = [c[0] + u[0] * k, c[1] + u[1] * k], b: P = [a[0] + v[0] * k, a[1] + v[1] * k], d: P = [c[0] + v[0] * k, c[1] + v[1] * k];
  path(s, [a, b, d], { color: col, w: 1.1, name: 'right-angle' });
}

/* ---------- this chapter's own pieces ---------- */
type Cx = [number, number];
const mul = (a: Cx, b: Cx): Cx => [a[0] * b[0] - a[1] * b[1], a[0] * b[1] + a[1] * b[0]];
const BAR = '̅';
/** Axes with arrowheads in slate, named as printed (Re(z), Im(z), Re, Im, x, y). */
function axesN(s: Sketch, x0: number, x1: number, oy: number, y0: number, y1: number, ox: number, xName: string, yName: string, size = 15) {
  arrow(s, [x0, oy], [x1, oy], { color: C.slate, w: AXIS_W, name: 'axis:x' });
  arrow(s, [ox, y0], [ox, y1], { color: C.slate, w: AXIS_W, name: 'axis:y' });
  lab(s, x1 + 5, oy + 5, xName, { anchor: 'start', size });
  lab(s, ox + 7, y1 + 6, yName, { anchor: 'start', size });
}
/** The origin's O, below and left of it. */
const origin = (s: Sketch, ox: number, oy: number, size = 14) => lab(s, ox - 6, oy + 17, I('O'), { anchor: 'end', size });
/** A tick number under the x-axis or left of the y-axis, in slate. */
const xNum = (s: Sketch, x: number, oy: number, t: string) => { tick(s, x, oy); return lab(s, x, oy + 19, t, { size: 12, color: C.slate }); };
const yNum = (s: Sketch, ox: number, y: number, t: string) => { tick(s, ox, y, false); return lab(s, ox - 8, y + 4, t, { size: 12, anchor: 'end', color: C.slate }); };
/** An arc arrow round c, anticlockwise from a0 to a1 degrees, the head at a1. */
function arcArrow(s: Sketch, c: P, r: number, a0: number, a1: number, col: string, name: string) {
  path(s, arcPts(c, r, a0, a1 - 6, 40), { color: col, w: 1.8, name });
  const a = pol(c, r, a1 - 9), b = pol(c, r, a1);
  s.vec(a[0], a[1], b[0], b[1], { color: col, w: 1.8 });
  keep(s, [a, b], `${name}:head`);
}
/** An arrow from a to the edge of the dot at b (so the head is not lost under the dot). */
const toDot = (s: Sketch, a: P, b: P, o: Stroke = {}) => { const d = len(a, b), k = (d - DOT_R - 1.5) / d; arrow(s, a, [a[0] + (b[0] - a[0]) * k, a[1] + (b[1] - a[1]) * k], o); };
const dotted = '1.5 3.5';
/** A two-headed arrow between a and b. */
function both(s: Sketch, a: P, b: P, o: Stroke = {}) {
  const col = o.color ?? C.slate, w = o.w ?? 1.3;
  s.vec((a[0] + b[0]) / 2, (a[1] + b[1]) / 2, b[0], b[1], { color: col, w });
  s.vec((a[0] + b[0]) / 2, (a[1] + b[1]) / 2, a[0], a[1], { color: col, w });
  keep(s, [a, b], o.name);
}

/* ===================================================================== */
/* Figure 4.1 · multiplying by i is a quarter-turn (Topic 01, p. 339)    */
/* ===================================================================== */
const CAP41 = 'Multiplying by <i>i</i> is a quarter-turn: 1 → <i>i</i> → −1 → −<i>i</i> → 1.';
const O41: P = [166, 172], R41 = 76, RA41 = 100;
const POW41: Cx[] = [[1, 0], [0, 1], [-1, 0], [0, -1]];
const fig41: Diagram = {
  id: 'm11-04-fig-4.1',
  topic: 0,
  name: 'Multiplying by i is a quarter-turn',
  cases: [{ chip: 'Four quarter-turns', cap: CAP41 }],
  draw() {
    const s = new Sketch(W, 336), O = O41, r = R41;
    axesN(s, 14, 290, O[1], 322, 22, O[0], `Re(${I('z')})`, `Im(${I('z')})`);
    path(s, arcPts(O, r, 0, 360, 240), { color: C.slate, w: 1.4, name: 'circle' });
    for (let k = 0; k < 4; k++) {
      arcArrow(s, O, RA41, 90 * k + 8, 90 * k + 82, C.mari, `turn:${k}`);
      lab(s, ...pol(O, RA41 + 22, 90 * k + 45), `×${I('i')}`, { size: 14, color: C.amber });
    }
    POW41.forEach((z, k) => pt(s, pol(O, r, angOf([0, 0], [z[0], -z[1]])), ['1', 'i', '−1', '−i'][k]));
    lab(s, O[0] - 8, O[1] - r + 22, I('i'), { anchor: 'end', size: 15 });
    lab(s, O[0] - r + 11, O[1] - 14, `${I('i')}<sup>2</sup> = −1`, { anchor: 'start', size: 15 });
    lab(s, O[0] + r - 10, O[1] + 20, `1 = ${I('i')}<sup>4</sup>`, { anchor: 'end', size: 15 });
    lab(s, O[0] + 6, O[1] + 41, `${I('i')}<sup>3</sup> = −${I('i')}`, { anchor: 'start', size: 14 });
    origin(s, O[0], O[1]);
    return s;
  },
  check() {
    const s = fig41.draw(fig41.cases[0]), out: Check[] = [], O = O41;
    const seq = [0, 1, 2, 3, 4].reduce<Cx[]>((acc, k) => (k ? [...acc, mul(acc[k - 1], [0, 1])] : [[1, 0]]), []);
    out.push([`Multiplying by i four times: 1 → ${seq.slice(1).map(([a, b]) => (b ? `${b < 0 ? '−' : ''}i` : fmt(a))).join(' → ')}, i² = −1, i³ = −i, i⁴ = 1`, seq.every((z, k) => close(z[0], POW41[k % 4][0]) && close(z[1], POW41[k % 4][1]))]);
    const ds = dotsOf(s);
    out.push([`The four powers sit on the unit circle at ${ds.map((d) => `${fmt(angOf(O, d.p), 1)}°`).join(', ')}: each a quarter-turn (90°) on from the one before`, ds.length === 4 && ds.every((d, k) => close(angOf(O, d.p), 90 * k, 1e-6) && close(len(O, d.p), R41, 1e-6))]);
    const turns = [0, 1, 2, 3].map((k) => linesNamed(s, new RegExp(`^turn:${k}$`))[0]?.pts ?? []);
    out.push(['Four ×i arrows, each turning anticlockwise through one quadrant (the highlight), its head at the next power', turns.every((pts, k) => pts.length > 2 && angOf(O, pts[0]) < angOf(O, pts[pts.length - 1]) && angOf(O, pts[0]) > 90 * k && angOf(O, pts[pts.length - 1]) < 90 * (k + 1))]);
    out.push(labelsCheck(s, ['Re(z)', 'Im(z)', 'i', 'i2 = −1', '1 = i4', 'i3 = −i', '×i', 'O']));
    out.push(['"×i" printed four times, once beside each arrow', s.labels.filter((l) => l.text === '×i').length === 4]);
    out.push(noBadChars(s, fig41));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 4.2 · the conjugate as a mirror image (Topic 02, p. 347)       */
/* ===================================================================== */
const CAP42 = 'The conjugate is a mirror image in the real axis; |<i>z</i>| is a distance.';
const G42: Gr = { ox: 40, oy: 176, ux: 54, uy: 48 };
const Z42: Cx = [3, 2];
const fig42: Diagram = {
  id: 'm11-04-fig-4.2',
  topic: 1,
  name: 'The conjugate is a mirror image',
  cases: [{ chip: 'z = 3 + 2i', cap: CAP42 }],
  draw() {
    const s = new Sketch(W, 326), g = G42, z = gp(g, Z42), zb = gp(g, [Z42[0], -Z42[1]]);
    axesN(s, 12, 287, g.oy, 318, 26, g.ox, `Re(${I('z')})`, `Im(${I('z')})`);
    const nums = [1, 2, 3, 4].map((v) => xNum(s, gx(g, v), g.oy, String(v)));
    [2, 1, -1, -2].forEach((v) => yNum(s, g.ox, gy(g, v), fmt(v)));
    origin(s, g.ox, g.oy);
    brokenPath(s, [z, zb], [nums[2]], 5, { color: C.slate, w: 1.1, dash: '4 3', name: 'mirror' });
    toDot(s, [g.ox, g.oy], z, { color: C.ink, w: 1.9, name: 'vec:z' });
    toDot(s, [g.ox, g.oy], zb, { color: C.mari, w: 1.9, name: 'vec:zbar' });
    pt(s, z, 'z'); pt(s, zb, 'zbar', C.mari);
    lab(s, z[0] + 9, z[1] - 8, `${I('z')} = 3 + 2${I('i')}`, { anchor: 'start', size: 15 });
    lab(s, zb[0] + 9, zb[1] + 22, `${I('z')}${BAR} = 3 − 2${I('i')}`, { anchor: 'start', size: 15, color: C.amber });
    lab(s, 54, 116, `|${I('z')}| = √13`, { anchor: 'start', size: 14 });
    lab(s, 54, 248, `|${I('z')}${BAR}| = √13`, { anchor: 'start', size: 14, color: C.amber });
    const ax = gx(g, 3.3);
    both(s, [ax, gy(g, 1.92)], [ax, gy(g, -1.92)], { color: C.slate, w: 1.3, name: 'twoIm' });
    lab(s, ax + 8, gy(g, 1) + 4, `2 Im ${I('z')} = 4`, { anchor: 'start', size: 13, color: C.slate });
    lab(s, ax + 6, g.oy - 12, 'mirror line', { anchor: 'start', size: 12, color: C.slate });
    return s;
  },
  check() {
    const s = fig42.draw(fig42.cases[0]), out: Check[] = [], g = G42;
    const z = unPx(g, dotAt(s, 'z')!), zb = unPx(g, dotAt(s, 'zbar')!);
    out.push([`z reads back (${fmt(z[0])}, ${fmt(z[1])}) = 3 + 2i and z̅ (${fmt(zb[0])}, ${fmt(zb[1])}) = 3 − 2i: the same real part, the imaginary part negated (the mirror image in the real axis)`, close(z[0], 3) && close(z[1], 2) && close(zb[0], 3) && close(zb[1], -2)]);
    out.push([`|z| = |z̅| = √(3² + 2²) = √13 = ${fmt(Math.sqrt(13), 4)}: both vectors measure ${fmt(Math.hypot(...z), 4)} and ${fmt(Math.hypot(...zb), 4)} units`, close(Math.hypot(...z), Math.sqrt(13)) && close(Math.hypot(...zb), Math.sqrt(13))]);
    const zz = mul([z[0], z[1]], [zb[0], zb[1]]);
    out.push([`z − z̅ = 2i Im z = 4i (the two-headed arrow spans 2 Im z = 4 units), and z·z̅ = ${fmt(zz[0])} = |z|²`, close(z[1] - zb[1], 4) && close(zz[0], 13) && close(zz[1], 0)]);
    const tw = linesNamed(s, /^twoIm$/)[0].pts;
    out.push(['The arrow 2 Im z runs between the levels of z and z̅, beside the dashed mirror segment', close(Math.abs(tw[0][1] - tw[1][1]) / g.uy, 3.84, 1e-6)]);
    out.push(['z and z̅ are filled dots (decision 10); the conjugate and its vector are the highlight', dotsOf(s).length === 2 && linesNamed(s, /^vec:zbar$/).length === 1]);
    out.push(labelsCheck(s, ['Re(z)', 'Im(z)', 'z = 3 + 2i', `z${BAR} = 3 − 2i`, '|z| = √13', `|z${BAR}| = √13`, '2 Im z = 4', 'mirror line', '1', '2', '3', '4', '−1', '−2', 'O']));
    out.push(noBadChars(s, fig42));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 4.3 · polar form (Topic 03, p. 354)                            */
/* ===================================================================== */
const CAP43 = 'Polar form: the modulus <i>r</i>, the argument <i>θ</i>, and the two projections.';
const G43: Gr = { ox: 80, oy: 266, ux: 92, uy: 92 };
const fig43: Diagram = {
  id: 'm11-04-fig-4.3',
  topic: 2,
  name: 'Polar form',
  cases: [{ chip: 'z = 1 + i√3', cap: CAP43 }],
  draw() {
    const s = new Sketch(W, 316), g = G43, Pp = gp(g, [1, Math.sqrt(3)]), O: P = [g.ox, g.oy];
    axesN(s, 40, 288, g.oy, 312, 24, g.ox, `Re(${I('z')})`, `Im(${I('z')})`);
    const n1 = xNum(s, gx(g, 1), g.oy, '1');
    xNum(s, gx(g, 2), g.oy, '2');
    yNum(s, g.ox, gy(g, 1), '1'); yNum(s, g.ox, gy(g, 2), '2');
    origin(s, g.ox, g.oy);
    angle(s, O, 44, 0, 60, { color: C.mari, w: 2, name: 'angle:theta' });
    const th = lab(s, ...pol(O, 54, 24), `${I('θ')} = arg ${I('z')}`, { anchor: 'start', size: 13, color: C.amber });
    brokenPath(s, [Pp, [Pp[0], g.oy]], [n1, th], 5, { color: C.slate, w: 1.1, dash: '4 3', name: 'proj:x' });
    path(s, [Pp, [g.ox, Pp[1]]], { color: C.slate, w: 1.1, dash: '4 3', name: 'proj:y' });
    toDot(s, O, Pp, { color: C.ink, w: 2, name: 'radius' });
    pt(s, Pp, 'P');
    lab(s, Pp[0] + 9, Pp[1] - 9, `${I('P')}(${I('x')}, ${I('y')})`, { anchor: 'start', size: 15 });
    lab(s, Pp[0] + 16, Pp[1] + 36, `${I('z')} = 1 + ${I('i')}√3`, { anchor: 'start', size: 14 });
    runs(s, Pp[0] + 16, Pp[1] + 66, [{ t: `${I('r')} = 2,  ${I('θ')} = ` }, { num: 'π', den: '3' }], { anchor: 'start', size: 14 });
    lab(s, 140, gy(g, 1.3), `${I('r')} = |${I('z')}|`, { anchor: 'end', size: 13.5 });
    lab(s, g.ox - 8, gy(g, 0.5) + 4, `${I('y')} = ${I('r')} sin ${I('θ')}`, { anchor: 'end', size: 12.5, color: C.slate });
    lab(s, gx(g, 0.5), g.oy + 22, `${I('x')} = ${I('r')} cos ${I('θ')}`, { size: 12.5, color: C.slate });
    return s;
  },
  check() {
    const s = fig43.draw(fig43.cases[0]), out: Check[] = [], g = G43;
    const p = unPx(g, dotAt(s, 'P')!), r = Math.hypot(...p), th = Math.atan2(p[1], p[0]);
    out.push([`P reads back (${fmt(p[0], 4)}, ${fmt(p[1], 4)}) = 1 + i√3: r = |z| = √(1 + 3) = ${fmt(r, 4)}, θ = arg z = ${fmt(th / DEG, 3)}° = π/3`, close(r, 2) && close(th, Math.PI / 3)]);
    out.push([`The projections: x = r cos θ = ${fmt(2 * Math.cos(Math.PI / 3), 4)} and y = r sin θ = ${fmt(2 * Math.sin(Math.PI / 3), 4)} = √3, so z = r(cos θ + i sin θ)`, close(2 * Math.cos(Math.PI / 3), p[0]) && close(2 * Math.sin(Math.PI / 3), p[1])]);
    const arc = linesNamed(s, /^angle:theta$/)[0].pts, O: P = [g.ox, g.oy];
    out.push(['The angle θ (the highlight) runs from the positive real axis to OP', close(angOf(O, arc[0]), 0, 1e-6) && close(angOf(O, arc[arc.length - 1]), 60, 1e-6)]);
    out.push(['The dashed projections drop from P to each axis; P is a filled dot (decision 10)', linesNamed(s, /^proj:/).length >= 2 && dotsOf(s).length === 1]);
    out.push(labelsCheck(s, ['Re(z)', 'Im(z)', 'P(x, y)', 'z = 1 + i√3', 'r = 2,  θ = π/3', 'r = |z|', 'θ = arg z', 'x = r cos θ', 'y = r sin θ', '1', '2', 'O']));
    out.push(stackedCheck(s, ['π/3']));
    out.push(noBadChars(s, fig43));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 4.4 · where the roots sit (Topic 04, p. 360)                   */
/* ===================================================================== */
const CAP44 = 'Where the roots sit for <i>D</i> > 0, <i>D</i> = 0 and <i>D</i> < 0.';
const G44: Gr = { ox: 110, oy: 150, ux: 36, uy: 36 };
type Case44 = { chip: string; cap: string; b: number; c: number; eq: string; d: string; say: string };
const CASES44: Case44[] = [
  { chip: 'D > 0', cap: CAP44, b: -4, c: 3, eq: `${I('x')}<sup>2</sup> − 4${I('x')} + 3 = 0`, d: `${I('D')} = 4 > 0`, say: 'two real roots' },
  { chip: 'D = 0', cap: CAP44, b: -4, c: 4, eq: `${I('x')}<sup>2</sup> − 4${I('x')} + 4 = 0`, d: `${I('D')} = 0`, say: 'one repeated root' },
  { chip: 'D < 0', cap: CAP44, b: -4, c: 13, eq: `${I('x')}<sup>2</sup> − 4${I('x')} + 13 = 0`, d: `${I('D')} = −36 < 0`, say: 'conjugate pair' },
];
/** The roots of x² + bx + c = 0, as complex numbers. */
const roots44 = (b: number, c: number): Cx[] => {
  const D = b * b - 4 * c;
  return D >= 0 ? [[(-b - Math.sqrt(D)) / 2, 0], [(-b + Math.sqrt(D)) / 2, 0]] : [[-b / 2, Math.sqrt(-D) / 2], [-b / 2, -Math.sqrt(-D) / 2]];
};
const fmtCx = ([a, b]: Cx) => (b ? `${fmt(a)} ${b < 0 ? '−' : '+'} ${fmt(Math.abs(b))}i` : fmt(a));
const fig44: Diagram = {
  id: 'm11-04-fig-4.4',
  topic: 3,
  name: 'Where the roots sit',
  cases: CASES44,
  draw(c: Case44) {
    const s = new Sketch(W, 336), g = G44, rs = roots44(c.b, c.c), D = c.b * c.b - 4 * c.c;
    axesN(s, 40, 300, g.oy, 262, 22, g.ox, 'Re', 'Im', 14);
    origin(s, g.ox, g.oy);
    if (D > 0) rs.forEach((z, k) => { pt(s, gp(g, z), `root${k}`, C.mari); lab(s, gx(g, z[0]), g.oy + 22, fmt(z[0]), { size: 15, color: C.amber }); });
    else if (D === 0) {
      const p = gp(g, rs[0]);
      path(s, arcPts(p, 9, 0, 360, 48), { color: C.mari, w: 1.5, name: 'ring' });
      pt(s, p, 'root0', C.mari, 4.4);
      lab(s, p[0], g.oy + 28, fmt(rs[0][0]), { size: 15, color: C.amber });
    } else {
      const a = gp(g, rs[0]), b = gp(g, rs[1]);
      path(s, [[a[0], a[1] + 7], [b[0], b[1] - 7]], { color: C.slate, w: 1.1, dash: '4 3', name: 'pair' });
      rs.forEach((z, k) => { pt(s, gp(g, z), `root${k}`, C.mari); lab(s, gx(g, z[0]) + 9, gy(g, z[1]) + 5, `${fmt(z[0])} ${z[1] < 0 ? '−' : '+'} ${fmt(Math.abs(z[1]))}${I('i')}`, { anchor: 'start', size: 15, color: C.amber }); });
    }
    lab(s, W / 2, 290, c.eq, { size: 15 });
    lab(s, W / 2, 312, c.d, { size: 14 });
    lab(s, W / 2, 330, c.say, { size: 13, color: C.slate });
    return s;
  },
  check(c: Case44) {
    const s = fig44.draw(c), out: Check[] = [], g = G44, D = c.b * c.b - 4 * c.c, rs = roots44(c.b, c.c);
    const sign = D > 0 ? '> 0' : D === 0 ? '= 0' : '< 0';
    out.push([`D = b² − 4ac = ${fmt(c.b * c.b)} − ${fmt(4 * c.c)} = ${fmt(D)} (${sign}), as printed`, c.d.includes(fmt(D).replace('-', '−')) || (D === 0 && c.d.endsWith('= 0'))]);
    const ok = rs.every((z) => { let w: Cx = mul(z, z); w = [w[0] + c.b * z[0] + c.c, w[1] + c.b * z[1]]; return close(w[0], 0, 1e-9) && close(w[1], 0, 1e-9); });
    out.push([`The roots ${rs.map(fmtCx).join(' and ')} satisfy x² ${c.b < 0 ? '−' : '+'} ${fmt(Math.abs(c.b))}x + ${fmt(c.c)} = 0; their sum ${fmt(rs[0][0] + rs[1][0])} = −b/a and product ${fmt(mul(rs[0], rs[1])[0])} = c/a`, ok && close(rs[0][0] + rs[1][0], -c.b) && close(mul(rs[0], rs[1])[0], c.c)]);
    const ds = dotsOf(s).map((d) => unPx(g, d.p));
    const want = D === 0 ? [rs[0]] : rs;
    out.push([`The roots are filled dots where they sit: ${D > 0 ? 'two on the real axis' : D === 0 ? 'one on the real axis, ringed (a repeated root)' : 'a pair mirrored in the real axis (conjugates)'}`, ds.length === want.length && want.every((z, k) => close(ds[k][0], z[0], 1e-6) && close(ds[k][1], z[1], 1e-6)) && (D !== 0 || linesNamed(s, /^ring$/).length === 1)]);
    const lbl = D > 0 ? rs.map((z) => fmt(z[0])) : D === 0 ? [fmt(rs[0][0])] : rs.map((z) => `${fmt(z[0])} ${z[1] < 0 ? '−' : '+'} ${fmt(Math.abs(z[1]))}i`);
    out.push(labelsCheck(s, ['Re', 'Im', 'O', ...lbl, plain(c.eq), plain(c.d), c.say]));
    out.push(noBadChars(s, fig44));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 4.5 · roots of unity as regular polygons (Topic 05, p. 367)    */
/* ===================================================================== */
const CAP45 = `Roots of unity as regular polygons, equally spaced by ${fr('2π', I('n'))}.`;
const O45: P = [170, 160], R45 = 112;
type Case45 = { chip: string; cap: string; n: number };
const fig45: Diagram = {
  id: 'm11-04-fig-4.5',
  topic: 4,
  name: 'Roots of unity as regular polygons',
  cases: [{ chip: '3 roots of unity', cap: CAP45, n: 3 }, { chip: '4 roots of unity', cap: CAP45, n: 4 }],
  draw(c: Case45) {
    const s = new Sketch(W, 330), O = O45, r = R45, n = c.n, vs = Array.from({ length: n }, (_, k) => pol(O, r, (360 * k) / n));
    axesN(s, 30, 300, O[1], 292, 14, O[0], 'Re', 'Im', 14);
    path(s, arcPts(O, r, 0, 360, 240), { color: C.grey, w: 1.4, name: 'circle' });
    if (n === 3) [1, 2].forEach((k) => path(s, [O, vs[k]], { color: C.slate, w: 1.1, dash: dotted, name: `radius:${k}` }));
    path(s, [...vs, vs[0]], { color: C.ink, w: 2, name: 'polygon' });
    angle(s, O, n === 3 ? 16 : 28, 0, 360 / n, { color: C.mari, w: 2, name: 'angle' });
    runs(s, ...(n === 3 ? pol(O, 34, 40) : pol(O, 54, 45)), [{ num: '2π', den: String(n) }], { size: 12, anchor: 'middle', color: C.amber });
    vs.forEach((v, k) => pt(s, v, `v${k}`));
    if (n === 3) {
      lab(s, O[0] + r + 8, O[1] + 20, '1', { anchor: 'start', size: 15 });
      lab(s, ...pol(O, r + 22, 128), I('ω'), { size: 16 });
      lab(s, ...pol(O, r + 24, 232), `${I('ω')}<sup>2</sup>`, { size: 16 });
      lab(s, O[0] + 6, O[1] + 18, I('O'), { anchor: 'start', size: 14 });
    } else {
      lab(s, O[0] + r + 8, O[1] + 20, '1', { anchor: 'start', size: 15 });
      lab(s, O[0] + 9, O[1] - r - 8, I('i'), { anchor: 'start', size: 15 });
      lab(s, O[0] - r - 8, O[1] + 20, '−1', { anchor: 'end', size: 15 });
      lab(s, O[0] + 9, O[1] + r + 20, `−${I('i')}`, { anchor: 'start', size: 15 });
      lab(s, O[0] - 6, O[1] + 18, I('O'), { anchor: 'end', size: 14 });
    }
    lab(s, W / 2, 322, `${n} roots of unity`, { size: 14, color: C.slate });
    return s;
  },
  check(c: Case45) {
    const s = fig45.draw(c), out: Check[] = [], O = O45, n = c.n;
    const zs: Cx[] = dotsOf(s).map((d) => [(d.p[0] - O[0]) / R45, (O[1] - d.p[1]) / R45]);
    const pw = (z: Cx) => Array.from({ length: n }, () => z).reduce<Cx>((a, b) => mul(a, b), [1, 0]);
    out.push([`${n} dots, each a root of zⁿ = 1 (z${n === 3 ? '³' : '⁴'} reads back 1 for every one): ${zs.map((z) => `(${fmt(z[0], 3)}, ${fmt(z[1], 3)})`).join(', ')}`, zs.length === n && zs.every((z) => { const w = pw(z); return close(w[0], 1, 1e-9) && close(w[1], 0, 1e-9); })]);
    const angs = dotsOf(s).map((d) => angOf(O, d.p));
    out.push([`Equally spaced by 2π/${n} = ${fmt(360 / n)}°, starting at 1: ${angs.map((a) => `${fmt(a, 2)}°`).join(', ')}`, angs.every((a, k) => close(a, (360 * k) / n, 1e-6))]);
    const sum = zs.reduce<Cx>((a, z) => [a[0] + z[0], a[1] + z[1]], [0, 0]);
    out.push([`The roots add to zero (${fmt(sum[0], 9)}, ${fmt(sum[1], 9)})${n === 3 ? ': 1 + ω + ω² = 0, ω³ = 1' : ': 1 + i − 1 − i = 0'}`, close(sum[0], 0, 1e-9) && close(sum[1], 0, 1e-9)]);
    const arc = linesNamed(s, /^angle$/)[0].pts;
    out.push([`The highlighted angle spans one step, 0° to ${fmt(360 / n)}°`, close(angOf(O, arc[0]), 0, 1e-6) && close(angOf(O, arc[arc.length - 1]), 360 / n, 1e-6)]);
    out.push(labelsCheck(s, n === 3 ? ['1', 'ω', 'ω2', `2π/3`, 'Re', 'Im', 'O', '3 roots of unity'] : ['1', 'i', '−1', '−i', '2π/4', 'Re', 'Im', 'O', '4 roots of unity']));
    out.push(stackedCheck(s, [`2π/${n}`]));
    out.push(noBadChars(s, fig45));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 4.6 · rotation and the circle locus (Topic 06, p. 373)         */
/* ===================================================================== */
const CAP46 = 'The rotation theorem, and the circle locus |<i>z</i> − <i>z</i><sub>0</sub>| = <i>r</i>.';
const G46A: Gr = { ox: 40, oy: 246, ux: 46, uy: 46 };
const G46B: Gr = { ox: 40, oy: 296, ux: 40, uy: 40 };
const A46: Cx = [1, 1], B46: Cx = [1.9, 4], C46: Cx = [5, 2], Z046: Cx = [3, 4], R046 = 2;
type Case46 = { chip: string; cap: string; panel: 'rotation' | 'locus' };
const fig46: Diagram = {
  id: 'm11-04-fig-4.6',
  topic: 5,
  name: 'The rotation theorem and the circle locus',
  cases: [{ chip: 'The rotation theorem', cap: CAP46, panel: 'rotation' }, { chip: 'The circle locus', cap: CAP46, panel: 'locus' }],
  draw(c: Case46) {
    if (c.panel === 'rotation') {
      const s = new Sketch(W, 280), g = G46A, A = gp(g, A46), B = gp(g, B46), Cc = gp(g, C46);
      axesN(s, 14, 300, g.oy, 270, 22, g.ox, 'Re', 'Im', 15);
      [2, 4].forEach((v) => { xNum(s, gx(g, v), g.oy, String(v)); yNum(s, g.ox, gy(g, v), String(v)); });
      origin(s, g.ox, g.oy);
      path(s, [B, Cc], { color: C.slate, w: 1.4, name: 'side:BC' });
      toDot(s, A, B, { color: C.ink, w: 1.9, name: 'vec:AB' });
      toDot(s, A, Cc, { color: C.ink, w: 1.9, name: 'vec:AC' });
      angle(s, A, 30, angOf(A, Cc), angOf(A, B), { color: C.mari, w: 2, name: 'angle:theta' });
      lab(s, ...pol(A, 44, (angOf(A, Cc) + angOf(A, B)) / 2), I('θ'), { size: 16, color: C.amber });
      pt(s, A, 'A'); pt(s, B, 'B'); pt(s, Cc, 'C');
      lab(s, A[0] + 4, A[1] + 22, `${I('A')}(${I('z')}<sub>1</sub>)`, { size: 14 });
      lab(s, B[0], B[1] - 14, `${I('B')}(${I('z')}<sub>2</sub>)`, { size: 14 });
      lab(s, Cc[0] + 9, Cc[1] + 5, `${I('C')}(${I('z')}<sub>3</sub>)`, { anchor: 'start', size: 14 });
      lab(s, (A[0] + B[0]) / 2 - 10, (A[1] + B[1]) / 2 + 4, `${I('z')}<sub>2</sub> − ${I('z')}<sub>1</sub>`, { anchor: 'end', size: 14 });
      lab(s, (A[0] + Cc[0]) / 2 + 6, (A[1] + Cc[1]) / 2 + 22, `${I('z')}<sub>3</sub> − ${I('z')}<sub>1</sub>`, { size: 14 });
      return s;
    }
    const s = new Sketch(W, 336), g = G46B, Z = gp(g, Z046), r = R046 * g.ux, m = Math.hypot(...Z046);
    const near = gp(g, [(Z046[0] * (m - R046)) / m, (Z046[1] * (m - R046)) / m]), far = gp(g, [(Z046[0] * (m + R046)) / m, (Z046[1] * (m + R046)) / m]);
    axesN(s, 14, 304, g.oy, 320, 18, g.ox, 'Re', 'Im', 15);
    [2, 4, 6].forEach((v) => { xNum(s, gx(g, v), g.oy, String(v)); yNum(s, g.ox, gy(g, v), String(v)); });
    origin(s, g.ox, g.oy);
    path(s, arcPts(Z, r, 0, 360, 240), { color: C.mari, w: 2, name: 'circle' });
    const zl = lab(s, Z[0], Z[1] - 14, `${I('z')}<sub>0</sub> = 3 + 4${I('i')}`, { size: 13.5 });
    brokenPath(s, [[g.ox, g.oy], far], [zl], 5, { color: C.slate, w: 1.1, dash: '4 3', name: 'line:OZ' });
    arrow(s, Z, pol(Z, r, -45), { color: C.ink, w: 1.6, name: 'radius' });
    pt(s, Z, 'z0'); pt(s, near, 'near', C.mari); pt(s, far, 'far', C.mari);
    lab(s, Z[0] + 34, Z[1] + 24, `${I('r')} = 2`, { anchor: 'start', size: 13.5 });
    lab(s, near[0] + 8, Z[1] + r + 18, `|${I('z')}|<sub>min</sub> = 3`, { anchor: 'start', size: 13 });
    lab(s, far[0] + 10, far[1] - 10, `|${I('z')}|<sub>max</sub> = 7`, { anchor: 'start', size: 13 });
    lab(s, 230, 238, `|${I('z')} − ${I('z')}<sub>0</sub>| = ${I('r')}`, { anchor: 'start', size: 14, color: C.amber });
    return s;
  },
  check(c: Case46) {
    const s = fig46.draw(c), out: Check[] = [];
    if (c.panel === 'rotation') {
      const g = G46A, A = unPx(g, dotAt(s, 'A')!), B = unPx(g, dotAt(s, 'B')!), Cc = unPx(g, dotAt(s, 'C')!);
      const u: Cx = [B[0] - A[0], B[1] - A[1]], v: Cx = [Cc[0] - A[0], Cc[1] - A[1]];
      // (z2 − z1)/(z3 − z1) = |..|/|..| e^{iθ}: θ is the angle turning z3 − z1 onto z2 − z1
      const q = mul(u, [v[0], -v[1]]), th = Math.atan2(q[1], q[0]) / DEG;
      const arc = linesNamed(s, /^angle:theta$/)[0].pts, Ap = dotAt(s, 'A')!, drawn = angOf(Ap, arc[arc.length - 1]) - angOf(Ap, arc[0]);
      out.push([`θ = arg[(z₂ − z₁)/(z₃ − z₁)] = ${fmt(th, 3)}°, the angle drawn at A from z₃ − z₁ round to z₂ − z₁ (${fmt(drawn, 3)}°, anticlockwise)`, close(th, drawn, 1e-6) && th > 0]);
      out.push(['The arrows z₂ − z₁ and z₃ − z₁ both start at A(z₁) and end at B(z₂) and C(z₃)', linesNamed(s, /^vec:A[BC]$/).length === 2 && [A, B, Cc].every((p, k) => close(p[0], [A46, B46, C46][k][0]) && close(p[1], [A46, B46, C46][k][1]))]);
      out.push(labelsCheck(s, ['A(z1)', 'B(z2)', 'C(z3)', 'z2 − z1', 'z3 − z1', 'θ', 'Re', 'Im', '2', '4', 'O']));
    } else {
      const g = G46B, z0 = unPx(g, dotAt(s, 'z0')!), nr = unPx(g, dotAt(s, 'near')!), fr2 = unPx(g, dotAt(s, 'far')!);
      out.push([`The centre reads back z₀ = ${fmt(z0[0])} + ${fmt(z0[1])}i, |z₀| = ${fmt(Math.hypot(...z0))}; the circle |z − z₀| = 2`, close(z0[0], 3) && close(z0[1], 4) && close(Math.hypot(...z0), 5)]);
      out.push([`On the line from O through z₀: the nearest point at |z|min = |z₀| − r = ${fmt(Math.hypot(...nr), 4)} and the farthest at |z|max = |z₀| + r = ${fmt(Math.hypot(...fr2), 4)}, both on the circle`, close(Math.hypot(...nr), 3) && close(Math.hypot(...fr2), 7) && close(Math.hypot(nr[0] - 3, nr[1] - 4), 2) && close(Math.hypot(fr2[0] - 3, fr2[1] - 4), 2) && close(nr[1] / nr[0], 4 / 3) && close(fr2[1] / fr2[0], 4 / 3)]);
      out.push(['The circle and its nearest and farthest points are the highlight; every point is a filled dot (decision 10)', dotsOf(s).length === 3 && linesNamed(s, /^circle$/).length === 1]);
      out.push(labelsCheck(s, ['z0 = 3 + 4i', 'r = 2', '|z|min = 3', '|z|max = 7', '|z − z0| = r', 'Re', 'Im', '2', '4', '6', 'O']));
    }
    out.push(noBadChars(s, fig46));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figures 4.7 and 4.8 · real quadratics: sign scheme, vertex, signpost k */
/* ===================================================================== */
/**
 * The sign scheme along the x-axis: a "+" or "−" (ink, STIX, the size of the axis names) just above the axis over
 * each stretch where f(x) > 0 or f(x) < 0, the stretches cut at the roots. Where f keeps one sign all along (D < 0,
 * or D = 0 away from its root), the axis is cut at the vertex instead, so a sign stands on each side of it (one only
 * if a side has no room). Each sign sits as near its stretch's middle as it can while staying clear of every line,
 * curve, dot and label; it is placed last, after everything else is drawn.
 */
const SIGN_SIZE = 14, SIGN_LIFT = 8;
type SignRec = { sign: 1 | -1; a: number; b: number; x: number; rect: Rect };
const SIGNS = new WeakMap<Sketch, SignRec[]>();
const signsOf = (s: Sketch) => SIGNS.get(s) ?? [];
function signs(s: Sketch, g: Gr, f: (x: number) => number, xa: number, xb: number, hx: number) {
  const cuts = [xa];
  for (let i = 0; i < 2000; i++) { const x = xa + ((xb - xa) * i) / 2000, y = xa + ((xb - xa) * (i + 1)) / 2000; if (f(x) * f(y) < 0) cuts.push(x + ((y - x) * f(x)) / (f(x) - f(y))); }
  if (cuts.length === 1) cuts.push(hx);
  cuts.push(xb);
  const out: SignRec[] = [];
  for (let i = 0; i < cuts.length - 1; i++) {
    const a = cuts[i], b = cuts[i + 1], sg = f((a + b) / 2) > 0 ? 1 : -1, t = sg > 0 ? '+' : '−';
    const w = widthOf(t, SIGN_SIZE), y = g.oy - SIGN_LIFT, pa = gx(g, a), pb = gx(g, b), mid = (pa + pb) / 2;
    const box = (x: number): Rect => [x - w / 2, y - SIGN_SIZE * 0.72, x + w / 2, y + SIGN_SIZE * 0.22];
    // first try, within 20 px of the middle, to keep well clear (8 px) of every line but the x-axis itself; then
    // settle for the plain clearance anywhere in the stretch
    const fits = (r: Rect, gap: number) => r[0] >= pa + 2 && r[2] <= pb - 2 && r[0] >= 0 && r[2] <= s.w
      && (LINES.get(s) ?? []).every((l) => boxToLine(r, l.pts) >= (l.name === 'axis:x' ? LABEL_GAP + 0.5 : gap))
      && s.labels.every((l) => l.rect[0] >= r[2] + LABEL_GAP || r[0] >= l.rect[2] + LABEL_GAP || l.rect[1] >= r[3] + LABEL_GAP || r[1] >= l.rect[3] + LABEL_GAP);
    let x: number | undefined;
    for (const [gap, reach] of [[8, 20], [LABEL_GAP + 0.5, (pb - pa) / 2]]) for (let d = 0; d <= reach && x === undefined; d += 0.5) for (const c of [mid + d, mid - d]) if (x === undefined && fits(box(c), gap)) x = c;
    if (x === undefined) continue; // no room on this side: one sign only
    out.push({ sign: sg, a, b, x, rect: lab(s, x, y, t, { size: SIGN_SIZE, color: C.ink }) });
  }
  SIGNS.set(s, out);
}
/**
 * The checks on the sign scheme: the parabola is read back from the drawn curve (through three of its points), and
 * each printed sign must match that parabola's sign at the middle of its stretch and where it stands, with no root
 * inside its stretch; the stretches meet at the parabola's roots; no band stroke and no key is left.
 */
function signChecks(s: Sketch, g: Gr, D: number): Check[] {
  const pts = curvesBack(s, g, /^curve$/)[0], [p, q, r] = [pts[0], pts[Math.floor(pts.length / 2)], pts[pts.length - 1]];
  const F = (x: number) => p[1] * ((x - q[0]) * (x - r[0])) / ((p[0] - q[0]) * (p[0] - r[0])) + q[1] * ((x - p[0]) * (x - r[0])) / ((q[0] - p[0]) * (q[0] - r[0])) + r[1] * ((x - p[0]) * (x - q[0])) / ((r[0] - p[0]) * (r[0] - q[0]));
  const ss = signsOf(s), sym = (v: number) => (v > 0 ? '+' : '−');
  const rows = ss.map((z) => {
    const m = (z.a + z.b) / 2, xs = unPx(g, [z.x, g.oy])[0];
    const noRoot = Array.from({ length: 199 }, (_, i) => z.a + ((z.b - z.a) * (i + 1)) / 200).every((x) => Math.abs(F(x)) < 1e-6 || Math.sign(F(x)) === z.sign);
    const text = s.labels.find((l) => l.rect === z.rect)?.text;
    return { ok: Math.sign(F(m)) === z.sign && Math.sign(F(xs)) === z.sign && noRoot && text === sym(z.sign) && z.rect[3] <= g.oy - LABEL_GAP, line: `"${sym(z.sign)}" over x from ${fmt(z.a, 2)} to ${fmt(z.b, 2)}, f(${fmt(m, 2)}) = ${fmt(F(m), 3)}` };
  });
  const joins = ss.slice(0, -1).map((z, i) => z.b === ss[i + 1].a);
  const rootsAtJoins = D > 0 ? ss.slice(0, -1).every((z) => Math.abs(F(z.b)) < 1e-4) : true;
  const want = D > 0 ? 3 : 2;
  const leftover = linesNamed(s, /^(band|key)/).length + s.labels.filter((l) => /band|f\(x\) [<>] 0$/.test(l.text)).length;
  return [
    [`The sign scheme, read from the drawn parabola: ${rows.map((x) => x.line).join('; ')}${D > 0 ? '; the stretches meet at the roots' : '; f keeps one sign, so a sign stands each side of the vertex'}`, ss.length >= (D > 0 ? want : 1) && ss.length <= want && rows.every((x) => x.ok) && joins.every(Boolean) && rootsAtJoins],
    ['No band stroke along the axis and no band key are left', leftover === 0],
  ];
}
const quad = (a: number, h: number, k: number) => (x: number) => a * (x - h) ** 2 + k;
/** The part of the curve inside the frame's band of y values. */
const clipped = (f: (x: number) => number, x0: number, x1: number, ylim: number) => sample(f, x0, x1, 400).filter((p) => Math.abs(p[1]) <= ylim);
const negB2a = (): Piece[] => [{ t: '−' }, { num: I('b'), den: `2${I('a')}` }];
const negD4a = (eq0 = false): Piece[] => [{ t: '−' }, { num: I('D'), den: `4${I('a')}` }, ...(eq0 ? [{ t: ' = 0' }] : [])];

const CAP47 = 'Sign, vertex and range of a real quadratic: all six cases.';
const G47: Gr = { ox: 104, oy: 146, ux: 55, uy: 46 };
const H47 = 1, YL47 = 2.1;
type Case47 = { chip: string; cap: string; a: number; k: number; title: string };
const CASES47: Case47[] = [
  { chip: 'a > 0, D > 0', a: 0.8, k: -1.8 },
  { chip: 'a > 0, D = 0', a: 0.8, k: 0 },
  { chip: 'a > 0, D < 0', a: 0.8, k: 0.8 },
  { chip: 'a < 0, D > 0', a: -0.8, k: 1.8 },
  { chip: 'a < 0, D = 0', a: -0.8, k: 0 },
  { chip: 'a < 0, D < 0', a: -0.8, k: -0.8 },
].map((c) => ({ ...c, cap: CAP47, title: c.chip.replace(/([aD]) /g, `${I('$1')} `) }));
const fig47: Diagram = {
  id: 'm11-04-fig-4.7',
  topic: 6,
  name: 'Sign, vertex and range of a real quadratic',
  cases: CASES47,
  draw(c: Case47) {
    const s = new Sketch(W, 262), g = G47, f = quad(c.a, H47, c.k), up = c.a > 0, x0 = -1.42, x1 = 3.42;
    lab(s, W / 2, 20, c.title.replace(', ', ',  '), { size: 15 });
    arrow(s, [gx(g, x0 - 0.1), g.oy], [gx(g, x1 + 0.35), g.oy], { color: C.ink, w: 1.2, name: 'axis:x' });
    arrow(s, [g.ox, gy(g, -YL47 - 0.15)], [g.ox, gy(g, YL47 + 0.25)], { color: C.ink, w: 1.2, name: 'axis:y' });
    lab(s, gx(g, x1 + 0.35) + 5, g.oy + 5, I('x'), { anchor: 'start', size: 14 });
    lab(s, g.ox + 7, gy(g, YL47 + 0.25) + 8, I('y'), { anchor: 'start', size: 14 });
    curve(s, g, clipped(f, x0, x1, YL47), { w: 2.2 });
    const V = gp(g, [H47, c.k]), D = -4 * c.a * c.k;
    if (D > 0) {
      path(s, [V, [V[0], g.oy]], { color: C.slate, w: 1.1, dash: dotted, name: 'drop' });
      const d = Math.sqrt(-c.k / c.a), al = gp(g, [H47 - d, 0]), be = gp(g, [H47 + d, 0]), lift = up ? -12 : 26;
      pt(s, al, 'alpha'); pt(s, be, 'beta');
      lab(s, al[0] + 10, g.oy + lift, I('α'), { anchor: 'start', size: 16 });
      lab(s, be[0] - 10, g.oy + lift, I('β'), { anchor: 'end', size: 16 });
      runs(s, V[0] + 8, up ? g.oy - 20 : g.oy + 30, negB2a(), { size: 12, anchor: 'start', color: C.slate });
      runs(s, V[0] + (up ? -12 : 12), V[1] + (up ? 18 : -15), negD4a(), { size: 12, anchor: up ? 'end' : 'start', color: C.amber });
    } else if (D === 0) {
      runs(s, V[0] + 10, up ? g.oy + 30 : g.oy - 52, negB2a(), { size: 12, anchor: 'start', color: C.amber });
      runs(s, V[0] + 10, up ? g.oy + 64 : g.oy - 18, negD4a(true), { size: 12, anchor: 'start', color: C.amber });
    } else {
      path(s, [V, [V[0], g.oy]], { color: C.slate, w: 1.1, dash: dotted, name: 'drop' });
      runs(s, V[0] + 8, up ? g.oy + 30 : g.oy - 20, negB2a(), { size: 12, anchor: 'start', color: C.slate });
      runs(s, V[0] + (up ? -12 : 12), V[1] + (up ? 18 : -15), negD4a(), { size: 12, anchor: up ? 'end' : 'start', color: C.amber });
    }
    pt(s, V, 'vertex', C.mari);
    signs(s, g, f, x0 - 0.1, x1 + 0.1, H47);
    return s;
  },
  check(c: Case47) {
    const s = fig47.draw(c), out: Check[] = [], g = G47, f = quad(c.a, H47, c.k);
    const A = c.a, B = -2 * c.a * H47, Cc = c.a * H47 * H47 + c.k, D = B * B - 4 * A * Cc;
    const sgn = (v: number) => (Math.abs(v) < 1e-9 ? '= 0' : v > 0 ? '> 0' : '< 0');
    out.push([`f(x) = ${fmt(A)}x² ${B < 0 ? '−' : '+'} ${fmt(Math.abs(B))}x ${Cc < 0 ? '−' : '+'} ${fmt(Math.abs(Cc), 3)}: a ${sgn(A)}, D = b² − 4ac = ${fmt(D, 4)} (${sgn(D)}), the case "${c.chip}"`, c.chip === `a ${sgn(A)}, D ${sgn(D)}`]);
    const V = unPx(g, dotAt(s, 'vertex')!);
    out.push([`The vertex reads back (${fmt(V[0], 4)}, ${fmt(V[1], 4)}) = (−b/2a, −D/4a) = (${fmt(-B / (2 * A), 4)}, ${fmt(-D / (4 * A), 4)}); the range is ${A > 0 ? `[${fmt(-D / (4 * A), 3)}, ∞)` : `(−∞, ${fmt(-D / (4 * A), 3)}]`}`, close(V[0], -B / (2 * A)) && close(V[1], -D / (4 * A)) && close(f(V[0]), V[1])]);
    const nRoots = dotsOf(s).length - 1;
    out.push([`${D > 0 ? 'Two real roots α, β (filled dots, decision 10) where the curve cuts the axis' : D === 0 ? 'One repeated root: the vertex touches the axis' : 'No real root: the curve stays on one side of the axis'}`, D > 0 ? nRoots === 2 && ['alpha', 'beta'].every((n) => close(f(unPx(g, dotAt(s, n)!)[0]), 0, 1e-9)) : nRoots === 0 && (D !== 0 || close(V[1], 0))]);
    out.push(...signChecks(s, g, D));
    const curvePts = curvesBack(s, g, /^curve$/)[0];
    out.push(['Every point of the drawn curve satisfies y = f(x)', curvePts.every((p) => close(p[1], f(p[0]), 1e-2))]);
    out.push(labelsCheck(s, [plain(c.title.replace(', ', ',  ')), '−b/2a', D === 0 ? '−D/4a = 0' : '−D/4a', ...(D > 0 ? ['α', 'β'] : []), 'x', 'y']));
    out.push(stackedCheck(s, ['b/2a', 'D/4a']));
    out.push(noBadChars(s, fig47));
    out.push(...layout(s));
    return out;
  },
};

const CAP48 = 'Locating the roots of a quadratic relative to a signpost <i>k</i>.';
const G48: Gr = { ox: 44, oy: 170, ux: 50, uy: 44 };
const F48 = quad(0.8, 2.5, -1.8), AL48 = 1, BE48 = 4, YL48 = 2.1;
type Sign48 = { k: number; name: string; side: 'start' | 'end' };
type Case48 = { chip: string; cap: string; title: string; ks: Sign48[] };
const K = I('k');
const CASES48: Case48[] = [
  { chip: 'k < α < β', cap: CAP48, title: `${K} < ${I('α')} < ${I('β')}`, ks: [{ k: 0.5, name: K, side: 'start' }] },
  { chip: 'α < β < k', cap: CAP48, title: `${I('α')} < ${I('β')} < ${K}`, ks: [{ k: 4.5, name: K, side: 'end' }] },
  { chip: 'α < k < β', cap: CAP48, title: `${I('α')} < ${K} < ${I('β')}`, ks: [{ k: 2.0, name: K, side: 'end' }] },
  { chip: 'k1 < α < β < k2', cap: CAP48, title: `${K}<sub>1</sub> < ${I('α')} < ${I('β')} < ${K}<sub>2</sub>`, ks: [{ k: 0.6, name: `${K}<sub>1</sub>`, side: 'start' }, { k: 4.4, name: `${K}<sub>2</sub>`, side: 'end' }] },
];
const fig48: Diagram = {
  id: 'm11-04-fig-4.8',
  topic: 6,
  name: 'Locating the roots against a signpost k',
  cases: CASES48,
  draw(c: Case48) {
    const s = new Sketch(W, 290), g = G48, x0 = -0.3, x1 = 5.3, V = gp(g, [2.5, -1.8]);
    lab(s, W / 2, 20, c.title, { size: 15 });
    arrow(s, [gx(g, x0 - 0.1), g.oy], [gx(g, x1 + 0.3), g.oy], { color: C.ink, w: 1.2, name: 'axis:x' });
    arrow(s, [g.ox, gy(g, -2.2)], [g.ox, gy(g, YL48 + 0.15)], { color: C.ink, w: 1.2, name: 'axis:y' });
    lab(s, gx(g, x1 + 0.3) + 5, g.oy + 5, I('x'), { anchor: 'start', size: 14 });
    lab(s, g.ox - 7, gy(g, YL48 + 0.15) + 8, I('y'), { anchor: 'end', size: 14 });
    curve(s, g, clipped(F48, x0 + 0.2, x1, YL48), { w: 2.2 });
    const top = runs(s, V[0], 48, negB2a(), { size: 12, anchor: 'middle', color: C.slate });
    path(s, [[V[0], top[3] + 6], V], { color: C.slate, w: 1.1, dash: dotted, name: 'axis of symmetry' });
    const al = gp(g, [AL48, 0]), be = gp(g, [BE48, 0]);
    pt(s, al, 'alpha'); pt(s, be, 'beta'); pt(s, V, 'vertex');
    lab(s, al[0] + 12, g.oy - 12, I('α'), { anchor: 'start', size: 16 });
    lab(s, be[0] - 12, g.oy - 12, I('β'), { anchor: 'end', size: 16 });
    c.ks.forEach((sp, i) => {
      const p = gp(g, [sp.k, F48(sp.k)]), bottom = g.oy + 92, pos = F48(sp.k) > 0;
      path(s, [p, [p[0], bottom]], { color: C.mari, w: 1.6, dash: '4 3', name: `signpost:${i}` });
      pt(s, p, `k${i}`, C.mari);
      lab(s, p[0] + 5, bottom + 12, sp.name, { anchor: 'start', size: 15, color: C.amber });
      const t = `${I('f')}(${sp.name}) ${pos ? '>' : '<'} 0`;
      if (pos) lab(s, p[0] + (sp.side === 'start' ? 8 : -8), p[1] - 10, t, { anchor: sp.side, size: 13, color: C.amber });
      else lab(s, p[0] - 10, p[1] + 20, t, { anchor: 'end', size: 13, color: C.amber });
    });
    signs(s, g, F48, x0 - 0.1, x1, 2.5);
    return s;
  },
  check(c: Case48) {
    const s = fig48.draw(c), out: Check[] = [], g = G48;
    const a = 0.8, b = -2 * 0.8 * 2.5, cc = 0.8 * 6.25 - 1.8, D = b * b - 4 * a * cc;
    out.push([`f(x) = 0.8x² − 4x + 3.2 (a > 0, D = ${fmt(D, 4)} > 0) has roots α = ${fmt((-b - Math.sqrt(D)) / (2 * a), 4)}, β = ${fmt((-b + Math.sqrt(D)) / (2 * a), 4)}, the dots on the axis`, D > 0 && close((-b - Math.sqrt(D)) / (2 * a), AL48) && close((-b + Math.sqrt(D)) / (2 * a), BE48) && close(F48(unPx(g, dotAt(s, 'alpha')!)[0]), 0) && close(F48(unPx(g, dotAt(s, 'beta')!)[0]), 0)]);
    const want: Record<string, (k: number) => boolean> = { 'k < α < β': (k) => k < AL48, 'α < β < k': (k) => k > BE48, 'α < k < β': (k) => k > AL48 && k < BE48 };
    const ks = c.ks.map((_, i) => unPx(g, dotAt(s, `k${i}`)!));
    const where = c.ks.length === 2 ? ks[0][0] < AL48 && ks[1][0] > BE48 : want[c.chip](ks[0][0]);
    out.push([`The signpost${ks.length > 1 ? 's' : ''} k = ${ks.map((p) => fmt(p[0], 3)).join(', ')}: ${c.chip}; f(k) = ${ks.map((p) => fmt(F48(p[0]), 4)).join(', ')}, so af(k) ${c.chip === 'α < k < β' ? '< 0 (k between the roots)' : '> 0 (k outside the roots)'}, as labelled`, where && ks.every((p) => close(p[1], F48(p[0]))) && ks.every((p) => (c.chip === 'α < k < β' ? a * F48(p[0]) < 0 : a * F48(p[0]) > 0))]);
    const V = unPx(g, dotAt(s, 'vertex')!);
    out.push([`The dotted line at x = −b/2a = ${fmt(-b / (2 * a), 3)} through the vertex (${fmt(V[0], 3)}, ${fmt(V[1], 3)}), midway between the roots`, close(V[0], -b / (2 * a)) && close(V[0], (AL48 + BE48) / 2) && close(V[1], F48(V[0]))]);
    out.push(...signChecks(s, g, D));
    out.push(['The signs read + outside the roots and − between them (a > 0)', signsOf(s).map((z) => z.sign).join() === '1,-1,1']);
    const fl = c.ks.map((sp) => `f(${plain(sp.name)}) ${F48(sp.k) > 0 ? '>' : '<'} 0`);
    out.push(labelsCheck(s, [plain(c.title), ...c.ks.map((sp) => plain(sp.name)), ...fl, 'α', 'β', '−b/2a', 'x', 'y']));
    out.push(stackedCheck(s, ['b/2a']));
    out.push(noBadChars(s, fig48));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Topic 08's "Figure 1" · the transformation rule (p. 400)              */
/* ===================================================================== */
const CAP081 = 'The transformation rule: <i>φ</i> carries each old root <i>α</i>, <i>β</i> to the corresponding new root, but it is the inverse <i>ψ</i> = <i>φ</i><sup>−1</sup>, the dashed arrow, that gets substituted into <i>f</i>.';
const Y081 = { top: 70, bot: 168 }, X081 = { a: 140, b: 232, pa: 196, pb: 292 };
const fig081: Diagram = {
  id: 'm11-04-08-d1',
  topic: 7,
  name: 'The transformation rule',
  cases: [{ chip: 'Old roots to new', cap: CAP081 }],
  draw() {
    const s = new Sketch(W, 236), { top, bot } = Y081, X = X081;
    arrow(s, [12, top], [326, top], { color: C.ink, w: 1.4, name: 'line:old' });
    arrow(s, [12, bot], [326, bot], { color: C.ink, w: 1.4, name: 'line:new' });
    lab(s, 12, top - 14, `roots of ${I('f')}(${I('x')}) = 0`, { anchor: 'start', size: 12, color: C.slate });
    lab(s, 12, bot + 22, `roots of ${I('f')}(${I('ψ')}(${I('y')})) = 0`, { anchor: 'start', size: 12, color: C.slate });
    pt(s, [X.a, top], 'alpha'); pt(s, [X.b, top], 'beta'); pt(s, [X.pa, bot], 'phi(alpha)'); pt(s, [X.pb, bot], 'phi(beta)');
    lab(s, X.a, top - 14, I('α'), { size: 16 });
    lab(s, X.b, top - 14, I('β'), { size: 16 });
    lab(s, X.pa, bot + 24, `${I('φ')}(${I('α')})`, { size: 15 });
    lab(s, X.pb, bot + 24, `${I('φ')}(${I('β')})`, { size: 15 });
    bend(s, [X.a, top + 8], [X.a + 4, bot - 16], [X.pa - 8, bot - 6], { color: C.mari, w: 1.8, name: 'phi:alpha' });
    bend(s, [X.b, top + 8], [X.b + 4, bot - 16], [X.pb - 8, bot - 6], { color: C.mari, w: 1.8, name: 'phi:beta' });
    bend(s, [X.pa, bot - 9], [X.pa - 4, top + 24], [X.a + 7, top + 7], { color: C.ink, w: 1.6, dash: true, name: 'psi' });
    lab(s, X.a - 6, (top + bot) / 2 + 6, I('φ'), { anchor: 'end', size: 16, color: C.amber });
    lab(s, X.b + 16, (top + bot) / 2 - 2, I('φ'), { anchor: 'start', size: 16, color: C.amber });
    lab(s, X.pa + 8, (top + bot) / 2 - 4, I('ψ'), { anchor: 'start', size: 16 });
    lab(s, W / 2, 228, `the dashed arrow ${I('ψ')} = ${I('φ')}<sup>−1</sup> is the one you actually substitute`, { size: 11 });
    return s;
  },
  check() {
    const s = fig081.draw(fig081.cases[0]), out: Check[] = [], X = X081, { top, bot } = Y081;
    // a worked instance: f(x) = x² − 3x + 2 (roots 1, 2), φ(x) = 2x + 1, so ψ(y) = (y − 1)/2
    const f = (x: number) => x * x - 3 * x + 2, phi = (x: number) => 2 * x + 1, psi = (y: number) => (y - 1) / 2;
    out.push(['An instance of the rule: f(x) = x² − 3x + 2 has roots 1, 2; with φ(x) = 2x + 1 and ψ = φ⁻¹, f(ψ(y)) = 0 at y = φ(1) = 3 and φ(2) = 5, and ψ(φ(x)) = x', [1, 2].every((r) => close(f(r), 0) && close(f(psi(phi(r))), 0) && close(psi(phi(r)), r))]);
    const ends = (n: string) => { const ls = linesNamed(s, new RegExp(`^${n}$`)); return [ls[0].pts[0], ls[ls.length - 1].pts[ls[ls.length - 1].pts.length - 1]]; };
    const near = (p: P, q: P) => len(p, q) < 14;
    const [a1, a2] = ends('phi:alpha'), [b1, b2] = ends('phi:beta'), [p1, p2] = ends('psi');
    out.push(['The solid arrows φ (the highlight) run down from α to φ(α) and from β to φ(β); the dashed arrow ψ runs back up from φ(α) to α', near(a1, [X.a, top]) && near(a2, [X.pa, bot]) && near(b1, [X.b, top]) && near(b2, [X.pb, bot]) && near(p1, [X.pa, bot]) && near(p2, [X.a, top])]);
    out.push(['α, β, φ(α), φ(β) are filled dots on their lines (decision 10), each new root to the right of its old one', dotsOf(s).length === 4 && X.pa > X.a && X.pb > X.b]);
    out.push(labelsCheck(s, ['roots of f(x) = 0', 'roots of f(ψ(y)) = 0', 'α', 'β', 'φ(α)', 'φ(β)', 'φ', 'ψ', 'the dashed arrow ψ = φ−1 is the one you actually substitute']));
    out.push(noBadChars(s, fig081));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Topic 09's "Figure 2" · orthocentre; dot and cross from ūv (p. 410)   */
/* ===================================================================== */
const CAP091 = 'With the circumcentre at the origin, <i>H</i> = <i>z</i><sub>1</sub> + <i>z</i><sub>2</sub> + <i>z</i><sub>3</sub> is the orthocentre: the altitude from <i>A</i> through <i>H</i> meets <i>BC</i> at a right angle. Alongside, the dot and cross products read off <i>u</i>̅<i>v</i>.';
const O091: P = [170, 138], R091 = 100, ANG091 = { A: 100, B: 210, C: 330 };
const P091: P = [80, 196], U091 = { a: 20, l: 210 }, V091 = { a: 80, l: 130 };
type Case091 = { chip: string; cap: string; panel: 'H' | 'uv' };
const fig091: Diagram = {
  id: 'm11-04-09-d1',
  topic: 8,
  name: 'The orthocentre, and dot and cross from ūv',
  cases: [{ chip: 'The orthocentre', cap: CAP091, panel: 'H' }, { chip: 'Dot and cross', cap: CAP091, panel: 'uv' }],
  draw(c: Case091) {
    if (c.panel === 'H') {
      const s = new Sketch(W, 290), O = O091, r = R091, A = pol(O, r, ANG091.A), B = pol(O, r, ANG091.B), Cc = pol(O, r, ANG091.C);
      const H: P = [A[0] + B[0] + Cc[0] - 2 * O[0], A[1] + B[1] + Cc[1] - 2 * O[1]], foot: P = [A[0], B[1]];
      path(s, arcPts(O, r, 0, 360, 240), { color: C.grey, w: 1.4, name: 'circle' });
      [A, B, Cc].forEach((v, k) => path(s, [O, v], { color: C.slate, w: 1.1, dash: dotted, name: `radius:${k}` }));
      path(s, [A, B, Cc, A], { color: C.ink, w: 2, name: 'triangle' });
      path(s, [A, foot], { color: C.mari, w: 2.2, name: 'altitude' });
      square(s, foot, [1, 0], [0, -1], 8);
      pt(s, A, 'A'); pt(s, B, 'B'); pt(s, Cc, 'C'); pt(s, O, 'O'); pt(s, H, 'H', C.mari);
      lab(s, A[0], A[1] - 14, `${I('A')}(${I('z')}<sub>1</sub>)`, { size: 14 });
      lab(s, B[0] - 10, B[1] + 20, `${I('B')}(${I('z')}<sub>2</sub>)`, { anchor: 'end', size: 14 });
      lab(s, Cc[0] + 10, Cc[1] + 20, `${I('C')}(${I('z')}<sub>3</sub>)`, { anchor: 'start', size: 14 });
      lab(s, H[0] - 10, H[1] + 5, I('H'), { anchor: 'end', size: 15, color: C.amber });
      lab(s, O[0] + 8, O[1] - 7, I('O'), { anchor: 'start', size: 14 });
      lab(s, Cc[0] - 40, Cc[1] - 35, I('r'), { size: 14, color: C.slate });
      lab(s, O[0], 280, `${I('H')} = ${I('z')}<sub>1</sub> + ${I('z')}<sub>2</sub> + ${I('z')}<sub>3</sub>`, { size: 15, color: C.amber });
      return s;
    }
    const s = new Sketch(W, 280), Pp = P091, U = pol(Pp, U091.l, U091.a), V = pol(Pp, V091.l, V091.a);
    arrow(s, Pp, U, { color: C.ink, w: 2, name: 'vec:u' });
    arrow(s, Pp, V, { color: C.ink, w: 2, name: 'vec:v' });
    angle(s, Pp, 44, U091.a, V091.a, { color: C.mari, w: 2, name: 'angle:theta' });
    lab(s, ...pol(Pp, 60, (U091.a + V091.a) / 2), I('θ'), { size: 16, color: C.amber });
    lab(s, U[0] + 8, U[1] + 6, I('u'), { anchor: 'start', size: 16 });
    lab(s, V[0] + 2, V[1] - 10, I('v'), { size: 16 });
    lab(s, W / 2, 238, `Re(${I('u')}${BAR}${I('v')}) = |${I('u')}||${I('v')}| cos ${I('θ')}`, { size: 15 });
    lab(s, W / 2, 266, `Im(${I('u')}${BAR}${I('v')}) = |${I('u')}||${I('v')}| sin ${I('θ')}`, { size: 15 });
    return s;
  },
  check(c: Case091) {
    const s = fig091.draw(c), out: Check[] = [];
    if (c.panel === 'H') {
      const O = O091, toC = (p: P): Cx => [(p[0] - O[0]) / R091, (O[1] - p[1]) / R091];
      const [A, B, Cc, H] = ['A', 'B', 'C', 'H'].map((n) => toC(dotAt(s, n)!));
      const dot = (p: Cx, q: Cx) => p[0] * q[0] + p[1] * q[1], sub = (p: Cx, q: Cx): Cx => [p[0] - q[0], p[1] - q[1]];
      out.push([`A, B, C on the circle |z| = r about O (the circumcentre at the origin); H reads back z₁ + z₂ + z₃ = (${fmt(H[0], 4)}, ${fmt(H[1], 4)})`, [A, B, Cc].every((z) => close(Math.hypot(...z), 1, 1e-9)) && close(H[0], A[0] + B[0] + Cc[0], 1e-9) && close(H[1], A[1] + B[1] + Cc[1], 1e-9)]);
      out.push([`H is the orthocentre: (H − A)·(C − B) = ${fmt(dot(sub(H, A), sub(Cc, B)), 9)}, (H − B)·(C − A) = ${fmt(dot(sub(H, B), sub(Cc, A)), 9)}, (H − C)·(B − A) = ${fmt(dot(sub(H, Cc), sub(B, A)), 9)}`, close(dot(sub(H, A), sub(Cc, B)), 0, 1e-9) && close(dot(sub(H, B), sub(Cc, A)), 0, 1e-9) && close(dot(sub(H, Cc), sub(B, A)), 0, 1e-9)]);
      const alt = linesNamed(s, /^altitude$/)[0].pts, Hp = dotAt(s, 'H')!;
      out.push(['The altitude from A (the highlight) passes through H and meets BC at a right angle, marked at its foot', close(alt[0][0], alt[1][0], 1e-9) && close(Hp[0], alt[0][0], 1e-6) && close(alt[1][1], dotAt(s, 'B')![1], 1e-9) && close(dotAt(s, 'B')![1], dotAt(s, 'C')![1], 1e-9) && linesNamed(s, /^right-angle$/).length === 1]);
      out.push(['A, B, C, O and H are filled dots (decision 10); the radii to the vertices dotted', dotsOf(s).length === 5 && linesNamed(s, /^radius:/).length === 3]);
      out.push(labelsCheck(s, ['A(z1)', 'B(z2)', 'C(z3)', 'H', 'O', 'r', 'H = z1 + z2 + z3']));
    } else {
      const Pp = P091, u: Cx = [U091.l * Math.cos(U091.a * DEG), U091.l * Math.sin(U091.a * DEG)], v: Cx = [V091.l * Math.cos(V091.a * DEG), V091.l * Math.sin(V091.a * DEG)];
      const w = mul([u[0], -u[1]], v), th = (V091.a - U091.a) * DEG, m = Math.hypot(...u) * Math.hypot(...v);
      out.push([`For the drawn u and v (θ = ${V091.a - U091.a}°): Re(ūv) = ${fmt(w[0], 3)} = |u||v| cos θ (the dot product u·v = ${fmt(u[0] * v[0] + u[1] * v[1], 3)}), Im(ūv) = ${fmt(w[1], 3)} = |u||v| sin θ (the cross product)`, close(w[0], m * Math.cos(th), 1e-6) && close(w[1], m * Math.sin(th), 1e-6) && close(w[0], u[0] * v[0] + u[1] * v[1], 1e-6) && close(w[1], u[0] * v[1] - u[1] * v[0], 1e-6)]);
      const arc = linesNamed(s, /^angle:theta$/)[0].pts;
      out.push(['Both vectors start at one point, v the steeper; θ (the highlight) is the angle from u round to v, anticlockwise', V091.a > U091.a && close(angOf(Pp, arc[0]), U091.a, 1e-6) && close(angOf(Pp, arc[arc.length - 1]), V091.a, 1e-6)]);
      out.push(labelsCheck(s, ['u', 'v', 'θ', `Re(u${BAR}v) = |u||v| cos θ`, `Im(u${BAR}v) = |u||v| sin θ`]));
    }
    out.push(noBadChars(s, fig091));
    out.push(...layout(s));
    return out;
  },
};

export const DIAGRAMS_MATHEMATICS_11_04: Diagram[] = [fig41, fig42, fig43, fig44, fig45, fig46, fig47, fig48, fig081, fig091];
