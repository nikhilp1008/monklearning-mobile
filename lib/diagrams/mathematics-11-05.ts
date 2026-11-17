import { C, LABEL_GAP, Rect, Sketch, mathW, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * MATHEMATICS CLASS 11, CHAPTER 5 (Linear Inequalities): every drawing of the Master Reference book (October
 * edition) on pp. 414–489, redrawn. Each sits on a "CHAPTER 5 · FIGURES" plate page after its caption, except the
 * Additional Topics part's own Figures 1–3, which are on the text pages.
 *
 *   Figure 5.1 (p. 417; caption p. 416), hollow and filled endpoints, Topic 01, topic index 0.
 *   Figure 5.2 (p. 420; caption p. 419), the solution set [1, ∞), Topic 01, index 0.
 *   Figure 5.3 (p. 428; caption p. 427), why an inequality is a half-plane, Topic 02, index 1.
 *   Figure 5.4 (p. 430; caption p. 429), 2x + 3y ≤ 12 by a test point, Topic 02, index 1.
 *   Figure 5.5 (p. 432; caption p. 431), the bounded feasible triangle, Topic 02, index 1.
 *   Figure 5.6 (p. 448; caption p. 447), the sign walk (wavy curve) of Topic 04's Example 4, index 3.
 *   Figure 5.7 (p. 457; caption p. 456), the case split for |x − 1| + |x + 2| < 5, Topic 05, index 4.
 *   Figure 5.8 (p. 460; caption p. 459), the solution x > 3 with x = 0 rejected, Topic 05, index 4.
 *   Figure 5.9 (p. 467; caption p. 466), three upward parabolas, Additional topic A, index 5.
 *   Figure 5.10 (p. 470; caption p. 469), the sign diagram for (x − 1)/(x − 3) ≥ 0, Additional topic B, index 6.
 *   Figure 5.11 (p. 473; caption p. 472), y = √(x + 3) against y = x + 1, Additional topic C, index 7.
 *   The Additional Topics part's "Figure 1" (p. 478), the four standard modulus regions, m11-05-D-d1, index 8.
 *   Its "Figure 2" (p. 483), Example E.1's critical points and reduced wavy curve, m11-05-E-d1, index 9.
 *   Its "Figure 3" (p. 486), the two regions of Examples F.1 and F.2, m11-05-F-d1, index 10.
 *
 * NO FILLS. Every region the book shades (5.3's half-plane II, 5.4's half-plane, 5.5's triangle, 5.9's dip, 5.11's
 * two regions, Figure 1's four regions, Figure 3's two regions) is marigold hatching, the drawing's one highlight,
 * computed line by line from the inequality itself and kept clear of every label, dot and arrow. On the number lines
 * the book's orange solution rays and bars are marigold (5.1, 5.2, 5.6, 5.7's union, 5.8, 5.10); the book's teal and
 * green (5.3's and 5.4's region labels, 5.7's case segments, Figure 3's arrows) are ink, its grey slate.
 *
 * DOTS. In this chapter a hollow ring means "not included" and a filled dot "included", exactly as the book draws
 * them (5.1, 5.6, 5.7, 5.8, 5.10, Figure 2); every other point on a graph is a filled dot (decision 10).
 *
 * SIGNS. 5.6 and 5.10 print their own + and − (+ above the axis, − below, beside the wavy curve), so they are kept as
 * printed: decision 18 replaced colour bands, and these figures have none.
 *
 * DEPARTURES, for a phone: grid lines are left out (the tick numbers stay); labels the book runs along a line
 * (ax + by = c, 2x + 3y = 12, x + y = 4, y = x + 1, x + y = 3, y = x ± 1, 3x + 4y = 12, 2x + y = 8, x + 2y = 10)
 * are set level beside it; a tick number the curve or a boundary runs through is moved a few points aside (in 5.6, −3 and 4 stay
 * straight under and over their own ticks, −3 set lower to clear the curve). The book's
 * side-by-side panels are chips, one panel each: 5.9 (D < 0, D = 0, D > 0), 5.11 (one shaded region each; the book
 * shades the two in two colours, here the chip's own region is hatched and its label is in amber), Figure 1 (four
 * regions), Figure 3 (two regions). 5.7's union label "(−3, 2)" sits above its bar (the book: right of it, past a
 * phone's edge). 5.3's boundary is solid, as printed, though the region II it bounds is the strict ax + by > c.
 * Captions are the book's, without "Figure 5.N"; their one-line fractions are written <frac> (stacked by the
 * reader). No label on a drawing holds a fraction. No em dash.
 */

const W = 340;
type P = [number, number];
const fmt = (n: number, d = 2) => String(+n.toFixed(d)).replace('-', '−');
const len = (a: P, b: P) => Math.hypot(b[0] - a[0], b[1] - a[1]);
const plain = (html: string) => html.replace(/<\/?(?:i|sub|sup|frac|num|den)>/g, '');
const widthOf = (html: string, size: number) => Math.max(mathW(html, size), plain(html).length * size * 0.5);
const I = (t: string) => `<i>${t}</i>`;
const X = I('x'), Y = I('y');
const close = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) < tol;
const fr = (n: string, d: string) => `<frac><num>${n}</num><den>${d}</den></frac>`;

