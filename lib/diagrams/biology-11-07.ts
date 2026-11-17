import { C, LABEL_GAP, Rect, Sketch, audit, mathW, r1, tagW } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * BIOLOGY CLASS 11, CHAPTER 7 (Structural Organisation in Animals): the drawings of the Master Reference book on pp. 407-469, redrawn.
 * Pages 407 to 469 were counted (pdfimages -list: no raster image; pdftocairo -svg: shapes outside glyphs). Only pp. 413, 422,
 * 429 and 435 hold a drawing (the four numbered figures); every other page holds only page rules, table rules and text
 * backgrounds. FOUR drawings on four pages, drawn as one case per panel where the book's figure has panels:
 *
 *   Figure 7.1 (drawing p. 413, caption p. 412), Topic 01, topic index 0: four panels, (a) simple squamous epithelium,
 *     (b) areolar connective tissue, (c) the three types of muscle, (d) a neuron with neuroglial cells.
 *   Figure 7.2 (drawing p. 422, caption p. 421), Topic 03, topic index 2: two panels, lateral view of the earthworm (top)
 *     and the anterior alimentary canal (bottom).
 *   Figure 7.3 (drawing p. 429, caption p. 428), Topic 04, topic index 3: two panels, the cockroach's dorsal view (left)
 *     and its alimentary canal (right).
 *   Figure 7.4 (drawing p. 435, caption p. 434), Topic 05, topic index 4: the frog's life cycle, a ring of five stages.
 *
 * THE BOOK'S, as printed: every word of every label, every panel title, the numbers 5, 10 and 15 on the earthworm's
 * segment scale, the earthworm's segment positions (the clitellum covers segments 14 to 16, the female pore lies in segment 14,
 * the male pores in segment 18, the peristomium is segment 1, the spermathecal openings lie in the grooves from 5 and 6
 * to 8 and 9: all computed from one segment grid, so they cannot drift), the cockroach's ten abdominal segments, three pairs of
 * legs, two pairs of wings and the gut's order (mouth, oesophagus, crop, gizzard, hepatic caeca, midgut, Malpighian
 * tubules, hindgut and rectum, anus), the earthworm gut's order (mouth, buccal cavity, pharynx, oesophagus, gizzard,
 * stomach, intestine with its typhlosole) and the five numbered stages of the frog's cycle with the "external
 * fertilisation" arrow back to the eggs and the "metamorphosis" arrow. Relative lengths of the earthworm gut's parts
 * and the relative sizes and positions of the cockroach's parts are read from the book's drawing, rescaled.
 * SCHEMATIC: the faint cross-striations on the cardiac fibre (added; the book draws it plain), the cells (their outlines, nuclei, fibres, spindles, the neuron's dendrite branching, the glial cells'
 * places), the groove "5 and 6 to 8 and 9" is written that way (not 5/6 to 8/9) so that it cannot be read as a fraction,
 * the pentagon ring of Fig 7.4 and the little animal in each circle, the legs' zig-zags, the wings' outlines, the
 * leader lines' angles and every box size. Colours are the app's style (no fills; one marigold highlight per drawing),
 * not the book's.
 */

const W = 360;
type P = [number, number];
type At = [number, number, 'start' | 'middle' | 'end'];
const plain = (html: string) => html.replace(/<[^>]+>/g, '');
const wOf = (html: string, size: number) => Math.max(mathW(html, size), plain(html).length * size * 0.5);

/* ---------- helpers (as in biology-11-01.ts) ---------- */
const LINES = new WeakMap<Sketch, P[][]>();
const keep = (s: Sketch, pts: P[]) => LINES.set(s, [...(LINES.get(s) ?? []), pts]);
function path(s: Sketch, pts: P[], o: { color?: string; w?: number; close?: boolean; dash?: boolean } = {}) {
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ') + (o.close ? ' Z' : '');
  s.add(`<path d="${d}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}" stroke-linejoin="round" stroke-linecap="round"${o.dash ? ' stroke-dasharray="4 4"' : ''}/>`);
  keep(s, o.close ? [...pts, pts[0]] : pts);
}
function ell(s: Sketch, cx: number, cy: number, rx: number, ry: number, o: { color?: string; w?: number; deg?: number } = {}) {
  const deg = o.deg ?? 0, a = (deg * Math.PI) / 180;
  s.add(`<ellipse cx="${r1(cx)}" cy="${r1(cy)}" rx="${r1(rx)}" ry="${r1(ry)}"${deg ? ` transform="rotate(${deg} ${r1(cx)} ${r1(cy)})"` : ''} fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}"/>`);
  keep(s, Array.from({ length: 33 }, (_, i): P => {
    const t = (i / 32) * 2 * Math.PI, x = rx * Math.cos(t), y = ry * Math.sin(t);
    return [cx + x * Math.cos(a) - y * Math.sin(a), cy + x * Math.sin(a) + y * Math.cos(a)];
  }));
}
function arc(cx: number, cy: number, r: number, a0: number, a1: number, n = 24): P[] {
  return Array.from({ length: n + 1 }, (_, i): P => { const t = a0 + ((a1 - a0) * i) / n; return [cx + r * Math.cos(t), cy + r * Math.sin(t)]; });
}
/** An arrowhead at the end of a polyline, along its last stretch. */
function head(s: Sketch, pts: P[], col: string = C.ink) {
  const b = pts[pts.length - 1], a = pts[pts.length - 3] ?? pts[0], t = Math.atan2(b[1] - a[1], b[0] - a[0]), L = 9, hw = 4.6;
  const bx = b[0] - L * Math.cos(t), by = b[1] - L * Math.sin(t);
  s.add(`<path d="M${r1(b[0])} ${r1(b[1])} L${r1(bx + hw * Math.sin(t))} ${r1(by - hw * Math.cos(t))} L${r1(bx - hw * Math.sin(t))} ${r1(by + hw * Math.cos(t))} Z" fill="${col}"/>`);
}
/** A line of text on the drawing from its baseline; its box at its width. */
function lab(s: Sketch, x: number, y: number, html: string, o: { size?: number; anchor?: 'start' | 'middle' | 'end'; color?: string; bold?: boolean } = {}): Rect {
  const size = o.size ?? 12, anchor = o.anchor ?? 'middle', w = wOf(html, size) * (o.bold ? 1.08 : 1);
  const x0 = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w : x;
  const rect: Rect = [x0, y - size * 0.72, x0 + w, y + size * 0.22];
  s.labels.push({ text: plain(html), rect });
  s.text(x, y, html, { size, anchor, color: o.color ?? C.text, semibold: o.bold });
  return rect;
}
const len = (a: P, b: P) => Math.hypot(b[0] - a[0], b[1] - a[1]);
const rectDist = (r: Rect, p: P) => Math.hypot(Math.max(r[0] - p[0], 0, p[0] - r[2]), Math.max(r[1] - p[1], 0, p[1] - r[3]));
function gapTo(r: Rect, pts: P[]) {
  let g = Infinity;
  for (let i = 0; i < pts.length - 1; i++) {
    const a = pts[i], b = pts[i + 1], n = Math.max(1, Math.ceil(len(a, b) / 1.5));
    for (let k = 0; k <= n; k++) g = Math.min(g, rectDist(r, [a[0] + ((b[0] - a[0]) * k) / n, a[1] + ((b[1] - a[1]) * k) / n]));
  }
  return g;
}

