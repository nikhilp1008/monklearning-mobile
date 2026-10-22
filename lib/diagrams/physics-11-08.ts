import { C, Rect, Sketch, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * PHYSICS CLASS 11, CHAPTER 8 (Mechanical Properties of Solids): every figure
 * of the Master Reference book, redrawn. The chapter's drawings are its two
 * numbered figures, each printed on a "CHAPTER 8 · FIGURES" page (Figure 8.1
 * on p. 551, Figure 8.2 on p. 572). It has no unnumbered drawings: pp. 547–598
 * were checked page by page, Additional Topics A–F included (the rest is text,
 * typeset equations, boxed answers, rules and one table, p. 580).
 *
 * Both figures are stress–strain graphs, drawn from one computed curve, never
 * by eye: a straight Hooke's-law line from O to the proportional limit P, a
 * bend that keeps rising to the elastic limit E, the yield point, a short
 * plateau, strain hardening up to the peak (ultimate tensile strength) and the
 * fall to fracture. Each `check` samples the drawn curve and recomputes what
 * the figure states: O–P is straight with slope Y, the five points come in the
 * book's order, the peak is the highest stress, the brittle line's area is a
 * small fraction of the ductile one's, and the hysteresis loop's area is the
 * loading work minus the unloading work.
 */

const W = 340;
type P = [number, number];
const close = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) < tol;
const fmt = (n: number, d = 2) => String(+n.toFixed(d)).replace('-', '−');

/* ---------- graph frame and drawing helpers ---------- */
/** Where ε = 0, σ = 0 sits on the drawing, and how many px one unit is along each axis. */
type Frame = { ox: number; oy: number; sx: number; sy: number };
const X = (f: Frame, e: number) => f.ox + e * f.sx;
const Y = (f: Frame, s: number) => f.oy - s * f.sy;
const at = (f: Frame, e: number, s: number): P => [X(f, e), Y(f, s)];
/** Back from the drawing to the physics. */
const eOf = (f: Frame, x: number) => (x - f.ox) / f.sx;
const sOf = (f: Frame, y: number) => (f.oy - y) / f.sy;

type Stroke = { color?: string; w?: number; dash?: 'dash' | 'dot' };
const dashOf = (d?: Stroke['dash']) => (d === 'dash' ? ' stroke-dasharray="6 4"' : d === 'dot' ? ' stroke-dasharray="1.5 3.5"' : '');
/** An open line through points: ink, rounded joins. */
function path(s: Sketch, pts: P[], o: Stroke = {}) {
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ');
  s.add(`<path d="${d}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}" stroke-linejoin="round" stroke-linecap="round"${dashOf(o.dash)}/>`);
}
/** σ(ε) drawn as a smooth line, sampled finely. */
function curve(s: Sketch, f: Frame, fn: (e: number) => number, e0: number, e1: number, o: Stroke = {}) {
  const n = 160, pts: P[] = [];
  for (let i = 0; i <= n; i++) { const e = e0 + ((e1 - e0) * i) / n; pts.push(at(f, e, fn(e))); }
  path(s, pts, o);
}
/** The two axes, grey with arrowheads; their names in STIX ("stress σ" at the top, "strain ε" under the right end). */
function axes(s: Sketch, f: Frame, eMax: number, sMax: number) {
  s.vec(f.ox, f.oy, X(f, eMax), f.oy, { color: C.grey, w: 1.3 });
  s.vec(f.ox, f.oy, f.ox, Y(f, sMax), { color: C.grey, w: 1.3 });
  s.sym(f.ox + 9, Y(f, sMax) + 8, 'stress <i>σ</i>', { size: 14, anchor: 'start' });
  s.sym(X(f, eMax), f.oy + 22, 'strain <i>ε</i>', { size: 14, anchor: 'end' });
}
/**
 * The area between two graphs (or a graph and the strain axis), drawn as thin
 * vertical slivers: the book's shading, never a fill. `skip` keeps them off a
 * label.
 */
