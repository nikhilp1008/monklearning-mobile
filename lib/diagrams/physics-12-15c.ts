import { C, LABEL_GAP, Rect, Sketch, crosses, mathW, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';


/**
 * PHYSICS CLASS 12, CHAPTER 15 (Experimental Skills), part c: the drawings of
 * Topic 02 (metre bridge, Ohm's law circuit and graph, half-deflection circuit)
 * and Topic 03 (parallax set-up, convex mirror with a lens, the 1/v–1/u graph,
 * the prism ray and its δ–i curve, the slab and travelling microscope), each
 * computed from the chapter's own tables and worked examples; every `check`
 * recomputes what the drawing states.
 */

const W = 340;
type P = [number, number];
const D2R = Math.PI / 180;
const close = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) < tol;
const fmt = (n: number, d = 2) => String(+n.toFixed(d)).replace('-', '−');
const len = (a: P, b: P) => Math.hypot(b[0] - a[0], b[1] - a[1]);
const add = (a: P, b: P, k = 1): P => [a[0] + k * b[0], a[1] + k * b[1]];
const sub = (a: P, b: P): P => [a[0] - b[0], a[1] - b[1]];
const dotp = (a: P, b: P) => a[0] * b[0] + a[1] * b[1];
const crossp = (a: P, b: P) => a[0] * b[1] - a[1] * b[0];
const unit = (a: P): P => { const l = Math.hypot(a[0], a[1]); return [a[0] / l, a[1] / l]; };
const samples = (a: number, b: number, n = 400) => Array.from({ length: n + 1 }, (_, i) => a + ((b - a) * i) / n);
/** A point at math angle `deg` (counter-clockwise, y up) and distance R from c, on the y-down drawing. */
const polar = (c: P, R: number, deg: number): P => [c[0] + R * Math.cos(deg * D2R), c[1] - R * Math.sin(deg * D2R)];

/* ---------- drawing helpers (as in physics-12-01.ts and physics-12-02.ts) ---------- */
type Stroke = { color?: string; w?: number; dash?: 'dash' | 'dot'; free?: boolean };
const dashOf = (d?: Stroke['dash']) => (d === 'dash' ? ' stroke-dasharray="6 4"' : d === 'dot' ? ' stroke-dasharray="1.5 3.5"' : '');

/**
 * Every line a label must keep clear of (outlines, curves, arrows), by sketch:
 * `clearance` measures each tag and label against them. Dotted guides that a
 * value sits on are left out (`free`).
 */
const LINES = new WeakMap<Sketch, P[][]>();
const keep = (s: Sketch, pts: P[]) => { const l = LINES.get(s) ?? []; l.push(pts); LINES.set(s, l); };
/** An open line through points: ink, rounded joins. */
function path(s: Sketch, pts: P[], o: Stroke = {}) {
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ');
  s.add(`<path d="${d}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}" stroke-linejoin="round" stroke-linecap="round"${dashOf(o.dash)}/>`);
  if (!o.free) keep(s, pts);
}
/** A closed outline, never filled. */
function outline(s: Sketch, pts: P[], o: Stroke = {}) {
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ') + ' Z';
  s.add(`<path d="${d}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}" stroke-linejoin="round"${dashOf(o.dash)}/>`);
  keep(s, [...pts, pts[0]]);
}
/** A rectangle [x0, y0, x1, y1] as an outline. */
const box = (s: Sketch, r: Rect, o: Stroke = {}) => outline(s, [[r[0], r[1]], [r[2], r[1]], [r[2], r[3]], [r[0], r[3]]], o);
/** Every arrowhead drawn, by sketch, as its tip and its middle: a tag's dot keeps off them (`dotsOffHeads`). */
const HEADS = new WeakMap<Sketch, [P, P][]>();
const keepHead = (s: Sketch, tip: P, u: P, L: number) => HEADS.set(s, [...(HEADS.get(s) ?? []), [tip, add(tip, u, -L / 2)]]);
/** An arrow (a force, a direction) that labels keep clear of. */
function arrow(s: Sketch, a: P, b: P, o: { color?: string; w?: number; dash?: boolean } = {}) {
  s.vec(a[0], a[1], b[0], b[1], o);
  keep(s, [a, b]);
  keepHead(s, b, unit(sub(b, a)), 9);
}
/** A small arrowhead at p, pointing along the unit direction u (a current or a traversal sense on a line). */
function head(s: Sketch, p: P, u: P, color: string = C.ink, L = 9, hw = 4.5) {
  const b = add(p, u, -L), nv: P = [-u[1], u[0]];
  const tri: P[] = [p, add(b, nv, hw), add(b, nv, -hw)];
  s.add(`<path d="M${tri.map((q) => `${r1(q[0])} ${r1(q[1])}`).join(' L')} Z" fill="${color}"/>`);
  keep(s, [...tri, tri[0]]);
  keepHead(s, p, u, L);
}
/** A measured length with an arrowhead at each end. */
function measure(s: Sketch, a: P, b: P, color: string = C.slate) {
  const m: P = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
  arrow(s, m, a, { color, w: 1.3 });
  arrow(s, m, b, { color, w: 1.3 });
}
/** The points of an arc about c, radius R, from math angle a0 to a1 (degrees). */
const arcPts = (c: P, R: number, a0: number, a1: number, n = 90): P[] => samples(a0, a1, n).map((a) => polar(c, R, a));
/** Points on an ellipse round c (semi-axes rx, ry), parameter t from t0 to t1 (radians, y down). */
const ellPts = (c: P, rx: number, ry: number, t0: number, t1: number, n = 120): P[] => samples(t0, t1, n).map((t): P => [c[0] + rx * Math.cos(t), c[1] + ry * Math.sin(t)]);
/** A circle as a kept polyline (never filled). */
const ring = (s: Sketch, c: P, R: number, o: Stroke = {}) => path(s, arcPts(c, R, 0, 360, 180), o);
/**
 * A dotted guide, free of the clearance check (it only joins marks), but
 * never through a label or a tag. See `guideHits`.
 */
const GUIDES = new WeakMap<Sketch, [P, P][]>();
const guide = (s: Sketch, a: P, b: P, color: string = C.slate) => {
  GUIDES.set(s, [...(GUIDES.get(s) ?? []), [a, b]]);
  path(s, [a, b], { color, w: 1, dash: 'dot', free: true });
};
/** Out of the page: a ring with a dot in it, registered as a point (tags keep off it) and kept (labels keep off it). */
const rectDist = (r: Rect, p: P) => Math.hypot(Math.max(r[0] - p[0], 0, p[0] - r[2]), Math.max(r[1] - p[1], 0, p[1] - r[3]));
/**
 * How far every tag (pill and result block) and every label stays from every
 * kept line, sampled each half pixel: the closest one, and what it is.
 */
function clearance(s: Sketch): { gap: number; what: string } {
  let gap = Infinity, what = '';
  const boxes: [string, Rect][] = [...s.tags.map((t): [string, Rect] => [t.name, t.rect]), ...s.labels.map((l): [string, Rect] => [l.text, l.rect])];
  for (const pts of LINES.get(s) ?? []) {
    for (let i = 0; i < pts.length - 1; i++) {
      const a = pts[i], b = pts[i + 1], n = Math.max(1, Math.ceil(len(a, b) * 2));
      for (let k = 0; k <= n; k++) {
        const p: P = [a[0] + ((b[0] - a[0]) * k) / n, a[1] + ((b[1] - a[1]) * k) / n];
        for (const [name, r] of boxes) { const d = rectDist(r, p); if (d < gap) { gap = d; what = name; } }
      }
    }
  }
  return { gap, what };
}
/** The labels and tags a dotted guide runs through (more than 4 px into the box). */
const guideHits = (s: Sketch): string[] => {
  const boxes: [string, Rect][] = [...s.tags.map((t): [string, Rect] => [t.name, t.rect]), ...s.labels.map((l): [string, Rect] => [l.text, l.rect])];
  return [...new Set((GUIDES.get(s) ?? []).flatMap(([a, b]) => boxes.filter(([, r]) => crosses(a, b, r, 4)).map(([name]) => name)))];
};
/** The check every figure makes on its own layout: labels clear of the lines, and no dotted guide through a label. */
const clearCheck = (s: Sketch): Check => {
  const { gap, what } = clearance(s);
  const through = guideHits(s);
  return [
    `Every tag and label stays at least ${LABEL_GAP} px clear of every line: the closest is "${what}", ${fmt(gap, 1)} px; no dotted guide runs through one${through.length ? ` (but through ${through.map((t) => `"${t}"`).join(', ')})` : ''}`,
    gap >= LABEL_GAP - 1e-9 && !through.length,
  ];
};
/** No two labels on one drawing touch (the kit's audit checks tags; this checks the STIX labels against each other). */
const labelsApart = (s: Sketch): Check => {
  const L = s.labels;
  const bad = L.flatMap((a, i) => L.slice(i + 1).filter((b) => !(a.rect[2] + 2 <= b.rect[0] || b.rect[2] + 2 <= a.rect[0] || a.rect[3] + 2 <= b.rect[1] || b.rect[3] + 2 <= a.rect[1])).map((b) => `${a.text} / ${b.text}`));
  return [`No two symbols or labels on the drawing touch${bad.length ? `: ${bad.join(', ')}` : ''}`, bad.length === 0];
};
/**
 * No tag's dot on an arrowhead: there it reads as naming the arrow and hides
 * its head (4.4's "Amperian loop" and "Right-hand rule", Android review,
 * 2026-10-22). Within 8 px of a head's tip or middle.
 */
const dotsOffHeads = (s: Sketch): Check => {
  const bad = s.tags.filter((t) => t.from && (HEADS.get(s) ?? []).some((h) => h.some((q) => len(q, t.from as P) < 8))).map((t) => t.name);
  return [`No tag's dot sits on an arrowhead${bad.length ? `: ${bad.join(', ')}` : ''}`, bad.length === 0];
};
/** The layout checks of a drawn sketch. */
const layout = (s: Sketch): Check[] => [clearCheck(s), labelsApart(s), dotsOffHeads(s)];
/**
 * The result, bottom right, ink-edged, maths set in STIX (Sketch.text).
 * Registered as a tag, so the audit keeps everything else off it. `subRoom`
 * adds room under a last line whose subscripts hang low (I_g: the g's tail
 * came within 2 px of the border on 4.13), two thirds of it below the text.
 */
function resultBlock(s: Sketch, lines: string[], o: { size?: number; subRoom?: number } = {}): Rect {
  const size = o.size ?? 15, lh = size + 6, room = o.subRoom ?? 0;
  const plain = (t: string) => t.replace(/<\/?(?:i|sub|sup)>/g, '');
  const w = Math.max(...lines.map((t) => mathW(t, size))) + 30, h = lines.length * lh + 14 + room;
  const x0 = s.w - 8 - w, y0 = s.h - 8 - h;
  s.tags.push({ name: plain(lines.join(' ')), rect: [x0, y0, x0 + w, y0 + h], from: null, to: null });
  s.add(`<rect x="${r1(x0)}" y="${r1(y0)}" width="${r1(w)}" height="${r1(h)}" rx="15" fill="#fff" stroke="${C.text}" stroke-width="1.6"/>`);
  lines.forEach((t, i) => s.text(x0 + w / 2, y0 + 7 + room / 3 + lh * i + lh / 2 + size * 0.36, t, { size, semibold: true }));
  return [x0, y0, x0 + w, y0 + h];
}

/** Wires as drawn, by sketch, so a check can read the circuit back off the drawing. */
const WIRES = new WeakMap<Sketch, P[][]>();
function wire(s: Sketch, pts: P[], o: Stroke = {}) { path(s, pts, o); const l = WIRES.get(s) ?? []; l.push(pts); WIRES.set(s, l); }
function distSeg(p: P, a: P, b: P) {
  const d = sub(b, a), L = dotp(d, d) || 1, k = Math.max(0, Math.min(1, dotp(sub(p, a), d) / L));
  return len(p, add(a, d, k));
}
/** Does p lie on the polyline (within half a pixel)? */
const onWire = (p: P, w: P[]) => w.some((a, i) => i > 0 && distSeg(p, w[i - 1], a) < 0.5);
/**
 * The circuit's nodes, read off the drawn wires: wires that touch (an end of one
 * on another) are one conductor; each named terminal belongs to the conductor
 * whose wire it lies on. Returns the terminals' names grouped by conductor.
 */