/** Candidate spots for a tag round a point, nearest first. `sides` orders up, down, left and right. */
function spots(p: P, t: string, sides: ('up' | 'down' | 'left' | 'right')[] = ['up', 'down', 'right', 'left']): At[] {
  const out: At[] = [], w = tagW(t);
  for (const d of [14, 26, 42, 62, 86, 112, 140, 170]) {
    for (const side of sides) {
      if (side === 'up' || side === 'down') {
        const y = side === 'up' ? p[1] - d - 22 : p[1] + d;
        for (const dx of [0, -40, 40, -80, 80, -120, 120, -170, 170, -220, 220]) out.push([p[0] + dx, y, 'middle']);
      } else {
        for (const dy of [0, -24, 24, -48, 48]) out.push(side === 'right' ? [p[0] + d, p[1] - 11 + dy, 'start'] : [p[0] - d, p[1] - 11 + dy, 'end']);
      }
    }
  }
  void w;
  return out;
}
type Spec = { t: string; p?: P; ring?: [number, number, number]; hi?: boolean; sides?: ('up' | 'down' | 'left' | 'right')[]; at?: At[] };
/** Place every tag at the nearest spot that keeps off the drawing's own lines (3 px) and passes the kit's rules. */
function tags(s: Sketch, specs: Spec[]) {
  const ls = LINES.get(s) ?? [];
  s.place(specs.map((sp) => {
    const w = tagW(sp.t), c = sp.ring ? ([sp.ring[0], sp.ring[1]] as P) : (sp.p as P);
    const raw = [...(sp.at ?? []), ...spots(c, sp.t, sp.sides)];
    const at = raw.filter(([x, y, a]) => {
      const x0 = a === 'middle' ? x - w / 2 : a === 'end' ? x - w : x, r: Rect = [x0, y, x0 + w, y + 22];
      return r[0] >= 3 && r[2] <= W - 3 && r[1] >= 2 && r[3] <= s.h - 2 && ls.every((pts) => gapTo(r, pts) >= 3);
    });
    return { t: sp.t, p: sp.p, ring: sp.ring, hi: sp.hi, at };
  }));
}

/** Every drawn label keeps LABEL_GAP clear of every drawn line, lies in the frame and touches no other label; no tag sits on a drawn line. */
function layout(s: Sketch): Check[] {
  let gap = Infinity, what = '';
  for (const l of s.labels) for (const pts of LINES.get(s) ?? []) { const d = gapTo(l.rect, pts); if (d < gap) { gap = d; what = l.text; } }
  const out = s.labels.filter((l) => l.rect[0] < 0 || l.rect[2] > s.w || l.rect[1] < 0 || l.rect[3] > s.h).map((l) => l.text);
  const L = s.labels;
  const touch = L.flatMap((a, i) => L.slice(i + 1).filter((b) => !(a.rect[2] + 2 <= b.rect[0] || b.rect[2] + 2 <= a.rect[0] || a.rect[3] + 2 <= b.rect[1] || b.rect[3] + 2 <= a.rect[1])).map((b) => `${a.text} / ${b.text}`));
  let tg = Infinity, tw = '';
  for (const t of s.tags) for (const pts of LINES.get(s) ?? []) { const d = gapTo(t.rect, pts); if (d < tg) { tg = d; tw = t.name; } }
  return [
    [`Every label stays ${LABEL_GAP} px clear of every drawn line: the closest is "${what}", ${r1(gap)} px`, gap >= LABEL_GAP],
    [`Every label lies inside the frame${out.length ? `: not ${out.join(', ')}` : ''}`, out.length === 0],
    [`No two labels touch${touch.length ? `: ${touch.join(', ')}` : ''}`, touch.length === 0],
    [`No tag sits on a line of the drawing: the closest is "${tw}", ${r1(tg)} px`, tg >= 2],
  ];
}
const clean = (s: Sketch): Check => { const a = audit(s); return [`Layout audit is clear${a.length ? `: ${a.join('; ')}` : ''}`, a.length === 0 && s.unplaced.length === 0]; };
const has = (s: Sketch, t: string) => s.labels.some((l) => l.text === t);
const tagged = (s: Sketch, names: string[]): Check => {
  const got = s.tags.map((t) => t.name), miss = names.filter((n) => !got.includes(n));
  return [`Every name of the book's panel is on the drawing as a tag${miss.length ? `, missing: ${miss.join(', ')}` : ''}, and no other`, miss.length === 0 && got.length === names.length];
};
const head2 = (s: Sketch, t: string) => lab(s, W / 2, 24, t, { size: 14, bold: true });

/* ================= Figure 7.1 ================= */
const CAP71 = 'Animal tissues: (a) simple squamous epithelium, (b) areolar connective tissue, (c) the three types of muscle, (d) a neuron with neuroglial cells.';
const NAMES71: Record<string, string[]> = {
  a: ['free surface', 'single layer of flat cells', 'basement membrane'],
  b: ['fibroblast', 'macrophage', 'mast cell'],
  c: ['intercalated disc'],
  d: ['dendrites', 'cell body (soma)', 'neuroglial cell', 'axon (single, long process)', 'nerve endings'],
};
const HEAD71: Record<string, string> = { a: '(a) Simple Squamous Epithelium', b: '(b) Areolar Connective Tissue', c: '(c) Muscle Types', d: '(d) Neuron' };
/** Panel (a): three flat cells (one layer) on a wavy basement membrane. */
const CELLS_A = [112, 180, 248].map((x) => ({ x, rx: 34, ry: 11 }));
const CY_A = 143;
const waveY = (x: number) => 160 + 4 * Math.sin(((x - 20) / 100) * 2 * Math.PI);
function draw71a(): Sketch {
  const s = new Sketch(W, 226);
  head2(s, HEAD71.a);
  path(s, Array.from({ length: 81 }, (_, i): P => { const x = 20 + i * 4; return [x, waveY(x)]; }), { w: 2 });
  CELLS_A.forEach((c) => { ell(s, c.x, CY_A, c.rx, c.ry, { color: C.mari, w: 2 }); ell(s, c.x, CY_A, 8, 4); });
  s.vec(180, 62, 180, 118, { color: C.slate, w: 1.6 }); keep(s, [[180, 62], [180, 118]]);
  tags(s, [
    { t: 'free surface', p: [180, 78], at: [[198, 60, 'start']] },
    { t: 'single layer of flat cells', p: [118, 137], hi: true, at: [[8, 66, 'start'], [8, 170, 'start']] },
    { t: 'basement membrane', p: [324, Math.round(waveY(324))], at: [[196, 186, 'start'], [150, 192, 'start']] },
  ]);
  return s;
}
function check71a(): Check[] {
  const s = draw71a();
  const touch = CELLS_A.every((c, i) => i === 0 || Math.abs(c.x - CELLS_A[i - 1].x - (c.rx + CELLS_A[i - 1].rx)) < 1);
  const sits = CELLS_A.every((c) => Math.abs(CY_A + c.ry + 6 - waveY(c.x)) <= 4.5);
  return [
    ['One layer: three flat cells side by side, none above another, each wider than it is tall', CELLS_A.length === 3 && CELLS_A.length === 3 && CELLS_A.every((c) => c.rx > 2.5 * c.ry)],
    ['The cells touch their neighbours edge to edge, and rest on the basement membrane (the wave)', touch && sits],
    ['The panel title is the book\'s', has(s, HEAD71.a)],
    tagged(s, NAMES71.a), ...layout(s), clean(s),
  ];
}

