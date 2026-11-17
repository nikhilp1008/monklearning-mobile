import { C, LABEL_GAP, Rect, Sketch, mathW, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';
import { stixW } from '@/lib/diagrams/mathematics-11-03b';

/**
 * MATHEMATICS CLASS 12, CHAPTER 5 (Continuity and Differentiability): Figure 5.1 of the Master Reference book
 * (October 2026 snapshot, math12.pdf, PDF page = bottom folio), redrawn. The figure stands on its own "CHAPTER 5 ·
 * FIGURES" plate, the page after its caption. The chapter has no Topic 00, so Topic 01 is index 0.
 *
 *   Figure 5.1 (p. 312; caption p. 311): Topic 01, index 0 (the JEE Main worked example on x² and 3x − 2 at x = 2).
 *
 * ONE HIGHLIGHT. The book's orange is the marigold: the outgoing line y = 3x − 2 and its two labels (amber). The
 * book's navy is ink, its grey slate; the grid is the faintest grey, broken round every label.
 *
 * NO EM DASH. The italic note "different slopes — the graph has a corner" → "different slopes: the graph has a
 * corner"; the caption's "is 3 — a corner: continuous" → "is 3: a corner, continuous".
 *
 * The lines, labels, stacked fractions, hatching, dots, graphs and layout checks below are those of
 * mathematics-12-02.ts (from mathematics-11-14.ts), copied because that file exports none of them; Chapter 6's
 * figures (mathematics-12-06.ts) use them from here.
 */

export const W = 340;
export type P = [number, number];
export const PI = Math.PI;
export const DEG = PI / 180;
export const fmt = (n: number, d = 2) => String(+n.toFixed(d)).replace('-', '−');
export const len = (a: P, b: P) => Math.hypot(b[0] - a[0], b[1] - a[1]);
export const plain = (html: string) => html.replace(/<\/?(?:i|sub|sup|b|frac|num|den)>/g, '');
export const widthOf = (html: string, size: number) => Math.max(mathW(html, size), plain(html).length * size * 0.5);
export const I = (t: string) => `<i>${t}</i>`;
export const close = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) < tol;
export const fr = (n: string, d: string) => `<frac><num>${n}</num><den>${d}</den></frac>`;

