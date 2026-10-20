import { C, F, Rect, Sketch, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * PHYSICS CLASS 11, CHAPTER 6 (System of Particles and Rotational Motion):
 * every figure of the Master Reference book, redrawn. The chapter's drawings
 * are its twelve numbered figures, printed on the "CHAPTER 6 · FIGURES" pages
 * (pp. 366–436). It has no unnumbered drawings: pp. 364–455 were checked page
 * by page (the rest is text, tables and typeset equations), Additional Topics
 * A–F included.
 *
 * Rotational figures are computed, never placed by eye: arcs and bodies from
 * their equations, every force arrow to one scale (px per newton, or per mg),
 * every lever arm measured on the drawing. Each `check` turns the drawn
 * pixels back into physics and recomputes what the figure states: the drawn
 * torques cancel, the integral gives 2R/π, ML²/12 and 2/5 MR², a = 5/7 g sin θ,
 * v = 5/7 v₀, the angular momentum before and after impact is the same.
 */

const W = 340;
type P = [number, number];
const D2R = Math.PI / 180;
/** A unit vector on the drawing at `deg` degrees anticlockwise from +x (the drawing's y runs down). */
const dir = (deg: number): P => [Math.cos(deg * D2R), -Math.sin(deg * D2R)];
const add = (a: P, b: P, k = 1): P => [a[0] + k * b[0], a[1] + k * b[1]];
const sub = (a: P, b: P): P => [a[0] - b[0], a[1] - b[1]];
const mul = (a: P, k: number): P => [a[0] * k, a[1] * k];
const len = (v: P) => Math.hypot(v[0], v[1]);
const dotp = (a: P, b: P) => a[0] * b[0] + a[1] * b[1];
/** The z-part of a × b for drawn vectors, in physics axes (x right, y UP, z out of the page). */
const crossZ = (a: P, b: P) => a[0] * -b[1] - -a[1] * b[0];
const close = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) < tol;
const fmt = (n: number, d = 2) => String(+n.toFixed(d)).replace('-', '−');
/** The direction of a drawn vector in degrees anticlockwise from +x. */
const angOf = (v: P) => Math.atan2(-v[1], v[0]) / D2R;
const between = (a: P, b: P) => Math.acos(Math.max(-1, Math.min(1, dotp(a, b) / (len(a) * len(b))))) / D2R;
const balanced = (vs: P[], tol = 1e-9) => { const s = vs.reduce((a, v) => add(a, v), [0, 0] as P); return Math.abs(s[0]) < tol && Math.abs(s[1]) < tol; };
/** Simpson's rule on [a, b] with n (even) strips. */
function simpson(f: (x: number) => number, a: number, b: number, n = 400) {
  const h = (b - a) / n;
  let s = f(a) + f(b);
  for (let i = 1; i < n; i++) s += f(a + i * h) * (i % 2 ? 4 : 2);
  return (s * h) / 3;
}

/* ---------- drawing helpers ---------- */
type Stroke = { color?: string; w?: number; dash?: 'dash' | 'dot' | 'dashdot'; fill?: boolean };
const dashOf = (d?: Stroke['dash']) => (d === 'dash' ? ' stroke-dasharray="5 4"' : d === 'dot' ? ' stroke-dasharray="1.5 3.5"' : d === 'dashdot' ? ' stroke-dasharray="9 3 1.5 3"' : '');
/** An open line through points: ink, rounded joins. */
function path(s: Sketch, pts: P[], o: Stroke = {}) {
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ');
  s.add(`<path d="${d}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}" stroke-linejoin="round" stroke-linecap="round"${dashOf(o.dash)}/>`);
}
/** A closed outline, white inside (it hides what it stands in front of, never a colour). */
function shape(s: Sketch, pts: P[], o: Stroke = {}) {
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ') + ' Z';
  s.add(`<path d="${d}" fill="${o.fill === false ? 'none' : '#fff'}" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}" stroke-linejoin="round"${dashOf(o.dash)}/>`);
}
function circle(s: Sketch, c: P, r: number, o: Stroke = {}) {
  s.add(`<circle cx="${r1(c[0])}" cy="${r1(c[1])}" r="${r1(r)}" fill="${o.fill === false ? 'none' : '#fff'}" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}"${dashOf(o.dash)}/>`);
}
function ellipse(s: Sketch, c: P, rx: number, ry: number, o: Stroke = {}) {
  s.add(`<ellipse cx="${r1(c[0])}" cy="${r1(c[1])}" rx="${r1(rx)}" ry="${r1(ry)}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}"${dashOf(o.dash)}/>`);
}
/** Points on an arc of radius r round c, from angle a0 to a1 (degrees, anticlockwise from +x). */
const arcPts = (c: P, r: number, a0: number, a1: number): P[] => {
  const n = Math.max(6, Math.ceil(Math.abs(a1 - a0) / 3)), pts: P[] = [];
  for (let i = 0; i <= n; i++) pts.push(add(c, dir(a0 + ((a1 - a0) * i) / n), r));
  return pts;
};
function arc(s: Sketch, c: P, r: number, a0: number, a1: number, o: Stroke = {}) {
  path(s, arcPts(c, r, a0, a1), { color: o.color ?? C.slate, w: o.w ?? 1.2, dash: o.dash });
}
/** A turning arrow: an arc from a0 to a1 with its head at a1 (a1 < a0 turns clockwise). */
function turn(s: Sketch, c: P, r: number, a0: number, a1: number, o: { color?: string; w?: number } = {}) {
  const sgn = a1 > a0 ? 1 : -1, back = (12 / r) / D2R;
  path(s, arcPts(c, r, a0, a1 - sgn * back * 0.5), { color: o.color ?? C.ink, w: o.w ?? 1.7 });
  const from = add(c, dir(a1 - sgn * back), r), tip = add(c, dir(a1), r);
  s.vec(from[0], from[1], tip[0], tip[1], { color: o.color ?? C.ink, w: o.w ?? 1.7 });
}
/** Hatching along a fixed surface from a to b, on the side `side` (+1 = the left of a→b as drawn). */
function hatch(s: Sketch, a: P, b: P, side: 1 | -1, step = 12, L = 8) {
  const t = mul(sub(b, a), 1 / len(sub(b, a))), n: P = mul([t[1], -t[0]], side);
  const out: P = add(mul(n, Math.SQRT1_2), mul(t, -Math.SQRT1_2));
  for (let d = step / 2; d < len(sub(b, a)); d += step) { const p = add(a, t, d); s.line(p[0], p[1], p[0] + L * out[0], p[1] + L * out[1], { color: C.grey, w: 1.1 }); }
}
/** A measured length with an arrowhead at each end. */
function measure(s: Sketch, a: P, b: P, color: string = C.slate) {
  const m: P = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
  s.vec(m[0], m[1], a[0], a[1], { color, w: 1.3 });
  s.vec(m[0], m[1], b[0], b[1], { color, w: 1.3 });
}
/** A force: the vector `v` (px) drawn from `at`. */
const force = (s: Sketch, at: P, v: P, o: { color?: string; w?: number; dash?: boolean } = {}) => s.vec(at[0], at[1], at[0] + v[0], at[1] + v[1], { w: o.w ?? 2, color: o.color ?? C.ink, dash: o.dash });
const HI = { color: C.mari, w: 2.6 };
const COMP = { color: C.grey, w: 1.5, dash: true };
/** A point that tags must keep clear of, with nothing drawn (an arrow's tip already marks it). */
const keepClear = (s: Sketch, p: P, r = 3) => s.point(p[0], p[1], r, '');
/** The axis of rotation seen end-on, pointing out of the page: ⊙. */
const OUT_R = 8;
function outOfPage(s: Sketch, c: P) {
  s.point(c[0], c[1], OUT_R, `<circle cx="${r1(c[0])}" cy="${r1(c[1])}" r="${OUT_R}" fill="#fff" stroke="${C.ink}" stroke-width="1.8"/><circle cx="${r1(c[0])}" cy="${r1(c[1])}" r="2.6" fill="${C.ink}"/>`);
}
const esc = (t: string) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
/**
 * The result, bottom right, ink-edged: maths set in STIX (Sketch.text) so its
 * letters keep their italics, words in Onest Bold. Registered as a tag, so the
 * audit keeps everything else off it.
 */
function resultBlock(s: Sketch, lines: string[], o: { maths?: boolean; size?: number } = {}): Rect {
  const maths = o.maths ?? true, size = o.size ?? (maths ? 15 : 13), lh = size + 6;
  const plain = (t: string) => t.replace(/<[^>]+>/g, '');
  const w = Math.max(...lines.map((t) => plain(t).length * size * (maths ? 0.5 : 0.58))) + 30, h = lines.length * lh + 14;
  const x0 = s.w - 8 - w, y0 = s.h - 8 - h;
  s.tags.push({ name: plain(lines.join(' ')), rect: [x0, y0, x0 + w, y0 + h], from: null, to: null });
  s.add(`<rect x="${r1(x0)}" y="${r1(y0)}" width="${r1(w)}" height="${r1(h)}" rx="15" fill="#fff" stroke="${C.text}" stroke-width="1.6"/>`);
  lines.forEach((t, i) => {
    const y = y0 + 7 + lh * i + lh / 2 + size * 0.36;
    if (maths) s.text(x0 + w / 2, y, t, { size, semibold: true });
    else s.add(`<text x="${r1(x0 + w / 2)}" y="${r1(y)}" text-anchor="middle" font-family="${F.bold}" font-size="${size}" fill="${C.text}">${esc(t)}</text>`);
  });
  return [x0, y0, x0 + w, y0 + h];
}