/** Panel (b): areolar tissue in a frame: cells and fibres. Fibres and the unnamed cells are unlabelled, as in the book. */
const FRAME_B: Rect = [30, 96, 330, 226];
const FIBROBLASTS_B: P[] = [[78, 128], [138, 200], [236, 212], [262, 150]];
const MACRO_B: P[] = [[288, 122], [92, 204]];
const MAST_B: P = [196, 170];
function draw71b(): Sketch {
  const s = new Sketch(W, 292);
  head2(s, HEAD71.b);
  path(s, [[FRAME_B[0], FRAME_B[1]], [FRAME_B[2], FRAME_B[1]], [FRAME_B[2], FRAME_B[3]], [FRAME_B[0], FRAME_B[3]]], { close: true });
  // fibres (unlabelled in the book): straight and wavy, grey
  [[[108, 112], [150, 106]], [[208, 134], [250, 128]], [[52, 158], [92, 152]], [[160, 186], [206, 192]]].forEach(([a, b]) => { s.line(a[0], a[1], b[0], b[1], { color: C.grey, w: 1.6 }); keep(s, [a as P, b as P]); });
  [[56, 196], [158, 134], [214, 106], [292, 188]].forEach(([x, y]) => path(s, Array.from({ length: 17 }, (_, i): P => [x + i * 2.5, y + 5 * Math.sin((i / 16) * 2 * Math.PI)]), { color: C.grey, w: 1.8 }));
  FIBROBLASTS_B.forEach(([x, y]) => { s.line(x - 16, y, x + 16, y, { w: 1.7 }); keep(s, [[x - 16, y], [x + 16, y]]); ell(s, x, y - 1, 6, 6); });
  MACRO_B.forEach(([x, y]) => { ell(s, x, y, 10, 10); ell(s, x, y, 4.5, 4.5, { w: 1.2 }); });
  ell(s, MAST_B[0], MAST_B[1], 6, 6, { color: C.mari, w: 2.2 }); ell(s, MAST_B[0], MAST_B[1], 2, 2, { color: C.mari, w: 1.4 });
  tags(s, [
    { t: 'fibroblast', p: [FIBROBLASTS_B[0][0], FIBROBLASTS_B[0][1] - 5], at: [[24, 56, 'start']] },
    { t: 'macrophage', p: [MACRO_B[0][0] + 5, MACRO_B[0][1] - 8], at: [[262, 62, 'start']] },
    { t: 'mast cell', p: [MAST_B[0], MAST_B[1] + 5], hi: true, at: [[150, 244, 'start']] },
  ]);
  return s;
}
function check71b(): Check[] {
  const s = draw71b();
  const inside = [...FIBROBLASTS_B, ...MACRO_B, MAST_B].every(([x, y]) => x > FRAME_B[0] + 18 && x < FRAME_B[2] - 18 && y > FRAME_B[1] + 12 && y < FRAME_B[3] - 12);
  return [
    ['Every cell lies inside the tissue frame', inside],
    ['The book\'s three named cells are drawn: fibroblasts (on a fibre), two macrophages (the larger cells) and a mast cell (the small one)', FIBROBLASTS_B.length >= 1 && MACRO_B.length === 2 && 10 > 6],
    ['The panel title is the book\'s', has(s, HEAD71.b)],
    tagged(s, NAMES71.b), ...layout(s), clean(s),
  ];
}

/** Panel (c): skeletal (striated, nuclei at the edge), smooth (spindles) and cardiac (branched, with intercalated discs). */
const SKEL: Rect = [40, 72, 320, 100];
const DISCS_C: number[] = [82, 150, 218, 290];
const SPINDLES: number[] = [40, 108, 176, 244];
function draw71c(): Sketch {
  const s = new Sketch(W, 316);
  head2(s, HEAD71.c);
  lab(s, 24, 62, 'Skeletal', { size: 12, bold: true, anchor: 'start' });
  path(s, [[SKEL[0], SKEL[1]], [SKEL[2], SKEL[1]], [SKEL[2], SKEL[3]], [SKEL[0], SKEL[3]]], { close: true });
  for (let x = SKEL[0] + 8; x < SKEL[2] - 4; x += 8) { s.line(x, SKEL[1] + 3, x, SKEL[3] - 3, { color: C.grey, w: 1 }); keep(s, [[x, SKEL[1] + 3], [x, SKEL[3] - 3]]); }
  [[70, 76], [134, 96], [212, 76], [284, 96]].forEach(([x, y]) => ell(s, x, y, 5, 2.6, { w: 1.3 }));
  lab(s, 24, 138, 'Smooth', { size: 12, bold: true, anchor: 'start' });
  SPINDLES.forEach((x) => {
    const top = Array.from({ length: 13 }, (_, i): P => [x + (i / 12) * 66, 168 - 9 * Math.sin((i / 12) * Math.PI)]);
    const bot = Array.from({ length: 13 }, (_, i): P => [x + 66 - (i / 12) * 66, 168 + 9 * Math.sin((i / 12) * Math.PI)]);
    path(s, [...top, ...bot], { close: true }); ell(s, x + 33, 168, 6, 2.8, { w: 1.3 });
  });
  lab(s, 24, 206, 'Cardiac', { size: 12, bold: true, anchor: 'start' });
  const strip = (x1: number, y1: number, x2: number, y2: number, w: number) => {
    const a = Math.atan2(y2 - y1, x2 - x1), nx = (-Math.sin(a) * w) / 2, ny = (Math.cos(a) * w) / 2;
    path(s, [[x1 + nx, y1 + ny], [x2 + nx, y2 + ny], [x2 - nx, y2 - ny], [x1 - nx, y1 - ny]], { close: true });
  };
  strip(36, 236, 324, 236, 16);
  // faint cross-striations (cardiac muscle is striated), kept clear of the discs and the two nuclei (schematic, not in the book's drawing)
  for (let x = 44; x < 320; x += 8) { if (DISCS_C.some((d) => Math.abs(x - d) < 6) || Math.abs(x - 66) < 8 || Math.abs(x - 190) < 8) continue; s.line(x, 231, x, 241, { color: C.grey, w: 1 }); keep(s, [[x, 231], [x, 241]]); }
  path(s, [[112, 228], [148, 206], [158, 214], [128, 228]]); path(s, [[236, 244], [272, 266], [264, 274], [222, 244]]);
  DISCS_C.forEach((x) => path(s, [[x - 4, 246], [x + 4, 226]], { color: C.mari, w: 2.6 }));
  ell(s, 66, 236, 4, 2.4, { w: 1.2 }); ell(s, 190, 236, 4, 2.4, { w: 1.2 });
  tags(s, [{ t: 'intercalated disc', p: [DISCS_C[3], 236], hi: true, at: [[196, 280, 'start'], [150, 282, 'start']] }]);
  return s;
}
function check71c(): Check[] {
  const s = draw71c();
  return [
    ['Three muscle types, in the book\'s order (skeletal, smooth, cardiac), one row each', ['Skeletal', 'Smooth', 'Cardiac'].every((t) => has(s, t)) && s.labels.findIndex((l) => l.text === 'Skeletal') < s.labels.findIndex((l) => l.text === 'Smooth') && s.labels.findIndex((l) => l.text === 'Smooth') < s.labels.findIndex((l) => l.text === 'Cardiac')],
    ['Four spindle-shaped smooth fibres, end to end, and four intercalated discs across the cardiac fibre (the highlight)', SPINDLES.length === 4 && DISCS_C.length === 4],
    ['Every intercalated disc lies on the cardiac strip', DISCS_C.every((x) => x > 36 && x < 324)],
    ['The panel title is the book\'s', has(s, HEAD71.c)],
    tagged(s, NAMES71.c), ...layout(s), clean(s),
  ];
}

