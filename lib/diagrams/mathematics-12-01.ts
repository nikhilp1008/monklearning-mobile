import { C, LABEL_GAP, Rect, Sketch, mathW, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * MATHEMATICS CLASS 12, CHAPTER 1 (Relations and Functions): every drawing of the Master Reference book
 * (October 2026 snapshot, math12.pdf, PDF page = bottom folio) on pp. 45–125, redrawn. SEVEN drawings:
 *
 *   Figure 1.1 (drawn p. 47; caption first on p. 46), Topic 01, topic index 0: four directed-graph panels.
 *   Figure 1.2 (drawn p. 52; caption p. 51), Topic 01, index 0: three classes on the number line.
 *   Figure 1.3 (drawn p. 57; caption p. 56), Topic 02, index 1: four mapping diagrams.
 *   Figure 1.4 (drawn p. 62; caption p. 61), Topic 02, index 1: y = x³ − 3x.
 *   Figure 1.5 (drawn p. 67; caption p. 66), Topic 03, index 2: composition and its inverse.
 *   The unnumbered "Atlas of Standard Real Functions" (p. 83), m12-01-05-d1, Topic 05, index 4: six graphs.
 *   Figure 1.6 (drawn p. 86; caption p. 85), Topic 05, index 4: y = |x − 2| + 1 from y = |x|.
 *
 * NO FILLS. The book's tinted node discs and ovals are outlines; Fig 1.1's shaded buckets are outlines in the
 * highlight; Fig 1.4's shaded branch x ≥ 1 is the highlight itself, the curve drawn in marigold (no hatch).
 * ONE HIGHLIGHT, the book's orange as marigold: 1.1 the shortcut a → c (panel 3) and the two buckets (panel 4);
 * 1.2 the class [0.3]; 1.4 the one-one branch x ≥ 1 and its label; 1.5 the "undo" line; 1.6 the two shifts;
 * the atlas, the graph itself (as Class 11's six standard functions). The book's navy, teal and green are ink.
 * Fig 1.3 and panels 1–2 of 1.1 carry no highlight: the book colours nothing there.
 * Multi-panel figures are cases, one panel per chip at full phone width.
 *
 * GRAPHS: axes with arrowheads, named x, y and O, in slate; every curve built from its equation; open and closed
 * dots exactly as drawn (hollow and filled). The book's matplotlib grids are left out, and its "0" at the origin is
 * the O (as Class 11). Every label, element, value and point is as printed; positions are re-laid for a phone.
 * No fraction appears on any drawing. No em dash anywhere.
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

/* ---------- lines, labels and the layout checks (as in mathematics-11-02.ts) ---------- */
type Stroke = { color?: string; w?: number; dash?: boolean; name?: string };
/** Every line a label must keep clear of, by sketch, with its name so a check can read it back. */
const LINES = new WeakMap<Sketch, { name: string; pts: P[]; color?: string }[]>();
const keep = (s: Sketch, pts: P[], name = '', color?: string) => { const l = LINES.get(s) ?? []; l.push({ name, pts, color }); LINES.set(s, l); };
const linesNamed = (s: Sketch, re: RegExp) => (LINES.get(s) ?? []).filter((l) => re.test(l.name));
function path(s: Sketch, pts: P[], o: Stroke = {}) {
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ');
  s.add(`<path d="${d}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}" stroke-linejoin="round" stroke-linecap="round"${o.dash ? ' stroke-dasharray="5 4"' : ''}/>`);
  keep(s, pts, o.name, o.color ?? C.ink);
}
const rectPts = (r: Rect): P[] => [[r[0], r[1]], [r[2], r[1]], [r[2], r[3]], [r[0], r[3]], [r[0], r[1]]];
/** An oval (a circle when rx = ry), turned by `rot` radians, kept as a fine polygon for the clearance check. */
function oval(s: Sketch, c: P, rx: number, ry: number, o: Stroke & { rot?: number } = {}) {
  const rot = o.rot ?? 0, deg = (rot * 180) / Math.PI;
  s.add(`<ellipse cx="${r1(c[0])}" cy="${r1(c[1])}" rx="${r1(rx)}" ry="${r1(ry)}"${rot ? ` transform="rotate(${r1(deg)} ${r1(c[0])} ${r1(c[1])})"` : ''} fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}"${o.dash ? ' stroke-dasharray="5 4"' : ''}/>`);
  keep(s, Array.from({ length: 241 }, (_, i): P => {
    const t = (2 * Math.PI * i) / 240, x = rx * Math.cos(t), y = ry * Math.sin(t);
    return [c[0] + x * Math.cos(rot) - y * Math.sin(rot), c[1] + x * Math.sin(rot) + y * Math.cos(rot)];
  }), o.name);
}
/** Is p inside the (turned) oval? */
const inOval = (c: P, rx: number, ry: number, rot: number, p: P) => {
  const dx = p[0] - c[0], dy = p[1] - c[1], u = dx * Math.cos(rot) + dy * Math.sin(rot), v = -dx * Math.sin(rot) + dy * Math.cos(rot);
  return (u / rx) ** 2 + (v / ry) ** 2 < 1;
};
/** An arrow (a line and a filled head), kept for the clearance check. */
function arrow(s: Sketch, a: P, b: P, o: Stroke = {}) {
  s.vec(a[0], a[1], b[0], b[1], { color: o.color ?? C.ink, w: o.w ?? 1.5, dash: o.dash });
  keep(s, [a, b], o.name);
}
/** A filled arrowhead with its tip at `tip`, pointing along angle `a`. */
function head(s: Sketch, tip: P, a: number, col: string, L = 8, hw = 4) {
  const bx = tip[0] - L * Math.cos(a), by = tip[1] - L * Math.sin(a);
  s.add(`<path d="M${r1(tip[0])} ${r1(tip[1])} L${r1(bx + hw * Math.sin(a))} ${r1(by - hw * Math.cos(a))} L${r1(bx - hw * Math.sin(a))} ${r1(by + hw * Math.cos(a))} Z" fill="${col}"/>`);
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
  const boxes: [string, Rect][] = s.labels.map((l): [string, Rect] => [l.text, l.rect]);
  for (const { pts } of LINES.get(s) ?? []) for (const [name, r] of boxes) { const d = boxToLine(r, pts); if (d < gap) { gap = d; what = name; } }
  return { gap, what };
}
const clearCheck = (s: Sketch): Check => {
  const { gap, what } = clearance(s);
  return [`Every label stays at least ${LABEL_GAP} px clear of every line, curve and dot: the closest is "${what}", ${fmt(gap, 1)} px`, gap >= LABEL_GAP - 1e-9];
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
const noDash = (s: Sketch): Check => ['No em dash on the drawing', s.texts.every((t) => !t.html.includes('—'))];
const layout = (s: Sketch): Check[] => [clearCheck(s), labelsApart(s), inFrame(s), noDash(s)];
const labelsNamed = (s: Sketch, t: string) => s.labels.filter((l) => l.text === t);
const hasLabel = (s: Sketch, t: string) => labelsNamed(s, t).length > 0;
const allLabels = (s: Sketch, ts: string[]) => ts.filter((t) => !hasLabel(s, t));

/** A line of STIX on the drawing, from its baseline, its box at its true width (scripts counted). */
function lab(s: Sketch, x: number, y: number, html: string, o: { size?: number; anchor?: 'start' | 'middle' | 'end'; color?: string } = {}): Rect {
  const size = o.size ?? 13, anchor = o.anchor ?? 'middle', w = widthOf(html, size);
  const x0 = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w : x;
  const rect: Rect = [x0, y - size * (html.includes('<sup>') ? 0.9 : 0.72), x0 + w, y + size * (html.includes('<sub>') ? 0.36 : 0.22)];
  s.labels.push({ text: plain(html), rect });
  s.text(x, y, html, { size, anchor, color: o.color ?? C.text });
  return rect;
}

/* ---------- graphs: axes through O, curves from their equations, open and closed dots ---------- */
type Gr = { ox: number; oy: number; ux: number; uy: number; x: [number, number]; y: [number, number] };
const gx = (g: Gr, v: number) => g.ox + v * g.ux;
const gy = (g: Gr, v: number) => g.oy - v * g.uy;
const gp = (g: Gr, p: P): P => [gx(g, p[0]), gy(g, p[1])];
const unPx = (g: Gr, p: P): P => [(p[0] - g.ox) / g.ux, (g.oy - p[1]) / g.uy];
type AxOpt = {
  xt?: number[]; yt?: number[];
  /** Tick values numbered to the right of the y-axis (a curve runs through the usual left-hand spot). */
  yRight?: string[];
  /** A tick's printed text where it is not the plain number ("1.0"). */
  text?: Record<string, string>;
  /** The y-axis's ticks only on the left of the axis (a curve hugs its right side). */
  yTickLeft?: boolean;
  /** The y values numbered at the panel's left edge, not beside the axis (the curve fills the space beside it). */
  yAtEdge?: number;
  /** How far below the x-axis its numbers sit (baseline, default 17): lower where dots sit on the axis. */
  xdy?: number;
  /** A number moved sideways off a curve that runs down through its usual spot. */
  xdx?: Record<string, number>;
};
const AXIS_W = 1.3;
function axes(s: Sketch, g: Gr, o: AxOpt = {}) {
  const xL = gx(g, g.x[0]), xR = gx(g, g.x[1]), yB = gy(g, g.y[0]), yT = gy(g, g.y[1]);
  arrow(s, [xL, g.oy], [xR, g.oy], { color: C.slate, w: AXIS_W, name: 'axis:x' });
  arrow(s, [g.ox, yB], [g.ox, yT], { color: C.slate, w: AXIS_W, name: 'axis:y' });
  lab(s, xR + 5, g.oy + 5, I('x'), { anchor: 'start', size: 15 });
  lab(s, g.ox + 7, yT + 6, I('y'), { anchor: 'start', size: 15 });
  const tx = (t: number) => o.text?.[String(t)] ?? fmt(t);
  (o.xt ?? []).forEach((t) => {
    const x = gx(g, t);
    s.line(x, g.oy - 4, x, g.oy + 4, { color: C.slate, w: 1.1 });
    keep(s, [[x, g.oy - 4], [x, g.oy + 4]], `tick:x:${t}`);
    lab(s, x + (o.xdx?.[String(t)] ?? 0), g.oy + (o.xdy ?? 17), tx(t), { size: 11.5, color: C.slate });
  });
  (o.yt ?? []).forEach((t) => {
    const y = gy(g, t), x1 = o.yTickLeft ? g.ox : g.ox + 4;
    s.line(g.ox - 4, y, x1, y, { color: C.slate, w: 1.1 });
    keep(s, [[g.ox - 4, y], [x1, y]], `tick:y:${t}`);
    const right = o.yRight?.includes(String(t));
    if (o.yAtEdge != null) lab(s, o.yAtEdge, y + 4, tx(t), { anchor: 'end', size: 11.5, color: C.slate });
    else lab(s, g.ox + (right ? 10 : -10), y + 4, tx(t), { anchor: right ? 'start' : 'end', size: 11.5, color: C.slate });
  });
  lab(s, g.ox - 7, g.oy + 17, I('O'), { anchor: 'end', size: 13 });
}
function curve(s: Sketch, g: Gr, pts: P[], o: Stroke = {}) {
  path(s, pts.map((p) => gp(g, p)), { color: o.color ?? C.ink, w: o.w ?? 2, dash: o.dash, name: o.name ?? 'curve' });
}
const sample = (f: (x: number) => number, a: number, b: number, n = 160): P[] => Array.from({ length: n + 1 }, (_, i) => { const x = a + ((b - a) * i) / n; return [x, f(x)]; });
const DOTS = new WeakMap<Sketch, { x: number; y: number; open: boolean; col: string }[]>();
const DOT_R = 4.2;
/** A dot at data point (x, y): filled when the value is taken, hollow when it is not. Kept as a ring for the clearance check. */
function gdot(s: Sketch, g: Gr, x: number, y: number, open: boolean, col: string = C.ink) {
  const [px, py] = gp(g, [x, y]);
  s.point(px, py, DOT_R, open ? `<circle cx="${r1(px)}" cy="${r1(py)}" r="${DOT_R}" fill="#fff" stroke="${col}" stroke-width="1.8"/>` : `<circle cx="${r1(px)}" cy="${r1(py)}" r="${DOT_R}" fill="${col}"/>`);
  keep(s, Array.from({ length: 25 }, (_, i): P => [px + (DOT_R + 1) * Math.cos((2 * Math.PI * i) / 24), py + (DOT_R + 1) * Math.sin((2 * Math.PI * i) / 24)]), 'dot');
  DOTS.set(s, [...(DOTS.get(s) ?? []), { x, y, open, col }]);
}
/** The curves drawn, read back off the drawing as data points (to 1e-9, so an integer reads back as one). */
const curvesBack = (s: Sketch, g: Gr, re = /^curve/) => linesNamed(s, re).map((l) => l.pts.map((p) => unPx(g, p).map((v) => Math.round(v * 1e9) / 1e9 + 0) as P));
/** The root of a continuous f on [a, b] by bisection (f(a) and f(b) of opposite signs). */
function root(f: (x: number) => number, a: number, b: number): number {
  let lo = a, hi = b;
  for (let i = 0; i < 80; i++) { const m = (lo + hi) / 2; if ((f(lo) <= 0) === (f(m) <= 0)) lo = m; else hi = m; }
  return (lo + hi) / 2;
}

/* ---------- arrow diagrams: nodes, curved arrows, self-loops ---------- */
const RN = 16;
type Edge = { from: string; to: string; dash: boolean; hi: boolean };
const EDGES = new WeakMap<Sketch, Edge[]>();
/** A node: a ring with its element's name inside (italic, as the text writes elements). */
function node(s: Sketch, name: string, c: P) {
  oval(s, c, RN, RN, { w: 1.7, name: `node:${name}` });
  lab(s, c[0], c[1] + 5, I(name), { size: 16 });
}
/** A curved arrow from node a to node b, bowed by `bend` × |ab| to the left of a → b; its head on b's ring. */
function edge(s: Sketch, na: string, a: P, nb: string, b: P, bend: number, o: { color?: string; dash?: boolean; hi?: boolean; w?: number } = {}) {
  const L = len(a, b), n: P = [-(b[1] - a[1]) / L, (b[0] - a[0]) / L], m: P = [(a[0] + b[0]) / 2 + bend * L * n[0], (a[1] + b[1]) / 2 + bend * L * n[1]];
  const bez = (t: number): P => [(1 - t) ** 2 * a[0] + 2 * t * (1 - t) * m[0] + t * t * b[0], (1 - t) ** 2 * a[1] + 2 * t * (1 - t) * m[1] + t * t * b[1]];
  const pts = Array.from({ length: 201 }, (_, i) => bez(i / 200)).filter((p) => len(p, a) > RN + 3 && len(p, b) > RN + 2);
  const tip = pts[pts.length - 1], back = pts.findLast((p) => len(p, tip) >= 7) ?? pts[0];
  const col = o.color ?? C.slate;
  path(s, pts.filter((p) => len(p, tip) >= 6 || p === pts[0]), { color: col, w: o.w ?? 1.5, dash: o.dash, name: `edge:${na}>${nb}` });
  head(s, tip, Math.atan2(tip[1] - back[1], tip[0] - back[0]), col);
  EDGES.set(s, [...(EDGES.get(s) ?? []), { from: na, to: nb, dash: !!o.dash, hi: !!o.hi }]);
}
/** A self-loop on node c, standing out from it at angle `ang` (radians, screen coordinates). */
function loop(s: Sketch, name: string, c: P, ang: number, col: string = C.slate) {
  const rl = 10, d = RN + 5, L: P = [c[0] + d * Math.cos(ang), c[1] + d * Math.sin(ang)], back = ang + Math.PI;
  const pts = Array.from({ length: 181 }, (_, i): P => { const t = back + 0.15 + ((2 * Math.PI - 0.3) * i) / 180; return [L[0] + rl * Math.cos(t), L[1] + rl * Math.sin(t)]; }).filter((p) => len(p, c) > RN + 2);
  const tip = pts[pts.length - 1], prev = pts[pts.length - 6];
  path(s, pts.slice(0, -3), { color: col, w: 1.5, name: `loop:${name}` });
  head(s, tip, Math.atan2(tip[1] - prev[1], tip[0] - prev[0]), col, 7, 3.6);
  EDGES.set(s, [...(EDGES.get(s) ?? []), { from: name, to: name, dash: false, hi: false }]);
}
const rel = (s: Sketch) => (EDGES.get(s) ?? []).map((e) => `${e.from}${e.to}`);
const reflexive = (R: string[], A: string[]) => A.every((a) => R.includes(a + a));
const symmetric = (R: string[]) => R.every((p) => R.includes(p[1] + p[0]));
const transitive = (R: string[]) => R.every((p) => R.filter((q) => q[0] === p[1]).every((q) => R.includes(p[0] + q[1])));

/* ===================================================================== */
/* Figure 1.1 · reflexive, symmetric, transitive, equivalence (Topic 01, p. 47) */
/* ===================================================================== */
const CAP11 = 'Directed-graph panels on a 3-element set <i>a</i>, <i>b</i>, <i>c</i>. Panel 1 (Reflexive): self-loops on every node. Panel 2 (Symmetric): every arrow shown with a matching reverse arrow. Panel 3 (Transitive): arrows <i>a</i> → <i>b</i>, <i>b</i> → <i>c</i>, plus the “shortcut” arrow <i>a</i> → <i>c</i> highlighted. Panel 4 (Equivalence): nodes grouped into ringed buckets with complete two-way connections inside each bucket and none across.';
type Panel11 = 'refl' | 'sym' | 'trans' | 'equiv';
type Case11 = { chip: string; cap: string; kind: Panel11; title: string };
const CASES11: Case11[] = [
  { chip: 'Reflexive', cap: CAP11, kind: 'refl', title: '(1) Reflexive' },
  { chip: 'Symmetric', cap: CAP11, kind: 'sym', title: '(2) Symmetric' },
  { chip: 'Transitive', cap: CAP11, kind: 'trans', title: '(3) Transitive' },
  { chip: 'Equivalence', cap: CAP11, kind: 'equiv', title: '(4) Equivalence' },
];
const SET11 = ['a', 'b', 'c'];
const TRI: Record<string, P> = { a: [170, 82], b: [92, 198], c: [248, 198] };
/** Panel 4: a and b in one bucket (a long oval along a–b), c alone in the other, as printed. */
const EQ = { a: [128, 84] as P, b: [98, 196] as P, c: [252, 196] as P, cr: 38 };
const bucketAB = () => { const a = EQ.a, b = EQ.b, c: P = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2], rot = Math.atan2(b[1] - a[1], b[0] - a[0]); return { c, rx: len(a, b) / 2 + 34, ry: 40, rot }; };
const fig11: Diagram = {
  id: 'm12-01-fig-1.1',
  topic: 0,
  name: 'Reflexive, symmetric, transitive, equivalence',
  cases: CASES11,
  draw(c: Case11) {
    const s = new Sketch(W, c.kind === 'trans' ? 286 : 268);
    lab(s, W / 2, 22, c.title, { size: 15 });
    if (c.kind === 'equiv') {
      const k = bucketAB();
      oval(s, k.c, k.rx, k.ry, { rot: k.rot, color: C.mari, w: 1.6, name: 'bucket:ab' });
      oval(s, EQ.c, EQ.cr, EQ.cr, { color: C.mari, w: 1.6, name: 'bucket:c' });
      SET11.forEach((n) => node(s, n, EQ[n as 'a' | 'b' | 'c']));
      loop(s, 'a', EQ.a, -Math.PI / 2, C.ink);
      loop(s, 'b', EQ.b, (3 * Math.PI) / 4, C.ink);
      loop(s, 'c', EQ.c, Math.PI / 4, C.ink);
      edge(s, 'a', EQ.a, 'b', EQ.b, 0.16, { color: C.ink });
      edge(s, 'b', EQ.b, 'a', EQ.a, 0.16, { color: C.ink });
      lab(s, 54, 70, `[${I('a')}]`, { size: 16, color: C.amber });
      lab(s, EQ.c[0], EQ.c[1] + EQ.cr + 24, `[${I('c')}]`, { size: 16, color: C.amber });
      return s;
    }
    SET11.forEach((n) => node(s, n, TRI[n]));
    const { a, b, c: cc } = TRI;
    if (c.kind === 'refl') {
      loop(s, 'a', a, -Math.PI / 2);
      loop(s, 'b', b, (3 * Math.PI) / 4);
      loop(s, 'c', cc, Math.PI / 4);
    } else if (c.kind === 'sym') {
      const pairs: [string, string][] = [['a', 'b'], ['b', 'a'], ['b', 'c'], ['c', 'b'], ['c', 'a'], ['a', 'c']];
      pairs.forEach(([p, q]) => edge(s, p, TRI[p], q, TRI[q], 0.14));
    } else {
      edge(s, 'a', a, 'b', b, 0.16);
      edge(s, 'b', b, 'c', cc, 0.1);
      edge(s, 'a', a, 'c', cc, -0.16, { color: C.mari, dash: true, hi: true, w: 1.8 });
      lab(s, W / 2, 268, `closure adds the shortcut ${I('a')} → ${I('c')}`, { size: 14, color: C.amber });
    }
    return s;
  },
  check(c: Case11) {
    const s = fig11.draw(c), out: Check[] = [], R = rel(s), E = EDGES.get(s) ?? [];
    const loops = R.filter((p) => p[0] === p[1]), arrows = R.filter((p) => p[0] !== p[1]);
    out.push([`Three nodes a, b, c, each a ring with its name inside`, linesNamed(s, /^node:/).length === 3 && SET11.every((n) => hasLabel(s, n))]);
    if (c.kind === 'refl') out.push([`Read back: self-loops on ${loops.map((p) => p[0]).join(', ')} and no other arrow; (a, a), (b, b), (c, c) ∈ R, so R is reflexive`, reflexive(R, SET11) && arrows.length === 0]);
    if (c.kind === 'sym') out.push([`Read back: ${arrows.length} arrows, ${arrows.map((p) => `${p[0]} → ${p[1]}`).join(', ')}; each has its reverse, so R is symmetric`, arrows.length === 6 && symmetric(R)]);
    if (c.kind === 'trans') {
      const hi = E.filter((e) => e.hi);
      out.push([`Read back: a → b, b → c and the dashed, highlighted a → c; a → b and b → c force a → c, so with it R is transitive, without it not`, same(arrows.sort(), ['ab', 'ac', 'bc']) && transitive(R) && !transitive(R.filter((p) => p !== 'ac')) && hi.length === 1 && hi[0].from === 'a' && hi[0].to === 'c' && hi[0].dash]);
      out.push(['The note reads "closure adds the shortcut a → c", as printed', hasLabel(s, 'closure adds the shortcut a → c')]);
    }
    if (c.kind === 'equiv') {
      const k = bucketAB(), inAB = (n: string) => inOval(k.c, k.rx, k.ry, k.rot, EQ[n as 'a' | 'b' | 'c']), inC = (n: string) => len(EQ[n as 'a' | 'b' | 'c'], EQ.c) < EQ.cr;
      out.push([`Read back: R = {${R.map((p) => `(${p[0]}, ${p[1]})`).join(', ')}}: reflexive, symmetric and transitive, an equivalence relation`, reflexive(R, SET11) && symmetric(R) && transitive(R) && R.length === 5]);
      const cls = (n: string) => SET11.filter((m) => R.includes(n + m)).join('');
      out.push([`Its classes: [a] = {${cls('a').split('').join(', ')}}, [c] = {${cls('c')}}; the a–b bucket holds exactly a and b, the c bucket exactly c, and no arrow crosses between buckets`, cls('a') === 'ab' && cls('b') === 'ab' && cls('c') === 'c' && SET11.filter(inAB).join('') === 'ab' && SET11.filter(inC).join('') === 'c' && arrows.every((p) => inAB(p[0]) === inAB(p[1]))]);
      out.push(['The buckets named [a] and [c], as printed', hasLabel(s, '[a]') && hasLabel(s, '[c]')]);
    }
    out.push([`The panel titled "${c.title}", as printed`, hasLabel(s, c.title)]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 1.2 · three classes on the number line (Topic 01, p. 52)       */
/* ===================================================================== */
const CAP12 = 'The real number line, with tick marks at integers; three class-systems shown as evenly spaced dots (spacing 1) offset by 0, 0.3, and 0.7, illustrating that each fractional part seeds its own infinite, evenly spaced class.';
/** p. 52: each class's dots, as printed (seven each), and the line from −3 to past 4. */
const ROWS12 = [
  { name: '[0]', off: 0, from: -3, y: 46 },
  { name: '[0.3]', off: 0.3, from: -2.7, y: 100 },
  { name: '[0.7]', off: 0.7, from: -2.3, y: 154 },
];
const G12 = { x0: 68, u: 33, lo: -3, hi: 4, end: 4.5 };
const px12 = (v: number) => G12.x0 + (v - G12.lo) * G12.u;
const fig12: Diagram = {
  id: 'm12-01-fig-1.2',
  topic: 0,
  name: 'Classes of a − b ∈ ℤ on the number line',
  cases: [{ chip: 'Three classes', cap: CAP12 }],
  draw() {
    const s = new Sketch(W, 196);
    ROWS12.forEach((r) => {
      const hi = r.off === 0.3, col = hi ? C.mari : C.ink;
      arrow(s, [px12(G12.lo), r.y], [px12(G12.end), r.y], { color: C.slate, w: 1.3, name: `line:${r.name}` });
      for (let t = G12.lo; t <= G12.hi; t++) { s.line(px12(t), r.y - 5, px12(t), r.y + 5, { color: C.slate, w: 1.1 }); keep(s, [[px12(t), r.y - 5], [px12(t), r.y + 5]], 'tick'); }
      lab(s, px12(G12.lo) - 12, r.y + 5, r.name, { anchor: 'end', size: 15, color: hi ? C.amber : C.text });
      for (let k = 0; k < 7; k++) {
        const v = +(r.from + k).toFixed(1), x = px12(v);
        s.point(x, r.y, 4.6, `<circle cx="${r1(x)}" cy="${r.y}" r="4.6" fill="${col}"/>`);
        keep(s, Array.from({ length: 25 }, (_, i): P => [x + 5.6 * Math.cos((2 * Math.PI * i) / 24), r.y + 5.6 * Math.sin((2 * Math.PI * i) / 24)]), `dot:${r.name}`);
      }
    });
    for (let t = G12.lo; t <= 3; t++) lab(s, px12(t), ROWS12[2].y + 24, fmt(t), { size: 12.5, color: C.slate });
    return s;
  },
  check() {
    const s = fig12.draw(fig12.cases[0]), out: Check[] = [];
    const read = ROWS12.map((r) => ({ r, vs: s.points.filter((p) => p.y === r.y).map((p) => +((p.x - G12.x0) / G12.u + G12.lo).toFixed(6)) }));
    const fracOf = (v: number) => +(v - Math.floor(v)).toFixed(6);
    read.forEach(({ r, vs }) => out.push([`${r.name}: dots read back at ${vs.map((v) => fmt(v, 1)).join(', ')}, as printed; each has fractional part ${r.off}, so any two differ by an integer (a − b ∈ ℤ), and consecutive dots are 1 apart`, vs.length === 7 && vs.every((v) => close(fracOf(v), r.off)) && vs.slice(1).every((v, i) => close(v - vs[i], 1)) && close(vs[0], r.from)]));
    const all = read.flatMap(({ vs }) => vs);
    out.push(['No dot belongs to two classes (the classes are disjoint), and [0.3] holds −0.7, 0.3, 1.3, 2.3, as the text lists', new Set(all.map((v) => v.toFixed(6))).size === all.length && [-0.7, 0.3, 1.3, 2.3].every((v) => read[1].vs.some((w) => close(w, v)))]);
    out.push(['Every line ticked at the integers −3 to 4, numbered −3 to 3 under the last line, as printed', allLabels(s, ['−3', '−2', '−1', '0', '1', '2', '3']).length === 0 && !hasLabel(s, '4')]);
    out.push(['The class names [0], [0.3], [0.7] at the left of their lines', ROWS12.every((r) => labelsNamed(s, r.name).some((l) => l.rect[2] < px12(G12.lo) && Math.abs(centre(l.rect)[1] - r.y) < 6))]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 1.3 · four mapping diagrams (Topic 02, p. 57)                  */
/* ===================================================================== */
const CAP13 = 'Four mapping diagrams between sets <i>A</i> and <i>B</i> (dots in ovals). (1) One-one, into: distinct arrows, one <i>B</i>-dot unhit. (2) Many-one, onto: two <i>A</i>-dots map to one <i>B</i>-dot, all <i>B</i>-dots hit. (3) Bijective: perfect pairing, no sharing, none unhit. (4) Many-one, into: sharing and an unhit <i>B</i>-dot.';
type Case13 = { chip: string; cap: string; title: string; nB: number; map: number[] };
/** p. 57: where each of A's three dots goes, top to bottom, and how many dots B has. */
const CASES13: Case13[] = [
  { chip: 'One-one (into)', cap: CAP13, title: '(1) One-one (into)', nB: 4, map: [0, 1, 2] },
  { chip: 'Many-one (onto)', cap: CAP13, title: '(2) Many-one (onto)', nB: 2, map: [0, 0, 1] },
  { chip: 'Bijective', cap: CAP13, title: '(3) Bijective', nB: 3, map: [0, 1, 2] },
  { chip: 'Many-one (into)', cap: CAP13, title: '(4) Many-one (into)', nB: 3, map: [0, 0, 1] },
];
const G13 = { a: [92, 150] as P, b: [248, 150] as P, rx: 30, ry: 82 };
const yA13 = (i: number) => G13.a[1] + (i - 1) * 40;
const yB13 = (n: number, j: number) => (n === 4 ? G13.b[1] + (j - 1.5) * 34 : n === 2 ? G13.b[1] + (j - 0.5) * 92 : G13.b[1] + (j - 1) * 40);
const fig13: Diagram = {
  id: 'm12-01-fig-1.3',
  topic: 1,
  name: 'Four mapping diagrams',
  cases: CASES13,
  draw(c: Case13) {
    const s = new Sketch(W, 252), G = G13;
    lab(s, W / 2, 22, c.title, { size: 15 });
    lab(s, G.a[0], 52, I('A'), { size: 17 });
    lab(s, G.b[0], 52, I('B'), { size: 17 });
    oval(s, G.a, G.rx, G.ry, { name: 'oval:A' });
    oval(s, G.b, G.rx, G.ry, { name: 'oval:B' });
    [0, 1, 2].forEach((i) => s.dot(G.a[0], yA13(i), 4));
    for (let j = 0; j < c.nB; j++) {
      const y = yB13(c.nB, j);
      if (c.map.includes(j)) s.dot(G.b[0], y, 4);
      else { s.point(G.b[0], y, 4, `<circle cx="${G.b[0]}" cy="${r1(y)}" r="4" fill="#fff" stroke="${C.ink}" stroke-width="1.8"/>`); keep(s, [[G.b[0], y]], `open:${j}`); }
    }
    c.map.forEach((j, i) => {
      const a: P = [G.a[0] + 8, yA13(i)], b: P = [G.b[0] - 9, yB13(c.nB, j)], L = len(a, b), n: P = [-(b[1] - a[1]) / L, (b[0] - a[0]) / L], bow = -0.06 * L;
      const m: P = [(a[0] + b[0]) / 2 + bow * n[0], (a[1] + b[1]) / 2 + bow * n[1]];
      const pts = Array.from({ length: 61 }, (_, k): P => { const t = k / 60; return [(1 - t) ** 2 * a[0] + 2 * t * (1 - t) * m[0] + t * t * b[0], (1 - t) ** 2 * a[1] + 2 * t * (1 - t) * m[1] + t * t * b[1]]; });
      const tip = pts[60], back = pts[56];
      path(s, pts.slice(0, 58), { color: C.slate, w: 1.4, name: `map:${i}>${j}` });
      head(s, tip, Math.atan2(tip[1] - back[1], tip[0] - back[0]), C.slate);
    });
    return s;
  },
  check(c: Case13) {
    const s = fig13.draw(c), out: Check[] = [];
    const maps = linesNamed(s, /^map:/).map((l) => l.name.slice(4).split('>').map(Number));
    const img = maps.map(([, j]) => j), oneOne = new Set(img).size === img.length, onto = Array.from({ length: c.nB }, (_, j) => j).every((j) => img.includes(j));
    const name = oneOne && onto ? 'Bijective' : `${oneOne ? 'One-one' : 'Many-one'} (${onto ? 'onto' : 'into'})`;
    out.push([`Read back: each of A's 3 dots has exactly one arrow (a function), to B's dots ${img.map((j) => j + 1).join(', ')} of ${c.nB}: ${oneOne ? 'no two share a target' : 'two share a target'}, ${onto ? 'every B-dot is hit' : 'a B-dot is unhit'}, so "${name}", the panel's title`, maps.length === 3 && same(maps.map(([i]) => i), [0, 1, 2]) && c.title.endsWith(name)]);
    const open = linesNamed(s, /^open:/).map((l) => +l.name.slice(5)), unhit = Array.from({ length: c.nB }, (_, j) => j).filter((j) => !img.includes(j));
    out.push([unhit.length ? `The unhit B-dot is hollow (${unhit.length}), the hit ones filled, as printed` : 'Every B-dot is hit and filled, as printed', same(open, unhit)]);
    out.push(['Every dot inside its own oval, the ovals apart; A and B named above them', [0, 1, 2].every((i) => inOval(G13.a, G13.rx, G13.ry, 0, [G13.a[0], yA13(i)])) && Array.from({ length: c.nB }, (_, j) => j).every((j) => inOval(G13.b, G13.rx, G13.ry, 0, [G13.b[0], yB13(c.nB, j)])) && hasLabel(s, 'A') && hasLabel(s, 'B')]);
    out.push([`The panel titled "${c.title}", as printed`, hasLabel(s, c.title)]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 1.4 · y = x³ − 3x (Topic 02, p. 62)                            */
/* ===================================================================== */
const CAP14 = 'Graph of <i>y</i> = <i>x</i><sup>3</sup> − 3<i>x</i> with local maximum at (−1, 2) and local minimum at (1, −2). The horizontal line <i>y</i> = 0 cuts the curve at three points, so the function is many-one; the branch <i>x</i> ≥ 1 (highlighted) is the strictly increasing piece used for the bijection.';
const f14 = (x: number) => x ** 3 - 3 * x;
const G14: Gr = { ox: 20 + 2.7 * 50, oy: 34 + 3.6 * 46, ux: 50, uy: 46, x: [-2.7, 3.3], y: [-3.6, 3.6] };
/** Where the curve leaves the frame, top and bottom (f is odd, so −xTop at the bottom). */
const XTOP14 = root((x) => f14(x) - 3.6, 1.8, 2.5);
const ROOTS14 = [-Math.sqrt(3), 0, Math.sqrt(3)];
const fig14: Diagram = {
  id: 'm12-01-fig-1.4',
  topic: 1,
  name: 'y = x³ − 3x: many-one, with a one-one branch',
  cases: [{ chip: 'Cubic', cap: CAP14 }],
  draw() {
    const g = G14, s = new Sketch(W, 404);
    axes(s, g, { xt: [-2, -1, 1, 2, 3], yt: [-3, -2, -1, 1, 2, 3], yRight: ['3', '1'], xdx: { '-2': -6 } });
    lab(s, 80, 36, `${I('y')} = 0 cuts the curve`, { size: 13.5 });
    lab(s, 80, 54, 'three times ⇒', { size: 13.5 });
    lab(s, 80, 72, 'many-one', { size: 13.5 });
    curve(s, g, sample(f14, -XTOP14, 1, 300), { name: 'curve:left' });
    curve(s, g, sample(f14, 1, XTOP14, 200), { color: C.mari, w: 3, name: 'curve:branch' });
    gdot(s, g, -1, 2, false);
    gdot(s, g, 1, -2, false);
    ROOTS14.forEach((r) => gdot(s, g, r, 0, false));
    lab(s, gx(g, -1), gy(g, 2) - 14, '(−1, 2)', { size: 14 });
    lab(s, gx(g, 1) + 12, gy(g, -2) + 22, '(1, −2)', { anchor: 'start', size: 14 });
    lab(s, W - 6, gy(g, -3.35), `one-one branch ${I('x')} ≥ 1`, { anchor: 'end', size: 13.5, color: C.amber });
    return s;
  },
  check() {
    const s = fig14.draw(fig14.cases[0]), out: Check[] = [], g = G14, pts = curvesBack(s, g).flat(), dots = DOTS.get(s)!;
    out.push([`The curve read back off the drawing is y = x³ − 3x for ${fmt(-XTOP14)} ≤ x ≤ ${fmt(XTOP14)}, where it leaves the frame at y = ∓3.6`, pts.every((p) => close(p[1], f14(p[0]), 1e-3)) && close(f14(XTOP14), 3.6, 1e-9)]);
    out.push(['f′(x) = 3x² − 3 = 0 at x = ±1: the local maximum f(−1) = 2 and the local minimum f(1) = −2, filled dots labelled (−1, 2) and (1, −2)', f14(-1) === 2 && f14(1) === -2 && dots.some((d) => d.x === -1 && d.y === 2 && !d.open) && dots.some((d) => d.x === 1 && d.y === -2 && !d.open) && hasLabel(s, '(−1, 2)') && hasLabel(s, '(1, −2)')]);
    const cuts = pts.slice(1).filter((q, i) => pts[i][1] * q[1] < 0 || q[1] === 0).length;
    out.push([`y = 0 meets the drawn curve ${cuts} times, at x = −√3, 0, √3 (x(x² − 3) = 0): the filled dots, so the function is many-one`, cuts === 3 && ROOTS14.every((r) => close(f14(r), 0, 1e-12) && dots.some((d) => close(d.x, r) && d.y === 0 && !d.open && d.col === C.ink))]);
    const branch = curvesBack(s, g, /^curve:branch$/)[0];
    out.push(['The branch x ≥ 1 (drawn heavier, in marigold) rises strictly: f′(x) = 3(x² − 1) > 0 for x > 1, so it is one-one', branch.slice(1).every((p, i) => p[1] > branch[i][1]) && close(branch[0][0], 1) && Array.from({ length: 50 }, (_, i) => 1.01 + i * 0.05).every((x) => 3 * x * x - 3 > 0)]);
    const hi = linesNamed(s, /^curve/).filter((l) => l.color === C.mari);
    out.push(['The marigold curve is exactly the branch x ≥ 1: one marigold curve, from x = 1 to where it leaves the frame, the rest of the curve in ink', hi.length === 1 && hi[0].name === 'curve:branch' && close(branch[0][0], 1) && close(branch[branch.length - 1][0], XTOP14) && linesNamed(s, /^curve:left$/).every((l) => l.color === C.ink)]);
    const miss = allLabels(s, ['y = 0 cuts the curve', 'three times ⇒', 'many-one', 'one-one branch x ≥ 1', 'x', 'y', 'O', '−2', '−1', '1', '2', '3', '−3']);
    out.push([`The labels as printed: the three-line note, one-one branch x ≥ 1, ticks −2 to 3 and −3 to 3${miss.length ? `; missing ${miss.join(', ')}` : ''}`, miss.length === 0]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 1.5 · composition and its inverse (Topic 03, p. 67)            */
/* ===================================================================== */
const CAP15 = 'Composition and its inverse. Top: <i>x</i> → <i>f</i> → <i>g</i> → <i>g</i>(<i>f</i>(<i>x</i>)) (“do: <i>f</i> then <i>g</i>”). Bottom: <i>g</i>(<i>f</i>(<i>x</i>)) → <i>g</i><sup>−1</sup> → <i>f</i><sup>−1</sup> → <i>x</i> (“undo: <i>g</i><sup>−1</sup> then <i>f</i><sup>−1</sup>”), with arrows pointing leftward to emphasise the reversal.';
const COLS15 = [24, 112, 202, 294];
const ROW15 = [78, 140];
const GFX = `${I('g')}(${I('f')}(${I('x')}))`;
/** The two rows, left to right, as printed; a box round each function. */
const ITEMS15 = [
  [{ t: I('x'), box: false }, { t: I('f'), box: true }, { t: I('g'), box: true }, { t: GFX, box: false }],
  [{ t: I('x'), box: false }, { t: `${I('f')}<sup>−1</sup>`, box: true }, { t: `${I('g')}<sup>−1</sup>`, box: true }, { t: GFX, box: false }],
];
const ITEM_RECTS = new WeakMap<Sketch, Rect[][]>();
const fig15: Diagram = {
  id: 'm12-01-fig-1.5',
  topic: 2,
  name: 'Composition and its inverse',
  cases: [{ chip: 'Do and undo', cap: CAP15 }],
  draw() {
    const s = new Sketch(W, 196), rects: Rect[][] = [];
    lab(s, W / 2, 36, `do: ${I('f')} then ${I('g')}`, { size: 15 });
    ITEMS15.forEach((row, r) => {
      const y = ROW15[r], rr: Rect[] = [];
      row.forEach((it, k) => {
        const t = lab(s, COLS15[k], y + 5, it.t, { size: 16 });
        const box: Rect = it.box ? [t[0] - 7, t[1] - 5, t[2] + 7, t[3] + 6] : t;
        if (it.box) {
          s.add(`<rect x="${r1(box[0])}" y="${r1(box[1])}" width="${r1(box[2] - box[0])}" height="${r1(box[3] - box[1])}" rx="5" fill="none" stroke="${C.grey}" stroke-width="1.4"/>`);
          keep(s, rectPts(box), 'box');
        }
        rr.push(box);
      });
      for (let k = 0; k < 3; k++) {
        const a: P = [rr[k][2] + 9, y], b: P = [rr[k + 1][0] - 9, y];
        if (r === 0) arrow(s, a, b, { w: 1.8, name: `arrow:0:${k}>${k + 1}` });
        else arrow(s, b, a, { w: 1.8, name: `arrow:1:${k + 1}>${k}` });
      }
      rects.push(rr);
    });
    lab(s, W / 2, 182, `undo: ${I('g')}<sup>−1</sup> then ${I('f')}<sup>−1</sup>`, { size: 15, color: C.amber });
    ITEM_RECTS.set(s, rects);
    return s;
  },
  check() {
    const s = fig15.draw(fig15.cases[0]), out: Check[] = [];
    const dir = (r: number) => linesNamed(s, new RegExp(`^arrow:${r}:`)).map((l) => Math.sign(l.pts[1][0] - l.pts[0][0]));
    out.push(['Top row: three arrows pointing right, x → f → g → g(f(x)); bottom row: three pointing left, g(f(x)) → g⁻¹ → f⁻¹ → x, as printed', same(dir(0), [1, 1, 1]) && same(dir(1), [-1, -1, -1])]);
    // run both rows with a sample pair: f(x) = 2x + 1, g(x) = x³
    const f = (x: number) => 2 * x + 1, g = (x: number) => x ** 3, fi = (y: number) => (y - 1) / 2, gi = (y: number) => Math.cbrt(y);
    const xs = [-2, -0.5, 0, 1, 3];
    out.push(['With f(x) = 2x + 1 and g(x) = x³: following the bottom arrows from g(f(x)), g⁻¹ then f⁻¹, gives back x every time; the other order, f⁻¹ then g⁻¹, does not (socks and shoes)', xs.every((x) => close(fi(gi(g(f(x)))), x, 1e-9)) && !xs.every((x) => close(gi(fi(g(f(x)))), x, 1e-6))]);
    const R = ITEM_RECTS.get(s)!;
    out.push(['f, g, f⁻¹ and g⁻¹ in boxes, each under its partner: f⁻¹ under f and g⁻¹ under g', close(centre(R[0][1])[0], centre(R[1][1])[0], 1e-6) && close(centre(R[0][2])[0], centre(R[1][2])[0], 1e-6) && linesNamed(s, /^box$/).length === 4]);
    const miss = allLabels(s, ['do: f then g', 'undo: g−1 then f−1', 'x', 'f', 'g', 'f−1', 'g−1', 'g(f(x))']);
    out.push([`The labels as printed: do: f then g, undo: g⁻¹ then f⁻¹, x, f, g, f⁻¹, g⁻¹, g(f(x))${miss.length ? `; missing ${miss.join(', ')}` : ''}`, miss.length === 0]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* The "Atlas of Standard Real Functions" (Topic 05, p. 83, unnumbered)  */
/* ===================================================================== */
const CAPD1 = 'Atlas of standard real functions: modulus, signum, greatest integer (floor), fractional part, exponential, and logarithm.';
type Seg = P[];
type ACase = {
  chip: string; cap: string; title: string; f: (x: number) => number; g: Gr; h: number; ax: AxOpt;
  segs: Seg[]; dots: [number, number, boolean][];
  says: (pts: P[][], dots: { x: number; y: number; open: boolean }[]) => [string, boolean];
};
const sgn = (x: number) => (x > 0 ? 1 : x < 0 ? -1 : 0);
const frameA = (y: [number, number], uy: number, x: [number, number] = [-4.7, 4.7], ux = 32, left = 20): Gr => ({ ox: left - x[0] * ux, oy: 34 + 14 + y[1] * uy, ux, uy, x, y });
const hOf = (g: Gr) => Math.ceil(gy(g, g.y[0]) + 24);
const STEPS = [-4, -3, -2, -1, 0, 1, 2, 3];
/** p. 83, each panel as printed: the axes' spans, the ticks, the open and filled dots. */
const ACASES: ACase[] = [
  (() => { const g = frameA([-0.8, 4.6], 32); return {
    chip: 'Modulus', cap: CAPD1, title: `|${I('x')}| (modulus)`, f: Math.abs, g, h: hOf(g), ax: { xt: [-4, -2, 2, 4], yt: [1, 2, 3, 4] },
    segs: [[[-4, 4], [0, 0], [4, 4]]], dots: [],
    says: (pts) => { const ys = pts.flat().map((p) => p[1]); return [`A "V" from (−4, 4) through O to (4, 4), never below the x-axis: range [0, ∞)`, Math.min(...ys) === 0 && close(Math.max(...ys), 4)]; },
  }; })(),
  (() => { const g = frameA([-1.8, 1.8], 44); return {
    chip: 'Signum', cap: CAPD1, title: `sgn(${I('x')}) (signum)`, f: sgn, g, h: hOf(g), ax: { xt: [-4, -2, 2, 4], yt: [-1, 1], yRight: ['-1'] },
    segs: [[[-4, -1], [0, -1]], [[0, 1], [4, 1]]], dots: [[0, 1, true], [0, 0, false], [0, -1, true]],
    says: (pts) => { const vals = [...new Set(pts.flat().filter((p) => p[0] !== 0).map((p) => p[1]))].sort(); return ['Three values: −1 for x < 0, 1 for x > 0 (both open at x = 0), and 0 at x = 0, the one filled dot: range {−1, 0, 1}', same(vals, [-1, 1]) && sgn(0) === 0]; },
  }; })(),
  (() => { const g = frameA([-4.7, 4.7], 28); return {
    chip: 'Greatest integer', cap: CAPD1, title: `[${I('x')}] (greatest integer)`, f: Math.floor, g, h: hOf(g), ax: { xt: [-4, -2, 2, 4], yt: [-4, -2, 2, 4], yRight: ['-2'] },
    segs: STEPS.map((n): Seg => [[n, n], [n + 1, n]]), dots: STEPS.flatMap((n): [number, number, boolean][] => [[n, n, false], [n + 1, n, true]]),
    says: (pts, dots) => {
      const ok = pts.every(([a, b]) => Number.isInteger(a[1]) && a[0] === a[1] && b[0] === a[0] + 1 && b[1] === a[1]);
      return ['Eight steps [n, n + 1) at height n for n = −4 to 3, filled at the left end and open at the right: [x] = n there', ok && pts.length === 8 && dots.length === 16];
    },
  }; })(),
  (() => { const g = frameA([-0.45, 1.45], 96, [-4.5, 4.7], 31, 38); return {
    chip: 'Fractional part', cap: CAPD1, title: `{${I('x')}} (fractional part)`, f: (x: number) => x - Math.floor(x), g, h: hOf(g), ax: { xt: [-4, -2, 2, 4], yt: [0.5, 1], text: { '0.5': '0.5', '1': '1.0' }, yAtEdge: 30, xdy: 21 },
    segs: STEPS.map((n): Seg => [[n, 0], [n + 1, 1]]), dots: STEPS.flatMap((n): [number, number, boolean][] => [[n, 0, false], [n + 1, 1, true]]),
    says: (pts) => [`Eight teeth of slope 1 from (n, 0) up to (n + 1, 1), n = −4 to 3: {x} = x − [x] runs over [0, 1), taking 0 and never 1`, pts.length === 8 && pts.every(([a, b]) => a[1] === 0 && b[1] === 1 && b[0] - a[0] === 1)],
  }; })(),
  (() => { const g = frameA([-0.8, 7.6], 32, [-4.7, 2.7], 40); return {
    chip: 'Exponential', cap: CAPD1, title: `${I('e')}<sup>${I('x')}</sup> (exponential)`, f: Math.exp, g, h: hOf(g), ax: { xt: [-4, -2, 2], yt: [2, 4, 6] },
    segs: [sample(Math.exp, -4, 2, 240)], dots: [],
    says: (pts) => { const p = pts.flat(); return [`Always above the x-axis (smallest drawn value ${fmt(Math.min(...p.map((q) => q[1])), 3)} at x = −4), through (0, 1), rising to e² = ${fmt(Math.exp(2))} at x = 2: range (0, ∞)`, p.every((q) => q[1] > 0) && p.slice(1).every((q, i) => q[1] > p[i][1]) && p.some((q) => q[0] === 0 && q[1] === 1)]; },
  }; })(),
  (() => { const g = frameA([-3.6, 2.6], 38, [-1.3, 6.7], 38, 12); return {
    chip: 'Logarithm', cap: CAPD1, title: `ln ${I('x')} (logarithm)`, f: Math.log, g, h: hOf(g), ax: { xt: [2, 4, 6], yt: [-3, -2, -1, 1, 2], yTickLeft: true },
    segs: [Array.from({ length: 241 }, (_, i): P => { const t = -3.2 + ((Math.log(6) + 3.2) * i) / 240; return [Math.exp(t), t]; })], dots: [],
    says: (pts) => { const p = pts.flat(); return [`Only at x > 0 (from x = e⁻³·² ≈ ${fmt(Math.exp(-3.2), 3)}), through (1, 0), rising to ln 6 ≈ ${fmt(Math.log(6))}: the mirror of eˣ in y = x, range ℝ`, p.every((q) => q[0] > 0) && p.slice(1).every((q, i) => q[1] > p[i][1]) && p.some((q) => close(q[0], 1, 1e-9) || (q[0] < 1 && p.some((r) => r[0] > 1))) && close(Math.log(Math.exp(1.7)), 1.7)]; },
  }; })(),
];
const figA: Diagram = {
  id: 'm12-01-05-d1',
  topic: 4,
  name: 'Atlas of standard real functions',
  cases: ACASES,
  draw(c: ACase) {
    const s = new Sketch(W, c.h);
    lab(s, W / 2, 20, c.title, { size: 15 });
    axes(s, c.g, c.ax);
    c.segs.forEach((sg, i) => curve(s, c.g, sg, { color: C.mari, w: 2.2, name: `curve:${i}` }));
    c.dots.forEach(([x, y, open]) => gdot(s, c.g, x, y, open, C.mari));
    return s;
  },
  check(c: ACase) {
    const s = figA.draw(c), out: Check[] = [], pts = curvesBack(s, c.g), dots = DOTS.get(s) ?? [];
    const openAt = (p: P) => dots.some((d) => d.open && close(d.x, p[0]) && close(d.y, p[1]));
    out.push(['Every point of the drawn graph satisfies y = f(x), except the ends marked by an open dot', pts.flat().every((p) => close(p[1], c.f(p[0]), 1e-6) || openAt(p))]);
    out.push([dots.length ? `The dots as printed (${dots.length}): each filled exactly where f takes that value, hollow where it does not` : 'No open or filled dots on this graph, as printed', dots.every((d) => (c.f(d.x) === d.y) === !d.open)]);
    out.push(c.says(pts, dots));
    out.push([`The panel titled "${plain(c.title)}", as printed; axes named x, y and O`, hasLabel(s, plain(c.title)) && ['x', 'y', 'O'].every((t) => hasLabel(s, t))]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 1.6 · y = |x − 2| + 1 from y = |x| (Topic 05, p. 86)           */
/* ===================================================================== */
const CAP16 = 'Graph of <i>y</i> = |<i>x</i> − 2| + 1, obtained from <i>y</i> = |<i>x</i>| by shifting right 2 and up 1 (dashed guides); vertex at (2, 1), arms of slope +1 and −1.';
const f16 = (x: number) => Math.abs(x - 2) + 1;
const G16: Gr = { ox: 12 + 3.2 * 37, oy: 30 + 4.45 * 37, ux: 37, uy: 37, x: [-3.2, 5.2], y: [-0.7, 4.45] };
const fig16: Diagram = {
  id: 'm12-01-fig-1.6',
  topic: 4,
  name: 'Shifting y = |x| to y = |x − 2| + 1',
  cases: [{ chip: 'Shift', cap: CAP16 }],
  draw() {
    const g = G16, s = new Sketch(W, 256);
    axes(s, g, { xt: [-3, -2, -1, 1, 2, 3, 4, 5], yt: [1, 2, 3, 4] });
    // y = |x| dashed, as printed: (−3.2, 3.2) to (4.3, 4.3)
    curve(s, g, [[-3.2, 3.2], [0, 0], [4.3, 4.3]], { color: C.slate, w: 1.6, dash: true, name: 'curve:base' });
    // y = |x − 2| + 1, solid: (−1.3, 4.3) to (4.8, 3.8), as printed
    curve(s, g, [[-1.3, f16(-1.3)], [2, 1], [4.8, f16(4.8)]], { w: 2.4, name: 'curve:shifted' });
    // the two shifts, dashed with heads, the highlight
    arrow(s, gp(g, [0, 0]), gp(g, [2, 0]), { color: C.mari, w: 1.7, dash: true, name: 'shift:right' });
    arrow(s, gp(g, [2, 0]), [gx(g, 2), gy(g, 1) + DOT_R + 1], { color: C.mari, w: 1.7, dash: true, name: 'shift:up' });
    gdot(s, g, 2, 1, false);
    lab(s, gx(g, 2) + 16, gy(g, 1) + 5, '(2, 1)', { anchor: 'start', size: 13.5 });
    lab(s, gx(g, 2) + 8, gy(g, 0.42) + 4, 'then up 1', { anchor: 'start', size: 13, color: C.amber });
    lab(s, gx(g, 1.3), g.oy + 38, 'shift right 2', { size: 13, color: C.amber });
    lab(s, 4, gy(g, 3.69) + 9, `${I('y')} = |${I('x')} − 2| + 1`, { anchor: 'start', size: 12.5 });
    lab(s, 10, gy(g, 1.5) + 5, `${I('y')} = |${I('x')}|`, { anchor: 'start', size: 13, color: C.slate });
    return s;
  },
  check() {
    const s = fig16.draw(fig16.cases[0]), out: Check[] = [], g = G16;
    const [base] = curvesBack(s, g, /^curve:base$/), [sh] = curvesBack(s, g, /^curve:shifted$/);
    out.push(['The dashed curve read back is y = |x| (−3.2 ≤ x ≤ 4.3) and the solid one y = |x − 2| + 1 (−1.3 ≤ x ≤ 4.8), as printed', base.every((p) => close(p[1], Math.abs(p[0]), 1e-6)) && sh.every((p) => close(p[1], f16(p[0]), 1e-6))]);
    out.push(['Every point of y = |x| moved right 2 and up 1 lands on the solid graph: |(x + 2) − 2| + 1 = |x| + 1', Array.from({ length: 41 }, (_, i) => -2 + i * 0.15).every((x) => close(f16(x + 2), Math.abs(x) + 1))]);
    const slope = (a: P, b: P) => (b[1] - a[1]) / (b[0] - a[0]);
    out.push([`The arms' slopes read back: ${fmt(slope(sh[0], sh[1]))} and +${fmt(slope(sh[1], sh[2]))}; the vertex (2, 1) a filled dot, the minimum value 1`, close(slope(sh[0], sh[1]), -1) && close(slope(sh[1], sh[2]), 1) && same(sh[1], [2, 1]) && (DOTS.get(s) ?? []).some((d) => d.x === 2 && d.y === 1 && !d.open)]);
    const [r] = linesNamed(s, /^shift:right$/).map((l) => l.pts.map((p) => unPx(g, p))), [u] = linesNamed(s, /^shift:up$/).map((l) => l.pts.map((p) => unPx(g, p)));
    out.push(['The shifts: (0, 0) to (2, 0) "shift right 2", then (2, 0) up to the vertex "then up 1", as printed', close(r[0][0], 0) && close(r[1][0], 2) && close(r[1][1], 0) && close(u[0][0], 2) && close(u[1][0], 2) && u[1][1] > 0.8 && u[1][1] < 1 && hasLabel(s, 'shift right 2') && hasLabel(s, 'then up 1')]);
    const miss = allLabels(s, ['y = |x − 2| + 1', 'y = |x|', '(2, 1)', '−3', '5', '4', 'x', 'y', 'O']);
    out.push([`The labels as printed: y = |x − 2| + 1, y = |x|, (2, 1), ticks −3 to 5 and 1 to 4${miss.length ? `; missing ${miss.join(', ')}` : ''}`, miss.length === 0]);
    out.push(...layout(s));
    return out;
  },
};

export const DIAGRAMS_MATHEMATICS_12_01: Diagram[] = [fig11, fig12, fig13, fig14, fig15, figA, fig16];
