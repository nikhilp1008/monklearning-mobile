import { C, LABEL_GAP, Rect, Sketch, crosses, mathW, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * PHYSICS CLASS 12, CHAPTER 10 (Wave Optics), second half: Figures 10.6–10.12
 * of the Master Reference book, redrawn. Each figure is printed on a "CHAPTER
 * 10 · FIGURES" page (10.6 p. 670, 10.7 p. 673, 10.8 p. 681, 10.9 p. 683, 10.10
 * p. 692, 10.11 p. 694, 10.12 p. 696), the first copy of its caption a page
 * earlier where the text refers to it. Topics 04–06 and the Supplement
 * (Additional topics A–E, pp. 701–713) have no unnumbered drawings: pp. 669–713
 * were checked page by page; the rest is prose, typeset equations, boxed
 * answers and tables (the interference/diffraction comparison tables on
 * p. 684 and the half-wave-loss table on p. 701).
 *
 * Every figure is computed from the physics, never placed by eye: the film's
 * rays from Snell's law (sin i = n sin r) and the law of reflection, with D the
 * foot of the perpendicular from C; the single-slit pattern from
 * I = I₀ (sin β/β)², β = πa sin θ/λ, its minima at a sin θ = mλ; the half-slit
 * pairing at (a/2) sin θ = λ/2; the polaroids in an oblique 3D projection, the
 * E-vectors' lengths from the intensities (I ∝ E²), Malus's law at the
 * analyser; Brewster's angle from tan i_B = n and the refracted ray from
 * Snell's law. Each `check` recomputes what the figure and its caption state
 * and measures that no label or tag touches a line it does not name.
 */

const W = 340;
type P = [number, number];
type V3 = [number, number, number];
const D2R = Math.PI / 180;
const close = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) < tol;
const fmt = (n: number, d = 2) => String(+n.toFixed(d)).replace('-', '−');
const len = (a: P, b: P) => Math.hypot(b[0] - a[0], b[1] - a[1]);
const add = (a: P, b: P, k = 1): P => [a[0] + k * b[0], a[1] + k * b[1]];
const sub = (a: P, b: P): P => [a[0] - b[0], a[1] - b[1]];
const dotp = (a: P, b: P) => a[0] * b[0] + a[1] * b[1];
const unit = (a: P): P => { const l = Math.hypot(a[0], a[1]); return [a[0] / l, a[1] / l]; };
const neg = (a: P): P => [-a[0], -a[1]];
const samples = (a: number, b: number, n = 400) => Array.from({ length: n + 1 }, (_, i) => a + ((b - a) * i) / n);
/** The point at distance R from c, at the maths angle `deg` (anticlockwise from +x, y up). */
const polar = (c: P, R: number, deg: number): P => [c[0] + R * Math.cos(deg * D2R), c[1] - R * Math.sin(deg * D2R)];
const toDeg = (rad: number) => rad / D2R;
const dot3 = (a: V3, b: V3) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const norm3 = (a: V3) => Math.hypot(a[0], a[1], a[2]);
const cross3 = (a: V3, b: V3): V3 => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];

/* ---------- drawing helpers (as in physics-12-08.ts and physics-12-04.ts) ---------- */
type Stroke = { color?: string; w?: number; dash?: 'dash' | 'dot'; free?: boolean };
const dashOf = (d?: Stroke['dash']) => (d === 'dash' ? ' stroke-dasharray="6 4"' : d === 'dot' ? ' stroke-dasharray="1.5 3.5"' : '');

/**
 * Every line a label must keep clear of (outlines, rays, curves, arrows), by
 * sketch: `clearance` measures each tag and label against them.
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
/** Every arrowhead drawn, by sketch, as its tip and its middle: a tag's dot keeps off them (`dotsOffHeads`). */
const HEADS = new WeakMap<Sketch, [P, P][]>();
const keepHead = (s: Sketch, tip: P, u: P, L: number) => HEADS.set(s, [...(HEADS.get(s) ?? []), [tip, add(tip, u, -L / 2)]]);
/** An arrow that labels keep clear of. */
function arrow(s: Sketch, a: P, b: P, o: { color?: string; w?: number; dash?: boolean } = {}) {
  s.vec(a[0], a[1], b[0], b[1], o);
  keep(s, [a, b]);
  keepHead(s, b, unit(sub(b, a)), 9);
}
/** A small arrowhead with its tip at p, pointing along the unit direction u. */
function head(s: Sketch, p: P, u: P, color: string = C.ink, L = 9, hw = 4.5) {
  const b = add(p, u, -L), nv: P = [-u[1], u[0]];
  const tri: P[] = [p, add(b, nv, hw), add(b, nv, -hw)];
  s.add(`<path d="M${tri.map((q) => `${r1(q[0])} ${r1(q[1])}`).join(' L')} Z" fill="${color}"/>`);
  keep(s, [...tri, tri[0]]);
  keepHead(s, p, u, L);
}
/** A ray from a to b, with its arrowhead a little past the middle (as the book draws rays). */
function ray(s: Sketch, a: P, b: P, o: { color?: string; w?: number; at?: number } = {}) {
  path(s, [a, b], { color: o.color, w: o.w ?? 1.8 });
  head(s, add(a, sub(b, a), o.at ?? 0.58), unit(sub(b, a)), o.color ?? C.ink, 9, 4.5);
}
/** A double-headed arrow from a to b (an oscillating E-vector, a dimension). */
function dbl(s: Sketch, a: P, b: P, color: string = C.ink, w = 1.8, L = 7, hw = 3.6) {
  const u = unit(sub(b, a));
  path(s, [add(a, u, 2), add(b, u, -2)], { color, w });
  head(s, b, u, color, L, hw);
  head(s, a, neg(u), color, L, hw);
}
/** A measured length with an arrowhead at each end. */
function measure(s: Sketch, a: P, b: P, color: string = C.slate) {
  const m: P = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
  arrow(s, m, a, { color, w: 1.3 });
  arrow(s, m, b, { color, w: 1.3 });
}
/** The points of an arc about c, radius R, from maths angle a0 to a1 (degrees). */
const arcPts = (c: P, R: number, a0: number, a1: number, n = 60): P[] => samples(a0, a1, n).map((a) => polar(c, R, a));
/**
 * A dotted guide, free of the clearance check (it only joins marks), but
 * never through a label or a tag. See `guideHits`.
 */
const GUIDES = new WeakMap<Sketch, [P, P][]>();
const guide = (s: Sketch, a: P, b: P, color: string = C.slate, dash: 'dot' | 'dash' = 'dot') => {
  GUIDES.set(s, [...(GUIDES.get(s) ?? []), [a, b]]);
  path(s, [a, b], { color, w: dash === 'dot' ? 1.3 : 1.1, dash, free: true });
};
/** A right-angle mark at a corner whose two sides run along the unit directions u and v. */
const rightMark = (s: Sketch, at: P, u: P, v: P, k = 7, color: string = C.slate) => path(s, [add(at, u, k), add(add(at, u, k), v, k), add(at, v, k)], { color, w: 1.1 });
/** Out of the page: a ring with a dot in it, registered as a point (tags keep off it) and kept (labels keep off it). */
function outMark(s: Sketch, c: P, r = 5, color: string = C.ink) {
  s.point(c[0], c[1], r, `<circle cx="${r1(c[0])}" cy="${r1(c[1])}" r="${r}" fill="#fff" stroke="${color}" stroke-width="1.5"/><circle cx="${r1(c[0])}" cy="${r1(c[1])}" r="${r1(r * 0.34)}" fill="${color}"/>`);
  keep(s, arcPts(c, r, 0, 360, 24));
}
/** Distance from a point to a rectangle (0 inside it). */
const rectDist = (r: Rect, p: P) => Math.hypot(Math.max(r[0] - p[0], 0, p[0] - r[2]), Math.max(r[1] - p[1], 0, p[1] - r[3]));
/** How far every tag (pill and result block) and every label stays from every kept line, sampled each half pixel. */
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
/** Labels clear of the lines, and no dotted guide through a label. */
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
 * The result (what the figure states), bottom right, ink-edged, maths set in
 * STIX (Sketch.text). Registered as a tag, so the audit keeps everything else
 * off it. `align: 'start'` sets the lines flush left (a derivation).
 */
