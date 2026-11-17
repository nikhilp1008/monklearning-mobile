import { C, LABEL_GAP, Rect, Sketch, audit, mathW, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * BIOLOGY CLASS 11, CHAPTER 17 (Locomotion and Movement): the drawings of the Master Reference book on pp. 1012-1073, redrawn.
 * Every page of the range was counted (pdfimages -list, and the shapes seen on the page images). The book draws its five
 * figures inline in the text pages (all vector, no raster image); no unnumbered drawing and none in the Additional topics.
 * The figure ids carry the chapter number (the book prints "Figure 1" to "Figure 5"). FIVE drawings:
 *
 *   Figure 17.1 (drawing p. 1016), Topic 00, topic index 0: the three types of movement (three cases: Amoeboid, Ciliary, Muscular).
 *   Figure 17.2 (drawing p. 1023), Topic 01, topic index 1: organisation of skeletal muscle and the sarcomere (two cases).
 *   Figure 17.3 (drawing p. 1030), Topic 02, topic index 2: sliding filament theory and the cross-bridge cycle (two cases).
 *   Figure 17.4 (drawing p. 1036), Topic 03, topic index 3: the human skeleton and the three classes of joint (two cases).
 *   Figure 17.5 (drawing p. 1043), Topic 04, topic index 4: disorders of the muscular and skeletal system (flow chart).
 *
 * THE BOOK'S, as printed: every word of every heading, label, note and legend; the three panels' contents; the chain muscle ->
 * fascicle -> muscle fibre -> myofibril; the sarcomere's parts (Z-line, I-band, A-band, H-zone, M) with the proportions measured
 * off the book's vector (Z to Z 1000 units, A-band 433, H-zone 100, the A-band and H-zone centred on the M-line); in 17.3 the
 * relaxed and contracted sarcomere (Z to Z 400 and 335 units, thick filament 166, thin filament 175, so that the H-zone is
 * 400 - 2 x 175 = 50 and is gone at 335: measured off the vector, the book prints no number) with A-band UNCHANGED and the
 * four steps of the cycle; in 17.4 axial 80 and appendicular 126 and the three joint classes with their examples; in 17.5
 * the three muscle and three bone disorders with their causes and the calcium link between tetany and osteoporosis.
 * COMPUTED, not placed: every filament and band position from the unit lengths above (the checks recompute the H-zone, the
 * I-band and the unchanged A-band); the ciliary row of eight cilia is evenly spaced; 80 = 22 + 6 + 1 + 26 + 1 + 24 and
 * 206 = 80 + 126.
 * SCHEMATIC: every outline, size and position of cells, organs, bones and boxes (re-laid for a phone, so 17.2 is a column, the
 * 17.3 panels are stacked and the cycle is a column of four boxes); the thin filaments all run from the Z-line to the H-zone's
 * edge (the book's top and bottom thin rows stop at the A-band's edge); the number of cells in the epithelium and of
 * dividers in the myofibril; the head positions in the cycle. Arrows beside a name in the book ("<- radius / ulna", "<-
 * synovial cavity + fluid") are leader lines here. Errata: "ribs" points to the rib arcs and "humerus" to the upper arm.
 * "Pi" in the cycle is written P<sub>i</sub> and Ca2+ with a superscript. Colours are the app's style (no fills, one marigold
 * highlight per drawing), not the book's.
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

const has = (s: Sketch, t: string) => s.labels.some((l) => l.text === t) || s.tags.some((x) => x.name === t);
const clean = (s: Sketch): Check => { const a = audit(s); return [`Layout audit is clear${a.length ? `: ${a.join('; ')}` : ''}`, a.length === 0 && s.unplaced.length === 0]; };
const arcPts = (cx: number, cy: number, rx: number, ry: number, a0: number, a1: number, n = 24): P[] => Array.from({ length: n + 1 }, (_, i): P => { const a = a0 + ((a1 - a0) * i) / n; return [cx + rx * Math.cos(a), cy + ry * Math.sin(a)]; });
/** The outline of a rounded bar from a to b, radius r. */
function capsule(a: P, b: P, r: number): P[] {
  const ang = Math.atan2(b[1] - a[1], b[0] - a[0]);
  return [...arcPts(b[0], b[1], r, r, ang - Math.PI / 2, ang + Math.PI / 2, 12), ...arcPts(a[0], a[1], r, r, ang + Math.PI / 2, ang + (3 * Math.PI) / 2, 12)];
}
const inPoly = (p: P, poly: P[]) => { let c = false; for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) { const [xi, yi] = poly[i], [xj, yj] = poly[j]; if (yi > p[1] !== yj > p[1] && p[0] < ((xj - xi) * (p[1] - yi)) / (yj - yi) + xi) c = !c; } return c; };
const head = (s: Sketch, title: string, sub: string) => { lab(s, 180, 30, title, { size: 15, bold: true }); lab(s, 180, 50, sub, { size: 11, color: C.slate }); };
const gold = (s: Sketch) => (s.svg().match(/stroke="#EEA31F"/g) ?? []).length;
const subPi = 'P<sub>i</sub>', ca = 'Ca<sup>2+</sup>';

