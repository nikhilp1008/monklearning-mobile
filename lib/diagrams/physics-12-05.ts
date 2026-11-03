import { C, LABEL_GAP, Rect, Sketch, crosses, mathW, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * PHYSICS CLASS 12, CHAPTER 5 (Magnetism and Matter): every drawing of the
 * Master Reference book, redrawn. The chapter's drawings are its eight
 * numbered figures, each printed on a "CHAPTER 5 · FIGURES" page (5.1 on
 * p. 333, 5.2 on p. 336, 5.3 on p. 342, 5.4 on p. 345, 5.5 on p. 351, 5.6 on
 * p. 354, 5.7 on p. 360, 5.8 on p. 367; the first copy of each caption sits a
 * page earlier, where the text refers to it). It has no unnumbered drawings:
 * pp. 330–388 were checked page by page, the Supplement (Addenda A–E,
 * pp. 372–388) included; the rest is prose, typeset equations and six tables
 * (pp. 334, 352, 361, 366, 377, 379). The blank bands on pp. 373–374 and
 * 386–387 are white space (p. 374's is a white patch over nothing).
 *
 * Every figure is computed from the physics, never placed by eye: the bar
 * magnet's field lines are exact lines of its two-pole field, the Earth's
 * components are read off the dipole field at the drawn latitude, the field
 * lines round the three material samples are traced through the field of a
 * self-consistently magnetised bar, the hysteresis loops have their
 * retentivity, coercivity and area computed from the drawn branches, and the
 * flux through each closed surface is integrated. Each `check` recomputes
 * what the figure and its caption state and measures that no label or tag
 * touches a line it does not name.
 */

const W = 340;
type P = [number, number];
type V3 = [number, number, number];
const D2R = Math.PI / 180;
/** μ₀ = 4π × 10⁻⁷ T m A⁻¹, as the book uses it. */
const MU0 = 4 * Math.PI * 1e-7;
const close = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) < tol;
const fmt = (n: number, d = 2) => String(+n.toFixed(d)).replace('-', '−');
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
const IN: V3 = [0, 0, -1];
/** Two vectors point the same way (parallel, same sense). */
const sameWay = (a: V3, b: V3, tol = 1e-6) => { const k = dot3(a, b) / (norm3(a) * norm3(b)); return k > 1 - tol; };
/** The root of f between a and b (f(a), f(b) of opposite signs), by bisection. */
function bisect(f: (x: number) => number, a: number, b: number, n = 80) {
  let fa = f(a);
  for (let i = 0; i < n; i++) {
    const m = (a + b) / 2, fm = f(m);
    if ((fm > 0) === (fa > 0)) { a = m; fa = fm; } else b = m;
  }
  return (a + b) / 2;
}
/** The integral of f from a to b (Simpson's rule). */
function simpson(f: (x: number) => number, a: number, b: number, n = 2000) {
  const h = (b - a) / n;
  let s = f(a) + f(b);
  for (let i = 1; i < n; i++) s += f(a + i * h) * (i % 2 ? 4 : 2);
  return (s * h) / 3;
}

/* ---------- drawing helpers (as in physics-12-04.ts) ---------- */
type Stroke = { color?: string; w?: number; dash?: 'dash' | 'dot' | 'dashdot'; free?: boolean };
const dashOf = (d?: Stroke['dash']) => (d === 'dash' ? ' stroke-dasharray="6 4"' : d === 'dot' ? ' stroke-dasharray="1.5 3.5"' : d === 'dashdot' ? ' stroke-dasharray="9 4 2 4"' : '');

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
/** A small arrowhead at p, pointing along the unit direction u (a field line's sense, a current). */
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
/** No tag's dot on an arrowhead (within 8 px of a head's tip or middle): there it reads as naming the arrow and hides its head. */
const dotsOffHeads = (s: Sketch): Check => {
  const bad = s.tags.filter((t) => t.from && (HEADS.get(s) ?? []).some((h) => h.some((q) => len(q, t.from as P) < 8))).map((t) => t.name);
  return [`No tag's dot sits on an arrowhead${bad.length ? `: ${bad.join(', ')}` : ''}`, bad.length === 0];
};
/** The layout checks of a drawn sketch. */
const layout = (s: Sketch): Check[] => [clearCheck(s), labelsApart(s), dotsOffHeads(s)];
/**
 * The result, bottom right, ink-edged, maths set in STIX (Sketch.text).
 * Registered as a tag, so the audit keeps everything else off it.
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
function distSeg(p: P, a: P, b: P) {
  const d = sub(b, a), L = dotp(d, d) || 1, k = Math.max(0, Math.min(1, dotp(sub(p, a), d) / L));
  return len(p, add(a, d, k));
}
/** Candidate spots for a tag: rows every `dy` px, at either side, nearest the point first. */
const spots = (s: Sketch, p: P, dy = 8, y0 = 4): [number, number, 'start' | 'end'][] =>
  samples(y0, s.h - 26, Math.floor((s.h - 26 - y0) / dy)).flatMap((y): [number, number, 'start' | 'end'][] => [[6, y, 'start'], [W - 6, y, 'end']]).sort((a, b) => Math.abs(a[1] + 11 - p[1]) - Math.abs(b[1] + 11 - p[1]));
/** The point of a polyline nearest to q, and its index. */
function nearestOn(pts: P[], q: P): [P, number] {
  let best = 0;
  pts.forEach((p, i) => { if (len(p, q) < len(pts[best], q)) best = i; });
  return [pts[best], best];
}
/** The direction a polyline runs at index i. */
const runAt = (pts: P[], i: number): P => unit(sub(pts[Math.min(i + 1, pts.length - 1)], pts[Math.max(i - 1, 0)]));

/* ---------- a bar magnet as two poles (Figures 5.1 and 5.7) ---------- */
/**
 * The two-pole (Gilbert) model: a north pole +q at N and a south pole −q at S,
 * on a horizontal axis. Outside the magnet its field is H = q r̂_N/r_N² −
 * q r̂_S/r_S², and B = μ₀H. A field line of this field keeps
 * cos α_S − cos α_N = K, where α_N and α_S are the angles at the two poles
 * between the +x axis and the line to the point (the pole model's flux
 * function); a line through the apex height y above the centre has
 * K = 2a/√(a² + y²). Each line is found point by point: for every angle α_N
 * from where it leaves N round to S, the distance along that ray where the
 * relation holds.
 */
type Poles = { c: P; a: number };
function poleH(m: Poles, p: P): P {
  const N: P = [m.c[0] + m.a, m.c[1]], S: P = [m.c[0] - m.a, m.c[1]];
  const rn = sub(p, N), rs = sub(p, S), dn = Math.hypot(...rn) ** 3, ds = Math.hypot(...rs) ** 3;
  return [rn[0] / dn - rs[0] / ds, rn[1] / dn - rs[1] / ds];
}
/** K for the line through the apex height y (px above the centre). */
const poleK = (m: Poles, y: number) => (2 * m.a) / Math.hypot(m.a, y);
/** The point of the line K on the ray from N at angle al (radians from +x; `down` below the axis). */
function polePoint(m: Poles, K: number, al: number, down = false): P {
  const N: P = [m.c[0] + m.a, m.c[1]], S: P = [m.c[0] - m.a, m.c[1]];
  const u: P = [Math.cos(al), (down ? 1 : -1) * Math.sin(al)];
  const f = (rho: number) => { const r = sub(add(N, u, rho), S); return r[0] / Math.hypot(...r) - Math.cos(al) - K; };
  return add(N, u, bisect(f, 0, 5000, 50));
}
/** The field line through the apex height y, from N round to S; `down` for the mirror line below the axis. */
function poleLine(m: Poles, y: number, down = false, n = 220): P[] {
  const K = poleK(m, y), a0 = Math.acos(1 - K);
  return samples(a0 + 1e-4, Math.PI - 1e-4, n).map((al) => polePoint(m, K, al, down));
}
/** The run of a line that lies outside the magnet's outline r (the longest such run). */
function outsideRun(pts: P[], r: Rect, pad = 0): P[] {
  const out = (p: P) => p[0] < r[0] - pad || p[0] > r[2] + pad || p[1] < r[1] - pad || p[1] > r[3] + pad;
  let best: P[] = [], cur: P[] = [];
  pts.forEach((p) => { if (out(p)) cur.push(p); else { if (cur.length > best.length) best = cur; cur = []; } });
  return cur.length > best.length ? cur : best;
}

/* ===================================================================== */
/* Figure 5.1 · field lines of a bar magnet (topic 01)                    */
/* ===================================================================== */
/**
 * The magnet (84 × 32 px) lies along the axis, S on the left and N on the
 * right; its poles sit 30 px from the centre, a little inside the ends. Four
 * lines above and their mirror images below are exact lines of the two-pole
 * field, through apex heights 48, 72, 102 and 138 px; outside they run from N
 * round to S, and inside the magnet three arrows close the loops from S to N.
 * A compass needle sits on the third line, turned along the field there.
 */
const G51 = { c: [140, 200] as P, a: 30, l: 42, h: 16, apex: [48, 72, 102, 138], needle: { line: 2, al: 74, len: 36 } };
const mag51 = (): Poles => ({ c: G51.c, a: G51.a });
/** The field inside the magnet: three arrows from the S end toward the N end. */
const inside51 = (): [P, P][] => [-8, 0, 8].map((dy): [P, P] => [[G51.c[0] - 22, G51.c[1] + dy], [G51.c[0] + 22, G51.c[1] + dy]]);
const box51 = (): Rect => [G51.c[0] - G51.l, G51.c[1] - G51.h, G51.c[0] + G51.l, G51.c[1] + G51.h];
/** Every drawn loop: the outside run of each line, above (k) and below. */
const loops51 = () => G51.apex.flatMap((y) => [false, true].map((down) => outsideRun(poleLine(mag51(), y, down), box51(), 1)));
/** Where the needle sits (on its line, at the angle al from N), and the field's direction there. */
function needle51(): { p: P; u: P } {
  const m = mag51(), p = polePoint(m, poleK(m, G51.apex[G51.needle.line]), G51.needle.al * D2R);
  return { p, u: unit(poleH(m, p)) };
}
const fig51: Diagram = {
  id: 'p12-05-fig-5.1',
  topic: 0,
  name: 'Field lines of a bar magnet',
  cases: [{ chip: 'Bar magnet', cap: 'Field lines of a bar magnet: closed loops running N to S outside the magnet and S to N inside; lines crowd near the poles and spread out at the equator.' }],
  draw() {
    const s = new Sketch(W, 400);
    const { c, l, h } = G51, bx = box51();
    const loops = loops51();
    loops.forEach((pts) => path(s, pts, { color: C.mari, w: 1.9 }));
    // the sense: N to S outside, at each apex (and on the outer loops' flanks)
    loops.forEach((pts, i) => {
      const [, k] = nearestOn(pts, [c[0], pts.reduce((b, q) => (Math.abs(q[1] - c[1]) > Math.abs(b - c[1]) ? q[1] : b), c[1])]);
      head(s, pts[k], runAt(pts, k), C.mari, 8, 4);
      if (i >= 4) [0.2, 0.8].forEach((f) => { const j = Math.round(f * (pts.length - 1)); head(s, pts[j], runAt(pts, j), C.mari, 8, 4); });
    });
    // the magnet, and the field inside it from S to N
    box(s, bx, { w: 2 });
    inside51().forEach(([a0, a1]) => { const u = unit(sub(a1, a0)); path(s, [a0, add(a1, u, -7)], { w: 1.4 }); head(s, a1, u, C.ink, 7, 3); });
    s.sym(c[0] - l + 11, c[1] + 6, 'S', { size: 17 });
    s.sym(c[0] + l - 11, c[1] + 6, 'N', { size: 17 });
    // the compass needle, along the field: the north half solid, the south half open
    const nd = needle51(), half = G51.needle.len / 2, nv: P = [-nd.u[1], nd.u[0]];
    const tipN = add(nd.p, nd.u, half), tipS = add(nd.p, nd.u, -half);
    s.add(`<path d="M${r1(tipN[0])} ${r1(tipN[1])} L${r1(nd.p[0] + nv[0] * 5)} ${r1(nd.p[1] + nv[1] * 5)} L${r1(nd.p[0] - nv[0] * 5)} ${r1(nd.p[1] - nv[1] * 5)} Z" fill="${C.ink}"/>`);
    outline(s, [tipS, add(nd.p, nv, 5), add(nd.p, nv, -5)], { w: 1.3 });
    s.point(nd.p[0], nd.p[1], 1.5, `<circle cx="${r1(nd.p[0])}" cy="${r1(nd.p[1])}" r="1.5" fill="#fff"/>`);
    // Just above the S end, where the lines leave it: the tag's line drops
    // straight down, and from here it crosses each loop at 45° or more. From
    // the magnet's corner it ran down along a loop and through its arrowhead.
    const crowd: P = [bx[0] + 22, c[1] - h - 6];
    const low = loops[7], [lowest] = nearestOn(low, [c[0] - 24, c[1] + 200]);
    s.place([
      { t: 'Lines crowd together near the poles', p: crowd, at: [[6, 8, 'start'], [6, 4, 'start']] },
      { t: 'Compass needle', p: add(nd.p, nd.u, -half + 3), at: [[W - 6, 96, 'end'], [W - 6, 104, 'end'], [W - 6, 88, 'end'], [W - 6, 120, 'end']] },
      { t: 'Lines spread out at the equator', hi: true, p: lowest, at: [[c[0] - 40, 368, 'start'], [6, 368, 'start'], [6, 372, 'start']] },
    ]);
    return s;
  },
  check() {
    const m = mag51(), { c, a, l, h, apex } = G51, bx = box51();
    const loops = loops51();
    // every drawn point's tangent runs along H (N to S outside)
    const along = loops.every((pts) => pts.every((p, i) => i === 0 || i === pts.length - 1 || dotp(runAt(pts, i), unit(poleH(m, p))) > 0.999));
    // apex heights on the equator, read back from the drawn lines
    const eq = loops.filter((_, i) => i % 2 === 0).map((pts) => c[1] - pts.reduce((b, q) => Math.min(b, q[1]), Infinity));
    const gapsEq = eq.slice(1).map((y, i) => y - eq[i]);
    // where the upper lines cross a circle of 34 px round N, from the axis up
    const N: P = [c[0] + a, c[1]], R0 = 34;
    const angN = loops.filter((_, i) => i % 2 === 0).map((pts) => { const k = pts.findIndex((p) => len(p, N) >= R0); return Math.atan2(N[1] - pts[k][1], pts[k][0] - N[0]); });
    const gapsN = angN.slice(1).map((t, i) => Math.abs(t - angN[i]) * R0);
    const mean = (v: number[]) => v.reduce((x, y) => x + y, 0) / v.length;
    // far away the pole pair is a dipole: on the axis twice the equatorial field at the same distance
    const r = 40 * a, Bax = Math.hypot(...poleH(m, [c[0] + r, c[1]])), Beq = Math.hypot(...poleH(m, [c[0], c[1] - r]));
    const nd = needle51(), s = fig51.draw(fig51.cases[0]);
    return [
      [`The magnet runs S (left) to N (right), ${2 * l} × ${2 * h} px; its poles sit ${a} px from the centre, ${l - a} px inside the ends`, a < l],
      [`Every drawn line is a field line of the two poles: its direction at every point runs along H⃗, from N round to S outside the magnet (${loops.length} lines, mirrored above and below)`, along && loops.length === 8],
      ['Inside the magnet the three arrows run from the S end toward the N end, closing each loop: the lines have no start and no end', inside51().every(([a0, a1]) => a1[0] > a0[0] && close(a0[1], a1[1]) && a0[0] > bx[0] && a1[0] < bx[2]) && c[0] + a > c[0] - a],
      [`The lines never cross: on the equator they sit ${eq.map((y) => fmt(y, 1)).join(', ')} px above the centre, in order (the book's four loops)`, eq.every((y, i) => close(y, apex[i], 0.6)) && gapsEq.every((g) => g > 0)],
      [`They crowd near the poles and spread out at the equator: ${fmt(mean(gapsN), 1)} px apart on a ${R0} px circle round N, ${fmt(mean(gapsEq), 1)} px apart on the equator`, mean(gapsN) < 0.5 * mean(gapsEq)],
      [`The needle sits on a field line with its north end along H⃗ there (cos = ${fmt(dotp(nd.u, unit(poleH(m, nd.p))), 4)})`, dotp(nd.u, unit(poleH(m, nd.p))) > 0.9999],
      [`Far away (r = 40a) the two poles act as one dipole: B_axial : B_equatorial = ${fmt(Bax / Beq, 3)} : 1, the book's 2 : 1`, Math.abs(Bax / Beq - 2) < 0.01],
      [`The magnet's outline holds both poles: (${fmt(bx[0])}, ${fmt(bx[2])}) round ${fmt(c[0] - a)} and ${fmt(c[0] + a)}`, bx[0] < c[0] - a && bx[2] > c[0] + a],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* Figure 5.2 · couple on a bar magnet in a uniform field (topic 01)      */
/* ===================================================================== */
/**
 * The magnet (length 2l = 150 px between its poles, at its ends) lies at
 * θ = 35° to a uniform field B⃗ along +x, N up and to the right, as the book
 * draws it. The force +q_mB acts on N along B⃗ and −q_mB on S against it; the
 * arm between their lines of action is measured off the drawn poles. The
 * torque τ⃗ = m⃗ × B⃗ is computed in the page frame: into the page, clockwise,
 * and the curved arrow turns that way.
 */
const G52 = { c: [148, 176] as P, l: 75, hw: 11, th: 35, F: 62, tq: 32, t0: -15, t1: -95, mOff: 24, arm: 300, rows: [48, 98, 148, 198, 248], cols: [10, 92, 174, 256], flen: 40 };
const geo52 = () => {
  const { c, l, th } = G52;
  const u: P = [Math.cos(th * D2R), -Math.sin(th * D2R)], n: P = [u[1], -u[0]];
  return { u, n, Np: add(c, u, l), Sp: add(c, u, -l) };
};
const FIELD52 = new WeakMap<Sketch, [P, P][]>();
const fig52: Diagram = {
  id: 'p12-05-fig-5.2',
  topic: 0,
  name: 'Couple on a bar magnet',
  cases: [{ chip: 'Magnet at θ', cap: 'Couple on a bar magnet at angle <i>θ</i> to a uniform field <i>B</i>: forces +<i>q</i><sub>m</sub><i>B</i> on the N pole and −<i>q</i><sub>m</sub><i>B</i> on the S pole, with arm 2<i>l</i> sin <i>θ</i>.' }],
  draw() {
    const s = new Sketch(W, 352);
    const { c, hw, th, F, tq, t0, t1, mOff, arm } = G52, g = geo52();
    // the magnet: an outline split at its middle into its N and S halves
    outline(s, [add(g.Sp, g.n, hw), add(g.Np, g.n, hw), add(g.Np, g.n, -hw), add(g.Sp, g.n, -hw)], { w: 2 });
    path(s, [add(c, g.n, hw), add(c, g.n, -hw)], { w: 1.4 });
    // m⃗ alongside it, from S toward N
    arrow(s, add(add(c, g.u, -40), g.n, mOff), add(add(c, g.u, 40), g.n, mOff), { w: 2.2 });
    // θ from the field direction (dashed, through the centre) to the magnet
    path(s, [c, [c[0] + 56, c[1]]], { color: C.slate, w: 1.1, dash: 'dash' });
    path(s, arcPts(c, 40, 0, th, 24), { w: 1.2 });
    // the two forces, along their lines of action
    arrow(s, add(g.Np, [6, 0]), add(g.Np, [6 + F, 0]), { w: 2.4 });
    arrow(s, add(g.Sp, [-6, 0]), add(g.Sp, [-6 - F, 0]), { w: 2.4 });
    // the arm: from one line of action to the other
    guide(s, add(g.Np, [10 + F, 0]), [arm + 6, g.Np[1]]);
    guide(s, add(g.Sp, [10, 0]), [arm + 6, g.Sp[1]]);
    measure(s, [arm, g.Np[1]], [arm, g.Sp[1]]);
    // the couple's turning sense: clockwise, from t0 to t1. It ends above the
    // dotted line through S (at −76° its head lay across it), and its head is
    // drawn on the arc's own tangent: an arrow over the last 3° was shorter
    // than its head, and the stroke ran back out of the head as a round nub.
    // Close round the centre (32 px) it can turn through 80° below the
    // dashed line and still stop 5 px above the dotted one; at 50 px it had
    // room for only 40°, and read as a hook (Android re-check of Physics 12
    // Ch 5, 2026-10-22). Its head points back at the magnet it turns.
    const back = (10 / (tq * D2R)), end = polar(c, tq, t1);
    path(s, arcPts(c, tq, t0, t1 + back, 40), { color: C.mari, w: 2.6 });
    head(s, end, unit([Math.sin(t1 * D2R), Math.cos(t1 * D2R)]), C.mari, 11, 5.5);
    s.dot(g.Np[0], g.Np[1], 3);
    s.dot(g.Sp[0], g.Sp[1], 3);
    s.dot(c[0], c[1], 2.6);
    s.sym(...add(polar(c, 64, 15), [4, 5]), 'θ', { italic: true, size: 16 });
    s.sym(g.Np[0] - 10, g.Np[1] - 19, 'N', { size: 17, anchor: 'end' });
    s.sym(g.Sp[0] + 8, g.Sp[1] + 26, 'S', { size: 17, anchor: 'start' });
    s.sym(g.Np[0] + 6 + F / 2, g.Np[1] - 12, '+<i>q</i><sub>m</sub><i>B</i>', { size: 16 });
    s.sym(g.Sp[0] - 6 - F / 2, g.Sp[1] + 24, '−<i>q</i><sub>m</sub><i>B</i>', { size: 16 });
    const mt = add(add(c, g.n, mOff + 16), g.u, -6);
    s.sym(mt[0] - 4, mt[1] + 2, '<i>m⃗</i>', { size: 17, anchor: 'end' });
    s.sym(arm - 8, (g.Np[1] + g.Sp[1]) / 2 + 5, '2<i>l</i> sin <i>θ</i>', { size: 15, anchor: 'end' });
    s.sym(10, 24, 'uniform field <i>B⃗</i>', { size: 15, anchor: 'start', color: C.slate });
    const res = resultBlock(s, ['⊗ <i>τ⃗</i> = <i>m⃗</i> × <i>B⃗</i>', 'into the page, clockwise'], { size: 15 });
    s.place([{ t: 'Torque', hi: true, p: polar(c, tq, -40), at: [[c[0] + 30, 240, 'start'], [c[0] + 30, 246, 'start'], [c[0] - 20, 290, 'end'], [14, 310, 'start']] }], [res]);
    // the uniform field: equal parallel arrows on a grid, wherever they leave the rest clear
    const busy = (pts: P[]) => {
      const boxes: Rect[] = [...s.tags.map((t) => t.rect), ...s.labels.map((l) => l.rect)];
      const lines = LINES.get(s) ?? [];
      return pts.some((p) => boxes.some((r) => rectDist(r, p) < 10) || lines.some((ln) => ln.some((q, i) => i > 0 && distSeg(p, ln[i - 1], q) < 12)) || s.points.some((q) => len(p, [q.x, q.y]) < 14));
    };
    const field: [P, P][] = [];
    G52.rows.forEach((y) => G52.cols.forEach((x) => {
      const a0: P = [x, y], a1: P = [x + G52.flen, y];
      if (!busy(samples(0, 1, 12).map((k) => add(a0, sub(a1, a0), k)))) field.push([a0, a1]);
    }));
    field.forEach(([a0, a1]) => arrow(s, a0, a1, { color: C.grey, w: 1.4 }));
    FIELD52.set(s, field);
    return s;
  },
  check() {
    const { c, l, th, F, t0, t1 } = G52, g = geo52();
    const up = (v: P): P => [v[0], -v[1]];
    const Fn: P = [F, 0], Fs: P = [-F, 0];
    const tau = crossp(up(sub(g.Np, c)), up(Fn)) + crossp(up(sub(g.Sp, c)), up(Fs));
    const armPx = Math.abs(g.Sp[1] - g.Np[1]);
    const tau3 = cross3(page(g.u), [1, 0, 0]);
    const ang = Math.atan2(g.Sp[1] - g.Np[1], g.Np[0] - g.Sp[0]) / D2R;
    const s = fig52.draw(fig52.cases[0]), field = FIELD52.get(s) ?? [];
    // Example 1 (p. 335): m = 4.5 A m², B = 0.30 T, θ = 30°; MCQ Q4 (p. 339): 3.0 A m², 0.20 T, 0° to 180°
    const t1ex = 4.5 * 0.3 * Math.sin(30 * D2R), u1ex = -4.5 * 0.3 * Math.cos(30 * D2R), w1ex = 4.5 * 0.3 * (Math.cos(30 * D2R) - Math.cos(90 * D2R)), wq4 = 3.0 * 0.2 * (Math.cos(0) - Math.cos(Math.PI));
    return [
      [`The magnet runs S → N at θ = ${fmt(ang, 2)}° to B⃗ (read back from its drawn poles), its centre midway`, close(ang, th, 1e-9) && close(len(c, g.Np), len(c, g.Sp), 1e-9)],
      ['The forces are +q_mB on N (along B⃗) and −q_mB on S (against B⃗): equal and opposite, so no net force', close(Fn[0] + Fs[0], 0) && Fn[0] > 0],
      [`The arm between their lines of action is ${fmt(armPx, 2)} px = 2l sin θ = ${fmt(2 * l * Math.sin(th * D2R), 2)} px`, close(armPx, 2 * l * Math.sin(th * D2R), 1e-9)],
      [`The couple's torque about the centre, Σ r × F, is ${fmt(Math.abs(tau), 1)} = (q_mB)(2l sin θ) = mB sin θ (px units)`, close(Math.abs(tau), F * 2 * l * Math.sin(th * D2R), 1e-9)],
      ['m⃗ × B⃗ points into the page: the torque is clockwise and turns m⃗ toward B⃗, and the curved arrow runs clockwise', sameWay(tau3, IN) && tau < 0 && t1 < t0],
      [`Example 1: τ = mB sin 30° = ${fmt(t1ex, 3)} N m, U = −mB cos 30° = ${fmt(u1ex, 2)} J, W(30° → 90°) = ${fmt(w1ex, 2)} J (the book's 0.675, −1.17, 1.17); MCQ Q4: W(0° → 180°) = ${fmt(wq4, 1)} J`, fmt(t1ex, 3) === '0.675' && fmt(u1ex, 2) === '−1.17' && fmt(w1ex, 2) === '1.17' && fmt(wq4, 1) === '1.2'],
      [`The field is uniform: ${field.length} arrows, all the same length and all along +x`, field.length >= 8 && field.every(([p0, p1]) => close(len(p0, p1), G52.flen) && close(p0[1], p1[1]) && p1[0] > p0[0])],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* Figure 5.3 · dip and declination (topic 02)                             */
/* ===================================================================== */
/**
 * Two panels, as the book prints them side by side. Left, the vertical plane
 * of the magnetic meridian: B⃗_E at P, dipping δ = 60° below the horizontal
 * (the book's drawn angle), split into B_H = B_E cos δ along the horizontal
 * and B_V = B_E sin δ straight down. Right, the horizontal plane seen from
 * above: magnetic north at α = 20° east of geographic north (the book's
 * drawn angle).
 */
const CAP53 = 'Earth’s total field <i>B</i><sub>E</sub> at <i>P</i> with components <i>B</i><sub>H</sub> and <i>B</i><sub>V</sub>; the angle of dip <i>δ</i> lies in the vertical plane and the declination <i>α</i> in the horizontal plane.';
const G53 = { P: [104, 100] as P, BE: 156, dip: 60, x0: 14, x1: 326, decl: { c: [170, 168] as P, R: 96, al: 20 } };
const geo53 = () => {
  const { P: p, BE, dip } = G53;
  const u: P = [Math.cos(dip * D2R), Math.sin(dip * D2R)];
  const tip = add(p, u, BE), H: P = [tip[0], p[1]], V: P = [p[0], tip[1]];
  return { u, tip, H, V };
};
const fig53: Diagram = {
  id: 'p12-05-fig-5.3',
  topic: 1,
  name: 'Dip and declination',
  cases: [
    { chip: 'Dip', part: 'dip', cap: CAP53 },
    { chip: 'Declination', part: 'decl', cap: CAP53 },
  ],
  draw(c: { part: 'dip' | 'decl' }) {
    if (c.part === 'decl') {
      const s = new Sketch(W, 296);
      const { c: o, R, al } = G53.decl;
      ring(s, o, R, { color: C.grey, w: 1.4, dash: 'dash' });
      const gN = polar(o, R - 4, 90), mN = polar(o, R - 4, 90 - al);
      arrow(s, o, gN, { w: 2.4 });
      arrow(s, o, mN, { w: 2.6, color: C.mari });
      path(s, arcPts(o, 42, 90 - al, 90, 20), { w: 1.2 });
      s.dot(o[0], o[1], 2.8);
      const am = polar(o, 74, 90 - al / 2);
      s.sym(am[0] + 1, am[1] + 5, '<i>α</i>', { size: 16 });
      s.sym(o[0] - R - 8, o[1] + 5, 'W', { size: 15, anchor: 'end', color: C.slate });
      s.sym(o[0] + R + 8, o[1] + 5, 'E', { size: 15, anchor: 'start', color: C.slate });
      s.sym(o[0], o[1] + R + 22, 'S', { size: 15, color: C.slate });
      s.sym(10, 22, 'Declination <i>α</i>: horizontal plane', { size: 14, anchor: 'start', color: C.slate });
      s.place([
        { t: 'Geographic north', p: polar(o, 62, 90), at: [[o[0] - 18, 40, 'end'], [o[0] - 18, 48, 'end']] },
        { t: 'Magnetic north', hi: true, p: polar(o, 70, 90 - al), at: [[o[0] + 44, 40, 'start'], [o[0] + 44, 48, 'start']] },
      ]);
      return s;
    }
    const s = new Sketch(W, 352);
    const { P: p, x0, x1, dip } = G53, g = geo53();
    // the horizontal through P (a helper), and the vertical continued below B_V
    path(s, [[x0, p[1]], [x1, p[1]]], { color: C.slate, w: 1.2, dash: 'dash' });
    path(s, [g.V, [p[0], g.V[1] + 28]], { color: C.slate, w: 1.2, dash: 'dash' });
    guide(s, g.H, g.tip);
    guide(s, g.V, g.tip);
    arrow(s, p, g.H, { w: 2.4, color: C.slate });
    arrow(s, p, g.V, { w: 2.4, color: C.slate });
    arrow(s, p, g.tip, { w: 2.8, color: C.mari });
    path(s, arcPts(p, 34, -dip, 0, 24), { w: 1.2 });
    s.dot(p[0], p[1], 3.4);
    const dm = polar(p, 46, -dip / 2);
    s.sym(dm[0] + 2, dm[1] + 6, '<i>δ</i>', { size: 16 });
    s.sym(p[0] - 8, p[1] - 10, '<i>P</i>', { size: 16, anchor: 'end' });
    s.sym((p[0] + g.H[0]) / 2, p[1] - 10, '<i>B</i><sub>H</sub>', { size: 16, color: C.slate });
    s.sym(p[0] - 10, (p[1] + g.V[1]) / 2 + 5, '<i>B</i><sub>V</sub>', { size: 16, anchor: 'end', color: C.slate });
    s.sym(g.tip[0] + 10, g.tip[1] + 4, '<i>B</i><sub>E</sub>', { size: 16, anchor: 'start', color: C.amber });
    s.sym(10, 22, 'Dip <i>δ</i>: vertical (magnetic-meridian) plane', { size: 14, anchor: 'start', color: C.slate });
    const res = resultBlock(s, ['<i>B</i><sub>H</sub> = <i>B</i><sub>E</sub> cos <i>δ</i>,  <i>B</i><sub>V</sub> = <i>B</i><sub>E</sub> sin <i>δ</i>', 'tan <i>δ</i> = <i>B</i><sub>V</sub>/<i>B</i><sub>H</sub>,  <i>B</i><sub>E</sub> = √(<i>B</i><sub>H</sub><sup>2</sup> + <i>B</i><sub>V</sub><sup>2</sup>)'], { size: 14 });
    // The total-field tag sits 4 px from the right edge, not 8: from 8 its left
    // end came within 2 px of the dotted guide down from B⃗_H's tip.
    s.place([
      { t: 'Horizontal', p: [x1 - 40, p[1]], at: [[x1, p[1] - 34, 'end'], [x1, p[1] + 12, 'end']] },
      { t: 'Vertical', p: [p[0], g.V[1] + 20], at: [[p[0] + 14, g.V[1] + 4, 'start'], [p[0] - 14, g.V[1] + 4, 'end']] },
      { t: 'Earth’s total field', hi: true, p: add(p, g.u, 100), at: [[W - 4, p[1] + 66, 'end'], [W - 4, p[1] + 74, 'end'], [W - 4, p[1] + 58, 'end']] },
    ], [res]);
    return s;
  },
  check(c: { part: 'dip' | 'decl' }) {
    const s = fig53.draw(c);
    if (c.part === 'decl') {
      const { c: o, R, al } = G53.decl;
      const gN = sub(polar(o, R - 4, 90), o), mN = sub(polar(o, R - 4, 90 - al), o);
      const ang = Math.acos(dotp(unit(gN), unit(mN))) / D2R;
      return [
        [`Seen from above with geographic north up, east is to the right: magnetic north is drawn ${fmt(ang, 2)}° east of geographic north, the declination α`, close(ang, al, 1e-9) && crossp(up2(gN), up2(mN)) < 0],
        ...layout(s),
      ];
    }
    const { P: p, BE, dip } = G53, g = geo53();
    const BH = len(p, g.H), BV = len(p, g.V), ang = Math.atan2(g.tip[1] - p[1], g.tip[0] - p[0]) / D2R;
    const ex1 = 0.4 / Math.cos(30 * D2R), pr1 = 0.32 / Math.cos(60 * D2R);
    return [
      [`B_E dips ${fmt(ang, 2)}° below the horizontal: δ, measured from the horizontal`, close(ang, dip, 1e-9)],
      [`B_H = B_E cos δ = ${fmt(BE * Math.cos(dip * D2R), 2)} px along the horizontal; B_V = B_E sin δ = ${fmt(BE * Math.sin(dip * D2R), 2)} px straight down`, close(BH, BE * Math.cos(dip * D2R), 1e-9) && close(BV, BE * Math.sin(dip * D2R), 1e-9) && g.V[1] > p[1]],
      [`tan δ = B_V/B_H = ${fmt(BV / BH, 4)} = tan ${dip}°, and √(B_H² + B_V²) = ${fmt(Math.hypot(BH, BV), 2)} px = B_E`, close(BV / BH, Math.tan(dip * D2R), 1e-9) && close(Math.hypot(BH, BV), BE, 1e-9)],
      [`Example 1 (B_H = 0.40 G, δ = 30°): B_E = ${fmt(ex1, 2)} G, B_V = ${fmt(ex1 * 0.5, 2)} G; Practice 1 (0.32 G at the drawn 60°): B_E = ${fmt(pr1, 2)} G (the book's 0.46, 0.23 and 0.64)`, fmt(ex1, 2) === '0.46' && fmt(ex1 * 0.5, 2) === '0.23' && fmt(pr1, 2) === '0.64'],
      ...layout(s),
    ];
  },
};
const up2 = (v: P): P => [v[0], -v[1]];
/**
 * A line drawn with a gap wherever it comes within `pad` px of one of the
 * given outlines (an arrowhead's triangle): the head reads on clear paper
 * instead of on the line behind it. Each run is a path of its own, kept for
 * the clearance check like any other line.
 */
function gapped(s: Sketch, pts: P[], around: P[][], pad: number, o: Stroke = {}) {
  const dense: P[] = pts.flatMap((p, i) => (i ? samples(0, 1, Math.max(1, Math.ceil(len(pts[i - 1], p)))).slice(1).map((k): P => add(pts[i - 1], sub(p, pts[i - 1]), k)) : [p]));
  const inside = (q: P, tri: P[]) => tri.every((a, i) => { const b = tri[(i + 1) % tri.length], c = tri[(i + 2) % tri.length]; return crossp(sub(b, a), sub(q, a)) * crossp(sub(b, a), sub(c, a)) >= 0; });
  const near = (q: P) => around.some((tri) => inside(q, tri) || tri.some((a, i) => distSeg(q, a, tri[(i + 1) % tri.length]) < pad));
  let run: P[] = [];
  const flush = () => { if (run.length > 1) path(s, run, o); run = []; };
  dense.forEach((q) => (near(q) ? flush() : run.push(q)));
  flush();
}
/** The triangle `vec` draws for an arrow from a to b (head 9 long, 4.5 each side). */
function headTri(a: P, b: P): P[] {
  const u = unit(sub(b, a)), base = add(b, u, -9), nv: P = [-u[1], u[0]];
  return [b, add(base, nv, 4.5), add(base, nv, -4.5)];
}

/* ===================================================================== */
/* Figure 5.4 · the Earth as a dipole (topic 02)                           */
/* ===================================================================== */
/**
 * The Earth (radius 112 px) with its dipole m⃗ at the centre pointing to the
 * geographic south (down the magnetic axis), the rotation axis 11.3° from the
 * magnetic axis, and P at magnetic latitude λ = 40° (the book's drawn angle).
 * At P the components are B_V = (μ₀/4π)2M sin λ/r³ inward along the radius
 * and B_H = (μ₀/4π)M cos λ/r³ along the tangent toward the north; B⃗_E is
 * their sum. The check recomputes the dipole field at P from
 * B⃗ ∝ 3(m⃗ · r̂)r̂ − m⃗ and the dip from the drawn arrows.
 */
const G54 = { O: [128, 196] as P, R: 112, lam: 40, tilt: 11.3, k: 54, mTop: 18, mBot: 34, ext: 22 };
/** δ's arc (radius) and δ itself (distance from P, degrees from the horizontal toward B⃗_E); r (distance from O, direction). */
const DELTA54 = { arc: 22, at: 34, from: 33 }, R54 = { at: 36, deg: 64, size: 15 };
const geo54 = () => {
  const { O, R, lam, k } = G54;
  const p = polar(O, R, lam);
  const er: P = [Math.cos(lam * D2R), -Math.sin(lam * D2R)], t: P = [-Math.sin(lam * D2R), -Math.cos(lam * D2R)];
  const BH = add(p, t, k * Math.cos(lam * D2R)), BV = add(p, er, -2 * k * Math.sin(lam * D2R));
  const BE = add(BH, sub(BV, p));
  return { p, er, t, BH, BV, BE };
};
const fig54: Diagram = {
  id: 'p12-05-fig-5.4',
  topic: 1,
  name: 'The Earth as a dipole',
  cases: [{ chip: 'Dip and latitude', cap: 'Earth as a dipole: at magnetic latitude <i>λ</i>, <i>B</i><sub>V</sub> is along the radius and <i>B</i><sub>H</sub> is tangential; the dip <i>δ</i> lies between <i>B</i><sub>E</sub> and the horizontal, with tan <i>δ</i> = 2 tan <i>λ</i>.' }],
  draw() {
    const s = new Sketch(W, 420);
    const { O, R, lam, tilt, mTop, mBot, ext } = G54, g = geo54();
    // The Earth's outline, the magnetic axis and the rotation axis part round
    // the heads of B⃗_H and B⃗_E: B⃗_H's head sat on the outline, and B⃗_E's
    // landed where both axes and both guides meet (Android review, Ch 5).
    const heads = [headTri(g.p, g.BH), headTri(g.p, g.BE)];
    gapped(s, arcPts(O, R, 0, 360, 360), heads, 3, { w: 2.2 });
    // the magnetic axis, the rotation axis and the magnetic equator
    gapped(s, [[O[0], O[1] - R - ext], [O[0], O[1] + R + ext]], heads, 3, { color: C.slate, w: 1.3, dash: 'dash' });
    const ra: P = [Math.sin(tilt * D2R), -Math.cos(tilt * D2R)];
    gapped(s, [add(O, ra, R + ext + 8), add(O, ra, -(R + ext + 8))], heads, 3, { color: C.slate, w: 1.3, dash: 'dot' });
    path(s, [[O[0] - R - 12, O[1]], [O[0] + R + 30, O[1]]], { color: C.slate, w: 1.3, dash: 'dashdot' });
    // m⃗ at the centre, toward the geographic south
    arrow(s, [O[0], O[1] - mTop], [O[0], O[1] + mBot], { w: 2.8 });
    // the radius to P and the latitude
    path(s, [O, g.p], { w: 1.6 });
    path(s, arcPts(O, 40, 0, lam, 24), { w: 1.2 });
    // the vertical (the radius continued) and the horizontal (the tangent) at P
    path(s, [g.p, add(g.p, g.er, 46)], { color: C.slate, w: 1.2, dash: 'dash' });
    path(s, [add(g.p, g.t, -44), add(g.p, g.t, 70)], { color: C.slate, w: 1.2, dash: 'dash' });
    guide(s, g.BH, g.BE);
    guide(s, g.BV, g.BE);
    arrow(s, g.p, g.BH, { w: 2.4, color: C.slate });
    arrow(s, g.p, g.BV, { w: 2.4, color: C.slate });
    arrow(s, g.p, g.BE, { w: 2.8, color: C.mari });
    // δ, from the horizontal (toward B_H) down to B⃗_E
    const aH = Math.atan2(-g.t[1], g.t[0]) / D2R, aE0 = Math.atan2(-(g.BE[1] - g.p[1]), g.BE[0] - g.p[0]) / D2R, aE = aE0 < aH - 180 ? aE0 + 360 : aE0;
    // A tighter arc, and δ just outside it toward B⃗_E: further out it sat on
    // the dotted guide from B⃗_H's tip (Android review, Ch 5).
    path(s, arcPts(g.p, DELTA54.arc, aE, aH, 24), { w: 1.2 });
    s.dot(g.p[0], g.p[1], 3.4);
    s.dot(O[0], O[1], 2.6);
    const dm = polar(g.p, DELTA54.at, aH + DELTA54.from);
    s.sym(dm[0], dm[1] + 6, '<i>δ</i>', { size: 16 });
    const lm = polar(O, 54, lam / 2);
    s.sym(lm[0] + 3, lm[1] + 6, '<i>λ</i>', { size: 16 });
    // r near O, between the radius and the rotation axis: halfway out it sat
    // on the dotted guide from B⃗_V's tip.
    const rm = polar(O, R54.at, R54.deg);
    s.sym(rm[0], rm[1] + 6, '<i>r</i>', { size: R54.size });
    s.sym(O[0] - 13, O[1] + 26, '<i>m⃗</i>', { size: 17, anchor: 'end' });
    s.sym(g.p[0] + 21, g.p[1] + 7, '<i>P</i>', { size: 16 });
    const hm = add(add(g.p, sub(g.BH, g.p), 0.6), g.er, 16);
    s.sym(hm[0] + 2, hm[1] + 2, '<i>B</i><sub>H</sub>', { size: 16, anchor: 'start', color: C.slate });
    const vm = add(add(g.p, sub(g.BV, g.p), 0.55), g.t, -14);
    s.sym(vm[0] + 2, vm[1] + 12, '<i>B</i><sub>V</sub>', { size: 16, anchor: 'start', color: C.slate });
    s.sym(O[0] - 6, g.BE[1] + 6, '<i>B</i><sub>E</sub>', { size: 16, anchor: 'end', color: C.amber });
    const res = resultBlock(s, ['tan <i>δ</i> = 2 tan <i>λ</i>'], { size: 16 });
    s.place([
      { t: 'Magnetic axis', p: [O[0], O[1] - R - ext + 6], at: [[O[0] + 22, 4, 'start'], [O[0] + 22, 8, 'start']] },
      { t: 'Rotation axis', p: add(O, ra, -(R + ext)), at: [[6, 384, 'start'], [6, 390, 'start'], [6, 376, 'start']] },
      { t: 'Magnetic equator', p: [O[0] - R - 7, O[1]], at: [[6, 34, 'start'], [6, 30, 'start'], [6, 26, 'start']] },
      { t: 'Vertical', p: add(g.p, g.er, 40), at: [[W - 6, g.p[1] - 74, 'end'], [W - 6, g.p[1] - 66, 'end'], [W - 6, g.p[1] - 82, 'end']] },
      { t: 'Horizontal', p: add(g.p, g.t, -40), at: [[W - 6, g.p[1] + 36, 'end'], [W - 6, g.p[1] + 40, 'end'], [W - 6, g.p[1] + 44, 'end']] },
    ], [res]);
    return s;
  },
  check() {
    const { O, R, lam, tilt } = G54, g = geo54();
    const rhat = page(g.er), m: V3 = [0, -1, 0];
    const mr = dot3(m, rhat);
    const B: V3 = [3 * mr * rhat[0] - m[0], 3 * mr * rhat[1] - m[1], 0];
    const drawn = page(sub(g.BE, g.p));
    const BV = len(g.p, g.BV), BH = len(g.p, g.BH);
    const dipOf = Math.acos(dotp(unit(sub(g.BE, g.p)), g.t)) / D2R;
    const ex2 = Math.atan(Math.tan(45 * D2R) / 2) / D2R, lam4 = Math.atan(0.5), be4 = Math.sqrt(1 + 3 * Math.sin(lam4) ** 2);
    const ra: P = [Math.sin(tilt * D2R), -Math.cos(tilt * D2R)];
    return [
      [`P is on the surface at magnetic latitude λ = ${lam}°, measured from the magnetic equator (|OP| = ${fmt(len(O, g.p), 2)} px = R)`, close(len(O, g.p), R, 1e-9) && close(Math.atan2(O[1] - g.p[1], g.p[0] - O[0]) / D2R, lam, 1e-9)],
      ['m⃗ points down the magnetic axis, against the rotation axis’s north end: the magnetic pole near the geographic north is a magnetic south pole', G54.mBot > -G54.mTop && dotp([0, 1], ra) < 0],
      [`The dipole field at P, 3(m⃗ · r̂)r̂ − m⃗, points the way the drawn B⃗_E does (cos = ${fmt(dot3(B, drawn) / (norm3(B) * norm3(drawn)), 6)})`, sameWay(B, drawn, 1e-9)],
      [`B_V runs inward along the radius (the vertical) and B_H along the tangent toward the north (the horizontal); B_V/B_H = ${fmt(BV / BH, 4)} = 2 tan λ`, close(dotp(unit(sub(g.BV, g.p)), g.er), -1, 1e-9) && close(dotp(unit(sub(g.BH, g.p)), g.t), 1, 1e-9) && close(BV / BH, 2 * Math.tan(lam * D2R), 1e-9) && g.t[1] < 0],
      [`The dip read off the drawing, between B⃗_E and the horizontal, is ${fmt(dipOf, 2)}°: tan δ = ${fmt(Math.tan(dipOf * D2R), 4)} = 2 tan ${lam}°`, close(Math.tan(dipOf * D2R), 2 * Math.tan(lam * D2R), 1e-9)],
      [`The rotation axis is drawn ${fmt(Math.acos(-ra[1]) / D2R, 1)}° from the magnetic axis (the book's 11.3°)`, close(Math.acos(-ra[1]) / D2R, 11.3, 1e-9)],
      [`Example 2: δ = 45° gives λ = ${fmt(ex2, 1)}°; Example 4: B_V = B_H gives λ = ${fmt(lam4 / D2R, 1)}° and B_E = ${fmt(be4, 2)} B₀ (the book's 26.6°, 26.6° and 1.26 B₀)`, fmt(ex2, 1) === '26.6' && fmt(lam4 / D2R, 1) === '26.6' && fmt(be4, 2) === '1.26'],
      ...layout(fig54.draw(fig54.cases[0])),
    ];
  },
};

/* ===================================================================== */
/* Figure 5.5 · dia-, para- and ferromagnetic bars in a field (topic 03)   */
/* ===================================================================== */
/**
 * A long bar (40 × 112 px in section, its long side across the field, as the
 * book draws it) in a uniform applied field B⃗₀ along +x. The field is solved,
 * not sketched: B⃗ = ∇ × (ψẑ) with ∇ · ((1/μ_r)∇ψ) = 0 (no free current, so
 * H⃗ = B⃗/μ has no curl), on a 2 px grid 360 × 300 px round the bar, with
 * ψ = B₀y on the far boundary (the applied field), by over-relaxation. The
 * field lines are the contours ψ = B₀y₀ of the eleven equally spaced lines
 * far to the left (one level with the bar's top and one with its bottom), so
 * their spacing shows the field's strength. The susceptibilities are
 * exaggerated so the bending shows, as the book's picture is: χ = −0.6, +1.5
 * and 1000 (real dia- and paramagnets have |χ| ~ 10⁻⁵, where no bending
 * could be seen).
 */
const CAP55 = 'Field lines near (a) a diamagnetic, (b) a paramagnetic and (c) a ferromagnetic bar; in (c) the domains align under the applied field. (The bending in (a) and (b) is exaggerated: real dia- and paramagnets have |<i>χ</i>| ~ 10<sup>−5</sup>.)';
const G55 = { c: [170, 146] as P, hx: 20, hy: 56, ys: [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5].map((k) => (k * 56) / 3), xs: 152, heads: [-118, 118], lab: 268, h: 2, X: 180, Y: 150 };
type Kind55 = 'dia' | 'para' | 'ferro';
const CHI55: Record<Kind55, number> = { dia: -0.6, para: 1.5, ferro: 1000 };
type Sol55 = { psi: Float64Array; nx: number; ny: number; iters: number; change: number };
const SOL55 = new Map<Kind55, Sol55>();
const inBar = (x: number, y: number) => Math.abs(x) < G55.hx && Math.abs(y) < G55.hy;
/** The flux function on the grid (node (i, j) at x = −X + ih, y = −Y + jh, y up), solved once per material. */
function solve55(kind: Kind55): Sol55 {
  const done = SOL55.get(kind);
  if (done) return done;
  const { h, X, Y } = G55, mu = 1 + CHI55[kind];
  const nx = Math.round((2 * X) / h) + 1, ny = Math.round((2 * Y) / h) + 1;
  // 1/μ in each cell (between nodes i, i+1 and j, j+1)
  const inv = new Float64Array((nx - 1) * (ny - 1));
  for (let i = 0; i < nx - 1; i++) for (let j = 0; j < ny - 1; j++) inv[i * (ny - 1) + j] = inBar(-X + (i + 0.5) * h, -Y + (j + 0.5) * h) ? 1 / mu : 1;
  const cell = (i: number, j: number) => inv[i * (ny - 1) + j];
  const psi = new Float64Array(nx * ny);
  for (let i = 0; i < nx; i++) for (let j = 0; j < ny; j++) psi[i * ny + j] = -Y + j * h;
  const aE = new Float64Array(nx * ny), aW = new Float64Array(nx * ny), aN = new Float64Array(nx * ny), aS = new Float64Array(nx * ny);
  for (let i = 1; i < nx - 1; i++) for (let j = 1; j < ny - 1; j++) {
    const k = i * ny + j;
    aE[k] = (cell(i, j - 1) + cell(i, j)) / 2; aW[k] = (cell(i - 1, j - 1) + cell(i - 1, j)) / 2;
    aN[k] = (cell(i - 1, j) + cell(i, j)) / 2; aS[k] = (cell(i - 1, j - 1) + cell(i, j - 1)) / 2;
  }
  const w = 1.94;
  let iters = 0, change = Infinity;
  while (change > 1e-6 && iters < 20000) {
    change = 0;
    for (let i = 1; i < nx - 1; i++) for (let j = 1; j < ny - 1; j++) {
      const k = i * ny + j;
      const v = (aE[k] * psi[k + ny] + aW[k] * psi[k - ny] + aN[k] * psi[k + 1] + aS[k] * psi[k - 1]) / (aE[k] + aW[k] + aN[k] + aS[k]);
      const d = w * (v - psi[k]);
      psi[k] += d;
      if (Math.abs(d) > change) change = Math.abs(d);
    }
    iters++;
  }
  const sol = { psi, nx, ny, iters, change };
  SOL55.set(kind, sol);
  return sol;
}
/** ψ at (x, y) relative to the centre (bilinear between nodes). */
function psi55(kind: Kind55, x: number, y: number) {
  const { psi, ny } = solve55(kind), { h, X, Y } = G55;
  const fi = (x + X) / h, fj = (y + Y) / h, i = Math.floor(fi), j = Math.floor(fj), u = fi - i, v = fj - j;
  const at = (a: number, b: number) => psi[a * ny + b];
  return (1 - u) * (1 - v) * at(i, j) + u * (1 - v) * at(i + 1, j) + (1 - u) * v * at(i, j + 1) + u * v * at(i + 1, j + 1);
}
/** B = (∂ψ/∂y, −∂ψ/∂x) at (x, y), by central differences over d px. */
const B55 = (kind: Kind55, x: number, y: number, d = 0.5): P => [(psi55(kind, x, y + d) - psi55(kind, x, y - d)) / (2 * d), -(psi55(kind, x + d, y) - psi55(kind, x - d, y)) / (2 * d)];
/** The contour ψ = y0 at x (y relative to the centre, y up): ψ rises up each column, so it is found by bisection. */
const level55 = (kind: Kind55, y0: number, x: number) => bisect((y) => psi55(kind, x, y) - y0, -G55.Y + 1e-6, G55.Y - 1e-6, 50);
/** The solved lines, in drawing coordinates, one point every 2 px across (for the checks: solving takes seconds). */
const lines55 = (kind: Kind55): P[][] => G55.ys.map((y0) => samples(-G55.xs, G55.xs, G55.xs).map((x): P => [G55.c[0] + x, G55.c[1] - level55(kind, y0, x)]));
/**
 * The drawn lines: the solved contours stored from the centre out (XS55)
 * (heights in px above the centre, for the five lines above the axis; the
 * others are their mirror images, as the bar and the field are symmetric).
 * The check solves the field again and holds every drawn line to within
 * 0.5 px of its contour.
 */
const DATA55: Record<Kind55, number[][]> = {
  dia: [
    [24.5, 24.5, 24.5, 24.4, 24.4, 24.4, 24.3, 24.2, 24.2, 24.1, 24, 23.8, 23.5, 23.3, 23.1, 22.9, 22.7, 22.5, 22.3, 22.1, 22, 21.6, 21.3, 21.1, 20.8, 20.6, 20.4, 20.3, 20.1, 20, 19.8, 19.7, 19.6, 19.5, 19.4, 19.4, 19.3, 19.2, 19.2, 19.1, 19.1, 19, 19, 19, 18.9, 18.9, 18.9, 18.8, 18.8],
    [51.4, 51.3, 51.2, 51.1, 50.9, 50.6, 50.3, 49.9, 49.6, 49.2, 48.8, 47.9, 47.1, 46.5, 45.9, 45.3, 44.8, 44.4, 44, 43.6, 43.2, 42.6, 42, 41.6, 41.1, 40.8, 40.4, 40.1, 39.9, 39.6, 39.4, 39.2, 39, 38.9, 38.7, 38.6, 38.5, 38.4, 38.3, 38.2, 38.1, 38, 38, 37.9, 37.8, 37.8, 37.7, 37.7, 37.6],
    [67.7, 67.7, 67.7, 67.6, 67.5, 67.4, 67.2, 67, 66.8, 66.5, 66.2, 65.9, 65.5, 65.1, 64.7, 64.3, 63.9, 63.6, 63.2, 62.8, 62.5, 61.9, 61.4, 60.9, 60.4, 60, 59.7, 59.3, 59, 58.8, 58.5, 58.3, 58.1, 57.9, 57.7, 57.6, 57.4, 57.3, 57.2, 57.1, 57, 56.9, 56.8, 56.7, 56.6, 56.6, 56.5, 56.4, 56.4],
    [82.8, 82.8, 82.7, 82.7, 82.6, 82.6, 82.5, 82.4, 82.3, 82.1, 82, 81.8, 81.7, 81.5, 81.3, 81.1, 80.9, 80.8, 80.6, 80.4, 80.2, 79.8, 79.4, 79.1, 78.7, 78.4, 78.1, 77.9, 77.6, 77.4, 77.2, 77, 76.8, 76.6, 76.4, 76.3, 76.1, 76, 75.9, 75.8, 75.7, 75.6, 75.5, 75.4, 75.3, 75.3, 75.2, 75.1, 75.1],
    [98.8, 98.8, 98.8, 98.8, 98.7, 98.7, 98.7, 98.6, 98.6, 98.5, 98.4, 98.3, 98.3, 98.2, 98.1, 98, 97.9, 97.8, 97.7, 97.6, 97.4, 97.2, 97, 96.8, 96.6, 96.4, 96.2, 96, 95.8, 95.6, 95.4, 95.3, 95.1, 95, 94.9, 94.7, 94.6, 94.5, 94.4, 94.3, 94.2, 94.2, 94.1, 94, 93.9, 93.9, 93.8, 93.7, 93.7],
  ],
  para: [
    [16.6, 16.6, 16.6, 16.6, 16.6, 16.7, 16.7, 16.7, 16.8, 16.9, 16.9, 16.9, 17, 17, 17, 17.1, 17.1, 17.2, 17.2, 17.3, 17.3, 17.4, 17.5, 17.6, 17.6, 17.7, 17.8, 17.9, 17.9, 18, 18, 18.1, 18.1, 18.2, 18.2, 18.3, 18.3, 18.3, 18.4, 18.4, 18.4, 18.4, 18.5, 18.5, 18.5, 18.5, 18.5, 18.6, 18.6],
    [32.6, 32.6, 32.6, 32.7, 32.7, 32.8, 32.9, 33.1, 33.2, 33.4, 33.6, 33.7, 33.8, 33.9, 34, 34.1, 34.2, 34.3, 34.4, 34.5, 34.6, 34.8, 35, 35.2, 35.4, 35.5, 35.7, 35.8, 36, 36.1, 36.2, 36.3, 36.4, 36.5, 36.5, 36.6, 36.7, 36.7, 36.8, 36.8, 36.9, 36.9, 37, 37, 37, 37.1, 37.1, 37.1, 37.2],
    [47.3, 47.3, 47.3, 47.4, 47.6, 47.8, 48, 48.3, 48.7, 49.1, 49.7, 49.9, 50.2, 50.5, 50.8, 51, 51.3, 51.5, 51.8, 52, 52.2, 52.5, 52.9, 53.2, 53.4, 53.6, 53.8, 54, 54.2, 54.4, 54.5, 54.6, 54.8, 54.9, 55, 55.1, 55.1, 55.2, 55.3, 55.4, 55.4, 55.5, 55.5, 55.6, 55.6, 55.7, 55.7, 55.7, 55.8],
    [65.5, 65.5, 65.6, 65.8, 66, 66.3, 66.6, 66.9, 67.3, 67.7, 68, 68.4, 68.7, 69, 69.3, 69.6, 69.9, 70.1, 70.3, 70.6, 70.7, 71.1, 71.4, 71.7, 72, 72.2, 72.4, 72.6, 72.8, 73, 73.1, 73.2, 73.4, 73.5, 73.6, 73.7, 73.7, 73.8, 73.9, 74, 74, 74.1, 74.2, 74.2, 74.3, 74.3, 74.3, 74.4, 74.4],
    [88.4, 88.4, 88.4, 88.5, 88.5, 88.6, 88.7, 88.7, 88.8, 88.9, 89, 89.2, 89.3, 89.4, 89.5, 89.6, 89.8, 89.9, 90, 90.1, 90.2, 90.5, 90.7, 90.9, 91.1, 91.2, 91.4, 91.6, 91.7, 91.8, 91.9, 92.1, 92.2, 92.3, 92.3, 92.4, 92.5, 92.6, 92.6, 92.7, 92.8, 92.8, 92.9, 92.9, 93, 93, 93, 93.1, 93.1],
  ],
  ferro: [
    [15.5, 15.5, 15.5, 15.6, 15.6, 15.7, 15.8, 16, 16.1, 16.2, 16.4, 16.4, 16.4, 16.4, 16.4, 16.5, 16.5, 16.5, 16.6, 16.6, 16.6, 16.7, 16.8, 16.9, 17, 17.1, 17.2, 17.3, 17.4, 17.5, 17.6, 17.7, 17.8, 17.8, 17.9, 18, 18, 18.1, 18.1, 18.2, 18.2, 18.3, 18.3, 18.3, 18.4, 18.4, 18.4, 18.5, 18.5],
    [29.8, 29.9, 29.9, 30.1, 30.2, 30.5, 30.7, 31.1, 31.5, 31.9, 32.4, 32.4, 32.5, 32.5, 32.6, 32.6, 32.7, 32.8, 32.9, 33, 33.1, 33.4, 33.6, 33.8, 34.1, 34.3, 34.5, 34.8, 35, 35.1, 35.3, 35.5, 35.6, 35.8, 35.9, 36, 36.1, 36.2, 36.3, 36.4, 36.5, 36.6, 36.7, 36.7, 36.8, 36.9, 36.9, 37, 37],
    [42, 42.1, 42.2, 42.4, 42.7, 43.1, 43.6, 44.2, 45, 46, 47.3, 47.3, 47.4, 47.6, 47.9, 48.1, 48.4, 48.7, 49, 49.2, 49.5, 50, 50.5, 51, 51.4, 51.8, 52.2, 52.5, 52.8, 53, 53.3, 53.5, 53.7, 53.9, 54.1, 54.3, 54.4, 54.6, 54.7, 54.8, 54.9, 55, 55.1, 55.2, 55.3, 55.4, 55.4, 55.5, 55.6],
    [51.9, 51.9, 52, 52.2, 52.5, 52.9, 53.4, 54.1, 54.8, 55.8, 59.1, 60.7, 61.9, 62.9, 63.7, 64.4, 65.1, 65.6, 66.1, 66.6, 67, 67.8, 68.4, 69, 69.5, 70, 70.4, 70.8, 71.1, 71.4, 71.7, 72, 72.2, 72.4, 72.6, 72.8, 72.9, 73.1, 73.2, 73.4, 73.5, 73.6, 73.7, 73.8, 73.9, 74, 74.1, 74.1, 74.2],
    [80.6, 80.6, 80.7, 80.9, 81.2, 81.4, 81.8, 82.1, 82.5, 82.9, 83.3, 83.7, 84.1, 84.5, 84.9, 85.2, 85.6, 85.9, 86.2, 86.5, 86.8, 87.4, 87.9, 88.3, 88.8, 89.1, 89.5, 89.8, 90.1, 90.4, 90.6, 90.9, 91.1, 91.3, 91.4, 91.6, 91.7, 91.9, 92, 92.1, 92.2, 92.4, 92.4, 92.5, 92.6, 92.7, 92.8, 92.8, 92.9],
  ],
};
/** Where the stored heights are: every 2 px out to 40 px (past the bar's corners), every 4 px beyond. */
const XS55 = [...samples(0, 40, 20), ...samples(44, 152, 27)];
const drawn55 = (kind: Kind55): P[][] => G55.ys.map((y0) => {
  const n = Math.round((y0 * 3) / G55.hy), row = n ? DATA55[kind][Math.abs(n) - 1] : XS55.map(() => 0);
  const half = XS55.map((x, i): P => [x, Math.sign(n) * row[i]]);
  return [...half.slice(1).reverse().map(([x, y]): P => [-x, y]), ...half].map(([x, y]): P => [G55.c[0] + x, G55.c[1] - y]);
});
/** Where a drawn line crosses x = xc (px above the centre). */
const yAt55 = (pts: P[], xc: number) => { const i = pts.findIndex((q) => q[0] >= G55.c[0] + xc - 1e-9); return G55.c[1] - pts[i][1]; };
const DOM55 = { random: [158, 252, 76, 12, 332, 196, 284, 28], y0: 316, dy: 32, dx: 36, len: 26, xl: 22, xr: 186 };
const fig55: Diagram = {
  id: 'p12-05-fig-5.5',
  topic: 2,
  name: 'Dia-, para- and ferromagnets in a field',
  cases: [
    { chip: '(a) Diamagnetic', kind: 'dia', cap: CAP55 },
    { chip: '(b) Paramagnetic', kind: 'para', cap: CAP55 },
    { chip: '(c) Ferromagnetic', kind: 'ferro', cap: CAP55 },
  ],
  draw(cs: { kind: Kind55 }) {
    const ferro = cs.kind === 'ferro';
    // (c)'s domain panel is set close (34 px shorter than it was) so the card's
    // caption fits under it on a phone (Android review, Ch 5).
    const s = new Sketch(W, ferro ? 386 : 286);
    const { c, hx, hy, heads } = G55;
    drawn55(cs.kind).forEach((pts) => {
      path(s, pts, { color: C.ink, w: 1.5 });
      heads.forEach((hxp) => { const j = pts.findIndex((r) => r[0] >= c[0] + hxp); head(s, pts[j], runAt(pts, j), C.ink, 8, 4); });
    });
    box(s, [c[0] - hx, c[1] - hy, c[0] + hx, c[1] + hy], { color: C.mari, w: 2.4 });
    const name = { dia: 'Diamagnetic bar', para: 'Paramagnetic bar', ferro: 'Ferromagnetic bar' }[cs.kind];
    const lab = { dia: '<i>χ</i> < 0,  <i>μ</i><sub>r</sub> < 1', para: '<i>χ</i> > 0 (small),  <i>μ</i><sub>r</sub> ≳ 1', ferro: '<i>χ</i> ≫ 1,  <i>μ</i><sub>r</sub> ≫ 1' }[cs.kind];
    s.sym(c[0], G55.lab, lab, { size: 15, color: C.amber });
    s.sym(8, 18, 'applied field <i>B⃗</i><sub>0</sub>', { size: 14, anchor: 'start', color: C.slate });
    if (ferro) {
      const { random, y0, dy, dx, len: L, xl, xr } = DOM55;
      s.sym(xl - 4, y0 - 22, 'no field: domains random', { size: 13, anchor: 'start', color: C.slate });
      s.sym(xr - 4, y0 - 22, 'field applied: domains align', { size: 13, anchor: 'start', color: C.slate });
      random.forEach((deg, i) => {
        const m: P = [xl + L / 2 + (i % 4) * dx, y0 + Math.floor(i / 4) * dy], u: P = [Math.cos(deg * D2R), -Math.sin(deg * D2R)];
        arrow(s, add(m, u, -L / 2), add(m, u, L / 2), { w: 2, color: C.mari });
      });
      random.forEach((_, i) => {
        const m: P = [xr + L / 2 + (i % 4) * dx, y0 + Math.floor(i / 4) * dy];
        arrow(s, add(m, [1, 0], -L / 2), add(m, [1, 0], L / 2), { w: 2, color: C.mari });
      });
      s.sym(xl - 4, y0 + dy + 28, 'Ferromagnet: each domain is a tiny saturated magnet', { size: 13, anchor: 'start', color: C.slate });
    }
    s.place([{ t: name, hi: true, p: [c[0] + hx, c[1] - hy + 14], at: [[W - 6, 20, 'end'], [W - 6, 22, 'end'], [W - 6, 18, 'end']] }]);
    return s;
  },
  check(cs: { kind: Kind55 }) {
    const kind = cs.kind, chi = CHI55[kind], mur = 1 + chi, sol = solve55(kind);
    const { hy, ys, xs, X } = G55;
    const lines = lines55(kind);
    const Bc = B55(kind, 0, 0)[0];
    const edgeLine = (k: Kind55) => yAt55(lines55(k)[ys.findIndex((y) => close(y, hy, 1e-9))], 0);
    const edge = edgeLine(kind), edgePara = edgeLine('para');
    // tangential H continuous across the top face, at its middle: H_x = B_x/μ just inside and just outside
    const Hin = B55(kind, 0, hy - 1.5, 0.5)[0] / mur, Hout = B55(kind, 0, hy + 1.5, 0.5)[0];
    const far = Math.max(...ys.map((y) => { const b = B55(kind, -xs, y); return Math.hypot(b[0] - 1, b[1]); }));
    const mono = samples(-X + 4, X - 4, 60).every((x) => samples(-140, 140, 140).every((y, i, a) => i === 0 || psi55(kind, x, y) > psi55(kind, x, a[i - 1])));
    const mid = lines.map((pts) => yAt55(pts, 0)), end = lines.map((pts) => yAt55(pts, xs));
    const drawn = drawn55(kind);
    const dev = Math.max(...lines.flatMap((pts, i) => pts.map((q) => { const d = drawn[i], f = d.findIndex((r) => r[0] > q[0] + 1e-9), j = f < 0 ? d.length - 2 : Math.max(0, f - 1), k = (q[0] - d[j][0]) / (d[j + 1][0] - d[j][0]); return Math.abs(q[1] - (d[j][1] + k * (d[j + 1][1] - d[j][1]))); })));
    const checks: Check[] = [
      [`The field equation ∇ · ((1/μ_r)∇ψ) = 0 is solved to convergence on the grid (${sol.iters} sweeps, last change ${fmt(sol.change * 1e6, 2)} × 10⁻⁶ px)`, sol.change <= 1e-6],
      [`χ = ${fmt(chi, 1)} (μ_r = ${fmt(mur, 1)}), exaggerated so the bending shows; ψ rises steadily up every column (B_x > 0), so each line is one contour ψ = B₀y₀`, mono],
      [`Across the top face the tangential H is continuous: H_x = B_x/μ = ${fmt(Hin, 3)}H₀ just inside, ${fmt(Hout, 3)}H₀ just outside (to within the 2 px grid), while B_x jumps by the factor μ_r = ${fmt(mur, 1)}`, Math.abs(Hin - Hout) < 0.05],
      [`B at the bar's centre is ${fmt(Bc, 3)}B₀: ${kind === 'dia' ? 'less than B₀, the field is pushed out' : 'more than B₀, the field is drawn in'}${kind === 'ferro' ? ` (more than the paramagnet's ${fmt(B55('para', 0, 0)[0], 3)}B₀)` : ''}`, kind === 'dia' ? Bc < 1 : kind === 'para' ? Bc > 1 : Bc > B55('para', 0, 0)[0]],
      [`Far to the left the field is the applied B⃗₀, uniform, left to right (off by at most ${fmt(far * 100, 2)}%)`, far < 0.03],
      [`The line that starts level with the bar's top (${fmt(hy, 1)} px up) passes its middle ${fmt(edge, 1)} px up: ${kind === 'dia' ? 'outside the bar, pushed out (the lines spread out of a diamagnet)' : kind === 'para' ? 'inside the bar, drawn in (the lines crowd into a paramagnet)' : `further inside than for the paramagnet (${fmt(edgePara, 1)} px), drawn in harder`}`, kind === 'dia' ? edge > hy : kind === 'para' ? edge < hy : edge < edgePara],
      [`The drawn lines follow the solved contours to within ${fmt(dev, 2)} px everywhere`, dev < 0.5],
      ['The lines never cross: their order is the same at the start, through the bar and at the end, and the picture is the same on both sides', mid.every((y, i) => i === 0 || y > mid[i - 1]) && end.every((y, i) => i === 0 || y > end[i - 1]) && lines.every((pts, i) => Math.abs(yAt55(pts, -xs) - ys[i]) < 0.6 && Math.abs(yAt55(pts, xs) - ys[i]) < 0.6)],
    ];
    if (kind === 'ferro') {
      const sum = DOM55.random.reduce((a, d) => add(a, [Math.cos(d * D2R), Math.sin(d * D2R)]), [0, 0] as P);
      checks.push([`With no field the ${DOM55.random.length} domain moments nearly cancel (net ${fmt(Math.hypot(...sum), 2)} of a possible ${DOM55.random.length}); in the field all point along B⃗₀ (net ${DOM55.random.length})`, Math.hypot(...sum) < 0.3 * DOM55.random.length]);
    }
    return [...checks, ...layout(fig55.draw(cs))];
  },
};

/* ---------- hysteresis loops (Figures 5.6 and 5.8) ---------- */
/**
 * A loop as two branches, in units of the saturation field B_s and the tip
 * field H_m: coming down from saturation B = B_s tanh((H + H_c)/w), going up
 * B = B_s tanh((H − H_c)/w), the second the first turned through 180°. So the
 * retentivity is B_r = B_s tanh(H_c/w) on the +B axis at H = 0, the
 * coercivity H_c is where the falling branch crosses B = 0, and the area
 * between them is the energy lost per unit volume per cycle.
 */
type Loop = { hc: number; w: number };
/** The wide loop (steel / Alnico) and the narrow one (soft iron), as fractions of the tip field H_m. */
const STEEL: Loop = { hc: 1 / 3, w: 0.24 };
const SOFT: Loop = { hc: 0.055, w: 0.095 };
const down = (L: Loop, h: number) => Math.tanh((h + L.hc) / L.w);
const up = (L: Loop, h: number) => Math.tanh((h - L.hc) / L.w);
const loopArea = (L: Loop) => simpson((h) => down(L, h) - up(L, h), -1, 1);
type Frame56 = { o: P; hm: number; bs: number };
const toPx = (f: Frame56, h: number, b: number): P => [f.o[0] + h * f.hm, f.o[1] - b * f.bs];
/** The loop as one closed line: down from the tip to the far tip, then up again. */
const loopPts = (f: Frame56, L: Loop, n = 160): P[] => [...samples(1, -1, n).map((h) => toPx(f, h, down(L, h))), ...samples(-1, 1, n).slice(1).map((h) => toPx(f, h, up(L, h)))];
/** The loop's area as thin vertical slivers (the book's shading; never a fill), clear of the rectangles in `skip`. */
function loopSlivers(s: Sketch, f: Frame56, L: Loop, gap: number, skip: Rect[] = [], color: string = C.mari, cut: Loop | null = null) {
  for (let x = f.o[0] - f.hm + gap / 2; x < f.o[0] + f.hm; x += gap) {
    const h = (x - f.o[0]) / f.hm, yTop = toPx(f, h, down(L, h))[1] + 1.8, yBot = toPx(f, h, up(L, h))[1] - 1.8;
    if (yBot - yTop < 3) continue;
    // the other loop's lines cross this sliver: leave 3 px round each
    const rects = [...skip, ...(cut ? [down(cut, h), up(cut, h)].map((b): Rect => { const y = toPx(f, h, b)[1]; return [x - 1, y - 3, x + 1, y + 3]; }) : [])];
    let segs: [number, number][] = [[yTop, yBot]];
    for (const r of rects) {
      if (x <= r[0] || x >= r[2]) continue;
      segs = segs.flatMap(([a, b]): [number, number][] => (b <= r[1] || a >= r[3] ? [[a, b]] : [...(r[1] - a > 2 ? [[a, r[1]] as [number, number]] : []), ...(b - r[3] > 2 ? [[r[3], b] as [number, number]] : [])]));
    }
    segs.forEach(([a, b]) => s.line(x, a, x, b, { color, w: 0.8 }));
  }
}
/** Axes through the frame's origin, with arrowheads. */
function axes56(s: Sketch, f: Frame56, x0: number, x1: number, y0: number, y1: number, size = 15) {
  path(s, [[x0, f.o[1]], [x1 - 9, f.o[1]]], { color: C.slate, w: 1.3 });
  head(s, [x1, f.o[1]], [1, 0], C.slate, 9, 4);
  path(s, [[f.o[0], y0], [f.o[0], y1 + 9]], { color: C.slate, w: 1.3 });
  head(s, [f.o[0], y1], [0, -1], C.slate, 9, 4);
  s.sym(x1 - 4, f.o[1] + 22, '<i>H</i>', { size, anchor: 'end' });
  s.sym(f.o[0] - 10, y1 + 12, '<i>B</i>', { size, anchor: 'end' });
}
/** Checks shared by both loop figures. */
function loopChecks(f: Frame56, Ls: [string, Loop][]): Check[] {
  return Ls.flatMap(([name, L]): Check[] => {
    const br = down(L, 0), hcAt = bisect((h) => down(L, h), -1, 0), gap = Math.abs(down(L, 1) - up(L, 1)) * f.bs;
    const sym = samples(-1, 1, 40).every((h) => close(up(L, h), -down(L, -h), 1e-12));
    return [
      [`${name}: the rising branch is the falling one turned through 180° (B_up(H) = −B_down(−H)), and the two meet at the tips (within ${fmt(gap, 2)} px)`, sym && gap < 1],
      [`${name}: retentivity B_r = ${fmt(br, 3)}B_s on the +B axis at H = 0; coercivity: the falling branch crosses B = 0 at H = −${fmt(-hcAt, 3)}H_m = −H_c`, close(hcAt, -L.hc, 1e-9) && br > 0],
    ];
  });
}

/* ===================================================================== */
/* Figure 5.6 · B–H hysteresis loops (topic 03)                            */
/* ===================================================================== */
const G56: Frame56 = { o: [158, 190], hm: 140, bs: 100 };
/** The sense round the wide loop: down the falling branch (H decreasing), up the rising one (H increasing). */
const arrows56 = () => ([[-0.62, down, -1], [0.62, up, 1]] as [number, typeof down, number][]).map(([hh, fn, sgn]) => {
  const p = toPx(G56, hh, fn(STEEL, hh)), q = toPx(G56, hh + sgn * 0.01, fn(STEEL, hh + sgn * 0.01));
  return { p, u: unit(sub(q, p)) };
});
const fig56: Diagram = {
  id: 'p12-05-fig-5.6',
  topic: 2,
  name: 'Hysteresis loops',
  cases: [{ chip: 'Wide and narrow loops', cap: '<i>B</i>–<i>H</i> hysteresis loops: saturation at the tip, retentivity <i>B</i><sub>r</sub> on the +<i>B</i> axis at <i>H</i> = 0, coercive field on the −<i>H</i> axis at <i>B</i> = 0; the enclosed area is the energy lost per cycle.' }],
  draw() {
    const s = new Sketch(W, 430);
    const f = G56;
    const brP = toPx(f, 0, down(STEEL, 0)), hcP = toPx(f, -STEEL.hc, 0), tip = toPx(f, 1, down(STEEL, 1));
    loopSlivers(s, f, STEEL, 6, [[f.o[0] - 3, 0, f.o[0] + 3, 430], [0, f.o[1] - 3, W, f.o[1] + 3]], C.mari, SOFT);
    axes56(s, f, 10, 330, f.o[1] + 128, f.o[1] - 132, 17);
    path(s, loopPts(f, STEEL), { color: C.mari, w: 2.6 });
    path(s, loopPts(f, SOFT), { color: C.ink, w: 2.2 });
    // the sense round the wide loop: down the falling branch, up the rising one
    arrows56().forEach(({ p, u }) => head(s, p, u, C.mari, 11, 5));
    s.dot(...tip, 3.6, C.mari);
    s.dot(...brP, 3.6, C.mari);
    s.dot(...hcP, 3.6, C.mari);
    s.sym(brP[0] - 8, brP[1] - 8, '<i>B</i><sub>r</sub>', { size: 16, anchor: 'end', color: C.amber });
    s.sym(hcP[0] - 14, hcP[1] + 22, '−<i>H</i><sub>c</sub>', { size: 16, anchor: 'end', color: C.amber });
    const inside = toPx(f, -0.2, -0.75), steelAt = toPx(f, 0.17, up(STEEL, 0.17)), softAt = toPx(f, 0.119, down(SOFT, 0.119));
    s.place([
      { t: 'Saturation', p: tip, at: [[W - 6, tip[1] - 46, 'end'], [W - 6, tip[1] - 40, 'end']] },
      { t: 'Retentivity', p: brP, at: [[8, brP[1] + 4, 'start'], [8, brP[1] + 10, 'start'], ...spots(s, brP)] },
      { t: 'Coercivity', p: hcP, at: [[8, hcP[1] - 50, 'start'], [8, hcP[1] - 44, 'start'], ...spots(s, hcP)] },
      { t: 'Area = energy lost per cycle', p: inside, at: [[6, 372, 'start'], [6, 380, 'start'], ...spots(s, inside)] },
      { t: 'Steel / Alnico (wide loop)', hi: true, p: steelAt, at: [[W - 6, 340, 'end'], [W - 6, 346, 'end'], ...spots(s, steelAt)] },
      { t: 'Soft iron (narrow loop)', p: softAt, at: [[6, 6, 'start'], [6, 10, 'start']] },
    ]);
    return s;
  },
  check() {
    const f = G56, aw = loopArea(STEEL), as = loopArea(SOFT);
    // the slivers' area, read back off the drawing (each sliver × the gap), against the loop's integral
    const s = fig56.draw(fig56.cases[0]);
    return [
      ...loopChecks(f, [['Steel / Alnico', STEEL], ['Soft iron', SOFT]]),
      [`The tip is saturation: the slope there is ${fmt((down(STEEL, 1) - down(STEEL, 0.98)) / 0.02, 4)} of B_s per H_m, against ${fmt((down(STEEL, 0) - down(STEEL, -0.02)) / 0.02, 2)} at H = 0 (B levels off)`, (down(STEEL, 1) - down(STEEL, 0.98)) / 0.02 < 0.01],
      [`The enclosed areas: wide ${fmt(aw, 3)}, narrow ${fmt(as, 3)} B_sH_m (≈ 4B_sH_c each): the wide loop wastes ${fmt(aw / as, 1)} times the energy per cycle`, Math.abs(aw - 4 * STEEL.hc) < 0.02 && Math.abs(as - 4 * SOFT.hc) < 0.02 && aw / as > 5],
      [`Soft iron has the lower retentivity (${fmt(down(SOFT, 0), 2)} against ${fmt(down(STEEL, 0), 2)} B_s) and the lower coercivity (${fmt(SOFT.hc, 3)} against ${fmt(STEEL.hc, 3)} H_m)`, down(SOFT, 0) < down(STEEL, 0) && SOFT.hc < STEEL.hc],
      ['The arrows run down the falling branch (H decreasing, B falling) and up the rising one (H increasing, B rising)', arrows56()[0].u[0] < 0 && arrows56()[0].u[1] > 0 && arrows56()[1].u[0] > 0 && arrows56()[1].u[1] < 0],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* Figure 5.7 · Gauss's law for magnetism and for electrostatics (topic 04) */
/* ===================================================================== */
/**
 * Left: a small bar magnet (the two-pole field of Figure 5.1, poles 15 px from
 * its centre) inside a closed surface, a sphere of radius 60 px seen in
 * section. Two loops stay inside; two more, above and below, cross it: where a
 * line crosses, B⃗ · n̂ is computed, and its sign marks the crossing as a line
 * leaving (a dot) or re-entering (a ring). Right: a point charge +q inside the
 * same surface, its eight radial lines all leaving. The checks integrate the
 * flux through the sphere for each.
 */
const CAP57 = { mag: 'Every field line that leaves a closed surface re-enters it, so the net magnetic flux is zero.', ele: 'For a point charge the lines only leave, so net flux = <i>q</i>/ε<sub>0</sub>.' };
const G57 = { c: [170, 150] as P, a: 15, l: 27, h: 12, Rs: 60, apex: [24, 38, 82, 108], nLines: 8, r0: 11, r1: 122, qAng: 22.5, qR: 42 };
const mag57 = (): Poles => ({ c: G57.c, a: G57.a });
const box57 = (): Rect => [G57.c[0] - G57.l, G57.c[1] - G57.h, G57.c[0] + G57.l, G57.c[1] + G57.h];
const loops57 = () => G57.apex.flatMap((y) => [false, true].map((dn) => outsideRun(poleLine(mag57(), y, dn), box57(), 1)));
/** Where each drawn loop crosses the closed surface, and whether the line leaves there (B⃗ · n̂ > 0). */
function crossings57(): { p: P; out: boolean }[] {
  const { c, Rs } = G57, m = mag57(), res: { p: P; out: boolean }[] = [];
  loops57().forEach((pts) => pts.forEach((q, i) => {
    if (!i) return;
    const a = len(pts[i - 1], c) - Rs, b = len(q, c) - Rs;
    if (a * b > 0) return;
    const p = add(pts[i - 1], sub(q, pts[i - 1]), a / (a - b));
    res.push({ p, out: dotp(poleH(m, p), unit(sub(p, c))) > 0 });
  }));
  return res;
}
/** The flux of a field through the sphere of radius R about c (axially symmetric about the horizontal axis), per the flux of one unit pole. */
function sphereFlux(H: (p: P) => P, c: P, R: number) {
  return (2 * Math.PI * R * R * simpson((t) => { const p: P = [c[0] + R * Math.cos(t), c[1] - R * Math.sin(t)], n = unit(sub(p, c)); return dotp(H(p), n) * Math.sin(t); }, 0, Math.PI, 4000)) / (4 * Math.PI);
}
const fig57: Diagram = {
  id: 'p12-05-fig-5.7',
  topic: 3,
  name: 'Gauss’s law: magnetic and electric',
  cases: [
    { chip: 'Magnetism', part: 'mag', cap: CAP57.mag },
    { chip: 'Electrostatics', part: 'ele', cap: CAP57.ele },
  ],
  draw(cs: { part: 'mag' | 'ele' }) {
    const s = new Sketch(W, cs.part === 'mag' ? 384 : 352);
    const { c, Rs, l, h } = G57;
    ring(s, c, Rs, { color: C.mari, w: 2.2, dash: 'dash' });
    if (cs.part === 'mag') {
      const loops = loops57();
      loops.forEach((pts) => path(s, pts, { w: 1.6 }));
      loops.forEach((pts) => { const yTop = pts.reduce((b, q) => (Math.abs(q[1] - c[1]) > Math.abs(b - c[1]) ? q[1] : b), c[1]); const [, k] = nearestOn(pts, [c[0], yTop]); head(s, pts[k], runAt(pts, k), C.ink, 8, 4); });
      box(s, box57(), { w: 2 });
      s.sym(c[0] - l / 2 + 1, c[1] + 5, 'S', { size: 13 });
      s.sym(c[0] + l / 2 - 1, c[1] + 5, 'N', { size: 13 });
      const xs = crossings57();
      xs.forEach(({ p, out }) => (out ? s.dot(p[0], p[1], 4.2) : s.point(p[0], p[1], 4.6, `<circle cx="${r1(p[0])}" cy="${r1(p[1])}" r="4.6" fill="#fff" stroke="${C.ink}" stroke-width="1.8"/>`)));
      s.sym(8, 20, 'Gauss’s law for magnetism', { size: 14, anchor: 'start', color: C.slate });
      const res = resultBlock(s, ['∮ <i>B⃗</i> · d<i>A⃗</i> = 0', 'lines that exit must re-enter', '⇒ net flux = 0'], { size: 14 });
      const leave = xs.filter((x) => x.out && x.p[1] < c[1]).sort((a, b) => b.p[0] - a.p[0])[0], back = xs.filter((x) => !x.out && x.p[1] < c[1]).sort((a, b) => a.p[0] - b.p[0])[0];
      s.place([
        { t: 'Closed surface', hi: true, p: polar(c, Rs, -35), at: [[W - 6, c[1] + 70, 'end'], [W - 6, c[1] + 76, 'end'], [W - 6, c[1] + 64, 'end']] },
        // The two lines end on their markers' edges, with no dot of their own:
        // a tag's dot just outside a marker made a second blob beside it.
        { t: 'Line leaves', p: leave.p, ring: [leave.p[0], leave.p[1], 4.2], own: leave.p, bare: true, at: [[W - 6, leave.p[1] - 30, 'end'], [W - 6, leave.p[1] - 22, 'end'], [W - 6, leave.p[1] - 38, 'end']] },
        { t: 'Line re-enters', p: back.p, ring: [back.p[0], back.p[1], 5.5], own: back.p, bare: true, at: [[6, back.p[1] - 30, 'start'], [6, back.p[1] - 22, 'start'], [6, back.p[1] - 38, 'start']] },
      ], [res]);
      void h;
      return s;
    }
    const { nLines, r0, r1: rr } = G57;
    for (let k = 0; k < nLines; k++) {
      const a = (360 * k) / nLines, p0 = polar(c, r0, a), p1 = polar(c, rr, a), u = unit(sub(p1, p0));
      path(s, [p0, p1], { w: 1.6 });
      head(s, polar(c, Rs + 30, a), u, C.ink, 8, 4);
      head(s, polar(c, 32, a), u, C.ink, 8, 4);
    }
    ring(s, c, 7, { w: 1.8 });
    path(s, [[c[0] - 3.5, c[1]], [c[0] + 3.5, c[1]]], { w: 1.6 });
    path(s, [[c[0], c[1] - 3.5], [c[0], c[1] + 3.5]], { w: 1.6 });
    s.point(c[0], c[1], 7, '');
    const qp = polar(c, G57.qR, G57.qAng);
    s.sym(qp[0], qp[1] + 5, '+<i>q</i>', { size: 15 });
    s.sym(8, 20, 'Gauss’s law for electrostatics', { size: 14, anchor: 'start', color: C.slate });
    const res = resultBlock(s, ['∮ <i>E⃗</i> · d<i>A⃗</i> = <i>q</i><sub>enc</sub>/ε<sub>0</sub>', 'lines only leave ⇒ net flux = <i>q</i>/ε<sub>0</sub>'], { size: 14 });
    s.place([{ t: 'Closed surface', hi: true, p: polar(c, Rs, 118), at: [[6, 32, 'start'], [6, 36, 'start'], [6, 28, 'start']] }], [res]);
    return s;
  },
  check(cs: { part: 'mag' | 'ele' }) {
    const { c, Rs, nLines } = G57, s = fig57.draw(cs);
    if (cs.part === 'mag') {
      const xs = crossings57(), outs = xs.filter((x) => x.out).length, ins = xs.length - outs;
      const loops = loops57(), m = mag57();
      const inside = loops.filter((pts) => pts.every((q) => len(q, c) < Rs)).length;
      const phi = sphereFlux((p) => poleH(m, p), c, Rs);
      const leaveRight = xs.every((x) => (x.out ? x.p[0] > c[0] : x.p[0] < c[0]));
      return [
        [`The loops are lines of the magnet's two-pole field (Figure 5.1's model): ${inside} stay inside the surface, ${loops.length - inside} cross it`, inside === 4 && loops.length === 8],
        [`At each crossing B⃗ · n̂ is computed: ${outs} lines leave (dots, on the N side) and ${ins} re-enter (rings, on the S side): every line that leaves comes back`, outs === ins && outs === 4 && leaveRight],
        [`Integrated over the sphere, the net flux is ${fmt(phi, 6)} of one pole's flux: ∮ B⃗ · dA⃗ = 0`, Math.abs(phi) < 1e-5],
        ...layout(s),
      ];
    }
    const H = (p: P): P => { const r = sub(p, c), d = Math.hypot(...r) ** 3; return [r[0] / d, r[1] / d]; };
    const phi = sphereFlux(H, c, Rs);
    const allOut = Array.from({ length: nLines }, (_, k) => polar(c, Rs, (360 * k) / nLines)).every((p) => dotp(H(p), unit(sub(p, c))) > 0);
    return [
      [`All ${nLines} lines start on +q and cross the surface once, outward (E⃗ · n̂ > 0 at every crossing)`, allOut],
      [`Integrated over the sphere the flux is ${fmt(phi, 5)} × q/ε₀: the enclosed charge over ε₀`, Math.abs(phi - 1) < 1e-5],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* Figure 5.8 · soft iron and steel; an electromagnet and a horseshoe (topic 05) */
/* ===================================================================== */
/**
 * Top: the two loops of Figure 5.6 again, each on its own axes. Below: an
 * electromagnet, a soft-iron core in a solenoid whose turns run left to right
 * across the front (so, by the right-hand rule, B⃗ inside points up and N is at
 * the top), and a horseshoe permanent magnet holding a load: the flux leaves
 * the N face, crosses the load and enters the S face, and each of the two
 * faces pulls with B²A/(2μ₀).
 */
const CAP58 = { loops: 'Soft iron (narrow loop) suits electromagnet cores; steel/Alnico (wide loop) suits permanent magnets.', mags: 'An electromagnet and a horseshoe magnet lifting a load.' };
const F58: Frame56[] = [{ o: [86, 128], hm: 66, bs: 64 }, { o: [256, 128], hm: 66, bs: 64 }];
const G58 = { core: [62, 44, 98, 204] as Rect, turns: [62, 88, 112, 136, 160, 184], rx: 32, ry: 8, hs: { x0: 42, x1: 176, top: 328, bar: 22, leg: 32, legBot: 404, pole: 24 }, load: 18 };
/** The flux path through the load (N leg down, along the load, S leg up) and its arrowheads. */
function flux58() {
  const { x0, x1, legBot, pole } = G58.hs, ym = legBot + G58.load / 2, xN = x0 + 22, xS = x1 - 22;
  const pts: P[] = [[xN, legBot - pole + 4], [xN, ym], [xS, ym], [xS, legBot - pole + 4]];
  const heads: [P, P][] = [[[xN, legBot - 2], [0, 1]], [[(xN + xS) / 2 + 4, ym], [1, 0]], [[xS, legBot - 8], [0, -1]]];
  return { path: pts, heads, xN, xS };
}
const fig58: Diagram = {
  id: 'p12-05-fig-5.8',
  topic: 4,
  name: 'Soft iron and steel at work',
  cases: [
    { chip: 'Two loops', part: 'loops', cap: CAP58.loops },
    { chip: 'Electromagnet and load', part: 'mags', cap: CAP58.mags },
  ],
  draw(cs: { part: 'loops' | 'mags' }) {
    if (cs.part === 'loops') {
      const s = new Sketch(W, 300);
      ([[F58[0], SOFT, false], [F58[1], STEEL, true]] as [Frame56, Loop, boolean][]).forEach(([f, L, hi]) => {
        if (hi) loopSlivers(s, f, L, 5, [[f.o[0] - 3, 0, f.o[0] + 3, 300], [0, f.o[1] - 3, W, f.o[1] + 3]]);
        axes56(s, f, f.o[0] - f.hm - 10, f.o[0] + f.hm + 14, f.o[1] + f.bs + 16, f.o[1] - f.bs - 26, 14);
        path(s, loopPts(f, L), { color: hi ? C.mari : C.ink, w: 2.2 });
      });
      const [a, b] = F58;
      s.sym(a.o[0] - a.hm - 4, a.o[1] + a.bs + 44, 'low retentivity,', { size: 13, anchor: 'start', color: C.slate });
      s.sym(a.o[0] - a.hm - 4, a.o[1] + a.bs + 62, 'low coercivity,', { size: 13, anchor: 'start', color: C.slate });
      s.sym(a.o[0] - a.hm - 4, a.o[1] + a.bs + 80, 'high <i>μ</i><sub>r</sub> (narrow loop)', { size: 13, anchor: 'start', color: C.slate });
      s.sym(b.o[0] - b.hm - 4, b.o[1] + b.bs + 44, 'high retentivity,', { size: 13, anchor: 'start', color: C.amber });
      s.sym(b.o[0] - b.hm - 4, b.o[1] + b.bs + 62, 'high coercivity', { size: 13, anchor: 'start', color: C.amber });
      s.sym(b.o[0] - b.hm - 4, b.o[1] + b.bs + 80, '(wide loop)', { size: 13, anchor: 'start', color: C.amber });
      s.place([
        { t: 'Soft iron', p: toPx(a, 0.5, down(SOFT, 0.5)), at: [[a.o[0] + 14, 6, 'start'], [a.o[0] + 14, 10, 'start']] },
        { t: 'Steel / Alnico', hi: true, p: toPx(b, 0.5, down(STEEL, 0.5)), at: [[b.o[0] + 8, 6, 'start'], [W - 4, 6, 'end'], [W - 4, 10, 'end']] },
      ]);
      return s;
    }
    const s = new Sketch(W, 500);
    const { core, turns, rx, ry, hs, load } = G58;
    const cx = (core[0] + core[2]) / 2;
    // the soft-iron core, and the turns: back halves dotted (behind the core, hidden), front halves solid with the current
    box(s, core, { color: C.mari, w: 2.4 });
    turns.forEach((y) => {
      const back = ellPts([cx, y], rx, ry, Math.PI, 2 * Math.PI, 40).filter((q) => q[0] < core[0] - 1 || q[0] > core[2] + 1);
      const left = back.filter((q) => q[0] < cx), right = back.filter((q) => q[0] > cx);
      [left, right].forEach((seg) => seg.length > 1 && path(s, seg, { color: C.slate, w: 1.2, dash: 'dot', free: true }));
      path(s, ellPts([cx, y], rx, ry, 0.08, Math.PI - 0.08, 40), { w: 1.8 });
      head(s, [cx + 5, y + ry], [1, 0], C.ink, 8, 4);
    });
    // B⃗ inside points up (drawn beside the coil): N at the top, S at the bottom
    arrow(s, [core[0] - rx + 8, turns[turns.length - 1] - 4], [core[0] - rx + 8, turns[0] + 4], { w: 2.4 });
    s.sym(core[0] - rx - 2, (turns[0] + turns[turns.length - 1]) / 2 + 5, '<i>B⃗</i>', { size: 16, anchor: 'end' });
    s.sym(cx, core[1] - 10, 'N', { size: 16 });
    s.sym(cx, core[3] + 24, 'S', { size: 16 });
    s.sym(cx + rx + 14, turns[1] + 4, 'current <i>I</i> in the coil;', { size: 13, anchor: 'start', color: C.slate });
    s.sym(cx + rx + 14, turns[1] + 22, 'front of each turn runs', { size: 13, anchor: 'start', color: C.slate });
    s.sym(cx + rx + 14, turns[1] + 40, 'left to right', { size: 13, anchor: 'start', color: C.slate });
    s.sym(8, core[3] + 50, 'electromagnet', { size: 13, anchor: 'start', color: C.slate });
    s.sym(8, core[3] + 66, '(soft-iron core in a current-carrying solenoid)', { size: 13, anchor: 'start', color: C.slate });
    // the horseshoe: a bar across the top and two legs, the pole faces at the legs' feet
    const { x0, x1, top, bar, leg, legBot, pole } = hs;
    outline(s, [[x0, top], [x1, top], [x1, legBot], [x1 - leg, legBot], [x1 - leg, top + bar], [x0 + leg, top + bar], [x0 + leg, legBot], [x0, legBot]], { w: 2 });
    path(s, [[x0, legBot - pole], [x0 + leg, legBot - pole]], { w: 1.4 });
    path(s, [[x1 - leg, legBot - pole], [x1, legBot - pole]], { w: 1.4 });
    s.sym(x0 + 9, legBot - 9, 'N', { size: 14 });
    s.sym(x1 - 9, legBot - 9, 'S', { size: 14 });
    s.sym(x0 - 2, top - 24, 'permanent magnet (steel/Alnico)', { size: 13, anchor: 'start', color: C.slate });
    s.sym(x0 - 2, top - 8, 'lifting a load', { size: 13, anchor: 'start', color: C.slate });
    // the load, flush against both faces, and the flux: out of the N face, along the load, into the S face
    const lx0 = x0 - 12, lx1 = x1 + 12, ly0 = legBot, ly1 = legBot + load, ym = (ly0 + ly1) / 2;
    box(s, [lx0, ly0, lx1, ly1], { w: 2 });
    const fl = flux58();
    path(s, fl.path, { color: C.slate, w: 1.4 });
    fl.heads.forEach(([p, u]) => head(s, p, u, C.slate, 7, 3.5));
    // the weight, hanging from the load
    const wx = (lx0 + lx1) / 2;
    arrow(s, [wx, ly1 + 2], [wx, ly1 + 42], { w: 2.2 });
    const res = resultBlock(s, ['<i>F</i><sub>total</sub> = <i>B</i><sup>2</sup><i>A</i>/μ<sub>0</sub>', '(each face <i>B</i><sup>2</sup><i>A</i>/(2μ<sub>0</sub>))'], { size: 14 });
    s.place([
      { t: 'Soft-iron core', hi: true, p: [core[2], core[1] + 10], at: [[core[2] + 40, core[1] - 22, 'start'], [core[2] + 40, core[1] - 30, 'start']] },
      { t: 'Load', p: [lx1, ym], at: [[lx1 + 14, ym - 30, 'start'], [lx1 + 14, ym - 36, 'start'], [lx1 + 14, ym + 4, 'start']] },
      { t: 'Weight', p: [wx, ly1 + 18], at: [[wx - 14, ly1 + 22, 'end'], [wx - 14, ly1 + 16, 'end'], [wx - 14, ly1 + 28, 'end']] },
    ], [res]);
    return s;
  },
  check(cs: { part: 'loops' | 'mags' }) {
    const s = fig58.draw(cs);
    if (cs.part === 'loops') {
      const slope = (L: Loop) => (down(L, -L.hc + 0.001) - down(L, -L.hc - 0.001)) / 0.002;
      return [
        ...loopChecks(F58[0], [['Soft iron', SOFT], ['Steel / Alnico', STEEL]]),
        [`They are Figure 5.6's two loops: soft iron's retentivity ${fmt(down(SOFT, 0), 2)} B_s and coercivity ${fmt(SOFT.hc, 3)} H_m are low, steel's ${fmt(down(STEEL, 0), 2)} B_s and ${fmt(STEEL.hc, 3)} H_m high`, down(SOFT, 0) < down(STEEL, 0) && SOFT.hc < STEEL.hc],
        [`Soft iron's loop is the steeper (its permeability, dB/dH where it crosses the axis, is ${fmt(slope(SOFT) / slope(STEEL), 1)} times steel's) and its area ${fmt(loopArea(SOFT) / loopArea(STEEL), 2)} of steel's: little energy lost each time it is switched`, slope(SOFT) > slope(STEEL) && loopArea(SOFT) < 0.25 * loopArea(STEEL)],
        ...layout(s),
      ];
    }
    const { core, turns, ry } = G58;
    const cx = (core[0] + core[2]) / 2;
    // a turn's front point (toward the viewer, z > 0) with the current along +x: its moment is r × I dl
    const mom = cross3([0, 0, 1], [1, 0, 0]);
    const B = 1.5, A = 8.0e-4, F = (B * B * A) / MU0, each = (B * B * A) / (2 * MU0);
    const Bex1 = MU0 * 600 * (500 / 0.25) * 1.0;
    void turns; void ry; void cx;
    return [
      ['Each turn carries the current left to right across its front (toward the viewer): by the right-hand rule its moment, r⃗ × I dl⃗, points up the coil, so B⃗ inside points up and the top is N', sameWay(mom, [0, 1, 0])],
      [`Example 1: the soft-iron core multiplies the coil's field by μ_r: B = μ₀μ_r nI = ${fmt(Bex1, 2)} T (the book's 1.5 T; without the core ${fmt((Bex1 / 600) * 1e3, 2)} mT, the book's 2.5 × 10⁻³ T)`, Math.abs(Bex1 - 1.5) < 0.05 && Math.abs((Bex1 / 600) * 1e3 - 2.5) < 0.05],
      ['The flux leaves the N face downward, runs through the load from the N side to the S side, and enters the S face upward: with the magnet it closes one loop', (() => { const fl = flux58(); return fl.xN < fl.xS && fl.heads[0][1][1] > 0 && fl.heads[1][1][0] > 0 && fl.heads[2][1][1] < 0 && fl.path[1][1] > G58.hs.legBot && fl.xN < G58.hs.x0 + G58.hs.leg && fl.xS > G58.hs.x1 - G58.hs.leg; })()],
      [`Two faces pull: F_total = 2 × B²A/(2μ₀) = B²A/μ₀; Example 3 (1.5 T, 8.0 cm² each): ${fmt(F, 0)} N ≈ 1.4 × 10³ N, a mass of ${fmt(F / 9.8, 0)} kg`, close(F, 2 * each, 1e-9) && Math.round(F) === 1432 && Math.round(F / 9.8) === 146],
      ...layout(s),
    ];
  },
};

export const DIAGRAMS_PHYSICS_12_05: Diagram[] = [fig51, fig52, fig53, fig54, fig55, fig56, fig57, fig58];