/* ===================================================================== */
/* Figure 6.1 · translation, rotation, general motion (topic 01)          */
/* ===================================================================== */
type Case61 = { chip: string; cap: string; part: 'trans' | 'rot' | 'gen' };
const CAP61 = 'Types of rigid-body motion: pure translation (every point has the same velocity), pure rotation about a fixed axis (outer points move faster, <i>v</i> = <i>rω</i>), and general motion such as rolling (translation of the centre plus rotation about it).';
/** Panel 1: a block, six points, one velocity (px). */
const T61 = { box: [50, 50, 290, 170] as Rect, xs: [84, 144, 204], ys: [86, 134], v: [36, 0] as P };
/** Panel 2: a disc turning anticlockwise about its fixed axis; two points at r₁, r₂; ω in px per px. */
const R61 = { O: [112, 118] as P, R: 94, r: [38, 78], w: 0.6 };
const rot61 = () => R61.r.map((r) => { const at = add(R61.O, dir(0), r); return { r, at, v: mul(dir(90), r * R61.w) }; });
/** Panel 3: a wheel on the ground; its centre C moves right while it turns clockwise. */
const G61 = { C: [120, 132] as P, R: 70, v: 108, ground: 202, wr: 90, w0: 158, w1: 72 };
const fig61: Diagram = {
  id: 'p11-06-fig-6.1',
  topic: 0,
  name: 'The three types of rigid-body motion',
  cases: [
    { chip: 'Pure translation', part: 'trans', cap: `1. Pure translation. ${CAP61}` },
    { chip: 'Pure rotation', part: 'rot', cap: `2. Pure rotation. ${CAP61}` },
    { chip: 'General motion', part: 'gen', cap: `3. General motion. ${CAP61}` },
  ],
  draw(c: Case61) {
    if (c.part === 'trans') {
      const s = new Sketch(W, 232);
      const [x0, y0, x1, y1] = T61.box;
      shape(s, [[x0, y0], [x1, y0], [x1, y1], [x0, y1]]);
      T61.ys.forEach((y) => T61.xs.forEach((x) => { force(s, [x, y], T61.v, { color: C.mari, w: 2.2 }); s.dot(x, y, 2.6); }));
      s.sym(T61.xs[2] + T61.v[0] + 6, T61.ys[0] + 5, '<i>v</i>', { anchor: 'start', color: C.amber });
      s.sym(T61.xs[2] + T61.v[0] + 6, T61.ys[1] + 5, '<i>v</i>', { anchor: 'start', color: C.amber });
      const res = resultBlock(s, ['every point: same <i>v</i>']);
      s.place([{ t: 'Rigid body', p: [(x0 + x1) / 2, y0], at: [[(x0 + x1) / 2, 14, 'middle']] }], [res]);
      return s;
    }
    if (c.part === 'rot') {
      const s = new Sketch(W, 298);
      const { O, R } = R61, pts = rot61();
      circle(s, O, R, { w: 1.8 });
      pts.forEach((p) => circle(s, O, p.r, { color: C.slate, w: 1.1, dash: 'dot', fill: false }));
      pts.forEach((p) => { force(s, p.at, p.v, { color: C.mari, w: 2.2 }); s.dot(p.at[0], p.at[1], 2.6); });
      s.dot(O[0], O[1], 3.4);
      const [inner, outer] = pts;
      s.sym(inner.at[0] - 4, inner.at[1] + inner.v[1] - 6, '<i>v</i><sub>1</sub>', { size: 14, anchor: 'end', color: C.amber });
      s.sym(outer.at[0] - 6, outer.at[1] + outer.v[1] + 4, '<i>v</i><sub>2</sub>', { size: 14, anchor: 'end', color: C.amber });
      s.sym(O[0] + inner.r / 2, O[1] + 18, '<i>r</i><sub>1</sub>', { size: 14, color: C.slate });
      s.sym(O[0] + (inner.r + outer.r) / 2, O[1] + 18, '<i>r</i><sub>2</sub>', { size: 14, color: C.slate });
      path(s, [O, outer.at], { color: C.grey, w: 1, dash: 'dash' });
      const res = resultBlock(s, ['<i>v</i> = <i>rω</i>: outer points faster']);
      s.place(
        [
          { t: 'Moves faster', p: add(outer.at, outer.v, 0.45), hi: true, at: [[outer.at[0] + 18, outer.at[1] - 52, 'start'], [outer.at[0] + 18, outer.at[1] - 70, 'start']] },
          { t: 'Fixed axis', p: O, own: O, at: [[14, 226, 'start'], [14, 232, 'start']] },
        ],
        [res]
      );
      return s;
    }
    const s = new Sketch(W, 268);
    const { C: Cc, R, v, ground, wr, w0, w1 } = G61;
    s.line(14, ground, 326, ground, { w: 1.7 });
    hatch(s, [14, ground], [326, ground], -1, 14);
    circle(s, Cc, R, { w: 1.8 });
    path(s, [[Cc[0] - R, Cc[1]], [Cc[0] + R, Cc[1]]], { color: C.grey, w: 1 });
    path(s, [[Cc[0], Cc[1] - R], [Cc[0], Cc[1] + R]], { color: C.grey, w: 1 });
    turn(s, Cc, wr, w0, w1, { color: C.ink, w: 1.8 });
    force(s, Cc, [v, 0], HI);
    s.dot(Cc[0], Cc[1], 3.2);
    s.sym(Cc[0] - 10, Cc[1] + 22, 'C', { anchor: 'end' });
    const wl = add(Cc, dir((w0 + 90) / 2 + 20), wr + 16);
    s.sym(wl[0], wl[1], '<i>ω</i>', { size: 16 });
    s.sym(Cc[0] + v + 2, Cc[1] - 10, '<i>v</i><sub>cm</sub>', { size: 15, anchor: 'end', color: C.amber });
    const res = resultBlock(s, ['translation + rotation'], { maths: false });
    s.place([{ t: 'Centre translates', p: [Cc[0] + v * 0.84, Cc[1]], hi: true, at: [[W - 8, 160, 'end'], [W - 8, 168, 'end']] }], [res]);
    return s;
  },
  check(c: Case61) {
    if (c.part === 'trans') {
      const [x0, y0, x1, y1] = T61.box;
      const inside = T61.ys.every((y) => T61.xs.every((x) => x > x0 && x + T61.v[0] < x1 && y > y0 && y < y1));
      return [
        ['Six points of the body, each with the same velocity vector (one length, one direction)', T61.xs.length * T61.ys.length === 6 && close(T61.v[1], 0) && T61.v[0] > 0],
        ['Every point and its arrow lies on the body', inside],
      ];
    }
    if (c.part === 'rot') {
      const pts = rot61();
      return [
        ...pts.map((p, i): Check => [`Point ${i + 1} (r = ${p.r} px): its velocity is at right angles to its radius`, close(dotp(p.v, sub(p.at, R61.O)), 0)]),
        [`v/r is the same for both points: ω = ${fmt(len(pts[0].v) / pts[0].r)} = ${fmt(len(pts[1].v) / pts[1].r)}`, close(len(pts[0].v) / pts[0].r, len(pts[1].v) / pts[1].r)],
        [`The outer point moves faster: v₂/v₁ = ${fmt(len(pts[1].v) / len(pts[0].v), 3)} = r₂/r₁`, close(len(pts[1].v) / len(pts[0].v), pts[1].r / pts[0].r) && len(pts[1].v) > len(pts[0].v)],
        ['Both turn the same way about the axis (anticlockwise: r × v points out of the page)', pts.every((p) => crossZ(sub(p.at, R61.O), p.v) > 0)],
        ['Both points and their arrows lie inside the disc', pts.every((p) => len(sub(add(p.at, p.v), R61.O)) < R61.R)],
      ];
    }
    const { C: Cc, R, ground, w0, w1 } = G61;
    return [
      ['The wheel touches the ground: its centre is one radius above it', close(ground - Cc[1], R)],
      ['v_cm is drawn from C, horizontal, forward (to the right)', G61.v > 0],
      ['ω is drawn clockwise, the sense of a wheel rolling to the right (the contact point is then the slowest point)', w1 < w0],
    ];
  },
};

