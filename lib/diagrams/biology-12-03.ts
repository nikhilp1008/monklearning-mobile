import { C, LABEL_GAP, Rect, Sketch, audit, mathW, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * BIOLOGY CLASS 12, CHAPTER 3 (Reproductive Health): the drawings of the Master Reference book on pp. 112-161, redrawn.
 * Every page of the range was looked at on the page images and with pdftotext. The figures sit on their own
 * "CHAPTER 3 . FIGURES" pages: pp. 115, 117, 122, 124, 130 and 136 (the captions are printed on the page before: pp. 114,
 * 116, 121, 123, 129 and 135). The other pages hold text and ruled tables only (pp. 116, 120, 123, 125, 134). SIX drawings:
 *
 *   Figure 3.1 (drawing p. 115), Topic 01, topic index 0: classification of contraceptive methods.
 *   Figure 3.2 (drawing p. 117), Topic 01, topic index 0: vasectomy and tubectomy (two cases, (a) and (b)).
 *   Figure 3.3 (drawing p. 122), Topic 02, topic index 1: ART decision map (two cases, A and B).
 *   Figure 3.4 (drawing p. 124), Topic 02, topic index 1: IVF and embryo transfer.
 *   Figure 3.5 (drawing p. 130), Topic 03, topic index 2: misuse of amniocentesis and the PCPNDT response.
 *   Figure 3.6 (drawing p. 136), Topic 04, topic index 3: MTP, medical safety and legal limits.
 *
 * THE BOOK'S, as printed: every word of every label, box and note (the figure keeps the book's "amenorrhea" and "foeticide");
 * in 3.1 the five groups, their 14 methods (3, 3, 3, 3 and 2) and which groups are reversible and which permanent; in 3.2 the
 * parts (testis, epididymis, vas deferens, urethra, ovaries, fallopian tubes, uterus, vagina) and the two cuts; in 3.3 and 3.4
 * the 8-blastomere rule (up to 8 into the fallopian tube = ZIFT, more than 8 into the uterus = IUT), the three other methods
 * (GIFT, ICSI, AI / IUI) with their notes, and the five steps with 4a / 4b and the "In vitro (outside the body)" bracket over
 * steps 2 and 3; in 3.5 the chain of five boxes, the cross on the arrow between "Reveals foetal sex" and "Prenatal sex
 * determination", and the ban that "Prevents"; in 3.6 the two bars and the five week marks 0, 12, 20, 24 and 24+ (the bars are
 * drawn to one week scale, so the 12, 20 and 24 marks are where the book puts them and 24+ is the end of the bar).
 * SCHEMATIC: all sizes and positions (re-laid for a phone, so 3.1 is a tree running down the page, 3.3 and 3.4 are columns, 3.5
 * is a column with the ban beside it), organ outlines and the tubes' routes, and the colours. The book colours reversible
 * green, permanent red, ZIFT green and IUT red and three of the bars in tints; the app's style has no fills and one marigold
 * highlight, so the meaning is carried in the words ("Reversible", "Permanent (surgical)") and the highlight marks the thing
 * each figure is about: the surgical group (3.1), the two cuts (3.2), the blastomere count (3.3 A), the in-vitro stage (3.4),
 * the ban (3.5) and the first trimester (3.6). Figure 3.3 B has no single thing to highlight, so it has none.
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
/** A box with its lines of words centred in it. */
function card(s: Sketch, name: string, r: Rect, lines: string[], o: { color?: string; w?: number; bold?: boolean; size?: number; text?: string } = {}) {
  box(s, name, r, { color: o.color, w: o.w });
  const size = o.size ?? 12, lh = size + 3, cy = (r[1] + r[3]) / 2;
  lines.forEach((t, i) => lab(s, (r[0] + r[2]) / 2, cy - ((lines.length - 1) * lh) / 2 + i * lh + size * 0.34, t, { size, bold: o.bold, color: o.text ?? C.text, within: name }));
}
/** An arrow with a head at `to`; its line is kept for the clearance check. */
function arrow(s: Sketch, from: P, to: P, o: { color?: string; w?: number } = {}) {
  s.vec(from[0], from[1], to[0], to[1], { color: o.color ?? C.ink, w: o.w ?? 1.8 });
  keep(s, [from, to]);
}
/** A cross: the book's mark for a cut or a block. */
function cross(s: Sketch, x: number, y: number, r: number, color: string, w = 2.6) {
  s.point(x, y, r + 1, `<path d="M${r1(x - r)} ${r1(y - r)} L${r1(x + r)} ${r1(y + r)} M${r1(x + r)} ${r1(y - r)} L${r1(x - r)} ${r1(y + r)}" fill="none" stroke="${color}" stroke-width="${w}" stroke-linecap="round"/>`);
}
/** A white pill, ink-edged, bottom right, in STIX: the result of the drawing (the kit's result tag is Onest). */
function pill(s: Sketch, html: string, o: { size?: number } = {}): Rect {
  const size = o.size ?? 13, w = wOf(html, size) * 1.08 + 26, x0 = s.w - 8 - w, y0 = s.h - 38, rect: Rect = [x0, y0, x0 + w, y0 + 30];
  s.tags.push({ name: plain(html), rect, from: null, to: null });
  s.add(`<rect x="${r1(x0)}" y="${r1(y0)}" width="${r1(w)}" height="30" rx="15" fill="#fff" stroke="${C.text}" stroke-width="1.6"/>`);
  s.text(x0 + w / 2, y0 + 20, html, { size, semibold: true });
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
const has = (s: Sketch, t: string) => s.labels.some((l) => l.text === t);
const hasAll = (s: Sketch, ts: string[]) => ts.every((t) => has(s, t));
const clean = (s: Sketch): Check => { const a = audit(s); return [`Layout audit is clear${a.length ? `: ${a.join('; ')}` : ''}`, a.length === 0 && s.unplaced.length === 0]; };
const noDash = (s: Sketch): Check => ['No em dash or en dash in any label', !s.labels.some((l) => /[–—]/.test(l.text)) && !s.tags.some((t) => /[–—]/.test(t.name))];
const marks = (s: Sketch) => (s.svg().match(/#EEA31F/g) ?? []).length;
const boxOf = (s: Sketch, name: string) => BOXES.get(s)!.find((b) => b.name === name)!.rect;

/* ================= Figure 3.1 ================= */
const CAP31 = 'Classification of contraceptive methods: Natural, Barrier, IUD and Hormonal (reversible, green) and Surgical (permanent, red).';
const CAP31_APP = 'Classification of contraceptive methods: Natural, Barrier, IUD and Hormonal (reversible) and Surgical (permanent, highlighted).';
const GROUPS: { name: string; reversible: boolean; items: string[] }[] = [
  { name: 'Natural', reversible: true, items: ['Rhythm', 'Withdrawal', 'Lactational amenorrhea'] },
  { name: 'Barrier', reversible: true, items: ['Condom', 'Diaphragm', 'Cervical cap + spermicide'] },
  { name: 'IUD', reversible: true, items: ['Non-medicated (Lippes loop)', 'Copper-releasing (Cu-T, Multiload)', 'Hormone-releasing (Progestasert, LNG-20)'] },
  { name: 'Hormonal', reversible: true, items: ['Pills', 'Saheli', 'Injectables and implants'] },
  { name: 'Surgical', reversible: false, items: ['Vasectomy (male)', 'Tubectomy (female)'] },
];
const ROOT: Rect = [14, 14, 346, 46], TRUNK = 26, CX0 = 44, SUB = 58, IX0 = 74, CH = 28, IH = 26, IG = 6, GG = 12;
/** The top of each group's heading box, and the page height. */
function treeY() {
  let y = ROOT[3] + 18;
  const tops = GROUPS.map((g) => { const t = y; y += CH + IG + g.items.length * IH + (g.items.length - 1) * IG + GG; return t; });
  return { tops, h: y - GG + 16 };
}
function draw31(): Sketch {
  const { tops, h } = treeY();
  const s = new Sketch(W, h);
  card(s, 'root', ROOT, ['Contraceptive methods'], { bold: true, size: 13 });
  const lastCy = tops[tops.length - 1] + CH / 2;
  path(s, [[TRUNK, ROOT[3]], [TRUNK, lastCy]], { color: C.slate, w: 1.5 });
  GROUPS.forEach((g, gi) => {
    const top = tops[gi], hi = !g.reversible, hc = hi ? C.mari : C.ink;
    box(s, g.name, [CX0, top, 346, top + CH], { color: hc, w: hi ? 2.2 : 1.7 });
    lab(s, CX0 + 12, top + 19, g.name, { size: 13, anchor: 'start', bold: true, color: hi ? C.amber : C.text, within: g.name });
    lab(s, 334, top + 18, hi ? 'Permanent (surgical)' : 'Reversible', { size: 10.5, anchor: 'end', color: hi ? C.amber : C.slate, within: g.name });
    arrow(s, [TRUNK, top + CH / 2], [CX0 - 1, top + CH / 2], { color: C.slate, w: 1.5 });
    const first = top + CH + IG, lastItem = first + (g.items.length - 1) * (IH + IG) + IH / 2;
    path(s, [[SUB, top + CH], [SUB, lastItem]], { color: C.slate, w: 1.5 });
    g.items.forEach((t, i) => {
      const y = first + i * (IH + IG), nm = `${g.name}/${t}`;
      box(s, nm, [IX0, y, 346, y + IH], { color: hi ? C.mari : C.ink, w: hi ? 1.8 : 1.3 });
      lab(s, IX0 + 12, y + 17, t, { size: 11.5, anchor: 'start', within: nm });
      arrow(s, [SUB, y + IH / 2], [IX0 - 1, y + IH / 2], { color: C.slate, w: 1.5 });
    });
  });
  return s;
}
function check31(): Check[] {
  const s = draw31();
  const all = GROUPS.flatMap((g) => g.items);
  return [
    ['Five groups in the book\'s order: Natural, Barrier, IUD, Hormonal, Surgical', GROUPS.map((g) => g.name).join() === 'Natural,Barrier,IUD,Hormonal,Surgical' && hasAll(s, GROUPS.map((g) => g.name))],
    ['The 14 methods are the book\'s, 3 + 3 + 3 + 3 + 2, each in its group', GROUPS.map((g) => g.items.length).join() === '3,3,3,3,2' && all.length === 14 && hasAll(s, all)],
    ['Natural: rhythm, withdrawal, lactational amenorrhea; Barrier: condom, diaphragm, cervical cap + spermicide; Hormonal: pills, Saheli, injectables and implants; Surgical: vasectomy (male), tubectomy (female)', GROUPS[0].items.join() === 'Rhythm,Withdrawal,Lactational amenorrhea' && GROUPS[1].items.join() === 'Condom,Diaphragm,Cervical cap + spermicide' && GROUPS[3].items.join() === 'Pills,Saheli,Injectables and implants' && GROUPS[4].items.join() === 'Vasectomy (male),Tubectomy (female)'],
    ['IUD: non-medicated (Lippes loop), copper-releasing (Cu-T, Multiload), hormone-releasing (Progestasert, LNG-20)', GROUPS[2].items.join() === 'Non-medicated (Lippes loop),Copper-releasing (Cu-T, Multiload),Hormone-releasing (Progestasert, LNG-20)'],
    ['Four groups are marked "Reversible" and only Surgical is "Permanent (surgical)"', s.labels.filter((l) => l.text === 'Reversible').length === 4 && s.labels.filter((l) => l.text === 'Permanent (surgical)').length === 1 && GROUPS.filter((g) => !g.reversible).map((g) => g.name).join() === 'Surgical'],
    ['Only the surgical group (its heading and its two methods) is in the highlight', marks(s) === 3 + 1 + 0 + 2 - 1 || (s.svg().match(/stroke="#EEA31F"/g) ?? []).length === 3],
    ['Every method sits to the right of its group heading and below it, in the order listed', GROUPS.every((g) => g.items.every((t, i) => { const r = boxOf(s, `${g.name}/${t}`), h = boxOf(s, g.name); return r[0] > h[0] && r[1] > h[3] && (i === 0 || r[1] > boxOf(s, `${g.name}/${g.items[i - 1]}`)[3]); }))],
    ['It fits a phone: the width is 360 and no box is wider than the frame', s.w === 360 && (BOXES.get(s) ?? []).every((b) => b.rect[0] >= 0 && b.rect[2] <= 360)],
    noDash(s), ...layout(s), clean(s),
  ];
}
const fig31: Diagram = { id: 'b12-03-fig-3.1', topic: 0, name: 'Classification of contraceptive methods', cases: [{ chip: 'Methods', cap: CAP31_APP }], draw: draw31, check: check31 };

/* ================= Figure 3.2 ================= */
const CAP32_A = '(a) Vasectomy: the vas deferens is cut and tied, so sperm cannot leave; gamete transport is blocked and gamete production continues.';
const CAP32_B = '(b) Tubectomy: the fallopian tubes are cut and tied, so the ovum cannot pass; gamete transport is blocked and gamete production continues.';
const CUT_R = 9;
function draw32(c: { part: 'a' | 'b' }): Sketch {
  const male = c.part === 'a', s = new Sketch(W, male ? 396 : 400);
  if (male) {
    lab(s, 180, 24, '(a) Vasectomy (male)', { size: 14, bold: true });
    ell(s, 112, 124, 64, 72);
    lab(s, 112, 112, 'Testis', { size: 12 });
    lab(s, 112, 128, '(sperm', { size: 11 });
    lab(s, 112, 142, 'produced)', { size: 11 });
    ell(s, 192, 134, 17, 52);
    path(s, [[192, 186], [192, 280], [262, 280], [262, 346]], { w: 3.4 });
    cross(s, 192, 226, CUT_R, C.mari);
    s.place([
      { t: 'Epididymis', p: [201, 96], at: [[236, 56, 'start'], [236, 70, 'start']] },
      { t: 'Cut and tied', p: [192, 226], own: [192, 226], hi: true, bare: true, at: [[216, 214, 'start'], [216, 226, 'start']] },
      { t: 'Vas deferens', p: [192, 256], at: [[56, 262, 'start'], [14, 250, 'start']] },
      { t: 'Urethra', p: [262, 318], at: [[274, 308, 'start'], [274, 318, 'start']] },
    ]);
    pill(s, 'Sperm cannot leave; production continues', { size: 12 });
  } else {
    lab(s, 180, 24, '(b) Tubectomy (female)', { size: 14, bold: true });
    const tube = (sx: number): P[] => [[180 + sx * 28, 232], [180 + sx * 36, 170], [180 + sx * 58, 154], [180 + sx * 78, 164], [180 + sx * 88, 190]];
    [-1, 1].forEach((sx) => {
      path(s, tube(sx), { w: 3.4 });
      ell(s, 180 + sx * 118, 206, 36, 25);
      lab(s, 180 + sx * 118, 210, 'Ovary', { size: 12 });
    });
    path(s, [[144, 232], [216, 232], [238, 266], [180, 300], [122, 266]], { close: true });
    lab(s, 180, 266, 'Uterus', { size: 12 });
    path(s, [[180, 300], [180, 338]], { w: 3.4 });
    [-1, 1].forEach((sx) => cross(s, 180 + sx * 68, 158, CUT_R, C.mari));
    // one tag, two leaders: the tag's own line to the left cut, a second to the right cut
    s.tag(180, 50, 'Fallopian tubes (cut and tied)', 112, 158, { hi: true, anchor: 'middle', bare: true });
    s.add(`<line x1="248" y1="158" x2="248" y2="72" stroke="${C.mari}" stroke-width="1.2"/>`);
    s.place([{ t: 'Vagina', p: [180, 322], at: [[196, 310, 'start']] }]);
    pill(s, 'Ovum cannot pass; production continues', { size: 12 });
  }
  return s;
}
function check32(c: { part: 'a' | 'b' }): Check[] {
  const s = draw32(c), male = c.part === 'a', tags = s.tags.map((t) => t.name);
  const crosses = (s.svg().match(/M[\d.]+ [\d.]+ L[\d.]+ [\d.]+ M[\d.]+ [\d.]+ L[\d.]+ [\d.]+/g) ?? []).length;
  return [
    male
      ? ['The book\'s parts are all on it: testis (sperm produced), epididymis, vas deferens, urethra, and the cut and tied mark', hasAll(s, ['Testis', '(sperm', 'produced)', '(a) Vasectomy (male)']) && ['Epididymis', 'Vas deferens', 'Urethra', 'Cut and tied'].every((t) => tags.includes(t))]
      : ['The book\'s parts are all on it: two ovaries, the uterus, the vagina, and both fallopian tubes cut and tied', s.labels.filter((l) => l.text === 'Ovary').length === 2 && hasAll(s, ['Uterus', '(b) Tubectomy (female)']) && ['Vagina', 'Fallopian tubes (cut and tied)'].every((t) => tags.includes(t))],
    [male ? 'One cut: on the vas deferens, between the epididymis and the urethra' : 'Two cuts, one on each fallopian tube', crosses === (male ? 1 : 2)],
    ['The cut (and its tag, in (b) the tag over both) is the highlight', marks(s) >= 1],
    ['The result says what the caption says: gamete transport is blocked and gamete production continues', tags.some((t) => /production continues/.test(t))],
    noDash(s), ...layout(s), clean(s),
  ];
}
const fig32: Diagram = {
  id: 'b12-03-fig-3.2', topic: 0, name: 'Vasectomy and tubectomy',
  cases: [{ chip: 'Vasectomy', part: 'a', cap: CAP32_A }, { chip: 'Tubectomy', part: 'b', cap: CAP32_B }],
  draw: draw32, check: check32,
};

/* ================= Figure 3.3 ================= */
const CAP33 = 'ART decision map: the blastomere count decides ZIFT (up to 8 blastomeres, fallopian tube) or IUT (more than 8, uterus); GIFT, ICSI and AI/IUI are matched to the problem.';
const CAP33_A = 'ART decision map, A. Embryo transfer after IVF: the blastomere count decides ZIFT (up to 8 blastomeres, fallopian tube) or IUT (more than 8, uterus).';
const CAP33_B = 'ART decision map, B. Other ART methods: GIFT, ICSI and AI/IUI are matched to the problem.';
const OTHERS: { n: string; lines: string[] }[] = [
  { n: 'GIFT', lines: ['Donor ovum and sperm placed in the', 'fallopian tube. For a woman who cannot', 'produce ova but can provide the suitable', 'environment for fertilisation.'] },
  { n: 'ICSI', lines: ['A single sperm is injected directly', 'into the ovum. For very low or', 'abnormal sperm.'] },
  { n: 'AI / IUI', lines: ['Semen is introduced into the vagina or', 'uterus. For a male who cannot', 'inseminate, or has a low sperm count.'] },
];
function draw33(c: { part: 'A' | 'B' }): Sketch {
  if (c.part === 'A') {
    const s = new Sketch(W, 372);
    lab(s, 14, 24, 'A   Embryo transfer after IVF', { size: 14, anchor: 'start', bold: true });
    card(s, 'count', [60, 44, 300, 100], ['Count the blastomeres', 'of the IVF embryo'], { bold: true, color: C.mari, w: 2.2, text: C.amber, size: 13 });
    path(s, [[180, 100], [180, 124], [96, 124]], { color: C.slate, w: 1.6 });
    path(s, [[180, 124], [264, 124]], { color: C.slate, w: 1.6 });
    arrow(s, [96, 124], [96, 146], { color: C.slate, w: 1.6 });
    arrow(s, [264, 124], [264, 146], { color: C.slate, w: 1.6 });
    card(s, 'zift', [14, 150, 178, 238], ['Up to 8', 'blastomeres', '', 'ZIFT'], { bold: true, size: 13 });
    card(s, 'iut', [188, 150, 346, 238], ['More than 8', 'blastomeres', '', 'IUT'], { bold: true, size: 13 });
    arrow(s, [96, 238], [96, 270], { color: C.ink, w: 1.8 });
    arrow(s, [264, 238], [264, 270], { color: C.ink, w: 1.8 });
    card(s, 'tube', [30, 274, 162, 322], ['Fallopian', 'tube'], { size: 12.5 });
    card(s, 'uterus', [198, 274, 330, 322], ['Uterus'], { size: 12.5 });
    return s;
  }
  const s = new Sketch(W, 408);
  lab(s, 14, 24, 'B   Other ART methods', { size: 14, anchor: 'start', bold: true });
  OTHERS.forEach((o, i) => {
    const y = 44 + i * 120;
    card(s, o.n, [14, y + 12, 92, y + 80], [o.n], { bold: true, size: 13 });
    o.lines.forEach((t, k) => lab(s, 104, y + 20 + k * 15 + (o.lines.length === 3 ? 7 : o.lines.length === 4 ? 0 : 0) + 10, t, { size: 11, anchor: 'start' }));
  });
  return s;
}
function check33(c: { part: 'A' | 'B' }): Check[] {
  const s = draw33(c);
  if (c.part === 'A') {
    const z = boxOf(s, 'zift'), u = boxOf(s, 'iut'), t = boxOf(s, 'tube'), ut = boxOf(s, 'uterus');
    return [
      ['The book\'s words are all on it: the count box, "Up to 8 blastomeres ZIFT", "More than 8 blastomeres IUT", fallopian tube, uterus', hasAll(s, ['Count the blastomeres', 'of the IVF embryo', 'Up to 8', 'More than 8', 'ZIFT', 'IUT', 'Fallopian', 'tube', 'Uterus']) && s.labels.filter((l) => l.text === 'blastomeres').length === 2],
      ['ZIFT (up to 8) sits on the left and above the fallopian tube; IUT (more than 8) on the right and above the uterus: the 8-blastomere rule of Figure 3.4 and Addendum B', z[2] <= u[0] && t[0] >= z[0] && t[2] <= z[2] && ut[0] >= u[0] && ut[2] <= u[2] && t[1] > z[3] && ut[1] > u[3]],
      ['The blastomere count is the highlight; the boxes under it are ink', marks(s) >= 1 && (s.svg().match(/stroke="#EEA31F"/g) ?? []).length === 1],
      noDash(s), ...layout(s), clean(s),
    ];
  }
  return [
    ['Three other methods, each with the book\'s note word for word: GIFT, ICSI, AI / IUI', hasAll(s, ['GIFT', 'ICSI', 'AI / IUI']) && OTHERS.every((o) => hasAll(s, o.lines))],
    ['The notes are the book\'s: GIFT (donor ovum and sperm into the fallopian tube), ICSI (a single sperm injected into the ovum), AI / IUI (semen into the vagina or uterus)', /fallopian tube/.test(OTHERS[0].lines.join(' ')) && /single sperm is injected directly into the ovum/.test(OTHERS[1].lines.join(' ')) && /vagina or uterus/.test(OTHERS[2].lines.join(' '))],
    ['Nothing is highlighted: no one of the three methods is what the figure is about', marks(s) === 0],
    noDash(s), ...layout(s), clean(s),
  ];
}
const fig33: Diagram = {
  id: 'b12-03-fig-3.3', topic: 1, name: 'ART decision map',
  cases: [{ chip: 'A  Embryo transfer', part: 'A', cap: CAP33_A }, { chip: 'B  Other methods', part: 'B', cap: CAP33_B }],
  draw: draw33, check: check33,
};

/* ================= Figure 3.4 ================= */
const CAP34 = 'IVF and embryo transfer: in-vitro fertilisation, then ZIFT (up to 8 blastomeres) or IUT (more than 8 blastomeres).';
function draw34(): Sketch {
  const s = new Sketch(W, 470);
  card(s, '1', [14, 16, 262, 68], ['1  Ovum and sperm', 'collected']);
  card(s, '2', [14, 98, 262, 150], ['2  Fertilisation in', 'a culture dish'], { color: C.mari, w: 2 });
  card(s, '3', [14, 180, 262, 232], ['3  Zygote / early', 'embryo in culture'], { color: C.mari, w: 2 });
  arrow(s, [138, 68], [138, 98]);
  arrow(s, [138, 150], [138, 180]);
  // the bracket over steps 2 and 3
  path(s, [[276, 98], [286, 98], [286, 232], [276, 232]], { color: C.mari, w: 2.2 });
  ['In vitro', '(outside', 'the body)'].forEach((t, i) => lab(s, 294, 150 + i * 16, t, { size: 11.5, anchor: 'start', bold: true, color: C.amber }));
  // the split into 4a and 4b
  path(s, [[138, 232], [138, 262]], { color: C.slate, w: 1.6 });
  path(s, [[88, 262], [262, 262]], { color: C.slate, w: 1.6 });
  arrow(s, [88, 262], [88, 288], { color: C.slate, w: 1.6 });
  arrow(s, [262, 262], [262, 288], { color: C.slate, w: 1.6 });
  card(s, '4a', [14, 292, 166, 362], ['4a  ZIFT: up to 8', 'blastomeres into the', 'fallopian tube'], { bold: true, size: 11 });
  card(s, '4b', [186, 292, 346, 362], ['4b  IUT: more than 8', 'blastomeres into the', 'uterus'], { bold: true, size: 11 });
  // both join step 5
  path(s, [[90, 362], [90, 386], [180, 386]], { color: C.slate, w: 1.6 });
  path(s, [[266, 362], [266, 386], [180, 386]], { color: C.slate, w: 1.6 });
  arrow(s, [180, 386], [180, 408], { color: C.slate, w: 1.6 });
  card(s, '5', [40, 412, 320, 452], ['5  Development continues in the womb'], { bold: true, size: 11.5 });
  return s;
}
function check34(): Check[] {
  const s = draw34();
  const r = (n: string) => boxOf(s, n);
  return [
    ['Five steps in the book\'s order, with 4a and 4b side by side, each with its words', hasAll(s, ['1  Ovum and sperm', 'collected', '2  Fertilisation in', 'a culture dish', '3  Zygote / early', 'embryo in culture', '4a  ZIFT: up to 8', '4b  IUT: more than 8', '5  Development continues in the womb'])],
    ['ZIFT: up to 8 blastomeres into the fallopian tube; IUT: more than 8 blastomeres into the uterus (the rule of Figure 3.3 and Addendum B)', has(s, 'fallopian tube') && has(s, 'uterus') && s.labels.filter((l) => l.text === 'blastomeres into the').length === 2 && r('4a')[2] <= r('4b')[0]],
    ['The in-vitro bracket spans steps 2 and 3 only (from the top of 2 to the bottom of 3), not step 1 or the transfers', r('2')[1] >= 98 && r('3')[3] <= 232 && r('1')[3] < r('2')[1] && r('4a')[1] > r('3')[3] && has(s, 'In vitro') && has(s, '(outside') && has(s, 'the body)')],
    ['The in-vitro stage is the highlight (its bracket and boxes 2 and 3)', (s.svg().match(/stroke="#EEA31F"/g) ?? []).length === 3],
    ['Steps run downward, each below the one before: 1, 2, 3, then 4a and 4b, then 5', r('1')[3] < r('2')[1] && r('2')[3] < r('3')[1] && r('3')[3] < r('4a')[1] && r('4a')[3] < r('5')[1] && r('4b')[3] < r('5')[1]],
    noDash(s), ...layout(s), clean(s),
  ];
}
const fig34: Diagram = { id: 'b12-03-fig-3.4', topic: 1, name: 'IVF and embryo transfer', cases: [{ chip: 'IVF, ZIFT, IUT', cap: CAP34 }], draw: draw34, check: check34 };

/* ================= Figure 3.5 ================= */
const CAP35 = 'Misuse of amniocentesis for sex determination, and the legal and social response (PCPNDT Act, 1994).';
const CHAIN: string[][] = [['Amniocentesis', '(meant to detect', 'genetic disorders)'], ['Reveals', 'foetal sex'], ['Prenatal sex', 'determination'], ['Female', 'foeticide'], ['Skewed', 'sex ratio']];
const CH_X: [number, number] = [14, 190], CH_H = 58, CH_GAP = 28, CH_X_GAP = 76;
const chainTop = (i: number) => 14 + i * (CH_H + CH_GAP) + (i >= 2 ? CH_X_GAP - CH_GAP : 0);
function draw35(): Sketch {
  const s = new Sketch(W, chainTop(4) + CH_H + 16);
  const cxm = (CH_X[0] + CH_X[1]) / 2;
  CHAIN.forEach((lines, i) => {
    const y = chainTop(i), last = i === 4;
    card(s, lines.join(' '), [CH_X[0], y, CH_X[1], y + CH_H], lines, { size: 12, bold: last });
    if (i < 4) arrow(s, [cxm, y + CH_H], [cxm, chainTop(i + 1)], { color: C.ink, w: 1.9 });
  });
  const yg = (chainTop(1) + CH_H + chainTop(2)) / 2;
  cross(s, cxm, yg, 10, C.ink, 3);
  // the ban, to the right, with its arrow ending at the cross
  card(s, 'ban', [224, yg - 58, 346, yg + 58], ['Statutory ban:', 'PCPNDT Act, 1994', '+ sex education', 'and awareness'], { bold: true, size: 11, color: C.mari, w: 2.4, text: C.amber });
  arrow(s, [224, yg], [cxm + 14, yg], { color: C.mari, w: 2.2 });
  lab(s, 170, yg - 9, 'Prevents', { size: 12, bold: true, color: C.amber });
  return s;
}
function check35(): Check[] {
  const s = draw35();
  const r = (n: string) => boxOf(s, n);
  const names = CHAIN.map((l) => l.join(' '));
  return [
    ['The chain is the book\'s: amniocentesis (meant to detect genetic disorders), reveals foetal sex, prenatal sex determination, female foeticide, skewed sex ratio', CHAIN.flat().every((t) => has(s, t)) && CHAIN.length === 5],
    ['The ban is the book\'s: "Statutory ban: PCPNDT Act, 1994 + sex education and awareness", and its arrow is labelled "Prevents"', hasAll(s, ['Statutory ban:', 'PCPNDT Act, 1994', '+ sex education', 'and awareness', 'Prevents'])],
    ['The boxes run downward in the order of the chain, each below the one before', names.every((n, i) => i === 0 || r(n)[1] > r(names[i - 1])[3])],
    ['The cross is on the arrow between "Reveals foetal sex" and "Prenatal sex determination", and the ban\'s arrow ends at it', chainTop(2) - (chainTop(1) + CH_H) === CH_X_GAP && boxOf(s, 'ban')[1] < chainTop(2) && boxOf(s, 'ban')[3] > chainTop(1) + CH_H],
    ['The ban and its arrow are the highlight; the chain of harm is ink', marks(s) >= 2 && (s.svg().match(/stroke="#EEA31F"/g) ?? []).length === 2 && (s.svg().match(/fill="#EEA31F"/g) ?? []).length === 1],
    noDash(s), ...layout(s), clean(s),
  ];
}
const fig35: Diagram = { id: 'b12-03-fig-3.5', topic: 2, name: 'Misuse of amniocentesis and the PCPNDT response', cases: [{ chip: 'Misuse and ban', cap: CAP35 }], draw: draw35, check: check35 };

/* ================= Figure 3.6 ================= */
const CAP36 = 'MTP: medical safety and legal limits both favour early termination.';
const X0 = 14, X1 = 346, WEEKS = 28;
const Xw = (w: number) => X0 + (w * (X1 - X0)) / WEEKS;
const MARKS: [string, number][] = [['0', 0], ['12', 12], ['20', 20], ['24', 24], ['24+', WEEKS]];
function draw36(): Sketch {
  const s = new Sketch(W, 340);
  lab(s, X0, 24, 'Medical safety', { size: 13, anchor: 'start', bold: true });
  card(s, 'first', [Xw(0), 34, Xw(12), 88], ['First trimester:', 'relatively safe'], { bold: true, size: 11.5, color: C.mari, w: 2.2, text: C.amber });
  card(s, 'second', [Xw(12), 34, Xw(WEEKS), 88], ['Second trimester: riskier'], { bold: true, size: 11.5 });
  lab(s, X0, 118, 'Legal limit (MTP Act)', { size: 13, anchor: 'start', bold: true });
  card(s, 'one', [Xw(0), 128, Xw(20), 182], ['1 RMP: up to 20 weeks'], { bold: true, size: 11.5 });
  card(s, 'two', [Xw(20), 128, Xw(24), 182], ['2 RMPs'], { bold: true, size: 10 });
  card(s, 'board', [Xw(24), 128, Xw(WEEKS), 182], ['Medical', 'Board'], { bold: true, size: 10 });
  lab(s, Xw(24) + 2, 200, 'special categories', { size: 10, anchor: 'end', color: C.slate });
  lab(s, X1, 224, 'foetal abnormality', { size: 10, anchor: 'end', color: C.slate });
  path(s, [[Xw(WEEKS) - 24, 182], [Xw(WEEKS) - 24, 212]], { color: C.grey, w: 1.2 });
  // the week axis
  path(s, [[X0, 258], [X1, 258]], { w: 2.4 });
  MARKS.forEach(([t, w]) => {
    path(s, [[Xw(w), 252], [Xw(w), 264]], { w: 2.2 });
    lab(s, t === '0' ? Xw(w) + 2 : t === '24+' ? Xw(w) - 2 : Xw(w), 282, t, { size: 12, bold: true, anchor: t === '0' ? 'start' : t === '24+' ? 'end' : 'middle' });
  });
  lab(s, X0, 302, 'weeks', { size: 11, anchor: 'start', color: C.slate });
  pill(s, 'Both favour early termination', { size: 12.5 });
  return s;
}
function check36(): Check[] {
  const s = draw36();
  const r = (n: string) => boxOf(s, n);
  const near1 = (a: number, b: number) => Math.abs(a - b) < 0.6;
  return [
    ['Every word is the book\'s: Medical safety (first trimester: relatively safe, second trimester: riskier), Legal limit (MTP Act) (1 RMP: up to 20 weeks, 2 RMPs special categories, Medical Board foetal abnormality), weeks', hasAll(s, ['Medical safety', 'First trimester:', 'relatively safe', 'Second trimester: riskier', 'Legal limit (MTP Act)', '1 RMP: up to 20 weeks', '2 RMPs', 'special categories', 'Medical', 'Board', 'foetal abnormality', 'weeks'])],
    ['The five week marks are 0, 12, 20, 24 and 24+, and the bars are on one week scale: the first trimester ends at 12, the 1 RMP bar at 20, the 2 RMPs bar at 24', MARKS.map(([t]) => t).join() === '0,12,20,24,24+' && near1(r('first')[2], Xw(12)) && near1(r('one')[2], Xw(20)) && near1(r('two')[2], Xw(24)) && near1(r('two')[0], Xw(20)) && near1(r('board')[0], Xw(24)) && near1(r('board')[2], Xw(WEEKS))],
    ['The two bars start at 0 and end together at 24+ (both rows share the same axis)', near1(r('first')[0], r('one')[0]) && near1(r('second')[2], r('board')[2]) && near1(r('first')[2], r('second')[0])],
    ['The legal bar has three consecutive spans: 0 to 20 (one RMP), 20 to 24 (two RMPs), 24 and beyond (Medical Board)', near1(r('one')[2], r('two')[0]) && near1(r('two')[2], r('board')[0])],
    ['The first trimester (the early, safest span) is the highlight', (s.svg().match(/stroke="#EEA31F"/g) ?? []).length === 1],
    ['The result is the book\'s caption: both favour early termination', s.tags.some((t) => t.name === 'Both favour early termination')],
    noDash(s), ...layout(s), clean(s),
  ];
}
const fig36: Diagram = { id: 'b12-03-fig-3.6', topic: 3, name: 'MTP: safety and legal limits', cases: [{ chip: 'Safety and law', cap: CAP36 }], draw: draw36, check: check36 };

// the book's own captions, kept for the report and the checks above
void [CAP31, CAP33];

export const DIAGRAMS_BIOLOGY_12_03: Diagram[] = [fig31, fig32, fig33, fig34, fig35, fig36];
