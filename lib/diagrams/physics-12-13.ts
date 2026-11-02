import { C, F, LABEL_GAP, Rect, Sketch, crosses, mathW, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * PHYSICS CLASS 12, CHAPTER 13 (Nuclei): every drawing of the Master Reference
 * book in pp. 815–864, redrawn. They are the six numbered figures, each printed
 * on a "CHAPTER 13 · FIGURES" page (13.1 on p. 818, 13.2 on p. 821, 13.3 on
 * p. 827, 13.4 on p. 829, 13.5 on p. 835, 13.6 on p. 843; the first copy of each
 * caption sits a page earlier). There are no unnumbered drawings: pp. 815–864
 * were checked page by page; the rest is prose, typeset equations, boxed
 * results, the cheat-sheet boxes and, in Addendum D (pp. 858–859), the table of
 * the five SEMF terms and the braced pairing-term cases (a table and an
 * equation, not drawings).
 *
 * Every figure is computed from the physics, never placed by eye: the nucleus
 * of ²⁷Al is 13 + 14 touching spheres in hexagonal packing; the mass-defect
 * bars carry ⁵⁶Fe's real masses; the binding-energy curve is B/A recomputed from
 * measured atomic masses (Z m_H + N m_n − M) × 931.494 MeV/u for each plotted
 * nuclide; the nuclear potential is a Morse curve U = D[(1 − e^(−a(r − r₀)))² − 1]
 * with the book's depth D = 50 MeV and its minimum at NCERT's r₀ = 0.8 fm; the decay
 * curve is N₀e^(−λt) with λ = ln 2/T½; the nuclei of the fission and fusion
 * sketches have radii ∝ A^(1/3) (R = R₀A^(1/3)) and balance A and Z. Each
 * `check` recomputes what the figure and its caption state, reads the drawn
 * curves back, and measures that no label or tag touches a line it does not
 * name.
 */

const W = 340;
type P = [number, number];
const close = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) < tol;
const fmt = (n: number, d = 2) => String(+n.toFixed(d)).replace('-', '−');
const len = (a: P, b: P) => Math.hypot(b[0] - a[0], b[1] - a[1]);
const add = (a: P, b: P, k = 1): P => [a[0] + k * b[0], a[1] + k * b[1]];
const sub = (a: P, b: P): P => [a[0] - b[0], a[1] - b[1]];
const dotp = (a: P, b: P) => a[0] * b[0] + a[1] * b[1];
const unit = (a: P): P => { const l = Math.hypot(a[0], a[1]); return [a[0] / l, a[1] / l]; };
const samples = (a: number, b: number, n = 400) => Array.from({ length: n + 1 }, (_, i) => a + ((b - a) * i) / n);
const D2R = Math.PI / 180;
/** A point at maths angle `deg` (anticlockwise, y up) and distance R from c, on the y-down drawing. */
const polar = (c: P, R: number, deg: number): P => [c[0] + R * Math.cos(deg * D2R), c[1] - R * Math.sin(deg * D2R)];
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/* ---------- drawing helpers (as in physics-12-11.ts) ---------- */
type Stroke = { color?: string; w?: number; dash?: 'dash' | 'dot'; free?: boolean };
const dashOf = (d?: Stroke['dash']) => (d === 'dash' ? ' stroke-dasharray="6 4"' : d === 'dot' ? ' stroke-dasharray="1.5 3.5"' : '');

/**
 * Every line a label must keep clear of (outlines, curves, arrows), by sketch:
 * `clearance` measures each tag and label against them. Dotted guides are left
 * out (`free`).
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
/** A small arrowhead with its tip at p, pointing along the unit direction u. */
function head(s: Sketch, p: P, u: P, color: string = C.ink, L = 9, hw = 4.5) {
  const tri = headTri(p, u, L, hw);
  s.add(`<path d="M${tri.map((q) => `${r1(q[0])} ${r1(q[1])}`).join(' L')} Z" fill="${color}"/>`);
  keep(s, [...tri, tri[0]]);
  HEADS.set(s, [...(HEADS.get(s) ?? []), [p, add(p, u, -L / 2)]]);
  INKS.set(s, [...(INKS.get(s) ?? []), tri]);
}
/** An arrow from a to b, its head at b. */
function arrow(s: Sketch, a: P, b: P, o: { color?: string; w?: number; dash?: 'dash' | 'dot'; L?: number; hw?: number } = {}) {
  const u = unit(sub(b, a)), L = o.L ?? 9;
  path(s, [a, add(b, u, -L + 1)], { color: o.color, w: o.w ?? 1.8, dash: o.dash });
  head(s, b, u, o.color ?? C.ink, L, o.hw ?? 4.5);
}
/** A two-headed arrow from a to b (a span). */
function span(s: Sketch, a: P, b: P, o: { color?: string; w?: number; L?: number; hw?: number } = {}) {
  const u = unit(sub(b, a)), L = o.L ?? 8;
  path(s, [add(a, u, L - 1), add(b, u, -L + 1)], { color: o.color, w: o.w ?? 1.6 });
  head(s, b, u, o.color ?? C.ink, L, o.hw ?? 4);
  head(s, a, [-u[0], -u[1]], o.color ?? C.ink, L, o.hw ?? 4);
}
/** The points of an arc about c, radius R, from maths angle a0 to a1 (degrees). */
const arcPts = (c: P, R: number, a0: number, a1: number, n = 90): P[] => samples(a0, a1, n).map((a) => polar(c, R, a));
/** A ring (an atom, a nucleus, a nucleon): its outline, kept. */
const ring = (s: Sketch, c: P, R: number, o: Stroke = {}) => path(s, arcPts(c, R, 0, 360, Math.max(24, Math.round(R * 3))), o);
/**
 * A dotted guide, free of the clearance check (it only joins marks), but
 * never through a label or a tag. See `guideHits`.
 */
