import { C, F, Rect, Sketch, r1, mathW } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * PHYSICS CLASS 11, CHAPTER 5 (Work, Energy and Power): every figure of the
 * Master Reference book, redrawn. The chapter's drawings are its six numbered
 * figures, each printed on a "CHAPTER 5 · FIGURES" page (pp. 290, 294, 303,
 * 310, 325, 334). It has no unnumbered drawings: pp. 282–363 were checked
 * page by page, and every other piece of artwork is a rounded box, a table
 * or a rule (the Additional Topics, pp. 348–363, have none).
 *
 * Every drawing here is computed from the physics it shows: the force's angle
 * decides the sign of F·d, the F–x areas are the work, the U(x) curve's
 * turning points solve U = E, the pendulum's bars are mgh and ½mv², the W–t
 * curve is the running area of the P–t curve, and the collisions conserve
 * momentum and kinetic energy. Each `check` turns the drawn pixels back into
 * physics and recomputes what the figure says.
 */

const W = 340;
type P = [number, number];
const D2R = Math.PI / 180;
/** A unit vector on the drawing at `deg` degrees anticlockwise from +x (the drawing's y runs down). */
const dir = (deg: number): P => [Math.cos(deg * D2R), -Math.sin(deg * D2R)];
const add = (a: P, b: P, k = 1): P => [a[0] + k * b[0], a[1] + k * b[1]];
const sub = (a: P, b: P): P => [a[0] - b[0], a[1] - b[1]];
const mul = (a: P, k: number): P => [a[0] * k, a[1] * k];
const len = (v: P) => Math.hypot(v[0], v[1]);
const dotp = (a: P, b: P) => a[0] * b[0] + a[1] * b[1];
const close = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) < tol;
const fmt = (n: number, d = 2) => String(+n.toFixed(d)).replace('-', '−');
/** The angle between two drawn vectors, in degrees. */
const between = (a: P, b: P) => Math.acos(Math.max(-1, Math.min(1, dotp(a, b) / (len(a) * len(b))))) / D2R;
/** A drawn vector back in physics: x to the right, y UP, in units of `k` px. */
const phys = (v: P, k: number): P => [v[0] / k, -v[1] / k];

/* ---------- drawing helpers ---------- */
type Stroke = { color?: string; w?: number; dash?: 'dash' | 'dot'; fill?: boolean };
const dashOf = (d?: Stroke['dash']) => (d === 'dash' ? ' stroke-dasharray="5 4"' : d === 'dot' ? ' stroke-dasharray="1.5 3.5"' : '');
/** An open line through points: ink, rounded joins. */
function path(s: Sketch, pts: P[], o: Stroke = {}) {
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ');
  s.add(`<path d="${d}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}" stroke-linejoin="round" stroke-linecap="round"${dashOf(o.dash)}/>`);
}
/** A closed outline, white inside (it hides what it stands in front of, never a colour). */
function shape(s: Sketch, pts: P[], o: Stroke = {}) {
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ') + ' Z';
  s.add(`<path d="${d}" fill="${o.fill === false ? 'none' : '#fff'}" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}" stroke-linejoin="round"${dashOf(o.dash)}/>`);
}
/** An arc of radius r round c, from angle a0 to a1 (degrees, anticlockwise from +x), sampled finely. */
function arc(s: Sketch, c: P, r: number, a0: number, a1: number, o: Stroke = {}) {
  const n = Math.max(6, Math.ceil(Math.abs(a1 - a0) / 3)), pts: P[] = [];
  for (let i = 0; i <= n; i++) pts.push(add(c, dir(a0 + ((a1 - a0) * i) / n), r));
  path(s, pts, { color: o.color ?? C.slate, w: o.w ?? 1.2, dash: o.dash });
}
const escT = (t: string) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
/** Words in Onest (row headings): not maths, so straight into the SVG. */
function words(s: Sketch, x: number, y: number, t: string, o: { size?: number; anchor?: 'start' | 'middle' | 'end'; color?: string; bold?: boolean } = {}) {
  s.add(`<text x="${r1(x)}" y="${r1(y)}" text-anchor="${o.anchor ?? 'start'}" font-family="${o.bold ? F.bold : F.tag}" font-size="${o.size ?? 12}" fill="${o.color ?? C.slate}">${escT(t)}</text>`);
}
/**
 * The result, bottom right, ink-edged, set in STIX (Sketch.text) so its letters
 * keep their italics. Registered as a tag, so the audit keeps everything else off it.
 */
function resultBlock(s: Sketch, lines: string[], size = 15): Rect {
  const lh = size + 6, plain = (t: string) => t.replace(/<[^>]+>/g, '');
  const w = Math.max(...lines.map((t) => mathW(t, size))) + 30, h = lines.length * lh + 14;
  const x0 = s.w - 8 - w, y0 = s.h - 8 - h;
  s.tags.push({ name: plain(lines.join(' ')), rect: [x0, y0, x0 + w, y0 + h], from: null, to: null });
  s.add(`<rect x="${r1(x0)}" y="${r1(y0)}" width="${r1(w)}" height="${r1(h)}" rx="15" fill="#fff" stroke="${C.text}" stroke-width="1.6"/>`);
  lines.forEach((t, i) => s.text(x0 + w / 2, y0 + 7 + lh * i + lh / 2 + size * 0.36, t, { size, semibold: true }));
  return [x0, y0, x0 + w, y0 + h];
}

/* ---------- graphs: a frame, its axes, curves, and the slivers of an area ---------- */
/** Where (0, 0) sits on the drawing, and how many px one unit is along each axis. */
type Frame = { ox: number; oy: number; sx: number; sy: number };
const X = (f: Frame, t: number) => f.ox + t * f.sx;
const Y = (f: Frame, v: number) => f.oy - v * f.sy;
const tOf = (f: Frame, x: number) => (x - f.ox) / f.sx;
const vOf = (f: Frame, y: number) => (f.oy - y) / f.sy;
const at = (f: Frame, t: number, v: number): P => [X(f, t), Y(f, v)];
/** A function drawn as a smooth line, sampled finely. */
function curve(s: Sketch, f: Frame, fn: (t: number) => number, t0: number, t1: number, o: Stroke = {}) {
  const n = 90, pts: P[] = [];
  for (let i = 0; i <= n; i++) { const t = t0 + ((t1 - t0) * i) / n; pts.push(at(f, t, fn(t))); }
  path(s, pts, o);
}
/** The two axes of a graph, in grey with arrowheads, named at their tips. */
function axes(s: Sketch, f: Frame, o: { t: [number, number]; v: [number, number]; tName: string; vName: string }) {
  const xa = X(f, o.t[0]), xb = X(f, o.t[1]), ya = Y(f, o.v[0]), yb = Y(f, o.v[1]);
  s.vec(xa, f.oy, xb, f.oy, { color: C.grey, w: 1.3 });
  s.vec(f.ox, ya, f.ox, yb, { color: C.grey, w: 1.3 });
  s.sym(xb + 5, f.oy + 5, o.tName, { size: 15, anchor: 'start' });
  s.sym(f.ox + 9, yb + 7, o.vName, { size: 15, anchor: 'start' });
}
/**
 * The area between a graph and its horizontal axis, drawn as thin vertical
 * slivers (never a fill). `skip` keeps them off a label.
 */
