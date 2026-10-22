import { C, F, LABEL_GAP, Rect, Sketch, crosses, mathW, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * PHYSICS CLASS 12, CHAPTER 6 (Electromagnetic Induction): every drawing of
 * the Master Reference book, redrawn. The chapter's drawings are its eight
 * numbered figures, each printed on a "CHAPTER 6 · FIGURES" page (6.1 on
 * p. 397, 6.2 on p. 400, 6.3 on p. 407, 6.4 on p. 409, 6.5 on p. 417, 6.6 on
 * p. 419, 6.7 on p. 426, 6.8 on p. 432; the first copy of each caption sits a
 * page earlier, where the text refers to it). It has no unnumbered drawings:
 * pp. 389–458 were checked page by page, the opening "Experimental
 * Foundations" (pp. 390–392), the Chapter Synthesis (pp. 431–435) and the
 * Supplement (Addenda A–G, pp. 436–458) included; the rest is prose, typeset
 * equations, boxed answers and three tables (the master formula compendium,
 * pp. 431–433; the exam weightage map, pp. 434–435; the spring–LC analogy,
 * p. 444).
 *
 * Every figure is computed from the physics, never placed by eye: the induced
 * current's sense from Lenz's law (the coil's moment against the growing flux)
 * and the repulsion from the two dipoles' energy; the wire's field into the
 * loop from I⃗ × r̂ and the flux summed strip by strip; the rotating rods'
 * velocities ω⃗ × r⃗ and the force on their charges v⃗ × B⃗; the solenoids' and
 * the coils' fields summed element by element (Biot–Savart); the generator's
 * emf −dΦ/dt of Φ = NBA cos ωt; and the circuits read back off their wires as
 * nodes. Each `check` recomputes what the figure and its caption state, the
 * worked example the figure belongs to, and measures that no label or tag
 * touches a line it does not name.
 */

const W = 340;
type P = [number, number];
type V3 = [number, number, number];
const D2R = Math.PI / 180;
/** μ₀ = 4π × 10⁻⁷ T m A⁻¹, as the book uses it. */
const MU0 = 4 * Math.PI * 1e-7;
const close = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) < tol;
const rel = (a: number, b: number, tol: number) => Math.abs(a - b) <= tol * Math.abs(b);
const fmt = (n: number, d = 2) => String(+n.toFixed(d)).replace('-', '−');
const SUP: Record<string, string> = { '-': '⁻', '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹' };
/** A number in scientific form for a check's message: 4.42 × 10⁻⁷. */
const sci = (n: number, d = 2) => { const e = Math.floor(Math.log10(Math.abs(n))); return `${(n / 10 ** e).toFixed(d).replace('-', '−')} × 10${[...String(e)].map((c) => SUP[c]).join('')}`; };
const len = (a: P, b: P) => Math.hypot(b[0] - a[0], b[1] - a[1]);
const add = (a: P, b: P, k = 1): P => [a[0] + k * b[0], a[1] + k * b[1]];
const sub = (a: P, b: P): P => [a[0] - b[0], a[1] - b[1]];
const dotp = (a: P, b: P) => a[0] * b[0] + a[1] * b[1];
const unit = (a: P): P => { const l = Math.hypot(a[0], a[1]); return [a[0] / l, a[1] / l]; };
const samples = (a: number, b: number, n = 400) => Array.from({ length: n + 1 }, (_, i) => a + ((b - a) * i) / n);
/** A point at math angle `deg` (counter-clockwise, y up) and distance R from c, on the y-down drawing. */
const polar = (c: P, R: number, deg: number): P => [c[0] + R * Math.cos(deg * D2R), c[1] - R * Math.sin(deg * D2R)];
const cross3 = (a: V3, b: V3): V3 => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const dot3 = (a: V3, b: V3) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const norm3 = (a: V3) => Math.hypot(a[0], a[1], a[2]);
/**
 * A drawn direction (y down) in the page's right-handed frame: x to the right,
 * y up the page, z out of the page. Every cross product is taken in this frame.
 */
const page = (v: P, z = 0): V3 => [v[0], -v[1], z];
const OUT: V3 = [0, 0, 1];
const IN: V3 = [0, 0, -1];
/** Two vectors point the same way (parallel, same sense). */
const sameWay = (a: V3, b: V3, tol = 1e-6) => { const k = dot3(a, b) / (norm3(a) * norm3(b)); return k > 1 - tol; };

/* ---------- drawing helpers (as in physics-12-04.ts and physics-12-03.ts) ---------- */
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
/** A small arrowhead at p, pointing along the unit direction u (a current or a sense of turning on a line). */
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
/** A curved arrow along an arc (a sense of turning, ω): math angles a0 → a1, the head at a1. */
function turn(s: Sketch, c: P, R: number, a0: number, a1: number, color: string = C.slate) {
  const pts = arcPts(c, R, a0, a1, 40);
  path(s, pts.slice(0, -3), { color, w: 1.8 });
  head(s, pts[pts.length - 1], unit(sub(pts[pts.length - 1], pts[pts.length - 4])), color, 9, 4.5);
}
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
function outMark(s: Sketch, c: P, r = 7, color: string = C.ink) {
  s.point(c[0], c[1], r, `<circle cx="${r1(c[0])}" cy="${r1(c[1])}" r="${r}" fill="#fff" stroke="${color}" stroke-width="${r > 5 ? 1.6 : 1.1}"/><circle cx="${r1(c[0])}" cy="${r1(c[1])}" r="${r1(r * 0.3)}" fill="${color}"/>`);
  keep(s, arcPts(c, r, 0, 360, 24));
}
/** Into the page: a ring with a cross in it. */
function inMark(s: Sketch, c: P, r = 7, color: string = C.ink) {
  const k = r * 0.5, sw = r > 5 ? 1.6 : 1.1;
  s.point(c[0], c[1], r, `<circle cx="${r1(c[0])}" cy="${r1(c[1])}" r="${r}" fill="#fff" stroke="${color}" stroke-width="${sw}"/><path d="M${r1(c[0] - k)} ${r1(c[1] - k)} L${r1(c[0] + k)} ${r1(c[1] + k)} M${r1(c[0] - k)} ${r1(c[1] + k)} L${r1(c[0] + k)} ${r1(c[1] - k)}" stroke="${color}" stroke-width="${sw}" stroke-linecap="round"/>`);
  keep(s, arcPts(c, r, 0, 360, 24));
}
/** A field into the page as the book prints it in this chapter: a plain cross ×. */
function xMark(s: Sketch, c: P, r = 5, color: string = C.faint) {
  s.point(c[0], c[1], r, `<path d="M${r1(c[0] - r)} ${r1(c[1] - r)} L${r1(c[0] + r)} ${r1(c[1] + r)} M${r1(c[0] - r)} ${r1(c[1] + r)} L${r1(c[0] + r)} ${r1(c[1] - r)}" stroke="${color}" stroke-width="1.3" stroke-linecap="round"/>`);
  keep(s, [[c[0] - r, c[1] - r], [c[0] + r, c[1] + r]]);
  keep(s, [[c[0] - r, c[1] + r], [c[0] + r, c[1] - r]]);
}
/** A field out of the page as the book prints it in Figure 6.6: a dot. */
function dotMark(s: Sketch, c: P, color: string = C.slate) {
  s.point(c[0], c[1], 2.6, `<circle cx="${r1(c[0])}" cy="${r1(c[1])}" r="2.6" fill="${color}"/>`);
}
/** Distance from a point to a rectangle (0 inside it). */
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
/** No tag's dot on an arrowhead: there it reads as naming the arrow and hides its head. Within 8 px of a head's tip or middle. */
const dotsOffHeads = (s: Sketch): Check => {
  const bad = s.tags.filter((t) => t.from && (HEADS.get(s) ?? []).some((h) => h.some((q) => len(q, t.from as P) < 8))).map((t) => t.name);
  return [`No tag's dot sits on an arrowhead${bad.length ? `: ${bad.join(', ')}` : ''}`, bad.length === 0];
};
/** Every label inside the frame (the kit's audit checks tags only). */
const inFrame = (s: Sketch): Check => {
  const out = s.labels.filter((l) => l.rect[0] < 0 || l.rect[2] > s.w || l.rect[1] < 0 || l.rect[3] > s.h).map((l) => l.text);
  return [`Every label lies inside the frame${out.length ? `: not ${out.join(', ')}` : ''}`, out.length === 0];
};
/** The layout checks of a drawn sketch. */
const layout = (s: Sketch): Check[] => [clearCheck(s), labelsApart(s), dotsOffHeads(s), inFrame(s)];
/**
 * The result (here: the book's formula box), bottom right, ink-edged, maths set
 * in STIX (Sketch.text). Registered as a tag, so the audit keeps everything
 * else off it.
 */
function resultBlock(s: Sketch, lines: string[], o: { size?: number; subRoom?: number } = {}): Rect {
  const size = o.size ?? 15, lh = size + 8, room = o.subRoom ?? 0;
  const plain = (t: string) => t.replace(/<\/?(?:i|sub|sup)>/g, '');
  const w = Math.max(...lines.map((t) => mathW(t, size))) + 30, h = lines.length * lh + 14 + room;
  const x0 = s.w - 8 - w, y0 = s.h - 8 - h;
  s.tags.push({ name: plain(lines.join(' ')), rect: [x0, y0, x0 + w, y0 + h], from: null, to: null });
  s.add(`<rect x="${r1(x0)}" y="${r1(y0)}" width="${r1(w)}" height="${r1(h)}" rx="15" fill="#fff" stroke="${C.text}" stroke-width="1.6"/>`);
  lines.forEach((t, i) => s.text(x0 + w / 2, y0 + 7 + room / 3 + lh * i + lh / 2 + size * 0.36, t, { size, semibold: true }));
  return [x0, y0, x0 + w, y0 + h];
}
/** Point-to-segment distance. */
function distSeg(p: P, a: P, b: P) {
  const d = sub(b, a), L = dotp(d, d) || 1, k = Math.max(0, Math.min(1, dotp(sub(p, a), d) / L));
  return len(p, add(a, d, k));
}
/**
 * Is p crowded: within `pad` px of a tag, a label, a kept line or a point? A
 * background of field marks (× or •) is laid only where it leaves the rest clear.
 */
function crowded(s: Sketch, p: P, pad: number) {
  const boxes: Rect[] = [...s.tags.map((t) => t.rect), ...s.labels.map((l) => l.rect)];
  if (boxes.some((r) => rectDist(r, p) < pad)) return true;
  if (s.points.some((q) => len(p, [q.x, q.y]) < pad + q.r)) return true;
  if (s.tags.some((t) => t.from && t.to && distSeg(p, t.from, t.to) < pad)) return true;
  for (const pts of LINES.get(s) ?? []) for (let i = 1; i < pts.length; i++) if (distSeg(p, pts[i - 1], pts[i]) < pad) return true;
  return false;
}
/** Words in Onest (names in a box, a heading): straight into the SVG, registered so tags and the checks keep clear of them. */
function words(s: Sketch, x: number, y: number, t: string, o: { size?: number; anchor?: 'start' | 'middle' | 'end'; color?: string; bold?: boolean } = {}) {
  const size = o.size ?? 12, anchor = o.anchor ?? 'middle', w = t.length * size * 0.56;
  const x0 = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w : x;
  s.labels.push({ text: t, rect: [x0, y - size * 0.75, x0 + w, y + size * 0.22] });
  s.add(`<text x="${r1(x)}" y="${r1(y)}" text-anchor="${anchor}" font-family="${o.bold ? F.bold : F.tag}" font-size="${size}" fill="${o.color ?? C.text}">${t}</text>`);
}
/** A rounded rectangle's outline as points (corner radius rr). */
function roundRect(r: Rect, rr: number): P[] {
  const [x0, y0, x1, y1] = r, arc = (cx: number, cy: number, a0: number) => ellPts([cx, cy], rr, rr, a0, a0 + Math.PI / 2, 10);
  return [...arc(x1 - rr, y0 + rr, -Math.PI / 2), ...arc(x1 - rr, y1 - rr, 0), ...arc(x0 + rr, y1 - rr, Math.PI / 2), ...arc(x0 + rr, y0 + rr, Math.PI), [x1 - rr, y0]];
}

/* ---------- circuits ---------- */
/** Wires as drawn, by sketch, so a check can read the circuit back off the drawing. */
const WIRES = new WeakMap<Sketch, P[][]>();
/** A conductor for the node check; drawn too unless `hidden` (a wire drawn in pieces where it passes under another). */
function wire(s: Sketch, pts: P[], o: { hidden?: boolean; w?: number } = {}) {
  if (!o.hidden) path(s, pts, { w: o.w });
  const l = WIRES.get(s) ?? []; l.push(pts); WIRES.set(s, l);
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
/** A resistor as the book draws it: a box between a and b (along a horizontal or vertical wire), half-width hw. Its terminals are a and b. */
function resistor(s: Sketch, a: P, b: P, hw = 10) {
  const u = unit(sub(b, a)), nv: P = [-u[1], u[0]];
  outline(s, [add(a, nv, hw), add(b, nv, hw), add(b, nv, -hw), add(a, nv, -hw)], { w: 1.8 });
}

/** The on-axis field (x component, per μ₀I) at distance x from the centre of a circular turn of radius R, summed element by element; `sense` +1 when the current at the turn's top runs out of the page. */
function turnFieldX(R: number, x: number, sense = 1, N = 360) {
  let bx = 0;
  for (let k = 0; k < N; k++) {
    const ph = ((k + 0.5) * 2 * Math.PI) / N;
    // the turn in the y–z plane; at the top (ph = π/2) dl⃗ is along +z when sense = +1
    const pos: V3 = [0, R * Math.sin(ph), -R * Math.cos(ph)];
    const dl: V3 = [0, R * Math.cos(ph), R * Math.sin(ph)].map((v) => (v * sense * 2 * Math.PI) / N) as V3;
    const rv: V3 = [x - pos[0], -pos[1], -pos[2]], rr = norm3(rv);
    bx += cross3(dl, rv)[0] / (4 * Math.PI * rr ** 3);
  }
  return bx;
}

/* ===================================================================== */
/* Figure 6.1 · magnet pushed towards a coil (topic 01)                   */
/* ===================================================================== */
/**
 * The bar magnet (S on the left, N facing the coil) moves to the right. The
 * coil's turns stand across the axis (vertical ellipses). The induced current
 * is marked where the turns cross the page's plane: into the page at the top
 * (⊗), out of it at the bottom (⊙), as the book draws it. The check rebuilds
 * the coil's moment from those two marks, takes it against the magnet's
 * growing flux (Lenz), reads the sense as seen from the magnet, and finds the
 * force between the two dipoles from their energy.
 */
const G61 = { mag: [14, 112, 134, 150] as Rect, cy: 131, coilX: [214, 234, 254, 274], rx: 9, ry: 54, nX: 176, sX: 314, pr: 15, vY: 88, fY: 176, v: [40, 118] as P, f: [118, 40] as P };
const fig61: Diagram = {
  id: 'p12-06-fig-6.1',
  topic: 1,
  name: 'Magnet pushed towards a coil',
  cases: [{ chip: 'N pole approaching', cap: 'A bar magnet moving north-pole-first towards a coil. The induced current is counter-clockwise as seen from the magnet side, so the near face of the coil acts as an N pole and repels the magnet (the force on the magnet points away from the coil).' }],
  draw() {
    const s = new Sketch(W, 262);
    const { mag, cy, coilX, rx, ry, nX, sX, pr, vY, fY } = G61;
    const mx = (mag[0] + mag[2]) / 2;
    // the magnet: S half and N half
    box(s, mag, { w: 2 });
    path(s, [[mx, mag[1]], [mx, mag[3]]], { w: 2 });
    s.sym((mag[0] + mx) / 2, cy + 6, 'S', { size: 18 });
    s.sym((mx + mag[2]) / 2, cy + 6, 'N', { size: 18 });
    // its velocity, towards the coil, and the force on it, away from the coil
    arrow(s, [G61.v[0], vY], [G61.v[1], vY], { w: 2.2 });
    s.sym(40, vY - 12, '<i>v⃗</i> (towards coil)', { size: 14, anchor: 'start' });
    arrow(s, [G61.f[0], fY], [G61.f[1], fY], { w: 2.2 });
    s.sym(10, fY + 24, '<i>F⃗</i><sub>repel</sub> (away from coil)', { size: 14, anchor: 'start' });
    // the coil
    coilX.forEach((x) => path(s, ellPts([x, cy], rx, ry, 0, 2 * Math.PI, 90), { w: 2 }));
    // the induced current: into the page at the top, out of it at the bottom
    const xc = (coilX[0] + coilX[coilX.length - 1]) / 2;
    inMark(s, [xc, cy - ry], 8, C.mari);
    outMark(s, [xc, cy + ry], 8, C.mari);
    s.sym(W - 8, 22, '<i>I</i><sub>ind</sub>: counter-clockwise', { size: 14, anchor: 'end', color: C.amber });
    s.sym(W - 8, 40, 'as seen from the magnet', { size: 14, anchor: 'end', color: C.amber });
    // the coil's induced poles: N on the near face, S on the far face
    ring(s, [nX, cy], pr, { w: 1.6 });
    s.sym(nX, cy + 5, 'N', { size: 15 });
    s.sym(nX, cy + pr + 18, 'induced', { size: 12, color: C.slate });
    ring(s, [sX, cy], pr, { w: 1.6 });
    s.sym(sX, cy + 5, 'S', { size: 15 });
    s.place([
      { t: 'Bar magnet', p: [mag[0] + 6, mag[1]], at: [[6, 30, 'start'], [6, 36, 'start']] },
      { t: 'Coil', p: ellPts([coilX[3], cy], rx, ry, 1.2, 1.2, 1)[0], at: [[W - 8, 206, 'end'], [W - 8, 212, 'end'], [W - 8, 218, 'end']] },
    ]);
    return s;
  },
  check() {
    const { mag, coilX, nX, sX, v, f } = G61;
    const s = fig61.draw(fig61.cases[0]);
    // the magnet's moment points from its S half to its N half: +x (N drawn on the right)
    const mMag: V3 = [1, 0, 0];
    // its on-axis field at the coil, B ∝ 2m/d³, grows as the gap d shrinks (the magnet moves +x)
    const Bat = (d: number) => 2 / d ** 3;
    const growing = Bat(100) > Bat(120);
    // the drawn current: ⊗ at the top (dl⃗ = −ẑ), ⊙ at the bottom (dl⃗ = +ẑ); m⃗ ∝ Σ r⃗ × dl⃗
    const top = cross3([0, 1, 0], IN), bot = cross3([0, -1, 0], OUT);
    const mCoil: V3 = [top[0] + bot[0], top[1] + bot[1], top[2] + bot[2]];
    // seen from the magnet: the viewer faces +x with y up, so the viewer's right is x̂ × ŷ = +ẑ.
    // At the top the current runs along −ẑ: to the viewer's left at the top = counter-clockwise.
    const right = cross3([1, 0, 0], [0, 1, 0]);
    const ccwSeen = dot3(IN, right) < 0;
    // the force on the magnet from the coil's dipole: U = −m⃗₁ · B⃗₂, B⃗₂ = 2m⃗₂/d³ on the axis; F = −dU/dx₁
    const U = (x1: number, x2: number) => -dot3(mMag, mCoil.map((v) => (2 * v) / (x2 - x1) ** 3) as V3);
    const x1 = 74, x2 = 244, h = 1e-3, Fx = -(U(x1 + h, x2) - U(x1 - h, x2)) / (2 * h);
    return [
      ['The magnet’s N pole faces the coil and it moves towards it (v⃗ along +x): its flux through the coil, along +x, grows', mMag[0] > 0 && v[1] > v[0] && growing && mag[2] < coilX[0]],
      [`Rebuilt from the drawn ⊗ (top) and ⊙ (bottom), the coil’s moment is (${mCoil.join(', ')}): along −x, against the growing flux (Lenz)`, sameWay(mCoil, [-1, 0, 0])],
      ['Seen from the magnet (facing +x, y up, right = +ẑ), the current at the top runs to the left: counter-clockwise, as the caption says', ccwSeen && right[2] === 1],
      ['The moment points out of the coil’s near face, so the near face is an N pole (drawn left of the coil) and the far face an S pole', mCoil[0] < 0 && nX < coilX[0] && sX > coilX[coilX.length - 1]],
      [`The two dipoles face N to N: the force on the magnet from U = −m⃗₁ · B⃗₂ is ${fmt(Fx, 6)} along x, away from the coil (the drawn F⃗ points left)`, Fx < 0 && f[1] < f[0]],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* Figure 6.2 · rectangular loop beside a long wire (topic 01)            */
/* ===================================================================== */
/**
 * Drawn to Example 4's proportions (p. 398): the near side at c = 0.020 m and
 * the width a = 0.080 m (c : a = 1 : 4, so ln((c + a)/c) = ln 5), on a scale of
 * 2200 px per metre; the long side L is drawn shorter than its 0.30 m (a
 * schematic height). The strip sits at r = c + 0.30a. The check sums the flux
 * strip by strip over the drawn loop with the example's numbers.
 */
const G62 = { wx: 60, wTop: 30, wBot: 238, c: 44, a: 176, yT: 66, yB: 216, rFrac: 0.3, dr: 14, mY: 46, dimY: 252, pxPerM: 2200 };
const g62 = () => {
  const { wx, c, a, rFrac } = G62;
  const x0 = wx + c, x1 = x0 + a, xs = x0 + rFrac * a;
  return { x0, x1, xs };
};
const fig62: Diagram = {
  id: 'p12-06-fig-6.2',
  topic: 1,
  name: 'Loop beside a long wire',
  cases: [{ chip: 'Strip by strip', cap: 'A long straight wire carrying current <i>I</i> upward, with a rectangular loop (long side <i>L</i>, width <i>a</i>) in its plane at distance <i>c</i> from the wire. A thin strip of width d<i>r</i> at distance <i>r</i> is the integration element; the field of the wire is into the page over the loop.' }],
  draw() {
    const s = new Sketch(W, 384);
    const { wx, wTop, wBot, yT, yB, dr, mY, dimY } = G62, g = g62();
    // the wire and its current, up the page
    path(s, [[wx, wTop], [wx, wBot]], { w: 3.4 });
    head(s, [wx, 118], [0, -1], C.ink, 11, 5.5);
    s.sym(wx + 10, 124, '<i>I</i>', { size: 18, anchor: 'start' });
    // the loop
    box(s, [g.x0, yT, g.x1, yB], { w: 2.2 });
    // the strip at r, width dr
    box(s, [g.xs - dr / 2, yT, g.xs + dr / 2, yB], { color: C.mari, w: 2.2 });
    // r: from the wire to the strip's middle
    measure(s, [wx + 1, mY], [g.xs, mY]);
    guide(s, [g.xs, mY + 2], [g.xs, yT - 2]);
    s.sym((wx + g.xs) / 2, mY - 10, '<i>r</i>', { size: 16 });
    // L, c and a
    measure(s, [g.x1 + 22, yT], [g.x1 + 22, yB]);
    s.sym(g.x1 + 32, (yT + yB) / 2 + 5, '<i>L</i>', { size: 16, anchor: 'start' });
    measure(s, [wx + 1, dimY], [g.x0, dimY]);
    measure(s, [g.x0, dimY], [g.x1, dimY]);
    s.sym((wx + g.x0) / 2, dimY + 20, '<i>c</i>', { size: 16 });
    s.sym((g.x0 + g.x1) / 2, dimY + 20, '<i>a</i>', { size: 16 });
    s.sym(g.xs, yB + 20, 'd<i>r</i>', { size: 15, color: C.amber });
    s.sym(g.x1, yB + 20, '<i>B⃗</i> into page', { size: 14, anchor: 'end' });
    resultBlock(s, ['<i>B</i>(<i>r</i>) = μ<sub>0</sub><i>I</i>/(2π<i>r</i>)', 'dΦ = <i>B</i>(<i>r</i>) <i>L</i> d<i>r</i>', 'Φ<sub>B</sub> = ∫<sub><i>c</i></sub><sup><i>c</i> + <i>a</i></sup> μ<sub>0</sub><i>IL</i>/(2π<i>r</i>) d<i>r</i>'], { size: 15 });
    s.place([
      { t: 'Wire', p: [wx, 176], at: [[6, 186, 'start'], [6, 194, 'start']] },
      { t: 'Loop', p: [g.x1 - 30, yT], at: [[W - 8, 20, 'end'], [W - 8, 26, 'end']] },
      { t: 'Strip', hi: true, p: [g.xs + dr / 2, 150], at: [[g.xs + dr / 2 + 18, 152, 'start'], [g.xs + dr / 2 + 18, 120, 'start']] },
    ]);
    // the wire's field over the loop: × on a grid, where it leaves the rest clear
    for (let y = yT + 22; y < yB - 10; y += 32) for (let x = g.x0 + 18; x < g.x1 - 8; x += 26) if (!crowded(s, [x, y], 9)) xMark(s, [x, y]);
    return s;
  },
  check() {
    const { wx, c, a, yT, yB, pxPerM } = G62, g = g62();
    const s = fig62.draw(fig62.cases[0]);
    // the field over the loop from I⃗ × r̂: I up the page, r̂ to the right
    const Bdir = cross3(page([0, -1]), page([1, 0]));
    // Example 4 (pp. 398–399): L = 0.30 m, c = 0.020 m, a = 0.080 m, I₀ = 10 A, dI/dt = 25 A/s
    const cm = c / pxPerM, am = a / pxPerM, L = 0.3, I0 = 10;
    let phi = 0;
    const n = 4000, h = am / n;
    for (let k = 0; k < n; k++) { const r = cm + (k + 0.5) * h; phi += ((MU0 * I0) / (2 * Math.PI * r)) * L * h; }
    const form = ((MU0 * I0 * L) / (2 * Math.PI)) * Math.log((cm + am) / cm);
    const emf = ((MU0 * L) / (2 * Math.PI)) * Math.log((cm + am) / cm) * 25;
    const r = g.xs - wx;
    return [
      [`The field of the upward current is I⃗ × r̂ = (${Bdir.join(', ')}) over the loop: into the page, as the caption says`, sameWay(Bdir, IN)],
      [`Drawn to Example 4: c = ${c} px and a = ${a} px are 0.020 m and 0.080 m at ${pxPerM} px/m, so (c + a)/c = ${fmt((c + a) / c, 3)} and ln 5 = 1.609`, close(cm, 0.02, 1e-12) && close(am, 0.08, 1e-12) && fmt(Math.log((c + a) / c), 3) === '1.609'],
      [`The strip lies inside the loop, at r = ${fmt(r, 1)} px between c and c + a, and runs the full height L`, r > c && r < c + a],
      [`Summed strip by strip over the loop, Φ = ${sci(phi, 3)} Wb = (μ₀I₀L/2π) ln((c + a)/c) (the book's 9.66 × 10⁻⁷ Wb ≈ 0.97 μWb)`, rel(phi, form, 1e-6) && sci(phi, 2) === '9.66 × 10⁻⁷'],
      [`With dI/dt = 25 A/s, |ε| = ${sci(emf, 1)} V (the book's 2.4 μV)`, sci(emf, 1) === '2.4 × 10⁻⁶'],
      ['The loop’s long side is parallel to the wire, in its plane, on one side of it', yB > yT && g.x0 > wx],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* Figure 6.3 · rod rotating about one end (topic 02)                     */
/* ===================================================================== */
/**
 * The rod (length l = 112 px) turns anticlockwise, as the book draws its ω
 * arrow, about O in a field into the page. The element dx sits at x = 0.62l;
 * its velocity is ω⃗ × r⃗, drawn perpendicular to the rod with a length in
 * proportion to x. The free end's path is the dashed circle of radius l.
 */
const G63 = { O: [118, 196] as P, l: 112, ang: 33, xf: 0.62, k: 0.75, dx: 12, xOff: 12, lOff: 40, wR: 30, w0: 198, w1: 252 };
const g63 = () => {
  const { O, l, ang, xf, k } = G63;
  const u: P = [Math.cos(ang * D2R), -Math.sin(ang * D2R)], nCCW: P = [u[1], -u[0]];
  const tip = add(O, u, l), el = add(O, u, xf * l), vTip = add(el, nCCW, k * xf * l);
  return { u, nCCW, tip, el, vTip };
};
const fig63: Diagram = {
  id: 'p12-06-fig-6.3',
  topic: 2,
  name: 'Rod rotating about one end',
  cases: [{ chip: 'Element dx', cap: 'A conducting rod of length <i>l</i> rotating with angular velocity <i>ω</i> about end <i>O</i> in a field <i>B</i> directed into the page (×). The element d<i>x</i> at distance <i>x</i> from <i>O</i> moves with speed <i>v</i> = <i>ωx</i>; the free end traces a circle of radius <i>l</i>.' }],
  draw() {
    const s = new Sketch(W, 402);
    const { O, l, dx, xOff, lOff, wR, w0, w1 } = G63, g = g63();
    path(s, arcPts(O, l, 0, 360, 240), { color: C.slate, w: 1.4, dash: 'dash' });
    path(s, [O, g.tip], { w: 4.2 });
    s.dot(O[0], O[1], 4.2);
    // the element dx
    path(s, [add(g.el, g.u, -dx / 2), add(g.el, g.u, dx / 2)], { color: C.mari, w: 8 });
    // its velocity, perpendicular to the rod
    arrow(s, add(g.el, g.nCCW, 6), g.vTip, { w: 2.2 });
    s.sym(g.vTip[0] - 8, g.vTip[1] + 2, '<i>v</i> = <i>ωx</i>', { size: 15, anchor: 'end' });
    // x and l, measured along the rod on its lower side
    const off = (d: number): P => [-g.nCCW[0] * d, -g.nCCW[1] * d];
    measure(s, add(O, off(xOff)), add(g.el, off(xOff)));
    measure(s, add(O, off(lOff)), add(g.tip, off(lOff)));
    const xm = add(add(O, g.u, (G63.xf * l) / 2), off(xOff + 14)), lm = add(add(O, g.u, l * 0.62), off(lOff + 13));
    s.sym(xm[0], xm[1] + 5, '<i>x</i>', { size: 16 });
    s.sym(lm[0] + 2, lm[1] + 5, '<i>l</i>', { size: 16 });
    const dl = add(add(g.el, g.u, -21), g.nCCW, 17);
    s.sym(dl[0], dl[1] + 4, 'd<i>x</i>', { size: 15, color: C.amber });
    // ω, anticlockwise
    turn(s, O, wR, w0, w1);
    const wl = polar(O, wR + 14, (w0 + w1) / 2 - 6);
    s.sym(wl[0] - 4, wl[1] + 5, '<i>ω</i>', { size: 16 });
    s.sym(O[0] - 12, O[1] - 8, '<i>O</i>', { size: 16, anchor: 'end' });
    s.sym(8, 22, '<i>B⃗</i> into page (×)', { size: 15, anchor: 'start' });
    resultBlock(s, ['d<i>ε</i> = <i>Bv</i> d<i>x</i> = <i>Bωx</i> d<i>x</i>', '<i>ε</i> = ∫<sub>0</sub><sup><i>l</i></sup> <i>Bωx</i> d<i>x</i> = ½<i>Bωl</i><sup>2</sup>'], { size: 15 });
    s.place([
      { t: 'Rod', p: add(O, g.u, l * 0.22), at: [[O[0] - 6, O[1] - 58, 'end'], [O[0] - 10, O[1] - 64, 'end']] },
      { t: 'Free end’s path', p: polar(O, l, 300), at: [[W - 8, 290, 'end'], [W - 8, 284, 'end'], [W - 8, 276, 'end']] },
    ]);
    // Not within 15 px of the dashed circle, centre to line: a mark's arms
    // reach 7 px from its centre, and at the usual 9 px some touched the
    // circle (Android review, Ch 6). Now every mark keeps 8 px clear.
    for (let y = 46; y < 318; y += 38) for (let x = 20; x < W - 10; x += 38) if (Math.abs(len([x, y], O) - l) >= 15 && !crowded(s, [x, y], 9)) xMark(s, [x, y]);
    return s;
  },
  check() {
    const { O, l, xf, k } = G63, g = g63();
    const s = fig63.draw(fig63.cases[0]);
    // ω anticlockwise: ω⃗ out of the page; v⃗ = ω⃗ × r⃗
    const r = page(sub(g.el, O)), v = cross3(OUT, r), vDrawn = page(sub(g.vTip, g.el));
    const wa = arcPts(O, G63.wR, G63.w0, G63.w1, 10);
    const ccw = cross3(page(sub(wa[0], O)), page(sub(wa[10], O)))[2] > 0;
    // the emf, summed element by element: ∫₀ˡ Bωx dx; Example 4 (p. 408): B = 0.30 T, ω = 50 rad/s, l = 0.60 m
    const emf = (B: number, w: number, L: number) => { let e = 0; const n = 2000, h = L / n; for (let i = 0; i < n; i++) e += B * w * (i + 0.5) * h * h; return e; };
    return [
      ['The ω arrow turns anticlockwise, so ω⃗ points out of the page', ccw],
      ['The element’s velocity is drawn along ω⃗ × r⃗: perpendicular to the rod, on the side it turns towards', sameWay(vDrawn, v) && close(dot3(vDrawn, r), 0, 1e-9)],
      [`Its length is ${fmt(len(g.el, g.vTip), 1)} px = ${k} × x with x = ${fmt(xf * l, 1)} px: v = ωx grows in proportion to the distance from O`, close(len(g.el, g.vTip), k * xf * l, 1e-9)],
      [`The free end lies on the dashed circle (radius ${l} px = the rod’s length l)`, close(len(O, g.tip), l, 1e-9)],
      [`Summed element by element, ∫₀ˡ Bωx dx = ½Bωl²: Example 4 gives ${fmt(emf(0.3, 50, 0.6), 2)} V (the book's 2.7 V), practice 4 ${fmt(emf(0.2, 40, 0.5), 2)} V (the book's 1.0 V)`, rel(emf(0.3, 50, 0.6), 0.5 * 0.3 * 50 * 0.36, 1e-6) && fmt(emf(0.3, 50, 0.6), 1) === '2.7' && fmt(emf(0.2, 40, 0.5), 1) === '1'],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* Figure 6.4 · rotating rod on a circular rail (topic 02)                */
/* ===================================================================== */
/**
 * The rod turns clockwise about O (field into the page); its free end slides on
 * the circular rail. The wire from O leaves the circle under a hop in the rail
 * (drawn broken there, as the book draws it) and reaches R; the rail's right
 * side returns to R's other end. The force v⃗ × B⃗ on the rod's positive
 * charges points outward, so inside the rod the current runs O → rim, and it
 * returns down the right-hand wire, through R and up into O.
 */
const G64 = { O: [150, 168] as P, R: 100, ang: 50, wR: 46, w0: 168, w1: 108, yR: 334, rx0: 166, rx1: 210, hop: 9, headR: [250, 268] as P, uR: [0, 1] as P, headL: [150, 302] as P, uL: [0, -1] as P };
const g64 = () => {
  const { O, R, ang, yR, rx0, rx1, hop } = G64;
  const tip = polar(O, R, ang), right: P = [O[0] + R, O[1]], bottom: P = [O[0], O[1] + R];
  return { tip, right, bottom, R1: [rx0, yR] as P, R2: [rx1, yR] as P, under: [bottom[1] - 4, bottom[1] + hop + 5] };
};
const fig64: Diagram = {
  id: 'p12-06-fig-6.4',
  topic: 2,
  name: 'Rod on a circular rail',
  cases: [{ chip: 'Current path', cap: 'A rod rotating clockwise about pivot <i>O</i> in a field <i>B</i> directed into the page (×); its free end slides on a circular rail joined through a resistor <i>R</i> to <i>O</i>. The induced current flows from <i>O</i> to the rim along the rod and returns through <i>R</i>.' }],
  draw() {
    const s = new Sketch(W, 362);
    const { O, R, ang, wR, w0, w1, hop } = G64, g = g64();
    // the rail: a full circle from its right-hand point, hopping outward over the wire at the bottom
    const dA = Math.asin(hop / R) / D2R;
    const railPts: P[] = [...arcPts(O, R, 0, -90 + dA, 60), ...arcPts(g.bottom, hop, 0, -180, 20), ...arcPts(O, R, -90 - dA, -360, 160)];
    wire(s, railPts, { w: 2.4 });
    // the rod, from O to the rim
    path(s, [O, g.tip], { w: 4.2 });
    // the wire from O down to R, broken where it passes under the rail's hop
    wire(s, [O, [O[0], G64.yR], g.R1], { hidden: true });
    path(s, [O, [O[0], g.under[0]]]);
    path(s, [[O[0], g.under[1]], [O[0], G64.yR], g.R1]);
    // the rail's right side down to R's other end
    wire(s, [g.right, [g.right[0], G64.yR], g.R2]);
    resistor(s, g.R1, g.R2, 14);
    s.sym((g.R1[0] + g.R2[0]) / 2, G64.yR + 6, '<i>R</i>', { size: 16 });
    s.dot(O[0], O[1], 4.2);
    // the current: out along the rod, down the right-hand wire, up into O
    const u: P = [Math.cos(ang * D2R), -Math.sin(ang * D2R)], n: P = [u[1], -u[0]];
    arrow(s, add(add(O, u, R * 0.36), n, 13), add(add(O, u, R * 0.74), n, 13), { color: C.mari, w: 2.4 });
    head(s, G64.headR, G64.uR, C.mari, 11, 5.5);
    head(s, G64.headL, G64.uL, C.mari, 11, 5.5);
    s.sym(g.right[0] + 12, 274, '<i>I</i>', { size: 18, anchor: 'start', color: C.amber });
    // ω, clockwise
    turn(s, O, wR, w0, w1);
    const wl = polar(O, wR - 15, (w0 + w1) / 2 + 4);
    s.sym(wl[0], wl[1] + 6, '<i>ω</i>', { size: 16 });
    s.sym(O[0] + 12, O[1] + 18, '<i>O</i>', { size: 16, anchor: 'start' });
    s.sym(8, 22, '<i>B⃗</i> into page (×)', { size: 15, anchor: 'start' });
    s.place([
      { t: 'Circular rail', p: polar(O, R, 150), at: [[6, 44, 'start'], [6, 40, 'start']] },
      { t: 'Rod', p: polar(O, R * 0.86, ang), at: [[W - 8, 40, 'end'], [W - 8, 48, 'end']] },
    ]);
    for (let y = O[1] - R + 20; y < O[1] + R; y += 34) for (let x = O[0] - R + 20; x < O[0] + R; x += 34) if (len([x, y], O) < R - 12 && !crowded(s, [x, y], 9)) xMark(s, [x, y]);
    return s;
  },
  check() {
    const { O, R, ang, w0, w1, wR } = G64, g = g64();
    const s = fig64.draw(fig64.cases[0]);
    const wa = arcPts(O, wR, w0, w1, 10);
    const cw = cross3(page(sub(wa[0], O)), page(sub(wa[10], O)))[2] < 0;
    // clockwise: ω⃗ into the page; a charge on the rod moves with v⃗ = ω⃗ × r⃗; the force on + charges is v⃗ × B⃗
    const r = page(sub(g.tip, O)), v = cross3(IN, r), f = cross3(v, IN);
    const conductors = nodes(s, { O, rim: g.tip, 'R left': g.R1, 'R right': g.R2 });
    // Example 4 (p. 408): l = 0.60 m, ω = 50 rad/s, B = 0.30 T, R = 9.0 Ω
    const emf = 0.5 * 0.3 * 50 * 0.6 ** 2, I = emf / 9, Pw = emf * I, tau = Pw / 50;
    return [
      ['The ω arrow turns clockwise (ω⃗ into the page), as the caption says', cw],
      ['On the rod, v⃗ × B⃗ for a positive charge points outward along the rod: the rim is the + end, so inside the rod the current runs O → rim (the drawn arrow points outward)', sameWay(f, r)],
      [`The free end lies on the rail (rod length = rail radius ${R} px)`, close(len(O, g.tip), R, 1e-9)],
      [`Read off the wires, the conductors are ${showNodes(conductors)}: O joins R’s left end (under the rail’s hop), the rail joins R’s right end, and the rod closes the loop`, sameNodes(conductors, [['O', 'R left'], ['R right', 'rim']])],
      ['So the current leaves the rim down the right-hand wire (its arrow points down, away from the rail), passes R and comes back up into O (its arrow points up, towards O)', close(G64.headR[0], g.right[0]) && G64.headR[1] > g.right[1] && G64.uR[1] > 0 && close(G64.headL[0], O[0]) && G64.headL[1] > g.bottom[1] && G64.uL[1] < 0],
      [`Example 4: ε = ½Bωl² = ${fmt(emf, 2)} V, I = ${fmt(I, 2)} A, P = ${fmt(Pw, 2)} W, τ = P/ω = ${sci(tau, 2)} N m (the book's 2.7 V, 0.30 A, 0.81 W, 1.62 × 10⁻² N·m)`, fmt(emf, 2) === '2.7' && fmt(I, 2) === '0.3' && fmt(Pw, 2) === '0.81' && sci(tau, 2) === '1.62 × 10⁻²'],
      [`The rod is drawn at ${ang}°, clear of the ω arrow (${w1}° to ${w0}°)`, ang < w1],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* Figure 6.5 · two coaxial solenoids (topic 03)                          */
/* ===================================================================== */
/**
 * Both solenoids span the same length l. Their turns are drawn in Example 3's
 * ratio n₁ : n₂ = 2000 : 1000 (20 inner turns, 10 outer). The book marks I₂
 * with an arrow along the length; a current circles the axis, so here it is
 * marked where the first outer turn crosses the page (⊙ at the top, ⊗ at the
 * bottom), the sense that gives B⃗₂ along the drawn axis arrow. The check sums
 * the outer turns' fields on the axis.
 */
const G65 = { x0: 30, l: 264, cy: 120, ro: 46, rxo: 7, ri: 26, rxi: 4.5, N2: 10, N1: 20 };
const turns65 = (N: number) => Array.from({ length: N }, (_, k) => G65.x0 + (G65.l * (k + 0.5)) / N);
const fig65: Diagram = {
  id: 'p12-06-fig-6.5',
  topic: 3,
  name: 'Two coaxial solenoids',
  cases: [{ chip: 'B₂ threads S₁', cap: 'Two long coaxial solenoids of equal length <i>l</i>. The inner solenoid <i>S</i><sub>1</sub> (turns per unit length <i>n</i><sub>1</sub>, area <i>A</i>) lies inside the outer solenoid <i>S</i><sub>2</sub> (<i>n</i><sub>2</sub>). The current <i>I</i><sub>2</sub> in <i>S</i><sub>2</sub> produces a uniform axial field <i>B</i><sub>2</sub> = μ<sub>0</sub><i>n</i><sub>2</sub><i>I</i><sub>2</sub> that threads <i>S</i><sub>1</sub>.' }],
  draw() {
    const s = new Sketch(W, 340);
    const { x0, l, cy, ro, rxo, ri, rxi, N2, N1 } = G65;
    turns65(N2).forEach((x) => path(s, ellPts([x, cy], rxo, ro, 0, 2 * Math.PI, 80), { w: 2 }));
    turns65(N1).forEach((x) => path(s, ellPts([x, cy], rxi, ri, 0, 2 * Math.PI, 60), { color: C.mari, w: 1.8 }));
    // B₂ along the axis
    arrow(s, [x0 - 10, cy], [x0 + l + 16, cy], { w: 2.2 });
    s.sym(x0 + l + 20, cy + 6, '<i>B⃗</i><sub>2</sub>', { size: 16, anchor: 'start' });
    // I₂: out of the page at the top of the first outer turn, into it at the bottom
    const xf = turns65(N2)[0];
    outMark(s, [xf, cy - ro], 7);
    inMark(s, [xf, cy + ro], 7);
    s.sym(xf + 12, cy - ro - 10, '<i>I</i><sub>2</sub>', { size: 16, anchor: 'start' });
    s.sym(x0 + l, cy - ro - 12, '<i>S</i><sub>2</sub> (<i>n</i><sub>2</sub>)', { size: 15, anchor: 'end' });
    s.sym(x0 + 2, cy + ro + 24, '<i>S</i><sub>1</sub> (<i>n</i><sub>1</sub>, area <i>A</i>)', { size: 15, anchor: 'start', color: C.amber });
    // the common length l
    measure(s, [x0, cy + ro + 42], [x0 + l, cy + ro + 42]);
    s.sym(x0 + l / 2, cy + ro + 62, 'length <i>l</i>', { size: 15 });
    resultBlock(s, ['<i>B</i><sub>2</sub> = μ<sub>0</sub><i>n</i><sub>2</sub><i>I</i><sub>2</sub> (uniform)', '<i>M</i> = μ<sub>0</sub><i>n</i><sub>1</sub><i>n</i><sub>2</sub><i>Al</i>', '<i>M</i><sub>12</sub> = <i>M</i><sub>21</sub> = <i>M</i>'], { size: 15 });
    s.place([
      { t: 'Outer solenoid', p: ellPts([turns65(N2)[6], cy], rxo, ro, -1.75, -1.75, 1)[0], at: [[150, 16, 'middle'], [140, 16, 'middle']] },
      { t: 'Inner solenoid', hi: true, p: ellPts([turns65(N1)[16], cy], rxi, ri, 1.9, 1.9, 1)[0], at: [[W - 8, cy + ro + 10, 'end'], [W - 8, cy + ro + 16, 'end']] },
    ]);
    return s;
  },
  check() {
    const { l, ro, ri, N2, N1 } = G65;
    const s = fig65.draw(fig65.cases[0]);
    const xo = turns65(N2), xi = turns65(N1);
    const span = (xs: number[]) => xs[xs.length - 1] - xs[0] + l / xs.length;
    // the field at the middle of the axis from the ten outer turns (⊙ at the top: current along +z there)
    const mid = G65.x0 + l / 2, nI = N2 / l;
    const B = xo.reduce((b, x) => b + turnFieldX(ro, mid - x, 1), 0);
    const finite = nI * ((l / 2) / Math.hypot(l / 2, ro));
    // Example 3 (p. 418): n₁ = 2000, n₂ = 1000 m⁻¹, A = 4.0 cm², l = 0.50 m, 5.0 A → 0 in 0.010 s, 10 Ω
    const M = MU0 * 2000 * 1000 * 4e-4 * 0.5, e2 = (M * 5) / 0.01, q = (M * 5) / 10;
    return [
      [`Both solenoids span the same length l (${fmt(span(xo), 1)} px and ${fmt(span(xi), 1)} px), the inner one (radius ${ri} px) inside the outer (${ro} px), on one axis`, close(span(xo), l) && close(span(xi), l) && ri < ro],
      [`Turns drawn in Example 3's ratio: ${N1} inner to ${N2} outer, n₁ : n₂ = ${N1 / N2} : 1 = 2000 : 1000`, N1 / N2 === 2],
      [`Summed turn by turn, the outer solenoid’s field at the middle of the axis is ${fmt(B / nI, 3)} μ₀n₂I₂ along +x (the drawn B⃗₂): μ₀n₂I₂ for a long solenoid, ${fmt(finite / nI, 3)} for this drawn length`, B > 0 && rel(B, finite, 0.02)],
      [`Example 3: M = μ₀n₁n₂Al = ${sci(M, 2)} H, ε₂ = ${fmt(e2, 3)} V, q = ${sci(q, 2)} C (the book's 5.0 × 10⁻⁴ H, 0.25 V, 2.5 × 10⁻⁴ C)`, sci(M, 1) === '5.0 × 10⁻⁴' && fmt(e2, 2) === '0.25' && sci(q, 1) === '2.5 × 10⁻⁴'],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* Figure 6.6 · tiny coil at the centre of a large coil (topic 03)        */
/* ===================================================================== */
/**
 * The large coil (R = 118 px) carries I₁ anticlockwise, as the book's arrows
 * run; its field inside is out of the page (dots). The small coil (r = 16 px,
 * r/R = 0.14, larger than Example 4's 0.05 so that it can be seen) sits at the
 * centre. The check sums the large coil's field element by element at the
 * centre and at the small coil's rim.
 */
const G66 = { c: [150, 146] as P, R: 118, r: 16, arrows: [135, 45, 270], rAng: 140, RAng: -38, grid: 34 };
/** The field (z, per μ₀I) of a circular loop in its own plane, at distance ρ from its centre, summed element by element; anticlockwise current. */
function planeField(R: number, rho: number, N = 2000) {
  let bz = 0;
  for (let k = 0; k < N; k++) {
    const ph = ((k + 0.5) * 2 * Math.PI) / N, dph = (2 * Math.PI) / N;
    const dl: V3 = [-R * Math.sin(ph) * dph, R * Math.cos(ph) * dph, 0], rv: V3 = [rho - R * Math.cos(ph), -R * Math.sin(ph), 0];
    bz += cross3(dl, rv)[2] / (4 * Math.PI * norm3(rv) ** 3);
  }
  return bz;
}
const fig66: Diagram = {
  id: 'p12-06-fig-6.6',
  topic: 3,
  name: 'Small coil inside a large coil',
  cases: [{ chip: 'R ≫ r', cap: 'A large circular coil of radius <i>R</i> with a tiny coplanar concentric coil of radius <i>r</i> at its centre. The field of the large coil is nearly uniform over the area of the small coil.' }],
  draw() {
    const s = new Sketch(W, 420);
    const { c, R, r, arrows, rAng, RAng } = G66;
    ring(s, c, R, { w: 2.4 });
    arrows.forEach((a) => head(s, polar(c, R, a + 3), unit(sub(polar(c, R, a + 4), polar(c, R, a + 2))), C.ink, 11, 5.5));
    s.sym(polar(c, R, 0)[0] + 10, c[1] + 6, '<i>I</i><sub>1</sub>', { size: 17, anchor: 'start' });
    ring(s, c, r, { color: C.mari, w: 2.6 });
    // r and R
    // r drawn as the radius it is, centre to rim, named just outside the rim
    // on its line: drawn outward from the rim it read as a tag's leader.
    path(s, [c, polar(c, r, rAng)], { color: C.amber, w: 1.4 });
    const rl = polar(c, r + 15, rAng);
    s.sym(rl[0], rl[1] + 5, '<i>r</i>', { size: 16, color: C.amber });
    path(s, [polar(c, r + 2, RAng), polar(c, R, RAng)], { color: C.slate, w: 1.2, dash: 'dash' });
    const Rl = polar(c, R * 0.66, RAng);
    s.sym(Rl[0] - 10, Rl[1] + 20, '<i>R</i>', { size: 16 });
    // the note and the formula box
    const ny = c[1] + R + 30;
    s.sym(10, ny, '<i>R</i> ≫ <i>r</i>: the field <i>B⃗</i><sub>1</sub> (out of page)', { size: 14, anchor: 'start' });
    s.sym(10, ny + 19, 'is uniform over the small coil', { size: 14, anchor: 'start' });
    resultBlock(s, ['<i>B</i><sub>1</sub> = μ<sub>0</sub><i>N</i><sub>1</sub><i>I</i><sub>1</sub>/(2<i>R</i>)', 'Φ<sub>2</sub> = <i>B</i><sub>1</sub> π<i>r</i><sup>2</sup>', '<i>M</i> = <i>N</i><sub>2</sub>Φ<sub>2</sub>/<i>I</i><sub>1</sub> = μ<sub>0</sub><i>N</i><sub>1</sub><i>N</i><sub>2</sub>π<i>r</i><sup>2</sup>/(2<i>R</i>)'], { size: 15 });
    s.place([
      { t: 'Large coil', p: polar(c, R, 112), at: [[6, 8, 'start'], [6, 14, 'start']] },
      { t: 'Small coil', hi: true, p: polar(c, r, 20), at: [[c[0] + 2, c[1] - 70, 'middle'], [c[0] + 2, c[1] - 78, 'middle']] },
    ]);
    // the field out of the page: dots on a grid inside the large coil, clear of the rest
    dotMark(s, c);
    for (let y = c[1] - R + 20; y < c[1] + R; y += G66.grid) for (let x = c[0] - R + 20; x < c[0] + R; x += G66.grid) if (len([x, y], c) < R - 14 && len([x, y], c) > r + 8 && !crowded(s, [x, y], 9)) dotMark(s, [x, y]);
    return s;
  },
  check() {
    const { c, R, r, arrows } = G66;
    const s = fig66.draw(fig66.cases[0]);
    // the drawn arrows' sense: each head points the way of increasing angle (anticlockwise)
    const ccw = arrows.every((a) => cross3(page(sub(polar(c, R, a), c)), page(sub(polar(c, R, a + 4), polar(c, R, a + 2))))[2] > 0);
    const B0 = planeField(R, 0), Bdraw = planeField(R, r), Bex = planeField(1, 0.05);
    // Example 4 (p. 418): N₁ = 200, R = 0.20 m, N₂ = 50, r = 1.0 cm, dI₁/dt = 100 A/s
    const M = (MU0 * 200 * 50 * Math.PI * 0.01 ** 2) / (2 * 0.2), e2 = M * 100;
    // the two coils as drawn: the closed curves of 100+ points, read back off the sketch (centre = mean point, radius range about it)
    const coils = (LINES.get(s) ?? [])
      .filter((pts) => pts.length > 100 && len(pts[0], pts[pts.length - 1]) < 1e-6)
      .map((pts) => {
        const q = pts.slice(0, -1), m: P = [q.reduce((t, p) => t + p[0], 0) / q.length, q.reduce((t, p) => t + p[1], 0) / q.length];
        const d = q.map((p) => len(p, m));
        return { m, lo: Math.min(...d), hi: Math.max(...d) };
      })
      .sort((u, v) => v.hi - u.hi);
    const two = coils.length === 2, gapC = two ? len(coils[0].m, coils[1].m) : Infinity;
    // face-on (in the drawing plane): each is a true circle, not foreshortened into an ellipse as a tilted coil would be
    const faceOn = two && coils.every((k) => k.hi - k.lo < 0.01 * k.hi);
    const radiiOk = two && rel(coils[0].hi, R, 0.01) && rel(coils[1].hi, r, 0.01);
    return [
      ['The current arrows on the large coil all run anticlockwise', ccw],
      [`Summed element by element, its field at the centre is ${fmt(B0 * 2 * R, 4)} × μ₀I/(2R) and out of the page (the dots): anticlockwise current, field towards the viewer`, rel(B0, 1 / (2 * R), 1e-4) && B0 > 0],
      [`Over the small coil it changes by ${fmt((Bdraw / B0 - 1) * 100, 2)}% from centre to rim as drawn (r/R = ${fmt(r / R, 2)}), and by ${fmt((Bex / planeField(1, 0) - 1) * 100, 2)}% at Example 4's r/R = 0.05: nearly uniform`, Bdraw / B0 - 1 < 0.02 && Bex / planeField(1, 0) - 1 < 0.002],
      [`The two coils, read off the drawing, are concentric (${coils.length} closed coils, centres ${two ? fmt(gapC, 3) : '—'} px apart) and both lie in the drawing plane (each drawn face-on as a true circle, radii ${two ? `${fmt(coils[0].hi, 1)} and ${fmt(coils[1].hi, 1)}` : '—'} px = R and r, out of round by under 1%)`, two && gapC < 0.5 && faceOn && radiiOk],
      [`Example 4: M = μ₀N₁N₂πr²/(2R) = ${sci(M, 2)} H and ε₂ = M dI₁/dt = ${sci(e2, 2)} V (the book's 9.9 × 10⁻⁶ H ≈ 9.9 μH, 9.9 × 10⁻⁴ V ≈ 0.99 mV)`, sci(M, 1) === '9.9 × 10⁻⁶' && sci(e2, 1) === '9.9 × 10⁻⁴'],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* Figure 6.7 · AC generator and its emf (topic 04)                       */
/* ===================================================================== */
/**
 * Two panels. The generator: the field runs from N to S across the coil; the
 * axle is vertical, perpendicular to B⃗; each end of the coil runs along the
 * axle to its own slip ring (one at each end, as the book draws them); a
 * carbon brush presses on each ring and the external circuit through R joins
 * the two brushes. The check reads the circuit back as nodes. The graph:
 * ε = −dΦ/dt of Φ = NBA cos ωt, taken numerically, from 0 to 2π.
 */
type Case67 = { chip: string; cap: string; kind: 'gen' | 'graph' };
const G67 = { ax: 170, axT: 54, axB: 266, ringT: 82, ringB: 238, rrx: 12, rry: 4.5, coilT: 122, coilB: 196, hw: 24, sk: 7, lead: 5, N: [56, 120, 96, 198] as Rect, S: [244, 120, 284, 198] as Rect, Rx: 318, bw: 14, Bys: [140, 178] };
const A67 = { ox: 44, oy: 146, x1: 304, amp: 76 };
const g67 = () => {
  const { ax, ringT, ringB, rrx, rry, coilT, coilB, hw, sk, lead, bw, Rx } = G67;
  // the coil, seen turned: a parallelogram round the axle
  const coil: P[] = [[ax - hw, coilT + sk], [ax + hw, coilT - sk], [ax + hw, coilB - sk], [ax - hw, coilB + sk]];
  const topEnd: P = [ax + lead, coilT - (sk * lead) / hw], botEnd: P = [ax + lead, coilB - (sk * lead) / hw];
  // where the leads meet the rings (the ellipse's near half at x = ax + lead)
  const ey = rry * Math.sqrt(1 - (lead / rrx) ** 2);
  const ringTopHit: P = [ax + lead, ringT + ey], ringBotHit: P = [ax + lead, ringB - ey];
  const brushT: Rect = [ax + rrx, ringT - 4, ax + rrx + bw, ringT + 4], brushB: Rect = [ax + rrx, ringB - 4, ax + rrx + bw, ringB + 4];
  const RT: P = [Rx, 136], RB: P = [Rx, 182];
  return { coil, topEnd, botEnd, ringTopHit, ringBotHit, brushT, brushB, RT, RB };
};
const fig67: Diagram = {
  id: 'p12-06-fig-6.7',
  topic: 4,
  name: 'AC generator',
  cases: [
    { chip: 'Generator', kind: 'gen', cap: 'AC generator: a rectangular armature coil rotating between the N and S poles of a field magnet, with slip rings and carbon brushes feeding an external resistor <i>R</i>.' },
    { chip: 'emf–time graph', kind: 'graph', cap: 'The emf-time graph: the emf is maximum when the coil is parallel to <i>B</i> and zero when it is perpendicular to <i>B</i>.' },
  ] as Case67[],
  draw(c: Case67) {
    return c.kind === 'gen' ? draw67gen() : draw67graph();
  },
  check(c: Case67) {
    if (c.kind === 'gen') {
      const s = draw67gen(), g = g67();
      const { N, S, ax, axT, axB, Bys } = G67;
      const conductors = nodes(s, { 'coil end 1': g.topEnd, 'coil end 2': g.botEnd, 'R top': g.RT, 'R bottom': g.RB });
      const B: V3 = page([1, 0]), axle: V3 = page([0, -1]);
      // Example 1 (p. 425): N = 100, A = 0.020 m², B = 0.50 T, f = 50 Hz
      const e0 = 100 * 0.5 * 0.02 * 2 * Math.PI * 50;
      return [
        ['The field arrows run from the N pole (left) to the S pole (right)', N[2] < S[0] && Bys.every((y) => y > N[1] && y < N[3])],
        ['The axle (the rotation axis) is perpendicular to B⃗, through the coil', close(dot3(B, axle), 0) && axT < G67.coilT && axB > G67.coilB && g.coil[0][0] < ax && g.coil[1][0] > ax],
        [`Read off the wires, the conductors are ${showNodes(conductors)}: each end of the coil reaches one slip ring, its brush, and one end of R`, sameNodes(conductors, [['R top', 'coil end 1'], ['R bottom', 'coil end 2']])],
        ['The two rings sit on the axle, so they turn with the coil; the brushes are fixed beside them', G67.ringT > axT && G67.ringB < axB],
        [`Example 1: ε₀ = NBAω = ${fmt(e0, 1)} V (the book's 314 V)`, Math.round(e0) === 314],
        ...layout(s),
      ];
    }
    const s = draw67graph();
    const { ox, x1, amp } = A67;
    const sx = (x1 - 14 - ox) / (2 * Math.PI);
    // ε = −dΦ/dt with Φ = Φ₀ cos ωt, numerically, against the drawn curve (per ε₀ = Φ₀ω)
    const emf = (wt: number) => -(Math.cos(wt + 1e-5) - Math.cos(wt - 1e-5)) / 2e-5;
    const curve = CURVE67.get(s) ?? [];
    const fits = curve.every(([x, y]) => close((A67.oy - y) / amp, emf((x - ox) / sx), 1e-4));
    // the coil's plane is perpendicular to its area vector; at ωt the area vector makes ωt with B⃗
    const planeParallel = (wt: number) => close(Math.abs(Math.cos(wt)), 0, 1e-9);
    return [
      [`The drawn curve is −dΦ/dt of Φ = NBA cos ωt (per ε₀ = NBAω) at all ${curve.length} points: ε = ε₀ sin ωt`, curve.length > 100 && fits],
      ['It is zero at ωt = 0, π and 2π, +ε₀ at π/2 and −ε₀ at 3π/2', [0, Math.PI, 2 * Math.PI].every((t) => close(emf(t), 0, 1e-6)) && close(emf(Math.PI / 2), 1, 1e-6) && close(emf(1.5 * Math.PI), -1, 1e-6)],
      ['At π/2 and 3π/2 the area vector is perpendicular to B⃗, so the coil’s plane is parallel to B⃗: |ε| maximum, as labelled', planeParallel(Math.PI / 2) && planeParallel(1.5 * Math.PI)],
      ['At 0, π and 2π the area vector lies along B⃗, so the plane is perpendicular to B⃗ (flux maximum): ε = 0, as labelled', [0, Math.PI, 2 * Math.PI].every((t) => close(Math.abs(Math.cos(t)), 1, 1e-9))],
      ...layout(s),
    ];
  },
};
const CURVE67 = new WeakMap<Sketch, P[]>();
function draw67gen() {
  const s = new Sketch(W, 292);
  const { ax, axT, axB, ringT, ringB, rrx, rry, coilT, coilB, N, S, Rx, Bys } = G67, g = g67();
  // the magnet's poles
  box(s, N, { w: 2 });
  box(s, S, { w: 2 });
  s.sym((N[0] + N[2]) / 2, (N[1] + N[3]) / 2 + 7, 'N', { size: 20 });
  s.sym((S[0] + S[2]) / 2, (S[1] + S[3]) / 2 + 7, 'S', { size: 20 });
  // the axle, behind the coil
  path(s, [[ax, axT], [ax, coilT + 2]], { w: 2.6 });
  path(s, [[ax, coilB - 2], [ax, axB]], { w: 2.6 });
  // the coil
  outline(s, g.coil, { color: C.mari, w: 2.6 });
  // the field, N to S, broken where it passes behind the coil
  Bys.forEach((y) => {
    const xl = g.coil[0][0] - 4, xr = g.coil[1][0] + 4;
    path(s, [[N[2] + 3, y], [xl, y]], { color: C.slate, w: 1.6 });
    arrow(s, [xr, y], [S[0] - 3, y], { color: C.slate, w: 1.6 });
  });
  s.sym(220, Bys[0] - 8, '<i>B⃗</i>', { size: 16, color: C.slate });
  // the leads from the coil's ends along the axle to the rings
  wire(s, [g.topEnd, g.ringTopHit], { w: 1.2 });
  wire(s, [g.botEnd, g.ringBotHit], { w: 1.2 });
  // the rings, each a conductor that turns with the axle
  wire(s, ellPts([ax, ringT], rrx, rry, 0, 2 * Math.PI, 60), { w: 2 });
  wire(s, ellPts([ax, ringB], rrx, rry, 0, 2 * Math.PI, 60), { w: 2 });
  // the brushes, pressing on the rings
  [g.brushT, g.brushB].forEach((b) => wire(s, [[b[0], b[1]], [b[2], b[1]], [b[2], b[3]], [b[0], b[3]], [b[0], b[1]]], { w: 1.8 }));
  // the external circuit through R
  wire(s, [[g.brushT[2], ringT], [Rx, ringT], g.RT]);
  wire(s, [[g.brushB[2], ringB], [Rx, ringB], g.RB]);
  resistor(s, g.RT, g.RB, 9);
  s.sym(Rx - 14, (g.RT[1] + g.RB[1]) / 2 + 6, '<i>R</i>', { size: 16, anchor: 'end' });
  // ω about the axle
  path(s, ellPts([ax, axT + 4], 20, 6, 0.15 * Math.PI, 0.85 * Math.PI, 30).reverse().slice(0, -2), { color: C.slate, w: 1.8 });
  const wend = ellPts([ax, axT + 4], 20, 6, 0.15 * Math.PI, 0.15 * Math.PI + 0.01, 1);
  head(s, wend[0], unit(sub(wend[0], wend[1])), C.slate, 9, 4.5);
  s.sym(ax + 30, axT + 4, '<i>ω</i>', { size: 16, anchor: 'start' });
  s.place([
    { t: 'Armature coil', hi: true, p: g.coil[0], at: [[6, 92, 'start'], [6, 86, 'start']] },
    { t: 'Slip ring', p: [ax - rrx, ringT], at: [[6, 48, 'start'], [6, 54, 'start']] },
    { t: 'Slip ring', p: [ax - rrx, ringB], at: [[6, 222, 'start'], [6, 228, 'start']] },
    { t: 'Carbon brush', p: [g.brushT[0] + 7, g.brushT[1]], at: [[W - 8, 38, 'end'], [W - 8, 44, 'end'], [W - 8, 30, 'end']] },
    { t: 'Carbon brush', p: [g.brushB[0] + 7, g.brushB[3]], at: [[W - 8, 262, 'end'], [W - 8, 256, 'end'], [W - 8, 266, 'end']] },
    { t: 'Axle', p: [ax, axB - 6], at: [[ax - 24, 262, 'end'], [ax - 24, 266, 'end']] },
  ]);
  return s;
}
function draw67graph() {
  const s = new Sketch(W, 326);
  const { ox, oy, x1, amp } = A67;
  const sx = (x1 - 14 - ox) / (2 * Math.PI);
  const X = (wt: number) => ox + wt * sx;
  // axes
  s.vec(ox - 12, oy, x1 + 8, oy, { color: C.grey, w: 1.3 });
  s.vec(ox, oy + amp + 14, ox, oy - amp - 36, { color: C.grey, w: 1.3 });
  s.sym(ox - 9, oy - amp - 30, '<i>ε</i>', { size: 17, anchor: 'end' });
  // ε = −dΦ/dt of Φ = Φ₀ cos ωt, per ε₀ = Φ₀ω
  const pts: P[] = samples(0, 2 * Math.PI, 240).map((wt): P => [X(wt), oy - amp * (-(Math.cos(wt + 1e-5) - Math.cos(wt - 1e-5)) / 2e-5)]);
  path(s, pts, { color: C.mari, w: 2.6 });
  CURVE67.set(s, pts);
  s.sym(X(Math.PI / 2), oy - amp - 10, '<i>ε</i><sub>0</sub>', { size: 16, color: C.amber });
  s.sym(X(1.5 * Math.PI) + 30, oy + amp + 2, '−<i>ε</i><sub>0</sub>', { size: 16, anchor: 'start', color: C.amber });
  // ticks on the axis, values in a row under the graph
  const ticks: [number, string][] = [[0, '0'], [Math.PI / 2, 'π/2'], [Math.PI, 'π'], [1.5 * Math.PI, '3π/2'], [2 * Math.PI, '2π']];
  const ty = oy + amp + 50;
  ticks.forEach(([t, lab]) => {
    if (t > 0) path(s, [[X(t), oy - 4], [X(t), oy + 4]], { color: C.grey, w: 1.3, free: true });
    s.sym(X(t), ty, lab, { size: 14, color: C.slate });
  });
  s.sym((ox + x1) / 2, ty + 22, '<i>ωt</i>', { size: 16 });
  // what the coil is doing at each mark
  s.sym(X(Math.PI / 2) + 10, oy - amp - 32, 'coil ∥ <i>B⃗</i>: |<i>ε</i>| maximum', { size: 13, color: C.slate });
  s.sym(X(1.5 * Math.PI) - 10, oy + amp + 24, 'coil ∥ <i>B⃗</i>: |<i>ε</i>| maximum', { size: 13, color: C.slate });
  s.sym(X(0) + 6, oy + 22, 'coil ⊥ <i>B⃗</i>:', { size: 13, anchor: 'start', color: C.slate });
  s.sym(X(0) + 6, oy + 39, '<i>ε</i> = 0', { size: 13, anchor: 'start', color: C.slate });
  s.sym(X(Math.PI) + 4, oy - 30, 'coil ⊥ <i>B⃗</i>:', { size: 12, anchor: 'start', color: C.slate });
  s.sym(X(Math.PI) + 4, oy - 14, '<i>ε</i> = 0', { size: 12, anchor: 'start', color: C.slate });
  s.sym(X(2 * Math.PI) + 16, oy - 30, 'coil ⊥ <i>B⃗</i>:', { size: 12, anchor: 'end', color: C.slate });
  s.sym(X(2 * Math.PI) + 16, oy - 14, '<i>ε</i> = 0', { size: 12, anchor: 'end', color: C.slate });
  return s;
}

/* ===================================================================== */
/* Figure 6.8 · the concept map (Chapter Synthesis, topic H)              */
/* ===================================================================== */
/**
 * The book's map, stacked for a phone: the central box (a changing flux,
 * Faraday, Lenz) on top; from it a trunk with four branches, each labelled with
 * what changes, to the four results the caption names. The pairs are read
 * from the caption; the check reads them back off the drawing.
 */
const MAP68 = [
  { label: 'Change <i>B</i>', box: ['Self and mutual induction', '(<i>L</i>, <i>M</i>)'] },
  { label: 'Change <i>A</i>', box: ['Motional emf', '(<i>ε</i> = <i>Bvl</i>)'] },
  { label: 'Change <i>θ</i>', box: ['AC generator', '(<i>ε</i> = <i>NBAω</i> sin <i>ωt</i>)'] },
  { label: 'solid conductor', box: ['Eddy currents'] },
];
/** The caption's pairs: changing B → self and mutual induction, A → motional emf, θ → the AC generator, a solid conductor → eddy currents. */
const CAPTION68: [string, string][] = [['Change B', 'Self and mutual induction'], ['Change A', 'Motional emf'], ['Change θ', 'AC generator'], ['solid conductor', 'Eddy currents']];
const M68 = { main: [10, 52, 330, 178] as Rect, trunkX: 40, rows: [218, 274, 330, 386], bx0: 150, bx1: 330, bh: 22 };
const fig68: Diagram = {
  id: 'p12-06-fig-6.8',
  topic: 12,
  name: 'The chapter on one map',
  cases: [{ chip: 'Three ways', cap: 'Concept map of the chapter: a changing flux Φ = <i>BA</i> cos <i>θ</i> gives <i>ε</i> = −<i>N</i> dΦ/d<i>t</i> (Faraday), with Lenz\'s law (energy conservation). Changing <i>B</i> leads to self and mutual induction, changing <i>A</i> to motional emf (<i>ε</i> = <i>Bvl</i>), changing <i>θ</i> to the AC generator (<i>ε</i> = <i>NBAω</i> sin <i>ωt</i>); in a solid conductor the induced currents are eddy currents.' }],
  draw() {
    const s = new Sketch(W, 418);
    const { main, trunkX, rows, bx0, bx1, bh } = M68;
    words(s, 10, 20, 'Electromagnetic induction:', { size: 13, anchor: 'start', bold: true });
    words(s, 10, 38, 'three ways to change the flux', { size: 13, anchor: 'start', bold: true });
    path(s, roundRect(main, 12), { color: C.mari, w: 2.4 });
    const cx = (main[0] + main[2]) / 2;
    words(s, cx, 76, 'Changing magnetic flux', { size: 14, bold: true, color: C.amber });
    s.sym(cx, 102, 'Φ<sub>B</sub> = <i>BA</i> cos <i>θ</i>', { size: 16 });
    s.sym(cx, 128, '<i>ε</i> = −<i>N</i> dΦ<sub>B</sub>/d<i>t</i>  (Faraday)', { size: 16 });
    words(s, cx, 152, 'Lenz: the effect opposes the change', { size: 12, bold: true });
    words(s, cx, 168, '(energy conservation)', { size: 12, color: C.slate });
    // the trunk and its four branches
    path(s, [[trunkX, main[3]], [trunkX, rows[rows.length - 1]]], { w: 1.8 });
    MAP68.forEach((m, i) => {
      const y = rows[i];
      arrow(s, [trunkX, y], [bx0 - 3, y], { w: 1.8 });
      s.sym((trunkX + bx0) / 2 + 2, y - 12, m.label, { size: i < 3 ? 14 : 13, color: i < 3 ? C.text : C.slate });
      path(s, roundRect([bx0, y - bh, bx1, y + bh], 10), { w: 1.6 });
      const bc = (bx0 + bx1) / 2;
      if (m.box.length === 1) words(s, bc, y + 4, m.box[0], { size: 12 });
      else { words(s, bc, y - 4, m.box[0], { size: 12 }); s.sym(bc, y + 14, m.box[1], { size: 14 }); }
    });
    return s;
  },
  check() {
    const s = fig68.draw(fig68.cases[0]);
    const { trunkX, rows, bx0, bx1, bh, main } = M68;
    const lines = LINES.get(s) ?? [];
    const plain = (t: string) => t.replace(/<[^>]+>/g, '');
    // read each branch back: the label just above it, the box it ends at, and that box's first line
    const read = rows.map((y) => {
      const lab = s.labels.find((l) => l.rect[3] < y && l.rect[3] > y - 14 && l.rect[0] > trunkX && l.rect[2] < bx0)?.text ?? '';
      const arr = lines.some((l) => l.length === 2 && close(l[0][1], y) && close(l[1][1], y) && close(l[0][0], trunkX) && Math.abs(l[1][0] - bx0) < 5);
      const boxText = s.labels.find((l) => l.rect[0] > bx0 && l.rect[2] < bx1 && l.rect[1] > y - bh && l.rect[3] < y + 8)?.text ?? '';
      return { lab: plain(lab), arr, boxText };
    });
    // the physics on each branch: what changes in Φ = BA cos θ
    const phi = (B: number, A: number, th: number) => B * A * Math.cos(th);
    const d = (f: (x: number) => number, x: number) => (f(x + 1e-6) - f(x - 1e-6)) / 2e-6;
    const motional = -d((t) => phi(0.4, 0.5 * (0.2 + 3 * t), 0), 0); // B = 0.40 T, l = 0.50 m, v = 3.0 m/s
    const ac = -d((t) => 100 * phi(0.5, 0.02, 100 * Math.PI * t), 0.003); // N = 100, A = 0.020 m², 50 Hz
    return [
      [`Four branches leave the trunk under the central box, each an arrow ending at its own box: ${read.map((r) => `“${r.lab}” → “${r.boxText}”`).join(', ')}`, read.every((r) => r.arr) && rows.every((y, i) => i === 0 || y - rows[i - 1] > 2 * bh)],
      ['The pairs are the caption’s: changing B → self and mutual induction, A → motional emf, θ → the AC generator, a solid conductor → eddy currents', JSON.stringify(read.map((r) => [r.lab, r.boxText])) === JSON.stringify(CAPTION68)],
      ['The trunk starts on the central box', lines.some((l) => l.length === 2 && close(l[0][0], trunkX) && close(l[0][1], main[3]))],
      [`Changing A by moving a rod (l = 0.50 m at 3.0 m/s in 0.40 T): −dΦ/dt = ${fmt(Math.abs(motional), 3)} V = Bvl; turning θ = ωt (N = 100, A = 0.020 m², 0.50 T, 50 Hz): −N dΦ/dt = ${fmt(ac, 2)} V = NBAω sin ωt`, close(Math.abs(motional), 0.4 * 3 * 0.5, 1e-6) && close(ac, 100 * 0.5 * 0.02 * 100 * Math.PI * Math.sin(100 * Math.PI * 0.003), 1e-4)],
      ...layout(s),
    ];
  },
};

export const DIAGRAMS_PHYSICS_12_06: Diagram[] = [fig61, fig62, fig63, fig64, fig65, fig66, fig67, fig68];
