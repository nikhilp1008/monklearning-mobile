import { C, LABEL_GAP, Rect, Sketch, r1, mathW } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * PHYSICS CLASS 11, CHAPTER 12 (Kinetic Theory): every drawing of the Master
 * Reference book, redrawn. The chapter prints no "Figure 12.N" numbers, so all
 * five are unnumbered drawings, one per page: the force and potential-energy
 * curves (p. 822, topic 01), a molecule striking the wall of a cubical box
 * (p. 836, topic 03), directed against isotropic gas (p. 839, topic 03, inside
 * Example 4), the Maxwell–Boltzmann distribution (p. 849, topic 04) and the
 * degrees of freedom by molecular structure (p. 857, topic 05). Topic 02 and
 * Additional Topics A–E (pp. 826–833, 862–882) have none: they are text,
 * typeset equations and tables (pp. 827, 851, 864). The chapter's own flow
 * chart sits in the Chapter Summary & Master Formula Sheet (p. 859), which the
 * app does not carry.
 *
 * Each drawing is computed from the physics, never placed by eye: the
 * Lennard-Jones pair U = ε[(r₀/r)¹² − 2(r₀/r)⁶] with F = −dU/dr, the cube's
 * twelve edges and the wall's face from 3-D corners, a directed gas of four
 * molecules each way against an isotropic set of eight velocities whose mean
 * squares are exactly v²/3 along every axis, the Maxwell distribution
 * normalised and integrated for its three speeds, and the molecules' modes
 * counted from their 3-D axes. The book's Errata (pp. 1002–1003) lists five
 * defects in these drawings; each is corrected here and checked: no label is
 * crossed by a curve or sits on an edge, four molecules move each way, the
 * three speeds are labelled apart and in order, and each diatomic panel has
 * its two rotations with the vibration marker clear of the atoms.
 */

const W = 340;
type P = [number, number];
type V3 = [number, number, number];
const D2R = Math.PI / 180;
const close = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) < tol;
const fmt = (n: number, d = 2) => String(+n.toFixed(d)).replace('-', '−');
const len = (a: P, b: P) => Math.hypot(b[0] - a[0], b[1] - a[1]);
const add = (a: P, b: P, k = 1): P => [a[0] + k * b[0], a[1] + k * b[1]];
/** Simpson's rule on [a, b] with n (even) strips. */
function simpson(f: (x: number) => number, a: number, b: number, n = 2000) {
  const h = (b - a) / n;
  let s = f(a) + f(b);
  for (let i = 1; i < n; i++) s += f(a + i * h) * (i % 2 ? 4 : 2);
  return (s * h) / 3;
}
/** The root of a function that changes sign once on [a, b]. */
function bisect(f: (x: number) => number, a: number, b: number) {
  let lo = a, hi = b;
  const flo = f(lo);
  for (let i = 0; i < 200; i++) { const m = (lo + hi) / 2; if (f(m) * flo > 0) lo = m; else hi = m; }
  return (lo + hi) / 2;
}

/* ---------- drawing helpers ---------- */
type Stroke = { color?: string; w?: number; dash?: 'dash' | 'dot'; free?: boolean };
const dashOf = (d?: Stroke['dash']) => (d === 'dash' ? ' stroke-dasharray="6 4"' : d === 'dot' ? ' stroke-dasharray="1.5 3.5"' : '');

/**
 * Every line a label must keep clear of (outlines, curves, arrows), by sketch:
 * `clearance` measures each tag and label against them. Axes and the guides
 * that carry their own tick values are left out (`free`).
 */