function resultBlock(s: Sketch, lines: string[], o: { size?: number; align?: 'middle' | 'start' } = {}): Rect {
  const size = o.size ?? 15, lh = size + 6;
  const plain = (t: string) => t.replace(/<\/?(?:i|sub|sup)>/g, '');
  const w = Math.max(...lines.map((t) => mathW(t, size))) + 30, h = lines.length * lh + 14;
  const x0 = s.w - 8 - w, y0 = s.h - 8 - h;
  s.tags.push({ name: plain(lines.join(' ')), rect: [x0, y0, x0 + w, y0 + h], from: null, to: null });
  s.add(`<rect x="${r1(x0)}" y="${r1(y0)}" width="${r1(w)}" height="${r1(h)}" rx="15" fill="#fff" stroke="${C.text}" stroke-width="1.6"/>`);
  lines.forEach((t, i) => {
    const y = y0 + 7 + lh * i + lh / 2 + size * 0.36;
    if (o.align === 'start') s.text(x0 + 15, y, t, { size, semibold: true, anchor: 'start' });
    else s.text(x0 + w / 2, y, t, { size, semibold: true });
  });
  return [x0, y0, x0 + w, y0 + h];
}
/** A region's name, in a tag with no line (it names the region it sits in), with the region's symbol after it. */
function region(s: Sketch, x: number, y: number, name: string, symbol?: string) {
  s.tag(x, y, name, null, null);
  if (symbol) s.sym(x + (name.length * 12 * 0.56 + 20) + 6, y + 16, symbol, { size: 14, anchor: 'start', color: C.slate });
}

/* ===================================================================== */
/* Figures 10.6 and 10.7 · the thin film (topic 04)                       */
/* ===================================================================== */
/**
 * A film of index n and thickness t, in air. The incident ray meets the top
 * surface at A at angle i; ray 1 reflects there (angle of reflection i); the
 * rest refracts at r (sin i = n sin r), reflects at B on the bottom surface
 * (so AB = BC = t/cos r) and leaves at C parallel to ray 1 (ray 2). D is the
 * foot of the perpendicular from C onto ray 1, so AD = AC sin i. Drawn to
 * scale in pixels with the stated i and n (the book gives no values; its own
 * drawing measures i ≈ 40° and 45°, n ≈ 1.5).
 */
type Film = { i: number; n: number; A: P; t: number; r: number; B: P; C: P; D: P; up: P; down: P };
function film(i: number, n: number, A: P, t: number): Film {
  const ir = i * D2R, r = Math.asin(Math.sin(ir) / n);
  const B: P = [A[0] + t * Math.tan(r), A[1] + t], Cp: P = [A[0] + 2 * t * Math.tan(r), A[1]];
  const up: P = [Math.sin(ir), -Math.cos(ir)], down: P = [Math.sin(ir), Math.cos(ir)];
  return { i, n, A, t, r, B, C: Cp, D: add(A, up, dotp(sub(Cp, A), up)), up, down };
}
/** The film's physics, recomputed from the drawn points (px). */
function filmChecks(f: Film, inc: [P, P], ray1: [P, P], ray2: [P, P]): Check[] {
  const AB = len(f.A, f.B), BC = len(f.B, f.C), AC = len(f.A, f.C), AD = len(f.A, f.D), ir = f.i * D2R;
  const rIn = Math.atan2(f.B[0] - f.A[0], f.B[1] - f.A[1]);
  const dIn = unit(sub(inc[1], inc[0])), d1 = unit(sub(ray1[1], ray1[0])), d2 = unit(sub(ray2[1], ray2[0]));
  const iIn = Math.atan2(dIn[0], dIn[1]), iOut = Math.atan2(d1[0], -d1[1]);
  const delta = f.n * (AB + BC) - AD, want = 2 * f.n * f.t * Math.cos(f.r);
  return [
    [`The incident ray meets A at i = ${fmt(toDeg(iIn), 2)}° and ray 1 leaves at ${fmt(toDeg(iOut), 2)}° (angle of reflection = angle of incidence)`, close(iIn, ir, 1e-9) && close(iOut, ir, 1e-9) && close(len(inc[1], f.A), 0) && close(len(ray1[0], f.A), 0)],
    [`Snell at A: sin i = ${fmt(Math.sin(ir), 4)} = n sin r = ${f.n} × sin ${fmt(toDeg(rIn), 2)}° (r = ${fmt(toDeg(f.r), 2)}°)`, close(Math.sin(ir), f.n * Math.sin(rIn), 1e-9)],
    [`AB = BC = t/cos r = ${fmt(f.t / Math.cos(f.r), 2)} px (drawn ${fmt(AB, 2)} and ${fmt(BC, 2)}): B on the bottom surface, C back on the top one`, close(AB, f.t / Math.cos(f.r), 1e-9) && close(BC, AB, 1e-9) && close(f.B[1] - f.A[1], f.t) && close(f.C[1], f.A[1])],
    ['Ray 2 leaves C parallel to ray 1', close(len(ray2[0], f.C), 0) && close(dotp(d1, d2), 1, 1e-12)],
    [`CD ⟂ ray 1, D the foot of the perpendicular from C (CD · ray 1 = ${fmt(dotp(sub(f.C, f.D), d1), 9)}), D on ray 1 as drawn`, close(dotp(sub(f.C, f.D), d1), 0, 1e-9) && len(f.A, f.D) < len(ray1[0], ray1[1]) - 8],
    [`AD = AC sin i = 2t tan r sin i = ${fmt(AC * Math.sin(ir), 2)} px (drawn ${fmt(AD, 2)})`, close(AD, AC * Math.sin(ir), 1e-9) && close(AC, 2 * f.t * Math.tan(f.r), 1e-9)],
    [`Δ = n(AB + BC) − AD = ${fmt(delta, 3)} px = 2nt cos r = ${fmt(want, 3)} px`, close(delta, want, 1e-9)],
  ];
}
/** Worked example 1 of Topic 04 (p. 674): soap film n = 1.33, bright in reflection for 532 nm: t_min = λ/(4n) = 100 nm. */
const tMinCheck = (): Check => {
  const t = 532e-9 / (4 * 1.33);
  return [`Worked example 1: t_min = λ/(4n) = 532 nm/(4 × 1.33) = ${fmt(t * 1e9, 2)} nm (the book's 100 nm, 1.0 × 10⁻⁷ m)`, close(t * 1e9, 100, 1e-9)];
};

