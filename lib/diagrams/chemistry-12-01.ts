import { C, F, LABEL_GAP, Rect, Sketch, mathW, r1, tagW, TAG_SIZE } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * CHEMISTRY CLASS 12, CHAPTER 1 (Solutions): every drawing of the Master
 * Reference book on pp. 7–57, redrawn. Every page was looked at (and its vector
 * paths counted). The chapter has SEVEN drawings:
 *
 *   Figure 1.1 (p. 22; caption first on p. 21) — Topic 03, index 2.
 *   Figure 1.2 (p. 24; caption first on p. 23) — Topic 03, index 2.
 *   Figures 1.3, 1.4 (p. 31; captions first on p. 30) — Topic 04, index 3.
 *   Figures 1.5, 1.6 (p. 40; captions first on p. 39) — Topic 05, index 4.
 *   "Figure 1" of Addendum C, the azeotrope diagram (p. 49) — Additional topic
 *     C, index 7. Its number is the addendum's own: id c12-01-C-d1.
 *
 * Judged NOT drawings: every table (the nine types of solution p. 9, the
 * quantity tables, the solvent table p. 47, the distribution table p. 54),
 * the typeset equations and fractions, and the boxed answers ("S < R < Q < P"
 * p. 23, the CaCl₂ ranking p. 38).
 *
 * Everything is computed, never placed by eye:
 *   1.1 — a SEALED cylinder: particles are counted and conserved, the gas's
 *     density (so its pressure) doubles, the dissolved count doubles (Henry), and
 *     the piston's height follows from those: V′/V = N′/(2N).
 *   1.2 — p = K x, the book's two slopes (1.6 and 3.0, read from the page).
 *   1.3 — Raoult's law, the total is the sum of the two lines.
 *   1.4 — p_A = x_A p°_A exp(A x_B²), p_B = x_B p°_B exp(A x_A²) (the one-constant
 *     Margules form, which obeys Gibbs–Duhem and Raoult's limit at both ends);
 *     A = ±1.5. The total is the sum, its extremum found by search.
 *   1.5 — the liquid's curve is p = exp(b(t − t_b)), the solution's is x times it
 *     (Raoult), the solid's is p_tp exp(c(t − t_f)) with c > b. T_b, T_f come from
 *     where those curves meet 1 atm and each other. Schematic scale, as the book's.
 *   1.6 — levels and solute particles; h is the difference of the drawn levels.
 *   C   — the book's own curve shape: two parabolas meeting at the minimum
 *     (they reproduce the printed liquid curve), the vapour above it by a bump with
 *     a double zero at the azeotrope, so the curves touch with zero slope there.
 */

const W = 340;
type P = [number, number];
const close = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) < tol;
const fmt = (n: number, d = 2) => String(+n.toFixed(d)).replace('-', '−');
const len = (a: P, b: P) => Math.hypot(b[0] - a[0], b[1] - a[1]);
const plain = (html: string) => html.replace(/<[^>]+>/g, '');
const samples = (a: number, b: number, n = 400) => Array.from({ length: n + 1 }, (_, i) => a + ((b - a) * i) / n);

/* ---------- drawing helpers (as in chemistry-11-07.ts and -09.ts) ---------- */
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
const rectPts = (r: Rect): P[] => [[r[0], r[1]], [r[2], r[1]], [r[2], r[3]], [r[0], r[3]], [r[0], r[1]]];
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
/** The result, bottom right, ink-edged; registered as a tag so the audit keeps everything else off it. */
function resultBlock(s: Sketch, lines: string[], o: { size?: number } = {}): Rect {
  const size = o.size ?? 14, lh = size + 6;
  const w = Math.max(...lines.map((t) => Math.max(mathW(t, size), plain(t).length * size * 0.5))) + 26, h = lines.length * lh + 12;
  const x0 = s.w - 8 - w, y0 = s.h - 8 - h;
  s.tags.push({ name: plain(lines.join(' ')), rect: [x0, y0, x0 + w, y0 + h], from: null, to: null });
  s.add(`<rect x="${r1(x0)}" y="${r1(y0)}" width="${r1(w)}" height="${r1(h)}" rx="14" fill="#fff" stroke="${C.text}" stroke-width="1.6"/>`);
  lines.forEach((t, i) => s.text(x0 + w / 2, y0 + 6 + lh * i + lh / 2 + size * 0.36, t, { size, semibold: true }));
  return [x0, y0, x0 + w, y0 + h];
}
/** A tag whose name needs a subscript: the same white pill, all in STIX (one font in one tag, the Android rule). */
function mtag(s: Sketch, x: number, y: number, html: string, p: P | null, o: { hi?: boolean; anchor?: 'start' | 'middle' | 'end'; size?: number } = {}): Rect {
  const size = o.size ?? 13, hi = !!o.hi, w = Math.max(mathW(html, size), plain(html).length * size * 0.5) + 18, anchor = o.anchor ?? 'start';
  const x0 = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w : x, rect: Rect = [x0, y, x0 + w, y + 22];
  let from: P | null = null, to: P | null = null;
  if (p) {
    from = p;
    to = [Math.max(x0 + 8, Math.min(x0 + w - 8, p[0])), p[1] < y ? y : y + 22];
    s.add(`<line x1="${r1(p[0])}" y1="${r1(p[1])}" x2="${r1(to[0])}" y2="${r1(to[1])}" stroke="${hi ? C.mari : C.grey}" stroke-width="1.2"/><circle cx="${r1(p[0])}" cy="${r1(p[1])}" r="2.6" fill="${hi ? C.mari : C.ink}"/>`);
  }
  s.add(`<rect x="${r1(x0)}" y="${y}" width="${r1(w)}" height="22" rx="11" fill="#fff" stroke="${hi ? C.mari : C.border}" stroke-width="${hi ? 1.5 : 1}"/>`);
  s.text(x0 + w / 2, y + 15.5, html, { size, color: hi ? C.amber : C.text });
  s.tags.push({ name: plain(html), rect, from, to });
  return rect;
}
/** A tag of two or three lines: Onest only, leader and all, audited like any other. */
function pill(s: Sketch, x: number, y: number, lines: string[], p: P, o: { hi?: boolean; bare?: boolean } = {}): Rect {
  const hi = !!o.hi, lh = 15, w = Math.max(...lines.map(tagW)), h = lines.length * lh + 7, rect: Rect = [x, y, x + w, y + h];
  const to: P = [Math.max(x + 8, Math.min(x + w - 8, p[0])), p[1] < y ? y : y + h];
  s.add(`<line x1="${r1(p[0])}" y1="${r1(p[1])}" x2="${r1(to[0])}" y2="${r1(to[1])}" stroke="${hi ? C.mari : C.grey}" stroke-width="1.2"/>${o.bare ? '' : `<circle cx="${r1(p[0])}" cy="${r1(p[1])}" r="2.6" fill="${hi ? C.mari : C.ink}"/>`}`);
  s.add(`<rect x="${r1(x)}" y="${y}" width="${r1(w)}" height="${h}" rx="11" fill="#fff" stroke="${hi ? C.mari : C.border}" stroke-width="${hi ? 1.5 : 1}"/>`);
  lines.forEach((t, i) => s.add(`<text x="${r1(x + w / 2)}" y="${r1(y + 15 + lh * i)}" text-anchor="middle" font-family="${F.tag}" font-size="${TAG_SIZE}" fill="${hi ? C.amber : C.text}">${t}</text>`));
  s.tags.push({ name: lines.join(' '), rect, from: p, to });
  return rect;
}
/**
 * n dots at random but repeatable places in a box, never closer than `d`:
 * particles should look scattered, not ranked, and must not touch.
 */
