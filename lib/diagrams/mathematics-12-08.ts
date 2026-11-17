import { C, Rect, Sketch } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';
import {
  I, P, W, X, Y, allIn, arr, axes, close, curve, curveBack, dotNamed, fmt, gp, gridArea, gx, gy, hatch, hatchOf, lab, labelsCheck, layout,
  linesNamed, marigoldOnly, noBadChars, onCurve, path, pt, sample, simpson, unPx,
} from '@/lib/diagrams/mathematics-12-07';
import type { Gr } from '@/lib/diagrams/mathematics-12-07';

/**
 * MATHEMATICS CLASS 12, CHAPTER 8 (Application of Integrals): Figures 8.1–8.3 of the Master Reference book (October
 * 2026 snapshot, math12.pdf), redrawn. Each stands on its own "CHAPTER 8 · FIGURES" plate, the page after its caption.
 *
 *   Figure 8.1 (p. 532; caption p. 531): Topic 01 (Area under a simple curve), index 0.
 *   Figure 8.2 (p. 542; caption p. 541): Topic 02 (Area between two curves), index 1.
 *   Figure 8.3 (p. 552; caption p. 551): Topic 03 (Modulus, inequalities, composite regions), index 2.
 *
 * THE CURVES. The book prints no equations for 8.1, 8.2 and 8.3's panel (3); each is fitted to the plate (in units of
 * the plate's own scale) and then drawn from that equation:
 *   8.1  f(x) = 1.5 + 0.12(x − 2.3)², a = 1, b = 4.8 (the plate: minimum 1.48 at 2.32, f(a) = 1.68, f(b) = 2.26).
 *   8.2  f(x) = 3.45 − 1.45u², g(x) = 0.55 + 1.45u², u = (x − 2.75)/2.25, so they meet at a = 0.5 and b = 5 at height 2
 *        (the plate: 3.44, 0.57, meeting at 0.49 and 4.95 at height 2.0).
 *   8.3  (1) y = |x|, shaded over [−1, 1]; (2) y = x² and y = x + 2, meeting at x = −1 and 2, as their equations say;
 *        (3) curve B: y = 2.9 − 0.4(x − 2.4)², curve A the straight line of slope 0.85 meeting B at x = s = 1.5, the
 *        region over [0.4, 3.9].
 *
 * NO FILLS. Every shaded region is hatched (grey lines at 45°), computed line by line between its true bounds and kept
 * clear of every label, curve and line. A shaded region here IS an area, so the hatch means what it shows (rm121a).
 *
 * ONE HIGHLIGHT, the book's orange: 8.1 and 8.2 the thin strip of width dx (marigold outline and marigold hatch) with
 * its "dx" (amber); 8.2's orange lower curve g is ink, told apart by its label. 8.3: three panels, three chips, one
 * highlight each: (1) the corner (marigold dot, amber word); (2) the line y = x + 2; (3) curve A and the slab under
 * it (the book's orange line and pale orange tint: marigold line, marigold hatch). The book's navy and green are ink,
 * its grey slate.
 */

/* ===================================================================== */
/* Figure 8.1 · area under a curve (Topic 01, p. 532)                    */
/* ===================================================================== */
const CAP81 = `Area under ${Y} = ${I('f')}(${X}) from ${X} = ${I('a')} to ${X} = ${I('b')}: a thin vertical strip of height ${Y} and width d${X}, summed (integrated) from ${I('a')} to ${I('b')}.`;
const G81: Gr = { ox: 24, oy: 214, ux: 48, uy: 48 };
const f81 = (x: number) => 1.5 + 0.12 * (x - 2.3) ** 2;
const A81 = 1, B81 = 4.8, S81: [number, number] = [3.68, 3.92], H81 = 3.55;
/** ∫ₐᵇ f = 1.5(b − a) + 0.04[(b − 2.3)³ − (a − 2.3)³]. */
const AREA81 = 1.5 * (B81 - A81) + 0.04 * ((B81 - 2.3) ** 3 - (A81 - 2.3) ** 3);
const in81 = (x: number, y: number) => x > A81 && x < B81 && y > 0 && y < f81(x);
const inStrip81 = (x: number, y: number) => x > S81[0] && x < S81[1] && y > 0 && y < f81(x);