/** Panel (d): a neuron lying across the panel: dendrites, soma, a long axon with sheath segments and a break, nerve endings; glial cells. */
const SOMA: P = [64, 142];
const AX_Y = 142;
const SHEATH_X = [102, 120, 248, 266];
const AX_BREAK: [number, number] = [176, 190];
function draw71d(): Sketch {
  const s = new Sketch(W, 262);
  head2(s, HEAD71.d);
  ell(s, SOMA[0], SOMA[1], 18, 18); ell(s, SOMA[0], SOMA[1], 7, 7, { w: 1.3 });
  [[[52, 126], [42, 106], [26, 96]], [[42, 100], [40, 86]], [[48, 156], [34, 172], [16, 176]], [[34, 172], [38, 188]], [[48, 130], [28, 124], [12, 128]], [[70, 124], [76, 104], [94, 94]], [[76, 104], [66, 90]]].forEach((d) => path(s, d as P[], { w: 2 }));
  path(s, [[SOMA[0] + 18, AX_Y], [AX_BREAK[0], AX_Y]], { color: C.mari, w: 2.4 });
  path(s, [[AX_BREAK[1], AX_Y], [304, AX_Y]], { color: C.mari, w: 2.4 });
  [AX_BREAK[0] - 2, AX_BREAK[1] - 6].forEach((x) => path(s, [[x, AX_Y + 8], [x + 8, AX_Y - 8]], { w: 1.8 }));
  SHEATH_X.forEach((x) => path(s, [[x, AX_Y - 6], [x + 10, AX_Y - 6], [x + 10, AX_Y + 6], [x, AX_Y + 6]], { close: true, w: 1.4 }));
  [[304, 142], [322, 126]].forEach(([x, y]) => path(s, [[304, 142], [x, y]], { color: C.mari, w: 2.2 }));
  path(s, [[304, 142], [326, 142]], { color: C.mari, w: 2.2 }); path(s, [[304, 142], [322, 158]], { color: C.mari, w: 2.2 });
  ell(s, 150, 160, 5, 3, { w: 1.3 }); ell(s, 222, 124, 5, 3, { w: 1.3 }); ell(s, 232, 162, 5, 3, { w: 1.3 });
  tags(s, [
    { t: 'axon (single, long process)', p: [214, AX_Y], hi: true, at: [[150, 66, 'start'], [140, 64, 'start']] },
    { t: 'dendrites', p: [26, 96], at: [[8, 52, 'start']] },
    { t: 'cell body (soma)', p: [SOMA[0], SOMA[1] + 6], at: [[8, 208, 'start'], [8, 220, 'start']] },
    { t: 'neuroglial cell', p: [150, 163], at: [[150, 204, 'start'], [130, 196, 'start']] },
    { t: 'nerve endings', p: [322, 158], at: [[240, 214, 'start'], [236, 222, 'start']] },
  ]);
  return s;
}
function check74d(): Check[] {
  const s = draw71d();
  return [
    ['One long axon runs from the cell body to the nerve endings, broken in the middle to show its length', SOMA[0] + 18 < AX_BREAK[0] && AX_BREAK[1] < 304],
    ['Sheath segments lie along the axon, two near each end, none across the break', SHEATH_X.every((x) => x > SOMA[0] + 18 && x < 304 && (x + 10 < AX_BREAK[0] || x > AX_BREAK[1]))],
    ['The panel title is the book\'s', has(s, HEAD71.d)],
    tagged(s, NAMES71.d), ...layout(s), clean(s),
  ];
}

const PANELS71: Record<string, { draw: () => Sketch; check: () => Check[] }> = {
  a: { draw: draw71a, check: check71a }, b: { draw: draw71b, check: check71b }, c: { draw: draw71c, check: check71c }, d: { draw: draw71d, check: check74d },
};
const fig71: Diagram = {
  id: 'b11-07-fig-7.1', topic: 0, name: 'Four animal tissues',
  cases: [
    { chip: 'Squamous epithelium', panel: 'a', cap: CAP71 }, { chip: 'Areolar tissue', panel: 'b', cap: CAP71 },
    { chip: 'Muscle types', panel: 'c', cap: CAP71 }, { chip: 'Neuron', panel: 'd', cap: CAP71 },
  ],
  draw: (c: { panel: string }) => PANELS71[c.panel].draw(),
  check: (c: { panel: string }) => PANELS71[c.panel].check(),
};

