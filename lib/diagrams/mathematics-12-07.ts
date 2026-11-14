import { C, LABEL_GAP, Rect, Sketch, mathW, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * MATHEMATICS CLASS 12, CHAPTER 7 (Integrals): Figure 7.1 of the Master Reference book (October 2026 snapshot,
 * math12.pdf), redrawn. It stands on its own "CHAPTER 7 · FIGURES" plate, p. 450, the page after its caption (p. 449):
 * Topic 01 (Indefinite integral as anti-derivative), index 0.
 *
 * THE CURVES are the book's, read off the plate: F(x) = tanh x (through O, levelling off at ±1; F(−1) = −0.76 as
 * printed), so f(x) = F′(x) = sech² x, and the four copies F(x) − 1, F(x), F(x) + 1, F(x) + 2 over [−2.5, 2.4]. The
 * dashed line x = a stands at a = 1.3 (as measured); the four tangents there run 0.5 either side in x, as printed.
 *
 * ONE HIGHLIGHT: the four tangents (marigold), the drawing's point, and the note "all tangents share the same slope
 * f(a)" (amber). The book colours each curve (orange, navy, green, grey) and the note orange; here the curves are all
 * ink, told apart by their labels, the dashed line x = a slate. Its grid and the "0" at the origin: the grid is left
 * out and the origin is O, as Class 11 and Class 12 Chapters 1–3.
 *
 * The plotting helpers below (lines kept for the clearance checks, hatching, dots, graphs) are those of
 * mathematics-12-02.ts, and are exported for Chapter 8 (mathematics-12-08.ts).
 */

export const W = 340;
export type P = [number, number];
export const I = (t: string) => `<i>${t}</i>`;
export const X = I('x'), Y = I('y');
export const fmt = (n: number, d = 2) => String(+n.toFixed(d)).replace('-', '−');
export const close = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) < tol;
const len = (a: P, b: P) => Math.hypot(b[0] - a[0], b[1] - a[1]);
export const plain = (html: string) => html.replace(/<\/?(?:i|sub|sup|b)>/g, '');
const widthOf = (html: string, size: number) => Math.max(mathW(html, size), plain(html).length * size * 0.5);

