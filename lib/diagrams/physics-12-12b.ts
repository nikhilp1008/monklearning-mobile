import { C, LABEL_GAP, Rect, Sketch, crosses, mathW, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * PHYSICS CLASS 12, CHAPTER 12 (Atoms), second half: Figures 12.8–12.10 of
 * the Master Reference book, redrawn. All three are printed on the "CHAPTER
 * 12 · FIGURES" page (p. 791); their captions are printed first on p. 790,
 * at the end of Topic 03's cheat sheet. Topic 03 (pp. 783–791) and the
 * Supplement (Additional topics A–F, pp. 792–814) have no unnumbered
 * drawings: pp. 783–814 were checked page by page; the rest is prose,
 * typeset equations, boxed results and tables (the series table on
 * pp. 784–785, the reduced-mass table on p. 793, the radiative-processes and
 * laser tables on pp. 802–803, the D₁ transition table on p. 808).
 *
 * Every figure is computed from the physics, never placed by eye: the levels
 * at E_n = −13.6/n² eV, the lines at the Rydberg wavelengths
 * 1/λ = R(1/n_f² − 1/n_i²) with the book's R = 1.097 × 10⁷ m⁻¹ (Hα 656.3,
 * Hβ 486.2, Hγ 434.1, Hδ 410.2, Hε 397.0 nm, the Balmer limit 4/R = 364.6 nm),
 * each spectrum on a linear wavelength scale. Each `check` recomputes what the
 * figure and its caption state and measures that no label or tag touches a
 * line it does not name.
 */

const W = 340;
type P = [number, number];
const close = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) < tol;
const fmt = (n: number, d = 2) => String(+n.toFixed(d)).replace('-', '−');
const len = (a: P, b: P) => Math.hypot(b[0] - a[0], b[1] - a[1]);
const add = (a: P, b: P, k = 1): P => [a[0] + k * b[0], a[1] + k * b[1]];
const sub = (a: P, b: P): P => [a[0] - b[0], a[1] - b[1]];
const dotp = (a: P, b: P) => a[0] * b[0] + a[1] * b[1];

/* ---------- drawing helpers (as in physics-12-10.ts) ---------- */
type Stroke = { color?: string; w?: number; dash?: 'dash' | 'dot'; free?: boolean };
const dashOf = (d?: Stroke['dash']) => (d === 'dash' ? ' stroke-dasharray="6 4"' : d === 'dot' ? ' stroke-dasharray="1.5 3.5"' : '');

/**
 * Every line a label must keep clear of (outlines, levels, lines, arrows), by
 * sketch: `clearance` measures each tag and label against them. Dotted guides
 * and hatching are left out (`free`).
 */
const LINES = new WeakMap<Sketch, P[][]>();
const keep = (s: Sketch, pts: P[]) => { const l = LINES.get(s) ?? []; l.push(pts); LINES.set(s, l); };
/** An open line through points: ink, rounded joins. */
function path(s: Sketch, pts: P[], o: Stroke = {}) {
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ');
  s.add(`<path d="${d}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}" stroke-linejoin="round" stroke-linecap="round"${dashOf(o.dash)}/>`);
  if (!o.free) keep(s, pts);
}
/** A closed outline, never filled. */
function outline(s: Sketch, pts: P[], o: Stroke = {}) {
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ') + ' Z';
  s.add(`<path d="${d}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}" stroke-linejoin="round"${dashOf(o.dash)}/>`);
  keep(s, [...pts, pts[0]]);
}
/** Every arrowhead drawn, by sketch, as its tip and its middle: a tag's dot keeps off them (`dotsOffHeads`). */
const HEADS = new WeakMap<Sketch, [P, P][]>();
/** Every arrowhead as the triangle drawn, by sketch. */
const INKS = new WeakMap<Sketch, P[][]>();
const headTri = (tip: P, u: P, L = 9, hw = 4.5): P[] => { const b = add(tip, u, -L), nv: P = [-u[1], u[0]]; return [tip, add(b, nv, hw), add(b, nv, -hw)]; };
const keepHead = (s: Sketch, tip: P, u: P, L: number, hw = 4.5) => {
  HEADS.set(s, [...(HEADS.get(s) ?? []), [tip, add(tip, u, -L / 2)]]);
  INKS.set(s, [...(INKS.get(s) ?? []), headTri(tip, u, L, hw)]);
};
/** Point-to-segment distance. */
function distSeg(p: P, a: P, b: P) {
  const d = sub(b, a), L = dotp(d, d) || 1, k = Math.max(0, Math.min(1, dotp(sub(p, a), d) / L));
  return len(p, add(a, d, k));
}
/** How far p is from a triangle's ink (0 inside it). */
const triDist = (t: P[], p: P) => {
  const side = (a: P, b: P) => (b[0] - a[0]) * (p[1] - a[1]) - (b[1] - a[1]) * (p[0] - a[0]);
  const s3 = t.map((a, i) => side(a, t[(i + 1) % 3]));
  if (s3.every((v) => v >= 0) || s3.every((v) => v <= 0)) return 0;
  return Math.min(...t.map((a, i) => distSeg(p, a, t[(i + 1) % 3])));
};
/** A tag's dot: Sketch.tag draws it 2.6 px in radius. */
const DOT_R = 2.6;
/** A small arrowhead with its tip at p, pointing along the unit direction u. */
function head(s: Sketch, p: P, u: P, color: string = C.ink, L = 9, hw = 4.5) {
  const tri = headTri(p, u, L, hw);
  s.add(`<path d="M${tri.map((q) => `${r1(q[0])} ${r1(q[1])}`).join(' L')} Z" fill="${color}"/>`);
  keep(s, [...tri, tri[0]]);
  keepHead(s, p, u, L, hw);
}
/**
 * A dotted guide, free of the clearance check (it only joins marks), but
 * never through a label or a tag. See `guideHits`.
 */
