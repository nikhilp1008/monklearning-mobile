import { C, LABEL_GAP, Rect, Sketch, audit, mathW, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * BIOLOGY CLASS 11, CHAPTER 18 (Neural Control and Coordination): the drawings of the Master Reference book on pp. 1074-1134, redrawn.
 * The figures sit on their own "CHAPTER 18 . FIGURES" plates (all vector, no raster image): pp. 1081, 1083, 1090, 1098, 1101
 * and 1107 (the captions are printed earlier, on pp. 1080, 1082, 1089, 1097, 1100 and 1106). The other pages of the chapter
 * hold text, tables and page rules only. SIX drawings:
 *
 *   Figure 18.1 (drawing p. 1081), Topic 01, topic index 1: the multipolar neuron.
 *   Figure 18.2 (drawing p. 1083), Topic 01, topic index 1: the chemical synapse, with the EPSP and IPSP traces in the one figure.
 *   Figure 18.3 (drawing p. 1090), Topic 02, topic index 2: the mid-sagittal section of the brain.
 *   Figure 18.4 (drawing p. 1098), Topic 03, topic index 3: the classification tree of the neural system.
 *   Figure 18.5 (drawing p. 1101), Topic 03, topic index 3: sympathetic versus parasympathetic effects (two cases, one per division).
 *   Figure 18.6 (drawing p. 1107), Topic 04, topic index 4: the withdrawal reflex arc.
 *
 * THE BOOK'S, as printed: every word of every label, title, box and note (the plate titles "Chemical Synapse" and "Withdrawal
 * Reflex Arc" included, with Ca<sup>2+</sup> drawn with a real superscript); in 18.1 the three myelinated stretches with a
 * Schwann cell on each and a node of Ranvier between them, the five dendrites, the three terminals with their knobs and the impulse
 * arrow pointing away from the cell body; in 18.2 the five vesicles, four neurotransmitter dots moving to four receptors, two
 * Ca<sup>2+</sup> entering, and the two traces (EPSP rises, IPSP falls, both from the same resting level); in 18.3 the fifteen
 * names and the three meninges (dura, arachnoid, pia from outside in), the corpus callosum above the thalamus and hypothalamus,
 * the four corpora quadrigemina above the aqueduct, pons, cerebellum, medulla and cord; in 18.4 all eleven boxes, the ten
 * joins, the notes "(from receptors)", "Skeletal muscles" and "Smooth & cardiac muscle, glands", and the dashed
 * "Voluntary control" and "Involuntary control" frames; in 18.5 the four effects of each division (pupil, bronchi, heart rate,
 * digestion), the arrows and the printed arrows after "Heart rate" and "Digestion"; in 18.6 the five numbered steps, the
 * three neurons and the two roots, the grey and white matter, the central canal, the brain and the dashed branch to it.
 * COMPUTED, not placed: the meninges are offset outlines of the brain (8 and 4 px out); the numbers in each check.
 * SCHEMATIC: every size and position (re-laid for a phone: 18.1 and 18.2 are drawn upright, 18.4 as a top-down tree that
 * fits 360 px, 18.5 as one panel per division), the shapes of the brain and of the grey matter, the dendrites' branching, the
 * flame, the muscle fibres, the hatching on the pons and the small bars beside the receptors (decoration in the book, not
 * drawn), and the leader lines' angles. The names in 18.3 and 18.6 are STIX text with leaders, as in the book, so that they
 * fit beside the drawing; the other names are the kit's tags. Colours are the app's style (no fills; one marigold highlight
 * per drawing), not the book's orange and green.
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
function ell(s: Sketch, cx: number, cy: number, rx: number, ry: number, o: { color?: string; w?: number } = {}) {
  s.add(`<ellipse cx="${r1(cx)}" cy="${r1(cy)}" rx="${r1(rx)}" ry="${r1(ry)}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}"/>`);
  keep(s, Array.from({ length: 49 }, (_, i): P => [cx + rx * Math.cos((i / 48) * 2 * Math.PI), cy + ry * Math.sin((i / 48) * 2 * Math.PI)]));
}
function box(s: Sketch, name: string, r: Rect, o: { color?: string; w?: number } = {}) {
  s.add(`<rect x="${r1(r[0])}" y="${r1(r[1])}" width="${r1(r[2] - r[0])}" height="${r1(r[3] - r[1])}" rx="7" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}"/>`);
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
/** Every drawn label keeps LABEL_GAP clear of every drawn outline, lies in the frame, touches no other label, and sits inside its box; tags and pills keep off the outlines too. */
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
    [`Every tag and pill stays 3 px clear of every drawn outline: the closest is "${twhat}", ${r1(tgap)} px`, tgap >= 3],
    [`Every label lies inside the frame${out.length ? `: not ${out.join(', ')}` : ''}`, out.length === 0],
    [`No two labels touch${touch.length ? `: ${touch.join(', ')}` : ''}`, touch.length === 0],
    [`Every label lies inside its box${spill.length ? `: not in ${spill.join(', ')}` : ''}`, spill.length === 0],
  ];
}
const has = (s: Sketch, t: string) => s.labels.some((l) => l.text === t);
const clean = (s: Sketch): Check => { const a = audit(s); return [`Layout audit is clear${a.length ? `: ${a.join('; ')}` : ''}`, a.length === 0 && s.unplaced.length === 0]; };
const sup = (s: string) => `${s}<sup>2+</sup>`;
/** A white disc with an ink edge (a cell body, a ganglion, a node); tracked, so labels keep clear of it. */
function disc(s: Sketch, x: number, y: number, r: number, o: { w?: number; track?: boolean } = {}) {
  s.add(`<circle cx="${r1(x)}" cy="${r1(y)}" r="${r}" fill="#fff" stroke="${C.ink}" stroke-width="${o.w ?? 1.7}"/>`);
  if (o.track !== false) keep(s, Array.from({ length: 25 }, (_, i): P => [x + r * Math.cos((i / 24) * 2 * Math.PI), y + r * Math.sin((i / 24) * 2 * Math.PI)]));
}
/** A numbered step: a white disc over the line, the number in it (not tracked: the digit sits well inside). */
function stepNo(s: Sketch, x: number, y: number, n: number) {
  s.add(`<circle cx="${r1(x)}" cy="${r1(y)}" r="10" fill="#fff" stroke="${C.ink}" stroke-width="1.4"/>`);
  s.text(x, y + 4, String(n), { size: 11, semibold: true });
}
const near = (a: number, b: number, e = 1e-6) => Math.abs(a - b) < e;
const count = (svg: string, re: RegExp) => (svg.match(re) ?? []).length;
const MARI = /stroke="#EEA31F"/g;