function slivers(s: Sketch, f: Frame, fn: (t: number) => number, t0: number, t1: number, skip: Rect[] = [], gap = 7, color: string = C.grey) {
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
    segs.forEach(([a, b]) => s.line(x, a, x, b, { color, w: 0.9 }));
  }
}
/** Area of a polygon (shoelace), in the drawing's px². */
const polyArea = (pts: P[]) => Math.abs(pts.reduce((a, p, i) => { const q = pts[(i + 1) % pts.length]; return a + p[0] * q[1] - q[0] * p[1]; }, 0)) / 2;
/** Value of a piecewise-linear graph at t. */
function valueAt(pts: [number, number][], t: number) {
  for (let i = 0; i < pts.length - 1; i++) {
    const [ta, va] = pts[i], [tb, vb] = pts[i + 1];
    if (t >= ta && t <= tb) return va + ((vb - va) * (t - ta)) / (tb - ta);
  }
  return NaN;
}
/** The pixel polygon between a piecewise-linear graph and the axis from t0 to t1 (one sign only). */
function regionPx(f: Frame, pts: [number, number][], t0: number, t1: number): P[] {
  const inner = pts.filter(([t]) => t > t0 && t < t1);
  const line: [number, number][] = [[t0, valueAt(pts, t0)], ...inner, [t1, valueAt(pts, t1)]];
  return [at(f, t0, 0), ...line.map(([t, v]) => at(f, t, v)), at(f, t1, 0)];
}
/** A drawn region's area turned back into the graph's units. */
const units = (f: Frame, poly: P[]) => polyArea(poly) / (f.sx * f.sy);

/* ===================================================================== */
/* Figure 5.1 · positive, negative and zero work (topic 02)               */
/* ===================================================================== */
type Case51 = { chip: string; cap: string; th: number; head: string; res: string };
const CAP51 = 'Work done by a force on a block that moves to the right: for an acute angle between force and displacement the work is positive, for an obtuse angle it is negative, and for a right angle it is zero.';
/** The book's angles, as drawn: about 40°, about 140°, exactly 90°. F and d in px (any lengths: only the sign of F·d matters). */
const B51 = { ground: 140, bx0: 116, bw: 56, bh: 32, F: 92, d: 88 };
const geo51 = (th: number) => {
  const { ground, bx0, bw, bh, F: Fl, d } = B51;
  const O: P = [bx0 + bw / 2, ground - bh / 2];
  const Fv = mul(dir(th), Fl), dFrom: P = [O[0], ground + 22], dv: P = [d, 0];
  return { O, Fv, dFrom, dv, block: [[bx0, ground], [bx0 + bw, ground], [bx0 + bw, ground - bh], [bx0, ground - bh]] as P[] };
};
const fig51: Diagram = {
  id: 'p11-05-fig-5.1',
  topic: 1,
  name: 'Positive, negative and zero work',
  cases: [
    { chip: 'Positive work', th: 40, head: '<i>θ</i> < 90°', res: 'Positive work', cap: CAP51 },
    { chip: 'Negative work', th: 140, head: '<i>θ</i> > 90°', res: 'Negative work', cap: CAP51 },
    { chip: 'Zero work', th: 90, head: '<i>θ</i> = 90°', res: 'Zero work', cap: CAP51 },
  ],
  draw(c: Case51) {
    const s = new Sketch(W, 236);
    const g = geo51(c.th), { ground, bx0, bh } = B51, O = g.O;
    s.line(14, ground, 326, ground, { w: 1.7 });
    shape(s, g.block);
    // the direction of motion through the block, and θ measured from it to F
    path(s, [O, [O[0] + 128, O[1]]], { color: C.grey, w: 1.2, dash: 'dash' });
    // small enough to stay inside the block (at 24 it ran along the block's edges)
    arc(s, O, 15, 0, c.th);
    s.sym(...add(add(O, dir(c.th / 2), c.th < 60 ? 50 : 40), [0, 5]), '<i>θ</i>', { size: 15, color: C.slate });
    s.vec(O[0], O[1], O[0] + g.Fv[0], O[1] + g.Fv[1], { color: C.mari, w: 2.6 });
    s.dot(O[0], O[1], 2.6);
    const tip = add(O, g.Fv);
    s.sym(tip[0] + (c.th > 90 ? -8 : 9), tip[1] + 6, '<i>F</i>', { size: 16, anchor: c.th > 90 ? 'end' : 'start' });
    // the displacement, below the ground
    s.vec(g.dFrom[0], g.dFrom[1], g.dFrom[0] + g.dv[0], g.dFrom[1], { w: 2 });
    s.sym(g.dFrom[0] + g.dv[0] + 8, g.dFrom[1] + 5, '<i>d</i>', { size: 16, anchor: 'start' });
    s.sym(14, 26, c.head, { size: 16, anchor: 'start' });
    s.result(c.res);
    const Fmid = add(O, g.Fv, 0.62);
    s.place([
      { t: 'Force', p: Fmid, hi: true, at: c.th > 90 ? [[14, 92, 'start'], [W - 8, 40, 'end'], [W - 8, 64, 'end']] : [[14, 48, 'start'], [14, 70, 'start']] },
      { t: 'Block', p: [bx0, ground - bh / 2], at: [[bx0 - 22, ground + 14, 'end'], [bx0 - 22, ground - bh - 30, 'end'], [14, 92, 'start']] },
    ]);
    return s;
  },
  check(c: Case51) {
    const g = geo51(c.th);
    const Fp = phys(g.Fv, 1), dp = phys(g.dv, 1);
    const work = Fp[0] * dp[0] + Fp[1] * dp[1], angle = between(g.Fv, g.dv);
    const kind = angle < 90 - 1e-9 ? 'Positive work' : angle > 90 + 1e-9 ? 'Negative work' : 'Zero work';
    const sign = kind === 'Positive work' ? '<' : kind === 'Negative work' ? '>' : '=';
    return [
      ['The block moves to the right: d is drawn along +x', dp[0] > 0 && close(dp[1], 0)],
      [`F is drawn at θ = ${fmt(angle)}° from d (the dashed line along the motion)`, close(angle, c.th, 1e-9)],
      [`W = F·d = Fd cos θ = ${fmt(work, 1)} (px²): the dot product of the drawn arrows`, close(work, len(g.Fv) * len(g.dv) * Math.cos(c.th * D2R), 1e-6)],
      [`So the work is ${kind.toLowerCase()} (${angle < 90 ? 'acute' : angle > 90 ? 'obtuse' : 'right'} angle), as the result says`, c.res === kind && (kind === 'Zero work' ? Math.abs(work) < 1e-6 : kind === 'Positive work' ? work > 0 : work < 0)],
      [`The heading says θ ${sign} 90°`, c.head === `<i>θ</i> ${sign} 90°`],
    ];
  },
};

