import { C, LABEL_GAP, Rect, Sketch, audit, crosses, mathW, r1, tagW } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * BIOLOGY CLASS 11, CHAPTER 3 (Plant Kingdom): the drawings of the Master Reference book on pp. 142-220, redrawn.
 * Every page 142 to 220 was counted (pdfimages -list: no raster image on any page; the shapes on the page images). Only
 * pp. 152, 154, 162, 171 and 178 hold a drawing. The tables and the typeset life-cycle lines (pp. 170, 179, with arrow
 * labels in the text) are not drawings; pp. 189 to 220 (Additional topics A to H) hold none (tables, matrices, text).
 * FIVE numbered drawings on five pages:
 *
 *   Figure 3.1 (drawing p. 152, caption p. 151), Topic 02, topic index 1: Laminaria, holdfast, stipe, frond.
 *   Figure 3.2 (drawing p. 154, caption p. 153), Topic 02, topic index 1: three life-cycle patterns, one case each.
 *   Figure 3.3 (drawing p. 162, caption p. 161), Topic 03, topic index 2: Dryopteris sporophyte and prothallus.
 *   Figure 3.4 (drawing p. 171, caption p. 170), Topic 04, topic index 3: Pinus tree, male cone scale, female cone scale.
 *   Figure 3.5 (drawing p. 178, caption p. 177), Topic 05, topic index 4: the mature embryo sac.
 *
 * THE BOOK'S, as printed: every word of every label, heading and example line (Fig 3.1 Frond (broad flat blade,
 * photosynthetic), Stipe (stalk), Holdfast (anchors to rock), rock; Fig 3.2 the three headings, the boxes "n gametophyte" and
 * "2n sporophyte", the arrow words, "zygote (2n)", "n spores", "n gametes", the examples; Fig 3.3 Sporophyte (2n), Prothallus
 * (gametophyte, n), Frond with sori, Rhizome, True roots, Archegonia, Antheridia, Rhizoids; Fig 3.4 the two inset
 * headings and all nine labels; Fig 3.5 all eight labels and the cell and nucleus count line), the logic of each (which
 * phase is n and which 2n in each cycle, the arrows' direction; the 7 cells and 8 nuclei, egg apparatus at the micropylar end,
 * antipodals at the chalazal end; archegonia near the notch, antheridia near the rhizoids; the male cones smaller than the
 * female cone; micropyle, nucellus and female gametophyte nested inside the ovule on an ovuliferous scale).
 * SCHEMATIC: all sizes, positions, outlines and leader-line angles (re-laid for a phone, one column; Fig 3.3 and 3.4 are
 * stacked where the book put them side by side), the blade's ripple and veins, the number of fronds, pinnae and sori,
 * the heart's size, the branches, needles and cone scales of the pine, the cell and nucleus sizes of the embryo sac.
 * Colours are the app's style (no fills; one marigold highlight per drawing: the frond, the diploid phase, the sori,
 * the naked ovule, the egg cell), not the book's. A name the book prints with a bracket note (for example "Frond
 * (broad flat blade, photosynthetic)") is a tag for the name and the bracket note beneath it in grey, same words.
 */

const W = 360;
type P = [number, number];
const plain = (html: string) => html.replace(/<[^>]+>/g, '');
const wOf = (html: string, size: number) => Math.max(mathW(html, size), plain(html).length * size * 0.5);
const rad = (d: number) => (d * Math.PI) / 180;

/* ---------- helpers ---------- */
const LINES = new WeakMap<Sketch, P[][]>();
type Call = { name: string; rect: Rect; a: P; p: P };
const CALLS = new WeakMap<Sketch, Call[]>();
const keep = (s: Sketch, pts: P[]) => LINES.set(s, [...(LINES.get(s) ?? []), pts]);
function path(s: Sketch, pts: P[], o: { color?: string; w?: number; close?: boolean; free?: boolean } = {}) {
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ') + (o.close ? ' Z' : '');
  s.add(`<path d="${d}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}" stroke-linejoin="round" stroke-linecap="round"/>`);
  if (!o.free) keep(s, o.close ? [...pts, pts[0]] : pts);
}
function ell(s: Sketch, cx: number, cy: number, rx: number, ry: number, o: { color?: string; w?: number; dash?: boolean; free?: boolean } = {}) {
  s.add(`<ellipse cx="${r1(cx)}" cy="${r1(cy)}" rx="${r1(rx)}" ry="${r1(ry)}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}"${o.dash ? ' stroke-dasharray="4 3"' : ''}/>`);
  if (!o.free) keep(s, Array.from({ length: 37 }, (_, i): P => [cx + rx * Math.cos((i / 36) * 2 * Math.PI), cy + ry * Math.sin((i / 36) * 2 * Math.PI)]));
}
function head(s: Sketch, x: number, y: number, ang: number, color: string) {
  const L = 9, hw = 4.5, bx = x - L * Math.cos(ang), by = y - L * Math.sin(ang);
  s.add(`<path d="M${r1(x)} ${r1(y)} L${r1(bx + hw * Math.sin(ang))} ${r1(by - hw * Math.cos(ang))} L${r1(bx - hw * Math.sin(ang))} ${r1(by + hw * Math.cos(ang))} Z" fill="${color}"/>`);
}
/** An arrow along a cubic curve (a straight one when the controls sit on the chord). */
function arrow(s: Sketch, p0: P, c1: P, c2: P, p3: P, color: string = C.ink) {
  const pts = Array.from({ length: 25 }, (_, i): P => { const t = i / 24, u = 1 - t; return [u ** 3 * p0[0] + 3 * u * u * t * c1[0] + 3 * u * t * t * c2[0] + t ** 3 * p3[0], u ** 3 * p0[1] + 3 * u * u * t * c1[1] + 3 * u * t * t * c2[1] + t ** 3 * p3[1]]; });
  const ang = Math.atan2(p3[1] - c2[1], p3[0] - c2[0]), bx = p3[0] - 9 * Math.cos(ang), by = p3[1] - 9 * Math.sin(ang);
  s.add(`<path d="M${r1(p0[0])} ${r1(p0[1])} C${r1(c1[0])} ${r1(c1[1])} ${r1(c2[0])} ${r1(c2[1])} ${r1(bx)} ${r1(by)}" fill="none" stroke="${color}" stroke-width="1.8" stroke-linecap="round"/>`);
  head(s, p3[0], p3[1], ang, color);
  keep(s, pts);
}
const straight = (s: Sketch, a: P, b: P, color: string = C.ink) => arrow(s, a, a, b, b, color);
/** A line of STIX on the drawing from its baseline; its box at its width. */
function lab(s: Sketch, x: number, y: number, html: string, o: { size?: number; anchor?: 'start' | 'middle' | 'end'; color?: string; bold?: boolean } = {}): Rect {
  const size = o.size ?? 12, anchor = o.anchor ?? 'middle', w = wOf(html, size) * (o.bold ? 1.08 : 1);
  const x0 = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w : x;
  const rect: Rect = [x0, y - size * 0.72, x0 + w, y + size * 0.22];
  s.labels.push({ text: plain(html), rect });
  s.text(x, y, html, { size, anchor, color: o.color ?? C.text, semibold: o.bold });
  return rect;
}
/**
 * A name: a white tag at one side, a straight line from the tag's inner edge to the part, a dot on the part, and the
 * book's bracket note (if any) in grey STIX beneath the tag. `side` r: the tag starts at x; l: the tag ends at x.
 */
