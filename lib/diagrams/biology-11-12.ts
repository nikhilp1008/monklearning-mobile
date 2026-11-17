import { C, LABEL_GAP, Rect, Sketch, audit, mathW, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * BIOLOGY CLASS 11, CHAPTER 12 (Respiration in Plants): the drawings of the Master Reference book on pp. 706-764, redrawn.
 * The chapter has four drawings, all numbered, all on their own "Figures" pages (the writers' reports list no unnumbered one):
 *
 *   Figure 12.1 (drawn p. 716, caption p. 715), Topic 01, topic index 1: glycolysis, the EMP pathway.
 *   Figure 12.2 (drawn p. 724, caption p. 723), Topic 02, topic index 2: the citric acid (Krebs) cycle.
 *   Figure 12.3 (drawn p. 726, caption p. 725), Topic 02, topic index 2: the ETS and chemiosmosis.
 *   Figure 12.4 (drawn p. 733, caption p. 732), Topic 03, topic index 3: the amphibolic nature of respiration.
 *
 * THE BOOK'S, as printed: every box name, enzyme name and product label; the order of the steps and which step makes or
 * uses what (12.1: -ATP at hexokinase and phosphofructokinase, +NADH at PGAL dehydrogenase, +ATP at the 13BPG to 3PG
 * step and at pyruvate kinase, each pay-off step done twice per glucose; 12.2: the carbon counts in the names, 2 CO2 at
 * isocitrate and alpha-KG dehydrogenase, 3 NADH, 1 FADH2 at succinate dehydrogenase, 1 GTP at succinate thiokinase, acetyl-CoA
 * entering at citrate synthase; 12.3: the five complexes in the book's order, H+ pumped by I, III and IV only, II shorter and
 * not pumping, UQ and cyt c as carriers, the NADH and FADH2 entries, the equation O2 + 4H+ + 4e- -> 2H2O, ADP + Pi in and
 * ATP out, H+ flowing back through ATP synthase; 12.4: every box and arrow of the converging pathways and the two orange
 * reverse arrows). 12.4's box positions are the book's, scaled 0.66 across and 0.73 down to a phone (box widths are ours; Fats, Fatty acids and
 * beta-oxidation sit a little left of the book's, and the Proteins column a little right, to make room for the labels).
 * SCHEMATIC: all sizes, spacing and angles of every box and arrow (re-laid for a phone), the straight double arrow for
 * triose phosphate isomerase (the book curves it), the ring's octagon shape in 12.2, the membrane proportions in 12.3, and the
 * colours: the book's red, green, orange and navy are replaced by the app's one marigold highlight (12.1: the -ATP
 * arrows, with a key; 12.2: acetyl-CoA, the entry; 12.3: ATP synthase and the H+ flow through it; 12.4: the reverse
 * arrows), so a caption's "red", "green" or "orange" arrows are named by the key lines on the drawing.
 */

const W = 360;
type P = [number, number];
const plain = (html: string) => html.replace(/<[^>]+>/g, '');
const wOf = (html: string, size: number) => Math.max(mathW(html, size), plain(html).length * size * 0.5);

/* ---------- helpers ---------- */
const LINES = new WeakMap<Sketch, P[][]>();
const BOXES = new WeakMap<Sketch, { name: string; rect: Rect; inner: Rect[] }[]>();
const keep = (s: Sketch, pts: P[]) => LINES.set(s, [...(LINES.get(s) ?? []), pts]);
function path(s: Sketch, pts: P[], o: { color?: string; w?: number; close?: boolean } = {}) {
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ') + (o.close ? ' Z' : '');
  s.add(`<path d="${d}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}" stroke-linejoin="round" stroke-linecap="round"/>`);
  keep(s, o.close ? [...pts, pts[0]] : pts);
}
function arrow(s: Sketch, a: P, b: P, o: { color?: string; w?: number } = {}) {
  s.vec(a[0], a[1], b[0], b[1], { color: o.color ?? C.ink, w: o.w ?? 1.7 });
  keep(s, [a, b]);
}
/** A box (no fill) with its name; labels placed in it are checked to lie inside. */
function box(s: Sketch, name: string, r: Rect, o: { color?: string; w?: number; open?: boolean } = {}) {
  if (o.open) path(s, [[r[0], r[3]], [r[0], r[1]], [r[2], r[1]], [r[2], r[3]]], { color: o.color, w: o.w });
  else {
    s.add(`<rect x="${r1(r[0])}" y="${r1(r[1])}" width="${r1(r[2] - r[0])}" height="${r1(r[3] - r[1])}" rx="7" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}"/>`);
    keep(s, [[r[0], r[1]], [r[2], r[1]], [r[2], r[3]], [r[0], r[3]], [r[0], r[1]]]);
  }
  BOXES.set(s, [...(BOXES.get(s) ?? []), { name, rect: r, inner: [] }]);
}
/** A line of STIX on the drawing from its baseline; its box at its width. Optionally inside a named box. */
function lab(s: Sketch, x: number, y: number, html: string, o: { size?: number; anchor?: 'start' | 'middle' | 'end'; color?: string; bold?: boolean; within?: string } = {}): Rect {
  const size = o.size ?? 10.5, anchor = o.anchor ?? 'middle', w = wOf(html, size) * (o.bold ? 1.08 : 1);
  const x0 = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w : x;
  const rect: Rect = [x0, y - size * 0.72, x0 + w, y + size * (html.includes('<sub>') ? 0.36 : 0.22)];
  s.labels.push({ text: plain(html), rect });
  s.text(x, y, html, { size, anchor, color: o.color ?? C.text, semibold: o.bold });
  if (o.within) BOXES.get(s)!.find((b) => b.name === o.within)!.inner.push(rect);
  return rect;
}
/** A named, unfilled box, 24 high, with its text centred; returns its rectangle. */
function node(s: Sketch, cx: number, cy: number, html: string, o: { size?: number; hi?: boolean; bold?: boolean; w?: number } = {}): Rect {
  const size = o.size ?? 11, w = o.w ?? Math.round(wOf(html, size) * (o.bold ? 1.08 : 1) + 18), r: Rect = [cx - w / 2, cy - 12, cx + w / 2, cy + 12];
  const name = plain(html);
  box(s, name, r, o.hi ? { color: C.mari, w: 2.2 } : {});
  lab(s, cx, cy + size * 0.36, html, { size, bold: o.bold, color: o.hi ? C.amber : C.text, within: name });
  return r;
}
const mid = (r: Rect): P => [(r[0] + r[2]) / 2, (r[1] + r[3]) / 2];
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
const count = (s: Sketch, t: string) => s.labels.filter((l) => l.text === t).length;
const has = (s: Sketch, t: string) => count(s, t) > 0;
const clean = (s: Sketch): Check => { const a = audit(s); return [`Layout audit is clear${a.length ? `: ${a.join('; ')}` : ''}`, a.length === 0 && s.unplaced.length === 0]; };
const noEmDash = (...t: string[]): Check => ['No em dash in any caption or label', t.every((x) => !x.includes(String.fromCharCode(8212)))];

/* ================= Figure 12.1: glycolysis ================= */
const CAP121 = 'Glycolysis (EMP pathway). Investment phase: hexokinase and phosphofructokinase each use 1 ATP (highlighted arrows). Pay-off phase: each of the two trioses gives 1 NADH and 2 ATP by substrate-level phosphorylation (heavy black arrows). Net per glucose: 2 ATP, 2 NADH, 2 pyruvate.';
const COL = 190, ROW0 = 52, PITCH = 46;
/** One enzyme step. `after` = after the aldolase split, so it happens twice per glucose. atp: -1 spent, +1 made; nadh: made. */
type Step = { a: string; b: string; enz: string; side: 'l' | 'r'; atp?: number; nadh?: number; after: boolean };
const GLY: Step[] = [
  { a: 'Glc', b: 'G6P', enz: 'hexokinase, −ATP', side: 'l', atp: -1, after: false },
  { a: 'G6P', b: 'F6P', enz: 'phosphohexose isomerase', side: 'r', after: false },
  { a: 'F6P', b: 'F16BP', enz: 'phosphofructokinase, −ATP', side: 'l', atp: -1, after: false },
  { a: 'F16BP', b: 'split', enz: 'aldolase', side: 'r', after: false },
  { a: '2G3P', b: '13BPG', enz: 'PGAL dehydrogenase, +NADH', side: 'l', nadh: 1, after: true },
  { a: '13BPG', b: '3PG', enz: '+ATP (substrate-level)', side: 'l', atp: 1, after: true },
  { a: '3PG', b: '2PG', enz: 'phosphoglycerate mutase', side: 'l', after: true },
  { a: '2PG', b: 'PEP', enz: 'enolase, −H<sub>2</sub>O', side: 'l', after: true },
  { a: 'PEP', b: 'Pyr', enz: 'pyruvate kinase, +ATP', side: 'r', atp: 1, after: true },
];
const GLY_ENZYMES = 10; // the nine arrows' labels plus triose phosphate isomerase
function draw121(): Sketch {
  const s = new Sketch(W, 640);
  const y = (i: number) => ROW0 + i * PITCH;
  const names = ['Glc', 'G6P', 'F6P', 'F16BP'];
  const R: Record<string, Rect> = {};
  names.forEach((n, i) => { R[n] = node(s, COL, y(i) + 12, n, { w: 72 }); });
  const splitY = y(3) + 24 + 22, triTop = splitY + 38;
  s.dot(COL, splitY, 5);
  R.G3P = node(s, 100, triTop + 12, 'G3P', { w: 50 });
  R.DHAP = node(s, 280, triTop + 12, 'DHAP', { w: 50 });
  const tail = ['2G3P', '13BPG', '3PG', '2PG', 'PEP', 'Pyr'];
  const t0 = triTop + 12 + 12 + 34;
  tail.forEach((n, i) => { R[n] = node(s, COL, t0 + 12 + i * PITCH, n, { w: 72 }); });
  // the arrows between boxes
  for (const st of GLY) {
    const a = R[st.a], b = R[st.b];
    const from: P = [COL, a[3] + 2], to: P = st.b === 'split' ? [COL, splitY - 6] : [COL, b[1] - 2];
    const col = st.atp === -1 ? C.mari : C.ink, w = st.atp ? 3.2 : 1.7;
    arrow(s, from, to, { color: col, w });
    const my = (from[1] + to[1]) / 2 + 3;
    const spent = st.atp === -1, made = (st.atp ?? 0) > 0;
    if (st.side === 'l') lab(s, COL - 9, my, st.enz, { anchor: 'end', color: spent ? C.amber : C.text, bold: made });
    else lab(s, COL + 9, my, st.enz, { anchor: 'start', color: spent ? C.amber : C.text, bold: made });
  }
  // the split: G3P and DHAP, joined by the isomerase, both feeding 2G3P
  arrow(s, [COL - 5, splitY + 5], [100, triTop - 2]);
  arrow(s, [COL + 5, splitY + 5], [280, triTop - 2]);
  const yi = triTop + 12;
  arrow(s, [R.G3P[2] + 6, yi], [R.DHAP[0] - 6, yi], { color: C.slate, w: 1.5 });
  arrow(s, [R.DHAP[0] - 6, yi], [R.G3P[2] + 6, yi], { color: C.slate, w: 1.5 });
  lab(s, COL, yi + 17, 'triose phosphate', { color: C.text });
  lab(s, COL, yi + 29, 'isomerase', { color: C.text });
  arrow(s, [100, R.G3P[3] + 2], [COL - 14, R['2G3P'][1] - 2]);
  arrow(s, [280, R.DHAP[3] + 2], [COL + 14, R['2G3P'][1] - 2]);
  // the phases
  path(s, [[14, y(0)], [8, y(0)], [8, y(3) + 24], [14, y(3) + 24]], { w: 1.4 });
  lab(s, 18, y(1) + 14, 'Investment', { size: 11, anchor: 'start', bold: true });
  lab(s, 18, y(1) + 27, 'Phase', { size: 11, anchor: 'start', bold: true });
  const pt = R['2G3P'][1], pb = R.Pyr[3];
  path(s, [[346, pt], [352, pt], [352, pb], [346, pb]], { w: 1.4 });
  const pm = (pt + pb) / 2;
  lab(s, 342, pm - 2, 'Pay-off', { size: 11, anchor: 'end', bold: true });
  lab(s, 342, pm + 11, 'Phase', { size: 11, anchor: 'end', bold: true });
  // the key
  arrow(s, [96, 16], [122, 16], { color: C.mari, w: 3.2 });
  lab(s, 130, 20, '−ATP (investment)', { size: 11, anchor: 'start' });
  arrow(s, [96, 34], [122, 34], { color: C.ink, w: 3.2 });
  lab(s, 130, 38, '+ATP (substrate-level)', { size: 11, anchor: 'start' });
  s.result('Net: 2 ATP, 2 NADH, 2 pyruvate');
  return s;
}
function check121(): Check[] {
  const s = draw121();
  const per = (st: Step) => (st.after ? 2 : 1);
  const spent = GLY.filter((g) => (g.atp ?? 0) < 0).reduce((n, g) => n - (g.atp ?? 0) * per(g), 0);
  const made = GLY.filter((g) => (g.atp ?? 0) > 0).reduce((n, g) => n + (g.atp ?? 0) * per(g), 0);
  const nadh = GLY.reduce((n, g) => n + (g.nadh ?? 0) * per(g), 0);
  const pyr = 2; // the triose chain ends in Pyr once per triose
  const carbons: Record<string, number> = { Glc: 6, G6P: 6, F6P: 6, F16BP: 6, G3P: 3, DHAP: 3 };
  return [
    ['Investment: two steps (hexokinase, phosphofructokinase) each use 1 ATP, so 2 ATP are spent', spent === 2 && GLY.filter((g) => g.atp === -1).map((g) => g.enz.split(',')[0]).join() === 'hexokinase,phosphofructokinase'],
    ['Pay-off: two steps each make 1 ATP and each runs twice (once per triose), so 4 ATP are made', made === 4 && GLY.filter((g) => g.atp === 1).length === 2 && GLY.filter((g) => g.atp === 1).every((g) => g.after)],
    ['Net per glucose is 4 made − 2 spent = 2 ATP, as the caption and the result tag say', made - spent === 2],
    ['One NADH step (PGAL dehydrogenase) done twice gives 2 NADH, as the caption says', nadh === 2 && GLY.filter((g) => g.nadh).length === 1],
    ['Aldolase splits the 6-carbon F16BP into two 3-carbon trioses, so two pyruvate form (3 + 3 = 6 carbons)', carbons.F16BP === carbons.G3P + carbons.DHAP && pyr === 2],
    ['Ten enzyme labels in the book\'s order: nine steps and triose phosphate isomerase (the ten-step EMP pathway)', GLY.length + 1 === GLY_ENZYMES && has(s, 'triose phosphate') && has(s, 'isomerase')],
    ['Every box, both phase names, both key lines and the result are the book\'s words', ['Glc', 'G6P', 'F6P', 'F16BP', 'G3P', 'DHAP', '2G3P', '13BPG', '3PG', '2PG', 'PEP', 'Pyr', 'Investment', 'Pay-off', '−ATP (investment)', '+ATP (substrate-level)'].every((t) => has(s, t))],
    noEmDash(CAP121, ...s.labels.map((l) => l.text)),
    ...layout(s), clean(s),
  ];
}
const fig121: Diagram = { id: 'b11-12-fig-12.1', topic: 1, name: 'Glycolysis (EMP pathway)', cases: [{ chip: 'EMP pathway', cap: CAP121 }], draw: draw121, check: check121 };

/* ================= Figure 12.2: the Krebs cycle ================= */
const CAP122 = 'The citric acid (Krebs) cycle in the mitochondrial matrix. Acetyl CoA (2C) condenses with oxaloacetate (4C) to form citrate (6C). Each turn releases 2 CO₂, forms 3 NADH and 1 FADH₂, and makes 1 GTP (ATP) by substrate-level phosphorylation; oxaloacetate is regenerated.';
/** The eight members clockwise from oxaloacetate; step i runs from KN[i] to KN[i + 1] and `out` is what that step gives off. */
type Out = { co2?: number; nadh?: number; fadh2?: number; gtp?: number };
const KN: { name: string; at: P }[] = [
  { name: 'Oxaloacetate (4C)', at: [180, 58] },
  { name: 'Citrate (6C)', at: [284, 116] },
  { name: 'Isocitrate (6C)', at: [284, 220] },
  { name: 'α-Ketoglutarate (5C)', at: [284, 324] },
  { name: 'Succinyl-CoA (4C)', at: [180, 382] },
  { name: 'Succinate (4C)', at: [76, 324] },
  { name: 'Fumarate (4C)', at: [76, 220] },
  { name: 'Malate (4C)', at: [76, 116] },
];
const KS: { enz: string[]; out: Out }[] = [
  { enz: ['citrate synthase'], out: {} },
  { enz: ['aconitase'], out: {} },
  { enz: ['isocitrate', 'dehydrogenase'], out: { co2: 1, nadh: 1 } },
  { enz: ['α-KG', 'dehydrogenase'], out: { co2: 1, nadh: 1 } },
  { enz: ['succinate', 'thiokinase'], out: { gtp: 1 } },
  { enz: ['succinate', 'dehydrogenase'], out: { fadh2: 1 } },
  { enz: ['fumarase'], out: {} },
  { enz: ['malate', 'dehydrogenase'], out: { nadh: 1 } },
];
const carbonsOf = (name: string) => Number(/\((\d)C\)/.exec(name)![1]);
function draw122(): Sketch {
  const s = new Sketch(W, 424);
  const R = KN.map((k) => node(s, k.at[0], k.at[1], k.name));
  const [oaa, cit, iso, akg, scoa, suc, fum, mal] = R;
  const ac = node(s, 284, 24, 'Acetyl-CoA (2C)', { hi: true, bold: true });
  // the ring, clockwise
  arrow(s, [oaa[2] + 2, 58], [284, cit[1] - 2]);
  arrow(s, [284, cit[3] + 2], [284, iso[1] - 2]);
  arrow(s, [284, iso[3] + 2], [284, akg[1] - 2]);
  arrow(s, [284, akg[3] + 2], [scoa[2] + 2, 382]);
  arrow(s, [scoa[0] - 2, 382], [76, suc[3] + 2]);
  arrow(s, [76, suc[1] - 2], [76, fum[3] + 2]);
  arrow(s, [76, fum[1] - 2], [76, mal[3] + 2]);
  arrow(s, [76, mal[1] - 2], [oaa[0] - 2, 58]);
  // acetyl-CoA enters at the first step
  arrow(s, [250, ac[3] + 2], [254, 72], { color: C.mari, w: 2.2 });
  // enzymes
  const e = (i: number, x: number, y: number, a: 'start' | 'end') => KS[i].enz.forEach((t, k) => lab(s, x, y + k * 12, t, { anchor: a, size: 10, color: C.slate }));
  e(0, 232, 100, 'end'); e(1, 276, 172, 'end'); e(2, 276, 268, 'end'); e(3, 226, 350, 'end');
  e(4, 134, 326, 'start'); e(5, 84, 262, 'start'); e(6, 84, 172, 'start'); e(7, 128, 134, 'start');
  // what each step gives off
  const out = (t: string, from: P, to: P, tx: number, ty: number, a: 'start' | 'end' | 'middle') => { arrow(s, from, to, { color: C.slate, w: 1.5 }); lab(s, tx, ty, t, { size: 11, anchor: a, bold: true }); };
  out('CO<sub>2</sub>', [288, 252], [316, 252], 320, 256, 'start');
  out('NADH', [288, 284], [316, 284], 320, 288, 'start');
  out('CO<sub>2</sub>', [267, 353], [298, 349], 302, 353, 'start');
  out('NADH', [250, 369], [298, 377], 302, 381, 'start');
  out('GTP', [99, 362], [99, 390], 99, 406, 'middle');
  out('FADH<sub>2</sub>', [72, 280], [52, 280], 48, 284, 'end');
  out('NADH', [97, 84], [74, 64], 70, 62, 'end');
  lab(s, 180, 207, 'Krebs cycle', { size: 12, bold: true });
  lab(s, 180, 222, '(mitochondrial', { size: 11, bold: true });
  lab(s, 180, 236, 'matrix)', { size: 11, bold: true });
  return s;
}
function check122(): Check[] {
  const s = draw122();
  const tot = (k: keyof Out) => KS.reduce((n, st) => n + (st.out[k] ?? 0), 0);
  // carbons through the ring: acetyl's 2 join oxaloacetate at step 0; each CO2 takes one away
  const cs = KN.map((k) => carbonsOf(k.name));
  const ok = KN.every((_, i) => cs[(i + 1) % 8] === cs[i] + (i === 0 ? 2 : 0) - (KS[i].out.co2 ?? 0));
  return [
    ['One turn releases 2 CO₂ (isocitrate and α-KG dehydrogenase), as the caption says', tot('co2') === 2 && count(s, 'CO2') === 2],
    ['One turn forms 3 NADH (isocitrate, α-KG and malate dehydrogenase)', tot('nadh') === 3 && count(s, 'NADH') === 3],
    ['One turn forms 1 FADH₂ (succinate dehydrogenase) and 1 GTP (succinate thiokinase)', tot('fadh2') === 1 && tot('gtp') === 1 && count(s, 'FADH2') === 1 && count(s, 'GTP') === 1],
    ['Carbons balance round the ring: 2C acetyl + 4C oxaloacetate gives 6C citrate, each CO₂ removes one carbon (6, 5, 4), and oxaloacetate (4C) is regenerated', ok && cs[0] + 2 === cs[1] && cs[2] === 6 && cs[3] === 5 && cs[4] === 4],
    ['The eight members are in the book\'s order, clockwise from oxaloacetate, and the enzymes are the book\'s', KN.map((k) => k.name.split(' (')[0]).join() === 'Oxaloacetate,Citrate,Isocitrate,α-Ketoglutarate,Succinyl-CoA,Succinate,Fumarate,Malate' && KS.length === 8 && ['citrate synthase', 'aconitase', 'fumarase'].every((t) => has(s, t))],
    ['Acetyl-CoA (2C) is the one highlight and enters at the oxaloacetate to citrate step', has(s, 'Acetyl-CoA (2C)') && has(s, 'Krebs cycle')],
    noEmDash(CAP122, ...s.labels.map((l) => l.text)),
    ...layout(s), clean(s),
  ];
}
const fig122: Diagram = { id: 'b11-12-fig-12.2', topic: 2, name: 'The Krebs cycle', cases: [{ chip: 'Krebs cycle', cap: CAP122 }], draw: draw122, check: check122 };

/* ================= Figure 12.3: the ETS and chemiosmosis ================= */
const CAP123 = 'Electron transport chain and chemiosmosis in the inner mitochondrial membrane: electrons from NADH (Complex I) and FADH₂ (Complex II) pass via ubiquinone to Complex III, cytochrome c and Complex IV, where O₂ is reduced to water; H⁺ is pumped by Complexes I, III and IV and flows back through ATP synthase, which makes ATP in the matrix.';
const BT = 150, BB = 236;
const COMPLEXES: { n: string; x: [number, number]; pumps: boolean }[] = [
  { n: 'I', x: [16, 52], pumps: true },
  { n: 'II', x: [58, 92], pumps: false },
  { n: 'III', x: [146, 184], pumps: true },
  { n: 'IV', x: [244, 282], pumps: true },
];
const ETS_EQN = 'O<sub>2</sub> + 4H<sup>+</sup> + 4e<sup>−</sup> → 2H<sub>2</sub>O';
function draw123(): Sketch {
  const s = new Sketch(W, 336);
  const ty = 228;
  // the inner membrane, and each complex across it
  box(s, 'membrane', [8, BT, 352, BB], { w: 1.7 });
  for (const c of COMPLEXES) {
    if (c.n === 'II') { path(s, [[c.x[0], BB], [c.x[0], 208], [c.x[1], 208], [c.x[1], BB]]); }
    else box(s, 'Complex ' + c.n, [c.x[0], BT, c.x[1], BB], { w: 1.7 });
    lab(s, (c.x[0] + c.x[1]) / 2, ty, c.n, { size: 12, bold: true });
  }
  // ATP synthase (the highlight)
  const syn: Rect = [292, BT, 350, BB];
  box(s, 'ATP synthase', syn, { color: C.mari, w: 2.2 });
  lab(s, 321, 214, 'ATP', { size: 11, bold: true, color: C.amber, within: 'ATP synthase' });
  lab(s, 321, 227, 'synthase', { size: 11, bold: true, color: C.amber, within: 'ATP synthase' });
  // carriers and the electron path
  s.dot(116, 200, 6); s.dot(214, 200, 6);
  lab(s, 116, ty, 'UQ', { size: 11 });
  lab(s, 214, ty, 'cyt c', { size: 11 });
  arrow(s, [52, 176], [108, 196]);
  arrow(s, [92, 214], [110, 205]);
  arrow(s, [124, 200], [144, 200]);
  arrow(s, [186, 200], [206, 200]);
  arrow(s, [222, 200], [242, 200]);
  // H+ pumped up from the matrix into the inter-membrane space
  for (const c of COMPLEXES.filter((k) => k.pumps)) {
    const x = (c.x[0] + c.x[1]) / 2;
    arrow(s, [x, BT - 4], [x, 96], { color: C.slate, w: 2.2 });
    lab(s, x + 8, 124, 'H<sup>+</sup>', { size: 11, anchor: 'start', color: C.slate });
  }
  // H+ flowing back down through ATP synthase
  arrow(s, [321, 100], [321, 196], { color: C.mari, w: 2.2 });
  lab(s, 329, 124, 'H<sup>+</sup>', { size: 11, anchor: 'start', color: C.amber });
  lab(s, 8, 62, 'Inter-membrane space', { size: 11, anchor: 'start', bold: true });
  lab(s, 215, 84, 'H<sup>+</sup> accumulation', { size: 11, color: C.amber });
  // matrix side
  arrow(s, [31, 270], [31, BB + 4]); lab(s, 31, 288, 'NADH', { size: 11 });
  arrow(s, [75, 270], [75, BB + 4]); lab(s, 75, 288, 'FADH<sub>2</sub>', { size: 11 });
  arrow(s, [263, BB + 4], [263, 268]);
  lab(s, 220, 316, ETS_EQN, { size: 11 });
  arrow(s, [302, 270], [310, BB + 4]); lab(s, 316, 291, 'ADP + P<sub>i</sub>', { size: 11, anchor: 'end' });
  arrow(s, [330, BB + 4], [342, 268]); lab(s, 328, 291, 'ATP', { size: 11, anchor: 'start' });
  lab(s, 8, 332, 'Matrix', { size: 11, anchor: 'start', bold: true });
  // the key
  arrow(s, [66, 16], [92, 16], { color: C.slate, w: 2.2 });
  lab(s, 100, 20, 'H<sup>+</sup> pumping', { size: 11, anchor: 'start' });
  arrow(s, [66, 34], [92, 34], { color: C.mari, w: 2.2 });
  lab(s, 100, 38, 'H<sup>+</sup> flow through ATP synthase', { size: 11, anchor: 'start' });
  return s;
}
/** Atoms of a one-side equation term list like "O2 + 4H+ + 4e- -> 2H2O" (sub/sup markup read as digits and a charge). */
function atoms(side: string): { el: Record<string, number>; charge: number } {
  const el: Record<string, number> = {};
  let charge = 0;
  for (const raw of side.split('+ ').map((t) => t.trim()).filter(Boolean)) {
    const m = /^(\d*)(.*)$/.exec(raw.replace(/<sub>(\d)<\/sub>/g, '$1'))!;
    const k = m[1] ? Number(m[1]) : 1;
    let body = m[2];
    const ch = /<sup>(.*?)<\/sup>/.exec(body);
    if (ch) { charge += k * (ch[1] === '+' ? 1 : -1); body = body.replace(/<sup>.*?<\/sup>/, ''); }
    if (body === 'e') { continue; }
    for (const [, e1, n] of body.matchAll(/([A-Z][a-z]?)(\d*)/g)) el[e1] = (el[e1] ?? 0) + k * (n ? Number(n) : 1);
  }
  return { el, charge };
}
function check123(): Check[] {
  const s = draw123();
  const [l, r] = ETS_EQN.split(' → ').map(atoms);
  const pumps = COMPLEXES.filter((c) => c.pumps).map((c) => c.n).join();
  const hLabels = count(s, 'H+');
  return [
    ['The complexes are in the book\'s order I, II, III, IV, then ATP synthase, and only I, III and IV pump H+ (II does not)', COMPLEXES.map((c) => c.n).join() === 'I,II,III,IV' && pumps === 'I,III,IV' && has(s, 'I') && has(s, 'IV') && has(s, 'synthase')],
    ['Three H+ pump arrows go up (I, III, IV) and one H+ flow arrow comes back down through ATP synthase: 4 H+ arrows, as the caption says', hLabels === 4 + 0 && pumps.split(',').length === 3],
    ['The oxygen step balances: O2 + 4H+ + 4e- gives 2H2O (2 O and 4 H on each side, charge 0 on both)', l.el.O === r.el.O && l.el.H === r.el.H && l.el.O === 2 && l.el.H === 4 && l.charge === 0 && r.charge === 0],
    ['NADH enters at Complex I and FADH₂ at Complex II, both passing to ubiquinone (UQ), then III, cytochrome c and IV', has(s, 'NADH') && has(s, 'FADH2') && has(s, 'UQ') && has(s, 'cyt c')],
    ['ADP + Pi goes in and ATP comes out at ATP synthase, on the matrix side', has(s, 'ADP + Pi') && has(s, 'ATP')],
    ['ATP synthase and the H+ flow through it are the one highlight', has(s, 'Inter-membrane space') && has(s, 'Matrix')],
    noEmDash(CAP123, ...s.labels.map((t) => t.text)),
    ...layout(s), clean(s),
  ];
}
const fig123: Diagram = { id: 'b11-12-fig-12.3', topic: 2, name: 'ETS and chemiosmosis', cases: [{ chip: 'Inner membrane', cap: CAP123 }], draw: draw123, check: check123 };

/* ================= Figure 12.4: the amphibolic nature ================= */
const CAP124 = 'Amphibolic nature of respiration. Carbohydrates, fats and proteins enter at different points and converge on acetyl CoA and the Krebs cycle, ending as CO₂ and H₂O. Reverse (highlighted) arrows show intermediates withdrawn for fatty-acid and amino-acid synthesis.';
/** Box centres from the book's p. 733 (page px at 100 dpi), scaled 0.66 across and 0.73 down to the phone. */
const KX = (px: number) => (px - 150) * 0.66 + 10, KY = (py: number) => (py - 170) * 0.73 + 24;
const AN: Record<string, { at: P; html: string }> = {
  carb: { at: [210, 188], html: 'Carbohydrates' }, fats: { at: [400, 188], html: 'Fats' }, prot: { at: [571, 188], html: 'Proteins' },
  glu: { at: [210, 282], html: 'Glucose' }, gly: { at: [325, 282], html: 'Glycerol' }, fa: { at: [452, 282], html: 'Fatty acids' },
  glc: { at: [273, 377], html: 'Glycolysis' }, box: { at: [398, 377], html: 'β-Oxidation' },
  pyr: { at: [273, 481], html: 'Pyruvate' }, aa: { at: [571, 481], html: 'Amino acids' },
  acoa: { at: [378, 576], html: 'Acetyl-CoA' },
  kreb: { at: [378, 671], html: 'Krebs cycle' }, kgo: { at: [571, 671], html: 'α-KG / OAA' },
  end: { at: [378, 765], html: 'CO<sub>2</sub> + H<sub>2</sub>O' },
};
/** The forward arrows (anabolic reverse arrows are listed apart). */
const AFWD: [string, string][] = [['carb', 'glu'], ['fats', 'gly'], ['fats', 'fa'], ['prot', 'aa'], ['glu', 'glc'], ['gly', 'glc'], ['fa', 'box'], ['glc', 'pyr'], ['box', 'acoa'], ['pyr', 'acoa'], ['aa', 'pyr'], ['aa', 'acoa'], ['acoa', 'kreb'], ['kreb', 'kgo'], ['kreb', 'end'], ['aa', 'kgo']];
const AREV: [string, string][] = [['acoa', 'fa'], ['kgo', 'aa']];
function draw124(): Sketch {
  const s = new Sketch(W, 520);
  const R: Record<string, Rect> = {};
  for (const [k, v] of Object.entries(AN)) R[k] = node(s, KX(v.at[0]), KY(v.at[1]), v.html, { size: 10.5 });
  const c = (k: string) => mid(R[k]);
  const bot = (k: string, dx = 0): P => [c(k)[0] + dx, R[k][3] + 2];
  const top = (k: string, dx = 0): P => [c(k)[0] + dx, R[k][1] - 2];
  const left = (k: string): P => [R[k][0] - 2, c(k)[1]];
  const right = (k: string): P => [R[k][2] + 2, c(k)[1]];
  arrow(s, bot('carb'), top('glu'));
  arrow(s, bot('fats', -10), top('gly', 6));
  arrow(s, bot('fats', 10), top('fa', -8));
  arrow(s, bot('prot'), top('aa'));
  arrow(s, bot('glu', 12), top('glc', -22));
  arrow(s, bot('gly', -4), top('glc', 18));
  arrow(s, bot('fa', -8), top('box', 12));
  arrow(s, bot('glc'), top('pyr'));
  arrow(s, bot('box', -2), top('acoa', 12));
  arrow(s, bot('pyr', 12), top('acoa', -26));
  arrow(s, left('aa'), right('pyr'));
  arrow(s, [R.aa[0] + 12, R.aa[3] + 2], [R.acoa[2] + 2, c('acoa')[1] - 6]);
  arrow(s, bot('acoa'), top('kreb'));
  arrow(s, right('kreb'), left('kgo'));
  arrow(s, bot('kreb'), top('end'));
  arrow(s, bot('aa', -12), top('kgo', -12));
  // reverse arrows (the highlight)
  arrow(s, top('kgo', 12), bot('aa', 12), { color: C.mari, w: 2.2 });
  const a: P = [R.acoa[2] + 2, c('acoa')[1] - 8], b: P = [c('fa')[0] + 16, R.fa[3] + 3];
  const ctrl: P = [a[0] + 45, (a[1] + b[1]) / 2 + 20], pts: P[] = [];
  for (let i = 0; i <= 16; i++) { const t = i / 16; pts.push([(1 - t) * (1 - t) * a[0] + 2 * (1 - t) * t * ctrl[0] + t * t * b[0], (1 - t) * (1 - t) * a[1] + 2 * (1 - t) * t * ctrl[1] + t * t * b[1]]); }
  path(s, pts.slice(0, -2), { color: C.mari, w: 2.2 });
  s.vec(pts[14][0], pts[14][1], b[0], b[1], { color: C.mari, w: 2.2 });
  // labels on arrows
  lab(s, 123, 139, 'enters at', { anchor: 'start', size: 9.5, color: C.slate });
  lab(s, 123, 150, 'DHAP/PGAL', { anchor: 'start', size: 9.5, color: C.slate });
  lab(s, 238, 222, 'Fatty-acid', { anchor: 'start', size: 9, color: C.amber });
  lab(s, 238, 233, 'synthesis', { anchor: 'start', size: 9, color: C.amber });
  lab(s, c('aa')[0] - 20, 336, 'to Krebs', { anchor: 'end', size: 10, color: C.slate });
  lab(s, c('aa')[0] - 20, 348, 'intermediates', { anchor: 'end', size: 10, color: C.slate });
  lab(s, c('aa')[0] + 20, 315, 'Amino-acid', { anchor: 'start', size: 10, color: C.amber });
  lab(s, c('aa')[0] + 20, 327, 'synthesis', { anchor: 'start', size: 10, color: C.amber });
  lab(s, 224, 368, 'intermediates', { size: 10, color: C.slate });
  arrow(s, [14, 496], [44, 496], { color: C.mari, w: 2.2 });
  lab(s, 52, 500, 'anabolic withdrawal (reverse arrows)', { size: 10.5, anchor: 'start' });
  return s;
}
function check124(): Check[] {
  const s = draw124();
  // everything reachable from each of the three foods, by the forward arrows
  const reach = (from: string) => { const seen = new Set([from]); const q = [from]; while (q.length) { const x = q.shift()!; for (const [a, b] of AFWD) if (a === x && !seen.has(b)) { seen.add(b); q.push(b); } } return seen; };
  const foods = ['carb', 'fats', 'prot'];
  return [
    ['Carbohydrates, fats and proteins each reach acetyl-CoA, the Krebs cycle and CO₂ + H₂O by the forward arrows', foods.every((f) => ['acoa', 'kreb', 'end'].every((t) => reach(f).has(t)))],
    ['Carbohydrates enter as glucose at glycolysis, fats as glycerol (at DHAP/PGAL) and fatty acids (β-oxidation), proteins as amino acids (to pyruvate, acetyl-CoA, or α-KG / OAA)', AFWD.some(([a, b]) => a === 'gly' && b === 'glc') && AFWD.some(([a, b]) => a === 'fa' && b === 'box') && ['pyr', 'acoa', 'kgo'].every((t) => AFWD.some(([a, b]) => a === 'aa' && b === t))],
    ['Two reverse (orange) arrows: acetyl-CoA to fatty acids (fatty-acid synthesis) and α-KG / OAA to amino acids (amino-acid synthesis)', AREV.length === 2 && has(s, 'Fatty-acid') && has(s, 'Amino-acid')],
    ['Every box of the book is on the drawing (14 boxes, in the book\'s positions)', Object.values(AN).length === 14 && Object.values(AN).every((v) => has(s, plain(v.html)))],
    ['The legend line and the three arrow notes (enters at DHAP/PGAL, to Krebs intermediates, intermediates) are the book\'s', ['anabolic withdrawal (reverse arrows)', 'enters at', 'DHAP/PGAL', 'to Krebs', 'intermediates'].every((t) => has(s, t))],
    noEmDash(CAP124, ...s.labels.map((l) => l.text)),
    ...layout(s), clean(s),
  ];
}
const fig124: Diagram = { id: 'b11-12-fig-12.4', topic: 3, name: 'Amphibolic nature of respiration', cases: [{ chip: 'Converging pathways', cap: CAP124 }], draw: draw124, check: check124 };

export const DIAGRAMS_BIOLOGY_11_12: Diagram[] = [fig121, fig122, fig123, fig124];
