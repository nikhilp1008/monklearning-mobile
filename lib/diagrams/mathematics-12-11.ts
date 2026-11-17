import { C, Rect, Sketch, mathW, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';
import { I, W, X, Y, arr, close, dotNamed, fmt, labelsCheck, layout, linesNamed, marigoldOnly, noBadChars, path, plain, pt } from '@/lib/diagrams/mathematics-12-07';
import type { P } from '@/lib/diagrams/mathematics-12-07';
import { stixW } from '@/lib/diagrams/mathematics-11-03b';

/**
 * MATHEMATICS CLASS 12, CHAPTER 11 (Three Dimensional Geometry): Figures 11.1–11.6 of the Master Reference book
 * (October 2026 snapshot, math12.pdf), redrawn. Each stands on its own "CHAPTER 11 · FIGURES" plate, the page after
 * its caption. The chapter opens with a Topic 00, so Topic NN is index NN:
 *
 *   Figure 11.1 (p. 690; caption p. 689): Topic 00 (Foundations), index 0. The distance formula as a box.
 *   Figure 11.2 (p. 700; caption p. 699): Topic 01 (Direction cosines), index 1. OP and its three angles.
 *   Figure 11.3 (p. 710; caption p. 709): Topic 02 (Shortest distance), index 2. Two skew lines.
 *   Figure 11.4 (p. 719; caption p. 718): Topic 03 (Planes), index 3. The point–normal form.
 *   Figure 11.5 (p. 728; caption p. 727): Topic 04 (Perpendicular toolkit), index 4. Foot and image in a line.
 *   Figure 11.6 (p. 737; caption p. 736): Topic 05 (Configurations), index 5. A plane through a line and a point.
 *
 * ONE FRAME, THE BOOK'S. Every plate draws the same oblique frame: z up, x to the right, y going back up-right; here
 * y runs back at 30° and is shortened to 0.5 (the book's small tripod: about 28°, about half). It is right-handed
 * (x × y = z). Points are given their coordinates and drawn by that one projection (`pj`), so every right angle,
 * length and cross product on a drawing is checked in space, not on the page. 11.5 lies in one plane (the line and
 * P), as the book draws it: it is drawn flat in that plane, true to scale, and keeps the book's small tripod.
 *
 * THE NUMBERS. The book gives no coordinates; each drawing is given simple ones fitted to the plate:
 *   11.1  P = (0, 0, 0), Q = (4, 3, 2.2) relative to P, so the floor diagonal is 5 and PQ = √29.84.
 *   11.2  P(2, 3, 6), r = 7: cos α = 2/7, cos β = 3/7, cos γ = 6/7 (α 73.4°, β 64.6°, γ 31.0°).
 *   11.3  L₁: (t, 0, 2), b⃗₁ = (1, 0, 0); L₂: (0.5s, 0.866s, 0), b⃗₂ = (cos 60°, sin 60°, 0); a⃗₁ = (−1.6, 0, 2),
 *         a⃗₂ = (−0.5, −0.866, 0); b⃗₁ × b⃗₂ = (0, 0, 0.866), d = 2.
 *   11.4  the plane z = 0, A = O, n⃗ = (0, 0, 2.7), R = (−1.2, −0.5, 0).
 *   11.5  the line through A at 9° on the page, F = A + 2.1b⃗, FP = FP′ = 3.3 (units of 34 px).
 *   11.6  the plane z = 0, A = O, b⃗ = (1, 0, 0), P = (1, 2.6, 0), N⃗ = b⃗ × (P⃗ − a⃗) = (0, 0, 2.6).
 *
 * ONE HIGHLIGHT, the book's orange: 11.1 PQ and "space diagonal PQ"; 11.2 OP; 11.3 the common perpendicular d and its
 * feet; 11.4 r⃗ − a⃗; 11.5 A to F and the foot F; 11.6 P⃗ − a⃗. The book's navy is ink, its grey slate.
 *
 * NO FILLS. The planes of 11.4 and 11.6 (pale orange in the book) are outlines only: a plane is not an area to hatch.
 *
 * VECTORS are written as the chapter writes them, an arrow over the letter (U+20D7 inside the italic, the subscript
 * after): a⃗₁, b⃗₁ × b⃗₂. The captions print the vectors without arrows and the letters upright; here they carry
 * arrows and italics, as the drawings and the text do. Every fraction on a drawing is stacked (11.2, 11.3, 11.5).
 */

type V = [number, number, number];
const ARW = '\u20d7';
const vec = (t: string) => I(`${t}${ARW}`);
const Z = I('z');
const sub = (h: string, n: string | number) => `${h}<sub>${n}</sub>`;
const DEG = Math.PI / 180;

/* ---------- labels: an arrow over a letter takes no width of its own ---------- */
const bare = (html: string) => plain(html).replace(/\u20d7/g, '');
const widthOf = (html: string, size: number) => Math.max(mathW(html.replace(/\u20d7/g, ''), size), bare(html).length * size * 0.5);
/** A line of STIX on the drawing, from its baseline, its box at its true width (as mathematics-12-07.ts's lab). */
function lab(s: Sketch, x: number, y: number, html: string, o: { size?: number; anchor?: 'start' | 'middle' | 'end'; color?: string } = {}): Rect {
  const size = o.size ?? 13, anchor = o.anchor ?? 'middle', w = widthOf(html, size);
  const x0 = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w : x;
  const top = html.includes('<sup>') ? 0.85 : html.includes(ARW) ? 0.9 : 0.72;
  const rect: Rect = [x0, y - size * top, x0 + w, y + size * (html.includes('<sub>') ? 0.36 : 0.22)];
  s.labels.push({ text: plain(html), rect });
  s.text(x, y, html, { size, anchor, color: o.color ?? C.text });
  return rect;
}
/* ---------- labels of several runs: text and stacked fractions (as mathematics-12-05.ts, arrows of no width) ---------- */
type Piece = { t: string } | { num: string; den: string };
const FRACS = new WeakMap<Sketch, { num: string; den: string; rule: [number, number, number]; numY: number; denY: number; numW: number; denW: number }[]>();
/**
 * A fraction's rule is as wide as its widest line in STIX advance widths, not the label estimate `widthOf` (which
 * pads long runs: on the device the rule of 11.3's d ran far past its numerator on both sides). A line with
 * subscripts sits higher, so they clear the rule (Android check: the rule ran through a₂, a₁, b₁, b₂), and so does one
 * with a descender (the tail of y in cos β = y/r touched the rule, Android check of Ch 11).
 */
const inkW = (html: string, size: number) => stixW(bare(html), size);
const fracW = (num: string, den: string, size: number) => Math.max(inkW(num, size), inkW(den, size)) + 6;
function frac(s: Sketch, x: number, y: number, num: string, den: string, size: number, color: string): Rect {
  const w = fracW(num, den, size), numY = y - 4 - (num.includes('<sub>') ? size * 0.3 : 0) - (/[gjpqyβγζημρφχψ]/.test(bare(num)) ? size * 0.2 : 0), denY = y + 3 + size * 0.72 + (den.includes(ARW) ? 3 : 0);
  s.text(x, numY, num, { size, color });
  s.text(x, denY, den, { size, color });
  s.add(`<line x1="${r1(x - w / 2)}" y1="${r1(y)}" x2="${r1(x + w / 2)}" y2="${r1(y)}" stroke="${color}" stroke-width="1.1"/>`);
  FRACS.set(s, [...(FRACS.get(s) ?? []), { num, den, rule: [x - w / 2, x + w / 2, y], numY, denY, numW: inkW(num, size), denW: inkW(den, size) }]);
  return [x - w / 2, numY - size * 0.9, x + w / 2, denY + size * 0.36];
}
const pieceW = (p: Piece, size: number) => ('t' in p ? Math.max(stixW(p.t, size), widthOf(p.t, size) * 0.9) : fracW(p.num, p.den, size) + 2);
const pieceText = (p: Piece) => ('t' in p ? plain(p.t) : `${plain(p.num)}/${plain(p.den)}`);
/** One label made of runs, its fractions' rules on the maths axis. Registered as ONE label. */
function runs(s: Sketch, x: number, y: number, parts: Piece[], o: { size?: number; anchor?: 'start' | 'middle' | 'end'; color?: string } = {}): Rect {
  const size = o.size ?? 13, color = o.color ?? C.text, ws = parts.map((p) => pieceW(p, size)), total = ws.reduce((a, b) => a + b, 0);
  let at = o.anchor === 'middle' ? x - total / 2 : o.anchor === 'end' ? x - total : x;
  const bx: Rect = [at, y - size * 0.9, at + total, y + size * 0.36];
  const grow = (r: Rect) => { bx[1] = Math.min(bx[1], r[1]); bx[3] = Math.max(bx[3], r[3]); };
  parts.forEach((p, i) => {
    if ('t' in p) {
      const body = p.t.replace(/^((?:<[^>]+>)*) +/, '$1').replace(/ +((?:<\/[^>]+>)*)$/, '$1'), sp = stixW(' ', size);
      const lead = /^ */.exec(plain(p.t))![0].length, trail = / *$/.exec(plain(p.t))![0].length;
      if (i < parts.length - 1) s.text(at + ws[i] - trail * sp, y, body, { size, anchor: 'end', color });
      else s.text(at + lead * sp, y, body, { size, anchor: 'start', color });
    } else grow(frac(s, at + ws[i] / 2, y - size * 0.3, p.num, p.den, size, color));
    at += ws[i];
  });
  s.labels.push({ text: parts.map(pieceText).join(''), rect: bx });
  return bx;
}
/** Every stacked fraction really is stacked: numerator above the rule, denominator below, the rule as wide as both. */
const stackedCheck = (s: Sketch, want: string[]): Check => {
  const f = FRACS.get(s) ?? [], got = f.map((q) => `${plain(q.num)}/${plain(q.den)}`);
  const ok = f.every((q) => q.numY < q.rule[2] && q.denY - 6 > q.rule[2] && q.rule[1] - q.rule[0] >= Math.max(q.numW, q.denW)) && want.length === got.length && want.every((w) => got.includes(w));
  return [`Every fraction on the drawing is stacked by hand (${f.length}: ${[...new Set(got)].join(', ')}), numerator over the rule over denominator`, ok];
};

/* ---------- the frame: one oblique projection for every drawing ---------- */
const REC = 0.5, REC_ANG = 30 * DEG;
const YS: P = [REC * Math.cos(REC_ANG), REC * Math.sin(REC_ANG)];
/** A point of space on the page: origin o (px), u px a unit. */
const pj = (o: P, u: number, v: V): P => [o[0] + u * (v[0] + v[1] * YS[0]), o[1] - u * (v[2] + v[1] * YS[1])];
const add3 = (a: V, b: V): V => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
const sub3 = (a: V, b: V): V => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const mul3 = (a: V, k: number): V => [a[0] * k, a[1] * k, a[2] * k];
const dot3 = (a: V, b: V) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const cross = (a: V, b: V): V => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const len3 = (a: V) => Math.sqrt(dot3(a, a));
const unit3 = (a: V): V => mul3(a, 1 / (len3(a) || 1));
const len2 = (a: P, b: P) => Math.hypot(b[0] - a[0], b[1] - a[1]);
const near = (a: P, b: P, tol = 1e-6) => close(a[0], b[0], tol) && close(a[1], b[1], tol);
/** The line named `name` runs from the page point a to b (either way round). */
const runsFrom = (s: Sketch, name: string, a: P, b: P) => {
  const l = linesNamed(s, new RegExp(`^${name.replace(/[()+×−⃗]/g, '\\$&')}$`))[0]?.pts;
  return !!l && ((near(l[0], a, 1e-3) && near(l[l.length - 1], b, 1e-3)) || (near(l[0], b, 1e-3) && near(l[l.length - 1], a, 1e-3)));
};
const frameCheck = (): Check => ['The frame is right-handed (x × y = z) and drawn by one projection: x right, z up, y back at 30° shortened to 0.5', close(dot3(cross([1, 0, 0], [0, 1, 0]), [0, 0, 1]), 1) && close(Math.hypot(...YS), REC)];

/** The book's small x, y, z tripod (slate), its corner at o, each arm k px long on the page. */
function tripod(s: Sketch, o: P, k = 30) {
  const xe: P = [o[0] + k, o[1]], ye: P = [o[0] + k * Math.cos(REC_ANG), o[1] - k * Math.sin(REC_ANG)], ze: P = [o[0], o[1] - k];
  arr(s, o, xe, { color: C.slate, w: 1.3, head: 6, name: 'tripod x' });
  arr(s, o, ye, { color: C.slate, w: 1.3, head: 6, name: 'tripod y' });
  arr(s, o, ze, { color: C.slate, w: 1.3, head: 6, name: 'tripod z' });
  lab(s, xe[0] + 6, xe[1] + 5, X, { size: 15, anchor: 'start' });
  lab(s, ye[0] + 5, ye[1] + 1, Y, { size: 15, anchor: 'start' });
  lab(s, ze[0], ze[1] - 8, Z, { size: 15 });
}
/** A right-angle mark at the corner c (space) between the directions d1 and d2, k units along each, projected. */
function rightMark3(s: Sketch, o: P, u: number, c: V, d1: V, d2: V, k: number, col: string = C.ink) {
  const a = unit3(d1), b = unit3(d2);
  path(s, [pj(o, u, add3(c, mul3(a, k))), pj(o, u, add3(c, add3(mul3(a, k), mul3(b, k)))), pj(o, u, add3(c, mul3(b, k)))], { color: col, w: 1.1, name: 'right angle' });
}
/** A right-angle mark on the page at c between the unit directions u and v. */
function rightMark(s: Sketch, c: P, u: P, v: P, k = 9, col: string = C.ink) {
  path(s, [[c[0] + u[0] * k, c[1] + u[1] * k], [c[0] + (u[0] + v[0]) * k, c[1] + (u[1] + v[1]) * k], [c[0] + v[0] * k, c[1] + v[1] * k]], { color: col, w: 1.1, name: 'right angle' });
}
/** A thin leader from a point on a line to a label's box, stopping short of the box. */
function leader(s: Sketch, from: P, to: P, name: string) {
  path(s, [from, to], { color: C.slate, w: 0.9, name });
}
/** The arc of radius r (units) in space from the direction e to the direction f about the origin, projected. */
function arc3(o: P, u: number, e: V, f: V, r: number, n = 40): P[] {
  const a = unit3(e), b = unit3(f), th = Math.acos(Math.max(-1, Math.min(1, dot3(a, b))));
  return Array.from({ length: n + 1 }, (_, i) => {
    const t = i / n, ka = Math.sin((1 - t) * th) / Math.sin(th), kb = Math.sin(t * th) / Math.sin(th);
    return pj(o, u, mul3(add3(mul3(a, ka), mul3(b, kb)), r));
  });
}

/* ===================================================================== */
/* Figure 11.1 · the distance formula as a box (Topic 00, p. 690)        */
/* ===================================================================== */
const pq = (n: number | string) => `${I('x')}<sub>${n}</sub>, ${I('y')}<sub>${n}</sub>, ${Z}<sub>${n}</sub>`;
const edgeName = (v: string) => `|${I(v)}<sub>2</sub> − ${I(v)}<sub>1</sub>|`;
/** The caption's edge lengths, glued inside the bars (the caption tore |z₂ / − z₁| on the phone). */
const capEdge = (v: string) => `|${I(v)}<sub>2</sub>\u00a0−\u00a0${I(v)}<sub>1</sub>|`;
const CAP111 = `Points ${I('P')}(${pq(1)}) and ${I('Q')}(${pq(2)}) in 3D. The box has edges parallel to the axes of lengths ${capEdge('x')}, ${capEdge('y')} and ${capEdge('z')}. ${I('PQ')} is its space diagonal and the dashed segment is the floor diagonal, so Pythagoras is applied twice.`;
const O111: P = [84, 180], U111 = 35;
const BOX111: V = [4, 3, 2.2];
const fig111: Diagram = {
  id: 'm12-11-fig-11.1',
  topic: 0,
  name: 'The distance formula as a box',
  cases: [{ chip: 'Space diagonal', cap: CAP111 }],
  draw() {
    const s = new Sketch(W, 262), P3 = (v: V) => pj(O111, U111, v), [a, b, c] = BOX111;
    const Pv: V = [0, 0, 0], Qv: V = [a, b, c], Fv: V = [a, b, 0];
    const corners: V[] = [[0, 0, 0], [a, 0, 0], [a, b, 0], [0, b, 0], [0, 0, c], [a, 0, c], [a, b, c], [0, b, c]];
    const edges: [number, number][] = [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [3, 7]];
    // the box's edges, thin slate as printed (the edge from F up to Q is drawn dashed below)
    edges.forEach(([i, j]) => path(s, [P3(corners[i]), P3(corners[j])], { color: C.slate, w: 1, name: 'box edge' }));
    const p = P3(Pv), q = P3(Qv), f = P3(Fv);
    path(s, [p, f], { color: C.ink, w: 1.8, dash: '6 4', name: 'floor diagonal' });
    path(s, [f, q], { color: C.ink, w: 1.8, dash: '6 4', name: 'rise' });
    path(s, [p, q], { color: C.mari, w: 3, name: 'PQ' });
    pt(s, p, 'P');
    pt(s, q, 'Q');
    lab(s, q[0] + 24, q[1] - 14, `${I('Q')}(${pq(2)})`, { size: 14, anchor: 'end' });
    lab(s, p[0] + 14, p[1] + 22, `${I('P')}(${pq(1)})`, { size: 14, anchor: 'end' });
    tripod(s, [14, 72], 26);
    lab(s, 48, 40, `space diagonal ${I('PQ')}`, { size: 13, anchor: 'start', color: C.amber });
    lab(s, p[0] + 52, p[1] + 21, edgeName('x'), { size: 13 });
    const ry = P3([a, b / 2, 0]);
    lab(s, ry[0] + 8, ry[1] + 14, edgeName('y'), { size: 13, anchor: 'start' });
    lab(s, f[0] + 7, (f[1] + q[1]) / 2 + 5, edgeName('z'), { size: 13, anchor: 'start' });
    // "floor diagonal" by a short leader (the diagonal is too flat for its name to sit beside it)
    const m = P3([a * 0.62, b * 0.62, 0]);
    const lr = lab(s, m[0] + 6, p[1] + 21, 'floor diagonal', { size: 12, anchor: 'start', color: C.slate });
    leader(s, [m[0] + 1, m[1] + 4], [lr[0] + 14, lr[1] - 4], 'leader to the floor diagonal');
    runs(s, 170, 250, [{ t: `${I('PQ')} = √((${I('x')}<sub>2</sub> − ${I('x')}<sub>1</sub>)<sup>2</sup> + (${I('y')}<sub>2</sub> − ${I('y')}<sub>1</sub>)<sup>2</sup> + (${Z}<sub>2</sub> − ${Z}<sub>1</sub>)<sup>2</sup>)` }], { size: 12.5, anchor: 'middle' });
    return s;
  },
  check() {
    const s = fig111.draw(fig111.cases[0]), out: Check[] = [], P3 = (v: V) => pj(O111, U111, v), [a, b, c] = BOX111;
    const Pv: V = [0, 0, 0], Qv: V = [a, b, c], Fv: V = [a, b, 0];
    out.push(frameCheck());
    out.push(['P and Q are opposite corners of the box, its edges along the axes: |x₂ − x₁| = 4, |y₂ − y₁| = 3, |z₂ − z₁| = 2.2', near(dotNamed(s, 'P')!.p, P3(Pv)) && near(dotNamed(s, 'Q')!.p, P3(Qv)) && linesNamed(s, /^box edge$/).length === 11]);
    out.push(['The floor diagonal runs from P to F, the corner under Q, and the dashed rise from F straight up to Q', runsFrom(s, 'floor diagonal', P3(Pv), P3(Fv)) && runsFrom(s, 'rise', P3(Fv), P3(Qv)) && close(dot3(sub3(Fv, Pv), [0, 0, 1]), 0)]);
    const floor = len3(sub3(Fv, Pv)), rise = len3(sub3(Qv, Fv)), d = len3(sub3(Qv, Pv));
    out.push([`Pythagoras twice: the floor diagonal is √(4² + 3²) = ${fmt(floor)}, the rise ${fmt(rise)} is at right angles to it, so PQ = √(${fmt(floor * floor)} + ${fmt(rise * rise)}) = ${fmt(d, 4)}`, close(floor, 5) && close(dot3(sub3(Fv, Pv), sub3(Qv, Fv)), 0) && close(d * d, floor * floor + rise * rise) && close(d, Math.sqrt(a * a + b * b + c * c))]);
    out.push(['PQ is the space diagonal, from P to Q', runsFrom(s, 'PQ', P3(Pv), P3(Qv))]);
    out.push(marigoldOnly(s, /^PQ$/, 'PQ'));
    out.push(labelsCheck(s, ['Q(x2, y2, z2)', 'P(x1, y1, z1)', 'space diagonal PQ', '|x2 − x1|', '|y2 − y1|', '|z2 − z1|', 'floor diagonal', 'x', 'y', 'z', 'PQ = √((x2 − x1)2 + (y2 − y1)2 + (z2 − z1)2)']));
    out.push(noBadChars(s, fig111));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 11.2 · OP and its direction angles (Topic 01, p. 700)          */
/* ===================================================================== */
const al = I('α'), be = I('β'), ga = I('γ'), r_ = I('r');
const CAP112 = `A directed line ${I('OP')} from the origin ${I('O')} to the point ${I('P')}(${X}, ${Y}, ${Z}). The angles ${al}, ${be}, ${ga} are the angles between ${I('OP')} and the positive ${X}-, ${Y}-, ${Z}-axes respectively. The perpendiculars from ${I('P')} meet the three axes at the feet marked in the figure and show the projections ${X}, ${Y}, ${Z}.`;
const O112: P = [62, 302], U112 = 38;
const P112: V = [2, 3, 6];
const R112 = 7;
const AXES112: [V, string][] = [[[1, 0, 0], 'x'], [[0, 1, 0], 'y'], [[0, 0, 1], 'z']];
/**
 * The arcs nest without crossing: α's is the small one (on the page it ends on OP about 0.8 units from O), β's starts
 * on the y-axis beyond that (2.2 × 0.5 = 1.1 units) and stops short of the foot Py (y = 3), and γ's starts on the
 * z-axis beyond where β's meets OP. Each name sits just outside its own arc, pushed out from O by `out` px at the
 * fraction `t` of the way from the axis to OP: α's near OP, above the y-axis, so it reads as the angle that ends on OP.
 */
const ARC112 = { x: 0.75, y: 2.2, z: 3.6 };
const LAB112: Record<'x' | 'y' | 'z', { t: number; out: number }> = { x: { t: 0.78, out: 14 }, y: { t: 0.62, out: 15 }, z: { t: 0.5, out: 15 } };
const fig112: Diagram = {
  id: 'm12-11-fig-11.2',
  topic: 1,
  name: 'Direction angles of OP',
  cases: [{ chip: 'Direction cosines', cap: CAP112 }],
  draw() {
    const s = new Sketch(W, 358), o = O112, u = U112, P3 = (v: V) => pj(o, u, v);
    // the axes (slate), to just past the feet
    arr(s, o, P3([3.4, 0, 0]), { color: C.slate, w: 1.4, name: 'axis x' });
    arr(s, o, P3([0, 6, 0]), { color: C.slate, w: 1.4, name: 'axis y' });
    arr(s, o, P3([0, 0, 7.2]), { color: C.slate, w: 1.4, name: 'axis z' });
    const xe = P3([3.4, 0, 0]), ye = P3([0, 6, 0]), ze = P3([0, 0, 7.2]);
    lab(s, xe[0] + 7, xe[1] + 5, X, { size: 16, anchor: 'start' });
    // y is set past the dashed drop from P to Px (the axis runs on across it): between that drop and the
    // dotted one to Py it sat on the lines (Android check of Ch 11)
    lab(s, ye[0] + 6, ye[1] + 4, Y, { size: 16, anchor: 'start' });
    lab(s, ze[0], ze[1] - 9, Z, { size: 16 });
    // the perpendiculars from P to the three axes: dashed, dotted, dash-dot, as printed
    const p = P3(P112), [x, y, z] = P112;
    const feet: [V, string, string][] = [[[x, 0, 0], 'Px', '6 4'], [[0, y, 0], 'Py', '1.5 3.5'], [[0, 0, z], 'Pz', '8 3 1.5 3']];
    feet.forEach(([v, n, d]) => path(s, [p, P3(v)], { color: C.slate, w: 1.3, dash: d, name: `drop ${n}` }));
    // the three angles, each the true arc in the plane of OP and its axis
    AXES112.forEach(([e, n]) => path(s, arc3(o, u, e, P112, ARC112[n as 'x' | 'y' | 'z']), { color: C.ink, w: 1.8, name: `arc ${n}` }));
    path(s, [o, p], { color: C.mari, w: 3, name: 'OP' });
    feet.forEach(([v, n]) => pt(s, P3(v), n, C.slate, 2.6));
    pt(s, o, 'O');
    pt(s, p, 'P');
    lab(s, p[0] + 6, p[1] - 10, `${I('P')}(${X}, ${Y}, ${Z})`, { size: 15, anchor: 'start' });
    lab(s, o[0] - 9, o[1] + 5, I('O'), { size: 15, anchor: 'end' });
    const fx = P3([x, 0, 0]), fy = P3([0, y, 0]), fz = P3([0, 0, z]);
    lab(s, fx[0] + 4, fx[1] + 20, sub(I('P'), I('x')), { size: 14 });
    lab(s, fy[0] + 9, fy[1] + 14, sub(I('P'), I('y')), { size: 14, anchor: 'start' });
    lab(s, fz[0] - 8, fz[1] + 5, sub(I('P'), I('z')), { size: 14, anchor: 'end' });
    // the angle names just outside their arcs, pushed out from O
    const at = (n: 'x' | 'y' | 'z'): P => {
      const e = AXES112.find((q) => q[1] === n)![0], q = arc3(o, u, e, P112, ARC112[n], 50)[Math.round(LAB112[n].t * 50)];
      const d = Math.hypot(q[0] - o[0], q[1] - o[1]), k = (d + LAB112[n].out) / d;
      return [o[0] + (q[0] - o[0]) * k, o[1] + (q[1] - o[1]) * k];
    };
    const ma = at('x'), mb = at('y'), mg = at('z');
    lab(s, ma[0], ma[1] + 5, al, { size: 14 });
    lab(s, mb[0], mb[1] + 5, be, { size: 15 });
    lab(s, mg[0], mg[1] + 5, ga, { size: 15 });
    // the formulas, as printed under the plate
    const cosRow = (y0: number, ang: string, v: string) => runs(s, 214, y0, [{ t: `cos ${ang} = ` }, { num: I(v), den: r_ }], { size: 14, anchor: 'start' });
    cosRow(130, al, 'x');
    cosRow(175, be, 'y');
    cosRow(220, ga, 'z');
    lab(s, 170, 348, `cos<sup>2</sup> ${al} + cos<sup>2</sup> ${be} + cos<sup>2</sup> ${ga} = 1`, { size: 14 });
    return s;
  },
  check() {
    const s = fig112.draw(fig112.cases[0]), out: Check[] = [], o = O112, u = U112, P3 = (v: V) => pj(o, u, v), [x, y, z] = P112;
    out.push(frameCheck());
    const r = len3(P112), cs = P112.map((v) => v / r);
    out.push([`r = OP = √(2² + 3² + 6²) = ${fmt(r)}, so cos α = 2/7, cos β = 3/7, cos γ = 6/7`, close(r, R112)]);
    out.push([`cos²α + cos²β + cos²γ = ${fmt(cs[0] ** 2)} + ${fmt(cs[1] ** 2)} + ${fmt(cs[2] ** 2)} = 1`, close(cs[0] ** 2 + cs[1] ** 2 + cs[2] ** 2, 1)]);
    out.push(['OP runs from O to P(2, 3, 6)', runsFrom(s, 'OP', o, P3(P112))]);
    const feet: [V, V, string][] = [[[x, 0, 0], [1, 0, 0], 'Px'], [[0, y, 0], [0, 1, 0], 'Py'], [[0, 0, z], [0, 0, 1], 'Pz']];
    out.push(['Each foot is where the perpendicular from P meets its axis: (x, 0, 0), (0, y, 0), (0, 0, z), with P minus the foot at right angles to the axis', feet.every(([f, e, n]) => close(dot3(sub3(P112, f), e), 0) && runsFrom(s, `drop ${n}`, P3(P112), P3(f)) && near(dotNamed(s, n)!.p, P3(f)))]);
    out.push(['Each foot lies at the projection: OPx = x = r cos α, OPy = y = r cos β, OPz = z = r cos γ', feet.every(([f], i) => close(len3(f), r * cs[i]))]);
    const ang = AXES112.map(([e, n]) => {
      const pts = linesNamed(s, new RegExp(`^arc ${n}$`))[0].pts, R = ARC112[n as 'x' | 'y' | 'z'];
      const a = arc3(o, u, e, P112, R), th = Math.acos(dot3(unit3(e), unit3(P112)));
      // the arc's ends are on the axis and on OP, at radius R, and it spans the angle between them
      return { n, ok: near(pts[0], P3(mul3(e, R))) && near(pts[pts.length - 1], P3(mul3(unit3(P112), R))) && pts.every((q, i) => near(q, a[i])), th: th / DEG };
    });
    out.push([`Each arc is the true arc in the plane of OP and its axis, from the axis to OP: α = ${fmt(ang[0].th, 1)}°, β = ${fmt(ang[1].th, 1)}°, γ = ${fmt(ang[2].th, 1)}°`, ang.every((q) => q.ok) && close(ang[0].th, Math.acos(2 / 7) / DEG) && close(ang[1].th, Math.acos(3 / 7) / DEG) && close(ang[2].th, Math.acos(6 / 7) / DEG)]);
    out.push(marigoldOnly(s, /^OP$/, 'OP'));
    out.push(stackedCheck(s, ['x/r', 'y/r', 'z/r']));
    out.push(labelsCheck(s, ['x', 'y', 'z', 'O', 'P(x, y, z)', 'Px', 'Py', 'Pz', 'α', 'β', 'γ', 'cos α = x/r', 'cos β = y/r', 'cos γ = z/r', 'cos2 α + cos2 β + cos2 γ = 1']));
    out.push(noBadChars(s, fig112));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 11.3 · skew lines and their common perpendicular (Topic 02)    */
/* ===================================================================== */
const va1 = sub(vec('a'), 1), va2 = sub(vec('a'), 2), vb1 = sub(vec('b'), 1), vb2 = sub(vec('b'), 2);
const CAP113 = `Skew lines ${sub(I('L'), 1)} and ${sub(I('L'), 2)} through the points with position vectors ${va1} and ${va2}, with direction vectors ${vb1} and ${vb2}. The segment of length ${I('d')} meets both lines at right angles, so it is parallel to ${vb1} × ${vb2}. The dashed segment represents ${va2} − ${va1}.`;
const O113: P = [196, 200], U113 = 38;
const D113 = 2;
const B1: V = [1, 0, 0], B2: V = [Math.cos(60 * DEG), Math.sin(60 * DEG), 0];
const F1: V = [0, 0, D113], F2: V = [0, 0, 0];
const A1: V = [-1.6, 0, D113], A2: V = mul3(B2, -1);
const L1R: [number, number] = [-2.15, 1.35], L2R: [number, number] = [-3.3, 3.2];
const fig113: Diagram = {
  id: 'm12-11-fig-11.3',
  topic: 2,
  name: 'Shortest distance between skew lines',
  cases: [{ chip: 'Skew lines', cap: CAP113 }],
  draw() {
    const s = new Sketch(W, 316), o = O113, u = U113, P3 = (v: V) => pj(o, u, v);
    const l2a = P3(mul3(B2, L2R[0])), l2b = P3(mul3(B2, L2R[1]));
    arr(s, l2a, l2b, { color: C.ink, w: 2, head: 8, name: 'L2' });
    const l1a = P3(add3(F1, mul3(B1, L1R[0]))), l1b = P3(add3(F1, mul3(B1, L1R[1])));
    arr(s, l1a, l1b, { color: C.ink, w: 2, head: 8, name: 'L1' });
    // a₂ − a₁, dashed slate
    path(s, [P3(A1), P3(A2)], { color: C.slate, w: 1.4, dash: '5 4', name: 'a2 − a1' });
    // b₁ × b₂ standing up from L₁'s foot
    const n = cross(B1, B2), top = add3(F1, mul3(unit3(n), 1.25));
    arr(s, P3(F1), P3(top), { color: C.ink, w: 1.6, head: 8, name: 'b1 × b2' });
    // the common perpendicular, the highlight
    path(s, [P3(F1), P3(F2)], { color: C.mari, w: 3, name: 'd' });
    pt(s, P3(F1), 'foot on L1', C.mari, 3);
    pt(s, P3(F2), 'foot on L2', C.mari, 3);
    pt(s, P3(A1), 'a1');
    pt(s, P3(A2), 'a2');
    const pa1 = P3(A1), pa2 = P3(A2), pt1 = P3(top);
    lab(s, pa1[0] - 2, pa1[1] - 15, va1, { size: 15 });
    lab(s, pa2[0] - 12, pa2[1] - 7, va2, { size: 15, anchor: 'end' });
    lab(s, pt1[0], pt1[1] - 10, `${vb1} × ${vb2}`, { size: 15 });
    lab(s, l1b[0] + 8, l1b[1] - 4, vb1, { size: 15, anchor: 'start' });
    lab(s, l1b[0] + 10, l1b[1] + 22, sub(I('L'), 1), { size: 15, anchor: 'start' });
    lab(s, l2b[0] + 6, l2b[1] + 2, vb2, { size: 15, anchor: 'start' });
    lab(s, l2a[0] - 6, l2a[1] + 8, sub(I('L'), 2), { size: 15, anchor: 'end' });
    lab(s, P3(F1)[0] + 8, (P3(F1)[1] + P3(F2)[1]) / 2 + 5, I('d'), { size: 16, anchor: 'start', color: C.amber });
    lab(s, (pa1[0] + pa2[0]) / 2 - 9, (pa1[1] + pa2[1]) / 2 + 2, `${va2} − ${va1}`, { size: 13, anchor: 'end', color: C.slate });
    tripod(s, [16, 104], 26);
    runs(s, 170, 284, [{ t: `${I('d')} = ` }, { num: `|(${va2} − ${va1}) · (${vb1} × ${vb2})|`, den: `|${vb1} × ${vb2}|` }], { size: 14, anchor: 'middle' });
    return s;
  },
  check() {
    const s = fig113.draw(fig113.cases[0]), out: Check[] = [], P3 = (v: V) => pj(O113, U113, v);
    out.push(frameCheck());
    const n = cross(B1, B2);
    out.push(['The lines are skew: not parallel (b₁ × b₂ ≠ 0) and they do not meet ((a₂ − a₁) · (b₁ × b₂) ≠ 0)', len3(n) > 0.5 && Math.abs(dot3(sub3(A2, A1), n)) > 0.5]);
    out.push(['a₁ lies on L₁ and a₂ on L₂; each foot of the segment d lies on its line', close(len3(cross(sub3(A1, F1), B1)), 0) && close(len3(cross(sub3(A2, F2), B2)), 0)]);
    const seg = sub3(F1, F2);
    out.push(['The segment d meets both lines at right angles, so it is parallel to b₁ × b₂', close(dot3(seg, B1), 0) && close(dot3(seg, B2), 0) && close(len3(cross(seg, n)), 0)]);
    const dForm = Math.abs(dot3(sub3(A2, A1), n)) / len3(n);
    out.push([`d = |(a₂ − a₁) · (b₁ × b₂)| / |b₁ × b₂| = ${fmt(dForm, 4)} = the length of the segment, ${fmt(len3(seg), 4)}`, close(dForm, len3(seg)) && close(dForm, D113)]);
    out.push(['On the drawing: d runs between the two feet, b₁ × b₂ stands up from the foot on L₁, the dashed segment joins a₁ to a₂', runsFrom(s, 'd', P3(F1), P3(F2)) && runsFrom(s, 'a2 − a1', P3(A1), P3(A2)) && near(linesNamed(s, /^b1 × b2$/)[0].pts[0], P3(F1)) && near(dotNamed(s, 'a1')!.p, P3(A1)) && near(dotNamed(s, 'a2')!.p, P3(A2))]);
    out.push(['L₁ and L₂ point along b₁ and b₂ (their arrowheads at the b₁ and b₂ ends)', (() => { const l1 = linesNamed(s, /^L1$/)[0].pts, l2 = linesNamed(s, /^L2$/)[0].pts; return near(l1[1], P3(add3(F1, mul3(B1, L1R[1])))) && near(l2[1], P3(mul3(B2, L2R[1]))); })()]);
    out.push(['The two lines do not cross on the page either, inside the drawn stretch', (() => { const l2 = linesNamed(s, /^L2$/)[0].pts, l1y = P3(F1)[1]; return Math.min(l2[0][1], l2[1][1]) > l1y + 20; })()]);
    out.push(marigoldOnly(s, /^(d|dot:foot on L[12])$/, 'the common perpendicular d and its feet'));
    out.push(stackedCheck(s, ['|(a⃗2 − a⃗1) · (b⃗1 × b⃗2)|/|b⃗1 × b⃗2|']));
    out.push(labelsCheck(s, ['a⃗1', 'a⃗2', 'b⃗1 × b⃗2', 'b⃗1', 'L1', 'b⃗2', 'L2', 'd', 'a⃗2 − a⃗1', 'x', 'y', 'z', 'd = |(a⃗2 − a⃗1) · (b⃗1 × b⃗2)|/|b⃗1 × b⃗2|']));
    out.push(noBadChars(s, fig113));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 11.4 · a plane by a point and its normal (Topic 03, p. 719)    */
/* ===================================================================== */
const vn = vec('n'), vr = vec('r'), va = vec('a');
const CAP114 = `A plane with normal vector ${vn} at the base point ${I('A')} (position vector ${va}). ${I('R')} (position vector ${vr}) is a general point of the plane, and the in-plane vector ${vr} − ${va} drawn from ${I('A')} to ${I('R')} is perpendicular to ${vn}.`;
const O114: P = [220, 178], U114 = 36;
const PLANE114: [number, number, number, number] = [-3.2, 1.8, -3.2, 3.2];
/** R lies well to the left of A on the page, so the right-angle mark at A opens clear of the n arrow (Android check). */
const N114: V = [0, 0, 2.7], R114: V = [-1.2, -0.5, 0];
const corners = (q: [number, number, number, number]): V[] => [[q[0], q[2], 0], [q[1], q[2], 0], [q[1], q[3], 0], [q[0], q[3], 0], [q[0], q[2], 0]];
const fig114: Diagram = {
  id: 'm12-11-fig-11.4',
  topic: 3,
  name: 'A plane through a point, normal to a vector',
  cases: [{ chip: 'Point–normal form', cap: CAP114 }],
  draw() {
    const s = new Sketch(W, 252), o = O114, u = U114, P3 = (v: V) => pj(o, u, v);
    path(s, corners(PLANE114).map(P3), { color: C.slate, w: 1.2, name: 'plane' });
    const a = P3([0, 0, 0]), rr = P3(R114), nt = P3(N114);
    rightMark3(s, o, u, [0, 0, 0], R114, N114, 0.42);
    arr(s, a, nt, { color: C.ink, w: 2.2, head: 9, name: 'n' });
    path(s, [a, rr], { color: C.mari, w: 2.8, name: 'r − a' });
    pt(s, a, 'A');
    pt(s, rr, 'R');
    lab(s, nt[0] + 2, nt[1] - 10, vn, { size: 16 });
    lab(s, rr[0] + 4, rr[1] - 13, `${I('R')}(${vr})`, { size: 15 });
    lab(s, a[0] + 9, a[1] + 6, `${I('A')}(${va})`, { size: 15, anchor: 'start' });
    lab(s, (a[0] + rr[0]) / 2, (a[1] + rr[1]) / 2 + 18.4, `${vr} − ${va}`, { size: 14, color: C.amber });
    tripod(s, [12, 236], 28);
    lab(s, 332, 244, `(${vr} − ${va}) · ${vn} = 0`, { size: 15, anchor: 'end' });
    return s;
  },
  check() {
    const s = fig114.draw(fig114.cases[0]), out: Check[] = [], P3 = (v: V) => pj(O114, U114, v);
    out.push(frameCheck());
    out.push(['A and R lie in the plane z = 0, inside the drawn parallelogram', R114[2] === 0 && R114[0] > PLANE114[0] && R114[0] < PLANE114[1] && R114[1] > PLANE114[2] && R114[1] < PLANE114[3] && 0 > PLANE114[0] && 0 < PLANE114[1] && 0 > PLANE114[2] && 0 < PLANE114[3]]);
    out.push(['n is normal to the plane: at right angles to both of its edge directions', close(dot3(N114, [1, 0, 0]), 0) && close(dot3(N114, [0, 1, 0]), 0)]);
    out.push(['(r − a) · n = 0: the in-plane vector from A to R is perpendicular to n', close(dot3(sub3(R114, [0, 0, 0]), N114), 0)]);
    out.push(['On the drawing: n stands on A, r − a runs from A to R, and the right-angle mark sits in the corner at A between them', near(linesNamed(s, /^n$/)[0].pts[0], P3([0, 0, 0])) && runsFrom(s, 'r − a', P3([0, 0, 0]), P3(R114)) && near(dotNamed(s, 'R')!.p, P3(R114))]);
    out.push(marigoldOnly(s, /^r − a$/, 'r − a'));
    out.push(labelsCheck(s, ['n⃗', 'R(r⃗)', 'A(a⃗)', 'r⃗ − a⃗', 'x', 'y', 'z', '(r⃗ − a⃗) · n⃗ = 0']));
    out.push(noBadChars(s, fig114));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 11.5 · foot and image of a point in a line (Topic 04, p. 728)  */
/* ===================================================================== */
const CAP115 = `A line with direction vector ${vec('b')} through the point ${I('A')}, and an external point ${I('P')}. The perpendicular from ${I('P')} meets the line at the foot ${I('F')}. The vector ${vec('AP')} splits into a component along ${vec('b')} (from ${I('A')} to ${I('F')}) and a perpendicular component (from ${I('F')} to ${I('P')}, the distance ${I('d')}). The image ${I('P')}′ lies on the far side of the line, with ${I('F')} the midpoint of ${I('PP')}′.`;
/** The plane of the line and P, drawn flat: origin A on the page, U px a unit, the line at 9° on the page. */
const K115 = { A: [150, 156] as P, u: 34, ang: 9 * DEG, t0: 2.1, d: 3.3, ends: [-1.4, 5.4] as [number, number] };
const pl = (x: number, y: number): P => [K115.A[0] + K115.u * x, K115.A[1] - K115.u * y];
const B115: P = [Math.cos(K115.ang), Math.sin(K115.ang)], N115: P = [-Math.sin(K115.ang), Math.cos(K115.ang)];
const F115: P = [K115.t0 * B115[0], K115.t0 * B115[1]];
const P115: P = [F115[0] + K115.d * N115[0], F115[1] + K115.d * N115[1]];
const Pi115: P = [2 * F115[0] - P115[0], 2 * F115[1] - P115[1]];
const fig115: Diagram = {
  id: 'm12-11-fig-11.5',
  topic: 4,
  name: 'Foot and image of a point in a line',
  cases: [{ chip: 'Foot and image', cap: CAP115 }],
  draw() {
    const s = new Sketch(W, 336);
    const [e0, e1] = K115.ends, la = pl(e0 * B115[0], e0 * B115[1]), lb = pl(e1 * B115[0], e1 * B115[1]);
    const a = pl(0, 0), f = pl(...F115), p = pl(...P115), pi = pl(...Pi115);
    arr(s, la, lb, { color: C.ink, w: 2.2, head: 9, name: 'line' });
    path(s, [f, p], { color: C.ink, w: 1.8, dash: '6 4', name: 'FP' });
    path(s, [f, pi], { color: C.slate, w: 1.6, dash: '6 4', name: 'FP′' });
    // equal-length ticks, one on each half
    const tickAt = (q: P, name: string) => { const tu: P = [B115[0], -B115[1]]; path(s, [[q[0] - tu[0] * 6, q[1] - tu[1] * 6], [q[0] + tu[0] * 6, q[1] + tu[1] * 6]], { color: C.ink, w: 1.5, name }); };
    const m1: P = [(f[0] + p[0]) / 2, (f[1] + p[1]) / 2], m2: P = [(f[0] + pi[0]) / 2, (f[1] + pi[1]) / 2];
    tickAt(m1, 'tick FP');
    tickAt(m2, 'tick FP′');
    rightMark(s, f, [B115[0], -B115[1]], [N115[0], -N115[1]], 9);
    path(s, [a, f], { color: C.mari, w: 3.2, name: 'AF' });
    pt(s, a, 'A');
    pt(s, f, 'F', C.mari);
    pt(s, p, 'P');
    pt(s, pi, 'P′', C.slate);
    lab(s, p[0] + 14, p[1] - 8, I('P'), { size: 17, anchor: 'start' });
    lab(s, pi[0] + 14, pi[1] + 6, `${I('P')}′`, { size: 17, anchor: 'start' });
    lab(s, a[0] - 18, a[1] - 18, I('A'), { size: 17 });
    lab(s, f[0] + 12, f[1] + 26, I('F'), { size: 17, anchor: 'start' });
    lab(s, lb[0] + 4, lb[1] - 12, vec('b'), { size: 17, anchor: 'end' });
    lab(s, m1[0] + 10, m1[1] + 6, I('d'), { size: 16, anchor: 'start' });
    lab(s, m2[0] + 10, m2[1] + 6, I('d'), { size: 16, anchor: 'start' });
    tripod(s, [20, 250], 30);
    runs(s, 172, 314, [{ t: `${I('F')} = ${va} + ` }, { num: `${vec('AP')} · ${vec('b')}`, den: `${vec('b')} · ${vec('b')}` }, { t: ` ${vec('b')},\u00a0\u00a0\u00a0${vec('P')}′ = 2${vec('F')} − ${vec('P')}` }], { size: 14, anchor: 'middle' });
    return s;
  },
  check() {
    const s = fig115.draw(fig115.cases[0]), out: Check[] = [];
    const AP: P = [P115[0], P115[1]], bb = B115[0] ** 2 + B115[1] ** 2, lam = (AP[0] * B115[0] + AP[1] * B115[1]) / bb;
    out.push([`F = a + (AP · b)/(b · b) b: λ₀ = ${fmt(lam, 4)}, and F stands at ${fmt(K115.t0, 4)} along b from A`, close(lam, K115.t0)]);
    const FP: P = [P115[0] - F115[0], P115[1] - F115[1]];
    out.push(['FP is at right angles to the line: FP · b = 0', close(FP[0] * B115[0] + FP[1] * B115[1], 0)]);
    const d = Math.hypot(...FP), ap = Math.hypot(...AP);
    out.push([`AP splits into AF along b and FP across it: AP² = AF² + FP², ${fmt(ap * ap, 3)} = ${fmt(K115.t0 ** 2, 3)} + ${fmt(d * d, 3)}`, close(ap * ap, K115.t0 ** 2 + d * d)]);
    out.push(['The image P′ = 2F − P: F is the midpoint of PP′, and FP′ = FP = d', close((P115[0] + Pi115[0]) / 2, F115[0]) && close((P115[1] + Pi115[1]) / 2, F115[1]) && close(Math.hypot(Pi115[0] - F115[0], Pi115[1] - F115[1]), d)]);
    out.push(['P and P′ lie on opposite sides of the line', (P115[0] * N115[0] + P115[1] * N115[1]) * (Pi115[0] * N115[0] + Pi115[1] * N115[1]) < 0]);
    const a = pl(0, 0), f = pl(...F115);
    out.push(['On the drawing: A, F, P and P′ where they are, AF along the line, the dashes from F to P and to P′ the same length on the page', near(dotNamed(s, 'A')!.p, a) && near(dotNamed(s, 'F')!.p, f) && near(dotNamed(s, 'P')!.p, pl(...P115)) && near(dotNamed(s, 'P′')!.p, pl(...Pi115)) && runsFrom(s, 'AF', a, f) && close(len2(f, pl(...P115)), len2(f, pl(...Pi115)))]);
    out.push(['The arrow of the line points along b, and A and F lie on it', (() => { const l = linesNamed(s, /^line$/)[0].pts, dir: P = [l[1][0] - l[0][0], l[1][1] - l[0][1]]; const k = Math.hypot(...dir); return close(dir[0] / k, B115[0]) && close(-dir[1] / k, B115[1]); })()]);
    out.push(marigoldOnly(s, /^(AF|dot:F)$/, 'A to F and the foot F'));
    out.push(stackedCheck(s, ['AP⃗ · b⃗/b⃗ · b⃗']));
    out.push(labelsCheck(s, ['P', 'P′', 'A', 'F', 'b⃗', 'd', 'x', 'y', 'z', 'F = a⃗ + AP⃗ · b⃗/b⃗ · b⃗ b⃗,\u00a0\u00a0\u00a0P⃗′ = 2F⃗ − P⃗']));
    out.push(noBadChars(s, fig115));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 11.6 · a plane through a line and a point (Topic 05, p. 737)   */
/* ===================================================================== */
const vb = vec('b'), vP = vec('P'), vN = vec('N');
const CAP116 = `A plane drawn as a parallelogram, containing a line with direction ${vb} through the point ${I('A')} and a separate point ${I('P')}. Two in-plane vectors are drawn from ${I('A')}: one along ${vb} and one from ${I('A')} to ${I('P')}. Their cross product ${vN} = ${vb}\u00a0×\u00a0(${vP}\u00a0−\u00a0${va}) is normal to the plane.`;
const O116: P = [178, 176], U116 = 32;
const PLANE116: [number, number, number, number] = [-2.2, 2.8, -3.6, 5.0];
const B116: V = [1, 0, 0], P116: V = [1.0, 2.6, 0];
const N116 = cross(B116, sub3(P116, [0, 0, 0]));
const LINE116: [number, number] = [-1.6, 1.6];
const fig116: Diagram = {
  id: 'm12-11-fig-11.6',
  topic: 5,
  name: 'A plane through a line and a point',
  cases: [{ chip: 'Line and a point', cap: CAP116 }],
  draw() {
    const s = new Sketch(W, 262), o = O116, u = U116, P3 = (v: V) => pj(o, u, v);
    path(s, corners(PLANE116).map(P3), { color: C.slate, w: 1.2, name: 'plane' });
    const a = P3([0, 0, 0]), p = P3(P116), nt = P3(N116);
    arr(s, P3(mul3(B116, LINE116[0])), P3(mul3(B116, LINE116[1])), { color: C.ink, w: 2.2, head: 9, name: 'line b' });
    rightMark3(s, o, u, [0, 0, 0], P116, N116, 0.26);
    arr(s, a, nt, { color: C.ink, w: 2.2, head: 9, name: 'N' });
    path(s, [a, p], { color: C.mari, w: 2.8, name: 'P − a' });
    pt(s, a, 'A');
    pt(s, p, 'P');
    const be = P3(mul3(B116, LINE116[1]));
    lab(s, nt[0] + 2, nt[1] - 10, vN, { size: 16 });
    lab(s, p[0] + 9, p[1] + 4, I('P'), { size: 16, anchor: 'start' });
    lab(s, a[0] - 8, a[1] + 18, I('A'), { size: 16, anchor: 'end' });
    lab(s, be[0] - 10, be[1] + 19, vb, { size: 16, anchor: 'end' });
    lab(s, a[0] + 6, a[1] - 23.8, `${vP} − ${va}`, { size: 13, anchor: 'start', color: C.amber });
    tripod(s, [12, 246], 28);
    lab(s, 334, 252, `${vN} = ${vb} × (${vP} − ${va})`, { size: 15, anchor: 'end' });
    return s;
  },
  check() {
    const s = fig116.draw(fig116.cases[0]), out: Check[] = [], P3 = (v: V) => pj(O116, U116, v);
    out.push(frameCheck());
    out.push(['The line through A along b and the point P lie in the plane z = 0, inside the drawn parallelogram', B116[2] === 0 && P116[2] === 0 && P116[0] < PLANE116[1] && P116[1] < PLANE116[3] && LINE116[0] > PLANE116[0] && LINE116[1] < PLANE116[1]]);
    out.push(['P is off the line: b × (P − a) ≠ 0', len3(N116) > 0.5]);
    out.push([`N = b × (P − a) = (${N116.map((v) => fmt(v)).join(', ')}): at right angles to b and to P − a, so normal to the plane`, close(dot3(N116, B116), 0) && close(dot3(N116, P116), 0) && close(N116[0], 0) && close(N116[1], 0) && N116[2] > 0]);
    out.push(['On the drawing: N is drawn from A to A + N (its true length), P − a from A to P, the line through A along b', near(linesNamed(s, /^N$/)[0].pts[1], P3(N116)) && near(linesNamed(s, /^N$/)[0].pts[0], P3([0, 0, 0])) && runsFrom(s, 'P − a', P3([0, 0, 0]), P3(P116)) && near(linesNamed(s, /^line b$/)[0].pts[1], P3(mul3(B116, LINE116[1])))]);
    out.push(marigoldOnly(s, /^P − a$/, 'P − a'));
    out.push(labelsCheck(s, ['N⃗', 'P', 'A', 'b⃗', 'P⃗ − a⃗', 'x', 'y', 'z', 'N⃗ = b⃗ × (P⃗ − a⃗)']));
    out.push(noBadChars(s, fig116));
    out.push(...layout(s));
    return out;
  },
};

/** Mathematics 12 Chapter 11, Three Dimensional Geometry: the book's figures. */
export const DIAGRAMS_MATHEMATICS_12_11: Diagram[] = [fig111, fig112, fig113, fig114, fig115, fig116];
