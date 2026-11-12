import { C, F, LABEL_GAP, Rect, Sketch, TAG_SIZE, mathW, r1, tagW } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * CHEMISTRY CLASS 12, CHAPTER 3 (Chemical Kinetics): every drawing of the Master
 * Reference book on pp. 101–146, redrawn. Every page's vector shapes were counted (only
 * the three figure pages hold a curve or a slanted line), and the four busiest other
 * pages looked at. The chapter has THREE drawings, all numbered, each on a "CHAPTER 3 ·
 * FIGURES" page, each caption printed a first time a page earlier with "(see next page)";
 * the captions here are the figure pages' own, which carry no pointer (3.1's corrected for sign):
 *
 *   Figure 3.1 (p. 106; caption first on p. 105) — Topic 01, topic index 0.
 *   Figure 3.2 (p. 114; caption first on p. 113) — Topic 02, index 1.
 *   Figure 3.3 (p. 131; caption first on p. 130) — Topic 04, index 3.
 *
 * Judged NOT drawings: every table (initial-rate data, the order tables), boxed answers,
 * typeset equations and the rules between sections. Topic 03 and Additional topics A–E
 * hold no figure; p. 133 asks the student to "sketch (describe)" a profile but prints none.
 *
 * No axis in the three figures carries a number: all are schematic, as in the book.
 * Everything is computed, never placed by eye:
 *   3.1 — [A] = [A]₀ exp(−kt), which follows the book's curve (p. 106) to within 3.4%
 *     of its height. The secant joins the curve's own points at t₁ and t₂; the tangent has
 *     the true slope −k[A] at t. The book's labels and caption call each rate "slope"; here
 *     they carry the sign (the rate of a reactant is −slope), corrected at expert review.
 *   3.2 — zero order: [R] = [R]₀ − kt. First order: log([R]₀/[R]) computed from
 *     [R] = [R]₀ exp(−kt), so the line, its origin and its slope k/ln 10 ≈ k/2.303 follow.
 *   3.3 — the book's own levels and peak position, read from the figure's path data on
 *     p. 131 (products 0, reactants 52, peak 126, catalysed peak 88). Each hump is two
 *     half-cosines, level at both ends and at its peak, so the top is exactly the level.
 */

const W = 340;
type P = [number, number];
const close = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) < tol;
const fmt = (n: number, d = 2) => String(+n.toFixed(d)).replace('-', '−');
const len = (a: P, b: P) => Math.hypot(b[0] - a[0], b[1] - a[1]);
const plain = (html: string) => html.replace(/<[^>]+>/g, '');
const samples = (a: number, b: number, n = 400) => Array.from({ length: n + 1 }, (_, i) => a + ((b - a) * i) / n);