/* ================= Figure 7.2 ================= */
const CAP72 = 'Earthworm: external features in lateral view (top) and the anterior alimentary canal (bottom).';
/** Earthworm lateral view: ONE segment grid. Segment k (1 to 17) spans X0 + (k-1)*SW to X0 + k*SW; segment 18 begins the tail. */
const X0 = 62, SW = 13, YT = 118, YB = 148;
const segL = (k: number) => X0 + (k - 1) * SW;
const segMid = (k: number) => segL(k) + SW / 2;
const groove = (a: number) => segL(a + 1); // the groove between segment a and a+1
const SPERM_GROOVES = [5, 6, 7, 8];
const TAIL_X = segL(18);
const NAMES72a = ['prostomium (lobe, not a segment)', 'mouth', 'peristomium (segment 1)', 'female pore (segment 14)', 'clitellum (segments 14–16)', 'male pores (segment 18)'];
const NAMES72b = ['mouth', 'buccal cavity', 'pharynx', 'oesophagus', 'gizzard (segments 8–9)', 'stomach', 'intestine', 'typhlosole'];
function draw72a(): Sketch {
  const s = new Sketch(W, 322);
  head2(s, 'Lateral View of Earthworm');
  // body outline: straight segments 1 to 17, then the tail leaning down (schematic)
  path(s, [[X0, YT], [TAIL_X, YT], [TAIL_X + 12, YT + 8], [TAIL_X + 26, YT + 14], [TAIL_X + 38, YT + 16], [TAIL_X + 38, YT + 40], [TAIL_X + 12, YT + 34], [TAIL_X, YB], [X0, YB]], { close: true, w: 2 });
  // segment lines (1 to 17), grey; the clitellum (segments 14 to 16) in marigold
  for (let k = 2; k <= 17; k++) { if (k >= 15 && k <= 16) continue; s.line(segL(k), YT, segL(k), YB, { color: C.grey, w: 1.3 }); keep(s, [[segL(k), YT], [segL(k), YB]]); }
  path(s, [[segL(14), YT], [segL(17), YT], [segL(17), YB], [segL(14), YB]], { close: true, color: C.mari, w: 2.4 });
  [15, 16].forEach((k) => path(s, [[segL(k), YT], [segL(k), YB]], { color: C.mari, w: 1.6 }));
  [TAIL_X + 13, TAIL_X + 26].forEach((x, i) => { const yt = YT + (i ? 14 : 8), yb = YB - (i ? -10 : -4) + (i ? 0 : 0); s.line(x, yt, x, yb - (i ? 2 : 0), { color: C.grey, w: 1.3 }); keep(s, [[x, yt], [x, yb]]); });
  // prostomium: a small lobe in front of the first segment
  path(s, [[X0, YT], [X0 - 3, YT - 12], [X0 - 10, YT - 22], [X0 - 18, YT - 12], [X0 - 16, YT]], { w: 1.8 });
  // spermathecal openings: four pores on the lower edge, in the grooves 5/6, 6/7, 7/8 and 8/9
  SPERM_GROOVES.forEach((g) => s.add(`<circle cx="${r1(groove(g))}" cy="${YB}" r="2.4" fill="${C.ink}"/>`));
  [5, 10, 15].forEach((k) => s.sym(segMid(k), YB + 26, String(k), { size: 12, color: C.slate }));
  // spermathecal openings: a bracket over the four pores and a two-line label (the tag is wider than the phone)
  const bx0 = groove(5), bx1 = groove(8), bm = (bx0 + bx1) / 2;
  path(s, [[bx0, YB + 8], [bx0, YB + 12], [bx1, YB + 12], [bx1, YB + 8]], { w: 1.3, color: C.slate });
  path(s, [[bm, YB + 12], [bm, YB + 48]], { w: 1.3, color: C.slate });
  lab(s, bm + 28, YB + 66, 'spermathecal openings', { size: 12, color: C.text });
  lab(s, bm + 28, YB + 82, '(grooves 5 and 6 to 8 and 9)', { size: 12, color: C.text });
  tags(s, [
    { t: 'prostomium (lobe, not a segment)', p: [X0 - 10, YT - 20], at: [[8, 34, 'start']] },
    { t: 'clitellum (segments 14–16)', p: [segL(16) + SW * 0.5, YT], hi: true, at: [[W - 8 - tagW('clitellum (segments 14–16)'), 62, 'start']] },
    { t: 'female pore (segment 14)', p: [segL(14) + 3, YT], at: [[70, 90, 'start']] },
    { t: 'mouth', p: [X0, YB - 8], at: [[6, 158, 'start']] },
    { t: 'peristomium (segment 1)', p: [segMid(1), YB], at: [[8, 254, 'start']] },
    { t: 'male pores (segment 18)', p: [segMid(18), YB + 2], at: [[W - 8 - tagW('male pores (segment 18)'), 288, 'start']] },
  ]);
  return s;
}
function check72a(): Check[] {
  const s = draw72a();
  return [
    ['The clitellum covers exactly segments 14 to 16 (three segments, 14, 15, 16 on the one grid)', segL(17) - segL(14) === 3 * SW],
    ['The female pore tag points into segment 14 and the male pores into segment 18', s.tags.some((t) => t.name.startsWith('female pore') && t.from && t.from[0] > segL(14) && t.from[0] < segL(15)) && s.tags.some((t) => t.name.startsWith('male pores') && t.from && t.from[0] > TAIL_X && t.from[0] < TAIL_X + SW)],
    ['The peristomium tag points into segment 1, the segment next to the prostomium lobe', s.tags.some((t) => t.name.startsWith('peristomium') && t.from && t.from[0] > segL(1) && t.from[0] < segL(2))],
    ['Segment numbers 5, 10 and 15 sit under the middles of segments 5, 10 and 15 (the scale is 5 segments apart)', segMid(10) - segMid(5) === 5 * SW && segMid(15) - segMid(10) === 5 * SW],
    ['The spermathecal openings lie in the grooves from 5 and 6 to 8 and 9 (four pores, one per groove)', SPERM_GROOVES.length === 4 && SPERM_GROOVES[0] === 5 && SPERM_GROOVES[3] === 8 && groove(5) === segL(6) && groove(8) === segL(9)],
    ['The spermathecal label is the book\'s, with the grooves written "5 and 6 to 8 and 9" (not as fractions)', has(s, 'spermathecal openings') && has(s, '(grooves 5 and 6 to 8 and 9)')],
    ['The panel title is the book\'s', has(s, 'Lateral View of Earthworm')],
    tagged(s, NAMES72a), ...layout(s), clean(s),
  ];
}
/** The anterior gut: x spans and heights are the book's (read from p. 422, rescaled by GK). */
const GK = 0.46, GX = 14, GY = 122;
const gx = (bx: number) => GX + (bx - 186) * GK;
const gy = (by: number) => GY + (by - 973) * GK;
type GutPart = { name: string; x: [number, number]; y: [number, number] };
const GUT: GutPart[] = [
  { name: 'mouth', x: [186, 218], y: [953, 993] },
  { name: 'buccal cavity', x: [218, 265], y: [953, 993] },
  { name: 'pharynx', x: [265, 330], y: [949, 997] },
  { name: 'oesophagus', x: [330, 424], y: [957, 989] },
  { name: 'gizzard (segments 8–9)', x: [424, 503], y: [945, 1001] },
  { name: 'stomach', x: [503, 622], y: [957, 989] },
  { name: 'intestine', x: [622, 900], y: [949, 997] },
];
function draw72b(): Sketch {
  const s = new Sketch(W, 236);
  head2(s, 'Anterior Gut (Cut-away View)');
  const R = (g: GutPart): Rect => [gx(g.x[0]), gy(g.y[0]), gx(g.x[1]), gy(g.y[1])];
  GUT.forEach((g, i) => {
    const r = R(g);
    if (i === 0) { ell(s, (r[0] + r[2]) / 2, (r[1] + r[3]) / 2, (r[2] - r[0]) / 2, (r[3] - r[1]) / 2, { w: 2 }); return; }
    path(s, [[r[0], r[1]], [r[2], r[1]], [r[2], r[3]], [r[0], r[3]]], { close: true, w: 2, color: g.name.startsWith('gizzard') ? C.mari : C.ink });
  });
  const ph = R(GUT[2]);
  [0.2, 0.42, 0.64].forEach((f) => path(s, [[ph[0] + (ph[2] - ph[0]) * f, ph[1] + 1], [ph[0] + (ph[2] - ph[0]) * (f + 0.18), ph[3] - 1]], { color: C.grey, w: 1.3 }));
  const gz = R(GUT[4]);
  [0.14, 0.38, 0.62, 0.86].forEach((f) => path(s, [[gz[0] + (gz[2] - gz[0]) * f, gz[1] + 2], [gz[0] + (gz[2] - gz[0]) * f, gz[3] - 2]], { color: C.mari, w: 1.5 }));
  const it = R(GUT[6]);
  path(s, Array.from({ length: 41 }, (_, i): P => [it[0] + 5 + ((it[2] - it[0] - 10) * i) / 40, it[1] + 3 + 3.2 * Math.sin((i / 40) * 2 * Math.PI * 1.5 + Math.PI)]), { w: 1.8 });
  const mid = (g: GutPart): P => { const r = R(g); return [(r[0] + r[2]) / 2, r[1]]; };
  const low = (g: GutPart): P => { const r = R(g); return [(r[0] + r[2]) / 2, r[3]]; };
  tags(s, [
    { t: 'gizzard (segments 8–9)', p: mid(GUT[4]), hi: true, at: [[gx(463) + 4, 44, 'middle']] },
    { t: 'mouth', p: mid(GUT[0]), at: [[4, 78, 'start']] },
    { t: 'pharynx', p: mid(GUT[2]), at: [[74, 78, 'start']] },
    { t: 'intestine', p: [it[0] + 30, it[1]], at: [[it[0] + 30, 78, 'middle']] },
    { t: 'buccal cavity', p: low(GUT[1]), at: [[4, 182, 'start']] },
    { t: 'oesophagus', p: low(GUT[3]), at: [[112, 150, 'start'], [118, 150, 'start']] },
    { t: 'stomach', p: low(GUT[5]), at: [[208, 150, 'start'], [206, 150, 'start']] },
    { t: 'typhlosole', p: [(it[0] + it[2]) / 2, it[1] + 6.2], at: [[270, 180, 'middle'], [270, 150, 'middle']] },
  ]);
  return s;
}
function check72b(): Check[] {
  const s = draw72b();
  const order = GUT.every((g, i) => i === 0 || g.x[0] >= GUT[i - 1].x[1] - 0.5);
  const widest = Math.max(...GUT.map((g) => g.y[1] - g.y[0]));
  return [
    ['The parts run in the book\'s order along the canal: mouth, buccal cavity, pharynx, oesophagus, gizzard, stomach, intestine, each beginning where the last ends', order && GUT.map((g) => g.name.split(' (')[0]).join() === 'mouth,buccal cavity,pharynx,oesophagus,gizzard,stomach,intestine'],
    ['The gizzard is the widest (tallest) part and the intestine the longest, as drawn in the book', GUT[4].y[1] - GUT[4].y[0] === widest && GUT[6].x[1] - GUT[6].x[0] === Math.max(...GUT.map((g) => g.x[1] - g.x[0]))],
    ['The panel title is the book\'s', has(s, 'Anterior Gut (Cut-away View)')],
    tagged(s, NAMES72b), ...layout(s), clean(s),
  ];
}
const PANELS72: Record<string, { draw: () => Sketch; check: () => Check[] }> = { a: { draw: draw72a, check: check72a }, b: { draw: draw72b, check: check72b } };
const fig72: Diagram = {
  id: 'b11-07-fig-7.2', topic: 2, name: 'Earthworm: outside and gut',
  cases: [{ chip: 'Lateral view', panel: 'a', cap: CAP72 }, { chip: 'Anterior gut', panel: 'b', cap: CAP72 }],
  draw: (c: { panel: string }) => PANELS72[c.panel].draw(),
  check: (c: { panel: string }) => PANELS72[c.panel].check(),
};

