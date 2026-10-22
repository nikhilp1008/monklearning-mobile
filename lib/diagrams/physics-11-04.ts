import { C, Rect, Sketch, r1, mathW } from '@/lib/diagrams/kit';
import type { Diagram } from '@/lib/diagrams/types';

/**
 * PHYSICS CLASS 11, CHAPTER 4 (Laws of Motion): every figure of the Master
 * Reference book, redrawn. The chapter's drawings are its eight numbered
 * figures (pp. 217–242); it has no unnumbered drawings (pp. 195–281 were
 * checked page by page: the rest is text, tables and typeset equations).
 *
 * Every figure here is a set of forces, so every force is drawn TO SCALE: a
 * figure picks how many px one newton is (`k`), each arrow's length is the
 * force the physics gives, and its direction is the physics' own (weight
 * straight down, normal at right angles to the surface, friction along it,
 * tension along the string). Each `check` turns the drawn arrows back into
 * newtons and recomputes the physics: forces that should balance add to
 * zero, the angles are the stated ones, and the values the book works out
 * (T = 100 N, N ≈ 57.7 N, a = 7.5 m/s², tan θ = v²/rg, …) come back out.
 */

const W = 340;
type P = [number, number];
const D2R = Math.PI / 180;
/** A unit vector on the drawing at `deg` degrees anticlockwise from +x (the drawing's y runs down). */
const dir = (deg: number): P => [Math.cos(deg * D2R), -Math.sin(deg * D2R)];
const add = (a: P, b: P, k = 1): P => [a[0] + k * b[0], a[1] + k * b[1]];
/** The baseline that centres a 14 px label on a point: an angle's label sits on its bisector, not above it (Android: "30°" touched the rope). */
const centred = (p: P): P => [p[0], p[1] + 5];
const sub = (a: P, b: P): P => [a[0] - b[0], a[1] - b[1]];
const mul = (a: P, k: number): P => [a[0] * k, a[1] * k];
const len = (v: P) => Math.hypot(v[0], v[1]);
const dotp = (a: P, b: P) => a[0] * b[0] + a[1] * b[1];
const close = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) < tol;
const fmt = (n: number, d = 2) => String(+n.toFixed(d)).replace('-', '−');
/** A drawn vector back in physics: newtons (or m/s², …), x to the right, y UP. */
const phys = (v: P, k: number): P => [v[0] / k, -v[1] / k];
/** The direction of a drawn vector in degrees anticlockwise from +x. */
const angOf = (v: P) => Math.atan2(-v[1], v[0]) / D2R;
/** The angle between two drawn vectors, in degrees. */
const between = (a: P, b: P) => Math.acos(Math.max(-1, Math.min(1, dotp(a, b) / (len(a) * len(b))))) / D2R;
/** Do drawn vectors add to nothing (in px)? */
const balanced = (vs: P[], tol = 1e-9) => { const s = vs.reduce((a, v) => add(a, v), [0, 0] as P); return Math.abs(s[0]) < tol && Math.abs(s[1]) < tol; };