function call(s: Sketch, side: 'l' | 'r', x: number, y: number, t: string, notes: string[], p: P, hi = false) {
  const w = tagW(t), x0 = side === 'r' ? x : x - w, a: P = side === 'r' ? [x0, y + 11] : [x0 + w, y + 11];
  s.tag(x0, y, t, null, null, { hi, anchor: 'start' });
  s.line(a[0], a[1], p[0], p[1], { color: hi ? C.mari : C.grey, w: 1.2 });
  keep(s, [a, p]);
  s.dot(p[0], p[1], 2.6, hi ? C.mari : C.ink);
  notes.forEach((n, i) => lab(s, side === 'r' ? x0 : x0 + w, y + 36 + i * 13, n, { size: 10.5, color: C.slate, anchor: side === 'r' ? 'start' : 'end' }));
  CALLS.set(s, [...(CALLS.get(s) ?? []), { name: t, rect: [x0, y, x0 + w, y + 22], a, p }]);
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
/** Every drawn label keeps LABEL_GAP clear of every drawn line, lies in the frame, touches no other label; no leader runs through another name's tag. */
function layout(s: Sketch): Check[] {
  let gap = Infinity, what = '';
  for (const l of s.labels) for (const pts of LINES.get(s) ?? []) { const d = gapTo(l.rect, pts); if (d < gap) { gap = d; what = l.text; } }
  const out = s.labels.filter((l) => l.rect[0] < 0 || l.rect[2] > s.w || l.rect[1] < 0 || l.rect[3] > s.h).map((l) => l.text);
  const L = s.labels;
  const touch = L.flatMap((a, i) => L.slice(i + 1).filter((b) => !(a.rect[2] + 2 <= b.rect[0] || b.rect[2] + 2 <= a.rect[0] || a.rect[3] + 2 <= b.rect[1] || b.rect[3] + 2 <= a.rect[1])).map((b) => `${a.text} / ${b.text}`));
  const cs = CALLS.get(s) ?? [];
  const thru = cs.flatMap((c) => cs.filter((d) => d !== c && crosses(c.a, c.p, d.rect, -2)).map((d) => `${c.name} / ${d.name}`));
  const note = s.labels.filter((l) => cs.some((c) => c.name !== l.text && crosses(c.a, c.p, l.rect, -2))).map((l) => l.text);
  return [
    [`Every label stays ${LABEL_GAP} px clear of every drawn line: the closest is "${what}", ${r1(gap)} px`, gap >= LABEL_GAP],
    [`Every label lies inside the frame${out.length ? `: not ${out.join(', ')}` : ''}`, out.length === 0],
    [`No two labels touch${touch.length ? `: ${touch.join(', ')}` : ''}`, touch.length === 0],
    [`No name's line runs through another name's tag or a note${thru.length || note.length ? `: ${[...thru, ...note].join(', ')}` : ''}`, thru.length === 0 && note.length === 0],
  ];
}
const has = (s: Sketch, t: string) => s.labels.some((l) => l.text === t) || s.tags.some((g) => g.name === t);
const clean = (s: Sketch): Check => { const a = audit(s); return [`Layout audit is clear${a.length ? `: ${a.join('; ')}` : ''}`, a.length === 0 && s.unplaced.length === 0]; };
const inEll = (p: P, cx: number, cy: number, rx: number, ry: number, m = 0) => ((p[0] - cx) / (rx - m)) ** 2 + ((p[1] - cy) / (ry - m)) ** 2 <= 1;

/* ================= Figure 3.1 ================= */
const CAP31 = '<i>Laminaria</i> (a brown alga, kelp) anchored to a rock: the holdfast, the stalk (stipe) and the broad flat blade (frond).';
const LAM = { cx: 130, top: 44, base: 212, hw: 66, stipeEnd: 300, holdY: 308, holdRx: 30, holdRy: 9 };
/** The blade's half-width at t (0 at the tip, 1 at the base): a leaf shape with a ripple along the edge. */
const hwBlade = (t: number) => LAM.hw * Math.pow(Math.sin(Math.PI * Math.pow(t, 0.8)), 0.85) + 3.2 * Math.sin(t * 38) * Math.sqrt(Math.sin(Math.PI * t)) + 3.2 * t ** 6;
const stipeX = (y: number) => LAM.cx - 4 * Math.sin(((y - LAM.base) / (LAM.stipeEnd - LAM.base)) * Math.PI);
const ROCK: P[] = [[34, 384], [88, 346], [124, 356], [150, 342], [196, 354], [238, 344], [286, 384]];
const rockTop = (x: number) => { for (let i = 0; i < ROCK.length - 1; i++) { const [a, b] = [ROCK[i], ROCK[i + 1]]; if (x >= a[0] && x <= b[0]) return a[1] + ((b[1] - a[1]) * (x - a[0])) / (b[0] - a[0]); } return 384; };
function draw31(): Sketch {
  const s = new Sketch(W, 400);
  lab(s, W / 2, 24, '<i>Laminaria</i> (a brown alga, kelp)', { size: 14, bold: true });
  const N = 60, ts = Array.from({ length: N + 1 }, (_, i) => i / N);
  const yOf = (t: number) => LAM.top + t * (LAM.base - LAM.top);
  const left = ts.map((t): P => [LAM.cx - hwBlade(t), yOf(t)]), right = ts.map((t): P => [LAM.cx + hwBlade(t), yOf(t)]).reverse();
  path(s, [...left, ...right], { close: true, color: C.mari, w: 2.2 });
  // midrib and four veins (grey, schematic)
  path(s, ts.map((t): P => [LAM.cx + 2.5 * Math.sin(t * 5), yOf(t)]), { color: C.slate, w: 1.4 });
  for (const k of [-0.62, -0.32, 0.32, 0.62]) path(s, ts.filter((t) => t > 0.06 && t < 0.97).map((t): P => [LAM.cx + k * hwBlade(t) * 0.8, yOf(t)]), { color: C.grey, w: 1.2 });
  // stipe: two edges
  const ys = Array.from({ length: 12 }, (_, i) => LAM.base + (i / 11) * (LAM.stipeEnd - LAM.base));
  path(s, ys.map((y): P => [stipeX(y) - 3.5, y]));
  path(s, ys.map((y): P => [stipeX(y) + 3.5, y]));
  // holdfast and its rootlets on the rock
  ell(s, LAM.cx, LAM.holdY, LAM.holdRx, LAM.holdRy);
  for (let i = 0; i < 7; i++) { const x1 = LAM.cx - 24 + i * 8, x2 = LAM.cx + (i - 3) * 14; path(s, [[x1, LAM.holdY + 8], [x2, rockTop(x2) + 1]], { w: 1.5 }); }
  path(s, ROCK, { color: C.slate, w: 1.7 });
  path(s, [ROCK[0], [ROCK[0][0], 384], [ROCK[ROCK.length - 1][0], 384], ROCK[ROCK.length - 1]], { color: C.slate, w: 1.7 });
  lab(s, 196, 374, '<i>rock</i>', { size: 12, color: C.slate });
  // names
  const tf = 0.42;
  call(s, 'r', 222, 76, 'Frond', ['(broad flat blade,', 'photosynthetic)'], [LAM.cx + hwBlade(tf), LAM.top + tf * (LAM.base - LAM.top)], true);
  call(s, 'r', 222, 240, 'Stipe', ['(stalk)'], [stipeX(252) + 3.5, 252]);
  call(s, 'l', 98, 262, 'Holdfast', ['(anchors to rock)'], [LAM.cx - LAM.holdRx * 0.8, LAM.holdY - 5]);
  return s;
}
function check31(): Check[] {
  const s = draw31(), cs = CALLS.get(s)!;
  const at = (n: string) => cs.find((c) => c.name === n)!.p;
  const frondPt = at('Frond'), tf = 0.42;
  return [
    ['The three names are the book\'s: Frond (broad flat blade, photosynthetic), Stipe (stalk), Holdfast (anchors to rock), and the rock is labelled', ['Frond', 'Stipe', 'Holdfast', '(broad flat blade,', 'photosynthetic)', '(stalk)', '(anchors to rock)', 'rock'].every((t) => has(s, t))],
    ['Top to bottom the parts run frond, stipe, holdfast, rock: the stipe starts at the blade\'s base and ends on the holdfast, which sits on the rock', LAM.top < LAM.base && LAM.base < LAM.stipeEnd && LAM.stipeEnd <= LAM.holdY && LAM.holdY + LAM.holdRy < rockTop(LAM.cx) && hwBlade(1) < 7],
    ['The frond is the broad part (its widest half-width is far more than the stipe\'s 3.5 px) and its leader ends on the blade\'s edge', Math.max(...Array.from({ length: 61 }, (_, i) => hwBlade(i / 60))) > 20 * 3.5 / 3.5 && Math.abs(Math.abs(frondPt[0] - LAM.cx) - hwBlade(tf)) < 0.01],
    ['The stipe\'s leader ends on the stipe and the holdfast\'s inside the holdfast ellipse', Math.abs(at('Stipe')[0] - stipeX(at('Stipe')[1]) - 3.5) < 0.01 && inEll(at('Holdfast'), LAM.cx, LAM.holdY, LAM.holdRx + 0.1, LAM.holdRy + 6)],
    ['Only the frond is in the highlight (the blade outline and its tag)', s.tags.filter((t) => t.name === 'Frond').length === 1],
    ...layout(s), clean(s),
  ];
}
const fig31: Diagram = { id: 'b11-03-fig-3.1', topic: 1, name: 'Laminaria: holdfast, stipe, frond', cases: [{ chip: 'Laminaria', cap: CAP31 }], draw: draw31, check: check31 };

/* ================= Figure 3.2 ================= */
const CAP32 = 'Life-cycle patterns, with examples: (A) haplontic, (B) diplontic and (C) haplo-diplontic. The haploid phase is n and the diploid phase is 2n.';
const CAP32B = CAP32 + ' The gametic meiosis drawn here is that of <i>Fucus</i>; in seed plants, also called diplontic, meiosis forms spores, which grow into the few-celled gametophytes.';
type Phase = 'n' | '2n';
/** What each panel shows: its multicellular bodies and its single-cell stages, by ploidy. */
const PATTERNS: Record<string, { title: string; bodies: Phase[]; cells: Phase[]; eg: string[] }> = {
  A: { title: '(A) Haplontic', bodies: ['n'], cells: ['2n', 'n'], eg: ['<i>Volvox</i>, <i>Spirogyra</i>, <i>Chlamydomonas</i>'] },
  B: { title: '(B) Diplontic', bodies: ['2n'], cells: ['n'], eg: ['<i>Fucus</i>'] },
  C: { title: '(C) Haplo-diplontic', bodies: ['n', '2n'], cells: [], eg: ['<i>Ectocarpus</i>, <i>Polysiphonia</i>, kelps;', 'bryophytes; pteridophytes'] },
};
function body(s: Sketch, cx: number, cy: number, ph: Phase) {
  ell(s, cx, cy, 62, 28, ph === '2n' ? { color: C.mari, w: 2.2 } : {});
  lab(s, cx, cy - 2, ph === 'n' ? 'n' : '2n', { size: 15, bold: true, color: ph === '2n' ? C.amber : C.text });
  lab(s, cx, cy + 13, ph === 'n' ? 'gametophyte' : 'sporophyte', { size: 11, bold: true, color: ph === '2n' ? C.amber : C.text });
}
function draw32(c: { k: 'A' | 'B' | 'C' }): Sketch {
  const pat = PATTERNS[c.k], H = c.k === 'A' ? 316 : c.k === 'B' ? 292 : 304;
  const s = new Sketch(W, H);
  lab(s, W / 2, 26, pat.title, { size: 14, bold: true });
  // key: the haploid phase in ink, the diploid phase in marigold
  s.add(`<circle cx="112" cy="50" r="4.4" fill="none" stroke="${C.ink}" stroke-width="1.7"/>`); keep(s, Array.from({ length: 13 }, (_, i): P => [112 + 4.4 * Math.cos((i / 12) * 6.283), 50 + 4.4 * Math.sin((i / 12) * 6.283)]));
  lab(s, 122, 54, 'n (haploid)', { size: 11, anchor: 'start' });
  s.add(`<circle cx="208" cy="50" r="4.4" fill="none" stroke="${C.mari}" stroke-width="2.2"/>`); keep(s, Array.from({ length: 13 }, (_, i): P => [208 + 4.4 * Math.cos((i / 12) * 6.283), 50 + 4.4 * Math.sin((i / 12) * 6.283)]));
  lab(s, 218, 54, '2n (diploid)', { size: 11, anchor: 'start', color: C.amber });
  const it = (t: string) => `<i>${t}</i>`;
  const spores = (x: number, y: number, ph: Phase) => [-10, 0, 10].forEach((d) => { const col = ph === '2n' ? C.mari : C.ink; s.add(`<circle cx="${x + d}" cy="${y}" r="3.2" fill="none" stroke="${col}" stroke-width="1.8"/>`); keep(s, [[x + d - 3.2, y], [x + d + 3.2, y]]); });
  if (c.k === 'A') {
    body(s, 150, 104, 'n');
    straight(s, [150, 134], [150, 170]);
    lab(s, 142, 156, it('gametes fuse'), { size: 11, anchor: 'end', color: C.slate });
    s.add(`<circle cx="150" cy="182" r="5.2" fill="none" stroke="${C.mari}" stroke-width="2.2"/>`); keep(s, Array.from({ length: 13 }, (_, i): P => [150 + 5.2 * Math.cos((i / 12) * 6.283), 182 + 5.2 * Math.sin((i / 12) * 6.283)]));
    lab(s, 140, 187, 'zygote (2n)', { size: 12, bold: true, anchor: 'end', color: C.amber });
    straight(s, [150, 192], [150, 228], C.mari);
    lab(s, 142, 216, it('meiosis'), { size: 11, anchor: 'end', color: C.amber });
    spores(150, 242, 'n');
    lab(s, 150, 264, 'n spores', { size: 11 });
    arrow(s, [168, 246], [262, 238], [268, 150], [198, 126]);
    ['spores', 'grow into', 'gametophytes'].forEach((t, i) => lab(s, 254, 176 + i * 13, it(t), { size: 11, anchor: 'start', color: C.slate }));
    pat.eg.forEach((t, i) => lab(s, W / 2, 296 + i * 14, t, { size: 11, color: C.slate }));
  } else if (c.k === 'B') {
    body(s, 180, 104, '2n');
    straight(s, [160, 134], [160, 190], C.mari);
    lab(s, 152, 166, it('meiosis'), { size: 11, anchor: 'end', color: C.amber });
    straight(s, [204, 190], [204, 134]);
    ['gametes fuse', '(zygote 2n', 'grows up)'].forEach((t, i) => lab(s, 214, 160 + i * 13, it(t), { size: 11, anchor: 'start', color: C.slate }));
    spores(182, 206, 'n');
    lab(s, 182, 228, 'n gametes', { size: 11 });
    pat.eg.forEach((t, i) => lab(s, W / 2, 268 + i * 14, t, { size: 11, color: C.slate }));
  } else {
    body(s, 95, 150, 'n'); body(s, 265, 150, '2n');
    arrow(s, [118, 120], [160, 86], [200, 86], [244, 120]);
    lab(s, 180, 82, it('gametes fuse'), { size: 11, color: C.slate });
    arrow(s, [244, 180], [200, 214], [160, 214], [118, 180], C.mari);
    lab(s, 180, 222, it('meiosis') + ' → ' + it('spores'), { size: 11, color: C.amber });
    pat.eg.forEach((t, i) => lab(s, W / 2, 266 + i * 14, t, { size: 11, color: C.slate }));
  }
  return s;
}
function check32(c: { k: 'A' | 'B' | 'C' }): Check[] {
  const s = draw32(c), pat = PATTERNS[c.k];
  const bodies = s.labels.filter((l) => l.text === 'gametophyte' || l.text === 'sporophyte').map((l) => l.text);
  const expect = pat.bodies.map((b) => (b === 'n' ? 'gametophyte' : 'sporophyte'));
  return [
    ['The book\'s title, the key (n haploid, 2n diploid) and the example line(s) are on the drawing', has(s, pat.title) && has(s, 'n (haploid)') && has(s, '2n (diploid)') && pat.eg.every((e) => has(s, plain(e)))],
    [{ A: 'Haplontic: the only multicellular body is the haploid gametophyte; the zygote is the one 2n cell and meiosis follows at once (n spores)', B: 'Diplontic: the only multicellular body is the diploid sporophyte; the only haploid stage is the gametes (no haploid body)', C: 'Haplo-diplontic: BOTH a haploid gametophyte and a diploid sporophyte are multicellular bodies, and there is no free single-cell stage drawn between them' }[c.k], bodies.join() === expect.join() && (c.k === 'C' ? bodies.length === 2 && pat.cells.length === 0 : bodies.length === 1)],
    ['Phases follow the cycle: A has 2n only in the zygote, B has n only in the gametes, C alternates n and 2n bodies', c.k === 'A' ? pat.bodies.join() === 'n' && pat.cells.join() === '2n,n' && has(s, 'zygote (2n)') && has(s, 'n spores') : c.k === 'B' ? pat.bodies.join() === '2n' && pat.cells.join() === 'n' && has(s, 'n gametes') : pat.bodies.join() === 'n,2n' && has(s, 'gametes fuse') && has(s, 'meiosis → spores')],
    ['The diploid phase alone is in the marigold highlight (the 2n body or the zygote ring), the haploid phase in ink', s.svg().includes(C.mari) === (c.k !== 'A' || has(s, 'zygote (2n)'))],
    ...layout(s), clean(s),
  ];
}
const fig32: Diagram = {
  id: 'b11-03-fig-3.2', topic: 1, name: 'Life-cycle patterns',
  cases: [{ chip: 'Haplontic', k: 'A', cap: CAP32 }, { chip: 'Diplontic', k: 'B', cap: CAP32B }, { chip: 'Haplo-diplontic', k: 'C', cap: CAP32 }],
  draw: draw32, check: check32,
};

/* ================= Figure 3.3 ================= */
const CAP33 = '<i>Dryopteris</i>: the large sporophyte (2n) with rhizome, true roots and fronds bearing sori on the underside of the pinnae, and the small heart-shaped prothallus (gametophyte, n) bearing archegonia and antheridia on its underside.';
const SPO = { rx0: 160, rx1: 280, ry: 192, fronds: [{ x: 180, top: [186, 84] }, { x: 220, top: [220, 66] }, { x: 260, top: [254, 84] }] as { x: number; top: P }[] };
const PINNAE = 8;
const HEART = { cx: 150, cy: 362, k: 3.4 };
const heart = (t: number): P => [HEART.cx + HEART.k * 16 * Math.sin(t) ** 3, HEART.cy - HEART.k * (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t))];
const ARCH: P[] = [[145, 351], [155, 348]], ANTH: P[] = [[142, 386], [158, 390]];
const soriOf = () => SPO.fronds.flatMap((f) => Array.from({ length: PINNAE }, (_, i) => {
  const t = 0.18 + (i / (PINNAE - 1)) * 0.68, x = SPO.ry && f.x + (f.top[0] - f.x) * t, y = SPO.ry - (SPO.ry - f.top[1]) * t, L = 15 * (1 - 0.45 * t);
  return [-1, 1].map((d): { base: P; tip: P; sorus: P } => {
    const tip: P = [x + d * L * Math.cos(rad(35)), y - L * Math.sin(rad(35))];
    return { base: [x, y], tip, sorus: [x + d * L * 0.72 * Math.cos(rad(35)), y - L * 0.72 * Math.sin(rad(35)) + 3.2] };
  });
}).flat());
function draw33(): Sketch {
  const s = new Sketch(W, 462);
  lab(s, W / 2, 24, '<i>Dryopteris</i>: sporophyte and gametophyte', { size: 14, bold: true });
  lab(s, 220, 52, 'Sporophyte (2n)', { size: 13, bold: true });
  // sporophyte: rhizome, true roots, three fronds with pinnae and sori
  s.add(`<rect x="${SPO.rx0}" y="${SPO.ry - 6}" width="${SPO.rx1 - SPO.rx0}" height="13" rx="6" fill="none" stroke="${C.ink}" stroke-width="1.9"/>`);
  keep(s, [[SPO.rx0, SPO.ry - 6], [SPO.rx1, SPO.ry - 6], [SPO.rx1, SPO.ry + 7], [SPO.rx0, SPO.ry + 7], [SPO.rx0, SPO.ry - 6]]);
  const roots: P[] = [];
  [176, 198, 220, 242, 264].forEach((x) => { const pts: P[] = [[x, SPO.ry + 7], [x - 4, SPO.ry + 15], [x + 2, SPO.ry + 22], [x - 3, SPO.ry + 30]]; path(s, pts, { color: C.slate, w: 1.5 }); roots.push(pts[3]); });
  SPO.fronds.forEach((f) => path(s, [[f.x, SPO.ry - 6], [(f.x + f.top[0]) / 2 + (f.top[0] - f.x) * 0.1, (SPO.ry + f.top[1]) / 2], f.top]));
  soriOf().forEach(({ base, tip, sorus }) => {
    path(s, [base, tip], { w: 1.4 });
    s.add(`<circle cx="${r1(sorus[0])}" cy="${r1(sorus[1])}" r="2.2" fill="none" stroke="${C.mari}" stroke-width="1.6"/>`);
  });
  const lf = soriOf().filter((q) => q.sorus[0] < 200)[6];
  call(s, 'l', 150, 80, 'Frond with sori', ['(sporangia clusters)'], lf.sorus, true);
  call(s, 'l', 150, 176, 'Rhizome (stem)', [], [SPO.rx0 + 2, SPO.ry]);
  call(s, 'l', 190, 238, 'True roots', [], roots[1]);
  // gametophyte: heart-shaped prothallus
  lab(s, 150, 300, 'Prothallus (gametophyte, n)', { size: 13, bold: true });
  const hp = Array.from({ length: 61 }, (_, i) => heart((i / 60) * Math.PI * 2));
  path(s, hp, { close: true, w: 1.9 });
  const tipY = heart(Math.PI)[1];
  [-12, -6, 0, 6, 12].forEach((d) => path(s, [[HEART.cx, tipY - 1], [HEART.cx + d, tipY + 13]], { color: C.slate, w: 1.4 }));
  ARCH.forEach((p) => { s.add(`<circle cx="${p[0]}" cy="${p[1]}" r="3.2" fill="none" stroke="${C.ink}" stroke-width="1.6"/>`); keep(s, [[p[0] - 3.2, p[1]], [p[0] + 3.2, p[1]]]); });
  ANTH.forEach((p) => s.add(`<circle cx="${p[0]}" cy="${p[1]}" r="3" fill="${C.ink}"/>`));
  call(s, 'r', 214, 324, 'Archegonia', ['(egg-producing)'], [ARCH[1][0] + 4, ARCH[1][1] - 1]);
  call(s, 'r', 214, 372, 'Antheridia', ['(sperm-producing)'], [ANTH[1][0] + 4, ANTH[1][1]]);
  call(s, 'l', 100, 414, 'Rhizoids', [], [HEART.cx - 6, tipY + 9]);
  return s;
}
function check33(): Check[] {
  const s = draw33(), cs = CALLS.get(s)!, so = soriOf();
  const sporoH = SPO.ry - Math.min(...SPO.fronds.map((f) => f.top[1])), hp = Array.from({ length: 61 }, (_, i) => heart((i / 60) * Math.PI * 2));
  const protH = Math.max(...hp.map((p) => p[1])) - Math.min(...hp.map((p) => p[1])), protW = Math.max(...hp.map((p) => p[0])) - Math.min(...hp.map((p) => p[0]));
  const notchY = heart(0)[1];
  return [
    ['Every name and heading is the book\'s: Sporophyte (2n), Prothallus (gametophyte, n), Frond with sori (sporangia clusters), Rhizome (stem), True roots, Archegonia (egg-producing), Antheridia (sperm-producing), Rhizoids', ['Sporophyte (2n)', 'Prothallus (gametophyte, n)', 'Frond with sori', '(sporangia clusters)', 'Rhizome (stem)', 'True roots', 'Archegonia', '(egg-producing)', 'Antheridia', '(sperm-producing)', 'Rhizoids'].every((t) => has(s, t))],
    [`The sporophyte is the large body and the prothallus the small one (sporophyte ${r1(SPO.rx1 - SPO.rx0)} x ${r1(sporoH)} px, prothallus ${r1(protW)} x ${r1(protH)} px)`, sporoH > protH * 1.0 && SPO.rx1 - SPO.rx0 > protW],
    [`Three fronds each carry ${PINNAE} pairs of pinnae and a sorus on the underside of each of the ${so.length / 3} pinnae`, so.length === 3 * PINNAE * 2 && so.every((q) => q.sorus[1] > q.tip[1])],
    ['The archegonia are near the notch (top) and the antheridia near the rhizoids (the pointed end, lower)', ARCH.every((p) => p[1] > notchY) && ANTH.every((p) => p[1] > Math.max(...ARCH.map((q) => q[1]))) && ANTH.every((p) => p[1] < heart(Math.PI)[1])],
    ['The sori are the only highlight (sori circles and the "Frond with sori" tag)', cs.filter((c) => c.name === 'Frond with sori').length === 1 && s.svg().includes(C.mari)],
    ...layout(s), clean(s),
  ];
}
const fig33: Diagram = { id: 'b11-03-fig-3.3', topic: 2, name: 'Dryopteris: sporophyte and prothallus', cases: [{ chip: 'Dryopteris', cap: CAP33 }], draw: draw33, check: check33 };

