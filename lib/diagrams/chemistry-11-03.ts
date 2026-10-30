import { C, LABEL_GAP, Rect, Sketch, mathW, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * CHEMISTRY CLASS 11, CHAPTER 3 (Classification of Elements and Periodicity
 * in Properties): every drawing of the Master Reference book on pp. 117–162,
 * redrawn. Pages 117–162 were checked one by one on the page images: p. 117
 * is the title page, p. 118 the contents and the start of Topic 01; the
 * chapter's only drawings are its four numbered figures, each on a
 * "CHAPTER 3 · FIGURES" page, with the caption printed a first time where the
 * text cites it, followed by "(see next page)" (dropped: the captions here are
 * taken from the figure pages, which have no pointer):
 *   Figure 3.1  the long form of the periodic table (p. 122, Topic 01)
 *   Figure 3.2  first ionisation enthalpy against Z = 1–20 (p. 131, Topic 02)
 *   Figure 3.3  Period 3 trends (p. 139, Topic 03)
 *   Figure 3.4  the s-, p-, d- and f-blocks (p. 147, Topic 04)
 * Judged NOT drawings: the period/subshell table and the IUPAC-roots table
 * (p. 119), the atomic-radius tables (p. 128), the valence and oxidation-state
 * tables (p. 136), the four-blocks table (p. 144), the oxide-class table
 * (p. 151), the ionisation-data table (p. 156) and the "Distribution" table
 * (p. 158): all tables. Everything else is prose, lists and typeset equations.
 *
 * "No fills ever": the book SHADES its blocks; here each block is named by a
 * line drawn round it (ink) and a tag, and the metalloid staircase is the one
 * marigold highlight. The tables are drawn from the book's own rows (as
 * printed) and the `check`s read every symbol back off the drawing and
 * compare it with a position computed from Z alone (the period ends at the
 * noble gases 2, 10, 18, 36, 54, 86, 118), and each block outline with the
 * subshell the differentiating electron enters in simple Aufbau (n + l)
 * order. Figure 3.2 plots the standard NCERT first ionisation enthalpies
 * (the values the chapter itself quotes are checked against them), Figure
 * 3.3 recomputes each oxide's oxidation state and the electronegativity trend.
 */

const W = 340;
type P = [number, number];
const fmt = (n: number, d = 1) => String(+n.toFixed(d)).replace('-', '−');
const len = (a: P, b: P) => Math.hypot(b[0] - a[0], b[1] - a[1]);

