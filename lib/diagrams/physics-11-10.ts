import { C, LABEL_GAP, Rect, Sketch, r1, mathW } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * PHYSICS CLASS 11, CHAPTER 10 (Thermal Properties of Matter): every figure of
 * the Master Reference book, redrawn. The chapter's drawings are its six
 * numbered figures, each printed on a "CHAPTER 10 · FIGURES" page (Figure 10.1
 * on p. 680, 10.2 on p. 688, 10.3 on p. 696, 10.4 on p. 699, 10.5 on p. 706,
 * 10.6 on p. 721; the first copy of each caption sits a page earlier, where the
 * text refers to it). It has no unnumbered drawings: pp. 675–739 were checked
 * page by page, Additional Topics A–D included (the rest is text, typeset
 * equations, boxed answers and two tables, pp. 687 and 714).
 *
 * Every figure is computed from the physics with the book's own values, never
 * placed by eye: the cube's twelve edges from its 3-D corners, the heating
 * curve's legs from Q = mcΔT and Q = mL, the junction temperature from equal
 * heat currents (checked with Example 3's rods), the freezing pond's heat flow
 * from the 0 °C boundary to the −10 °C air (its slowing growth checked with
 * Fourier's law and Example 4's numbers), the cooling curve as the
 * exponential T₀ + (T − T₀)e^(−kt) that the book plotted (with its two
 * tangents), and the phase diagram from the Clausius–Clapeyron relation through
 * the triple point, 1 atm and the critical point. Each `check` turns the drawn
 * pixels back into physics and recomputes what the figure and caption state.
 */

const W = 340;
type P = [number, number];
const D2R = Math.PI / 180;
const close = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) < tol;
const fmt = (n: number, d = 2) => String(+n.toFixed(d)).replace('-', '−');
const len = (a: P, b: P) => Math.hypot(b[0] - a[0], b[1] - a[1]);
const samples = (a: number, b: number, n = 400) => Array.from({ length: n + 1 }, (_, i) => a + ((b - a) * i) / n);

/* ---------- drawing helpers ---------- */
type Stroke = { color?: string; w?: number; dash?: 'dash' | 'dot'; free?: boolean };
const dashOf = (d?: Stroke['dash']) => (d === 'dash' ? ' stroke-dasharray="6 4"' : d === 'dot' ? ' stroke-dasharray="1.5 3.5"' : '');

/**
 * Every line a label must keep clear of (outlines, curves, arrows), by sketch:
 * `clearance` measures each tag and label against them. Axes and the dotted
 * guides that run from a tick are left out (`free`): their tick values sit on them.
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
/** An arrow (a heat flow, a direction) that labels keep clear of. */
function arrow(s: Sketch, a: P, b: P, o: { color?: string; w?: number } = {}) {
  s.vec(a[0], a[1], b[0], b[1], o);
  keep(s, [a, b]);
}
/** A measured length with an arrowhead at each end. */
function measure(s: Sketch, a: P, b: P, color: string = C.slate) {
  const m: P = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
  arrow(s, m, a, { color, w: 1.3 });
  arrow(s, m, b, { color, w: 1.3 });
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
  const n = 160, pts: P[] = [];
  for (let i = 0; i <= n; i++) { const u = u0 + ((u1 - u0) * i) / n; pts.push(at(f, u, fn(u))); }
  path(s, pts, o);
  return pts;
}
type Tick = [number, string];
function vTicks(s: Sketch, f: Frame, axisX: number, ticks: Tick[]) {
  ticks.forEach(([v, txt]) => {
    s.line(axisX - 4, Y(f, v), axisX, Y(f, v), { color: C.grey, w: 1.2 });
    s.sym(axisX - 7, Y(f, v) + 4.5, txt, { size: 12.5, anchor: 'end', color: C.slate });
  });
}
function hTicks(s: Sketch, f: Frame, axisY: number, ticks: Tick[]) {
  ticks.forEach(([u, txt]) => {
    s.line(X(f, u), axisY, X(f, u), axisY + 4, { color: C.grey, w: 1.2 });
    s.sym(X(f, u), axisY + 17, txt, { size: 12.5, color: C.slate });
  });
}

/* ===================================================================== */
/* Figure 10.1 · thermal expansion of a cube (topic 01)                   */
/* ===================================================================== */
/**
 * The cube in 3-D, edge L₀ = 1, drawn in oblique projection: x to the right,
 * y up, z (depth) back at `th` degrees, shortened by `kd`; `s` px per unit.
 * `a` = αΔT, exaggerated (the book's own drawing grows each edge by about
 * a sixth) so that the growth can be seen; the corner at the origin is shared.
 */
