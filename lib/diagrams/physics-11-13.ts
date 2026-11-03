import { C, LABEL_GAP, Rect, Sketch, r1, mathW } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * PHYSICS CLASS 11, CHAPTER 13 (Oscillations): every figure of the Master
 * Reference book, redrawn. The chapter's drawings are its four numbered
 * figures, each printed on a "CHAPTER 13 · FIGURES" page (13.1 on p. 896,
 * 13.2 on p. 904, 13.3 on p. 911, 13.4 on p. 920; the first copy of each
 * caption sits a page earlier, where the text refers to it). It has no
 * unnumbered drawings: pp. 883–943 were checked page by page, Additional
 * Topics A–F included (the rest is text, typeset equations, boxed answers and
 * the two tables on pp. 925 and 933).
 *
 * Every figure is computed from the physics with the book's values, never
 * placed by eye: x = A sin ωt with K = E cos²ωt and U = E sin²ωt summing to E
 * and crossing at E/2 where x = ±A/√2; the pendulum's weight resolved along and
 * across the string at θ; springs joined end to end and side by side (checked
 * with Example 3's 6 and 3 N m⁻¹); the driven amplitude
 * A = (F₀/m)/√((ω² − ω₀²)² + (bω/m)²) for the two dampings the book plotted,
 * and the decaying oscillation inside A₀e^(−bt/2m); the U-tube's level
 * difference 2y with the liquid's length conserved, the float pushed down x
 * below its equilibrium depth h (Example 2's 16 cm, drawn to scale), and the
 * tunnel's restoring force mg r/R. Each `check` turns the drawn pixels back
 * into physics and recomputes what the figure and caption state, and measures
 * that no label or tag touches a line it does not name.
 */

const W = 340;
type P = [number, number];
const D2R = Math.PI / 180;
const close = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) < tol;
const fmt = (n: number, d = 2) => String(+n.toFixed(d)).replace('-', '−');
const len = (a: P, b: P) => Math.hypot(b[0] - a[0], b[1] - a[1]);
const add = (a: P, b: P, k = 1): P => [a[0] + k * b[0], a[1] + k * b[1]];
const dotp = (a: P, b: P) => a[0] * b[0] + a[1] * b[1];
const samples = (a: number, b: number, n = 400) => Array.from({ length: n + 1 }, (_, i) => a + ((b - a) * i) / n);

/* ---------- drawing helpers ---------- */
type Stroke = { color?: string; w?: number; dash?: 'dash' | 'dot'; free?: boolean };
const dashOf = (d?: Stroke['dash']) => (d === 'dash' ? ' stroke-dasharray="6 4"' : d === 'dot' ? ' stroke-dasharray="1.5 3.5"' : '');

/**
 * Every line a label must keep clear of (outlines, curves, arrows), by sketch:
 * `clearance` measures each tag and label against them. Axes and the dotted
 * guides that run from a tick are left out (`free`): their values sit on them.
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
/** An arrow (a force, a direction) that labels keep clear of. */
function arrow(s: Sketch, a: P, b: P, o: { color?: string; w?: number; dash?: boolean } = {}) {
  s.vec(a[0], a[1], b[0], b[1], o);
  keep(s, [a, b]);
}
/** A measured length with an arrowhead at each end. */
function measure(s: Sketch, a: P, b: P, color: string = C.slate) {
  const m: P = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
  arrow(s, m, a, { color, w: 1.3 });
  arrow(s, m, b, { color, w: 1.3 });
}
/** A short length marked from outside: two small arrows pointing in at a and b. */
function pinch(s: Sketch, a: P, b: P, color: string = C.slate, L = 14) {
  const d = len(a, b), u: P = [(b[0] - a[0]) / d, (b[1] - a[1]) / d];
  arrow(s, add(a, u, -L), a, { color, w: 1.3 });
  arrow(s, add(b, u, L), b, { color, w: 1.3 });
}
/** A dotted guide, free of the clearance check (a value sits on it). */
const guide = (s: Sketch, a: P, b: P) => path(s, [a, b], { color: C.slate, w: 1, dash: 'dot', free: true });
/** A fixed support: a line with grey hatching above it. */
function support(s: Sketch, x0: number, x1: number, y: number) {
  path(s, [[x0, y], [x1, y]], { w: 2 });
  for (let x = x0 + 4; x <= x1 - 2; x += 10) path(s, [[x, y - 1], [x + 8, y - 9]], { color: C.grey, w: 1.2 });
}
/** A coil spring from a (top) to b (bottom): straight leads, then `n` zigzag half-turns of half-width `amp`. */
function springPts(a: P, b: P, n = 8, amp = 8, lead = 10): P[] {
  const d = len(a, b), u: P = [(b[0] - a[0]) / d, (b[1] - a[1]) / d], nv: P = [-u[1], u[0]];
  const pts: P[] = [a, add(a, u, lead)];
  const body = d - 2 * lead;
  for (let i = 0; i < n; i++) pts.push(add(add(a, u, lead + (body * (i + 0.5)) / n), nv, i % 2 ? -amp : amp));
  pts.push(add(b, u, -lead), b);
  return pts;
}
/** A circle as a kept polyline (never filled). */
function ring(s: Sketch, c: P, R: number, o: Stroke = {}) {
  const pts = samples(0, 2 * Math.PI, 180).map((a): P => [c[0] + R * Math.cos(a), c[1] + R * Math.sin(a)]);
  path(s, pts, o);
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
function curve(s: Sketch, f: Frame, fn: (u: number) => number, u0: number, u1: number, o: Stroke = {}, n = 240): P[] {
  const pts: P[] = [];
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
function hTicks(s: Sketch, f: Frame, axisY: number, ticks: Tick[], labels = true) {
  ticks.forEach(([u, txt]) => {
    s.line(X(f, u), axisY, X(f, u), axisY + 4, { color: C.grey, w: 1.2 });
    if (labels) s.sym(X(f, u), axisY + 17, txt, { size: 12.5, color: C.slate });
  });
}

/* ===================================================================== */
/* Figure 13.1 · x(t), K(t) and U(t) over one period (topic 02)            */
/* ===================================================================== */
/**
 * The book's graphs: A = 1 cm, T = 2π s (ω = 1 rad s⁻¹), E = 2 J, x = A sin ωt
 * starting at the mean position; K = E cos²ωt and U = E sin²ωt. Top graph
 * x (cm), bottom K, U (J), both against the same t axis (0 to 8 s).
 */
const SHM = { A: 1, w: 1, E: 2 };
const T131 = (2 * Math.PI) / SHM.w;
const x131 = (t: number) => SHM.A * Math.sin(SHM.w * t);
const K131 = (t: number) => SHM.E * Math.cos(SHM.w * t) ** 2;
const U131 = (t: number) => SHM.E * Math.sin(SHM.w * t) ** 2;
/** The four K = U crossings in one period: ωt = π/4, 3π/4, 5π/4, 7π/4. */
const cross131 = [1, 3, 5, 7].map((k) => (k * Math.PI) / (4 * SHM.w));
const FX: Frame = { ox: 46, oy: 118, sx: 34, sy: 40 };
const FE: Frame = { ox: 46, oy: 380, sx: 34, sy: 62 };
const fig131: Diagram = {
  id: 'p11-13-fig-13.1',
  topic: 1,
  name: 'SHM displacement and energies',
  cases: [{ chip: 'x, K and U', cap: 'Displacement <i>x</i>(<i>t</i>) and energies <i>K</i>(<i>t</i>), <i>U</i>(<i>t</i>) over one period <i>T</i>. <i>K</i> and <i>U</i> each complete two cycles per period, cross at <i>E</i>/2 (where <i>x</i> = ±<i>A</i>/√2), and always sum to the constant total energy <i>E</i>.' }],
  draw() {
    const s = new Sketch(W, 410);
    const fx = FX, fe = FE, tEnd = 8.3;
    // top: x (cm)
    s.vec(fx.ox, Y(fx, -1.5), fx.ox, Y(fx, 1.95), { color: C.grey, w: 1.3 });
    s.vec(fx.ox, fx.oy, X(fx, tEnd), fx.oy, { color: C.grey, w: 1.3 });
    s.sym(fx.ox + 8, Y(fx, 1.95) + 4, '<i>x</i> (cm)', { size: 14, anchor: 'start' });
    vTicks(s, fx, fx.ox, [[-1, '−1'], [0, '0'], [1, '1']]);
    hTicks(s, fx, fx.oy, [1, 2, 3, 4, 5, 6, 7, 8].map((u): Tick => [u, '']), false);
    path(s, [[fx.ox, Y(fx, 1)], [X(fx, 6.8), Y(fx, 1)]], { color: C.slate, w: 1, dash: 'dot', free: true });
    path(s, [[fx.ox, Y(fx, -1)], [X(fx, 6.8), Y(fx, -1)]], { color: C.slate, w: 1, dash: 'dot', free: true });
    s.sym(X(fx, 6.95), Y(fx, 1) + 5, '+<i>A</i>', { size: 14, anchor: 'start' });
    s.sym(X(fx, 6.95), Y(fx, -1) + 5, '−<i>A</i>', { size: 14, anchor: 'start' });
    curve(s, fx, x131, 0, T131, { w: 2.2 });
    measure(s, [X(fx, 0), Y(fx, 1.45)], [X(fx, T131), Y(fx, 1.45)], C.slate);
    s.sym(X(fx, T131 / 2), Y(fx, 1.45) - 8, '<i>T</i>', { size: 15 });
    // bottom: K, U (J)
    s.vec(fe.ox, fe.oy, fe.ox, Y(fe, 2.75), { color: C.grey, w: 1.3 });
    s.vec(fe.ox, fe.oy, X(fe, tEnd), fe.oy, { color: C.grey, w: 1.3 });
    s.sym(fe.ox + 8, Y(fe, 2.75) + 4, '<i>K</i>, <i>U</i> (J)', { size: 14, anchor: 'start' });
    vTicks(s, fe, fe.ox, [0, 0.5, 1, 1.5, 2, 2.5].map((v): Tick => [v, v.toFixed(1)]));
    hTicks(s, fe, fe.oy, [0, 1, 2, 3, 4, 5, 6, 7, 8].map((u): Tick => [u, String(u)]));
    s.sym(W - 6, fe.oy - 8, '<i>t</i> (s)', { size: 14, anchor: 'end' });
    path(s, [[X(fe, cross131[3]), Y(fe, SHM.E / 2)], [X(fe, 6.8), Y(fe, SHM.E / 2)]], { color: C.slate, w: 1, dash: 'dot', free: true });
    s.sym(X(fe, 6.95), Y(fe, SHM.E / 2) + 5, '<i>E</i>/2', { size: 14, anchor: 'start' });
    curve(s, fe, U131, 0, T131, { color: C.faint, w: 2.4 });
    curve(s, fe, K131, 0, T131, { w: 2.2 });
    path(s, [[fe.ox, Y(fe, SHM.E)], [X(fe, 6.8), Y(fe, SHM.E)]], { color: C.mari, w: 2.2, dash: 'dash' });
    s.sym(X(fe, 6.95), Y(fe, SHM.E) + 5, '<i>E</i>', { size: 15, anchor: 'start', color: C.amber });
    cross131.forEach((t) => s.dot(X(fe, t), Y(fe, K131(t)), 3.4));
    s.sym(X(fe, T131 / 4), Y(fe, SHM.E) - 9, '<i>U</i>', { size: 15, color: C.slate });
    s.sym(X(fe, T131 / 2), Y(fe, SHM.E) - 9, '<i>K</i>', { size: 15 });
    s.place([
      { t: 'Total energy, constant', hi: true, p: [X(fe, 6.55), Y(fe, SHM.E)], at: [[W - 4, 196, 'end'], [W - 4, 192, 'end']] },
    ]);
    return s;
  },
  check() {
    const fx = FX, fe = FE, ts = samples(0, T131, 720);
    const xr = ts.map((t) => vOf(fx, Y(fx, x131(t))));
    const Kr = ts.map((t) => vOf(fe, Y(fe, K131(t)))), Ur = ts.map((t) => vOf(fe, Y(fe, U131(t))));
    const sumOk = Kr.every((k, i) => close(k + Ur[i], SHM.E, 1e-9));
    const halfPeriod = ts.every((t) => close(K131(t + T131 / 2), K131(t), 1e-9) && close(U131(t + T131 / 2), U131(t), 1e-9)) && !close(K131(T131 / 4), K131(0));
    // count the K = U crossings in one period by sign changes of K − U
    let n = 0;
    for (let i = 1; i < ts.length; i++) if (Math.sign(K131(ts[i]) - U131(ts[i])) !== Math.sign(K131(ts[i - 1]) - U131(ts[i - 1]))) n++;
    const avg = (fn: (t: number) => number) => ts.slice(1).reduce((a, t, i) => a + ((fn(t) + fn(ts[i])) / 2) * (t - ts[i]), 0) / T131;
    const peaksU = [T131 / 4, (3 * T131) / 4];
    return [
      [`x = A sin ωt with A = ${SHM.A} cm, ω = ${SHM.w} rad s⁻¹: it starts at the mean position, reaches +A at T/4 and −A at 3T/4, and is back at 0 after T = 2π/ω = ${fmt(T131, 2)} s (read back from the drawing)`, close(xr[0], 0, 1e-9) && close(xr[180], SHM.A, 1e-9) && close(xr[540], -SHM.A, 1e-9) && close(xr[720], 0, 1e-9) && xr[1] > 0],
      [`The T arrow spans exactly one period: ${fmt(uOf(fx, X(fx, T131)), 3)} s`, close(uOf(fx, X(fx, T131)) - uOf(fx, X(fx, 0)), T131, 1e-9)],
      [`K + U = E = ${SHM.E} J at every one of ${ts.length} sampled instants (read back from the drawing): the dashed line`, sumOk],
      ['K and U each repeat every T/2: two full cycles per period (frequency 2f)', halfPeriod],
      [`K and U cross ${n} times in one period, at ωt = π/4, 3π/4, 5π/4, 7π/4 (${cross131.map((t) => fmt(t, 2)).join(', ')} s), each time at E/2 = ${fmt(SHM.E / 2, 1)} J`, n === 4 && cross131.every((t) => close(K131(t), SHM.E / 2, 1e-12) && close(U131(t), SHM.E / 2, 1e-12))],
      [`At each crossing |x| = A/√2 = ${fmt(SHM.A / Math.SQRT2, 4)} cm (where ½kx² = ½·½kA²)`, cross131.every((t) => close(Math.abs(x131(t)), SHM.A / Math.SQRT2, 1e-12))],
      ['U = E x²/A²: U is largest (= E) at the extremes x = ±A, where K = 0; K = E at the mean position, where U = 0', peaksU.every((t) => close(U131(t), SHM.E, 1e-12) && close(K131(t), 0, 1e-12) && close(Math.abs(x131(t)), SHM.A, 1e-12)) && close(K131(0), SHM.E) && ts.every((t) => close(U131(t), (SHM.E * x131(t) ** 2) / SHM.A ** 2, 1e-12))],
      [`Averaged over the period, ⟨K⟩ = ${fmt(avg(K131), 4)} J and ⟨U⟩ = ${fmt(avg(U131), 4)} J, each E/2`, close(avg(K131), SHM.E / 2, 1e-4) && close(avg(U131), SHM.E / 2, 1e-4)],
      ['The U label sits over U’s first peak (T/4) and the K label over K’s peak at T/2', close(U131(T131 / 4), SHM.E) && close(K131(T131 / 2), SHM.E)],
      clearCheck(fig131.draw(fig131.cases[0])),
    ];
  },
};

/* ===================================================================== */
/* Figure 13.2 · simple pendulum; springs in series and parallel (topic 03) */
/* ===================================================================== */
type Case132 = { chip: string; cap: string; kind: 'pend' | 'series' | 'parallel' };
/** The pendulum: pivot P, string L px at θ to the vertical (the book draws about 30°), the weight mg drawn `Wt` px. */
const PEN = { P: [140, 46] as P, L: 186, th: 30 * D2R, Wt: 92, bob: 11 };
const penGeo = () => {
  const { P, L, th, bob } = PEN;
  const u: P = [Math.sin(th), Math.cos(th)]; // along the string, away from the pivot
  const t: P = [-Math.cos(th), Math.sin(th)]; // across the string, back toward the lowest point
  const B: P = add(P, u, L);
  const edge = (d: P): P => add(B, d, bob);
  const low: P = [P[0], P[1] + L];
  return { u, t, B, edge, low };
};
/** Example 3's springs (p. 903): k₁ = 6 and k₂ = 3 N m⁻¹ with a 2 kg block. */
const EX3 = { k1: 6, k2: 3, m: 2 };
const SP = { ceil: 52, x: 170, mid: 150, bottom: 248, blockH: 34, blockW: 44, px1: 126, px2: 214, pBottom: 214, barW: 170, barH: 38 };
const CAP132 = {
  pend: '(a) A simple pendulum displaced by a small angle <i>θ</i>: the weight <i>mg</i> resolves into <i>mg</i> cos <i>θ</i> along the string (directed away from the pivot) and <i>mg</i> sin <i>θ</i> along the arc (directed toward the lowest point).',
  series: '(b) Two springs <i>k</i><sub>1</sub>, <i>k</i><sub>2</sub> in series.',
  parallel: '(c) Two springs <i>k</i><sub>1</sub>, <i>k</i><sub>2</sub> in parallel, supporting the same mass <i>m</i>.',
};
/** The springs' end points, by case: [top, bottom] of each. */
const springs132 = (kind: 'series' | 'parallel'): [P, P][] =>
  kind === 'series'
    ? [[[SP.x, SP.ceil], [SP.x, SP.mid]], [[SP.x, SP.mid], [SP.x, SP.bottom]]]
    : [[[SP.px1, SP.ceil], [SP.px1, SP.pBottom]], [[SP.px2, SP.ceil], [SP.px2, SP.pBottom]]];
/** The block each case hangs: series a small block under k₂, parallel a wide one under both. */
const block132 = (kind: 'series' | 'parallel'): Rect =>
  kind === 'series'
    ? [SP.x - SP.blockW / 2, SP.bottom, SP.x + SP.blockW / 2, SP.bottom + SP.blockH]
    : [(SP.px1 + SP.px2) / 2 - SP.barW / 2, SP.pBottom, (SP.px1 + SP.px2) / 2 + SP.barW / 2, SP.pBottom + SP.barH];
const fig132: Diagram = {
  id: 'p11-13-fig-13.2',
  topic: 2,
  name: 'Simple pendulum and spring combinations',
  cases: [
    { chip: 'Simple pendulum', kind: 'pend', cap: CAP132.pend },
    { chip: 'Springs in series', kind: 'series', cap: CAP132.series },
    { chip: 'Springs in parallel', kind: 'parallel', cap: CAP132.parallel },
  ] as Case132[],
  draw(c: Case132) {
    const s = new Sketch(W, 340);
    if (c.kind === 'pend') {
      const { P, L, th, Wt, bob } = PEN, { u, t, B, edge } = penGeo();
      support(s, P[0] - 56, P[0] + 56, P[1]);
      guide(s, P, [P[0], P[1] + L]);
      path(s, [P, add(B, u, -bob)], { w: 1.7 });
      // the θ arc between the vertical and the string
      const ar = 44, a0 = Math.PI / 2, a1 = Math.PI / 2 - th;
      path(s, samples(a0, a1, 24).map((a): P => [P[0] + ar * Math.cos(a), P[1] + ar * Math.sin(a)]), { w: 1.2, color: C.ink });
      s.sym(P[0] + 60 * Math.cos((a0 + a1) / 2), P[1] + 60 * Math.sin((a0 + a1) / 2) + 5, 'θ', { italic: true });
      const mid = add(P, u, L * 0.42);
      s.sym(mid[0] + 14 * Math.cos(th), mid[1] - 14 * Math.sin(th) + 5, '<i>L</i>', { anchor: 'start' });
      // the bob's path: the arc of radius L from the bob back to the lowest point
      path(s, samples(th, 0, 40).map((a): P => [P[0] + L * Math.sin(a), P[1] + L * Math.cos(a)]), { color: C.slate, w: 1.3, dash: 'dash' });
      // the weight and its two components, each drawn from the bob's edge along its own line
      const g0 = edge([0, 1]), c0 = edge(u), s0 = edge(t);
      const cosL = Wt * Math.cos(th), sinL = Wt * Math.sin(th);
      const cTip = add(c0, u, cosL), sTip = add(s0, t, sinL), gTip: P = [g0[0], g0[1] + Wt];
      arrow(s, c0, cTip, { color: C.grey, w: 1.6, dash: true });
      arrow(s, g0, gTip, { w: 1.9 });
      arrow(s, s0, sTip, { color: C.mari, w: 2.6 });
      s.point(B[0], B[1], bob, `<circle cx="${r1(B[0])}" cy="${r1(B[1])}" r="${bob}" fill="#fff" stroke="${C.ink}" stroke-width="1.8"/>`);
      keep(s, samples(0, 2 * Math.PI, 36).map((a): P => [B[0] + bob * Math.cos(a), B[1] + bob * Math.sin(a)]));
      s.dot(P[0], P[1], 3);
      s.sym(gTip[0] - 8, gTip[1] - 2, '<i>mg</i>', { anchor: 'end' });
      s.sym(cTip[0] + 4, cTip[1] + 18, '<i>mg</i> cos <i>θ</i>', { size: 14, color: C.slate, anchor: 'start' });
      s.sym(sTip[0] - 2, sTip[1] + 20, '<i>mg</i> sin <i>θ</i>', { size: 14, color: C.amber, anchor: 'end' });
      s.place([
        { t: 'Restoring component', hi: true, p: add(s0, t, sinL * 0.5), at: [[8, 168, 'start'], [8, 160, 'start']] },
        { t: 'Pivot', p: P, own: P, at: [[8, 72, 'start'], [8, 80, 'start']] },
        { t: 'Bob', p: add(B, [0.7, -0.7], bob), own: B, at: [[W - 6, 150, 'end'], [W - 6, 160, 'end']] },
      ]);
      return s;
    }
    const kind = c.kind, sp = springs132(kind), blk = block132(kind);
    const x0 = kind === 'series' ? SP.x - 60 : blk[0] - 6, x1 = kind === 'series' ? SP.x + 60 : blk[2] + 6;
    support(s, x0, x1, SP.ceil);
    sp.forEach(([a, b]) => path(s, springPts(a, b, kind === 'series' ? 7 : 11), { w: 1.6 }));
    box(s, blk, { w: kind === 'parallel' ? 2.4 : 1.8, color: kind === 'parallel' ? C.mari : C.ink });
    s.sym((blk[0] + blk[2]) / 2, (blk[1] + blk[3]) / 2 + 5, '<i>m</i>', { size: 16 });
    if (kind === 'series') {
      const j = sp[0][1];
      s.point(j[0], j[1], 4, `<circle cx="${r1(j[0])}" cy="${r1(j[1])}" r="4" fill="${C.mari}"/>`);
      s.sym(SP.x + 16, (SP.ceil + SP.mid) / 2 + 5, '<i>k</i><sub>1</sub>', { size: 16, anchor: 'start' });
      s.sym(SP.x + 16, (SP.mid + SP.bottom) / 2 + 5, '<i>k</i><sub>2</sub>', { size: 16, anchor: 'start' });
      s.place([
        { t: 'Joined end to end', hi: true, p: j, own: j, at: [[14, 182, 'start'], [14, 190, 'start']] },
        { t: 'Support', p: [SP.x + 40, SP.ceil], at: [[W - 8, 68, 'end'], [W - 8, 74, 'end']] },
        { t: 'Block', p: [blk[2], (blk[1] + blk[3]) / 2], at: [[W - 40, 300, 'end'], [W - 30, 300, 'end']] },
      ]);
    } else {
      s.sym(SP.px1 - 14, (SP.ceil + SP.pBottom) / 2 + 5, '<i>k</i><sub>1</sub>', { size: 16, anchor: 'end' });
      s.sym(SP.px2 + 14, (SP.ceil + SP.pBottom) / 2 + 5, '<i>k</i><sub>2</sub>', { size: 16, anchor: 'start' });
      s.place([
        { t: 'Same mass, held by both', hi: true, p: [(blk[0] + blk[2]) / 2 + 40, blk[3]], at: [[W / 2 + 40, 290, 'middle'], [W / 2 + 40, 296, 'middle']] },
        { t: 'Support', p: [x0 + 24, SP.ceil], at: [[8, 66, 'start'], [8, 72, 'start']] },
      ]);
    }
    return s;
  },
  check(c: Case132) {
    if (c.kind === 'pend') {
      const { P, L, th, Wt } = PEN, { u, t, B, low } = penGeo();
      const mg: P = [0, 1], cosPart: P = [u[0] * Math.cos(th), u[1] * Math.cos(th)], sinPart: P = [t[0] * Math.sin(th), t[1] * Math.sin(th)];
      const g = Math.PI ** 2, T = (l: number) => 2 * Math.PI * Math.sqrt(l / g);
      const thetas = [2, 5, 10].map((d) => d * D2R);
      return [
        [`The string is L long and at θ = ${fmt(th / D2R, 1)}° to the dashed vertical (read back from the drawing)`, close(len(P, B), L, 1e-9) && close(Math.atan2(B[0] - P[0], B[1] - P[1]), th, 1e-12)],
        ['mg cos θ lies along the string, directed away from the pivot', close(dotp(u, mg), Math.cos(th), 1e-12) && dotp(u, [B[0] - P[0], B[1] - P[1]]) > 0],
        ['mg sin θ is at right angles to the string (along the arc) and points back toward the lowest point', close(dotp(t, u), 0, 1e-12) && close(dotp(t, mg), Math.sin(th), 1e-12) && t[0] < 0 && B[0] > low[0]],
        [`The components are ${fmt(Wt * Math.cos(th), 1)} and ${fmt(Wt * Math.sin(th), 1)} px of mg's ${Wt} px, and add back to mg`, close(cosPart[0] + sinPart[0], mg[0], 1e-12) && close(cosPart[1] + sinPart[1], mg[1], 1e-12)],
        ['The dashed path is the arc of radius L about the pivot, from the bob to the lowest point straight below the pivot', close(len(P, low), L, 1e-9) && close(low[0], P[0], 1e-12)],
        [`For small θ, sin θ ≈ θ (within ${fmt((1 - Math.sin(10 * D2R) / (10 * D2R)) * 100, 2)}% at 10°): F = −mg sin θ ≈ −(mg/L)s, so ω² = g/L`, thetas.every((a) => (a - Math.sin(a)) / a < 0.006)],
        [`Example 1: L = 1.0 m, g = π² gives T = 2π√(L/g) = ${fmt(T(1), 3)} s; with 4L, ${fmt(T(4), 3)} s`, close(T(1), 2, 1e-12) && close(T(4), 4, 1e-12)],
        clearCheck(fig132.draw(c)),
      ];
    }
    const kind = c.kind, sp = springs132(kind), blk = block132(kind);
    const { k1, k2, m } = EX3;
    if (kind === 'series') {
      const keff = (k1 * k2) / (k1 + k2), T = 2 * Math.PI * Math.sqrt(m / keff);
      const F = 1, x1 = F / k1, x2 = F / k2;
      return [
        ['k₁ hangs from the support, k₂ from the end of k₁, and the block from the end of k₂: one chain, end to end', sp[0][0][1] === SP.ceil && close(len(sp[0][1], sp[1][0]), 0) && sp[1][1][1] === blk[1] && sp[0][0][0] === sp[1][1][0] && close((blk[0] + blk[2]) / 2, sp[1][1][0])],
        ['So the same tension F runs through both springs, and their stretches add: x = F/k₁ + F/k₂', close(F / (x1 + x2), keff, 1e-12)],
        [`1/k_eff = 1/k₁ + 1/k₂: Example 3's 6 and 3 N m⁻¹ give k_eff = ${fmt(keff, 3)} N m⁻¹, softer than either`, close(keff, 2, 1e-12) && keff < Math.min(k1, k2)],
        [`T = 2π√(m/k_eff) = ${fmt(T, 2)} s for the 2 kg block (the book's 6.28 s)`, fmt(T, 2) === '6.28'],
        clearCheck(fig132.draw(c)),
      ];
    }
    const keff = k1 + k2, T = 2 * Math.PI * Math.sqrt(m / keff);
    const tops = sp.map(([a]) => a[1]), bots = sp.map(([, b]) => b[1]);
    return [
      ['Both springs hang from the same support and hold the same block, side by side', tops.every((y) => y === SP.ceil) && bots.every((y) => y === blk[1]) && sp.every(([a]) => a[0] > blk[0] && a[0] < blk[2])],
      ['They are drawn the same length, so both stretch by the same x: F = −(k₁ + k₂)x', close(bots[0] - tops[0], bots[1] - tops[1])],
      [`k_eff = k₁ + k₂: Example 3's 6 and 3 N m⁻¹ give ${keff} N m⁻¹, stiffer than either`, keff === 9 && keff > Math.max(k1, k2)],
      [`T = 2π√(m/k_eff) = ${fmt(T, 2)} s for the 2 kg block (the book's 2.96 s), shorter than in series`, fmt(T, 2) === '2.96' && T < 2 * Math.PI * Math.sqrt(m / ((k1 * k2) / (k1 + k2)))],
      clearCheck(fig132.draw(c)),
    ];
  },
};

/* ===================================================================== */
/* Figure 13.3 · resonance curves, and the decaying oscillation (topic 04) */
/* ===================================================================== */
/**
 * The book's curves, read off its grid: ω₀ = 1 rad s⁻¹, F₀/k = 1 mm (so F₀/m = 1
 * mm s⁻² with k/m = ω₀²); small damping b/m = 0.07 s⁻¹ (its peak, F₀/(bω₀), is
 * the 14.3 mm the book marks with a dot), large damping b/m = 0.4 s⁻¹ (a 2.55
 * mm peak at 0.96 rad s⁻¹). The inset decays with the small damping's b/m: its
 * successive peaks fall by e^(−bT′/2m) ≈ 0.80, as the book's do.
 */
const RES = { w0: 1, F0m: 1, small: 0.07, large: 0.4 };
const Amp = (bm: number) => (w: number) => RES.F0m / Math.sqrt((w * w - RES.w0 ** 2) ** 2 + (bm * w) ** 2);
type Case133 = { chip: string; cap: string; kind: 'res' | 'decay' };
const F133: Frame = { ox: 46, oy: 292, sx: 138, sy: 14.6 };
/** The inset: t in s (0 to 60), x in units of A₀. */
const FD: Frame = { ox: 40, oy: 128, sx: 4.6, sy: 92 };
const DEC = { bm: RES.small, t1: 56 };
const wD = Math.sqrt(RES.w0 ** 2 - (DEC.bm / 2) ** 2);
const env = (t: number) => Math.exp((-DEC.bm * t) / 2);
const xD = (t: number) => env(t) * Math.cos(wD * t);
/** The largest value of fn on [a, b] and where it is, by a fine scan. */
function peak(fn: (u: number) => number, a: number, b: number, n = 20000) {
  let best = -Infinity, at0 = a;
  for (let i = 0; i <= n; i++) { const u = a + ((b - a) * i) / n, v = fn(u); if (v > best) { best = v; at0 = u; } }
  return { u: at0, v: best };
}
/** The full width of a peak at 1/√2 of its height (the half-power width). */
function halfPower(fn: (u: number) => number, a: number, b: number) {
  const pk = peak(fn, a, b), lvl = pk.v / Math.SQRT2;
  const cross = (lo: number, hi: number) => { for (let i = 0; i < 60; i++) { const m = (lo + hi) / 2; if ((fn(m) - lvl) * (fn(lo) - lvl) > 0) lo = m; else hi = m; } return (lo + hi) / 2; };
  return cross(pk.u, b) - cross(a, pk.u);
}
const fig133: Diagram = {
  id: 'p11-13-fig-13.3',
  topic: 3,
  name: 'Resonance curves and damped decay',
  cases: [
    { chip: 'Resonance curves', kind: 'res', cap: 'Resonance curves (amplitude <i>A</i> versus driving frequency <i>ω</i>) for small damping (tall, sharp peak, high <i>Q</i>) and large damping (short, broad peak, low <i>Q</i>); the vertical dashed line marks <i>ω</i> = <i>ω</i><sub>0</sub>.' },
    { chip: 'Inset: decay', kind: 'decay', cap: 'Inset: a decaying oscillation <i>x</i>(<i>t</i>) inside its exponential envelope ±<i>A</i><sub>0</sub> exp(−<i>bt</i>/(2<i>m</i>)).' },
  ] as Case133[],
  draw(c: Case133) {
    if (c.kind === 'res') {
      const s = new Sketch(W, 366);
      const f = F133, top = 17.2;
      s.vec(f.ox, f.oy, f.ox, Y(f, top), { color: C.grey, w: 1.3 });
      s.vec(f.ox, f.oy, X(f, 2.12), f.oy, { color: C.grey, w: 1.3 });
      s.sym(f.ox + 8, Y(f, top) + 4, '<i>A</i> (mm)', { size: 14, anchor: 'start' });
      vTicks(s, f, f.ox, [[0, '0'], [1, '<i>F</i><sub>0</sub>/<i>k</i>'], [4, '4'], [8, '8'], [12, '12'], [16, '16']]);
      hTicks(s, f, f.oy, [0, 0.5, 1, 1.5, 2].map((u): Tick => [u, u.toFixed(1)]));
      s.sym(W - 6, f.oy + 38, '<i>ω</i> (rad s<sup>−1</sup>)', { size: 14, anchor: 'end' });
      path(s, [[X(f, RES.w0), f.oy], [X(f, RES.w0), Y(f, 16.2)]], { color: C.slate, w: 1.2, dash: 'dash', free: true });
      s.sym(X(f, RES.w0), Y(f, 16.2) - 7, '<i>ω</i> = <i>ω</i><sub>0</sub>', { size: 14, color: C.slate });
      curve(s, f, Amp(RES.large), 0, 2, { w: 2.2 }, 400);
      curve(s, f, Amp(RES.small), 0, 2, { color: C.mari, w: 2.6 }, 1600);
      const pk: P = at(f, RES.w0, RES.F0m / (RES.small * RES.w0));
      s.dot(pk[0], pk[1], 3.2);
      // each tag sits below the point it names, its line rising to it, and its remark below the tag
      const wS = 0.96, wL = 0.85;
      s.place([
        { t: 'Small damping', hi: true, p: at(f, wS, Amp(RES.small)(wS)), at: [[52, 166, 'start'], [52, 170, 'start']] },
        { t: 'Large damping', p: at(f, wL, Amp(RES.large)(wL)), at: [[X(f, wL) - 20, 318, 'start'], [X(f, wL) - 30, 318, 'start']] },
      ]);
      const tS = s.tags.find((g) => g.name === 'Small damping'), tL = s.tags.find((g) => g.name === 'Large damping');
      if (tS) { s.sym(tS.rect[0] + 2, tS.rect[3] + 18, '(sharp resonance,', { size: 13, anchor: 'start', color: C.slate }); s.sym(tS.rect[0] + 2, tS.rect[3] + 34, 'high <i>Q</i>)', { size: 13, anchor: 'start', color: C.slate }); }
      if (tL) s.sym(tL.rect[0] + 2, tL.rect[3] + 18, '(flat resonance, low <i>Q</i>)', { size: 13, anchor: 'start', color: C.slate });
      return s;
    }
    const s = new Sketch(W, 250);
    const f = FD;
    s.vec(f.ox, Y(f, -1.22), f.ox, Y(f, 1.22), { color: C.grey, w: 1.3 });
    s.vec(f.ox, f.oy, X(f, 63.5), f.oy, { color: C.grey, w: 1.3 });
    s.sym(f.ox - 10, Y(f, 1.1), '<i>x</i>', { size: 15, anchor: 'end' });
    s.sym(W - 6, f.oy + 44, '<i>t</i> (s)', { size: 14, anchor: 'end' });
    s.sym(f.ox - 8, Y(f, 1) + 5, '<i>A</i><sub>0</sub>', { size: 14, anchor: 'end' });
    curve(s, f, xD, 0, DEC.t1, { w: 1.7 }, 1800);
    curve(s, f, env, 0, DEC.t1, { color: C.mari, w: 2, dash: 'dash' }, 300);
    curve(s, f, (t) => -env(t), 0, DEC.t1, { color: C.mari, w: 2, dash: 'dash' }, 300);
    s.sym(X(f, 12), Y(f, env(12)) - 14, '±<i>A</i><sub>0</sub> <i>e</i><sup>−<i>bt</i>/(2<i>m</i>)</sup>', { size: 15, anchor: 'start', color: C.amber });
    s.place([
      { t: 'Exponential envelope', hi: true, p: at(f, 41, env(41)), at: [[W - 8, 8, 'end'], [W - 8, 4, 'end']] },
    ]);
    return s;
  },
  check(c: Case133) {
    if (c.kind === 'res') {
      const f = F133, S = Amp(RES.small), L = Amp(RES.large);
      const pS = peak(S, 0.5, 1.5), pL = peak(L, 0.5, 1.5);
      const wr = (bm: number) => Math.sqrt(RES.w0 ** 2 - (bm * bm) / 2);
      const Q = (bm: number) => RES.w0 / bm;
      const wS = halfPower(S, 0.5, 1.5), wL = halfPower(L, 0.2, 1.9);
      const drawnS0 = vOf(f, Y(f, S(0))), drawnL0 = vOf(f, Y(f, L(0)));
      const dash = uOf(f, X(f, RES.w0));
      return [
        [`Both curves start at A = F₀/k = F₀/(mω₀²) = ${fmt(drawnS0, 3)} mm at ω → 0 (read back from the drawing): the stiffness-controlled limit`, close(drawnS0, RES.F0m / RES.w0 ** 2, 1e-9) && close(drawnL0, RES.F0m / RES.w0 ** 2, 1e-9)],
        [`The dashed line stands at ω = ω₀ = √(k/m) = ${fmt(dash, 3)} rad s⁻¹`, close(dash, RES.w0, 1e-12)],
        [`Small damping (b/m = ${RES.small} s⁻¹) peaks at ω = ${fmt(pS.u, 4)} rad s⁻¹ = √(ω₀² − b²/2m²) = ${fmt(wr(RES.small), 4)}, at ${fmt(pS.v, 2)} mm (the book's tall peak, about 14 mm)`, close(pS.u, wr(RES.small), 2e-4) && close(pS.v, 14.3, 0.05)],
        [`Large damping (b/m = ${RES.large} s⁻¹) peaks lower and further below ω₀: ω = ${fmt(pL.u, 3)} = ${fmt(wr(RES.large), 3)} rad s⁻¹, at ${fmt(pL.v, 2)} mm (the book's short peak, about 2.5 mm)`, close(pL.u, wr(RES.large), 2e-4) && close(pL.v, 2.55, 0.01) && pL.u < pS.u && pS.u < RES.w0],
        [`The dot marks A_res ≈ F₀/(bω₀) = ${fmt(RES.F0m / (RES.small * RES.w0), 2)} mm at ω₀, the curve's own value there`, close(S(RES.w0), RES.F0m / (RES.small * RES.w0), 1e-9) && Math.abs(S(RES.w0) - pS.v) / pS.v < 0.001],
        [`Q = mω₀/b: ${fmt(Q(RES.small), 1)} for small damping (high Q), ${fmt(Q(RES.large), 1)} for large (low Q)`, Q(RES.small) > 5 * Q(RES.large)],
        [`Smaller damping, sharper peak: half-power widths ${fmt(wS, 3)} and ${fmt(wL, 3)} rad s⁻¹ (≈ b/m each)`, wS < wL && close(wS, RES.small, 0.003) && Math.abs(wL - RES.large) / RES.large < 0.1],
        [`Away from resonance the two agree, both damping-free: at ω = 2 rad s⁻¹ they are ${fmt(S(2), 3)} and ${fmt(L(2), 3)} mm ≈ F₀/(m(ω² − ω₀²)) = ${fmt(RES.F0m / 3, 3)} mm`, Math.abs(S(2) - L(2)) < 0.02 && Math.abs(S(2) - RES.F0m / 3) < 0.01],
        clearCheck(fig133.draw(c)),
      ];
    }
    const f = FD, ts = samples(0, DEC.t1, 3000);
    const inside = ts.every((t) => Math.abs(xD(t)) <= env(t) + 1e-12);
    const Td = (2 * Math.PI) / wD, maxima = [0, 1, 2, 3, 4, 5, 6, 7, 8].map((n) => n * Td);
    const ratios = maxima.slice(1).map((t, i) => xD(t) / xD(maxima[i]));
    const drawnEnv = ts.map((t) => vOf(f, Y(f, env(t))));
    const tHalf = (2 / DEC.bm) * Math.log(2);
    return [
      [`The oscillation x = A₀e^(−bt/2m) cos ω′t (b/m = ${DEC.bm} s⁻¹) never leaves its envelope ±A₀e^(−bt/2m)`, inside],
      ['It touches the envelope at each maximum (t = nT′): x = A₀e^(−bt/2m) there', maxima.every((t) => close(xD(t), env(t), 1e-12))],
      [`The envelope, read back from the drawing, is e^(−bt/2m): ${fmt(drawnEnv[0], 3)} at 0, ${fmt(drawnEnv[1500], 3)} at ${DEC.t1 / 2} s, ${fmt(drawnEnv[3000], 3)} at ${DEC.t1} s`, ts.every((t, i) => close(drawnEnv[i], Math.exp((-DEC.bm * t) / 2), 1e-9))],
      [`Successive maxima fall by the same factor e^(−bT′/2m) = ${fmt(ratios[0], 4)} each period (logarithmic decrement ${fmt(-Math.log(ratios[0]), 3)})`, ratios.every((r) => close(r, Math.exp((-DEC.bm * Td) / 2), 1e-12)) && close(ratios[0], 0.8, 0.01)],
      [`ω′ = √(ω₀² − (b/2m)²) = ${fmt(wD, 5)} rad s⁻¹ ≈ ω₀: light damping barely slows it`, wD < RES.w0 && RES.w0 - wD < 1e-3],
      [`Equal times for equal fractional drops: the amplitude halves every (2m/b) ln 2 = ${fmt(tHalf, 1)} s`, [0, 7, 19].every((t) => close(env(t + tHalf) / env(t), 0.5, 1e-12))],
      [`Energy ∝ A² falls as e^(−bt/m): to ${fmt(env(DEC.t1) ** 2 * 100, 2)}% by ${DEC.t1} s, while the amplitude is at ${fmt(env(DEC.t1) * 100, 1)}%`, close(env(DEC.t1) ** 2, Math.exp(-DEC.bm * DEC.t1), 1e-12)],
      clearCheck(fig133.draw(c)),
    ];
  },
};

/* ===================================================================== */
/* Figure 13.4 · U-tube, floating cylinder, Earth tunnel (topic 05)        */
/* ===================================================================== */
type Case134 = { chip: string; cap: string; kind: 'utube' | 'float' | 'tunnel' };
const CAP134 = 'Three standard SHM systems.';
/** The U-tube: arms of equal bore; the liquid at rest at y0, displaced y px (left down, right up). */
const UT = { L0: 84, L1: 114, R0: 214, R1: 244, top: 46, ib: 214, ob: 244, y0: 116, y: 30 };
const utGeo = () => {
  const { L0, L1, R0, R1, ib, ob, y0, y } = UT;
  const yL = y0 + y, yR = y0 - y, cL = (L0 + L1) / 2, cR = (R0 + R1) / 2, cB = (ib + ob) / 2;
  /** The liquid's length along the tube's centre line, from one surface round to the other. */
  const column = (a: number, b: number) => (cB - a) + (cR - cL) + (cB - b);
  return { yL, yR, cL, cR, cB, column };
};
/** Example 3 (p. 919): a 1.0 m mercury column. */
const EXU = { L: 1.0, g: 9.8 };
/** The float, drawn to scale (k px per cm) with Example 2's h = 16 cm; pushed down x = 4 cm; height H = 27 cm. */
const FL = { k: 6.4, h: 16, H: 27, x: 4, surf: 116, left: 136, right: 204 };
const flGeo = () => {
  const { k, h, H, x, surf } = FL;
  const eqBot = surf + h * k, eqTop = eqBot - H * k, bot = eqBot + x * k, topY = bot - H * k;
  return { eqBot, eqTop, bot, topY };
};
const EXF = { h: 0.16, g: 9.8 };
/** The Earth: radius R px; the body at r = 0.5R; mg at the surface would be `mg` px. */
const EA = { O: [180, 150] as P, R: 108, r: 0.5, mg: 76, Re: 6.4e6, g: 9.8 };
const eaGeo = () => {
  const { O, R, r, mg } = EA;
  const B: P = [O[0] + r * R, O[1]];
  const Fv: P = [-(mg / R) * (B[0] - O[0]), 0]; // −(mg/R) r: toward the centre, ∝ r
  return { B, Fv };
};
const fig134: Diagram = {
  id: 'p11-13-fig-13.4',
  topic: 4,
  name: 'Three standard SHM systems',
  cases: [
    { chip: 'U-tube', kind: 'utube', cap: `${CAP134} (a) U-tube: one liquid surface is pushed down by <i>y</i> and the other rises by <i>y</i>, so the height difference is 2<i>y</i>; <i>L</i> is the total length of the liquid column.` },
    { chip: 'Floating cylinder', kind: 'float', cap: `${CAP134} (b) A cylinder floating in liquid, pushed down by <i>x</i> from its equilibrium submerged depth <i>h</i> by an applied force <i>F</i>; the extra buoyant force <i>Aρgx</i> acts upward.` },
    { chip: 'Earth tunnel', kind: 'tunnel', cap: `${CAP134} (c) A tunnel along a diameter of the Earth (radius <i>R</i>): at distance <i>r</i> from the centre the restoring force is <i>mg r</i>/<i>R</i>, directed toward the centre.` },
  ] as Case134[],
  draw(c: Case134) {
    const s = new Sketch(W, c.kind === 'utube' ? 316 : 330);
    if (c.kind === 'utube') {
      const { L0, L1, R0, R1, top, ib, ob, y0 } = UT, g = utGeo();
      path(s, [[L0, top], [L0, ob], [R1, ob], [R1, top]], { w: 2.4 });
      path(s, [[L1, top], [L1, ib], [R0, ib], [R0, top]], { w: 2.4 });
      path(s, [[L0, g.yL], [L1, g.yL]], { w: 2.2 });
      path(s, [[R0, g.yR], [R1, g.yR]], { w: 2.2 });
      path(s, [[L0, y0], [L1, y0]], { color: C.slate, w: 1.1, dash: 'dash' });
      path(s, [[R0, y0], [R1, y0]], { color: C.slate, w: 1.1, dash: 'dash' });
      // y in each arm, between the rest level and the surface
      measure(s, [g.cL, y0 + 2], [g.cL, g.yL - 2], C.slate);
      measure(s, [g.cR, g.yR + 2], [g.cR, y0 - 2], C.slate);
      s.sym(L1 + 8, (y0 + g.yL) / 2 + 5, '<i>y</i>', { size: 15, anchor: 'start' });
      s.sym(R0 - 8, (y0 + g.yR) / 2 + 5, '<i>y</i>', { size: 15, anchor: 'end' });
      // 2y: from the right surface's level down to the left surface
      guide(s, [L0 - 3, g.yR], [54, g.yR]);
      guide(s, [L0 - 3, g.yL], [54, g.yL]);
      measure(s, [60, g.yR], [60, g.yL], C.mari);
      s.sym(52, (g.yR + g.yL) / 2 + 5, '2<i>y</i>', { size: 16, anchor: 'end', color: C.amber });
      s.sym((L0 + R1) / 2, 300, '<i>L</i> (total liquid column)', { size: 15 });
      s.place([
        { t: 'Height difference', hi: true, p: [60, g.yR + 6], at: [[6, 6, 'start'], [6, 4, 'start']] },
        { t: 'Rest level', p: [R1 - 6, y0], at: [[W - 4, 136, 'end'], [W - 4, 144, 'end']] },
        { t: 'Liquid', p: [(L1 + R0) / 2, (ib + ob) / 2], at: [[(L1 + R0) / 2, 254, 'middle'], [(L1 + R0) / 2, 256, 'middle']] },
      ]);
      return s;
    }
    if (c.kind === 'float') {
      const { left, right, surf } = FL, g = flGeo(), cx = (left + right) / 2;
      path(s, [[52, surf], [left - 2, surf]], { color: C.slate, w: 1.6 });
      path(s, [[right + 2, surf], [292, surf]], { color: C.slate, w: 1.6 });
      box(s, [left, g.topY, right, g.bot], { w: 2.2 });
      path(s, [[left, g.topY], [left, g.eqTop], [right, g.eqTop], [right, g.topY]], { color: C.slate, w: 1.2, dash: 'dash' });
      arrow(s, [cx, 12], [cx, g.topY - 1], { w: 2 });
      s.sym(cx + 10, 30, '<i>F</i>', { size: 16, anchor: 'start' });
      // h: from the surface to the equilibrium bottom
      guide(s, [left - 3, g.eqBot], [100, g.eqBot]);
      measure(s, [108, surf + 2], [108, g.eqBot], C.slate);
      s.sym(98, (surf + g.eqBot) / 2 + 5, '<i>h</i>', { size: 16, anchor: 'end' });
      // x: from the equilibrium bottom down to where the bottom is now
      guide(s, [right + 3, g.eqBot], [246, g.eqBot]);
      guide(s, [right + 3, g.bot], [246, g.bot]);
      pinch(s, [232, g.eqBot], [232, g.bot]);
      s.sym(252, (g.eqBot + g.bot) / 2 + 5, '<i>x</i>', { size: 16, anchor: 'start' });
      arrow(s, [cx, g.bot + 50], [cx, g.bot + 4], { color: C.mari, w: 2.6 });
      s.sym(cx + 12, g.bot + 40, '<i>Aρgx</i>', { size: 16, color: C.amber, anchor: 'start' });
      s.place([
        { t: 'Extra buoyant force', hi: true, p: [cx, g.bot + 26], at: [[8, g.bot + 46, 'start'], [8, g.bot + 52, 'start']] },
        { t: 'Equilibrium position', p: [cx - 20, g.eqTop], at: [[8, 6, 'start'], [8, 4, 'start']] },
        { t: 'Liquid surface', p: [272, surf], at: [[W - 8, 132, 'end'], [W - 8, 140, 'end']] },
      ]);
      return s;
    }
    const { O, R } = EA, g = eaGeo();
    ring(s, O, R, { w: 2.2 });
    path(s, [[O[0] - R, O[1]], [O[0] + R, O[1]]], { color: C.slate, w: 1.4 });
    const rEnd = add(O, [Math.cos(-135 * D2R), Math.sin(-135 * D2R)], R);
    path(s, [O, rEnd], { color: C.slate, w: 1.3 });
    s.sym(rEnd[0] - 6, rEnd[1] - 6, '<i>R</i>', { size: 16, anchor: 'end' });
    arrow(s, [g.B[0] - 5, g.B[1]], [g.B[0] - 5 + g.Fv[0], g.B[1]], { color: C.mari, w: 2.6 });
    s.dot(O[0], O[1], 3);
    s.dot(g.B[0], g.B[1], 4);
    s.sym((O[0] + g.B[0]) / 2, O[1] - 9, '<i>r</i>', { size: 16 });
    s.sym(g.B[0] - 38, O[1] + 22, '<i>mg r</i>/<i>R</i>', { size: 15, color: C.amber });
    const res = resultBlock(s, ['<i>g</i>(<i>r</i>) = <i>g r</i>/<i>R</i>', '<i>T</i> = 2π√(<i>R</i>/<i>g</i>) ≈ 84.6 min'], { size: 15 });
    s.place(
      [
        { t: 'Restoring force', hi: true, p: [g.B[0] - 9, O[1]], at: [[W - 6, 10, 'end'], [W - 6, 6, 'end']] },
        { t: 'Body', p: g.B, own: g.B, at: [[W - 6, 42, 'end'], [W - 6, 46, 'end']] },
        { t: 'Centre', p: O, own: O, at: [[4, 214, 'start'], [4, 222, 'start']] },
        { t: 'Tunnel', p: [O[0] - R * 0.75, O[1]], at: [[4, 162, 'start'], [4, 168, 'start']] },
        { t: 'Earth', p: add(O, [Math.cos(-120 * D2R), Math.sin(-120 * D2R)], R), at: [[8, 10, 'start'], [8, 6, 'start']] },
      ],
      [res]
    );
    return s;
  },
  check(c: Case134) {
    if (c.kind === 'utube') {
      const { L0, L1, R0, R1, y0, y } = UT, g = utGeo();
      const rest = g.column(y0, y0), now = g.column(g.yL, g.yR);
      const T = 2 * Math.PI * Math.sqrt(EXU.L / (2 * EXU.g));
      // restoring force per unit displacement, (ρgA)(yL − yR)/y, over the moving mass ρA·L: ω²/g in px⁻¹
      const w2g = (g.yL - g.yR) / y / now;
      return [
        [`Equal bores (${L1 - L0} px and ${R1 - R0} px): the left surface drops ${g.yL - y0} px and the right rises ${y0 - g.yR} px, the same y`, L1 - L0 === R1 - R0 && g.yL - y0 === y && y0 - g.yR === y],
        [`So the height difference is 2y: ${g.yL - g.yR} px`, g.yL - g.yR === 2 * y],
        [`The liquid's length along the tube is the same before and after: L = ${rest} px = ${now} px (no liquid is lost or gained)`, close(rest, now)],
        [`The unbalanced column 2y weighs (2y)Aρg and pushes back toward the rest level; the moving mass is LAρ, so ω²/g = (2y/y)/L = ${fmt(w2g * now, 3)}/L: ω² = 2g/L`, close(w2g * now, 2, 1e-12) && g.yL > g.yR],
        [`Example 3: L = 1.0 m gives T = 2π√(L/2g) = ${fmt(T, 2)} s, whatever the liquid`, fmt(T, 2) === '1.42'],
        clearCheck(fig134.draw(c)),
      ];
    }
    if (c.kind === 'float') {
      const { k, h, H, x, surf } = FL, g = flGeo();
      // from the drawing: the extra depth per unit push, and the mass Aρh in px of depth
      const hm = (g.eqBot - surf) / k / 100, extra = (g.bot - g.eqBot) / (x * k);
      const T = 2 * Math.PI * Math.sqrt(hm / (extra * EXF.g));
      return [
        [`To scale (${k} px per cm): at equilibrium the submerged depth is h = ${fmt((g.eqBot - surf) / k, 2)} cm (Example 2's 16 cm) of a ${fmt((g.eqBot - g.eqTop) / k, 1)} cm cylinder`, close((g.eqBot - surf) / k, h, 1e-9) && close((g.eqBot - g.eqTop) / k, H, 1e-9)],
        [`Pushed down by x = ${fmt((g.bot - g.eqBot) / k, 2)} cm: the top (solid against the dashed equilibrium outline) moves the same ${fmt((g.topY - g.eqTop) / k, 2)} cm`, close((g.bot - g.eqBot) / k, x, 1e-9) && close(g.topY - g.eqTop, g.bot - g.eqBot, 1e-9)],
        [`Now ${fmt((g.bot - surf) / k, 1)} cm is submerged, h + x: the buoyant force grows by Aρg(h + x) − Aρgh = Aρgx, upward (opposite to x)`, close((g.bot - surf) / k, h + x, 1e-9)],
        ['At equilibrium mg = Aρgh, so m = Aρh; each unit of push adds one unit of submerged depth, so k = Aρg and ω² = g/h, whatever A and ρ', close(extra, 1, 1e-12) && close(hm, EXF.h, 1e-12)],
        [`Example 2: T = 2π√(h/g) = ${fmt(T, 3)} s ≈ 0.80 s for the drawn h = 16 cm`, fmt(T, 2) === '0.8'],
        clearCheck(fig134.draw(c)),
      ];
    }
    const { O, R, r, mg, Re, g: gE } = EA, g = eaGeo();
    const T = 2 * Math.PI * Math.sqrt(Re / gE);
    const rr = (g.B[0] - O[0]) / R, gr = (gE * rr ** 3) / rr ** 2;
    return [
      [`The body is in the tunnel (on the diameter) at r = ${fmt(rr, 2)} R from the centre`, close(g.B[1], O[1]) && close(rr, r) && rr < 1],
      [`The force arrow is (mg/R) r long: ${fmt(Math.abs(g.Fv[0]), 1)} px = ${fmt(r, 2)} × mg (${mg} px at the surface), ∝ r`, close(Math.abs(g.Fv[0]), (mg * (g.B[0] - O[0])) / R, 1e-9)],
      ['It points from the body toward the centre, opposite to r: F = −(mg/R) r', g.Fv[0] < 0 && close(g.Fv[1], 0) && g.B[0] - 5 + g.Fv[0] > O[0]],
      [`Only the sphere inside r pulls (uniform Earth, M_enc = M(r/R)³): g(r) = g(r/R)³(R/r)² = ${fmt(gr / gE, 2)} g at the drawn r, and the arrow is that fraction of mg`, close(gr / gE, rr, 1e-12) && close(Math.abs(g.Fv[0]) / mg, gr / gE, 1e-12)],
      [`T = 2π√(R/g) = ${fmt(T, 0)} s = ${fmt(T / 60, 1)} min with R = 6.4 × 10⁶ m, g = 9.8 m s⁻² (the book's 84.6 min; one way, ${fmt(T / 120, 1)} min)`, fmt(T / 60, 1) === '84.6' && fmt(T / 120, 1) === '42.3'],
      clearCheck(fig134.draw(c)),
    ];
  },
};

export const DIAGRAMS_PHYSICS_11_13: Diagram[] = [fig131, fig132, fig133, fig134];
