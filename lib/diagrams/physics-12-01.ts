import { C, LABEL_GAP, Rect, Sketch, crosses, r1, mathW, near } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * PHYSICS CLASS 12, CHAPTER 1 (Electric Charges and Fields): every drawing of
 * the Master Reference book, redrawn. The chapter's drawings are its thirteen
 * numbered figures, each printed on a "CHAPTER 1 · FIGURES" page (1.1 on p. 19,
 * 1.2 on p. 22, 1.3 on p. 24, 1.4 on p. 30, 1.5 and 1.6 on p. 32, 1.7 on p. 35,
 * 1.8 on p. 41, 1.9 on p. 43, 1.10 and 1.11 on p. 51, 1.12 on p. 53, 1.13 on
 * p. 56; the first copy of each caption sits a page earlier, where the text
 * refers to it). It has no unnumbered drawings: pp. 8–79 were checked page by
 * page, the Supplement (Additional topics A–F, pp. 60–79) included; the rest is
 * prose, typeset equations, boxed answers and tables.
 *
 * Every figure is computed from the physics, never placed by eye: Coulomb
 * forces along ±r̂₂₁ with F₁₂ = −F₂₁; the triangle's two forces adding to √3 F
 * away from the centroid; the rod's ∫kqλ dx/x² = kqQ/(d(d + L)); the dipole's
 * axial fields in the ratio ((r + a)/(r − a))² and its equatorial fields equal,
 * their vertical parts cancelling; the couple's arm 2a sin θ; the ring's and
 * disc's fields summed element by element against kQx/(x² + R²)^(3/2) and
 * σ/(2ε₀)(1 − x/√(x² + R²)); the arc's elements summed to 2kλ/R; and the Gauss
 * figures' fields checked against Coulomb integrals of a long line, a wide
 * sheet and a shell. Each `check` reads the drawn geometry back, recomputes what
 * the figure and its caption state, and measures that no label or tag touches a
 * line it does not name.
 */

const W = 340;
type P = [number, number];
const D2R = Math.PI / 180;
/** The book's constants: k = 9 × 10⁹ N m² C⁻², ε₀ = 8.85 × 10⁻¹² C² N⁻¹ m⁻². */
const K = 9e9;
const EPS0 = 8.85e-12;
/** ε₀ consistent with k = 9 × 10⁹, for checks that set Gauss against Coulomb. */
const EPSK = 1 / (4 * Math.PI * K);
const close = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) < tol;
const rel = (a: number, b: number, tol: number) => Math.abs(a - b) <= tol * Math.abs(b);
const fmt = (n: number, d = 2) => String(+n.toFixed(d)).replace('-', '−');
const sci = (n: number, d = 2) => { const e = Math.floor(Math.log10(Math.abs(n))); return `${(n / 10 ** e).toFixed(d)} × 10^${e}`; };
const len = (a: P, b: P) => Math.hypot(b[0] - a[0], b[1] - a[1]);
const add = (a: P, b: P, k = 1): P => [a[0] + k * b[0], a[1] + k * b[1]];
const sub = (a: P, b: P): P => [a[0] - b[0], a[1] - b[1]];
const mul = (a: P, k: number): P => [a[0] * k, a[1] * k];
const mag = (a: P) => Math.hypot(a[0], a[1]);
const unit = (a: P): P => mul(a, 1 / mag(a));
const dotp = (a: P, b: P) => a[0] * b[0] + a[1] * b[1];
const crossz = (a: P, b: P) => a[0] * b[1] - a[1] * b[0];
const mid = (a: P, b: P): P => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
const samples = (a: number, b: number, n = 400) => Array.from({ length: n + 1 }, (_, i) => a + ((b - a) * i) / n);
/** Simpson's rule on [a, b] (n even). */
function simpson(f: (x: number) => number, a: number, b: number, n = 2000) {
  const h = (b - a) / n;
  let s = f(a) + f(b);
  for (let i = 1; i < n; i++) s += f(a + i * h) * (i % 2 ? 4 : 2);
  return (s * h) / 3;
}
/** Are a, b, c on one straight line (to within `tol` px)? */
const collinear = (a: P, b: P, c: P, tol = 1e-6) => Math.abs(crossz(sub(b, a), sub(c, a))) / (len(a, c) || 1) < tol;

/* ---------- drawing helpers (as in physics-11-13.ts) ---------- */
type Stroke = { color?: string; w?: number; dash?: 'dash' | 'dot'; free?: boolean };
const dashOf = (d?: Stroke['dash']) => (d === 'dash' ? ' stroke-dasharray="6 4"' : d === 'dot' ? ' stroke-dasharray="1.5 3.5"' : '');

/**
 * Every line a label must keep clear of (outlines, curves, arrows), by sketch:
 * `clearance` measures each tag and label against them. Axes and the dotted
 * guides that run between marks are left out (`free`).
 */
const LINES = new WeakMap<Sketch, P[][]>();
const keep = (s: Sketch, pts: P[]) => { const l = LINES.get(s) ?? []; l.push(pts); LINES.set(s, l); };
/** An open line through points: ink, rounded joins. */
function path(s: Sketch, pts: P[], o: Stroke = {}) {
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ');
  s.add(`<path d="${d}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}" stroke-linejoin="round" stroke-linecap="round"${dashOf(o.dash)}/>`);
  if (!o.free) keep(s, pts);
}
/** An arrow (a force, a field, a vector) that labels keep clear of. */
function arrow(s: Sketch, a: P, b: P, o: { color?: string; w?: number; dash?: boolean } = {}) {
  s.vec(a[0], a[1], b[0], b[1], o);
  keep(s, [a, b]);
}
/** A measured length with an arrowhead at each end. */
function measure(s: Sketch, a: P, b: P, color: string = C.slate) {
  const m = mid(a, b);
  arrow(s, m, a, { color, w: 1.3 });
  arrow(s, m, b, { color, w: 1.3 });
}
/**
 * A dotted guide, free of the clearance check (it only joins marks), but
 * never through a label or a tag: its dots ran straight through "ring width
 * dr" in Figure 1.8 (Android review, 2026-10-22). See `guideCheck`.
 */
const GUIDES = new WeakMap<Sketch, [P, P][]>();
const guide = (s: Sketch, a: P, b: P) => {
  GUIDES.set(s, [...(GUIDES.get(s) ?? []), [a, b]]);
  path(s, [a, b], { color: C.slate, w: 1, dash: 'dot', free: true });
};
/** Points on an ellipse round c (semi-axes rx, ry), parameter from t0 to t1 (radians, y down). */
const ellPts = (c: P, rx: number, ry: number, t0: number, t1: number, n = 120): P[] => samples(t0, t1, n).map((t): P => [c[0] + rx * Math.cos(t), c[1] + ry * Math.sin(t)]);
/** A circle as a kept polyline (never filled). */
const ring = (s: Sketch, c: P, R: number, o: Stroke = {}) => path(s, ellPts(c, R, R, 0, 2 * Math.PI, 180), o);
/** An angle mark: an arc of radius r round c from a0 to a1 (radians, y down). */
const angleArc = (s: Sketch, c: P, r: number, a0: number, a1: number) => path(s, ellPts(c, r, r, a0, a1, 24), { w: 1.2, color: C.slate });
/**
 * A point charge: a ring just big enough to hold its sign and name 4 px clear,
 * registered as a point (tags keep off it) and kept (labels keep off it).
 */