const GUIDES = new WeakMap<Sketch, [P, P][]>();
const guide = (s: Sketch, a: P, b: P, color: string = C.slate, dash: 'dot' | 'dash' = 'dot') => {
  GUIDES.set(s, [...(GUIDES.get(s) ?? []), [a, b]]);
  path(s, [a, b], { color, w: 1.1, dash, free: true });
};
/** Words in Onest (names on the drawing, as the book writes them), registered so tags and the checks keep clear of them. */
function words(s: Sketch, x: number, y: number, t: string, o: { size?: number; anchor?: 'start' | 'middle' | 'end'; color?: string } = {}) {
  const size = o.size ?? 12, anchor = o.anchor ?? 'middle', w = t.length * size * 0.56;
  const x0 = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w : x;
  s.labels.push({ text: t, rect: [x0, y - size * 0.75, x0 + w, y + size * 0.22] });
  s.add(`<text x="${r1(x)}" y="${r1(y)}" text-anchor="${anchor}" font-family="${F.tag}" font-size="${size}" fill="${o.color ?? C.text}">${esc(t)}</text>`);
}
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
/** And no tag's dot beside an arrowhead either: at least HEAD_CLEAR px of white between the dot (2.6 px) and the head's ink. */
const HEAD_CLEAR = 6;
const dotsClearOfHeads = (s: Sketch): Check => {
  const near = s.tags.filter((t) => t.from).map((t) => ({ name: t.name, gap: Math.min(Infinity, ...(INKS.get(s) ?? []).map((tri) => triDist(tri, t.from as P))) - 2.6 })).sort((a, b) => a.gap - b.gap);
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

/* ---------- graphs ---------- */
/** Where (0, 0) of the graph sits on the drawing, and how many px one unit is along each axis. */
type Frame = { ox: number; oy: number; sx: number; sy: number };
const gx = (f: Frame, u: number) => f.ox + u * f.sx;
const gy = (f: Frame, v: number) => f.oy - v * f.sy;
const gp = (f: Frame, u: number, v: number): P => [gx(f, u), gy(f, v)];
const uOf = (f: Frame, x: number) => (x - f.ox) / f.sx;
const vOf = (f: Frame, y: number) => (f.oy - y) / f.sy;
/** A tick's number: minus as U+2212. */
const tickTxt = (n: number, d = 0) => (n < 0 ? '−' : '') + Math.abs(n).toFixed(d);
/**
 * The graph's frame: the vertical axis at u = u0, the horizontal axis at
 * v = v0, both grey with arrowheads, ticks and their labels in slate (numbers,
 * or the html given). The axes are kept (labels keep clear of them).
 */
function frameAxes(s: Sketch, f: Frame, o: { u0: number; u1: number; v0: number; v1: number; uTicks: (number | [number, string])[]; vTicks: (number | [number, string])[]; size?: number }) {
  const xa = gx(f, o.u0), ya = gy(f, o.v0), xe = gx(f, o.u1), ye = gy(f, o.v1), size = o.size ?? 12;
  s.vec(xa, ya, xe, ya, { color: C.grey, w: 1.3 });
  s.vec(xa, ya, xa, ye, { color: C.grey, w: 1.3 });
  keep(s, [[xa, ya], [xe, ya]]);
  keep(s, [[xa, ya], [xa, ye]]);
  o.vTicks.forEach((t) => {
    const [v, html] = typeof t === 'number' ? [t, tickTxt(t)] : t;
    s.line(xa - 4, gy(f, v), xa, gy(f, v), { color: C.grey, w: 1.2 });
    s.sym(xa - 7, gy(f, v) + 4.5, html, { size, anchor: 'end', color: C.slate });
  });
  o.uTicks.forEach((t) => {
    const [u, html] = typeof t === 'number' ? [t, tickTxt(t)] : t;
    s.line(gx(f, u), ya, gx(f, u), ya + 4, { color: C.grey, w: 1.2 });
    s.sym(gx(f, u), ya + 17, html, { size, color: C.slate });
  });
}
/** A function drawn as a smooth line, sampled finely; returns the drawn points. */
function curve(s: Sketch, f: Frame, fn: (u: number) => number, u0: number, u1: number, o: Stroke = {}, n = 400): P[] {
  const pts = samples(u0, u1, n).map((u) => gp(f, u, fn(u)));
  path(s, pts, o);
  return pts;
}
/** The drawn curves of a sketch, by name, so a check can read them back. */
const CURVES = new WeakMap<Sketch, Record<string, P[]>>();
const keepCurve = (s: Sketch, name: string, pts: P[]) => CURVES.set(s, { ...(CURVES.get(s) ?? {}), [name]: pts });
/** A drawn curve read back at u: its value, interpolated between the two drawn points either side. */
function readAt(f: Frame, pts: P[], u: number): number {
  const x = gx(f, u);
  for (let i = 1; i < pts.length; i++) {
    const a = pts[i - 1], b = pts[i];
    if ((a[0] - x) * (b[0] - x) <= 0 && a[0] !== b[0]) return vOf(f, a[1] + ((b[1] - a[1]) * (x - a[0])) / (b[0] - a[0]));
  }
  return NaN;
}

/* ---------- nuclear data ---------- */
/** Masses in u (the book's, p. 819 and p. 826): proton, neutron, electron, hydrogen atom. */
const M_P = 1.007276, M_N = 1.008665, M_E = 0.000549, M_H = 1.007825;
/** Precise values (AME2020) for the binding-energy curve, and 1 u in MeV. */
const MH = 1.00782503, MN = 1.00866492, UMEV = 931.494;
/** Nuclear radius R = R₀A^(1/3), R₀ = 1.2 fm. */
const R0 = 1.2;
const radius = (A: number) => R0 * Math.cbrt(A);

/* ===================================================================== */
/* Figure 13.1 · the atom and its nucleus; the ²⁷Al nucleus (topic 01)    */
/* ===================================================================== */
const CAP131 = 'Scale comparison. Left: an atom (size ∼10<sup>−10</sup> m) with its nucleus (size ∼10<sup>−15</sup>–10<sup>−14</sup> m) as a tiny dot at the centre; the nucleus is about 1/100 000 to 1/10 000 of the atom’s size yet holds about 99.9% of its mass. Right: a schematic Al-27 nucleus, 13 protons and 14 neutrons packed closely together.';
/** The atom: its outline round the centre, the nucleus a dot (a marker: to scale it would be 10⁻⁵ to 10⁻⁴ of the radius). */
const G131a = { c: [170, 152] as P, R: 100, dot: 3.2 };
/**
 * The ²⁷Al nucleus as the book draws it: six rows of touching spheres in
 * hexagonal packing (3, 6, 5, 6, 5, 2 across, top to bottom), each row's
 * protons (P) and neutrons (N) in the book's order. A row's first sphere sits at
 * half-step `at` (in sphere radii) from the left; rows are r√3 apart.
 */
const G131b = {
  r: 15, x0: 95, y0: 70,
  rows: [
    { at: 3, kinds: 'NPN' },
    { at: 0, kinds: 'NNPNNP' },
    { at: 1, kinds: 'NPPNP' },
    { at: 0, kinds: 'PNPNPN' },
    { at: 1, kinds: 'NNPPN' },
    { at: 4, kinds: 'PP' },
  ],
  key: [[106, 250], [106, 280]] as P[], kr: 9,
};
/** Every nucleon's centre and kind. */
const nucleons131 = () => {
  const { r, x0, y0, rows } = G131b;
  return rows.flatMap((row, i) => [...row.kinds].map((k, j) => ({ c: [x0 + (row.at + 2 * j) * r, y0 + i * r * Math.sqrt(3)] as P, p: k === 'P' })));
};
/** A nucleon: a proton is a marigold ring with a plus, a neutron a plain ink ring. */
function nucleon(s: Sketch, c: P, r: number, proton: boolean) {
  ring(s, c, r - 1, { color: proton ? C.mari : C.ink, w: proton ? 2 : 1.6 });
  if (proton) {
    const k = r * 0.42;
    path(s, [[c[0] - k, c[1]], [c[0] + k, c[1]]], { color: C.amber, w: 1.6 });
    path(s, [[c[0], c[1] - k], [c[0], c[1] + k]], { color: C.amber, w: 1.6 });
  }
}
const fig131: Diagram = {
  id: 'p12-13-fig-13.1',
  topic: 0,
  name: 'Size of the nucleus',
  cases: [
    { chip: 'Left: the atom', part: 'atom', cap: CAP131 },
    { chip: 'Right: Al-27 nucleus', part: 'nucleus', cap: CAP131 },
  ],
  draw(c: { part: 'atom' | 'nucleus' }) {
    if (c.part === 'nucleus') {
      const s = new Sketch(W, 310);
      const { r, key, kr } = G131b;
      s.sym(W / 2, 30, 'Nucleus (<sup>27</sup>Al, schematic)', { size: 15 });
      nucleons131().forEach((n) => nucleon(s, n.c, r, n.p));
      nucleon(s, key[0], kr, true);
      nucleon(s, key[1], kr, false);
      s.sym(key[0][0] + 18, key[0][1] + 5, 'Proton (<i>Z</i> = 13)', { size: 14, anchor: 'start' });
      s.sym(key[1][0] + 18, key[1][1] + 5, 'Neutron (<i>N</i> = 14)', { size: 14, anchor: 'start' });
      return s;
    }
    const s = new Sketch(W, 372);
    const { c: o, R, dot } = G131a;
    s.sym(W / 2, 20, 'Atom: size ∼10<sup>−10</sup> m', { size: 15 });
    ring(s, o, R, { w: 1.7 });
    s.dot(o[0], o[1], dot, C.mari);
    s.sym(o[0], o[1] - 16, 'size ∼10<sup>−15</sup>–10<sup>−14</sup> m', { size: 14 });
    resultBlock(s, ['∼1/100 000 to 1/10 000', 'of the atom’s size,', 'yet ∼99.9% of its mass'], { size: 14 });
    s.place([
      { t: 'Nucleus', hi: true, p: o, at: [[o[0], o[1] + 40, 'middle'], [o[0], o[1] + 38, 'middle']] },
      { t: 'Electron cloud', ring: [o[0], o[1], R], at: [[4, 32, 'start'], [W - 4, 32, 'end']] },
    ]);
    return s;
  },
  check(c: { part: 'atom' | 'nucleus' }) {
    const s = fig131.draw(c);
    if (c.part === 'nucleus') {
      const ns = nucleons131(), { r } = G131b;
      const Z = ns.filter((n) => n.p).length, N = ns.length - Z;
      const gaps = ns.flatMap((a, i) => ns.slice(i + 1).map((b) => len(a.c, b.c)));
      const touching = ns.map((a) => ns.filter((b) => b !== a && close(len(a.c, b.c), 2 * r, 1e-9)).length);
      return [
        [`The drawn nucleus has ${Z} protons and ${N} neutrons: Z = 13 (aluminium), N = A − Z = 14, A = ${Z + N}`, Z === 13 && N === 14],
        [`Packed closely together: no two spheres overlap (closest centres ${fmt(Math.min(...gaps), 3)} px, 2r = ${2 * r} px) and every one touches at least ${Math.min(...touching)} others (hexagonal packing, rows r√3 apart)`, Math.min(...gaps) >= 2 * r - 1e-9 && Math.min(...touching) >= 2],
        [`Its size, for scale (worked example 1): R = R₀A^(1/3) = 1.2 × 27^(1/3) = ${fmt(radius(27), 2)} fm`, close(radius(27), 3.6, 1e-9)],
        ['The key marks a proton with a plus (a marigold ring) and a neutron with a plain ink ring, as in the drawing', true],
        ...layout(s),
      ];
    }
    const { R, dot } = G131a;
    const mAl = 26.98153853, nucAl = mAl - 13 * M_E;
    const worst = 1 - M_E / M_H;
    return [
      [`Nucleus to atom: 10⁻¹⁵ m / 10⁻¹⁰ m = 1/${fmt(1e-10 / 1e-15, 0)} and 10⁻¹⁴ m / 10⁻¹⁰ m = 1/${fmt(1e-10 / 1e-14, 0)}: about 1/100 000 to 1/10 000 of the atom’s size`, close(1e-10 / 1e-15, 1e5, 1e-6) && close(1e-10 / 1e-14, 1e4, 1e-6)],
      [`Nuclear sizes ∼10⁻¹⁵–10⁻¹⁴ m: diameters 2R₀A^(1/3) run from ${fmt(2 * radius(1), 1)} fm (A = 1) through ${fmt(2 * radius(27), 1)} fm (²⁷Al) to ${fmt(2 * radius(238), 1)} fm (²³⁸U)`, 2 * radius(1) >= 1 && 2 * radius(238) <= 20],
      [`Yet about 99.9% of its mass: for ²⁷Al the nucleus is ${fmt((100 * nucAl) / mAl, 3)}% of the atom (13 electrons, 13 × 0.000549 u, are the rest); even in hydrogen it is ${fmt(100 * worst, 3)}%`, nucAl / mAl > 0.999 && worst > 0.999],
      [`The nucleus is drawn as a dot at the centre, a marker only: to scale it would be ${fmt(2 * R * 1e-5, 3)} px across in this ${2 * R} px atom (the drawn dot is ${dot} px)`, dot / R < 0.05],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* Figure 13.2 · the mass defect (topic 01)                               */
/* ===================================================================== */
/**
 * Two bars, the separate nucleons on top and the assembled nucleus below,
 * shorter by the mass defect Δm. Schematic, as the book says: the gap is drawn
 * GAP px where ⁵⁶Fe's real 0.9% would be under 3 px.
 */
const G132 = { x0: 16, top: [74, 100] as [number, number], bot: [166, 192] as [number, number], x1: 304, gap: 46, yArr: 134 };
const FE56 = { Z: 26, N: 30, M: 55.934936 };
const fig132: Diagram = {
  id: 'p12-13-fig-13.2',
  topic: 0,
  name: 'Mass defect',
  cases: [{ chip: 'Mass defect', cap: 'Mass defect (schematic, not to scale). The assembled nucleus is lighter than its separate protons and neutrons by the mass defect Δ<i>m</i>, which is released as binding energy <i>E</i> = Δ<i>m c</i><sup>2</sup>.' }],
  draw() {
    const s = new Sketch(W, 352);
    const { x0, top, bot, x1, gap, yArr } = G132, x2 = x1 - gap;
    s.sym(x0, 38, 'Total mass of the separate', { size: 14, anchor: 'start' });
    s.sym(x0, 58, '<i>Z</i> protons + <i>N</i> neutrons', { size: 14, anchor: 'start' });
    outline(s, box([x0, top[0], x1, top[1]]), { w: 1.8 });
    outline(s, box([x0, bot[0], x2, bot[1]]), { w: 1.8 });
    s.sym(x0, bot[1] + 20, 'Mass of the assembled nucleus', { size: 14, anchor: 'start' });
    guide(s, [x2, top[1]], [x2, bot[0] - 2], C.slate, 'dot');
    guide(s, [x1, top[1]], [x1, bot[1]], C.slate, 'dot');
    span(s, [x2, yArr], [x1, yArr], { color: C.mari, w: 2.2 });
    s.sym((x1 + x2) / 2, yArr - 10, 'Δ<i>m</i>', { size: 16, color: C.amber });
    const foot = ['Not to scale: for <sup>56</sup>Fe the defect is Δ<i>m</i> = 0.528 u,', 'only about 0.9% of the 56.45 u of separate', 'nucleons.'];
    foot.forEach((t, i) => s.sym(x0, 240 + 16 * i, t, { size: 12, anchor: 'start', color: C.slate }));
    resultBlock(s, ['Released as binding energy', '<i>E</i> = Δ<i>m c</i><sup>2</sup>'], { size: 14 });
    s.place([{ t: 'Mass defect', hi: true, p: [(x1 + x2) / 2, yArr], at: [[x2 - 30, yArr + 4, 'end'], [x2 - 40, yArr + 4, 'end'], [x2 - 30, yArr - 8, 'end']] }]);
    return s;
  },
  check() {
    const s = fig132.draw(fig132.cases[0]);
    const { x0, x1, gap } = G132, x2 = x1 - gap;
    const { Z, N, M } = FE56;
    const separate = Z * M_P + N * M_N, nucleus = M - Z * M_E, dm = separate - nucleus;
    const viaAtoms = Z * M_H + N * M_N - M;
    return [
      [`The assembled nucleus’s bar is shorter than the separate nucleons’ by exactly the drawn Δm span (${fmt(x1 - x0, 1)} − ${fmt(x2 - x0, 1)} = ${gap} px)`, close(x1 - x2, gap)],
      [`⁵⁶Fe, the note’s numbers (the book’s m_p, m_n, m_e): 26 m_p + 30 m_n = ${fmt(separate, 4)} u (the 56.45 u), the nucleus ${fmt(M, 6)} − 26 m_e = ${fmt(nucleus, 4)} u, Δm = ${fmt(dm, 4)} u (the 0.528 u); with atomic masses, 26 m_H + 30 m_n − M = ${fmt(viaAtoms, 4)} u, the same`, fmt(separate, 2) === '56.45' && fmt(dm, 3) === '0.528' && Math.abs(viaAtoms - dm) < 1e-4],
      [`Only about 0.9%: Δm/(separate mass) = ${fmt((100 * dm) / separate, 3)}%`, Math.abs((100 * dm) / separate - 0.9) < 0.05],
      [`Not to scale, as the caption says: to scale the gap would be ${fmt(((x1 - x0) * dm) / separate, 1)} px; it is drawn ${gap} px`, gap > (5 * (x1 - x0) * dm) / separate],
      [`Released as binding energy E = Δm c²: ${fmt(dm, 4)} × 931.5 = ${fmt(dm * 931.5, 1)} MeV for ⁵⁶Fe, ${fmt((dm * 931.5) / 56, 2)} MeV per nucleon (the peak of Figure 13.3)`, Math.abs((dm * 931.5) / 56 - 8.79) < 0.01],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* Figure 13.3 · binding energy per nucleon (topic 02)                    */
/* ===================================================================== */
/**
 * The book's plotted nuclides (p. 827), with their measured atomic masses
 * (AME2020, u): E_b/A = (Z m_H + N m_n − M) × 931.494 MeV / A. For A = 3 the
 * book plots ³H (2.83 MeV).
 */
const NUC: { A: number; Z: number; M: number; name?: string }[] = [
  { A: 1, Z: 1, M: 1.00782503 },
  { A: 2, Z: 1, M: 2.01410178 },
  { A: 3, Z: 1, M: 3.01604928 },
  { A: 4, Z: 2, M: 4.00260325, name: 'He-4' },
  { A: 6, Z: 3, M: 6.01512289 },
  { A: 7, Z: 3, M: 7.01600344 },
  { A: 9, Z: 4, M: 9.01218307 },
  { A: 12, Z: 6, M: 12, name: 'C-12' },
  { A: 14, Z: 7, M: 14.00307401 },
  { A: 16, Z: 8, M: 15.99491462, name: 'O-16' },
  { A: 20, Z: 10, M: 19.99244018 },
  { A: 24, Z: 12, M: 23.9850417 },
  { A: 28, Z: 14, M: 27.97692653 },
  { A: 32, Z: 16, M: 31.97207117 },
  { A: 40, Z: 20, M: 39.96259086 },
  { A: 56, Z: 26, M: 55.93493633, name: 'Fe-56' },
  { A: 62, Z: 28, M: 61.92834537 },
  { A: 90, Z: 40, M: 89.90469876 },
  { A: 120, Z: 50, M: 119.90220163 },
  { A: 138, Z: 56, M: 137.905247 },
  { A: 208, Z: 82, M: 207.9766521 },
  { A: 238, Z: 92, M: 238.050787, name: 'U-238' },
];
const bPerA = (n: { A: number; Z: number; M: number }) => ((n.Z * MH + (n.A - n.Z) * MN - n.M) * UMEV) / n.A;
const BA = NUC.map((n) => ({ ...n, b: bPerA(n) }));
const baOf = (A: number) => BA.find((n) => n.A === A)!.b;
/**
 * Two views of the one curve: the whole of it to scale (A 0–240), and the
 * light end enlarged (A 0–20, also to scale), where at phone width the ten
 * nuclides up to A = 20 would otherwise crowd within 24 px of the axis.
 */
const F133: Record<'all' | 'light', Frame> = {
  all: { ox: 36, oy: 262, sx: 1.2, sy: 22 },
  light: { ox: 40, oy: 262, sx: 14, sy: 22 },
};
const CAP133 = 'The binding-energy-per-nucleon curve (measured values). <i>E</i><sub>b</sub>/<i>A</i> rises steeply through He-4 (unusually tightly bound), C-12 and O-16 to a broad maximum of about 8.8 MeV near <i>A</i> = 56 (Fe), then declines slowly to about 7.6 MeV at U-238. Fusion of light nuclei and fission of heavy nuclei both move towards the peak.';
/** The fusion and fission arrows of the whole view, in (A, E_b/A). */
const ARR133 = { fusion: [[14, 3.5], [52, 8.2]] as P[], fission: [[226, 6.6], [114, 7.95]] as P[] };
const fig133: Diagram = {
  id: 'p12-13-fig-13.3',
  topic: 1,
  name: 'Binding energy per nucleon',
  cases: [
    { chip: 'Whole curve', part: 'all', cap: CAP133 },
    { chip: 'Light nuclei', part: 'light', cap: CAP133 },
  ],
  draw(c: { part: 'all' | 'light' }) {
    const f = F133[c.part], light = c.part === 'light';
    const s = new Sketch(W, light ? 296 : 340);
    const Amax = light ? 20 : 240;
    const pts = BA.filter((n) => n.A <= Amax);
    frameAxes(s, f, {
      u0: 0, u1: light ? 21.6 : 247, v0: 0, v1: 9.9,
      uTicks: light ? [0, 4, 8, 12, 16, 20] : [0, 50, 100, 150, 200],
      vTicks: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    });
    s.sym(8, 24, '<i>E</i><sub>b</sub>/<i>A</i> (MeV per nucleon)', { size: 15, anchor: 'start' });
    s.sym(W - 4, f.oy - 9, 'Mass number <i>A</i>', { size: 15, anchor: 'end' });
    // the measured values, joined as the book joins them
    const line = pts.map((n) => gp(f, n.A, n.b));
    path(s, line, { w: 2.2 });
    keepCurve(s, 'ba', line);
    const named = new Set(light ? ['He-4', 'C-12', 'O-16'] : ['Fe-56', 'U-238']);
    pts.forEach((n) => {
      const [x, y] = gp(f, n.A, n.b);
      if (n.name && named.has(n.name)) s.dot(x, y, 3.6, (light ? n.name === 'He-4' : n.name === 'Fe-56') ? C.mari : C.ink);
      else if (light || n.A >= 20) s.dot(x, y, 2, C.ink);
    });
    if (light) {
      const he = gp(f, 4, baOf(4)), cc = gp(f, 12, baOf(12)), o = gp(f, 16, baOf(16));
      s.place([
        { t: 'He-4', hi: true, p: he, at: [[he[0] - 44, he[1] - 42, 'start'], [he[0] - 40, he[1] - 46, 'start'], [he[0] + 24, he[1] - 46, 'start']] },
        { t: 'C-12', p: cc, at: [[cc[0] - 4, cc[1] + 40, 'middle'], [cc[0] + 10, cc[1] + 44, 'middle']] },
        { t: 'O-16', p: o, at: [[o[0] + 6, o[1] + 40, 'middle'], [o[0] + 16, o[1] + 44, 'middle']] },
      ]);
      return s;
    }
    const [fu0, fu1] = ARR133.fusion.map(([A, b]) => gp(f, A, b));
    const [fi0, fi1] = ARR133.fission.map(([A, b]) => gp(f, A, b));
    arrow(s, fu0, fu1, { color: C.slate, w: 2, L: 10, hw: 5 });
    arrow(s, fi0, fi1, { color: C.slate, w: 2, L: 10, hw: 5 });
    resultBlock(s, ['Peak ≈ 8.8 MeV near <i>A</i> = 56'], { size: 14 });
    const fe = gp(f, 56, baOf(56)), u = gp(f, 238, baOf(238));
    s.place([
      { t: 'Fe-56 (peak)', hi: true, p: fe, at: [[fe[0], 36, 'middle'], [fe[0] + 10, 36, 'middle'], [fe[0] + 30, 34, 'start']] },
      { t: 'U-238', p: u, at: [[W - 4, u[1] - 40, 'end'], [W - 8, u[1] - 44, 'end']] },
      { t: 'Fusion: light nuclei combine', bare: true, p: add(fu0, sub(fu1, fu0), 0.3), at: [[fu0[0] + 20, fu0[1] + 6, 'start'], [fu0[0] + 24, fu0[1] + 10, 'start']] },
      { t: 'Fission: heavy nuclei split', bare: true, p: add(fi0, sub(fi1, fi0), 0.35), at: [[W - 8, fi0[1] + 18, 'end'], [W - 8, fi0[1] + 24, 'end']] },
    ]);
    return s;
  },
  check(c: { part: 'all' | 'light' }) {
    const s = fig133.draw(c), f = F133[c.part];
    const line = CURVES.get(s)?.ba ?? [];
    const back = line.map((p) => ({ A: Math.round(uOf(f, p[0])), b: vOf(f, p[1]) }));
    const drawnRight = back.every((p) => close(p.b, baOf(p.A), 1e-9));
    if (c.part === 'light') {
      const he = baOf(4), h3 = baOf(3), li6 = baOf(6);
      return [
        [`Every point plotted is E_b/A = (Z m_H + N m_n − M) × 931.494 MeV / A from the measured atomic mass, read back off the drawing: ${back.map((p) => `A = ${p.A}: ${fmt(p.b, 2)}`).join(', ')} MeV`, drawnRight && back.length === 11],
        [`He-4 is unusually tightly bound: ${fmt(he, 2)} MeV (the book’s 7.07, worked example 1), far above its neighbours ³H (${fmt(h3, 2)}) and ⁶Li (${fmt(li6, 2)})`, fmt(he, 2) === '7.07' && he > h3 + 3 && he > li6 + 1.5],
        [`The curve rises steeply through He-4, C-12 (${fmt(baOf(12), 2)}) and O-16 (${fmt(baOf(16), 2)}, the book’s 7.98, worked example 3): from ²H’s ${fmt(baOf(2), 2)} MeV (the book’s 1.11) it gains ${fmt((baOf(16) - baOf(2)) / 14, 2)} MeV per unit of A up to A = 16`, fmt(baOf(16), 2) === '7.98' && fmt(baOf(2), 2) === '1.11' && baOf(16) > baOf(12) && baOf(12) > he],
        ...layout(s),
      ];
    }
    const peak = BA.reduce((a, b) => (b.b > a.b ? b : a));
    const fe = baOf(56), u = baOf(238);
    /** The measured curve between its points, at any A. */
    const baAt = (A: number) => { const i = BA.findIndex((n) => n.A >= A); if (i <= 0) return BA[0].b; const a = BA[i - 1], b = BA[i]; return a.b + ((b.b - a.b) * (A - a.A)) / (b.A - a.A); };
    /** Every point of an arrow (in A, E_b/A) lies under the curve. */
    const under = (pts: P[]) => samples(0, 1, 60).every((k) => { const p = add(pts[0], sub(pts[1], pts[0]), k); return p[1] < baAt(p[0]); });
    return [
      [`Every point is E_b/A from the measured atomic masses, read back off the drawing (${back.length} nuclides from A = 1 to 238)`, drawnRight && back.length === BA.length],
      [`A broad maximum of about 8.8 MeV near A = 56: Fe-56 ${fmt(fe, 3)} MeV; the highest plotted point is A = ${peak.A} at ${fmt(peak.b, 3)} MeV (Ni-62 is ${fmt(peak.b - fe, 3)} MeV above Fe-56: the same peak to 0.1%)`, fmt(fe, 1) === '8.8' && peak.A >= 56 && peak.A <= 62 && peak.b - fe < 0.01],
      [`Then it declines slowly to about 7.6 MeV at U-238: ${fmt(u, 2)} MeV, a fall of ${fmt((fe - u) / (238 - 56), 4)} MeV per unit of A against the light side’s rise of ${fmt((baOf(16) - baOf(2)) / 14, 2)}`, fmt(u, 1) === '7.6' && (fe - u) / (238 - 56) < 0.01],
      [`The book’s values on the drawn curve: ${fmt(readAt(f, line, 120), 2)} MeV at A = 120 and the line passes ${fmt(readAt(f, line, 236), 2)} at A ≈ 236 (worked example 4’s 8.5 and 7.6)`, Math.abs(readAt(f, line, 120) - 8.5) < 0.01 && Math.abs(readAt(f, line, 236) - 7.6) < 0.05],
      [`Fusion moves light nuclei up the steep side towards the peak (its arrow points to larger A and E_b/A), fission moves heavy nuclei back towards it (to smaller A, larger E_b/A); both arrows stay under the curve`, ARR133.fusion[1][0] > ARR133.fusion[0][0] && ARR133.fusion[1][1] > ARR133.fusion[0][1] && ARR133.fission[1][0] < ARR133.fission[0][0] && ARR133.fission[1][1] > ARR133.fission[0][1] && under(ARR133.fusion as P[]) && under(ARR133.fission as P[])],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* Figure 13.4 · the nuclear potential energy U(r) (topic 02)             */
/* ===================================================================== */
/**
 * A Morse curve U = D[(1 − e^(−a(r − r₀)))² − 1]: depth D = 50 MeV (the book's)
 * with its minimum at r₀ = 0.8 fm (NCERT's value, adopted after the expert
 * review: the force −dU/dr is repulsive for r < r₀ and attractive for r > r₀).
 * a = ln 2/0.3 fm, so U = 0 at r = 0.5 fm.
 */
const G134 = { D: 50, rm: 0.8, rz: 0.5, r0: 0.3, r1: 5, top: 62 };
const AM = Math.log(2) / (G134.rm - G134.rz);
const U134 = (r: number) => G134.D * ((1 - Math.exp(-AM * (r - G134.rm))) ** 2 - 1);
/** Where the curve rises through U = top on the core side (bisection). */
const rTop = () => { let a = 0.05, b = G134.rz; for (let i = 0; i < 80; i++) { const m = (a + b) / 2; if (U134(m) > G134.top) a = m; else b = m; } return b; };
const F134: Frame = { ox: 52 - 0.3 * 56, oy: 160, sx: 56, sy: 1.75 };
/** The height of the attractive-region span, in MeV. */
const SPAN134 = 20;
const fig134: Diagram = {
  id: 'p12-13-fig-13.4',
  topic: 1,
  name: 'Nuclear potential energy',
  cases: [{ chip: 'U(r)', cap: 'Nuclear potential energy <i>U</i>(<i>r</i>) between two nucleons (schematic): <i>U</i> is least, about −50 MeV, at <i>r</i><sub>0</sub> ≈ 0.8 fm; the force is repulsive for <i>r</i> < 0.8 fm (the repulsive core) and attractive for <i>r</i> > 0.8 fm, and <i>U</i> → 0 beyond about 2–3 fm (short range).' }],
  draw() {
    const s = new Sketch(W, 320);
    const f = F134, { r0, r1, rm, D } = G134;
    frameAxes(s, f, { u0: r0, u1: 5.35, v0: -64, v1: 74, uTicks: [1, 2, 3, 4, 5], vTicks: [-60, -40, -20, 0, 20, 40, 60] });
    s.sym(8, 18, 'Potential energy <i>U</i>(<i>r</i>) (MeV)', { size: 15, anchor: 'start' });
    s.sym(gx(f, 3), gy(f, -64) + 38, 'Separation <i>r</i> (fm)', { size: 15 });
    // U = 0; r₀, where the force changes from repulsive to attractive; the end of the attractive span
    guide(s, gp(f, r0, 0), gp(f, r1, 0), C.faint, 'dash');
    guide(s, gp(f, rm, -62), gp(f, rm, 64), C.slate, 'dot');
    guide(s, gp(f, 2, -62), gp(f, 2, SPAN134), C.slate, 'dot');
    const pts = curve(s, f, U134, rTop(), r1, { w: 2.4 }, 600);
    keepCurve(s, 'U', pts);
    // the attractive force, from r₀ = 0.8 fm out to 2 fm, as a span
    span(s, gp(f, rm, SPAN134), gp(f, 2, SPAN134), { color: C.slate, w: 1.4 });
    const mn = gp(f, rm, -D);
    s.dot(mn[0], mn[1], 3.6, C.mari);
    const core = gp(f, rTop() + 0.025, U134(rTop() + 0.025));
    s.place([{ t: 'Repulsive core', p: core, at: [[gx(f, rm) + 6, gy(f, 70), 'start'], [gx(f, rm) + 8, gy(f, 68), 'start']] }]);
    const rectOf = (t: string): Rect => s.tags.find((g) => g.name === t)?.rect ?? [0, 0, 0, 0];
    const coreRect = rectOf('Repulsive core');
    s.sym(coreRect[2] + 8, coreRect[1] + 16, '<i>r</i> < 0.8 fm', { size: 14, anchor: 'start' });
    const wellAt: P = [gx(f, 2) + 8, mn[1] - 4];
    s.place([
      { t: 'Attractive region', p: gp(f, 1.4, SPAN134), at: [[gx(f, rm) + 8, gy(f, SPAN134) - 34, 'start'], [gx(f, rm) + 12, gy(f, SPAN134) - 36, 'start']] },
      { t: 'Well minimum', hi: true, p: mn, at: [[wellAt[0], wellAt[1], 'start'], [wellAt[0] + 4, wellAt[1], 'start']] },
      { t: 'Short range', p: gp(f, 3.5, U134(3.5)), at: [[W - 4, gy(f, 0) - 40, 'end'], [W - 8, gy(f, 0) - 44, 'end']] },
    ]);
    const well = rectOf('Well minimum');
    s.sym(well[0], well[1] - 12, '<i>r</i><sub>0</sub> ≈ 0.8 fm, <i>U</i> ≈ −50 MeV', { size: 14, anchor: 'start', color: C.amber });
    s.sym(gx(f, 2.3), gy(f, -14), '<i>U</i> → 0 for <i>r</i> ≳ 2–3 fm', { size: 14, anchor: 'start' });
    return s;
  },
  check() {
    const s = fig134.draw(fig134.cases[0]), f = F134, { D, rm, rz } = G134;
    const pts = CURVES.get(s)?.U ?? [];
    /** dU/dr; the force on a nucleon is F = −dU/dr (F > 0: pushed apart, repulsive). */
    const dU = (r: number) => (U134(r + 1e-6) - U134(r - 1e-6)) / 2e-6;
    const back = [0.6, 0.8, 1.5, 2, 3, 4].every((r) => close(readAt(f, pts, r), U134(r), 0.02));
    const minAt = pts.reduce((a, p) => (vOf(f, p[1]) < vOf(f, a[1]) ? p : a));
    const inner = samples(rTop(), rm - 0.005, 200), outer = samples(rm + 0.005, G134.r1, 400), band = samples(rm + 0.005, 2, 200);
    return [
      [`The drawn curve, read back, is the Morse curve U = D[(1 − e^(−a(r − 0.8 fm)))² − 1] with D = ${D} MeV, a = ln 2/0.3 fm = ${fmt(AM, 3)} fm⁻¹ (U = 0 at ${rz} fm)`, back && close(U134(rz), 0, 1e-9)],
      [`Repulsive for r < 0.8 fm: dU/dr < 0 at every r from ${fmt(rTop(), 2)} to 0.8 fm (${fmt(dU(0.6), 0)} MeV/fm at 0.6 fm), so the force −dU/dr pushes the nucleons apart; this is the repulsive core labelled r < 0.8 fm`, inner.every((r) => dU(r) < 0)],
      [`Attractive for r > 0.8 fm: dU/dr > 0 at every r from 0.8 to 5 fm (${fmt(dU(1.2), 0)} MeV/fm at 1.2 fm), so the force −dU/dr pulls the nucleons together`, outer.every((r) => dU(r) > 0)],
      [`The well is about 50 MeV deep with its minimum at r₀ ≈ 0.8 fm (NCERT’s value), where the force changes sign: the drawn minimum is at r = ${fmt(uOf(f, minAt[0]), 3)} fm, U = ${fmt(vOf(f, minAt[1]), 2)} MeV`, Math.abs(uOf(f, minAt[0]) - rm) < 0.01 && Math.abs(vOf(f, minAt[1]) + D) < 0.01 && rm === 0.8],
      [`U → 0 beyond about 2–3 fm (short range): U(2 fm) = ${fmt(U134(2), 1)} MeV, U(3 fm) = ${fmt(U134(3), 2)} MeV (${fmt((100 * Math.abs(U134(3))) / D, 1)}% of the depth), U(5 fm) = ${fmt(U134(5), 4)} MeV`, Math.abs(U134(3)) < 0.03 * D && Math.abs(U134(5)) < 0.02],
      [`The attractive-region span runs from r₀ = 0.8 fm to 2 fm, and the force is attractive all along it (dU/dr > 0), not merely U < 0`, band.every((r) => dU(r) > 0) && U134(2) > -0.25 * D],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* Figure 13.5 · the radioactive decay curve (topic 03)                   */
/* ===================================================================== */
/** Time in half-lives, N in units of N₀: N = e^(−λt) with λ = ln 2 per half-life. */
const N135 = (t: number) => Math.exp(-Math.LN2 * t);
const F135: Frame = { ox: 64, oy: 262, sx: 55, sy: 200 };
const T12 = '<i>T</i><sub>1/2</sub>';
const N0 = '<i>N</i><sub>0</sub>';
const fig135: Diagram = {
  id: 'p12-13-fig-13.5',
  topic: 2,
  name: 'Radioactive decay curve',
  cases: [{ chip: 'N against t', cap: `Radioactive decay curve. The number of undecayed nuclei falls from ${N0} to ${N0}/2 at <i>t</i> = ${T12}, ${N0}/4 at <i>t</i> = 2${T12} and ${N0}/8 at <i>t</i> = 3${T12}: each halving takes one half-life.` }],
  draw() {
    const s = new Sketch(W, 340);
    const f = F135;
    frameAxes(s, f, {
      u0: 0, u1: 4.35, v0: 0, v1: 1.13,
      uTicks: [0, [1, T12], [2, `2${T12}`], [3, `3${T12}`], [4, `4${T12}`]],
      vTicks: [[0, '0'], [0.125, `${N0}/8`], [0.25, `${N0}/4`], [0.5, `${N0}/2`], [1, N0]],
      size: 13,
    });
    s.sym(f.ox + 10, gy(f, 1.13) + 6, 'Number of undecayed nuclei <i>N</i>', { size: 15, anchor: 'start' });
    s.sym(W - 4, f.oy - 9, 'Time <i>t</i>', { size: 15, anchor: 'end' });
    // each half-life point, read off both axes
    [1, 2, 3].forEach((n) => {
      const q = gp(f, n, N135(n));
      guide(s, q, [q[0], f.oy], C.slate, 'dash');
      guide(s, q, [f.ox, q[1]], C.slate, 'dash');
    });
    const pts = curve(s, f, N135, 0, 4, { w: 2.4 }, 400);
    keepCurve(s, 'N', pts);
    s.dot(f.ox, gy(f, 1), 3.4);
    [1, 2, 3].forEach((n) => { const q = gp(f, n, N135(n)); s.dot(q[0], q[1], 3.8, C.mari); });
    // equal spacing: one half-life between the halvings
    const ya = gy(f, 0.8);
    span(s, [gx(f, 1) + 3, ya], [gx(f, 2) - 3, ya], { color: C.slate, w: 1.5 });
    span(s, [gx(f, 2) + 3, ya], [gx(f, 3) - 3, ya], { color: C.slate, w: 1.5 });
    s.sym(gx(f, 1.5), ya - 12, T12, { size: 14 });
    s.sym(gx(f, 2.5), ya - 12, T12, { size: 14 });
    s.sym(gx(f, 1) + 8, gy(f, 0.5) - 30, `after 1 ${T12}:`, { size: 14, anchor: 'start' });
    s.sym(gx(f, 1) + 8, gy(f, 0.5) - 13, `${N0}/2`, { size: 14, anchor: 'start' });
    s.sym(gx(f, 2) + 8, gy(f, 0.25) - 30, `after 2 ${T12}:`, { size: 14, anchor: 'start' });
    s.sym(gx(f, 2) + 8, gy(f, 0.25) - 13, `${N0}/4`, { size: 14, anchor: 'start' });
    s.sym(gx(f, 3) + 6, gy(f, 0.125) - 30, `after 3 ${T12}:`, { size: 14, anchor: 'start' });
    s.sym(gx(f, 3) + 6, gy(f, 0.125) - 13, `${N0}/8`, { size: 14, anchor: 'start' });
    resultBlock(s, [`Each halving takes one ${T12}`], { size: 14 });
    return s;
  },
  check() {
    const s = fig135.draw(fig135.cases[0]), f = F135;
    const pts = CURVES.get(s)?.N ?? [];
    const halves = samples(0, 3, 30).map((t) => readAt(f, pts, t + 1) / readAt(f, pts, t));
    // worked example 1 (p. 837): 80 g, T½ = 10 days, after 30 days
    const left = 80 * N135(30 / 10);
    return [
      [`The drawn curve starts at N₀ (${fmt(readAt(f, pts, 0), 6)} N₀ at t = 0) and is N₀e^(−λt) with λ = ln 2/T½ = ${fmt(Math.LN2, 4)} per half-life`, close(readAt(f, pts, 0), 1, 1e-9)],
      [`Read back at t = T½, 2T½, 3T½: ${[1, 2, 3].map((n) => `${fmt(readAt(f, pts, n), 4)} N₀`).join(', ')}: N₀/2, N₀/4, N₀/8`, [1, 2, 3].every((n) => close(readAt(f, pts, n), 1 / 2 ** n, 1e-6))],
      [`Each halving takes one half-life, wherever it starts: N(t + T½)/N(t) read back at 31 times from 0 to 3T½ is ${fmt(Math.min(...halves), 5)} to ${fmt(Math.max(...halves), 5)}`, halves.every((k) => close(k, 0.5, 1e-4))],
      [`The equal-spacing spans each run exactly one T½ (${f.sx} px) between the marked points, and those points sit on the curve`, [1, 2, 3].every((n) => close(readAt(f, pts, n), N135(n), 1e-6))],
      [`Worked example 1: 80 g after 30 days with T½ = 10 days is 80/2³ = ${fmt(left, 6)} g (the book’s 10 g)`, close(left, 10, 1e-9)],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* Figure 13.6 · fission and fusion (topic 04)                            */
/* ===================================================================== */
const CAP136 = 'Nuclear fission and fusion. Left: a slow neutron splits a U-235 nucleus into two medium-mass fragments (here Ba-141 and Kr-92), 3 neutrons and about 200 MeV of energy. Right: deuterium and tritium overcome their Coulomb repulsion and merge into He-4 and a neutron, releasing about 17.6 MeV.';
/** A nucleus as drawn: centre, mass number, atomic number, symbol. Radius = k·A^(1/3) px (R = R₀A^(1/3)). */
type Nuc = { c: P; A: number; Z: number; sym: string };
const G136f = {
  k: 6.5, kn: 5,
  n0: [22, 84] as P,
  U: { c: [96, 84], A: 235, Z: 92, sym: 'U' } as Nuc,
  Ba: { c: [214, 38], A: 141, Z: 56, sym: 'Ba' } as Nuc,
  Kr: { c: [214, 138], A: 92, Z: 36, sym: 'Kr' } as Nuc,
  ns: [[268, 68], [272, 88], [268, 108]] as P[],
  out: [[300, 52], [312, 88], [300, 124]] as P[],
};
const G136u = {
  k: 16,
  D: { c: [52, 90], A: 2, Z: 1, sym: 'H' } as Nuc,
  T: { c: [286, 90], A: 3, Z: 1, sym: 'H' } as Nuc,
  He: { c: [116, 186], A: 4, Z: 2, sym: 'He' } as Nuc,
  n: [232, 186] as P,
  bar: [170, 70, 110] as [number, number, number],
};
const rN = (k: number, A: number) => k * Math.cbrt(A);
const nuclide = (n: Nuc) => `<sup>${n.A}</sup><sub>${n.Z}</sub>${n.sym}`;
function nucleus(s: Sketch, n: Nuc, k: number, o: Stroke = {}) {
  ring(s, n.c, rN(k, n.A), { w: 1.9, ...o });
  s.sym(n.c[0] + 2, n.c[1] + 5, nuclide(n), { size: 14 });
}
const fig136: Diagram = {
  id: 'p12-13-fig-13.6',
  topic: 3,
  name: 'Fission and fusion',
  cases: [
    { chip: 'Left: fission', part: 'fission', cap: CAP136 },
    { chip: 'Right: fusion', part: 'fusion', cap: CAP136 },
  ],
  draw(c: { part: 'fission' | 'fusion' }) {
    const s = new Sketch(W, c.part === 'fission' ? 262 : 322);
    if (c.part === 'fission') {
      const { k, kn, n0, U, Ba, Kr, ns, out } = G136f;
      ring(s, n0, kn, { color: C.mari, w: 2.2 });
      s.point(n0[0], n0[1], 0.1, '');
      arrow(s, [n0[0] + kn + 4, n0[1]], [U.c[0] - rN(k, U.A) - 5, U.c[1]], { color: C.slate, w: 1.6, L: 8, hw: 4 });
      nucleus(s, U, k);
      arrow(s, [U.c[0] + rN(k, U.A) + 6, U.c[1]], [U.c[0] + rN(k, U.A) + 40, U.c[1]], { color: C.slate, w: 1.6, L: 8, hw: 4 });
      nucleus(s, Ba, k);
      nucleus(s, Kr, k);
      ns.forEach((p, i) => {
        ring(s, p, kn, { w: 1.8 });
        s.point(p[0], p[1], 0.1, '');
        arrow(s, add(p, unit(sub(out[i], p)), kn + 3), out[i], { color: C.slate, w: 1.4, L: 7, hw: 3.5 });
      });
      s.sym(318, 93, '3 n', { size: 14, anchor: 'start' });
      s.text(W / 2, 198, `n + ${nuclide(U)} → ${nuclide(Ba)} + ${nuclide(Kr)} + 3 n`, { size: 14 });
      s.labels.push({ text: 'equation', rect: [W / 2 - 120, 184, W / 2 + 120, 202] });
      resultBlock(s, ['Energy released ∼200 MeV'], { size: 14 });
      s.place([{ t: 'Slow neutron', hi: true, ring: [n0[0], n0[1], kn], at: [[6, n0[1] + 50, 'start'], [6, n0[1] + 56, 'start']] }]);
      return s;
    }
    const { k, D, T, He, n, bar } = G136u;
    nucleus(s, D, k);
    nucleus(s, T, k);
    arrow(s, [D.c[0] + rN(k, 2) + 5, D.c[1]], [bar[0] - 14, D.c[1]], { w: 1.8, L: 9, hw: 4.5 });
    arrow(s, [T.c[0] - rN(k, 3) - 5, T.c[1]], [bar[0] + 14, T.c[1]], { w: 1.8, L: 9, hw: 4.5 });
    // the Coulomb barrier between them
    path(s, [[bar[0], bar[1]], [bar[0], bar[2]]], { color: C.mari, w: 2.4, dash: 'dash' });
    arrow(s, [bar[0], bar[2] + 10], [bar[0], bar[2] + 44], { color: C.slate, w: 1.6, L: 8, hw: 4 });
    words(s, bar[0] + 10, bar[2] + 32, 'merge', { size: 12, anchor: 'start', color: C.slate });
    nucleus(s, He, k);
    ring(s, n, rN(k, 1), { w: 1.9 });
    s.point(n[0], n[1], 0.1, '');
    arrow(s, [n[0] + rN(k, 1) + 5, n[1]], [n[0] + rN(k, 1) + 52, n[1]], { color: C.slate, w: 1.6, L: 8, hw: 4 });
    s.text(W / 2, 260, `${nuclide(D)} + ${nuclide(T)} → ${nuclide(He)} + n`, { size: 14 });
    s.labels.push({ text: 'equation', rect: [W / 2 - 80, 246, W / 2 + 80, 264] });
    resultBlock(s, ['Energy released ∼17.6 MeV'], { size: 14 });
    s.place([
      { t: 'Coulomb repulsion barrier to overcome', hi: true, p: [bar[0], bar[1] + 2], at: [[W / 2, 12, 'middle'], [W / 2, 8, 'middle']] },
      { t: 'Deuterium', ring: [D.c[0], D.c[1], rN(k, 2)], at: [[D.c[0] - 8, D.c[1] + 36, 'start'], [D.c[0] - 26, D.c[1] + 38, 'start']] },
      { t: 'Tritium', ring: [T.c[0], T.c[1], rN(k, 3)], at: [[T.c[0] + 10, T.c[1] + 38, 'end'], [T.c[0] + 30, T.c[1] + 40, 'end']] },
      { t: 'Neutron', ring: [n[0], n[1], rN(k, 1)], at: [[n[0], n[1] + 28, 'middle'], [n[0] + 6, n[1] + 30, 'middle']] },
    ]);
    return s;
  },
  check(c: { part: 'fission' | 'fusion' }) {
    const s = fig136.draw(c);
    if (c.part === 'fission') {
      const { k, U, Ba, Kr, ns } = G136f;
      const rr = (n: Nuc) => rN(k, n.A) / rN(k, U.A);
      // the book's own estimate (Topic 04, Section 1): fragments near 8.5 MeV per nucleon, uranium 7.6, about 236 nucleons
      const est = 236 * (8.5 - 7.6);
      // Topic 02, worked example 4: A = 240 at 7.6 MeV splitting into 2 × 120 at 8.5 MeV
      const ex4 = 2 * 120 * 8.5 - 240 * 7.6;
      return [
        [`A balances: 1 + ${U.A} = ${Ba.A} + ${Kr.A} + 3 × 1 = ${Ba.A + Kr.A + 3}; Z balances: 0 + ${U.Z} = ${Ba.Z} + ${Kr.Z} + 0`, 1 + U.A === Ba.A + Kr.A + 3 && U.Z === Ba.Z + Kr.Z],
        [`Two medium-mass fragments and ${ns.length} neutrons drawn; radii ∝ A^(1/3) (R = R₀A^(1/3)): Ba and Kr are ${fmt(rr(Ba), 3)} and ${fmt(rr(Kr), 3)} of U’s radius (${fmt(Math.cbrt(Ba.A / U.A), 3)}, ${fmt(Math.cbrt(Kr.A / U.A), 3)})`, ns.length === 3 && close(rr(Ba), Math.cbrt(Ba.A / U.A)) && close(rr(Kr), Math.cbrt(Kr.A / U.A)) && Ba.A > 60 && Kr.A > 60],
        [`About 200 MeV: the fragments sit near 8.5 MeV per nucleon, uranium near 7.6, so ∼236 × 0.9 = ${fmt(est, 0)} MeV (Topic 02’s worked example 4 gives ${fmt(ex4, 0)} MeV)`, Math.abs(est - 200) < 25 && Math.abs(ex4 - 216) < 1e-9],
        ['The incoming neutron comes in from the left onto U-235 and the products leave to the right', G136f.n0[0] < U.c[0] && Ba.c[0] > U.c[0] && Kr.c[0] > U.c[0] && ns.every((p) => p[0] > U.c[0])],
        ...layout(s),
      ];
    }
    const { k, D, T, He, bar } = G136u;
    const Q = (2.014102 + 3.016049 - 4.002603 - 1.008665) * 931.5;
    const touch = radius(2) + radius(3), barrier = 1.44 / touch, kT = 8.617e-5 * 1e7 / 1e6;
    return [
      [`A balances: 2 + 3 = 4 + 1; Z balances: 1 + 1 = 2 + 0`, D.A + T.A === He.A + 1 && D.Z + T.Z === He.Z],
      [`Q = (2.014102 + 3.016049 − 4.002603 − 1.008665) u × 931.5 MeV/u = ${fmt(Q, 2)} MeV: about 17.6 MeV (Topic 04, worked example 3)`, fmt(Q, 1) === '17.6'],
      [`The two arrows point at each other across the barrier (deuterium moves right, tritium left); radii ∝ A^(1/3): ${fmt(rN(k, 2), 1)}, ${fmt(rN(k, 3), 1)}, ${fmt(rN(k, 4), 1)} px for A = 2, 3, 4`, D.c[0] < bar[0] && T.c[0] > bar[0] && close(rN(k, 3) / rN(k, 2), Math.cbrt(1.5))],
      [`The Coulomb barrier they must overcome: at touching, r = R₀(2^(1/3) + 3^(1/3)) = ${fmt(touch, 2)} fm, e²/(4πε₀r) = ${fmt(barrier, 2)} MeV, far above kT = ${fmt(kT * 1e3, 2)} keV even at 10⁷ K: hence thermonuclear temperatures`, barrier > 100 * kT],
      ...layout(s),
    ];
  },
};

/** Physics 12 Ch 13 (Nuclei): Figures 13.1–13.6 (Topics 01–04; the Additional topics and the rest of the pages have no drawing). */
export const DIAGRAMS_PHYSICS_12_13: Diagram[] = [fig131, fig132, fig133, fig134, fig135, fig136];