/* ---------- drawing helpers ---------- */
type Stroke = { color?: string; w?: number; dash?: 'dash' | 'dot' | 'dashdot'; fill?: boolean };
const dashOf = (d?: Stroke['dash']) => (d === 'dash' ? ' stroke-dasharray="5 4"' : d === 'dot' ? ' stroke-dasharray="1.5 3.5"' : d === 'dashdot' ? ' stroke-dasharray="8 3 1.5 3"' : '');
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
  path(s, pts, { color: o.color ?? C.slate, w: o.w ?? 1.2 });
}
/** Hatching along a fixed surface from a to b, on the side `side` (+1 = the left of a→b as drawn). */
function hatch(s: Sketch, a: P, b: P, side: 1 | -1, step = 12, L = 8) {
  const t = mul(sub(b, a), 1 / len(sub(b, a))), n: P = mul([t[1], -t[0]], side);
  const out: P = add(mul(n, Math.SQRT1_2), mul(t, -Math.SQRT1_2));
  for (let d = step / 2; d < len(sub(b, a)); d += step) { const p = add(a, t, d); s.line(p[0], p[1], p[0] + L * out[0], p[1] + L * out[1], { color: C.grey, w: 1.1 }); }
}
/** A force: the vector `v` (px) drawn from `at`. */
const force = (s: Sketch, at: P, v: P, o: { color?: string; w?: number; dash?: boolean } = {}) => s.vec(at[0], at[1], at[0] + v[0], at[1] + v[1], { w: o.w ?? 2, color: o.color ?? C.ink, dash: o.dash });
const HI = { color: C.mari, w: 2.6 };
const COMP = { color: C.grey, w: 1.5, dash: true };
/** A block standing on a surface: its foot F (middle of its base), the surface's direction u and outward normal n. */
function block(F: P, u: P, n: P, hl: number, hh: number): P[] {
  return [add(F, u, -hl), add(F, u, hl), add(add(F, u, hl), n, 2 * hh), add(add(F, u, -hl), n, 2 * hh)];
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
const degTxt = (d: number) => `${d}°`;

/* ===================================================================== */
/* Figure 4.1 · the lamp on two ropes, and the junction's FBD (topic 03)  */
/* ===================================================================== */
/** The book's numbers: W = 100 N, each rope 30° to the beam. k = px per newton. */
const LAMP = { W: 100, ang: 30, k: 1 };
/** 2T sin 30° = W. */
const tension41 = () => LAMP.W / (2 * Math.sin(LAMP.ang * D2R));
const geo41a = () => {
  const beamY = 34, cx = 170, half = 112;
  const A: P = [cx - half, beamY], B: P = [cx + half, beamY];
  const J: P = [cx, beamY + half * Math.tan(LAMP.ang * D2R)];
  const shadeTop = J[1] + 12, shadeBot = J[1] + 36;
  const Wv: P = mul([0, 1], LAMP.W * LAMP.k), Wfrom: P = [cx, shadeBot + 6];
  return { beamY, cx, A, B, J, shadeTop, shadeBot, Wv, Wfrom };
};
const geo41b = () => {
  const J: P = [170, 112], T = tension41(), k = LAMP.k;
  const T1 = mul(dir(180 - LAMP.ang), T * k), T2 = mul(dir(LAMP.ang), T * k), Wv: P = mul([0, 1], LAMP.W * k);
  return { J, T, T1, T2, Wv };
};
type Case41 = { chip: string; cap: string; part: 'a' | 'b' };
const CAP41 = 'A horizontal beam with two ropes descending symmetrically to a single point where a lamp hangs; each rope makes 30° with the beam; weight 100 N acts downward at the junction.';
const fig41: Diagram = {
  id: 'p11-04-fig-4.1',
  topic: 2,
  name: 'A lamp hung from two ropes',
  cases: [
    { chip: 'The lamp', part: 'a', cap: `(a) lamp hung from the beam. ${CAP41}` },
    { chip: 'Junction FBD', part: 'b', cap: `(b) FBD of the junction. ${CAP41}` },
  ],
  draw(c: Case41) {
    if (c.part === 'a') {
      const s = new Sketch(W, 270);
      const g = geo41a();
      s.line(14, g.beamY, 326, g.beamY, { w: 2.6 });
      hatch(s, [14, g.beamY], [326, g.beamY], 1, 14);
      path(s, [g.A, g.J, g.B], { w: 1.7 });
      // the lamp: a stem and a shade, hanging from the junction
      path(s, [g.J, [g.cx, g.shadeTop]], { w: 1.7 });
      shape(s, [[g.cx - 21, g.shadeTop], [g.cx + 21, g.shadeTop], [g.cx + 13, g.shadeBot], [g.cx - 13, g.shadeBot]], HI);
      force(s, g.Wfrom, g.Wv);
      [g.A, g.B].forEach((p) => s.point(p[0], p[1], 3, `<circle cx="${r1(p[0])}" cy="${r1(p[1])}" r="3" fill="#fff" stroke="${C.ink}" stroke-width="1.5"/>`));
      s.dot(g.J[0], g.J[1], 3.4);
      // the 30° between each rope and the beam
      arc(s, g.A, 36, -LAMP.ang, 0);
      arc(s, g.B, 36, 180, 180 + LAMP.ang);
      s.sym(...centred(add(g.A, dir(-LAMP.ang / 2), 50)), degTxt(LAMP.ang), { size: 14, color: C.slate, anchor: 'start' });
      s.sym(...centred(add(g.B, dir(180 + LAMP.ang / 2), 50)), degTxt(LAMP.ang), { size: 14, color: C.slate, anchor: 'end' });
      const tip = add(g.Wfrom, g.Wv);
      s.sym(tip[0] + 10, tip[1] - 4, `<i>W</i> = ${LAMP.W} N`, { anchor: 'start' });
      s.place([
        { t: 'Lamp', p: [g.cx + 17, (g.shadeTop + g.shadeBot) / 2], hi: true, at: [[g.cx + 40, g.shadeTop + 4, 'start'], [g.cx + 40, g.shadeTop - 8, 'start']] },
        { t: 'Junction', p: g.J, own: g.J, at: [[g.cx - 26, g.J[1] + 4, 'end'], [g.cx - 26, g.J[1] + 14, 'end']] },
        { t: 'Beam', p: [306, g.beamY], at: [[W - 8, g.beamY + 12, 'end'], [W - 8, g.beamY + 20, 'end']] },
      ]);
      return s;
    }
    const s = new Sketch(W, 236);
    const g = geo41b();
    path(s, [[g.J[0] - 118, g.J[1]], [g.J[0] + 118, g.J[1]]], { color: C.grey, w: 1.2, dash: 'dash' });
    force(s, g.J, g.T1);
    force(s, g.J, g.T2);
    force(s, g.J, g.Wv);
    arc(s, g.J, 40, 0, LAMP.ang);
    arc(s, g.J, 40, 180 - LAMP.ang, 180);
    s.point(g.J[0], g.J[1], 4.6, `<circle cx="${r1(g.J[0])}" cy="${r1(g.J[1])}" r="4.6" fill="${C.mari}"/>`);
    s.sym(...centred(add(g.J, dir(LAMP.ang / 2), 60)), degTxt(LAMP.ang), { size: 14, color: C.slate });
    s.sym(...centred(add(g.J, dir(180 - LAMP.ang / 2), 60)), degTxt(LAMP.ang), { size: 14, color: C.slate });
    const t1 = add(g.J, g.T1), t2 = add(g.J, g.T2), w = add(g.J, g.Wv);
    s.sym(t1[0] - 6, t1[1] - 6, '<i>T</i>', { anchor: 'end' });
    s.sym(t2[0] + 6, t2[1] - 6, '<i>T</i>', { anchor: 'start' });
    s.sym(w[0] + 10, w[1] - 2, '<i>W</i>', { anchor: 'start' });
    s.place([{ t: 'Junction', p: g.J, own: g.J, hi: true, at: [[g.J[0] - 26, g.J[1] + 34, 'end'], [g.J[0] + 26, g.J[1] + 34, 'start']] }]);
    return s;
  },
  check(c: Case41) {
    const { k, W: Wt, ang } = LAMP;
    if (c.part === 'a') {
      const g = geo41a();
      const left = between(sub(g.J, g.A), [1, 0]), right = between(sub(g.J, g.B), [-1, 0]);
      return [
        [`Each rope makes ${fmt(left)}° and ${fmt(right)}° with the beam`, close(left, ang) && close(right, ang)],
        ['The ropes descend symmetrically to one point (the junction sits midway)', close(g.J[0], (g.A[0] + g.B[0]) / 2) && g.J[1] > g.beamY],
        [`The weight is drawn straight down, ${fmt(len(g.Wv) / k)} N`, close(g.Wv[0], 0) && g.Wv[1] > 0 && close(len(g.Wv) / k, Wt)],
        ['The lamp hangs, and its weight acts, on the vertical through the junction', close(g.Wfrom[0], g.J[0]) && g.Wfrom[1] > g.J[1]],
      ];
    }
    const g = geo41b();
    const T1 = phys(g.T1, k), T2 = phys(g.T2, k), Wn = phys(g.Wv, k);
    return [
      [`Both tensions point ${fmt(angOf(g.T2))}° above the horizontal, one each way`, close(angOf(g.T2), ang) && close(180 - angOf(g.T1), ang)],
      [`Vertical balance 2T sin 30° = W: T = ${fmt(g.T)} N (the book's 100 N)`, close(2 * g.T * Math.sin(ang * D2R), Wt) && close(g.T, 100)],
      [`The drawn tensions are ${fmt(Math.hypot(...T1))} N and ${fmt(Math.hypot(...T2))} N, the weight ${fmt(Math.hypot(...Wn))} N`, close(Math.hypot(...T1), 100) && close(Math.hypot(...T2), 100) && close(Math.hypot(...Wn), 100)],
      ['Horizontal parts cancel by symmetry', close(T1[0] + T2[0], 0)],
      ['The three drawn forces add to zero: the junction is in equilibrium', balanced([g.T1, g.T2, g.Wv])],
      ['W points straight down, the tensions along the ropes, away from the junction', close(Wn[0], 0) && Wn[1] < 0 && T1[1] > 0 && T2[1] > 0],
    ];
  },
};

/* ===================================================================== */
/* Figure 4.2 · a block on a smooth 30° incline, held by a horizontal     */
/* string to a wall (topic 03, Example 3)                                 */
/* ===================================================================== */
/** 5 kg, g = 10 m/s², θ = 30°; k px per newton. */
const INC42 = { m: 5, g: 10, th: 30, k: 1.5 };
const geo42 = () => {
  const { m, g, th, k } = INC42, t = th * D2R;
  const mg = m * g, N = mg / Math.cos(t), T = N * Math.sin(t);
  const u = dir(180 - th), n = dir(90 - th); // up the slope (towards the wall); outward normal (away from the wall)
  const G = 252, Xw = 60, hl = 18, hh = 20, apexGap = 22;
  // the block sits just below the top of the slope so the horizontal string clears the top corner
  const Cb: P = [Xw + T * k + 14, 0];
  const Fx = Cb[0] - hh * n[0], Ax = Fx + apexGap * u[0];
  const toeX = 330, H = (toeX - Ax) * Math.tan(t);
  const A: P = [Ax, G - H];
  const F: P = add(A, u, -apexGap);
  const Cc: P = add(F, n, hh);
  const toe: P = [toeX, G];
  return { mg, N, T, u, n, G, Xw, hl, hh, A, F, C: Cc, toe, Nv: mul(n, N * k), Tv: mul([-1, 0], T * k), Wv: mul([0, 1], mg * k) };
};
const fig42: Diagram = {
  id: 'p11-04-fig-4.2',
  topic: 2,
  name: 'Block on an incline, held by a horizontal string',
  cases: [{ chip: 'Horizontal string', cap: 'A block on a 30° incline; a horizontal string runs from the block to a vertical wall; forces shown are weight <i>mg</i> down, normal <i>N</i> perpendicular to incline, tension <i>T</i> horizontal.' }],
  draw() {
    const s = new Sketch(W, 274);
    const g = geo42(), { C: Cc } = g;
    // ground, wall, wedge
    s.line(10, g.G, 334, g.G, { w: 1.7 });
    hatch(s, [10, g.G], [334, g.G], -1, 14);
    s.line(g.Xw, 62, g.Xw, g.G, { w: 2.4 });
    hatch(s, [g.Xw, g.G], [g.Xw, 62], 1, 14);
    shape(s, [g.A, [g.A[0], g.G], g.toe], { w: 1.7 });
    arc(s, g.toe, 36, 180 - INC42.th, 180);
    s.sym(g.toe[0] - 50, g.G - 8, `<i>θ</i> = ${degTxt(INC42.th)}`, { size: 14, color: C.slate, anchor: 'end' });
    // the string, horizontal from the block to the wall
    s.line(g.Xw, Cc[1], Cc[0], Cc[1], { color: C.ink, w: 1.3 });
    shape(s, block(g.F, mul(g.u, -1), g.n, g.hl, g.hh));
    // the vertical through the block, and the 30° between it and N
    path(s, [Cc, [Cc[0], Cc[1] - 64]], { color: C.grey, w: 1.2, dash: 'dash' });
    arc(s, Cc, 34, 90 - INC42.th, 90);
    s.sym(...centred(add(Cc, dir(90 - INC42.th / 2), 50)), degTxt(INC42.th), { size: 14, color: C.slate });
    force(s, Cc, g.Nv);
    force(s, Cc, g.Wv);
    force(s, Cc, g.Tv, HI);
    s.dot(Cc[0], Cc[1], 2.6);
    const nt = add(Cc, g.Nv), wt = add(Cc, g.Wv), tt = add(Cc, g.Tv);
    s.sym(nt[0] + 7, nt[1] + 4, '<i>N</i>', { anchor: 'start' });
    s.sym(wt[0] + 8, wt[1] - 2, '<i>mg</i>', { anchor: 'start' });
    s.sym(tt[0] + 4, tt[1] - 9, '<i>T</i>', { anchor: 'middle' });
    s.sym(Cc[0] + 30, Cc[1] + 22, `${INC42.m} kg`, { size: 14, anchor: 'start' });
    const slopeAt = (x: number): P => [x, g.A[1] + (x - g.A[0]) * Math.tan(INC42.th * D2R)];
    s.place([
      { t: 'Horizontal string', p: [Cc[0] - 30, Cc[1]], hi: true, at: [[10, 16, 'start'], [10, 30, 'start']] },
      { t: 'Wall', p: [g.Xw, 180], at: [[g.Xw - 6, 156, 'end'], [g.Xw - 6, 186, 'end']] },
      { t: 'Smooth incline', p: slopeAt(236), at: [[W - 8, 122, 'end'], [W - 8, 104, 'end']] },
    ]);
    return s;
  },
  check() {
    const g = geo42(), { k, th, m } = INC42;
    const Nn = phys(g.Nv, k), Tn = phys(g.Tv, k), Wn = phys(g.Wv, k);
    const t = th * D2R;
    const stringClear = g.A[1] - g.C[1];
    return [
      [`mg = ${m} × 10 = ${fmt(Math.hypot(...Wn))} N, straight down`, close(Math.hypot(...Wn), 50) && close(Wn[0], 0) && Wn[1] < 0],
      ['N is at right angles to the incline and points away from the wall', close(dotp(g.Nv, g.u), 0) && Nn[0] > 0 && Nn[1] > 0],
      [`N makes ${fmt(between(g.Nv, [0, -1]))}° with the vertical`, close(between(g.Nv, [0, -1]), th)],
      [`T is horizontal, towards the wall`, close(Tn[1], 0) && Tn[0] < 0 && g.Xw < g.C[0]],
      [`N cos θ = mg gives N = 100/√3 = ${fmt(Math.hypot(...Nn), 1)} N (book: ≈ 57.7 N)`, close(Math.hypot(...Nn) * Math.cos(t), 50) && Math.hypot(...Nn).toFixed(1) === '57.7'],
      [`T = N sin θ = ${fmt(Math.hypot(...Tn), 1)} N (book: ≈ 28.9 N), also mg tan θ`, close(Math.hypot(...Tn), Math.hypot(...Nn) * Math.sin(t)) && close(Math.hypot(...Tn), 50 * Math.tan(t)) && Math.hypot(...Tn).toFixed(1) === '28.9'],
      ['The three drawn forces add to zero', balanced([g.Nv, g.Tv, g.Wv])],
      ['The incline rises at 30° towards the wall', close(angOf(sub(g.A, g.toe)), 180 - th)],
      ['The block sits on the incline', close(dotp(sub(g.F, g.A), g.n), 0) && g.F[0] > g.A[0] && g.F[0] < g.toe[0]],
      [`The horizontal string clears the top of the incline by ${fmt(stringClear, 1)} px on its way to the wall`, stringClear > 3],
    ];
  },
};

/* ===================================================================== */
/* Figure 4.3 · the bob in an accelerating truck, and its FBD (topic 03)  */
/* ===================================================================== */
/** 2 kg bob, g = 10, sin 37° = 0.6, cos 37° = 0.8: the book's rounding. */
const BOB = { m: 2, g: 10, sin: 0.6, cos: 0.8 };
const bob43 = () => {
  const { m, g, sin, cos } = BOB;
  const T = (m * g) / cos, a = (T * sin) / m;
  const ang = Math.atan2(sin, cos) / D2R; // 36.87°, the book's "37°"
  return { T, a, ang, mg: m * g, ma: m * a };
};
type Case43 = { chip: string; cap: string; part: 'a' | 'b' };
const CAP43 = 'A truck accelerating to the right; a pendulum bob inside hangs back at 37° from vertical; FBD shows tension <i>T</i> along the string, weight <i>mg</i> down, and (in the truck frame) a pseudo-force <i>ma</i> backward.';
const TRUCK = { P: [150, 94] as P, L: 62 };
const FBD43 = { B: [176, 114] as P, k: 3.6 };
const geo43b = () => {
  const b = bob43(), { k } = FBD43;
  return { ...b, Tv: mul(dir(90 - b.ang), b.T * k), Wv: mul([0, 1], b.mg * k), Fv: mul([-1, 0], b.ma * k) };
};
const fig43: Diagram = {
  id: 'p11-04-fig-4.3',
  topic: 2,
  name: 'A bob hanging in an accelerating truck',
  cases: [
    { chip: 'The truck', part: 'a', cap: `(a) truck accelerates to the right. ${CAP43}` },
    { chip: 'Bob FBD', part: 'b', cap: `(b) FBD of the bob. ${CAP43}` },
  ],
  draw(c: Case43) {
    const b = bob43();
    if (c.part === 'a') {
      const s = new Sketch(W, 224);
      const road = 198, { P: Pv, L } = TRUCK;
      s.line(8, road, 332, road, { w: 1.7 });
      hatch(s, [8, road], [332, road], -1, 16);
      shape(s, [[20, 94], [222, 94], [222, 170], [20, 170]]);
      shape(s, [[222, 60], [292, 60], [292, 170], [222, 170]]);
      shape(s, [[236, 74], [278, 74], [278, 106], [236, 106]], { w: 1.4 });
      [66, 176, 256].forEach((x) => s.add(`<circle cx="${x}" cy="184" r="14" fill="#fff" stroke="${C.ink}" stroke-width="1.7"/>`));
      // the acceleration of the truck
      s.vec(116, 32, 196, 32, { color: C.slate, w: 2 });
      s.sym(204, 37, '<i>a</i>', { anchor: 'start' });
      // the bob hangs back, 37° from the vertical
      const B = add(Pv, dir(-90 - b.ang), L);
      path(s, [Pv, [Pv[0], Pv[1] + L + 4]], { color: C.grey, w: 1.2, dash: 'dash' });
      arc(s, Pv, 34, -90 - b.ang, -90);
      s.sym(...centred(add(Pv, dir(-90 - b.ang / 2), 47)), '37°', { size: 14, color: C.slate });
      path(s, [Pv, B], HI);
      s.dot(Pv[0], Pv[1], 2.6);
      s.dot(B[0], B[1], 6);
      s.place([
        { t: 'Bob hangs back', p: B, own: B, hi: true, at: [[14, 54, 'start'], [14, 44, 'start']] },
        { t: 'Truck', p: [292, 86], at: [[W - 8, 28, 'end'], [W - 6, 20, 'end']] },
      ]);
      return s;
    }
    const s = new Sketch(W, 214);
    const g = geo43b(), { B } = FBD43;
    path(s, [B, [B[0], B[1] - 96]], { color: C.grey, w: 1.2, dash: 'dash' });
    arc(s, B, 38, 90 - g.ang, 90);
    s.sym(...add(B, dir(90 - g.ang / 2), 54), '37°', { size: 14, color: C.slate });
    force(s, B, g.Tv);
    force(s, B, g.Wv);
    force(s, B, g.Fv, { ...HI, dash: true });
    s.dot(B[0], B[1], 4);
    const tt = add(B, g.Tv), wt = add(B, g.Wv), ft = add(B, g.Fv);
    s.sym(tt[0] + 7, tt[1] + 2, '<i>T</i>', { anchor: 'start' });
    s.sym(wt[0] + 9, wt[1] - 2, '<i>mg</i>', { anchor: 'start' });
    s.sym(B[0] - 8, ft[1] + 22, '<i>ma</i> (pseudo)', { size: 14, anchor: 'end' });
    s.place([
      { t: 'Pseudo-force', p: add(B, g.Fv, 0.6), hi: true, at: [[14, 70, 'start'], [14, 58, 'start']] },
      { t: 'Bob', p: B, own: B, at: [[B[0] + 18, B[1] + 20, 'start'], [B[0] + 22, B[1] + 30, 'start']] },
    ]);
    return s;
  },
  check(c: Case43) {
    const b = bob43();
    if (c.part === 'a') {
      const B = add(TRUCK.P, dir(-90 - b.ang), TRUCK.L), str = sub(B, TRUCK.P);
      return [
        [`The string hangs ${fmt(between(str, [0, 1]))}° from the vertical (sin = 0.6, cos = 0.8: the book's 37°)`, close(between(str, [0, 1]), b.ang) && Math.round(b.ang) === 37],
        ['It hangs back, opposite to the truck’s acceleration (to the right)', str[0] < 0],
        [`tan 37° = a/g: a = 10 × 0.75 = ${fmt(b.a)} m/s²`, close(b.a, 7.5) && close(Math.tan(b.ang * D2R), b.a / BOB.g)],
      ];
    }
    const g = geo43b(), { k } = FBD43;
    const Tn = phys(g.Tv, k), Wn = phys(g.Wv, k), Fn = phys(g.Fv, k);
    return [
      [`T is drawn along the string, ${fmt(between(g.Tv, [0, -1]))}° from the vertical, up towards the roof`, close(between(g.Tv, [0, -1]), g.ang) && Tn[1] > 0 && Tn[0] > 0],
      [`T cos 37° = mg: T = 20/0.8 = ${fmt(Math.hypot(...Tn))} N`, close(Math.hypot(...Tn), 25)],
      [`mg = ${fmt(Math.hypot(...Wn))} N down; ma = 2 × 7.5 = ${fmt(Math.hypot(...Fn))} N, backward (opposite to a)`, close(Math.hypot(...Wn), 20) && close(Fn[0], -15) && close(Fn[1], 0)],
      ['In the truck frame T, mg and ma add to zero', balanced([g.Tv, g.Wv, g.Fv])],
      [`The string lines up with g_eff: T = m√(g² + a²) = ${fmt(BOB.m * Math.hypot(BOB.g, g.a))} N`, close(BOB.m * Math.hypot(BOB.g, g.a), Math.hypot(...Tn))],
    ];
  },
};

/* ===================================================================== */
/* Figure 4.4 · the angle of repose (topic 04, Derivation 1)              */
/* ===================================================================== */
/** θr is any angle; 30° (μs = tan 30° ≈ 0.58, the coin of Example 2). Forces in units of mg, mg = `mg` px. */
const REPOSE = { th: 30, mg: 96 };
const geo44 = () => {
  const { th, mg } = REPOSE, t = th * D2R;
  const G = 248, toe: P = [36, G], topX = 318;
  const u = dir(th), n = dir(90 + th); // up the slope; outward normal
  const top: P = [topX, G - (topX - toe[0]) * Math.tan(t)];
  const hl = 20, hh = 12;
  const F: P = add(toe, u, (196 - toe[0]) / Math.cos(t));
  const Cc = add(F, n, hh);
  const mus = Math.tan(t);
  const N = mg * Math.cos(t), f = mus * N;
  return { G, toe, top, u, n, hl, hh, F, C: Cc, mus, Wv: [0, mg] as P, Nv: mul(n, N), fv: mul(u, f), sinv: mul(u, -mg * Math.sin(t)), cosv: mul(n, -mg * Math.cos(t)) };
};
const fig44: Diagram = {
  id: 'p11-04-fig-4.4',
  topic: 3,
  name: 'The angle of repose',
  cases: [{ chip: 'Verge of sliding', cap: 'A block on an incline of angle <i>θ</i><sub><i>r</i></sub> (the angle of repose): weight <i>mg</i>, normal <i>N</i>, and limiting friction <i>f</i> = <i>μ</i><sub><i>s</i></sub> <i>N</i> up the slope; <i>mg</i> is resolved into <i>mg</i> sin <i>θ</i><sub><i>r</i></sub> (along) and <i>mg</i> cos <i>θ</i><sub><i>r</i></sub> (perpendicular).' }],
  draw() {
    const s = new Sketch(W, 268);
    const g = geo44(), { C: Cc } = g;
    s.line(12, g.G, 334, g.G, { w: 1.7 });
    hatch(s, [12, g.G], [334, g.G], -1, 14);
    shape(s, [g.toe, g.top, [g.top[0], g.G]], { w: 1.7 });
    arc(s, g.toe, 44, 0, REPOSE.th);
    s.sym(...add(g.toe, dir(REPOSE.th / 2.4), 60), '<i>θ</i><sub><i>r</i></sub>', { size: 15, color: C.slate });
    shape(s, block(g.F, g.u, g.n, g.hl, g.hh));
    force(s, Cc, g.cosv, COMP);
    force(s, Cc, g.sinv, COMP);
    force(s, Cc, g.Nv);
    force(s, Cc, g.Wv);
    force(s, Cc, g.fv, HI);
    s.dot(Cc[0], Cc[1], 2.6);
    const at = (v: P) => add(Cc, v);
    s.sym(at(g.Nv)[0] - 6, at(g.Nv)[1] - 4, '<i>N</i>', { anchor: 'end' });
    s.sym(at(g.fv)[0] + 7, at(g.fv)[1] - 3, '<i>f</i>', { anchor: 'start' });
    s.sym(at(g.Wv)[0] + 8, at(g.Wv)[1] - 1, '<i>mg</i>', { anchor: 'start' });
    s.sym(at(g.cosv)[0] + 6, at(g.cosv)[1] + 14, '<i>mg</i> cos <i>θ</i><sub><i>r</i></sub>', { size: 14, color: C.slate, anchor: 'start' });
    s.sym(at(g.sinv)[0] - 6, at(g.sinv)[1] + 4, '<i>mg</i> sin <i>θ</i><sub><i>r</i></sub>', { size: 14, color: C.slate, anchor: 'end' });
    s.sym(W / 2, 22, '<i>f</i>\u2009 = <i>μ</i><sub><i>s</i></sub>\u200a<i>N</i>  (limiting, up the slope)', { size: 14, color: C.slate });
    s.place([
      { t: 'Limiting friction', p: add(Cc, g.fv, 0.8), hi: true, at: [[W - 8, 52, 'end'], [W - 8, 40, 'end']] },
      { t: 'Block', p: add(add(g.F, g.u, -g.hl), g.n, 2 * g.hh), at: [[110, 96, 'end'], [96, 80, 'end'], [64, 60, 'end']] },
    ]);
    return s;
  },
  check() {
    const g = geo44(), { th, mg } = REPOSE, t = th * D2R;
    const N = len(g.Nv) / mg, f = len(g.fv) / mg;
    return [
      ['N is at right angles to the incline, f along it, up the slope', close(dotp(g.Nv, g.u), 0) && close(between(g.fv, g.u), 0) && g.fv[1] < 0],
      ['mg sin θr runs down the slope and mg cos θr into the surface; they add back to mg', close(dotp(g.sinv, g.n), 0) && close(dotp(g.cosv, g.u), 0) && balanced([g.sinv, g.cosv, mul(g.Wv, -1)])],
      [`N = mg cos θr = ${fmt(N, 3)} mg`, close(N, Math.cos(t))],
      [`At the verge, f = mg sin θr = ${fmt(f, 3)} mg balances the down-slope pull`, close(f, Math.sin(t)) && close(len(g.sinv), len(g.fv))],
      [`f = μs N with μs = tan θr = ${fmt(g.mus, 3)}: f/N = ${fmt(f / N, 3)}`, close(f / N, g.mus) && close(Math.tan(t), g.mus)],
      ['The three forces add to zero: the block is just in equilibrium', balanced([g.Nv, g.fv, g.Wv])],
      [`The incline is drawn at θr = ${fmt(angOf(sub(g.top, g.toe)))}°`, close(angOf(sub(g.top, g.toe)), th)],
    ];
  },
};

/* ===================================================================== */
/* Figure 4.5 · table block, pulley and hanging block (topic 04, Ex. 3)   */
/* ===================================================================== */
/** 3 kg on the table, 2 kg hanging, μ = 0.2, g = 10; k px per newton. */
const PUL = { m1: 3, m2: 2, mu: 0.2, g: 10, k: 4 };
const pul45 = () => {
  const { m1, m2, mu, g } = PUL;
  const drive = m2 * g, fric = mu * m1 * g, a = (drive - fric) / (m1 + m2), T = fric + m1 * a;
  return { drive, fric, a, T };
};
const TABLE = { top: 90, x0: 120, x1: 262, slab: 12, ground: 278 };
const geo45 = () => {
  const p = pul45(), { k } = PUL, { top, x1 } = TABLE;
  const pr = 10, pc: P = [x1 + pr, top - pr];
  const b1: Rect = [146, top - 40, 206, top];
  const b2: Rect = [pc[0] + pr - 20, 136, pc[0] + pr + 20, 176];
  // friction acts on the block's base, against its motion towards the pulley
  const fFrom: P = [b1[0], top - 4], fv: P = [-p.fric * k, 0];
  const wFrom: P = [(b2[0] + b2[2]) / 2, b2[3]], wv: P = [0, PUL.m2 * PUL.g * k];
  const aLen = 40, a1: P[] = [[154, 26], [154 + aLen, 26]], a2: P[] = [[b2[2] + 16, 140], [b2[2] + 16, 140 + aLen]];
  return { ...p, pc, pr, b1, b2, fFrom, fv, wFrom, wv, a1, a2 };
};
const fig45: Diagram = {
  id: 'p11-04-fig-4.5',
  topic: 3,
  name: 'Table block and hanging block',
  cases: [{ chip: 'Over a pulley', cap: 'A 3 kg block on a table connected by a string over a pulley at the edge to a 2 kg block hanging vertically; friction acts on the table block opposing its motion toward the pulley.' }],
  draw() {
    const s = new Sketch(W, 296);
    const g = geo45(), { top, x0, x1, slab, ground } = TABLE;
    s.line(10, ground, 334, ground, { w: 1.7 });
    hatch(s, [10, ground], [334, ground], -1, 16);
    // the table: a top and two legs
    [x0 + 16, x1 - 42].forEach((x) => { s.line(x, top + slab, x, ground, { w: 1.5 }); s.line(x + 7, top + slab, x + 7, ground, { w: 1.5 }); });
    shape(s, [[x0, top], [x1, top], [x1, top + slab], [x0, top + slab]]);
    // the pulley on its bracket at the edge
    s.line(x1, top, g.pc[0], g.pc[1], { w: 1.5 });
    s.add(`<circle cx="${g.pc[0]}" cy="${g.pc[1]}" r="${g.pr}" fill="#fff" stroke="${C.ink}" stroke-width="1.7"/>`);
    s.dot(g.pc[0], g.pc[1], 2.2);
    // the string: block 1 → over the pulley → block 2
    s.line(g.b1[2], g.pc[1] - g.pr, g.pc[0], g.pc[1] - g.pr, { w: 1.3 });
    s.add(`<path d="M${g.pc[0]} ${g.pc[1] - g.pr} A${g.pr} ${g.pr} 0 0 1 ${g.pc[0] + g.pr} ${g.pc[1]}" fill="none" stroke="${C.ink}" stroke-width="1.3"/>`);
    s.line(g.pc[0] + g.pr, g.pc[1], g.pc[0] + g.pr, g.b2[1], { w: 1.3 });
    shape(s, [[g.b1[0], g.b1[1]], [g.b1[2], g.b1[1]], [g.b1[2], g.b1[3]], [g.b1[0], g.b1[3]]]);
    shape(s, [[g.b2[0], g.b2[1]], [g.b2[2], g.b2[1]], [g.b2[2], g.b2[3]], [g.b2[0], g.b2[3]]]);
    s.text((g.b1[0] + g.b1[2]) / 2, (g.b1[1] + g.b1[3]) / 2 + 5, `${PUL.m1} kg`, { size: 14 });
    s.text((g.b2[0] + g.b2[2]) / 2, (g.b2[1] + g.b2[3]) / 2 + 5, `${PUL.m2} kg`, { size: 14 });
    // forces and accelerations
    force(s, g.fFrom, g.fv, HI);
    force(s, g.wFrom, g.wv);
    s.vec(...g.a1[0], ...g.a1[1], { color: C.slate, w: 1.8 });
    s.vec(...g.a2[0], ...g.a2[1], { color: C.slate, w: 1.8 });
    s.sym(g.a1[1][0] + 8, g.a1[1][1] + 5, '<i>a</i>', { anchor: 'start' });
    s.sym(g.a2[1][0] + 8, (g.a2[0][1] + g.a2[1][1]) / 2 + 5, '<i>a</i>', { anchor: 'start' });
    s.sym((g.b1[2] + g.pc[0]) / 2, g.pc[1] - g.pr - 8, '<i>T</i>');
    s.sym(g.pc[0] + g.pr + 8, (g.pc[1] + g.b2[1]) / 2 + 6, '<i>T</i>', { anchor: 'start' });
    const ft = add(g.fFrom, g.fv), wt = add(g.wFrom, g.wv);
    s.sym(ft[0] - 8, ft[1] + 20, '<i>f</i> = <i>μm</i><sub>1</sub><i>g</i>', { anchor: 'end' });
    s.sym(wt[0] + 10, wt[1] - 4, '<i>m</i><sub>2</sub><i>g</i>', { anchor: 'start' });
    // centred between the legs (it ran into the right one)
    s.sym((x0 + 23 + x1 - 42) / 2, top + slab + 20, `<i>μ</i> = ${PUL.mu}`, { size: 14, color: C.slate });
    s.place([
      { t: 'Friction', p: add(g.fFrom, g.fv, 0.5), hi: true, at: [[14, 30, 'start'], [14, 44, 'start']] },
      { t: 'Pulley', p: add(g.pc, dir(60), g.pr), at: [[W - 8, 36, 'end'], [W - 8, 24, 'end']] },
      { t: 'Table', p: [x0 + 19.5, top + slab + 44], at: [[(x0 + x1) / 2 - 30, 150, 'start'], [(x0 + x1) / 2 - 30, 170, 'start']] },
    ]);
    return s;
  },
  check() {
    const g = geo45(), { k, m1, m2, g: gv } = PUL;
    const fN = phys(g.fv, k), wN = phys(g.wv, k);
    return [
      [`Will it move? m₂g = ${fmt(g.drive)} N > μm₁g = ${fmt(g.fric)} N: yes`, close(g.drive, 20) && close(g.fric, 6) && g.drive > g.fric],
      [`Friction is drawn ${fmt(Math.hypot(...fN))} N, pointing away from the pulley (against the motion)`, close(Math.hypot(...fN), 6) && fN[0] < 0 && g.pc[0] > g.b1[2]],
      [`m₂g is drawn ${fmt(Math.hypot(...wN))} N, straight down`, close(wN[1], -m2 * gv) && close(wN[0], 0)],
      [`a = (20 − 6)/5 = ${fmt(g.a)} m/s²; T = 6 + 3(2.8) = ${fmt(g.T)} N`, close(g.a, 2.8) && close(g.T, 14.4)],
      ['Each block obeys its own equation: T − μm₁g = m₁a and m₂g − T = m₂a', close(g.T - g.fric, m1 * g.a) && close(g.drive - g.T, m2 * g.a)],
      ['T is less than the hanging weight, as the 2 kg block accelerates down', g.T < g.drive],
      ['The two acceleration arrows are equal (one string, one a), block 1 towards the pulley, block 2 down', close(len(sub(g.a1[1], g.a1[0])), len(sub(g.a2[1], g.a2[0]))) && g.a1[1][0] > g.a1[0][0] && g.a2[1][1] > g.a2[0][1]],
      ['The string leaves block 1 level and drops plumb to block 2', close(g.pc[1] - g.pr, g.b1[1] + (g.b1[3] - g.b1[1]) * 0.5) && close(g.pc[0] + g.pr, (g.b2[0] + g.b2[2]) / 2)],
    ];
  },
};

/* ===================================================================== */
/* Figures 4.6 and 4.7 · the banked road (topic 05)                      */
/* ===================================================================== */
/** The chapter's road of Example 3: tan θ = 0.5, μ = 0.5, r = 90 m, g = 10. */
const BANK = { tan: 0.5, mu: 0.5, r: 90, g: 10 };
const bankGeo = (mgPx: number) => {
  const th = Math.atan(BANK.tan) / D2R;
  const u = dir(th), n = dir(90 + th); // up the bank (outward from the centre); outward normal, leaning towards the centre
  const F: P = [243, 185], hl = 16, hh = 14;
  const Cc = add(F, n, hh);
  const roadY = (x: number) => F[1] - (x - F[0]) * BANK.tan;
  const L: P = [20, roadY(20)], R: P = [330, roadY(330)];
  return { th, u, n, F, hl, hh, C: Cc, L, R, Wv: [0, mgPx] as P };
};
function drawRoad(s: Sketch, g: ReturnType<typeof bankGeo>) {
  path(s, [g.L, [g.L[0] + 76, g.L[1]]], { color: C.grey, w: 1.2, dash: 'dash' });
  s.line(g.L[0], g.L[1], g.R[0], g.R[1], { w: 3 });
  hatch(s, g.L, g.R, -1, 22, 9);
  arc(s, g.L, 46, 0, g.th);
  s.sym(...add(g.L, dir(g.th / 2.4), 64), '<i>θ</i>', { size: 15, color: C.slate });
  shape(s, block(g.F, g.u, g.n, g.hl, g.hh));
  // beside the block, off its outline (inside the corner it sat on the edge)
  const mAt = add(add(g.F, g.u, g.hl + 9), g.n, g.hh);
  s.text(mAt[0], mAt[1] + 4, '<i>m</i>', { size: 13 });
  // which way the centre of the circle lies (the low, inner side of the bank)
  s.vec(72, 26, 14, 26, { color: C.slate, w: 1.8 });
  s.tag(80, 15, 'Towards the centre', null, null);
}
const fig46: Diagram = {
  id: 'p11-04-fig-4.6',
  topic: 4,
  name: 'Banked road, no friction',
  cases: [{ chip: 'N leans inward', cap: 'A vehicle on a road banked at angle <i>θ</i>; the normal reaction <i>N</i>, perpendicular to the tilted surface, is resolved into <i>N</i> cos <i>θ</i> (vertical) and <i>N</i> sin <i>θ</i> (horizontal, toward the centre); weight <i>mg</i> acts straight down.' }],
  draw() {
    const s = new Sketch(W, 338);
    const mgPx = 88, g = bankGeo(mgPx), Cc = g.C, t = g.th * D2R;
    const Nv = mul(g.n, mgPx / Math.cos(t)), cosv: P = [0, Nv[1]], sinv: P = [Nv[0], 0];
    drawRoad(s, g);
    const nt = add(Cc, Nv);
    path(s, [nt, add(Cc, cosv)], { color: C.grey, w: 1.1, dash: 'dot' });
    path(s, [nt, add(Cc, sinv)], { color: C.grey, w: 1.1, dash: 'dot' });
    force(s, Cc, cosv, COMP);
    force(s, Cc, sinv, COMP);
    force(s, Cc, g.Wv);
    force(s, Cc, Nv, HI);
    s.dot(Cc[0], Cc[1], 2.6);
    s.sym(nt[0] - 7, nt[1] - 2, '<i>N</i>', { anchor: 'end' });
    s.sym(Cc[0] + 8, add(Cc, cosv)[1] + 26, '<i>N</i> cos <i>θ</i>', { size: 14, color: C.slate, anchor: 'start' });
    s.sym(add(Cc, sinv)[0] - 7, Cc[1] + 5, '<i>N</i> sin <i>θ</i>', { size: 14, color: C.slate, anchor: 'end' });
    s.sym(Cc[0] + 9, Cc[1] + mgPx - 1, '<i>mg</i>', { anchor: 'start' });
    const res = resultBlock(s, ['<i>N</i> cos <i>θ</i> = <i>mg</i>', '<i>N</i> sin <i>θ</i> = <i>mv</i><sup>2</sup>/<i>r</i>']);
    s.place(
      [
        { t: 'Normal reaction', p: add(Cc, Nv, 0.62), hi: true, at: [[14, 70, 'start'], [14, 92, 'start'], [14, 110, 'start']] },
      ],
      [res]
    );
    return s;
  },
  check() {
    const mgPx = 88, g = bankGeo(mgPx), t = g.th * D2R;
    const Nv = mul(g.n, mgPx / Math.cos(t)), mg = len(g.Wv);
    const Nc = -Nv[1], Ns = -Nv[0]; // vertical (up) and horizontal (towards the centre, to the left) parts
    const vDesign = Math.sqrt(BANK.r * BANK.g * BANK.tan);
    return [
      [`The road is banked at θ = ${fmt(g.th)}° (tan θ = ${BANK.tan})`, close(Math.tan(angOf(sub(g.R, g.L)) * D2R), BANK.tan)],
      ['N is at right angles to the road and leans towards the centre (the low, inner side)', close(dotp(Nv, g.u), 0) && Nv[0] < 0 && Nv[1] < 0 && g.L[1] > g.R[1]],
      ['Vertical balance: the drawn N cos θ equals the drawn mg', close(Nc, mg)],
      [`N sin θ / N cos θ = tan θ = ${fmt(Ns / Nc, 3)} = v²/rg`, close(Ns / Nc, BANK.tan)],
      [`On this road (r = 90 m) that is the design speed √(rg tan θ) = ${fmt(vDesign, 1)} m/s: m v²/r = N sin θ`, close((vDesign * vDesign) / BANK.r, BANK.g * (Ns / Nc)) && vDesign.toFixed(1) === '21.2'],
      ['With no friction, N and mg leave a net force that is horizontal, towards the centre', close(Nv[1] + g.Wv[1], 0) && Nv[0] < 0],
    ];
  },
};

const geo47 = () => {
  const mgPx = 70, g = bankGeo(mgPx), t = g.th * D2R, { mu } = BANK;
  const N = mgPx / (Math.cos(t) - mu * Math.sin(t));
  const Nv = mul(g.n, N), fv = mul(g.u, -mu * N);
  return { ...g, mgPx, N, Nv, fv, horiz: [Nv[0] + fv[0], 0] as P, cosv: [0, Nv[1]] as P };
};
const fig47: Diagram = {
  id: 'p11-04-fig-4.7',
  topic: 4,
  name: 'Banked road with friction, at top speed',
  cases: [{ chip: 'With friction', cap: 'Banked road with three forces on the vehicle: <i>N</i> perpendicular to the surface, weight <i>mg</i> down, and friction <i>f</i> = <i>μN</i> directed down the incline; <i>N</i> and <i>f</i> are resolved into horizontal and vertical components.' }],
  draw() {
    const s = new Sketch(W, 338);
    const g = geo47(), Cc = g.C;
    drawRoad(s, g);
    const nt = add(Cc, g.Nv);
    path(s, [nt, add(Cc, g.cosv)], { color: C.grey, w: 1.1, dash: 'dot' });
    force(s, Cc, g.cosv, COMP);
    force(s, Cc, g.horiz, COMP);
    force(s, Cc, g.Wv);
    force(s, Cc, g.Nv);
    force(s, Cc, g.fv, HI);
    s.dot(Cc[0], Cc[1], 2.6);
    const ft = add(Cc, g.fv), ht = add(Cc, g.horiz);
    s.sym(nt[0] - 7, nt[1] - 2, '<i>N</i>', { anchor: 'end' });
    s.sym(Cc[0] + 8, add(Cc, g.cosv)[1] + 26, '<i>N</i> cos <i>θ</i>', { size: 14, color: C.slate, anchor: 'start' });
    s.sym(ht[0] - 12, Cc[1] + 5, '<i>N</i> sin <i>θ</i> + <i>μN</i> cos <i>θ</i>', { size: 14, color: C.slate, anchor: 'end' });
    s.sym(ft[0] - 9, ft[1] + 8, '<i>f</i> = <i>μN</i>', { anchor: 'end' });
    s.sym(Cc[0] + 9, Cc[1] + g.mgPx - 1, '<i>mg</i>', { anchor: 'start' });
    const res = resultBlock(s, ['<i>N</i> cos <i>θ</i> − <i>μN</i> sin <i>θ</i> = <i>mg</i>', '<i>N</i> sin <i>θ</i> + <i>μN</i> cos <i>θ</i> = <i>m</i>(<i>v</i><sub>max</sub>)<sup>2</sup>/<i>r</i>'], 13);
    s.place(
      [
        { t: 'Friction', p: add(Cc, g.fv, 0.75), hi: true, at: [[14, 100, 'start'], [14, 120, 'start'], [14, 80, 'start']] },
      ],
      [res]
    );
    return s;
  },
  check() {
    const g = geo47(), t = g.th * D2R, { mu, r, g: gv, tan } = BANK, mg = g.mgPx;
    const vert = -g.Nv[1] - g.fv[1], horiz = -g.horiz[0]; // N's up part less friction's down part; the inward total
    const vmax2 = (horiz / mg) * r * gv;
    const formula = r * gv * ((tan + mu) / (1 - mu * tan));
    return [
      ['N is at right angles to the road, leaning towards the centre', close(dotp(g.Nv, g.u), 0) && g.Nv[0] < 0],
      [`f runs down the bank (towards the inner edge), f/N = ${fmt(len(g.fv) / len(g.Nv), 2)} = μ`, close(between(g.fv, mul(g.u, -1)), 0) && close(len(g.fv), mu * len(g.Nv)) && g.fv[1] > 0],
      [`Vertical: N cos θ − μN sin θ = mg (${fmt(vert / mg, 6)} mg)`, close(vert, mg) && close(len(g.Nv) * (Math.cos(t) - mu * Math.sin(t)), mg)],
      ['Both N and f pull inward: the drawn horizontal is N sin θ + μN cos θ', close(horiz, len(g.Nv) * Math.sin(t) + mu * len(g.Nv) * Math.cos(t)) && g.Nv[0] < 0 && g.fv[0] < 0],
      [`So v²max = rg(tan θ + μ)/(1 − μ tan θ) = ${fmt(vmax2)}: v_max = √1200 ≈ ${fmt(Math.sqrt(vmax2), 1)} m/s (Example 3)`, close(vmax2, formula) && close(vmax2, 1200) && Math.sqrt(vmax2).toFixed(1) === '34.6'],
      ['N, f and mg leave a net force that is horizontal, towards the centre', close(g.Nv[1] + g.fv[1] + g.Wv[1], 0) && g.Nv[0] + g.fv[0] < 0],
      [`Faster than the frictionless design speed √450 ≈ ${fmt(Math.sqrt(r * gv * tan), 1)} m/s`, Math.sqrt(vmax2) > Math.sqrt(r * gv * tan)],
    ];
  },
};

/* ===================================================================== */
/* Figure 4.8 · the well of death (topic 05, Example 4)                   */
/* ===================================================================== */
/** r = 3 m, μ = 0.6, g = 10; drawn at the minimum speed, where f = μN exactly. mg = `mg` px. */
const WELL = { r: 3, mu: 0.6, g: 10, mg: 58 };
const geo48 = () => {
  const { r, mu, g, mg } = WELL;
  const axisX = 170, wallR = 316, wallL = 24, top = 40, floor = 292, pxPerM = (wallR - axisX) / r;
  const vmin = Math.sqrt((g * r) / mu);
  const N = (mg * (vmin * vmin)) / (g * r); // N = m v²/r, in px with mg px for m g
  const rider: P = [wallR - 7, 160];
  return { axisX, wallR, wallL, top, floor, pxPerM, vmin, rider, Nv: [-N, 0] as P, fv: [0, -mg] as P, Wv: [0, mg] as P };
};
const fig48: Diagram = {
  id: 'p11-04-fig-4.8',
  topic: 4,
  name: 'The well of death',
  cases: [{ chip: 'Rider on wall', cap: 'A vertical cylinder; a motorcyclist on the inside wall; normal reaction <i>N</i> pointing horizontally toward the axis (centripetal), weight <i>mg</i> down, friction <i>f</i> acting vertically upward along the wall.' }],
  draw() {
    const s = new Sketch(W, 318);
    const g = geo48();
    s.line(g.wallL, g.top, g.wallL, g.floor, { w: 2.6 });
    s.line(g.wallR, g.top, g.wallR, g.floor, { w: 2.6 });
    s.line(g.wallL, g.floor, g.wallR, g.floor, { w: 1.7 });
    hatch(s, [g.wallL, g.floor], [g.wallL, g.top], 1, 26, 10);
    hatch(s, [g.wallR, g.top], [g.wallR, g.floor], 1, 26, 10);
    path(s, [[g.axisX, 22], [g.axisX, g.floor + 12]], { color: C.slate, w: 1.2, dash: 'dashdot' });
    // r, from the axis to the wall
    const ry = g.floor - 20;
    s.vec(g.axisX + 40, ry, g.axisX + 2, ry, { color: C.ink, w: 1.3 });
    s.vec(g.wallR - 40, ry, g.wallR - 2, ry, { color: C.ink, w: 1.3 });
    s.line(g.axisX + 40, ry, g.wallR - 40, ry, { color: C.ink, w: 1.3 });
    s.sym((g.axisX + g.wallR) / 2, ry - 8, `<i>r</i> = ${WELL.r} m`, { size: 14 });
    s.sym(g.axisX + 12, 66, '<i>v</i>: into the page', { size: 14, color: C.slate, anchor: 'start' });
    force(s, g.rider, g.Wv);
    force(s, g.rider, g.fv);
    force(s, g.rider, g.Nv, HI);
    s.dot(g.rider[0], g.rider[1], 6.5);
    const nt = add(g.rider, g.Nv), ft = add(g.rider, g.fv), wt = add(g.rider, g.Wv);
    s.sym((g.rider[0] + nt[0]) / 2 - 6, g.rider[1] - 12, '<i>N</i> = <i>mv</i><sup>2</sup>/<i>r</i>', { size: 15 });
    s.sym(ft[0] - 9, ft[1] + 8, '<i>f</i>', { anchor: 'end' });
    s.sym(wt[0] - 9, wt[1] - 2, '<i>mg</i>', { anchor: 'end' });
    s.place([
      { t: 'Normal reaction', p: add(g.rider, g.Nv, 0.55), hi: true, at: [[g.axisX + 8, g.rider[1] + 16, 'start'], [g.axisX + 8, g.rider[1] + 26, 'start']] },
      { t: 'Rider', p: g.rider, own: g.rider, at: [[g.wallR - 30, 92, 'end'], [g.wallR - 30, 84, 'end']] },
      { t: 'Axis', p: [g.axisX, 30], at: [[g.axisX - 8, 22, 'end'], [g.axisX - 8, 30, 'end']] },
      { t: 'Wall', p: [g.wallL, 200], at: [[g.wallL + 14, 186, 'start']] },
    ]);
    return s;
  },
  check() {
    const g = geo48(), { r, mu, g: gv, mg } = WELL;
    const N = len(g.Nv) / mg, f = len(g.fv) / mg; // in units of mg
    return [
      ['N is horizontal, pointing from the rider towards the axis', close(g.Nv[1], 0) && g.Nv[0] < 0 && g.rider[0] > g.axisX],
      ['f is vertical, upward along the wall; mg straight down', close(g.fv[0], 0) && g.fv[1] < 0 && close(g.Wv[0], 0) && g.Wv[1] > 0],
      ['Vertical equilibrium: f = mg (equal arrows)', close(len(g.fv), len(g.Wv))],
      [`v_min = √(gr/μ) = √50 = ${fmt(g.vmin)} m/s`, close(g.vmin * g.vmin, 50) && g.vmin.toFixed(2) === '7.07'],
      [`At v_min, N = mv²/r = ${fmt(N, 3)} mg and f = μN exactly (${fmt(mu * N, 3)} mg)`, close(N, (g.vmin * g.vmin) / (gv * r)) && close(mu * N, f)],
      [`r is drawn ${fmt((g.wallR - g.axisX) / g.pxPerM)} m from the axis to the wall`, close((g.wallR - g.axisX) / g.pxPerM, r)],
      ['The net force is N alone: horizontal and centripetal', close(g.fv[1] + g.Wv[1], 0) && g.Nv[0] < 0],
    ];
  },
};

/** Chapter order: by topic, then by page. */
export const DIAGRAMS_PHYSICS_11_04: Diagram[] = [fig41, fig42, fig43, fig44, fig45, fig46, fig47, fig48];

