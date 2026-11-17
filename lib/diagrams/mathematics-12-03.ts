import { C, LABEL_GAP, Rect, Sketch, mathW, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * MATHEMATICS CLASS 12, CHAPTER 3 (Matrices): Figures 3.1–3.5 of the Master Reference book (October 2026 snapshot,
 * math12.pdf, PDF page = bottom folio), redrawn. Each figure stands on its own "CHAPTER 3 · FIGURES" plate, the page
 * after its caption. The topic indices count the chapter's Topic 00 (index 0).
 *
 *   Figure 3.1 (p. 191; caption p. 190), 3.2 (p. 194; caption p. 193): Topic 01, index 1.
 *   Figure 3.3 (p. 201; caption p. 200): Topic 02, index 2.
 *   Figure 3.4 (p. 209; caption p. 208): Topic 03, index 3.
 *   Figure 3.5 (p. 220; caption p. 219): Topic 04, index 4.
 *
 * MATRICES ARE DRAWN HERE, not with the reader's <bmat> (which labels on a drawing cannot use): each grid is ruled
 * cell by cell, its entries centred in their cells, its brackets drawn as tall as the grid.
 *
 * ONE HIGHLIGHT. The book's orange is the marigold (lines, amber text): 3.1 the cell a₂₃; 3.2 row i of A, column j of
 * B, the entry (i, j) of AB and the arrow from the column; 3.3 the fold line (the main diagonal); 3.5 the
 * "Invertibility" box. 3.4 has no orange: nothing is marigold. The book's navy and green are ink, its grey slate.
 *
 * NO FILLS. The book's pale tints of the highlighted cells (3.1, 3.2) and its box tints (3.5) are left out: the
 * outlines carry them. 3.3's four tints by |i − j| are hatching in grey, one pattern each: |i − j| = 0 (the diagonal)
 * none, 1 rising lines (/), 2 falling lines (\), 3 crossed lines (both); the legend's swatches carry the same hatching.
 * The caption's "share a shade" says "share a hatch".
 *
 * DEPARTURES, for a phone (each listed in reports-03/md123.md): 3.3's legend stands under the grid and its
 * "aᵢⱼ = aⱼᵢ" above the grid's top right corner; 3.4's two augmented matrices stand one above the other, the arrow
 * pointing down; 3.5's four branches stand one under another on a spine, each box's lines rewrapped; long italic lines
 * under a drawing are set on two lines. No fraction appears on any drawing. No em dash anywhere.
 */

const W = 340;
type P = [number, number];
const fmt = (n: number, d = 2) => String(+n.toFixed(d)).replace('-', '−');
const len = (a: P, b: P) => Math.hypot(b[0] - a[0], b[1] - a[1]);
const plain = (html: string) => html.replace(/<\/?(?:i|sub|sup)>/g, '');
const widthOf = (html: string, size: number) => Math.max(mathW(html, size), plain(html).length * size * 0.5);
const I = (t: string) => `<i>${t}</i>`;
const close = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) < tol;
const sub = (base: string, s: string) => `${base}<sub>${s}</sub>`;
const AA = I('A'), BB = I('B'), II = I('I'), ii = I('i'), jj = I('j'), rr = I('r');
const AINV = `${AA}<sup>−1</sup>`;
const AT = `${AA}<sup>T</sup>`;

