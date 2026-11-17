import { C, LABEL_GAP, Rect, Sketch, mathW, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';
import { stixW } from '@/lib/diagrams/mathematics-11-03b';

/**
 * MATHEMATICS CLASS 11, CHAPTER 13 (Statistics): every drawing of the Master Reference book (October edition) on
 * pp. 1139–1187, redrawn. The numbered figures stand on their own "CHAPTER 13 · FIGURES" plates, the page after their
 * caption; the Additional Topics part prints its own "Figure 1" in the text.
 *
 *   Figure 13.1 (p. 1140; caption p. 1139), Ramesh's and Suresh's tomato prices, same mean, Topic 01, topic index 0.
 *   Figure 13.2 (p. 1144; caption p. 1143), distance-arrows from a = 6.5, Topic 01, index 0.
 *   Figure 13.3 (p. 1152; caption p. 1151), squares on the deviations from x̄ = 12, Topic 02, index 1.
 *   Figure 13.4 (p. 1170; caption p. 1169), Example S1's 25 sorted positions, Additional topic A, index 3.
 *   Figure 13.5 (p. 1176; caption p. 1175), sliding the origin by A = 2, Additional topic B, index 4.
 *   The Additional Topics part's "Figure 1" (p. 1183), printed limits and true class boundaries, m11-13-C-d1,
 *   Additional topic C, index 5.
 *
 * ONE HIGHLIGHT. The book's orange is the marigold: 13.1 Suresh's dots and his label; 13.2 the distance-arrows and
 * their lengths; 13.3 the large square of the outlier and its labels; 13.4 the median block x = 8, position 13, the
 * arrow and (N + 1)/2 = 13; 13.5 the two mean markers; C-d1 the gap arrows and "gap g = 1". The book's navy, teal and
 * green are ink (13.2's teal "chosen point" and diamond, 13.3's "small squares near the mean", C-d1's ±c arrows), its
 * light grey leaders and guides slate.
 *
 * NO FILLS. 13.3's teal and terracotta squares, 13.4's blue and orange blocks and C-d1's coloured blocks are outlines
 * (the highlighted one in marigold). 13.2's teal diamond (the chosen point a) is an ink outline, so it never reads as
 * one of the data dots.
 *
 * DOTS. Every observation is a filled dot (decision 10). 13.1 draws Ramesh's two 30s as one dot, as printed.
 *
 * DEPARTURES, for a phone. 13.1: the book prints "(Rs)" on the axis while the text writes ₹: the axis says ₹. 13.4: the
 * row names "position" and "c.f." stood at the left of their rows; "position" is now the title under the position
 * numbers (no room at the left of 25 positions), "c.f." stays at the left of its row; the note "first c.f. ≥ 13 is 16,
 * so M = 8" is two lines. 13.5: the line names x and d stood at the left; they stand over the right end of each line.
 * C-d1: the row names stood at the left; "printed (inclusive) limits" now stands over the top row (top right), "true
 * class boundaries" under the bottom row; its caption's em dash is a comma. Every fraction on a drawing is stacked by
 * hand. No em dash.
 */

const W = 340;
type P = [number, number];
const fmt = (n: number, d = 2) => String(+n.toFixed(d)).replace('-', '−');
const len = (a: P, b: P) => Math.hypot(b[0] - a[0], b[1] - a[1]);
const plain = (html: string) => html.replace(/<\/?(?:i|sub|sup|b|frac|num|den)>/g, '');
const widthOf = (html: string, size: number) => Math.max(mathW(html, size), plain(html).length * size * 0.5);
const I = (t: string) => `<i>${t}</i>`;
const close = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) < tol;
const XB = I('x̄'), DB = I('d̄');
const XI = `${I('x')}<sub>${I('i')}</sub>`, FI = `${I('f')}<sub>${I('i')}</sub>`, DI = `${I('d')}<sub>${I('i')}</sub>`;
const sum = (a: number[]) => a.reduce((p, q) => p + q, 0);

