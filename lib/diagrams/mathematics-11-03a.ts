import { C, LABEL_GAP, Rect, Sketch, mathW, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';
import { setRun, stixW } from '@/lib/diagrams/mathematics-11-03b';

/**
 * MATHEMATICS CLASS 11, CHAPTER 3 (Trigonometric Functions), FIGURES 3.1–3.11 of the Master Reference book
 * (October edition), redrawn; joined with mathematics-11-03b.ts in mathematics-11-03.ts.
 *
 *   Figure 3.1 (p. 180; caption p. 179), 3.2 (p. 182; caption p. 181), 3.3 (p. 185; caption p. 184): Topic 01, index 0.
 *   Figure 3.4 (p. 193; caption p. 192), 3.5 (p. 195; caption p. 194): Topic 02, index 1.
 *   Figure 3.6 (p. 204; caption p. 203), 3.7 (p. 206; caption p. 205): Topic 03, index 2.
 *   Figure 3.8 (p. 213; caption p. 212), 3.9 (p. 215; caption p. 214), 3.10 and 3.11 (p. 218; captions p. 217):
 *   Topic 04, index 3.
 *
 * NO FILLS, ONE HIGHLIGHT. The book draws in navy, orange, green and grey; here the book's orange is the drawing's one
 * highlight (marigold lines, amber text) wherever it marks the thing the drawing is about: 3.1 the arc AB and its
 * straightened copy; 3.2 the clockwise (negative) turn; 3.3 the arc s = rθ; 3.4 the angle θ and the height b = sin θ;
 * 3.5 the four anticlockwise arrows; 3.6 the hypotenuses' lengths; 3.8 the height at π/3; 3.9 the curve y = 2 sin x;
 * 3.10 the even mirror (0, 1) and the dashed pair; 3.11 the dashed asymptotes. In 3.7 (four colours, one per point) the
 * highlight is P(θ), the point the other three reflect. The book's green and navy are ink, its grey slate. The pale
 * tints are not fills here: 3.3's shaded sector is grey hatching (the arc keeps the marigold); 3.5's pale panel behind
 * the quadrants and 3.6's pale triangle tints are left out (they mark no region).
 *
 * GRAPHS (3.4, 3.7–3.11): axes with arrowheads in slate; every curve built from its equation; points ON a graph are
 * filled dots (decision 10, no hollow ring is drawn: no point here is "not included"); the book's grid is left out.
 * π-ticks are stacked fractions drawn by hand. 3.8 numbers the ticks beside the x-axis, as printed; 3.10 and 3.11
 * number them in a row under the graph, as printed (on 3.11 the asymptotes run through the axis at the ticks). 3.9
 * prints them beside the axis, but all three curves cross it at π, so here they sit in a row under the graph, each
 * joined to its tick by a faint dotted guide (the book's grid line). The book's "0" at the origin is the O.
 *
 * THE BOOK'S VALUES: every label as printed; its one hyphen used as a dash (3.7's "… = 1/2 - only the signs change")
 * becomes a colon. Positions are re-laid for a phone: 3.6's two triangles are two chips; 3.7's two reflection notes
 * ("reflect in the y-axis", printed across the y-axis, and "reflect in the x-axis", printed upright) are a key under
 * the circle, each beside a small copy of its two-headed arrow, and its two note lines are broken into four; 3.8's
 * circle sits above its graph and its point label (π/3, √3/2) above the point with a short leader, as printed; 3.9's
 * legend sits under the graph. Fractions in captions are written <frac>; on the drawings they are stacked by hand.
 */

const W = 340;
type P = [number, number];
const fmt = (n: number, d = 2) => String(+n.toFixed(d)).replace('-', '−');
const len = (a: P, b: P) => Math.hypot(b[0] - a[0], b[1] - a[1]);
const plain = (html: string) => html.replace(/<[^>]+>/g, '');
const widthOf = (html: string, size: number) => Math.max(mathW(html, size), plain(html).length * size * 0.5);
const I = (t: string) => `<i>${t}</i>`;
const close = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) < tol;
const PI = Math.PI;
const DEG = 180 / PI;

