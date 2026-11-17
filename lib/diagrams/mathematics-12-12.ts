import { C, Rect, Sketch } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';
import {
  I, P, W, X, Y, allIn, arr, axes, close, dotNamed, fmt, gp, gridArea, gx, gy, hatch, hatchOf, lab, labelsCheck, layout, linesNamed,
  marigoldOnly, path, plain, pt, tick, unPx,
} from '@/lib/diagrams/mathematics-12-07';
import type { Gr } from '@/lib/diagrams/mathematics-12-07';

/**
 * MATHEMATICS CLASS 12, CHAPTER 12 (Linear Programming): Figures 12.1–12.6 and Additional topic A's Figure 1 of the
 * Master Reference book (October 2026 snapshot, math12.pdf), redrawn. Figures 12.1–12.6 each stand on their own
 * "CHAPTER 12 · FIGURES" plate, the page after their caption; A's Figure 1 is printed in its text.
 *
 *   Figure 12.1 (p. 768; caption p. 767): Topic 01, index 0.     Figure 12.4 (p. 781; caption p. 780): Topic 02, index 1.
 *   Figure 12.2 (p. 770; caption p. 769): Topic 01, index 0.     Figure 12.5 (p. 791; caption p. 790): Topic 03, index 2.
 *   Figure 12.3 (p. 772; caption p. 771): Topic 01, index 0.     Figure 12.6 (p. 793; caption p. 792): Topic 03, index 2.
 *   A's Figure 1 (p. 801): Additional topic A, index 3 (m12-12-A-d1).
 *
 * EVERY REGION FROM ITS CONSTRAINTS. Each feasible region is written as its inequalities (a x + b y ≤ c), drawn from
 * them, and checked against them: its corner points are recomputed as the feasible crossings of every pair of
 * boundary lines and must be exactly the dots drawn; the optimum is recomputed at those corners (and, for the
 * unbounded region of 12.3, the open half-plane test is run on a grid). Fig 12.1's region is the book's quadrilateral
 * O(0, 0), A(6, 0), B(5, 4), C(0, 5), whose edges are x + 5y ≤ 25 and 4x + y ≤ 24; its objective lines are
 * 2x + 3y = 8, 16 and 22 (read off the plate: through (4, 0), (8, 0) and B). Fig 12.5's panels: (a) y ≤ 3,
 * 3x + y ≤ 12 with the objective line x + y = 6; (b) y ≤ 3, x + y ≤ 4 with x + y = 4 along AB; (c) x + 2y ≥ 4;
 * (d) x + y ≤ 2 and x + y ≥ 6, as printed.
 *
 * NO FILLS. Every feasible region is grey 45° hatching (the book's pale tints), computed line by line inside its
 * constraints and kept clear of every label and line; an unbounded region is hatched out to the plot's edges, as
 * the book shades it. The book's "0" at the origin is the O (or the vertex O(0, 0) where the book names it); its grid
 * is left out.
 *
 * ONE HIGHLIGHT (marigold lines, amber words): 12.1 the objective line through the optimum B and the arrow
 * "Z increasing" (the book's orange arrow); 12.2 the line 3x + 2y = 12 (the book's orange); 12.3 the dotted
 * objective line 5x + 4y = 26 that just touches the region (the book's orange line 2x + y = 8 is ink); 12.5 (a), (b)
 * the objective line, (c) the arrow "Z → ∞" (orange in print), (d) the line x + y = 6 bounding the book's orange
 * region; 12.6 the line x + y = 10 of the book's orange triangle; A's Figure 1 the ray from A through P to Q, and P.
 * 12.4 has no orange in print and no marigold here. The book's navy is ink, its grey slate.
 *
 * The book's italic note under each plate (its sub-caption) stands under the drawing in slate, with the em dashes of
 * 12.1 and 12.6 written as colons (DECISIONS-M12 item 49).
 */

/* ---------- constraints, corners, lines ---------- */
/** a x + b y ≤ c. */
type Con = [number, number, number];
const NONNEG: Con[] = [[-1, 0, 0], [0, -1, 0]];
const sat = (cs: Con[], x: number, y: number, tol = 1e-9) => cs.every(([a, b, c]) => a * x + b * y <= c + tol);
/** The corner points: every feasible crossing of two boundary lines. */
function corners(cs: Con[]): P[] {
  const out: P[] = [];
  cs.forEach(([a1, b1, c1], i) => cs.slice(i + 1).forEach(([a2, b2, c2]) => {
    const det = a1 * b2 - a2 * b1;
    if (Math.abs(det) < 1e-12) return;
    const p: P = [(c1 * b2 - c2 * b1) / det, (a1 * c2 - a2 * c1) / det];
    if (sat(cs, p[0], p[1], 1e-9) && !out.some((q) => close(q[0], p[0], 1e-9) && close(q[1], p[1], 1e-9))) out.push(p);
  }));
  return out;
}
const sameSet = (a: P[], b: P[]) => a.length === b.length && a.every((p) => b.some((q) => close(p[0], q[0], 1e-9) && close(p[1], q[1], 1e-9)));
const ptStr = (p: P) => `(${fmt(p[0])}, ${fmt(p[1])})`;
/** The polygon's area by the shoelace formula, its corners taken round the centroid. */
function shoelace(ps: P[]): number {
  const cx = ps.reduce((t, p) => t + p[0], 0) / ps.length, cy = ps.reduce((t, p) => t + p[1], 0) / ps.length;
  const q = [...ps].sort((u, v) => Math.atan2(u[1] - cy, u[0] - cx) - Math.atan2(v[1] - cy, v[0] - cx));
  return Math.abs(q.reduce((t, p, i) => t + p[0] * q[(i + 1) % q.length][1] - q[(i + 1) % q.length][0] * p[1], 0)) / 2;
}
/** The part of the line a x + b y = c inside the box [x0, x1] × [y0, y1]. */
function clip(a: number, b: number, c: number, x0: number, x1: number, y0: number, y1: number): [P, P] {
  const ps: P[] = [];
  if (b !== 0) [x0, x1].forEach((x) => { const y = (c - a * x) / b; if (y >= y0 - 1e-9 && y <= y1 + 1e-9) ps.push([x, y]); });
  if (a !== 0) [y0, y1].forEach((y) => { const x = (c - b * y) / a; if (x >= x0 - 1e-9 && x <= x1 + 1e-9) ps.push([x, y]); });
  ps.sort((p, q) => p[0] - q[0] || q[1] - p[1]);
  return [ps[0], ps[ps.length - 1]];
}
/** The line a x + b y = c, drawn inside the box, kept under `name`. */
function line(s: Sketch, g: Gr, name: string, abc: [number, number, number], bx: [number, number, number, number], o: { color?: string; w?: number; dash?: boolean | string } = {}) {
  const [p, q] = clip(...abc, ...bx);
  path(s, [gp(g, p), gp(g, q)], { color: o.color ?? C.ink, w: o.w ?? 2, dash: o.dash, name });
}
/** The kept line `name` read back is a x + b y = c at both ends. */
const lineIs = (s: Sketch, g: Gr, name: string, [a, b, c]: [number, number, number], tol = 2e-2) => {
  const l = linesNamed(s, new RegExp(`^${name}$`))[0];
  return !!l && l.pts.map((p) => unPx(g, p)).every(([x, y]) => close(a * x + b * y, c, tol));
};
/** The tick marks and their numbers, in slate. */
function ticks(s: Sketch, g: Gr, xs: number[], ys: number[], size = 11) {
  xs.forEach((v) => { tick(s, gx(g, v), g.oy); lab(s, gx(g, v), g.oy + 17, String(v), { size, color: C.slate }); });
  ys.forEach((v) => { tick(s, g.ox, gy(g, v), false); lab(s, g.ox - 8, gy(g, v) + 4, String(v), { size, anchor: 'end', color: C.slate }); });
}
const origin = (s: Sketch, g: Gr) => lab(s, g.ox - 6, g.oy + 15, I('O'), { size: 12, anchor: 'end', color: C.slate });
/** The plate's note (its sub-caption), centred in slate, one label per line. */
const note = (s: Sketch, y: number, lines: string[], size = 12) => lines.forEach((t, i) => lab(s, W / 2, y + i * (size + 4), t, { size, color: C.slate }));
/** Hatch the region `inside` (graph units) over the box [x0, x1] × [y0, y1]. */
const hatchRegion = (s: Sketch, g: Gr, name: string, inside: (x: number, y: number) => boolean, [x0, x1, y0, y1]: [number, number, number, number], o: { color?: string; step?: number } = {}) =>
  hatch(s, name, (p) => inside(...unPx(g, p)), [gx(g, x0), gy(g, y1), gx(g, x1), gy(g, y0)], o);