/* ---------- lines, labels and the layout checks (as in mathematics-11-12.ts) ---------- */
type Stroke = { color?: string; w?: number; dash?: boolean | string; name?: string; free?: boolean };
const LINES = new WeakMap<Sketch, { name: string; pts: P[] }[]>();
const keep = (s: Sketch, pts: P[], name = '') => { const l = LINES.get(s) ?? []; l.push({ name, pts }); LINES.set(s, l); };
const linesNamed = (s: Sketch, re: RegExp) => (LINES.get(s) ?? []).filter((l) => re.test(l.name));
const dashAttr = (d: Stroke['dash']) => (d === true ? ' stroke-dasharray="5 4"' : d ? ` stroke-dasharray="${d}"` : '');
/** A polyline; `free` leaves it out of the clearance check. */
function path(s: Sketch, pts: P[], o: Stroke = {}) {
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ');
  s.add(`<path d="${d}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}" stroke-linejoin="round" stroke-linecap="round"${dashAttr(o.dash)}/>`);
  if (!o.free) keep(s, pts, o.name);
}
/** An outlined rectangle, never filled. */
const box = (s: Sketch, x0: number, y0: number, x1: number, y1: number, o: Stroke = {}) => path(s, [[x0, y0], [x1, y0], [x1, y1], [x0, y1], [x0, y0]], o);
/** An arrow with a small filled head at b (and at a too when `both`); the head shrinks on a short arrow. */
function arr(s: Sketch, a: P, b: P, o: Stroke & { both?: boolean; head?: number } = {}) {
  const col = o.color ?? C.ink, L0 = o.head ?? 7, d = len(a, b), L = Math.min(L0, d / (o.both ? 2.6 : 1.6)), hw = L * 0.5;
  const ang = Math.atan2(b[1] - a[1], b[0] - a[0]), ux = Math.cos(ang), uy = Math.sin(ang);
  const headAt = (tip: P, sgn: number) => {
    const bx = tip[0] - sgn * L * ux, by = tip[1] - sgn * L * uy;
    s.add(`<path d="M${r1(tip[0])} ${r1(tip[1])} L${r1(bx + hw * uy)} ${r1(by - hw * ux)} L${r1(bx - hw * uy)} ${r1(by + hw * ux)} Z" fill="${col}"/>`);
  };
  const a2: P = o.both ? [a[0] + L * ux * 0.8, a[1] + L * uy * 0.8] : a, b2: P = [b[0] - L * ux * 0.8, b[1] - L * uy * 0.8];
  s.add(`<line x1="${r1(a2[0])}" y1="${r1(a2[1])}" x2="${r1(b2[0])}" y2="${r1(b2[1])}" stroke="${col}" stroke-width="${o.w ?? 1.4}" stroke-linecap="round"${dashAttr(o.dash)}/>`);
  headAt(b, 1);
  if (o.both) headAt(a, -1);
  if (!o.free) keep(s, [a, b], o.name ?? 'arrow');
}
const rectDist = (r: Rect, p: P) => Math.hypot(Math.max(r[0] - p[0], 0, p[0] - r[2]), Math.max(r[1] - p[1], 0, p[1] - r[3]));
const boxToLine = (r: Rect, pts: P[]) => {
  let gap = Infinity;
  for (let i = 0; i < pts.length - 1; i++) {
    const a = pts[i], b = pts[i + 1], n = Math.max(1, Math.ceil(len(a, b) * 2));
    for (let k = 0; k <= n; k++) gap = Math.min(gap, rectDist(r, [a[0] + ((b[0] - a[0]) * k) / n, a[1] + ((b[1] - a[1]) * k) / n]));
  }
  if (pts.length === 1) gap = rectDist(r, pts[0]);
  return gap;
};
function crowded(s: Sketch): string[] {
  const out: string[] = [];
  for (const { pts, name: ln } of LINES.get(s) ?? []) for (const l of s.labels) { const d = boxToLine(l.rect, pts); if (d < LABEL_GAP - 1e-9) out.push(`"${l.text}" ${fmt(d, 1)} px from the ${ln || 'line'}`); }
  return [...new Set(out)];
}
const clearCheck = (s: Sketch): Check => {
  const bad = crowded(s);
  return [`Every label stays at least ${LABEL_GAP} px clear of every line and dot${bad.length ? `: ${bad.join('; ')}` : ''}`, bad.length === 0];
};
const labelsApart = (s: Sketch): Check => {
  const L = s.labels;
  const bad = L.flatMap((a, i) => L.slice(i + 1).filter((b) => !(a.rect[2] + 2 <= b.rect[0] || b.rect[2] + 2 <= a.rect[0] || a.rect[3] + 2 <= b.rect[1] || b.rect[3] + 2 <= a.rect[1])).map((b) => `${a.text} / ${b.text}`));
  return [`No two labels on the drawing touch${bad.length ? `: ${bad.join(', ')}` : ''}`, bad.length === 0];
};
const inFrame = (s: Sketch): Check => {
  const out = s.labels.filter((l) => l.rect[0] < 0 || l.rect[2] > s.w || l.rect[1] < 0 || l.rect[3] > s.h).map((l) => l.text);
  return [`Every label lies inside the frame${out.length ? `: not ${out.join(', ')}` : ''}`, out.length === 0];
};
const linesInFrame = (s: Sketch): Check => {
  const out = (LINES.get(s) ?? []).filter((l) => l.pts.some((p) => p[0] < -0.5 || p[0] > s.w + 0.5 || p[1] < -0.5 || p[1] > s.h + 0.5)).map((l) => l.name);
  return [`Every line lies inside the frame${out.length ? `: not ${[...new Set(out)].join(', ')}` : ''}`, out.length === 0];
};
const layout = (s: Sketch): Check[] => [clearCheck(s), labelsApart(s), inFrame(s), linesInFrame(s)];
const hasLabel = (s: Sketch, t: string) => s.labels.some((l) => l.text === t);
const labelsCheck = (s: Sketch, ts: string[], what = 'The labels as printed'): Check => {
  const miss = ts.filter((t) => !hasLabel(s, t));
  return [`${what}: ${ts.join(' · ')}${miss.length ? `; missing ${miss.join(', ')}` : ''}`, miss.length === 0];
};
/** No em dash, no vulgar-fraction character and no one-line fraction, in anything the drawing shows. */
const noBadChars = (s: Sketch, d: Diagram): Check => {
  const unraised = (h: string) => plain(h.replace(/<sup>.*?<\/sup>/g, '').replace(/<frac>.*?<\/frac>/g, ''));
  const all = [...s.texts.map((t) => unraised(t.html)), d.name, ...d.cases.flatMap((c) => [c.chip, unraised(c.cap)])].join(' ');
  return ['No em dash, no vulgar-fraction character and no slash fraction in the labels, name, chips or captions', !/[—¼-¾⅐-⅞]/.test(all) && !/[\w)!]\s*\/\s*[\w(]/.test(all)];
};

/** A line of STIX on the drawing, from its baseline, its box at its true width (`tight`: the measured widths only, for a label in a narrow block). */
function lab(s: Sketch, x: number, y: number, html: string, o: { size?: number; anchor?: 'start' | 'middle' | 'end'; color?: string; tight?: boolean } = {}): Rect {
  const size = o.size ?? 13, anchor = o.anchor ?? 'middle', w = o.tight ? stixW(html, size) : widthOf(html, size);
  const x0 = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w : x;
  const rect: Rect = [x0, y - size * 0.72, x0 + w, y + size * (html.includes('<sub>') ? 0.36 : 0.22)];
  s.labels.push({ text: plain(html), rect });
  s.text(x, y, html, { size, anchor, color: o.color ?? C.text });
  return rect;
}