function scatter(r: Rect, n: number, d: number, seed: number, avoid: P[] = []): P[] {
  let a = seed >>> 0;
  const rnd = () => { a = (a + 0x6d2b79f5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  const out: P[] = [];
  for (let k = 0; k < 200000 && out.length < n; k++) {
    const p: P = [r[0] + rnd() * (r[2] - r[0]), r[1] + rnd() * (r[3] - r[1])];
    if (out.every((q) => len(p, q) >= d) && avoid.every((q) => len(p, q) >= 9)) out.push(p);
  }
  return out;
}
const inside = (r: Rect, p: P) => p[0] >= r[0] && p[0] <= r[2] && p[1] >= r[1] && p[1] <= r[3];
const minGap = (pts: P[]) => Math.min(...pts.flatMap((a, i) => pts.slice(i + 1).map((b) => len(a, b))));

/* ---------- graphs ---------- */
type Frame = { ox: number; oy: number; sx: number; sy: number; u0?: number; v0?: number };
const X = (f: Frame, u: number) => f.ox + (u - (f.u0 ?? 0)) * f.sx;
const Y = (f: Frame, v: number) => f.oy - (v - (f.v0 ?? 0)) * f.sy;
const at = (f: Frame, u: number, v: number): P => [X(f, u), Y(f, v)];
const uOf = (f: Frame, x: number) => (x - f.ox) / f.sx + (f.u0 ?? 0);
const vOf = (f: Frame, y: number) => (f.oy - y) / f.sy + (f.v0 ?? 0);
function curve(s: Sketch, f: Frame, fn: (u: number) => number, u0: number, u1: number, o: Stroke = {}): P[] {
  const pts = samples(u0, u1, 300).map((u) => at(f, u, fn(u)));
  path(s, pts, o);
  return pts;
}
const AXIS = C.slate;

/* ===================================================================== */
/* Figure 1.1 · gas over liquid in sealed cylinders (Topic 03, p. 22)      */
/* ===================================================================== */
const CAP11 = 'Sealed cylinders of gas over liquid: compressing the gas (higher partial pressure) forces more of it into solution — Henry’s law.';
/** Particles in (a), the rest following from the physics: dissolved doubles, the sealed total stays, the gas's density doubles. */
const N11 = { gasA: 14, solA: 4 };
const N11B = { sol: 2 * N11.solA, gas: N11.gasA + N11.solA - 2 * N11.solA };
const G11 = { xa: [10, 106] as [number, number], xb: [234, 330] as [number, number], rodTop: 26, wallTop: 38, surf: 166, bot: 276, gasA: 112, pist: 12, labelY: 294, h: 360 };
/** The gas height at 2p: V′/V = N′/(2N). */
const gasB11 = () => (G11.gasA * N11B.gas) / (2 * N11.gasA);
type Cyl = { gas: P[]; sol: P[]; pistonBot: number };
const DRAWN11 = new WeakMap<Sketch, { a: Cyl; b: Cyl; boxes: { gasA: Rect; gasB: Rect; solA: Rect; solB: Rect } }>();
const fig11: Diagram = {
  id: 'c12-01-fig-1.1',
  topic: 2,
  name: 'Gas over liquid: Henry’s law',
  cases: [{ chip: 'p and 2p', cap: CAP11 }],
  draw() {
    const g = G11, s = new Sketch(W, g.h);
    const pistonA = g.surf - g.gasA, pistonB = g.surf - gasB11();
    const dot3 = 3;
    const panel = ([x0, x1]: [number, number], pistonBot: number, label: string, top: string) => {
      const cx = (x0 + x1) / 2;
      path(s, [[x0, g.wallTop], [x0, g.bot], [x1, g.bot], [x1, g.wallTop]], { w: 2 });
      path(s, rectPts([x0 + 1.5, pistonBot - g.pist, x1 - 1.5, pistonBot]), { w: 1.7 });
      path(s, [[cx, g.rodTop], [cx, pistonBot - g.pist]], { w: 2.4 });
      path(s, [[x0, g.surf], [x1, g.surf]], { w: 1.3, color: C.slate });
      s.sym(cx, g.rodTop - 8, top, { size: 15 });
      s.sym(cx, g.labelY, label, { size: 14, color: C.slate });
    };
    panel(g.xa, pistonA, '(a)', 'pressure <i>p</i>');
    panel(g.xb, pistonB, '(b)', 'pressure 2<i>p</i>');
    const pA = { gas: [g.xa[1] - 5, 90] as P, sol: [g.xa[1] - 5, 186] as P }, pB = { gas: [g.xb[0] + 5, 146] as P, sol: [g.xb[0] + 5, 222] as P };
    const boxes = {
      gasA: [g.xa[0] + 9, pistonA + 8, g.xa[1] - 10, g.surf - 8] as Rect,
      solA: [g.xa[0] + 9, g.surf + 10, g.xa[1] - 10, g.bot - 9] as Rect,
      gasB: [g.xb[0] + 10, pistonB + 7, g.xb[1] - 9, g.surf - 7] as Rect,
      solB: [g.xb[0] + 10, g.surf + 10, g.xb[1] - 9, g.bot - 9] as Rect,
    };
    const a: Cyl = { gas: scatter(boxes.gasA, N11.gasA, 15, 11, [pA.gas]), sol: scatter(boxes.solA, N11.solA, 24, 23, [pA.sol]), pistonBot: pistonA };
    const b: Cyl = { gas: scatter(boxes.gasB, N11B.gas, 12, 37, [pB.gas]), sol: scatter(boxes.solB, N11B.sol, 18, 41, [pB.sol]), pistonBot: pistonB };
    [a, b].forEach((c) => {
      c.gas.forEach(([x, y]) => s.dot(x, y, dot3));
      c.sol.forEach(([x, y]) => s.dot(x, y, dot3, C.mari));
    });
    // no dot where these lines end: among particles a dot would read as one more particle
    s.tag(116, 92, 'gas', pA.gas[0], pA.gas[1], { bare: true });
    s.tag(116, 190, 'solution', pA.sol[0], pA.sol[1], { bare: true });
    s.tag(224, 150, 'gas', pB.gas[0], pB.gas[1], { anchor: 'end', bare: true });
    s.tag(224, 226, 'solution', pB.sol[0], pB.sol[1], { anchor: 'end', bare: true });
    resultBlock(s, ['higher partial pressure', 'dissolves more gas'], { size: 13 });
    DRAWN11.set(s, { a, b, boxes });
    return s;
  },
  check() {
    const s = fig11.draw(fig11.cases[0]), d = DRAWN11.get(s)!, g = G11, out: Check[] = [];
    const Va = g.surf - d.a.pistonBot, Vb = g.surf - d.b.pistonBot;
    out.push([`Sealed: the same particles in both, ${d.a.gas.length} + ${d.a.sol.length} = ${d.b.gas.length} + ${d.b.sol.length}`, d.a.gas.length + d.a.sol.length === d.b.gas.length + d.b.sol.length && d.a.gas.length === N11.gasA && d.a.sol.length === N11.solA]);
    out.push([`The gas's pressure doubles (2p): its density, read off the drawing, goes from ${d.a.gas.length}/${fmt(Va, 1)} to ${d.b.gas.length}/${fmt(Vb, 1)} per px of height, ratio ${fmt((d.b.gas.length / Vb) / (d.a.gas.length / Va), 3)}`, close((d.b.gas.length / Vb) / (d.a.gas.length / Va), 2)]);
    out.push([`Henry's law: the dissolved count doubles with the pressure, ${d.a.sol.length} → ${d.b.sol.length}`, d.b.sol.length === 2 * d.a.sol.length]);
    out.push(['The piston is lower in (b) (the gas is compressed), and the liquid, nearly incompressible, keeps its level', d.b.pistonBot > d.a.pistonBot]);
    out.push(['Every gas particle lies in the gas, every dissolved particle below the surface', d.a.gas.every((p) => inside(d.boxes.gasA, p)) && d.b.gas.every((p) => inside(d.boxes.gasB, p)) && d.a.sol.every((p) => inside(d.boxes.solA, p)) && d.b.sol.every((p) => inside(d.boxes.solB, p))]);
    out.push([`No two particles touch: closest ${fmt(Math.min(...[d.a.gas, d.a.sol, d.b.gas, d.b.sol].map(minGap)), 1)} px`, [d.a.gas, d.a.sol, d.b.gas, d.b.sol].every((q) => minGap(q) > 6.5)]);
    out.push(['The labels as printed: pressure p, pressure 2p, (a), (b)', ['pressure p', 'pressure 2p', '(a)', '(b)'].every((t) => s.labels.some((l) => l.text === t))]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 1.2 · Henry's law plot (Topic 03, p. 24)                         */
/* ===================================================================== */
const CAP12 = 'Henry’s law plot: the partial pressure <i>p</i> of the gas is proportional to the mole fraction <i>x</i> of dissolved gas (a straight line through the origin); a steeper slope (larger Henry’s law constant) means lower solubility.';
/** The book's two lines, read from p. 24: at x = 1, p = 1.6 and p = 3.0 (arbitrary units). */
const K12 = { K: 1.6, K2: 3.0 };
const F12: Frame = { ox: 46, oy: 292, sx: 250, sy: 78 };
const fig12: Diagram = {
  id: 'c12-01-fig-1.2',
  topic: 2,
  name: 'Henry’s law plot',
  cases: [{ chip: 'p against x', cap: CAP12 }],
  draw() {
    const s = new Sketch(W, 362), f = F12;
    arrow(s, [f.ox, f.oy], [X(f, 1.08), f.oy], { color: AXIS, w: 1.3 });
    arrow(s, [f.ox, f.oy], [f.ox, Y(f, 3.3)], { color: AXIS, w: 1.3 });
    [0, 0.2, 0.4, 0.6, 0.8, 1].forEach((u) => { path(s, [[X(f, u), f.oy], [X(f, u), f.oy + 4]], { color: AXIS, w: 1.2 }); s.sym(X(f, u), f.oy + 20, u.toFixed(1), { size: 13, color: C.slate }); });
    [0, 0.5, 1, 1.5, 2, 2.5, 3].forEach((v) => { path(s, [[f.ox - 4, Y(f, v)], [f.ox, Y(f, v)]], { color: AXIS, w: 1.2 }); s.sym(f.ox - 8, Y(f, v) + 4.5, v.toFixed(1), { size: 13, anchor: 'end', color: C.slate }); });
    s.sym(14, 18, 'partial pressure, <i>p</i> (arbitrary units)', { size: 14, anchor: 'start' });
    s.sym(f.ox + 125, f.oy + 38, 'mole fraction of dissolved gas, <i>x</i>', { size: 14 });
    s.sym(f.ox + 125, f.oy + 57, '(schematic scale; real <i>x</i> is ~10<sup>−5</sup> to 10<sup>−3</sup>)', { size: 14 });
    curve(s, f, (x) => K12.K * x, 0, 1, { w: 2.4, name: 'KH' });
    curve(s, f, (x) => K12.K2 * x, 0, 1, { color: C.mari, w: 2.8, name: 'KH2' });
    s.sym(70, 48, 'steeper slope = <i>K′</i><sub>H</sub> > <i>K</i><sub>H</sub>', { size: 15, anchor: 'start', color: C.amber });
    s.sym(70, 68, '(lower solubility)', { size: 15, anchor: 'start', color: C.amber });
    const a2: P = [186, 76], b2 = at(f, 0.76, K12.K2 * 0.76 + 0.06);
    arrow(s, a2, b2, { color: C.mari, w: 1.5, free: true });
    s.sym(214, 160, 'slope = <i>K</i><sub>H</sub>', { size: 15, anchor: 'start' });
    arrow(s, [262, 166], at(f, 0.905, K12.K * 0.905 + 0.05), { w: 1.4, free: true });
    s.sym(150, 266, '<i>p</i> = <i>K</i><sub>H</sub><i>x</i>', { size: 15, anchor: 'start' });
    return s;
  },
  check() {
    const s = fig12.draw(fig12.cases[0]), f = F12, out: Check[] = [];
    const read = (n: string) => lineOf(s, n).map(([x, y]): P => [uOf(f, x), vOf(f, y)]);
    const a = read('KH'), b = read('KH2');
    out.push([`Both lines start at the origin (straight through it, as the caption says)`, close(a[0][0], 0) && close(a[0][1], 0) && close(b[0][0], 0) && close(b[0][1], 0)]);
    out.push([`Read back, every point of each line has p/x constant: K_H = ${K12.K} and K′_H = ${K12.K2}`, a.slice(1).every(([x, p]) => close(p / x, K12.K, 1e-9)) && b.slice(1).every(([x, p]) => close(p / x, K12.K2, 1e-9))]);
    out.push([`The marigold line is the steeper (K′_H ${K12.K2} > K_H ${K12.K}) and the lower solubility: at p = 1, x = 1/K: ${fmt(1 / K12.K2, 3)} < ${fmt(1 / K12.K, 3)}`, K12.K2 > K12.K && 1 / K12.K2 < 1 / K12.K]);
    out.push([`Real values run from ~10⁻⁵ to ~10⁻³: the book's O₂, K_H = 34.86 kbar, at p = 1 bar gives x = ${(1 / 34860).toExponential(1)}; its CO₂, 4.0 bar over 1.6 × 10³ bar, gives ${(4 / 1600).toExponential(1)}`, 1 / 34860 > 1e-5 && 1 / 34860 < 1e-4 && 4 / 1600 > 1e-3 && 4 / 1600 < 1e-2]);
    out.push(['Every printed tick is drawn: x from 0.0 to 1.0 by 0.2, p from 0.0 to 3.0 by 0.5', ['0.2', '0.4', '0.6', '0.8', '1.0', '1.5', '2.0', '2.5', '3.0'].every((t) => s.labels.some((l) => l.text === t))]);
    out.push(['The labels as printed: slope = K_H and p = K_H x', ['slope = KH', 'p = KHx'].every((t) => s.labels.some((l) => l.text === t))]);
    out.push(...layout(s));
    return out;
  },
};

/* ---------- the two volatile components (Figures 1.3, 1.4) ---------- */
/** In units of p°_A. The book's p°_B/p°_A, read from p. 31: 121/284 = 0.43 and 89/215 = 0.41. */
const PA0 = 1, PB0 = 0.42;
const idealA = (xB: number) => (1 - xB) * PA0;
const idealB = (xB: number) => xB * PB0;
const pA14 = (xB: number, A: number) => (1 - xB) * PA0 * Math.exp(A * xB * xB);
const pB14 = (xB: number, A: number) => xB * PB0 * Math.exp(A * (1 - xB) * (1 - xB));
const pT14 = (xB: number, A: number) => pA14(xB, A) + pB14(xB, A);
const pS = (j: 'A' | 'B') => `<i>p</i>°<sub>${j}</sub>`;
const x12 = (j: 'A' | 'B', n: 0 | 1) => `<i>x</i><sub>${j}</sub> = ${n}`;

/* ===================================================================== */
/* Figure 1.3 · an ideal solution (Topic 04, p. 31)                        */
/* ===================================================================== */
const CAP13 = 'An ideal solution: the partial pressures and the total pressure all vary linearly with mole fraction — Raoult’s law at every composition.';
const F13: Frame = { ox: 52, oy: 270, sx: 250, sy: 220 };
const fig13: Diagram = {
  id: 'c12-01-fig-1.3',
  topic: 3,
  name: 'Ideal solution: Raoult’s law',
  cases: [{ chip: 'Ideal', cap: CAP13 }],
  draw() {
    const s = new Sketch(W, 318), f = F13;
    path(s, [[f.ox, Y(f, 1.1)], [f.ox, f.oy], [X(f, 1), f.oy]], { color: AXIS, w: 1.3 });
    [0, 1].forEach((u) => path(s, [[X(f, u), f.oy], [X(f, u), f.oy + 4]], { color: AXIS, w: 1.2 }));
    ([['A', PA0], ['B', PB0]] as ['A' | 'B', number][]).forEach(([j, v]) => { path(s, [[f.ox - 4, Y(f, v)], [f.ox, Y(f, v)]], { color: AXIS, w: 1.2 }); s.sym(f.ox - 8, Y(f, v) + 5, pS(j), { size: 15, anchor: 'end' }); });
    s.sym(14, 18, 'vapour pressure', { size: 14, anchor: 'start' });
    s.sym(X(f, 0), f.oy + 20, x12('A', 1), { size: 13 }); s.sym(X(f, 0), f.oy + 37, x12('B', 0), { size: 13 });
    s.sym(X(f, 1), f.oy + 20, x12('B', 1), { size: 13 }); s.sym(X(f, 1), f.oy + 37, x12('A', 0), { size: 13 });
    curve(s, f, idealA, 0, 1, { dash: true, w: 2, name: 'pA' });
    curve(s, f, idealB, 0, 1, { dash: true, w: 2, color: C.slate, name: 'pB' });
    curve(s, f, (x) => idealA(x) + idealB(x), 0, 1, { color: C.mari, w: 2.8, name: 'total' });
    s.sym(60, 150, '<i>p</i><sub>A</sub> = <i>p</i>°<sub>A</sub><i>x</i><sub>A</sub>', { size: 14, anchor: 'start' });
    s.sym(158, 252, '<i>p</i><sub>B</sub> = <i>p</i>°<sub>B</sub><i>x</i><sub>B</sub>', { size: 14, anchor: 'start', color: C.slate });
    const uT = 0.5;
    mtag(s, 172, 42, '<i>p</i><sub>total</sub>', at(f, uT, idealA(uT) + idealB(uT)), { hi: true, size: 15 });
    return s;
  },
  check() {
    const s = fig13.draw(fig13.cases[0]), f = F13, out: Check[] = [];
    const read = (n: string) => lineOf(s, n).map(([x, y]): P => [uOf(f, x), vOf(f, y)]);
    const a = read('pA'), b = read('pB'), t = read('total');
    out.push(['Raoult, read back from the drawn lines: p_A = p°_A x_A and p_B = p°_B x_B at every point', a.every(([x, p]) => close(p, PA0 * (1 - x), 1e-9)) && b.every(([x, p]) => close(p, PB0 * x, 1e-9))]);
    out.push(['The total is the sum of the two at every point', t.every(([, p], i) => close(p, a[i][1] + b[i][1], 1e-9))]);
    const straight = (q: P[]) => q.every(([x, p]) => close(p, q[0][1] + ((q[q.length - 1][1] - q[0][1]) * (x - q[0][0])) / (q[q.length - 1][0] - q[0][0]), 1e-9));
    out.push(['All three are straight lines (the caption: all vary linearly)', straight(a) && straight(b) && straight(t)]);
    out.push([`The ends: the total runs from p°_A (x_B = 0) to p°_B (x_B = 1), p_A falls to 0, p_B rises from 0, and p°_A > p°_B as printed`, close(t[0][1], PA0) && close(t[t.length - 1][1], PB0) && close(a[a.length - 1][1], 0) && close(b[0][1], 0) && PA0 > PB0]);
    out.push(['The labels as printed: p°_A, p°_B, p_A = p°_A x_A, p_B = p°_B x_B, x_A = 1 / x_B = 0 at the left, x_B = 1 / x_A = 0 at the right', ['p°A', 'p°B', 'pA = p°AxA', 'pB = p°BxB', 'xA = 1', 'xB = 0', 'xB = 1', 'xA = 0'].every((n) => s.labels.some((l) => l.text === n))]);
    out.push(['The marigold tag names the total: its dot sits on that line', s.tags.some((g) => g.name === 'ptotal' && !!g.from && close(vOf(f, g.from[1]), idealA(uOf(f, g.from[0])) + idealB(uOf(f, g.from[0])), 1e-9))]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 1.4 · non-ideal solutions (Topic 04, p. 31)                      */
/* ===================================================================== */
const CAP14 = 'Non-ideal solutions: positive deviation bows the curves above the ideal (dashed) lines, negative deviation sags them below.';
const A14 = 1.5;
const F14: Frame = { ox: 52, oy: 300, sx: 250, sy: 190 };
/** The extremum of the total, by search. */
function extremum14(A: number): { x: number; p: number } {
  const xs = samples(0, 1, 2000), best = (a: number, b: number) => (A > 0 ? a > b : a < b);
  return xs.reduce((m, x) => (best(pT14(x, A), m.p) ? { x, p: pT14(x, A) } : m), { x: 0, p: pT14(0, A) });
}
const fig14: Diagram = {
  id: 'c12-01-fig-1.4',
  topic: 3,
  name: 'Non-ideal solutions',
  cases: [
    { chip: 'Positive deviation', cap: CAP14, A: A14 },
    { chip: 'Negative deviation', cap: CAP14, A: -A14 },
  ],
  draw(c) {
    const s = new Sketch(W, 330), f = F14, A = c.A as number, pos = A > 0;
    s.sym(W / 2, 16, pos ? 'positive deviation' : 'negative deviation', { size: 15 });
    s.sym(W / 2, 35, pos ? '(solid curves above dashed ideal)' : '(solid curves below dashed ideal)', { size: 14 });
    s.sym(14, 62, 'vapour pressure', { size: 14, anchor: 'start' });
    path(s, [[f.ox, 72], [f.ox, f.oy], [X(f, 1), f.oy]], { color: AXIS, w: 1.3 });
    [0, 1].forEach((u) => { path(s, [[X(f, u), f.oy], [X(f, u), f.oy + 4]], { color: AXIS, w: 1.2 }); s.sym(X(f, u), f.oy + 20, x12('B', u as 0 | 1), { size: 14 }); });
    ([['A', PA0], ['B', PB0]] as ['A' | 'B', number][]).forEach(([j, v]) => { path(s, [[f.ox - 4, Y(f, v)], [f.ox, Y(f, v)]], { color: AXIS, w: 1.2 }); s.sym(f.ox - 8, Y(f, v) + 5, pS(j), { size: 15, anchor: 'end' }); });
    curve(s, f, idealA, 0, 1, { dash: true, w: 1.3, color: C.slate, name: 'idealA' });
    curve(s, f, idealB, 0, 1, { dash: true, w: 1.3, color: C.slate, name: 'idealB' });
    curve(s, f, (x) => idealA(x) + idealB(x), 0, 1, { dash: true, w: 1.3, color: C.slate, name: 'idealT' });
    curve(s, f, (x) => pA14(x, A), 0, 1, { w: 2.2, name: 'A' });
    curve(s, f, (x) => pB14(x, A), 0, 1, { w: 2.2, color: C.slate, name: 'B' });
    curve(s, f, (x) => pT14(x, A), 0, 1, { w: 2.8, color: C.mari, name: 'T' });
    const e = extremum14(A), q = at(f, e.x, e.p);
    if (pos) mtag(s, 178, 56, 'maximum in <i>p</i><sub>total</sub>', q, { hi: true, size: 14 });
    else mtag(s, 172, 104, 'minimum in <i>p</i><sub>total</sub>', q, { hi: true, size: 14 });
    s.sym(pos ? 177 : 90, pos ? 135 : 190, '<i>p</i><sub>A</sub>', { size: 14 });
    s.sym(pos ? 120 : 272, pos ? 236 : 258, '<i>p</i><sub>B</sub>', { size: 14, color: C.slate });
    return s;
  },
  check(c) {
    const s = fig14.draw(c), f = F14, A = c.A as number, pos = A > 0, out: Check[] = [];
    const read = (n: string) => lineOf(s, n).map(([x, y]): P => [uOf(f, x), vOf(f, y)]);
    const a = read('A'), b = read('B'), t = read('T'), iA = read('idealA'), iB = read('idealB'), iT = read('idealT');
    const inner = (q: P[]) => q.slice(1, -1);
    out.push(['The total is the sum of the two partial-pressure curves at every point, read back from the drawing', t.every(([, p], i) => close(p, a[i][1] + b[i][1], 1e-9))]);
    const side = (q: P[], r: P[]) => inner(q).every(([, p], i) => (pos ? p > r[i + 1][1] : p < r[i + 1][1]));
    out.push([`${pos ? 'Positive' : 'Negative'} deviation: at every composition between the ends, p_A, p_B and the total all lie ${pos ? 'above' : 'below'} their dashed ideal lines`, side(a, iA) && side(b, iB) && side(t, iT)]);
    out.push(['The dashed lines are the ideal ones: p°_A x_A, p°_B x_B and their straight sum', iA.every(([x, p]) => close(p, idealA(x), 1e-9)) && iB.every(([x, p]) => close(p, idealB(x), 1e-9)) && iT.every(([x, p]) => close(p, idealA(x) + idealB(x), 1e-9))]);
    out.push(['Each curve meets its ideal line at the pure ends (p_A from p°_A to 0, p_B from 0 to p°_B)', close(a[0][1], PA0) && close(a[a.length - 1][1], 0) && close(b[0][1], 0) && close(b[b.length - 1][1], PB0)]);
    const h = 1e-5, gA = (x: number) => A * x * x, gB = (x: number) => A * (1 - x) * (1 - x);
    const gd = [0.2, 0.5, 0.8].every((x) => close((1 - x) * ((gA(x + h) - gA(x - h)) / (2 * h)) + x * ((gB(x + h) - gB(x - h)) / (2 * h)), 0, 1e-6));
    out.push(['The curves obey Gibbs–Duhem (x_A d ln γ_A + x_B d ln γ_B = 0): one constant fixes both, so neither curve is invented', gd]);
    out.push([`A ${fmt(Math.abs(A))} below 2: one liquid phase at every composition`, Math.abs(A) < 2]);
    const e = extremum14(A);
    out.push([pos ? `A true maximum in the total: ${fmt(e.p, 3)} at x_B = ${fmt(e.x, 2)}, above both pure pressures (${PA0}, ${PB0})` : `A true minimum in the total: ${fmt(e.p, 3)} at x_B = ${fmt(e.x, 2)}, below both pure pressures (${PA0}, ${PB0})`, e.x > 0.05 && e.x < 0.95 && (pos ? e.p > PA0 : e.p < PB0)]);
    out.push(['The marigold tag names that extremum: its dot sits on it', s.tags.some((g) => !!g.from && close(g.from[0], X(f, e.x)) && close(g.from[1], Y(f, e.p)) && g.name === `${pos ? 'maximum' : 'minimum'} in ptotal`)]);
    out.push(['The labels as printed: the heading, p°_A, p°_B, x_B = 0, x_B = 1', [pos ? 'positive deviation' : 'negative deviation', 'p°A', 'p°B', 'xB = 0', 'xB = 1'].every((n) => s.labels.some((l) => l.text === n))]);
    out.push(['Each partial-pressure curve is named: p_A, p_B', ['pA', 'pB'].every((n) => s.labels.some((l) => l.text === n))]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 1.5 · vapour pressure against temperature (Topic 05, p. 40)      */
/* ===================================================================== */
const CAP15 = 'Vapour pressure vs temperature for pure solvent and solution, showing the solution’s freezing-point depression and boiling-point elevation.';
/**
 * Temperature t in a schematic 0–1 across the axis, pressure in atm. T°_f and T°_b
 * and the gaps are the book's proportions (p. 40); p_tp, the pressure at T°_f, is
 * lower than printed so one smooth Clausius–Clapeyron-shaped curve reaches the
 * book's height at the right edge (it prints a kink at 1 atm).
 */
const S15 = (() => {
  const tF0 = 0.32, tB0 = 0.74, dB = 0.11, dF = 0.1, pTP = 0.5;
  const b = Math.log(1 / pTP) / (tB0 - tF0);
  const x = Math.exp(-b * dB);
  const c = b + (b * dB) / dF;
  const liq = (t: number) => Math.exp(b * (t - tB0));
  const sol = (t: number) => x * liq(t);
  const solid = (t: number) => pTP * Math.exp(c * (t - tF0));
  return { tF0, tB0, dB, dF, pTP, b, x, c, liq, sol, solid, tF: tF0 - dF, tB: tB0 + dB, tEnd: 0.98 };
})();
const F15: Frame = { ox: 22, oy: 290, sx: 300, sy: 150 };
const fig15: Diagram = {
  id: 'c12-01-fig-1.5',
  topic: 4,
  name: 'Vapour pressure against temperature',
  cases: [{ chip: 'Solvent and solution', cap: CAP15 }],
  draw() {
    const s = new Sketch(W, 322), f = F15, m = S15;
    arrow(s, [f.ox, f.oy], [X(f, 1.0), f.oy], { w: 1.5 });
    arrow(s, [f.ox, f.oy], [f.ox, 34], { w: 1.5 });
    s.sym(X(f, 1.0) + 6, f.oy + 5, '<i>T</i>', { size: 15, anchor: 'start' });
    s.sym(14, 22, 'vapour pressure', { size: 14, anchor: 'start' });
    // 1 atm, and the guides from each temperature up to the point that fixes it
    path(s, [[f.ox, Y(f, 1)], [X(f, m.tEnd), Y(f, 1)]], { color: C.slate, w: 1.1, dash: true, name: 'atm' });
    s.sym(f.ox + 6, Y(f, 1) - 7, '1 atm', { size: 13, anchor: 'start', color: C.slate });
    const guide = (t: number, p: number, html: string) => {
      path(s, [[X(f, t), f.oy], [X(f, t), Y(f, p)]], { color: C.grey, w: 1.2, dash: true });
      path(s, [[X(f, t), f.oy], [X(f, t), f.oy + 4]], { w: 1.4 });
      s.sym(X(f, t), f.oy + 20, html, { size: 14 });
    };
    guide(m.tF, m.sol(m.tF), '<i>T</i><sub>f</sub>');
    guide(m.tF0, m.liq(m.tF0), '<i>T</i>°<sub>f</sub>');
    guide(m.tB0, 1, '<i>T</i>°<sub>b</sub>');
    guide(m.tB, 1, '<i>T</i><sub>b</sub>');
    // the solid's curve, one line up to T°f, where it meets the pure liquid (it stops there: beyond, a solid is metastable), and the solution
    curve(s, f, m.solid, 0, m.tF0, { w: 2.2, name: 'solid' });
    curve(s, f, m.liq, m.tF0, m.tEnd, { w: 2.2, name: 'liquid' });
    curve(s, f, m.sol, m.tF, m.tEnd, { color: C.mari, w: 2.8, name: 'solution' });
    // the two gaps
    const yA = f.oy - 11;
    span(s, [X(f, m.tF), yA], [X(f, m.tF0), yA], { w: 1.3 });
    span(s, [X(f, m.tB0), yA], [X(f, m.tB), yA], { w: 1.3 });
    s.sym(X(f, (m.tF + m.tF0) / 2), yA - 12, 'Δ<i>T</i><sub>f</sub>', { size: 13 });
    s.sym(X(f, (m.tB0 + m.tB) / 2), yA - 12, 'Δ<i>T</i><sub>b</sub>', { size: 13 });
    const tL = 0.86, tS = 0.5;
    s.tag(250, 90, 'pure solvent', X(f, tL), Y(f, m.liq(tL)), { anchor: 'end' });
    s.tag(136, 240, 'solution', X(f, tS), Y(f, m.sol(tS)), { hi: true });
    const tFS = 0.14;
    s.tag(34, 172, 'frozen solvent', X(f, tFS), Y(f, m.solid(tFS)));
    return s;
  },
  check() {
    const s = fig15.draw(fig15.cases[0]), f = F15, m = S15, out: Check[] = [];
    const read = (n: string) => lineOf(s, n).map(([x, y]): P => [uOf(f, x), vOf(f, y)]);
    const l = read('liquid'), so = read('solution');
    out.push([`Raoult: the solution's curve, read back, is x = ${fmt(m.x, 3)} times the pure liquid's at every temperature, so it sits below it (p. 38: "sits below the pure solvent's at every temperature")`, so.every(([t, p]) => close(p, m.x * m.liq(t), 1e-9) && p < m.liq(t))]);
    out.push([`The pure solvent boils where its curve meets 1 atm: T°_b = ${fmt(m.tB0)}; the solution needs a higher temperature, T_b = ${fmt(m.tB)}`, close(m.liq(m.tB0), 1) && close(m.sol(m.tB), 1) && m.tB > m.tB0]);
    out.push([`The gap equals −ln x / b: ΔT_b = ${fmt(m.tB - m.tB0)} = ${fmt(-Math.log(m.x) / m.b)}`, close(m.tB - m.tB0, -Math.log(m.x) / m.b)]);
    out.push([`Freezing (p. 38, step 4): solid and pure liquid match at T°_f = ${fmt(m.tF0)}; solid and solution match lower, at T_f = ${fmt(m.tF)}`, close(m.solid(m.tF0), m.liq(m.tF0)) && close(m.solid(m.tF), m.sol(m.tF)) && m.tF < m.tF0]);
    out.push([`The solid's curve is steeper than the liquid's where they meet (c = ${fmt(m.c)} > b = ${fmt(m.b)}), and that is what sets ΔT_f = −ln x/(c − b) = ${fmt(-Math.log(m.x) / (m.c - m.b))}`, m.c > m.b && close(m.tF0 - m.tF, -Math.log(m.x) / (m.c - m.b))]);
    out.push(['The solution starts on the solid\'s curve at T_f; the pure liquid starts on it at T°_f (the solid frozen out is pure solvent in both)', close(so[0][0], m.tF) && close(so[0][1], m.solid(m.tF)) && close(l[0][0], m.tF0) && close(l[0][1], m.solid(m.tF0))]);
    out.push(['Order along the axis as printed: T_f < T°_f < T°_b < T_b', m.tF < m.tF0 && m.tF0 < m.tB0 && m.tB0 < m.tB]);
    const lx = (t: string) => { const q = s.labels.find((a) => a.text === t)!; return (q.rect[0] + q.rect[2]) / 2; };
    out.push(['Each temperature label stands under its own computed point, and each Δ between its own pair', close(lx('Tf'), X(f, m.tF)) && close(lx('T°f'), X(f, m.tF0)) && close(lx('T°b'), X(f, m.tB0)) && close(lx('Tb'), X(f, m.tB)) && close(lx('ΔTf'), X(f, (m.tF + m.tF0) / 2)) && close(lx('ΔTb'), X(f, (m.tB0 + m.tB) / 2))]);
    const sol = read('solid');
    out.push(['The solid\'s curve stops at T°f, where it meets the pure liquid', close(sol[sol.length - 1][0], m.tF0) && close(sol[sol.length - 1][1], m.liq(m.tF0))]);
    const onCurve = (name: string, fn: (t: number) => number) => s.tags.some((g) => g.name === name && !!g.from && close(vOf(f, g.from[1]), fn(uOf(f, g.from[0])), 1e-9));
    out.push(['Each tag\'s dot lies on its own curve: frozen solvent, pure solvent, solution', onCurve('frozen solvent', m.solid) && onCurve('pure solvent', m.liq) && onCurve('solution', m.sol)]);
    out.push(['1 atm is labelled, on its own line', s.labels.some((a) => a.text === '1 atm') && close(vOf(f, lineOf(s, 'atm')[0][1]), 1)]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 1.6 · an osmosis cell (Topic 05, p. 40)                          */
/* ===================================================================== */
const CAP16 = 'An osmosis cell: solvent flows through the semipermeable membrane into the solution until the pressure of the raised liquid column, equal to the osmotic pressure Π, stops the net flow.';
const G16 = { l: [30, 78] as [number, number], r: [194, 242] as [number, number], top: 14, chT: 250, chB: 292, mem: 136, lvlL: 170, lvlR: 80, dim: 182, h: 344, nSol: 14 };
const DRAWN16 = new WeakMap<Sketch, { flow: [P, P][]; solute: P[] }>();
const fig16: Diagram = {
  id: 'c12-01-fig-1.6',
  topic: 4,
  name: 'Osmosis cell',
  cases: [{ chip: 'Osmosis cell', cap: CAP16 }],
  draw() {
    const g = G16, s = new Sketch(W, g.h);
    path(s, [[g.l[0], g.top], [g.l[0], g.chB], [g.r[1], g.chB], [g.r[1], g.top]], { w: 2 });
    path(s, [[g.l[1], g.top], [g.l[1], g.chT], [g.r[0], g.chT], [g.r[0], g.top]], { w: 2 });
    // the levels
    path(s, [[g.l[0], g.lvlL], [g.l[1], g.lvlL]], { w: 1.5, name: 'levelL' });
    path(s, [[g.r[0], g.lvlR], [g.r[1], g.lvlR]], { w: 1.5, name: 'levelR' });
    // the rise, from the solvent's level to the solution's
    path(s, [[g.l[1], g.lvlL], [g.r[1], g.lvlL]], { color: C.slate, w: 1.1, dash: true });
    path(s, [[g.dim, g.lvlR], [g.r[0], g.lvlR]], { color: C.slate, w: 1.1, dash: true });
    span(s, [g.dim, g.lvlR], [g.dim, g.lvlL], { color: C.slate, w: 1.3, name: 'rise' });
    s.sym(g.dim - 8, (g.lvlR + g.lvlL) / 2 + 4, 'rise, <i>h</i>', { size: 14, anchor: 'end', color: C.slate });
    s.sym(g.mem, 36, 'at equilibrium', { size: 14 });
    s.sym(g.mem, 56, 'Π = <i>ρgh</i>', { size: 15 });
    // the membrane: two dashed lines across the tube
    [g.mem - 2.5, g.mem + 2.5].forEach((x) => path(s, [[x, g.chT], [x, g.chB]], { color: C.slate, w: 1.6, dash: true }));
    // the solvent's flow, the point of the figure
    const mid = (g.chT + g.chB) / 2;
    const flow: [P, P][] = [-8, 8].flatMap((dy) => [[[g.mem - 46, mid + dy], [g.mem - 7, mid + dy]] as [P, P], [[g.mem + 7, mid + dy], [g.mem + 46, mid + dy]] as [P, P]]);
    flow.forEach(([a, b]) => arrow(s, a, b, { color: C.mari, w: 2, free: true }));
    s.sym(g.mem, g.chT - 8, 'solvent flows in', { size: 13.5, color: C.amber });
    // the solute, right of the membrane only
    const pSol: P = [g.r[1] - 5, g.lvlR + 12], pSvt: P = [g.l[1] - 6, g.lvlL + 10];
    const solute = scatter([g.r[0] + 8, g.lvlR + 9, g.r[1] - 9, g.chB - 8], g.nSol, 15, 7, [pSol]);
    solute.forEach(([x, y]) => s.dot(x, y, 2.6));
    s.tag(g.r[1] + 10, g.lvlR - 28, 'solution', pSol[0], pSol[1], { bare: true });
    s.tag(g.l[1] + 6, g.lvlL + 18, 'pure solvent', pSvt[0], pSvt[1], { bare: true });
    pill(s, g.mem - 58, g.chB + 10, ['semipermeable', 'membrane'], [g.mem, g.chB - 5], { bare: true });
    DRAWN16.set(s, { flow, solute });
    return s;
  },
  check() {
    const s = fig16.draw(fig16.cases[0]), g = G16, d = DRAWN16.get(s)!, out: Check[] = [];
    const rise = lineOf(s, 'rise'), h = Math.abs(rise[1][1] - rise[0][1]);
    out.push([`The rise h runs exactly from the pure solvent's level to the solution's: ${fmt(h, 1)} px, the solution's the higher`, close(rise[0][1], lineOf(s, 'levelR')[0][1]) && close(rise[1][1], lineOf(s, 'levelL')[0][1]) && g.lvlR < g.lvlL]);
    out.push(['Arms of the same bore: what left one arm rose in the other, so each level moved h/2 from a common start', close(g.l[1] - g.l[0], g.r[1] - g.r[0])]);
    out.push([`Every solute particle (${d.solute.length}) is on the solution's side of the membrane and below its surface: the membrane stops them`, d.solute.length === g.nSol && d.solute.every(([x, y]) => x > g.mem && y > g.lvlR)]);
    out.push(['Every flow arrow points from the pure solvent toward the solution', d.flow.every(([a, b]) => b[0] > a[0])]);
    out.push(['The membrane stands in the tube between the two arms', g.mem > g.l[1] && g.mem < g.r[0]]);
    out.push([`Π = ρgh is a pressure: for water, 1 m of rise is 1000 × 9.8 × 1 = ${1000 * 9.8 * 1} Pa`, close(1000 * 9.8, 9800)]);
    out.push(['The labels as printed: at equilibrium, Π = ρgh, rise, h, solvent flows in, pure solvent, solution, semipermeable membrane', ['at equilibrium', 'Π = ρgh', 'rise, h', 'solvent flows in'].every((t) => s.labels.some((l) => l.text === t)) && ['pure solvent', 'solution', 'semipermeable membrane'].every((t) => s.tags.some((q) => q.name === t))]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Addendum C, "Figure 1" · the azeotrope diagram (Additional topic C, p. 49) */
/* ===================================================================== */
const CAPC1 = 'Boiling-point–composition diagram for a minimum-boiling azeotrope. The liquid curve and vapour curve touch at the azeotropic composition <i>x</i><sub>az</sub>, where liquid and vapour have the same composition; the minimum of the boiling point sits at the same point. Schematic: the two pure boiling points and the azeotrope are real values; the curves between them only show the shape. <i>x</i><sub>az</sub> ≈ 0.89 is a mole fraction, about 95.6% ethanol by mass; NCERT’s “approximately 95% by volume” is the same mixture quoted roughly.';
/** The printed values: water 100 °C, ethanol 78.4 °C, azeotrope 78.1 °C at x = 0.89. */
const AZ = { Tw: 100, Te: 78.4, Taz: 78.1, xaz: 0.89 };
const liqC = (x: number) => (x <= AZ.xaz ? AZ.Taz + (AZ.Tw - AZ.Taz) * ((AZ.xaz - x) / AZ.xaz) ** 2 : AZ.Taz + (AZ.Te - AZ.Taz) * ((x - AZ.xaz) / (1 - AZ.xaz)) ** 2);
/** The gap of the vapour curve above the liquid: zero at both ends; a double zero at the azeotrope, so the two touch there with one slope. */
const gapC = (x: number) => {
  if (x <= AZ.xaz) { const u = x / AZ.xaz; return 31 * u * (1 - u) * (1 - u); }
  const v = (x - AZ.xaz) / (1 - AZ.xaz); return 0.5 * v * v * (1 - v);
};
const vapC = (x: number) => liqC(x) + gapC(x);
const FC: Frame = { ox: 44, oy: 299, sx: 280, sy: 8.6, v0: 72 };
/** The vapour composition in equilibrium with a boiling liquid x: where the vapour curve has the liquid's temperature, on the same side of the azeotrope. */
function tieC(x: number): number {
  const T = liqC(x);
  let [lo, hi] = x < AZ.xaz ? [x, AZ.xaz] : [AZ.xaz, x];
  const rising = x > AZ.xaz; // vapC rises with x above the azeotrope, falls below it
  for (let i = 0; i < 80; i++) { const m = (lo + hi) / 2; if ((vapC(m) > T) === rising) hi = m; else lo = m; }
  return (lo + hi) / 2;
}
const figC1: Diagram = {
  id: 'c12-01-C-d1',
  topic: 7,
  name: 'Azeotrope boiling-point diagram',
  cases: [{ chip: 'Minimum boiling', cap: CAPC1 }],
  draw() {
    const s = new Sketch(W, 348), f = FC;
    path(s, [[f.ox, Y(f, 103)], [f.ox, f.oy], [X(f, 1.03), f.oy]], { color: AXIS, w: 1.3 });
    [75, 80, 85, 90, 95, 100].forEach((T) => { path(s, [[f.ox - 4, Y(f, T)], [f.ox, Y(f, T)]], { color: AXIS, w: 1.2 }); s.sym(f.ox - 8, Y(f, T) + 4.5, String(T), { size: 13, anchor: 'end', color: C.slate }); });
    [0, 0.25, 0.5, 0.75, 1].forEach((u) => { path(s, [[X(f, u), f.oy], [X(f, u), f.oy + 4]], { color: AXIS, w: 1.2 }); s.sym(X(f, u), f.oy + 18, u.toFixed(2), { size: 13, color: C.slate }); });
    s.sym(14, 16, 'boiling point / °C', { size: 14, anchor: 'start' });
    s.sym(f.ox + 140, f.oy + 39, 'mole fraction of ethanol, <i>x</i><sub>ethanol</sub>', { size: 14 });
    // the azeotrope's two guides
    const q = at(f, AZ.xaz, AZ.Taz);
    path(s, [[f.ox, q[1]], q], { color: C.mari, w: 1.2, dash: true, name: 'Taz' });
    path(s, [q, [q[0], f.oy]], { color: C.mari, w: 1.2, dash: true, name: 'xaz' });
    s.sym(f.ox + 6, q[1] + 16, '78.1 °C', { size: 13, anchor: 'start', color: C.amber });
    s.sym(q[0], f.oy + 18, '<i>x</i><sub>az</sub>', { size: 14, color: C.amber });
    curve(s, f, liqC, 0, 1, { w: 2.2, name: 'liquid' });
    curve(s, f, vapC, 0, 1, { w: 2.2, color: C.slate, name: 'vapour' });
    s.dot(q[0], q[1], 4, C.mari);
    // the tags
    const xLens = 0.2, inLens = at(f, xLens, (liqC(xLens) + vapC(xLens)) / 2);
    const water = at(f, 0, AZ.Tw), eth = at(f, 1, AZ.Te);
    s.tag(60, 26, 'pure water: 100 °C', water[0], water[1]);
    s.tag(96, 54, 'liquid + vapour', inLens[0], inLens[1]);
    pill(s, 226, 30, ['pure ethanol:', '78.4 °C'], eth);
    pill(s, 150, 82, ['azeotrope', '(liquid and vapour', 'share one composition)'], q, { hi: true });
    const xv = 0.54, xl = 0.3;
    pill(s, 187, 140, ['vapour curve', '(dew point)'], at(f, xv, vapC(xv)));
    pill(s, 48, 205, ['liquid curve', '(bubble point)'], at(f, xl, liqC(xl)));
    return s;
  },
  check() {
    const s = figC1.draw(figC1.cases[0]), f = FC, out: Check[] = [];
    const read = (n: string) => lineOf(s, n).map(([x, y]): P => [uOf(f, x), vOf(f, y)]);
    const l = read('liquid'), v = read('vapour');
    const atX = (q: P[], x: number) => q.reduce((m, p) => (Math.abs(p[0] - x) < Math.abs(m[0] - x) ? p : m), q[0]);
    out.push([`The ends, read back: both curves start at pure water, ${AZ.Tw} °C, and end at pure ethanol, ${AZ.Te} °C`, close(l[0][1], AZ.Tw) && close(v[0][1], AZ.Tw) && close(l[l.length - 1][1], AZ.Te) && close(v[v.length - 1][1], AZ.Te)]);
    out.push([`They touch at x_az = ${AZ.xaz}, at ${AZ.Taz} °C: same temperature, same composition`, close(liqC(AZ.xaz), AZ.Taz) && close(vapC(AZ.xaz), AZ.Taz)]);
    const xs = samples(0, 1, 2000);
    const minOf = (fn: (x: number) => number) => xs.reduce((m, x) => (fn(x) < fn(m) ? x : m), 0);
    out.push([`That is the minimum of both curves (caption): the lowest liquid point is at x = ${fmt(minOf(liqC), 3)}, the lowest vapour point at x = ${fmt(minOf(vapC), 3)}, ${AZ.Taz} °C, below pure ethanol's ${AZ.Te} °C`, Math.abs(minOf(liqC) - AZ.xaz) < 0.001 && Math.abs(minOf(vapC) - AZ.xaz) < 0.001 && AZ.Taz < AZ.Te]);
    const e = 1e-6, slope = (fn: (x: number) => number, x: number) => (fn(x + e) - fn(x - e)) / (2 * e);
    out.push(['Both have zero slope where they touch (a smooth minimum, no corner)', Math.abs(slope(liqC, AZ.xaz)) < 1e-3 && Math.abs(slope(vapC, AZ.xaz)) < 1e-3]);
    out.push(['Vapour lies above liquid at every other composition: they meet only at the two pure ends and the azeotrope', xs.filter((x) => x > 0.001 && x < 0.999 && Math.abs(x - AZ.xaz) > 0.001).every((x) => vapC(x) > liqC(x))]);
    const y50 = tieC(0.5), y95 = tieC(0.95);
    out.push([`Why distillation stalls (p. 49): the vapour over a 50% liquid (x = 0.50) has y = ${fmt(y50, 3)}, richer but short of x_az; over x = 0.95 it has y = ${fmt(y95, 3)}, also toward x_az, never past it`, y50 > 0.5 && y50 < AZ.xaz && y95 < 0.95 && y95 > AZ.xaz && close(vapC(y50), liqC(0.5), 1e-6)]);
    out.push([`The liquid curve as printed: about 89.5 °C at x = 0.25, 82.3 at 0.50, 78.6 at 0.75 (computed ${fmt(liqC(0.25), 1)}, ${fmt(liqC(0.5), 1)}, ${fmt(liqC(0.75), 1)})`, Math.abs(liqC(0.25) - 89.5) < 0.5 && Math.abs(liqC(0.5) - 82.3) < 0.5 && Math.abs(liqC(0.75) - 78.6) < 0.5]);
    out.push([`The guides lead to the azeotrope: 78.1 °C on the temperature axis, x_az on the composition axis`, close(vOf(f, lineOf(s, 'Taz')[0][1]), AZ.Taz) && close(uOf(f, lineOf(s, 'xaz')[1][0]), AZ.xaz) && atX(l, AZ.xaz)[1] - AZ.Taz < 0.001]);
    out.push([`x_az = 0.89 is the standard 95.6% by mass: (95.6/46)/((95.6/46) + (4.4/18)) = ${fmt((95.6 / 46) / (95.6 / 46 + 4.4 / 18), 3)}`, Math.abs((95.6 / 46) / (95.6 / 46 + 4.4 / 18) - AZ.xaz) < 0.01]);
    out.push(['The labels as printed: 78.1 °C, x_az, pure water, pure ethanol, azeotrope, vapour curve, liquid curve, liquid + vapour', ['78.1 °C', 'xaz'].every((t) => s.labels.some((a) => a.text === t)) && ['pure water: 100 °C', 'pure ethanol: 78.4 °C', 'azeotrope (liquid and vapour share one composition)', 'vapour curve (dew point)', 'liquid curve (bubble point)', 'liquid + vapour'].every((t) => s.tags.some((a) => a.name === t))]);
    out.push(...layout(s));
    return out;
  },
};

export const DIAGRAMS_CHEMISTRY_12_01: Diagram[] = [fig11, fig12, fig13, fig14, fig15, fig16, figC1];
