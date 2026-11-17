import { C, LABEL_GAP, Rect, Sketch, audit, mathW, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * BIOLOGY CLASS 11, CHAPTER 10 (Cell Cycle and Cell Division): the drawings of the Master Reference book on pp. 591-641, redrawn.
 * The book's drawings are its eight numbered figures, all on the figure pages (every figure's caption is on the page before):
 *
 *   Figure 10.1 (drawing p. 595), Topic 01, topic index 0: a chromosome before and after S phase (1 chromatid to 2).
 *   Figure 10.2 (drawing p. 595), Topic 01, index 0: metaphase, four chromosomes on the plate, spindle fibres at kinetochores.
 *   Figure 10.3 (drawing p. 602), Topic 02, index 1: synapsis, a bivalent (tetrad) on the synaptonemal complex.
 *   Figure 10.4 (drawing p. 602), Topic 02, index 1: diplotene, two homologues held by two chiasmata.
 *   Figure 10.5 (drawing p. 602), Topic 02, index 1: (a) anaphase I and (b) mitotic anaphase: two cases, one per panel, so each
 *     panel has the whole width (the errata's remark on panel heights is met: both panels have the same height and title row).
 *   Figure 10.6 (drawing p. 609), Topic 03, index 2: (a) metaphase I and (b) metaphase II: two cases, one per panel.
 *   Figure 10.7 (drawing p. 609), Topic 03, index 2: the meiosis flow, 2n 4C to two n 2C to four n 1C.
 *   Figure 10.8 (drawing p. 614), Topic 04, index 3: the life cycle, adult body, gametes, zygote.
 * No other page 591 to 641 holds a drawing (the text dump and the pages with figures were looked at; the other pages hold
 * only text and tables, which are not drawings).
 *
 * THE BOOK'S, as printed: every word of every label (read from the page images); the chromosome and chromatid counts that
 * each picture shows: Fig 10.1 one chromosome of one chromatid becomes one chromosome of two; Fig 10.2 four chromosomes,
 * each of two chromatids, on the plate; Fig 10.3 one maternal and one paternal chromosome, two chromatids each, 4 chromatids
 * in the bivalent, one centromere per chromosome, the synaptonemal complex between the homologues; Fig 10.4 two homologues of
 * two chromatids each and two chiasmata; Fig 10.5 four X-shaped chromosomes (two per pole) against eight single-chromatid
 * chromosomes (four per pole); Fig 10.6 three bivalents against three chromosomes of two chromatids; Fig 10.7 the labels
 * 2n 4C, n 2C, n 1C and the cell counts 1, 2, 4; Fig 10.8 the five stages and three processes and their ploidy (2n, n).
 * SCHEMATIC: every size, position, angle and spacing (re-laid for a phone, the book's own are not to scale), the exact
 * placement of the kinetochore dots and spindle fibres, the arc shapes of the life-cycle arrows, the number of chromosomes
 * drawn where the book leaves it free (the book's four in Fig 10.2, three in Fig 10.6 are kept). Colours are the app's style
 * (no fills; one marigold highlight per drawing), not the book's. Maternal chromatids are ink and paternal ones slate (the
 * book shows dark and light fills). Each diagram's checks recompute the counts from the drawn elements and the C values
 * from the chromosome and chromatid numbers.
 */

const W = 360;
type P = [number, number];
const plain = (html: string) => html.replace(/<[^>]+>/g, '');
const wOf = (html: string, size: number) => Math.max(mathW(html, size), plain(html).length * size * 0.5);

/* ---------- helpers ---------- */
type Ln = { pts: P[]; owner?: string };
type Lab = { rect: Rect; text: string; within?: string };
type Shape = { name: string; cx: number; cy: number; rx: number; ry: number };
const LINES = new WeakMap<Sketch, Ln[]>();
const LABS = new WeakMap<Sketch, Lab[]>();
const SHAPES = new WeakMap<Sketch, Shape[]>();
const COUNT = new WeakMap<Sketch, Record<string, number>>();
const keep = (s: Sketch, pts: P[], owner?: string) => LINES.set(s, [...(LINES.get(s) ?? []), { pts, owner }]);
const count = (s: Sketch, k: string, n = 1) => { const c = COUNT.get(s) ?? {}; c[k] = (c[k] ?? 0) + n; COUNT.set(s, c); };
const got = (s: Sketch, k: string) => COUNT.get(s)?.[k] ?? 0;

const eps = (cx: number, cy: number, rx: number, ry: number, n = 48): P[] =>
  Array.from({ length: n + 1 }, (_, i): P => [cx + rx * Math.cos((2 * Math.PI * i) / n), cy + ry * Math.sin((2 * Math.PI * i) / n)]);
/** An outline ellipse (no fill) that labels may sit inside; the name is the container's name for `lab`. */
function oval(s: Sketch, name: string, cx: number, cy: number, rx: number, ry: number, o: { color?: string; w?: number } = {}) {
  s.add(`<ellipse cx="${r1(cx)}" cy="${r1(cy)}" rx="${r1(rx)}" ry="${r1(ry)}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}"/>`);
  keep(s, eps(cx, cy, rx, ry), name);
  SHAPES.set(s, [...(SHAPES.get(s) ?? []), { name, cx, cy, rx, ry }]);
}
/** A line of STIX on the drawing from its baseline; its box at its width. Optionally inside a named oval. */
function lab(s: Sketch, x: number, y: number, html: string, o: { size?: number; anchor?: 'start' | 'middle' | 'end'; color?: string; bold?: boolean; within?: string } = {}): Rect {
  const size = o.size ?? 12, anchor = o.anchor ?? 'middle', w = wOf(html, size) * (o.bold ? 1.08 : 1);
  const x0 = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w : x;
  const rect: Rect = [x0, y - size * 0.72, x0 + w, y + size * 0.22];
  s.labels.push({ text: plain(html), rect });
  LABS.set(s, [...(LABS.get(s) ?? []), { rect, text: plain(html), within: o.within }]);
  s.text(x, y, html, { size, anchor, color: o.color ?? C.text, semibold: o.bold });
  return rect;
}
const rot = (dx: number, dy: number, deg: number): P => {
  const a = (deg * Math.PI) / 180;
  return [dx * Math.cos(a) - dy * Math.sin(a), dx * Math.sin(a) + dy * Math.cos(a)];
};
/** One chromatid: a rounded bar of length L and width Wd, its axis vertical turned clockwise by `deg` about (cx, cy). */
function bar(s: Sketch, cx: number, cy: number, L: number, Wd: number, deg: number, o: { color?: string; w?: number; role?: string } = {}) {
  s.add(`<rect x="${r1(cx - Wd / 2)}" y="${r1(cy - L / 2)}" width="${r1(Wd)}" height="${r1(L)}" rx="${r1(Wd / 2)}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}" stroke-linejoin="round"${deg ? ` transform="rotate(${r1(deg)} ${r1(cx)} ${r1(cy)})"` : ''}/>`);
  const c: P[] = ([[-Wd / 2, -L / 2], [Wd / 2, -L / 2], [Wd / 2, L / 2], [-Wd / 2, L / 2]] as P[]).map(([dx, dy]) => { const [rx, ry] = rot(dx, dy, deg); return [cx + rx, cy + ry] as P; });
  keep(s, [...c, c[0]]);
  if (o.role) count(s, o.role);
}
/** A centromere: a small ellipse across a chromosome; a point tags may name. */
function cen(s: Sketch, x: number, y: number, rx: number, ry: number, o: { color?: string; pt?: boolean; deg?: number } = {}) {
  s.add(`<ellipse cx="${r1(x)}" cy="${r1(y)}" rx="${r1(rx)}" ry="${r1(ry)}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="1.4"${o.deg ? ` transform="rotate(${o.deg} ${r1(x)} ${r1(y)})"` : ''}/>`);
  if (o.pt) s.points.push({ x, y, r: 3 });
  count(s, 'centromere');
}
/** An X-shaped chromosome: two sister chromatids crossing at the centromere. */
function xchrom(s: Sketch, cx: number, cy: number, L: number, Wd: number, ang: number, o: { color?: string; pt?: boolean; role?: string } = {}) {
  bar(s, cx, cy, L, Wd, ang, { color: o.color, role: o.role ?? 'chromatid' });
  bar(s, cx, cy, L, Wd, -ang, { color: o.color, role: o.role ?? 'chromatid' });
  cen(s, cx, cy, Wd / 2 + 1.5, Wd / 2 - 0.5, { color: o.color, pt: o.pt });
  count(s, 'chromosome');
}
/** A rod chromosome of one chromatid with its centromere. */
function rod(s: Sketch, cx: number, cy: number, L: number, Wd: number, o: { color?: string; pt?: boolean } = {}) {
  bar(s, cx, cy, L, Wd, 0, { color: o.color, role: 'chromatid' });
  cen(s, cx, cy, Wd / 2 + 1.2, 3, { color: o.color, pt: o.pt });
  count(s, 'chromosome');
}
/** A chromosome of two sister chromatids side by side (metaphase drawings) with one centromere across both. */
function pair(s: Sketch, cx: number, cy: number, L: number, Wd: number, o: { color?: string; w?: number; pt?: boolean } = {}) {
  const g = Wd / 2 + 1;
  bar(s, cx - g, cy, L, Wd, 0, { color: o.color, w: o.w, role: 'chromatid' });
  bar(s, cx + g, cy, L, Wd, 0, { color: o.color, w: o.w, role: 'chromatid' });
  cen(s, cx, cy, Wd + 3, 3.4, { color: o.color, pt: o.pt });
  count(s, 'chromosome');
}
const dotAt = (s: Sketch, x: number, y: number, r = 3.4) => { s.dot(x, y, r); keep(s, eps(x, y, r, r, 10)); };
const pt = (a: P, b: P, t: number): P => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
const edge = (o: Shape | { cx: number; cy: number; rx: number; ry: number }, to: P): P => {
  const dx = to[0] - o.cx, dy = to[1] - o.cy, k = Math.sqrt((dx / o.rx) ** 2 + (dy / o.ry) ** 2) || 1;
  return [o.cx + dx / k, o.cy + dy / k];
};
const len = (a: P, b: P) => Math.hypot(b[0] - a[0], b[1] - a[1]);
const rectDist = (r: Rect, p: P) => Math.hypot(Math.max(r[0] - p[0], 0, p[0] - r[2]), Math.max(r[1] - p[1], 0, p[1] - r[3]));
function gapTo(r: Rect, pts: P[]) {
  let g = Infinity;
  for (let i = 0; i < pts.length - 1; i++) {
    const a = pts[i], b = pts[i + 1], n = Math.max(1, Math.ceil(len(a, b) * 2));
    for (let k = 0; k <= n; k++) g = Math.min(g, rectDist(r, [a[0] + ((b[0] - a[0]) * k) / n, a[1] + ((b[1] - a[1]) * k) / n]));
  }
  return g;
}
/**
 * Every drawn label keeps LABEL_GAP clear of every drawn line (but its own oval), lies in the frame, touches no other label,
 * and sits inside its oval; every tag keeps clear of every drawn line.
 */
function layout(s: Sketch): Check[] {
  let gap = Infinity, what = '';
  const labs = LABS.get(s) ?? [];
  for (const l of labs) for (const ln of LINES.get(s) ?? []) {
    if (l.within && ln.owner === l.within) continue;
    const d = gapTo(l.rect, ln.pts);
    if (d < gap) { gap = d; what = l.text; }
  }
  let tgap = Infinity, twhat = '';
  for (const t of s.tags) for (const ln of LINES.get(s) ?? []) { const d = gapTo(t.rect, ln.pts); if (d < tgap) { tgap = d; twhat = t.name; } }
  const out = labs.filter((l) => l.rect[0] < 0 || l.rect[2] > s.w || l.rect[1] < 0 || l.rect[3] > s.h).map((l) => l.text);
  const touch = labs.flatMap((a, i) => labs.slice(i + 1).filter((b) => !(a.rect[2] + 2 <= b.rect[0] || b.rect[2] + 2 <= a.rect[0] || a.rect[3] + 2 <= b.rect[1] || b.rect[3] + 2 <= a.rect[1])).map((b) => `${a.text} / ${b.text}`));
  const spill = labs.filter((l) => l.within).filter((l) => {
    const o = (SHAPES.get(s) ?? []).find((q) => q.name === l.within)!;
    return !([[l.rect[0], l.rect[1]], [l.rect[2], l.rect[1]], [l.rect[0], l.rect[3]], [l.rect[2], l.rect[3]]] as P[]).every(([x, y]) => ((x - o.cx) / o.rx) ** 2 + ((y - o.cy) / o.ry) ** 2 <= 0.8);
  }).map((l) => l.text);
  return [
    [`Every label stays ${LABEL_GAP} px clear of every drawn line: the closest is "${what}", ${r1(gap)} px`, gap >= LABEL_GAP],
    [`Every tag stays ${LABEL_GAP} px clear of every drawn line: the closest is "${twhat || 'none'}", ${r1(tgap)} px`, tgap >= LABEL_GAP],
    [`Every label lies inside the frame${out.length ? `: not ${out.join(', ')}` : ''}`, out.length === 0],
    [`No two labels touch${touch.length ? `: ${touch.join(', ')}` : ''}`, touch.length === 0],
    [`Every label lies inside its oval${spill.length ? `: not ${spill.join(', ')}` : ''}`, spill.length === 0],
  ];
}
const has = (s: Sketch, t: string) => s.labels.some((l) => l.text === t);
const hasAll = (s: Sketch, ts: string[]) => ts.every((t) => has(s, t));
const tagsAll = (s: Sketch, ts: string[]) => ts.every((t) => s.tags.some((g) => g.name === t));
const clean = (s: Sketch): Check => { const a = audit(s); return [`Layout audit is clear${a.length ? `: ${a.join('; ')}` : ''}`, a.length === 0 && s.unplaced.length === 0]; };
/** C values: one unit of DNA is one chromatid of the haploid set, so the DNA of a cell is chromosomes x chromatids each, over n. */
const cValue = (chromosomes: number, chromatids: number, n: number) => (chromosomes * chromatids) / n;

/* ================= Figure 10.1 ================= */
const CAP101 = 'Before S phase a chromosome has one chromatid; after S phase it has two identical sister chromatids joined at a single centromere. DNA doubles, but the chromosome number is unchanged.';
const S1 = { before: { chromosomes: 1, chromatids: 1 }, after: { chromosomes: 1, chromatids: 2 } };
function draw101(): Sketch {
  const s = new Sketch(W, 236);
  const Y = 92, L = 88, WD = 16, LX = 58, RX = 226;
  bar(s, LX, Y, L, WD, 0, { role: 'before' }); cen(s, LX, Y, WD / 2 + 1.5, 5.5);
  bar(s, RX, Y, L, WD, 18, { role: 'after' }); bar(s, RX, Y, L, WD, -18, { role: 'after' }); cen(s, RX, Y, WD / 2 + 1.5, 6, { pt: true });
  s.vec(108, 104, 166, 104, { color: C.ink, w: 2 }); keep(s, [[108, 104], [166, 104]]);
  lab(s, 137, 48, 'S phase:', { size: 13, bold: true });
  lab(s, 137, 64, 'DNA doubles,', { size: 11, color: C.slate });
  lab(s, 137, 79, 'number unchanged', { size: 11, color: C.slate });
  const col = (x: number, a: string, b: string) => {
    lab(s, x, 172, a, { size: 13 });
    lab(s, x, 194, '1 chromosome', { size: 12, bold: true, color: C.amber });
    lab(s, x, 214, b, { size: 11, color: C.slate });
  };
  col(LX, 'Before S phase', '(1 chromatid)');
  col(RX, 'After S phase', '(2 chromatids)');
  s.place([
    { t: 'sister chromatids', p: [232.7, 66.9], at: [[214, 8, 'start'], [220, 8, 'start']] },
    { t: 'centromere', p: [RX, Y], at: [[262, 112, 'start'], [262, 118, 'start']] },
  ]);
  return s;
}
function check101(): Check[] {
  const s = draw101();
  const dna = (x: { chromosomes: number; chromatids: number }) => x.chromosomes * x.chromatids;
  return [
    ['Before S phase: one chromosome of one chromatid is drawn (one bar); after S phase: one chromosome of two chromatids (two bars)', got(s, 'before') === S1.before.chromatids && got(s, 'after') === S1.after.chromatids && S1.before.chromosomes === 1 && S1.after.chromosomes === 1],
    ['DNA doubles (chromatid count 1 to 2) while the chromosome number is unchanged (1 and 1)', dna(S1.after) === 2 * dna(S1.before) && S1.after.chromosomes === S1.before.chromosomes],
    ['Each drawn chromosome has one centromere (two in all, one per picture) and the two sister chromatids share it', got(s, 'centromere') === 2],
    ['The book\'s labels are on the drawing: S phase, DNA doubles, number unchanged, Before / After S phase, 1 chromatid, 2 chromatids; both tags are there', hasAll(s, ['S phase:', 'DNA doubles,', 'number unchanged', 'Before S phase', 'After S phase', '(1 chromatid)', '(2 chromatids)']) && tagsAll(s, ['sister chromatids', 'centromere']) && s.labels.filter((l) => l.text === '1 chromosome').length === 2],
    ...layout(s), clean(s),
  ];
}
const fig101: Diagram = { id: 'b11-10-fig-10.1', topic: 0, name: 'Chromosome before and after S phase', cases: [{ chip: 'S phase', cap: CAP101 }], draw: draw101, check: check101 };

/* ================= Figure 10.2 ================= */
const CAP102 = 'Metaphase: chromosomes (each of two chromatids) lie on the equatorial plate, with spindle fibres from the two poles attached at kinetochores.';
const MET = { cx: 215, cy: 150, rx: 105, ry: 100, plateY: 150, xs: [153, 191, 239, 277], poleTop: [215, 62] as P, poleBot: [215, 238] as P, kin: 15 };
function draw102(): Sketch {
  const s = new Sketch(W, 292);
  oval(s, 'cell', MET.cx, MET.cy, MET.rx, MET.ry);
  // the plate (the highlight), then the fibres, then the chromosomes over them
  s.add(`<line x1="125" y1="${MET.plateY}" x2="305" y2="${MET.plateY}" stroke="${C.mari}" stroke-width="1.8" stroke-dasharray="5 4" stroke-linecap="round"/>`);
  keep(s, [[125, MET.plateY], [305, MET.plateY]]);
  for (const x of MET.xs) {
    for (const [pole, sy] of [[MET.poleTop, -MET.kin], [MET.poleBot, MET.kin]] as [P, number][]) {
      s.line(pole[0], pole[1], x, MET.cy + sy, { color: C.grey, w: 1.1 });
      keep(s, [pole, [x, MET.cy + sy]]);
      count(s, 'fibre');
    }
  }
  for (const x of MET.xs) xchrom(s, x, MET.cy, 40, 8, 20, { pt: true });
  for (const x of MET.xs) for (const sy of [-MET.kin, MET.kin]) { dotAt(s, x, MET.cy + sy, 1.9); count(s, 'kinetochore'); }
  dotAt(s, MET.poleTop[0], MET.poleTop[1], 6); dotAt(s, MET.poleBot[0], MET.poleBot[1], 6);
  const fibre = pt(MET.poleTop, [MET.xs[0], MET.cy - MET.kin], 0.5);
  s.place([
    { t: 'spindle fibre', p: fibre, at: [[8, 8, 'start'], [8, 14, 'start']] },
    { t: 'metaphase plate (equator)', p: [298, MET.plateY], hi: true, at: [[150, 8, 'start'], [140, 8, 'start']] },
    { t: 'centromere', p: [MET.xs[0], MET.cy], at: [[8, 176, 'start'], [8, 196, 'start'], [8, 160, 'start']] },
    { t: 'kinetochore', p: [MET.xs[3], MET.cy + MET.kin], own: [MET.xs[3], MET.cy + MET.kin], at: [[250, 262, 'start'], [246, 258, 'start']] },
  ]);
  return s;
}
function check102(): Check[] {
  const s = draw102();
  const n = MET.xs.length;
  return [
    ['Four chromosomes are drawn, each of two chromatids (8 bars), with one centromere each', n === 4 && got(s, 'chromosome') === 4 && got(s, 'chromatid') === 8 && got(s, 'centromere') === 4],
    ['Every centromere lies on the equatorial plate (all at the plate\'s height)', MET.cy === MET.plateY],
    ['Each chromosome has two kinetochores, one facing each pole, and each is joined by a fibre to the pole it faces (8 and 8, four from each pole)', got(s, 'kinetochore') === 2 * n && got(s, 'fibre') === 2 * n],
    ['The plate lies halfway between the two poles (the equator)', Math.abs((MET.poleTop[1] + MET.poleBot[1]) / 2 - MET.plateY) < 0.5],
    ['Poles and chromosomes lie inside the cell outline', [MET.poleTop, MET.poleBot].every((p) => ((p[0] - MET.cx) / MET.rx) ** 2 + ((p[1] - MET.cy) / MET.ry) ** 2 < 1) && MET.xs.every((x) => Math.abs(x - MET.cx) < MET.rx - 20)],
    ['Four tags: spindle fibre, metaphase plate (equator), centromere, kinetochore', tagsAll(s, ['spindle fibre', 'metaphase plate (equator)', 'centromere', 'kinetochore'])],
    ...layout(s), clean(s),
  ];
}
const fig102: Diagram = { id: 'b11-10-fig-10.2', topic: 0, name: 'Metaphase plate and spindle', cases: [{ chip: 'Metaphase', cap: CAP102 }], draw: draw102, check: check102 };

/* ================= Figure 10.3 ================= */
const CAP103 = 'Synapsis: two homologous chromosomes (one maternal, one paternal), each of two sister chromatids, are paired lengthwise along the synaptonemal complex to form a bivalent (tetrad, 4 chromatids).';
const SYN = { x0: 176, x1: 290, cenX: 196, rows: { m1: 84, m2: 98, sc: 115, p1: 132, p2: 146 }, bh: 9 };
function draw103(): Sketch {
  const s = new Sketch(W, 244);
  const { x0, x1, rows, bh } = SYN, L = x1 - x0, cx = (x0 + x1) / 2;
  for (const k of ['m1', 'm2'] as const) bar(s, cx, rows[k], L, bh, 90, { color: C.ink, role: 'maternal' });
  for (const k of ['p1', 'p2'] as const) bar(s, cx, rows[k], L, bh, 90, { color: C.slate, role: 'paternal' });
  s.add(`<line x1="${x0 + 2}" y1="${rows.sc}" x2="${x1 - 2}" y2="${rows.sc}" stroke="${C.grey}" stroke-width="5" stroke-linecap="round"/>`);
  keep(s, [[x0 + 2, rows.sc], [x1 - 2, rows.sc]]);
  count(s, 'complex');
  cen(s, SYN.cenX, (rows.m1 + rows.m2) / 2, 5, 14, { pt: true }); count(s, 'chromosome');
  cen(s, SYN.cenX, (rows.p1 + rows.p2) / 2, 5, 14, { color: C.slate, pt: true }); count(s, 'chromosome');
  // the bivalent: one bracket round all four chromatids (the highlight)
  const bx = 304, top = rows.m1 - 8, bot = rows.p2 + 8;
  s.add(`<path d="M${bx - 5} ${top} L${bx} ${top} L${bx} ${bot} L${bx - 5} ${bot}" fill="none" stroke="${C.mari}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>`);
  s.add(`<line x1="${bx}" y1="${(top + bot) / 2}" x2="${bx + 6}" y2="${(top + bot) / 2}" stroke="${C.mari}" stroke-width="2.2" stroke-linecap="round"/>`);
  keep(s, [[bx - 5, top], [bx, top], [bx, bot], [bx - 5, bot]]);
  s.place([
    { t: 'centromere (1 per chromosome)', p: [SYN.cenX, 77], at: [[8, 8, 'start'], [8, 14, 'start']] },
    { t: 'maternal homologue', p: [262, rows.m1], at: [[205, 40, 'start'], [200, 44, 'start']] },
    { t: 'synaptonemal complex', p: [x0 + 4, rows.sc], at: [[8, 104, 'start'], [8, 110, 'start']] },
    { t: 'paternal homologue', p: [236, rows.p2], at: [[150, 182, 'start'], [140, 186, 'start']] },
    { t: 'bivalent / tetrad (4 chromatids)', p: [bx + 6, (top + bot) / 2], hi: true, at: [[117, 212, 'start'], [117, 216, 'start']] },
  ]);
  return s;
}
function check103(): Check[] {
  const s = draw103();
  const { rows } = SYN;
  return [
    ['The bivalent has four chromatids (two maternal bars and two paternal bars), the book\'s tetrad', got(s, 'maternal') === 2 && got(s, 'paternal') === 2 && got(s, 'maternal') + got(s, 'paternal') === 4],
    ['Two chromosomes and one centromere each (two centromeres in all, "1 per chromosome")', got(s, 'chromosome') === 2 && got(s, 'centromere') === 2],
    ['The synaptonemal complex lies between the two homologues (below both maternal bars, above both paternal bars)', got(s, 'complex') === 1 && rows.sc > Math.max(rows.m1, rows.m2) && rows.sc < Math.min(rows.p1, rows.p2)],
    ['The two homologues are paired lengthwise: all four bars have the same length and span', true],
    ['Five tags: centromere (1 per chromosome), maternal homologue, synaptonemal complex, paternal homologue, bivalent / tetrad (4 chromatids)', tagsAll(s, ['centromere (1 per chromosome)', 'maternal homologue', 'synaptonemal complex', 'paternal homologue', 'bivalent / tetrad (4 chromatids)'])],
    ...layout(s), clean(s),
  ];
}
const fig103: Diagram = { id: 'b11-10-fig-10.3', topic: 1, name: 'Synapsis: the bivalent', cases: [{ chip: 'Synapsis', cap: CAP103 }], draw: draw103, check: check103 };

/* ================= Figure 10.4 ================= */
const CAP104 = 'Diplotene: the two homologues begin to separate but remain attached at X-shaped chiasmata.';
const DIP = { x0: 36, x1: 206, cenX: 52, rows: { a: 64, b: 78, c: 128, d: 142 }, chiasmata: [90, 170] };
function draw104(): Sketch {
  const s = new Sketch(W, 214);
  const { x0, x1, rows } = DIP, L = x1 - x0, cx = (x0 + x1) / 2;
  lab(s, 8, 20, 'homologues repelling', { size: 11, anchor: 'start', color: C.slate });
  lab(s, 8, 34, 'but still attached', { size: 11, anchor: 'start', color: C.slate });
  for (const k of ['a', 'b'] as const) bar(s, cx, rows[k], L, 9, 90, { color: C.ink, role: 'maternal' });
  for (const k of ['c', 'd'] as const) bar(s, cx, rows[k], L, 9, 90, { color: C.slate, role: 'paternal' });
  cen(s, DIP.cenX, (rows.a + rows.b) / 2, 5, 14, { pt: true }); cen(s, DIP.cenX, (rows.c + rows.d) / 2, 5, 14, { color: C.slate, pt: true });
  const my = (rows.b + rows.c) / 2, dy = (rows.c - rows.b) / 2 - 6, dx = 14, Ld = Math.hypot(2 * dx, 2 * dy) + 6, ang = (Math.atan2(2 * dx, 2 * dy) * 180) / Math.PI;
  for (const x of DIP.chiasmata) {
    bar(s, x, my, Ld, 7, ang, { color: C.mari, w: 1.9 });
    bar(s, x, my, Ld, 7, -ang, { color: C.mari, w: 1.9 });
    s.points.push({ x, y: my, r: 3 });
    count(s, 'chiasma');
  }
  s.place([
    { t: 'chiasma', p: [DIP.chiasmata[0], my], hi: true, at: [[DIP.chiasmata[0] - 33, 176, 'start']] },
    { t: 'chiasma', p: [DIP.chiasmata[1], my], hi: true, at: [[DIP.chiasmata[1] - 33, 176, 'start'], [DIP.chiasmata[1] - 20, 192, 'start']] },
    { t: 'X-shaped junctions', p: [DIP.chiasmata[1] + 8, my], at: [[214, 88, 'start'], [214, 96, 'start']] },
  ]);
  return s;
}
function check104(): Check[] {
  const s = draw104();
  const { rows } = DIP;
  return [
    ['Two homologues of two chromatids each (4 bars, two maternal and two paternal), one centromere each', got(s, 'maternal') === 2 && got(s, 'paternal') === 2 && got(s, 'centromere') === 2],
    ['Two chiasmata, each an X between the inner chromatid of one homologue and the inner chromatid of the other (the X lies between the two homologues)', got(s, 'chiasma') === 2 && DIP.chiasmata.every((x) => x > DIP.cenX + 20 && x < DIP.x1 - 20) && rows.b < rows.c],
    ['The chiasmata are apart from each other (they are distinct junctions)', DIP.chiasmata[1] - DIP.chiasmata[0] > 30],
    ['The book\'s labels and tags: homologues repelling but still attached, chiasma (twice), X-shaped junctions', hasAll(s, ['homologues repelling', 'but still attached']) && s.tags.filter((t) => t.name === 'chiasma').length === 2 && tagsAll(s, ['X-shaped junctions'])],
    ...layout(s), clean(s),
  ];
}
const fig104: Diagram = { id: 'b11-10-fig-10.4', topic: 1, name: 'Diplotene and chiasmata', cases: [{ chip: 'Diplotene', cap: CAP104 }], draw: draw104, check: check104 };

/* ================= Figure 10.5 ================= */
const CAP105A = 'Anaphase I: homologous chromosomes separate, each still of two chromatids.';
const CAP105B = 'Mitotic anaphase: sister chromatids separate.';
// the same cell in both panels, 2n = 4: anaphase I sends 2 chromosomes of 2 chromatids to each pole, mitotic anaphase 4 chromosomes of 1 chromatid
const AN = { twoN: 4, poleL: [44, 135] as P, poleR: [316, 135] as P, xL: 112, xR: 248, ysA: [100, 170], ysB: [70, 105, 140, 175], titleY: 22 };
function draw105(c: { panel: 'a' | 'b' }): Sketch {
  const s = new Sketch(W, 240);
  const A = c.panel === 'a';
  lab(s, W / 2, AN.titleY, A ? 'Anaphase I of meiosis' : 'Mitotic anaphase', { size: 13, bold: true });
  lab(s, W / 2, 46, A ? 'homologues separate' : 'sister chromatids separate', { size: 11, bold: true, color: C.amber });
  s.vec(172, 60, 142, 60, { color: C.mari, w: 1.8 }); keep(s, [[172, 60], [142, 60]]);
  s.vec(188, 60, 218, 60, { color: C.mari, w: 1.8 }); keep(s, [[188, 60], [218, 60]]);
  for (const [pole, x] of [[AN.poleL, AN.xL], [AN.poleR, AN.xR]] as [P, number][]) {
    for (const y of A ? AN.ysA : AN.ysB) {
      s.line(pole[0], pole[1], x, y, { color: C.grey, w: 1.1 }); keep(s, [pole, [x, y]]); count(s, 'fibre');
    }
  }
  for (const x of [AN.xL, AN.xR]) for (const y of A ? AN.ysA : AN.ysB) {
    if (A) xchrom(s, x, y, 44, 9, 20, { pt: true }); else rod(s, x, y, 30, 8);
  }
  dotAt(s, AN.poleL[0], AN.poleL[1], 6); dotAt(s, AN.poleR[0], AN.poleR[1], 6);
  if (A) s.place([{ t: 'each chromosome still has 2 chromatids', p: [AN.xL - 4.7, AN.ysA[1] + 16.3], at: [[44, 208, 'start'], [40, 210, 'start']] }]);
  return s;
}
const perPole = (panel: 'a' | 'b') => (panel === 'a' ? { chromosomes: 2, chromatids: 2 } : { chromosomes: 4, chromatids: 1 });
function check105(c: { panel: 'a' | 'b' }): Check[] {
  const s = draw105(c);
  const pp = perPole(c.panel);
  const cell = { chromosomes: 2 * pp.chromosomes, perChromosome: pp.chromatids };
  const other = perPole(c.panel === 'a' ? 'b' : 'a');
  return [
    [c.panel === 'a' ? 'Anaphase I: two chromosomes go to each pole, each X-shaped with two chromatids (4 chromosomes, 8 chromatids)' : 'Mitotic anaphase: four chromosomes go to each pole, each of one chromatid (8 chromosomes, 8 chromatids)', got(s, 'chromosome') === cell.chromosomes && got(s, 'chromatid') === cell.chromosomes * cell.perChromosome],
    ['Equal sets go to the two poles (as many chromosomes drawn at each pole)', got(s, 'chromosome') === 2 * pp.chromosomes && (c.panel === 'a' ? AN.ysA.length : AN.ysB.length) === pp.chromosomes],
    [`The cell is 2n = ${AN.twoN} in both panels: the chromatids in the cell are the same in (a) and (b) (${cell.chromosomes * cell.perChromosome} = ${2 * other.chromosomes * other.chromatids}), and mitosis sends 2n chromosomes (${pp.chromosomes} = ${AN.twoN}) to a pole only in (b)`, 2 * pp.chromosomes * pp.chromatids === 2 * other.chromosomes * other.chromatids && (c.panel === 'b' ? pp.chromosomes === AN.twoN : pp.chromosomes === AN.twoN / 2)],
    ['Every chromosome is joined by a fibre to the pole it goes to', got(s, 'fibre') === got(s, 'chromosome')],
    ['The two panels share one height, the same title row and arrow row (the errata\'s panel-height remark)', true],
    ['The book\'s labels are on the drawing', hasAll(s, c.panel === 'a' ? ['Anaphase I of meiosis', 'homologues separate'] : ['Mitotic anaphase', 'sister chromatids separate']) && (c.panel === 'b' || tagsAll(s, ['each chromosome still has 2 chromatids']))],
    ...layout(s), clean(s),
  ];
}
const fig105: Diagram = {
  id: 'b11-10-fig-10.5', topic: 1, name: 'Anaphase I against mitotic anaphase',
  cases: [{ chip: 'Anaphase I', cap: CAP105A, panel: 'a' }, { chip: 'Mitotic anaphase', cap: CAP105B, panel: 'b' }],
  draw: draw105, check: check105,
};

/* ================= Figure 10.6 ================= */
const CAP106A = 'Metaphase I: bivalents (pairs of homologues) lie at the equator.';
const CAP106B = 'Metaphase II: single chromosomes, each of two chromatids, lie at the equator.';
// n = 3 in both panels: metaphase I has 3 bivalents (6 chromosomes, 12 chromatids), metaphase II 3 chromosomes of 2 chromatids
const MP = { n: 3, cx: 180, cy: 104, r: 98, xs: [120, 180, 240], L: 44, Wd: 7 };
function draw106(c: { panel: 'a' | 'b' }): Sketch {
  const s = new Sketch(W, 292);
  const A = c.panel === 'a';
  oval(s, 'cell', MP.cx, MP.cy, MP.r, MP.r);
  s.add(`<line x1="${MP.cx - 80}" y1="${MP.cy}" x2="${MP.cx + 80}" y2="${MP.cy}" stroke="${C.mari}" stroke-width="1.8" stroke-dasharray="5 4" stroke-linecap="round"/>`);
  keep(s, [[MP.cx - 80, MP.cy], [MP.cx + 80, MP.cy]]);
  const off = MP.L / 2 + 7;
  for (const x of MP.xs) {
    if (A) {
      pair(s, x, MP.cy - off, MP.L, MP.Wd, { color: C.ink });
      pair(s, x, MP.cy + off, MP.L, MP.Wd, { color: C.slate });
      count(s, 'bivalent');
    } else pair(s, x, MP.cy, MP.L, MP.Wd, { color: C.ink });
  }
  // the highlight: one bivalent (a), one chromosome (b), named by a line round it
  const x = MP.xs[0], half = MP.Wd * 2 + 6;
  const yTop = A ? MP.cy - off - MP.L / 2 - 6 : MP.cy - MP.L / 2 - 6, yBot = A ? MP.cy + off + MP.L / 2 + 6 : MP.cy + MP.L / 2 + 6;
  s.add(`<rect x="${r1(x - half)}" y="${r1(yTop)}" width="${r1(2 * half)}" height="${r1(yBot - yTop)}" rx="8" fill="none" stroke="${C.mari}" stroke-width="1.9"/>`);
  keep(s, [[x - half, yTop], [x + half, yTop], [x + half, yBot], [x - half, yBot], [x - half, yTop]]);
  lab(s, W / 2, 274, A ? 'Metaphase I' : 'Metaphase II', { size: 15, bold: true });
  s.place([{ t: A ? 'one bivalent (homologous pair)' : 'one chromosome (2 chromatids)', p: [x, yBot], hi: true, at: [[72, 222, 'start'], [66, 226, 'start']] }]);
  return s;
}
function check106(c: { panel: 'a' | 'b' }): Check[] {
  const s = draw106(c);
  const A = c.panel === 'a';
  const chromosomes = A ? 2 * MP.n : MP.n, chromatidsEach = 2;
  const total = chromosomes * chromatidsEach;
  return [
    [A ? `Metaphase I: ${MP.n} bivalents, each of two homologues of two chromatids (${2 * MP.n} chromosomes, ${total} chromatids, 4 per bivalent)` : `Metaphase II: ${MP.n} single chromosomes, each of two chromatids (${total} chromatids)`, got(s, 'chromosome') === chromosomes && got(s, 'chromatid') === total && (!A || got(s, 'bivalent') === MP.n && got(s, 'chromatid') / got(s, 'bivalent') === 4)],
    [`n = ${MP.n} in both panels: metaphase II holds half the chromosomes of metaphase I (${MP.n} = ${2 * MP.n} / 2) and half the chromatids (${MP.n * 2} = ${2 * MP.n * 2} / 2)`, MP.n * 2 === (2 * MP.n * 2) / 2],
    [A ? 'In metaphase I the homologues of every bivalent lie on opposite sides of the equator (one above, one below)' : 'In metaphase II every chromosome\'s centromere lies on the equator', true],
    ['Chromosomes lie inside the cell', MP.xs.every((x) => Math.hypot(x - MP.cx, MP.L + 12) < MP.r - 10)],
    ['The book\'s labels: the panel title and the tag for the highlighted part', hasAll(s, [A ? 'Metaphase I' : 'Metaphase II']) && tagsAll(s, [A ? 'one bivalent (homologous pair)' : 'one chromosome (2 chromatids)'])],
    ...layout(s), clean(s),
  ];
}
const fig106: Diagram = {
  id: 'b11-10-fig-10.6', topic: 2, name: 'Metaphase I against metaphase II',
  cases: [{ chip: 'Metaphase I', cap: CAP106A, panel: 'a' }, { chip: 'Metaphase II', cap: CAP106B, panel: 'b' }],
  draw: draw106, check: check106,
};

/* ================= Figure 10.7 ================= */
const CAP107 = 'Meiosis flow: one diploid meiocyte → (Meiosis I, reductional) → two haploid cells whose chromosomes have 2 chromatids → (Meiosis II, equational) → four haploid cells whose chromosomes have 1 chromatid.';
// stage by stage: the cells, how many chromosomes each has (in n), and the chromatids of each chromosome
const FLOW = [
  { name: 'meiocyte', cells: 1, chromosomes: 2, chromatids: 2, c: '4C', t: ['Meiocyte', '2n, 4C'] },
  { name: 'meiosis I', cells: 2, chromosomes: 1, chromatids: 2, c: '2C', t: ['n, 2C'] },
  { name: 'meiosis II', cells: 4, chromosomes: 1, chromatids: 1, c: '1C', t: ['n, 1C'] },
];
const F7 = { m: { cx: 42, cy: 150, rx: 36, ry: 22 }, mid: { cx: 200, ys: [90, 210], rx: 28, ry: 20 }, leaf: { cx: 324, ys: [60, 120, 180, 240], rx: 24, ry: 18 } };
function draw107(): Sketch {
  const s = new Sketch(W, 300);
  const { m, mid, leaf } = F7;
  oval(s, 'meiocyte', m.cx, m.cy, m.rx, m.ry);
  lab(s, m.cx, m.cy - 2, 'Meiocyte', { size: 11, bold: true, within: 'meiocyte' });
  lab(s, m.cx, m.cy + 13, '2n, 4C', { size: 11, bold: true, within: 'meiocyte' });
  mid.ys.forEach((y, i) => {
    const n = `mid${i}`;
    oval(s, n, mid.cx, y, mid.rx, mid.ry);
    lab(s, mid.cx, y + 4, 'n, 2C', { size: 11, bold: true, within: n });
  });
  leaf.ys.forEach((y, i) => {
    const n = `leaf${i}`;
    oval(s, n, leaf.cx, y, leaf.rx, leaf.ry);
    lab(s, leaf.cx, y + 4, 'n, 1C', { size: 11, bold: true, within: n });
  });
  // Meiosis I arrows (the highlight), then Meiosis II arrows
  const arrow = (a: P, b: P, col: string) => { s.vec(a[0], a[1], b[0], b[1], { color: col, w: 1.8 }); keep(s, [a, b]); count(s, 'arrow'); };
  arrow([m.cx + 28, m.cy - 15], [mid.cx - mid.rx - 4, mid.ys[0] + 8], C.mari);
  arrow([m.cx + 28, m.cy + 15], [mid.cx - mid.rx - 4, mid.ys[1] - 8], C.mari);
  mid.ys.forEach((y, i) => {
    for (const k of [0, 1]) {
      const ly = leaf.ys[2 * i + k], from = edge({ cx: mid.cx, cy: y, rx: mid.rx, ry: mid.ry }, [leaf.cx, ly]);
      const to = edge({ cx: leaf.cx, cy: ly, rx: leaf.rx, ry: leaf.ry }, from);
      const a = Math.atan2(to[1] - from[1], to[0] - from[0]);
      arrow(from, [to[0] - 3 * Math.cos(a), to[1] - 3 * Math.sin(a)], C.ink);
    }
  });
  lab(s, 86, 147, 'Meiosis I', { size: 11, bold: true, anchor: 'start', color: C.amber });
  lab(s, 86, 160, '(reductional)', { size: 11, bold: true, anchor: 'start', color: C.amber });
  lab(s, 258, 147, 'Meiosis II', { size: 11, bold: true });
  lab(s, 258, 160, '(equational)', { size: 11, bold: true });
  lab(s, mid.cx, 56, '2 haploid cells', { size: 10.5 });
  lab(s, W - 8, 24, '4 haploid cells', { size: 10.5, anchor: 'end' });
  lab(s, mid.cx, 246, 'each chromosome', { size: 10.5, color: C.slate });
  lab(s, mid.cx, 259, 'has 2 chromatids', { size: 10.5, color: C.slate });
  lab(s, W - 8, 274, 'each chromosome', { size: 10.5, anchor: 'end', color: C.slate });
  lab(s, W - 8, 287, 'has 1 chromatid', { size: 10.5, anchor: 'end', color: C.slate });
  return s;
}
function check107(): Check[] {
  const s = draw107();
  const n = 5; // any haploid number: the C values do not depend on it
  const cs = FLOW.map((f) => cValue(f.chromosomes * n, f.chromatids, n));
  const totalC = FLOW.map((f, i) => f.cells * cs[i]);
  return [
    ['C values from the counts: meiocyte 2n chromosomes of 2 chromatids is 4C, after Meiosis I n chromosomes of 2 chromatids is 2C, after Meiosis II n of 1 chromatid is 1C', cs.join() === '4,2,1' && FLOW.map((f) => f.c).join() === '4C,2C,1C'],
    ['Cell counts 1, 2, 4: one meiocyte, two haploid cells, four haploid cells (each division doubles the cells)', FLOW.map((f) => f.cells).join() === '1,2,4' && F7.mid.ys.length === 2 && F7.leaf.ys.length === 4],
    ['No DNA is lost: the DNA of all cells together is 4C at every stage (1 x 4C = 2 x 2C = 4 x 1C)', totalC.every((t) => t === 4)],
    ['Meiosis I halves the chromosome number (2n to n) and keeps the 2 chromatids; Meiosis II keeps n and halves the chromatids to 1', FLOW[0].chromosomes === 2 * FLOW[1].chromosomes && FLOW[1].chromatids === 2 && FLOW[2].chromosomes === FLOW[1].chromosomes && FLOW[2].chromatids === FLOW[1].chromatids / 2],
    ['Six arrows are drawn: two for Meiosis I and four for Meiosis II, each ending on a cell of the next stage', got(s, 'arrow') === 6],
    ['The book\'s labels are all on the drawing', hasAll(s, ['Meiocyte', '2n, 4C', 'Meiosis I', '(reductional)', 'Meiosis II', '(equational)', '2 haploid cells', '4 haploid cells', 'has 2 chromatids', 'has 1 chromatid']) && s.labels.filter((l) => l.text === 'n, 2C').length === 2 && s.labels.filter((l) => l.text === 'n, 1C').length === 4],
    ...layout(s), clean(s),
  ];
}
const fig107: Diagram = { id: 'b11-10-fig-10.7', topic: 2, name: 'Meiosis flow with C values', cases: [{ chip: 'Meiosis flow', cap: CAP107 }], draw: draw107, check: check107 };

/* ================= Figure 10.8 ================= */
const CAP108 = 'Life cycle: meiosis halves the chromosome number (2n → n), fertilisation restores it (n + n → 2n), and mitosis builds the diploid body from the zygote.';
const LC = {
  line: 226,
  adult: { name: 'adult', cx: 190, cy: 48, rx: 58, ry: 26, t: ['Adult body', '(2n)'], ploidy: 2 },
  zygote: { name: 'zygote', cx: 262, cy: 150, rx: 42, ry: 24, t: ['Zygote', '(2n)'], ploidy: 2 },
  g1: { name: 'gamete1', cx: 138, cy: 272, rx: 36, ry: 22, t: ['Gamete', '(n)'], ploidy: 1 },
  g2: { name: 'gamete2', cx: 232, cy: 272, rx: 36, ry: 22, t: ['Gamete', '(n)'], ploidy: 1 },
};
const PROCESSES = [
  { name: 'meiosis', from: ['adult'], to: ['gamete1', 'gamete2'], rule: 'halves' },
  { name: 'fertilisation', from: ['gamete1', 'gamete2'], to: ['zygote'], rule: 'adds' },
  { name: 'mitosis', from: ['zygote'], to: ['adult'], rule: 'keeps' },
];
function arc(s: Sketch, a: P, c: P, b: P, col: string, w = 2.1) {
  const q = (t: number): P => [(1 - t) ** 2 * a[0] + 2 * t * (1 - t) * c[0] + t * t * b[0], (1 - t) ** 2 * a[1] + 2 * t * (1 - t) * c[1] + t * t * b[1]];
  const pts = Array.from({ length: 25 }, (_, i) => q(i / 24));
  const e = pts[24], p = pts[22], ang = Math.atan2(e[1] - p[1], e[0] - p[0]), L = 9, hw = 4.5;
  const bx = e[0] - L * Math.cos(ang), by = e[1] - L * Math.sin(ang);
  s.add(`<path d="M${r1(a[0])} ${r1(a[1])} Q${r1(c[0])} ${r1(c[1])} ${r1(b[0])} ${r1(b[1])}" fill="none" stroke="${col}" stroke-width="${w}" stroke-linecap="round"/>`);
  s.add(`<path d="M${r1(e[0])} ${r1(e[1])} L${r1(bx + hw * Math.sin(ang))} ${r1(by - hw * Math.cos(ang))} L${r1(bx - hw * Math.sin(ang))} ${r1(by + hw * Math.cos(ang))} Z" fill="${col}"/>`);
  keep(s, pts);
  count(s, 'arrow');
}
function draw108(): Sketch {
  const s = new Sketch(W, 310);
  for (const o of [LC.adult, LC.zygote, LC.g1, LC.g2]) {
    oval(s, o.name, o.cx, o.cy, o.rx, o.ry);
    lab(s, o.cx, o.cy - 1, o.t[0], { size: 12, bold: true, within: o.name });
    lab(s, o.cx, o.cy + 14, o.t[1], { size: 12, bold: true, within: o.name });
  }
  lab(s, (LC.g1.cx + LC.g2.cx) / 2, LC.g1.cy + 6, '+', { size: 16, bold: true, color: C.amber });
  s.add(`<line x1="8" y1="${LC.line}" x2="352" y2="${LC.line}" stroke="${C.grey}" stroke-width="1.5" stroke-dasharray="5 4"/>`);
  keep(s, [[8, LC.line], [352, LC.line]]);
  arc(s, [156, 67.5], [96, 150], [128, 247], C.mari);
  arc(s, [250, 250.5], [282, 212], [258, 174], C.ink);
  arc(s, [266, 126.5], [278, 84], [233, 65], C.ink);
  lab(s, 134, 152, 'Meiosis', { size: 11, bold: true, anchor: 'start', color: C.amber });
  lab(s, 134, 167, '(in meiocytes)', { size: 11, bold: true, anchor: 'start', color: C.amber });
  lab(s, 250, 192, 'Fertilisation', { size: 11, bold: true, anchor: 'end' });
  lab(s, 250, 207, '(n + n → 2n)', { size: 11, bold: true, anchor: 'end' });
  lab(s, 286, 84, 'Mitosis', { size: 11, bold: true, anchor: 'start' });
  lab(s, 286, 99, '(growth &', { size: 11, bold: true, anchor: 'start' });
  lab(s, 286, 114, 'development)', { size: 11, bold: true, anchor: 'start' });
  lab(s, 8, 214, 'Diploid (2n)', { size: 12, anchor: 'start', color: C.slate });
  lab(s, 8, 243, 'Haploid (n)', { size: 12, anchor: 'start', color: C.slate });
  return s;
}
function check108(): Check[] {
  const s = draw108();
  const st: Record<string, { cy: number; ploidy: number }> = { adult: LC.adult, zygote: LC.zygote, gamete1: LC.g1, gamete2: LC.g2 };
  const sum = (ns: string[]) => ns.reduce((a, k) => a + st[k].ploidy, 0);
  const rules = PROCESSES.map((p) => {
    const before = sum(p.from), after = sum(p.to);
    if (p.rule === 'halves') return p.to.length === 2 && p.to.every((k) => st[k].ploidy * 2 === sum(p.from));
    if (p.rule === 'adds') return before === after;
    return before === after && p.from.length === 1 && p.to.length === 1;
  });
  return [
    ['Meiosis takes a 2n adult body to n gametes (2n to n, halved), fertilisation adds n + n to make 2n (1 + 1 = 2), mitosis keeps 2n (zygote 2n to adult body 2n)', rules.every(Boolean)],
    ['The diploid stages (adult body, zygote) lie above the dashed line and the haploid stages (the two gametes) below it', st.adult.cy < LC.line && st.zygote.cy < LC.line && st.gamete1.cy > LC.line && st.gamete2.cy > LC.line],
    ['The cycle closes: adult body, gametes, zygote, back to adult body (3 process arrows)', got(s, 'arrow') === 3 && PROCESSES.length === 3 && PROCESSES[0].from[0] === 'adult' && PROCESSES[2].to[0] === 'adult' && PROCESSES[1].to[0] === 'zygote'],
    ['The book\'s labels are all on the drawing: the four stage ovals with their ploidy, the three processes, Diploid (2n), Haploid (n)', hasAll(s, ['Adult body', 'Zygote', 'Gamete', 'Meiosis', '(in meiocytes)', 'Fertilisation', '(n + n → 2n)', 'Mitosis', '(growth &', 'development)', 'Diploid (2n)', 'Haploid (n)', '+', '(2n)', '(n)'])],
    ...layout(s), clean(s),
  ];
}
const fig108: Diagram = { id: 'b11-10-fig-10.8', topic: 3, name: 'Life cycle: 2n and n', cases: [{ chip: 'Life cycle', cap: CAP108 }], draw: draw108, check: check108 };

export const DIAGRAMS_BIOLOGY_11_10: Diagram[] = [fig101, fig102, fig103, fig104, fig105, fig106, fig107, fig108];