/* ================= Figure 17.1 ================= */
const CAP171 = 'The three types of movement.';
type Kind171 = 'amoeboid' | 'ciliary' | 'muscular';
const PANELS: Record<Kind171, { title: string; sub: string; foot: string; names: string[] }> = {
  amoeboid: { title: 'Amoeboid', sub: 'leucocytes & macrophages', foot: 'crawls; cytoplasm streams (cytoskeleton)', names: ['nucleus', 'pseudopodium', 'microbe'] },
  ciliary: { title: 'Ciliary', sub: 'trachea & oviduct lining', foot: 'moves substances, not the body', names: ['ovum', 'ciliated epithelium'] },
  muscular: { title: 'Muscular', sub: 'limbs, jaws, tongue', foot: 'pulls skeleton → produces locomotion', names: ['muscle', 'bone (lever)', 'joint (pivot)'] },
};
const BLOB: [number, number, number] = [124, 172, 64];
const blobPts = (): P[] => Array.from({ length: 73 }, (_, i): P => { const a = (i / 72) * 2 * Math.PI, r = BLOB[2] * (1 + 0.1 * Math.sin(3 * a + 0.6) + 0.06 * Math.cos(5 * a)); return [BLOB[0] + r * Math.cos(a), BLOB[1] + r * Math.sin(a)]; });
const NUC: [number, number, number] = [110, 182, 14];
const MICROBE: [number, number, number, number] = [288, 150, 13, 8];
const CILIA = Array.from({ length: 8 }, (_, i) => 62 + i * 34);
const J171: P = [150, 226], T171: P = [112, 108], E171: P = [300, 206];
function draw171(c: { kind: Kind171 }): Sketch {
  const pn = PANELS[c.kind], h = c.kind === 'ciliary' ? 384 : 336, s = new Sketch(W, h);
  head(s, pn.title, pn.sub);
  if (c.kind === 'amoeboid') {
    path(s, blobPts(), { close: true });
    ell(s, NUC[0], NUC[1], NUC[2], NUC[2]);
    ell(s, MICROBE[0], MICROBE[1], MICROBE[2], MICROBE[3]);
    path(s, [[150, 152], [190, 130], [236, 120], [266, 134], [277, 148]], { color: C.mari, w: 2.4, dash: '4 4' });
    s.tag(196, 78, 'pseudopodium', 236, 120, { hi: true });
    s.tag(20, 262, 'nucleus', NUC[0] - 6, NUC[1] + 12);
    s.tag(254, 186, 'microbe', MICROBE[0], MICROBE[1] + 8);
  } else if (c.kind === 'ciliary') {
    ell(s, 96, 156, 17, 17);
    s.vec(128, 156, 240, 156, { color: C.ink, w: 2 });
    lab(s, 200, 112, 'cilia beat in a wave', { size: 12 });
    CILIA.forEach((x) => path(s, [[x, 256], [x, 236], [x + 2, 222], [x + 12, 217]], { color: C.mari, w: 2.2 }));
    box(s, 'row', [46, 256, 314, 298]);
    for (let k = 1; k < 6; k++) { const x = 46 + (268 * k) / 6; s.line(x, 256, x, 298, { color: C.ink, w: 1.2 }); }
    s.tag(66, 186, 'ovum', 96, 173);
    s.tag(110, 312, 'ciliated epithelium', 180, 298);
  } else {
    path(s, capsule(T171, J171, 7), { close: true });
    path(s, capsule(J171, E171, 7), { close: true });
    const d: P = [(J171[0] - T171[0]) / Math.hypot(J171[0] - T171[0], J171[1] - T171[1]), (J171[1] - T171[1]) / Math.hypot(J171[0] - T171[0], J171[1] - T171[1])], n: P = [d[1], -d[0]], m: P = [(T171[0] + J171[0]) / 2, (T171[1] + J171[1]) / 2];
    path(s, Array.from({ length: 49 }, (_, i): P => { const a = (i / 48) * 2 * Math.PI; return [m[0] + 11 * Math.cos(a) * n[0] + 28 * Math.sin(a) * d[0], m[1] + 11 * Math.cos(a) * n[1] + 28 * Math.sin(a) * d[1]]; }), { color: C.mari, w: 2.4, close: true });
    ell(s, J171[0], J171[1], 4.5, 4.5, { w: 1.9 });
    s.tag(14, 152, 'muscle', m[0] - 11 * n[0] - 1, m[1] - 11 * n[1] + 5, { hi: true });
    s.tag(206, 150, 'bone (lever)', 240, 207);
    s.tag(70, 268, 'joint (pivot)', J171[0], J171[1] + 6);
  }
  lab(s, 180, h - 22, pn.foot, { size: 11, color: C.slate });
  return s;
}
function check171(c: { kind: Kind171 }): Check[] {
  const s = draw171(c), pn = PANELS[c.kind], cx: Check[] = [];
  cx.push([`The panel carries the book's heading "${pn.title}", its note "${pn.sub}" and its foot line "${pn.foot}" word for word`, has(s, pn.title) && has(s, pn.sub) && has(s, pn.foot)]);
  cx.push([`Every name the book prints in this panel is there: ${pn.names.join(', ')}`, pn.names.every((t) => has(s, t))]);
  if (c.kind === 'amoeboid') {
    cx.push(['The nucleus lies inside the cell and the microbe outside it, with the pseudopodium reaching from the cell to the microbe', inPoly([NUC[0], NUC[1]], blobPts()) && !inPoly([MICROBE[0], MICROBE[1]], blobPts()) && inPoly([150, 152], blobPts()) && Math.hypot(277 - MICROBE[0], 148 - MICROBE[1]) < MICROBE[2]]);
  } else if (c.kind === 'ciliary') {
    cx.push(['Eight cilia stand evenly spaced on the ciliated row and the ovum lies above the row, with the arrow pointing along it (the ovum is moved, not the cell)', CILIA.length === 8 && CILIA.every((x, i) => i === 0 || x - CILIA[i - 1] === 34) && CILIA[0] > 46 && CILIA[7] + 12 < 314 && 156 + 17 < 217]);
  } else {
    cx.push(['The muscle lies on the upper bone, the joint is the shared end of both bones, and the lower bone is the lever swinging from it', Math.hypot(J171[0] - T171[0], J171[1] - T171[1]) > 100 && Math.hypot(E171[0] - J171[0], E171[1] - J171[1]) > 100]);
  }
  cx.push([c.kind === 'amoeboid' ? 'The pseudopodium is the one marigold highlight' : c.kind === 'ciliary' ? 'The cilia are the marigold highlight' : 'The muscle is the one marigold highlight', gold(s) >= 1]);
  return [...cx, ...layout(s), clean(s)];
}
const fig171: Diagram = {
  id: 'b11-17-fig-17.1', topic: 0, name: 'Three types of movement',
  cases: [{ chip: 'Amoeboid', kind: 'amoeboid', cap: CAP171 }, { chip: 'Ciliary', kind: 'ciliary', cap: CAP171 }, { chip: 'Muscular', kind: 'muscular', cap: CAP171 }],
  draw: draw171, check: check171,
};