/* ---------- lines, labels and the layout checks (as in mathematics-12-02.ts) ---------- */
type Stroke = { color?: string; w?: number; dash?: boolean | string; name?: string };
const LINES = new WeakMap<Sketch, { name: string; pts: P[]; color: string; dash: boolean }[]>();
const keep = (s: Sketch, pts: P[], name = '', color: string = C.ink, dash = false) => { const l = LINES.get(s) ?? []; l.push({ name, pts, color, dash }); LINES.set(s, l); };
const linesNamed = (s: Sketch, re: RegExp) => (LINES.get(s) ?? []).filter((l) => re.test(l.name));
const dashAttr = (d: Stroke['dash']) => (d === true ? ' stroke-dasharray="5 4"' : d ? ` stroke-dasharray="${d}"` : '');
function path(s: Sketch, pts: P[], o: Stroke = {}) {
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ');
  s.add(`<path d="${d}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}" stroke-linejoin="round" stroke-linecap="round"${dashAttr(o.dash)}/>`);
  keep(s, pts, o.name, o.color ?? C.ink, !!o.dash);
}
/** An outlined rectangle, never filled; `rx` rounds its corners (kept as the plain rectangle for the checks). */
function box(s: Sketch, r: Rect, o: Stroke & { rx?: number } = {}) {
  s.add(`<rect x="${r1(r[0])}" y="${r1(r[1])}" width="${r1(r[2] - r[0])}" height="${r1(r[3] - r[1])}" rx="${o.rx ?? 0}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.5}"${dashAttr(o.dash)}/>`);
  keep(s, [[r[0], r[1]], [r[2], r[1]], [r[2], r[3]], [r[0], r[3]], [r[0], r[1]]], o.name ?? 'box', o.color ?? C.ink, !!o.dash);
}
/** A filled arrowhead at `tip`, pointing along angle `ang`. */
function head(s: Sketch, tip: P, ang: number, col: string, L = 8) {
  const ux = Math.cos(ang), uy = Math.sin(ang), hw = L * 0.5, bx = tip[0] - L * ux, by = tip[1] - L * uy;
  s.add(`<path d="M${r1(tip[0])} ${r1(tip[1])} L${r1(bx + hw * uy)} ${r1(by - hw * ux)} L${r1(bx - hw * uy)} ${r1(by + hw * ux)} Z" fill="${col}"/>`);
}
/** A straight arrow with a filled head at b. */
function arr(s: Sketch, a: P, b: P, o: Stroke & { head?: number } = {}) {
  const col = o.color ?? C.ink, L = o.head ?? 8, ang = Math.atan2(b[1] - a[1], b[0] - a[0]);
  const b2: P = [b[0] - L * Math.cos(ang) * 0.8, b[1] - L * Math.sin(ang) * 0.8];
  s.add(`<line x1="${r1(a[0])}" y1="${r1(a[1])}" x2="${r1(b2[0])}" y2="${r1(b2[1])}" stroke="${col}" stroke-width="${o.w ?? 1.5}" stroke-linecap="round"${dashAttr(o.dash)}/>`);
  head(s, b, ang, col, L);
  keep(s, [a, b], o.name ?? 'arrow', col, !!o.dash);
}
/** A curved arrow (a quadratic from a through ctrl to b), its head at b. */
function bend(s: Sketch, a: P, ctrl: P, b: P, o: Stroke = {}) {
  const col = o.color ?? C.ink;
  const pts = Array.from({ length: 61 }, (_, i): P => { const t = i / 60, u = 1 - t; return [u * u * a[0] + 2 * u * t * ctrl[0] + t * t * b[0], u * u * a[1] + 2 * u * t * ctrl[1] + t * t * b[1]]; });
  const stop = pts.findIndex((p) => len(p, b) < 6);
  s.add(`<path d="${pts.slice(0, stop > 0 ? stop + 1 : pts.length).map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ')}" fill="none" stroke="${col}" stroke-width="${o.w ?? 1.5}" stroke-linecap="round"/>`);
  const back = pts[pts.length - 4];
  head(s, b, Math.atan2(b[1] - back[1], b[0] - back[0]), col, 8);
  keep(s, pts, o.name ?? 'bend', col);
}
const rectDist = (r: Rect, p: P) => Math.hypot(Math.max(r[0] - p[0], 0, p[0] - r[2]), Math.max(r[1] - p[1], 0, p[1] - r[3]));
const boxToLine = (r: Rect, pts: P[]) => {
  let gap = Infinity;
  for (let i = 0; i < pts.length - 1; i++) {
    const a = pts[i], b = pts[i + 1], n = Math.max(1, Math.ceil(len(a, b) * 2));
    for (let k = 0; k <= n; k++) gap = Math.min(gap, rectDist(r, [a[0] + ((b[0] - a[0]) * k) / n, a[1] + ((b[1] - a[1]) * k) / n]));
  }
  if (pts.length === 1) gap = rectDist(r, pts[0]);
  return gap;
};
function crowded(s: Sketch): string[] {
  const out: string[] = [];
  for (const { pts, name: ln } of LINES.get(s) ?? []) for (const l of s.labels) { const d = boxToLine(l.rect, pts); if (d < LABEL_GAP - 1e-9) out.push(`"${l.text}" ${fmt(d, 1)} px from the ${ln || 'line'}`); }
  return [...new Set(out)];
}
const clearCheck = (s: Sketch): Check => {
  const bad = crowded(s);
  return [`Every label stays at least ${LABEL_GAP} px clear of every line, grid rule, bracket, arrow and hatch stroke${bad.length ? `: ${bad.join('; ')}` : ''}`, bad.length === 0];
};
const labelsApart = (s: Sketch): Check => {
  const L = s.labels;
  const bad = L.flatMap((a, i) => L.slice(i + 1).filter((b) => !(a.rect[2] + 2 <= b.rect[0] || b.rect[2] + 2 <= a.rect[0] || a.rect[3] + 2 <= b.rect[1] || b.rect[3] + 2 <= a.rect[1])).map((b) => `${a.text} / ${b.text}`));
  return [`No two labels on the drawing touch${bad.length ? `: ${bad.join(', ')}` : ''}`, bad.length === 0];
};
const inFrame = (s: Sketch): Check => {
  const out = s.labels.filter((l) => l.rect[0] < 0 || l.rect[2] > s.w || l.rect[1] < 0 || l.rect[3] > s.h).map((l) => l.text);
  return [`Every label lies inside the frame${out.length ? `: not ${out.join(', ')}` : ''}`, out.length === 0];
};
const linesInFrame = (s: Sketch): Check => {
  const out = (LINES.get(s) ?? []).filter((l) => l.pts.some((p) => p[0] < -0.5 || p[0] > s.w + 0.5 || p[1] < -0.5 || p[1] > s.h + 0.5)).map((l) => l.name);
  return [`Every line lies inside the frame${out.length ? `: not ${[...new Set(out)].join(', ')}` : ''}`, out.length === 0];
};
const layout = (s: Sketch): Check[] => [clearCheck(s), labelsApart(s), inFrame(s), linesInFrame(s)];
const labelOf = (s: Sketch, t: string) => s.labels.find((l) => l.text === t);
const labelsCheck = (s: Sketch, ts: string[], what = 'The labels as printed'): Check => {
  const miss = ts.filter((t) => !labelOf(s, t));
  return [`${what}: ${ts.join(' · ')}${miss.length ? `; missing ${miss.join(', ')}` : ''}`, miss.length === 0];
};
/** No em dash, no slash, and every minus a true minus (−) in the labels, name, chips or captions. */
const noBadChars = (s: Sketch, d: Diagram): Check => {
  const all = [...s.texts.map((t) => plain(t.html)), d.name, ...d.cases.flatMap((c) => [c.chip, plain(c.cap)])].join(' ');
  return ['No em dash, no slash, and every minus a true minus (−) in the labels, name, chips and captions', !/[—/]/.test(all) && !/(^|[\s([,])-(?=[\dA-Za-z])/.test(all)];
};
/** The marigold on the drawing: which kept lines and which labels carry it. */
const marigold = (s: Sketch) => ({ lines: (LINES.get(s) ?? []).filter((l) => l.color === C.mari).map((l) => l.name), labels: s.texts.filter((t) => t.color === C.amber).map((t) => plain(t.html)) });

/** A line of STIX on the drawing, from its baseline, its box at its true width. */
function lab(s: Sketch, x: number, y: number, html: string, o: { size?: number; anchor?: 'start' | 'middle' | 'end'; color?: string } = {}): Rect {
  const size = o.size ?? 13, anchor = o.anchor ?? 'middle', w = widthOf(html, size);
  const x0 = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w : x;
  const rect: Rect = [x0, y - size * (html.includes('<sup>') ? 0.85 : 0.72), x0 + w, y + size * (html.includes('<sub>') ? 0.36 : 0.22)];
  s.labels.push({ text: plain(html), rect });
  s.text(x, y, html, { size, anchor, color: o.color ?? C.text });
  return rect;
}

/* ---------- matrices: ruled grids, entries in their cells, drawn brackets ---------- */
type Grid = { name: string; x0: number; y0: number; rows: number; cols: number; cw: number; ch: number; entries?: string[][] };
const GRIDS = new WeakMap<Sketch, Grid[]>();
const cellRect = (g: Grid, i: number, j: number): Rect => [g.x0 + (j - 1) * g.cw, g.y0 + (i - 1) * g.ch, g.x0 + j * g.cw, g.y0 + i * g.ch];
const gridRect = (g: Grid): Rect => [g.x0, g.y0, g.x0 + g.cols * g.cw, g.y0 + g.rows * g.ch];
const cellCentre = (g: Grid, i: number, j: number): P => { const r = cellRect(g, i, j); return [(r[0] + r[2]) / 2, (r[1] + r[3]) / 2]; };
/** The cell (row, column) a pixel lies in, or null outside the grid. */
const cellAt = (g: Grid, p: P): [number, number] | null => {
  const j = Math.floor((p[0] - g.x0) / g.cw) + 1, i = Math.floor((p[1] - g.y0) / g.ch) + 1;
  return i >= 1 && i <= g.rows && j >= 1 && j <= g.cols ? [i, j] : null;
};
/** A grid: its inner rules slate, its border ink (as the book's); entries, when given, centred in their cells. */
function grid(s: Sketch, g: Grid, o: { size?: number } = {}) {
  const R = gridRect(g);
  for (let i = 1; i < g.rows; i++) path(s, [[R[0], g.y0 + i * g.ch], [R[2], g.y0 + i * g.ch]], { color: C.slate, w: 1, name: `rule:${g.name}` });
  for (let j = 1; j < g.cols; j++) path(s, [[g.x0 + j * g.cw, R[1]], [g.x0 + j * g.cw, R[3]]], { color: C.slate, w: 1, name: `rule:${g.name}` });
  box(s, R, { w: 1.6, name: `grid:${g.name}` });
  g.entries?.forEach((row, i) => row.forEach((e, j) => { const [cx, cy] = cellCentre(g, i + 1, j + 1); lab(s, cx, cy + 5.5, e, { size: o.size ?? 15 }); }));
  GRIDS.set(s, [...(GRIDS.get(s) ?? []), g]);
  return g;
}
const gridNamed = (s: Sketch, name: string) => (GRIDS.get(s) ?? []).find((g) => g.name === name)!;
/** A square bracket from y0 to y1 at x, its serifs `serif` long, turned in towards the matrix. */
function bracket(s: Sketch, x: number, y0: number, y1: number, side: 'left' | 'right', name: string, serif = 8) {
  const k = side === 'left' ? serif : -serif;
  path(s, [[x + k, y0], [x, y0], [x, y1], [x + k, y1]], { w: 2.2, name: `bracket:${name}:${side}` });
}
const bracketsHold = (s: Sketch, name: string, R: Rect) => {
  const b = linesNamed(s, new RegExp(`^bracket:${name}:`));
  return b.length === 2 && b.every((l) => Math.min(...l.pts.map((p) => p[1])) < R[1] && Math.max(...l.pts.map((p) => p[1])) > R[3]) && b.some((l) => l.pts[1][0] < R[0]) && b.some((l) => l.pts[1][0] > R[2]);
};
/** The marigold outline round a cell, a row or a column (no fill). */
const HI = new WeakMap<Sketch, { name: string; rect: Rect }[]>();
function hiRect(s: Sketch, name: string, r: Rect) {
  box(s, r, { color: C.mari, w: 2.6, name: `hi:${name}` });
  HI.set(s, [...(HI.get(s) ?? []), { name, rect: r }]);
}
const hiNamed = (s: Sketch, name: string) => (HI.get(s) ?? []).find((h) => h.name === name)!.rect;
/** Which cells of g a rectangle covers exactly (its edges on the grid's rules). */
const covers = (g: Grid, r: Rect): [number, number][] => {
  const out: [number, number][] = [];
  for (let i = 1; i <= g.rows; i++) for (let j = 1; j <= g.cols; j++) { const c = cellCentre(g, i, j); if (c[0] > r[0] && c[0] < r[2] && c[1] > r[1] && c[1] < r[3]) out.push([i, j]); }
  const onRules = [r[0], r[2]].every((x) => close((x - g.x0) / g.cw, Math.round((x - g.x0) / g.cw))) && [r[1], r[3]].every((y) => close((y - g.y0) / g.ch, Math.round((y - g.y0) / g.ch)));
  return onRules ? out : [];
};

/* ===================================================================== */
/* Figure 3.1 · a 3 × 4 matrix and its entry a₂₃ (Topic 01, p. 191)      */
/* ===================================================================== */
const A23 = sub(I('a'), '23');
const CAP31 = `A 3 × 4 matrix ${AA}; the entry ${A23} (row 2, column 3) is highlighted.`;
const G31 = { x0: 80, y0: 50, rows: 3, cols: 4, cw: 60, ch: 48 };
const HI31: [number, number] = [2, 3];
const ORDER31 = (r: number, c: number) => I(`order = ${r} × ${c} (rows first, columns second)`);
const fig31: Diagram = {
  id: 'm12-03-fig-3.1',
  topic: 1,
  name: 'A 3 × 4 matrix',
  cases: [{ chip: 'Rows and columns', cap: CAP31 }],
  draw() {
    const s = new Sketch(W, 248), g = grid(s, { name: 'A', ...G31 }), R = gridRect(g);
    bracket(s, R[0] - 6, R[1] - 6, R[3] + 6, 'left', 'A');
    bracket(s, R[2] + 6, R[1] - 6, R[3] + 6, 'right', 'A');
    for (let j = 1; j <= g.cols; j++) lab(s, cellCentre(g, 1, j)[0], R[1] - 15, `${I('C')}${j}`, { size: 15 });
    for (let i = 1; i <= g.rows; i++) lab(s, 52, cellCentre(g, i, 1)[1] + 5, `${I('R')}${i}`, { size: 15 });
    lab(s, 20, cellCentre(g, 2, 1)[1] + 7, AA, { size: 22 });
    hiRect(s, 'cell', cellRect(g, ...HI31));
    const [cx, cy] = cellCentre(g, ...HI31);
    lab(s, cx, cy + 5.5, A23, { size: 16, color: C.amber });
    lab(s, W / 2, 232, ORDER31(g.rows, g.cols), { size: 14, color: C.slate });
    return s;
  },
  check() {
    const s = fig31.draw(fig31.cases[0]), out: Check[] = [], g = gridNamed(s, 'A'), R = gridRect(g);
    const hit = covers(g, hiNamed(s, 'cell'));
    out.push([`The grid has ${g.rows} rows and ${g.cols} columns, so the order printed under it, ${g.rows} × ${g.cols}, is rows first, columns second`, g.rows === 3 && g.cols === 4 && !!labelOf(s, plain(ORDER31(g.rows, g.cols)))]);
    out.push([`The highlighted outline covers exactly one cell, row ${hit[0]?.[0]}, column ${hit[0]?.[1]}: a₂₃, the entry in row 2 and column 3`, hit.length === 1 && hit[0][0] === 2 && hit[0][1] === 3]);
    const a = labelOf(s, 'a23')!, ac: P = [(a.rect[0] + a.rect[2]) / 2, (a.rect[1] + a.rect[3]) / 2], at = cellAt(g, ac);
    out.push(['The name a₂₃ stands inside that cell, in amber', !!at && at[0] === 2 && at[1] === 3 && marigold(s).labels.join() === 'a23']);
    out.push(['The marigold is the one cell only', marigold(s).lines.join() === 'hi:cell']);
    const rowsOk = [1, 2, 3].every((i) => { const l = labelOf(s, `R${i}`)!; return close((l.rect[1] + l.rect[3]) / 2, cellCentre(g, i, 1)[1], 4) && l.rect[2] < R[0]; });
    const colsOk = [1, 2, 3, 4].every((j) => { const l = labelOf(s, `C${j}`)!; return close((l.rect[0] + l.rect[2]) / 2, cellCentre(g, 1, j)[0], 1) && l.rect[3] < R[1]; });
    out.push(['R1, R2, R3 stand level with their rows, left of the matrix; C1 to C4 over their columns', rowsOk && colsOk]);
    out.push(['Square brackets enclose the grid, taller than it at both ends', bracketsHold(s, 'A', R)]);
    out.push(labelsCheck(s, ['A', 'R1', 'R2', 'R3', 'C1', 'C2', 'C3', 'C4', 'a23', 'order = 3 × 4 (rows first, columns second)']));
    out.push(noBadChars(s, fig31));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 3.2 · row meets column (Topic 01, p. 194)                      */
/* ===================================================================== */
const AIR = sub(I('a'), I('ir')), BRJ = sub(I('b'), I('rj'));
const CAP32 = `Row ${ii} of ${AA} meets column ${jj} of ${BB}: the products ${AIR}${BRJ} are summed to give the (${ii}, ${jj}) entry of ${I('AB')}.`;
const GA32: Grid = { name: 'A', x0: 20, y0: 48, rows: 3, cols: 3, cw: 40, ch: 36 };
const GB32: Grid = { name: 'B', x0: 220, y0: 48, rows: 3, cols: 2, cw: 40, ch: 36 };
const GC32: Grid = { name: 'AB', x0: 150, y0: 206, rows: 3, cols: 2, cw: 40, ch: 36 };
/** The book's row i = 2 of A and column j = 1 of B. */
const ROW32 = 2, COL32 = 1;
const LHS32 = `(${I('AB')})${sub('', I('ij'))} =`;
const RHS32 = `${AIR} ${BRJ}`;
const EXP32 = `= ${sub(I('a'), `${ii}1`)}${sub(I('b'), `1${jj}`)} + ${sub(I('a'), `${ii}2`)}${sub(I('b'), `2${jj}`)} + ${sub(I('a'), `${ii}3`)}${sub(I('b'), `3${jj}`)}`;
const fig32: Diagram = {
  id: 'm12-03-fig-3.2',
  topic: 1,
  name: 'Row meets column',
  cases: [{ chip: 'Row times column', cap: CAP32 }],
  draw() {
    const s = new Sketch(W, 452);
    const A = grid(s, { ...GA32 }), B = grid(s, { ...GB32 }), AB = grid(s, { ...GC32 });
    const RA = gridRect(A), RB = gridRect(B), RC = gridRect(AB);
    lab(s, (RA[0] + RA[2]) / 2, RA[1] - 14, AA, { size: 19 });
    lab(s, (RB[0] + RB[2]) / 2, RB[1] - 14, BB, { size: 19 });
    lab(s, RC[0] - 10, cellCentre(AB, 2, 1)[1] + 6, I('AB'), { size: 19, anchor: 'end' });
    const row: Rect = [RA[0], cellRect(A, ROW32, 1)[1], RA[2], cellRect(A, ROW32, 1)[3]];
    const col: Rect = [cellRect(B, 1, COL32)[0], RB[1], cellRect(B, 1, COL32)[2], RB[3]];
    hiRect(s, 'row', row);
    hiRect(s, 'col', col);
    hiRect(s, 'cell', cellRect(AB, ROW32, COL32));
    // the three products: from the row's right end to the column's three cells (crossing, as printed)
    const ys = [row[1] + 9, (row[1] + row[3]) / 2, row[3] - 9], xa = RA[2] + 3, xb = col[0] - 3, mid = (xa + xb) / 2;
    bend(s, [xa, ys[0]], [mid, ys[0]], [xb, cellCentre(B, 3, COL32)[1]], { color: C.slate, w: 1.4, name: 'product:3' });
    arr(s, [xa, ys[1]], [xb, cellCentre(B, 2, COL32)[1]], { color: C.slate, w: 1.4, name: 'product:2' });
    bend(s, [xa, ys[2]], [mid, ys[2]], [xb, cellCentre(B, 1, COL32)[1]], { color: C.slate, w: 1.4, name: 'product:1' });
    // into the entry (i, j) of AB: from the row (ink) and from the column (marigold), both onto the cell's top edge
    const top = cellRect(AB, ROW32, COL32);
    bend(s, [row[2] + 9, row[3] + 4], [RA[2] + 8, top[1] - 30], [top[0] + 12, top[1]], { color: C.ink, w: 1.7, name: 'into:row' });
    bend(s, [col[2] - 6, col[3] + 4], [col[0] - 18, top[1] - 44], [top[2] - 10, top[1]], { color: C.mari, w: 1.7, name: 'into:col' });
    // (AB)ij = ∑ (r = 1 to 3) air brj
    const y1 = 364, sz = 15, wl = widthOf(LHS32, sz), ws = 15, wr = widthOf(RHS32, sz), tot = wl + 5 + ws + 5 + wr, x0 = W / 2 - tot / 2;
    lab(s, x0, y1, LHS32, { size: sz, anchor: 'start' });
    const sx = x0 + wl + 5 + ws / 2;
    lab(s, sx, y1 + 4, '∑', { size: 22 });
    lab(s, sx, y1 - 20, '3', { size: 10.5 });
    lab(s, sx, y1 + 19, `${rr} = 1`, { size: 10.5 });
    lab(s, x0 + wl + 5 + ws + 5, y1, RHS32, { size: sz, anchor: 'start' });
    const eqX = x0 + widthOf(`(${I('AB')})${sub('', I('ij'))} `, sz);
    lab(s, Math.min(eqX, W - 6 - widthOf(EXP32, 14)), 404, EXP32, { size: 14, anchor: 'start' });
    lab(s, W / 2, 438, I('Row meets column → one number.'), { size: 14, color: C.slate });
    return s;
  },
  check() {
    const s = fig32.draw(fig32.cases[0]), out: Check[] = [];
    const A = gridNamed(s, 'A'), B = gridNamed(s, 'B'), AB = gridNamed(s, 'AB');
    out.push([`A is ${A.rows} × ${A.cols}, B is ${B.rows} × ${B.cols}: the inner numbers agree (${A.cols} = ${B.rows}), so AB is ${A.rows} × ${B.cols}, the grid drawn for it, and the sum runs r = 1 to ${A.cols}`, A.cols === B.rows && AB.rows === A.rows && AB.cols === B.cols && !!labelOf(s, String(A.cols)) && !!labelOf(s, 'r = 1')]);
    const row = covers(A, hiNamed(s, 'row')), col = covers(B, hiNamed(s, 'col')), cell = covers(AB, hiNamed(s, 'cell'));
    const ri = row[0]?.[0], cj = col[0]?.[1];
    out.push([`The highlighted row of A is the whole of row ${ri}, the highlighted column of B the whole of column ${cj}, and the highlighted entry of AB is (${cell[0]?.join(', ')}), row ${ri} and column ${cj}: the (i, j) entry`, row.length === A.cols && row.every((c) => c[0] === ri) && col.length === B.rows && col.every((c) => c[1] === cj) && cell.length === 1 && cell[0][0] === ri && cell[0][1] === cj]);
    const prods = linesNamed(s, /^product:/), RA = gridRect(A), hr = hiNamed(s, 'row');
    const ends = prods.map((l) => { const a = l.pts[0], b = l.pts[l.pts.length - 1], c = cellAt(B, [b[0] + 8, b[1]]); return { ok: a[0] > RA[2] && a[1] > hr[1] && a[1] < hr[3] && !!c && c[1] === cj, r: c?.[0] }; });
    out.push([`Three arrows run from the row's right end to the column, one to each of its cells (r = ${ends.map((e) => e.r).sort().join(', ')}): a${ri}r meets br${cj} for r = 1, 2, 3`, prods.length === 3 && ends.every((e) => e.ok) && [...new Set(ends.map((e) => e.r))].length === 3]);
    const into = (n: string) => { const l = linesNamed(s, new RegExp(`^into:${n}$`))[0], b = l.pts[l.pts.length - 1], c = cellAt(AB, [b[0], b[1] + 3]); return { a: l.pts[0], c, col: l.color }; };
    const fr = into('row'), fc = into('col'), RB = gridRect(B);
    out.push([`Two arrows end on the entry (${ri}, ${cj}) of AB: the ink one from A's row, the marigold one from B's column`, !!fr.c && fr.c[0] === ri && fr.c[1] === cj && !!fc.c && fc.c[0] === ri && fc.c[1] === cj && fr.a[1] >= hr[3] && fr.a[0] >= RA[2] && fc.a[1] >= RB[3] && fr.col === C.ink && fc.col === C.mari]);
    // the formula, on two sample matrices: the (2, 1) entry of AB is a21b11 + a22b21 + a23b31
    const Am = [[1, -2, 3], [4, 0, -1], [2, 5, 1]], Bm = [[2, 1], [-3, 4], [0, 6]];
    const prod = Am.map((rw) => Bm[0].map((_, j) => rw.reduce((t, v, r) => t + v * Bm[r][j], 0)));
    const e21 = Am[1][0] * Bm[0][0] + Am[1][1] * Bm[1][0] + Am[1][2] * Bm[2][0];
    out.push([`With A = [1 −2 3; 4 0 −1; 2 5 1] and B = [2 1; −3 4; 0 6]: (AB)₂₁ = a₂₁b₁₁ + a₂₂b₂₁ + a₂₃b₃₁ = ${e21}, the entry of the full product`, prod[1][0] === e21 && e21 === 8 && prod.length === 3 && prod[0].length === 2]);
    out.push(['The marigold: row i of A, column j of B, the entry of AB and the arrow from the column', marigold(s).lines.sort().join() === 'hi:cell,hi:col,hi:row,into:col']);
    out.push(labelsCheck(s, ['A', 'B', 'AB', '(AB)ij =', '∑', '3', 'r = 1', 'air brj', '= ai1b1j + ai2b2j + ai3b3j', 'Row meets column → one number.']));
    out.push(noBadChars(s, fig32));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 3.3 · a symmetric matrix of order 4 (Topic 02, p. 201)         */
/* ===================================================================== */
const AIJ = sub(I('a'), I('ij')), AJI = sub(I('a'), I('ji'));
const CAP33 = `Symmetric matrix of order 4: the entries ${AIJ} and ${AJI} are mirror images across the main diagonal; cells with equal |${ii} − ${jj}| share a hatch.`;
const G33: Grid = { name: 'S', x0: 30, y0: 58, rows: 4, cols: 4, cw: 70, ch: 70 };
/** |i − j| = 0: none; 1: rising lines; 2: falling lines; 3: both. */
type Kind = '' | '/' | '\\' | 'x';
const KIND33: Kind[] = ['', '/', '\\', 'x'];
type Hatch = { name: string; kind: Kind; box: Rect; segs: [P, P][] };
const HATCH = new WeakMap<Sketch, Hatch[]>();
/** Grey hatching over a cell, `inset` px in from its edges and clear of every label by LABEL_GAP + 1. */
function hatchCell(s: Sketch, name: string, r: Rect, kind: Kind, step = 7, inset = 2.5) {
  const bx: Rect = [r[0] + inset, r[1] + inset, r[2] - inset, r[3] - inset], avoid = s.labels.map((l) => l.rect);
  const ok = (p: P) => p[0] >= bx[0] && p[0] <= bx[2] && p[1] >= bx[1] && p[1] <= bx[3] && avoid.every((q) => rectDist(q, p) >= LABEL_GAP + 1);
  const segs: [P, P][] = [];
  const dirs = kind === 'x' ? (['/', '\\'] as const) : kind ? [kind] : [];
  for (const dir of dirs) {
    const D = step * Math.SQRT2;
    // "/" runs along x + y = k, "\" along y − x = k
    const kLo = dir === '/' ? bx[0] + bx[1] : bx[1] - bx[2], kHi = dir === '/' ? bx[2] + bx[3] : bx[3] - bx[0];
    const k0 = Math.ceil(kLo / D) * D;
    for (let k = k0; k <= kHi; k += D) {
      let a: P | null = null, b: P | null = null;
      const end = () => { if (a && b && len(a, b) >= 3) segs.push([a, b]); a = null; };
      for (let x = bx[0]; x <= bx[2] + 1e-9; x += 0.5) {
        const p: P = [x, dir === '/' ? k - x : k + x];
        if (ok(p)) { if (!a) a = p; b = p; } else end();
      }
      end();
    }
  }
  if (segs.length) s.add(`<path d="${segs.map(([a, b]) => `M${r1(a[0])} ${r1(a[1])} L${r1(b[0])} ${r1(b[1])}`).join(' ')}" fill="none" stroke="${C.grey}" stroke-width="1.1" stroke-linecap="round"/>`);
  segs.forEach((sg) => keep(s, sg, `hatch:${name}`, C.grey));
  HATCH.set(s, [...(HATCH.get(s) ?? []), { name, kind, box: bx, segs }]);
}
/** The hatch pattern a set of strokes makes, read back from their slopes. */
const kindOf = (segs: [P, P][]): Kind => {
  const up = segs.some(([a, b]) => (b[1] - a[1]) * (b[0] - a[0]) < 0), down = segs.some(([a, b]) => (b[1] - a[1]) * (b[0] - a[0]) > 0);
  return up && down ? 'x' : up ? '/' : down ? '\\' : '';
};
const FOLD33 = 16;
const fig33: Diagram = {
  id: 'm12-03-fig-3.3',
  topic: 2,
  name: 'A symmetric matrix',
  cases: [{ chip: 'Fold along the diagonal', cap: CAP33 }],
  draw() {
    const s = new Sketch(W, 462), g = grid(s, { ...G33 }), R = gridRect(g);
    // the entries: off the diagonal at the cell's centre, on it at the upper right (the fold line runs through the centre)
    for (let i = 1; i <= 4; i++) for (let j = 1; j <= 4; j++) {
      const r = cellRect(g, i, j), [cx, cy] = cellCentre(g, i, j);
      if (i === j) lab(s, r[2] - 19, r[1] + 24, sub(I('a'), `${i}${j}`), { size: 15 });
      else lab(s, cx, cy + 5.5, sub(I('a'), `${i}${j}`), { size: 15 });
    }
    // the fold line, past both corners (as printed)
    path(s, [[R[0] - FOLD33, R[1] - FOLD33], [R[2] + FOLD33, R[3] + FOLD33]], { color: C.mari, w: 2.6, name: 'fold' });
    // aij = aji, above the top right corner, its arrow onto the grid
    lab(s, W - 12, 28, `${AIJ} = ${AJI}`, { size: 17, anchor: 'end' });
    arr(s, [W - 52, 41], [R[2] - 26, R[1] - 3], { color: C.ink, w: 1.5, name: 'arrow:aij' });
    // the hatching by |i − j|
    for (let i = 1; i <= 4; i++) for (let j = 1; j <= 4; j++) if (i !== j) hatchCell(s, `${i}${j}`, cellRect(g, i, j), KIND33[Math.abs(i - j)]);
    // the legend, under the grid
    const ly = R[3] + 44;
    [1, 2, 3].forEach((d, k) => {
      const x = 16 + k * 108, sw: Rect = [x, ly - 12, x + 20, ly + 4];
      box(s, sw, { color: C.slate, w: 1, name: `swatch:${d}` });
      hatchCell(s, `legend:${d}`, sw, KIND33[d], 6, 1.5);
      lab(s, x + 26, ly + 1, `|${ii} − ${jj}| = ${d}`, { size: 13, anchor: 'start' });
    });
    lab(s, W / 2, ly + 40, I('Symmetric: fold along the diagonal'), { size: 14, color: C.slate });
    lab(s, W / 2, ly + 60, I('and the two halves match.'), { size: 14, color: C.slate });
    return s;
  },
  check() {
    const s = fig33.draw(fig33.cases[0]), out: Check[] = [], g = gridNamed(s, 'S'), R = gridRect(g);
    const at = (t: string) => { const l = labelOf(s, t)!; return cellAt(g, [(l.rect[0] + l.rect[2]) / 2, (l.rect[1] + l.rect[3]) / 2]); };
    let placed = true, mirror = true;
    for (let i = 1; i <= 4; i++) for (let j = 1; j <= 4; j++) {
      const c = at(`a${i}${j}`);
      if (!c || c[0] !== i || c[1] !== j) placed = false;
      // reflecting the cell (i, j) in the line through the diagonal's corners lands on the cell (j, i)
      const [x, y] = cellCentre(g, i, j), m: P = [R[0] + (y - R[1]), R[1] + (x - R[0])], back = cellAt(g, m);
      if (!back || back[0] !== j || back[1] !== i) mirror = false;
    }
    out.push(['Sixteen entries a11 to a44, each in its own cell (row i, column j)', placed]);
    out.push(['Reflecting the cell of aij in the main diagonal lands on the cell of aji, for every i, j: the two are mirror images', mirror]);
    const fold = linesNamed(s, /^fold$/)[0], [p0, p1] = [fold.pts[0], fold.pts[1]];
    const onFold = [1, 2, 3, 4].every((k) => { const c = cellCentre(g, k, k); return Math.abs((c[0] - p0[0]) * (p1[1] - p0[1]) - (c[1] - p0[1]) * (p1[0] - p0[0])) < 1e-6; });
    out.push(['The marigold fold line runs through the centres of a11, a22, a33, a44 and on past both corners of the grid, as printed', onFold && p0[0] < R[0] && p0[1] < R[1] && p1[0] > R[2] && p1[1] > R[3] && marigold(s).lines.join() === 'fold' && marigold(s).labels.length === 0]);
    const H = HATCH.get(s) ?? [], cellH = (i: number, j: number) => H.find((h) => h.name === `${i}${j}`);
    let byD = true, inside = true;
    for (let i = 1; i <= 4; i++) for (let j = 1; j <= 4; j++) {
      const h = cellH(i, j), want = KIND33[Math.abs(i - j)];
      if ((h ? kindOf(h.segs) : '') !== want) byD = false;
      if (h && !h.segs.every(([a, b]) => [a, b].every((p) => p[0] >= h.box[0] - 1e-6 && p[0] <= h.box[2] + 1e-6 && p[1] >= h.box[1] - 1e-6 && p[1] <= h.box[3] + 1e-6))) inside = false;
    }
    out.push(['Every cell carries the hatch of its |i − j|: the diagonal none, |i − j| = 1 rising lines, 2 falling lines, 3 crossed; cells with equal |i − j| share a hatch and no two values share one', byD && new Set(KIND33).size === 4]);
    out.push(['Every hatch stroke stays inside its own cell, clear of the grid rules', inside]);
    const leg = [1, 2, 3].map((d) => { const h = H.find((q) => q.name === `legend:${d}`)!; return kindOf(h.segs) === KIND33[d] && !!labelOf(s, `|i − j| = ${d}`); });
    out.push(['The legend: three swatches hatched as the cells with |i − j| = 1, 2, 3, each named', leg.every(Boolean)]);
    // a matrix whose entries depend only on |i − j| is symmetric
    const v = [5, -2, 7, 1], M = [0, 1, 2, 3].map((i) => [0, 1, 2, 3].map((j) => v[Math.abs(i - j)]));
    out.push(['A matrix whose entries depend only on |i − j| equals its transpose (checked on 5, −2, 7, 1 by |i − j|)', M.every((rw, i) => rw.every((x, j) => x === M[j][i]))]);
    const a = linesNamed(s, /^arrow:aij$/)[0].pts[1], tl = labelOf(s, 'aij = aji')!;
    out.push(['The arrow from "aij = aji" ends on the grid’s top edge, from above', close(a[1], R[1] - 3) && a[0] > R[0] && a[0] < R[2] && tl.rect[3] < R[1]]);
    out.push(labelsCheck(s, ['aij = aji', '|i − j| = 1', '|i − j| = 2', '|i − j| = 3', 'Symmetric: fold along the diagonal', 'and the two halves match.']));
    out.push(noBadChars(s, fig33));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 3.4 · [A | I] to [I | A⁻¹] (Topic 03, p. 209)                  */
/* ===================================================================== */
const CAP34 = `Row reduction: [${AA} | ${II}] is carried to [${II} | ${AINV}] by the same row operations applied to both blocks.`;
const M34 = { A: [['2', '1'], ['1', '1']], I: [['1', '0'], ['0', '1']], Ainv: [['1', '−1'], ['−1', '2']] };
const num = (t: string) => Number(t.replace('−', '-'));
/** Gauss–Jordan on [A | I]: the right block at the end, or null when A has no inverse. */
function gaussJordan(A: number[][]): number[][] | null {
  const n = A.length, M = A.map((r, i) => [...r, ...A.map((_, j) => (i === j ? 1 : 0))]);
  for (let c = 0; c < n; c++) {
    const p = M.findIndex((r, i) => i >= c && Math.abs(r[c]) > 1e-12);
    if (p < 0) return null;
    [M[c], M[p]] = [M[p], M[c]];
    const k = M[c][c];
    M[c] = M[c].map((v) => v / k);
    M.forEach((r, i) => { if (i !== c) { const f = r[c]; M[i] = r.map((v, j) => v - f * M[c][j]); } });
  }
  return M.map((r) => r.slice(n));
}
const mul = (X: number[][], Y: number[][]) => X.map((r) => Y[0].map((_, j) => r.reduce((t, v, k) => t + v * Y[k][j], 0)));
const CW34 = 34, CH34 = 30;
/** One augmented matrix [L | R]: two ruled blocks, a divider, one pair of brackets, the blocks' names above. */
function augmented(s: Sketch, name: string, y0: number, L: { n: string; e: string[][] }, Rt: { n: string; e: string[][] }) {
  const x0 = W / 2 - 86, gl = grid(s, { name: `${name}:L`, x0: x0 + 10, y0, rows: 2, cols: 2, cw: CW34, ch: CH34, entries: L.e });
  const gr = grid(s, { name: `${name}:R`, x0: x0 + 104, y0, rows: 2, cols: 2, cw: CW34, ch: CH34, entries: Rt.e });
  const yb = y0 + 2 * CH34;
  bracket(s, x0, y0 - 6, yb + 6, 'left', name, 7);
  bracket(s, x0 + 182, y0 - 6, yb + 6, 'right', name, 7);
  path(s, [[x0 + 91, y0 - 4], [x0 + 91, yb + 4]], { color: C.slate, w: 1.6, name: `divider:${name}` });
  lab(s, gl.x0 + CW34, y0 - 13, L.n, { size: 18 });
  lab(s, gr.x0 + CW34, y0 - 13, Rt.n, { size: 18 });
}
const fig34: Diagram = {
  id: 'm12-03-fig-3.4',
  topic: 3,
  name: 'Row reduction to the inverse',
  cases: [{ chip: 'Reduce [A | I]', cap: CAP34 }],
  draw() {
    const s = new Sketch(W, 352);
    augmented(s, 'top', 44, { n: AA, e: M34.A }, { n: II, e: M34.I });
    arr(s, [W / 2, 120], [W / 2, 190], { color: C.ink, w: 2, head: 10, name: 'arrow:reduce' });
    lab(s, W / 2 + 14, 150, 'same row operations', { size: 13.5, anchor: 'start', color: C.slate });
    lab(s, W / 2 + 14, 168, 'applied to both halves', { size: 13.5, anchor: 'start', color: C.slate });
    augmented(s, 'bottom', 230, { n: II, e: M34.I }, { n: AINV, e: M34.Ainv });
    lab(s, W / 2, 318, I('Reduce the left block to I;'), { size: 14, color: C.slate });
    lab(s, W / 2, 338, I('the right block becomes the inverse.'), { size: 14, color: C.slate });
    return s;
  },
  check() {
    const s = fig34.draw(fig34.cases[0]), out: Check[] = [];
    const read = (n: string) => gridNamed(s, n).entries!.map((r) => r.map(num));
    const A = read('top:L'), I0 = read('top:R'), I1 = read('bottom:L'), Ai = read('bottom:R'), Id = [[1, 0], [0, 1]];
    const eq = (X: number[][], Y: number[][]) => X.every((r, i) => r.every((v, j) => close(v, Y[i][j], 1e-12)));
    const gj = gaussJordan(A);
    out.push(['Row-reducing the drawn [A | I] = [2 1 | 1 0; 1 1 | 0 1] gives exactly the drawn [I | A⁻¹] = [1 0 | 1 −1; 0 1 | −1 2]', eq(I0, Id) && eq(I1, Id) && !!gj && eq(gj, Ai)]);
    out.push(['The drawn A⁻¹ is the inverse: A·A⁻¹ = A⁻¹·A = I', eq(mul(A, Ai), Id) && eq(mul(Ai, A), Id)]);
    const top = gridRect(gridNamed(s, 'top:L')), bot = gridRect(gridNamed(s, 'bottom:L')), a = linesNamed(s, /^arrow:reduce$/)[0].pts;
    out.push(['The arrow points down from [A | I] to [I | A⁻¹]', a[0][1] > top[3] && a[1][1] < bot[1] && a[1][1] > a[0][1]]);
    const both = ['top', 'bottom'].every((n) => { const L = gridRect(gridNamed(s, `${n}:L`)), R = gridRect(gridNamed(s, `${n}:R`)), d = linesNamed(s, new RegExp(`^divider:${n}$`))[0].pts[0][0]; return bracketsHold(s, n, [L[0], L[1], R[2], R[3]]) && d > L[2] && d < R[0]; });
    out.push(['Each augmented matrix is one pair of brackets round both blocks, a rule between the blocks', both]);
    const over = (t: string, n: string) => s.labels.filter((l) => l.text === t).some((l) => { const g = gridRect(gridNamed(s, n)); return close((l.rect[0] + l.rect[2]) / 2, (g[0] + g[2]) / 2, 1) && l.rect[3] < g[1]; });
    out.push(['A and I over the top blocks, I and A⁻¹ over the bottom ones', over('A', 'top:L') && over('I', 'top:R') && over('I', 'bottom:L') && over('A−1', 'bottom:R')]);
    out.push(['No marigold: the book colours nothing here', marigold(s).lines.length === 0 && marigold(s).labels.length === 0]);
    out.push(labelsCheck(s, ['A', 'I', 'A−1', '2', '1', '0', '−1', 'same row operations', 'applied to both halves', 'Reduce the left block to I;', 'the right block becomes the inverse.']));
    out.push(noBadChars(s, fig34));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 3.5 · concept map of Chapter 3 (Topic 04, p. 220)              */
/* ===================================================================== */
const CAP35 = 'Concept map of Chapter 3: how the ideas connect; the determinant method for the inverse is deferred to Chapter 4.';
/** The four branches, as printed (lines rewrapped for the phone), and the box colour (the book's orange box is the marigold). */
const BR35: { key: string; lines: string[]; color: string }[] = [
  { key: 'operations', lines: ['Operations: addition, scalar', 'multiplication, matrix product', '(conformability, non-commutative)'], color: C.ink },
  { key: 'transpose', lines: [`Transpose ${AT}; Symmetric (${AT} = ${AA});`, `Skew-symmetric (${AT} = −${AA}); ${AA} = ${I('P')} + ${I('Q')}`], color: C.ink },
  { key: 'square', lines: ['Square types: idempotent, involutory,', 'nilpotent, orthogonal; trace'], color: C.slate },
  { key: 'invertibility', lines: ['Invertibility: elementary row operations', `[${AA} | ${II}] → [${II} | ${AINV}]`], color: C.mari },
];
const LH35 = 18;
const fig35: Diagram = {
  id: 'm12-03-fig-3.5',
  topic: 4,
  name: 'Concept map of Chapter 3',
  cases: [{ chip: 'How the ideas connect', cap: CAP35 }],
  draw() {
    const s = new Sketch(W, 468);
    const root: Rect = [70, 8, 270, 58];
    box(s, root, { w: 1.8, rx: 6, name: 'box:root' });
    lab(s, W / 2, 29, 'MATRIX', { size: 15 });
    lab(s, W / 2, 49, `(order ${I('m')} × ${I('n')}, types)`, { size: 14 });
    const spineX = 30, bx0 = 50, bx1 = W - 8;
    let y = 76;
    const mids: number[] = [];
    BR35.forEach((b) => {
      const h = b.lines.length * LH35 + 14, r: Rect = [bx0, y, bx1, y + h];
      box(s, r, { color: b.color, w: b.color === C.mari ? 2 : 1.5, rx: 6, name: `box:${b.key}` });
      b.lines.forEach((t, k) => lab(s, bx0 + 12, y + 7 + 13 + k * LH35, t, { size: 13, anchor: 'start' }));
      mids.push(y + h / 2);
      path(s, [[spineX, y + h / 2], [bx0, y + h / 2]], { color: C.slate, w: 1.4, name: `branch:${b.key}` });
      y += h + 12;
    });
    path(s, [[root[0], (root[1] + root[3]) / 2], [spineX, (root[1] + root[3]) / 2], [spineX, mids[mids.length - 1]]], { color: C.slate, w: 1.4, name: 'spine' });
    // the dashed arrow on to Chapter 4
    const inv = linesNamed(s, /^box:invertibility$/)[0].pts, ib = inv[2][1], cx = 200;
    const ch4: Rect = [cx - 82, ib + 24, cx + 82, ib + 24 + 2 * LH35 + 12];
    arr(s, [cx, ib + 3], [cx, ch4[1] - 2], { color: C.slate, w: 1.4, dash: '4 3', head: 7, name: 'arrow:ch4' });
    box(s, ch4, { color: C.slate, w: 1.4, dash: '5 4', rx: 6, name: 'box:ch4' });
    lab(s, cx, ch4[1] + 6 + 13, 'Ch. 4: Determinants', { size: 13, color: C.slate });
    lab(s, cx, ch4[1] + 6 + 13 + LH35, 'and adjoint inverse', { size: 13, color: C.slate });
    lab(s, W / 2, ch4[3] + 30, I('How the chapter’s ideas connect; the determinant'), { size: 13, color: C.slate });
    lab(s, W / 2, ch4[3] + 49, I('method for the inverse is deferred to Chapter 4.'), { size: 13, color: C.slate });
    return s;
  },
  check() {
    const s = fig35.draw(fig35.cases[0]), out: Check[] = [];
    const rect = (n: string): Rect => { const p = linesNamed(s, new RegExp(`^box:${n}$`))[0].pts; return [p[0][0], p[0][1], p[2][0], p[2][1]]; };
    const root = rect('root'), spine = linesNamed(s, /^spine$/)[0].pts;
    const joined = BR35.every((b) => {
      const r = rect(b.key), br = linesNamed(s, new RegExp(`^branch:${b.key}$`))[0].pts;
      return close(br[0][0], spine[1][0]) && br[0][1] >= spine[1][1] && br[0][1] <= spine[2][1] && close(br[1][0], r[0]) && br[1][1] > r[1] && br[1][1] < r[3];
    });
    out.push(['Four branches, each joined to the MATRIX box: the spine leaves the box’s side and each branch runs from the spine to its box', joined && close(spine[0][0], root[0]) && spine[0][1] > root[1] && spine[0][1] < root[3]]);
    const order = BR35.map((b) => rect(b.key)[1]);
    out.push(['The branches in the book’s order, left to right read top to bottom: Operations, Transpose, Square types, Invertibility; no two boxes overlap', order.every((v, i) => !i || v > rect(BR35[i - 1].key)[3])]);
    const a = linesNamed(s, /^arrow:ch4$/)[0], inv = rect('invertibility'), ch4 = linesNamed(s, /^box:ch4$/)[0];
    out.push(['A dashed arrow runs from the Invertibility box down to the dashed "Ch. 4: Determinants and adjoint inverse" box', a.dash && ch4.dash && a.pts[0][1] >= inv[3] && a.pts[1][1] <= ch4.pts[0][1] + 1e-6 && a.pts[0][0] > inv[0] && a.pts[0][0] < inv[2]]);
    out.push(['The marigold is the Invertibility box (the book’s orange) only', marigold(s).lines.join() === 'box:invertibility' && marigold(s).labels.length === 0]);
    const words = BR35.flatMap((b) => b.lines.map(plain)).join(' ');
    out.push(['Every word of the four boxes as printed', words === 'Operations: addition, scalar multiplication, matrix product (conformability, non-commutative) Transpose AT; Symmetric (AT = A); Skew-symmetric (AT = −A); A = P + Q Square types: idempotent, involutory, nilpotent, orthogonal; trace Invertibility: elementary row operations [A | I] → [I | A−1]']);
    out.push(labelsCheck(s, ['MATRIX', '(order m × n, types)', ...BR35.flatMap((b) => b.lines.map(plain)), 'Ch. 4: Determinants', 'and adjoint inverse', 'How the chapter’s ideas connect; the determinant', 'method for the inverse is deferred to Chapter 4.']));
    out.push(noBadChars(s, fig35));
    out.push(...layout(s));
    return out;
  },
};

export const DIAGRAMS_MATHEMATICS_12_03: Diagram[] = [fig31, fig32, fig33, fig34, fig35];