/* ---------- labels of several runs: text and stacked fractions (as in mathematics-11-12.ts) ---------- */
type Piece = { t: string } | { num: string; den: string };
const FRACS = new WeakMap<Sketch, { num: string; den: string; rule: [number, number, number]; numY: number; denY: number; numW: number; denW: number }[]>();
const FRAC_PAD = 2;
const fracW = (num: string, den: string, size: number) => Math.max(widthOf(num, size), widthOf(den, size)) + 2 * FRAC_PAD;
function frac(s: Sketch, x: number, y: number, num: string, den: string, size: number, color: string): Rect {
  const deep = /[()[\]{}|]/.test(plain(num)) ? size * 0.2 : 0;
  const w = fracW(num, den, size), numY = y - 3 - deep, denY = y + 3 + size * 0.68;
  s.text(x, numY, num, { size, color });
  s.text(x, denY, den, { size, color });
  s.add(`<line x1="${r1(x - w / 2)}" y1="${r1(y)}" x2="${r1(x + w / 2)}" y2="${r1(y)}" stroke="${color}" stroke-width="1.1"/>`);
  FRACS.set(s, [...(FRACS.get(s) ?? []), { num, den, rule: [x - w / 2, x + w / 2, y], numY, denY, numW: widthOf(num, size), denW: widthOf(den, size) }]);
  return [x - w / 2, numY - size * 0.72 - (/<sup>/.test(num) ? size * 0.2 : 0), x + w / 2, denY + size * 0.22];
}
const pieceW = (p: Piece, size: number) => ('t' in p ? stixW(p.t, size) : fracW(p.num, p.den, size) + 2);
const pieceText = (p: Piece) => ('t' in p ? plain(p.t) : `${plain(p.num)}/${plain(p.den)}`);
function textRun(s: Sketch, at: number, w: number, y: number, t: string, size: number, color: string, leads: boolean) {
  const lead = /^ */.exec(plain(t))![0].length, trail = / *$/.exec(plain(t))![0].length, sp = stixW(' ', size), body = t.replace(/^((?:<[^>]+>)*) +/, '$1').replace(/ +((?:<\/[^>]+>)*)$/, '$1');
  if (leads) s.text(at + w - trail * sp, y, body, { size, anchor: 'end', color });
  else s.text(at + lead * sp, y, body, { size, anchor: 'start', color });
}
/** One label made of runs, its fractions' rules on the maths axis. Registered as ONE label. */
function runs(s: Sketch, x: number, y: number, parts: Piece[], o: { size?: number; anchor?: 'start' | 'middle' | 'end'; color?: string } = {}): Rect {
  const size = o.size ?? 13, color = o.color ?? C.text, ws = parts.map((p) => pieceW(p, size)), total = ws.reduce((a, b) => a + b, 0);
  let at = o.anchor === 'middle' ? x - total / 2 : o.anchor === 'end' ? x - total : x;
  const bx: Rect = [at, y - size * 0.72, at + total, y + size * 0.22];
  const grow = (r: Rect) => { bx[1] = Math.min(bx[1], r[1]); bx[3] = Math.max(bx[3], r[3]); };
  parts.forEach((p, i) => {
    if ('t' in p) textRun(s, at, ws[i], y, p.t, size, color, i < parts.length - 1);
    else grow(frac(s, at + ws[i] / 2, y - size * 0.27, p.num, p.den, size, color));
    at += ws[i];
  });
  s.labels.push({ text: parts.map(pieceText).join(''), rect: bx });
  return bx;
}
/** Every stacked fraction really is stacked: numerator above the rule, denominator below, the rule as wide as both. */
const stackedCheck = (s: Sketch, want: string[]): Check => {
  const f = FRACS.get(s) ?? [], got = f.map((q) => `${plain(q.num)}/${plain(q.den)}`);
  const ok = f.every((q) => q.numY < q.rule[2] && q.denY - 6 > q.rule[2] && q.rule[1] - q.rule[0] >= Math.max(q.numW, q.denW)) && want.every((w) => got.includes(w)) && f.length === want.length;
  return [`Every fraction on the drawing is stacked by hand (${f.length}: ${[...new Set(got)].join(', ')}), numerator over the rule over denominator`, ok];
};

/* ---------- dots: every observation a filled dot ---------- */
const DOTS = new WeakMap<Sketch, { p: P; name: string }[]>();
const DOT_R = 3.6;
function pt(s: Sketch, p: P, name: string, col: string = C.ink, r = DOT_R) {
  s.dot(p[0], p[1], r, col);
  keep(s, Array.from({ length: 25 }, (_, i): P => [p[0] + (r + 1) * Math.cos((2 * Math.PI * i) / 24), p[1] + (r + 1) * Math.sin((2 * Math.PI * i) / 24)]), `dot:${name}`);
  DOTS.set(s, [...(DOTS.get(s) ?? []), { p, name }]);
}
const dotsOf = (s: Sketch, re: RegExp = /./) => (DOTS.get(s) ?? []).filter((d) => re.test(d.name));
/** A vertical line broken wherever it would run through a label (13.1's mean line crosses the two "30"s). */
function vline(s: Sketch, x: number, y0: number, y1: number, o: Stroke) {
  const cuts = s.labels.filter((l) => l.rect[0] - LABEL_GAP < x && l.rect[2] + LABEL_GAP > x).map((l): [number, number] => [l.rect[1] - LABEL_GAP - 0.5, l.rect[3] + LABEL_GAP + 0.5]).sort((a, b) => a[0] - b[0]);
  let at = y0;
  for (const [a, b] of cuts) {
    if (b < at || a > y1) continue;
    if (a > at) path(s, [[x, at], [x, a]], o);
    at = Math.max(at, b);
  }
  if (at < y1) path(s, [[x, at], [x, y1]], o);
}

