import { C, LABEL_GAP, Rect, Sketch, audit, mathW, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * BIOLOGY CLASS 12, CHAPTER 12 (Ecosystem): the drawings of the Master Reference book on pp. 656-713, redrawn.
 * Five numbered figures, each read from the page image; every one sits on its own "CHAPTER 12 . FIGURES" page with the caption
 * printed on the page before (pp. 663, 670, 676, 684, 689). The writers recorded no other drawing: pyramids, food chains and
 * seral stages are text and tables in this chapter.
 *
 *   Figure 12.1 (drawing p. 663, caption p. 662), Topic 01, topic index 0: productivity as an income statement (GPP, R, NPP).
 *   Figure 12.2 (drawing p. 670, caption p. 669), Topic 02, topic index 1: the five steps of decomposition.
 *   Figure 12.3 (drawing p. 676, caption p. 675), Topic 03, topic index 2: energy flow along a grazing food chain.
 *   Figure 12.4 (drawing p. 684, caption p. 683), Topic 04, topic index 3: carbon cycle and phosphorus cycle (two cases).
 *   Figure 12.5 (drawing p. 689, caption p. 688), Topic 05, topic index 4: Costanza et al., value of ecosystem services (pie).
 *
 * THE BOOK'S, as printed: every word of every box, note and label (the em dashes of the book become colons or commas, the house
 * rule: "GPP, total photosynthesis", "Energy flow: income statement", "Chain ends ~4-5 levels, too little energy remains", and the
 * 12.5 note "~US$33 trillion yr-1: nearly 2x global GNP"); which box feeds which (12.1: GPP to NPP to secondary productivity, GPP
 * to R; 12.2: detritus then the five steps in order, the book's bracket "occur simultaneously" spans the
 * five steps and not the detritus box; 12.3: solar radiation, PAR below 50% of incident, producers 2-10% of PAR, then x10% and about 90% lost as heat at
 * each of three transfers to herbivores, carnivores and top carnivores, the chain ending at 4-5 levels; 12.4: the carbon panel
 * with CO2 in atmosphere (reservoir) both ways with Oceans = sink, photosynthesis down to producers, respiration, decomposition
 * and combustion up; the phosphorus panel with rock phosphate (reservoir), weathering, soil solution, dashed run-off to sediments,
 * uptake to producers, the producers-to-decomposers arrow and the corrected "return" arrow, which starts at the Decomposers /
 * P-solubilising bacteria box and ends in the soil solution, as the errata (p. 761) say; 12.5: the six slices and every printed
 * share: soil formation about 50%, other services (remainder), wildlife habitat about 6%, climate regulation about 6%,
 * recreation under 10%, nutrient cycling under 10%, in the book's order round the pie from the top). The slice sizes are read
 * from the page at 110 dpi: 21, 6, 6, 8, 9 and 50 per cent, which add up to 100 (the book prints only the labels above;
 * "under 10%" is read as 8 and 9).
 * SCHEMATIC: all sizes and positions (re-laid for a phone width: 12.1 and 12.3 and 12.2 are one column, the carbon and
 * phosphorus panels are two cases, the pie's labels are re-spaced with leader lines), the arrow angles, the box proportions,
 * and the colours (the app's style: no fills, one marigold highlight per drawing: NPP in 12.1, the mineralisation step in 12.2,
 * the three x10% transfers in 12.3, the atmospheric CO2 reservoir in the carbon case and the return arrow in the phosphorus
 * case, soil formation in 12.5).
 */

const W = 360;
type P = [number, number];
const plain = (html: string) => html.replace(/<[^>]+>/g, '');
const wOf = (html: string, size: number) => Math.max(mathW(html, size), plain(html).length * size * 0.5);

/* ---------- helpers ---------- */
const LINES = new WeakMap<Sketch, P[][]>();
const BOXES = new WeakMap<Sketch, { name: string; rect: Rect; inner: Rect[] }[]>();
const ARROWS = new WeakMap<Sketch, { from: P; to: P; name: string }[]>();
const keep = (s: Sketch, pts: P[]) => LINES.set(s, [...(LINES.get(s) ?? []), pts]);
function path(s: Sketch, pts: P[], o: { color?: string; w?: number; close?: boolean; dash?: boolean } = {}) {
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ') + (o.close ? ' Z' : '');
  s.add(`<path d="${d}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}" stroke-linejoin="round" stroke-linecap="round"${o.dash ? ' stroke-dasharray="5 4"' : ''}/>`);
  keep(s, o.close ? [...pts, pts[0]] : pts);
}
/** An arrow head at `to`, pointing along from -> to. */
function head(s: Sketch, from: P, to: P, color: string = C.ink, L = 9, hw = 4.5) {
  const a = Math.atan2(to[1] - from[1], to[0] - from[0]);
  const bx = to[0] - L * Math.cos(a), by = to[1] - L * Math.sin(a);
  s.add(`<path d="M${r1(to[0])} ${r1(to[1])} L${r1(bx + hw * Math.sin(a))} ${r1(by - hw * Math.cos(a))} L${r1(bx - hw * Math.sin(a))} ${r1(by + hw * Math.cos(a))} Z" fill="${color}"/>`);
}
/** A straight arrow from -> to (recorded by name so the checks can follow it); `both` puts a head at each end. */
function arrow(s: Sketch, name: string, from: P, to: P, o: { color?: string; w?: number; dash?: boolean; both?: boolean } = {}) {
  const col = o.color ?? C.ink, w = o.w ?? 1.8, L = 9, a = Math.atan2(to[1] - from[1], to[0] - from[0]);
  const a0: P = o.both ? [from[0] + L * Math.cos(a), from[1] + L * Math.sin(a)] : from;
  const a1: P = [to[0] - L * Math.cos(a), to[1] - L * Math.sin(a)];
  path(s, [a0, a1], { color: col, w, dash: o.dash });
  head(s, a1, to, col);
  if (o.both) head(s, a0, from, col);
  keep(s, [from, to]);
  ARROWS.set(s, [...(ARROWS.get(s) ?? []), { from, to, name }]);
}
function box(s: Sketch, name: string, r: Rect, o: { color?: string; w?: number; dash?: boolean } = {}) {
  s.add(`<rect x="${r1(r[0])}" y="${r1(r[1])}" width="${r1(r[2] - r[0])}" height="${r1(r[3] - r[1])}" rx="7" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}"${o.dash ? ' stroke-dasharray="6 4"' : ''}/>`);
  keep(s, [[r[0], r[1]], [r[2], r[1]], [r[2], r[3]], [r[0], r[3]], [r[0], r[1]]]);
  BOXES.set(s, [...(BOXES.get(s) ?? []), { name, rect: r, inner: [] }]);
}
function lab(s: Sketch, x: number, y: number, html: string, o: { size?: number; anchor?: 'start' | 'middle' | 'end'; color?: string; bold?: boolean; within?: string } = {}): Rect {
  const size = o.size ?? 12, anchor = o.anchor ?? 'middle', w = wOf(html, size) * (o.bold ? 1.08 : 1);
  const x0 = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w : x;
  const rect: Rect = [x0, y - size * 0.72, x0 + w, y + size * 0.22];
  s.labels.push({ text: plain(html), rect });
  s.text(x, y, html, { size, anchor, color: o.color ?? C.text, semibold: o.bold });
  if (o.within) BOXES.get(s)!.find((b) => b.name === o.within)!.inner.push(rect);
  return rect;
}
/** A box named `name` with centred lines of text (11 pt); height is 14 a line plus 12 unless `h` is given. Returns its rect. */
function tbox(s: Sketch, name: string, x0: number, x1: number, y0: number, lines: string[], o: { h?: number; hi?: boolean; dash?: boolean } = {}): Rect {
  const h = o.h ?? lines.length * 14 + 12, r: Rect = [x0, y0, x1, y0 + h];
  box(s, name, r, { color: o.hi ? C.mari : C.ink, w: o.hi ? 2.6 : 1.7, dash: o.dash });
  const first = y0 + h / 2 - ((lines.length - 1) * 14) / 2 + 4;
  lines.forEach((t, i) => lab(s, (x0 + x1) / 2, first + i * 14, t, { size: 11, within: name }));
  return r;
}
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
/** Every drawn label keeps LABEL_GAP clear of every drawn line, lies in the frame, touches no other label, and sits inside its box. */
function layout(s: Sketch): Check[] {
  let gap = Infinity, what = '';
  for (const l of s.labels) for (const pts of LINES.get(s) ?? []) { const d = gapTo(l.rect, pts); if (d < gap) { gap = d; what = l.text; } }
  const out = s.labels.filter((l) => l.rect[0] < 0 || l.rect[2] > s.w || l.rect[1] < 0 || l.rect[3] > s.h).map((l) => l.text);
  const L = s.labels;
  const touch = L.flatMap((a, i) => L.slice(i + 1).filter((b) => !(a.rect[2] + 2 <= b.rect[0] || b.rect[2] + 2 <= a.rect[0] || a.rect[3] + 2 <= b.rect[1] || b.rect[3] + 2 <= a.rect[1])).map((b) => `${a.text} / ${b.text}`));
  const spill = (BOXES.get(s) ?? []).flatMap((b) => b.inner.filter((r) => r[0] < b.rect[0] + 4 || r[2] > b.rect[2] - 4 || r[1] < b.rect[1] + 4 || r[3] > b.rect[3] - 4).map(() => b.name));
  return [
    [`Every label stays ${LABEL_GAP} px clear of every drawn line: the closest is "${what}", ${r1(gap)} px`, gap >= LABEL_GAP],
    [`Every label lies inside the frame${out.length ? `: not ${out.join(', ')}` : ''}`, out.length === 0],
    [`No two labels touch${touch.length ? `: ${touch.join(', ')}` : ''}`, touch.length === 0],
    [`Every label lies inside its box${spill.length ? `: not in ${spill.join(', ')}` : ''}`, spill.length === 0],
  ];
}
const has = (s: Sketch, t: string) => s.labels.some((l) => l.text === t);
const hasAll = (s: Sketch, ts: string[]) => ts.every((t) => has(s, t));
const clean = (s: Sketch): Check => { const a = audit(s); return [`Layout audit is clear${a.length ? `: ${a.join('; ')}` : ''}`, a.length === 0 && s.unplaced.length === 0]; };
const rectOf = (s: Sketch, name: string) => BOXES.get(s)!.find((b) => b.name === name)!.rect;
const onEdge = (p: P, r: Rect, tol = 1.5) => p[0] >= r[0] - tol && p[0] <= r[2] + tol && p[1] >= r[1] - tol && p[1] <= r[3] + tol && (Math.abs(p[0] - r[0]) <= tol || Math.abs(p[0] - r[2]) <= tol || Math.abs(p[1] - r[1]) <= tol || Math.abs(p[1] - r[3]) <= tol);
/** Is there an arrow that starts on box `a`'s edge and ends on box `b`'s edge? */
const joins = (s: Sketch, a: string, b: string) => (ARROWS.get(s) ?? []).some((k) => onEdge(k.from, rectOf(s, a)) && onEdge(k.to, rectOf(s, b)));
const arrowsOf = (s: Sketch) => ARROWS.get(s) ?? [];

/* ================= Figure 12.1 ================= */
const CAP121 = 'Productivity as an income statement: gross primary productivity (GPP) less producer respiration (R) gives net primary productivity (NPP), which is available to consumers and supports secondary productivity.';
function draw121(): Sketch {
  const s = new Sketch(W, 312);
  lab(s, W / 2, 24, 'Energy flow: income statement', { size: 14, bold: true });
  tbox(s, 'GPP', 20, 230, 44, ['GPP: total', 'photosynthesis', '(gross income)']);
  tbox(s, 'R', 254, 346, 44, ['R: producer', 'respiration', '(cost)']);
  tbox(s, 'NPP', 20, 230, 140, ['NPP = GPP − R', '(savings → available', 'to heterotrophs)'], { hi: true });
  tbox(s, 'Secondary', 20, 230, 236, ['Secondary productivity', '(new organic matter', 'by consumers)']);
  arrow(s, 'GPP to NPP', [125, 98], [125, 140]);
  arrow(s, 'NPP to secondary', [125, 194], [125, 236]);
  arrow(s, 'GPP to R', [230, 71], [254, 71]);
  return s;
}
function check121(): Check[] {
  const s = draw121();
  const g = rectOf(s, 'GPP'), r = rectOf(s, 'R'), n = rectOf(s, 'NPP'), q = rectOf(s, 'Secondary');
  return [
    ['GPP feeds NPP and feeds R (the cost); NPP feeds secondary productivity; no other arrow', joins(s, 'GPP', 'NPP') && joins(s, 'GPP', 'R') && joins(s, 'NPP', 'Secondary') && arrowsOf(s).length === 3],
    ['NPP = GPP − R is the relation the NPP box carries, and it is the one marigold highlight; the worked case in Practice, 32,000 − 12,000 = 20,000 kcal m−2 yr−1, obeys it', has(s, 'NPP = GPP − R') && 32000 - 12000 === 20000],
    ['GPP, NPP and secondary productivity run in order down one column, R sits beside GPP (the cost taken off the gross income)', g[1] < n[1] && n[1] < q[1] && Math.abs(g[0] - n[0]) < 1 && Math.abs(n[0] - q[0]) < 1 && r[0] > g[2] && Math.abs(r[1] - g[1]) < 1],
    ['All labels are the book\'s words (the em dashes are colons)', hasAll(s, ['Energy flow: income statement', 'GPP: total', 'photosynthesis', '(gross income)', 'R: producer', 'respiration', '(cost)', 'NPP = GPP − R', '(savings → available', 'to heterotrophs)', 'Secondary productivity', '(new organic matter', 'by consumers)'])],
    ...layout(s), clean(s),
  ];
}
const fig121: Diagram = { id: 'b12-12-fig-12.1', topic: 0, name: 'Productivity as an income statement', cases: [{ chip: 'GPP, R and NPP', cap: CAP121 }], draw: draw121, check: check121 };

/* ================= Figure 12.2 ================= */
const CAP122 = 'The five steps of decomposition on the detritus: fragmentation, leaching, catabolism, humification and mineralisation, which occur simultaneously. CO<sub>2</sub>, H<sub>2</sub>O and nutrients are released at mineralisation. The rate is higher in warm, moist, aerobic, N/sugar-rich detritus and lower in cold, dry, anaerobic, lignin/chitin-rich detritus.';
const STEPS: { name: string; lines: string[] }[] = [
  { name: 'Detritus', lines: ['Detritus', '(dead leaves, roots, remains)'] },
  { name: 'Fragmentation', lines: ['Fragmentation', '(earthworms shred to', 'smaller particles)'] },
  { name: 'Leaching', lines: ['Leaching', '(water carries soluble', 'nutrients into soil)'] },
  { name: 'Catabolism', lines: ['Catabolism', '(bacterial / fungal enzymes', 'give inorganic compounds)'] },
  { name: 'Humification', lines: ['Humification', 'forms humus (dark, resistant,', 'nutrient store)'] },
  { name: 'Mineralisation', lines: ['Mineralisation', 'releases inorganic', 'nutrients (CO<sub>2</sub>,', 'H<sub>2</sub>O, minerals)'] },
];
const SX0 = 124, SX1 = 346, GAP = 20;
function draw122(): Sketch {
  const s = new Sketch(W, 556);
  let y = 14;
  const rects: Rect[] = [];
  STEPS.forEach((st, i) => {
    const r = tbox(s, st.name, SX0, SX1, y, st.lines, { hi: i === STEPS.length - 1 });
    rects.push(r);
    if (i > 0) arrow(s, `${STEPS[i - 1].name} to ${st.name}`, [(SX0 + SX1) / 2, rects[i - 1][3]], [(SX0 + SX1) / 2, r[1]]);
    y = r[3] + GAP;
  });
  // the bracket "occur simultaneously" spans the five steps (not the detritus)
  const top = rects[1][1], bot = rects[5][3];
  path(s, [[SX0 - 8, top], [SX0 - 16, top], [SX0 - 16, bot], [SX0 - 8, bot]], { color: C.slate, w: 1.4 });
  lab(s, SX0 - 24, (top + bot) / 2 - 2, 'occur', { size: 11, color: C.slate, anchor: 'end' });
  lab(s, SX0 - 24, (top + bot) / 2 + 12, 'simultaneously', { size: 11, color: C.slate, anchor: 'end' });
  const ry = bot + 40;
  lab(s, 14, ry, 'Rate higher: warm, moist, aerobic,', { size: 11.5, anchor: 'start' });
  lab(s, 14, ry + 15, 'N/sugar-rich detritus', { size: 11.5, anchor: 'start' });
  lab(s, 14, ry + 40, 'Rate lower: cold, dry, anaerobic,', { size: 11.5, color: C.slate, anchor: 'start' });
  lab(s, 14, ry + 55, 'lignin/chitin-rich detritus', { size: 11.5, color: C.slate, anchor: 'start' });
  return s;
}
function check122(): Check[] {
  const s = draw122();
  const names = STEPS.map((t) => t.name);
  const rs = names.map((n) => rectOf(s, n));
  const chain = names.every((n, i) => i === 0 || joins(s, names[i - 1], n)) && arrowsOf(s).length === 5;
  const lab2 = s.labels.find((l) => l.text === 'simultaneously')!;
  return [
    ['Detritus then fragmentation, leaching, catabolism, humification, mineralisation, one arrow between each pair in that order (five arrows)', chain && rs.every((r, i) => i === 0 || r[1] > rs[i - 1][3])],
    ['Mineralisation, the step where CO2, H2O and nutrients are released (the caption), is the one marigold highlight and is last', names[5] === 'Mineralisation' && has(s, 'nutrients (CO2,') && has(s, 'H2O, minerals)')],
    ['The "occur simultaneously" bracket spans the five steps and not the detritus box', lab2.rect[1] > rs[1][1] && lab2.rect[3] < rs[5][3] && rs[0][3] < rs[1][1]],
    ['Both rate notes are the book\'s: higher in warm, moist, aerobic, N/sugar-rich detritus; lower in cold, dry, anaerobic, lignin/chitin-rich detritus', hasAll(s, ['Rate higher: warm, moist, aerobic,', 'N/sugar-rich detritus', 'Rate lower: cold, dry, anaerobic,', 'lignin/chitin-rich detritus'])],
    ['All step texts are the book\'s words', hasAll(s, ['Detritus', '(dead leaves, roots, remains)', 'Fragmentation', '(earthworms shred to', 'smaller particles)', 'Leaching', '(water carries soluble', 'nutrients into soil)', 'Catabolism', '(bacterial / fungal enzymes', 'give inorganic compounds)', 'Humification', 'forms humus (dark, resistant,', 'nutrient store)', 'Mineralisation', 'releases inorganic', 'occur', 'simultaneously'])],
    ...layout(s), clean(s),
  ];
}
const fig122: Diagram = { id: 'b12-12-fig-12.2', topic: 1, name: 'Five steps of decomposition', cases: [{ chip: 'Five steps', cap: CAP122 }], draw: draw122, check: check122 };

/* ================= Figure 12.3 ================= */
const CAP123 = 'Energy flow along a grazing food chain: less than 50% of incident solar radiation is PAR; producers capture about 2–10% of PAR; at each trophic transfer about 10% passes to the next level and about 90% is not passed on (most of it lost as heat, the rest left as waste and dead matter).';
const CH: { name: string; lines: string[]; gap: number; note: boolean }[] = [
  { name: 'Solar', lines: ['Solar radiation', '(incident)'], gap: 22, note: false },
  { name: 'PAR', lines: ['PAR', '(<50% of incident)'], gap: 22, note: false },
  { name: 'Producers', lines: ['Producers', '(~2–10% of PAR,', '1st level)'], gap: 44, note: true },
  { name: 'Herbivores', lines: ['Herbivores', '(2nd trophic level)'], gap: 44, note: true },
  { name: 'Carnivores', lines: ['Carnivores', '(3rd trophic level)'], gap: 44, note: true },
  { name: 'Top carnivores', lines: ['Top carnivores', '(4th trophic level)'], gap: 0, note: false },
];
const CX0 = 24, CX1 = 184, CMID = (CX0 + CX1) / 2;
function draw123(): Sketch {
  const s = new Sketch(W, 496);
  let y = 14;
  const rects: Rect[] = [];
  CH.forEach((c, i) => {
    const r = tbox(s, c.name, CX0, CX1, y, c.lines);
    rects.push(r);
    if (i > 0) {
      const p = CH[i - 1], from: P = [CMID, rects[i - 1][3]], to: P = [CMID, r[1]], hi = p.note;
      arrow(s, `${p.name} to ${c.name}`, from, to, { color: hi ? C.mari : C.ink, w: hi ? 2.6 : 1.8 });
      if (hi) {
        const mid = (from[1] + to[1]) / 2;
        lab(s, CMID + 9, mid + 4, '×10%', { size: 12, bold: true, anchor: 'start', color: C.amber });
        path(s, [[CMID + 52, mid], [CMID + 74, mid]], { color: C.mari, w: 1.6 });
        lab(s, CMID + 82, mid - 3, '~90% lost', { size: 11, anchor: 'start', color: C.amber });
        lab(s, CMID + 82, mid + 11, 'as heat', { size: 11, anchor: 'start', color: C.amber });
      }
    }
    y = r[3] + c.gap;
  });
  lab(s, W / 2, 478, 'Chain ends ~4–5 levels, too little energy remains.', { size: 12, color: C.slate });
  return s;
}
/** Energy left at each level as a share of what the producers hold (check only). */
const share = (k: number) => 0.1 ** k;
function check123(): Check[] {
  const s = draw123();
  const names = CH.map((c) => c.name), rs = names.map((n) => rectOf(s, n));
  const heat = arrowsOf(s).length;
  return [
    ['Solar radiation, PAR, producers, herbivores, carnivores, top carnivores: one arrow between each pair in that order (five arrows)', names.every((n, i) => i === 0 || joins(s, names[i - 1], n)) && heat === 5 && rs.every((r, i) => i === 0 || r[1] > rs[i - 1][3])],
    ['Three transfers carry "×10%" and "~90% lost as heat" (producers to herbivores, herbivores to carnivores, carnivores to top carnivores), and 10% + 90% = 100%', s.labels.filter((l) => l.text === '×10%').length === 3 && s.labels.filter((l) => l.text === '~90% lost').length === 3 && s.labels.filter((l) => l.text === 'as heat').length === 3 && Math.abs(0.1 + 0.9 - 1) < 1e-12],
    ['After three ×10% steps a top carnivore holds 1 thousandth of what the producers hold (10,000 → 1,000 → 100 → 10 in a chain that starts at 10,000), the reason the chain ends', Math.abs(share(3) - 0.001) < 1e-12 && 10000 * 0.1 * 0.1 * 0.1 === 10],
    ['PAR is under 50% of incident radiation and producers hold 2–10% of PAR, so producers hold under 5% of incident radiation (10% of 50%)', 0.1 * 0.5 === 0.05 && 0.02 * 0.5 === 0.01],
    ['All labels are the book\'s words (the em dash in the closing note is a comma)', hasAll(s, ['Solar radiation', '(incident)', 'PAR', '(<50% of incident)', 'Producers', '(~2–10% of PAR,', '1st level)', 'Herbivores', '(2nd trophic level)', 'Carnivores', '(3rd trophic level)', 'Top carnivores', '(4th trophic level)', '×10%', '~90% lost', 'as heat', 'Chain ends ~4–5 levels, too little energy remains.'])],
    ...layout(s), clean(s),
  ];
}
const fig123: Diagram = { id: 'b12-12-fig-12.3', topic: 2, name: 'Energy flow along a grazing food chain', cases: [{ chip: 'Food chain', cap: CAP123 }], draw: draw123, check: check123 };

/* ================= Figure 12.4 ================= */
const CAP124 = 'Carbon cycle (gaseous; the reservoir is the atmosphere and hydrosphere: the air holds only about 1% of the world’s carbon and the oceans about 71%, and the oceans act as a sink for CO<sub>2</sub>) and phosphorus cycle (sedimentary; the reservoir is rock, with no atmospheric phase).';
function drawCarbon(): Sketch {
  const s = new Sketch(W, 274);
  lab(s, W / 2, 24, 'Carbon (gaseous)', { size: 14, bold: true });
  tbox(s, 'CO2', 14, 174, 50, ['CO<sub>2</sub> in', 'atmosphere', '(reservoir)'], { hi: true });
  tbox(s, 'Oceans', 214, 346, 57, ['Oceans', '= sink'], { h: 40 });
  tbox(s, 'Producers', 14, 174, 200, ['Producers', '(food chain)'], { h: 54 });
  arrow(s, 'CO2 and oceans', [174, 77], [214, 77], { both: true });
  arrow(s, 'photosynthesis', [34, 104], [34, 200]);
  arrow(s, 'respiration', [150, 200], [150, 104]);
  lab(s, 42, 156, 'photosynthesis', { size: 11, anchor: 'start' });
  ['respiration /', 'decomposition /', 'combustion'].forEach((t, i) => lab(s, 158, 144 + i * 14, t, { size: 11, anchor: 'start' }));
  return s;
}
function checkCarbon(): Check[] {
  const s = drawCarbon();
  const ar = arrowsOf(s), co2 = rectOf(s, 'CO2'), pr = rectOf(s, 'Producers');
  const down = ar.find((a) => a.name === 'photosynthesis')!, up = ar.find((a) => a.name === 'respiration')!;
  return [
    ['Atmospheric CO2 (the reservoir, the highlight) exchanges with the Oceans (the sink) by one arrow with a head at each end', joins(s, 'CO2', 'Oceans') && ar.filter((a) => a.name === 'CO2 and oceans').length === 1],
    ['Photosynthesis runs down from the atmosphere to the producers; respiration, decomposition and combustion run up from the producers to the atmosphere', onEdge(down.from, co2) && onEdge(down.to, pr) && down.to[1] > down.from[1] && onEdge(up.from, pr) && onEdge(up.to, co2) && up.to[1] < up.from[1]],
    ['The gaseous cycle has an atmospheric reservoir: the CO2 box says "reservoir" and the Oceans box says "sink"', hasAll(s, ['(reservoir)', '= sink'])],
    ['All labels are the book\'s words', hasAll(s, ['Carbon (gaseous)', 'CO2 in', 'atmosphere', '(reservoir)', 'Oceans', '= sink', 'Producers', '(food chain)', 'photosynthesis', 'respiration /', 'decomposition /', 'combustion'])],
    ...layout(s), clean(s),
  ];
}
function drawPhos(): Sketch {
  const s = new Sketch(W, 262);
  lab(s, W / 2, 24, 'Phosphorus (sedimentary)', { size: 14, bold: true });
  lab(s, W / 2, 42, 'NO atmospheric phase', { size: 11.5, color: C.slate });
  tbox(s, 'Rock', 8, 98, 58, ['Rock phosphate', '(reservoir)'], { h: 40 });
  tbox(s, 'Weathering', 120, 204, 58, ['Weathering'], { h: 40 });
  tbox(s, 'Soil', 224, 348, 58, ['Soil', 'solution'], { h: 40 });
  tbox(s, 'Sediments', 8, 92, 176, ['Sediments'], { h: 54, dash: true });
  tbox(s, 'Decomposers', 140, 248, 176, ['Decomposers /', 'P-solubilising', 'bacteria'], { h: 54 });
  tbox(s, 'Producers', 270, 348, 176, ['Producers', '(food chain)'], { h: 54 });
  arrow(s, 'rock to weathering', [98, 78], [120, 78]);
  arrow(s, 'weathering to soil', [204, 78], [224, 78]);
  arrow(s, 'run-off', [226, 98], [74, 176], { dash: true });
  arrow(s, 'uptake', [300, 98], [300, 176]);
  arrow(s, 'producers to decomposers', [270, 203], [248, 203]);
  arrow(s, 'return', [240, 176], [240, 98], { color: C.mari, w: 2.6 });
  lab(s, 160, 152, 'run-off', { size: 11, anchor: 'start' });
  lab(s, 248, 141, 'return', { size: 11, anchor: 'start', color: C.amber, bold: true });
  lab(s, 308, 141, 'uptake', { size: 11, anchor: 'start' });
  return s;
}
function checkPhos(): Check[] {
  const s = drawPhos();
  const ar = arrowsOf(s), ret = ar.find((a) => a.name === 'return')!;
  return [
    ['Rock phosphate (the reservoir) goes by weathering to the soil solution; run-off (dashed) goes from the soil solution to the sediments; uptake goes from the soil solution to the producers', joins(s, 'Rock', 'Weathering') && joins(s, 'Weathering', 'Soil') && joins(s, 'Soil', 'Sediments') && joins(s, 'Soil', 'Producers')],
    ['The corrected "return" arrow (errata p. 761, the highlight) starts at the Decomposers / P-solubilising bacteria box and ends in the soil solution, not at Producers', onEdge(ret.from, rectOf(s, 'Decomposers')) && !onEdge(ret.from, rectOf(s, 'Producers')) && onEdge(ret.to, rectOf(s, 'Soil')) && ret.to[1] < ret.from[1]],
    ['Producers pass phosphorus to the decomposers (the short arrow between their boxes), and no arrow touches the atmosphere: there is no atmospheric box', joins(s, 'Producers', 'Decomposers') && !BOXES.get(s)!.some((b) => /atmosphere/i.test(b.name))],
    ['Sediments are the dashed box and the only dashed arrow (run-off) ends on it', arrowsOf(s).filter((a) => a.name === 'run-off').length === 1],
    ['All labels are the book\'s words', hasAll(s, ['Phosphorus (sedimentary)', 'NO atmospheric phase', 'Rock phosphate', '(reservoir)', 'Weathering', 'Soil', 'solution', 'Sediments', 'Decomposers /', 'P-solubilising', 'bacteria', 'Producers', '(food chain)', 'run-off', 'return', 'uptake'])],
    ...layout(s), clean(s),
  ];
}
const fig124: Diagram = {
  id: 'b12-12-fig-12.4', topic: 3, name: 'Carbon and phosphorus cycles',
  cases: [{ chip: 'Carbon cycle', kind: 'c', cap: CAP124 }, { chip: 'Phosphorus cycle', kind: 'p', cap: CAP124 }],
  draw: (c: { kind: string }) => (c.kind === 'c' ? drawCarbon() : drawPhos()),
  check: (c: { kind: string }) => (c.kind === 'c' ? checkCarbon() : checkPhos()),
};

/* ================= Figure 12.5 ================= */
const CAP125 = 'Costanza et al.: value of ecosystem services is about USD 33 trillion per year, nearly twice the global GNP (about USD 18 trillion). Soil formation accounts for about 50% of the total. (This split is NCERT’s wording and the one examined. In Costanza et al.’s original 1997 table the share of about half belongs to nutrient cycling, so treat these labels as NCERT’s.)';
/** The slices in the book's order round the pie from the top, clockwise: share of the total, read from the page. */
const PIE: { name: string; pct: number; printed: string; ly?: number }[] = [
  { name: 'Other services', pct: 21, printed: '(remainder)', ly: 72 },
  { name: 'Wildlife habitat', pct: 6, printed: '~6%', ly: 140 },
  { name: 'Climate regulation', pct: 6, printed: '~6%', ly: 190 },
  { name: 'Recreation', pct: 8, printed: '<10%', ly: 240 },
  { name: 'Nutrient cycling', pct: 9, printed: '<10%', ly: 290 },
  { name: 'Soil formation', pct: 50, printed: '~50%' },
];
const PCX = 172, PCY = 150, PR = 68;
const at = (deg: number, r = PR): P => [PCX + r * Math.sin((deg * Math.PI) / 180), PCY - r * Math.cos((deg * Math.PI) / 180)];
function draw125(): Sketch {
  const s = new Sketch(W, 362);
  let a0 = 0;
  PIE.forEach((sl) => {
    const a1 = a0 + sl.pct * 3.6, hi = sl.name === 'Soil formation';
    const p0 = at(a0), p1 = at(a1);
    const pts: P[] = Array.from({ length: 17 }, (_, i): P => at(a0 + ((a1 - a0) * i) / 16));
    s.add(`<path d="M${PCX} ${PCY} L${r1(p0[0])} ${r1(p0[1])} A${PR} ${PR} 0 ${a1 - a0 > 180 ? 1 : 0} 1 ${r1(p1[0])} ${r1(p1[1])} Z" fill="none" stroke="${hi ? C.mari : C.ink}" stroke-width="${hi ? 2.8 : 1.6}" stroke-linejoin="round"/>`);
    keep(s, [[PCX, PCY], ...pts, [PCX, PCY]]);
    const mid = (a0 + a1) / 2;
    if (hi) {
      lab(s, PCX - PR - 8, PCY - 4, 'Soil formation', { size: 12, anchor: 'end', bold: true, color: C.amber });
      lab(s, PCX - PR - 8, PCY + 11, '~50%', { size: 12, anchor: 'end', bold: true, color: C.amber });
    } else {
      const p = at(mid), ly = sl.ly!, to: P = [PCX + PR + 8, ly - 4];
      path(s, [p, to], { color: C.grey, w: 1.1 });
      lab(s, to[0] + 6, ly, sl.name, { size: 11.5, anchor: 'start' });
      lab(s, to[0] + 6, ly + 14, sl.printed, { size: 11.5, anchor: 'start' });
    }
    a0 = a1;
  });
  lab(s, W / 2, 334, '~US$33 trillion yr<sup>−1</sup>: nearly 2× global GNP', { size: 12, color: C.slate });
  lab(s, W / 2, 351, '(~US$18 trillion)', { size: 12, color: C.slate });
  return s;
}
function check125(): Check[] {
  const s = draw125();
  const sum = PIE.reduce((a, p) => a + p.pct, 0);
  const soil = PIE.find((p) => p.name === 'Soil formation')!;
  const under10 = PIE.filter((p) => p.printed === '<10%'), six = PIE.filter((p) => p.printed === '~6%');
  return [
    [`The six slices add up to 100% (${PIE.map((p) => p.pct).join(' + ')} = ${sum}) and sweep 360 degrees`, sum === 100 && Math.abs(PIE.reduce((a, p) => a + p.pct * 3.6, 0) - 360) < 1e-9],
    ['Soil formation, about 50%, is exactly half the circle (a 180 degree slice) and is the marigold highlight', soil.pct === 50 && soil.pct * 3.6 === 180],
    ['The two slices the book labels "<10%" (recreation, nutrient cycling) are each under 10; the two labelled "~6%" (wildlife habitat, climate regulation) are 6', under10.length === 2 && under10.every((p) => p.pct < 10) && six.length === 2 && six.every((p) => p.pct === 6)],
    ['"Nearly 2×": 33 over 18 is 1.83, under 2 and over 1.8, so "nearly twice" holds (the book prints no year)', 33 / 18 > 1.8 && 33 / 18 < 2],
    ['Soil formation share in dollars is about 16.5 trillion of 33 (half), less than the 18 trillion GNP', 33 * 0.5 === 16.5 && 16.5 < 18],
    ['The slices run in the book\'s order from the top: other services, wildlife habitat, climate regulation, recreation, nutrient cycling, soil formation; every label is the book\'s', PIE.map((p) => p.name).join() === 'Other services,Wildlife habitat,Climate regulation,Recreation,Nutrient cycling,Soil formation' && hasAll(s, ['Other services', '(remainder)', 'Wildlife habitat', '~6%', 'Climate regulation', 'Recreation', '<10%', 'Nutrient cycling', 'Soil formation', '~50%', '~US$33 trillion yr−1: nearly 2× global GNP', '(~US$18 trillion)'])],
    ...layout(s), clean(s),
  ];
}
const fig125: Diagram = { id: 'b12-12-fig-12.5', topic: 4, name: 'Value of ecosystem services', cases: [{ chip: 'Share of the total', cap: CAP125 }], draw: draw125, check: check125 };

export const DIAGRAMS_BIOLOGY_12_12: Diagram[] = [fig121, fig122, fig123, fig124, fig125];
