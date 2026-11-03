import { C, Rect, Sketch, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * PHYSICS CLASS 11, CHAPTER 2 (Motion in a Straight Line): every figure of
 * the Master Reference book, redrawn.
 *
 * The chapter is graphs, so every graph here is drawn from the motion the
 * book states: the corners of a v–t graph come from its phases, a crossing
 * from solving v = 0, a derived v–t graph from adding up the a–t graph. Each
 * `check` turns the drawn geometry back into physics (pixels into seconds,
 * metres per second, areas into metres) and compares it with the book.
 */

const W = 340;
type P = [number, number];

/* ===================================================================== */
/* Shared: a graph frame, its axes, lines and the slivers of an area      */
/* ===================================================================== */

/** Where t = 0, value = 0 sits on the drawing, and how many px one unit is along each axis. */
type Frame = { ox: number; oy: number; sx: number; sy: number };
const X = (f: Frame, t: number) => f.ox + t * f.sx;
const Y = (f: Frame, v: number) => f.oy - v * f.sy;
/** Back from the drawing to the physics. */
const tOf = (f: Frame, x: number) => (x - f.ox) / f.sx;
const vOf = (f: Frame, y: number) => (f.oy - y) / f.sy;
const at = (f: Frame, t: number, v: number): P => [X(f, t), Y(f, v)];
const close = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) < tol;
const fmt = (n: number, d = 2) => String(+n.toFixed(d)).replace('-', '−');

/** An open line through points: ink, rounded joins. */
function path(s: Sketch, pts: P[], o: { color?: string; w?: number; dash?: 'dash' | 'dot' } = {}) {
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ');
  const dash = o.dash === 'dash' ? ' stroke-dasharray="5 4"' : o.dash === 'dot' ? ' stroke-dasharray="1.5 3.5"' : '';
  s.add(`<path d="${d}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}" stroke-linejoin="round" stroke-linecap="round"${dash}/>`);
}
/** A function of t drawn as a smooth line, sampled finely. */
function curve(s: Sketch, f: Frame, fn: (t: number) => number, t0: number, t1: number, o: { color?: string; w?: number; dash?: 'dash' | 'dot' } = {}) {
  const n = 80, pts: P[] = [];
  for (let i = 0; i <= n; i++) { const t = t0 + ((t1 - t0) * i) / n; pts.push(at(f, t, fn(t))); }
  path(s, pts, o);
}

type Tick = [number, string];
/**
 * The two axes of a graph, in grey with arrowheads, named at their tips; ticks
 * and their values in STIX. `tTickY` moves the time values off the axis line
 * (for graphs that dip below it).
 */
function axes(s: Sketch, f: Frame, o: { t: [number, number]; v: [number, number]; tName: string; vName: string; tTicks?: Tick[]; vTicks?: Tick[]; tTickY?: number; vNameAt?: 'side' | 'top' }) {
  const xa = X(f, o.t[0]), xb = X(f, o.t[1]), ya = Y(f, o.v[0]), yb = Y(f, o.v[1]);
  s.vec(xa, f.oy, xb, f.oy, { color: C.grey, w: 1.3 });
  s.vec(f.ox, ya, f.ox, yb, { color: C.grey, w: 1.3 });
  if (o.tName) s.sym(xb + 6, f.oy + 5, o.tName, { size: 14, anchor: 'start' });
  if (o.vName) s.sym(f.ox + 9, yb + 6, o.vName, { size: 14, anchor: 'start' });
  (o.vTicks ?? []).forEach(([v, txt]) => {
    s.line(f.ox - 4, Y(f, v), f.ox, Y(f, v), { color: C.grey, w: 1.2 });
    s.sym(f.ox - 7, Y(f, v) + 4.5, txt, { size: 13, anchor: 'end', color: C.slate });
  });
  (o.tTicks ?? []).forEach(([t, txt]) => {
    s.line(X(f, t), f.oy, X(f, t), f.oy + 4, { color: C.grey, w: 1.2 });
    if (txt) s.sym(X(f, t), o.tTickY ?? f.oy + 18, txt, { size: 13, color: C.slate });
  });
}

/**
 * The area between a graph and the time axis, drawn as thin vertical slivers
 * (each one a velocity × Δt, the book's own picture of why area is
 * displacement). Never a fill. `skip` keeps the slivers off a sign or label.
 */
function slivers(s: Sketch, f: Frame, fn: (t: number) => number, t0: number, t1: number, skip: Rect[] = [], gap = 7) {
  const x0 = X(f, t0), x1 = X(f, t1);
  for (let x = x0 + gap / 2; x < x1 - 1; x += gap) {
    const yv = Y(f, fn(tOf(f, x)));
    const lo = Math.min(f.oy, yv) + 1.6, hi = Math.max(f.oy, yv) - 1.6;
    if (hi - lo < 2) continue;
    let segs: [number, number][] = [[lo, hi]];
    for (const r of skip) {
      if (x <= r[0] || x >= r[2]) continue;
      segs = segs.flatMap(([a, b]): [number, number][] => {
        if (b <= r[1] || a >= r[3]) return [[a, b]];
        const out: [number, number][] = [];
        if (r[1] - a > 2) out.push([a, r[1]]);
        if (b - r[3] > 2) out.push([r[3], b]);
        return out;
      });
    }
    segs.forEach(([a, b]) => s.line(x, a, x, b, { color: C.grey, w: 0.9 }));
  }
}
/** A + or − sign in an area, with the room the slivers leave round it. */
function sign(s: Sketch, x: number, y: number, txt: '+' | '−'): Rect {
  s.sym(x, y + 6, txt, { size: 18, color: C.slate });
  return [x - 9, y - 9, x + 9, y + 9];
}
/** A measured span: a grey line with square ends. */
function span(s: Sketch, a: P, b: P, color: string = C.slate, w = 1.3) {
  const L = Math.hypot(b[0] - a[0], b[1] - a[1]), nx = -(b[1] - a[1]) / L, ny = (b[0] - a[0]) / L, e = 5;
  s.line(a[0], a[1], b[0], b[1], { color, w });
  s.line(a[0] - nx * e, a[1] - ny * e, a[0] + nx * e, a[1] + ny * e, { color, w });
  s.line(b[0] - nx * e, b[1] - ny * e, b[0] + nx * e, b[1] + ny * e, { color, w });
}
/** Area of a polygon (shoelace), in the drawing's px². */
const polyArea = (pts: P[]) => Math.abs(pts.reduce((a, p, i) => { const q = pts[(i + 1) % pts.length]; return a + p[0] * q[1] - q[0] * p[1]; }, 0)) / 2;
/** Signed area under a piecewise-linear v–t graph between t0 and t1, in physics units (trapezoids, exact for straight pieces). */
function areaUnder(pts: [number, number][], t0: number, t1: number) {
  let A = 0;
  for (let i = 0; i < pts.length - 1; i++) {
    const [ta, va] = pts[i], [tb, vb] = pts[i + 1];
    const a = Math.max(ta, t0), b = Math.min(tb, t1);
    if (b <= a) continue;
    const vAt = (t: number) => va + ((vb - va) * (t - ta)) / (tb - ta);
    A += ((vAt(a) + vAt(b)) / 2) * (b - a);
  }
  return A;
}
/** Value of a piecewise-linear graph at t. */
function valueAt(pts: [number, number][], t: number) {
  for (let i = 0; i < pts.length - 1; i++) {
    const [ta, va] = pts[i], [tb, vb] = pts[i + 1];
    if (t >= ta && t <= tb) return va + ((vb - va) * (t - ta)) / (tb - ta);
  }
  return NaN;
}
/** Where a piecewise-linear graph crosses zero going from + to −. */
function crossing(pts: [number, number][]) {
  for (let i = 0; i < pts.length - 1; i++) {
    const [ta, va] = pts[i], [tb, vb] = pts[i + 1];
    if (va > 0 && vb < 0) return ta + (va / (va - vb)) * (tb - ta);
  }
  return NaN;
}
/** The pixel polygon between a piecewise-linear graph and the t-axis from t0 to t1 (one sign only). */
function regionPx(f: Frame, pts: [number, number][], t0: number, t1: number): P[] {
  const inner = pts.filter(([t]) => t > t0 && t < t1);
  const line: [number, number][] = [[t0, valueAt(pts, t0)], ...inner, [t1, valueAt(pts, t1)]];
  return [at(f, t0, 0), ...line.map(([t, v]) => at(f, t, v)), at(f, t1, 0)];
}
/** A drawn region's area turned back into metres. */
const metres = (f: Frame, poly: P[]) => polyArea(poly) / (f.sx * f.sy);