/* ===================================================================== */
/* Figure 6.2 · centre of mass of a semicircular wire (topic 02)          */
/* ===================================================================== */
/** O, radius R (px); the element sits at θ = 58° and subtends dθ = 10°. */
const F62 = { O: [170, 206] as P, R: 120, th: 58, dth: 10 };
const geo62 = () => {
  const { O, R, th, dth } = F62;
  const E1 = add(O, dir(th), R), E2 = add(O, dir(th + dth), R);
  const ycm = (2 * R) / Math.PI;
  return { E1, E2, ycm, cm: [O[0], O[1] - ycm] as P, foot: [E1[0], O[1]] as P };
};
const fig62: Diagram = {
  id: 'p11-06-fig-6.2',
  topic: 1,
  name: 'Centre of mass of a semicircular wire',
  cases: [{ chip: 'Semicircular wire', cap: 'Semicircular wire of radius <i>R</i> with its diameter on the <i>x</i>-axis. An arc element at angle <i>θ</i> from the <i>x</i>-axis subtends d<i>θ</i>, and its height above the axis is <i>R</i> sin <i>θ</i>. The centre of mass lies at <i>y</i> = 2<i>R</i>/<i>π</i>.' }],
  draw() {
    const s = new Sketch(W, 238);
    const { O, R, th, dth } = F62, g = geo62();
    path(s, [[O[0] - R, O[1]], [O[0] + R, O[1]]], { color: C.slate, w: 1.2, dash: 'dash' });
    path(s, [[O[0] - R - 10, g.cm[1]], [W - 6, g.cm[1]]], { color: C.slate, w: 1.2, dash: 'dashdot' });
    arc(s, O, R, 0, 180, { color: C.ink, w: 2.4 });
    path(s, [O, g.E1], { color: C.slate, w: 1.2 });
    path(s, [O, g.E2], { color: C.slate, w: 1.2 });
    path(s, [g.E1, g.foot], { color: C.slate, w: 1.2, dash: 'dot' });
    arc(s, O, 34, 0, th);
    arc(s, O, R, th, th + dth, { color: C.mari, w: 5 });
    s.dot(O[0], O[1], 3);
    s.dot(g.cm[0], g.cm[1], 3.6);
    keepClear(s, g.E1, 2);
    s.sym(...add(O, dir(th / 2), 48), '<i>θ</i>', { size: 15 });
    s.sym(...add(add(O, dir(th + dth / 2), R + 16), [6, 2]), 'd<i>θ</i>', { size: 15, color: C.amber });
    s.sym(g.foot[0] + 5, O[1] - 7, '<i>R</i> sin <i>θ</i>', { size: 13, anchor: 'start', color: C.slate });
    s.sym(O[0] - 22, O[1] + 22, 'd<i>m</i> = (<i>M</i>/<i>πR</i>) <i>R</i> d<i>θ</i>', { size: 14, anchor: 'end' });
    s.sym(W - 6, g.cm[1] - 8, '<i>y</i><sub>cm</sub> = 2<i>R</i>/<i>π</i>', { size: 14, anchor: 'end' });
    s.sym(O[0], O[1] + 21, 'O');
    s.place([
      { t: 'Arc element dm', p: add(O, dir(th + dth / 2), R), hi: true, at: [[W - 8, 14, 'end'], [W - 8, 4, 'end']] },
      { t: 'Centre of mass', p: g.cm, own: g.cm, at: [[O[0] - 40, 46, 'middle'], [O[0] - 40, 34, 'middle']] },
      { t: 'Wire', p: add(O, dir(150), R), at: [[14, 64, 'start'], [14, 50, 'start']] },
    ]);
    return s;
  },
  check() {
    const { O, R, th, dth } = F62, g = geo62();
    const M = 1, lam = M / (Math.PI * R);
    const mass = simpson(() => lam * R, 0, Math.PI);
    const ycm = simpson((t) => R * Math.sin(t) * lam * R, 0, Math.PI) / M;
    const xcm = simpson((t) => R * Math.cos(t) * lam * R, 0, Math.PI) / M;
    return [
      ['Both ends of the element lie on the wire (distance R from O)', close(len(sub(g.E1, O)), R) && close(len(sub(g.E2, O)), R)],
      [`The element is at θ = ${fmt(angOf(sub(g.E1, O)))}° and subtends dθ = ${fmt(angOf(sub(g.E2, O)) - angOf(sub(g.E1, O)))}°`, close(angOf(sub(g.E1, O)), th) && close(angOf(sub(g.E2, O)) - th, dth)],
      [`Its height above the axis is drawn ${fmt((O[1] - g.E1[1]) / R, 4)} R = R sin θ`, close((O[1] - g.E1[1]) / R, Math.sin(th * D2R)) && close(g.foot[0], g.E1[0])],
      [`λ = M/(πR): the elements dm = λR dθ add up to M (${fmt(mass, 6)})`, close(mass, M, 1e-9)],
      [`y_cm = (1/M)∫R sin θ dm = ${fmt(ycm / R, 5)} R = 2R/π`, close(ycm, (2 * R) / Math.PI, 1e-6)],
      [`The dash-dot line is drawn ${fmt((O[1] - g.cm[1]) / R, 5)} R above the diameter`, close(O[1] - g.cm[1], ycm, 1e-6)],
      [`x_cm = ${fmt(xcm, 6)}: by symmetry the centre of mass is on the vertical through O`, close(xcm, 0, 1e-6) && close(g.cm[0], O[0])],
      ['2/π < 1: the centre of mass lies in empty space, not on the wire', ycm < R],
    ];
  },
};

/* ===================================================================== */
/* Figure 6.3 · a bullet embeds in a pivoted rod (topic 04, Example 4)    */
/* ===================================================================== */
/** Pivot O, rod of L px along +x; the bullet comes straight down (perpendicular) onto the free end. */
const F63 = { O: [40, 150] as P, L: 250, b0: 58, gap: 8, wr: 160, w0: 44, w1: 11 };
const fig63: Diagram = {
  id: 'p11-06-fig-6.3',
  topic: 3,
  name: 'A bullet strikes a pivoted rod',
  cases: [{ chip: 'Rod and bullet', cap: 'A rod of mass <i>M</i> and length <i>L</i> pivoted at its left end. A bullet of mass <i>m</i> moving perpendicular to the rod at speed <i>v</i> embeds at the free end, and the system then turns clockwise about the pivot with angular speed <i>ω</i>.' }],
  draw() {
    const s = new Sketch(W, 262);
    const { O, L, b0, gap, wr, w0, w1 } = F63, end: P = [O[0] + L, O[1]], B: P = [end[0], b0];
    s.line(O[0], O[1], end[0], end[1], { w: 5 });
    turn(s, O, wr, w0, w1, { color: C.slate, w: 1.8 });
    force(s, B, [0, end[1] - gap - B[1]], HI);
    s.dot(O[0], O[1], 4.6);
    s.dot(B[0], B[1], 4.6, C.mari);
    keepClear(s, end, 3);
    s.sym(W - 8, 24, '<i>ω</i> after impact (clockwise)', { size: 15, anchor: 'end', color: C.slate });
    s.sym(B[0] + 10, (B[1] + end[1]) / 2 + 2, '<i>m</i>, <i>v</i>', { size: 16, anchor: 'start', color: C.amber });
    s.sym((O[0] + end[0]) / 2 + 10, O[1] + 26, 'rod, mass <i>M</i>, length <i>L</i>', { size: 15 });
    s.sym(O[0], O[1] + 26, 'O');
    const res = resultBlock(s, ['<i>L</i><sub><i>i</i></sub> = <i>mvL</i> = <i>L</i><sub><i>f</i></sub>', '= (⅓<i>ML</i><sup>2</sup> + <i>mL</i><sup>2</sup>)<i>ω</i>']);
    s.place(
      [
        { t: 'Bullet', p: B, own: B, hi: true, at: [[B[0] - 18, B[1] - 6, 'end'], [B[0] - 18, B[1] + 8, 'end']] },
        { t: 'Pivot', p: O, own: O, at: [[14, O[1] - 52, 'start'], [14, O[1] - 66, 'start']] },
      ],
      [res]
    );
    return s;
  },
  check() {
    const { O, L, b0, w0, w1 } = F63, end: P = [O[0] + L, O[1]], B: P = [end[0], b0];
    const vDir: P = [0, 1], rodDir = sub(end, O);
    const Lz = crossZ(rodDir, vDir); // r × v at the moment of impact (per unit m v)
    // sample values: M = 3 kg, m = 0.1 kg, v = 300 m/s, L = 1 m
    const M = 3, m = 0.1, v = 300, Lm = 1;
    const Irod = simpson((x) => x * x * (M / Lm), 0, Lm);
    const If = Irod + m * Lm * Lm, w = (m * v * Lm) / If;
    return [
      ['The bullet moves at right angles to the rod and meets it at the free end', close(dotp(vDir, rodDir), 0) && close(B[0], end[0]) && B[1] < end[1]],
      [`Its angular momentum about O is ${fmt(Lz / L, 3)} × mvL: magnitude mvL (lever arm L), negative z, so clockwise`, close(Math.abs(Lz), L) && Lz < 0],
      ['The ω arrow is drawn clockwise (it turns from above the rod down towards it)', w1 < w0],
      [`I_f = ML²/3 + mL² (rod about its end, ∫x² dm = ${fmt(Irod, 6)} = ML²/3, plus the bullet)`, close(Irod, (M * Lm * Lm) / 3, 1e-9) && close(If, (M * Lm * Lm) / 3 + m * Lm * Lm, 1e-9)],
      [`mvL = I_f ω gives ω = 3mv/(L(M + 3m)) = ${fmt(w, 4)} rad/s (sample: M = 3 kg, m = 0.1 kg, v = 300 m/s, L = 1 m)`, close(w, (3 * m * v) / (Lm * (M + 3 * m)), 1e-9)],
      ['Kinetic energy is not conserved (perfectly inelastic): ½I_f ω² < ½mv²', 0.5 * If * w * w < 0.5 * m * v * v],
    ];
  },
};