const GUIDES = new WeakMap<Sketch, [P, P][]>();
const guide = (s: Sketch, a: P, b: P, color: string = C.slate, dash: 'dot' | 'dash' = 'dot') => {
  GUIDES.set(s, [...(GUIDES.get(s) ?? []), [a, b]]);
  path(s, [a, b], { color, w: 1.1, dash, free: true });
};
/** Distance from a point to a rectangle (0 inside it). */
const rectDist = (r: Rect, p: P) => Math.hypot(Math.max(r[0] - p[0], 0, p[0] - r[2]), Math.max(r[1] - p[1], 0, p[1] - r[3]));
/** How far every tag and label stays from every kept line, sampled each half pixel: the closest one, and what it is. */
function clearance(s: Sketch): { gap: number; what: string } {
  let gap = Infinity, what = '';
  const boxes: [string, Rect][] = [...s.tags.map((t): [string, Rect] => [t.name, t.rect]), ...s.labels.map((l): [string, Rect] => [l.text, l.rect])];
  for (const pts of LINES.get(s) ?? []) {
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
/** The labels and tags a dotted guide runs through (more than 4 px into the box). */
const guideHits = (s: Sketch): string[] => {
  const boxes: [string, Rect][] = [...s.tags.map((t): [string, Rect] => [t.name, t.rect]), ...s.labels.map((l): [string, Rect] => [l.text, l.rect])];
  return [...new Set((GUIDES.get(s) ?? []).flatMap(([a, b]) => boxes.filter(([, r]) => crosses(a, b, r, 4)).map(([name]) => name)))];
};
/** The check every figure makes on its own layout: labels clear of the lines, and no dotted guide through a label. */
const clearCheck = (s: Sketch): Check => {
  const { gap, what } = clearance(s);
  const through = guideHits(s);
  return [
    `Every tag and label stays at least ${LABEL_GAP} px clear of every line: the closest is "${what}", ${fmt(gap, 1)} px; no dotted guide runs through one${through.length ? ` (but through ${through.map((t) => `"${t}"`).join(', ')})` : ''}`,
    gap >= LABEL_GAP - 1e-9 && !through.length,
  ];
};
/** No two labels on one drawing touch (the kit's audit checks tags; this checks the STIX labels against each other). */
const labelsApart = (s: Sketch): Check => {
  const L = s.labels;
  const bad = L.flatMap((a, i) => L.slice(i + 1).filter((b) => !(a.rect[2] + 2 <= b.rect[0] || b.rect[2] + 2 <= a.rect[0] || a.rect[3] + 2 <= b.rect[1] || b.rect[3] + 2 <= a.rect[1])).map((b) => `${a.text} / ${b.text}`));
  return [`No two symbols or labels on the drawing touch${bad.length ? `: ${bad.join(', ')}` : ''}`, bad.length === 0];
};
/** No tag's dot on an arrowhead: there it reads as naming the arrow and hides its head. Within 8 px of a head's tip or middle. */
const dotsOffHeads = (s: Sketch): Check => {
  const bad = s.tags.filter((t) => t.from && (HEADS.get(s) ?? []).some((h) => h.some((q) => len(q, t.from as P) < 8))).map((t) => t.name);
  return [`No tag's dot sits on an arrowhead${bad.length ? `: ${bad.join(', ')}` : ''}`, bad.length === 0];
};
/** And no tag's dot beside an arrowhead either: at least HEAD_CLEAR px of white between the dot and the head's ink. */
const HEAD_CLEAR = 6;
const dotClear = (s: Sketch, at: P) => Math.min(Infinity, ...(INKS.get(s) ?? []).map((t) => triDist(t, at))) - DOT_R;
const dotsClearOfHeads = (s: Sketch): Check => {
  const near = s.tags.filter((t) => t.from).map((t) => ({ name: t.name, gap: dotClear(s, t.from as P) })).sort((a, b) => a.gap - b.gap);
  return [`Every tag's dot keeps at least ${HEAD_CLEAR} px clear of every arrowhead${near.length ? `: the closest is "${near[0].name}", ${fmt(near[0].gap, 1)} px` : ''}`, near.every((n) => n.gap >= HEAD_CLEAR - 1e-9)];
};
/** Every label inside the frame (the kit's audit checks tags only). */
const inFrame = (s: Sketch): Check => {
  const out = s.labels.filter((l) => l.rect[0] < 0 || l.rect[2] > s.w || l.rect[1] < 0 || l.rect[3] > s.h).map((l) => l.text);
  return [`Every label lies inside the frame${out.length ? `: not ${out.join(', ')}` : ''}`, out.length === 0];
};
/** The layout checks of a drawn sketch. */
const layout = (s: Sketch): Check[] => [clearCheck(s), labelsApart(s), dotsOffHeads(s), dotsClearOfHeads(s), inFrame(s)];
/**
 * The result (what the figure states), bottom right, ink-edged, maths set in
 * STIX (Sketch.text). Registered as a tag, so the audit keeps everything else off it.
 */
function resultBlock(s: Sketch, lines: string[], o: { size?: number } = {}): Rect {
  const size = o.size ?? 15, lh = size + 8;
  const plain = (t: string) => t.replace(/<\/?(?:i|sub|sup)>/g, '');
  const w = Math.max(...lines.map((t) => mathW(t, size))) + 30, h = lines.length * lh + 14;
  const x0 = s.w - 8 - w, y0 = s.h - 8 - h;
  s.tags.push({ name: plain(lines.join(' ')), rect: [x0, y0, x0 + w, y0 + h], from: null, to: null });
  s.add(`<rect x="${r1(x0)}" y="${r1(y0)}" width="${r1(w)}" height="${r1(h)}" rx="15" fill="#fff" stroke="${C.text}" stroke-width="1.6"/>`);
  lines.forEach((t, i) => s.text(x0 + w / 2, y0 + 7 + lh * i + lh / 2 + size * 0.36, t, { size, semibold: true }));
  return [x0, y0, x0 + w, y0 + h];
}

/* ---------- the hydrogen atom, from the book's numbers ---------- */
/** The book's Rydberg constant (p. 784), m⁻¹. */
const RH = 1.097e7;
/** Bohr's levels, eV: E_n = −13.6/n² (E = 0 at n = ∞). */
const En = (n: number) => (Number.isFinite(n) ? -13.6 / n ** 2 : 0);
/** The Rydberg wavelength of n_i → n_f, in nm (n_i = ∞ is the series limit n_f²/R). */
const lamNm = (nf: number, ni: number) => 1e9 / (RH * (1 / nf ** 2 - (Number.isFinite(ni) ? 1 / ni ** 2 : 0)));
const GREEK = ['α', 'β', 'γ', 'δ', 'ε'];
/** Balmer line names: Hα is 3 → 2, Hβ 4 → 2, … */
const hName = (ni: number) => `H<sub>${GREEK[ni - 3]}</sub>`;

/* ===================================================================== */
/* Figure 12.8 · the hydrogen series on the level diagram (topic 03)      */
/* ===================================================================== */
/**
 * The levels n = 2 … 6 and n = ∞ (E = 0) are drawn to scale, 62 px per eV,
 * from E_n = −13.6/n² eV. The 10.2 eV gap from n = 2 down to n = 1 would take
 * 632 px at that scale, so it is shortened to 64 px and the Lyman arrows carry
 * a break across it (the book's own drawing shortens it too, without a mark).
 * The arrows are the book's: each series' first lines and its series limit
 * (from n = ∞), all ending on n_f, pointing down (emission). Balmer's three
 * visible lines are the highlight; its limit arrow (∞ → 2, 364.6 nm, near UV)
 * is drawn in ink.
 */
const G128 = { y0: 112, k: 62, gap: 64, xL: 106, xR: 334, d: 8, brk: 348 };
type Series = { name: string; nf: number; from: number[]; cx: number; row: 0 | 1; sub: string; hi?: boolean; end?: boolean };
const SERIES: Series[] = [
  { name: 'Lyman', nf: 1, from: [2, 3, 4, Infinity], cx: 124, row: 0, sub: '<i>n</i> → 1 (UV)' },
  { name: 'Balmer', nf: 2, from: [3, 4, 5, Infinity], cx: 172, row: 1, sub: '<i>n</i> → 2 (visible)', hi: true },
  { name: 'Paschen', nf: 3, from: [4, 5, 6, Infinity], cx: 222, row: 0, sub: '<i>n</i> → 3 (IR)' },
  { name: 'Brackett', nf: 4, from: [5, 6, Infinity], cx: 266, row: 1, sub: '<i>n</i> → 4 (IR)' },
  { name: 'Pfund', nf: 5, from: [6, Infinity], cx: 312, row: 0, sub: '<i>n</i> → 5 (IR)', end: true },
];
const LEVELS = [Infinity, 6, 5, 4, 3, 2, 1];
const yLev = (n: number): number => (n === 1 ? yLev(2) + G128.gap : G128.y0 - G128.k * En(n));
const arrowXs = (se: Series) => se.from.map((_, i) => se.cx + G128.d * (i - (se.from.length - 1) / 2));
/** The level's energy as the book prints it: two decimals, eV. */
const eLabel = (n: number) => (Number.isFinite(n) ? `−${(-En(n)).toFixed(2)} eV` : '<i>E</i> = 0');
/** The level labels' baselines: each at its level, pushed down where two would touch (16 px apart). */
const labelYs = () => LEVELS.reduce<number[]>((acc, n, i) => [...acc, i ? Math.max(yLev(n), acc[i - 1] + 16) : yLev(n)], []);
/** The break's two slanted strokes across the Lyman arrows: the y of each at x. */
const brkY = (x: number, j: 0 | 1) => G128.brk + 10 * j + 2 - (4 * (x - G128.xL)) / 44;
const BALMER_KEY = [3, 4, 5];
const fig128: Diagram = {
  id: 'p12-12-fig-12.8',
  topic: 2,
  name: 'Hydrogen spectral series',
  cases: [{ chip: 'Five series', cap: 'Hydrogen series: transitions ending on <i>n</i> = 1 (Lyman, UV), 2 (Balmer, visible), 3 (Paschen), 4 (Brackett) and 5 (Pfund), all IR.' }],
  draw() {
    const s = new Sketch(W, 404);
    const { y0, xL, xR } = G128;
    // the levels, n = ∞ dashed
    LEVELS.forEach((n) => path(s, [[xL, yLev(n)], [xR, yLev(n)]], { w: Number.isFinite(n) ? 1.9 : 1.4, dash: Number.isFinite(n) ? undefined : 'dash', color: Number.isFinite(n) ? C.ink : C.slate }));
    // their labels, on the left, joined to the level by a short line
    const ys = labelYs();
    LEVELS.forEach((n, i) => {
      s.sym(4, ys[i] + 4, `<i>n</i> = ${Number.isFinite(n) ? n : '∞'}`, { size: 13, anchor: 'start' });
      s.sym(98, ys[i] + 4, eLabel(n), { size: 13, anchor: 'end' });
      guide(s, [100, ys[i]], [xL - 1, yLev(n)], C.slate, 'dash');
    });
    // the transitions: each series' arrows, down to n_f
    SERIES.forEach((se) => {
      arrowXs(se).forEach((x, i) => {
        // Balmer's visible lines are the highlight; its series limit (∞ → 2, 364.6 nm) is near-UV, so it is drawn in ink
        const hi = se.hi && Number.isFinite(se.from[i]);
        const col = hi ? C.mari : C.ink, w = hi ? 2.2 : 1.6;
        const top = yLev(se.from[i]), bot = yLev(se.nf);
        if (se.nf === 1) {
          path(s, [[x, top], [x, brkY(x, 0)]], { color: col, w });
          path(s, [[x, brkY(x, 1)], [x, bot - 6]], { color: col, w });
        } else path(s, [[x, top], [x, bot - 6]], { color: col, w });
        head(s, [x, bot], [0, 1], col, 7, 3.2);
      });
      // the group's bracket, which its tag names
      const xs = arrowXs(se), a = xs[0] - 4, b = xs[xs.length - 1] + 4, yb = y0 - 8;
      path(s, [[a, yb + 4], [a, yb], [b, yb], [b, yb + 4]], { color: C.slate, w: 1.2 });
    });
    // the break across the Lyman arrows (the gap to n = 1 is shortened)
    const ly = arrowXs(SERIES[0]), bx0 = ly[0] - 8, bx1 = ly[ly.length - 1] + 8;
    ([0, 1] as const).forEach((j) => path(s, [[bx0, brkY(bx0, j)], [bx1, brkY(bx1, j)]], { color: C.slate, w: 1.3 }));
    // the series' destinations and regions, over their tags (the tag's line leaves from its foot)
    SERIES.forEach((se) => {
      const tw = se.name.length * 12 * 0.56 + 20, cx = se.end ? 336 - tw / 2 : se.cx;
      s.sym(cx, se.row ? 58 : 12, se.sub, { size: 11, color: se.hi ? C.amber : C.slate });
    });
    // the Balmer lines, as the book lists them
    s.sym(192, 234, 'Balmer lines (visible):', { size: 12, anchor: 'start', color: C.amber });
    BALMER_KEY.forEach((ni, i) => s.sym(192, 252 + 18 * i, `${ni} → 2 ${hName(ni)} ${fmt(lamNm(2, ni), 0)} nm`, { size: 12, anchor: 'start' }));
    s.place(SERIES.map((se) => ({ t: se.name, hi: se.hi, p: [se.cx, y0 - 8] as P, at: [se.end ? [336, 20, 'end'] : [se.cx, se.row ? 66 : 20, 'middle']] as [number, number, 'start' | 'middle' | 'end'][] })));
    return s;
  },
  check() {
    const { y0, k, gap } = G128;
    const s = fig128.draw(fig128.cases[0]);
    const ys = labelYs();
    const book = ['<i>E</i> = 0', '−0.38 eV', '−0.54 eV', '−0.85 eV', '−1.51 eV', '−3.40 eV', '−13.60 eV'];
    const upper = LEVELS.filter((n) => n !== 1);
    const lam = (se: Series) => se.from.map((ni) => lamNm(se.nf, ni));
    const all = SERIES.flatMap((se) => se.from.map((ni) => ({ se, ni, x: arrowXs(se)[se.from.indexOf(ni)] })));
    return [
      [`Levels n = 2 … 6 and ∞ drawn to scale at ${k} px per eV from E_n = −13.6/n² eV: ${upper.map((n) => `${Number.isFinite(n) ? n : '∞'} at ${fmt(yLev(n) - y0, 1)} px below E = 0`).join(', ')}`, upper.every((n) => close(yLev(n) - y0, -k * En(n), 1e-9))],
      [`The level labels read the book's values (−13.6/n² eV to two decimals): ${LEVELS.map((n) => eLabel(n).replace(/<\/?i>/g, '')).join(', ')}`, LEVELS.every((n, i) => eLabel(n) === book[i]) && LEVELS.every((n) => n === Infinity || close(+eLabel(n).replace('−', '-').replace(' eV', ''), En(n), 0.005))],
      [`Each label sits at its level, or just below where two would touch (16 px apart), joined to it: the largest offset is ${fmt(Math.max(...LEVELS.map((n, i) => ys[i] - yLev(n))), 1)} px`, LEVELS.every((n, i) => ys[i] >= yLev(n) - 1e-9 && ys[i] - yLev(n) < 8 && (!i || ys[i] - ys[i - 1] >= 16 - 1e-9))],
      [`n = 1 lies below n = 2 (the 10.2 eV gap shortened to ${gap} px, ${fmt(gap / k, 2)} eV at the drawn scale, and marked by the break on the Lyman arrows)`, yLev(1) - yLev(2) === gap && close(En(2) - En(1), 10.2, 1e-9) && gap < (En(2) - En(1)) * k],
      [`Every arrow runs down from its upper level and ends on n_f (emission): ${SERIES.map((se) => `${se.name} ${se.from.map((n) => (Number.isFinite(n) ? n : '∞')).join(',')} → ${se.nf}`).join('; ')}`, all.every(({ se, ni }) => ni > se.nf && yLev(ni) < yLev(se.nf))],
      [`Above n = 2 each arrow's length is k ΔE, the photon energy: Paschen 4 → 3 ${fmt(yLev(3) - yLev(4), 2)} px = ${k} × ${fmt(En(4) - En(3), 4)} eV, Pfund ∞ → 5 ${fmt(yLev(5) - yLev(Infinity), 2)} px = ${k} × ${fmt(-En(5), 4)} eV`, all.filter(({ se }) => se.nf > 1).every(({ se, ni }) => close(yLev(se.nf) - yLev(ni), k * (En(ni) - En(se.nf)), 1e-9))],
      [`Within each series the arrows lengthen left to right, to the series limit from n = ∞: the wavelength falls (Lyman ${lam(SERIES[0]).map((l) => fmt(l, 1)).join(', ')} nm)`, SERIES.every((se) => lam(se).every((l, i, a) => !i || l < a[i - 1]) && se.from[se.from.length - 1] === Infinity)],
      [`Lyman in the UV: ${fmt(lamNm(1, 2), 2)} nm down to the limit ${fmt(lamNm(1, Infinity), 2)} nm (the book's table: 121.6 and 91.2 nm)`, lam(SERIES[0]).every((l) => l < 380) && close(lamNm(1, 2), 121.6, 0.1) && fmt(lamNm(1, Infinity), 1) === '91.2'],
      [`Balmer's drawn lines 3, 4, 5 → 2 are visible (${BALMER_KEY.map((n) => fmt(lamNm(2, n), 1)).join(', ')} nm, in 380–700 nm); its limit is ${fmt(lamNm(2, Infinity), 1)} nm (the book's 364.6 nm)`, BALMER_KEY.every((n) => lamNm(2, n) > 380 && lamNm(2, n) < 700) && fmt(lamNm(2, Infinity), 1) === '364.6'],
      [`Paschen, Brackett and Pfund all in the IR: shortest lines (their limits) ${fmt(lamNm(3, Infinity), 1)}, ${fmt(lamNm(4, Infinity), 1)}, ${fmt(lamNm(5, Infinity), 1)} nm (the table: 820.4, 1459, 2279 nm), all above 700 nm`, SERIES.slice(2).every((se) => lam(se).every((l) => l > 700)) && close(lamNm(3, Infinity), 820.4, 0.1) && fmt(lamNm(4, Infinity), 0) === '1459' && close(lamNm(5, Infinity), 2279, 0.6)],
      [`The Balmer key: 3 → 2 Hα ${fmt(lamNm(2, 3), 1)}, 4 → 2 Hβ ${fmt(lamNm(2, 4), 1)}, 5 → 2 Hγ ${fmt(lamNm(2, 5), 1)} nm, printed as the book's 656, 486, 434 nm`, [656, 486, 434].every((v, i) => fmt(lamNm(2, BALMER_KEY[i]), 0) === String(v))],
      [`Balmer's limit arrow (∞ → 2, ${fmt(lamNm(2, Infinity), 1)} nm) lies below 380 nm, in the near UV, so it is drawn in ink; only the visible lines 3, 4, 5 → 2 carry the highlight`, lamNm(2, Infinity) < 380 && BALMER_KEY.every((n) => lamNm(2, n) > 380) && (s.svg().match(new RegExp(`stroke="${C.mari}" stroke-width="2.2"`, 'g')) ?? []).length === 3],
      ['Each series is named on the bracket over its own arrows; Balmer, the visible series, is the highlight', SERIES.every((se) => { const t = s.tags.find((tg) => tg.name === se.name); return !!t && !!t.from && close(t.from[0], se.cx) && arrowXs(se)[0] - 4 < se.cx && se.cx < arrowXs(se)[arrowXs(se).length - 1] + 4; }) && SERIES.filter((se) => se.hi).map((se) => se.name).join() === 'Balmer'],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* Figure 12.9 · emission and absorption spectra (topic 03)               */
/* ===================================================================== */
/**
 * Two strips on one linear wavelength scale, 380–720 nm (0.9 px per nm), as
 * the book draws them: the emission spectrum (bright Balmer lines, drawn in
 * marigold; the dark ground cannot be filled) and the absorption spectrum (a
 * continuum, drawn as grey hatching, with dark lines). Both carry Hα–Hδ at the
 * Rydberg wavelengths, so the lines line up.
 */
const G129 = { xa: 20, xb: 326, l0: 380, l1: 720, eT: 62, eB: 94, aT: 126, aB: 158 };
const x129 = (lam: number) => G129.xa + ((lam - G129.l0) * (G129.xb - G129.xa)) / (G129.l1 - G129.l0);
const LINES129 = [6, 5, 4, 3];
/** The x of each bright (emission) and dark (absorption) line as drawn, by sketch. */
const DRAWN129 = new WeakMap<Sketch, { em: number[]; ab: number[]; hatch: number[]; win: number[] }>();
/** Each line's label: its row (1 the highest) and where it is set. */
const LAB129: Record<number, { row: number; dx: number; anchor: 'start' | 'middle' }> = { 6: { row: 0, dx: 0, anchor: 'middle' }, 5: { row: 1, dx: -10, anchor: 'start' }, 4: { row: 2, dx: 0, anchor: 'middle' }, 3: { row: 2, dx: 0, anchor: 'middle' } };
const fig129: Diagram = {
  id: 'p12-12-fig-12.9',
  topic: 2,
  name: 'Emission and absorption spectra',
  cases: [{ chip: 'Same wavelengths', cap: 'Hydrogen emission and absorption spectra: bright and dark lines occur at the same Balmer wavelengths.' }],
  draw() {
    const s = new Sketch(W, 270);
    const { xa, xb, eT, eB, aT, aB } = G129;
    outline(s, [[xa, eT], [xb, eT], [xb, eB], [xa, eB]], { w: 1.5 });
    outline(s, [[xa, aT], [xb, aT], [xb, aB], [xa, aB]], { w: 1.5 });
    const xs = LINES129.map((n) => x129(lamNm(2, n)));
    // the strips' names, inside them, between Hβ and Hα
    const win = (t: string) => { const w = t.length * 12 * 0.56 + 20, x0 = (xs[2] + xs[3]) / 2 - w / 2; return [x0, x0 + w]; };
    s.tag(win('Emission')[0], eT + 5, 'Emission', null, null, { hi: true });
    s.tag(win('Absorption')[0], aT + 5, 'Absorption', null, null);
    // the absorption strip's continuum: grey hatching, broken only at the dark lines (and behind its name)
    const [w0, w1] = win('Absorption');
    const drawn = { em: [] as number[], ab: [] as number[], hatch: [] as number[], win: [w0 - 3, w1 + 3] };
    DRAWN129.set(s, drawn);
    for (let x = xa + 3; x < xb - 1; x += 3.4) {
      if (xs.some((xl) => Math.abs(x - xl) < 3.4) || (x > w0 - 3 && x < w1 + 3)) continue;
      path(s, [[x, aT + 2], [x, aB - 2]], { color: C.grey, w: 1, free: true });
      drawn.hatch.push(x);
    }
    xs.forEach((x) => {
      path(s, [[x, eT + 1.5], [x, eB - 1.5]], { color: C.mari, w: 3.2 });
      path(s, [[x, aT + 1.5], [x, aB - 1.5]], { color: C.ink, w: 3.2 });
      drawn.em.push(x);
      drawn.ab.push(x);
      guide(s, [x, eB + 3], [x, aT - 3], C.ink);
    });
    // the lines' names and wavelengths, staggered over three rows
    LINES129.forEach((n, i) => {
      const L = LAB129[n], y = 16 + 18 * L.row;
      s.sym(xs[i] + L.dx, y, `${hName(n)} ${fmt(lamNm(2, n), 0)} nm`, { size: 13, anchor: L.anchor });
      guide(s, [xs[i], y + 6], [xs[i], eT - 3]);
    });
    // the wavelength scale
    for (let l = 400; l <= 700; l += 50) {
      const x = x129(l);
      path(s, [[x, aB], [x, aB + 5]], { color: C.slate, w: 1.2 });
      s.sym(x, aB + 19, String(l), { size: 12, color: C.slate });
    }
    s.sym((xa + xb) / 2, aB + 38, 'wavelength (nm)', { size: 13, color: C.slate });
    resultBlock(s, ['Dark lines fall at the same', 'wavelengths as the bright lines'], { size: 13 });
    return s;
  },
  check() {
    const { xa, xb, l0, l1, eT, eB, aT, aB } = G129;
    const s = fig129.draw(fig129.cases[0]);
    const lams = LINES129.map((n) => lamNm(2, n));
    const { em, ab, hatch, win } = DRAWN129.get(s) ?? { em: [], ab: [], hatch: [], win: [] };
    // every break in the hatching (wider than its 3.4 px step) holds a dark line or the strip's name
    const breaks = hatch.slice(1).map((x, i): [number, number] => [hatch[i], x]).filter(([a, b]) => b - a > 3.5);
    const explained = breaks.every(([a, b]) => ab.some((x) => x > a && x < b) || (win[0] < b && win[1] > a));
    return [
      [`The Balmer lines from 1/λ = R(1/4 − 1/n²), R = 1.097 × 10⁷ m⁻¹: Hδ ${fmt(lams[0], 1)}, Hγ ${fmt(lams[1], 1)}, Hβ ${fmt(lams[2], 1)}, Hα ${fmt(lams[3], 1)} nm, labelled as the book's 410, 434, 486, 656 nm`, [410, 434, 486, 656].every((v, i) => fmt(lams[i], 0) === String(v))],
      [`On a linear scale, ${l0}–${l1} nm across ${xb - xa} px: each line drawn at x = ${lams.map((l) => fmt(x129(l), 1)).join(', ')} px`, lams.every((l) => close(x129(l), xa + ((l - l0) * (xb - xa)) / (l1 - l0), 1e-9) && l > l0 && l < l1)],
      [`The bright lines (emission, ${em.length}) and the dark lines (absorption, ${ab.length}) sit at the same x: ${em.map((x) => fmt(x, 1)).join(', ')} px`, em.length === 4 && ab.length === 4 && em.every((x, i) => close(x, x129(lams[i]), 1e-9) && close(x, ab[i], 1e-9))],
      ['Hδ, Hγ, Hβ, Hα are the jumps 6, 5, 4, 3 → 2, in order of rising wavelength (rising λ means falling photon energy)', lams.every((l, i) => !i || l > lams[i - 1]) && LINES129.every((n, i) => !i || En(n) - En(2) < En(LINES129[i - 1]) - En(2))],
      [`The absorption strip is a continuum (hatching ${hatch.length} strokes, ${fmt(hatch[0] - xa, 1)} to ${fmt(xb - hatch[hatch.length - 1], 1)} px from its ends) broken only at the four dark lines and behind its name (${breaks.length} breaks), never closer than 2 px to a line; the two strips match (${eB - eT} px tall)`, explained && breaks.length === 5 && hatch.every((x) => ab.every((l) => Math.abs(x - l) >= 2)) && hatch[0] - xa < 4 && xb - hatch[hatch.length - 1] < 5 && eB - eT === aB - aT],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* Figure 12.10 · the Balmer series crowding to its limit (topic 03)      */
/* ===================================================================== */
/**
 * The Balmer lines n → 2 on a linear wavelength scale, 355–700 nm (0.91 px per
 * nm), at the Rydberg wavelengths. Hα–Hε are named as the book names them;
 * the lines beyond Hε run on to n = 20 (368.3 nm), piling up as the book
 * draws them, and stop 3.4 px short of the series limit 4/R = 364.6 nm
 * (dashed) so that the limit's own mark stays clear. The visible region (380–700 nm) is outlined, not
 * shaded.
 */
const G1210 = { xa: 14, xb: 328, l0: 355, l1: 700, ax: 146, lt: 128, vis: [380, 700] as [number, number] };
const x1210 = (lam: number) => G1210.xa + ((lam - G1210.l0) * (G1210.xb - G1210.xa)) / (G1210.l1 - G1210.l0);
/** The Balmer lines drawn: n = 3 (Hα) to 20. */
const NMAX1210 = 20;
const balmerNs = () => Array.from({ length: NMAX1210 - 2 }, (_, i) => i + 3);
/** The named lines' labels: the row (0 upper, 1 lower, as the book staggers Hδ). */
const ROW1210: Record<number, number> = { 3: 0, 4: 0, 5: 0, 6: 1, 7: 0 };
const fig1210: Diagram = {
  id: 'p12-12-fig-12.10',
  topic: 2,
  name: 'Balmer lines crowding to the limit',
  cases: [{ chip: 'Series limit', cap: 'Balmer series: the lines crowd together from Hα (656 nm) toward the series limit at 364.6 nm.' }],
  draw() {
    const s = new Sketch(W, 236);
    const { xa, xb, ax, lt, vis } = G1210;
    // the visible region, outlined
    const v0 = x1210(vis[0]), v1 = x1210(vis[1]);
    outline(s, [[v0, 108], [v1 - 1, 108], [v1 - 1, ax + 4], [v0, ax + 4]], { color: C.grey, w: 1.2, dash: 'dash' });
    // the axis and its scale
    path(s, [[xa, ax], [xb, ax]], { color: C.slate, w: 1.3 });
    for (let l = 400; l <= 700; l += 50) {
      const x = x1210(l);
      path(s, [[x, ax], [x, ax + 5]], { color: C.slate, w: 1.2 });
      s.sym(x, ax + 20, String(l), { size: 12, color: C.slate, anchor: l === 700 ? 'end' : 'middle' });
    }
    s.sym((xa + xb) / 2, ax + 40, 'wavelength <i>λ</i> (nm)', { size: 13, color: C.slate });
    // the lines
    balmerNs().forEach((n) => { const x = x1210(lamNm(2, n)); path(s, [[x, lt], [x, ax]], { w: n <= 7 ? 2.2 : 0.9 }); });
    // the series limit, dashed
    const xl = x1210(lamNm(2, Infinity));
    path(s, [[xl, lt - 6], [xl, ax + 6]], { color: C.mari, w: 2.4, dash: 'dash' });
    // the named lines: name over wavelength
    [3, 4, 5, 6, 7].forEach((n) => {
      const x = x1210(lamNm(2, n)), y = 50 + 34 * ROW1210[n];
      s.sym(x, y, hName(n), { size: 13 });
      s.sym(x, y + 15, fmt(lamNm(2, n), 0), { size: 12 });
      guide(s, [x, y + 20], [x, lt - 3]);
    });
    // the lines crowd to the left, toward the limit
    const ya = 118, xs = x1210(500), xe = x1210(385);
    path(s, [[xs, ya], [xe + 8, ya]], { color: C.slate, w: 1.6 });
    head(s, [xe, ya], [-1, 0], C.slate, 8, 3.8);
    // the region's name, inside it, between Hβ and Hα
    s.tag(x1210(lamNm(2, 4)) + 26, 112, 'Visible region', null, null);
    resultBlock(s, ['Lines crowd together toward the limit'], { size: 13 });
    s.place([{ t: 'Series limit', hi: true, p: [xl, lt - 6], at: [[4, 6, 'start']] }]);
    const sl = s.tags.find((t) => t.name === 'Series limit');
    if (sl) s.sym(sl.rect[2] + 8, 22, '364.6 nm', { size: 13, anchor: 'start', color: C.amber });
    return s;
  },
  check() {
    const { xa, xb, l0, l1, vis } = G1210;
    const s = fig1210.draw(fig1210.cases[0]);
    const ns = balmerNs(), lams = ns.map((n) => lamNm(2, n)), xs = lams.map(x1210);
    const gaps = xs.slice(1).map((x, i) => xs[i] - x);
    const lim = lamNm(2, Infinity);
    const sl = s.tags.find((t) => t.name === 'Series limit');
    return [
      [`The lines at 1/λ = R(1/4 − 1/n²), R = 1.097 × 10⁷ m⁻¹: ${[3, 4, 5, 6, 7].map((n) => `H${GREEK[n - 3]} ${fmt(lamNm(2, n), 1)}`).join(', ')} nm, labelled as the book's 656, 486, 434, 410, 397`, [656, 486, 434, 410, 397].every((v, i) => fmt(lamNm(2, i + 3), 0) === String(v))],
      [`The series limit (n → ∞) is 4/R = ${fmt(lim, 2)} nm (the book's 364.6 nm), drawn dashed at x = ${fmt(x1210(lim), 1)} px; every line lies on its long-wavelength side`, fmt(lim, 1) === '364.6' && close(lim, 4e9 / RH, 1e-9) && lams.every((l) => l > lim)],
      [`The lines crowd together: drawn ${ns.length} lines (n = 3 … ${ns[ns.length - 1]}), the gaps between neighbours shrink steadily, ${fmt(gaps[0], 1)} px (Hα–Hβ) down to ${fmt(gaps[gaps.length - 1], 2)} px, the last (${fmt(lams[lams.length - 1], 1)} nm) ${fmt(xs[xs.length - 1] - x1210(lim), 1)} px from the limit, clear of its mark`, gaps.every((g, i) => !i || g < gaps[i - 1]) && xs[xs.length - 1] - x1210(lim) > 3 && xs[xs.length - 1] - x1210(lim) < 4],
      [`A linear scale, ${l0}–${l1} nm across ${xb - xa} px; the visible region (${vis[0]}–${vis[1]} nm) holds Hα to Hε, while the limit (${fmt(lim, 1)} nm) lies just outside it in the near UV`, [3, 4, 5, 6, 7].every((n) => lamNm(2, n) > vis[0] && lamNm(2, n) < vis[1]) && lim < vis[0]],
      ['The “Series limit” tag names the dashed limit line, with its value 364.6 nm beside it', !!sl && !!sl.from && close(sl.from[0], x1210(lim), 1e-9)],
      ...layout(s),
    ];
  },
};

export const DIAGRAMS_PHYSICS_12_12B: Diagram[] = [fig128, fig129, fig1210];
