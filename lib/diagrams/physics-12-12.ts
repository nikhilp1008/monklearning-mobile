import { C, LABEL_GAP, Rect, Sketch, crosses, mathW, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * PHYSICS CLASS 12, CHAPTER 12 (Atoms), Topics 01–02: every drawing of the
 * Master Reference book in pp. 762–782, redrawn. They are the seven numbered
 * figures, each printed on a "CHAPTER 12 · FIGURES" page (12.1–12.4 on p. 771,
 * captions first on p. 770; 12.5 on p. 780, caption on p. 779; 12.6 and 12.7
 * on p. 782, captions on p. 781). There are no unnumbered drawings in these
 * pages: pp. 762–782 were checked page by page; the rest is prose, typeset
 * equations, boxed formulas and the cheat-sheet boxes (the ✓/✗ marks of
 * worked example 2 on p. 776 are characters, not drawings).
 *
 * Every figure is computed from the physics, never placed by eye: the α paths
 * are the Coulomb hyperbolae r = a(e² − 1)/(e cos ψ − 1) with a = d/2 and
 * e = 1/sin(θ/2), so b = (d/2) cot(θ/2) (the book's b = Ze²/(4πε₀K) cot(θ/2)
 * with d = 2Ze²/(4πε₀K)), and the check integrates the equation of motion
 * under the inverse-square repulsion and finds the drawn curves; the energy
 * bars follow PE = Kd/r; the N(θ) curve is 1/sin⁴(θ/2) on a true log scale;
 * the hydrogen levels sit at −13.6/n² eV to scale; the de Broglie waves are
 * r = r₀ + A cos(nφ) round the orbit. Each `check` recomputes what the figure
 * and its caption state and measures that no label or tag touches a line it
 * does not name.
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

/* ---------- drawing helpers (as in physics-12-10.ts) ---------- */
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
  if (!o.free) keep(s, [...pts, pts[0]]);
}
const box = (r: Rect): P[] => [[r[0], r[1]], [r[2], r[1]], [r[2], r[3]], [r[0], r[3]]];
/** Every arrowhead drawn, by sketch, as its tip and its middle: a tag's dot keeps off them (`dotsOffHeads`). */
const HEADS = new WeakMap<Sketch, [P, P][]>();
/** Every arrowhead as the triangle drawn, by sketch. */
const INKS = new WeakMap<Sketch, P[][]>();
const headTri = (tip: P, u: P, L = 9, hw = 4.5): P[] => { const b = add(tip, u, -L), nv: P = [-u[1], u[0]]; return [tip, add(b, nv, hw), add(b, nv, -hw)]; };
const keepHead = (s: Sketch, tip: P, u: P, L: number, hw = 4.5) => {
  HEADS.set(s, [...(HEADS.get(s) ?? []), [tip, add(tip, u, -L / 2)]]);
  INKS.set(s, [...(INKS.get(s) ?? []), headTri(tip, u, L, hw)]);
};
/** Point-to-segment distance. */
function distSeg(p: P, a: P, b: P) {
  const d = sub(b, a), L = dotp(d, d) || 1, k = Math.max(0, Math.min(1, dotp(sub(p, a), d) / L));
  return len(p, add(a, d, k));
}
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
  const tri = headTri(p, u, L, hw);
  s.add(`<path d="M${tri.map((q) => `${r1(q[0])} ${r1(q[1])}`).join(' L')} Z" fill="${color}"/>`);
  keep(s, [...tri, tri[0]]);
  keepHead(s, p, u, L, hw);
}
/** An arrow from a to b, its head at b. */
function arrow(s: Sketch, a: P, b: P, o: { color?: string; w?: number; dash?: 'dash' | 'dot'; L?: number; hw?: number } = {}) {
  const u = unit(sub(b, a)), L = o.L ?? 9;
  path(s, [a, add(b, u, -L + 1)], { color: o.color, w: o.w ?? 1.8, dash: o.dash });
  head(s, b, u, o.color ?? C.ink, L, o.hw ?? 4.5);
}
/** A small head in the middle of a line, pointing along it (the direction of travel). */
function midHead(s: Sketch, a: P, b: P, color: string = C.ink, at = 0.5) {
  head(s, add(a, sub(b, a), at), unit(sub(b, a)), color, 8, 4);
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
/** A small ring (a nucleus): a point tags keep off, and an outline labels keep off. */
function ring(s: Sketch, c: P, r: number, color: string = C.ink, w = 1.8) {
  s.point(c[0], c[1], r, `<circle cx="${r1(c[0])}" cy="${r1(c[1])}" r="${r}" fill="none" stroke="${color}" stroke-width="${w}"/>`);
  keep(s, arcPts(c, r, 0, 360, 36));
}
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
  const size = o.size ?? 15, lh = size + 6;
  const plain = (t: string) => t.replace(/<\/?(?:i|sub|sup)>/g, '');
  const w = Math.max(...lines.map((t) => mathW(t, size))) + 30, h = lines.length * lh + 14;
  const x0 = s.w - 8 - w, y0 = s.h - 8 - h;
  s.tags.push({ name: plain(lines.join(' ')), rect: [x0, y0, x0 + w, y0 + h], from: null, to: null });
  s.add(`<rect x="${r1(x0)}" y="${r1(y0)}" width="${r1(w)}" height="${r1(h)}" rx="15" fill="#fff" stroke="${C.text}" stroke-width="1.6"/>`);
  lines.forEach((t, i) => s.text(x0 + w / 2, y0 + 7 + lh * i + lh / 2 + size * 0.36, t, { size, semibold: true }));
  return [x0, y0, x0 + w, y0 + h];
}

/* ---------- the book's constants (Topic 01, p. 763; Topic 02, p. 774) ---------- */
const kC = 9.0e9, eC = 1.6e-19, MeV = 1e6 * eC;
const me = 9.1e-31, hP = 6.63e-34, a0 = 0.529e-10;
/** The Rydberg constant the topics use (R = 1.097 × 10⁷ m⁻¹). */
const RH = 1.097e7;

/* ===================================================================== */
/* Figure 12.1 · the Geiger–Marsden set-up (topic 01)                     */
/* ===================================================================== */
/**
 * A schematic, as the book draws it. The source sits in the lead collimator's
 * channel, so the narrow beam leaves along the channel's axis and meets the
 * foil square on at F. The detector (a ZnS screen with its microscope behind
 * it) sits on a circle of radius R about F, at θ = 50° (the book's drawing)
 * from the beam's forward direction, its screen square to the radius so it
 * faces the foil; a second, faint position on the same circle shows that it
 * rotates round the foil.
 */