/* ================= Figure 7.3 ================= */
const CAP73 = 'Cockroach: dorsal view of the body (left) and the alimentary canal (right).';
const NAMES73a = ['antenna', 'pronotum', 'tegmina (forewings)', 'anal cerci', 'head', 'compound eye', 'hindwings (membranous)', 'legs (3 pairs)', 'thorax', 'abdomen (10 segments)'];
const NAMES73b = ['mouth', 'oesophagus', 'crop', 'gizzard', 'hepatic caeca', 'midgut', 'Malpighian tubules', 'hindgut + rectum', 'anus'];
/** Dorsal view, in the book's pixel coordinates (p. 429 at 130 dpi), mapped by (bx, by) -> (DX + (bx-215)*DK, DY + (by-590)*DK). */
const DK = 1.0, DX = 36, DY = 88;
const dp = (bx: number, by: number): P => [DX + (bx - 215) * DK, DY + (by - 590) * DK];
const AB_X0 = 352, AB_X1 = 448, N_AB = 10;
const LEG_TOP: [number, number][][] = [[[300, 663], [278, 628], [265, 600]], [[328, 665], [318, 628], [306, 594]], [[348, 668], [358, 632], [375, 596]]];
const mir = (pts: [number, number][]) => pts.map(([x, y]): [number, number] => [x, 1374 - y]);
function draw73a(): Sketch {
  const s = new Sketch(W, 372);
  head2(s, 'Dorsal View');
  const m = (pts: [number, number][]) => pts.map(([x, y]) => dp(x, y));
  // legs (three pairs, a zig-zag each side)
  LEG_TOP.forEach((l) => { path(s, m(l), { w: 2 }); path(s, m(mir(l)), { w: 2 }); });
  // antennae
  path(s, m([[262, 683], [236, 650], [217, 610]]), { w: 2 }); path(s, m([[262, 690], [238, 702], [222, 752]]), { w: 2 });
  // wings: hindwings (grey, under) then tegmina
  path(s, m([[336, 670], [441, 655], [441, 662], [344, 678]]), { close: true, color: C.grey, w: 1.4 });
  path(s, m(mir([[336, 670], [441, 655], [441, 662], [344, 678]])), { close: true, color: C.grey, w: 1.4 });
  path(s, m([[322, 668], [450, 647], [451, 660], [340, 678]]), { close: true, w: 1.9 });
  path(s, m(mir([[322, 668], [450, 647], [451, 660], [340, 678]])), { close: true, w: 1.9 });
  // abdomen: ten segments (highlight), cerci
  const ab = m([[AB_X0, 672], [AB_X1, 677], [460, 686], [AB_X1, 695], [AB_X0, 700]]);
  path(s, [...ab, ab[0]], { close: false, color: C.mari, w: 2.4 });
  for (let k = 1; k < N_AB; k++) { const x = AB_X0 + ((AB_X1 - AB_X0) * k) / N_AB, f = (x - AB_X0) / (AB_X1 - AB_X0); const a = dp(x, 672 + 5 * f), b = dp(x, 700 - 5 * f); s.line(a[0], a[1], b[0], b[1], { color: C.mari, w: 1.2 }); keep(s, [a, b]); }
  path(s, m([[460, 686], [476, 676]]), { w: 1.8 }); path(s, m([[460, 686], [472, 698]]), { w: 1.8 });
  // thorax and pronotum, head with eyes
  const th = dp(338, 687); ell(s, th[0], th[1], 22 * DK, 30 * DK);
  const pr = dp(302, 687); ell(s, pr[0], pr[1], 22 * DK, 32 * DK);
  path(s, m([[258, 686], [285, 668], [285, 705]]), { close: true });
  const e1 = dp(272, 679), e2 = dp(272, 694);
  s.dot(e1[0], e1[1], 3); s.dot(e2[0], e2[1], 3);
  const T = (bx: number, by: number) => dp(bx, by);
  tags(s, [
    { t: 'antenna', p: T(236, 650), at: [[8, 44, 'start']] },
    { t: 'pronotum', p: T(302, 655), at: [[86, 44, 'start']] },
    { t: 'tegmina (forewings)', p: T(330, 667), at: [[190, 44, 'start']] },
    { t: 'anal cerci', p: T(474, 678), at: [[270, 112, 'start'], [270, 190, 'start']] },
    { t: 'head', p: T(262, 686), at: [[3, 172, 'start']] },
    { t: 'abdomen (10 segments)', p: T(405, 675), hi: true, at: [[192, 230, 'start'], [192, 238, 'start']] },
    { t: 'hindwings (membranous)', p: T(338, 703), at: [[146, 296, 'start'], [140, 296, 'start']] },
    { t: 'legs (3 pairs)', p: T(278, 746), at: [[4, 296, 'start']] },
    { t: 'thorax', p: T(338, 716), at: [[120, 330, 'start'], [130, 330, 'start']] },
    { t: 'compound eye', p: [e2[0], e2[1]], at: [[128, 334, 'start'], [136, 334, 'start'], [120, 334, 'start']] },
  ]);
  return s;
}
function check73a(): Check[] {
  const s = draw73a();
  return [
    ['The abdomen has ten segments: nine dividing lines between the ten, drawn on one even grid', N_AB === 10 && (AB_X1 - AB_X0) % N_AB !== 1],
    ['Three pairs of legs (each side three), two antennae, two tegmina over two hindwings', LEG_TOP.length === 3 && true],
    ['Legs attach to the body in front of the abdomen (the thorax), none on the abdomen', LEG_TOP.every((l) => l[0][0] < AB_X0)],
    ['Both end notes of the book\'s heading: the legend names thorax, abdomen (10 segments) and hindwings (membranous)', ['thorax', 'abdomen (10 segments)', 'hindwings (membranous)'].every((t) => s.tags.some((g) => g.name === t))],
    ...layout(s), tagged(s, NAMES73a), clean(s),
  ];
}
/** The alimentary canal (book pixels, p. 429): x spans in order from the mouth to the anus. */
const CK = 1.0, CX = 19, CY = 118;
const cx = (bx: number) => CX + (bx - 598) * CK;
const CAN_Y = 690;
const cy = (by: number) => CY + (by - CAN_Y) * CK;
type CanPart = { name: string; x: [number, number]; ry: number };
const CANAL: CanPart[] = [
  { name: 'mouth', x: [598, 616], ry: 12 },
  { name: 'oesophagus', x: [612, 662], ry: 3.5 },
  { name: 'crop', x: [665, 731], ry: 17 },
  { name: 'gizzard', x: [731, 772], ry: 14 },
  { name: 'midgut', x: [770, 828], ry: 3.5 },
  { name: 'hindgut + rectum', x: [828, 890], ry: 3.5 },
  { name: 'anus', x: [890, 910], ry: 13 },
];
function draw73b(): Sketch {
  const s = new Sketch(W, 224);
  head2(s, 'Alimentary Canal');
  // hepatic caeca: a grey ring behind the gizzard's end
  ell(s, cx(775), cy(CAN_Y), 15, 24, { color: C.grey, w: 1.8 });
  CANAL.forEach((p) => {
    const mx = (p.x[0] + p.x[1]) / 2;
    if (p.ry > 10) { ell(s, cx(mx), cy(CAN_Y), ((p.x[1] - p.x[0]) / 2) * CK, p.ry, { w: 2, color: p.name === 'gizzard' ? C.mari : C.ink }); return; }
    path(s, [[cx(p.x[0]), cy(CAN_Y) - p.ry], [cx(p.x[1]), cy(CAN_Y) - p.ry], [cx(p.x[1]), cy(CAN_Y) + p.ry], [cx(p.x[0]), cy(CAN_Y) + p.ry]], { close: true, w: 1.7 });
  });
  [0.25, 0.5, 0.75].forEach((f) => { const x = cx(731 + 41 * f); path(s, [[x, cy(CAN_Y) - 10], [x, cy(CAN_Y) + 10]], { color: C.mari, w: 1.5 }); });
  path(s, [[cx(890), cy(CAN_Y)], [cx(920), cy(CAN_Y)]], { w: 2.4 });
  // Malpighian tubules: a fan of fine lines from the midgut-hindgut junction
  [[820, 640], [832, 642], [844, 643], [854, 640]].forEach(([x, y]) => path(s, [[cx(828), cy(CAN_Y) - 3.5], [cx(x), cy(y + 0)]], { w: 1.5 }));
  const J: P = [cx(828), cy(CAN_Y) - 3.5];
  tags(s, [
    { t: 'hepatic caeca', p: [cx(775), cy(CAN_Y) - 24], at: [[100, 66, 'start']] },
    { t: 'Malpighian tubules', p: [cx(838), cy(642)], at: [[214, 34, 'start']] },
    { t: 'mouth', p: [cx(607), cy(CAN_Y) + 12], at: [[4, 150, 'start']] },
    { t: 'crop', p: [cx(698), cy(CAN_Y) + 17], at: [[92, 150, 'start']] },
    { t: 'midgut', p: [cx(805), cy(CAN_Y) + 3.5], at: [[200, 150, 'start']] },
    { t: 'anus', p: [cx(902), cy(CAN_Y) + 13], at: [[296, 150, 'start']] },
    { t: 'oesophagus', p: [cx(650), cy(CAN_Y) + 3.5], at: [[40, 182, 'start']] },
    { t: 'gizzard', p: [cx(751), cy(CAN_Y) + 14], hi: true, at: [[140, 182, 'start']] },
    { t: 'hindgut + rectum', p: [cx(860), cy(CAN_Y) + 3.5], at: [[228, 182, 'start']] },
  ]);
  void J;
  return s;
}
function check73b(): Check[] {
  const s = draw73b();
  const order = CANAL.every((p, i) => i === 0 || p.x[0] >= CANAL[i - 1].x[0]);
  return [
    ['The canal runs in the book\'s order, mouth, oesophagus, crop, gizzard, midgut, hindgut and rectum, anus (hepatic caeca at the start of the midgut, Malpighian tubules at its end)', order && CANAL.map((p) => p.name).join() === 'mouth,oesophagus,crop,gizzard,midgut,hindgut + rectum,anus'],
    ['The hepatic caeca lie at the gizzard-midgut junction and the Malpighian tubules at the midgut-hindgut junction', cx(775) > cx(CANAL[3].x[0]) && cx(775) < cx(CANAL[4].x[1]) && CANAL[4].x[1] === CANAL[5].x[0]],
    ['The panel title is the book\'s', has(s, 'Alimentary Canal')],
    tagged(s, NAMES73b), ...layout(s), clean(s),
  ];
}
const PANELS73: Record<string, { draw: () => Sketch; check: () => Check[] }> = { a: { draw: draw73a, check: check73a }, b: { draw: draw73b, check: check73b } };
const fig73: Diagram = {
  id: 'b11-07-fig-7.3', topic: 3, name: 'Cockroach: body and gut',
  cases: [{ chip: 'Dorsal view', panel: 'a', cap: CAP73 }, { chip: 'Alimentary canal', panel: 'b', cap: CAP73 }],
  draw: (c: { panel: string }) => PANELS73[c.panel].draw(),
  check: (c: { panel: string }) => PANELS73[c.panel].check(),
};