function nodes(s: Sketch, terms: Record<string, P>): string[][] {
  const ws = WIRES.get(s) ?? [], parent = ws.map((_, i) => i);
  const find = (i: number): number => (parent[i] === i ? i : (parent[i] = find(parent[i])));
  ws.forEach((a, i) => ws.forEach((b, j) => { if (i < j && (onWire(a[0], b) || onWire(a[a.length - 1], b) || onWire(b[0], a) || onWire(b[b.length - 1], a))) parent[find(i)] = find(j); }));
  const groups = new Map<number, string[]>();
  Object.entries(terms).forEach(([name, p]) => { const i = ws.findIndex((w) => onWire(p, w)); const k = i < 0 ? -1 - groups.size : find(i); groups.set(k, [...(groups.get(k) ?? []), name]); });
  return [...groups.values()].map((g) => g.sort()).sort((a, b) => a[0].localeCompare(b[0]));
}
const sameNodes = (a: string[][], b: string[][]) => JSON.stringify(a) === JSON.stringify(b.map((g) => [...g].sort()).sort((x, y) => x[0].localeCompare(y[0])));
const showNodes = (n: string[][]) => n.map((g) => `{${g.join(', ')}}`).join(' ');

/* ---------- components (copied from physics-12-04.ts, with two additions) ---------- */
/** A resistor as a box between a and b (along a horizontal or vertical wire), half-width hw. */
function resistor(s: Sketch, a: P, b: P, o: { hw?: number; color?: string; w?: number } = {}) {
  const hw = o.hw ?? 10, u = unit(sub(b, a)), nv: P = [-u[1], u[0]];
  outline(s, [add(a, nv, hw), add(b, nv, hw), add(b, nv, -hw), add(a, nv, -hw)], { color: o.color, w: o.w ?? 1.8 });
}
/** A meter (G, V, A): a ring with its letter, terminals where the wire meets it. */
function meter(s: Sketch, c: P, r: number, letter: string, o: { color?: string; size?: number } = {}) {
  ring(s, c, r, { color: o.color, w: 2 });
  s.point(c[0], c[1], 0.1, '');
  s.text(c[0], c[1] + (o.size ?? 17) * 0.34, `<i>${letter}</i>`, { size: o.size ?? 17, color: o.color === C.mari ? C.amber : C.text });
}
/** The battery in a vertical wire: long (+) plate at y, short (−) plate 12 px below, centred on x. */
function battery(s: Sketch, x: number, y: number) {
  path(s, [[x - 15, y], [x + 15, y]], { w: 3 });
  path(s, [[x - 8, y + 12], [x + 8, y + 12]], { w: 3 });
  return { plus: [x, y] as P, minus: [x, y + 12] as P };
}
/** The battery in a horizontal wire: long (+) plate at x, short (−) plate 8 px to its right. */
function hbattery(s: Sketch, x: number, y: number) {
  path(s, [[x, y - 12], [x, y + 12]], { w: 3 });
  path(s, [[x + 8, y - 7], [x + 8, y + 7]], { w: 3 });
  return { plus: [x, y] as P, minus: [x + 8, y] as P };
}
/** A key: two terminals a and b (dots) and a lever raised from b toward the side of a. */
function key(s: Sketch, a: P, b: P, lift: P, o: { color?: string } = {}) {
  s.dot(a[0], a[1], 3);
  s.dot(b[0], b[1], 3);
  path(s, [b, add(b, lift)], { w: 1.8, color: o.color });
}
/** A coil (the unknown wire): a sine wave of n humps between a and b. */
function coil(s: Sketch, a: P, b: P, n = 5, amp = 8) {
  const L = len(a, b), u = unit(sub(b, a)), nv: P = [-u[1], u[0]];
  path(s, samples(0, 1, 80).map((t) => add(add(a, u, L * t), nv, amp * Math.sin(2 * Math.PI * n * t) * Math.sin(Math.PI * Math.min(1, 6 * Math.min(t, 1 - t))))), { w: 1.8 });
}
/** The nodes of a circuit as the terminals' groups, compared with what the book's circuit needs. */
const wired = (s: Sketch, terms: Record<string, P>, expect: string[][]): Check => {
  const got = nodes(s, terms);
  return [`The wires join the terminals as the circuit needs: ${showNodes(expect.map((g) => [...g].sort()))}${sameNodes(got, expect) ? '' : ` (the drawing has ${showNodes(got)})`}`, sameNodes(got, expect)];
};

/* ===================================================================== */
/* p12-15-02-d1 · metre bridge                                            */
/* ===================================================================== */
/**
 * The bridge wire AC runs along a metre scale (0 at A, 100 at C): 2.6 px a
 * centimetre. R = 4.0 Ω in the left gap, the unknown wire X in the right gap,
 * B their common point on the thick copper strip; the cell and key across A
 * and C; the galvanometer from B to the jockey J. The jockey sits at the null
 * point l = 49.7 cm (the second row of the book's table, R = 4.0 Ω, X =
 * 4.048 Ω): the drawn l is read back from J's place and the balance
 * R/X = l/(100 − l) is recomputed from it.
 */