const F101 = { o: [56, 228] as P, s: 118, kd: 0.45, th: 38, a: 0.16 };
type V3 = [number, number, number];
const proj = ([x, y, z]: V3): P => {
  const { o, s, kd, th } = F101;
  return [o[0] + s * (x + z * kd * Math.cos(th * D2R)), o[1] - s * (y + z * kd * Math.sin(th * D2R))];
};
/** The cube [0, L]³: its 12 edges as pairs of corners that differ in one coordinate. */
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
/** A drawn segment's length turned back into 3-D units, for a segment along axis `ax`. */
const unproject = (a: P, b: P, ax: number) => len(a, b) / (F101.s * (ax === 2 ? F101.kd : 1));
const L101 = 1 + F101.a;
/** The three ΔL marks, one along each direction, on edges of the expanded cube beyond the solid one. */
const marks101 = (): [V3, V3, number][] => [
  [[0, 1, 0], [0, L101, 0], 1],
  [[1, 0, 0], [L101, 0, 0], 0],
  [[L101, 0, 1], [L101, 0, L101], 2],
];
/** The direction arrows: from the middle of a solid face, outward along x, y and z. */
const arrows101 = (): [V3, V3][] => [
  [[0.5, 1, 0.5], [0.5, 1.2, 0.5]],
  [[1, 0.5, 0.5], [1.2, 0.5, 0.5]],
  [[0.5, 0.5, 1], [0.5, 0.5, 1.35]],
];
const fig101: Diagram = {
  id: 'p11-10-fig-10.1',
  topic: 0,
  name: 'Thermal expansion of a cube',
  cases: [{ chip: 'Expanding cube', cap: 'Thermal expansion of a cube: the solid cube of side <i>L</i><sub>0</sub> at <i>T</i><sub>0</sub> and, dashed, the expanded cube of side <i>L</i> = <i>L</i><sub>0</sub>(1 + <i>α</i>Δ<i>T</i>) sharing one corner; each edge grows longer by Δ<i>L</i> = <i>αL</i><sub>0</sub>Δ<i>T</i>.' }],
  draw() {
    const s = new Sketch(W, 300);
    cubeEdges(L101).forEach(([a, b]) => path(s, [proj(a), proj(b)], { color: C.slate, w: 1.5, dash: 'dash' }));
    cubeEdges(1).forEach(([a, b]) => path(s, [proj(a), proj(b)], { w: 2 }));
    marks101().forEach(([a, b]) => path(s, [proj(a), proj(b)], { color: C.mari, w: 4.2 }));
    arrows101().forEach(([a, b]) => arrow(s, proj(a), proj(b), { color: C.grey, w: 1.6 }));
    const o = proj([0, 0, 0]);
    s.dot(o[0], o[1], 3.6);
    const [mY, mX, mZ] = marks101().map(([a, b]) => [proj(a), proj(b)] as [P, P]);
    s.sym(mY[0][0] - 8, (mY[0][1] + mY[1][1]) / 2 + 5, 'Δ<i>L</i>', { size: 15, anchor: 'end', color: C.amber });
    s.sym((mX[0][0] + mX[1][0]) / 2 + 10, mX[0][1] + 38, 'Δ<i>L</i> = <i>αL</i><sub>0</sub>Δ<i>T</i>', { size: 15, color: C.amber });
    s.sym(mZ[1][0] + 8, mZ[1][1] + 12, 'Δ<i>L</i>', { size: 15, anchor: 'start', color: C.amber });
    const lft = proj([0, 0.5, 0]);
    s.sym(lft[0] - 8, lft[1] + 5, '<i>L</i><sub>0</sub>', { size: 15, anchor: 'end' });
    const bot = proj([0.5, 0, 0]);
    s.sym(bot[0], bot[1] + 20, '<i>L</i><sub>0</sub> at <i>T</i><sub>0</sub>', { size: 15 });
    const topE = proj([L101 / 2, L101, L101]);
    s.sym(topE[0], topE[1] - 10, '<i>L</i> = <i>L</i><sub>0</sub>(1 + <i>α</i>Δ<i>T</i>)', { size: 15 });
    s.place([
      { t: 'Each edge grows', hi: true, p: mY[1], at: [[6, 6, 'start'], [6, 4, 'start']] },
      { t: 'Expanded cube', p: proj([L101, L101 * 0.85, L101]), at: [[W - 4, 4, 'end'], [W - 4, 2, 'end']] },
      { t: 'Solid cube', p: proj([1, 0.8, 1]), at: [[W - 4, 110, 'end'], [W - 4, 120, 'end']] },
      { t: 'Shared corner', p: o, own: o, at: [[6, 270, 'start'], [6, 274, 'start']] },
    ]);
    return s;
  },
  check() {
    const { a } = F101;
    const solid = cubeEdges(1).map(([p, q, ax]) => unproject(proj(p), proj(q), ax));
    const big = cubeEdges(L101).map(([p, q, ax]) => unproject(proj(p), proj(q), ax));
    const dl = marks101().map(([p, q, ax]) => unproject(proj(p), proj(q), ax));
    const corners = (L: number) => cubeEdges(L).flatMap(([p, q]) => [p, q]).map((v) => proj(v));
    const common = corners(1).filter((p) => corners(L101).some((q) => close(len(p, q), 0, 1e-9)));
    const shared = common.length > 0 && common.every((p) => close(len(p, proj([0, 0, 0])), 0, 1e-9));
    const outward = arrows101().map(([p, q]) => q.map((c, k) => c - p[k]));
    const alpha = 1.2e-5, dT = 30, g = (1 + alpha * dT) ** 3 - 1;
    return [
      [`All 12 edges of the solid cube are L₀ = 1: ${solid.map((e) => fmt(e, 6)).filter((v, i, x) => x.indexOf(v) === i).join(', ')}`, solid.length === 12 && solid.every((e) => close(e, 1, 1e-9))],
      [`All 12 dashed edges are L = L₀(1 + αΔT) = ${fmt(L101, 3)} (αΔT = ${a}, exaggerated to be seen), depth edges included`, big.length === 12 && big.every((e) => close(e, L101, 1e-9))],
      ['The two cubes share one corner, and only one: the origin is the only point that is a corner of both', shared],
      [`Each ΔL mark, read back from the drawing, is ${dl.map((d) => fmt(d, 4)).join(', ')} = αL₀ΔT = L − L₀ = ${fmt(a, 4)}: one along x, one along y, one along z (every edge grows)`, dl.every((d) => close(d, a, 1e-9)) && close(L101 - 1, a) && new Set(marks101().map((m) => m[2])).size === 3],
      ['Each mark runs from the solid cube\'s edge end (L₀) to the expanded cube\'s (L) along one edge', marks101().every(([p, q, ax]) => close(p[ax], 1) && close(q[ax], L101) && [0, 1, 2].every((k) => k === ax || close(p[k], q[k])))],
      ['The grey arrows point outward along +x, +y and +z: the cube grows in all three directions', outward.every((d, i) => d[[1, 0, 2][i]] > 0 && d.filter((c) => c !== 0).length === 1)],
      [`So the volume grows by (1 + αΔT)³ ≈ 1 + 3αΔT (γ = 3α): steel, ΔT = 30 °C: ${(g * 1e3).toFixed(4)} × 10⁻³ vs 3αΔT = ${(3 * alpha * dT * 1e3).toFixed(4)} × 10⁻³`, Math.abs(g - 3 * alpha * dT) / (3 * alpha * dT) < 1e-3],
      clearCheck(fig101.draw(fig101.cases[0])),
    ];
  },
};

