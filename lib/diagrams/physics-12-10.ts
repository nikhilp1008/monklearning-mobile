import { C, LABEL_GAP, Rect, Sketch, crosses, mathW, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * PHYSICS CLASS 12, CHAPTER 10 (Wave Optics), Topics 01–03: every drawing of
 * the Master Reference book in pp. 636–668, redrawn. They are the five numbered
 * figures, each printed on a "CHAPTER 10 · FIGURES" page (10.1 on p. 639, 10.2
 * on p. 641, 10.3 on p. 645, 10.4 on p. 659, 10.5 on p. 662; the first copy of
 * each caption sits a page earlier, where the text refers to it). There are no
 * unnumbered drawings in these pages: pp. 636–668 were checked page by page; the
 * rest is prose, typeset equations, boxed results and the Doppler sign table on
 * p. 650.
 *
 * Every figure is computed from the physics, never placed by eye: the reflected
 * and refracted wavefronts are the tangents drawn from C to the wavelet about A
 * (radius vτ or v₂τ), so r = i and sin i/sin r = v₁/v₂ come out of the
 * construction and the checks measure them; the prism's rays are refracted at
 * its slanted face by Snell's law and the emergent wavefront is the line of
 * equal optical path across them; the YDSE fringes sit where the path
 * difference S₂P − S₁P is a whole (bright) or half-odd (dark) number of
 * wavelengths, solved exactly. Each `check` recomputes what the figure and its
 * caption state and measures that no label or tag touches a line it does not
 * name.
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
const unit = (a: P): P => { const l = Math.hypot(a[0], a[1]); return [a[0] / l, a[1] / l]; };
const samples = (a: number, b: number, n = 400) => Array.from({ length: n + 1 }, (_, i) => a + ((b - a) * i) / n);
/** A point at math angle `deg` (counter-clockwise, y up) and distance R from c, on the y-down drawing. */
const polar = (c: P, R: number, deg: number): P => [c[0] + R * Math.cos(deg * D2R), c[1] - R * Math.sin(deg * D2R)];
/** The angle between two drawn directions, in degrees. */
const between = (a: P, b: P) => Math.acos(Math.max(-1, Math.min(1, dotp(unit(a), unit(b))))) / D2R;
/** The foot of the perpendicular from p onto the line through a and b. */
const foot = (p: P, a: P, b: P): P => { const u = unit(sub(b, a)); return add(a, u, dotp(sub(p, a), u)); };

/* ---------- drawing helpers (as in physics-12-07.ts) ---------- */
type Stroke = { color?: string; w?: number; dash?: 'dash' | 'dot'; free?: boolean };
const dashOf = (d?: Stroke['dash']) => (d === 'dash' ? ' stroke-dasharray="6 4"' : d === 'dot' ? ' stroke-dasharray="1.5 3.5"' : '');

/**
 * Every line a label must keep clear of (outlines, curves, arrows), by sketch:
 * `clearance` measures each tag and label against them. Dotted guides and
 * hatching are left out (`free`).
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
const keepHead = (s: Sketch, tip: P, u: P, L: number, hw = 4.5) => {
  HEADS.set(s, [...(HEADS.get(s) ?? []), [tip, add(tip, u, -L / 2)]]);
  INKS.set(s, [...(INKS.get(s) ?? []), headTri(tip, u, L, hw)]);
};
/** Every arrowhead as the triangle drawn, by sketch. */
const INKS = new WeakMap<Sketch, P[][]>();
const headTri = (tip: P, u: P, L = 9, hw = 4.5): P[] => { const b = add(tip, u, -L), nv: P = [-u[1], u[0]]; return [tip, add(b, nv, hw), add(b, nv, -hw)]; };
/** How far p is from a triangle's ink (0 inside it). */
const triDist = (t: P[], p: P) => {
  const side = (a: P, b: P) => (b[0] - a[0]) * (p[1] - a[1]) - (b[1] - a[1]) * (p[0] - a[0]);
  const s3 = t.map((a, i) => side(a, t[(i + 1) % 3]));
  if (s3.every((v) => v >= 0) || s3.every((v) => v <= 0)) return 0;
  return Math.min(...t.map((a, i) => distSeg(p, a, t[(i + 1) % 3])));
};
/** A tag's dot: Sketch.tag draws it 2.6 px in radius. */
const DOT_R = 2.6;
/** A small arrowhead at p, pointing along the unit direction u. */
function head(s: Sketch, p: P, u: P, color: string = C.ink, L = 9, hw = 4.5) {
  const b = add(p, u, -L), nv: P = [-u[1], u[0]];
  const tri: P[] = [p, add(b, nv, hw), add(b, nv, -hw)];
  s.add(`<path d="M${tri.map((q) => `${r1(q[0])} ${r1(q[1])}`).join(' L')} Z" fill="${color}"/>`);
  keep(s, [...tri, tri[0]]);
  keepHead(s, p, u, L, hw);
}
/** A ray from a to b, with its arrowhead at fraction k of the way. */
function ray(s: Sketch, a: P, b: P, o: { color?: string; w?: number; dash?: boolean; at?: number } = {}) {
  const col = o.color ?? C.slate;
  path(s, [a, b], { color: col, w: o.w ?? 1.5, dash: o.dash ? 'dash' : undefined });
  const u = unit(sub(b, a));
  head(s, add(a, sub(b, a), o.at ?? 0.6), u, col, 9, 4.2);
}
/** A dimension line from a to b with a small head at each end. */
function dim(s: Sketch, a: P, b: P, color: string = C.slate) {
  const u = unit(sub(b, a));
  path(s, [add(a, u, 3), add(b, u, -3)], { color, w: 1.2 });
  head(s, a, [-u[0], -u[1]], color, 6, 3);
  head(s, b, u, color, 6, 3);
}
/** The points of an arc about c, radius R, from math angle a0 to a1 (degrees). */
const arcPts = (c: P, R: number, a0: number, a1: number, n = 90): P[] => samples(a0, a1, n).map((a) => polar(c, R, a));
/** A right-angle mark at corner q between the directions u1 and u2. */
const square = (s: Sketch, q: P, u1: P, u2: P, k = 8) => path(s, [add(q, unit(u1), k), add(add(q, unit(u1), k), unit(u2), k), add(q, unit(u2), k)], { color: C.slate, w: 1.2 });
/**
 * A dotted guide, free of the clearance check (it only joins marks), but
 * never through a label or a tag. See `guideHits`.
 */
const GUIDES = new WeakMap<Sketch, [P, P][]>();
const guide = (s: Sketch, a: P, b: P, color: string = C.slate, dash: 'dot' | 'dash' = 'dot') => {
  GUIDES.set(s, [...(GUIDES.get(s) ?? []), [a, b]]);
  path(s, [a, b], { color, w: 1.1, dash, free: true });
};
/** Distance from a point to a rectangle (0 inside it). */
const rectDist = (r: Rect, p: P) => Math.hypot(Math.max(r[0] - p[0], 0, p[0] - r[2]), Math.max(r[1] - p[1], 0, p[1] - r[3]));
/** How far every tag and label stays from every kept line, sampled each half pixel: the closest one, and what it is. */
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
/** And no tag's dot beside an arrowhead either: at least HEAD_CLEAR px of white between the dot and the head's ink. */
const HEAD_CLEAR = 6;
const dotClear = (s: Sketch, at: P) => Math.min(Infinity, ...(INKS.get(s) ?? []).map((t) => triDist(t, at))) - DOT_R;
const dotsClearOfHeads = (s: Sketch): Check => {
  const near = s.tags.filter((t) => t.from).map((t) => ({ name: t.name, gap: dotClear(s, t.from as P) })).sort((a, b) => a.gap - b.gap);
  return [`Every tag's dot keeps at least ${HEAD_CLEAR} px clear of every arrowhead${near.length ? `: the closest is "${near[0].name}", ${fmt(near[0].gap, 1)} px` : ''}`, near.every((n) => n.gap >= HEAD_CLEAR - 1e-9)];
};
/** Every label inside the frame (the kit's audit checks tags only). */
const inFrame = (s: Sketch): Check => {
  const out = s.labels.filter((l) => l.rect[0] < 0 || l.rect[2] > s.w || l.rect[1] < 0 || l.rect[3] > s.h).map((l) => l.text);
  return [`Every label lies inside the frame${out.length ? `: not ${out.join(', ')}` : ''}`, out.length === 0];
};
/** The layout checks of a drawn sketch. */
const layout = (s: Sketch): Check[] => [clearCheck(s), labelsApart(s), dotsOffHeads(s), dotsClearOfHeads(s), inFrame(s)];
/**
 * The result (what the figure states), bottom right, ink-edged, maths set in
 * STIX (Sketch.text). Registered as a tag, so the audit keeps everything else off it.
 */
function resultBlock(s: Sketch, lines: string[], o: { size?: number } = {}): Rect {
  const size = o.size ?? 15, lh = size + 8;
  const plain = (t: string) => t.replace(/<\/?(?:i|sub|sup)>/g, '');
  const w = Math.max(...lines.map((t) => mathW(t, size))) + 30, h = lines.length * lh + 14;
  const x0 = s.w - 8 - w, y0 = s.h - 8 - h;
  s.tags.push({ name: plain(lines.join(' ')), rect: [x0, y0, x0 + w, y0 + h], from: null, to: null });
  s.add(`<rect x="${r1(x0)}" y="${r1(y0)}" width="${r1(w)}" height="${r1(h)}" rx="15" fill="#fff" stroke="${C.text}" stroke-width="1.6"/>`);
  lines.forEach((t, i) => s.text(x0 + w / 2, y0 + 7 + lh * i + lh / 2 + size * 0.36, t, { size, semibold: true }));
  return [x0, y0, x0 + w, y0 + h];
}
/** Point-to-segment distance. */
function distSeg(p: P, a: P, b: P) {
  const d = sub(b, a), L = dotp(d, d) || 1, k = Math.max(0, Math.min(1, dotp(sub(p, a), d) / L));
  return len(p, add(a, d, k));
}
/** A labelled point: a small ink dot. */
const pin = (s: Sketch, p: P, fill: string = C.ink) => s.dot(p[0], p[1], 3, fill);

/* ===================================================================== */
/* Figure 10.1 · laws of reflection from Huygens' principle (topic 01)    */
/* ===================================================================== */
/**
 * The plane wavefront AB meets the mirror at A at i = 30° (the book's drawing
 * is at 30°). The ray through B reaches the mirror at C after τ, so BC = vτ =
 * AC sin i; the wavelet about A has the same radius, and D is where the tangent
 * from C touches it (cos ∠DAC = AD/AC). Nothing about r is put in: the check
 * measures the angle AD makes with the normal and finds r = i.
 */
const G101 = { A: [112, 178] as P, AC: 170, i: 30, mx: [26, 314] as [number, number], inA: 104, inB: 50, out: 60, arc: 30 };
const g101 = () => {
  const { A, AC, i } = G101;
  const Cp: P = [A[0] + AC, A[1]];
  const d: P = [Math.sin(i * D2R), Math.cos(i * D2R)];
  const vt = dotp([AC, 0], d);
  const B = add(Cp, d, -vt);
  const phi = Math.acos(vt / AC);
  const D: P = [A[0] + vt * Math.cos(phi), A[1] - vt * Math.sin(phi)];
  const e = unit(sub(D, A));
  const r = Math.atan2(e[0], -e[1]) / D2R;
  return { A, Cp, B, D, d, e, vt, r };
};
const fig101: Diagram = {
  id: 'p12-10-fig-10.1',
  topic: 0,
  name: 'Reflection of a plane wavefront',
  cases: [{ chip: 'r = i', cap: 'A plane wavefront <i>AB</i> approaches a plane mirror <i>MM</i>′ at angle of incidence <i>i</i>. Point <i>A</i> has just touched the mirror; <i>B</i> reaches <i>C</i> after time <i>τ</i>, so <i>BC</i> = <i>vτ</i>. The wavelet from <i>A</i> has radius <i>AD</i> = <i>vτ</i>, and the reflected wavefront <i>CD</i> is the tangent to it from <i>C</i>. The geometry gives <i>r</i> = <i>i</i>.' }],
  draw() {
    const s = new Sketch(W, 288);
    const { mx, inA, inB, out, arc, i } = G101, g = g101(), { A, B, Cp, D, d, e, vt, r } = g, y0 = A[1];
    // the mirror and its silvered back (hatching, free)
    for (let x = mx[0] + 10; x <= mx[1]; x += 12) {
      if (Math.abs(x - A[0]) < 14 || Math.abs(x - Cp[0]) < 14) continue;
      path(s, [[x, y0 + 2], [x - 8, y0 + 10]], { color: C.grey, w: 1.1, free: true });
    }
    path(s, [[mx[0], y0], [mx[1], y0]], { w: 2.6 });
    s.sym(mx[0] - 6, y0 + 5, '<i>M</i>', { size: 16, anchor: 'end' });
    s.sym(mx[1] + 6, y0 + 5, '<i>M</i>′', { size: 16, anchor: 'start' });
    // the normal at A
    guide(s, A, [A[0], y0 - 152]);
    // the wavelet from A, radius vτ
    path(s, arcPts(A, vt, 0, 180, 120), { color: C.slate, w: 1.3 });
    // the incident rays: one reaching A, one through B on to C
    ray(s, add(A, d, -inA), add(A, d, -3), { dash: true, at: 0.45 });
    ray(s, add(B, d, -inB), add(B, d, -4), { dash: true, at: 0.5 });
    path(s, [B, Cp], { w: 1.7 });
    // AD, along the reflected ray from A, and the reflected rays beyond D and C
    path(s, [A, D], { w: 1.7 });
    ray(s, add(D, e, 4), add(D, e, out), { dash: true, at: 0.6 });
    ray(s, add(Cp, e, 4), add(Cp, e, out), { dash: true, at: 0.6 });
    // the wavefronts
    path(s, [A, B], { w: 2.4 });
    path(s, [Cp, D], { color: C.mari, w: 2.6 });
    square(s, B, sub(A, B), sub(Cp, B));
    square(s, D, sub(A, D), sub(Cp, D));
    // the angles, both measured from the normal
    path(s, arcPts(A, arc, 90, 90 + i, 24), { color: C.slate, w: 1.3 });
    path(s, arcPts(A, arc + 4, 90 - r, 90, 24), { color: C.slate, w: 1.3 });
    const li = polar(A, arc + 20, 90 + i / 2), lr = polar(A, arc + 22, 90 - r / 2);
    s.sym(li[0], li[1] + 5, '<i>i</i>', { size: 16 });
    s.sym(lr[0], lr[1] + 5, '<i>r</i>', { size: 16 });
    [A, B, Cp, D].forEach((p) => pin(s, p));
    s.sym(A[0] - 2, y0 + 24, '<i>A</i>', { size: 16 });
    s.sym(Cp[0] + 2, y0 + 24, '<i>C</i>', { size: 16 });
    s.sym(B[0] + 10, B[1] + 4, '<i>B</i>', { size: 16, anchor: 'start' });
    s.sym(D[0] - 10, D[1] - 16, '<i>D</i>', { size: 16, anchor: 'end' });
    // the book's box: the two equal distances, the wavelet's radius
    resultBlock(s, ['<i>BC</i> = <i>AD</i> = <i>vτ</i>', '(wavelet radius about <i>A</i>)']);
    // Each wavefront is named at its far end (D, B), where its tag's line can rise
    // straight up clear of every ray; the book labels them there too.
    s.place([
      { t: 'Reflected wavefront', hi: true, p: D, at: [[4, 4, 'start'], [4, 8, 'start']] },
      { t: 'Incident wavefront', p: B, at: [[W - 8, 4, 'end'], [W - 8, 8, 'end']] },
      { t: 'Normal', p: [A[0], y0 - 140], at: [[A[0] - 10, 40, 'end'], [A[0] - 10, 44, 'end']] },
    ]);
    return s;
  },
  check() {
    const { i, AC } = G101, g = g101(), { A, B, Cp, D, d, vt, r } = g;
    const s = fig101.draw(fig101.cases[0]);
    const n: P = [0, -1];
    return [
      [`The incident rays are perpendicular to the wavefront AB (${fmt(between(d, sub(B, A)), 6)}°), and make i = ${fmt(between([-d[0], -d[1]], n), 6)}° with the normal`, close(between(d, sub(B, A)), 90, 1e-9) && close(between([-d[0], -d[1]], n), i, 1e-9)],
      [`B reaches C along its ray: BC = vτ = AC sin i = ${fmt(len(B, Cp), 3)} px`, close(len(B, Cp), AC * Math.sin(i * D2R), 1e-9) && close(between(sub(Cp, B), d), 0, 1e-6)],
      [`The wavelet from A has the same radius: AD = ${fmt(len(A, D), 3)} px = BC`, close(len(A, D), vt, 1e-9) && close(len(A, D), len(B, Cp), 1e-9)],
      [`CD is the tangent from C: AD ⊥ CD (${fmt(between(sub(A, D), sub(Cp, D)), 6)}°), the right angle at D; AB ⊥ BC at B`, close(between(sub(A, D), sub(Cp, D)), 90, 1e-6) && close(between(sub(A, B), sub(Cp, B)), 90, 1e-6)],
      [`Triangles ABC and CDA (right-angled at B and D, AC common, BC = AD) are congruent, so the reflected ray AD makes r = ${fmt(r, 6)}° with the normal: r = i`, close(r, i, 1e-9) && close(len(A, B), len(Cp, D), 1e-9)],
      ['Incident ray, normal and reflected ray lie in one plane (the page), the reflected ray on the other side of the normal', D[0] > A[0] && d[0] > 0],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* Figure 10.2 · Snell's law from Huygens' principle (topic 01)           */
/* ===================================================================== */
/**
 * Medium 2 is glass, n = v₁/v₂ = 1.5 (the topic's worked example 1, p. 642),
 * and i = 40° (about the book's drawing). While B travels BC = v₁τ = AC sin i
 * to C, the wavelet about A grows to AE = v₂τ = BC/1.5; E is where the tangent
 * from C touches it. r is measured from the drawing, not put in.
 */
const G102 = { A: [110, 148] as P, AC: 170, i: 40, n: 1.5, px: [26, 314] as [number, number], inA: 96, inB: 46, outE: 58, outC: 82, arc: 30 };
const g102 = () => {
  const { A, AC, i, n } = G102;
  const Cp: P = [A[0] + AC, A[1]];
  const d: P = [Math.sin(i * D2R), Math.cos(i * D2R)];
  const v1t = dotp([AC, 0], d), v2t = v1t / n;
  const B = add(Cp, d, -v1t);
  const phi = Math.acos(v2t / AC);
  const E: P = [A[0] + v2t * Math.cos(phi), A[1] + v2t * Math.sin(phi)];
  const t = unit(sub(E, A));
  const r = Math.atan2(t[0], t[1]) / D2R;
  return { A, B, Cp, E, d, t, v1t, v2t, r };
};
const fig102: Diagram = {
  id: 'p12-10-fig-10.2',
  topic: 0,
  name: 'Refraction of a plane wavefront',
  cases: [{ chip: 'Snell’s law', cap: 'A plane wavefront <i>AB</i> in medium 1 (speed <i>v</i><sub>1</sub>) meets the interface <i>PP</i>′ at angle of incidence <i>i</i>. While <i>B</i> travels to <i>C</i> (<i>BC</i> = <i>v</i><sub>1</sub><i>τ</i>), the wavelet from <i>A</i> grows to radius <i>v</i><sub>2</sub><i>τ</i> in medium 2 (speed <i>v</i><sub>2</sub> < <i>v</i><sub>1</sub>). The refracted wavefront <i>CE</i> is tangent to this wavelet, so sin <i>i</i> / sin <i>r</i> = <i>v</i><sub>1</sub>/<i>v</i><sub>2</sub> and the ray bends toward the normal.' }],
  draw() {
    const s = new Sketch(W, 336);
    const { px, inA, inB, outE, outC, arc, i } = G102, g = g102(), { A, B, Cp, E, d, t, v2t, r } = g, y0 = A[1];
    path(s, [[px[0], y0], [px[1], y0]], { w: 2.6 });
    s.sym(px[0] - 6, y0 + 5, '<i>P</i>', { size: 16, anchor: 'end' });
    s.sym(px[1] + 6, y0 + 5, '<i>P</i>′', { size: 16, anchor: 'start' });
    guide(s, [A[0], y0 - 116], [A[0], y0 + 80]);
    // the wavelet in medium 2, radius v₂τ
    path(s, arcPts(A, v2t, 180, 360, 120), { color: C.slate, w: 1.3 });
    ray(s, add(A, d, -inA), add(A, d, -3), { dash: true, at: 0.45 });
    ray(s, add(B, d, -inB), add(B, d, -4), { dash: true, at: 0.5 });
    path(s, [B, Cp], { w: 1.7 });
    path(s, [A, E], { w: 1.7 });
    ray(s, add(E, t, 4), add(E, t, outE), { dash: true, at: 0.65 });
    ray(s, add(Cp, t, 4), add(Cp, t, outC), { dash: true, at: 0.6 });
    path(s, [A, B], { w: 2.4 });
    path(s, [Cp, E], { color: C.mari, w: 2.6 });
    square(s, B, sub(A, B), sub(Cp, B));
    square(s, E, sub(A, E), sub(Cp, E));
    path(s, arcPts(A, arc, 90, 90 + i, 24), { color: C.slate, w: 1.3 });
    path(s, arcPts(A, arc + 4, 270, 270 + r, 24), { color: C.slate, w: 1.3 });
    const li = polar(A, arc + 20, 90 + i / 2), lr = polar(A, arc + 20, 270 + r / 2);
    s.sym(li[0], li[1] + 5, '<i>i</i>', { size: 16 });
    s.sym(lr[0] + 1, lr[1] + 6, '<i>r</i>', { size: 16 });
    [A, B, Cp, E].forEach((p) => pin(s, p));
    s.sym(A[0] - 10, y0 + 20, '<i>A</i>', { size: 16, anchor: 'end' });
    s.sym(Cp[0] + 4, y0 - 10, '<i>C</i>', { size: 16, anchor: 'start' });
    s.sym(B[0] + 12, B[1] + 4, '<i>B</i>', { size: 16, anchor: 'start' });
    // E in the wedge between CE and the refracted ray: on the wavelet's side it sat on the arc
    s.sym(E[0] + 15, E[1] + 16.5, '<i>E</i>', { size: 16, anchor: 'start' });
    const bc = add(B, sub(Cp, B), 0.5);
    s.sym(bc[0] + 12, bc[1] + 4, '<i>BC</i> = <i>v</i><sub>1</sub><i>τ</i>', { size: 15, anchor: 'start' });
    // the wavelet's radius, under its tag (as the book writes it, beside the wavelet)
    s.sym(12, 278, '<i>AE</i> = <i>v</i><sub>2</sub><i>τ</i>', { size: 15, anchor: 'start' });
    resultBlock(s, ['sin <i>i</i> / sin <i>r</i> = <i>v</i><sub>1</sub>/<i>v</i><sub>2</sub>']);
    // the two media, named in their own regions, each with its speed after its tag
    s.tag(8, 4, 'Medium 1', null, null);
    s.sym(8 + 80, 20, '<i>v</i><sub>1</sub>', { size: 15, anchor: 'start' });
    s.tag(8, 300, 'Medium 2', null, null);
    s.sym(8 + 80, 316, '<i>v</i><sub>2</sub> < <i>v</i><sub>1</sub>', { size: 15, anchor: 'start' });
    s.place([
      { t: 'Refracted wavefront', hi: true, p: add(Cp, sub(E, Cp), 0.62), at: [[W - 8, 236, 'end'], [W - 8, 244, 'end']] },
      { t: 'Incident wavefront', p: B, at: [[W - 8, 4, 'end'], [W - 8, 8, 'end']] },
      { t: 'Normal', p: [A[0], y0 - 108], at: [[A[0] - 10, 34, 'end'], [A[0] - 10, 38, 'end']] },
      { t: 'Wavelet from A', p: polar(A, v2t, 215), at: [[8, 236, 'start'], [8, 240, 'start']] },
    ]);
    return s;
  },
  check() {
    const { i, n, AC } = G102, g = g102(), { A, B, Cp, E, d, t, v1t, v2t, r } = g;
    const s = fig102.draw(fig102.cases[0]);
    const si = Math.sin(i * D2R), sr = Math.sin(r * D2R);
    return [
      [`The incident rays are perpendicular to AB (${fmt(between(d, sub(B, A)), 6)}°) at i = ${fmt(i, 1)}° to the normal; BC = v₁τ = AC sin i = ${fmt(v1t, 3)} px`, close(between(d, sub(B, A)), 90, 1e-9) && close(len(B, Cp), AC * si, 1e-9)],
      [`The wavelet in medium 2 has radius AE = v₂τ = BC × v₂/v₁ = ${fmt(v2t, 3)} px (v₁/v₂ = ${n}, glass)`, close(len(A, E), v2t, 1e-9) && close(len(B, Cp) / len(A, E), n, 1e-9)],
      [`CE is the tangent from C: AE ⊥ CE (${fmt(between(sub(A, E), sub(Cp, E)), 6)}°), the right angle at E; the refracted rays are perpendicular to CE`, close(between(sub(A, E), sub(Cp, E)), 90, 1e-6) && close(between(t, sub(Cp, E)), 90, 1e-6)],
      [`Measured from the drawing: r = ${fmt(r, 3)}°, and sin i / sin r = ${fmt(si / sr, 6)} = v₁/v₂ (the result)`, close(si / sr, n, 1e-9)],
      [`The ray bends toward the normal (r = ${fmt(r, 2)}° < i = ${i}°), because v₂ < v₁`, r < i && n > 1],
      [`Worked example 1 (p. 642): in glass (n = 1.5) light of 600 nm has v = c/n = ${fmt(3e8 / 1.5 / 1e8, 3)} × 10⁸ m s⁻¹ and λ = ${fmt(600 / 1.5, 3)} nm (the book's 2 × 10⁸ m s⁻¹, 400 nm)`, close(3e8 / 1.5, 2e8) && close(600 / 1.5, 400)],
      ['Medium 1 is above PP′ (where AB is) and medium 2 below (where the wavelet AE and CE are)', B[1] < A[1] && E[1] > A[1]],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* Figure 10.3 · a thin prism tilts the wavefront (topic 01)              */
/* ===================================================================== */
/**
 * A right-angled prism as the book draws it: vertical first face, apex up,
 * apex angle A = 15° (the book's value), n = 1.5 (the figure gives no n; 1.5
 * is the topic's glass). The vertical wavefront meets the first face at normal
 * incidence, so the rays go straight on through thicknesses t₂ (near the apex)
 * and t₁ (near the base); at the slanted face they meet it at A and leave at
 * e = sin⁻¹(n sin A) by Snell's law, bent toward the base by e − A. The
 * emergent wavefront is the line of equal optical path (n t + air path) across
 * the two rays.
 */
const G103 = { xw: 30, px: 122, top: 42, H: 222, A: 15, n: 1.5, f: [0.4, 0.82], xEnd: 326, xWave: 238, ext: [34, 16] as [number, number], arcR: 100 };
const g103 = () => {
  const { xw, px, top, H, A, n, f, xEnd, xWave, ext } = G103;
  const tanA = Math.tan(A * D2R);
  const apex: P = [px, top], baseL: P = [px, top + H], baseR: P = [px + H * tanA, top + H];
  const e = Math.asin(n * Math.sin(A * D2R)) / D2R, dev = e - A;
  const u: P = [Math.cos(dev * D2R), Math.sin(dev * D2R)];
  const rays = f.map((k) => {
    const y = top + k * H, inP: P = [px, y], Q: P = [px + (y - top) * tanA, y];
    return { y, inP, Q, t: Q[0] - px };
  });
  // optical path from the incident wavefront to a point s along the emergent ray
  const L = px - xw + n * rays[0].t + (xWave - rays[0].Q[0]) / u[0];
  const Wk = rays.map((r) => add(r.Q, u, L - (px - xw) - n * r.t));
  const along = unit(sub(Wk[1], Wk[0]));
  const wTop = add(Wk[0], along, -ext[0]), wBot = add(Wk[1], along, ext[1]);
  const ends = rays.map((r) => add(r.Q, u, (xEnd - r.Q[0]) / u[0]));
  return { apex, baseL, baseR, e, dev, u, rays, L, Wk, wTop, wBot, ends, tanA };
};
const fig103: Diagram = {
  id: 'p12-10-fig-10.3',
  topic: 0,
  name: 'Wavefront through a thin prism',
  cases: [{ chip: 'Tilt δ', cap: 'A thin prism (apex angle <i>A</i>, apex up) with a vertical plane wavefront approaching from the left. A ray near the thick base crosses glass thickness <i>t</i><sub>1</sub>; a ray near the thin apex crosses <i>t</i><sub>2</sub> < <i>t</i><sub>1</sub>. The base ray is delayed more, so the emergent wavefront is tilted by <i>δ</i> = (<i>n</i> − 1)<i>A</i>.' }],
  draw() {
    const s = new Sketch(W, 344);
    const { xw, px, arcR, A } = G103, g = g103(), { apex, baseL, baseR, u, rays, wTop, wBot, ends, dev } = g;
    // the prism
    outline(s, [apex, baseL, baseR], { w: 1.8 });
    path(s, arcPts(apex, 30, 270, 270 + A, 20), { color: C.slate, w: 1.3 });
    s.sym(apex[0] + 14, apex[1] + 24, '<i>A</i> = 15°', { size: 15, anchor: 'start' });
    // the incident wavefront and rays, the glass paths, the emergent rays
    path(s, [[xw, rays[0].y - 44], [xw, rays[1].y + 40]], { w: 2.4 });
    rays.forEach((r) => {
      ray(s, [xw + 4, r.y], [px - 2, r.y], { at: 0.7 });
      path(s, [r.inP, r.Q], { w: 1.7 });
    });
    rays.forEach((r, k) => ray(s, add(r.Q, u, 2), ends[k], { at: k === 0 ? 0.3 : 0.62 }));
    // the thicknesses
    const [t2, t1] = rays;
    dim(s, [px, t2.y - 11], [t2.Q[0], t2.y - 11]);
    s.sym(px - 6, t2.y - 9, '<i>t</i><sub>2</sub>', { size: 15, anchor: 'end' });
    dim(s, [px, t1.y + 11], [t1.Q[0], t1.y + 11]);
    s.sym((px + t1.Q[0]) / 2, t1.y + 32, '<i>t</i><sub>1</sub>', { size: 15 });
    // the emergent wavefront, and its tilt from the vertical
    path(s, [wTop, wBot], { color: C.mari, w: 2.6 });
    guide(s, wTop, [wTop[0], wTop[1] + 140]);
    path(s, arcPts(wTop, arcR, 270 - dev, 270, 16), { color: C.slate, w: 1.3 });
    s.sym(wTop[0] + 8, wTop[1] + arcR + 4, '<i>δ</i>', { size: 16, anchor: 'start' });
    resultBlock(s, ['<i>δ</i> = (<i>n</i> − 1)<i>A</i>']);
    s.place([
      { t: 'Apex', p: apex, at: [[apex[0] + 12, 4, 'start'], [apex[0] + 16, 4, 'start']] },
      { t: 'Base', p: add(baseL, sub(baseR, baseL), 0.5), at: [[60, 284, 'start'], [56, 288, 'start']] },
      { t: 'Incident wavefront', p: [xw, rays[1].y + 30], at: [[6, 312, 'start'], [6, 316, 'start']] },
      { t: 'Emergent wavefront', hi: true, p: add(wTop, sub(wBot, wTop), 0.96), at: [[W - 4, 266, 'end'], [W - 4, 268, 'end']] },
    ]);
    return s;
  },
  check() {
    const { A, n, px, xw } = G103, g = g103(), { e, dev, u, rays, L, Wk, wTop, wBot } = g;
    const s = fig103.draw(fig103.cases[0]);
    const [t2, t1] = rays;
    const along = sub(wBot, wTop);
    const tilt = between(along, [0, 1]);
    const op = (k: number) => px - xw + n * rays[k].t + len(rays[k].Q, Wk[k]);
    const thin = (n - 1) * A;
    return [
      [`The ray near the apex crosses t₂ = ${fmt(t2.t, 2)} px of glass, the ray near the base t₁ = ${fmt(t1.t, 2)} px: t₂ < t₁, each t = (height below the apex) × tan A`, t2.t < t1.t && rays.every((r) => close(r.t, (r.y - G103.top) * g.tanA, 1e-9))],
      [`At the slanted face each ray meets it at A = ${A}° and leaves at e = sin⁻¹(n sin A) = ${fmt(e, 2)}° (Snell, n = ${n}), bent toward the base by e − A = ${fmt(dev, 2)}°`, close(Math.sin(e * D2R), n * Math.sin(A * D2R), 1e-12) && u[1] > 0],
      [`The emergent wavefront joins points of equal optical path n t + (air path): ${fmt(op(0), 3)} = ${fmt(op(1), 3)} px, the base ray delayed more by (n − 1)(t₁ − t₂) = ${fmt((n - 1) * (t1.t - t2.t), 2)} px`, close(op(0), L, 1e-9) && close(op(1), L, 1e-9)],
      [`It is a plane, perpendicular to both emergent rays (${fmt(between(along, u), 6)}°), tilted from the vertical by δ = ${fmt(tilt, 3)}°, its lower (base) end lagging behind`, close(between(along, u), 90, 1e-6) && close(tilt, dev, 1e-6) && wBot[0] < wTop[0]],
      [`For this thin prism δ ≈ (n − 1)A = ${fmt(thin, 2)}°; Snell's exact ${fmt(dev, 2)}° is within ${fmt((100 * (dev - thin)) / thin, 1)}% of it`, Math.abs(dev - thin) / thin < 0.05],
      [`The δ arc runs from the vertical to the emergent wavefront (${fmt(dev, 3)}°)`, close(tilt, dev, 1e-6)],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* Figure 10.4 · Young's double-slit set-up (topic 03)                    */
/* ===================================================================== */
/**
 * Drawn to scale in one schematic unit: d = 48 px, D = 180 px and λ = βd/D
 * with β = 18 px, so the fringes can be seen (a real λ/d is about 10⁻³). The
 * slit S sits on the perpendicular bisector of S₁S₂, so its cylindrical
 * wavefronts reach S₁ and S₂ together and they start in phase. Crests are
 * drawn every fourth wavelength (4λ apart, from S and from each slit). The
 * bright fringes (m = 0, ±1, ±2) sit where S₂P − S₁P = mλ and the dark ones
 * where it is (m + ½)λ, both solved exactly; they come out equally spaced to
 * within the small-angle error, about β = λD/d. The book centres every
 * wavefront left of the double slit on the source and draws S as a short bar
 * with no barrier; here S is a gap in a barrier, the wavefronts beyond it are
 * centred on S, as the caption says ("a narrow slit S, whose cylindrical
 * wavefronts reach two close slits"), and the barrier of the double slit runs
 * between S₁ and S₂ too.
 */
const G104 = { cy: 150, src: 14, S: 46, slit: 120, d: 48, D: 180, beta: 18, half: 90, slitHalf: 64, slitGap: 4, srcArcs: [11, 22], crests: [3, 4, 5], spanS: 34, spanSlit: 40, Sbar: 34 };
const lam104 = () => (G104.beta * G104.d) / G104.D;
/** The height above O (up positive) where S₂P − S₁P = m λ, solved by bisection. */
const fringeY = (m: number) => {
  const { d, D } = G104, lam = lam104();
  const diff = (y: number) => Math.hypot(D, y + d / 2) - Math.hypot(D, y - d / 2);
  let lo = -D, hi = D;
  for (let k = 0; k < 200; k++) { const mid = (lo + hi) / 2; if (diff(mid) < m * lam) lo = mid; else hi = mid; }
  return (lo + hi) / 2;
};
const g104 = () => {
  const { cy, S, slit, d, D } = G104;
  const Sp: P = [S, cy], S1: P = [slit, cy - d / 2], S2: P = [slit, cy + d / 2], O: P = [slit + D, cy];
  const bright = [-2, -1, 0, 1, 2].map((m) => ({ m, y: cy - fringeY(m) }));
  const dark = [-1.5, -0.5, 0.5, 1.5].map((m) => ({ m, y: cy - fringeY(m) }));
  return { Sp, S1, S2, O, bright, dark, lam: lam104() };
};
/** The dashed line round the two slits (the coherent pair): a box 16 × 88 px with rounded corners. */
const PAIR: Rect = [G104.slit - 8, G104.cy - 44, G104.slit + 8, G104.cy + 44];
const pairLine = (): P[] => {
  const [x0, y0, x1, y1] = PAIR, k = 6;
  const corner = (c: P, a0: number) => arcPts(c, k, a0, a0 + 90, 8);
  return [...corner([x1 - k, y0 + k], 0), ...corner([x0 + k, y0 + k], 90), ...corner([x0 + k, y1 - k], 180), ...corner([x1 - k, y1 - k], 270)];
};
const fig104: Diagram = {
  id: 'p12-10-fig-10.4',
  topic: 2,
  name: 'Young’s double-slit experiment',
  cases: [{ chip: 'Set-up', cap: 'Young’s double-slit set-up. Monochromatic light falls on a narrow slit <i>S</i>, whose cylindrical wavefronts reach two close slits <i>S</i><sub>1</sub> and <i>S</i><sub>2</sub> (separation <i>d</i>) that act as coherent sources. The overlapping wavefronts reach a screen at distance <i>D</i> and produce equally spaced bright and dark fringes; the central bright fringe is at <i>O</i>.' }],
  draw() {
    const s = new Sketch(W, 340);
    const { cy, src, slit, half, slitHalf, slitGap, srcArcs, crests, spanS, spanSlit, Sbar } = G104, g = g104(), { Sp, S1, S2, O, bright, dark, lam } = g;
    // the source and its wavefronts up to S
    pin(s, [src, cy]);
    srcArcs.forEach((R) => path(s, arcPts([src, cy], R, -46, 46, 30), { color: C.grey, w: 1.2 }));
    // the single slit S
    path(s, [[Sp[0], cy - Sbar], [Sp[0], cy - slitGap]], { w: 2.4 });
    path(s, [[Sp[0], cy + slitGap], [Sp[0], cy + Sbar]], { w: 2.4 });
    s.sym(Sp[0], cy - Sbar - 8, '<i>S</i>', { size: 16 });
    // cylindrical wavefronts from S
    [1, 2].forEach((k) => path(s, arcPts(Sp, 4 * k * lam, -spanS, spanS, 40), { color: C.slate, w: 1.2 }));
    // the double slit
    path(s, [[slit, cy - slitHalf], [slit, S1[1] - slitGap]], { w: 2.4 });
    path(s, [[slit, S1[1] + slitGap], [slit, S2[1] - slitGap]], { w: 2.4 });
    path(s, [[slit, S2[1] + slitGap], [slit, cy + slitHalf]], { w: 2.4 });
    // the wavefronts from S₁ and S₂, crests 4λ apart
    [S1, S2].forEach((c) => crests.forEach((k) => path(s, arcPts(c, 4 * k * lam, -spanSlit, spanSlit, 60), { color: C.grey, w: 1.2 })));
    // the coherent pair, named by a line round it
    outline(s, pairLine(), { color: C.slate, w: 1.1, dash: 'dash' });
    pin(s, S1);
    pin(s, S2);
    s.sym(slit + 14, S1[1] - 8, '<i>S</i><sub>1</sub>', { size: 15, anchor: 'start' });
    s.sym(slit + 14, S2[1] + 17, '<i>S</i><sub>2</sub>', { size: 15, anchor: 'start' });
    dim(s, [slit + 14, S1[1]], [slit + 14, S2[1]]);
    s.sym(slit + 22, cy + 5, '<i>d</i>', { size: 15, anchor: 'start' });
    // the screen and its fringes
    path(s, [[O[0], cy - half], [O[0], cy + half]], { w: 2.6 });
    dark.forEach((f) => path(s, [[O[0] - 4, f.y], [O[0] + 4, f.y]], { color: C.slate, w: 1.6 }));
    bright.forEach((f) => path(s, [[O[0] - 7, f.y], [O[0] + 7, f.y]], { color: C.mari, w: 3 }));
    const fTop = bright[bright.length - 1].y - 9, fBot = bright[0].y + 9;
    outline(s, [[O[0] - 12, fTop], [O[0] + 12, fTop], [O[0] + 12, fBot], [O[0] - 12, fBot]], { color: C.mari, w: 1.1, dash: 'dash' });
    s.sym(O[0] + 18, cy + 5, '<i>O</i>', { size: 16, anchor: 'start' });
    // the fringe width, between the first and second bright fringes above O
    const b1 = bright[3].y, b2 = bright[4].y;
    dim(s, [O[0] - 20, b2], [O[0] - 20, b1]);
    s.sym(O[0] - 28, (b1 + b2) / 2 + 5, '<i>β</i>', { size: 15, anchor: 'end' });
    // the screen distance
    dim(s, [slit, cy + half + 20], [O[0], cy + half + 20]);
    s.sym((slit + O[0]) / 2, cy + half + 38, '<i>D</i>', { size: 16 });
    s.result('Central bright fringe at O');
    s.place([
      { t: 'Coherent sources', p: [PAIR[2] - 6 + 6 * Math.SQRT1_2, PAIR[1] + 6 - 6 * Math.SQRT1_2], at: [[140, 34, 'start'], [136, 34, 'start']] },
      { t: 'Interference fringes', hi: true, p: [O[0] + 12, fTop + 10], at: [[W - 8, 4, 'end'], [W - 8, 8, 'end']] },
      { t: 'Source', p: [src, cy], at: [[4, 60, 'start'], [4, 66, 'start']] },
      { t: 'Single slit', p: [Sp[0], cy + Sbar - 6], at: [[4, 262, 'start'], [4, 266, 'start']] },
      { t: 'Cylindrical wavefront', p: polar(Sp, 8 * lam, 28), at: [[4, 4, 'start'], [4, 8, 'start']] },
      { t: 'Screen', p: [O[0], cy + half - 12], at: [[234, 226, 'start'], [234, 222, 'start']] },
    ]);
    return s;
  },
  check() {
    const { d, D, beta, cy } = G104, g = g104(), { Sp, S1, S2, O, bright, dark, lam } = g;
    const s = fig104.draw(fig104.cases[0]);
    const pd = (y: number) => len(S2, [O[0], y]) - len(S1, [O[0], y]);
    const yb = bright.map((f) => cy - f.y);
    const gaps = yb.slice(1).map((y, k) => y - yb[k]);
    const worst = Math.max(...gaps.map((x) => Math.abs(x - beta) / beta));
    // Example 1 (p. 663): λ = 600 nm, d = 0.8 mm, D = 1.5 m
    const b1 = (600e-9 * 1.5) / 0.8e-3;
    return [
      [`S lies on the perpendicular bisector of S₁S₂: SS₁ = SS₂ = ${fmt(len(Sp, S1), 3)} px, so the wavefronts from S reach S₁ and S₂ in phase (coherent sources)`, close(len(Sp, S1), len(Sp, S2), 1e-9)],
      [`The central bright fringe at O: S₂O − S₁O = ${fmt(pd(O[1]), 9)} (zero path difference)`, close(pd(O[1]), 0, 1e-9) && close(bright[2].y, O[1], 1e-6)],
      [`Bright fringes where S₂P − S₁P = mλ: ${bright.map((f) => `${fmt(pd(f.y) / lam, 4)}λ`).join(', ')}`, bright.every((f) => close(pd(f.y), f.m * lam, 1e-6))],
      [`Dark fringes halfway, where S₂P − S₁P = (m + ½)λ: ${dark.map((f) => `${fmt(pd(f.y) / lam, 4)}λ`).join(', ')}, each between two bright ones`, dark.every((f) => close(pd(f.y), f.m * lam, 1e-6)) && dark.every((f, k) => f.y < bright[k].y && f.y > bright[k + 1].y)],
      [`Equally spaced: the gaps between bright fringes are ${gaps.map((x) => fmt(x, 2)).join(', ')} px, within ${fmt(100 * worst, 1)}% of β = λD/d = ${fmt((lam * D) / d, 3)} px (the small-angle approximation)`, close((lam * D) / d, beta, 1e-9) && worst < 0.05],
      [`The β mark spans the first to the second bright fringe above O (${fmt(bright[3].y - bright[4].y, 2)} px)`, bright[3].y > bright[4].y],
      [`Worked example 1 (p. 663): β = λD/d = ${fmt(b1 * 1e3, 4)} mm, the 3rd bright fringe at 3β = ${fmt(3 * b1 * 1e3, 4)} mm (the book's 1.125 mm, 3.375 mm)`, close(b1, 1.125e-3, 1e-12) && close(3 * b1, 3.375e-3, 1e-12)],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* Figure 10.5 · YDSE geometry: the path difference (topic 03)            */
/* ===================================================================== */
/**
 * Slits S₁, S₂ (d = 40 px) on a barrier, the screen D = 236 px away and P at
 * y = 66 px above O. d is drawn magnified, as in the book (d/D ≈ 0.17), so S₁P,
 * MP and S₂P visibly spread; N is the true foot of the perpendicular from S₁
 * onto S₂P. The inset shows the slits magnified in the limit D ≫ d, where S₁P,
 * MP and S₂P are parallel at θ: the triangle S₁S₂N has its right angle at N
 * and the angle θ at S₁, so S₂N = d sin θ.
 */
const G105 = { cy: 116, bx: 62, d: 40, D: 236, y: 66, half: [96, 92] as [number, number], gap: 4, arcR: 150, inset: { S1: [60, 254] as P, d: 96 } };
const g105 = () => {
  const { cy, bx, d, D, y } = G105;
  const S1: P = [bx, cy - d / 2], S2: P = [bx, cy + d / 2], M: P = [bx, cy], O: P = [bx + D, cy], Pp: P = [bx + D, cy - y];
  const N = foot(S1, S2, Pp);
  const theta = Math.atan2(y, D) / D2R;
  const { S1: I1, d: di } = G105.inset;
  const I2: P = [I1[0], I1[1] + di];
  const IN = add(I2, [Math.cos(theta * D2R), -Math.sin(theta * D2R)], di * Math.sin(theta * D2R));
  return { S1, S2, M, O, Pp, N, theta, I1, I2, IN };
};
const fig105: Diagram = {
  id: 'p12-10-fig-10.5',
  topic: 2,
  name: 'Path difference in YDSE',
  cases: [{ chip: 'Δx = d sin θ', cap: 'Geometry of YDSE. Slits <i>S</i><sub>1</sub>, <i>S</i><sub>2</sub> (separation <i>d</i>) with midpoint <i>M</i>; screen at distance <i>D</i>; <i>P</i> is at height <i>y</i> above the central point <i>O</i>, and <i>MP</i> makes angle <i>θ</i> with the axis. <i>N</i> is the foot of the perpendicular from <i>S</i><sub>1</sub> onto <i>S</i><sub>2</sub><i>P</i>, so for <i>D</i> ≫ <i>d</i> the path difference is <i>S</i><sub>2</sub><i>N</i> = <i>d</i> sin <i>θ</i>. The inset magnifies the slits.' }],
  draw() {
    const s = new Sketch(W, 376);
    const { cy, bx, half, gap, arcR, inset } = G105, g = g105(), { S1, S2, M, O, Pp, N, theta, I1, I2, IN } = g;
    // the barrier with its two slits, and the screen
    path(s, [[bx, cy - half[0]], [bx, S1[1] - gap]], { w: 2.4 });
    path(s, [[bx, S1[1] + gap], [bx, S2[1] - gap]], { w: 2.4 });
    path(s, [[bx, S2[1] + gap], [bx, cy + half[1]]], { w: 2.4 });
    path(s, [[O[0], cy - half[0]], [O[0], cy + half[1]]], { w: 2.6 });
    // the axis MO and the line MP at θ
    guide(s, [bx + 4, cy], [O[0] - 4, cy]);
    path(s, [M, Pp], { color: C.slate, w: 1.3, dash: 'dash' });
    path(s, arcPts(M, arcR, 0, theta, 24), { color: C.slate, w: 1.3 });
    const lt = polar(M, arcR - 16, theta * 0.32);
    s.sym(lt[0], lt[1] + 5, '<i>θ</i>', { size: 15 });
    // the two paths, and the perpendicular S₁N
    path(s, [S1, Pp], { w: 1.7 });
    path(s, [S2, Pp], { w: 1.7 });
    guide(s, S1, N, C.ink);
    path(s, [S2, N], { color: C.mari, w: 3.2 });
    [S1, S2, M, N, Pp, O].forEach((p) => pin(s, p));
    s.sym(bx - 8, S1[1] - 3, '<i>S</i><sub>1</sub>', { size: 15, anchor: 'end' });
    s.sym(bx - 8, cy + 5, '<i>M</i>', { size: 15, anchor: 'end' });
    s.sym(bx - 8, S2[1] + 13, '<i>S</i><sub>2</sub>', { size: 15, anchor: 'end' });
    s.sym(N[0] + 10, N[1] + 18, '<i>N</i>', { size: 15, anchor: 'start' });
    dim(s, [bx - 42, S1[1]], [bx - 42, S2[1]]);
    s.sym(bx - 48, cy + 5, '<i>d</i>', { size: 15, anchor: 'end' });
    s.sym(O[0] + 8, Pp[1] - 6, '<i>P</i>', { size: 15, anchor: 'start' });
    s.sym(O[0] + 8, cy + 18, '<i>O</i>', { size: 15, anchor: 'start' });
    dim(s, [O[0] + 14, Pp[1] + 2], [O[0] + 14, cy - 2]);
    s.sym(O[0] + 20, (cy + Pp[1]) / 2 + 5, '<i>y</i>', { size: 15, anchor: 'start' });
    dim(s, [bx, cy + half[1] + 14], [O[0], cy + half[1] + 14]);
    s.sym((bx + O[0]) / 2, cy + half[1] + 32, '<i>D</i>', { size: 16 });
    // the inset: the slits magnified, D ≫ d
    outline(s, [[I1[0] - 46, I1[1] - 26], [I1[0] + 70, I1[1] - 26], [I1[0] + 70, I2[1] + 22], [I1[0] - 46, I2[1] + 22]], { color: C.grey, w: 1.1, dash: 'dash' });
    path(s, [I1, I2], { w: 1.7 });
    path(s, [I1, IN], { w: 1.7 });
    path(s, [I2, IN], { color: C.mari, w: 3.2 });
    square(s, IN, sub(I1, IN), sub(I2, IN), 7);
    path(s, arcPts(I1, 34, -90, -90 + theta, 16), { color: C.slate, w: 1.3 });
    [I1, I2, IN].forEach((p) => pin(s, p));
    s.sym(I1[0] - 8, I1[1] + 5, '<i>S</i><sub>1</sub>', { size: 15, anchor: 'end' });
    s.sym(I2[0] - 8, I2[1] + 5, '<i>S</i><sub>2</sub>', { size: 15, anchor: 'end' });
    s.sym(IN[0] + 8, IN[1] + 6, '<i>N</i>', { size: 15, anchor: 'start' });
    s.sym(I1[0] + 17, I1[1] + 36, '<i>θ</i>', { size: 15, anchor: 'start' });
    s.sym(I1[0] - 22, (I1[1] + I2[1]) / 2 + 5, '<i>d</i>', { size: 15, anchor: 'end' });
    resultBlock(s, ['Δ<i>x</i> = <i>S</i><sub>2</sub><i>N</i> = <i>d</i> sin <i>θ</i>']);
    // The path difference is named from below, its line leaving S₂N at right
    // angles (about 70° down), so it passes clear of the S₂ and N dots, 7 px away
    // at either end.
    const tp = Math.atan2(S2[1] - Pp[1], Pp[0] - S2[0]), pd = add(S2, sub(N, S2), 0.5), py = cy + 54, pdx = pd[0] + (py - pd[1]) * Math.tan(tp) - 8;
    s.place([
      { t: 'Path difference', hi: true, p: pd, at: [[pdx, py, 'start'], [pdx + 2, py + 4, 'start']] },
      { t: 'Screen', p: [O[0], cy + 60], at: [[O[0] - 76, cy + 52, 'start'], [O[0] - 70, cy + 44, 'start']] },
      { t: 'Magnified view of the slits', p: [I1[0] + 70, I1[1] + 15], at: [[W - 4, I1[1] + 4, 'end'], [W - 4, I1[1] + 8, 'end']] },
    ]);
    void inset;
    return s;
  },
  check() {
    const { d, D, y } = G105, g = g105(), { S1, S2, M, O, Pp, N, theta, I1, I2, IN } = g;
    const s = fig105.draw(fig105.cases[0]);
    const pdDrawn = len(S2, Pp) - len(S1, Pp), s2n = len(S2, N);
    // the same geometry at a real scale (worked example 1, p. 663): d = 0.8 mm, D = 1.5 m, P at the 3rd bright fringe
    const dd = 0.8e-3, DD = 1.5, lam = 600e-9, yy = (3 * lam * DD) / dd;
    const r1r = Math.hypot(DD, yy - dd / 2), r2r = Math.hypot(DD, yy + dd / 2), th = Math.atan2(yy, DD);
    const exact = r2r - r1r;
    return [
      [`M is the midpoint of S₁S₂ (d = ${d} px) and MO is the axis, perpendicular to the barrier and the screen; P is y = ${y} px above O`, close(len(S1, M), len(M, S2), 1e-9) && close(len(S1, S2), d, 1e-9) && close(M[1], O[1], 1e-9) && close(O[1] - Pp[1], y, 1e-9)],
      [`MP makes θ = tan⁻¹(y/D) = ${fmt(theta, 2)}° with the axis, and the θ arc spans it`, close(Math.tan(theta * D2R), y / D, 1e-12)],
      [`N is the foot of the perpendicular from S₁ onto S₂P: S₁N ⊥ S₂P (${fmt(between(sub(N, S1), sub(Pp, S2)), 6)}°) and N lies on S₂P`, close(between(sub(N, S1), sub(Pp, S2)), 90, 1e-6) && distSeg(N, S2, Pp) < 1e-9],
      [`On the drawing (d drawn magnified, d/D = ${fmt(d / D, 2)}) S₂P − S₁P = ${fmt(pdDrawn, 2)} px against S₂N = ${fmt(s2n, 2)} px and d sin θ = ${fmt(d * Math.sin(theta * D2R), 2)} px: they agree only when D ≫ d`, s2n > pdDrawn],
      [`At a real scale (d = 0.8 mm, D = 1.5 m, P at y = 3λD/d = ${fmt(yy * 1e3, 4)} mm): S₂P − S₁P = ${fmt(exact / lam, 6)}λ and d sin θ = ${fmt((dd * Math.sin(th)) / lam, 6)}λ, equal to 1 part in 10⁵: 3λ, the 3rd bright fringe`, Math.abs(exact - dd * Math.sin(th)) / exact < 1e-5 && close(exact / lam, 3, 1e-4)],
      [`The inset (D ≫ d): S₁S₂ = d, the right angle at N (${fmt(between(sub(I1, IN), sub(I2, IN)), 6)}°), the angle at S₁ is θ (${fmt(between(sub(I2, I1), sub(IN, I1)), 6)}°), so S₂N = d sin θ = ${fmt(len(I2, IN), 3)} px of ${G105.inset.d}`, close(between(sub(I1, IN), sub(I2, IN)), 90, 1e-6) && close(between(sub(I2, I1), sub(IN, I1)), theta, 1e-6) && close(len(I2, IN), G105.inset.d * Math.sin(theta * D2R), 1e-9)],
      [`In the inset S₂N runs parallel to MP (the D ≫ d limit): ${fmt(between(sub(IN, I2), sub(Pp, M)), 6)}°`, close(between(sub(IN, I2), sub(Pp, M)), 0, 1e-6)],
      ...layout(s),
    ];
  },
};

/** Physics 12 Ch 10 (Wave Optics): Figures 10.1–10.5 (Topics 01 and 03; Topic 02 has no drawing). */
export const DIAGRAMS_PHYSICS_12_10: Diagram[] = [fig101, fig102, fig103, fig104, fig105];