/* ===================================================================== */
/* Figure 2.1 · chord and tangent on an x–t curve (topic 01)              */
/* ===================================================================== */
const G21 = { f: { ox: 36, oy: 262, sx: 25, sy: 19 } as Frame, Xm: 10, tau: 4, t1: 2, t2: 6, tEnd: 10.6 };
/** A position that rises and levels off: x = X(1 − e^(−t/τ)). */
const x21 = (t: number) => G21.Xm * (1 - Math.exp(-t / G21.tau));
const v21 = (t: number) => (G21.Xm / G21.tau) * Math.exp(-t / G21.tau);
const geo21 = () => {
  const { f, t1, t2 } = G21;
  const A = at(f, t1, x21(t1)), B = at(f, t2, x21(t2));
  const m = v21(t1); // the tangent's slope, dx/dt at A
  const tan0: P = at(f, t1 - 1.5, x21(t1) - 1.5 * m), tan1: P = at(f, t1 + 2.1, x21(t1) + 2.1 * m);
  const runY = f.oy + 22, riseX = B[0] + 96;
  return { A, B, m, tan0, tan1, run: [[A[0], runY], [B[0], runY]] as [P, P], rise: [[riseX, A[1]], [riseX, B[1]]] as [P, P] };
};
const fig21: Diagram = {
  id: 'p11-02-fig-2.1',
  topic: 0,
  name: 'Chord and tangent on an x–t graph',
  cases: [{ chip: 'Chord and tangent', cap: 'An <i>x</i>–<i>t</i> curve rising and levelling off. The chord <i>AB</i> joins <i>A</i> (<i>t</i><sub>1</sub>, <i>x</i><sub>1</sub>) and <i>B</i> (<i>t</i><sub>2</sub>, <i>x</i><sub>2</sub>); its slope Δ<i>x</i>/Δ<i>t</i> is the average velocity. The tangent at <i>A</i> has slope d<i>x</i>/d<i>t</i>, the instantaneous velocity. Δ<i>t</i> and Δ<i>x</i> are the run and rise of the chord.' }],
  draw() {
    const s = new Sketch(W, 312);
    const { f } = G21, g = geo21();
    axes(s, f, { t: [-0.3, G21.tEnd + 0.6], v: [-0.5, 10.4], tName: '<i>t</i>', vName: '<i>x</i>' });
    // run and rise of the chord, with their guides
    path(s, [g.A, [g.A[0], g.run[0][1] + 4]], { color: C.grey, w: 1.1, dash: 'dot' });
    path(s, [g.B, [g.B[0], g.run[0][1] + 4]], { color: C.grey, w: 1.1, dash: 'dot' });
    path(s, [g.A, [g.rise[0][0] + 4, g.A[1]]], { color: C.grey, w: 1.1, dash: 'dot' });
    path(s, [g.B, [g.rise[0][0] + 4, g.B[1]]], { color: C.grey, w: 1.1, dash: 'dot' });
    span(s, ...g.run);
    span(s, ...g.rise);
    s.sym((g.run[0][0] + g.run[1][0]) / 2, g.run[0][1] + 19, 'Δ<i>t</i>', { size: 15, color: C.slate });
    s.sym(g.rise[0][0] + 9, (g.rise[0][1] + g.rise[1][1]) / 2 + 5, 'Δ<i>x</i>', { size: 15, color: C.slate, anchor: 'start' });
    // the curve, the chord, the tangent
    curve(s, f, x21, 0, G21.tEnd);
    path(s, [g.A, g.B], { color: C.ink, w: 1.7 });
    path(s, [g.tan0, g.tan1], { color: C.mari, w: 2.4, dash: 'dash' });
    s.dot(...g.A);
    s.dot(...g.B);
    // above the tangent, left of it: beside the dot it ran into the x-axis on Android
    s.sym(g.A[0] + 22, g.A[1] - 37, '<i>A</i> (<i>t</i><sub>1</sub>, <i>x</i><sub>1</sub>)', { size: 15, anchor: 'end' });
    s.sym(g.B[0] + 10, g.B[1] + 21, '<i>B</i> (<i>t</i><sub>2</sub>, <i>x</i><sub>2</sub>)', { size: 15, anchor: 'start' });
    const chordMid: P = [(g.A[0] + g.B[0]) / 2, (g.A[1] + g.B[1]) / 2];
    s.place([
      { t: 'Tangent: slope = instantaneous velocity', p: g.tan1, hi: true, at: [[14, 8, 'start'], [14, 40, 'start']] },
      { t: 'Chord: slope = average velocity', p: chordMid, at: [[g.A[0] + 4, g.A[1] + 16, 'start'], [g.A[0] + 4, g.A[1] + 30, 'start']] },
    ]);
    return s;
  },
  check() {
    const { f, t1, t2 } = G21, g = geo21();
    const run = tOf(f, g.run[1][0]) - tOf(f, g.run[0][0]), rise = vOf(f, g.rise[1][1]) - vOf(f, g.rise[0][1]);
    const chord = (vOf(f, g.B[1]) - vOf(f, g.A[1])) / (tOf(f, g.B[0]) - tOf(f, g.A[0]));
    const tanSlope = (vOf(f, g.tan1[1]) - vOf(f, g.tan0[1])) / (tOf(f, g.tan1[0]) - tOf(f, g.tan0[0]));
    const h = 1e-5, dxdt = (x21(t1 + h) - x21(t1 - h)) / (2 * h);
    const squeeze = (x21(t1 + 1e-4) - x21(t1)) / 1e-4;
    const levels = [0, 2, 4, 6, 8, 10].every((t) => v21(t) > 0) && [0, 2, 4, 6, 8].every((t) => v21(t + 2) < v21(t));
    return [
      ['A and B sit on the curve', close(vOf(f, g.A[1]), x21(t1)) && close(vOf(f, g.B[1]), x21(t2))],
      [`The curve rises and levels off (slope always + and shrinking, ${fmt(v21(0))} → ${fmt(v21(G21.tEnd))})`, levels],
      [`Δt is the run of the chord: ${fmt(run)} = t₂ − t₁`, close(run, t2 - t1)],
      [`Δx is the rise of the chord: ${fmt(rise)} = x₂ − x₁`, close(rise, x21(t2) - x21(t1))],
      [`The chord's slope is Δx/Δt = ${fmt(chord, 3)} (the average velocity)`, close(chord, rise / run)],
      [`The tangent goes through A with slope dx/dt = ${fmt(dxdt, 3)}`, close(tanSlope, dxdt, 1e-6) && close(vOf(f, g.tan0[1]) + tanSlope * (t1 - tOf(f, g.tan0[0])), x21(t1))],
      ['Squeezing t₂ to t₁ turns the chord slope into the tangent slope', close(squeeze, dxdt, 1e-3)],
      ['On a levelling curve the tangent at A is steeper than the chord', tanSlope > chord],
    ];
  },
};