const LINES = new WeakMap<Sketch, P[][]>();
const keep = (s: Sketch, pts: P[]) => { const l = LINES.get(s) ?? []; l.push(pts); LINES.set(s, l); };
/** An open line through points: ink, rounded joins. */
function path(s: Sketch, pts: P[], o: Stroke = {}) {
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ');
  s.add(`<path d="${d}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}" stroke-linejoin="round" stroke-linecap="round"${dashOf(o.dash)}/>`);
  if (!o.free) keep(s, pts);
}
/** An arrow that labels keep clear of. */
function arrow(s: Sketch, a: P, b: P, o: { color?: string; w?: number; dash?: boolean; free?: boolean } = {}) {
  s.vec(a[0], a[1], b[0], b[1], { color: o.color, w: o.w, dash: o.dash });
  if (!o.free) keep(s, [a, b]);
}
/** A molecule or atom: an ink ring, white inside; tags keep clear of it. */
function ball(s: Sketch, c: P, r: number, o: { color?: string; w?: number } = {}) {
  s.point(c[0], c[1], r, `<circle cx="${r1(c[0])}" cy="${r1(c[1])}" r="${r1(r)}" fill="#fff" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.8}"/>`);
}
/** Distance from a point to a rectangle (0 inside it). */
const rectDist = (r: Rect, p: P) => Math.hypot(Math.max(r[0] - p[0], 0, p[0] - r[2]), Math.max(r[1] - p[1], 0, p[1] - r[3]));
/** How far every tag and label stays from every kept line, sampled each half pixel. */
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
/** The closest any kept line comes to one named tag or label. */
function gapTo(s: Sketch, name: string): number {
  const r = s.tags.find((t) => t.name === name)?.rect ?? s.labels.find((l) => l.text === name)?.rect;
  if (!r) return -1;
  let gap = Infinity;
  for (const pts of LINES.get(s) ?? []) {
    for (let i = 0; i < pts.length - 1; i++) {
      const a = pts[i], b = pts[i + 1], n = Math.max(1, Math.ceil(len(a, b) * 2));
      for (let k = 0; k <= n; k++) gap = Math.min(gap, rectDist(r, [a[0] + ((b[0] - a[0]) * k) / n, a[1] + ((b[1] - a[1]) * k) / n]));
    }
  }
  return gap;
}
/** The check every drawing makes on its own layout. */
const clearCheck = (s: Sketch): Check => {
  const { gap, what } = clearance(s);
  return [`Every tag and label stays at least ${LABEL_GAP} px clear of every line it does not name: the closest is "${what}", ${fmt(gap, 1)} px`, gap >= LABEL_GAP - 1e-9];
};
/** Do two labels (by their text) stay at least LABEL_GAP apart? */
const labelsApart = (s: Sketch, texts: string[]) => {
  const rs = texts.map((t) => s.labels.find((l) => l.text === t)!.rect);
  return rs.every((a, i) => rs.every((b, j) => j <= i || a[2] + LABEL_GAP <= b[0] || b[2] + LABEL_GAP <= a[0] || a[3] + LABEL_GAP <= b[1] || b[3] + LABEL_GAP <= a[1]));
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

/**
 * A symbol or value in STIX, registered for the audit like Sketch.sym, but
 * measured with only the <i>/<sub>/<sup> markup removed: Sketch.sym's estimate
 * swallows a "<" that comes before a tag ("r < r₀"), so it would measure short.
 */
function symText(s: Sketch, x: number, y: number, html: string, o: { size?: number; anchor?: 'start' | 'middle' | 'end'; color?: string } = {}) {
  const size = o.size ?? 15, anchor = o.anchor ?? 'middle';
  const plain = html.replace(/<\/?(?:i|sub|sup)>/g, '');
  const w = plain.length * size * 0.5, x0 = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w : x;
  s.labels.push({ text: plain, rect: [x0, y - size * 0.72, x0 + w, y + size * 0.22] });
  s.text(x, y, html, { size, anchor, color: o.color });
}

/* ---------- graphs ---------- */
/** Where (0, 0) of the graph sits on the drawing, and how many px one unit is along each axis. */
type Frame = { ox: number; oy: number; sx: number; sy: number };
const X = (f: Frame, u: number) => f.ox + u * f.sx;
const Y = (f: Frame, v: number) => f.oy - v * f.sy;
const at = (f: Frame, u: number, v: number): P => [X(f, u), Y(f, v)];
const uOf = (f: Frame, x: number) => (x - f.ox) / f.sx;
const vOf = (f: Frame, y: number) => (f.oy - y) / f.sy;
/** A function drawn as a smooth line, sampled finely; returns the drawn points. */
function curve(s: Sketch, f: Frame, fn: (u: number) => number, u0: number, u1: number, o: Stroke = {}): P[] {
  const n = 240, pts: P[] = [];
  for (let i = 0; i <= n; i++) { const u = u0 + ((u1 - u0) * i) / n; pts.push(at(f, u, fn(u))); }
  path(s, pts, o);
  return pts;
}
/** A key line: a short sample of a curve's stroke and its name in STIX. */
function keyLine(s: Sketch, x: number, y: number, html: string, o: Stroke) {
  path(s, [[x, y], [x + 22, y]], { ...o, free: true });
  s.sym(x + 28, y + 4.5, html, { size: 13, anchor: 'start' });
}

/* ===================================================================== */
/* p11-12-01-d1 · force and potential energy against separation (p. 822)  */
/* ===================================================================== */
/**
 * The Lennard-Jones pair, the book's own curve: in units of the equilibrium
 * separation r₀ (u = r/r₀) and the well depth ε, U(u) = u⁻¹² − 2u⁻⁶ and, in
 * units of ε/σ (σ = 2^(−1/6) r₀, where U = 0), F = −dU/d(r/σ) = 12·2^(−1/6)
 * (u⁻¹³ − u⁻⁷). F is plotted with the same number scale as U, as the book
 * does: its attractive well is 2.40 times deeper than U's.
 */
const S0 = 2 ** (-1 / 6);
const U1 = (u: number) => u ** -12 - 2 * u ** -6;
const F1 = (u: number) => 12 * S0 * (u ** -13 - u ** -7);
/** u runs 0.8 to 2.5 (as the book's frame), the value axis +4 to −3. */
const R1 = { u0: 0.8, u1: 2.5, top: 4, bot: -3 };
const F11: Frame = { ox: 44 - 0.8 * (286 / 1.7), oy: 172, sx: 286 / 1.7, sy: 28 };
/** Where each curve leaves the top of the frame (it rises without limit at small r). */
const uTopU = bisect((u) => U1(u) - R1.top, 0.8, 1);
const uTopF = bisect((u) => F1(u) - R1.top, 0.8, 1);
/** The force well: dF/du = 0 at u⁶ = 13/7. */
const uFmin = (13 / 7) ** (1 / 6);
/** The points each region's tag names on the force curve. */
const uRep = bisect((u) => F1(u) - 2.6, 0.8, 1), uAtt = 1.3;
const d1: Diagram = {
  id: 'p11-12-01-d1',
  topic: 0,
  name: 'Intermolecular force and potential energy vs separation',
  cases: [{ chip: 'Force and energy', cap: 'Intermolecular force (solid) and potential energy (dashed) versus separation <i>r</i>; the net force is zero and the potential energy is a minimum at the equilibrium separation <i>r</i><sub>0</sub>.' }],
  draw() {
    const s = new Sketch(W, 306);
    const f = F11, axX = 40, r0 = X(f, 1), yTop = Y(f, R1.top), yBot = Y(f, R1.bot);
    s.vec(axX, yBot + 6, axX, yTop - 12, { color: C.grey, w: 1.3 });
    s.vec(axX, f.oy, W - 6, f.oy, { color: C.grey, w: 1.3 });
    s.sym(8, 24, 'force / potential energy', { size: 13.5, anchor: 'start' });
    s.sym(W - 6, 298, 'intermolecular separation <i>r</i>', { size: 13.5, anchor: 'end' });
    path(s, [[r0, yTop], [r0, yBot + 4]], { color: C.slate, w: 1, dash: 'dot', free: true });
    s.sym(r0, yBot + 22, '<i>r</i><sub>0</sub>', { size: 15 });
    curve(s, f, U1, uTopU, R1.u1, { w: 2, dash: 'dash' });
    curve(s, f, F1, uTopF, R1.u1, { w: 2.3 });
    keyLine(s, 170, 84, 'Force <i>F</i>(<i>r</i>)', { w: 2.3 });
    keyLine(s, 170, 106, 'Potential energy <i>U</i>(<i>r</i>)', { w: 2, dash: 'dash' });
    const eq: P = [r0, f.oy];
    s.point(eq[0], eq[1], 4.4, `<circle cx="${r1(eq[0])}" cy="${r1(eq[1])}" r="4.4" fill="${C.mari}"/>`);
    s.sym(184, 152, '<i>F</i> = 0, <i>U</i> minimum', { size: 14, anchor: 'start' });
    symText(s, 104, 86, '(<i>r</i> < <i>r</i><sub>0</sub>)', { size: 14, anchor: 'start' });
    symText(s, 242, 238, '(<i>r</i> > <i>r</i><sub>0</sub>)', { size: 14, anchor: 'start' });
    s.place([
      { t: 'Repulsion', p: at(f, uRep, F1(uRep)), at: [[92, 44, 'start'], [96, 44, 'start']] },
      { t: 'Equilibrium', hi: true, p: eq, own: eq, at: [[84, 136, 'start'], [86, 136, 'start']] },
      { t: 'Attraction', p: at(f, uAtt, F1(uAtt)), at: [[146, 222, 'start'], [146, 224, 'start']] },
    ]);
    return s;
  },
  check() {
    const f = F11, s = d1.draw(d1.cases[0]);
    const us = Array.from({ length: 401 }, (_, i) => uTopF + ((R1.u1 - uTopF) * i) / 400);
    const h = 1e-6, dU = (u: number) => (U1(u + h) - U1(u - h)) / (2 * h);
    const slope = us.every((u) => close(F1(u), -S0 * dU(u), 1e-5));
    const rep = us.filter((u) => u < 1 - 1e-9).every((u) => F1(u) > 0), att = us.filter((u) => u > 1 + 1e-9).every((u) => F1(u) < 0);
    const tagFrom = (t: string) => s.tags.find((g) => g.name === t)!.from!;
    const [ru] = [uOf(f, tagFrom('Repulsion')[0])], [au] = [uOf(f, tagFrom('Attraction')[0])];
    const eqAt = tagFrom('Equilibrium');
    return [
      [`F = −dU/dr at every sampled r: the force curve is the negative slope of the energy curve (r₀ = 2^(1/6) σ = ${fmt(1 / S0, 4)} σ)`, slope],
      [`At r₀ the force is zero (F = ${fmt(F1(1), 9)}) and the energy is a minimum: dU/dr = ${fmt(dU(1), 6)}, U(r₀) = ${fmt(U1(1), 3)} ε, lower than at r₀ ± 1%`, close(F1(1), 0, 1e-12) && close(dU(1), 0, 1e-6) && U1(1) < U1(0.99) && U1(1) < U1(1.01)],
      ['The force is repulsive (F > 0) everywhere for r < r₀ and attractive (F < 0) everywhere for r > r₀', rep && att],
      [`The marked point is (r₀, 0) and the dotted guide through it meets the energy curve at its lowest point: drawn at r = ${fmt(uOf(f, eqAt[0]), 6)} r₀, value ${fmt(vOf(f, eqAt[1]), 6)}`, close(uOf(f, eqAt[0]), 1, 1e-9) && close(vOf(f, eqAt[1]), 0, 1e-9) && us.every((u) => U1(u) >= U1(1) - 1e-12)],
      [`The attraction is strongest at r = (13/7)^(1/6) r₀ = ${fmt(uFmin, 3)} r₀, F = ${fmt(F1(uFmin), 3)} ε/σ, ${fmt(F1(uFmin) / U1(1), 2)} times the energy well's depth (the book's curve too)`, close((F1(uFmin + 1e-5) - F1(uFmin - 1e-5)) / 2e-5, 0, 1e-4) && F1(uFmin) < F1(uFmin - 0.02) && F1(uFmin) < F1(uFmin + 0.02)],
      [`The "Repulsion" tag names the force curve at r = ${fmt(ru, 3)} r₀ (< r₀, F > 0); "Attraction" names it at r = ${fmt(au, 3)} r₀ (> r₀, F < 0)`, ru < 1 && F1(ru) > 0 && au > 1 && F1(au) < 0],
      [`Both die away at large r: at 2.5 r₀, |F| = ${fmt(Math.abs(F1(2.5)), 4)} and |U| = ${fmt(Math.abs(U1(2.5)), 4)}, under 2% of their wells`, Math.abs(F1(2.5)) < 0.02 * Math.abs(F1(uFmin)) && Math.abs(U1(2.5)) < 0.02],
      [`Each curve leaves the frame at its top (+${R1.top}) and does not re-enter: U at r = ${fmt(uTopU, 3)} r₀, F at ${fmt(uTopF, 3)} r₀`, close(U1(uTopU), R1.top, 1e-9) && close(F1(uTopF), R1.top, 1e-9) && us.every((u) => F1(u) <= R1.top + 1e-9 && U1(u) <= R1.top + 1e-9 && F1(u) >= R1.bot)],
      [`Errata: the repulsion label is clear of the force curve (and every other line): ${fmt(gapTo(s, 'Repulsion'), 1)} px for the tag, ${fmt(gapTo(s, '(r < r0)'), 1)} px for its condition`, gapTo(s, 'Repulsion') >= LABEL_GAP && gapTo(s, '(r < r0)') >= LABEL_GAP],
      clearCheck(s),
    ];
  },
};

/* ===================================================================== */
/* p11-12-03-d1 · a molecule striking the wall of a cubical box (p. 836)  */
/* ===================================================================== */
/**
 * The cube [0, l]³ (l = 1) in oblique projection: x right, y up, z (depth)
 * back at 40°, shortened to 0.45. The wall the derivation follows is the face
 * x = l. The molecule's velocity lies in the x–y plane, as the book draws it:
 * v_x = 0.36 l and v_y = 0.16 l per unit time, v_z = 0.
 */
const G2 = { o: [30, 226] as P, s: 150, kd: 0.45, th: 40, mol: [0.3, 0.42, 0.5] as V3, v: [0.36, 0.16, 0] as V3, r: 7 };
const proj2 = ([x, y, z]: V3): P => {
  const { o, s, kd, th } = G2;
  return [o[0] + s * (x + z * kd * Math.cos(th * D2R)), o[1] - s * (y + z * kd * Math.sin(th * D2R))];
};
/** The cube's 12 edges as pairs of corners that differ in one coordinate. */
function cubeEdges(L: number): [V3, V3, number][] {
  const out: [V3, V3, number][] = [];
  for (const ax of [0, 1, 2]) {
    const [p, q] = [0, 1, 2].filter((k) => k !== ax);
    for (const u of [0, L]) for (const v of [0, L]) {
      const a: V3 = [0, 0, 0], b: V3 = [0, 0, 0];
      a[p] = u; a[q] = v; b[p] = u; b[q] = v; b[ax] = L;
      out.push([a, b, ax]);
    }
  }
  return out;
}
const unproject2 = (a: P, b: P, ax: number) => len(a, b) / (G2.s * (ax === 2 ? G2.kd : 1));
const isWall = ([a, b]: [V3, V3, number]) => a[0] === 1 && b[0] === 1;
const isFront = ([a, b]: [V3, V3, number]) => a[2] === 0 && b[2] === 0;
const vEnds = () => {
  const m = G2.mol, v = G2.v;
  const c = proj2(m), tip = proj2([m[0] + v[0], m[1] + v[1], m[2] + v[2]]);
  return { c, tip, vx: proj2([m[0] + v[0], m[1], m[2]]), vy: proj2([m[0], m[1] + v[1], m[2]]) };
};
const d2: Diagram = {
  id: 'p11-12-03-d1',
  topic: 2,
  name: 'A molecule striking the wall of a cubical box',
  cases: [{ chip: 'Molecule and wall', cap: 'A single molecule of velocity <i>v</i> (components <i>v</i><sub><i>x</i></sub>, <i>v</i><sub><i>y</i></sub>, <i>v</i><sub><i>z</i></sub>) striking the wall perpendicular to the <i>x</i>-axis of a cubical box.' }],
  draw() {
    const s = new Sketch(W, 270);
    const edges = cubeEdges(1);
    edges.filter((e) => !isWall(e) && !isFront(e)).forEach(([a, b]) => path(s, [proj2(a), proj2(b)], { color: C.slate, w: 1.3, dash: 'dash' }));
    edges.filter((e) => !isWall(e) && isFront(e)).forEach(([a, b]) => path(s, [proj2(a), proj2(b)], { w: 2 }));
    edges.filter(isWall).forEach(([a, b]) => path(s, [proj2(a), proj2(b)], { color: C.mari, w: 3 }));
    // the axes, outside the box's front corner
    const ax: P = [G2.o[0] - 16, G2.o[1] + 26];
    arrow(s, ax, [ax[0] + 42, ax[1]], { color: C.grey, w: 1.4 });
    arrow(s, ax, [ax[0], ax[1] - 42], { color: C.grey, w: 1.4 });
    s.sym(ax[0] + 48, ax[1] + 5, '<i>x</i>', { size: 15, anchor: 'start' });
    s.sym(ax[0], ax[1] - 50, '<i>y</i>', { size: 15 });
    const { c, tip, vx, vy } = vEnds();
    arrow(s, c, vx, { color: C.grey, w: 1.6, dash: true });
    arrow(s, c, vy, { color: C.grey, w: 1.6, dash: true });
    arrow(s, c, tip, { w: 2.2 });
    ball(s, c, G2.r);
    s.sym(tip[0] + 6, tip[1] - 4, '<i>v</i>', { size: 16, anchor: 'start' });
    s.sym(vx[0] + 2, vx[1] + 20, '<i>v</i><sub><i>x</i></sub>', { size: 15 });
    s.sym(vy[0] + 6, vy[1] + 2, '<i>v</i><sub><i>y</i></sub>', { size: 15, anchor: 'start' });
    s.sym(250, 150, '⊥ <i>x</i>', { size: 14, anchor: 'start' });
    s.sym(244, 170, '(area <i>A</i> = <i>l</i><sup>2</sup>)', { size: 14, anchor: 'start' });
    const wallMid = proj2([1, 0.62, 0.55]);
    s.place([
      { t: 'Wall', hi: true, p: wallMid, at: [[246, 112, 'start'], [246, 108, 'start']] },
      { t: 'Molecule', p: [c[0], c[1] + G2.r], own: c, at: [[c[0] - 20, 240, 'start'], [c[0] - 10, 240, 'start']] },
    ]);
    return s;
  },
  check() {
    const s = d2.draw(d2.cases[0]);
    const edges = cubeEdges(1);
    const lens = edges.map(([a, b, ax]) => unproject2(proj2(a), proj2(b), ax));
    const wall = edges.filter(isWall);
    const along = (ax: number) => wall.find((e) => e[2] === ax)!;
    const ey = along(1), ez = along(2);
    const vy3 = ey[1].map((x, k) => x - ey[0][k]), vz3 = ez[1].map((x, k) => x - ez[0][k]);
    const area = Math.hypot(vy3[1] * vz3[2] - vy3[2] * vz3[1], vy3[2] * vz3[0] - vy3[0] * vz3[2], vy3[0] * vz3[1] - vy3[1] * vz3[0]);
    const { c, tip, vx, vy } = vEnds();
    const sum: P = [vx[0] + vy[0] - c[0], vx[1] + vy[1] - c[1]];
    const m = G2.mol, v = G2.v, mass = 1;
    const dp = mass * -v[0] - mass * v[0];
    const tHit = (1 - m[0]) / v[0], tRound = (2 * 1) / v[0];
    const fx = (2 * mass * v[0]) / tRound;
    return [
      [`All 12 edges of the box, read back from the drawing, are l = 1: a cube, depth edges included`, lens.length === 12 && lens.every((e) => close(e, 1, 1e-9))],
      [`The marked wall is the face x = l (its 4 edges all at x = l), spanned by y and z, so it is perpendicular to x with area A = l² = ${fmt(area, 6)}`, wall.length === 4 && new Set(wall.map((e) => e[2])).size === 2 && !wall.some((e) => e[2] === 0) && close(area, 1, 1e-12)],
      ['The molecule is inside the box', m.every((q) => q > 0 && q < 1)],
      ['The velocity is drawn as the sum of its components: tip of v = tip of v_x + tip of v_y (v_z = 0 in the plane drawn)', close(sum[0], tip[0], 1e-9) && close(sum[1], tip[1], 1e-9) && v[2] === 0],
      ['v_x is drawn along x (perpendicular to the wall), v_y along y (parallel to it)', close(vx[1], c[1], 1e-9) && vx[0] > c[0] && close(vy[0], c[0], 1e-9) && vy[1] < c[1]],
      [`v_x points at the wall, so the molecule reaches it after (l − x)/v_x = ${fmt(tHit, 3)} time units`, v[0] > 0 && tHit > 0],
      [`Elastic bounce: v_x → −v_x, so Δp_x = (−mv_x) − (+mv_x) = ${fmt(dp, 2)} = −2mv_x, while v_y and the speed are unchanged`, close(dp, -2 * mass * v[0]) && close(Math.hypot(-v[0], v[1], v[2]), Math.hypot(...v))],
      [`It returns after Δt = 2l/v_x = ${fmt(tRound, 3)}, so the average force is 2mv_x/Δt = ${fmt(fx, 4)} = mv_x²/l`, close(fx, (mass * v[0] ** 2) / 1, 1e-12)],
      [`Errata: the wall's label sits clear of every edge of the cube (the book's sat on the dashed back edge): ${fmt(gapTo(s, 'Wall'), 1)} px, ${fmt(gapTo(s, '⊥ x'), 1)} px, ${fmt(gapTo(s, '(area A = l2)'), 1)} px`, ['Wall', '⊥ x', '(area A = l2)'].every((t) => gapTo(s, t) >= LABEL_GAP)],
      clearCheck(s),
    ];
  },
};

/* ===================================================================== */
/* p11-12-03-d2 · directed gas against isotropic gas (p. 839)             */
/* ===================================================================== */
/**
 * The same box in both panels, eight molecules of equal speed v. The directed
 * gas: four move in +x and four in −x (Example 4: half each way; the book's
 * panel drew five and three, corrected per its Errata). The isotropic gas: the
 * eight cube-diagonal directions (±1, ±1, ±1)/√3 turned by a fixed rotation,
 * so that Σv_x² = Σv_y² = Σv_z² = Nv²/3 exactly; each arrow is that velocity
 * seen from the front (its x–y part), so its drawn length varies with v_z.
 */
type Case3 = { chip: string; cap: string; kind: 'dir' | 'iso' };
const CAP3 = 'A directed (1-D) gas pushes only on the <i>x</i>-walls; an isotropic gas spreads its motion over all three directions — the origin of the factor 1/3.';
const BOX3: Rect = [40, 84, 300, 278];
const L3 = 38, RM = 5.5;
const DIR3: { c: P; s: 1 | -1 }[] = [
  { c: [96, 114], s: 1 }, { c: [196, 108], s: -1 }, { c: [150, 150], s: 1 }, { c: [254, 146], s: -1 },
  { c: [112, 196], s: -1 }, { c: [190, 196], s: 1 }, { c: [128, 246], s: 1 }, { c: [264, 244], s: -1 },
];
/** Rz(a)·Rx(b)·Rz(c), the turn applied to the eight cube diagonals. */
function rotation(a: number, b: number, c: number): number[][] {
  const Rz = (t: number) => [[Math.cos(t), -Math.sin(t), 0], [Math.sin(t), Math.cos(t), 0], [0, 0, 1]];
  const Rx = (t: number) => [[1, 0, 0], [0, Math.cos(t), -Math.sin(t)], [0, Math.sin(t), Math.cos(t)]];
  const mm = (A: number[][], B: number[][]) => A.map((r) => B[0].map((_, j) => r.reduce((q, v, k) => q + v * B[k][j], 0)));
  return mm(mm(Rz(a), Rx(b)), Rz(c));
}
const ISO_DIRS: V3[] = (() => {
  const M = rotation(1.2, 0.7, 0.25), out: V3[] = [];
  for (const a of [1, -1]) for (const b of [1, -1]) for (const c of [1, -1]) {
    const d = [a, b, c].map((q) => q / Math.sqrt(3));
    out.push(M.map((row) => row.reduce((q, x, k) => q + x * d[k], 0)) as V3);
  }
  return out;
})();
const ISO_AT: P[] = [[92, 140], [160, 232], [238, 128], [214, 186], [104, 226], [184, 112], [236, 226], [86, 186]];
/** Each molecule's centre and the arrow it carries (from its rim), in px. */
const mol3 = (kind: Case3['kind']): { c: P; a: P; b: P; d: V3 }[] =>
  kind === 'dir'
    ? DIR3.map(({ c, s }) => ({ c, a: [c[0] + s * RM, c[1]] as P, b: [c[0] + s * (RM + L3), c[1]] as P, d: [s, 0, 0] as V3 }))
    : ISO_AT.map((c, i) => {
        const d = ISO_DIRS[i], pl = Math.hypot(d[0], d[1]), u: P = [d[0] / pl, -d[1] / pl];
        return { c, a: add(c, u, RM), b: add(c, u, RM + L3 * pl), d };
      });
const d3: Diagram = {
  id: 'p11-12-03-d2',
  topic: 2,
  name: 'Where the factor of 1/3 comes from: isotropy',
  cases: [
    { chip: 'Directed gas', cap: CAP3, kind: 'dir' },
    { chip: 'Isotropic gas', cap: CAP3, kind: 'iso' },
  ] as Case3[],
  draw(c: Case3) {
    const s = new Sketch(W, 326);
    const [x0, y0, x1, y1] = BOX3, dir = c.kind === 'dir';
    if (dir) {
      s.sym(W / 2, 22, 'Directed gas (all along <i>x</i>)', { size: 15 });
      s.sym(W / 2, 46, '<i>P</i><sub><i>x</i></sub> = (<i>Nm</i>/<i>V</i>)<i>v</i><sup>2</sup>, side walls feel 0', { size: 15 });
    } else {
      s.sym(W / 2, 22, 'Isotropic gas (random)', { size: 15 });
      s.sym(W / 2, 46, '<i>P</i> = (1/3)(<i>Nm</i>/<i>V</i>)<i>v</i><sup>2</sup>', { size: 15 });
    }
    path(s, [[x0, y0], [x1, y0]], { w: 2 });
    path(s, [[x0, y1], [x1, y1]], { w: 2 });
    path(s, [[x0, y0], [x0, y1]], dir ? { color: C.mari, w: 3.4 } : { w: 2 });
    path(s, [[x1, y0], [x1, y1]], dir ? { color: C.mari, w: 3.4 } : { w: 2 });
    const ms = mol3(c.kind);
    ms.forEach(({ a, b }) => arrow(s, a, b, dir ? { w: 1.9 } : { color: C.mari, w: 2.2 }));
    ms.forEach(({ c: m }) => ball(s, m, RM));
    // the x direction, under the box
    arrow(s, [x0 + 4, y1 + 22], [x0 + 40, y1 + 22], { color: C.grey, w: 1.4 });
    s.sym(x0 + 46, y1 + 27, '<i>x</i>', { size: 15, anchor: 'start' });
    if (dir) {
      s.place([
        { t: 'End wall', hi: true, p: [x0, y0 + 26], at: [[x0 - 30, 56, 'start'], [x0 - 34, 56, 'start']] },
        { t: 'End wall', hi: true, p: [x1, y0 + 26], at: [[x1 + 30, 56, 'end'], [x1 + 34, 56, 'end']] },
        { t: 'Side wall', p: [210, y1], at: [[W - 6, y1 + 14, 'end'], [W - 8, y1 + 14, 'end']] },
      ]);
    } else {
      const k = 2, m = ms[k], mid: P = [(m.a[0] + m.b[0]) / 2, (m.a[1] + m.b[1]) / 2];
      s.place([
        { t: 'Velocities in all directions', hi: true, p: mid, at: [[W - 6, 56, 'end'], [W - 8, 56, 'end']] },
      ]);
    }
    return s;
  },
  check(c: Case3) {
    const s = d3.draw(c), ms = mol3(c.kind), n = ms.length, [x0, y0, x1, y1] = BOX3;
    const sq = (k: number) => ms.reduce((q, m) => q + m.d[k] ** 2, 0);
    const net = [0, 1, 2].map((k) => ms.reduce((q, m) => q + m.d[k], 0));
    const speeds = ms.map((m) => Math.hypot(...m.d));
    // nothing collides on the drawing: every arrow stays inside the box and off every other molecule
    const seg = (p: P, a: P, b: P) => { const dx = b[0] - a[0], dy = b[1] - a[1], L = dx * dx + dy * dy; const t = Math.max(0, Math.min(1, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / L)); return Math.hypot(p[0] - a[0] - t * dx, p[1] - a[1] - t * dy); };
    const inBox = ms.every((m) => [m.c, m.b].every((p) => p[0] > x0 + 8 && p[0] < x1 - 8 && p[1] > y0 + 8 && p[1] < y1 - 8));
    const apart = ms.every((m, i) => ms.every((o, j) => i === j || seg(o.c, m.a, m.b) > RM + 4));
    const common: Check[] = [
      [`All ${n} molecules have the same speed v (|v̂| = ${[...new Set(speeds.map((q) => fmt(q, 9)))].join(', ')})`, speeds.every((q) => close(q, 1, 1e-12))],
      [`The gas as a whole does not drift: Σv = (${net.map((q) => fmt(q, 9)).join(', ')})`, net.every((q) => close(q, 0, 1e-12))],
      ['Every molecule and arrow lies inside the box, and no arrow runs into another molecule', inBox && apart],
      clearCheck(s),
    ];
    if (c.kind === 'dir') {
      const right = ms.filter((m) => m.d[0] > 0).length, left = ms.filter((m) => m.d[0] < 0).length;
      const lens = ms.map((m) => len(m.a, m.b));
      return [
        [`Errata: ${right} molecules move in +x and ${left} in −x, half each way as Example 4 says (the book's panel drew 5 and 3)`, right === n / 2 && left === n / 2],
        ['Every arrow is along x and all are the same length (the same speed v)', ms.every((m) => close(m.a[1], m.b[1]) && m.d[1] === 0 && m.d[2] === 0) && lens.every((q) => close(q, L3))],
        [`So ⟨v_x²⟩ = ${fmt(sq(0) / n, 3)} v² and ⟨v_y²⟩ = ⟨v_z²⟩ = ${fmt(sq(1) / n, 3)}: P_x = (Nm/V)⟨v_x²⟩ = (Nm/V)v², and the side walls feel 0`, close(sq(0) / n, 1) && sq(1) === 0 && sq(2) === 0],
        [`Against the isotropic gas: P_x/P = 1/(1/3) = ${fmt((sq(0) / n) / (1 / 3), 3)}`, close((sq(0) / n) * 3, 3)],
        ...common,
      ];
    }
    const pl = ms.map((m) => Math.hypot(m.d[0], m.d[1]));
    const drawn = ms.map((m, i) => len(m.a, m.b) / (L3 * pl[i]));
    const angles = ms.map((m) => Math.atan2(-(m.b[1] - m.a[1]), m.b[0] - m.a[0]));
    const quad = new Set(angles.map((a) => Math.floor(((a + 2 * Math.PI) % (2 * Math.PI)) / (Math.PI / 2))));
    return [
      [`Isotropic: Σv_x² = ${fmt(sq(0), 9)}, Σv_y² = ${fmt(sq(1), 9)}, Σv_z² = ${fmt(sq(2), 9)}, each Nv²/3 = ${fmt(n / 3, 9)} (v = 1)`, [0, 1, 2].every((k) => close(sq(k), n / 3, 1e-12))],
      [`So ⟨v_x²⟩ = v²/3 and P = (1/3)(Nm/V)v² on every wall: the factor 1/3`, close(sq(0) / n, 1 / 3, 1e-12)],
      [`Each arrow is the molecule's velocity seen from the front: drawn length = ${L3} px × its x–y part (${drawn.map((q) => fmt(q, 6)).filter((v, i, a) => a.indexOf(v) === i).join(', ')}), pointing its way`, drawn.every((q) => close(q, 1, 1e-9)) && ms.every((m, i) => close(Math.atan2(m.d[1], m.d[0]), angles[i], 1e-9))],
      [`The arrows point every way on the drawing (into all ${quad.size} quadrants), none shorter than ${fmt(Math.min(...pl), 2)} of full length`, quad.size === 4 && Math.min(...pl) > 0.4],
      ...common,
    ];
  },
};

/* ===================================================================== */
/* p11-12-04-d1 · the Maxwell–Boltzmann speed distribution (p. 849)       */
/* ===================================================================== */
/**
 * P(v) = (4/√π)(v²/a³) e^(−v²/a²), with a = v_mp = √(2kT/m). Speeds are in
 * units of v_mp at T₁ (as the book's axis, 0 to 3.2); T₂ = 2T₁, so v_mp moves
 * to √2 and the peak drops by 1/√2, which is the book's own curve.
 */
const MB = (a: number) => (v: number) => (4 / Math.sqrt(Math.PI)) * (v * v) / a ** 3 * Math.exp(-(v * v) / (a * a));
const T2_OVER_T1 = 2;
const P1 = MB(1), P2 = MB(Math.sqrt(T2_OVER_T1));
/** The three speeds of the lower curve, by integration (the formulas are checked against them). */
const moments = (P: (v: number) => number) => {
  const area = simpson(P, 0, 12), av = simpson((v) => v * P(v), 0, 12), ms = simpson((v) => v * v * P(v), 0, 12);
  return { area, av, rms: Math.sqrt(ms) };
};
const MOM1 = moments(P1);
const SPEEDS4 = [
  { k: 'mp', v: 1, html: '<i>v</i><sub><i>mp</i></sub>', at: 108 },
  { k: 'av', v: MOM1.av, html: '<i>v</i><sub><i>av</i></sub>', at: 146 },
  { k: 'rms', v: MOM1.rms, html: '<i>v</i><sub><i>rms</i></sub>', at: 186 },
];
const F4: Frame = { ox: 44, oy: 280, sx: 286 / 3.2, sy: 216 };
const LAB4 = 66;
const d4: Diagram = {
  id: 'p11-12-04-d1',
  topic: 3,
  name: 'Maxwell–Boltzmann speed distribution',
  cases: [{ chip: 'Two temperatures', cap: 'The Maxwell–Boltzmann speed distribution. Raising the temperature shifts the peak to higher speed and flattens the curve, while the total area (the whole population) stays fixed.' }],
  draw() {
    const s = new Sketch(W, 326);
    const f = F4;
    s.vec(f.ox, f.oy, f.ox, 34, { color: C.grey, w: 1.3 });
    s.vec(f.ox, f.oy, W - 4, f.oy, { color: C.grey, w: 1.3 });
    s.sym(8, 22, 'fraction of molecules <i>P</i>(<i>v</i>)', { size: 13.5, anchor: 'start' });
    s.sym(W - 6, 316, 'molecular speed <i>v</i>', { size: 13.5, anchor: 'end' });
    [0, 0.5, 1, 1.5, 2, 2.5, 3].forEach((u) => {
      s.line(X(f, u), f.oy, X(f, u), f.oy + 4, { color: C.grey, w: 1.2 });
      s.sym(X(f, u), f.oy + 18, u.toFixed(1), { size: 12.5, color: C.slate });
    });
    curve(s, f, P2, 0, 3.2, { color: C.mari, w: 2.6 });
    curve(s, f, P1, 0, 3.2, { w: 2.4 });
    SPEEDS4.forEach(({ v, html, at: lx }) => {
      const top = at(f, v, P1(v));
      path(s, [[top[0], f.oy], top], { color: C.slate, w: 1, dash: 'dot', free: true });
      path(s, [top, [lx, LAB4 + 8]], { color: C.slate, w: 1 });
      s.sym(lx, LAB4, html, { size: 15 });
    });
    keyLine(s, 214, 24, 'lower <i>T</i><sub>1</sub>', { w: 2.4 });
    keyLine(s, 214, 46, 'higher <i>T</i><sub>2</sub> > <i>T</i><sub>1</sub>', { color: C.mari, w: 2.6 });
    const tail = at(f, 2.25, P2(2.25));
    s.place([{ t: 'Long high-speed tail', hi: true, p: tail, at: [[W - 6, 116, 'end'], [W - 6, 112, 'end']] }]);
    return s;
  },
  check() {
    const f = F4, s = d4.draw(d4.cases[0]);
    const M2 = moments(P2);
    const h = 1e-6, slope = (P: (v: number) => number, v: number) => (P(v + h) - P(v - h)) / (2 * h);
    const ratio = [1, MOM1.av, MOM1.rms];
    const xs = SPEEDS4.map(({ v }) => X(f, v)), lx = SPEEDS4.map((q) => q.at);
    const vs = Array.from({ length: 321 }, (_, i) => i / 100);
    const readBack = vs.every((v) => close(vOf(f, Y(f, P1(v))), P1(v), 1e-12) && close(uOf(f, X(f, v)), v, 1e-12));
    return [
      [`Both curves are normalised: total area ${fmt(MOM1.area, 6)} at T₁ and ${fmt(M2.area, 6)} at T₂ (the whole population, fixed)`, close(MOM1.area, 1, 1e-6) && close(M2.area, 1, 1e-6)],
      [`The lower curve peaks at v_mp = 1 (dP/dv = ${fmt(slope(P1, 1), 6)}), where v_mp = √(2kT/m)`, close(slope(P1, 1), 0, 1e-6) && P1(1) > P1(0.98) && P1(1) > P1(1.02)],
      [`Integrating it: v_av = ${fmt(MOM1.av, 4)} = √(8kT/πm) = √(4/π) v_mp, v_rms = ${fmt(MOM1.rms, 4)} = √(3kT/m) = √1.5 v_mp`, close(MOM1.av, Math.sqrt(4 / Math.PI), 1e-6) && close(MOM1.rms, Math.sqrt(1.5), 1e-6)],
      [`So v_mp : v_av : v_rms = ${ratio.map((q) => fmt(q, 3)).join(' : ')} = 1 : 1.128 : 1.225`, ratio.map((q) => fmt(q, 3)).join(':') === '1:1.128:1.225'],
      ['Each dotted guide stands at its speed on the axis and meets the lower curve', SPEEDS4.every(({ v }) => close(uOf(f, X(f, v)), v, 1e-12))],
      [`Errata: the labels v_mp, v_av, v_rms read left to right in that order, apart from each other and from the curves (the book's touched): label centres at ${lx.join(', ')} px, guides at ${xs.map((x) => fmt(x, 1)).join(', ')} px`, xs[0] < xs[1] && xs[1] < xs[2] && lx[0] < lx[1] && lx[1] < lx[2] && labelsApart(s, ['vmp', 'vav', 'vrms']) && ['vmp', 'vav', 'vrms'].every((t) => gapTo(s, t) >= LABEL_GAP)],
      [`At T₂ = ${T2_OVER_T1}T₁ the peak moves right to √2 = ${fmt(Math.SQRT2, 3)} and drops by 1/√2: ${fmt(P2(Math.SQRT2), 4)} vs ${fmt(P1(1), 4)}`, close(slope(P2, Math.SQRT2), 0, 1e-6) && close(P2(Math.SQRT2) / P1(1), 1 / Math.SQRT2, 1e-9)],
      [`Every speed scales as √T: v_rms(T₂)/v_rms(T₁) = ${fmt(M2.rms / MOM1.rms, 4)} = √2`, close(M2.rms / MOM1.rms, Math.SQRT2, 1e-6)],
      [`The hotter curve has the longer high-speed tail: fraction above v = 2 is ${fmt(simpson(P2, 2, 12), 3)} at T₂, ${fmt(simpson(P1, 2, 12), 3)} at T₁`, simpson(P2, 2, 12) > simpson(P1, 2, 12) && P2(2.25) > P1(2.25)],
      ['The drawn curve reads back as P(v) at every hundredth of v_mp', readBack],
      clearCheck(s),
    ];
  },
};

/* ===================================================================== */
/* p11-12-05-d1 · degrees of freedom by molecular structure (p. 857)      */
/* ===================================================================== */
/**
 * One molecule per panel, its bond along x, drawn in oblique projection
 * (z back and up at 40°, shortened to 0.45). The three translations are a
 * triad of arrows along x, y and z; each rotation is a turning arrow on a
 * circle in the plane perpendicular to its axis, drawn about y and about z,
 * the two axes perpendicular to the bond (the book's panels drew one each,
 * corrected per its Errata); the vibration is a spring on the bond with a
 * double arrow along it, clear of the atoms.
 */
type Case5 = { chip: string; cap: string; kind: 'mono' | 'room' | 'high'; head: string; f: string };
const CAP5 = 'Degrees of freedom by molecular structure: monatomic (<i>f</i> = 3), diatomic at room temperature (<i>f</i> = 5), and diatomic at high temperature (<i>f</i> = 7, with vibration active).';
const G5 = { c: [176, 128] as P, half: 36, ra: 15, kd: 0.45, th: 40, triad: [52, 108] as P, tl: 40, ry: { h: 58, R: 26 }, rz: { R: 60, a0: -16, a1: -72 }, vib: 34 };
const pr5 = (o: P, [x, y, z]: V3): P => [o[0] + x + z * G5.kd * Math.cos(G5.th * D2R), o[1] - y - z * G5.kd * Math.sin(G5.th * D2R)];
/** The rotations a panel shows: each an axis (unit, 3-D) and its circle's points (3-D, about the molecule's centre). */
type Rot = { axis: V3; pts: V3[] };
function rotations(kind: Case5['kind']): Rot[] {
  if (kind === 'mono') return [];
  const { h, R } = G5.ry, { R: R2, a0, a1 } = G5.rz, n = 60;
  const aboutY: V3[] = Array.from({ length: n + 1 }, (_, i) => { const p = (200 + (-20 - 200) * (i / n)) * D2R; return [R * Math.cos(p), h, R * Math.sin(p)]; });
  const aboutZ: V3[] = Array.from({ length: n + 1 }, (_, i) => { const p = (a0 + (a1 - a0) * (i / n)) * D2R; return [R2 * Math.cos(p), R2 * Math.sin(p), 0]; });
  return [{ axis: [0, 1, 0], pts: aboutY }, { axis: [0, 0, 1], pts: aboutZ }];
}
const BOND: V3 = [1, 0, 0];
const TRIAD: V3[] = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
const atoms5 = (kind: Case5['kind']): P[] => (kind === 'mono' ? [G5.c] : [[G5.c[0] - G5.half, G5.c[1]], [G5.c[0] + G5.half, G5.c[1]]]);
/** The vibration's double arrow, under the bond: its two tips. */
const vibArrow = (): [P, P] => { const y = G5.c[1] + G5.ra + 18; return [[G5.c[0] - G5.vib / 2, y], [G5.c[0] + G5.vib / 2, y]]; };
/** The spring on the bond: a zigzag from one atom's rim to the other's. */
const spring = (): P[] => {
  const x0 = G5.c[0] - G5.half + G5.ra, x1 = G5.c[0] + G5.half - G5.ra, n = 8, amp = 4.5, pts: P[] = [[x0, G5.c[1]]];
  for (let i = 1; i < n; i++) pts.push([x0 + ((x1 - x0) * i) / n, G5.c[1] + (i % 2 ? -amp : amp)]);
  pts.push([x1, G5.c[1]]);
  return pts;
};
/** The translation arrows: origin, tips and where each arrow starts (at the atom's rim for a single atom). */
const triad5 = (kind: Case5['kind']) => {
  const mono = kind === 'mono', origin = mono ? G5.c : G5.triad, tl = mono ? 50 : G5.tl, zk = mono ? 1.8 : 1.4;
  const tips = TRIAD.map((d) => pr5(origin, [d[0] * tl, d[1] * tl, d[2] * tl * zk]));
  const starts = tips.map((t): P => (mono ? add(origin, [(t[0] - origin[0]) / len(origin, t), (t[1] - origin[1]) / len(origin, t)], G5.ra) : origin));
  return { origin, tips, starts };
};
const fOf = (kind: Case5['kind']) => {
  const trans = TRIAD.length, rot = rotations(kind).length, vib = kind === 'high' ? 1 : 0;
  return { trans, rot, vib, f: trans + rot + 2 * vib };
};
const d5: Diagram = {
  id: 'p11-12-05-d1',
  topic: 4,
  name: 'Degrees of freedom by molecular structure',
  cases: [
    { chip: 'Monatomic', cap: CAP5, kind: 'mono', head: 'Monatomic', f: '<i>f</i> = 3 (3 translation)' },
    { chip: 'Diatomic, room T', cap: CAP5, kind: 'room', head: 'Diatomic (room <i>T</i>)', f: '<i>f</i> = 5 (3 trans + 2 rot)' },
    { chip: 'Diatomic, high T', cap: CAP5, kind: 'high', head: 'Diatomic (high <i>T</i>)', f: '<i>f</i> = 7 (+2 vibration)' },
  ] as Case5[],
  draw(c: Case5) {
    const s = new Sketch(W, 254);
    const { c: o, ra } = G5, k = c.kind;
    s.sym(W / 2, 24, c.head, { size: 16 });
    // the translation triad: from the atom itself when it is a single atom (as the book), beside the molecule otherwise
    const { origin, tips: tri, starts } = triad5(k);
    tri.forEach((tip, i) => arrow(s, starts[i], tip, k === 'mono' ? { color: C.mari, w: 2.4 } : { w: 2 }));
    s.sym(tri[0][0] + 6, tri[0][1] + 5, '<i>x</i>', { size: 14, anchor: 'start' });
    s.sym(tri[1][0], tri[1][1] - 9, '<i>y</i>', { size: 14 });
    s.sym(tri[2][0] + 5, tri[2][1] - 3, '<i>z</i>', { size: 14, anchor: 'start' });
    // rotation axes (dashed grey) and turning arrows
    const rots = rotations(k);
    if (rots.length) {
      path(s, [pr5(o, [0, -62, 0]), pr5(o, [0, 86, 0])], { color: C.grey, w: 1.2, dash: 'dash' });
      path(s, [pr5(o, [0, 0, -70]), pr5(o, [0, 0, 120])], { color: C.grey, w: 1.2, dash: 'dash' });
      s.sym(pr5(o, [0, 86, 0])[0] + 7, pr5(o, [0, 86, 0])[1] + 6, '<i>y</i>', { size: 14, anchor: 'start' });
      s.sym(pr5(o, [0, 0, 120])[0] + 6, pr5(o, [0, 0, 120])[1] + 4, '<i>z</i>', { size: 14, anchor: 'start' });
      rots.forEach((r) => {
        const pts = r.pts.map((p) => pr5(o, p)), col = k === 'room' ? C.mari : C.ink, w = k === 'room' ? 2.4 : 2;
        path(s, pts.slice(0, -4), { color: col, w });
        arrow(s, pts[pts.length - 6], pts[pts.length - 1], { color: col, w });
      });
    }
    // the molecule
    if (k === 'room') path(s, [[o[0] - G5.half + ra, o[1]], [o[0] + G5.half - ra, o[1]]], { w: 2.6 });
    if (k === 'high') {
      path(s, spring(), { color: C.mari, w: 2 });
      const [a, b] = vibArrow(), m: P = [(a[0] + b[0]) / 2, a[1]];
      arrow(s, m, a, { color: C.mari, w: 2 });
      arrow(s, m, b, { color: C.mari, w: 2 });
    }
    atoms5(k).forEach((p) => ball(s, p, ra, { w: 2 }));
    const res = resultBlock(s, [c.f]);
    const tagT = { t: 'Translation', hi: k === 'mono', p: origin, own: origin, at: [[8, 148, 'start'], [8, 152, 'start']] as [number, number, 'start'][] };
    if (k === 'mono') {
      const xm: P = [starts[0][0] + 0.4 * (tri[0][0] - starts[0][0]), starts[0][1]];
      s.place([{ t: 'Translation', hi: true, p: xm, at: [[W - 8, 158, 'end'], [W - 8, 162, 'end']] }, { t: 'Atom', p: [o[0], o[1] + ra], own: o, at: [[o[0] - 60, 170, 'middle'], [o[0] - 70, 170, 'middle']] }], [res]);
    } else {
      // the top arc's tag line leaves near its right end: from 35% it ran along the arc to the arrowhead
      const rp = rots.map((r, i) => pr5(o, r.pts[Math.round(r.pts.length * (i === 0 ? 0.58 : 0.35))]));
      const specs = [
        tagT,
        { t: 'Rotation', hi: k === 'room', p: rp[0], at: [[W - 8, 32, 'end'], [W - 8, 36, 'end']] as [number, number, 'end'][] },
        { t: 'Rotation', hi: k === 'room', p: rp[1], at: [[W - 8, 158, 'end'], [W - 8, 162, 'end']] as [number, number, 'end'][] },
      ];
      if (k === 'high') specs.push({ t: 'Vibration', hi: true, p: vibArrow()[0], own: vibArrow()[0], at: [[o[0] - 100, 182, 'start'], [o[0] - 104, 182, 'start']] } as never);
      s.place(specs, [res]);
    }
    return s;
  },
  check(c: Case5) {
    const s = d5.draw(c), k = c.kind, { trans, rot, vib, f } = fOf(k), rots = rotations(k);
    const want = { mono: 3, room: 5, high: 7 }[k];
    const dot = (a: V3, b: V3) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
    const gamma = 1 + 2 / f;
    const out: Check[] = [
      [`Translations: ${trans} arrows along x, y and z, mutually perpendicular`, trans === 3 && TRIAD.every((a, i) => TRIAD.every((b, j) => i === j || dot(a, b) === 0))],
      [`f = ${trans} trans + ${rot} rot + 2 × ${vib} vib = ${f}, as the panel states (${want})`, f === want && c.f.includes(`= ${want}`)],
      [`γ = 1 + 2/f = ${fmt(gamma, 3)}; C_V = (f/2)R = ${fmt(f / 2, 1)}R, C_P = ${fmt(f / 2 + 1, 1)}R`, close(gamma, { mono: 5 / 3, room: 7 / 5, high: 9 / 7 }[k], 1e-12)],
      clearCheck(s),
    ];
    if (k === 'mono') return [['A single atom: no rotations or vibration are drawn', rot === 0 && vib === 0 && atoms5(k).length === 1], ...out];
    const onCircle = rots.every((r) => r.pts.every((p) => close(dot(p, r.axis), dot(r.pts[0], r.axis), 1e-9) && close(Math.hypot(...p.map((q, i) => q - r.axis[i] * dot(p, r.axis))), Math.hypot(...r.pts[0].map((q, i) => q - r.axis[i] * dot(r.pts[0], r.axis))), 1e-9)));
    const atomGap = Math.min(...rots.flatMap((r) => r.pts.map((p) => pr5(G5.c, p))).flatMap((p) => atoms5(k).map((a) => len(p, a) - G5.ra)));
    out.unshift(
      [`Errata: ${rot} rotations, about y and about z, the two axes perpendicular to the bond (the book drew one)`, rot === 2 && rots.every((r) => dot(r.axis, BOND) === 0) && dot(rots[0].axis, rots[1].axis) === 0],
      ['None about the bond itself (I ≈ 0 along it): each turning arrow is a circle in the plane perpendicular to its axis, centred on that axis', onCircle && !rots.some((r) => Math.abs(dot(r.axis, BOND)) > 0)],
      [`The turning arrows stay clear of the atoms (closest ${fmt(atomGap, 1)} px)`, atomGap >= LABEL_GAP],
    );
    if (k === 'high') {
      const [a, b] = vibArrow(), sp = spring();
      const seg = (q: P) => { const t = Math.max(0, Math.min(1, (q[0] - a[0]) / (b[0] - a[0]))); return Math.hypot(q[0] - a[0] - t * (b[0] - a[0]), q[1] - a[1]); };
      const gap = Math.min(...atoms5(k).map((q) => seg(q) - G5.ra));
      const coil = Math.min(...sp.slice(1, -1).flatMap((p) => atoms5(k).map((q) => len(p, q) - G5.ra)));
      out.unshift(
        ['One vibration mode along the bond, worth 2 (kinetic + potential): the double arrow lies along x', vib === 1 && close(a[1], b[1]) && b[0] > a[0]],
        [`Errata: the vibration marker stays clear of the atoms, ${fmt(gap, 1)} px at the closest (the book's touched them); the spring runs rim to rim, its coils ${fmt(coil, 1)} px clear`, gap >= LABEL_GAP && coil >= LABEL_GAP],
      );
    } else out.unshift(['At room temperature the vibration is frozen out: none is drawn', vib === 0]);
    return out;
  },
};

export const DIAGRAMS_PHYSICS_11_12: Diagram[] = [d1, d2, d3, d4, d5];