function charge(s: Sketch, c: P, r: number, html: string, o: { size?: number; color?: string } = {}) {
  const size = o.size ?? 13;
  s.point(c[0], c[1], r, '');
  ring(s, c, r, { w: 1.8, color: o.color ?? C.ink });
  s.sym(c[0], c[1] + size * 0.3, html, { size });
}
/** A small circled sign on a charged line, sheet or shell (white inside, so the line it sits on does not run through it). */
function sign(s: Sketch, c: P, plus: boolean, r = 5.5) {
  s.add(`<circle cx="${r1(c[0])}" cy="${r1(c[1])}" r="${r}" fill="#fff" stroke="${C.ink}" stroke-width="1.2"/>`);
  s.add(`<line x1="${r1(c[0] - r + 2)}" y1="${r1(c[1])}" x2="${r1(c[0] + r - 2)}" y2="${r1(c[1])}" stroke="${C.ink}" stroke-width="1.3"/>`);
  if (plus) s.add(`<line x1="${r1(c[0])}" y1="${r1(c[1] - r + 2)}" x2="${r1(c[0])}" y2="${r1(c[1] + r - 2)}" stroke="${C.ink}" stroke-width="1.3"/>`);
  keep(s, ellPts(c, r, r, 0, 2 * Math.PI, 24));
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
/**
 * The labels and tags a dotted guide runs through: more than GUIDE_INSET px
 * into the box, which is the half-em-a-character estimate of the text and so
 * a little wider than the words on the phone (a guide that only grazes an
 * estimated end, as fig 1.7's does past "dE⃗ (from top dq)", is clear on device).
 */
const GUIDE_INSET = 4;
const guideHits = (s: Sketch): string[] => {
  const boxes: [string, Rect][] = [...s.tags.map((t): [string, Rect] => [t.name, t.rect]), ...s.labels.map((l): [string, Rect] => [l.text, l.rect])];
  return [...new Set((GUIDES.get(s) ?? []).flatMap(([a, b]) => boxes.filter(([, r]) => crosses(a, b, r, GUIDE_INSET)).map(([name]) => name)))];
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

/* ===================================================================== */
/* Figure 1.1 · position vectors, separation vector, forces (topic 02)    */
/* ===================================================================== */
type Case11 = { chip: string; cap: string; like: boolean };
const CAP11 = 'Position vectors <i>r</i><sub>1</sub>, <i>r</i><sub>2</sub> of charges <i>q</i><sub>1</sub> and <i>q</i><sub>2</sub> from the origin <i>O</i>, with the separation vector <i>r</i><sub>21</sub> (from <i>q</i><sub>1</sub> to <i>q</i><sub>2</sub>) and a unit vector along it.';
/** O, the two charges (ring radius rc), the r⃗₂₁ arrow's height, the unit vector's height and length, a force's length (px). */
const F11 = { O: [34, 200] as P, q1: [108, 112] as P, q2: [250, 112] as P, rc: 16, yR: 66, yU: 24, U: 44, F: 46 };
const g11 = (like: boolean) => {
  const { O, q1, q2, rc, F, yR, yU, U } = F11;
  const r21 = sub(q2, q1), rhat = unit(r21);
  /** F⃗₂₁ (on q₂) is along +r̂₂₁ when q₁q₂ > 0 and along −r̂₂₁ when q₁q₂ < 0. */
  const dir21 = mul(rhat, like ? 1 : -1), dir12 = mul(dir21, -1);
  return {
    r21, rhat, dir21, dir12,
    f21: [add(q2, dir21, rc), add(q2, dir21, rc + F)] as [P, P],
    f12: [add(q1, dir12, rc), add(q1, dir12, rc + F)] as [P, P],
    e1: add(q1, unit(sub(q1, O)), -rc), e2: add(q2, unit(sub(q2, O)), -rc),
    sep: [[q1[0], yR], [q2[0], yR]] as [P, P],
    uv: [[q1[0], yU], [q1[0] + U, yU]] as [P, P],
  };
};
const fig11: Diagram = {
  id: 'p12-01-fig-1.1',
  topic: 1,
  name: 'Forces between two charges',
  cases: [
    { chip: 'Like charges', like: true, cap: `${CAP11} (a) Like charges: the forces are repulsive.` },
    { chip: 'Unlike charges', like: false, cap: `${CAP11} (b) Unlike charges: the forces are attractive.` },
  ] as Case11[],
  draw(c: Case11) {
    const s = new Sketch(W, 244);
    const { O, q1, q2, rc } = F11, g = g11(c.like);
    // position vectors from O to the charges
    arrow(s, O, g.e1, { color: C.slate, w: 1.5, dash: true });
    arrow(s, O, g.e2, { color: C.slate, w: 1.5, dash: true });
    s.dot(O[0], O[1], 3);
    s.sym(O[0] - 6, O[1] + 20, '<i>O</i>', { size: 15 });
    const m1 = mid(O, q1), m2 = mid(O, q2);
    s.sym(m1[0] - 10, m1[1] + 2, '<i>r⃗</i><sub>1</sub>', { size: 15, anchor: 'end', color: C.slate });
    s.sym(m2[0] + 14, m2[1] + 24, '<i>r⃗</i><sub>2</sub>', { size: 15, color: C.slate });
    // the charges
    charge(s, q1, rc, '+<i>q</i><sub>1</sub>');
    charge(s, q2, rc, c.like ? '+<i>q</i><sub>2</sub>' : '−<i>q</i><sub>2</sub>');
    // the separation vector, from q₁ to q₂, and the unit vector along it
    guide(s, [q1[0], q1[1] - rc - 3], [q1[0], F11.yR + 3]);
    guide(s, [q2[0], q2[1] - rc - 3], [q2[0], F11.yR + 3]);
    arrow(s, g.sep[0], g.sep[1], { color: C.mari, w: 2.4 });
    s.sym((q1[0] + q2[0]) / 2 - 16, F11.yR - 10, '<i>r⃗</i><sub>21</sub> (from <i>q</i><sub>1</sub> to <i>q</i><sub>2</sub>)', { size: 14, color: C.amber });
    arrow(s, g.uv[0], g.uv[1], { w: 1.8 });
    s.sym(g.uv[1][0] + 8, F11.yU + 5, '<i>r̂</i><sub>21</sub>', { size: 15, anchor: 'start' });
    // the forces: F⃗₁₂ on q₁, F⃗₂₁ on q₂
    arrow(s, g.f12[0], g.f12[1], { w: 2.2 });
    arrow(s, g.f21[0], g.f21[1], { w: 2.2 });
    const l12 = mid(g.f12[0], g.f12[1]), l21 = mid(g.f21[0], g.f21[1]);
    s.sym(l12[0], q1[1] - 13, '<i>F⃗</i><sub>12</sub>', { size: 15 });
    s.sym(l21[0], q2[1] - 13, '<i>F⃗</i><sub>21</sub>', { size: 15 });
    s.place([
      { t: 'Separation vector', hi: true, p: [q2[0] - 2, F11.yR], at: [[W - 6, 14, 'end'], [W - 6, 10, 'end']] },
      { t: 'Origin', p: O, own: O, at: [[O[0] + 22, 208, 'start'], [O[0] + 22, 212, 'start']] },
    ]);
    s.result(c.like ? 'Repulsion' : 'Attraction');
    return s;
  },
  check(c: Case11) {
    const { O, q1, q2, rc, U } = F11, g = g11(c.like);
    const sep = sub(g.sep[1], g.sep[0]), uv = sub(g.uv[1], g.uv[0]);
    const f21 = sub(g.f21[1], g.f21[0]), f12 = sub(g.f12[1], g.f12[0]);
    // the book's numbers: like, practice question 1 (two +2 µC, 10 cm); unlike, worked example 1 (+4 µC, −6 µC, 30 cm)
    const ex = c.like ? { a: 2e-6, b: 2e-6, r: 0.1, F: 3.6 } : { a: 4e-6, b: -6e-6, r: 0.3, F: 2.4 };
    const Fv = (K * ex.a * ex.b) / ex.r ** 2;
    return [
      ['The dashed position vectors r⃗₁ and r⃗₂ run from O straight at the centres of q₁ and q₂', collinear(O, g.e1, q1) && collinear(O, g.e2, q2) && close(len(g.e1, q1), rc) && close(len(g.e2, q2), rc)],
      ['The separation vector is r⃗₂₁ = r⃗₂ − r⃗₁: it is drawn from above q₁ to above q₂, the same length and direction', close(sep[0], g.r21[0]) && close(sep[1], g.r21[1])],
      [`The unit vector r̂₂₁ points along r⃗₂₁, and is the same ${U} px in both panels`, close(dotp(unit(uv), g.rhat), 1, 1e-12) && close(mag(uv), U)],
      [c.like ? 'Like charges (q₁q₂ > 0): F⃗₂₁ = kq₁q₂/r² r̂₂₁ points along +r̂₂₁, away from q₁: repulsion' : 'Unlike charges (q₁q₂ < 0): F⃗₂₁ = kq₁q₂/r² r̂₂₁ points along −r̂₂₁, toward q₁: attraction', close(dotp(unit(f21), g.rhat), c.like ? 1 : -1, 1e-12)],
      ['F⃗₁₂ = −F⃗₂₁ (Newton’s third law): equal lengths, opposite directions, both along the line joining the charges', close(f12[0], -f21[0]) && close(f12[1], -f21[1]) && close(crossz(f21, g.r21), 0)],
      [c.like ? `Practice 1: two +2 µC charges 10 cm apart: F = kq₁q₂/r² = ${fmt(Fv, 2)} N, repulsive (q₁q₂ > 0)` : `Worked example 1: +4 µC and −6 µC 30 cm apart: F = k|q₁q₂|/r² = ${fmt(Math.abs(Fv), 2)} N, attractive (q₁q₂ < 0)`, close(Math.abs(Fv), ex.F, 1e-9) && (Fv > 0) === c.like],
      clearCheck(fig11.draw(c)),
    ];
  },
};

/* ===================================================================== */
/* Figure 1.2 · three equal charges on an equilateral triangle (topic 02)  */
/* ===================================================================== */
/** Side a (px), the centroid G, a force's length F (px), the charge rings. */
const T12 = { a: 150, G: [150, 272] as P, F: 80, rc: 15, r0: 14 };
const g12 = () => {
  const { a, G, F } = T12, d = a / Math.sqrt(3);
  const A: P = [G[0], G[1] - d], B: P = [G[0] - a / 2, G[1] + d / 2], Cc: P = [G[0] + a / 2, G[1] + d / 2];
  const uAB = unit(sub(A, B)), uAC = unit(sub(A, Cc));
  const tAB = add(A, uAB, F), tAC = add(A, uAC, F), net = add(add(A, uAB, F), uAC, F);
  return { d, A, B, Cc, uAB, uAC, tAB, tAC, net };
};
const fig12: Diagram = {
  id: 'p12-01-fig-1.2',
  topic: 1,
  name: 'Three charges on a triangle',
  cases: [{ chip: 'Forces on A', cap: 'Three equal charges <i>Q</i> at the vertices of an equilateral triangle. The forces <i>F</i><sub>AB</sub> and <i>F</i><sub>AC</sub> on charge A add to a resultant of magnitude √3 <i>F</i>, directed away from the centroid, where the charge <i>q</i><sub>0</sub> is placed.' }],
  draw() {
    const s = new Sketch(W, 446);
    const { G, rc, r0 } = T12, g = g12();
    const { A, B, Cc } = g;
    // the sides, dashed, between the rings
    const side = (p: P, q: P) => { const u = unit(sub(q, p)); path(s, [add(p, u, rc + 3), add(q, u, -rc - 3)], { color: C.slate, w: 1.5, dash: 'dash' }); };
    side(A, B); side(B, Cc); side(Cc, A);
    // centroid to the vertices, dotted
    [A, B, Cc].forEach((v) => { const u = unit(sub(v, G)); guide(s, add(G, u, r0 + 2), add(v, u, -rc - 2)); });
    s.sym(G[0] - 9, G[1] - 28, '<i>d</i>', { size: 15, anchor: 'end', color: C.slate });
    // the forces on A, the parallelogram, the resultant
    guide(s, g.tAB, g.net);
    guide(s, g.tAC, g.net);
    arrow(s, add(A, g.uAB, rc), g.tAB, { w: 2.2 });
    arrow(s, add(A, g.uAC, rc), g.tAC, { w: 2.2 });
    arrow(s, [A[0], A[1] - rc], g.net, { color: C.mari, w: 2.8 });
    s.sym(g.tAB[0] + 8, g.tAB[1] + 4, '<i>F⃗</i><sub>AB</sub>', { size: 15, anchor: 'start' });
    s.sym(g.tAC[0] - 8, g.tAC[1] + 4, '<i>F⃗</i><sub>AC</sub>', { size: 15, anchor: 'end' });
    s.sym(g.net[0], g.net[1] - 9, '<i>F⃗</i><sub>net</sub>', { size: 15, color: C.amber });
    // the charges
    charge(s, A, rc, '<i>Q</i>', { size: 15 });
    charge(s, B, rc, '<i>Q</i>', { size: 15 });
    charge(s, Cc, rc, '<i>Q</i>', { size: 15 });
    charge(s, G, r0, '<i>q</i><sub>0</sub>');
    s.sym(A[0] - rc - 8, A[1] + 5, 'A', { size: 15, anchor: 'end', color: C.slate });
    s.sym(B[0], B[1] + rc + 18, 'B', { size: 15, color: C.slate });
    s.sym(Cc[0], Cc[1] + rc + 18, 'C', { size: 15, color: C.slate });
    s.sym(14, 376, '<i>d</i> = <i>a</i>/√3 (vertex to centroid); each side = <i>a</i>', { size: 13.5, anchor: 'start', color: C.slate });
    const res = resultBlock(s, ['<i>F</i><sub>net</sub> = √3 <i>F</i>', '(away from centroid)'], { size: 14 });
    s.place([
      { t: 'Resultant', hi: true, p: [g.net[0], (g.net[1] + A[1]) / 2 - 10], at: [[W - 8, 70, 'end'], [W - 8, 64, 'end']] },
      { t: 'Centroid', p: add(G, [1, 0], r0), own: G, at: [[W - 8, 250, 'end'], [W - 8, 256, 'end']] },
    ], [res]);
    return s;
  },
  check() {
    const { a, G, F } = T12, g = g12();
    const { A, B, Cc } = g;
    const fAB = sub(g.tAB, A), fAC = sub(g.tAC, A), net = sub(g.net, A);
    const ang = Math.acos(dotp(unit(fAB), unit(fAC))) / D2R;
    // worked example 3: Q = 2 µC, a = 10 cm
    const Q = 2e-6, aa = 0.1, Fx = (K * Q * Q) / aa ** 2, Fnet = Math.sqrt(3) * Fx, q0 = Q / Math.sqrt(3);
    const pull = (K * q0 * Q) / (aa / Math.sqrt(3)) ** 2;
    return [
      [`An equilateral triangle: all three sides ${fmt(len(A, B), 3)} px = a`, close(len(A, B), a, 1e-9) && close(len(B, Cc), a, 1e-9) && close(len(Cc, A), a, 1e-9)],
      [`q₀ sits at the centroid, d = a/√3 = ${fmt(a / Math.sqrt(3), 2)} px from each vertex`, [A, B, Cc].every((v) => close(len(v, G), a / Math.sqrt(3), 1e-9))],
      ['Like charges repel: F⃗_AB points along B→A and F⃗_AC along C→A, away from the charges that push', close(dotp(unit(fAB), unit(sub(A, B))), 1, 1e-12) && close(dotp(unit(fAC), unit(sub(A, Cc))), 1, 1e-12)],
      [`The two forces are equal (${F} px each, since the charges and distances are equal) and ${fmt(ang, 1)}° apart`, close(mag(fAB), F, 1e-9) && close(mag(fAC), F, 1e-9) && close(ang, 60, 1e-9)],
      [`The resultant closes the dotted parallelogram and is 2F cos 30° = √3 F = ${fmt(mag(net), 2)} px`, close(mag(net), Math.sqrt(3) * F, 1e-9)],
      ['It points along G→A, directed away from the centroid', close(dotp(unit(net), unit(sub(A, G))), 1, 1e-12)],
      [`Worked example 3 (Q = 2 µC, a = 10 cm): F = kQ²/a² = ${fmt(Fx, 2)} N, F_net = √3 F = ${fmt(Fnet, 2)} N (the book's 6.24 N)`, close(Fx, 3.6, 1e-9) && fmt(Fnet, 2) === '6.24'],
      [`For equilibrium q₀ must pull A inward with √3 F: kq₀Q/d² = √3 kQ²/a² gives |q₀| = Q/√3 = ${fmt(q0 * 1e6, 2)} µC (negative), the book's 1.15 µC`, rel(pull, Fnet, 1e-12) && fmt(q0 * 1e6, 2) === '1.15'],
      clearCheck(fig12.draw(fig12.cases[0])),
    ];
  },
};

/* ===================================================================== */
/* Figure 1.3 · uniformly charged rod and a point charge (topic 02)        */
/* ===================================================================== */
/**
 * Drawn to scale with the numerical illustration of worked example 4: d = 0.10 m,
 * L = 0.30 m (600 px per metre); the element dx sits at x = d + 0.85L.
 */
const R13 = { k: 600, d: 0.1, L: 0.3, q: [66, 96] as P, rc: 14, h: 18, el: 0.85, dx: 12, F: 34, q1: 1e-6, Q: 5e-6 };
const g13 = () => {
  const { k, d, L, q, el } = R13;
  const x0 = q[0] + d * k, x1 = x0 + L * k, xe = x0 + el * L * k;
  return { x0, x1, xe };
};
/** The rod's + signs, every 24 px, kept off the element, and one between the element and the far end, as the book prints them on both sides. */
const pluses13 = () => {
  const { dx } = R13, g = g13(), xs: number[] = [];
  for (let x = g.x0 + 14; x < g.x1 - 6; x += 24) if (Math.abs(x - g.xe) >= dx) xs.push(x);
  if (!xs.some((x) => x > g.xe)) xs.push((g.xe + dx / 2 + g.x1) / 2);
  return xs;
};
const fig13: Diagram = {
  id: 'p12-01-fig-1.3',
  topic: 1,
  name: 'Charged rod and a point charge',
  cases: [{ chip: 'Rod and charge', cap: 'Uniformly charged rod (charge <i>Q</i>, length <i>L</i>) with a point charge <i>q</i> on its axis, at distance <i>d</i> from the near end. The element d<i>q</i> = <i>λ</i> d<i>x</i> at distance <i>x</i> from <i>q</i> exerts the force d<i>F</i> on <i>q</i>.' }],
  draw() {
    const s = new Sketch(W, 244);
    const { q, rc, h, dx, F } = R13, g = g13(), y = q[1];
    // the rod, its charges, the element
    path(s, [[g.x0, y - h / 2], [g.x1, y - h / 2], [g.x1, y + h / 2], [g.x0, y + h / 2], [g.x0, y - h / 2]], { w: 1.8 });
    for (const x of pluses13()) s.add(`<path d="M${r1(x - 3.5)} ${y} H${r1(x + 3.5)} M${r1(x)} ${y - 3.5} V${y + 3.5}" stroke="${C.ink}" stroke-width="1.3"/>`);
    path(s, [[g.xe - dx / 2, y - h / 2], [g.xe + dx / 2, y - h / 2], [g.xe + dx / 2, y + h / 2], [g.xe - dx / 2, y + h / 2], [g.xe - dx / 2, y - h / 2]], { color: C.mari, w: 2.4 });
    s.sym(112, y - h / 2 - 17, 'rod: uniform charge +<i>Q</i>', { size: 14, anchor: 'start' });
    // the point charge and the force on it (away from the rod, for q > 0)
    charge(s, q, rc, '+<i>q</i>');
    arrow(s, [q[0] - rc, y], [q[0] - rc - F, y], { w: 2.2 });
    s.sym(q[0] - 6, y - rc - 10, 'd<i>F⃗</i> on <i>q</i>', { size: 14 });
    s.sym(q[0] - 2, y + rc + 16, '(shown for <i>q</i> > 0)', { size: 12, color: C.slate });
    // d, x and L
    const yd = 150, yx = 182, yL = 214;
    guide(s, [q[0], y + rc + 22], [q[0], yx + 4]);
    guide(s, [g.x0, y + h / 2 + 2], [g.x0, yL + 4]);
    guide(s, [g.xe, y + h / 2 + 2], [g.xe, yx + 4]);
    guide(s, [g.x1, y + h / 2 + 2], [g.x1, yL + 4]);
    measure(s, [q[0] + 1, yd], [g.x0 - 1, yd]);
    measure(s, [q[0] + 1, yx], [g.xe - 1, yx]);
    measure(s, [g.x0 + 1, yL], [g.x1 - 1, yL]);
    s.sym((q[0] + g.x0) / 2, yd - 8, '<i>d</i>', { size: 15 });
    s.sym((q[0] + g.xe) / 2, yx - 8, '<i>x</i>', { size: 15 });
    s.sym((g.x0 + g.x1) / 2, yL + 18, '<i>L</i>', { size: 15 });
    s.place([
      { t: 'Element', hi: true, p: [g.xe, y - h / 2], at: [[W - 8, 18, 'end'], [W - 8, 14, 'end']] },
    ]);
    const tg = s.tags.find((t) => t.name === 'Element');
    if (tg) s.sym(tg.rect[0] - 8, tg.rect[1] + 16, 'd<i>q</i> = <i>λ</i> d<i>x</i>', { size: 15, anchor: 'end', color: C.amber });
    return s;
  },
  check() {
    const { k, d, L, q, el, q1, Q, dx } = R13, g = g13();
    const lam = Q / L, xs = (g.xe - q[0]) / k, pl = pluses13();
    const left = pl.filter((x) => x < g.xe).length, right = pl.filter((x) => x > g.xe).length;
    const Fint = simpson((x) => (K * q1 * lam) / x ** 2, d, d + L);
    const Fclosed = (K * q1 * Q) / (d * (d + L));
    const Lsmall = 1e-6, Fpoint = simpson((x) => (K * q1 * (Q / Lsmall)) / x ** 2, d, d + Lsmall, 20);
    return [
      [`To scale (${k} px per m): d = ${fmt((g.x0 - q[0]) / k, 3)} m and L = ${fmt((g.x1 - g.x0) / k, 3)} m, worked example 4's numbers`, close((g.x0 - q[0]) / k, d, 1e-12) && close((g.x1 - g.x0) / k, L, 1e-12)],
      [`The element lies on the rod, at x = ${fmt(xs, 3)} m from q, between d and d + L`, xs > d && xs < d + L && close(xs, d + el * L, 1e-12)],
      [`The rod is charged on both sides of the element (${left} + signs before it, ${right} after), and every + sits inside the rod, clear of the element`, left > 0 && right > 0 && pl.every((x) => Math.abs(x - g.xe) - dx / 2 - 3.5 >= 2 && x - 3.5 > g.x0 && x + 3.5 < g.x1)],
      [`Summing dF = kqλ dx/x² from x = d to d + L gives ${fmt(Fint, 4)} N = kqQ/(d(d + L)) = ${fmt(Fclosed, 4)} N (q = 1 µC, Q = 5 µC: the book's 1.125 N)`, rel(Fint, Fclosed, 1e-9) && close(Fclosed, 1.125, 1e-9)],
      [`Limiting check: as L → 0 the rod is a point charge and F → kqQ/d² (${fmt(Fpoint, 3)} N = ${fmt((K * q1 * Q) / d ** 2, 3)} N)`, rel(Fpoint, (K * q1 * Q) / d ** 2, 1e-4)],
      ['For q > 0 (and Q > 0) every dF⃗ on q points away from the rod: the arrow points left, from q away from the near end', g.x0 > q[0]],
      clearCheck(fig13.draw(fig13.cases[0])),
    ];
  },
};

/* ===================================================================== */
/* Figure 1.4 · the dipole's axial line (topic 03)                         */
/* ===================================================================== */
/** O, half-separation a and distance r (px), the +q field's length at P, the rings. */
const D14 = { O: [82, 104] as P, a: 36, r: 126, Ep: 96, rc: 15, yp: 54 };
const g14 = () => {
  const { O, a, r, Ep } = D14;
  const A: P = [O[0] - a, O[1]], B: P = [O[0] + a, O[1]], Pp: P = [O[0] + r, O[1]];
  /** E ∝ 1/distance²: E₊ from +q at r − a, E₋ from −q at r + a. */
  const Em = Ep * ((r - a) / (r + a)) ** 2;
  return { A, B, Pp, Em, tipP: [Pp[0] + Ep, Pp[1]] as P, tipM: [Pp[0] - Em, Pp[1]] as P };
};
const fig14: Diagram = {
  id: 'p12-01-fig-1.4',
  topic: 2,
  name: 'Dipole: field on the axial line',
  cases: [{ chip: 'Axial line', cap: 'Axial line of a dipole: −<i>q</i> at A, +<i>q</i> at B, centre O. At <i>P</i>, at distance <i>r</i> from O, the field <i>E</i><sub>+</sub> of +<i>q</i> points away from +<i>q</i> and the field <i>E</i><sub>−</sub> of −<i>q</i> points toward −<i>q</i>; the dipole moment <i>p</i> points from −<i>q</i> to +<i>q</i>.' }],
  draw() {
    const s = new Sketch(W, 282);
    const { O, a, rc, yp } = D14, g = g14(), y = O[1];
    // the axis, dashed, between the rings
    path(s, [[14, y], [g.A[0] - rc - 3, y]], { color: C.grey, w: 1.2, dash: 'dash', free: true });
    path(s, [[g.A[0] + rc + 3, y], [g.B[0] - rc - 3, y]], { color: C.grey, w: 1.2, dash: 'dash', free: true });
    path(s, [[g.B[0] + rc + 3, y], [W - 6, y]], { color: C.grey, w: 1.2, dash: 'dash', free: true });
    charge(s, g.A, rc, '−<i>q</i>', { size: 14 });
    charge(s, g.B, rc, '+<i>q</i>', { size: 14 });
    s.dot(O[0], y, 3);
    s.sym(g.A[0], y - rc - 9, 'A', { size: 15, color: C.slate });
    s.sym(O[0], y - rc - 9, 'O', { size: 15, color: C.slate });
    s.sym(g.B[0], y - rc - 9, 'B', { size: 15, color: C.slate });
    // the dipole moment, from −q to +q
    arrow(s, [g.A[0], yp], [g.B[0], yp], { color: C.mari, w: 2.6 });
    s.sym(14, yp - 18, '<i>p⃗</i> = <i>q</i>(2<i>a</i>), from −<i>q</i> to +<i>q</i>', { size: 14, anchor: 'start', color: C.amber });
    // the two fields at P
    arrow(s, g.Pp, g.tipP, { w: 2.4 });
    arrow(s, g.Pp, g.tipM, { color: C.slate, w: 2.4 });
    s.dot(g.Pp[0], y, 3.6);
    s.sym(g.Pp[0], y - 14, '<i>P</i>', { size: 15 });
    s.sym((g.Pp[0] + g.tipP[0]) / 2 + 8, y - 12, '<i>E⃗</i><sub>+</sub>', { size: 15 });
    s.sym(g.tipM[0] - 2, y + 26, '<i>E⃗</i><sub>−</sub>', { size: 15, color: C.slate });
    // a, a, r − a, r, r + a
    const rows = [146, 178, 210, 242];
    guide(s, [g.A[0], y + rc + 3], [g.A[0], rows[3] + 6]);
    guide(s, [O[0], y + 6], [O[0], rows[2] + 6]);
    guide(s, [g.B[0], y + rc + 3], [g.B[0], rows[1] + 6]);
    guide(s, [g.Pp[0], y + 6], [g.Pp[0], rows[3] + 6]);
    measure(s, [g.A[0] + 1, rows[0]], [O[0] - 1, rows[0]]);
    measure(s, [O[0] + 1, rows[0]], [g.B[0] - 1, rows[0]]);
    measure(s, [g.B[0] + 1, rows[1]], [g.Pp[0] - 1, rows[1]]);
    measure(s, [O[0] + 1, rows[2]], [g.Pp[0] - 1, rows[2]]);
    measure(s, [g.A[0] + 1, rows[3]], [g.Pp[0] - 1, rows[3]]);
    s.sym((g.A[0] + O[0]) / 2, rows[0] + 18, '<i>a</i>', { size: 15 });
    s.sym((O[0] + g.B[0]) / 2, rows[0] + 18, '<i>a</i>', { size: 15 });
    s.sym((g.B[0] + g.Pp[0]) / 2, rows[1] + 18, '<i>r</i> − <i>a</i>', { size: 15 });
    s.sym((O[0] + g.Pp[0]) / 2, rows[2] + 18, '<i>r</i>', { size: 15 });
    s.sym((g.A[0] + g.Pp[0]) / 2, rows[3] + 18, '<i>r</i> + <i>a</i>', { size: 15 });
    void a;
    s.place([
      { t: 'Dipole moment', hi: true, p: [g.B[0] - 6, yp], at: [[W - 8, yp - 11, 'end'], [W - 8, yp - 6, 'end']] },
      { t: 'Axial line', p: [W - 20, y], at: [[W - 8, 150, 'end'], [W - 8, 160, 'end']] },
    ]);
    return s;
  },
  check() {
    const { O, a, r, Ep } = D14, g = g14();
    const Eplus = sub(g.tipP, g.Pp), Eminus = sub(g.tipM, g.Pp);
    // in units of kq: fields at P
    const ep = 1 / (r - a) ** 2, em = 1 / (r + a) ** 2, net = ep - em, p = 2 * a;
    const far = 100 * a, netFar = 1 / (far - a) ** 2 - 1 / (far + a) ** 2;
    return [
      [`P is on the axis at r = ${fmt(len(O, g.Pp), 1)} px from O; −q and +q are a = ${a} px either side of O`, close(len(O, g.Pp), r) && close(len(O, g.A), a) && close(len(O, g.B), a) && g.Pp[1] === O[1]],
      [`E⃗₊ points away from +q (along +x) and E⃗₋ toward −q (along −x)`, Eplus[0] > 0 && Eminus[0] < 0 && Eplus[1] === 0 && Eminus[1] === 0],
      [`Arrow lengths ∝ 1/distance²: E₊/E₋ = ${fmt(mag(Eplus) / mag(Eminus), 3)} = ((r + a)/(r − a))² = ${fmt(((r + a) / (r - a)) ** 2, 3)}`, close(mag(Eplus) / mag(Eminus), ep / em, 1e-9) && close(mag(Eplus), Ep)],
      [`Net E_axial = kq[1/(r − a)² − 1/(r + a)²] = 2kpr/(r² − a²)², along p⃗ (from −q to +q)`, rel(net, (2 * p * r) / (r * r - a * a) ** 2, 1e-12) && net > 0],
      [`Far away (r = 100a) it tends to 2kp/r³: ${fmt(netFar / ((2 * p) / far ** 3), 5)} of it`, rel(netFar, (2 * p) / far ** 3, 1e-3)],
      ['The marked lengths are a, a, r − a, r and r + a', close(g.B[0] - O[0], a) && close(g.Pp[0] - g.B[0], r - a) && close(g.Pp[0] - g.A[0], r + a)],
      ['The dipole moment arrow runs from −q to +q, 2a long', close(g.B[0] - g.A[0], 2 * a)],
      clearCheck(fig14.draw(fig14.cases[0])),
    ];
  },
};

/* ===================================================================== */
/* Figure 1.5 · the dipole's equatorial line (topic 03)                    */
/* ===================================================================== */
const D15 = { O: [124, 316] as P, a: 52, r: 166, E: 130, rc: 15, yp: 354 };
const g15 = () => {
  const { O, a, r, E } = D15;
  const A: P = [O[0] - a, O[1]], B: P = [O[0] + a, O[1]], Pp: P = [O[0], O[1] - r];
  const uP = unit(sub(Pp, B)), uM = unit(sub(A, Pp));
  const tipP = add(Pp, uP, E), tipM = add(Pp, uM, E), net = add(add(Pp, uP, E), uM, E);
  const cos = a / Math.hypot(r, a);
  return { A, B, Pp, uP, uM, tipP, tipM, net, cos };
};
const fig15: Diagram = {
  id: 'p12-01-fig-1.5',
  topic: 2,
  name: 'Dipole: field on the equatorial line',
  cases: [{ chip: 'Equatorial line', cap: 'Equatorial line of a dipole: <i>P</i> is at distance <i>r</i> from the centre <i>O</i>, and each charge is at distance √(<i>r</i><sup>2</sup> + <i>a</i><sup>2</sup>) from <i>P</i>. The components of <i>E</i><sub>+</sub> and <i>E</i><sub>−</sub> perpendicular to the axis cancel; the components along the axis add, antiparallel to <i>p</i>.' }],
  draw() {
    const s = new Sketch(W, 400);
    const { O, rc, yp } = D15, g = g15();
    const { A, B, Pp } = g;
    // the lines from each charge to P, and r
    guide(s, add(A, unit(sub(Pp, A)), rc + 3), Pp);
    guide(s, add(B, unit(sub(Pp, B)), rc + 3), Pp);
    path(s, [[O[0], O[1] - 5], [Pp[0], Pp[1] + 5]], { color: C.slate, w: 1.2, dash: 'dash' });
    s.sym(O[0] + 8, (O[1] + Pp[1]) / 2 + 30, '<i>r</i>', { size: 15, anchor: 'start', color: C.slate });
    // the two fields, the vertical line their tips share, the sum along the axis
    guide(s, g.tipP, g.tipM);
    arrow(s, Pp, g.tipP, { w: 2.2 });
    arrow(s, Pp, g.tipM, { color: C.slate, w: 2.2 });
    arrow(s, Pp, g.net, { color: C.mari, w: 2.8 });
    const aP = Math.atan2(g.uP[1], g.uP[0]);
    angleArc(s, Pp, 22, aP, Math.PI * -1);
    const bis = (aP - Math.PI) / 2;
    s.sym(Pp[0] + 34 * Math.cos(bis), Pp[1] + 34 * Math.sin(bis) + 5, '<i>θ</i>', { size: 14 });
    s.dot(Pp[0], Pp[1], 3.4);
    s.sym(Pp[0] + 10, Pp[1] + 5, '<i>P</i>', { size: 15, anchor: 'start' });
    s.sym(g.tipP[0] + 4, g.tipP[1] - 8, '<i>E⃗</i><sub>+</sub>', { size: 15, anchor: 'start' });
    s.sym(g.tipM[0] + 10, g.tipM[1] + 12, '<i>E⃗</i><sub>−</sub>', { size: 15, anchor: 'start', color: C.slate });
    s.sym(g.net[0] - 8, Pp[1] + 5, '<i>E⃗</i><sub>eq</sub>', { size: 15, anchor: 'end', color: C.amber });
    s.sym(W - 8, 34, 'vertical parts (<i>E</i> sin <i>θ</i>)', { size: 13, anchor: 'end', color: C.slate });
    s.sym(W - 8, 51, 'cancel (dotted line)', { size: 13, anchor: 'end', color: C.slate });
    // √(r² + a²) along each line
    const lA = add(A, sub(Pp, A), 0.18), lB = add(B, sub(Pp, B), 0.18);
    s.sym(lA[0] - 10, lA[1] + 5, '√(<i>r</i><sup>2</sup> + <i>a</i><sup>2</sup>)', { size: 13, anchor: 'end', color: C.slate });
    s.sym(lB[0] + 10, lB[1] + 5, '√(<i>r</i><sup>2</sup> + <i>a</i><sup>2</sup>)', { size: 13, anchor: 'start', color: C.slate });
    // the charges, O and p⃗
    charge(s, A, rc, '−<i>q</i>', { size: 14 });
    charge(s, B, rc, '+<i>q</i>', { size: 14 });
    s.dot(O[0], O[1], 3);
    s.sym(O[0] + 10, O[1] + 20, '<i>O</i>', { size: 15, anchor: 'start' });
    arrow(s, [O[0] - 28, yp], [O[0] + 28, yp], { w: 2.2 });
    s.sym(O[0] - 38, yp + 5, '<i>p⃗</i>', { size: 15, anchor: 'end' });
    resultBlock(s, ['<i>E⃗</i><sub>eq</sub> = 2<i>E</i> cos <i>θ</i>', '(antiparallel to <i>p⃗</i>)'], { size: 14 });
    return s;
  },
  check() {
    const { O, a, r, E } = D15, g = g15();
    const eP = sub(g.tipP, g.Pp), eM = sub(g.tipM, g.Pp), net = sub(g.net, g.Pp);
    const D = Math.hypot(r, a);
    const th = Math.acos(Math.abs(eP[0]) / E);
    // kq = 1: E at P from each charge, and kp/(r² + a²)^(3/2)
    const Eeq = (2 * a) / D ** 3, far = 100 * a;
    const axialFar = 1 / (far - a) ** 2 - 1 / (far + a) ** 2, eqFar = (2 * a) / Math.hypot(far, a) ** 3;
    return [
      [`P is on the perpendicular bisector, r = ${fmt(len(O, g.Pp), 1)} px from O; each charge is √(r² + a²) = ${fmt(D, 2)} px from P`, close(len(g.A, g.Pp), D, 1e-9) && close(len(g.B, g.Pp), D, 1e-9) && close(g.Pp[0], O[0])],
      ['E⃗₊ points away from +q and E⃗₋ toward −q, equal in length (equal distances)', close(dotp(unit(eP), unit(sub(g.Pp, g.B))), 1, 1e-12) && close(dotp(unit(eM), unit(sub(g.A, g.Pp))), 1, 1e-12) && close(mag(eP), mag(eM), 1e-9)],
      ['Their components perpendicular to the axis cancel: both tips lie on one vertical line, equally above and below P', close(eP[1] + eM[1], 0, 1e-9) && close(g.tipP[0], g.tipM[0], 1e-9)],
      [`θ, each field's angle with the axis, has cos θ = a/√(r² + a²) = ${fmt(g.cos, 4)}`, close(Math.cos(th), g.cos, 1e-9)],
      [`The axial parts add: E_eq = 2E cos θ = ${fmt(mag(net), 2)} px, along −x, antiparallel to p⃗ (−q → +q is +x)`, close(mag(net), 2 * E * g.cos, 1e-9) && net[0] < 0 && close(net[1], 0, 1e-9) && g.B[0] > g.A[0]],
      ['So E_eq = 2·kq/(r² + a²)·a/√(r² + a²) = kp/(r² + a²)^(3/2)', rel(2 * (1 / D ** 2) * (a / D), Eeq, 1e-12)],
      [`At the same large distance (r = 100a) the axial field is ${fmt(axialFar / eqFar, 4)} times the equatorial: E_axial = 2E_eq`, rel(axialFar / eqFar, 2, 1e-3)],
      clearCheck(fig15.draw(fig15.cases[0])),
    ];
  },
};

/* ===================================================================== */
/* Figure 1.6 · a dipole in a uniform field (topic 03)                     */
/* ===================================================================== */
const D16 = { Cc: [140, 158] as P, a: 80, th: 35 * D2R, rc: 15, F: 36, lines: [40, 80, 158, 236, 276], x0: 26, x1: 318, xm: 272 };
const g16 = () => {
  const { Cc, a, th, rc, F } = D16;
  const u: P = [Math.cos(th), -Math.sin(th)]; // along the dipole, toward +q (y down)
  const pq = add(Cc, u, a), mq = add(Cc, u, -a);
  return { u, pq, mq, fP: [add(pq, [1, 0], rc), add(pq, [1, 0], rc + F)] as [P, P], fM: [add(mq, [-1, 0], rc), add(mq, [-1, 0], rc + F)] as [P, P] };
};
const fig16: Diagram = {
  id: 'p12-01-fig-1.6',
  topic: 2,
  name: 'Torque on a dipole',
  cases: [{ chip: 'Dipole in a field', cap: 'Dipole <i>p</i> at angle <i>θ</i> to a uniform field <i>E</i>. The forces +<i>qE</i> and −<i>qE</i> form a couple with arm 2<i>a</i> sin <i>θ</i>, giving a torque of magnitude <i>pE</i> sin <i>θ</i> directed into the page.' }],
  draw() {
    const s = new Sketch(W, 356);
    const { Cc, th, rc, lines, x0, x1, xm } = D16, g = g16();
    // the uniform field
    lines.forEach((y) => arrow(s, [x0, y], [x1, y], { color: C.slate, w: 1.3 }));
    s.sym(x0, lines[0] - 10, '<i>E⃗</i>', { size: 15, anchor: 'start' });
    // the dipole, at θ to the field
    path(s, [add(g.mq, g.u, rc + 1), add(g.pq, g.u, -rc - 1)], { color: C.mari, w: 3 });
    angleArc(s, Cc, 30, -th, 0);
    s.sym(Cc[0] + 50 * Math.cos(-17 * D2R), Cc[1] + 50 * Math.sin(-17 * D2R) + 5, '<i>θ</i>', { size: 14 });
    charge(s, g.pq, rc, '+<i>q</i>', { size: 14 });
    charge(s, g.mq, rc, '−<i>q</i>', { size: 14 });
    // p⃗ beside the dipole, parallel to it
    const n: P = [-Math.sin(th), -Math.cos(th)], pc = add(Cc, n, 34);
    arrow(s, add(pc, g.u, -36), add(pc, g.u, 36), { w: 2 });
    const pt = add(pc, g.u, 36);
    s.sym(pt[0] - 8, pt[1] - 10, '<i>p⃗</i>', { size: 15, anchor: 'end' });
    // the two forces and the couple's arm
    arrow(s, g.fP[0], g.fP[1], { w: 2.4 });
    arrow(s, g.fM[0], g.fM[1], { w: 2.4 });
    s.sym(mid(g.fP[0], g.fP[1])[0] + 2, g.pq[1] - 12, '+<i>qE⃗</i>', { size: 15 });
    s.sym(mid(g.fM[0], g.fM[1])[0] - 2, g.mq[1] - 12, '−<i>qE⃗</i>', { size: 15 });
    guide(s, [g.fP[1][0] + 4, g.pq[1]], [xm + 6, g.pq[1]]);
    guide(s, [g.mq[0] + rc + 3, g.mq[1]], [xm + 6, g.mq[1]]);
    measure(s, [xm, g.pq[1] + 1], [xm, g.mq[1] - 1]);
    s.sym(xm + 8, lines[2] - 16, '2<i>a</i> sin <i>θ</i>', { size: 14, anchor: 'start' });
    const res = resultBlock(s, ['<i>τ⃗</i> = <i>p⃗</i> × <i>E⃗</i>, directed into the page', '<i>τ</i> = <i>pE</i> sin <i>θ</i>'], { size: 14 });
    s.place([
      { t: 'Dipole', hi: true, p: add(Cc, g.u, -30), at: [[150, 247, 'start'], [160, 247, 'start']] },
      { t: 'Uniform field', p: [x0 + 50, lines[4]], at: [[x0 + 8, 247, 'start'], [x0 + 4, 247, 'start']] },
    ], [res]);
    return s;
  },
  check() {
    const { Cc, a, th, F } = D16, g = g16();
    const fP = sub(g.fP[1], g.fP[0]), fM = sub(g.fM[1], g.fM[0]);
    const arm = Math.abs(g.pq[1] - g.mq[1]);
    // the torque of the drawn forces about the centre, in the book's frame (y up, z out of the page): Σ r × F
    const up = (v: P): P => [v[0], -v[1]];
    const tz = crossz(up(sub(g.pq, Cc)), up(fP)) + crossz(up(sub(g.mq, Cc)), up(fM));
    // p⃗ = q(2a) from −q to +q, E⃗ along +x: pE sin θ with qE = F px
    const pE = (F / 1) * 2 * a * Math.sin(th);
    // worked example 3: p = 5 × 10⁻⁹ C m, E = 2 × 10⁴ N/C, θ = 30°
    const tau = 5e-9 * 2e4 * Math.sin(30 * D2R);
    return [
      [`The dipole is at θ = ${fmt(Math.atan2(g.mq[1] - g.pq[1], g.pq[0] - g.mq[0]) / D2R, 1)}° to the field lines, 2a = ${fmt(len(g.pq, g.mq), 1)} px long, from −q to +q`, close(Math.atan2(g.mq[1] - g.pq[1], g.pq[0] - g.mq[0]), th, 1e-12) && close(len(g.pq, g.mq), 2 * a, 1e-9)],
      ['+qE⃗ on +q points along E⃗ and −qE⃗ on −q against it, equal in length: the net force is zero', fP[0] > 0 && fM[0] < 0 && close(fP[0] + fM[0], 0) && close(fP[1], 0) && close(fM[1], 0) && close(mag(fP), F)],
      [`The forces' lines of action are 2a sin θ = ${fmt(2 * a * Math.sin(th), 2)} px apart: the measured arm`, close(arm, 2 * a * Math.sin(th), 1e-9)],
      [`The couple's torque, summed from the drawn forces, is ${fmt(Math.abs(tz), 2)} = qE·2a sin θ = pE sin θ`, close(Math.abs(tz), pE, 1e-9)],
      ['Its z-component is negative (y up, z out of the page), as τ⃗ = p⃗ × E⃗ gives: it points into the page', tz < 0 && crossz([Math.cos(th), Math.sin(th)], [1, 0]) < 0],
      [`Worked example 3: pE sin 30° = ${sci(tau, 1)} N m (the book's 5 × 10⁻⁵)`, close(tau, 5e-5, 1e-15)],
      clearCheck(fig16.draw(fig16.cases[0])),
    ];
  },
};

/* ===================================================================== */
/* Figure 1.7 · the field on a ring's axis (topic 03)                      */
/* ===================================================================== */
/**
 * The ring is drawn in perspective (an ellipse, as the book draws the disc of
 * Figure 1.8), so that its axis can lie in the page; R is its true radius.
 */
const R17 = { Cr: [62, 122] as P, R: 70, rx: 26, x: 160, dE: 84 };
const g17 = () => {
  const { Cr, R, x, dE } = R17;
  const top: P = [Cr[0], Cr[1] - R], bot: P = [Cr[0], Cr[1] + R], Pp: P = [Cr[0] + x, Cr[1]];
  const uT = unit(sub(Pp, top)), uB = unit(sub(Pp, bot));
  const tT = add(Pp, uT, dE), tB = add(Pp, uB, dE);
  const alpha = Math.atan2(R, x);
  return { top, bot, Pp, uT, uB, tT, tB, alpha, ax: [Pp[0] + dE * Math.cos(alpha), Pp[1]] as P };
};
/** The axial field of a ring (k = 1, Q = 1), by summing N elements round it in 3D. */
function ringSum(R: number, x: number, N = 720) {
  let Ex = 0, Ey = 0, Ez = 0;
  for (let i = 0; i < N; i++) {
    const t = (2 * Math.PI * (i + 0.5)) / N, rx = x, ry = -R * Math.cos(t), rz = -R * Math.sin(t), d = Math.hypot(rx, ry, rz);
    Ex += rx / d ** 3 / N; Ey += ry / d ** 3 / N; Ez += rz / d ** 3 / N;
  }
  return { Ex, Et: Math.hypot(Ey, Ez) };
}
const fig17: Diagram = {
  id: 'p12-01-fig-1.7',
  topic: 2,
  name: 'Field on the axis of a ring',
  cases: [{ chip: 'Ring', cap: 'Charged ring of radius <i>R</i> and the field at a point <i>P</i> on its axis, at distance <i>x</i> from the centre. Opposite elements d<i>q</i> give fields whose radial parts cancel; only the axial parts d<i>E</i> cos <i>α</i> remain and add.' }],
  draw() {
    const s = new Sketch(W, 322);
    const { Cr, R, rx } = R17, g = g17(), y = Cr[1];
    path(s, [[12, y], [g.Pp[0] - 4, y]], { color: C.grey, w: 1.2, dash: 'dash', free: true });
    path(s, [[g.ax[0] + 3, y], [W - 6, y]], { color: C.grey, w: 1.2, dash: 'dash', free: true });
    path(s, ellPts(Cr, rx, R, 0, 2 * Math.PI, 160), { w: 2.4 });
    // R, from the centre to the top element
    path(s, [[Cr[0], y - 4], [g.top[0], g.top[1] + 6]], { color: C.slate, w: 1.2 });
    s.dot(Cr[0], y, 2.6);
    s.sym(Cr[0] + 6, y - R / 2 + 5, '<i>R</i>', { size: 15, anchor: 'start', color: C.slate });
    // the two elements and the lines from them to P
    s.dot(g.top[0], g.top[1], 4.2);
    s.dot(g.bot[0], g.bot[1], 4.2);
    s.sym(g.top[0], g.top[1] - 12, 'd<i>q</i>', { size: 15 });
    s.sym(g.bot[0], g.bot[1] + 22, 'd<i>q</i>', { size: 15 });
    guide(s, add(g.top, g.uT, 6), g.Pp);
    guide(s, add(g.bot, g.uB, 6), g.Pp);
    // the fields at P, their radial parts (dotted), the axial part
    guide(s, g.tT, g.tB);
    arrow(s, g.Pp, g.tT, { w: 2.2 });
    arrow(s, g.Pp, g.tB, { w: 2.2 });
    arrow(s, g.Pp, g.ax, { color: C.mari, w: 2.8 });
    angleArc(s, g.Pp, 56, 0, g.alpha);
    s.sym(g.Pp[0] + 72 * Math.cos(g.alpha / 2), y + 72 * Math.sin(g.alpha / 2) + 6, '<i>α</i>', { size: 14 });
    s.dot(g.Pp[0], y, 3.6);
    s.sym(g.Pp[0] - 8, y + 20, '<i>P</i>', { size: 15, anchor: 'end' });
    s.sym(W - 6, g.tB[1] - 12, 'd<i>E⃗</i>′ (from bottom d<i>q</i>)', { size: 13.5, anchor: 'end' });
    s.sym(W - 6, g.tT[1] + 24, 'd<i>E⃗</i> (from top d<i>q</i>)', { size: 13.5, anchor: 'end' });
    // x
    const yx = 232;
    guide(s, [Cr[0], y + R + 26], [Cr[0], yx + 5]);
    guide(s, [g.Pp[0], y + 6], [g.Pp[0], yx + 5]);
    measure(s, [Cr[0] + 1, yx], [g.Pp[0] - 1, yx]);
    s.sym((Cr[0] + g.Pp[0]) / 2, yx + 18, '<i>x</i>', { size: 15 });
    s.sym(12, 292, 'd<i>E</i> cos <i>α</i> (axial, adds)', { size: 14, anchor: 'start', color: C.amber });
    s.sym(12, 313, 'd<i>E</i> sin <i>α</i> (radial): cancels', { size: 14, anchor: 'start', color: C.slate });
    s.place([
      { t: 'Charged ring', p: ellPts(Cr, rx, R, 2.4, 2.4, 1)[0], at: [[8, 246, 'start'], [8, 250, 'start']] },
    ]);
    return s;
  },
  check() {
    const { Cr, R, x, dE } = R17, g = g17();
    const eT = sub(g.tT, g.Pp), eB = sub(g.tB, g.Pp), axial = sub(g.ax, g.Pp);
    const xs = [0.3, 0.5, 1, 2, 4].map((k) => k * R);
    const E = (xx: number) => xx / (xx * xx + R * R) ** 1.5;
    let best = 0, at = 0;
    for (let i = 1; i <= 40000; i++) { const xx = (i / 40000) * 3 * R; if (E(xx) > best) { best = E(xx); at = xx; } }
    return [
      [`P is on the axis at x = ${fmt(g.Pp[0] - Cr[0], 1)} px from the centre; the elements are R = ${R} px above and below it`, close(g.Pp[0] - Cr[0], x) && close(Cr[1] - g.top[1], R) && close(g.bot[1] - Cr[1], R) && g.Pp[1] === Cr[1]],
      ['Each dE⃗ points away from its element, along the line from dq through P', collinear(g.top, g.Pp, g.tT) && collinear(g.bot, g.Pp, g.tB) && dotp(eT, sub(g.Pp, g.top)) > 0],
      [`α, between dE⃗ and the axis, has tan α = R/x: ${fmt(g.alpha / D2R, 2)}°`, close(Math.atan2(eT[1], eT[0]), g.alpha, 1e-12)],
      ['The radial parts dE sin α of the two opposite elements cancel (the dotted line, equal above and below)', close(eT[1] + eB[1], 0, 1e-9) && close(eT[0], eB[0], 1e-9)],
      [`The axial part is dE cos α = ${fmt(mag(axial), 2)} px of dE's ${dE} px, the same for both: they add`, close(mag(axial), dE * Math.cos(g.alpha), 1e-9) && close(eT[0], mag(axial), 1e-9)],
      ['Summing all elements round the ring: the radial parts cancel and E = kQx/(x² + R²)^(3/2) (at five distances)', xs.every((xx) => { const s2 = ringSum(R, xx); return s2.Et < 1e-12 && rel(s2.Ex, E(xx), 1e-9); })],
      [`E = 0 at the centre and greatest at x = R/√2 = ${fmt(R / Math.SQRT2, 2)} px (scan: ${fmt(at, 2)} px), worked example 4`, E(0) === 0 && close(at, R / Math.SQRT2, 0.01)],
      clearCheck(fig17.draw(fig17.cases[0])),
    ];
  },
};

/* ===================================================================== */
/* Figure 1.8 · the field on a disc's axis (topic 04)                      */
/* ===================================================================== */
/** The disc in perspective (vertical semi-axis R, horizontal 0.38R); the ring at r, width dr; P at x. */
const D18 = { Cd: [86, 154] as P, R: 100, k: 0.38, r: 55, dr: 12, x: 160, dE: 70 };
const fig18: Diagram = {
  id: 'p12-01-fig-1.8',
  topic: 3,
  name: 'Field on the axis of a disc',
  cases: [{ chip: 'Disc', cap: 'Charged disc of radius <i>R</i> and surface charge <i>σ</i>: a thin ring of radius <i>r</i> and width d<i>r</i> gives the axial field d<i>E</i> at <i>P</i>.' }],
  draw() {
    const s = new Sketch(W, 318);
    const { Cd, R, k, r, dr, x, dE } = D18, y = Cd[1], Pp: P = [Cd[0] + x, y];
    path(s, [[12, y], [Cd[0] - 4, y]], { color: C.grey, w: 1.2, dash: 'dash', free: true });
    path(s, [[Cd[0] + 4, y], [Pp[0] - 4, y]], { color: C.grey, w: 1.2, dash: 'dash', free: true });
    path(s, [[Pp[0] + dE + 3, y], [W - 6, y]], { color: C.grey, w: 1.2, dash: 'dash', free: true });
    // the disc's rim, the thin ring
    path(s, ellPts(Cd, k * R, R, 0, 2 * Math.PI, 160), { w: 2.2 });
    path(s, ellPts(Cd, k * r, r, 0, 2 * Math.PI, 120), { color: C.mari, w: 1.8 });
    path(s, ellPts(Cd, k * (r + dr), r + dr, 0, 2 * Math.PI, 120), { color: C.mari, w: 1.8 });
    s.dot(Cd[0], y, 2.6);
    // R to the rim, r to the ring
    const rimT = -1.25, rim: P = [Cd[0] + k * R * Math.cos(rimT), y + R * Math.sin(rimT)];
    arrow(s, Cd, rim, { color: C.slate, w: 1.4 });
    s.sym(rim[0] + 14, rim[1] + 6, '<i>R</i>', { size: 15, anchor: 'start', color: C.slate });
    arrow(s, [Cd[0], y + 3], [Cd[0], y + r - 1], { w: 1.4 });
    s.sym(Cd[0] + 5, y + 24, '<i>r</i>', { size: 15, anchor: 'start' });
    // the ring's opposite edges to P: off-axis parts cancel in pairs
    guide(s, [Cd[0], y - r - dr / 2], Pp);
    guide(s, [Cd[0], y + r + dr / 2], Pp);
    s.sym(208, 82, 'off-axis parts', { size: 13, color: C.slate });
    s.sym(208, 98, 'cancel in pairs', { size: 13, color: C.slate });
    // dE⃗ along the axis
    arrow(s, Pp, [Pp[0] + dE, y], { w: 2.6 });
    s.dot(Pp[0], y, 3.6);
    s.sym(Pp[0] - 4, y + 22, '<i>P</i>', { size: 15, anchor: 'end' });
    // High enough that the dotted line from the ring's top edge to P passes under its "d", not into it.
    s.sym(W - 6, y - 21, 'd<i>E⃗</i> (ring, along axis)', { size: 13.5, anchor: 'end' });
    s.sym(W / 2, 22, 'disc: surface charge <i>σ</i>, radius <i>R</i>', { size: 14 });
    // x
    const yx = 282;
    guide(s, [Cd[0], y + R + 4], [Cd[0], yx + 5]);
    guide(s, [Pp[0], y + 6], [Pp[0], yx + 5]);
    measure(s, [Cd[0] + 1, yx], [Pp[0] - 1, yx]);
    s.sym((Cd[0] + Pp[0]) / 2, yx + 18, '<i>x</i>', { size: 15 });
    const band = ellPts(Cd, k * (r + dr / 2), r + dr / 2, 1.1, 1.1, 1)[0];
    s.place([
      { t: 'Thin ring', hi: true, p: band, at: [[124, 218, 'start'], [124, 224, 'start']] },
    ]);
    const tg = s.tags.find((t) => t.name === 'Thin ring');
    // Under its tag, not beside it: beside, the dotted guide from P down to x ran through it.
    if (tg) s.sym((tg.rect[0] + tg.rect[2]) / 2, tg.rect[3] + 17, 'ring width d<i>r</i>', { size: 14, color: C.amber });
    return s;
  },
  check() {
    const { Cd, R, r, dr, x, dE } = D18, Pp: P = [Cd[0] + x, Cd[1]], tip: P = [Pp[0] + dE, Cd[1]];
    // worked example 3: σ = 8.85 × 10⁻⁷ C/m², R = x = 0.10 m
    const sig = 8.85e-7, Rm = 0.1, xm = 0.1;
    const ringE = (rr: number) => (K * xm * sig * 2 * Math.PI * rr) / (xm * xm + rr * rr) ** 1.5;
    const sum = simpson(ringE, 0, Rm);
    const closedK = (sig / (2 * EPSK)) * (1 - xm / Math.hypot(xm, Rm)), closed = (sig / (2 * EPS0)) * (1 - xm / Math.hypot(xm, Rm));
    const wide = (xx: number, RR: number) => (sig / (2 * EPSK)) * (1 - xx / Math.hypot(xx, RR));
    const Q = sig * Math.PI * Rm * Rm;
    return [
      [`The thin ring (r = ${r} px, width ${dr} px) lies inside the disc (R = ${R} px)`, r + dr < R && r > 0],
      ['Its charge is dq = σ dA = σ·2πr dr, and its axial field is k x dq/(x² + r²)^(3/2) (Figure 1.7 with Q → dq, R → r)', close(ringE(0.05), (K * xm * (sig * 2 * Math.PI * 0.05)) / (xm * xm + 0.05 ** 2) ** 1.5, 1e-9)],
      [`Adding the rings from r = 0 to R gives ${fmt(sum, 0)} N/C = (σ/2ε₀)(1 − x/√(x² + R²)) with ε₀ = 1/(4πk); with the book's ε₀ = 8.85 × 10⁻¹², ${fmt(closed, 0)} N/C: worked example 3's 1.46 × 10⁴ N/C`, rel(sum, closedK, 1e-9) && fmt(closed / 1e4, 2) === '1.46'],
      [`R → ∞ (or x ≪ R): E → σ/2ε₀, the infinite sheet (${fmt(wide(1e-6, 10) / (sig / (2 * EPSK)), 5)} of it)`, rel(wide(1e-6, 10), sig / (2 * EPSK), 1e-5)],
      [`Far away (x ≫ R) it tends to kQ/x², a point charge (${fmt(wide(10, Rm) / ((K * Q) / 100), 4)} of it at x = 100R)`, rel(wide(10, Rm), (K * Q) / 100, 1e-3)],
      [`P is on the axis, x = ${fmt(Pp[0] - Cd[0], 1)} px from the centre, and dE⃗ points along the axis away from the disc (σ > 0)`, Pp[1] === Cd[1] && tip[1] === Cd[1] && tip[0] > Pp[0] && Pp[0] > Cd[0]],
      clearCheck(fig18.draw(fig18.cases[0])),
    ];
  },
};

/* ===================================================================== */
/* Figure 1.9 · the field at the centre of a semicircular arc (topic 04)   */
/* ===================================================================== */
const A19 = { O: [170, 182] as P, R: 118, th: 55 * D2R, dE: 104, Enet: 150 };
const g19 = () => {
  const { O, R, th, dE } = A19;
  const dq: P = [O[0] + R * Math.cos(th), O[1] - R * Math.sin(th)];
  const mirror: P = [O[0] - R * Math.cos(th), O[1] - R * Math.sin(th)];
  const u = unit(sub(O, dq));
  return { dq, mirror, u, tip: add(O, u, dE) };
};
const fig19: Diagram = {
  id: 'p12-01-fig-1.9',
  topic: 3,
  name: 'Field at the centre of an arc',
  cases: [{ chip: 'Semicircular arc', cap: 'Semicircular arc of radius <i>R</i> with uniform linear charge <i>λ</i>. The element d<i>q</i> = <i>λR</i> d<i>θ</i> gives d<i>E</i> at <i>O</i> directed away from d<i>q</i>. The components parallel to the diameter cancel, so the net field 2<i>kλ</i>/<i>R</i> points straight down, away from the arc.' }],
  draw() {
    const s = new Sketch(W, 382);
    const { O, R, th, Enet } = A19, g = g19();
    path(s, [[20, O[1]], [O[0] - 4, O[1]]], { color: C.slate, w: 1.2, dash: 'dash', free: true });
    path(s, [[O[0] + 4, O[1]], [W - 20, O[1]]], { color: C.slate, w: 1.2, dash: 'dash', free: true });
    path(s, ellPts(O, R, R, Math.PI, 2 * Math.PI, 160), { w: 3 });
    // R and θ to the element
    path(s, [add(O, unit(sub(g.dq, O)), 5), add(g.dq, unit(sub(O, g.dq)), 7)], { color: C.slate, w: 1.3 });
    const mR = add(O, sub(g.dq, O), 0.62);
    s.sym(mR[0] - 10, mR[1] + 4, '<i>R</i>', { size: 15, anchor: 'end', color: C.slate });
    angleArc(s, O, 34, -th, 0);
    s.sym(O[0] + 48 * Math.cos(-th / 2), O[1] + 48 * Math.sin(-th / 2) + 6, '<i>θ</i>', { size: 15 });
    s.dot(g.dq[0], g.dq[1], 5);
    s.point(g.mirror[0], g.mirror[1], 5, `<circle cx="${r1(g.mirror[0])}" cy="${r1(g.mirror[1])}" r="5" fill="#fff" stroke="${C.ink}" stroke-width="1.5"/>`);
    s.sym(g.dq[0] + 10, g.dq[1] - 10, 'd<i>q</i> = <i>λR</i> d<i>θ</i>', { size: 15, anchor: 'start' });
    // dE at O, away from dq, and its two components (dotted)
    guide(s, g.tip, [O[0] - 3, g.tip[1]]);
    guide(s, g.tip, [g.tip[0], O[1] + 3]);
    arrow(s, O, g.tip, { w: 2.4 });
    s.sym(g.tip[0] - 8, g.tip[1] + 14, 'd<i>E⃗</i>', { size: 16, anchor: 'end' });
    // the net field
    arrow(s, O, [O[0], O[1] + Enet], { color: C.mari, w: 3 });
    s.dot(O[0], O[1], 3.6);
    s.sym(O[0] + 12, O[1] + 22, '<i>O</i>', { size: 15, anchor: 'start' });
    s.sym(O[0] + 12, O[1] + 46, 'd<i>E</i> sin <i>θ</i>', { size: 14, anchor: 'start', color: C.slate });
    s.sym(O[0] + 12, O[1] + 63, 'parts add', { size: 14, anchor: 'start', color: C.slate });
    s.sym(80, O[1] - 50, 'd<i>E</i> cos <i>θ</i> parts', { size: 13.5, anchor: 'start', color: C.slate });
    s.sym(80, O[1] - 32, 'cancel in pairs', { size: 13.5, anchor: 'start', color: C.slate });
    s.sym(O[0] - 10, O[1] + Enet - 6, '<i>E⃗</i><sub>net</sub>', { size: 16, anchor: 'end', color: C.amber });
    const res = resultBlock(s, ['<i>E⃗</i><sub>net</sub> = 2<i>kλ</i>/<i>R</i>', '(downward)'], { size: 15 });
    s.place([
      { t: 'Mirror element', p: g.mirror, own: g.mirror, at: [[12, 34, 'start'], [12, 30, 'start']] },
      { t: 'Net field', hi: true, p: [O[0], O[1] + Enet * 0.62], at: [[W - 8, 252, 'end'], [W - 8, 246, 'end']] },
    ], [res]);
    return s;
  },
  check() {
    const { O, R, th } = A19, g = g19();
    // kλ/R = 1: sum dE = (kλ/R) dθ over the arc, each pointing from the element through O
    const N = 3600;
    let Ex = 0, Ey = 0;
    for (let i = 0; i < N; i++) { const t = (Math.PI * (i + 0.5)) / N; Ex += -Math.cos(t) * (Math.PI / N); Ey += -Math.sin(t) * (Math.PI / N); }
    const m = sub(g.mirror, O), d = sub(g.dq, O);
    return [
      [`dq is on the arc, R = ${R} px from O, at θ = ${fmt(th / D2R, 1)}° from the diameter; its mirror is at 180° − θ`, close(len(O, g.dq), R, 1e-9) && close(len(O, g.mirror), R, 1e-9) && close(m[0], -d[0], 1e-9) && close(m[1], d[1], 1e-9)],
      ['dE⃗ at O points away from dq, along the line from dq through O', close(dotp(g.u, unit(sub(O, g.dq))), 1, 1e-12)],
      ['Its component along the diameter is dE cos θ and across it dE sin θ (the dotted lines)', close(Math.abs(g.tip[0] - O[0]), A19.dE * Math.cos(th), 1e-9) && close(g.tip[1] - O[1], A19.dE * Math.sin(th), 1e-9)],
      ['The mirror element at 180° − θ gives the opposite dE cos θ and the same dE sin θ: the parallel parts cancel in pairs', close(-unit(m)[0] + -unit(d)[0], 0, 1e-12)],
      [`Summing all elements: E_x = ${fmt(Math.abs(Ex), 6)} and E = (kλ/R)∫₀^π sin θ dθ = ${fmt(Math.abs(Ey), 6)} kλ/R, i.e. 2kλ/R`, Math.abs(Ex) < 1e-9 && rel(Math.abs(Ey), 2, 1e-6)],
      ['It points straight down, away from the arc (positive λ)', Ey < 0],
      clearCheck(fig19.draw(fig19.cases[0])),
    ];
  },
};

/* ===================================================================== */
/* Figure 1.10 · Gauss's law: infinite line charge (topic 05)              */
/* ===================================================================== */
/** The cylinder: axis x, radius rc (px), the caps' ellipse half-height ey, top and bottom. */
const G110 = { cx: 150, rc: 62, ey: 14, top: 112, bot: 252, line: [34, 316] as [number, number], E: 36, rows: [140, 168, 196, 224], signs: [52, 86, 112, 148, 182, 216, 252, 288] };
/** The field arrows, each [from, to], starting just off the curved surface. */
const arrows110 = (): [P, P][] => {
  const { cx, rc, E, rows } = G110;
  return rows.flatMap((y): [P, P][] => [[[cx - rc - 4, y], [cx - rc - 4 - E, y]], [[cx + rc + 4, y], [cx + rc + 4 + E, y]]]);
};
const fig110: Diagram = {
  id: 'p12-01-fig-1.10',
  topic: 4,
  name: 'Gauss’s law: line charge',
  cases: [{ chip: 'Line charge', cap: 'Infinite line charge <i>λ</i> with a coaxial cylindrical Gaussian surface of radius <i>r</i> and length <i>L</i>. <i>E</i> is radial, so the flux through the curved surface is <i>E</i>(2π<i>rL</i>) and the flux through the two end caps is zero.' }],
  draw() {
    const s = new Sketch(W, 398);
    const { cx, rc, ey, top, bot, line, E, rows, signs } = G110;
    // the line charge
    path(s, [[cx, line[0]], [cx, line[1]]], { w: 2.4 });
    signs.forEach((y) => sign(s, [cx, y], true));
    // the Gaussian cylinder
    path(s, ellPts([cx, top], rc, ey, 0, 2 * Math.PI, 120), { color: C.mari, w: 2 });
    path(s, ellPts([cx, bot], rc, ey, 0, Math.PI, 60), { color: C.mari, w: 2 });
    path(s, ellPts([cx, bot], rc, ey, Math.PI, 2 * Math.PI, 60), { color: C.mari, w: 1.4, dash: 'dash' });
    path(s, [[cx - rc, top], [cx - rc, bot]], { color: C.mari, w: 2 });
    path(s, [[cx + rc, top], [cx + rc, bot]], { color: C.mari, w: 2 });
    // r, and the field: radial, the same all round
    arrow(s, [cx + 7, rows[1] + 14], [cx + rc - 2, rows[1] + 14], { color: C.slate, w: 1.3 });
    s.sym(cx + rc / 2 + 4, rows[1] + 5, '<i>r</i>', { size: 15, color: C.slate });
    arrows110().forEach(([a, b]) => arrow(s, a, b, { w: 2 }));
    s.sym(cx + rc + E + 14, (rows[1] + rows[2]) / 2 + 5, '<i>E⃗</i>', { size: 16, anchor: 'start' });
    // L
    const xL = 300;
    guide(s, [cx + rc + 4, top], [xL + 5, top]);
    guide(s, [cx + rc + 4, bot], [xL + 5, bot]);
    measure(s, [xL, top + 1], [xL, bot - 1]);
    s.sym(xL + 9, (top + bot) / 2 + 26, '<i>L</i>', { size: 15, anchor: 'start', color: C.slate });
    s.sym(cx + 12, line[0] + 4, 'line charge, <i>λ</i> > 0', { size: 13.5, anchor: 'start' });
    s.sym(cx + rc - 4, top - ey - 10, 'caps: <i>E⃗</i> ⊥ d<i>A⃗</i> so Φ = 0', { size: 13, anchor: 'start', color: C.slate });
    s.sym(cx + rc - 4, bot + ey + 22, 'caps: <i>E⃗</i> ⊥ d<i>A⃗</i> so Φ = 0', { size: 13, anchor: 'start', color: C.slate });
    const res = resultBlock(s, ['Φ<sub><i>E</i></sub> = <i>E</i>(2π<i>rL</i>) = <i>λL</i>/ε<sub>0</sub>', '⇒ <i>E</i> = <i>λ</i>/(2πε<sub>0</sub><i>r</i>)'], { size: 15 });
    s.place([
      { t: 'Gaussian cylinder', hi: true, p: [cx - rc, bot - 12], at: [[6, 286, 'start'], [6, 292, 'start']] },
    ], [res]);
    return s;
  },
  check() {
    const { cx, rc, top, bot } = G110, ar = arrows110();
    const lam = 1e-6, r = 0.05, L = 0.2;
    const Egauss = lam / (2 * Math.PI * EPSK * r);
    // Coulomb, summed along a line 2 km long: the perpendicular component at distance r
    const half = 1000, coul = 2 * simpson((z) => (K * lam * r) / (r * r + z * z) ** 1.5, 0, half, 200000);
    const capNormal: P = [0, 1];
    return [
      ['Every field arrow is at right angles to the line and points away from it (radial, λ > 0), starting at the curved surface', ar.every(([a, b]) => close(a[1], b[1]) && Math.abs(b[0] - cx) > Math.abs(a[0] - cx) && close(Math.abs(a[0] - cx), rc + 4))],
      ['All are the same length: at a fixed r, E is the same all round and all along (symmetry)', ar.every(([a, b]) => close(len(a, b), G110.E))],
      ['On the curved surface E⃗ is along the outward normal; on the caps the normal is along the line, at right angles to every arrow (E⃗ ⊥ dA⃗): no flux', ar.every(([a, b]) => close(dotp(unit(sub(b, a)), capNormal), 0))],
      [`Flux E(2πrL) = λL/ε₀ gives E = λ/(2πε₀r) = ${sci(Egauss, 3)} N/C for λ = 1 µC/m at 5 cm`, rel((lam * L) / EPSK / (2 * Math.PI * r * L), Egauss, 1e-12)],
      [`Coulomb's law summed along a 2 km line gives ${sci(coul, 3)} N/C at the same point: the same field`, rel(coul, Egauss, 1e-4)],
      [`E ∝ 1/r: doubling r halves it (${fmt(Egauss / (lam / (2 * Math.PI * EPSK * 2 * r)), 3)}×)`, close(Egauss / (lam / (2 * Math.PI * EPSK * 2 * r)), 2, 1e-12)],
      [`The cylinder is coaxial with the line (radius ${rc} px each side, length ${bot - top} px), and no charge sign sits on a cap's rim`, G110.signs.every((y) => [top, bot].every((c) => Math.abs(Math.abs(y - c) - G110.ey) > 8))],
      clearCheck(fig110.draw(fig110.cases[0])),
    ];
  },
};

/* ===================================================================== */
/* Figure 1.11 · Gauss's law: infinite plane sheet (topic 05)              */
/* ===================================================================== */
const G111 = { x: 170, sheet: [44, 262] as [number, number], L: 116, cy: 156, ry: 40, rx: 11, E: 40, rows: [138, 156, 174], signs: [62, 92, 136, 176, 220, 248] };
const arrows111 = (): [P, P][] => {
  const { x, L, rx, E, rows } = G111, xl = x - L / 2, xr = x + L / 2;
  return rows.flatMap((y): [P, P][] => [[[xl - rx - 4, y], [xl - rx - 4 - E, y]], [[xr + rx + 4, y], [xr + rx + 4 + E, y]]]);
};
const fig111: Diagram = {
  id: 'p12-01-fig-1.11',
  topic: 4,
  name: 'Gauss’s law: plane sheet',
  cases: [{ chip: 'Plane sheet', cap: 'Infinite plane sheet of uniform surface charge <i>σ</i> with a cylindrical Gaussian pillbox of cap area <i>A</i>. <i>E</i> is perpendicular to the sheet, so each cap contributes <i>EA</i> and the curved side contributes nothing.' }],
  draw() {
    const s = new Sketch(W, 352);
    const { x, sheet, L, cy, ry, rx, E, signs } = G111;
    const xl = x - L / 2, xr = x + L / 2;
    // the sheet, edge on
    path(s, [[x, sheet[0]], [x, sheet[1]]], { w: 2.4 });
    signs.forEach((y) => sign(s, [x, y], true));
    // the pillbox
    path(s, ellPts([xl, cy], rx, ry, Math.PI / 2, 1.5 * Math.PI, 60), { color: C.mari, w: 2 });
    path(s, ellPts([xl, cy], rx, ry, -Math.PI / 2, Math.PI / 2, 60), { color: C.mari, w: 1.4, dash: 'dash' });
    path(s, ellPts([xr, cy], rx, ry, 0, 2 * Math.PI, 120), { color: C.mari, w: 2 });
    path(s, [[xl, cy - ry], [xr, cy - ry]], { color: C.mari, w: 2 });
    path(s, [[xl, cy + ry], [xr, cy + ry]], { color: C.mari, w: 2 });
    // the field, perpendicular to the sheet, out of both caps
    arrows111().forEach(([a, b]) => arrow(s, a, b, { w: 2 }));
    s.sym(xl - rx - E - 12, cy + 6, '<i>E⃗</i>', { size: 16, anchor: 'end' });
    s.sym(xr + rx + E + 12, cy + 6, '<i>E⃗</i>', { size: 16, anchor: 'start' });
    s.sym(xl - 4, cy + ry + 24, 'cap area <i>A</i>', { size: 13.5 });
    s.sym(xr + 8, cy + ry + 24, 'cap area <i>A</i>', { size: 13.5 });
    s.sym(x + 12, sheet[0] + 2, '<i>σ</i> > 0', { size: 14, anchor: 'start' });
    s.sym(xl - 12, 70, 'curved side:', { size: 13, anchor: 'end', color: C.slate });
    s.sym(xl - 12, 87, '<i>E⃗</i> ∥ surface, Φ = 0', { size: 13, anchor: 'end', color: C.slate });
    const res = resultBlock(s, ['Φ<sub><i>E</i></sub> = <i>EA</i> + <i>EA</i> = 2<i>EA</i> = <i>σA</i>/ε<sub>0</sub>', '⇒ <i>E</i> = <i>σ</i>/(2ε<sub>0</sub>)'], { size: 15 });
    s.place([
      { t: 'Gaussian pillbox', hi: true, p: [xr - 20, cy - ry], at: [[W - 8, 56, 'end'], [W - 8, 50, 'end']] },
      { t: 'Charged sheet', p: [x, sheet[1] - 6], at: [[14, 238, 'start'], [14, 244, 'start']] },
    ], [res]);
    return s;
  },
  check() {
    const { x, L, cy, ry, signs } = G111, ar = arrows111();
    const sig = 1e-6, Eg = sig / (2 * EPSK);
    // a disc of radius 1 km seen from 1 cm: the near-sheet field
    const disc = (sig / (2 * EPSK)) * (1 - 0.01 / Math.hypot(0.01, 1000));
    const sideNormal: P = [0, 1];
    return [
      ['Every field arrow is at right angles to the sheet and points away from it on both sides (σ > 0), out through a cap: each cap gives +EA', ar.every(([a, b]) => close(a[1], b[1]) && Math.abs(b[0] - x) > Math.abs(a[0] - x)) && ar.every(([a]) => Math.abs(a[1] - cy) < ry)],
      ['The curved side’s normal is parallel to the sheet, at right angles to every arrow: no flux', ar.every(([a, b]) => close(dotp(unit(sub(b, a)), sideNormal), 0))],
      ['All arrows are the same length, on both sides, near and far: the field does not depend on distance', ar.every(([a, b]) => close(len(a, b), G111.E))],
      [`Q_enc = σA, so 2EA = σA/ε₀ and E = σ/(2ε₀) = ${sci(Eg, 3)} N/C for σ = 1 µC/m², whatever A`, rel(sig / EPSK / 2, Eg, 1e-12)],
      [`Coulomb's law for a sheet 1 km wide, 1 cm away, gives ${sci(disc, 3)} N/C: the same field`, rel(disc, Eg, 1e-4)],
      [`The pillbox straddles the sheet symmetrically (caps ${L / 2} px either side), and no charge sign sits on its edges`, signs.every((y) => Math.abs(y - (cy - ry)) > 8 && Math.abs(y - (cy + ry)) > 8)],
      clearCheck(fig111.draw(fig111.cases[0])),
    ];
  },
};

/* ===================================================================== */
/* Figure 1.12 · Gauss's law: thin spherical shell (topic 05)              */
/* ===================================================================== */
const G112 = { Cs: [170, 190] as P, R: 72, rIn: 40, rOut: 130, n: 14, arrows: 12, E: 28, aOut: (360 / 14) * 11.5 + 90 - 360 };
/** The shell's + signs (every 360°/n from the bottom, y down) and the three radii (the outer r at 25.7°, midway between two signs): R, the inner r, and the outer r, which runs from the centre out to the outer Gaussian sphere. */
const radii112 = () => {
  const { Cs, R, rOut, n, aOut } = G112, u = (deg: number): P => [Math.cos(deg * D2R), Math.sin(deg * D2R)];
  const uR = u(-62), uIn = u(-150), uOut = u(aOut);
  const signs = Array.from({ length: n }, (_, i): P => add(Cs, u((360 / n) * i + 90), R));
  return { uR, uIn, uOut, signs, outer: [add(Cs, uOut, 4), add(Cs, uOut, rOut)] as [P, P] };
};
/** The field arrows round the outer Gaussian sphere, each [from, to]. */
const arrows112 = (): [P, P][] => {
  const { Cs, rOut, arrows, E } = G112;
  return Array.from({ length: arrows }, (_, i): [P, P] => { const t = (15 + (360 / arrows) * i) * D2R, u: P = [Math.cos(t), Math.sin(t)]; return [add(Cs, u, rOut + 3), add(Cs, u, rOut + 3 + E)]; });
};
/** The field of a uniformly charged thin shell (k = 1, Q = 1) at distance d from its centre, summed over rings. */
function shellSum(R: number, d: number) {
  return simpson((t) => { const z = d - R * Math.cos(t), s = Math.hypot(R * Math.sin(t), z); return (0.5 * Math.sin(t) * z) / s ** 3; }, 0, Math.PI, 20000);
}
const fig112: Diagram = {
  id: 'p12-01-fig-1.12',
  topic: 4,
  name: 'Gauss’s law: spherical shell',
  cases: [{ chip: 'Spherical shell', cap: 'Uniformly charged thin spherical shell (charge <i>Q</i>, radius <i>R</i>) with two concentric Gaussian spheres. Outside (<i>r</i> > <i>R</i>) <i>E</i> = <i>Q</i>/(4πε<sub>0</sub><i>r</i><sup>2</sup>), radially outward; inside (<i>r</i> < <i>R</i>) no charge is enclosed, so <i>E</i> = 0.' }],
  draw() {
    const s = new Sketch(W, 452);
    const { Cs, R, rIn, rOut } = G112;
    // the Gaussian spheres
    ring(s, Cs, rOut, { w: 1.8, dash: 'dash' });
    ring(s, Cs, rIn, { color: C.slate, w: 1.6, dash: 'dash' });
    // the field outside: radial, the same all round
    arrows112().forEach(([a, b]) => arrow(s, a, b, { w: 2 }));
    // the shell and its charge
    ring(s, Cs, R, { color: C.mari, w: 3 });
    const rd = radii112(), { uR, uIn, uOut } = rd;
    rd.signs.forEach((c) => sign(s, c, true));
    s.dot(Cs[0], Cs[1], 3);
    // the radii, each from the centre
    path(s, [add(Cs, uR, 4), add(Cs, uR, R - 8)], { color: C.amber, w: 1.3 });
    path(s, [add(Cs, uIn, 4), add(Cs, uIn, rIn)], { color: C.slate, w: 1.3 });
    path(s, rd.outer, { w: 1.3 });
    s.sym(Cs[0] + 56 * Math.cos(-48 * D2R), Cs[1] + 56 * Math.sin(-48 * D2R) + 5, '<i>R</i>', { size: 15, color: C.amber });
    s.sym(Cs[0] + 0.6 * rIn * uIn[0] - 4, Cs[1] + 0.6 * rIn * uIn[1] + 18, '<i>r</i>', { size: 15, color: C.slate });
    s.sym(Cs[0] + 0.78 * rOut * uOut[0] + 4, Cs[1] + 0.78 * rOut * uOut[1] + 22, '<i>r</i>', { size: 15 });
    s.sym(Cs[0] - 4, Cs[1] + 22, '<i>E</i> = 0', { size: 13.5, color: C.slate });
    s.sym(W / 2, 18, 'shell: charge <i>Q</i>, radius <i>R</i>', { size: 14, color: C.amber });
    s.sym(12, 372, 'outer Gaussian sphere (radius <i>r</i> > <i>R</i>):', { size: 13.5, anchor: 'start' });
    s.sym(28, 391, '<i>E</i> = <i>Q</i>/(4πε<sub>0</sub><i>r</i><sup>2</sup>), outward', { size: 13.5, anchor: 'start' });
    s.sym(12, 417, 'inner Gaussian sphere (radius <i>r</i> < <i>R</i>):', { size: 13.5, anchor: 'start', color: C.slate });
    s.sym(28, 436, '<i>E</i> = 0, no enclosed charge', { size: 13.5, anchor: 'start', color: C.slate });
    s.place([
      { t: 'Charged shell', hi: true, ring: [Cs[0], Cs[1], R], at: [[4, 40, 'start'], [4, 44, 'start']] },
    ]);
    return s;
  },
  check() {
    const { Cs, R, rIn, rOut, E } = G112, ar = arrows112(), rd = radii112(), [o0, o1] = rd.outer;
    const Q = 1e-9, Rm = 0.1;
    const signGap = Math.min(...rd.signs.map((c) => near(c, o0, o1)));
    const inside = [0.2, 0.5, 0.9].map((f) => shellSum(1, f));
    const outside = [1.2, 2, 5].map((f) => shellSum(1, f) * f * f);
    return [
      [`The inner Gaussian sphere (r = ${rIn} px) is inside the shell (R = ${R} px), the outer (r = ${rOut} px) outside it, all concentric`, rIn < R && R < rOut],
      [`The outer r is a radius: it starts at the centre (${fmt(len(Cs, o0), 1)} px from the centre dot), runs straight out and ends on the outer Gaussian sphere, ${fmt(len(Cs, o1), 1)} px = r from the centre`, collinear(Cs, o0, o1) && len(Cs, o0) <= 4 + 1e-9 && dotp(sub(o0, Cs), sub(o1, Cs)) > 0 && close(len(Cs, o1), rOut, 1e-9)],
      [`It crosses the shell between two + signs, ${fmt(signGap, 1)} px from the nearest sign's centre (each sign is 5.5 px in radius)`, signGap >= 5.5 + 2],
      ['Inside: Q_enc = 0, so E·4πr² = 0 and E = 0. Coulomb summed over the shell agrees: zero at 0.2R, 0.5R and 0.9R', inside.every((e) => Math.abs(e) < 1e-9)],
      ['Outside: Q_enc = Q, so E·4πr² = Q/ε₀ and E = Q/(4πε₀r²). Coulomb summed over the shell agrees (at 1.2R, 2R, 5R): it acts as a point charge at the centre', outside.every((e) => rel(e, 1, 1e-6))],
      ['Every arrow on the outer sphere points radially outward (Q > 0) and all are the same length: spherical symmetry', ar.every(([a, b]) => close(dotp(unit(sub(b, a)), unit(sub(a, Cs))), 1, 1e-12) && close(len(a, b), E))],
      [`For 1 nC on a 10 cm shell, kQ/R² = ${fmt((K * Q) / Rm ** 2, 0)} N/C at the surface`, close((K * Q) / Rm ** 2, 900, 1e-9)],
      [`The field jumps from 0 to Q/(4πε₀R²) as r crosses R: at 0.99R ${fmt(Math.abs(shellSum(1, 0.99)), 4)}, at 1.01R ${fmt(shellSum(1, 1.01), 4)} (in kQ/R²)`, Math.abs(shellSum(1, 0.99)) < 1e-6 && rel(shellSum(1, 1.01), 1 / 1.01 ** 2, 1e-4)],
      clearCheck(fig112.draw(fig112.cases[0])),
    ];
  },
};

/* ===================================================================== */
/* Figure 1.13 · two parallel sheets, +σ and −σ (topic 05)                 */
/* ===================================================================== */
/** The sheets' x and ends; E₀ (one sheet alone) in px; the rows of the +σ, −σ and net arrows. */
const S113 = { xp: 122, xm: 218, y0: 70, y1: 250, E0: 40, plusRow: 103, minusRow: 179, netRow: 141 };
/** Each sheet's field in each region as a drawn arrow [from, to]: E₀ away from +σ, toward −σ. */
const regions113 = () => {
  const { xp, xm, E0, plusRow, minusRow } = S113, xs = [xp - 54, (xp + xm) / 2, xm + 54];
  return xs.map((x) => {
    const plus = x < xp ? -1 : 1, minus = x < xm ? 1 : -1;
    return { x, plus: [[x - (plus * E0) / 2, plusRow], [x + (plus * E0) / 2, plusRow]] as [P, P], minus: [[x - (minus * E0) / 2, minusRow], [x + (minus * E0) / 2, minusRow]] as [P, P] };
  });
};
const net113 = (): [P, P] => { const xc = (S113.xp + S113.xm) / 2; return [[xc - S113.E0, S113.netRow], [xc + S113.E0, S113.netRow]]; };
const fig113: Diagram = {
  id: 'p12-01-fig-1.13',
  topic: 4,
  name: 'Two parallel sheets',
  cases: [{ chip: 'Sheets +σ, −σ', cap: 'Two large parallel sheets carrying +<i>σ</i> and −<i>σ</i>. Each alone gives <i>E</i><sub>0</sub> = <i>σ</i>/(2ε<sub>0</sub>). Between the sheets the contributions add to <i>σ</i>/ε<sub>0</sub>, directed from + to −; outside they cancel to zero.' }],
  draw() {
    const s = new Sketch(W, 344);
    const { xp, xm, y0, y1 } = S113, xc = (xp + xm) / 2;
    path(s, [[xp, y0], [xp, y1]], { w: 2.4 });
    path(s, [[xm, y0], [xm, y1]], { w: 2.4 });
    for (let y = y0 + 14; y < y1 - 4; y += 38) { sign(s, [xp, y], true); sign(s, [xm, y], false); }
    s.sym(xp, y0 - 12, '+<i>σ</i>', { size: 16 });
    s.sym(xm, y0 - 12, '−<i>σ</i>', { size: 16 });
    s.sym(xp - 64, 30, 'Region I', { size: 14, color: C.slate });
    s.sym(xc, 30, 'Region II', { size: 14, color: C.slate });
    s.sym(xm + 64, 30, 'Region III', { size: 14, color: C.slate });
    // each sheet's field, region by region: solid from +σ, dashed from −σ
    regions113().forEach((g) => {
      arrow(s, g.plus[0], g.plus[1], { w: 1.9 });
      arrow(s, g.minus[0], g.minus[1], { color: C.slate, w: 1.9, dash: true });
    });
    // the net field between
    const nt = net113();
    arrow(s, nt[0], nt[1], { color: C.mari, w: 3.2 });
    s.sym(xp - 64, 282, '<i>E</i> = 0', { size: 15 });
    s.sym(xc, 282, '<i>E</i> = <i>σ</i>/ε<sub>0</sub>,', { size: 15, color: C.amber });
    s.sym(xc, 300, 'left to right', { size: 14, color: C.amber });
    s.sym(xm + 64, 282, '<i>E</i> = 0', { size: 15 });
    s.sym(W / 2, 324, 'each sheet alone gives <i>E</i><sub>0</sub> = <i>σ</i>/(2ε<sub>0</sub>);', { size: 13.5, color: C.slate });
    s.sym(W / 2, 341, 'solid: from +<i>σ</i>, dashed: from −<i>σ</i>', { size: 13.5, color: C.slate });
    return s;
  },
  check() {
    const { xp, xm, E0 } = S113, rg = regions113(), nt = net113();
    const dx = ([a, b]: [P, P]) => b[0] - a[0];
    const net = rg.map((g) => dx(g.plus) + dx(g.minus));
    const sig = 1e-6, E0v = sig / (2 * EPS0);
    return [
      ['From +σ alone: E₀ away from the sheet (left in Region I, right in II and III)', rg.every((g) => Math.sign(dx(g.plus)) === Math.sign(g.x - xp))],
      ['From −σ alone: E₀ toward the sheet (right in I and II, left in III)', rg.every((g) => Math.sign(dx(g.minus)) === Math.sign(xm - g.x))],
      [`Every single-sheet arrow is E₀ = ${E0} px long: an infinite sheet’s field does not depend on distance`, rg.every((g) => close(Math.abs(dx(g.plus)), E0) && close(Math.abs(dx(g.minus)), E0))],
      [`Superposed, read from the drawn arrows: Region I ${fmt(net[0], 1)}, Region II ${fmt(net[1], 1)} px, Region III ${fmt(net[2], 1)}`, close(net[0], 0) && close(net[2], 0) && close(net[1], 2 * E0)],
      [`The net arrow between the sheets is 2E₀ = ${fmt(dx(nt), 1)} px, from + to −`, close(dx(nt), net[1]) && nt[0][0] > xp && nt[1][0] < xm],
      [`2E₀ = σ/ε₀: ${sci(2 * E0v, 3)} N/C for σ = 1 µC/m²`, rel(2 * E0v, sig / EPS0, 1e-12)],
      clearCheck(fig113.draw(fig113.cases[0])),
    ];
  },
};

export const DIAGRAMS_PHYSICS_12_01: Diagram[] = [fig11, fig12, fig13, fig14, fig15, fig16, fig17, fig18, fig19, fig110, fig111, fig112, fig113];