function slivers(s: Sketch, f: Frame, top: (e: number) => number, bot: (e: number) => number, e0: number, e1: number, o: { color?: string; gap?: number; skip?: Rect[] } = {}) {
  const gap = o.gap ?? 6, x0 = X(f, e0), x1 = X(f, e1);
  for (let x = x0 + gap / 2; x < x1 - 0.5; x += gap) {
    const e = eOf(f, x), ya = Y(f, top(e)) + 1.8, yb = Y(f, bot(e)) - 1.8;
    if (yb - ya < 2) continue;
    let segs: [number, number][] = [[ya, yb]];
    for (const r of o.skip ?? []) {
      if (x <= r[0] || x >= r[2]) continue;
      segs = segs.flatMap(([a, b]): [number, number][] => {
        if (b <= r[1] || a >= r[3]) return [[a, b]];
        const out: [number, number][] = [];
        if (r[1] - a > 2) out.push([a, r[1]]);
        if (b - r[3] > 2) out.push([r[3], b]);
        return out;
      });
    }
    segs.forEach(([a, b]) => s.line(x, a, x, b, { color: o.color ?? C.grey, w: 0.9 }));
  }
}
/** ∫ fn dε on [a, b], Simpson's rule (n even). */
function simpson(fn: (e: number) => number, a: number, b: number, n = 2000) {
  const h = (b - a) / n;
  let t = fn(a) + fn(b);
  for (let i = 1; i < n; i++) t += fn(a + i * h) * (i % 2 ? 4 : 2);
  return (t * h) / 3;
}
const samples = (a: number, b: number, n = 400) => Array.from({ length: n + 1 }, (_, i) => a + ((b - a) * i) / n);

/* ===================================================================== */
/* The ductile metal's stress–strain curve (both figures)                 */
/* ===================================================================== */
/**
 * The book's five milestones, in schematic units (strain ε, stress σ; "not to
 * scale"): P proportional limit, E elastic limit, Yd yield point, D the end of
 * the yield plateau, U ultimate tensile strength (peak), F fracture.
 */
const DUC = { P: [2.2, 4.6] as P, E: [3.4, 5.7] as P, Yd: [4.4, 6.2] as P, D: [5.6, 6.3] as P, U: [9.6, 10] as P, F: [12, 8] as P };
/** Young's modulus: the slope of O–P. */
const YM = DUC.P[1] / DUC.P[0];
/** The slope of the straight run E → yield point. */
const S1 = (DUC.Yd[1] - DUC.E[1]) / (DUC.Yd[0] - DUC.E[0]);
/**
 * P → E: σ = σP + S1·d + (Y − S1)·τ·tanh(d/τ), d = ε − εP. It leaves P with
 * slope Y (no corner), bends over and meets the E → yield line with its slope;
 * τ is solved so that it passes exactly through E.
 */
const TAU = (() => {
  const d = DUC.E[0] - DUC.P[0], need = (DUC.E[1] - DUC.P[1] - S1 * d) / (YM - S1);
  let lo = 1e-4, hi = 5;
  for (let i = 0; i < 200; i++) { const m = (lo + hi) / 2; if (m * Math.tanh(d / m) < need) lo = m; else hi = m; }
  return (lo + hi) / 2;
})();
function duct(e: number): number {
  const { P: p, E, Yd, D, U, F } = DUC;
  if (e <= p[0]) return YM * e;
  if (e <= E[0]) { const d = e - p[0]; return p[1] + S1 * d + (YM - S1) * TAU * Math.tanh(d / TAU); }
  if (e <= Yd[0]) return E[1] + S1 * (e - E[0]);
  if (e <= D[0]) return Yd[1] + ((D[1] - Yd[1]) * (e - Yd[0])) / (D[0] - Yd[0]);
  // strain hardening: rises from the plateau to the peak, flat at the peak
  if (e <= U[0]) return D[1] + (U[1] - D[1]) * Math.sin((Math.PI / 2) * ((e - D[0]) / (U[0] - D[0])));
  // necking: falls from the peak (flat there) to fracture
  return U[1] - (U[1] - F[1]) * ((e - U[0]) / (F[0] - U[0])) ** 2;
}
/** Checks shared by both figures: the curve is the book's ductile curve. */
function ductChecks(): Check[] {
  const { P: p, E, Yd, D, U, F } = DUC;
  const pts = [p, E, Yd, U, F];
  const onCurve = pts.every(([e, s]) => close(duct(e), s, 1e-6));
  const hooke = samples(0, p[0], 100).every((e) => close(duct(e), YM * e, 1e-9));
  const departs = samples(p[0] + 0.01, F[0], 300).every((e) => duct(e) < YM * e);
  const joins = [p[0], E[0], Yd[0], D[0], U[0]].every((e) => close(duct(e - 1e-9), duct(e + 1e-9), 1e-6));
  const all = samples(0, F[0], 2400).map((e) => [e, duct(e)] as P);
  const peak = all.reduce((a, b) => (b[1] > a[1] ? b : a));
  const rising = samples(0, U[0], 1200).every((e, i, a) => i === 0 || duct(e) >= duct(a[i - 1]) - 1e-12);
  const falling = samples(U[0], F[0], 400).every((e, i, a) => i === 0 || duct(e) < duct(a[i - 1]));
  const slopeE = (duct(E[0] + 1e-6) - duct(E[0] - 1e-6)) / 2e-6;
  return [
    ['P, E, the yield point, the peak and fracture all lie on the drawn curve', onCurve],
    [`O–P is straight (Hooke's law): σ = Yε at every sampled point, slope Y = ${fmt(YM, 3)}`, hooke],
    ['Beyond P the curve falls below the Hooke line: stress is no longer proportional to strain', departs],
    [`P → E bends over without a corner: it leaves P with slope Y and reaches E with slope ${fmt(slopeE, 3)} ≈ the E → yield slope ${fmt(S1, 3)}`, close(slopeE, S1, 0.01)],
    ['The curve is unbroken at every join', joins],
    ['In the book\'s order along the strain axis: P, then E, then the yield point, then the peak, then fracture', p[0] < E[0] && E[0] < Yd[0] && Yd[0] < D[0] && D[0] < U[0] && U[0] < F[0]],
    ['Stress rises (never falls) from O all the way to the peak', rising && p[1] < E[1] && E[1] < Yd[1] && Yd[1] <= D[1] && D[1] < U[1]],
    [`The peak is the highest stress on the curve: max σ = ${fmt(peak[1], 3)} at ε = ${fmt(peak[0], 2)} (U at ε = ${U[0]})`, close(peak[1], U[1], 1e-6) && Math.abs(peak[0] - U[0]) < 0.01],
    ['After the peak the stress falls until fracture, the last point of the curve', falling && F[1] < U[1]],
  ];
}