/* ===================================================================== */
/* Figure 5.2 · the F–x graph: area = work, below the axis negative       */
/* ===================================================================== */
/** The book's graph, in its own proportions: up over 2, level for 3, down to zero in 1, on down to −½ the peak in 1, level for 1. */
const PTS52: [number, number][] = [[0, 0], [2, 2], [5, 2], [6, 0], [7, -1], [8, -1]];
const F52: Frame = { ox: 34, oy: 168, sx: 33, sy: 46 };
const fig52: Diagram = {
  id: 'p11-05-fig-5.2',
  topic: 1,
  name: 'Work as the area under an F–x graph',
  cases: [{ chip: 'Area = work', cap: 'Force-displacement graph: the area between the curve and the <i>x</i>-axis equals the work done, with the part below the axis counting as negative work.' }],
  draw() {
    const s = new Sketch(W, 292);
    const f = F52, fn = (x: number) => valueAt(PTS52, x), xc = 6, xe = 8;
    axes(s, f, { t: [-0.4, 8.75], v: [-1.9, 2.75], tName: '<i>x</i>', vName: '<i>F</i>' });
    // the pieces, parted by grey dashed lines; the negative part closed at its end
    [2, 5].forEach((x) => path(s, [at(f, x, 0), at(f, x, fn(x))], { color: C.slate, w: 1.2, dash: 'dash' }));
    path(s, [at(f, xe, 0), at(f, xe, fn(xe))], { color: C.slate, w: 1.2, dash: 'dash' });
    const label = { x: X(f, 3.5), y: 26 };
    s.sym(label.x, label.y, 'Area = Work done', { size: 16 });
    s.vec(label.x, label.y + 8, label.x, Y(f, 1.45), { w: 1.4 });
    slivers(s, f, fn, 0, xc, [[label.x - 6, Y(f, 2), label.x + 6, Y(f, 1.4)]]);
    slivers(s, f, fn, xc, xe);
    path(s, PTS52.filter(([x]) => x <= xc).map(([x, v]) => at(f, x, v)));
    path(s, PTS52.filter(([x]) => x >= xc).map(([x, v]) => at(f, x, v)), { color: C.mari, w: 2.6 });
    const ty = f.oy + 12;
    s.place([
      { t: 'Negative work', p: at(f, 7.1, -0.5), hi: true, at: [[X(f, 7), Y(f, -1) + 16, 'middle'], [W - 8, Y(f, -1) + 16, 'end']] },
      { t: 'Triangle', p: at(f, 1.4, 0.5), at: [[X(f, 1.2), ty, 'middle']] },
      { t: 'Rectangle', p: at(f, 4.1, 0.7), at: [[X(f, 3.9), ty, 'middle']] },
    ]);
    return s;
  },
  check() {
    const f = F52, pts = PTS52;
    const px = pts.map(([x, v]) => at(f, x, v)), back = px.map(([x, y]) => [tOf(f, x), vOf(f, y)]);
    const tri = units(f, regionPx(f, pts, 0, 2)), rect = units(f, regionPx(f, pts, 2, 5)), tri2 = units(f, regionPx(f, pts, 5, 6)), neg = units(f, regionPx(f, pts, 6, 8));
    let integral = 0;
    for (let i = 0, n = 8000; i < n; i++) integral += valueAt(pts, ((i + 0.5) * 8) / n) * (8 / n);
    return [
      ['The drawn corners are the book’s: (0, 0), (2, 2), (5, 2), (6, 0), (7, −1), (8, −1)', back.every(([x, v], i) => close(x, pts[i][0]) && close(v, pts[i][1]))],
      [`Triangle = ½ × 2 × 2 = ${fmt(tri)}; rectangle = 3 × 2 = ${fmt(rect)}; the last piece above = ${fmt(tri2)}`, close(tri, 2) && close(rect, 6) && close(tri2, 1)],
      ['The force changes sign where the graph crosses the x-axis (x = 6)', valueAt(pts, 5.99) > 0 && close(valueAt(pts, 6), 0) && valueAt(pts, 6.01) < 0],
      [`Area below the axis = ${fmt(neg)}, counted negative: work there is −${fmt(neg)}`, close(neg, 1.5) && pts.filter(([x]) => x > 6).every(([, v]) => v < 0)],
      [`Net work = ${fmt(tri + rect + tri2)} − ${fmt(neg)} = ${fmt(tri + rect + tri2 - neg)} = ∫F dx = ${fmt(integral)}`, close(tri + rect + tri2 - neg, integral, 1e-6)],
    ];
  },
};

