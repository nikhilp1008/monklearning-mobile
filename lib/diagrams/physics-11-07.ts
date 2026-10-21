import { C, F, Rect, Sketch, r1, mathW } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * PHYSICS CLASS 11, CHAPTER 7 (Gravitation): every figure of the Master
 * Reference book, redrawn. The chapter's drawings are its thirteen numbered
 * figures, printed on the "CHAPTER 7 · FIGURES" pages (pp. 459–522). It has no
 * unnumbered drawings: pp. 458–544 were checked page by page (the rest is
 * text, symbol tables and typeset equations), Additional Topics A–D included.
 *
 * Gravitation figures are computed from the physics, never placed by eye:
 * fields from the enclosed mass (g ∝ r inside, ∝ 1/r² outside), the shell's
 * cancellation and the ring's axial field from numerical integration over the
 * source, U = −GMm/r point by point, every orbit from its conic (r = p/(1 + e cos)),
 * with the planet at a focus, and two-body circles about the centre of mass.
 * Each `check` turns the drawn pixels back into physics and recomputes what
 * the figure states.
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
const rel = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) <= tol * Math.max(Math.abs(a), Math.abs(b), 1e-300);
const fmt = (n: number, d = 2) => String(+n.toFixed(d)).replace('-', '−');
/** The direction of a drawn vector in degrees anticlockwise from +x. */
const angOf = (v: P) => Math.atan2(-v[1], v[0]) / D2R;
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
/** Points on an arc of radius r round c, from angle a0 to a1 (degrees, anticlockwise from +x). */
const arcPts = (c: P, r: number, a0: number, a1: number): P[] => {
  const n = Math.max(6, Math.ceil(Math.abs(a1 - a0) / 3)), pts: P[] = [];
  for (let i = 0; i <= n; i++) pts.push(add(c, dir(a0 + ((a1 - a0) * i) / n), r));
  return pts;
};
function arc(s: Sketch, c: P, r: number, a0: number, a1: number, o: Stroke = {}) {
  path(s, arcPts(c, r, a0, a1), { color: o.color ?? C.slate, w: o.w ?? 1.2, dash: o.dash });
}
/** A measured length with an arrowhead at each end. */
function measure(s: Sketch, a: P, b: P, color: string = C.slate) {
  const m: P = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
  s.vec(m[0], m[1], a[0], a[1], { color, w: 1.3 });
  s.vec(m[0], m[1], b[0], b[1], { color, w: 1.3 });
}
/** A dotted guide (extension line) from a to b. */
const guide = (s: Sketch, a: P, b: P) => path(s, [a, b], { color: C.slate, w: 1, dash: 'dot' });
/** A force or velocity: the vector `v` (px) drawn from `at`. */
const force = (s: Sketch, at: P, v: P, o: { color?: string; w?: number; dash?: boolean } = {}) => s.vec(at[0], at[1], at[0] + v[0], at[1] + v[1], { w: o.w ?? 2, color: o.color ?? C.ink, dash: o.dash });
const HI = { color: C.mari, w: 2.6 };
const COMP = { color: C.grey, w: 1.5, dash: true };
/** A point that tags must keep clear of, with nothing drawn (an arrow's tip already marks it). */
const keepClear = (s: Sketch, p: P, r = 3) => s.point(p[0], p[1], r, '');
/** A body drawn as a ring (a sphere, a star, a ball), registered so tags keep off it. */
function body(s: Sketch, c: P, r: number, o: { color?: string; w?: number } = {}) {
  s.point(c[0], c[1], r, `<circle cx="${r1(c[0])}" cy="${r1(c[1])}" r="${r1(r)}" fill="#fff" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 2}"/>`);
}
/** A cross: a point marked without a dot (a centre of mass, an empty focus). */
function crossMark(s: Sketch, c: P, r = 6, o: { color?: string; w?: number } = {}) {
  const col = o.color ?? C.ink, w = o.w ?? 2.4;
  s.point(c[0], c[1], r, `<path d="M${r1(c[0] - r)} ${r1(c[1] - r)} L${r1(c[0] + r)} ${r1(c[1] + r)} M${r1(c[0] - r)} ${r1(c[1] + r)} L${r1(c[0] + r)} ${r1(c[1] - r)}" stroke="${col}" stroke-width="${w}" stroke-linecap="round"/>`);
}
const esc = (t: string) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
/**
 * The result, bottom right, ink-edged: maths set in STIX (Sketch.text) so its
 * letters keep their italics, words in Onest Bold. Registered as a tag, so the
 * audit keeps everything else off it.
 */