/* ===================================================================== */
/* Figure 6.4 · the lever and the principle of moments (topic 05)         */
/* ===================================================================== */
/** d₁ : d₂ = 2 : 3 (px), so F₁ : F₂ = 3 : 2 for balance: the smaller force F₂ on the longer arm balances the larger F₁ (a lever's advantage); k px per unit of force. */
const LEV = { O: [145, 130] as P, d1: 60, d2: 90, F1: 3, F2: 2, k: 22, barL: 20, barR: 320 };
const fig64: Diagram = {
  id: 'p11-06-fig-6.4',
  topic: 4,
  name: 'A lever balanced on a fulcrum',
  cases: [{ chip: 'Principle of moments', cap: 'A lever balanced on a triangular fulcrum at <i>O</i>. A downward force <i>F</i><sub>1</sub> acts at distance <i>d</i><sub>1</sub> to the left of <i>O</i> and a downward force <i>F</i><sub>2</sub> at distance <i>d</i><sub>2</sub> to the right; they turn the lever in opposite senses, and equilibrium requires <i>F</i><sub>1</sub><i>d</i><sub>1</sub> = <i>F</i><sub>2</sub><i>d</i><sub>2</sub>.' }],
  draw() {
    const s = new Sketch(W, 300);
    const { O, d1, d2, F1, F2, k, barL, barR } = LEV;
    const A: P = [O[0] - d1, O[1]], B: P = [O[0] + d2, O[1]], top = O[1] - 4, base = O[1] + 58, dimY = O[1] + 92;
    s.line(O[0] - 40, base, O[0] + 40, base, { w: 1.7 });
    shape(s, [[O[0], O[1] + 3], [O[0] + 27, base], [O[0] - 27, base]]);
    s.line(barL, O[1], barR, O[1], { w: 5 });
    force(s, [A[0], top - F1 * k], [0, F1 * k], HI);
    force(s, [B[0], top - F2 * k], [0, F2 * k]);
    s.dot(O[0], O[1], 3.8);
    path(s, [[A[0], O[1] + 5], [A[0], dimY + 6]], { color: C.slate, w: 1, dash: 'dot' });
    path(s, [[O[0], base + 3], [O[0], dimY + 6]], { color: C.slate, w: 1, dash: 'dot' });
    path(s, [[B[0], O[1] + 5], [B[0], dimY + 6]], { color: C.slate, w: 1, dash: 'dot' });
    measure(s, [A[0], dimY], [O[0] - 2, dimY]);
    measure(s, [O[0] + 2, dimY], [B[0], dimY]);
    s.sym((A[0] + O[0]) / 2, dimY + 21, '<i>d</i><sub>1</sub>', { size: 16, color: C.slate });
    s.sym((O[0] + B[0]) / 2, dimY + 21, '<i>d</i><sub>2</sub>', { size: 16, color: C.slate });
    s.sym(A[0] - 8, top - F1 * k + 18, '<i>F</i><sub>1</sub>', { size: 16, anchor: 'end', color: C.amber });
    s.sym(B[0] - 8, top - F2 * k + 18, '<i>F</i><sub>2</sub>', { size: 16, anchor: 'end' });
    s.sym(O[0], O[1] - 12, 'O');
    const res = resultBlock(s, ['Σ<i>τ</i><sub><i>O</i></sub> = 0 ⇒ <i>F</i><sub>1</sub><i>d</i><sub>1</sub> = <i>F</i><sub>2</sub><i>d</i><sub>2</sub>']);
    s.place(
      [
        { t: 'Anticlockwise', p: [A[0], top - F1 * k * 0.45], hi: true, at: [[A[0] + 12, 70, 'start'], [A[0] + 12, 62, 'start']] },
        { t: 'Clockwise', p: [B[0], top - F2 * k * 0.3], at: [[B[0] + 12, 76, 'start'], [B[0] + 12, 88, 'start']] },
        { t: 'Fulcrum', p: [O[0] - 15, (O[1] + base) / 2 + 6], at: [[O[0] - 40, 150, 'end'], [O[0] - 40, 166, 'end']] },
      ],
      [res]
    );
    return s;
  },
  check() {
    const { O, d1, d2, F1, F2, k } = LEV;
    const A: P = [O[0] - d1, O[1]], B: P = [O[0] + d2, O[1]];
    const f1: P = [0, F1 * k], f2: P = [0, F2 * k];
    const t1 = crossZ(sub(A, O), f1) / k, t2 = crossZ(sub(B, O), f2) / k;
    return [
      ['Both forces are drawn straight down, at right angles to the lever, so each arm is the distance along the lever', close(f1[0], 0) && close(f2[0], 0) && f1[1] > 0 && f2[1] > 0],
      [`d₁ : d₂ = ${fmt(d1 / d2, 4)} and F₁ : F₂ = ${fmt(F1 / F2, 4)} as drawn: F₁d₁ = ${fmt(F1 * d1)} = F₂d₂ = ${fmt(F2 * d2)}`, close(F1 * d1, F2 * d2) && close(len(f1) / k, F1) && close(len(f2) / k, F2)],
      [`The smaller force F₂ acts on the longer arm (d₂ = ${fmt(d2 / d1, 2)} d₁), so it balances the larger F₁ = ${fmt(F1 / F2, 2)} F₂`, d2 > d1 && F2 < F1 && close(F1 / F2, d2 / d1)],
      [`Torque of F₁ about O = ${fmt(t1)} (anticlockwise, +), of F₂ = ${fmt(t2)} (clockwise, −): opposite senses`, t1 > 0 && t2 < 0],
      ['The drawn torques about O add to zero: Στ_O = 0', close(t1 + t2, 0)],
      ['F₁ acts left of O, F₂ right of O; both on the lever', A[0] < O[0] && B[0] > O[0] && A[0] > LEV.barL && B[0] < LEV.barR],
    ];
  },
};

/* ===================================================================== */
/* Figure 6.5 · beam on two supports (topic 05, Example 3)                */
/* ===================================================================== */
/** 4 m beam, 200 N at x = 2 m, supports at x = 0 (A) and x = 3 m (B). px per m and per N. */
const BEAM = { L: 4, Wt: 200, xW: 2, xA: 0, xB: 3, x0: 30, pxm: 70, k: 0.4, top: 140, th: 12 };
const beam65 = () => {
  const { Wt, xW, xA, xB } = BEAM;
  const NB = (Wt * (xW - xA)) / (xB - xA), NA = Wt - NB;
  return { NA, NB };
};
const fig65: Diagram = {
  id: 'p11-06-fig-6.5',
  topic: 4,
  name: 'A beam on two supports',
  cases: [{ chip: 'Beam reactions', cap: 'A 4 m beam of weight 200 N (acting at its centre, <i>x</i> = 2 m) rests on supports <i>A</i> at <i>x</i> = 0 and <i>B</i> at <i>x</i> = 3 m. The upward reactions at <i>A</i> and <i>B</i> are about 66.7 N and 133.3 N.' }],
  draw() {
    const s = new Sketch(W, 268);
    const { L, Wt, xW, xA, xB, x0, pxm, k, top, th } = BEAM, r = beam65();
    const X = (m: number) => x0 + m * pxm, bot = top + th, base = bot + 26, under = base + 4;
    measure(s, [X(0), 28], [X(L), 28]);
    measure(s, [X(0), 54], [X(xB), 54]);
    s.sym(X(L / 2), 20, `${L} m`, { size: 14, color: C.slate });
    s.sym(X(xB / 2), 46, `${xB} m`, { size: 14, color: C.slate });
    shape(s, [[X(0), top], [X(L), top], [X(L), bot], [X(0), bot]]);
    [xA, xB].forEach((m) => shape(s, [[X(m), bot], [X(m) + 14, base], [X(m) - 14, base]]));
    force(s, [X(xW), top - 2 - Wt * k], [0, Wt * k], HI);
    force(s, [X(xA), under + r.NA * k], [0, -r.NA * k]);
    force(s, [X(xB), under + r.NB * k], [0, -r.NB * k]);
    s.sym(X(xW) + 8, top - 40, `<i>W</i> = ${Wt} N`, { anchor: 'start', color: C.amber });
    s.sym(X(xA) + 20, bot + 22, '<i>A</i>', { anchor: 'start' });
    s.sym(X(xB) + 20, bot + 22, '<i>B</i>', { anchor: 'start' });
    s.sym(X(xA) - 18, under + r.NA * k + 20, `<i>N</i><sub><i>A</i></sub> ≈ ${r.NA.toFixed(1)} N`, { anchor: 'start' });
    s.sym(X(xB), under + r.NB * k + 20, `<i>N</i><sub><i>B</i></sub> ≈ ${r.NB.toFixed(1)} N`);
    s.place([
      { t: 'Weight at the centre', p: [X(xW), top - 2 - Wt * k * 0.3], hi: true, at: [[X(xW) - 12, 70, 'end'], [X(xW) - 12, 84, 'end']] },
      { t: 'Beam', p: [X(L) - 14, top], at: [[W - 8, top - 34, 'end'], [W - 8, top - 46, 'end']] },
    ]);
    return s;
  },
  check() {
    const { L, Wt, xW, xA, xB, x0, pxm, k } = BEAM, r = beam65();
    const X = (m: number) => x0 + m * pxm, m = (px: number) => (px - x0) / pxm;
    const arrows = { W: Wt * k, A: r.NA * k, B: r.NB * k }; // the drawn lengths, px
    const NA = arrows.A / k, NB = arrows.B / k;
    return [
      [`The beam is drawn ${fmt(m(X(L)) - m(X(0)))} m long; W at x = ${fmt(m(X(xW)))} m (its centre), A at ${fmt(m(X(xA)))} m, B at ${fmt(m(X(xB)))} m`, close(m(X(L)), L) && close(xW, L / 2) && close(m(X(xA)), 0) && close(m(X(xB)), 3)],
      [`Torques about A: N_B(3) − 200(2) = 0 ⇒ N_B = 400/3 = ${fmt(NB, 3)} N ≈ 133.3 N`, close(NB * (xB - xA) - Wt * (xW - xA), 0) && NB.toFixed(1) === '133.3'],
      [`Force balance: N_A = 200 − N_B = ${fmt(NA, 3)} N ≈ 66.7 N`, close(NA + NB, Wt) && NA.toFixed(1) === '66.7'],
      ['Torques about B balance too (a second, independent check)', close(-NA * (xB - xA) + Wt * (xB - xW), 0)],
      [`The arrows are drawn to one scale: W ${fmt(arrows.W)} px, N_A ${fmt(arrows.A)} px, N_B ${fmt(arrows.B)} px; the up arrows add to the down arrow`, close(arrows.A + arrows.B, arrows.W)],
      ['B, nearer the centre of gravity, carries more of the load', NB > NA && Math.abs(xB - xW) < Math.abs(xA - xW)],
    ];
  },
};

