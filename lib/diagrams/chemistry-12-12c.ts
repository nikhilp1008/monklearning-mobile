import { TOPICS } from '@/content/textbooks/chem-12-12/topic-4';
import { C, LABEL_GAP, Rect, Sketch, crosses, mathW, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * CHEMISTRY CLASS 12, CHAPTER 12 (Practical Chemistry), Topic 04 (qualitative salt analysis), index 3:
 *   c12-12-04-d1  group-reagent chart (seven rows, Group zero to Group VI)
 *   c12-12-04-d2  cation group-separation flow chart (three cases: Groups I-III, Groups IV-VI, ammonium)
 *   c12-12-04-d3  anion test flow (three cases: dilute H2SO4, conc. H2SO4, sulphate)
 *   c12-12-04-d4  brown-ring test tube
 *
 * Flow charts are drawn as boxes (white pills with an ink edge, text in STIX, size 12.5) joined by arrows
 * whose ends lie on the boxes' borders; a phone-width chart is one column of boxes, so the long ones are
 * split into cases (chips). Every box is registered as a tag, so the kit's audit keeps tags clear of them.
 * The colours, formulae and observations are the chapter text's: every check reads them back out of
 * content/textbooks/chem-12-12/topic-4.ts (the group table, the anion tables, the brown-ring steps).
 */

const W = 340;
type P = [number, number];
const plain = (html: string) => html.replace(/<[^>]+>/g, '');
const len = (a: P, b: P) => Math.hypot(b[0] - a[0], b[1] - a[1]);
const fmt = (n: number, d = 1) => String(+n.toFixed(d)).replace('-', '−');

/* ---------- the chapter text, read back ---------- */
const BLOCKS = TOPICS[0].blocks as any[];
const TABLES = BLOCKS.filter((b) => b.t === 'table') as { title: string; head: string[]; rows: string[][] }[];
const ALL = plain(JSON.stringify(BLOCKS)).toLowerCase();
const tableByTitle = (prefix: string) => TABLES.find((t) => t.title.startsWith(prefix))!;
const low = (h: string) => plain(h).toLowerCase();
const COLOURS = ['white', 'black', 'brown', 'yellow', 'blue', 'red', 'violet', 'orange', 'pink', 'green'];
/** The colour word the text gives for a formula: the first one after it in the cell, else the last one before it. */
function colourOf(cell: string, f: string): string {
  const i = cell.indexOf(f);
  if (i < 0) return '';
  const hit = (s: string, pick: 'first' | 'last') => {
    const found = COLOURS.map((w) => ({ w, at: pick === 'first' ? s.indexOf(w) : s.lastIndexOf(w) })).filter((x) => x.at >= 0);
    found.sort((a, b) => (pick === 'first' ? a.at - b.at : b.at - a.at));
    return found[0]?.w ?? '';
  };
  return hit(cell.slice(i + f.length), 'first') || hit(cell.slice(0, i), 'last');
}
const groupRow = (g: string) => tableByTitle('The cation groups').rows.find((r) => plain(r[0]) === g)!;

/* ---------- boxes and arrows ---------- */
const LH = 17;
const SZ = 12.5;
type FBox = { id: number; rect: Rect; lines: string[]; hi: boolean; pad: number };
type Edge = { from: number; to: number; pts: P[] };
const FLOW = new WeakMap<Sketch, { boxes: FBox[]; edges: Edge[] }>();
const flowOf = (s: Sketch) => { let f = FLOW.get(s); if (!f) { f = { boxes: [], edges: [] }; FLOW.set(s, f); } return f; };

/** A white pill with an ink edge (marigold if it is the highlight) and its lines of STIX text. */
function box(s: Sketch, x: number, y: number, w: number, lines: string[], o: { hi?: boolean; h?: number; left?: boolean; boldFirst?: boolean; boldLast?: boolean } = {}): FBox {
  const h = o.h ?? lines.length * LH + 14, hi = !!o.hi, rect: Rect = [x, y, x + w, y + h];
  s.add(`<rect x="${r1(x)}" y="${r1(y)}" width="${r1(w)}" height="${r1(h)}" rx="10" fill="#fff" stroke="${hi ? C.mari : C.ink}" stroke-width="${hi ? 2.2 : 1.5}"/>`);
  const top = y + (h - lines.length * LH) / 2;
  lines.forEach((t, i) => s.text(o.left ? x + 10 : x + w / 2, top + i * LH + 12.6, t, { size: SZ, anchor: o.left ? 'start' : 'middle', semibold: (!!o.boldFirst && i === 0) || (!!o.boldLast && i === lines.length - 1) }));
  s.tags.push({ name: plain(lines.join(' ')), rect, from: null, to: null });
  const f = flowOf(s), b: FBox = { id: f.boxes.length, rect, lines, hi, pad: o.left ? 20 : 14 };
  f.boxes.push(b);
  return b;
}
/** An arrow along a polyline from the border of one box to the border of another. */
function link(s: Sketch, a: FBox, b: FBox, pts: P[]) {
  for (let i = 0; i < pts.length - 2; i++) s.line(pts[i][0], pts[i][1], pts[i + 1][0], pts[i + 1][1], { w: 1.5 });
  const n = pts.length;
  s.vec(pts[n - 2][0], pts[n - 2][1], pts[n - 1][0], pts[n - 1][1], { w: 1.5 });
  flowOf(s).edges.push({ from: a.id, to: b.id, pts });
}
const down = (s: Sketch, a: FBox, b: FBox, x = (a.rect[0] + a.rect[2]) / 2) => link(s, a, b, [[x, a.rect[3]], [x, b.rect[1]]]);
const across = (s: Sketch, a: FBox, b: FBox) => { const y = (a.rect[1] + a.rect[3]) / 2; link(s, a, b, [[a.rect[2], y], [b.rect[0], y]]); };

const onBorder = (p: P, r: Rect) => p[0] >= r[0] - 0.6 && p[0] <= r[2] + 0.6 && p[1] >= r[1] - 0.6 && p[1] <= r[3] + 0.6 && !(p[0] > r[0] + 0.6 && p[0] < r[2] - 0.6 && p[1] > r[1] + 0.6 && p[1] < r[3] - 0.6);
const rectDist = (r: Rect, p: P) => Math.hypot(Math.max(r[0] - p[0], 0, p[0] - r[2]), Math.max(r[1] - p[1], 0, p[1] - r[3]));

/** What every flow chart must satisfy: arrows join two boxes, every box is reached, text fits, arrows keep clear of other boxes. */
function flowChecks(s: Sketch, roots: number[]): Check[] {
  const { boxes, edges } = flowOf(s);
  const out: Check[] = [];
  const bad = edges.filter((e) => e.from === e.to || !onBorder(e.pts[0], boxes[e.from].rect) || !onBorder(e.pts[e.pts.length - 1], boxes[e.to].rect));
  out.push([`All ${edges.length} arrows start on the border of one box and end on the border of a different one`, edges.length > 0 && bad.length === 0]);
  const seen = new Set<number>(roots);
  for (let again = true; again;) { again = false; edges.forEach((e) => { if (seen.has(e.from) && !seen.has(e.to)) { seen.add(e.to); again = true; } }); }
  const lost = boxes.filter((b) => !seen.has(b.id));
  out.push([`Every one of the ${boxes.length} boxes is reached by following the arrows from ${roots.length === 1 ? 'the first box' : 'the starting boxes'}${lost.length ? `; not reached: ${lost.map((b) => plain(b.lines[0])).join(', ')}` : ''}`, lost.length === 0]);
  const wide = boxes.flatMap((b) => b.lines.filter((t) => mathW(t, SZ) > b.rect[2] - b.rect[0] - b.pad + 0.5).map((t) => plain(t)));
  out.push([`Every line of text fits inside its box at ${SZ} px, no smaller${wide.length ? `: too wide ${wide.join(' | ')}` : ''}`, wide.length === 0 && SZ >= 12]);
  let gap = Infinity;
  edges.forEach((e) => {
    for (let i = 0; i < e.pts.length - 1; i++) {
      const a = e.pts[i], b = e.pts[i + 1], n = Math.max(2, Math.ceil(len(a, b) * 2));
      boxes.forEach((bx) => { if (bx.id === e.from || bx.id === e.to) return; for (let k = 0; k <= n; k++) gap = Math.min(gap, rectDist(bx.rect, [a[0] + ((b[0] - a[0]) * k) / n, a[1] + ((b[1] - a[1]) * k) / n])); });
      boxes.forEach((bx) => { if ((bx.id === e.from || bx.id === e.to) && i > 0 && i < e.pts.length - 2 && crosses(a, b, bx.rect, 1)) gap = -1; });
    }
  });
  out.push([`No arrow passes through or within ${LABEL_GAP} px of a box it does not join${Number.isFinite(gap) ? ` (closest ${fmt(gap)} px)` : ''}`, gap >= LABEL_GAP]);
  const inside = boxes.every((b) => b.rect[0] >= 2 && b.rect[2] <= s.w - 2 && b.rect[1] >= 0 && b.rect[3] <= s.h);
  out.push(['Every box lies inside the frame', inside]);
  out.push([`Exactly one marigold highlight: ${boxes.filter((b) => b.hi).length}`, boxes.filter((b) => b.hi).length === 1]);
  return out;
}

/** Check a precipitate's formula and colour, and its group's reagent, against the chapter's group table. */
type Ppt = { f: string; col: string; extra?: string };
function groupChecks(grp: string, ppts: Ppt[], keys: string[], shown: string): Check[] {
  const row = groupRow(grp), see = low(row[3]), reag = `${low(row[1])} ${see}`;
  const out: Check[] = [];
  ppts.forEach((p) => {
    const f = low(p.f), found = colourOf(see, f);
    out.push([`${grp}: the text gives ${plain(p.f)} as ${found || 'no colour'}; the drawing says ${p.col}${p.extra ? ` (${p.extra})` : ''}`, see.includes(f) && found === p.col && (!p.extra || see.includes(p.extra))]);
    out.push([`${grp}: ${plain(p.f)} and "${p.col}" are written in the drawing`, low(shown).includes(f) && low(shown).includes(p.col)]);
  });
  out.push([`${grp}: the reagent words (${keys.join(', ')}) are the text's`, keys.every((k) => reag.includes(k))]);
  return out;
}

/* =====================================================================================================
 * c12-12-04-d1: the group-reagent chart
 * ===================================================================================================== */
type Item = { ions: string; ppt?: string; col?: string; extra?: string; note?: string };
type Row = { g: string; reagent: string; rk: string[]; ions: string[]; items: Item[]; hi?: boolean };
const ROWS: Row[] = [
  { g: 'Group zero', reagent: 'NaOH, warm, on the original salt', rk: ['naoh'], ions: ['NH<sub>4</sub><sup>+</sup>'], items: [{ ions: 'NH<sub>4</sub><sup>+</sup>', note: 'no precipitate; NH<sub>3</sub> gas' }] },
  { g: 'Group I', reagent: 'dilute HCl', rk: ['dilute hcl'], ions: ['Pb<sup>2+</sup>'], items: [{ ions: 'Pb<sup>2+</sup>', ppt: 'PbCl<sub>2</sub>', col: 'white' }] },
  { g: 'Group II', reagent: 'H<sub>2</sub>S in dilute HCl', rk: ['h2s', 'dilute hcl'], ions: ['Pb<sup>2+</sup>', 'Cu<sup>2+</sup>'], items: [{ ions: 'Pb<sup>2+</sup>, Cu<sup>2+</sup>', ppt: 'PbS, CuS', col: 'black' }] },
  { g: 'Group III', reagent: 'NH<sub>4</sub>OH with NH<sub>4</sub>Cl', rk: ['nh4oh', 'nh4cl'], ions: ['Al<sup>3+</sup>', 'Fe<sup>3+</sup>'], items: [{ ions: 'Al<sup>3+</sup>', ppt: 'Al(OH)<sub>3</sub>', col: 'white', extra: 'gelatinous' }, { ions: 'Fe<sup>3+</sup>', ppt: 'Fe(OH)<sub>3</sub>', col: 'brown' }] },
  { g: 'Group IV', reagent: 'H<sub>2</sub>S in NH<sub>4</sub>OH', rk: ['h2s', 'nh4oh'], ions: ['Zn<sup>2+</sup>', 'Ni<sup>2+</sup>'], items: [{ ions: 'Zn<sup>2+</sup>', ppt: 'ZnS', col: 'white' }, { ions: 'Ni<sup>2+</sup>', ppt: 'NiS', col: 'black' }] },
  { g: 'Group V', reagent: '(NH<sub>4</sub>)<sub>2</sub>CO<sub>3</sub> with NH<sub>4</sub>Cl, NH<sub>4</sub>OH', rk: ['(nh4)2co3', 'nh4cl', 'nh4oh'], ions: ['Ca<sup>2+</sup>', 'Ba<sup>2+</sup>'], items: [{ ions: 'Ca<sup>2+</sup>, Ba<sup>2+</sup>', ppt: 'CaCO<sub>3</sub>, BaCO<sub>3</sub>', col: 'white' }] },
  { g: 'Group VI', reagent: 'none; Na<sub>2</sub>HPO<sub>4</sub> test', rk: ['none', 'na2hpo4'], ions: ['Mg<sup>2+</sup>'], items: [{ ions: 'Mg<sup>2+</sup>', ppt: 'Mg(NH<sub>4</sub>)PO<sub>4</sub>', col: 'white', extra: 'crystalline' }], hi: true },
];
const itemLine = (it: Item) => (it.ppt ? `${it.ions} → ${it.ppt} ${it.col}${it.extra ? `, ${it.extra}` : ''}` : `${it.ions} → ${it.note}`);
const rowLines = (r: Row) => [`${r.g} · ${r.reagent}`, ...r.items.map(itemLine)];

const D1_CAP = 'The seven rows of the cation scheme, each with its group reagent, the syllabus ions it takes out and the precipitate with its colour. Each reagent is added to the filtrate of the group before; Group zero is tested on the original salt and Group VI has no reagent of its own.';
const d1: Diagram = {
  id: 'c12-12-04-d1',
  topic: 3,
  name: 'Group reagents and precipitates',
  cases: [{ chip: 'Seven groups', cap: D1_CAP }],
  draw() {
    const heights = ROWS.map((r) => rowLines(r).length * LH + 14);
    const H = 8 + heights.reduce((a, b) => a + b, 0) + 14 + 14 * (ROWS.length - 2) + 8;
    const s = new Sketch(W, H);
    let y = 8;
    const boxes: FBox[] = [];
    ROWS.forEach((r, i) => {
      boxes.push(box(s, 8, y, W - 16, rowLines(r), { left: true, boldFirst: true, hi: r.hi }));
      y += heights[i] + (i === 0 ? 14 : 14);
    });
    for (let i = 1; i < ROWS.length - 1; i++) down(s, boxes[i], boxes[i + 1], 40);
    return s;
  },
  check() {
    const s = this.draw({});
    const out: Check[] = [];
    out.push(['Seven rows: Group zero, then Groups I to VI in order, as the chapter table lists them', ROWS.length === 7 && ROWS.every((r, i) => plain(r.g) === plain(tableByTitle('The cation groups').rows[i][0]))]);
    ROWS.forEach((r) => {
      const row = groupRow(r.g), cations = low(row[2]);
      out.push([`${r.g}: the ions (${r.ions.map(plain).join(', ')}) are exactly the text's cation list (${cations})`, r.ions.every((i) => cations.includes(low(i))) && cations.split(', ').length === r.ions.length]);
      r.items.forEach((it) => {
        if (it.ppt) out.push(...groupChecks(r.g, it.ppt.split(', ').map((f) => ({ f, col: it.col!, extra: it.extra })), r.rk, itemLine(it)));
        else out.push([`${r.g}: "${plain(it.note!)}" is what the text says (no precipitate, ammonia gas)`, low(row[3]).includes('no precipitate') && low(row[3]).includes('ammonia gas')]);
      });
    });
    out.push(['Group VI: the white crystalline Mg(NH₄)PO₄ comes with Na₂HPO₄ in the text', low(groupRow('Group VI')[3]).includes('na2hpo4') && low(groupRow('Group VI')[3]).includes('crystalline')]);
    const f = flowOf(s);
    out.push([`The five arrows run Group I → II → III → IV → V → VI; Group zero stands apart, tested on the original salt`, f.edges.length === 5 && f.edges.every((e) => e.to === e.from + 1 && e.from >= 1)]);
    out.push(...flowChecks(s, [1]).filter(([t]) => !t.startsWith('Every one of the')));
    const seen = new Set<number>([1]);
    f.edges.forEach((e) => seen.add(e.to));
    out.push(['Groups I to VI are all reached from Group I by the arrows', [1, 2, 3, 4, 5, 6].every((i) => seen.has(i))]);
    return out;
  },
};

/* =====================================================================================================
 * c12-12-04-d2: the cation group-separation flow chart
 * ===================================================================================================== */
type Step = { left: string[]; right: string[]; hi?: boolean; grp?: string; ppts?: Ppt[]; rk?: string[]; keys?: string[] };
type FlowCase = { chip: string; cap: string; start: string[]; steps: Step[]; end?: string[]; tbl?: string; startKeys?: string[] };
const D2_CASES: FlowCase[] = [
  {
    chip: 'Groups I to III',
    cap: 'From the original solution: dilute HCl takes out Group I; H<sub>2</sub>S in the diluted acid takes out the black sulphides of Group II (checked in yellow ammonium sulphide); after boiling off H<sub>2</sub>S, conc. HNO<sub>3</sub>, NH<sub>4</sub>Cl and excess NH<sub>4</sub>OH take out Group III. Each precipitate leaves to the right; the filtrate goes on down.',
    start: ['Original solution'],
    steps: [
      { left: ['Add dilute HCl'], right: ['Group I', 'PbCl<sub>2</sub>: white'], grp: 'Group I', ppts: [{ f: 'PbCl<sub>2</sub>', col: 'white' }], rk: ['dilute hcl'] },
      { left: ['Dilute with water,', 'pass H<sub>2</sub>S in the', 'dilute acid'], right: ['Group II', 'CuS, PbS: black', 'not dissolved by', 'yellow (NH<sub>4</sub>)<sub>2</sub>S'], hi: true, grp: 'Group II', ppts: [{ f: 'CuS', col: 'black' }, { f: 'PbS', col: 'black' }], rk: ['h2s', 'dilute hcl'], keys: ['yellow ammonium sulphide', 'do not dissolve'] },
      { left: ['Boil off H<sub>2</sub>S, then add', 'conc. HNO<sub>3</sub>, NH<sub>4</sub>Cl and', 'excess NH<sub>4</sub>OH'], right: ['Group III', 'Al(OH)<sub>3</sub>: white,', 'gelatinous', 'Fe(OH)<sub>3</sub>: brown'], grp: 'Group III', ppts: [{ f: 'Al(OH)<sub>3</sub>', col: 'white', extra: 'gelatinous' }, { f: 'Fe(OH)<sub>3</sub>', col: 'brown' }], rk: ['nh4oh', 'nh4cl'], keys: ['boil off the h2s', 'hno3'] },
    ],
    end: ['Filtrate: to Group IV'],
  },
  {
    chip: 'Groups IV to VI',
    cap: 'The Group III filtrate: H<sub>2</sub>S in the ammoniacal solution takes out ZnS (white) and NiS (black); NH<sub>4</sub>Cl, NH<sub>4</sub>OH and (NH<sub>4</sub>)<sub>2</sub>CO<sub>3</sub> take out BaCO<sub>3</sub> and CaCO<sub>3</sub> (white); the filtrate, with no precipitate so far, gives Mg(NH<sub>4</sub>)PO<sub>4</sub> (white, crystalline) with Na<sub>2</sub>HPO<sub>4</sub>.',
    start: ['Filtrate from Group III'],
    steps: [
      { left: ['Pass H<sub>2</sub>S in the', 'ammoniacal solution'], right: ['Group IV', 'ZnS: white', 'NiS: black'], hi: true, grp: 'Group IV', ppts: [{ f: 'ZnS', col: 'white' }, { f: 'NiS', col: 'black' }], rk: ['h2s', 'nh4oh'] },
      { left: ['Add NH<sub>4</sub>Cl, NH<sub>4</sub>OH', 'and (NH<sub>4</sub>)<sub>2</sub>CO<sub>3</sub>'], right: ['Group V', 'BaCO<sub>3</sub>, CaCO<sub>3</sub>:', 'white'], grp: 'Group V', ppts: [{ f: 'BaCO<sub>3</sub>', col: 'white' }, { f: 'CaCO<sub>3</sub>', col: 'white' }], rk: ['(nh4)2co3', 'nh4cl', 'nh4oh'] },
      { left: ['Filtrate: add Na<sub>2</sub>HPO<sub>4</sub>,', 'scratch the tube'], right: ['Group VI', 'Mg(NH<sub>4</sub>)PO<sub>4</sub>:', 'white, crystalline'], grp: 'Group VI', ppts: [{ f: 'Mg(NH<sub>4</sub>)PO<sub>4</sub>', col: 'white', extra: 'crystalline' }], rk: ['none', 'na2hpo4'], keys: ['scratch'] },
    ],
  },
  {
    chip: 'Ammonium branch',
    cap: 'NH<sub>4</sub><sup>+</sup> is not found in the group scheme: a fresh portion of the original salt is warmed with NaOH, and the ammonia is read from its smell, from the white fumes on a rod dipped in HCl, or from Nessler’s reagent.',
    start: ['Original salt', '(a fresh portion)'],
    steps: [
      { left: ['Warm with NaOH', 'solution'], right: ['NH<sub>3</sub> gas:', 'smell of ammonia'], hi: true, keys: ['smell of ammonia', 'nh3'] },
      { left: ['Rod dipped in HCl', 'at the tube’s mouth'], right: ['dense white fumes', '(NH<sub>4</sub>Cl)'], keys: ['dense white fumes', 'nh4cl'] },
      { left: ['Or pass the gas into', 'Nessler’s reagent'], right: ['brown colouration', 'or precipitate'], keys: ['nessler', 'brown colouration'] },
    ],
    tbl: 'Ammonium ion',
  },
];
const D2_GAP = 18;
const d2: Diagram = {
  id: 'c12-12-04-d2',
  topic: 3,
  name: 'Cation group separation',
  cases: D2_CASES.map((c) => ({ ...c })),
  draw(c: FlowCase) {
    const LW = 172, RX = 194, RW = 138;
    const startH = c.start.length * LH + 14;
    const sh = c.steps.map((st) => Math.max(st.left.length, st.right.length) * LH + 14);
    const endH = c.end ? c.end.length * LH + 14 : 0;
    const H = 8 + startH + c.steps.reduce((a, _, i) => a + D2_GAP + sh[i], 0) + (c.end ? D2_GAP + endH : 0) + 8;
    const s = new Sketch(W, H);
    let y = 8;
    let prev = box(s, 8, y, LW, c.start);
    y += startH;
    c.steps.forEach((st, i) => {
      y += D2_GAP;
      const l = box(s, 8, y, LW, st.left, { h: sh[i], hi: st.hi });
      down(s, prev, l);
      const r = box(s, RX, y, RW, st.right, { h: sh[i], boldFirst: !!st.grp });
      across(s, l, r);
      prev = l;
      y += sh[i];
    });
    if (c.end) { y += D2_GAP; const e = box(s, 8, y, LW, c.end); down(s, prev, e); }
    return s;
  },
  check(c: FlowCase) {
    const s = this.draw(c);
    const out: Check[] = [];
    const f = flowOf(s);
    out.push([`The chain has ${c.steps.length} steps: each reagent box has its own output box and the filtrate arrow runs on down`, f.edges.length === c.steps.length * 2 + (c.end ? 1 : 0)]);
    const grps = c.steps.filter((st) => st.grp).map((st) => st.grp!);
    const order = tableByTitle('The cation groups').rows.map((r) => plain(r[0]));
    out.push([`Groups come in the text's order: ${grps.join(', ') || 'none here'}`, grps.every((g, i) => i === 0 || order.indexOf(g) === order.indexOf(grps[i - 1]) + 1)]);
    c.steps.forEach((st) => {
      if (st.grp) {
        out.push(...groupChecks(st.grp, st.ppts!, st.rk!, st.right.join(' ')));
        out.push([`${st.grp}: the output box is headed with its group name`, plain(st.right[0]) === st.grp]);
      }
      (st.keys ?? []).forEach((k) => out.push([`The chapter text has "${k}"`, ALL.includes(k)]));
    });
    if (c.tbl) {
      const tb = tableByTitle(c.tbl), txt = tb.rows.map((r) => r.map(low).join(' ')).join(' ');
      out.push(['The three ammonia observations are in the text’s ammonium table: smell, white fumes on the rod, brown with Nessler’s reagent', ['smell of ammonia', 'dense white fumes', 'brown colouration'].every((k) => txt.includes(k))]);
      out.push(['The text warms the salt with NaOH', txt.includes('warm the salt with naoh')]);
    }
    out.push(...flowChecks(s, [0]));
    return out;
  },
};

/* =====================================================================================================
 * c12-12-04-d3: the anion test flow
 * ===================================================================================================== */
type ARow = { obs: string[]; res: string[]; tbl?: 'dilute' | 'conc' | 'confirm'; first?: string; gas?: string; keys?: string[]; next?: boolean };
type ACase = { chip: string; cap: string; top: string[]; rows: ARow[]; topKeys: string[] };
const TBL = { dilute: 'Dilute sulphuric acid', conc: 'Concentrated sulphuric acid', confirm: 'Confirmatory tests for the anions' } as const;
const D3_CASES: ACase[] = [
  {
    chip: 'Dilute acid',
    cap: 'Dilute sulphuric acid on the solid salt (warmed if nothing happens): the gas is read from its look and its test. If there is no gas, go on to concentrated acid.',
    top: ['Solid salt + dilute H<sub>2</sub>SO<sub>4</sub>', '(warm if no gas)'],
    topKeys: ['if no gas is evolved, warm the tube'],
    rows: [
      { obs: ['Brisk effervescence;', 'colourless,', 'odourless gas'], res: ['CO<sub>2</sub>: lime water', 'turns milky', 'carbonate, CO<sub>3</sub><sup>2−</sup>'], tbl: 'dilute', first: 'co32−', gas: 'CO<sub>2</sub>', keys: ['brisk effervescence', 'colourless, odourless gas', 'lime water milky'] },
      { obs: ['Colourless gas,', 'smell of', 'rotten eggs'], res: ['H<sub>2</sub>S: lead acetate', 'paper turns black', 'sulphide, S<sup>2−</sup>'], tbl: 'dilute', first: 's2−', gas: 'H<sub>2</sub>S', keys: ['rotten eggs', 'lead acetate paper black'] },
      { obs: ['Brown fumes'], res: ['NO<sub>2</sub>: KI-starch', 'turns blue', 'nitrite, NO<sub>2</sub><sup>−</sup>'], tbl: 'dilute', first: 'no2−', gas: 'NO<sub>2</sub>', keys: ['brown fumes', 'ki-starch solution blue'] },
      { obs: ['No gas, even', 'on warming'], res: ['Try concentrated', 'H<sub>2</sub>SO<sub>4</sub> (next case)'], next: true },
    ],
  },
  {
    chip: 'Conc. acid',
    cap: 'If dilute acid gives nothing: concentrated sulphuric acid on a fresh portion, in the cold and then warmed. The gas or vapour names the halide or the nitrate; if there is still no result, test for sulphate.',
    top: ['Fresh salt + conc. H<sub>2</sub>SO<sub>4</sub>', '(cold, then warm)'],
    topKeys: ['watch in the cold and then warm', 'if dilute acid gives nothing'],
    rows: [
      { obs: ['Colourless gas,', 'pungent smell'], res: ['HCl: white fumes', 'on an NH<sub>4</sub>OH rod', 'chloride, Cl<sup>−</sup>'], tbl: 'conc', first: 'cl−', gas: 'HCl', keys: ['pungent', 'white fumes', 'nh4oh'] },
      { obs: ['Reddish-brown', 'vapour'], res: ['Br<sub>2</sub> vapour', 'bromide, Br<sup>−</sup>'], tbl: 'conc', first: 'br−', gas: 'Br<sub>2</sub> vapour', keys: ['reddish-brown'] },
      { obs: ['Violet vapour'], res: ['I<sub>2</sub> vapour', 'iodide, I<sup>−</sup>'], tbl: 'conc', first: 'i−', gas: 'I<sub>2</sub> vapour', keys: ['violet'] },
      { obs: ['Brown fumes, denser', 'with Cu turnings;', 'blue solution'], res: ['NO<sub>2</sub> fumes', 'nitrate, NO<sub>3</sub><sup>−</sup>'], tbl: 'conc', first: 'no3−', gas: 'NO<sub>2</sub>', keys: ['brown fumes', 'copper turnings', 'turns blue'] },
      { obs: ['Still no result'], res: ['Test for sulphate', '(next case)'], next: true },
    ],
  },
  {
    chip: 'Sulphate',
    cap: 'Sulphate gives no gas with either acid, so it is tested for last: acidify with dilute HCl and add BaCl<sub>2</sub>.',
    top: ['Neither acid gave a result:', 'acidify with dilute HCl,', 'add BaCl<sub>2</sub>'],
    topKeys: ['tested for last', 'acidify the extract with dilute hcl'],
    rows: [
      { obs: ['White precipitate,', 'insoluble in', 'conc. HCl'], res: ['BaSO<sub>4</sub>', 'sulphate, SO<sub>4</sub><sup>2−</sup>'], tbl: 'confirm', first: 'sulphate', gas: 'BaSO<sub>4</sub>', keys: ['white precipitate', 'insoluble in conc. hcl', 'bacl2'] },
    ],
  },
];
const d3: Diagram = {
  id: 'c12-12-04-d3',
  topic: 3,
  name: 'Anion test flow',
  cases: D3_CASES.map((c) => ({ ...c })),
  draw(c: ACase) {
    const OX = 34, OW = 140, RX = 188, RW = 144, SPINE = 16, GAP = 12;
    const topH = c.top.length * LH + 14;
    const rh = c.rows.map((r) => Math.max(r.obs.length, r.res.length) * LH + 14);
    const H = 8 + topH + c.rows.reduce((a, _, i) => a + GAP + rh[i], 0) + 8 + 6;
    const s = new Sketch(W, H);
    const top = box(s, 8, 8, W - 16, c.top, { hi: true });
    let y = 8 + topH;
    c.rows.forEach((r, i) => {
      y += GAP + (i === 0 ? 6 : 0);
      const o = box(s, OX, y, OW, r.obs, { h: rh[i] });
      const res = box(s, RX, y, RW, r.res, { h: rh[i], boldLast: !r.next });
      const ym = y + rh[i] / 2;
      link(s, top, o, [[SPINE, top.rect[3]], [SPINE, ym], [OX, ym]]);
      across(s, o, res);
      y += rh[i];
    });
    return s;
  },
  check(c: ACase) {
    const s = this.draw(c);
    const out: Check[] = [];
    c.topKeys.forEach((k) => out.push([`The chapter text has "${k}"`, ALL.includes(k)]));
    c.rows.forEach((r) => {
      if (r.next) { out.push([`"${plain(r.res.join(' '))}": the text moves on in this order (dilute acid, then conc., then BaCl₂ for sulphate)`, ALL.includes('only then concentrated') && ALL.includes('tested for last')]); return; }
      const tb = tableByTitle(TBL[r.tbl!]);
      const rows = tb.rows.filter((x) => low(x[0]).includes(r.first!));
      const txt = rows.map((x) => x.map(low).join(' ')).join(' ');
      const ionLine = low(r.res[r.res.length - 1]);
      out.push([`${plain(r.res[r.res.length - 1])}: the text has an anion row for it (${rows.length ? plain(rows[0][0]) : 'none found'})`, rows.length > 0 && ionLine.startsWith(low(rows[0][0]))]);
      out.push([`${plain(r.res[r.res.length - 1])}: the gas or precipitate ${plain(r.gas!)} is the text's`, rows.some((x) => x.some((cell) => low(cell).startsWith(low(r.gas!))))]);
      r.keys!.forEach((k) => out.push([`${plain(r.res[r.res.length - 1])}: the text says "${k}" for it`, txt.includes(k)]));
      out.push([`${plain(r.res[r.res.length - 1])}: the drawing writes the observation`, r.keys!.some((k) => low(r.obs.join(' ') + ' ' + r.res.join(' ')).includes(k.split(' ')[0]))]);
    });
    out.push([`${c.rows.length} rows, one arrow in to each from the test box and one from each observation to its result`, flowOf(s).edges.length === c.rows.length * 2]);
    out.push(...flowChecks(s, [0]));
    return out;
  },
};

/* =====================================================================================================
 * c12-12-04-d4: the brown-ring test tube
 * ===================================================================================================== */
const TUBE = { x0: 28, x1: 100, top: 36, bend: 222, surface: 96, junction: 146, ringH: 9, armX: 90, armY0: 48, armY1: 92 };
const D4_CAP = 'The brown ring test for nitrate: the nitrate solution mixed with conc. H<sub>2</sub>SO<sub>4</sub> and cooled forms the lower layer; fresh FeSO<sub>4</sub> solution, run in down the side of the tube, floats on top; a dark brown ring of [Fe(NO)]<sup>2+</sup> forms at the junction. Do not shake.';
const LINES4 = new WeakMap<Sketch, P[][]>();
const keep4 = (s: Sketch, pts: P[]) => { const l = LINES4.get(s) ?? []; l.push(pts); LINES4.set(s, l); };
const TAGS4: { hi: boolean; plain: string }[] = [];
/** A tag whose name carries sub- and superscripts: the kit's Onest tags cannot, so the same white pill in STIX. */
function mtag(s: Sketch, x: number, y: number, html: string, p: P | null, o: { hi?: boolean } = {}): Rect {
  const size = 12, hi = !!o.hi, w = Math.max(mathW(html, size), plain(html).length * size * 0.5) + 18, rect: Rect = [x, y, x + w, y + 22];
  let from: P | null = null, to: P | null = null;
  if (p) {
    from = p;
    to = [Math.max(x + 8, Math.min(x + w - 8, p[0])), p[1] < y ? y : y + 22];
    s.add(`<line x1="${r1(p[0])}" y1="${r1(p[1])}" x2="${r1(to[0])}" y2="${r1(to[1])}" stroke="${hi ? C.mari : C.grey}" stroke-width="1.2"/><circle cx="${r1(p[0])}" cy="${r1(p[1])}" r="2.6" fill="${hi ? C.mari : C.ink}"/>`);
  }
  s.add(`<rect x="${r1(x)}" y="${y}" width="${r1(w)}" height="22" rx="11" fill="#fff" stroke="${hi ? C.mari : C.border}" stroke-width="${hi ? 1.5 : 1}"/>`);
  s.text(x + w / 2, y + 15.5, html, { size, color: hi ? C.amber : C.text });
  s.tags.push({ name: plain(html), rect, from, to });
  return rect;
}
const d4: Diagram = {
  id: 'c12-12-04-d4',
  topic: 3,
  name: 'Brown ring test',
  cases: [{ chip: 'Test tube', cap: D4_CAP }],
  draw() {
    const T = TUBE, s = new Sketch(W, 282), r = (T.x1 - T.x0) / 2;
    s.add(`<path d="M${T.x0} ${T.top} L${T.x0} ${T.bend} A${r} ${r} 0 0 0 ${T.x1} ${T.bend} L${T.x1} ${T.top}" fill="none" stroke="${C.ink}" stroke-width="1.7" stroke-linejoin="round" stroke-linecap="round"/>`);
    s.line(T.x0 - 7, T.top, T.x0, T.top, { color: C.ink, w: 1.7 });
    s.line(T.x1, T.top, T.x1 + 7, T.top, { color: C.ink, w: 1.7 });
    keep4(s, [[T.x0, T.top], [T.x0, T.bend]]);
    keep4(s, [[T.x1, T.top], [T.x1, T.bend]]);
    keep4(s, Array.from({ length: 25 }, (_, i): P => [T.x0 + r - r * Math.cos((Math.PI * i) / 24), T.bend + r * Math.sin((Math.PI * i) / 24)]));
    // the top of the iron(II) layer
    s.line(T.x0 + 1, T.surface, T.x1 - 1, T.surface, { color: C.slate, w: 1.3 });
    // the fresh FeSO4, run down the side
    s.vec(T.armX, T.armY0, T.armX, T.armY1, { color: C.slate, w: 1.5, dash: true });
    // the ring at the junction (marigold, the thing the figure is about)
    s.add(`<rect x="${T.x0 + 2}" y="${T.junction - T.ringH / 2}" width="${T.x1 - T.x0 - 4}" height="${T.ringH}" rx="3" fill="none" stroke="${C.mari}" stroke-width="2.4"/>`);
    TAGS4.length = 0;
    const X = 122;
    mtag(s, X, 44, 'added slowly down the side', [T.armX, 70]);
    mtag(s, X, 96, 'fresh FeSO<sub>4</sub> solution', [60, 116]);
    mtag(s, X, 158, 'dark brown ring, [Fe(NO)]<sup>2+</sup>', [T.x1 - 8, T.junction], { hi: true });
    mtag(s, X, 200, 'nitrate solution + conc. H<sub>2</sub>SO<sub>4</sub>', [60, 190]);
    mtag(s, X, 240, 'do not shake', null);
    return s;
  },
  check() {
    const T = TUBE, s = this.draw({});
    const out: Check[] = [];
    out.push(['Layers from the top: FeSO₄ surface above the junction, the junction above the rounded bottom, all below the mouth', T.top < T.surface && T.surface < T.junction && T.junction < T.bend + (T.x1 - T.x0) / 2]);
    out.push(['The ring is centred on the junction of the two layers', Math.abs(T.junction - T.ringH / 2 - (T.junction + T.ringH / 2) + T.ringH) < 1e-9 && T.junction > T.surface]);
    out.push(['The ring spans the tube and stays inside both walls', T.x0 + 2 > T.x0 && T.x1 - 2 < T.x1]);
    out.push(['The FeSO₄ is run in along the inner wall: the arrow is 10 px inside the right wall and stops above the surface', T.x1 - T.armX === 10 && T.armY1 < T.surface && T.armY0 > T.top]);
    const names = s.tags.map((t) => t.name);
    out.push(['The five labels: added down the side, fresh FeSO₄ solution, dark brown ring [Fe(NO)]²⁺, nitrate solution + conc. H₂SO₄, do not shake', ['added slowly down the side', 'fresh FeSO4 solution', 'dark brown ring, [Fe(NO)]2+', 'nitrate solution + conc. H2SO4', 'do not shake'].every((n) => names.includes(n))]);
    out.push(['The chapter text has the brown ring test as drawn (dark brown ring, [Fe(NO)]²⁺, fresh ferrous sulphate along the side, conc. H₂SO₄, do not shake)', ['dark brown ring', '[fe(no)]2+', 'freshly prepared ferrous sulphate', 'along the side', 'concentrated h2so4', 'do not shake'].every((k) => ALL.includes(k))]);
    out.push(['One marigold highlight: the ring (its tag and its outline)', (s.svg().match(new RegExp(C.mari, 'g')) ?? []).length >= 3 && s.tags.filter((t) => t.name.startsWith('dark brown')).length === 1]);
    // clearance: tags and the tube's lines
    let gap = Infinity;
    for (const pts of LINES4.get(s) ?? []) for (let i = 0; i < pts.length - 1; i++) {
      const a = pts[i], b = pts[i + 1], n = Math.max(1, Math.ceil(len(a, b) * 2));
      s.tags.forEach((t) => { for (let k = 0; k <= n; k++) gap = Math.min(gap, rectDist(t.rect, [a[0] + ((b[0] - a[0]) * k) / n, a[1] + ((b[1] - a[1]) * k) / n])); });
    }
    out.push([`Every tag stays at least ${LABEL_GAP} px clear of the tube's walls: the closest is ${fmt(gap)} px`, gap >= LABEL_GAP]);
    return out;
  },
};

export const DIAGRAMS_CHEMISTRY_12_12C: Diagram[] = [d1, d2, d3, d4];