/* ---------- drawing helpers (as in chemistry-11-01.ts / -02.ts) ---------- */
type Stroke = { color?: string; w?: number; dash?: 'dash' | 'dot'; free?: boolean; edge?: boolean };
const dashOf = (d?: Stroke['dash']) => (d === 'dash' ? ' stroke-dasharray="5 4"' : d === 'dot' ? ' stroke-dasharray="1.5 3.5"' : '');
/** Lines every tag AND label must keep clear of (the staircase, the curve, leaders). */
const LINES = new WeakMap<Sketch, P[][]>();
/** Block outlines: tags keep clear of them; the symbols sit inside their own cells, which a separate check measures. */
const EDGES = new WeakMap<Sketch, P[][]>();
const keep = (m: WeakMap<Sketch, P[][]>, s: Sketch, pts: P[]) => { const l = m.get(s) ?? []; l.push(pts); m.set(s, l); };
function path(s: Sketch, pts: P[], o: Stroke = {}) {
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ');
  s.add(`<path d="${d}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}" stroke-linejoin="round" stroke-linecap="round"${dashOf(o.dash)}/>`);
  if (o.edge) keep(EDGES, s, pts);
  else if (!o.free) keep(LINES, s, pts);
}
const rectDist = (r: Rect, p: P) => Math.hypot(Math.max(r[0] - p[0], 0, p[0] - r[2]), Math.max(r[1] - p[1], 0, p[1] - r[3]));
const segDist = (p: P, a: P, b: P) => {
  const dx = b[0] - a[0], dy = b[1] - a[1], L = dx * dx + dy * dy || 1;
  const k = Math.max(0, Math.min(1, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / L));
  return Math.hypot(p[0] - a[0] - k * dx, p[1] - a[1] - k * dy);
};
/** Shortest distance from a point to a polyline. */
const polyDist = (p: P, pts: P[]) => Math.min(...pts.slice(1).map((b, i) => segDist(p, pts[i], b)));
function clearance(lines: P[][], boxes: [string, Rect][]): { gap: number; what: string } {
  let gap = Infinity, what = '';
  for (const pts of lines) {
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
const clearCheck = (s: Sketch): Check[] => {
  const tags: [string, Rect][] = s.tags.map((t) => [t.name, t.rect]);
  const labels: [string, Rect][] = s.labels.map((l) => [l.text, l.rect]);
  const a = clearance(LINES.get(s) ?? [], [...tags, ...labels]);
  const out: Check[] = [[`Every tag and label stays at least ${LABEL_GAP} px clear of every line${a.what ? `: the closest is "${a.what}", ${fmt(a.gap)} px` : ''}`, a.gap >= LABEL_GAP - 1e-9]];
  if (EDGES.has(s)) {
    const b = clearance(EDGES.get(s) ?? [], tags);
    out.push([`Every tag stays at least ${LABEL_GAP} px clear of every block outline: the closest is "${b.what}", ${fmt(b.gap)} px`, b.gap >= LABEL_GAP - 1e-9]);
  }
  return out;
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
const layout = (s: Sketch): Check[] => [...clearCheck(s), labelsApart(s), inFrame(s)];
/** The marigold strokes of a drawing: paths/lines drawn in marigold, and marigold-edged tags. */
const mariPaths = (s: Sketch) => (s.svg().match(new RegExp(`<path [^>]*stroke="${C.mari}"`, 'g')) ?? []).length;
const mariTags = (s: Sketch) => (s.svg().match(new RegExp(`<rect [^>]*stroke="${C.mari}"`, 'g')) ?? []).length;
const centre = (r: Rect): P => [(r[0] + r[2]) / 2, (r[1] + r[3]) / 2];
/** Ray-casting point-in-polygon. */
function inside(p: P, poly: P[]) {
  let c = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, yi] = poly[i], [xj, yj] = poly[j];
    if (yi > p[1] !== yj > p[1] && p[0] < ((xj - xi) * (p[1] - yi)) / (yj - yi) + xi) c = !c;
  }
  return c;
}
const closed = (poly: P[]): P[] => [...poly, poly[0]];
const rectPoly = (x0: number, y0: number, x1: number, y1: number): P[] => [[x0, y0], [x1, y0], [x1, y1], [x0, y1]];

/* ---------- the elements, and where Z alone puts each ---------- */
const SYMS = ('H He Li Be B C N O F Ne Na Mg Al Si P S Cl Ar K Ca Sc Ti V Cr Mn Fe Co Ni Cu Zn Ga Ge As Se Br Kr '
  + 'Rb Sr Y Zr Nb Mo Tc Ru Rh Pd Ag Cd In Sn Sb Te I Xe Cs Ba La Ce Pr Nd Pm Sm Eu Gd Tb Dy Ho Er Tm Yb Lu '
  + 'Hf Ta W Re Os Ir Pt Au Hg Tl Pb Bi Po At Rn Fr Ra Ac Th Pa U Np Pu Am Cm Bk Cf Es Fm Md No Lr '
  + 'Rf Db Sg Bh Hs Mt Ds Rg Cn Nh Fl Mc Lv Ts Og').split(' ');
const Zof = (sym: string) => SYMS.indexOf(sym) + 1;
/** Each period ends at a noble gas. */
const NOBLE = [2, 10, 18, 36, 54, 86, 118];
/** Where Z alone puts an element: its period, and its group (1–18) or its place in the f-row below. */
function placeOf(Z: number): { p: number; g?: number; f?: number } {
  const p = NOBLE.findIndex((n) => Z <= n) + 1;
  const k = Z - (p > 1 ? NOBLE[p - 2] : 0);
  if (p === 1) return { p, g: k === 1 ? 1 : 18 };
  if (p <= 3) return { p, g: k <= 2 ? k : k + 10 };
  if (p <= 5) return { p, g: k };
  if (k <= 2) return { p, g: k };
  if (k <= 17) return { p, f: k - 3 };
  return { p, g: k - 14 };
}
/** Subshells in simple Aufbau order: by n + l, then n. */
const AUFBAU: [number, number][] = (() => {
  const o: [number, number][] = [];
  for (let n = 1; n <= 7; n++) for (let l = 0; l < Math.min(n, 4); l++) o.push([n, l]);
  return o.sort((a, b) => a[0] + a[1] - b[0] - b[1] || a[0] - b[0]);
})();
const LET = ['s', 'p', 'd', 'f'];
/** The subshell the Z-th (differentiating) electron enters, and how many electrons that subshell then holds. */
function lastSub(Z: number) {
  let e = 0;
  for (const [n, l] of AUFBAU) { const cap = 2 * (2 * l + 1); if (e + cap >= Z) return { n, l, k: Z - e, full: Z - e === cap }; e += cap; }
  throw new Error(`Z = ${Z} out of range`);
}
const blockOf = (Z: number) => LET[lastSub(Z).l];
/** The six metalloids the book names along the staircase; the non-metals and the p-block metals it separates. */
const METALLOIDS = ['B', 'Si', 'Ge', 'As', 'Sb', 'Te'];
const NONMETALS = ['C', 'N', 'O', 'F', 'Ne', 'P', 'S', 'Cl', 'Ar', 'Se', 'Br', 'Kr', 'I', 'Xe', 'Rn'];
const P_METALS = ['Al', 'Ga', 'In', 'Sn', 'Tl', 'Pb', 'Bi'];

/* ---------- a table grid ---------- */
type Grid = { x0: number; cw: number; rowTop: (p: number) => number; rh: number };
const cL = (g: Grid, col: number) => g.x0 + (col - 1) * g.cw;
const cR = (g: Grid, col: number) => g.x0 + col * g.cw;
const cMid = (g: Grid, col: number) => g.x0 + (col - 0.5) * g.cw;
/** The heavy staircase: in each period it runs down the left edge of the given group's cell. */
const STAIR: Record<number, number> = { 2: 13, 3: 14, 4: 14, 5: 15, 6: 16, 7: 17 };
function stairPts(g: Grid): P[] {
  const pts: P[] = [[cL(g, STAIR[2]), g.rowTop(2)]];
  for (let p = 2; p <= 7; p++) {
    const x = cL(g, STAIR[p]);
    if (pts[pts.length - 1][0] !== x) pts.push([x, g.rowTop(p)]);
    pts.push([x, g.rowTop(p) + g.rh]);
  }
  return pts;
}
const SYM_SIZE = 9.5;
/** A symbol centred in its cell (the baseline sits a quarter-em below the centre line). */
const symAt = (s: Sketch, x: number, cy: number, t: string, size = SYM_SIZE, color: string = C.text) => s.sym(x, cy + size * 0.25, t, { size, color });
/** The baseline that centres a line of STIX of this size in a row starting at `top` (its box, cap height to descent, sits mid-row). */
const rowMid = (top: number, size: number, rh = 28) => top + rh / 2 + size * 0.25;
/** The inner lines of a cols × rows block of cells, as segments. */
function gridSegs(g: Grid, x0: number, y0: number, cols: number, rows: number): [P, P][] {
  const out: [P, P][] = [];
  for (let i = 1; i < cols; i++) out.push([[x0 + i * g.cw, y0], [x0 + i * g.cw, y0 + rows * g.rh]]);
  for (let j = 1; j < rows; j++) out.push([[x0, y0 + j * g.rh], [x0 + cols * g.cw, y0 + j * g.rh]]);
  return out;
}
/** The room a line of text takes on the drawing: its STIX width (the wider of the two estimates), cap height to descent, and LABEL_GAP round it. */
function textHole(t: { x: number; y: number; html: string; size: number; anchor: 'start' | 'middle' | 'end' }): Rect {
  const w = Math.max(mathW(t.html, t.size), t.html.replace(/<[^>]+>/g, '').length * t.size * 0.5);
  const x0 = t.anchor === 'middle' ? t.x - w / 2 : t.anchor === 'end' ? t.x - w : t.x;
  return [x0 - LABEL_GAP, t.y - t.size * 0.72 - LABEL_GAP, x0 + w + LABEL_GAP, t.y + t.size * 0.22 + LABEL_GAP];
}
/** Grid lines drawn by sketch, after the knock-outs. */
const GRID = new WeakMap<Sketch, [P, P][]>();
/** The texts a grid leaves room for: every one but the element symbols, which sit inside their own cells (measured by their own check). */
const gridTexts = (s: Sketch) => s.texts.filter((t) => !SYMS.includes(t.html));
/** Draw axis-parallel grid segments, each left out where it would run through a label's room (labels must already be set). */
function knockedGrid(s: Sketch, segs: [P, P][]) {
  const holes = gridTexts(s).map(textHole), drawn: [P, P][] = [];
  for (const [a, b] of segs) {
    const vert = a[0] === b[0], k = vert ? 1 : 0, at = vert ? a[0] : a[1];
    let runs: [number, number][] = [[Math.min(a[k], b[k]), Math.max(a[k], b[k])]];
    for (const h of holes) {
      const [lo, hi, c0, c1] = vert ? [h[1], h[3], h[0], h[2]] : [h[0], h[2], h[1], h[3]];
      if (at <= c0 || at >= c1) continue;
      runs = runs.flatMap(([u, v]): [number, number][] => (hi <= u || lo >= v ? [[u, v]] : [...(lo > u ? [[u, lo] as [number, number]] : []), ...(hi < v ? [[hi, v] as [number, number]] : [])]));
    }
    runs.filter(([u, v]) => v - u > 0.5).forEach(([u, v]) => { const p: [P, P] = vert ? [[at, u], [at, v]] : [[u, at], [v, at]]; drawn.push(p); s.line(p[0][0], p[0][1], p[1][0], p[1][1], { color: C.grey, w: 0.7 }); });
  }
  GRID.set(s, drawn);
}
/** How close any drawn grid line comes to any label's room (as `textHole` measures it, less the gap): ≥ LABEL_GAP means no line touches a label. */
const gridClear = (s: Sketch) => Math.min(...(GRID.get(s) ?? []).flatMap(([a, b]) => gridTexts(s).map(textHole).map((h) => { const r: Rect = [h[0] + LABEL_GAP, h[1] + LABEL_GAP, h[2] - LABEL_GAP, h[3] - LABEL_GAP]; const n = Math.max(1, Math.ceil(len(a, b) * 2)); let d = Infinity; for (let i = 0; i <= n; i++) d = Math.min(d, rectDist(r, [a[0] + ((b[0] - a[0]) * i) / n, a[1] + ((b[1] - a[1]) * i) / n])); return d; })));

/* ===================================================================== */
/* Figure 3.1 · the long form of the periodic table (Topic 01, p. 122)    */
/* ===================================================================== */
/** The book's rows, as printed: "·" an empty place, "*" and "**" the 57–71 and 89–103 places of group 3. */
const MAIN = [
  'H · · · · · · · · · · · · · · · · He',
  'Li Be · · · · · · · · · · B C N O F Ne',
  'Na Mg · · · · · · · · · · Al Si P S Cl Ar',
  'K Ca Sc Ti V Cr Mn Fe Co Ni Cu Zn Ga Ge As Se Br Kr',
  'Rb Sr Y Zr Nb Mo Tc Ru Rh Pd Ag Cd In Sn Sb Te I Xe',
  'Cs Ba * Hf Ta W Re Os Ir Pt Au Hg Tl Pb Bi Po At Rn',
  'Fr Ra ** Rf Db Sg Bh Hs Mt Ds Rg Cn Nh Fl Mc Lv Ts Og',
].map((r) => r.split(' '));
/** The two rows printed below, from group 3's column on, labelled 6 and 7. */
const FROWS = ['La Ce Pr Nd Pm Sm Eu Gd Tb Dy Ho Er Tm Yb Lu', 'Ac Th Pa U Np Pu Am Cm Bk Cf Es Fm Md No Lr'].map((r) => r.split(' '));
/**
 * Group 3's two places hold the marks * and **; each f-row carries its mark and its range on one line
 * ("*57–71", "**89–103") beside its period number. A 17.8 px cell cannot hold "89–103" on one line at a
 * size a phone can read (it was split over two lines at 8), so the range moved to the row it names.
 */
const HOLDER: Record<string, string> = { '*': '57–71', '**': '89–103' };
const HOLD_SIZE = 11, RANGE_SIZE = 8;
const T1 = { x0: 16, cw: 17.8, y0: 40, rh: 21, fTop: 223, h: 274 };
const G1: Grid = { x0: T1.x0, cw: T1.cw, rh: T1.rh, rowTop: (p) => T1.y0 + (p - 1) * T1.rh };
const fTop1 = (i: number) => T1.fTop + i * T1.rh;
const CAP31 = 'The long form of the periodic table: groups 1–18 across the top, periods 1–7 down the side. The s-, p-, d- and f-blocks are outlined separately and the heavy staircase separates metals from non-metals, with the metalloids along it.';
function blocks31() {
  const g = G1, T = (p: number) => g.rowTop(p), B = (p: number) => g.rowTop(p) + g.rh;
  return {
    s: [[cL(g, 1), T(1)], [cR(g, 1), T(1)], [cR(g, 1), T(2)], [cR(g, 2), T(2)], [cR(g, 2), B(7)], [cL(g, 1), B(7)]] as P[],
    p: [[cL(g, 13), T(2)], [cL(g, 18), T(2)], [cL(g, 18), T(1)], [cR(g, 18), T(1)], [cR(g, 18), B(7)], [cL(g, 13), B(7)]] as P[],
    d: [[cL(g, 3), T(4)], [cR(g, 12), T(4)], [cR(g, 12), B(7)], [cL(g, 4), B(7)], [cL(g, 4), T(6)], [cL(g, 3), T(6)]] as P[],
    fHold: rectPoly(cL(g, 3), T(6), cR(g, 3), B(7)),
    f: rectPoly(cL(g, 3), fTop1(0), cR(g, 17), fTop1(2)),
  };
}
const fig31: Diagram = {
  id: 'c11-03-fig-3.1',
  topic: 0,
  name: 'Long form of the periodic table',
  cases: [{ chip: 'Long form', cap: CAP31 }],
  draw() {
    const s = new Sketch(W, T1.h), g = G1;
    const cell = (x: number, y: number) => s.add(`<rect x="${r1(x)}" y="${r1(y)}" width="${g.cw}" height="${g.rh}" fill="none" stroke="${C.grey}" stroke-width="0.7"/>`);
    // headings: "Period" over the period numbers, the group numbers across the top
    s.sym(2, 13, 'Period', { size: 9, anchor: 'start', color: C.slate });
    for (let col = 1; col <= 18; col++) s.sym(cMid(g, col), 33, String(col), { size: 9, color: C.slate });
    MAIN.forEach((row, i) => {
      const p = i + 1, y = g.rowTop(p), cy = y + g.rh / 2;
      s.sym(8, cy + 9.5 * 0.25, String(p), { size: 9.5, color: C.slate });
      row.forEach((t, j) => {
        if (t === '·') return;
        cell(cL(g, j + 1), y);
        if (HOLDER[t]) s.sym(cMid(g, j + 1), cy + HOLD_SIZE * 0.32, t, { size: HOLD_SIZE, color: C.slate });
        else symAt(s, cMid(g, j + 1), cy, t);
      });
    });
    FROWS.forEach((row, i) => {
      const y = fTop1(i), cy = y + g.rh / 2;
      // the period number where the main table has its own, then the row's mark and range, one line, ending clear of the row
      s.sym(8, cy + 9.5 * 0.25, String(6 + i), { size: 9.5, color: C.slate });
      const mark = Object.keys(HOLDER)[i];
      s.sym(cL(g, 3) - LABEL_GAP - 1, cy + RANGE_SIZE * 0.25, `${mark}${HOLDER[mark]}`, { size: RANGE_SIZE, anchor: 'end', color: C.slate });
      row.forEach((t, j) => { cell(cL(g, 3 + j), y); symAt(s, cMid(g, 3 + j), cy, t); });
    });
    // the blocks, each named by the line drawn round it
    const b = blocks31(), edge = { w: 1.4, edge: true };
    path(s, closed(b.s), edge); path(s, closed(b.p), edge); path(s, closed(b.d), edge);
    path(s, closed(b.fHold), edge); path(s, closed(b.f), edge);
    // the 57–71 and 89–103 places are the two f-rows below: a dashed link joins them
    path(s, [[cMid(g, 3), g.rowTop(7) + g.rh + 3], [cMid(g, 3), fTop1(0) - 3]], { color: C.slate, w: 1.1, dash: 'dash' });
    // the staircase, the one highlight
    path(s, stairPts(g), { color: C.mari, w: 2.8 });
    const st = stairPts(g);
    s.place([
      { t: 'metalloid staircase', hi: true, p: [st[0][0], g.rowTop(2) + 10], at: [[222, 41, 'end'], [220, 41, 'end'], [218, 41, 'end']] },
      { t: 's-block', p: [cR(g, 2), g.rowTop(3) + 6], at: [[58, 70, 'start'], [60, 70, 'start'], [62, 70, 'start']] },
      { t: 'p-block', p: [cL(g, 13), g.rowTop(3) + 13], at: [[222, 70, 'end'], [220, 70, 'end'], [218, 70, 'end']] },
      { t: 'd-block', p: [cMid(g, 8), g.rowTop(7) + g.rh], at: [[cMid(g, 8), 194, 'middle'], [cMid(g, 8) + 4, 194, 'middle']] },
      { t: 'f-block', p: [cMid(g, 15), fTop1(0)], at: [[cMid(g, 15), 194, 'middle'], [cMid(g, 15) - 4, 194, 'middle']] },
    ]);
    return s;
  },
  check() {
    const s = fig31.draw(fig31.cases[0]), g = G1, b = blocks31();
    const out: Check[] = [];
    const els = s.labels.filter((l) => /^[A-Z][a-z]?$/.test(l.text));
    // read each symbol's place back off the drawing
    const read = (r: Rect) => {
      const [x, y] = centre(r), col = Math.floor((x - g.x0) / g.cw) + 1;
      if (y < T1.fTop) { const p = Math.floor((y - T1.y0) / g.rh) + 1; return { p, g: col, cell: rectPoly(cL(g, col), g.rowTop(p), cR(g, col), g.rowTop(p) + g.rh) }; }
      const i = Math.floor((y - T1.fTop) / g.rh);
      return { p: 6 + i, f: col - 3, cell: rectPoly(cL(g, col), fTop1(i), cR(g, col), fTop1(i) + g.rh) };
    };
    const syms = els.map((l) => l.text);
    out.push([`All 118 elements are drawn, each once (${els.length} symbols)`, SYMS.length === 118 && els.length === 118 && SYMS.every((x) => syms.filter((y) => y === x).length === 1)]);
    const wrong = els.filter((l) => {
      const want = placeOf(Zof(l.text)), got = read(l.rect);
      return got.p !== want.p || (want.g !== undefined ? got.g !== want.g : got.f !== want.f);
    }).map((l) => l.text);
    out.push([`Every symbol stands at the group and period its Z gives (periods end at Z = ${NOBLE.join(', ')}; 57–71 and 89–103 in the rows below)${wrong.length ? `: not ${wrong.join(', ')}` : ''}`, wrong.length === 0]);
    const notIn = els.filter((l) => { const c = read(l.rect).cell; return !(l.rect[0] >= c[0][0] && l.rect[2] <= c[1][0] && l.rect[1] >= c[0][1] && l.rect[3] <= c[2][1]); }).map((l) => l.text);
    out.push([`Every symbol lies wholly inside its own cell${notIn.length ? `: not ${notIn.join(', ')}` : ''}`, notIn.length === 0]);
    const perLen = [1, 2, 3, 4, 5, 6, 7].map((p) => els.filter((l) => read(l.rect).p === p).length);
    out.push([`Periods hold ${perLen.join(', ')} elements: 2, 8, 8, 18, 18, 32, 32, as Topic 04 states`, perLen.join() === '2,8,8,18,18,32,32']);
    // groups across the top, periods down the side
    const nums = s.labels.filter((l) => /^\d+$/.test(l.text));
    const groupsOk = Array.from({ length: 18 }, (_, i) => nums.find((l) => l.text === String(i + 1) && Math.abs(centre(l.rect)[0] - cMid(g, i + 1)) < 1e-6 && l.rect[3] < g.rowTop(1))).every(Boolean);
    const periodsOk = Array.from({ length: 7 }, (_, i) => nums.find((l) => l.text === String(i + 1) && centre(l.rect)[0] < g.x0 && Math.floor((centre(l.rect)[1] - T1.y0) / g.rh) === i)).every(Boolean);
    const fNums = [6, 7].every((p, i) => nums.some((l) => l.text === String(p) && Math.floor((centre(l.rect)[1] - T1.fTop) / g.rh) === i && centre(l.rect)[0] < cL(g, 3)));
    out.push(['Groups 1–18 are numbered across the top over their columns, periods 1–7 down the side, and the two lower rows are labelled 6 and 7, as the caption and the book say', groupsOk && periodsOk && fNums]);
    // the group-3 places
    const hold = (p: number) => s.labels.filter((l) => inside(centre(l.rect), b.fHold) && Math.floor((centre(l.rect)[1] - T1.y0) / g.rh) + 1 === p).map((l) => l.text).join('');
    const rangeOf = (i: number) => s.labels.find((l) => /^\*+\d/.test(l.text) && l.rect[2] < cL(g, 3) && Math.floor((centre(l.rect)[1] - T1.fTop) / g.rh) === i)?.text ?? '';
    const rowZ = (i: number) => FROWS[i].map(Zof);
    const zRange = (i: number) => `${rowZ(i)[0]}–${rowZ(i)[rowZ(i).length - 1]}`;
    out.push([`Group 3's place in period 6 holds "${hold(6)}" and in period 7 "${hold(7)}"; the rows below read "${rangeOf(0)}" and "${rangeOf(1)}" on one line each: the same marks, and exactly the Z of each row (${zRange(0)}, ${zRange(1)}), each run of consecutive Z`, hold(6) === '*' && hold(7) === '**' && rangeOf(0) === `*${zRange(0)}` && rangeOf(1) === `**${zRange(1)}` && [0, 1].every((i) => rowZ(i).every((z, k) => k === 0 || z === rowZ(i)[k - 1] + 1))]);
    const fLabs = s.labels.filter((l) => l.rect[2] < cL(g, 3) && centre(l.rect)[1] > T1.fTop);
    out.push([`Left of each f-row its period number and its mark and range (one line, ${RANGE_SIZE} px) stand clear of the row by ${LABEL_GAP}+ px`, fLabs.length === 4 && fLabs.every((l) => l.rect[2] <= cL(g, 3) - LABEL_GAP)]);
    // blocks: which outline holds each symbol, against the differentiating electron
    const drawnBlock = (r: Rect) => { const c = centre(r); return inside(c, b.s) ? 's' : inside(c, b.p) ? 'p' : inside(c, b.d) ? 'd' : inside(c, b.f) || inside(c, b.fHold) ? 'f' : '?'; };
    const odd = els.filter((l) => drawnBlock(l.rect) !== blockOf(Zof(l.text))).map((l) => `${l.text} (Aufbau ${blockOf(Zof(l.text))}, drawn ${drawnBlock(l.rect)})`);
    out.push([`Each block outline holds the elements whose last electron enters that subshell in simple Aufbau order, except the book's three placements by convention: ${odd.join(', ')} — He (1s²) is outlined with group 18, and the f-rows carry all fifteen La–Lu and Ac–Lr (reported)`, odd.length === 3 && ['He', 'Lu', 'Lr'].every((x) => odd.some((o) => o.startsWith(`${x} `)))]);
    const fDrawn = els.filter((l) => drawnBlock(l.rect) === 'f').map((l) => Zof(l.text));
    const fText = [...Array.from({ length: 14 }, (_, i) => 58 + i), ...Array.from({ length: 14 }, (_, i) => 90 + i)];
    const extra = fDrawn.filter((z) => !fText.includes(z)).map((z) => SYMS[z - 1]);
    out.push([`Against Topic 04's own definition (lanthanoids Ce–Lu, actinoids Th–Lr) the f outline holds all 28 and also ${extra.join(' and ')} (reported)`, fText.every((z) => fDrawn.includes(z)) && extra.join() === 'La,Ac']);
    out.push(['The blocks are groups 1–2 (s), 3–12 (d) and 13–18 (p) in every period, with the f-block printed below', [1, 2, 3, 4, 5, 6, 7].every((p) => els.filter((l) => read(l.rect).p === p && read(l.rect).g !== undefined && l.text !== 'He' && l.text !== 'H').every((l) => { const gg = read(l.rect).g as number; return drawnBlock(l.rect) === (gg <= 2 ? 's' : gg <= 12 ? 'd' : 'p'); }))]);
    // the staircase
    const st = stairPts(g), rectOf = (x: string) => els.find((l) => l.text === x)!;
    const cellOf = (x: string) => read(rectOf(x).rect).cell;
    const touches = (x: string) => Math.min(...cellOf(x).map((q, i, a) => { const nx = a[(i + 1) % 4]; return Math.min(polyDist(q, st), ...st.map((sp) => segDist(sp, q, nx))); })) < 1e-6;
    const right = (x: string) => { const r = read(rectOf(x).rect); return r.g !== undefined && r.g >= STAIR[r.p]; };
    out.push([`The metalloids ${METALLOIDS.join(', ')} each touch the staircase and lie on its non-metal side`, METALLOIDS.every((x) => touches(x) && right(x))]);
    out.push([`The non-metals ${NONMETALS.join(', ')} lie on its right; the p-block metals ${P_METALS.join(', ')} on its left, with the s-, d- and f-block metals`, NONMETALS.every(right) && P_METALS.every((x) => !right(x))]);
    out.push(['The staircase steps down one group at a time from the top-left of B to the bottom of period 7, along cell edges', st.every((q, i) => i === 0 || q[0] === st[i - 1][0] || q[1] === st[i - 1][1]) && Object.values(STAIR).every((c, i, a) => i === 0 || c - a[i - 1] <= 1)]);
    out.push(['Only the staircase and its tag are marigold', mariPaths(s) === 1 && mariTags(s) === 1 && s.tags.some((t) => t.name === 'metalloid staircase' && t.from && polyDist(t.from, st) < 1e-6)]);
    const on = (name: string, polys: P[][]) => { const t = s.tags.find((x) => x.name === name); return !!t?.from && Math.min(...polys.map((q) => polyDist(t.from as P, closed(q)))) < 1e-6; };
    out.push(['Each block tag’s line ends on its own block’s outline', on('s-block', [b.s]) && on('p-block', [b.p]) && on('d-block', [b.d]) && on('f-block', [b.f])]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 3.2 · first ionisation enthalpy against Z (Topic 02, p. 131)    */
/* ===================================================================== */
/** First ionisation enthalpies, kJ mol⁻¹, Z = 1–20 (NCERT data). */
const IE1 = [1312, 2372, 520, 899, 801, 1086, 1402, 1314, 1681, 2080, 496, 738, 577, 786, 1012, 999, 1256, 1520, 419, 590];
/** The values the chapter's own text quotes (pp. 132–133, 155–156). */
const QUOTED: Record<string, number> = { He: 2372, Li: 520, B: 801, C: 1086, N: 1402, O: 1314, F: 1681, Mg: 738, K: 419 };
type Frame = { ox: number; oy: number; sx: number; sy: number };
const F2: Frame = { ox: 44, oy: 272, sx: 14, sy: 0.088 };
const X2 = (u: number) => F2.ox + u * F2.sx;
const Y2 = (v: number) => F2.oy - v * F2.sy;
const ptZ = (z: number): P => [X2(z), Y2(IE1[z - 1])];
/** Where each element named on the graph has its symbol: [dx, dy] from its point (baseline), as the book places them. */
const NAMED: [string, number, number, 'start' | 'middle' | 'end'][] = [
  // He ends, and Li and Ne start, clear of the dashed period dividers (Z = 2.5, 10.5); He and Li each on its own period's side
  ['He', 1.5, -9, 'end'], ['Li', 2, 18, 'start'], ['Be', 0, -9, 'middle'], ['N', -8, -6, 'end'],
  ['Ne', 12.5, 6, 'start'], ['Na', 6, 18, 'start'], ['Ar', 0, -9, 'middle'], ['K', 0, 18, 'middle'],
];
/** The dashed dividers between periods 1 | 2 and 2 | 3, at Z = 2.5 and 10.5. */
const DIVIDERS = [2.5, 10.5];
/**
 * A line of STIX's width by kind of character, without mathW's half-em floor (which is there so boxes never
 * shrink, and makes a long lowercase note far wider than it sets): He 1.2 em, “(filled 2s subshell)” 8.2 em,
 * against 1.25 and 7.8 em measured on the Android screenshot of this figure.
 */
function stixW(html: string, size: number) {
  let em = 0, small = 0;
  const re = /<(\/?)(i|sub|sup)>|([^<]+)/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html))) {
    if (m[2]) { if (m[2] !== 'i') small += m[1] ? -1 : 1; continue; }
    for (const ch of m[3]) {
      const k = /[ ]/.test(ch) ? 0.33 : /[→]/.test(ch) ? 1 : /[=+−×]/.test(ch) ? 0.68 : /[A-Z]/.test(ch) ? 0.7 : /[ijlrtf]/.test(ch) ? 0.32 : /[a-z0-9]/.test(ch) ? 0.5 : /[()[\],.:;]/.test(ch) ? 0.33 : 0.6;
      em += k * (small > 0 ? 0.7 : 1);
    }
  }
  return em * size;
}
/** The two dips, as the book annotates them: its lines, where they stand, the point each names. */
const DIPS = [
  { z: 5, lines: ['Be → B dip', '(filled 2s subshell)'], cx: 136, y0: 62, up: false },
  { z: 8, lines: ['N → O dip', '(half-filled', '2p subshell)'], cx: 150, y0: 222, up: true },
];
const DIP_SIZE = 11.5, DIP_LH = 13;
const CAP32 = 'First ionisation enthalpy (kJ mol<sup>−1</sup>) against atomic number <i>Z</i> = 1–20. Peaks fall at the noble gases He, Ne, Ar and troughs at the alkali metals Li, Na, K; the small dips at B and O arise from the filled 2s and half-filled 2p subshells.';
const fig32: Diagram = {
  id: 'c11-03-fig-3.2',
  topic: 1,
  name: 'First ionisation enthalpy against Z',
  cases: [{ chip: 'Z = 1–20', cap: CAP32 }],
  draw() {
    const s = new Sketch(W, 312);
    // axes and ticks
    s.vec(F2.ox, F2.oy, F2.ox, 34, { color: C.grey, w: 1.3 });
    s.vec(F2.ox, F2.oy, W - 6, F2.oy, { color: C.grey, w: 1.3 });
    for (let v = 0; v <= 2500; v += 500) { s.line(F2.ox - 4, Y2(v), F2.ox, Y2(v), { color: C.grey, w: 1.2 }); s.sym(F2.ox - 7, Y2(v) + 4.5, String(v), { size: 11.5, anchor: 'end', color: C.slate }); }
    for (let z = 0; z <= 20; z += 2) { s.line(X2(z), F2.oy, X2(z), F2.oy + 4, { color: C.grey, w: 1.2 }); s.sym(X2(z), F2.oy + 19, String(z), { size: 11.5, color: C.slate }); }
    s.sym(F2.ox + 8, 26, 'Δ<sub>i</sub><i>H</i><sub>1</sub> (kJ mol<sup>−1</sup>)', { size: 14, anchor: 'start' });
    s.sym(W - 4, F2.oy - 8, '<i>Z</i>', { size: 15, anchor: 'end' });
    // the period 2 and period 3 stretches, as the book divides them
    DIVIDERS.forEach((z) => path(s, [[X2(z), F2.oy], [X2(z), Y2(2500) - 4]], { color: C.grey, w: 1, dash: 'dash', free: true }));
    s.sym(X2(6.5), 44, 'period 2', { size: 11, color: C.slate });
    s.sym(X2(14.5), 44, 'period 3', { size: 11, color: C.slate });
    // the curve and its points
    path(s, IE1.map((_, i) => ptZ(i + 1)), { w: 2 });
    IE1.forEach((_, i) => { const z = i + 1, [x, y] = ptZ(z); if (z === 5 || z === 8) s.dot(x, y, 3.4, C.mari); else s.dot(x, y, 2.6); });
    NAMED.forEach(([sym, dx, dy, anchor]) => { const [x, y] = ptZ(Zof(sym)); s.sym(x + dx, y + dy, sym, { size: 13, anchor }); });
    // the two dips: the book's words in amber, a marigold line to the point
    DIPS.forEach((d) => {
      d.lines.forEach((t, i) => s.sym(d.cx, d.y0 + i * DIP_LH, t, { size: DIP_SIZE, color: C.amber }));
      const [x, y] = ptZ(d.z);
      const top = d.y0 - DIP_SIZE * 0.72, bottom = d.y0 + (d.lines.length - 1) * DIP_LH + DIP_SIZE * 0.22;
      path(s, [[x, d.up ? top - LABEL_GAP - 0.5 : bottom + LABEL_GAP + 0.5], [x, y + (d.up ? 5 : -5)]], { color: C.mari, w: 1.3 });
    });
    return s;
  },
  check() {
    const s = fig32.draw(fig32.cases[0]);
    const out: Check[] = [];
    const ie = (sym: string) => IE1[Zof(sym) - 1];
    out.push([`The plotted values agree with every value the chapter quotes (${Object.entries(QUOTED).map(([k, v]) => `${k} ${v}`).join(', ')} kJ mol⁻¹)`, Object.entries(QUOTED).every(([k, v]) => ie(k) === v)]);
    // read the points back off the drawing
    const dots = s.points.map((p) => ({ z: (p.x - F2.ox) / F2.sx, v: (F2.oy - p.y) / F2.sy }));
    out.push(['Twenty points, one at each Z = 1–20, each at its value (read back from the drawing)', dots.length === 20 && dots.every((d, i) => Math.abs(d.z - (i + 1)) < 1e-9 && Math.abs(d.v - IE1[i]) < 1e-6)]);
    // peaks and troughs, by period
    const per = (p: number) => SYMS.slice(0, 20).filter((x) => placeOf(Zof(x)).p === p);
    const maxOf = (xs: string[]) => xs.reduce((a, b) => (ie(b) > ie(a) ? b : a));
    const minOf = (xs: string[]) => xs.reduce((a, b) => (ie(b) < ie(a) ? b : a));
    out.push([`Peaks at the noble gases: the highest of periods 1, 2 and 3 are ${[1, 2, 3].map((p) => maxOf(per(p))).join(', ')}, each a noble gas (ns²np⁶ or 1s², a filled shell)`, [1, 2, 3].map((p) => maxOf(per(p))).join() === 'He,Ne,Ar' && ['He', 'Ne', 'Ar'].every((x) => { const z = Zof(x), l = lastSub(z); return l.full && placeOf(z).g === 18; })]);
    const localMin = (x: string) => { const z = Zof(x); return IE1[z - 1] < IE1[z - 2] && (z === 20 || IE1[z - 1] < IE1[z]); };
    out.push([`Troughs at the alkali metals: Li, Na, K are the lowest of periods 2, 3 and 4 shown and each falls below its neighbours (${['Li', 'Na', 'K'].map((x) => `${x} ${ie(x)}`).join(', ')}), each with one electron in a new s subshell`, [2, 3].map((p) => minOf(per(p))).join() === 'Li,Na' && minOf(per(4)) === 'K' && ['Li', 'Na', 'K'].every((x) => localMin(x) && lastSub(Zof(x)).l === 0 && lastSub(Zof(x)).k === 1)]);
    const be = lastSub(4), b = lastSub(5), n = lastSub(7), o = lastSub(8);
    out.push([`The dip at B: ${ie('B')} < Be ${ie('Be')}, Be's 2s is filled (2s${be.k}) and B's last electron enters 2p`, ie('B') < ie('Be') && be.l === 0 && be.full && b.l === 1 && b.k === 1]);
    out.push([`The dip at O: ${ie('O')} < N ${ie('N')}, N's 2p is half-filled (2p${n.k}) and O pairs a fourth 2p electron`, ie('O') < ie('N') && n.l === 1 && n.k === 3 && o.l === 1 && o.k === 4]);
    out.push([`The same dips repeat in period 3 on the curve: Al ${ie('Al')} < Mg ${ie('Mg')}, S ${ie('S')} < P ${ie('P')}`, ie('Al') < ie('Mg') && ie('S') < ie('P')]);
    // each dip's line ends at its own point, and only those two points are marigold
    const lines = LINES.get(s) ?? [];
    const leadOk = DIPS.every((d) => { const [x, y] = ptZ(d.z); return lines.some((l) => l.length === 2 && l[0][0] === x && l[1][0] === x && Math.abs(l[1][1] - y) === 5); });
    out.push(['Each dip’s marigold line runs straight to its own point (B at Z = 5, O at Z = 8), and nothing else on the drawing is marigold', leadOk && mariPaths(s) === 2 && (s.svg().match(new RegExp(`<circle [^>]*fill="${C.mari}"`, 'g')) ?? []).length === 2]);
    // each named symbol is nearest its own point
    const nearOwn = NAMED.every(([sym]) => { const l = s.labels.find((x) => x.text === sym)!, c = centre(l.rect); const best = s.points.reduce((a, p, i) => (Math.hypot(p.x - c[0], p.y - c[1]) < Math.hypot(s.points[a].x - c[0], s.points[a].y - c[1]) ? i : a), 0); return best === Zof(sym) - 1; });
    out.push(['Each element named on the graph (He, Li, Be, N, Ne, Na, Ar, K) is written beside its own point, nearer it than any other', nearOwn]);
    out.push(['The dashed dividers fall between He and Li (Z = 2.5) and between Ne and Na (Z = 10.5), where periods 2 and 3 begin', placeOf(2).p === 1 && placeOf(3).p === 2 && placeOf(10).p === 2 && placeOf(11).p === 3]);
    // the dividers are left out of the line clearance (labels on the axis ticks sit on lines), so measure them here, each text at its STIX width
    const room = (t: (typeof s.texts)[number]): Rect => { const w = stixW(t.html, t.size), x0 = t.anchor === 'middle' ? t.x - w / 2 : t.anchor === 'end' ? t.x - w : t.x; return [x0, t.y - t.size * 0.72, x0 + w, t.y + t.size * 0.22]; };
    const divGap = Math.min(...DIVIDERS.flatMap((z) => s.texts.map(room).filter((r) => r[3] > Y2(2500) - 4 && r[1] < F2.oy).map((r) => Math.max(r[0] - X2(z), X2(z) - r[2]))));
    out.push([`Every word and symbol stays at least ${LABEL_GAP} px clear of the dashed dividers (He, Li, Ne and the dip notes measured at their STIX widths): the closest ${fmt(divGap)} px`, divGap >= LABEL_GAP]);
    const roomOf = (sym: string) => room(s.texts.find((x) => x.html === sym)!);
    out.push(['He (period 1) stands left of the Z = 2.5 divider and Li (period 2) right of it, under its trough; Ne sits right of the Z = 10.5 line beside its peak, as the book prints it', roomOf('He')[2] < X2(2.5) && roomOf('Li')[0] > X2(2.5) && roomOf('Ne')[0] > X2(10.5)]);
    out.push(['The axes run 0–2500 kJ mol⁻¹ in steps of 500 and Z = 0–20 in steps of 2, as the book’s; every value fits under the top', Math.max(...IE1) < 2500]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 3.3 · Period 3 trends (Topic 03, p. 139)                        */
/* ===================================================================== */
const P3 = ['Na', 'Mg', 'Al', 'Si', 'P', 'S', 'Cl', 'Ar'];
/** Each element's highest oxide as printed (Ar: none, printed "--"): [element count, oxygen count]. */
const OXIDE: Record<string, [string, number, number] | null> = {
  Na: ['Na<sub>2</sub>O', 2, 1], Mg: ['MgO', 1, 1], Al: ['Al<sub>2</sub>O<sub>3</sub>', 2, 3], Si: ['SiO<sub>2</sub>', 1, 2],
  P: ['P<sub>2</sub>O<sub>5</sub>', 2, 5], S: ['SO<sub>3</sub>', 1, 3], Cl: ['Cl<sub>2</sub>O<sub>7</sub>', 2, 7], Ar: null,
};
/** The nature of each oxide (Topic 03 and Additional topic A). */
const NATURE: Record<string, 'basic' | 'amphoteric' | 'acidic'> = { Na: 'basic', Mg: 'basic', Al: 'amphoteric', Si: 'acidic', P: 'acidic', S: 'acidic', Cl: 'acidic' };
/** Pauling electronegativities (Topic 02). */
const EN: Record<string, number> = { Na: 0.93, Mg: 1.31, Al: 1.61, Si: 1.9, P: 2.19, S: 2.58, Cl: 3.16 };
/**
 * The book's labels under the row: the cells each one stands under, its lines, and its band (0 or 1, down the page).
 * The book centres "non-metallic" under S–Cl and leaves P unlabelled; the bracket here runs P–Cl (review flag 14),
 * since P is a non-metal with an acidic oxide and a bracket stopping at S would say otherwise.
 */
const CHAR = [
  { from: 'Na', to: 'Mg', lines: ['metallic', 'basic oxide', 'reducing'], band: 0, nature: 'basic' },
  { from: 'Al', to: 'Al', lines: ['amphoteric', 'oxide'], band: 1, nature: 'amphoteric' },
  { from: 'Si', to: 'Si', lines: ['metalloid,', 'acidic', 'oxide'], band: 0, nature: 'acidic' },
  { from: 'P', to: 'Cl', lines: ['non-metallic', 'acidic oxide', 'oxidising'], band: 0, nature: 'acidic' },
];
const T3 = { x0: 10, cw: 40, top: 46, ch: 34, br: 90, band: [106, 154], lh: 13, size: 11.5, arrows: [198, 220], h: 250 };
const c3L = (i: number) => T3.x0 + i * T3.cw;
const TREND = ['metallic character, electropositivity decrease', 'non-metallic character, electronegativity increase'];
const CAP33 = 'Period 3 (Na to Ar): metallic and basic character decrease while non-metallic and acidic character increase from left to right, as the oxides Na<sub>2</sub>O, MgO, Al<sub>2</sub>O<sub>3</sub>, SiO<sub>2</sub>, P<sub>2</sub>O<sub>5</sub>, SO<sub>3</sub> and Cl<sub>2</sub>O<sub>7</sub> show.';
const fig33: Diagram = {
  id: 'c11-03-fig-3.3',
  topic: 2,
  name: 'Period 3 trends',
  cases: [{ chip: 'Period 3', cap: CAP33 }],
  draw() {
    const s = new Sketch(W, T3.h);
    s.sym(W / 2, 14, 'oxide formula', { size: 12, color: C.slate });
    P3.forEach((x, i) => {
      const ox = OXIDE[x];
      s.sym(c3L(i) + T3.cw / 2, 36, ox ? ox[0] : '–', { size: 12.5 });
      s.add(`<rect x="${r1(c3L(i) + 1.5)}" y="${T3.top}" width="${T3.cw - 3}" height="${T3.ch}" rx="3" fill="none" stroke="${C.ink}" stroke-width="1.5"/>`);
      s.sym(c3L(i) + T3.cw / 2, T3.top + T3.ch / 2 + 16 * 0.3, x, { size: 16 });
    });
    // each label stands under a grey bracket round the cells it names
    CHAR.forEach((c) => {
      const a = c3L(P3.indexOf(c.from)) + 5, b = c3L(P3.indexOf(c.to) + 1) - 5, mid = (a + b) / 2;
      path(s, [[a, T3.br - 5], [a, T3.br], [b, T3.br], [b, T3.br - 5]], { color: C.grey, w: 1.3, free: true });
      const y0 = T3.band[c.band];
      if (c.band) path(s, [[mid, T3.br], [mid, y0 - T3.size * 0.72 - LABEL_GAP - 0.5]], { color: C.grey, w: 1.1 });
      c.lines.forEach((t, k) => s.sym(mid, y0 + k * T3.lh, t, { size: T3.size, color: C.text }));
    });
    // the two trends, left to right: the highlight
    TREND.forEach((t, i) => {
      const y = T3.arrows[i];
      s.vec(16, y, W - 16, y, { color: C.mari, w: 2.2 });
      s.sym(W / 2, i ? y + 17 : y - 9, t, { size: 12 });
    });
    return s;
  },
  check() {
    const s = fig33.draw(fig33.cases[0]);
    const out: Check[] = [];
    const cellSyms = s.labels.filter((l) => P3.includes(l.text)).sort((a, b) => a.rect[0] - b.rect[0]).map((l) => l.text);
    const zs = cellSyms.map(Zof);
    out.push([`Period 3 runs left to right ${cellSyms.join(', ')}: Z = ${zs.join(', ')}, every one in period 3`, cellSyms.join() === P3.join() && zs.every((z, i) => z === 11 + i && placeOf(z).p === 3)]);
    // each oxide above its own element, with the element in its group oxidation state
    const ox = P3.map((x, i) => {
      const o = OXIDE[x];
      const lab = s.labels.find((l) => l.text === (o ? o[0].replace(/<[^>]+>/g, '') : '–') && Math.abs(centre(l.rect)[0] - (c3L(i) + T3.cw / 2)) < 1e-6 && l.rect[3] < T3.top);
      const valence = Zof(x) - 10, os = o ? (2 * o[2]) / o[1] : null;
      return { x, ok: !!lab && (o ? os === valence : true), os, valence };
    });
    out.push([`Each oxide stands over its own element, which is in its group oxidation state there (O = −2): ${ox.filter((o) => o.os).map((o) => `${o.x} +${o.os}`).join(', ')} = valence electrons 1–7; Ar has none (“–”)`, ox.every((o) => o.ok)]);
    out.push(['The caption lists the same oxides in the same order as the drawing', CAP33.includes(P3.filter((x) => OXIDE[x]).map((x) => (OXIDE[x] as [string, number, number])[0]).slice(0, -1).join(', ') + ` and ${OXIDE.Cl![0]}`)]);
    // the labels: each under the cells it names, and true of their oxides
    const lab = CHAR.every((c) => { const i0 = P3.indexOf(c.from), i1 = P3.indexOf(c.to), mid = (c3L(i0) + 5 + c3L(i1 + 1) - 5) / 2; return c.lines.every((t) => s.labels.some((l) => l.text === t && Math.abs(centre(l.rect)[0] - mid) < 1e-6)) && P3.slice(i0, i1 + 1).every((x) => NATURE[x] === c.nature); });
    out.push(['Each label stands centred under the cells its bracket spans (Na–Mg metallic, basic oxide; Al amphoteric oxide; Si metalloid, acidic oxide; P–Cl non-metallic, acidic oxide), and is true of those oxides', lab]);
    const under = P3.filter((x) => OXIDE[x]).map((x) => CHAR.filter((c) => P3.indexOf(c.from) <= P3.indexOf(x) && P3.indexOf(x) <= P3.indexOf(c.to)).length);
    out.push(['Every element with an oxide (Na to Cl) stands under exactly one bracket, and Ar under none', under.every((n) => n === 1) && CHAR.every((c) => c.to !== 'Ar')]);
    const rank = { basic: 0, amphoteric: 1, acidic: 2 };
    const natures = P3.filter((x) => NATURE[x]).map((x) => rank[NATURE[x]]);
    out.push([`Oxide character never moves back toward basic from left to right: ${P3.filter((x) => NATURE[x]).map((x) => NATURE[x]).join(' → ')}`, natures.every((v, i) => i === 0 || v >= natures[i - 1])]);
    const ens = P3.filter((x) => EN[x]).map((x) => EN[x]);
    out.push([`Electronegativity rises across the period (${P3.filter((x) => EN[x]).map((x) => `${x} ${EN[x]}`).join(', ')}), so the “increase” arrow and the “decrease” in electropositivity both point left to right`, ens.every((v, i) => i === 0 || v > ens[i - 1]) && TREND[0].endsWith('decrease') && TREND[1].endsWith('increase')]);
    const arrows = [...s.svg().matchAll(new RegExp(`<line x1="([0-9.]+)" y1="([0-9.]+)" x2="([0-9.]+)" y2="([0-9.]+)" stroke="${C.mari}"`, 'g'))].map((m) => m.slice(1, 5).map(Number));
    out.push(['Both trend arrows run left to right under the whole row (Na to Ar), and they are the only marigold', arrows.length === 2 && arrows.every(([x1, y1, x2, y2]) => x1 < c3L(0) + T3.cw / 2 && x2 > c3L(6) + T3.cw / 2 && y1 === y2) && mariTags(s) === 0]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 3.4 · the s, p, d and f blocks (Topic 04, p. 147)               */
/* ===================================================================== */
const T4 = { x0: 16, cw: 17.8, y0: 62, rh: 28, hTop: 28, nums: 246, fTop: 284, h: 348 };
const G4: Grid = { x0: T4.x0, cw: T4.cw, rh: T4.rh, rowTop: (p) => T4.y0 + (p - 2) * T4.rh };
const CONF = {
  s: '<i>n</i>s<sup>1–2</sup>',
  p: '<i>n</i>s<sup>2</sup> <i>n</i>p<sup>1–6</sup>',
  d: '(<i>n</i> − 1)d<sup>1–10</sup> <i>n</i>s<sup>0–2</sup>',
  f: '(<i>n</i> − 2)f<sup>1–14</sup>',
};
const H_NOTE = '1s<sup>1</sup>, resembles both group 1 and group 17';
const HE_NOTE = ['1s<sup>2</sup> but sits atop', 'group 18'];
const CAP34 = 'The s-, p-, d- and f-blocks with their general valence configurations; the heavy staircase (B, Si, Ge, As, Sb, Te) separates metals from non-metals. He (1s<sup>2</sup>) sits above group 18 and H (1s<sup>1</sup>) above group 1.';
function blocks34() {
  const g = G4, B7 = g.rowTop(7) + g.rh;
  return {
    s: rectPoly(cL(g, 1), g.rowTop(2), cR(g, 2), B7),
    d: rectPoly(cL(g, 3), g.rowTop(4), cR(g, 12), B7),
    p: rectPoly(cL(g, 13), g.rowTop(2), cR(g, 18), B7),
    f: rectPoly(cL(g, 3), T4.fTop, cR(g, 16), T4.fTop + 2 * g.rh),
  };
}
const fig34: Diagram = {
  id: 'c11-03-fig-3.4',
  topic: 3,
  name: 'The s, p, d and f blocks',
  cases: [{ chip: 'Blocks', cap: CAP34 }],
  draw() {
    const s = new Sketch(W, T4.h), g = G4, b = blocks34();
    const edge = { w: 1.4, edge: true };
    (['s', 'd', 'p', 'f'] as const).forEach((k) => path(s, closed(b[k]), edge));
    // H and He above their groups, with the book's notes
    s.add(`<rect x="${r1(cL(g, 1))}" y="${T4.hTop}" width="${g.cw}" height="${g.rh}" fill="none" stroke="${C.slate}" stroke-width="1.2" stroke-dasharray="3 3"/>`);
    s.add(`<rect x="${r1(cL(g, 18))}" y="${T4.hTop}" width="${g.cw}" height="${g.rh}" fill="none" stroke="${C.ink}" stroke-width="1.4"/>`);
    symAt(s, cMid(g, 1), T4.hTop + g.rh / 2, 'H', 11);
    symAt(s, cMid(g, 18), T4.hTop + g.rh / 2, 'He', 10);
    s.line(cR(g, 1) + 3, T4.hTop + 14, cR(g, 1) + 10, T4.hTop + 14, { color: C.grey, w: 1 });
    s.sym(cR(g, 1) + 14, T4.hTop + 18, H_NOTE, { size: 11, anchor: 'start', color: C.slate });
    HE_NOTE.forEach((t, i) => s.sym(cL(g, 18) - 8, 14 + i * 13, t, { size: 11, anchor: 'end', color: C.slate }));
    s.line(cL(g, 18) - 5, 25, cL(g, 18) - 1, T4.hTop + 4, { color: C.grey, w: 1 });
    // the staircase elements, the configurations, metals / non-metals
    METALLOIDS.forEach((x) => { const pl = placeOf(Zof(x)); symAt(s, cMid(g, pl.g as number), g.rowTop(pl.p) + g.rh / 2, x); });
    s.sym(cMid(g, 1.5), rowMid(g.rowTop(4), 11), CONF.s, { size: 11 });
    s.sym((cL(g, 3) + cR(g, 12)) / 2, rowMid(g.rowTop(6), 13), CONF.d, { size: 13 });
    s.sym(cMid(g, 17), rowMid(g.rowTop(3), 12), CONF.p, { size: 12 });
    s.sym(cMid(g, 16.5), rowMid(g.rowTop(2), 11), 'non-metals', { size: 11, color: C.slate });
    s.sym(cMid(g, 14), rowMid(g.rowTop(6), 11), 'metals', { size: 11, color: C.slate });
    s.sym((cL(g, 3) + cR(g, 16)) / 2 + 30, rowMid(T4.fTop + g.rh, 13), CONF.f, { size: 13 });
    for (let col = 1; col <= 18; col++) s.sym(cMid(g, col), T4.nums, String(col), { size: 9, color: C.slate });
    // the cell grid, drawn after every label so each grid line can leave out the stretch where a label sits (no fills)
    const segs = [...gridSegs(g, cL(g, 1), g.rowTop(2), 2, 6), ...gridSegs(g, cL(g, 3), g.rowTop(4), 10, 4), ...gridSegs(g, cL(g, 13), g.rowTop(2), 6, 6), ...gridSegs(g, cL(g, 3), T4.fTop, 14, 2)];
    knockedGrid(s, segs);
    const st = stairPts(g);
    path(s, st, { color: C.mari, w: 2.8 });
    // the d-block is named by a tag inside its own (empty) outline
    s.tag((cL(g, 3) + cR(g, 12)) / 2, g.rowTop(4) + 12, 'd-block', null, null, { anchor: 'middle' });
    s.place([
      { t: 'heavy staircase', hi: true, p: [st[0][0], g.rowTop(2) + 13], at: [[222, 63, 'end'], [220, 63, 'end'], [218, 63, 'end']] },
      { t: 's-block', p: [cR(g, 2), g.rowTop(3) + 13], at: [[58, 91, 'start'], [60, 91, 'start']] },
      { t: 'p-block', p: [cL(g, 13), g.rowTop(3) + 13], at: [[222, 91, 'end'], [220, 91, 'end']] },
      { t: 'f-block', p: [cMid(g, 5), T4.fTop], at: [[cMid(g, 5), 254, 'middle'], [cMid(g, 5) + 4, 254, 'middle']] },
    ]);
    return s;
  },
  check() {
    const s = fig34.draw(fig34.cases[0]), g = G4, b = blocks34();
    const out: Check[] = [];
    const width = (k: 's' | 'p' | 'd' | 'f') => Math.round((b[k][1][0] - b[k][0][0]) / g.cw);
    const rows = (k: 's' | 'p' | 'd' | 'f') => Math.round((b[k][2][1] - b[k][0][1]) / g.rh);
    const cap = (k: 's' | 'p' | 'd' | 'f') => { const m = CONF[k].match(new RegExp(`${k}<sup>(\\d+)–(\\d+)</sup>`)); return m ? +m[2] : NaN; };
    const ls = { s: 0, p: 1, d: 2, f: 3 } as const;
    out.push([`Each block is as many columns wide as its subshell holds, and as its configuration's top count says: s ${width('s')}, p ${width('p')}, d ${width('d')}, f ${width('f')} (2(2l + 1) = 2, 6, 10, 14)`, (['s', 'p', 'd', 'f'] as const).every((k) => width(k) === 2 * (2 * ls[k] + 1) && cap(k) === width(k))]);
    const colOf = (x: number) => Math.round((x - g.x0) / g.cw) + 1;
    out.push(['The s-block stands over groups 1–2, the d-block over 3–12 and the p-block over 13–18 (by the group numbers under them)', colOf(b.s[0][0]) === 1 && colOf(b.d[0][0]) === 3 && colOf(b.p[0][0]) === 13 && colOf(b.p[1][0]) === 19 && s.labels.filter((l) => /^\d+$/.test(l.text) && Math.abs(centre(l.rect)[1] - (T4.nums - 9 * 0.25)) < 1).every((l) => colOf(centre(l.rect)[0] - g.cw / 2) === +l.text)]);
    // which periods each block spans, against Aufbau
    const periods = (l: number) => [...new Set(SYMS.map((_, i) => i + 1).filter((z) => lastSub(z).l === l).map((z) => placeOf(z).p))].sort();
    out.push([`Rows: s and p span periods 2–7 (${rows('s')}, ${rows('p')} rows; H and He above), d periods 4–7 (${rows('d')} rows: Aufbau's first d electron is Z = 21, period 4), f two rows (Aufbau's f electrons fall in periods ${periods(3).join(' and ')})`, rows('s') === 6 && rows('p') === 6 && rows('d') === 4 && rows('f') === 2 && periods(2).join() === '4,5,6,7' && periods(3).join() === '6,7' && periods(1).join() === '2,3,4,5,6,7' && b.d[0][1] === g.rowTop(4)]);
    // the staircase and the six metalloids
    const st = stairPts(g);
    const els = s.labels.filter((l) => METALLOIDS.includes(l.text));
    const placed = els.every((l) => { const pl = placeOf(Zof(l.text)), [x, y] = centre(l.rect); return colOf(x - g.cw / 2) === pl.g && Math.floor((y - T4.y0) / g.rh) + 2 === pl.p; });
    const touch = els.every((l) => { const pl = placeOf(Zof(l.text)), c = rectPoly(cL(g, pl.g as number), g.rowTop(pl.p), cR(g, pl.g as number), g.rowTop(pl.p) + g.rh); return Math.min(...c.map((q, i) => Math.min(polyDist(q, st), ...st.map((sp) => segDist(sp, q, c[(i + 1) % 4]))))) < 1e-6 && (pl.g as number) >= STAIR[pl.p]; });
    out.push([`The six symbols drawn are the caption's staircase elements ${els.map((l) => l.text).join(', ')}, each at its own group and period, touching the staircase on its non-metal side`, els.map((l) => l.text).join() === METALLOIDS.join() && CAP34.includes(`(${METALLOIDS.join(', ')})`) && placed && touch]);
    const side = (t: string) => { const l = s.labels.find((x) => x.text === t)!, [x, y] = centre(l.rect), p = Math.floor((y - T4.y0) / g.rh) + 2; return x - cL(g, STAIR[p]); };
    out.push(['“non-metals” is written on the staircase’s right and “metals” on its left, inside the p-block', side('non-metals') > 0 && side('metals') < 0 && ['non-metals', 'metals'].every((t) => inside(centre(s.labels.find((x) => x.text === t)!.rect), b.p))]);
    const h = lastSub(1), he = lastSub(2);
    out.push([`H (1s${h.k}) sits above group 1 and He (1s${he.k}) above group 18, apart from the blocks, with the book's notes`, h.n === 1 && h.l === 0 && h.k === 1 && he.k === 2 && he.full && s.labels.some((l) => l.text === 'H' && colOf(centre(l.rect)[0] - g.cw / 2) === 1 && l.rect[3] < g.rowTop(2)) && s.labels.some((l) => l.text === 'He' && colOf(centre(l.rect)[0] - g.cw / 2) === 18 && l.rect[3] < g.rowTop(2)) && H_NOTE.startsWith('1s<sup>1</sup>') && HE_NOTE[0].startsWith('1s<sup>2</sup>')]);
    const on = (name: string, poly: P[]) => { const t = s.tags.find((x) => x.name === name); return !!t?.from && polyDist(t.from, poly) < 1e-6; };
    out.push(['Each block tag’s line ends on its own block’s outline (the d-block’s tag stands inside its own outline), the staircase tag’s on the staircase', on('s-block', closed(b.s)) && on('p-block', closed(b.p)) && on('f-block', closed(b.f)) && on('heavy staircase', st) && ((t) => !!t && !t.from && inside(centre(t.rect), b.d) && t.rect[0] > b.d[0][0] && t.rect[2] < b.d[1][0] && t.rect[1] > b.d[0][1])(s.tags.find((x) => x.name === 'd-block'))]);
    out.push(['Each configuration is written inside its own block', (['s', 'p', 'd', 'f'] as const).every((k) => { const l = s.labels.find((x) => x.text === CONF[k].replace(/<[^>]+>/g, '')); return !!l && inside(centre(l.rect), b[k]); })]);
    out.push(['Only the staircase and its tag are marigold', mariPaths(s) === 1 && mariTags(s) === 1]);
    const gc = gridClear(s);
    out.push([`No grid line runs through a configuration, “metals” or “non-metals” (or any other label but the symbols in their cells): each line is left out where a label sits, the closest ${fmt(gc)} px`, gc >= LABEL_GAP - 1e-9]);
    const rowCentred = (html: string, top: number) => { const t = s.texts.find((x) => x.html === html); if (!t) return false; const h = textHole(t); return Math.abs((h[1] + h[3]) / 2 - (top + g.rh / 2)) < 2 && h[1] + LABEL_GAP >= top + LABEL_GAP && h[3] - LABEL_GAP <= top + g.rh - LABEL_GAP; };
    out.push(['Each configuration, “metals” and “non-metals” is centred in one row, clear of the row’s own lines', rowCentred(CONF.s, g.rowTop(4)) && rowCentred(CONF.d, g.rowTop(6)) && rowCentred(CONF.p, g.rowTop(3)) && rowCentred(CONF.f, T4.fTop + g.rh) && rowCentred('non-metals', g.rowTop(2)) && rowCentred('metals', g.rowTop(6))]);
    out.push(...layout(s));
    return out;
  },
};
export const DIAGRAMS_CHEMISTRY_11_03: Diagram[] = [fig31, fig32, fig33, fig34];