/* ===================================================================== */
/* Figure 6.6 · ladder against a smooth wall (topic 05, Example 4)        */
/* ===================================================================== */
/** θ = 60°, ladder of L px; forces drawn at the limit, W = `Wpx` px. */
const LAD = { th: 60, L: 220, wallX: 70, floorY: 262, Wpx: 88 };
const geo66 = () => {
  const { th, L, wallX, floorY, Wpx } = LAD, t = th * D2R;
  const foot: P = [wallX + L * Math.cos(t), floorY], top: P = [wallX, floorY - L * Math.sin(t)];
  const mid: P = [(foot[0] + top[0]) / 2, (foot[1] + top[1]) / 2];
  const Nw = Wpx / (2 * Math.tan(t));
  return { foot, top, mid, Wv: [0, Wpx] as P, Nfv: [0, -Wpx] as P, fv: [-Nw, 0] as P, Nwv: [Nw, 0] as P };
};
const fig66: Diagram = {
  id: 'p11-06-fig-6.6',
  topic: 4,
  name: 'A ladder against a smooth wall',
  cases: [{ chip: 'Ladder', cap: 'A ladder inclined at angle <i>θ</i> to the floor, resting against a smooth wall. Forces: weight <i>W</i> at the midpoint, the horizontal reaction of the wall at the top, and at the foot the upward normal reaction of the floor and the horizontal friction <i>f</i>.' }],
  draw() {
    const s = new Sketch(W, 362);
    const { wallX, floorY, th } = LAD, g = geo66();
    s.line(wallX, 40, wallX, floorY, { w: 2.4 });
    hatch(s, [wallX, floorY], [wallX, 40], 1, 14);
    s.line(wallX - 16, floorY, 326, floorY, { w: 2.2 });
    hatch(s, [wallX, floorY], [326, floorY], -1, 14);
    s.line(g.top[0], g.top[1], g.foot[0], g.foot[1], { w: 4 });
    arc(s, g.foot, 30, 180 - th, 180, { color: C.slate, w: 1.3 });
    force(s, g.mid, g.Wv);
    force(s, g.foot, g.Nfv);
    force(s, g.top, g.Nwv);
    force(s, g.foot, g.fv, HI);
    s.dot(g.mid[0], g.mid[1], 3.2);
    s.dot(g.foot[0], g.foot[1], 3);
    s.dot(g.top[0], g.top[1], 3);
    const at = (p: P, v: P) => add(p, v);
    s.sym(at(g.top, g.Nwv)[0] - 4, g.top[1] - 9, '<i>N</i><sub><i>w</i></sub>', { anchor: 'middle' });
    s.sym(g.mid[0] - 8, g.mid[1] + 52, '<i>W</i>', { anchor: 'end' });
    s.sym(g.foot[0] + 8, g.foot[1] - 52, '<i>N</i><sub><i>f</i></sub>', { anchor: 'start' });
    s.sym(g.foot[0] - 14, floorY + 26, '<i>f</i>', { color: C.amber });
    s.sym(...add(g.foot, dir(180 - th / 2), 46), '<i>θ</i>', { size: 15, color: C.slate });
    const res = resultBlock(s, ['<i>f</i> = <i>N</i><sub><i>w</i></sub>,  <i>N</i><sub><i>f</i></sub> = <i>W</i>,', '<i>μ</i><sub>min</sub> = 1/(2 tan <i>θ</i>)']);
    s.place(
      [
        { t: 'Friction', p: at(g.foot, mul(g.fv, 0.5)), hi: true, at: [[14, 284, 'start'], [14, 296, 'start']] },
        { t: 'Smooth wall', p: [wallX, 52], at: [[14, 6, 'start'], [wallX + 14, 6, 'start']] },
        { t: 'Rough floor', p: [300, floorY], at: [[W - 8, floorY - 40, 'end'], [W - 8, floorY - 54, 'end']] },
      ],
      [res]
    );
    return s;
  },
  check() {
    const { th, L, Wpx } = LAD, g = geo66(), t = th * D2R;
    const torque = (o: P) => crossZ(sub(g.mid, o), g.Wv) + crossZ(sub(g.top, o), g.Nwv) + crossZ(sub(g.foot, o), g.Nfv) + crossZ(sub(g.foot, o), g.fv);
    const mu = len(g.fv) / len(g.Nfv);
    return [
      [`The ladder makes ${fmt(between(sub(g.top, g.foot), [-1, 0]))}° with the floor and is ${fmt(len(sub(g.top, g.foot)))} px long, its top on the wall`, close(between(sub(g.top, g.foot), [-1, 0]), th) && close(len(sub(g.top, g.foot)), L) && close(g.top[0], LAD.wallX)],
      ['W acts at the midpoint, straight down; N_f straight up and f horizontal, towards the wall, at the foot', close(g.mid[0], (g.top[0] + g.foot[0]) / 2) && close(g.Wv[0], 0) && close(g.Nfv[0], 0) && g.Nfv[1] < 0 && close(g.fv[1], 0) && g.fv[0] < 0],
      ['The smooth wall pushes horizontally, away from the wall', close(g.Nwv[1], 0) && g.Nwv[0] > 0],
      [`Horizontal: f = N_w (${fmt(len(g.fv), 3)} = ${fmt(len(g.Nwv), 3)} px); vertical: N_f = W`, close(len(g.fv), len(g.Nwv)) && close(len(g.Nfv), Wpx)],
      [`Torques about the foot: N_w L sin θ = W (L/2) cos θ ⇒ N_w = (W/2) cot θ = ${fmt(len(g.Nwv) / Wpx, 4)} W`, close(len(g.Nwv) * L * Math.sin(t), Wpx * (L / 2) * Math.cos(t)) && close(torque(g.foot), 0, 1e-6)],
      ['The drawn forces add to zero, and their torques vanish about the top and the midpoint too', balanced([g.Wv, g.Nfv, g.fv, g.Nwv]) && close(torque(g.top), 0, 1e-6) && close(torque(g.mid), 0, 1e-6)],
      [`μ_min = f/N_f = 1/(2 tan θ) = ½ cot θ = ${fmt(mu, 4)}`, close(mu, 1 / (2 * Math.tan(t))) && close(mu, 0.5 / Math.tan(t))],
    ];
  },
};

/* ===================================================================== */
/* Figure 6.7 · moment of inertia of a rod about its centre (topic 06)    */
/* ===================================================================== */
/** Rod from −L/2 to +L/2 (L px); the element at x = 0.32 L, width dx = 16 px. */
const ROD = { cx: 170, L: 280, y: 100, th: 14, x: 0.32, dx: 16, axis: [[170, 44], [170, 184]] as P[] };
const fig67: Diagram = {
  id: 'p11-06-fig-6.7',
  topic: 5,
  name: 'Moment of inertia of a rod about its centre',
  cases: [{ chip: 'Rod, central axis', cap: 'A uniform rod of length <i>L</i> centred at the origin, with a small element of width d<i>x</i> at distance <i>x</i> from the centre. The rotation axis is perpendicular to the rod through its centre (drawn as the dashed vertical line).' }],
  draw() {
    const s = new Sketch(W, 262);
    const { cx, L, y, th, x, dx } = ROD, x0 = cx - L / 2, x1 = cx + L / 2, ex = cx + x * L, bot = y + th;
    shape(s, [[x0, y], [x1, y], [x1, bot], [x0, bot]]);
    path(s, ROD.axis, { color: C.ink, w: 1.6, dash: 'dash' });
    shape(s, [[ex, y], [ex + dx, y], [ex + dx, bot], [ex, bot]], { color: C.mari, w: 2.6, fill: false });
    path(s, [[ex, y - 3], [ex, y - 16]], { color: C.slate, w: 1, dash: 'dot' });
    path(s, [[ex + dx, y - 3], [ex + dx, y - 16]], { color: C.slate, w: 1, dash: 'dot' });
    measure(s, [cx + 2, bot + 22], [ex, bot + 22]);
    path(s, [[ex, bot + 3], [ex, bot + 28]], { color: C.slate, w: 1, dash: 'dot' });
    s.sym(ex + dx / 2, y - 22, 'd<i>x</i>', { size: 15, color: C.amber });
    s.sym((cx + ex) / 2, bot + 42, '<i>x</i>', { size: 16, color: C.slate });
    s.sym(x0 + 4, y - 12, '−<i>L</i>/2', { size: 15 });
    s.sym(x1 - 6, y - 12, '+<i>L</i>/2', { size: 15 });
    keepClear(s, [cx, (y + bot) / 2], 2);
    const res = resultBlock(s, ['d<i>m</i> = (<i>M</i>/<i>L</i>) d<i>x</i>,  d<i>I</i> = <i>x</i><sup>2</sup> d<i>m</i>', '⇒ <i>I</i> = <i>ML</i><sup>2</sup>/12']);
    s.place(
      [
        { t: 'Element dm', p: [ex + dx / 2, bot], hi: true, at: [[W - 8, bot + 32, 'end'], [W - 8, bot + 44, 'end']] },
        { t: 'Axis', p: [cx, 46], at: [[cx, 10, 'middle'], [cx + 12, 10, 'start']] },
      ],
      [res]
    );
    return s;
  },
  check() {
    const { cx, L, x, dx } = ROD, x0 = cx - L / 2, x1 = cx + L / 2, ex = cx + x * L;
    const M = 1, Lm = 1;
    const mass = simpson(() => M / Lm, -Lm / 2, Lm / 2);
    const I = simpson((u) => u * u * (M / Lm), -Lm / 2, Lm / 2);
    return [
      ['The rod is centred on the axis: it runs from −L/2 to +L/2', close(cx - x0, L / 2) && close(x1 - cx, L / 2)],
      [`The element sits at x = ${fmt((ex - cx) / L, 2)} L, wholly on the rod`, ex > cx && ex + dx < x1],
      [`dm = (M/L) dx adds up to M (${fmt(mass, 6)})`, close(mass, M, 1e-9)],
      [`I = ∫x² dm from −L/2 to L/2 = ${fmt(I, 6)} ML² = ML²/12`, close(I, (M * Lm * Lm) / 12, 1e-9)],
      ['The dashed axis passes through the centre and is at right angles to the rod', close(ROD.axis[0][0], cx) && close(ROD.axis[1][0], cx) && close(dotp(sub(ROD.axis[1], ROD.axis[0]), [1, 0]), 0) && ROD.axis[0][1] < ROD.y && ROD.axis[1][1] > ROD.y + ROD.th],
    ];
  },
};