/* ---------- lines, labels and the layout checks (as in mathematics-12-02.ts) ---------- */
export type Stroke = { color?: string; w?: number; dash?: boolean | string; name?: string; free?: boolean };
const LINES = new WeakMap<Sketch, { name: string; pts: P[]; color: string }[]>();
const keep = (s: Sketch, pts: P[], name = '', color: string = C.ink) => { const l = LINES.get(s) ?? []; l.push({ name, pts, color }); LINES.set(s, l); };
export const linesNamed = (s: Sketch, re: RegExp) => (LINES.get(s) ?? []).filter((l) => re.test(l.name));
const dashAttr = (d: Stroke['dash']) => (d === true ? ' stroke-dasharray="5 4"' : d ? ` stroke-dasharray="${d}"` : '');
/** A polyline; `free` leaves it out of the clearance check. */
export function path(s: Sketch, pts: P[], o: Stroke = {}) {
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ');
  s.add(`<path d="${d}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}" stroke-linejoin="round" stroke-linecap="round"${dashAttr(o.dash)}/>`);
  if (!o.free) keep(s, pts, o.name, o.color ?? C.ink);
}
/** A filled arrowhead at `tip`, pointing along angle `ang`. */
function head(s: Sketch, tip: P, ang: number, col: string, L = 7) {
  const ux = Math.cos(ang), uy = Math.sin(ang), hw = L * 0.5, bx = tip[0] - L * ux, by = tip[1] - L * uy;
  s.add(`<path d="M${r1(tip[0])} ${r1(tip[1])} L${r1(bx + hw * uy)} ${r1(by - hw * ux)} L${r1(bx - hw * uy)} ${r1(by + hw * ux)} Z" fill="${col}"/>`);
}
/** An arrow with a small filled head at b, and at a too if `both`. */
export function arr(s: Sketch, a: P, b: P, o: Stroke & { head?: number; both?: boolean } = {}) {
  const col = o.color ?? C.ink, L = Math.min(o.head ?? 7, len(a, b) / 1.6), ang = Math.atan2(b[1] - a[1], b[0] - a[0]);
  const b2: P = [b[0] - L * Math.cos(ang) * 0.8, b[1] - L * Math.sin(ang) * 0.8];
  const a2: P = o.both ? [a[0] + L * Math.cos(ang) * 0.8, a[1] + L * Math.sin(ang) * 0.8] : a;
  s.add(`<line x1="${r1(a2[0])}" y1="${r1(a2[1])}" x2="${r1(b2[0])}" y2="${r1(b2[1])}" stroke="${col}" stroke-width="${o.w ?? 1.4}" stroke-linecap="round"${dashAttr(o.dash)}/>`);
  head(s, b, ang, col, L);
  if (o.both) head(s, a, ang + Math.PI, col, L);
  if (!o.free) keep(s, [a, b], o.name ?? 'arrow', col);
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
/** The one highlight: the marigold lines are exactly the ones named. */
export const marigoldOnly = (s: Sketch, re: RegExp, what: string): Check => {
  const mari = (LINES.get(s) ?? []).filter((l) => l.color === C.mari);
  return [`One highlight: marigold on ${what} only`, mari.length > 0 && mari.every((l) => re.test(l.name)) && (LINES.get(s) ?? []).filter((l) => re.test(l.name)).every((l) => l.color === C.mari)];
};
export const labelsCheck = (s: Sketch, ts: string[], what = 'The labels as printed'): Check => {
  const miss = ts.filter((t) => !s.labels.some((l) => l.text === t));
  return [`${what}: ${ts.join(' · ')}${miss.length ? `; missing ${miss.join(', ')}` : ''}`, miss.length === 0];
};
/** No em dash, no vulgar-fraction character, no slash fraction and no ASCII hyphen-minus in anything the drawing shows. */
export const noBadChars = (s: Sketch, d: Diagram): Check => {
  const unraised = (h: string) => plain(h.replace(/<sup>.*?<\/sup>/g, ''));
  const all = [...s.texts.map((t) => unraised(t.html)), d.name, ...d.cases.flatMap((c) => [c.chip, unraised(c.cap)])].join(' ');
  const maths = [...s.texts.map((t) => t.html), ...d.cases.map((c) => c.cap)].join(' ');
  return ['No em dash, no vulgar-fraction character, no slash fraction, and every minus a true minus (−) in the labels, name, chips or captions', !/[—¼-¾⅐-⅞]/.test(all) && !/[\w)!π]\s*\/\s*[\w(π√]/.test(all) && !/(^|[\s([,])-(?=[\dπθxfg])/.test(plain(maths)) && !/\) - /.test(plain(maths))];
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

/* ---------- hatching: a shaded region as lines, never a fill (Class 11 Fig 14.x, Class 12 Fig 2.1) ---------- */
const HATCH = new WeakMap<Sketch, { name: string; segs: [P, P][] }[]>();
/** Hatching at 45° over every point `inside` says is shaded, clear of every label and (by `clear` px) every line drawn so far. */
export function hatch(s: Sketch, name: string, inside: (p: P) => boolean, bx: Rect, o: { step?: number; clear?: number; color?: string; w?: number } = {}): [P, P][] {
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
  const col = o.color ?? C.grey;
  s.add(`<path d="${segs.map(([a, b]) => `M${r1(a[0])} ${r1(a[1])} L${r1(b[0])} ${r1(b[1])}`).join(' ')}" fill="none" stroke="${col}" stroke-width="${o.w ?? 1}" stroke-linecap="round"/>`);
  segs.forEach((sg) => keep(s, sg, `hatch:${name}`, col));
  HATCH.set(s, [...(HATCH.get(s) ?? []), { name, segs }]);
  return segs;
}
export const hatchOf = (s: Sketch, name: string) => (HATCH.get(s) ?? []).filter((h) => h.name === name).flatMap((h) => h.segs);
export const allIn = (segs: [P, P][], test: (p: P) => boolean) => segs.length > 0 && segs.every(([a, b]) => test(a) && test(b) && test([(a[0] + b[0]) / 2, (a[1] + b[1]) / 2]));
/** The area of a region given by `inside` (graph units), counted on a fine midpoint grid over [x0, x1] × [y0, y1]. */
export function gridArea(inside: (x: number, y: number) => boolean, x0: number, x1: number, y0: number, y1: number, n = 900): number {
  const dx = (x1 - x0) / n, dy = (y1 - y0) / n;
  let k = 0;
  for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) if (inside(x0 + (i + 0.5) * dx, y0 + (j + 0.5) * dy)) k++;
  return k * dx * dy;
}
/** ∫ f over [a, b], Simpson's rule. */
export function simpson(f: (x: number) => number, a: number, b: number, n = 2000): number {
  const h = (b - a) / n;
  let t = f(a) + f(b);
  for (let i = 1; i < n; i++) t += (i % 2 ? 4 : 2) * f(a + i * h);
  return (t * h) / 3;
}

/* ---------- dots and graphs ---------- */
const DOTS = new WeakMap<Sketch, { p: P; name: string; color: string }[]>();
/** A filled dot (a point on a graph or a line). */
export function pt(s: Sketch, p: P, name: string, col: string = C.ink, r = 3.6) {
  s.dot(p[0], p[1], r, col);
  keep(s, Array.from({ length: 25 }, (_, i): P => [p[0] + (r + 1) * Math.cos((2 * Math.PI * i) / 24), p[1] + (r + 1) * Math.sin((2 * Math.PI * i) / 24)]), `dot:${name}`, col);
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
export const curveBack = (s: Sketch, g: Gr, name: string) => linesNamed(s, new RegExp(`^${name.replace(/[+()]/g, '\\$&')}$`)).map((l) => l.pts.map((p) => unPx(g, p)))[0] ?? [];
export const onCurve = (pts: P[], f: (x: number) => number, tol = 2e-3) => pts.length > 1 && pts.every((p) => close(p[1], f(p[0]), tol));
/** The axes, with arrowheads, in slate, named x and y. */
export function axes(s: Sketch, g: Gr, x: [number, number], y: [number, number]) {
  arr(s, [gx(g, x[0]), g.oy], [gx(g, x[1]), g.oy], { color: C.slate, w: 1.3, name: 'axis:x' });
  arr(s, [g.ox, gy(g, y[0])], [g.ox, gy(g, y[1])], { color: C.slate, w: 1.3, name: 'axis:y' });
  lab(s, gx(g, x[1]) + 5, g.oy + 5, X, { size: 15, anchor: 'start' });
  lab(s, g.ox + 7, gy(g, y[1]) + 8, Y, { size: 15, anchor: 'start' });
}

/* ===================================================================== */
/* Figure 7.1 · a family of parallel curves (Topic 01, p. 450)          */
/* ===================================================================== */
const CAP71 = 'The indefinite integral is a family of parallel curves; tangents along any vertical line are parallel.';
const G71: Gr = { ox: 142, oy: 160, ux: 40, uy: 40 };
const A71 = 1.3;
const F71 = (x: number) => Math.tanh(x);
const f71 = (x: number) => 1 / Math.cosh(x) ** 2;
const SHIFTS = [2, 1, 0, -1];
const nameOf = (c: number) => `${I('F')}(${X})${c > 0 ? ` + ${c}` : c < 0 ? ` − ${-c}` : ''}`;
const fig71: Diagram = {
  id: 'm12-07-fig-7.1',
  topic: 0,
  name: 'A family of parallel curves',
  cases: [{ chip: 'Family of curves', cap: CAP71 }],
  draw() {
    const s = new Sketch(W, 270), g = G71;
    axes(s, g, [-2.75, 3.45], [-2.35, 3.45]);
    // ticks: x labels below the axis on the left, above it on the right (the lowest curve runs just under the axis there)
    [-2, -1, 1, 2, 3].forEach((v) => {
      tick(s, gx(g, v), g.oy);
      lab(s, gx(g, v), v < 0 ? g.oy + 18 : g.oy - 11, v < 0 ? `−${-v}` : String(v), { size: 11.5, color: C.slate });
    });
    // y labels left of the axis, raised off their ticks (each curve crosses the axis at a whole number)
    [-2, -1, 1, 2, 3].forEach((v) => {
      tick(s, g.ox, gy(g, v), false);
      lab(s, g.ox - 9, gy(g, v) - 2, v < 0 ? `−${-v}` : String(v), { size: 11.5, anchor: 'end', color: C.slate });
    });
    lab(s, g.ox + 6, g.oy + 16, I('O'), { size: 12, anchor: 'start', color: C.slate });
    // the four curves F(x) + C, from their equation
    SHIFTS.forEach((c) => curve(s, g, sample((x) => F71(x) + c, -2.5, 2.4, 300), { color: C.ink, w: 2.2, name: `curve:${c}` }));
    // the dashed vertical x = a
    path(s, [[gx(g, A71), gy(g, -2.3)], [gx(g, A71), gy(g, 3.3)]], { color: C.slate, w: 1.3, dash: '5 4', name: 'line:a' });
    lab(s, gx(g, A71) + 6, gy(g, -1.85), `${X} = ${I('a')}`, { size: 13, anchor: 'start' });
    // the tangents at x = a (the highlight), then the dots on top
    const m = f71(A71);
    SHIFTS.forEach((c) => {
      const y = F71(A71) + c;
      path(s, [gp(g, [A71 - 0.5, y - 0.5 * m]), gp(g, [A71 + 0.5, y + 0.5 * m])], { color: C.mari, w: 2.6, name: `tan:${c}` });
    });
    SHIFTS.forEach((c) => pt(s, gp(g, [A71, F71(A71) + c]), `cut:${c}`));
    // the curves' names at their right ends (F(x) − 1 under the axis, as printed)
    SHIFTS.forEach((c) => lab(s, gx(g, 2.52), c === -1 ? gy(g, -0.5) : gy(g, F71(2.4) + c) + 4.5, nameOf(c), { size: 13, anchor: 'start' }));
    lab(s, 6, 30, 'all tangents share', { size: 12, anchor: 'start', color: C.amber });
    lab(s, 6, 46, `the same slope ${I('f')}(${I('a')})`, { size: 12, anchor: 'start', color: C.amber });
    return s;
  },
  check() {
    const s = fig71.draw(fig71.cases[0]), out: Check[] = [], g = G71;
    out.push(['F(x) = tanh x as read off the plate: F(0) = 0, F(−1) = −0.76, levelling off at ±1', close(F71(0), 0) && close(F71(-1), -0.76, 0.01) && close(F71(2.4), 0.98, 0.01)]);
    out.push(['f = F′: the derivative of F at a, by central differences, is sech² a', close((F71(A71 + 1e-5) - F71(A71 - 1e-5)) / 2e-5, f71(A71), 1e-6)]);
    SHIFTS.forEach((c) => {
      const pts = curveBack(s, g, `curve:${c}`);
      out.push([`The curve ${plain(nameOf(c))} read back is tanh x ${c >= 0 ? '+' : '−'} ${Math.abs(c)} over [−2.5, 2.4]`, onCurve(pts, (x) => F71(x) + c) && close(pts[0][0], -2.5, 1e-3) && close(pts[pts.length - 1][0], 2.4, 1e-3)]);
    });
    const ln = linesNamed(s, /^line:a$/)[0].pts.map((p) => unPx(g, p));
    out.push(['The dashed line is vertical at x = a and crosses all four curves', ln.every((p) => close(p[0], A71, 1e-6)) && SHIFTS.every((c) => F71(A71) + c > Math.min(ln[0][1], ln[1][1]) && F71(A71) + c < Math.max(ln[0][1], ln[1][1]))]);
    out.push(['Each crossing has its dot, on its curve at x = a', SHIFTS.every((c) => { const d = dotNamed(s, `cut:${c}`); return !!d && close(unPx(g, d.p)[0], A71, 1e-6) && close(unPx(g, d.p)[1], F71(A71) + c, 1e-6); })]);
    const slopes = SHIFTS.map((c) => { const t = linesNamed(s, new RegExp(`^tan:${c}$`))[0].pts.map((p) => unPx(g, p)); return { c, t, m: (t[1][1] - t[0][1]) / (t[1][0] - t[0][0]) }; });
    out.push([`Every tangent has slope f(a) = sech² ${A71} = ${fmt(f71(A71), 4)}: all four the same (parallel)`, slopes.every(({ m }) => close(m, f71(A71), 1e-3))]);
    out.push(['Each tangent touches its curve at the dot: it passes through (a, F(a) + C), and the curve stays on one side of it nearby', slopes.every(({ c, t }) => { const mid: P = [(t[0][0] + t[1][0]) / 2, (t[0][1] + t[1][1]) / 2]; return close(mid[0], A71, 1e-2) && close(mid[1], F71(A71) + c, 1e-2); })]);
    out.push(marigoldOnly(s, /^tan:/, 'the four tangents'));
    out.push(labelsCheck(s, ['x', 'y', 'O', '−2', '−1', '1', '2', '3', 'F(x) + 2', 'F(x) + 1', 'F(x)', 'F(x) − 1', 'x = a', 'all tangents share', 'the same slope f(a)']));
    out.push(noBadChars(s, fig71));
    out.push(...layout(s));
    return out;
  },
};

/** Mathematics 12 Chapter 7, Integrals: the book's figures. */
export const DIAGRAMS_MATHEMATICS_12_07: Diagram[] = [fig71];