/* ---------- lines, labels and the layout checks (as in mathematics-12-02.ts) ---------- */
export type Stroke = { color?: string; w?: number; dash?: boolean | string; name?: string; free?: boolean };
const LINES = new WeakMap<Sketch, { name: string; pts: P[] }[]>();
export const keep = (s: Sketch, pts: P[], name = '') => { const l = LINES.get(s) ?? []; l.push({ name, pts }); LINES.set(s, l); };
export const linesNamed = (s: Sketch, re: RegExp) => (LINES.get(s) ?? []).filter((l) => re.test(l.name));
const dashAttr = (d: Stroke['dash']) => (d === true ? ' stroke-dasharray="5 4"' : d ? ` stroke-dasharray="${d}"` : '');
/** A polyline; `free` leaves it out of the clearance check. */
export function path(s: Sketch, pts: P[], o: Stroke = {}) {
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ');
  s.add(`<path d="${d}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}" stroke-linejoin="round" stroke-linecap="round"${dashAttr(o.dash)}/>`);
  if (!o.free) keep(s, pts, o.name);
}
/** An outlined rectangle, never filled. */
export function box(s: Sketch, x0: number, y0: number, x1: number, y1: number, o: Stroke & { rx?: number } = {}) {
  s.add(`<rect x="${r1(x0)}" y="${r1(y0)}" width="${r1(x1 - x0)}" height="${r1(y1 - y0)}" rx="${o.rx ?? 0}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.5}"${dashAttr(o.dash)}/>`);
  keep(s, [[x0, y0], [x1, y0], [x1, y1], [x0, y1], [x0, y0]], o.name ?? 'box');
}
/** A circle, kept as a fine polygon for the clearance check. */
export function circle(s: Sketch, c: P, r: number, o: Stroke = {}) {
  s.add(`<circle cx="${r1(c[0])}" cy="${r1(c[1])}" r="${r1(r)}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}"${dashAttr(o.dash)}/>`);
  keep(s, Array.from({ length: 241 }, (_, i): P => [c[0] + r * Math.cos((2 * PI * i) / 240), c[1] + r * Math.sin((2 * PI * i) / 240)]), o.name ?? 'circle');
}
/** A filled arrowhead at `tip`, pointing along angle `ang`. */
export function head(s: Sketch, tip: P, ang: number, col: string, L = 7) {
  const ux = Math.cos(ang), uy = Math.sin(ang), hw = L * 0.5, bx = tip[0] - L * ux, by = tip[1] - L * uy;
  s.add(`<path d="M${r1(tip[0])} ${r1(tip[1])} L${r1(bx + hw * uy)} ${r1(by - hw * ux)} L${r1(bx - hw * uy)} ${r1(by + hw * ux)} Z" fill="${col}"/>`);
}
/** An arrow with a small filled head at b (and at a too if `both`). */
export function arr(s: Sketch, a: P, b: P, o: Stroke & { head?: number; both?: boolean } = {}) {
  const col = o.color ?? C.ink, L = Math.min(o.head ?? 7, len(a, b) / 1.6), ang = Math.atan2(b[1] - a[1], b[0] - a[0]);
  const b2: P = [b[0] - L * Math.cos(ang) * 0.8, b[1] - L * Math.sin(ang) * 0.8];
  const a2: P = o.both ? [a[0] + L * Math.cos(ang) * 0.8, a[1] + L * Math.sin(ang) * 0.8] : a;
  s.add(`<line x1="${r1(a2[0])}" y1="${r1(a2[1])}" x2="${r1(b2[0])}" y2="${r1(b2[1])}" stroke="${col}" stroke-width="${o.w ?? 1.4}" stroke-linecap="round"${dashAttr(o.dash)}/>`);
  head(s, b, ang, col, L);
  if (o.both) head(s, a, ang + PI, col, L);
  if (!o.free) keep(s, [a, b], o.name ?? 'arrow');
}
/** A polyline drawn in pieces, broken wherever it comes within `gap` of a rect in `avoid` (a label on a grid line). */
export function brokenPath(s: Sketch, pts: P[], avoid: Rect[], gap: number, o: Stroke = {}) {
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
export const rectDist = (r: Rect, p: P) => Math.hypot(Math.max(r[0] - p[0], 0, p[0] - r[2]), Math.max(r[1] - p[1], 0, p[1] - r[3]));
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
/** Distance from p to every kept line except the hatching. */
const toLines = (s: Sketch, p: P) => Math.min(Infinity, ...(LINES.get(s) ?? []).filter((l) => !/^hatch/.test(l.name)).map((l) => toPoly(p, l.pts)));
function crowded(s: Sketch): string[] {
  const out: string[] = [];
  for (const { pts, name: ln } of LINES.get(s) ?? []) for (const l of s.labels) { const d = boxToLine(l.rect, pts); if (d < LABEL_GAP - 1e-9) out.push(`"${l.text}" ${fmt(d, 1)} px from the ${ln || 'line'}`); }
  return [...new Set(out)];
}
const clearCheck = (s: Sketch): Check => {
  const bad = crowded(s);
  return [`Every label stays at least ${LABEL_GAP} px clear of every line, curve, outline, dot and hatch stroke${bad.length ? `: ${bad.join('; ')}` : ''}`, bad.length === 0];
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
const linesInFrame = (s: Sketch): Check => {
  const out = (LINES.get(s) ?? []).filter((l) => l.pts.some((p) => p[0] < -0.5 || p[0] > s.w + 0.5 || p[1] < -0.5 || p[1] > s.h + 0.5)).map((l) => l.name);
  return [`Every line lies inside the frame${out.length ? `: not ${[...new Set(out)].join(', ')}` : ''}`, out.length === 0];
};
export const layout = (s: Sketch): Check[] => [clearCheck(s), labelsApart(s), inFrame(s), linesInFrame(s)];
const hasLabel = (s: Sketch, t: string) => s.labels.some((l) => l.text === t);
export const labelsCheck = (s: Sketch, ts: string[], what = 'The labels as printed'): Check => {
  const miss = ts.filter((t) => !hasLabel(s, t));
  return [`${what}: ${ts.join(' · ')}${miss.length ? `; missing ${miss.join(', ')}` : ''}`, miss.length === 0];
};
/**
 * No em dash, no vulgar-fraction character, no slash fraction and no ASCII hyphen-minus in anything the drawing
 * shows. A unit's slash (m/s, cm³/s, as the chapter's text writes them) is a unit, not a fraction.
 */
export const noBadChars = (s: Sketch, d: Diagram): Check => {
  const unraised = (h: string) => plain(h.replace(/<sup>.*?<\/sup>/g, '').replace(/<frac>.*?<\/frac>/g, '')).replace(/\b(c?m)\/s\b/g, '$1 per s');
  const all = [...s.texts.map((t) => unraised(t.html)), d.name, ...d.cases.flatMap((c) => [c.chip, unraised(c.cap)])].join(' ');
  const maths = [...s.texts.map((t) => t.html), ...d.cases.map((c) => c.cap)].join(' ');
  return ['No em dash, no vulgar-fraction character, no slash fraction (a unit’s m/s aside), and every minus a true minus (−) in the labels, name, chips or captions', !/[—¼-¾⅐-⅞]/.test(all) && !/[\w)!π]\s*\/\s*[\w(π√]/.test(all) && !/(^|[\s([,])-(?=[\dπθx])/.test(plain(maths))];
};
/** Marigold is the one highlight: every marigold stroke in the drawing belongs to the named lines. */
export const onlyMarigold = (s: Sketch, what: string, count: number): Check => {
  const svg = s.svg(false), n = (svg.match(new RegExp(`(stroke|fill)="${C.mari}"`, 'g')) ?? []).length;
  return [`Marigold (the book's orange) is used on ${what} only (${n} marigold marks drawn)`, n === count];
};

/** A line of STIX on the drawing, from its baseline, its box at its true width. */
export function lab(s: Sketch, x: number, y: number, html: string, o: { size?: number; anchor?: 'start' | 'middle' | 'end'; color?: string; bold?: boolean } = {}): Rect {
  const size = o.size ?? 13, anchor = o.anchor ?? 'middle', w = widthOf(html, size) * (o.bold ? 1.08 : 1);
  const x0 = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w : x;
  const rect: Rect = [x0, y - size * (html.includes('<sup>') ? 0.85 : 0.72), x0 + w, y + size * (html.includes('<sub>') ? 0.36 : 0.22)];
  s.labels.push({ text: plain(html), rect });
  s.text(x, y, html, { size, anchor, color: o.color ?? C.text, semibold: o.bold });
  return rect;
}
/**
 * The dot of a time derivative (ẋ, ẏ), drawn by hand over the italic letter that starts a start-anchored label at
 * x0: STIX's combining dot (U+0307) is not set reliably over an italic letter on Android.
 */
export function dotOver(s: Sketch, x0: number, y: number, size: number, color: string, k = 0.31) {
  s.add(`<circle cx="${r1(x0 + size * k)}" cy="${r1(y - size * 0.66)}" r="${r1(size * 0.085)}" fill="${color}"/>`);
}

/* ---------- labels of several runs: text and stacked fractions (as in mathematics-12-02.ts) ---------- */
export type Piece = { t: string } | { num: string; den: string };
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
const pieceW = (p: Piece, size: number) => ('t' in p ? stixW(p.t, size) : fracW(p.num, p.den, size) + 2);
const pieceText = (p: Piece) => ('t' in p ? plain(p.t) : `${plain(p.num)}/${plain(p.den)}`);
function textRun(s: Sketch, at: number, w: number, y: number, t: string, size: number, color: string, leads: boolean) {
  const lead = /^ */.exec(plain(t))![0].length, trail = / *$/.exec(plain(t))![0].length, sp = stixW(' ', size), body = t.replace(/^((?:<[^>]+>)*) +/, '$1').replace(/ +((?:<\/[^>]+>)*)$/, '$1');
  if (leads) s.text(at + w - trail * sp, y, body, { size, anchor: 'end', color });
  else s.text(at + lead * sp, y, body, { size, anchor: 'start', color });
}
/** One label made of runs, its fractions' rules on the maths axis. Registered as ONE label. */
export function runs(s: Sketch, x: number, y: number, parts: Piece[], o: { size?: number; anchor?: 'start' | 'middle' | 'end'; color?: string } = {}): Rect {
  const size = o.size ?? 13, color = o.color ?? C.text, ws = parts.map((p) => pieceW(p, size)), total = ws.reduce((a, b) => a + b, 0);
  let at = o.anchor === 'middle' ? x - total / 2 : o.anchor === 'end' ? x - total : x;
  const sup = parts.some((p) => 't' in p && p.t.includes('<sup>'));
  const bx: Rect = [at, y - size * (sup ? 0.85 : 0.72), at + total, y + size * 0.22];
  const grow = (r: Rect) => { bx[1] = Math.min(bx[1], r[1]); bx[3] = Math.max(bx[3], r[3]); };
  parts.forEach((p, i) => {
    if ('t' in p) textRun(s, at, ws[i], y, p.t, size, color, i < parts.length - 1);
    else grow(frac(s, at + ws[i] / 2, y - size * 0.27, p.num, p.den, size, color));
    at += ws[i];
  });
  s.labels.push({ text: parts.map(pieceText).join(''), rect: bx });
  return bx;
}
/** Every stacked fraction really is stacked: numerator above the rule, denominator below, the rule as wide as both. */
export const stackedCheck = (s: Sketch, want: string[]): Check => {
  const f = FRACS.get(s) ?? [], got = f.map((q) => `${plain(q.num)}/${plain(q.den)}`);
  const ok = f.every((q) => q.numY < q.rule[2] && q.denY - 6 > q.rule[2] && q.rule[1] - q.rule[0] >= Math.max(q.numW, q.denW)) && want.length === got.length && want.every((w) => got.includes(w)) && got.every((g) => want.includes(g));
  return [`Every fraction on the drawing is stacked by hand (${f.length}${f.length ? `: ${[...new Set(got)].join(', ')}` : ''}), numerator over the rule over denominator`, ok];
};

/* ---------- hatching: the book's tinted regions, as grey lines (Class 11 Fig 3.3) ---------- */
const HATCH = new WeakMap<Sketch, { name: string; segs: [P, P][] }[]>();
/** Hatching at 45° over every point `inside` says is shaded, clear of every label and (by `clear` px) every line drawn so far. */
export function hatch(s: Sketch, name: string, inside: (p: P) => boolean, bx: Rect, o: { step?: number; clear?: number; color?: string } = {}): [P, P][] {
  const step = (o.step ?? 6) * Math.SQRT2, gap = LABEL_GAP + 1, avoid = s.labels.map((l) => l.rect), clr = o.clear ?? 3.5;
  const ok = (p: P) => inside(p) && avoid.every((r) => rectDist(r, p) >= gap) && toLines(s, p) >= clr;
  const segs: [P, P][] = [];
  for (let k = bx[0] + bx[1] + step / 2; k <= bx[2] + bx[3]; k += step) {
    const xa = Math.max(bx[0], k - bx[3]), xb = Math.min(bx[2], k - bx[1]);
    let a: P | null = null, b: P | null = null;
    const end = () => { if (a && b && len(a, b) >= 3) segs.push([a, b]); a = null; };
    for (let x = xa; x <= xb + 1e-9; x += 0.5) {
      const p: P = [x, k - x];
      if (ok(p)) { if (!a) a = p; b = p; } else end();
    }
    end();
  }
  s.add(`<path d="${segs.map(([a, b]) => `M${r1(a[0])} ${r1(a[1])} L${r1(b[0])} ${r1(b[1])}`).join(' ')}" fill="none" stroke="${o.color ?? C.grey}" stroke-width="1" stroke-linecap="round"/>`);
  segs.forEach((sg) => keep(s, sg, `hatch:${name}`));
  HATCH.set(s, [...(HATCH.get(s) ?? []), { name, segs }]);
  return segs;
}
export const hatchOf = (s: Sketch, name: string) => (HATCH.get(s) ?? []).filter((h) => h.name === name).flatMap((h) => h.segs);
export const allIn = (segs: [P, P][], test: (p: P) => boolean) => segs.every(([a, b]) => test(a) && test(b) && test([(a[0] + b[0]) / 2, (a[1] + b[1]) / 2]));

/* ---------- dots and graphs ---------- */
type Dot = { p: P; name: string; color: string };
const DOTS = new WeakMap<Sketch, Dot[]>();
export const DOT_R = 3.6;
/** A filled dot (a point on a graph or a line). */
export function pt(s: Sketch, p: P, name: string, col: string = C.ink, r = DOT_R) {
  s.dot(p[0], p[1], r, col);
  keep(s, Array.from({ length: 25 }, (_, i): P => [p[0] + (r + 1) * Math.cos((2 * PI * i) / 24), p[1] + (r + 1) * Math.sin((2 * PI * i) / 24)]), `dot:${name}`);
  DOTS.set(s, [...(DOTS.get(s) ?? []), { p, name, color: col }]);
}
export const dotNamed = (s: Sketch, name: string) => (DOTS.get(s) ?? []).find((d) => d.name === name);
export type Gr = { ox: number; oy: number; ux: number; uy: number };
export const gx = (g: Gr, v: number) => g.ox + v * g.ux;
export const gy = (g: Gr, v: number) => g.oy - v * g.uy;
export const gp = (g: Gr, p: P): P => [gx(g, p[0]), gy(g, p[1])];
export const unPx = (g: Gr, p: P): P => [(p[0] - g.ox) / g.ux, (g.oy - p[1]) / g.uy];
export const tick = (s: Sketch, x: number, y: number, vertical = true, k = 4) => {
  if (vertical) path(s, [[x, y - k], [x, y + k]], { color: C.slate, w: 1.1, name: 'tick' });
  else path(s, [[x - k, y], [x + k, y]], { color: C.slate, w: 1.1, name: 'tick' });
};
export const sample = (f: (x: number) => number, a: number, b: number, n = 200): P[] => Array.from({ length: n + 1 }, (_, i) => { const x = a + ((b - a) * i) / n; return [x, f(x)]; });
export const curve = (s: Sketch, g: Gr, pts: P[], o: Stroke = {}) => path(s, pts.map((p) => gp(g, p)), { color: o.color ?? C.ink, w: o.w ?? 2.2, dash: o.dash, name: o.name ?? 'curve' });
export const curveBack = (s: Sketch, g: Gr, name: string) => linesNamed(s, new RegExp(`^${name}$`)).map((l) => l.pts.map((p) => unPx(g, p)))[0] ?? [];
export const onCurve = (pts: P[], f: (x: number) => number, tol = 2e-3) => pts.length > 1 && pts.every((p) => close(p[1], f(p[0]), tol));
/** A point at `r` from c, at `deg` degrees anticlockwise from the +x direction (screen y runs down). */
export const pol = (c: P, r: number, deg: number): P => [c[0] + r * Math.cos(deg * DEG), c[1] - r * Math.sin(deg * DEG)];
export const arcPts = (c: P, r: number, a0: number, a1: number, n = 48): P[] => Array.from({ length: n + 1 }, (_, i) => pol(c, r, a0 + ((a1 - a0) * i) / n));
/** Axes with arrowheads at the positive ends, slate. */
export function axes(s: Sketch, g: Gr, x0: number, x1: number, y0: number, y1: number) {
  arr(s, [gx(g, x0), g.oy], [gx(g, x1), g.oy], { color: C.ink, w: 1.3, name: 'axis:x' });
  arr(s, [g.ox, gy(g, y0)], [g.ox, gy(g, y1)], { color: C.ink, w: 1.3, name: 'axis:y' });
}
/** A tick label's value as printed: "2", "0.5", "1.0", "−1". */
export const tickText = (v: number, d = 0) => (v < 0 ? '−' : '') + Math.abs(v).toFixed(d);

/* ===================================================================== */
/* Figure 5.1 · a corner at x = 2 (Topic 01, p. 312)                     */
/* ===================================================================== */
const X = I('x'), Y = I('y');
const CAP51 = `Graph of ${I('f')}(${X}): the parabola ${Y} = ${X}<sup>2</sup> for ${X} ≤ 2 meets the line ${Y} = 3${X} − 2 for ${X} > 2 at the point (2, 4). The incoming slope is 4 and the outgoing slope is 3: a corner, continuous at ${X} = 2, but not differentiable.`;
const G51: Gr = { ox: 46, oy: 262, ux: 72, uy: 28 };
/** The function of the worked example: x² up to 2, 3x − 2 after. */
const f51 = (x: number) => (x <= 2 ? x * x : 3 * x - 2);
/** Where the outgoing line leaves the top of the plot (y = 8.6, as printed). */
const XEND51 = (8.6 + 2) / 3;
const fig51: Diagram = {
  id: 'm12-05-fig-5.1',
  topic: 0,
  name: 'A corner: continuous, not differentiable',
  cases: [{ chip: 'Corner at x = 2', cap: CAP51 }],
  draw() {
    const s = new Sketch(W, 338), g = G51, P2 = gp(g, [2, 4]);
    axes(s, g, -0.35, 3.72, -1, 9.05);
    lab(s, gx(g, 3.72) + 6, g.oy + 5, X, { size: 15, anchor: 'start' });
    lab(s, g.ox + 7, gy(g, 9.05) + 6, Y, { size: 15, anchor: 'start' });
    [2, 4, 6, 8].forEach((v) => { tick(s, g.ox, gy(g, v), false); lab(s, g.ox - 9, gy(g, v) + 4, String(v), { size: 11.5, anchor: 'end', color: C.slate }); });
    [1, 2, 3].forEach((v) => { tick(s, gx(g, v), g.oy); lab(s, gx(g, v), g.oy + 18, String(v), { size: 11.5, color: C.slate }); });
    // the two pieces: x² (ink) up to (2, 4), 3x − 2 (marigold, the book's orange) after; the slope-4 tangent dashed
    curve(s, g, [...Array.from({ length: 121 }, (_, i): P => { const x = (2 * i) / 120; return [x, x * x]; })], { color: C.ink, w: 2.6, name: 'curve:parabola' });
    curve(s, g, [[2, 4], [XEND51, 3 * XEND51 - 2]], { color: C.mari, w: 2.8, name: 'curve:line' });
    curve(s, g, [[1.15, 4 * 1.15 - 4], [2.27, 4 * 2.27 - 4]], { color: C.slate, w: 1.5, dash: '6 5', name: 'tangent' });
    pt(s, P2, 'join', C.ink, 4.2);
    // the labels, as printed
    lab(s, gx(g, 1.65), gy(g, 7.0), 'incoming slope 4', { size: 12, color: C.slate });
    lab(s, gx(g, 1.65), gy(g, 6.35), `(tangent to ${Y} = ${X}<sup>2</sup>)`, { size: 12, color: C.slate });
    lab(s, P2[0] - 10, P2[1] - 14, '(2, 4)', { size: 13, anchor: 'end' });
    lab(s, gx(g, 1.52), gy(g, 3.3), `${Y} = ${X}<sup>2</sup>  (${X} ≤ 2)`, { size: 12.5, anchor: 'end' });
    lab(s, 336, gy(g, 5.0), 'outgoing slope 3', { size: 12.5, anchor: 'end', color: C.amber });
    lab(s, 336, gy(g, 4.35), `${Y} = 3${X} − 2`, { size: 12.5, anchor: 'end', color: C.amber });
    const c1 = lab(s, 336, gy(g, 1.6), 'corner: LHD = 4 ≠ 3 = RHD', { size: 12.5, anchor: 'end' });
    lab(s, 336, gy(g, 0.92), 'continuous, not differentiable', { size: 12.5, anchor: 'end' });
    arr(s, [c1[0] + 66, c1[1] - 5], pol(P2, 6.5, -42), { color: C.ink, w: 1.2, name: 'arrow:corner' });
    // the note under the plot (the book's em dash → a colon)
    lab(s, W / 2, 307, I('Same value from both sides, different slopes:'), { size: 12.5, color: C.slate });
    lab(s, W / 2, 326, I(`the graph has a corner at ${X} = 2.`), { size: 12.5, color: C.slate });
    // the faint grid, last, broken round every label
    const keepOut = s.labels.map((l) => l.rect);
    [1, 2, 3].forEach((v) => brokenPath(s, [[gx(g, v), g.oy - 1], [gx(g, v), gy(g, 8.6)]], keepOut, LABEL_GAP + 1, { color: C.grey, w: 0.5, name: 'grid' }));
    [2, 4, 6, 8].forEach((v) => brokenPath(s, [[g.ox + 1, gy(g, v)], [gx(g, 3.6), gy(g, v)]], keepOut, LABEL_GAP + 1, { color: C.grey, w: 0.5, name: 'grid' }));
    return s;
  },
  check() {
    const s = fig51.draw(fig51.cases[0]), out: Check[] = [], g = G51;
    const par = curveBack(s, g, 'curve:parabola'), ln = curveBack(s, g, 'curve:line'), tg = curveBack(s, g, 'tangent');
    out.push(['The ink curve is y = x² over [0, 2], ending at (2, 4)', onCurve(par, (x) => x * x, 1e-3) && close(par[0][0], 0, 1e-3) && close(par[par.length - 1][0], 2, 1e-3)]);
    out.push(['The marigold line is y = 3x − 2 for x > 2, starting at (2, 4) and leaving the top of the plot at y = 8.6', onCurve(ln, (x) => 3 * x - 2, 1e-3) && close(ln[0][0], 2, 1e-3) && close(ln[1][1], 8.6, 1e-3)]);
    out.push(['Continuous at x = 2: f(2) = 2² = 4, LHL = 4, RHL = 3(2) − 2 = 4, so both pieces meet at the dot (2, 4)', f51(2) === 4 && close(f51(2 - 1e-9), 4, 1e-6) && close(f51(2 + 1e-9), 4, 1e-6) && close(unPx(g, dotNamed(s, 'join')!.p)[0], 2) && close(unPx(g, dotNamed(s, 'join')!.p)[1], 4)]);
    const lhd = (h: number) => (f51(2 - h) - f51(2)) / -h, rhd = (h: number) => (f51(2 + h) - f51(2)) / h;
    out.push([`Not differentiable: LHD → ${fmt(lhd(1e-6), 4)} (4) and RHD → ${fmt(rhd(1e-6), 4)} (3), so LHD = 4 ≠ 3 = RHD`, close(lhd(1e-6), 4, 1e-4) && close(rhd(1e-6), 3, 1e-4)]);
    const tSlope = (tg[1][1] - tg[0][1]) / (tg[1][0] - tg[0][0]);
    out.push(['The dashed line is the tangent to y = x² at (2, 4): slope 4 (= 2x at x = 2), through (2, 4), the incoming slope', close(tSlope, 4, 1e-6) && close(tg[0][1] + tSlope * (2 - tg[0][0]), 4, 1e-6) && tg[0][0] < 2 && tg[1][0] > 2]);
    const a = linesNamed(s, /^arrow:corner$/)[0].pts, P2 = gp(g, [2, 4]);
    out.push(['The arrow from "corner: LHD = 4 ≠ 3 = RHD" ends at the dot (2, 4)', len(a[1], P2) < 8 && a[0][1] > P2[1]]);
    out.push(onlyMarigold(s, 'the line y = 3x − 2', 1));
    out.push(labelsCheck(s, ['x', 'y', '2', '4', '6', '8', '1', '3', 'incoming slope 4', '(tangent to y = x2)', '(2, 4)', 'y = x2  (x ≤ 2)', 'outgoing slope 3', 'y = 3x − 2', 'corner: LHD = 4 ≠ 3 = RHD', 'continuous, not differentiable', 'Same value from both sides, different slopes:', 'the graph has a corner at x = 2.']));
    out.push(stackedCheck(s, []));
    out.push(noBadChars(s, fig51));
    out.push(...layout(s));
    return out;
  },
};

/** Mathematics 12 Chapter 5, Continuity and Differentiability: the book's figure. */
export const DIAGRAMS_MATHEMATICS_12_05: Diagram[] = [fig51];