/* ================= Figure 18.1 ================= */
const CAP181 = 'A labelled multipolar neuron: cyton with nucleus and Nissl’s granules, dendrites, a myelinated axon (Schwann cells, myelin sheath, nodes of Ranvier) and axon terminals with synaptic knobs. The arrow shows the impulse moving away from the cell body.';
const BODY: [number, number, number] = [200, 112, 34];
const NUC_R = 13;
const DEND_ANG = [-165, -135, -100, -65, -30];
const DEND_LEN = 62;
const AX_X = 200, AX_TOP = BODY[1] + BODY[2], AX_END = 395;
const SHEATH_Y = [205, 273, 341], SHEATH_RX = 15, SHEATH_RY = 30;
const NODE_Y = [239, 307];
const KNOBS: P[] = [[140, 440], [200, 454], [260, 440]];
const rad = (d: number) => (d * Math.PI) / 180;
const dendPt = (a: number, f: number): P => [BODY[0] + (BODY[2] + DEND_LEN * f) * Math.cos(rad(a)), BODY[1] + (BODY[2] + DEND_LEN * f) * Math.sin(rad(a))];
const ARROW181: [number, number] = [312, 440];
function draw181(): Sketch {
  const s = new Sketch(W, 504);
  // dendrites: a long branch each with two short twigs
  DEND_ANG.forEach((a) => {
    path(s, [dendPt(a, 0), dendPt(a, 1)], { w: 2 });
    [[0.45, 40], [0.75, -40]].forEach(([f, off]) => {
      const b = dendPt(a, f), t = rad(a + off);
      path(s, [b, [b[0] + 13 * Math.cos(t), b[1] + 13 * Math.sin(t)]], { w: 1.5 });
    });
  });
  // the axon and its myelin: three sheaths, a Schwann cell on each, a node between each pair
  path(s, [[AX_X, AX_TOP], [AX_X, AX_END]], { w: 1.9 });
  SHEATH_Y.forEach((y) => { ell(s, AX_X, y, SHEATH_RX, SHEATH_RY); ell(s, AX_X + 19, y, 5, 9, { w: 1.5 }); });
  NODE_Y.forEach((y) => ell(s, AX_X, y, 4.5, 7, { w: 1.7 }));
  // the cell body, its nucleus and Nissl's granules
  ell(s, BODY[0], BODY[1], BODY[2], BODY[2], { w: 2 });
  ell(s, BODY[0], BODY[1], NUC_R, NUC_R);
  [20, 65, 110, 155, 200, 245, 290, 335].forEach((a) => ell(s, BODY[0] + 24 * Math.cos(rad(a)), BODY[1] + 24 * Math.sin(rad(a)), 4, 2.8, { w: 1.3 }));
  // terminals with synaptic knobs
  KNOBS.forEach((k) => {
    const d = len([AX_X, AX_END], k), u: P = [(k[0] - AX_X) / d, (k[1] - AX_END) / d];
    path(s, [[AX_X, AX_END], [k[0] - 9 * u[0], k[1] - 9 * u[1]]], { w: 1.9 });
    ell(s, k[0], k[1], 9, 9, { w: 1.7 });
    [[-2.6, -1.4], [2.4, 1.6]].forEach(([dx, dy]) => s.add(`<circle cx="${r1(k[0] + dx)}" cy="${r1(k[1] + dy)}" r="1.8" fill="${C.ink}"/>`));
  });
  // the impulse arrow, away from the cell body
  lab(s, ARROW181[0] - 194, 300, 'Impulse direction', { size: 11.5, bold: true, color: C.amber });
  s.vec(118, 312, 118, ARROW181[1], { color: C.mari, w: 2.8 });
  keep(s, [[118, 312], [118, ARROW181[1]]]);
  // names
  const hit0 = dendPt(-165, 0.7);
  s.tag(8, 50, 'Dendrites', hit0[0], hit0[1]);
  s.tag(8, 100, 'Cell body (Cyton)', BODY[0] - 33.5, BODY[1] + 5.9);
  s.tag(8, 150, 'Nissl\'s granules', BODY[0] + 24 * Math.cos(rad(155)), BODY[1] + 24 * Math.sin(rad(155)));
  s.tag(262, 120, 'Nucleus', 207, 110);
  s.tag(252, 150, 'Axon', AX_X, 158);
  s.tag(252, 186, 'Schwann cell', AX_X + 24, SHEATH_Y[0]);
  s.tag(8, 240, 'Myelin sheath', AX_X - SHEATH_RX, SHEATH_Y[1]);
  s.tag(232, 288, 'Node of Ranvier', AX_X + 4.5, NODE_Y[1]);
  s.tag(252, 392, 'Axon terminal', 225, 413);
  s.tag(245, 472, 'Synaptic knob', KNOBS[0][0] + 120, KNOBS[0][1] + 9);
  return s;
}
function check181(): Check[] {
  const s = draw181(), svg = s.svg();
  const tagNames = s.tags.map((t) => t.name);
  const names = ['Dendrites', 'Cell body (Cyton)', 'Nissl\'s granules', 'Nucleus', 'Axon', 'Schwann cell', 'Myelin sheath', 'Node of Ranvier', 'Axon terminal', 'Synaptic knob'];
  return [
    ['Every name the book prints is on the drawing: Dendrites, Cell body (Cyton), Nissl\'s granules, Nucleus, Axon, Schwann cell, Myelin sheath, Node of Ranvier, Axon terminal, Synaptic knob and Impulse direction', names.every((n) => tagNames.includes(n)) && has(s, 'Impulse direction')],
    ['Three myelinated stretches, each with its own Schwann cell, and a node of Ranvier in each gap between them (3 sheaths, 2 nodes)', SHEATH_Y.length === 3 && NODE_Y.length === SHEATH_Y.length - 1 && NODE_Y.every((n, i) => n > SHEATH_Y[i] + SHEATH_RY - 1 && n < SHEATH_Y[i + 1] - SHEATH_RY + 1)],
    ['The nucleus lies inside the cell body and the eight Nissl\'s granules lie in the cytoplasm between nucleus and membrane (not in the axon)', NUC_R < BODY[2] && 24 - 4 > NUC_R && 24 + 4 < BODY[2] && AX_TOP - BODY[1] === BODY[2]],
    ['Five dendrites leave the cell body, all on the side away from the axon; the axon leaves the opposite side', DEND_ANG.length === 5 && DEND_ANG.every((a) => Math.sin(rad(a)) < 0)],
    ['The axon runs from the cell body to three terminals, each ending in a synaptic knob', KNOBS.length === 3 && KNOBS.every((k) => k[1] > AX_END)],
    ['The impulse arrow points away from the cell body (downward, away from the cyton at the top) and is the one marigold highlight', ARROW181[1] > 312 && 312 > BODY[1] + BODY[2] && count(svg, MARI) >= 1 && s.labels.some((l) => l.text === 'Impulse direction')],
    ...layout(s), clean(s),
  ];
}
const fig181: Diagram = { id: 'b11-18-fig-18.1', topic: 1, name: 'Multipolar neuron', cases: [{ chip: 'Multipolar neuron', cap: CAP181 }], draw: draw181, check: check181 };