/* ===================================================================== */
/* Figure 10.2 · heating curve of 1 kg of ice (topic 02)                  */
/* ===================================================================== */
/** The book's values (Section 2's table): m = 1 kg; c in J kg⁻¹ K⁻¹, L in J kg⁻¹; −10 °C ice to 110 °C steam. */
const HC = { m: 1, cIce: 2100, cW: 4186, cSt: 2010, Lf: 3.36e5, Lv: 2.26e6, T0: -10, T3: 110 };
/** The five legs, in kJ, and the temperature at the end of each. */
const legs102 = () => {
  const { m, cIce, cW, cSt, Lf, Lv, T0, T3 } = HC;
  const Q = [m * cIce * (0 - T0), m * Lf, m * cW * (100 - 0), m * Lv, m * cSt * (T3 - 100)].map((q) => q / 1000);
  return { Q, T: [T0, 0, 0, 100, 100, T3] };
};
/** The curve's corners (Q in kJ from the start, T in °C). */
const corners102 = (): [number, number][] => {
  const { Q, T } = legs102();
  let q = 0;
  return T.map((t, i) => { if (i) q += Q[i - 1]; return [q, t]; });
};
/** Axis x = 40; the curve starts 12 px right of it (Q = 0) and its total spans 270 px. */
const AX102 = 40;
const F102: Frame = { ox: AX102 + 12, oy: 280, sx: 270 / legs102().Q.reduce((a, b) => a + b, 0), sy: 1.75 };
const fig102: Diagram = {
  id: 'p11-10-fig-10.2',
  topic: 1,
  name: 'Heating curve of ice to steam',
  cases: [{ chip: 'Heating curve', cap: 'Heating curve for 1 kg of ice at −10 °C warmed to steam: rising legs where <i>Q</i> = <i>mc</i>Δ<i>T</i> and flat plateaus at 0 °C (melting, 336 kJ absorbed) and 100 °C (boiling, 2260 kJ absorbed — the long plateau).' }],
  draw() {
    const s = new Sketch(W, 366);
    const f = F102, cs = corners102().map(([q, t]) => at(f, q, t));
    s.vec(AX102, Y(f, -22), AX102, Y(f, 128), { color: C.grey, w: 1.3 });
    s.vec(AX102, f.oy, W - 8, f.oy, { color: C.grey, w: 1.3 });
    s.sym(AX102 + 8, Y(f, 128) + 6, '<i>T</i> (°C)', { size: 14, anchor: 'start' });
    s.sym(W - 8, f.oy - 9, 'heat supplied <i>Q</i>', { size: 14, anchor: 'end' });
    vTicks(s, f, AX102, [[-10, '−10'], [0, '0'], [100, '100']]);
    path(s, [[AX102, Y(f, 100)], [cs[3][0], Y(f, 100)]], { color: C.slate, w: 1, dash: 'dot', free: true });
    path(s, [[AX102, Y(f, -10)], [cs[0][0], Y(f, -10)]], { color: C.slate, w: 1, dash: 'dot', free: true });
    path(s, cs, { w: 2.4 });
    path(s, [cs[3], cs[4]], { color: C.mari, w: 3 });
    // what each leg is: its Q, in STIX, under its tag
    s.sym(W - 8, 24, '<i>Q</i><sub>5</sub> = <i>mc</i><sub>st</sub> Δ<i>T</i>  (20 kJ)', { size: 13, anchor: 'end' });
    s.sym(228, 168, '<i>Q</i><sub>4</sub> = <i>mL</i><sub><i>v</i></sub>  (2260 kJ)', { size: 13, color: C.amber });
    s.sym(150, 236, '<i>Q</i><sub>3</sub> = <i>mc</i><sub><i>w</i></sub> Δ<i>T</i>  (419 kJ)', { size: 13, anchor: 'start' });
    s.sym(170, 352, '<i>Q</i><sub>1</sub> = <i>mc</i><sub>ice</sub> Δ<i>T</i>  (21 kJ)', { size: 13, anchor: 'start' });
    s.sym(208, 322, '<i>Q</i><sub>2</sub> = <i>mL</i><sub><i>f</i></sub>  (336 kJ)', { size: 13, anchor: 'start' });
    s.sym(AX102 + 14, 24, 'drawn to scale:', { size: 12.5, anchor: 'start', color: C.slate });
    s.sym(AX102 + 14, 40, 'each leg’s length is its heat', { size: 12.5, anchor: 'start', color: C.slate });
    const mid = (i: number): P => [(cs[i][0] + cs[i + 1][0]) / 2, (cs[i][1] + cs[i + 1][1]) / 2];
    s.place([
      { t: 'Steam warms', p: mid(4), at: [[300, 52, 'end'], [296, 56, 'end']] },
      { t: 'Boiling', hi: true, p: [228, cs[3][1]], at: [[228, 124, 'middle'], [228, 128, 'middle']] },
      { t: 'Water warms', p: mid(2), at: [[150, 196, 'start'], [150, 200, 'start']] },
      { t: 'Ice warms', p: mid(0), at: [[68, 336, 'start'], [70, 336, 'start']] },
      { t: 'Melting', p: mid(1), at: [[120, 306, 'start'], [122, 306, 'start']] },
    ]);
    return s;
  },
  check() {
    const f = F102, { Q, T } = legs102(), cs = corners102().map(([q, t]) => at(f, q, t));
    const drawnQ = cs.slice(1).map((c, i) => uOf(f, c[0]) - uOf(f, cs[i][0]));
    const drawnT = cs.map((c) => vOf(f, c[1]));
    const label = [21, 336, 419, 2260, 20];
    const slope = (i: number) => (drawnT[i + 1] - drawnT[i]) / drawnQ[i];
    return [
      [`The legs' heats: Q₁ = mc_ice(10) = ${fmt(Q[0], 1)}, Q₂ = mL_f = ${fmt(Q[1], 1)}, Q₃ = mc_w(100) = ${fmt(Q[2], 1)}, Q₄ = mL_v = ${fmt(Q[3], 1)}, Q₅ = mc_st(10) = ${fmt(Q[4], 1)} kJ`, close(Q[0], 21) && close(Q[1], 336) && close(Q[2], 418.6, 1e-9) && close(Q[3], 2260) && close(Q[4], 20.1, 1e-9)],
      [`Each label rounds its leg's heat right: ${label.join(', ')} kJ`, Q.every((q, i) => Math.round(q) === label[i])],
      [`Every leg's length along the Q axis, read back from the drawing, is its heat: ${drawnQ.map((q) => fmt(q, 1)).join(', ')} kJ`, drawnQ.every((q, i) => close(q, Q[i], 1e-9))],
      ['Melting is flat at 0 °C and boiling flat at 100 °C (constant temperature while the state changes)', close(drawnT[1], 0, 1e-9) && close(drawnT[2], 0, 1e-9) && close(drawnT[3], 100, 1e-9) && close(drawnT[4], 100, 1e-9)],
      [`The rising legs: −10 → 0, 0 → 100 and 100 → ${T[5]} °C`, close(drawnT[0], -10, 1e-9) && close(drawnT[5], T[5], 1e-9)],
      [`The plateau lengths are in the ratio L_v : L_f = ${fmt(drawnQ[3] / drawnQ[1], 3)} = ${fmt(HC.Lv / HC.Lf, 3)}`, close(drawnQ[3] / drawnQ[1], HC.Lv / HC.Lf, 1e-9)],
      ['Boiling is the longest leg (the long plateau)', drawnQ.every((q, i) => i === 3 || q < drawnQ[3])],
      [`Each rising leg's slope is 1/(mc): ice ${fmt(slope(0), 3)}, water ${fmt(slope(2), 3)}, steam ${fmt(slope(4), 3)} °C per kJ (ice and steam, with the smaller c, rise faster per kJ)`, close(slope(0), 1000 / (HC.m * HC.cIce), 1e-9) && close(slope(2), 1000 / (HC.m * HC.cW), 1e-9) && close(slope(4), 1000 / (HC.m * HC.cSt), 1e-9) && slope(0) > slope(2)],
      [`In all, ${fmt(Q.reduce((x, y) => x + y, 0), 1)} kJ from −10 °C ice to ${T[5]} °C steam, ${fmt((Q[1] + Q[3]) / Q.reduce((x, y) => x + y, 0) * 100, 0)}% of it latent heat`, Q.reduce((x, y) => x + y, 0) > Q[3]],
      clearCheck(fig102.draw(fig102.cases[0])),
    ];
  },
};