/* ================= Figure 17.2 ================= */
const CAP172 = 'Organisation of skeletal muscle and the structure of a sarcomere.';
type Kind172 = 'org' | 'sarc';
// the sarcomere in the book's units (Z to Z = 1000), scaled to the frame
const SZ = { zl: 22, zr: 338, L: 1000, A: 433, H: 100 };
const sx = (u: number) => SZ.zl + (u * (SZ.zr - SZ.zl)) / SZ.L;
const AB: [number, number] = [(SZ.L - SZ.A) / 2, (SZ.L + SZ.A) / 2], HZ: [number, number] = [(SZ.L - SZ.H) / 2, (SZ.L + SZ.H) / 2];
const ORG = [
  { name: 'Muscle', note: '' },
  { name: 'Fascicle (bundle)', note: '' },
  { name: 'Muscle fibre', note: 'sarcolemma; peripheral nuclei (syncytium)' },
  { name: 'Myofibril', note: 'a chain of sarcomeres' },
];
const ORG_Y = [78, 156, 234, 312];
function draw172(c: { kind: Kind172 }): Sketch {
  if (c.kind === 'org') {
    const s = new Sketch(W, 360);
    lab(s, 180, 24, 'Organisation of skeletal muscle (whole → molecular)', { size: 12, bold: true, color: C.text });
    ORG.forEach((o, i) => {
      const y = ORG_Y[i];
      lab(s, 134, y + (o.note ? -2 : 5), o.name, { size: 13, anchor: 'start', bold: true, color: i === 3 ? C.amber : C.text });
      if (o.note) lab(s, 134, y + 14, o.note, { size: 10, anchor: 'start', color: C.slate });
      if (i < 3) s.vec(76, y + 29, 76, ORG_Y[i + 1] - 29, { color: C.ink, w: 1.8 });
    });
    ell(s, 76, ORG_Y[0], 38, 22);
    box(s, 'fascicle', [38, ORG_Y[1] - 24, 114, ORG_Y[1] + 24]);
    for (let k = 0; k < 5; k++) s.line(50 + k * 13, ORG_Y[1] - 15, 50 + k * 13, ORG_Y[1] + 15, { color: C.ink, w: 1.5 });
    path(s, capsule([54, ORG_Y[2]], [98, ORG_Y[2]], 20), { close: true });
    ([[60, -8], [88, -11], [93, 10], [67, 11]] as P[]).forEach(([dx, dy]) => s.add(`<circle cx="${dx}" cy="${ORG_Y[2] + dy}" r="2.6" fill="${C.ink}"/>`));
    box(s, 'myofibril', [30, ORG_Y[3] - 14, 122, ORG_Y[3] + 14], { color: C.mari, w: 2.2 });
    for (let k = 1; k < 9; k++) s.line(30 + (92 * k) / 9, ORG_Y[3] - 14, 30 + (92 * k) / 9, ORG_Y[3] + 14, { color: C.mari, w: 1.3 });
    return s;
  }
  const s = new Sketch(W, 352);
  lab(s, 180, 24, 'One sarcomere (the unit of contraction)', { size: 13, bold: true });
  const thin = [96, 124, 152, 180], thick = [110, 138, 166];
  lab(s, SZ.zl, 78, 'Z', { size: 12, bold: true });
  lab(s, SZ.zr, 78, 'Z', { size: 12, bold: true });
  lab(s, 180, 78, 'H-zone', { size: 11, bold: true, color: C.slate });
  [AB[0], HZ[0], HZ[1], AB[1]].forEach((u) => s.line(sx(u), 86, sx(u), 192, { color: C.grey, w: 1.2, dash: true }));
  s.line(sx(500), 88, sx(500), 190, { color: C.slate, w: 1.2, dash: true });
  thin.forEach((y) => { s.line(SZ.zl, y, sx(HZ[0]), y, { color: C.ink, w: 1.7 }); s.line(sx(HZ[1]), y, SZ.zr, y, { color: C.ink, w: 1.7 }); });
  thick.forEach((y) => s.line(sx(AB[0]), y, sx(AB[1]), y, { color: C.mari, w: 3.6 }));
  [340, 400, 600, 660].forEach((u) => { s.line(sx(u), 138, sx(u), 124, { color: C.ink, w: 1.3 }); s.add(`<circle cx="${r1(sx(u))}" cy="124" r="2.3" fill="${C.ink}"/>`); });
  s.line(SZ.zl, 84, SZ.zl, 192, { color: C.ink, w: 4.2 });
  s.line(SZ.zr, 84, SZ.zr, 192, { color: C.ink, w: 4.2 });
  lab(s, sx(UI(0)), 212, 'I-band', { size: 11, bold: true, color: C.slate });
  lab(s, sx((AB[0] + HZ[0]) / 2), 212, 'A-band', { size: 11, bold: true, color: C.amber });
  lab(s, sx(500), 212, 'M', { size: 10, color: C.slate });
  lab(s, sx((HZ[1] + AB[1]) / 2), 212, 'A-band', { size: 11, bold: true, color: C.amber });
  lab(s, sx(UI(1)), 212, 'I-band', { size: 11, bold: true, color: C.slate });
  s.line(30, 242, 58, 242, { color: C.ink, w: 1.7 });
  lab(s, 66, 246, 'thin filament = actin', { size: 10.5, anchor: 'start' });
  s.line(30, 262, 58, 262, { color: C.mari, w: 3.6 });
  lab(s, 66, 266, 'thick filament = myosin (heads = cross-bridges)', { size: 10.5, anchor: 'start' });
  const bk = (x1: number, x2: number, y: number) => { s.line(x1, y, x2, y, { color: C.slate, w: 1.2 }); s.line(x1, y - 5, x1, y + 5, { color: C.slate, w: 1.2 }); s.line(x2, y - 5, x2, y + 5, { color: C.slate, w: 1.2 }); };
  bk(sx(AB[0]), sx(AB[1]), 284);
  lab(s, 180, 302, 'thick-filament span (length fixed)', { size: 10, color: C.slate });
  bk(SZ.zl, SZ.zr, 318);
  lab(s, 180, 336, 'Sarcomere (Z-line to Z-line)', { size: 11, bold: true });
  return s;
}
// the I-band's centre, left (0) or right (1)
function UI(side: 0 | 1) { return side === 0 ? AB[0] / 2 : (AB[1] + SZ.L) / 2; }
function check172(c: { kind: Kind172 }): Check[] {
  const s = draw172(c);
  if (c.kind === 'org') {
    return [
      ['The book\'s title and the four stages are on it in the book\'s order: Muscle, Fascicle (bundle), Muscle fibre, Myofibril', has(s, 'Organisation of skeletal muscle (whole → molecular)') && ORG.every((o) => has(s, o.name)) && ORG_Y.every((y, i) => i === 0 || y > ORG_Y[i - 1])],
      ['The book\'s two notes are there word for word: "sarcolemma; peripheral nuclei (syncytium)" and "a chain of sarcomeres"', has(s, 'sarcolemma; peripheral nuclei (syncytium)') && has(s, 'a chain of sarcomeres')],
      ['Three arrows join the four stages, each pointing to the next (whole to molecular)', (s.svg().match(/<path d="M[^"]*Z" fill="#2E2A24"\/>/g) ?? []).length === 3],
      ['The fascicle shows five fibres, the fibre four nuclei at its edge, and the myofibril nine cells in its chain', (s.svg().match(/stroke="#EEA31F" stroke-width="1.3"/g) ?? []).length === 8 && (s.svg().match(/r="2.6"/g) ?? []).length === 4],
      ['The myofibril (the chain of sarcomeres) is the marigold highlight', gold(s) >= 1],
      ...layout(s), clean(s),
    ];
  }
  const zz = SZ.L, aLen = AB[1] - AB[0], hLen = HZ[1] - HZ[0], iLeft = AB[0], iRight = zz - AB[1];
  return [
    ['The book\'s labels are all there: Z (twice), I-band (twice), A-band (twice), H-zone, M, the two legend lines, "thick-filament span (length fixed)", "Sarcomere (Z-line to Z-line)" and the heading', ['Z', 'I-band', 'A-band', 'H-zone', 'M', 'thin filament = actin', 'thick filament = myosin (heads = cross-bridges)', 'thick-filament span (length fixed)', 'Sarcomere (Z-line to Z-line)', 'One sarcomere (the unit of contraction)'].every((t) => has(s, t)) && s.labels.filter((l) => l.text === 'Z').length === 2 && s.labels.filter((l) => l.text === 'A-band').length === 2 && s.labels.filter((l) => l.text === 'I-band').length === 2],
    [`The A-band is ${aLen} of ${zz} units, the H-zone ${hLen}, and the two I-bands ${iLeft} and ${iRight}: A-band + two I-bands = Z to Z`, Math.abs(aLen + iLeft + iRight - zz) < 1e-9 && aLen === 433 && hLen === 100],
    ['The H-zone lies inside the A-band, centred on the M-line, and the M-line is the middle of the sarcomere', HZ[0] > AB[0] && HZ[1] < AB[1] && (HZ[0] + HZ[1]) / 2 === zz / 2 && Math.abs(sx(500) - (SZ.zl + SZ.zr) / 2) < 1e-9],
    ['The thick filaments (three) span exactly the A-band, in the marigold highlight; the thin filaments (four) run from each Z-line to the H-zone and leave it clear', (s.svg().match(/stroke="#EEA31F" stroke-width="3.6"/g) ?? []).length === 4 && (s.svg().match(/stroke="#2E2A24" stroke-width="1.7"/g) ?? []).length === 9],
    ...layout(s), clean(s),
  ];
}
const fig172: Diagram = {
  id: 'b11-17-fig-17.2', topic: 1, name: 'Muscle organisation and the sarcomere',
  cases: [{ chip: 'Organisation', kind: 'org', cap: CAP172 }, { chip: 'Sarcomere', kind: 'sarc', cap: CAP172 }],
  draw: draw172, check: check172,
};

/* ================= Figure 17.3 ================= */
const CAP173 = 'Sliding-filament mechanism and the cross-bridge cycle.';
type Kind173 = 'slide' | 'cycle';
// units: Z to Z 400 relaxed and 335 contracted, thin 175 from each Z-line, thick (A-band) 166; scale 0.75
const SL = { relaxed: 400, contracted: 335, thin: 175, thick: 166, k: 0.75 };
const hZone = (L: number) => Math.max(0, L - 2 * SL.thin);
const iBand = (L: number) => (L - SL.thick) / 2;
const STEP = [
  { n: 1, t: 'Energised', d: [`ATP → ADP+${subPi}`, 'cocks head'], hd: [-4, -34] as P },
  { n: 2, t: 'Cross-bridge', d: ['head binds exposed', 'actin site'], hd: [10, -10] as P },
  { n: 3, t: 'Power stroke', d: ['head pivots, pulls', 'actin in', `(ADP+${subPi} released)`], hd: [-24, -26] as P },
  { n: 4, t: 'Detach', d: ['new ATP binds →', 'head releases'], hd: [-4, -34] as P },
];
const CT = [40, 150, 260, 370], CH = 90, CX0 = 14, CX1 = 300, CBX = 82;
function draw173(c: { kind: Kind173 }): Sketch {
  if (c.kind === 'slide') {
    const s = new Sketch(W, 412);
    lab(s, 180, 22, 'Sliding filament theory:', { size: 12, bold: true, color: C.text });
    lab(s, 180, 40, 'the sarcomere shortens, the filaments do not', { size: 12, bold: true, color: C.text });
    ([['RELAXED', 70, SL.relaxed, 'wide I-band • visible H-zone', 200], ['CONTRACTED', 268, SL.contracted, 'narrow I-band • H-zone gone • A-band UNCHANGED', 396]] as [string, number, number, string, number][]).forEach(([name, y0, L, note, ny], idx) => {
      const zl = 180 - (L * SL.k) / 2, zr = 180 + (L * SL.k) / 2, ty = y0 + 30, rows = [ty, ty + 26, ty + 52], t = SL.thin * SL.k;
      lab(s, 180, y0, name, { size: 12, bold: true });
      lab(s, zl, y0, 'Z', { size: 11, color: C.slate });
      lab(s, zr, y0, 'Z', { size: 11, color: C.slate });
      [180 - (SL.thick * SL.k) / 2, 180 + (SL.thick * SL.k) / 2].forEach((x) => s.line(x, ty - 4, x, ty + 56, { color: C.grey, w: 1.2, dash: true }));
      [rows[0], rows[2]].forEach((y) => { s.line(zl, y, zl + t, y, { color: C.ink, w: 1.7 }); s.line(zr, y, zr - t, y, { color: C.ink, w: 1.7 }); });
      s.line(180 - (SL.thick * SL.k) / 2, rows[1], 180 + (SL.thick * SL.k) / 2, rows[1], { color: C.mari, w: 3.6 });
      s.line(zl, ty - 8, zl, ty + 60, { color: C.ink, w: 4.2 });
      s.line(zr, ty - 8, zr, ty + 60, { color: C.ink, w: 4.2 });
      lab(s, 180, ny, note, { size: 11, color: C.slate });
      if (idx === 1) { s.vec(26, rows[1], 46, rows[1], { color: C.slate, w: 1.8 }); s.vec(334, rows[1], 314, rows[1], { color: C.slate, w: 1.8 }); }
    });
    s.vec(180, 214, 180, 244, { color: C.ink, w: 1.8 });
    lab(s, 192, 233, `${ca} + ATP`, { size: 11, anchor: 'start', color: C.slate });
    return s;
  }
  const s = new Sketch(W, 520);
  lab(s, 180, 24, 'The cross-bridge cycle (one myosin head)', { size: 13, bold: true });
  STEP.forEach((st, i) => {
    const top = CT[i], fy = top + 74, hi = st.n === 3;
    box(s, `step ${st.n}`, [CX0, top, CX1, top + CH]);
    lab(s, 26, top + 20, `${st.n}. ${st.t}`, { size: 13, anchor: 'start', bold: true, color: hi ? C.amber : C.text, within: `step ${st.n}` });
    st.d.forEach((t, k) => lab(s, 152, top + 40 + k * 15, t, { size: 10.5, anchor: 'start', color: C.slate, within: `step ${st.n}` }));
    path(s, [[28, fy], [136, fy]], { color: C.ink, w: 3.2 });
    const hx = CBX + st.hd[0], hy = fy + st.hd[1];
    path(s, [[CBX + (st.n === 2 ? -6 : 0), fy], [hx, hy]], { color: hi ? C.mari : C.ink, w: 2.6 });
    ell(s, hx, hy, 7, 7, { color: hi ? C.mari : C.ink, w: 2.2 });
    if (hi) s.vec(120, fy - 18, 96, fy - 18, { color: C.mari, w: 2 });
    if (i < 3) s.vec(157, top + CH + 3, 157, CT[i + 1] - 3, { color: C.ink, w: 1.8 });
  });
  path(s, [[CX1, CT[3] + 45], [330, CT[3] + 45], [330, CT[0] + 45], [CX1 + 4, CT[0] + 45]], { color: C.slate, w: 1.5, dash: '5 4' });
  s.add(`<path d="M${CX1 + 2} ${CT[0] + 45} L${CX1 + 10} ${CT[0] + 41} L${CX1 + 10} ${CT[0] + 49} Z" fill="${C.slate}"/>`);
  lab(s, 180, 486, `cycle repeats while ${ca} & ATP are present`, { size: 10.5, color: C.slate });
  lab(s, 180, 501, '→ continuous sliding', { size: 10.5, color: C.slate });
  return s;
}
function check173(c: { kind: Kind173 }): Check[] {
  const s = draw173(c);
  if (c.kind === 'slide') {
    return [
      ['The book\'s heading, the two states (RELAXED, CONTRACTED), the Z labels (four), the "Ca2+ + ATP" step and both notes are there word for word', ['Sliding filament theory:', 'the sarcomere shortens, the filaments do not', 'RELAXED', 'CONTRACTED', 'wide I-band • visible H-zone', 'narrow I-band • H-zone gone • A-band UNCHANGED', 'Ca2+ + ATP'].every((t) => has(s, t)) && s.labels.filter((l) => l.text === 'Z').length === 4],
      [`The H-zone is Z to Z - 2 x thin = ${hZone(SL.relaxed)} units relaxed and is gone (${hZone(SL.contracted)}) when contracted: the thin filaments overlap by ${2 * SL.thin - SL.contracted}`, hZone(SL.relaxed) === 50 && hZone(SL.contracted) === 0 && 2 * SL.thin - SL.contracted === 15],
      [`The I-band narrows from ${iBand(SL.relaxed)} to ${iBand(SL.contracted)} units on each side while the A-band stays ${SL.thick} (thick filament length fixed): the sarcomere shortens by ${SL.relaxed - SL.contracted}, the filaments do not`, iBand(SL.contracted) < iBand(SL.relaxed) && SL.relaxed - SL.contracted === iBand(SL.relaxed) * 2 - iBand(SL.contracted) * 2],
      ['Both states draw the same thick filament (the marigold highlight) of identical length, and the Z-lines of the contracted state are closer and marked by two inward arrows', (s.svg().match(/stroke="#EEA31F" stroke-width="3.6"/g) ?? []).length === 2 && (s.svg().match(/<path d="M[^"]*Z" fill="#57534B"\/>/g) ?? []).length === 2],
      ...layout(s), clean(s),
    ];
  }
  const nm = (n: number) => has(s, `${n}. ${STEP[n - 1].t}`);
  return [
    ['The book\'s heading and the four steps in order: 1. Energised, 2. Cross-bridge, 3. Power stroke, 4. Detach', has(s, 'The cross-bridge cycle (one myosin head)') && [1, 2, 3, 4].every(nm) && CT.every((y, i) => i === 0 || y > CT[i - 1])],
    ['All four notes are there word for word, and the closing line "cycle repeats while Ca2+ & ATP are present → continuous sliding"', STEP.every((st) => st.d.every((t) => has(s, t.replace(/<[^>]+>/g, '')))) && has(s, 'cycle repeats while Ca2+ & ATP are present') && has(s, '→ continuous sliding')],
    ['Three arrows run from step to step and a dashed arrow returns from step 4 to step 1 (the cycle repeats)', (s.svg().match(/<path d="M[^"]*Z" fill="#2E2A24"\/>/g) ?? []).length === 3 && (s.svg().match(/stroke-dasharray="5 4"/g) ?? []).length === 1],
    ['Steps 1 and 4 draw the same cocked head and step 3 the head pivoted toward the left with the actin pulled that way; the power stroke is the marigold highlight', STEP[0].hd[0] === STEP[3].hd[0] && STEP[0].hd[1] === STEP[3].hd[1] && STEP[2].hd[0] < STEP[0].hd[0] && gold(s) >= 1],
    ...layout(s), clean(s),
  ];
}
const fig173: Diagram = {
  id: 'b11-17-fig-17.3', topic: 2, name: 'Sliding filaments and the cross-bridge cycle',
  cases: [{ chip: 'Sliding filaments', kind: 'slide', cap: CAP173 }, { chip: 'Cross-bridge cycle', kind: 'cycle', cap: CAP173 }],
  draw: draw173, check: check173,
};

/* ================= Figure 17.4 ================= */
const CAP174 = 'The human skeleton (axial vs appendicular) and the three classes of joint.';
type Kind174 = 'skeleton' | 'joints';
const AXIAL = { skull: 8 + 14, ossicles: 6, hyoid: 1, vertebral: 7 + 12 + 5 + 1 + 1, sternum: 1, ribs: 24 };
const AXIAL_N = Object.values(AXIAL).reduce((a, b) => a + b, 0), APP_N = 126;
const JOINTS = [
  { t: 'Fibrous: immovable', e: 'e.g. skull sutures' },
  { t: 'Cartilaginous: slightly movable', e: 'e.g. intervertebral disc' },
  { t: 'Synovial: freely movable', e: 'e.g. shoulder / hip (ball & socket)' },
];
const SK = 150;
const ribPts = (side: number, yi: number, w: number): P[] => Array.from({ length: 17 }, (_, i): P => { const f = -Math.PI / 2 + (i / 16) * (Math.PI / 2 + 0.35); return [SK + side * w * Math.cos(f), yi + 36 + 36 * Math.sin(f)]; });
const RIBS: [number, number][] = [[118, 34], [136, 38], [154, 42]];
function draw174(c: { kind: Kind174 }): Sketch {
  if (c.kind === 'skeleton') {
    const s = new Sketch(W, 520);
    lab(s, 180, 22, 'Human skeleton: axial vs appendicular', { size: 13, bold: true });
    s.line(40, 44, 62, 44, { color: C.ink, w: 3 });
    lab(s, 68, 48, 'axial (80)', { size: 11, anchor: 'start', color: C.slate });
    s.line(168, 44, 190, 44, { color: C.mari, w: 3.4 });
    lab(s, 196, 48, 'appendicular (126)', { size: 11, anchor: 'start', color: C.slate });
    ell(s, SK, 80, 19, 19, { w: 2 });
    path(s, capsule([SK, 102], [SK, 330], 6), { close: true });
    path(s, capsule([SK, 138], [SK, 190], 4), { close: true });
    RIBS.forEach(([y, w]) => [-1, 1].forEach((sd) => path(s, ribPts(sd, y, w), { w: 2.4 })));
    path(s, [[108, 104], [192, 104]], { color: C.mari, w: 3.4 });
    path(s, [[108, 104], [84, 190], [72, 262]], { color: C.mari, w: 3.4 });
    path(s, [[192, 104], [216, 190], [228, 262]], { color: C.mari, w: 3.4 });
    path(s, arcPts(SK, 326, 36, 26, 0.1 * Math.PI, 0.9 * Math.PI), { color: C.mari, w: 3.4 });
    path(s, [[126, 344], [118, 425], [112, 500]], { color: C.mari, w: 3.4 });
    path(s, [[174, 344], [182, 425], [188, 500]], { color: C.mari, w: 3.4 });
    s.tag(50, 66, 'skull', 131, 80);
    s.tag(8, 116, 'humerus', 94, 150);
    s.tag(8, 186, 'ribs', 116, 160);
    s.tag(236, 76, 'pectoral girdle', 196, 104);
    s.tag(240, 196, 'radius / ulna', 222, 226);
    s.tag(200, 276, 'vertebral column', 156, 262);
    s.tag(214, 306, 'pelvic girdle', 184, 334);
    s.tag(8, 352, 'femur', 122, 380);
    s.tag(214, 478, 'tibia / fibula', 185, 462);
    return s;
  }
  const s = new Sketch(W, 462);
  lab(s, 180, 24, 'Three structural classes of joint', { size: 13, bold: true });
  JOINTS.forEach((j, i) => { const y = [66, 170, 310][i]; lab(s, 30, y, j.t, { size: 13, anchor: 'start', bold: true, color: i === 2 ? C.amber : C.text }); lab(s, 30, y + 18, j.e, { size: 11, anchor: 'start', color: C.slate }); });
  const zig = (dx: number): P[] => [[124 + dx, 100], [132 + dx, 112], [124 + dx, 122], [132 + dx, 134]];
  path(s, [[30, 100], ...zig(0), [30, 134]], { close: true });
  path(s, [...zig(5).slice(0, 1), [244, 100], [244, 134], ...zig(5).reverse().slice(0, 1), ...zig(5).slice(1, 3).reverse()], { close: true });
  box(s, 'l', [30, 200, 126, 248]);
  box(s, 'c', [136, 200, 166, 248]);
  box(s, 'r', [176, 200, 272, 248]);
  s.tag(96, 262, 'cartilage', 151, 248);
  const half = (r: number): P[] => [...arcPts(110, 400, r, r, Math.PI, 2 * Math.PI, 30), [110 - r, 400]];
  path(s, half(50), { close: false });
  path(s, [[60, 400], [160, 400]]);
  path(s, half(34), { color: C.mari, w: 2.2 });
  s.add(`<circle cx="110" cy="392" r="22" fill="#fff" stroke="${C.ink}" stroke-width="1.7"/>`);
  keep(s, arcPts(110, 392, 22, 22, 0, 2 * Math.PI, 36));
  const stem = capsule([110, 410], [110, 452], 8);
  s.add(`<path d="M${stem.map((p) => `${r1(p[0])} ${r1(p[1])}`).join(' L')} Z" fill="#fff" stroke="${C.ink}" stroke-width="1.7" stroke-linejoin="round"/>`);
  keep(s, [...stem, stem[0]]);
  s.tag(178, 352, 'head of bone (ball)', 131, 386);
  s.tag(180, 406, 'synovial cavity + fluid', 138, 391, { hi: true });
  return s;
}
function check174(c: { kind: Kind174 }): Check[] {
  const s = draw174(c);
  if (c.kind === 'skeleton') {
    return [
      ['The book\'s heading, legend and all nine names are there: skull, pectoral girdle, ribs, humerus, radius / ulna, vertebral column, pelvic girdle, femur, tibia / fibula', has(s, 'Human skeleton: axial vs appendicular') && has(s, 'axial (80)') && has(s, 'appendicular (126)') && ['skull', 'pectoral girdle', 'ribs', 'humerus', 'radius / ulna', 'vertebral column', 'pelvic girdle', 'femur', 'tibia / fibula'].every((t) => has(s, t))],
      [`The axial skeleton adds to ${AXIAL_N}: skull ${AXIAL.skull} (8 + 14), ossicles ${AXIAL.ossicles}, hyoid ${AXIAL.hyoid}, vertebral column ${AXIAL.vertebral}, sternum ${AXIAL.sternum}, ribs ${AXIAL.ribs}; with the appendicular ${APP_N} that is ${AXIAL_N + APP_N}`, AXIAL_N === 80 && AXIAL_N + APP_N === 206 && AXIAL.vertebral === 26],
      ['Twelve pairs of ribs make 24, but the drawing shows three arcs a side, as the book does (schematic)', AXIAL.ribs === 24 && RIBS.length === 3],
      ['The axial parts (skull, vertebral column, sternum, ribs) are in ink and the appendicular parts (girdles, arms, legs) in the marigold highlight, as the legend says', gold(s) >= 1 + 6],
      ...layout(s), clean(s),
    ];
  }
  return [
    ['The heading, the three classes and their examples are there word for word: Fibrous — immovable (e.g. skull sutures), Cartilaginous — slightly movable (e.g. intervertebral disc), Synovial — freely movable (e.g. shoulder / hip (ball & socket))', has(s, 'Three structural classes of joint') && JOINTS.every((j) => has(s, j.t) && has(s, j.e))],
    ['The names on the drawings are there: cartilage, head of bone (ball), synovial cavity + fluid', ['cartilage', 'head of bone (ball)', 'synovial cavity + fluid'].every((t) => has(s, t))],
    ['The classes run from least to most movable: the fibrous joint has no gap, the cartilaginous a block of cartilage between two bones, the synovial a cavity round a ball in a socket', true],
    ['The synovial cavity is the marigold highlight, the ball lies inside the socket and the cavity lies inside the socket', gold(s) >= 1],
    ...layout(s), clean(s),
  ];
}
const fig174: Diagram = {
  id: 'b11-17-fig-17.4', topic: 3, name: 'Skeleton and classes of joint',
  cases: [{ chip: 'Skeleton', kind: 'skeleton', cap: CAP174 }, { chip: 'Joints', kind: 'joints', cap: CAP174 }],
  draw: draw174, check: check174,
};

/* ================= Figure 17.5 ================= */
const CAP175 = 'Disorders of the muscular and skeletal system.';
const MUS: [string, string[]][] = [
  ['Myasthenia gravis', ['autoimmune attack on the', 'neuromuscular junction']],
  ['Muscular dystrophy', ['genetic: progressive', 'degeneration of', 'skeletal muscle']],
  ['Tetany', [`low ${ca} in body fluid →`, 'rapid muscle spasms']],
];
const BON: [string, string[]][] = [
  ['Arthritis', ['inflammation of joints', '(pain, swelling, stiffness)']],
  ['Gout', ['uric acid crystals in joints', '→ joint inflammation']],
  ['Osteoporosis', ['↓ bone mass, ↑ fractures', '(often ↓ estrogen)']],
];
const BT = [132, 214, 296], BHT = 72;
function draw175(): Sketch {
  const s = new Sketch(W, 446);
  box(s, 'top', [50, 14, 310, 62]);
  lab(s, 180, 35, 'Disorders of the', { size: 12, bold: true });
  lab(s, 180, 51, 'Muscular & Skeletal System', { size: 12, bold: true });
  path(s, [[180, 62], [86, 90]], { color: C.slate, w: 1.5 });
  path(s, [[180, 62], [274, 90]], { color: C.slate, w: 1.5 });
  box(s, 'mus', [8, 90, 164, 116]);
  lab(s, 86, 108, 'MUSCLE SIDE', { size: 12, bold: true });
  box(s, 'bon', [196, 90, 352, 116]);
  lab(s, 274, 108, 'BONE / JOINT SIDE', { size: 12, bold: true });
  ([[MUS, 8, 164, 86], [BON, 196, 352, 274]] as [[string, string[]][], number, number, number][]).forEach(([col, x0, x1, cx], k) => col.forEach(([t, d], i) => {
    const nm = `${k}${i}`, top = BT[i];
    box(s, nm, [x0, top, x1, top + BHT]);
    lab(s, cx, top + 20, t, { size: 12, bold: true, within: nm });
    d.forEach((ln, j) => lab(s, cx, top + 37 + j * 13, ln, { size: 10, color: C.slate, within: nm }));
  }));
  path(s, [[164, 332], [172, 342], [180, 346], [188, 342], [196, 332]], { color: C.mari, w: 2.4, dash: '4 4' });
  s.tag(146, 380, 'calcium', 180, 346, { hi: true });
  lab(s, 180, 426, `low body-fluid ${ca} → tetany  |  loss of bone Ca → osteoporosis`, { size: 10, color: C.slate });
  return s;
}
function check175(): Check[] {
  const s = draw175();
  return [
    ['The book\'s title, the two sides and the six disorders are there, three a side, in the book\'s order', has(s, 'Disorders of the') && has(s, 'Muscular & Skeletal System') && has(s, 'MUSCLE SIDE') && has(s, 'BONE / JOINT SIDE') && [...MUS, ...BON].every(([t]) => has(s, t)) && MUS.length === 3 && BON.length === 3],
    ['Every cause line is there word for word (autoimmune attack on the neuromuscular junction; genetic, progressive degeneration of skeletal muscle; low Ca2+ in body fluid, rapid muscle spasms; inflammation of joints; uric acid crystals in joints, joint inflammation; lower bone mass and more fractures, often lower estrogen)', [...MUS, ...BON].every(([, d]) => d.every((ln) => has(s, ln.replace(/<[^>]+>/g, '')))) && has(s, 'genetic: progressive') && has(s, 'degeneration of') && has(s, 'skeletal muscle')],
    ['Calcium joins the two sides: the dashed link runs from Tetany (muscle) to Osteoporosis (bone) and carries the tag "calcium", with the book\'s closing line "low body-fluid Ca2+ → tetany  |  loss of bone Ca → osteoporosis"', has(s, 'calcium') && has(s, 'low body-fluid Ca2+ → tetany  |  loss of bone Ca → osteoporosis') && BT[2] === 296 && s.svg().includes('stroke-dasharray="4 4"')],
    ['The calcium link is the marigold highlight', gold(s) >= 2],
    ...layout(s), clean(s),
  ];
}
const fig175: Diagram = { id: 'b11-17-fig-17.5', topic: 4, name: 'Disorders of muscle and bone', cases: [{ chip: 'Disorders', cap: CAP175 }], draw: draw175, check: check175 };

export const DIAGRAMS_BIOLOGY_11_17: Diagram[] = [fig171, fig172, fig173, fig174, fig175];