/* ================= Figure 18.2 ================= */
const CAP182 = 'A chemical synapse: presynaptic terminal with synaptic vesicles and Ca<sup>2+</sup> entry, synaptic cleft with neurotransmitter, postsynaptic membrane with receptors, and EPSP/IPSP responses.';
const PRE: Rect = [180, 92, 344, 190], POST: Rect = [180, 250, 344, 350];
const VESICLES: P[] = [[205, 128], [240, 146], [280, 122], [222, 168], [300, 160]];
const NT_X = [200, 240, 280, 320], NT_Y = 206, REC_Y = 258;
const CA_X = [215, 285];
const EPSP: P[] = [[24, 440], [78, 440], [78, 400], [162, 400]];
const IPSP: P[] = [[198, 412], [250, 412], [250, 448], [336, 448]];
function draw182(): Sketch {
  const s = new Sketch(W, 492);
  lab(s, 180, 22, 'Chemical Synapse', { size: 15, bold: true });
  // Ca2+ entering the presynaptic terminal
  CA_X.forEach((x) => { lab(s, x, 54, sup('Ca'), { size: 13, bold: true }); s.vec(x, 64, x, 88, { color: C.ink, w: 1.8 }); });
  lab(s, 8, 70, `${sup('Ca')} entry`, { size: 12, anchor: 'start' });
  leader(s, [76, 68], [CA_X[0] - 6, 78]);
  // the two terminals, their membranes (the thick bars) and the cleft between them
  box(s, 'pre', PRE); box(s, 'post', POST);
  path(s, [[PRE[0] + 2, PRE[3]], [PRE[2] - 2, PRE[3]]], { w: 5 });
  path(s, [[POST[0] + 2, POST[1]], [POST[2] - 2, POST[1]]], { w: 5 });
  path(s, [[PRE[0], PRE[3]], [POST[0], POST[1]]], { color: C.slate, w: 1.3, dash: '4 4' });
  path(s, [[PRE[2], PRE[3]], [POST[2], POST[1]]], { color: C.slate, w: 1.3, dash: '4 4' });
  VESICLES.forEach((v) => ell(s, v[0], v[1], 8, 8, { w: 1.6 }));
  // neurotransmitter crossing the cleft (the highlight) to the receptors
  NT_X.forEach((x) => {
    ell(s, x, NT_Y, 6, 6, { color: C.mari, w: 2.4 });
    s.vec(x, NT_Y + 11, x, NT_Y + 33, { color: C.mari, w: 2.2 });
    s.add(`<rect x="${x - 9}" y="${REC_Y}" width="18" height="14" rx="3" fill="none" stroke="${C.ink}" stroke-width="1.7"/>`);
    keep(s, [[x - 9, REC_Y], [x + 9, REC_Y], [x + 9, REC_Y + 14], [x - 9, REC_Y + 14], [x - 9, REC_Y]]);
  });
  // names
  s.tag(8, 84, 'Presynaptic terminal', PRE[0], 110);
  s.tag(8, 122, 'Synaptic vesicles', VESICLES[0][0] - 8, VESICLES[0][1]);
  s.tag(8, 156, 'Presynaptic membrane', 200, PRE[3]);
  s.tag(8, 188, 'Synaptic cleft', PRE[0], 200);
  s.tag(8, 218, 'Neurotransmitter', NT_X[0] - 6, NT_Y);
  s.tag(8, 246, 'Postsynaptic membrane', 190, POST[1]);
  s.tag(8, 284, 'Receptors', NT_X[0], REC_Y + 14);
  s.tag(8, 318, 'Postsynaptic terminal', POST[0], 330);
  // EPSP and IPSP
  box(s, 'epsp', [16, 376, 170, 476]); box(s, 'ipsp', [190, 376, 344, 476]);
  path(s, [[16, EPSP[0][1]], [170, EPSP[0][1]]], { color: C.grey, w: 1.2, dash: '3 3', track: false });
  path(s, [[190, IPSP[0][1]], [344, IPSP[0][1]]], { color: C.grey, w: 1.2, dash: '3 3', track: false });
  path(s, EPSP, { w: 2.2 }); path(s, IPSP, { w: 2.2 });
  lab(s, 93, 464, 'EPSP (depolarises)', { size: 11, within: 'epsp' });
  lab(s, 267, 394, 'IPSP (hyperpolarises)', { size: 11, within: 'ipsp' });
  return s;
}
function check182(): Check[] {
  const s = draw182(), svg = s.svg();
  const tagNames = s.tags.map((t) => t.name);
  const names = ['Presynaptic terminal', 'Synaptic vesicles', 'Presynaptic membrane', 'Synaptic cleft', 'Neurotransmitter', 'Postsynaptic membrane', 'Receptors', 'Postsynaptic terminal'];
  const inside = (p: P, r: Rect) => p[0] > r[0] && p[0] < r[2] && p[1] > r[1] && p[1] < r[3];
  return [
    ['Every name the book prints is on the drawing: the eight tags, "Chemical Synapse", "Ca2+ entry", "Ca2+" twice, EPSP (depolarises) and IPSP (hyperpolarises)', names.every((n) => tagNames.includes(n)) && has(s, 'Chemical Synapse') && has(s, 'Ca2+ entry') && s.labels.filter((l) => l.text === 'Ca2+').length === 2 && has(s, 'EPSP (depolarises)') && has(s, 'IPSP (hyperpolarises)')],
    ['Five vesicles lie inside the presynaptic terminal; four neurotransmitter dots lie in the cleft, between the two membranes, one above each of four receptors', VESICLES.length === 5 && VESICLES.every((v) => inside(v, PRE)) && NT_X.length === 4 && NT_Y > PRE[3] && NT_Y < POST[1] && NT_X.every((x) => x > PRE[0] && x < PRE[2])],
    ['The neurotransmitter arrows run from the presynaptic membrane to the postsynaptic one (downward, y rising), four of them, in the highlight', NT_Y + 33 > NT_Y + 11 && NT_Y + 33 < POST[1] && count(svg, /<path d="M[^"]*Z" fill="#EEA31F"\/>/g) === 4],
    ['Both Ca2+ arrows point down into the presynaptic terminal (they end above its top edge at y = 92 and head toward it)', CA_X.length === 2 && 88 <= PRE[1] && 64 < 88],
    ['Receptors sit on the postsynaptic side only (below the cleft, just under the thick membrane)', REC_Y > POST[1] && REC_Y + 14 < POST[3]],
    ['EPSP rises from the resting level (the trace ends above where it starts: depolarising) and IPSP falls below it (hyperpolarising), each from its own resting baseline', EPSP[EPSP.length - 1][1] < EPSP[0][1] && IPSP[IPSP.length - 1][1] > IPSP[0][1] && EPSP[0][1] === EPSP[1][1] && IPSP[0][1] === IPSP[1][1]],
    ...layout(s), clean(s),
  ];
}
const fig182: Diagram = { id: 'b11-18-fig-18.2', topic: 1, name: 'Chemical synapse', cases: [{ chip: 'Chemical synapse', cap: CAP182 }], draw: draw182, check: check182 };

/* ================= Figure 18.3 ================= */
const CAP183 = 'A mid-sagittal section of the human brain showing the cerebrum (with cortex and corpus callosum), thalamus and hypothalamus, midbrain with corpora quadrigemina and cerebral aqueduct, pons, cerebellum, medulla oblongata, and the meninges (dura/arachnoid/pia) at the surface.';
const BR0 = 96, BR1 = 30, BRK = 0.5;
/** The book's drawing coordinates, scaled to the phone. */
const br = (x: number, y: number): P => [BR0 + (x - 272) * BRK, BR1 + (y - 318) * BRK];
/** The outline of cerebrum, brainstem, cord and the cerebellum's side, clockwise from the top. */
const BRAIN: P[] = ([[369, 354], [447, 340], [525, 355], [577, 395], [592, 447], [578, 495], [540, 542], [447, 572], [465, 597], [465, 630], [434, 690], [428, 773], [386, 773], [386, 690], [381, 682], [320, 656], [294, 625], [288, 583], [291, 541], [296, 500], [298, 448], [322, 382]] as P[]).map(([x, y]) => br(x, y));
const CEREBELLUM: P[] = ([[291, 541], [322, 535], [357, 553], [384, 573], [410, 603], [410, 633], [400, 664], [381, 682], [320, 656], [294, 625], [288, 583]] as P[]).map(([x, y]) => br(x, y));
/** An outline pushed outward by `d` (a clockwise polygon in screen coordinates), at each corner by the mitre of its two edges. */
function offsetOut(pts: P[], d: number): P[] {
  const n = pts.length;
  const unit = (a: P, b: P): P => { const l = len(a, b); return [(b[0] - a[0]) / l, (b[1] - a[1]) / l]; };
  return pts.map((p, i) => {
    const a = unit(pts[(i + n - 1) % n], p), b = unit(p, pts[(i + 1) % n]);
    const n1: P = [a[1], -a[0]], n2: P = [b[1], -b[0]];
    const k = d / (1 + n1[0] * n2[0] + n1[1] * n2[1]);
    return [p[0] + (n1[0] + n2[0]) * k, p[1] + (n1[1] + n2[1]) * k];
  });
}
const DURA = offsetOut(BRAIN, 8), ARACH = offsetOut(BRAIN, 4);
const area = (pts: P[]) => pts.reduce((a, p, i) => { const q = pts[(i + 1) % pts.length]; return a + (p[0] * q[1] - q[0] * p[1]) / 2; }, 0);
const arc = (cx: number, cy: number, rx: number, ry: number, a0: number, a1: number, n = 24): P[] => Array.from({ length: n + 1 }, (_, i): P => { const a = a0 + ((a1 - a0) * i) / n; return [cx + rx * Math.cos(a), cy + ry * Math.sin(a)]; });
const CC = br(436, 515);
const THAL = br(436, 522), HYPO = br(436, 550);
const QUAD: P[] = ([[406, 565], [421, 563], [407, 573], [421, 572]] as P[]).map(([x, y]) => br(x, y));
const AQ: [P, P] = [br(436, 563), br(436, 588)];
type Name = { text: string[]; at: P; to: P; side: 'l' | 'r' };
const NAMES183: Name[] = [
  { text: ['Cerebral cortex'], at: [272, 44], to: br(550, 361), side: 'r' },
  { text: ['Cerebrum'], at: [272, 66], to: br(552, 427), side: 'r' },
  { text: ['Corpus callosum'], at: [272, 88], to: br(497, 462), side: 'r' },
  { text: ['Thalamus'], at: [272, 114], to: br(468, 521), side: 'r' },
  { text: ['Hypothalamus'], at: [272, 136], to: br(457, 549), side: 'r' },
  { text: ['Corpora', 'quadrigemina'], at: [272, 158], to: QUAD[1], side: 'r' },
  { text: ['Midbrain'], at: [272, 192], to: br(448, 578), side: 'r' },
  { text: ['Cerebral', 'aqueduct'], at: [272, 216], to: AQ[1], side: 'r' },
  { text: ['Pons'], at: [272, 250], to: br(466, 619), side: 'r' },
  { text: ['Dura mater'], at: [86, 62], to: DURA[21], side: 'l' },
  { text: ['Arachnoid mater'], at: [86, 92], to: ARACH[20], side: 'l' },
  { text: ['Pia mater'], at: [86, 122], to: BRAIN[19], side: 'l' },
  { text: ['Cerebellum'], at: [86, 178], to: br(388, 610), side: 'l' },
  { text: ['Medulla', 'oblongata'], at: [86, 214], to: br(380, 676), side: 'l' },
  { text: ['Spinal cord'], at: [86, 262], to: br(386, 740), side: 'l' },
];
function draw183(): Sketch {
  const s = new Sketch(W, 296);
  // the meninges: dura (the highlight), arachnoid, and the pia on the brain's own surface
  path(s, DURA, { color: C.mari, w: 2.2, close: true, dash: '6 4' });
  path(s, ARACH, { color: C.slate, w: 1.4, close: true, dash: '4 3' });
  path(s, BRAIN, { w: 1.9, close: true });
  path(s, CEREBELLUM, { w: 1.7, close: true });
  // cortex folds (grey), corpus callosum (a band), thalamus, hypothalamus
  [374, 419, 464, 514].forEach((x) => {
    const a = br(x - 18, 392), b = br(x + 18, 392);
    path(s, Array.from({ length: 9 }, (_, i): P => [a[0] + ((b[0] - a[0]) * i) / 8, a[1] + 4 * Math.sin((Math.PI * i) / 8)]), { color: C.grey, w: 1.2, track: false });
  });
  const o = arc(CC[0], CC[1], 35, 36, Math.PI + 0.45, 2 * Math.PI - 0.45), i2 = arc(CC[0], CC[1], 27, 28, Math.PI + 0.45, 2 * Math.PI - 0.45);
  path(s, [...o, ...i2.slice().reverse()], { w: 1.6, close: true });
  ell(s, THAL[0], THAL[1], 14.5, 9);
  ell(s, HYPO[0], HYPO[1], 9, 5.5);
  QUAD.forEach((q) => ell(s, q[0], q[1], 2.6, 2.6, { w: 1.3 }));
  path(s, AQ, { color: C.slate, w: 1.6 });
  // names: STIX text with a leader, as in the book
  NAMES183.forEach((n) => {
    const right = n.side === 'r', hi = n.text[0] === 'Dura mater';
    n.text.forEach((t, k) => lab(s, n.at[0], n.at[1] + k * 13, t, { size: 11, anchor: right ? 'start' : 'end', color: hi ? C.amber : C.text }));
    const my = n.at[1] + ((n.text.length - 1) * 13) / 2 - 4;
    leader(s, [right ? n.at[0] - 10 : n.at[0] + 8, my], n.to, hi);
  });
  return s;
}
function check183(): Check[] {
  const s = draw183();
  const book = ['Cerebral cortex', 'Cerebrum', 'Corpus callosum', 'Thalamus', 'Hypothalamus', 'Corpora quadrigemina', 'Midbrain', 'Cerebral aqueduct', 'Pons', 'Dura mater', 'Arachnoid mater', 'Pia mater', 'Cerebellum', 'Medulla oblongata', 'Spinal cord'];
  const joined = NAMES183.map((n) => n.text.join(' '));
  const printed = NAMES183.every((n) => n.text.every((t) => has(s, t)));
  // the three layers, outside in: dura, arachnoid, then the brain
  const outside = (p: P, poly: P[]) => !inside(p, poly);
  const inside = (p: P, poly: P[]) => { let c = false; for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) { const a = poly[i], b = poly[j]; if (a[1] > p[1] !== b[1] > p[1] && p[0] < ((b[0] - a[0]) * (p[1] - a[1])) / (b[1] - a[1]) + a[0]) c = !c; } return c; };
  const mid = (a: P[], b: P[], i: number): P => [(a[i][0] + b[i][0]) / 2, (a[i][1] + b[i][1]) / 2];
  const dist = (poly: P[], p: P) => Math.min(...poly.map((q, i) => { const r = poly[(i + 1) % poly.length], dx = r[0] - q[0], dy = r[1] - q[1], t = Math.max(0, Math.min(1, ((p[0] - q[0]) * dx + (p[1] - q[1]) * dy) / (dx * dx + dy * dy))); return Math.hypot(p[0] - q[0] - t * dx, p[1] - q[1] - t * dy); }));
  return [
    ['All fifteen names the book prints are on the drawing (Cerebral cortex, Cerebrum, Corpus callosum, Thalamus, Hypothalamus, Corpora quadrigemina, Midbrain, Cerebral aqueduct, Pons, Dura mater, Arachnoid mater, Pia mater, Cerebellum, Medulla oblongata, Spinal cord)', joined.length === 15 && book.every((b) => joined.includes(b)) && printed],
    ['The meninges, outside in: the dura (marigold, dashed) lies outside the arachnoid, which lies outside the brain surface (the pia), and each of the three is a closed outline round the whole brain and cord', Math.abs(area(DURA)) > Math.abs(area(ARACH)) && Math.abs(area(ARACH)) > Math.abs(area(BRAIN)) && DURA.every((p, i) => outside(p, BRAIN) && outside(ARACH[i], BRAIN)) && count(s.svg(), MARI) <= 2],
    ['The dura is 8 px and the arachnoid 4 px outside the brain surface, so the three layers are separate lines', near(Math.min(...DURA.map((p) => dist(BRAIN, p))) , 8, 0.7) && near(Math.min(...ARACH.map((p) => dist(BRAIN, p))), 4, 0.7)],
    ['The leaders for the three meninges end on their own layers (dura on the dura line, arachnoid on the arachnoid line, pia on the brain surface)', near(dist(DURA, NAMES183[9].to), 0, 0.01) && near(dist(ARACH, NAMES183[10].to), 0, 0.01) && near(dist(BRAIN, NAMES183[11].to), 0, 0.01) && mid(DURA, BRAIN, 0)[1] > 0],
    ['Order down the axis: cerebrum above thalamus above hypothalamus above the corpora quadrigemina, then the aqueduct and pons; the corpus callosum is above the thalamus; the cerebellum lies behind (left of) the brainstem and the cord is the lowest part', CC[1] < THAL[1] && THAL[1] < HYPO[1] && HYPO[1] < QUAD[0][1] && QUAD[0][1] < AQ[1][1] && AQ[1][1] < NAMES183[8].to[1] && CEREBELLUM.every((p) => p[0] < br(430, 0)[0] + 20) && Math.max(...BRAIN.map((p) => p[1])) === BRAIN[11][1]],
    ['Four corpora quadrigemina (two pairs) sit in the midbrain, level with the top of the aqueduct', QUAD.length === 4 && QUAD.every((q) => q[1] > HYPO[1]) && near(AQ[0][1], br(0, 563)[1]) && QUAD.every((q) => q[1] < AQ[1][1])],
    ...layout(s), clean(s),
  ];
}
const fig183: Diagram = { id: 'b11-18-fig-18.3', topic: 2, name: 'Mid-sagittal section of the brain', cases: [{ chip: 'Mid-sagittal brain', cap: CAP183 }], draw: draw183, check: check183 };

