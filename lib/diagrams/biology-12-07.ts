import { C, LABEL_GAP, Rect, Sketch, audit, mathW, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * BIOLOGY CLASS 12, CHAPTER 7 (Human Health and Disease): the drawings of the Master Reference book on pp. 351-407, redrawn.
 * The figures sit on their own "CHAPTER 7 . FIGURES" pages: pp. 359, 365, 368 and 375 (the captions are printed earlier, on
 * pp. 358, 364, 367 and 374). Every page of the range was looked at; the other pages hold text, tables and page rules only
 * (the Additional topics, pp. 379-407, hold no drawing). SEVEN drawings:
 *
 *   Figure 7.1 (drawing p. 359), Topic 02, topic index 1: the life cycle of Plasmodium (stages 1 to 6).
 *   Figure 7.2 (drawing p. 359), Topic 02, topic index 1: modes of transmission of common infectious diseases.
 *   Figure 7.3 (drawing p. 365), Topic 03, topic index 2: the master tree of immunity.
 *   Figure 7.4 (drawing p. 365), Topic 03, topic index 2: structure of an antibody.
 *   Figure 7.5 (drawing p. 368), Topic 03, topic index 2: replication of HIV (steps A to E).
 *   Figure 7.6 (drawing p. 375), Topic 04, topic index 3: the cycle of experimentation, addiction, tolerance and dependence.
 *   Figure 7.7 (drawing p. 375), Topic 04, topic index 3: the two harmful pathways of tobacco smoke.
 *
 * THE BOOK'S, as printed: every word of every box, label, step and note (the stage texts of 7.1 and the legend A-E of 7.5
 * are re-wrapped, not reworded); the order 1-6, and which stages belong to the human host (1-4) and to the mosquito (5-6);
 * the four routes of 7.2 with every example and vector; the two levels of the tree in 7.3 (innate; acquired, active and
 * passive); in 7.4 two heavy and two light chains, the antigen-binding site at each arm tip, the Fab arm, the Fc stem and the
 * disulphide bonds, and "2 heavy + 2 light chains (H2L2)"; in 7.5 the steps A to E in order and the falling T-helper count;
 * in 7.6 the four stages numbered 1 to 4 in the order clockwise and the "escalating use" return arrow; in 7.7 both
 * pathways with their three steps.
 * COMPUTED, not placed: the antibody's arms are mirror images about the stem's axis and the light chain lies on the outer side
 * of each arm and is shorter than the heavy chain (the check measures both); every connector joins the boxes it names (the
 * checks read the boxes' coordinates); in 7.5 the viral DNA is inside the nucleus and the arrows run A to E.
 * SCHEMATIC: all sizes and positions (re-laid for a phone). 7.1 is the cycle unrolled into a column, stages 1-4 over 5-6 with a
 * return arrow from 6 to 1 (so the book's note "arrows run clockwise" is dropped); 7.5 is a vertical flow (cell, then virions,
 * then T cells) instead of the book's left-to-right; 7.6 is a 2 x 2 square instead of the book's diamond; 7.7 is two columns
 * under the cigarette instead of two rows beside it; the antibody's angle and proportions are not to scale. The book's titles
 * inside the drawings are left out (the card prints the figure's name). The book's em dashes ("Malaria - Anopheles") are
 * colons here (house rule). Genus names (Plasmodium, Anopheles, Culex, Aedes) are italic. Colours are the app's style (no
 * fills; one marigold highlight per drawing), not the book's: the book's green and orange are carried by the labels.
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
function box(s: Sketch, name: string, r: Rect, o: { color?: string; w?: number; dash?: string } = {}) {
  s.add(`<rect x="${r1(r[0])}" y="${r1(r[1])}" width="${r1(r[2] - r[0])}" height="${r1(r[3] - r[1])}" rx="7" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}/>`);
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
/** A grey leader from a label to a point it names, ending in a dot. */
function leader(s: Sketch, from: P, to: P, hi = false) {
  s.add(`<line x1="${r1(from[0])}" y1="${r1(from[1])}" x2="${r1(to[0])}" y2="${r1(to[1])}" stroke="${hi ? C.mari : C.grey}" stroke-width="1.2"/><circle cx="${r1(to[0])}" cy="${r1(to[1])}" r="2.6" fill="${hi ? C.mari : C.ink}"/>`);
  keep(s, [from, to]);
}
/** An arrow: the kit's vector, also kept as a line so that labels stay clear of it. */
function arrow(s: Sketch, a: P, b: P, o: { color?: string; w?: number; dash?: boolean } = {}) {
  s.vec(a[0], a[1], b[0], b[1], o);
  keep(s, [a, b]);
}
/** A white pill, ink-edged, bottom right, in STIX: the result of the drawing. */
function pill(s: Sketch, html: string, o: { size?: number } = {}): Rect {
  const size = o.size ?? 13, w = wOf(html, size) + 26, x0 = s.w - 8 - w, y0 = s.h - 38, rect: Rect = [x0, y0, x0 + w, y0 + 30];
  s.tags.push({ name: plain(html), rect, from: null, to: null });
  s.add(`<rect x="${r1(x0)}" y="${r1(y0)}" width="${r1(w)}" height="30" rx="15" fill="#fff" stroke="${C.text}" stroke-width="1.6"/>`);
  s.text(x0 + w / 2, y0 + 20, html, { size, semibold: true });
  return rect;
}
/** A numbered or lettered ink ring with its character inside. */
function ring(s: Sketch, cx: number, cy: number, r: number, ch: string, o: { color?: string; size?: number; w?: number } = {}) {
  ell(s, cx, cy, r, r, { color: o.color ?? C.ink, w: o.w ?? 1.7 });
  lab(s, cx, cy + (o.size ?? 12) * 0.34, ch, { size: o.size ?? 12, bold: true, color: o.color === C.mari ? C.amber : C.text });
}
/** Lines of text one under another; returns the rects. */
function stack(s: Sketch, x: number, y: number, lines: string[], o: { size?: number; anchor?: 'start' | 'middle' | 'end'; color?: string; bold?: boolean; within?: string; step?: number } = {}): Rect[] {
  const step = o.step ?? (o.size ?? 12) + 2.5;
  return lines.map((t, i) => lab(s, x, y + i * step, t, o));
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
/** Every drawn label keeps LABEL_GAP clear of every drawn outline, lies in the frame, touches no other label, and sits inside its box. */
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
const heads = (s: Sketch) => (s.svg().match(/Z" fill="#/g) ?? []).length;
const marigold = (s: Sketch) => (s.svg().match(/stroke="#EEA31F"/g) ?? []).length;
const rectOf = (s: Sketch, name: string): Rect => BOXES.get(s)!.find((b) => b.name === name)!.rect;
const cxOf = (r: Rect) => (r[0] + r[2]) / 2;
const cyOf = (r: Rect) => (r[1] + r[3]) / 2;

/* ================= Figure 7.1 ================= */
const CAP71 = 'Life cycle of <i>Plasmodium</i> in the human host (stages 1–4) and the female <i>Anopheles</i> mosquito (stages 5–6).';
const STAGES: { n: number; host: 'human' | 'mosquito'; lines: string[] }[] = [
  { n: 1, host: 'human', lines: ['Bite by infected female <i>Anopheles</i>:', 'sporozoites enter the blood', '(infective stage)'] },
  { n: 2, host: 'human', lines: ['Liver cells: asexual multiplication', '→ merozoites released'] },
  { n: 3, host: 'human', lines: ['Red blood cells: multiplication;', 'RBC rupture releases haemozoin', '→ chills and fever'] },
  { n: 4, host: 'human', lines: ['Some merozoites in RBCs', 'become gametocytes'] },
  { n: 5, host: 'mosquito', lines: ['Mosquito ingests gametocytes in a', 'blood meal; gametes fuse in the gut', '→ zygote (ookinete) → oocyst'] },
  { n: 6, host: 'mosquito', lines: ['Oocyst releases sporozoites,', 'which migrate to the', 'salivary glands'] },
];
const RH = 58, CX71 = 58, GX = 28;
const G1 = 14, G2 = 288;
const rowTop = (i: number) => (i < 4 ? G1 + 20 + i * RH : G2 + 20 + (i - 4) * RH);
const cy71 = (i: number) => rowTop(i) + RH / 2 - 2;
function draw71(): Sketch {
  const s = new Sketch(W, G2 + 20 + 2 * RH + 18);
  box(s, 'human host', [GX, G1, 350, G1 + 20 + 4 * RH + 4]);
  box(s, 'mosquito host', [GX, G2, 350, G2 + 20 + 2 * RH + 4]);
  lab(s, 82, G1 + 15, 'HUMAN HOST', { size: 10.5, anchor: 'start', bold: true, color: C.slate, within: 'human host' });
  lab(s, 82, G2 + 15, 'MOSQUITO HOST', { size: 10.5, anchor: 'start', bold: true, color: C.slate, within: 'mosquito host' });
  STAGES.forEach((st, i) => {
    const cy = cy71(i), hi = st.n === 1, grp = st.host === 'human' ? 'human host' : 'mosquito host';
    ring(s, CX71, cy, 12, String(st.n), hi ? { color: C.mari, w: 2.4 } : {});
    const y0 = cy - ((st.lines.length - 1) * 13) / 2 + 4;
    stack(s, 82, y0, st.lines, { size: 11, anchor: 'start', color: hi ? C.amber : C.text, within: grp, step: 13 });
    if (i < 5) arrow(s, [CX71, cy + 15], [CX71, cy71(i + 1) - 15]);
  });
  // the return arrow, 6 back to 1
  path(s, [[CX71 - 12, cy71(5)], [14, cy71(5)], [14, cy71(0)]], { w: 1.8 });
  arrow(s, [14, cy71(0)], [CX71 - 15, cy71(0)]);
  return s;
}
function check71(): Check[] {
  const s = draw71();
  return [
    ['Six stages, numbered 1 to 6 in the book\'s order, each in a ring', STAGES.map((t) => t.n).join() === '1,2,3,4,5,6' && ['1', '2', '3', '4', '5', '6'].every((t) => has(s, t))],
    ['Stages 1 to 4 are in the human host and stages 5 and 6 in the mosquito (the caption\'s split), and each stage lies inside its host\'s frame', STAGES.filter((t) => t.host === 'human').map((t) => t.n).join() === '1,2,3,4' && STAGES.filter((t) => t.host === 'mosquito').map((t) => t.n).join() === '5,6' && [0, 1, 2, 3].every((i) => cy71(i) > rectOf(s, 'human host')[1] && cy71(i) < rectOf(s, 'human host')[3]) && [4, 5].every((i) => cy71(i) > rectOf(s, 'mosquito host')[1] && cy71(i) < rectOf(s, 'mosquito host')[3])],
    ['The stage texts are the book\'s: the bite and the infective stage, the liver, the red cells (haemozoin, chills and fever), the gametocytes, the blood meal, the oocyst releasing sporozoites', STAGES.flatMap((t) => t.lines).every((l) => has(s, plain(l)))],
    ['Five arrows run down 1 to 6 and one returns from 6 to 1 (six arrowheads), the stages one under the next', heads(s) === 6 && STAGES.every((_, i) => i === 0 || cy71(i) > cy71(i - 1))],
    ['Only stage 1 (the infective stage) is in the highlight', marigold(s) === 1],
    ...layout(s), clean(s),
  ];
}
const fig71: Diagram = { id: 'b12-07-fig-7.1', topic: 1, name: 'Life cycle of Plasmodium', cases: [{ chip: 'Life cycle', cap: CAP71 }], draw: draw71, check: check71 };

/* ================= Figure 7.2 ================= */
const CAP72 = 'Modes of transmission of common infectious diseases, with examples of each.';
const ROUTES: { name: string[]; ex: string[]; hi?: boolean }[] = [
  { name: ['Air / Droplet'], ex: ['Common cold', 'Pneumonia', 'Diphtheria'] },
  { name: ['Contaminated', 'food & water'], ex: ['Typhoid', 'Amoebiasis', 'Ascariasis'] },
  { name: ['Insect vector'], ex: ['Malaria: <i>Anopheles</i>', 'Filariasis: <i>Culex</i>', 'Dengue, Chikungunya,', 'Yellow fever: <i>Aedes</i>'], hi: true },
  { name: ['Direct contact', '/ soil'], ex: ['Ringworm', '(from soil)'] },
];
const R72 = ROUTES.reduce((acc, r, i) => { const h = Math.max(44, r.ex.length * 13 + 16), top = i ? acc[i - 1][1] + 14 : 12; acc.push([top, top + h]); return acc; }, [] as P[]);
function draw72(): Sketch {
  const s = new Sketch(W, R72[3][1] + 14);
  const c0 = cyOf([0, R72[0][0], 0, R72[0][1]]), c3 = cyOf([0, R72[3][0], 0, R72[3][1]]), mid = (c0 + c3) / 2;
  box(s, 'root', [6, mid - 24, 88, mid + 24]);
  stack(s, 47, mid - 4, ['Modes of', 'Transmission'], { size: 10.5, bold: true, within: 'root', step: 14 });
  path(s, [[88, mid], [98, mid]], { w: 1.8 });
  path(s, [[98, c0], [98, c3]], { w: 1.8 });
  ROUTES.forEach((r, i) => {
    const [t, b] = R72[i], cy = (t + b) / 2, hi = !!r.hi, col = hi ? C.mari : C.ink;
    arrow(s, [98, cy], [122, cy]);
    box(s, `route ${i}`, [122, t, 214, b], { color: col, w: hi ? 2.2 : 1.7 });
    stack(s, 168, cy - ((r.name.length - 1) * 13) / 2 + 4, r.name, { size: 11, bold: true, color: hi ? C.amber : C.text, within: `route ${i}`, step: 13 });
    arrow(s, [216, cy], [236, cy]);
    box(s, `examples ${i}`, [236, t, 354, b], { color: col, w: hi ? 2.2 : 1.7 });
    stack(s, 295, cy - ((r.ex.length - 1) * 13) / 2 + 4, r.ex, { size: 10.5, color: hi ? C.amber : C.text, within: `examples ${i}`, step: 13 });
  });
  return s;
}
function check72(): Check[] {
  const s = draw72();
  return [
    ['The four routes are the book\'s, in its order: Air / Droplet, Contaminated food & water, Insect vector, Direct contact / soil', ROUTES.map((r) => r.name.join(' ').replace('/ soil', '/ soil')).join('|') === 'Air / Droplet|Contaminated food & water|Insect vector|Direct contact / soil' && ROUTES.every((r) => r.name.every((t) => has(s, t)))],
    ['Every example is on it: common cold, pneumonia, diphtheria; typhoid, amoebiasis, ascariasis; malaria (Anopheles), filariasis (Culex), dengue and chikungunya, yellow fever (Aedes); ringworm (from soil)', ROUTES.flatMap((r) => r.ex).every((t) => has(s, plain(t))) && ROUTES.flatMap((r) => r.ex).length === 12],
    ['Each route has an arrow from the trunk to its box and one on to its examples (8 arrowheads), the boxes one under the next', heads(s) === 8 && R72.every((r, i) => i === 0 || r[0] > R72[i - 1][1])],
    ['The trunk spans the first and last route and the root box sits half way between them', Math.abs(cyOf(rectOf(s, 'root')) - (cyOf([0, R72[0][0], 0, R72[0][1]]) + cyOf([0, R72[3][0], 0, R72[3][1]])) / 2) < 0.01],
    ['Only the insect-vector row (the vectors Anopheles, Culex, Aedes) is in the highlight', marigold(s) === 2],
    ...layout(s), clean(s),
  ];
}
const fig72: Diagram = { id: 'b12-07-fig-7.2', topic: 1, name: 'Modes of transmission', cases: [{ chip: 'Four routes', cap: CAP72 }], draw: draw72, check: check72 };

/* ================= Figure 7.3 ================= */
const CAP73 = 'The master tree of immunity: innate immunity (four barriers) and acquired immunity (active and passive).';
const TREE: Record<string, { r: Rect; head: string; lines: string[]; hi?: boolean }> = {
  immunity: { r: [120, 12, 240, 46], head: 'IMMUNITY', lines: [] },
  innate: { r: [8, 90, 168, 196], head: 'INNATE', lines: ['inborn, non-specific,', 'present at birth', '4 barriers: physical,', 'physiological, cellular,', 'cytokine'] },
  acquired: { r: [192, 90, 352, 196], head: 'ACQUIRED', lines: ['adaptive, specific,', 'has memory', '(B-lymphocytes and', 'T-lymphocytes)'], hi: true },
  active: { r: [8, 240, 176, 338], head: 'ACTIVE', lines: ['body makes its own', 'antibodies;', 'slow, long-lasting', 'e.g. infection, vaccination'] },
  passive: { r: [184, 240, 352, 338], head: 'PASSIVE', lines: ['ready-made antibodies given;', 'fast, short-lived', 'e.g. colostrum, anti-tetanus', 'injection, placenta'] },
};
function draw73(): Sketch {
  const s = new Sketch(W, 352);
  Object.entries(TREE).forEach(([k, t]) => {
    box(s, k, t.r, t.hi ? { color: C.mari, w: 2.2 } : {});
    const cx = cxOf(t.r);
    if (!t.lines.length) lab(s, cx, cyOf(t.r) + 4.5, t.head, { size: 12, bold: true, within: k });
    else {
      lab(s, cx, t.r[1] + 22, t.head, { size: 12, bold: true, color: t.hi ? C.amber : C.text, within: k });
      stack(s, cx, t.r[1] + 44, t.lines, { size: 10.5, color: C.slate, within: k, step: 13 });
    }
  });
  const im = TREE.immunity.r, inn = TREE.innate.r, acq = TREE.acquired.r, act = TREE.active.r, pas = TREE.passive.r;
  path(s, [[cxOf(im), im[3]], [cxOf(im), 68]]);
  path(s, [[cxOf(inn), 68], [cxOf(acq), 68]]);
  arrow(s, [cxOf(inn), 68], [cxOf(inn), inn[1]]);
  arrow(s, [cxOf(acq), 68], [cxOf(acq), acq[1]]);
  path(s, [[cxOf(acq), acq[3]], [cxOf(acq), 218]]);
  path(s, [[cxOf(act), 218], [cxOf(acq), 218]]);
  arrow(s, [cxOf(act), 218], [cxOf(act), act[1]]);
  arrow(s, [cxOf(acq), 218], [cxOf(acq), pas[1]]);
  return s;
}
function check73(): Check[] {
  const s = draw73(), T = TREE;
  return [
    ['The tree has the book\'s five boxes: IMMUNITY, then INNATE and ACQUIRED, and under ACQUIRED, ACTIVE and PASSIVE', ['IMMUNITY', 'INNATE', 'ACQUIRED', 'ACTIVE', 'PASSIVE'].every((t) => has(s, t))],
    ['INNATE and ACQUIRED hang one level under IMMUNITY, either side of it; ACTIVE and PASSIVE hang one level lower, both under ACQUIRED\'s branch (not under INNATE)', T.innate.r[1] > T.immunity.r[3] && T.acquired.r[1] > T.immunity.r[3] && T.innate.r[2] < T.acquired.r[0] && T.active.r[1] > T.acquired.r[3] && T.passive.r[1] > T.acquired.r[3] && cxOf(T.active.r) < cxOf(T.passive.r)],
    ['Innate: inborn, non-specific, present at birth, 4 barriers (physical, physiological, cellular, cytokine): four named, as the caption says', hasAll(s, ['inborn, non-specific,', 'present at birth', '4 barriers: physical,', 'physiological, cellular,', 'cytokine']) && 'physical physiological cellular cytokine'.split(' ').length === 4],
    ['Acquired: adaptive, specific, has memory (B- and T-lymphocytes); active: own antibodies, slow, long-lasting (infection, vaccination); passive: ready-made antibodies, fast, short-lived (colostrum, anti-tetanus injection, placenta)', hasAll(s, ['adaptive, specific,', 'has memory', '(B-lymphocytes and', 'T-lymphocytes)', 'body makes its own', 'antibodies;', 'slow, long-lasting', 'e.g. infection, vaccination', 'ready-made antibodies given;', 'fast, short-lived', 'e.g. colostrum, anti-tetanus', 'injection, placenta'])],
    ['Four arrowheads (to INNATE, ACQUIRED, ACTIVE, PASSIVE) and ACQUIRED is the one highlight', heads(s) === 4 && marigold(s) === 1],
    ...layout(s), clean(s),
  ];
}
const fig73: Diagram = { id: 'b12-07-fig-7.3', topic: 2, name: 'Master tree of immunity', cases: [{ chip: 'Immunity tree', cap: CAP73 }], draw: draw73, check: check73 };

/* ================= Figure 7.4 ================= */
const CAP74 = 'Structure of an antibody: two heavy and two light chains joined by disulphide bonds, with an antigen-binding site at the tip of each arm.';
const AX0 = 180, JY = 250, STEM_END = 376, STEM_GAP = 6;
const ARM: P = [-70, -122]; // the left arm from the junction
const ARM_L = Math.hypot(ARM[0], ARM[1]);
const U: P = [ARM[0] / ARM_L, ARM[1] / ARM_L]; // along the left arm
const OUT: P = [U[1], -U[0]]; // outward (left-down) normal of the left arm
const OFF = 13, LT0 = 0.38, LT1 = 0.98;
const mir = (p: P): P => [2 * AX0 - p[0], p[1]];
/** A point on the left heavy chain's centre line at fraction t of the arm. */
const hv = (t: number): P => [AX0 - STEM_GAP + U[0] * ARM_L * t, JY + U[1] * ARM_L * t];
/** A point on the left light chain at fraction t of the arm. */
const lt = (t: number): P => { const h = hv(t); return [h[0] + OUT[0] * OFF, h[1] + OUT[1] * OFF]; };
function draw74(): Sketch {
  const s = new Sketch(W, 432);
  const L = [AX0 - STEM_GAP, AX0 + STEM_GAP];
  // stem and arms: the heavy chains (ink), then the light chains (slate)
  path(s, [[L[0], STEM_END], [L[0], JY], hv(1)], { w: 5 });
  path(s, [[L[1], STEM_END], [L[1], JY], mir(hv(1))], { w: 5 });
  path(s, [lt(LT0), lt(LT1)], { color: C.slate, w: 3.6 });
  path(s, [mir(lt(LT0)), mir(lt(LT1))], { color: C.slate, w: 3.6 });
  // disulphide bonds: two across the hinge, one joining each light chain to its heavy chain
  [264, 276].forEach((y) => path(s, [[L[0] - 6, y], [L[1] + 6, y]], { color: C.ink, w: 2.4 }));
  [0.5].forEach((t) => {
    const h = hv(t), l = lt(t);
    path(s, [[h[0] - OUT[0] * 5, h[1] - OUT[1] * 5], [l[0] + OUT[0] * 4, l[1] + OUT[1] * 4]], { color: C.ink, w: 2.4 });
    const hm = mir(h), lm = mir(l);
    path(s, [[hm[0] + OUT[0] * 5, hm[1] - OUT[1] * 5], [lm[0] - OUT[0] * 4, lm[1] - OUT[1] * 4]], { color: C.ink, w: 2.4 });
  });
  // the antigen-binding sites: a dashed ring round each arm tip (the highlight)
  const tipC = (): P => { const a = hv(1), b = lt(LT1); return [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2]; };
  const cl = tipC(), cr = mir(cl), RR = 25;
  ell(s, cl[0], cl[1], RR, RR, { color: C.mari, w: 2.2, dash: '4 3' });
  ell(s, cr[0], cr[1], RR, RR, { color: C.mari, w: 2.2, dash: '4 3' });
  // labels with leaders
  const site = ['Antigen-binding site', '(variable regions of', 'heavy + light chain)'];
  const rl = stack(s, 8, 24, site, { size: 10.5, anchor: 'start', bold: true, color: C.amber, step: 13 });
  const rr = stack(s, 352, 24, site, { size: 10.5, anchor: 'end', bold: true, color: C.amber, step: 13 });
  const onRing = (c: P, from: P): P => { const d = Math.hypot(from[0] - c[0], from[1] - c[1]); return [c[0] + ((from[0] - c[0]) * RR) / d, c[1] + ((from[1] - c[1]) * RR) / d]; };
  const sl: P = [rl[2][2] + 5, 50], sr: P = [rr[2][0] - 5, 50];
  leader(s, sl, onRing(cl, sl), true);
  leader(s, sr, onRing(cr, sr), true);
  const hc = stack(s, 180, 78, ['Heavy chain', '(long: arm + stem)'], { size: 10.5, bold: true, step: 13 });
  leader(s, [hc[1][0] + 8, hc[1][3] + 5], hv(0.62));
  leader(s, [hc[1][2] - 8, hc[1][3] + 5], mir(hv(0.62)));
  const lc = stack(s, 8, 176, ['Light chain', '(short: outer part', 'of each arm)'], { size: 10.5, anchor: 'start', bold: true, step: 13 });
  leader(s, [lc[1][2] + 6, 189], lt(0.52));
  const fab = stack(s, 352, 214, ['Arm (Fab): one heavy', '+ one light chain make', 'each binding site'], { size: 10.5, anchor: 'end', bold: true, step: 13 });
  const fm = hv(0.5), fl = lt(0.5);
  leader(s, [fab[1][0] - 6, 227], mir([(fm[0] + fl[0]) / 2, (fm[1] + fl[1]) / 2]));
  const ss = stack(s, 352, 292, ['Inter-chain', 'disulphide (S-S) bonds'], { size: 10.5, anchor: 'end', bold: true, color: C.text, step: 13 });
  leader(s, [ss[1][0] - 6, 300], [L[1] + 6, 276]);
  const fc = stack(s, 8, 334, ['Stem (Fc): constant region', 'of the two heavy chains'], { size: 10.5, anchor: 'start', bold: true, step: 13 });
  leader(s, [fc[0][2] + 6, 330], [L[0], 336]);
  stack(s, 180, 408, ['Antibody = 2 heavy + 2 light chains', '(H<sub>2</sub>L<sub>2</sub>), held together by disulphide bonds'], { size: 10.5, color: C.slate, step: 13 });
  return s;
}
function check74(): Check[] {
  const s = draw74();
  const hLen = ARM_L + (STEM_END - JY), lLen = ARM_L * (LT1 - LT0);
  const lh = hv(1), rh = mir(hv(1)), ll = lt(0.7), rl = mir(lt(0.7));
  return [
    ['Two heavy chains (each long: arm and stem) and two light chains (each short: only the outer part of an arm): a light chain is shorter than a heavy chain', hLen > lLen * 2 && lLen < ARM_L],
    ['The two arms are mirror images about the stem\'s axis (same angle, same length) and the stem is straight below the junction', Math.abs(lh[0] + rh[0] - 2 * AX0) < 1e-9 && lh[1] === rh[1] && Math.abs(lt(0.7)[1] - ll[1]) < 1e-9 && Math.abs(ll[0] + rl[0] - 2 * AX0) < 1e-9],
    ['Each light chain lies on the OUTER side of its arm, parallel to it, 13 px from the heavy chain', ll[0] < hv(0.7)[0] && rl[0] > mir(hv(0.7))[0] && Math.abs(len(ll, hv(0.7)) - OFF) < 1e-9],
    ['An antigen-binding site (dashed ring, the highlight) is at the tip of each arm: two rings, each centred on the tip', (s.svg().match(/<ellipse[^>]*stroke="#EEA31F"/g) ?? []).length === 2 && len(lh, [(lh[0] + lt(LT1)[0]) / 2, (lh[1] + lt(LT1)[1]) / 2]) < 13 && len(rh, [2 * AX0 - (lh[0] + lt(LT1)[0]) / 2, (lh[1] + lt(LT1)[1]) / 2]) < 13],
    ['The book\'s words are all there: antigen-binding site (variable regions of heavy + light chain) twice, heavy chain (long: arm + stem), light chain (short: outer part of each arm), arm (Fab), inter-chain disulphide (S-S) bonds, stem (Fc) constant region of the two heavy chains, and 2 heavy + 2 light chains (H2L2)', has(s, 'Antigen-binding site') && s.labels.filter((l) => l.text === 'Antigen-binding site').length === 2 && s.labels.filter((l) => l.text === '(variable regions of').length === 2 && hasAll(s, ['Heavy chain', '(long: arm + stem)', 'Light chain', '(short: outer part', 'of each arm)', 'Arm (Fab): one heavy', '+ one light chain make', 'each binding site', 'Inter-chain', 'disulphide (S-S) bonds', 'Stem (Fc): constant region', 'of the two heavy chains', 'Antibody = 2 heavy + 2 light chains', '(H2L2), held together by disulphide bonds'])],
    ...layout(s), clean(s),
  ];
}
const fig74: Diagram = { id: 'b12-07-fig-7.4', topic: 2, name: 'Antibody structure', cases: [{ chip: 'Antibody', cap: CAP74 }], draw: draw74, check: check74 };

/* ================= Figure 7.5 ================= */
const CAP75 = 'Replication of HIV: entry into a macrophage, reverse transcription, integration into host DNA, release of new virions, and infection of helper T cells.';
const STEPS75: [string, string[]][] = [
  ['A', ['HIV binds to and enters a macrophage.']],
  ['B', ['In the cytoplasm, reverse transcriptase makes viral DNA', 'from the viral RNA.']],
  ['C', ['The viral DNA integrates into the host-cell DNA', 'in the nucleus.']],
  ['D', ['The host cell machinery makes new virus particles,', 'which are released.']],
  ['E', ['Released virions infect helper T cells (T<sub>H</sub>); as their', 'number falls, immunity falls.']],
];
const MAC = { cx: 180, cy: 180, rx: 168, ry: 92 }, NUC = { cx: 262, cy: 190, rx: 64, ry: 50 };
const wave = (x0: number, x1: number, y: number, amp: number, n: number): P[] => Array.from({ length: n * 8 + 1 }, (_, i): P => [x0 + ((x1 - x0) * i) / (n * 8), y + amp * Math.sin((2 * Math.PI * i) / 8)]);
const inEll = (e: { cx: number; cy: number; rx: number; ry: number }, p: P) => ((p[0] - e.cx) / e.rx) ** 2 + ((p[1] - e.cy) / e.ry) ** 2 < 1;
const VIRIONS: P[] = [[214, 318], [262, 318], [310, 318]];
const TCELLS: { c: P; col: string; w: number; dash?: string }[] = [{ c: [262, 412], col: C.ink, w: 2 }, { c: [160, 412], col: C.slate, w: 1.7 }, { c: [58, 412], col: C.faint, w: 1.5, dash: '4 3' }];
const LEG0 = 510;
const legY = (i: number) => LEG0 + STEPS75.slice(0, i).reduce((a, [, l]) => a + 14 + l.length * 14, 0);
function draw75(): Sketch {
  const s = new Sketch(W, legY(5) + 52);
  // the HIV particle and arrow A
  ell(s, 40, 34, 13, 13);
  path(s, wave(32, 48, 34, 3, 1), { w: 1.4 });
  lab(s, 62, 38, 'HIV', { size: 11, anchor: 'start', bold: true });
  arrow(s, [48, 50], [96, 110]);
  ring(s, 46, 86, 11, 'A', { size: 10 });
  // the macrophage
  ell(s, MAC.cx, MAC.cy, MAC.rx, MAC.ry, { w: 2 });
  lab(s, 160, 258, 'Macrophage', { size: 11, bold: true });
  lab(s, 100, 136, 'viral RNA', { size: 10, color: C.slate });
  path(s, wave(70, 130, 152, 4, 3), { w: 1.7 });
  // B: reverse transcription (the highlight)
  arrow(s, [100, 164], [100, 198], { color: C.mari, w: 2.2 });
  lab(s, 110, 176, 'reverse', { size: 10, anchor: 'start', color: C.amber });
  lab(s, 110, 189, 'transcriptase', { size: 10, anchor: 'start', color: C.amber });
  ring(s, 62, 182, 11, 'B', { size: 10 });
  path(s, [[76, 208], [126, 208]], { w: 1.7 });
  path(s, [[76, 215], [126, 215]], { w: 1.7 });
  lab(s, 101, 235, 'viral DNA', { size: 10.5 });
  // C: integration
  arrow(s, [132, 212], [214, 204]);
  ring(s, 172, 234, 11, 'C', { size: 10 });
  ell(s, NUC.cx, NUC.cy, NUC.rx, NUC.ry, { color: C.slate, w: 1.6 });
  lab(s, 262, 158, 'Nucleus', { size: 10.5, color: C.slate });
  lab(s, 262, 174, 'viral DNA joins', { size: 10, color: C.text });
  lab(s, 262, 186, 'host DNA', { size: 10, color: C.text });
  path(s, [[224, 200], [300, 200]], { w: 1.7 });
  path(s, [[224, 208], [300, 208]], { w: 1.7 });
  path(s, [[250, 196], [274, 196], [274, 212], [250, 212]], { w: 2.4, close: true });
  lab(s, 262, 228, 'host DNA', { size: 10.5 });
  // D: new virions released
  arrow(s, [262, 242], [262, 304]);
  ring(s, 284, 284, 11, 'D', { size: 10 });
  VIRIONS.forEach(([x, y]) => { ell(s, x, y, 11, 11); path(s, wave(x - 7, x + 7, y, 2.5, 1), { w: 1.3 }); });
  lab(s, 194, 322, 'new virions', { size: 11, anchor: 'end', bold: true });
  // E: infection of helper T cells
  arrow(s, [262, 336], [262, 384]);
  ring(s, 284, 358, 11, 'E', { size: 10 });
  lab(s, 8, 372, 'Helper T cells (T<sub>H</sub>)', { size: 11, anchor: 'start', bold: true });
  TCELLS.forEach((t) => { ell(s, t.c[0], t.c[1], 36, 22, { color: t.col, w: t.w, dash: t.dash }); ell(s, t.c[0], t.c[1], 12, 8, { color: t.col, w: t.w, dash: t.dash }); });
  arrow(s, [300, 450], [20, 450]);
  lab(s, 160, 470, 'T<sub>H</sub> count falls → immunity falls', { size: 11 });
  // the legend A to E
  STEPS75.forEach(([ch, lines], i) => {
    const y = legY(i);
    ring(s, 22, y - 4, 11, ch, { size: 10 });
    stack(s, 40, y, lines, { size: 10.5, anchor: 'start', step: 14 });
  });
  pill(s, 'Retrovirus: RNA → DNA', { size: 13 });
  return s;
}
function check75(): Check[] {
  const s = draw75();
  return [
    ['The steps are lettered A to E in the book\'s order in the drawing and again in the legend, with the book\'s five sentences', STEPS75.map(([c]) => c).join('') === 'ABCDE' && ['A', 'B', 'C', 'D', 'E'].every((c) => s.labels.filter((l) => l.text === c).length === 2) && STEPS75.flatMap(([, l]) => l).every((t) => has(s, plain(t)))],
    ['Reverse transcription happens in the cytoplasm: the viral RNA and the viral DNA it makes are inside the macrophage and outside the nucleus; the viral DNA then joins the host DNA inside the nucleus', inEll(MAC, [100, 152]) && inEll(MAC, [100, 208]) && !inEll(NUC, [100, 152]) && !inEll(NUC, [100, 208]) && inEll(NUC, [224, 200]) && inEll(NUC, [300, 208]) && inEll(MAC, [NUC.cx - NUC.rx, NUC.cy]) && inEll(MAC, [NUC.cx + NUC.rx, NUC.cy])],
    ['The new virions (D) are outside the macrophage, and arrow D runs from the nucleus to them', VIRIONS.every(([x, y]) => !inEll(MAC, [x, y - 11]) && !inEll(MAC, [x, y + 11])) && inEll(NUC, [262, 238]) && !inEll(MAC, [262, 304])],
    ['Three virions and three helper T cells, the cells fading to show the T-helper count falling, with the arrow "T_H count falls → immunity falls" running along them', VIRIONS.length === 3 && TCELLS.length === 3 && has(s, 'TH count falls → immunity falls') && TCELLS.every((t, i) => i === 0 || t.c[0] < TCELLS[i - 1].c[0]) && TCELLS[0].w > TCELLS[2].w],
    ['Six arrowheads: the arrows of steps A to E and the falling-count arrow', heads(s) === 6],
    ['Reverse transcription (the step that makes HIV a retrovirus, "RNA → DNA") is the one highlight', marigold(s) === 1 && has(s, 'reverse') && has(s, 'transcriptase')],
    ['The book\'s labels are on it: HIV, viral RNA, viral DNA, Nucleus, viral DNA joins host DNA, host DNA, Macrophage, new virions, Helper T cells (TH), Retrovirus: RNA → DNA', hasAll(s, ['HIV', 'viral RNA', 'viral DNA', 'Nucleus', 'viral DNA joins', 'host DNA', 'Macrophage', 'new virions', 'Helper T cells (TH)']) && s.tags.some((t) => t.name === 'Retrovirus: RNA → DNA')],
    ...layout(s), clean(s),
  ];
}
const fig75: Diagram = { id: 'b12-07-fig-7.5', topic: 2, name: 'Replication of HIV', cases: [{ chip: 'HIV in a host cell', cap: CAP75 }], draw: draw75, check: check75 };

/* ================= Figure 7.6 ================= */
const CAP76 = 'The cycle of experimentation, addiction, tolerance and dependence, in which withdrawal forces continued use.';
const CYC: { n: number; name: string; lines: string[]; r: Rect }[] = [
  { n: 1, name: 'Experimentation', lines: ['curiosity / peer pressure'], r: [8, 16, 166, 76] },
  { n: 2, name: 'Addiction', lines: ['psychological craving', 'for euphoria'], r: [194, 16, 352, 76] },
  { n: 3, name: 'Tolerance', lines: ['receptors desensitise;', 'need a higher dose'], r: [194, 150, 352, 210] },
  { n: 4, name: 'Dependence', lines: ['body adapts; stopping', 'causes withdrawal'], r: [8, 150, 166, 210] },
];
const NOTE: Rect = [110, 86, 250, 140];
function draw76(): Sketch {
  const s = new Sketch(W, 322);
  CYC.forEach((c) => {
    const nm = `stage ${c.n}`;
    box(s, nm, c.r);
    lab(s, cxOf(c.r), c.r[1] + 21, `${c.n}  ${c.name}`, { size: 12, bold: true, within: nm });
    stack(s, cxOf(c.r), c.r[1] + 39, c.lines, { size: 10.5, color: C.slate, within: nm, step: 12 });
  });
  box(s, 'note', NOTE, { color: C.mari, w: 2.2 });
  stack(s, cxOf(NOTE), NOTE[1] + 18, ['Withdrawal forces', 'continued use:', 'the trap closes'], { size: 11, bold: true, color: C.amber, within: 'note', step: 13 });
  arrow(s, [169, 46], [191, 46]);
  arrow(s, [273, 79], [273, 147]);
  arrow(s, [191, 180], [169, 180]);
  arrow(s, [87, 147], [87, 79]);
  lab(s, 79, 108, '<i>escalating</i>', { size: 10, anchor: 'end', color: C.slate });
  lab(s, 79, 121, '<i>use</i>', { size: 10, anchor: 'end', color: C.slate });
  lab(s, 14, 248, 'Biology of the loop:', { size: 11, anchor: 'start', bold: true, color: C.slate });
  ['Repeated exposure → receptor desensitisation (tolerance).', 'Body re-tunes its baseline chemistry to the drug (dependence).', 'Removing the drug → withdrawal syndrome.'].forEach((t, i) => lab(s, 14, 266 + i * 16, t, { size: 10.5, anchor: 'start', color: C.slate }));
  return s;
}
function check76(): Check[] {
  const s = draw76(), c = CYC.map((x) => x.r);
  return [
    ['Four stages, numbered 1 to 4 with the book\'s names: Experimentation, Addiction, Tolerance, Dependence', CYC.map((x) => x.n).join() === '1,2,3,4' && CYC.every((x) => has(s, `${x.n}  ${x.name}`)) && CYC.flatMap((x) => x.lines).every((t) => has(s, t))],
    ['They run clockwise 1 to 2 to 3 to 4 (top left, top right, bottom right, bottom left) and four arrows close the loop, 4 back to 1', c[0][0] < c[1][0] && c[0][1] === c[1][1] && c[2][1] > c[1][3] && c[2][0] === c[1][0] && c[3][0] === c[0][0] && c[3][1] === c[2][1] && heads(s) === 4],
    ['The return arrow 4 to 1 carries "escalating use"', has(s, 'escalating') && has(s, 'use')],
    ['The centre note says "Withdrawal forces continued use: the trap closes" and is the one highlight, between the four stages', hasAll(s, ['Withdrawal forces', 'continued use:', 'the trap closes']) && marigold(s) === 1 && NOTE[0] > c[0][2] - 60 && NOTE[1] > c[0][3] && NOTE[3] < c[3][1]],
    ['The three lines of "Biology of the loop" are the book\'s', hasAll(s, ['Biology of the loop:', 'Repeated exposure → receptor desensitisation (tolerance).', 'Body re-tunes its baseline chemistry to the drug (dependence).', 'Removing the drug → withdrawal syndrome.'])],
    ...layout(s), clean(s),
  ];
}
const fig76: Diagram = { id: 'b12-07-fig-7.6', topic: 3, name: 'Addiction, dependence, withdrawal cycle', cases: [{ chip: 'The cycle', cap: CAP76 }], draw: draw76, check: check76 };

/* ================= Figure 7.7 ================= */
const CAP77 = 'The two harmful pathways of tobacco smoke: benzopyrene leading to cancer, and carbon monoxide leading to tissue hypoxia.';
const SMOKE: Rect = [110, 10, 250, 48];
const PATHS: { head: string; x: [number, number]; steps: { lines: string[]; r: Rect; hi?: boolean }[] }[] = [
  { head: 'Carcinogen pathway', x: [8, 172], steps: [
    { lines: ['Benzopyrene', '(PAH)'], r: [8, 98, 172, 142] },
    { lines: ['Binds DNA', '→ mutation'], r: [8, 164, 172, 208] },
    { lines: ['Cancer', '(lung / throat /', 'oral / bladder)'], r: [8, 230, 172, 292], hi: true },
  ] },
  { head: 'Hypoxia pathway', x: [188, 352], steps: [
    { lines: ['Carbon monoxide', '(CO)'], r: [188, 98, 352, 142] },
    { lines: ['Binds haemoglobin', '(carboxyhaemoglobin)'], r: [188, 164, 352, 208] },
    { lines: ['↓ O<sub>2</sub> transport', '→ tissue hypoxia', '+ heart strain'], r: [188, 230, 352, 292] },
  ] },
];
const NOTE77: Rect = [8, 308, 172, 350];
function draw77(): Sketch {
  const s = new Sketch(W, 364);
  box(s, 'smoke', SMOKE);
  stack(s, 180, 27, ['Cigarette', 'smoke'], { size: 12, bold: true, within: 'smoke', step: 14 });
  path(s, [[180, 48], [180, 64]], { w: 1.8 });
  path(s, [[20, 64], [340, 64]], { w: 1.8 });
  arrow(s, [20, 64], [20, 96]);
  arrow(s, [340, 64], [340, 96]);
  PATHS.forEach((p, pi) => {
    lab(s, (p.x[0] + p.x[1]) / 2, 86, p.head, { size: 11, bold: true, color: pi === 0 ? C.amber : C.text });
    p.steps.forEach((st, i) => {
      const nm = `${pi}-${i}`;
      box(s, nm, st.r, st.hi ? { color: C.mari, w: 2.2 } : {});
      stack(s, cxOf(st.r), cyOf(st.r) - ((st.lines.length - 1) * 13) / 2 + 4, st.lines, { size: 11, bold: i === 2, color: st.hi ? C.amber : C.text, within: nm, step: 13 });
      if (i) arrow(s, [cxOf(st.r), p.steps[i - 1].r[3]], [cxOf(st.r), st.r[1]]);
    });
  });
  path(s, [[90, 292], [90, NOTE77[1]]], { w: 1.4, dash: '3 3' });
  box(s, 'note', NOTE77, { dash: '4 3', w: 1.4 });
  stack(s, cxOf(NOTE77), 325, ['<i>Carcinogenesis: proto-oncogene</i>', '<i>→ oncogene (see Topic 03)</i>'], { size: 10, color: C.slate, within: 'note', step: 13 });
  return s;
}
function check77(): Check[] {
  const s = draw77();
  return [
    ['Both pathways start at Cigarette smoke and each has three steps, in the book\'s order: benzopyrene (PAH) → binds DNA, mutation → cancer (lung / throat / oral / bladder); carbon monoxide (CO) → binds haemoglobin (carboxyhaemoglobin) → ↓ O2 transport, tissue hypoxia, heart strain', PATHS.length === 2 && PATHS.every((p) => p.steps.length === 3) && hasAll(s, ['Cigarette', 'smoke', 'Benzopyrene', '(PAH)', 'Binds DNA', '→ mutation', 'Cancer', '(lung / throat /', 'oral / bladder)', 'Carbon monoxide', '(CO)', 'Binds haemoglobin', '(carboxyhaemoglobin)', '↓ O2 transport', '→ tissue hypoxia', '+ heart strain'])],
    ['The pathways are headed "Carcinogen pathway" and "Hypoxia pathway", and the cancer end carries the note "Carcinogenesis: proto-oncogene → oncogene (see Topic 03)"', hasAll(s, ['Carcinogen pathway', 'Hypoxia pathway', 'Carcinogenesis: proto-oncogene', '→ oncogene (see Topic 03)']) && NOTE77[1] > PATHS[0].steps[2].r[3]],
    ['Within each pathway the steps run top to bottom with an arrow between each pair; two arrows leave the smoke box and four join the steps (6 arrowheads)', PATHS.every((p) => p.steps.every((st, i) => i === 0 || st.r[1] > p.steps[i - 1].r[3])) && heads(s) === 6 && SMOKE[3] < PATHS[0].steps[0].r[1] && SMOKE[3] < PATHS[1].steps[0].r[1]],
    ['The cancer end (the cigarette\'s carcinogen path) is the one highlight', marigold(s) === 1],
    ...layout(s), clean(s),
  ];
}
const fig77: Diagram = { id: 'b12-07-fig-7.7', topic: 3, name: 'Tobacco: two harmful pathways', cases: [{ chip: 'Two pathways', cap: CAP77 }], draw: draw77, check: check77 };

export const DIAGRAMS_BIOLOGY_12_07: Diagram[] = [fig71, fig72, fig73, fig74, fig75, fig76, fig77];