/* ===================================================================== */
/* Figure 2.2 · reading x–t and v–t graphs (topic 02)                     */
/* ===================================================================== */
type Row22 = { tag: string; note: string; fn: (t: number) => number; hi?: boolean; tagAt: P; leadT: number; noteAt?: P };
type Case22 = { chip: string; cap: string; kind: 'xt' | 'vt' };
const R22 = { pitch: 124, top: 4, sx: 46, sy: 17, tEnd: 5 };
const frame22 = (i: number): Frame => ({ ox: 40, oy: R22.top + i * R22.pitch + 100, sx: R22.sx, sy: R22.sy });
const rows22 = (kind: 'xt' | 'vt'): Row22[] =>
  kind === 'xt'
    ? [
        { tag: 'At rest', note: '(<i>v</i> = 0)', fn: () => 2.2, tagAt: [0, 12], leadT: 0.8 },
        { tag: 'Uniform velocity', note: '(<i>a</i> = 0)', fn: (t) => 0.5 + 0.62 * t, tagAt: [0, 12], leadT: 1.2 },
        { tag: 'Positive acceleration', note: '', fn: (t) => 0.3 + 0.13 * t * t, tagAt: [0, 12], leadT: 3.2, hi: true },
      ]
    : [
        { tag: 'Constant velocity', note: '(<i>a</i> = 0)', fn: () => 2.2, tagAt: [0, 12], leadT: 0.8 },
        { tag: 'Uniform acceleration', note: '', fn: (t) => 0.7 * t, tagAt: [0, 12], leadT: 2.2 },
        { tag: 'Line crossing the t-axis', note: '', fn: (t) => 3 - 0.8 * t, tagAt: [W - 8, 20], leadT: 2.2, hi: true },
      ];
const cross22 = 3 / 0.8;
const fig22: Diagram = {
  id: 'p11-02-fig-2.2',
  topic: 1,
  name: 'Reading x–t and v–t graphs',
  cases: [
    { chip: 'x–t graphs', kind: 'xt', cap: 'Reading <i>x</i>–<i>t</i> and <i>v</i>–<i>t</i> graphs. <i>x</i>–<i>t</i>: horizontal line = at rest (<i>v</i> = 0); straight slanted line = uniform velocity (<i>a</i> = 0); upward-curving (concave-up) line = positive acceleration.' },
    { chip: 'v–t graphs', kind: 'vt', cap: '<i>v</i>–<i>t</i>: horizontal line = constant velocity (<i>a</i> = 0); straight slanted line from the origin = uniform acceleration; a line crossing the <i>t</i>-axis from positive to negative, where area above the axis counts + and area below counts −, so displacement = area above − area below.' },
  ],
  draw(c: Case22) {
    const s = new Sketch(W, 3 * R22.pitch + 22);
    const rows = rows22(c.kind);
    const vName = c.kind === 'xt' ? '<i>x</i> (m)' : '<i>v</i> (m s<sup>−1</sup>)';
    const specs: Parameters<Sketch['place']>[0] = [];
    rows.forEach((r, i) => {
      const f = frame22(i), top = R22.top + i * R22.pitch;
      const crosses = c.kind === 'vt' && i === 2;
      axes(s, f, { t: [-0.2, R22.tEnd + 0.4], v: [crosses ? -1.4 : -0.3, 4.6], tName: '<i>t</i> (s)', vName });
      if (crosses) {
        const plus = sign(s, X(f, 1.2), Y(f, 0.9), '+'), minus = sign(s, X(f, 4.72), Y(f, -0.36), '−');
        slivers(s, f, r.fn, 0, cross22, [plus]);
        slivers(s, f, r.fn, cross22, R22.tEnd, [minus]);
        s.sym(f.ox + 8, f.oy + 17, 'area above − area below', { size: 13, color: C.slate, anchor: 'start' });
        s.sym(f.ox + 8, f.oy + 33, '= displacement', { size: 13, color: C.slate, anchor: 'start' });
      }
      curve(s, f, r.fn, 0, R22.tEnd, { color: r.hi ? C.mari : C.ink, w: r.hi ? 2.4 : 1.7 });
      if (crosses) s.point(X(f, cross22), f.oy, 4, `<circle cx="${r1(X(f, cross22))}" cy="${r1(f.oy)}" r="4" fill="#fff" stroke="${C.mari}" stroke-width="2"/>`);
      // a tag either sits just right of the axis name (tagAt x = 0) or is pinned to the right edge
      const anchor = r.tagAt[0] > W / 2 ? 'end' : 'start';
      const nameEnd = f.ox + 9 + vName.replace(/<[^>]+>/g, '').length * 7;
      specs.push({ t: r.tag, p: at(f, r.leadT, r.fn(r.leadT)), hi: r.hi, at: [[r.tagAt[0] || nameEnd + 12, top + r.tagAt[1], anchor]] });
    });
    s.place(specs);
    // the meaning in brackets goes right after its tag, as in the book
    rows.forEach((r) => {
      if (!r.note) return;
      const t = s.tags.find((g) => g.name === r.tag);
      if (t) s.sym(t.rect[2] + 8, t.rect[1] + 16, r.note, { size: 14, color: C.slate, anchor: 'start' });
    });
    return s;
  },
  check(c: Case22) {
    const rows = rows22(c.kind), d1 = (fn: (t: number) => number, t: number) => (fn(t + 1e-4) - fn(t - 1e-4)) / 2e-4;
    const d2 = (fn: (t: number) => number, t: number) => (fn(t + 1e-3) - 2 * fn(t) + fn(t - 1e-3)) / 1e-6;
    const ts = [0.5, 1.5, 2.5, 3.5, 4.5];
    if (c.kind === 'xt')
      return [
        ['Horizontal x–t line: slope (velocity) is 0 everywhere', ts.every((t) => close(d1(rows[0].fn, t), 0))],
        [`Straight slanted x–t line: slope is a steady ${fmt(d1(rows[1].fn, 1))}, so a = 0`, ts.every((t) => close(d1(rows[1].fn, t), 0.62, 1e-6) && close(d2(rows[1].fn, t), 0, 1e-3))],
        ['Concave-up x–t curve: slope keeps growing, so acceleration is positive', ts.every((t) => d2(rows[2].fn, t) > 0) && d1(rows[2].fn, 4.5) > d1(rows[2].fn, 0.5)],
      ];
    const f = rows[2].fn, above = (3 * cross22) / 2, below = (0.8 * (R22.tEnd - cross22) * (R22.tEnd - cross22)) / 2;
    let integral = 0;
    for (let i = 0, n = 5000; i < n; i++) integral += f(((i + 0.5) * R22.tEnd) / n) * (R22.tEnd / n);
    return [
      ['Horizontal v–t line: slope (acceleration) is 0', ts.every((t) => close(d1(rows[0].fn, t), 0))],
      ['Slanted v–t line starts at the origin with a steady slope', close(rows[1].fn(0), 0) && ts.every((t) => close(d1(rows[1].fn, t), 0.7, 1e-6))],
      [`The third line crosses the t-axis from + to − (at t = ${fmt(cross22)})`, rows[2].fn(0) > 0 && close(rows[2].fn(cross22), 0) && rows[2].fn(R22.tEnd) < 0],
      [`Area above − area below = ${fmt(above)} − ${fmt(below)} = ${fmt(above - below)} = ∫v dt = displacement`, close(above - below, integral, 1e-6)],
    ];
  },
};