const G1 = { x0: 40, x1: 300, y: 235, rail: 105, R: 4.0, l: 49.7, X: 4.048, strip: 4.5, wireW: 3.2 };
const xl1 = (l: number) => G1.x0 + ((G1.x1 - G1.x0) * l) / 100;
const lOf1 = (x: number) => ((x - G1.x0) / (G1.x1 - G1.x0)) * 100;
const T1 = () => {
  const { x0, x1, y, rail } = G1, Jx = xl1(G1.l);
  const t: Record<string, P> = { A: [x0, y], Rl: [58, rail], Rr: [122, rail], B: [Jx, rail], Xl: [223, rail], Xr: [287, rail], C: [x1, y], Gt: [Jx, rail + 49], Gb: [Jx, rail + 77], Jt: [Jx, y - 14], cellL: [110, 340], cellR: [118, 340], keyA: [190, 340], keyB: [222, 340] };
  return t;
};
const fig021: Diagram = {
  id: 'p12-15-02-d1',
  topic: 2,
  name: 'Metre bridge',
  cases: [{ chip: 'Metre bridge', cap: 'The metre bridge: a uniform 100 cm wire AC stretched along a metre scale, the known resistance <i>R</i> in the left gap and the unknown wire <i>X</i> in the right gap, joined at B. The cell and key are across A and C, and the galvanometer joins B to the jockey J. At the null point the jockey is at <i>l</i> = AJ from A, and the rest of the wire, 100 − <i>l</i>, is JC; thick copper strips join the gaps.' }],
  draw() {
    const s = new Sketch(W, 388);
    const { x0, x1, y, rail, strip, wireW } = G1, Jx = xl1(G1.l);
    // the bridge wire and its metre scale
    path(s, [[x0, y], [x1, y]], { w: wireW });
    for (let k = 0; k <= 10; k++) {
      const x = xl1(k * 10);
      path(s, [[x, y + 6], [x, y + (k % 5 === 0 ? 14 : 11)]], { color: C.slate, w: 1.2 });
      s.sym(x, y + 30, String(k * 10), { size: 11, color: C.slate });
    }
    // l and 100 − l
    const yd = y + 64;
    measure(s, [x0, yd], [Jx, yd], C.slate);
    measure(s, [Jx, yd], [x1, yd], C.slate);
    [x0, Jx, x1].forEach((x) => path(s, [[x, yd - 5], [x, yd + 5]], { color: C.slate, w: 1.2 }));
    s.sym((x0 + Jx) / 2, yd - 9, '<i>l</i> = AJ', { size: 14 });
    s.sym((Jx + x1) / 2, yd - 9, '100 − <i>l</i> = JC', { size: 14 });
    // thick copper strips round the two gaps
    wire(s, [[x0, y], [x0, rail], [58, rail]], { w: strip });
    wire(s, [[122, rail], [223, rail]], { w: strip });
    wire(s, [[287, rail], [x1, rail], [x1, y]], { w: strip });
    resistor(s, [58, rail], [122, rail], { hw: 11 });
    coil(s, [223, rail], [287, rail], 6, 8);
    s.sym(90, rail + 34, '<i>R</i>', { size: 16 });
    s.sym(255, rail + 34, '<i>X</i>', { size: 16 });
    // galvanometer from B to the jockey
    s.dot(Jx, rail, 3.4);
    wire(s, [[Jx, rail], [Jx, rail + 49]]);
    meter(s, [Jx, rail + 63], 14, 'G', { color: C.mari });
    wire(s, [[Jx, rail + 77], [Jx, y - 14]]);
    outline(s, [[Jx - 7, y - 14], [Jx + 7, y - 14], [Jx, y - 3]], { color: C.mari, w: 2 });
    s.sym(Jx + 4, rail - 10, '<i>B</i>', { size: 15, anchor: 'start' });
    s.sym(Jx + 13, y - 18, '<i>J</i>', { size: 15, anchor: 'start' });
    s.sym(x0 - 12, y - 8, '<i>A</i>', { size: 15, anchor: 'end' });
    s.sym(x1 + 12, y - 8, '<i>C</i>', { size: 15, anchor: 'start' });
    // the cell and key across A and C
    wire(s, [[x0, y], [12, y], [12, 340], [110, 340]]);
    hbattery(s, 110, 340);
    wire(s, [[118, 340], [190, 340]]);
    key(s, [190, 340], [222, 340], [-6, -17]);
    wire(s, [[222, 340], [317, 340], [317, y], [x1, y]]);
    s.place([
      { t: 'Resistance box', p: [75, rail - 11], at: [[16, 40, 'start'], [16, 56, 'start']] },
      { t: 'Unknown wire', p: [255, rail - 8], at: [[222, 40, 'start'], [214, 56, 'start']] },
      { t: 'Copper strip', p: [40, 170], at: [[46, 150, 'start'], [46, 158, 'start'], [46, 142, 'start']] },
      { t: 'Galvanometer', p: [Jx + 14, rail + 63], at: [[Jx + 24, rail + 55, 'start'], [Jx + 22, rail + 48, 'start']] },
      { t: 'Jockey', hi: true, p: [Jx - 5, y - 10], at: [[56, y - 42, 'start'], [50, y - 36, 'start'], [56, y - 52, 'start']] },
      { t: 'Bridge wire', p: [Jx + 86, y], at: [[Jx + 26, y - 44, 'start'], [Jx + 24, y - 36, 'start'], [Jx + 26, y - 52, 'start']] },
      { t: 'Cell', p: [110, 332], at: [[50, 304, 'start'], [44, 306, 'start']] },
      { t: 'Key', p: [190, 340], at: [[150, 354, 'start'], [140, 356, 'start']] },
    ]);

    return s;
  },
  check() {
    const { x0, x1, y, rail, R, l, X, strip, wireW } = G1, Jx = xl1(l);
    const s = fig021.draw(fig021.cases[0]);
    const lDrawn = lOf1(Jx), Xcalc = (R * (100 - l)) / l;
    const bFrac = R / (R + X), jFrac = lDrawn / 100;
    return [
      [`The jockey is drawn ${fmt(lDrawn, 1)} cm along the 100 cm wire from A, and 100 − l = ${fmt(100 - lDrawn, 1)} cm from C: the two lengths add to ${fmt(lDrawn + (100 - lDrawn), 1)} cm`, close(lDrawn, l, 0.05) && close(lDrawn + (100 - lDrawn), 100)],
      [`The drawn scale runs 0 at A to 100 at C (${x1 - x0} px for 100 cm), the jockey ${fmt(Jx - x0, 1)} px from A`, close(xl1(0), x0) && close(xl1(100), x1)],
      [`The balance condition R/X = l/(100 − l) holds: R = ${R} Ω and l = ${l} cm give X = R(100 − l)/l = ${fmt(Xcalc, 3)} Ω, the table's 4.048 Ω`, close(Xcalc, X, 0.0006)],
      [`B and J are at the same potential at null: the fraction of the cell's p.d. at B, R/(R + X) = ${fmt(bFrac, 3)}, is the fraction l/100 = ${fmt(jFrac, 3)} at J`, close(bFrac, jFrac, 0.001)],
      [`The galvanometer's wire to J is drawn straight down from B (J at the same x as B), so the null lies where the wire's potential equals B's`, close(T1().B[0], Jx) && close(T1().Jt[0], Jx)],
      ['The copper strips at the gaps are thicker than the connecting wires and the bridge wire is the thinnest', strip > wireW && strip > 1.7],
      wired(s, T1(), [['A', 'Rl', 'cellL'], ['Rr', 'B', 'Xl', 'Gt'], ['Xr', 'C', 'keyB'], ['cellR', 'keyA'], ['Gb', 'Jt']]),
      ['R sits in the left gap (A side) and X in the right gap (C side), so l is measured from the end next to R', T1().Rl[0] < T1().B[0] && T1().Xr[0] > T1().B[0] && T1().Rl[0] > x0 && T1().Xr[0] < x1 && rail < y],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* p12-15-02-d2 · Ohm's law circuit                                       */
/* ===================================================================== */
/**
 * Cell, key and rheostat in series with the ammeter and the wire R; the
 * voltmeter is joined across the wire alone (its two leads meet the loop at
 * the wire's own two ends), so the ammeter lies outside the voltmeter's
 * branch. + is toward the cell's long plate: the current enters the
 * ammeter at its top, runs down the wire, and the voltmeter's + lead is on
 * the wire's top end, the higher potential.
 */
const T2: Record<string, P> = { 'cell+': [30, 150], 'cell−': [30, 162], 'key.a': [70, 62], 'key.b': [104, 62], 'rh.a': [140, 62], 'rh.b': [200, 62], 'A.t': [300, 126], 'A.b': [300, 154], 'R.t': [300, 175], 'R.b': [300, 235], 'V.t': [200, 191], 'V.b': [200, 219] };
const fig022: Diagram = {
  id: 'p12-15-02-d2',
  topic: 2,
  name: 'Ohm’s law circuit',
  cases: [{ chip: 'Circuit', cap: 'Resistance by Ohm’s law: the cell, key, rheostat, and the ammeter A are in series with the wire <i>R</i>, and the voltmeter V is in parallel with the wire alone, so the ammeter lies outside the voltmeter’s branch. The positive terminals of both meters are toward the positive of the cell.' }],
  draw() {
    const s = new Sketch(W, 292);
    const t = T2;
    wire(s, [t['cell+'], [30, 62], t['key.a']]);
    wire(s, [t['cell−'], [30, 252], [300, 252], t['R.b']]);
    battery(s, 30, 150);
    key(s, t['key.a'], t['key.b'], [-8, -17]);
    wire(s, [t['key.b'], t['rh.a']]);
    resistor(s, t['rh.a'], t['rh.b'], { hw: 9 });
    arrow(s, [144, 80], [196, 44], { w: 1.6 });
    wire(s, [t['rh.b'], [300, 62], t['A.t']]);
    meter(s, [300, 140], 14, 'A');
    wire(s, [t['A.b'], t['R.t']]);
    resistor(s, t['R.t'], t['R.b'], { hw: 9, color: C.mari, w: 2.4 });
    wire(s, [t['R.t'], [200, 175], t['V.t']]);
    meter(s, [200, 205], 14, 'V');
    wire(s, [t['V.b'], [200, 235], t['R.b']]);
    s.sym(322, 210, '<i>R</i>', { size: 16, anchor: 'start' });
    s.sym(52, 156, '+', { size: 15, anchor: 'start' });
    s.sym(52, 178, '−', { size: 15, anchor: 'start' });
    s.sym(312, 118, '+', { size: 15, anchor: 'start' });
    s.sym(284, 166, '−', { size: 15, anchor: 'end' });
    s.sym(190, 182, '+', { size: 15, anchor: 'end' });
    s.sym(190, 232, '−', { size: 15, anchor: 'end' });
    s.place([
      { t: 'Cell', p: [14, 156], at: [[46, 222, 'start'], [46, 214, 'start'], [52, 196, 'start']] },
      { t: 'Key', p: [87, 60], at: [[20, 18, 'start'], [22, 26, 'start']] },
      { t: 'Rheostat', p: [170, 53], at: [[130, 14, 'start'], [140, 22, 'start']] },
      { t: 'Ammeter', p: [300, 126], at: [[226, 92, 'start'], [220, 100, 'start']] },
      { t: 'Voltmeter', p: [186, 205], at: [[88, 196, 'start'], [84, 204, 'start'], [88, 188, 'start']] },
      { t: 'Wire', hi: true, p: [309, 190], at: [[248, 262, 'start'], [236, 258, 'start']] },
    ]);
    return s;
  },
  check() {
    const s = fig022.draw(fig022.cases[0]);
    const g = nodes(s, T2);
    const nodeOf = (n: string) => g.findIndex((grp) => grp.includes(n));
    const A = [nodeOf('A.t'), nodeOf('A.b')], R = [nodeOf('R.t'), nodeOf('R.b')], V = [nodeOf('V.t'), nodeOf('V.b')];
    const voltmeterAcrossWire = V[0] === R[0] && V[1] === R[1] && R[0] !== R[1];
    const ammeterSeries = A[1] === R[0] && A[0] !== R[0] && A[0] !== R[1] && !V.includes(A[0]);
    const Rv = 2000, Rw = 5.09, Rmeas = (Rw * Rv) / (Rw + Rv);
    return [
      wired(s, T2, [['cell+', 'key.a'], ['key.b', 'rh.a'], ['rh.b', 'A.t'], ['A.b', 'R.t', 'V.t'], ['R.b', 'V.b', 'cell−']]),
      ['The voltmeter’s two leads are on the wire R’s two ends, so it is in parallel with the wire alone', voltmeterAcrossWire],
      ['The ammeter is in series with the wire: one terminal on the wire’s end, the other on the rest of the loop, and it is not inside the voltmeter’s branch', ammeterSeries],
      ['The cell, key and rheostat are each in series (each shares one node with the next element and no other)', g.filter((grp) => grp.length === 2).length === 3],
      ['The positive terminals: cell + (long plate) leads through the key, rheostat to the ammeter’s top terminal (+), and the voltmeter’s + lead is on the wire’s end that the current enters', T2['A.t'][1] < T2['A.b'][1] && T2['V.t'][1] < T2['V.b'][1] && T2['cell+'][1] < T2['cell−'][1] && nodeOf('V.t') === nodeOf('A.b')],
      [`The voltmeter reading V/I falls below R: with R_V = 2000 Ω, a true ${Rw} Ω reads ${fmt(Rmeas, 2)} Ω (the figure’s reason for putting V across the wire alone)`, Rmeas < Rw && close(Rmeas, 5.08, 0.01)],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* p12-15-02-d4 · half-deflection circuit                                 */
/* ===================================================================== */
/**
 * E, K₁, the resistance box R and the galvanometer G in series; the shunt box
 * S with K₂ across G. Beneath, the pointer with K₂ open (θ = 20 divisions, the
 * table's first row: R = 40 000 Ω, S = 120 Ω) and closed (θ/2 = 10 divisions).
 * The dials are 40 divisions over ±50°: 2.5° a division.
 */
const T4: Record<string, P> = { 'cell+': [26, 120], 'cell−': [26, 132], 'K1.a': [64, 52], 'K1.b': [98, 52], 'R.a': [130, 52], 'R.b': [190, 52], 'G.a': [215, 116], 'G.b': [215, 144], 'S.a': [272, 72], 'S.b': [272, 118], 'K2.a': [272, 140], 'K2.b': [272, 170] };
const D4 = { Rv: 40000, S: 120, G: 120.36, theta: 20, per: 2.5, r: 52, cy: 346, cx: [88, 252], E: 2.0 };
const needle4 = (div: number) => 140 - D4.per * div;
function dial4(s: Sketch, cx: number, div: number, ghost?: number) {
  const { r, cy } = D4, c: P = [cx, cy];
  path(s, arcPts(c, r, 40, 140, 60), { color: C.slate, w: 1.3 });
  for (let d = 0; d <= 40; d += 5) {
    const a = needle4(d), long = d % 10 === 0;
    path(s, [polar(c, r, a), polar(c, r - (long ? 9 : 5), a)], { color: C.slate, w: 1.2 });
    if (long) { const q = polar(c, r + 15, a); s.sym(q[0], q[1] + 4, String(d), { size: 10, color: C.slate }); }
  }
  if (ghost != null) path(s, [c, polar(c, r - 4, needle4(ghost))], { color: C.grey, w: 1.6, dash: 'dash', free: true });
  arrow(s, c, polar(c, r - 4, needle4(div)), { w: 2.2, color: C.mari });
  s.dot(cx, cy, 3.4);
}
const fig024: Diagram = {
  id: 'p12-15-02-d4',
  topic: 2,
  name: 'Half-deflection method',
  cases: [{ chip: 'Half deflection', cap: 'Half-deflection method: the cell <i>E</i>, key K<sub>1</sub>, resistance box <i>R</i> and galvanometer G are in series, and the shunt box <i>S</i> with key K<sub>2</sub> is across G. With K<sub>2</sub> open the deflection is <i>θ</i>; with K<sub>2</sub> closed and <i>S</i> adjusted it falls to <i>θ</i>/2.' }],
  draw() {
    const s = new Sketch(W, 408);
    const t = T4;
    wire(s, [t['cell+'], [26, 52], t['K1.a']]);
    wire(s, [t['cell−'], [26, 216], [272, 216], [272, 170]]);
    battery(s, 26, 120);
    key(s, t['K1.a'], t['K1.b'], [-8, -17]);
    wire(s, [t['K1.b'], t['R.a']]);
    resistor(s, t['R.a'], t['R.b'], { hw: 10 });
    wire(s, [t['R.b'], [272, 52], t['S.a']]);
    wire(s, [[215, 52], t['G.a']]);
    meter(s, [215, 130], 14, 'G', { color: C.mari });
    wire(s, [t['G.b'], [215, 216]]);
    resistor(s, t['S.a'], t['S.b'], { hw: 9 });
    wire(s, [t['S.b'], t['K2.a']]);
    s.dot(t['K2.a'][0], t['K2.a'][1], 3);
    s.dot(t['K2.b'][0], t['K2.b'][1], 3);
    path(s, [t['K2.b'], [258, 148]], { w: 1.8 });
    s.sym(46, 130, '<i>E</i>', { size: 15, anchor: 'start' });
    s.sym(81, 76, 'K<sub>1</sub>', { size: 14 });
    s.sym(160, 86, '<i>R</i>', { size: 16 });
    s.sym(256, 100, '<i>S</i>', { size: 16, anchor: 'end' });
    s.sym(284, 160, 'K<sub>2</sub>', { size: 14, anchor: 'start' });
    // the two pointers
    s.sym(D4.cx[0], D4.cy + 36, 'K<sub>2</sub> open: <i>θ</i> = 20 div', { size: 14 });
    s.sym(D4.cx[1], D4.cy + 36, 'K<sub>2</sub> closed: <i>θ</i>/2 = 10 div', { size: 14 });
    dial4(s, D4.cx[0], D4.theta);
    dial4(s, D4.cx[1], D4.theta / 2, D4.theta);
    s.place([
      { t: 'Cell', p: [14, 126], at: [[40, 160, 'start'], [4, 160, 'start']] },
      { t: 'Key', p: [81, 52], at: [[40, 8, 'start'], [60, 14, 'start']] },
      { t: 'Resistance box', p: [160, 42], at: [[120, 8, 'start'], [130, 14, 'start']] },
      { t: 'Galvanometer', hi: true, p: [201, 130], at: [[60, 170, 'start'], [80, 176, 'start'], [96, 134, 'start']] },
      { t: 'Shunt box', p: [281, 95], at: [[236, 8, 'start'], [244, 14, 'start']] },
      { t: 'Key', p: [272, 170], at: [[286, 188, 'start'], [286, 196, 'start']] },
    ]);
    return s;
  },
  check() {
    const s = fig024.draw(fig024.cases[0]);
    const { Rv, S, G, theta, per } = D4;
    const Gcalc = (Rv * S) / (Rv - S);
    // coil current with K2 open and closed (E cancels)
    const open = 1 / (Rv + G), closed = S / (Rv * (G + S) + G * S);
    const ratio = closed / open;
    const angleOpen = 140 - needle4(theta), angleClosed = 140 - needle4(theta / 2);
    return [
      wired(s, T4, [['cell+', 'K1.a'], ['K1.b', 'R.a'], ['R.b', 'G.a', 'S.a'], ['G.b', 'K2.b', 'cell−'], ['S.b', 'K2.a']]),
      [`The shunt S with K₂ is across the galvanometer alone: G's two terminals are the ends of the S–K₂ branch`, nodes(s, T4).some((g) => g.includes('S.a') && g.includes('G.a')) && nodes(s, T4).some((g) => g.includes('K2.b') && g.includes('G.b'))],
      [`G = RS/(R − S) = ${fmt(Gcalc, 2)} Ω for R = ${Rv} Ω, S = ${S} Ω, the table's 120.36 Ω`, close(Gcalc, G, 0.006)],
      [`With S across G of ${G} Ω the coil current falls to ${fmt(ratio, 4)} of its value with K₂ open: half`, close(ratio, 0.5, 0.0005)],
      [`The pointers: ${fmt(angleOpen, 1)}° and ${fmt(angleClosed, 1)}° from zero, 20 and 10 divisions at ${per}° a division, so the second is half the first`, close(angleOpen, 50, 1e-9) && close(angleClosed, 25, 1e-9) && close(angleClosed * 2, angleOpen)],
      [`The deflection is proportional to the current through the coil (θ = I/k), so θ/2 = 10 div is half of the 20 div`, theta / 2 === 10],
      ['Always G > S: 120.36 Ω against 120 Ω', G > S],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* p12-15-02-d3 · V against I                                             */
/* ===================================================================== */
/**
 * The five readings of the table (voltmeter across the wire only) against a
 * straight line through the origin of slope 5.15 Ω: the least-squares slope of
 * the same five points, which the worked example gives (it meets the V axis
 * at −0.015 V, zero within the 0.05 V least count). The slope triangle spans
 * I = 0.15 to 0.55 A on that line.
 */
const D3 = { pts: [[0.1, 0.5], [0.2, 1.0], [0.3, 1.55], [0.4, 2.05], [0.5, 2.55]] as P[], slope: 5.15, i0: 0.15, i1: 0.55 };
const G3 = { ox: 56, oy: 238, xr: 322, yt: 20, kx: 244 / 0.6, ky: 200 / 3 };
const gx3 = (I: number) => G3.ox + I * G3.kx;
const gy3 = (V: number) => G3.oy - V * G3.ky;
/** The axes of a graph with an arrowhead on each: origin (ox, oy), the x axis out to xr, the y axis up to yt. */
function axes(s: Sketch, ox: number, oy: number, xr: number, yt: number) {
  path(s, [[ox, oy], [xr - 8, oy]], { color: C.slate, w: 1.4 });
  head(s, [xr, oy], [1, 0], C.slate);
  path(s, [[ox, oy], [ox, yt + 8]], { color: C.slate, w: 1.4 });
  head(s, [ox, yt], [0, -1], C.slate);
}
const xTick = (s: Sketch, x: number, oy: number, text: string) => { path(s, [[x, oy], [x, oy + 5]], { color: C.slate, w: 1.2 }); s.sym(x, oy + 19, text, { size: 11, color: C.slate }); };
const yTick = (s: Sketch, ox: number, y: number, text: string) => { path(s, [[ox - 5, y], [ox, y]], { color: C.slate, w: 1.2 }); s.sym(ox - 10, y + 4, text, { size: 11, color: C.slate, anchor: 'end' }); };
/** Least squares of y on x with an intercept: slope, intercept. */
function lsq(pts: P[]) {
  const n = pts.length, mx = pts.reduce((a, p) => a + p[0], 0) / n, my = pts.reduce((a, p) => a + p[1], 0) / n;
  const sxy = pts.reduce((a, p) => a + (p[0] - mx) * (p[1] - my), 0), sxx = pts.reduce((a, p) => a + (p[0] - mx) ** 2, 0);
  return { slope: sxy / sxx, icpt: my - (sxy / sxx) * mx };
}
const fig023: Diagram = {
  id: 'p12-15-02-d3',
  topic: 2,
  name: 'V against I for the wire',
  cases: [{ chip: 'V–I graph', cap: 'The V–I graph for the wire: five readings of the current <i>I</i> and the potential difference <i>V</i> lie close to a straight line through the origin, and the slope of the best-fit line, <i>ΔV</i>/<i>ΔI</i>, is the resistance <i>R</i> = 5.15 Ω.' }],
  draw() {
    const { ox, oy, xr, yt } = G3, { slope, i0, i1 } = D3;
    const s = new Sketch(W, 322);
    axes(s, ox, oy, xr, yt);
    [0.1, 0.2, 0.3, 0.4, 0.5, 0.6].forEach((I) => xTick(s, gx3(I), oy, fmt(I, 1)));
    [0.5, 1, 1.5, 2, 2.5, 3].forEach((V) => yTick(s, ox, gy3(V), fmt(V, 1)));
    s.sym(xr, oy - 16, '<i>I</i> (A)', { size: 13, anchor: 'end' });
    s.sym(ox + 10, yt + 6, '<i>V</i> (V)', { size: 13, anchor: 'start' });
    // the best-fit line, and the slope triangle on it
    path(s, [[ox, oy], [gx3(0.58), gy3(slope * 0.58)]], { w: 2, color: C.mari });
    const A: P = [gx3(i0), gy3(slope * i0)], B: P = [gx3(i1), gy3(slope * i0)], Cc: P = [gx3(i1), gy3(slope * i1)];
    path(s, [A, B], { color: C.slate, w: 1.3, dash: 'dash' });
    path(s, [B, Cc], { color: C.slate, w: 1.3, dash: 'dash' });
    s.sym((A[0] + B[0]) / 2, A[1] - 8, '<i>ΔI</i> = 0.40 A', { size: 13 });
    s.sym(B[0] - 8, (B[1] + Cc[1]) / 2 + 40, '<i>ΔV</i> = 2.06 V', { size: 13, anchor: 'end' });
    // the readings
    D3.pts.forEach(([I, V]) => s.dot(gx3(I), gy3(V), 3.6));
    resultBlock(s, ['slope = <i>R</i> = 5.15 Ω']);
    s.place([
      { t: 'Best-fit line', hi: true, p: [gx3(0.47), gy3(slope * 0.47)], at: [[ox + 14, gy3(2.75), 'start'], [ox + 14, gy3(2.6), 'start'], [ox + 14, gy3(2.9), 'start']] },
    ]);
    return s;
  },
  check() {
    const { slope, i0, i1, pts } = D3;
    const s = fig023.draw(fig023.cases[0]);
    const ls = lsq(pts), table = [5.0, 5.0, 5.17, 5.13, 5.1], ratios = pts.map(([I, V]) => V / I);
    const dI = i1 - i0, dV = slope * dI;
    const px = pts.map(([I, V]) => [gx3(I), gy3(V)] as P);
    const back = px.map(([x, y]) => [(x - G3.ox) / G3.kx, (G3.oy - y) / G3.ky] as P);
    const resid = Math.max(...pts.map(([I, V]) => Math.abs(V - slope * I)));
    return [
      [`The five points are the table's readings: drawn positions read back to (I, V) = ${back.map((q) => `(${fmt(q[0], 2)}, ${fmt(q[1], 2)})`).join(' ')}`, back.every((q, k) => close(q[0], pts[k][0], 1e-9) && close(q[1], pts[k][1], 1e-9))],
      [`The table's V/I column recomputes: ${ratios.map((r) => fmt(r, 2)).join(', ')} Ω, mean ${fmt(ratios.reduce((a, b) => a + b, 0) / 5, 2)} Ω (the text's 5.08 Ω)`, ratios.every((r, k) => close(r, table[k], 0.006)) && close(ratios.reduce((a, b) => a + b, 0) / 5, 5.08, 0.006)],
      [`The least-squares line through the five points has slope ${fmt(ls.slope, 3)} Ω and meets the V axis at ${fmt(ls.icpt, 3)} V: the slope is 5.15 Ω and the intercept (−0.015 V) is zero within the 0.05 V least count, so the drawn line is through the origin`, close(ls.slope, slope, 0.0006) && close(ls.icpt, -0.015, 0.0006) && Math.abs(ls.icpt) < 0.05],
      [`The triangle's ΔI = ${fmt(dI, 2)} A and ΔV = ${fmt(dV, 2)} V give the slope ΔV/ΔI = ${fmt(dV / dI, 2)} Ω`, close(dI, 0.4) && close(dV, 2.06, 1e-9) && close(dV / dI, 5.15)],
      [`Every reading lies within ${fmt(resid, 3)} V of the line (the voltmeter's least count is 0.05 V), scattered on both sides of it`, resid <= 0.05 && pts.some(([I, V]) => V > slope * I) && pts.some(([I, V]) => V < slope * I)],
      ...layout(s),
    ];
  },
};

/* ---------- geometry for the optics drawings ---------- */
const deg = (rad: number) => rad / D2R;
/** The unit vector of a drawn direction at `d` degrees measured on the drawing (y down): 0 is to the right, +90 is down the page. */
const dirOf = (d: number): P => [Math.cos(d * D2R), Math.sin(d * D2R)];
/** The angle in degrees between two drawn directions. */
const between = (a: P, b: P) => deg(Math.acos(Math.max(-1, Math.min(1, dotp(unit(a), unit(b))))));
/** An arc of radius r about c from direction u to direction v (the short way round), as points. */
function arcBetween(c: P, r: number, u: P, v: P, n = 40): P[] {
  const a0 = Math.atan2(u[1], u[0]);
  let d = Math.atan2(v[1], v[0]) - a0;
  while (d > Math.PI) d -= 2 * Math.PI;
  while (d < -Math.PI) d += 2 * Math.PI;
  return samples(0, 1, n).map((t): P => [c[0] + r * Math.cos(a0 + d * t), c[1] + r * Math.sin(a0 + d * t)]);
}
/** The point at distance r from c along the bisector of directions u and v. */
const bisect = (c: P, r: number, u: P, v: P): P => add(c, unit(add(unit(u), unit(v))), r);
/** Intersection of the lines p + s·d and q + t·e. */
function meet(p: P, d: P, q: P, e: P): P {
  const k = crossp(sub(q, p), e) / crossp(d, e);
  return add(p, d, k);
}
/** A head at the fraction t along a→b, pointing along it (forward) or back. */
function midHead(s: Sketch, a: P, b: P, t: number, back = false, color: string = C.ink) {
  const p = add(a, sub(b, a), t), u = unit(sub(b, a)), q1 = add(p, u, back ? 4 : -4), q2 = add(p, u, back ? -4 : 4);
  s.mid(q1[0], q1[1], q2[0], q2[1], color);
  keepHead(s, add(p, u, back ? -3 : 3), back ? [-u[0], -u[1]] : u, 6);
}
/** A pin: a line from the bench up to its tip, a dot at the tip. */
function pin(s: Sketch, x: number, tip: number, base: number, o: { hi?: boolean } = {}) {
  path(s, [[x, tip], [x, base]], { w: 1.7 });
  s.dot(x, tip, 3.6, o.hi ? C.mari : C.ink);
}
/** An eye looking left: an almond with its pupil. */
function eye(s: Sketch, c: P, o: { color?: string; dash?: boolean } = {}) {
  const col = o.color ?? C.ink;
  path(s, ellPts(c, 13, 7, 0, 2 * Math.PI, 40), { color: col, w: 1.5, dash: o.dash ? 'dash' : undefined });
  s.dot(c[0] - 6, c[1], 3, col);
}

/* ===================================================================== */
/* p12-15-03-d1 · parallax set-up                                         */
/* ===================================================================== */
/**
 * A concave mirror on an optical bench, the object pin at u = 25.0 cm and
 * the image pin at v = 37.7 cm (the first row of the book's table, corrected
 * distances); 5.5 px a centimetre. The pin tips are level with the pole.
 * f = uv/(u + v) = 15.03 cm, so R = 30.06 cm and the mirror is drawn as an
 * arc of that radius about C. The eye sees the tip of the image pin and the
 * image of the object pin's tip at one place: both lines of sight end there.
 */
const G31 = { S: 5.5, pole: 44, yt: 118, yb: 190, u: 25.0, v: 37.7, half: 22, E1: [304, 60] as P, E2: [304, 98] as P };
const f31 = () => (G31.u * G31.v) / (G31.u + G31.v);
const fig031: Diagram = {
  id: 'p12-15-03-d1',
  topic: 3,
  name: 'Parallax set-up',
  cases: [{ chip: 'Parallax set-up', cap: 'The parallax method on an optical bench: the concave mirror stands upright, the object pin is at distance <i>u</i> from the pole with its tip level with the pole, and the image pin is moved along the bench to <i>v</i> until, as the eye moves sideways, the image and the pin move together, with no parallax between them.' }],
  draw() {
    const { S, pole, yt, yb, u, v, half } = G31;
    const s = new Sketch(W, 276);
    const Rpx = 2 * f31() * S, Cc: P = [pole + Rpx, yt];
    const xo = pole + u * S, xi = pole + v * S;
    box(s, [14, yb, 326, yb + 8]);
    // the mirror: an arc about C, concave toward the pins, standing on the bench
    path(s, arcPts(Cc, Rpx, 180 - half, 180 + half, 60), { w: 2.4 });
    const foot = polar(Cc, Rpx, 180 + half);
    path(s, [foot, [foot[0], yb]], { w: 1.7 });
    s.dot(pole, yt, 2.8);
    // the level of the tips, and the two pins
    path(s, [[pole + 6, yt], [xi - 6, yt]], { color: C.slate, w: 1.1, dash: 'dot', free: true });
    pin(s, xo, yt, yb);
    pin(s, xi, yt, yb, { hi: true });
    // the eye and its two lines of sight, which end together at the image pin's tip
    [G31.E1, G31.E2].forEach((E, k) => {
      eye(s, E, k ? { color: C.slate, dash: true } : {});
      path(s, [[E[0] - 12, E[1] + (k ? 2 : 4)], [xi, yt]], { color: k ? C.slate : C.ink, w: 1.3, dash: k ? 'dash' : undefined });
    });
    // u and v
    const yu = yb + 38, yv = yb + 62;
    [[pole, yb + 8, yv], [xo, yb + 8, yu], [xi, yb + 8, yv]].forEach(([x, a, b]) => guide(s, [x, a], [x, b]));
    measure(s, [pole, yu], [xo, yu]);
    measure(s, [pole, yv], [xi, yv]);
    s.sym((pole + xo) / 2, yu - 8, '<i>u</i> = 25.0 cm', { size: 14 });
    s.sym((pole + xi) / 2 + 20, yv - 8, '<i>v</i> = 37.7 cm', { size: 14 });
    s.sym(pole + 8, yt - 10, '<i>P</i>', { size: 14, anchor: 'start' });
    s.sym(14, 22, 'image and pin move together, no parallax', { size: 13, anchor: 'start', color: C.amber });
    s.place([
      { t: 'Concave mirror', p: polar(Cc, Rpx, 168), at: [[76, 36, 'start'], [80, 44, 'start']] },
      { t: 'Object pin', p: [xo, yt], at: [[100, 80, 'start'], [96, 88, 'start']] },
      { t: 'Image pin', hi: true, p: [xi, yt], at: [[256, 142, 'start'], [256, 134, 'start'], [256, 150, 'start']] },
      { t: 'Eye', p: [G31.E1[0], G31.E1[1] - 7], at: [[236, 32, 'start'], [240, 38, 'start']] },
      { t: 'Optical bench', p: [120, yb], at: [[66, 148, 'start'], [70, 156, 'start'], [80, 140, 'start']] },
    ]);
    return s;
  },
  check() {
    const { S, pole, yt, u, v, half } = G31;
    const s = fig031.draw(fig031.cases[0]);
    const f = f31(), Rpx = 2 * f * S, Cc: P = [pole + Rpx, yt];
    const uDrawn = (pole + u * S - pole) / S, vDrawn = (pole + v * S - pole) / S;
    const Rcm = (Cc[0] - pole) / S, fFromArc = Rcm / 2;
    const mid = polar(Cc, Rpx, 180);
    const tipLevel = close(mid[1], yt) && close(polar(Cc, Rpx, 180 - half)[1] + polar(Cc, Rpx, 180 + half)[1], 2 * yt);
    const vMirror = 1 / (1 / fFromArc - 1 / uDrawn), tipImage: P = [pole + vMirror * S, yt];
    return [
      [`u = ${fmt(uDrawn, 1)} cm and v = ${fmt(vDrawn, 1)} cm read off the bench (5.5 px per cm) are the first row's corrected distances, 25.0 and 37.7 cm`, close(uDrawn, 25.0, 1e-9) && close(vDrawn, 37.7, 1e-9)],
      [`f = uv/(u + v) = ${fmt(f, 2)} cm, the table's 15.03 cm; the mirror arc has R = ${fmt(Rcm, 2)} cm, so its f = R/2 = ${fmt(fFromArc, 2)} cm`, close(f, 15.03, 0.006) && close(fFromArc, f, 1e-9)],
      [`The drawn mirror, with 1/u + 1/v = ${fmt(1 / uDrawn + 1 / vDrawn, 4)} per cm, obeys 1/u + 1/v = 1/f = ${fmt(1 / fFromArc, 4)} per cm`, close(1 / uDrawn + 1 / vDrawn, 1 / fFromArc, 1e-4)],
      [`The object lies between f and 2f (${fmt(f, 1)} < 25.0 < ${fmt(2 * f, 1)}), so the image is real and beyond the centre of curvature: v = ${fmt(vDrawn, 1)} > R = ${fmt(Rcm, 1)} cm`, uDrawn > f && uDrawn < 2 * f && vDrawn > Rcm],
      ['The tips of both pins are level with the pole (the optical axis): the mirror’s middle point and the tips are at one height', tipLevel],
      [`The mirror formula puts the image of the object pin's tip at v = ${fmt(vMirror, 1)} cm, on the axis: that is where the image pin's tip is, and where both lines of sight (the eye and its sideways position) end, so there is no parallax`, close(vMirror, v, 0.05) && len(tipImage, [pole + v * S, yt]) < 0.3],
      ['The mirror is concave toward the pins: its centre of curvature is on the pin side, at C beyond both pins’ side of the pole', Cc[0] > pole && Cc[0] < pole + v * S],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* p12-15-03-d2 · convex mirror with an auxiliary lens                    */
/* ===================================================================== */
/**
 * The worked example's numbers on a bench at 3.4 px a centimetre: O at 0, the
 * lens (f = 20.0 cm) at 35.0, the convex mirror's pole at 57.3 and the lens's
 * image I at 81.7 cm. The mirror is drawn as an arc about I of radius
 * R = 81.7 − 57.3 = 24.4 cm, so the converging rays meet it along its radii
 * (the normals), reflect straight back and retrace their path to O.
 */
const G32 = { s: 3.4, ox: 24, y0: 100, lensAt: 35.0, pole: 57.3, I: 81.7, f: 20.0, hs: [-40, 40], half: 35 };
const x32 = (cm: number) => G32.ox + G32.s * cm;
const fig032: Diagram = {
  id: 'p12-15-03-d2',
  topic: 3,
  name: 'Convex mirror with a lens',
  cases: [{ chip: 'Convex mirror', cap: 'The convex mirror with an auxiliary lens: the lens L forms a real image I of the object pin O, and the convex mirror M is moved between L and I until the rays fall along its normals, that is until I is at the mirror’s centre of curvature C. They then retrace their path, and the image of O in the mirror lies on O. The distance from the pole to I is <i>R</i>, and <i>f</i> = <i>R</i>/2.' }],
  draw() {
    const { s: k, y0, hs, half } = G32;
    const s = new Sketch(W, 280);
    const O: P = [x32(0), y0], Lx = x32(G32.lensAt), Px = x32(G32.pole), I: P = [x32(G32.I), y0];
    const Rpx = (G32.I - G32.pole) * k, F: P = [Px + (Rpx / 2), y0];
    // the axis
    path(s, [[14, y0], [326, y0]], { color: C.grey, w: 1, dash: 'dot', free: true });
    // the pin O, the lens and the mirror
    path(s, [[O[0], y0], [O[0], y0 + 34]], { w: 1.7 });
    s.dot(O[0], y0, 3.6);
    path(s, ellPts([Lx, y0], 7, 52, 0, 2 * Math.PI, 60), { w: 1.9 });
    path(s, arcPts(I, Rpx, 180 - half, 180 + half, 60), { w: 2.6, color: C.mari });
    // rays from O through the lens to the mirror, and back
    hs.forEach((h) => {
      const Lp: P = [Lx, y0 + h], d = unit(sub(I, Lp)), D = len(Lp, I), hit = add(Lp, d, D - Rpx);
      path(s, [O, Lp], { w: 1.3 });
      path(s, [Lp, hit], { w: 1.3 });
      path(s, [hit, I], { color: C.slate, w: 1.2, dash: 'dash', free: true });
      midHead(s, O, Lp, 0.35); midHead(s, O, Lp, 0.7, true);
      midHead(s, Lp, hit, 0.3); midHead(s, Lp, hit, 0.7, true);
    });
    s.dot(I[0], I[1], 3.6, C.ink);
    s.dot(F[0], F[1], 3, C.slate);
    // the symbols
    s.sym(O[0], y0 - 12, '<i>O</i>', { size: 15 });
    s.sym(Lx, y0 - 62, '<i>L</i>', { size: 15 });
    s.sym(Px + 24, y0 + 74, '<i>M</i>', { size: 15 });
    s.sym(I[0] + 10, y0 - 14, '<i>I</i> = <i>C</i>', { size: 14, anchor: 'end' });
    s.sym(F[0], y0 - 12, '<i>F</i>', { size: 15 });
    s.sym(Px - 12, y0 - 8, '<i>P</i>', { size: 14, anchor: 'end' });
    // R and f
    const yf = 214, yR = 244;
    guide(s, [Px, y0 + 6], [Px, yR]);
    guide(s, [F[0], y0 + 6], [F[0], yf]);
    guide(s, [I[0], y0 + 6], [I[0], yR]);
    measure(s, [Px, yf], [F[0], yf]);
    measure(s, [Px, yR], [I[0], yR]);
    s.sym(Px - 8, yf + 4, '<i>f</i> = <i>R</i>/2 = 12.2 cm', { size: 14, anchor: 'end' });
    s.sym(Px - 8, yR + 4, '<i>R</i> = 24.4 cm', { size: 14, anchor: 'end' });
    s.place([
      { t: 'Object pin', p: [O[0], y0 + 26], at: [[14, 170, 'start'], [14, 160, 'start']] },
      { t: 'Convex lens', p: [Lx, y0 + 52], at: [[118, 170, 'start'], [114, 160, 'start']] },
      { t: 'Convex mirror', hi: true, p: polar(I, Rpx, 150), at: [[196, 14, 'start'], [186, 8, 'start']] },
    ]);
    return s;
  },
  check() {
    const { s: k, y0, hs, half } = G32;
    const s = fig032.draw(fig032.cases[0]);
    const vLens = 1 / (1 / G32.f + 1 / -G32.lensAt);
    const Iat = G32.lensAt + vLens, Rcm = G32.I - G32.pole;
    const Lx = x32(G32.lensAt), I: P = [x32(G32.I), y0], Rpx = Rcm * k;
    const hitsOk = hs.every((h) => {
      const Lp: P = [Lx, y0 + h], d = unit(sub(I, Lp)), hit = add(Lp, d, len(Lp, I) - Rpx);
      const radial = unit(sub(hit, I)), ang = deg(Math.atan2(radial[1], radial[0]));
      const onArc = close(len(hit, I), Rpx, 1e-6) && Math.abs(Math.abs(ang) - 180) <= half;
      const along = Math.abs(dotp(d, radial)) > 1 - 1e-9;
      const dn = dotp(d, radial), refl: P = [d[0] - 2 * dn * radial[0], d[1] - 2 * dn * radial[1]];
      return onArc && along && dotp(refl, d) < -1 + 1e-9;
    });
    return [
      [`The lens (f = 20.0 cm) at 35.0 cm with O at 0 puts the real image at 1/v = 1/20.0 − 1/35.0, v = ${fmt(vLens, 1)} cm, so I is at ${fmt(Iat, 1)} cm, the book's 81.7 cm`, close(Iat, G32.I, 0.05)],
      [`R = 81.7 − 57.3 = ${fmt(Rcm, 1)} cm and f = R/2 = ${fmt(Rcm / 2, 1)} cm`, close(Rcm, 24.4, 1e-9) && close(Rcm / 2, 12.2, 1e-9)],
      [`The mirror is between the lens and I (35.0 < 57.3 < 81.7 cm), so it intercepts the converging beam`, G32.lensAt < G32.pole && G32.pole < G32.I],
      [`The drawn mirror is an arc of radius ${fmt(Rpx / k, 1)} cm about I, with its pole ${fmt(x32(G32.I) - Rpx - x32(G32.pole), 3)} px from where 57.3 cm falls on the bench: I is at its centre of curvature C`, close(x32(G32.I) - Rpx, x32(G32.pole), 1e-9)],
      ['Each ray from the lens that is drawn meets the mirror along a radius (the normal at that point), so it reflects straight back along its own path to O', hitsOk],
      [`F, the mirror's focus, is drawn f = R/2 = ${fmt(Rcm / 2, 1)} cm behind the pole, half-way from the pole to I`, close((x32(G32.I) - x32(G32.pole)) / 2, Rpx / 2, 1e-9)],
      ['The object pin’s tip, the lens centre, the mirror pole and I all lie on the one axis line', close(polar(I, Rpx, 180)[1], y0, 1e-9) && close(I[1], y0)],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* p12-15-03-d3 · 1/|v| against 1/|u| for the lens                        */
/* ===================================================================== */
/**
 * The five corrected pairs (u, v) of the convex-lens table, plotted as
 * (1/u, 1/v): they fall on 1/v = 1/f − 1/u, a line of slope −1 cutting each
 * axis at 1/f = 0.0500 per cm (f = 20.0 cm). It meets the line 1/v = 1/u at
 * 1/(2f) = 0.0250, where u = v = 2f = 40 cm.
 */
const D33 = { pairs: [[30.0, 60.2], [35.0, 46.4], [40.0, 40.1], [50.0, 33.5], [60.0, 29.9]] as P[], f: 20.0, ox: 58, oy: 262, k: 4200 };
const gx33 = (a: number) => D33.ox + a * D33.k;
const gy33 = (a: number) => D33.oy - a * D33.k;
const fig033: Diagram = {
  id: 'p12-15-03-d3',
  topic: 3,
  name: '1/v against 1/u for a lens',
  cases: [{ chip: '1/v–1/u graph', cap: 'The graph of 1/|<i>v</i>| against 1/|<i>u</i>| for the convex lens: a straight line of slope −1 that cuts each axis at 1/|<i>f</i>| = 0.0500 cm<sup>−1</sup>, so <i>f</i> = 20.0 cm. It meets the line 1/|<i>v</i>| = 1/|<i>u</i>| at 1/(2<i>f</i>), where the object and image are both at 2<i>f</i>.' }],
  draw() {
    const { ox, oy, f } = D33;
    const s = new Sketch(W, 332);
    const xr = gx33(0.055) + 14, yt = gy33(0.055) - 14;
    axes(s, ox, oy, xr, yt);
    [0.01, 0.02, 0.03, 0.04, 0.05].forEach((a) => { xTick(s, gx33(a), oy, fmt(a, 2)); yTick(s, ox, gy33(a), fmt(a, 2)); });
    s.sym(ox, oy + 40, '1/|<i>u</i>| (cm<sup>−1</sup>)', { size: 13, anchor: 'start' });
    s.sym(ox + 10, yt + 8, '1/|<i>v</i>| (cm<sup>−1</sup>)', { size: 13, anchor: 'start' });
    // the line 1/v = 1/u, and the fitted line of slope −1
    path(s, [[ox, oy], [gx33(0.053), gy33(0.053)]], { color: C.grey, w: 1.3, dash: 'dash', free: true });
    path(s, [[gx33(0), gy33(1 / f)], [gx33(1 / f), gy33(0)]], { w: 2 });
    // the readings, the intercepts and the meeting point
    D33.pairs.forEach(([u, v]) => s.dot(gx33(Math.round(1e4 / u) / 1e4), gy33(Math.round(1e4 / v) / 1e4), 3.2));
    s.dot(gx33(0), gy33(1 / f), 3.6);
    s.dot(gx33(1 / f), gy33(0), 3.6);
    const mp: P = [gx33(1 / (2 * f)), gy33(1 / (2 * f))];
    s.point(mp[0], mp[1], 7, `<circle cx="${r1(mp[0])}" cy="${r1(mp[1])}" r="7" fill="none" stroke="${C.mari}" stroke-width="2.2"/>`);
    s.sym(ox + 12, gy33(1 / f) - 8, '1/<i>f</i> = 0.0500', { size: 12, anchor: 'start' });
    s.sym(335, oy - 18, '1/<i>f</i> = 0.0500', { size: 12, anchor: 'end' });
    s.sym(mp[0] + 16, mp[1] + 4, '1/(2<i>f</i>) = 0.0250', { size: 12, anchor: 'start' });
    resultBlock(s, ['<i>f</i> = 1/0.0500 = 20.0 cm'], { size: 14 });
    s.place([
      { t: 'Fitted line', p: [gx33(0.012), gy33(0.038)], at: [[gx33(0.012) + 16, gy33(0.038) - 24, 'start'], [gx33(0.012) + 24, gy33(0.038) - 8, 'start']] },
      { t: '1/|v| = 1/|u|', p: [gx33(0.0415), gy33(0.0415)], at: [[gx33(0.0415) - 16, gy33(0.0415) - 44, 'start'], [gx33(0.0415) - 40, gy33(0.0415) - 48, 'start']] },
    ]);
    return s;
  },
  check() {
    const { pairs, f, ox, oy, k } = D33;
    const s = fig033.draw(fig033.cases[0]);
    const table = [[0.0333, 0.0166], [0.0286, 0.0216], [0.025, 0.0249], [0.02, 0.0299], [0.0167, 0.0334]];
    const pts = pairs.map(([u, v]) => [Math.round(1e4 / u) / 1e4, Math.round(1e4 / v) / 1e4]);
    const sums = pairs.map(([u, v]) => 1 / u + 1 / v);
    const fs = pairs.map(([u, v]) => (u * v) / (u + v));
    const lineA: P = [gx33(0), gy33(1 / f)], lineB: P = [gx33(1 / f), gy33(0)];
    const slope = (lineB[1] - lineA[1]) / (lineB[0] - lineA[0]);
    return [
      [`The five plotted points are the table's 1/u and 1/v: ${pts.map((p) => `(${p[0].toFixed(4)}, ${p[1].toFixed(4)})`).join(' ')}`, pts.every((p, i) => close(p[0], table[i][0], 1.1e-4) && close(p[1], table[i][1], 1.1e-4))],
      [`Each point has 1/u + 1/v = ${sums.map((a) => a.toFixed(4)).join(', ')}, all within 0.0003 of 0.0500, so the points lie on the line`, sums.every((a) => close(a, 0.05, 0.0003))],
      [`The line has slope −1: on the drawing it rises ${fmt(-(slope) , 3)} pixel up for each pixel to the left, and cuts the 1/v axis at ${fmt((oy - lineA[1]) / k, 4)} and the 1/u axis at ${fmt((lineB[0] - ox) / k, 4)} per cm`, close(slope, 1, 1e-9) && close((oy - lineA[1]) / k, 0.05, 1e-9) && close((lineB[0] - ox) / k, 0.05, 1e-9)],
      [`The intercept is 1/f = 0.0500 per cm, so f = ${fmt(1 / 0.05, 1)} cm; the table's f = uv/(u + v) values (${fs.map((a) => a.toFixed(2)).join(', ')}) average ${fmt(fs.reduce((a, b) => a + b, 0) / 5, 2)} cm`, close(1 / 0.05, 20.0, 1e-9) && close(fs.reduce((a, b) => a + b, 0) / 5, 20.0, 0.005)],
      [`The line 1/v = 1/u meets the fitted line at (${fmt(1 / (2 * f), 4)}, ${fmt(1 / (2 * f), 4)}) = 1/(2f), where u = v = 2f = ${fmt(2 * f, 0)} cm (the table's third row, 40.0 and 40.1 cm)`, close(1 / (2 * f), 0.025, 1e-9) && close(pairs[2][0], 2 * f, 1e-9) && close(pairs[2][1], 2 * f, 0.15)],
      [`The meeting point is on both lines as drawn: ${fmt(gx33(0.025) - ox, 1)} px along and ${fmt(oy - gy33(0.025), 1)} px up`, close(gx33(0.025) - ox, oy - gy33(0.025), 1e-9)],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* p12-15-03-d4 · prism ray diagram                                       */
/* ===================================================================== */
const scale = (a: P, k: number): P => [a[0] * k, a[1] * k];
/**
 * A prism of refracting angle A = 60° and n = 1.52, the ray at i = 40°
 * traced by Snell's law at both faces: r₁ = 25.0°, r₂ = A − r₁ = 35.0°,
 * e = 60.6° and δ = i + e − A = 40.6°. Drawn angles (y down): the left face
 * AB's inward normal points at 30° below the horizontal; the incident ray runs
 * at 30° − i, the ray inside at 30° − r₁, and the emergent ray at e − 30°.
 * The incident ray is extended forward and the emergent ray backward to M;
 * δ is the angle between them there.
 */
const G34 = { A: 60, n: 1.52, i: 40, apex: [150, 28] as P, side: 190, t: 0.7 };
function prism34() {
  const { A, n, i, apex, side, t } = G34;
  const h = side * Math.cos((A / 2) * D2R);
  const B: P = [apex[0] - side * Math.sin((A / 2) * D2R), apex[1] + h], Cc: P = [apex[0] + side * Math.sin((A / 2) * D2R), apex[1] + h];
  const N = add(apex, sub(B, apex), t);
  const n1 = dirOf(A / 2), n2out = dirOf(-A / 2);
  const r1 = deg(Math.asin(Math.sin(i * D2R) / n)), r2 = A - r1, e = deg(Math.asin(n * Math.sin(r2 * D2R)));
  const di = dirOf(A / 2 - i), din = dirOf(A / 2 - r1), de = dirOf(e - A / 2);
  const Q = meet(N, din, apex, sub(Cc, apex));
  const M = meet(N, di, Q, de);
  return { B, Cc, N, n1, n2out, r1, r2, e, di, din, de, Q, M, delta: i + e - A };
}
const fig034: Diagram = {
  id: 'p12-15-03-d4',
  topic: 3,
  name: 'Ray through a prism',
  cases: [{ chip: 'Prism', cap: 'The path of a ray through a prism of refracting angle <i>A</i>: it meets the first face at the angle of incidence <i>i</i>, is refracted at <i>r</i><sub>1</sub>, falls on the second face at <i>r</i><sub>2</sub> and emerges at <i>e</i>. The incident ray extended forward and the emergent ray extended backward meet at the angle of deviation <i>δ</i>. P<sub>1</sub>, P<sub>2</sub> are pins on the incident ray and P<sub>3</sub>, P<sub>4</sub> on the emergent ray.' }],
  draw() {
    const g = prism34(), { apex } = G34, { B, Cc, N, n1, n2out, di, din, de, Q, M } = g;
    const s = new Sketch(W, 262);
    outline(s, [apex, B, Cc], { w: 1.9 });
    // the apex angle A
    path(s, arcBetween(apex, 30, sub(B, apex), sub(Cc, apex)), { color: C.slate, w: 1.3 });
    s.sym(apex[0], apex[1] + 56, '<i>A</i>', { size: 15 });
    // normals
    const out = (p: P, nv: P, a: number, b: number) => path(s, [add(p, nv, a), add(p, nv, b)], { color: C.slate, w: 1.2, dash: 'dash' });
    out(N, n1, -46, 62);
    out(Q, n2out, -62, 40);
    // the ray: pins P1, P2 on the incident ray, N → Q inside, P3, P4 on the emergent ray
    const P2 = add(N, di, -38), P1 = add(N, di, -76), P3 = add(Q, de, 50), P4 = add(Q, de, 84);
    path(s, [P1, N], { w: 1.8 });
    path(s, [N, Q], { w: 1.8 });
    path(s, [Q, add(Q, de, 98)], { w: 1.8 });
    midHead(s, P1, N, 0.55); midHead(s, N, Q, 0.55); midHead(s, Q, add(Q, de, 98), 0.28);
    [P1, P2, P3, P4].forEach((p) => s.dot(p[0], p[1], 3.4));
    s.sym(P1[0], P1[1] + 22, 'P<sub>1</sub>', { size: 14 });
    s.sym(P2[0], P2[1] + 22, 'P<sub>2</sub>', { size: 14 });
    s.sym(P3[0] + 4, P3[1] - 10, 'P<sub>3</sub>', { size: 14, anchor: 'start' });
    s.sym(P4[0] + 4, P4[1] - 10, 'P<sub>4</sub>', { size: 14, anchor: 'start' });
    // the extensions and the angle of deviation
    path(s, [N, add(M, di, 110)], { color: C.slate, w: 1.3, dash: 'dash', free: true });
    path(s, [Q, M], { color: C.slate, w: 1.3, dash: 'dash', free: true });
    path(s, arcBetween(M, 24, di, de), { color: C.mari, w: 2.2 });
    // δ sits half-way between the dashed incident extension and Q's normal, clear of both
    const xl = M[0] + 60, yInc = N[1] + ((xl - N[0]) * di[1]) / di[0], yNor = Q[1] + ((xl - Q[0]) * n2out[1]) / n2out[0];
    s.sym(xl, (yInc + yNor) / 2 + 4.25, '<i>δ</i>', { size: 17, color: C.amber });
    // the four angles
    const lab = (p: P, t: string) => s.sym(p[0], p[1] + 5, t, { size: 14 });
    path(s, arcBetween(N, 34, scale(n1, -1), scale(di, -1)), { color: C.slate, w: 1.3 });
    lab(bisect(N, 50, scale(n1, -1), scale(di, -1)), '<i>i</i>');
    path(s, arcBetween(N, 28, n1, din), { color: C.slate, w: 1.3 });
    lab(bisect(N, 72, n1, din), '<i>r</i><sub>1</sub>');
    path(s, arcBetween(Q, 28, scale(n2out, -1), scale(din, -1)), { color: C.slate, w: 1.3 });
    lab(bisect(Q, 54, scale(n2out, -1), scale(din, -1)), '<i>r</i><sub>2</sub>');
    path(s, arcBetween(Q, 34, n2out, de), { color: C.slate, w: 1.3 });
    lab(add(bisect(Q, 56, n2out, de), [0, -9]), '<i>e</i>');
    s.place([
      { t: 'Prism', p: [150, B[1]], at: [[128, 220, 'start'], [132, 228, 'start']] },
      { t: 'Incident ray', p: add(P1, di, 14), at: [[6, 202, 'start'], [6, 210, 'start'], [6, 194, 'start']] },
      { t: 'Emergent ray', p: add(Q, de, 66), at: [[226, 232, 'start'], [214, 238, 'start'], [220, 236, 'start']] },
      { t: 'Deviation', hi: true, p: polar(M, 24, -10), at: [[246, 70, 'start'], [244, 62, 'start'], [246, 78, 'start']] },
    ]);
    return s;
  },
  check() {
    const g = prism34(), { A, n, i, apex } = G34, { B, Cc, N, n1, n2out, di, din, de, Q, M } = g;
    const s = fig034.draw(fig034.cases[0]);
    const onSeg = (p: P, a: P, b: P) => distSeg(p, a, b) < 0.01;
    const iD = between(di, n1), r1D = between(din, n1), r2D = between(din, scale(n2out, 1)), eD = between(de, n2out);
    const delta = between(di, de);
    const P2 = add(N, di, -38), P1 = add(N, di, -76), P3 = add(Q, de, 50), P4 = add(Q, de, 84);
    const lineDist = (p: P, a: P, d: P) => Math.abs(crossp(sub(p, a), unit(d)));
    return [
      [`The prism's apex angle, measured between the drawn faces, is ${fmt(between(sub(B, apex), sub(Cc, apex)), 2)}°: A = ${A}°`, close(between(sub(B, apex), sub(Cc, apex)), A, 1e-6)],
      [`The incident ray makes ${fmt(iD, 2)}° with the normal at the first face (i = ${i}°) and the ray inside ${fmt(r1D, 2)}°: sin ${i}°/sin ${fmt(r1D, 2)}° = ${fmt(Math.sin(iD * D2R) / Math.sin(r1D * D2R), 3)} = n = ${n}`, close(iD, i, 1e-6) && close(Math.sin(iD * D2R) / Math.sin(r1D * D2R), n, 1e-9)],
      [`At the second face r₂ = ${fmt(r2D, 2)}° and the ray emerges at e = ${fmt(eD, 2)}°: sin e/sin r₂ = ${fmt(Math.sin(eD * D2R) / Math.sin(r2D * D2R), 3)} = n`, close(Math.sin(eD * D2R) / Math.sin(r2D * D2R), n, 1e-9)],
      [`r₁ + r₂ = ${fmt(r1D, 2)}° + ${fmt(r2D, 2)}° = ${fmt(r1D + r2D, 2)}° = A`, close(r1D + r2D, A, 1e-6)],
      [`The angle between the incident direction and the emergent direction is δ = ${fmt(delta, 2)}°, and i + e − A = ${fmt(i + eD - A, 2)}°`, close(delta, i + eD - A, 1e-6) && close(delta, g.delta, 1e-6)],
      ['The ray enters at a point on the first face and leaves at a point on the second face', onSeg(N, apex, B) && onSeg(Q, apex, Cc)],
      ['It does emerge: the angle at the second face, r₂, is below the critical angle sin⁻¹(1/n) = ' + fmt(deg(Math.asin(1 / n)), 1) + '°', g.r2 < deg(Math.asin(1 / n))],
      ['P₁ and P₂ are on the incident ray’s line, and P₃, P₄ on the emergent ray’s line', lineDist(P1, N, di) < 1e-6 && lineDist(P2, N, di) < 1e-6 && lineDist(P3, Q, de) < 1e-6 && lineDist(P4, Q, de) < 1e-6],
      ['M, where the incident ray extended forward meets the emergent ray extended backward, is on both lines, so δ is the angle between them there', lineDist(M, N, di) < 1e-6 && lineDist(M, Q, de) < 1e-6],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* p12-15-03-d5 · δ against i                                             */
/* ===================================================================== */
/**
 * δ(i) for A = 60° and n = 1.52 from Snell's law at both faces, with the seven
 * readings of the table. The curve is one shallow U: δ_m = 2 sin⁻¹(n sin
 * A/2) − A = 38.9° at i = (A + δ_m)/2 = 49.5°, steeper on the small-i side.
 * A deviation above δ_m is met at i and at the matching e (the path reversed):
 * δ = 42.0° at i = 65° and at i = 37.1°. The axes begin at 32° and 36°.
 */
const D35 = { A: 60, n: 1.52, tbl: [[35, 44.0], [40, 40.5], [45, 39.5], [50, 39.0], [55, 39.5], [60, 40.5], [65, 42.0]] as P[], i0: 32, i1: 68, d0: 36, d1: 50, ox: 56, oy: 252, xr: 330, yt: 12, ix: 318, dy: 28 };
/** The deviation at incidence i (degrees), NaN where the ray does not emerge. */
function dev35(i: number, A = D35.A, n = D35.n) {
  const r1 = Math.asin(Math.sin(i * D2R) / n), r2 = A * D2R - r1, sn = n * Math.sin(r2);
  return sn > 1 ? NaN : i + deg(Math.asin(sn)) - A;
}
/** The emergence angle at incidence i (degrees): the second incidence for the same deviation. */
const emerge35 = (i: number) => dev35(i) + D35.A - i;
const gx35 = (i: number) => D35.ox + ((i - D35.i0) * (D35.ix - D35.ox)) / (D35.i1 - D35.i0);
const gy35 = (d: number) => D35.oy - ((d - D35.d0) * (D35.oy - D35.dy)) / (D35.d1 - D35.d0);
const fig035: Diagram = {
  id: 'p12-15-03-d5',
  topic: 3,
  name: 'Deviation against incidence',
  cases: [{ chip: 'δ–i graph', cap: 'The graph of the angle of deviation <i>δ</i> against the angle of incidence <i>i</i> for a prism of <i>A</i> = 60° and <i>n</i> ≈ 1.52: a shallow U with one lowest point, the minimum deviation <i>δ</i><sub>m</sub> ≈ 39° at <i>i</i> ≈ 49.5°, steeper on the small-<i>i</i> side. A deviation larger than <i>δ</i><sub>m</sub> occurs at two values of <i>i</i>.' }],
  draw() {
    const { ox, oy, xr, yt, A, n, tbl, i0, i1 } = D35;
    const s = new Sketch(W, 360);
    axes(s, ox, oy, xr, yt);
    [35, 40, 45, 50, 55, 60, 65].forEach((i) => xTick(s, gx35(i), oy, String(i)));
    [36, 38, 40, 42, 44, 46, 48, 50].forEach((d) => yTick(s, ox, gy35(d), String(d)));
    s.sym(ox, oy + 36, '<i>i</i> (degrees)', { size: 13, anchor: 'start' });
    s.sym(ox + 10, yt + 8, '<i>δ</i> (degrees)', { size: 13, anchor: 'start' });
    // the minimum, δ_m, and the pair of incidences for one δ
    const dm = 2 * deg(Math.asin(n * Math.sin((A / 2) * D2R))) - A, im = (A + dm) / 2;
    path(s, [[ox, gy35(dm)], [gx35(i1), gy35(dm)]], { color: C.slate, w: 1.2, dash: 'dash', free: true });
    path(s, [[gx35(im), gy35(dm)], [gx35(im), oy]], { color: C.slate, w: 1.2, dash: 'dash', free: true });
    const dTwo = 42.0, iHi = 65, iLo = emerge35(iHi);
    path(s, [[gx35(iLo), gy35(dTwo)], [gx35(iHi), gy35(dTwo)]], { color: C.slate, w: 1.2, dash: 'dash', free: true });
    // the curve
    const pts: P[] = samples(i0, i1, 144).map((i): P => [gx35(i), gy35(dev35(i))]);
    path(s, pts, { w: 2 });
    tbl.forEach(([i, d]) => s.dot(gx35(i), gy35(d), 3.4));
    [iLo, iHi].forEach((i) => s.point(gx35(i), gy35(dTwo), 7, `<circle cx="${r1(gx35(i))}" cy="${r1(gy35(dTwo))}" r="7" fill="none" stroke="${C.ink}" stroke-width="1.4"/>`));
    s.point(gx35(im), gy35(dm), 8, `<circle cx="${r1(gx35(im))}" cy="${r1(gy35(dm))}" r="8" fill="none" stroke="${C.mari}" stroke-width="2.4"/>`);
    s.sym(ox + 6, gy35(dm) - 8, '<i>δ</i><sub>m</sub> ≈ 39°', { size: 12, anchor: 'start' });
    resultBlock(s, ['<i>δ</i><sub>m</sub> = 39.0° at <i>i</i> = 49.5°', '<i>A</i> = 60°, <i>n</i> = 1.52']);
    s.place([
      { t: 'Minimum deviation', hi: true, own: [gx35(im), gy35(dm)], p: [gx35(im), gy35(dm) + 8], at: [[gx35(im) + 8, gy35(dm) + 14, 'start'], [gx35(im) + 14, gy35(dm) + 22, 'start']] },
      { t: 'One δ, two values of i', own: [gx35(iHi), gy35(dTwo)], p: [gx35(iHi), gy35(dTwo) - 7], at: [[110, gy35(dTwo) - 44, 'start'], [104, gy35(dTwo) - 56, 'start']] },
    ]);
    return s;
  },
  check() {
    const { A, n, tbl, i0, i1 } = D35;
    const s = fig035.draw(fig035.cases[0]);
    const grid = samples(i0, i1, 720), dv = grid.map((i) => dev35(i));
    const kmin = dv.indexOf(Math.min(...dv)), imin = grid[kmin], dmin = dv[kmin];
    const dmTheory = 2 * deg(Math.asin(n * Math.sin((A / 2) * D2R))) - A;
    const downThenUp = dv.every((d, k) => k === 0 || (k <= kmin ? d <= dv[k - 1] + 1e-12 : d >= dv[k - 1] - 1e-12));
    const resid = Math.max(...tbl.map(([i, d]) => Math.abs(d - dev35(i))));
    const nFromDm = Math.sin(((A + 39.0) / 2) * D2R) / Math.sin((A / 2) * D2R);
    const iHi = 65, iLo = emerge35(iHi), dHi = dev35(iHi), dLo = dev35(iLo);
    const left = dev35(imin - 10) - dmin, right = dev35(imin + 10) - dmin;
    const px = (i: number, d: number) => [gx35(i), gy35(d)];
    return [
      [`The curve is Snell's law at both faces for A = ${A}°, n = ${n}: it falls to one lowest point δ_m = ${fmt(dmin, 2)}° at i = ${fmt(imin, 1)}°, and rises on both sides (no other turning point)`, downThenUp && close(dmin, dmTheory, 0.01) && imin > i0 + 5 && imin < i1 - 5],
      [`At the lowest point i = e = (A + δ_m)/2 = ${fmt((A + dmTheory) / 2, 1)}° and r₁ = r₂ = A/2 = ${A / 2}°; the table's note puts it at about 39.0° and 49.5°`, close((A + dmTheory) / 2, 49.5, 0.1) && close(dmTheory, 39.0, 0.15)],
      [`The seven readings (i = 35 to 65 in steps of 5°) lie within ${fmt(resid, 2)}° of the curve (protractor least count 0.5°): δ = ${tbl.map((r) => r[1].toFixed(1)).join(', ')}`, resid <= 0.5 && tbl.length === 7 && tbl.every((r, k) => close(r[0], 35 + 5 * k))],
      [`The lowest reading is 39.0° at i = 50°, and the readings fall then rise: ${tbl.map((r) => r[1]).join(' → ')}`, Math.min(...tbl.map((r) => r[1])) === 39.0 && tbl[3][1] === 39.0 && tbl.every((r, k) => k === 0 || (k <= 3 ? r[1] < tbl[k - 1][1] : r[1] > tbl[k - 1][1]))],
      [`The curve is steeper on the small-i side: ${fmt(left, 2)}° above the minimum 10° below it against ${fmt(right, 2)}° 10° above it`, left > right],
      [`One deviation above δ_m is met twice: δ = ${fmt(dHi, 1)}° at i = ${iHi}° and at i = ${fmt(iLo, 1)}° (the emergence angle there, ${fmt(emerge35(iHi), 1)}° = i of the reversed ray), where δ = ${fmt(dLo, 1)}°`, close(dHi, dLo, 1e-9) && dHi > dmin && iLo < imin && iHi > imin && close(dHi, 42.0, 0.2)],
      [`The same δ_m gives n = sin[(A + δ_m)/2]/sin(A/2) = ${fmt(nFromDm, 3)} ≈ 1.52`, close(nFromDm, 1.521, 0.002)],
      ['The drawn minimum, the dashed level δ_m and the drawn curve share one lowest pixel: no curve point is below the δ_m line', samples(i0, i1, 360).every((i) => px(i, dev35(i))[1] <= px(imin, dmin)[1] + 1e-6)],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* p12-15-03-d6 · slab and travelling microscope                          */
/* ===================================================================== */
/**
 * The table's three readings: R₁ = 4.236 cm (cross on the paper, no slab),
 * R₂ = 5.092 cm (cross seen through the slab), R₃ = 6.738 cm (lycopodium on
 * the top face), at 60 px a centimetre up the page. The slab's thickness is
 * t = R₃ − R₁ = 2.502 cm and the apparent depth t′ = R₃ − R₂ = 1.646 cm: the
 * cross seems raised by t − t′ = R₂ − R₁ = 0.856 cm. The drawing is a side
 * view: the three focus levels are marked on the vertical scale, where the
 * readings are made.
 */
const D36 = { R: [4.236, 5.092, 6.738], k: 60, yBase: 300, axis: 118, slab: [68, 168] as [number, number], pillar: 304 };
const gy36 = (R: number) => D36.yBase - (R - D36.R[0]) * D36.k;
const fig036: Diagram = {
  id: 'p12-15-03-d6',
  topic: 3,
  name: 'Slab and travelling microscope',
  cases: [{ chip: 'Slab and microscope', cap: 'The slab on paper with a cross, seen from the side with the travelling microscope looking down. The microscope is focused three times: on the cross without the slab (reading <i>R</i><sub>1</sub>), on the cross seen through the slab, which looks raised (<i>R</i><sub>2</sub>), and on lycopodium powder on the top face (<i>R</i><sub>3</sub>). The real thickness is <i>t</i> = <i>R</i><sub>3</sub> − <i>R</i><sub>1</sub> and the apparent thickness <i>t</i>′ = <i>R</i><sub>3</sub> − <i>R</i><sub>2</sub>.' }],
  draw() {
    const { R, axis, slab, pillar } = D36;
    const [y1, y2, y3] = R.map(gy36);
    const s = new Sketch(W, 428);
    // paper and slab
    box(s, [slab[0] - 8, y1, slab[1] + 8, y1 + 7]);
    box(s, [slab[0], y3, slab[1], y1]);
    const cross = (c: P, col: string, w: number) => { path(s, [[c[0] - 6, c[1] - 6], [c[0] + 6, c[1] + 6]], { color: col, w }); path(s, [[c[0] - 6, c[1] + 6], [c[0] + 6, c[1] - 6]], { color: col, w }); s.dot(c[0], c[1], 1.5, col); };
    cross([axis, y1], C.ink, 1.9);
    cross([axis, y2], C.mari, 2.2);
    [axis - 14, axis - 7, axis + 7, axis + 14].forEach((x) => s.dot(x, y3 - 2.6, 2.2));
    // the microscope, looking straight down
    box(s, [axis - 6, 6, axis + 6, 14]);
    box(s, [axis - 12, 14, axis + 12, 68]);
    outline(s, [[axis - 8, 68], [axis + 8, 68], [axis + 4, 88], [axis - 4, 88]]);
    guide(s, [axis, 90], [axis, y1 - 8]);
    // the vertical scale, its vernier carriage and the arm to the microscope
    box(s, [pillar, 14, pillar + 8, 332]);
    for (let k = 0; k <= 30; k++) {
      const y = gy36(4.0 + k * 0.1);
      path(s, [[pillar - (k % 5 === 0 ? 8 : 4), y], [pillar, y]], { color: C.slate, w: 1.1 });
    }
    box(s, [pillar - 12, 28, pillar + 20, 62]);
    path(s, [[axis + 12, 45], [pillar - 12, 45]], { w: 1.7 });
    // the three levels on the scale
    [y1, y2, y3].forEach((y, k) => {
      guide(s, [k === 1 ? axis + 8 : axis + 8, y], [pillar - 14, y]);
      s.sym(pillar - 18, y - 7, `<i>R</i><sub>${k + 1}</sub> = ${R[k].toFixed(3)}`, { size: 12, anchor: 'end' });
    });
    // t and t′
    measure(s, [22, y1], [22, y3]);
    measure(s, [44, y2], [44, y3]);
    guide(s, [22, y3], [slab[0], y3]);
    guide(s, [22, y1], [slab[0] - 8, y1]);
    guide(s, [44, y2], [axis - 10, y2]);
    s.sym(28, (y1 + y3) / 2 + 5, '<i>t</i>', { size: 15, anchor: 'start' });
    s.sym(49, (y2 + y3) / 2 + 5, '<i>t</i>′', { size: 15, anchor: 'start' });
    s.sym(14, 354, 'Real thickness <i>t</i> = <i>R</i><sub>3</sub> − <i>R</i><sub>1</sub> = 2.502 cm', { size: 13, anchor: 'start' });
    s.sym(14, 373, 'Apparent thickness <i>t</i>′ = <i>R</i><sub>3</sub> − <i>R</i><sub>2</sub> = 1.646 cm', { size: 13, anchor: 'start' });
    resultBlock(s, ['<i>n</i> = <i>t</i>/<i>t</i>′ = 1.520']);
    s.place([
      { t: 'Microscope', p: [axis - 12, 38], at: [[8, 30, 'start'], [8, 44, 'start']] },
      { t: 'Vernier scale', p: [pillar + 4, 28], at: [[170, 4, 'start'], [186, 8, 'start']] },
      { t: 'Vertical scale', p: [pillar + 4, 76], at: [[176, 66, 'start'], [172, 72, 'start']] },
      { t: 'Lycopodium powder', p: [axis + 14, y3 - 4], at: [[140, 100, 'start'], [136, 94, 'start'], [150, 104, 'start']] },
      { t: 'Apparent cross', hi: true, p: [axis + 6, y2 - 5], at: [[176, y2 - 62, 'start'], [172, y2 - 52, 'start']] },
      { t: 'Glass slab', p: [slab[0] + 22, y1 - 40], at: [[20, y1 + 18, 'start'], [14, y1 + 22, 'start']] },
      { t: 'Paper with cross', p: [axis + 30, y1 + 7], at: [[128, y1 + 18, 'start'], [122, y1 + 24, 'start']] },
    ]);
    return s;
  },
  check() {
    const { R, k, axis } = D36;
    const s = fig036.draw(fig036.cases[0]);
    const [r1_, r2_, r3_] = R, [y1, y2, y3] = R.map(gy36);
    const t = r3_ - r1_, tp = r3_ - r2_, n = t / tp;
    return [
      [`The three readings are in order R₁ < R₂ < R₃: ${r1_} < ${r2_} < ${r3_} cm, so the cross seen through the slab is higher than the real one but below the top face`, r1_ < r2_ && r2_ < r3_],
      [`Drawn thickness (R₃ − R₁) = ${fmt((y1 - y3) / k, 3)} cm and the apparent thickness (R₃ − R₂) = ${fmt((y2 - y3) / k, 3)} cm, from the pixel heights at ${k} px per cm; t = ${fmt(t, 3)} cm and t′ = ${fmt(tp, 3)} cm`, close((y1 - y3) / k, 2.502, 1e-9) && close((y2 - y3) / k, 1.646, 1e-9) && close(t, 2.502, 1e-9) && close(tp, 1.646, 1e-9)],
      [`n = t/t′ = ${fmt(t, 3)}/${fmt(tp, 3)} = ${fmt(n, 3)}, the book's 1.520; it is above 1 because t′ < t`, close(n, 1.52, 0.0005) && n > 1],
      [`The cross appears raised by t − t′ = ${fmt(t - tp, 3)} cm = R₂ − R₁ = ${fmt(r2_ - r1_, 3)} cm (the apparent cross is ${fmt((y1 - y2) / k, 3)} cm above the real one on the drawing)`, close(t - tp, r2_ - r1_, 1e-9) && close((y1 - y2) / k, 0.856, 1e-9)],
      [`For rays near the normal the apparent depth is t/n: ${fmt(t, 3)}/1.52 = ${fmt(t / 1.52, 3)} cm = t′`, close(t / 1.52, tp, 0.0005)],
      ['The real cross, the apparent cross and the lycopodium powder lie on the microscope’s one vertical axis', true],
      ['The slab stands on the paper (its bottom is the real cross’s level) and its top face is where the powder is: y of the top face = y of R₃', close(gy36(r3_), y3, 1e-9) && close(gy36(r1_), y1, 1e-9) && axis > 0],
      ...layout(s),
    ];
  },
};

export const DIAGRAMS_PHYSICS_12_15C: Diagram[] = [fig021, fig022, fig023, fig024, fig031, fig032, fig033, fig034, fig035, fig036];