/* ===================================================================== */
/* Figure 10.3 · two rods in series (topic 03)                            */
/* ===================================================================== */
/** The rods: equal lengths, side by side between the reservoirs; y of the rod's axis. */
const G103 = { hot: [8, 52, 60, 124] as Rect, cold: [280, 52, 332, 124] as Rect, rod: [60, 74, 280, 102] as Rect };
/** The book's Example 3 (p. 698), to check the junction formula with numbers: copper then steel, ends at 100 °C and 0 °C. */
const EX103 = { K1: 400, K2: 50, L: 0.5, A: 4.0e-4, T1: 100, T3: 0 };
const fig103: Diagram = {
  id: 'p11-10-fig-10.3',
  topic: 2,
  name: 'Two rods in series',
  cases: [{ chip: 'Rods in series', cap: 'Two conducting rods in series between reservoirs at <i>T</i><sub>1</sub> and <i>T</i><sub>3</sub>: the same steady heat current <i>H</i> flows through both, fixing the junction temperature <i>T</i><sub>2</sub> = (<i>R</i><sub>2</sub><i>T</i><sub>1</sub> + <i>R</i><sub>1</sub><i>T</i><sub>3</sub>)/(<i>R</i><sub>1</sub>+<i>R</i><sub>2</sub>).' }],
  draw() {
    const s = new Sketch(W, 290);
    const { hot, cold, rod } = G103, jx = (rod[0] + rod[2]) / 2, ay = (rod[1] + rod[3]) / 2;
    const box = (r: Rect) => outline(s, [[r[0], r[1]], [r[2], r[1]], [r[2], r[3]], [r[0], r[3]]], { w: 1.7 });
    box(hot); box(cold);
    box([rod[0], rod[1], jx, rod[3]]); box([jx, rod[1], rod[2], rod[3]]);
    arrow(s, [rod[0] + 8, ay], [rod[2] - 8, ay], { color: C.mari, w: 2.6 });
    s.dot(jx, ay, 3.8);
    s.sym((hot[0] + hot[2]) / 2, ay + 6, '<i>T</i><sub>1</sub>', { size: 17 });
    s.sym((cold[0] + cold[2]) / 2, ay + 6, '<i>T</i><sub>3</sub>', { size: 17 });
    s.sym((rod[0] + jx) / 2, rod[1] - 10, '<i>R</i><sub>1</sub>', { size: 16 });
    s.sym((jx + rod[2]) / 2, rod[1] - 10, '<i>R</i><sub>2</sub>', { size: 16 });
    s.sym((rod[0] + jx) / 2 - 24, rod[3] + 24, '<i>H</i>', { size: 17, color: C.amber });
    s.sym(jx + 46, rod[3] + 26, '<i>T</i><sub>2</sub>', { size: 16, anchor: 'start' });
    s.sym(W / 2, 192, 'same heat current in steady state:', { size: 14, color: C.slate });
    s.sym(W / 2, 216, '<i>H</i> = (<i>T</i><sub>1</sub> − <i>T</i><sub>2</sub>)/<i>R</i><sub>1</sub> = (<i>T</i><sub>2</sub> − <i>T</i><sub>3</sub>)/<i>R</i><sub>2</sub>', { size: 15 });
    const res = resultBlock(s, ['<i>T</i><sub>2</sub> = (<i>R</i><sub>2</sub><i>T</i><sub>1</sub> + <i>R</i><sub>1</sub><i>T</i><sub>3</sub>)/(<i>R</i><sub>1</sub> + <i>R</i><sub>2</sub>)']);
    s.place([
      { t: 'Hot reservoir', p: [(hot[0] + hot[2]) / 2, hot[1]], at: [[hot[0], 12, 'start'], [hot[0], 16, 'start']] },
      { t: 'Cold reservoir', p: [(cold[0] + cold[2]) / 2, cold[1]], at: [[cold[2], 12, 'end'], [cold[2], 16, 'end']] },
      { t: 'Junction', p: [jx, ay], own: [jx, ay], at: [[jx, 112, 'middle'], [jx, 114, 'middle']] },
      { t: 'Same heat current', hi: true, p: [rod[2] - 36, ay], at: [[rod[2], 142, 'end'], [rod[2], 146, 'end']] },
    ], [res]);
    return s;
  },
  check() {
    const { rod } = G103, jx = (rod[0] + rod[2]) / 2;
    const { K1, K2, L, A, T1, T3 } = EX103;
    const R1 = L / (K1 * A), R2 = L / (K2 * A);
    const T2 = (R2 * T1 + R1 * T3) / (R1 + R2);
    const H1 = (T1 - T2) / R1, H2 = (T2 - T3) / R2, H = (T1 - T3) / (R1 + R2);
    const T2k = (K1 * T1 + K2 * T3) / (K1 + K2);
    return [
      ['The two rods are drawn equal in length and cross-section (as in Example 3), end to end between the reservoirs', close(jx - rod[0], rod[2] - jx) && rod[0] === G103.hot[2] && rod[2] === G103.cold[0]],
      ['The heat current arrow runs from the hot reservoir (T₁) to the cold one (T₃), through the junction', rod[0] < jx && jx < rod[2]],
      [`Example 3's rods: R₁ = L/(K₁A) = ${fmt(R1, 3)} K W⁻¹, R₂ = ${fmt(R2, 3)} K W⁻¹`, close(R1, 3.125, 1e-9) && close(R2, 25, 1e-9)],
      [`T₂ = (R₂T₁ + R₁T₃)/(R₁ + R₂) = ${fmt(T2, 2)} °C (the book's 88.9 °C)`, fmt(T2, 1) === '88.9'],
      [`With that T₂ the same current flows in each rod: (T₁ − T₂)/R₁ = ${fmt(H1, 4)} W = (T₂ − T₃)/R₂ = ${fmt(H2, 4)} W = ΔT/(R₁ + R₂) = ${fmt(H, 4)} W (the book's 3.56 W)`, close(H1, H2, 1e-12) && close(H1, H, 1e-12) && fmt(H, 2) === '3.56'],
      [`The junction sits between the end temperatures, nearer the better conductor's end: ${T3} < ${fmt(T2, 1)} < ${T1}; for equal L and A also T₂ = (K₁T₁ + K₂T₃)/(K₁ + K₂) = ${fmt(T2k, 2)} °C`, T3 < T2 && T2 < T1 && close(T2, T2k, 1e-9)],
      clearCheck(fig103.draw(fig103.cases[0])),
    ];
  },
};