const G106 = { i: 40, n: 1.5, A: [170, 116] as P, t: 90, L: 70, xT: 88 };
const fig106: Diagram = {
  id: 'p12-10-fig-10.6',
  topic: 3,
  name: 'Thin-film interference: path difference',
  cases: [{ chip: 'Path 2nt cos r', cap: 'A thin film of refractive index <i>n</i> and thickness <i>t</i>, in air. An incident ray strikes the top surface at <i>A</i>: part reflects (ray 1), part refracts into the film at angle <i>r</i>, travels to <i>B</i>, reflects up to <i>C</i> and refracts out (ray 2) parallel to ray 1. The optical path difference is 2<i>nt</i> cos <i>r</i>; the reflection at the top surface (air to denser film) adds a phase change of π (an extra path of <i>λ</i>/2).' }],
  draw() {
    const s = new Sketch(W, 310);
    const { i, n, A, t, L, xT } = G106, f = film(i, n, A, t);
    const y0 = A[1], y1 = A[1] + t;
    path(s, [[6, y0], [W - 6, y0]], { w: 2.2 });
    path(s, [[6, y1], [W - 6, y1]], { w: 2.2 });
    // the rays
    const inc: [P, P] = [add(A, f.down, -L), A], r1s: [P, P] = [A, add(A, f.up, L)], r2s: [P, P] = [f.C, add(f.C, f.up, L)];
    ray(s, ...inc);
    ray(s, ...r1s);
    ray(s, ...r2s);
    // the path in the film
    ray(s, A, f.B, { color: C.mari, w: 2.6, at: 0.62 });
    ray(s, f.B, f.C, { color: C.mari, w: 2.6, at: 0.62 });
    // CD, the perpendicular onto ray 1
    guide(s, f.C, f.D, C.ink);
    rightMark(s, f.D, unit(sub(f.C, f.D)), neg(f.up), 6);
    [A, f.B, f.C, f.D].forEach((p) => s.dot(p[0], p[1], 3));
    s.sym(A[0] - 9, A[1] + 21, '<i>A</i>', { size: 15 });
    s.sym(f.B[0], y1 + 19, '<i>B</i>', { size: 15 });
    s.sym(f.C[0] + 11, f.C[1] + 21, '<i>C</i>', { size: 15 });
    s.sym(f.D[0] - 11, f.D[1] + 3, '<i>D</i>', { size: 15, anchor: 'end' });
    s.sym(f.D[0] - 7, f.D[1] + 30, '<i>AD</i>', { size: 14, anchor: 'start' });
    s.sym(A[0] + 10, y0 + 50, '<i>AB</i> = <i>t</i>/cos <i>r</i>', { size: 14, anchor: 'end' });
    s.sym(f.C[0] - 9, y0 + 50, '<i>BC</i> = <i>t</i>/cos <i>r</i>', { size: 14, anchor: 'start' });
    // the thickness
    measure(s, [xT, y0 + 2], [xT, y1 - 2]);
    s.sym(xT - 8, (y0 + y1) / 2 + 5, '<i>t</i>', { size: 15, anchor: 'end' });
    // the media
    region(s, 4, y0 - 30, 'Air', '<i>n</i> = 1');
    region(s, 4, y0 + 12, 'Film', '(<i>n</i>)');
    region(s, 4, y1 + 8, 'Air', '<i>n</i> = 1');
    resultBlock(s, ['Optical path difference', 'Δ = <i>n</i>(<i>AB</i> + <i>BC</i>) − <i>AD</i> = 2<i>nt</i> cos <i>r</i>'], { size: 14 });
    s.place([
      { t: 'Top reflection', p: A, at: [[A[0], 8, 'middle'], [A[0], 4, 'middle']] },
      { t: 'Ray 1', p: r1s[1], at: [[r1s[1][0] + 8, 46, 'start'], [r1s[1][0] + 10, 40, 'start']] },
      { t: 'Ray 2', p: r2s[1], at: [[W - 4, 22, 'end'], [W - 4, 16, 'end']] },
      { t: 'Path in film', hi: true, p: add(f.B, sub(f.C, f.B), 0.22), at: [[f.B[0] + 16, y1 + 8, 'start'], [f.B[0] + 20, y1 + 10, 'start']] },
    ]);
    // "π phase change (extra path λ/2)" just before its tag, in two lines, where the book sets "λ/2 phase change (top reflection)"
    const tr = s.tags.find((tg) => tg.name === 'Top reflection');
    if (tr) {
      s.sym(tr.rect[0] - 6, tr.rect[1] + 16, 'π phase change', { size: 13, anchor: 'end' });
      s.sym(tr.rect[0] - 6, tr.rect[1] + 34, '(extra path <i>λ</i>/2)', { size: 13, anchor: 'end' });
    }
    return s;
  },
  check() {
    const { i, n, A, t, L } = G106, f = film(i, n, A, t);
    const s = fig106.draw(fig106.cases[0]);
    const tr = s.tags.find((tg) => tg.name === 'Top reflection'), ph = s.labels.find((l) => l.text === 'π phase change'), ep = s.labels.find((l) => l.text === '(extra path λ/2)');
    return [
      ...filmChecks(f, [add(A, f.down, -L), A], [A, add(A, f.up, L)], [f.C, add(f.C, f.up, L)]),
      ['The top surface (air to the denser film, n > 1) is where the phase change of π (an extra path of λ/2) is marked: the “Top reflection” tag names A, with “π phase change (extra path λ/2)” beside it', n > 1 && !!tr && !!tr.from && close(len(tr.from, A), 0) && !!ph && ph.rect[2] <= tr.rect[0] && !!ep && ep.rect[2] <= tr.rect[0]],
      tMinCheck(),
      ...layout(s),
    ];
  },
};

