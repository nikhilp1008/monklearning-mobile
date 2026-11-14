import { C, Sketch } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';
import {
  DEG, Gr, I, P, PI, W, allIn, arcPts, arr, axes, box, circle, close, curve, curveBack, dotNamed, dotOver, fmt, fr, gp, gx, gy,
  hatch, hatchOf, lab, labelsCheck, layout, len, linesNamed, noBadChars, onCurve, onlyMarigold, path, pol, pt, runs, sample, stackedCheck,
  tick, tickText, unPx,
} from '@/lib/diagrams/mathematics-12-05';

/**
 * MATHEMATICS CLASS 12, CHAPTER 6 (Applications of Derivatives): Figures 6.1–6.7 of the Master Reference book
 * (October 2026 snapshot, math12.pdf, PDF page = bottom folio), redrawn. Each figure stands on its own "CHAPTER 6 ·
 * FIGURES" plate, the page after its caption. The chapter has no Topic 00, so Topic 01 is index 0.
 *
 *   Figure 6.1 (p. 388; caption p. 387), 6.2 (p. 390; caption p. 389): Topic 01, index 0.
 *   Figure 6.3 (p. 396; caption p. 395), 6.4 (p. 399; caption p. 398): Topic 02, index 1.
 *   Figure 6.5 (p. 405; caption p. 404), 6.6 (p. 408; caption p. 407): Topic 03, index 2.
 *   Figure 6.7 (p. 414; caption p. 413): Topic 04, index 3.
 *
 * ONE HIGHLIGHT. The book's orange is the marigold (lines, amber text): 6.1 the two rates ẋ and ẏ; 6.2 the inflow
 * "8 cm³/s in"; 6.3 the minus sign and the falling arrow; 6.5 the two horizontal tangents and "f′ < 0"; 6.6 r and
 * h/2; 6.7 the tangent y = 2x − 1. 6.4 has no orange: nothing is marigold. The book's navy and green are ink, its
 * grey slate.
 *
 * NO FILLS. 6.2's water (a pale green tint) is grey 45° hatching inside the cone below the water's front edge; 6.4's
 * gap between the curves (a pale blue tint) is grey hatching between them; 6.6's pale tint inside the cylinder is left
 * out (the rectangle is an outline). Hatching stops 3.5 px short of every line and 5 px short of every label.
 *
 * DOTS AND DERIVATIVES. ẋ and ẏ are the italic letter with a dot drawn by hand over it (dotOver), not STIX's
 * combining dot. Every fraction is stacked by hand, also where the book prints a slash (h/2 in 6.6, x/2 + 1/2 in
 * 6.7). A unit's slash (m/s, cm³/s) stays, as the chapter's text writes it. No em dash anywhere.
 */

const X = I('x'), Y = I('y'), H = I('h'), R = I('r'), RR = I('R'), O = I('O'), TH = I('θ'), F = I('f');
const FP = `${F}′`, FPP = `${F}″`;