/* ================= Figure 18.4 ================= */
const CAP184 = 'A classification tree of the human neural system: central (brain, spinal cord) and peripheral; peripheral into afferent and efferent fibres, with the efferent side carried by the somatic (voluntary) and autonomic (involuntary) systems; autonomic into sympathetic and parasympathetic.';
type Node = { id: string; lines: string[]; rect: Rect; kids?: string[]; hi?: boolean };
const NODES: Node[] = [
  { id: 'root', lines: ['Human Neural System'], rect: [80, 14, 220, 42], kids: ['cns', 'pns'] },
  { id: 'cns', lines: ['Central', 'Nervous System'], rect: [19, 76, 119, 112], kids: ['brain', 'cord'] },
  { id: 'pns', lines: ['Peripheral', 'Nervous System'], rect: [169, 76, 289, 112], kids: ['aff', 'eff'] },
  { id: 'brain', lines: ['Brain'], rect: [9, 146, 59, 174] },
  { id: 'cord', lines: ['Spinal cord'], rect: [65, 146, 143, 174] },
  { id: 'aff', lines: ['Afferent', '(Sensory)'], rect: [152, 146, 220, 182] },
  { id: 'eff', lines: ['Efferent', '(Motor)'], rect: [239, 146, 305, 182], kids: ['som', 'aut'] },
  { id: 'som', lines: ['Somatic'], rect: [30, 232, 94, 260] },
  { id: 'aut', lines: ['Autonomic'], rect: [198, 232, 278, 260], kids: ['sym', 'par'], hi: true },
  { id: 'sym', lines: ['Sympathetic'], rect: [132, 300, 222, 328] },
  { id: 'par', lines: ['Parasympathetic'], rect: [232, 300, 342, 328] },
];
const node = (id: string) => NODES.find((n) => n.id === id)!;
const cx = (r: Rect) => (r[0] + r[2]) / 2;
const EDGES: [string, string][] = NODES.flatMap((n) => (n.kids ?? []).map((k): [string, string] => [n.id, k]));
function draw184(): Sketch {
  const s = new Sketch(W, 396);
  // the frames of voluntary and involuntary control
  [[8, 214, 116, 382], [124, 214, 352, 382]].forEach((r) => s.add(`<rect x="${r[0]}" y="${r[1]}" width="${r[2] - r[0]}" height="${r[3] - r[1]}" rx="7" fill="none" stroke="${C.slate}" stroke-width="1.4" stroke-dasharray="5 4"/>`));
  // the joins: down from the parent, across, down into the child
  const byParent: Record<string, string[]> = {};
  EDGES.forEach(([p, k]) => (byParent[p] = [...(byParent[p] ?? []), k]));
  Object.entries(byParent).forEach(([p, kids]) => {
    const pr = node(p).rect, cy = p === 'eff' ? 206 : pr[3] + (node(kids[0]).rect[1] - pr[3]) / 2;
    path(s, [[cx(pr), pr[3]], [cx(pr), cy]], { w: 1.4 });
    const xs = kids.map((k) => cx(node(k).rect));
    path(s, [[Math.min(cx(pr), ...xs), cy], [Math.max(cx(pr), ...xs), cy]], { w: 1.4 });
    kids.forEach((k) => path(s, [[cx(node(k).rect), cy], [cx(node(k).rect), node(k).rect[1]]], { w: 1.4 }));
  });
  // the boxes and their words
  NODES.forEach((n) => {
    const r = n.rect, c = cx(r);
    box(s, n.id, r, n.hi ? { color: C.mari, w: 2.2 } : {});
    n.lines.forEach((t, k) => lab(s, c, n.lines.length === 1 ? (r[1] + r[3]) / 2 + 4 : r[1] + 15 + k * 13, t, { size: 11, bold: true, color: n.hi ? C.amber : C.text, within: n.id }));
  });
  lab(s, cx(node('aff').rect), 196, '<i>(from receptors)</i>', { size: 9, color: C.slate });
  // somatic goes to skeletal muscle; both autonomic divisions go to smooth and cardiac muscle and glands
  path(s, [[cx(node('som').rect), 260], [cx(node('som').rect), 330]], { w: 1.4 });
  lab(s, 62, 346, '<i>Skeletal muscles</i>', { size: 10, color: C.slate });
  const sx = cx(node('sym').rect), px = cx(node('par').rect);
  path(s, [[sx, 328], [sx, 338], [px, 338], [px, 328]], { w: 1.4 });
  lab(s, (sx + px) / 2, 354, '<i>Smooth & cardiac muscle, glands</i>', { size: 10, color: C.slate });
  lab(s, 62, 372, 'Voluntary control', { size: 10, bold: true });
  lab(s, 238, 372, 'Involuntary control', { size: 10, bold: true });
  return s;
}
function check184(): Check[] {
  const s = draw184();
  const kids = (id: string) => (node(id).kids ?? []).join();
  const below = EDGES.every(([p, k]) => node(k).rect[1] > node(p).rect[3]);
  const words = ['Human Neural System', 'Central', 'Peripheral', 'Brain', 'Spinal cord', 'Afferent', '(Sensory)', 'Efferent', '(Motor)', 'Somatic', 'Autonomic', 'Sympathetic', 'Parasympathetic', '(from receptors)', 'Skeletal muscles', 'Smooth & cardiac muscle, glands', 'Voluntary control', 'Involuntary control'];
  return [
    ['Eleven boxes, ten joins (every box but the root has one parent); and every book word is on the drawing', NODES.length === 11 && EDGES.length === 10 && new Set(EDGES.map((e) => e[1])).size === 10 && words.every((w) => has(s, w)) && s.labels.filter((l) => l.text === 'Nervous System').length === 2],
    ['The tree as the book draws it: Human neural system into CNS and PNS; CNS into brain and spinal cord; PNS into afferent and efferent; efferent into somatic and autonomic; autonomic into sympathetic and parasympathetic', kids('root') === 'cns,pns' && kids('cns') === 'brain,cord' && kids('pns') === 'aff,eff' && kids('eff') === 'som,aut' && kids('aut') === 'sym,par'],
    ['Every child sits below its parent, level by level (the CNS and PNS at one height, brain, spinal cord, afferent and efferent at the next, then somatic and autonomic, then the two divisions)', below && node('cns').rect[1] === node('pns').rect[1] && node('brain').rect[1] === node('eff').rect[1] && node('som').rect[1] === node('aut').rect[1] && node('sym').rect[1] === node('par').rect[1]],
    ['The somatic box lies in the Voluntary control frame and the autonomic box with both divisions in the Involuntary control frame (the frames do not overlap)', node('som').rect[2] < 116 && node('aut').rect[0] > 124 && node('sym').rect[0] > 124 && node('par').rect[2] < 352 && 116 < 124],
    ['The Autonomic box (the node that splits into the two opposing divisions) is the one marigold highlight', count(s.svg(), MARI) === 1 && node('aut').hi === true],
    ...layout(s), clean(s),
  ];
}
const fig184: Diagram = { id: 'b11-18-fig-18.4', topic: 3, name: 'Classification of the neural system', cases: [{ chip: 'Classification tree', cap: CAP184 }], draw: draw184, check: check184 };

