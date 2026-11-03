import { C, LABEL_GAP, Rect, Sketch, r1, mathW } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * PHYSICS CLASS 12, CHAPTER 2 (Electrostatic Potential and Capacitance):
 * every drawing of the Master Reference book, redrawn. The chapter's drawings
 * are its seven numbered figures, each printed on a "CHAPTER 2 · FIGURES"
 * page (2.1 on p. 84, 2.2 on p. 86, 2.3 on p. 94, 2.4 on p. 102, 2.5 on
 * p. 110, 2.6 on p. 116, 2.7 on p. 118; the first copy of each caption sits a
 * page earlier, where the text refers to it). It has no unnumbered drawings:
 * pp. 80–138 were checked page by page, the Supplement (pp. 122–138)
 * included; the rest is prose, typeset equations, boxed answers and the
 * scaling table on p. 136.
 *
 * Every figure is computed from the physics, never placed by eye: the two
 * equipotentials are circles of a point charge's V = kq/r, with the field
 * along the radius (normal to both) toward the lower one; the dipole's r₁, r₂
 * and the feet of the perpendiculars at ±a cos θ come from the charges' real
 * positions; the couple on a dipole in a uniform field is the cross product of
 * the drawn lever arms with the drawn forces (pE sin θ, clockwise, toward E);
 * the capacitor's field arrows are equal, parallel and evenly spaced from +
 * to −, checked against Example 1's numbers (C₀ = ε₀A/d); the pillbox's flux
 * is E ΔS through the outer cap only; and the series and parallel networks are
 * wired as graphs whose nodes are checked, with Example 1's 2, 3 and 6 μF.
 * Each `check` turns the drawing back into physics, recomputes what the
 * figure and caption state, and measures that no label or tag touches a line
 * it does not name.
 */

const W = 340;
type P = [number, number];
const D2R = Math.PI / 180;
const close = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) < tol;
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

/** Physical constants as the book uses them. */
const K = 9e9;
const EPS0 = 8.85e-12;