/* ===================================================================== */
/* Figure 5.3 · the potential-energy curve U(x) (topic 03)                */
/* ===================================================================== */
/** The book's curve is one and a bit waves of a cosine: U = 3.2 + cos(π(x − 1)/2), hilltop at x = 1, valley at x = 3; E where cos = −0.35 (U's zero is arbitrary). */
const U53 = { mid: 3.2, amp: 1, xMax: 1, half: 2, E: 2.85, x0: 0, x1: 4.27 };
const u53 = (x: number) => U53.mid + U53.amp * Math.cos((Math.PI * (x - U53.xMax)) / U53.half);
const du53 = (x: number) => -U53.amp * (Math.PI / U53.half) * Math.sin((Math.PI * (x - U53.xMax)) / U53.half);
const d2u53 = (x: number) => -U53.amp * (Math.PI / U53.half) ** 2 * Math.cos((Math.PI * (x - U53.xMax)) / U53.half);
/** Where U = E: the two turning points either side of the valley. */
const turn53 = (): [number, number] => {
  const a = Math.acos((U53.E - U53.mid) / U53.amp); // π(x − 1)/2 = ±a, taken round the valley at x = 3
  return [U53.xMax + (U53.half * a) / Math.PI, U53.xMax + (U53.half * (2 * Math.PI - a)) / Math.PI];
};
/** The force arrows, drawn along the curve as the book draws them: [from x, to x]. */
const ARROWS53: [number, number][] = [[0.36, 0.06], [1.66, 1.98], [2.36, 2.66], [3.66, 3.36]];
const F53: Frame = { ox: 30, oy: 322, sx: 64, sy: 46 };
const fig53: Diagram = {
  id: 'p11-05-fig-5.3',
  topic: 2,
  name: 'Reading a potential-energy curve',
  cases: [{ chip: 'Hill and valley', cap: 'Potential energy curve <i>U</i>(<i>x</i>): a valley is a stable equilibrium and a hilltop an unstable one; the total energy line <i>E</i> meets the curve at the turning points where <i>K</i> = 0, and the force <i>F</i> = −d<i>U</i>/d<i>x</i> always points toward lower <i>U</i>.' }],
  draw() {
    const s = new Sketch(W, 340);
    const f = F53, [ta, tb] = turn53();
    // axes: U up the left, x along the bottom
    s.vec(X(f, -0.2), f.oy + 6, X(f, -0.2), 30, { color: C.grey, w: 1.3 });
    s.vec(X(f, -0.3), f.oy, X(f, 4.55), f.oy, { color: C.grey, w: 1.3 });
    s.sym(X(f, -0.2) + 9, 37, '<i>U</i>', { size: 15, anchor: 'start' });
    s.sym(X(f, 4.55) + 5, f.oy + 5, '<i>x</i>', { size: 15, anchor: 'start' });
    // the total-energy line and the turning points, dropped to a span
    const yE = Y(f, U53.E), spanY = Y(f, 1.17);
    path(s, [[X(f, -0.1), yE], [X(f, 4.45), yE]], { color: C.mari, w: 2, dash: 'dash' });
    [ta, tb].forEach((x) => path(s, [[X(f, x), yE], [X(f, x), spanY + 4]], { color: C.slate, w: 1.1, dash: 'dot' }));
    s.vec((X(f, ta) + X(f, tb)) / 2, spanY, X(f, ta) + 1, spanY, { color: C.slate, w: 1.3 });
    s.vec((X(f, ta) + X(f, tb)) / 2, spanY, X(f, tb) - 1, spanY, { color: C.slate, w: 1.3 });
    curve(s, f, u53, U53.x0, U53.x1, { w: 2 });
    // the force arrows, a little off the curve on its upper side, pointing downhill
    ARROWS53.forEach(([a, b]) => {
      const off = (x: number): P => { const n = len([1 * f.sx, -du53(x) * f.sy]); const t: P = [f.sx / n, (-du53(x) * f.sy) / n]; return add(at(f, x, u53(x)), [t[1], -t[0]], 9 * Math.sign(t[0])); };
      const A = off(a), B = off(b);
      s.vec(A[0], A[1], B[0], B[1], { color: C.slate, w: 1.8 });
    });
    s.sym(W - 8, 92, 'arrows: force <i>F</i> = −d<i>U</i>/d<i>x</i>,', { size: 14, color: C.slate, anchor: 'end' });
    s.sym(W - 8, 110, 'always toward lower <i>U</i>', { size: 14, color: C.slate, anchor: 'end' });
    s.sym(X(f, 4.45) + 6, yE + 5, '<i>E</i>', { size: 16, color: C.amber, anchor: 'start' });
    // the equilibria and the turning points
    const top = at(f, 1, u53(1)), bot = at(f, 3, u53(3));
    s.dot(top[0], top[1], 4.4);
    s.dot(bot[0], bot[1], 4.4);
    [ta, tb].forEach((x) => s.point(X(f, x), yE, 4, `<circle cx="${r1(X(f, x))}" cy="${r1(yE)}" r="4" fill="${C.mari}"/>`));
    const mid = (X(f, ta) + X(f, tb)) / 2;
    s.sym(top[0] + 8, top[1] - 16, '<i>U</i> maximum', { size: 14, anchor: 'start' });
    s.sym(bot[0], bot[1] + 25, '<i>U</i> minimum', { size: 14 });
    s.sym(mid + 63, spanY + 31, '(<i>K</i> = 0)', { size: 14, color: C.slate, anchor: 'start' });
    s.place([
      { t: 'Unstable equilibrium', p: top, own: top, at: [[top[0] + 10, top[1] - 76, 'middle'], [14, top[1] - 76, 'start']] },
      { t: 'Total energy', p: [X(f, 0.6), yE], hi: true, at: [[X(f, -0.1), yE + 10, 'start'], [X(f, -0.1), yE + 16, 'start']] },
      { t: 'Stable equilibrium', p: bot, own: bot, at: [[X(f, ta) - 8, bot[1] + 10, 'end'], [X(f, ta) - 8, bot[1] + 18, 'end']] },
      { t: 'Turning points', p: [mid, spanY], at: [[mid + 57, spanY + 14, 'end'], [mid + 57, spanY + 8, 'end']] },
    ]);
    return s;
  },
  check() {
    const f = F53, [ta, tb] = turn53();
    const out: Check[] = [
      ['Hilltop at x = 1: dU/dx = 0 and d²U/dx² < 0, so a U maximum and an unstable equilibrium', close(du53(1), 0) && d2u53(1) < 0],
      ['Valley at x = 3: dU/dx = 0 and d²U/dx² > 0, so a U minimum and a stable equilibrium', close(du53(3), 0) && d2u53(3) > 0],
      [`The E line meets the curve at x = ${fmt(ta, 3)} and ${fmt(tb, 3)}, where U = E so K = E − U = 0`, close(u53(ta), U53.E, 1e-9) && close(u53(tb), U53.E, 1e-9)],
      ['Between the turning points K = E − U > 0; just outside them K < 0 (not allowed)', [0.25, 0.5, 0.75].every((k) => U53.E - u53(ta + k * (tb - ta)) > 0) && U53.E - u53(ta - 0.05) < 0 && U53.E - u53(tb + 0.05) < 0],
      ['The hilltop rises above E and the valley sits below it', u53(1) > U53.E && u53(3) < U53.E],
      ['They are the only turning points on the drawn curve', (() => { let n = 0; for (let x = U53.x0; x < U53.x1; x += 0.001) if ((u53(x) - U53.E) * (u53(x + 0.001) - U53.E) < 0) n++; return n === 2; })()],
      [`The drawn E line sits at E = ${fmt(vOf(f, Y(f, U53.E)))} on the U scale`, close(vOf(f, Y(f, U53.E)), U53.E)],
    ];
    ARROWS53.forEach(([a, b], i) => {
      const m = (a + b) / 2, F = -du53(m);
      out.push([`Arrow ${i + 1} points toward lower U: F = −dU/dx = ${fmt(F, 2)} has the sign of its run (${b > a ? '+' : '−'}), and U falls from ${fmt(u53(a))} to ${fmt(u53(b))}`, Math.sign(F) === Math.sign(b - a) && u53(b) < u53(a) && [a, b].every((x) => Math.sign(-du53(x)) === Math.sign(b - a))]);
    });
    return out;
  },
};