/* ===================================================================== */
/* Figure 8.1 · stress–strain curve for a ductile metal (topic 01)        */
/* ===================================================================== */
const F81: Frame = { ox: 30, oy: 282, sx: 24, sy: 19 };
const fig81: Diagram = {
  id: 'p11-08-fig-8.1',
  topic: 0,
  name: 'Stress–strain curve of a ductile metal',
  cases: [{ chip: 'Stress–strain curve', cap: 'Stress–strain curve for a ductile metal (schematic, not to scale). <i>O</i>–<i>P</i> is the linear (proportional) region with slope <i>Y</i>; <i>E</i> is the elastic limit; then come the yield point, the plastic region up to the ultimate tensile strength (peak), and fracture. The elastic region is shaded marigold and the plastic region grey.' }],
  draw() {
    const s = new Sketch(W, 318);
    const f = F81, { P: p, E, Yd, U, F } = DUC;
    const slopeAt: P = [f.ox + 16, f.oy - 13];
    // the slope label sits inside the elastic region, right of O–P
    s.sym(slopeAt[0], slopeAt[1], 'slope = <i>Y</i>', { size: 13, anchor: 'start', color: C.amber });
    // a wide margin: Android's STIX runs wider than the estimate, and the hatching ran into the Y
    const skip: Rect[] = s.labels.map((l) => [l.rect[0] - 6, l.rect[1] - 4, l.rect[2] + 6, l.rect[3] + 4]);
    slivers(s, f, duct, () => 0, 0, E[0], { color: C.mari, gap: 5, skip });
    slivers(s, f, duct, () => 0, E[0], F[0], { gap: 7 });
    path(s, [at(f, E[0], E[1]), at(f, E[0], 0)], { color: C.slate, w: 1, dash: 'dot' });
    path(s, [at(f, F[0], F[1]), at(f, F[0], 0)], { color: C.slate, w: 1, dash: 'dot' });
    axes(s, f, 12.5, 12.3);
    curve(s, f, duct, 0, F[0], { w: 2.4 });
    const dots = [p, E, Yd, U, F].map(([e, v]) => at(f, e, v));
    dots.forEach(([x, y]) => s.dot(x, y, 3.6));
    s.sym(f.ox - 6, f.oy + 16, '<i>O</i>', { size: 15, anchor: 'end' });
    s.sym(dots[0][0] - 9, dots[0][1] + 2, '<i>P</i>', { size: 15, anchor: 'end' });
    s.sym(dots[1][0] - 7, dots[1][1] - 9, '<i>E</i>', { size: 15, anchor: 'end' });
    s.place([
      // P's tag above E's, and E's tag clear of P's line: stacked the other way round, the
      // line up to "Elastic limit" ran through "Proportional limit" (the audit now catches that)
      { t: 'Proportional limit', p: dots[0], own: dots[0], at: [[8, 68, 'start'], [8, 66, 'start']] },
      { t: 'Elastic limit', p: dots[1], own: dots[1], at: [[dots[0][0] + 8, 96, 'start'], [dots[0][0] + 6, 98, 'start']] },
      // under the plateau, where the rising curve cannot run into it
      { t: 'Yield point', p: dots[2], own: dots[2], at: [[dots[2][0] + 14, 175, 'start'], [dots[2][0] + 14, 178, 'start']] },
      { t: 'Ultimate tensile strength', p: dots[3], own: dots[3], at: [[dots[3][0], 34, 'middle'], [W - 8, 34, 'end'], [W - 8, 46, 'end']] },
      { t: 'Fracture', p: dots[4], own: dots[4], at: [[W - 4, 150, 'end'], [W - 4, 160, 'end']] },
      { t: 'Plastic region (E to fracture)', p: at(f, 9.2, 6.6), at: [[W - 4, 206, 'end'], [W - 4, 200, 'end']] },
      { t: 'Elastic region (O to E)', hi: true, p: at(f, E[0] * 0.85, duct(E[0] * 0.85) * 0.55), at: [[X(f, E[0]) + 14, 244, 'start'], [X(f, E[0]) + 14, 248, 'start']] },
    ]);
    return s;
  },
  check() {
    const f = F81, { E, F } = DUC;
    const elastic = simpson(duct, 0, E[0]), total = simpson(duct, 0, F[0]);
    const pPx = at(f, DUC.P[0], DUC.P[1]);
    const drawnSlope = ((f.oy - pPx[1]) / f.sy) / ((pPx[0] - f.ox) / f.sx);
    return [
      ...ductChecks(),
      [`The drawn O–P line, read back from the drawing, has slope ${fmt(drawnSlope, 3)} = Y`, close(drawnSlope, YM, 1e-9)],
      [`The marigold slivers run from O to E (ε = 0 to ${E[0]}), the grey ones from E to fracture (ε = ${E[0]} to ${F[0]}), each up to the curve`, E[0] > 0 && F[0] > E[0]],
      [`Area under the curve = energy absorbed per unit volume: ${fmt(elastic, 2)} up to E, ${fmt(total, 2)} up to fracture (a ductile metal absorbs most of it plastically)`, total > elastic && elastic / total < 0.2],
      [`The dotted drop lines stand at E (ε = ${fmt(eOf(f, X(f, E[0])), 2)}) and at fracture (ε = ${fmt(eOf(f, X(f, F[0])), 2)}), from the curve to the axis`, close(sOf(f, Y(f, duct(F[0]))), F[1], 1e-9)],
    ];
  },
};