/* ---------- lines, labels and the layout checks (as in mathematics-11-02.ts) ---------- */
type Stroke = { color?: string; w?: number; dash?: boolean; name?: string; dots?: boolean };
const LINES = new WeakMap<Sketch, { name: string; pts: P[] }[]>();
const keep = (s: Sketch, pts: P[], name = '') => { const l = LINES.get(s) ?? []; l.push({ name, pts }); LINES.set(s, l); };
const linesNamed = (s: Sketch, re: RegExp) => (LINES.get(s) ?? []).filter((l) => re.test(l.name));
function path(s: Sketch, pts: P[], o: Stroke = {}) {
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ');
  const dash = o.dots ? ' stroke-dasharray="1.5 4"' : o.dash ? ' stroke-dasharray="6 4"' : '';
  s.add(`<path d="${d}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}" stroke-linejoin="round" stroke-linecap="round"${dash}/>`);
  keep(s, pts, o.name);
}
/** A filled arrowhead with its tip at `tip`, pointing along the screen angle `ang`. */
function head(s: Sketch, tip: P, ang: number, col: string, L = 9, hw = 4.5) {
  const bx = tip[0] - L * Math.cos(ang), by = tip[1] - L * Math.sin(ang);
  s.add(`<path d="M${r1(tip[0])} ${r1(tip[1])} L${r1(bx + hw * Math.sin(ang))} ${r1(by - hw * Math.cos(ang))} L${r1(bx - hw * Math.sin(ang))} ${r1(by + hw * Math.cos(ang))} Z" fill="${col}"/>`);
  keep(s, [tip, [bx + hw * Math.sin(ang), by - hw * Math.cos(ang)], [bx - hw * Math.sin(ang), by + hw * Math.cos(ang)], tip], 'head');
}
/** An arrow (a line and a filled head), kept for the clearance check. */
function arrow(s: Sketch, a: P, b: P, o: Stroke = {}) {
  const ang = Math.atan2(b[1] - a[1], b[0] - a[0]), col = o.color ?? C.ink;
  path(s, [a, [b[0] - 8 * Math.cos(ang), b[1] - 8 * Math.sin(ang)]], { ...o, color: col, w: o.w ?? 1.5, name: 'shaft' });
  head(s, b, ang, col);
  keep(s, [a, b], o.name);
}
/** A two-headed arrow between a and b. */
function both(s: Sketch, a: P, b: P, o: Stroke = {}) {
  const ang = Math.atan2(b[1] - a[1], b[0] - a[0]), col = o.color ?? C.slate;
  path(s, [[a[0] + 8 * Math.cos(ang), a[1] + 8 * Math.sin(ang)], [b[0] - 8 * Math.cos(ang), b[1] - 8 * Math.sin(ang)]], { ...o, color: col, w: o.w ?? 1.5, name: 'shaft' });
  head(s, b, ang, col, 8, 4);
  head(s, a, ang + PI, col, 8, 4);
  keep(s, [a, b], o.name);
}
/** Points of an arc about c of radius r from angle a0 to a1 (radians, anticlockwise positive, as in maths). */
const arcPts = (c: P, r: number, a0: number, a1: number, n = 64): P[] => Array.from({ length: n + 1 }, (_, i): P => { const a = a0 + ((a1 - a0) * i) / n; return [c[0] + r * Math.cos(a), c[1] - r * Math.sin(a)]; });
function arc(s: Sketch, c: P, r: number, a0: number, a1: number, o: Stroke = {}) { path(s, arcPts(c, r, a0, a1, Math.max(8, Math.ceil((Math.abs(a1 - a0) * r) / 3))), o); }
/** An arc ending in an arrowhead at a1: the turn's direction. */
function arcArrow(s: Sketch, c: P, r: number, a0: number, a1: number, o: Stroke = {}) {
  const sgn = Math.sign(a1 - a0), back = 7.5 / r, col = o.color ?? C.ink;
  arc(s, c, r, a0, a1 - sgn * back, { ...o, color: col });
  const tip: P = [c[0] + r * Math.cos(a1), c[1] - r * Math.sin(a1)];
  const from: P = [c[0] + r * Math.cos(a1 - sgn * back), c[1] - r * Math.sin(a1 - sgn * back)];
  head(s, tip, Math.atan2(tip[1] - from[1], tip[0] - from[0]), col, 9, 4.5);
}
/** A dot that means a point, kept as a ring for the clearance check. */
const DOT_R = 4;
function pt(s: Sketch, p: P, col: string = C.ink, r = DOT_R) {
  s.point(p[0], p[1], r, `<circle cx="${r1(p[0])}" cy="${r1(p[1])}" r="${r}" fill="${col}"/>`);
  keep(s, Array.from({ length: 25 }, (_, i): P => [p[0] + (r + 1) * Math.cos((2 * PI * i) / 24), p[1] + (r + 1) * Math.sin((2 * PI * i) / 24)]), 'dot');
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
  const boxes: [string, Rect][] = s.labels.map((l): [string, Rect] => [l.text, l.rect]);
  for (const { pts, name: ln } of LINES.get(s) ?? []) for (const [name, r] of boxes) { const d = boxToLine(r, pts); if (d < gap) { gap = d; what = `${name}" and "${ln || 'a line'}`; } }
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
const missing = (s: Sketch, ts: string[]) => ts.filter((t) => !hasLabel(s, t));
const printed = (s: Sketch, ts: string[]): Check => { const m = missing(s, ts); return [`The labels as printed: ${ts.join(', ')}${m.length ? `; missing ${m.join(', ')}` : ''}`, m.length === 0]; };

/** A line of STIX on the drawing, from its baseline, its box at its true width. */
function lab(s: Sketch, x: number, y: number, html: string, o: { size?: number; anchor?: 'start' | 'middle' | 'end'; color?: string; bold?: boolean } = {}): Rect {
  const size = o.size ?? 13, anchor = o.anchor ?? 'middle', w = widthOf(html, size) * (o.bold ? 1.08 : 1);
  const x0 = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w : x;
  const rect: Rect = [x0, y - size * 0.72, x0 + w, y + size * (html.includes('<sub>') ? 0.36 : 0.22)];
  s.labels.push({ text: plain(html), rect });
  s.text(x, y, html, { size, anchor, color: o.color ?? C.text, semibold: o.bold });
  return rect;
}

/* ---------- stacked fractions, drawn by hand ---------- */
type Piece = { t: string } | { num: string; den: string };
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
const pieceW = (p: Piece, size: number) => ('t' in p ? mathW(p.t, size) : fracW(p.num, p.den, size) + 2);
/**
 * One label made of runs: text and stacked fractions (their rule on the maths axis). Registered as ONE label.
 * `tight`: the text runs at STIX's own widths, each set against the fraction it leads into (stixW and setRun,
 * mathematics-11-03b.ts), so mathW's spare width does not show on Android as a wide gap before the fraction (Fig 3.4's footnote).
 */
function runs(s: Sketch, x: number, y: number, parts: Piece[], o: { size?: number; anchor?: 'start' | 'middle' | 'end'; color?: string; tight?: boolean } = {}): Rect {
  const size = o.size ?? 13, color = o.color ?? C.text, ws = parts.map((p) => (o.tight && 't' in p ? stixW(p.t, size) : pieceW(p, size))), total = ws.reduce((a, b) => a + b, 0);
  let at = o.anchor === 'middle' ? x - total / 2 : o.anchor === 'end' ? x - total : x;
  const box: Rect = [at, y - size * 0.72, at + total, y + size * 0.22];
  parts.forEach((p, i) => {
    if ('t' in p) {
      if (o.tight) setRun(s, at, ws[i], y, p.t, size, color, i < parts.length - 1);
      else s.text(at, y, p.t, { size, anchor: 'start', color });
    } else {
      const r = frac(s, at + ws[i] / 2, y - size * 0.27, p.num, p.den, size, color);
      box[1] = Math.min(box[1], r[1]); box[3] = Math.max(box[3], r[3]);
    }
    at += ws[i];
  });
  s.labels.push({ text: parts.map((p) => ('t' in p ? plain(p.t) : `${plain(p.num)}/${plain(p.den)}`)).join(''), rect: box });
  return box;
}
/** Every stacked fraction on the drawing really is stacked: numerator above the rule, denominator below, rule as wide as both. */
const stacked = (s: Sketch, want: string[]): Check => {
  const fr = FRACS.get(s) ?? [], got = fr.map((f) => `${plain(f.num)}/${plain(f.den)}`).sort(), w = [...want].sort();
  const ok = fr.every((f) => f.numY < f.rule[2] && f.denY - 7 > f.rule[2] && f.rule[1] - f.rule[0] >= Math.max(f.numW, f.denW));
  return [`Every fraction on the drawing is stacked by hand (${got.join(', ') || 'none'}), numerator over a rule over denominator`, ok && got.length === w.length && got.every((g, i) => g === w[i])];
};

/* ---------- hatching: the book's shading, as lines ---------- */
function hatch(s: Sketch, inside: (p: P) => boolean, box: Rect, o: { step?: number; gap?: number; color?: string } = {}): [P, P][] {
  const step = (o.step ?? 7) * Math.SQRT2, gap = o.gap ?? LABEL_GAP + 1, avoid = s.labels.map((l) => l.rect);
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
  segs.forEach((sg) => keep(s, sg, 'hatch'));
  return segs;
}

/* ---------- graphs: axes through O, curves from their equations, π-ticks stacked ---------- */
type Gr = { ox: number; oy: number; ux: number; uy: number; x: [number, number]; y: [number, number] };
const gx = (g: Gr, v: number) => g.ox + v * g.ux;
const gy = (g: Gr, v: number) => g.oy - v * g.uy;
const gp = (g: Gr, p: P): P => [gx(g, p[0]), gy(g, p[1])];
const unPx = (g: Gr, p: P): P => [(p[0] - g.ox) / g.ux, (g.oy - p[1]) / g.uy];
type Place = [number, number, 'start' | 'middle' | 'end'];
type AxOpt = {
  /** π-ticks, in halves of π (k = 1 is π/2), and where each is numbered: beside the axis (default) or in a row at `row`. */
  pk?: number[]; row?: number; kdx?: Record<string, number>; kAbove?: number[];
  /** Faint dotted guides from each π-tick down to its number in the row (the book's grid lines, thinned out). */
  guides?: boolean;
  yt?: number[]; yRight?: number[]; ydy?: Record<string, number>; ydx?: Record<string, number>;
  O?: Place | null; xName?: Place; yName?: Place;
};
const AXIS_W = 1.3;
/** A π-tick's value as printed: π, 2π, −π, or a stacked fraction π/2, 3π/2 with a minus before it; the fraction centred on its tick. */
function piLabel(s: Sketch, x: number, y: number, k: number, size = 11, color: string = C.slate): Rect {
  const neg = k < 0, a = Math.abs(k), m = mathW('−', size);
  if (a % 2 === 0) {
    const t = `${a === 2 ? '' : a / 2}π`, w = widthOf(t, size + 1);
    return lab(s, neg ? x - m - w / 2 : x, y, `${neg ? '−' : ''}${t}`, { size: size + 1, color, anchor: neg ? 'start' : 'middle' });
  }
  const num = `${a === 1 ? '' : a}π`, fw = fracW(num, '2', size) + 2;
  return neg ? runs(s, x - m - fw / 2, y, [{ t: '−' }, { num, den: '2' }], { size, anchor: 'start', color }) : runs(s, x, y, [{ num, den: '2' }], { size, anchor: 'middle', color });
}
function axes(s: Sketch, g: Gr, o: AxOpt = {}) {
  const xL = gx(g, g.x[0]), xR = gx(g, g.x[1]), yB = gy(g, g.y[0]), yT = gy(g, g.y[1]);
  arrow(s, [xL, g.oy], [xR, g.oy], { color: C.slate, w: AXIS_W, name: 'axis:x' });
  arrow(s, [g.ox, yB], [g.ox, yT], { color: C.slate, w: AXIS_W, name: 'axis:y' });
  const xn = o.xName ?? [xR + 5, g.oy + 5, 'start'], yn = o.yName ?? [g.ox + 9, yT + 6, 'start'];
  lab(s, xn[0], xn[1], I('x'), { anchor: xn[2], size: 15 });
  lab(s, yn[0], yn[1], I('y'), { anchor: yn[2], size: 15 });
  (o.pk ?? []).forEach((k) => {
    const x = gx(g, (k * PI) / 2);
    s.line(x, g.oy - 4, x, g.oy + 4, { color: C.slate, w: 1.1 });
    keep(s, [[x, g.oy - 4], [x, g.oy + 4]], `tick:x:${k}`);
    const y = o.row ?? (o.kAbove?.includes(k) ? g.oy - 21 : g.oy + 22);
    if (o.guides && o.row) { s.line(x, g.oy + 7, x, o.row - 19, { color: C.grey, w: 0.9, dash: true }); keep(s, [[x, g.oy + 7], [x, o.row - 19]], `guide:${k}`); }
    piLabel(s, x + (o.kdx?.[String(k)] ?? 0), y, k);
  });
  (o.yt ?? []).forEach((t) => {
    const y = gy(g, t);
    s.line(g.ox - 4, y, g.ox + 4, y, { color: C.slate, w: 1.1 });
    keep(s, [[g.ox - 4, y], [g.ox + 4, y]], `tick:y:${t}`);
    const right = o.yRight?.includes(t);
    lab(s, g.ox + (right ? 9 : -9) + (o.ydx?.[String(t)] ?? 0), y + 4 + (o.ydy?.[String(t)] ?? 0), fmt(t), { anchor: right ? 'start' : 'end', size: 11.5, color: C.slate });
  });
  if (o.O === null) return;
  const Op = o.O ?? [g.ox - 6, g.oy + 16, 'end'];
  lab(s, Op[0], Op[1], I('O'), { anchor: Op[2], size: 13 });
}
function curve(s: Sketch, g: Gr, pts: P[], o: Stroke = {}) {
  path(s, pts.map((p) => gp(g, p)), { color: o.color ?? C.ink, w: o.w ?? 2, dash: o.dash, dots: o.dots, name: o.name ?? 'curve' });
}
const sample = (f: (x: number) => number, a: number, b: number, n = 200): P[] => Array.from({ length: n + 1 }, (_, i) => { const x = a + ((b - a) * i) / n; return [x, f(x)]; });
const DOTS = new WeakMap<Sketch, { x: number; y: number; hi: boolean }[]>();
/** A point ON the graph: a filled dot (decision 10). */
function gdot(s: Sketch, g: Gr, x: number, y: number, col: string = C.ink) {
  pt(s, gp(g, [x, y]), col);
  DOTS.set(s, [...(DOTS.get(s) ?? []), { x, y, hi: col === C.mari }]);
}
const curvesBack = (s: Sketch, g: Gr, re: RegExp) => linesNamed(s, re).map((l) => l.pts.map((p) => unPx(g, p)));
/** The math angle of p seen from c (screen y runs down). */
const angleAt = (c: P, p: P) => Math.atan2(c[1] - p[1], p[0] - c[0]);
const polyLen = (pts: P[]) => pts.slice(1).reduce((t, p, i) => t + len(pts[i], p), 0);

/* ===================================================================== */
/* Figure 3.1 · the radian construction (Topic 01, p. 180)               */
/* ===================================================================== */
const CAP31 = 'The radian construction: an arc as long as the radius subtends exactly one radian, about 57.3 degrees.';
const G31 = { o: [158, 160] as P, R: 92, bars: { x0: 70, y1: 300, y2: 334 } };
const fig31: Diagram = {
  id: 'm11-03-fig-3.1',
  topic: 0,
  name: 'The radian construction',
  cases: [{ chip: 'One radian', cap: CAP31 }],
  draw() {
    const s = new Sketch(W, 352), { o, R, bars } = G31;
    const A: P = [o[0] + R, o[1]], B: P = [o[0] + R * Math.cos(1), o[1] - R * Math.sin(1)];
    arc(s, o, R, 1, 2 * PI, { color: C.slate, w: 1.6, name: 'circle' });
    arc(s, o, R, 0, 1, { color: C.mari, w: 3.6, name: 'arc:AB' });
    path(s, [o, A], { w: 2, name: 'radius:OA' });
    path(s, [o, B], { w: 2, name: 'radius:OB' });
    arc(s, o, 26, 0, 1, { color: C.ink, w: 1.6, name: 'angle' });
    pt(s, o); pt(s, A); pt(s, B);
    lab(s, o[0] - 7, o[1] + 20, I('O'), { anchor: 'end', size: 16 });
    lab(s, A[0] + 9, A[1] + 8, I('A'), { anchor: 'start', size: 16 });
    lab(s, B[0] + 6, B[1] - 12, I('B'), { anchor: 'start', size: 16 });
    lab(s, o[0] + 50 * Math.cos(0.5) + 4, o[1] - 50 * Math.sin(0.5) + 5, '1 rad', { size: 14 });
    lab(s, o[0] + R / 2, o[1] + 18, `${I('r')} = 1`, { size: 14 });
    lab(s, o[0] + (R / 2) * Math.cos(1) - 9, o[1] - (R / 2) * Math.sin(1), `${I('r')} = 1`, { size: 14, anchor: 'end' });
    lab(s, 10, 32, '1 rad ≈ 57.3°', { anchor: 'start', size: 15 });
    lab(s, W - 10, 32, `arc ${I('AB')} = 1`, { anchor: 'end', size: 15, color: C.amber });
    // the radius and the arc, straightened: the same length
    lab(s, bars.x0 - 30, 280, 'the two are the same length', { anchor: 'start', size: 13.5, color: C.slate });
    const x1 = bars.x0 + R;
    ([[bars.y1, C.ink, 'bar:radius'], [bars.y2, C.mari, 'bar:arc']] as [number, string, string][]).forEach(([y, col, name]) => {
      path(s, [[bars.x0, y], [x1, y]], { color: col, w: 3, name });
      path(s, [[bars.x0, y - 6], [bars.x0, y + 6]], { color: col, w: 1.6, name: `${name}:end` });
      path(s, [[x1, y - 6], [x1, y + 6]], { color: col, w: 1.6, name: `${name}:end` });
    });
    [bars.x0, x1].forEach((x) => { s.line(x, bars.y1 + 9, x, bars.y2 - 9, { color: C.grey, w: 1, dash: true }); keep(s, [[x, bars.y1 + 9], [x, bars.y2 - 9]], 'guide'); });
    lab(s, x1 + 12, bars.y1 + 5, `radius ${I('r')} = 1`, { anchor: 'start', size: 14 });
    lab(s, x1 + 12, bars.y2 + 5, `arc ${I('AB')}, straightened`, { anchor: 'start', size: 14, color: C.amber });
    return s;
  },
  check() {
    const s = fig31.draw(fig31.cases[0]), out: Check[] = [], { o, R } = G31;
    const [ab] = linesNamed(s, /^arc:AB$/), [ob] = linesNamed(s, /^radius:OB$/), [oa] = linesNamed(s, /^radius:OA$/);
    const ang = angleAt(o, ob.pts[1]) - angleAt(o, oa.pts[1]), arcLen = polyLen(ab.pts);
    out.push([`Angle AOB read back off the drawing: ${fmt(ang, 4)} rad = ${fmt(ang * DEG, 2)}°, one radian; 180/π = ${fmt(180 / PI, 4)}, about 57.3 as printed`, close(ang, 1, 1e-9) && fmt(180 / PI, 1) === '57.3']);
    out.push([`The marigold arc AB runs ${fmt(arcLen, 1)} px round the circle and the radius OA is ${fmt(len(oa.pts[0], oa.pts[1]), 1)} px: arc AB = r (both "1")`, close(arcLen, R, 0.1) && close(len(oa.pts[0], oa.pts[1]), R)]);
    const [br] = linesNamed(s, /^bar:radius$/), [ba] = linesNamed(s, /^bar:arc$/);
    out.push([`The two bars under the circle are the radius and the arc straightened, each ${fmt(len(br.pts[0], br.pts[1]), 1)} px: the same length`, close(len(br.pts[0], br.pts[1]), R) && close(len(ba.pts[0], ba.pts[1]), arcLen, 0.1) && close(br.pts[0][0], ba.pts[0][0])]);
    out.push(printed(s, ['O', 'A', 'B', '1 rad', 'r = 1', '1 rad ≈ 57.3°', 'arc AB = 1', 'the two are the same length', 'radius r = 1', 'arc AB, straightened']));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 3.2 · the sign of an angle (Topic 01, p. 182)                  */
/* ===================================================================== */
const CAP32 = 'Sign of an angle: anticlockwise rotation from the initial side is positive, clockwise is negative.';
const G32 = { o: [62, 200] as P, L: 172, th: PI / 3, rPlus: 72, rMinus: 98 };
const fig32: Diagram = {
  id: 'm11-03-fig-3.2',
  topic: 0,
  name: 'Sign of an angle',
  cases: [{ chip: 'Two directions', cap: CAP32 }],
  draw() {
    const s = new Sketch(W, 392), { o, L, th } = G32;
    const up: P = [o[0] + L * Math.cos(th), o[1] - L * Math.sin(th)], down: P = [o[0] + L * Math.cos(th), o[1] + L * Math.sin(th)];
    arrow(s, o, [300, o[1]], { w: 2, name: 'initial' });
    arrow(s, o, up, { w: 2, name: 'terminal:+' });
    arrow(s, o, down, { color: C.mari, w: 2, name: 'terminal:−' });
    arcArrow(s, o, G32.rPlus, 0, th, { w: 1.9, name: 'turn:+' });
    arcArrow(s, o, G32.rMinus, 0, -th, { color: C.mari, w: 1.9, name: 'turn:−' });
    pt(s, o);
    lab(s, o[0] - 8, o[1] + 19, I('O'), { anchor: 'end', size: 16 });
    lab(s, 306, o[1] + 6, I('X'), { anchor: 'start', size: 17 });
    lab(s, up[0] + 22, up[1] - 14, 'terminal side', { size: 15 });
    lab(s, 238, 92, 'anticlockwise', { size: 14 });
    lab(s, 238, 110, '(positive)', { size: 14 });
    lab(s, o[0] + 94 * Math.cos(PI / 6) + 4, o[1] - 94 * Math.sin(PI / 6) + 6, `+${I('θ')}`, { size: 17 });
    lab(s, 250, o[1] - 12, 'initial side', { size: 14, color: C.slate });
    lab(s, o[0] + 120 * Math.cos(-PI / 5.5) + 4, o[1] - 120 * Math.sin(-PI / 5.5) + 4, `−${I('θ')}`, { size: 17, color: C.amber });
    lab(s, 232, 296, 'clockwise', { size: 14, color: C.amber });
    lab(s, 232, 314, '(negative)', { size: 14, color: C.amber });
    lab(s, down[0] + 22, down[1] + 26, 'terminal side', { size: 15, color: C.amber });
    return s;
  },
  check() {
    const s = fig32.draw(fig32.cases[0]), out: Check[] = [], { o } = G32;
    const end = (re: RegExp) => linesNamed(s, re).slice(-1)[0].pts[1];
    const aUp = angleAt(o, end(/^terminal:\+$/)) * DEG, aDown = angleAt(o, end(/^terminal:−$/)) * DEG, aIn = angleAt(o, end(/^initial$/)) * DEG;
    out.push([`Initial side along OX (${fmt(aIn)}°); one terminal side at +${fmt(aUp)}°, the other at ${fmt(aDown)}°, mirror images, as drawn`, close(aIn, 0) && close(aUp, 60, 1e-6) && close(aDown, -60, 1e-6)]);
    const turn = (re: RegExp) => { const p = linesNamed(s, re)[0].pts; return [angleAt(o, p[0]), angleAt(o, p[p.length - 1])]; };
    const [p0, p1] = turn(/^turn:\+$/), [m0, m1] = turn(/^turn:−$/);
    out.push([`The +θ arc turns anticlockwise from the initial side (${fmt(p0 * DEG)}° up to ${fmt(p1 * DEG)}°), the −θ arc clockwise (${fmt(m0 * DEG)}° down to ${fmt(m1 * DEG)}°), each ending in its arrowhead at the terminal side`, close(p0, 0) && p1 > 0.9 && close(m0, 0) && m1 < -0.9 && linesNamed(s, /^head$/).length >= 5]);
    out.push(printed(s, ['O', 'X', 'terminal side', 'anticlockwise', '(positive)', '+θ', 'initial side', '−θ', 'clockwise', '(negative)']));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 3.3 · a circular sector (Topic 01, p. 185)                     */
/* ===================================================================== */
const CAP33 = 'A circular sector: the two radii, the arc they cut off, and the central angle behind the area formula.';
const G33 = { o: [150, 150] as P, R: 108, th: PI / 3 };
const HATCH33 = new WeakMap<Sketch, [P, P][]>();
const fig33: Diagram = {
  id: 'm11-03-fig-3.3',
  topic: 0,
  name: 'A circular sector',
  cases: [{ chip: 'Sector', cap: CAP33 }],
  draw() {
    const s = new Sketch(W, 322), { o, R, th } = G33;
    const A: P = [o[0] + R, o[1]], B: P = [o[0] + R * Math.cos(th), o[1] - R * Math.sin(th)];
    arc(s, o, R, th, 2 * PI, { color: C.slate, w: 1.6, name: 'circle' });
    arc(s, o, R, 0, th, { color: C.mari, w: 3.6, name: 'arc:s' });
    path(s, [o, A], { w: 2, name: 'radius:A' });
    path(s, [o, B], { w: 2, name: 'radius:B' });
    arc(s, o, 24, 0, th, { w: 1.6, name: 'angle' });
    pt(s, o, C.ink, 3.4);
    lab(s, o[0] - 8, o[1] + 21, I('O'), { anchor: 'end', size: 17 });
    lab(s, o[0] + (R / 2) * Math.cos(th) - 10, o[1] - (R / 2) * Math.sin(th) - 2, I('r'), { anchor: 'end', size: 17 });
    lab(s, o[0] + R / 2 + 8, o[1] + 20, I('r'), { size: 17 });
    lab(s, o[0] + 40 * Math.cos(th / 2) + 2, o[1] - 40 * Math.sin(th / 2) + 6, I('θ'), { size: 17 });
    lab(s, o[0] + (R + 10) * Math.cos(th / 2) + 2, o[1] - (R + 10) * Math.sin(th / 2) - 8, `${I('s')} = ${I('rθ')}`, { anchor: 'start', size: 17, color: C.amber });
    runs(s, W / 2, 302, [{ t: `${I('A')}<sub>sect</sub> = ` }, { num: '1', den: '2' }, { t: `${I('r')}<sup>2</sup>${I('θ')} = ` }, { num: '1', den: '2' }, { t: I('rs') }], { size: 17, anchor: 'middle', tight: true });
    // the sector itself: the book's pale tint, hatched in grey, clear of its edges, the angle mark and the labels
    const inSector = (p: P) => { const d = len(o, p), a = angleAt(o, p); return d < R - 4 && a > 0 && a < th && toPoly(p, [o, A]) > 4 && toPoly(p, [o, B]) > 4 && Math.abs(d - 24) > 4 && d > 10; };
    HATCH33.set(s, hatch(s, inSector, [o[0], B[1], A[0], o[1]], { color: C.grey, step: 6 }));
    return s;
  },
  check() {
    const s = fig33.draw(fig33.cases[0]), out: Check[] = [], { o, R, th } = G33, H = HATCH33.get(s) ?? [];
    const [sArc] = linesNamed(s, /^arc:s$/), sLen = polyLen(sArc.pts), [ra] = linesNamed(s, /^radius:A$/), [rb] = linesNamed(s, /^radius:B$/);
    const theta = angleAt(o, rb.pts[1]) - angleAt(o, ra.pts[1]);
    out.push([`The radii read back: both ${fmt(len(o, ra.pts[1]), 1)} px, the angle between them θ = ${fmt(theta, 4)} rad; the marigold arc measures ${fmt(sLen, 2)} px against rθ = ${fmt(R * theta, 2)} px: s = rθ`, close(len(o, ra.pts[1]), R) && close(len(o, rb.pts[1]), R) && close(theta, th) && close(sLen, R * theta, 0.1)]);
    const poly: P[] = [o, ...sArc.pts], area = Math.abs(poly.reduce((t, p, i) => { const q = poly[(i + 1) % poly.length]; return t + p[0] * q[1] - q[0] * p[1]; }, 0)) / 2;
    out.push([`The sector's area from the drawing: ${fmt(area, 0)} px²; 1/2 r²θ = ${fmt((R * R * theta) / 2, 0)} px² and 1/2 rs = ${fmt((R * sLen) / 2, 0)} px²: the formula holds`, close(area / ((R * R * theta) / 2), 1, 1e-3) && close((R * sLen) / 2 / area, 1, 1e-3)]);
    out.push([`The sector hatched in grey (${H.length} strokes), every stroke inside it`, H.length > 12 && H.every(([a, b]) => [a, b].every((p) => len(o, p) < R && angleAt(o, p) > 0 && angleAt(o, p) < th))]);
    out.push(stacked(s, ['1/2', '1/2']));
    out.push(printed(s, ['O', 'r', 'θ', 's = rθ', 'Asect = 1/2r2θ = 1/2rs']));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 3.4 · the unit-circle definition (Topic 02, p. 193)            */
/* ===================================================================== */
const CAP34 = 'The unit-circle definition of sine and cosine, with the point <i>P</i> taken in the second quadrant.';
/** p. 193: drawn at sin θ = 3/5, cos θ = −4/5. */
const PT34: P = [-4 / 5, 3 / 5];
const G34: Gr = { ox: 202, oy: 168, ux: 95, uy: 95, x: [-1.37, 1.25], y: [-1.27, 1.32] };
const fig34: Diagram = {
  id: 'm11-03-fig-3.4',
  topic: 1,
  name: 'The unit-circle definition',
  cases: [{ chip: 'Second quadrant', cap: CAP34 }],
  draw() {
    const s = new Sketch(W, 336), g = G34, o: P = [g.ox, g.oy];
    const P0 = gp(g, PT34), M: P = [P0[0], g.oy], th = Math.atan2(PT34[1], PT34[0]);
    axes(s, g, { O: [g.ox + 7, g.oy + 17, 'start'] });
    arc(s, o, g.ux, 0, 2 * PI, { color: C.slate, w: 1.6, name: 'circle' });
    path(s, [o, P0], { w: 2, name: 'OP' });
    path(s, [M, o], { w: 3, name: 'OM' });
    path(s, [P0, M], { color: C.mari, w: 1.8, dash: true, name: 'PM' });
    arc(s, o, 28, 0, th, { color: C.mari, w: 1.8, name: 'theta' });
    pt(s, P0); pt(s, M);
    lab(s, P0[0] - 6, P0[1] - 10, `${I('P')}(${I('a')}, ${I('b')})`, { anchor: 'end', size: 15 });
    lab(s, P0[0] - 26, (P0[1] + M[1]) / 2 + 5, `${I('b')} = sin ${I('θ')} > 0`, { anchor: 'end', size: 13, color: C.amber });
    lab(s, M[0], M[1] + 21, I('M'), { size: 14 });
    lab(s, o[0] - 42, M[1] + 36, `${I('a')} = cos ${I('θ')} < 0`, { size: 11.5 });
    lab(s, o[0] + 40 * Math.cos(1.25) + 2, o[1] - 40 * Math.sin(1.25) + 3, I('θ'), { size: 16, color: C.amber });
    lab(s, g.ox + 46, g.oy - 52, 'I', { size: 15, color: C.slate });
    lab(s, g.ox - 30, g.oy - 66, 'II', { size: 15, color: C.slate });
    lab(s, g.ox - 42, g.oy + 62, 'III', { size: 15, color: C.slate });
    lab(s, g.ox + 46, g.oy + 66, 'IV', { size: 15, color: C.slate });
    runs(s, W / 2, 322, [{ t: `drawn at ${I('θ')} with sin ${I('θ')} = ` }, { num: '3', den: '5' }, { t: `, cos ${I('θ')} = −` }, { num: '4', den: '5' }], { size: 13, anchor: 'middle', color: C.slate, tight: true });
    return s;
  },
  check() {
    const s = fig34.draw(fig34.cases[0]), out: Check[] = [], g = G34;
    const [op] = linesNamed(s, /^OP$/), P0 = unPx(g, op.pts[1]), [om] = linesNamed(s, /^OM$/), Mx = unPx(g, om.pts[0]), [pm] = linesNamed(s, /^PM$/);
    out.push([`P read back off the drawing: (${fmt(P0[0], 4)}, ${fmt(P0[1], 4)}); a² + b² = 16/25 + 9/25 = ${fmt(P0[0] ** 2 + P0[1] ** 2, 6)}: on the unit circle`, close(P0[0], -0.8) && close(P0[1], 0.6) && close(P0[0] ** 2 + P0[1] ** 2, 1)]);
    const th = Math.atan2(P0[1], P0[0]) * DEG;
    out.push([`θ = ${fmt(th, 2)}°, between 90° and 180°: the second quadrant, where b = sin θ = 3/5 > 0 and a = cos θ = −4/5 < 0, as labelled`, th > 90 && th < 180 && Math.sin(th / DEG) > 0 && Math.cos(th / DEG) < 0 && close(Math.sin(th / DEG), 0.6) && close(Math.cos(th / DEG), -0.8)]);
    out.push([`M is the foot of the perpendicular from P: OM = ${fmt(Math.abs(Mx[0]), 4)} = |a| along the x-axis, MP = ${fmt(len(pm.pts[0], pm.pts[1]) / g.uy, 4)} = b, dashed`, close(Mx[0], -0.8) && close(Mx[1], 0) && close(len(pm.pts[0], pm.pts[1]) / g.uy, 0.6) && close(pm.pts[0][0], pm.pts[1][0])]);
    out.push(stacked(s, ['3/5', '4/5']));
    out.push(printed(s, ['x', 'y', 'O', 'P(a, b)', 'b = sin θ > 0', 'M', 'a = cos θ < 0', 'θ', 'I', 'II', 'III', 'IV', 'drawn at θ with sin θ = 3/5, cos θ = −4/5']));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 3.5 · ASTC (Topic 02, p. 195)                                  */
/* ===================================================================== */
const CAP35 = 'ASTC: which trigonometric functions are positive in each quadrant, read anticlockwise from Quadrant I.';
/** p. 195, quadrant by quadrant as printed: the letter, the positive functions, the quadrant's name. */
const Q35 = [
  { q: 1, letter: 'A', fns: 'All +', name: 'Q I', pos: ['sin', 'cos', 'tan', 'csc', 'sec', 'cot'] },
  { q: 2, letter: 'S', fns: 'sin, csc +', name: 'Q II', pos: ['sin', 'csc'] },
  { q: 3, letter: 'T', fns: 'tan, cot +', name: 'Q III', pos: ['tan', 'cot'] },
  { q: 4, letter: 'C', fns: 'cos, sec +', name: 'Q IV', pos: ['cos', 'sec'] },
];
const G35 = { o: [170, 182] as P, dx: 86, dy: 82, rArrow: 30 };
const fig35: Diagram = {
  id: 'm11-03-fig-3.5',
  topic: 1,
  name: 'ASTC: the signs by quadrant',
  cases: [{ chip: 'All Silver Tea Cups', cap: CAP35 }],
  draw() {
    const s = new Sketch(W, 384), { o, dx, dy, rArrow } = G35;
    arrow(s, [14, o[1]], [312, o[1]], { color: C.slate, w: AXIS_W, name: 'axis:x' });
    arrow(s, [o[0], 340], [o[0], 22], { color: C.slate, w: AXIS_W, name: 'axis:y' });
    lab(s, 317, o[1] + 6, I('x'), { anchor: 'start', size: 16 });
    lab(s, o[0] + 10, 31, I('y'), { anchor: 'start', size: 16 });
    Q35.forEach(({ q, letter, fns, name }) => {
      const cx = o[0] + (q === 1 || q === 4 ? dx : -dx), cy = o[1] + (q <= 2 ? -dy : dy);
      lab(s, cx, cy - 16, letter, { size: 34, bold: true });
      lab(s, cx, cy + 20, fns, { size: 15 });
      lab(s, cx, cy + 46, name, { size: 13, color: C.slate });
    });
    // the reading order, anticlockwise: one marigold arrow inside each quadrant
    [0, 1, 2, 3].forEach((i) => arcArrow(s, o, rArrow, (i * PI) / 2 + 0.2, ((i + 1) * PI) / 2 - 0.2, { color: C.mari, w: 1.8, name: `turn:${i + 1}` }));
    lab(s, W / 2, 370, 'read anticlockwise from Q I: A - S - T - C', { size: 14, color: C.slate });
    return s;
  },
  check() {
    const s = fig35.draw(fig35.cases[0]), out: Check[] = [], { o } = G35;
    // the six functions at an angle inside each quadrant, by their definitions
    const six = (a: number): Record<string, number> => ({ sin: Math.sin(a), cos: Math.cos(a), tan: Math.tan(a), csc: 1 / Math.sin(a), sec: 1 / Math.cos(a), cot: 1 / Math.tan(a) });
    const rows = Q35.map(({ q, pos }) => { const v = six(((q - 1) * 90 + 37) / DEG), got = Object.keys(v).filter((k) => v[k] > 0); return { q, ok: got.length === pos.length && pos.every((p) => got.includes(p)), got }; });
    out.push([`At an angle in each quadrant (37°, 127°, 217°, 307°) the positive functions are ${rows.map((r) => `Q${r.q}: ${r.got.join(', ')}`).join('; ')}: as the four quadrants print them`, rows.every((r) => r.ok)]);
    const turns = linesNamed(s, /^turn:/).map((l) => [angleAt(o, l.pts[0]), angleAt(o, l.pts[l.pts.length - 1])]);
    out.push(['Four marigold arrows, each running anticlockwise (its angle growing) inside its own quadrant: I to II to III to IV, A, S, T, C', turns.length === 4 && turns.every(([a, b], i) => { const lo = ((i * PI) / 2 + 2 * PI) % (2 * PI), A = (a + 2 * PI) % (2 * PI), B = (b + 2 * PI) % (2 * PI); return B > A && A > lo && B < lo + PI / 2; })]);
    const letters = Q35.map(({ q, letter }) => { const l = s.labels.find((x) => x.text === letter)!, cx = (l.rect[0] + l.rect[2]) / 2, cy = (l.rect[1] + l.rect[3]) / 2; return (cx > o[0]) === (q === 1 || q === 4) && (cy < o[1]) === (q <= 2); });
    out.push(['A sits in Quadrant I, S in II, T in III, C in IV', letters.every(Boolean)]);
    out.push(printed(s, ['x', 'y', 'A', 'S', 'T', 'C', 'All +', 'sin, csc +', 'tan, cot +', 'cos, sec +', 'Q I', 'Q II', 'Q III', 'Q IV', 'read anticlockwise from Q I: A - S - T - C']));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 3.6 · the 45-45-90 and 30-60-90 triangles (Topic 03, p. 204)   */
/* ===================================================================== */
const CAP36 = 'The 45-45-90 and 30-60-90 triangles, from which every standard value is read off as a side ratio.';
type Case36 = { chip: string; cap: string; kind: 45 | 30 };
/** The right angle at C, the leg up to T, the leg across to Rt; px per unit side. */
const G36 = {
  45: { C: [86, 172] as P, up: 1, across: 1, k: 140, h: 262 },
  30: { C: [62, 140] as P, up: 1, across: Math.sqrt(3), k: 112, h: 252 },
};
const verts36 = (kind: 45 | 30) => { const G = G36[kind], T: P = [G.C[0], G.C[1] - G.up * G.k], R: P = [G.C[0] + G.across * G.k, G.C[1]]; return { C: G.C, T, R }; };
const fig36: Diagram = {
  id: 'm11-03-fig-3.6',
  topic: 2,
  name: 'The two standard triangles',
  cases: [{ chip: '45-45-90', cap: CAP36, kind: 45 }, { chip: '30-60-90', cap: CAP36, kind: 30 }] as Case36[],
  draw(c: Case36) {
    const G = G36[c.kind], s = new Sketch(W, G.h), { C: Cc, T, R } = verts36(c.kind);
    path(s, [Cc, T], { w: 2.2, name: 'side:up' });
    path(s, [Cc, R], { w: 2.2, name: 'side:across' });
    path(s, [T, R], { w: 2.2, name: 'side:hyp' });
    path(s, [[Cc[0], Cc[1] - 11], [Cc[0] + 11, Cc[1] - 11], [Cc[0] + 11, Cc[1]]], { color: C.slate, w: 1.2, name: 'right angle' });
    const aT = angleAt(T, R), aR = angleAt(R, T);
    arc(s, T, 24, -PI / 2, aT, { w: 1.8, name: 'angle:T' });
    arc(s, R, 26, aR, PI, { w: 1.8, name: 'angle:R' });
    const hypMid: P = [(T[0] + R[0]) / 2, (T[1] + R[1]) / 2], nrm = [-(R[1] - T[1]), R[0] - T[0]].map((v) => -v / len(T, R)) as P;
    lab(s, Cc[0] - 12, (Cc[1] + T[1]) / 2 + 6, '1', { anchor: 'end', size: 17 });
    if (c.kind === 45) {
      lab(s, (Cc[0] + R[0]) / 2, Cc[1] + 24, '1', { size: 17 });
      lab(s, hypMid[0] + nrm[0] * 18 + 4, hypMid[1] + nrm[1] * 18, '√2', { anchor: 'start', size: 17, color: C.amber });
      const mT = -PI / 2 + (aT + PI / 2) / 2, mR = (aR + PI) / 2;
      lab(s, T[0] + 46 * Math.cos(mT), T[1] - 46 * Math.sin(mT) + 4, '45°', { size: 14 });
      lab(s, R[0] + 52 * Math.cos(mR) - 4, R[1] - 52 * Math.sin(mR) + 8, '45°', { size: 14 });
      runs(s, W / 2, 238, [{ t: 'sin 45° = cos 45° = ' }, { num: '1', den: '√2' }, { t: ',   tan 45° = 1' }], { size: 15, anchor: 'middle', tight: true });
    } else {
      lab(s, (Cc[0] + R[0]) / 2, Cc[1] + 24, '√3', { size: 17 });
      lab(s, hypMid[0] + nrm[0] * 16 + 2, hypMid[1] + nrm[1] * 16, '2', { anchor: 'start', size: 17, color: C.amber });
      const mT = -PI / 2 + (aT + PI / 2) / 2, mR = (aR + PI) / 2;
      lab(s, T[0] + 46 * Math.cos(mT), T[1] - 46 * Math.sin(mT) + 4, '60°', { size: 14 });
      lab(s, R[0] + 60 * Math.cos(mR) - 4, R[1] - 60 * Math.sin(mR) + 8, '30°', { size: 14 });
      runs(s, W / 2, 204, [{ t: 'sin 30° = ' }, { num: '1', den: '2' }, { t: ',  cos 30° = ' }, { num: '√3', den: '2' }], { size: 15, anchor: 'middle', tight: true });
      runs(s, W / 2, 238, [{ t: 'sin 60° = ' }, { num: '√3', den: '2' }, { t: ',  cos 60° = ' }, { num: '1', den: '2' }], { size: 15, anchor: 'middle', tight: true });
    }
    return s;
  },
  check(c: Case36) {
    const s = fig36.draw(c), out: Check[] = [], k = G36[c.kind].k;
    const side = (n: string) => { const [l] = linesNamed(s, new RegExp(`^side:${n}$`)); return len(l.pts[0], l.pts[1]) / k; };
    const up = side('up'), across = side('across'), hyp = side('hyp'), { C: Cc, T, R } = verts36(c.kind);
    const right = close((T[0] - Cc[0]) * (R[0] - Cc[0]) + (T[1] - Cc[1]) * (R[1] - Cc[1]), 0);
    const atR = (angleAt(R, T) - PI) * -DEG, atT = 180 - 90 - atR;
    if (c.kind === 45) {
      out.push([`Sides read back off the drawing: ${fmt(up, 4)}, ${fmt(across, 4)}, hypotenuse ${fmt(hyp, 4)} = √2 (1² + 1² = 2), right angle at the corner; the two acute angles ${fmt(atT, 2)}° and ${fmt(atR, 2)}°`, right && close(up, 1) && close(across, 1) && close(hyp, Math.SQRT2) && close(atR, 45) && close(atT, 45)]);
      out.push([`Read off as side ratios: sin 45° = cos 45° = 1/√2 = ${fmt(up / hyp, 4)}, tan 45° = 1/1 = ${fmt(up / across, 4)}`, close(up / hyp, Math.sin(PI / 4)) && close(across / hyp, Math.cos(PI / 4)) && close(up / across, 1)]);
      out.push(stacked(s, ['1/√2']));
      out.push(printed(s, ['1', '√2', '45°', 'sin 45° = cos 45° = 1/√2,   tan 45° = 1']));
    } else {
      out.push([`Sides read back off the drawing: ${fmt(up, 4)}, √3 = ${fmt(across, 4)}, hypotenuse ${fmt(hyp, 4)} = 2 (1 + 3 = 4), right angle at the corner; 30° opposite the side 1 (${fmt(atR, 2)}°) and 60° at the top (${fmt(atT, 2)}°)`, right && close(up, 1) && close(across, Math.sqrt(3)) && close(hyp, 2) && close(atR, 30) && close(atT, 60)]);
      out.push([`Read off as side ratios: sin 30° = 1/2 = ${fmt(up / hyp, 4)}, cos 30° = √3/2 = ${fmt(across / hyp, 4)}, sin 60° = √3/2, cos 60° = 1/2`, close(up / hyp, Math.sin(PI / 6)) && close(across / hyp, Math.cos(PI / 6)) && close(across / hyp, Math.sin(PI / 3)) && close(up / hyp, Math.cos(PI / 3))]);
      out.push(stacked(s, ['1/2', '√3/2', '√3/2', '1/2']));
      out.push(printed(s, ['1', '√3', '2', '60°', '30°', 'sin 30° = 1/2,  cos 30° = √3/2', 'sin 60° = √3/2,  cos 60° = 1/2']));
    }
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 3.7 · allied angles (Topic 03, p. 206)                         */
/* ===================================================================== */
const CAP37 = 'Allied angles: one point on the unit circle together with its three reflections in the axes and the origin.';
/** p. 206: drawn at θ = 30°. */
const TH37 = PI / 6;
const G37: Gr = { ox: 168, oy: 150, ux: 90, uy: 90, x: [-1.42, 1.62], y: [-1.38, 1.5] };
const PTS37 = [
  { name: 'P', at: TH37, label: `${I('P')} (${I('θ')})` },
  { name: 'P1', at: PI - TH37, label: `${I('P')}<sub>1</sub> (180° − ${I('θ')})` },
  { name: 'P2', at: PI + TH37, label: `${I('P')}<sub>2</sub> (180° + ${I('θ')})` },
  { name: 'P3', at: 2 * PI - TH37, label: `${I('P')}<sub>3</sub> (360° − ${I('θ')})` },
];
const fig37: Diagram = {
  id: 'm11-03-fig-3.7',
  topic: 2,
  name: 'Allied angles on the unit circle',
  cases: [{ chip: 'Four points', cap: CAP37 }],
  draw() {
    const s = new Sketch(W, 434), g = G37, o: P = [g.ox, g.oy];
    const at = (a: number): P => gp(g, [Math.cos(a), Math.sin(a)]), [P0, P1, P2, P3] = PTS37.map((q) => at(q.at));
    axes(s, g, { O: null, xName: [gx(g, g.x[1]) - 4, g.oy - 13, 'end'], yName: [g.ox - 10, gy(g, g.y[1]) + 9, 'end'] });
    arc(s, o, g.ux, 0, 2 * PI, { color: C.slate, w: 1.6, name: 'circle' });
    // the book's grey dashed links: P1 down to P2, P2 across to P3
    path(s, [[P1[0], P1[1] + 7], [P2[0], P2[1] - 7]], { color: C.grey, w: 1.2, dash: true, name: 'link' });
    path(s, [[P2[0] + 7, P2[1]], [P3[0] - 7, P3[1]]], { color: C.grey, w: 1.2, dash: true, name: 'link' });
    PTS37.forEach((q, i) => path(s, [o, [P0, P1, P2, P3][i]], { color: i === 0 ? C.mari : C.ink, w: 2, name: `ray:${q.name}` }));
    both(s, [P1[0] + 6, P1[1]], [P0[0] - 6, P0[1]], { name: 'reflect:y' });
    both(s, [P0[0], P0[1] + 7], [P3[0], P3[1] - 7], { name: 'reflect:x' });
    [P0, P1, P2, P3].forEach((p, i) => pt(s, p, i === 0 ? C.mari : C.ink));
    lab(s, P0[0] + 7, P0[1] - 12, PTS37[0].label, { anchor: 'start', size: 14, color: C.amber });
    lab(s, P1[0] - 5, P1[1] - 13, PTS37[1].label, { anchor: 'end', size: 13 });
    lab(s, P2[0] - 5, P2[1] + 24, PTS37[2].label, { anchor: 'end', size: 13 });
    lab(s, P3[0] + 7, P3[1] + 24, PTS37[3].label, { anchor: 'start', size: 13 });
    // the two reflections, named in a key under the circle (on the drawing their names would run through the axes)
    both(s, [16, 304], [48, 304], { name: 'key:y' });
    lab(s, 56, 308, `reflect in the ${I('y')}-axis`, { anchor: 'start', size: 12.5, color: C.slate });
    both(s, [198, 292], [198, 316], { name: 'key:x' });
    lab(s, 208, 308, `reflect in the ${I('x')}-axis`, { anchor: 'start', size: 12.5, color: C.slate });
    runs(s, W / 2, 344, [{ t: `at ${I('θ')} = 30°:  ${I('P')}(` }, { num: '√3', den: '2' }, { t: ', ' }, { num: '1', den: '2' }, { t: ');' }], { size: 12.5, anchor: 'middle', color: C.slate, tight: true });
    lab(s, W / 2, 368, `${I('P')}<sub>2</sub> is ${I('P')} reflected in the origin`, { size: 12.5, color: C.slate });
    runs(s, W / 2, 400, [{ t: 'all four have |cos| = ' }, { num: '√3', den: '2' }, { t: ', |sin| = ' }, { num: '1', den: '2' }, { t: ':' }], { size: 12.5, anchor: 'middle', color: C.slate, tight: true });
    lab(s, W / 2, 424, 'only the signs change', { size: 12.5, color: C.slate });
    return s;
  },
  check() {
    const s = fig37.draw(fig37.cases[0]), out: Check[] = [], g = G37;
    const ends = PTS37.map((q) => unPx(g, linesNamed(s, new RegExp(`^ray:${q.name}$`))[0].pts[1]));
    const degs = ends.map((p) => ((Math.atan2(p[1], p[0]) * DEG + 360) % 360));
    out.push([`The four points read back off the drawing at ${degs.map((d) => `${fmt(d, 2)}°`).join(', ')}: θ, 180° − θ, 180° + θ, 360° − θ for θ = 30°, each on the unit circle`, close(degs[0], 30) && close(degs[1], 150) && close(degs[2], 210) && close(degs[3], 330) && ends.every((p) => close(Math.hypot(p[0], p[1]), 1))]);
    const [p, p1, p2, p3] = ends;
    out.push(['P₁ = (−a, b) is P reflected in the y-axis, P₃ = (a, −b) in the x-axis, P₂ = (−a, −b) in the origin', close(p1[0], -p[0]) && close(p1[1], p[1]) && close(p3[0], p[0]) && close(p3[1], -p[1]) && close(p2[0], -p[0]) && close(p2[1], -p[1])]);
    out.push([`P = (√3/2, 1/2) = (${fmt(p[0], 4)}, ${fmt(p[1], 4)}); all four have |cos| = ${fmt(Math.abs(p[0]), 4)} and |sin| = ${fmt(Math.abs(p[1]), 4)}, only the signs differ`, close(p[0], Math.sqrt(3) / 2) && close(p[1], 0.5) && ends.every((q) => close(Math.abs(q[0]), Math.sqrt(3) / 2) && close(Math.abs(q[1]), 0.5))]);
    out.push(stacked(s, ['√3/2', '1/2', '√3/2', '1/2']));
    out.push(printed(s, ['x', 'y', 'P (θ)', 'P1 (180° − θ)', 'P2 (180° + θ)', 'P3 (360° − θ)', 'reflect in the y-axis', 'reflect in the x-axis', 'at θ = 30°:  P(√3/2, 1/2);', 'P2 is P reflected in the origin', 'all four have |cos| = √3/2, |sin| = 1/2:', 'only the signs change']));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 3.8 · the sine graph as the unit circle unrolled (Topic 04, p. 213) */
/* ===================================================================== */
const CAP38 = 'The sine graph is the unit circle unrolled: the height of the moving point plotted against the angle.';
/** p. 213: the moving point drawn at x = π/3. */
const X38 = PI / 3;
const G38 = { c: [64, 86] as P, r: 58, g: { ox: 34, oy: 262, ux: 43, uy: 58, x: [-0.1, 6.75], y: [-1.36, 1.74] } as Gr };
const fig38: Diagram = {
  id: 'm11-03-fig-3.8',
  topic: 3,
  name: 'The sine graph, unrolled',
  cases: [{ chip: 'Unrolled', cap: CAP38 }],
  draw() {
    const s = new Sketch(W, 352), { c, r, g } = G38;
    // the circle: a point at angle x, its height y
    arrow(s, [c[0] - r - 14, c[1]], [c[0] + r + 20, c[1]], { color: C.slate, w: AXIS_W, name: 'circle:axis' });
    arrow(s, [c[0], c[1] + r + 10], [c[0], c[1] - r - 18], { color: C.slate, w: AXIS_W, name: 'circle:axis' });
    arc(s, c, r, 0, 2 * PI, { color: C.slate, w: 1.6, name: 'circle' });
    const Q: P = [c[0] + r * Math.cos(X38), c[1] - r * Math.sin(X38)];
    path(s, [c, Q], { w: 2, name: 'circle:radius' });
    path(s, [[Q[0], c[1]], Q], { color: C.mari, w: 2.6, name: 'height:circle' });
    arc(s, c, 12, 0, X38, { w: 1.6, name: 'circle:angle' });
    pt(s, Q);
    lab(s, c[0] + 21, c[1] - 7, I('x'), { size: 13 });
    lab(s, Q[0] + 7, (Q[1] + c[1]) / 2 + 5, I('y'), { anchor: 'start', size: 15, color: C.amber });
    lab(s, 160, 72, `height ${I('y')} = sin ${I('x')}`, { anchor: 'start', size: 15, color: C.amber });
    // the graph
    axes(s, g, { pk: [1, 2, 3, 4], kdx: { '2': -9, '4': 8 }, yt: [1, -1], O: [g.ox - 5, g.oy + 16, 'end'], ydy: { '1': -2 }, yName: [g.ox - 10, gy(g, g.y[1]) + 8, 'end'] });
    const pts = sample(Math.sin, 0, 2 * PI, 240);
    curve(s, g, pts, { w: 2.2, name: 'curve' });
    const Y = Math.sin(X38), at = gp(g, [X38, Y]);
    path(s, [[at[0], g.oy], at], { color: C.mari, w: 2.6, name: 'height:graph' });
    path(s, [[g.ox, at[1]], [at[0] - 6, at[1]]], { color: C.mari, w: 1.6, dash: true, name: 'height:link' });
    gdot(s, g, X38, Y, C.mari);
    [[PI / 2, 1], [PI, 0], [(3 * PI) / 2, -1], [2 * PI, 0]].forEach(([x, y]) => gdot(s, g, x, y));
    path(s, [[at[0] - 3, gy(g, 1) - 4], [at[0], at[1] - 6]], { color: C.slate, w: 1, name: 'leader' });
    runs(s, at[0] - 7, gy(g, 1) - 21, [{ t: '(' }, { num: 'π', den: '3' }, { t: ', ' }, { num: '√3', den: '2' }, { t: ')' }], { size: 12, anchor: 'middle', tight: true });
    lab(s, gx(g, PI / 2) + 8, gy(g, 1) - 9, '+1', { anchor: 'start', size: 13 });
    lab(s, gx(g, (3 * PI) / 2) + 9, gy(g, -1) + 14, '−1', { anchor: 'start', size: 13 });
    return s;
  },
  check() {
    const s = fig38.draw(fig38.cases[0]), out: Check[] = [], { c, r, g } = G38;
    const [pts] = curvesBack(s, g, /^curve$/);
    out.push(['The curve read back off the drawing is y = sin x for 0 ≤ x ≤ 2π', pts.every((p) => close(p[1], Math.sin(p[0]), 1e-3)) && close(pts[0][0], 0) && close(pts[pts.length - 1][0], 2 * PI)]);
    const [hc] = linesNamed(s, /^height:circle$/), [hg] = linesNamed(s, /^height:graph$/);
    const hCircle = len(hc.pts[0], hc.pts[1]) / r, hGraph = len(hg.pts[0], hg.pts[1]) / g.uy, x = unPx(g, hg.pts[1])[0];
    out.push([`The point's height on the circle (radius 1) is ${fmt(hCircle, 4)}, and the marigold height on the graph at x = ${fmt(x, 4)} = π/3 is ${fmt(hGraph, 4)} = √3/2 = sin(π/3): the same height, unrolled`, close(hCircle, Math.sqrt(3) / 2) && close(hGraph, Math.sqrt(3) / 2) && close(x, PI / 3) && close(angleAt(c, linesNamed(s, /^circle:radius$/)[0].pts[1]), PI / 3)]);
    const dots = DOTS.get(s) ?? [];
    out.push([`Filled dots on the curve at ${dots.map((d) => `(${fmt(d.x, 3)}, ${fmt(d.y, 3)})`).join(', ')}: the point at π/3, the top +1 at π/2, the zeros at π and 2π, the bottom −1 at 3π/2`, dots.length === 5 && dots.every((d) => close(d.y, Math.sin(d.x), 1e-9)) && Math.max(...dots.map((d) => d.y)) === 1 && Math.min(...dots.map((d) => d.y)) === -1]);
    out.push(stacked(s, ['π/2', '3π/2', 'π/3', '√3/2']));
    out.push(printed(s, ['x', 'y', 'O', 'height y = sin x', 'π/2', 'π', '3π/2', '2π', '1', '−1', '+1', '(π/3, √3/2)']));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 3.9 · amplitude and period compared (Topic 04, p. 215)         */
/* ===================================================================== */
const CAP39 = 'Amplitude and period compared: <i>y</i> = sin <i>x</i>, <i>y</i> = 2 sin <i>x</i> and <i>y</i> = sin 2<i>x</i> on one pair of axes.';
const CURVES39 = [
  { name: 'sin x', f: (x: number) => Math.sin(x), legend: `${I('y')} = sin ${I('x')}`, note: '', style: { color: C.ink, w: 2.2 } as Stroke },
  { name: '2 sin x', f: (x: number) => 2 * Math.sin(x), legend: `${I('y')} = 2 sin ${I('x')}`, note: '(amplitude 2)', style: { color: C.mari, w: 2.2, dash: true } as Stroke },
  { name: 'sin 2x', f: (x: number) => Math.sin(2 * x), legend: `${I('y')} = sin 2${I('x')}`, note: '(period π)', style: { color: C.slate, w: 2.4, dots: true } as Stroke },
];
const G39: Gr = { ox: 36, oy: 104, ux: 43, uy: 36, x: [-0.1, 6.75], y: [-2.4, 2.45] };
const fig39: Diagram = {
  id: 'm11-03-fig-3.9',
  topic: 3,
  name: 'Amplitude and period compared',
  cases: [{ chip: 'Three curves', cap: CAP39 }],
  draw() {
    const s = new Sketch(W, 304), g = G39;
    axes(s, g, { pk: [1, 2, 3, 4], row: gy(g, g.y[0]) + 20, guides: true, yt: [2, 1, -1, -2], O: [g.ox - 5, g.oy + 16, 'end'] });
    CURVES39.forEach((c) => curve(s, g, sample(c.f, 0, 2 * PI, 300), { ...c.style, name: `curve:${c.name}` }));
    // the legend, under the graph
    CURVES39.forEach((c, i) => {
      const y = 236 + i * 26;
      path(s, [[40, y - 4], [72, y - 4]], { ...c.style, name: 'legend' });
      lab(s, 82, y, c.legend, { anchor: 'start', size: 14 });
      if (c.note) lab(s, 184, y, c.note, { anchor: 'start', size: 13.5, color: c.style.color === C.mari ? C.amber : C.slate });
    });
    return s;
  },
  check() {
    const s = fig39.draw(fig39.cases[0]), out: Check[] = [], g = G39;
    const back = CURVES39.map((c) => curvesBack(s, g, new RegExp(`^curve:${c.name}$`))[0]);
    out.push(['Each curve read back off the drawing is its equation, y = sin x, 2 sin x and sin 2x, for 0 ≤ x ≤ 2π', back.every((pts, i) => pts.every((p) => close(p[1], CURVES39[i].f(p[0]), 1e-3)) && close(pts[pts.length - 1][0], 2 * PI))]);
    const amp = (pts: P[]) => Math.max(...pts.map((p) => Math.abs(p[1])));
    out.push([`Amplitudes from the drawn curves: ${back.map((p) => fmt(amp(p), 3)).join(', ')}; y = 2 sin x reaches 2, the other two 1`, close(amp(back[0]), 1, 1e-3) && close(amp(back[1]), 2, 1e-3) && close(amp(back[2]), 1, 1e-3)]);
    const shift = (pts: P[], T: number, f: (x: number) => number) => pts.filter((p) => p[0] + T <= 2 * PI).every((p) => close(f(p[0] + T), p[1], 1e-3));
    out.push(['Periods: y = sin 2x repeats after π (2π/2), so it runs two full waves in 0 to 2π; sin x and 2 sin x repeat only after 2π (not after π)', shift(back[2], PI, CURVES39[2].f) && !shift(back[0], PI, CURVES39[0].f) && !shift(back[1], PI, CURVES39[1].f)]);
    out.push(['Three different strokes, as the book tells them apart: solid, dashed (marigold, the highlight), dotted', linesNamed(s, /^legend$/).length === 3]);
    out.push(stacked(s, ['π/2', '3π/2']));
    out.push(printed(s, ['x', 'y', 'O', 'π/2', 'π', '3π/2', '2π', '1', '2', '−1', '−2', 'y = sin x', 'y = 2 sin x', '(amplitude 2)', 'y = sin 2x', '(period π)']));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 3.10 · the cosine graph over two periods (Topic 04, p. 218)    */
/* ===================================================================== */
const CAP310 = 'The cosine graph over two full periods, showing its even symmetry and its repetition every full turn.';
/** p. 218: the dashed mirror pair drawn at x = ±π/3 (cos = 1/2). */
const X310 = PI / 3;
const G310: Gr = { ox: 168, oy: 132, ux: 23.2, uy: 50, x: [-6.75, 6.75], y: [-1.42, 1.75] };
const fig310: Diagram = {
  id: 'm11-03-fig-3.10',
  topic: 3,
  name: 'The cosine graph',
  cases: [{ chip: 'Two periods', cap: CAP310 }],
  draw() {
    const s = new Sketch(W, 260), g = G310, bottom = gy(g, g.y[0]);
    axes(s, g, { pk: [-4, -3, -2, -1, 1, 2, 3, 4], row: bottom + 22, yt: [1, -1], ydx: { '1': -10 }, O: [g.ox, bottom + 22, 'middle'], xName: [gx(g, g.x[1]) - 2, g.oy - 12, 'start'], yName: [g.ox - 10, gy(g, g.y[1]) + 8, 'end'] });
    const top = 18;
    both(s, [g.ox, top + 14], [gx(g, 2 * PI), top + 14], { name: 'period' });
    lab(s, gx(g, PI), top + 4, 'one period = 2π', { size: 13.5, color: C.slate });
    curve(s, g, sample(Math.cos, -2 * PI, 2 * PI, 400), { w: 2.2, name: 'curve' });
    // even: the mirror pair at ±π/3, dashed, and (0, 1) on the mirror line: the highlight
    const yv = Math.cos(X310);
    path(s, [[gx(g, -X310) + 6, gy(g, yv)], [gx(g, X310) - 6, gy(g, yv)]], { color: C.mari, w: 1.8, dash: true, name: 'mirror' });
    gdot(s, g, -X310, yv, C.mari); gdot(s, g, X310, yv, C.mari); gdot(s, g, 0, 1, C.mari);
    [-3, -1, 1, 3].forEach((k) => gdot(s, g, (k * PI) / 2, 0));
    gdot(s, g, PI, -1);
    lab(s, g.ox + 9, gy(g, 1) - 9, '(0, 1)', { anchor: 'start', size: 13, color: C.amber });
    lab(s, gx(g, PI) + 9, gy(g, -1) + 15, '(π, −1)', { anchor: 'start', size: 13 });
    lab(s, W / 2, bottom + 54, `even: cos(−${I('x')}) = cos ${I('x')} (mirror in the ${I('y')}-axis)`, { size: 13.5, color: C.slate });
    return s;
  },
  check() {
    const s = fig310.draw(fig310.cases[0]), out: Check[] = [], g = G310, [pts] = curvesBack(s, g, /^curve$/);
    out.push(['The curve read back off the drawing is y = cos x for −2π ≤ x ≤ 2π: two full periods', pts.every((p) => close(p[1], Math.cos(p[0]), 1e-3)) && close(pts[0][0], -2 * PI) && close(pts[pts.length - 1][0], 2 * PI)]);
    const ys = new Map(pts.map((p) => [Math.round(p[0] * 1000), p[1]]));
    out.push(['Even: each drawn point (x, y) has its mirror (−x, y) on the drawn curve, so cos(−x) = cos x', pts.every((p) => { const m = ys.get(Math.round(-p[0] * 1000)); return m === undefined || close(m, p[1], 1e-3); }) && pts.filter((p) => ys.has(Math.round(-p[0] * 1000))).length > 300]);
    out.push(['One period = 2π: the drawn curve on [−2π, 0] is the curve on [0, 2π] moved back 2π', pts.filter((p) => p[0] <= 0).every((p) => close(Math.cos(p[0] + 2 * PI), p[1], 1e-3))]);
    const [pr] = linesNamed(s, /^period$/), [m] = linesNamed(s, /^mirror$/);
    out.push([`The period arrow runs from x = ${fmt(unPx(g, pr.pts[0])[0], 3)} to ${fmt(unPx(g, pr.pts[1])[0], 3)} = 2π; the dashed mirror pair at x = ±π/3 sits at height ${fmt(unPx(g, m.pts[0])[1], 4)} = cos(π/3) on both sides`, close(unPx(g, pr.pts[0])[0], 0) && close(unPx(g, pr.pts[1])[0], 2 * PI) && close(unPx(g, m.pts[0])[1], 0.5) && close(m.pts[0][1], m.pts[1][1])]);
    const dots = DOTS.get(s) ?? [];
    out.push([`Filled dots on the curve: (0, 1) and the pair at ±π/3 in marigold, the zeros at ±π/2 and ±3π/2, and (π, −1)`, dots.length === 8 && dots.every((d) => close(d.y, Math.cos(d.x), 1e-9))]);
    out.push(stacked(s, ['3π/2', 'π/2', 'π/2', '3π/2']));
    out.push(printed(s, ['x', 'y', 'O', '−2π', '−3π/2', '−π', '−π/2', 'π/2', 'π', '3π/2', '2π', '1', '−1', 'one period = 2π', '(0, 1)', '(π, −1)', 'even: cos(−x) = cos x (mirror in the y-axis)']));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 3.11 · the tangent graph (Topic 04, p. 218)                    */
/* ===================================================================== */
const CAP311 = 'The tangent graph: three increasing branches, vertical asymptotes, and a period of half a turn.';
const G311: Gr = { ox: 170, oy: 206, ux: 29.5, uy: 27, x: [-5.1, 5.35], y: [-4.75, 4.75] };
const YMAX311 = 4.45;
const fig311: Diagram = {
  id: 'm11-03-fig-3.11',
  topic: 3,
  name: 'The tangent graph',
  cases: [{ chip: 'Three branches', cap: CAP311 }],
  draw() {
    const s = new Sketch(W, 372), g = G311, top = gy(g, YMAX311 + 0.2), bottom = gy(g, -YMAX311 - 0.2);
    axes(s, g, { pk: [-3, -2, -1, 1, 2, 3], row: bottom + 22, yt: [3, 1, -1, -3], yRight: [-1, -3], O: [g.ox + 7, g.oy + 16, 'start'], xName: [gx(g, g.x[1]) - 4, g.oy - 13, 'end'], yName: [g.ox - 10, gy(g, g.y[1]) + 8, 'end'] });
    // the asymptotes x = ±π/2, ±3π/2, dashed: the highlight
    [-3, -1, 1, 3].forEach((k) => { const x = gx(g, (k * PI) / 2); s.line(x, top, x, bottom, { color: C.mari, w: 1.6, dash: true }); keep(s, [[x, top], [x, bottom]], `asymptote:${k}`); });
    // three branches, each between two asymptotes, cut where |tan x| reaches the frame
    const cut = Math.atan(YMAX311);
    [-1, 0, 1].forEach((n) => curve(s, g, sample((x) => Math.tan(x), n * PI - cut, n * PI + cut, 200), { w: 2.2, name: `curve:${n}` }));
    gdot(s, g, 0, 0);
    runs(s, 8, 24, [{ t: `dashed: asymptotes at ${I('x')} = ±` }, { num: 'π', den: '2' }, { t: ',  ±' }, { num: '3π', den: '2' }], { size: 13, anchor: 'start', color: C.amber, tight: true });
    both(s, [g.ox, top - 8], [gx(g, PI), top - 8], { name: 'period' });
    lab(s, gx(g, PI / 2), top - 18, 'period = π', { size: 13.5, color: C.slate });
    return s;
  },
  check() {
    const s = fig311.draw(fig311.cases[0]), out: Check[] = [], g = G311;
    const br = [-1, 0, 1].map((n) => curvesBack(s, g, new RegExp(`^curve:${n}$`))[0]);
    out.push([`Three branches, each read back off the drawing as y = tan x, and each increasing from left to right (${br.map((b) => `${fmt(b[0][1], 2)} to ${fmt(b[b.length - 1][1], 2)}`).join('; ')})`, br.length === 3 && br.every((b) => b.every((p) => close(p[1], Math.tan(p[0]), 1e-3)) && b.every((p, i) => i === 0 || p[1] > b[i - 1][1]))]);
    const asy = linesNamed(s, /^asymptote:/).map((l) => unPx(g, l.pts[0])[0]);
    out.push([`Dashed asymptotes at x = ${asy.map((a) => fmt(a / PI, 3) + 'π').join(', ')}, where cos x = 0 and tan x is undefined; each branch lies wholly between two of them`, asy.length === 4 && [-1.5, -0.5, 0.5, 1.5].every((k, i) => close(asy[i], k * PI)) && asy.every((a) => close(Math.cos(a), 0)) && br.every((b, i) => b.every((p) => p[0] > asy[i] && p[0] < asy[i + 1]))]);
    out.push(['Period π: each branch is the one before it moved right by π (tan(x + π) = tan x)', br.slice(1).every((b, i) => b.every((p, j) => close(p[0] - br[i][j][0], PI) && close(p[1], br[i][j][1], 1e-6)))]);
    const [pr] = linesNamed(s, /^period$/);
    out.push([`The period arrow runs from 0 to ${fmt(unPx(g, pr.pts[1])[0] / PI, 3)}π; tan 0 = 0 is the filled dot at O`, close(unPx(g, pr.pts[0])[0], 0) && close(unPx(g, pr.pts[1])[0], PI) && (DOTS.get(s) ?? []).length === 1 && Math.tan(0) === 0]);
    out.push(stacked(s, ['3π/2', 'π/2', 'π/2', '3π/2', 'π/2', '3π/2']));
    out.push(printed(s, ['x', 'y', 'O', '−3π/2', '−π', '−π/2', 'π/2', 'π', '3π/2', '3', '1', '−1', '−3', 'dashed: asymptotes at x = ±π/2,  ±3π/2', 'period = π']));
    out.push(...layout(s));
    return out;
  },
};

/** Chapter 3 drawings, Figures 3.1–3.11 (Topics 01–04); joined in mathematics-11-03.ts. */
export const DIAGRAMS_A: Diagram[] = [fig31, fig32, fig33, fig34, fig35, fig36, fig37, fig38, fig39, fig310, fig311];