/* ===================================================================== */
/* Figure 5.4 · the pendulum's energy bars (topic 04)                     */
/* ===================================================================== */
/** The book's pendulum swings 40° each side. m, g and L in units where the full bar (E) is `bar` px. */
const PEN54 = { P: [170, 40] as P, L: 150, th: 40, m: 1, g: 10, Lm: 1, bar: 84, bw: 26, gap: 6, base: 332 };
const pen54 = () => {
  const { P: Pv, L, th, m, g, Lm } = PEN54;
  const h = Lm * (1 - Math.cos(th * D2R)); // height of the extremes above the lowest point, in m
  const E = m * g * h; // all potential at the extremes, all kinetic at the bottom
  const bobs: { at: P; U: number; K: number }[] = [-1, 0, 1].map((side) => {
    const a = side * th, hh = Lm * (1 - Math.cos(a * D2R)), U = m * g * hh, v = side === 0 ? Math.sqrt(2 * g * h) : 0;
    return { at: [Pv[0] + L * Math.sin(a * D2R), Pv[1] + L * Math.cos(a * D2R)] as P, U, K: 0.5 * m * v * v };
  });
  return { h, E, bobs };
};
const fig54: Diagram = {
  id: 'p11-05-fig-5.4',
  topic: 3,
  name: 'A pendulum’s energy bars',
  cases: [{ chip: 'Energy bars', cap: 'A pendulum at its two highest points and at its lowest point, with energy bars: all potential energy at the extremes, all kinetic energy at the bottom, and a constant total <i>E</i> = <i>K</i> + <i>U</i>.' }],
  draw() {
    const s = new Sketch(W, 432);
    const { P: Pv, L, th, bar, bw, gap, base } = PEN54, p = pen54(), R = 12;
    s.line(Pv[0] - 56, Pv[1], Pv[0] + 56, Pv[1], { w: 2.6 });
    arc(s, Pv, L, -90 - th, -90 + th, { color: C.grey, w: 1.2 });
    path(s, [Pv, [Pv[0], Pv[1] + L - R]], { color: C.slate, w: 1.3, dash: 'dash' });
    p.bobs.forEach((b, i) => {
      if (i !== 1) path(s, [Pv, add(Pv, mul(sub(b.at, Pv), (L - R) / L))], { w: 1.7 });
      s.point(b.at[0], b.at[1], R, `<circle cx="${r1(b.at[0])}" cy="${r1(b.at[1])}" r="${R}" fill="#fff" stroke="${C.ink}" stroke-width="1.8"/>`);
    });
    s.dot(Pv[0], Pv[1], 2.6);
    // the bars: a full bar is slivered, an empty one a dashed outline
    const k = bar / p.E;
    p.bobs.forEach((b) => {
      const cx = b.at[0], xs = [cx - gap / 2 - bw, cx + gap / 2];
      [b.U, b.K].forEach((val, j) => {
        const x0 = xs[j], hgt = val * k, isU = j === 0;
        const col = isU ? C.mari : C.ink;
        if (hgt > 0.5) {
          shape(s, [[x0, base], [x0 + bw, base], [x0 + bw, base - hgt], [x0, base - hgt]], { color: col, w: isU ? 2 : 1.7 });
          for (let x = x0 + 4.5; x < x0 + bw - 2; x += 5) s.line(x, base - hgt + 2.5, x, base - 2.5, { color: C.grey, w: 0.9 });
        }
        else path(s, [[x0, base], [x0, base - bar], [x0 + bw, base - bar], [x0 + bw, base]], { color: C.faint, w: 1.1, dash: 'dot' });
        s.sym(x0 + bw / 2, base + 18, isU ? '<i>U</i>' : '<i>K</i>', { size: 15, color: isU ? C.amber : C.text });
      });
      s.line(xs[0] - 4, base, xs[1] + bw + 4, base, { color: C.ink, w: 1.2 });
    });
    const res = resultBlock(s, ['Total height of each bar (<i>E</i> = <i>K</i> + <i>U</i>)', 'is identical: energy is conserved.'], 14);
    const [l, mid, r] = p.bobs.map((b) => b.at);
    s.place(
      [
        // out at the edges, clear of the strings they used to sit across
        { t: 'Highest point', p: [l[0], l[1] - R], own: l, at: [[2, l[1] - R - 52, 'start'], [2, l[1] - R - 44, 'start']] },
        { t: 'Highest point', p: [r[0], r[1] - R], own: r, at: [[W - 2, r[1] - R - 52, 'end'], [W - 2, r[1] - R - 44, 'end']] },
        { t: 'Lowest point', p: [mid[0], mid[1] + R], own: mid, at: [[mid[0], mid[1] + R + 12, 'middle']] },
      ],
      [res]
    );
    return s;
  },
  check() {
    const p = pen54(), { P: Pv, L, th, m, g, bar } = PEN54, k = bar / p.E;
    const [l, mid, r] = p.bobs;
    return [
      ['Every bob is a string length from the pivot', p.bobs.every((b) => close(len(sub(b.at, Pv)), L, 1e-9))],
      [`The highest points are ${th}° either side of the vertical, at the same height`, close(between(sub(l.at, Pv), [0, 1]), th) && close(between(sub(r.at, Pv), [0, 1]), th) && close(l.at[1], r.at[1])],
      [`h = L(1 − cos ${th}°) = ${fmt(p.h, 3)} L above the lowest point; the drawn rise is ${fmt((mid.at[1] - l.at[1]) / L, 3)} L`, close((mid.at[1] - l.at[1]) / L, p.h)],
      ['At the extremes v = 0: K = 0 and U = mgh = E (all potential)', close(l.K, 0) && close(r.K, 0) && close(l.U, m * g * p.h) && close(r.U, p.E)],
      [`At the bottom U = 0 and K = ½mv² with v = √(2gh) = ${fmt(Math.sqrt(2 * g * p.h), 3)}: K = E (all kinetic)`, close(mid.U, 0) && close(mid.K, p.E, 1e-9)],
      ['Each pair of bars adds to the same height E = K + U', p.bobs.every((b) => close((b.U + b.K) * k, bar, 1e-9))],
    ];
  },
};