/* ===================================================================== */
/* Figure 2.3 · the scooter's v–t graph, a trapezium (topic 02, Ex. 1)    */
/* ===================================================================== */
/** The motion as the book states it: 0 → 20 m/s in 4 s, 20 m/s for 6 s, to rest in 5 s. */
const SCOOTER = { vTop: 20, up: 4, cruise: 6, down: 5 };
const pts23 = (): [number, number][] => {
  const { vTop, up, cruise, down } = SCOOTER;
  return [[0, 0], [up, vTop], [up + cruise, vTop], [up + cruise + down, 0]];
};
const F23: Frame = { ox: 40, oy: 236, sx: 16, sy: 8.8 };
const fig23: Diagram = {
  id: 'p11-02-fig-2.3',
  topic: 1,
  name: 'The scooter’s v–t graph',
  cases: [{ chip: 'A trapezium', cap: '<i>v</i>–<i>t</i> graph of the scooter (a trapezium): uniform acceleration from 0 to 20 m/s in 4 s (triangle), constant 20 m/s for 6 s (rectangle), uniform retardation to rest in 5 s (triangle).' }],
  draw() {
    const s = new Sketch(W, 300);
    const f = F23, p = pts23(), [, b, cc, d] = p;
    axes(s, f, { t: [-0.4, d[0] + 0.9], v: [-0.9, 24.5], tName: '<i>t</i> (s)', vName: '<i>v</i> (m s<sup>−1</sup>)', vTicks: [[SCOOTER.vTop, String(SCOOTER.vTop)]], tTicks: p.map(([t]) => [t, String(t)] as Tick) });
    // the three pieces, parted by grey dashed lines
    path(s, [at(f, b[0], 0), at(f, b[0], b[1])], { color: C.grey, w: 1.2, dash: 'dash' });
    path(s, [at(f, cc[0], 0), at(f, cc[0], cc[1])], { color: C.grey, w: 1.2, dash: 'dash' });
    path(s, p.map(([t, v]) => at(f, t, v)), { color: C.mari, w: 2.4 });
    const cen = (tri: [number, number][]): P => at(f, tri.reduce((a, q) => a + q[0], 0) / tri.length, tri.reduce((a, q) => a + q[1], 0) / tri.length);
    const c1 = cen([[0, 0], [b[0], b[1]], [b[0], 0]]), c3 = cen([[cc[0], 0], [cc[0], cc[1]], [d[0], 0]]), c2 = at(f, (b[0] + cc[0]) / 2, b[1] / 2);
    // each piece named from below the axis, its line rising to the middle of the piece
    const ty = f.oy + 30;
    s.place([
      { t: 'Rectangle', p: c2, at: [[c2[0], ty, 'middle']] },
      { t: 'Triangle', p: c1, at: [[c2[0] - 48, ty, 'end']] },
      { t: 'Triangle', p: c3, at: [[c2[0] + 48, ty, 'start']] },
    ]);
    return s;
  },
  check() {
    const f = F23, p = pts23(), px = p.map(([t, v]) => at(f, t, v)), back = px.map(([x, y]) => [tOf(f, x), vOf(f, y)]);
    const a = [0, 1, 2].map((i) => (back[i + 1][1] - back[i][1]) / (back[i + 1][0] - back[i][0]));
    const tri1 = metres(f, [px[0], px[1], at(f, p[1][0], 0)]), rect = metres(f, [at(f, p[1][0], 0), px[1], px[2], at(f, p[2][0], 0)]), tri2 = metres(f, [at(f, p[2][0], 0), px[2], px[3]]);
    return [
      [`Phase 1: 0 → ${fmt(back[1][1])} m/s in ${fmt(back[1][0])} s, a = ${fmt(a[0])} m/s²`, close(back[1][1], 20) && close(back[1][0], 4) && close(a[0], 5)],
      [`Phase 2: constant ${fmt(back[2][1])} m/s for ${fmt(back[2][0] - back[1][0])} s, a = ${fmt(a[1])}`, close(back[2][0] - back[1][0], 6) && close(a[1], 0)],
      [`Phase 3: to rest in ${fmt(back[3][0] - back[2][0])} s, a = ${fmt(a[2])} m/s²`, close(back[3][1], 0) && close(back[3][0] - back[2][0], 5) && close(a[2], -4)],
      ['A trapezium: the top is parallel to the time axis', close(px[1][1], px[2][1])],
      [`Areas: triangle ${fmt(tri1)} m + rectangle ${fmt(rect)} m + triangle ${fmt(tri2)} m = ${fmt(tri1 + rect + tri2)} m`, close(tri1, 40) && close(rect, 120) && close(tri2, 50) && close(metres(f, [...px]), 210)],
    ];
  },
};