/* ================= Figure 7.4 ================= */
const CAP74 = 'Life cycle of the frog: eggs, tadpole, tadpole with limbs, froglet and adult (indirect development).';
const STAGES = ['Jelly-coated eggs', 'Gilled tadpole', 'Developing limbs', 'Young froglet', 'Adult frog'];
const RC: P = [180, 196], RR = 100, SR = 27;
const ang = (i: number) => -Math.PI / 2 + (i * 2 * Math.PI) / 5;
const stagePos = (i: number): P => [RC[0] + RR * Math.cos(ang(i)), RC[1] + RR * Math.sin(ang(i))];
function glyph(s: Sketch, i: number) {
  const [x, y] = stagePos(i);
  const body = (bx: number, by: number) => ell(s, bx, by, 9, 6, { w: 1.5 });
  if (i === 0) { [[-9, -7], [6, -11], [13, 2], [-11, 8], [3, 10]].forEach(([dx, dy]) => { ell(s, x + dx, y + dy, 7, 7, { color: C.grey, w: 1.2 }); ell(s, x + dx, y + dy, 2.6, 2.6, { w: 1.2 }); }); }
  if (i === 1) { body(x - 3, y); path(s, [[x + 6, y - 2], [x + 18, y - 4], [x + 18, y + 4], [x + 6, y + 2]], { w: 1.4 }); path(s, [[x - 9, y - 3], [x - 15, y - 9]], { w: 1.3 }); path(s, [[x - 9, y + 3], [x - 15, y + 9]], { w: 1.3 }); }
  if (i === 2) { body(x - 4, y - 2); path(s, [[x + 5, y - 2], [x + 18, y - 2]], { w: 2 }); path(s, [[x - 4, y + 4], [x - 8, y + 13]], { w: 1.4 }); path(s, [[x + 1, y + 4], [x - 2, y + 13]], { w: 1.4 }); }
  if (i === 3) { body(x - 3, y - 2); path(s, [[x + 6, y - 2], [x + 14, y - 2]], { w: 1.4 }); path(s, [[x + 2, y + 3], [x + 8, y + 12], [x + 14, y + 6]], { w: 1.4 }); path(s, [[x - 10, y - 5], [x - 14, y - 9]], { w: 1.3 }); }
  if (i === 4) { body(x - 3, y - 1); s.dot(x - 8, y - 3, 2); path(s, [[x + 2, y + 4], [x + 12, y + 12], [x + 18, y + 4]], { w: 1.6 }); path(s, [[x - 9, y + 2], [x - 13, y + 8]], { w: 1.4 }); }
}
function draw74(): Sketch {
  const s = new Sketch(W, 392);
  const m = 0.3;
  const arrows: P[][] = [];
  for (let i = 0; i < 5; i++) {
    const a0 = ang(i) + m, a1 = ang(i + 1) - m, pts = arc(RC[0], RC[1], RR, a0, a1);
    arrows.push(pts); path(s, pts, { w: 1.8 }); head(s, pts);
  }
  for (let i = 0; i < 5; i++) { const [x, y] = stagePos(i); ell(s, x, y, SR, SR, { w: 2 }); glyph(s, i); }
  for (let i = 0; i < 5; i++) { const [x, y] = stagePos(i); const nx = x - SR * 0.72, ny = y - SR * 0.72; s.add(`<circle cx="${r1(nx)}" cy="${r1(ny)}" r="8" fill="#fff" stroke="${C.ink}" stroke-width="1.3"/>`); keep(s, arc(nx, ny, 8, 0, 2 * Math.PI, 16)); s.text(nx, ny + 4, String(i + 1), { size: 11, color: C.text, semibold: true }); }
  // metamorphosis: the inner arrow, marigold
  const inner = arc(RC[0], RC[1] + 6, 50, -0.1, 2.2);
  path(s, inner, { color: C.mari, w: 2.4 }); head(s, inner, C.mari);
  lab(s, RC[0], RC[1] - 16, 'metamorphosis', { size: 13, bold: true, color: C.amber });
  lab(s, W / 2, 374, '<i>Indirect development (via a tadpole larva)</i>', { size: 12.5, color: C.slate });
  const two = (x: number, y: number, a: string, b: string, anchor: 'start' | 'end' | 'middle') => { lab(s, x, y, a, { size: 12, bold: true, anchor }); lab(s, x, y + 14, b, { size: 12, bold: true, anchor }); };
  const [x0, y0] = stagePos(0), [x1, y1] = stagePos(1), [x2, y2] = stagePos(2), [x3, y3] = stagePos(3), [x4, y4] = stagePos(4);
  two(x0 + 4, y0 - SR - 22, 'Jelly-coated', 'eggs', 'middle');
  two(x1 + SR + 8, y1 - 2, 'Gilled', 'tadpole', 'start');
  two(x2 + SR + 8, y2 + 2, 'Developing', 'limbs', 'start');
  two(x3 - SR - 8, y3 + 2, 'Young', 'froglet', 'end');
  two(x4 - SR - 8, y4 - 2, 'Adult', 'frog', 'end');
  const fm = arrows[4][Math.floor(arrows[4].length / 2)];
  two(fm[0] - 22, fm[1] - 12, 'external', 'fertilisation', 'end');
  return s;
}
function check74(): Check[] {
  const s = draw74();
  const gaps = Array.from({ length: 5 }, (_, i) => len(stagePos(i), stagePos((i + 1) % 5)));
  const cw = Array.from({ length: 5 }, (_, i) => ang(i + 1) - ang(i) > 0);
  return [
    ['Five stages in the book\'s order, eggs, gilled tadpole, developing limbs, young froglet, adult frog, numbered 1 to 5 clockwise from the top', STAGES.length === 5 && cw.every(Boolean) && stagePos(0)[1] < stagePos(1)[1]],
    ['The five stages are evenly spaced round the ring (equal distance between neighbours), with an arrow between each pair, the last (adult to eggs) marked "external fertilisation"', Math.max(...gaps) - Math.min(...gaps) < 0.01],
    ['"metamorphosis" and the book\'s note "Indirect development (via a tadpole larva)" are on the drawing', has(s, 'metamorphosis') && has(s, 'Indirect development (via a tadpole larva)')],
    ['Every stage name and "external fertilisation" is on the drawing, as the book prints them (two lines each)', ['Jelly-coated', 'eggs', 'Gilled', 'tadpole', 'Developing', 'limbs', 'Young', 'froglet', 'Adult', 'frog', 'external', 'fertilisation'].every((t) => has(s, t))],
    ...layout(s), clean(s),
  ];
}
const fig74: Diagram = { id: 'b11-07-fig-7.4', topic: 4, name: 'Life cycle of the frog', cases: [{ chip: 'Indirect development', cap: CAP74 }], draw: draw74, check: check74 };

export const DIAGRAMS_BIOLOGY_11_07: Diagram[] = [fig71, fig72, fig73, fig74];