/* ===================================================================== */
/* Figure 5.5 · P–t area is work; W–t slope is power (topic 06)           */
/* ===================================================================== */
/** One motion for both panels: P = Pm sin(πt/T), and W(t) = ∫P dt = (PmT/π)(1 − cos(πt/T)). T = 1, Pm = 1. */
const P55 = (t: number) => Math.sin(Math.PI * t);
const W55 = (t: number) => (1 - Math.cos(Math.PI * t)) / Math.PI;
const T55 = { t1: 1 / 3, before: 0.185, after: 0.33 };
const FP55: Frame = { ox: 38, oy: 254, sx: 268, sy: 178 };
const FW55: Frame = { ox: 38, oy: 254, sx: 268, sy: 290 };
type Case55 = { chip: string; cap: string; part: 'P' | 'W' };
const tan55 = () => {
  const { t1, before, after } = T55, m = P55(t1), w1 = W55(t1);
  return { m, w1, a: at(FW55, t1 - before, w1 - m * before), b: at(FW55, t1 + after, w1 + m * after), p: at(FW55, t1, w1) };
};
const fig55: Diagram = {
  id: 'p11-05-fig-5.5',
  topic: 5,
  name: 'Power–time area, work–time slope',
  cases: [
    { chip: 'P–t', part: 'P', cap: 'The area under a power-time curve is the work done.' },
    { chip: 'W–t', part: 'W', cap: 'The slope of a work-time curve (the tangent at a point) is the instantaneous power.' },
  ],
  draw(c: Case55) {
    const s = new Sketch(W, 290);
    if (c.part === 'P') {
      const f = FP55;
      axes(s, f, { t: [0, 1.08], v: [0, 1.22], tName: '<i>t</i>', vName: '<i>P</i>' });
      const cx = X(f, 0.5), cy = Y(f, 0.42);
      slivers(s, f, P55, 0, 1, [[cx - 62, cy - 38, cx + 62, cy + 26]]);
      curve(s, f, P55, 0, 1, { color: C.mari, w: 2.6 });
      s.sym(cx, cy - 18, 'Area under', { size: 15 });
      s.sym(cx, cy, '<i>P</i>-<i>t</i> curve', { size: 15 });
      s.sym(cx, cy + 18, '= Work done', { size: 15 });
      s.place([{ t: 'Power versus time', p: at(f, 0.82, P55(0.82)), hi: true, at: [[W - 8, 30, 'end'], [W - 8, 46, 'end']] }]);
      return s;
    }
    const f = FW55, g = tan55();
    axes(s, f, { t: [0, 1.08], v: [0, 0.75], tName: '<i>t</i>', vName: '<i>W</i>' });
    curve(s, f, W55, 0, 1, { w: 2 });
    path(s, [g.a, g.b], { color: C.mari, w: 2.4 });
    s.point(g.p[0], g.p[1], 4.2, `<circle cx="${r1(g.p[0])}" cy="${r1(g.p[1])}" r="4.2" fill="${C.mari}"/>`);
    s.sym(X(f, 0.6), Y(f, 0.13), 'Slope of <i>W</i>-<i>t</i> curve', { size: 14, color: C.amber, anchor: 'start' });
    s.sym(X(f, 0.6), Y(f, 0.13) + 18, '= instantaneous power', { size: 14, color: C.amber, anchor: 'start' });
    s.place([
      { t: 'Tangent at a point', p: add(g.a, sub(g.b, g.a), 0.96), hi: true, at: [[W - 8, 146, 'end'], [W - 8, 160, 'end']] },
      { t: 'Work versus time', p: at(f, 0.86, W55(0.86)), at: [[W - 8, 30, 'end'], [W - 8, 14, 'end']] },
    ]);
    return s;
  },
  check(c: Case55) {
    const total = W55(1);
    if (c.part === 'P') {
      const f = FP55;
      let area = 0;
      const n = 4000;
      for (let i = 0; i < n; i++) { const t0 = i / n, t1 = (i + 1) / n; const y0 = vOf(f, Y(f, P55(t0))), y1 = vOf(f, Y(f, P55(t1))); area += ((y0 + y1) / 2) * (t1 - t0); }
      return [
        ['P starts and ends at zero and peaks halfway', close(P55(0), 0) && close(P55(1), 0, 1e-12) && close(P55(0.5), 1)],
        [`The drawn area under the P–t curve is ${fmt(area, 4)} = 2PmT/π`, close(area, 2 / Math.PI, 1e-6)],
        [`It is the work done: W(T) on the W–t graph = ${fmt(total, 4)}`, close(area, total, 1e-6)],
      ];
    }
    const f = FW55, g = tan55();
    const slope = (vOf(f, g.b[1]) - vOf(f, g.a[1])) / (tOf(f, g.b[0]) - tOf(f, g.a[0]));
    const h = 1e-6, dWdt = (t: number) => (W55(t + h) - W55(t - h)) / (2 * h);
    return [
      ['W(t) is the running area under the P–t curve: dW/dt = P everywhere', [0.1, 0.3, 0.5, 0.7, 0.9].every((t) => close(dWdt(t), P55(t), 1e-6))],
      [`The tangent touches the curve at t = ${fmt(T55.t1, 3)} T (W = ${fmt(g.w1, 3)})`, close(vOf(f, g.p[1]), W55(T55.t1)) && close(Math.abs((vOf(f, g.a[1]) - g.w1) * (tOf(f, g.b[0]) - T55.t1) - (vOf(f, g.b[1]) - g.w1) * (tOf(f, g.a[0]) - T55.t1)), 0, 1e-9)],
      [`Its drawn slope ${fmt(slope, 4)} = dW/dt there = the instantaneous power P = ${fmt(P55(T55.t1), 4)}`, close(slope, dWdt(T55.t1), 1e-6) && close(slope, P55(T55.t1), 1e-9)],
      ['The curve starts and ends level (P = 0 at t = 0 and t = T) and never falls (P ≥ 0)', close(dWdt(1e-5), 0, 1e-4) && close(dWdt(1 - 1e-5), 0, 1e-4) && [0.2, 0.4, 0.6, 0.8].every((t) => dWdt(t) > 0)],
      [`It ends at W(T) = ${fmt(total, 4)}, the area under the P–t curve`, close(total, 2 / Math.PI)],
    ];
  },
};