/* ===================================================================== */
/* Figure 10.4 · a freezing pond (topic 03)                               */
/* ===================================================================== */
/** The book's Example 4 (p. 698): air −10 °C over water at 0 °C; K, ρ, L of ice; the sheet grows from 4.0 to 6.0 cm. */
const EX104 = { K: 2.2, rho: 920, L: 3.36e5, theta: 10, x1: 0.04, x2: 0.06 };
/** The pond in section: the ice's top surface, the old ice bottom (thickness x) and the new boundary (x + dx), px. */
const G104 = { left: 46, right: 176, top: 74, x: 112, dx: 14, waterTo: 264, arrows: [72, 111, 150] };
const fig104: Diagram = {
  id: 'p11-10-fig-10.4',
  topic: 2,
  name: 'A freezing pond',
  cases: [{ chip: 'Freezing pond', cap: 'A freezing pond: the heat released as a new layer d<i>x</i> of ice forms at the ice–water boundary (0 °C) conducts up through the existing ice of thickness <i>x</i> to the −10 °C air, so the sheet grows ever more slowly.' }],
  draw() {
    const s = new Sketch(W, 280);
    const { left, right, top, x, dx, waterTo, arrows } = G104, old = top + x, edge = old + dx;
    path(s, [[left, top], [right, top]], { w: 2.4 });
    path(s, [[left, old], [right, old]], { color: C.slate, w: 1.2, dash: 'dash' });
    path(s, [[left, edge], [right, edge]], { w: 2 });
    path(s, [[left, top], [left, waterTo]], { color: C.grey, w: 1.2 });
    path(s, [[right, top], [right, waterTo]], { color: C.grey, w: 1.2 });
    path(s, [[left, waterTo], [right, waterTo]], { color: C.grey, w: 1.2 });
    arrows.forEach((ax) => arrow(s, [ax, (old + edge) / 2], [ax, top + 6], { color: C.mari, w: 2.4 }));
    measure(s, [left - 16, top], [left - 16, old], C.ink);
    s.sym(left - 22, (top + old) / 2 + 5, '<i>x</i>', { size: 17, anchor: 'end' });
    s.sym(right + 8, edge - 2, 'd<i>x</i>', { size: 16, anchor: 'start' });
    s.sym(left + 62, 37, '−10 °C', { size: 15, anchor: 'start' });
    s.sym(right + 72, 262, '0 °C', { size: 15, anchor: 'start' });
    s.place([
      { t: 'Heat conducts up', hi: true, p: [arrows[2], top + 26], at: [[W - 4, 8, 'end'], [W - 4, 12, 'end']] },
      { t: 'Air', p: [left + 30, top - 16], at: [[left + 8, 22, 'start'], [left + 8, 18, 'start']] },
      { t: 'Ice', p: [right - 6, top + 70], at: [[right + 22, 118, 'start'], [right + 22, 112, 'start']] },
      { t: 'New ice freezes here', p: [right - 18, (old + edge) / 2], at: [[W - 4, 214, 'end'], [W - 4, 218, 'end']] },
      { t: 'Water', p: [right - 6, edge + 44], at: [[right + 8, 246, 'start'], [right + 8, 248, 'start']] },
    ]);
    return s;
  },
  check() {
    const { top, x, dx, arrows } = G104, old = top + x, edge = old + dx;
    const { K, rho, L, theta, x1, x2 } = EX104;
    const rate = (xx: number) => (K * theta) / (rho * L * xx);
    const t = (rho * L * (x2 * x2 - x1 * x1)) / (2 * K * theta);
    const flux = (xx: number) => (K * theta) / xx;
    return [
      ['The new layer dx lies at the bottom of the ice, between the old ice (thickness x) and the water', top < old && old < edge && dx < x / 4],
      [`Heat flows from the 0 °C boundary to the −10 °C air (hot to cold): all ${arrows.length} arrows start in the new layer and point up through the ice to its top`, (old + edge) / 2 > old && (old + edge) / 2 < edge && top + 6 < old && arrows.every((ax) => ax > G104.left && ax < G104.right) && 0 > -EX104.theta],
      [`Fourier's law through the ice: heat flow per unit area Kθ/x = ${fmt(flux(x1), 0)} W m⁻² at x = 4 cm, ${fmt(flux(x2), 1)} W m⁻² at 6 cm`, close(flux(x1) / flux(x2), x2 / x1, 1e-12)],
      [`So dx/dt = Kθ/(ρLx) falls as the sheet thickens: ${(rate(x1) * 1e6).toFixed(3)} × 10⁻⁶ then ${(rate(x2) * 1e6).toFixed(3)} × 10⁻⁶ m s⁻¹ (ever more slowly)`, rate(x2) < rate(x1)],
      [`Integrated, t = ρL(x₂² − x₁²)/(2Kθ) = ${(t / 1e4).toFixed(2)} × 10⁴ s ≈ ${fmt(t / 3600, 1)} h, the book's 1.41 × 10⁴ s ≈ 3.9 h`, (t / 1e4).toFixed(2) === '1.41' && fmt(t / 3600, 1) === '3.9'],
      clearCheck(fig104.draw(fig104.cases[0])),
    ];
  },
};

/* ===================================================================== */
/* Figure 10.5 · the cooling curve (topic 04)                             */
/* ===================================================================== */
/**
 * The book's curve, read off its grid: surroundings T₀ = 27 °C, starting at
 * 87 °C, k = 0.055 min⁻¹ (it passes 62 °C at 10 min and 29 °C at 60 min);
 * its two tangents touch at 2 min (drawn to 18 min) and 34 min (to 49 min).
 */