function resultBlock(s: Sketch, lines: string[], o: { maths?: boolean; size?: number } = {}): Rect {
  const maths = o.maths ?? true, size = o.size ?? (maths ? 15 : 13), lh = size + 6;
  const plain = (t: string) => t.replace(/<\/?(?:i|sub|sup)>/g, '');
  const w = Math.max(...lines.map((t) => (maths ? mathW(t, size) : plain(t).length * size * 0.58))) + 30, h = lines.length * lh + 14;
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

/* ---------- graphs ---------- */
/** Where r = 0, value = 0 sits on the drawing, and how many px one unit is along each axis. */
type Frame = { ox: number; oy: number; sx: number; sy: number };
const X = (f: Frame, t: number) => f.ox + t * f.sx;
const Y = (f: Frame, v: number) => f.oy - v * f.sy;
const at = (f: Frame, t: number, v: number): P => [X(f, t), Y(f, v)];
const vOf = (f: Frame, y: number) => (f.oy - y) / f.sy;
/** A function drawn as a smooth line, sampled finely; returns the drawn points. */
function curve(s: Sketch, f: Frame, fn: (t: number) => number, t0: number, t1: number, o: Stroke = {}): P[] {
  const n = 120, pts: P[] = [];
  for (let i = 0; i <= n; i++) { const t = t0 + ((t1 - t0) * i) / n; pts.push(at(f, t, fn(t))); }
  path(s, pts, o);
  return pts;
}

/* ===================================================================== */
/* Figure 7.1 · two spheres, equal and opposite pulls (topic 01)          */
/* ===================================================================== */
/** Centres c1, c2 (px), radius R; the pulls drawn `Fpx` long, `gap` px off each surface. */
const F71 = { c1: [74, 122] as P, c2: [266, 122] as P, R: 36, Fpx: 42, gap: 10, dimY: 46 };
const geo71 = () => {
  const { c1, c2, R, Fpx, gap } = F71;
  const u = mul(sub(c2, c1), 1 / len(sub(c2, c1))); // from m₁ toward m₂
  const a1 = add(c1, u, R + gap), a2 = add(c2, u, -(R + gap));
  return { u, a1, a2, F12: mul(u, Fpx), F21: mul(u, -Fpx) };
};
const fig71: Diagram = {
  id: 'p11-07-fig-7.1',
  topic: 0,
  name: 'Two spheres pulling each other',
  cases: [{ chip: 'Two spheres', cap: 'Two spherical masses <i>m</i><sub>1</sub> and <i>m</i><sub>2</sub> a distance <i>r</i> apart, measured centre to centre; the forces <i>F</i><sub>12</sub> and <i>F</i><sub>21</sub> are equal in magnitude and opposite in direction.' }],
  draw() {
    const s = new Sketch(W, 250);
    const { c1, c2, R, dimY } = F71, g = geo71();
    guide(s, [c1[0], c1[1] - 4], [c1[0], dimY - 6]);
    guide(s, [c2[0], c2[1] - 4], [c2[0], dimY - 6]);
    measure(s, [c1[0], dimY], [c2[0], dimY], C.ink);
    s.sym((c1[0] + c2[0]) / 2, dimY - 10, '<i>r</i> (centre to centre)', { size: 15 });
    circle(s, c1, R, { w: 2.2 });
    circle(s, c2, R, { w: 2.2 });
    guide(s, [c1[0], c1[1] - 4], [c1[0], c1[1] - R]);
    guide(s, [c2[0], c2[1] - 4], [c2[0], c2[1] - R]);
    s.dot(c1[0], c1[1], 3.4);
    s.dot(c2[0], c2[1], 3.4);
    force(s, g.a1, g.F12, HI);
    force(s, g.a2, g.F21, HI);
    s.sym(g.a1[0] + g.F12[0] / 2, c1[1] - 12, '<i>F</i><sub>12</sub>', { size: 16, color: C.amber });
    s.sym(g.a2[0] + g.F21[0] / 2, c2[1] - 12, '<i>F</i><sub>21</sub>', { size: 16, color: C.amber });
    s.sym(c1[0], c1[1] + R + 24, '<i>m</i><sub>1</sub>', { size: 17 });
    s.sym(c2[0], c2[1] + R + 24, '<i>m</i><sub>2</sub>', { size: 17 });
    resultBlock(s, ['Equal and opposite (Newton’s 3rd law)'], { maths: false });
    return s;
  },
  check() {
    const { c1, c2, R } = F71, g = geo71();
    const Gc = 6.67e-11, m1 = 80, m2 = 120, r = 0.5; // a sample pair (Example 1's numbers)
    const Fmag = (Gc * m1 * m2) / (r * r);
    const F12v = mul(g.u, Fmag), F21v = mul(g.u, -Fmag);
    return [
      ['r is measured between the centres: the dimension runs centre to centre', close(len(sub(c2, c1)), c2[0] - c1[0])],
      [`F₁₂ and F₂₁ are drawn ${fmt(len(g.F12))} px and ${fmt(len(g.F21))} px: equal in magnitude`, close(len(g.F12), len(g.F21))],
      ['They are opposite in direction and add to zero (Newton’s third law)', close(g.F12[0] + g.F21[0], 0) && close(g.F12[1] + g.F21[1], 0)],
      ['Both lie along the line of centres, each pointing toward the other mass (attraction)', close(crossZ(g.F12, sub(c2, c1)), 0) && dotp(g.F12, sub(c2, c1)) > 0 && dotp(g.F21, sub(c1, c2)) > 0],
      ['Each arrow starts on the side facing the other sphere and stays in the gap between them', g.a1[0] > c1[0] + R && g.a1[0] + g.F12[0] < g.a2[0] + g.F21[0] && g.a2[0] < c2[0] - R],
      [`With Example 1's numbers F = Gm₁m₂/r² = ${(Fmag * 1e6).toFixed(2)} × 10⁻⁶ N on each, opposite`, (Fmag * 1e6).toFixed(2) === '2.56' && close(F12v[0] + F21v[0], 0)],
    ];
  },
};

/* ===================================================================== */
/* Figure 7.2 · a point mass and a rod (topic 01, Example 4)              */
/* ===================================================================== */
/** a = 1 unit, L = 3 units, px per unit `k`; the element at x = 2.7 units, dx = 0.22 units. */
const F72 = { m: [44, 118] as P, k: 64, a: 1, L: 3, x: 2.7, dx: 0.22, th: 18, Fpx: 34 };
const fig72: Diagram = {
  id: 'p11-07-fig-7.2',
  topic: 0,
  name: 'A point mass and a rod',
  cases: [{ chip: 'Rod element', cap: 'A point mass <i>m</i> at distance <i>a</i> from the near end of a rod of length <i>L</i> and linear density <i>λ</i>. An element d<i>x</i> of the rod, at distance <i>x</i> from <i>m</i>, pulls <i>m</i> with d<i>F</i> = <i>Gmλ</i> d<i>x</i>/<i>x</i><sup>2</sup>.' }],
  draw() {
    const s = new Sketch(W, 270);
    const { m, k, a, L, x, dx, th, Fpx } = F72;
    const X0 = m[0] + a * k, X1 = m[0] + (a + L) * k, ex = m[0] + x * k, top = m[1] - th / 2, bot = m[1] + th / 2;
    shape(s, [[X0, top], [X1, top], [X1, bot], [X0, bot]]);
    shape(s, [[ex, top], [ex + dx * k, top], [ex + dx * k, bot], [ex, bot]], { color: C.mari, w: 2.6, fill: false });
    s.dot(m[0], m[1], 7);
    force(s, [m[0] + 12, m[1]], [Fpx, 0]);
    const xY = bot + 32, aY = bot + 70;
    guide(s, [m[0], m[1] + 10], [m[0], aY + 6]);
    guide(s, [X0, bot + 3], [X0, aY + 6]);
    guide(s, [ex, bot + 3], [ex, xY + 6]);
    measure(s, [m[0], xY], [ex, xY], C.ink);
    measure(s, [m[0], aY], [X0, aY], C.ink);
    s.sym((m[0] + ex) / 2, xY + 20, '<i>x</i>', { size: 16 });
    s.sym((m[0] + X0) / 2, aY + 20, '<i>a</i>', { size: 16 });
    s.sym(ex + (dx * k) / 2, top - 12, 'd<i>x</i>', { size: 15, color: C.amber });
    s.sym(m[0] - 14, m[1] + 6, '<i>m</i>', { size: 17, anchor: 'end' });
    s.sym(m[0] + 12 + Fpx / 2, m[1] - 12, 'd<i>F</i>', { size: 15 });
    s.sym(X1, top - 34, 'rod, length <i>L</i>, <i>λ</i> = <i>M</i>/<i>L</i>', { size: 15, anchor: 'end' });
    s.sym(X1, aY + 4, 'd<i>m</i> = <i>λ</i> d<i>x</i>', { size: 15, anchor: 'end' });
    const res = resultBlock(s, ['d<i>F</i> = <i>Gmλ</i> d<i>x</i>/<i>x</i><sup>2</sup>']);
    s.place(
      [
        { t: 'Element', p: [ex + (dx * k) / 2, bot], hi: true, at: [[ex + (dx * k) / 2 + 24, bot + 12, 'start'], [ex + (dx * k) / 2 + 30, bot + 16, 'start']] },
        { t: 'Point mass', p: [m[0], m[1] - 7], own: m, at: [[14, 24, 'start'], [14, 40, 'start']] },
      ],
      [res]
    );
    return s;
  },
  check() {
    const { m, k, a, L, x, dx } = F72;
    const X0 = m[0] + a * k, X1 = m[0] + (a + L) * k, ex = m[0] + x * k;
    const G = 1, mm = 1, M = 1, lam = M / L;
    const Fint = simpson((u) => (G * mm * lam) / (u * u), a, a + L, 2000);
    const far = 1e4, Ffar = simpson((u) => (G * mm * lam) / (u * u), far, far + L, 2000);
    return [
      [`a is drawn ${fmt((X0 - m[0]) / k)} unit(s), the rod ${fmt((X1 - X0) / k)} units: the element (x = ${fmt((ex - m[0]) / k)}) lies on the rod`, close((X0 - m[0]) / k, a) && close((X1 - X0) / k, L) && ex > X0 && ex + dx * k < X1],
      ['x is measured from m to the element, so it runs from a (near end) to a + L (far end)', (ex - m[0]) / k >= a && (ex - m[0]) / k <= a + L],
      ['dF is drawn from m along the line toward the rod (every element pulls the same way)', F72.Fpx > 0 && m[0] + 12 + F72.Fpx < X0],
      [`Adding dF = Gmλ dx/x² from a to a + L gives ${fmt(Fint, 6)} = GMm/(a(a + L))`, close(Fint, (G * M * mm) / (a * (a + L)), 1e-9)],
      [`Far away (a ≫ L) the sum tends to GMm/a²: ratio ${fmt(Ffar / ((G * M * mm) / (far * far)), 5)}`, close(Ffar / ((G * M * mm) / (far * far)), 1, 1e-3)],
    ];
  },
};

/* ===================================================================== */
/* Figure 7.3 · inside a shell, opposite patches cancel (topic 02)        */
/* ===================================================================== */
/** Shell of radius R (px) round O; P sits `p` R to the right of O; each cone has half-angle α. */
const F73 = { O: [150, 140] as P, R: 100, p: 0.4, alpha: 22 };
/** Where the ray from P at angle `deg` meets the shell, and how far it runs. */
function hit73(deg: number) {
  const { O, R, p } = F73, Pp: P = [O[0] + p * R, O[1]], u = dir(deg);
  const q = sub(Pp, O), b = dotp(q, u), c2 = dotp(q, q) - R * R, l = -b + Math.sqrt(b * b - c2);
  return { at: add(Pp, u, l), l };
}
/**
 * The pull on P along the cone's axis from the shell patch inside a cone of half-angle α (radians)
 * pointing along +x (`side` = 1) or −x (−1), in units of Gσ: ∫ dΩ cos ψ / cos φ, where φ is the
 * angle between the ray and the shell's normal where it lands (dA = l² dΩ / cos φ, pull = dA/l²).
 */
function pull73(side: 1 | -1, alpha: number) {
  const p = F73.p; // in units of R
  return simpson((psi) => {
    const ux = side * Math.cos(psi), b = p * ux, l = -b + Math.sqrt(b * b - (p * p - 1));
    const cosPhi = p * ux + l; // (P + l u)·u / R with R = 1
    return 2 * Math.PI * Math.sin(psi) * Math.cos(psi) / cosPhi;
  }, 0, alpha, 2000);
}
/** The angle (degrees, at O) that the patch on the near (+1) or far (−1) side spans. */
const patchSpan73 = (side: 1 | -1) => {
  const { O, alpha } = F73, base = side === 1 ? 0 : 180, e1 = hit73(base - alpha).at, e2 = hit73(base + alpha).at;
  const a0 = angOf(sub(e1, O)), a1 = angOf(sub(e2, O));
  return (a1 < a0 ? a1 + 360 : a1) - a0;
};
/** The two pull arrows at P, one scale (px per Gσ) for both. */
const arrows73 = () => {
  const a = F73.alpha * D2R, sc = 44 / pull73(1, a);
  return { right: [pull73(1, a) * sc, 0] as P, left: [-pull73(-1, a) * sc, 0] as P };
};
const fig73: Diagram = {
  id: 'p11-07-fig-7.3',
  topic: 1,
  name: 'Zero field inside a shell',
  cases: [{ chip: 'Point inside a shell', cap: 'Point <i>P</i> inside a uniform spherical shell. The pulls of two opposite patches that subtend the same solid angle at <i>P</i> are equal and opposite, so the net field inside the shell is zero.' }],
  draw() {
    const s = new Sketch(W, 344);
    const { O, R, p, alpha } = F73, Pp: P = [O[0] + p * R, O[1]];
    circle(s, O, R, { w: 2.2, fill: false });
    const ends = [alpha, -alpha, 180 - alpha, 180 + alpha].map((d) => hit73(d).at);
    ends.forEach((e) => path(s, [Pp, e], { color: C.slate, w: 1.1 }));
    // each patch runs anticlockwise from e1 to e2, the short way (angles taken modulo 360°)
    const patch = (e1: P, e2: P) => { const a0 = angOf(sub(e1, O)), a1 = angOf(sub(e2, O)); arc(s, O, R, a0, a1 < a0 ? a1 + 360 : a1, { color: C.ink, w: 5 }); };
    patch(ends[1], ends[0]);
    patch(ends[2], ends[3]);
    const ar = arrows73();
    force(s, Pp, ar.right, HI);
    force(s, Pp, ar.left, HI);
    s.dot(Pp[0], Pp[1], 4);
    s.sym(Pp[0] + 4, Pp[1] + 24, '<i>P</i>', { size: 17 });
    const res = resultBlock(s, ['(area ∝ <i>r</i><sup>2</sup>) × (1/<i>r</i><sup>2</sup>): same for both,', 'so the net field inside is zero'], { size: 14 });
    s.place(
      [
        { t: 'Equal and opposite pulls', p: Pp, own: Pp, hi: true, at: [[W - 4, 4, 'end'], [W - 4, 8, 'end']] },
        { t: 'Large patch, distant', p: add(O, dir(180 + alpha * 0.6), R), at: [[6, 250, 'start'], [6, 254, 'start']] },
        { t: 'Small patch, close', p: add(O, dir(-alpha * 0.4), R), at: [[W - 4, 250, 'end'], [W - 4, 254, 'end']] },
        { t: 'Uniform shell', p: add(O, dir(125), R), at: [[6, 4, 'start'], [6, 8, 'start']] },
      ],
      [res]
    );
    return s;
  },
  check() {
    const { O, R, p, alpha } = F73, Pp: P = [O[0] + p * R, O[1]];
    const a = alpha * D2R, Fr = pull73(1, a), Fl = pull73(-1, a);
    const lr = hit73(0).l / R, ll = hit73(180).l / R;
    // the whole shell: every direction's pull along +x, ψ from 0 to π
    const whole = simpson((psi) => { const ux = Math.cos(psi), b = p * ux, l = -b + Math.sqrt(b * b - (p * p - 1)); return 2 * Math.PI * Math.sin(psi) * Math.cos(psi) / (p * ux + l); }, 0, Math.PI, 4000);
    const ends = [alpha, -alpha, 180 - alpha, 180 + alpha].map((d) => hit73(d).at);
    return [
      [`P is inside the shell (${fmt(p, 2)} R from O)`, p < 1 && close(len(sub(Pp, O)), p * R)],
      ['Every cone edge ends on the shell', ends.every((e) => close(len(sub(e, O)), R, 1e-6))],
      ['The two cones are one double cone through P: same half-angle, so the same solid angle', close(angOf(sub(ends[2], Pp)), 180 - alpha, 1e-6) && close(angOf(sub(ends[0], Pp)), alpha, 1e-6)],
      [`Each patch is the short arc between its cone's ends: ${fmt(patchSpan73(1), 1)}° on the near side, ${fmt(patchSpan73(-1), 1)}° on the far side`, patchSpan73(1) < 90 && patchSpan73(-1) < 90 && patchSpan73(-1) > patchSpan73(1)],
      [`The small patch is close (${fmt(lr, 3)} R), the large one distant (${fmt(ll, 3)} R): area ratio ${fmt((ll / lr) ** 2, 3)} = (r₁/r₂)²`, lr < ll],
      [`Each patch's pull along its axis (Gσ ∫dΩ cos ψ/cos φ): ${fmt(Fr, 6)} and ${fmt(Fl, 6)}, equal`, rel(Fr, Fl, 1e-9)],
      [`The two pull arrows are drawn to one scale: ${fmt(len(arrows73().right), 4)} px and ${fmt(len(arrows73().left), 4)} px, opposite`, close(len(arrows73().right), len(arrows73().left), 1e-6) && close(arrows73().right[0] + arrows73().left[0], 0, 1e-6)],
      [`All the shell's pulls on P add to ${fmt(whole, 8)}: the net field inside is zero`, Math.abs(whole) < 1e-6],
    ];
  },
};

/* ===================================================================== */
/* Figure 7.4 · the ring's axial field (topic 02)                         */
/* ===================================================================== */
/** Ring of radius a (px) seen edge-on at x = ringX; P at axial distance x (px); dE drawn E px long. */
const F74 = { ringX: 48, axisY: 150, a: 92, x: 186, E: 104, el: 9 };
const geo74 = () => {
  const { ringX, axisY, a, x, E } = F74;
  const Pp: P = [ringX + x, axisY], dm: P = [ringX, axisY - a], dm2: P = [ringX, axisY + a];
  const u = mul(sub(dm, Pp), 1 / len(sub(dm, Pp)));
  const dE = mul(u, E), th = Math.atan2(a, x);
  return { Pp, dm, dm2, u, dE, th, ax: [dE[0], 0] as P, perp: [0, dE[1]] as P };
};
const fig74: Diagram = {
  id: 'p11-07-fig-7.4',
  topic: 1,
  name: 'Field on the axis of a ring',
  cases: [{ chip: 'Ring, edge-on', cap: 'A ring of radius <i>a</i> seen edge-on, with <i>P</i> on the axis at distance <i>x</i> from the centre. The field d<i>E</i> of an element d<i>m</i> has an axial component d<i>E</i> cos <i>θ</i> and a perpendicular component d<i>E</i> sin <i>θ</i>; the perpendicular part is cancelled by the diametrically opposite element.' }],
  draw() {
    const s = new Sketch(W, 316);
    const { ringX, axisY, a, el } = F74, g = geo74();
    path(s, [[ringX - 40, axisY], [W - 10, axisY]], { color: C.slate, w: 1.2, dash: 'dash' });
    s.line(ringX, axisY - a, ringX, axisY + a, { w: 4 });
    [g.dm, g.dm2].forEach((c) => s.point(c[0], c[1], el / 2 + 1, `<rect x="${r1(c[0] - el / 2)}" y="${r1(c[1] - el / 2)}" width="${el}" height="${el}" fill="#fff" stroke="${C.ink}" stroke-width="1.8"/>`));
    guide(s, g.Pp, add(g.dm, g.u, -el));
    const tip = add(g.Pp, g.dE);
    guide(s, tip, [tip[0], axisY]);
    guide(s, tip, [g.Pp[0], tip[1]]);
    force(s, g.Pp, g.ax, COMP);
    force(s, g.Pp, g.perp, COMP);
    force(s, g.Pp, g.dE, HI);
    arc(s, g.Pp, 34, 180 - (g.th / D2R), 180, { color: C.slate, w: 1.3 });
    s.dot(g.Pp[0], g.Pp[1], 4.2);
    s.dot(ringX, axisY, 2.6);
    const dimY = axisY + a + 30;
    guide(s, [g.Pp[0], axisY + 6], [g.Pp[0], dimY + 6]);
    measure(s, [ringX + 3, dimY], [g.Pp[0], dimY], C.ink);
    s.sym((ringX + g.Pp[0]) / 2, dimY + 20, '<i>x</i> (along the axis)', { size: 15 });
    s.sym(g.Pp[0] + 10, axisY + 22, '<i>P</i>', { size: 17, anchor: 'start' });
    s.sym(...add(g.Pp, dir(180 - g.th / D2R / 2), 50), '<i>θ</i>', { size: 15 });
    s.sym(tip[0] + 2, tip[1] - 16, 'd<i>E</i>', { size: 16, color: C.amber });
    s.sym(g.Pp[0] + 8, g.Pp[1] + g.perp[1] + 4, 'd<i>E</i> sin <i>θ</i>', { size: 14, anchor: 'start', color: C.slate });
    s.sym(g.Pp[0] + 8, g.Pp[1] + g.perp[1] + 20, '(cancels)', { size: 14, anchor: 'start', color: C.slate });
    s.sym(g.Pp[0] + g.ax[0] / 2 - 8, axisY + 22, 'd<i>E</i> cos <i>θ</i> (axial)', { size: 14, color: C.slate });
    s.sym(g.dm[0] - 12, g.dm[1] + 5, 'd<i>m</i>', { size: 16, anchor: 'end' });
    s.sym(g.dm2[0] + 12, g.dm2[1] + 5, 'd<i>m</i> (opposite)', { size: 15, anchor: 'start', color: C.slate });
    s.sym(ringX + 14, g.dm[1] - 14, 'ring, radius <i>a</i>', { size: 15, anchor: 'start' });
    s.place([
      { t: 'Field of the element', p: add(g.Pp, g.dE, 0.55), hi: true, at: [[W - 4, 30, 'end'], [W - 4, 22, 'end']] },
      { t: 'Axis', p: [W - 20, axisY], at: [[W - 4, axisY + 32, 'end'], [W - 4, axisY + 40, 'end']] },
    ]);
    return s;
  },
  check() {
    const { a, x } = F74, g = geo74();
    // the ring as 720 elements in 3D (x along the axis), M = G = 1
    const N = 720, A = a / 100, Xp = x / 100;
    let Ex = 0, Ey = 0, Ez = 0;
    for (let i = 0; i < N; i++) {
      const ph = (2 * Math.PI * i) / N, r: [number, number, number] = [-Xp, A * Math.cos(ph), A * Math.sin(ph)];
      const d = Math.hypot(...r), k = 1 / N / (d * d * d);
      Ex += k * r[0]; Ey += k * r[1]; Ez += k * r[2];
    }
    const exact = Xp / (A * A + Xp * Xp) ** 1.5;
    const mirror: P = [g.dE[0], -g.dE[1]];
    return [
      ['dE points from P straight at the element dm (gravity attracts)', close(crossZ(g.dE, sub(g.dm, g.Pp)), 0, 1e-6) && dotp(g.dE, sub(g.dm, g.Pp)) > 0],
      [`θ at P: tan θ = a/x = ${fmt(Math.tan(g.th), 4)}, drawn ${fmt(Math.abs(g.dE[1] / g.dE[0]), 4)}`, close(Math.tan(g.th), Math.abs(g.dE[1] / g.dE[0]))],
      [`Axial part = dE cos θ (${fmt(-g.ax[0], 3)} px), perpendicular part = dE sin θ (${fmt(-g.perp[1], 3)} px); together they make dE`, close(-g.ax[0], F74.E * Math.cos(g.th)) && close(-g.perp[1], F74.E * Math.sin(g.th)) && close(len(add(g.ax, g.perp)), F74.E)],
      ['The axial part points along the axis toward the ring', g.ax[0] < 0 && close(g.ax[1], 0)],
      ['The opposite element\'s field mirrors it: perpendicular parts cancel, axial parts add', close(g.dE[1] + mirror[1], 0) && close(g.dE[0] + mirror[0], 2 * g.ax[0])],
      [`Summed over the whole ring: perpendicular ${fmt(Math.hypot(Ey, Ez), 9)}, axial ${fmt(-Ex, 6)} = GMx/(a² + x²)^3/2 = ${fmt(exact, 6)}`, Math.hypot(Ey, Ez) < 1e-9 && rel(-Ex, exact, 1e-9)],
    ];
  },
};

/* ===================================================================== */
/* Figure 7.5 · E against r for a shell and a solid sphere (topic 02)     */
/* ===================================================================== */
type Case75 = { chip: string; cap: string; kind: 'shell' | 'solid' };
const CAP75 = 'Gravitational field strength versus <i>r</i>, in units of <i>R</i> (horizontal) and <i>GM</i>/<i>R</i><sup>2</sup> (vertical), for (a) a uniform shell and (b) a uniform solid sphere.';
const f75: Frame = { ox: 60, oy: 216, sx: 72, sy: 150 };
/** The enclosed mass, in units of M, from the density (r in units of R). */
const menc75 = (kind: Case75['kind'], r: number) => (kind === 'shell' ? (r < 1 ? 0 : 1) : r >= 1 ? 1 : simpson((u) => 3 * u * u, 0, r, 200));
/** E in units of GM/R²: G M_enc / r². */
const E75 = (kind: Case75['kind'], r: number) => (r === 0 ? 0 : menc75(kind, r) / (r * r));
const fig75: Diagram = {
  id: 'p11-07-fig-7.5',
  topic: 1,
  name: 'Field strength against r',
  cases: [
    { chip: 'Uniform shell', kind: 'shell', cap: `(a) Uniform shell. ${CAP75}` },
    { chip: 'Uniform solid sphere', kind: 'solid', cap: `(b) Uniform solid sphere. ${CAP75}` },
  ],
  draw(c: Case75) {
    const s = new Sketch(W, 300);
    const f = f75;
    s.vec(X(f, 0), f.oy, X(f, 3.25), f.oy, { color: C.grey, w: 1.3 });
    s.vec(f.ox, Y(f, 0), f.ox, Y(f, 1.22), { color: C.grey, w: 1.3 });
    [0.25, 0.5, 0.75, 1].forEach((v) => { s.line(f.ox - 4, Y(f, v), f.ox, Y(f, v), { color: C.grey, w: 1.2 }); s.sym(f.ox - 7, Y(f, v) + 4.5, v.toFixed(2), { size: 13, anchor: 'end', color: C.slate }); });
    s.sym(f.ox - 7, f.oy + 4.5, '0', { size: 13, anchor: 'end', color: C.slate });
    [1, 2, 3].forEach((t) => { s.line(X(f, t), f.oy, X(f, t), f.oy + 4, { color: C.grey, w: 1.2 }); s.sym(X(f, t), f.oy + 19, String(t), { size: 13, color: C.slate }); });
    s.sym(X(f, 3.25) + 4, f.oy + 5, '<i>r</i>/<i>R</i>', { size: 14, anchor: 'start' });
    s.sym(f.ox + 9, Y(f, 1.22) + 6, '<i>E</i><sub><i>g</i></sub>/(<i>GM</i>/<i>R</i><sup>2</sup>)', { size: 14, anchor: 'start' });
    guide(s, at(f, 1, 0.04), at(f, 1, 0.96));
    const fn = (r: number) => E75(c.kind, r);
    if (c.kind === 'shell') {
      path(s, [at(f, 0, 0), at(f, 0.94, 0)], { color: C.mari, w: 2.8 });
      curve(s, f, fn, 1, 3, { color: C.mari, w: 2.8 });
      s.point(X(f, 1), f.oy, 4.5, `<circle cx="${r1(X(f, 1))}" cy="${r1(f.oy)}" r="4.5" fill="#fff" stroke="${C.mari}" stroke-width="2.2"/>`);
    } else {
      curve(s, f, fn, 0, 3, { color: C.mari, w: 2.8 });
    }
    s.dot(X(f, 1), Y(f, 1), 4.5, C.mari);
    s.sym(X(f, 1) + 10, Y(f, 1) - 8, '<i>GM</i>/<i>R</i><sup>2</sup>', { size: 14, anchor: 'start' });
    const res = c.kind === 'shell'
      ? resultBlock(s, ['0 inside; <i>GM</i>/<i>r</i><sup>2</sup> outside'])
      : resultBlock(s, ['<i>GMr</i>/<i>R</i><sup>3</sup> inside; <i>GM</i>/<i>r</i><sup>2</sup> outside']);
    s.place([{ t: c.kind === 'shell' ? 'Uniform shell' : 'Uniform solid sphere', p: at(f, 2, fn(2)), hi: true, at: [[W - 4, Y(f, 0.72), 'end'], [W - 4, Y(f, 0.85), 'end']] }], [res]);
    return s;
  },
  check(c: Case75) {
    const fn = (r: number) => E75(c.kind, r), f = f75;
    const peak = [0.25, 0.5, 0.75, 1.5, 2, 3].every((r) => fn(r) < fn(1));
    const out = [1.5, 2, 2.5, 3].every((r) => close(fn(r), 1 / (r * r), 1e-12));
    const common: Check[] = [
      [`At the surface E = GM/R² (drawn at ${fmt(vOf(f, Y(f, fn(1))), 4)} on the scale)`, close(fn(1), 1)],
      [`Outside, E = GM/r² from M_enc = M: E(2R) = ${fmt(fn(2), 4)} = 1/4, E(3R) = ${fmt(fn(3), 4)} = 1/9`, out],
      ['The curve falls monotonically beyond the surface', [1, 1.5, 2, 2.5].every((r) => fn(r + 0.5) < fn(r))],
    ];
    if (c.kind === 'shell')
      return [
        ['Inside the shell no mass is enclosed: E = 0 at r = 0, 0.5R, 0.99R', [0, 0.5, 0.99].every((r) => fn(r) === 0)],
        ['The jump at r = R: open circle at 0 (inside), filled dot at GM/R² (surface)', fn(0.999) === 0 && fn(1) === 1],
        ...common,
      ];
    return [
      [`Inside, M_enc = M r³/R³ (by integrating the density): E(0.5R) = ${fmt(fn(0.5), 6)} = GMr/R³`, close(fn(0.5), 0.5, 1e-9) && close(fn(0.25), 0.25, 1e-9)],
      ['E = 0 at the centre and rises linearly to the surface', fn(0) === 0 && close(fn(0.75) - fn(0.5), fn(0.5) - fn(0.25), 1e-9)],
      ['Continuous at r = R: the inside and outside branches meet at GM/R²', close(fn(0.999999), 1, 1e-5)],
      ['The field peaks exactly at the surface', peak],
      ...common,
    ];
  },
};

/* ===================================================================== */
/* Figure 7.6 · the cavity in a solid sphere (topic 02, Example 4)        */
/* ===================================================================== */
/** Sphere of radius R (px) round O; cavity of R/2 round O′ = O + (R/2, 0); P in the cavity; arrows k px per (4/3)πGρ·px. */
const F76 = { O: [110, 118] as P, R: 96, pr: 0.62, pa: 55, k: 0.7, kt: 1, tri: [330, 150] as P };
const geo76 = () => {
  const { O, R, pr, pa, k, kt, tri } = F76;
  const O2: P = [O[0] + R / 2, O[1]], Pp = add(O2, dir(pa), pr * (R / 2));
  const r = sub(Pp, O), r2 = sub(Pp, O2), d = sub(O2, O);
  const Ef = mul(r, -k), Es = mul(r2, -k), Ec = sub(Ef, Es);
  const T0 = tri, T1 = add(T0, mul(d, -kt)), T2 = add(T1, mul(r2, -kt)); // E_cavity, then E_small: their sum is E_full
  return { O2, Pp, r, r2, d, Ef, Es, Ec, T0, T1, T2 };
};
const fig76: Diagram = {
  id: 'p11-07-fig-7.6',
  topic: 1,
  name: 'The field in a spherical cavity',
  cases: [{ chip: 'Cavity', cap: 'A solid sphere of radius <i>R</i> centred at <i>O</i> with a spherical cavity of radius <i>R</i>/2 centred at <i>O</i>′, where <i>OO</i>′ = <i>R</i>/2. At a point <i>P</i> in the cavity, the field is that of the full sphere minus that of the small sphere that would fill the cavity.' }],
  draw() {
    const s = new Sketch(W, 352);
    const { O, R } = F76, g = geo76();
    circle(s, O, R, { w: 2.2 });
    circle(s, g.O2, R / 2, { w: 2 });
    const mY = O[1] + 58;
    guide(s, [O[0], O[1] + 5], [O[0], mY + 6]);
    guide(s, [g.O2[0], g.O2[1] + 5], [g.O2[0], mY + 6]);
    measure(s, [O[0], mY], [g.O2[0], mY], C.ink);
    s.sym((O[0] + g.O2[0]) / 2 - 6, mY + 18, '<i>OO</i>′ = <i>R</i>/2', { size: 13 });
    force(s, g.Pp, g.Ef, { w: 1.6 });
    force(s, g.Pp, g.Es, { w: 1.6, color: C.slate });
    force(s, g.Pp, g.Ec, { color: C.mari, w: 2.2 });
    s.dot(O[0], O[1], 3.4);
    s.dot(g.O2[0], g.O2[1], 3.4);
    s.dot(g.Pp[0], g.Pp[1], 3.4);
    s.sym(O[0] - 8, O[1] + 20, '<i>O</i>', { size: 16, anchor: 'end' });
    s.sym(g.O2[0] + 8, g.O2[1] + 20, '<i>O</i>′', { size: 16, anchor: 'start' });
    s.sym(g.Pp[0] + 8, g.Pp[1] + 17, '<i>P</i>', { size: 16, anchor: 'start' });
    // the triangle at P, drawn larger: E_full = E_small + E_cavity
    force(s, g.T0, sub(g.T2, g.T0), { w: 1.8 });
    force(s, g.T0, sub(g.T1, g.T0), { color: C.mari, w: 2.4 });
    force(s, g.T1, sub(g.T2, g.T1), { w: 1.8, color: C.slate });
    keepClear(s, g.T0, 2);
    s.sym(W - 4, g.T0[1] - 30, 'at <i>P</i>:', { size: 14, anchor: 'end' });
    s.sym((g.T0[0] + g.T1[0]) / 2, g.T0[1] - 8, '<i>E⃗</i><sub>cavity</sub>', { size: 15, color: C.amber });
    s.sym(g.T1[0] - 9, (g.T1[1] + g.T2[1]) / 2 - 2, '<i>E⃗</i><sub>small</sub>', { size: 15, anchor: 'end', color: C.slate });
    s.sym((g.T0[0] + g.T2[0]) / 2 + 8, (g.T0[1] + g.T2[1]) / 2 + 24, '<i>E⃗</i><sub>full</sub>', { size: 15 });
    s.sym(W - 4, 214, 'uniform: the same at', { size: 13, anchor: 'end', color: C.slate });
    s.sym(W - 4, 230, 'every point of the cavity', { size: 13, anchor: 'end', color: C.slate });
    s.sym(W / 2, 256, '<i>E⃗</i><sub>full</sub> = −(4/3)π<i>Gρ</i> <i>r⃗</i>,  <i>E⃗</i><sub>small</sub> = −(4/3)π<i>Gρ</i> (<i>r⃗</i> − <i>d⃗</i>)', { size: 14 });
    s.sym(W / 2, 276, '<i>r⃗</i> from <i>O</i> to <i>P</i>,  <i>d⃗</i> from <i>O</i> to <i>O</i>′', { size: 14 });
    const res = resultBlock(s, ['<i>E⃗</i><sub>cavity</sub> = <i>E⃗</i><sub>full</sub> − <i>E⃗</i><sub>small</sub>', '= −(4/3)π<i>Gρ</i> <i>d⃗</i> (constant, toward <i>O</i>)'], { size: 14 });
    s.place(
      [
        { t: 'Field in the cavity', p: add(g.Pp, g.Ec, 0.5), hi: true, at: [[W - 4, 4, 'end'], [W - 4, 8, 'end']] },
        { t: 'Cavity', p: add(g.O2, dir(30), R / 2), at: [[W - 4, 36, 'end'], [W - 4, 42, 'end']] },
        { t: 'Solid sphere', p: add(O, dir(140), R), at: [[6, 4, 'start'], [6, 10, 'start']] },
      ],
      [res]
    );
    return s;
  },
  check() {
    const { O, R } = F76, g = geo76();
    const Gc = 1, rho = 1, k43 = (4 / 3) * Math.PI * Gc * rho;
    // the exact field of a uniform solid sphere inside it is −(4/3)πGρ (r − centre); superpose at sample points
    const Fsphere = (pt: P, c: P): P => mul(sub(pt, c), -k43);
    const samples: P[] = [g.Pp, add(g.O2, [10, 5]), add(g.O2, [-30, -20]), add(g.O2, [0, 40]), g.O2];
    const Ecav = samples.map((pt) => sub(Fsphere(pt, O), Fsphere(pt, g.O2)));
    const want = mul(g.d, -k43);
    return [
      ['The cavity has radius R/2, its centre R/2 from O: it touches O and the sphere\'s surface', close(len(sub(g.O2, O)), R / 2) && close(len(sub(g.O2, O)) + R / 2, R) && close(len(sub(g.O2, O)) - R / 2, 0)],
      [`P is inside the cavity (${fmt(len(g.r2) / (R / 2), 2)} of its radius from O′)`, len(g.r2) < R / 2],
      ['At P: E_full points along −r (toward O), E_small along −r′ (toward O′), both ∝ distance', close(crossZ(g.Ef, g.r), 0, 1e-9) && dotp(g.Ef, g.r) < 0 && close(crossZ(g.Es, g.r2), 0, 1e-9) && dotp(g.Es, g.r2) < 0],
      ['E_cavity = E_full − E_small at P = −k d: parallel to OO′, toward O', close(g.Ec[0], -F76.k * g.d[0]) && close(g.Ec[1], 0)],
      ['The side triangle closes: E_cavity + E_small = E_full (its sides are −k d, −k r′ and −k r)', close(g.T2[0] - g.T0[0], -F76.kt * g.r[0]) && close(g.T2[1] - g.T0[1], -F76.kt * g.r[1]) && close(g.T1[0] - g.T0[0], -F76.kt * g.d[0]) && close(g.T1[1], g.T0[1])],
      [`Superposing the two exact sphere fields at ${samples.length} points of the cavity gives the same vector every time: uniform`, Ecav.every((e) => close(e[0], want[0], 1e-9) && close(e[1], want[1], 1e-9))],
      [`Its magnitude is (4/3)πGρ·(R/2) = (2/3)πGρR (${fmt(len(want) / (Math.PI * Gc * rho * R), 4)} πGρR)`, close(len(want), (2 / 3) * Math.PI * Gc * rho * R, 1e-9)],
    ];
  },
};

/* ===================================================================== */
/* Figure 7.7 · a ball in a tunnel through the Earth (topic 03, Ex. 4)    */
/* ===================================================================== */
/**
 * Earth of R px; the ball at r = 0.45 R above the centre; mg (at the surface) = `mg` px. The Earth is
 * drawn large enough that the force label sits inside it, clear of the outline, as in the book.
 */
const F77 = { O: [150, 155] as P, R: 125, r: 0.45, tw: 12, mg: 70, ball: 6 };
const geo77 = () => {
  const { O, R, r, mg } = F77;
  const B: P = [O[0], O[1] - r * R];
  const Fv: P = mul(sub(O, B), (mg / R)); // −(mg/R) r: toward the centre, ∝ r
  return { B, Fv };
};
const fig77: Diagram = {
  id: 'p11-07-fig-7.7',
  topic: 2,
  name: 'A ball in a tunnel through the Earth',
  cases: [{ chip: 'Tunnel', cap: 'A ball at distance <i>r</i> from the centre of the Earth in a tunnel through the centre: the net gravitational force <i>F</i> = −(<i>mg</i>/<i>R</i>) <i>r</i> points back toward the centre.' }],
  draw() {
    const s = new Sketch(W, 372);
    const { O, R, tw, ball } = F77, g = geo77();
    circle(s, O, R, { w: 2.4 });
    shape(s, [[O[0] - tw / 2, O[1] - R + 0.6], [O[0] + tw / 2, O[1] - R + 0.6], [O[0] + tw / 2, O[1] + R - 0.6], [O[0] - tw / 2, O[1] + R - 0.6]], { color: C.slate, w: 1.4 });
    guide(s, O, [O[0] + R, O[1]]);
    s.sym(O[0] + R / 2 + 6, O[1] + 20, '<i>R</i>', { size: 16 });
    const mx = O[0] - tw / 2 - 12;
    guide(s, [O[0] - tw / 2 - 2, O[1]], [mx - 6, O[1]]);
    guide(s, [O[0] - tw / 2 - 2, g.B[1]], [mx - 6, g.B[1]]);
    measure(s, [mx, g.B[1]], [mx, O[1]], C.ink);
    s.sym(mx - 8, (g.B[1] + O[1]) / 2 + 6, '<i>r</i>', { size: 16, anchor: 'end' });
    force(s, add(g.B, [0, ball]), g.Fv, HI);
    body(s, g.B, ball, { w: 2 });
    s.dot(O[0], O[1], 2.8);
    s.sym(O[0] + tw / 2 + 8, g.B[1] + g.Fv[1] / 2 + 12, '<i>F</i> = −(<i>mg</i>/<i>R</i>) <i>r</i>', { size: 15, anchor: 'start', color: C.amber });
    const res = resultBlock(s, ['<i>g</i>(<i>r</i>) = <i>g</i> <i>r</i>/<i>R</i> toward centre', 'SHM: <i>F</i> = −<i>k</i><sub>eff</sub>\u2009<i>r</i>,  <i>k</i><sub>eff</sub> = <i>mg</i>/<i>R</i>', '<i>T</i> = 2π√(<i>R</i>/<i>g</i>) ≈ 84.6 min'], { size: 14 });
    s.place(
      [
        { t: 'Restoring force', p: add(add(g.B, [0, ball]), g.Fv, 0.5), hi: true, at: [[W - 4, 4, 'end'], [W - 4, 8, 'end']] },
        { t: 'Ball', p: add(g.B, [-ball * 0.7, -ball * 0.7]), own: g.B, at: [[14, 4, 'start'], [14, 8, 'start']] },
        { t: 'Tunnel', p: [O[0] - tw / 2, O[1] + R * 0.7], at: [[6, O[1] + R * 0.82, 'start'], [6, O[1] + R * 0.86, 'start']] },
        { t: 'Earth', p: add(O, dir(-35), R), at: [[W - 4, O[1] + R * 0.5, 'end'], [W - 4, O[1] + R * 0.6, 'end']] },
      ],
      [res]
    );
    return s;
  },
  check() {
    const { O, R, r, mg } = F77, g = geo77();
    const Re = 6.4e6, gE = 9.8, T = 2 * Math.PI * Math.sqrt(Re / gE);
    const genc = (x: number) => simpson((u) => 3 * u * u, 0, x, 200) / (x * x); // g(r)/g from M_enc, r in units of R
    const drawnR = (O[1] - g.B[1]) / R;
    return [
      [`The ball is in the tunnel, r = ${fmt(drawnR, 2)} R from the centre`, close(g.B[0], O[0]) && close(drawnR, r)],
      [`Only the sphere of radius r pulls: g(r) = g·M_enc/M·(R/r)² = ${fmt(genc(r), 6)} g = g r/R`, close(genc(r), r, 1e-9)],
      [`The force arrow is (mg/R) r long: ${fmt(len(g.Fv), 3)} px = ${fmt(r, 2)} × mg (${mg} px)`, close(len(g.Fv), (mg / R) * (O[1] - g.B[1]))],
      ['It points from the ball to the centre: opposite to the displacement r (the minus sign)', g.Fv[1] > 0 && close(g.Fv[0], 0)],
      ['k_eff = mg/R, so ω = √(g/R) and T = 2π√(R/g)', close(Math.sqrt(gE / Re) * T, 2 * Math.PI)],
      [`T = 2π√(R/g) = ${T.toFixed(0)} s = ${(T / 60).toFixed(1)} min with R = 6.4 × 10⁶ m, g = 9.8 m/s² (≈ 84.6 min)`, T.toFixed(0) === '5078' && (T / 60).toFixed(1) === '84.6'],
    ];
  },
};

/* ===================================================================== */
/* Figure 7.8 · U = −GMm/r against r (topic 04)                           */
/* ===================================================================== */
/** GMm = 1 J·m, so U(r) = −1/r J with r in m (the book's axes). U = 0 sits at y = oy. */
const f78: Frame = { ox: 62, oy: 70, sx: 50, sy: 36 };
const U78 = (r: number) => -1 / r;
const A78 = { r0: 1.6, r1: 0.62, off: 10 };
/** The arrow along the curve, offset `off` px outside it, from r0 down to r1. */
const arrow78 = () => {
  const f = f78, n = 30, pts: P[] = [];
  for (let i = 0; i <= n; i++) {
    const r = A78.r0 + ((A78.r1 - A78.r0) * i) / n, p = at(f, r, U78(r));
    const t: P = [f.sx, -f.sy * (1 / (r * r))], tl = len(t), nrm: P = [t[1] / tl, -t[0] / tl];
    pts.push(add(p, nrm, -A78.off));
  }
  return pts;
};
const fig78: Diagram = {
  id: 'p11-07-fig-7.8',
  topic: 3,
  name: 'Potential energy against r',
  cases: [{ chip: 'U against r', cap: '<i>U</i> = −<i>GMm</i>/<i>r</i> plotted against <i>r</i>: a hyperbola lying entirely below the axis. <i>U</i> tends to −∞ as <i>r</i> → 0 and rises toward 0 from below as <i>r</i> → ∞.' }],
  draw() {
    const s = new Sketch(W, 312);
    const f = f78, bot = Y(f, -4.5);
    s.vec(f.ox, bot, X(f, 5.35), bot, { color: C.grey, w: 1.3 });
    s.vec(f.ox, bot, f.ox, Y(f, 0.75), { color: C.grey, w: 1.3 });
    path(s, [at(f, 0, 0), at(f, 5.3, 0)], { color: C.slate, w: 1.2 });
    [0, -1, -2, -3, -4].forEach((v) => { s.line(f.ox - 4, Y(f, v), f.ox, Y(f, v), { color: C.grey, w: 1.2 }); s.sym(f.ox - 7, Y(f, v) + 4.5, v === 0 ? '0' : `−${-v}`, { size: 13, anchor: 'end', color: C.slate }); });
    [0, 1, 2, 3, 4, 5].forEach((t) => { s.line(X(f, t), bot, X(f, t), bot + 4, { color: C.grey, w: 1.2 }); s.sym(X(f, t), bot + 19, String(t), { size: 13, color: C.slate }); });
    s.sym(X(f, 5.35), bot - 8, '<i>r</i> (m)', { size: 14, anchor: 'end' });
    s.sym(f.ox + 9, Y(f, 0.75) + 6, '<i>U</i> (J)', { size: 14, anchor: 'start' });
    s.sym(W / 2 + 10, 20, 'Gravitational potential energy: <i>U</i> = −<i>GMm</i>/<i>r</i>', { size: 14 });
    s.sym(X(f, 5.3), Y(f, 0) - 7, '<i>U</i> = 0 at <i>r</i> → ∞', { size: 14, anchor: 'end', color: C.slate });
    curve(s, f, U78, 0.25, 5, { color: C.ink, w: 2.6 });
    const ar = arrow78(), last = ar[ar.length - 1], prev = ar[ar.length - 3];
    path(s, ar.slice(0, -2), { color: C.mari, w: 2.4 });
    s.vec(prev[0], prev[1], last[0], last[1], { color: C.mari, w: 2.4 });
    keepClear(s, at(f, 0.25, -4), 2);
    const res = resultBlock(s, ['<i>U</i> < 0 for all finite <i>r</i>']);
    s.place(
      [
        { t: 'More negative: tighter bound', p: ar[10], hi: true, at: [[X(f, 1.15), Y(f, -1.8), 'start'], [X(f, 1.2), Y(f, -2.1), 'start']] },
        { t: 'Hyperbola', p: at(f, 3.6, U78(3.6)), at: [[X(f, 3.3), Y(f, -0.85), 'start'], [X(f, 3.4), Y(f, -1.0), 'start']] },
      ],
      [res]
    );
    return s;
  },
  check() {
    const f = f78, ar = arrow78();
    const rs = [0.25, 0.5, 1, 2, 3, 4, 5];
    const firstR = A78.r0, lastR = A78.r1;
    return [
      [`U = −GMm/r with GMm = 1 J·m: U(0.25 m) = ${fmt(U78(0.25))} J, U(1 m) = ${fmt(U78(1))} J, U(5 m) = ${fmt(U78(5))} J`, close(U78(0.25), -4) && close(U78(1), -1) && close(U78(5), -0.2)],
      ['A hyperbola: r × U is the same at every drawn point', rs.every((r) => close(r * U78(r), -1))],
      ['Every drawn point lies below the axis (U < 0 for all finite r)', rs.every((r) => U78(r) < 0) && rs.every((r) => Y(f, U78(r)) > f.oy)],
      ['U rises with r toward 0 (dU/dr = GMm/r² > 0: the force is attractive)', rs.slice(1).every((r, i) => U78(r) > U78(rs[i]))],
      [`As r → 0, U → −∞ (U(10⁻³ m) = ${fmt(U78(1e-3), 0)} J); as r → ∞, U → 0⁻ (U(10³ m) = ${fmt(U78(1e3), 3)} J)`, U78(1e-3) < -999 && U78(1e3) < 0 && U78(1e3) > -0.0011],
      ['The highlighted arrow runs along the curve toward smaller r and more negative U', firstR > lastR && U78(lastR) < U78(firstR) && ar[ar.length - 1][1] > ar[0][1] && ar[ar.length - 1][0] < ar[0][0]],
    ];
  },
};

/* ===================================================================== */
/* Figure 7.9 · m and 2m falling together (topic 04, Example 4)           */
/* ===================================================================== */
/** m (radius rm px) and 2m (radius rm·2^(1/3), the same density) a separation r apart; v₂ = `v2` px. */
const F79 = { c1: [92, 78] as P, c2: [250, 78] as P, rm: 14, v2: 22, gap: 8, top: 36 };
const geo79 = () => {
  const { c1, c2, rm, v2, gap } = F79, r2 = rm * Math.cbrt(2);
  const v1 = (2 * 1 * v2) / 1; // m v₁ = 2m v₂
  return { r2, v1v: [v1, 0] as P, v2v: [-v2, 0] as P, a1: [c1[0] + rm + gap, c1[1]] as P, a2: [c2[0] - r2 - gap, c2[1]] as P };
};
const fig79: Diagram = {
  id: 'p11-07-fig-7.9',
  topic: 3,
  name: 'Two masses falling together',
  cases: [{ chip: 'm and 2m', cap: 'Masses <i>m</i> and 2<i>m</i>, initially a distance <i>d</i> apart, move toward each other from rest; when their separation is <i>r</i> they have speeds <i>v</i><sub>1</sub> (for <i>m</i>, directed right) and <i>v</i><sub>2</sub> (for 2<i>m</i>, directed left).' }],
  draw() {
    const s = new Sketch(W, 228);
    const { c1, c2, rm, top } = F79, g = geo79();
    path(s, [[c1[0], c1[1] - rm - 3], [c1[0], top], [c2[0], top], [c2[0], c2[1] - g.r2 - 3]], { color: C.ink, w: 1.5 });
    s.sym((c1[0] + c2[0]) / 2, top - 10, '<i>r</i>', { size: 17 });
    body(s, c1, rm);
    body(s, c2, g.r2);
    force(s, g.a1, g.v1v, HI);
    force(s, g.a2, g.v2v, HI);
    s.sym(g.a1[0] + g.v1v[0] / 2, c1[1] + 24, '<i>v</i><sub>1</sub>', { size: 16, color: C.amber });
    s.sym(g.a2[0] + g.v2v[0] / 2, c2[1] + 24, '<i>v</i><sub>2</sub>', { size: 16, color: C.amber });
    s.sym(c1[0], c1[1] + rm + 32, '<i>m</i>', { size: 17 });
    s.sym(c2[0], c2[1] + g.r2 + 30, '2<i>m</i>', { size: 17 });
    s.sym(W / 2, 150, 'Released from rest at separation <i>d</i>;', { size: 14, color: C.slate });
    s.sym(W / 2, 169, 'find relative velocity at separation <i>r</i>', { size: 14, color: C.slate });
    resultBlock(s, ['<i>mv</i><sub>1</sub> = 2<i>mv</i><sub>2</sub>\u2009 ⇒ <i>v</i><sub>1</sub> = 2<i>v</i><sub>2</sub>']);
    return s;
  },
  check() {
    const g = geo79();
    const m = 1, Gc = 1, d = 4, r = 1.5;
    const v2 = Math.sqrt(((2 * Gc * m) / 3) * (1 / r - 1 / d)), v1 = 2 * v2;
    const E0 = -(Gc * m * 2 * m) / d, E1 = 0.5 * m * v1 * v1 + 0.5 * 2 * m * v2 * v2 - (Gc * m * 2 * m) / r;
    return [
      ['They move toward each other: v₁ to the right (m), v₂ to the left (2m)', g.v1v[0] > 0 && g.v2v[0] < 0],
      [`Total momentum stays zero: m·v₁ + 2m·v₂ = ${fmt(1 * g.v1v[0] + 2 * g.v2v[0], 6)} (drawn)`, close(1 * g.v1v[0] + 2 * g.v2v[0], 0)],
      [`v₁ = 2v₂: the arrows are ${fmt(len(g.v1v))} px and ${fmt(len(g.v2v))} px`, close(len(g.v1v), 2 * len(g.v2v))],
      ['2m is drawn at the same density: its radius is 2^(1/3) times m\'s', close(g.r2 ** 3, 2 * F79.rm ** 3, 1e-6)],
      [`Energy is conserved with v₂² = (2Gm/3)(1/r − 1/d) (sample d = 4, r = 1.5): ${fmt(E1, 6)} = ${fmt(E0, 6)}`, close(E0, E1, 1e-12)],
      [`v_rel = v₁ + v₂ = 3v₂ = √(6Gm(1/r − 1/d)) = ${fmt(v1 + v2, 6)}`, close(v1 + v2, Math.sqrt(6 * Gc * m * (1 / r - 1 / d)), 1e-12)],
    ];
  },
};

/* ===================================================================== */
/* Figure 7.10 · Newton's mountain (topic 05)                             */
/* ===================================================================== */
/**
 * Earth of R px; the cannonball leaves the summit (r₀ = 1.2 R) horizontally with v² = k·GM/r₀.
 * k < 1: an ellipse with its far point (apoapsis) at the summit, r(Δ) = p/(1 − e cos Δ) with
 * p = k r₀, e = 1 − k, run until it meets the ground; k = 1: the circle r = r₀.
 */
const F710 = { O: [136, 194] as P, R: 88, h: 0.2, ks: [0.45, 0.75], base: 11 };
const r0_710 = () => F710.R * (1 + F710.h);
/** Angle travelled (from the summit) when the path with speed factor k meets the ground, in radians. */
const land710 = (k: number) => { const p = k * r0_710(), e = 1 - k; return Math.acos((1 - p / F710.R) / e); };
const path710 = (k: number, D1: number): P[] => {
  const { O } = F710, r0 = r0_710(), p = k * r0, e = 1 - k, pts: P[] = [], n = 60;
  for (let i = 0; i <= n; i++) {
    const D = (D1 * i) / n, r = p / (1 - e * Math.cos(D));
    pts.push([O[0] + r * Math.sin(D), O[1] - r * Math.cos(D)]); // clockwise from the top: fired to the right
  }
  return pts;
};
const fig710: Diagram = {
  id: 'p11-07-fig-7.10',
  topic: 4,
  name: 'Newton’s mountain',
  cases: [{ chip: 'Newton’s mountain', cap: 'Newton’s mountain: a cannonball fired horizontally from a tall mountain lands farther the faster it is launched; at sufficient speed the path closes into a circular orbit, a state of perpetual free fall.' }],
  draw() {
    const s = new Sketch(W, 334);
    const { O, R, ks, base } = F710, r0 = r0_710(), top: P = [O[0], O[1] - r0];
    circle(s, O, r0, { color: C.mari, w: 2.4, fill: false });
    circle(s, O, R, { w: 2.2 });
    shape(s, [top, [O[0] + base, O[1] - Math.sqrt(R * R - base * base)], [O[0] - base, O[1] - Math.sqrt(R * R - base * base)]], { w: 1.8 });
    const ends = ks.map((k) => { const pts = path710(k, land710(k)); path(s, pts, { color: C.ink, w: 1.6 }); return pts; });
    s.dot(top[0], top[1], 3.8);
    s.sym(O[0], O[1] + 6, 'Earth', { size: 16 });
    const mid = (pts: P[], f: number) => pts[Math.round((pts.length - 1) * f)];
    s.place([
      { t: 'Medium speed: lands farther', p: mid(ends[1], 0.6), at: [[W - 4, 4, 'end'], [W - 4, 8, 'end']] },
      { t: 'Low speed: lands close', p: mid(ends[0], 0.7), at: [[6, 30, 'start'], [6, 32, 'start']] },
      { t: 'Mountain', p: add(top, [-base * 0.55, (r0 - R) * 0.55]), at: [[6, 58, 'start'], [6, 60, 'start']] },
      { t: 'Orbit: perpetual free fall', p: add(O, dir(215), r0), hi: true, at: [[6, 306, 'start'], [6, 302, 'start']] },
    ]);
    return s;
  },
  check() {
    const { R, ks } = F710, r0 = r0_710(), GM = 1;
    const out: Check[] = [];
    ks.forEach((k, i) => {
      const v = Math.sqrt((k * GM) / r0), hh = r0 * v, eps = (v * v) / 2 - GM / r0;
      const p = (hh * hh) / GM, e = Math.sqrt(1 + (2 * eps * hh * hh) / (GM * GM));
      const D = land710(k), rl = p / (1 - (1 - k) * Math.cos(D));
      out.push([`Path ${i + 1} (v² = ${k} GM/r₀): from energy and angular momentum, p = h²/(GM) = ${fmt(p / r0, 4)} r₀ and e = ${fmt(e, 4)}, as drawn`, close(p, k * r0, 1e-9) && close(e, 1 - k, 1e-9)]);
      out.push([`Path ${i + 1} meets the ground (r = R) after ${fmt(D / D2R, 1)}°`, close(rl, R, 1e-9)]);
    });
    const d = ks.map(land710);
    const rr = path710(1, 2 * Math.PI).map((p2) => len(sub(p2, F710.O)));
    return [
      ['Fired horizontally: at the summit the path is at its farthest point (dr/dΔ = 0, velocity ⟂ radius)', ks.every((k) => { const pts = path710(k, 0.02); return len(sub(pts[1], F710.O)) < r0; })],
      ...out,
      [`Faster lands farther: ${d.map((x) => fmt(x / D2R, 1) + '°').join(' < ')}`, d[1] > d[0]],
      [`At v = √(GM/r₀) the path never comes down: r stays r₀ (${fmt(Math.min(...rr) / r0, 6)}–${fmt(Math.max(...rr) / r0, 6)} r₀), a closed circle`, rr.every((x) => close(x, r0, 1e-9))],
      ['The summit is above the ground (r₀ > R), so the circular orbit clears the Earth', r0 > R],
    ];
  },
};

/* ===================================================================== */
/* Figure 7.11 · a tangential burn: circle to ellipse (topic 05, Ex. 4)   */
/* ===================================================================== */
/**
 * r₀ in px; M at a focus; the ellipse has r_p = r₀, r_a = 3r₀ (a = 2r₀, e = ½); v₀ = `v0` px.
 * Drawn mirrored from the book (perigee on the left, satellite moving down there) so the speed
 * label and the tags have room; the geometry is the same.
 */
const F711 = { M: [162, 196] as P, r0: 56, v0: 40 };
const geo711 = () => {
  const { M, r0, v0 } = F711, rp = r0, ra = 3 * r0, a = (rp + ra) / 2, c = a - rp, b = Math.sqrt(a * a - c * c);
  const Cc: P = [M[0] + c, M[1]];
  return { rp, ra, a, c, b, Cc, peri: [M[0] - rp, M[1]] as P, apo: [M[0] + ra, M[1]] as P, F2: [Cc[0] + c, M[1]] as P, v: [0, Math.sqrt(1.5) * v0] as P };
};
const fig711: Diagram = {
  id: 'p11-07-fig-7.11',
  topic: 4,
  name: 'A tangential burn: circle to ellipse',
  cases: [{ chip: 'Transfer orbit', cap: 'A circular orbit of radius <i>r</i><sub>0</sub> about a planet <i>M</i>. After a tangential burn at one point the satellite moves on an ellipse with that point as perigee and the apogee at <i>r</i><sub><i>a</i></sub> = 3<i>r</i><sub>0</sub>, the planet being at one focus.' }],
  draw() {
    const s = new Sketch(W, 346);
    const { M, r0 } = F711, g = geo711();
    s.add(`<ellipse cx="${r1(g.Cc[0])}" cy="${r1(g.Cc[1])}" rx="${r1(g.a)}" ry="${r1(g.b)}" fill="none" stroke="${C.ink}" stroke-width="2.4"/>`);
    circle(s, M, r0, { color: C.slate, w: 1.6, dash: 'dash', fill: false });
    body(s, M, 7, { w: 2 });
    crossMark(s, g.F2, 5, { color: C.slate, w: 2 });
    force(s, g.peri, g.v, HI);
    s.dot(g.peri[0], g.peri[1], 4.6, C.mari);
    s.dot(g.apo[0], g.apo[1], 4.6);
    // r₀ along the axis inside the old circle; r_a below, from M to the apogee
    const y1 = M[1] - 13, y2 = M[1] + g.b + 20;
    measure(s, [g.peri[0] + 6, y1], [M[0] - 2, y1], C.ink);
    s.sym((g.peri[0] + M[0]) / 2 + 2, y1 - 9, '<i>r</i><sub>0</sub>', { size: 16 });
    guide(s, [M[0], M[1] + 10], [M[0], y2 + 6]);
    guide(s, [g.apo[0], g.apo[1] + 6], [g.apo[0], y2 + 6]);
    measure(s, [M[0], y2], [g.apo[0], y2], C.ink);
    s.sym((g.apo[0] + M[0]) / 2, y2 + 19, '<i>r</i><sub><i>a</i></sub> = 3<i>r</i><sub>0</sub>', { size: 16 });
    s.sym(M[0] + 10, M[1] + 24, '<i>M</i>', { size: 17, anchor: 'start' });
    s.sym(g.peri[0] - 12, g.peri[1] + g.v[1] * 0.62, '<i>v</i> = √(3/2) <i>v</i><sub>0</sub>', { size: 14, anchor: 'end', color: C.amber });
    s.place([
      { t: 'Ellipse after burn, M at a focus', p: [M[0] + 108, g.Cc[1] - g.b * Math.sqrt(1 - ((M[0] + 108 - g.Cc[0]) / g.a) ** 2)], at: [[W - 4, 4, 'end'], [W - 4, 8, 'end']] },
      { t: 'Circle before burn', p: add(M, dir(60), r0), at: [[M[0] + r0 / 2, 32, 'middle'], [M[0] + r0 / 2, 34, 'middle']] },
      // short enough to sit wholly left of the burn point, so its line comes in at an angle
      // instead of running on down into the v arrow as one orange line
      { t: 'Burn point', p: g.peri, own: g.peri, hi: true, at: [[2, 130, 'start'], [2, 120, 'start']] },
      { t: 'Apogee', p: g.apo, own: g.apo, at: [[W - 4, 60, 'end'], [W - 4, 62, 'end']] },
      { t: 'Empty focus', p: g.F2, own: g.F2, at: [[g.F2[0] - 2, M[1] + 22, 'middle'], [g.F2[0] - 6, M[1] + 26, 'middle']] },
    ]);
    return s;
  },
  check() {
    const { M, r0 } = F711, g = geo711();
    const GM = 1, R0 = 1, v0 = Math.sqrt(GM / R0), v = Math.sqrt(1.5) * v0;
    const a = 1 / (2 / R0 - (v * v) / GM); // vis-viva at the burn point
    const ra = 2 * a - R0, va = (v * R0) / ra;
    const Ep = (v * v) / 2 - GM / R0, Ea = (va * va) / 2 - GM / ra;
    const disc = 16 - 12, roots = [(4 - Math.sqrt(disc)) / 2, (4 + Math.sqrt(disc)) / 2]; // r_a² − 4r₀r_a + 3r₀² = 0
    const fociSum = (p2: P) => len(sub(p2, M)) + len(sub(p2, g.F2));
    const onEll = [0, 40, 90, 150, 200, 270].map((t) => add(g.Cc, [g.a * Math.cos(t * D2R), g.b * Math.sin(t * D2R)]));
    return [
      [`M is at a focus: the perigee is r₀ from M (${fmt(len(sub(g.peri, M)) / r0, 4)} r₀), the apogee 3r₀ (${fmt(len(sub(g.apo, M)) / r0, 4)} r₀)`, close(len(sub(g.peri, M)), r0) && close(len(sub(g.apo, M)), 3 * r0)],
      [`Every drawn point of the ellipse is 2a = ${fmt((2 * g.a) / r0, 3)} r₀ from the two foci together`, onEll.every((p2) => close(fociSum(p2), 2 * g.a, 1e-9))],
      ['The burn point is on the old circle, and the dashed circle has radius r₀ about M', close(len(sub(g.peri, M)), F711.r0)],
      ['The burn is tangential: v ⟂ the radius at the perigee', close(dotp(g.v, sub(g.peri, M)), 0)],
      ['The empty focus is 2c = 2r₀ from M, on the far side of the centre', close(len(sub(g.F2, M)), 2 * g.c) && close(g.c, r0)],
      [`Vis-viva at r₀ with v² = (3/2)GM/r₀ gives a = ${fmt(a, 6)} r₀ = 2r₀, so r_a = 2a − r₀ = ${fmt(ra, 6)} r₀`, close(a, 2, 1e-12) && close(ra, 3, 1e-12)],
      [`Energy and angular momentum match at both ends: ε = ${fmt(Ep, 6)} = ${fmt(Ea, 6)}, v_p r_p = v_a r_a`, close(Ep, Ea, 1e-12) && close(v * R0, va * ra, 1e-12)],
      [`The quadratic r_a² − 4r₀r_a + 3r₀² = 0 has roots ${roots.map((x) => fmt(x)).join(' and ')} r₀`, close(roots[0], 1) && close(roots[1], 3)],
      [`Bound: v₀ < v = ${fmt(v / v0, 4)} v₀ < √2 v₀; the arrow is drawn √(3/2) × ${F711.v0} px`, v > v0 && v < Math.SQRT2 * v0 && close(len(g.v), Math.sqrt(1.5) * F711.v0)],
    ];
  },
};

/* ===================================================================== */
/* Figure 7.12 · the Cavendish torsion balance (topic 06)                 */
/* ===================================================================== */
/** Rod from xL to xR at y; each large mass M is d px from its small mass m, on opposite sides; F drawn `Fpx`. */
const F712 = { xL: 72, xR: 248, y: 134, d: 60, RM: 20, rm: 10, Fpx: 24, src: [40, 296] as P, scale: [280, 296] as P, mir: 6, dimY: 34 };
const geo712 = () => {
  const { xL, xR, y, d, rm, Fpx, mir } = F712;
  const mL: P = [xL, y], mR: P = [xR, y], ML: P = [xL, y - d], MR: P = [xR, y + d], mid: P = [(xL + xR) / 2, y];
  const FL: P = [0, -Fpx], FR: P = [0, Fpx];
  return { mL, mR, ML, MR, mid, FL, FR, aL: [xL, y - rm] as P, aR: [xR, y + rm] as P, hitPt: [mid[0], y + mir] as P };
};
/** The ray from a to the mirror, reflected off a mirror whose normal is turned `th` degrees from straight down. */
function reflect712(a: P, m: P, th: number): P {
  const n = [Math.sin(th * D2R), Math.cos(th * D2R)] as P, i = mul(sub(m, a), 1 / len(sub(m, a)));
  return sub(i, mul(n, 2 * dotp(i, n)));
}
const fig712: Diagram = {
  id: 'p11-07-fig-7.12',
  topic: 5,
  name: 'The Cavendish torsion balance',
  cases: [{ chip: 'Torsion balance', cap: 'Cavendish torsion balance seen from above: small masses <i>m</i> at the ends of a light rod hang from a vertical fibre. Large masses <i>M</i> placed near them on opposite sides pull them in opposite directions, producing a couple that twists the fibre; a light beam reflected from a mirror on the fibre records the twist on a distant scale.' }],
  draw() {
    const s = new Sketch(W, 404);
    const { xL, xR, y, RM, rm, src, scale, mir, dimY } = F712, g = geo712();
    guide(s, [xL, dimY + 6], [xL, g.ML[1] - RM - 4]);
    guide(s, [xR, dimY + 6], [xR, y - rm - 4]);
    measure(s, [xL, dimY], [xR, dimY], C.ink);
    s.sym((xL + xR) / 2, dimY - 10, 'rod length <i>L</i>', { size: 15 });
    // the beam: source → mirror → scale
    path(s, [src, g.hitPt], { color: C.slate, w: 1.4 });
    path(s, [g.hitPt, scale], { color: C.slate, w: 1.4 });
    s.mid(src[0], src[1], g.hitPt[0], g.hitPt[1], C.slate);
    s.mid(g.hitPt[0], g.hitPt[1], scale[0], scale[1], C.slate);
    s.line(xL, y, xR, y, { w: 4 });
    body(s, g.ML, RM, { w: 2.2 });
    body(s, g.MR, RM, { w: 2.2 });
    body(s, g.mL, rm, { w: 2 });
    body(s, g.mR, rm, { w: 2 });
    s.point(g.mid[0], g.mid[1], mir + 1, `<rect x="${r1(g.mid[0] - mir)}" y="${r1(g.mid[1] - mir)}" width="${2 * mir}" height="${2 * mir}" fill="#fff" stroke="${C.ink}" stroke-width="1.8"/><circle cx="${r1(g.mid[0])}" cy="${r1(g.mid[1])}" r="2.2" fill="${C.ink}"/>`);
    force(s, g.aL, g.FL, HI);
    force(s, g.aR, g.FR, HI);
    const dx = xL + 26;
    measure(s, [dx, g.ML[1]], [dx, y], C.ink);
    s.sym(dx + 8, (g.ML[1] + y) / 2 + 6, '<i>d</i>', { size: 16, anchor: 'start' });
    s.sym(xL - 12, g.aL[1] + g.FL[1] / 2 + 6, '<i>F</i>', { size: 16, anchor: 'end', color: C.amber });
    s.sym(xR - 12, g.aR[1] + g.FR[1] / 2 + 6, '<i>F</i>', { size: 16, anchor: 'end', color: C.amber });
    s.sym(g.ML[0] - RM - 8, g.ML[1] + 6, '<i>M</i>', { size: 17, anchor: 'end' });
    s.sym(g.MR[0] + RM + 8, g.MR[1] + 6, '<i>M</i>', { size: 17, anchor: 'start' });
    s.sym(xL - rm - 8, y + 6, '<i>m</i>', { size: 17, anchor: 'end' });
    s.sym(xR + rm + 8, y + 6, '<i>m</i>', { size: 17, anchor: 'start' });
    // light source: a ring with short rays; scale: a line with ticks
    s.point(src[0], src[1], 6, `<circle cx="${src[0]}" cy="${src[1]}" r="5" fill="#fff" stroke="${C.ink}" stroke-width="1.8"/>` + [0, 45, 90, 135, 180, 225, 270, 315].map((a2) => { const p1 = add(src, dir(a2), 8), p2 = add(src, dir(a2), 12); return `<line x1="${r1(p1[0])}" y1="${r1(p1[1])}" x2="${r1(p2[0])}" y2="${r1(p2[1])}" stroke="${C.ink}" stroke-width="1.4" stroke-linecap="round"/>`; }).join(''));
    s.line(scale[0] - 30, scale[1], scale[0] + 30, scale[1], { w: 2.4 });
    for (let i = -3; i <= 3; i++) s.line(scale[0] + i * 10, scale[1] - 5, scale[0] + i * 10, scale[1] + 5, { w: 1.3 });
    s.sym(g.mid[0], 236, 'reflected beam turns', { size: 13, color: C.slate });
    s.sym(g.mid[0], 252, 'through 2<i>θ</i>', { size: 13, color: C.slate });
    const res = resultBlock(s, ['Balance of torques:', '<i>FL</i> = <i>κθ</i>,  <i>F</i> = <i>GMm</i>/<i>d</i><sup>2</sup>', '⇒ <i>G</i> = <i>κθd</i><sup>2</sup>/(<i>MmL</i>)'], { size: 14 });
    s.place(
      [
        { t: 'Fibre (vertical)', p: g.mid, own: g.mid, at: [[g.mid[0] + 18, 74, 'start'], [g.mid[0] + 10, 64, 'start']] },
        { t: 'Mirror', p: [g.mid[0], g.mid[1] + mir], own: g.mid, at: [[g.mid[0], y + 52, 'middle'], [g.mid[0], y + 56, 'middle']] },
        { t: 'Light source', p: [src[0], src[1] + 12], own: src, at: [[6, src[1] + 22, 'start'], [6, src[1] + 26, 'start']] },
        { t: 'Scale', p: [scale[0] + 30, scale[1]], at: [[W - 4, scale[1] - 44, 'end'], [W - 4, scale[1] - 36, 'end']] },
      ],
      [res]
    );
    return s;
  },
  check() {
    const { xL, xR, d, src, scale } = F712, g = geo712();
    const tauL = crossZ(sub(g.mL, g.mid), g.FL), tauR = crossZ(sub(g.mR, g.mid), g.FR), L = xR - xL;
    const out0 = reflect712(src, g.hitPt, 0), toScale = mul(sub(scale, g.hitPt), 1 / len(sub(scale, g.hitPt)));
    const th = 0.8, turned = angOf(reflect712(src, g.hitPt, th)) - angOf(out0);
    // a sample: κ = 2e-7 N·m/rad, θ = 4e-3 rad, d = 0.05 m, M = 160 kg, m = 0.73 kg, L = 0.5 m
    const kap = 2e-7, the = 4e-3, dd = 0.05, M = 160, m = 0.73, Lm = 0.5, Gs = (kap * the * dd * dd) / (M * m * Lm);
    const Fs = (Gs * M * m) / (dd * dd);
    return [
      ['Each large mass sits d from its small mass, at right angles to the rod, on opposite sides', close(g.mL[1] - g.ML[1], d) && close(g.MR[1] - g.mR[1], d) && close(g.ML[0], g.mL[0]) && close(g.MR[0], g.mR[0])],
      ['Each pull F points from m toward its M: equal and opposite, so the net force is zero (a couple)', close(g.FL[1] + g.FR[1], 0) && g.FL[1] < 0 && g.FR[1] > 0],
      [`Both turn the rod the same way about the fibre: torques ${fmt(tauL)} and ${fmt(tauR)} (px²), total F × L`, Math.sign(tauL) === Math.sign(tauR) && close(Math.abs(tauL + tauR), F712.Fpx * L)],
      ['The beam obeys the law of reflection at the mirror and lands on the scale', close(dotp(out0, toScale), 1, 1e-9)],
      [`Turning the mirror by θ = ${th}° turns the reflected beam by ${fmt(Math.abs(turned), 6)}° = 2θ`, close(Math.abs(turned), 2 * th, 1e-9)],
      [`FL = κθ with F = GMm/d² gives G = κθd²/(MmL): sample G = ${Gs.toExponential(3)}, and F·L = ${(Fs * Lm).toExponential(3)} = κθ`, rel(Fs * Lm, kap * the, 1e-12)],
    ];
  },
};

/* ===================================================================== */
/* Figure 7.13 · a binary star, m and 2m (topic 06, Example 4)            */
/* ===================================================================== */
/** C, separation d (px); r₁ = 2d/3, r₂ = d/3; ω in px per px (v = ωr). */
const F713 = { C: [180, 188] as P, d: 192, rm: 10, w: 0.42, dimY: 34, botY: 348 };
const geo713 = () => {
  const { C: Cc, d, rm, w } = F713, r1_ = (2 * d) / 3, r2_ = d / 3, rM = rm * Math.cbrt(2);
  const s1: P = [Cc[0] - r1_, Cc[1]], s2: P = [Cc[0] + r2_, Cc[1]];
  return { r1: r1_, r2: r2_, rM, s1, s2, v1: [0, w * r1_] as P, v2: [0, -w * r2_] as P };
};
const fig713: Diagram = {
  id: 'p11-07-fig-7.13',
  topic: 5,
  name: 'A binary star: m and 2m',
  cases: [{ chip: 'Binary', cap: 'Stars of mass <i>m</i> and 2<i>m</i>, a distance <i>d</i> apart, orbit their common centre of mass <i>C</i> on circles of radii <i>r</i><sub>1</sub> = 2<i>d</i>/3 and <i>r</i><sub>2</sub> = <i>d</i>/3, on opposite sides of <i>C</i>.' }],
  draw() {
    const s = new Sketch(W, 446);
    const { C: Cc, rm, dimY, botY } = F713, g = geo713();
    circle(s, Cc, g.r1, { color: C.slate, w: 1.5, dash: 'dash', fill: false });
    circle(s, Cc, g.r2, { color: C.slate, w: 1.5, dash: 'dash', fill: false });
    guide(s, [g.s1[0], dimY + 6], [g.s1[0], g.s1[1] - rm - 4]);
    guide(s, [g.s2[0], dimY + 6], [g.s2[0], g.s2[1] - g.rM - 4]);
    measure(s, [g.s1[0], dimY], [g.s2[0], dimY], C.ink);
    s.sym((g.s1[0] + g.s2[0]) / 2, dimY - 10, '<i>d</i>', { size: 17 });
    guide(s, [g.s1[0], g.s1[1] + rm + 4], [g.s1[0], botY + 6]);
    guide(s, [Cc[0], Cc[1] + 9], [Cc[0], botY + 6]);
    guide(s, [g.s2[0], g.s2[1] + g.rM + 4], [g.s2[0], botY + 6]);
    measure(s, [g.s1[0], botY], [Cc[0], botY], C.ink);
    measure(s, [Cc[0], botY], [g.s2[0], botY], C.ink);
    s.sym((g.s1[0] + Cc[0]) / 2, botY + 20, '<i>r</i><sub>1</sub> = 2<i>d</i>/3', { size: 15 });
    s.sym((Cc[0] + g.s2[0]) / 2, botY + 20, '<i>r</i><sub>2</sub> = <i>d</i>/3', { size: 15 });
    body(s, g.s1, rm, { w: 2.2 });
    body(s, g.s2, g.rM, { w: 2.2 });
    force(s, [g.s1[0], g.s1[1] + rm], g.v1);
    force(s, [g.s2[0], g.s2[1] - g.rM], g.v2);
    crossMark(s, Cc, 7, { color: C.mari, w: 2.8 });
    s.sym(Cc[0], Cc[1] - 16, '<i>C</i>', { size: 17 });
    s.sym(g.s1[0] - rm - 8, g.s1[1] + 6, '<i>m</i>', { size: 17, anchor: 'end' });
    s.sym(g.s2[0] + g.rM + 6, g.s2[1] + 26, '2<i>m</i>', { size: 17, anchor: 'start' });
    s.sym(g.s1[0] - 10, g.s1[1] + rm + g.v1[1] / 2 + 6, '<i>v</i><sub>1</sub>', { size: 16, anchor: 'end' });
    s.sym(g.s2[0] + 10, g.s2[1] - g.rM + g.v2[1] / 2 + 6, '<i>v</i><sub>2</sub>', { size: 16, anchor: 'start' });
    const res = resultBlock(s, ['<i>ω</i> = √(3<i>Gm</i>/<i>d</i><sup>3</sup>),  <i>v</i><sub>1</sub> = <i>ωr</i><sub>1</sub> = 2<i>v</i><sub>2</sub>', '(so <i>mv</i><sub>1</sub> = 2<i>mv</i><sub>2</sub>)'], { size: 14 });
    s.place(
      [
        { t: 'Centre of mass', p: Cc, own: Cc, hi: true, at: [[Cc[0] + 20, Cc[1] + 36, 'start'], [Cc[0] + 24, Cc[1] + 48, 'start']] },
        // above the outer orbit and well across their guides, not ending on a line
        { t: 'Orbit of m', p: add(Cc, dir(135), g.r1), at: [[22, 41, 'start'], [22, 50, 'start']] },
        { t: 'Orbit of 2m', p: add(Cc, dir(60), g.r2), at: [[W - 16, 41, 'end'], [W - 16, 60, 'end']] },
      ],
      [res]
    );
    return s;
  },
  check() {
    const { C: Cc, d, w } = F713, g = geo713();
    const m = 1, Gc = 1, D = 1, om = Math.sqrt((Gc * 3 * m) / D ** 3), r1m = (2 * D) / 3, r2m = D / 3;
    const Fg = (Gc * m * 2 * m) / (D * D);
    return [
      [`The stars are d apart (${fmt(len(sub(g.s2, g.s1)))} px) on opposite sides of C`, close(len(sub(g.s2, g.s1)), d) && g.s1[0] < Cc[0] && g.s2[0] > Cc[0]],
      [`C is the centre of mass: m·r₁ = 2m·r₂ (${fmt(g.r1)} = ${fmt(2 * g.r2)})`, close(1 * g.r1, 2 * g.r2)],
      [`r₁ = 2d/3 and r₂ = d/3 (${fmt(g.r1 / d, 4)} d, ${fmt(g.r2 / d, 4)} d): the lighter star on the bigger circle`, close(g.r1, (2 * d) / 3) && close(g.r2, d / 3) && g.r1 > g.r2],
      ['Each velocity is perpendicular to its radius, and both stars turn the same way about C (anticlockwise)', close(dotp(g.v1, sub(g.s1, Cc)), 0) && close(dotp(g.v2, sub(g.s2, Cc)), 0) && crossZ(sub(g.s1, Cc), g.v1) > 0 && crossZ(sub(g.s2, Cc), g.v2) > 0],
      [`One ω for both: v₁/r₁ = v₂/r₂ = ${w}, so v₁ = 2v₂ (${fmt(len(g.v1))} and ${fmt(len(g.v2))} px)`, close(len(g.v1) / g.r1, len(g.v2) / g.r2) && close(len(g.v1), 2 * len(g.v2))],
      ['Total momentum is zero: m v₁ + 2m v₂ = 0 (drawn)', close(1 * g.v1[1] + 2 * g.v2[1], 0)],
      [`Gravity supplies each star's centripetal force with ω² = 3Gm/d³: ${fmt(Fg, 6)} = m ω² r₁ = 2m ω² r₂`, close(Fg, m * om * om * r1m, 1e-12) && close(Fg, 2 * m * om * om * r2m, 1e-12)],
    ];
  },
};

/** Chapter order: by topic, then by page. */
export const DIAGRAMS_PHYSICS_11_07: Diagram[] = [fig71, fig72, fig73, fig74, fig75, fig76, fig77, fig78, fig79, fig710, fig711, fig712, fig713];