/* ===================================================================== */
/* Figure 6.8 · moment of inertia of a solid sphere, by slices (topic 06) */
/* ===================================================================== */
/** Sphere of R px; the slice's lower face at height y = 0.5 R, thickness dy = 0.1 R. Faces drawn as ellipses (tilt k). */
const SPH = { c: [160, 150] as P, R: 110, y: 0.5, dy: 0.1, k: 0.16 };
const geo68 = () => {
  const { c, R, y, dy } = SPH;
  const yb = c[1] - y * R, yt = c[1] - (y + dy) * R;
  return { yb, yt, rb: Math.sqrt(R * R - (y * R) ** 2), rt: Math.sqrt(R * R - ((y + dy) * R) ** 2) };
};
const fig68: Diagram = {
  id: 'p11-06-fig-6.8',
  topic: 5,
  name: 'Moment of inertia of a solid sphere',
  cases: [{ chip: 'Disc slices', cap: 'A solid sphere of radius <i>R</i> with its axis along <i>y</i>. A thin disc-slice of thickness d<i>y</i> at height <i>y</i> has radius <i>r</i> = √(<i>R</i><sup>2</sup> − <i>y</i><sup>2</sup>) and is perpendicular to the axis.' }],
  draw() {
    const s = new Sketch(W, 340);
    const { c, R, k } = SPH, g = geo68(), mx = c[0] + 42, dyX = c[0] - R - 16;
    circle(s, c, R, { w: 2.2, fill: false });
    path(s, [[c[0], 24], [c[0], 272]], { color: C.ink, w: 1.6, dash: 'dash' });
    ellipse(s, [c[0], g.yb], g.rb, g.rb * k, { color: C.mari, w: 2.2 });
    ellipse(s, [c[0], g.yt], g.rt, g.rt * k, { color: C.mari, w: 2.2 });
    path(s, [[c[0], g.yb], [c[0] + g.rb, g.yb]], { color: C.slate, w: 1.3 });
    path(s, [c, [mx, c[1]]], { color: C.slate, w: 1, dash: 'dot' });
    s.vec(mx, c[1], mx, g.yb + 2, { color: C.slate, w: 1.6 });
    path(s, [[dyX + 4, g.yt], [c[0] - g.rt - 2, g.yt]], { color: C.grey, w: 1, dash: 'dot' });
    path(s, [[dyX + 4, g.yb], [c[0] - g.rb - 2, g.yb]], { color: C.grey, w: 1, dash: 'dot' });
    s.vec(dyX, g.yt - 16, dyX, g.yt, { color: C.slate, w: 1.4 });
    s.vec(dyX, g.yb + 16, dyX, g.yb, { color: C.slate, w: 1.4 });
    s.dot(c[0], c[1], 3.4);
    keepClear(s, [c[0] + g.rb, g.yb], 2);
    s.sym(c[0] + g.rb + 8, g.yb + 5, '<i>r</i>', { size: 16, anchor: 'start' });
    s.sym(mx + 7, (c[1] + g.yb) / 2 + 6, '<i>y</i>', { size: 16, anchor: 'start', color: C.slate });
    s.sym(dyX - 6, (g.yt + g.yb) / 2 + 5, 'd<i>y</i>', { size: 15, anchor: 'end', color: C.slate });
    const res = resultBlock(s, ['<i>r</i> = √(<i>R</i><sup>2</sup> − <i>y</i><sup>2</sup>)', 'd<i>I</i> = ½(d<i>m</i>)<i>r</i><sup>2</sup> ⇒ <i>I</i> = ⅖<i>MR</i><sup>2</sup>']);
    const tp: P = [c[0] - 60, g.yt - g.rt * k * Math.sqrt(1 - (60 / g.rt) ** 2)];
    s.place(
      [
        { t: 'Disc slice', p: tp, hi: true, at: [[14, 18, 'start'], [14, 30, 'start']] },
        { t: 'Axis', p: [c[0], 26], at: [[c[0] + 14, 4, 'start'], [c[0] + 14, 14, 'start']] },
      ],
      [res]
    );
    return s;
  },
  check() {
    const { c, R, y, dy } = SPH, g = geo68();
    const M = 1, Rm = 1, rho = M / ((4 / 3) * Math.PI * Rm ** 3);
    const mass = simpson((u) => rho * Math.PI * (Rm * Rm - u * u), -Rm, Rm);
    const I = simpson((u) => 0.5 * (rho * Math.PI * (Rm * Rm - u * u)) * (Rm * Rm - u * u), -Rm, Rm);
    return [
      ['Both faces of the slice meet the sphere: r² + y² = R² at each', close(g.rb ** 2 + (c[1] - g.yb) ** 2, R * R) && close(g.rt ** 2 + (c[1] - g.yt) ** 2, R * R)],
      [`At height y = ${fmt(y, 2)} R the slice's radius is drawn ${fmt(g.rb / R, 4)} R = √(R² − y²)`, close(g.rb / R, Math.sqrt(1 - y * y))],
      [`The slice is d y = ${fmt((g.yb - g.yt) / R, 2)} R thick, centred on the axis and perpendicular to it (level faces)`, close((g.yb - g.yt) / R, dy)],
      [`Slices dm = ρπr² dy add up to M (${fmt(mass, 6)})`, close(mass, M, 1e-9)],
      [`I = ∫½(dm)r² = ${fmt(I, 6)} MR² = ⅖ MR²`, close(I, 0.4 * M * Rm * Rm, 1e-9)],
    ];
  },
};

/* ===================================================================== */
/* Figure 6.9 · τ = Iα from one particle (topic 07)                       */
/* ===================================================================== */
/** The body: r(φ) = R₀(1 + a cos 3(φ − 30°)), three lobes; the particle at φ = −20°, 0.9 of the way to the edge. */
const BODY = { c: [150, 136] as P, R0: 90, a: 0.14, phi: -20, f: 0.9, alpha: 0.7, m: 1, ar: 46, a0: 105, a1: 172 };
const rEdge = (phi: number) => BODY.R0 * (1 + BODY.a * Math.cos(3 * (phi - 30) * D2R));
const geo69 = () => {
  const { c, phi, f, alpha, m } = BODY;
  const ri = f * rEdge(phi), at = add(c, dir(phi), ri);
  const F = m * ri * alpha;
  return { ri, at, F, Fv: mul(dir(phi + 90), F) };
};
const fig69: Diagram = {
  id: 'p11-06-fig-6.9',
  topic: 6,
  name: 'Why τ = Iα: one particle at a time',
  cases: [{ chip: 'Particle mᵢ', cap: 'A rigid body turning with angular acceleration <i>α</i> about an axis through its centre, perpendicular to the page. A particle of mass <i>m</i><sub><i>i</i></sub> at perpendicular distance <i>r</i><sub><i>i</i></sub> from the axis needs a tangential force <i>F</i><sub><i>i</i></sub> = <i>m</i><sub><i>i</i></sub><i>r</i><sub><i>i</i></sub><i>α</i>, so its torque is <i>m</i><sub><i>i</i></sub><i>r</i><sub><i>i</i></sub><sup>2</sup><i>α</i>.' }],
  draw() {
    const s = new Sketch(W, 320);
    const { c, ar, a0, a1, phi } = BODY, g = geo69();
    const outline: P[] = [];
    for (let i = 0; i <= 180; i++) { const p = i * 2; outline.push(add(c, dir(p), rEdge(p))); }
    shape(s, outline, { w: 2 });
    path(s, [c, g.at], { color: C.slate, w: 1.4 });
    turn(s, c, ar, a0, a1, { color: C.ink, w: 1.8 });
    force(s, g.at, g.Fv, HI);
    outOfPage(s, c);
    s.dot(g.at[0], g.at[1], 4.2, C.mari);
    const tip = add(g.at, g.Fv), mid = add(c, dir(phi), g.ri * 0.55);
    s.sym(tip[0] + 6, tip[1] + 2, '<i>F</i><sub><i>i</i></sub> = <i>m</i><sub><i>i</i></sub><i>r</i><sub><i>i</i></sub><i>α</i>', { size: 15, anchor: 'start', color: C.amber });
    s.sym(mid[0] + 2, mid[1] + 20, '<i>r</i><sub><i>i</i></sub>', { size: 16, color: C.slate });
    s.sym(g.at[0] + 10, g.at[1] + 22, '<i>m</i><sub><i>i</i></sub>', { size: 16, anchor: 'start' });
    s.sym(...add(c, dir((a0 + a1) / 2), ar + 18), '<i>α</i>', { size: 16 });
    const res = resultBlock(s, ['<i>τ</i><sub><i>i</i></sub> = <i>F</i><sub><i>i</i></sub><i>r</i><sub><i>i</i></sub> = <i>m</i><sub><i>i</i></sub><i>r</i><sub><i>i</i></sub><sup>2</sup><i>α</i>', '⇒ <i>τ</i> = (Σ<i>m</i><sub><i>i</i></sub><i>r</i><sub><i>i</i></sub><sup>2</sup>)<i>α</i> = <i>Iα</i>']);
    s.place(
      [
        { t: 'Tangential force', p: add(g.at, g.Fv, 0.5), hi: true, at: [[W - 8, 14, 'end'], [W - 8, 24, 'end']] },
        { t: 'Axis ⊥ page', ring: [c[0], c[1], OUT_R], own: c, at: [[c[0] - 30, c[1] + 40, 'middle'], [c[0] - 20, c[1] + 54, 'middle']] },
      ],
      [res]
    );
    return s;
  },
  check() {
    const { c, phi, alpha, m, a0, a1 } = BODY, g = geo69();
    const r = sub(g.at, c), tau = crossZ(r, g.Fv);
    return [
      [`The particle is inside the body: r_i = ${fmt(g.ri, 1)} px < the edge's ${fmt(rEdge(phi), 1)} px`, g.ri < rEdge(phi)],
      ['F_i is tangential: at right angles to r_i', close(dotp(r, g.Fv), 0)],
      [`F_i = m_i r_i α: drawn ${fmt(len(g.Fv), 2)} = ${fmt(m * g.ri * alpha, 2)}`, close(len(g.Fv), m * g.ri * alpha)],
      [`Its torque r_i × F_i = ${fmt(tau, 1)} = F_i r_i = m_i r_i² α`, close(tau, len(g.Fv) * g.ri) && close(tau, m * g.ri * g.ri * alpha)],
      ['F_i turns the body the way α is drawn (both anticlockwise, out of the page)', tau > 0 && a1 > a0],
    ];
  },
};