/* ===================================================================== */
/* Figure 8.2 · ductile vs brittle, and an elastomer's loop (topic 04)    */
/* ===================================================================== */
/** (a) The brittle material: straight (Hooke's law) all the way to fracture at B, steeper than the metal. */
const BRIT = { Y: 3.5, sB: 8.4 };
const brit = (e: number) => BRIT.Y * e;
const eB = BRIT.sB / BRIT.Y;
const FA: Frame = { ox: 30, oy: 250, sx: 24, sy: 17 };
/** (b) The elastomer, in units of its largest strain and stress: loading above, unloading below, meeting at O and at the turn. */
const RUB = { em: 1, sm: 1 };
const load = (u: number) => 0.3 * u + 0.7 * u ** 3;
const unload = (u: number) => 0.1 * u + 0.9 * u ** 5;
/** Where the direction marks sit (from u to u'): up the loading curve, back down the unloading one. */
const MARKS = { load: [0.72, 0.76] as P, unload: [0.62, 0.58] as P };
const FB: Frame = { ox: 30, oy: 244, sx: 268, sy: 200 };
const LOOP_TAG = 'Loop area = energy lost as heat';
/** The least room (px) the loop's tag must leave to either curve. */
const LOOP_GAP = 4;
/**
 * How far a tag's pill (a 22 px high capsule: a segment with radius 11) stays
 * from the drawn curve fn, sampled finely: negative means the curve runs into it.
 */