/* ===================================================================== */
/* Figure 5.6 · head-on and oblique collisions (topic 07)                 */
/* ===================================================================== */
/**
 * Head-on: an elastic collision of m₁ with a heavier m₂ (m₂ = 4m₁), m₁ catching it up,
 * so m₁ rebounds as in the book. Oblique: equal masses, m₂ at rest, elastic, the
 * line of impact 35° below m₁'s path (the book's angle): m₂ leaves along it, m₁
 * at right angles to it. Velocities in px at `k` px per unit.
 */
const ONE = { m1: 1, m2: 4, u1: 6, u2: 1.5, k: 12, R: 22, xc: 150, tau: 16, yB: 70, yA: 176 };
/** The two snapshots are taken the same time τ before and after the contact (m₁ at xc, m₂ at xc + 2R). */
const one56 = () => {
  const { m1, m2, u1, u2, R, xc, tau } = ONE;
  const v1 = ((m1 - m2) * u1 + 2 * m2 * u2) / (m1 + m2), v2 = (2 * m1 * u1 + (m2 - m1) * u2) / (m1 + m2);
  return { v1, v2, before: [xc - u1 * tau, xc + 2 * R - u2 * tau] as [number, number], after: [xc + v1 * tau, xc + 2 * R + v2 * tau] as [number, number] };
};
const TWO = { u1: 5, phi: 35, k: 12, R: 20 };
const two56 = () => {
  const { u1, phi, k, R } = TWO;
  const C1: P = [150, 222], line = dir(-phi), C2 = add(C1, line, 2 * R);
  const v2 = mul(line, u1 * Math.cos(phi * D2R) * k), v1 = mul(dir(90 - phi), u1 * Math.sin(phi * D2R) * k);
  const B1: P = [44, 78], B2: P = [196, 78 + 2 * R * Math.sin(phi * D2R)];
  return { C1, C2, line, v1, v2, B1, B2, U: [u1 * k, 0] as P };
};
type Case56 = { chip: string; cap: string; part: '1d' | '2d' };
const CAP56 = 'Head-on (1-D) collision with velocities <i>u</i><sub>1</sub>, <i>u</i><sub>2</sub> before and <i>v</i><sub>1</sub>, <i>v</i><sub>2</sub> after, and an oblique (2-D) collision in which the second ball leaves along the line of impact.';
function ball(s: Sketch, c: P, R: number, sub2: '1' | '2') {
  s.point(c[0], c[1], R, `<circle cx="${r1(c[0])}" cy="${r1(c[1])}" r="${R}" fill="#fff" stroke="${C.ink}" stroke-width="1.8"/>`);
  s.text(c[0], c[1] + 5, `<i>m</i><sub>${sub2}</sub>`, { size: 15 });
}
const fig56: Diagram = {
  id: 'p11-05-fig-5.6',
  topic: 6,
  name: 'Head-on and oblique collisions',
  cases: [
    { chip: 'Head-on (1-D)', part: '1d', cap: CAP56 },
    { chip: 'Oblique (2-D)', part: '2d', cap: CAP56 },
  ],
  draw(c: Case56) {
    if (c.part === '1d') {
      const s = new Sketch(W, 214);
      const { u1, u2, k, R, yB, yA } = ONE, g = one56(), { v1, v2 } = g;
      const rows: { y: number; head: string; xs: [number, number]; vs: [number, number]; names: [string, string]; hi: boolean }[] = [
        { y: yB, head: 'before', xs: g.before, vs: [u1, u2], names: ['<i>u</i><sub>1</sub>', '<i>u</i><sub>2</sub>'], hi: true },
        { y: yA, head: 'after', xs: g.after, vs: [v1, v2], names: ['<i>v</i><sub>1</sub>', '<i>v</i><sub>2</sub>'], hi: false },
      ];
      rows.forEach((r) => {
        words(s, 14, r.y - 48, r.head, { size: 13 });
        r.xs.forEach((x, i) => {
          ball(s, [x, r.y], R, i ? '2' : '1');
          const ay = r.y - R - 12, L = r.vs[i] * k;
          s.vec(x, ay, x + L, ay, { color: r.hi ? C.mari : C.ink, w: r.hi ? 2.4 : 2 });
          s.sym(L > 0 ? x - 6 : x + 6, ay + 5, r.names[i], { size: 15, anchor: L > 0 ? 'end' : 'start', color: r.hi ? C.amber : C.text });
        });
      });
      return s;
    }
    const s = new Sketch(W, 330);
    const g = two56(), { R, phi } = TWO;
    words(s, 14, 30, 'before', { size: 13 });
    words(s, 14, 150, 'at contact and after', { size: 13 });
    // before: m1 heads right, m2 waits below its path
    path(s, [[g.B1[0] + R + 2, g.B1[1]], [g.B2[0] + 60, g.B1[1]]], { color: C.grey, w: 1, dash: 'dot' });
    ball(s, g.B1, R, '1');
    ball(s, g.B2, R, '2');
    s.vec(g.B1[0] + R + 4, g.B1[1], g.B1[0] + R + 4 + g.U[0], g.B1[1], { color: C.mari, w: 2.4 });
    s.sym(g.B1[0] + R + 4 + g.U[0] / 2, g.B1[1] - 10, '<i>u</i><sub>1</sub>', { size: 15, color: C.amber });
    s.sym(g.B2[0], g.B2[1] + R + 18, '(at rest)', { size: 13, color: C.slate });
    // at contact: m1's old path dotted, the line of impact through both centres dashed
    path(s, [[g.C1[0] - 110, g.C1[1]], [g.C1[0] + 170, g.C1[1]]], { color: C.grey, w: 1, dash: 'dot' });
    path(s, [add(g.C1, g.line, -78), add(g.C1, g.line, 2 * R + 120)], { color: C.slate, w: 1.3, dash: 'dash' });
    ball(s, g.C1, R, '1');
    ball(s, g.C2, R, '2');
    const s1 = add(g.C1, dir(90 - phi), R + 3), s2 = add(g.C2, g.line, R + 3);
    s.vec(s1[0], s1[1], s1[0] + g.v1[0], s1[1] + g.v1[1], { w: 2.2 });
    s.vec(s2[0], s2[1], s2[0] + g.v2[0], s2[1] + g.v2[1], { w: 2.2 });
    const t1 = add(s1, g.v1), t2 = add(s2, g.v2);
    s.sym(t1[0] + 8, t1[1] + 4, '<i>v</i><sub>1</sub>', { size: 15, anchor: 'start' });
    s.sym(t2[0] + 8, t2[1] - 12, '<i>v</i><sub>2</sub>', { size: 15, anchor: 'start' });
    s.place([{ t: 'Line of impact', p: add(g.C1, g.line, 2 * R + 112), at: [[W - 8, add(g.C1, g.line, 2 * R + 112)[1] + 10, 'end'], [W - 8, 300, 'end']] }]);
    return s;
  },
  check(c: Case56) {
    if (c.part === '1d') {
      const { m1, m2, u1, u2, k, R, tau } = ONE, { v1, v2, before, after } = one56();
      const p0 = m1 * u1 + m2 * u2, p1 = m1 * v1 + m2 * v2, K0 = 0.5 * m1 * u1 * u1 + 0.5 * m2 * u2 * u2, K1 = 0.5 * m1 * v1 * v1 + 0.5 * m2 * v2 * v2;
      return [
        [`Before: m₁ at u₁ = ${u1} catches m₂ at u₂ = ${u2} (both to the right), so they collide`, u1 > u2 && u2 > 0],
        [`Momentum: ${fmt(p0)} before = ${fmt(p1)} after (m₂ = ${m2}m₁)`, close(p0, p1)],
        [`Elastic: v₂ − v₁ = ${fmt(v2 - v1)} = u₁ − u₂ = ${fmt(u1 - u2)} (e = 1), and KE ${fmt(K0, 3)} = ${fmt(K1, 3)}`, close(v2 - v1, u1 - u2) && close(K0, K1)],
        [`After: v₁ = ${fmt(v1)} (m₁ rebounds, to the left), v₂ = ${fmt(v2)} (to the right), as drawn`, v1 < 0 && v2 > 0],
        [`Each arrow is its velocity at ${k} px per unit, all along the one line`, [u1, u2, v1, v2].every((v) => Math.abs(v * k) > 9)],
        [`The snapshots are ${fmt(tau / k)} time units before and after contact: the balls are ${fmt(before[1] - before[0])} px apart before and ${fmt(after[1] - after[0])} px after (equal, as e = 1)`, close(before[1] - before[0], 2 * R + (u1 - u2) * tau) && close(after[1] - after[0], 2 * R + (v2 - v1) * tau) && close(before[1] - before[0], after[1] - after[0])],
        ['Neither snapshot has the balls overlapping', before[1] - before[0] > 2 * R && after[1] - after[0] > 2 * R],
      ];
    }
    const g = two56(), { u1, phi, k, R } = TWO;
    const U = phys(g.U, k), V1 = phys(g.v1, k), V2 = phys(g.v2, k), L = phys(g.line, 1);
    const sep = len(sub(g.C2, g.C1)), b = g.B2[1] - g.B1[1];
    return [
      [`At contact the centres are 2R apart, the line of impact through both at ${phi}° to m₁’s path`, close(sep, 2 * R, 1e-9) && close(between(sub(g.C2, g.C1), [1, 0]), phi)],
      [`Before, m₂ sits ${fmt(b, 1)} px below m₁’s path = 2R sin ${phi}°: the path m₁ follows meets it at that line of impact`, close(b, 2 * R * Math.sin(phi * D2R), 1e-9)],
      ['m₂ leaves along the line of impact (the push of a smooth contact is along the line of centres)', close(g.v2[0] * (g.C2[1] - g.C1[1]) - g.v2[1] * (g.C2[0] - g.C1[0]), 0, 1e-9) && dotp(g.v2, sub(g.C2, g.C1)) > 0],
      [`v₂ = u₁ cos ${phi}° = ${fmt(len(V2), 3)}, v₁ = u₁ sin ${phi}° = ${fmt(len(V1), 3)}, and they are ${fmt(between(g.v1, g.v2))}° apart`, close(len(V2), u1 * Math.cos(phi * D2R)) && close(len(V1), u1 * Math.sin(phi * D2R)) && close(between(g.v1, g.v2), 90, 1e-9)],
      ['Momentum (equal masses): u₁ = v₁ + v₂ as vectors', close(U[0], V1[0] + V2[0]) && close(U[1], V1[1] + V2[1])],
      [`Kinetic energy: u₁² = ${fmt(u1 * u1)} = v₁² + v₂² = ${fmt(len(V1) ** 2 + len(V2) ** 2)}`, close(u1 * u1, len(V1) ** 2 + len(V2) ** 2)],
      ['m₁’s velocity component across the line of impact is unchanged; along it, it passes wholly to m₂', close(dotp(V1, L), 0) && close(dotp(U, [-L[1], L[0]]), dotp(V1, [-L[1], L[0]])) && close(dotp(U, L), dotp(V2, L))],
    ];
  },
};

/** Chapter order: by topic, then by page. */
export const DIAGRAMS_PHYSICS_11_05: Diagram[] = [fig51, fig52, fig53, fig54, fig55, fig56];