/* ===================================================================== */
/* Figure 6.10 · a block hanging from a massive pulley (topic 07, Ex. 3)  */
/* ===================================================================== */
/** Drawn for M = 2m (any M works): a = g/2, T = mg/2. mg = `mg` px. */
const PUL = { c: [160, 112] as P, R: 48, ceil: 24, blockTop: 214, bw: 50, bh: 38, mg: 58, Mm: 2, al0: -10, al1: -78 };
const pul610 = () => {
  const { Mm } = PUL, g = 1; // in units of g and m
  const a = g / (1 + Mm / 2), T = 1 * g - 1 * a;
  return { a, T };
};
const fig610: Diagram = {
  id: 'p11-06-fig-6.10',
  topic: 6,
  name: 'A block hanging from a massive pulley',
  cases: [{ chip: 'Disc pulley', cap: 'A disc-shaped pulley of mass <i>M</i> and radius <i>R</i> on a fixed horizontal axle, with a string carrying a hanging block of mass <i>m</i>. The tension <i>T</i> pulls up on the block and, at the rim, supplies the torque <i>TR</i> that spins the pulley.' }],
  draw() {
    const s = new Sketch(W, 384);
    const { c, R, ceil, blockTop, bw, bh, mg } = PUL, p = pul610();
    const sx = c[0] + R, bb = blockTop + bh, Tx = sx + 17;
    s.line(c[0] - 80, ceil, c[0] + 80, ceil, { w: 2.6 });
    hatch(s, [c[0] - 80, ceil], [c[0] + 80, ceil], 1, 14);
    s.line(c[0], ceil, c[0], c[1], { w: 1.8 });
    circle(s, c, R, { w: 2.2 });
    s.line(sx, c[1], sx, blockTop, { w: 1.6 });
    shape(s, [[sx - bw / 2, blockTop], [sx + bw / 2, blockTop], [sx + bw / 2, bb], [sx - bw / 2, bb]]);
    s.text(sx, blockTop + bh / 2 + 6, '<i>m</i>', { size: 17 });
    turn(s, c, 27, PUL.al0, PUL.al1, { color: C.slate, w: 1.7 });
    force(s, [Tx, blockTop - 2], [0, -p.T * mg], HI);
    force(s, [sx, bb + 2], [0, mg]);
    s.vec(sx + bw / 2 + 22, blockTop + 4, sx + bw / 2 + 22, blockTop + 4 + p.a * 80, { color: C.slate, w: 1.8 });
    s.dot(c[0], c[1], 3.4);
    s.sym(Tx, blockTop - 2 - p.T * mg - 8, '<i>T</i>', { color: C.amber });
    s.sym(sx + 8, bb + mg - 4, '<i>mg</i>', { anchor: 'start' });
    s.sym(sx + bw / 2 + 30, blockTop + 4 + p.a * 40 + 6, '<i>a</i>', { anchor: 'start', color: C.slate });
    s.sym(...add(add(c, dir(-44), 30), [8, 12]), '<i>α</i>', { size: 15, color: C.slate });
    s.sym(c[0] - R - 10, c[1] - 6, '<i>M</i>, <i>R</i>', { size: 15, anchor: 'end' });
    s.sym(c[0] - R - 10, c[1] + 16, '<i>I</i> = ½<i>MR</i><sup>2</sup>', { size: 15, anchor: 'end' });
    const res = resultBlock(s, ['<i>mg</i> − <i>T</i> = <i>ma</i>,  <i>TR</i> = ½<i>MR</i><sup>2</sup><i>α</i>,  <i>a</i> = <i>Rα</i>', '⇒ <i>a</i> = <i>g</i>/(1 + <i>M</i>/2<i>m</i>)'], { size: 14 });
    s.place(
      [
        { t: 'Tension', p: [Tx, blockTop - 2 - p.T * mg * 0.5], hi: true, at: [[W - 8, blockTop - 52, 'end'], [W - 8, blockTop - 66, 'end']] },
        { t: 'Fixed axle', p: c, own: c, at: [[c[0] - 40, c[1] + 52, 'end'], [c[0] - 40, c[1] + 64, 'end']] },
        { t: 'Disc pulley', p: add(c, dir(120), R), at: [[c[0] + 24, ceil + 14, 'start'], [c[0] + 30, ceil + 4, 'start']] },
      ],
      [res]
    );
    return s;
  },
  check() {
    const { c, R, Mm, mg } = PUL, p = pul610();
    const m = 1, M = Mm * m, g = 1, alpha = p.a / R, I = 0.5 * M * R * R;
    const Tpx = p.T * mg;
    return [
      ['The string leaves the rim at its right-hand edge and runs straight down: tangent to the pulley, lever arm R', close(c[0] + R - c[0], R)],
      [`With M = 2m: a = g/(1 + M/2m) = ${fmt(p.a, 4)} g`, close(p.a, g / (1 + M / (2 * m)))],
      [`Block: mg − T = ma ⇒ T = ${fmt(p.T, 4)} mg, drawn ${fmt(Tpx, 2)} px against mg's ${mg} px`, close(m * g - p.T, m * p.a) && close(Tpx / mg, p.T)],
      [`Pulley: TR = ½MR²α with α = a/R (${fmt(p.T * R, 4)} = ${fmt(I * alpha, 4)})`, close(p.T * R, I * alpha)],
      [`T = mMg/(M + 2m) = ${fmt((m * M * g) / (M + 2 * m), 4)} mg, less than mg (the block speeds up downward)`, close(p.T, (m * M * g) / (M + 2 * m)) && p.T < m * g],
      ['α is drawn clockwise, and clockwise turning moves the rim point where the string leaves (angle 0°) straight down, with the block', PUL.al1 < PUL.al0 && close(dir(0 - 90)[0], 0) && dir(0 - 90)[1] > 0],
    ];
  },
};

/* ===================================================================== */
/* Figure 6.11 · a solid sphere rolling down an incline (topic 08)        */
/* ===================================================================== */
/**
 * θ = 30°; sphere of R px; forces drawn to scale, mg = `mg` px, for a solid sphere (I = 2/5 mR²).
 * The weight's components are drawn as a triangle on a copy of mg scaled by `lam`, so that
 * mg cos θ stops `gap` px short of the incline instead of piercing it.
 */
