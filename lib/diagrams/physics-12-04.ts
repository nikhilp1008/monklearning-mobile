import { C, LABEL_GAP, Rect, Sketch, crosses, mathW, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * PHYSICS CLASS 12, CHAPTER 4 (Moving Charges and Magnetism): every drawing of
 * the Master Reference book, redrawn. The chapter's drawings are its sixteen
 * numbered figures, each printed on a "CHAPTER 4 · FIGURES" page (4.1 on
 * p. 259, 4.2 on p. 262, 4.3 on p. 264, 4.4 on p. 270, 4.5 on p. 273, 4.6 on
 * p. 275, 4.7 on p. 277, 4.8 on p. 284, 4.9 on p. 286, 4.10 on p. 288, 4.11 on
 * p. 290, 4.12 on p. 292, 4.13 and 4.14 on p. 299, 4.15 on p. 302, 4.16 on
 * p. 309; the first copy of each caption sits a page earlier, where the text
 * refers to it). It has no unnumbered drawings: pp. 256–329 were checked page
 * by page, the Supplement (Addenda A–E, pp. 314–329) included; the rest is
 * prose, typeset equations, boxed answers and two tables (pp. 260 and 271,
 * 307).
 *
 * Every figure is computed from the physics, never placed by eye: field-line
 * senses from Ŷ × r̂ and dl⃗ × r⃗, the loop's on-axis field summed element by
 * element, the finite wire's field integrated between its drawn ends, Ampère's
 * law checked by integrating B⃗ · dl⃗ round each drawn Amperian loop for the
 * drawn currents, the cavity's field summed over the drilled cross-section,
 * forces from qv⃗ × B⃗ and IL⃗ × B⃗, the cyclotron's radii growing as √k with
 * each equal kick, the couple's arm b sin θ, and the meter circuits read back
 * off their wires as nodes. Each `check` recomputes what the figure and its
 * caption state and measures that no label or tag touches a line it does not
 * name.
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
const crossp = (a: P, b: P) => a[0] * b[1] - a[1] * b[0];
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
/**
 * Is p crowded: within `pad` px of a tag, a label, a kept line or a point? A
 * background of field marks (⊙ / ⊗) is laid only where it leaves the rest clear.
 */
function crowded(s: Sketch, p: P, pad: number) {
  const boxes: Rect[] = [...s.tags.map((t) => t.rect), ...s.labels.map((l) => l.rect)];
  if (boxes.some((r) => rectDist(r, p) < pad)) return true;
  if (s.points.some((q) => len(p, [q.x, q.y]) < pad + q.r)) return true;
  if (s.tags.some((t) => t.from && t.to && distSeg(p, t.from, t.to) < pad)) return true;
  for (const pts of LINES.get(s) ?? []) for (let i = 1; i < pts.length; i++) {
    const a = pts[i - 1], b = pts[i], d = sub(b, a), L = dotp(d, d) || 1, k = Math.max(0, Math.min(1, dotp(sub(p, a), d) / L));
    if (len(p, add(a, d, k)) < pad) return true;
  }
  return false;
}

/** Wires as drawn, by sketch, so a check can read the circuit back off the drawing. */
const WIRES = new WeakMap<Sketch, P[][]>();
function wire(s: Sketch, pts: P[]) { path(s, pts); const l = WIRES.get(s) ?? []; l.push(pts); WIRES.set(s, l); }
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

/** A resistor as the book draws it: a box between a and b (along a horizontal or vertical wire), half-width hw. Its terminals are a and b. */
function resistor(s: Sketch, a: P, b: P, o: { hw?: number; color?: string; w?: number } = {}) {
  const hw = o.hw ?? 10, u = unit(sub(b, a)), nv: P = [-u[1], u[0]];
  outline(s, [add(a, nv, hw), add(b, nv, hw), add(b, nv, -hw), add(a, nv, -hw)], { color: o.color, w: o.w ?? 1.8 });
}
/** A meter (G, V): a ring with its letter, terminals where the wire meets it. */
function meter(s: Sketch, c: P, r: number, letter: string, o: { color?: string; size?: number } = {}) {
  ring(s, c, r, { color: o.color, w: 2 });
  s.point(c[0], c[1], 0.1, '');
  s.text(c[0], c[1] + (o.size ?? 17) * 0.34, `<i>${letter}</i>`, { size: o.size ?? 17, color: o.color === C.mari ? C.amber : C.text });
}
/** The battery: long (+) plate at y, short (−) plate 12 px below, centred on x. */
function battery(s: Sketch, x: number, y: number) {
  path(s, [[x - 15, y], [x + 15, y]], { w: 3 });
  path(s, [[x - 8, y + 12], [x + 8, y + 12]], { w: 3 });
  return { plus: [x, y] as P, minus: [x, y + 12] as P };
}

/* ===================================================================== */
/* Figure 4.1 · right-hand grip rule (topic 01)                           */
/* ===================================================================== */
/**
 * A vertical wire with the current I up the page, and three field lines: circles
 * round the wire in one horizontal plane, seen from a little above (ellipses
 * with ry = rx sin 20°), at radii ρ, 2ρ and 3ρ, so B = μ₀I/(2πr) falls to a
 * half and a third. The book draws the circles flat in the page round a wire
 * that also lies in the page, which no field line can do: here they are drawn
 * as the text describes them (circling the wire). Each arrow's sense is
 * Ŷ × r̂ (current × the radial direction), projected; the back arcs pass
 * behind the wire and the front arcs in front of it. On the left the hand:
 * the thumb along I, the fingers curling the same way as the field.
 */
const G41 = { wx: 206, top: 22, bot: 330, cy: 196, el: 26, rho: 38, n: 3, tFront: [55, 125, 55], tBack: [300, 240, 300], iY0: 318, iY1: 264, hand: [46, 92] as P, hx: 25, thumb: [140, 40] };
const ry41 = (rx: number) => rx * Math.sin(G41.el * D2R);
/** A point of the field line of radius rx at parameter t (degrees; 90 is nearest the viewer). */
const ell41 = (c: P, rx: number, t: number): P => [c[0] + rx * Math.cos(t * D2R), c[1] + ry41(rx) * Math.sin(t * D2R)];
/** The field's sense at parameter t, on the drawing: Ŷ × r̂ in 3D (Y up the wire, Z toward the viewer), projected. */
function sense41(t: number): P {
  const Y: V3 = [0, 1, 0], r: V3 = [Math.cos(t * D2R), 0, Math.sin(t * D2R)];
  const b = cross3(Y, r);
  // on the drawing: x is X; y (down) is −Y cos e + Z sin e
  return unit([b[0], -b[1] * Math.cos(G41.el * D2R) + b[2] * Math.sin(G41.el * D2R)]);
}
/** The way the drawn ellipse runs as t falls (the arrows' direction). */
const run41 = (rx: number, t: number): P => unit([rx * Math.sin(t * D2R), -ry41(rx) * Math.cos(t * D2R)]);
const fig41: Diagram = {
  id: 'p12-04-fig-4.1',
  topic: 0,
  name: 'Right-hand grip rule',
  cases: [{ chip: 'Grip rule', cap: 'Right-hand grip rule: with the thumb along the current <i>I</i>, the fingers curl in the direction of the circular magnetic field lines around the wire.' }],
  draw() {
    const s = new Sketch(W, 344);
    const { wx, top, bot, cy, rho, n, tFront, tBack, iY0, iY1, hand, hx, thumb } = G41;
    const c: P = [wx, cy];
    const rs = Array.from({ length: n }, (_, k) => rho * (k + 1));
    // back arcs first (behind the wire, broken where it passes in front)
    rs.forEach((rx) => {
      const gap = (7 / rx) / D2R;
      path(s, ellPts(c, rx, ry41(rx), Math.PI, (270 - gap) * D2R, 60), { color: C.mari, w: 2 });
      path(s, ellPts(c, rx, ry41(rx), (270 + gap) * D2R, 2 * Math.PI, 60), { color: C.mari, w: 2 });
    });
    // the wire, broken where each front arc passes in front of it
    const cuts = rs.map((rx) => cy + ry41(rx)).sort((a, b) => a - b);
    let y0 = top;
    cuts.forEach((y) => { path(s, [[wx, y0], [wx, y - 5]], { w: 3 }); y0 = y + 5; });
    path(s, [[wx, y0], [wx, bot]], { w: 3 });
    // the front arcs
    rs.forEach((rx) => path(s, ellPts(c, rx, ry41(rx), 0, Math.PI, 90), { color: C.mari, w: 2 }));
    // the field's sense on each line, front and back
    rs.forEach((rx, k) => [tFront[k], tBack[k]].forEach((t) => head(s, add(ell41(c, rx, t), run41(rx, t), 4), run41(rx, t), C.mari)));
    // the current, up the wire
    arrow(s, [wx, iY0], [wx, iY1], { w: 3.2 });
    s.sym(wx + 14, (iY0 + iY1) / 2 + 6, '<i>I</i>', { size: 18, anchor: 'start' });
    const bt = ell41(c, rs[2], tFront[2]);
    s.sym(bt[0] + 14, bt[1] + 22, '<i>B⃗</i>', { size: 17, anchor: 'start', color: C.amber });
    // the hand: thumb along I, fingers curling round it
    const [hxc, hyc] = hand;
    const fry = hx * Math.sin(G41.el * D2R);
    path(s, ellPts(hand, hx, fry, Math.PI, (270 - 22) * D2R, 30), { w: 1.8 });
    path(s, ellPts(hand, hx, fry, (270 + 22) * D2R, 2 * Math.PI, 30), { w: 1.8 });
    path(s, ellPts(hand, hx, fry, 0, Math.PI * 0.42, 30), { w: 1.8 });
    path(s, ellPts(hand, hx, fry, Math.PI * 0.58, Math.PI, 30), { w: 1.8 });
    arrow(s, [hxc, thumb[0]], [hxc, thumb[1]], { w: 2.6 });
    const ft = 125, fp = ell41(hand, hx, ft), fu = run41(hx, ft);
    head(s, add(fp, fu, 4), fu, C.ink);
    s.place([
      { t: 'Thumb', p: [hxc, thumb[1] + 13], at: [[hxc + 14, thumb[1] - 8, 'start'], [hxc + 14, thumb[1] - 2, 'start']] },
      { t: 'Fingers curl', p: [hxc + hx, hyc], at: [[hxc + hx + 16, hyc + 8, 'start'], [hxc + hx + 16, hyc + 14, 'start']] },
      { t: 'Magnetic field line', hi: true, p: ell41(c, rs[2], 150), at: [[8, 282, 'start'], [8, 290, 'start'], [8, 274, 'start']] },
    ]);
    return s;
  },
  check() {
    const { wx, cy, rho, n, tFront, tBack, iY0, iY1, hand, thumb } = G41;
    const c: P = [wx, cy];
    const rs = Array.from({ length: n }, (_, k) => rho * (k + 1));
    const ok1 = rs.every((rx) => samples(0, 360, 36).every((t) => { const p = ell41(c, rx, t); return close(((p[0] - wx) / rx) ** 2 + ((p[1] - cy) / ry41(rx)) ** 2, 1, 1e-9); }));
    const arrowsOk = rs.every((rx, k) => [tFront[k], tBack[k]].every((t) => dotp(run41(rx, t), sense41(t)) > 0.999));
    const frontRight = dotp(sense41(90), [1, 0]) > 0.999;
    const Bs = rs.map((r) => (MU0 * 1) / (2 * Math.PI * r));
    const s = fig41.draw(fig41.cases[0]);
    return [
      [`Each field line is a circle round the wire in one horizontal plane, seen from ${G41.el}° above: ellipses about the wire with ry/rx = sin ${G41.el}° for all three`, ok1],
      ['The current runs up the wire (the arrow points up the page)', iY1 < iY0],
      ['Every arrow on a field line runs the way of Ŷ × r̂ (the current’s direction crossed with the outward radius), at the front and at the back', arrowsOk],
      ['So, seen from above, the field circles anticlockwise round a current coming up toward the eye: at the front of each circle it runs to the right, at the back to the left', frontRight && dotp(sense41(270), [-1, 0]) > 0.999],
      [`The lines sit at ρ, 2ρ and 3ρ, where B = μ₀I/(2πr) is ${Bs.map((b) => fmt(b / Bs[0], 3)).join(' : ')} of its value on the first`, close(Bs[1] / Bs[0], 0.5) && close(Bs[2] / Bs[0], 1 / 3)],
      ['The thumb points along I (up), and the fingers’ arrow runs the same way round as the field lines', thumb[1] < thumb[0] && dotp(run41(G41.hx, 125), sense41(125)) > 0.999 && hand[0] < wx - rs[2]],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* Figure 4.2 · field on the axis of a circular loop (topic 01)           */
/* ===================================================================== */
/**
 * The loop (radius R = 80 px) stands in the y–z plane, drawn foreshortened as
 * a narrow ellipse about O; P is on the axis at x = 150 px. The element at the
 * top carries I dl⃗ out of the page; r⃗ runs from it to P. dB⃗ is drawn along
 * dl⃗ × r⃗, which is perpendicular to r⃗: it leans at α = arctan(x/R) = 61.9°
 * from the axis, so cos α = R/r. (The book's drawing leans dB⃗ at about 31°,
 * the mirror image of r⃗ rather than perpendicular to it, against its own
 * caption: reported.)
 */
const G42 = { O: [72, 172] as P, R: 80, rz: 15, x: 150, dB: 96, axis: [8, 326] };
const g42 = () => {
  const { O, R, x, dB } = G42;
  const E: P = [O[0], O[1] - R], Pp: P = [O[0] + x, O[1]];
  const r = Math.hypot(x, R);
  // dl⃗ × r⃗ with dl⃗ out of the page, r⃗ from E to P
  const b = cross3(OUT, page(sub(Pp, E)));
  const u: P = unit([b[0], -b[1]]);
  const tip = add(Pp, u, dB);
  const ax: P = [tip[0], Pp[1]], tr: P = [Pp[0], tip[1]];
  return { E, Pp, r, u, tip, ax, tr };
};
/** The on-axis field of the loop, summed element by element (Biot–Savart), in the page frame with the loop in the y–z plane. */
function loopField(R: number, x: number, I = 1, N = 720): V3 {
  let B: V3 = [0, 0, 0];
  for (let k = 0; k < N; k++) {
    const ph = ((k + 0.5) * 2 * Math.PI) / N;
    const pos: V3 = [0, R * Math.cos(ph), R * Math.sin(ph)];
    const dl: V3 = [0, -R * Math.sin(ph) * ((2 * Math.PI) / N), R * Math.cos(ph) * ((2 * Math.PI) / N)];
    const rv: V3 = [x - pos[0], -pos[1], -pos[2]], rr = norm3(rv);
    const d = cross3(dl, rv).map((v) => (MU0 * I * v) / (4 * Math.PI * rr ** 3)) as V3;
    B = [B[0] + d[0], B[1] + d[1], B[2] + d[2]];
  }
  return B;
}
const fig42: Diagram = {
  id: 'p12-04-fig-4.2',
  topic: 0,
  name: 'Field on a loop’s axis',
  cases: [{ chip: 'Loop and axial point', cap: 'Field on the axis of a circular loop of radius <i>R</i> (loop in the <i>y</i>–<i>z</i> plane, centre <i>O</i>, axial point <i>P</i> at distance <i>x</i>). The element <i>I</i> d<i>l⃗</i> at the top of the loop (pointing out of the page), at distance <i>r</i> = √(<i>x</i><sup>2</sup> + <i>R</i><sup>2</sup>) from <i>P</i>, gives d<i>B⃗</i> perpendicular to <i>r⃗</i>. Its axial component d<i>B</i> cos <i>α</i> adds up round the loop; the transverse component d<i>B</i> sin <i>α</i> cancels in pairs.' }],
  draw() {
    const s = new Sketch(W, 300);
    const { O, R, rz, axis } = G42, g = g42();
    // the axis
    path(s, [[axis[0], O[1]], [axis[1] - 10, O[1]]], { color: C.slate, w: 1.2 });
    head(s, [axis[1], O[1]], [1, 0], C.slate);
    s.sym(axis[1] - 4, O[1] - 12, '<i>x</i>-axis', { size: 14, anchor: 'end', color: C.slate });
    // the loop, foreshortened, in the y–z plane
    path(s, ellPts(O, rz, R, -Math.PI / 2 + 0.16, 1.5 * Math.PI - 0.16, 160), { w: 2 });
    s.dot(O[0], O[1], 3);
    // the element at the top, out of the page
    outMark(s, g.E, 8);
    // r⃗ from the element to P
    arrow(s, add(g.E, unit(sub(g.Pp, g.E)), 9), g.Pp, { w: 1.6 });
    // dB⃗ and its parts
    guide(s, g.tip, g.ax);
    guide(s, g.tip, g.tr);
    arrow(s, g.Pp, g.tr, { w: 1.8, color: C.slate });
    arrow(s, g.Pp, g.ax, { w: 2.6, color: C.mari });
    arrow(s, g.Pp, g.tip, { w: 2.2 });
    const al = Math.atan2(-g.u[1], g.u[0]) / D2R;
    path(s, arcPts(g.Pp, 20, 0, al, 24), { w: 1.2 });
    s.dot(g.Pp[0], g.Pp[1], 3.2);
    // labels
    s.sym(g.E[0] - 14, g.E[1] - 16, '<i>I</i> d<i>l⃗</i> (out of page, ⊥ <i>r⃗</i>)', { size: 14, anchor: 'start' });
    const m = add(g.E, sub(g.Pp, g.E), 0.5), nrm = unit([-(g.Pp[1] - g.E[1]), g.Pp[0] - g.E[0]]);
    s.sym(m[0] - nrm[0] * 16, m[1] - nrm[1] * 16 + 4, '<i>r⃗</i>', { size: 17 });
    s.sym(g.tip[0] + 6, g.tip[1] - 4, 'd<i>B⃗</i>', { size: 16, anchor: 'start' });
    // left of the shaft, below its head and the dashed line that starts there
    s.sym(g.tr[0] - 13, g.tr[1] + 14, 'd<i>B</i> sin <i>α</i>', { size: 14, anchor: 'end', color: C.slate });
    s.sym(g.ax[0] + 4, O[1] + 22, 'd<i>B</i> cos <i>α</i>', { size: 14, color: C.amber });
    const am = polar(g.Pp, 30, al / 2);
    s.sym(am[0] + 2, am[1] + 5, '<i>α</i>', { size: 14 });
    s.sym(O[0] - G42.rz - 6, O[1] + 20, '<i>O</i>', { size: 16, anchor: 'end' });
    s.sym(g.Pp[0] - 12, O[1] + 20, '<i>P</i>', { size: 16 });
    // x from O to P
    measure(s, [O[0] + 2, O[1] + 44], [g.Pp[0], O[1] + 44]);
    s.sym((O[0] + g.Pp[0]) / 2, O[1] + 64, '<i>x</i>', { size: 16 });
    s.sym(W - 10, 280, '<i>r</i> = √(<i>x</i><sup>2</sup> + <i>R</i><sup>2</sup>)', { size: 15, anchor: 'end' });
    s.place([{ t: 'Loop in y–z plane', p: [O[0], O[1] + R], at: [[10, O[1] + R + 14, 'start'], [6, O[1] + R + 10, 'start']] }]);
    return s;
  },
  check() {
    const { R, x } = G42, g = g42();
    const rv = page(sub(g.Pp, g.E)), dB = page(g.u);
    const alpha = Math.atan2(-g.u[1], g.u[0]);
    const B = loopField(R, x);
    const Bf = (MU0 * R * R) / (2 * (x * x + R * R) ** 1.5);
    const bottom = cross3(IN, [x, R, 0]);
    // Example 1 (p. 263): N = 250, R = 8.0 cm, I = 3.0 A at the centre
    const Bc = (250 * MU0 * 3.0) / (2 * 0.08);
    return [
      [`r = √(x² + R²): from the element to P is ${fmt(len(g.E, g.Pp), 2)} px = √(${x}² + ${R}²)`, close(len(g.E, g.Pp), Math.hypot(x, R), 1e-9)],
      ['dl⃗ (out of the page) is perpendicular to r⃗ (in the page), so sin θ = 1', close(dot3(OUT, rv), 0)],
      ['dB⃗ is drawn along dl⃗ × r⃗ and is perpendicular to r⃗', close(dot3(dB, rv), 0, 1e-9) && sameWay(dB, cross3(OUT, rv))],
      [`Its axial part dB cos α runs out along the axis, away from the loop, and cos α = R/r: the drawn α is ${fmt(alpha / D2R, 1)}°, cos α = ${fmt(Math.cos(alpha), 4)} = ${R}/${fmt(g.r, 2)}`, close(Math.cos(alpha), R / g.r, 1e-9) && g.ax[0] > g.Pp[0]],
      ['The diametrically opposite element (bottom, dl⃗ into the page) gives the same axial part and the opposite transverse part: the transverse parts cancel in pairs', close(bottom[0], R) && close(bottom[1], -x)],
      [`Summed element by element round the loop, B at P is along the axis (transverse ${sci(Math.abs(B[1]) + Math.abs(B[2]) + 1e-30, 1)}) and equals μ₀IR²/(2(x² + R²)^(3/2)) within ${fmt(Math.abs(B[0] / Bf - 1) * 100, 4)}%`, rel(B[0], Bf, 1e-4) && Math.abs(B[1]) + Math.abs(B[2]) < 1e-6 * B[0]],
      [`At the centre (x = 0) it becomes μ₀I/(2R); Example 1 (250 turns, R = 8.0 cm, 3.0 A): B = ${fmt(Bc * 1e3, 1)} mT (the book's 5.9 mT)`, rel(loopField(R, 0)[0], MU0 / (2 * R), 1e-4) && fmt(Bc * 1e3, 1) === '5.9'],
      ...layout(fig42.draw(fig42.cases[0])),
    ];
  },
};

/* ===================================================================== */
/* Figure 4.3 · finite straight wire (topic 01)                           */
/* ===================================================================== */
/**
 * The wire runs from End 1 (left) to End 2 (right), current I to the right;
 * P is a = 90 px below the foot F of the perpendicular. θ₁ is the angle at P
 * from the perpendicular to the line to End 2, θ₂ to End 1 (the book's sides).
 */
const G43 = { y: 74, x1: 40, x2: 304, xf: 164, a: 92, iA: 62, iB: 122 };
const g43 = () => {
  const { y, x1, x2, xf, a } = G43;
  const P0: P = [xf, y + a], F: P = [xf, y], E1: P = [x1, y], E2: P = [x2, y];
  const th1 = Math.atan((x2 - xf) / a), th2 = Math.atan((xf - x1) / a);
  return { P0, F, E1, E2, th1, th2 };
};
/** B at P from the wire between the drawn ends, integrated element by element (per μ₀I/4π). */
function wireField(xa: number, xb: number, a: number, N = 4000) {
  let b = 0;
  const h = (xb - xa) / N;
  for (let k = 0; k < N; k++) { const s0 = xa + (k + 0.5) * h; b += (a * h) / (s0 * s0 + a * a) ** 1.5; }
  return b;
}
const fig43: Diagram = {
  id: 'p12-04-fig-4.3',
  topic: 0,
  name: 'Finite straight wire',
  cases: [{ chip: 'Wire and point P', cap: 'Straight wire carrying current <i>I</i>: the field at a point <i>P</i> at perpendicular distance <i>a</i> is found by integrating along the wire, between the angles <i>θ</i><sub>1</sub> and <i>θ</i><sub>2</sub> that the lines from <i>P</i> to the two ends of the wire make with the perpendicular.' }],
  draw() {
    const s = new Sketch(W, 282);
    const { y, iA, iB } = G43, g = g43();
    path(s, [g.E1, g.E2], { w: 3.4 });
    arrow(s, [iA, y], [iB, y], { w: 3.2, color: C.ink });
    path(s, [g.P0, g.E1], { w: 1.6 });
    path(s, [g.P0, g.E2], { w: 1.6 });
    guide(s, g.F, g.P0);
    // θ₂ (toward End 1, left) and θ₁ (toward End 2, right), from the perpendicular (up from P)
    path(s, arcPts(g.P0, 26, 90 + g.th2 / D2R, 90, 30), { color: C.mari, w: 2.4 });
    path(s, arcPts(g.P0, 30, 90, 90 - g.th1 / D2R, 30), { color: C.mari, w: 2.4 });
    s.dot(g.P0[0], g.P0[1], 3.4);
    s.dot(g.E1[0], g.E1[1], 3.4);
    s.dot(g.E2[0], g.E2[1], 3.4);
    s.sym((iA + iB) / 2, y - 14, '<i>I</i>', { size: 18 });
    s.sym(g.P0[0] + 12, g.P0[1] + 18, '<i>P</i>', { size: 17, anchor: 'start' });
    // high on the perpendicular, clear of θ₁ beside its arc
    s.sym(g.F[0] + 8, y + 28, '<i>a</i>', { size: 16, anchor: 'start', color: C.slate });
    const t2 = polar(g.P0, 48, 90 + g.th2 / D2R / 2), t1 = polar(g.P0, 52, 90 - g.th1 / D2R / 2);
    s.sym(t2[0] - 4, t2[1] + 4, '<i>θ</i><sub>2</sub>', { size: 16, color: C.amber });
    s.sym(t1[0] + 6, t1[1] + 4, '<i>θ</i><sub>1</sub>', { size: 16, color: C.amber });
    resultBlock(s, ['Infinite wire: <i>θ</i><sub>1</sub> = <i>θ</i><sub>2</sub> = 90°', '⇒ <i>B</i> = μ<sub>0</sub><i>I</i>/(2π<i>a</i>)'], { size: 15 });
    s.place([
      { t: 'End 1', p: g.E1, at: [[g.E1[0] - 10, y - 40, 'start'], [6, y - 40, 'start']] },
      { t: 'End 2', p: g.E2, at: [[g.E2[0] + 10, y - 40, 'end'], [W - 6, y - 40, 'end']] },
    ]);
    return s;
  },
  check() {
    const { a, x1, x2, xf } = G43, g = g43();
    const num = wireField(x1 - xf, x2 - xf, a), form = (Math.sin(g.th1) + Math.sin(g.th2)) / a;
    const inf = wireField(-1e6, 1e6, a, 400000);
    const ang = (q: P) => Math.acos(dotp(unit(sub(q, g.P0)), [0, -1]));
    return [
      [`PF is the perpendicular from P to the wire, a = ${a} px`, close(g.F[0], g.P0[0]) && close(g.P0[1] - g.F[1], a)],
      [`θ₁ (to End 2) = ${fmt(g.th1 / D2R, 1)}° and θ₂ (to End 1) = ${fmt(g.th2 / D2R, 1)}°, read back from the drawn lines and measured from the perpendicular`, close(ang(g.E2), g.th1, 1e-9) && close(ang(g.E1), g.th2, 1e-9)],
      [`Integrating μ₀I dl sin φ/(4πr²) along the drawn wire gives (μ₀I/4πa)(sin θ₁ + sin θ₂) within ${fmt(Math.abs(num / form - 1) * 100, 4)}%`, rel(num, form, 1e-5)],
      [`For a very long wire both angles → 90° and the integral → 2/a: μ₀I/(2πa) (within ${fmt(Math.abs((inf * a) / 2 - 1) * 100, 3)}%)`, rel(inf * a, 2, 1e-4)],
      ...layout(fig43.draw(fig43.cases[0])),
    ];
  },
};

/* ===================================================================== */
/* Figure 4.4 · Amperian loop with three currents (topic 02)              */
/* ===================================================================== */
/**
 * A wavy closed loop, traversed anticlockwise (so its + direction is out of the
 * page). I₁ (out) and I₂ (in) are inside it, I₃ (out) outside. The check
 * integrates B⃗ · dl⃗ round the drawn loop for the three drawn wires and finds
 * μ₀(I₁ − I₂), whatever I₃ is.
 */
const G44 = { c: [134, 156] as P, R0: 90, I1: [114, 116] as P, I2: [140, 172] as P, I3: [298, 146] as P, rh: [306, 40] as P, rr: 16, arrows: [0.3, 1.25, 2.3, 3.4, 4.6, 5.6] };
const loop44 = (n = 360): P[] => samples(0, 2 * Math.PI, n).map((ph) => {
  const r = G44.R0 * (1 + 0.13 * Math.cos(3 * ph + 0.5) + 0.05 * Math.sin(2 * ph));
  return [G44.c[0] + r * Math.cos(ph), G44.c[1] - r * Math.sin(ph)];
});
/** How many times the closed polyline winds anticlockwise round q (on the drawing, y down). */
const winding = (pts: P[], q: P) => {
  let a = 0;
  for (let i = 1; i < pts.length; i++) {
    const u = page(sub(pts[i - 1], q)), v = page(sub(pts[i], q));
    a += Math.atan2(u[0] * v[1] - u[1] * v[0], u[0] * v[0] + u[1] * v[1]);
  }
  return Math.round(a / (2 * Math.PI));
};
/** ∮ B⃗ · dl⃗ round a drawn closed polyline for long straight wires (position, current out of the page), per μ₀. */
function ampere(pts: P[], wires: [P, number][]) {
  let sum = 0;
  for (let i = 1; i < pts.length; i++) {
    const m = add(pts[i - 1], sub(pts[i], pts[i - 1]), 0.5), dl = page(sub(pts[i], pts[i - 1]));
    for (const [w, I] of wires) {
      const rv = page(sub(m, w)), r2 = rv[0] ** 2 + rv[1] ** 2;
      // B = μ₀I/(2πr) along ẑ × r̂
      sum += (I / (2 * Math.PI * r2)) * (-rv[1] * dl[0] + rv[0] * dl[1]);
    }
  }
  return sum;
}
const fig44: Diagram = {
  id: 'p12-04-fig-4.4',
  topic: 1,
  name: 'Amperian loop, three currents',
  cases: [{ chip: 'Enclosed current', cap: 'Amperian loop with three currents: <i>I</i><sub>1</sub> (out of the page) counts as +, <i>I</i><sub>2</sub> (into the page) counts as −, and <i>I</i><sub>3</sub> passes outside the loop, so it does not contribute to the enclosed current. Right-hand rule: curl the fingers along the direction of traversal and the thumb points in the + direction.' }],
  draw() {
    const s = new Sketch(W, 336);
    const { I1, I2, I3, rh, rr, arrows } = G44;
    const pts = loop44();
    path(s, pts, { color: C.mari, w: 2.6 });
    arrows.forEach((ph) => {
      const i = Math.round((ph / (2 * Math.PI)) * 360), p = pts[i], u = unit(sub(pts[i + 1], pts[i - 1]));
      head(s, add(p, u, 5), u, C.mari, 10, 5);
    });
    outMark(s, I1, 9);
    inMark(s, I2, 9);
    outMark(s, I3, 9, C.slate);
    s.sym(I1[0], I1[1] + 28, '<i>I</i><sub>1</sub> (out, +)', { size: 15 });
    s.sym(I2[0], I2[1] + 28, '<i>I</i><sub>2</sub> (in, −)', { size: 15 });
    s.sym(W - 6, I3[1] + 32, '<i>I</i><sub>3</sub> (outside)', { size: 15, anchor: 'end', color: C.slate });
    // the right-hand rule: fingers round anticlockwise, thumb out of the page
    outMark(s, rh, 6);
    const arc = arcPts(rh, rr, -60, 230, 60);
    path(s, arc.slice(0, -2), { w: 1.8 });
    head(s, arc[arc.length - 1], unit(sub(arc[arc.length - 1], arc[arc.length - 4])), C.ink);
    resultBlock(s, ['Only <i>I</i><sub>1</sub> and <i>I</i><sub>2</sub> contribute to <i>I</i><sub>enc</sub>;', '<i>I</i><sub>3</sub> contributes nothing.'], { size: 15 });
    s.place([
      // dots on the loop and on the curl between their arrowheads, not on one
      { t: 'Amperian loop', hi: true, p: pts[100], at: [[6, 6, 'start'], [6, 10, 'start']] },
      { t: 'Right-hand rule', p: polar(rh, rr, 140), at: [[rh[0] - rr - 26, rh[1] - 30, 'end'], [rh[0] - rr - 26, rh[1] - 24, 'end'], [rh[0] - rr - 26, 4, 'end']] },
    ]);
    return s;
  },
  check() {
    const { I1, I2, I3, rh, rr } = G44;
    const pts = loop44(2000);
    let area = 0;
    for (let i = 1; i < pts.length; i++) { const u = page(sub(pts[i - 1], G44.c)), v = page(sub(pts[i], G44.c)); area += (u[0] * v[1] - u[1] * v[0]) / 2; }
    const cur = { I1: 3, I2: 1.2, I3: 5 };
    const wires: [P, number][] = [[I1, cur.I1], [I2, -cur.I2], [I3, cur.I3]];
    const circ = ampere(pts, wires), circ3 = ampere(pts, [[I3, cur.I3]]);
    const rhArc = arcPts(rh, rr, -60, 230, 60);
    const rhSense = winding([...rhArc, rhArc[0]], rh);
    return [
      [`The loop is traversed anticlockwise (signed area ${fmt(area, 0)} px² > 0), so by the right-hand rule its + direction is out of the page`, area > 0],
      [`It winds once round I₁ and I₂ (winding numbers ${winding(pts, I1)}, ${winding(pts, I2)}) and not round I₃ (${winding(pts, I3)})`, winding(pts, I1) === 1 && winding(pts, I2) === 1 && winding(pts, I3) === 0],
      ['The right-hand-rule mark curls anticlockwise round a current out of the page: fingers along the traversal, thumb along +', rhSense === 1],
      [`Integrating B⃗ · dl⃗ round the drawn loop for I₁ = ${cur.I1} A out, I₂ = ${cur.I2} A in and I₃ = ${cur.I3} A out gives μ₀ × ${fmt(circ, 4)} A = μ₀(I₁ − I₂)`, close(circ, cur.I1 - cur.I2, 1e-3)],
      [`I₃ alone adds μ₀ × ${fmt(Math.abs(circ3), 5)} A: it bends B⃗ along the loop but its contributions cancel round it`, Math.abs(circ3) < 1e-3],
      ...layout(fig44.draw(fig44.cases[0])),
    ];
  },
};

/* ===================================================================== */
/* Figure 4.5 · Amperian rectangle in a long solenoid (topic 02)          */
/* ===================================================================== */
/**
 * The solenoid's cross-section: ten turns, out of the page along the top row
 * and into it along the bottom. abcd: ab inside (between the rows), cd above
 * the top row (outside), bc and da crossing the windings between two turns.
 * The checks rebuild the field from the two rows of wires (extended far beyond
 * the drawing, as a long solenoid) and integrate round the drawn rectangle.
 */
const G45 = { x0: 14, x1: 326, yTop: 112, yBot: 268, rowT: 128, rowB: 252, n: 10, p: 31, first: 30.5, xa: 77, xb: 232, yab: 150, ycd: 58, rows: [210, 230], r: 8 };
const turns45 = () => Array.from({ length: G45.n }, (_, k) => G45.first + k * G45.p);
const fig45: Diagram = {
  id: 'p12-04-fig-4.5',
  topic: 1,
  name: 'Ampère’s law in a solenoid',
  cases: [{ chip: 'Amperian rectangle', cap: 'Amperian rectangle <i>abcd</i> for a long solenoid: side <i>ab</i> (length <i>L</i>) lies inside, parallel to the axis; side <i>cd</i> lies outside, where <i>B</i> ≈ 0; sides <i>bc</i> and <i>da</i> cross the windings. Current flows out of the page in the top row of turns and into the page in the bottom row.' }],
  draw() {
    const s = new Sketch(W, 332);
    const { x0, x1, yTop, yBot, rowT, rowB, r, xa, xb, yab, ycd, rows } = G45;
    box(s, [x0, yTop, x1, yBot], { color: C.slate, w: 1.4, dash: 'dash' });
    turns45().forEach((x) => { outMark(s, [x, rowT], r); inMark(s, [x, rowB], r); });
    // the rectangle a → b → c → d → a
    const a: P = [xa, yab], b: P = [xb, yab], c: P = [xb, ycd], d: P = [xa, ycd];
    path(s, [a, b, c, d, a], { color: C.mari, w: 2.6 });
    head(s, [(xa + xb) / 2 + 6, yab], [1, 0], C.mari, 10, 5);
    head(s, [xb, (yab + ycd) / 2 - 18], [0, -1], C.mari, 10, 5);
    head(s, [(xa + xb) / 2 - 6, ycd], [-1, 0], C.mari, 10, 5);
    head(s, [xa, (yab + ycd) / 2 - 6], [0, 1], C.mari, 10, 5);
    [a, b, c, d].forEach((q) => s.dot(q[0], q[1], 3.2));
    s.sym(xa - 10, yab + 6, '<i>a</i>', { size: 16, anchor: 'end' });
    s.sym(xb + 10, yab + 6, '<i>b</i>', { size: 16, anchor: 'start' });
    s.sym(xb + 10, ycd - 2, '<i>c</i>', { size: 16, anchor: 'start' });
    s.sym(xa - 10, ycd - 2, '<i>d</i>', { size: 16, anchor: 'end' });
    s.sym((xa + xb) / 2, yab + 22, '<i>ab</i> (length <i>L</i>)', { size: 14, color: C.amber });
    s.sym((xa + xb) / 2, ycd - 14, '<i>cd</i> (outside, <i>B⃗</i> = 0)', { size: 14, color: C.amber });
    s.sym(xa - 10, 92, '<i>da</i>', { size: 14, anchor: 'end', color: C.amber });
    s.sym(xb + 10, 92, '<i>bc</i>', { size: 14, anchor: 'start', color: C.amber });
    s.sym(316, 192, '<i>B⃗</i> uniform inside', { size: 14, anchor: 'end' });
    // the field inside: equal arrows to the right, on a grid, where they leave the labels clear
    const field: [P, P][] = [];
    rows.forEach((y) => samples(26, 286, 6).forEach((x) => {
      const a0: P = [x, y], a1: P = [x + 22, y];
      if (!samples(0, 1, 8).some((k) => crowded(s, add(a0, sub(a1, a0), k), 6))) field.push([a0, a1]);
    }));
    field.forEach(([p, q]) => arrow(s, p, q, { w: 1.5 }));
    // the key under the drawing
    const ky = 298;
    outMark(s, [20, ky - 5], 6);
    s.sym(32, ky, 'current out of the page (top),', { size: 13, anchor: 'start', color: C.slate });
    inMark(s, [20, ky + 17], 6);
    s.sym(32, ky + 22, 'into the page (bottom)', { size: 13, anchor: 'start', color: C.slate });
    FIELD45.set(s, field);
    s.place([{ t: 'Solenoid', p: [x1 - 30, yTop], at: [[W - 6, 78, 'end'], [W - 6, 74, 'end'], [W - 6, 82, 'end']] }]);
    return s;
  },
  check() {
    const { rowT, rowB, p, xa, xb, yab, ycd } = G45;
    const tx = turns45();
    const enclosed = tx.filter((x) => x > xa && x < xb).length;
    // the long solenoid: the drawn rows continued 300 turns each way
    const longX = Array.from({ length: 601 }, (_, k) => tx[0] + (k - 300) * p);
    const wires: [P, number][] = [...longX.map((x): [P, number] => [[x, rowT], 1]), ...longX.map((x): [P, number] => [[x, rowB], -1])];
    const Bat = (q: P): P => {
      let bx = 0, by = 0;
      for (const [w, I] of wires) { const rv = page(sub(q, w)), r2 = rv[0] ** 2 + rv[1] ** 2; bx += (I * -rv[1]) / (2 * Math.PI * r2); by += (I * rv[0]) / (2 * Math.PI * r2); }
      return [bx, by];
    };
    const rect: P[] = [];
    const seg = (a: P, b: P) => samples(0, 1, 400).forEach((k, i) => { if (i || !rect.length) rect.push(add(a, sub(b, a), k)); });
    seg([xa, yab], [xb, yab]); seg([xb, yab], [xb, ycd]); seg([xb, ycd], [xa, ycd]); seg([xa, ycd], [xa, yab]);
    const circ = ampere(rect, wires.filter(([w]) => Math.abs(w[0] - (xa + xb) / 2) < 2000));
    const Bin = Bat([(xa + xb) / 2, (rowT + rowB) / 2]), Bab = Bat([(xa + xb) / 2, yab]), Bout = Bat([(xa + xb) / 2, ycd]);
    const nI = 1 / p;
    const s = fig45.draw(fig45.cases[0]), field = FIELD45.get(s) ?? [];
    // Example 1 (p. 274): 1500 turns on 0.50 m, 4.0 A
    const Bex = MU0 * (1500 / 0.5) * 4.0;
    return [
      ['ab lies inside, between the two rows; cd lies above the top row, outside; bc and da cross the top row', yab > rowT && yab < rowB && ycd < rowT],
      [`bc and da pass between turns, not through one (closest ${fmt(Math.min(...tx.map((x) => Math.min(Math.abs(x - xa), Math.abs(x - xb)))), 1)} px from a turn's centre)`, tx.every((x) => Math.abs(x - xa) > G45.r + 4 && Math.abs(x - xb) > G45.r + 4)],
      [`The rectangle runs a → b → c → d: anticlockwise, so its + direction is out of the page, and it encloses ${enclosed} turns of the top row, all out of the page: I_enc = +${enclosed}I`, xb > xa && ycd < yab && enclosed === 5],
      [`Rebuilt from the two rows of wires, B inside runs along +x (to the right, as drawn) at ${fmt(Bin[0] / nI, 4)} μ₀nI, the same at ab (${fmt(Bab[0] / nI, 4)} μ₀nI), and outside at cd it is ${fmt(Math.abs(Bout[0]) / nI, 4)} μ₀nI ≈ 0`, rel(Bin[0], nI, 0.01) && rel(Bab[0], nI, 0.01) && Math.abs(Bout[0]) < 0.01 * nI && Math.abs(Bin[1]) < 0.01 * nI],
      [`∮ B⃗ · dl⃗ round the drawn rectangle is μ₀ × ${fmt(circ, 4)}I = μ₀(nL)I with nL = ${enclosed}: BL = μ₀nLI, so B = μ₀nI`, close(circ, enclosed, 1e-3) && close(((xb - xa) / p), enclosed, 1e-9)],
      [`The field arrows inside are equal and all point to the right (${field.length} of them)`, field.length >= 8 && field.every(([a, b]) => close(len(a, b), 22) && b[0] > a[0] && close(a[1], b[1]))],
      [`Example 1: n = 1500/0.50 = 3000 m⁻¹, I = 4.0 A: B = μ₀nI = ${sci(Bex, 2)} T (the book's 1.5 × 10⁻² T)`, fmt(Bex * 100, 1) === '1.5'],
      ...layout(s),
    ];
  },
};
const FIELD45 = new WeakMap<Sketch, [P, P][]>();

/* ===================================================================== */
/* Figure 4.6 · toroid with three Amperian loops (topic 02)               */
/* ===================================================================== */
/**
 * The toroid seen from above: an annulus (inner radius 58 px, outer 108 px)
 * wound with 24 turns, drawn as spokes across it. Loop 1 (r₁) lies in the
 * hole, loop 2 (r) through the windings, loop 3 (r₃) outside. For the check,
 * each turn is a wire up through the hole (at the inner wall) and back down
 * outside (at the outer wall).
 */
/** `ra`: r is drawn at 30°, between two spokes, its head 19° short of loop 2's arrowhead at 49° (at 40° the two heads met). */
const G46 = { c: [170, 148] as P, rin: 66, rout: 108, r1: 30, r: 87, r3: 130, N: 24, ra: 30 };
const fig46: Diagram = {
  id: 'p12-04-fig-4.6',
  topic: 1,
  name: 'Toroid and Amperian loops',
  cases: [{ chip: 'Three loops', cap: 'Toroid with three circular Amperian loops: loop 1 in the central hole (radius <i>r</i><sub>1</sub>), loop 2 through the windings (radius <i>r</i>) and loop 3 outside the toroid (radius <i>r</i><sub>3</sub>). Only loop 2 encloses a net current (<i>NI</i>), so <i>B</i> = 0 on loops 1 and 3.' }],
  draw() {
    const s = new Sketch(W, 400);
    const { c, rin, rout, r1, r, r3, N } = G46;
    ring(s, c, rin, { w: 2.2 });
    ring(s, c, rout, { w: 2.2 });
    for (let k = 0; k < N; k++) {
      const a = (360 * k) / N + 7.5;
      path(s, [polar(c, rin, a), polar(c, rout, a)], { color: C.slate, w: 1.2 });
    }
    path(s, arcPts(c, r1, 0, 360, 120), { color: C.slate, w: 1.6, dash: 'dash' });
    path(s, arcPts(c, r3, 0, 360, 240), { color: C.slate, w: 1.6, dash: 'dash' });
    path(s, arcPts(c, r, 0, 360, 200), { color: C.mari, w: 2.4, dash: 'dash' });
    [45, 135, 225, 315].forEach((a) => head(s, polar(c, r, a + 4), unit(sub(polar(c, r, a + 5), polar(c, r, a + 3))), C.mari, 10, 5));
    s.sym(c[0], c[1] + 21, '<i>r</i><sub>1</sub>', { size: 15, color: C.slate });
    // the hole, named inside itself (between loop 1 and the inner wall)
    s.tag(c[0], c[1] + 35, 'Hole', null, null, { anchor: 'middle' });
    // r, from the centre out to loop 2
    arrow(s, polar(c, 4, G46.ra), polar(c, r - 1, G46.ra), { color: C.amber, w: 1.3 });
    s.sym(...add(polar(c, 50, G46.ra), [-12, -4]), '<i>r</i>', { size: 16, color: C.amber });
    s.sym(...add(polar(c, r3, -24), [16, 10]), '<i>r</i><sub>3</sub>', { size: 15, anchor: 'start', color: C.slate });
    // the key: the three loops and their fields
    const ky = [306, 334, 360];
    const keyDash = (y: number, col: string, w: number) => path(s, [[12, y - 5], [34, y - 5]], { color: col, w, dash: 'dash' });
    keyDash(ky[0], C.slate, 1.6);
    s.sym(42, ky[0], 'loop 1 (radius <i>r</i><sub>1</sub>, in the hole): <i>B</i> = 0', { size: 14, anchor: 'start' });
    keyDash(ky[1], C.mari, 2.4);
    s.sym(42, ky[1], 'loop 2 (radius <i>r</i>, through the windings):', { size: 14, anchor: 'start' });
    keyDash(ky[2] + 18, C.slate, 1.6);
    s.sym(42, ky[2] + 18, 'loop 3 (radius <i>r</i><sub>3</sub>, outside the toroid): <i>B</i> = 0', { size: 14, anchor: 'start' });
    s.sym(64, ky[2] - 4, '<i>B</i> = μ<sub>0</sub><i>NI</i>/(2π<i>r</i>)', { size: 14, anchor: 'start', color: C.amber });
    s.place([
      // on a spoke between loop 2 and the outer wall, named outside loop 3 (at the lower left its dashes ran behind the tag)
      { t: 'Windings', p: polar(c, (r + rout) / 2, 157.5), at: [[6, 6, 'start'], [6, 10, 'start'], [6, 2, 'start']] },
    ]);
    return s;
  },
  check() {
    const { c, rin, rout, r1, r, r3, N } = G46;
    const I = 1;
    const wires: [P, number][] = [];
    for (let k = 0; k < N; k++) { const a = (360 * k) / N + 7.5; wires.push([polar(c, rin, a), I], [polar(c, rout, a), -I]); }
    const loop = (R: number) => arcPts(c, R, 0, 360, 4000);
    const [c1, c2, c3] = [r1, r, r3].map((R) => ampere(loop(R), wires));
    // B along loop 2 at a few points, against μ₀NI/(2πr)
    const Bt = (a: number) => {
      const q = polar(c, r, a), t: V3 = [-Math.sin(a * D2R), Math.cos(a * D2R), 0];
      let b = 0;
      for (const [w, i] of wires) { const rv = page(sub(q, w)), r2 = rv[0] ** 2 + rv[1] ** 2; b += (i / (2 * Math.PI * r2)) * (-rv[1] * t[0] + rv[0] * t[1]); }
      return b;
    };
    const Bform = (N * I) / (2 * Math.PI * r);
    const Bs = [0, 30, 97, 200].map(Bt);
    // Practice 3 (p. 278): 3000 turns, mean radius 15 cm, 6.0 A
    const Bp = (MU0 * 3000 * 6.0) / (2 * Math.PI * 0.15);
    return [
      [`Loop 1 (r₁ = ${r1}) is inside the hole, loop 2 (r = ${r}) between the walls (${rin} and ${rout}), loop 3 (r₃ = ${r3}) outside`, r1 < rin && r > rin && r < rout && r3 > rout],
      [`∮ B⃗ · dl⃗ = μ₀ × ${fmt(c1, 4)}I on loop 1: no turn passes through it, I_enc = 0, B₁ = 0`, Math.abs(c1) < 1e-6],
      [`On loop 2 it is μ₀ × ${fmt(c2, 3)}I = μ₀NI (N = ${N}): every turn passes through it once`, close(c2, N, 1e-3)],
      [`On loop 3 it is μ₀ × ${fmt(c3, 4)}I: each turn passes through going in and coming out, I_enc = 0, B₃ = 0`, Math.abs(c3) < 1e-6],
      [`B along loop 2 is ${Bs.map((b) => fmt(b / Bform, 3)).join(', ')} × μ₀NI/(2πr) at four places: B(2πr) = μ₀NI`, Bs.every((b) => rel(b, Bform, 0.01))],
      [`Practice 3: 3000 turns, r = 15 cm, 6.0 A: B = ${sci(Bp, 1)} T (the book's 2.4 × 10⁻² T)`, fmt(Bp * 100, 1) === '2.4'],
      ...layout(fig46.draw(fig46.cases[0])),
    ];
  },
};

/* ===================================================================== */
/* Figure 4.7 · cylinder with an off-axis cavity (topic 02)               */
/* ===================================================================== */
/**
 * The cylinder (R = 128 px) about O, the cavity (ρ = 50 px) about O′ = O + d⃗
 * with d⃗ = 72 px to the right, P inside the cavity. The current density J⃗
 * (out of the page) is shown by ⊙ marks on a regular grid over the metal,
 * none in the cavity. The check sums the field of the drilled cross-section
 * cell by cell at three points of the cavity and finds the same B⃗ =
 * (μ₀/2) J⃗ × d⃗ at each: up the page, μ₀Jd/2.
 */
const G47 = { O: [150, 160] as P, R: 130, d: 72, rho: 54, Pd: [20, -24] as P, grid: 34 };
const g47 = () => {
  const { O, d, Pd } = G47;
  const O2: P = [O[0] + d, O[1]], Pp = add(O2, Pd);
  return { O2, Pp };
};
const fig47: Diagram = {
  id: 'p12-04-fig-4.7',
  topic: 1,
  name: 'Cavity in a current-carrying cylinder',
  cases: [{ chip: 'Off-axis cavity', cap: 'Long cylinder of radius <i>R</i> carrying current density <i>J⃗</i> (out of the page) with an off-axis cylindrical cavity. <i>O</i> and <i>O′</i> are the axes of the cylinder and of the cavity, the vector <i>d⃗</i> points from <i>O</i> to <i>O′</i>, and <i>P</i> is a point in the cavity with position vectors <i>r⃗</i><sub>1</sub> from <i>O</i> and <i>r⃗</i><sub>2</sub> from <i>O′</i>.' }],
  draw() {
    const s = new Sketch(W, 400);
    const { O, R, rho, grid } = G47, g = g47();
    ring(s, O, R, { w: 2.2 });
    path(s, arcPts(g.O2, rho, 0, 360, 120), { w: 1.8, dash: 'dash' });
    arrow(s, O, add(g.O2, [-6, 0]), { color: C.mari, w: 2.8 });
    arrow(s, O, add(g.Pp, unit(sub(O, g.Pp)), 5), { w: 1.8 });
    arrow(s, g.O2, add(g.Pp, unit(sub(g.O2, g.Pp)), 5), { w: 1.8 });
    s.dot(O[0], O[1], 3.4);
    s.dot(g.O2[0], g.O2[1], 3.4);
    s.dot(g.Pp[0], g.Pp[1], 3.4);
    s.sym(O[0] - 8, O[1] + 22, '<i>O</i>', { size: 16, anchor: 'end' });
    s.sym(g.O2[0] + 4, g.O2[1] + 22, '<i>O′</i>', { size: 16, color: C.amber });
    s.sym(g.O2[0] - 26, O[1] + 22, '<i>d⃗</i>', { size: 17, color: C.amber });
    s.sym(g.Pp[0] + 9, g.Pp[1] + 4, '<i>P</i>', { size: 16, anchor: 'start' });
    s.sym(O[0], O[1] - 20, '<i>r⃗</i><sub>1</sub>', { size: 16 });
    s.sym(g.Pp[0] + 4, g.Pp[1] + 32, '<i>r⃗</i><sub>2</sub>', { size: 16, anchor: 'start' });
    s.sym(O[0] - 38, O[1] - 64, 'current density <i>J⃗</i>', { size: 14 });
    s.sym(O[0] - 38, O[1] - 46, '(out of the page)', { size: 14 });
    s.sym(W / 2, 312, '<i>r⃗</i><sub>1</sub> − <i>r⃗</i><sub>2</sub> = <i>d⃗</i> (constant)', { size: 15 });
    resultBlock(s, ['<i>B⃗</i> = (μ<sub>0</sub>/2) <i>J⃗</i> × <i>d⃗</i>', '(uniform inside the cavity)'], { size: 15 });
    s.place([{ t: 'Cavity', p: polar(g.O2, rho, -60), at: [[W - 6, 230, 'end'], [W - 6, 236, 'end'], [W - 6, 222, 'end']] }]);
    // the current density: ⊙ on a regular grid over the metal, clear of the cavity and the labels
    const marks: P[] = [];
    for (let y = O[1] - R + grid / 2; y < O[1] + R; y += grid) for (let x = O[0] - R + grid / 2; x < O[0] + R; x += grid) {
      const q: P = [x, y];
      if (len(q, O) > R - 12 || len(q, g.O2) < rho + 10) continue;
      if (crowded(s, q, 10)) continue;
      marks.push(q);
    }
    marks.forEach((q) => outMark(s, q, 5, C.slate));
    MARKS47.set(s, marks);
    return s;
  },
  check() {
    const { O, R, d, rho } = G47, g = g47();
    const r1v = sub(g.Pp, O), r2v = sub(g.Pp, g.O2);
    // the drilled cross-section, cell by cell, J out of the page (per μ₀J)
    const h = 2;
    const cells: P[] = [];
    for (let y = O[1] - R + h / 2; y < O[1] + R; y += h) for (let x = O[0] - R + h / 2; x < O[0] + R; x += h) if (len([x, y], O) <= R && len([x, y], g.O2) > rho) cells.push([x, y]);
    const Bat = (q: P): P => {
      let bx = 0, by = 0;
      for (const w of cells) { const rv = page(sub(q, w)), r2 = rv[0] ** 2 + rv[1] ** 2; bx += (h * h * -rv[1]) / (2 * Math.PI * r2); by += (h * h * rv[0]) / (2 * Math.PI * r2); }
      return [bx, by];
    };
    const pts: P[] = [g.Pp, g.O2, add(g.O2, [-28, 24])];
    const Bs = pts.map(Bat);
    const want = cross3(OUT, page([d, 0])).map((v) => v / 2) as V3;
    const s = fig47.draw(fig47.cases[0]), marks = MARKS47.get(s) ?? [];
    return [
      [`d⃗ runs from O to O′, ${d} px to the right; r⃗₁ − r⃗₂ = (${fmt(r1v[0] - r2v[0], 3)}, ${fmt(r1v[1] - r2v[1], 3)}) = d⃗ wherever P is`, close(r1v[0] - r2v[0], d) && close(r1v[1] - r2v[1], 0)],
      ['P lies inside the cavity, and the cavity inside the cylinder', len(g.Pp, g.O2) < rho && d + rho < R],
      [`The ⊙ marks (${marks.length}, on a regular grid) all lie in the metal, none in the cavity`, marks.length > 15 && marks.every((q) => len(q, O) < R && len(q, g.O2) > rho)],
      [`Summing the drilled cross-section cell by cell, B⃗ at P, at O′ and at a third cavity point is (${Bs.map((b) => fmt(b[1] / want[1], 4)).join(', ')}) × μ₀Jd/2 along +y: the same everywhere in the cavity`, Bs.every((b) => Math.abs(b[0]) < 0.01 * want[1] && rel(b[1], want[1], 0.01))],
      ['Its direction is J⃗ × d⃗ (out of the page × to the right = up the page), its size μ₀Jd/2', sameWay(cross3(OUT, page([d, 0])), [0, 1, 0])],
      ...layout(s),
    ];
  },
};
const MARKS47 = new WeakMap<Sketch, P[]>();


/* ===================================================================== */
/* Figure 4.8 · circular motion in a uniform field (topic 03)             */
/* ===================================================================== */
/**
 * B⃗ into the page (⊗ on a grid wherever it leaves the drawing clear). The
 * charge (q > 0) is at the right of its circle moving up; F⃗ = qv⃗ × B⃗ is
 * computed and points at the centre, so the orbit runs anticlockwise.
 */
const G48 = { O: [150, 180] as P, r: 112, v: 56, F: 70, grid: 40 };
const fig48: Diagram = {
  id: 'p12-04-fig-4.8',
  topic: 2,
  name: 'Charge circling in a field',
  cases: [{ chip: 'Circular path', cap: 'Charge <i>q</i> moving perpendicular to a uniform field <i>B⃗</i> (into the page): the force <i>F⃗</i> = <i>qv⃗</i> × <i>B⃗</i> is always directed towards the centre, so the path is a circle of radius <i>r</i> = <i>mv</i>/(<i>qB</i>). At each point the velocity is tangential and the force is radial.' }],
  draw() {
    const s = new Sketch(W, 376);
    const { O, r, v, F } = G48;
    const Q: P = [O[0] + r, O[1]];
    path(s, arcPts(O, r, 0, 360, 200), { w: 1.8, dash: 'dash' });
    guide(s, O, [Q[0] - F - 2, O[1]]);
    const fv = cross3(page([0, -1]), IN), fu: P = unit([fv[0], -fv[1]]);
    arrow(s, Q, [Q[0], Q[1] - v], { w: 2.4 });
    arrow(s, Q, add(Q, fu, F), { color: C.mari, w: 2.8 });
    s.dot(Q[0], Q[1], 3.6);
    s.dot(O[0], O[1], 3.4);
    s.sym(W / 2, 26, '<i>B⃗</i> into page', { size: 16 });
    s.sym(Q[0] + 10, Q[1] - v + 12, '<i>v⃗</i>', { size: 17, anchor: 'start' });
    s.sym(Q[0] - 62, O[1] - 18, '<i>F⃗</i> = <i>qv⃗</i> × <i>B⃗</i>', { size: 15, color: C.amber });
    s.sym(O[0] - 10, O[1] + 6, '<i>O</i>', { size: 16, anchor: 'end' });
    s.sym(Q[0] - 54, O[1] + 26, '<i>r</i> = <i>mv</i>/(<i>qB</i>)', { size: 14 });
    resultBlock(s, ['<i>T</i> = 2π<i>r</i>/<i>v</i> = 2π<i>m</i>/(<i>qB</i>)', '(independent of <i>v</i>)'], { size: 15 });
    s.place([{ t: 'Centre', p: O, at: [[O[0] - 28, O[1] + 38, 'middle'], [O[0] - 40, O[1] + 40, 'middle']] }]);
    const marks: P[] = [];
    for (let y = 58; y < 304; y += G48.grid) for (let x = 22; x < W - 10; x += G48.grid) if (!crowded(s, [x, y], 10) && !(Math.abs(y - O[1]) < 14 && x > O[0] && x < O[0] + r)) marks.push([x, y]);
    marks.forEach((q) => inMark(s, q, 5, C.slate));
    return s;
  },
  check() {
    const { O, r } = G48;
    const Q: P = [O[0] + r, O[1]];
    const v = page([0, -1]), F = cross3(v, IN);
    const toCentre = page(sub(O, Q));
    // Example 3 (p. 291): E = 3.0 × 10⁴ V/m, B = 0.20 T, then B′ = 0.50 T, m = 3.3 × 10⁻²⁶ kg, q = 1.6 × 10⁻¹⁹ C
    const vs = 3.0e4 / 0.2, rr = (3.3e-26 * vs) / (1.6e-19 * 0.5);
    const T = (vv: number) => (2 * Math.PI * ((9.1e-31 * vv) / (1.6e-19 * 0.5))) / vv;
    const re = (9.1e-31 * 2e6) / (1.6e-19 * 0.5);
    return [
      ['For q > 0, F⃗ = qv⃗ × B⃗ with v⃗ up the page and B⃗ into it points from the charge straight at the centre', sameWay(F, toCentre)],
      ['F⃗ is perpendicular to v⃗: it does no work and only bends the path', close(dot3(F, v), 0)],
      ['So the charge goes round anticlockwise: r⃗ × v⃗ at the drawn point is out of the page', cross3(page(sub(Q, O)), v)[2] > 0],
      [`Example 3: v = E/B = ${sci(vs, 1)} m/s, then r = mv/(qB′) = ${fmt(rr * 100, 1)} cm (the book's 6.2 cm)`, fmt(rr * 100, 1) === '6.2'],
      [`T = 2πr/v = 2πm/(qB) does not depend on v: for an electron in 0.50 T, ${sci(T(2e6), 1)} s at 2 × 10⁶ m/s and ${sci(T(4e6), 1)} s at twice that (Practice 2: 7.1 × 10⁻¹¹ s, r = ${fmt(re * 1e6, 0)} μm)`, rel(T(2e6), T(4e6), 1e-12) && fmt(T(2e6) * 1e11, 1) === '7.1' && fmt(re * 1e6, 0) === '23'],
      ...layout(fig48.draw(fig48.cases[0])),
    ];
  },
};

/* ===================================================================== */
/* Figure 4.9 · the cyclotron (topic 03)                                  */
/* ===================================================================== */
/**
 * Two dees (radius 128 px) with a 14 px gap, B⃗ out of the page. The path is
 * built from the physics: each crossing of the gap adds the same energy qV,
 * so after k crossings K ∝ k and the radius r = √(2mK)/(qB) ∝ √k; every
 * semicircle takes the same time πm/(qB). A positive charge in B⃗ out of the
 * page turns clockwise.
 */
const G49 = { K: [170, 204] as P, R: 128, g: 14, r1: 24, n: 7, src: [170, 378] as P, rs: 15, tapX: 64 };
type Arc49 = { c: P; r: number; right: boolean; a: P; b: P };
function path49(): { arcs: Arc49[]; start: P; gaps: [P, P][] } {
  const { K, g, r1, n } = G49;
  const xl = K[0] - g / 2, xr = K[0] + g / 2;
  const arcs: Arc49[] = [];
  let y = 0;
  for (let k = 1; k <= n; k++) {
    const r = r1 * Math.sqrt(k), right = k % 2 === 1;
    // right dee: enter at the top moving right, turn clockwise (down); left dee: enter at the bottom moving left, turn up
    const cy = right ? y + r : y - r, x = right ? xr : xl;
    arcs.push({ c: [x, cy], r, right, a: [x, y], b: [x, right ? y + 2 * r : y - 2 * r] });
    y = right ? y + 2 * r : y - 2 * r;
  }
  const ys = arcs.flatMap((a) => [a.c[1] - a.r, a.c[1] + a.r]);
  const shift = K[1] - (Math.min(...ys) + Math.max(...ys)) / 2;
  arcs.forEach((a) => { a.c = [a.c[0], a.c[1] + shift]; a.a = [a.a[0], a.a[1] + shift]; a.b = [a.b[0], a.b[1] + shift]; });
  const start: P = [K[0], arcs[0].a[1]];
  const gaps: [P, P][] = arcs.slice(0, -1).map((a, i) => [a.b, arcs[i + 1].a]);
  return { arcs, start, gaps };
}
/** Points of a semicircle of the path, in the order the charge runs along it. */
const arcRun = (a: Arc49, n = 60): P[] => (a.right ? samples(90, -90, n) : samples(270, 90, n)).map((d) => polar(a.c, a.r, d));
const fig49: Diagram = {
  id: 'p12-04-fig-4.9',
  topic: 2,
  name: 'The cyclotron',
  cases: [{ chip: 'Dees and spiral', cap: 'Cyclotron: a charged particle moves in semicircles inside two D-shaped dees placed in a uniform magnetic field (out of the page). The alternating voltage across the gap accelerates it each time it crosses, so the radius of its path grows with every half-turn.' }],
  draw() {
    const s = new Sketch(W, 432);
    const { K, R, g, src, rs, tapX } = G49;
    const xl = K[0] - g / 2;
    const a0 = Math.acos((xl - K[0]) / R) / D2R;
    outline(s, [...arcPts(K, R, a0, 360 - a0, 120)], { w: 2.2 });
    outline(s, [...arcPts(K, R, -(180 - a0), 180 - a0, 120)], { w: 2.2 });
    const p = path49();
    path(s, [p.start, p.arcs[0].a], { color: C.mari, w: 2.2 });
    p.arcs.forEach((a) => path(s, arcRun(a), { color: C.mari, w: 2.2 }));
    p.gaps.forEach(([a, b]) => path(s, [a, b], { color: C.mari, w: 2.2 }));
    p.arcs.forEach((a) => { const m = polar(a.c, a.r, a.right ? 0 : 180); head(s, add(m, [0, a.right ? 5 : -5]), [0, a.right ? 1 : -1], C.mari, 9, 4.5); });
    s.dot(p.start[0], p.start[1], 3.6);
    // the AC source, wired to the two dees
    const yb = (x: number) => K[1] + Math.sqrt(R * R - (x - K[0]) ** 2);
    ring(s, src, rs, { w: 2 });
    path(s, samples(-1, 1, 24).map((t): P => [src[0] + t * 9, src[1] - 5 * Math.sin(t * Math.PI)]), { w: 1.8, free: true });
    wire(s, [[K[0] - tapX, yb(K[0] - tapX)], [K[0] - tapX, src[1]], [src[0] - rs, src[1]]]);
    wire(s, [[K[0] + tapX, yb(K[0] + tapX)], [K[0] + tapX, src[1]], [src[0] + rs, src[1]]]);
    s.sym(10, 20, '<i>B⃗</i> out of the page', { size: 15, anchor: 'start' });
    s.sym(W - 8, src[1] + 32, '<i>f</i> = <i>qB</i>/(2π<i>m</i>)', { size: 15, anchor: 'end', color: C.slate });
    s.tag(K[0] - 56, K[1] + 64, 'Dee 1', null, null, { anchor: 'middle' });
    s.tag(K[0] + 56, K[1] + 64, 'Dee 2', null, null, { anchor: 'middle' });
    s.place([
      { t: 'Gap: field reverses every half-turn', p: [K[0], K[1] - R + 6], at: [[W - 6, 30, 'end'], [W - 6, 32, 'end']] },
      { t: 'Start', p: p.start, at: [[K[0] + 12, 100, 'start'], [K[0] + 12, 104, 'start']] },
      { t: 'Particle path', hi: true, p: polar(p.arcs[5].c, p.arcs[5].r, 140), at: [[8, 60, 'start'], [8, 62, 'start']] },
      { t: 'AC source', p: [src[0], src[1] + rs], at: [[8, src[1] + 24, 'start'], [8, src[1] + 28, 'start']] },
    ]);
    // ⊙ field marks on a 34 px grid; a mark that would touch a line or label
    // slides up to 6 px along its row or column rather than leaving a hole
    const nudges: P[] = [[0, 0], ...[3, 6].flatMap((d): P[] => [[0, -d], [0, d], [-d, 0], [d, 0]])];
    for (let y = 70; y < 352; y += 34) for (let x = 18; x < W - 8; x += 34) {
      const q = nudges.map((o) => add([x, y], o)).find((c) => c[0] > 8 && c[0] < W - 8 && !crowded(s, c, 9));
      if (q) outMark(s, q, 4, C.slate);
    }
    return s;
  },
  check() {
    const { K, R, g, src, rs, tapX } = G49;
    const p = path49();
    const rk = p.arcs.map((a) => a.r);
    const s = fig49.draw(fig49.cases[0]);
    const yb = (x: number) => K[1] + Math.sqrt(R * R - (x - K[0]) ** 2);
    const net = nodes(s, { dee1: [K[0] - tapX, yb(K[0] - tapX)], dee2: [K[0] + tapX, yb(K[0] + tapX)], srcL: [src[0] - rs, src[1]], srcR: [src[0] + rs, src[1]] });
    // the force at the top of the first semicircle: v to the right, B out of the page
    const F = cross3([1, 0, 0], OUT), toC = page(sub(p.arcs[0].c, p.arcs[0].a));
    const inside = p.arcs.every((a) => arcRun(a).every((q) => len(q, K) < R - 6 && (a.right ? q[0] >= K[0] + g / 2 - 1e-9 : q[0] <= K[0] - g / 2 + 1e-9)));
    const joined = p.gaps.every(([a, b], i) => close(a[1], b[1]) && close(len(a, b), g) && (i % 2 === 0 ? b[0] < a[0] : b[0] > a[0]));
    // with m, q, B = 1: time on each semicircle = πr/v with v = qBr/m
    const times = rk.map((r) => (Math.PI * r) / r);
    // Example C.2 (p. 322): a proton in 1.0 T
    const f0 = (1.6e-19 * 1.0) / (2 * Math.PI * 1.67e-27);
    return [
      [`The radii grow as √k with each equal kick qV (K ∝ k, r = √(2mK)/(qB)): r²/r₁² = ${rk.map((r) => fmt((r / rk[0]) ** 2, 2)).join(', ')}`, rk.every((r, i) => close((r / rk[0]) ** 2, i + 1, 1e-9))],
      ['Each semicircle ends where the next begins, straight across the gap, alternately right to left and left to right: the gap field must reverse every half-turn', joined && close(p.start[1], p.arcs[0].a[1])],
      ['For a positive charge, qv⃗ × B⃗ at the top of the first semicircle (v⃗ to the right, B⃗ out of the page) points down, at its centre: the path turns clockwise, as drawn', sameWay(F, toC)],
      [`Every semicircle takes the same time πm/(qB) (here ${times.map((t) => fmt(t, 3)).join(', ')} in units of m/(qB)): one fixed frequency f = qB/(2πm) keeps in step`, times.every((t) => close(t, Math.PI, 1e-12))],
      [`The whole path stays inside the dees (outermost radius ${fmt(rk[rk.length - 1], 1)} px of ${R}), each semicircle in its own dee`, inside],
      [`Read off the wires: ${showNodes(net)}: one terminal of the source on each dee`, sameNodes(net, [['dee1', 'srcL'], ['dee2', 'srcR']])],
      [`Example C.2: a proton in 1.0 T: f = qB/(2πm) = ${sci(f0, 2)} Hz ≈ 15 MHz (the book's 1.5 × 10⁷ Hz)`, fmt(f0 / 1e6, 0) === '15'],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* Figure 4.10 · torque on a rectangular loop, edge-on (topic 03)         */
/* ===================================================================== */
/**
 * B⃗ to the right. The loop is seen edge-on: a line of length b, its normal n̂
 * at θ = 35° above B⃗. Its upper side of length a carries I out of the page
 * (⊙), its lower side into the page (⊗); F₁ and F₂ are I L⃗ × B⃗, and their
 * lines of action are b sin θ apart.
 */
const G410 = { O: [170, 196] as P, b: 150, th: 35, F: 52, n: 74, rows: [108, 152, 196, 240, 284], ym: 330, mk: 10 };
const g410 = () => {
  const { O, b, th } = G410;
  const t = th * D2R;
  const e: P = [-Math.sin(t), -Math.cos(t)]; // along the loop, toward its upper end (drawing, y down)
  const U = add(O, e, b / 2), L = add(O, e, -b / 2);
  const nu: P = [Math.cos(t), -Math.sin(t)];
  return { U, L, e, nu };
};
const fig410: Diagram = {
  id: 'p12-04-fig-4.10',
  topic: 2,
  name: 'Torque on a current loop',
  cases: [{ chip: 'Loop edge-on', cap: 'Rectangular loop (sides <i>a</i> and <i>b</i>) carrying current <i>I</i> in a uniform field <i>B⃗</i>, seen edge-on. The forces <i>F</i><sub>1</sub> and <i>F</i><sub>2</sub> on the two sides of length <i>a</i> are equal and opposite and form a couple. The normal <i>n̂</i> makes angle <i>θ</i> with <i>B⃗</i>, so the moment arm is <i>b</i> sin <i>θ</i> and <i>τ</i> = <i>BIA</i> sin <i>θ</i>.' }],
  draw() {
    const s = new Sketch(W, 424);
    const { O, F, n, rows, ym, mk, th } = G410, g = g410();
    rows.forEach((y) => { arrow(s, [10, y], [62, y], { w: 1.6 }); arrow(s, [W - 62, y], [W - 10, y], { w: 1.6 }); });
    path(s, [add(g.U, g.e, -mk), add(g.L, g.e, mk)], { w: 4 });
    path(s, [O, [O[0] + 82, O[1]]], { color: C.slate, w: 1.1, dash: 'dash' });
    path(s, arcPts(O, 34, 0, th, 24), { w: 1.2 });
    arrow(s, O, add(O, g.nu, n), { w: 2.2 });
    outMark(s, g.U, mk);
    inMark(s, g.L, mk);
    const f1a: P = [g.U[0], g.U[1] - mk - 2], f2a: P = [g.L[0], g.L[1] + mk + 2];
    arrow(s, f1a, [f1a[0], f1a[1] - F], { color: C.mari, w: 2.8 });
    arrow(s, f2a, [f2a[0], f2a[1] + F], { color: C.mari, w: 2.8 });
    guide(s, [g.U[0], g.U[1] + mk + 3], [g.U[0], ym + 6]);
    guide(s, [g.L[0], f2a[1] + F + 4], [g.L[0], ym + 6]);
    measure(s, [g.U[0], ym], [g.L[0], ym]);
    s.sym(10, 28, '<i>B⃗</i> (uniform, horizontal)', { size: 14, anchor: 'start' });
    s.sym(f1a[0], f1a[1] - F - 10, '<i>F</i><sub>1</sub> = <i>BIa</i>', { size: 15, color: C.amber });
    s.sym(f2a[0] - 10, f2a[1] + F - 6, '<i>F</i><sub>2</sub> = <i>BIa</i>', { size: 15, anchor: 'end', color: C.amber });
    const nt = add(O, g.nu, n);
    s.sym(nt[0] + 6, nt[1] - 6, '<i>n̂</i>', { size: 17, anchor: 'start' });
    const tl = polar(O, 48, th / 2);
    s.sym(tl[0] + 2, tl[1] + 6, '<i>θ</i>', { size: 15 });
    s.sym((g.U[0] + g.L[0]) / 2, ym + 22, 'moment arm <i>b</i> sin <i>θ</i>', { size: 14, color: C.slate });
    resultBlock(s, ['<i>τ</i> = <i>F</i>(<i>b</i> sin <i>θ</i>) = <i>BIab</i> sin <i>θ</i>', '= <i>BIA</i> sin <i>θ</i>'], { size: 15 });
    s.place([{ t: 'Loop (edge-on)', p: add(O, g.e, 40), at: [[8, 162, 'start'], [8, 166, 'start']] }]);
    return s;
  },
  check() {
    const { O, b, th } = G410, g = g410();
    const B: V3 = [1, 0, 0], a = 1, I = 1;
    const F1 = cross3(OUT.map((v) => v * I * a) as V3, B), F2 = cross3(IN.map((v) => v * I * a) as V3, B);
    const nrm = page(g.nu), loopDir = page(sub(g.L, g.U));
    // the right-hand normal of the circulation: out of the page at the upper side, then along the loop to the lower side
    const rh = cross3(OUT, loopDir);
    const angle = Math.acos(dot3(nrm, B)) / D2R;
    const arm = Math.abs(g.U[0] - g.L[0]);
    const tq = cross3(page(sub(g.U, O)), F1)[2] + cross3(page(sub(g.L, O)), F2)[2];
    // Example 1 (p. 289): 40 turns, R = 6.0 cm, 2.5 A, 0.30 T, normal at 60°
    const tEx = 40 * 2.5 * Math.PI * 0.06 ** 2 * 0.3 * Math.sin(60 * D2R);
    return [
      ['F₁ = I L⃗ × B⃗ on the ⊙ side (L⃗ out of the page, B⃗ to the right) points up the page; F₂ on the ⊗ side points down: equal and opposite, no net force', sameWay(F1, [0, 1, 0]) && sameWay(F2, [0, -1, 0]) && close(F1[1] + F2[1], 0)],
      ['n̂ is perpendicular to the loop and is the right-hand normal of the current (out at the top, in at the bottom)', close(dot3(nrm, loopDir), 0, 1e-9) && sameWay(nrm, rh)],
      [`The drawn n̂ makes θ = ${fmt(angle, 2)}° with B⃗`, close(angle, th, 1e-9)],
      [`The two forces' lines of action are ${fmt(arm, 2)} px apart = b sin θ = ${b} × sin ${th}°`, close(arm, b * Math.sin(th * D2R), 1e-9)],
      [`Their torque about the centre is ${fmt(Math.abs(tq), 2)} (px units) = (BIa)(b sin θ), clockwise: it turns n̂ toward B⃗`, close(Math.abs(tq), a * b * Math.sin(th * D2R), 1e-9) && tq < 0],
      [`Example 1: τ = NIAB sin θ = ${fmt(tEx, 2)} N m (the book's 0.29 N m)`, fmt(tEx, 2) === '0.29'],
      ...layout(fig410.draw(fig410.cases[0])),
    ];
  },
};

/* ===================================================================== */
/* Figure 4.11 · the moving-coil galvanometer (topic 03)                  */
/* ===================================================================== */
/**
 * Concave pole pieces N and S, faces on a circle of 68 px about the core's
 * axis; the soft-iron core (32 px) in the middle; the field in the gap drawn
 * along radii (N face → core → S face). The coil's sides (⊙ left, ⊗ right)
 * sit on a 50 px circle; the pointer rises over a scale and the hairspring
 * hangs below.
 */
const G411 = { K: [170, 200] as P, rc: 32, rf: 68, ro: 110, half: 42, rco: 50, fa: [14, 30], ra: [38, 64], scale: 142, ticks: 9, tickStep: 6, spring: [170, 338] as P };
const fig411: Diagram = {
  id: 'p12-04-fig-4.11',
  topic: 2,
  name: 'Moving-coil galvanometer',
  cases: [{ chip: 'Radial field', cap: 'Moving-coil galvanometer: the coil sits between concave pole pieces (N, S) and a soft-iron core, so the field is radial and the plane of the coil is always parallel to <i>B⃗</i>. The hairspring supplies the restoring torque and the pointer moves over a scale.' }],
  draw() {
    const s = new Sketch(W, 470);
    const { K, rc, rf, ro, half, rco, fa, ra, scale, ticks, tickStep, spring } = G411;
    // pole pieces: concave face, outer arc
    outline(s, [...arcPts(K, rf, 180 - half, 180 + half, 40), ...arcPts(K, ro, 180 + half, 180 - half, 40)], { w: 2.2 });
    outline(s, [...arcPts(K, rf, -half, half, 40), ...arcPts(K, ro, half, -half, 40)], { w: 2.2 });
    ring(s, K, rc, { w: 2.2 });
    // the coil's path round the core, and its two sides
    path(s, arcPts(K, rco, 0, 360, 160), { color: C.mari, w: 1.4, dash: 'dot', free: true });
    // the radial field: N face → core on the left, core → S face on the right
    fa.forEach((d) => [d, -d].forEach((a) => {
      arrow(s, polar(K, ra[1], 180 + a), polar(K, ra[0], 180 + a), { w: 1.5 });
      arrow(s, polar(K, ra[0], a), polar(K, ra[1], a), { w: 1.5 });
    }));
    outMark(s, polar(K, rco, 180), 8, C.mari);
    inMark(s, polar(K, rco, 0), 8, C.mari);
    // pointer and scale
    arrow(s, [K[0], K[1] - rc], [K[0], K[1] - scale + 10], { w: 2.4 });
    path(s, arcPts(K, scale, 90 - 28, 90 + 28, 40), { color: C.slate, w: 1.6 });
    for (let k = -(ticks - 1) / 2; k <= (ticks - 1) / 2; k++) path(s, [polar(K, scale, 90 + k * tickStep), polar(K, scale + (k ? 7 : 10), 90 + k * tickStep)], { color: C.slate, w: 1.4 });
    // the hairspring: an Archimedean spiral
    path(s, samples(0, 5 * Math.PI, 160).map((t): P => [spring[0] + (3 + 1.1 * t) * Math.cos(t), spring[1] + (3 + 1.1 * t) * Math.sin(t)]), { w: 1.8 });
    s.sym(K[0] - (rf + ro) / 2, K[1] + 7, 'N', { size: 20 });
    s.sym(K[0] + (rf + ro) / 2, K[1] + 7, 'S', { size: 20 });
    s.sym(spring[0] + 26, spring[1] + 5, 'restoring torque <i>kφ</i>', { size: 14, anchor: 'start', color: C.slate });
    resultBlock(s, ['Radial field: the coil’s plane', 'stays parallel to <i>B⃗</i>,', '<i>NIAB</i> = <i>kφ</i> ⇒ <i>φ</i> = (<i>NAB</i>/<i>k</i>)<i>I</i>'], { size: 14 });
    s.place([
      // the dot just off the ⊙'s rim, not on it
      { t: 'Coil sides (end-on)', hi: true, p: polar(polar(K, rco, 180), 13, -90), at: [[6, 296, 'start'], [6, 300, 'start']], own: polar(K, rco, 180) },
      { t: 'Soft-iron core', p: polar(K, rc, -60), at: [[W - 6, 296, 'end'], [W - 6, 300, 'end']] },
      { t: 'Pointer', p: [K[0], K[1] - 90], at: [[K[0] + 14, K[1] - 106, 'start'], [K[0] + 14, K[1] - 100, 'start']] },
      { t: 'Scale', p: polar(K, scale, 90 + 28), at: [[K[0] - 70, 26, 'end'], [K[0] - 70, 20, 'end']] },
      { t: 'Hairspring', p: [spring[0] - 18, spring[1]], at: [[spring[0] - 30, spring[1] - 11, 'end'], [spring[0] - 30, spring[1] - 6, 'end']] },
    ]);
    return s;
  },
  check() {
    const { K, rc, rf, rco, fa, ra } = G411;
    const radial = fa.every((d) => [180 + d, 180 - d, d, -d].every((a) => Math.abs(crossp(sub(polar(K, ra[0], a), K), sub(polar(K, ra[1], a), K))) < 1e-9));
    // coil turned through φ: its sides at φ and φ + 180°, the field at each along the radius (N side in, S side out: +x across the gap in both)
    const torqueAt = (phi: number) => {
      const sides: [number, V3][] = [[180 + phi, OUT], [phi, IN]];
      let tz = 0;
      for (const [a, L] of sides) {
        const rv = page(sub(polar(K, rco, a), K)), rhat = rv.map((v) => v / norm3(rv)) as V3;
        // the field points from N to S across the gap: inward on the N (left) half, outward on the S (right) half
        const Bv = (Math.cos(a * D2R) < 0 ? rhat.map((v) => -v) : rhat) as V3;
        tz += cross3(rv, cross3(L, Bv))[2];
      }
      return tz;
    };
    const t0 = torqueAt(0), ts = [-25, 15, 30].map(torqueAt);
    const leftF = cross3(OUT, [1, 0, 0]), rightF = cross3(IN, [1, 0, 0]);
    const bLeft = page(sub(K, polar(K, rco, 180)));
    return [
      ['Every field arrow lies along a radius through the core’s axis: the field in the gap is radial', radial],
      [`The core (${rc} px) sits inside the coil’s circle (${rco} px), which sits inside the pole faces (${rf} px)`, rc < rco && rco < rf],
      ['The coil’s sides are opposite ends of a diameter; the radial field at each lies along that diameter, in the coil’s plane: θ = 90° between the coil’s normal and B⃗', close(len(polar(K, rco, 0), polar(K, rco, 180)), 2 * rco) && sameWay(bLeft, [1, 0, 0])],
      ['I L⃗ × B⃗ pushes the ⊙ side up and the ⊗ side down: a couple', sameWay(leftF, [0, 1, 0]) && sameWay(rightF, [0, -1, 0])],
      [`Turned through −25°, 15° and 30° the couple stays ${ts.map((t) => fmt(t / t0, 6)).join(', ')} × its value at 0°: τ = NIAB at every angle`, ts.every((t) => close(t / t0, 1, 1e-9))],
      ['Balanced by the spring, NIAB = kφ: doubling I doubles φ (a linear scale)', close((2 * 1) / 1, 2)],
      ...layout(fig411.draw(fig411.cases[0])),
    ];
  },
};

/* ===================================================================== */
/* Figure 4.12 · square loop beside a long wire (topic 03)                */
/* ===================================================================== */
/**
 * The wire carries I₁ up the page; the square (side a = 110 px) sits d = 70 px
 * from it, its current clockwise (up on the near side, as I₁). The wire's B⃗ is
 * into the page on the loop's side (⊗). The two force arrows are drawn to
 * scale: F_far/F_near = d/(d + a).
 */
const G412 = { xw: 40, y0: 40, y1: 270, d: 70, a: 110, top: 110, Fn: 56, ym: 250 };
const fig412: Diagram = {
  id: 'p12-04-fig-4.12',
  topic: 2,
  name: 'Square loop beside a wire',
  cases: [{ chip: 'Net force', cap: 'Square loop of side <i>a</i> in the plane of a long straight wire carrying <i>I</i><sub>1</sub>. The loop current <i>I</i><sub>2</sub> flows in the same sense as <i>I</i><sub>1</sub> on the near side (distance <i>d</i>), which is attracted to the wire; the far side (distance <i>d</i> + <i>a</i>) is repelled more weakly. The forces on the horizontal sides cancel.' }],
  draw() {
    const s = new Sketch(W, 404);
    const { xw, y0, y1, d, a, top, Fn, ym } = G412;
    const xl = xw + d, xr = xl + a, bot = top + a, my = (top + bot) / 2;
    path(s, [[xw, y0], [xw, y1]], { w: 3.4 });
    arrow(s, [xw, 216], [xw, 156], { w: 3, color: C.ink });
    box(s, [xl, top, xr, bot], { w: 2.4 });
    head(s, [xl, my - 26], [0, -1]);
    head(s, [(xl + xr) / 2 + 6, top], [1, 0]);
    head(s, [xr, my + 30], [0, 1]);
    head(s, [(xl + xr) / 2 - 6, bot], [-1, 0]);
    const Ff = (Fn * d) / (d + a);
    arrow(s, [xl - 4, my], [xl - 4 - Fn, my], { color: C.mari, w: 2.8 });
    arrow(s, [xr + 4, my], [xr + 4 + Ff, my], { color: C.mari, w: 2.8 });
    guide(s, [xl, bot + 4], [xl, ym + 8]);
    guide(s, [xr, bot + 4], [xr, ym + 8]);
    measure(s, [xw + 2, ym], [xl - 2, ym]);
    measure(s, [xl + 2, ym], [xr - 2, ym]);
    s.sym(xw - 10, 192, '<i>I</i><sub>1</sub>', { size: 17, anchor: 'end' });
    s.sym((xl + xr) / 2, my + 6, '<i>I</i><sub>2</sub>', { size: 16 });
    s.sym(xl - 4 - Fn / 2, my - 14, '<i>F</i><sub>near</sub>', { size: 15, color: C.amber });
    s.sym(xr + 8, my - 14, '<i>F</i><sub>far</sub>', { size: 15, anchor: 'start', color: C.amber });
    s.sym((xw + xl) / 2, ym + 22, '<i>d</i>', { size: 16 });
    s.sym((xl + xr) / 2, ym + 22, '<i>a</i>', { size: 16 });
    s.sym(W - 6, 26, '<i>B⃗</i> of the wire', { size: 14, anchor: 'end', color: C.slate });
    s.sym(W - 6, 44, '(into the page)', { size: 14, anchor: 'end', color: C.slate });
    s.sym(8, 302, '<i>F</i><sub>near</sub> = μ<sub>0</sub><i>I</i><sub>1</sub><i>I</i><sub>2</sub><i>a</i>/(2π<i>d</i>) (towards the wire)', { size: 13, anchor: 'start' });
    s.sym(8, 324, '<i>F</i><sub>far</sub> = μ<sub>0</sub><i>I</i><sub>1</sub><i>I</i><sub>2</sub><i>a</i>/(2π(<i>d</i> + <i>a</i>)) (away)', { size: 13, anchor: 'start' });
    resultBlock(s, ['<i>F</i><sub>net</sub> = μ<sub>0</sub><i>I</i><sub>1</sub><i>I</i><sub>2</sub><i>a</i><sup>2</sup>/(2π<i>d</i>(<i>d</i> + <i>a</i>))', 'towards the wire'], { size: 14 });
    for (let y = 72; y < 240; y += 40) for (let x = 254; x < W - 10; x += 36) if (!crowded(s, [x, y], 10)) inMark(s, [x, y], 6, C.slate);
    return s;
  },
  check() {
    const { d, a } = G412;
    const I1 = 1, I2 = 1;
    const Bz = (x: number) => -(I1 / (2 * Math.PI * x)); // per μ₀, into the page on the loop's side (x > 0)
    const Bdir = cross3([0, 1, 0], [1, 0, 0]);
    const side = (L: V3, x: number) => cross3(L.map((v) => v * I2 * a) as V3, [0, 0, Bz(x)]);
    const near = side([0, 1, 0], d), far = side([0, -1, 0], d + a);
    // top and bottom: integrate along x
    let top = 0, bottom = 0;
    const n = 4000, h = a / n;
    for (let k = 0; k < n; k++) { const x = d + (k + 0.5) * h; top += cross3([I2 * h, 0, 0], [0, 0, Bz(x)])[1]; bottom += cross3([-I2 * h, 0, 0], [0, 0, Bz(x)])[1]; }
    const net = near[0] + far[0];
    const form = -(I1 * I2 * a * a) / (2 * Math.PI * d * (d + a));
    // Practice 3 (p. 293): 10 A and 15 A, 5.0 cm apart
    const fl = (MU0 * 10 * 15) / (2 * Math.PI * 0.05);
    return [
      ['The wire’s field (I₁ up the page) is into the page on the loop’s side (⊗), by dl⃗ × r̂', sameWay(Bdir, IN)],
      ['Near side (I₂ up, like I₁): I₂L⃗ × B⃗ points toward the wire; far side (I₂ down): away', near[0] < 0 && far[0] > 0],
      [`The drawn force arrows are in the ratio F_far/F_near = d/(d + a) = ${fmt(d / (d + a), 3)}`, close(Math.abs(far[0] / near[0]), d / (d + a), 1e-12)],
      [`The forces on the top and bottom sides, summed along them, are equal and opposite (${fmt(top, 5)} and ${fmt(bottom, 5)}): they cancel`, close(top + bottom, 0, 1e-12) && top !== 0],
      [`Net force μ₀I₁I₂a/(2π) (1/d − 1/(d + a)) = μ₀I₁I₂a²/(2πd(d + a)), toward the wire (here ${fmt(net / form, 6)} × the formula)`, rel(net, form, 1e-12) && net < 0],
      [`Practice 3: F/L = μ₀I₁I₂/(2πd) = ${sci(fl, 1)} N/m (the book's 6.0 × 10⁻⁴), attractive for parallel currents`, fmt(fl * 1e4, 1) === '6'],
      ...layout(fig412.draw(fig412.cases[0])),
    ];
  },
};

/* ===================================================================== */
/* Figures 4.13 and 4.14 · ammeter and voltmeter from a galvanometer (topic 04) */
/* ===================================================================== */
const G413 = { yIn: 100, yG: 50, yS: 150, xJ1: 92, xJ2: 248, G: [170, 50] as P, rG: 18, S: [140, 200] };
const fig413: Diagram = {
  id: 'p12-04-fig-4.13',
  topic: 3,
  name: 'Galvanometer as an ammeter',
  cases: [{ chip: 'Shunt in parallel', cap: 'Galvanometer <i>G</i> converted to an ammeter: a small shunt resistance <i>S</i> is connected in parallel with it. The total current <i>I</i> splits at the junction into the galvanometer current (through <i>G</i>) and the remainder (through <i>S</i>), which rejoin at the far terminal.' }],
  draw() {
    const s = new Sketch(W, 252);
    const { yIn, yG, yS, xJ1, xJ2, G, rG, S } = G413;
    wire(s, [[10, yIn], [xJ1, yIn]]);
    wire(s, [[xJ1, yIn], [xJ1, yG], [G[0] - rG, yG]]);
    wire(s, [[xJ1, yIn], [xJ1, yS], [S[0], yS]]);
    wire(s, [[G[0] + rG, yG], [xJ2, yG], [xJ2, yIn]]);
    wire(s, [[S[1], yS], [xJ2, yS], [xJ2, yIn]]);
    wire(s, [[xJ2, yIn], [W - 10, yIn]]);
    meter(s, G, rG, 'G');
    resistor(s, [S[0], yS], [S[1], yS], { hw: 11, color: C.mari, w: 2.2 });
    s.text((S[0] + S[1]) / 2, yS + 5.5, '<i>S</i>', { size: 16, color: C.amber });
    s.dot(xJ1, yIn, 3.6);
    s.dot(xJ2, yIn, 3.6);
    head(s, [56, yIn], [1, 0], C.ink, 10, 5);
    head(s, [W - 46, yIn], [1, 0], C.ink, 10, 5);
    head(s, [124, yG], [1, 0], C.ink);
    head(s, [120, yS], [1, 0], C.ink);
    s.sym(48, yIn - 14, '<i>I</i>', { size: 17 });
    s.sym(W - 52, yIn - 14, '<i>I</i>', { size: 17 });
    s.sym(G[0], yG - rG - 10, '<i>I</i><sub>g</sub>', { size: 16 });
    s.sym((S[0] + S[1]) / 2, yS + 34, '<i>I</i> − <i>I</i><sub>g</sub>', { size: 16 });
    resultBlock(s, ['<i>I</i><sub>g</sub><i>G</i> = (<i>I</i> − <i>I</i><sub>g</sub>)<i>S</i> ⇒ <i>S</i> = <i>I</i><sub>g</sub><i>G</i>/(<i>I</i> − <i>I</i><sub>g</sub>)'], { size: 15, subRoom: 6 });
    return s;
  },
  check() {
    const { yIn, yG, yS, G, rG, S } = G413;
    const s = fig413.draw(fig413.cases[0]);
    const net = nodes(s, { A: [10, yIn], Gl: [G[0] - rG, yG], Gr: [G[0] + rG, yG], Sl: [S[0], yS], Sr: [S[1], yS], B: [W - 10, yIn] });
    // Example 1 (p. 300): G = 50 Ω, Ig = 2.0 mA, I = 5.0 A
    const Gv = 50, Ig = 2e-3, I = 5, Sv = (Ig * Gv) / (I - Ig), RA = (Gv * Sv) / (Gv + Sv);
    // Example 3 (p. 301): G = 80 Ω, Ig = 2.0 mA, 5.0 A
    const S3 = (2e-3 * 80) / (5 - 2e-3), P3 = (5 - 2e-3) * 2e-3 * 80;
    return [
      [`Read off the wires: ${showNodes(net)}: G and S join the same two nodes, in parallel`, sameNodes(net, [['A', 'Gl', 'Sl'], ['B', 'Gr', 'Sr']])],
      ['So they share one voltage, I_gG = (I − I_g)S, and the currents rejoin: I_g + (I − I_g) = I', close(Ig * Gv, (I - Ig) * Sv, 1e-12)],
      [`Example 1: S = I_gG/(I − I_g) = ${fmt(Sv, 4)} Ω (the book's 0.0200 Ω); the ammeter's R_A = GS/(G + S) = ${fmt(RA, 4)} Ω, below S`, fmt(Sv, 4) === '0.02' && RA < Sv],
      [`Example 3: S = ${fmt(S3, 4)} Ω, dissipating (I − I_g)(I_gG) = ${fmt(P3, 2)} W > 0.50 W (the book's 0.0320 Ω, 0.80 W)`, fmt(S3, 3) === '0.032' && fmt(P3, 2) === '0.8'],
      ...layout(s),
    ];
  },
};

const G414 = { y: 70, R: [80, 160], G: [226, 70] as P, rG: 20, yV: 124 };
const fig414: Diagram = {
  id: 'p12-04-fig-4.14',
  topic: 3,
  name: 'Galvanometer as a voltmeter',
  cases: [{ chip: 'Multiplier in series', cap: 'Galvanometer <i>G</i> converted to a voltmeter: a large resistance <i>R</i> is connected in series with it and the voltage <i>V</i> is applied across the combination, so the same current flows through <i>R</i> and <i>G</i>.' }],
  draw() {
    const s = new Sketch(W, 214);
    const { y, R, G, rG, yV } = G414;
    wire(s, [[12, y], [R[0], y]]);
    wire(s, [[R[1], y], [G[0] - rG, y]]);
    wire(s, [[G[0] + rG, y], [W - 12, y]]);
    resistor(s, [R[0], y], [R[1], y], { hw: 14, color: C.mari, w: 2.2 });
    s.text((R[0] + R[1]) / 2, y + 6.5, '<i>R</i>', { size: 19, color: C.amber });
    meter(s, G, rG, 'G', { size: 19 });
    head(s, [52, y], [1, 0], C.ink, 10, 5);
    head(s, [W - 34, y], [1, 0], C.ink, 10, 5);
    s.sym(42, y - 16, '<i>I</i><sub>g</sub>', { size: 17 });
    s.sym(W - 44, y - 16, '<i>I</i><sub>g</sub>', { size: 17 });
    guide(s, [12, y + 4], [12, yV + 6]);
    guide(s, [W - 12, y + 4], [W - 12, yV + 6]);
    measure(s, [14, yV], [W - 14, yV], C.slate);
    s.sym(W / 2, yV + 24, '<i>V</i>', { size: 18 });
    resultBlock(s, ['<i>V</i> = <i>I</i><sub>g</sub>(<i>G</i> + <i>R</i>) ⇒ <i>R</i> = <i>V</i>/<i>I</i><sub>g</sub> − <i>G</i>'], { size: 15 });
    return s;
  },
  check() {
    const { y, R, G, rG } = G414;
    const s = fig414.draw(fig414.cases[0]);
    const net = nodes(s, { A: [12, y], Rl: [R[0], y], Rr: [R[1], y], Gl: [G[0] - rG, y], Gr: [G[0] + rG, y], B: [W - 12, y] });
    // Example 2 (p. 301): G = 60 Ω, Ig = 1.0 mA, 3.0 V; Practice 2: G = 25 Ω, Ig = 4.0 mA, 10 V
    const R2 = 3.0 / 1e-3 - 60, Rp = 10 / 4e-3 - 25;
    return [
      [`Read off the wires: ${showNodes(net)}: R and G in one chain, joined only to each other between the terminals (series: the same I_g through both)`, sameNodes(net, [['A', 'Rl'], ['Gl', 'Rr'], ['B', 'Gr']])],
      [`Example 2: R = V/I_g − G = ${fmt(R2, 0)} Ω (the book's 2940 Ω); Practice 2: ${fmt(Rp, 0)} Ω (the book's 2475 Ω)`, R2 === 2940 && Rp === 2475],
      ['The whole of V drives I_g through G + R: I_g(G + R) = V', close(1e-3 * (60 + R2), 3.0, 1e-12)],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* Figure 4.15 · voltmeter loading (topic 04)                             */
/* ===================================================================== */
const G415 = { xb: 50, yb: 150, yt: 50, ybot: 252, R1: [86, 146], xR2: 168, R2: [100, 180], xV: 290, yVc: 150, rV: 20 };
const fig415: Diagram = {
  id: 'p12-04-fig-4.15',
  topic: 3,
  name: 'Voltmeter loading',
  cases: [{ chip: 'Meter across R₂', cap: 'Voltmeter loading: a 60 V battery drives <i>R</i><sub>1</sub> and <i>R</i><sub>2</sub> in series, and a voltmeter is connected in parallel across <i>R</i><sub>2</sub>. The meter’s own resistance is in parallel with <i>R</i><sub>2</sub>, which lowers the resistance of that part of the circuit and so the voltage the meter reads.' }],
  draw() {
    const s = new Sketch(W, 360);
    const { xb, yb, yt, ybot, R1, xR2, R2, xV, yVc, rV } = G415;
    const b = battery(s, xb, yb);
    wire(s, [b.plus, [xb, yt], [R1[0], yt]]);
    wire(s, [[R1[1], yt], [xV, yt], [xV, yVc - rV]]);
    wire(s, [[xR2, yt], [xR2, R2[0]]]);
    wire(s, [[xR2, R2[1]], [xR2, ybot]]);
    wire(s, [[xV, yVc + rV], [xV, ybot], [xb, ybot], b.minus]);
    resistor(s, [R1[0], yt], [R1[1], yt], { hw: 11 });
    resistor(s, [xR2, R2[0]], [xR2, R2[1]], { hw: 11 });
    meter(s, [xV, yVc], rV, 'V', { color: C.mari, size: 19 });
    s.dot(xR2, yt, 3.6);
    s.dot(xR2, ybot, 3.6);
    s.sym(xb - 21, yb + 12, '60 V', { size: 15, anchor: 'end' });
    s.sym(xb + 20, yb - 6, '+', { size: 15, anchor: 'start', color: C.slate });
    s.sym((R1[0] + R1[1]) / 2, yt - 19, '<i>R</i><sub>1</sub> = 10 kΩ', { size: 15 });
    s.sym(xR2 - 18, (R2[0] + R2[1]) / 2 - 4, '<i>R</i><sub>2</sub>', { size: 15, anchor: 'end' });
    s.sym(xR2 - 18, (R2[0] + R2[1]) / 2 + 16, '10 kΩ', { size: 15, anchor: 'end' });
    s.sym((xR2 + xV) / 2 + 2, yVc + 46, '<i>R</i><sub>V</sub> = 20 kΩ', { size: 14, color: C.amber });
    s.sym(8, ybot + 28, '(true <i>V</i><sub>2</sub> without the meter = 30 V, error 20%)', { size: 13, anchor: 'start', color: C.slate });
    resultBlock(s, ['<i>R</i><sub>2</sub> ∥ <i>R</i><sub>V</sub> = 10 × 20/(10 + 20) = 6.667 kΩ', '<i>V</i><sub>read</sub> = 60 × 6.667/(10 + 6.667) = 24 V'], { size: 14 });
    s.place([{ t: 'Voltmeter', hi: true, p: polar([xV, yVc], rV, 140), at: [[(xR2 + xV) / 2 + 2, yVc - 50, 'middle'], [(xR2 + xV) / 2 + 2, yVc - 44, 'middle']] }]);
    return s;
  },
  check() {
    const { xb, yb, yt, R1, xR2, R2, xV, yVc, rV } = G415;
    const s = fig415.draw(fig415.cases[0]);
    const net = nodes(s, { batPlus: [xb, yb], batMinus: [xb, yb + 12], R1l: [R1[0], yt], R1r: [R1[1], yt], R2t: [xR2, R2[0]], R2b: [xR2, R2[1]], Vt: [xV, yVc - rV], Vb: [xV, yVc + rV] });
    const E = 60, r1 = 10, r2 = 10, rv = 20;
    const rpar = (r2 * rv) / (r2 + rv), vread = (E * rpar) / (r1 + rpar), vtrue = (E * r2) / (r1 + r2), err = ((vtrue - vread) / vtrue) * 100;
    return [
      [`Read off the wires: ${showNodes(net)}: R₁ from + to the junction; R₂ and the meter between the same two nodes (parallel); the long plate (+) feeds R₁`, sameNodes(net, [['R1l', 'batPlus'], ['R1r', 'R2t', 'Vt'], ['R2b', 'Vb', 'batMinus']])],
      [`R₂ ∥ R_V = ${fmt(rpar, 3)} kΩ (the book's 6.667 kΩ)`, fmt(rpar, 3) === '6.667'],
      [`The meter reads 60 × ${fmt(rpar, 3)}/(10 + ${fmt(rpar, 3)}) = ${fmt(vread, 2)} V; without it V₂ = ${fmt(vtrue, 1)} V; error ${fmt(err, 1)}% (the book's 24 V, 30 V, 20%)`, close(vread, 24, 1e-9) && close(vtrue, 30) && close(err, 20, 1e-9)],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* Figure 4.16 · the revolving electron (topic 05)                        */
/* ===================================================================== */
/**
 * The electron (charge −e) goes round anticlockwise; it is drawn at 45° with
 * v⃗ along the anticlockwise tangent. The conventional current, I = −ev⃗'s
 * sense, is drawn on the clockwise tangent at 240°. L⃗ = m r⃗ × v⃗ and
 * μ⃗_l = I A n̂ are computed: out of and into the page.
 */
/** `ai`: the current arrow at 240°, low on the orbit, where its name fits beside it (at 225° the name sat 40 px below, away from it). */
const G416 = { N: [150, 150] as P, r: 104, ae: 45, ai: 240, re: 12, rn: 14, v: 40, iL: 22 };
const fig416: Diagram = {
  id: 'p12-04-fig-4.16',
  topic: 4,
  name: 'Revolving electron as a magnet',
  cases: [{ chip: 'Orbit and moment', cap: 'Electron revolving anticlockwise on a circular orbit of radius <i>r</i> about the nucleus: the conventional current <i>I</i> is clockwise, the orbital angular momentum <i>L⃗</i> points out of the page and the magnetic moment <i>μ⃗</i><sub><i>l</i></sub> points into the page, opposite to <i>L⃗</i>.' }],
  draw() {
    const s = new Sketch(W, 446);
    const { N, r, ae, ai, re, rn, v, iL } = G416;
    const E = polar(N, r, ae), I0 = polar(N, r, ai);
    path(s, arcPts(N, r, ae + 9, ae + 351, 200), { color: C.slate, w: 1.6, dash: 'dash' });
    // v⃗: anticlockwise tangent; the current: clockwise tangent
    const vu: P = [-Math.sin(ae * D2R), -Math.cos(ae * D2R)];
    const iu: P = [Math.sin(ai * D2R), Math.cos(ai * D2R)];
    arrow(s, add(E, vu, re + 3), add(E, vu, re + 3 + v), { w: 2.4 });
    arrow(s, add(I0, iu, -iL), add(I0, iu, iL), { color: C.mari, w: 3 });
    guide(s, add(N, unit(sub(E, N)), rn + 3), add(E, unit(sub(N, E)), re + 3));
    // nucleus (+) and electron (−)
    ring(s, N, rn, { w: 2 });
    path(s, [[N[0] - 6, N[1]], [N[0] + 6, N[1]]], { w: 2 });
    path(s, [[N[0], N[1] - 6], [N[0], N[1] + 6]], { w: 2 });
    s.point(N[0], N[1], rn, '');
    ring(s, E, re, { w: 2 });
    path(s, [[E[0] - 5, E[1]], [E[0] + 5, E[1]]], { w: 2 });
    s.point(E[0], E[1], re, '');
    const vt = add(E, vu, re + 3 + v);
    s.sym(vt[0] - 6, vt[1] - 2, '<i>v⃗</i> (electron)', { size: 15, anchor: 'end' });
    s.sym(E[0] + re + 6, E[1] - 8, '<i>e</i><sup>−</sup>', { size: 16, anchor: 'start' });
    const rm = add(N, sub(E, N), 0.5);
    s.sym(rm[0] - 12, rm[1] - 6, '<i>r</i>', { size: 17 });
    s.sym(8, 274, '<i>I</i> (conventional,', { size: 15, anchor: 'start', color: C.amber });
    s.sym(22, 292, 'clockwise)', { size: 15, anchor: 'start', color: C.amber });
    // the key: L⃗ out of the page, μ⃗ into it
    outMark(s, [20, 326], 8);
    s.sym(36, 331, '<i>L⃗</i>: orbital angular momentum, out of the page', { size: 13, anchor: 'start' });
    inMark(s, [20, 352], 8);
    s.sym(36, 357, '<i>μ⃗</i><sub><i>l</i></sub>: magnetic moment, into the page', { size: 13, anchor: 'start' });
    s.sym(36, 375, '(opposite to <i>L⃗</i>)', { size: 13, anchor: 'start' });
    resultBlock(s, ['<i>I</i> = <i>ev</i>/(2π<i>r</i>), <i>μ</i><sub><i>l</i></sub> = <i>IA</i> = <i>evr</i>/2 = (<i>e</i>/(2<i>m</i>))<i>L</i>,', '<i>μ</i><sub><i>l</i></sub>/<i>L</i> = <i>e</i>/(2<i>m</i>) ≈ 8.8 × 10<sup>10</sup> C kg<sup>−1</sup>'], { size: 14 });
    s.place([{ t: 'Nucleus', p: [N[0], N[1] + rn], own: N, at: [[N[0], N[1] + 36, 'middle'], [N[0], N[1] + 40, 'middle']] }]);
    return s;
  },
  check() {
    const { N, r, ae, ai } = G416;
    const E = polar(N, r, ae);
    const rv = page(sub(E, N)), vu = page([-Math.sin(ae * D2R), -Math.cos(ae * D2R)]);
    const L = cross3(rv, vu);
    const Ipos = page(sub(polar(N, r, ai), N)), Idir = page([Math.sin(ai * D2R), Math.cos(ai * D2R)]);
    // the current's sense is that of −e moving with v⃗: opposite to the electron's motion
    const elecAtI = page([-Math.sin(ai * D2R), -Math.cos(ai * D2R)]);
    const nI = cross3(Ipos, Idir); // the right-hand normal of the current's circulation
    const e = 1.6e-19, m = 9.1e-31, h = 6.626e-34;
    const ratio = e / (2 * m), muB = (1.602e-19 * h) / (4 * Math.PI * 9.109e-31);
    const mu5 = (e * 2.2e6 * 5.3e-11) / 2;
    return [
      ['v⃗ is tangent to the orbit and runs anticlockwise: L⃗ = m r⃗ × v⃗ points out of the page', close(dot3(rv, vu), 0, 1e-9) && sameWay(L, OUT)],
      ['The current arrow is tangent to the orbit and points against the electron’s motion there (its charge is −e): clockwise', close(dot3(Ipos, Idir), 0, 1e-9) && sameWay(Idir, elecAtI.map((x) => -x) as V3) && nI[2] < 0],
      ['So μ⃗_l = IA n̂ (right-hand normal of the clockwise current) points into the page, opposite to L⃗: μ⃗_l = −(e/2m)L⃗', sameWay(nI, IN) && sameWay(nI, L.map((x) => -x) as V3)],
      [`μ_l/L = e/(2m) = ${sci(ratio, 2)} C kg⁻¹ (the book's 8.8 × 10¹⁰)`, fmt(ratio / 1e10, 1) === '8.8'],
      [`n = 1: μ_B = eh/(4πm) = ${sci(muB, 2)} A m² (the book's 9.27 × 10⁻²⁴); Practice 5: evr/2 = ${sci(mu5, 1)} A m² ≈ 1 μ_B`, fmt(muB * 1e24, 2) === '9.27' && fmt(mu5 * 1e24, 1) === '9.3'],
      ...layout(fig416.draw(fig416.cases[0])),
    ];
  },
};

export const DIAGRAMS_PHYSICS_12_04: Diagram[] = [fig41, fig42, fig43, fig44, fig45, fig46, fig47, fig48, fig49, fig410, fig411, fig412, fig413, fig414, fig415, fig416];