/* ================= Figure 3.4 ================= */
const CAP34 = '<i>Pinus</i>: sporophyte tree (2n) with small male cones and a larger female cone. Inset 1: a microsporophyll shedding winged pollen grains (n). Inset 2: an ovuliferous scale with a naked ovule; the nucellus (megasporangium) encloses the female gametophyte (n) with archegonia.';
const MALE = { rx: 3.8, ry: 6.5, at: [[148, 183], [158, 190], [139, 190]] as P[] }, FEM = { cx: 218, cy: 208, rx: 10, ry: 17 };
const OVU = { cx: 56, cy: 478, integ: 28, nuc: 20, gam: 12 };
function draw34(): Sketch {
  const s = new Sketch(W, 610);
  lab(s, W / 2, 24, '<i>Pinus</i> (gymnosperm): cones and reproduction', { size: 14, bold: true });
  lab(s, 180, 52, 'Sporophyte (2n)', { size: 13, bold: true });
  // the tree: trunk, branches with needle tufts, male cones, female cone
  path(s, [[180, 262], [180, 84]], { w: 3 });
  const BR: [P, P][] = [[[180, 214], [143, 176]], [[180, 160], [156, 128]], [[180, 190], [214, 170]], [[180, 124], [208, 98]], [[180, 84], [190, 72]]];
  BR.forEach(([a, b]) => { path(s, [a, b], { w: 2.4 }); for (const d of [-50, -25, 0, 25, 50]) { const an = rad(-90 + d); path(s, [b, [b[0] + 9 * Math.cos(an), b[1] + 9 * Math.sin(an)]], { color: C.slate, w: 1.2 }); } });
  MALE.at.forEach(([x, y]) => ell(s, x, y, MALE.rx, MALE.ry, { w: 1.4 }));
  path(s, [[214, 170], [FEM.cx, FEM.cy - FEM.ry]], { w: 2 });
  ell(s, FEM.cx, FEM.cy, FEM.rx, FEM.ry);
  [-9, -3, 3, 9].forEach((d) => path(s, [[FEM.cx - FEM.rx * Math.sqrt(1 - (d / FEM.ry) ** 2) + 1, FEM.cy + d], [FEM.cx + FEM.rx * Math.sqrt(1 - (d / FEM.ry) ** 2) - 1, FEM.cy + d]], { color: C.slate, w: 1.2 }));
  call(s, 'l', 104, 130, 'Male cones', ['(small; bear', 'microsporangia)'], [MALE.at[2][0] - 3, MALE.at[2][1] - 2]);
  call(s, 'r', 244, 196, 'Female cone', ['(larger; bears ovules', 'with megasporangia)'], [FEM.cx + FEM.rx, FEM.cy]);
  // Inset 1: male cone scale
  const bx0 = 8, bx1 = 352;
  const box = (y0: number, y1: number) => { s.add(`<rect x="${bx0}" y="${y0}" width="${bx1 - bx0}" height="${y1 - y0}" rx="8" fill="none" stroke="${C.slate}" stroke-width="1.4"/>`); keep(s, [[bx0, y0], [bx1, y0], [bx1, y1], [bx0, y1], [bx0, y0]]); };
  box(280, 392);
  lab(s, 20, 302, 'Inset 1: male cone scale', { size: 12, bold: true, anchor: 'start' });
  const grains: P[] = [[40, 330], [62, 322], [84, 332]];
  grains.forEach(([x, y]) => { ell(s, x - 8, y, 5, 3, { w: 1.3 }); ell(s, x + 8, y, 5, 3, { w: 1.3 }); ell(s, x, y, 4.2, 4.2, { w: 1.7 }); });
  path(s, [[22, 350], [100, 350], [90, 376], [32, 376]], { close: true });
  ell(s, 51, 363, 10, 5, { w: 1.4 }); ell(s, 72, 363, 10, 5, { w: 1.4 });
  call(s, 'r', 150, 312, 'Winged pollen grains (n)', [], [grains[2][0] + 13, grains[2][1]]);
  call(s, 'r', 150, 346, 'Microsporophyll', ['(bears microsporangia)'], [95, 363]);
  // Inset 2: female cone scale
  box(404, 598);
  lab(s, 20, 426, 'Inset 2: female cone scale', { size: 12, bold: true, anchor: 'start' });
  const a0 = rad(-90 + 15), a1 = rad(-90 - 15 + 360);
  path(s, Array.from({ length: 31 }, (_, i): P => { const a = a0 + (i / 30) * (a1 - a0); return [OVU.cx + OVU.integ * Math.cos(a), OVU.cy + OVU.integ * Math.sin(a)]; }), { color: C.mari, w: 2.2 });
  ell(s, OVU.cx, OVU.cy, OVU.nuc, OVU.nuc);
  ell(s, OVU.cx, OVU.cy + 2, OVU.gam, OVU.gam - 1);
  [-5, 5].forEach((d) => ell(s, OVU.cx + d, OVU.cy + 2 - OVU.gam + 1, 2.6, 2.6, { w: 1.4 }));
  path(s, [[24, 507], [88, 507], [100, 525], [12, 525]], { close: true });
  call(s, 'r', 122, 436, 'Micropyle', [], [OVU.cx, OVU.cy - OVU.integ]);
  call(s, 'r', 122, 462, 'Naked ovule', [], [OVU.cx + OVU.integ * Math.cos(rad(-35)), OVU.cy + OVU.integ * Math.sin(rad(-35))], true);
  call(s, 'r', 122, 488, 'Nucellus (megasporangium)', [], [OVU.cx + OVU.nuc * Math.cos(rad(30)), OVU.cy + OVU.nuc * Math.sin(rad(30))]);
  call(s, 'r', 122, 514, 'Female gametophyte (n)', ['with archegonia'], [OVU.cx + 3, OVU.cy + 8]);
  call(s, 'r', 122, 566, 'Ovuliferous scale', [], [94, 516]);
  return s;
}
function check34(): Check[] {
  const s = draw34(), cs = CALLS.get(s)!;
  const at = (n: string) => cs.find((c) => c.name === n)!.p;
  return [
    ['Every label is the book\'s: the two insets\' headings, Male cones, Female cone, Winged pollen grains (n), Microsporophyll, Micropyle, Naked ovule, Nucellus (megasporangium), Female gametophyte (n) with archegonia, Ovuliferous scale', ['Sporophyte (2n)', 'Inset 1: male cone scale', 'Inset 2: female cone scale', 'Male cones', '(small; bear', 'microsporangia)', 'Female cone', '(larger; bears ovules', 'with megasporangia)', 'Winged pollen grains (n)', 'Microsporophyll', '(bears microsporangia)', 'Micropyle', 'Naked ovule', 'Nucellus (megasporangium)', 'Female gametophyte (n)', 'with archegonia', 'Ovuliferous scale'].every((t) => has(s, t))],
    [`The male cones are small and the female cone larger (male ${MALE.rx * 2} x ${MALE.ry * 2} px each, female ${FEM.rx * 2} x ${FEM.ry * 2} px), there are several male cones and one female cone`, FEM.ry > MALE.ry * 2 && FEM.rx > MALE.rx * 2 && MALE.at.length > 1],
    ['The ovule is nested: the female gametophyte lies inside the nucellus, which lies inside the integument; the micropyle is a gap at the top of the integument and the ovule sits on the ovuliferous scale', OVU.gam < OVU.nuc && OVU.nuc < OVU.integ && at('Micropyle')[1] === OVU.cy - OVU.integ && OVU.cy + OVU.integ <= 507 && inEll(at('Female gametophyte (n)'), OVU.cx, OVU.cy + 2, OVU.gam, OVU.gam - 1)],
    ['The nucellus leader ends on the nucellus circle and the naked ovule leader on the ovule\'s outer wall', Math.abs(len(at('Nucellus (megasporangium)'), [OVU.cx, OVU.cy]) - OVU.nuc) < 0.01 && Math.abs(len(at('Naked ovule'), [OVU.cx, OVU.cy]) - OVU.integ) < 0.01],
    ['Only the naked ovule is in the highlight (its wall and its tag)', s.tags.filter((t) => t.name === 'Naked ovule').length === 1],
    ...layout(s), clean(s),
  ];
}
const fig34: Diagram = { id: 'b11-03-fig-3.4', topic: 3, name: 'Pinus: cones and reproduction', cases: [{ chip: 'Pinus cones', cap: CAP34 }], draw: draw34, check: check34 };