const INC = { th: 30, foot: [14, 268] as P, run: 365, s: 215, R: 40, mg: 132, K: 0.4, gap: 6 };
const geo611 = () => {
  const { th, foot, run, s: sc, R, mg, K, gap } = INC, t = th * D2R;
  const u = dir(th), n = dir(90 + th);
  const P0 = add(foot, u, sc), Cc = add(P0, n, R), top = add(foot, u, run);
  const a = Math.sin(t) / (1 + K); // in units of g
  const f = K * a; // f = I a/R² = K m a, in units of mg
  const lam = (R - gap) / (mg * Math.cos(t)); // the components' scale: mg cos θ ends gap px above the incline
  const sinv = mul(u, -mg * Math.sin(t)), cosv = mul(n, -mg * Math.cos(t));
  const S = add(Cc, sinv, lam), E = add(S, cosv, lam);
  return { t, u, n, P0, C: Cc, top, a, f, lam, S, E, Wv: [0, mg] as P, Nv: mul(n, mg * Math.cos(t)), fv: mul(u, mg * f), sinv, cosv };
};
const fig611: Diagram = {
  id: 'p11-06-fig-6.11',
  topic: 7,
  name: 'A sphere rolling down an incline',
  cases: [{ chip: 'Rolling down', cap: 'A sphere on an incline of angle <i>θ</i>. Forces: weight <i>mg</i> acting vertically down (components <i>mg</i> sin <i>θ</i> along the incline and <i>mg</i> cos <i>θ</i> perpendicular to it), normal reaction <i>N</i> perpendicular to the surface, and static friction <i>f</i> up the incline at the contact point.' }],
  draw() {
    const s = new Sketch(W, 362);
    const { foot, R, th } = INC, g = geo611(), Cc = g.C;
    path(s, [foot, [330, foot[1]]], { color: C.slate, w: 1.2, dash: 'dash' });
    s.line(foot[0], foot[1], g.top[0], g.top[1], { w: 2.6 });
    hatch(s, foot, g.top, -1, 16);
    arc(s, foot, 50, 0, th, { color: C.slate, w: 1.3 });
    circle(s, Cc, R, { w: 2 });
    const wt = add(Cc, g.Wv);
    force(s, Cc, g.Wv);
    force(s, Cc, mul(g.sinv, g.lam), COMP);
    force(s, g.S, mul(g.cosv, g.lam), COMP);
    force(s, g.P0, g.Nv);
    force(s, g.P0, g.fv, HI);
    s.dot(Cc[0], Cc[1], 3.2);
    s.dot(g.P0[0], g.P0[1], 3);
    const nt = add(g.P0, g.Nv);
    s.sym(nt[0] - 7, nt[1] + 4, '<i>N</i>', { anchor: 'end' });
    s.sym(wt[0] + 8, wt[1] - 3, '<i>mg</i>', { anchor: 'start' });
    s.sym(add(g.P0, g.fv)[0] + 4, add(g.P0, g.fv)[1] - 5, '<i>f</i>', { anchor: 'start', color: C.amber });
    s.sym(Cc[0] - R - 5, g.S[1] + 4, '<i>mg</i> sin <i>θ</i>', { size: 14, anchor: 'end', color: C.slate });
    s.sym(g.E[0] - 28, g.E[1] + 9, '<i>mg</i> cos <i>θ</i>', { size: 14, anchor: 'end', color: C.slate });
    s.sym(...add(foot, dir(th / 2), 64), '<i>θ</i>', { size: 15, color: C.slate });
    const res = resultBlock(s, ['<i>mg</i> sin <i>θ</i> − <i>f</i> = <i>ma</i>,  <i>fR</i> = <i>Iα</i>,  <i>a</i> = <i>Rα</i>', '⇒ <i>a</i> = <i>g</i> sin <i>θ</i>/(1 + <i>I</i>/<i>mR</i><sup>2</sup>)', '= (5/7)<i>g</i> sin <i>θ</i>  (solid sphere)'], { size: 14 });
    s.place(
      [
        { t: 'Static friction', p: add(g.P0, g.fv, 0.5), hi: true, at: [[W - 3, 158, 'end'], [W - 3, 164, 'end']] },
        { t: 'Solid sphere', p: add(Cc, dir(60), R), at: [[W - 8, 44, 'end'], [W - 8, 30, 'end']] },
      ],
      [res]
    );
    return s;
  },
  check() {
    const { th, R, mg, K } = INC, g = geo611(), t = g.t;
    const toU = (v: P) => dotp(v, g.u) / mg, toN = (v: P) => dotp(v, g.n) / mg;
    const alongNet = toU(g.Wv) + toU(g.fv); // up the slope, in units of mg
    const alpha = g.a / R; // per g
    return [
      [`The incline rises at ${fmt(angOf(sub(g.top, INC.foot)))}°`, close(angOf(sub(g.top, INC.foot)), th)],
      ['The sphere touches the incline at P: its centre is R from P along the normal', close(len(sub(g.C, g.P0)), R) && close(dotp(sub(g.C, g.P0), g.u), 0)],
      ['N is perpendicular to the surface and its line passes through the centre', close(dotp(g.Nv, g.u), 0) && close(crossZ(g.Nv, sub(g.C, g.P0)), 0, 1e-6)],
      ['mg sin θ runs down the slope, mg cos θ into it; together they are mg', close(dotp(g.sinv, g.n), 0) && close(dotp(g.cosv, g.u), 0) && balanced([g.sinv, g.cosv, mul(g.Wv, -1)])],
      [`The components are drawn head to tail at one scale (${fmt(g.lam, 3)} of mg), so mg sin θ : mg cos θ = tan θ and the triangle closes on the weight arrow`, g.lam > 0 && g.lam < 1 && close(len(sub(g.S, g.C)) / len(sub(g.E, g.S)), Math.tan(t)) && close(g.E[0], g.C[0] + g.lam * g.Wv[0]) && close(g.E[1], g.C[1] + g.lam * g.Wv[1])],
      [`mg cos θ stops ${fmt(dotp(sub(g.E, g.P0), g.n), 2)} px above the incline: neither component crosses the surface`, close(dotp(sub(g.E, g.P0), g.n), INC.gap) && dotp(sub(g.S, g.P0), g.n) > INC.gap && INC.gap > 0],
      [`N = mg cos θ = ${fmt(len(g.Nv) / mg, 4)} mg balances the perpendicular part`, close(toN(g.Nv) + toN(g.Wv), 0)],
      [`f acts at the contact point, up the incline, drawn ${fmt(len(g.fv) / mg, 4)} mg = (2/7) mg sin θ`, close(dotp(g.fv, g.u), len(g.fv)) && close(len(g.fv) / mg, (2 / 7) * Math.sin(t))],
      [`Along the slope: mg sin θ − f = ma with a = ${fmt(g.a, 4)} g = (5/7) g sin θ`, close(-alongNet, g.a) && close(g.a, (5 / 7) * Math.sin(t))],
      [`fR = Iα with I = ⅖mR² and α = a/R (${fmt(g.f * R, 4)} = ${fmt(K * R * R * alpha, 4)})`, close(g.f * R, K * R * R * alpha)],
      ['a = g sin θ/(1 + I/mR²) for the solid sphere', close(g.a, Math.sin(t) / (1 + K))],
    ];
  },
};

/* ===================================================================== */
/* Figure 6.12 · a sliding sphere starts to roll (topic 08, Example 4)    */
/* ===================================================================== */
/** v₀ = 84 px; the final v = 5/7 v₀. Kinetic friction is drawn for its direction only. */
const SLIP = { floor: 172, R: 40, c1: 80, c2: 228, v0: 84, fk: 34, K: 0.4 };
const fig612: Diagram = {
  id: 'p11-06-fig-6.12',
  topic: 7,
  name: 'A sliding sphere starts to roll',
  cases: [{ chip: 'Slide to roll', cap: 'A sphere moving right with velocity <i>v</i><sub>0</sub> and zero spin on a horizontal floor. Kinetic friction <i>f</i> acts backward at the contact point, slowing the centre while spinning the sphere up, until <i>v</i> = <i>Rω</i> is reached.' }],
  draw() {
    const s = new Sketch(W, 322);
    const { floor, R, c1, c2, v0, fk, K } = SLIP, cy = floor - R, v = v0 / (1 + K);
    s.line(10, floor, 330, floor, { w: 2 });
    hatch(s, [10, floor], [330, floor], -1, 14);
    [c1, c2].forEach((x) => { circle(s, [x, cy], R, { w: 2 }); path(s, [[x - R, cy], [x, cy]], { color: C.grey, w: 1 }); });
    turn(s, [c2, cy], 22, 150, 30, { color: C.ink, w: 1.6 });
    force(s, [c1, cy], [v0, 0]);
    force(s, [c2, cy], [v, 0]);
    force(s, [c1, floor], [-fk, 0], HI);
    s.dot(c1, cy, 3);
    s.dot(c2, cy, 3);
    s.sym(c1 + v0 - 6, cy - 10, '<i>v</i><sub>0</sub>');
    s.sym(c2 + v + 6, cy - 22, '<i>v</i> = <i>Rω</i>', { anchor: 'middle' });
    s.sym(c1, cy - R - 12, '<i>ω</i> = 0');
    s.sym(c2, cy - R - 12, '<i>ω</i> (clockwise)');
    s.sym(c1 - fk - 6, floor - 6, '<i>f</i><sub><i>k</i></sub>', { anchor: 'end', color: C.amber });
    const res = resultBlock(s, ['<i>L</i> about a floor point is conserved:', '<i>mv</i><sub>0</sub><i>R</i> = <i>mvR</i> + ⅖<i>mR</i><sup>2</sup>(<i>v</i>/<i>R</i>)', '⇒ <i>v</i> = (5/7)<i>v</i><sub>0</sub>'], { size: 14 });
    s.place(
      [
        { t: 'Kinetic friction', p: [c1 - fk / 2, floor], hi: true, at: [[14, 208, 'start'], [14, 220, 'start']] },
        { t: 'Pure rolling', p: add([c2, cy], dir(-40), R), at: [[W - 8, 208, 'end'], [W - 8, 196, 'end']] },
      ],
      [res]
    );
    return s;
  },
  check() {
    const { floor, R, c1, c2, v0, fk, K } = SLIP, cy = floor - R, v = v0 / (1 + K);
    const m = 1, w = v / R;
    const Lstart = m * v0 * R, Lend = m * v * R + K * m * R * R * w;
    return [
      ['Both spheres rest on the floor (centres one radius above it), the second ahead of the first', close(floor - cy, R) && c2 - c1 > 2 * R],
      [`L about a floor point: mv₀R = ${fmt(Lstart, 1)} before, mvR + ⅖mR²(v/R) = ${fmt(Lend, 1)} after`, close(Lstart, Lend)],
      [`So v = (5/7) v₀: drawn ${fmt(v, 2)} px against ${v0} px (ratio ${fmt(v / v0, 4)})`, close(v / v0, 5 / 7)],
      ['At the start the contact point slides forward (v₀ − 0·R > 0), so kinetic friction is drawn backward', v0 > 0 && fk > 0],
      ['At the end the contact point is at rest: v − ωR = 0 (ω clockwise for a sphere rolling right)', close(v - w * R, 0)],
      ['The end has less kinetic energy than the start (friction did work while it slid)', 0.5 * m * v * v + 0.5 * K * m * R * R * w * w < 0.5 * m * v0 * v0],
    ];
  },
};

/** Chapter order: by topic, then by page. */
export const DIAGRAMS_PHYSICS_11_06: Diagram[] = [fig61, fig62, fig63, fig64, fig65, fig66, fig67, fig68, fig69, fig610, fig611, fig612];