/** Every hatch stroke of `name` lies in the region. */
const hatchIn = (s: Sketch, g: Gr, name: string, inside: (x: number, y: number) => boolean) => allIn(hatchOf(s, name), (q) => inside(...unPx(g, q)));
const dotAt = (s: Sketch, g: Gr, name: string, p: P) => { const d = dotNamed(s, name); return !!d && close(unPx(g, d.p)[0], p[0], 1e-6) && close(unPx(g, d.p)[1], p[1], 1e-6); };
/** No em dash, no vulgar fraction, no slash fraction, every minus a true minus (the 12-07 check, with the book's "Maximise/Minimise" allowed). */
function noBad(s: Sketch, d: Diagram): Check {
  const ok = (h: string) => plain(h.replace(/<sup>.*?<\/sup>/g, ''));
  const all = [...s.texts.map((t) => ok(t.html)), d.name, ...d.cases.flatMap((c) => [c.chip, ok(c.cap)])].join(' ').replace(/Maximise\/\s*Minimise/g, 'Maximise Minimise');
  return ['No em dash, no vulgar-fraction character, no slash fraction, and every minus a true minus (−) in the labels, name, chips or captions', !/[—¼-¾⅐-⅞]/.test(all) && !/[\w)!π]\s*\/\s*[\w(π√]/.test(all) && !/(^|[\s([,])-(?=[\dπθxyfg])/.test(all)];
}
const pa = (l: string, x: number, y: number) => `${I(l)}(${x}, ${y})`;

/* ===================================================================== */
/* Figure 12.1 · the objective line slides to a vertex (Topic 01, p. 768) */
/* ===================================================================== */
const CAP121 = `A bounded convex quadrilateral feasible region ${I('OABC')} in the first quadrant, with the four vertices labelled. A dashed “objective line” ${I('ax')}\u00a0+\u00a0${I('by')}\u00a0=\u00a0${I('k')} is shown sliding outward, touching the region last at the vertex ${I('B')}(5, 4): the optimum sits at a vertex (Theorem 1).`;
const G121: Gr = { ox: 30, oy: 266, ux: 33, uy: 33 };
const CON121: Con[] = [...NONNEG, [1, 5, 25], [4, 1, 24]];
const V121: Record<string, P> = { O: [0, 0], A: [6, 0], B: [5, 4], C: [0, 5] };
const Z121 = (x: number, y: number) => 2 * x + 3 * y;
const K121 = [8, 16, 22];
const BOX121: [number, number, number, number] = [-0.3, 8.55, -0.3, 7.45];
const ZA121: [P, P] = [[6.55, 0.6], [7.0, 1.28]];
const fig121: Diagram = {
  id: 'm12-12-fig-12.1',
  topic: 0,
  name: 'The objective line meets the region last at a vertex',
  cases: [{ chip: 'Corner-point idea', cap: CAP121 }],
  draw() {
    const s = new Sketch(W, 330), g = G121;
    axes(s, g, [-0.4, 8.9], [-0.4, 7.7]);
    ticks(s, g, [2, 4, 6, 8], [2, 4, 6]);
    // the region's edges O → A → B → C → O (ink, as printed)
    path(s, ['O', 'A', 'B', 'C', 'O'].map((k) => gp(g, V121[k])), { color: C.ink, w: 2.1, name: 'edge' });
    // the objective lines 2x + 3y = k: two thin dashed (slate), the last one through B (the highlight)
    line(s, g, 'obj:8', [2, 3, 8], BOX121, { color: C.slate, w: 1.2, dash: '5 4' });
    line(s, g, 'obj:16', [2, 3, 16], BOX121, { color: C.slate, w: 1.2, dash: '5 4' });
    line(s, g, 'obj:22', [2, 3, 22], BOX121, { color: C.mari, w: 2.4, dash: '7 5' });
    // "Z increasing": along the normal (2, 3), between the last two lines
    arr(s, gp(g, ZA121[0]), gp(g, ZA121[1]), { color: C.mari, w: 2, head: 7, name: 'arrow:Z' });
    lab(s, gx(g, 7.16), gy(g, 1.0), `${I('Z')} increasing`, { size: 12, anchor: 'start', color: C.amber });
    // the vertices
    Object.entries(V121).forEach(([k, p]) => pt(s, gp(g, p), k, C.ink, k === 'B' ? 4 : 3.2));
    lab(s, gx(g, 0.22), gy(g, 0) - 8, pa('O', 0, 0), { size: 12, anchor: 'start' });
    lab(s, gx(g, 5.72), gy(g, 0) - 8, pa('A', 6, 0), { size: 12, anchor: 'end' });
    lab(s, gx(g, 5.26), gy(g, 4) - 8, pa('B', 5, 4), { size: 12, anchor: 'start' });
    lab(s, gx(g, 0.2), gy(g, 5) - 16, pa('C', 0, 5), { size: 12, anchor: 'start' });
    // "optimum (Theorem 1)" with its pointer to B
    lab(s, gx(g, 4.75), gy(g, 6.35), 'optimum', { size: 12 });
    lab(s, gx(g, 4.75), gy(g, 6.35) + 15, '(Theorem 1)', { size: 12 });
    arr(s, [gx(g, 4.8), gy(g, 6.35) + 24], [gx(g, 4.97), gy(g, 4) - 6], { color: C.ink, w: 1.1, head: 6, name: 'pointer' });
    note(s, 302, [`As the objective line 2${X} + 3${Y} = ${I('k')} slides outward,`, `it last meets the region at vertex ${I('B')}: the optimum.`]);
    hatchRegion(s, g, 'region', (x, y) => sat(CON121, x, y), [0, 6, 0, 5]);
    return s;
  },
  check() {
    const s = fig121.draw(fig121.cases[0]), out: Check[] = [], g = G121;
    out.push([`The corner points of x ≥ 0, y ≥ 0, x + 5y ≤ 25, 4x + y ≤ 24 are exactly O, A, B, C as labelled: ${corners(CON121).map(ptStr).join(', ')}`, sameSet(corners(CON121), Object.values(V121))]);
    out.push(['Each vertex has its dot where it is labelled', Object.entries(V121).every(([k, p]) => dotAt(s, g, k, p))]);
    out.push(['The region is convex: going round O, A, B, C every turn is to the same side', ['O', 'A', 'B', 'C'].every((k, i, a) => { const p = V121[k], q = V121[a[(i + 1) % 4]], r = V121[a[(i + 2) % 4]]; return (q[0] - p[0]) * (r[1] - q[1]) - (q[1] - p[1]) * (r[0] - q[0]) > 0; })]);
    const zs = Object.entries(V121).map(([k, p]) => [k, Z121(...p)] as const);
    out.push([`Z = 2x + 3y at the corners: ${zs.map(([k, z]) => `${k} ${z}`).join(', ')}; the largest, 22, is at B only (C is higher but gives 15)`, zs.filter(([, z]) => z === 22).map(([k]) => k).join() === 'B' && zs.every(([, z]) => z <= 22) && V121.C[1] > V121.B[1]]);
    out.push(['The three dashed lines are 2x + 3y = 8, 16, 22; the last one passes through B', K121.every((k) => lineIs(s, g, `obj:${k}`, [2, 3, k])) && close(Z121(...V121.B), 22)]);
    out.push(['The line 2x + 3y = 22 touches the region only at B: no feasible point beats it (grid of 400 × 400)', (() => { for (let i = 0; i <= 400; i++) for (let j = 0; j <= 400; j++) { const x = (6 * i) / 400, y = (5 * j) / 400; if (sat(CON121, x, y) && Z121(x, y) > 22 + 1e-9) return false; } return true; })()]);
    out.push(['The lines 2x + 3y = 8 and 16 cut through the region (their k lies between the smallest and largest corner values)', [8, 16].every((k) => k > 0 && k < 22)]);
    const za = linesNamed(s, /^arrow:Z$/)[0].pts.map((p) => unPx(g, p)), dz = [za[1][0] - za[0][0], za[1][1] - za[0][1]];
    out.push(['"Z increasing" points along the normal (2, 3) of the objective lines, the way Z grows', close(dz[1] / dz[0], 1.5, 0.02) && dz[0] > 0]);
    const reg = (x: number, y: number) => sat(CON121, x, y);
    out.push([`The region is hatched (${hatchOf(s, 'region').length} strokes), every stroke inside it`, hatchOf(s, 'region').length > 40 && hatchIn(s, g, 'region', reg)]);
    const area = gridArea(reg, 0, 6, 0, 5), sl = shoelace(Object.values(V121));
    out.push([`The hatched region is OABC: its area counted on a grid, ${fmt(area, 3)}, = the shoelace area ${fmt(sl, 3)}`, close(area, sl, 0.01 * sl)]);
    out.push(marigoldOnly(s, /^(obj:22|arrow:Z)$/, 'the objective line through B and the arrow "Z increasing"'));
    out.push(labelsCheck(s, ['O(0, 0)', 'A(6, 0)', 'B(5, 4)', 'C(0, 5)', 'optimum', '(Theorem 1)', 'Z increasing']));
    out.push(noBad(s, fig121));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 12.2 · the bakery's region OABC (Topic 01, p. 770)              */
/* ===================================================================== */
const CAP122 = `First-quadrant graph with lines ${X} + 2${Y} = 8 and 3${X} + 2${Y} = 12, the hatched quadrilateral ${I('OABC')}, and vertices ${pa('O', 0, 0)}, ${pa('A', 4, 0)}, ${pa('B', 2, 3)}, ${pa('C', 0, 4)} marked.`;
const G122: Gr = { ox: 56, oy: 272, ux: 39, uy: 39 };
const CON122: Con[] = [...NONNEG, [1, 2, 8], [3, 2, 12]];
const V122: Record<string, P> = { O: [0, 0], A: [4, 0], B: [2, 3], C: [0, 4] };
const fig122: Diagram = {
  id: 'm12-12-fig-12.2',
  topic: 0,
  name: 'Feasible region OABC',
  cases: [{ chip: 'Bounded region', cap: CAP122 }],
  draw() {
    const s = new Sketch(W, 334), g = G122;
    axes(s, g, [-0.35, 6.75], [-0.35, 6.6]);
    ticks(s, g, [1, 2, 3, 5, 6], [1, 2, 3, 5, 6]);
    line(s, g, 'line:flour', [1, 2, 8], [0, 6.55, 0, 6.5], { color: C.ink, w: 2.1 });
    line(s, g, 'line:oven', [3, 2, 12], [0, 6.55, 0, 6.5], { color: C.mari, w: 2.4 });
    lab(s, gx(g, 5.35), gy(g, 2.05), `${X} + 2${Y} = 8`, { size: 13 });
    lab(s, gx(g, 3.0), gy(g, 0.85), `3${X} + 2${Y} = 12`, { size: 13, anchor: 'end', color: C.amber });
    Object.entries(V122).forEach(([k, p]) => pt(s, gp(g, p), k, C.ink, 3.4));
    lab(s, gx(g, 0.2), gy(g, 0) - 12, pa('O', 0, 0), { size: 13, anchor: 'start' });
    lab(s, gx(g, 4.15), gy(g, 0) - 12, pa('A', 4, 0), { size: 13, anchor: 'start' });
    lab(s, gx(g, 2.18), gy(g, 3) - 9, pa('B', 2, 3), { size: 13, anchor: 'start' });
    lab(s, g.ox - 10, gy(g, 4) + 4, pa('C', 0, 4), { size: 13, anchor: 'end' });
    note(s, 306, [`Feasible region ${I('OABC')} for ${X} + 2${Y} ≤ 8,`, `3${X} + 2${Y} ≤ 12, ${X}, ${Y} ≥ 0.`]);
    hatchRegion(s, g, 'region', (x, y) => sat(CON122, x, y), [0, 4, 0, 4]);
    return s;
  },
  check() {
    const s = fig122.draw(fig122.cases[0]), out: Check[] = [], g = G122;
    out.push(['The two lines read back are x + 2y = 8 and 3x + 2y = 12', lineIs(s, g, 'line:flour', [1, 2, 8]) && lineIs(s, g, 'line:oven', [3, 2, 12])]);
    out.push([`The corner points of x + 2y ≤ 8, 3x + 2y ≤ 12, x, y ≥ 0 are exactly O, A, B, C as labelled: ${corners(CON122).map(ptStr).join(', ')}`, sameSet(corners(CON122), Object.values(V122))]);
    out.push(['B = (2, 3) is where the two lines cross (subtracting: 2x = 4)', close(V122.B[0] + 2 * V122.B[1], 8) && close(3 * V122.B[0] + 2 * V122.B[1], 12)]);
    out.push(['Each vertex has its dot where it is labelled', Object.entries(V122).every(([k, p]) => dotAt(s, g, k, p))]);
    const zs = Object.values(V122).map((p) => 40 * p[0] + 50 * p[1]);
    out.push([`Worked example 1: Z = 40x + 50y at O, A, B, C = ${zs.join(', ')}; the maximum 230 is at B`, zs.join() === '0,160,230,200' && Math.max(...zs) === 230]);
    const reg = (x: number, y: number) => sat(CON122, x, y);
    out.push([`The region is hatched (${hatchOf(s, 'region').length} strokes), every stroke inside it`, hatchOf(s, 'region').length > 30 && hatchIn(s, g, 'region', reg)]);
    const area = gridArea(reg, 0, 4, 0, 4), sl = shoelace(Object.values(V122));
    out.push([`The hatched region is OABC: area on a grid ${fmt(area, 3)} = shoelace ${fmt(sl, 3)} (= 10)`, close(area, sl, 0.01 * sl) && close(sl, 10)]);
    out.push(['The labels "x + 2y = 8" and "3x + 2y = 12" stand on the right sides: the first above its line, the second inside the region', (() => { const l1 = s.labels.find((l) => l.text === 'x + 2y = 8')!, l2 = s.labels.find((l) => l.text === '3x + 2y = 12')!; const c1 = unPx(g, [(l1.rect[0] + l1.rect[2]) / 2, l1.rect[3]]), c2 = unPx(g, [(l2.rect[0] + l2.rect[2]) / 2, (l2.rect[1] + l2.rect[3]) / 2]); return c1[0] + 2 * c1[1] > 8 && reg(...c2); })()]);
    out.push(marigoldOnly(s, /^line:oven$/, 'the line 3x + 2y = 12'));
    out.push(labelsCheck(s, ['O(0, 0)', 'A(4, 0)', 'B(2, 3)', 'C(0, 4)', 'x + 2y = 8', '3x + 2y = 12']));
    out.push(noBad(s, fig122));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 12.3 · the unbounded feed-mix region (Topic 01, p. 772)        */
/* ===================================================================== */
const CAP123 = `First-quadrant unbounded region above the lines ${X}\u00a0+\u00a0${Y}\u00a0=\u00a06 and 2${X}\u00a0+\u00a0${Y}\u00a0=\u00a08, hatched upward to infinity, with corner points (0,\u00a08), (2,\u00a04), (6,\u00a00) marked, and a dotted line 5${X}\u00a0+\u00a04${Y}\u00a0=\u00a026 just touching the region at (2,\u00a04).`;
const G123: Gr = { ox: 30, oy: 318, ux: 31, uy: 31 };
const CON123: Con[] = [...NONNEG, [-1, -1, -6], [-2, -1, -8]];
const V123: P[] = [[0, 8], [2, 4], [6, 0]];
const XM123 = 8.3, YM123 = 9.3;
const fig123: Diagram = {
  id: 'm12-12-fig-12.3',
  topic: 0,
  name: 'An unbounded region and its minimum',
  cases: [{ chip: 'Unbounded region', cap: CAP123 }],
  draw() {
    const s = new Sketch(W, 394), g = G123;
    axes(s, g, [-0.35, 9.0], [-0.35, 9.75]);
    ticks(s, g, [2, 4, 8], [2, 4, 6]);
    origin(s, g);
    line(s, g, 'line:fibre', [2, 1, 8], [0, 4, 0, 8], { color: C.ink, w: 2.1 });
    line(s, g, 'line:protein', [1, 1, 6], [0, 6, 0, 6], { color: C.ink, w: 2.1 });
    line(s, g, 'obj', [5, 4, 26], [-0.3, 5.3, -0.3, 7.0], { color: C.mari, w: 2.2, dash: '2 4' });
    V123.forEach((p, i) => pt(s, gp(g, p), `v${i}`, C.ink, 3.4));
    lab(s, gx(g, 0.22), gy(g, 8) - 8, '(0, 8)', { size: 12, anchor: 'start' });
    lab(s, gx(g, 2.22), gy(g, 4) - 9, '(2, 4)', { size: 12, anchor: 'start' });
    lab(s, gx(g, 6.22), gy(g, 0) - 9, '(6, 0)', { size: 12, anchor: 'start' });
    lab(s, gx(g, 0.62), gy(g, 7.45), `2${X} + ${Y} = 8`, { size: 12, anchor: 'start' });
    lab(s, gx(g, 5.0), gy(g, 1.35), `${X} + ${Y} = 6`, { size: 12, anchor: 'start' });
    lab(s, gx(g, 3.9), gy(g, 6.15), `5${X} + 4${Y} = 26`, { size: 12, anchor: 'start', color: C.amber });
    path(s, [[gx(g, 4.3), gy(g, 6.15) + 8], gp(g, [3.2, 2.5])], { color: C.mari, w: 1.1, name: 'leader:obj' });
    note(s, 358, [`Unbounded region above ${X} + ${Y} = 6 and 2${X} + ${Y} = 8;`, `the line 5${X} + 4${Y} = 26 just touches it`, 'at the minimiser (2, 4).']);
    hatchRegion(s, g, 'region', (x, y) => sat(CON123, x, y) && x <= XM123 && y <= YM123, [0, XM123, 0, YM123]);
    return s;
  },
  check() {
    const s = fig123.draw(fig123.cases[0]), out: Check[] = [], g = G123;
    out.push(['The lines read back are x + y = 6, 2x + y = 8 and the dotted 5x + 4y = 26', lineIs(s, g, 'line:protein', [1, 1, 6]) && lineIs(s, g, 'line:fibre', [2, 1, 8]) && lineIs(s, g, 'obj', [5, 4, 26])]);
    out.push([`The corner points of x + y ≥ 6, 2x + y ≥ 8, x, y ≥ 0 are exactly (0, 8), (2, 4), (6, 0): ${corners(CON123).map(ptStr).join(', ')}`, sameSet(corners(CON123), V123)]);
    out.push(['Each corner has its dot', V123.every((p, i) => dotAt(s, g, `v${i}`, p))]);
    const zs = V123.map((p) => 5 * p[0] + 4 * p[1]);
    out.push([`Z = 5x + 4y at the corners: ${zs.join(', ')}; the smallest, 26, is at (2, 4)`, zs.join() === '32,26,30' && Math.min(...zs) === 26]);
    out.push(['The region is unbounded: (t, t) is feasible for every t ≥ 4 (t = 4, 40, 4000)', [4, 40, 4000].every((t) => sat(CON123, t, t))]);
    out.push(['Half-plane test: no feasible point has 5x + 4y < 26 (grid 0 to 10, step 0.01), so 26 is the true minimum', (() => { for (let i = 0; i <= 1000; i++) for (let j = 0; j <= 1000; j++) { const x = i / 100, y = j / 100; if (sat(CON123, x, y) && 5 * x + 4 * y < 26 - 1e-9) return false; } return true; })()]);
    out.push(['The dotted line touches the region only at (2, 4): its slope −5/4 lies between the edges\' −2 and −1', -5 / 4 > -2 && -5 / 4 < -1 && close(5 * 2 + 4 * 4, 26)]);
    const reg = (x: number, y: number) => sat(CON123, x, y);
    const H = hatchOf(s, 'region'), xs = H.flat().map((q) => unPx(g, q));
    out.push([`The region is hatched (${H.length} strokes), every stroke inside it`, H.length > 60 && hatchIn(s, g, 'region', reg)]);
    out.push(['The hatch runs out to the plot\'s edges (x to 8.3, y to 9.3): the region is open there', Math.max(...xs.map((q) => q[0])) > XM123 - 0.25 && Math.max(...xs.map((q) => q[1])) > YM123 - 0.25]);
    const ld = linesNamed(s, /^leader:obj$/)[0].pts.map((p) => unPx(g, p))[1];
    out.push(['The leader from "5x + 4y = 26" ends on the dotted line', close(5 * ld[0] + 4 * ld[1], 26, 1e-6)]);
    out.push(marigoldOnly(s, /^(obj|leader:obj)$/, 'the dotted objective line and its leader'));
    out.push(labelsCheck(s, ['(0, 8)', '(2, 4)', '(6, 0)', '2x + y = 8', 'x + y = 6', '5x + 4y = 26']));
    out.push(noBad(s, fig123));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 12.4 · from words to an answer (Topic 02, p. 781)              */
/* ===================================================================== */
const CAP124 = `A flow diagram with one box “WORD PROBLEM (paragraph)” on the left, an arrow labelled “5-step formulation” pointing right to a box “LPP MODEL: Maximise/Minimise ${I('Z')} subject to constraints”, and a second arrow labelled “corner-point method (Topic 01)” pointing to a final box “OPTIMAL SOLUTION”.`;
const BOX124: { name: string; r: Rect; lines: string[] }[] = [
  { name: 'word', r: [4, 74, 90, 150], lines: ['WORD', 'PROBLEM', '(paragraph)'] },
  { name: 'model', r: [124, 66, 228, 158], lines: ['LPP MODEL', 'Maximise/', `Minimise ${I('Z')}`, 'subject to', 'constraints'] },
  { name: 'solution', r: [262, 74, 336, 150], lines: ['OPTIMAL', 'SOLUTION'] },
];
const ARR124: { name: string; words: string[] }[] = [
  { name: 'formulate', words: ['5-step', 'formulation'] },
  { name: 'solve', words: ['corner-point', 'method', '(Topic 01)'] },
];
/** A rectangle with rounded corners, as one kept outline. */
function roundBox(s: Sketch, r: Rect, rx: number, name: string) {
  const [x0, y0, x1, y1] = r, pts: P[] = [];
  const arc = (cx: number, cy: number, a0: number) => { for (let k = 0; k <= 6; k++) { const a = a0 + (k * Math.PI) / 12; pts.push([cx + rx * Math.cos(a), cy + rx * Math.sin(a)]); } };
  arc(x1 - rx, y0 + rx, -Math.PI / 2); arc(x1 - rx, y1 - rx, 0); arc(x0 + rx, y1 - rx, Math.PI / 2); arc(x0 + rx, y0 + rx, Math.PI);
  path(s, [...pts, pts[0]], { color: C.ink, w: 1.6, name });
}
const fig124: Diagram = {
  id: 'm12-12-fig-12.4',
  topic: 1,
  name: 'From a word problem to an optimal solution',
  cases: [{ chip: 'Formulate, then solve', cap: CAP124 }],
  draw() {
    const s = new Sketch(W, 190);
    BOX124.forEach(({ name, r, lines }) => {
      roundBox(s, r, 6, `box:${name}`);
      const cy = (r[1] + r[3]) / 2, top = cy - ((lines.length - 1) * 14) / 2 + 4;
      lines.forEach((t, i) => lab(s, (r[0] + r[2]) / 2, top + i * 14, t, { size: 11.5 }));
    });
    ARR124.forEach(({ name, words }, i) => {
      const a = BOX124[i].r, b = BOX124[i + 1].r, y = 112, cx = (a[2] + b[0]) / 2;
      arr(s, [a[2] + 2, y], [b[0] - 2, y], { color: C.ink, w: 1.4, head: 7, name: `arrow:${name}` });
      words.forEach((t, k) => lab(s, cx, 56 - (words.length - 1 - k) * 13, t, { size: 10.5, color: C.slate }));
    });
    lab(s, W / 2, 180, 'From words to an optimal answer: formulate, then solve.', { size: 11.5, color: C.slate });
    return s;
  },
  check() {
    const s = fig124.draw(fig124.cases[0]), out: Check[] = [];
    out.push(['Three boxes left to right, none overlapping: WORD PROBLEM, LPP MODEL, OPTIMAL SOLUTION', BOX124.every((b, i) => i === 0 || BOX124[i - 1].r[2] < b.r[0])]);
    out.push(['Each arrow runs from one box\'s right edge to the next box\'s left edge, pointing right', ARR124.every(({ name }, i) => { const l = linesNamed(s, new RegExp(`^arrow:${name}$`))[0].pts; return close(l[0][0], BOX124[i].r[2] + 2) && close(l[1][0], BOX124[i + 1].r[0] - 2) && l[1][0] > l[0][0] && l.every((p) => p[1] > BOX124[i].r[1] && p[1] < BOX124[i].r[3]); })]);
    out.push(['Each box\'s words lie inside it', BOX124.every(({ r, lines }) => lines.every((t) => { const l = s.labels.find((q) => q.text === plain(t))!; return l.rect[0] > r[0] && l.rect[2] < r[2] && l.rect[1] > r[1] && l.rect[3] < r[3]; }))]);
    out.push(['Each arrow\'s words stand above its gap, over the arrow', ARR124.every(({ words }, i) => words.every((t) => { const l = s.labels.find((q) => q.text === t)!, c = (l.rect[0] + l.rect[2]) / 2; return c > BOX124[i].r[2] && c < BOX124[i + 1].r[0] && l.rect[3] < 66; }))]);
    out.push(['"(Sub-01)" is written "(Topic 01)"', s.labels.some((l) => l.text === '(Topic 01)') && !s.labels.some((l) => /Sub-01/.test(l.text))]);
    out.push(['No marigold (the book has no orange here)', s.svg().indexOf(C.mari) < 0]);
    out.push(labelsCheck(s, ['WORD', 'PROBLEM', '(paragraph)', 'LPP MODEL', 'Maximise/', 'Minimise Z', 'subject to', 'constraints', 'OPTIMAL', 'SOLUTION', '5-step', 'formulation', 'corner-point', 'method', '(Topic 01)'], 'Every word of the boxes and arrows, as printed'));
    out.push(noBad(s, fig124));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 12.5 · the four special cases (Topic 03, p. 791)               */
/* ===================================================================== */
const CAP125 = `(a) unique optimum: the objective line touches one vertex ${I('B')}; (b) multiple optima: the objective line lies along the edge ${I('AB')}; (c) unbounded: the region opens to the upper right and ${I('Z')} grows without limit; (d) infeasible: ${X} + ${Y} ≤ 2 and ${X} + ${Y} ≥ 6 do not overlap.`;
type Case125 = { chip: string; cap: string; panel: 'a' | 'b' | 'c' | 'd' };
const TITLE125 = { a: '(a) Unique optimum', b: `(b) Multiple optima (edge ${I('AB')})`, c: '(c) Unbounded: no maximum', d: '(d) Infeasible: no solution' };
const G125: Record<Case125['panel'], Gr> = {
  a: { ox: 34, oy: 280, ux: 51, uy: 51 },
  b: { ox: 34, oy: 280, ux: 51, uy: 51 },
  c: { ox: 34, oy: 296, ux: 41, uy: 41 },
  d: { ox: 34, oy: 296, ux: 31, uy: 31 },
};
const CON125 = {
  a: [...NONNEG, [0, 1, 3], [3, 1, 12]] as Con[],
  b: [...NONNEG, [0, 1, 3], [1, 1, 4]] as Con[],
  c: [...NONNEG, [-1, -2, -4]] as Con[],
  d1: [...NONNEG, [1, 1, 2]] as Con[],
  d2: [...NONNEG, [-1, -1, -6]] as Con[],
};
const V125 = { a: [[0, 0], [4, 0], [3, 3], [0, 3]] as P[], b: [[0, 0], [4, 0], [1, 3], [0, 3]] as P[], c: [[0, 2], [4, 0]] as P[] };
const ZA125: [P, P] = [[3.25, 3.15], [4.85, 4.55]];
const XM125 = 6.3, XM125D = 8.3;
const fig125: Diagram = {
  id: 'm12-12-fig-12.5',
  topic: 2,
  name: 'The four special cases',
  cases: [
    { chip: 'Unique optimum', cap: CAP125, panel: 'a' },
    { chip: 'Multiple optima', cap: CAP125, panel: 'b' },
    { chip: 'Unbounded', cap: CAP125, panel: 'c' },
    { chip: 'Infeasible', cap: CAP125, panel: 'd' },
  ] as Case125[],
  draw(c: Case125) {
    const pn = c.panel, g = G125[pn], s = new Sketch(W, pn === 'a' || pn === 'b' ? 306 : 322);
    lab(s, W / 2, 16, TITLE125[pn], { size: 13 });
    if (pn === 'a' || pn === 'b') {
      axes(s, g, [-0.3, 5.65], [-0.3, 4.75]);
      ticks(s, g, pn === 'a' ? [1, 2, 3, 4, 5] : [1, 2, 3, 5], [1, 2, 3, 4]);
      origin(s, g);
      path(s, [...V125[pn], V125[pn][0]].map((p) => gp(g, p)), { color: C.ink, w: 2, name: 'edge' });
      if (pn === 'a') {
        line(s, g, 'obj', [1, 1, 6], [-0.3, 5.5, 0.5, 4.6], { color: C.mari, w: 2.2, dash: '7 5' });
        pt(s, gp(g, [3, 3]), 'B');
        lab(s, gx(g, 3.12), gy(g, 3) - 9, I('B'), { size: 13, anchor: 'start' });
      } else {
        line(s, g, 'obj', [1, 1, 4], [0, 4.3, -0.3, 4.6], { color: C.mari, w: 2.2, dash: '7 5' });
        pt(s, gp(g, [1, 3]), 'B');
        pt(s, gp(g, [4, 0]), 'A');
        lab(s, gx(g, 1.14), gy(g, 3) - 9, I('B'), { size: 13, anchor: 'start' });
        lab(s, gx(g, 4.2), gy(g, 0.28), I('A'), { size: 13, anchor: 'start' });
      }
      hatchRegion(s, g, 'region', (x, y) => sat(CON125[pn], x, y), [0, 4, 0, 3]);
    } else if (pn === 'c') {
      axes(s, g, [-0.3, 6.75], [-0.3, 6.6]);
      ticks(s, g, [1, 2, 3, 5, 6], [1, 3, 4, 5, 6]);
      origin(s, g);
      path(s, [gp(g, [0, 2]), gp(g, [4, 0])], { color: C.ink, w: 2, name: 'edge' });
      V125.c.forEach((p, i) => pt(s, gp(g, p), `v${i}`));
      lab(s, gx(g, 0.2), gy(g, 2) - 9, '(0, 2)', { size: 12, anchor: 'start' });
      lab(s, gx(g, 4.15), gy(g, 0) - 11, '(4, 0)', { size: 12, anchor: 'start' });
      arr(s, gp(g, ZA125[0]), gp(g, ZA125[1]), { color: C.mari, w: 2.2, head: 8, name: 'arrow:Z' });
      lab(s, gx(g, 4.95), gy(g, 4.75), `${I('Z')} → ∞`, { size: 13, anchor: 'start', color: C.amber });
      hatchRegion(s, g, 'region', (x, y) => sat(CON125.c, x, y) && x <= XM125 && y <= XM125, [0, XM125, 0, XM125]);
    } else {
      axes(s, g, [-0.3, 8.85], [-0.3, 8.65]);
      ticks(s, g, [2, 4, 6, 8], [2, 4, 6, 8]);
      origin(s, g);
      path(s, [gp(g, [0, 2]), gp(g, [2, 0])], { color: C.ink, w: 1.8, name: 'edge:2' });
      path(s, [gp(g, [0, 6]), gp(g, [6, 0])], { color: C.mari, w: 2.2, name: 'edge:6' });
      lab(s, gx(g, 0.15), gy(g, 2.75), `${X} + ${Y} ≤ 2`, { size: 12, anchor: 'start' });
      arr(s, [gx(g, 0.8), gy(g, 2.75) + 9], gp(g, [0.6, 0.75]), { color: C.ink, w: 1.1, head: 6, name: 'pointer' });
      lab(s, gx(g, 5.6), gy(g, 5.3), `${X} + ${Y} ≥ 6`, { size: 12, color: C.amber });
      lab(s, gx(g, 2.35), gy(g, 1.95), 'no overlap', { size: 12 });
      lab(s, gx(g, 2.35), gy(g, 1.95) + 15, '⇒ infeasible', { size: 12 });
      hatchRegion(s, g, 'region:2', (x, y) => sat(CON125.d1, x, y), [0, 2, 0, 2]);
      hatchRegion(s, g, 'region:6', (x, y) => sat(CON125.d2, x, y) && x <= XM125D && y <= XM125D, [0, XM125D, 0, XM125D]);
    }
    return s;
  },
  check(c: Case125) {
    const pn = c.panel, s = fig125.draw(c), out: Check[] = [], g = G125[pn];
    if (pn === 'a' || pn === 'b') {
      const cs = CON125[pn], vs = V125[pn], obj: [number, number, number] = pn === 'a' ? [1, 1, 6] : [1, 1, 4];
      out.push([`The corner points of the drawn region are exactly ${vs.map(ptStr).join(', ')} (from ${pn === 'a' ? 'y ≤ 3, 3x + y ≤ 12' : 'y ≤ 3, x + y ≤ 4'}, x, y ≥ 0)`, sameSet(corners(cs), vs)]);
      const zs = vs.map((p) => p[0] + p[1]), best = Math.max(...zs), at = vs.filter((_, i) => zs[i] === best);
      out.push(pn === 'a'
        ? [`Z = x + y at the corners: ${zs.join(', ')}; the maximum 6 is at B(3, 3) only, and the dashed line x + y = 6 touches the region there only`, best === 6 && at.length === 1 && sameSet(at, [[3, 3]]) && lineIs(s, g, 'obj', obj) && dotAt(s, g, 'B', [3, 3])]
        : [`Z = x + y at the corners: ${zs.join(', ')}; the maximum 4 is at both A(4, 0) and B(1, 3), and the dashed line x + y = 4 runs along the whole edge AB`, best === 4 && sameSet(at, [[4, 0], [1, 3]]) && lineIs(s, g, 'obj', obj) && dotAt(s, g, 'A', [4, 0]) && dotAt(s, g, 'B', [1, 3])]);
      if (pn === 'b') out.push(['Every point of AB is optimal: Z = 4 at 11 points along it, and AB is an edge (both ends corners)', Array.from({ length: 11 }, (_, k) => k / 10).every((t) => { const x = 4 - 3 * t, y = 3 * t; return close(x + y, 4) && sat(CON125.b, x, y); })]);
      out.push([`The region is hatched (${hatchOf(s, 'region').length} strokes), every stroke inside it, its area on a grid = shoelace ${fmt(shoelace(vs), 2)}`, hatchOf(s, 'region').length > 30 && hatchIn(s, g, 'region', (x, y) => sat(cs, x, y)) && close(gridArea((x, y) => sat(cs, x, y), 0, 4, 0, 3), shoelace(vs), 0.01 * shoelace(vs))]);
      out.push(marigoldOnly(s, /^obj$/, 'the objective line'));
      out.push(labelsCheck(s, pn === 'a' ? ['(a) Unique optimum', 'B'] : ['(b) Multiple optima (edge AB)', 'B', 'A']));
    } else if (pn === 'c') {
      out.push([`The corner points of x + 2y ≥ 4, x, y ≥ 0 are exactly (0, 2) and (4, 0): ${corners(CON125.c).map(ptStr).join(', ')}`, sameSet(corners(CON125.c), V125.c) && V125.c.every((p, i) => dotAt(s, g, `v${i}`, p))]);
      out.push(['Unbounded, no maximum: (t, t) is feasible for every t ≥ 2, and Z = x + y = 2t there grows without limit (t = 2, 200, 2 × 10⁶)', [2, 200, 2e6].every((t) => sat(CON125.c, t, t))]);
      const za = linesNamed(s, /^arrow:Z$/)[0].pts.map((p) => unPx(g, p));
      out.push(['The arrow "Z → ∞" lies in the region and points up and to the right, the way it opens', za.every((p) => sat(CON125.c, ...p)) && za[1][0] > za[0][0] && za[1][1] > za[0][1]]);
      const H = hatchOf(s, 'region'), xs = H.flat().map((q) => unPx(g, q));
      out.push([`The region is hatched (${H.length} strokes) out to the plot's edges, every stroke inside it`, H.length > 60 && hatchIn(s, g, 'region', (x, y) => sat(CON125.c, x, y)) && Math.max(...xs.map((q) => q[0])) > XM125 - 0.3 && Math.max(...xs.map((q) => q[1])) > XM125 - 0.3]);
      out.push(marigoldOnly(s, /^arrow:Z$/, 'the arrow "Z → ∞"'));
      out.push(labelsCheck(s, ['(c) Unbounded: no maximum', '(0, 2)', '(4, 0)', 'Z → ∞']));
    } else {
      out.push(['No point satisfies both x + y ≤ 2 and x + y ≥ 6 (grid 0 to 9, step 0.01): the feasible set is empty', (() => { for (let i = 0; i <= 900; i++) for (let j = 0; j <= 900; j++) if (sat(CON125.d1, i / 100, j / 100) && sat(CON125.d2, i / 100, j / 100)) return false; return true; })()]);
      out.push(['The two lines are parallel, 4/√2 = 2.83 apart: the gap between the regions', close(Math.abs(6 - 2) / Math.SQRT2, 2.828, 1e-3)]);
      out.push([`Each region hatched (${hatchOf(s, 'region:2').length} and ${hatchOf(s, 'region:6').length} strokes), every stroke inside its own region`, hatchOf(s, 'region:2').length > 4 && hatchOf(s, 'region:6').length > 40 && hatchIn(s, g, 'region:2', (x, y) => sat(CON125.d1, x, y)) && hatchIn(s, g, 'region:6', (x, y) => sat(CON125.d2, x, y))]);
      const nt = ['no overlap', '⇒ infeasible'].map((t) => s.labels.find((l) => l.text === t)!.rect);
      out.push(['"no overlap ⇒ infeasible" stands in the gap, between x + y = 2 and x + y = 6', nt.every((r) => [[r[0], r[1]], [r[2], r[1]], [r[0], r[3]], [r[2], r[3]]].every((q) => { const [x, y] = unPx(g, q as P); return x + y > 2 && x + y < 6; }))]);
      const pe = linesNamed(s, /^pointer$/)[0].pts.map((p) => unPx(g, p))[1];
      out.push(['The pointer from "x + y ≤ 2" ends inside the triangle', sat(CON125.d1, ...pe)]);
      out.push(marigoldOnly(s, /^edge:6$/, 'the line x + y = 6'));
      out.push(labelsCheck(s, ['(d) Infeasible: no solution', 'x + y ≤ 2', 'x + y ≥ 6', 'no overlap', '⇒ infeasible']));
    }
    out.push(noBad(s, fig125));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 12.6 · the empty feasible set (Topic 03, p. 793)               */
/* ===================================================================== */
const CAP126 = `First quadrant showing the regions ${X} ≥ 6, ${Y} ≥ 6 (upper-right block) and ${X} + ${Y} ≤ 10 (lower-left triangle), with no overlap, illustrating the empty feasible set.`;
const G126: Gr = { ox: 32, oy: 316, ux: 21, uy: 21 };
const TRI126: Con[] = [...NONNEG, [1, 1, 10]];
const BLK126: Con[] = [[-1, 0, -6], [0, -1, -6]];
const XM126 = 13.3;
const fig126: Diagram = {
  id: 'm12-12-fig-12.6',
  topic: 2,
  name: 'No feasible solution',
  cases: [{ chip: 'Empty feasible set', cap: CAP126 }],
  draw() {
    const s = new Sketch(W, 370), g = G126;
    axes(s, g, [-0.4, 13.75], [-0.4, 13.9]);
    ticks(s, g, [2, 4, 6, 8, 10, 12], [2, 4, 6, 8, 10, 12]);
    origin(s, g);
    path(s, [gp(g, [0, 10]), gp(g, [10, 0])], { color: C.mari, w: 2.3, name: 'edge:10' });
    path(s, [gp(g, [6, 0]), gp(g, [6, XM126])], { color: C.ink, w: 1.3, dash: '5 4', name: 'dash:x6' });
    path(s, [gp(g, [0, 6]), gp(g, [XM126, 6])], { color: C.ink, w: 1.3, dash: '5 4', name: 'dash:y6' });
    pt(s, gp(g, [6, 6]), 'corner');
    lab(s, gx(g, 6.35), gy(g, 6) - 9, '(6, 6)', { size: 12, anchor: 'start' });
    lab(s, gx(g, 9.6), gy(g, 12.55), `${X} ≥ 6, ${Y} ≥ 6`, { size: 12.5 });
    lab(s, gx(g, 3.55), gy(g, 1.0), `${X} + ${Y} ≤ 10`, { size: 12.5, color: C.amber });
    lab(s, gx(g, 8.4), gy(g, 2.75), 'regions never meet', { size: 11, anchor: 'start' });
    lab(s, gx(g, 8.4), gy(g, 2.75) + 14, '(feasible set is empty)', { size: 11, anchor: 'start' });
    arr(s, [gx(g, 8.9), gy(g, 2.75) - 15], gp(g, [6.75, 4.2]), { color: C.ink, w: 1.1, head: 6, name: 'pointer' });
    note(s, 350, [`${X} ≥ 6, ${Y} ≥ 6 forces ${X} + ${Y} ≥ 12, but the other region`, `needs ${X} + ${Y} ≤ 10: no point can satisfy both.`]);
    hatchRegion(s, g, 'triangle', (x, y) => sat(TRI126, x, y), [0, 10, 0, 10]);
    hatchRegion(s, g, 'block', (x, y) => sat(BLK126, x, y) && x <= XM126 && y <= XM126, [6, XM126, 6, XM126]);
    return s;
  },
  check() {
    const s = fig126.draw(fig126.cases[0]), out: Check[] = [], g = G126;
    out.push(['No point satisfies x ≥ 6, y ≥ 6 and x + y ≤ 10 together (grid 0 to 14, step 0.01): the feasible set is empty', (() => { for (let i = 0; i <= 1400; i++) for (let j = 0; j <= 1400; j++) if (sat(TRI126, i / 100, j / 100) && sat(BLK126, i / 100, j / 100)) return false; return true; })()]);
    out.push(['On the block x + y is least at its corner (6, 6): 12 > 10, as the note says', corners(BLK126).length === 1 && sameSet(corners(BLK126), [[6, 6]]) && dotAt(s, g, 'corner', [6, 6])]);
    out.push(['The triangle\'s corners are (0, 0), (10, 0), (0, 10); its edge is x + y = 10', sameSet(corners(TRI126), [[0, 0], [10, 0], [0, 10]]) && lineIs(s, g, 'edge:10', [1, 1, 10])]);
    out.push(['The dashed lines are x = 6 and y = 6, from the axes', lineIs(s, g, 'dash:x6', [1, 0, 6]) && lineIs(s, g, 'dash:y6', [0, 1, 6])]);
    out.push([`Each region hatched (${hatchOf(s, 'triangle').length} and ${hatchOf(s, 'block').length} strokes), every stroke inside its own region; the triangle's hatch has area 50 on a grid`, hatchOf(s, 'triangle').length > 30 && hatchOf(s, 'block').length > 30 && hatchIn(s, g, 'triangle', (x, y) => sat(TRI126, x, y)) && hatchIn(s, g, 'block', (x, y) => sat(BLK126, x, y)) && close(gridArea((x, y) => sat(TRI126, x, y), 0, 10, 0, 10), 50, 0.5)]);
    const pe = linesNamed(s, /^pointer$/)[0].pts.map((p) => unPx(g, p))[1];
    out.push(['The pointer from "regions never meet" ends in the gap: in neither region', !sat(TRI126, ...pe) && !sat(BLK126, ...pe)]);
    out.push(marigoldOnly(s, /^edge:10$/, 'the line x + y = 10'));
    out.push(labelsCheck(s, ['(6, 6)', 'x ≥ 6, y ≥ 6', 'x + y ≤ 10', 'regions never meet', '(feasible set is empty)']));
    out.push(noBad(s, fig126));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Additional topic A, Figure 1 · convex decomposition (p. 801)          */
/* ===================================================================== */
const CAPA1 = `Convex decomposition of an interior point ${I('P')} of triangle ${I('ABC')}: the ray from ${I('A')} through ${I('P')} meets ${I('BC')} at ${I('Q')}, which fixes the three weights of ${I('P')}.`;
/** The triangle (in units of 80 px), and the two weights read off the plate: Q = tB + (1 − t)C, P = sA + (1 − s)Q. */
const TA1 = { A: [1.15, 2.6] as P, B: [0, 0] as P, C: [3.4, 0] as P, t: 0.4, s: 0.35 };
const GA1: Gr = { ox: 34, oy: 238, ux: 80, uy: 80 };
const mix = (u: P, v: P, w: number): P => [w * u[0] + (1 - w) * v[0], w * u[1] + (1 - w) * v[1]];
const QA1 = mix(TA1.B, TA1.C, TA1.t), PA1 = mix(TA1.A, QA1, TA1.s);
const om = (v: string) => `(1 − ${I(v)})`;
const figA1: Diagram = {
  id: 'm12-12-A-d1',
  topic: 3,
  name: 'Convex decomposition of a point',
  cases: [{ chip: 'Weights of P', cap: CAPA1 }],
  draw() {
    const s = new Sketch(W, 306), g = GA1;
    path(s, [TA1.A, TA1.B, TA1.C, TA1.A].map((p) => gp(g, p)), { color: C.ink, w: 2, name: 'triangle' });
    path(s, [gp(g, TA1.A), gp(g, QA1)], { color: C.mari, w: 2, dash: '6 4', name: 'ray' });
    (['A', 'B', 'C'] as const).forEach((k) => pt(s, gp(g, TA1[k]), k));
    pt(s, gp(g, QA1), 'Q');
    pt(s, gp(g, PA1), 'P', C.mari, 4);
    lab(s, gx(g, TA1.A[0]), gy(g, TA1.A[1]) - 13, I('A'), { size: 15 });
    lab(s, gx(g, TA1.B[0]) - 8, gy(g, 0) + 14, I('B'), { size: 15, anchor: 'end' });
    lab(s, gx(g, TA1.C[0]) + 8, gy(g, 0) + 14, I('C'), { size: 15, anchor: 'start' });
    lab(s, gx(g, QA1[0]), gy(g, 0) + 20, I('Q'), { size: 15 });
    lab(s, gx(g, PA1[0]) - 12, gy(g, PA1[1]) + 2, I('P'), { size: 15, anchor: 'end', color: C.amber });
    lab(s, 196, 52, `${I('Q')} = ${I('tB')} + ${om('t')}${I('C')}`, { size: 13, anchor: 'start' });
    lab(s, 196, 76, `${I('P')} = ${I('sA')} + ${om('s')}${I('Q')}`, { size: 13, anchor: 'start' });
    lab(s, W / 2, 279, `weights: ${I('A')}: ${I('s')},  ${I('B')}: ${om('s')}${I('t')},`, { size: 12, color: C.slate });
    lab(s, W / 2, 296, `${I('C')}: ${om('s')}${om('t')}  (sum = 1)`, { size: 12, color: C.slate });
    return s;
  },
  check() {
    const s = figA1.draw(figA1.cases[0]), out: Check[] = [], g = GA1, { A, B, C: Cc, t, s: sw } = TA1;
    out.push([`Q = tB + (1 − t)C with t = ${t}: Q = ${ptStr(QA1)} lies on BC, between B and C`, close(QA1[1], 0) && QA1[0] > B[0] && QA1[0] < Cc[0] && t > 0 && t < 1]);
    out.push([`P = sA + (1 − s)Q with s = ${sw}: P = ${ptStr(PA1)} lies on AQ, between A and Q`, sw > 0 && sw < 1 && close((PA1[0] - A[0]) * (QA1[1] - A[1]) - (PA1[1] - A[1]) * (QA1[0] - A[0]), 0, 1e-9)]);
    const w = [sw, (1 - sw) * t, (1 - sw) * (1 - t)], comb: P = [w[0] * A[0] + w[1] * B[0] + w[2] * Cc[0], w[0] * A[1] + w[1] * B[1] + w[2] * Cc[1]];
    out.push([`The weights s, (1 − s)t, (1 − s)(1 − t) = ${w.map((v) => fmt(v, 2)).join(', ')} are non-negative, sum to 1, and sA + (1 − s)tB + (1 − s)(1 − t)C = P`, w.every((v) => v >= 0) && close(w[0] + w[1] + w[2], 1) && close(comb[0], PA1[0]) && close(comb[1], PA1[1])]);
    out.push(['P is an interior point: all three weights are strictly positive', w.every((v) => v > 0)]);
    out.push(['The dots stand at A, B, C, Q and P', (['A', 'B', 'C'] as const).every((k) => dotAt(s, g, k, TA1[k])) && dotAt(s, g, 'Q', QA1) && dotAt(s, g, 'P', PA1)]);
    out.push(['The dashed ray runs from A to Q, through P', (() => { const r = linesNamed(s, /^ray$/)[0].pts.map((p) => unPx(g, p)); return close(r[0][0], A[0], 1e-6) && close(r[0][1], A[1], 1e-6) && close(r[1][0], QA1[0], 1e-6) && close(r[1][1], QA1[1], 1e-6); })()]);
    out.push(['The triangle is outlined, never filled', s.svg().indexOf('fill="#') < 0 || !/<path[^>]*fill="#[^"]*"[^>]*stroke/.test(s.svg())]);
    out.push(marigoldOnly(s, /^(ray|dot:P)$/, 'the ray A → Q and the point P'));
    out.push(labelsCheck(s, ['A', 'B', 'C', 'Q', 'P', 'Q = tB + (1 − t)C', 'P = sA + (1 − s)Q', 'weights: A: s,  B: (1 − s)t,', 'C: (1 − s)(1 − t)  (sum = 1)']));
    out.push(noBad(s, figA1));
    out.push(...layout(s));
    return out;
  },
};

/** Mathematics 12 Chapter 12, Linear Programming: the book's figures. */
export const DIAGRAMS_MATHEMATICS_12_12: Diagram[] = [fig121, fig122, fig123, fig124, fig125, fig126, figA1];