/* ================= Figure 3.5 ================= */
const CAP35 = 'Mature angiosperm embryo sac (7 cells, 8 nuclei): egg apparatus (egg cell + two synergids) at the micropylar end, three antipodal cells at the chalazal end, and the large central cell with two polar nuclei.';
const SAC = { cx: 180, cy: 156, rx: 54, ry: 100 };
type Cell = { name: string; cx: number; cy: number; rx: number; ry: number; nuclei: P[] };
const CELLS: Cell[] = [
  { name: 'antipodal', cx: 158, cy: 104, rx: 11, ry: 9, nuclei: [[158, 104]] },
  { name: 'antipodal', cx: 180, cy: 104, rx: 11, ry: 9, nuclei: [[180, 104]] },
  { name: 'antipodal', cx: 202, cy: 104, rx: 11, ry: 9, nuclei: [[202, 104]] },
  { name: 'central', cx: 180, cy: 152, rx: 40, ry: 34, nuclei: [[166, 152], [194, 152]] },
  { name: 'synergid', cx: 158, cy: 212, rx: 11, ry: 16, nuclei: [[158, 208]] },
  { name: 'egg', cx: 180, cy: 216, rx: 10, ry: 18, nuclei: [[180, 212]] },
  { name: 'synergid', cx: 202, cy: 212, rx: 11, ry: 16, nuclei: [[202, 208]] },
];
const APP = { cx: 180, cy: 214, rx: 36, ry: 25 };
function draw35(): Sketch {
  const s = new Sketch(W, 372);
  lab(s, W / 2, 24, 'Mature embryo sac: 7 cells, 8 nuclei', { size: 14, bold: true });
  ell(s, SAC.cx, SAC.cy, SAC.rx + 4, SAC.ry + 4, { w: 2.2 });
  ell(s, SAC.cx, SAC.cy, SAC.rx, SAC.ry, { w: 1.2 });
  for (const c of CELLS) {
    const egg = c.name === 'egg';
    ell(s, c.cx, c.cy, c.rx, c.ry, egg ? { color: C.mari, w: 2.2 } : {});
    c.nuclei.forEach(([x, y]) => s.add(c.name === 'central' || egg ? `<circle cx="${x}" cy="${y}" r="${egg ? 4 : 6}" fill="none" stroke="${egg ? C.mari : C.ink}" stroke-width="1.8"/>` : `<circle cx="${x}" cy="${y}" r="3.2" fill="${C.ink}"/>`));
  }
  s.line(172, 152, 188, 152, { color: C.slate, w: 1.4, dash: true });
  ell(s, APP.cx, APP.cy, APP.rx, APP.ry, { color: C.slate, w: 1.3, dash: true });
  const topY = (x: number) => SAC.cy - (SAC.ry + 4) * Math.sqrt(1 - ((x - SAC.cx) / (SAC.rx + 4)) ** 2), botY = (x: number) => SAC.cy + (SAC.ry + 4) * Math.sqrt(1 - ((x - SAC.cx) / (SAC.rx + 4)) ** 2);
  call(s, 'l', 118, 36, 'Chalaza', [], [166, topY(166)]);
  call(s, 'r', 236, 44, 'Antipodal cells', ['(3 cells,', 'chalazal end)'], [213, 100]);
  call(s, 'r', 242, 124, 'Central cell', ['(1 cell,', '2 polar nuclei)'], [218, 138]);
  call(s, 'l', 118, 168, 'Synergid', [], [150, 206]);
  call(s, 'r', 242, 188, 'Synergid', [], [210, 206]);
  call(s, 'l', 118, 218, 'Egg apparatus', ['(egg + 2 synergids,', 'micropylar end)'], [APP.cx - APP.rx + 1, APP.cy + 6]);
  call(s, 'r', 242, 240, 'Micropyle', [], [190, botY(190)]);
  call(s, 'r', 214, 276, 'Egg cell', [], [182, CELLS[5].cy + CELLS[5].ry], true);
  lab(s, W / 2, 330, '3 (egg apparatus) + 3 (antipodals) + 1 (central) = 7 cells', { size: 11, color: C.slate });
  lab(s, W / 2, 346, '6 × 1 + 2 = 8 nuclei', { size: 11, color: C.slate });
  return s;
}
function check35(): Check[] {
  const s = draw35(), cs = CALLS.get(s)!;
  const nuc = CELLS.reduce((a, c) => a + c.nuclei.length, 0), egg = CELLS.find((c) => c.name === 'egg')!;
  const inside = (c: Cell) => [0, 90, 180, 270].every((d) => inEll([c.cx + c.rx * Math.cos(rad(d)), c.cy + c.ry * Math.sin(rad(d))], SAC.cx, SAC.cy, SAC.rx, SAC.ry, 1));
  const appPts = Array.from({ length: 24 }, (_, i): P => [APP.cx + APP.rx * Math.cos((i / 24) * 6.283), APP.cy + APP.ry * Math.sin((i / 24) * 6.283)]);
  const cell = (n: string) => CELLS.filter((c) => c.name === n);
  return [
    [`The drawing has ${CELLS.length} cells and ${nuc} nuclei (3 egg apparatus + 3 antipodals + 1 central = 7; 6 x 1 + 2 = 8), counted from the cells it draws`, CELLS.length === 7 && nuc === 8 && CELLS.filter((c) => c.name !== 'central').every((c) => c.nuclei.length === 1) && cell('central')[0].nuclei.length === 2],
    ['The egg apparatus is one egg cell between two synergids, at the micropylar (lower) end, and the dashed line round it holds exactly those three cells', cell('egg').length === 1 && cell('synergid').length === 2 && cell('synergid')[0].cx < egg.cx && cell('synergid')[1].cx > egg.cx && [egg, ...cell('synergid')].every((c) => inEll([c.cx, c.cy], APP.cx, APP.cy, APP.rx, APP.ry)) && cell('central').concat(cell('antipodal')).every((c) => !inEll([c.cx, c.cy], APP.cx, APP.cy, APP.rx, APP.ry))],
    ['Three antipodal cells at the chalazal (top) end, the large central cell between them and the egg apparatus', cell('antipodal').length === 3 && cell('antipodal').every((c) => c.cy < cell('central')[0].cy) && cell('central')[0].cy < egg.cy],
    ['Every cell lies inside the embryo sac, and the egg apparatus\' dashed outline too', CELLS.every(inside) && appPts.every((p) => inEll(p, SAC.cx, SAC.cy, SAC.rx, SAC.ry, 0))],
    ['The book\'s labels and the count lines are on the drawing; the egg cell alone is in the highlight', ['Chalaza', 'Antipodal cells', 'Central cell', 'Synergid', 'Egg apparatus', 'Micropyle', 'Egg cell', '3 (egg apparatus) + 3 (antipodals) + 1 (central) = 7 cells', '6 × 1 + 2 = 8 nuclei', '(3 cells,', 'chalazal end)', '(1 cell,', '2 polar nuclei)', '(egg + 2 synergids,', 'micropylar end)'].every((t) => has(s, t)) && cs.filter((c) => c.name === 'Synergid').length === 2],
    ...layout(s), clean(s),
  ];
}
const fig35: Diagram = { id: 'b11-03-fig-3.5', topic: 4, name: 'The mature embryo sac', cases: [{ chip: 'Embryo sac', cap: CAP35 }], draw: draw35, check: check35 };

/** BIOLOGY CLASS 11, CHAPTER 3 (Plant Kingdom): the drawings of the Master Reference book on pp. 142–220, redrawn. */
export const DIAGRAMS_BIOLOGY_11_03: Diagram[] = [fig31, fig32, fig33, fig34, fig35];