/* ===================================================================== */
/* Figure 2.4 · a v–t graph that reverses at t = 8 s (topic 02, Ex. 3)    */
/* ===================================================================== */
/** 0 → 12 m/s over 0–3 s, 12 m/s until 5 s, then steadily to −4 m/s at 9 s. */
const pts24: [number, number][] = [[0, 0], [3, 12], [5, 12], [9, -4]];
const F24: Frame = { ox: 40, oy: 196, sx: 27, sy: 10.5 };
const fig24: Diagram = {
  id: 'p11-02-fig-2.4',
  topic: 1,
  name: 'A v–t graph that crosses the axis',
  cases: [{ chip: 'Reversal at 8 s', cap: '<i>v</i>–<i>t</i> graph for Example 3: velocity reverses at <i>t</i> = 8 s; net area 18 + 24 + 18 − 2 = 58 m.' }],
  draw() {
    const s = new Sketch(W, 312);
    const f = F24, tc = crossing(pts24), end = pts24[3], fn = (t: number) => valueAt(pts24, t);
    axes(s, f, { t: [-0.4, 9.8], v: [-6.2, 15.4], tName: '<i>t</i> (s)', vName: '<i>v</i> (m s<sup>−1</sup>)', vTicks: [[12, '12'], [-4, '−4']], tTicks: [[0, ''], [3, '3'], [5, '5'], [9, '']] });
    // the origin's 0 set left of the v-axis, which ran through it
    s.sym(f.ox - 7, f.oy + 18, '0', { size: 13, color: C.slate, anchor: 'end' });
    s.sym(X(f, tc) - 5, f.oy + 18, String(fmt(tc)), { size: 13, color: C.slate, anchor: 'end' });
    s.sym(X(f, end[0]), Y(f, end[1]) + 19, String(end[0]), { size: 13, color: C.slate });
    path(s, [at(f, end[0], 0), at(f, end[0], end[1])], { color: C.grey, w: 1.2, dash: 'dash' });
    const plus = sign(s, X(f, 4.1), Y(f, 5.4), '+'), minus = sign(s, X(f, 8.62), Y(f, -1.05), '−');
    slivers(s, f, fn, 0, tc, [plus]);
    slivers(s, f, fn, tc, end[0], [minus], 6);
    path(s, pts24.map(([t, v]) => at(f, t, v)));
    s.dot(...at(f, end[0], end[1]), 3);
    s.point(X(f, tc), f.oy, 4.6, `<circle cx="${r1(X(f, tc))}" cy="${r1(f.oy)}" r="4.6" fill="${C.mari}"/>`);
    s.sym(X(f, tc) + 9, f.oy - 13, `<i>t</i> = ${fmt(tc)} s`, { size: 15, anchor: 'start' });
    const res = 'Net area = 58 m';
    s.place([{ t: 'Velocity reverses', p: [X(f, tc), f.oy], hi: true, at: [[W - 8, f.oy - 132, 'end'], [W - 8, f.oy - 110, 'end']] }], [s.resultRect(res)]);
    s.result(res);
    return s;
  },
  check() {
    const f = F24, tc = crossing(pts24);
    const parts = [[0, 3], [3, 5], [5, tc], [tc, 9]].map(([a, b]) => metres(f, regionPx(f, pts24, a, b)) * Math.sign(areaUnder(pts24, a, b)));
    const net = parts.reduce((a, b) => a + b, 0), dist = parts.reduce((a, b) => a + Math.abs(b), 0);
    const slope = (pts24[3][1] - pts24[2][1]) / (pts24[3][0] - pts24[2][0]);
    return [
      [`Falling segment: 12 → −4 m/s over 4 s, slope ${fmt(slope)} m/s²`, close(slope, -4)],
      [`It crosses zero where 12 − 4(t − 5) = 0: t = ${fmt(tc)} s, where the dot is drawn`, close(tc, 8) && close(12 - 4 * (tc - 5), 0)],
      [`Areas ${parts.map((p) => fmt(p)).join(', ')} m (drawn regions measured back in metres)`, close(parts[0], 18) && close(parts[1], 24) && close(parts[2], 18) && close(parts[3], -2)],
      [`Net area = ${fmt(net)} m, the displacement; total = ${fmt(dist)} m, the distance`, close(net, 58) && close(net, areaUnder(pts24, 0, 9)) && close(dist, 62)],
    ];
  },
};

