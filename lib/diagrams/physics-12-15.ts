import { C, F, LABEL_GAP, Rect, Sketch, TAG_SIZE, TagSpec, crosses, mathW, r1, tagW } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * PHYSICS CLASS 12, CHAPTER 15 (Experimental Skills), drawer D1: the nine
 * drawings of Topic 00 (reading instruments, errors and graphs) and Topic 04
 * (semiconductors and components). Topic 00: the screw gauge with the studs
 * closed (positive and negative zero error), a best-fit line with its slope
 * triangle, and a systematic offset. Topic 04: the diode's forward and reverse
 * circuits, its I-V curve, the Zener regulator, the Zener characteristic
 * circuit and curve, and the identification flow chart.
 *
 * Every drawing uses the numbers of the chapter's own tables and examples
 * (content/textbooks/phy-12-15/topics-0-4.ts) and is computed from them: the
 * screw-gauge zero mark sits where the division count puts it, the best-fit
 * line has the slope the triangle reads off, the diode and Zener curves are a
 * monotone interpolation of the tables (so they pass through every reading),
 * and the circuits are read back off their wires as nodes. Each `check`
 * recomputes what the figure states and measures that no label or tag touches
 * a line it does not name.
 */

const W = 340;
type P = [number, number];
const close = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) < tol;
const fmt = (n: number, d = 2) => String(+n.toFixed(d)).replace('-', '−');
const len = (a: P, b: P) => Math.hypot(b[0] - a[0], b[1] - a[1]);
const add = (a: P, b: P, k = 1): P => [a[0] + k * b[0], a[1] + k * b[1]];
const sub = (a: P, b: P): P => [a[0] - b[0], a[1] - b[1]];
const dotp = (a: P, b: P) => a[0] * b[0] + a[1] * b[1];
const unit = (a: P): P => { const l = Math.hypot(a[0], a[1]); return [a[0] / l, a[1] / l]; };
const samples = (a: number, b: number, n = 400) => Array.from({ length: n + 1 }, (_, i) => a + ((b - a) * i) / n);

/* ---------- drawing helpers (as in physics-12-04.ts) ---------- */
type Stroke = { color?: string; w?: number; dash?: 'dash' | 'dot'; free?: boolean };
const dashOf = (d?: Stroke['dash']) => (d === 'dash' ? ' stroke-dasharray="6 4"' : d === 'dot' ? ' stroke-dasharray="1.5 3.5"' : '');
/** Every line a label must keep clear of, by sketch. */
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
const box = (s: Sketch, r: Rect, o: Stroke = {}) => outline(s, [[r[0], r[1]], [r[2], r[1]], [r[2], r[3]], [r[0], r[3]]], o);
/** Every arrowhead drawn, by sketch, as its tip and middle: a tag's dot keeps off them. */
const HEADS = new WeakMap<Sketch, [P, P][]>();
const keepHead = (s: Sketch, tip: P, u: P, L: number) => HEADS.set(s, [...(HEADS.get(s) ?? []), [tip, add(tip, u, -L / 2)]]);
/** An arrow that labels keep clear of. */
function arrow(s: Sketch, a: P, b: P, o: { color?: string; w?: number; dash?: boolean } = {}) {
  s.vec(a[0], a[1], b[0], b[1], o);
  keep(s, [a, b]);
  keepHead(s, b, unit(sub(b, a)), 9);
}
/** A small arrowhead at p, pointing along the unit direction u. */
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
const arcPts = (c: P, R: number, a0: number, a1: number, n = 90): P[] => samples(a0, a1, n).map((a): P => [c[0] + R * Math.cos((a * Math.PI) / 180), c[1] - R * Math.sin((a * Math.PI) / 180)]);
const ring = (s: Sketch, c: P, R: number, o: Stroke = {}) => path(s, arcPts(c, R, 0, 360, 120), o);
/** A dotted or dashed guide that only joins marks (free of the clearance check, never through a label). */
const GUIDES = new WeakMap<Sketch, [P, P][]>();
const guide = (s: Sketch, a: P, b: P, color: string = C.slate, dash: 'dot' | 'dash' = 'dot') => {
  GUIDES.set(s, [...(GUIDES.get(s) ?? []), [a, b]]);
  path(s, [a, b], { color, w: 1, dash, free: true });
};
const rectDist = (r: Rect, p: P) => Math.hypot(Math.max(r[0] - p[0], 0, p[0] - r[2]), Math.max(r[1] - p[1], 0, p[1] - r[3]));
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
const guideHits = (s: Sketch): string[] => {
  const boxes: [string, Rect][] = [...s.tags.map((t): [string, Rect] => [t.name, t.rect]), ...s.labels.map((l): [string, Rect] => [l.text, l.rect])];
  return [...new Set((GUIDES.get(s) ?? []).flatMap(([a, b]) => boxes.filter(([, r]) => crosses(a, b, r, 4)).map(([name]) => name)))];
};
/** Labels and tags at least LABEL_GAP from every line, and no dotted guide through one. */
const clearCheck = (s: Sketch): Check => {
  const { gap, what } = clearance(s);
  const through = guideHits(s);
  return [
    `Every tag and label stays at least ${LABEL_GAP} px clear of every line: the closest is "${what}", ${fmt(gap, 1)} px; no guide runs through one${through.length ? ` (but through ${through.map((t) => `"${t}"`).join(', ')})` : ''}`,
    gap >= LABEL_GAP - 1e-9 && !through.length,
  ];
};
const labelsApart = (s: Sketch): Check => {
  const L = s.labels;
  const bad = L.flatMap((a, i) => L.slice(i + 1).filter((b) => !(a.rect[2] + 2 <= b.rect[0] || b.rect[2] + 2 <= a.rect[0] || a.rect[3] + 2 <= b.rect[1] || b.rect[3] + 2 <= a.rect[1])).map((b) => `${a.text} / ${b.text}`));
  return [`No two symbols or labels on the drawing touch${bad.length ? `: ${bad.join(', ')}` : ''}`, bad.length === 0];
};
const dotsOffHeads = (s: Sketch): Check => {
  const bad = s.tags.filter((t) => t.from && (HEADS.get(s) ?? []).some((h) => h.some((q) => len(q, t.from as P) < 8))).map((t) => t.name);
  return [`No tag's dot sits on an arrowhead${bad.length ? `: ${bad.join(', ')}` : ''}`, bad.length === 0];
};
const inFrame = (s: Sketch): Check => {
  const bad = [...s.tags.map((t): [string, Rect] => [t.name, t.rect]), ...s.labels.map((l): [string, Rect] => [l.text, l.rect])].filter(([, r]) => r[0] < 0 || r[1] < 0 || r[2] > s.w || r[3] > s.h).map(([n]) => n);
  return [`Every tag and label lies inside the frame${bad.length ? `: ${bad.join(', ')}` : ''}`, bad.length === 0];
};
const layout = (s: Sketch): Check[] => [clearCheck(s), labelsApart(s), dotsOffHeads(s), inFrame(s)];
/** The result, bottom right, ink-edged, maths set in STIX. Registered as a tag. */
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

/* ---------- tags: candidate spots round a point, kept clear of every drawn line ---------- */
type Spot = [number, number, 'start' | 'middle' | 'end'];
/** Spots round p at distances ds, in the order of `dirs`: u d l r, and U V W X for the four diagonals. */
function around(p: P, dirs: string, ds: number[]): Spot[] {
  const out: Spot[] = [];
  for (const d of ds) {
    for (const k of dirs) {
      if (k === 'u') out.push([p[0], p[1] - d - 22, 'middle']);
      if (k === 'd') out.push([p[0], p[1] + d, 'middle']);
      if (k === 'l') out.push([p[0] - d, p[1] - 11, 'end']);
      if (k === 'r') out.push([p[0] + d, p[1] - 11, 'start']);
      if (k === 'U') out.push([p[0] - 10, p[1] - d - 22, 'start']);
      if (k === 'V') out.push([p[0] + 10, p[1] - d - 22, 'end']);
      if (k === 'W') out.push([p[0] - 10, p[1] + d, 'start']);
      if (k === 'X') out.push([p[0] + 10, p[1] + d, 'end']);
    }
  }
  return out;
}
type Want = { t: string; p: P; hi?: boolean; dirs?: string; ds?: number[]; at?: Spot[]; bare?: boolean };
/** Is the rectangle at least 4.5 px from every kept line of the sketch? */
function clearOfLines(s: Sketch, r: Rect): boolean {
  for (const pts of LINES.get(s) ?? []) {
    for (let i = 0; i < pts.length - 1; i++) {
      const a = pts[i], b = pts[i + 1], n = Math.max(1, Math.ceil(len(a, b) / 2));
      for (let k = 0; k <= n; k++) {
        if (rectDist(r, [a[0] + ((b[0] - a[0]) * k) / n, a[1] + ((b[1] - a[1]) * k) / n]) < LABEL_GAP + 0.5) return false;
      }
    }
  }
  return true;
}
/** Place every tag at its first preferred spot that is clear of the drawing's lines. */
function placeAll(s: Sketch, wants: Want[]) {
  const specs: TagSpec[] = wants.map((w) => {
    const tw = tagW(w.t);
    const spots = [...(w.at ?? []), ...around(w.p, w.dirs ?? 'udlrUVWX', w.ds ?? [8, 14, 22, 36, 52, 72])];
    const at = spots.filter(([x, y, a]) => {
      const x0 = a === 'middle' ? x - tw / 2 : a === 'end' ? x - tw : x;
      return clearOfLines(s, [x0, y, x0 + tw, y + 22]);
    });
    return { t: w.t, p: w.p, hi: w.hi, at, bare: w.bare };
  });
  s.place(specs);
}

