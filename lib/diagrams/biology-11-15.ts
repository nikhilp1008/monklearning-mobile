import { C, LABEL_GAP, Rect, Sketch, audit, mathW, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * BIOLOGY CLASS 11, CHAPTER 15 (Body Fluids and Circulation): the drawings of the Master Reference book on pp. 886-942, redrawn.
 * Every page of the range was counted (pdfimages -list finds no raster image on any page; the shapes were counted on the page
 * images). The figures sit on their own "CHAPTER 15 . FIGURES" plate pages: pp. 890, 892, 894, 900, 902, 907 and 910 (the
 * captions are printed earlier, on pp. 889, 891, 893, 899, 901, 906 and 909, each ending "(see next page)", which is dropped).
 * The other pages hold text and tables only; the lineage and cascade lines of Additional topics B and C (pp. 919, 921) are
 * typeset text with arrows, not drawings. SEVEN drawings:
 *
 *   Figure 15.1 (drawing p. 890), Topic 01, topic index 0: centrifuged blood.
 *   Figure 15.2 (drawing p. 892), Topic 01, topic index 0: the coagulation flow chart.
 *   Figure 15.3 (drawing p. 894), Topic 01, topic index 0: ABO compatibility wheel.
 *   Figure 15.4 (drawing p. 900), Topic 02, topic index 1: the heart in frontal section (three cases: vessels, valves, nodal pathway).
 *   Figure 15.5 (drawing p. 902), Topic 02, topic index 1: double circulation.
 *   Figure 15.6 (drawing p. 907), Topic 03, topic index 2: a normal ECG.
 *   Figure 15.7 (drawing p. 910), Topic 03, topic index 2: healthy (a) and atherosclerotic (b) coronary artery (two cases).
 *
 * THE BOOK'S, as printed: every word of every label, box and note; in 15.1 the shares (plasma ~55 %, buffy coat < 1 %, RBC ~45 %)
 * and their order; in 15.2 the eight boxes, their order, the dashed "acts as enzyme (+ Ca2+)" arrow from prothrombinase to the
 * prothrombin step, HEPARIN (inhibits) on that step, and "Clot retraction", "Fibrinolysis" after the clot; in 15.3 the antigens
 * and antibodies of each group (A: Ag A, Ab anti-B; B: Ag B, Ab anti-A; AB: Ag A, B, Ab none; O: Ag none, Ab anti-A and anti-B)
 * and the five donor arrows (O to A, B and AB; A to AB; B to AB); in 15.4 the structures, their names, the four valves and the
 * nodal path (SA node, AV node, bundle of His, Purkinje fibres) in the book's relative positions, the book's own geometry scaled
 * (RA, RV with the venae cavae and pulmonary artery on the deoxygenated side, LA, LV with the aorta and pulmonary veins on the
 * oxygenated side); in 15.5 the six boxes and six arrows and both circuit captions; in 15.6 the axes (-1.0 to 1.5 mV, 0.0 to 0.8 s),
 * the P wave (0.15 mV near 0.12 s), the QRS complex (R = 1.0 mV near 0.24 s, Q about -0.1, S about -0.25), the T wave (0.25 mV
 * near 0.47 s), the PR interval bracket (0.05 to 0.20 s, labelled ~0.12-0.2 s) and the 0.8 s cycle arrow; in 15.7 the nested
 * layers, the lipid core under the fibrous cap, the three Ca2+ deposits and the lumen about 0.75 of the wall radius in (a) and
 * about 0.31 in (b), as the plate draws them.
 * EXCEPTION (one label added): Figure 15.4 draws the pulmonary valve without a label (a small oval at the base of the pulmonary
 * artery); here it is labelled "Pulmonary valve", as the brief directs. The "~0.12-0.2 s" of Figure 15.6 is set with an en dash.
 * SCHEMATIC: all sizes and positions (re-laid for a phone, so the heart is split into three cases, the circulation is compacted,
 * the wheel's arcs and the coagulation chart are re-routed), the curve between the ECG's named points (a smooth trace through the
 * book's values), the breadth of the plaque layers, the radii of the arcs, the dash standing for "deoxygenated" and the solid line
 * for "oxygenated" (the book colours them blue and red; the app draws no fills and uses marigold once per drawing, so the colour of
 * the book is replaced by dashed against solid, and each legend says so), and the leader angles.
 */

const W = 360;
type P = [number, number];
const plain = (html: string) => html.replace(/<[^>]+>/g, '');
const wOf = (html: string, size: number) => Math.max(mathW(html, size), plain(html).length * size * 0.5);

/* ---------- helpers ---------- */
const LINES = new WeakMap<Sketch, P[][]>();
const BOXES = new WeakMap<Sketch, { name: string; rect: Rect; inner: Rect[] }[]>();
const keep = (s: Sketch, pts: P[]) => LINES.set(s, [...(LINES.get(s) ?? []), pts]);
function path(s: Sketch, pts: P[], o: { color?: string; w?: number; close?: boolean; dash?: string; track?: boolean } = {}) {
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ') + (o.close ? ' Z' : '');
  s.add(`<path d="${d}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}" stroke-linejoin="round" stroke-linecap="round"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}/>`);
  if (o.track !== false) keep(s, o.close ? [...pts, pts[0]] : pts);
}
function ell(s: Sketch, cx: number, cy: number, rx: number, ry: number, o: { color?: string; w?: number; dash?: string } = {}) {
  s.add(`<ellipse cx="${r1(cx)}" cy="${r1(cy)}" rx="${r1(rx)}" ry="${r1(ry)}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}/>`);
  keep(s, Array.from({ length: 49 }, (_, i): P => [cx + rx * Math.cos((i / 48) * 2 * Math.PI), cy + ry * Math.sin((i / 48) * 2 * Math.PI)]));
}
function box(s: Sketch, name: string, r: Rect, o: { color?: string; w?: number; dash?: string; rx?: number } = {}) {
  s.add(`<rect x="${r1(r[0])}" y="${r1(r[1])}" width="${r1(r[2] - r[0])}" height="${r1(r[3] - r[1])}" rx="${o.rx ?? 7}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}/>`);
  keep(s, [[r[0], r[1]], [r[2], r[1]], [r[2], r[3]], [r[0], r[3]], [r[0], r[1]]]);
  BOXES.set(s, [...(BOXES.get(s) ?? []), { name, rect: r, inner: [] }]);
}
/** A line of STIX on the drawing from its baseline; its box at its width. Optionally inside a named box. */
function lab(s: Sketch, x: number, y: number, html: string, o: { size?: number; anchor?: 'start' | 'middle' | 'end'; color?: string; bold?: boolean; within?: string } = {}): Rect {
  const size = o.size ?? 12, anchor = o.anchor ?? 'middle', w = wOf(html, size) * (o.bold ? 1.08 : 1);
  const x0 = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w : x;
  const rect: Rect = [x0, y - size * 0.72, x0 + w, y + size * 0.22];
  s.labels.push({ text: plain(html), rect });
  s.text(x, y, html, { size, anchor, color: o.color ?? C.text, semibold: o.bold });
  if (o.within) BOXES.get(s)!.find((b) => b.name === o.within)!.inner.push(rect);
  return rect;
}
/** A grey leader from a label to a point it names, ending in a dot (a tag's own look, for names that need STIX). */
function leader(s: Sketch, from: P, to: P, hi = false) {
  s.add(`<line x1="${r1(from[0])}" y1="${r1(from[1])}" x2="${r1(to[0])}" y2="${r1(to[1])}" stroke="${hi ? C.mari : C.grey}" stroke-width="1.2"/><circle cx="${r1(to[0])}" cy="${r1(to[1])}" r="2.6" fill="${hi ? C.mari : C.ink}"/>`);
  keep(s, [from, to]);
}
/** A filled arrow head with its tip at `tip`, pointing along `ang` (radians). */
function head(s: Sketch, tip: P, ang: number, col: string = C.ink, L = 9, hw = 4.5) {
  const bx = tip[0] - L * Math.cos(ang), by = tip[1] - L * Math.sin(ang);
  s.add(`<path d="M${r1(tip[0])} ${r1(tip[1])} L${r1(bx + hw * Math.sin(ang))} ${r1(by - hw * Math.cos(ang))} L${r1(bx - hw * Math.sin(ang))} ${r1(by + hw * Math.cos(ang))} Z" fill="${col}"/>`);
}
/** A line with a head at its end; the line is registered so labels keep clear of it. */
function arrow(s: Sketch, a: P, b: P, o: { color?: string; w?: number; dash?: string } = {}) {
  const col = o.color ?? C.ink, ang = Math.atan2(b[1] - a[1], b[0] - a[0]);
  path(s, [a, [b[0] - 8 * Math.cos(ang), b[1] - 8 * Math.sin(ang)]], { color: col, w: o.w ?? 1.8, dash: o.dash });
  head(s, b, ang, col);
}
const rad = (d: number) => (d * Math.PI) / 180;
const arcPts = (cx: number, cy: number, r: number, a0: number, a1: number, n = 48): P[] => Array.from({ length: n + 1 }, (_, i): P => { const a = rad(a0 + ((a1 - a0) * i) / n); return [cx + r * Math.cos(a), cy + r * Math.sin(a)]; });
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
/** Every drawn label keeps LABEL_GAP clear of every drawn outline, lies in the frame, touches no other label, and sits inside its box; tags keep off the outlines too. */
function layout(s: Sketch): Check[] {
  let gap = Infinity, what = '';
  for (const l of s.labels) for (const pts of LINES.get(s) ?? []) { const d = gapTo(l.rect, pts); if (d < gap) { gap = d; what = l.text; } }
  let tgap = Infinity, twhat = '';
  for (const t of s.tags) for (const pts of LINES.get(s) ?? []) { const d = gapTo(t.rect, pts); if (d < tgap) { tgap = d; twhat = t.name; } }
  const out = s.labels.filter((l) => l.rect[0] < 0 || l.rect[2] > s.w || l.rect[1] < 0 || l.rect[3] > s.h).map((l) => l.text);
  const L = s.labels;
  const touch = L.flatMap((a, i) => L.slice(i + 1).filter((b) => !(a.rect[2] + 2 <= b.rect[0] || b.rect[2] + 2 <= a.rect[0] || a.rect[3] + 2 <= b.rect[1] || b.rect[3] + 2 <= a.rect[1])).map((b) => `${a.text} / ${b.text}`));
  const spill = (BOXES.get(s) ?? []).flatMap((b) => b.inner.filter((r) => r[0] < b.rect[0] + 4 || r[2] > b.rect[2] - 4 || r[1] < b.rect[1] + 4 || r[3] > b.rect[3] - 4).map(() => b.name));
  return [
    [`Every label stays ${LABEL_GAP} px clear of every drawn line: the closest is "${what}", ${r1(gap)} px`, gap >= LABEL_GAP],
    [`Every tag stays 3 px clear of every drawn outline: the closest is "${twhat}", ${r1(tgap)} px`, tgap >= 3],
    [`Every label lies inside the frame${out.length ? `: not ${out.join(', ')}` : ''}`, out.length === 0],
    [`No two labels touch${touch.length ? `: ${touch.join(', ')}` : ''}`, touch.length === 0],
    [`Every label lies inside its box${spill.length ? `: not in ${spill.join(', ')}` : ''}`, spill.length === 0],
  ];
}
const has = (s: Sketch, t: string) => s.labels.some((l) => l.text === t);
const tagged = (s: Sketch, t: string) => s.tags.some((g) => g.name === t);
const count = (s: Sketch, re: RegExp) => (s.svg().match(re) ?? []).length;
const clean = (s: Sketch): Check => { const a = audit(s); return [`Layout audit is clear${a.length ? `: ${a.join('; ')}` : ''}`, a.length === 0 && s.unplaced.length === 0]; };
const MARI = /stroke="#EEA31F"/g;
const HEAD_INK = /<path d="M[^"]*Z" fill="#2E2A24"\/>/g;
const sub2 = 'O<sub>2</sub>', co2 = 'CO<sub>2</sub>';
/** The legend of the two blood states: a dashed swatch for deoxygenated, a solid one for oxygenated. */
function legend(s: Sketch, y: number) {
  const x0 = 70;
  s.add(`<rect x="${x0}" y="${y - 10}" width="18" height="12" rx="3" fill="none" stroke="${C.ink}" stroke-width="1.5" stroke-dasharray="4 2.5"/>`);
  lab(s, x0 + 25, y, 'Deoxygenated', { size: 11, anchor: 'start' });
  s.add(`<rect x="${x0 + 128}" y="${y - 10}" width="18" height="12" rx="3" fill="none" stroke="${C.ink}" stroke-width="1.5"/>`);
  lab(s, x0 + 153, y, 'Oxygenated', { size: 11, anchor: 'start' });
}
const DASH = '5 3';

/* ================= Figure 15.1 ================= */
const CAP151 = 'Centrifuged blood: plasma (~55%), a thin buffy coat of WBCs and platelets (<1%), and packed RBCs (~45%).';
const TUBE: Rect = [40, 20, 140, 352];
const COL = { x0: 54, x1: 126, top: 46, bot: 334 };
const SHARE = { plasma: 55, buffy: 0.9, rbc: 44.1 };
const yPlasma = COL.top + ((COL.bot - COL.top) * SHARE.plasma) / 100;
const yBuffy = yPlasma + ((COL.bot - COL.top) * SHARE.buffy) / 100;
function draw151(): Sketch {
  const s = new Sketch(W, 392);
  box(s, 'tube', TUBE, { rx: 16, w: 2 });
  // the column: surface, walls, the two interfaces and the floor
  path(s, Array.from({ length: 19 }, (_, i): P => [COL.x0 + ((COL.x1 - COL.x0) * i) / 18, COL.top - 3 * Math.sin((Math.PI * i) / 18)]), { color: C.slate, w: 1.5 });
  path(s, [[COL.x0, COL.top], [COL.x0, COL.bot], [COL.x1, COL.bot], [COL.x1, COL.top]], { color: C.ink, w: 1.5 });
  path(s, [[COL.x0, yPlasma], [COL.x1, yPlasma]], { color: C.ink, w: 1.4 });
  path(s, [[COL.x0, (yPlasma + yBuffy) / 2], [COL.x1, (yPlasma + yBuffy) / 2]], { color: C.mari, w: 3 });
  path(s, [[COL.x0, yBuffy], [COL.x1, yBuffy]], { color: C.ink, w: 1.4 });
  // packed red cells: fine hatching
  for (let c = COL.x0 + yBuffy + 10; c < COL.x1 + COL.bot - 4; c += 11) {
    const xa = Math.max(COL.x0, c - COL.bot), xb = Math.min(COL.x1, c - yBuffy - 3);
    if (xb > xa) path(s, [[xa, c - xa], [xb, c - xb]], { color: C.grey, w: 1, track: false });
  }
  const yb = (yPlasma + yBuffy) / 2, yr = (yBuffy + COL.bot) / 2, yp = (COL.top + yPlasma) / 2;
  lab(s, 176, yp - 6, 'Plasma', { size: 13, anchor: 'start', bold: true });
  lab(s, 176, yp + 10, '(~55%)', { size: 12, anchor: 'start', color: C.slate });
  leader(s, [168, yp], [96, yp]);
  ['Buffy coat', '(WBCs + platelets', '<1%)'].forEach((t, i) => lab(s, 176, yb - 17 + i * 13.5, t, { size: i ? 11.5 : 13, anchor: 'start', bold: i === 0, color: C.amber }));
  leader(s, [168, yb], [96, yb], true);
  lab(s, 176, yr - 6, 'RBC column', { size: 13, anchor: 'start', bold: true });
  lab(s, 176, yr + 10, '(~45%)', { size: 12, anchor: 'start', color: C.slate });
  leader(s, [168, yr], [96, yr]);
  lab(s, 90, 376, '<i>After centrifugation</i>', { size: 12, color: C.slate });
  return s;
}
function check151(): Check[] {
  const s = draw151(), H = COL.bot - COL.top;
  const pl = (yPlasma - COL.top) / H, bf = (yBuffy - yPlasma) / H, rb = (COL.bot - yBuffy) / H;
  return [
    ['The three layers run top to bottom in the book\'s order: plasma, buffy coat, packed RBCs', COL.top < yPlasma && yPlasma < yBuffy && yBuffy < COL.bot],
    ['Plasma is drawn at 55 % of the column, the RBC column at about 45 %, and the buffy coat under 1 %', Math.abs(pl - 0.55) < 0.005 && Math.abs(rb - 0.45) < 0.012 && bf < 0.01 && bf > 0 && Math.abs(pl + bf + rb - 1) < 1e-9 && SHARE.plasma + SHARE.buffy + SHARE.rbc === 100],
    ['The book\'s words are on the drawing: Plasma (~55%), Buffy coat (WBCs + platelets <1%), RBC column (~45%), After centrifugation', ['Plasma', '(~55%)', 'Buffy coat', '(WBCs + platelets', '<1%)', 'RBC column', '(~45%)', 'After centrifugation'].every((t) => has(s, t))],
    ['The buffy coat (the thin layer of WBCs and platelets) is the one marigold highlight', count(s, MARI) === 2],
    ...layout(s), clean(s),
  ];
}
const fig151: Diagram = { id: 'b11-15-fig-15.1', topic: 0, name: 'Centrifuged blood', cases: [{ chip: 'Three layers', cap: CAP151 }], draw: draw151, check: check151 };

/* ================= Figure 15.2 ================= */
const CAP152 = 'Flowchart of blood coagulation: injury, vascular spasm and platelet plug lead to prothrombinase, which converts prothrombin to thrombin (heparin inhibits this step); thrombin converts fibrinogen to fibrin and the clot forms. Thrombin is the enzyme that converts fibrinogen to fibrin; it is not itself changed into fibrinogen.';
type Step = { id: string; lines: string[]; r: Rect; hi?: boolean };
const LC: [number, number] = [10, 160], RC: [number, number] = [200, 350];
const mk = (id: string, lines: string[], col: [number, number], y0: number, y1: number, hi = false): Step => ({ id, lines, r: [col[0], y0, col[1], y1], hi });
const STEPS152: Step[] = [
  mk('Injury', ['Injury'], LC, 14, 50),
  mk('Vascular Spasm', ['Vascular Spasm'], LC, 72, 108),
  mk('Platelet plug', ['Platelet plug', 'PF-3 + thromboplastin', '+ Ca<sup>2+</sup>'], LC, 130, 192),
  mk('Prothrombinase', ['Prothrombinase', '(formed)'], LC, 214, 262, true),
  mk('Prothrombin', ['Prothrombin'], RC, 14, 50),
  mk('Thrombin', ['Thrombin'], RC, 150, 186),
  mk('Fibrinogen', ['Fibrinogen'], RC, 208, 244),
  mk('Fibrin mesh', ['Fibrin mesh', '→ Clot'], RC, 266, 314),
];
const CHAIN1 = ['Injury', 'Vascular Spasm', 'Platelet plug', 'Prothrombinase'], CHAIN2 = ['Prothrombin', 'Thrombin', 'Fibrinogen', 'Fibrin mesh'];
const stepOf = (id: string) => STEPS152.find((t) => t.id === id)!;
const midX = (r: Rect) => (r[0] + r[2]) / 2;
const ARROW_X = midX(stepOf('Thrombin').r), DASH_Y = 96, HEP_Y = 128;
function draw152(): Sketch {
  const s = new Sketch(W, 366);
  STEPS152.forEach((t) => {
    box(s, t.id, t.r, t.hi ? { color: C.mari, w: 2.2 } : {});
    const mid = (t.r[1] + t.r[3]) / 2, n = t.lines.length;
    t.lines.forEach((l, i) => lab(s, midX(t.r), mid + 4 + (i - (n - 1) / 2) * 15, l, { size: 12, color: t.hi ? C.amber : C.text, within: t.id }));
  });
  [CHAIN1, CHAIN2].forEach((ch) => ch.slice(0, -1).forEach((a, i) => {
    const A = stepOf(a).r, B = stepOf(ch[i + 1]).r, x = midX(A);
    arrow(s, [x, A[3] + 2], [x, B[1] - 2]);
  }));
  // prothrombinase acts as an enzyme on the prothrombin step (dashed), and heparin inhibits that step
  const P4 = stepOf('Prothrombinase').r;
  path(s, [[P4[2], (P4[1] + P4[3]) / 2], [180, (P4[1] + P4[3]) / 2], [180, DASH_Y]], { color: C.ink, w: 1.6, dash: '4 3' });
  arrow(s, [180, DASH_Y], [ARROW_X - 3, DASH_Y], { color: C.ink, w: 1.6, dash: '4 3' });
  lab(s, 224, 70, '<i>acts as enzyme</i>', { size: 10.5, color: C.slate });
  lab(s, 224, 83, '<i>(+ Ca<sup>2+</sup>)</i>', { size: 10.5, color: C.slate });
  path(s, [[ARROW_X - 12, HEP_Y], [ARROW_X + 12, HEP_Y]], { color: C.ink, w: 2.6 });
  lab(s, ARROW_X + 19, HEP_Y - 2, 'HEPARIN', { size: 10.5, anchor: 'start', bold: true });
  lab(s, ARROW_X + 19, HEP_Y + 11, '(inhibits)', { size: 10.5, anchor: 'start', bold: true });
  const F = stepOf('Fibrin mesh').r;
  lab(s, midX(F), F[3] + 17, '→ Clot retraction', { size: 11, color: C.slate });
  lab(s, midX(F), F[3] + 31, '→ Fibrinolysis', { size: 11, color: C.slate });
  return s;
}
function check152(): Check[] {
  const s = draw152();
  const P4 = stepOf('Prothrombinase').r, T = stepOf('Prothrombin').r, B = stepOf('Thrombin').r;
  const down = (ch: string[]) => ch.every((id, i) => i === 0 || stepOf(id).r[1] > stepOf(ch[i - 1]).r[3]);
  return [
    ['The first chain runs Injury, Vascular Spasm, Platelet plug (PF-3 + thromboplastin + Ca2+), Prothrombinase (formed), each box below the last', down(CHAIN1) && CHAIN1.join() === 'Injury,Vascular Spasm,Platelet plug,Prothrombinase' && ['Injury', 'Vascular Spasm', 'Platelet plug', 'PF-3 + thromboplastin', 'Prothrombinase', '(formed)'].every((t) => has(s, t))],
    ['The second chain runs Prothrombin, Thrombin, Fibrinogen, Fibrin mesh to Clot, in the book\'s direction of the arrows', down(CHAIN2) && CHAIN2.join() === 'Prothrombin,Thrombin,Fibrinogen,Fibrin mesh' && has(s, 'Fibrin mesh') && has(s, '→ Clot')],
    ['After the clot the book names Clot retraction and Fibrinolysis', has(s, '→ Clot retraction') && has(s, '→ Fibrinolysis')],
    ['Seven arrows: three in the first chain, three in the second, and the dashed enzyme arrow', count(s, HEAD_INK) === 7],
    ['The dashed arrow starts at prothrombinase and ends on the Prothrombin-to-Thrombin arrow (prothrombinase acts as an enzyme there)', P4[2] < 180 && DASH_Y > T[3] && DASH_Y < B[1] && ARROW_X > T[0] && ARROW_X < T[2]],
    ['HEPARIN (inhibits) sits across that same arrow, between Prothrombin and Thrombin, as the book draws it', HEP_Y > T[3] && HEP_Y < B[1] && has(s, 'HEPARIN') && has(s, '(inhibits)')],
    ['Prothrombinase (the enzyme whose action heparin opposes) is the one marigold highlight', count(s, MARI) === 1],
    ...layout(s), clean(s),
  ];
}
const fig152: Diagram = { id: 'b11-15-fig-15.2', topic: 0, name: 'Blood coagulation flow chart', cases: [{ chip: 'Clotting cascade', cap: CAP152 }], draw: draw152, check: check152 };

/* ================= Figure 15.3 ================= */
const CAP153 = 'ABO compatibility: antigens on the red cells and antibodies in the plasma of each group; O is the universal donor and AB the universal recipient. Each group can also give to its own group.';
type Grp = 'A' | 'B' | 'AB' | 'O';
const GROUPS: Record<Grp, { ag: string[]; ab: string[]; agT: string; abT: string[]; a0: number; a1: number }> = {
  B: { ag: ['B'], ab: ['A'], agT: 'Ag: B', abT: ['Ab: anti-A'], a0: -135, a1: -45 },
  A: { ag: ['A'], ab: ['B'], agT: 'Ag: A', abT: ['Ab: anti-B'], a0: -45, a1: 45 },
  O: { ag: [], ab: ['A', 'B'], agT: 'Ag: none', abT: ['Ab: anti-A &', 'anti-B'], a0: 45, a1: 135 },
  AB: { ag: ['A', 'B'], ab: [], agT: 'Ag: A, B', abT: ['Ab: none'], a0: 135, a1: 225 },
};
const CX = 180, CY = 172, RO = 104, RI = 36;
/** A can donate to B when none of A's antigens meets an antibody of B. */
const canGive = (d: Grp, r: Grp) => GROUPS[d].ag.every((x) => !GROUPS[r].ab.includes(x));
type Arc = { from: Grp; to: Grp; r: number; a0: number; a1: number; hi: boolean };
const ARCS: Arc[] = [
  { from: 'O', to: 'A', r: 111, a0: 76, a1: 12, hi: true },
  { from: 'O', to: 'AB', r: 111, a0: 104, a1: 168, hi: true },
  { from: 'O', to: 'B', r: 123, a0: 66, a1: -78, hi: true },
  { from: 'B', to: 'AB', r: 111, a0: -102, a1: -168, hi: false },
  { from: 'A', to: 'AB', r: 135, a0: -14, a1: -166, hi: false },
];
const inSector = (g: Grp, a: number) => { const q = ((a % 360) + 360) % 360, lo = ((GROUPS[g].a0 % 360) + 360) % 360, span = GROUPS[g].a1 - GROUPS[g].a0; return ((q - lo + 360) % 360) <= span; };
function draw153(): Sketch {
  const s = new Sketch(W, 372);
  (Object.keys(GROUPS) as Grp[]).forEach((g) => {
    const { a0, a1 } = GROUPS[g];
    path(s, [...arcPts(CX, CY, RO, a0, a1, 30), ...arcPts(CX, CY, RI, a1, a0, 20)], { close: true, w: 1.7 });
  });
  const at = (g: Grp) => { const m = rad((GROUPS[g].a0 + GROUPS[g].a1) / 2); return [CX + 70 * Math.cos(m), CY + 70 * Math.sin(m)] as P; };
  const put = (g: Grp, bx: number, by: number, lines: number[]) => {
    lab(s, bx, by + lines[0], g, { size: 18, bold: true });
    lab(s, bx, by + lines[1], GROUPS[g].agT, { size: 10 });
    GROUPS[g].abT.forEach((t, i) => lab(s, bx, by + lines[2] + i * 12, t, { size: 10, color: C.slate }));
  };
  void at;
  put('B', CX, CY, [-76, -62, -49]);
  put('A', CX + 70, CY, [-6, 8, 21]);
  put('O', CX, CY, [58, 72, 84]);
  put('AB', CX - 70, CY, [-6, 8, 21]);
  ['ABO', 'Blood', 'Groups'].forEach((t, i) => lab(s, CX, CY - 8 + i * 13, t, { size: 11, bold: true }));
  path(s, arcPts(CX, CY, RI, 0, 360, 48), { w: 1.7, close: true });
  ARCS.forEach((a) => {
    const pts = arcPts(CX, CY, a.r, a.a0, a.a1, 60), col = a.hi ? C.mari : C.ink, tip = pts[pts.length - 1];
    const ang = rad(a.a1) + (a.a1 > a.a0 ? 1 : -1) * (Math.PI / 2);
    path(s, pts.slice(0, -2), { color: col, w: a.hi ? 2.4 : 1.9 });
    head(s, tip, ang, col, 11, 5);
  });
  ['All groups', 'donate to AB'].forEach((t, i) => lab(s, 8, 20 + i * 13, t, { size: 11, anchor: 'start', color: C.slate }));
  ['UNIVERSAL', 'RECIPIENT'].forEach((t, i) => lab(s, 8, 52 + i * 13, t, { size: 11, anchor: 'start', bold: true }));
  lab(s, CX, 314, 'O donates to all groups', { size: 12, bold: true, color: C.amber });
  lab(s, CX, 330, 'UNIVERSAL DONOR', { size: 12, bold: true, color: C.amber });
  lab(s, CX, 354, '<i>Ag = antigen on the red cells;  Ab = antibody in the plasma</i>', { size: 10, color: C.slate });
  return s;
}
function check153(): Check[] {
  const s = draw153();
  const all: Grp[] = ['A', 'B', 'AB', 'O'];
  const pairs = all.flatMap((d) => all.filter((r) => r !== d && canGive(d, r)).map((r) => `${d}>${r}`)).sort().join();
  const drawn = ARCS.map((a) => `${a.from}>${a.to}`).sort().join();
  const donors = all.filter((d) => all.every((r) => canGive(d, r))), recips = all.filter((r) => all.every((d) => canGive(d, r)));
  return [
    ['Each group carries the book\'s antigens and antibodies: A (Ag A, anti-B), B (Ag B, anti-A), AB (Ag A, B; no antibody), O (no antigen; anti-A and anti-B)', GROUPS.A.agT === 'Ag: A' && GROUPS.A.abT[0] === 'Ab: anti-B' && GROUPS.B.agT === 'Ag: B' && GROUPS.B.abT[0] === 'Ab: anti-A' && GROUPS.AB.agT === 'Ag: A, B' && GROUPS.AB.abT[0] === 'Ab: none' && GROUPS.O.agT === 'Ag: none' && GROUPS.O.abT.join(' ') === 'Ab: anti-A & anti-B' && ['Ag: A', 'Ag: B', 'Ag: A, B', 'Ag: none', 'Ab: anti-A', 'Ab: anti-B', 'Ab: none', 'Ab: anti-A &', 'anti-B'].every((t) => has(s, t))],
    ['O is the only universal donor (no antigen) and AB the only universal recipient (no antibody), recomputed from the table', donors.join() === 'O' && recips.join() === 'AB'],
    ['The five arrows are exactly the donations between different groups the table allows: O to A, B and AB; A to AB; B to AB', pairs === drawn && pairs === 'A>AB,B>AB,O>A,O>AB,O>B'],
    ['Every arrow starts at the sector of its donor and its head lies in the sector of its recipient', ARCS.every((a) => inSector(a.from, a.a0) && inSector(a.to, a.a1))],
    ['The book\'s notes are on it: ABO Blood Groups, All groups donate to AB, UNIVERSAL RECIPIENT, O donates to all groups, UNIVERSAL DONOR, the Ag / Ab key', ['ABO', 'Blood', 'Groups', 'All groups', 'donate to AB', 'UNIVERSAL', 'RECIPIENT', 'O donates to all groups', 'UNIVERSAL DONOR', 'Ag = antigen on the red cells;  Ab = antibody in the plasma'].every((t) => has(s, t))],
    ['The three donations of O (the universal donor) are the one marigold highlight; the two into AB are ink', count(s, MARI) === 3 && ARCS.filter((a) => a.hi).every((a) => a.from === 'O')],
    ...layout(s), clean(s),
  ];
}
const fig153: Diagram = { id: 'b11-15-fig-15.3', topic: 0, name: 'ABO compatibility', cases: [{ chip: 'ABO wheel', cap: CAP153 }], draw: draw153, check: check153 };

/* ================= Figure 15.4 ================= */
const CAP154 = 'Human heart in frontal section (schematic): four chambers, the four valves, great vessels and the nodal pathway SA node, AV node, bundle of His, Purkinje fibres. Dashed outline = deoxygenated, solid outline = oxygenated blood.';
/** The plate's own coordinates (200 dpi crop of p. 900) scaled by 0.33 onto the phone. */
const K = 0.33, OX = 140, OY = 80;
const T = (px: number, py: number): P => [OX + K * (px - 368), OY + K * (py - 243)];
const TR = (a: number, b: number, c: number, d: number): Rect => { const p = T(a, b), q = T(c, d); return [p[0], p[1], q[0], q[1]]; };
const HEART = {
  RA: TR(420, 385, 643, 615), RV: TR(436, 643, 697, 958), LA: TR(768, 385, 942, 615), LV: TR(714, 643, 965, 980),
  IVC: TR(368, 553, 425, 914),
};
const OV = { tri: T(542, 630), pul: T(672, 643), aor: T(740, 643), mit: T(852, 630) };
const OVR = { tri: [19, 3.6], pul: [7.3, 3.6], aor: [7.3, 3.6], mit: [18.5, 3.6] } as const;
const SVC: P[] = [T(491, 385), T(491, 250), T(548, 250), T(548, 385)];
const PA: P[] = [T(647, 643), T(647, 345), T(565, 345), T(565, 312), T(695, 312), T(695, 643)];
const AORTA: P[] = [T(717, 643), T(717, 243), T(890, 243), T(890, 373), T(847, 373), T(847, 285), T(765, 285), T(765, 643)];
const PV1: P[] = [T(942, 418), T(1000, 418), T(1000, 462), T(942, 462)];
const PV2: P[] = [T(942, 537), T(1000, 537), T(1000, 581), T(942, 581)];
const SA = T(576, 430), AV = T(610, 592);
const HIS: P[] = [AV, T(648, 634), T(700, 670), T(700, 808), T(598, 925)];
const HIS_L: P[] = [T(700, 808), T(757, 937)];
const PURK_R: P[] = [T(481, 767), T(515, 858), T(598, 925), T(536, 919)];
const PURK_L: P[] = [T(875, 767), T(820, 857), T(757, 937), T(808, 942)];
type Mode = 'vessels' | 'valves' | 'nodes';
function draw154(c: { mode: Mode }): Sketch {
  const s = new Sketch(W, 392), m = c.mode;
  const chamber = (n: 'RA' | 'RV' | 'LA' | 'LV', deox: boolean) => box(s, n, HEART[n], { rx: 6, dash: deox ? DASH : undefined, color: m === 'vessels' ? C.mari : C.ink, w: m === 'vessels' ? 2.2 : 1.7 });
  chamber('RA', true); chamber('RV', true); chamber('LA', false); chamber('LV', false);
  box(s, 'IVC', HEART.IVC, { rx: 1, dash: DASH });
  path(s, SVC, { dash: DASH }); path(s, PA, { dash: DASH });
  path(s, AORTA); path(s, PV1); path(s, PV2);
  (['tri', 'pul', 'aor', 'mit'] as const).forEach((k) => ell(s, OV[k][0], OV[k][1], OVR[k][0], OVR[k][1], m === 'valves' ? { color: C.mari, w: 2.2 } : { w: 1.4 }));
  [['RA', 190, 172], ['RV', 192, 240], ['LA', 300, 160], ['LV', 294, 238]].forEach(([n, x, y]) => lab(s, x as number, y as number, n as string, { size: 13, bold: true, color: m === 'vessels' ? C.amber : C.text }));
  if (m === 'nodes') {
    path(s, HIS, { color: C.mari, w: 2.6 }); path(s, HIS_L, { color: C.mari, w: 2.6 });
    path(s, PURK_R, { color: C.mari, w: 1.6 }); path(s, PURK_L, { color: C.mari, w: 1.6 });
    s.dot(SA[0], SA[1], 4, C.mari); s.dot(AV[0], AV[1], 4, C.mari);
  }
  if (m === 'vessels') {
    s.tag(240, 4, 'Pulmonary veins', 340, 145, { anchor: 'start' });
    s.tag(200, 28, 'Pulmonary artery', 226, 108);
    s.tag(262, 52, 'Aorta', 289, 87);
    s.tag(6, 52, 'Superior vena cava', 190, 96);
    s.tag(6, 334, 'Inferior vena cava', 150, 296);
  } else if (m === 'valves') {
    s.tag(215, 4, 'Aortic valve', OV.aor[0], OV.aor[1]);
    s.tag(117, 28, 'Pulmonary valve', OV.pul[0], OV.pul[1]);
    s.tag(6, 226, 'Tricuspid valve', OV.tri[0] - OVR.tri[0], OV.tri[1]);
    s.tag(178, 334, 'Bicuspid (mitral) valve', 312, OV.mit[1]);
  } else {
    s.tag(6, 124, 'SA node', SA[0], SA[1], { hi: true });
    s.tag(6, 176, 'AV node', AV[0], AV[1], { hi: true });
    s.tag(100, 334, 'Bundle of His', T(700, 740)[0], T(700, 740)[1], { hi: true });
    s.tag(233, 334, 'Purkinje fibres', PURK_L[3][0], PURK_L[3][1], { hi: true });
  }
  legend(s, 380);
  return s;
}
const inRect = (p: P, r: Rect) => p[0] > r[0] && p[0] < r[2] && p[1] > r[1] && p[1] < r[3];
function check154(c: { mode: Mode }): Check[] {
  const s = draw154(c), m = c.mode;
  const names = ['RA', 'RV', 'LA', 'LV'];
  const base: Check[] = [
    ['Four chambers: RA and RV on the deoxygenated side (dashed), LA and LV on the oxygenated side (solid); the atria sit above the ventricles, the right heart to the left of the page', names.every((n) => has(s, n)) && HEART.RA[3] <= HEART.RV[1] + 12 && HEART.LA[3] <= HEART.LV[1] + 12 && HEART.RA[0] < HEART.LA[0] && HEART.RV[2] < HEART.LV[0] + 6],
    ['The legend reads Deoxygenated (dashed) and Oxygenated (solid), the book\'s blue and red', has(s, 'Deoxygenated') && has(s, 'Oxygenated')],
  ];
  const extra: Check[] =
    m === 'vessels'
      ? [
          ['The book\'s five vessel names are on it: Superior vena cava, Inferior vena cava, Pulmonary artery, Aorta, Pulmonary veins', ['Superior vena cava', 'Inferior vena cava', 'Pulmonary artery', 'Aorta', 'Pulmonary veins'].every((t) => tagged(s, t))],
          ['The venae cavae and the pulmonary artery attach to the deoxygenated side (right of the heart, left of the page), the aorta and pulmonary veins to the oxygenated side', SVC[0][0] < HEART.RA[2] && HEART.IVC[2] < HEART.RV[0] + 6 && PA[0][0] < HEART.RV[2] + 1 && AORTA[0][0] > HEART.RV[2] && PV1[0][0] >= HEART.LA[2] - 1],
          ['The four chambers are the one marigold highlight', count(s, MARI) === 4],
        ]
      : m === 'valves'
        ? [
            ['The four valves are labelled: Tricuspid valve, Pulmonary valve (the book draws it without a label), Aortic valve, Bicuspid (mitral) valve', ['Tricuspid valve', 'Pulmonary valve', 'Aortic valve', 'Bicuspid (mitral) valve'].every((t) => tagged(s, t))],
            ['Each valve sits at the junction it guards: tricuspid between RA and RV, mitral between LA and LV, pulmonary at the base of the pulmonary artery, aortic at the base of the aorta', OV.tri[1] >= HEART.RA[3] - 2 && OV.tri[1] <= HEART.RV[1] + 2 && OV.mit[1] >= HEART.LA[3] - 2 && OV.mit[1] <= HEART.LV[1] + 2 && Math.abs(OV.pul[0] - (PA[0][0] + PA[5][0]) / 2) < 12 && Math.abs(OV.aor[0] - (AORTA[0][0] + AORTA[7][0]) / 2) < 12 && Math.abs(OV.pul[1] - HEART.RV[1]) < 2 && Math.abs(OV.aor[1] - HEART.LV[1]) < 2],
            ['The four valves are the one marigold highlight', count(s, MARI) === 4],
          ]
        : [
            ['The nodal pathway is named as the book names it: SA node, AV node, Bundle of His, Purkinje fibres', ['SA node', 'AV node', 'Bundle of His', 'Purkinje fibres'].every((t) => tagged(s, t))],
            ['The SA node lies in the wall of the right atrium (upper), the AV node low in the right atrium by the septum, and the bundle runs from the AV node down into the ventricles', inRect(SA, HEART.RA) && inRect(AV, HEART.RA) && SA[1] < AV[1] && HIS[0][1] < HIS[HIS.length - 1][1] && HIS[HIS.length - 1][1] > HEART.RV[1] && inRect(PURK_L[3], HEART.LV) && inRect(PURK_R[0], HEART.RV)],
            ['The impulse path (SA node, AV node, bundle, Purkinje fibres) is the one marigold highlight, ink stays for the heart', count(s, MARI) >= 4],
          ];
  return [...base, ...extra, ...layout(s), clean(s)];
}
const fig154: Diagram = {
  id: 'b11-15-fig-15.4', topic: 1, name: 'Human heart in frontal section',
  cases: [{ chip: 'Vessels', mode: 'vessels', cap: CAP154 }, { chip: 'Valves', mode: 'valves', cap: CAP154 }, { chip: 'Nodal pathway', mode: 'nodes', cap: CAP154 }],
  draw: draw154, check: check154,
};

/* ================= Figure 15.5 ================= */
const CAP155 = 'Double circulation: the pulmonary circuit (RV to lungs to LA) and the systemic circuit (LV to body to RA); blood passes through the heart twice in each complete circuit.';
const BODY: Rect = [4, 40, 78, 124], LUNG: Rect = [282, 40, 356, 124];
const CH: Record<'RA' | 'RV' | 'LV' | 'LA', Rect> = { RA: [138, 40, 172, 76], RV: [188, 40, 222, 76], LV: [138, 88, 172, 124], LA: [188, 88, 222, 124] };
/** The six arrows of the circuit, in the order blood travels: from, to, the book's label, deoxygenated. */
const FLOW: { from: string; to: string; label: string[]; deox: boolean }[] = [
  { from: 'Body tissues', to: 'RA', label: ['Vena', 'cavae'], deox: true },
  { from: 'RA', to: 'RV', label: [], deox: true },
  { from: 'RV', to: 'Lungs', label: ['Pulmonary', 'artery'], deox: true },
  { from: 'Lungs', to: 'LA', label: ['Pulmonary', 'veins'], deox: false },
  { from: 'LA', to: 'LV', label: [], deox: false },
  { from: 'LV', to: 'Body tissues', label: ['Aorta'], deox: false },
];
function draw155(): Sketch {
  const s = new Sketch(W, 214);
  lab(s, 180, 22, 'HEART', { size: 11.5, bold: true, color: C.slate });
  box(s, 'heart', [130, 32, 230, 132], { color: C.mari, w: 2.2, rx: 10 });
  (Object.keys(CH) as (keyof typeof CH)[]).forEach((n) => {
    const deox = n === 'RA' || n === 'RV';
    box(s, n, CH[n], { dash: deox ? DASH : undefined });
    lab(s, (CH[n][0] + CH[n][2]) / 2, (CH[n][1] + CH[n][3]) / 2 + 5, n, { size: 14, bold: true, within: n });
  });
  box(s, 'body', BODY, { rx: 8, dash: DASH });
  ['Body tissues', `(${sub2} delivered,`, `${co2} collected)`].forEach((t, i) => lab(s, 41, 66 + i * 14, t, { size: i ? 9 : 10, bold: i === 0, within: 'body' }));
  box(s, 'lungs', LUNG, { rx: 8 });
  ['Lungs', `(${sub2} taken up,`, `${co2} released)`].forEach((t, i) => lab(s, 319, 66 + i * 14, t, { size: i ? 9 : 10, bold: i === 0, within: 'lungs' }));
  const dash = (d: boolean) => (d ? '4 3' : undefined);
  arrow(s, [BODY[2] + 3, 58], [CH.RA[0] - 2, 58], { dash: dash(true) });
  arrow(s, [CH.RA[2] + 1, 58], [CH.RV[0] - 1, 58], { dash: dash(true), w: 1.6 });
  arrow(s, [CH.RV[2] + 2, 58], [LUNG[0] - 2, 58], { dash: dash(true) });
  arrow(s, [LUNG[0] - 2, 106], [CH.LA[2] + 2, 106], {});
  arrow(s, [CH.LA[0] - 1, 106], [CH.LV[2] + 1, 106], { w: 1.6 });
  arrow(s, [CH.LV[0] - 2, 106], [BODY[2] + 2, 106], {});
  ['Vena', 'cavae'].forEach((t, i) => lab(s, 104, 40 + i * 11, t, { size: 9.5, color: C.slate }));
  ['Pulmonary', 'artery'].forEach((t, i) => lab(s, 256, 40 + i * 11, t, { size: 9.5, color: C.slate }));
  lab(s, 104, 122, 'Aorta', { size: 9.5, color: C.slate });
  ['Pulmonary', 'veins'].forEach((t, i) => lab(s, 256, 120 + i * 11, t, { size: 9.5, color: C.slate }));
  lab(s, 6, 152, 'SYSTEMIC CIRCUIT', { size: 10, anchor: 'start', bold: true });
  lab(s, 6, 166, '(LV → body → RA)', { size: 10, anchor: 'start', color: C.slate });
  lab(s, 354, 152, 'PULMONARY CIRCUIT', { size: 10, anchor: 'end', bold: true });
  lab(s, 354, 166, '(RV → lungs → LA)', { size: 10, anchor: 'end', color: C.slate });
  legend(s, 198);
  return s;
}
function check155(): Check[] {
  const s = draw155();
  const loop = FLOW.every((f, i) => f.to === FLOW[(i + 1) % FLOW.length].from);
  const pulm = FLOW.filter((f) => ['RV', 'Lungs'].includes(f.from) || (f.from === 'Lungs')), inHeart = FLOW.flatMap((f) => [f.from, f.to]).filter((n) => ['RA', 'RV', 'LA', 'LV'].includes(n));
  const visits = FLOW.filter((f) => ['RA', 'LA'].includes(f.to)).length;
  return [
    ['The blood travels one closed loop: body, RA, RV, lungs, LA, LV, body, six arrows in all', loop && FLOW.length === 6 && count(s, HEAD_INK) === 6],
    ['Deoxygenated blood (dashed) flows body to RA to RV to lungs; oxygenated blood (solid) flows lungs to LA to LV to body', FLOW.slice(0, 3).every((f) => f.deox) && FLOW.slice(3).every((f) => !f.deox) && (s.svg().match(/stroke-dasharray="4 3"/g) ?? []).length === 3 && (s.svg().match(/stroke-dasharray="5 3"/g) ?? []).length === 3],
    ['The pulmonary circuit is RV to lungs to LA and the systemic circuit LV to body to RA, so blood passes the heart twice in one complete round (once through the right heart, once through the left)', pulm.map((f) => f.to).join() === 'Lungs,LA' && FLOW.slice(5).concat(FLOW.slice(0, 1)).map((f) => f.to).join() === 'Body tissues,RA' && visits === 2 && inHeart.length === 8],
    ['The book\'s labels are on it: HEART, Vena cavae, Pulmonary artery, Pulmonary veins, Aorta, Body tissues (O2 delivered, CO2 collected), Lungs (O2 taken up, CO2 released), both circuit captions', ['HEART', 'Vena', 'cavae', 'Pulmonary', 'artery', 'veins', 'Aorta', 'Body tissues', '(O2 delivered,', 'CO2 collected)', 'Lungs', '(O2 taken up,', 'CO2 released)', 'SYSTEMIC CIRCUIT', '(LV → body → RA)', 'PULMONARY CIRCUIT', '(RV → lungs → LA)'].every((t) => has(s, t))],
    ['The heart (all four chambers, which every circuit passes through) is the one marigold highlight', count(s, MARI) === 1],
    ...layout(s), clean(s),
  ];
}
const fig155: Diagram = { id: 'b11-15-fig-15.5', topic: 1, name: 'Double circulation', cases: [{ chip: 'Two circuits', cap: CAP155 }], draw: draw155, check: check155 };

/* ================= Figure 15.6 ================= */
const CAP156 = 'A normal ECG: P wave (atrial depolarisation), QRS complex (ventricular depolarisation) and T wave (ventricular repolarisation); one cardiac cycle lasts about 0.8 s.';
const X0 = 60, PXS = 360, YZ = 150, PYM = 80;
const Xt = (t: number) => X0 + t * PXS, Yv = (v: number) => YZ - v * PYM;
/** The book's named points of the trace (seconds, mV); between them the trace is smooth, straight through the QRS. */
const KNOTS: [number, number][] = [[0, 0], [0.05, 0], [0.12, 0.15], [0.2, 0], [0.215, -0.1], [0.23, 0], [0.243, 1.0], [0.262, 0], [0.283, -0.25], [0.3, 0], [0.34, 0.02], [0.38, 0], [0.47, 0.25], [0.55, 0], [0.8, 0]];
function ecg(t: number): number {
  for (let i = 0; i < KNOTS.length - 1; i++) {
    const [a, va] = KNOTS[i], [b, vb] = KNOTS[i + 1];
    if (t >= a && t <= b) { const u = (t - a) / (b - a); return a >= 0.2 && b <= 0.3 ? va + (vb - va) * u : va + ((vb - va) * (1 - Math.cos(Math.PI * u))) / 2; }
  }
  return 0;
}
const TRACE156: [number, number][] = [...new Set([...Array.from({ length: 201 }, (_, i) => i * 0.004), ...KNOTS.map((k) => k[0])])].sort((a, b) => a - b).map((t): [number, number] => [t, ecg(t)]);
const PR = { from: 0.05, to: 0.2 };
function draw156(): Sketch {
  const s = new Sketch(W, 296);
  lab(s, 8, 16, 'Amplitude (mV)', { size: 10.5, anchor: 'start', color: C.slate });
  for (let i = 0; i <= 20; i++) path(s, [[Xt(i * 0.04), Yv(1.5)], [Xt(i * 0.04), Yv(-1.25)]], { color: C.grey, w: i % 5 === 0 ? 0.9 : 0.4, track: false });
  for (let v = -1.2; v <= 1.5 + 1e-9; v += 0.1) path(s, [[Xt(0) - 4, Yv(v)], [Xt(0.8) + 4, Yv(v)]], { color: C.grey, w: Math.abs(Math.round(v * 2) - v * 2) < 1e-6 ? 0.9 : 0.4, track: false });
  path(s, [[Xt(0) - 4, Yv(1.5)], [Xt(0) - 4, Yv(-1.25)], [Xt(0.8) + 4, Yv(-1.25)]], { color: C.slate, w: 1.4 });
  for (let v = -1; v <= 1.5 + 1e-9; v += 0.5) lab(s, Xt(0) - 9, Yv(v) + 3.5, v.toFixed(1), { size: 9.5, anchor: 'end', color: C.slate });
  for (let i = 0; i <= 4; i++) lab(s, Xt(i * 0.2), Yv(-1.25) + 14, (i * 0.2).toFixed(1), { size: 9.5, color: C.slate });
  lab(s, (Xt(0) + Xt(0.8)) / 2, Yv(-1.25) + 30, 'Time (s)', { size: 11, color: C.slate });
  path(s, TRACE156.map(([t, v]): P => [Xt(t), Yv(v)]), { color: C.mari, w: 2.4 });
  // names of the three waves
  ['P wave', '(atrial', 'depolarisation)'].forEach((t, i) => lab(s, Xt(0.0) + 3, Yv(0.95) + i * 12, t, { size: 10, anchor: 'start' }));
  leader(s, [Xt(0.1), Yv(0.46)], [Xt(0.12), Yv(0.15) - 3]);
  ['QRS complex', '(ventricular depolarisation)'].forEach((t, i) => lab(s, Xt(0.3), Yv(1.38) + i * 12.5, t, { size: 10.5, anchor: 'start', bold: i === 0 }));
  leader(s, [Xt(0.285), Yv(1.34)], [Xt(0.245), Yv(1.0)]);
  ['T wave', '(ventricular repolarisation)'].forEach((t, i) => lab(s, Xt(0.36), Yv(0.85) + i * 12.5, t, { size: 10.5, anchor: 'start' }));
  leader(s, [Xt(0.47), Yv(0.52)], [Xt(0.47), Yv(0.25) - 3]);
  // the PR interval and the whole cycle
  path(s, [[Xt(PR.from), Yv(-0.5)], [Xt(PR.to), Yv(-0.5)]], { color: C.ink, w: 1.4 });
  path(s, [[Xt(PR.from), Yv(-0.5) - 4], [Xt(PR.from), Yv(-0.5) + 4]], { color: C.ink, w: 1.4 });
  path(s, [[Xt(PR.to), Yv(-0.5) - 4], [Xt(PR.to), Yv(-0.5) + 4]], { color: C.ink, w: 1.4 });
  lab(s, Xt((PR.from + PR.to) / 2), Yv(-0.5) + 16, 'PR interval', { size: 10.5 });
  lab(s, Xt((PR.from + PR.to) / 2), Yv(-0.5) + 29, '~0.12–0.2 s', { size: 10.5 });
  arrow(s, [Xt(0.4) + 2, Yv(-1.0)], [Xt(0.8), Yv(-1.0)], { w: 1.6 });
  arrow(s, [Xt(0.4) - 2, Yv(-1.0)], [Xt(0), Yv(-1.0)], { w: 1.6 });
  lab(s, Xt(0.4), Yv(-1.0) - 9, 'one cardiac cycle ~0.8 s', { size: 10.5 });
  return s;
}
function check156(): Check[] {
  const s = draw156();
  const at = (a: number, b: number) => TRACE156.filter(([t]) => t >= a && t <= b);
  const peak = (a: number, b: number, sign = 1) => at(a, b).reduce((m, p) => (sign * p[1] > sign * m[1] ? p : m));
  const P = peak(0, 0.2), R = peak(0.2, 0.3), S = peak(0.25, 0.3, -1), Q = peak(0.2, 0.235, -1), Tw = peak(0.35, 0.6);
  return [
    ['The axes are the book\'s: amplitude -1.0 to 1.5 mV in steps of 0.5, time 0.0 to 0.8 s in steps of 0.2', ['-1.0', '-0.5', '0.0', '0.5', '1.0', '1.5', '0.2', '0.4', '0.6', '0.8'].every((t) => has(s, t)) && Math.abs(Xt(0.8) - Xt(0) - 0.8 * PXS) < 1e-9],
    ['The three waves come in order: P (0.15 mV near 0.12 s), then the QRS complex (R = 1.0 mV near 0.24 s, with Q below the line before it and S about -0.25 mV after it), then the T wave (0.25 mV near 0.47 s)', Math.abs(P[1] - 0.15) < 0.01 && Math.abs(P[0] - 0.12) < 0.02 && R[1] === 1 && Math.abs(R[0] - 0.243) < 0.01 && Q[1] < 0 && Q[0] < R[0] && Math.abs(S[1] + 0.25) < 0.01 && S[0] > R[0] && Math.abs(Tw[1] - 0.25) < 0.01 && Math.abs(Tw[0] - 0.47) < 0.03 && P[0] < R[0] && R[0] < Tw[0]],
    ['The trace is flat on the baseline before the P wave and from the end of the T wave to 0.8 s', at(0, 0.05).every((p) => p[1] === 0) && at(0.55, 0.8).every((p) => p[1] === 0)],
    ['The PR bracket runs from the P wave\'s start (0.05 s) to the start of the QRS complex (0.20 s): 0.15 s, inside the printed 0.12 to 0.2 s', Math.abs(PR.to - PR.from - 0.15) < 1e-9 && PR.to - PR.from >= 0.12 && PR.to - PR.from <= 0.2 && Math.abs(ecg(PR.from)) < 1e-9 && ecg(PR.to - 0.02) !== 0],
    ['One cardiac cycle is 0.8 s, which is 75 beats a minute (60 over 0.8)', Math.abs(60 / 0.8 - 75) < 1e-9 && TRACE156[TRACE156.length - 1][0] === 0.8],
    ['The book\'s names are on it: P wave (atrial depolarisation), QRS complex (ventricular depolarisation), T wave (ventricular repolarisation), PR interval ~0.12–0.2 s, one cardiac cycle ~0.8 s', ['P wave', '(atrial', 'depolarisation)', 'QRS complex', '(ventricular depolarisation)', 'T wave', '(ventricular repolarisation)', 'PR interval', '~0.12–0.2 s', 'one cardiac cycle ~0.8 s', 'Amplitude (mV)', 'Time (s)'].every((t) => has(s, t))],
    ['The trace is the one marigold highlight', count(s, MARI) === 1],
    ...layout(s), clean(s),
  ];
}
const fig156: Diagram = { id: 'b11-15-fig-15.6', topic: 2, name: 'A normal ECG', cases: [{ chip: 'One cardiac cycle', cap: CAP156 }], draw: draw156, check: check156 };

/* ================= Figure 15.7 ================= */
const CAP157 = 'Healthy coronary artery (a) and an atherosclerotic coronary artery (b) whose lumen is narrowed by a plaque of fat, cholesterol and calcium, which can cause angina when oxygen supply is inadequate.';
const R_WALL = 86, R_LUMEN_A = 64.5, R_PLAQUE = 69, R_LUMEN_B = 27, CORE = { r0: 40, r1: 53, a0: -140, a1: -40 }, CAP_R = 33.5;
const DEPOSITS: P[] = [[-45, 26], [-13, 54], [38, 41]];
function draw157(c: { part: 'a' | 'b' }): Sketch {
  const a = c.part === 'a', s = new Sketch(W, 292), cx = a ? 180 : 118, cy = 156;
  lab(s, cx, 24, a ? '(a) Healthy' : '(b) Atherosclerotic', { size: 14, bold: true });
  lab(s, cx, 42, 'Artery', { size: 14, bold: true });
  path(s, arcPts(cx, cy, R_WALL, 0, 360, 72), { close: true, w: 2 });
  if (a) {
    path(s, arcPts(cx, cy, R_LUMEN_A, 0, 360, 72), { close: true, color: C.mari, w: 2.6 });
    lab(s, cx, cy - 2, 'Open', { size: 14, bold: true, color: C.amber });
    lab(s, cx, cy + 15, 'lumen', { size: 14, bold: true, color: C.amber });
    lab(s, cx, cy + R_WALL + 24, 'Normal blood flow', { size: 12.5, color: C.slate });
    return s;
  }
  path(s, arcPts(cx, cy, R_PLAQUE, 0, 360, 72), { close: true, w: 1.5 });
  path(s, [...arcPts(cx, cy, CORE.r1, CORE.a0, CORE.a1, 24), ...arcPts(cx, cy, CORE.r0, CORE.a1, CORE.a0, 24)], { close: true, w: 1.5 });
  path(s, arcPts(cx, cy, CAP_R, CORE.a0 - 14, CORE.a1 + 14, 30), { color: C.slate, w: 2.6 });
  path(s, arcPts(cx, cy, R_LUMEN_B, 0, 360, 48), { close: true, color: C.mari, w: 2.6 });
  DEPOSITS.forEach(([dx, dy]) => { s.point(cx + dx, cy + dy, 3.6, `<circle cx="${r1(cx + dx)}" cy="${r1(cy + dy)}" r="3.6" fill="none" stroke="${C.ink}" stroke-width="1.5"/>`); });
  const polar = (r: number, deg: number): P => [cx + r * Math.cos(rad(deg)), cy + r * Math.sin(rad(deg))];
  const lc = polar((CORE.r0 + CORE.r1) / 2, -62), fc = polar(CAP_R, -35), nl = polar(R_LUMEN_B, -22);
  s.tag(222, 48, 'Lipid core', lc[0], lc[1]);
  s.tag(222, 86, 'Fibrous cap', fc[0], fc[1]);
  s.tag(222, 124, 'Narrowed lumen', nl[0], nl[1], { hi: true });
  lab(s, 222, 196, 'Ca<sup>2+</sup> deposit', { size: 11.5, anchor: 'start', bold: true });
  leader(s, [216, 192], [cx + DEPOSITS[2][0] + 7.5, cy + DEPOSITS[2][1]]);
  lab(s, cx, cy + R_WALL + 24, '↓ Blood flow → Angina', { size: 12.5, color: C.slate });
  return s;
}
function check157(c: { part: 'a' | 'b' }): Check[] {
  const s = draw157(c), area = (r: number) => Math.PI * r * r;
  const ratioA = R_LUMEN_A / R_WALL, ratioB = R_LUMEN_B / R_WALL;
  if (c.part === 'a') return [
    ['Panel (a) is a wall ring around one wide open lumen (about 0.75 of the wall radius, as the plate draws it)', R_LUMEN_A < R_WALL && Math.abs(ratioA - 0.75) < 0.01],
    ['The book\'s words are on it: (a) Healthy Artery, Open lumen, Normal blood flow', ['(a) Healthy', 'Artery', 'Open', 'lumen', 'Normal blood flow'].every((t) => has(s, t))],
    ['The open lumen is the one marigold highlight', count(s, MARI) === 1],
    ...layout(s), clean(s),
  ];
  const insideAnnulus = DEPOSITS.every(([dx, dy]) => { const d = Math.hypot(dx, dy); return d > R_LUMEN_B + 4 && d < R_PLAQUE - 4; });
  return [
    ['Panel (b) has the same wall as (a), with a plaque inside it that leaves only a narrow lumen (about 0.31 of the wall radius), far smaller than the open lumen of (a)', R_PLAQUE < R_WALL && R_LUMEN_B < R_PLAQUE && Math.abs(ratioB - 0.31) < 0.01 && R_LUMEN_B < R_LUMEN_A / 2],
    [`The narrowed lumen carries only ${r1((area(R_LUMEN_B) / area(R_LUMEN_A)) * 100)} % of the open lumen's cross-section (about 1 in 6), which is why supply can fall short and cause angina`, area(R_LUMEN_B) / area(R_LUMEN_A) < 0.2],
    ['The lipid core lies inside the plaque, between the narrowed lumen and the wall, with the fibrous cap drawn between it and the narrowed lumen (the cap covers the core on the blood side)', CORE.r0 > R_LUMEN_B && CORE.r1 < R_PLAQUE && CAP_R > R_LUMEN_B && CAP_R < CORE.r0],
    ['The three Ca2+ deposits lie in the plaque, clear of the lumen and the core', insideAnnulus && DEPOSITS.length === 3 && DEPOSITS.every(([dx, dy]) => { const a = (Math.atan2(dy, dx) * 180) / Math.PI; return a > 0 || a < CORE.a0; })],
    ['The book\'s names are on it: (b) Atherosclerotic Artery, Lipid core, Fibrous cap, Ca2+ deposit, Narrowed lumen, Blood flow, Angina', ['(b) Atherosclerotic', 'Artery', 'Ca2+ deposit', '↓ Blood flow → Angina'].every((t) => has(s, t)) && ['Lipid core', 'Fibrous cap', 'Narrowed lumen'].every((t) => tagged(s, t))],
    ['The narrowed lumen (the thing the figure is about) is the one marigold highlight: its outline and its own tag', count(s, MARI) === 3],
    ...layout(s), clean(s),
  ];
}
const fig157: Diagram = {
  id: 'b11-15-fig-15.7', topic: 2, name: 'Healthy and atherosclerotic coronary artery',
  cases: [{ chip: 'Healthy artery', part: 'a', cap: CAP157 }, { chip: 'Atherosclerotic artery', part: 'b', cap: CAP157 }],
  draw: draw157, check: check157,
};

export const DIAGRAMS_BIOLOGY_11_15: Diagram[] = [fig151, fig152, fig153, fig154, fig155, fig156, fig157];