/** "Area = ∫ₐᵇ y dx": the integral sign with its limits set as small labels beside it. */
function areaLabel(s: Sketch, x: number, y: number, a: string, b: string, body: string) {
  const r = lab(s, x, y, 'Area =', { size: 14, anchor: 'start' });
  const ix = r[2] + 3;
  lab(s, ix, y + 3, '∫', { size: 22, anchor: 'start' });
  lab(s, ix + 16, y - 12, b, { size: 10.5, anchor: 'start' });
  lab(s, ix + 16, y + 9, a, { size: 10.5, anchor: 'start' });
  lab(s, ix + 28, y, body, { size: 14, anchor: 'start' });
}
/** A strip of width dx from y = lo(x) to y = hi(x): marigold outline, marigold hatch. */
function strip(s: Sketch, g: Gr, x0: number, x1: number, lo: (x: number) => number, hi: (x: number) => number) {
  const top = sample(hi, x0, x1, 12), bot = sample(lo, x1, x0, 12);
  path(s, [...top, ...bot, top[0]].map((p) => gp(g, p)), { color: C.mari, w: 1.6, name: 'strip' });
  const inside = (p: P) => { const [x, y] = unPx(g, p); return x > x0 && x < x1 && y > lo(x) && y < hi(x); };
  const bx: Rect = [gx(g, x0), gy(g, Math.max(...top.map((q) => q[1]))), gx(g, x1), gy(g, Math.min(...bot.map((q) => q[1])))];
  hatch(s, 'strip', inside, bx, { step: 3.2, clear: 1.6, color: C.mari, w: 1.1 });
}