const G121 = { cham: [8, 40, 332, 270] as Rect, F: [204, 184] as P, coll: [22, 172, 80, 196] as Rect, src: 36, R: 76, th: 50, ghost: 128, arc: [8, 172] as [number, number], foil: 30, scr: 13, mic: [5, 22] as [number, number], thR: 34 };
const g121 = () => {
  const { F, coll, src, R, th, ghost } = G121;
  const cy = (coll[1] + coll[3]) / 2;
  const S: P = [src, cy];
  const det = polar(F, R, th), gh = polar(F, R, ghost);
  const u = unit(sub(det, F)), t: P = [-u[1], u[0]];
  return { cy, S, det, gh, u, t };
};
const fig121: Diagram = {
  id: 'p12-12-fig-12.1',
  topic: 0,
  name: 'Geiger–Marsden experiment',
  cases: [{ chip: 'Set-up', cap: 'Geiger–Marsden setup: a narrow α beam strikes a thin gold foil, and a rotatable ZnS screen with microscope counts scintillations at angle <i>θ</i>.' }],
  draw() {
    const s = new Sketch(W, 278);
    const { cham, F, coll, R, th, arc, foil, scr, mic, thR } = G121, g = g121(), { cy, S, det, gh, u, t } = g;
    // the vacuum chamber
    outline(s, box(cham), { color: C.slate, w: 1.3, dash: 'dash' });
    // the lead collimator: a block with a channel along the beam, the source at its inner end
    outline(s, box(coll), { w: 1.8 });
    path(s, [[S[0] + 6, cy - 3.5], [coll[2], cy - 3.5]], { w: 1.2 });
    path(s, [[S[0] + 6, cy + 3.5], [coll[2], cy + 3.5]], { w: 1.2 });
    ring(s, S, 4.5);
    // the narrow beam, from the channel to the foil
    path(s, [[coll[2] + 2, cy], [F[0] - 4, cy]], { color: C.mari, w: 2.6 });
    midHead(s, [coll[2] + 2, cy], [F[0] - 4, cy], C.mari, 0.55);
    // the thin gold foil, square to the beam
    outline(s, [[F[0] - 2.5, F[1] - foil], [F[0] + 2.5, F[1] - foil], [F[0] + 2.5, F[1] + foil], [F[0] - 2.5, F[1] + foil]], { w: 1.5 });
    // the circle the detector moves on, about the foil
    path(s, arcPts(F, R, arc[0], arc[1], 80), { color: C.slate, w: 1.2, dash: 'dash' });
    // the forward direction and the scattered path to the detector, with θ between them
    guide(s, [F[0] + 5, F[1]], [F[0] + R + 22, F[1]], C.slate, 'dot');
    path(s, [add(F, u, 6), add(det, u, -5)], { color: C.mari, w: 1.8, dash: 'dash' });
    path(s, arcPts(F, thR, 0, th, 24), { color: C.slate, w: 1.2 });
    const tl = polar(F, thR + 13, th / 2);
    s.sym(tl[0], tl[1] + 5, '<i>θ</i>', { size: 16 });
    // the detector: the ZnS screen square to the radius, the microscope behind it, outwards
    const screen = (c: P, uu: P, tt: P, color: string, dash?: 'dash') => {
      path(s, [add(c, tt, -scr), add(c, tt, scr)], { color, w: 4, dash });
      const m0 = add(c, uu, 4), m1 = add(c, uu, mic[1]);
      outline(s, [add(m0, tt, -mic[0]), add(m1, tt, -mic[0]), add(m1, tt, mic[0]), add(m0, tt, mic[0])], { color, w: 1.4, dash });
    };
    screen(det, u, t, C.ink);
    const ug = unit(sub(gh, F));
    screen(gh, ug, [-ug[1], ug[0]], C.grey);
    s.place([
      { t: 'Vacuum chamber', p: [cham[0] + 70, cham[1]], at: [[6, 8, 'start'], [10, 8, 'start']] },
      { t: 'ZnS screen + microscope', p: add(det, u, mic[1] - 4), at: [[W - 4, 8, 'end'], [W - 8, 8, 'end']] },
      { t: 'Detector rotates around the foil', p: polar(F, R, 150), at: [[14, 50, 'start'], [14, 52, 'start'], [14, 56, 'start']] },
      { t: 'Thin gold foil', p: [F[0], F[1] + foil], at: [[F[0] - 30, 236, 'start'], [F[0] - 24, 236, 'start']] },
      { t: 'Lead collimator', p: [coll[0] + 30, coll[3]], at: [[14, 236, 'start'], [16, 236, 'start']] },
      { t: 'Alpha source', p: [S[0], S[1] - 4.5], own: S, at: [[14, 132, 'start'], [16, 128, 'start']] },
      { t: 'Narrow alpha beam', hi: true, p: [(coll[2] + F[0]) / 2 - 18, cy], at: [[70, 206, 'start'], [66, 210, 'start'], [62, 206, 'start']] },
    ]);
    return s;
  },
  check() {
    const { F, coll, R, th, ghost, arc } = G121, g = g121(), { cy, S, det, gh, u } = g;
    const s = fig121.draw(fig121.cases[0]);
    const fwd: P = [1, 0];
    return [
      ['The source, the collimator’s channel and the foil lie on one line: the beam leaves along the channel and meets the foil at F, square on', close(S[1], cy) && close(F[1], cy) && S[0] < coll[2] && coll[2] < F[0]],
      [`The detector is on the circle about the foil (radius ${fmt(len(F, det), 3)} px = R), at θ = ${fmt(between(fwd, sub(det, F)), 6)}° from the beam’s forward direction (the angle marked θ)`, close(len(F, det), R, 1e-9) && close(between(fwd, sub(det, F)), th, 1e-9)],
      [`Its screen is square to the radius, so it faces the foil: screen · radius = ${fmt(dotp([-u[1], u[0]], u), 9)}`, close(dotp([-u[1], u[0]], u), 0, 1e-12)],
      [`The faint second position is on the same circle (${fmt(len(F, gh), 3)} px) at ${ghost}°, inside the dashed arc ${arc[0]}°–${arc[1]}°, which is centred on the foil: the detector rotates around the foil`, close(len(F, gh), R, 1e-9) && ghost > arc[0] && ghost < arc[1] && th > arc[0] && th < arc[1]],
      ['Everything (source, beam, foil, detector) is inside the vacuum chamber', [S, F, det, gh, polar(F, R + 22, th), polar(F, R + 22, ghost)].every((p) => p[0] > G121.cham[0] && p[0] < G121.cham[2] && p[1] > G121.cham[1] && p[1] < G121.cham[3])],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* Figure 12.2 · α paths for different impact parameters (topic 01)      */
/* ===================================================================== */
/**
 * The nucleus N at the origin, the α particles arriving from the left along
 * lines a height b above the axis through N. With d the head-on distance of
 * closest approach (K = 2kZe²/d), the book's b = Ze²/(4πε₀K) cot(θ/2) is
 * b = (d/2) cot(θ/2), and the path is the Coulomb hyperbola with a = d/2,
 * eccentricity e = √(1 + (b/a)²) = 1/sin(θ/2), focus at N on its convex side:
 * r = a(e² − 1)/(e cos ψ − 1), ψ measured from the direction of closest
 * approach. θ takes the book's three values (26°, 58°, 103°); b follows.
 * Drawn to scale with d = 36 px. b is marked, as defined, from the axis to
 * each path's line of approach (its asymptote); where the drawing starts,
 * 5–7d from the nucleus, a path has already bent a pixel or three above it, so
 * each b arrow ends on a short dotted stretch of that asymptote, drawn from the
 * arrow to the right, with the path running just above it (expert review).
 */
const G122 = { N: [250, 222] as P, d: 36, th: [26, 58, 103], x0: [20, 48, 76], xL: 12, clip: [[300, 0], [326, 58], [326, 38]] as P[], back: 100, asy: 46 };
/** The hyperbola for deflection θ (degrees), in physics coordinates (nucleus at origin, x right, y up): from radius rIn on the way in to rOut on the way out. */
const hyper = (thDeg: number, rIn: number, rOut: number, n = 600): P[] => {
  const a = G122.d / 2, th = thDeg * D2R, e = 1 / Math.sin(th / 2), p = a * (e * e - 1);
  const alpha = Math.PI / 2 + th / 2;
  // ψ where r = R on either branch: e cos ψ − 1 = p/R
  const psiAt = (R: number) => Math.acos((p / R + 1) / e);
  return samples(psiAt(rIn), -psiAt(rOut), n).map((psi): P => {
    const r = p / (e * Math.cos(psi) - 1);
    return [r * Math.cos(alpha + psi), r * Math.sin(alpha + psi)];
  });
};
const toDraw = (q: P): P => [G122.N[0] + q[0], G122.N[1] - q[1]];
const bOf = (thDeg: number) => (G122.d / 2) / Math.tan((thDeg * D2R) / 2);
const g122 = () => {
  const { N, th, x0 } = G122;
  return th.map((t, i) => {
    const b = bOf(t);
    // start each path about x = x0[i] on the drawing (far to the left), and run it
    // out until it reaches the frame's right edge or top
    const rIn = Math.hypot(N[0] - x0[i], b);
    const all = hyper(t, rIn, 600, 2400).map(toDraw);
    const stop = all.findIndex((p, k) => k > 10 && (p[0] > G122.clip[i][0] || p[1] < G122.clip[i][1]));
    const pts = stop > 0 ? all.slice(0, stop) : all;
    return { th: t, b, pts };
  });
};
/**
 * The same encounter integrated step by step (RK4) under the repulsion
 * a = k r̂/r², with m = 1, speed 1 far away and k = d/2 (so that K = ½ = k/d,
 * head-on): returns the path and the final direction.
 */
const integrate = (b: number) => {
  const k = G122.d / 2, far = 1e6;
  // start a million px away (the asymptote: the path there is within 10⁻⁵ rad of it), the step growing with r
  let x = -far, y = b, vx = 1, vy = 0;
  const pts: P[] = [];
  const acc = (px: number, py: number): P => { const r = Math.hypot(px, py), f = k / (r * r * r); return [f * px, f * py]; };
  for (let i = 0; i < 400000 && (Math.hypot(x, y) < far * 1.01 || i < 10); i++) {
    const dt = Math.max(0.02, 0.002 * Math.hypot(x, y));
    const k1 = acc(x, y), x2: P = [x + (vx * dt) / 2, y + (vy * dt) / 2], v2: P = [vx + (k1[0] * dt) / 2, vy + (k1[1] * dt) / 2];
    const k2 = acc(x2[0], x2[1]), x3: P = [x + (v2[0] * dt) / 2, y + (v2[1] * dt) / 2], v3: P = [vx + (k2[0] * dt) / 2, vy + (k2[1] * dt) / 2];
    const k3 = acc(x3[0], x3[1]), x4: P = [x + v3[0] * dt, y + v3[1] * dt], v4: P = [vx + k3[0] * dt, vy + k3[1] * dt];
    const k4 = acc(x4[0], x4[1]);
    x += (dt * (vx + 2 * v2[0] + 2 * v3[0] + v4[0])) / 6;
    y += (dt * (vy + 2 * v2[1] + 2 * v3[1] + v4[1])) / 6;
    vx += (dt * (k1[0] + 2 * k2[0] + 2 * k3[0] + k4[0])) / 6;
    vy += (dt * (k1[1] + 2 * k2[1] + 2 * k3[1] + k4[1])) / 6;
    if (Math.hypot(x, y) < 320) pts.push([x, y]);
  }
  return { pts, th: Math.atan2(vy, vx) / D2R, rMin: Math.min(...pts.map((q) => Math.hypot(q[0], q[1]))) };
};
/** The distance from p to the polyline `pts` (its nearest segment). */
const toLine = (p: P, pts: P[]) => { let m = Infinity; for (let i = 0; i < pts.length - 1; i++) m = Math.min(m, distSeg(p, pts[i], pts[i + 1])); return m; };
const fig122: Diagram = {
  id: 'p12-12-fig-12.2',
  topic: 0,
  name: 'Alpha paths and impact parameter',
  cases: [{ chip: 'Three impact parameters', cap: 'α paths for different impact parameters <i>b</i>: large <i>b</i> gives a small deflection <i>θ</i>, small <i>b</i> a large <i>θ</i>, and <i>b</i> = 0 turns back at distance <i>d</i>.' }],
  draw() {
    const s = new Sketch(W, 280);
    const { N, d, x0, xL, back, asy } = G122, paths = g122(), T: P = [N[0] - d, N[1]];
    // the head-on path (b = 0) along the axis to the turning point, and back (dashed)
    path(s, [[xL, N[1]], T], { w: 1.7 });
    midHead(s, [xL, N[1]], T, C.ink, 0.7);
    arrow(s, [T[0] - 4, N[1] + 10], [T[0] - back, N[1] + 10], { dash: 'dash', w: 1.5, L: 8, hw: 4 });
    s.sym(T[0] - back / 2 - 14, N[1] + 32, '<i>b</i> = 0: <i>θ</i> = 180°', { size: 14 });
    // d, from the turning point to the nucleus
    guide(s, [T[0], N[1] + 3], [T[0], N[1] + 41]);
    dim(s, [T[0], N[1] + 38], [N[0], N[1] + 38]);
    s.sym((T[0] + N[0]) / 2, N[1] + 54, '<i>d</i>', { size: 16 });
    // the three paths, each with its b measured from the axis where it starts
    const labs = ['<i>θ</i><sub>1</sub> = 26°', '<i>θ</i><sub>2</sub> = 58°', '<i>θ</i><sub>3</sub> = 103°'];
    paths.forEach((q, i) => {
      path(s, q.pts, { w: 1.8 });
      const k = Math.round(q.pts.length * 0.12);
      midHead(s, q.pts[k], q.pts[k + 1], C.ink, 0.5);
      dim(s, [x0[i], N[1]], [x0[i], N[1] - q.b]);
      // the asymptote the arrow measures to, dotted, with the path just above it
      guide(s, [x0[i], N[1] - q.b], [x0[i] + asy, N[1] - q.b]);
      s.sym(x0[i], N[1] + 20, `<i>b</i><sub>${i + 1}</sub>`, { size: 14 });
    });
    const e1 = paths[0].pts[paths[0].pts.length - 1], e2 = paths[1].pts[paths[1].pts.length - 1], e3 = paths[2].pts[paths[2].pts.length - 1];
    s.sym(W - 4, e1[1] + 26, labs[0], { size: 14, anchor: 'end' });
    s.sym(e2[0] - 10, e2[1] + 2, labs[1], { size: 14, anchor: 'end' });
    s.sym(e3[0] - 8, e3[1] + 6, labs[2], { size: 14, anchor: 'end' });
    // the nucleus
    ring(s, N, 6, C.mari, 2.2);
    s.sym(N[0] + 12, N[1] - 6, '+<i>Ze</i>', { size: 15, anchor: 'start' });
    s.place([
      { t: 'Nucleus', hi: true, p: [N[0] + 4.3, N[1] + 4.3], own: N, bare: true, at: [[W - 6, 244, 'end'], [W - 6, 248, 'end'], [W - 10, 240, 'end']] },
    ]);
    return s;
  },
  check() {
    const { d, N } = G122, paths = g122();
    const s = fig122.draw(fig122.cases[0]);
    const out: Check[] = [];
    paths.forEach((q, i) => {
      const run = integrate(q.b);
      // every drawn point (back in physics coordinates) against the integrated path
      const phys = q.pts.map((p): P => [p[0] - N[0], N[1] - p[1]]);
      const worst = Math.max(...phys.filter((_, j) => j % 8 === 0).map((p) => toLine(p, run.pts)));
      const rMin = Math.min(...phys.map((p) => Math.hypot(p[0], p[1])));
      const eOut = unit(sub(phys[phys.length - 1], phys[phys.length - 20]));
      out.push([`Path ${i + 1}: b = (d/2) cot(θ/2) = ${fmt(q.b, 2)} px for θ = ${q.th}° (b/d = ${fmt(q.b / d, 3)})`, close(q.b, (d / 2) / Math.tan((q.th * D2R) / 2), 1e-12)]);
      out.push([`Path ${i + 1} integrated under the Coulomb repulsion from b = ${fmt(q.b, 2)} px leaves at ${fmt(run.th, 3)}° (the label’s ${q.th}°), and every drawn point lies within ${fmt(worst, 3)} px of it`, Math.abs(run.th - q.th) < 0.05 && worst < 0.5]);
      out.push([`Path ${i + 1} comes no closer than ${fmt(rMin, 2)} px = (d/2)(1 + 1/sin(θ/2)) = ${fmt((d / 2) * (1 + 1 / Math.sin((q.th * D2R) / 2)), 2)} px, farther than d = ${d} px; it is heading out at ${fmt(Math.atan2(eOut[1], eOut[0]) / D2R, 1)}° where the drawing ends`, Math.abs(rMin - (d / 2) * (1 + 1 / Math.sin((q.th * D2R) / 2))) < 0.3 && rMin > d && Math.abs(run.rMin - rMin) < 0.3]);
      out.push([`Path ${i + 1}'s b is marked from the axis to its line of approach (${fmt(q.b, 2)} px); where the drawing starts, ${fmt(-phys[0][0], 0)} px left of the nucleus, the path is already ${fmt(N[1] - q.pts[0][1] - q.b, 2)} px above that line (bending away)`, N[1] - q.pts[0][1] - q.b > 0 && N[1] - q.pts[0][1] - q.b < Math.max(1, 0.05 * q.b)]);
    });
    // the dotted asymptotes: at height b exactly, and the drawn path above them all along
    paths.forEach((q, i) => {
      const span = q.pts.filter((p) => p[0] >= G122.x0[i] && p[0] <= G122.x0[i] + G122.asy);
      const above = span.map((p) => N[1] - p[1] - q.b);
      out.push([`Path ${i + 1}'s dotted asymptote runs ${G122.asy} px right from its b arrow at height b = ${fmt(q.b, 2)} px; over that stretch the path is ${fmt(Math.min(...above), 2)}–${fmt(Math.max(...above), 2)} px above it (bending away, never below)`, span.length > 0 && above.every((h) => h > 0 && h < Math.max(1.5, 0.08 * q.b))]);
    });
    out.push([`Larger b, smaller θ: b = ${paths.map((q) => fmt(q.b, 1)).join(' > ')} px for θ = ${paths.map((q) => `${q.th}°`).join(' < ')}`, paths[0].b > paths[1].b && paths[1].b > paths[2].b]);
    // head-on: K = ½ = k/d with k = d/2; the integrated head-on path turns at d
    const k = d / 2;
    // from 2000 px out, already slowed to the speed it has there coming from infinity at speed 1 (½v² + k/r = ½)
    let x = -2000, v = Math.sqrt(1 - (2 * k) / 2000), xmax = -Infinity;
    for (let i = 0; i < 400000 && v > -1 + 1e-6 && x < 0; i++) { v -= (0.02 * k) / (x * x); x += 0.02 * v; xmax = Math.max(xmax, x); }
    out.push([`b = 0: the head-on α stops at ${fmt(-xmax, 3)} px from the nucleus, where K = PE (d = ${d} px), and turns back (θ = 180°)`, Math.abs(-xmax - d) < 0.05]);
    // Worked example 3 (p. 766): K = 5 MeV, Z = 79
    const bEx = (kC * 79 * eC * eC) / (5 * MeV), thEx = 2 * Math.atan(1 / 2) / D2R;
    out.push([`Worked example 3 (p. 766): b at 90° = Ze²/(4πε₀K) = ${fmt(bEx * 1e14, 3)} × 10⁻¹⁴ m (the book’s 2.3), and twice that b gives θ = 2 cot⁻¹ 2 = ${fmt(thEx, 2)}° (the book’s 53°)`, fmt(bEx * 1e14, 1) === '2.3' && Math.round(thEx) === 53]);
    return [...out, ...layout(s)];
  },
};

/* ===================================================================== */
/* Figure 12.3 · energy in a head-on approach (topic 01)                  */
/* ===================================================================== */
/**
 * Three bars of the same height K: far away (r → ∞, all kinetic), an example
 * point on the way in (r = 2d, so PE = Kd/r = K/2 and KE = K/2, the book's
 * "KE = PE = K/2"), and the closest approach (r = d, all potential). Each bar
 * is split at PE = Kd/r; its top is on the dashed total-energy line.
 */
const G123 = { ax: 34, base: 232, K: 150, cx: [100, 190, 280], bw: 54, r: [Infinity, 2, 1] };
const fig123: Diagram = {
  id: 'p12-12-fig-12.3',
  topic: 0,
  name: 'Energy in a head-on approach',
  cases: [{ chip: 'KE into PE', cap: 'Head-on approach: all the kinetic energy <i>K</i> becomes potential energy at the closest distance <i>d</i>; the total energy stays <i>K</i>.' }],
  draw() {
    const s = new Sketch(W, 314);
    const { ax, base, K, cx, bw, r } = G123, top = base - K;
    // the energy axis
    arrow(s, [ax, base], [ax, 46], { color: C.grey, w: 1.3 });
    path(s, [[ax, base], [W - 18, base]], { color: C.grey, w: 1.3 });
    s.sym(ax + 10, 52, 'energy', { size: 14, anchor: 'start' });
    // the bars: PE = K d/r on top of KE = K − PE
    const tops = ['<i>KE</i> = <i>K</i>', '<i>KE</i> = <i>PE</i> = <i>K</i>/2', '<i>PE</i> = <i>K</i>'].map((t) => t.replace(/<i>(KE|PE)<\/i>/g, '$1'));
    cx.forEach((x, i) => {
      const pe = K / r[i], split = top + pe;
      outline(s, box([x - bw / 2, top, x + bw / 2, base]), { w: 1.8 });
      if (pe > 0 && pe < K) path(s, [[x - bw / 2, split], [x + bw / 2, split]], { w: 1.5 });
      if (K - pe > 0) s.sym(x, (split + base) / 2 + 5, 'KE', { size: 14 });
      if (pe > 0) s.sym(x, (top + split) / 2 + 5, 'PE', { size: 14 });
      s.sym(x, top - 12, tops[i], { size: 13 });
    });
    // the total energy, the same for all three
    path(s, [[ax + 4, top], [W - 18, top]], { color: C.mari, w: 2.2, dash: 'dash' });
    s.place([
      { t: 'Total energy', hi: true, p: [W - 22, top], at: [[W - 6, 10, 'end'], [W - 6, 12, 'end']] },
      { t: 'Approaching (example)', p: [cx[1], base], at: [[cx[1], 242, 'middle'], [cx[1] - 4, 242, 'middle']] },
      { t: 'Far away', p: [cx[0], base], at: [[cx[0], 278, 'middle'], [cx[0] - 4, 278, 'middle']] },
      { t: 'Closest approach (r = d)', p: [cx[2], base], at: [[W - 4, 278, 'end'], [W - 8, 278, 'end']] },
    ]);
    const te = s.tags.find((t) => t.name === 'Total energy');
    if (te) s.sym(te.rect[0] - 8, te.rect[1] + 16, '<i>E</i> = <i>K</i> (conserved)', { size: 13, anchor: 'end' });
    return s;
  },
  check() {
    const { K, r, base, cx } = G123;
    const s = fig123.draw(fig123.cases[0]);
    const pe = r.map((x) => K / x), ke = pe.map((p) => K - p);
    // Worked example 1 (p. 765): K = 6.4 MeV on silver (Z = 47)
    const Kx = 6.4 * MeV, dEx = (kC * 2 * 47 * eC * eC) / Kx;
    return [
      [`PE = Kd/r: far away (r → ∞) ${fmt(pe[0] / K, 3)}K, on the way in at r = 2d ${fmt(pe[1] / K, 3)}K, at r = d ${fmt(pe[2] / K, 3)}K`, pe[0] === 0 && close(pe[1], K / 2) && close(pe[2], K)],
      [`KE = K − PE: ${ke.map((x) => `${fmt(x / K, 3)}K`).join(', ')}, so the middle bar is the book’s KE = PE = K/2 and the last is all PE`, close(ke[0], K) && close(ke[1], pe[1]) && close(ke[2], 0)],
      [`Every bar is KE + PE = K tall (${K} px): its top is on the dashed total-energy line`, ke.every((x, i) => close(x + pe[i], K))],
      ['The bars run in the order of the approach, left to right: far away, approaching, closest', cx[0] < cx[1] && cx[1] < cx[2] && base > 0],
      ['The “Closest approach (r = d)” tag is joined to the last bar, the all-PE one (r = d)', (() => { const t = s.tags.find((x) => x.name === 'Closest approach (r = d)'); return !!t?.from && close((t.from as P)[0], cx[2], 1e-9) && close(K / r[2], K); })()],
      [`At the closest approach K = 2kZe²/d: worked example 1 (p. 765), 6.4 MeV on Z = 47, gives d = ${fmt(dEx * 1e14, 3)} × 10⁻¹⁴ m (the book’s 2.1), and there PE = ${fmt((kC * 2 * 47 * eC * eC) / dEx / MeV, 3)} MeV = K`, fmt(dEx * 1e14, 1) === '2.1' && close((kC * 2 * 47 * eC * eC) / dEx, Kx, 1e-20)],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* Figure 12.4 · Rutherford's N(θ) (topic 01)                             */
/* ===================================================================== */
/**
 * N(θ) = 1/sin⁴(θ/2), relative to its value at 180° (where it is 1, the 10⁰
 * line), on a true log scale from 10⁰ to 10⁶; θ from 5° to 180°. The
 * illustrative data points sit on the curve at the book's angles.
 */
const G124 = { ox: 62, oy: 226, x1: 324, top: 40, th0: 5, data: [10, 15, 22.5, 30, 40, 50, 60, 75, 90, 105, 120, 135, 150, 165] };
const N124 = (thDeg: number) => 1 / Math.sin((thDeg * D2R) / 2) ** 4;
const X124 = (th: number) => G124.ox + ((G124.x1 - G124.ox) * th) / 180;
const Y124 = (N: number) => G124.oy - ((G124.oy - G124.top) * Math.log10(N)) / 6;
const fig124: Diagram = {
  id: 'p12-12-fig-12.4',
  topic: 0,
  name: 'Rutherford’s scattering law',
  cases: [{ chip: 'Log scale', cap: 'Rutherford scattering: <i>N</i> ∝ 1/sin<sup>4</sup>(<i>θ</i>/2) falls steeply with angle (log scale); the data points shown are illustrative.' }],
  draw() {
    const s = new Sketch(W, 282);
    const { ox, oy, x1, top, th0, data } = G124;
    // axes
    arrow(s, [ox, oy], [ox, top - 22], { color: C.grey, w: 1.3 });
    path(s, [[ox, oy], [x1 + 6, oy]], { color: C.grey, w: 1.3 });
    [0, 2, 4, 6].forEach((p) => {
      path(s, [[ox - 4, Y124(10 ** p)], [ox, Y124(10 ** p)]], { color: C.grey, w: 1.3, free: true });
      s.sym(ox - 8, Y124(10 ** p) + 5, `10<sup>${p}</sup>`, { size: 13, anchor: 'end' });
    });
    [0, 30, 60, 90, 120, 150, 180].forEach((t) => {
      path(s, [[X124(t), oy], [X124(t), oy + 4]], { color: C.grey, w: 1.3, free: true });
      s.sym(X124(t), oy + 19, String(t), { size: 13 });
    });
    s.sym(ox + 10, 20, 'relative count <i>N</i>(<i>θ</i>)', { size: 14, anchor: 'start' });
    s.sym((ox + x1) / 2, oy + 42, 'scattering angle <i>θ</i> (degrees)', { size: 14 });
    // the theory curve and the illustrative points on it
    const curve = samples(th0, 180, 500).map((t): P => [X124(t), Y124(N124(t))]);
    path(s, curve, { color: C.mari, w: 2.4 });
    data.forEach((t) => ring(s, [X124(t), Y124(N124(t))], 3.2, C.ink, 1.5));
    // the key: the theory curve named on it, the data by its own mark
    const kx = 150, ky = 72;
    ring(s, [kx + 6, ky + 11], 3.2, C.ink, 1.5);
    s.tag(kx + 16, ky, 'Illustrative data', null, null);
    s.place([
      { t: 'Theory', hi: true, p: [X124(18), Y124(N124(18))], at: [[kx + 16, 36, 'start'], [kx + 20, 36, 'start']] },
    ]);
    const th = s.tags.find((t) => t.name === 'Theory');
    if (th) s.sym(th.rect[2] + 6, th.rect[1] + 16, '<i>N</i> ∝ 1/sin<sup>4</sup>(<i>θ</i>/2)', { size: 13, anchor: 'start', color: C.amber });
    return s;
  },
  check() {
    const { data, th0 } = G124;
    const s = fig124.draw(fig124.cases[0]);
    const ts = samples(th0, 180, 500);
    const mono = ts.slice(1).every((t, k) => N124(t) < N124(ts[k]));
    return [
      [`N(180°) = 1/sin⁴ 90° = ${fmt(N124(180), 9)}: the curve ends on the 10⁰ line`, close(N124(180), 1, 1e-12) && close(Y124(N124(180)), G124.oy, 1e-9)],
      [`It starts at θ = ${th0}° with N = ${fmt(N124(th0) / 1e5, 3)} × 10⁵, inside the 10⁶ top of the scale, and falls all the way (steeply at small θ)`, N124(th0) < 1e6 && N124(th0) > 1e5 && mono],
      ['The scale is logarithmic: 10⁰, 10², 10⁴, 10⁶ are equally spaced', close(Y124(1) - Y124(100), Y124(1e4) - Y124(1e6), 1e-9)],
      [`The illustrative points lie on the curve, at ${data.join('°, ')}°`, data.every((t) => close(Y124(N124(t)), G124.oy - ((G124.oy - G124.top) * Math.log10(1 / Math.sin((t * D2R) / 2) ** 4)) / 6, 1e-9))],
      [`MCQ Q4 (p. 769): N(90°)/N(180°) = ${fmt(N124(90) / N124(180), 6)} (the book’s 4)`, close(N124(90) / N124(180), 4, 1e-9)],
      [`Practice 4 (p. 768): N at 90° = N(60°) × sin⁴30°/sin⁴45° = N(60°)/${fmt(N124(60) / N124(90), 6)} (the book’s N/4)`, close(N124(60) / N124(90), 4, 1e-9)],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* Figure 12.5 · hydrogen energy levels (topic 02)                        */
/* ===================================================================== */
/**
 * To scale: E_n = −13.6/n² eV, 29 px per eV, E = 0 at the dashed ionisation
 * limit. The labels of n = 5 and 6 are raised above their crowded lines, each
 * joined to its own line; n = ∞ is named at the ionisation limit, as in the
 * book. The arrows are the book's: Lyman-α (2 → 1),
 * Lyman-β (3 → 1), Hα (3 → 2), Hβ (4 → 2), Hγ (5 → 2), downward (emission);
 * their wavelengths are recomputed from 1/λ = R(1/n_f² − 1/n_i²).
 */
const G125 = { y0: 46, k: 29, xl: 120, xr: 332, lab: 106, rows: { 6: 39, 5: 55 } as Record<number, number>, lyB: 128, lyA: 156, bal: [216, 260, 304], gx: 184 };
const En = (n: number) => -13.6 / (n * n);
const Y125 = (E: number) => G125.y0 - E * G125.k;
const lamNm = (nf: number, ni: number) => 1e9 / (RH * (1 / (nf * nf) - 1 / (ni * ni)));
const fig125: Diagram = {
  id: 'p12-12-fig-12.5',
  topic: 1,
  name: 'Hydrogen energy levels',
  cases: [{ chip: 'To scale', cap: 'Hydrogen energy levels <i>E</i><sub><i>n</i></sub> = −13.6/<i>n</i><sup>2</sup> eV, crowding toward <i>E</i> = 0 (ionisation); arrows show example emission transitions (Lyman and Balmer lines).' }],
  draw() {
    const s = new Sketch(W, 462);
    const { xl, xr, lab, rows, lyA, lyB, bal, gx } = G125;
    // the ionisation limit
    path(s, [[xl, Y125(0)], [xr, Y125(0)]], { color: C.mari, w: 2, dash: 'dash' });
    // the levels, each with n and its energy at the left
    [1, 2, 3, 4, 5, 6].forEach((n) => {
      const y = Y125(En(n));
      path(s, [[xl, y], [xr, y]], { w: n <= 2 ? 2 : 1.6 });
      const ry = rows[n] ?? y;
      if (ry !== y) path(s, [[lab + 2, ry], [xl - 2, y]], { color: C.grey, w: 1, free: true });
      s.sym(8, ry + 5, `<i>n</i> = ${n}`, { size: 13, anchor: 'start' });
      s.sym(lab, ry + 5, `${fmt(En(n), 2).replace(/\.(\d)$/, '.$10')} eV`, { size: 13, anchor: 'end' });
    });
    // the emission arrows, from the upper level down to the lower
    const tr = (x: number, ni: number, nf: number) => arrow(s, [x, Y125(En(ni)) + 1], [x, Y125(En(nf)) - 1], { w: 1.6, L: 8, hw: 4 });
    tr(lyB, 3, 1);
    tr(lyA, 2, 1);
    [3, 4, 5].forEach((ni, i) => tr(bal[i], ni, 2));
    // their names and wavelengths
    const y2 = Y125(En(2));
    ['α', 'β', 'γ'].forEach((g, i) => {
      s.sym(bal[i], y2 + 18, `H${g}`, { size: 13 });
      s.sym(bal[i], y2 + 34, `${Math.round(lamNm(2, i + 3))} nm`, { size: 12 });
    });
    s.sym(lyB - 8, 254, 'Lyman-β', { size: 13, anchor: 'end' });
    s.sym(lyB - 8, 270, `${Math.round(lamNm(1, 3))} nm`, { size: 12, anchor: 'end' });
    s.sym(lyA + 8, 404, 'Lyman-α', { size: 13, anchor: 'start' });
    s.sym(lyA + 8, 420, `${Math.round(lamNm(1, 2))} nm`, { size: 12, anchor: 'start' });
    // the gaps, shrinking up the ladder
    s.text(gx, 210, 'Gaps shrink as', { size: 13, anchor: 'start', semibold: true });
    s.sym(gx, 226, '<i>n</i> increases:', { size: 13, anchor: 'start' });
    [[2, 1], [3, 2], [4, 3], [5, 4]].forEach(([a, b], i) => s.sym(gx, 246 + 17 * i, `<i>E</i><sub>${a}</sub> − <i>E</i><sub>${b}</sub> = ${(En(a) - En(b)).toFixed(2)} eV`, { size: 13, anchor: 'start' }));
    ['Downward arrows =', 'photon emission;', 'each photon carries', 'energy equal to the gap', 'between the two levels.'].forEach((t, i) => s.sym(gx, 318 + 15 * i, t, { size: 12, anchor: 'start', color: C.slate }));
    s.place([
      { t: 'Ionisation limit', hi: true, p: [xr - 40, Y125(0)], at: [[W - 6, 6, 'end'], [W - 10, 6, 'end']] },
    ]);
    const il = s.tags.find((t) => t.name === 'Ionisation limit');
    if (il) {
      s.sym(il.rect[0] - 6, il.rect[1] + 16, '<i>E</i> = 0', { size: 13, anchor: 'end' });
      s.sym(il.rect[0] - 52, il.rect[1] + 16, '<i>n</i> = ∞', { size: 13, anchor: 'end' });
    }
    return s;
  },
  check() {
    const { k } = G125;
    const s = fig125.draw(fig125.cases[0]);
    const book = { 1: '13.60', 2: '3.40', 3: '1.51', 4: '0.85', 5: '0.54', 6: '0.38' } as Record<number, string>;
    const gaps = { '2-1': '10.20', '3-2': '1.89', '4-3': '0.66', '5-4': '0.31' } as Record<string, string>;
    const lam = { 'Lyman-α': [1, 2, 122], 'Lyman-β': [1, 3, 103], Hα: [2, 3, 656], Hβ: [2, 4, 486], Hγ: [2, 5, 434] } as Record<string, number[]>;
    const ys = [1, 2, 3, 4, 5, 6].map((n) => Y125(En(n)));
    return [
      [`Each level is drawn at E_n = −13.6/n² eV to scale (${k} px per eV below E = 0): ${[1, 2, 3, 4, 5, 6].map((n) => `${fmt(En(n), 4)}`).join(', ')} eV`, [1, 2, 3, 4, 5, 6].every((n, i) => close((ys[i] - Y125(0)) / k, 13.6 / (n * n), 1e-9))],
      [`The printed values are −13.6/n² to two decimals: ${Object.values(book).join(', ')} eV`, [1, 2, 3, 4, 5, 6].every((n) => (-En(n)).toFixed(2) === book[n])],
      [`The gaps shrink as n increases: ${Object.keys(gaps).map((g) => { const [a, b] = g.split('-').map(Number); return `E${a} − E${b} = ${(En(a) - En(b)).toFixed(3)}`; }).join(', ')} eV (the book’s ${Object.values(gaps).join(', ')})`, Object.entries(gaps).every(([g, v]) => { const [a, b] = g.split('-').map(Number); return (En(a) - En(b)).toFixed(2) === v; }) && ys.slice(1).every((y, i) => (i === 0 ? true : ys[i] - y < ys[i - 1] - ys[i]))],
      [`The lines crowd toward E = 0: the n = 6 line is ${fmt(ys[5] - Y125(0), 1)} px below the limit, the n = 5 line ${fmt(ys[4] - ys[5], 1)} px below n = 6`, ys[5] - Y125(0) < 12 && ys[4] - ys[5] < 6],
      [`The wavelengths from 1/λ = R(1/n_f² − 1/n_i²), R = 1.097 × 10⁷ m⁻¹: ${Object.entries(lam).map(([nm, [f, i]]) => `${nm} ${fmt(lamNm(f, i), 1)} nm`).join(', ')} (the book’s 122, 103, 656, 486, 434)`, Object.values(lam).every(([f, i, v]) => Math.round(lamNm(f, i)) === v)],
      [`And from hc = 1240 eV nm with the gaps: Lyman-α ${fmt(1240 / (En(2) - En(1)), 1)} nm, Hα ${fmt(1240 / (En(3) - En(2)), 1)} nm`, Math.round(1240 / (En(2) - En(1))) === 122 && Math.abs(1240 / (En(3) - En(2)) - 656) < 1],
      ['Every arrow points down, from the upper level to the lower (emission), and ends on its level', [G125.lyA, G125.lyB, ...G125.bal].every((x) => (HEADS.get(s) ?? []).some(([tip]) => close(tip[0], x, 1e-9)))],
      [`The fanned labels sit in order above one another and each is joined to its own line (n = 3, 4 at their lines; n = 5, 6 raised, with a line to theirs); n = ∞ is named at the ionisation limit`, G125.rows[6] < G125.rows[5] && G125.rows[5] < Y125(En(4)) && s.labels.some((l) => l.text === 'n = ∞')],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* Figure 12.6 · the Bohr orbit (topic 02)                                */
/* ===================================================================== */
/**
 * The electron on a circular orbit about the nucleus, moving anticlockwise:
 * its velocity v is along the tangent, the Coulomb force F_C along the radius,
 * inward. The check confirms the directions on the drawing and that the
 * force balance (1/(4πε₀))(Ze²/r²) = mv²/r holds for hydrogen's first orbit
 * with the topic's numbers (a₀ = 0.529 Å, v₁ = 2.19 × 10⁶ m s⁻¹).
 */
const G126 = { O: [118, 150] as P, R: 94, phi: 45, v: 50, F: 42 };
const g126 = () => {
  const { O, R, phi } = G126;
  const E = polar(O, R, phi);
  const rh = unit(sub(E, O));
  const vh: P = [-Math.sin(phi * D2R), -Math.cos(phi * D2R)];
  return { E, rh, vh };
};
const fig126: Diagram = {
  id: 'p12-12-fig-12.6',
  topic: 1,
  name: 'Bohr orbit: the force balance',
  cases: [{ chip: 'Force balance', cap: 'Bohr orbit: the Coulomb force (1/(4πε<sub>0</sub>))(<i>Ze</i><sup>2</sup>/<i>r</i><sup>2</sup>) supplies the centripetal force <i>mv</i><sup>2</sup>/<i>r</i>.' }],
  draw() {
    const s = new Sketch(W, 346);
    const { O, R, v, F } = G126, { E, rh, vh } = g126();
    path(s, arcPts(O, R, 0, 360, 120), { color: C.slate, w: 1.3, dash: 'dash' });
    // r, from the nucleus to the electron
    path(s, [add(O, rh, 8), add(E, rh, -F - 2)], { w: 1.3 });
    const rm = add(O, rh, (R - F) * 0.45);
    s.sym(rm[0] + 12, rm[1] + 12, '<i>r</i>', { size: 16 });
    // the Coulomb force, inward along r; the velocity, along the tangent
    arrow(s, add(E, rh, -6), add(E, rh, -F), { color: C.mari, w: 3 });
    arrow(s, add(E, vh, 6), add(E, vh, v), { w: 2.2 });
    const fl = add(add(E, rh, -F * 0.55), [-rh[1], rh[0]], -20);
    s.sym(fl[0], fl[1] + 6, '<i>F</i><sub>C</sub>', { size: 16, color: C.amber });
    const vl = add(E, vh, v + 12);
    s.sym(vl[0] - 2, vl[1] + 2, '<i>v</i>', { size: 16 });
    // the nucleus and the electron
    ring(s, O, 7);
    s.sym(O[0], O[1] + 27, '+<i>Ze</i>', { size: 15 });
    s.dot(E[0], E[1], 4.6);
    s.sym(E[0] + 12, E[1] - 6, '−<i>e</i>', { size: 15, anchor: 'start' });
    // the book's note, top right
    ['force points inward', 'along <i>r</i>; velocity <i>v</i>', 'is tangential'].forEach((t, i) => s.sym(W - 6, 26 + 16 * i, t, { size: 12, anchor: 'end', color: C.slate }));
    resultBlock(s, ['Coulomb force supplies the', 'centripetal force:', '(1/(4πε<sub>0</sub>))(<i>Ze</i><sup>2</sup>/<i>r</i><sup>2</sup>) = <i>mv</i><sup>2</sup>/<i>r</i>'], { size: 14 });
    s.place([
      { t: 'Coulomb force', hi: true, p: add(E, rh, -F * 0.3), at: [[W - 8, 104, 'end'], [W - 8, 110, 'end']] },
      { t: 'Electron', p: E, at: [[W - 8, 72, 'end'], [W - 30, 72, 'end']] },
      { t: 'Nucleus', p: add(O, [-7, 0]), own: O, bare: true, at: [[O[0] - 16, O[1] - 11, 'end'], [O[0] - 16, O[1] - 40, 'end'], [O[0] - 16, O[1] + 20, 'end']] },
      { t: 'Orbit', p: polar(O, R, 200), at: [[6, 262, 'start'], [6, 256, 'start']] },
    ]);
    return s;
  },
  check() {
    const { O, R } = G126, { E, rh, vh } = g126();
    const s = fig126.draw(fig126.cases[0]);
    const inward = unit(sub(O, E));
    const cross = rh[0] * -vh[1] - -rh[1] * vh[0];
    // hydrogen, n = 1, with the topic's constants
    const Fc = (kC * eC * eC) / (a0 * a0), v1 = 2.19e6, mv2r = (me * v1 * v1) / a0;
    return [
      [`The electron is on the orbit (${fmt(len(O, E), 3)} px = r)`, close(len(O, E), R, 1e-9)],
      [`F_C points along the radius, inward, to the nucleus (angle to E→O: ${fmt(between(inward, [-rh[0], -rh[1]]), 6)}°)`, close(between(inward, [-rh[0], -rh[1]]), 0, 1e-6)],
      [`v is tangential: v · r̂ = ${fmt(dotp(vh, rh), 9)}, and the motion is anticlockwise (r̂ × v̂ = ${fmt(cross, 6)} out of the page)`, close(dotp(vh, rh), 0, 1e-12) && cross > 0],
      [`For hydrogen (Z = 1) in its first orbit: (1/(4πε₀))(e²/a₀²) = ${fmt(Fc * 1e8, 3)} × 10⁻⁸ N and mv₁²/a₀ = ${fmt(mv2r * 1e8, 3)} × 10⁻⁸ N agree within ${fmt((100 * Math.abs(Fc - mv2r)) / Fc, 2)}% (the book’s rounded a₀ and v₁)`, Math.abs(Fc - mv2r) / Fc < 0.01],
      [`And Bohr’s condition holds there: m v₁ a₀ = ${fmt((me * v1 * a0) / 1e-34, 4)} × 10⁻³⁴ J s = h/(2π) = ${fmt(hP / (2 * Math.PI) / 1e-34, 4)} × 10⁻³⁴ J s`, Math.abs(me * v1 * a0 - hP / (2 * Math.PI)) / (hP / (2 * Math.PI)) < 0.005],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* Figure 12.7 · de Broglie standing waves (topic 02)                     */
/* ===================================================================== */
/**
 * The wave drawn round the orbit of radius r₀ as r = r₀ + A cos(n(φ − φ₀)),
 * φ from φ₀ once round anticlockwise. For n = 4 the circumference holds
 * exactly four wavelengths, λ = 2πr₀/4, and the wave meets itself after one
 * turn with the same height and slope: it closes. For n = 4.5 it ends at
 * r₀ − A where it began at r₀ + A: a mismatch of 2A at the join. For n = 4,
 * φ₀ = 90°, so the crests are at the top, bottom and sides, as the book
 * draws them. For n = 4.5 the join is put at φ₀ = 135° (upper left), where
 * the tag's line can reach it from above without crossing the wave (the
 * book's join is at the right, pointed to by an arrow).
 */
const G127 = { O: [170, 134] as P, r0: 84, A: 13 };
const phi0Of = (n: number) => (Number.isInteger(n) ? 90 : 135);
const rWave = (n: number, phi: number) => G127.r0 + G127.A * Math.cos(n * (phi - phi0Of(n)) * D2R);
const wave = (n: number, N = 720): P[] => samples(phi0Of(n), phi0Of(n) + 360, N).map((f) => polar(G127.O, rWave(n, f), f));
/** The angle (degrees) nearest `near` at which the wave is at its innermost, r₀ − A: the orbit's dashed circle is clear of it there. */
const innermost = (n: number, near: number) => {
  // one turn only: the angles φ₀ + (180° + 360°k)/n inside [φ₀, φ₀ + 360°)
  const p0 = phi0Of(n), ks = Array.from({ length: 12 }, (_, k) => p0 + (180 + 360 * k) / n).filter((f) => f < p0 + 360);
  const dist = (f: number) => Math.abs(((f - near + 540) % 360) - 180);
  return ks.reduce((b, f) => (dist(f) < dist(b) ? f : b));
};
/** How close the polyline `pts` comes to the segment a–b, leaving out the first `skip` px from a. */
const nearestTo = (pts: P[], a: P, b: P, skip = 0) => {
  const u = unit(sub(b, a)), a2 = add(a, u, skip);
  return Math.min(...pts.map((p) => distSeg(p, a2, b)));
};
const fig127: Diagram = {
  id: 'p12-12-fig-12.7',
  topic: 1,
  name: 'de Broglie standing waves',
  cases: [
    { chip: 'n = 4', n: 4, cap: 'de Broglie standing waves: an orbit is allowed only if 2π<i>r</i> = <i>nλ</i> with <i>n</i> a whole number (<i>n</i> = 4 closes; <i>n</i> = 4.5 does not).' },
    { chip: 'n = 4.5', n: 4.5, cap: 'de Broglie standing waves: an orbit is allowed only if 2π<i>r</i> = <i>nλ</i> with <i>n</i> a whole number (<i>n</i> = 4 closes; <i>n</i> = 4.5 does not).' },
  ],
  draw(c: { n: number }) {
    const s = new Sketch(W, 300);
    const { O, r0 } = G127, n = c.n, whole = Number.isInteger(n), phi0 = phi0Of(n);
    path(s, arcPts(O, r0, 0, 360, 160), { color: C.slate, w: 1.2, dash: 'dash' });
    path(s, wave(n), { color: C.mari, w: 2.6 });
    ring(s, O, 4.5);
    if (whole) resultBlock(s, ['<i>n</i> = 4 (allowed)', 'wave closes: 2π<i>r</i> = 4<i>λ</i>'], { size: 14 });
    else resultBlock(s, ['<i>n</i> = 4.5 (not allowed)', 'wave does not close'], { size: 14 });
    const fo = innermost(n, 200), po = polar(O, r0, fo);
    const common = [
      { t: 'Orbit', p: po, at: [[6, po[1] + 32, 'start'], [6, 236, 'start'], [6, 222, 'start']] as [number, number, 'start' | 'middle' | 'end'][] },
      { t: 'Nucleus', p: add(O, [0, 4.5]), own: O, bare: true, at: [[O[0], O[1] + 18, 'middle'], [O[0], O[1] + 22, 'middle']] as [number, number, 'start' | 'middle' | 'end'][] },
    ];
    if (whole) s.place([{ t: 'Standing wave', hi: true, p: polar(O, rWave(n, 100), 100), at: [[6, 6, 'start'], [10, 6, 'start']] }, ...common]);
    else s.place([{ t: 'Mismatch at the join', hi: true, p: polar(O, r0, phi0), at: [[O[0] - 50, 4, 'start'], [O[0] - 46, 4, 'start']] }, ...common]);
    return s;
  },
  check(c: { n: number }) {
    const { r0, A, O } = G127, n = c.n, phi0 = phi0Of(n);
    const s = fig127.draw(c);
    const dr = (f: number) => -A * n * Math.sin(n * (f - phi0) * D2R);
    const lam = (2 * Math.PI * r0) / n;
    const pts = wave(n), gap = len(pts[0], pts[pts.length - 1]);
    // count the crests (outermost points) once round the orbit
    const fs = samples(phi0, phi0 + 360, 7200).slice(0, -1), r = (f: number) => rWave(n, f);
    const crests = fs.filter((f, i) => r(f) > r(fs[(i + fs.length - 1) % fs.length]) && r(f) >= r(fs[(i + 1) % fs.length])).length;
    // hydrogen, n = 4: λ = h/(m v₄) against 2π r₄ (Topic 02's a₀ and v₁)
    const r4 = a0 * 16, v4 = 2.19e6 / 4, lam4 = hP / (me * v4);
    const orbitTag = s.tags.find((t) => t.name === 'Orbit');
    const onCircle: Check = [`The “Orbit” tag names the dashed circle where the wave is at its innermost, ${A} px inside it (r = ${fmt(orbitTag?.from ? len(orbitTag.from as P, O) : NaN, 3)} px)`, !!orbitTag?.from && close(len(orbitTag.from as P, O), r0, 1e-9) && close(rWave(n, innermost(n, 200)), r0 - A, 1e-9)];
    const inBand: Check = [`The wave stays within ±A (${A} px) of the orbit, centred on the nucleus`, pts.every((p) => Math.abs(len(p, O) - r0) <= A + 1e-9)];
    // the other tags' lines keep off the wave (the wave's own tag only beyond its dot)
    const others = s.tags.filter((t) => t.from && t.to && t.name !== 'Mismatch at the join').map((t) => ({ name: t.name, gap: nearestTo(pts, t.from as P, t.to as P, t.name === 'Standing wave' ? 6 : 0) }));
    const offWave: Check = [`No tag’s line runs into the wave: ${others.map((o) => `“${o.name}” ${fmt(o.gap, 1)} px`).join(', ')}`, others.every((o) => o.gap >= LABEL_GAP)];
    if (Number.isInteger(n)) {
      return [
        [`2πr = ${fmt(2 * Math.PI * r0, 3)} px holds exactly n = ${n} wavelengths of λ = 2πr/${n} = ${fmt(lam, 3)} px: ${crests} crests round the orbit`, close((2 * Math.PI * r0) / lam, n, 1e-12) && crests === n],
        [`The wave closes: after one turn it is back where it began (gap ${fmt(gap, 9)} px), with the same slope (${fmt(dr(phi0 + 360), 6)} = ${fmt(dr(phi0), 6)})`, gap < 1e-9 && close(dr(phi0 + 360), dr(phi0), 1e-9)],
        [`For hydrogen n = 4 (Topic 02’s numbers): λ = h/(mv₄) = ${fmt(lam4 * 1e10, 2)} Å and 2πr₄ = ${fmt(2 * Math.PI * r4 * 1e10, 2)} Å = ${fmt((2 * Math.PI * r4) / lam4, 3)} λ`, Math.abs((2 * Math.PI * r4) / lam4 - 4) < 0.01],
        inBand,
        onCircle,
        offWave,
        ...layout(s),
      ];
    }
    const mm = s.tags.find((t) => t.name === 'Mismatch at the join');
    const clearOfWave = mm?.from && mm.to ? nearestTo(pts, mm.from as P, mm.to as P, A + 2) : 0;
    return [
      [`2πr = ${fmt(2 * Math.PI * r0, 3)} px is ${fmt((2 * Math.PI * r0) / lam, 3)} wavelengths: not a whole number`, close((2 * Math.PI * r0) / lam, 4.5, 1e-12) && !Number.isInteger((2 * Math.PI * r0) / lam)],
      [`The wave does not close: after one turn it ends at r₀ − A where it began at r₀ + A (r = ${fmt(r(phi0 + 360), 2)} and ${fmt(r(phi0), 2)} px), a mismatch of 2A = ${fmt(gap, 3)} px at the join`, close(r(phi0), r0 + A, 1e-9) && close(r(phi0 + 360), r0 - A, 1e-9) && close(gap, 2 * A, 1e-9)],
      [`The “Mismatch at the join” tag names the join itself (on the orbit, between the two ends), and its line leaves the join without touching the wave (it passes ${fmt(clearOfWave, 1)} px from it beyond the ends)`, !!mm?.from && len(mm.from as P, polar(O, r0, phi0)) < 1e-9 && clearOfWave >= LABEL_GAP],
      inBand,
      onCircle,
      offWave,
      ...layout(s),
    ];
  },
};

/** Physics 12 Ch 12 (Atoms): Figures 12.1–12.4 (Topic 01) and 12.5–12.7 (Topic 02); these topics have no unnumbered drawings. */
export const DIAGRAMS_PHYSICS_12_12: Diagram[] = [fig121, fig122, fig123, fig124, fig125, fig126, fig127];