const NC = { T0: 27, Ti: 87, k: 0.055, steep: [2, 18], gentle: [34, 49] };
const Tc = (t: number) => NC.T0 + (NC.Ti - NC.T0) * Math.exp(-NC.k * t);
const tangent = (t0: number) => (t: number) => Tc(t0) - NC.k * (Tc(t0) - NC.T0) * (t - t0);
/** t in min, T in °C; the T axis starts at 20 °C, on the t axis. */
const F105: Frame = { ox: 46, oy: 268 + 20 * 2.6, sx: 4.3, sy: 2.6 };
const fig105: Diagram = {
  id: 'p11-10-fig-10.5',
  topic: 3,
  name: 'Cooling curve',
  cases: [{ chip: 'Cooling curve', cap: 'Cooling curve: the temperature falls steeply at first and flattens as it approaches the surroundings temperature <i>T</i><sub>0</sub>; Newton’s law −d<i>T</i>/d<i>t</i> = <i>k</i>(<i>T</i> − <i>T</i><sub>0</sub>) is the small-excess approximation and fails when the difference is large.' }],
  draw() {
    const s = new Sketch(W, 320);
    const f = F105, y20 = Y(f, 20);
    s.vec(f.ox, y20, X(f, 64.5), y20, { color: C.grey, w: 1.3 });
    s.vec(f.ox, y20, f.ox, Y(f, 105), { color: C.grey, w: 1.3 });
    s.sym(f.ox + 9, Y(f, 105) + 6, '<i>T</i> (°C)', { size: 14, anchor: 'start' });
    s.sym(X(f, 64.5), y20 + 34, '<i>t</i> (min)', { size: 14, anchor: 'end' });
    vTicks(s, f, f.ox, [20, 30, 40, 50, 60, 70, 80, 90, 100].map((v): Tick => [v, String(v)]));
    hTicks(s, f, y20, [0, 10, 20, 30, 40, 50, 60].map((u): Tick => [u, String(u)]));
    path(s, [[f.ox, Y(f, NC.T0)], [X(f, 61.5), Y(f, NC.T0)]], { color: C.slate, w: 1.3, dash: 'dash' });
    s.sym(X(f, 61.5) + 4, Y(f, NC.T0) + 5, '<i>T</i><sub>0</sub>', { size: 15, anchor: 'start' });
    curve(s, f, tangent(NC.steep[0]), NC.steep[0], NC.steep[1], { color: C.slate, w: 1.6 });
    curve(s, f, tangent(NC.gentle[0]), NC.gentle[0], NC.gentle[1], { color: C.slate, w: 1.6 });
    curve(s, f, Tc, 0, 60, { color: C.mari, w: 2.8 });
    const d1 = at(f, NC.steep[0], Tc(NC.steep[0])), d2 = at(f, NC.gentle[0], Tc(NC.gentle[0]));
    s.dot(d1[0], d1[1], 3.4);
    s.dot(d2[0], d2[1], 3.4);
    const nx = X(f, 22), ny = Y(f, 98);
    ['−d<i>T</i>/d<i>t</i> = <i>k</i>(<i>T</i> − <i>T</i><sub>0</sub>) holds only', 'for small excess; radiation’s', '<i>T</i><sup>4</sup> law takes over when the', 'difference is large'].forEach((t, i) => s.sym(nx, ny + 16 * i, t, { size: 12.5, anchor: 'start' }));
    const m1 = (NC.steep[0] + NC.steep[1]) * 0.55, m2 = (NC.gentle[0] + NC.gentle[1]) / 2;
    s.place([
      { t: 'Steep: large excess', p: at(f, m1, tangent(NC.steep[0])(m1)), at: [[X(f, 22), 132, 'start'], [X(f, 22), 134, 'start']] },
      { t: 'Cooling curve', hi: true, p: at(f, 16, Tc(16)), at: [[X(f, 31), 160, 'start'], [X(f, 31), 162, 'start']] },
      { t: 'Gentle: small excess', p: at(f, m2, tangent(NC.gentle[0])(m2)), at: [[W - 4, 188, 'end'], [W - 4, 190, 'end']] },
      { t: 'Surroundings', p: at(f, 4, NC.T0), at: [[8, 292, 'start'], [8, 294, 'start']] },
    ]);
    return s;
  },
  check() {
    const f = F105, ts = samples(0, 60, 600);
    const drawn = ts.map((t) => vOf(f, Y(f, Tc(t))));
    const h = 1e-4, dTdt = (t: number) => (Tc(t + h) - Tc(t - h)) / (2 * h);
    const newton = ts.every((t) => close(-dTdt(t), NC.k * (Tc(t) - NC.T0), 1e-6));
    const falls = drawn.every((v, i) => i === 0 || v < drawn[i - 1]);
    const flattens = ts.slice(1).every((t, i) => Math.abs(dTdt(t)) < Math.abs(dTdt(ts[i])));
    const s1 = -NC.k * (Tc(NC.steep[0]) - NC.T0), s2 = -NC.k * (Tc(NC.gentle[0]) - NC.T0);
    const tanOk = [NC.steep[0], NC.gentle[0]].every((t0) => close(tangent(t0)(t0), Tc(t0)) && close((tangent(t0)(t0 + 1) - tangent(t0)(t0)), dTdt(t0), 1e-6));
    const K = (c: number) => c + 273.15, T0k = K(NC.T0);
    const stefanOverNewton = (Tcel: number) => (K(Tcel) ** 4 - T0k ** 4) / (4 * T0k ** 3 * (K(Tcel) - T0k));
    return [
      [`The curve is T = T₀ + (T(0) − T₀)e^(−kt) with T₀ = ${NC.T0} °C, T(0) = ${NC.Ti} °C, k = ${NC.k} min⁻¹: it passes ${fmt(Tc(10), 1)} °C at 10 min and ${fmt(Tc(60), 1)} °C at 60 min, as the book's does`, fmt(Tc(10), 0) === '62' && fmt(Tc(60), 0) === '29'],
      ['At every sampled point −dT/dt = k(T − T₀): the curve obeys Newton\'s law', newton],
      ['The temperature falls all the way (read back from the drawing)', falls && drawn.every((v) => v > NC.T0)],
      [`It falls steeply at first and flattens: slope ${fmt(dTdt(0), 2)} °C/min at the start, ${fmt(dTdt(60), 3)} at 60 min, and smaller in size at every step`, flattens],
      [`It approaches T₀ but never reaches it: the excess is ${fmt(((Tc(60) - NC.T0) / (NC.Ti - NC.T0)) * 100, 1)}% of the start's after 60 min`, Tc(60) > NC.T0 && Tc(60) - NC.T0 < 0.05 * (NC.Ti - NC.T0)],
      [`The tangents touch the curve and have its slope there: ${fmt(s1, 2)} °C/min at ${NC.steep[0]} min (excess ${fmt(Tc(NC.steep[0]) - NC.T0, 1)} °C), ${fmt(s2, 2)} at ${NC.gentle[0]} min (excess ${fmt(Tc(NC.gentle[0]) - NC.T0, 1)} °C): steep for a large excess, gentle for a small one`, tanOk && Math.abs(s1) > 5 * Math.abs(s2)],
      [`Newton's law is Stefan's T⁴ law linearised: σ(T⁴ − T₀⁴) is ${fmt(stefanOverNewton(Tc(NC.gentle[0])), 3)} × 4σT₀³(T − T₀) at a ${fmt(Tc(NC.gentle[0]) - NC.T0, 1)} °C excess but ${fmt(stefanOverNewton(NC.Ti), 3)} × at ${NC.Ti - NC.T0} °C: it fails when the difference is large`, stefanOverNewton(Tc(NC.gentle[0])) < 1.06 && stefanOverNewton(NC.Ti) > 1.3],
      clearCheck(fig105.draw(fig105.cases[0])),
    ];
  },
};