/* ===================================================================== */
/* Figure 2.5 · a–t graph, and the v–t graph built from it (topic 02)     */
/* ===================================================================== */
/** The book's a–t graph: +6 m/s² for 0–2 s, −3 m/s² for 2–8 s; the particle starts from rest. */
const ACC25: [number, number, number][] = [[0, 2, 6], [2, 8, -3]];
const a25 = (t: number) => (ACC25.find(([a, b]) => t >= a && t < b) ?? ACC25[ACC25.length - 1])[2];
/** v(t) built by adding up the area under the a–t graph, from v₀ = 0. */
function v25(t: number) {
  let v = 0;
  for (const [a, b, acc] of ACC25) v += acc * Math.max(0, Math.min(t, b) - a);
  return v;
}
/** The derived v–t corners: at every switch of a and at the end. */
const pts25 = (): [number, number][] => [0, ...ACC25.map(([, b]) => b)].map((t) => [t, v25(t)]);
const FA25: Frame = { ox: 44, oy: 124, sx: 31, sy: 10.5 };
const FV25: Frame = { ox: 44, oy: 304, sx: 31, sy: 7 };
type Case25 = { chip: string; cap: string; hi: 'a' | 'v' };
const fig25: Diagram = {
  id: 'p11-02-fig-2.5',
  topic: 1,
  name: 'From the a–t graph to the v–t graph',
  cases: [
    { chip: 'Top: a–t', hi: 'a', cap: 'Top: <i>a</i>–<i>t</i> graph (<i>a</i> = +6 m/s<sup>2</sup> for 0–2 s, <i>a</i> = −3 m/s<sup>2</sup> for 2–8 s).' },
    { chip: 'Bottom: v–t', hi: 'v', cap: 'Bottom: the derived <i>v</i>–<i>t</i> graph, with <i>v</i> = 12 m/s at <i>t</i> = 2 s, <i>v</i> = 0 at <i>t</i> = 6 s and <i>v</i> = −6 m/s at <i>t</i> = 8 s; area above the axis (0–6 s) is shaded + and area below (6–8 s) is shaded −.' },
  ],
  draw(c: Case25) {
    const s = new Sketch(W, 390);
    const fa = FA25, fv = FV25, p = pts25(), tc = crossing(p), tEnd = p[p.length - 1][0];
    const guides = [ACC25[0][1], tc, tEnd];
    // shared time guides from the top graph down to the time values at the bottom
    const yBottom = Y(fv, -8.6);
    [0, ...guides].forEach((t) => s.sym(X(fv, t), yBottom + 15, fmt(t), { size: 13, color: C.slate }));
    s.sym(X(fv, tEnd) + 20, yBottom + 15, '<i>t</i> (s)', { size: 14, anchor: 'start' });
    // top: the a–t graph
    axes(s, fa, { t: [-0.2, tEnd + 0.75], v: [-4.6, 9.4], tName: '', vName: '<i>a</i> (m s<sup>−2</sup>)', vTicks: [[6, '6'], [-3, '−3']] });
    const aCol = c.hi === 'a' ? C.mari : C.ink, aW = c.hi === 'a' ? 2.6 : 1.9;
    ACC25.forEach(([t0, t1, acc]) => path(s, [at(fa, t0, acc), at(fa, t1, acc)], { color: aCol, w: aW }));
    path(s, [at(fa, ACC25[0][1], ACC25[0][2]), at(fa, ACC25[1][0], ACC25[1][2])], { color: C.slate, w: 1.2, dash: 'dot' });
    s.sym(X(fa, 1), Y(fa, 6) - 9, '<i>a</i> = +6', { size: 14 });
    s.sym(X(fa, 5), Y(fa, -3) + 19, '<i>a</i> = −3', { size: 14 });
    // bottom: the v–t graph built from it
    axes(s, fv, { t: [-0.2, tEnd + 0.75], v: [-8, 15.4], tName: '', vName: '<i>v</i> (m s<sup>−1</sup>)', vTicks: [[12, '12'], [-6, '−6']] });
    // the guides break around the axis names they would otherwise run through
    const names = s.labels.filter((l) => /\(m s/.test(l.text)).map((l) => l.rect);
    guides.forEach((t) => {
      const x = X(fa, t);
      let y = Y(fa, 6) - 4;
      names.filter((r) => x > r[0] - 4 && x < r[2] + 6 && r[1] > y).sort((a, b) => a[1] - b[1]).forEach((r) => {
        path(s, [[x, y], [x, r[1] - 3]], { color: C.grey, w: 1, dash: 'dot' });
        y = r[3] + 4;
      });
      path(s, [[x, y], [x, yBottom]], { color: C.grey, w: 1, dash: 'dot' });
    });
    const plus = sign(s, X(fv, 3.4), Y(fv, 3.6), '+'), minus = sign(s, X(fv, 7.35), Y(fv, -1.9), '−');
    slivers(s, fv, v25, 0, tc, [plus]);
    slivers(s, fv, v25, tc, tEnd, [minus]);
    path(s, p.map(([t, v]) => at(fv, t, v)), { color: c.hi === 'v' ? C.mari : C.ink, w: c.hi === 'v' ? 2.6 : 1.9 });
    const pk = at(fv, ACC25[0][1], v25(ACC25[0][1])), zero = at(fv, tc, 0), last = at(fv, tEnd, v25(tEnd));
    [pk, zero, last].forEach((q) => s.dot(q[0], q[1], 3.2));
    s.sym(pk[0] + 9, pk[1] - 4, `<i>v</i> = ${fmt(v25(ACC25[0][1]))}`, { size: 14, anchor: 'start' });
    s.sym(zero[0] + 6, zero[1] - 10, '<i>v</i> = 0', { size: 14, anchor: 'start' });
    s.sym(last[0] - 10, last[1] + 17, `<i>v</i> = ${fmt(v25(tEnd))}`, { size: 14, anchor: 'end' });
    if (c.hi === 'a') s.place([{ t: 'a–t graph', p: at(fa, 7.3, -3), hi: true, at: [[W - 8, Y(fa, -3) + 8, 'end']] }]);
    else s.place([{ t: 'Derived v–t graph', p: at(fv, 4, v25(4)), hi: true, at: [[X(fv, 4.2), Y(fv, 13.5), 'start'], [X(fv, 4.6), Y(fv, 11), 'start']] }]);
    return s;
  },
  check() {
    const p = pts25(), tc = crossing(p);
    const fv = FV25, pxv = (t: number) => vOf(fv, Y(fv, v25(t)));
    // v from the a–t graph by a fine running sum, independent of the closed form
    let v = 0, vmax = -Infinity, tmax = 0;
    const n = 80000, dt = 8 / n;
    for (let i = 0; i < n; i++) { v += a25((i + 0.5) * dt) * dt; if (v > vmax + 1e-12) { vmax = v; tmax = (i + 1) * dt; } }
    const up = metres(fv, regionPx(fv, p, 0, 2)), above = metres(fv, regionPx(fv, p, 2, tc)), below = metres(fv, regionPx(fv, p, tc, 8));
    return [
      [`Area under a–t gives Δv: v(2) = 6 × 2 = ${fmt(pxv(2))} m/s`, close(pxv(2), 12) && close(v25(2), 6 * 2)],
      [`Then slope −3: v(6) = ${fmt(pxv(6))}, v(8) = ${fmt(pxv(8))} m/s`, close(pxv(6), 0) && close(pxv(8), -6)],
      [`A running sum of the a–t graph lands on the same v(8) = ${fmt(v)} m/s`, close(v, v25(8), 1e-6)],
      [`Velocity peaks where a switches from + to −: ${fmt(vmax)} m/s at t = ${fmt(tmax)} s`, close(vmax, 12, 1e-3) && close(tmax, 2, 1e-3)],
      [`Reverses where v = 0: t = ${fmt(tc)} s`, close(tc, 6)],
      [`Areas: 0–2 s ${fmt(up)} m, 2–6 s +${fmt(above)} m, 6–8 s −${fmt(below)} m`, close(up, 12) && close(above, 24) && close(below, 6)],
      [`Displacement ${fmt(up + above - below)} m, distance ${fmt(up + above + below)} m`, close(up + above - below, 30) && close(up + above + below, 42)],
    ];
  },
};

/* ===================================================================== */
/* Figure 2.6 · s = ut + ½at² from the area under the v–t line (topic 03) */
/* ===================================================================== */
/** Any uniform acceleration will do; these give the book's proportions (v about three times u). */
const UAT = { u: 1, v: 3, t: 1 };
const F26: Frame = { ox: 46, oy: 262, sx: 250, sy: 62 };
const fig26: Diagram = {
  id: 'p11-02-fig-2.6',
  topic: 2,
  name: 's = ut + ½at² from the v–t graph',
  cases: [{ chip: 'Rectangle + triangle', cap: '<i>v</i>–<i>t</i> graph of uniform acceleration (initial velocity <i>u</i>, final velocity <i>v</i>, time <i>t</i>). The area under the line is the displacement <i>s</i> = <i>ut</i> (rectangle) + ½(<i>v</i> − <i>u</i>)<i>t</i> (triangle). Substitute <i>v</i> − <i>u</i> = <i>at</i> from equation (1): <i>s</i> = <i>ut</i> + ½(<i>t</i>)(<i>at</i>), so <i>s</i> = <i>ut</i> + ½<i>at</i><sup>2</sup>. Why this step: the rectangle is the distance the body would cover at its starting speed; the triangle is the extra distance the speeding-up contributes.' }],
  draw() {
    const s = new Sketch(W, 312);
    const f = F26, { u, v, t } = UAT;
    axes(s, f, { t: [-0.08, t + 0.14], v: [-0.45, v + 0.75], tName: '', vName: '', vTicks: [[v, '<i>v</i>'], [u, '<i>u</i>']], tTicks: [[t, '<i>t</i>']] });
    s.sym(X(f, t / 2), Y(f, v + 0.45), 'area = displacement <i>s</i>', { size: 16, color: C.slate });
    path(s, [at(f, 0, u), at(f, t, u)], { color: C.grey, w: 1.2, dash: 'dash' });
    path(s, [at(f, t, 0), at(f, t, v)], { w: 1.7 });
    path(s, [at(f, 0, 0), at(f, t, 0)], { w: 1.7 });
    path(s, [at(f, 0, 0), at(f, 0, u)], { w: 1.7 });
    path(s, [at(f, 0, u), at(f, t, v)], { color: C.mari, w: 2.6 });
    // each piece carries its name and its area, inside it
    s.sym(X(f, 0.66 * t), Y(f, u / 2) + 6, '<i>ut</i>', { size: 18 });
    s.tag(X(f, 0.05 * t), Y(f, u / 2) - 11, 'Rectangle', null, null);
    s.sym(X(f, 0.78 * t), Y(f, u + 0.3 * (v - u)) - 12, '½(<i>v</i> − <i>u</i>)<i>t</i>', { size: 17 });
    s.tag(X(f, 0.97 * t), Y(f, u) - 30, 'Triangle', null, null, { anchor: 'end' });
    return s;
  },
  check() {
    const f = F26, { u, v, t } = UAT, a = (v - u) / t;
    const trap = metres(f, [at(f, 0, 0), at(f, 0, u), at(f, t, v), at(f, t, 0)]);
    const rect = metres(f, [at(f, 0, 0), at(f, 0, u), at(f, t, u), at(f, t, 0)]), tri = metres(f, [at(f, 0, u), at(f, t, v), at(f, t, u)]);
    return [
      ['A straight line from (0, u) to (t, v): uniform acceleration a = (v − u)/t', close(vOf(f, Y(f, u)), u) && close(vOf(f, Y(f, v)), v)],
      [`Rectangle = ut = ${fmt(rect)}`, close(rect, u * t)],
      [`Triangle = ½(v − u)t = ${fmt(tri)}`, close(tri, ((v - u) * t) / 2)],
      [`Whole area ${fmt(trap)} = rectangle + triangle`, close(trap, rect + tri)],
      [`With v − u = at it is ut + ½at² = ${fmt(u * t + (a * t * t) / 2)}`, close(trap, u * t + (a * t * t) / 2)],
    ];
  },
};

/* ===================================================================== */
/* Figure 2.7 · two balls meeting, gap closing at 25 m/s (topic 04)       */
/* ===================================================================== */
const MEET = { u1: 25, h2: 100, g: 10 };
const meet27 = () => {
  const { u1, h2, g } = MEET;
  const uRel = u1 - 0, aRel = -g - -g, tMeet = h2 / uRel;
  const y1 = (t: number) => u1 * t - (g * t * t) / 2, y2 = (t: number) => h2 - (g * t * t) / 2;
  return { uRel, aRel, tMeet, y1, y2, flight1: (2 * u1) / g };
};
const H27 = { x: 178, ground: 296, k: 2.4 };
const hy = (h: number) => H27.ground - h * H27.k;
const fig27: Diagram = {
  id: 'p11-02-fig-2.7',
  topic: 3,
  name: 'Two balls closing a 100 m gap',
  cases: [{ chip: 'Meeting mid-air', cap: 'Ball 1 is thrown upward from the ground at <i>u</i> = 25 m/s; ball 2 is released from rest at 100 m. Their relative acceleration is zero, so the 100 m gap closes at a constant 25 m/s and the balls meet at <i>t</i> = 4 s, at a height of 20 m.' }],
  draw() {
    const s = new Sketch(W, 332);
    const m = meet27(), x = H27.x, R = 6.5, yTop = hy(MEET.h2), yMeet = hy(m.y1(m.tMeet)), yG = hy(0);
    s.line(x - 66, yG, x + 66, yG, { w: 1.7 });
    for (let i = -62; i <= 58; i += 10) s.line(x + i, yG, x + i - 7, yG + 7, { color: C.grey, w: 1.1 });
    // the one vertical line both balls move on
    path(s, [[x, yG - 2 * R - 3], [x, yTop + R + 3]], { color: C.grey, w: 1.2, dash: 'dash' });
    // the gap, highlighted: it closes at a steady u_rel
    const gx = x - 112;
    span(s, [gx, yTop], [gx, yG], C.mari, 2);
    s.sym(gx - 10, (yTop + yG) / 2 + 5, `${MEET.h2} m`, { size: 15, anchor: 'end' });
    // ball 1's launch velocity
    s.vec(x - 26, yG - 5, x - 26, yG - 36);
    s.sym(x - 34, yG - 15, `<i>u</i> = ${MEET.u1} m/s`, { size: 15, anchor: 'end' });
    s.point(x, yTop, R, `<circle cx="${x}" cy="${r1(yTop)}" r="${R}" fill="#fff" stroke="${C.ink}" stroke-width="1.8"/>`);
    s.point(x, yG - R, R, `<circle cx="${x}" cy="${r1(yG - R)}" r="${R}" fill="#fff" stroke="${C.ink}" stroke-width="1.8"/>`);
    s.dot(x, yMeet, 4);
    s.sym(x + 14, yTop + 5, `height ${MEET.h2} m`, { size: 15, anchor: 'start' });
    s.sym(x + 14, yMeet + 5, `<i>t</i> = ${fmt(m.tMeet)} s, height ${fmt(m.y1(m.tMeet))} m`, { size: 15, anchor: 'start' });
    s.place([
      { t: 'Gap closes at a constant 25 m/s', p: [gx, yTop + 40], hi: true, at: [[12, 8, 'start']] },
      { t: 'Ball 2: released from rest', p: [x + 2, yTop + R], own: [x, yTop], at: [[W - 8, yTop + 22, 'end']] },
      { t: 'They meet', p: [x - 3, yMeet], own: [x, yMeet], at: [[x - 22, yMeet - 34, 'end']] },
      { t: 'Ball 1', p: [x + R - 1, yG - R - 3], own: [x, yG - R], at: [[x + 18, yG - 30, 'start']] },
      { t: 'Ground', p: [x + 56, yG], at: [[W - 8, yG + 10, 'end']] },
    ]);
    return s;
  },
  check() {
    const m = meet27();
    const ts = [0, 1, 2, 3, 4];
    return [
      [`Relative velocity 25 − 0 = ${m.uRel} m/s; relative acceleration (−g) − (−g) = ${m.aRel}`, m.uRel === 25 && m.aRel === 0],
      ['So the gap shrinks by the same 25 m every second', ts.every((t) => close(m.y2(t) - m.y1(t), MEET.h2 - m.uRel * t))],
      [`They meet at t = 100/25 = ${fmt(m.tMeet)} s`, close(m.tMeet, 4)],
      [`Ball 1 is then at 25(4) − ½(10)(16) = ${fmt(m.y1(m.tMeet))} m, ball 2 at 100 − 80 = ${fmt(m.y2(m.tMeet))} m`, close(m.y1(m.tMeet), 20) && close(m.y2(m.tMeet), 20)],
      [`The meeting dot is drawn at 20 m on the same scale as the 100 m`, close((H27.ground - hy(20)) / (H27.ground - hy(100)), 0.2)],
      [`Ball 1 is still airborne (its flight lasts ${fmt(m.flight1)} s)`, m.flight1 > m.tMeet],
    ];
  },
};

/* ===================================================================== */
/* Figure 2.8 · choosing the integration route (topic 05)                 */
/* ===================================================================== */
type Box = { r: Rect; lines: string[]; hi?: boolean; size?: number };
const box = (s: Sketch, b: Box) => {
  const [x0, y0, x1, y1] = b.r, size = b.size ?? 14, lh = size + 5;
  s.add(`<rect x="${x0}" y="${y0}" width="${x1 - x0}" height="${y1 - y0}" rx="12" fill="#fff" stroke="${b.hi ? C.mari : C.border}" stroke-width="${b.hi ? 2 : 1.3}"/>`);
  const h = (b.lines.length - 1) * lh, cy = (y0 + y1) / 2 - h / 2 + size * 0.34;
  b.lines.forEach((ln, i) => s.text((x0 + x1) / 2, cy + i * lh, ln, { size }));
};
const ROOT: Box = { r: [60, 10, 280, 54], lines: ['What does <i>a</i> depend on?'], hi: true, size: 16 };
const BR = { x0: 30, x1: 118 };
const LF = { x0: 140, x1: 332 };
const CHART: { branch: Box; leaves: Box[] }[] = [
  { branch: { r: [BR.x0, 82, BR.x1, 122], lines: ['<i>a</i> = <i>f</i>\u200a(<i>t</i>)'] }, leaves: [{ r: [LF.x0, 74, LF.x1, 130], lines: ['integrate <i>a</i> d<i>t</i> to get <i>v</i>,', 'then <i>v</i> d<i>t</i> to get <i>x</i>'] }] },
  {
    branch: { r: [BR.x0, 186, BR.x1, 226], lines: ['<i>a</i> = <i>f</i>\u200a(<i>v</i>)'] },
    leaves: [
      { r: [LF.x0, 148, LF.x1, 200], lines: ['want <i>v</i>(<i>t</i>):', 'use d<i>v</i>/<i>f</i>\u200a(<i>v</i>) = d<i>t</i>'] },
      { r: [LF.x0, 212, LF.x1, 264], lines: ['want <i>v</i>(<i>x</i>):', 'use <i>v</i> d<i>v</i>/<i>f</i>\u200a(<i>v</i>) = d<i>x</i>'] },
    ],
  },
  { branch: { r: [BR.x0, 290, BR.x1, 330], lines: ['<i>a</i> = <i>f</i>\u200a(<i>x</i>)'] }, leaves: [{ r: [LF.x0, 286, LF.x1, 334], lines: ['use <i>v</i> d<i>v</i> = <i>a</i> d<i>x</i>'] }] },
];
/** One step of RK4 for y' = F(s, y), y a vector. */
function rk4(F: (s: number, y: number[]) => number[], s0: number, y: number[], h: number) {
  const add = (a: number[], b: number[], k: number) => a.map((v, i) => v + b[i] * k);
  const k1 = F(s0, y), k2 = F(s0 + h / 2, add(y, k1, h / 2)), k3 = F(s0 + h / 2, add(y, k2, h / 2)), k4 = F(s0 + h, add(y, k3, h));
  return y.map((v, i) => v + (h / 6) * (k1[i] + 2 * k2[i] + 2 * k3[i] + k4[i]));
}
function solve(F: (s: number, y: number[]) => number[], y0: number[], s0: number, s1: number, n = 4000) {
  let y = y0;
  const h = (s1 - s0) / n;
  for (let i = 0; i < n; i++) y = rk4(F, s0 + i * h, y, h);
  return y;
}
const fig28: Diagram = {
  id: 'p11-02-fig-2.8',
  topic: 4,
  name: 'Choosing the integration route',
  cases: [{ chip: 'Three routes', cap: 'Choosing the integration route: <i>a</i> = <i>f</i>(<i>t</i>), <i>a</i> = <i>f</i>(<i>v</i>) or <i>a</i> = <i>f</i>(<i>x</i>). (If <i>v</i> is given as <i>v</i>(<i>x</i>), then <i>a</i> = <i>v</i> d<i>v</i>/d<i>x</i>, not d<i>v</i>/d<i>x</i>.)' }],
  draw() {
    const s = new Sketch(W, 344);
    const trunkX = 16, rootY = (ROOT.r[1] + ROOT.r[3]) / 2;
    const lastY = (CHART[CHART.length - 1].branch.r[1] + CHART[CHART.length - 1].branch.r[3]) / 2;
    path(s, [[ROOT.r[0], rootY], [trunkX, rootY], [trunkX, lastY]], { color: C.grey, w: 1.4 });
    box(s, ROOT);
    CHART.forEach(({ branch, leaves }) => {
      const by = (branch.r[1] + branch.r[3]) / 2;
      s.vec(trunkX, by, branch.r[0] - 3, by, { color: C.grey, w: 1.4 });
      box(s, branch);
      leaves.forEach((lf) => {
        const ly = (lf.r[1] + lf.r[3]) / 2;
        s.vec(branch.r[2] + 3, by, lf.r[0] - 4, ly, { color: C.slate, w: 1.4 });
        box(s, lf);
      });
    });
    return s;
  },
  check() {
    const out: Check[] = [];
    // a = f(t) (Example 1: a = 4t from rest): integrate a dt for v, then v dt for x
    const [x3, v3] = solve((tt, [, v]) => [v, 4 * tt], [0, 0], 0, 3);
    out.push([`a = f(t): integrating a = 4t gives v(3) = ${fmt(v3)} m/s, x(3) = ${fmt(x3)} m (book: 18, 18)`, close(v3, 18, 1e-6) && close(x3, 18, 1e-6)]);
    // a = f(v) = −kv² (Example 4): dv/f(v) = dt gives v = u/(1 + ukt); v dv/f(v) = dx gives v = u e^(−kx)
    const k = 0.5, u = 4, t = 1.5, xq = 1.2;
    const [vt] = solve((_s, [vv]) => [-k * vv * vv], [u], 0, t);
    const [xEnd, vEnd] = solve((_s, [, vv]) => [vv, -k * vv * vv], [0, u], 0, t);
    const [vx] = solve((_x, [vv]) => [(-k * vv * vv) / vv], [u], 0, xq);
    out.push([`a = f(v), want v(t): dv/f(v) = dt gives u/(1 + ukt) = ${fmt(u / (1 + u * k * t), 4)} (direct: ${fmt(vt, 4)})`, close(vt, u / (1 + u * k * t), 1e-8)]);
    out.push([`a = f(v), want v(x): v dv/f(v) = dx gives u e^(−kx) = ${fmt(u * Math.exp(-k * xq), 4)} (direct: ${fmt(vx, 4)})`, close(vx, u * Math.exp(-k * xq), 1e-8) && close(vEnd, u * Math.exp(-k * xEnd), 1e-6)]);
    // a = f(x) (Example 3: a = 4x from rest at x = 1): v dv = a dx gives v(3) = √32
    let y = [1, 0], tt = 0;
    while (y[0] < 3) { const nxt = rk4((_s, [xx, vv]) => [vv, 4 * xx], tt, y, 1e-4); if (nxt[0] >= 3) { const fr = (3 - y[0]) / (nxt[0] - y[0]); y = [3, y[1] + fr * (nxt[1] - y[1])]; break; } y = nxt; tt += 1e-4; }
    out.push([`a = f(x): v dv = a dx gives v = √32 = ${fmt(Math.sqrt(32), 3)} at x = 3 (direct: ${fmt(y[1], 3)})`, close(y[1], Math.sqrt(32), 1e-4)]);
    // the caption's warning, on v = 4√x (Example 2): a = v dv/dx = 8, not dv/dx
    const vOfX = (xx: number) => 4 * Math.sqrt(xx), dvdx = (xx: number) => (vOfX(xx + 1e-6) - vOfX(xx - 1e-6)) / 2e-6;
    const xAt = (tq: number) => solve((_s, [xx]) => [vOfX(xx)], [1], 0, tq, 2000)[0];
    const h = 1e-3, aTime = (vOfX(xAt(0.5 + h)) - vOfX(xAt(0.5 - h))) / (2 * h);
    out.push([`v given as v(x) = 4√x: dv/dt along the motion is ${fmt(aTime, 4)} = v dv/dx (8), while dv/dx alone changes (${fmt(dvdx(2), 3)} at x = 2, ${fmt(dvdx(5), 3)} at x = 5)`, close(aTime, 8, 1e-4) && close(vOfX(2) * dvdx(2), 8, 1e-5) && close(vOfX(5) * dvdx(5), 8, 1e-5) && !close(dvdx(2), dvdx(5), 1e-2)]);
    return out;
  },
};

export const DIAGRAMS_PHYSICS_11_02: Diagram[] = [fig21, fig22, fig23, fig24, fig25, fig26, fig27, fig28];