function capsuleGap(r: Rect, f: Frame, fn: (u: number) => number) {
  const cy = (r[1] + r[3]) / 2, rad = (r[3] - r[1]) / 2, a: P = [r[0] + rad, cy], b: P = [r[2] - rad, cy];
  return Math.min(...samples(0, 1, 800).map((u) => {
    const [x, y] = at(f, u, fn(u)), k = Math.max(0, Math.min(1, (x - a[0]) / (b[0] - a[0])));
    return Math.hypot(x - (a[0] + k * (b[0] - a[0])), y - cy) - rad;
  }));
}
const CAP82 = 'Stress–strain behaviour compared (schematic).';
type Case82 = { chip: string; cap: string; part: 'a' | 'b' };
const fig82: Diagram = {
  id: 'p11-08-fig-8.2',
  topic: 3,
  name: 'Ductile, brittle and rubber-like materials',
  cases: [
    { chip: 'Ductile vs brittle', part: 'a', cap: `${CAP82} (a) A ductile metal rises steeply, shows a clear yield point and a long plastic region up to its ultimate strength, then fractures, so the area under its curve is large; a brittle material rises steeply and fractures with almost no plastic region, so its area is small.` },
    { chip: 'Elastomer: hysteresis loop', part: 'b', cap: `${CAP82} (b) An elastomer (rubber) follows a curved, non-linear path to very large strain; its unloading curve lies below the loading curve, and the shaded loop between them is the energy lost as heat per cycle.` },
  ],
  draw(c: Case82) {
    if (c.part === 'a') {
      const s = new Sketch(W, 304);
      const f = FA, { F } = DUC;
      slivers(s, f, brit, () => 0, 0, eB, { color: C.mari, gap: 5 });
      slivers(s, f, duct, () => 0, eB, F[0], { gap: 7 });
      path(s, [at(f, eB, BRIT.sB), at(f, eB, 0)], { color: C.slate, w: 1, dash: 'dot' });
      path(s, [at(f, F[0], F[1]), at(f, F[0], 0)], { color: C.slate, w: 1, dash: 'dot' });
      axes(s, f, 12.5, 12.6);
      curve(s, f, duct, 0, F[0], { w: 2.4 });
      path(s, [at(f, 0, 0), at(f, eB, BRIT.sB)], { color: C.mari, w: 2.6 });
      const b = at(f, eB, BRIT.sB), fr = at(f, F[0], F[1]);
      s.dot(b[0], b[1], 3.6);
      s.dot(fr[0], fr[1], 3.6);
      s.place([
        { t: 'Brittle material', hi: true, p: b, own: b, at: [[b[0] + 16, b[1] - 46, 'start'], [b[0] + 16, b[1] - 36, 'start']] },
        { t: 'Ductile metal', p: at(f, 9, duct(9)), at: [[W - 8, 26, 'end'], [W - 8, 32, 'end']] },
        { t: 'Large area (high toughness)', p: at(f, 7.4, 2.6), at: [[X(f, eB) + 22, 176, 'start'], [X(f, eB) + 22, 184, 'start']] },
        { t: 'Small area (low toughness)', p: at(f, eB * 0.72, brit(eB * 0.72) * 0.35), at: [[24, 280, 'start'], [24, 278, 'start']] },
      ]);
      return s;
    }
    const s = new Sketch(W, 300);
    const f = FB, top = at(f, RUB.em, RUB.sm);
    slivers(s, f, load, unload, 0, RUB.em, { color: C.mari, gap: 5 });
    axes(s, f, 1.08, 1.04);
    curve(s, f, load, 0, RUB.em, { w: 2.4 });
    curve(s, f, unload, 0, RUB.em, { w: 2.2, dash: 'dash' });
    // direction marks: up the loading curve, back down the unloading curve
    const uL = MARKS.load, uU = MARKS.unload;
    s.vec(...at(f, uL[0], load(uL[0])), ...at(f, uL[1], load(uL[1])), { w: 2.2 });
    s.vec(...at(f, uU[0], unload(uU[0])), ...at(f, uU[1], unload(uU[1])), { w: 2.2 });
    s.point(top[0], top[1], 3, '');
    s.place([
      { t: 'Loading (upper curve)', p: at(f, 0.42, load(0.42)), at: [[24, 120, 'start'], [24, 132, 'start']] },
      { t: 'Unloading (lower curve, dashed)', p: at(f, 0.5, unload(0.5)), at: [[40, 274, 'start'], [48, 274, 'start']] },
      // the widest tag: it sits just under the "stress σ" label, where the loading curve has already turned up past its right end (see LOOP_GAP)
      { t: LOOP_TAG, hi: true, p: at(f, 0.62, (load(0.62) + unload(0.62)) / 2), at: [[f.ox + 8, 52, 'start'], [f.ox + 8, 46, 'start'], [2, 52, 'start']] },
    ]);
    return s;
  },
  check(c: Case82) {
    if (c.part === 'a') {
      const { F, Yd, D } = DUC;
      const aD = simpson(duct, 0, F[0]), aB = simpson(brit, 0, eB);
      const straight = samples(0, eB, 50).every((e) => close(brit(e), BRIT.Y * e, 1e-12));
      return [
        ...ductChecks(),
        [`The brittle line is straight to fracture (no plastic region): σ = ${BRIT.Y}ε up to ε = ${fmt(eB, 2)}, where it ends`, straight],
        [`Both rise steeply: the brittle slope ${BRIT.Y} and the metal's slope Y = ${fmt(YM, 2)} are the steepest parts of the graph`, BRIT.Y >= YM && samples(DUC.P[0] + 0.01, F[0], 200).every((e) => (duct(e + 1e-4) - duct(e)) / 1e-4 < YM)],
        [`The metal shows a yield point and a plateau (ε ${Yd[0]} → ${D[0]}) before hardening`, D[0] > Yd[0] && Math.abs(D[1] - Yd[1]) < 0.2],
        [`The brittle line lies above the metal's curve until it breaks (it is the stiffer, stronger-at-first one)`, samples(0.01, eB, 100).every((e) => brit(e) >= duct(e))],
        [`The brittle material breaks at a stress (${BRIT.sB}) below the metal's peak (${DUC.U[1]}) and a far smaller strain (${fmt(eB, 2)} vs ${F[0]})`, BRIT.sB < DUC.U[1] && eB < F[0] / 3],
        [`Areas (energy per unit volume to fracture = toughness): metal ${fmt(aD, 1)}, brittle ${fmt(aB, 1)} = ½σε; the metal's is ${fmt(aD / aB, 1)} times larger`, close(aB, 0.5 * BRIT.sB * eB, 1e-9) && aD / aB > 5],
      ];
    }
    const wLoad = simpson(load, 0, 1), wUn = simpson(unload, 0, 1), loop = simpson((u) => load(u) - unload(u), 0, 1);
    const below = samples(0.001, 0.999, 500).every((u) => unload(u) < load(u));
    const nonlinear = samples(0.05, 0.95, 20).some((u) => !close(load(u), u, 0.02));
    const h = 1e-3, stiffens = samples(h, 1 - h, 100).every((u) => load(u + h) - 2 * load(u) + load(u - h) > 0);
    const tag = fig82.draw(c).tags.find((t) => t.name === LOOP_TAG);
    const gapL = tag ? capsuleGap(tag.rect, FB, load) : -1, gapU = tag ? capsuleGap(tag.rect, FB, unload) : -1;
    return [
      ['Loading and unloading start together at O and meet at the largest strain', close(load(0), 0) && close(unload(0), 0) && close(load(1), RUB.sm) && close(unload(1), RUB.sm)],
      ['The loading path is curved, not a straight line (its slope keeps growing): rubber does not follow Hooke\'s law', nonlinear && stiffens],
      ['The dashed unloading curve lies below the loading curve everywhere between the ends', below],
      [`Loading work ${fmt(wLoad, 4)} − unloading work ${fmt(wUn, 4)} = ${fmt(wLoad - wUn, 4)} = the loop's area ${fmt(loop, 4)} (per unit volume, in σ_max·ε_max): the energy lost as heat each cycle`, close(loop, wLoad - wUn, 1e-9) && loop > 0],
      ['The marks run up the loading curve and back down the unloading curve (a cycle)', MARKS.load[1] > MARKS.load[0] && MARKS.unload[1] < MARKS.unload[0]],
      [`The loop's tag sits clear of both curves: ${fmt(gapL, 1)} px from the loading curve, ${fmt(gapU, 1)} px from the unloading one (at least ${LOOP_GAP})`, gapL >= LOOP_GAP && gapU >= LOOP_GAP],
    ];
  },
};

export const DIAGRAMS_PHYSICS_11_08: Diagram[] = [fig81, fig82];