const fig81: Diagram = {
  id: 'm12-08-fig-8.1',
  topic: 0,
  name: 'Area under a curve',
  cases: [{ chip: 'Area under a curve', cap: CAP81 }],
  draw() {
    const s = new Sketch(W, 248), g = G81;
    axes(s, g, [-0.4, 6.25], [-0.45, 3.45]);
    curve(s, g, sample(f81, 0.3, 5.6, 240), { color: C.ink, w: 2.4, name: 'curve:f' });
    lab(s, gx(g, 5.9), gy(g, f81(5.6)) - 11, `${Y} = ${I('f')}(${X})`, { size: 14, anchor: 'end' });
    // the region's edges at a and b, dashed, as printed
    [A81, B81].forEach((v) => path(s, [gp(g, [v, 0]), gp(g, [v, f81(v)])], { color: C.slate, w: 1.3, dash: '5 4', name: `edge:${v}` }));
    lab(s, gx(g, A81), g.oy + 24, I('a'), { size: 15 });
    lab(s, gx(g, B81), g.oy + 24, I('b'), { size: 15 });
    // the strip (the highlight), its height y and its width dx
    strip(s, g, S81[0], S81[1], () => 0, f81);
    arr(s, gp(g, [H81, 0]), gp(g, [H81, f81(H81)]), { color: C.ink, w: 1.2, both: true, head: 6, name: 'height' });
    lab(s, gx(g, H81) - 6, gy(g, f81(H81) * 0.8) + 5, Y, { size: 15, anchor: 'end' });
    path(s, [[gx(g, S81[1]) - 1, g.oy + 2], [gx(g, 4.2) - 5, g.oy + 9]], { color: C.mari, w: 1.2, name: 'leader:dx' });
    lab(s, gx(g, 4.2), g.oy + 22, `d${X}`, { size: 15, anchor: 'start', color: C.amber });
    areaLabel(s, gx(g, 1.25), gy(g, 0.62), I('a'), I('b'), `${Y} d${X}`);
    // the rest of the region, hatched grey up to the curve
    hatch(s, 'region', (p) => { const [x, y] = unPx(g, p); return in81(x, y) && !(x > S81[0] - 0.05 && x < S81[1] + 0.05); }, [gx(g, A81), gy(g, 2.3), gx(g, B81), g.oy]);
    return s;
  },
  check() {
    const s = fig81.draw(fig81.cases[0]), out: Check[] = [], g = G81;
    const c = curveBack(s, g, 'curve:f');
    out.push(['The curve read back is y = f(x) = 1.5 + 0.12(x − 2.3)² over [0.3, 5.6], as fitted to the plate', onCurve(c, f81) && close(c[0][0], 0.3, 1e-3) && close(c[c.length - 1][0], 5.6, 1e-3)]);
    out.push(['The dashed edges stand at x = a and x = b, from the axis up to the curve', [A81, B81].every((v) => { const e = linesNamed(s, new RegExp(`^edge:${v}$`))[0].pts.map((p) => unPx(g, p)); return close(e[0][0], v) && close(e[1][0], v) && close(e[0][1], 0) && close(e[1][1], f81(v)); })]);
    const H = hatchOf(s, 'region'), St = hatchOf(s, 'strip'), u = (q: P) => unPx(g, q);
    out.push([`The region is hatched (${H.length} strokes), every stroke between x = a and x = b, above the axis and under the curve`, H.length > 40 && allIn(H, (q) => in81(...u(q)))]);
    const xs = H.flat().map((q) => u(q)[0]);
    out.push(['The hatch runs from edge to edge: it reaches within 0.15 of x = a and of x = b', Math.min(...xs) - A81 < 0.15 && B81 - Math.max(...xs) < 0.15]);
    const area = gridArea(in81, 0, 6, 0, 3), sim = simpson(f81, A81, B81);
    out.push([`The shaded region (hatch plus strip) has area ${fmt(area, 3)}, counted on a grid, = ∫ from a to b of f(x) dx = ${fmt(AREA81, 4)} (Simpson ${fmt(sim, 4)})`, close(area, AREA81, 0.01 * AREA81) && close(sim, AREA81, 1e-9)]);
    const sp = linesNamed(s, /^strip$/)[0].pts.map(u);
    out.push([`The strip is ${fmt(S81[1] - S81[0])} wide (dx), inside [a, b], standing on the axis with its top on the curve`, close(Math.min(...sp.map((q) => q[0])), S81[0]) && close(Math.max(...sp.map((q) => q[0])), S81[1]) && S81[0] > A81 && S81[1] < B81 && sp.every((q) => close(q[1], 0) || close(q[1], f81(q[0]))) && St.length > 3 && allIn(St, (q) => inStrip81(...u(q)))]);
    const hgt = linesNamed(s, /^height$/)[0].pts.map(u);
    out.push(['The two-headed arrow y runs from the axis up to the curve: its length is f(x) there', close(hgt[0][1], 0) && close(hgt[1][1], f81(H81))]);
    out.push(marigoldOnly(s, /^(strip|hatch:strip|leader:dx)$/, 'the strip of width dx and its leader'));
    out.push(labelsCheck(s, ['x', 'y', 'y = f(x)', 'a', 'b', 'y', 'dx', 'Area =', '∫', 'a', 'b', 'y dx']));
    out.push(noBadChars(s, fig81));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 8.2 · area between two curves (Topic 02, p. 542)               */
/* ===================================================================== */
const CAP82 = `Area between two curves: the curves meet at ${X} = ${I('a')} and ${X} = ${I('b')}, and each vertical strip has height ${I('f')}(${X}) − ${I('g')}(${X}) (upper minus lower) and width d${X}.`;
const G82: Gr = { ox: 22, oy: 236, ux: 44, uy: 54 };
const u82 = (x: number) => (x - 2.75) / 2.25;
const f82 = (x: number) => 3.45 - 1.45 * u82(x) ** 2;
const g82 = (x: number) => 0.55 + 1.45 * u82(x) ** 2;
const A82 = 0.5, B82 = 5, S82: [number, number] = [2.6, 2.84], H82 = 2.5;
/** ∫ₐᵇ (f − g) = 2.9 ∫(1 − u²) dx = 2.9 · 2.25 · 4/3. */
const AREA82 = 2.9 * 2.25 * (4 / 3);
const in82 = (x: number, y: number) => x > A82 && x < B82 && y > g82(x) && y < f82(x);

const fig82: Diagram = {
  id: 'm12-08-fig-8.2',
  topic: 1,
  name: 'Area between two curves',
  cases: [{ chip: 'Between two curves', cap: CAP82 }],
  draw() {
    const s = new Sketch(W, 268), g = G82;
    axes(s, g, [-0.35, 6.55], [-0.4, 4.05]);
    curve(s, g, sample(f82, 0.1, 5.4, 240), { color: C.ink, w: 2.4, name: 'curve:f' });
    curve(s, g, sample(g82, 0.1, 5.4, 240), { color: C.ink, w: 2.4, name: 'curve:g' });
    lab(s, gx(g, 5.52), gy(g, g82(5.4)) + 5, `${Y} = ${I('g')}(${X})`, { size: 14, anchor: 'start' });
    lab(s, gx(g, 5.52), gy(g, f82(5.4)) + 5, `${Y} = ${I('f')}(${X})`, { size: 14, anchor: 'start' });
    // where they meet: dots, and dashed drops to a and b
    [A82, B82].forEach((v, i) => {
      path(s, [gp(g, [v, 0]), gp(g, [v, f82(v) - 0.12])], { color: C.slate, w: 1.2, dash: '4 4', name: `drop:${v}` });
      pt(s, gp(g, [v, f82(v)]), i ? 'b' : 'a');
    });
    lab(s, gx(g, A82), g.oy + 24, I('a'), { size: 15 });
    lab(s, gx(g, B82), g.oy + 24, I('b'), { size: 15 });
    // the strip (the highlight), its height f(x) − g(x) and width dx
    strip(s, g, S82[0], S82[1], g82, f82);
    arr(s, gp(g, [H82, g82(H82)]), gp(g, [H82, f82(H82)]), { color: C.ink, w: 1.2, both: true, head: 6, name: 'height' });
    lab(s, gx(g, H82) - 6, gy(g, 2) + 4, `${I('f')}(${X}) − ${I('g')}(${X})`, { size: 12, anchor: 'end' });
    const foot: P = gp(g, [S82[1], g82(S82[1]) + 0.08]);
    path(s, [[foot[0] + 1.5, foot[1] - 1.5], [gx(g, 3.28) - 5, gy(g, 0.95) - 5]], { color: C.mari, w: 1.2, name: 'leader:dx' });
    lab(s, gx(g, 3.28), gy(g, 0.95), `d${X}`, { size: 15, anchor: 'start', color: C.amber });
    hatch(s, 'region', (p) => { const [x, y] = unPx(g, p); return in82(x, y) && !(x > S82[0] - 0.05 && x < S82[1] + 0.05); }, [gx(g, A82), gy(g, 3.5), gx(g, B82), gy(g, 0.5)]);
    return s;
  },
  check() {
    const s = fig82.draw(fig82.cases[0]), out: Check[] = [], g = G82, u = (q: P) => unPx(g, q);
    out.push(['The curves read back are y = f(x) = 3.45 − 1.45u² and y = g(x) = 0.55 + 1.45u², u = (x − 2.75)/2.25, over [0.1, 5.4]', onCurve(curveBack(s, g, 'curve:f'), f82) && onCurve(curveBack(s, g, 'curve:g'), g82)]);
    out.push(['They meet at x = a = 0.5 and x = b = 5 (f = g = 2 there)', close(f82(A82), g82(A82), 1e-12) && close(f82(B82), g82(B82), 1e-12) && close(f82(A82), 2, 1e-12)]);
    const xs = sample((x) => f82(x) - g82(x), 0.1, 5.4, 2000);
    out.push(['f ≥ g exactly on [a, b], and they cross nowhere else in the drawing (f is the upper curve between the meeting points)', xs.every(([x, d]) => (x >= A82 - 1e-9 && x <= B82 + 1e-9 ? d >= -1e-9 : d < 0))]);
    out.push(['A dot at each meeting point, with a dashed drop straight down to a and b on the axis', ['a', 'b'].every((n, i) => { const v = i ? B82 : A82, d = dotNamed(s, n), dr = linesNamed(s, new RegExp(`^drop:${v}$`))[0].pts.map(u); return !!d && close(u(d.p)[0], v) && close(u(d.p)[1], 2) && close(dr[0][0], v) && close(dr[1][0], v) && close(dr[0][1], 0); })]);
    const H = hatchOf(s, 'region'), St = hatchOf(s, 'strip');
    out.push([`The region is hatched (${H.length} strokes), every stroke between the curves and between a and b`, H.length > 40 && allIn(H, (q) => in82(...u(q)))]);
    const area = gridArea(in82, 0, 5.5, 0, 4), sim = simpson((x) => f82(x) - g82(x), A82, B82);
    out.push([`The shaded region (hatch plus strip) has area ${fmt(area, 3)}, counted on a grid, = ∫ from a to b of [f(x) − g(x)] dx = ${fmt(AREA82, 4)} (Simpson ${fmt(sim, 4)})`, close(area, AREA82, 0.01 * AREA82) && close(sim, AREA82, 1e-9)]);
    const sp = linesNamed(s, /^strip$/)[0].pts.map(u);
    out.push([`The strip is ${fmt(S82[1] - S82[0])} wide (dx), from the lower curve g up to the upper curve f`, close(Math.min(...sp.map((q) => q[0])), S82[0]) && close(Math.max(...sp.map((q) => q[0])), S82[1]) && sp.every((q) => close(q[1], f82(q[0])) || close(q[1], g82(q[0]))) && St.length > 3 && allIn(St, (q) => { const [x, y] = u(q); return x > S82[0] && x < S82[1] && y > g82(x) && y < f82(x); })]);
    const hgt = linesNamed(s, /^height$/)[0].pts.map(u);
    out.push([`The two-headed arrow runs from g up to f: its length is f(x) − g(x) = ${fmt(f82(H82) - g82(H82), 3)} (upper minus lower)`, close(hgt[0][1], g82(H82)) && close(hgt[1][1], f82(H82)) && close(hgt[1][1] - hgt[0][1], f82(H82) - g82(H82))]);
    out.push(marigoldOnly(s, /^(strip|hatch:strip|leader:dx)$/, 'the strip of width dx and its leader'));
    out.push(labelsCheck(s, ['x', 'y', 'y = f(x)', 'y = g(x)', 'a', 'b', 'f(x) − g(x)', 'dx']));
    out.push(noBadChars(s, fig82));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 8.3 · three disguises (Topic 03, p. 552)                       */
/* ===================================================================== */
const CAP83 = `Three disguises: (1) ${Y} = |${X}| has a corner at the origin; (2) the lens ${Y} ≥ ${X}<sup>2</sup>, ${Y} ≤ ${X} + 2; (3) a composite region whose upper boundary switches from curve A to curve B at ${X} = ${I('s')}.`;
const G831: Gr = { ox: 170, oy: 182, ux: 80, uy: 80 };
const G832: Gr = { ox: 150, oy: 270, ux: 70, uy: 46 };
const G833: Gr = { ox: 28, oy: 248, ux: 66, uy: 66 };
const in831 = (x: number, y: number) => x > -1 && x < 1 && y > 0 && y < Math.abs(x);
const in832 = (x: number, y: number) => y > x * x && y < x + 2;
const S83 = 1.5, X0 = 0.4, X1 = 3.9;
const B83 = (x: number) => 2.9 - 0.4 * (x - 2.4) ** 2;
const A83 = (x: number) => B83(S83) + 0.85 * (x - S83);
const inA = (x: number, y: number) => x > X0 && x < S83 && y > 0 && y < A83(x);
const inB = (x: number, y: number) => x > S83 && x < X1 && y > 0 && y < B83(x);
/** ∫ A over [x0, s] = A(s)(s − x0) − 0.85(s − x0)²/2; ∫ B over [s, x1] = 2.9(x1 − s) − (0.4/3)[(x1 − 2.4)³ − (s − 2.4)³]. */
const AREA_A = B83(S83) * (S83 - X0) - (0.85 * (S83 - X0) ** 2) / 2;
const AREA_B = 2.9 * (X1 - S83) - (0.4 / 3) * ((X1 - 2.4) ** 3 - (S83 - 2.4) ** 3);

type Panel = 1 | 2 | 3;
const TITLE: Record<Panel, string> = { 1: '(1) modulus', 2: `(2) ${Y} ≥ ${X}<sup>2</sup>,  ${Y} ≤ ${X} + 2`, 3: '(3) composite region' };
const gOf = (n: Panel) => (n === 1 ? G831 : n === 2 ? G832 : G833);

const fig83: Diagram = {
  id: 'm12-08-fig-8.3',
  topic: 2,
  name: 'Three disguises',
  cases: [
    { chip: 'Modulus', cap: CAP83, panel: 1 },
    { chip: 'Lens', cap: CAP83, panel: 2 },
    { chip: 'Composite region', cap: CAP83, panel: 3 },
  ],
  draw(c: { panel: Panel }) {
    const n = c.panel, g = gOf(n);
    const s = new Sketch(W, n === 1 ? 216 : n === 2 ? 294 : 278);
    lab(s, W / 2, 16, TITLE[n], { size: 13 });
    if (n === 1) {
      axes(s, g, [-1.92, 1.9], [-0.35, 1.72]);
      path(s, [gp(g, [-1.5, 1.5]), gp(g, [0, 0]), gp(g, [1.5, 1.5])], { color: C.ink, w: 2.4, name: 'curve:abs' });
      lab(s, g.ox - 10, gy(g, 1.35), `${Y} = |${X}|`, { size: 14, anchor: 'end' });
      [-1, 1].forEach((v) => path(s, [gp(g, [v, 0]), gp(g, [v, 1])], { color: C.slate, w: 1, name: `edge:${v}` }));
      pt(s, gp(g, [0, 0]), 'corner', C.mari, 4);
      lab(s, gx(g, 0.42), gy(g, 0.12), 'corner', { size: 12, anchor: 'start', color: C.amber });
      hatch(s, 'region', (p) => in831(...unPx(g, p)), [gx(g, -1), gy(g, 1), gx(g, 1), g.oy]);
    } else if (n === 2) {
      axes(s, g, [-1.75, 2.5], [-0.4, 4.95]);
      curve(s, g, sample((x) => x * x, -1.55, 2.17, 240), { color: C.ink, w: 2.4, name: 'curve:par' });
      path(s, [gp(g, [-1.55, 0.45]), gp(g, [2.25, 4.25])], { color: C.mari, w: 2.4, name: 'line' });
      lab(s, gx(g, -1.85), gy(g, 2.95), `${Y} = ${X}<sup>2</sup>`, { size: 14, anchor: 'start' });
      lab(s, gx(g, 1.95), gy(g, 4.55), `${Y} = ${X} + 2`, { size: 14, anchor: 'end', color: C.amber });
      hatch(s, 'region', (p) => in832(...unPx(g, p)), [gx(g, -1), gy(g, 4), gx(g, 2), g.oy]);
    } else {
      axes(s, g, [-0.35, 4.5], [-0.35, 3.3]);
      curve(s, g, sample(B83, S83, 4.25, 200), { color: C.ink, w: 2.4, name: 'curve:B' });
      path(s, [gp(g, [X0, A83(X0)]), gp(g, [S83, A83(S83)])], { color: C.mari, w: 2.4, name: 'curve:A' });
      path(s, [gp(g, [X0, 0]), gp(g, [X0, A83(X0)])], { color: C.slate, w: 1, name: 'edge:x0' });
      path(s, [gp(g, [X1, 0]), gp(g, [X1, B83(X1)])], { color: C.slate, w: 1, name: 'edge:x1' });
      path(s, [gp(g, [S83, 0]), gp(g, [S83, B83(S83)])], { color: C.ink, w: 1.3, dash: '5 4', name: 'line:s' });
      lab(s, gx(g, X0) + 2, gy(g, 3.05), 'curve A', { size: 13, anchor: 'start', color: C.amber });
      lab(s, gx(g, 2.9), gy(g, 3.15), 'curve B', { size: 13, anchor: 'start' });
      lab(s, gx(g, S83), g.oy + 21, `${X} = ${I('s')}`, { size: 14 });
      hatch(s, 'slabA', (p) => inA(...unPx(g, p)), [gx(g, X0), gy(g, 2.6), gx(g, S83), g.oy], { color: C.mari });
      hatch(s, 'slabB', (p) => inB(...unPx(g, p)), [gx(g, S83), gy(g, 3), gx(g, X1), g.oy]);
    }
    return s;
  },
  check(c: { panel: Panel }) {
    const n = c.panel, s = fig83.draw(c), g = gOf(n), out: Check[] = [], u = (q: P) => unPx(g, q);
    if (n === 1) {
      const v = linesNamed(s, /^curve:abs$/)[0].pts.map(u);
      out.push(['The V is y = |x| over [−1.5, 1.5]: slope −1 left of the origin, +1 right of it, joined at (0, 0)', v.every((q) => close(q[1], Math.abs(q[0]))) && close(v[1][0], 0) && close((v[1][1] - v[0][1]) / (v[1][0] - v[0][0]), -1) && close((v[2][1] - v[1][1]) / (v[2][0] - v[1][0]), 1)]);
      const d = dotNamed(s, 'corner');
      out.push(['The corner is marked at the origin, the one highlight: the slopes either side differ, so |x| has no derivative there', !!d && close(u(d.p)[0], 0) && close(u(d.p)[1], 0) && d.color === C.mari]);
      const H = hatchOf(s, 'region');
      out.push([`The region under y = |x| over [−1, 1] is hatched (${H.length} strokes), every stroke above the axis and under the V`, H.length > 15 && allIn(H, (q) => in831(...u(q)))]);
      const area = gridArea(in831, -1.2, 1.2, 0, 1.2);
      out.push([`The shaded region has area ${fmt(area, 3)}, counted on a grid, = ∫ from −1 to 1 of |x| dx = ∫ from −1 to 0 of (−x) dx + ∫ from 0 to 1 of x dx = 1/2 + 1/2 = 1 (split at the corner)`, close(area, 1, 0.01) && close(simpson((x) => -x, -1, 0) + simpson((x) => x, 0, 1), 1, 1e-12)]);
      out.push(marigoldOnly(s, /^dot:corner$/, 'the corner'));
      out.push(labelsCheck(s, ['(1) modulus', 'x', 'y', 'y = |x|', 'corner']));
    } else if (n === 2) {
      out.push(['The parabola read back is y = x², the line y = x + 2', onCurve(curveBack(s, g, 'curve:par'), (x) => x * x) && linesNamed(s, /^line$/)[0].pts.map(u).every((q) => close(q[1], q[0] + 2))]);
      const r = [(1 - 3) / 2, (1 + 3) / 2];
      out.push(['They meet where x² = x + 2: x = −1 and x = 2 (the lens\'s ends)', close(r[0], -1) && close(r[1], 2) && r.every((x) => close(x * x, x + 2))]);
      out.push(['Test a point: (0, 1) has 1 ≥ 0² and 1 ≤ 0 + 2, so the lens is above the parabola and under the line', in832(0, 1) && !in832(0, 2.5) && !in832(0, -0.5)]);
      const H = hatchOf(s, 'region');
      out.push([`The lens is hatched (${H.length} strokes), every stroke above the parabola and under the line`, H.length > 15 && allIn(H, (q) => in832(...u(q)))]);
      const area = gridArea(in832, -1.2, 2.2, 0, 4.2), exact = (2 * 2) / 2 + 2 * 2 - 8 / 3 - (1 / 2 - 2 + 1 / 3);
      out.push([`The lens has area ${fmt(area, 3)}, counted on a grid, = ∫ from −1 to 2 of (x + 2 − x²) dx = 9/2`, close(area, 4.5, 0.02) && close(exact, 4.5, 1e-12) && close(simpson((x) => x + 2 - x * x, -1, 2), 4.5, 1e-9)]);
      out.push(marigoldOnly(s, /^line$/, 'the line y = x + 2'));
      out.push(labelsCheck(s, ['(2) y ≥ x2,  y ≤ x + 2', 'x', 'y', 'y = x2', 'y = x + 2']));
    } else {
      out.push(['Curve A and curve B meet at x = s: the upper boundary switches there without a jump', close(A83(S83), B83(S83), 1e-12)]);
      out.push(['Curve A read back is the straight line of slope 0.85 over [0.4, s]; curve B is y = 2.9 − 0.4(x − 2.4)² over [s, 4.25]', linesNamed(s, /^curve:A$/)[0].pts.map(u).every((q) => close(q[1], A83(q[0]))) && onCurve(curveBack(s, g, 'curve:B'), B83)]);
      const ls = linesNamed(s, /^line:s$/)[0].pts.map(u);
      out.push(['The dashed line stands at x = s, from the axis up to the boundary', close(ls[0][0], S83) && close(ls[1][0], S83) && close(ls[0][1], 0) && close(ls[1][1], B83(S83))]);
      const HA = hatchOf(s, 'slabA'), HB = hatchOf(s, 'slabB');
      out.push([`The slab under curve A is hatched marigold (${HA.length} strokes), every stroke in [0.4, s] under A`, HA.length > 10 && allIn(HA, (q) => inA(...u(q)))]);
      out.push([`The slab under curve B is hatched grey (${HB.length} strokes), every stroke in [s, 3.9] under B`, HB.length > 20 && allIn(HB, (q) => inB(...u(q)))]);
      const a = gridArea(inA, 0, 4, 0, 3), b = gridArea(inB, 0, 4, 0, 3);
      out.push([`Split and sum: slab A ${fmt(a, 3)} + slab B ${fmt(b, 3)} (counted on a grid) = ∫A + ∫B = ${fmt(AREA_A, 4)} + ${fmt(AREA_B, 4)} = ${fmt(AREA_A + AREA_B, 4)}`, close(a, AREA_A, 0.01 * AREA_A) && close(b, AREA_B, 0.01 * AREA_B) && close(simpson(A83, X0, S83), AREA_A, 1e-9) && close(simpson(B83, S83, X1), AREA_B, 1e-9)]);
      out.push(marigoldOnly(s, /^(curve:A|hatch:slabA)$/, 'curve A and the slab under it'));
      out.push(labelsCheck(s, ['(3) composite region', 'x', 'y', 'curve A', 'curve B', 'x = s']));
    }
    out.push(noBadChars(s, fig83));
    out.push(...layout(s));
    return out;
  },
};

/** Mathematics 12 Chapter 8, Application of Integrals: the book's figures. */
export const DIAGRAMS_MATHEMATICS_12_08: Diagram[] = [fig81, fig82, fig83];