const G107 = { i: 45, n: 1.5, A: [150, 96] as P, t: 80, L: 92 };
const fig107: Diagram = {
  id: 'p12-10-fig-10.7',
  topic: 3,
  name: 'Deriving the path difference 2nt\u00a0cos\u00a0r',
  cases: [{ chip: 'Derivation', cap: 'Cross-section of a parallel film of thickness <i>t</i> and index <i>n</i>. The ray meets the top surface at <i>A</i> (angle <i>i</i>), refracts to angle <i>r</i>, reaches <i>B</i>, reflects to <i>C</i> and leaves parallel to the ray reflected at <i>A</i>. <i>CD</i> is the perpendicular from <i>C</i> onto that reflected ray. The optical path difference is <i>n</i>(<i>AB</i> + <i>BC</i>) − <i>AD</i>; with <i>AB</i> = <i>BC</i> = <i>t</i>/cos <i>r</i> and <i>AD</i> = <i>AC</i> sin <i>i</i> it reduces to 2<i>nt</i> cos <i>r</i>.' }],
  draw() {
    const s = new Sketch(W, 330);
    const { i, n, A, t, L } = G107, f = film(i, n, A, t);
    const y0 = A[1], y1 = A[1] + t;
    path(s, [[6, y0], [W - 6, y0]], { w: 2.2 });
    path(s, [[6, y1], [W - 6, y1]], { w: 2.2 });
    // the normal at A, and the angles i and r from it
    guide(s, [A[0], y0 - 50], [A[0], y0 + 46], C.slate, 'dash');
    path(s, arcPts(A, 24, 90, 90 + i), { color: C.slate, w: 1.3 });
    path(s, arcPts(A, 24, 270, 270 + toDeg(f.r)), { color: C.slate, w: 1.3 });
    const iAt = polar(A, 38, 90 + i / 2), rAt = polar(A, 46, 270 + toDeg(f.r) / 2);
    s.sym(iAt[0], iAt[1] + 5, '<i>i</i>', { size: 15 });
    s.sym(rAt[0] + 1, rAt[1] + 5, '<i>r</i>', { size: 15 });
    // the rays
    const inc: [P, P] = [add(A, f.down, -L), A], r1s: [P, P] = [A, add(A, f.up, L)], r2s: [P, P] = [f.C, add(f.C, f.up, L)];
    ray(s, ...inc);
    ray(s, ...r1s, { at: 0.4 });
    ray(s, ...r2s, { at: 0.6 });
    ray(s, A, f.B, { color: C.mari, w: 2.6, at: 0.8 });
    ray(s, f.B, f.C, { color: C.mari, w: 2.6, at: 0.62 });
    guide(s, f.C, f.D, C.ink);
    rightMark(s, f.D, unit(sub(f.C, f.D)), neg(f.up), 6);
    [A, f.B, f.C, f.D].forEach((p) => s.dot(p[0], p[1], 3));
    s.sym(A[0] - 10, A[1] + 21, '<i>A</i>', { size: 15 });
    s.sym(f.B[0], y1 + 19, '<i>B</i>', { size: 15 });
    s.sym(f.C[0] + 11, f.C[1] + 21, '<i>C</i>', { size: 15 });
    s.sym(f.D[0] - 13, f.D[1] + 3, '<i>D</i>', { size: 15, anchor: 'end' });
    s.sym((A[0] + f.C[0]) / 2 + 2, y0 + 19, '<i>AC</i>', { size: 14 });
    s.sym(A[0] - 6, y0 + 66, '<i>AB</i> = <i>t</i>/cos <i>r</i>', { size: 14, anchor: 'end' });
    s.sym(f.C[0] - 8, y0 + 50, '<i>BC</i> = <i>t</i>/cos <i>r</i>', { size: 14, anchor: 'start' });
    region(s, 4, y0 - 30, 'Air');
    region(s, 4, y0 + 12, 'Film', '(<i>n</i>)');
    resultBlock(s, [
      '<i>AB</i> + <i>BC</i> = 2<i>t</i>/cos <i>r</i>',
      'Optical path = 2<i>nt</i>/cos <i>r</i>',
      '<i>AD</i> = <i>AC</i> sin <i>i</i> = 2<i>t</i> tan <i>r</i> sin <i>i</i>',
      'Δ = 2<i>nt</i>/cos <i>r</i> − 2<i>t</i> tan <i>r</i> sin <i>i</i>',
      '\u00a0\u00a0\u00a0\u00a0= 2<i>nt</i> cos <i>r</i>\u00a0\u00a0 (∵ <i>n</i> sin <i>r</i> = sin <i>i</i>)',
    ], { size: 13, align: 'start' });
    s.place([
      { t: 'Path in film', hi: true, p: add(f.B, sub(f.C, f.B), 0.25), at: [[f.B[0] + 18, y1 + 8, 'start'], [f.B[0] + 22, y1 + 10, 'start']] },
    ]);
    return s;
  },
  check() {
    const { i, n, A, t, L } = G107, f = film(i, n, A, t), ir = i * D2R;
    const s = fig107.draw(fig107.cases[0]);
    // the box's lines, one by one, in the drawing's own numbers
    const AB = len(f.A, f.B), AC = len(f.A, f.C), AD = len(f.A, f.D);
    const l1 = close(2 * AB, (2 * t) / Math.cos(f.r), 1e-9);
    const l3 = close(AD, AC * Math.sin(ir), 1e-9) && close(AD, 2 * t * Math.tan(f.r) * Math.sin(ir), 1e-9);
    const l4 = (2 * n * t) / Math.cos(f.r) - 2 * t * Math.tan(f.r) * Math.sin(ir);
    return [
      ...filmChecks(f, [add(A, f.down, -L), A], [A, add(A, f.up, L)], [f.C, add(f.C, f.up, L)]),
      [`The box, line by line: AB + BC = 2t/cos r; AD = AC sin i = 2t tan r sin i; 2nt/cos r − 2t tan r sin i = ${fmt(l4, 3)} = 2nt cos r = ${fmt(2 * n * t * Math.cos(f.r), 3)} (px), using n sin r = sin i`, l1 && l3 && close(l4, 2 * n * t * Math.cos(f.r), 1e-9)],
      [`The angle i is marked from the normal to the incident ray (${i}°) and r from the normal to AB (${fmt(toDeg(f.r), 2)}°)`, close(Math.atan2(A[0] - add(A, f.down, -L)[0], A[1] - add(A, f.down, -L)[1]), ir, 1e-9) && close(Math.atan2(f.B[0] - A[0], f.B[1] - A[1]), f.r, 1e-9)],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* Figure 10.8 · single-slit Fraunhofer diffraction (topic 05)            */
/* ===================================================================== */
/**
 * A plane wavefront meets a slit of width a; rays leave the slit at angle θ
 * for a screen a distance D away. The intensity on the screen is
 * I = I₀ (sin β/β)², β = πa sin θ/λ, drawn against the screen at y = D tan θ,
 * between the first minima a sin θ = ±λ: the central maximum only, as the
 * book draws it (its secondary maxima, 4.7 % of I₀, "too faint to draw to
 * scale"). Drawn as a schematic: the slit is widened and the angle
 * exaggerated (λ/a = sin 12°) so it can be seen, small enough that
 * 2λD/a still gives the drawn width within 3 %.
 */
const G108 = { cy: 122, xb: 60, gap: 34, xs: 226, th1: 12, amp: 40, xw: 24, xm: 284 };
const sinc2 = (beta: number) => (Math.abs(beta) < 1e-12 ? 1 : (Math.sin(beta) / beta) ** 2);
const fig108: Diagram = {
  id: 'p12-10-fig-10.8',
  topic: 4,
  name: 'Single-slit diffraction',
  cases: [{ chip: 'Central maximum', cap: 'Single-slit diffraction. A plane wavefront falls on a slit of width <i>a</i>; rays diffract at angle <i>θ</i> towards a screen at distance <i>D</i>. The central maximum is wide and bright, with its first minima at <i>θ</i> = ±<i>λ</i>/<i>a</i>: its angular width is 2<i>λ</i>/<i>a</i> and its linear width 2<i>λD</i>/<i>a</i>. Weaker secondary maxima (too faint to draw to scale) lie beyond the first minima.' }],
  draw() {
    const s = new Sketch(W, 282);
    const { cy, xb, gap, xs, th1, amp, xw, xm } = G108, D = xs - xb, lamA = Math.sin(th1 * D2R), y1 = D * Math.tan(th1 * D2R);
    // the plane wavefront arriving
    path(s, [[xw, cy - 44], [xw, cy + 44]], { w: 2.2 });
    [-28, 0, 28].forEach((dy) => ray(s, [6, cy + dy], [xb - 6, cy + dy], { color: C.slate, w: 1.5, at: 0.75 }));
    // the barrier and its slit
    path(s, [[xb, cy - 74], [xb, cy - gap / 2]], { w: 3 });
    path(s, [[xb, cy + gap / 2], [xb, cy + 74]], { w: 3 });
    // the rays: straight on, and to the first minima
    const O: P = [xb, cy];
    [-th1, 0, th1].forEach((a) => ray(s, O, [xs, cy - D * Math.tan(a * D2R)], { w: 1.5, at: 0.5 }));
    // θ from the straight-through ray to the first minimum
    path(s, arcPts(O, 112, 0, th1), { color: C.slate, w: 1.3 });
    const thAt = polar(O, 136, th1 / 2);
    s.sym(thAt[0], thAt[1] + 5, '<i>θ</i>', { size: 15 });
    // the screen
    path(s, [[xs, cy - 74], [xs, cy + 74]], { w: 2.6 });
    // the intensity between the first minima, I = I₀ (sin β/β)², against y = D tan θ
    const curve = samples(-y1, y1, 240).map((y): P => {
      const th = Math.atan(y / D), beta = (Math.PI * Math.sin(th)) / lamA;
      return [xs + amp * sinc2(beta), cy - y];
    });
    path(s, curve, { color: C.mari, w: 2.6 });
    // the first minima, m = ±1
    s.dot(xs, cy - y1, 3.2);
    s.dot(xs, cy + y1, 3.2);
    s.sym(xs - 8, cy - y1 - 10, '<i>m</i> = 1', { size: 14, anchor: 'end' });
    s.sym(xs - 8, cy + y1 + 20, '<i>m</i> = −1', { size: 14, anchor: 'end' });
    measure(s, [xm, cy - y1], [xm, cy + y1]);
    s.sym(xm + 6, cy + 5, '2<i>λD</i>/<i>a</i>', { size: 14, anchor: 'start' });
    // the slit width a, a double arrow across the opening (edge to edge), and the distance D
    dbl(s, [xb, cy - gap / 2], [xb, cy + gap / 2], C.ink, 1.6, 7, 3.5);
    s.sym(xb - 8, cy - 8, '<i>a</i>', { size: 15, anchor: 'end' });
    measure(s, [xb + 2, cy + 90], [xs - 2, cy + 90]);
    guide(s, [xb, cy + 76], [xb, cy + 96]);
    guide(s, [xs, cy + 76], [xs, cy + 96]);
    s.sym((xb + xs) / 2, cy + 108, '<i>D</i>', { size: 15 });
    resultBlock(s, ['Angular width of central max = 2<i>λ</i>/<i>a</i>'], { size: 14 });
    s.place([
      { t: 'Plane wavefront', p: [xw, cy - 40], at: [[4, 8, 'start'], [4, 4, 'start']] },
      { t: 'Slit', p: [xb, cy], at: [[xb + 26, 40, 'start'], [xb + 30, 44, 'start']] },
      { t: 'Screen', p: [xs, cy - 66], at: [[xs - 18, 8, 'end'], [xs - 24, 8, 'end']] },
      { t: 'Central maximum', hi: true, p: curve[120], at: [[W - 2, 8, 'end'], [W - 2, 4, 'end']] },
    ]);
    return s;
  },
  check() {
    const { cy, xb, gap, xs, th1 } = G108, D = xs - xb, lamA = Math.sin(th1 * D2R), y1 = D * Math.tan(th1 * D2R);
    const s = fig108.draw(fig108.cases[0]);
    const slit = s.tags.find((tg) => tg.name === 'Slit'), aLab = s.labels.find((l) => l.text === 'a');
    const tips = (HEADS.get(s) ?? []).map(([tip]) => tip).filter((q) => close(q[0], xb, 1e-9) && close(Math.abs(q[1] - cy), gap / 2, 1e-9));
    const I = (th: number) => sinc2((Math.PI * Math.sin(th)) / lamA);
    // the first minimum, and the first secondary maximum, found on the curve itself
    const ths = samples(0, Math.asin(Math.min(1, 2.5 * lamA)), 20000);
    const firstMin = ths.find((th, k) => k > 0 && k < ths.length - 1 && I(th) <= I(ths[k - 1]) && I(th) < I(ths[k + 1]))!;
    const secMax = ths.filter((th) => th > firstMin).reduce((m, th) => (I(th) > I(m) ? th : m), firstMin);
    const small = (2 * lamA * D - 2 * y1) / (2 * y1);
    // worked example 1 (p. 685): λ = 600 nm, a = 0.2 mm, D = 1.5 m
    const th1Ex = 600e-9 / 0.2e-3, wEx = (2 * 600e-9 * 1.5) / 0.2e-3;
    return [
      [`The first minima fall where a sin θ = ±λ: the curve reaches zero at θ = ${fmt(toDeg(firstMin), 2)}° (sin θ = λ/a = ${fmt(lamA, 4)}), drawn on the screen at y = D tan θ = ±${fmt(y1, 1)} px, the points marked m = ±1`, close(firstMin, th1 * D2R, 1e-4) && I(th1 * D2R) < 1e-20],
      [`The central maximum is brightest at θ = 0 (I = I₀) and is the only lobe drawn: the first secondary maximum is ${fmt(100 * I(secMax), 2)} % of I₀ (≈ 4.7 %, too faint to draw to scale)`, I(0) === 1 && close(I(secMax), 0.0472, 2e-4)],
      [`Its angular width is 2θ₁ ≈ 2λ/a: ${fmt(2 * th1 * D2R, 4)} rad against 2λ/a = ${fmt(2 * lamA, 4)} (the small-angle form, within ${fmt(100 * (2 * th1 * D2R - 2 * lamA) / (2 * lamA), 1)} % at this exaggerated angle)`, (2 * th1 * D2R - 2 * lamA) / (2 * lamA) < 0.01],
      [`Its linear width on the screen, 2D tan θ₁ = ${fmt(2 * y1, 1)} px, matches 2λD/a = ${fmt(2 * lamA * D, 1)} px within ${fmt(Math.abs(small) * 100, 1)} % (the arrow marked 2λD/a spans the two minima)`, Math.abs(small) < 0.03],
      [`The rays to the minima leave the slit at ±θ₁ and meet the screen at the m = ±1 points`, close(D * Math.tan(th1 * D2R), y1)],
      [`The slit width a is a double arrow across the opening, its heads on the two edges of the barrier (${gap} px apart), with the label a beside it; the “Slit” tag names the opening itself (its dot at the middle of the gap, where the rays leave)`, tips.length === 2 && !!aLab && aLab.rect[2] < xb && xb - aLab.rect[2] <= 12 && aLab.rect[1] >= cy - gap / 2 - 4 && aLab.rect[3] <= cy && !!slit && !!slit.from && close(slit.from[0], xb) && Math.abs(slit.from[1] - cy) < gap / 2],
      [`Worked example 1: θ₁ = λ/a = ${fmt(th1Ex * 1e3, 2)} × 10⁻³ rad, central width 2λD/a = ${fmt(wEx * 1e3, 2)} mm (the book's 3 × 10⁻³ rad, 9 mm)`, close(th1Ex, 3e-3, 1e-12) && close(wEx, 9e-3, 1e-12)],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* Figure 10.9 · the half-slit pairing (topic 05)                         */
/* ===================================================================== */
/**
 * The slit's top edge T and its midpoint M, a/2 apart, send parallel rays at θ
 * (towards a distant screen). N is the foot of the perpendicular from T onto
 * M's ray, so MN = (a/2) sin θ is the path difference. θ is drawn where that
 * equals λ/2, the first minimum (a sin θ = λ): to scale, a = 120 px,
 * θ = 20°, so λ = a sin θ = 41 px.
 */
const G109 = { x: 136, yT: 100, a: 120, th: 20, L: 170 };
const fig109: Diagram = {
  id: 'p12-10-fig-10.9',
  topic: 4,
  name: 'Single-slit minimum: pairing half-slits',
  cases: [{ chip: 'First minimum', cap: 'The slit of width <i>a</i> is divided into two halves of width <i>a</i>/2. Two corresponding secondary sources, one at the top edge and one at the slit midpoint, send rays at angle <i>θ</i> to a distant screen; the path difference between them is (<i>a</i>/2) sin <i>θ</i>. Every point in the upper half pairs with a partner <i>a</i>/2 below it, so all pairs cancel when (<i>a</i>/2) sin <i>θ</i> = <i>λ</i>/2.' }],
  draw() {
    const s = new Sketch(W, 368);
    const { x, yT, a, th, L } = G109, T: P = [x, yT], M: P = [x, yT + a / 2], Bt: P = [x, yT + a];
    const u: P = [Math.cos(th * D2R), -Math.sin(th * D2R)], N = add(M, u, (a / 2) * Math.sin(th * D2R));
    // the slit: the barrier's edges, and its two halves, a/2 each, measured across the opening
    path(s, [[x, yT - 26], [x, yT]], { w: 3 });
    path(s, [[x, Bt[1]], [x, Bt[1] + 26]], { w: 3 });
    measure(s, [x, yT + 9], [x, M[1] - 9]);
    measure(s, [x, M[1] + 9], [x, Bt[1] - 9]);
    s.sym(x - 8, yT + a / 4 + 5, '<i>a</i>/2', { size: 14, anchor: 'end' });
    s.sym(x - 8, yT + (3 * a) / 4 + 5, '<i>a</i>/2', { size: 14, anchor: 'end' });
    // the normal at T, and θ from it
    guide(s, T, [x + 150, yT], C.slate, 'dash');
    path(s, arcPts(T, 130, 0, th), { color: C.slate, w: 1.3 });
    const thAt = polar(T, 148, th / 2);
    s.sym(thAt[0], thAt[1] + 5, '<i>θ</i>', { size: 15 });
    // the two rays, parallel
    ray(s, T, add(T, u, L), { at: 0.45 });
    ray(s, M, add(M, u, L + 6), { at: 0.45 });
    // the perpendicular TN and the path difference MN
    guide(s, T, N, C.ink);
    rightMark(s, N, unit(sub(T, N)), neg(u), 6);
    path(s, [M, N], { color: C.mari, w: 4 });
    s.dot(T[0], T[1], 3.2);
    s.dot(M[0], M[1], 3.2);
    s.sym(N[0] + 8, N[1] - 14, '<i>N</i>', { size: 15, anchor: 'start' });
    // "Slit width a" above the slit, as the book sets it (it names the whole opening, not one point)
    const swW = 'Slit width'.length * 12 * 0.56 + 20;
    s.tag(x, yT - 62, 'Slit width', null, null, { anchor: 'middle' });
    s.sym(x + swW / 2 + 5, yT - 46, '<i>a</i>', { size: 15, anchor: 'start' });
    resultBlock(s, ['Pair every point in upper half', 'with point <i>a</i>/2 below it.', 'If (<i>a</i>/2) sin <i>θ</i> = <i>λ</i>/2,', 'each pair cancels ⇒ minimum.'], { size: 14 });
    s.place([
      { t: 'Top edge', p: T, at: [[4, yT - 30, 'start'], [4, yT - 26, 'start']] },
      { t: 'Midpoint', p: M, at: [[4, M[1] + 8, 'start'], [4, M[1] + 12, 'start']] },
      { t: 'Path difference', hi: true, p: add(M, u, (a / 4) * Math.sin(th * D2R)), at: [[x + 26, M[1] + 22, 'start'], [x + 30, M[1] + 26, 'start']] },
      { t: 'To distant screen', p: add(T, u, L), at: [[W - 4, 4, 'end'], [W - 4, 2, 'end']] },
    ]);
    // the path difference's value under its tag; the slit's width after its tag
    const pd = s.tags.find((tg) => tg.name === 'Path difference');
    if (pd) s.sym(pd.rect[0] + 6, pd.rect[3] + 20, '(<i>a</i>/2) sin <i>θ</i>', { size: 15, anchor: 'start', color: C.amber });
    return s;
  },
  check() {
    const { x, yT, a, th, L } = G109, T: P = [x, yT], M: P = [x, yT + a / 2], thr = th * D2R;
    const u: P = [Math.cos(thr), -Math.sin(thr)], N = add(M, u, (a / 2) * Math.sin(thr));
    const s = fig109.draw(fig109.cases[0]);
    const lam = a * Math.sin(thr);
    // every pair (y, y − a/2) of the upper and lower halves: the phase between them, and the sum over the whole slit
    const k = (2 * Math.PI) / lam, ys = samples(0, a, 4000).slice(0, -1).map((y) => y + a / 8000);
    const re = ys.reduce((sm, y) => sm + Math.cos(k * y * Math.sin(thr)), 0), im = ys.reduce((sm, y) => sm + Math.sin(k * y * Math.sin(thr)), 0);
    const pairs = samples(0, a / 2, 50).every((y) => close(Math.cos(k * (y + a / 2) * Math.sin(thr)) + Math.cos(k * y * Math.sin(thr)), 0, 1e-9));
    return [
      [`T and M are a/2 = ${a / 2} px apart; the two rays leave them parallel, at θ = ${th}° to the slit's normal`, close(len(T, M), a / 2) && close(Math.atan2(-u[1], u[0]), thr)],
      [`TN ⟂ the rays (TN · ray = ${fmt(dotp(sub(N, T), u), 9)}): N is the foot of the perpendicular from T`, close(dotp(sub(N, T), u), 0, 1e-9)],
      [`MN = (a/2) sin θ = ${fmt((a / 2) * Math.sin(thr), 2)} px (drawn ${fmt(len(M, N), 2)} px): M's ray travels that much farther`, close(len(M, N), (a / 2) * Math.sin(thr), 1e-9)],
      [`θ is drawn where (a/2) sin θ = λ/2, i.e. a sin θ = λ (m = 1): λ = ${fmt(lam, 2)} px`, close((a / 2) * Math.sin(thr), lam / 2, 1e-9)],
      ['Every point in the upper half and its partner a/2 below it are then λ/2 apart, half a cycle: each pair cancels', pairs],
      [`So the whole slit sums to zero: |Σ e^{ik y sin θ}| = ${fmt(Math.hypot(re, im) / ys.length, 6)} of its value at θ = 0 (a minimum)`, Math.hypot(re, im) / ys.length < 1e-6],
      [`The rays run towards the distant screen, parallel, ${L} px long, inside the frame`, add(T, u, L)[0] <= W - 4 && add(M, u, L + 6)[0] <= W - 4],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* Figure 10.10 · two polaroids, Malus's law (topic 06)                   */
/* ===================================================================== */
/**
 * A cabinet projection seen along the light: the light travels along x, drawn
 * receding into the page up to the right; z is up and y to the left (so x, y, z
 * are right-handed with x into the page). The polaroids are squares in y–z
 * planes, seen face-on, so the angle θ between the analyser's pass axis and
 * the vertical is drawn true. The E-vectors are double arrows in the
 * transverse plane whose lengths follow the intensities (E ∝ √I): unpolarised
 * light as arrows in all transverse directions (length E₀, intensity I₀),
 * vertically polarised after the polariser (E₀/√2: I₀/2), along the
 * analyser's axis after it ((E₀/√2) cos θ: (I₀/2) cos² θ).
 */
const G1010 = { O: [30, 180] as P, X: [0.95, -0.3] as P, Y: [-1, 0] as P, Z: [0, -1] as P, h: 48, xs: 0, x1: 80, xm: 152, x2: 226, xo: 294, E0: 24, th: 40 };
const pj = (q: V3): P => { const { O, X, Y, Z } = G1010; return [O[0] + q[0] * X[0] + q[1] * Y[0] + q[2] * Z[0], O[1] + q[0] * X[1] + q[1] * Y[1] + q[2] * Z[1]]; };
/** A transverse direction at angle φ (degrees) from the vertical, turning towards −y (to the right on the page). */
const tdir = (phi: number): V3 => [0, -Math.sin(phi * D2R), Math.cos(phi * D2R)];
const at3 = (x: number, d: V3, k: number): V3 => [x + k * d[0], k * d[1], k * d[2]];
const STAR = [0, 45, 90, 135];
const fig1010: Diagram = {
  id: 'p12-10-fig-10.10',
  topic: 5,
  name: "Two polaroids: Malus's law",
  cases: [{ chip: 'Polariser, analyser', cap: 'Unpolarised light (arrows in all transverse directions) falls on Polaroid 1, whose pass axis is vertical; it emerges vertically plane-polarised with intensity <i>I</i><sub>0</sub>/2. It then meets Polaroid 2 (the analyser), whose pass axis makes angle <i>θ</i> with the vertical, and the transmitted intensity is <i>I</i> = (<i>I</i><sub>0</sub>/2) cos<sup>2</sup> <i>θ</i>. For crossed polaroids (<i>θ</i> = 90°) the output is zero.' }],
  draw() {
    const s = new Sketch(W, 330);
    const { h, xs, x1, xm, x2, xo, E0, th } = G1010;
    // the light's line
    arrow(s, pj([xs - 14, 0, 0]), pj([xo + 20, 0, 0]), { color: C.grey, w: 1.2 });
    // the two polaroids, face-on
    [x1, x2].forEach((x) => outline(s, [pj([x, -h, -h]), pj([x, h, -h]), pj([x, h, h]), pj([x, -h, h])], { w: 1.8 }));
    // their pass axes: vertical, and at θ from the vertical
    path(s, [pj([x1, 0, -0.8 * h]), pj([x1, 0, 0.8 * h])], { color: C.slate, w: 2.2 });
    guide(s, pj([x2, 0, 0]), pj([x2, 0, 0.85 * h]), C.slate, 'dash');
    path(s, [pj(at3(x2, tdir(th), -0.85 * h)), pj(at3(x2, tdir(th), 0.85 * h))], { color: C.mari, w: 2.6 });
    path(s, samples(0, th, 40).map((p) => pj(at3(x2, tdir(p), 20))), { color: C.slate, w: 1.2 });
    const thAt = pj(at3(x2, tdir(14), 34));
    s.sym(thAt[0], thAt[1] + 5, '<i>θ</i>', { size: 14 });
    // the light: unpolarised, then vertically polarised, then along the analyser's axis
    STAR.forEach((p) => dbl(s, pj(at3(xs, tdir(p), -E0)), pj(at3(xs, tdir(p), E0)), C.ink, 1.6, 6.5, 3.2));
    const E1 = E0 / Math.SQRT2, E2 = E1 * Math.cos(th * D2R);
    dbl(s, pj(at3(xm, tdir(0), -E1)), pj(at3(xm, tdir(0), E1)));
    dbl(s, pj(at3(xo, tdir(th), -E2)), pj(at3(xo, tdir(th), E2)));
    const i0 = pj([xs, 0, -E0]), i1 = pj([xm, 0, -E1]), io = pj([xo, 0, -E2]);
    s.sym(4, i0[1] - 2 * E0 - 6, '<i>I</i><sub>0</sub>', { size: 15, anchor: 'start' });
    s.sym(i1[0], i1[1] + 24, '<i>I</i><sub>0</sub>/2', { size: 15 });
    s.sym(io[0], io[1] + 24, '<i>I</i>', { size: 15 });
    resultBlock(s, ['<i>I</i> = (<i>I</i><sub>0</sub>/2) cos<sup>2</sup> <i>θ</i>', 'Crossed (<i>θ</i> = 90°): <i>I</i> = 0'], { size: 14 });
    s.place([
      { t: 'Pass axis of analyser', hi: true, p: pj(at3(x2, tdir(th), 0.72 * h)), at: [[W - 4, 22, 'end'], [W - 4, 16, 'end'], [W - 4, 8, 'end']] },
      { t: 'Vertically polarised', p: pj([xm, 0, E1 * 0.2]), at: [[4, 36, 'start'], [4, 30, 'start'], [4, 8, 'start']] },
      { t: 'Pass axis', p: pj([x1, 0, 0.62 * h]), at: [[62, 74, 'start'], [56, 74, 'start'], [50, 70, 'start']] },
      { t: 'Polaroid 2', p: pj([x2, -h * 0.7, -h]), at: [[W - 4, 168, 'end'], [W - 4, 174, 'end'], [W - 10, 182, 'end']] },
      { t: 'Unpolarised light', p: pj(at3(xs, tdir(45), -E0 * 0.45)), at: [[4, 214, 'start'], [4, 218, 'start']] },
      { t: 'Polaroid 1', p: pj([x1, -h * 0.6, -h]), at: [[160, 232, 'start'], [166, 232, 'start'], [160, 238, 'start']] },
    ]);
    return s;
  },
  check() {
    const { x1, x2, xs, xm, xo, E0, th, X, Y, Z } = G1010, thr = th * D2R;
    const s = fig1010.draw(fig1010.cases[0]);
    const xh: V3 = [1, 0, 0], yh: V3 = [0, 1, 0], zh: V3 = [0, 0, 1];
    const E1 = E0 / Math.SQRT2, E2 = E1 * Math.cos(thr);
    const stars = STAR.map((p) => tdir(p));
    const axis2 = tdir(th);
    const ang = (a: V3, b: V3) => toDeg(Math.acos(dot3(a, b) / (norm3(a) * norm3(b))));
    const Iout = (t: number) => 0.5 * Math.cos(t * D2R) ** 2;
    // the drawn angle between the analyser's axis and the vertical, measured on the page
    const vUp = sub(pj([x2, 0, 1]), pj([x2, 0, 0])), vAx = sub(pj(at3(x2, axis2, 1)), pj([x2, 0, 0]));
    const drawn = toDeg(Math.acos(dotp(vUp, vAx) / (Math.hypot(...vUp) * Math.hypot(...vAx))));
    return [
      [`x, y, z are right-handed (x̂ × ŷ = ẑ): the light along x into the page (drawn receding up to the right), y to the left, z up`, cross3(xh, yh).every((c, i) => close(c, zh[i])) && Y[0] < 0 && Y[1] === 0 && Z[0] === 0 && Z[1] < 0 && X[0] > 0 && X[1] < 0],
      [`The polaroids are seen face-on (y and z drawn at full length, at right angles), so the drawn angle between the analyser's axis and the vertical is the true θ: ${fmt(drawn, 6)}°`, close(drawn, th, 1e-9) && close(dotp(sub(pj([0, 1, 0]), pj([0, 0, 0])), sub(pj([0, 0, 1]), pj([0, 0, 0]))), 0)],
      [`Unpolarised light: ${STAR.length} E-vectors of equal length E₀, evenly ${STAR[1]}° apart round 180° of the transverse plane, each ⟂ the light`, stars.every((d) => close(dot3(d, xh), 0) && close(norm3(d), 1)) && STAR.every((p, i) => close(p, (180 / STAR.length) * i))],
      [`After the polariser: E along its pass axis (vertical), length E₀/√2, so I = ${fmt((E1 / E0) ** 2, 3)} I₀ = I₀/2`, close((E1 / E0) ** 2, 0.5, 1e-12) && x1 > xs && xm > x1 && xm < x2],
      [`The analyser's pass axis makes ${fmt(ang(axis2, zh), 2)}° = θ with the vertical, in its own plane (⟂ the light)`, close(ang(axis2, zh), th, 1e-9) && close(dot3(axis2, xh), 0)],
      [`After the analyser (Malus's law): E along its pass axis, length (E₀/√2) cos θ, so I = (I₀/2) cos² θ = ${fmt((E2 / E0) ** 2, 4)} I₀ at θ = ${th}°`, close((E2 / E0) ** 2, Iout(th), 1e-12) && xo > x2],
      [`Crossed polaroids: at θ = 90°, I = (I₀/2) cos² 90° = ${fmt(Iout(90), 12)} (zero)`, close(Iout(90), 0, 1e-12)],
      [`Worked example 1 (two polaroids at 30°): I = (I₀/2) cos² 30° = ${fmt(Iout(30), 4)} I₀ = 3I₀/8 (the book's 3I₀/8)`, close(Iout(30), 3 / 8, 1e-12)],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* Figure 10.11 · resolving E₀ along the pass axis (topic 06)             */
/* ===================================================================== */
/**
 * E₀ points up the page (vertical); the analyser's pass axis makes θ = 50°
 * with it. E₀ splits into E₀ cos θ along the pass axis (transmitted) and
 * E₀ sin θ perpendicular to it (absorbed); the dashed lines complete the
 * rectangle, so the two parts add back to E₀.
 */
const G1011 = { O: [158, 196] as P, E0: 132, th: 50, axL: 168, axR: 104 };
const fig1011: Diagram = {
  id: 'p12-10-fig-10.11',
  topic: 5,
  name: "Malus's law: resolving the amplitude",
  cases: [{ chip: 'E₀ cos θ passes', cap: 'A polarised electric field of amplitude <i>E</i><sub>0</sub> (vertical) is incident on a polaroid (analyser) whose pass axis makes angle <i>θ</i> with the vertical. <i>E</i><sub>0</sub> is resolved into <i>E</i><sub>0</sub> cos <i>θ</i> along the pass axis (transmitted) and <i>E</i><sub>0</sub> sin <i>θ</i> perpendicular to it (absorbed). Only the parallel component emerges.' }],
  draw() {
    const s = new Sketch(W, 330);
    const { O, E0, th, axL, axR } = G1011, thr = th * D2R;
    const up: P = [0, -1], pa: P = [Math.sin(thr), -Math.cos(thr)], pe: P = [-Math.cos(thr), -Math.sin(thr)];
    const Etip = add(O, up, E0), Ec = add(O, pa, E0 * Math.cos(thr)), Es = add(O, pe, E0 * Math.sin(thr));
    // the pass axis, and the perpendicular to it
    path(s, [add(O, pa, -axR), add(O, pa, axL)], { color: C.mari, w: 2.4 });
    guide(s, add(O, pe, -70), O, C.slate);
    // the rectangle completing the two parts
    guide(s, Etip, Ec, C.grey, 'dash');
    guide(s, Etip, Es, C.grey, 'dash');
    rightMark(s, O, pa, pe, 9);
    // E₀ and its parts
    arrow(s, O, Etip, { w: 2.4 });
    arrow(s, O, Ec, { color: C.ink, w: 2.4 });
    arrow(s, O, Es, { color: C.slate, w: 1.8, dash: true });
    // θ between E₀ and the pass axis
    path(s, arcPts(O, 34, 90 - th, 90), { color: C.slate, w: 1.3 });
    const thAt = polar(O, 48, 90 - th / 2);
    s.sym(thAt[0], thAt[1] + 5, '<i>θ</i>', { size: 15 });
    s.sym(Etip[0] + 8, Etip[1] + 56, '<i>E</i><sub>0</sub>', { size: 16, anchor: 'start' });
    const cl = add(O, pa, E0 * Math.cos(thr) * 0.62);
    s.sym(cl[0] + 10, cl[1] + 18, '<i>E</i><sub>0</sub> cos <i>θ</i>', { size: 15, anchor: 'start' });
    s.sym(Es[0] - 10, Es[1] - 4, '<i>E</i><sub>0</sub> sin <i>θ</i>', { size: 15, anchor: 'end', color: C.slate });
    // named from just above its tip, as the book does: any line to it would cross the dashed rectangle
    s.tag(Etip[0], Etip[1] - 36, 'Incident polarised', null, null, { anchor: 'middle' });
    resultBlock(s, ['Transmitted amplitude <i>E</i> = <i>E</i><sub>0</sub> cos <i>θ</i>', '<i>I</i> ∝ <i>E</i><sup>2</sup> ⇒ <i>I</i> = <i>I</i><sub>0</sub> cos<sup>2</sup> <i>θ</i> (Malus’s Law)'], { size: 14 });
    s.place([
      { t: 'Pass axis', hi: true, p: add(O, pa, axL - 10), at: [[W - 4, 26, 'end'], [W - 4, 20, 'end']] },
      { t: 'Absorbed', p: add(O, pe, E0 * Math.sin(thr) * 0.5), at: [[4, O[1] - 24, 'start'], [4, O[1] - 18, 'start'], [4, O[1] - 30, 'start']] },
      { t: 'Transmitted', p: add(O, pa, E0 * Math.cos(thr) * 0.4), at: [[O[0] + 40, O[1] + 2, 'start'], [O[0] + 46, O[1] + 8, 'start']] },
    ]);
    return s;
  },
  check() {
    const { O, E0, th } = G1011, thr = th * D2R;
    const s = fig1011.draw(fig1011.cases[0]);
    const up: P = [0, -1], pa: P = [Math.sin(thr), -Math.cos(thr)], pe: P = [-Math.cos(thr), -Math.sin(thr)];
    const Ec = sub(add(O, pa, E0 * Math.cos(thr)), O), Es = sub(add(O, pe, E0 * Math.sin(thr)), O), E = sub(add(O, up, E0), O);
    const back = add(Ec, Es);
    const Ic = (len([0, 0], Ec) / E0) ** 2, Is = (len([0, 0], Es) / E0) ** 2;
    return [
      [`E₀ is vertical, ${E0} px; the pass axis makes θ = ${fmt(toDeg(Math.acos(dotp(pa, up))), 2)}° with it`, close(toDeg(Math.acos(dotp(pa, up))), th, 1e-9)],
      [`The transmitted part lies along the pass axis, length E₀ cos θ = ${fmt(E0 * Math.cos(thr), 2)} px; the absorbed part ⟂ it (dot ${fmt(dotp(Ec, Es), 9)}), length E₀ sin θ = ${fmt(E0 * Math.sin(thr), 2)} px`, close(dotp(unit(Ec), pa), 1, 1e-12) && close(dotp(Ec, Es), 0, 1e-9) && close(len([0, 0], Es), E0 * Math.sin(thr), 1e-9)],
      [`The two parts add back to E₀ (the dashed rectangle closes on its tip): (${fmt(back[0], 6)}, ${fmt(back[1], 6)}) = (0, −${E0})`, close(back[0], E[0], 1e-9) && close(back[1], E[1], 1e-9)],
      [`I ∝ E²: the transmitted fraction is cos² θ = ${fmt(Ic, 4)} (Malus's law) and the absorbed sin² θ = ${fmt(Is, 4)}; together ${fmt(Ic + Is, 6)} of I₀`, close(Ic, Math.cos(thr) ** 2, 1e-12) && close(Ic + Is, 1, 1e-12)],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* Figure 10.12 · Brewster's law (topic 06)                               */
/* ===================================================================== */
/**
 * Air (n = 1) over glass, n = 1.5. The angle of incidence is the Brewster angle
 * i_B = tan⁻¹ n = 56.3°; the reflected ray leaves at i_B, the refracted ray at r
 * from Snell's law (sin i_B = n sin r), r = 33.7°, so the two are 90° apart.
 * The reflected ray carries the ⊙ marks of a field perpendicular to the page.
 */
const G1012 = { O: [140, 150] as P, n: 1.5, L: 118, Lr: 112 };
const brewster = (n: number) => { const iB = Math.atan(n), r = Math.asin(Math.sin(iB) / n); return { iB, r }; };
const fig1012: Diagram = {
  id: 'p12-10-fig-10.12',
  topic: 5,
  name: "Brewster's law",
  cases: [{ chip: 'At Brewster angle', cap: 'Unpolarised light incident on a glass surface at the Brewster angle. The reflected ray (fully polarised, with the field perpendicular to the page, shown as dots) and the refracted ray (angle <i>r</i>) are exactly 90° apart, so the angle of incidence and <i>r</i> add up to 90°.' }],
  draw() {
    const s = new Sketch(W, 330);
    const { O, n, L, Lr } = G1012, { iB, r } = brewster(n);
    const inc = add(O, [-Math.sin(iB), -Math.cos(iB)], L), refl = add(O, [Math.sin(iB), -Math.cos(iB)], L), refr = add(O, [Math.sin(r), Math.cos(r)], Lr);
    path(s, [[6, O[1]], [W - 6, O[1]]], { w: 2.4 });
    guide(s, [O[0], O[1] - 112], [O[0], O[1] + 104], C.slate, 'dash');
    ray(s, inc, O, { at: 0.62 });
    ray(s, O, refl, { color: C.mari, w: 2.4, at: 0.88 });
    ray(s, O, refr, { at: 0.7 });
    // the field ⟂ the page on the reflected ray
    [0.3, 0.52, 0.74].forEach((k) => outMark(s, add(O, sub(refl, O), k), 5, C.amber));
    // i_B, r, and the right angle between the reflected and refracted rays
    path(s, arcPts(O, 30, 90 - toDeg(iB), 90), { color: C.slate, w: 1.3 });
    path(s, arcPts(O, 30, 270, 270 + toDeg(r)), { color: C.slate, w: 1.3 });
    path(s, arcPts(O, 50, 270 + toDeg(r), 450 - toDeg(iB)), { color: C.ink, w: 1.4, dash: 'dash' });
    const ib = polar(O, 44, 90 - toDeg(iB) / 2), rr = polar(O, 44, 270 + toDeg(r) / 2), nn = polar(O, 68, (270 + toDeg(r) + 450 - toDeg(iB)) / 2);
    s.sym(ib[0] + 2, ib[1] + 3, '<i>i</i><sub>B</sub>', { size: 15 });
    s.sym(rr[0] + 1, rr[1] + 6, '<i>r</i>', { size: 15 });
    s.sym(nn[0] + 6, nn[1] + 5, '90°', { size: 15 });
    region(s, 4, O[1] - 32, 'Air', '<i>n</i> = 1');
    region(s, 4, O[1] + 12, 'Glass', '(<i>n</i>)');
    resultBlock(s, ['Brewster’s Law: tan <i>i</i><sub>B</sub> = <i>n</i> = 1.5', '<i>i</i><sub>B</sub> = 56.3°, <i>r</i> = 33.7°, <i>i</i><sub>B</sub> + <i>r</i> = 90°'], { size: 14 });
    s.place([
      { t: 'Reflected (fully polarised)', hi: true, p: add(O, sub(refl, O), 0.97), at: [[W - 4, 8, 'end'], [W - 4, 4, 'end']] },
      { t: 'Normal', p: [O[0], O[1] - 102], at: [[O[0] - 10, 36, 'end'], [O[0] - 10, 32, 'end']] },
      { t: 'Unpolarised', p: add(O, sub(inc, O), 0.9), at: [[4, 8, 'start'], [4, 4, 'start']] },
      { t: 'Refracted', p: add(O, sub(refr, O), 0.86), at: [[O[0] + 82, O[1] + 70, 'start'], [O[0] + 80, O[1] + 60, 'start']] },
    ]);
    return s;
  },
  check() {
    const { O, n, L, Lr } = G1012, { iB, r } = brewster(n);
    const s = fig1012.draw(fig1012.cases[0]);
    const inc = add(O, [-Math.sin(iB), -Math.cos(iB)], L), refl = add(O, [Math.sin(iB), -Math.cos(iB)], L), refr = add(O, [Math.sin(r), Math.cos(r)], Lr);
    const dIn = unit(sub(O, inc)), dRefl = unit(sub(refl, O)), dRefr = unit(sub(refr, O));
    const angIn = Math.atan2(dIn[0], dIn[1]), angRefl = Math.atan2(dRefl[0], -dRefl[1]), angRefr = Math.atan2(dRefr[0], dRefr[1]);
    const marks = [0.3, 0.52, 0.74].map((k) => add(O, sub(refl, O), k));
    return [
      [`tan i_B = n = ${n}: i_B = ${fmt(toDeg(iB), 1)}° (the book's 56.3°); the incident ray is drawn at ${fmt(toDeg(angIn), 2)}° to the normal`, close(Math.tan(angIn), n, 1e-9) && fmt(toDeg(iB), 1) === '56.3'],
      [`The reflected ray leaves at the angle of incidence, ${fmt(toDeg(angRefl), 2)}°`, close(angRefl, angIn, 1e-9)],
      [`Snell: sin i_B = n sin r gives r = ${fmt(toDeg(angRefr), 1)}° (the book's 33.7°)`, close(Math.sin(angIn), n * Math.sin(angRefr), 1e-9) && fmt(toDeg(angRefr), 1) === '33.7'],
      [`i_B + r = ${fmt(toDeg(angIn + angRefr), 6)}° = 90°, and the reflected and refracted rays are perpendicular (dot ${fmt(dotp(dRefl, dRefr), 9)}): the drawn arc between them is 90°`, close(angIn + angRefr, Math.PI / 2, 1e-9) && close(dotp(dRefl, dRefr), 0, 1e-9) && close((450 - toDeg(iB)) - (270 + toDeg(r)), 90, 1e-9)],
      ['The ⊙ marks (field ⟂ the page) sit on the reflected ray', marks.every((p) => Math.abs((p[0] - O[0]) * dRefl[1] - (p[1] - O[1]) * dRefl[0]) < 1e-9)],
      [`Crack the MCQ Q4: n = √3 gives i_B = tan⁻¹ √3 = ${fmt(toDeg(Math.atan(Math.sqrt(3))), 6)}° (the book's 60°)`, close(toDeg(Math.atan(Math.sqrt(3))), 60, 1e-9)],
      ...layout(s),
    ];
  },
};

export const DIAGRAMS_PHYSICS_12_10B: Diagram[] = [fig106, fig107, fig108, fig109, fig1010, fig1011, fig1012];