/* ---------- drawing helpers (as in physics-11-13.ts) ---------- */
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
/** An arrow (a force, a direction) that labels keep clear of. */
function arrow(s: Sketch, a: P, b: P, o: { color?: string; w?: number; dash?: boolean } = {}) {
  s.vec(a[0], a[1], b[0], b[1], o);
  keep(s, [a, b]);
}
/** A measured length with an arrowhead at each end. */
function measure(s: Sketch, a: P, b: P, color: string = C.slate) {
  const m: P = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
  arrow(s, m, a, { color, w: 1.3 });
  arrow(s, m, b, { color, w: 1.3 });
}
/** The points of an arc about c, radius R, from math angle a0 to a1 (degrees). */
const arcPts = (c: P, R: number, a0: number, a1: number, n = 90): P[] => samples(a0, a1, n).map((a) => polar(c, R, a));
/** A point charge: a small white disc with an ink rim (never a coloured fill). */
function charge(s: Sketch, p: P, r = 6.5) {
  s.point(p[0], p[1], r, `<circle cx="${r1(p[0])}" cy="${r1(p[1])}" r="${r}" fill="#fff" stroke="${C.ink}" stroke-width="1.8"/>`);
  keep(s, arcPts(p, r, 0, 360, 36));
}
/** A right-angle mark at corner q, between the directions u and v (unit vectors). */
function rightMark(s: Sketch, q: P, u: P, v: P, k = 6, color: string = C.amber) {
  path(s, [add(q, u, k), add(add(q, u, k), v, k), add(q, v, k)], { color, w: 1.1, free: true });
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
/** The check every figure makes on its own layout. */
const clearCheck = (s: Sketch): Check => {
  const { gap, what } = clearance(s);
  return [`Every tag and label stays at least ${LABEL_GAP} px clear of every line it does not name: the closest is "${what}", ${fmt(gap, 1)} px`, gap >= LABEL_GAP - 1e-9];
};
/** No two labels on one drawing touch (the kit's audit checks tags; this checks the STIX labels against each other). */
const labelsApart = (s: Sketch): Check => {
  const L = s.labels;
  const bad = L.flatMap((a, i) => L.slice(i + 1).filter((b) => !(a.rect[2] + 2 <= b.rect[0] || b.rect[2] + 2 <= a.rect[0] || a.rect[3] + 2 <= b.rect[1] || b.rect[3] + 2 <= a.rect[1])).map((b) => `${a.text} / ${b.text}`));
  return [`No two symbols or labels on the drawing touch${bad.length ? `: ${bad.join(', ')}` : ''}`, bad.length === 0];
};
/**
 * The result, bottom right, ink-edged, maths set in STIX (Sketch.text).
 * Registered as a tag, so the audit keeps everything else off it.
 */
function resultBlock(s: Sketch, lines: string[], o: { size?: number } = {}): Rect {
  const size = o.size ?? 15, lh = size + 6;
  const plain = (t: string) => t.replace(/<\/?(?:i|sub|sup)>/g, '');
  const w = Math.max(...lines.map((t) => mathW(t, size))) + 30, h = lines.length * lh + 14;
  const x0 = s.w - 8 - w, y0 = s.h - 8 - h;
  s.tags.push({ name: plain(lines.join(' ')), rect: [x0, y0, x0 + w, y0 + h], from: null, to: null });
  s.add(`<rect x="${r1(x0)}" y="${r1(y0)}" width="${r1(w)}" height="${r1(h)}" rx="15" fill="#fff" stroke="${C.text}" stroke-width="1.6"/>`);
  lines.forEach((t, i) => s.text(x0 + w / 2, y0 + 7 + lh * i + lh / 2 + size * 0.36, t, { size, semibold: true }));
  return [x0, y0, x0 + w, y0 + h];
}

/** Wires as drawn, by sketch, so a check can read the circuit back off the drawing. */
const WIRES = new WeakMap<Sketch, P[][]>();
function wire(s: Sketch, pts: P[]) { path(s, pts); const l = WIRES.get(s) ?? []; l.push(pts); WIRES.set(s, l); }
/** Does p lie on the polyline (within half a pixel)? */
const onWire = (p: P, w: P[]) => w.some((a, i) => i > 0 && distSeg(p, w[i - 1], a) < 0.5);
function distSeg(p: P, a: P, b: P) {
  const d = sub(b, a), L = dotp(d, d) || 1, k = Math.max(0, Math.min(1, dotp(sub(p, a), d) / L));
  return len(p, add(a, d, k));
}
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

/** The battery: long (+) plate at y, short (−) plate 12 px below, centred on x. */
function battery(s: Sketch, x: number, y: number) {
  path(s, [[x - 15, y], [x + 15, y]], { w: 3 });
  path(s, [[x - 8, y + 12], [x + 8, y + 12]], { w: 3 });
  return { plus: [x, y] as P, minus: [x, y + 12] as P };
}

/* ===================================================================== */
/* Figure 2.1 · two close equipotentials and the field (topic 01)          */
/* ===================================================================== */
/**
 * The book draws two arcs bending round a centre on the left, A inside at V
 * and B outside at V + δV with δV < 0: the equipotentials of a positive point
 * charge there, V = kq/r. So A and B are circles about that charge (radii
 * 200 and 240 px), E⃗ runs along a radius from A out across B, and δl is the
 * radial gap, ending at P on B.
 */
const EQ = { O: [-40, 150] as P, rA: 200, rB: 240, spanA: 33, spanB: 36, aE: 14, rE: 288, aL: -22, kq: 1 };
const eqGeo = () => {
  const { O, rA, rB, aE, rE, aL } = EQ;
  const e0 = polar(O, rA, aE), e1 = polar(O, rE, aE);
  const l0 = polar(O, rA, aL), Pp = polar(O, rB, aL);
  return { e0, e1, l0, Pp };
};
const V21 = (r: number) => EQ.kq / r;
const fig21: Diagram = {
  id: 'p12-02-fig-2.1',
  topic: 0,
  name: 'Equipotentials and the field',
  cases: [{ chip: 'Two equipotentials', cap: 'Equipotential surfaces <i>A</i> (potential <i>V</i>) and <i>B</i> (potential <i>V</i> + δ<i>V</i>, with δ<i>V</i> < 0), a perpendicular distance δ<i>l</i> apart. The field <i>E</i> points from <i>A</i> toward <i>B</i>, the direction in which the potential falls.' }],
  draw() {
    const s = new Sketch(W, 296);
    const { O, rA, rB, spanA, spanB } = EQ, g = eqGeo();
    path(s, arcPts(O, rA, -spanA, spanA), { w: 2.2 });
    path(s, arcPts(O, rB, -spanB, spanB), { w: 2.2 });
    arrow(s, g.e0, g.e1, { color: C.mari, w: 2.6 });
    measure(s, g.l0, g.Pp);
    s.dot(g.Pp[0], g.Pp[1], 3.4);
    s.sym(g.e1[0] + 8, g.e1[1] + 2, '<i>E⃗</i>', { size: 17, anchor: 'start', color: C.amber });
    s.sym(98, 70, '<i>A</i> : <i>V</i>', { size: 16, anchor: 'end' });
    s.sym(212, 44, '<i>B</i> : <i>V</i> + δ<i>V</i>', { size: 16, anchor: 'start' });
    s.sym(212, 20, '(δ<i>V</i> < 0)', { size: 14, anchor: 'start', color: C.slate });
    const mid: P = [(g.l0[0] + g.Pp[0]) / 2, (g.l0[1] + g.Pp[1]) / 2];
    s.sym(mid[0] - 6, mid[1] + 26, 'δ<i>l</i>', { size: 16 });
    s.sym(g.Pp[0] + 11, g.Pp[1] + 6, '<i>P</i>', { size: 16, anchor: 'start' });
    s.place([
      { t: 'Electric field', hi: true, p: polar(O, 270, EQ.aE), at: [[W - 6, 112, 'end'], [W - 6, 120, 'end']] },
    ]);
    return s;
  },
  check() {
    const { O, rA, rB, spanA, spanB, aE } = EQ, g = eqGeo();
    const A = arcPts(O, rA, -spanA, spanA), B = arcPts(O, rB, -spanB, spanB);
    const dV = V21(rB) - V21(rA), dl = rB - rA;
    const dir = unit(sub(g.e1, g.e0)), radial = unit(sub(g.e0, O));
    const tangentA = unit(sub(polar(O, rA, aE + 0.01), polar(O, rA, aE - 0.01)));
    const tangentB = unit(sub(polar(O, rB, aE + 0.01), polar(O, rB, aE - 0.01)));
    const Emid = EQ.kq / (rA * rB);
    return [
      [`Every drawn point of A is ${rA} px and of B ${rB} px from the charge: each is a surface of constant V = kq/r`, A.every((p) => close(len(p, O), rA, 1e-9)) && B.every((p) => close(len(p, O), rB, 1e-9))],
      [`B lies outside A, so for a positive charge δV = V_B − V_A = kq(1/r_B − 1/r_A) = ${fmt(dV / V21(rA), 3)} V_A < 0`, dV < 0 && rB > rA],
      ['The field arrow starts on A and runs along the radius: normal to A and to B where it crosses them', close(len(g.e0, O), rA, 1e-9) && close(crossp(dir, radial), 0, 1e-12) && close(dotp(dir, tangentA), 0, 1e-9) && close(dotp(dir, tangentB), 0, 1e-9)],
      ['It points from A toward B, the way the potential falls: V at its tip is lower than at its tail', dotp(dir, radial) > 0 && len(g.e1, O) > rB && V21(len(g.e1, O)) < V21(len(g.e0, O))],
      [`δl is the gap along the radius, ${dl} px, the same everywhere (the surfaces are concentric), and ends at P on B`, close(len(g.l0, O), rA, 1e-9) && close(len(g.Pp, O), rB, 1e-9) && close(len(g.l0, g.Pp), dl, 1e-9)],
      [`−δV/δl = kq/(r_A r_B) is the field kq/r² at r = √(r_A r_B) = ${fmt(Math.sqrt(rA * rB), 1)} px, between its values on A and B: as δl → 0 it is E = −dV/dr`, close(-dV / dl, Emid, 1e-15) && Emid < EQ.kq / rA ** 2 && Emid > EQ.kq / rB ** 2],
      clearCheck(fig21.draw(fig21.cases[0])),
      labelsApart(fig21.draw(fig21.cases[0])),
    ];
  },
};

/* ===================================================================== */
/* Figure 2.2 · geometry for the dipole potential (topic 01)               */
/* ===================================================================== */
/**
 * The book's geometry, measured off its drawing: P at r ≈ 3.6a from O, with
 * OP at θ ≈ 37° to the axis; −q on the left, +q on the right. The feet of the
 * perpendiculars from the charges onto OP are computed, and fall at ±a cos θ.
 */
const DP = { O: [112, 196] as P, a: 58, th: 37, r: 3.6, back: 1.05, rAt: 1.5 };
const dpGeo = () => {
  const { O, a, th, r } = DP;
  const u: P = [Math.cos(th * D2R), -Math.sin(th * D2R)];
  const qp: P = [O[0] + a, O[1]], qm: P = [O[0] - a, O[1]];
  const Pp = add(O, u, r * a);
  const foot = (q: P) => add(O, u, dotp(sub(q, O), u));
  const py = O[1] + 64;
  return { u, qp, qm, Pp, fp: foot(qp), fm: foot(qm), py, p0: [qm[0], py] as P, p1: [qp[0], py] as P };
};
const fig22: Diagram = {
  id: 'p12-02-fig-2.2',
  topic: 0,
  name: 'Dipole potential geometry',
  cases: [{ chip: 'Dipole and P', cap: 'Geometry for the dipole potential: −<i>q</i> and +<i>q</i> are 2<i>a</i> apart about the centre <i>O</i>, and <i>P</i> is at distance <i>r</i> from <i>O</i> with <i>OP</i> at angle <i>θ</i> to the axis. The distances from <i>P</i> to +<i>q</i> and −<i>q</i> are <i>r</i><sub>1</sub> and <i>r</i><sub>2</sub>; the charges project onto <i>OP</i> at ±<i>a</i> cos <i>θ</i> from <i>O</i>.' }],
  draw() {
    const s = new Sketch(W, 388);
    const { O, a, th, back } = DP, g = dpGeo();
    // the axis through both charges, dashed
    path(s, [[O[0] - a - 52, O[1]], [O[0] + a + 70, O[1]]], { color: C.slate, w: 1.1, dash: 'dash' });
    // r₁ and r₂, dashed
    path(s, [g.Pp, g.qp], { color: C.slate, w: 1.3, dash: 'dash' });
    path(s, [g.Pp, g.qm], { color: C.slate, w: 1.3, dash: 'dash' });
    // OP, run back past O beyond the lower foot, broken where r is written on it (as the book sets it)
    path(s, [add(O, g.u, -back * a), add(O, g.u, DP.rAt * a - 13)], { w: 1.7 });
    path(s, [add(O, g.u, DP.rAt * a + 13), g.Pp], { w: 1.7 });
    // the thick segment between the feet, and the perpendiculars dropped onto OP
    path(s, [g.fm, g.fp], { color: C.mari, w: 4.2 });
    path(s, [g.qp, g.fp], { color: C.amber, w: 1.2, dash: 'dot', free: true });
    path(s, [g.qm, g.fm], { color: C.amber, w: 1.2, dash: 'dot', free: true });
    rightMark(s, g.fp, [-g.u[0], -g.u[1]], unit(sub(g.qp, g.fp)));
    rightMark(s, g.fm, g.u, unit(sub(g.qm, g.fm)));
    // θ between the axis (toward +q) and OP
    path(s, arcPts(O, 24, 0, th, 24), { w: 1.2 });
    charge(s, g.qm);
    charge(s, g.qp);
    s.dot(O[0], O[1], 3.2);
    s.dot(g.Pp[0], g.Pp[1], 3.6);
    const tl = polar(O, 40, th / 2 - 1.5);
    s.sym(tl[0], tl[1] + 4.5, 'θ', { italic: true, size: 14 });
    s.sym(g.qm[0] - 2, O[1] + 27, '−<i>q</i>', { size: 16 });
    s.sym(O[0] - 1, O[1] + 27, '<i>O</i>', { size: 16 });
    s.sym(g.qp[0] + 6, O[1] + 27, '+<i>q</i>', { size: 16 });
    s.sym(g.Pp[0] + 9, g.Pp[1] - 7, '<i>P</i>', { size: 17, anchor: 'start' });
    const onOP = add(DP.O, g.u, DP.rAt * a);
    s.sym(onOP[0], onOP[1] + 4, '<i>r</i>', { size: 16 });
    const m1: P = add(g.qp, sub(g.Pp, g.qp), 0.5);
    s.sym(m1[0] + 12, m1[1] + 12, '<i>r</i><sub>1</sub>', { size: 16, anchor: 'start', color: C.slate });
    const m2: P = add(g.qm, sub(g.Pp, g.qm), 0.42);
    s.sym(m2[0] - 4, m2[1] - 12, '<i>r</i><sub>2</sub>', { size: 16, anchor: 'end', color: C.slate });
    // the dipole moment, from −q to +q
    const py = g.py;
    arrow(s, g.p0, g.p1, { w: 2.2 });
    s.sym(O[0] + 52, py + 30, '<i>p⃗</i> = <i>q</i>(2<i>a</i>) from −<i>q</i> to +<i>q</i>', { size: 15 });
    // the book's own note under its drawing
    s.sym(W / 2, py + 72, 'thick segment of <i>OP</i> runs from', { size: 14, color: C.amber });
    s.sym(W / 2, py + 92, '−<i>a</i> cos <i>θ</i> to +<i>a</i> cos <i>θ</i> about <i>O</i> (the feet of the', { size: 14, color: C.amber });
    s.sym(W / 2, py + 112, 'perpendiculars dropped from −<i>q</i> and +<i>q</i> onto <i>OP</i>)', { size: 14, color: C.amber });
    return s;
  },
  check() {
    const { O, a, th, r } = DP, g = dpGeo();
    const r1 = len(g.Pp, g.qp), r2 = len(g.Pp, g.qm), rr = len(g.Pp, O);
    const ang = Math.atan2(O[1] - g.Pp[1], g.Pp[0] - O[0]) / D2R;
    const proj = (f: P) => dotp(sub(f, O), g.u);
    const Vexact = 1 / r1 - 1 / r2, Vdip = (2 * a * Math.cos(th * D2R)) / rr ** 2;
    return [
      [`−q and +q sit ${fmt(len(g.qm, g.qp) / a, 3)}a apart, a on each side of O on the axis`, close(len(g.qm, O), a, 1e-9) && close(len(g.qp, O), a, 1e-9) && close(g.qm[1], g.qp[1]) && g.qm[0] < O[0] && g.qp[0] > O[0]],
      [`P is at r = ${fmt(rr / a, 2)}a from O, with OP at θ = ${fmt(ang, 2)}° to the axis toward +q (read back from the drawing)`, close(rr, r * a, 1e-9) && close(ang, th, 1e-9)],
      [`r₁ runs from P to +q (${fmt(r1 / a, 3)}a) and r₂ from P to −q (${fmt(r2 / a, 3)}a): +q is the nearer charge, r₁ < r₂`, r1 < r2],
      [`The feet of the perpendiculars from +q and −q fall on OP at +${fmt(proj(g.fp) / a, 4)}a and ${fmt(proj(g.fm) / a, 4)}a: ±a cos θ = ±${fmt(Math.cos(th * D2R), 4)}a`, close(proj(g.fp), a * Math.cos(th * D2R), 1e-9) && close(proj(g.fm), -a * Math.cos(th * D2R), 1e-9)],
      ['Each dotted line meets OP at a right angle', close(dotp(sub(g.qp, g.fp), g.u), 0, 1e-9) && close(dotp(sub(g.qm, g.fm), g.u), 0, 1e-9)],
      ['The thick segment is the part of OP between the two feet, centred on O, and OP is drawn on past the lower foot', close(len(g.fm, O), len(g.fp, O), 1e-9) && DP.back * a > a * Math.cos(th * D2R)],
      [`For r ≫ a, r₁ ≈ r − a cos θ and r₂ ≈ r + a cos θ: here r₂ − r₁ = ${fmt((r2 - r1) / a, 3)}a against 2a cos θ = ${fmt(2 * Math.cos(th * D2R), 3)}a, and r₁r₂ = ${fmt((r1 * r2) / rr ** 2, 3)}r²`, Math.abs((r2 - r1) / (2 * a * Math.cos(th * D2R)) - 1) < 0.05 && Math.abs((r1 * r2) / rr ** 2 - 1) < 0.05],
      [`So V = kq(1/r₁ − 1/r₂) ≈ kp cos θ/r²: at the drawn r = ${fmt(r, 1)}a the two agree within ${fmt(Math.abs(Vexact / Vdip - 1) * 100, 1)}%`, Math.abs(Vexact / Vdip - 1) < 0.06],
      [`p⃗ is drawn from under −q to under +q, ${fmt(len(g.p0, g.p1) / a, 3)}a long: p = q(2a), pointing from −q to +q`, close(len(g.p0, g.p1), 2 * a, 1e-9) && close(g.p0[0], g.qm[0]) && close(g.p1[0], g.qp[0]) && g.p1[0] > g.p0[0] && close(g.p0[1], g.p1[1])],
      clearCheck(fig22.draw(fig22.cases[0])),
      labelsApart(fig22.draw(fig22.cases[0])),
    ];
  },
};

/* ===================================================================== */
/* Figure 2.3 · a dipole in a uniform field (topic 02)                     */
/* ===================================================================== */
/**
 * The book's dipole, measured off its drawing: θ ≈ 35° above the field, +q up
 * and to the right; forces qE⃗ on +q and −qE⃗ on −q; the curved arrow turning
 * the dipole clockwise, toward E⃗.
 */
const DU = { c: [176, 186] as P, a: 66, th: 35, F: 62, tq: 62, t0: 152, t1: 100 };
const duGeo = (th = DU.th) => {
  const { c, a, F } = DU;
  const u: P = [Math.cos(th * D2R), -Math.sin(th * D2R)];
  const qp = add(c, u, a), qm = add(c, u, -a);
  const Fp: P = [F, 0], Fm: P = [-F, 0];
  return { u, qp, qm, Fp, Fm };
};
const fig23: Diagram = {
  id: 'p12-02-fig-2.3',
  topic: 1,
  name: 'Dipole in a uniform field',
  cases: [{ chip: 'Torque on a dipole', cap: 'A dipole of moment <i>p</i> (from −<i>q</i> to +<i>q</i>) in a uniform field <i>E</i>, inclined at angle <i>θ</i> to it. The forces <i>qE</i> and −<i>qE</i> are equal and opposite, so they form a couple of torque <i>τ</i> = <i>pE</i> sin <i>θ</i> that turns <i>p</i> toward <i>E</i>.' }],
  draw() {
    const s = new Sketch(W, 352);
    const { c, a, th, tq, t0, t1 } = DU, g = duGeo();
    // the dipole and its moment (drawn alongside, from −q toward +q)
    path(s, [g.qm, g.qp], { w: 2 });
    const side: P = [g.u[1], -g.u[0]]; // normal to the dipole, toward the upper left
    arrow(s, add(add(c, g.u, -0.5 * a), side, 13), add(add(c, g.u, 0.5 * a), side, 13), { w: 2.2 });
    // θ from the field direction (dashed, through the centre) to the dipole
    path(s, [c, [c[0] + 0.95 * a, c[1]]], { color: C.slate, w: 1.1, dash: 'dash' });
    path(s, arcPts(c, 30, 0, th, 24), { w: 1.2 });
    // the two forces
    arrow(s, add(g.qp, [8, 0]), add(add(g.qp, [8, 0]), g.Fp), { w: 2.2 });
    arrow(s, add(g.qm, [-8, 0]), add(add(g.qm, [-8, 0]), g.Fm), { w: 2.2 });
    // the couple's turning sense: clockwise, from t0 to t1
    const tp = arcPts(c, tq, t0, t1, 40);
    path(s, tp.slice(0, -1), { color: C.mari, w: 2.6 });
    arrow(s, tp[tp.length - 4], tp[tp.length - 1], { color: C.mari, w: 2.6 });
    charge(s, g.qm, 7);
    charge(s, g.qp, 7);
    s.dot(c[0], c[1], 3);
    s.sym(...add(polar(c, 44, th / 2), [3, 5]), 'θ', { italic: true, size: 16 });
    s.sym(g.qp[0] - 6, g.qp[1] - 14, '+<i>q</i>', { size: 16, anchor: 'end' });
    s.sym(g.qm[0] + 6, g.qm[1] + 26, '−<i>q</i>', { size: 16, anchor: 'start' });
    const pf = add(c, side, 34);
    s.sym(pf[0] - 4, pf[1] + 2, '<i>p⃗</i>', { size: 17, anchor: 'end' });
    s.sym(g.qp[0] + 8 + g.Fp[0] + 6, g.qp[1] + 6, '<i>qE⃗</i>', { size: 16, anchor: 'start' });
    s.sym(g.qm[0] - 8 + g.Fm[0] - 6, g.qm[1] + 6, '−<i>qE⃗</i>', { size: 16, anchor: 'end' });
    s.sym(10, 30, 'uniform field <i>E⃗</i>', { size: 15, anchor: 'start', color: C.slate });
    const res = resultBlock(s, ['<i>τ</i> = <i>pE</i> sin <i>θ</i>', 'turns <i>p⃗</i> toward <i>E⃗</i>'], { size: 15 });
    s.place(
      [{ t: 'Torque', hi: true, p: polar(c, tq, 140), at: [[14, 138, 'start'], [14, 132, 'start'], [14, 146, 'start'], [60, 70, 'start']] }],
      [res]
    );
    // the uniform field: equal parallel arrows on a grid, wherever they leave the rest clear
    const busy = (pts: P[]) => {
      const boxes: Rect[] = [...s.tags.map((t) => t.rect), ...s.labels.map((l) => l.rect)];
      const lines = LINES.get(s) ?? [];
      return pts.some((p) => boxes.some((r) => rectDist(r, p) < 12) || lines.some((ln) => ln.some((q) => len(p, q) < 14)) || s.points.some((q) => len(p, [q.x, q.y]) < 16));
    };
    const field: [P, P][] = [];
    FIELD23.rows.forEach((y) => FIELD23.cols.forEach((x) => {
      const a0: P = [x, y], a1: P = [x + FIELD23.len, y];
      if (!busy(samples(0, 1, 12).map((k) => add(a0, sub(a1, a0), k)))) field.push([a0, a1]);
    }));
    field.forEach(([a0, a1]) => arrow(s, a0, a1, { color: C.slate, w: 1.4 }));
    FIELD.set(s, field);
    return s;
  },
  check() {
    const { c, a, th, tq, t0, t1 } = DU, g = duGeo();
    // torque about the centre, in y-up coordinates: τ = Σ r × F
    const up = (v: P): P => [v[0], -v[1]];
    const torque = (gg: ReturnType<typeof duGeo>) => crossp(up(sub(gg.qp, c)), up(gg.Fp)) + crossp(up(sub(gg.qm, c)), up(gg.Fm));
    const tau = torque(g), tau0 = torque(duGeo(0)), tau90 = torque(duGeo(90));
    const pE = 2 * a * DU.F;
    const s = fig23.draw(fig23.cases[0]), field = FIELD.get(s) ?? [];
    const ang = Math.atan2(g.qm[1] - g.qp[1], g.qp[0] - g.qm[0]) / D2R;
    const sense = t1 < t0 ? -1 : 1;
    // Example 4 (p. 96): p = 4 × 10⁻⁹ C m, E = 2 × 10⁴ N C⁻¹, I = 1.0 × 10⁻⁶ kg m², released at 90°
    const pEx = 4e-9 * 2e4, w = Math.sqrt((2 * pEx) / 1e-6);
    return [
      [`The dipole runs from −q to +q at θ = ${fmt(ang, 2)}° to the field, its centre midway (read back from the drawing)`, close(ang, th, 1e-9) && close(len(c, g.qp), len(c, g.qm), 1e-9)],
      ['The forces qE⃗ (on +q, along E⃗) and −qE⃗ (on −q, against E⃗) are equal and opposite: no net force', close(g.Fp[0] + g.Fm[0], 0) && close(g.Fp[1] + g.Fm[1], 0) && g.Fp[0] > 0 && close(g.Fp[1], 0)],
      [`Their torque about the centre, r × F summed, has size ${fmt(Math.abs(tau), 1)} = (2a)(qE) sin θ = pE sin θ = ${fmt(pE * Math.sin(th * D2R), 1)} (px units)`, close(Math.abs(tau), pE * Math.sin(th * D2R), 1e-9)],
      ['It is clockwise, decreasing θ: it turns p⃗ toward E⃗, and the curved arrow runs the same way', tau < 0 && sense < 0],
      [`The same construction gives no torque at θ = 0 (aligned, stable, U = −pE) and the most, pE, at 90°; U(θ) = −pE cos θ = ${fmt(-Math.cos(th * D2R), 3)} pE at the drawn angle`, close(tau0, 0, 1e-9) && close(Math.abs(tau90), pE, 1e-9) && Math.abs(tau) < Math.abs(tau90)],
      [`The field is uniform: ${field.length} arrows, all the same length and all along E⃗`, field.length >= 8 && field.every(([p0, p1]) => close(len(p0, p1), FIELD23.len) && close(p0[1], p1[1]) && p1[0] > p0[0])],
      [`Example 4: pE = ${sci(pEx, 0)} J; swung from 90° to 0 it gains ½Iω² = pE, ω = ${fmt(w, 1)} rad s⁻¹ (the book's 12.6)`, fmt(w, 1) === '12.6'],
      [`The turning arrow circles the centre at ${tq} px, clear of the charges`, tq < a],
      clearCheck(s),
      labelsApart(s),
    ];
  },
};
const FIELD23 = { rows: [62, 124, 186, 248, 310], cols: [10, 92, 174, 256], len: 40 };
const FIELD = new WeakMap<Sketch, [P, P][]>();

/* ===================================================================== */
/* Figure 2.4 · parallel-plate capacitor on a battery (topic 03)           */
/* ===================================================================== */
/**
 * Plates L = 180 px long, d = 100 px apart; the battery's long (+) plate is
 * wired to the upper plate. The field between is drawn as equal arrows on an
 * even spacing (nine slots, the middle three left for E⃗ = σ/ε₀), from + to −.
 */
const PC = { x0: 112, x1: 304, top: 58, bot: 158, th: 5, bx: 50, slots: 9, gapSlots: [3, 4, 5], edge: 10 };
const pcArrows = () => {
  const { x0, x1, top, bot, th, slots, gapSlots, edge } = PC;
  const dx = (x1 - x0 - 2 * edge) / (slots - 1);
  return samples(0, slots - 1, slots - 1).filter((i) => !gapSlots.includes(i)).map((i): [P, P] => [[x0 + edge + i * dx, top + th + 1.5], [x0 + edge + i * dx, bot - th - 1.5]]);
};
/** The d marker: beside the plates, from one plate's mid-line to the other's. */
const pcD = (): [P, P] => [[318, PC.top + PC.th / 2], [318, PC.bot - PC.th / 2]];
/** Example 1 (p. 103): A = 200 cm², d = 1.0 mm, V = 50 V. */
const EX1C = { A: 200e-4, d: 1.0e-3, V: 50 };
const fig24: Diagram = {
  id: 'p12-02-fig-2.4',
  topic: 2,
  name: 'Parallel-plate capacitor',
  cases: [{ chip: 'Plates on a battery', cap: 'Parallel-plate capacitor connected to a battery <i>V</i>: plates of area <i>A</i> and gap <i>d</i> carry +<i>Q</i> (upper) and −<i>Q</i> (lower), so <i>σ</i> = <i>Q</i>/<i>A</i> and the uniform field between them is <i>E</i> = <i>σ</i>/ε<sub>0</sub>, directed from + to −.' }],
  draw() {
    const s = new Sketch(W, 226);
    const { x0, x1, top, bot, th, bx } = PC;
    const mid = (top + bot) / 2;
    // plates, as outlines
    box(s, [x0, top, x1, top + th], { w: 1.8 });
    box(s, [x0, bot - th, x1, bot], { w: 1.8 });
    // the battery: long (+) plate above, short (−) below
    const b = battery(s, bx, mid - 8);
    wire(s, [[x0, top + th / 2], [bx, top + th / 2], b.plus]);
    wire(s, [b.minus, [bx, bot - th / 2], [x0, bot - th / 2]]);
    // the field, + to −
    pcArrows().forEach(([a, b]) => arrow(s, a, b, { color: C.mari, w: 2 }));
    // d, on the right
    const [d0, d1] = pcD();
    measure(s, d0, d1, C.slate);
    s.sym(326, mid + 6, '<i>d</i>', { size: 17, anchor: 'start' });
    s.sym(bx - 22, mid + 4, '<i>V</i>', { size: 18, anchor: 'end' });
    s.sym((x0 + x1) / 2, mid + 6, '<i>E⃗</i> = <i>σ</i>/ε<sub>0</sub>', { size: 15, color: C.amber });
    s.sym(88, top - 8, '+<i>Q</i>', { size: 16 });
    s.sym(88, bot + 22, '−<i>Q</i>', { size: 16 });
    s.sym((x0 + x1) / 2, top - 12, '+<i>σ</i>, plate area <i>A</i>', { size: 16 });
    s.sym((x0 + x1) / 2, bot + 22, '−<i>σ</i>', { size: 16 });
    s.sym((x0 + x1) / 2, bot + 50, '<i>σ</i> = <i>Q</i>/<i>A</i>', { size: 17 });
    return s;
  },
  check() {
    const { top, bot, th, x0, bx } = PC, ar = pcArrows();
    const s = fig24.draw(fig24.cases[0]);
    const mid = (top + bot) / 2, plus: P = [bx, mid - 8], minus: P = [bx, mid + 4];
    const net = nodes(s, { battery_plus: plus, battery_minus: minus, upper_plate: [x0, top + th / 2], lower_plate: [x0, bot - th / 2] });
    const xs = ar.map(([a]) => a[0]);
    const steps = xs.slice(1).map((x, i) => x - xs[i]);
    const base = Math.min(...steps);
    const { A, d, V } = EX1C;
    const C0 = (EPS0 * A) / d, Q = C0 * V, sigma = Q / A, E = sigma / EPS0;
    return [
      [`The field is uniform: ${ar.length} arrows, all vertical and the same length (${fmt(ar[0][1][1] - ar[0][0][1], 1)} px)`, ar.every(([a, b]) => close(a[0], b[0]) && close(b[1] - a[1], ar[0][1][1] - ar[0][0][1]))],
      ['They stand on one even spacing (the middle slots left for the E⃗ = σ/ε₀ label)', steps.every((st) => close(st / base, Math.round(st / base), 1e-9))],
      ['They point down, from the + plate to the − plate, inside the gap', ar.every(([a, b]) => b[1] > a[1] && a[1] > top + th && b[1] < bot - th)],
      ['Read off the wires: the battery’s long (+) plate is wired to the upper plate (+Q), its short (−) plate to the lower (−Q)', sameNodes(net, [['battery_plus', 'upper_plate'], ['battery_minus', 'lower_plate']])],
      [`d is marked plate to plate, beside them: ${fmt(pcD()[1][1] - pcD()[0][1], 1)} px from one plate’s mid-line to the other’s`, pcD()[0][0] > PC.x1 && close(pcD()[0][1], top + th / 2) && close(pcD()[1][1], bot - th / 2) && close(pcD()[0][0], pcD()[1][0])],
      [`Example 1: A = 200 cm², d = 1.0 mm: C₀ = ε₀A/d = ${fmt(C0 * 1e12, 0)} pF (the book's 177 pF); on 50 V, Q = C₀V = ${fmt(Q * 1e9, 2)} nC (the book's 8.85 nC)`, fmt(C0 * 1e12, 0) === '177' && fmt(Q * 1e9, 2) === '8.85'],
      [`Then σ = Q/A = ${sci(sigma)} C m⁻², and E = σ/ε₀ = ${sci(E)} V m⁻¹ = V/d, the same field`, close(E, V / d, 1e-6)],
      clearCheck(s),
      labelsApart(s),
    ];
  },
};

/* ===================================================================== */
/* Figure 2.5 · Gaussian pillbox at a conductor's surface (topic 04)       */
/* ===================================================================== */
/**
 * The pillbox's side walls stand where a + sign would, and those two signs are
 * left out: walls drawn midway between two signs (160, 220) had 5 px either
 * side, squeezed between the + arms (Android review, 2026-10-22). Now each
 * wall has a full 15 px to the sign on either side.
 */
const PB = { surf: 160, cond: [40, 160, 300, 262] as Rect, box: [150, 112, 230, 208] as Rect, plusY: 148, plusDx: 20, plusArm: 5, E0: 138, E1: 52 };
const plusXs = () => samples(0, 12, 12).map((i) => 50 + i * PB.plusDx).filter((x) => x !== PB.box[0] && x !== PB.box[2]);
/** Topic 04, Example 1 (p. 109): a conducting sphere, R = 0.10 m, Q = 2 μC; Practice 3: σ = 2 × 10⁻⁶ C m⁻². */
const EX1S = { R: 0.1, Q: 2e-6, sigma3: 2e-6 };
const fig25: Diagram = {
  id: 'p12-02-fig-2.5',
  topic: 3,
  name: 'Gaussian pillbox at a conductor',
  cases: [{ chip: 'Pillbox', cap: 'Gaussian pillbox straddling the surface of a charged conductor. The outer cap of area Δ<i>S</i> has field <i>E</i> normal to the surface; the inner cap lies where <i>E</i> = 0; the side walls carry no flux. The enclosed charge is <i>σ</i> Δ<i>S</i>.' }],
  draw() {
    const s = new Sketch(W, 344);
    const { cond, box: bx, plusY, E0, E1 } = PB;
    box(s, cond, { w: 2.4 });
    const arm = PB.plusArm;
    plusXs().forEach((x) => { path(s, [[x - arm, plusY], [x + arm, plusY]], { w: 1.6 }); path(s, [[x, plusY - arm], [x, plusY + arm]], { w: 1.6 }); });
    box(s, bx, { color: C.mari, w: 2.4, dash: 'dash' });
    const cx = (bx[0] + bx[2]) / 2;
    arrow(s, [cx, E0], [cx, E1], { w: 2.4 });
    s.sym(cx + 12, E1 + 20, '<i>E⃗</i>', { size: 18, anchor: 'start' });
    s.sym(bx[2] + 8, bx[1] + 6, 'Δ<i>S</i> (top cap)', { size: 15, anchor: 'start', color: C.amber });
    s.sym(bx[0] - 8, bx[3] + 6, 'Δ<i>S</i> (inside)', { size: 15, anchor: 'end', color: C.amber });
    s.sym(cx, 236, '<i>E</i> = 0 inside', { size: 15, color: C.slate });
    s.sym(128, 120, '<i>σ</i>', { size: 17, anchor: 'start' });
    const res = resultBlock(s, ['∮<i>E⃗</i> · d<i>A⃗</i> = <i>E</i> Δ<i>S</i> = <i>σ</i> Δ<i>S</i>/ε<sub>0</sub>'], { size: 15 });
    s.place(
      [
        { t: 'Gaussian pillbox', hi: true, p: [bx[0], bx[1] + 14], at: [[8, 52, 'start'], [8, 46, 'start']] },
        // the dot on the surface, between two + signs (it sat on one), its line rising between them
        { t: 'Surface charge', p: [80, PB.surf], at: [[8, 104, 'start'], [8, 100, 'start']] },
        // just under the conductor, clear of the result box (it nearly touched it at y 292)
        { t: 'Conductor', p: [80, cond[3]], at: [[10, 272, 'start'], [10, 276, 'start'], [10, 292, 'start']] },
      ],
      [res]
    );
    return s;
  },
  check() {
    const { surf, cond, box: bx, E0, E1 } = PB;
    const cx = (bx[0] + bx[2]) / 2, xs = plusXs();
    const { R, Q, sigma3 } = EX1S;
    const sigma = Q / (4 * Math.PI * R * R), E = sigma / EPS0;
    // flux through each face of the drawn pillbox, with E = σ/ε₀ outward above the surface and 0 below
    const dS = 1;
    const Eof = (y: number): P => (y < surf ? [0, -1] : [0, 0]); // y-down: the field points up
    const flux = { top: dotp(Eof(bx[1]), [0, -1]) * dS, bottom: dotp(Eof(bx[3]), [0, 1]) * dS, sides: [bx[1] + 1, surf - 1, surf + 1, bx[3] - 1].map((y) => dotp(Eof(y), [1, 0]) + dotp(Eof(y), [-1, 0])) };
    return [
      [`The pillbox straddles the surface: its outer cap ${surf - bx[1]} px above it, its inner cap ${bx[3] - surf} px below, inside the metal`, bx[1] < surf && bx[3] > surf && bx[3] < cond[3] && bx[0] > cond[0] && bx[2] < cond[2]],
      [`Its two caps are the same width (${bx[2] - bx[0]} px), so each has the same area ΔS`, bx[2] - bx[0] > 0],
      ['E⃗ is drawn normal to the surface (straight up), from inside the box out through the outer cap, starting above the surface', cx > bx[0] && cx < bx[2] && E1 < bx[1] && E0 > bx[1] && E0 < PB.plusY - 5],
      [`The surface charge sits on the surface only (${xs.length} + signs along it)`, xs.every((x) => x > cond[0] && x < cond[2]) && Math.abs(PB.plusY - surf) <= 14],
      [`The pillbox's side walls are clear of the + signs: ${Math.min(...xs.flatMap((x) => [Math.abs(x - bx[0]), Math.abs(x - bx[2])])) - PB.plusArm} px at the closest, with + signs inside it and outside it`, xs.every((x) => Math.abs(x - bx[0]) - PB.plusArm >= 10 && Math.abs(x - bx[2]) - PB.plusArm >= 10) && xs.some((x) => x > bx[0] && x < bx[2]) && xs.some((x) => x < bx[0])],
      [`The "Surface charge" line ends between two + signs, not on one (${Math.min(...xs.map((x) => Math.abs(x - 80))) - PB.plusArm} px clear)`, xs.every((x) => Math.abs(x - 80) - PB.plusArm >= 4)],
      ['Flux: E ΔS out of the outer cap, 0 through the inner cap (E = 0 in the metal), 0 through the side walls (E runs along them)', close(flux.top, dS) && close(flux.bottom, 0) && flux.sides.every((f) => close(f, 0))],
      ['So EΔS = σΔS/ε₀: E = σ/ε₀ just outside, twice the isolated sheet’s σ/2ε₀', close(sigma / EPS0, 2 * (sigma / (2 * EPS0)))],
      [`Example 1 (R = 0.10 m, Q = 2 μC): σ = Q/4πR² = ${sci(sigma)} C m⁻², σ/ε₀ = ${sci(E)} N C⁻¹ = kQ/R² (the book's 1.8 × 10⁶)`, Math.abs(E / ((K * Q) / R ** 2) - 1) < 0.002 && fmt(E / 1e6, 1) === '1.8'],
      [`Practice 3: σ = 2 × 10⁻⁶ C m⁻² gives E = σ/ε₀ = ${sci(sigma3 / EPS0, 1)} N C⁻¹ (the book's 2.3 × 10⁵)`, fmt(sigma3 / EPS0 / 1e5, 1) === '2.3'],
      clearCheck(fig25.draw(fig25.cases[0])),
      labelsApart(fig25.draw(fig25.cases[0])),
    ];
  },
};

/* ===================================================================== */
/* Figures 2.6 and 2.7 · capacitors in series and in parallel (topic 05)   */
/* ===================================================================== */
/** Example 1 (p. 117): 2, 3 and 6 μF; series gives 1 μF, parallel 11 μF. */
const EX1N = [2, 3, 6];

/**
 * Series: the wire is a chain of nodes. Node 0 is the battery's + terminal,
 * node k the conductor joining capacitor k's right plate to capacitor k+1's
 * left plate, the last node the − terminal.
 */
const SE = { top: 92, bot: 174, bx: 44, xs: [112, 194, 276], gap: 9, ph: 20, right: 318 };
const fig26: Diagram = {
  id: 'p12-02-fig-2.6',
  topic: 4,
  name: 'Capacitors in series',
  cases: [{ chip: 'Series', cap: 'Capacitors <i>C</i><sub>1</sub>, <i>C</i><sub>2</sub>, <i>C</i><sub>3</sub> in series across a battery <i>V</i>. Each carries the same charge <i>Q</i> (+<i>Q</i> on its left plate, −<i>Q</i> on its right plate) and the voltages add: <i>V</i> = <i>V</i><sub>1</sub> + <i>V</i><sub>2</sub> + <i>V</i><sub>3</sub>.' }],
  draw() {
    const s = new Sketch(W, 250);
    const { top, bot, bx, xs, gap, ph, right } = SE;
    const by = (top + bot) / 2 - 10;
    const b = battery(s, bx, by);
    // the wire: + terminal up to the top line, through each capacitor, round and back to the − terminal
    wire(s, [b.plus, [bx, top], [xs[0] - gap, top]]);
    xs.slice(0, -1).forEach((x, i) => wire(s, [[x + gap, top], [xs[i + 1] - gap, top]]));
    wire(s, [[xs[2] + gap, top], [right, top], [right, bot], [bx, bot], b.minus]);
    xs.forEach((x, i) => {
      path(s, [[x - gap, top - ph], [x - gap, top + ph]], { w: 3.2 });
      path(s, [[x + gap, top - ph], [x + gap, top + ph]], { w: 3.2 });
      s.sym(x, top - ph - 34, `<i>C</i><sub>${i + 1}</sub>`, { size: 17 });
      s.sym(x - gap - 4, top - ph - 8, '+<i>Q</i>', { size: 15, anchor: 'end', color: C.amber });
      s.sym(x + gap + 4, top - ph - 8, '−<i>Q</i>', { size: 15, anchor: 'start', color: C.amber });
      measure(s, [x - gap - 6, top + ph + 10], [x + gap + 6, top + ph + 10], C.ink);
      s.sym(x, top + ph + 34, `<i>V</i><sub>${i + 1}</sub>`, { size: 16 });
    });
    s.sym(bx - 20, by + 12, '<i>V</i>', { size: 18, anchor: 'end' });
    s.sym(bx + 20, by - 2, '+', { size: 14, anchor: 'start', color: C.slate });
    s.sym(bx + 14, by + 22, '−', { size: 14, anchor: 'start', color: C.slate });
    resultBlock(s, ['<i>V</i> = <i>V</i><sub>1</sub> + <i>V</i><sub>2</sub> + <i>V</i><sub>3</sub> = <i>Q</i>(1/<i>C</i><sub>1</sub> + 1/<i>C</i><sub>2</sub> + 1/<i>C</i><sub>3</sub>)'], { size: 14 });
    return s;
  },
  check() {
    const { xs, gap, bx, top, bot } = SE;
    const s = fig26.draw(fig26.cases[0]);
    const by = (top + bot) / 2 - 10;
    const terms: Record<string, P> = { plus: [bx, by], minus: [bx, by + 12] };
    xs.forEach((x, i) => { terms[`L${i + 1}`] = [x - gap, top]; terms[`R${i + 1}`] = [x + gap, top]; });
    const net = nodes(s, terms);
    const Cs = 1 / EX1N.reduce((a, c) => a + 1 / c, 0);
    const V = 12, Q = Cs * V, Vi = EX1N.map((c) => Q / c);
    return [
      [`Read off the wires, one chain: ${net.map((g) => `{${g.join(', ')}}`).join(' ')}: the + terminal feeds C₁’s left plate, each right plate is wired only to the next left plate, C₃’s right plate returns to −`, sameNodes(net, [['L1', 'plus'], ['L2', 'R1'], ['L3', 'R2'], ['R3', 'minus']])],
      ['So the two middle conductors touch no terminal: each starts neutral and stays so (−Q on one plate, +Q on the next), and every capacitor holds the same Q, + on its left plate', net.filter((g) => !g.includes('plus') && !g.includes('minus')).every((g) => g.length === 2 && g.some((t) => t.startsWith('R')) && g.some((t) => t.startsWith('L')))],
      [`Example 1: 2, 3 and 6 μF in series give 1/C = 1/2 + 1/3 + 1/6, C = ${fmt(Cs, 3)} μF (the book's 1 μF), below the smallest`, close(Cs, 1, 1e-12) && Cs < Math.min(...EX1N)],
      [`On any V (say ${V} V): Q = ${fmt(Q, 2)} μC on each, V₁, V₂, V₃ = ${Vi.map((v) => fmt(v, 2)).join(', ')} V, which add to V = Q(1/C₁ + 1/C₂ + 1/C₃)`, close(Vi.reduce((a, v) => a + v, 0), V, 1e-12) && close(Q * EX1N.reduce((a, c) => a + 1 / c, 0), V, 1e-12)],
      ['The biggest share of V falls on the smallest capacitor (V_i = Q/C_i)', Vi[0] > Vi[1] && Vi[1] > Vi[2]],
      clearCheck(s),
      labelsApart(s),
    ];
  },
};

/** Parallel: two rails. Every capacitor's top plate is on the top rail (+ terminal), its bottom plate on the bottom rail (− terminal). */
/**
 * The capacitors 91 apart, not 88: at 88 each "+Q" sat 11 px (on the phone)
 * after the C before it and read as one run, "C₁+Q₂" (Android review,
 * 2026-10-22). Neither label can give way: the C is LABEL_GAP off its plates
 * and the ±Q were moved off theirs for reading as touching them. C₃ ends at
 * the frame, so the first two move left, into the room before C₁.
 */
const PA = { top: 70, bot: 182, bx: 34, xs: [116, 207, 298], gap: 7, pw: 17 };
const fig27: Diagram = {
  id: 'p12-02-fig-2.7',
  topic: 4,
  name: 'Capacitors in parallel',
  cases: [{ chip: 'Parallel', cap: 'Capacitors <i>C</i><sub>1</sub>, <i>C</i><sub>2</sub>, <i>C</i><sub>3</sub> in parallel across a battery <i>V</i>. Each has the same voltage <i>V</i> and its own charge <i>Q</i><sub>1</sub>, <i>Q</i><sub>2</sub>, <i>Q</i><sub>3</sub>, so <i>Q</i> = <i>Q</i><sub>1</sub> + <i>Q</i><sub>2</sub> + <i>Q</i><sub>3</sub>.' }],
  draw() {
    const s = new Sketch(W, 272);
    const { top, bot, bx, xs, gap, pw } = PA;
    const mid = (top + bot) / 2, by = mid - 6;
    const b = battery(s, bx, by);
    wire(s, [b.plus, [bx, top], [xs[2], top]]);
    wire(s, [b.minus, [bx, bot], [xs[2], bot]]);
    xs.forEach((x, i) => {
      wire(s, [[x, top], [x, mid - gap]]);
      wire(s, [[x, mid + gap], [x, bot]]);
      path(s, [[x - pw, mid - gap], [x + pw, mid - gap]], { w: 3.2 });
      path(s, [[x - pw, mid + gap], [x + pw, mid + gap]], { w: 3.2 });
      s.dot(x, top, 3.2);
      s.dot(x, bot, 3.2);
      s.sym(x - pw - 8, mid - gap + 2, `+<i>Q</i><sub>${i + 1}</sub>`, { size: 13, anchor: 'end' });
      s.sym(x - pw - 8, mid + gap + 11, `−<i>Q</i><sub>${i + 1}</sub>`, { size: 13, anchor: 'end' });
      s.sym(x + pw + 4, mid + 6, `<i>C</i><sub>${i + 1}</sub>`, { size: 16, anchor: 'start' });
    });
    s.sym(bx - 20, by + 12, '<i>V</i>', { size: 18, anchor: 'end' });
    s.sym(bx + 19, by - 3, '+', { size: 14, anchor: 'start', color: C.slate });
    s.sym(bx + 13, by + 23, '−', { size: 14, anchor: 'start', color: C.slate });
    s.sym(W / 2, top - 30, 'every capacitor has the same voltage <i>V</i>', { size: 15, color: C.amber });
    resultBlock(s, ['<i>Q</i> = <i>Q</i><sub>1</sub> + <i>Q</i><sub>2</sub> + <i>Q</i><sub>3</sub> = (<i>C</i><sub>1</sub> + <i>C</i><sub>2</sub> + <i>C</i><sub>3</sub>)<i>V</i>'], { size: 15 });
    return s;
  },
  check() {
    const { xs, bx, top, bot, gap } = PA;
    const s = fig27.draw(fig27.cases[0]);
    const mid = (top + bot) / 2, by = mid - 6;
    const terms: Record<string, P> = { plus: [bx, by], minus: [bx, by + 12] };
    xs.forEach((x, i) => { terms[`T${i + 1}`] = [x, mid - gap]; terms[`B${i + 1}`] = [x, mid + gap]; });
    const net = nodes(s, terms);
    const Cp = EX1N.reduce((a, c) => a + c, 0);
    const V = 12, Qi = EX1N.map((c) => c * V);
    return [
      [`Read off the wires, two nodes: ${net.map((g) => `{${g.join(', ')}}`).join(' ')}: every upper plate on the + rail, every lower plate on the − rail`, sameNodes(net, [['T1', 'T2', 'T3', 'plus'], ['B1', 'B2', 'B3', 'minus']])],
      ['So each has the full battery voltage V across it (+ on its upper plate), with its own charge Q_i = C_iV', xs.every((x) => x > bx) && top < bot],
      [`Example 1: 2, 3 and 6 μF in parallel give C = ${Cp} μF (the book's 11 μF), above the largest`, Cp === 11 && Cp > Math.max(...EX1N)],
      [`On any V (say ${V} V): Q₁, Q₂, Q₃ = ${Qi.join(', ')} μC, which add to Q = (C₁ + C₂ + C₃)V = ${Cp * V} μC`, close(Qi.reduce((a, q) => a + q, 0), Cp * V, 1e-12)],
      clearCheck(s),
      labelsApart(s),
    ];
  },
};

export const DIAGRAMS_PHYSICS_12_02: Diagram[] = [fig21, fig22, fig23, fig24, fig25, fig26, fig27];