/* ---------- lines, labels and the layout checks (as in mathematics-11-02.ts and -04.ts) ---------- */
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
/** Every label closer than LABEL_GAP to a kept line, the worst first. */
function crowded(s: Sketch): { gap: number; what: string }[] {
  const boxes: [string, Rect][] = s.labels.map((l): [string, Rect] => [l.text, l.rect]);
  const out: { gap: number; what: string }[] = [];
  let best = { gap: Infinity, what: '' };
  for (const { pts, name: ln } of LINES.get(s) ?? []) for (const [name, r] of boxes) {
    const d = boxToLine(r, pts);
    if (d < best.gap) best = { gap: d, what: `"${name}" (from the ${ln || 'line'})` };
    if (d < LABEL_GAP - 1e-9) out.push({ gap: d, what: `"${name}" (from the ${ln || 'line'}, ${fmt(d, 1)} px)` });
  }
  return out.length ? out.sort((a, b) => a.gap - b.gap) : [best];
}
const clearCheck = (s: Sketch): Check => {
  const c = crowded(s), bad = c[0].gap < LABEL_GAP - 1e-9;
  return [`Every label stays at least ${LABEL_GAP} px clear of every line, curve, dot and hatch stroke: ${bad ? `too close: ${c.slice(0, 8).map((x) => x.what).join('; ')}` : `the closest is ${c[0].what}, ${fmt(c[0].gap, 1)} px`}`, !bad];
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
const labelsCheck = (s: Sketch, ts: string[], what = 'The labels as printed'): Check => {
  const miss = ts.filter((t) => !hasLabel(s, t));
  return [`${what}: ${ts.join(' · ')}${miss.length ? `; missing ${miss.join(', ')}` : ''}`, miss.length === 0];
};
/** No vulgar-fraction character, no one-line fraction and no em dash in anything the drawing shows. */
const noBadChars = (s: Sketch, d: Diagram): Check => {
  const all = [...s.labels.map((l) => l.text), d.name, ...d.cases.flatMap((c) => [c.chip, c.cap])].join(' ');
  const slash = s.labels.some((l) => l.text.includes('/')) || d.cases.some((c) => plain(c.cap.replace(/<frac>.*?<\/frac>/g, '')).includes('/'));
  return ['No em dash, no vulgar-fraction character and no one-line a/b in the labels, name, chips or captions', !/[\u2014\u00bc-\u00be\u2150-\u215e]/.test(all) && !slash];
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
/** A thin slate leader from a label towards the point it names, stopping short of both. */
function leader(s: Sketch, a: P, b: P, o: { stop?: number; color?: string } = {}) {
  const d = len(a, b), k = (d - (o.stop ?? 7)) / d;
  path(s, [a, [a[0] + (b[0] - a[0]) * k, a[1] + (b[1] - a[1]) * k]], { color: o.color ?? C.slate, w: 1, name: 'leader' });
}

/* ---------- hatching: the book's shading, as lines (mathematics-11-02.ts) ---------- */
const HATCH = new WeakMap<Sketch, [P, P][]>();
/**
 * Marigold hatching at 45° over every point `inside` says is shaded, kept `gap` px clear of each label and each
 * rect in `avoid`. Built line by line at half-pixel steps; each stroke is kept for the clearance check and returned
 * so a check can test that it lies in the shaded region.
 */
function hatch(s: Sketch, inside: (p: P) => boolean, box: Rect, o: { step?: number; avoid?: Rect[]; gap?: number; back?: boolean } = {}): [P, P][] {
  const step = (o.step ?? 7) * Math.SQRT2, gap = o.gap ?? LABEL_GAP + 1, avoid = [...s.labels.map((l) => l.rect), ...(o.avoid ?? [])];
  const ok = (p: P) => inside(p) && avoid.every((r) => rectDist(r, p) >= gap);
  const segs: [P, P][] = [];
  // strokes along y = k − x (rising to the right), or along y = x + k (falling) when `back`
  const k0 = o.back ? box[1] - box[2] : box[0] + box[1], k1 = o.back ? box[3] - box[0] : box[2] + box[3];
  for (let k = k0 + step / 2; k <= k1; k += step) {
    const xa = o.back ? Math.max(box[0], box[1] - k) : Math.max(box[0], k - box[3]), xb = o.back ? Math.min(box[2], box[3] - k) : Math.min(box[2], k - box[1]);
    let a: P | null = null, b: P | null = null;
    const end = () => { if (a && b && len(a, b) >= 3) segs.push([a, b]); a = null; };
    for (let x = xa; x <= xb + 1e-9; x += 0.5) {
      const p: P = [x, o.back ? x + k : k - x];
      if (ok(p)) { if (!a) a = p; b = p; } else end();
    }
    end();
  }
  s.add(`<path d="${segs.map(([a, b]) => `M${r1(a[0])} ${r1(a[1])} L${r1(b[0])} ${r1(b[1])}`).join(' ')}" fill="none" stroke="${C.mari}" stroke-width="1" stroke-linecap="round"/>`);
  segs.forEach((sg) => keep(s, sg, 'hatch'));
  HATCH.set(s, [...(HATCH.get(s) ?? []), ...segs]);
  return segs;
}
/** Every hatch stroke's ends and middle pass the test. */
const hatchAll = (s: Sketch, test: (p: P) => boolean) => (HATCH.get(s) ?? []).every(([a, b]) => test(a) && test(b) && test([(a[0] + b[0]) / 2, (a[1] + b[1]) / 2]));
const hatchN = (s: Sketch) => (HATCH.get(s) ?? []).length;

/* ---------- number lines ---------- */
type NL = { x0: number; ux: number; y: number; from: number };
const NX = (L: NL, v: number) => L.x0 + (v - L.from) * L.ux;
const vOf = (L: NL, x: number) => L.from + (x - L.x0) / L.ux;
const NR = 4.6;
type NDot = { line: string; v: number; open: boolean; col: string };
const NDOTS = new WeakMap<Sketch, NDot[]>();
const ndotsOf = (s: Sketch, line?: string) => (NDOTS.get(s) ?? []).filter((d) => line === undefined || d.line === line);
/** A dot on a number line: filled when the value is included, a hollow ring when it is not. */
function ndot(s: Sketch, L: NL, v: number, open: boolean, line: string, col: string = C.ink, y = L.y) {
  const x = NX(L, v);
  s.point(x, y, NR, open ? `<circle cx="${r1(x)}" cy="${r1(y)}" r="${NR}" fill="#fff" stroke="${col}" stroke-width="1.9"/>` : `<circle cx="${r1(x)}" cy="${r1(y)}" r="${NR}" fill="${col}"/>`);
  keep(s, Array.from({ length: 25 }, (_, i): P => [x + (NR + 1) * Math.cos((2 * Math.PI * i) / 24), y + (NR + 1) * Math.sin((2 * Math.PI * i) / 24)]), `dot:${line}`);
  NDOTS.set(s, [...(NDOTS.get(s) ?? []), { line, v, open, col }]);
}
/** The line itself in ink with a head at each end, its ticks and their numbers (moved aside by `dx` where asked). */
function numberLine(s: Sketch, L: NL, a: number, b: number, ticks: number[], o: { dy?: number; dx?: Record<string, number>; ty?: Record<string, number>; up?: string[]; size?: number; color?: string; name?: string } = {}): Rect[] {
  const y = L.y, m = (a + b) / 2, name = o.name ?? 'axis';
  s.vec(m, y, a, y, { color: C.ink, w: 1.3 });
  s.vec(m, y, b, y, { color: C.ink, w: 1.3 });
  keep(s, [[a, y], [b, y]], name);
  return ticks.map((t) => {
    const x = NX(L, t);
    s.line(x, y - 5, x, y + 5, { color: C.slate, w: 1.1 });
    keep(s, [[x, y - 5], [x, y + 5]], `tick:${t}`);
    return lab(s, x + (o.dx?.[String(t)] ?? 0), (o.up?.includes(String(t)) ? y - 12 : y + (o.dy ?? 20)) + (o.ty?.[String(t)] ?? 0), fmt(t), { size: o.size ?? 12.5, color: o.color ?? C.text });
  });
}
type Bar = { name: string; a: number; b: number; ray: boolean };
const BARS = new WeakMap<Sketch, Bar[]>();
const barsOf = (s: Sketch) => BARS.get(s) ?? [];
/** A thick bar between two values (from dot edge to dot edge); `ray` ends it in an arrowhead at pixel `toPx` instead. */
function bar(s: Sketch, L: NL, a: number, b: number | null, o: { name: string; col?: string; w?: number; toPx?: number; y?: number; left?: boolean }) {
  const y = o.y ?? L.y, col = o.col ?? C.mari, w = o.w ?? 3.4;
  if (b === null) {
    const xa = NX(L, a) + (o.left ? -(NR + 1) : NR + 1), xb = o.toPx!;
    s.vec(xa, y, xb, y, { color: col, w });
    BARS.set(s, [...barsOf(s), { name: o.name, a, b: vOf(L, xb), ray: true }]);
    return;
  }
  s.add(`<line x1="${r1(NX(L, a) + NR)}" y1="${r1(y)}" x2="${r1(NX(L, b) - NR)}" y2="${r1(y)}" stroke="${col}" stroke-width="${w}"/>`);
  BARS.set(s, [...barsOf(s), { name: o.name, a, b, ray: false }]);
}

/* ---------- wavy curves ---------- */
/**
 * The book's sign walk, drawn schematically: between two neighbouring critical points a single lobe of the sign the
 * expression has there, flattened at a touching (even) point so the curve bounces; beyond the outer points a rising
 * or falling shoulder. Built from the critical points and the signs, which the checks recompute from the expression.
 */
type Wave = { cuts: number[]; signs: number[]; amp: number[]; bounce: boolean[] };
function wave(w: Wave, x: number): number {
  const { cuts, signs, amp, bounce } = w, n = cuts.length;
  if (x <= cuts[0]) return signs[0] * amp[0] * Math.tanh((cuts[0] - x) * 1.6);
  if (x >= cuts[n - 1]) return signs[n] * amp[n] * Math.tanh((x - cuts[n - 1]) * 1.6);
  const i = cuts.findIndex((c, k) => x >= c && x <= cuts[k + 1]), a = cuts[i], b = cuts[i + 1], t = (x - a) / (b - a);
  const bl = bounce[i], br = bounce[i + 1];
  const shape = (u: number) => Math.sin(Math.PI * u) * (bl ? u : 1) * (br ? 1 - u : 1);
  let peak = 0;
  for (let k = 1; k < 100; k++) peak = Math.max(peak, shape(k / 100));
  return (signs[i + 1] * amp[i + 1] * shape(t)) / peak;
}
/** The wave as pixels on the number line (positive values above the line). */
function drawWave(s: Sketch, L: NL, w: Wave, xa: number, xb: number) {
  const pts = Array.from({ length: 601 }, (_, i): P => { const v = xa + ((xb - xa) * i) / 600; return [NX(L, v), L.y - wave(w, v)]; });
  path(s, pts, { color: C.ink, w: 2, name: 'curve' });
}
/** The wave read back: the sign of the drawn curve at a value. */
const waveSign = (s: Sketch, L: NL, v: number) => {
  const pts = linesNamed(s, /^curve$/)[0].pts, x = NX(L, v);
  const k = pts.findIndex((p) => p[0] >= x);
  return Math.sign(L.y - pts[Math.max(0, k)][1]);
};
/** At values across the drawn stretch (not at the critical points), the curve's side matches the sign of f. */
function waveMatches(s: Sketch, L: NL, f: (x: number) => number, a: number, b: number, cuts: number[]) {
  const bad: string[] = [];
  for (let i = 0; i <= 200; i++) {
    const v = a + ((b - a) * i) / 200;
    if (cuts.some((c) => Math.abs(v - c) < 0.15)) continue;
    if (waveSign(s, L, v) !== Math.sign(f(v))) bad.push(fmt(v));
  }
  return bad;
}

/* ---------- graphs ---------- */
type Gr = { ox: number; oy: number; ux: number; uy: number; x: [number, number]; y: [number, number] };
const gx = (g: Gr, v: number) => g.ox + v * g.ux;
const gy = (g: Gr, v: number) => g.oy - v * g.uy;
const gp = (g: Gr, p: P): P => [gx(g, p[0]), gy(g, p[1])];
const unPx = (g: Gr, p: P): P => [(p[0] - g.ox) / g.ux, (g.oy - p[1]) / g.uy];
type AxOpt = {
  xt?: number[]; yt?: number[];
  xdx?: Record<string, number>; xdy?: Record<string, number>;
  ydx?: Record<string, number>; ydy?: Record<string, number>;
  yRight?: string[];
  /** The book's "0" at the origin: offset from the crossing and anchor. */
  zero?: [number, number, 'start' | 'middle' | 'end'];
  size?: number;
};
function axes(s: Sketch, g: Gr, o: AxOpt = {}) {
  const xL = gx(g, g.x[0]), xR = gx(g, g.x[1]), yB = gy(g, g.y[0]), yT = gy(g, g.y[1]), size = o.size ?? 11.5;
  arrow(s, [xL, g.oy], [xR, g.oy], { color: C.ink, w: 1.3, name: 'axis:x' });
  arrow(s, [g.ox, yB], [g.ox, yT], { color: C.ink, w: 1.3, name: 'axis:y' });
  lab(s, xR + 5, g.oy + 5, X, { anchor: 'start', size: 15 });
  lab(s, g.ox + 7, yT + 8, Y, { anchor: 'start', size: 15 });
  (o.xt ?? []).forEach((t) => {
    const x = gx(g, t);
    s.line(x, g.oy - 4, x, g.oy + 4, { color: C.slate, w: 1.1 });
    keep(s, [[x, g.oy - 4], [x, g.oy + 4]], `tick:x:${t}`);
    lab(s, x + (o.xdx?.[String(t)] ?? 0), g.oy + 17 + (o.xdy?.[String(t)] ?? 0), fmt(t), { size, color: C.slate });
  });
  (o.yt ?? []).forEach((t) => {
    const y = gy(g, t);
    s.line(g.ox - 4, y, g.ox + 4, y, { color: C.slate, w: 1.1 });
    keep(s, [[g.ox - 4, y], [g.ox + 4, y]], `tick:y:${t}`);
    const right = o.yRight?.includes(String(t));
    lab(s, g.ox + (right ? 9 : -9) + (o.ydx?.[String(t)] ?? 0), y + 4 + (o.ydy?.[String(t)] ?? 0), fmt(t), { anchor: right ? 'start' : 'end', size, color: C.slate });
  });
  if (o.zero) lab(s, g.ox + o.zero[0], g.oy + o.zero[1], '0', { anchor: o.zero[2], size, color: C.slate });
}
/** A straight line between two data points, clipped by the caller. */
const seg = (s: Sketch, g: Gr, a: P, b: P, o: Stroke = {}) => path(s, [gp(g, a), gp(g, b)], { color: o.color ?? C.ink, w: o.w ?? 2, dash: o.dash, name: o.name ?? 'line' });
const sample = (f: (x: number) => number, a: number, b: number, n = 240): P[] => Array.from({ length: n + 1 }, (_, i) => { const x = a + ((b - a) * i) / n; return [x, f(x)]; });
const GDOTS = new WeakMap<Sketch, { p: P; name: string }[]>();
const DOT_R = 3.8;
/** A filled point on the graph (decision 10), kept as a ring for the clearance check. */
function gdot(s: Sketch, g: Gr, p: P, name: string, col: string = C.ink) {
  const [px, py] = gp(g, p);
  s.dot(px, py, DOT_R, col);
  keep(s, Array.from({ length: 25 }, (_, i): P => [px + (DOT_R + 1) * Math.cos((2 * Math.PI * i) / 24), py + (DOT_R + 1) * Math.sin((2 * Math.PI * i) / 24)]), `dot:${name}`);
  GDOTS.set(s, [...(GDOTS.get(s) ?? []), { p, name }]);
}
const gdotsOf = (s: Sketch) => GDOTS.get(s) ?? [];
const gdotAt = (s: Sketch, name: string) => gdotsOf(s).find((d) => d.name === name)?.p;
const dotBoxes = (s: Sketch, g: Gr, pad = 5): Rect[] => gdotsOf(s).map((d) => { const [x, y] = gp(g, d.p); return [x - DOT_R - pad, y - DOT_R - pad, x + DOT_R + pad, y + DOT_R + pad]; });
/** Hatch the region `inData` (a test on data points) inside the graph's window, clear of axes' ticks and dots. */
function shade(s: Sketch, g: Gr, inData: (p: P) => boolean, o: { avoid?: Rect[]; margin?: number; lines?: RegExp; clear?: [RegExp, number]; back?: boolean; step?: number } = {}) {
  const m = o.margin ?? 3, box: Rect = [gx(g, g.x[0]), gy(g, g.y[1]), gx(g, g.x[1]), gy(g, g.y[0])];
  const bounds = o.lines ? linesNamed(s, o.lines).map((l) => l.pts) : [];
  // `clear`: lines (an arrow, say) kept clear by their own gap, measured to the stroke itself, not to its bounding box
  const near = o.clear ? linesNamed(s, o.clear[0]).map((l) => l.pts) : [], ng = o.clear?.[1] ?? 0;
  return hatch(s, (p) => p[0] > box[0] && p[0] < box[2] - 10 && p[1] > box[1] + 10 && p[1] < box[3] && inData(unPx(g, p)) && bounds.every((b) => toPoly(p, b) > m) && near.every((b) => toPoly(p, b) > ng), box, { avoid: [...dotBoxes(s, g, 1), ...(o.avoid ?? [])], back: o.back, step: o.step });
}
const hatchIn = (s: Sketch, g: Gr, inData: (p: P) => boolean) => hatchAll(s, (p) => inData(unPx(g, p)));

/* ===================================================================== */
/* Figure 5.1 · hollow and filled endpoints (Topic 01, p. 417)           */
/* ===================================================================== */
const CAP51 = `The hollow circle at 2 marks ${X} > 2; the filled circle marks ${X} ≥ 2, both shaded rightward to +∞.`;
const L51 = (y: number): NL => ({ x0: 14, ux: 39, y, from: -1.5 });
const fig51: Diagram = {
  id: 'm11-05-fig-5.1',
  topic: 0,
  name: 'Hollow and filled endpoints',
  cases: [{ chip: 'x > 2 and x ≥ 2', cap: CAP51 }],
  draw() {
    const s = new Sketch(W, 178);
    [[L51(62), true, 'hollow: 2 excluded', `${X} > 2`], [L51(146), false, 'filled: 2 included', `${X} ≥ 2`]].forEach(([L, open, note, sol], i) => {
      const l = L as NL;
      numberLine(s, l, 12, 328, [-1, 0, 1, 2, 3, 4, 5], { name: `axis:${i}` });
      bar(s, l, 2, null, { name: `ray:${i}`, toPx: NX(l, 5.85) });
      ndot(s, l, 2, open as boolean, `line:${i}`);
      lab(s, NX(l, 2) - 12, l.y - 16, note as string, { anchor: 'end', size: 13, color: C.slate });
      lab(s, NX(l, 3.95), l.y - 16, sol as string, { size: 16, color: C.amber });
    });
    return s;
  },
  check() {
    const s = fig51.draw(fig51.cases[0]), out: Check[] = [];
    const [d0, d1] = [ndotsOf(s, 'line:0')[0], ndotsOf(s, 'line:1')[0]];
    out.push(['x > 2: a hollow ring at 2 (2 left out); x ≥ 2: a filled dot at 2 (2 kept)', d0.v === 2 && d0.open && d1.v === 2 && !d1.open]);
    const rs = barsOf(s);
    out.push([`Both rays start at 2 and run right past 5 to an arrowhead (+∞): ${rs.map((r) => `[${r.a}, ${fmt(r.b)}]`).join(', ')}`, rs.length === 2 && rs.every((r) => r.ray && r.a === 2 && r.b > 5.5)]);
    const xs = [1.5, 2, 2.5, 7];
    out.push(['Reading the two sets at 1.5, 2, 2.5, 7: x > 2 gives no, no, yes, yes; x ≥ 2 gives no, yes, yes, yes', xs.map((x) => x > 2).join() === 'false,false,true,true' && xs.map((x) => x >= 2).join() === 'false,true,true,true']);
    out.push(labelsCheck(s, ['hollow: 2 excluded', 'filled: 2 included', 'x > 2', 'x ≥ 2', '−1', '0', '5']));
    out.push(noBadChars(s, fig51));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 5.2 · the solution set [1, ∞) (Topic 01, p. 420)               */
/* ===================================================================== */
const CAP52 = `The solution set [1, ∞): a filled circle at ${X} = 1 with the shading running rightward to +∞.`;
const L52: NL = { x0: 14, ux: 35, y: 62, from: -2.6 };
const fig52: Diagram = {
  id: 'm11-05-fig-5.2',
  topic: 0,
  name: 'The solution set [1, ∞)',
  cases: [{ chip: 'x ≥ 1', cap: CAP52 }],
  draw() {
    const s = new Sketch(W, 96), L = L52;
    numberLine(s, L, 12, 328, [-2, -1, 0, 1, 2, 3, 4, 5]);
    bar(s, L, 1, null, { name: 'ray', toPx: NX(L, 5.75) });
    ndot(s, L, 1, false, 'line');
    lab(s, NX(L, 3.3), L.y - 16, `${X} ≥ 1, i.e. [1, ∞)`, { size: 15, color: C.amber });
    return s;
  },
  check() {
    const s = fig52.draw(fig52.cases[0]), out: Check[] = [], d = ndotsOf(s)[0], r = barsOf(s)[0];
    // Example 1's working: the book's inequality reduces to x ≥ 1
    out.push(['A filled dot at 1 (1 is in the set) and a ray from it to the right, past 5 to an arrowhead: [1, ∞)', d.v === 1 && !d.open && r.ray && r.a === 1 && r.b > 5.5]);
    out.push(labelsCheck(s, ['x ≥ 1, i.e. [1, ∞)', '−2', '−1', '0', '1', '2', '3', '4', '5']));
    out.push(noBadChars(s, fig52));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 5.3 · why an inequality is a half-plane (Topic 02, p. 428)     */
/* ===================================================================== */
const CAP53 = `With <i>b</i> > 0, the point <i>Q</i>(<i>α</i>, <i>γ</i>) above <i>P</i>(<i>α</i>, <i>β</i>) lies in half-plane II, where <i>ax</i> + <i>by</i> > <i>c</i>.`;
/** p. 428: the line falls from (0, 2) through (4, 0), so it stands for x + 2y = 4 (a = 1, b = 2 > 0, c = 4). */
const LN53 = (x: number) => 2 - x / 2;
const G53: Gr = { ox: 66, oy: 190, ux: 34, uy: 34, x: [-1.6, 7.1], y: [-2.3, 4.7] };
const PQ53 = { P: [1, 1.5] as P, Q: [1, 3.4] as P };
const fig53: Diagram = {
  id: 'm11-05-fig-5.3',
  topic: 1,
  name: 'Why an inequality is a half-plane',
  cases: [{ chip: 'Half-plane II', cap: CAP53 }],
  draw() {
    const s = new Sketch(W, 290), g = G53;
    axes(s, g, { xt: [-1, 1, 2, 3, 4, 5, 6], yt: [-2, -1, 1, 2, 3, 4], zero: [-9, 17, 'end'], xdx: { '4': -6 }, xdy: { '5': -28, '6': -28 }, ydy: { '2': 6 } });
    seg(s, g, [-1.6, LN53(-1.6)], [7.1, LN53(7.1)], { name: 'boundary', w: 2.2 });
    path(s, [gp(g, PQ53.P), gp(g, PQ53.Q)].map((p, i): P => [p[0], p[1] + (i ? 6 : -6)]), { color: C.slate, w: 1.1, dash: '3 3', name: 'PQ' });
    gdot(s, g, PQ53.P, 'P'); gdot(s, g, PQ53.Q, 'Q');
    lab(s, gx(g, 1) + 9, gy(g, 3.4) + 5, `${I('Q')}(${I('α')}, ${I('γ')})`, { anchor: 'start', size: 14 });
    lab(s, gx(g, 1) + 8, gy(g, 2.4) + 5, `${I('γ')} > ${I('β')}`, { anchor: 'start', size: 13, color: C.slate });
    const pl = lab(s, gx(g, 1.05), gy(g, 0.33), `${I('P')}(${I('α')}, ${I('β')})`, { anchor: 'start', size: 13 });
    leader(s, [pl[0] + 3, pl[1] - 5], gp(g, PQ53.P));
    lab(s, gx(g, 5.1), gy(g, 3.8), 'II', { size: 19, color: C.amber });
    lab(s, gx(g, 5.1), gy(g, 3.1), `${I('ax')} + ${I('by')} > ${I('c')}`, { size: 14, color: C.amber });
    lab(s, gx(g, 2), gy(g, -1.3), 'I', { size: 19, color: C.slate });
    lab(s, gx(g, 4.6), gy(g, -1.75), `${I('ax')} + ${I('by')} = ${I('c')}`, { anchor: 'middle', size: 14 });
    shade(s, g, (p) => p[1] > LN53(p[0]), { lines: /^(boundary|PQ)$/ });
    return s;
  },
  check() {
    const s = fig53.draw(fig53.cases[0]), out: Check[] = [], g = G53;
    const bl = linesNamed(s, /^boundary$/)[0].pts.map((p) => unPx(g, p)), a = 1, b = 2, c = 4;
    out.push([`The boundary reads back through (${fmt(bl[0][0])}, ${fmt(bl[0][1])}) and (${fmt(bl[1][0])}, ${fmt(bl[1][1])}): ax + by = c with a = 1, b = 2 > 0, c = 4, through (0, 2) and (4, 0), as printed`, bl.every((p) => close(a * p[0] + b * p[1], c, 1e-9)) && close(LN53(0), 2) && close(LN53(4), 0)]);
    const P = gdotAt(s, 'P')!, Q = gdotAt(s, 'Q')!;
    out.push([`P(α, β) = (${fmt(P[0])}, ${fmt(P[1])}) on the line; Q(α, γ) = (${fmt(Q[0])}, ${fmt(Q[1])}) straight above it (same α), γ > β, so aα + bγ = ${fmt(a * Q[0] + b * Q[1])} > c (b > 0)`, close(a * P[0] + b * P[1], c) && Q[0] === P[0] && Q[1] > P[1] && a * Q[0] + b * Q[1] > c]);
    out.push([`Half-plane II hatched (${hatchN(s)} strokes), every stroke where ax + by > c; region I below the line left clear`, hatchN(s) > 30 && hatchIn(s, g, (p) => a * p[0] + b * p[1] > c)]);
    out.push(labelsCheck(s, ['Q(α, γ)', 'P(α, β)', 'γ > β', 'II', 'I', 'ax + by > c', 'ax + by = c', 'x', 'y', '0']));
    out.push(noBadChars(s, fig53));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 5.4 · 2x + 3y ≤ 12 by a test point (Topic 02, p. 430)          */
/* ===================================================================== */
const CAP54 = `The solid boundary 2${X} + 3${Y} = 12 through (6,\u00a00) and (0,\u00a04), with the half-plane containing the successful test point (0,\u00a00) shaded.`;
const LN54 = (x: number) => (12 - 2 * x) / 3;
const G54: Gr = { ox: 86, oy: 186, ux: 30, uy: 30, x: [-2.4, 7.8], y: [-2.2, 5.6] };
const fig54: Diagram = {
  id: 'm11-05-fig-5.4',
  topic: 1,
  name: 'The half-plane 2x + 3y ≤ 12',
  cases: [{ chip: '2x + 3y ≤ 12', cap: CAP54 }],
  draw() {
    const s = new Sketch(W, 278), g = G54;
    axes(s, g, { xt: [-2, -1, 1, 2, 3, 4, 5, 6, 7], yt: [-2, -1, 1, 2, 3, 4, 5], zero: [-9, 17, 'end'], xdx: { '7': 12 }, xdy: { '6': 2 }, ydy: { '4': 8 } });
    seg(s, g, [-2.4, LN54(-2.4)], [7.8, LN54(7.8)], { name: 'boundary', w: 2.2 });
    gdot(s, g, [0, 4], '(0, 4)'); gdot(s, g, [6, 0], '(6, 0)'); gdot(s, g, [0, 0], 'test', C.mari);
    lab(s, gx(g, 0) + 8, gy(g, 4) - 9, '(0, 4)', { anchor: 'start', size: 14 });
    lab(s, gx(g, 6) + 2, gy(g, 0) - 12, '(6, 0)', { anchor: 'start', size: 14 });
    lab(s, gx(g, 3.3), gy(g, 2.6), `2${X} + 3${Y} = 12`, { anchor: 'start', size: 14 });
    lab(s, gx(g, 0) + 10, gy(g, 0) - 30, 'test (0, 0):', { anchor: 'start', size: 13, color: C.amber });
    lab(s, gx(g, 0) + 10, gy(g, 0) - 13, '0 ≤ 12  true', { anchor: 'start', size: 13, color: C.amber });
    lab(s, gx(g, 4.1), gy(g, -1.35), `2${X} + 3${Y} ≤ 12`, { size: 15 });
    shade(s, g, (p) => 2 * p[0] + 3 * p[1] < 12, { lines: /^boundary$/ });
    return s;
  },
  check() {
    const s = fig54.draw(fig54.cases[0]), out: Check[] = [], g = G54;
    const bl = linesNamed(s, /^boundary$/)[0].pts.map((p) => unPx(g, p));
    out.push(['The solid boundary 2x + 3y = 12 runs through (0, 4) and (6, 0), both on it (≤: solid, as printed)', bl.every((p) => close(2 * p[0] + 3 * p[1], 12, 1e-9)) && ['(0, 4)', '(6, 0)'].every((n) => { const p = gdotAt(s, n)!; return close(2 * p[0] + 3 * p[1], 12); })]);
    const t = gdotAt(s, 'test')!;
    out.push([`The test point (${fmt(t[0])}, ${fmt(t[1])}): 2(0) + 3(0) = 0 ≤ 12, true, so its side is shaded`, t[0] === 0 && t[1] === 0 && 2 * t[0] + 3 * t[1] <= 12]);
    out.push([`The half-plane holding (0, 0) hatched (${hatchN(s)} strokes), every stroke where 2x + 3y < 12`, hatchN(s) > 40 && hatchIn(s, g, (p) => 2 * p[0] + 3 * p[1] < 12)]);
    out.push(labelsCheck(s, ['(0, 4)', '(6, 0)', '2x + 3y = 12', '2x + 3y ≤ 12', 'test (0, 0):', '0 ≤ 12  true', '0', '4', '6', '7', '5', '−2']));
    out.push(noBadChars(s, fig54));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 5.5 · the bounded feasible triangle (Topic 02, p. 432)         */
/* ===================================================================== */
const CAP55 = `The bounded feasible triangle with vertices (1, 0), (4, 0) and (1, 3), cut out by the boundary lines ${X} = 1, ${Y} = 0 and ${X} + ${Y} = 4.`;
const G55: Gr = { ox: 48, oy: 214, ux: 42, uy: 42, x: [-0.6, 6.6], y: [-1.4, 4.4] };
const in55 = (p: P) => p[0] > 1 && p[1] > 0 && p[0] + p[1] < 4;
const fig55: Diagram = {
  id: 'm11-05-fig-5.5',
  topic: 1,
  name: 'The bounded feasible triangle',
  cases: [{ chip: 'Triangle', cap: CAP55 }],
  draw() {
    const s = new Sketch(W, 290), g = G55;
    axes(s, g, { xt: [1, 2, 3, 4, 5, 6], yt: [1, 2, 3, 4], zero: [-9, 17, 'end'], xdx: { '1': 7, '4': -10 }, ydy: { '4': 8 } });
    seg(s, g, [1, -0.0], [1, 4.4], { name: 'x=1', w: 2.2 });
    seg(s, g, [-0.4, 0], [6.1, 0], { name: 'y=0', w: 2.2 });
    seg(s, g, [-0.4, 4.4], [4.6, -0.6], { name: 'x+y=4', w: 2.2 });
    [[1, 0], [4, 0], [1, 3]].forEach((p) => gdot(s, g, p as P, `(${p[0]}, ${p[1]})`));
    lab(s, gx(g, 1) + 9, gy(g, 3.95), `${X} = 1`, { anchor: 'start', size: 14 });
    lab(s, gx(g, 5.5), gy(g, 0) - 14, `${Y} = 0`, { size: 14 });
    lab(s, gx(g, 2.8), gy(g, 2), `${X} + ${Y} = 4`, { anchor: 'start', size: 14 });
    lab(s, gx(g, 1) + 9, gy(g, 3) - 4, '(1, 3)', { anchor: 'start', size: 14 });
    lab(s, gx(g, 1), gy(g, 0) + 46, '(1, 0)', { size: 14 });
    lab(s, gx(g, 4), gy(g, 0) + 46, '(4, 0)', { size: 14 });
    shade(s, g, in55, { lines: /^(x=1|y=0|x\+y=4)$/ });
    return s;
  },
  check() {
    const s = fig55.draw(fig55.cases[0]), out: Check[] = [], g = G55;
    const v = [[1, 0], [4, 0], [1, 3]] as P[];
    out.push(['The vertices are where the boundary lines meet: x = 1 and y = 0 at (1, 0); y = 0 and x + y = 4 at (4, 0); x = 1 and x + y = 4 at (1, 3)', v.every((p) => gdotAt(s, `(${p[0]}, ${p[1]})`)) && close(4 - 1, 3) && v[1][0] + v[1][1] === 4 && v[2][0] + v[2][1] === 4]);
    out.push([`The triangle hatched (${hatchN(s)} strokes), every stroke where x ≥ 1, y ≥ 0 and x + y ≤ 4; its area 3 × 3 ÷ 2 = 4.5`, hatchN(s) > 15 && hatchIn(s, g, in55)]);
    out.push(labelsCheck(s, ['x = 1', 'y = 0', 'x + y = 4', '(1, 3)', '(1, 0)', '(4, 0)', '0', '6']));
    out.push(noBadChars(s, fig55));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 5.6 · the sign walk of Topic 04's Example 4 (p. 448)           */
/* ===================================================================== */
const CAP56 = `The sign walk for ${fr(`(${X} + 3)(${X} − 1)<sup>2</sup>(${X} − 4)`, `${X} + 2`)} ≥ 0, giving [−3, −2) ∪ {1} ∪ [4, ∞).`;
const F56 = (x: number) => ((x + 3) * (x - 1) ** 2 * (x - 4)) / (x + 2);
const L56: NL = { x0: 12, ux: 26.6, y: 168, from: -4.9 };
const W56: Wave = { cuts: [-3, -2, 1, 4], signs: [-1, 1, -1, -1, 1], amp: [50, 62, 60, 60, 44], bounce: [false, false, true, false] };
const fig56: Diagram = {
  id: 'm11-05-fig-5.6',
  topic: 3,
  name: 'The sign walk with a bounce and a hole',
  cases: [{ chip: 'Sign walk', cap: CAP56 }],
  draw() {
    const s = new Sketch(W, 268), L = L56;
    drawWave(s, L, W56, -4.7, 6.6);
    numberLine(s, L, 12, 328, [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6], { dx: { '-3': 2, '-2': -9, '1': -6, '4': -2 }, ty: { '-3': 16, '4': -5 }, up: ['0', '1', '2', '4'] });
    bar(s, L, -3, -2, { name: '[−3, −2)' });
    bar(s, L, 4, null, { name: '[4, ∞)', toPx: 326 });
    ndot(s, L, -3, false, 'line', C.mari); ndot(s, L, -2, true, 'line', C.mari); ndot(s, L, 1, false, 'line', C.mari); ndot(s, L, 4, false, 'line', C.mari);
    lab(s, NX(L, -2.5), L.y - 82, '+', { size: 17 });
    lab(s, NX(L, 5.6), L.y - 64, '+', { size: 17 });
    [-4.3, -0.5, 2.5].forEach((v) => lab(s, NX(L, v), L.y + 82, '−', { size: 17 }));
    const a = lab(s, NX(L, -0.9), 26, `denominator ${X} = −2:`, { anchor: 'start', size: 12.5, color: C.slate });
    lab(s, NX(L, -0.9), 42, 'hollow, always excluded', { anchor: 'start', size: 12.5, color: C.slate });
    leader(s, [a[0] + 4, 49], [NX(L, -2), L.y], { stop: 8 });
    lab(s, NX(L, 2.4), 82, `bounce at ${X} = 1`, { size: 12.5, color: C.slate });
    lab(s, NX(L, 2.4), 98, '(even multiplicity)', { size: 12.5, color: C.slate });
    leader(s, [NX(L, 1.9), 105], [NX(L, 1), L.y], { stop: 8 });
    return s;
  },
  check() {
    const s = fig56.draw(fig56.cases[0]), out: Check[] = [], L = L56;
    const dots = ndotsOf(s).map((d) => `${fmt(d.v)}${d.open ? ' hollow' : ' filled'}`);
    out.push([`Critical points: numerator −3, 1 (squared), 4; denominator −2. Drawn: ${dots.join(', ')} (hollow only where excluded)`, dots.join() === '−3 filled,−2 hollow,1 filled,4 filled']);
    const bad = waveMatches(s, L, F56, -4.7, 6.6, W56.cuts);
    out.push([`The curve is above the line exactly where the expression is positive (checked at 200 values${bad.length ? `; wrong at ${bad.join(', ')}` : ''}); it bounces at 1 (even power)`, bad.length === 0 && F56(0.5) < 0 && F56(1.5) < 0]);
    const sol = (x: number) => (x !== -2 && F56(x) >= 0);
    const want = [-3.5, -3, -2.5, -2, 0, 1, 2, 4, 5].map(sol).join();
    out.push([`Solution read from the expression at −3.5, −3, −2.5, −2, 0, 1, 2, 4, 5: ${want}; the bars drawn are ${barsOf(s).map((b) => b.name).join(' and ')} with the dot {1}`, want === 'false,true,true,false,false,true,false,true,true' && barsOf(s).length === 2 && barsOf(s)[0].a === -3 && barsOf(s)[0].b === -2 && barsOf(s)[1].ray && barsOf(s)[1].a === 4]);
    const signs = s.labels.filter((l) => l.text === '+' || l.text === '−').map((l) => `${l.text}${fmt(vOf(L, (l.rect[0] + l.rect[2]) / 2))}${l.rect[3] < L.y ? '↑' : '↓'}`);
    out.push([`Signs as printed: + above (−3, −2) and (4, ∞), − below (−∞, −3), (−2, 1), (1, 4): ${signs.join(' ')}`, s.labels.filter((l) => l.text === '+').every((l) => l.rect[3] < L.y && F56(vOf(L, (l.rect[0] + l.rect[2]) / 2)) > 0) && s.labels.filter((l) => l.text === '−').every((l) => l.rect[1] > L.y && F56(vOf(L, (l.rect[0] + l.rect[2]) / 2)) < 0) && signs.length === 5]);
    out.push(labelsCheck(s, ['denominator x = −2:', 'hollow, always excluded', 'bounce at x = 1', '(even multiplicity)', '−4', '6']));
    out.push(noBadChars(s, fig56));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 5.7 · the case split for |x − 1| + |x + 2| < 5 (Topic 05, p. 457) */
/* ===================================================================== */
const CAP57 = `The case split for |${X} − 1| + |${X} + 2| < 5: the sign table, the three per-case segments, and their union (−3, 2).`;
const L57: NL = { x0: 104, ux: 29.1, y: 166, from: -4.3 };
const T57 = { top: 34, rows: [34, 64, 94, 128], right: 334 };
const COLS57 = [`${X} < −2`, `−2 ≤ ${X} < 1`, `${X} ≥ 1`];
const ROWS57 = [
  { name: `sign of ${X} − 1`, cells: ['−', '−', '+'] },
  { name: `sign of ${X} + 2`, cells: ['−', '+', '+'] },
  { name: 'bars dropped', cells: [`−2${X} − 1`, '3', `2${X} + 1`] },
];
const CASES57 = [
  { name: 'Case A', y: 216, a: -3, b: -2, lc: false, rc: false },
  { name: 'Case B', y: 244, a: -2, b: 1, lc: true, rc: false },
  { name: 'Case C', y: 272, a: 1, b: 2, lc: true, rc: false },
];
const U57 = { y: 314 };
const fig57: Diagram = {
  id: 'm11-05-fig-5.7',
  topic: 4,
  // Word joiners after each bar: Android breaks after "|" even before a no-break space (Android check).
  name: 'The case split for |x\u00a0−\u00a01|\u2060\u00a0+\u00a0|\u2060x\u00a0+\u00a02|\u2060\u00a0<\u00a05',
  cases: [{ chip: 'Three cases', cap: CAP57 }],
  draw() {
    const s = new Sketch(W, 332), L = L57, T = T57, xl = L.x0, cuts = [xl, NX(L, -2), NX(L, 1), T.right];
    const tl = (pts: P[]) => s.add(`<path d="${pts.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ')}" fill="none" stroke="${C.slate}" stroke-width="0.9"/>`);
    T.rows.forEach((y) => { tl([[xl, y], [T.right, y]]); keep(s, [[xl, y], [T.right, y]], 'table'); });
    cuts.forEach((x) => { tl([[x, T.top], [x, T.rows[3]]]); keep(s, [[x, T.top], [x, T.rows[3]]], 'table'); });
    COLS57.forEach((t, j) => lab(s, (cuts[j] + cuts[j + 1]) / 2, 24, t, { size: 13 }));
    ROWS57.forEach((r, i) => {
      const y = (T.rows[i] + T.rows[i + 1]) / 2 + 5;
      lab(s, 96, y, r.name, { anchor: 'end', size: 12.5, color: C.slate });
      r.cells.forEach((c, j) => lab(s, (cuts[j] + cuts[j + 1]) / 2, y, c, { size: 14 }));
    });
    const ticks = numberLine(s, L, NX(L, -4.35), 334, [-4, -3, -2, -1, 0, 1, 2, 3]);
    lab(s, 96, L.y + 5, 'critical points', { anchor: 'end', size: 12.5, color: C.slate });
    ndot(s, L, -2, false, 'critical'); ndot(s, L, 1, false, 'critical');
    CASES57.forEach((c) => {
      lab(s, 96, c.y + 5, c.name, { anchor: 'end', size: 12.5, color: C.slate });
      bar(s, L, c.a, c.b, { name: c.name, col: C.ink, w: 3, y: c.y });
      ndot(s, L, c.a, !c.lc, c.name, C.ink, c.y); ndot(s, L, c.b, !c.rc, c.name, C.ink, c.y);
    });
    path(s, [[xl, 286], [T.right, 286]], { color: C.slate, w: 0.9, name: 'rule' });
    lab(s, 96, U57.y + 5, 'union', { anchor: 'end', size: 12.5, color: C.slate });
    bar(s, L, -3, 2, { name: 'union', y: U57.y });
    ndot(s, L, -3, true, 'union', C.mari, U57.y); ndot(s, L, 2, true, 'union', C.mari, U57.y);
    const ul = lab(s, NX(L, -0.5), U57.y - 12, '(−3, 2)', { size: 14, color: C.amber });
    [-2, 1].forEach((v) => brokenPath(s, [[NX(L, v), T.rows[3]], [NX(L, v), U57.y + 10]], [...ticks, ul], 4, { color: C.slate, w: 0.9, dash: '3 3', name: 'guide' }));
    return s;
  },
  check() {
    const s = fig57.draw(fig57.cases[0]), out: Check[] = [];
    const g = (x: number) => Math.abs(x - 1) + Math.abs(x + 2);
    // the expression with the bars dropped in each column, read at two points of the column
    const forms: [(x: number) => number, number[]][] = [[(x) => -2 * x - 1, [-5, -2.5]], [() => 3, [-2, 0.5]], [(x) => 2 * x + 1, [1, 3]]];
    out.push(['Bars dropped: |x − 1| + |x + 2| = −2x − 1 for x < −2, 3 for −2 ≤ x < 1, 2x + 1 for x ≥ 1; the signs of x − 1 and x + 2 as tabled', forms.every(([f, xs]) => xs.every((x) => close(f(x), g(x)))) && Math.sign(-2.5 - 1) < 0 && Math.sign(-2.5 + 2) < 0 && Math.sign(0 + 2) > 0 && Math.sign(1.5 - 1) > 0]);
    const segs = CASES57.map((c) => ndotsOf(s, c.name)).map((d) => `${d[0].open ? '(' : '['}${fmt(d[0].v)}, ${fmt(d[1].v)}${d[1].open ? ')' : ']'}`);
    out.push([`Each case solved inside its own range: A −2x − 1 < 5 ⇒ x > −3, so (−3, −2); B 3 < 5 always, so [−2, 1); C 2x + 1 < 5 ⇒ x < 2, so [1, 2). Drawn: ${segs.join(', ')}`, segs.join() === '(−3, −2),[−2, 1),[1, 2)']);
    const u = ndotsOf(s, 'union'), ok = [-3, -2.99, 0, 1.99, 2].map((x) => g(x) < 5).join();
    out.push([`Union (−3, 2), both ends hollow: g(−3) = g(2) = 5 is not < 5. Read from g at −3, −2.99, 0, 1.99, 2: ${ok}`, u[0].v === -3 && u[1].v === 2 && u[0].open && u[1].open && ok === 'false,true,true,true,false']);
    out.push(['Critical points −2 and 1 filled on the line, with dashed guides down to the union', ndotsOf(s, 'critical').map((d) => d.v).join() === '-2,1' && linesNamed(s, /^guide$/).length >= 2]);
    out.push(labelsCheck(s, ['x < −2', '−2 ≤ x < 1', 'x ≥ 1', 'sign of x − 1', 'sign of x + 2', 'bars dropped', '−2x − 1', '3', '2x + 1', 'critical points', 'Case A', 'Case B', 'Case C', 'union', '(−3, 2)']));
    out.push(noBadChars(s, fig57));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 5.8 · the solution x > 3, x = 0 rejected (Topic 05, p. 460)    */
/* ===================================================================== */
const CAP58 = `The solution ${X} > 3 with a hollow circle at 3 shaded rightward, and ${X} = 0 crossed out as a rejected trial value.`;
const L58: NL = { x0: 12, ux: 32.4, y: 80, from: -2.7 };
const fig58: Diagram = {
  id: 'm11-05-fig-5.8',
  topic: 4,
  name: 'The solution x\u00a0>\u00a03, with x\u00a0=\u00a00 rejected',
  cases: [{ chip: 'x > 3', cap: CAP58 }],
  draw() {
    const s = new Sketch(W, 140), L = L58, x0 = NX(L, 0), y = L.y;
    numberLine(s, L, 12, 328, [-2, -1, 0, 1, 2, 3, 4, 5, 6]);
    path(s, [[x0 - 5, y - 5], [x0 + 5, y + 5]], { color: C.slate, w: 2.2, name: 'cross' });
    path(s, [[x0 - 5, y + 5], [x0 + 5, y - 5]], { color: C.slate, w: 2.2, name: 'cross' });
    bar(s, L, 3, null, { name: 'ray', toPx: NX(L, 6.65) });
    ndot(s, L, 3, true, 'line', C.mari);
    lab(s, x0, y - 34, `${X} = 0 rejected:`, { size: 12.5, color: C.slate });
    lab(s, x0, y - 17, '|3| < 0 is false', { size: 12.5, color: C.slate });
    lab(s, NX(L, 4.7), y - 16, `${X} > 3`, { size: 16, color: C.amber });
    lab(s, 334, y + 46, 'hollow: 2(3) = |3 + 3|, so 3 is excluded', { anchor: 'end', size: 12.5, color: C.slate });
    return s;
  },
  check() {
    const s = fig58.draw(fig58.cases[0]), out: Check[] = [];
    // the example: |x + 3| < 2x
    const ok = (x: number) => Math.abs(x + 3) < 2 * x;
    out.push(['|x + 3| < 2x: x = 0 gives |3| < 0, false (rejected); x = 3 gives 6 < 6, false, so 3 is excluded; x = 3.01, 5, 100 true; the set is x > 3', !ok(0) && !ok(3) && ok(3.01) && ok(5) && ok(100) && !ok(2.99) && !ok(-1)]);
    const d = ndotsOf(s)[0], r = barsOf(s)[0];
    out.push(['A hollow ring at 3 and a ray from it to the right (+∞); a cross at 0', d.v === 3 && d.open && r.ray && r.a === 3 && linesNamed(s, /^cross$/).length === 2]);
    out.push(labelsCheck(s, ['x = 0 rejected:', '|3| < 0 is false', 'x > 3', 'hollow: 2(3) = |3 + 3|, so 3 is excluded', '−2', '6']));
    out.push(noBadChars(s, fig58));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 5.9 · three upward parabolas (Additional topic A, p. 467)      */
/* ===================================================================== */
const CAP59 = 'Three upward parabolas: <i>D</i> < 0 clears the axis, <i>D</i> = 0 touches it at the vertex, <i>D</i> > 0 dips below between <i>α</i> and <i>β</i>.';
type Case59 = { chip: string; cap: string; vy: number; title: string; note: string };
const AX59 = 140, CX59 = 170, K59 = 0.0215;
const CASES59: Case59[] = [
  { chip: 'D < 0', cap: CAP59, vy: -36, title: `${I('D')} < 0`, note: `${I('f')}(${X}) > 0 for all ${X}` },
  { chip: 'D = 0', cap: CAP59, vy: 0, title: `${I('D')} = 0`, note: `${I('f')}(${X}) ≥ 0, touches at the vertex` },
  { chip: 'D > 0', cap: CAP59, vy: 38, title: `${I('D')} > 0`, note: `dips below on (${I('α')}, ${I('β')}): rejected` },
];
/** The parabola in pixels: y = AX59 + vy − K59 (x − CX59)²; vy > 0 puts the vertex below the axis. */
const par59 = (c: Case59) => (x: number) => AX59 + c.vy - K59 * (x - CX59) ** 2;
const fig59: Diagram = {
  id: 'm11-05-fig-5.9',
  topic: 5,
  name: 'Three upward parabolas',
  cases: CASES59,
  draw(c: Case59) {
    const s = new Sketch(W, 222), f = par59(c), top = 40, hw = Math.sqrt((AX59 + c.vy - top) / K59);
    lab(s, W / 2, 22, c.title, { size: 16 });
    path(s, [[60, AX59], [280, AX59]], { color: C.ink, w: 1.4, name: 'axis' });
    path(s, Array.from({ length: 121 }, (_, i): P => { const x = CX59 - hw + (2 * hw * i) / 120; return [x, f(x)]; }), { w: 2.2, name: 'curve' });
    if (c.vy > 0) {
      const r = Math.sqrt(c.vy / K59), a: P = [CX59 - r, AX59], b: P = [CX59 + r, AX59];
      s.dot(a[0], a[1], DOT_R); s.dot(b[0], b[1], DOT_R);
      keep(s, [a], 'dot:alpha'); keep(s, [b], 'dot:beta');
      lab(s, a[0] + 9, AX59 - 9, I('α'), { anchor: 'start', size: 15 });
      lab(s, b[0] - 9, AX59 - 9, I('β'), { anchor: 'end', size: 15 });
      hatch(s, (p) => p[1] > AX59 + 3 && p[1] < f(p[0]) - 3, [a[0], AX59, b[0], AX59 + c.vy]);
    } else if (c.vy === 0) {
      s.dot(CX59, AX59, DOT_R, C.mari);
      keep(s, [[CX59, AX59]], 'dot:vertex');
    }
    lab(s, W / 2, 206, c.note, { size: 13, color: C.slate });
    return s;
  },
  check(c: Case59) {
    const s = fig59.draw(c), out: Check[] = [], f = par59(c);
    // f(x) = a(x − h)² + k with a = K59 > 0 (upward) and k = −vy (pixels up are positive): D = −4ak
    const a = K59, k = -c.vy, D = -4 * a * k, sg = D > 1e-12 ? '>' : D < -1e-12 ? '<' : '=';
    out.push([`Upward (a > 0), vertex value k = ${fmt(k)}: D = −4ak ${sg} 0, the case "${c.chip}"`, c.chip === `D ${sg} 0` && a > 0]);
    const pts = linesNamed(s, /^curve$/)[0].pts;
    const below = pts.filter((p) => p[1] > AX59 + 1e-9).length;
    out.push([`${D < 0 ? 'The curve never reaches the axis: f(x) > 0 for all x' : D === 0 ? 'The curve touches the axis only at the vertex: f(x) ≥ 0' : 'The curve dips below the axis between its two roots α and β, the dip hatched'}`, D < 0 ? pts.every((p) => p[1] < AX59) : D === 0 ? below === 0 && close(f(CX59), AX59) : below > 0 && hatchN(s) > 3 && hatchAll(s, (p) => p[1] > AX59 && p[1] < f(p[0]))]);
    out.push(labelsCheck(s, [plain(c.title), plain(c.note), ...(D > 0 ? ['α', 'β'] : [])]));
    out.push(noBadChars(s, fig59));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 5.10 · the sign diagram for (x − 1)/(x − 3) ≥ 0 (B, p. 470)    */
/* ===================================================================== */
const CAP510 = `The sign diagram for ${fr(`${X} − 1`, `${X} − 3`)} ≥ 0: filled at ${X} = 1, hollow at ${X} = 3, accepted on (−∞,\u00a01] and (3,\u00a0∞).`;
const F510 = (x: number) => (x - 1) / (x - 3);
const L510: NL = { x0: 14, ux: 35.2, y: 142, from: -1.9 };
const W510: Wave = { cuts: [1, 3], signs: [1, -1, 1], amp: [40, 40, 40], bounce: [false, false] };
const fig510: Diagram = {
  id: 'm11-05-fig-5.10',
  topic: 6,
  // A word joiner after the slash: Android breaks after "/" (Android check).
  name: 'The sign diagram for (x\u00a0−\u00a01)/\u2060(x\u00a0−\u00a03)\u00a0≥\u00a00',
  cases: [{ chip: 'Sign diagram', cap: CAP510 }],
  draw() {
    const s = new Sketch(W, 236), L = L510;
    drawWave(s, L, W510, -1.75, 6.75);
    numberLine(s, L, 12, 328, [-1, 0, 1, 2, 3, 4, 5, 6], { dx: { '1': -8, '3': 8 } });
    bar(s, L, 1, null, { name: '(−∞, 1]', toPx: 16, left: true });
    bar(s, L, 3, null, { name: '(3, ∞)', toPx: 324 });
    ndot(s, L, 1, false, 'line', C.mari); ndot(s, L, 3, true, 'line', C.mari);
    lab(s, NX(L, -1), L.y - 13, '+', { size: 17 });
    lab(s, NX(L, 5.5), L.y - 13, '+', { size: 17 });
    lab(s, NX(L, 2), L.y + 66, '−', { size: 17 });
    lab(s, NX(L, 2), L.y + 88, 'negative: the square root is undefined here', { size: 12.5, color: C.slate });
    lab(s, NX(L, 0.1), 30, 'numerator root:', { size: 12.5, color: C.slate });
    lab(s, NX(L, 0.1), 46, 'filled', { size: 12.5, color: C.slate });
    leader(s, [NX(L, 0.45), 54], [NX(L, 1), L.y], { stop: 8 });
    lab(s, NX(L, 4.2), 30, 'denominator root:', { size: 12.5, color: C.slate });
    lab(s, NX(L, 4.2), 46, 'always hollow', { size: 12.5, color: C.slate });
    leader(s, [NX(L, 3.85), 54], [NX(L, 3), L.y], { stop: 8 });
    return s;
  },
  check() {
    const s = fig510.draw(fig510.cases[0]), out: Check[] = [], L = L510;
    const bad = waveMatches(s, L, F510, -1.75, 6.75, W510.cuts);
    out.push([`The curve is above the line where (x − 1)/(x − 3) > 0 (x < 1 or x > 3) and below on (1, 3)${bad.length ? `; wrong at ${bad.join(', ')}` : ''}`, bad.length === 0]);
    const d = ndotsOf(s);
    out.push(['x = 1 (numerator root, value 0, ≥ allows it) filled; x = 3 (denominator root) hollow', d.map((q) => `${q.v}${q.open ? 'h' : 'f'}`).join() === '1f,3h' && F510(1) === 0]);
    const rs = barsOf(s);
    out.push([`Accepted rays (−∞, 1] and (3, ∞): drawn from 1 to ${fmt(rs[0].b)} and from 3 to ${fmt(rs[1].b)}; inside (1, 3) the expression is negative (f(2) = ${fmt(F510(2))})`, rs[0].a === 1 && rs[0].b < -1.5 && rs[1].a === 3 && rs[1].b > 6 && F510(2) < 0 && F510(-1) > 0 && F510(5) > 0]);
    out.push(labelsCheck(s, ['numerator root:', 'filled', 'denominator root:', 'always hollow', 'negative: the square root is undefined here', '+', '−', '−1', '6']));
    out.push(noBadChars(s, fig510));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 5.11 · y = √(x + 3) against y = x + 1 (C, p. 473)              */
/* ===================================================================== */
const CAP511 = `${Y} = √(${X} + 3) and ${Y} = ${X} + 1 meet at (1, 2): the curve is above on −3 ≤ ${X} < 1, the line on ${X} > 1.`;
const G511: Gr = { ox: 151, oy: 172, ux: 30, uy: 30, x: [-4.5, 5.6], y: [-2.6, 4.6] };
const SQ = (x: number) => Math.sqrt(x + 3);
type Case511 = { chip: string; cap: string; which: 'left' | 'right' };
const in511 = { left: (p: P) => p[0] >= -3 && p[0] < 1 && p[1] > p[0] + 1 && p[1] < SQ(p[0]), right: (p: P) => p[0] > 1 && p[1] < p[0] + 1 && p[1] > SQ(p[0]) };
const fig511: Diagram = {
  id: 'm11-05-fig-5.11',
  topic: 7,
  name: 'y = √(x + 3) against y = x + 1',
  cases: [{ chip: '−3 ≤ x < 1', cap: CAP511, which: 'left' }, { chip: 'x > 1', cap: CAP511, which: 'right' } as Case511],
  draw(c: Case511) {
    const s = new Sketch(W, 268), g = G511;
    axes(s, g, { xt: [-4, -3, -2, -1, 1, 2, 3, 4, 5], yt: [-2, -1, 1, 2, 3, 4], zero: [9, 17, 'start'], xdx: { '-3': -12, '-2': -4, '-1': 8 }, ydy: { '1': -6, '2': -3 } });
    seg(s, g, [-4.5 + 0.9, -2.6], [3.6, 4.6], { name: 'line', w: 2 });
    path(s, sample(SQ, -3, 5.4).map((p) => gp(g, p)), { w: 2.2, name: 'curve' });
    gdot(s, g, [-3, 0], '(−3, 0)'); gdot(s, g, [1, 2], '(1, 2)');
    const L = c.which === 'left', hi = C.amber;
    lab(s, gx(g, -2.5), gy(g, 3.3), `√(${X} + 3) > ${X} + 1`, { size: 13.5, color: L ? hi : C.text });
    lab(s, gx(g, -2.5), gy(g, 3.3) + 17, `on −3 ≤ ${X} < 1`, { size: 13.5, color: L ? hi : C.text });
    lab(s, gx(g, 3.6), gy(g, -1.1), `√(${X} + 3) < ${X} + 1`, { size: 13.5, color: L ? C.text : hi });
    lab(s, gx(g, 3.6), gy(g, -1.1) + 17, `on ${X} > 1`, { size: 13.5, color: L ? C.text : hi });
    lab(s, gx(g, 2.3), gy(g, 3.7), `${Y} = ${X} + 1`, { anchor: 'end', size: 13 });
    lab(s, gx(g, 4.1), gy(g, 1.9), `${Y} = √(${X} + 3)`, { size: 13.5 });
    lab(s, gx(g, 1) + 8, gy(g, 2) + 20, '(1, 2)', { anchor: 'start', size: 13.5 });
    lab(s, gx(g, -3) - 8, gy(g, 0) - 14, '(−3, 0)', { anchor: 'end', size: 13.5 });
    shade(s, g, in511[c.which], { lines: /^(line|curve)$/, step: 5, back: true });
    return s;
  },
  check(c: Case511) {
    const s = fig511.draw(c), out: Check[] = [], g = G511;
    const m = gdotAt(s, '(1, 2)')!;
    out.push(['√(x + 3) = x + 1 ⇒ x + 3 = (x + 1)², x² + x − 2 = 0, x = 1 (x = −2 fails x + 1 ≥ 0): they meet at (1, 2)', close(SQ(m[0]), m[1]) && close(m[0] + 1, m[1]) && !close(SQ(-2), -1)]);
    const cv = linesNamed(s, /^curve$/)[0].pts.map((p) => unPx(g, p)), ln = linesNamed(s, /^line$/)[0].pts.map((p) => unPx(g, p));
    out.push(['The curve starts at (−3, 0) and every point satisfies y = √(x + 3); the line satisfies y = x + 1', close(cv[0][0], -3) && cv.every((p) => close(p[1], SQ(p[0]), 1e-6)) && ln.every((p) => close(p[1], p[0] + 1, 1e-9))]);
    out.push([`The chip's region hatched (${hatchN(s)} strokes): ${c.which === 'left' ? 'between the line (below) and the curve (above) for −3 ≤ x < 1' : 'between the curve (below) and the line (above) for x > 1'}`, hatchN(s) > 10 && hatchIn(s, g, in511[c.which])]);
    out.push(labelsCheck(s, ['√(x + 3) > x + 1', 'on −3 ≤ x < 1', '√(x + 3) < x + 1', 'on x > 1', 'y = x + 1', 'y = √(x + 3)', '(1, 2)', '(−3, 0)', '0']));
    out.push(noBadChars(s, fig511));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* "Figure 1" (D, p. 478) · the four standard modulus regions            */
/* ===================================================================== */
const CAPD = `The four standard modulus regions: the square |${X}| + |${Y}| ≤ 3 with its two critical lines dashed, the rectangle |${X}| ≤ 3, |${Y}| ≤ 2, the unbounded band |${X} − ${Y}| ≤ 1, and the two wedges of |${X}| − |${Y}| ≥ 1 with the bow-tie between them left unshaded.`;
type CaseD = { chip: string; cap: string; panel: 1 | 2 | 3 | 4; title: string };
const inD: Record<number, (p: P) => boolean> = {
  1: (p) => Math.abs(p[0]) + Math.abs(p[1]) < 3,
  2: (p) => Math.abs(p[0]) < 3 && Math.abs(p[1]) < 2,
  3: (p) => Math.abs(p[0] - p[1]) < 1,
  4: (p) => Math.abs(p[0]) - Math.abs(p[1]) > 1,
};
const GD = (big: boolean): Gr => (big ? { ox: 166, oy: 186, ux: 33, uy: 33, x: [-4.5, 4.5], y: [-4.4, 4.6] } : { ox: 166, oy: 178, ux: 40, uy: 40, x: [-3.7, 3.7], y: [-3.6, 3.7] });
const figD: Diagram = {
  id: 'm11-05-D-d1',
  topic: 8,
  name: 'The four standard modulus regions',
  cases: [
    { chip: '|x| + |y| ≤ 3', cap: CAPD, panel: 1, title: `|${X}| + |${Y}| ≤ 3` },
    { chip: '|x| ≤ 3, |y| ≤ 2', cap: CAPD, panel: 2, title: `|${X}| ≤ 3,  |${Y}| ≤ 2` },
    { chip: '|x − y| ≤ 1', cap: CAPD, panel: 3, title: `|${X} − ${Y}| ≤ 1` },
    { chip: '|x| − |y| ≥ 1', cap: CAPD, panel: 4, title: `|${X}| − |${Y}| ≥ 1` },
  ] as CaseD[],
  draw(c: CaseD) {
    const big = c.panel < 3, g = GD(big), s = new Sketch(W, big ? 372 : 338);
    lab(s, W / 2, 20, c.title, { size: 15 });
    const avoid: Rect[] = [];
    if (c.panel === 1) {
      axes(s, g, { xt: [-4, -3, -2, -1, 1, 2, 3, 4], yt: [-4, -3, -2, -1, 1, 2, 3, 4], xdx: { '-3': -8, '3': 8 }, ydy: { '3': -8, '-3': 8, '-2': -6 }, yRight: ['1', '2', '-1'] });
      path(s, [gp(g, [-4.5, 0]), gp(g, [4.3, 0])], { color: C.mari, w: 1.6, dash: '5 4', name: 'critical' });
      path(s, [gp(g, [0, -4.4]), gp(g, [0, 4.4])], { color: C.mari, w: 1.6, dash: '5 4', name: 'critical' });
      path(s, [[0, 3], [3, 0], [0, -3], [-3, 0], [0, 3]].map((p) => gp(g, p as P)), { w: 2.2, name: 'edge' });
      gdot(s, g, [0, 3], '(0, 3)'); gdot(s, g, [3, 0], '(3, 0)');
      lab(s, gx(g, 0) + 8, gy(g, 3) - 8, '(0, 3)', { anchor: 'start', size: 12.5 });
      lab(s, gx(g, 3) + 6, gy(g, 0) - 11, '(3, 0)', { anchor: 'start', size: 12.5 });
      lab(s, gx(g, 1.75) + 8, gy(g, 1.75) - 6, `${X} + ${Y} = 3`, { anchor: 'start', size: 13 });
      lab(s, W / 2, 364, 'dashed: critical lines', { size: 12.5, color: C.amber });
    } else if (c.panel === 2) {
      axes(s, g, { xt: [-4, -2, -1, 1, 2, 4], yt: [-4, -3, -1, 1, 3, 4], xdx: { '-1': -3, '1': 3 }, ydy: { '-1': 0 } });
      const cs = [[-3, 2], [3, 2], [3, -2], [-3, -2]] as P[];
      path(s, [...cs, cs[0]].map((p) => gp(g, p)), { w: 2.2, name: 'edge' });
      cs.forEach((p) => gdot(s, g, p, `(${fmt(p[0])}, ${fmt(p[1])})`));
      cs.forEach((p) => lab(s, gx(g, p[0]) + (p[0] < 0 ? -4 : 4), gy(g, p[1]) + (p[1] > 0 ? -13 : 24), `(${fmt(p[0])}, ${fmt(p[1])})`, { anchor: p[0] < 0 ? 'end' : 'start', size: 12.5 }));
    } else if (c.panel === 3) {
      axes(s, g, { xt: [-3, -2, -1, 1, 2, 3], yt: [-3, -2, -1, 1, 2, 3], xdx: { '-1': -12, '1': 8 }, xdy: { '-1': -29 }, ydy: { '1': -8, '-1': 8 }, yRight: ['-1'] });
      seg(s, g, [-3.7, -2.7], [2.7, 3.7], { name: 'edge', w: 2.2 });
      seg(s, g, [-2.7, -3.7], [3.7, 2.7], { name: 'edge', w: 2.2 });
      const a1: P = gp(g, [1.7, 1.7]), a2: P = gp(g, [2.7, 2.7]), b1: P = gp(g, [-1.7, -1.7]), b2: P = gp(g, [-2.7, -2.7]);
      arrow(s, a1, a2, { color: C.mari, w: 1.8, name: 'arrow' });
      arrow(s, b1, b2, { color: C.mari, w: 1.8, name: 'arrow' });
      lab(s, gx(g, 1.7), gy(g, 3.1), `${Y} = ${X} + 1`, { anchor: 'end', size: 13 });
      lab(s, gx(g, 2.2) + 10, gy(g, 0.6), `${Y} = ${X} − 1`, { anchor: 'start', size: 13 });
    } else {
      axes(s, g, { xt: [-3, -2, 2, 3], yt: [-3, -2, -1, 1, 2, 3], ydy: {}, yRight: [] });
      path(s, [[-3.7, 2.7], [-1, 0], [-3.7, -2.7]].map((p) => gp(g, p as P)), { w: 2.2, name: 'edge' });
      path(s, [[3.7, 2.7], [1, 0], [3.7, -2.7]].map((p) => gp(g, p as P)), { w: 2.2, name: 'edge' });
      gdot(s, g, [-1, 0], '(−1, 0)'); gdot(s, g, [1, 0], '(1, 0)');
      const l1 = lab(s, gx(g, -1.2), gy(g, -1.9), '(−1, 0)', { anchor: 'middle', size: 12.5 });
      const l2 = lab(s, gx(g, 1.2), gy(g, -1.9), '(1, 0)', { anchor: 'middle', size: 12.5 });
      leader(s, [(l1[0] + l1[2]) / 2 + 4, l1[1] - 6], gp(g, [-1, 0]));
      leader(s, [(l2[0] + l2[2]) / 2 - 4, l2[1] - 6], gp(g, [1, 0]));
      lab(s, gx(g, 1.7), gy(g, 3.1), 'bow-tie:', { size: 12.5, color: C.slate });
      lab(s, gx(g, 1.7), gy(g, 3.1) + 16, 'not in the region', { size: 12.5, color: C.slate });
    }
    // the band stops where its two edges stop (x + y = ±6.4 at both lines' ends), not at the frame
    const inPanel = c.panel === 3 ? (p: P) => inD[3](p) && Math.abs(p[0] + p[1]) < 6.4 : inD[c.panel];
    shade(s, g, inPanel, { avoid, back: c.panel === 3, lines: /^(edge|axis:x|axis:y|critical)$/, clear: [/^arrow$/, 6] });
    return s;
  },
  check(c: CaseD) {
    const s = figD.draw(c), out: Check[] = [], g = GD(c.panel < 3), f = inD[c.panel];
    const edge = linesNamed(s, /^edge$/).flatMap((l) => l.pts.map((p) => unPx(g, p)));
    if (c.panel === 1) {
      out.push(['The square |x| + |y| = 3: corners (0, ±3), (±3, 0); in the first quadrant the edge is x + y = 3; area 2 × 3² = 18', edge.every((p) => close(Math.abs(p[0]) + Math.abs(p[1]), 3, 1e-9)) && close(gdotAt(s, '(0, 3)')![1], 3) && close(gdotAt(s, '(3, 0)')![0], 3)]);
      out.push(['The two critical lines x = 0 and y = 0 dashed (in the highlight)', linesNamed(s, /^critical$/).length === 2]);
    } else if (c.panel === 2) {
      out.push(['The rectangle |x| ≤ 3, |y| ≤ 2: corners (±3, ±2), as labelled; area 6 × 4 = 24', edge.every((p) => close(Math.abs(p[0]), 3, 1e-9) || close(Math.abs(p[1]), 2, 1e-9)) && gdotsOf(s).every((d) => close(Math.abs(d.p[0]), 3) && close(Math.abs(d.p[1]), 2)) && gdotsOf(s).length === 4]);
    } else if (c.panel === 3) {
      const ls = linesNamed(s, /^edge$/).map((l) => l.pts.map((p) => unPx(g, p)));
      out.push(['The band |x − y| ≤ 1 between y = x + 1 and y = x − 1, unbounded both ways (the arrows run along it)', ls.length === 2 && ls[0].every((p) => close(p[1], p[0] + 1, 1e-9)) && ls[1].every((p) => close(p[1], p[0] - 1, 1e-9)) && linesNamed(s, /^arrow$/).length === 2]);
    } else {
      out.push(['The wedges |x| − |y| ≥ 1: apexes (±1, 0), edges |y| = |x| − 1; the bow-tie between them (e.g. (0, 0): 0 − 0 < 1) left out', edge.every((p) => close(Math.abs(p[1]), Math.abs(p[0]) - 1, 1e-9)) && gdotsOf(s).length === 2 && !f([0, 0]) && !f([1.5, 2.5]) && f([2.5, 0.5])]);
    }
    out.push([`The region hatched (${hatchN(s)} strokes), every stroke inside it`, hatchN(s) > 10 && hatchIn(s, g, f)]);
    const want = { 1: ['(0, 3)', '(3, 0)', 'x + y = 3', 'dashed: critical lines'], 2: ['(−3, 2)', '(3, 2)', '(3, −2)', '(−3, −2)'], 3: ['y = x + 1', 'y = x − 1'], 4: ['(−1, 0)', '(1, 0)', 'bow-tie:', 'not in the region'] }[c.panel];
    out.push(labelsCheck(s, [plain(c.title), ...want, 'x', 'y']));
    out.push(noBadChars(s, figD));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* "Figure 2" (E, p. 483) · critical points and the reduced curve        */
/* ===================================================================== */
const CAPE = `Example E.1, ${fr(`(${X} − 2)<sup>3</sup>(${X} + 1)<sup>4</sup>(${X} − 5)`, `(${X} + 3)<sup>2</sup>(${X} − 1)`)} ≥ 0: the five critical points of the original expression with their multiplicities, the margin list recording the roots −3, −1 and 1, and the reduced three-root wavy curve (${X} − 1)(${X} − 2)(${X} − 5) ≥ 0 below it.`;
const LE = (y: number): NL => ({ x0: 12, ux: 27.2, y, from: -4.8 });
/** p. 483, as printed: each critical point, where it comes from, its multiplicity. */
const CRIT_E = [
  { v: -3, kind: 'denom.', m: 2 },
  { v: -1, kind: 'numer.', m: 4 },
  { v: 1, kind: 'denom.', m: 1 },
  { v: 2, kind: 'numer.', m: 3 },
  { v: 5, kind: 'numer.', m: 1 },
];
const FE = (x: number) => ((x - 2) ** 3 * (x + 1) ** 4 * (x - 5)) / ((x + 3) ** 2 * (x - 1));
const RE = (x: number) => (x - 1) * (x - 2) * (x - 5);
const WE: Wave = { cuts: [1, 2, 5], signs: [-1, 1, -1, 1], amp: [40, 30, 40, 40], bounce: [false, false, false] };
const MARGIN_E = [`${X} = −3 (denominator, even): excluded`, `${X} = −1 (numerator, even): include as isolated point`, `${X} = 1 (denominator, odd): excluded`];
const figE: Diagram = {
  id: 'm11-05-E-d1',
  topic: 9,
  name: 'Example E.1: critical points and the reduced curve',
  cases: [{ chip: 'Original and reduced', cap: CAPE }],
  draw() {
    const s = new Sketch(W, 352), Lo = LE(82), Lr = LE(282);
    lab(s, 12, 18, 'original', { anchor: 'start', size: 13, color: C.slate });
    numberLine(s, Lo, 12, 328, [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6], { size: 12, name: 'axis:original' });
    const shift: Record<string, number> = { '1': -5, '2': 5 };
    CRIT_E.forEach((c) => {
      ndot(s, Lo, c.v, c.kind === 'denom.', 'original');
      const x = NX(Lo, c.v) + (shift[String(c.v)] ?? 0);
      lab(s, x, Lo.y - 36, c.kind, { size: 11, color: C.slate });
      lab(s, x, Lo.y - 18, `${I('m')} = ${c.m}`, { size: 12 });
    });
    [-3, -1, 1].forEach((v) => arrow(s, [NX(Lo, v), Lo.y + 28], [NX(Lo, v), 132], { color: C.slate, w: 1.2, name: 'margin-arrow' }));
    s.add(`<rect x="10" y="136" width="320" height="68" rx="6" fill="none" stroke="${C.slate}" stroke-width="0.9"/>`);
    keep(s, [[10, 136], [330, 136], [330, 204], [10, 204], [10, 136]], 'box');
    MARGIN_E.forEach((t, i) => lab(s, W / 2, 156 + i * 19, t, { size: 11 }));
    lab(s, 12, 228, 'reduced', { anchor: 'start', size: 13, color: C.slate });
    lab(s, 76, 228, `(${X} − 1)(${X} − 2)(${X} − 5) ≥ 0`, { anchor: 'start', size: 13 });
    drawWave(s, Lr, WE, -4.7, 6.7);
    numberLine(s, Lr, 12, 328, [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6], { size: 12, name: 'axis:reduced', dx: { '1': 7, '2': -7, '5': 7 } });
    ndot(s, Lr, 1, true, 'reduced', C.mari); ndot(s, Lr, 2, false, 'reduced', C.mari); ndot(s, Lr, 5, false, 'reduced', C.mari);
    const t = lab(s, NX(Lr, 0.55), Lr.y - 22, `${X} = 1 still excluded`, { anchor: 'end', size: 12, color: C.amber });
    arrow(s, [t[2] - 2, t[3] + 6], [NX(Lr, 1) - NR - 2, Lr.y - NR - 1], { color: C.mari, w: 1.2, name: 'note-arrow' });
    return s;
  },
  check() {
    const s = figE.draw(figE.cases[0]), out: Check[] = [], Lr = LE(282);
    // multiplicities from the factored expression: count the order of the zero (or pole) at each point
    const mult = (v: number) => { const e = 1e-3, r = Math.log(Math.abs(FE(v + e))) - Math.log(Math.abs(FE(v + 2 * e))); return Math.round(Math.abs(r / Math.log(1 / 2))); };
    out.push([`Multiplicities read from the expression: ${CRIT_E.map((c) => `${fmt(c.v)}: ${mult(c.v)}`).join(', ')}, as printed; the poles −3 and 1 are the denominator's`, CRIT_E.every((c) => mult(c.v) === c.m) && !Number.isFinite(FE(-3)) && !Number.isFinite(FE(1))]);
    const od = ndotsOf(s, 'original').map((d) => `${fmt(d.v)}${d.open ? 'h' : 'f'}`).join();
    out.push([`Original line: denominator points hollow, numerator points filled (${od})`, od === '−3h,−1f,1h,2f,5f']);
    const same = [-4, -2, 0, 1.5, 3, 6].every((x) => Math.sign(FE(x)) === Math.sign(RE(x)));
    out.push(['Dropping the even powers (x + 1)⁴, (x + 3)² and reducing (x − 2)³ to (x − 2) leaves (x − 1)(x − 2)(x − 5) with the same sign away from the deleted points', same]);
    const bad = waveMatches(s, Lr, RE, -4.7, 6.7, WE.cuts);
    out.push([`The reduced wavy curve is above the line where (x − 1)(x − 2)(x − 5) > 0: (1, 2) and (5, ∞)${bad.length ? `; wrong at ${bad.join(', ')}` : ''}`, bad.length === 0]);
    const rd = ndotsOf(s, 'reduced').map((d) => `${fmt(d.v)}${d.open ? 'h' : 'f'}`).join();
    out.push([`Reduced line: 1 still hollow (a denominator root), 2 and 5 filled (${rd}); x = −1 kept as an isolated point (FE(−1) = 0)`, rd === '1h,2f,5f' && FE(-1) === 0]);
    out.push(labelsCheck(s, ['original', 'reduced', 'denom.', 'numer.', 'm = 2', 'm = 4', 'm = 1', 'm = 3', ...MARGIN_E.map(plain), '(x − 1)(x − 2)(x − 5) ≥ 0', 'x = 1 still excluded']));
    out.push(noBadChars(s, figE));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* "Figure 3" (F, p. 486) · the two regions of Examples F.1 and F.2      */
/* ===================================================================== */
const CAPF = `The two regions of Examples F.1 and F.2: the bounded triangle cut off by 3${X}\u00a0+\u00a04${Y}\u00a0=\u00a012, and the unbounded first-quadrant region with corners (0,\u00a08), (2,\u00a04), (10,\u00a00), each with its interior test point.`;
type CaseF = { chip: string; cap: string; panel: 1 | 2 };
const inF: Record<number, (p: P) => boolean> = {
  1: (p) => p[0] > 0 && p[1] > 0 && 3 * p[0] + 4 * p[1] < 12,
  2: (p) => p[0] > 0 && p[1] > 0 && 2 * p[0] + p[1] > 8 && p[0] + 2 * p[1] > 10,
};
const GF: Record<number, Gr> = {
  1: { ox: 62, oy: 236, ux: 48, uy: 48, x: [-0.5, 5.5], y: [-0.5, 4.5] },
  2: { ox: 40, oy: 280, ux: 24, uy: 22, x: [-0.6, 11.6], y: [-0.6, 11.4] },
};
const figF: Diagram = {
  id: 'm11-05-F-d1',
  topic: 10,
  name: 'Writing the system from the picture',
  cases: [{ chip: 'Bounded triangle', cap: CAPF, panel: 1 }, { chip: 'Unbounded region', cap: CAPF, panel: 2 }] as CaseF[],
  draw(c: CaseF) {
    const g = GF[c.panel];
    if (c.panel === 1) {
      const s = new Sketch(W, 278);
      axes(s, g, { xt: [1, 2, 3, 4, 5], yt: [1, 2, 3, 4], xdx: { '4': -7 } });
      path(s, [[0, 0], [4, 0], [0, 3], [0, 0]].map((p) => gp(g, p as P)), { w: 2.2, name: 'edge' });
      gdot(s, g, [0, 0], '(0, 0)'); gdot(s, g, [4, 0], '(4, 0)'); gdot(s, g, [0, 3], '(0, 3)'); gdot(s, g, [1, 1], 'test');
      lab(s, gx(g, 0) - 8, gy(g, 0) + 20, '(0, 0)', { anchor: 'end', size: 13 });
      lab(s, gx(g, 4) + 4, gy(g, 0) - 12, '(4, 0)', { anchor: 'start', size: 13 });
      lab(s, gx(g, 0) + 9, gy(g, 3) - 9, '(0, 3)', { anchor: 'start', size: 13 });
      lab(s, gx(g, 2.15), gy(g, 1.7), `3${X} + 4${Y} = 12`, { anchor: 'start', size: 13.5 });
      lab(s, gx(g, 1), gy(g, 1) + 22, 'test', { size: 13 });
      shade(s, g, inF[1], { lines: /^edge$/, avoid: [[gx(g, 1) - 14, gy(g, 1) - 9, gx(g, 1) + 14, gy(g, 1) + 26]] });
      return s;
    }
    const s = new Sketch(W, 316);
    axes(s, g, { xt: [2, 4, 6, 8, 10], yt: [2, 4, 6, 8, 10], zero: [-8, 16, 'end'], xdy: { '10': 2 } });
    path(s, [[0, 11.4], [0, 8], [2, 4], [10, 0], [11.6, 0]].map((p) => gp(g, p as P)), { w: 2.2, name: 'edge' });
    seg(s, g, [2, 4], [3.4, 1.2], { dash: '4 4', w: 1.5, name: 'extension' });
    seg(s, g, [10, 0], [11.3, -0.65], { dash: '4 4', w: 1.5, name: 'extension' });
    gdot(s, g, [0, 8], '(0, 8)'); gdot(s, g, [2, 4], '(2, 4)'); gdot(s, g, [10, 0], '(10, 0)'); gdot(s, g, [5, 5], 'test');
    const av: Rect[] = [];
    [[3, 8.3], [6.3, 7.6], [9, 5.6]].forEach(([x, y]) => { const a = gp(g, [x, y]), b: P = [a[0] + 14, a[1] - 22]; arrow(s, a, b, { color: C.ink, w: 1.6, name: 'away' }); av.push([a[0] - 6, b[1] - 6, b[0] + 6, a[1] + 6]); });
    lab(s, gx(g, 0) + 8, gy(g, 8) - 8, '(0, 8)', { anchor: 'start', size: 13 });
    lab(s, gx(g, 2) + 10, gy(g, 4) - 8, '(2, 4)', { anchor: 'start', size: 13 });
    lab(s, gx(g, 10) + 4, gy(g, 0) - 12, '(10, 0)', { anchor: 'start', size: 13 });
    lab(s, gx(g, 1.15) + 6, gy(g, 6.6), `2${X} + ${Y} = 8`, { anchor: 'start', size: 13 });
    lab(s, gx(g, 3.75), gy(g, 0.9), `${X} + 2${Y} = 10`, { anchor: 'start', size: 12.5 });
    lab(s, gx(g, 5) + 9, gy(g, 5) + 5, 'test', { anchor: 'start', size: 13 });
    shade(s, g, inF[2], { lines: /^(edge|extension|axis:x|axis:y)$/, avoid: av });
    return s;
  },
  check(c: CaseF) {
    const s = figF.draw(c), out: Check[] = [], g = GF[c.panel], f = inF[c.panel], t = gdotAt(s, 'test')!;
    if (c.panel === 1) {
      out.push(['The triangle x ≥ 0, y ≥ 0, 3x + 4y ≤ 12: corners (0, 0), (4, 0), (0, 3) each make two of the three equalities true', [[0, 0], [4, 0], [0, 3]].every((p) => [p[0] === 0, p[1] === 0, 3 * p[0] + 4 * p[1] === 12].filter(Boolean).length >= 2)]);
      out.push([`The test point (1, 1): 3 + 4 = 7 ≤ 12, x, y ≥ 0: inside`, t[0] === 1 && t[1] === 1 && f(t)]);
    } else {
      out.push(['The corners: (0, 8) on x = 0 and 2x + y = 8; (2, 4) on 2x + y = 8 and x + 2y = 10; (10, 0) on x + 2y = 10 and y = 0', 2 * 0 + 8 === 8 && 2 * 2 + 4 === 8 && 2 + 2 * 4 === 10 && 10 + 0 === 10]);
      out.push([`The test point (5, 5): 2(5) + 5 = 15 ≥ 8, 5 + 2(5) = 15 ≥ 10: inside; the region runs away from the origin (unbounded, the arrows point out)`, t[0] === 5 && t[1] === 5 && f(t) && f([100, 100]) && !f([1, 1]) && linesNamed(s, /^away$/).length === 3]);
      out.push(['The boundary lines run on past the corners dashed (they are not edges there)', linesNamed(s, /^extension$/).length === 2]);
    }
    out.push([`The region hatched (${hatchN(s)} strokes), every stroke inside it`, hatchN(s) > 10 && hatchIn(s, g, f)]);
    out.push(labelsCheck(s, c.panel === 1 ? ['(0, 0)', '(4, 0)', '(0, 3)', '3x + 4y = 12', 'test'] : ['(0, 8)', '(2, 4)', '(10, 0)', '2x + y = 8', 'x + 2y = 10', 'test', '0']));
    out.push(noBadChars(s, figF));
    out.push(...layout(s));
    return out;
  },
};

/** Mathematics 11 Chapter 5, Linear Inequalities: the book's figures. */
export const DIAGRAMS_MATHEMATICS_11_05: Diagram[] = [fig51, fig52, fig53, fig54, fig55, fig56, fig57, fig58, fig59, fig510, fig511, figD, figE, figF];