/* ===================================================================== */
/* Figure 13.1 · same mean, different spread (Topic 01, p. 1140)        */
/* ===================================================================== */
const CAP131 = 'Same mean, different spread: Ramesh’s prices huddle near 29.6, Suresh’s are scattered.';
const R131 = [28, 30, 29, 31, 30], S131 = [14, 46, 12, 48, 28];
const X131 = (v: number) => 24 + ((v - 10) * 292) / 40;
const Y131 = [66, 140];
const fig131: Diagram = {
  id: 'm11-13-fig-13.1',
  topic: 0,
  name: 'Same mean, different spread',
  cases: [{ chip: 'Two vendors', cap: CAP131 }],
  draw() {
    const s = new Sketch(W, 200);
    Y131.forEach((y, k) => {
      path(s, [[X131(10), y], [X131(50), y]], { w: 1.6, name: `number line ${k}` });
      [10, 20, 30, 40, 50].forEach((v) => {
        path(s, [[X131(v), y - 4.5], [X131(v), y + 4.5]], { w: 1.3, name: 'tick' });
        lab(s, X131(v), y + 20, String(v), { size: 12.5, color: C.slate });
      });
    });
    lab(s, 20, 44, 'Ramesh: low dispersion', { anchor: 'start', size: 12.5 });
    lab(s, 20, 118, 'Suresh: high dispersion', { anchor: 'start', size: 12.5, color: C.amber });
    const m = sum(R131) / R131.length;
    lab(s, X131(m) + 6, 22, `common mean ${XB} = ${fmt(m)}`, { anchor: 'start', size: 13 });
    lab(s, W / 2, 190, 'price of 1 kg of tomatoes (₹)', { size: 12.5, color: C.slate });
    vline(s, X131(m), 12, 170, { w: 1.4, dash: '5 4', name: 'mean' });
    [...new Set(R131)].forEach((v) => pt(s, [X131(v), Y131[0]], `R${v}`));
    S131.forEach((v) => pt(s, [X131(v), Y131[1]], `S${v}`, C.mari));
    return s;
  },
  check() {
    const s = fig131.draw(fig131.cases[0]), out: Check[] = [];
    const mR = sum(R131) / 5, mS = sum(S131) / 5, back = (x: number) => 10 + ((x - 24) * 40) / 292;
    out.push([`Ramesh: (${R131.join(' + ')})/5 = ${fmt(mR)}; Suresh: (${S131.join(' + ')})/5 = ${fmt(mS)}: the same mean 29.6`, close(mR, 29.6) && close(mS, 29.6)]);
    const mean = linesNamed(s, /^mean$/).flatMap((l) => l.pts.map((p) => back(p[0])));
    out.push(['The dashed mean line stands at 29.6 across both lines', mean.length > 0 && mean.every((v) => close(v, 29.6, 1e-9))]);
    const r = dotsOf(s, /^R/).map((d) => back(d.p[0])).sort((a, b) => a - b), sd = dotsOf(s, /^S/).map((d) => back(d.p[0])).sort((a, b) => a - b);
    out.push(['Ramesh’s dots at 28, 29, 30, 31 (his two 30s one dot, as printed); Suresh’s at 12, 14, 28, 46, 48', r.length === 4 && [28, 29, 30, 31].every((v, i) => close(r[i], v, 1e-9)) && sd.length === 5 && [12, 14, 28, 46, 48].every((v, i) => close(sd[i], v, 1e-9))]);
    out.push([`Low against high dispersion: Ramesh’s range ${Math.max(...R131) - Math.min(...R131)}, Suresh’s ${Math.max(...S131) - Math.min(...S131)}`, Math.max(...R131) - Math.min(...R131) < Math.max(...S131) - Math.min(...S131)]);
    out.push(labelsCheck(s, ['Ramesh: low dispersion', 'Suresh: high dispersion', 'common mean x̄ = 29.6', 'price of 1 kg of tomatoes (₹)', '10', '20', '30', '40', '50']));
    out.push(noBadChars(s, fig131));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 13.2 · distance-arrows from a chosen point (Topic 01, p. 1144) */
/* ===================================================================== */
const CAP132 = 'Mean deviation is the average length of these distance-arrows from point <i>a</i>.';
const D132 = [2, 4, 5, 8, 11], A132 = 6.5, AX132 = 150;
const X132 = (v: number) => 16 + ((v - 0.4) * 308) / 12;
const back132 = (x: number) => 0.4 + ((x - 16) * 12) / 308;
const ROW132: Record<number, number> = { 1: 74, 2: 100, 3: 126 };
/** Each dot's arrow: its row (1 the highest, as printed) and where its length is written. */
const ARR132 = [{ v: 5, row: 1, lx: 5.75 }, { v: 4, row: 2, lx: 5.75 }, { v: 11, row: 2, lx: 8.75 }, { v: 2, row: 3, lx: 3.05 }, { v: 8, row: 3, lx: 7.25 }];
const fig132: Diagram = {
  id: 'm11-13-fig-13.2',
  topic: 0,
  name: 'Distance-arrows from a chosen point',
  cases: [{ chip: 'a = 6.5', cap: CAP132 }],
  draw() {
    const s = new Sketch(W, 210), xa = X132(A132);
    path(s, [[X132(0.4), AX132], [X132(12.4), AX132]], { w: 1.6, name: 'number line' });
    for (let v = 1; v <= 12; v++) {
      path(s, [[X132(v), AX132 - 4.5], [X132(v), AX132 + 4.5]], { w: 1.3, name: 'tick' });
      lab(s, X132(v), AX132 + 20, String(v), { size: 12.5, color: C.slate });
    }
    lab(s, xa, 44, `chosen point ${I('a')} = 6.5`, { size: 13.5 });
    lab(s, W / 2, 198, `arrow length = |${XI} − ${I('a')}| (distance of each dot from ${I('a')})`, { size: 11.5 });
    ARR132.forEach(({ v, row, lx }) => {
      const y = ROW132[row];
      path(s, [[X132(v), AX132 - 5], [X132(v), y - 4]], { color: C.slate, w: 0.9, name: `leader ${v}` });
      const tip = v < A132 ? xa - 2 : xa + 2;
      arr(s, [X132(v), y], [tip, y], { color: C.mari, w: 1.5, head: 6, both: true, name: `dist ${v}` });
      lab(s, X132(lx), y - 7, fmt(Math.abs(v - A132), 1), { size: 12.5, color: C.amber });
    });
    path(s, [[xa, AX132 - 8], [xa, 56]], { w: 1.4, dash: '5 4', name: 'a line' });
    D132.forEach((v) => pt(s, [X132(v), AX132], `x${v}`));
    const r = 5.5;
    s.point(xa, AX132, r, `<path d="M${r1(xa)} ${AX132 - r} L${r1(xa + r)} ${AX132} L${r1(xa)} ${AX132 + r} L${r1(xa - r)} ${AX132} Z" fill="#fff" stroke="${C.ink}" stroke-width="1.6" stroke-linejoin="round"/>`);
    keep(s, [[xa, AX132 - r - 1], [xa + r + 1, AX132], [xa, AX132 + r + 1], [xa - r - 1, AX132], [xa, AX132 - r - 1]], 'diamond a');
    return s;
  },
  check() {
    const s = fig132.draw(fig132.cases[0]), out: Check[] = [];
    const ds = dotsOf(s).map((d) => back132(d.p[0])).sort((a, b) => a - b);
    out.push(['The dots stand at 2, 4, 5, 8, 11 and the diamond at a = 6.5', ds.length === 5 && D132.every((v, i) => close(ds[i], v, 1e-9)) && close(back132(linesNamed(s, /^a line$/)[0].pts[0][0]), A132, 1e-9)]);
    const lens = ARR132.map(({ v }) => { const p = linesNamed(s, new RegExp(`^dist ${v}$`))[0].pts; return Math.abs(back132(p[1][0]) - back132(p[0][0])); });
    out.push([`Each arrow runs from its dot to a, as long as |xᵢ − a|: ${ARR132.map(({ v }) => `|${v} − 6.5| = ${fmt(Math.abs(v - A132), 1)}`).join(', ')} (each drawn within 0.1)`, ARR132.every(({ v }, i) => Math.abs(lens[i] - Math.abs(v - A132)) < 0.1)]);
    out.push([`Their average, the mean deviation about a: ${fmt(sum(D132.map((v) => Math.abs(v - A132))) / 5)}`, close(sum(D132.map((v) => Math.abs(v - A132))) / 5, 2.9)]);
    out.push(labelsCheck(s, ['chosen point a = 6.5', '1.5', '2.5', '4.5', 'arrow length = |xi − a| (distance of each dot from a)', '1', '12']));
    out.push(noBadChars(s, fig132));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 13.3 · squares on the deviations (Topic 02, p. 1152)          */
/* ===================================================================== */
const CAP133 = 'Variance is the average area of these squares; a distant point gives a very large square.';
const D133 = [7, 9, 10, 11, 23], AX133 = 236, U133 = 300 / 18.5;
const X133 = (v: number) => 20 + (v - 5.5) * U133;
const fig133: Diagram = {
  id: 'm11-13-fig-13.3',
  topic: 1,
  name: 'Squares on the deviations',
  cases: [{ chip: 'Mean 12', cap: CAP133 }],
  draw() {
    const s = new Sketch(W, 266), m = sum(D133) / D133.length, xm = X133(m);
    path(s, [[18, AX133], [322, AX133]], { w: 1.6, name: 'number line' });
    D133.filter((v) => v < m).forEach((v) => box(s, X133(v), AX133 - (m - v) * U133, xm, AX133, { w: 1.3, name: `square ${v}` }));
    D133.filter((v) => v > m).forEach((v) => box(s, xm, AX133 - (v - m) * U133, X133(v), AX133, { color: C.mari, w: 2, name: `square ${v}` }));
    D133.forEach((v) => lab(s, X133(v), AX133 + 20, String(v), { size: 12.5, color: C.slate }));
    lab(s, xm, 30, `mean ${XB} = ${fmt(m)}`, { size: 14 });
    lab(s, 78, 128, 'small squares', { size: 12.5 });
    lab(s, 78, 144, 'near the mean', { size: 12.5 });
    const cx = (xm + X133(23)) / 2;
    lab(s, cx, 118, `side = |${XI} − ${XB}| = 11`, { size: 13, color: C.amber });
    lab(s, cx, 139, 'area = 121', { size: 13, color: C.amber });
    path(s, [[xm, 40], [xm, AX133 + 14]], { w: 1.4, dash: '5 4', name: 'mean' });
    D133.forEach((v) => pt(s, [X133(v), AX133], `x${v}`));
    return s;
  },
  check() {
    const s = fig133.draw(fig133.cases[0]), out: Check[] = [], m = sum(D133) / 5;
    out.push([`The mean is (${D133.join(' + ')})/5 = ${fmt(m)}`, close(m, 12)]);
    const sides = D133.map((v) => { const p = linesNamed(s, new RegExp(`^square ${v}$`))[0].pts; return [Math.abs(p[1][0] - p[0][0]) / U133, Math.abs(p[2][1] - p[1][1]) / U133]; });
    out.push([`Each square stands on the line from its dot to the mean, its side |xᵢ − 12|: ${D133.map((v) => Math.abs(v - m)).join(', ')} (true squares: width = height)`, D133.every((v, i) => close(sides[i][0], Math.abs(v - m), 1e-9) && close(sides[i][1], Math.abs(v - m), 1e-9))]);
    const areas = D133.map((v) => (v - m) ** 2);
    out.push([`The outlier 23 gives side 11 and area 121; the areas ${areas.join(', ')} average to the variance ${fmt(sum(areas) / 5)}`, areas[4] === 121 && close(sum(areas) / 5, 32)]);
    out.push(labelsCheck(s, ['mean x̄ = 12', 'small squares', 'near the mean', 'side = |xi − x̄| = 11', 'area = 121', '7', '9', '10', '11', '23']));
    out.push(noBadChars(s, fig133));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 13.4 · 25 sorted positions, blocked by frequency (A, p. 1170) */
/* ===================================================================== */
const CAP134 = 'Example S1’s 25 sorted positions, blocked by frequency: position 13 gives the median 8 days.';
const X134 = [4, 6, 8, 10, 12], F134 = [3, 5, 8, 4, 5], L134 = 16, CELL = 308 / 25, TOP134 = 90, BOT134 = 140;
const CF134 = F134.map((_, i) => sum(F134.slice(0, i + 1)));
const posX = (p: number) => L134 + (p - 0.5) * CELL;
const blocks134 = (s: Sketch) => X134.map((x) => { const p = linesNamed(s, new RegExp(`^block ${x}$`))[0].pts; return { b: p[1][0] }; });
const fig134: Diagram = {
  id: 'm11-13-fig-13.4',
  topic: 3,
  name: 'The median from the c.f. column',
  cases: [{ chip: '25 positions', cap: CAP134 }],
  draw() {
    const s = new Sketch(W, 210), N = sum(F134), mid = (N + 1) / 2, k = CF134.findIndex((c) => c >= mid);
    const blocks = X134.map((x, i) => ({ x, f: F134[i], a: L134 + (i ? CF134[i - 1] : 0) * CELL, b: L134 + CF134[i] * CELL, hi: i === k }));
    blocks.filter((q) => !q.hi).forEach((q) => box(s, q.a, TOP134, q.b, BOT134, { w: 1.4, name: `block ${q.x}` }));
    blocks.filter((q) => q.hi).forEach((q) => box(s, q.a, TOP134, q.b, BOT134, { color: C.mari, w: 2.2, name: `block ${q.x}` }));
    blocks.forEach((q) => {
      lab(s, (q.a + q.b) / 2, 111, `${XI} = ${q.x}`, { size: 11, tight: true });
      lab(s, (q.a + q.b) / 2, 131, `${FI} = ${q.f}`, { size: 11, tight: true, color: C.slate });
    });
    for (let p = 1; p <= N; p++) {
      const on = p === mid;
      path(s, [[posX(p), BOT134], [posX(p), BOT134 + 5]], { color: on ? C.mari : C.slate, w: on ? 1.6 : 1, name: 'tick' });
      lab(s, posX(p), BOT134 + 16, String(p), { size: 9.5, color: on ? C.amber : C.slate });
    }
    lab(s, W / 2, 172, 'position', { size: 11.5, color: C.slate });
    lab(s, L134, 194, 'c.f.', { anchor: 'start', size: 11.5, color: C.slate });
    CF134.forEach((c) => lab(s, L134 + c * CELL, 194, String(c), { size: 12 }));
    const xm = posX(mid);
    runs(s, xm, 26, [{ num: `${I('N')} + 1`, den: '2' }, { t: ` = ${mid}` }], { size: 13, anchor: 'middle', color: C.amber });
    arr(s, [xm, 44], [xm, TOP134 - 4], { color: C.mari, w: 1.8, head: 7, name: 'median arrow' });
    lab(s, xm + 10, 60, `first c.f. ≥ ${mid} is ${CF134[k]},`, { anchor: 'start', size: 12.5 });
    lab(s, xm + 10, 77, `so ${I('M')} = ${X134[k]}`, { anchor: 'start', size: 12.5 });
    return s;
  },
  check() {
    const s = fig134.draw(fig134.cases[0]), out: Check[] = [], N = sum(F134), mid = (N + 1) / 2, k = CF134.findIndex((c) => c >= mid);
    out.push([`N = ${F134.join(' + ')} = ${N}, odd, so the median is the (N + 1)/2 = ${mid}th observation`, N === 25 && mid === 13]);
    out.push([`c.f. ${CF134.join(', ')}; the first c.f. ≥ 13 is ${CF134[k]}, in the block xᵢ = ${X134[k]}: M = 8`, CF134.join() === '3,8,16,20,25' && X134[k] === 8 && (k ? CF134[k - 1] : 0) < mid]);
    const widths = X134.map((x) => { const p = linesNamed(s, new RegExp(`^block ${x}$`))[0].pts; return (p[1][0] - p[0][0]) / CELL; });
    out.push([`Each block is fᵢ positions wide (${widths.map((w) => fmt(w)).join(', ')}), side by side, 25 in all`, X134.every((_, i) => close(widths[i], F134[i], 1e-9))]);
    const a = linesNamed(s, /^median arrow$/)[0].pts, hb = linesNamed(s, /^block 8$/)[0].pts;
    out.push(['The arrow points at position 13, inside the block xᵢ = 8', close((a[1][0] - L134) / CELL + 0.5, 13, 1e-9) && a[1][0] > hb[0][0] && a[1][0] < hb[1][0]]);
    const cfUnder = blocks134(s).map(({ b }, i) => s.labels.some((l) => l.text === String(CF134[i]) && l.rect[1] > BOT134 + 30 && close((l.rect[0] + l.rect[2]) / 2, b, 0.5)));
    out.push([`Each c.f. label (${CF134.join(', ')}) sits under the right end of its block`, cfUnder.every(Boolean)]);
    out.push(labelsCheck(s, ['xi = 4', 'fi = 3', 'xi = 8', 'fi = 8', 'xi = 12', 'fi = 5', 'position', 'c.f.', '3', '8', '16', '20', '25', '13', 'N + 1/2 = 13', 'first c.f. ≥ 13 is 16,', 'so M = 8']));
    out.push(stackedCheck(s, ['N + 1/2']));
    out.push(noBadChars(s, fig134));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 13.5 · shifting the origin by A = 2 (B, p. 1176)              */
/* ===================================================================== */
const CAP135 = 'Shifting the origin by <i>A</i> = 2 moves the mean by 2 but leaves every gap unchanged.';
const X135V = [1, 2, 3, 5, 9], A135 = 2, Y135 = [70, 170];
const X135 = (v: number) => 18 + (v + 1.6) * (300 / 12.6);
const back135 = (x: number) => (x - 18) / (300 / 12.6) - 1.6;
const fig135: Diagram = {
  id: 'm11-13-fig-13.5',
  topic: 4,
  name: 'Shifting the origin',
  cases: [{ chip: 'A = 2', cap: CAP135 }],
  draw() {
    const s = new Sketch(W, 212);
    const rows = [{ vs: X135V, y: Y135[0], key: 'x', bar: XB, name: XI }, { vs: X135V.map((v) => v - A135), y: Y135[1], key: 'd', bar: DB, name: `${DI} = ${XI} − ${A135}` }];
    rows.forEach(({ vs, y, key, bar, name }) => {
      const m = sum(vs) / vs.length;
      arr(s, [X135(-1.6), y], [X135(10.9), y], { w: 1.6, head: 8, name: `line ${key}` });
      for (let v = -1; v <= 10; v++) if (!vs.includes(v) && v !== m) path(s, [[X135(v), y - 3.5], [X135(v), y + 3.5]], { color: C.slate, w: 1, name: 'tick' });
      vs.slice(1).forEach((b, i) => {
        const a = vs[i];
        arr(s, [X135(a) + 2, y - 20], [X135(b) - 2, y - 20], { color: C.slate, w: 1.1, head: 5, both: true, name: `gap ${key}` });
        lab(s, X135((a + b) / 2), y - 27, String(b - a), { size: 11.5, color: C.slate });
      });
      vs.forEach((v) => lab(s, X135(v), y + 18, fmt(v), { size: 12.5 }));
      path(s, [[X135(m), y - 12], [X135(m), y + 14]], { color: C.mari, w: 2.2, name: `mean ${key}` });
      lab(s, X135(m), y + 33, `${bar} = ${fmt(m)}`, { size: 13.5, color: C.amber });
      lab(s, 318, y - 13, name, { anchor: 'end', size: 14 });
      vs.forEach((v) => pt(s, [X135(v), y], `${key}${v}`));
    });
    X135V.forEach((v) => arr(s, [X135(v) - 1, Y135[0] + 42], [X135(v - A135) + 4, Y135[0] + 60], { color: C.slate, w: 1.1, head: 6, dash: '4 3', name: 'slide' }));
    lab(s, 276, 118, 'slide left', { anchor: 'start', size: 11.5, color: C.slate });
    lab(s, 276, 134, `by ${I('A')} = ${A135}`, { anchor: 'start', size: 11.5, color: C.slate });
    return s;
  },
  check() {
    const s = fig135.draw(fig135.cases[0]), out: Check[] = [];
    const xs = dotsOf(s, /^x/).map((d) => back135(d.p[0])), ds = dotsOf(s, /^d/).map((d) => back135(d.p[0]));
    const gaps = (v: number[]) => v.slice(1).map((b, i) => +(b - v[i]).toFixed(9));
    out.push([`xᵢ at 1, 2, 3, 5, 9; dᵢ = xᵢ − 2 at −1, 0, 1, 3, 7: every dot slid 2 to the left`, xs.length === 5 && ds.length === 5 && X135V.every((v, i) => close(xs[i], v, 1e-9) && close(ds[i], v - A135, 1e-9))]);
    out.push([`The gaps are ${gaps(xs).join(', ')} on both lines: unchanged`, gaps(xs).join() === '1,1,2,4' && gaps(ds).join() === gaps(xs).join()]);
    const mx = back135(linesNamed(s, /^mean x$/)[0].pts[0][0]), md = back135(linesNamed(s, /^mean d$/)[0].pts[0][0]);
    out.push([`x̄ = 20/5 = ${fmt(mx)}, d̄ = 10/5 = ${fmt(md)} = x̄ − A: the mean moves by 2`, close(mx, 4, 1e-9) && close(md, 2, 1e-9) && close(sum(X135V) / 5, 4)]);
    const gapOk = ['x', 'd'].every((key) => linesNamed(s, new RegExp(`^gap ${key}$`)).every(({ pts: [a, b] }) => {
      const units = back135(b[0] + 2) - back135(a[0] - 2), mx = (a[0] + b[0]) / 2;
      return s.labels.some((l) => l.text === fmt(units) && close((l.rect[0] + l.rect[2]) / 2, mx, 0.5) && l.rect[3] < a[1]);
    }));
    out.push(['Each gap label states the length of the arrow under it (1, 1, 2, 4 on both lines)', gapOk && linesNamed(s, /^gap [xd]$/).length === 8]);
    out.push(labelsCheck(s, ['xi', 'di = xi − 2', 'x̄ = 4', 'd̄ = 2', 'slide left', 'by A = 2', '1', '2', '4', '−1', '0', '3', '5', '7', '9']));
    out.push(noBadChars(s, fig135));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Additional topic C's "Figure 1" · printed limits and true boundaries (p. 1183) */
/* ===================================================================== */
const CAPCD1 = 'The blocks stretch outward; their centres stay put, which is why the mean and variance do not care, and only boundary-based quantities do.';
const LIM = [[16, 20], [21, 25], [26, 30]], XC = (v: number) => 20 + (v - 15.5) * 20;
const figCd1: Diagram = {
  id: 'm11-13-C-d1',
  topic: 5,
  name: 'Printed limits and true class boundaries',
  cases: [{ chip: 'Three classes', cap: CAPCD1 }],
  draw() {
    const s = new Sketch(W, 232), g = LIM[1][0] - LIM[0][1], c = g / 2;
    lab(s, XC(20.5), 20, `gap ${I('g')} = ${g}`, { size: 12.5, color: C.amber });
    lab(s, 326, 20, 'printed (inclusive) limits', { anchor: 'end', size: 11.5, color: C.slate });
    LIM.forEach(([a, b]) => {
      const m = (a + b) / 2;
      lab(s, XC(m), 40, String(m), { size: 13 });
      box(s, XC(a), 48, XC(b), 88, { w: 1.5, name: `printed ${a}` });
      box(s, XC(a - c), 128, XC(b + c), 168, { w: 1.5, name: `true ${a}` });
      path(s, [[XC(m), 92], [XC(m), 124]], { w: 1, dash: '3 3', name: 'centre' });
      lab(s, XC(m), 186, String(m), { size: 13 });
      lab(s, XC(a), 103, String(a), { size: 11, color: C.slate });
      lab(s, XC(b), 103, String(b), { size: 11, color: C.slate });
    });
    [15.5, 20.5, 25.5, 30.5].forEach((v) => lab(s, XC(v), 119, fmt(v, 1), { size: 11, color: C.slate }));
    LIM.slice(1).forEach(([a], i) => arr(s, [XC(LIM[i][1]) + 1.5, 79], [XC(a) - 1.5, 79], { color: C.mari, w: 1.4, head: 5, both: true, name: 'gap' }));
    path(s, [[XC(20.5), 27.5], [XC(20.5), 73]], { color: C.mari, w: 1, name: 'gap leader' });
    [15.5, 16, 30, 30.5].forEach((v) => path(s, [[XC(v), 170], [XC(v), 205]], { color: C.slate, w: 0.9, dash: '2 3', name: 'guide' }));
    arr(s, [XC(16), 199], [XC(15.5), 199], { w: 1.6, head: 6, name: '−c' });
    arr(s, [XC(30), 199], [XC(30.5), 199], { w: 1.6, head: 6, name: '+c' });
    lab(s, 10, 222, `−${I('c')} = −${c}`, { anchor: 'start', size: 12 });
    lab(s, 330, 222, `+${I('c')} = +${c}`, { anchor: 'end', size: 12 });
    lab(s, W / 2, 222, 'true class boundaries', { size: 11.5, color: C.slate });
    LIM.forEach(([a, b]) => { pt(s, [XC((a + b) / 2), 68], `printed ${a}`); pt(s, [XC((a + b) / 2), 148], `true ${a}`); });
    return s;
  },
  check() {
    const s = figCd1.draw(figCd1.cases[0]), out: Check[] = [], back = (x: number) => 15.5 + (x - 20) / 20;
    const g = LIM[1][0] - LIM[0][1], c = g / 2;
    out.push([`The gap between printed classes is 21 − 20 = 26 − 25 = ${g}, so c = g/2 = ${c}`, g === 1 && LIM[2][0] - LIM[1][1] === g && c === 0.5]);
    const tr = LIM.map(([a]) => linesNamed(s, new RegExp(`^true ${a}$`))[0].pts.map((p) => back(p[0])));
    out.push(['The true boundaries 15.5–20.5, 20.5–25.5, 25.5–30.5 touch, each class 5 wide', LIM.every(([a, b], i) => close(tr[i][0], a - c, 1e-9) && close(tr[i][1], b + c, 1e-9) && close(tr[i][1] - tr[i][0], 5, 1e-9)) && close(tr[0][1], tr[1][0], 1e-9) && close(tr[1][1], tr[2][0], 1e-9)]);
    const pd = dotsOf(s, /^printed/).map((d) => back(d.p[0])), td = dotsOf(s, /^true/).map((d) => back(d.p[0]));
    out.push(['The centres 18, 23, 28 stay put: each class’s dot stands at the same x in both rows', [18, 23, 28].every((m, i) => close(pd[i], m, 1e-9) && close(td[i], m, 1e-9))]);
    const lc = linesNamed(s, /^−c$/)[0].pts.map((p) => back(p[0])), rc = linesNamed(s, /^\+c$/)[0].pts.map((p) => back(p[0]));
    out.push(['The arrows −c and +c run 0.5 outward, from 16 to 15.5 and from 30 to 30.5', close(lc[0], 16, 1e-9) && close(lc[1], 15.5, 1e-9) && close(rc[0], 30, 1e-9) && close(rc[1], 30.5, 1e-9)]);
    out.push(labelsCheck(s, ['gap g = 1', 'printed (inclusive) limits', 'true class boundaries', '18', '23', '28', '16', '20', '21', '25', '26', '30', '15.5', '20.5', '25.5', '30.5', '−c = −0.5', '+c = +0.5']));
    out.push(noBadChars(s, figCd1));
    out.push(...layout(s));
    return out;
  },
};

/** Mathematics 11 Chapter 13, Statistics: the book's figures. */
export const DIAGRAMS_MATHEMATICS_11_13: Diagram[] = [fig131, fig132, fig133, fig134, fig135, figCd1];