/* ===================================================================== */
/* Figure 6.1 · the sliding ladder (Topic 01, p. 388)                    */
/* ===================================================================== */
const CAP61 = `A 13 m ladder against a wall: the foot, ${X} = 5 m from the wall, moves away at 2 m/s while the top, at height ${Y} = 12 m, slides down at ${fr('5', '6')} m/s.`;
const G61: Gr = { ox: 74, oy: 345, ux: 23, uy: 23 };
const fig61: Diagram = {
  id: 'm12-06-fig-6.1',
  topic: 0,
  name: 'The sliding ladder',
  cases: [{ chip: 'Sliding ladder', cap: CAP61 }],
  draw() {
    const s = new Sketch(W, 378), g = G61, top = gp(g, [0, 12]), foot = gp(g, [5, 0]);
    axes(s, g, -1.1, 8.6, -1, 13.6);
    lab(s, gx(g, 8.6) + 7, g.oy + 5, `${X} (m)`, { size: 15, anchor: 'start' });
    lab(s, g.ox + 8, gy(g, 13.6) + 4, `${Y} (m)`, { size: 15, anchor: 'start' });
    // the wall and the ground, heavier slate along the axes, with the right angle at O
    path(s, [[g.ox, g.oy], [g.ox, gy(g, 12.7)]], { color: C.slate, w: 3.4, name: 'wall' });
    path(s, [[g.ox, g.oy], [gx(g, 8.2), g.oy]], { color: C.slate, w: 3.4, name: 'ground' });
    path(s, [[g.ox, g.oy - 9], [g.ox + 9, g.oy - 9], [g.ox + 9, g.oy]], { color: C.slate, w: 1.2, name: 'right-angle' });
    [2, 4, 6, 8].forEach((v) => { tick(s, gx(g, v), g.oy + 2); lab(s, gx(g, v), g.oy + 20, String(v), { size: 12, color: C.slate }); });
    [2, 4, 6, 8, 10, 12].forEach((v) => { tick(s, g.ox - 2, gy(g, v), false); lab(s, g.ox - 10, gy(g, v) + 4, String(v), { size: 12, anchor: 'end', color: C.slate }); });
    lab(s, g.ox - 8, g.oy + 20, O, { size: 14, anchor: 'end', color: C.slate });
    lab(s, 50, gy(g, 7) + 4, 'wall', { size: 13, anchor: 'end', color: C.slate });
    // the ladder, top and foot
    path(s, [top, foot], { color: C.ink, w: 3, name: 'ladder' });
    pt(s, top, 'top', C.ink, 4.6);
    pt(s, foot, 'foot', C.ink, 4.6);
    lab(s, gx(g, 2.5) + 14, gy(g, 6) - 4, 'ladder: 13 m', { size: 13, anchor: 'start' });
    lab(s, g.ox + 10, gy(g, 12.55), `${Y} = 12`, { size: 14, anchor: 'start' });
    lab(s, gx(g, 4.15), g.oy - 10, `${X} = 5`, { size: 14, anchor: 'end' });
    lab(s, gx(g, 6.05), g.oy - 11, 'ground', { size: 13, anchor: 'start', color: C.slate });
    // the rates (the book's orange): ẏ = −5/6 down the wall, ẋ = 2 m/s away from it
    const yx = 2, yb = gy(g, 10.85);
    const ry = lab(s, yx, yb, Y, { size: 14, anchor: 'start', color: C.amber });
    dotOver(s, yx, yb, 14, C.amber, 0.33);
    const rv = runs(s, ry[2] + 3, yb, [{ t: '= −' }, { num: '5', den: '6' }], { size: 14, anchor: 'start', color: C.amber });
    arr(s, [rv[2] + 6, gy(g, 11.45)], [rv[2] + 6, gy(g, 10.4)], { color: C.mari, w: 2.6, head: 8, name: 'rate:y' });
    const xx = gx(g, 6.0), xb = gy(g, 2.0);
    const rx = lab(s, xx, xb, X, { size: 14, anchor: 'start', color: C.amber });
    dotOver(s, xx, xb, 14, C.amber, 0.29);
    lab(s, rx[2] + 3, xb, '= 2 m/s', { size: 14, anchor: 'start', color: C.amber });
    arr(s, [gx(g, 6.0), gy(g, 1.35)], [gx(g, 7.2), gy(g, 1.35)], { color: C.mari, w: 2.6, head: 8, name: 'rate:x' });
    return s;
  },
  check() {
    const s = fig61.draw(fig61.cases[0]), out: Check[] = [], g = G61;
    const top = unPx(g, dotNamed(s, 'top')!.p), foot = unPx(g, dotNamed(s, 'foot')!.p), lad = linesNamed(s, /^ladder$/)[0].pts.map((p) => unPx(g, p));
    out.push(['The ladder runs from the top (0, 12) on the wall to the foot (5, 0) on the ground: 5² + 12² = 13², its drawn length 13 m', close(top[0], 0) && close(top[1], 12) && close(foot[0], 5) && close(foot[1], 0) && 5 ** 2 + 12 ** 2 === 13 ** 2 && close(len(lad[0], lad[1]), 13, 1e-9)]);
    const yAt = (x: number) => Math.sqrt(169 - x * x), dt = 1e-6, rate = (yAt(5 + 2 * dt) - yAt(5)) / dt;
    out.push([`With x² + y² = 169 and dx/dt = 2: dy/dt = −(x/y)·dx/dt = −(5/12)(2) = −5/6; the ladder moved on by 2 m/s reads ${fmt(rate, 4)} m/s`, close(-(5 / 12) * 2, -5 / 6, 1e-12) && close(rate, -5 / 6, 1e-5)]);
    const ay = linesNamed(s, /^rate:y$/)[0].pts, ax = linesNamed(s, /^rate:x$/)[0].pts;
    out.push(['The ẏ arrow points straight down beside the wall (the top falls); the ẋ arrow points right, away from the wall (the foot moves out)', close(ay[0][0], ay[1][0]) && ay[1][1] > ay[0][1] && ay[0][0] < g.ox && close(ax[0][1], ax[1][1]) && ax[1][0] > ax[0][0] && ax[0][0] > gx(g, 5)]);
    out.push(onlyMarigold(s, 'the two rate arrows (their heads included)', 4));
    out.push(labelsCheck(s, ['x (m)', 'y (m)', 'O', '2', '4', '6', '8', '10', '12', 'wall', 'ladder: 13 m', 'y = 12', 'x = 5', 'ground', 'y', '= −5/6', 'x', '= 2 m/s']));
    out.push(stackedCheck(s, ['5/6']));
    out.push(noBadChars(s, fig61));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 6.2 · the filling cone (Topic 01, p. 390)                      */
/* ===================================================================== */
const CAP62 = `Inverted cone filling with water at 8 cm<sup>3</sup>/s: depth ${H}, surface radius ${R} = ${fr(H, '2')}.`;
/** The cone in px: vertex, rim depth and radius, water depth and radius (r = h/2 at every level), ellipse heights. */
const K62 = { vx: 170, vy: 332, rimH: 250, rimRy: 17, watH: 190, watRy: 13 };
const level62 = (h: number) => K62.vy - h;
/** The half-width of the cone at depth h (px): r = h/2. */
const half62 = (h: number) => h / 2;
const ell = (cx: number, cy: number, rx: number, ry: number, a0: number, a1: number, n = 80): P[] => Array.from({ length: n + 1 }, (_, i) => { const t = a0 + ((a1 - a0) * i) / n; return [cx + rx * Math.cos(t), cy + ry * Math.sin(t)]; });
const fig62: Diagram = {
  id: 'm12-06-fig-6.2',
  topic: 0,
  name: 'Water filling an inverted cone',
  cases: [{ chip: 'Filling cone', cap: CAP62 }],
  draw() {
    const s = new Sketch(W, 352), k = K62, rimY = level62(k.rimH), rimR = half62(k.rimH), wY = level62(k.watH), wR = half62(k.watH);
    // the cone: two sides to the vertex, the rim's back half dashed and front half solid
    path(s, [[k.vx - rimR, rimY], [k.vx, k.vy], [k.vx + rimR, rimY]], { color: C.ink, w: 2.2, name: 'cone' });
    path(s, ell(k.vx, rimY, rimR, k.rimRy, PI, 2 * PI), { color: C.slate, w: 1.2, dash: '4 3', name: 'rim:back' });
    path(s, ell(k.vx, rimY, rimR, k.rimRy, 0, PI), { color: C.slate, w: 2, name: 'rim:front' });
    // the water's surface: back half dashed, front half solid ink
    path(s, ell(k.vx, wY, wR, k.watRy, PI, 2 * PI), { color: C.slate, w: 1.2, dash: '4 3', name: 'water:back' });
    path(s, ell(k.vx, wY, wR, k.watRy, 0, PI), { color: C.ink, w: 2, name: 'water:front' });
    path(s, [[k.vx, rimY - 4], [k.vx, wY - 3]], { color: C.slate, w: 1, dash: '3 3', name: 'axis' });
    // the radius r
    path(s, [[k.vx, wY], [k.vx + wR, wY]], { color: C.ink, w: 2, name: 'radius' });
    pt(s, [k.vx, wY], 'centre', C.ink, 3);
    pt(s, [k.vx + wR, wY], 'edge', C.ink, 3);
    lab(s, k.vx + wR / 2, wY - 20, R, { size: 15 });
    runs(s, k.vx + half62(k.vy - 236) + 22, 238, [{ t: `${R} = ` }, { num: H, den: '2' }], { size: 15, anchor: 'start' });
    // the depth h, with its dashed guides
    const ax = 30;
    path(s, [[ax - 8, wY], [k.vx - wR - 2, wY]], { color: C.slate, w: 1, dash: '3 3', name: 'guide:top' });
    path(s, [[ax - 8, k.vy], [k.vx - 2, k.vy]], { color: C.slate, w: 1, dash: '3 3', name: 'guide:vertex' });
    arr(s, [ax, wY + 4], [ax, k.vy - 4], { color: C.ink, w: 1.8, both: true, head: 7, name: 'depth' });
    lab(s, ax - 8, (wY + k.vy) / 2 + 5, H, { size: 16, anchor: 'end' });
    lab(s, k.vx, 252, 'water', { size: 14, color: C.slate });
    // the inflow, the book's orange
    const inl = lab(s, 334, 30, '8 cm<sup>3</sup>/s in', { size: 14, anchor: 'end', color: C.amber });
    arr(s, [inl[0] + 18, inl[3] + 6], [k.vx + 52, rimY - 5], { color: C.mari, w: 2, head: 8, name: 'inflow' });
    // the water as grey hatching: inside the cone, below the surface's front edge (the book's tint)
    const front = (x: number) => wY + k.watRy * Math.sqrt(Math.max(0, 1 - ((x - k.vx) / wR) ** 2));
    const inWater = (p: P) => Math.abs(p[0] - k.vx) < (k.vy - p[1]) / 2 && p[1] > front(p[0]) && p[1] < k.vy;
    hatch(s, 'water', inWater, [k.vx - wR, wY, k.vx + wR, k.vy], { step: 7 });
    return s;
  },
  check() {
    const s = fig62.draw(fig62.cases[0]), out: Check[] = [], k = K62;
    const fr2 = linesNamed(s, /^radius$/)[0].pts, rPx = len(fr2[0], fr2[1]), hPx = k.vy - fr2[0][1];
    const cone = linesNamed(s, /^cone$/)[0].pts, rimR = (cone[2][0] - cone[0][0]) / 2, rimH = k.vy - cone[0][1];
    out.push([`The drawn surface radius is half the drawn depth (r = ${fmt(rPx, 1)} px, h = ${fmt(hPx, 1)} px), and so is the rim's (${fmt(rimR, 1)} px over ${fmt(rimH, 1)} px): r = h/2 at every level, as the cone's sides are straight`, close(rPx, hPx / 2) && close(rimR, rimH / 2)]);
    const V = (h: number) => (PI * h ** 3) / 12, hOf = (v: number) => Math.cbrt((12 * v) / PI), dt = 1e-6, dhdt = (hOf(V(4) + 8 * dt) - 4) / dt;
    out.push([`V = (1/3)π(h/2)²h = πh³/12, so dV/dt = (πh²/4)dh/dt; pouring 8 cm³/s at h = 4 raises the level at ${fmt(dhdt, 4)} cm/s = 2/π`, close(V(4), (1 / 3) * PI * (4 / 2) ** 2 * 4, 1e-12) && close(dhdt, 2 / PI, 1e-5)]);
    const Hh = hatchOf(s, 'water'), wY = level62(k.watH);
    out.push([`The water is hatched (${Hh.length} strokes), every stroke inside the cone and below the water's surface`, Hh.length > 20 && allIn(Hh, (p) => Math.abs(p[0] - k.vx) < (k.vy - p[1]) / 2 && p[1] > wY && p[1] < k.vy)]);
    const d = linesNamed(s, /^depth$/)[0].pts;
    out.push(['The depth arrow h runs from the water level down to the vertex', close(d[0][1], wY + 4) && close(d[1][1], k.vy - 4)]);
    const f = linesNamed(s, /^inflow$/)[0].pts, rimY = level62(k.rimH);
    out.push(['The inflow arrow ends inside the cone’s mouth (within the rim’s ellipse)', ((f[1][0] - k.vx) / half62(k.rimH)) ** 2 + ((f[1][1] - rimY) / k.rimRy) ** 2 < 1]);
    out.push(onlyMarigold(s, 'the inflow arrow', 2));
    out.push(labelsCheck(s, ['r', 'r = h/2', 'h', 'water', '8 cm3/s in']));
    out.push(stackedCheck(s, ['h/2']));
    out.push(noBadChars(s, fig62));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 6.3 · the sign chart (Topic 02, p. 396)                        */
/* ===================================================================== */
const CAP63 = `Sign chart of ${FP}(${X}) = 6(${X} − 1)(${X} − 2): ${FP} > 0 on (−∞, 1), ${FP} < 0 on (1, 2), ${FP} > 0 on (2, ∞), so ${F} increases, decreases, then increases.`;
const L63 = { y: 98, a: 16, b: 324, p1: 134, p2: 206 };
const fp63 = (x: number) => 6 * (x - 1) * (x - 2);
const f63 = (x: number) => 2 * x ** 3 - 9 * x ** 2 + 12 * x + 5;
/** The three intervals: where the sign stands, a test point, and the behaviour arrow (from, to) under it. */
const IV63 = [
  { at: 70, test: 0, sign: '+', a: [52, 160] as P, b: [96, 138] as P },
  { at: 170, test: 1.5, sign: '−', a: [154, 136] as P, b: [184, 160] as P },
  { at: 268, test: 3, sign: '+', a: [246, 160] as P, b: [290, 138] as P },
];
const fig63: Diagram = {
  id: 'm12-06-fig-6.3',
  topic: 1,
  name: 'Sign chart of the derivative',
  cases: [{ chip: 'Sign chart', cap: CAP63 }],
  draw() {
    const s = new Sketch(W, 212), L = L63;
    lab(s, W / 2, 30, `sign of ${FP}`, { size: 15, color: C.slate });
    arr(s, [L.a, L.y], [L.b, L.y], { color: C.ink, w: 1.8, both: true, head: 7, name: 'line' });
    pt(s, [L.p1, L.y], 'x=1', C.ink, 4.6);
    pt(s, [L.p2, L.y], 'x=2', C.ink, 4.6);
    lab(s, L.p1, L.y + 24, '1', { size: 15 });
    lab(s, L.p2, L.y + 24, '2', { size: 15 });
    IV63.forEach((v, i) => {
      const down = v.sign === '−', col = down ? C.mari : C.ink;
      lab(s, v.at, L.y - 18, v.sign, { size: 20, color: down ? C.amber : C.ink });
      arr(s, v.a, v.b, { color: col, w: 2.2, head: 8, name: `trend:${i}` });
    });
    lab(s, W / 2, 196, `behaviour of ${F}`, { size: 15, color: C.slate });
    return s;
  },
  check() {
    const s = fig63.draw(fig63.cases[0]), out: Check[] = [];
    out.push(['f′(x) = 6(x − 1)(x − 2) is the derivative of f(x) = 2x³ − 9x² + 12x + 5, and vanishes only at x = 1 and x = 2', [-1, 0, 0.5, 1.5, 2.5, 3].every((x) => close((f63(x + 1e-6) - f63(x - 1e-6)) / 2e-6, fp63(x), 1e-4)) && fp63(1) === 0 && fp63(2) === 0]);
    const signs = IV63.map((v) => Math.sign(fp63(v.test)));
    out.push([`Test points 0, 1.5, 3 give f′ = ${IV63.map((v) => fmt(fp63(v.test), 1)).join(', ')}: +, −, +, the signs drawn over the three intervals`, signs.join() === '1,-1,1' && IV63.every((v, i) => (signs[i] > 0 ? v.sign === '+' : v.sign === '−'))]);
    out.push(['Each sign stands over its own interval: left of 1, between 1 and 2, right of 2', IV63[0].at < L63.p1 && IV63[1].at > L63.p1 && IV63[1].at < L63.p2 && IV63[2].at > L63.p2]);
    const rises = IV63.map((_, i) => { const p = linesNamed(s, new RegExp(`^trend:${i}$`))[0].pts; return p[1][1] < p[0][1]; });
    out.push(['f rises on (−∞, 1) and (2, ∞) and falls on (1, 2) (f(0) < f(0.9), f(1.1) > f(1.9), f(2.1) < f(3)), and each arrow under its interval rises or falls to match', f63(0) < f63(0.9) && f63(1.1) > f63(1.9) && f63(2.1) < f63(3) && rises.join() === 'true,false,true']);
    const d1 = dotNamed(s, 'x=1')!.p, d2 = dotNamed(s, 'x=2')!.p;
    out.push(['The critical points 1 and 2 are the two dots, 1 left of 2', d1[0] === L63.p1 && d2[0] === L63.p2 && d1[0] < d2[0]]);
    out.push(onlyMarigold(s, 'the falling arrow (with its head)', 2));
    out.push(labelsCheck(s, ['sign of f′', '+', '−', '1', '2', 'behaviour of f']));
    out.push(stackedCheck(s, []));
    out.push(noBadChars(s, fig63));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 6.4 · 2 sin x + tan x above 3x (Topic 02, p. 399)              */
/* ===================================================================== */
const CAP64 = `Graphs of ${Y} = 2 sin ${X} + tan ${X} and ${Y} = 3${X} on (0, ${fr('π', '2')}); the first lies above the second for every ${X} in the interval (the plot is cut off at the top of the frame, but the curve rises without bound as ${X} → ${fr('π', '2')}).`;
const G64: Gr = { ox: 40, oy: 284, ux: 168, uy: 42 };
const f64 = (x: number) => 2 * Math.sin(x) + Math.tan(x);
/** Where 2 sin x + tan x reaches the frame's top, y = 6 (bisection). */
const XTOP64 = (() => { let a = 1, b = PI / 2 - 1e-9; for (let i = 0; i < 80; i++) { const m = (a + b) / 2; if (f64(m) < 6) a = m; else b = m; } return (a + b) / 2; })();
const fig64: Diagram = {
  id: 'm12-06-fig-6.4',
  topic: 1,
  name: 'One curve above the other',
  cases: [{ chip: 'Gap between curves', cap: CAP64 }],
  draw() {
    const s = new Sketch(W, 312), g = G64;
    axes(s, g, 0, 1.7, -0.35, 6.3);
    lab(s, gx(g, 1.7) + 6, g.oy + 5, X, { size: 16, anchor: 'start' });
    lab(s, g.ox + 8, gy(g, 6.3) + 6, Y, { size: 16, anchor: 'start' });
    lab(s, g.ox - 8, g.oy + 18, O, { size: 14, anchor: 'end', color: C.slate });
    [0.2, 0.4, 0.6, 0.8, 1.0, 1.2, 1.4, 1.6].forEach((v) => { tick(s, gx(g, v), g.oy); lab(s, gx(g, v), g.oy + 19, tickText(v, 1), { size: 11.5, color: C.slate }); });
    [1, 2, 3, 4, 5, 6].forEach((v) => { tick(s, g.ox, gy(g, v), false); lab(s, g.ox - 9, gy(g, v) + 4, String(v), { size: 11.5, anchor: 'end', color: C.slate }); });
    curve(s, g, sample((x) => 3 * x, 0, XTOP64, 2), { color: C.slate, w: 2.2, name: 'curve:3x' });
    curve(s, g, sample(f64, 0, XTOP64, 300), { color: C.ink, w: 2.6, name: 'curve:f' });
    const lf = lab(s, gx(g, 0.1), gy(g, 4.75), `${Y} = 2 sin ${X} + tan ${X}`, { size: 14, anchor: 'start' });
    const xa = 1.235;
    arr(s, [lf[2] + 6, gy(g, 4.6)], gp(g, [xa, f64(xa)]), { color: C.ink, w: 1.3, name: 'arrow:f' });
    lab(s, gx(g, 0.75), gy(g, 1.35), `${Y} = 3${X}`, { size: 14, color: C.slate });
    // the gap between the curves, as grey hatching (the book's pale tint)
    const inGap = (p: P) => { const [x, y] = unPx(g, p); return x > 0 && x < XTOP64 && y > 3 * x && y < f64(x); };
    hatch(s, 'gap', inGap, [g.ox, gy(g, 6), gx(g, XTOP64), g.oy], { step: 4 });
    return s;
  },
  check() {
    const s = fig64.draw(fig64.cases[0]), out: Check[] = [], g = G64;
    const fc = curveBack(s, g, 'curve:f'), lc = curveBack(s, g, 'curve:3x');
    out.push([`The ink curve is y = 2 sin x + tan x and the slate line y = 3x, both from x = 0 to x = ${fmt(XTOP64, 3)}, where the curve meets the frame's top (y = 6)`, onCurve(fc, f64, 1e-3) && onCurve(lc, (x) => 3 * x, 1e-3) && close(fc[0][0], 0, 1e-3) && close(fc[fc.length - 1][1], 6, 1e-3) && XTOP64 < PI / 2]);
    const xs = Array.from({ length: 2000 }, (_, i) => ((i + 0.5) / 2000) * (PI / 2));
    out.push(['h(x) = 2 sin x + tan x − 3x has h(0) = 0 and h′(x) = 2 cos x + sec²x − 3 > 0 on (0, π/2), so the curve lies above the line at every sampled x', close(f64(0), 0, 1e-12) && xs.every((x) => 2 * Math.cos(x) + 1 / Math.cos(x) ** 2 - 3 > 0 && f64(x) > 3 * x)]);
    out.push(['The curve rises without bound as x → π/2 (above 10⁵ at π/2 − 10⁻⁵), so it is cut off at the frame, not ended', f64(PI / 2 - 1e-5) > 1e5]);
    const Hh = hatchOf(s, 'gap');
    out.push([`The gap between the curves is hatched (${Hh.length} strokes), every stroke between y = 3x and the curve`, Hh.length > 6 && allIn(Hh, (p) => { const [x, y] = unPx(g, p); return x > 0 && x < XTOP64 && y > 3 * x - 1e-9 && y < f64(x) + 1e-9; })]);
    const a = linesNamed(s, /^arrow:f$/)[0].pts, tip = unPx(g, a[1]);
    out.push(['The arrow from "y = 2 sin x + tan x" ends on that curve', Math.abs(gy(g, f64(tip[0])) - a[1][1]) < 0.5 && a[0][0] < a[1][0]]);
    out.push(onlyMarigold(s, 'nothing (the book has no orange here)', 0));
    out.push(labelsCheck(s, ['x', 'y', 'O', '0.2', '0.4', '0.6', '0.8', '1.0', '1.2', '1.4', '1.6', '1', '2', '3', '4', '5', '6', 'y = 2 sin x + tan x', 'y = 3x']));
    out.push(stackedCheck(s, []));
    out.push(noBadChars(s, fig64));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 6.5 · a local max, then a local min (Topic 03, p. 405)         */
/* ===================================================================== */
const CAP65 = `A local maximum (${FP} changes from + to −, ${FPP} < 0) followed by a local minimum (${FP} changes from − to +, ${FPP} > 0); the tangents at both turning points are horizontal.`;
const G65: Gr = { ox: 172, oy: 172, ux: 62, uy: 30 };
/** The book prints no equation; its turning points (−1, 2), (1, −2) and its zeros 0, ±√3 are those of x³ − 3x. */
const f65 = (x: number) => x ** 3 - 3 * x;
const fig65: Diagram = {
  id: 'm12-06-fig-6.5',
  topic: 2,
  name: 'Local maximum and local minimum',
  cases: [{ chip: 'Max then min', cap: CAP65 }],
  draw() {
    const s = new Sketch(W, 318), g = G65, mx = gp(g, [-1, 2]), mn = gp(g, [1, -2]);
    axes(s, g, -2.5, 2.42, -4.45, 4.55);
    lab(s, gx(g, 2.42) + 6, g.oy + 5, X, { size: 16, anchor: 'start' });
    lab(s, g.ox + 8, gy(g, 4.55) + 6, Y, { size: 16, anchor: 'start' });
    lab(s, g.ox - 8, g.oy + 18, O, { size: 14, anchor: 'end', color: C.slate });
    ([[-2, 'above'], [-1, 'below'], [1, 'below'], [2, 'below']] as [number, string][]).forEach(([v, side]) => { tick(s, gx(g, v), g.oy); lab(s, gx(g, v), g.oy + (side === 'below' ? 18 : -11), tickText(v), { size: 12, color: C.slate }); });
    // y ticks left of the axis, as printed, except 1, which stands right of it (the curve crosses y = 1 just left of the axis)
    [4, 3, 2, 1, -1, -2, -3, -4].forEach((v) => { tick(s, g.ox, gy(g, v), false); lab(s, g.ox + (v === 1 ? 9 : -9), gy(g, v) + 4, tickText(v), { size: 12, anchor: v === 1 ? 'start' : 'end', color: C.slate }); });
    curve(s, g, sample(f65, -2.2, 2.2, 300), { color: C.ink, w: 2.6, name: 'curve:f' });
    // the horizontal tangents at the turning points (the book's orange), and the dots
    path(s, [[gx(g, -1.85), mx[1]], [gx(g, -0.4), mx[1]]], { color: C.mari, w: 1.8, dash: '7 5', name: 'tangent:max' });
    path(s, [[gx(g, 0.4), mn[1]], [gx(g, 1.85), mn[1]]], { color: C.mari, w: 1.8, dash: '7 5', name: 'tangent:min' });
    pt(s, mx, 'max', C.ink, 4.4);
    pt(s, mn, 'min', C.ink, 4.4);
    lab(s, 150, gy(g, 2.5), `local max  (${FPP} < 0)`, { size: 13, anchor: 'end' });
    lab(s, gx(g, 0.4), gy(g, -2.8), `local min  (${FPP} > 0)`, { size: 13, anchor: 'start' });
    // the sign of f′ over the three stretches, and the dotted marks at x = ±1 between them
    lab(s, gx(g, -1.95), gy(g, 3.6), `${FP} > 0`, { size: 14 });
    lab(s, gx(g, 0.55), gy(g, 3.6), `${FP} < 0`, { size: 14, color: C.amber });
    lab(s, gx(g, 1.6), gy(g, 3.6), `${FP} > 0`, { size: 14 });
    path(s, [[gx(g, -1), gy(g, 3.85)], [gx(g, -1), gy(g, 3.05)]], { color: C.faint, w: 1, dash: '1.5 2.5', name: 'mark:-1' });
    path(s, [[gx(g, 1), gy(g, 3.85)], [gx(g, 1), gy(g, 2.85)]], { color: C.faint, w: 1, dash: '1.5 2.5', name: 'mark:1' });
    return s;
  },
  check() {
    const s = fig65.draw(fig65.cases[0]), out: Check[] = [], g = G65;
    const fc = curveBack(s, g, 'curve:f'), fp = (x: number) => 3 * x * x - 3, fpp = (x: number) => 6 * x;
    out.push(['The curve is y = x³ − 3x over [−2.2, 2.2] (turning points (−1, 2) and (1, −2), zeros 0 and ±√3, as printed)', onCurve(fc, f65, 1e-3) && close(fc[0][0], -2.2, 1e-3) && close(fc[fc.length - 1][0], 2.2, 1e-3) && f65(Math.sqrt(3)) < 1e-12]);
    out.push(['f′ = 3x² − 3 is + on (−∞, −1), − on (−1, 1), + on (1, ∞): + to − at x = −1, − to + at x = 1', fp(-1.5) > 0 && fp(0) < 0 && fp(1.5) > 0 && fp(-1) === 0 && fp(1) === 0]);
    out.push(['f″ = 6x: f″(−1) = −6 < 0 (local max, f(−1) = 2) and f″(1) = 6 > 0 (local min, f(1) = −2); the dots stand there', fpp(-1) < 0 && fpp(1) > 0 && f65(-1) === 2 && f65(1) === -2 && close(unPx(g, dotNamed(s, 'max')!.p)[1], 2) && close(unPx(g, dotNamed(s, 'min')!.p)[1], -2)]);
    const tmax = linesNamed(s, /^tangent:max$/)[0].pts.map((p) => unPx(g, p)), tmin = linesNamed(s, /^tangent:min$/)[0].pts.map((p) => unPx(g, p));
    out.push(['Both tangents are horizontal (slope 0 = f′ there) and run through their turning points: y = 2 across x = −1, y = −2 across x = 1', close(tmax[0][1], 2) && close(tmax[1][1], 2) && tmax[0][0] < -1 && tmax[1][0] > -1 && close(tmin[0][1], -2) && close(tmin[1][1], -2) && tmin[0][0] < 1 && tmin[1][0] > 1]);
    const signAt = (lbl: string) => s.labels.filter((l) => l.text === lbl).map((l) => unPx(g, [(l.rect[0] + l.rect[2]) / 2, 0])[0]);
    out.push(['"f′ > 0" stands over x < −1 and x > 1, "f′ < 0" between −1 and 1', signAt('f′ > 0').length === 2 && signAt('f′ > 0').every((x) => x < -1 || x > 1) && signAt('f′ < 0').every((x) => x > -1 && x < 1)]);
    out.push(onlyMarigold(s, 'the two horizontal tangents', 2));
    out.push(labelsCheck(s, ['x', 'y', 'O', '−2', '−1', '1', '2', '4', '3', '−3', '−4', 'local max  (f″ < 0)', 'local min  (f″ > 0)', 'f′ > 0', 'f′ < 0']));
    out.push(stackedCheck(s, []));
    out.push(noBadChars(s, fig65));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 6.6 · the cylinder in the sphere (Topic 03, p. 408)            */
/* ===================================================================== */
const CAP66 = `A right circular cylinder of radius ${R} and height ${H} inscribed in a sphere of radius ${RR} with centre ${O}: ${R}<sup>2</sup> + (${fr(H, '2')})<sup>2</sup> = ${RR}<sup>2</sup>.`;
/** Centre and radius (px); the cylinder drawn is the book's, the greatest one: h = 2R/√3, r = R√(2/3). */
const K66 = { cx: 172, cy: 176, R: 124 };
const fig66: Diagram = {
  id: 'm12-06-fig-6.6',
  topic: 2,
  name: 'A cylinder inscribed in a sphere',
  cases: [{ chip: 'Cylinder in sphere', cap: CAP66 }],
  draw() {
    const s = new Sketch(W, 340), k = K66, hh = k.R / Math.sqrt(3), r = k.R * Math.sqrt(2 / 3);
    const Oc: P = [k.cx, k.cy], T: P = [k.cx, k.cy - hh], Cn: P = [k.cx + r, k.cy - hh];
    circle(s, Oc, k.R, { color: C.slate, w: 1.8, name: 'sphere' });
    box(s, k.cx - r, k.cy - hh, k.cx + r, k.cy + hh, { color: C.ink, w: 2.4, name: 'cylinder' });
    // h/2 and r, the book's orange; R from O to the rim's corner, the book's green (ink)
    path(s, [Oc, T], { color: C.mari, w: 2.8, name: 'half-height' });
    path(s, [T, Cn], { color: C.mari, w: 2.8, name: 'radius' });
    path(s, [Oc, Cn], { color: C.ink, w: 2.6, name: 'R' });
    path(s, [[T[0], T[1] + 10], [T[0] + 10, T[1] + 10], [T[0] + 10, T[1]]], { color: C.slate, w: 1.1, name: 'right-angle' });
    pt(s, Oc, 'O', C.ink, 4);
    lab(s, (T[0] + Cn[0]) / 2, T[1] - 9, R, { size: 16 });
    lab(s, Cn[0] + 14, Cn[1] - 18, RR, { size: 16, anchor: 'start' });
    runs(s, T[0] - 12, (T[1] + k.cy) / 2 + 2, [{ num: H, den: '2' }], { size: 15, anchor: 'end' });
    lab(s, k.cx - 10, k.cy + 24, O, { size: 15, anchor: 'end' });
    // the height h, with its dashed guides
    const ax = 34;
    path(s, [[ax - 8, k.cy - hh], [k.cx - r - 2, k.cy - hh]], { color: C.slate, w: 1, dash: '3 3', name: 'guide:top' });
    path(s, [[ax - 8, k.cy + hh], [k.cx - r - 2, k.cy + hh]], { color: C.slate, w: 1, dash: '3 3', name: 'guide:bottom' });
    arr(s, [ax, k.cy - hh + 4], [ax, k.cy + hh - 4], { color: C.ink, w: 1.8, both: true, head: 7, name: 'height' });
    lab(s, ax - 9, k.cy + 5, H, { size: 16, anchor: 'end' });
    lab(s, k.cx, k.cy + k.R + 26, `sphere: radius ${RR}`, { size: 14, color: C.slate });
    return s;
  },
  check() {
    const s = fig66.draw(fig66.cases[0]), out: Check[] = [], k = K66;
    const c = linesNamed(s, /^cylinder$/)[0].pts.slice(0, 4), r = (c[1][0] - c[0][0]) / 2, h = c[2][1] - c[1][1];
    out.push([`All four corners of the cylinder's section lie on the sphere: r² + (h/2)² = R² (${fmt(r, 1)}² + ${fmt(h / 2, 1)}² = ${fmt(k.R, 1)}²)`, c.every((p) => close(len(p, [k.cx, k.cy]), k.R, 1e-9)) && close(r ** 2 + (h / 2) ** 2, k.R ** 2, 1e-6)]);
    const hr = linesNamed(s, /^half-height$/)[0].pts, rr = linesNamed(s, /^radius$/)[0].pts, RRl = linesNamed(s, /^R$/)[0].pts;
    out.push(['h/2 runs from O straight up to the top face, r along the top face to the rim, R from O to that rim point: a right angle at the top face’s centre', close(hr[0][0], hr[1][0]) && close(len(hr[0], hr[1]), h / 2, 1e-9) && close(rr[0][1], rr[1][1]) && close(len(rr[0], rr[1]), r, 1e-9) && close(len(RRl[0], RRl[1]), k.R, 1e-9) && close(len(RRl[1], rr[1]), 0)]);
    const V = (x: number) => PI * (k.R ** 2 - x ** 2 / 4) * x, hBest = (2 * k.R) / Math.sqrt(3);
    out.push([`The drawn cylinder is the book's: the greatest one, h = 2R/√3 (V(h) = π(R²h − h³/4) is largest there; V = 4πR³/(3√3))`, close(h, hBest, 1e-9) && V(hBest) > V(hBest * 0.99) && V(hBest) > V(hBest * 1.01) && close(V(hBest), (4 * PI * k.R ** 3) / (3 * Math.sqrt(3)), 1e-3)]);
    const o = dotNamed(s, 'O')!.p;
    out.push(['O is the centre of the sphere and of the cylinder', close(o[0], k.cx) && close(o[1], k.cy) && close((c[0][0] + c[1][0]) / 2, k.cx) && close((c[1][1] + c[2][1]) / 2, k.cy)]);
    out.push(onlyMarigold(s, 'r and h/2', 2));
    out.push(labelsCheck(s, ['r', 'R', 'h/2', 'O', 'h', 'sphere: radius R']));
    out.push(stackedCheck(s, ['h/2']));
    out.push(noBadChars(s, fig66));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 6.7 · the angle between y = x² and x = y² (Topic 04, p. 414)  */
/* ===================================================================== */
const CAP67 = `The parabolas ${Y} = ${X}<sup>2</sup> and ${X} = ${Y}<sup>2</sup> meet at ${O} and (1, 1); the tangents at (1, 1) make the angle ${TH}, tan ${TH} = ${fr('3', '4')}.`;
const G67: Gr = { ox: 52, oy: 284, ux: 100, uy: 100 };
const fig67: Diagram = {
  id: 'm12-06-fig-6.7',
  topic: 3,
  name: 'The angle between two curves',
  cases: [{ chip: 'Angle between curves', cap: CAP67 }],
  draw() {
    const s = new Sketch(W, 318), g = G67, P1 = gp(g, [1, 1]);
    axes(s, g, -0.32, 2.66, -0.32, 2.62);
    lab(s, gx(g, 2.66) + 5, g.oy + 5, X, { size: 16, anchor: 'start' });
    lab(s, g.ox + 8, gy(g, 2.62) + 7, Y, { size: 16, anchor: 'start' });
    lab(s, g.ox - 8, g.oy + 19, O, { size: 14, anchor: 'end', color: C.slate });
    [0.5, 1, 1.5, 2, 2.5].forEach((v) => {
      tick(s, gx(g, v), g.oy); lab(s, gx(g, v), g.oy + 19, tickText(v, 1), { size: 12, color: C.slate });
      tick(s, g.ox, gy(g, v), false); lab(s, g.ox - 9, gy(g, v) + 4, tickText(v, 1), { size: 12, anchor: 'end', color: C.slate });
    });
    // the two parabolas: y = x² (ink) and x = y² (slate), from their true equations
    curve(s, g, sample((x) => x * x, -0.3, 1.6, 200), { color: C.ink, w: 2.6, name: 'curve:y=x2' });
    path(s, sample((y) => y * y, -0.3, 1.6, 200).map(([y, x]) => gp(g, [x, y])), { color: C.slate, w: 2.6, name: 'curve:x=y2' });
    // the tangents at (1, 1): y = 2x − 1 (the book's orange), y = x/2 + 1/2 (its green, ink)
    curve(s, g, [[0.55, 0.1], [1.35, 1.7]], { color: C.mari, w: 2, name: 'tangent:1' });
    curve(s, g, [[1, 1], [1.55, 1.275]], { color: C.ink, w: 2.2, name: 'tangent:2' });
    const a1 = Math.atan(2) / DEG, a2 = Math.atan(0.5) / DEG;
    path(s, arcPts(P1, 30, a2, a1, 40), { color: C.ink, w: 1.6, name: 'angle' });
    pt(s, gp(g, [0, 0]), 'O', C.ink, 4.4);
    pt(s, P1, '(1, 1)', C.ink, 4.4);
    const th = pol(P1, 47, (a1 + a2) / 2);
    lab(s, th[0], th[1] + 6, TH, { size: 16 });
    lab(s, P1[0] - 14, P1[1] - 6, '(1, 1)', { size: 14, anchor: 'end' });
    lab(s, gx(g, 1.42), gy(g, 1.56), `${Y} = 2${X} − 1`, { size: 14, anchor: 'start', color: C.amber });
    runs(s, gx(g, 1.62), gy(g, 0.98), [{ t: `${Y} = ` }, { num: X, den: '2' }, { t: ' + ' }, { num: '1', den: '2' }], { size: 14, anchor: 'start' });
    return s;
  },
  check() {
    const s = fig67.draw(fig67.cases[0]), out: Check[] = [], g = G67;
    const c1 = curveBack(s, g, 'curve:y=x2'), c2 = linesNamed(s, /^curve:x=y2$/)[0].pts.map((p) => unPx(g, p));
    out.push(['The curves read back as y = x² and x = y²', onCurve(c1, (x) => x * x, 1e-3) && c2.every(([x, y]) => close(x, y * y, 1e-3))]);
    const gap = (x: number) => x * x - Math.sqrt(x), xs = Array.from({ length: 20000 }, (_, i) => 0.00137 + (2 * i) / 20000);
    const meets = xs.filter((x, i) => i > 0 && Math.sign(gap(xs[i - 1])) !== Math.sign(gap(x)));
    out.push(['They meet only at O and (1, 1) for x ≥ 0 (x² = √x ⇔ x(x³ − 1) = 0 ⇔ x = 0 or 1), where the two dots stand', gap(0) === 0 && meets.length === 1 && close(meets[0], 1, 2e-4) && close(unPx(g, dotNamed(s, 'O')!.p)[0], 0) && close(unPx(g, dotNamed(s, '(1, 1)')!.p)[0], 1) && close(unPx(g, dotNamed(s, '(1, 1)')!.p)[1], 1)]);
    const t1 = curveBack(s, g, 'tangent:1'), t2 = curveBack(s, g, 'tangent:2'), sl = (t: P[]) => (t[1][1] - t[0][1]) / (t[1][0] - t[0][0]);
    out.push(['The tangents are y = 2x − 1 (slope 2 = 2x at x = 1) and y = x/2 + 1/2 (slope 1/2 = 1/(2√x) at x = 1), both through (1, 1)', close(sl(t1), 2, 1e-9) && close(sl(t2), 0.5, 1e-9) && close(t1[0][1] + 2 * (1 - t1[0][0]), 1, 1e-9) && close(t2[0][1] + 0.5 * (1 - t2[0][0]), 1, 1e-9)]);
    const ang = linesNamed(s, /^angle$/)[0].pts, P1 = gp(g, [1, 1]), dir = (p: P) => Math.atan2(P1[1] - p[1], p[0] - P1[0]) / DEG;
    const theta = dir(ang[ang.length - 1]) - dir(ang[0]);
    out.push([`The arc θ runs from one tangent to the other (equal scales on both axes): θ = ${fmt(theta, 2)}°, and tan θ = |(2 − 1/2)/(1 + 2 · 1/2)| = 3/4 gives ${fmt(Math.atan(0.75) / DEG, 2)}°`, close(dir(ang[0]), Math.atan(0.5) / DEG, 1e-6) && close(dir(ang[ang.length - 1]), Math.atan(2) / DEG, 1e-6) && close(Math.tan(theta * DEG), 0.75, 1e-9) && close(Math.abs((2 - 0.5) / (1 + 2 * 0.5)), 0.75) && g.ux === g.uy]);
    out.push(onlyMarigold(s, 'the tangent y = 2x − 1', 1));
    out.push(labelsCheck(s, ['x', 'y', 'O', '0.5', '1.0', '1.5', '2.0', '2.5', 'θ', '(1, 1)', 'y = 2x − 1', 'y = x/2 + 1/2']));
    out.push(stackedCheck(s, ['x/2', '1/2']));
    out.push(noBadChars(s, fig67));
    out.push(...layout(s));
    return out;
  },
};

/** Mathematics 12 Chapter 6, Applications of Derivatives: the book's figures. */
export const DIAGRAMS_MATHEMATICS_12_06: Diagram[] = [fig61, fig62, fig63, fig64, fig65, fig66, fig67];