/* ===================================================================== */
/* Figure 10.6 · phase diagram of water (topic 06)                        */
/* ===================================================================== */
/**
 * The pressure axis is logarithmic (ln P), the temperature axis linear in
 * kelvin, so the book's points sit in their true order and spacing: triple
 * point 273.16 K, 611.7 Pa; 1 atm (101 325 Pa) boiling at 373.15 K; critical
 * point 647 K, 22.1 MPa. The vaporization curve is ln P = a − b/T + c ln T
 * through those three points (it implies L_v ≈ 2.46 MJ kg⁻¹ at the triple
 * point, the Clausius–Clapeyron slope); the sublimation curve is
 * Clausius–Clapeyron with L_s = L_f + L_v. The fusion curve's real tilt is far
 * too small to see (it moves 0.0074 K from the triple point to 1 atm), so it
 * is drawn as a straight line leaning left with its true sign: "not to scale",
 * as the book says.
 */
const PD = { Tt: 273.16, Pt: 611.7, Tb: 373.15, atm: 101325, Tc: 647, Pc: 22.1e6, Lf: 3.36e5, rhoIce: 917, rhoW: 1000, M: 0.018015, R: 8.314 };
const vapFit = (() => {
  const pts: [number, number][] = [[PD.Tt, PD.Pt], [PD.Tb, PD.atm], [PD.Tc, PD.Pc]];
  const m = pts.map(([T, P]) => [1, -1 / T, Math.log(T), Math.log(P)]);
  for (let i = 0; i < 3; i++) {
    for (let r = 0; r < 3; r++) {
      if (r === i) continue;
      const k = m[r][i] / m[i][i];
      for (let c = 0; c < 4; c++) m[r][c] -= k * m[i][c];
    }
  }
  return { a: m[0][3] / m[0][0], b: m[1][3] / m[1][1], c: m[2][3] / m[2][2] };
})();
const lnPvap = (T: number) => vapFit.a - vapFit.b / T + vapFit.c * Math.log(T);
/** d(ln P)/dT on the vaporization curve, and the latent heat it implies (Clausius–Clapeyron, ideal vapour). */
const dlnPvap = (T: number) => vapFit.b / (T * T) + vapFit.c / T;
const LvT = (T: number) => (dlnPvap(T) * PD.R * T * T) / PD.M;
const Ls = PD.Lf + LvT(PD.Tt);
const lnPsub = (T: number) => Math.log(PD.Pt) - ((Ls * PD.M) / PD.R) * (1 / T - 1 / PD.Tt);
/** ln P axis from −3 (bottom) up; T axis from 100 K. */
const AXY106 = 318;
const F106: Frame = { ox: 30 - 100 * 0.5, oy: AXY106 - 3 * 12.06, sx: 0.5, sy: 12.06 };
/** The fusion line: from the triple point up to ln P = 18.4 (about 100 MPa), leaning `lean` px to the left. */
const FUS = { lnTop: 18.4, lean: 26 };
const fusionX = (lnP: number) => X(F106, PD.Tt) - (FUS.lean * (lnP - Math.log(PD.Pt))) / (FUS.lnTop - Math.log(PD.Pt));
const T_SUB0 = 215;
const fig106: Diagram = {
  id: 'p11-10-fig-10.6',
  topic: 5,
  name: 'Phase diagram of water',
  cases: [{ chip: 'Phase diagram', cap: 'Phase diagram of water (not to scale): the fusion, vaporization and sublimation curves meet at the triple point (273.16 K = 0.01 °C, 611.7 Pa = 0.006 atm); the fusion curve’s negative slope is the water anomaly, and the dashed 1 atm line crosses it at 0 °C and the vaporization curve at 100 °C, which runs on to the critical point (647 K, 22.1 MPa).' }],
  draw() {
    const s = new Sketch(W, 346);
    const f = F106, ax = 30, lnAtm = Math.log(PD.atm);
    s.vec(ax, AXY106, W - 8, AXY106, { color: C.grey, w: 1.3 });
    s.vec(ax, AXY106, ax, 40, { color: C.grey, w: 1.3 });
    s.sym(4, 30, '<i>P</i> (pressure)', { size: 14, anchor: 'start' });
    s.sym(W - 8, AXY106 + 20, '<i>T</i> (temperature)', { size: 14, anchor: 'end' });
    s.sym(W - 8, AXY106 - 8, 'not to scale', { size: 12.5, anchor: 'end', color: C.slate });
    const yAtm = Y(f, lnAtm), xBoil = X(f, PD.Tb), xMelt = fusionX(lnAtm);
    path(s, [[ax, yAtm], [244, yAtm]], { color: C.slate, w: 1.2, dash: 'dash' });
    s.sym(248, yAtm + 4.5, '1 atm', { size: 13, anchor: 'start', color: C.slate });
    curve(s, f, lnPsub, T_SUB0, PD.Tt, { color: C.slate, w: 2 });
    curve(s, f, lnPvap, PD.Tt, PD.Tc, { w: 2 });
    const tp = at(f, PD.Tt, Math.log(PD.Pt)), cp = at(f, PD.Tc, Math.log(PD.Pc)), top: P = [fusionX(FUS.lnTop), Y(f, FUS.lnTop)];
    path(s, [tp, top], { color: C.mari, w: 2.8 });
    s.dot(tp[0], tp[1], 4);
    s.dot(cp[0], cp[1], 4);
    s.dot(xMelt, yAtm, 3.2);
    s.dot(xBoil, yAtm, 3.2);
    s.sym(xMelt - 9, yAtm - 8, '0 °C', { size: 13, anchor: 'end' });
    s.sym(xBoil + 6, yAtm + 16, '100 °C', { size: 13, anchor: 'start' });
    s.sym(tp[0] + 14, tp[1] + 32, '273.16 K = 0.01 °C,', { size: 13, anchor: 'start' });
    s.sym(tp[0] + 14, tp[1] + 48, '611.7 Pa ≈ 0.006 atm', { size: 13, anchor: 'start' });
    s.sym(214, 56, '647 K, 22.1 MPa:', { size: 13, anchor: 'end' });
    s.sym(214, 72, 'liquid/vapour merge', { size: 12, anchor: 'end', color: C.slate });
    // the three regions, each named where it is
    s.tag(36, 84, 'Solid', null, null);
    s.sym(63, 122, '(ice)', { size: 13, color: C.slate });
    s.tag(110, 84, 'Liquid', null, null);
    s.sym(176, 99, '(water)', { size: 13, anchor: 'start', color: C.slate });
    s.tag(200, 262, 'Vapour', null, null);
    s.sym(272, 278, '(steam)', { size: 13, anchor: 'start', color: C.slate });
    s.place([
      { t: 'Fusion curve (water anomaly)', hi: true, p: top, own: top, at: [[100, 4, 'start'], [102, 4, 'start']] },
      { t: 'Critical point', p: cp, own: cp, at: [[W - 4, 40, 'end'], [W - 4, 38, 'end']] },
      { t: 'Triple point', p: tp, own: tp, at: [[tp[0] + 14, tp[1] - 8, 'start'], [tp[0] + 16, tp[1] - 6, 'start']] },
      { t: 'Vaporization curve', p: at(f, 480, lnPvap(480)), at: [[W - 4, 168, 'end'], [W - 4, 170, 'end']] },
      { t: 'Sublimation curve', p: at(f, 238, lnPsub(238)), at: [[36, 288, 'start'], [36, 286, 'start']] },
    ]);
    return s;
  },
  check() {
    const f = F106, lnAtm = Math.log(PD.atm);
    const dV = 1 / PD.rhoW - 1 / PD.rhoIce, dTdP = (273 * dV) / PD.Lf;
    const Tmelt = PD.Tt + dTdP * (PD.atm - PD.Pt);
    const tp = at(f, PD.Tt, Math.log(PD.Pt));
    const vapEnds = [at(f, PD.Tt, lnPvap(PD.Tt)), at(f, PD.Tc, lnPvap(PD.Tc))], subEnd = at(f, PD.Tt, lnPsub(PD.Tt));
    const vapRise = samples(PD.Tt, PD.Tc, 300).every((T, i, a) => i === 0 || lnPvap(T) > lnPvap(a[i - 1]));
    const subRise = samples(T_SUB0, PD.Tt, 200).every((T, i, a) => i === 0 || lnPsub(T) > lnPsub(a[i - 1]));
    const fusLeft = samples(Math.log(PD.Pt), FUS.lnTop, 100).every((l, i, a) => i === 0 || fusionX(l) < fusionX(a[i - 1]));
    const inSolid = (T: number, lnP: number) => lnP > Math.log(PD.Pt) && X(f, T) < fusionX(lnP);
    const inLiquid = (T: number, lnP: number) => X(f, T) > fusionX(lnP) && T < PD.Tc && lnP > lnPvap(T);
    const inVapour = (T: number, lnP: number) => (T >= PD.Tt ? lnP < lnPvap(T) : lnP < lnPsub(T));
    const drawn = fig106.draw(fig106.cases[0]);
    const tagAt = (t: string) => { const r = drawn.tags.find((g) => g.name === t)!.rect; return [(r[0] + r[2]) / 2, (r[1] + r[3]) / 2] as P; };
    const phys = (p: P): [number, number] => [uOf(f, p[0]), vOf(f, p[1])];
    const [sT, sP] = phys(tagAt('Solid')), [lT, lP] = phys(tagAt('Liquid')), [vT, vP] = phys(tagAt('Vapour'));
    return [
      ['All three curves meet at the triple point (273.16 K, 611.7 Pa)', close(len(vapEnds[0], tp), 0, 1e-9) && close(len(subEnd, tp), 0, 1e-9) && close(fusionX(Math.log(PD.Pt)), tp[0], 1e-9)],
      [`273.16 K = ${fmt(PD.Tt - 273.15, 2)} °C and 611.7 Pa = ${fmt(PD.Pt / PD.atm, 5)} atm ≈ 0.006 atm`, fmt(PD.Tt - 273.15, 2) === '0.01' && fmt(PD.Pt / PD.atm, 3) === '0.006'],
      [`Clausius–Clapeyron for melting (Example 4's values): dP/dT = L/(TΔV) = ${fmt(1 / dTdP / 1e7, 2)} × 10⁷ Pa K⁻¹, as ΔV = ${fmt(dV * 1e5, 2)} × 10⁻⁵ m³ kg⁻¹ < 0 (ice is less dense): the fusion curve's slope is negative`, dTdP < 0 && fmt(dTdP * 1e8, 2) === '−7.35'],
      ['The drawn fusion curve leans up and to the LEFT: T falls as P rises all along it', fusLeft],
      [`At 1 atm it melts at ${fmt(Tmelt, 4)} K = ${fmt(Tmelt - 273.15, 3)} °C ≈ 0 °C, just below the triple point's 0.01 °C (the 1 atm dot sits left of the triple point)`, close(Tmelt, 273.15, 0.005) && Tmelt < PD.Tt && fusionX(lnAtm) < tp[0]],
      [`The vaporization curve passes exactly through 1 atm at 373.15 K (100 °C) and ends at the critical point (647 K, 22.1 MPa)`, close(Math.exp(lnPvap(PD.Tb)), PD.atm, 1e-3) && close(Math.exp(lnPvap(PD.Tc)), PD.Pc, 1) && close(vapEnds[1][0], X(f, PD.Tc), 1e-9)],
      [`It rises all the way, and its slope implies L_v = ${(LvT(PD.Tt) / 1e6).toFixed(2)} MJ kg⁻¹ at the triple point and ${(LvT(PD.Tb) / 1e6).toFixed(2)} at 100 °C (the book's 2.26)`, vapRise && Math.abs(LvT(PD.Tb) - 2.26e6) / 2.26e6 < 0.05 && LvT(PD.Tt) > LvT(PD.Tb)],
      [`The sublimation curve lies below the triple-point pressure and rises to it, steeper there than vaporization (L_s = ${(Ls / 1e6).toFixed(2)} > L_v MJ kg⁻¹)`, subRise && lnPsub(T_SUB0) < Math.log(PD.Pt) && (Ls * PD.M) / (PD.R * PD.Tt ** 2) > dlnPvap(PD.Tt)],
      ['The triple point lies below 1 atm, which lies below the critical pressure', PD.Pt < PD.atm && PD.atm < PD.Pc],
      [`Each region's tag sits in its region: solid at ${fmt(sT, 0)} K, liquid at ${fmt(lT, 0)} K, vapour at ${fmt(vT, 0)} K`, inSolid(sT, sP) && inLiquid(lT, lP) && inVapour(vT, vP)],
      clearCheck(fig106.draw(fig106.cases[0])),
    ];
  },
};

export const DIAGRAMS_PHYSICS_11_10: Diagram[] = [fig101, fig102, fig103, fig104, fig105, fig106];