/* ---------- drawing helpers (as in chemistry-12-01.ts and -02.ts) ---------- */
type Stroke = { color?: string; w?: number; dash?: boolean; free?: boolean; name?: string };
/** Every line a label must keep clear of, by sketch, with its name so a check can read it back. */
const LINES = new WeakMap<Sketch, { name: string; pts: P[] }[]>();
const keep = (s: Sketch, pts: P[], name = '') => { const l = LINES.get(s) ?? []; l.push({ name, pts }); LINES.set(s, l); };
const lineOf = (s: Sketch, name: string) => LINES.get(s)!.find((l) => l.name === name)!.pts;
function path(s: Sketch, pts: P[], o: Stroke = {}) {
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ');
  s.add(`<path d="${d}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}" stroke-linejoin="round" stroke-linecap="round"${o.dash ? ' stroke-dasharray="5 4"' : ''}/>`);
  if (!o.free) keep(s, pts, o.name);
}
function arrow(s: Sketch, a: P, b: P, o: Stroke = {}) {
  s.vec(a[0], a[1], b[0], b[1], { color: o.color, w: o.w, dash: o.dash });
  if (!o.free) keep(s, [a, b], o.name);
}
/** A span: arrows out from its middle to both ends. */
function span(s: Sketch, a: P, b: P, o: Stroke = {}) {
  const m: P = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
  s.vec(m[0], m[1], a[0], a[1], { color: o.color, w: o.w });
  s.vec(m[0], m[1], b[0], b[1], { color: o.color, w: o.w });
  keep(s, [a, b], o.name);
}
const rectDist = (r: Rect, p: P) => Math.hypot(Math.max(r[0] - p[0], 0, p[0] - r[2]), Math.max(r[1] - p[1], 0, p[1] - r[3]));
function clearance(s: Sketch): { gap: number; what: string } {
  let gap = Infinity, what = '';
  const boxes: [string, Rect][] = [...s.tags.map((t): [string, Rect] => [t.name, t.rect]), ...s.labels.map((l): [string, Rect] => [l.text, l.rect])];
  for (const { pts } of LINES.get(s) ?? []) {
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
const clearCheck = (s: Sketch): Check => {
  const { gap, what } = clearance(s);
  return [`Every tag and label stays at least ${LABEL_GAP} px clear of every line: the closest is "${what}", ${fmt(gap, 1)} px`, gap >= LABEL_GAP - 1e-9];
};
const labelsApart = (s: Sketch): Check => {
  const L = s.labels;
  const bad = L.flatMap((a, i) => L.slice(i + 1).filter((b) => !(a.rect[2] + 2 <= b.rect[0] || b.rect[2] + 2 <= a.rect[0] || a.rect[3] + 2 <= b.rect[1] || b.rect[3] + 2 <= a.rect[1])).map((b) => `${a.text} / ${b.text}`));
  return [`No two symbols or labels on the drawing touch${bad.length ? `: ${bad.join(', ')}` : ''}`, bad.length === 0];
};
const inFrame = (s: Sketch): Check => {
  const out = s.labels.filter((l) => l.rect[0] < 0 || l.rect[2] > s.w || l.rect[1] < 0 || l.rect[3] > s.h).map((l) => l.text);
  return [`Every label lies inside the frame${out.length ? `: not ${out.join(', ')}` : ''}`, out.length === 0];
};
const layout = (s: Sketch): Check[] => [clearCheck(s), labelsApart(s), inFrame(s)];
const hasLabel = (s: Sketch, t: string) => s.labels.some((l) => l.text === t);
const hasTag = (s: Sketch, t: string) => s.tags.some((x) => x.name === t);

/** A tag that needs maths, all in STIX (Android: one font inside one tag). One line or two. */
function mtag(s: Sketch, x: number, y: number, lines: string[], p: P, o: { hi?: boolean; size?: number } = {}): Rect {
  const size = o.size ?? 13, hi = !!o.hi, lh = size + 4;
  const w = Math.max(...lines.map((t) => Math.max(mathW(t, size), plain(t).length * size * 0.5))) + 18, h = lines.length === 1 ? 22 : lines.length * lh + 6;
  const rect: Rect = [x, y, x + w, y + h];
  const to: P = [Math.max(x + 8, Math.min(x + w - 8, p[0])), p[1] < y ? y : y + h];
  s.add(`<line x1="${r1(p[0])}" y1="${r1(p[1])}" x2="${r1(to[0])}" y2="${r1(to[1])}" stroke="${hi ? C.mari : C.grey}" stroke-width="1.2"/><circle cx="${r1(p[0])}" cy="${r1(p[1])}" r="2.6" fill="${hi ? C.mari : C.ink}"/>`);
  s.tags.push({ name: plain(lines.join(' ')), rect, from: p, to });
  s.add(`<rect x="${r1(x)}" y="${y}" width="${r1(w)}" height="${h}" rx="11" fill="#fff" stroke="${hi ? C.mari : C.border}" stroke-width="${hi ? 1.5 : 1}"/>`);
  lines.forEach((t, i) => s.text(x + w / 2, y + (lines.length === 1 ? 15.5 : 3 + lh * i + lh * 0.72), t, { size, color: hi ? C.amber : C.text }));
  return rect;
}
/** A tag of two lines, Onest only, leader and all, audited like any other. */
function pill(s: Sketch, x: number, y: number, lines: string[], p: P): Rect {
  const lh = 15, w = Math.max(...lines.map(tagW)), h = lines.length * lh + 7, rect: Rect = [x, y, x + w, y + h];
  const to: P = [Math.max(x + 8, Math.min(x + w - 8, p[0])), p[1] < y ? y : y + h];
  s.add(`<line x1="${r1(p[0])}" y1="${r1(p[1])}" x2="${r1(to[0])}" y2="${r1(to[1])}" stroke="${C.grey}" stroke-width="1.2"/><circle cx="${r1(p[0])}" cy="${r1(p[1])}" r="2.6" fill="${C.ink}"/>`);
  s.add(`<rect x="${r1(x)}" y="${y}" width="${r1(w)}" height="${h}" rx="11" fill="#fff" stroke="${C.border}" stroke-width="1"/>`);
  lines.forEach((t, i) => s.add(`<text x="${r1(x + w / 2)}" y="${r1(y + 15 + lh * i)}" text-anchor="middle" font-family="${F.tag}" font-size="${TAG_SIZE}" fill="${C.text}">${t}</text>`));
  s.tags.push({ name: lines.join(' '), rect, from: p, to });
  return rect;
}

/* ---------- graphs ---------- */
type Frame = { ox: number; oy: number; sx: number; sy: number };
const X = (f: Frame, u: number) => f.ox + u * f.sx;
const Y = (f: Frame, v: number) => f.oy - v * f.sy;
const at = (f: Frame, u: number, v: number): P => [X(f, u), Y(f, v)];
const uOf = (f: Frame, x: number) => (x - f.ox) / f.sx;
const vOf = (f: Frame, y: number) => (f.oy - y) / f.sy;
function curve(s: Sketch, f: Frame, fn: (u: number) => number, u0: number, u1: number, o: Stroke = {}): P[] {
  const pts = samples(u0, u1, 300).map((u) => at(f, u, fn(u)));
  path(s, pts, o);
  return pts;
}
const AXIS = C.slate;

/* ===================================================================== */
/* Figure 3.1 · average and instantaneous rate (Topic 01, p. 106)          */
/* ===================================================================== */
const CAP31 = 'A concentration-time curve for a reactant: both slopes are negative, so the average rate is minus the secant slope and the instantaneous rate minus the tangent slope (for a coefficient of 1).';
/**
 * Schematic units: [A]₀ = 1, the time axis 0–10. k = 0.29 follows the book's curve; t₁, t₂
 * and t keep the book's order, with t further from t₂ than printed (7.11 there) so the
 * secant and the tangent can each be seen on a phone.
 */
const K31 = 0.29, T31 = { t1: 1.9, t2: 5.2, t: 7.4 };
const A31 = (t: number) => Math.exp(-K31 * t);
const SEC31 = (A31(T31.t2) - A31(T31.t1)) / (T31.t2 - T31.t1);
const TAN31 = -K31 * A31(T31.t);
const secant31 = (t: number) => A31(T31.t1) + SEC31 * (t - T31.t1);
const tangent31 = (t: number) => A31(T31.t) + TAN31 * (t - T31.t);
const F31: Frame = { ox: 34, oy: 276, sx: 28.6, sy: 216 };
const fig31: Diagram = {
  id: 'c12-03-fig-3.1',
  topic: 0,
  name: 'Average and instantaneous rate',
  cases: [{ chip: 'Reactant curve', cap: CAP31 }],
  draw() {
    const s = new Sketch(W, 310), f = F31, { t1, t2, t } = T31;
    path(s, [[f.ox, Y(f, 1.12)], [f.ox, f.oy], [X(f, 10), f.oy]], { color: AXIS, w: 1.3 });
    s.sym(14, 18, '[A] (mol L<sup>−1</sup>)', { size: 14, anchor: 'start' });
    s.sym(X(f, 10), f.oy + 20, 'time (s)', { size: 14, anchor: 'end' });
    s.sym(f.ox + 12, Y(f, 1) + 2, '[A]<sub>0</sub>', { size: 15, anchor: 'start' });
    const guide = (u: number, html: string, name: string) => {
      path(s, [[X(f, u), f.oy], at(f, u, A31(u))], { color: C.slate, w: 1.1, dash: true, name });
      s.sym(X(f, u), f.oy + 20, html, { size: 15 });
    };
    guide(t1, '<i>t</i><sub>1</sub>', 'g1');
    guide(t2, '<i>t</i><sub>2</sub>', 'g2');
    guide(t, '<i>t</i>', 'g');
    curve(s, f, A31, 0, 9.6, { w: 2.4, name: 'curve' });
    // the secant runs a little past both its points; the tangent starts after the secant ends, so the two never tangle
    path(s, [at(f, t1 - 0.6, secant31(t1 - 0.6)), at(f, t2 + 0.6, secant31(t2 + 0.6))], { color: C.slate, w: 2, name: 'secant' });
    path(s, [at(f, t - 1.5, tangent31(t - 1.5)), at(f, t + 1.9, tangent31(t + 1.9))], { color: C.mari, w: 2.8, name: 'tangent' });
    s.dot(X(f, t1), Y(f, A31(t1)), 3.4, C.slate);
    s.dot(X(f, t2), Y(f, A31(t2)), 3.4, C.slate);
    s.dot(X(f, t), Y(f, A31(t)), 4, C.mari);
    const tS = 3.6;
    mtag(s, 150, 62, ['average rate =', '−slope of secant'], at(f, tS, secant31(tS)));
    mtag(s, 176, 134, ['instantaneous rate =', '−slope of tangent at <i>t</i>'], at(f, t, A31(t)), { hi: true });
    return s;
  },
  check() {
    const s = fig31.draw(fig31.cases[0]), f = F31, { t1, t2, t } = T31, out: Check[] = [];
    const read = (n: string) => lineOf(s, n).map(([x, y]): P => [uOf(f, x), vOf(f, y)]);
    const c = read('curve'), sec = read('secant'), tan = read('tangent');
    out.push(['The curve, read back, is [A]₀ exp(−kt): it starts at [A]₀ and falls more and more slowly (a reactant used up)', close(c[0][1], 1) && c.every(([u, v]) => close(v, A31(u), 1e-9)) && c.slice(2).every(([, v], i) => v < c[i + 1][1] && c[i + 1][1] - v < c[i][1] - c[i + 1][1])]);
    // the book's curve from its path data on p. 106, as a fraction of its start height, at a fraction of its axis
    const book: P[] = [[37.53 / 29.18, 123.66 / 184.17], [79.76 / 29.18, 80.38 / 184.17], [128.55 / 29.18, 50.52 / 184.17], [192.36 / 29.18, 29.79 / 184.17], [280.56 / 29.18, 17.5 / 184.17]];
    const worst = Math.max(...book.map(([u, v]) => Math.abs(A31(u) - v)));
    out.push([`It follows the book's curve (p. 106): at five points, at worst ${fmt(worst * 100, 1)}% of its height off`, worst < 0.035]);
    const line = (q: P[], u: number) => q[0][1] + ((q[1][1] - q[0][1]) * (u - q[0][0])) / (q[1][0] - q[0][0]);
    out.push(['The secant, read back, passes through the curve at t₁ and at t₂', close(line(sec, t1), A31(t1), 1e-9) && close(line(sec, t2), A31(t2), 1e-9)]);
    const mSec = (sec[1][1] - sec[0][1]) / (sec[1][0] - sec[0][0]), mTan = (tan[1][1] - tan[0][1]) / (tan[1][0] - tan[0][0]);
    out.push([`Its slope is Δ[A]/Δt = ${fmt(mSec, 4)}, negative: for this reactant the average rate is −Δ[A]/Δt = ${fmt(-mSec, 4)}, the size of the slope`, close(mSec, (A31(t2) - A31(t1)) / (t2 - t1), 1e-9) && mSec < 0]);
    const h = 1e-5;
    out.push([`The tangent, read back, touches the curve at t with d[A]/dt = −k[A] = ${fmt(mTan, 4)}, the limit of a shrinking secant; the instantaneous rate is −d[A]/dt = ${fmt(-mTan, 4)}`, close(line(tan, t), A31(t), 1e-9) && close(mTan, (A31(t + h) - A31(t - h)) / (2 * h), 1e-7) && mTan < 0]);
    out.push(['It only touches: the curve stays above the tangent all along its length, and below the secant between t₁ and t₂', samples(tan[0][0], tan[1][0]).every((u) => Math.abs(u - t) < 1e-9 || A31(u) > line(tan, u)) && samples(t1, t2).slice(1, -1).every((u) => A31(u) < line(sec, u))]);
    out.push(['The secant ends before the tangent starts, so they do not cross', sec[1][0] < tan[0][0]]);
    out.push(['Order along the axis as printed, t₁ < t₂ < t, and each guide rises from its own label to the curve', t1 < t2 && t2 < t && [['g1', t1], ['g2', t2], ['g', t]].every(([n, u]) => { const g = read(n as string); return close(g[0][0], u as number) && close(g[0][1], 0) && close(g[1][1], A31(u as number)); })]);
    out.push(['Each tag names its own line: the first ends on the secant, the marigold one on the point of contact at t', s.tags.some((g) => g.name === 'average rate = −slope of secant' && close(line(sec, uOf(f, g.from![0])), vOf(f, g.from![1]), 1e-9)) && s.tags.some((g) => g.name === 'instantaneous rate = −slope of tangent at t' && close(uOf(f, g.from![0]), t) && close(vOf(f, g.from![1]), A31(t), 1e-9))]);
    out.push(['The labels as printed: [A] (mol L⁻¹), [A]₀, time (s), t₁, t₂, t', ['[A] (mol L−1)', '[A]0', 'time (s)', 't1', 't2', 't'].every((n) => hasLabel(s, n))]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 3.2 · the two straight-line plots (Topic 02, p. 114)             */
/* ===================================================================== */
const CAP32A = 'Zero order: [R] vs <i>t</i> is linear with slope = −<i>k</i>.';
const CAP32B = 'First order: log([R]<sub>0</sub>/[R]) vs <i>t</i> is linear through the origin with slope = <i>k</i>/2.303.';
/** Schematic units: the time axis 0–10. Zero order: [R]₀ = 1, k = 0.125, so the line meets the axis at 8, about where the book's does. First order: k = 0.5. */
const Z32 = { R0: 1, k: 0.125 }, K32 = 0.5, END32 = 8.6;
const zero32 = (t: number) => Z32.R0 - Z32.k * t;
/** log₁₀([R]₀/[R]), from the decay itself, not from the answer. */
const first32 = (t: number) => Math.log10(1 / Math.exp(-K32 * t));
const FZ32: Frame = { ox: 44, oy: 276, sx: 27.4, sy: 192 };
const FF32: Frame = { ox: 44, oy: 276, sx: 27.4, sy: 104 };
const axes32 = (s: Sketch, f: Frame, head: string, yName: string) => {
  s.sym(W / 2, 16, head, { size: 15 });
  s.sym(14, 40, yName, { size: 14, anchor: 'start' });
  path(s, [[f.ox, 50], [f.ox, f.oy], [X(f, 10), f.oy]], { color: AXIS, w: 1.3 });
  s.sym(X(f, 5), f.oy + 22, 'time', { size: 14 });
};
const fig32: Diagram = {
  id: 'c12-03-fig-3.2',
  topic: 1,
  name: 'Zero-order and first-order plots',
  cases: [
    { chip: 'Zero order', cap: CAP32A, order: 0 },
    { chip: 'First order', cap: CAP32B, order: 1 },
  ],
  draw(c) {
    const s = new Sketch(W, 308);
    if (c.order === 0) {
      const f = FZ32, tEnd = Z32.R0 / Z32.k;
      axes32(s, f, 'zero order', '[R]');
      curve(s, f, zero32, 0, tEnd, { color: C.mari, w: 2.8, name: 'line' });
      s.dot(X(f, 0), Y(f, Z32.R0), 4);
      s.dot(X(f, tEnd), f.oy, 4);
      s.sym(f.ox + 10, Y(f, Z32.R0) - 6, '[R]<sub>0</sub>', { size: 15, anchor: 'start' });
      s.sym(X(f, 4.9), Y(f, zero32(4.9)) - 12, 'slope = −<i>k</i>', { size: 15, anchor: 'start', color: C.amber });
      s.sym(X(f, tEnd), f.oy + 22, '<i>t</i> = [R]<sub>0</sub>/<i>k</i>', { size: 14 });
    } else {
      const f = FF32;
      axes32(s, f, 'first order', 'log([R]<sub>0</sub>/[R])');
      curve(s, f, first32, 0, END32, { color: C.mari, w: 2.8, name: 'line' });
      s.dot(f.ox, f.oy, 4);
      s.sym(X(f, 4.9), Y(f, first32(4.9)) + 24, 'slope = <i>k</i>/2.303', { size: 15, anchor: 'start', color: C.amber });
    }
    return s;
  },
  check(c) {
    const s = fig32.draw(c), out: Check[] = [];
    if (c.order === 0) {
      const f = FZ32, q = lineOf(s, 'line').map(([x, y]): P => [uOf(f, x), vOf(f, y)]), tEnd = Z32.R0 / Z32.k;
      out.push([`Read back, every point of the line is [R] = [R]₀ − kt, so it is straight with slope −k = −${Z32.k}`, q.every(([t, v]) => close(v, Z32.R0 - Z32.k * t, 1e-9)) && close((q[q.length - 1][1] - q[0][1]) / (q[q.length - 1][0] - q[0][0]), -Z32.k, 1e-9)]);
      out.push([`It starts at [R]₀ on the vertical axis and reaches zero at t = [R]₀/k = ${fmt(tEnd)} (a zero-order reactant runs out; the line stops there, it does not go below the axis)`, close(q[0][0], 0) && close(q[0][1], Z32.R0) && close(q[q.length - 1][0], tEnd) && close(q[q.length - 1][1], 0, 1e-9)]);
      out.push(['Each dot sits on an intercept: [R]₀ at t = 0, and [R] = 0 at the last point', s.points.some((p) => close(p.x, FZ32.ox) && close(vOf(f, p.y), Z32.R0)) && s.points.some((p) => close(uOf(f, p.x), tEnd) && close(p.y, f.oy))]);
      const lx = s.labels.find((a) => a.text === 't = [R]0/k')!;
      out.push(['The label t = [R]₀/k stands under its own dot', close((lx.rect[0] + lx.rect[2]) / 2, X(f, tEnd))]);
      out.push(['The labels as printed: zero order, [R], [R]₀, time, slope = −k, t = [R]₀/k', ['zero order', '[R]', '[R]0', 'time', 'slope = −k', 't = [R]0/k'].every((n) => hasLabel(s, n))]);
    } else {
      const f = FF32, q = lineOf(s, 'line').map(([x, y]): P => [uOf(f, x), vOf(f, y)]);
      const m = (q[q.length - 1][1] - q[0][1]) / (q[q.length - 1][0] - q[0][0]);
      out.push(['Computed from the decay [R] = [R]₀ exp(−kt) itself, the plot read back goes through the origin: at t = 0, [R] = [R]₀ and log 1 = 0', close(q[0][0], 0) && close(q[0][1], 0, 1e-9) && s.points.some((p) => close(p.x, f.ox) && close(p.y, f.oy))]);
      out.push([`It is straight, rising, with slope ${fmt(m, 4)} = k/ln 10 for k = ${K32}, which is the printed k/2.303 (${fmt(K32 / 2.303, 4)}) to within 0.02%`, q.every(([t, v]) => close(v, m * t, 1e-9)) && m > 0 && Math.abs(m / (K32 / 2.303) - 1) < 2e-4]);
      out.push(['The labels as printed: first order, log([R]₀/[R]), time, slope = k/2.303', ['first order', 'log([R]0/[R])', 'time', 'slope = k/2.303'].every((n) => hasLabel(s, n))]);
    }
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 3.3 · the reaction energy profile (Topic 04, p. 131)             */
/* ===================================================================== */
const CAP33 = 'A reaction energy profile (exothermic, Δ<i>H</i> < 0): forward and reverse activation energies, Δ<i>H</i>, and the lower-humped catalysed path.';
/** The book's levels (p. 131) above the products, rounded: 52.3, 126.2, 87.7; its peak at 0.456 of the way along. */
const E33 = { P: 0, R: 52, TS: 126, cat: 88, xp: 0.456 };
/** One hump: level at its start, its peak and its end, so the top is exactly `peak`. */
const hump = (peak: number) => (u: number) => (u <= E33.xp
  ? E33.R + ((peak - E33.R) * (1 - Math.cos((Math.PI * u) / E33.xp))) / 2
  : peak - ((peak - E33.P) * (1 - Math.cos((Math.PI * (u - E33.xp)) / (1 - E33.xp)))) / 2);
const profile33 = hump(E33.TS), catalysed33 = hump(E33.cat);
const F33: Frame = { ox: 46, oy: 265, sx: 270, sy: 1.5 };
const fig33: Diagram = {
  id: 'c12-03-fig-3.3',
  topic: 3,
  name: 'Reaction energy profile',
  cases: [{ chip: 'Exothermic', cap: CAP33 }],
  draw() {
    const s = new Sketch(W, 338), f = F33, e = E33;
    const yAxisX = 22, xAxisY = 311, yR = Y(f, e.R), yP = Y(f, e.P), yT = Y(f, e.TS);
    arrow(s, [yAxisX, xAxisY], [yAxisX, 28], { color: AXIS, w: 1.3 });
    arrow(s, [yAxisX, xAxisY], [334, xAxisY], { color: AXIS, w: 1.3 });
    s.sym(14, 18, 'potential energy', { size: 14, anchor: 'start' });
    s.sym(334, xAxisY + 20, 'reaction coordinate', { size: 14, anchor: 'end' });
    // the three levels
    ([['levelT', yT], ['levelR', yR], ['levelP', yP]] as [string, number][]).forEach(([name, y]) => path(s, [[30, y], [334, y]], { color: C.grey, w: 1.1, dash: true, name }));
    // the two paths
    curve(s, f, catalysed33, 0, 1, { color: C.slate, w: 2, dash: true, name: 'catalysed' });
    curve(s, f, profile33, 0, 1, { w: 2.4, name: 'profile' });
    // the three measures
    const xF = 38, xR = 326, xH = 112;
    span(s, [xF, yT], [xF, yR], { color: C.mari, w: 2, name: 'Ef' });
    span(s, [xR, yT], [xR, yP], { w: 1.7, name: 'Er' });
    arrow(s, [xH, yR], [xH, yP], { w: 1.7, name: 'dH' });
    s.sym(xF + 9, yT + 22, '<i>E</i><sub>a</sub>', { size: 15, anchor: 'start', color: C.amber });
    s.sym(xF + 9, yT + 40, '(forward)', { size: 14, anchor: 'start', color: C.amber });
    s.sym(xR - 9, yT + 50, '<i>E</i><sub>a</sub>', { size: 15, anchor: 'end' });
    s.sym(xR - 9, yT + 68, '(reverse)', { size: 14, anchor: 'end' });
    s.sym(xH + 10, (yR + yP) / 2 + 18, 'Δ<i>H</i> < 0', { size: 15, anchor: 'start' });
    // the names
    const uC = 0.6;
    pill(s, 100, 28, ['activated complex', '(transition state)'], at(f, e.xp, e.TS));
    s.tag(118, yR + 5, 'catalysed path', X(f, uC), Y(f, catalysed33(uC)));
    s.tag(26, yR + 6, 'reactants', X(f, 0), yR);
    s.tag(238, yP + 7, 'products', X(f, 1), yP);
    return s;
  },
  check() {
    const s = fig33.draw(fig33.cases[0]), f = F33, e = E33, out: Check[] = [];
    const read = (n: string) => lineOf(s, n).map(([x, y]): P => [uOf(f, x), vOf(f, y)]);
    const p = read('profile'), q = read('catalysed');
    const ends = (c: P[]) => close(c[0][1], e.R, 1e-9) && close(c[c.length - 1][1], e.P, 1e-9);
    out.push([`Both paths, read back, start at the reactants (${e.R}) and end at the products (${e.P}): the catalyst leaves both levels where they were`, ends(p) && ends(q)]);
    const top = p.reduce((m, a) => (a[1] > m[1] ? a : m), p[0]), topC = q.reduce((m, a) => (a[1] > m[1] ? a : m), q[0]);
    out.push([`The top of the profile, by search, is the activated complex's level, ${e.TS}, and the tag's dot sits on it`, Math.abs(top[1] - e.TS) < 0.01 && s.tags.some((g) => g.name === 'activated complex (transition state)' && close(g.from![0], X(f, e.xp)) && close(g.from![1], Y(f, e.TS)))]);
    const lev = (n: string) => vOf(f, lineOf(s, n)[0][1]);
    out.push(['The three dashed levels are the reactants, the products and the activated complex', close(lev('levelR'), e.R) && close(lev('levelP'), e.P) && close(lev('levelT'), e.TS)]);
    const spanOf = (n: string) => { const g = lineOf(s, n); return [vOf(f, g[0][1]), vOf(f, g[1][1])]; };
    const [fTop, fBot] = spanOf('Ef'), [rTop, rBot] = spanOf('Er'), [hFrom, hTo] = spanOf('dH');
    const Ef = fTop - fBot, Er = rTop - rBot, dH = hTo - hFrom;
    out.push([`E_a(forward) is measured from the reactants up to the peak: ${fmt(Ef)}; E_a(reverse) from the products up to it: ${fmt(Er)}`, close(fBot, e.R) && close(fTop, e.TS) && close(rBot, e.P) && close(rTop, e.TS)]);
    out.push([`ΔH runs from the reactants down to the products, ${fmt(dH)} < 0, and equals E_a(forward) − E_a(reverse) = ${fmt(Ef - Er)} (p. 130); E_a(forward) < E_a(reverse), so exothermic`, close(hFrom, e.R) && close(hTo, e.P) && close(dH, Ef - Er) && dH < 0 && Ef < Er]);
    out.push([`Threshold energy (p. 130): the peak's level is E_a(forward) + the reactants' energy, ${fmt(Ef)} + ${e.R} = ${e.TS}`, close(Ef + e.R, e.TS)]);
    const inner = samples(0, 1, 400).slice(1, -1);
    out.push(['The catalysed path lies below the other at every point between the ends, a lower hump on the same diagram', inner.every((u) => catalysed33(u) < profile33(u))]);
    const cutF = e.TS - e.R - (e.cat - e.R), cutR = e.TS - e.P - (e.cat - e.P);
    out.push([`The catalyst cuts E_a in both directions by the same ${fmt(cutF)} (top ${fmt(topC[1])}), so ΔH is unchanged: ${fmt(e.cat - e.R)} − ${fmt(e.cat - e.P)} = ${fmt(e.cat - e.R - (e.cat - e.P))}`, close(cutF, cutR) && Math.abs(topC[1] - e.cat) < 0.01 && close(e.cat - e.R - (e.cat - e.P), dH)]);
    const eps = 1e-7, slope = (fn: (u: number) => number, u: number) => (fn(u + eps) - fn(u - eps)) / (2 * eps);
    out.push(['Each hump is level at its top, and the path starts and ends level, with no corner', [profile33, catalysed33].every((fn) => Math.abs(slope(fn, e.xp)) < 1e-3 && Math.abs(slope(fn, eps)) < 1e-3 && Math.abs(slope(fn, 1 - eps)) < 1e-3)]);
    out.push([`The book's proportions (p. 131, path data: 73.9 and 126.2): E_a(forward)/E_a(reverse) = ${fmt(Ef / Er, 3)}, printed 0.585`, Math.abs(Ef / Er - 73.86 / 126.19) < 0.01]);
    out.push(['Each name\'s dot lies on its own path: catalysed path on the dashed one, reactants and products on the ends', s.tags.some((g) => g.name === 'catalysed path' && close(vOf(f, g.from![1]), catalysed33(uOf(f, g.from![0])), 1e-9)) && s.tags.some((g) => g.name === 'reactants' && close(g.from![0], X(f, 0)) && close(g.from![1], Y(f, e.R))) && s.tags.some((g) => g.name === 'products' && close(g.from![0], X(f, 1)) && close(g.from![1], Y(f, e.P)))]);
    out.push(['The labels as printed: potential energy, reaction coordinate, E_a (forward), E_a (reverse), ΔH < 0, and the four names', ['potential energy', 'reaction coordinate', 'Ea', '(forward)', '(reverse)', 'ΔH < 0'].every((n) => hasLabel(s, n)) && ['activated complex (transition state)', 'catalysed path', 'reactants', 'products'].every((n) => hasTag(s, n))]);
    out.push(...layout(s));
    return out;
  },
};

export const DIAGRAMS_CHEMISTRY_12_03: Diagram[] = [fig31, fig32, fig33];