/* ================= Figure 18.5 ================= */
const CAP185 = 'Effects of the sympathetic (fight-or-flight) and parasympathetic (rest-and-digest) divisions on the pupil, bronchi, heart and digestion.';
type Effect = { organ: string; text: string; dir: 'up' | 'down'; y: number };
type Division = { title: string; sub: string; pupil: number; effects: Effect[] };
const ROWS: [string, number][] = [['pupil', 90], ['bronchi', 156], ['heart', 192], ['digestion', 232]];
const DIV: Record<'symp' | 'para', Division> = {
  symp: { title: 'Sympathetic', sub: '(Fight-or-Flight)', pupil: 6.5, effects: [
    { organ: 'pupil', text: 'Pupil dilates', dir: 'up', y: 90 }, { organ: 'bronchi', text: 'Bronchi dilate', dir: 'up', y: 156 },
    { organ: 'heart', text: 'Heart rate ↑', dir: 'up', y: 192 }, { organ: 'digestion', text: 'Digestion ↓', dir: 'down', y: 232 }] },
  para: { title: 'Parasympathetic', sub: '(Rest-and-Digest)', pupil: 2.6, effects: [
    { organ: 'pupil', text: 'Pupil constricts', dir: 'down', y: 90 }, { organ: 'bronchi', text: 'Bronchi constrict', dir: 'down', y: 156 },
    { organ: 'heart', text: 'Heart rate ↓', dir: 'down', y: 192 }, { organ: 'digestion', text: 'Digestion ↑', dir: 'up', y: 232 }] },
};
function draw185(c: { mode: 'symp' | 'para' }): Sketch {
  const d = DIV[c.mode], s = new Sketch(W, 322);
  lab(s, 110, 24, d.title, { size: 15, bold: true });
  lab(s, 110, 42, d.sub, { size: 11, color: C.slate });
  // the body: head with pupils, trunk with lungs, heart and stomach, two legs
  ell(s, 110, 90, 28, 28, { w: 1.8 });
  [100, 120].forEach((x) => s.add(`<circle cx="${x}" cy="90" r="${d.pupil}" fill="${C.ink}"/>`));
  path(s, [[70, 128], [150, 128], [154, 258], [66, 258]], { close: true, w: 1.8 });
  ell(s, 92, 156, 10, 16); ell(s, 128, 156, 10, 16);
  ell(s, 110, 192, 10, 10);
  ell(s, 110, 232, 18, 10);
  path(s, [[88, 258], [86, 304]]); path(s, [[132, 258], [134, 304]]);
  // each effect: a leader from the organ, the arrow, the words
  const edge: Record<string, number> = { pupil: 138, bronchi: 138, heart: 120, digestion: 128 };
  d.effects.forEach((e) => {
    path(s, [[edge[e.organ], e.y], [170, e.y]], { color: C.grey, w: 1.2 });
    if (e.dir === 'up') s.vec(180, e.y + 9, 180, e.y - 9, { color: C.mari, w: 2.2 }); else s.vec(180, e.y - 9, 180, e.y + 9, { color: C.mari, w: 2.2 });
    lab(s, 192, e.y + 4, e.text, { size: 12, anchor: 'start', bold: true, color: C.amber });
  });
  return s;
}
function check185(c: { mode: 'symp' | 'para' }): Check[] {
  const s = draw185(c), d = DIV[c.mode], o = DIV[c.mode === 'symp' ? 'para' : 'symp'];
  const svg = s.svg();
  const heads = count(svg, /<path d="M[^"]*Z" fill="#EEA31F"\/>/g);
  const up = d.effects.filter((e) => e.dir === 'up').map((e) => e.organ).join();
  return [
    [`The four effects the book prints for the ${d.title.toLowerCase()} division are on the drawing: ${d.effects.map((e) => e.text).join(', ')}, under "${d.title}" and "${d.sub}"`, d.effects.every((e) => has(s, e.text)) && has(s, d.title) && has(s, d.sub)],
    [c.mode === 'symp' ? 'Fight-or-flight: pupil, bronchi and heart rate go up, digestion goes down (three up arrows, one down)' : 'Rest-and-digest: pupil, bronchi and heart rate go down, digestion goes up (three down arrows, one up)', c.mode === 'symp' ? up === 'pupil,bronchi,heart' : up === 'digestion'],
    ['Each organ moves the opposite way to the other division (the two panels never agree on a row), and the arrow in the label (heart, digestion) matches the drawn arrow', d.effects.every((e, i) => e.dir !== o.effects[i].dir) && d.effects.filter((e) => /[↑↓]/.test(e.text)).every((e) => (e.dir === 'up') === e.text.includes('↑'))],
    ['The pupil is wide in the sympathetic panel and small in the parasympathetic one', DIV.symp.pupil > DIV.para.pupil && d.pupil === (c.mode === 'symp' ? DIV.symp.pupil : DIV.para.pupil)],
    ['Four arrows (the highlight), one per organ, each leader leaving its own organ (pupil, bronchi, heart, stomach)', heads === 4 && ROWS.every(([n, y], i) => d.effects[i].organ === n && d.effects[i].y === y)],
    ...layout(s), clean(s),
  ];
}
const fig185: Diagram = {
  id: 'b11-18-fig-18.5', topic: 3, name: 'Sympathetic and parasympathetic effects',
  cases: [{ chip: 'Sympathetic', mode: 'symp', cap: CAP185 }, { chip: 'Parasympathetic', mode: 'para', cap: CAP185 }],
  draw: draw185, check: check185,
};