/* ---------- graphs ---------- */
/** Pixel frame of a graph: data (x, y) sits at (ox + kx x, oy − ky y). */
type G = { ox: number; oy: number; kx: number; ky: number };
const gp = (g: G, x: number, y: number): P => [g.ox + g.kx * x, g.oy - g.ky * y];
const gInv = (g: G, p: P): P => [(p[0] - g.ox) / g.kx, (g.oy - p[1]) / g.ky];
const stub = (s: Sketch, a: P, b: P) => path(s, [a, b], { color: C.slate, w: 1.2, free: true });
/** A cross mark for a data point (a registered point, tags keep off it). */
function cross(s: Sketch, p: P, r = 3.4, color: string = C.ink) {
  s.point(p[0], p[1], r, `<path d="M${r1(p[0] - r)} ${r1(p[1] - r)} L${r1(p[0] + r)} ${r1(p[1] + r)} M${r1(p[0] - r)} ${r1(p[1] + r)} L${r1(p[0] + r)} ${r1(p[1] - r)}" fill="none" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/>`);
}
/** A monotone piecewise-cubic interpolant (Fritsch-Carlson): passes through every point, never overshoots. */
function pchip(xs: number[], ys: number[]): (x: number) => number {
  const n = xs.length, h: number[] = [], d: number[] = [];
  for (let i = 0; i < n - 1; i++) { h[i] = xs[i + 1] - xs[i]; d[i] = (ys[i + 1] - ys[i]) / h[i]; }
  const m: number[] = new Array(n).fill(0);
  m[0] = d[0]; m[n - 1] = d[n - 2];
  for (let i = 1; i < n - 1; i++) {
    if (d[i - 1] * d[i] <= 0) m[i] = 0;
    else { const w1 = 2 * h[i] + h[i - 1], w2 = h[i] + 2 * h[i - 1]; m[i] = (w1 + w2) / (w1 / d[i - 1] + w2 / d[i]); }
  }
  return (x) => {
    let k = 0;
    while (k < n - 2 && x > xs[k + 1]) k++;
    const t = (x - xs[k]) / h[k], t2 = t * t, t3 = t2 * t;
    return (2 * t3 - 3 * t2 + 1) * ys[k] + (t3 - 2 * t2 + t) * h[k] * m[k] + (-2 * t3 + 3 * t2) * ys[k + 1] + (t3 - t2) * h[k] * m[k + 1];
  };
}

/* ---------- circuits (as in physics-12-04.ts) ---------- */
const WIRES = new WeakMap<Sketch, P[][]>();
function wire(s: Sketch, pts: P[]) { path(s, pts); const l = WIRES.get(s) ?? []; l.push(pts); WIRES.set(s, l); }
function distSeg(p: P, a: P, b: P) {
  const d = sub(b, a), L = dotp(d, d) || 1, k = Math.max(0, Math.min(1, dotp(sub(p, a), d) / L));
  return len(p, add(a, d, k));
}
const onWire = (p: P, w: P[]) => w.some((a, i) => i > 0 && distSeg(p, w[i - 1], a) < 0.5);
/** The circuit's nodes read off the drawn wires: terminals grouped by the conductor they lie on. */
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
/** A resistor as a box between a and b (along a horizontal or vertical wire). */
function resistor(s: Sketch, a: P, b: P, o: { hw?: number; color?: string; w?: number } = {}) {
  const hw = o.hw ?? 10, u = unit(sub(b, a)), nv: P = [-u[1], u[0]];
  outline(s, [add(a, nv, hw), add(b, nv, hw), add(b, nv, -hw), add(a, nv, -hw)], { color: o.color, w: o.w ?? 1.8 });
}
/** A meter: a ring with its letters (STIX, upright). */
function meter(s: Sketch, c: P, r: number, label: string, o: { color?: string } = {}) {
  ring(s, c, r, { color: o.color, w: 2 });
  s.text(c[0], c[1] + 5.4, label, { size: 15, color: o.color === C.mari ? C.amber : C.text });
}
/** The cell: long (+) plate at y, short (−) plate 12 px below, centred on x. */
function battery(s: Sketch, x: number, y: number) {
  path(s, [[x - 15, y], [x + 15, y]], { w: 3 });
  path(s, [[x - 8, y + 12], [x + 8, y + 12]], { w: 3 });
}
/** A junction dot (a registered point). */
const junction = (s: Sketch, p: P) => s.dot(p[0], p[1], 3.4);
/**
 * A diode in a vertical wire at x, between y0 (top) and y1 (bottom): the
 * triangle points from anode to cathode, the bar is the cathode. Returns the
 * y of the anode terminal and of the cathode terminal. `zener` bends the bar's
 * ends like a Z.
 */
function diode(s: Sketch, x: number, y0: number, y1: number, cathodeTop: boolean, o: { color?: string; zener?: boolean } = {}) {
  const col = o.color ?? C.ink, hw = 10;
  if (cathodeTop) {
    // bar on top, triangle below pointing up at it
    path(s, [[x - hw - 2, y0], [x + hw + 2, y0]], { color: col, w: 2.2 });
    outline(s, [[x, y0], [x - hw, y1], [x + hw, y1]], { color: col, w: 1.8 });
    if (o.zener) { path(s, [[x - hw - 2, y0], [x - hw - 6, y0 + 6]], { color: col, w: 2.2 }); path(s, [[x + hw + 2, y0], [x + hw + 6, y0 - 6]], { color: col, w: 2.2 }); }
    return { cathode: y0, anode: y1 };
  }
  path(s, [[x - hw - 2, y1], [x + hw + 2, y1]], { color: col, w: 2.2 });
  outline(s, [[x - hw, y0], [x + hw, y0], [x, y1]], { color: col, w: 1.8 });
  if (o.zener) { path(s, [[x - hw - 2, y1], [x - hw - 6, y1 + 6]], { color: col, w: 2.2 }); path(s, [[x + hw + 2, y1], [x + hw + 6, y1 - 6]], { color: col, w: 2.2 }); }
  return { cathode: y1, anode: y0 };
}

/* ===================================================================== */
/* p12-15-00-d1 · screw gauge, studs closed: zero error (topic 00)        */
/* ===================================================================== */
/**
 * The screw gauge of the chapter's worked example: pitch 1 mm, 100 circular
 * divisions, LC = 0.01 mm. The studs are closed; the circular scale is drawn
 * as it turns past the reference line, divisions numbered upward (0, 5, ...,
 * 95). A division sits at y = y_line − (u − n) × 8 px, u the unwrapped count
 * (u = 100 is the zero mark again), so the zero mark's place follows from the
 * division on the line. Panel A: division 4 on the line, so the zero mark is
 * 4 divisions below it, e = +4 × LC. Panel B: division 94 on the line, the
 * zero mark (u = 100) is 6 divisions above it, e = −6 × LC.
 */
