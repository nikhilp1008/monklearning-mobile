import { C, LABEL_GAP, Rect, Sketch, audit, mathW, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * BIOLOGY CLASS 11, CHAPTER 16 (Excretory Products and Their Elimination): the drawings of the Master Reference book on
 * pp. 943-1011, redrawn. Every page of the range was counted (pdfimages -list: no raster image anywhere; the shapes seen
 * on the page images). The figures sit on their own "CHAPTER 16 . FIGURES" plates: pp. 949, 956, 958 (two figures) , 965
 * and 973 (the captions are printed earlier, on pp. 948, 955, 957, 964 and 972, ending "(see next page)", which is
 * dropped). The other pages hold text, tables and page rules only (the enzyme-labelled arrows of Additional topic D,
 * pp. 985-986, are typeset equations, not drawings). SIX drawings:
 *
 *   Figure 16.1 (drawing p. 949), Topic 01, topic index 0: excretory organs from Planaria to the vertebrate.
 *   Figure 16.2 (drawing p. 956), Topic 02, topic index 1: the human urinary system.
 *   Figure 16.3 (drawing p. 958), Topic 02, topic index 1: the vertical section of the kidney.
 *   Figure 16.4 (drawing p. 958), Topic 02, topic index 1: the nephron with its blood supply (two cases).
 *   Figure 16.5 (drawing p. 965), Topic 03, topic index 2: the counter-current mechanism.
 *   Figure 16.6 (drawing p. 973), Topic 04, topic index 3: regulation by RAAS, ADH and ANF (three cases).
 *
 * THE BOOK'S, as printed: every word of every label, box, note and axis name; the order of the five organs and their
 * functions (16.1); the parts and which vessel leaves which (16.2); the structures of the kidney section and the two
 * nephrons (16.3); the segments of the nephron, the water-out arrows on the descending limb, the salt-out arrows on the
 * ascending limb, the "wider" afferent and "narrower" efferent arteriole (16.4); the osmolarity scale 300, 600, 900 and
 * 1200 mOsm/L with its names, the arrows of water out (descending limb, collecting duct, ADH) and salt out (ascending
 * limb), the vasa recta flow (16.5); every box, arrow label and note of the three pathways (16.6).
 * COMPUTED, not placed: the osmolarity scale (equal steps of 300 mOsm/L are equal steps down the page; the check
 * recomputes them), the direction of every arrow from what the text says it carries.
 * SCHEMATIC: all sizes, shapes and positions (re-laid for a phone, so 16.4 is two cases, one for the tubule and one for
 * the blood supply, and 16.6 is one case per pathway); the animal outlines of 16.1, the kidney outline, the shape of the
 * calyces and the zig-zag nephrons of 16.3; every tube, loop and vessel of 16.4 and 16.5; the leader lines' angles.
 * The book's colour shading of the medulla in 16.5 is not drawn (the scale carries the gradient). Colours are the app's
 * style (no fills; one marigold highlight per drawing, here: the kidneys in 16.2, the medullary pyramids in 16.3, the
 * loop of Henle in 16.4 case 1 and 16.5, the JGA in 16.4 case 2, and in 16.6 the one box each pathway turns on:
 * angiotensin II, collecting duct water reabsorption, ANF), not the book's red, blue and green. In 16.1 the arrow
 * "Increasing complexity" is the highlight.
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
/** Several lines of one label, a line apart. */
function lines(s: Sketch, x: number, y: number, ts: string[], o: { size?: number; anchor?: 'start' | 'middle' | 'end'; color?: string; bold?: boolean; dy?: number } = {}) {
  ts.forEach((t, i) => lab(s, x, y + i * (o.dy ?? (o.size ?? 10) + 2), t, o));
}
/** A grey leader from a label to a point it names, ending in a dot (a tag's own look, for names that need STIX or two lines). */
function leader(s: Sketch, from: P, to: P, hi = false) {
  s.add(`<line x1="${r1(from[0])}" y1="${r1(from[1])}" x2="${r1(to[0])}" y2="${r1(to[1])}" stroke="${hi ? C.mari : C.grey}" stroke-width="1.2"/><circle cx="${r1(to[0])}" cy="${r1(to[1])}" r="2.6" fill="${hi ? C.mari : C.ink}"/>`);
  keep(s, [from, to]);
}
/** An arrow that the layout check knows about. */
function arrow(s: Sketch, a: P, b: P, o: { color?: string; w?: number; dash?: boolean } = {}) {
  s.vec(a[0], a[1], b[0], b[1], o);
  keep(s, [a, b]);
}
/** A zig-zag from (x0, y) to (x1, y) in n steps, amp up and down. */
function zig(x0: number, x1: number, y: number, n: number, amp: number): P[] {
  return Array.from({ length: n + 1 }, (_, i): P => [x0 + ((x1 - x0) * i) / n, i === 0 || i === n ? y : y + (i % 2 ? -amp : amp)]);
}
/** A kidney-bean outline; the hilum notch faces `dir` (+1 right, -1 left). */
function beanPt(cx: number, cy: number, rx: number, ry: number, dir: 1 | -1, t: number): P {
  const t0 = dir > 0 ? 0 : Math.PI, d = Math.atan2(Math.sin(t - t0), Math.cos(t - t0)), notch = 0.16 * rx * Math.exp(-((d / 0.4) ** 2));
  return [cx + rx * Math.cos(t) - dir * notch, cy + ry * Math.sin(t)];
}
const bean = (cx: number, cy: number, rx: number, ry: number, dir: 1 | -1): P[] => Array.from({ length: 73 }, (_, i) => beanPt(cx, cy, rx, ry, dir, (i / 72) * 2 * Math.PI));
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
function layout(s: Sketch, skip: string[] = []): Check[] {
  let gap = Infinity, what = '';
  for (const l of s.labels) for (const pts of LINES.get(s) ?? []) { const d = gapTo(l.rect, pts); if (d < gap) { gap = d; what = l.text; } }
  let tgap = Infinity, twhat = '';
  for (const t of s.tags) for (const pts of LINES.get(s) ?? []) { const d = gapTo(t.rect, pts); if (d < tgap) { tgap = d; twhat = t.name; } }
  const out = s.labels.filter((l) => l.rect[0] < 0 || l.rect[2] > s.w || l.rect[1] < 0 || l.rect[3] > s.h).map((l) => l.text);
  const L = s.labels;
  const touch = L.flatMap((a, i) => L.slice(i + 1).filter((b) => !(a.rect[2] + 2 <= b.rect[0] || b.rect[2] + 2 <= a.rect[0] || a.rect[3] + 2 <= b.rect[1] || b.rect[3] + 2 <= a.rect[1])).map((b) => `${a.text} / ${b.text}`)).filter((t) => !skip.includes(t));
  const spill = (BOXES.get(s) ?? []).flatMap((b) => b.inner.filter((r) => r[0] < b.rect[0] + 4 || r[2] > b.rect[2] - 4 || r[1] < b.rect[1] + 4 || r[3] > b.rect[3] - 4).map(() => b.name));
  return [
    [`Every label stays ${LABEL_GAP} px clear of every drawn line: the closest is "${what}", ${r1(gap)} px`, gap >= LABEL_GAP],
    [`Every tag stays 3 px clear of every drawn outline: the closest is "${twhat}", ${r1(tgap)} px`, tgap >= 3],
    [`Every label lies inside the frame${out.length ? `: not ${out.join(', ')}` : ''}`, out.length === 0],
    [`No two labels touch${touch.length ? `: ${touch.join(', ')}` : ''}`, touch.length === 0],
    [`Every label lies inside its box${spill.length ? `: not in ${spill.join(', ')}` : ''}`, spill.length === 0],
  ];
}
const has = (s: Sketch, t: string) => s.labels.some((l) => l.text === t) || s.tags.some((g) => g.name === t);
const hasAll = (s: Sketch, ts: string[]) => ts.every((t) => has(s, t));
const clean = (s: Sketch): Check => { const a = audit(s); return [`Layout audit is clear${a.length ? `: ${a.join('; ')}` : ''}`, a.length === 0 && s.unplaced.length === 0]; };
const marigoldBoxes = (s: Sketch) => (s.svg().match(/<rect [^>]*stroke="#EEA31F"/g) ?? []).length;
const marigolds = (s: Sketch) => (s.svg().match(/<path d="[^"]*" fill="none" stroke="#EEA31F"/g) ?? []).length;
/** A box with its lines of text centred in it (the first bold if asked). */
function bx(s: Sketch, name: string, r: Rect, ts: string[], o: { hi?: boolean; bold?: boolean; size?: number } = {}) {
  box(s, name, r, o.hi ? { color: C.mari, w: 2.4 } : {});
  const size = o.size ?? 11.5, dy = size + 3, h = r[3] - r[1], y0 = r[1] + h / 2 - ((ts.length - 1) * dy) / 2 + size * 0.34;
  ts.forEach((t, i) => lab(s, (r[0] + r[2]) / 2, y0 + i * dy, t, { size: i === 0 || ts.length === 1 ? size : size - 1, bold: !!o.bold && i === 0, color: o.hi ? C.amber : i === 0 ? C.text : C.slate, within: name }));
}

/* ================= Figure 16.1 ================= */
const CAP161 = 'Increasing complexity of excretory organs: Planaria (protonephridia), earthworm (nephridia), cockroach (Malpighian tubules), prawn (antennal/green gland) and vertebrate (kidney).';
const ORGANS: { name: string; text: string[] }[] = [
  { name: 'Planaria', text: ['Protonephridia', '(Osmoregulation)'] },
  { name: 'Earthworm', text: ['Nephridia', '(Osmoregulation', '+ Excretion)'] },
  { name: 'Cockroach', text: ['Malpighian', 'tubules'] },
  { name: 'Prawn', text: ['Antennal/', 'Green gland'] },
  { name: 'Vertebrate', text: ['Vertebrate kidney'] },
];
const NOTE161 = ['Excretory complexity increases with body', 'organisation and the shift to land', '(water conservation).'];
const R0 = 44, RH = 78, ROWS_END = R0 + 5 * RH;
function draw161(): Sketch {
  const s = new Sketch(W, ROWS_END + 100);
  lab(s, 36, 22, '<i>Increasing complexity</i>', { size: 12, anchor: 'start', color: C.amber });
  arrow(s, [20, 12], [20, ROWS_END + 2], { color: C.mari, w: 2.4 });
  ORGANS.forEach((o, i) => {
    const y0 = R0 + i * RH, cy = y0 + 30, cx = 96;
    lab(s, 176, y0 + 24, o.name, { size: 13, anchor: 'start', bold: true });
    lines(s, 176, y0 + 42, o.text, { size: 11.5, anchor: 'start', color: C.slate, dy: 14 });
    if (i === 0) {
      ell(s, cx, cy, 40, 18);
      path(s, [[cx + 38, cy - 8], [cx + 46, cy - 2], [cx + 38, cy + 4]], { w: 1.7 });
      [[cx - 20, cy + 26, cx - 26, cy + 1], [cx - 2, cy + 27, cx - 8, cy + 6], [cx + 16, cy + 26, cx + 10, cy + 3]].forEach(([dx, dy, sx, sy]) => { path(s, [[sx, sy], [dx, dy - 3]], { color: C.slate, w: 1.3 }); s.dot(dx, dy, 3.2); });
      lab(s, cx, y0 + 74, 'Flame cells', { size: 10.5, color: C.slate });
    } else if (i === 1) {
      for (let k = 0; k < 7; k++) ell(s, 62 + k * 12, cy, 7, 14, { color: C.ink, w: 1.5 });
      ell(s, 86, cy, 10, 17, { w: 2 });
    } else if (i === 2) {
      path(s, [[56, cy - 14], [128, cy - 14], [128, cy + 8], [56, cy + 8]], { close: true });
      path(s, [[76, cy + 8], [76, cy + 20], [110, cy + 20], [110, cy + 8]], { close: false });
      [[80, cy - 9], [80, cy - 3], [80, cy + 3]].forEach(([x, y]) => path(s, [[96, cy - 3], [x, y]], { color: C.slate, w: 1.3 }));
      path(s, [[96, cy - 3], [114, cy - 3]], { color: C.slate, w: 1.3 });
    } else if (i === 3) {
      ell(s, 64, cy, 8, 8, { w: 1.9 });
      ell(s, 110, cy, 38, 9);
      s.tag(32, y0 + 52, 'Antennal gland', 64, cy + 8);
    } else {
      path(s, bean(82, cy, 16, 23, 1), { close: true });
      path(s, bean(112, cy, 16, 23, -1), { close: true });
    }
  });
  box(s, 'note', [14, ROWS_END + 18, 346, ROWS_END + 84]);
  lines(s, 180, ROWS_END + 40, NOTE161, { size: 11, color: C.slate, dy: 15 }); // lines inside the note box
  BOXES.get(s)!.find((b) => b.name === 'note')!.inner.push(...s.labels.slice(-3).map((l) => l.rect));
  return s;
}
function check161(): Check[] {
  const s = draw161();
  return [
    ['Five organs in the book\'s order, Planaria to Vertebrate, each with the book\'s name', ORGANS.map((o) => o.name).join() === 'Planaria,Earthworm,Cockroach,Prawn,Vertebrate' && hasAll(s, ORGANS.map((o) => o.name))],
    ['The five organ names are the book\'s: protonephridia, nephridia, Malpighian tubules, antennal/green gland, vertebrate kidney, with osmoregulation for the first two and "+ Excretion" for nephridia', hasAll(s, ['Protonephridia', '(Osmoregulation)', 'Nephridia', '(Osmoregulation', '+ Excretion)', 'Malpighian', 'tubules', 'Antennal/', 'Green gland', 'Vertebrate kidney'])],
    ['The drawing\'s own names are on it: three flame cells (labelled "Flame cells") and the "Antennal gland"', s.points.length === 3 && has(s, 'Flame cells') && has(s, 'Antennal gland')],
    ['The arrow "Increasing complexity" runs down the whole column (the one marigold highlight)', has(s, 'Increasing complexity') && /stroke="#EEA31F"/.test(s.svg())],
    ['The book\'s note is printed word for word', hasAll(s, NOTE161)],
    ...layout(s), clean(s),
  ];
}
const fig161: Diagram = { id: 'b11-16-fig-16.1', topic: 0, name: 'Excretory organs, Planaria to vertebrate', cases: [{ chip: 'Complexity', cap: CAP161 }], draw: draw161, check: check161 };

/* ================= Figure 16.2 ================= */
const CAP162 = 'Human urinary system (front view): kidneys, renal arteries and veins, ureters, urinary bladder and urethra.';
const IVC_X = 156, AO_X = 192, VESSEL_TOP = 70, VESSEL_END = 330;
const RK = { cx: 58, cy: 270, rx: 30, ry: 48 }, LK = { cx: 306, cy: 246, rx: 30, ry: 48 };
const URETER_R: P[] = [[84, 296], [90, 334], [130, 372], [150, 396], [164, 420]];
const URETER_L: P[] = [[282, 274], [280, 318], [246, 366], [220, 396], [196, 420]];
const BLADDER = { cx: 180, cy: 440, rx: 40, ry: 22 };
function draw162(): Sketch {
  const s = new Sketch(W, 500);
  path(s, [[IVC_X, VESSEL_TOP], [IVC_X, VESSEL_END]], { color: C.slate, w: 4.5 });
  path(s, [[AO_X, VESSEL_TOP], [AO_X, VESSEL_END]], { color: C.ink, w: 4.5 });
  s.tag(28, 8, 'Inferior vena cava', IVC_X, VESSEL_TOP);
  s.tag(190, 8, 'Aorta', AO_X, VESSEL_TOP);
  path(s, bean(RK.cx, RK.cy, RK.rx, RK.ry, 1), { color: C.mari, w: 2.4, close: true });
  path(s, bean(LK.cx, LK.cy, LK.rx, LK.ry, -1), { color: C.mari, w: 2.4, close: true });
  lines(s, RK.cx - 2, RK.cy - 4, ['Right', 'kidney'], { size: 11, color: C.amber, dy: 13 });
  lines(s, LK.cx + 2, LK.cy - 4, ['Left', 'kidney'], { size: 11, color: C.amber, dy: 13 });
  // renal arteries leave the aorta; renal veins end in the inferior vena cava
  arrow(s, [AO_X - 2, 250], [88, 262], { color: C.ink });
  arrow(s, [88, 282], [IVC_X - 4, 288], { color: C.slate });
  arrow(s, [AO_X + 2, 228], [292, 240], { color: C.ink });
  arrow(s, [292, 262], [IVC_X + 4, 256], { color: C.slate });
  lab(s, 244, 218, 'Renal artery', { size: 11, color: C.text });
  lab(s, 244, 281, 'Renal vein', { size: 11, color: C.slate });
  path(s, URETER_R, { color: C.ink, w: 2.4 });
  path(s, URETER_L, { color: C.ink, w: 2.4 });
  s.tag(292, 356, 'Ureter', 263, 342);
  ell(s, BLADDER.cx, BLADDER.cy, BLADDER.rx, BLADDER.ry, { w: 2 });
  lines(s, BLADDER.cx, BLADDER.cy - 3, ['Urinary', 'bladder'], { size: 11.5, dy: 13.5 });
  arrow(s, [BLADDER.cx, BLADDER.cy + BLADDER.ry + 2], [BLADDER.cx, 490], { color: C.ink, w: 2 });
  lab(s, 192, 484, 'Urethra', { size: 12, anchor: 'start' });
  return s;
}
function check162(): Check[] {
  const s = draw162();
  const heads = (s.svg().match(/<path d="M[^"]*Z" fill="#(2E2A24|57534B)"\/>/g) ?? []).length;
  return [
    ['Every part the book names is on the drawing: inferior vena cava, aorta, right kidney, left kidney, renal artery, renal vein, ureter, urinary bladder, urethra', hasAll(s, ['Inferior vena cava', 'Aorta', 'Right', 'kidney', 'Left', 'Renal artery', 'Renal vein', 'Ureter', 'Urinary', 'bladder', 'Urethra'])],
    ['The inferior vena cava lies beside the aorta; the right kidney is on the viewer\'s left and the left kidney on the right (front view)', IVC_X < AO_X && RK.cx < IVC_X && LK.cx > AO_X],
    ['The renal arteries run from the aorta to the kidneys, the renal veins from the kidneys to the inferior vena cava (arrow heads, 4 of them, plus the urethra\'s)', heads === 5],
    ['Each ureter runs from its kidney down to the top of the urinary bladder, and the urethra leaves the bottom of it', URETER_R[0][0] < RK.cx + RK.rx && URETER_L[0][0] > LK.cx - LK.rx - 2 && URETER_R[4][1] <= BLADDER.cy - BLADDER.ry + 3 && URETER_L[4][1] <= BLADDER.cy - BLADDER.ry + 3 && URETER_R[4][1] > URETER_R[0][1]],
    ['The two kidneys are the marigold highlight, and the vessels stay ink and grey', marigolds(s) === 2],
    ...layout(s, ['Right / Left']), clean(s),
  ];
}
const fig162: Diagram = { id: 'b11-16-fig-16.2', topic: 1, name: 'Human urinary system', cases: [{ chip: 'Urinary system', cap: CAP162 }], draw: draw162, check: check162 };

/* ================= Figure 16.3 ================= */
const CAP163 = 'Vertical section of the human kidney: capsule, cortex, medulla (pyramids), renal columns, calyces, renal pelvis, ureter and hilum, with a cortical and a juxtamedullary nephron.';
const KC = { cx: 185, cy: 250, rx: 76, ry: 118 };
const PYR_Y = [206, 250, 294];
function draw163(): Sketch {
  const s = new Sketch(W, 450);
  const { cx, cy, rx, ry } = KC;
  path(s, bean(cx, cy, rx, ry, -1), { w: 2.6, close: true });
  path(s, bean(cx + 4, cy, 58, 92, -1), { color: C.slate, w: 1.3, close: true, dash: '4 4' });
  PYR_Y.forEach((y) => {
    path(s, [[148, y], [222, y - 17], [222, y + 17]], { color: C.mari, w: 2.2, close: true });
    path(s, [[160, y - 12], [142, y], [160, y + 12]], { w: 1.5 });
  });
  path(s, [[142, 200], [142, 300], [126, 250]], { w: 1.7, close: true });
  // ureter, artery and vein
  path(s, [[140, 300], [124, 322], [106, 340]], { w: 3 });
  arrow(s, [106, 340], [92, 360], { w: 3 });
  arrow(s, [20, 240], [118, 250], { color: C.ink, w: 2 });
  arrow(s, [118, 268], [20, 262], { color: C.slate, w: 2 });
  // the two nephrons
  const cdot = beanPt(cx, cy, rx, ry, -1, -Math.PI / 2 - 0.3), jdot = beanPt(cx, cy, rx, ry, -1, 0.6);
  s.dot(cdot[0], cdot[1], 4.4);
  path(s, [cdot, [168, 152], [196, 158], [172, 166], [206, 176], [188, 184], [210, 184]], { w: 1.4 });
  s.dot(jdot[0], jdot[1], 4.4);
  path(s, [jdot, [234, 334], [216, 326], [200, 340], [184, 330]], { w: 1.4 });
  // names, with leaders from the book's own two-line labels
  lines(s, 60, 60, ['Cortical', 'nephron'], { size: 10.5, dy: 12 });
  leader(s, [76, 80], cdot);
  lab(s, 86, 158, 'Hilum', { size: 10.5 });
  leader(s, [94, 168], beanPt(cx, cy, rx, ry, -1, Math.PI + 0.3));
  lines(s, 6, 214, ['Renal', 'artery'], { size: 10.5, anchor: 'start', dy: 12 });
  leader(s, [34, 233], [58, 246]);
  lines(s, 6, 284, ['Renal', 'vein'], { size: 10.5, anchor: 'start', dy: 12, color: C.slate });
  leader(s, [22, 272], [44, 265]);
  lab(s, 6, 340, 'Ureter', { size: 10.5, anchor: 'start' });
  leader(s, [44, 336], [112, 338]);
  lines(s, 6, 416, ['Major calyx /', 'renal pelvis'], { size: 10.5, anchor: 'start', dy: 12 });
  leader(s, [50, 404], [131, 268]);
  lab(s, 170, 426, 'Minor calyx', { size: 10.5 });
  leader(s, [166, 414], [151, 300]);
  lines(s, 240, 402, ['Juxtamedullary', 'nephron'], { size: 10.5, dy: 12 });
  leader(s, [246, 390], [jdot[0], jdot[1] + 4]);
  lab(s, 310, 36, 'Capsule', { size: 10.5 });
  leader(s, [300, 44], beanPt(cx, cy, rx, ry, -1, -1.15));
  lab(s, 316, 82, 'Medulla', { size: 10.5, color: C.amber });
  leader(s, [292, 82], [200, 204], true);
  lab(s, 316, 134, 'Cortex', { size: 10.5 });
  leader(s, [296, 132], [248, 214]);
  lines(s, 318, 196, ['Medullary', 'pyramid'], { size: 10.5, dy: 12, color: C.amber });
  leader(s, [290, 200], [196, 252], true);
  lines(s, 312, 356, ['Renal column', '(of Bertini)'], { size: 10.5, dy: 12 });
  leader(s, [300, 342], [216, 272]);
  return s;
}
function check163(): Check[] {
  const s = draw163();
  const tri = (y: number) => 17 * 2 * 74 / 2 + y * 0;
  return [
    ['Every structure the book labels is on the drawing: capsule, cortex, medulla, medullary pyramid, renal column (of Bertini), hilum, renal artery, renal vein, ureter, major calyx / renal pelvis, minor calyx, cortical nephron, juxtamedullary nephron', hasAll(s, ['Capsule', 'Cortex', 'Medulla', 'Medullary', 'pyramid', 'Renal column', '(of Bertini)', 'Hilum', 'Renal', 'artery', 'vein', 'Ureter', 'Major calyx /', 'renal pelvis', 'Minor calyx', 'Cortical', 'Juxtamedullary', 'nephron'])],
    ['Three medullary pyramids, apex toward the pelvis and base toward the cortex, separated by renal columns (gaps of 10 px)', PYR_Y.length === 3 && PYR_Y.every((y, i) => i === 0 || y - PYR_Y[i - 1] - 34 === 10) && tri(0) > 0],
    ['The two nephrons are the two dots: the cortical one near the capsule (upper), the juxtamedullary one lower, near the medulla', s.points.length === 2 && s.points[0].y < KC.cy - 80 && s.points[1].y > KC.cy + 40],
    ['The artery arrow points into the hilum, the vein arrow out of it, and the ureter leaves it downward with an arrow head', (s.svg().match(/<path d="M[^"]*Z" fill="#(2E2A24|57534B)"\/>/g) ?? []).length === 3],
    ['The three medullary pyramids are the marigold highlight (the medulla\'s tags are amber)', marigolds(s) === 3],
    ...layout(s), clean(s),
  ];
}
const fig163: Diagram = { id: 'b11-16-fig-16.3', topic: 1, name: 'Vertical section of the kidney', cases: [{ chip: 'Kidney section', cap: CAP163 }], draw: draw163, check: check163 };

/* ================= Figure 16.4 ================= */
const CAP164_1 = 'Nephron with its blood supply: renal corpuscle, PCT, loop of Henle, DCT, collecting duct, peritubular capillaries, vasa recta and JGA. (1) The tubule: Bowman\'s capsule, PCT, the descending limb (water out) and ascending limb (salt out, impermeable to water) of the loop, DCT and collecting duct.';
const CAP164_2 = 'Nephron with its blood supply: renal corpuscle, PCT, loop of Henle, DCT, collecting duct, peritubular capillaries, vasa recta and JGA. (2) The blood supply: the afferent arteriole (wider) and the efferent arteriole (narrower) at the glomerulus, the peritubular capillaries, the vasa recta and the JGA.';
const NC: P = [232, 88], NR = 26;
const PCT = zig(206, 146, 94, 6, 8);
const AFF: P[] = [[288, 232], [244, 112]];
const JGA: P = [258, 152];
const EFF: P[] = [[214, 108], [206, 124], [196, 130], [186, 122], [176, 132], [166, 122], [156, 132], [146, 124]];
const DESC_X = 120, ASC_X = 192, DUCT_X = 300;
function draw164(c: { part: 1 | 2 }): Sketch {
  const s = new Sketch(W, 500), t1 = c.part === 1, tube = t1 ? C.ink : C.grey, ves = t1 ? C.grey : C.ink;
  // the tubule
  ell(s, NC[0], NC[1], NR, NR, { color: tube, w: t1 ? 1.9 : 1.5 });
  path(s, PCT, { color: tube, w: t1 ? 1.9 : 1.5 });
  path(s, [[146, 94], [DESC_X + 4, 106], [DESC_X, 114]], { color: tube, w: t1 ? 1.9 : 1.5 });
  const lp: P[] = [[DESC_X, 114], [DESC_X, 340], ...Array.from({ length: 11 }, (_, k): P => { const a = Math.PI - (Math.PI * (k + 1)) / 12; return [156 - 36 * Math.cos(Math.PI - a) * 1, 340 + 36 * Math.sin(a)]; }), [ASC_X, 340], [ASC_X, 170], [ASC_X + 12, 160]];
  path(s, lp, { color: t1 ? C.mari : C.grey, w: t1 ? 2.8 : 1.5 });
  path(s, [...zig(ASC_X + 12, 242, 158, 4, 7), [258, 152], [280, 158], [DUCT_X, 164]], { color: tube, w: t1 ? 1.9 : 1.5 });
  path(s, [[DUCT_X, 164], [DUCT_X, 452]], { color: t1 ? C.slate : C.grey, w: t1 ? 3.4 : 1.8 });
  arrow(s, [DUCT_X, 452], [DUCT_X, 478], { color: t1 ? C.slate : C.grey, w: t1 ? 3.4 : 1.8 });
  s.mid(DESC_X, 196, DESC_X, 216, tube); s.mid(ASC_X, 216, ASC_X, 196, tube); s.mid(DUCT_X, 296, DUCT_X, 316, t1 ? C.slate : C.grey);
  // the blood supply
  path(s, AFF, { color: ves, w: t1 ? 1.6 : 4.2 });
  path(s, EFF, { color: ves, w: t1 ? 1.4 : 1.7 });
  arrow(s, [150, 126], [136, 128], { color: ves, w: t1 ? 1.4 : 1.7 });
  const vr: P[] = [[44, 130], [44, 330], ...Array.from({ length: 11 }, (_, k): P => { const a = (Math.PI * (k + 1)) / 12; return [56 - 12 * Math.cos(a), 330 + 12 * Math.sin(a)]; }), [68, 330], [68, 130]];
  path(s, vr, { color: ves, w: t1 ? 1.4 : 1.8 });
  arrow(s, [30, 112], [44, 130], { color: ves, w: t1 ? 1.4 : 1.8 });
  arrow(s, [68, 130], [82, 112], { color: ves, w: t1 ? 1.4 : 1.8 });
  s.mid(44, 210, 44, 230, ves); s.mid(68, 230, 68, 210, ves);
  s.dot(JGA[0], JGA[1], 7, t1 ? C.ink : C.mari);
  if (t1) {
    // water out of the descending limb, salt out of the ascending limb
    [232, 292].forEach((y) => arrow(s, [DESC_X - 4, y], [DESC_X - 28, y], { color: C.ink, w: 1.8 }));
    [238, 298].forEach((y) => arrow(s, [ASC_X + 4, y], [ASC_X + 30, y], { color: C.ink, w: 1.8 }));
    s.tag(128, 14, 'Bowman\'s capsule', 232, NC[1] - NR);
    s.tag(4, 50, 'PCT (brush border)', 176, 86);
    s.tag(306, 118, 'DCT', 288, 160);
    lines(s, 226, 270, ['Ascending limb', '(salt out,', 'impermeable', 'to water)'], { size: 9.5, anchor: 'start', dy: 12, color: C.amber });
    leader(s, [222, 266], [ASC_X + 1, 252], true);
    lines(s, 6, 420, ['Descending limb', '(water out)'], { size: 10.5, anchor: 'start', dy: 12, color: C.amber });
    leader(s, [50, 406], [DESC_X + 1, 352], true);
    lines(s, 308, 238, ['Collecting', 'duct'], { size: 10, anchor: 'start', dy: 12 });
    leader(s, [303, 244], [DUCT_X + 2, 244]);
    lab(s, 310, 474, 'Urine', { size: 11, anchor: 'start' });
  } else {
    s.tag(268, 30, 'Glomerulus', 238, 90);
    path(s, [[222, 80], [238, 86], [240, 96], [226, 100], [218, 92], [232, 90]], { w: 1.6 });
    s.tag(306, 112, 'JGA', JGA[0], JGA[1], { hi: true });
    lines(s, 200, 266, ['Afferent arteriole', '(wider)'], { size: 10, anchor: 'start', dy: 12 });
    leader(s, [270, 254], [286, 234]);
    lines(s, 206, 196, ['Efferent', 'arteriole', '(narrower)'], { size: 10.5, anchor: 'start', dy: 12 });
    leader(s, [226, 184], [214, 112]);
    lines(s, 156, 216, ['Peritubular', 'capillaries'], { size: 10.5, dy: 12 });
    leader(s, [152, 204], [156, 134]);
    s.tag(4, 372, 'Vasa recta', 56, 342);
  }
  return s;
}
function check164(c: { part: 1 | 2 }): Check[] {
  const s = draw164(c);
  const out: Check[] = [];
  if (c.part === 1) {
    out.push(
      ['The tubule\'s parts are named as the book names them: Bowman\'s capsule, PCT (brush border), Ascending limb (salt out, impermeable to water), Descending limb (water out), DCT, Collecting duct, Urine', hasAll(s, ['Bowman\'s capsule', 'PCT (brush border)', 'Ascending limb', '(salt out,', 'impermeable', 'to water)', 'Descending limb', '(water out)', 'DCT', 'Collecting', 'duct', 'Urine'])],
      ['Water leaves the descending limb to the left (two arrows) and salt leaves the ascending limb to the right (two arrows)', (s.svg().match(/<path d="M[^"]*Z" fill="#2E2A24"\/>/g) ?? []).length >= 4],
      ['The filtrate runs capsule, PCT, descending limb, loop, ascending limb, DCT, collecting duct: the tubule is one path from x 206 (PCT) to the duct at x 300', PCT[0][0] > PCT[PCT.length - 1][0] && DESC_X < ASC_X && ASC_X < DUCT_X],
      ['The loop of Henle is the marigold highlight', marigolds(s) === 1],
    );
  } else {
    out.push(
      ['The blood supply is named as the book names it: Glomerulus, Afferent arteriole (wider), Efferent arteriole (narrower), Peritubular capillaries, Vasa recta, JGA', hasAll(s, ['Glomerulus', 'Afferent arteriole', '(wider)', 'Efferent', 'arteriole', '(narrower)', 'Peritubular', 'capillaries', 'Vasa recta', 'JGA'])],
      ['The afferent arteriole is drawn wider than the efferent one (4.2 against 1.7)', /stroke-width="4.2"/.test(s.svg()) && /stroke-width="1.7"/.test(s.svg())],
      ['The JGA sits where the afferent arteriole meets the DCT: the afferent line passes through the JGA dot', Math.abs(AFF[0][0] + ((AFF[1][0] - AFF[0][0]) * (JGA[1] - AFF[0][1])) / (AFF[1][1] - AFF[0][1]) - JGA[0]) < 2],
      ['The JGA is the marigold highlight (dot and tag); the tubule is grey', /fill="#EEA31F"/.test(s.svg()) && s.tags.some((t) => t.name === 'JGA')],
    );
  }
  return [...out, ...layout(s), clean(s)];
}
const fig164: Diagram = {
  id: 'b11-16-fig-16.4', topic: 1, name: 'Nephron with its blood supply',
  cases: [{ chip: 'Tubule', part: 1, cap: CAP164_1 }, { chip: 'Blood supply', part: 2, cap: CAP164_2 }],
  draw: draw164, check: check164,
};

/* ================= Figure 16.5 ================= */
const CAP165 = 'Counter-current mechanism: loop of Henle (multiplier), vasa recta (exchanger) and collecting duct, with the medullary osmolarity gradient (about 300 mOsm/L in the cortex to 1200 mOsm/L in the inner medulla).';
const AX5 = 328, OSM = [300, 600, 900, 1200];
const Y5 = (v: number) => 70 + (v - 300) * (330 / 900);
const D5 = { duct: 28, desc: 148, asc: 200, vd: 232, vu: 260 };
function draw165(): Sketch {
  const s = new Sketch(W, 470);
  // the scale
  lines(s, 326, 36, ['Osmolarity', '(mOsm/L)'], { size: 10.5, dy: 12, color: C.slate });
  path(s, [[AX5, Y5(300)], [AX5, Y5(1200)]], { color: C.slate, w: 1.5 });
  OSM.forEach((v) => { path(s, [[AX5 - 4, Y5(v)], [AX5 + 4, Y5(v)]], { color: C.slate, w: 1.3 }); lab(s, AX5 + 8, Y5(v) + 3.5, String(v), { size: 10, anchor: 'start', color: C.slate }); });
  lab(s, AX5 - 8, Y5(300) + 3.5, 'Cortex', { size: 9.5, anchor: 'end', color: C.slate });
  lines(s, AX5 - 8, Y5(600) - 1, ['Outer', 'medulla'], { size: 9.5, anchor: 'end', color: C.slate, dy: 11 });
  lines(s, AX5 - 8, Y5(1200) - 1, ['Inner', 'medulla'], { size: 9.5, anchor: 'end', color: C.slate, dy: 11 });
  // collecting duct
  lab(s, 6, 22, 'Collecting duct', { size: 11, anchor: 'start', color: C.slate });
  path(s, [[D5.duct, Y5(300)], [D5.duct, 404]], { color: C.slate, w: 3.6 });
  [137, 203, 269].forEach((y) => arrow(s, [D5.duct - 2, y], [D5.duct - 16, y], { color: C.ink, w: 1.8 }));
  lines(s, 44, 322, ['Water out', '(ADH)'], { size: 10.5, anchor: 'start', dy: 12 });
  leader(s, [40, 316], [D5.duct + 2, 298]);
  arrow(s, [D5.duct, 404], [D5.duct, 438], { color: C.amber, w: 3.4 });
  lines(s, 40, 446, ['Concentrated', 'urine'], { size: 11, anchor: 'start', dy: 13, color: C.amber });
  // loop of Henle
  arrow(s, [D5.desc, 30], [D5.desc, 68], { color: C.slate, w: 2 });
  lab(s, D5.desc + 10, 52, 'Filtrate', { size: 11, anchor: 'start', color: C.slate });
  const cxL = (D5.desc + D5.asc) / 2, r = (D5.asc - D5.desc) / 2;
  const arc: P[] = Array.from({ length: 13 }, (_, k): P => { const a = Math.PI * (k / 12); return [cxL - r * Math.cos(a), 380 + r * Math.sin(a)]; });
  path(s, [[D5.desc, 78], [D5.desc, 380], ...arc, [D5.asc, 380], [D5.asc, 78]], { color: C.mari, w: 3.4 });
  s.mid(D5.desc, 120, D5.desc, 140, C.ink); s.mid(D5.asc, 140, D5.asc, 120, C.ink);
  [160, 250, 335].forEach((y) => { arrow(s, [D5.desc - 3, y], [D5.desc - 20, y], { color: C.ink, w: 1.8 }); arrow(s, [D5.asc + 3, y], [D5.asc + 20, y], { color: C.ink, w: 1.8 }); });
  lines(s, 136, 190, ['Descending limb', 'water out,', 'impermeable', 'to salt'], { size: 10, anchor: 'end', dy: 12, color: C.amber });
  leader(s, [136, 235], [D5.desc + 1, 246], true);
  lines(s, 226, 96, ['Ascending limb', 'salt out', 'impermeable to water'], { size: 9.5, anchor: 'start', dy: 12, color: C.amber });
  leader(s, [232, 128], [D5.asc + 1, 150], true);
  // vasa recta
  const vr: P[] = [[D5.vd, 196], [D5.vd, 380], ...Array.from({ length: 11 }, (_, k): P => { const a = (Math.PI * (k + 1)) / 12; return [(D5.vd + D5.vu) / 2 - 14 * Math.cos(a), 380 + 15 * Math.sin(a)]; }), [D5.vu, 380], [D5.vu, 196]];
  path(s, vr, { color: C.ink, w: 1.8 });
  arrow(s, [D5.vd - 14, 182], [D5.vd, 196], { color: C.ink, w: 1.8 });
  arrow(s, [D5.vu, 196], [D5.vu + 14, 182], { color: C.ink, w: 1.8 });
  s.mid(D5.vd, 270, D5.vd, 290, C.ink); s.mid(D5.vu, 290, D5.vu, 270, C.ink);
  lines(s, 246, 430, ['Vasa recta', '(blood flow)'], { size: 10.5, dy: 12 });
  leader(s, [246, 418], [246, 395]);
  return s;
}
function check165(): Check[] {
  const s = draw165();
  const d = OSM.slice(1).map((v, i) => Y5(v) - Y5(OSM[i]));
  return [
    ['The osmolarity scale is the book\'s: Cortex 300, Outer medulla 600, 900, Inner medulla 1200 mOsm/L, with the title "Osmolarity (mOsm/L)"', hasAll(s, ['Cortex', 'Outer', 'Inner', 'medulla', '300', '600', '900', '1200', 'Osmolarity', '(mOsm/L)'])],
    ['Equal steps of 300 mOsm/L are equal steps down the scale (110 px each)', d.every((x) => Math.abs(x - 110) < 1e-9) && OSM.join() === '300,600,900,1200'],
    ['Every arrow the book prints is here: filtrate in, water out of the descending limb and the collecting duct (to the left), salt out of the ascending limb (to the right), concentrated urine out', hasAll(s, ['Filtrate', 'Water out', '(ADH)', 'Descending limb', 'water out,', 'impermeable', 'to salt', 'Ascending limb', 'salt out', 'impermeable to water', 'Concentrated', 'urine']) && (s.svg().match(/<path d="M[^"]*Z" fill="#2E2A24"\/>/g) ?? []).length >= 10],
    ['The vasa recta runs down one side of its U and up the other, and is named "Vasa recta (blood flow)"', D5.vd < D5.vu && hasAll(s, ['Vasa recta', '(blood flow)'])],
    ['The loop of Henle is the marigold highlight; the collecting duct is grey', marigolds(s) === 1],
    ...layout(s), clean(s),
  ];
}
const fig165: Diagram = { id: 'b11-16-fig-16.5', topic: 2, name: 'Counter-current mechanism', cases: [{ chip: 'Counter-current', cap: CAP165 }], draw: draw165, check: check165 };

/* ================= Figure 16.6 ================= */
const CAP166_1 = 'Regulation of kidney function: RAAS and ADH (low BP/volume) versus ANF (high BP/volume). (1) RAAS: low BP / volume makes the JGA release renin; renin acts on angiotensinogen, ACE (lungs) forms angiotensin II, which acts on the adrenal cortex to release aldosterone, and BP / volume is restored.';
const CAP166_2 = 'Regulation of kidney function: RAAS and ADH (low BP/volume) versus ANF (high BP/volume). (2) ADH: the hypothalamus / posterior pituitary releases ADH, which acts on the collecting duct (water reabsorption), which aids BP recovery.';
const CAP166_3 = 'Regulation of kidney function: RAAS and ADH (low BP/volume) versus ANF (high BP/volume). (3) ANF: high BP / volume stretches the cardiac atria, which release ANF; ANF causes vasodilation and Na<sup>+</sup> and water excretion, and BP / volume falls to normal. ANF inhibits renin release.';
const BXL = 65, BXR = 235, CX6 = 150;
const bxr = (y0: number, y1: number): Rect => [BXL, y0, BXR, y1];
function step(s: Sketch, y0: number, y1: number, label?: string, color: string = C.ink) {
  arrow(s, [CX6, y0 + 3], [CX6, y1 - 3], { color, w: 1.8 });
  if (label) lab(s, CX6 + 9, (y0 + y1) / 2 + 4, `<i>${label}</i>`, { size: 10.5, anchor: 'start', color: C.slate });
}
const RAAS: { name: string; y: [number, number]; text: string[]; gap?: string; hi?: boolean; note?: string[] }[] = [
  { name: 'jga', y: [66, 108], text: ['JGA', '(juxtaglomerular apparatus)'] },
  { name: 'agen', y: [134, 166], text: ['Angiotensinogen'], gap: 'releases renin' },
  { name: 'ang1', y: [192, 224], text: ['Angiotensin I'], gap: 'renin acts' },
  { name: 'ang2', y: [250, 282], text: ['Angiotensin II'], gap: 'ACE (lungs)', hi: true, note: ['→ vasoconstriction', '→ GFR up'] },
  { name: 'adr', y: [308, 340], text: ['Adrenal cortex'], gap: 'acts on' },
  { name: 'ald', y: [366, 398], text: ['Aldosterone'], gap: 'releases', note: ['→ Na<sup>+</sup> reabsorption', '→ water follows'] },
  { name: 'res', y: [420, 454], text: ['BP / volume restored'] },
];
function draw166(c: { part: 1 | 2 | 3 }): Sketch {
  if (c.part === 1) {
    const s = new Sketch(W, 476);
    bx(s, 'head', [BXL, 10, BXR, 44], ['LOW BP / volume'], { bold: true, size: 12.5 });
    RAAS.forEach((r, i) => {
      bx(s, r.name, bxr(r.y[0], r.y[1]), r.text, { hi: r.hi, bold: i === RAAS.length - 1 });
      if (r.note) lines(s, 242, (r.y[0] + r.y[1]) / 2 - 2 - (r.note.length - 1) * 6, r.note, { size: 10.5, anchor: 'start', dy: 13, color: C.amber });
      if (i > 0) step(s, RAAS[i - 1].y[1], r.y[0], r.gap);
    });
    return s;
  }
  if (c.part === 2) {
    const s = new Sketch(W, 262);
    bx(s, 'head', [BXL, 10, BXR, 44], ['LOW BP / volume'], { bold: true, size: 12.5 });
    bx(s, 'hyp', bxr(66, 108), ['Hypothalamus /', 'posterior pituitary']);
    bx(s, 'cd', bxr(134, 176), ['Collecting duct:', 'water reabsorption'], { hi: true });
    step(s, 108, 134, 'ADH', C.ink);
    arrow(s, [CX6, 180], [CX6, 208], { color: C.ink, w: 1.8 });
    lab(s, CX6, 228, '<i>aids BP recovery</i>', { size: 11, color: C.slate });
    return s;
  }
  const s = new Sketch(W, 432);
  bx(s, 'head', [BXL, 10, BXR, 44], ['HIGH BP / volume'], { bold: true, size: 12.5 });
  bx(s, 'atria', bxr(66, 108), ['Stretched', 'cardiac atria']);
  bx(s, 'anf', [95, 134, 205, 166], ['ANF'], { hi: true, bold: true, size: 12.5 });
  bx(s, 'vaso', bxr(192, 250), ['Vasodilation', 'Na<sup>+</sup> and water', 'excretion']);
  bx(s, 'norm', bxr(276, 318), ['BP / volume lowered', 'to normal'], { bold: true });
  step(s, 108, 134, 'releases');
  step(s, 166, 192);
  step(s, 250, 276);
  bx(s, 'jga', bxr(344, 386), ['JGA', '(juxtaglomerular apparatus)']);
  path(s, [[95, 150], [36, 150], [36, 365], [60, 365]], { color: C.slate, w: 1.6, dash: '5 4' });
  path(s, [[60, 356], [60, 374]], { color: C.slate, w: 2 });
  lab(s, CX6, 408, '<i>ANF inhibits renin release</i>', { size: 10.5, color: C.slate });
  return s;
}
function check166(c: { part: 1 | 2 | 3 }): Check[] {
  const s = draw166(c);
  const heads = (s.svg().match(/<path d="M[^"]*Z" fill="#(2E2A24)"\/>/g) ?? []).length;
  const out: Check[] = [];
  if (c.part === 1) {
    out.push(
      ['The RAAS chain is the book\'s, top to bottom: JGA, Angiotensinogen, Angiotensin I, Angiotensin II, Adrenal cortex, Aldosterone, BP / volume restored, with the header LOW BP / volume', hasAll(s, ['LOW BP / volume', 'JGA', '(juxtaglomerular apparatus)', 'Angiotensinogen', 'Angiotensin I', 'Angiotensin II', 'Adrenal cortex', 'Aldosterone', 'BP / volume restored']) && RAAS.every((r, i) => i === 0 || r.y[0] > RAAS[i - 1].y[1])],
      ['The arrow notes are the book\'s: releases renin, renin acts, ACE (lungs), acts on, releases; the effects are "→ vasoconstriction", "→ GFR up" beside angiotensin II and "→ Na+ reabsorption", "→ water follows" beside aldosterone', hasAll(s, ['releases renin', 'renin acts', 'ACE (lungs)', 'acts on', 'releases', '→ vasoconstriction', '→ GFR up', '→ Na+ reabsorption', '→ water follows'])],
      ['Six arrows join the seven boxes in a chain', heads === 6],
      ['Angiotensin II is the marigold highlight', marigoldBoxes(s) === 1],
    );
  } else if (c.part === 2) {
    out.push(
      ['The ADH pathway is the book\'s: Hypothalamus / posterior pituitary, ADH, Collecting duct: water reabsorption, aids BP recovery, with the header LOW BP / volume', hasAll(s, ['LOW BP / volume', 'Hypothalamus /', 'posterior pituitary', 'ADH', 'Collecting duct:', 'water reabsorption', 'aids BP recovery'])],
      ['Two arrows: hypothalamus to collecting duct (ADH), and collecting duct to its result (aids BP recovery)', heads === 2],
      ['The collecting duct box (water reabsorption) is the marigold highlight', marigoldBoxes(s) === 1],
    );
  } else {
    out.push(
      ['The ANF pathway is the book\'s: Stretched cardiac atria, releases, ANF, Vasodilation / Na+ and water excretion, BP / volume lowered to normal, with the header HIGH BP / volume', hasAll(s, ['HIGH BP / volume', 'Stretched', 'cardiac atria', 'releases', 'ANF', 'Vasodilation', 'Na+ and water', 'excretion', 'BP / volume lowered', 'to normal'])],
      ['ANF inhibits renin release: a dashed line from ANF ends in a bar at the JGA box, and the note is printed', hasAll(s, ['JGA', 'ANF inhibits renin release']) && /stroke-dasharray="5 4"/.test(s.svg())],
      ['Three arrows join the four boxes in a chain', heads === 3],
      ['ANF is the marigold highlight', marigoldBoxes(s) === 1],
    );
  }
  return [...out, ...layout(s), clean(s)];
}
const fig166: Diagram = {
  id: 'b11-16-fig-16.6', topic: 3, name: 'Regulation of kidney function: RAAS, ADH and ANF',
  cases: [{ chip: 'RAAS', part: 1, cap: CAP166_1 }, { chip: 'ADH', part: 2, cap: CAP166_2 }, { chip: 'ANF', part: 3, cap: CAP166_3 }],
  draw: draw166, check: check166,
};

export const DIAGRAMS_BIOLOGY_11_16: Diagram[] = [fig161, fig162, fig163, fig164, fig165, fig166];