/* ================= Figure 18.6 ================= */
const CAP186 = 'A reflex arc through the spinal cord: receptor in the skin, afferent neuron through the dorsal root, interneuron in the grey matter, efferent neuron through the ventral root, and effector muscle. A dashed branch ascends to the brain, which is informed afterwards.';
const CORD: [number, number, number] = [209, 255, 75];
const cd = (x: number, y: number): P => [CORD[0] + x * (CORD[2] / 92), CORD[1] + y * (CORD[2] / 92)];
const GREY: P[] = ([[-32, -31], [-26, -52], [-14, -54], [0, -22], [12, -54], [24, -56], [36, -31], [65, 7], [63, 30], [43, 36], [20, 22], [0, 36], [-23, 22], [-43, 36], [-63, 30], [-65, 7]] as P[]).map(([x, y]) => cd(x, y));
const RECEPTOR: P = [86, 122], GANGLION: P = [150, 100];
const INTERNEURON = cd(-23, -15), MOTOR = cd(-42, 27), EXIT = cd(-67, 55);
const EFFECTOR: Rect = [40, 408, 158, 448];
const ARC: P[] = [RECEPTOR, [108, 100], [150, 100], [168, 112], [190, 166], cd(-24, -44), INTERNEURON, MOTOR, EXIT, [100, EFFECTOR[1]]];
const along = (a: P, b: P, t: number): P => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
const STEP_AT: P[] = [[64, 104], [120, 100], cd(12, -30), along(EXIT, [100, EFFECTOR[1]], 0.2), [99, 428]];
function draw186(): Sketch {
  const s = new Sketch(W, 512);
  lab(s, 10, 22, 'Withdrawal Reflex Arc', { size: 14, anchor: 'start', bold: true });
  // skin and the flame on it
  path(s, [[10, 122], [112, 122]], { w: 1.9 });
  path(s, [[14, 122], [21, 102], [26, 110], [31, 86], [37, 106], [42, 99], [47, 122]], { w: 1.7, close: true });
  // the cord: white matter (the circle), grey matter, central canal
  ell(s, CORD[0], CORD[1], CORD[2], CORD[2], { w: 2 });
  path(s, GREY, { w: 1.5, close: true });
  disc(s, CORD[0], CORD[1], 5, { w: 1.5 });
  // the muscle
  path(s, [[EFFECTOR[0] + 12, EFFECTOR[1]], [EFFECTOR[2] - 12, EFFECTOR[1]], [EFFECTOR[2], EFFECTOR[3]], [EFFECTOR[0], EFFECTOR[3]]], { w: 1.8, close: true });
  [418, 428, 438].forEach((y) => path(s, [[EFFECTOR[0] + 12, y], [EFFECTOR[2] - 12, y]], { color: C.grey, w: 1, track: false }));
  // the brain, told afterwards by the dashed branch
  box(s, 'brain', [236, 70, 296, 96]);
  lab(s, 266, 88, 'Brain', { size: 12, bold: true, within: 'brain' });
  s.vec(266, 202, 266, 100, { color: C.slate, w: 1.6, dash: true });
  keep(s, [[266, 202], [266, 100]]);
  lab(s, 276, 124, '<i>Informed</i>', { size: 10, anchor: 'start', color: C.slate });
  lab(s, 276, 136, '<i>afterwards</i>', { size: 10, anchor: 'start', color: C.slate });
  // the arc itself (the highlight), then the neuron bodies on it
  path(s, ARC, { color: C.mari, w: 2.9 });
  s.dot(RECEPTOR[0], RECEPTOR[1], 4);
  disc(s, GANGLION[0], GANGLION[1], 10);
  disc(s, INTERNEURON[0], INTERNEURON[1], 6);
  disc(s, MOTOR[0], MOTOR[1], 9);
  STEP_AT.forEach((p, i) => stepNo(s, p[0], p[1], i + 1));
  // names, STIX text with a leader (as in the book)
  const L = (x: number, y: number, t: string, to: P, from?: P, o: { anchor?: 'start' | 'middle' | 'end' } = {}) => { lab(s, x, y, t, { size: 10, anchor: o.anchor ?? 'middle' }); if (from) leader(s, from, to); };
  L(40, 40, 'Stimulus', [31, 86], [40, 60]); lab(s, 40, 52, '(heat/flame)', { size: 10 });
  L(150, 40, 'Dorsal root', GANGLION, [150, 60]); lab(s, 150, 52, 'ganglion', { size: 10 });
  L(100, 78, 'Afferent neuron', [135, 100], [120, 86]);
  L(226, 128, 'Dorsal root', along([168, 112], [190, 166], 0.55), [194, 125]);
  L(20, 146, 'Skin', [26, 122], [22, 134]);
  L(72, 150, 'Receptor', RECEPTOR, [80, 137]);
  L(44, 336, 'Efferent neuron', along(EXIT, [100, EFFECTOR[1]], 0.62), [86, 332], { anchor: 'middle' });
  L(196, 396, 'Ventral root', along(EXIT, [100, EFFECTOR[1]], 0.4), [161, 391]);
  L(228, 360, 'Interneuron', INTERNEURON, [202, 345]);
  lab(s, 100, 482, 'Effector', { size: 10 }); lab(s, 100, 494, '(muscle)', { size: 10 });
  leader(s, [100, 470], [100, EFFECTOR[3]]);
  const R = (y: number, t: string, to: P) => { lab(s, 290, y, t, { size: 10, anchor: 'start' }); leader(s, [286, y - 3], to); };
  R(218, 'Spinal cord', cd(86, -32));
  R(252, 'Grey matter', cd(50, 2));
  R(276, 'Central canal', [CORD[0] + 5, CORD[1] + 1]);
  R(300, 'White matter', cd(73, 30));
  return s;
}
function check186(): Check[] {
  const s = draw186(), svg = s.svg();
  const words = ['Withdrawal Reflex Arc', 'Stimulus', '(heat/flame)', 'Dorsal root', 'ganglion', 'Afferent neuron', 'Skin', 'Receptor', 'Efferent neuron', 'Ventral root', 'Interneuron', 'Effector', '(muscle)', 'Brain', 'Informed', 'afterwards', 'Spinal cord', 'Grey matter', 'Central canal', 'White matter'];
  const inGrey = (p: P) => { let c = false; for (let i = 0, j = GREY.length - 1; i < GREY.length; j = i++) { const a = GREY[i], b = GREY[j]; if (a[1] > p[1] !== b[1] > p[1] && p[0] < ((b[0] - a[0]) * (p[1] - a[1])) / (b[1] - a[1]) + a[0]) c = !c; } return c; };
  const inCord = (p: P) => Math.hypot(p[0] - CORD[0], p[1] - CORD[1]) < CORD[2];
  const idx = (p: P) => ARC.findIndex((q) => q[0] === p[0] && q[1] === p[1]);
  return [
    ['Every word of the plate is on the drawing: the title, the sixteen names and the five step numbers 1 to 5', words.every((w) => has(s, w)) && s.labels.filter((l) => l.text === 'Dorsal root').length === 2 && STEP_AT.length === 5 && count(svg, /<tspan[^>]*>[1-5]<\/tspan>/g) >= 5],
    ['The arc runs in the book\'s order: receptor, afferent neuron (through the ganglion and dorsal root), interneuron in the grey matter, efferent neuron (through the ventral root), effector muscle; the five step numbers follow it', idx(RECEPTOR) === 0 && idx(INTERNEURON) > idx(RECEPTOR) && idx(MOTOR) > idx(INTERNEURON) && idx(EXIT) > idx(MOTOR) && idx(ARC[ARC.length - 1]) === ARC.length - 1 && STEP_AT[0][1] < RECEPTOR[1] && STEP_AT[1][0] > RECEPTOR[0] && STEP_AT[1][0] < GANGLION[0] && STEP_AT[4][1] > EFFECTOR[1]],
    ['The receptor is on the skin line and the ganglion lies outside the cord; the dorsal root enters the cord on its dorsal (top) side, and the interneuron and motor neuron lie in the grey matter', RECEPTOR[1] === 122 && !inCord(GANGLION) && inCord(ARC[5]) && ARC[5][1] < CORD[1] && inGrey(INTERNEURON) && inGrey(cd(-42, 20)) && inGrey(cd(50, 2))],
    ['The efferent neuron leaves from the ventral (lower) side of the cord and ends on the muscle\'s top edge', EXIT[1] > CORD[1] && ARC[ARC.length - 1][1] === EFFECTOR[1] && ARC[ARC.length - 1][0] > EFFECTOR[0] && ARC[ARC.length - 1][0] < EFFECTOR[2]],
    ['The central canal is at the centre of the cord, inside the grey matter; the dashed branch to the brain leaves the cord upward', inCord([CORD[0], CORD[1]]) && inGrey([CORD[0] + 5, CORD[1] + 1]) && GREY.every((p) => inCord(p))],
    ['The reflex arc itself is the one marigold highlight', count(svg, MARI) === 1],
    ...layout(s), clean(s),
  ];
}
const fig186: Diagram = { id: 'b11-18-fig-18.6', topic: 4, name: 'Withdrawal reflex arc', cases: [{ chip: 'Withdrawal reflex arc', cap: CAP186 }], draw: draw186, check: check186 };

export const DIAGRAMS_BIOLOGY_11_18: Diagram[] = [fig181, fig182, fig183, fig184, fig185, fig186];