const PITCH = 1, NDIV = 100, LC_SG = PITCH / NDIV;
const SG = { sp: 8, yc: 104, anv: [20, 52] as [number, number], spi: [52, 84] as [number, number], sle: [84, 128] as [number, number], ref: 208, dim: 188, dx: [200, 300] as [number, number], span: 9 };
/** The unwrapped division count u at the zero mark, given the division n on the line. */
const zeroU = (n: number) => (n <= NDIV / 2 ? 0 : NDIV);
const tickY = (u: number, n: number) => SG.yc - (u - n) * SG.sp;
const zeroErr = (n: number) => (n <= NDIV / 2 ? n : n - NDIV);
const sgCases = [
  { chip: 'Positive error', n: 4, cap: 'Screw gauge with the studs closed (pitch 1 mm, 100 circular divisions, least count 0.01 mm). The 4th division is on the reference line, so the zero mark has not yet reached it: the zero error is e = +4 × LC = +0.04 mm.' },
  { chip: 'Negative error', n: 94, cap: 'Screw gauge with the studs closed. The 94th division is on the reference line, so the zero mark has passed it by 6 divisions: the zero error is e = −6 × LC = −0.06 mm.' },
];
const figSg: Diagram = {
  id: 'p12-15-00-d1',
  topic: 0,
  name: 'Screw gauge zero error',
  cases: sgCases,
  draw(c) {
    const s = new Sketch(W, 292);
    const n: number = c.n, { yc, anv, spi, sle, ref, dim, dx, span } = SG;
    const z = zeroU(n), yz = tickY(z, n), e = zeroErr(n);
    // the closed studs: anvil, spindle, and the sleeve that carries the reference line
    box(s, [anv[0], yc - 26, anv[1], yc + 26]);
    box(s, [spi[0], yc - 7, spi[1], yc + 7]);
    box(s, [sle[0], yc - 11, sle[1], yc + 11]);
    // the circular scale on the drum
    const top = tickY(n + span, n) - 14, bot = tickY(n - span, n) + 14;
    box(s, [dx[0], top, dx[1], bot]);
    for (let u = n - span; u <= n + span; u++) {
      const y = tickY(u, n), dv = ((u % NDIV) + NDIV) % NDIV, five = dv % 5 === 0, isZero = u === z;
      path(s, [[dx[0], y], [dx[0] + (five ? 12 : 7), y]], { color: isZero ? C.mari : C.ink, w: isZero ? 2.6 : 1.3, free: true });
      if (five) s.sym(dx[0] + 20, y + 4, isZero ? '0 (zero mark)' : String(dv), { size: 11, anchor: 'start', color: isZero ? C.amber : C.slate });
    }
    // the reference line, through the sleeve and onto the drum
    path(s, [[sle[0], yc], [ref, yc]], { w: 1.7 });
    // how far the zero mark is from the line, in divisions
    measure(s, [dim, yc], [dim, yz]);
    s.sym(dim - 10, (yc + yz) / 2 + 4, `${Math.abs(e)} div`, { size: 12, anchor: 'end', color: C.slate });
    resultBlock(s, [`<i>e</i> = ${e > 0 ? '+' : '−'}${Math.abs(e)} × LC = ${e > 0 ? '+' : '−'}${fmt(Math.abs(e) * LC_SG, 2)} mm`, '(LC 0.01 mm)'], { size: 15 });
    placeAll(s, [
      { t: 'Spindle', p: [(spi[0] + spi[1]) / 2, yc - 7], dirs: 'uUV', ds: [14, 30, 50, 70] },
      { t: 'Anvil', p: [anv[0] + 8, yc + 26], dirs: 'dWX', ds: [8, 14, 24] },
      { t: 'Reference line', p: [(sle[0] + sle[1]) / 2, yc], dirs: 'dWXuUV', ds: [46, 62], at: [[sle[0] - 2, yc + 46, 'start']] },
      { t: 'Circular scale', p: [dx[1], (top + bot) / 2], dirs: 'rdXW', ds: [8, 30], at: [[dx[1] - 114, bot + 8, 'start']] },
    ]);
    return s;
  },
  check(c) {
    const n: number = c.n, { sp, yc } = SG, z = zeroU(n), yz = tickY(z, n), e = zeroErr(n);
    const s = figSg.draw(c);
    const eDiv = (yz - yc) / sp;
    const label = c.cap.match(/e = ([+−]\d) × LC = ([+−]0\.0\d) mm/);
    const obs = [1.52, 1.55, 1.5, 1.53, 1.54], corr = obs.map((v) => v - e * LC_SG);
    return [
      [`LC = pitch/divisions = ${PITCH} mm/${NDIV} = ${fmt(LC_SG, 2)} mm`, close(LC_SG, 0.01, 1e-12)],
      [`Division ${n} is on the reference line (y = ${SG.yc}); the zero mark is ${Math.abs(eDiv)} divisions ${eDiv > 0 ? 'below' : 'above'} it, drawn at y = ${r1(yz)}`, close(Math.abs(eDiv), Math.abs(e), 1e-9)],
      ['Divisions are numbered upward: the 5 mark is drawn above the 0 mark, the 95 mark above the 90 mark', tickY(5, n) < tickY(0, n) && tickY(95, n) < tickY(90, n)],
      [`The zero mark below the line (not yet reached it) means a positive error, above the line (passed it) a negative one: e = ${e > 0 ? '+' : '−'}${Math.abs(e)} divisions`, (eDiv > 0) === (e > 0) && (n < 50) === (e > 0)],
      [`The drawn rule agrees with the text: n ≤ 50 gives e = +n, otherwise e = −(100 − n): ${e} divisions`, e === (n <= 50 ? n : -(100 - n))],
      [`The caption's figure matches the drawing: e = ${e > 0 ? '+' : '−'}${Math.abs(e)} × LC = ${e > 0 ? '+' : '−'}${fmt(Math.abs(e) * LC_SG, 2)} mm`, !!label && label[1] === `${e > 0 ? '+' : '−'}${Math.abs(e)}` && label[2] === `${e > 0 ? '+' : '−'}${fmt(Math.abs(e) * LC_SG, 2)}`],
      [`Corrected reading = observed − e: the worked example's observed mean 1.528 mm gives ${fmt(corr.reduce((a, b) => a + b, 0) / 5, 3)} mm for e = ${e > 0 ? '+0.04 mm (1.488 mm)' : '−0.06 mm (1.588 mm)'}`, e === 4 ? close(corr.reduce((a, b) => a + b, 0) / 5, 1.488, 1e-9) : close(corr.reduce((a, b) => a + b, 0) / 5, 1.588, 1e-9)],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* p12-15-00-d2 · best-fit line through the origin and its slope triangle */
/* ===================================================================== */
/**
 * The example's readings: I = 10..50 mA, V = 1.02, 2.01, 3.03, 3.98, 5.02 V.
 * The line is drawn through the origin with slope 0.100 V/mA (the triangle's
 * Δ V / Δ I, read from the line); the least-squares slope through the origin,
 * ΣVI/ΣI² = 551.5/5500 = 0.1003 V/mA, agrees to 0.3 %.
 */
const D2 = { I: [10, 20, 30, 40, 50], V: [1.02, 2.01, 3.03, 3.98, 5.02], A: [10, 1.0] as P, B: [50, 5.0] as P, slope: 0.1 };
const G2: G = { ox: 56, oy: 262, kx: 4.4, ky: 34 };
const figFit: Diagram = {
  id: 'p12-15-00-d2',
  topic: 0,
  name: 'Best-fit line and slope',
  cases: [{ chip: 'Slope of the line', cap: 'Voltage against current for a resistor: five readings, the best-fit line through the origin (not a join-the-dots line), and a slope triangle on two points far apart on the line. Slope = ΔV/ΔI = 4.00 V/40 mA = 0.100 V/mA = 100 Ω.' }],
  draw() {
    const s = new Sketch(W, 332);
    const g = G2, o = gp(g, 0, 0);
    path(s, [o, gp(g, 60, 0)], { color: C.slate, w: 1.4 });
    path(s, [o, gp(g, 0, 6.1)], { color: C.slate, w: 1.4 });
    head(s, add(gp(g, 60, 0), [8, 0]), [1, 0], C.slate, 8, 3.5);
    head(s, add(gp(g, 0, 6.1), [0, -8]), [0, -1], C.slate, 8, 3.5);
    [10, 20, 30, 40, 50, 60].forEach((x) => { const p = gp(g, x, 0); stub(s, p, add(p, [0, 4])); s.sym(p[0], p[1] + 17, String(x), { size: 11, color: C.slate }); });
    [1, 2, 3, 4, 5, 6].forEach((y) => { const p = gp(g, 0, y); stub(s, p, add(p, [-4, 0])); s.sym(p[0] - 9, p[1] + 4, String(y), { size: 11, anchor: 'end', color: C.slate }); });
    s.sym(o[0] - 9, o[1] + 16, '0', { size: 11, anchor: 'end', color: C.slate });
    s.sym(gp(g, 60, 0)[0] + 12, o[1] - 14, '<i>I</i> (mA)', { size: 13, anchor: 'end' });
    s.sym(o[0] + 6, gp(g, 0, 6.1)[1] - 12, '<i>V</i> (V)', { size: 13, anchor: 'start' });
    // the best-fit line, then the slope triangle
    path(s, [o, gp(g, 57, 57 * D2.slope)], { color: C.mari, w: 2.4 });
    const a = gp(g, D2.A[0], D2.A[1]), b = gp(g, D2.B[0], D2.A[1]), cc = gp(g, D2.B[0], D2.B[1]);
    path(s, [a, b, cc], { color: C.slate, w: 1.4, dash: 'dash' });
    D2.I.forEach((x, i) => cross(s, gp(g, x, D2.V[i])));
    s.sym((a[0] + b[0]) / 2, a[1] + 17, 'Δ<i>I</i> = 40 mA', { size: 12, color: C.slate });
    s.sym(b[0] - 8, gp(g, 0, 2.4)[1] + 4, 'Δ<i>V</i> = 4.00 V', { size: 12, anchor: 'end', color: C.slate });
    resultBlock(s, ['slope = 0.100 V/mA = 100 Ω'], { size: 15 });
    placeAll(s, [{ t: 'Best-fit line', p: gp(g, 22, 2.2), hi: true, dirs: 'ulrdUVWX', ds: [26, 40, 60] }]);
    return s;
  },
  check() {
    const s = figFit.draw(figFit.cases[0]), g = G2;
    const { I, V } = D2;
    const sVI = I.reduce((t, x, i) => t + x * V[i], 0), sII = I.reduce((t, x) => t + x * x, 0), ls = sVI / sII;
    // the drawn triangle read back from its pixels
    const a = gp(g, D2.A[0], D2.A[1]), cc = gp(g, D2.B[0], D2.B[1]);
    const dI = (cc[0] - a[0]) / g.kx, dV = (a[1] - cc[1]) / g.ky;
    const lineAt = (x: number) => x * D2.slope;
    const resid = V.map((v, i) => v - ls * I[i]);
    const above = resid.filter((r) => r > 0).length;
    return [
      [`Σ VI = ${fmt(sVI, 1)} and Σ I² = ${sII}, so the least-squares slope through the origin is ${fmt(ls, 4)} V/mA = ${fmt(ls * 1000, 1)} Ω`, close(sVI, 551.5, 1e-9) && sII === 5500 && close(ls, 0.1003, 1e-4)],
      [`The triangle's corners lie on the drawn best-fit line: (10 mA, ${fmt(lineAt(10), 2)} V) and (50 mA, ${fmt(lineAt(50), 2)} V)`, close(lineAt(D2.A[0]), D2.A[1], 1e-9) && close(lineAt(D2.B[0]), D2.B[1], 1e-9)],
      [`Triangle read off the drawing: ΔI = ${fmt(dI, 1)} mA, ΔV = ${fmt(dV, 2)} V, slope ${fmt(dV / dI, 3)} V/mA = ${fmt((dV / dI) * 1000, 0)} Ω`, close(dI, 40, 1e-6) && close(dV, 4, 1e-6) && close(dV / dI, 0.1, 1e-9)],
      ['The drawn slope agrees with the least-squares slope to 0.3 %, as the example says', Math.abs(ls - D2.slope) / D2.slope < 0.0031],
      ['The line starts at the origin (a straight line through the origin: direct proportionality), and is not the join-the-dots path', close(gInv(g, gp(g, 0, 0))[0], 0) && close(lineAt(0), 0)],
      [`The readings scatter on both sides of the fitted line (${above} above, ${5 - above} below) by at most ${fmt(Math.max(...resid.map(Math.abs)), 3)} V, under the 0.05 V scatter the example shows`, above > 0 && above < 5 && Math.max(...resid.map(Math.abs)) < 0.05],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* p12-15-00-d3 · systematic offset: two parallel lines (topic 00)        */
/* ===================================================================== */
/**
 * V = IR through the origin and V = IR + 0.05 V for a voltmeter that reads
 * 0.05 V too high, with R = 100 Ω = 0.100 V/mA (the example's resistor), I in
 * mA so that the 0.05 V shift is drawn to scale. The same slope triangle
 * (ΔI = 5 mA, ΔV = 0.50 V) sits on each line.
 */
const D3 = { R: 0.1, off: 0.05, t1: [3, 8] as P, t2: [1, 6] as P };
const G3: G = { ox: 56, oy: 262, kx: 22, ky: 165 };
const v3 = (x: number, off: number) => D3.R * x + off;
const figOff: Diagram = {
  id: 'p12-15-00-d3',
  topic: 0,
  name: 'Systematic offset on a graph',
  cases: [{ chip: 'Offset line', cap: 'A voltmeter that reads 0.05 V too high gives V = IR + 0.05 V. The line is parallel to V = IR (the same slope triangle, ΔV/ΔI = 0.50 V/5 mA = 0.100 V/mA = 100 Ω, fits both) but cuts the V axis at +0.05 V instead of passing through the origin.' }],
  draw() {
    const s = new Sketch(W, 332);
    const g = G3, o = gp(g, 0, 0);
    path(s, [o, gp(g, 11, 0)], { color: C.slate, w: 1.4 });
    path(s, [o, gp(g, 0, 1.25)], { color: C.slate, w: 1.4 });
    head(s, add(gp(g, 11, 0), [8, 0]), [1, 0], C.slate, 8, 3.5);
    head(s, add(gp(g, 0, 1.25), [0, -8]), [0, -1], C.slate, 8, 3.5);
    [2, 4, 6, 8, 10].forEach((x) => { const p = gp(g, x, 0); stub(s, p, add(p, [0, 4])); s.sym(p[0], p[1] + 17, String(x), { size: 11, color: C.slate }); });
    [0.2, 0.4, 0.6, 0.8, 1.0, 1.2].forEach((y) => { const p = gp(g, 0, y); stub(s, p, add(p, [-4, 0])); s.sym(p[0] - 9, p[1] + 4, fmt(y, 1), { size: 11, anchor: 'end', color: C.slate }); });
    s.sym(gp(g, 11, 0)[0] + 12, o[1] - 14, '<i>I</i> (mA)', { size: 13, anchor: 'end' });
    s.sym(o[0] + 6, gp(g, 0, 1.25)[1] - 12, '<i>V</i> (V)', { size: 13, anchor: 'start' });
    // the two lines
    path(s, [gp(g, 0, v3(0, 0)), gp(g, 10.4, v3(10.4, 0))], { w: 2 });
    path(s, [gp(g, 0, v3(0, D3.off)), gp(g, 10.4, v3(10.4, D3.off))], { color: C.mari, w: 2.4 });
    // the intercept
    const ic = gp(g, 0, D3.off);
    s.point(ic[0], ic[1], 4, `<circle cx="${r1(ic[0])}" cy="${r1(ic[1])}" r="3.6" fill="none" stroke="${C.mari}" stroke-width="2"/>`);
    s.sym(ic[0] - 11, ic[1] - 5, '+0.05 V', { size: 11, anchor: 'end', color: C.amber });
    // the same triangle on each line: below the plain line, above the offset line
    const p1 = gp(g, D3.t1[0], v3(D3.t1[0], 0)), q1 = gp(g, D3.t1[1], v3(D3.t1[0], 0)), r1p = gp(g, D3.t1[1], v3(D3.t1[1], 0));
    path(s, [p1, q1, r1p], { color: C.slate, w: 1.4, dash: 'dash' });
    s.sym((p1[0] + q1[0]) / 2, p1[1] + 17, 'Δ<i>I</i> = 5 mA', { size: 12, color: C.slate });
    s.sym(q1[0] + 9, (q1[1] + r1p[1]) / 2 + 4, 'Δ<i>V</i> = 0.50 V', { size: 12, anchor: 'start', color: C.slate });
    const p2 = gp(g, D3.t2[0], v3(D3.t2[0], D3.off)), q2 = gp(g, D3.t2[0], v3(D3.t2[1], D3.off)), r2p = gp(g, D3.t2[1], v3(D3.t2[1], D3.off));
    path(s, [p2, q2, r2p], { color: C.slate, w: 1.4, dash: 'dash' });
    s.sym((q2[0] + r2p[0]) / 2, q2[1] - 8, 'Δ<i>I</i> = 5 mA', { size: 12, color: C.slate });
    s.sym(q2[0] + 8, q2[1] + 16, 'Δ<i>V</i> = 0.50 V', { size: 12, anchor: 'start', color: C.slate });
    resultBlock(s, ['same slope, <i>R</i> = 100 Ω'], { size: 15 });
    placeAll(s, [
      { t: 'V = IR', p: gp(g, 9.2, v3(9.2, 0)), dirs: 'dXrWlu', ds: [20, 34, 52] },
      { t: 'V = IR + 0.05 V', p: gp(g, 7.2, v3(7.2, D3.off)), hi: true, dirs: 'uUVlrdWX', ds: [22, 38, 56] },
    ]);
    return s;
  },
  check() {
    const s = figOff.draw(figOff.cases[0]), g = G3;
    // read both drawn lines back from their pixels
    const l0 = [gp(g, 0, v3(0, 0)), gp(g, 10.4, v3(10.4, 0))], l1 = [gp(g, 0, v3(0, D3.off)), gp(g, 10.4, v3(10.4, D3.off))];
    const slope = (l: P[]) => ((l[0][1] - l[1][1]) / g.ky) / ((l[1][0] - l[0][0]) / g.kx);
    const icept = (l: P[]) => (g.oy - l[0][1]) / g.ky;
    const tri = (a: P, b: P) => [(b[0] - a[0]) / g.kx, (a[1] - b[1]) / g.ky];
    const t1 = tri(gp(g, D3.t1[0], v3(D3.t1[0], 0)), gp(g, D3.t1[1], v3(D3.t1[1], 0))), t2 = tri(gp(g, D3.t2[0], v3(D3.t2[0], D3.off)), gp(g, D3.t2[1], v3(D3.t2[1], D3.off)));
    const gaps = [0, 3, 7, 10].map((x) => v3(x, D3.off) - v3(x, 0));
    const offPx = (l1[0][1] - l0[0][1]) / g.ky;
    return [
      [`Slope of the plain line ${fmt(slope(l0), 3)} V/mA and of the offset line ${fmt(slope(l1), 3)} V/mA: equal, = R = 100 Ω`, close(slope(l0), slope(l1), 1e-9) && close(slope(l0), 0.1, 1e-9)],
      [`Intercepts: ${fmt(icept(l0), 2)} V for V = IR (through the origin) and ${fmt(icept(l1), 2)} V for V = IR + 0.05 V`, close(icept(l0), 0, 1e-9) && close(icept(l1), 0.05, 1e-9)],
      [`The lines stay ${fmt(gaps[0], 2)} V apart at every current (${gaps.map((x) => fmt(x, 2)).join(', ')}), so they are parallel; drawn ${fmt(-offPx, 3)} V apart at the V axis`, gaps.every((x) => close(x, 0.05, 1e-9)) && close(-offPx, 0.05, 1e-9)],
      [`The same triangle on both lines: ΔI = ${fmt(t1[0], 1)} and ${fmt(t2[0], 1)} mA, ΔV = ${fmt(t1[1], 2)} and ${fmt(t2[1], 2)} V, slope ${fmt(t1[1] / t1[0], 3)} V/mA`, close(t1[0], 5, 1e-9) && close(t2[0], 5, 1e-9) && close(t1[1], 0.5, 1e-9) && close(t2[1], 0.5, 1e-9)],
      ['The 0.05 V offset is drawn to scale (8 px or more), so it can be seen', -offPx * g.ky >= 8],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* p12-15-04-d1 · diode circuits, forward and reverse bias (topic 04)     */
/* ===================================================================== */
/**
 * Two cases, one circuit each (side by side they would not fit a phone).
 * Source across a rheostat used as a potential divider; the slider's output
 * goes through a protective resistor and a meter in series with the diode.
 * Forward: anode to +, milliammeter, voltmeter across the diode alone.
 * Reverse: cathode to +, microammeter, voltmeter across diode and
 * microammeter together (its current then bypasses the microammeter).
 */
const DC = { yTop: 40, yBot: 246, xb: 26, xr: 70, yS: 96, xd: 240, yd0: 154, yd1: 174, mC: [214, 96] as P, mr: 17, xR: [124, 164] as [number, number] };
function buildDiode(rev: boolean) {
  const s = new Sketch(W, 298);
  const { yTop, yBot, xb, xr, yS, xd, yd0, yd1, mC, mr, xR } = DC;
  const yBat = 128, xs = xr + 32;
  // source, rheostat, rails
  battery(s, xb, yBat);
  wire(s, [[xb, yBat], [xb, yTop], [xr, yTop]]);
  wire(s, [[xr, yTop], [xr, 56]]);
  resistor(s, [xr, 56], [xr, 196], { hw: 10 });
  wire(s, [[xr, 196], [xr, yBot]]);
  wire(s, [[xb, yBat + 12], [xb, yBot], [xd, yBot]]);
  s.sym(xb + 21, yBat + 4, '+', { size: 15, anchor: 'start' });
  s.sym(xb + 21, yBat + 22, '−', { size: 15, anchor: 'start' });
  // slider: an arrow touching the rheostat, its wire leading out
  arrow(s, [xs, yS], [xr + 11, yS]);
  wire(s, [[xs, yS], [xR[0], yS]]);
  resistor(s, [xR[0], yS], [xR[1], yS], { hw: 9 });
  wire(s, [[xR[1], yS], [mC[0] - mr, yS]]);
  meter(s, mC, mr, rev ? 'μA' : 'mA');
  wire(s, [[mC[0] + mr, yS], [xd, yS], [xd, yd0]]);
  diode(s, xd, yd0, yd1, rev, { color: C.mari });
  wire(s, [[xd, yd1], [xd, yBot]]);
  // the voltmeter
  let vt: P, vb: P, vc: P;
  if (!rev) {
    vt = [xd, 126]; vb = [xd, 210]; vc = [190, 168];
    wire(s, [vt, [190, 126], [190, 152]]);
    meter(s, vc, 16, 'V');
    wire(s, [[190, 184], [190, 210], vb]);
  } else {
    vt = [190, yS]; vb = [190, yBot]; vc = [190, 142];
    wire(s, [vt, [190, 126]]);
    meter(s, vc, 16, 'V');
    wire(s, [[190, 158], vb]);
  }
  junction(s, vt);
  junction(s, vb);
  const anodeY = rev ? yd1 : yd0, cathodeY = rev ? yd0 : yd1;
  resultBlock(s, [rev ? 'Voltmeter across diode and μA' : 'Voltmeter across the diode alone'], { size: 14 });
  placeAll(s, [
    { t: 'Voltmeter', p: [vc[0] - 16, vc[1]], dirs: 'lWXdu', ds: [8, 16, 30, 44], at: rev ? [[184, 170, 'end']] : [] },
    { t: 'Rheostat', p: [xr + 10, 184], dirs: 'rXW', ds: [8, 16, 30], at: rev ? [[xr + 22, 216, 'start']] : [[xr + 22, 191, 'start'], [xr + 22, 214, 'start']] },
    { t: 'Slider', p: [xs, yS], dirs: 'UdWuX', ds: [14, 24, 40] },
    { t: 'Resistor', p: [(xR[0] + xR[1]) / 2, yS + 9], dirs: 'dWXuUV', ds: [10, 20, 34], at: [[92, 118, 'start'], [92, 126, 'start']] },
    { t: rev ? 'Microammeter' : 'Milliammeter', p: [mC[0], yS - mr], dirs: 'uUVdXW', ds: [8, 14, 24] },
    { t: 'Diode', p: [xd + 12, (yd0 + yd1) / 2], hi: true, dirs: 'rVUXW', ds: [8, 18, 30] },
  ]);
  const terms: Record<string, P> = {
    srcP: [xb, yBat], srcN: [xb, yBat + 12], rhTop: [xr, yTop], rhBot: [xr, yBot], slider: [xs, yS],
    Rl: [xR[0], yS], Rr: [xR[1], yS], Ml: [mC[0] - mr, yS], Mr: [mC[0] + mr, yS],
    Da: [xd, anodeY], Dk: [xd, cathodeY], Vt: vt, Vb: vb,
  };
  return { s, terms };
}
const diodeCase = (rev: boolean) => ({
  chip: rev ? 'Reverse bias' : 'Forward bias',
  rev,
  cap: rev
    ? 'Reverse-bias circuit of a diode: the diode is reversed (cathode to the positive side) and a microammeter replaces the milliammeter. The voltmeter is connected across the diode and the microammeter together, so its current bypasses the microammeter.'
    : 'Forward-bias circuit of a diode: a variable source with a rheostat as a potential divider, a protective resistor and a milliammeter in series with the diode (anode to the positive side). The voltmeter is connected directly across the diode alone.',
});
const figDiodeCkt: Diagram = {
  id: 'p12-15-04-d1',
  topic: 4,
  name: 'Diode circuits',
  cases: [diodeCase(false), diodeCase(true)],
  draw: (c) => buildDiode(c.rev).s,
  check(c) {
    const { s, terms } = buildDiode(c.rev);
    const net = nodes(s, terms);
    const want: string[][] = c.rev
      ? [['rhTop', 'srcP'], ['Rl', 'slider'], ['Rr', 'Vt', 'Ml'], ['Dk', 'Mr'], ['Da', 'Vb', 'rhBot', 'srcN']]
      : [['rhTop', 'srcP'], ['Rl', 'slider'], ['Ml', 'Rr'], ['Da', 'Mr', 'Vt'], ['Dk', 'Vb', 'rhBot', 'srcN']];
    const gnd = net.find((g) => g.includes('srcN')) ?? [];
    const forward = gnd.includes('Dk') && !gnd.includes('Da');
    const tap = (196 - DC.yS) / (196 - 56);
    // numbers of the text: 5 V across 1 MΩ, a forward diode of a few hundred ohms or less
    const Iv = 5 / 1e6, Rfwd = 70, Rv = 1e6;
    return [
      [`Read off the wires: ${showNodes(net)}`, sameNodes(net, want)],
      [`The slider touches the rheostat between its ends (${fmt(tap * 100, 0)} % of the way up from the common end): a potential divider, so the output runs from 0 up`, tap > 0 && tap < 1 && close(DC.xr + 11, DC.xr + 11) && DC.yS > 56 && DC.yS < 196],
      [`The resistor, the ${c.rev ? 'microammeter' : 'milliammeter'} and the diode are in series from the slider to the common rail`, c.rev ? sameNodes(nodes(s, { Rr: terms.Rr, Ml: terms.Ml }), [['Ml', 'Rr']]) : sameNodes(nodes(s, { Rr: terms.Rr, Ml: terms.Ml }), [['Ml', 'Rr']])],
      [`${c.rev ? 'Reverse' : 'Forward'} bias: the ${c.rev ? 'cathode' : 'anode'} is on the slider side and the ${c.rev ? 'anode' : 'cathode'} on the common (negative) rail`, c.rev ? !forward : forward],
      [c.rev ? 'The voltmeter spans the microammeter and the diode together (its top node is before the microammeter)' : 'The voltmeter spans the diode alone (its nodes are the diode terminals)', c.rev ? net.some((g) => g.includes('Vt') && g.includes('Ml')) && net.some((g) => g.includes('Vb') && g.includes('Da')) : net.some((g) => g.includes('Vt') && g.includes('Da')) && net.some((g) => g.includes('Vb') && g.includes('Dk'))],
      [c.rev ? `A voltmeter across the diode alone would pass 5 V/1 MΩ = ${fmt(Iv * 1e6, 0)} μA through the microammeter, the figure in the text` : `The 1 MΩ voltmeter across a forward diode of ${Rfwd} Ω takes ${fmt((Rfwd / (Rfwd + Rv)) * 100, 4)} % of the diode's current: negligible`, c.rev ? close(Iv, 5e-6, 1e-12) : Rfwd / (Rfwd + Rv) < 1e-3],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* p12-15-04-d2 · silicon diode I-V curve (topic 04)                      */
/* ===================================================================== */
/**
 * Forward readings from the chapter's table (LC of voltmeter 0.01 V, of
 * milliammeter 0.1 mA), joined by a monotone interpolation so the curve
 * passes through every one. Reverse: the table says the microammeter shows
 * nothing and the leakage is of the order of nanoamperes, so the third
 * quadrant draws the ideal-junction reverse current I = −Is(1 − e^(V/V_T))
 * with Is = 10 nA on a separate, expanded scale (the text gives no reverse
 * readings: this curve is the shape, the 10 nA is an illustrative order of
 * magnitude).
 */
const FWD = { V: [0.3, 0.4, 0.5, 0.55, 0.6, 0.65, 0.68, 0.7, 0.72, 0.75], I: [0, 0, 0.1, 0.4, 1.1, 3.3, 6.4, 10, 15.6, 30.4] };
const ISAT_UA = 0.01, VT = 0.026;
const D2G = { xo: 150, yo: 188, kv: 212, kva: 11, ki: 5, kia: 300 };
const revI = (v: number) => -ISAT_UA * (1 - Math.exp(v / VT));
const figIV: Diagram = {
  id: 'p12-15-04-d2',
  topic: 4,
  name: 'Silicon diode I–V curve',
  cases: [{ chip: 'I–V curve', cap: 'I–V curve of a silicon diode. Forward bias (first quadrant, current in mA): almost no current up to about 0.5 V, then a steep rise, the knee between 0.6 V and 0.75 V. Reverse bias (third quadrant, current in μA on a separate expanded scale): almost flat near zero out to −10 V.' }],
  draw() {
    const s = new Sketch(W, 334);
    const { xo, yo, kv, kva, ki, kia } = D2G;
    const fx = (v: number) => xo + kv * v, fy = (i: number) => yo - ki * i;
    // axes: x from −10 V to +0.8 V, y from +32 mA to the reverse scale
    path(s, [[xo - 10 * kva - 4, yo], [fx(0.8) + 2, yo]], { color: C.slate, w: 1.4 });
    path(s, [[xo, fy(32)], [xo, yo + 70]], { color: C.slate, w: 1.4 });
    head(s, [fx(0.8) + 10, yo], [1, 0], C.slate, 8, 3.5);
    head(s, [xo, fy(32) - 8], [0, -1], C.slate, 8, 3.5);
    [0.2, 0.4, 0.6, 0.8].forEach((v) => { const p: P = [fx(v), yo]; stub(s, p, add(p, [0, 4])); s.sym(p[0], p[1] + 17, fmt(v, 1), { size: 11, color: C.slate }); });
    [-2, -4, -6, -8, -10].forEach((v) => { const p: P = [xo + kva * v, yo]; stub(s, p, add(p, [0, -4])); s.sym(p[0], p[1] - 9, fmt(v, 0), { size: 11, color: C.slate }); });
    [10, 20, 30].forEach((i) => { const p: P = [xo, fy(i)]; stub(s, p, add(p, [-4, 0])); s.sym(p[0] - 9, p[1] + 4, String(i), { size: 11, anchor: 'end', color: C.slate }); });
    s.sym(fx(0.8) + 12, yo - 15, '<i>V</i> (V)', { size: 13, anchor: 'end' });
    s.sym(xo + 8, fy(32) - 16, '<i>I</i> (mA)', { size: 13, anchor: 'start' });
    s.sym(xo, yo + 70 + 18, '<i>I</i> (μA)', { size: 13 });
    // forward curve through the table, and the readings
    const f = pchip(FWD.V, FWD.I);
    path(s, samples(0.3, 0.75, 120).map((v): P => [fx(v), fy(f(v))]), { w: 2 });
    path(s, [[xo, yo], [fx(0.3), yo]], { w: 2 });
    FWD.V.forEach((v, i) => { if (v !== 0.7) cross(s, [fx(v), fy(FWD.I[i])], 3); });
    // reverse curve, expanded scale
    path(s, samples(0, -10, 200).map((v): P => [xo + kva * v, yo - kia * revI(v)]), { w: 2 });
    // the knee, at about 0.7 V
    const kp: P = [fx(0.7), fy(10)];
    s.point(kp[0], kp[1], 5, `<circle cx="${r1(kp[0])}" cy="${r1(kp[1])}" r="4.6" fill="none" stroke="${C.mari}" stroke-width="2.4"/>`);
    guide(s, [kp[0], kp[1] + 6], [kp[0], yo - 2], C.mari, 'dot');
    s.sym(kp[0], yo + 33, '≈ 0.7 V', { size: 12, color: C.amber });
    resultBlock(s, ['Silicon: knee at about 0.7 V'], { size: 14 });
    placeAll(s, [
      { t: 'Knee', p: kp, hi: true, bare: true, dirs: 'lUWrd', ds: [14, 28, 46, 70, 90] },
      { t: 'Forward (mA)', p: [fx(0.745), fy(f(0.745))], bare: true, dirs: 'lWUd', ds: [10, 24, 44], at: [[xo + 4, fy(27), 'start']] },
      { t: 'Reverse (μA)', p: [xo - 6 * kva, yo - kia * revI(-6)], dirs: 'dXWu', ds: [20, 34], at: [[xo - 6 * kva - 20, yo + 22, 'end'], [xo - 6 * kva - 40, yo + 22, 'end']] },
    ]);
    return s;
  },
  check() {
    const s = figIV.draw(figIV.cases[0]);
    const { xo, yo, kv, kva, ki, kia } = D2G;
    const f = pchip(FWD.V, FWD.I);
    const readBack = FWD.V.map((v, i) => Math.abs(f(v) - FWD.I[i]));
    const mono = samples(0.3, 0.75, 300).every((v, i, a) => i === 0 || f(v) >= f(a[i - 1]) - 1e-12);
    const dyn = (v1: number, v2: number) => (v2 - v1) / ((f(v2) - f(v1)) * 1e-3);
    const r1v = dyn(0.6, 0.65), r2v = dyn(0.7, 0.72), Rs = 0.7 / (f(0.7) * 1e-3);
    // slope of the drawn curve at 0.5 V and 0.7 V
    const sl = (v: number) => (f(v + 0.005) - f(v - 0.005)) / 0.01;
    const px = (v: number): P => [xo + kv * v, yo - ki * f(v)];
    const revPts = samples(0, -10, 200).map((v): P => [xo + kva * v, yo - kia * revI(v)]);
    return [
      [`The forward curve reproduces every table reading to ${fmt(Math.max(...readBack), 4)} mA (0.1 mA at 0.50 V, 1.1 at 0.60, 10.0 at 0.70, 30.4 at 0.75)`, Math.max(...readBack) < 1e-9 && f(0.5) === 0.1 && f(0.6) === 1.1 && f(0.7) === 10 && f(0.75) === 30.4],
      ['The forward curve rises monotonically and never dips below zero', mono && f(0.3) === 0],
      [`Dynamic resistance 0.60–0.65 V = ${fmt(r1v, 1)} Ω, 0.70–0.72 V = ${fmt(r2v, 2)} Ω, static R at 0.70 V = ${fmt(Rs, 0)} Ω (the example's 22.7, 3.57, 70)`, fmt(r1v, 1) === '22.7' && fmt(r2v, 2) === '3.57' && fmt(Rs, 0) === '70'],
      [`The knee at about 0.7 V lies between 0.6 and 0.75 V, where the slope has risen from ${fmt(sl(0.5), 1)} to ${fmt(sl(0.7), 0)} mA/V, over ${fmt(sl(0.7) / sl(0.5), 0)} times`, 0.6 <= 0.7 && 0.7 <= 0.75 && sl(0.7) > 50 * sl(0.5)],
      ['Forward points are drawn in the first quadrant (right of and above the axes), the marked knee at (0.70 V, 10.0 mA)', px(0.7)[0] > xo && px(0.7)[1] < yo && close(px(0.7)[1], yo - ki * 10, 1e-9)],
      [`Reverse points are drawn in the third quadrant (left of and below the axes), flat: from −1 V to −10 V the current changes by ${fmt(Math.abs(revI(-10) - revI(-1)) * 1000, 3)} nA, at most ${fmt(Math.abs(revI(-10)) * 1000, 0)} nA, of the order of nanoamperes`, revPts.every((p) => p[0] <= xo + 1e-9 && p[1] >= yo - 1e-9) && Math.abs(revI(-10) - revI(-1)) < 1e-6 && Math.abs(revI(-10)) * 1000 <= 10.0001],
      ['The reverse scale is separate and expanded: 1 μA is drawn much taller than 1 mA, and the volt scale is 19 times coarser than the forward one', kia > 100 * (ki / 1000) && kv / kva > 15],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* p12-15-04-d3 · Zener voltage regulator (topic 04)                      */
/* ===================================================================== */
/**
 * The regulator of the worked example: V_in = 12 V, R_s = 150 Ω, a 5.1 V
 * Zener across the load R_L = 510 Ω. The Zener is drawn in reverse (cathode up,
 * towards the +), in parallel with the load, so V_out = V_z.
 */
const RG = { yTop: 62, yBot: 222, xb: 36, xs: [72, 132] as [number, number], xz: 186, xl: 274, xo: 308, zy: [124, 148] as [number, number], ly: [112, 172] as [number, number] };
function buildReg() {
  const s = new Sketch(W, 292);
  const { yTop, yBot, xb, xs, xz, xl, xo, zy, ly } = RG;
  const yBat = 118;
  battery(s, xb, yBat);
  s.sym(xb + 21, yBat + 4, '+', { size: 15, anchor: 'start' });
  s.sym(xb + 21, yBat + 22, '−', { size: 15, anchor: 'start' });
  s.sym(xb + 14, 192, '<i>V</i><sub>in</sub>', { size: 16, anchor: 'start' });
  wire(s, [[xb, yBat], [xb, yTop], [xs[0], yTop]]);
  resistor(s, [xs[0], yTop], [xs[1], yTop], { hw: 10 });
  wire(s, [[xs[1], yTop], [xl, yTop], [xo, yTop]]);
  wire(s, [[xb, yBat + 12], [xb, yBot], [xo, yBot]]);
  // the Zener branch: cathode up
  wire(s, [[xz, yTop], [xz, zy[0]]]);
  const zd = diode(s, xz, zy[0], zy[1], true, { color: C.mari, zener: true });
  wire(s, [[xz, zy[1]], [xz, yBot]]);
  // the load branch
  wire(s, [[xl, yTop], [xl, ly[0]]]);
  resistor(s, [xl, ly[0]], [xl, ly[1]], { hw: 10 });
  wire(s, [[xl, ly[1]], [xl, yBot]]);
  junction(s, [xz, yTop]);
  junction(s, [xl, yTop]);
  junction(s, [xz, yBot]);
  junction(s, [xl, yBot]);
  // output terminals
  [[xo, yTop], [xo, yBot]].forEach(([x, y]) => s.point(x, y, 4.4, `<circle cx="${x}" cy="${y}" r="3.8" fill="#fff" stroke="${C.ink}" stroke-width="1.7"/>`));
  measure(s, [xo + 14, yTop + 14], [xo + 14, yBot - 14]);
  s.sym(xo + 10, yTop - 14, '<i>V</i><sub>out</sub> = <i>V</i><sub>z</sub>', { size: 15, anchor: 'end' });
  // the currents
  head(s, [xs[1] + 36, yTop], [1, 0]);
  s.sym(xs[1] + 26, yTop - 12, '<i>I</i><sub>s</sub>', { size: 15 });
  head(s, [xz, 98], [0, 1]);
  s.sym(xz + 10, 98 + 4, '<i>I</i><sub>z</sub>', { size: 15, anchor: 'start' });
  head(s, [xl, 90], [0, 1]);
  s.sym(xl + 10, 90 + 4, '<i>I</i><sub>L</sub>', { size: 15, anchor: 'start' });
  resultBlock(s, ['<i>I</i><sub>s</sub> = <i>I</i><sub>z</sub> + <i>I</i><sub>L</sub>'], { size: 15, subRoom: 6 });
  placeAll(s, [
    { t: 'Series resistor', p: [(xs[0] + xs[1]) / 2, yTop - 10], dirs: 'uUV', ds: [16, 34, 52], at: [[134, 20, 'end']] },
    { t: 'Zener diode', p: [xz - 12, (zy[0] + zy[1]) / 2], hi: true, dirs: 'lWXd', ds: [8, 16, 30, 50], at: [[160, 152, 'end'], [160, 108, 'end']] },
    { t: 'Load', p: [xl - 10, (ly[0] + ly[1]) / 2], dirs: 'lWXd', ds: [8, 16, 30] },
  ]);
  const terms: Record<string, P> = { srcP: [xb, yBat], srcN: [xb, yBat + 12], Rsl: [xs[0], yTop], Rsr: [xs[1], yTop], Zk: [xz, zd.cathode], Za: [xz, zd.anode], Ll: [xl, ly[0]], Lb: [xl, ly[1]], OutP: [xo, yTop], OutN: [xo, yBot] };
  return { s, terms };
}
const figReg: Diagram = {
  id: 'p12-15-04-d3',
  topic: 4,
  name: 'Zener voltage regulator',
  cases: [{ chip: 'Regulator', cap: 'Zener voltage regulator: the input <i>V</i><sub>in</sub> feeds a series resistor <i>R</i><sub>s</sub>. The Zener diode, connected in reverse (cathode towards the positive side), and the load <i>R</i><sub>L</sub> are both across the output, so <i>V</i><sub>out</sub> = <i>V</i><sub>z</sub>. The supply current <i>I</i><sub>s</sub> splits into the Zener current <i>I</i><sub>z</sub> and the load current <i>I</i><sub>L</sub>.' }],
  draw: () => buildReg().s,
  check() {
    const { s, terms } = buildReg();
    const net = nodes(s, terms);
    const Vin = 12, Rs = 150, Vz = 5.1, RL = 510, Pmax = 0.5;
    const Is = (Vin - Vz) / Rs, IL = Vz / RL, Iz = Is - IL, Izmax = Pmax / Vz;
    // direction of the three drawn current arrows: in at the node from Rs, out down the diode and down the load
    return [
      [`Read off the wires: ${showNodes(net)}`, sameNodes(net, [['srcP', 'Rsl'], ['OutP', 'Rsr', 'Zk', 'Ll'], ['Za', 'Lb', 'OutN', 'srcN']])],
      ['The Zener is in parallel with the load (same two nodes) and both are across the output terminals, so V_out = V_z', net.some((g) => g.includes('Zk') && g.includes('Ll') && g.includes('OutP')) && net.some((g) => g.includes('Za') && g.includes('Lb') && g.includes('OutN'))],
      ['The series resistor is between the input and that node, not across the load', net.some((g) => g.includes('Rsr') && g.includes('Zk')) && net.some((g) => g.includes('srcP') && g.includes('Rsl'))],
      ['Reverse connection: the cathode is drawn at the top, on the node that is positive with respect to the lower rail', terms.Zk[1] < terms.Za[1] && net.some((g) => g.includes('Zk') && g.includes('Rsr'))],
      [`Example numbers: I_s = (12 − 5.1)/150 = ${fmt(Is * 1000, 0)} mA, I_L = 5.1/510 = ${fmt(IL * 1000, 0)} mA, I_z = ${fmt(Iz * 1000, 0)} mA, and I_s = I_z + I_L`, close(Is, 0.046, 1e-9) && close(IL, 0.01, 1e-9) && close(Iz, 0.036, 1e-9) && close(Is, Iz + IL, 1e-12)],
      [`I_z = ${fmt(Iz * 1000, 0)} mA is below I_z,max = 0.5/5.1 = ${fmt(Izmax * 1000, 0)} mA, so the diode is safe`, Iz < Izmax && fmt(Izmax * 1000, 0) === '98'],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* p12-15-04-d4 · Zener characteristic circuit (topic 04)                 */
/* ===================================================================== */
const ZC = { yTop: 60, yBot: 204, xb: 26, xd: 214, zy: [112, 136] as [number, number], mC: [152, 60] as P, mr: 17, xR: [62, 112] as [number, number] };
function buildZc() {
  const s = new Sketch(W, 274);
  const { yTop, yBot, xb, xd, zy, mC, mr, xR } = ZC;
  const yBat = 110;
  battery(s, xb, yBat);
  s.sym(xb + 21, yBat + 4, '+', { size: 15, anchor: 'start' });
  s.sym(xb + 21, yBat + 22, '−', { size: 15, anchor: 'start' });
  // the arrow across the cell: the supply is variable
  arrow(s, [xb - 18, yBat + 32], [xb + 18, yBat - 20], { w: 1.6 });
  wire(s, [[xb, yBat], [xb, yTop], [xR[0], yTop]]);
  resistor(s, [xR[0], yTop], [xR[1], yTop], { hw: 10 });
  s.sym((xR[0] + xR[1]) / 2, yTop + 32, '100 Ω', { size: 13 });
  wire(s, [[xR[1], yTop], [mC[0] - mr, yTop]]);
  meter(s, mC, mr, 'mA');
  wire(s, [[mC[0] + mr, yTop], [xd, yTop], [xd, zy[0]]]);
  const zd = diode(s, xd, zy[0], zy[1], true, { color: C.mari, zener: true });
  wire(s, [[xd, zy[1]], [xd, yBot]]);
  wire(s, [[xb, yBat + 12], [xb, yBot], [xd, yBot]]);
  // the voltmeter directly across the diode
  const vt: P = [xd, 88], vb: P = [xd, 176], vc: P = [190, 150];
  wire(s, [vt, [vc[0], 88], [vc[0], vc[1] - 16]]);
  meter(s, vc, 16, 'V');
  wire(s, [[vc[0], vc[1] + 16], [vc[0], 176], vb]);
  junction(s, vt);
  junction(s, vb);
  resultBlock(s, ['Voltmeter directly across the diode'], { size: 14 });
  placeAll(s, [
    { t: 'Variable supply', p: [xb, yBat + 12], dirs: 'dWX', ds: [30, 44], at: [[34, 174, 'start']] },
    { t: 'Resistor', p: [(xR[0] + xR[1]) / 2, yTop - 10], dirs: 'uUV', ds: [8, 14, 24], at: [[40, 22, 'start']] },
    { t: 'Milliammeter', p: [mC[0], yTop - mr], dirs: 'uUV', ds: [8, 14, 24], at: [[122, 14, 'start']] },
    { t: 'Zener diode', p: [xd + 12, (zy[0] + zy[1]) / 2], hi: true, dirs: 'rVXUd', ds: [8, 16, 30] },
    { t: 'Voltmeter', p: [vc[0] - 16, vc[1]], dirs: 'lWXdu', ds: [8, 16, 30], at: [[166, 148, 'end']] },
  ]);
  const terms: Record<string, P> = { srcP: [xb, yBat], srcN: [xb, yBat + 12], Rl: [xR[0], yTop], Rr: [xR[1], yTop], Ml: [mC[0] - mr, yTop], Mr: [mC[0] + mr, yTop], Zk: [xd, zd.cathode], Za: [xd, zd.anode], Vt: vt, Vb: vb };
  return { s, terms };
}
const figZc: Diagram = {
  id: 'p12-15-04-d4',
  topic: 4,
  name: 'Zener characteristic circuit',
  cases: [{ chip: 'Reverse characteristic', cap: 'Circuit for the reverse characteristic of a Zener diode: a variable d.c. supply, a 100 Ω series protective resistor and a milliammeter, with the Zener diode connected cathode to the positive side. The voltmeter is connected directly across the diode.' }],
  draw: () => buildZc().s,
  check() {
    const { s, terms } = buildZc();
    const net = nodes(s, terms);
    // the variable-supply arrow must cross the cell's plates
    const arr = [[ZC.xb - 18, 110 + 32], [ZC.xb + 18, 110 - 20]] as [P, P];
    const plate = (y: number, hw: number) => { const t = (y - arr[0][1]) / (arr[1][1] - arr[0][1]), x = arr[0][0] + t * (arr[1][0] - arr[0][0]); return t >= 0 && t <= 1 && Math.abs(x - ZC.xb) <= hw; };
    // text: 5.20 V across the diode at 30.0 mA needs 8.2 V from the supply through 100 Ω
    const supply = 5.2 + 100 * 0.03, rated = 0.5 / 5.2;
    return [
      [`Read off the wires: ${showNodes(net)}`, sameNodes(net, [['Rl', 'srcP'], ['Ml', 'Rr'], ['Mr', 'Vt', 'Zk'], ['Vb', 'Za', 'srcN']])],
      ['The resistor, milliammeter and diode are in series with the supply', net.some((g) => g.includes('Rr') && g.includes('Ml')) && net.some((g) => g.includes('Mr') && g.includes('Zk'))],
      ['The Zener is reverse biased: its cathode is on the side joined to the supply’s + through the resistor and meter, its anode on the − rail', net.some((g) => g.includes('Zk') && g.includes('Mr')) && net.some((g) => g.includes('Za') && g.includes('srcN')) && terms.Zk[1] < terms.Za[1]],
      ['The voltmeter nodes are the diode’s own two sides: directly across the diode, outside the milliammeter', net.some((g) => g.includes('Vt') && g.includes('Zk')) && net.some((g) => g.includes('Vb') && g.includes('Za'))],
      ['The slanted arrow crosses both plates of the cell: the supply is variable', plate(110, 15) && plate(122, 8)],
      [`With the 100 Ω resistor, 5.20 V across the diode at 30.0 mA needs ${fmt(supply, 1)} V from the supply (the text's 8.2 V), and the diode carries ${fmt(5.2 * 0.03, 3)} W, under its 0.5 W rating (limit ${fmt(rated * 1000, 0)} mA)`, close(supply, 8.2, 1e-9) && 5.2 * 0.03 < 0.5],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* p12-15-04-d5 · Zener reverse I-V curve (topic 04)                      */
/* ===================================================================== */
/**
 * The table's ten readings, reverse voltage and current both taken positive.
 * The V axis starts at 3 V (nothing happens below it) so the 0.05 V steps near
 * the knee can be told apart.
 */
const ZR = { V: [3, 4, 4.5, 4.8, 4.9, 5, 5.05, 5.1, 5.15, 5.2], I: [0, 0, 0, 0.2, 0.7, 2.5, 6, 12, 20, 30] };
const GZ: G = { ox: 48, oy: 252, kx: 96, ky: 5.4 };
const zx = (v: number): number => GZ.ox + GZ.kx * (v - 3);
const figZr: Diagram = {
  id: 'p12-15-04-d5',
  topic: 4,
  name: 'Zener reverse curve',
  cases: [{ chip: 'Reverse curve', cap: 'Reverse characteristic of a Zener diode (V axis starts at 3 V): the current is near zero up to about 4.5 V, then rises sharply at the knee, <i>V</i><sub>z</sub> ≈ 5.0 V. In the near-vertical breakdown region the dynamic resistance is <i>r</i><sub>z</sub> = ΔV/ΔI = 0.15 V/24.0 mA = 6.25 Ω.' }],
  draw() {
    const s = new Sketch(W, 352);
    const g = GZ, o: P = [g.ox, g.oy], f = pchip(ZR.V, ZR.I);
    const P2 = (v: number, i: number): P => [zx(v), g.oy - g.ky * i];
    path(s, [o, [zx(5.5), g.oy]], { color: C.slate, w: 1.4 });
    path(s, [o, [g.ox, g.oy - g.ky * 33]], { color: C.slate, w: 1.4 });
    head(s, [zx(5.5) + 8, g.oy], [1, 0], C.slate, 8, 3.5);
    head(s, [g.ox, g.oy - g.ky * 33 - 8], [0, -1], C.slate, 8, 3.5);
    [3, 4, 5].forEach((v) => { const p = P2(v, 0); stub(s, p, add(p, [0, 4])); s.sym(p[0], p[1] + 17, String(v), { size: 11, color: C.slate }); });
    [10, 20, 30].forEach((i) => { const p = P2(3, i); stub(s, p, add(p, [-4, 0])); s.sym(p[0] - 9, p[1] + 4, String(i), { size: 11, anchor: 'end', color: C.slate }); });
    s.sym(zx(5.5) + 12, g.oy + 17, '<i>V</i> (V)', { size: 13, anchor: 'end' });
    s.sym(g.ox + 8, g.oy - g.ky * 33 - 14, '<i>I</i> (mA)', { size: 13, anchor: 'start' });
    path(s, samples(3, 5.2, 220).map((v): P => P2(v, f(v))), { w: 2 });
    ZR.V.forEach((v, i) => { if (ZR.I[i] > 0) cross(s, P2(v, ZR.I[i]), 2.6); });
    // the knee, and Vz on the axis
    const kp = P2(5.0, 2.5);
    s.point(kp[0], kp[1], 5, `<circle cx="${r1(kp[0])}" cy="${r1(kp[1])}" r="4.6" fill="none" stroke="${C.mari}" stroke-width="2.4"/>`);
    guide(s, [kp[0], kp[1] + 6], [kp[0], g.oy - 2], C.mari, 'dot');
    s.sym(kp[0], g.oy + 33, '<i>V</i><sub>z</sub> ≈ 5.0 V', { size: 12, color: C.amber });
    // ΔV and ΔI between 5.05 V (6.0 mA) and 5.20 V (30.0 mA)
    const a = P2(5.05, 6), b = P2(5.2, 6), c = P2(5.2, 30);
    path(s, [a, b, c, a], { color: C.slate, w: 1.4, dash: 'dash' });
    s.sym(b[0] + 8, b[1] + 17, 'Δ<i>V</i> = 0.15 V', { size: 12, anchor: 'start', color: C.slate });
    s.sym(c[0] + 8, (b[1] + c[1]) / 2 + 4, 'Δ<i>I</i> = 24.0 mA', { size: 12, anchor: 'start', color: C.slate });
    resultBlock(s, ['<i>r</i><sub>z</sub> = Δ<i>V</i>/Δ<i>I</i> = 6.25 Ω'], { size: 15, subRoom: 6 });
    placeAll(s, [
      { t: 'Knee', p: kp, hi: true, bare: true, dirs: 'lUWdr', ds: [12, 26, 44], at: [[205, 200, 'end'], [196, 200, 'end']] },
      { t: 'Breakdown region', p: P2(5.12, f(5.12)), bare: true, dirs: 'lUWd', ds: [14, 30, 50] },
      { t: 'Current ≈ 0', p: P2(3.9, 0), dirs: 'uUVd', ds: [18, 32], at: [[102, 206, 'middle']] },
    ]);
    return s;
  },
  check() {
    const s = figZr.draw(figZr.cases[0]), g = GZ, f = pchip(ZR.V, ZR.I);
    const back = ZR.V.map((v, i) => Math.abs(f(v) - ZR.I[i]));
    const mono = samples(3, 5.2, 300).every((v, i, a) => i === 0 || f(v) >= f(a[i - 1]) - 1e-12);
    const rz = (0.15) / ((30 - 6) * 1e-3), rz2 = 0.1 / (18e-3);
    const sl = (v: number) => (f(v + 0.002) - f(v - 0.002)) / 0.004;
    // first voltage where the current reaches a few mA (2 mA)
    const vk = samples(3, 5.2, 4000).find((v) => f(v) >= 2) as number;
    // the pixel triangle
    const dVpx = (zx(5.2) - zx(5.05)) / g.kx, dIpx = ((g.oy - g.ky * 6) - (g.oy - g.ky * 30)) / g.ky;
    const kneePx = zx(5.0);
    return [
      [`The curve reproduces every table reading to ${fmt(Math.max(...back), 4)} mA (0.0 up to 4.50 V, 0.2 at 4.80, 2.5 at 5.00, 12.0 at 5.10, 30.0 at 5.20)`, Math.max(...back) < 1e-9 && f(4.5) === 0 && f(4.8) === 0.2 && f(5) === 2.5 && f(5.1) === 12 && f(5.2) === 30],
      ['The curve is monotone: no current below 4.5 V, then rising', mono && f(4) === 0 && f(4.5) === 0],
      [`The knee: the current first reaches a few mA (2 mA) at ${fmt(vk, 2)} V, the marked V_z ≈ 5.0 V`, vk > 4.9 && vk <= 5.0 && close(kneePx, zx(5.0), 1e-9)],
      [`Steepness: dI/dV is ${fmt(sl(4.4), 1)} mA/V at 4.4 V but ${fmt(sl(5.15), 0)} mA/V in breakdown, and ΔV across 5.0–5.2 V is only 0.20 V for a 12-fold rise in current (2.5 → 30.0 mA)`, sl(5.15) > 100 * Math.max(sl(4.4), 0.1) && close(30 / 2.5, 12, 1e-12)],
      [`Triangle read off the drawing: ΔV = ${fmt(dVpx, 2)} V, ΔI = ${fmt(dIpx, 1)} mA, r_z = ${fmt(dVpx / (dIpx * 1e-3), 2)} Ω (the text's 6.25 Ω); 5.10–5.20 V gives ${fmt(rz2, 1)} Ω, the same order`, close(dVpx, 0.15, 1e-9) && close(dIpx, 24, 1e-9) && close(rz, 6.25, 1e-9) && fmt(rz2, 1) === '5.6'],
      [`Power at 5.20 V is ${fmt(5.2 * 0.03, 3)} W, under the 0.5 W rating`, close(5.2 * 0.03, 0.156, 1e-9)],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* p12-15-04-d6 · identification flow chart (topic 04)                    */
/* ===================================================================== */
type Node = { id: string; rect: Rect; lines: string[]; hi?: boolean };
/** A flow-chart box: a white rounded box with Onest lines, registered as a tag so the audit keeps everything off it. */
function nodeBox(s: Sketch, n: Node) {
  const [x0, y0, x1, y1] = n.rect;
  s.tags.push({ name: n.lines.join(' '), rect: n.rect, from: null, to: null });
  const lh = 15, top = (y0 + y1) / 2 - ((n.lines.length - 1) * lh) / 2 + 4.2;
  s.add(`<rect x="${r1(x0)}" y="${r1(y0)}" width="${r1(x1 - x0)}" height="${r1(y1 - y0)}" rx="11" fill="#fff" stroke="${n.hi ? C.mari : C.border}" stroke-width="${n.hi ? 1.8 : 1.2}"/>`);
  n.lines.forEach((t, i) => s.add(`<text x="${r1((x0 + x1) / 2)}" y="${r1(top + i * lh)}" text-anchor="middle" font-family="${F.tag}" font-size="${TAG_SIZE}" fill="${n.hi ? C.amber : C.text}">${t.replace(/&/g, '&amp;')}</text>`));
}
const FW = 6.72;
/** A box of the given lines, left at x0, right at x1, its middle at y (so a row's arrow runs level). */
const mk = (id: string, x0: number, mid: number, x1: number, lines: string[], hi = false): Node => { const h = lines.length * 15 + 14; return { id, rect: [x0, mid - h / 2, x1, mid + h / 2], lines, hi }; };
const FLOW: Node[] = [
  mk('start', 40, 30, 300, ['Resistance range,', 'leads one way, then swapped']),
  mk('c1', 30, 108, 190, ['Same steady value', 'both ways']),
  mk('r1', 214, 108, 330, ['Resistor']),
  mk('c2', 30, 184, 190, ['Starts low, climbs to', 'off-scale; repeats', 'after discharging']),
  mk('r2', 214, 184, 330, ['Capacitor']),
  mk('c3', 30, 262, 190, ['Low one way,', 'off-scale the other']),
  mk('r3', 214, 262, 330, ['Diode or LED']),
  mk('t3', 210, 322, 330, ['Diode-test range'], true),
  mk('si', 30, 380, 172, ['Silicon diode:', 'about 0.5 to 0.7 V']),
  mk('led', 182, 380, 330, ['LED: about 1.7 to', '2.3 V, may glow', 'faintly']),
  mk('c4', 30, 464, 182, ['Off-scale both ways,', 'no swing']),
  mk('r4', 200, 464, 330, ['Very small', 'capacitor, open', 'part, or a diode', 'or LED on a low-', 'voltage range']),
];
const byId = (id: string) => FLOW.find((n) => n.id === id) as Node;
const left = (n: Node): P => [n.rect[0], (n.rect[1] + n.rect[3]) / 2];
const right = (n: Node): P => [n.rect[2], (n.rect[1] + n.rect[3]) / 2];
const bottomOf = (n: Node, x?: number): P => [x ?? (n.rect[0] + n.rect[2]) / 2, n.rect[3]];
const topOf = (n: Node, x?: number): P => [x ?? (n.rect[0] + n.rect[2]) / 2, n.rect[1]];
const TRUNK = 18;
/** The chart's arrows: each from a point on one box (or the trunk) to a point on another. */
const EDGES: { from: string; to: string; a: P; b: P }[] = [
  ...['c1', 'c2', 'c3', 'c4'].map((id) => ({ from: 'trunk', to: id, a: [TRUNK, left(byId(id))[1]] as P, b: left(byId(id)) })),
  { from: 'c1', to: 'r1', a: right(byId('c1')), b: left(byId('r1')) },
  { from: 'c2', to: 'r2', a: right(byId('c2')), b: left(byId('r2')) },
  { from: 'c3', to: 'r3', a: right(byId('c3')), b: left(byId('r3')) },
  { from: 'r3', to: 't3', a: bottomOf(byId('r3')), b: topOf(byId('t3')) },
  { from: 't3', to: 'si', a: bottomOf(byId('t3'), 250), b: topOf(byId('si'), 120) },
  { from: 't3', to: 'led', a: bottomOf(byId('t3'), 296), b: topOf(byId('led'), 256) },
  { from: 'c4', to: 'r4', a: right(byId('c4')), b: left(byId('r4')) },
];
const figFlow: Diagram = {
  id: 'p12-15-04-d6',
  topic: 4,
  name: 'Identifying the components',
  cases: [{ chip: 'Flow chart', cap: 'Identifying a resistor, capacitor, diode and LED with a multimeter on its resistance range: read with the leads one way, then swapped. The same steady value both ways is a resistor; a reading that starts low and climbs to off-scale, repeating after discharge, is a capacitor; low one way and off-scale the other is a diode or LED, told apart on the diode-test range (silicon about 0.5 to 0.7 V, LED about 1.7 to 2.3 V and possibly a faint glow); off-scale both ways with no swing is a very small capacitor, an open part, or a diode or LED on a low-voltage range.' }],
  draw() {
    const s = new Sketch(W, 524);
    FLOW.forEach((n) => nodeBox(s, n));
    // the trunk from the start box down the left edge
    path(s, [[TRUNK, byId('start').rect[1] + 20], [TRUNK, left(byId('c4'))[1]]], { color: C.slate, w: 1.4, free: true });
    path(s, [[byId('start').rect[0], byId('start').rect[1] + 20], [TRUNK, byId('start').rect[1] + 20]], { color: C.slate, w: 1.4, free: true });
    EDGES.forEach((e) => s.vec(e.a[0], e.a[1], e.b[0], e.b[1], { color: C.slate, w: 1.4 }));
    return s;
  },
  check() {
    const s = figFlow.draw(figFlow.cases[0]);
    const onEdge = (r: Rect, p: P) => (Math.abs(p[0] - r[0]) < 0.6 || Math.abs(p[0] - r[2]) < 0.6) && p[1] >= r[1] - 0.6 && p[1] <= r[3] + 0.6 || (Math.abs(p[1] - r[1]) < 0.6 || Math.abs(p[1] - r[3]) < 0.6) && p[0] >= r[0] - 0.6 && p[0] <= r[2] + 0.6;
    const bad = EDGES.filter((e) => (e.from !== 'trunk' && !onEdge(byId(e.from).rect, e.a)) || !onEdge(byId(e.to).rect, e.b)).map((e) => `${e.from}→${e.to}`);
    const hit = (a: Rect, b: Rect) => !(a[2] <= b[0] || b[2] <= a[0] || a[3] <= b[1] || b[3] <= a[1]);
    const overlaps = FLOW.flatMap((a, i) => FLOW.slice(i + 1).filter((b) => hit(a.rect, b.rect)).map((b) => `${a.id}/${b.id}`));
    // the decision rules as data, and the leaves each path reaches
    const verdict = (shape: string, test?: string) => shape === 'steady' ? 'Resistor' : shape === 'climbs' ? 'Capacitor' : shape === 'one-way' ? (test === 'si' ? 'Silicon diode' : 'LED') : 'Very small capacitor, open part, or a diode or LED on a low-voltage range';
    const texts = FLOW.map((n) => n.lines.join(' '));
    const has = (t: string) => texts.some((x) => x.includes(t));
    const width = (n: Node) => Math.max(...n.lines.map((t) => t.length)) * FW + 12;
    const tooNarrow = FLOW.filter((n) => width(n) > n.rect[2] - n.rect[0] + 2).map((n) => n.id);
    const arrowsDown = EDGES.filter((e) => e.from === 'r3' || e.from === 't3').every((e) => e.b[1] > e.a[1]);
    return [
      [`Every arrow starts on the box it leaves and ends on the box it enters${bad.length ? `; not so for ${bad.join(', ')}` : ''}`, bad.length === 0],
      [`No two boxes overlap${overlaps.length ? `: ${overlaps.join(', ')}` : ''}`, overlaps.length === 0],
      ['Four readings lead from the start: steady → resistor, climbs → capacitor, low/off-scale → diode or LED, off-scale both → very small capacitor, open part, or a diode or LED on a low-voltage range', verdict('steady') === 'Resistor' && verdict('climbs') === 'Capacitor' && verdict('one-way', 'si') === 'Silicon diode' && verdict('one-way', 'led') === 'LED' && verdict('both').startsWith('Very small') && EDGES.filter((e) => e.from === 'trunk').length === 4],
      ['The diode-test split uses the text’s ranges: silicon about 0.5 to 0.7 V, LED about 1.7 to 2.3 V and it may glow faintly', has('about 0.5 to 0.7 V') && has('about 1.7 to 2.3 V') && has('may glow faintly')],
      ['The diode or LED outcome leads down to the diode-test range and then to the two answers', arrowsDown && EDGES.some((e) => e.from === 'r3' && e.to === 't3') && EDGES.some((e) => e.from === 't3' && e.to === 'si') && EDGES.some((e) => e.from === 't3' && e.to === 'led')],
      [`Each box is wide enough for its longest line${tooNarrow.length ? `: too narrow ${tooNarrow.join(', ')}` : ''}`, tooNarrow.length === 0],
      ...layout(s),
    ];
  },
};

export const DIAGRAMS_PHYSICS_12_15: Diagram[] = [figSg, figFit, figOff, figDiodeCkt, figIV, figReg, figZc, figZr, figFlow];
