import { C, LABEL_GAP, Rect, Sketch, mathW, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';
import { stixW } from '@/lib/diagrams/mathematics-11-03b';

/**
 * MATHEMATICS CLASS 11, CHAPTER 6 (Permutations and Combinations): every drawing of the Master Reference book
 * (October edition) on pp. 491–579, redrawn. The numbered figures stand on their own "CHAPTER 6 · FIGURES" plates,
 * the page after their caption; the Additional Topics part prints its own "Figure 1–4" in the text.
 *
 *   Figure 6.1 (p. 493; caption p. 492), the thali tree, Topic 01, topic index 0.
 *   Figure 6.2 (p. 496; caption p. 495), Box 1 and Box 2, every pairing, Topic 01, index 0.
 *   Figure 6.3 (p. 505; caption p. 504), r positions filled from n objects, Topic 02, index 1.
 *   Figure 6.4 (p. 507; caption p. 506), together (a block) and not together (the gaps), Topic 02, index 1.
 *   Figure 6.5 (p. 510; caption p. 509), five boys round a table and the five gaps, Topic 02, index 1.
 *   Figure 6.6 (p. 516; caption p. 515), the three selection reflexes, Topic 03, index 2.
 *   Figure 6.7 (p. 525; caption p. 524), stars and bars, Topic 04, index 3.
 *   Figure 6.8 (p. 525; caption p. 524), divide and distribute, Topic 04, index 3.
 *   Figure 6.9 (p. 533; caption p. 532), 10 points, 4 of them collinear, Topic 05, index 4.
 *   Figure 6.10 (p. 541; caption p. 540), the three-set inclusion–exclusion ledger, Topic 06, index 5.
 *   Figure 6.11 (p. 553; caption p. 552), an onto map from 6 objects to 4 boxes, Topic 06, index 5.
 *   Additional A's "Figure 1" (p. 560), the dictionary tree for AAGIN, m11-06-A-d1, index 6.
 *   Additional B's "Figure 2" (p. 565), the 4 × 3 grid path, m11-06-B-d1, index 7.
 *   Additional C's "Figure 3" (p. 570), the divisor ladder for 360, m11-06-C-d1, index 8.
 *   Additional D's "Figure 4" (p. 575), five letters in their envelopes, m11-06-D-d1, index 9.
 *
 * ONE HIGHLIGHT. The book's orange is the marigold wherever it is one thing: 6.1 the "24 leaves" box; 6.2 Box 2;
 * 6.3 the choices n, n − 1, …; 6.4 the block (AB), the gaps and the two results; 6.5 the gaps × and 24 × 60 = 1440;
 * 6.6 the AT LEAST row; 6.7 the stars and the ⁹C₃ line; 6.8 the two counts; 6.10 the net-count row; 6.11 the
 * "erase the labels" lines; A-d1 the path to NAA, the k = 50 box, the ruler's N block and its marker; B-d1 the bold
 * path; C-d1 the path through 2², 3⁰, 5¹ (first chip) and the column 3 that makes b (second chip); D-d1 the three
 * deranged arrows, their line and the 10 × 2 = 20 box. The book's navy is ink and its teal and green are ink (6.6's
 * EXCLUDE row, 6.8's Asha and Ravi, 6.10's C, 6.11's arrows, C-d1's column 3, D-d1's chosen pair); its grey slate.
 *
 * NO FILLS. The book's pale box fills (6.2, 6.4's block, 6.6, 6.8, 6.11's fibres, the AAGIN ruler, C-d1, D-d1),
 * 6.5's grey table and 6.10's coloured circles are left out: outlines only. 6.9's shaded triangle is the one shaded
 * region a label names ("shaded: one genuine triangle"): marigold hatching (as Chapter 2's hatch), its sides in ink,
 * so 6.9's collinear line and P₁–P₄ (orange in the book) are ink. 6.7's filled orange stars are drawn as marigold
 * outlines. Points stay filled dots (decision 10).
 *
 * DEPARTURES, for a phone: what the book sets beside a drawing is set under it (6.9's and 6.10's text, 6.11's,
 * D-d1's 10 × 2 = 20), long lines are broken in two; 6.4's two panels stand one above the other with the book's
 * check line under both; 6.8 and C-d1 are chips, one panel each; side labels the book runs up the page (B-d1's
 * "3 blocks north", D-d1's "letters" and "envelopes") are set level. Words (AAGIN, RRRRUUU), italic in the book
 * there, are upright as in the text (house rule for words). Number ranges take the en dash (1–24), as the text does.
 * Fractions (6.3, 6.8, 6.11, B-d1) are stacked by hand; the book's binomials (6.11's (4 over r), B-d1's (7 over 4),
 * D-d1's (5 over 2)) are stacked in round brackets drawn as curves. No em dash.
 */

const W = 340;
type P = [number, number];
const fmt = (n: number, d = 2) => String(+n.toFixed(d)).replace('-', '−');
const len = (a: P, b: P) => Math.hypot(b[0] - a[0], b[1] - a[1]);
const plain = (html: string) => html.replace(/<[^>]+>/g, '');
const widthOf = (html: string, size: number) => Math.max(mathW(html, size), plain(html).length * size * 0.5);
const I = (t: string) => `<i>${t}</i>`;
const close = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) < tol;
const bn = (n: string, d: string) => `<binom><num>${n}</num><den>${d}</den></binom>`;
const sb = (b: string, k: string) => `${b}<sub>${k}</sub>`;
const nC = (n: string, r: string) => `<sup>${n}</sup>${I('C')}<sub>${r}</sub>`;
const nP = (n: string, r: string) => `<sup>${n}</sup>${I('P')}<sub>${r}</sub>`;
const DEG = Math.PI / 180;
const pol = (c: P, r: number, deg: number): P => [c[0] + r * Math.cos(deg * DEG), c[1] - r * Math.sin(deg * DEG)];

/* ---------- counting ---------- */
const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
const Cn = (n: number, r: number) => (r < 0 || r > n ? 0 : fact(n) / (fact(r) * fact(n - r)));
const Pn = (n: number, r: number) => fact(n) / fact(n - r);
/** Every permutation of 0 … n − 1. */
function perms(n: number): number[][] {
  if (n === 0) return [[]];
  return perms(n - 1).flatMap((p) => Array.from({ length: n }, (_, i) => [...p.slice(0, i), n - 1, ...p.slice(i)]));
}
/** Every k-subset of 0 … n − 1. */
const subsets = (n: number, k: number): number[][] => (k === 0 ? [[]] : n < k ? [] : [...subsets(n - 1, k), ...subsets(n - 1, k - 1).map((s) => [...s, n - 1])]);

/* ---------- lines, labels and the layout checks (as in mathematics-11-04.ts) ---------- */
type Stroke = { color?: string; w?: number; dash?: boolean | string; name?: string };
const LINES = new WeakMap<Sketch, { name: string; pts: P[] }[]>();
const keep = (s: Sketch, pts: P[], name = '') => { const l = LINES.get(s) ?? []; l.push({ name, pts }); LINES.set(s, l); };
const linesNamed = (s: Sketch, re: RegExp) => (LINES.get(s) ?? []).filter((l) => re.test(l.name));
const dashAttr = (d: Stroke['dash']) => (d === true ? ' stroke-dasharray="5 4"' : d ? ` stroke-dasharray="${d}"` : '');
function path(s: Sketch, pts: P[], o: Stroke = {}) {
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ');
  s.add(`<path d="${d}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}" stroke-linejoin="round" stroke-linecap="round"${dashAttr(o.dash)}/>`);
  keep(s, pts, o.name);
}
function arrow(s: Sketch, a: P, b: P, o: Stroke = {}) {
  s.vec(a[0], a[1], b[0], b[1], { color: o.color ?? C.ink, w: o.w ?? 1.5, dash: !!o.dash });
  keep(s, [a, b], o.name);
}
/** A two-headed arrow between a and b. */
function both(s: Sketch, a: P, b: P, o: Stroke = {}) {
  const col = o.color ?? C.slate, w = o.w ?? 1.2;
  s.vec((a[0] + b[0]) / 2, (a[1] + b[1]) / 2, b[0], b[1], { color: col, w });
  s.vec((a[0] + b[0]) / 2, (a[1] + b[1]) / 2, a[0], a[1], { color: col, w });
  keep(s, [a, b], o.name);
}
const arcPts = (c: P, r: number, a0: number, a1: number, n = 60): P[] => Array.from({ length: n + 1 }, (_, i) => pol(c, r, a0 + ((a1 - a0) * i) / n));
/** A quadratic Bézier from a through ctrl to b, as points. */
const quad = (a: P, c: P, b: P, n = 30): P[] => Array.from({ length: n + 1 }, (_, i): P => { const t = i / n, u = 1 - t; return [u * u * a[0] + 2 * u * t * c[0] + t * t * b[0], u * u * a[1] + 2 * u * t * c[1] + t * t * b[1]]; });
/** A rounded box, its outline kept for the clearance check. */
function box(s: Sketch, r: Rect, o: Stroke & { rx?: number } = {}) {
  s.add(`<rect x="${r1(r[0])}" y="${r1(r[1])}" width="${r1(r[2] - r[0])}" height="${r1(r[3] - r[1])}" rx="${o.rx ?? 5}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.4}"${dashAttr(o.dash)}/>`);
  keep(s, [[r[0], r[1]], [r[2], r[1]], [r[2], r[3]], [r[0], r[3]], [r[0], r[1]]], o.name ?? 'box');
}
/** A circle, kept as a polyline. */
function ring(s: Sketch, c: P, r: number, o: Stroke = {}) {
  s.add(`<circle cx="${r1(c[0])}" cy="${r1(c[1])}" r="${r1(r)}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.4}"${dashAttr(o.dash)}/>`);
  keep(s, arcPts(c, r, 0, 360, 120), o.name ?? 'ring');
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
function clearance(s: Sketch): { gap: number; what: string } {
  let gap = Infinity, what = '';
  const boxes: [string, Rect][] = [...s.tags.map((t): [string, Rect] => [t.name, t.rect]), ...s.labels.map((l): [string, Rect] => [l.text, l.rect])];
  for (const { pts, name: ln } of LINES.get(s) ?? []) for (const [name, r] of boxes) { const d = boxToLine(r, pts); if (d < gap) { gap = d; what = `${name}" (from the ${ln || 'line'}`; } }
  return { gap, what };
}
const clearCheck = (s: Sketch): Check => {
  const { gap, what } = clearance(s);
  return [`Every label stays at least ${LABEL_GAP} px clear of every line, box, dot and hatch stroke: the closest is "${what}", ${fmt(gap, 1)} px`, gap >= LABEL_GAP - 1e-9];
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
  const out = (LINES.get(s) ?? []).filter((l) => l.pts.some((p) => p[0] < 0 || p[0] > s.w || p[1] < 0 || p[1] > s.h)).map((l) => l.name);
  return [`Every line lies inside the frame${out.length ? `: not ${[...new Set(out)].join(', ')}` : ''}`, out.length === 0];
};
const layout = (s: Sketch): Check[] => [clearCheck(s), labelsApart(s), inFrame(s), linesInFrame(s)];
const hasLabel = (s: Sketch, t: string) => s.labels.some((l) => l.text === t);
const labelsCheck = (s: Sketch, ts: string[], what = 'The labels as printed'): Check => {
  const miss = ts.filter((t) => !hasLabel(s, t));
  return [`${what}: ${ts.join(' · ')}${miss.length ? `; missing ${miss.join(', ')}` : ''}`, miss.length === 0];
};
/** No vulgar-fraction character, no em dash and no one-line fraction in anything the drawing shows (its texts: a stacked fraction is two). */
const noBadChars = (s: Sketch, d: Diagram): Check => {
  const all = [...s.texts.map((t) => plain(t.html)), d.name, ...d.cases.flatMap((c) => [c.chip, plain(c.cap)])].join(' ');
  return ['No em dash, no vulgar-fraction character and no slash fraction in the labels, name, chips or captions', !/[\u2014\u00bc-\u00be\u2150-\u215e]/.test(all) && !/[\d)!]\s*\/\s*[\d(]/.test(all)];
};

/** A line of STIX on the drawing, from its baseline, its box at its true width. */
function lab(s: Sketch, x: number, y: number, html: string, o: { size?: number; anchor?: 'start' | 'middle' | 'end'; color?: string; semibold?: boolean } = {}): Rect {
  const size = o.size ?? 13, anchor = o.anchor ?? 'middle', w = widthOf(html, size) * (o.semibold ? 1.05 : 1);
  const x0 = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w : x;
  const rect: Rect = [x0, y - size * 0.72, x0 + w, y + size * (html.includes('<sub>') ? 0.36 : 0.22)];
  s.labels.push({ text: plain(html), rect });
  s.text(x, y, html, { size, anchor, color: o.color ?? C.text, semibold: o.semibold });
  return rect;
}
/** A label centred in a box: the baseline set so the text sits in the middle of (cx, cy). */
const labC = (s: Sketch, cx: number, cy: number, html: string, o: { size?: number; color?: string } = {}) => lab(s, cx, cy + (o.size ?? 13) * (html.includes('<sub>') ? 0.22 : 0.25), html, { ...o, anchor: 'middle' });

/* ---------- labels of several runs: text, bold text, stacked fractions, binomials and a Σ ---------- */
type Piece = { t: string; b?: boolean } | { num: string; den: string } | { bn: [string, string] } | { sum: true; bot: string };
const FRACS = new WeakMap<Sketch, { num: string; den: string; rule: [number, number, number]; numY: number; denY: number; numW: number; denW: number }[]>();
const BINOMS = new WeakMap<Sketch, { top: string; bot: string; topY: number; botY: number; axis: number }[]>();
const FRAC_PAD = 2;
const fracW = (num: string, den: string, size: number) => Math.max(widthOf(num, size), widthOf(den, size)) + 2 * FRAC_PAD;
function frac(s: Sketch, x: number, y: number, num: string, den: string, size: number, color: string): Rect {
  const w = fracW(num, den, size), numY = y - 3, denY = y + 3 + size * 0.68;
  s.text(x, numY, num, { size, color });
  s.text(x, denY, den, { size, color });
  s.add(`<line x1="${r1(x - w / 2)}" y1="${r1(y)}" x2="${r1(x + w / 2)}" y2="${r1(y)}" stroke="${color}" stroke-width="1.1"/>`);
  FRACS.set(s, [...(FRACS.get(s) ?? []), { num, den, rule: [x - w / 2, x + w / 2, y], numY, denY, numW: widthOf(num, size), denW: widthOf(den, size) }]);
  return [x - w / 2, numY - size * 0.72, x + w / 2, denY + size * 0.22];
}
const BN_SIZE = 1, BR_W = 0.36;
const binomW = (top: string, bot: string, size: number) => Math.max(stixW(top, size * BN_SIZE), stixW(bot, size * BN_SIZE)) + 2 * BR_W * size + 2;
/** n over r in tall round brackets (the book's binomial), the brackets drawn as curves; (x, y) its left end on the baseline. */
function binom(s: Sketch, x: number, y: number, top: string, bot: string, size: number, color: string): Rect {
  const w = binomW(top, bot, size), axis = y - size * 0.27, t = axis - size * 1.05, b = axis + size * 1.05, bw = BR_W * size, cx = x + w / 2;
  const topY = axis - 3, botY = axis + 3 + size * 0.68;
  s.text(cx, topY, top, { size: size * BN_SIZE, color });
  s.text(cx, botY, bot, { size: size * BN_SIZE, color });
  const br = (x0: number, x1: number) => `<path d="M${r1(x0)} ${r1(t)} Q${r1(x1)} ${r1(axis)} ${r1(x0)} ${r1(b)}" fill="none" stroke="${color}" stroke-width="1.1" stroke-linecap="round"/>`;
  s.add(br(x + bw - 0.5, x + 1) + br(x + w - bw + 0.5, x + w - 1));
  BINOMS.set(s, [...(BINOMS.get(s) ?? []), { top, bot, topY, botY, axis }]);
  return [x, t - 1, x + w, b + 1];
}
const SUM = 1.5, SUM_LIM = 0.72;
const pieceW = (p: Piece, size: number) =>
  'sum' in p ? Math.max(stixW('∑', size * SUM), stixW(p.bot, size * SUM_LIM)) + 3 : 'bn' in p ? binomW(p.bn[0], p.bn[1], size) : 't' in p ? stixW(p.t, size) * (p.b ? 1.06 : 1) : fracW(p.num, p.den, size) + 2;
const pieceText = (p: Piece) => ('sum' in p ? `∑[${plain(p.bot)}]` : 'bn' in p ? `(${plain(p.bn[0])} over ${plain(p.bn[1])})` : 't' in p ? plain(p.t) : `${plain(p.num)}/${plain(p.den)}`);
/** A text run in its slot: set against what follows it by its end, its own end spaces kept as room (as setRun in 03b). */
function textRun(s: Sketch, at: number, w: number, y: number, t: string, size: number, color: string, leads: boolean, bold?: boolean) {
  const lead = /^ */.exec(plain(t))![0].length, trail = / *$/.exec(plain(t))![0].length, sp = stixW(' ', size), body = t.replace(/^((?:<[^>]+>)*) +/, '$1').replace(/ +((?:<\/[^>]+>)*)$/, '$1');
  if (leads) s.text(at + w - trail * sp, y, body, { size, anchor: 'end', color, semibold: bold });
  else s.text(at + lead * sp, y, body, { size, anchor: 'start', color, semibold: bold });
}
/** One label made of runs, its fractions' rules and binomials on the maths axis. Registered as ONE label. */
function runs(s: Sketch, x: number, y: number, parts: Piece[], o: { size?: number; anchor?: 'start' | 'middle' | 'end'; color?: string } = {}): Rect {
  const size = o.size ?? 13, color = o.color ?? C.text, ws = parts.map((p) => pieceW(p, size)), total = ws.reduce((a, b) => a + b, 0);
  let at = o.anchor === 'middle' ? x - total / 2 : o.anchor === 'end' ? x - total : x;
  const bx: Rect = [at, y - size * 0.72, at + total, y + size * 0.22];
  const grow = (r: Rect) => { bx[1] = Math.min(bx[1], r[1]); bx[3] = Math.max(bx[3], r[3]); };
  parts.forEach((p, i) => {
    if ('sum' in p) {
      const cx = at + ws[i] / 2;
      s.text(cx, y + size * 0.2, '∑', { size: size * SUM, color });
      s.text(cx, y + size * 0.98, p.bot, { size: size * SUM_LIM, color });
      grow([0, y - size * 1.05, 0, y + size * 1.15]);
    } else if ('bn' in p) grow(binom(s, at, y, p.bn[0], p.bn[1], size, color));
    else if ('t' in p) textRun(s, at, ws[i], y, p.t, size, color, i < parts.length - 1, p.b);
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
/** Every binomial is stacked in its brackets, the top above the bottom. */
const binomCheck = (s: Sketch, want: string[]): Check => {
  const b = BINOMS.get(s) ?? [], got = b.map((q) => `${plain(q.top)} over ${plain(q.bot)}`);
  return [`The binomial written as the book prints it, n over r in round brackets (${got.join(', ')})`, b.length === want.length && want.every((w) => got.includes(w)) && b.every((q) => q.topY < q.axis && q.botY > q.axis + 4)];
};

/* ---------- dots ---------- */
const DOTS = new WeakMap<Sketch, { p: P; name: string }[]>();
const DOT_R = 3.6;
/** A filled dot (decision 10), kept as a ring for the clearance check. */
function pt(s: Sketch, p: P, name: string, col: string = C.ink, r = DOT_R) {
  s.dot(p[0], p[1], r, col);
  keep(s, Array.from({ length: 25 }, (_, i): P => [p[0] + (r + 1) * Math.cos((2 * Math.PI * i) / 24), p[1] + (r + 1) * Math.sin((2 * Math.PI * i) / 24)]), `dot:${name}`);
  DOTS.set(s, [...(DOTS.get(s) ?? []), { p, name }]);
}
const dotsOf = (s: Sketch) => DOTS.get(s) ?? [];
const dotAt = (s: Sketch, name: string) => dotsOf(s).find((d) => d.name === name)?.p;
/** A vertical ellipsis (⋮) as three small dots, not points that mean anything. */
const vdots = (s: Sketch, x: number, y: number, col: string = C.ink) => [-6, 0, 6].forEach((d) => s.add(`<circle cx="${r1(x)}" cy="${r1(y + d)}" r="1.3" fill="${col}"/>`));

/* ---------- hatching: the book's shading, as marigold lines (mathematics-11-02.ts) ---------- */
const HATCH = new WeakMap<Sketch, [P, P][]>();
function hatch(s: Sketch, inside: (p: P) => boolean, bx: Rect, o: { step?: number; gap?: number } = {}): [P, P][] {
  const step = (o.step ?? 7) * Math.SQRT2, gap = o.gap ?? LABEL_GAP + 1, avoid = s.labels.map((l) => l.rect);
  const ok = (p: P) => inside(p) && avoid.every((r) => rectDist(r, p) >= gap);
  const segs: [P, P][] = [];
  for (let k = bx[0] + bx[1] + step / 2; k <= bx[2] + bx[3]; k += step) {
    const xa = Math.max(bx[0], k - bx[3]), xb = Math.min(bx[2], k - bx[1]);
    let a: P | null = null, b: P | null = null;
    const end = () => { if (a && b && len(a, b) >= 3) segs.push([a, b]); a = null; };
    for (let x = xa; x <= xb + 1e-9; x += 0.5) {
      const p: P = [x, k - x];
      if (ok(p)) { if (!a) a = p; b = p; } else end();
    }
    end();
  }
  s.add(`<path d="${segs.map(([a, b]) => `M${r1(a[0])} ${r1(a[1])} L${r1(b[0])} ${r1(b[1])}`).join(' ')}" fill="none" stroke="${C.mari}" stroke-width="1" stroke-linecap="round"/>`);
  segs.forEach((sg) => keep(s, sg, 'hatch'));
  HATCH.set(s, segs);
  return segs;
}
const cross2 = (o: P, a: P, b: P) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
/** Is p inside triangle t, at least `m` px in from every side? */
const inTri = (t: [P, P, P], p: P, m = 0) => {
  const sg = Math.sign(cross2(t[0], t[1], t[2]));
  return [0, 1, 2].every((i) => { const a = t[i], b = t[(i + 1) % 3]; return (sg * cross2(a, b, p)) / len(a, b) >= m; });
};

/* ===================================================================== */
/* Figure 6.1 · the thali tree (Topic 01, p. 493)                        */
/* ===================================================================== */
const CAP61 = 'One path (Sabzi 1 → Roti 1) is expanded in full and the other branches repeat identically: the leaves count 4 × 3 × 2 = 24 thalis.';
type Node = { key: string; c: P; t: string; box?: Rect };
const NODE_SIZE = 13, NODE_PAD = 6;
const nodeRect = (c: P, t: string, size = NODE_SIZE, pad = NODE_PAD): Rect => { const w = widthOf(t, size) + 2 * pad, h = size + 2 * pad + 1; return [c[0] - w / 2, c[1] - h / 2, c[0] + w / 2, c[1] + h / 2]; };
const NODES61: Node[] = [
  { key: 'start', c: [30, 228], t: 'start' },
  ...[112, 206, 250, 294].map((y, i): Node => ({ key: `S${i + 1}`, c: [108, y], t: `Sabzi ${i + 1}` })),
  ...[74, 124, 168].map((y, i): Node => ({ key: `R${i + 1}`, c: [200, y], t: `Roti ${i + 1}` })),
  ...[52, 96].map((y, i): Node => ({ key: `W${i + 1}`, c: [294, y], t: `Sweet ${i + 1}` })),
];
const EDGES61: [string, string, boolean][] = [
  ['start', 'S1', true], ['start', 'S2', false], ['start', 'S3', false], ['start', 'S4', false],
  ['S1', 'R1', true], ['S1', 'R2', false], ['S1', 'R3', false], ['R1', 'W1', true], ['R1', 'W2', true],
];
/** The branches not drawn out: a line from the node to a "⋯". */
const MORE61: [string, number][] = [['R2', 300], ['R3', 300], ['S2', 200], ['S3', 200], ['S4', 200]];
const fig61: Diagram = {
  id: 'm11-06-fig-6.1',
  topic: 0,
  name: 'The thali tree',
  cases: [{ chip: '4 × 3 × 2 thalis', cap: CAP61 }],
  draw() {
    const s = new Sketch(W, 358), by = (k: string) => NODES61.find((n) => n.key === k)!;
    lab(s, 108, 24, I('sabzi (4)'), { size: 13, color: C.slate });
    lab(s, 200, 24, I('roti (3)'), { size: 13, color: C.slate });
    lab(s, 294, 24, I('sweet (2)'), { size: 13, color: C.slate });
    NODES61.forEach((n) => { const r = nodeRect(n.c, n.t); box(s, r, { color: C.slate, w: 1.1, name: `node:${n.key}` }); labC(s, n.c[0], n.c[1], n.t, { size: NODE_SIZE }); });
    EDGES61.forEach(([a, b, bold]) => {
      const ra = nodeRect(by(a).c, by(a).t), rb = nodeRect(by(b).c, by(b).t);
      path(s, [[ra[2], by(a).c[1]], [rb[0], by(b).c[1]]], { color: bold ? C.ink : C.slate, w: bold ? 2.2 : 1.2, name: `edge:${a}>${b}${bold ? ':path' : ''}` });
    });
    MORE61.forEach(([k, x]) => {
      const n = by(k), r = nodeRect(n.c, n.t);
      path(s, [[r[2], n.c[1]], [x - 22, n.c[1]]], { color: C.slate, w: 1.2, name: `more:${k}` });
      lab(s, x, n.c[1] + 4, '⋯', { size: 14, color: C.slate });
    });
    box(s, [240, 220, 332, 278], { color: C.mari, w: 1.6, rx: 7, name: 'result' });
    lab(s, 286, 243, '24 leaves', { size: 14, color: C.amber });
    lab(s, 286, 264, '= 4 × 3 × 2', { size: 14, color: C.amber });
    lab(s, W / 2, 330, I('one full path shown;'), { size: 12.5, color: C.slate });
    lab(s, W / 2, 348, I('the other branches repeat identically'), { size: 12.5, color: C.slate });
    return s;
  },
  check() {
    const s = fig61.draw(fig61.cases[0]), out: Check[] = [];
    const leaves = [1, 2, 3, 4].flatMap((a) => [1, 2, 3].flatMap((b) => [1, 2].map((c) => `${a}${b}${c}`)));
    out.push([`4 sabzis × 3 rotis × 2 sweets: listing every thali gives ${leaves.length} leaves = 4 × 3 × 2 = ${4 * 3 * 2}`, leaves.length === 24 && new Set(leaves).size === 24]);
    out.push(['From start, 4 sabzi branches; Sabzi 1 opens into 3 rotis and Roti 1 into 2 sweets (the one full path, in bold); the other 5 branches end in "⋯"', linesNamed(s, /^edge:start>/).length === 4 && linesNamed(s, /^edge:S1>/).length === 3 && linesNamed(s, /^edge:R1>/).length === 2 && linesNamed(s, /:path$/).length === 4 && linesNamed(s, /^more:/).length === 5]);
    out.push(labelsCheck(s, ['sabzi (4)', 'roti (3)', 'sweet (2)', 'start', 'Sabzi 1', 'Sabzi 2', 'Sabzi 3', 'Sabzi 4', 'Roti 1', 'Roti 2', 'Roti 3', 'Sweet 1', 'Sweet 2', '24 leaves', '= 4 × 3 × 2', 'one full path shown;', 'the other branches repeat identically']));
    out.push(noBadChars(s, fig61));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 6.2 · Box 1 and Box 2 (Topic 01, p. 496)                       */
/* ===================================================================== */
const CAP62 = `Each of the ${I('m')} Box-1 choices pairs with all ${I('n')} of Box 2: ${I('m')} groups of ${I('n')}.`;
const ROWS62 = [72, 112, 162];
const fig62: Diagram = {
  id: 'm11-06-fig-6.2',
  topic: 0,
  name: 'Box 1 and Box 2',
  cases: [{ chip: 'm × n pairings', cap: CAP62 }],
  draw() {
    const s = new Sketch(W, 284);
    lab(s, 65, 24, 'Box 1', { size: 15 });
    lab(s, 275, 24, 'Box 2', { size: 15, color: C.amber });
    box(s, [25, 40, 105, 196], { color: C.ink, w: 1.6, rx: 6, name: 'box1' });
    box(s, [235, 40, 315, 196], { color: C.mari, w: 1.6, rx: 6, name: 'box2' });
    const as = ['1', '2', I('m')], bs = ['1', '2', I('n')];
    ROWS62.forEach((y, i) => {
      lab(s, 50, y + 5, sb(I('a'), as[i]), { size: 15 });
      pt(s, [80, y], `a${i}`);
      pt(s, [260, y], `b${i}`, C.mari);
      lab(s, 290, y + 5, sb(I('b'), bs[i]), { size: 15, color: C.amber });
    });
    vdots(s, 80, 137); vdots(s, 260, 137, C.mari);
    ROWS62.forEach((ya, i) => ROWS62.forEach((yb, j) => arrow(s, [114, ya], [227, yb], { color: C.slate, w: 1, name: `pair:${i}>${j}` })));
    lab(s, 65, 222, `${I('m')} ways`, { size: 16 });
    lab(s, 275, 222, `${I('n')} ways`, { size: 16, color: C.amber });
    lab(s, W / 2, 254, `each Box-1 choice pairs with all ${I('n')} of Box 2:`, { size: 13.5 });
    lab(s, W / 2, 274, `${I('m')} groups of ${I('n')}, i.e. ${I('m')} × ${I('n')}`, { size: 13.5 });
    return s;
  },
  check() {
    const s = fig62.draw(fig62.cases[0]), out: Check[] = [];
    const pairs = linesNamed(s, /^pair:/);
    out.push([`Every Box-1 choice is joined to every Box-2 choice: ${pairs.length} arrows for the 3 × 3 drawn (m groups of n, so m × n in all)`, pairs.length === 9 && ROWS62.every((ya) => ROWS62.every((yb) => pairs.some((l) => close(l.pts[0][1], ya) && close(l.pts[1][1], yb))))]);
    out.push(['The arrows run from Box 1 to Box 2; Box 2 and its choices are the highlight', pairs.every((l) => l.pts[0][0] > 105 && l.pts[1][0] < 235 && l.pts[1][0] > l.pts[0][0])]);
    out.push(labelsCheck(s, ['Box 1', 'Box 2', 'a1', 'a2', 'am', 'b1', 'b2', 'bn', 'm ways', 'n ways', 'each Box-1 choice pairs with all n of Box 2:', 'm groups of n, i.e. m × n']));
    out.push(noBadChars(s, fig62));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 6.3 · r positions from n objects (Topic 02, p. 505)            */
/* ===================================================================== */
const CAP63 = `Position 1 has ${I('n')} choices, down to ${I('n')} − ${I('r')} + 1 at position ${I('r')}; multiply to get ${nP(I('n'), I('r'))}.`;
const SLOTS63: { x: [number, number]; head: string; val: string }[] = [
  { x: [10, 62], head: 'Position 1', val: I('n') },
  { x: [74, 126], head: 'Position 2', val: `${I('n')} − 1` },
  { x: [138, 190], head: 'Position 3', val: `${I('n')} − 2` },
  { x: [258, 322], head: `Position ${I('r')}`, val: `${I('n')} − ${I('r')} + 1` },
];
const fig63: Diagram = {
  id: 'm11-06-fig-6.3',
  topic: 1,
  name: 'Filling r positions',
  cases: [{ chip: 'n choices down to n − r + 1', cap: CAP63 }],
  draw() {
    const s = new Sketch(W, 214);
    SLOTS63.forEach((sl, i) => {
      const cx = (sl.x[0] + sl.x[1]) / 2;
      lab(s, cx, 24, sl.head, { size: 11.5, color: C.slate });
      box(s, [sl.x[0], 38, sl.x[1], 78], { color: C.ink, w: 1.6, rx: 5, name: `slot:${i}` });
      lab(s, cx, 110, sl.val, { size: 15, color: C.amber });
    });
    lab(s, 224, 62, '⋯', { size: 15, color: C.slate });
    lab(s, 224, 110, '⋯', { size: 15, color: C.slate });
    both(s, [8, 132], [332, 132], { color: C.slate, w: 1.1, name: 'span' });
    lab(s, W / 2, 162, 'multiply (FPC):', { size: 13.5 });
    runs(s, W / 2, 196, [{ t: `${nP(I('n'), I('r'))} = ${I('n')}(${I('n')} − 1)(${I('n')} − 2)⋯(${I('n')} − ${I('r')} + 1) = ` }, { num: `${I('n')}!`, den: `(${I('n')} − ${I('r')})!` }], { size: 13, anchor: 'middle' });
    return s;
  },
  check() {
    const s = fig63.draw(fig63.cases[0]), out: Check[] = [];
    const ok = Array.from({ length: 10 }, (_, n) => n + 1).every((n) => Array.from({ length: n + 1 }, (_, r) => r).every((r) => { let p = 1; for (let k = 0; k < r; k++) p *= n - k; return p === Pn(n, r); }));
    out.push(['n(n − 1)(n − 2)⋯(n − r + 1) = n!/(n − r)! = ⁿPᵣ for every n ≤ 10 and r ≤ n (the r-th position has n − (r − 1) choices left)', ok]);
    out.push(['Four boxes and a "⋯", each with its count of choices under it; the double arrow spans them all', linesNamed(s, /^slot:/).length === 4 && linesNamed(s, /^span$/).length === 1]);
    out.push(labelsCheck(s, ['Position 1', 'Position 2', 'Position 3', 'Position r', 'n', 'n − 1', 'n − 2', 'n − r + 1', 'multiply (FPC):', 'nPr = n(n − 1)(n − 2)⋯(n − r + 1) = n!/(n − r)!']));
    out.push(stackedCheck(s, ['n!/(n − r)!']));
    out.push(noBadChars(s, fig63));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 6.4 · together and not together (Topic 02, p. 507)             */
/* ===================================================================== */
const CAP64 = `Gluing ${I('A')} and ${I('B')} gives 48 arrangements, the gap method 72, and 48 + 72 = 120.`;
/** A result line with its last number bold, as printed ("24 × 2 = 48"). */
function resultLine(s: Sketch, cx: number, y: number, head: string, num: string, size: number) {
  runs(s, cx, y, [{ t: head }, { t: num, b: true }], { size, anchor: 'middle', color: C.amber });
}
const GAPS64: [number, number][] = [[56, 74], [126, 144], [196, 214], [266, 284]];
const fig64: Diagram = {
  id: 'm11-06-fig-6.4',
  topic: 1,
  name: 'Together and not together',
  cases: [{ chip: 'Block and gaps', cap: CAP64 }],
  draw() {
    const s = new Sketch(W, 362);
    lab(s, W / 2, 22, 'TOGETHER: glue into a block', { size: 13.5 });
    box(s, [71, 40, 131, 76], { color: C.mari, w: 1.6, rx: 5, name: 'block' });
    labC(s, 101, 58, `(${I('AB')})`, { size: 15, color: C.amber });
    [['C', 141], ['D', 187], ['E', 233]].forEach(([l, x]) => { box(s, [+x, 40, +x + 36, 76], { w: 1.6, name: `unit:${l}` }); labC(s, +x + 18, 58, I(String(l)), { size: 15 }); });
    lab(s, W / 2, 102, '4 units: 4! = 24', { size: 13.5 });
    lab(s, W / 2, 124, 'block flips: 2! = 2', { size: 13.5 });
    resultLine(s, W / 2, 150, '24 × 2 = ', '48', 15);
    path(s, [[40, 166], [300, 166]], { color: C.slate, w: 0.8, name: 'divider' });
    lab(s, W / 2, 192, 'NOT TOGETHER: fill the gaps', { size: 13.5 });
    [['C', 82], ['D', 152], ['E', 222]].forEach(([l, x]) => { box(s, [+x, 210, +x + 36, 246], { w: 1.6, name: `seat:${l}` }); labC(s, +x + 18, 228, I(String(l)), { size: 15 }); });
    GAPS64.forEach(([a, b], i) => path(s, [[a, 246], [b, 246]], { color: C.mari, w: 2.4, name: `gap:${i}` }));
    lab(s, W / 2, 272, `seat ${I('C')}, ${I('D')}, ${I('E')}: 3! = 6`, { size: 13.5 });
    lab(s, W / 2, 294, `${I('A')}, ${I('B')} into 2 of the 4 gaps: ${nP('4', '2')} = 12`, { size: 13.5 });
    resultLine(s, W / 2, 320, '6 × 12 = ', '72', 15);
    lab(s, W / 2, 352, `${I('check')}: 48 + 72 = 120 = 5!`, { size: 13, color: C.slate });
    return s;
  },
  check() {
    const s = fig64.draw(fig64.cases[0]), out: Check[] = [];
    const all = perms(5), adj = all.filter((p) => Math.abs(p.indexOf(0) - p.indexOf(1)) === 1).length;
    out.push([`Together: 4! × 2! = ${fact(4) * fact(2)}; listing all 5! = ${all.length} rows of A–E, A and B are side by side in ${adj}`, adj === 48 && fact(4) * fact(2) === 48]);
    out.push([`Not together: 3! × ⁴P₂ = ${fact(3)} × ${Pn(4, 2)} = ${fact(3) * Pn(4, 2)}; the listing gives ${all.length - adj}; 48 + 72 = ${48 + 72} = 5!`, fact(3) * Pn(4, 2) === 72 && all.length - adj === 72 && 48 + 72 === fact(5)]);
    out.push(['C, D, E leave 4 gaps, the two ends included: four marks, one before, between and after them', linesNamed(s, /^gap:/).length === 4 && GAPS64.every((g, i) => i === 0 || g[0] > GAPS64[i - 1][1])]);
    out.push(labelsCheck(s, ['TOGETHER: glue into a block', '(AB)', 'C', 'D', 'E', '4 units: 4! = 24', 'block flips: 2! = 2', '24 × 2 = 48', 'NOT TOGETHER: fill the gaps', 'seat C, D, E: 3! = 6', 'A, B into 2 of the 4 gaps: 4P2 = 12', '6 × 12 = 72', 'check: 48 + 72 = 120 = 5!']));
    out.push(noBadChars(s, fig64));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 6.5 · five boys round a table (Topic 02, p. 510)               */
/* ===================================================================== */
const CAP65 = `Five boys seated in 4! = 24 ways leave 5 gaps; 3 girls add ${nP('5', '3')} = 60.`;
const O65: P = [170, 200], R65 = 104, RB65 = 21;
const BOYS65 = [90, 162, 234, 306, 18];
const fig65: Diagram = {
  id: 'm11-06-fig-6.5',
  topic: 1,
  name: 'Boys round a table',
  cases: [{ chip: '5 boys, 3 girls', cap: CAP65 }],
  draw() {
    const s = new Sketch(W, 372), O = O65;
    lab(s, W / 2, 24, '5 boys: (5 − 1)! = 24;  5 gaps (×);', { size: 14 });
    lab(s, W / 2, 48, `3 girls: ${nP('5', '3')} = 60`, { size: 14 });
    ring(s, O, 56, { color: C.slate, w: 1.1, name: 'table' });
    lab(s, O[0], O[1] - 4, 'round', { size: 13.5, color: C.slate });
    lab(s, O[0], O[1] + 14, 'table', { size: 13.5, color: C.slate });
    const half = (RB65 + 4) / R65 / DEG;
    BOYS65.forEach((a, i) => {
      const c = pol(O, R65, a);
      ring(s, c, RB65, { color: C.ink, w: 1.8, name: `boy:${i}` });
      labC(s, c[0], c[1], sb(I('B'), String(i + 1)), { size: 15 });
      const g = a + 36, m = pol(O, R65, g), k = 5;
      path(s, [[m[0] - k, m[1] - k], [m[0] + k, m[1] + k]], { color: C.mari, w: 2, name: `gap:${i}` });
      path(s, [[m[0] - k, m[1] + k], [m[0] + k, m[1] - k]], { color: C.mari, w: 2, name: `gap:${i}` });
      path(s, arcPts(O, R65, a + half, g - 6, 20), { color: C.slate, w: 1.1, name: 'seats' });
      path(s, arcPts(O, R65, g + 6, a + 72 - half, 20), { color: C.slate, w: 1.1, name: 'seats' });
    });
    lab(s, W / 2, 358, '24 × 60 = 1440', { size: 17, color: C.amber });
    return s;
  },
  check() {
    const s = fig65.draw(fig65.cases[0]), out: Check[] = [];
    // 8 distinct people in 8 seats round a table: count the rows with no two of the 3 girls (5, 6, 7) side by side, cyclically, then divide by the 8 rotations
    const ok = perms(8).filter((p) => [5, 6, 7].every((g) => { const i = p.indexOf(g); return p[(i + 1) % 8] < 5; })).length / 8;
    out.push([`(5 − 1)! × ⁵P₃ = ${fact(4)} × ${Pn(5, 3)} = ${fact(4) * Pn(5, 3)}; seating all 8 round the table and keeping those with no two girls together gives ${ok}`, ok === 1440 && fact(4) * Pn(5, 3) === 1440]);
    out.push(['Five boys round the table, a gap × between each two neighbours: 5 gaps for the 3 girls', linesNamed(s, /^boy:/).length === 5 && new Set(linesNamed(s, /^gap:/).map((l) => l.name)).size === 5]);
    out.push(labelsCheck(s, ['5 boys: (5 − 1)! = 24;  5 gaps (×);', '3 girls: 5P3 = 60', 'B1', 'B2', 'B3', 'B4', 'B5', 'round', 'table', '24 × 60 = 1440']));
    out.push(noBadChars(s, fig65));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 6.6 · the three selection reflexes (Topic 03, p. 516)          */
/* ===================================================================== */
const CAP66 = 'Include, exclude and at-least constraints, each with the count it reduces to.';
const ROWS66: { y: number; left: [string, string]; right: [string, string, string]; hi?: boolean }[] = [
  { y: 36, left: [`INCLUDE ${I('k')}`, 'given items'], right: ['pre-place them, then take', `${I('r')} − ${I('k')} from ${I('n')} − ${I('k')}:  ${nC(`${I('n')}−${I('k')}`, `${I('r')}−${I('k')}`)}`, `captain fixed: ${nC('8', '4')} = 70`] },
  { y: 132, left: [`EXCLUDE ${I('k')}`, 'given items'], right: ['drop them, then take', `all ${I('r')} from ${I('n')} − ${I('k')}:  ${nC(`${I('n')}−${I('k')}`, I('r'))}`, `one banned: ${nC('8', '5')} = 56`] },
  { y: 228, left: [`AT LEAST ${I('m')}`, 'of a type'], right: [`sum the cases ${I('m')}, ${I('m')} + 1, …`, `or Total − (fewer than ${I('m')})`, `${nC('9', '5')} − ${nC('7', '5')} = 126 − 21 = 105`], hi: true },
];
const fig66: Diagram = {
  id: 'm11-06-fig-6.6',
  topic: 2,
  name: 'The three selection reflexes',
  cases: [{ chip: 'Include, exclude, at least', cap: CAP66 }],
  draw() {
    const s = new Sketch(W, 318);
    lab(s, W / 2, 20, I('the three selection reflexes'), { size: 13.5, color: C.slate });
    ROWS66.forEach((r, i) => {
      const col = r.hi ? C.mari : C.ink, tc = r.hi ? C.amber : C.text;
      box(s, [6, r.y + 14, 118, r.y + 68], { color: col, w: 1.6, rx: 6, name: `rule:${i}` });
      lab(s, 62, r.y + 37, r.left[0], { size: 12.5, color: tc });
      lab(s, 62, r.y + 55, r.left[1], { size: 12.5, color: tc });
      arrow(s, [123, r.y + 41], [140, r.y + 41], { color: col, w: 1.4, name: `to:${i}` });
      box(s, [144, r.y, 334, r.y + 82], { color: C.slate, w: 1, rx: 6, name: `count:${i}` });
      lab(s, 239, r.y + 21, r.right[0], { size: 12.5 });
      lab(s, 239, r.y + 46, r.right[1], { size: 12.5 });
      lab(s, 239, r.y + 70, r.right[2], { size: 12, color: C.slate });
    });
    return s;
  },
  check() {
    const s = fig66.draw(fig66.cases[0]), out: Check[] = [];
    const teams = subsets(9, 5), withCaptain = teams.filter((t) => t.includes(0)).length, without = teams.filter((t) => !t.includes(0)).length, atLeast = teams.filter((t) => t.includes(0) || t.includes(1)).length;
    out.push([`Teams of 5 from 9: ${withCaptain} hold the captain (⁸C₄ = ${Cn(8, 4)}), ${without} leave a banned player out (⁸C₅ = ${Cn(8, 5)}), ${atLeast} hold at least 1 of 2 named players (⁹C₅ − ⁷C₅ = ${Cn(9, 5)} − ${Cn(7, 5)} = ${Cn(9, 5) - Cn(7, 5)})`, withCaptain === 70 && Cn(8, 4) === 70 && without === 56 && Cn(8, 5) === 56 && atLeast === 105 && Cn(9, 5) - Cn(7, 5) === 105]);
    out.push(['Three rules, each with an arrow to the count it reduces to; the AT LEAST row is the highlight', linesNamed(s, /^to:/).length === 3 && linesNamed(s, /^count:/).length === 3]);
    out.push(labelsCheck(s, ['the three selection reflexes', 'INCLUDE k', 'EXCLUDE k', 'given items', 'AT LEAST m', 'of a type', 'pre-place them, then take', 'r − k from n − k:  n−kCr−k', 'captain fixed: 8C4 = 70', 'drop them, then take', 'all r from n − k:  n−kCr', 'one banned: 8C5 = 56', 'sum the cases m, m + 1, …', 'or Total − (fewer than m)', '9C5 − 7C5 = 126 − 21 = 105']));
    out.push(noBadChars(s, fig66));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 6.7 · stars and bars (Topic 04, p. 525)                        */
/* ===================================================================== */
const CAP67 = `Six stars split by three bars into blocks of 2, 1, 0 and 3: ${nC('9', '3')} = 84.`;
const STARS67 = [38, 68, 116, 246, 278, 310], BARS67 = [92, 140, 220], SY67 = 64;
const BLOCKS67: [number, number, string][] = [[24, 82, 'type 1: 2'], [104, 128, 'type 2: 1'], [152, 208, 'type 3: 0'], [232, 324, 'type 4: 3']];
/** A five-pointed star, outlined (the book's filled star, no fill). */
function star(s: Sketch, c: P, r = 9.5) {
  const pts = Array.from({ length: 11 }, (_, i): P => pol(c, i % 2 ? r * 0.42 : r, 90 + i * 36));
  path(s, pts, { color: C.mari, w: 1.6, name: 'star' });
}
const fig67: Diagram = {
  id: 'm11-06-fig-6.7',
  topic: 3,
  name: 'Stars and bars',
  cases: [{ chip: '6 stars, 3 bars', cap: CAP67 }],
  draw() {
    const s = new Sketch(W, 228);
    lab(s, W / 2, 22, `${I('r')} = 6 stars, ${I('n')} − 1 = 3 bars (${I('n')} = 4 types)`, { size: 13.5 });
    STARS67.forEach((x) => star(s, [x, SY67]));
    BARS67.forEach((x, i) => path(s, [[x, 42], [x, 86]], { color: C.ink, w: 3, name: `bar:${i}` }));
    lab(s, 180, 68, I('(empty)'), { size: 11.5, color: C.slate });
    BLOCKS67.forEach(([a, b, t], i) => {
      path(s, [[a, 100], [a, 108], [b, 108], [b, 100]], { color: C.slate, w: 1.2, name: `block:${i}` });
      path(s, [[(a + b) / 2, 108], [(a + b) / 2, 114]], { color: C.slate, w: 1.2, name: `block:${i}` });
      lab(s, (a + b) / 2, 132, t, { size: 12, color: C.slate });
    });
    lab(s, W / 2, 164, 'choose which 3 of the 9 places hold bars:', { size: 13.5, color: C.amber });
    lab(s, W / 2, 188, `${nC('9', '3')} = ${nC('9', '6')} = 84`, { size: 14, color: C.amber });
    lab(s, W / 2, 216, I('an empty block (type 3) means that type was not chosen'), { size: 11.5, color: C.slate });
    return s;
  },
  check() {
    const s = fig67.draw(fig67.cases[0]), out: Check[] = [];
    let sols = 0;
    for (let a = 0; a <= 6; a++) for (let b = 0; a + b <= 6; b++) for (let c = 0; a + b + c <= 6; c++) sols++;
    out.push([`Choosing 6 from 4 types with repetition = solutions of x₁ + x₂ + x₃ + x₄ = 6 in whole numbers: listing them gives ${sols} = ⁹C₃ = ⁹C₆ = ${Cn(9, 3)}`, sols === 84 && Cn(9, 3) === 84 && Cn(9, 6) === 84]);
    const edges = [-Infinity, ...BARS67, Infinity], counts = edges.slice(0, -1).map((e, i) => STARS67.filter((x) => x > e && x < edges[i + 1]).length);
    out.push([`Read off the drawing, the bars split the 6 stars into blocks of ${counts.join(', ')} (types 1 to 4), as labelled; 9 places in all, 3 of them bars`, counts.join() === '2,1,0,3' && STARS67.length + BARS67.length === 9]);
    out.push(['Each bracket spans its own block only', BLOCKS67.every(([a, b], i) => edges[i] < a && b < edges[i + 1])]);
    out.push(labelsCheck(s, ['r = 6 stars, n − 1 = 3 bars (n = 4 types)', '(empty)', 'type 1: 2', 'type 2: 1', 'type 3: 0', 'type 4: 3', 'choose which 3 of the 9 places hold bars:', '9C3 = 9C6 = 84', 'an empty block (type 3) means that type was not chosen']));
    out.push(noBadChars(s, fig67));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 6.8 · divide and distribute (Topic 04, p. 525)                 */
/* ===================================================================== */
const CAP68 = 'Unlabelled bundles give 10 splits; naming Asha and Ravi gives 20.';
type Case68 = { chip: string; cap: string; kind: 'divide' | 'distribute' };
const fig68: Diagram = {
  id: 'm11-06-fig-6.8',
  topic: 3,
  name: 'Divide and distribute',
  cases: [{ chip: 'Divide', cap: CAP68, kind: 'divide' }, { chip: 'Distribute', cap: CAP68, kind: 'distribute' }],
  draw(c: Case68) {
    const s = new Sketch(W, 268), dv = c.kind === 'divide', x0 = dv ? 100 : 120;
    lab(s, W / 2, 22, dv ? 'DIVIDE' : 'DISTRIBUTE', { size: 14 });
    lab(s, W / 2, 42, dv ? '(unlabelled groups)' : '(labelled recipients)', { size: 13 });
    [0, 1].forEach((g) => {
      const y = 62 + g * 58;
      box(s, [x0, y, x0 + 140, y + 44], { color: C.ink, w: 1.6, rx: 13, name: `group:${g}` });
      [0, 1, 2].forEach((k) => {
        const cx = x0 + 32 + k * 38;
        box(s, [cx - 14, y + 7, cx + 14, y + 37], { color: C.slate, w: 1.1, rx: 3, name: 'book' });
        labC(s, cx, y + 22, sb(I('B'), String(g * 3 + k + 1)), { size: 13 });
      });
      if (!dv) lab(s, x0 - 10, y + 27, g ? 'Ravi' : 'Asha', { size: 14, anchor: 'end' });
    });
    runs(s, W / 2, 206, dv ? [{ num: '6!', den: '3! 3!' }, { t: ' · ' }, { num: '1', den: '2!' }, { t: ' = ' }, { t: '10', b: true }] : [{ num: '6!', den: '3! 3!' }, { t: ' = ' }, { t: '20', b: true }], { size: 15, anchor: 'middle', color: C.amber });
    lab(s, W / 2, 240, dv ? 'the bundles are interchangeable:' : 'swapping the two sets is a new', { size: 12.5, color: C.slate });
    lab(s, W / 2, 258, dv ? 'divide by 2!' : 'outcome: no division by 2!', { size: 12.5, color: C.slate });
    return s;
  },
  check(c: Case68) {
    const s = fig68.draw(c), out: Check[] = [], dv = c.kind === 'divide';
    const ordered = subsets(6, 3).length, unordered = subsets(6, 3).filter((t) => t.includes(0)).length;
    out.push(dv
      ? [`6!/(3! 3!) × 1/2! = ${fact(6) / (fact(3) * fact(3) * fact(2))}; listing the splits of B₁–B₆ into two unlabelled bundles of 3 gives ${unordered}`, unordered === 10 && fact(6) / (fact(3) * fact(3) * fact(2)) === 10]
      : [`6!/(3! 3!) = ${fact(6) / (fact(3) * fact(3))}; listing which 3 books Asha gets (Ravi the rest) gives ${ordered}`, ordered === 20 && fact(6) / (fact(3) * fact(3)) === 20]);
    out.push(['Two bundles of three books, B₁–B₃ and B₄–B₆', linesNamed(s, /^group:/).length === 2 && linesNamed(s, /^book$/).length === 6]);
    out.push(labelsCheck(s, dv ? ['DIVIDE', '(unlabelled groups)', '6!/3! 3! · 1/2! = 10', 'the bundles are interchangeable:', 'divide by 2!'] : ['DISTRIBUTE', '(labelled recipients)', 'Asha', 'Ravi', '6!/3! 3! = 20', 'swapping the two sets is a new', 'outcome: no division by 2!']));
    out.push(labelsCheck(s, ['B1', 'B2', 'B3', 'B4', 'B5', 'B6'], 'The books'));
    out.push(stackedCheck(s, dv ? ['6!/3! 3!', '1/2!'] : ['6!/3! 3!']));
    out.push(noBadChars(s, fig68));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 6.9 · 10 points, 4 collinear (Topic 05, p. 533)                */
/* ===================================================================== */
const CAP69 = 'Four collinear points give 1 line, not 6, and 4 flat triples: with 10 points in all, 40 lines and 116 triangles.';
/**
 * The book's points (p. 533 at 100 dpi), mapped onto the phone frame (an affine map: collinear stays collinear). The three
 * loose points are nudged (by at most 25 book px) because, as printed, two of them sit within 1–3 px of a line through two
 * other points (the triangle's left corner, P₂ and the point under P₃; the right corner, P₄ and the point right of the line).
 */
const map69 = ([x, y]: P): P => [36 + (x - 230) * 1.1, 46 + (y - 375) * 0.82];
const TRI69: [P, P, P] = [map69([338, 375]), map69([237, 440]), map69([434, 429])];
const PS69: P[] = [[249, 569], [313, 530], [377, 491], [441, 452]].map((p) => map69(p as P));
const REST69: P[] = [[438, 541], [343, 598], [289, 616]].map((p) => map69(p as P));
const fig69: Diagram = {
  id: 'm11-06-fig-6.9',
  topic: 4,
  name: 'Collinear points',
  cases: [{ chip: '10 points, 4 collinear', cap: CAP69 }],
  draw() {
    const s = new Sketch(W, 418);
    lab(s, W / 2, 22, '10 points, 4 of them collinear', { size: 14 });
    PS69.forEach((p, i) => lab(s, p[0] + 8, p[1] + 21, sb(I('P'), String(i + 1)), { size: 14 }));
    const [a, b] = [PS69[0], PS69[3]], u: P = [(b[0] - a[0]) / len(a, b), (b[1] - a[1]) / len(a, b)];
    path(s, [[a[0] - 22 * u[0], a[1] - 22 * u[1]], [b[0] + 26 * u[0], b[1] + 26 * u[1]]], { color: C.ink, w: 2, name: 'collinear' });
    hatch(s, (p) => inTri(TRI69, p, 3), [Math.min(...TRI69.map((q) => q[0])), Math.min(...TRI69.map((q) => q[1])), Math.max(...TRI69.map((q) => q[0])), Math.max(...TRI69.map((q) => q[1]))], { step: 6 });
    path(s, [...TRI69, TRI69[0]], { color: C.ink, w: 1.4, name: 'triangle' });
    [...TRI69, ...PS69, ...REST69].forEach((p, i) => pt(s, p, i >= 3 && i < 7 ? `P${i - 2}` : `q${i}`));
    lab(s, 20, 268, '4 collinear points:', { size: 13.5, anchor: 'start' });
    lab(s, 32, 292, `${nC('4', '2')} = 6 pairs, but only 1 line`, { size: 13.5, anchor: 'start' });
    lab(s, 32, 316, `${nC('4', '3')} = 4 flat ‘triangles’`, { size: 13.5, anchor: 'start' });
    lab(s, 20, 346, `lines = ${nC('10', '2')} − ${nC('4', '2')} + 1 = 40`, { size: 13.5, anchor: 'start' });
    lab(s, 20, 370, `triangles = ${nC('10', '3')} − ${nC('4', '3')} = 116`, { size: 13.5, anchor: 'start' });
    lab(s, W / 2, 396, I('shaded: one genuine triangle,'), { size: 12.5, color: C.slate });
    lab(s, W / 2, 412, I('from points in general position'), { size: 12.5, color: C.slate });
    return s;
  },
  check() {
    const s = fig69.draw(fig69.cases[0]), out: Check[] = [];
    const ps = dotsOf(s).map((d) => d.p), on = (a: P, b: P, c: P) => Math.abs(cross2(a, b, c)) / Math.max(len(a, b), 1) < 1e-6;
    const flat = subsets(ps.length, 3).filter(([i, j, k]) => on(ps[i], ps[j], ps[k]));
    const lines = new Set(subsets(ps.length, 2).map(([i, j]) => ps.map((q, k) => (on(ps[i], ps[j], q) ? k : -1)).filter((k) => k >= 0).join()));
    out.push([`${ps.length} dots; read off the drawing, only P₁–P₄ are collinear (${flat.length} flat triples, all from them), and no point sits within 6 px of a line through two others it is not on`, ps.length === 10 && flat.length === 4 && flat.every((t) => t.every((k) => k >= 3 && k < 7)) && subsets(10, 3).every(([i, j, k]) => on(ps[i], ps[j], ps[k]) || Math.abs(cross2(ps[i], ps[j], ps[k])) / len(ps[i], ps[j]) > 6)]);
    out.push([`Counting on the drawing: ${lines.size} distinct lines = ¹⁰C₂ − ⁴C₂ + 1 = ${Cn(10, 2) - Cn(4, 2) + 1}; ${Cn(10, 3) - flat.length} triangles = ¹⁰C₃ − ⁴C₃ = ${Cn(10, 3) - Cn(4, 3)}`, lines.size === 40 && Cn(10, 2) - Cn(4, 2) + 1 === 40 && Cn(10, 3) - flat.length === 116 && Cn(10, 3) - Cn(4, 3) === 116]);
    out.push(['The shaded triangle, marigold hatching, lies inside the triangle on three of the other points', (HATCH.get(s) ?? []).length > 5 && (HATCH.get(s) ?? []).every(([a, b]) => inTri(TRI69, a, 2) && inTri(TRI69, b, 2))]);
    out.push(labelsCheck(s, ['10 points, 4 of them collinear', 'P1', 'P2', 'P3', 'P4', '4 collinear points:', '4C2 = 6 pairs, but only 1 line', '4C3 = 4 flat ‘triangles’', 'lines = 10C2 − 4C2 + 1 = 40', 'triangles = 10C3 − 4C3 = 116', 'shaded: one genuine triangle,', 'from points in general position']));
    out.push(noBadChars(s, fig69));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 6.10 · the three-set ledger (Topic 06, p. 541)                 */
/* ===================================================================== */
const CAP610 = 'Add singles, subtract pairs, add the triple: every region is counted once.';
const VENN: { c: P; n: string }[] = [{ c: [144, 88], n: 'A' }, { c: [196, 88], n: 'B' }, { c: [170, 132], n: 'C' }];
const VR = 48;
/** Each region's "1": where it sits, and which circles it is inside. */
const REG610: { p: P; in: string }[] = [
  { p: [124, 76], in: 'A' }, { p: [216, 76], in: 'B' }, { p: [170, 156], in: 'C' },
  { p: [170, 68], in: 'AB' }, { p: [140, 120], in: 'AC' }, { p: [200, 120], in: 'BC' }, { p: [170, 102], in: 'ABC' },
];
const COLS610 = [196, 246, 296];
const ROWS610: [string, string[]][] = [['add singles', ['+1', '+2', '+3']], ['subtract pairs', ['−0', '−1', '−3']], ['add triple', ['+0', '+0', '+1']]];
const fig610: Diagram = {
  id: 'm11-06-fig-6.10',
  topic: 5,
  name: 'The inclusion–exclusion ledger',
  cases: [{ chip: 'Three sets', cap: CAP610 }],
  draw() {
    const s = new Sketch(W, 474);
    box(s, [70, 12, 270, 214], { color: C.ink, w: 1.4, rx: 0, name: 'S' });
    lab(s, 84, 32, I('S'), { size: 16 });
    VENN.forEach((v) => ring(s, v.c, VR, { color: C.ink, w: 1.6, name: `set:${v.n}` }));
    lab(s, 98, 50, I('A'), { size: 16 });
    lab(s, 244, 50, I('B'), { size: 16 });
    lab(s, 170, 202, I('C'), { size: 16 });
    REG610.forEach((r) => labC(s, r.p[0], r.p[1], '1', { size: 13 }));
    lab(s, W / 2, 238, I('each region is counted exactly once'), { size: 12.5, color: C.slate });
    COLS610.forEach((x, i) => { lab(s, x, 268, `in ${i + 1}`, { size: 12, color: C.slate }); lab(s, x, 284, i ? 'sets' : 'set', { size: 12, color: C.slate }); });
    path(s, [[20, 296], [320, 296]], { color: C.slate, w: 0.8, name: 'rule' });
    ROWS610.forEach(([t, vs], r) => {
      const y = 320 + r * 26;
      lab(s, 20, y, t, { size: 13, anchor: 'start' });
      vs.forEach((v, i) => lab(s, COLS610[i], y, v, { size: 13 }));
    });
    path(s, [[20, 388], [320, 388]], { color: C.slate, w: 0.8, name: 'rule' });
    lab(s, 20, 410, 'net count', { size: 13, anchor: 'start', color: C.amber });
    COLS610.forEach((x) => lab(s, x, 410, '1', { size: 14, color: C.amber, semibold: true }));
    lab(s, 20, 440, `|${I('A')} ∪ ${I('B')} ∪ ${I('C')}| = Σ<sub>1</sub> − Σ<sub>2</sub> + Σ<sub>3</sub>`, { size: 14, anchor: 'start' });
    lab(s, 20, 464, I('(there are 3 regions of each middle type)'), { size: 12, anchor: 'start', color: C.slate });
    return s;
  },
  check() {
    const s = fig610.draw(fig610.cases[0]), out: Check[] = [];
    out.push(['A region inside k of the sets is counted kC₁ − kC₂ + kC₃ times: +1 −0 +0, +2 −1 +0, +3 −3 +1, a net 1 each, as the ledger prints', [1, 2, 3].every((k) => Cn(k, 1) - Cn(k, 2) + Cn(k, 3) === 1 && ROWS610[0][1][k - 1] === `+${Cn(k, 1)}` && ROWS610[1][1][k - 1] === `−${Cn(k, 2)}` && ROWS610[2][1][k - 1] === `+${Cn(k, 3)}`)]);
    const inside = (p: P) => VENN.filter((v) => len(v.c, p) < VR).map((v) => v.n).join('');
    out.push([`Each of the 7 "1"s stands in its own region, read off the drawing: ${REG610.map((r) => inside(r.p) || 'none').join(', ')}; 3 regions inside one set, 3 inside two, 1 inside all three`, REG610.every((r) => inside(r.p) === r.in) && new Set(REG610.map((r) => r.in)).size === 7]);
    out.push(['The three circles lie inside S, and A, B, C each name their own circle (outside the other two)', VENN.every((v) => v.c[0] - VR > 70 && v.c[0] + VR < 270 && v.c[1] - VR > 12 && v.c[1] + VR < 214)]);
    out.push(labelsCheck(s, ['S', 'A', 'B', 'C', 'each region is counted exactly once', 'in 1', 'in 2', 'in 3', 'set', 'sets', 'add singles', 'subtract pairs', 'add triple', 'net count', '+1', '+2', '+3', '−0', '−1', '−3', '+0', '|A ∪ B ∪ C| = Σ1 − Σ2 + Σ3', '(there are 3 regions of each middle type)']));
    out.push(['Seven region "1"s and the net count 1, 1, 1', s.labels.filter((l) => l.text === '1').length === 10]);
    out.push(noBadChars(s, fig610));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 6.11 · an onto map (Topic 06, p. 553)                          */
/* ===================================================================== */
const CAP611 = `An onto map from 6 objects to 4 boxes, fibres of size 3, 1, 1, 1: ${I('N')}(6, 4) = 1560.`;
const XS611 = [52, 88, 124, 168, 208, 248], YS611 = [88, 140, 192, 244], MAP611 = [0, 0, 0, 1, 2, 3];
const XX = 112, YX = 252;
const fig611: Diagram = {
  id: 'm11-06-fig-6.11',
  topic: 5,
  name: 'An onto map',
  cases: [{ chip: '6 objects onto 4 boxes', cap: CAP611 }],
  draw() {
    const s = new Sketch(W, 520);
    lab(s, 84, 22, `${I('X')}  (6 objects)`, { size: 14 });
    lab(s, 258, 22, `${I('Y')}  (4 boxes)`, { size: 14 });
    box(s, [XX - 14, XS611[0] - 16, XX + 14, XS611[2] + 16], { color: C.slate, w: 1.2, rx: 14, name: 'fibre:1' });
    XS611.slice(3).forEach((y, i) => ring(s, [XX, y], 14, { color: C.slate, w: 1.2, name: `fibre:${i + 2}` }));
    lab(s, 36, 84, 'fibres', { size: 13, color: C.slate });
    lab(s, 36, 104, `${I('f')}<sup>−1</sup>(${I('y')})`, { size: 13, color: C.slate });
    XS611.forEach((y, i) => { pt(s, [XX, y], `x${i + 1}`); lab(s, XX - 30, y + 5, sb(I('x'), String(i + 1)), { size: 15 }); });
    YS611.forEach((y, i) => { pt(s, [YX, y], `y${i + 1}`); lab(s, YX + 22, y + 5, sb(I('y'), String(i + 1)), { size: 15 }); });
    XS611.forEach((y, i) => { const t: P = [YX, YS611[MAP611[i]]], a: P = [XX + 6, y], d = len(a, t); arrow(s, a, [t[0] - ((t[0] - a[0]) * 7) / d, t[1] - ((t[1] - a[1]) * 7) / d], { color: C.ink, w: 1.4, name: `f:${i}` }); });
    lab(s, 20, 296, `every ${I('y')} receives at least one arrow: ${I('f')} is onto`, { size: 13, anchor: 'start' });
    runs(s, 20, 338, [{ t: `${I('N')}(6, 4) = ` }, { sum: true, bot: I('r') }, { t: `(−1)<sup>${I('r')}</sup>` }, { bn: ['4', I('r')] }, { t: `(4 − ${I('r')})<sup>6</sup>` }], { size: 14, anchor: 'start' });
    lab(s, 20, 376, '= 4096 − 2916 + 384 − 4 = 1560', { size: 14, anchor: 'start' });
    lab(s, 20, 408, `erase the labels on ${I('Y')} and`, { size: 13.5, anchor: 'start', color: C.amber });
    lab(s, 20, 430, '4! = 24 such pictures merge:', { size: 13.5, anchor: 'start', color: C.amber });
    runs(s, 20, 462, [{ t: `${I('S')}(6, 4) = ` }, { num: '1560', den: '24' }, { t: ' = 65' }], { size: 14, anchor: 'start', color: C.amber });
    lab(s, W / 2, 494, I('fibre sizes here are 3, 1, 1, 1:'), { size: 12.5, color: C.slate });
    lab(s, W / 2, 512, I(`the arrows reaching ${sb('y', '1')}, ${sb('y', '2')}, ${sb('y', '3')}, ${sb('y', '4')}`), { size: 12.5, color: C.slate });
    return s;
  },
  check() {
    const s = fig611.draw(fig611.cases[0]), out: Check[] = [];
    const terms = [0, 1, 2, 3, 4].map((r) => (-1) ** r * Cn(4, r) * (4 - r) ** 6), N = terms.reduce((a, b) => a + b, 0);
    let onto = 0;
    for (let f = 0; f < 4 ** 6; f++) { const hit = new Set(Array.from({ length: 6 }, (_, i) => Math.floor(f / 4 ** i) % 4)); if (hit.size === 4) onto++; }
    out.push([`Σ (−1)ʳ ⁴Cᵣ (4 − r)⁶ = ${terms.slice(0, 4).join(' ')} + 0 = ${N}; trying all 4⁶ = 4096 maps, ${onto} are onto`, N === 1560 && onto === 1560 && terms.slice(0, 4).join() === '4096,-2916,384,-4']);
    out.push([`S(6, 4) = 1560/4! = ${N / fact(4)}`, N / fact(4) === 65]);
    const ends = linesNamed(s, /^f:/).map((l) => YS611.findIndex((y) => Math.abs(l.pts[1][1] - y) < 3));
    const sizes = [0, 1, 2, 3].map((k) => ends.filter((e) => e === k).length);
    out.push([`Six arrows, one from each x; every y receives at least one (fibre sizes ${sizes.join(', ')}, as printed): f is onto`, ends.length === 6 && sizes.join() === '3,1,1,1']);
    out.push(labelsCheck(s, ['X  (6 objects)', 'Y  (4 boxes)', 'fibres', 'f−1(y)', 'x1', 'x2', 'x3', 'x4', 'x5', 'x6', 'y1', 'y2', 'y3', 'y4', 'every y receives at least one arrow: f is onto', 'N(6, 4) = ∑[r](−1)r(4 over r)(4 − r)6', '= 4096 − 2916 + 384 − 4 = 1560', 'erase the labels on Y and', '4! = 24 such pictures merge:', 'S(6, 4) = 1560/24 = 65', 'fibre sizes here are 3, 1, 1, 1:', 'the arrows reaching y1, y2, y3, y4']));
    out.push(stackedCheck(s, ['1560/24']));
    out.push(binomCheck(s, ['4 over r']));
    out.push(noBadChars(s, fig611));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Additional A's Figure 1 · the dictionary tree for AAGIN (p. 560)      */
/* ===================================================================== */
const CAPA1 = `Dictionary-order branching tree for the pool AAGIN: the four first-letter blocks with their sizes 24, 12, 12, 12 and cumulative ranges, the N sub-tree expanded to NA and NAA, and the ruler locating ${I('k')} = 50 at the word NAAIG.`;
type NodeA = { key: string; c: P; t: string; range?: string; hi?: boolean };
const NODESA: NodeA[] = [
  { key: 'AAGIN', c: [42, 150], t: 'AAGIN' },
  { key: 'A', c: [132, 64], t: 'A', range: '1–24' },
  { key: 'G', c: [132, 108], t: 'G', range: '25–36' },
  { key: 'I', c: [132, 152], t: 'I', range: '37–48' },
  { key: 'N', c: [132, 212], t: 'N', range: '49–60', hi: true },
  { key: 'NA', c: [222, 212], t: 'NA', range: '49–54', hi: true },
  { key: 'NG', c: [222, 258], t: 'NG', range: '55–57' },
  { key: 'NI', c: [222, 302], t: 'NI', range: '58–60' },
  { key: 'NAA', c: [304, 168], t: 'NAA', range: '49–50', hi: true },
  { key: 'NAG', c: [304, 212], t: 'NAG', range: '51–52' },
  { key: 'NAI', c: [304, 256], t: 'NAI', range: '53–54' },
];
const EDGESA: [string, string, number][] = [
  ['AAGIN', 'A', 24], ['AAGIN', 'G', 12], ['AAGIN', 'I', 12], ['AAGIN', 'N', 12],
  ['N', 'NA', 6], ['N', 'NG', 3], ['N', 'NI', 3], ['NA', 'NAA', 2], ['NA', 'NAG', 2], ['NA', 'NAI', 2],
];
const RULERA: [string, number][] = [['A', 24], ['G', 12], ['I', 12], ['N', 12]];
const RX0 = 20, RX1 = 320, RY = 348;
const nodeA = (n: NodeA) => nodeRect(n.c, n.t, 13, 5);
/** The words of a pool (with repeats), each once, in dictionary order. */
const words = (pool: string) => [...new Set(perms(pool.length).map((p) => p.map((i) => pool[i]).join('')))].sort();
const figA1: Diagram = {
  id: 'm11-06-A-d1',
  topic: 6,
  name: 'The dictionary tree for AAGIN',
  cases: [{ chip: 'AAGIN, k = 50', cap: CAPA1 }],
  draw() {
    const s = new Sketch(W, 410), by = (k: string) => NODESA.find((n) => n.key === k)!;
    lab(s, W / 2, 16, I('four branches, not five: the two A’s give one branch'), { size: 11.5, color: C.slate });
    NODESA.forEach((n) => {
      const r = nodeA(n);
      box(s, r, { color: n.hi ? C.mari : C.slate, w: n.hi ? 1.6 : 1.1, name: `node:${n.key}` });
      labC(s, n.c[0], n.c[1], n.t, { size: 13, color: n.hi ? C.amber : C.text });
      if (n.range) lab(s, n.c[0], r[1] - 7, n.range, { size: 10.5, color: n.hi ? C.amber : C.slate });
    });
    lab(s, 42, 180, '60 words', { size: 11, color: C.slate });
    EDGESA.forEach(([a, b, k]) => {
      const A = by(a), B = by(b), ra = nodeA(A), rb = nodeA(B), p: P = [ra[2] + 1, A.c[1]], q: P = [rb[0] - 1, B.c[1]];
      const hi = !!A.hi && !!B.hi || (a === 'AAGIN' && b === 'N'), m: P = [(p[0] + q[0]) / 2, (p[1] + q[1]) / 2];
      const lr = lab(s, m[0], m[1] + 4, String(k), { size: 11, color: hi ? C.amber : C.slate });
      const cut = (t: number): P => [p[0] + (q[0] - p[0]) * t, p[1] + (q[1] - p[1]) * t];
      // the line is broken round its number: up to where it would come within 5 px of the label, and on from there
      const N = 200, ok = Array.from({ length: N + 1 }, (_, i) => rectDist(lr, cut(i / N)) >= 5);
      const firstBad = ok.indexOf(false), lastBad = ok.lastIndexOf(false);
      path(s, [p, cut((firstBad - 1) / N)], { color: hi ? C.mari : C.slate, w: hi ? 2.2 : 1.2, name: `edge:${a}>${b}` });
      path(s, [cut((lastBad + 1) / N), q], { color: hi ? C.mari : C.slate, w: hi ? 2.2 : 1.2, name: `edge:${a}>${b}` });
    });
    box(s, [218, 30, 334, 60], { color: C.mari, w: 1.6, rx: 7, name: 'answer' });
    lab(s, 277, 49, `${I('k')} = 50 ⇒ NAAIG`, { size: 13, color: C.amber });
    // the ruler: 60 words, each block as wide as its count
    let x = RX0;
    RULERA.forEach(([l, n], i) => {
      const w = ((RX1 - RX0) * n) / 60, hi = l === 'N';
      box(s, [x, RY, x + w, RY + 20], { color: hi ? C.mari : C.slate, w: hi ? 1.6 : 1.1, rx: 0, name: `cell:${l}` });
      labC(s, x + w / 2, RY + 10, l, { size: 12, color: hi ? C.amber : C.text });
      lab(s, x + w / 2, RY + 34, NODESA[i + 1].range!, { size: 10.5, color: hi ? C.amber : C.slate });
      x += w;
    });
    const kx = RX0 + ((RX1 - RX0) * 49.5) / 60;
    arrow(s, [kx, RY - 16], [kx, RY - 2], { color: C.mari, w: 2, name: 'marker' });
    lab(s, kx, RY - 24, `${I('k')} = 50`, { size: 12, color: C.amber });
    lab(s, RX0, RY + 52, I('cumulative ruler over all 60 words'), { size: 11.5, anchor: 'start', color: C.slate });
    return s;
  },
  check() {
    const s = figA1.draw(figA1.cases[0]), out: Check[] = [], ws = words('AAGIN'), by = (k: string) => NODESA.find((n) => n.key === k)!;
    const block = (pre: string) => { const k = ws.filter((w) => w.startsWith(pre)); return k.length ? [ws.indexOf(k[0]) + 1, ws.indexOf(k[k.length - 1]) + 1] : [0, 0]; };
    out.push([`AAGIN has 5!/2! = ${fact(5) / fact(2)} words; listing them in dictionary order, the 50th is ${ws[49]}`, ws.length === 60 && ws[49] === 'NAAIG']);
    const bad = NODESA.filter((n) => n.range).filter((n) => { const [a, b] = block(n.t); return `${a}–${b}` !== n.range; }).map((n) => n.t);
    out.push([`Every node's range read from the list: ${NODESA.filter((n) => n.range).map((n) => `${n.t} ${block(n.t).join('–')}`).join(', ')}${bad.length ? `; wrong: ${bad.join(', ')}` : ''}`, bad.length === 0]);
    const badE = EDGESA.filter(([, b, k]) => { const [x, y] = block(by(b).t); return y - x + 1 !== k; });
    out.push(['Each branch carries its block size (A 4! = 24; G, I, N 4!/2! = 12; NA 3! = 6; NG, NI 3!/2! = 3; NAA, NAG, NAI 2! = 2); A gives one branch, not two', badE.length === 0]);
    let x = RX0;
    const cells = RULERA.map(([l, n]) => { const w = ((RX1 - RX0) * n) / 60; const r = [x, x + w]; x += w; return { l, r }; });
    const kx = linesNamed(s, /^marker$/)[0].pts[1][0], at = Math.floor(((kx - RX0) / (RX1 - RX0)) * 60) + 1;
    out.push([`The ruler's blocks are as wide as their counts (24 : 12 : 12 : 12 of 60), and the marker stands at word ${at}, in the N block`, at === 50 && kx > cells[3].r[0] && kx < cells[3].r[1]]);
    out.push(labelsCheck(s, ['four branches, not five: the two A’s give one branch', 'AAGIN', '60 words', 'A', 'G', 'I', 'N', 'NA', 'NG', 'NI', 'NAA', 'NAG', 'NAI', '1–24', '25–36', '37–48', '49–60', '49–54', '55–57', '58–60', '49–50', '51–52', '53–54', '24', '12', '6', '3', '2', 'k = 50 ⇒ NAAIG', 'k = 50', 'cumulative ruler over all 60 words']));
    out.push(noBadChars(s, figA1));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Additional B's Figure 2 · the 4 × 3 grid path (p. 565)                */
/* ===================================================================== */
const CAPB1 = `A monotonic path from ${I('A')}(0, 0) to ${I('B')}(4, 3) read off as the word RRURURU, with a second path shown faintly: each path is one arrangement of RRRRUUU, so there are ${bn('7', '4')} = 35 of them.`;
const GB = { ox: 96, oy: 186, u: 48 };
const BOLDB = 'RRURURU', FADEB = 'URRUURR';
const walk = (w: string): P[] => w.split('').reduce<P[]>((acc, m) => { const [x, y] = acc[acc.length - 1]; return [...acc, m === 'R' ? [x + 1, y] : [x, y + 1]]; }, [[0, 0]]);
const gpB = ([x, y]: P): P => [GB.ox + x * GB.u, GB.oy - y * GB.u];
const figB1: Diagram = {
  id: 'm11-06-B-d1',
  topic: 7,
  name: 'A path on the 4 × 3 grid',
  cases: [{ chip: '4 east, 3 north', cap: CAPB1 }],
  draw() {
    const s = new Sketch(W, 344);
    for (let x = 0; x <= 4; x++) path(s, [gpB([x, 0]), gpB([x, 3])], { color: C.slate, w: 0.7, name: 'grid' });
    for (let y = 0; y <= 3; y++) path(s, [gpB([0, y]), gpB([4, y])], { color: C.slate, w: 0.7, name: 'grid' });
    path(s, walk(FADEB).map(gpB), { color: C.slate, w: 1.8, dash: '6 4', name: 'faded' });
    path(s, walk(BOLDB).map(gpB), { color: C.mari, w: 3.2, name: 'bold' });
    for (let x = 0; x <= 4; x++) for (let y = 0; y <= 3; y++) if (!(x === 0 && y === 0) && !(x === 4 && y === 3)) pt(s, gpB([x, y]), `g${x}${y}`, C.slate, 2.6);
    pt(s, gpB([0, 0]), 'A', C.ink, 5); pt(s, gpB([4, 3]), 'B', C.ink, 5);
    lab(s, GB.ox - 12, GB.oy + 14, I('A'), { size: 16, anchor: 'end' });
    lab(s, GB.ox + 4 * GB.u + 12, GB.oy - 3 * GB.u - 8, I('B'), { size: 16, anchor: 'start' });
    lab(s, 50, GB.oy - 1.5 * GB.u - 4, '3 blocks', { size: 12, color: C.slate });
    lab(s, 50, GB.oy - 1.5 * GB.u + 12, 'north', { size: 12, color: C.slate });
    lab(s, GB.ox + 2 * GB.u, GB.oy + 24, '4 blocks east', { size: 12, color: C.slate });
    lab(s, 20, 244, 'bold path:', { size: 12, anchor: 'start', color: C.slate });
    lab(s, 20, 268, 'faded path:', { size: 12, anchor: 'start', color: C.slate });
    BOLDB.split('').forEach((m, i) => lab(s, 116 + i * 28, 244, m, { size: 14, color: C.amber }));
    FADEB.split('').forEach((m, i) => lab(s, 116 + i * 28, 268, m, { size: 14, color: C.slate }));
    lab(s, W / 2, 298, 'one path = one arrangement of RRRRUUU', { size: 13 });
    runs(s, W / 2, 330, [{ t: '(4 R’s, 3 U’s):  ' }, { num: '7!', den: '4! 3!' }, { t: ' = ' }, { bn: ['7', '4'] }, { t: ' = 35' }], { size: 13, anchor: 'middle' });
    return s;
  },
  check() {
    const s = figB1.draw(figB1.cases[0]), out: Check[] = [];
    let paths = 0;
    for (let m = 0; m < 2 ** 7; m++) { let r = 0; for (let i = 0; i < 7; i++) r += (m >> i) & 1; if (r === 4) paths++; }
    out.push([`Paths of 4 R and 3 U steps, listed: ${paths} = 7!/(4! 3!) = ⁷C₄ = ${Cn(7, 4)}`, paths === 35 && fact(7) / (fact(4) * fact(3)) === 35 && Cn(7, 4) === 35]);
    const read = (name: string) => { const pts = linesNamed(s, new RegExp(`^${name}$`))[0].pts.map((p): P => [(p[0] - GB.ox) / GB.u, (GB.oy - p[1]) / GB.u]); return pts.slice(1).map((p, i) => (p[0] > pts[i][0] ? 'R' : 'U')).join(''); };
    out.push([`Read off the drawing, the bold path is ${read('bold')} and the faded one ${read('faded')}, both from A(0, 0) to B(4, 3), as spelled under the grid`, read('bold') === BOLDB && read('faded') === FADEB]);
    out.push(['20 lattice points, A and B among them (filled dots, decision 10)', dotsOf(s).length === 20 && close(dotAt(s, 'B')![0] - dotAt(s, 'A')![0], 4 * GB.u) && close(dotAt(s, 'A')![1] - dotAt(s, 'B')![1], 3 * GB.u)]);
    out.push(labelsCheck(s, ['A', 'B', '3 blocks', 'north', '4 blocks east', 'bold path:', 'faded path:', 'R', 'U', 'one path = one arrangement of RRRRUUU', '(4 R’s, 3 U’s):  7!/4! 3! = (7 over 4) = 35']));
    out.push(stackedCheck(s, ['7!/4! 3!']));
    out.push(binomCheck(s, ['7 over 4']));
    out.push(noBadChars(s, figB1));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Additional C's Figure 3 · the divisor ladder for 360 (p. 570)         */
/* ===================================================================== */
const CAPC1 = `Divisor ladder for ${I('N')} = 360 = 2<sup>3</sup> · 3<sup>2</sup> · 5: one path down the three exponent columns picks one divisor (2<sup>2</sup>3<sup>0</sup>5<sup>1</sup> = 20), giving ${I('d')}(360) = 24; colouring whole columns instead of rungs gives the 2<sup>3</sup> = 8 coprime splits.`;
type CaseC = { chip: string; cap: string; panel: 'path' | 'columns' };
const COLSC: { p: number; x: number; rungs: [number, number][] }[] = [
  { p: 2, x: 80, rungs: [[3, 80], [2, 120], [1, 160], [0, 200]] },
  { p: 3, x: 170, rungs: [[2, 100], [1, 140], [0, 180]] },
  { p: 5, x: 260, rungs: [[1, 120], [0, 160]] },
];
const PICKC = [2, 0, 1];
const rungRect = (x: number, y: number): Rect => [x - 24, y - 14, x + 24, y + 14];
const figC1: Diagram = {
  id: 'm11-06-C-d1',
  topic: 8,
  name: 'The divisor ladder for 360',
  cases: [{ chip: 'One path, one divisor', cap: CAPC1, panel: 'path' }, { chip: 'Colour whole columns', cap: CAPC1, panel: 'columns' }],
  draw(c: CaseC) {
    const s = new Sketch(W, 300), one = c.panel === 'path';
    lab(s, W / 2, 24, one ? `${I('N')} = 360 = 2<sup>3</sup> · 3<sup>2</sup> · 5` : 'colour whole columns, never rungs', { size: 14 });
    COLSC.forEach((col, ci) => {
      lab(s, col.x, 54, String(col.p), { size: 15, color: C.slate });
      col.rungs.forEach(([e, y]) => {
        const hi = one ? PICKC[ci] === e : col.p === 3;
        box(s, rungRect(col.x, y), { color: hi ? C.mari : C.ink, w: hi ? 1.8 : 1.4, rx: 5, name: `rung:${col.p}^${e}` });
        labC(s, col.x, y, `${col.p}<sup>${e}</sup>`, { size: 14, color: hi && one ? C.amber : C.text });
      });
    });
    if (one) {
      const [a, b, d] = COLSC.map((col, ci) => rungRect(col.x, col.rungs.find(([e]) => e === PICKC[ci])![1]));
      path(s, [[a[2] - 10, a[3]], [b[0] + 12, b[1]]], { color: C.mari, w: 2.4, name: 'path' });
      path(s, [[b[2] - 12, b[1]], [d[0] + 10, d[3]]], { color: C.mari, w: 2.4, name: 'path' });
      lab(s, W / 2, 242, 'one path = one divisor', { size: 13, color: C.amber });
      lab(s, W / 2, 266, '2<sup>2</sup> · 3<sup>0</sup> · 5<sup>1</sup> = 20', { size: 14, color: C.amber });
      lab(s, W / 2, 290, `${I('d')}(360) = 4 · 3 · 2 = 24`, { size: 14 });
    } else {
      lab(s, 166, 242, `${I('a')} = 2<sup>3</sup> · 5 = 40,`, { size: 14, anchor: 'end' });
      lab(s, 184, 242, `${I('b')} = 3<sup>2</sup> = 9`, { size: 14, anchor: 'start', color: C.amber });
      lab(s, W / 2, 266, '2<sup>3</sup> = 8 colourings', { size: 13.5 });
      lab(s, W / 2, 290, '4 unordered coprime pairs', { size: 13.5 });
    }
    return s;
  },
  check(c: CaseC) {
    const s = figC1.draw(c), out: Check[] = [];
    const divs = Array.from({ length: 360 }, (_, i) => i + 1).filter((d) => 360 % d === 0);
    out.push([`360 = 2³ · 3² · 5 = ${2 ** 3 * 3 ** 2 * 5}; its divisors, listed, number ${divs.length} = (3 + 1)(2 + 1)(1 + 1) = 4 · 3 · 2; each column has one rung per exponent, 4, 3 and 2 rungs`, 2 ** 3 * 3 ** 2 * 5 === 360 && divs.length === 24 && COLSC.map((k) => k.rungs.length).join() === '4,3,2']);
    if (c.panel === 'path') {
      const P0 = linesNamed(s, /^path$/);
      out.push(['The highlighted path picks 2², 3⁰, 5¹, one rung in each column: 2² · 3⁰ · 5¹ = 20, a divisor of 360', P0.length === 2 && 2 ** 2 * 3 ** 0 * 5 ** 1 === 20 && 360 % 20 === 0]);
      out.push(labelsCheck(s, ['N = 360 = 23 · 32 · 5', 'one path = one divisor', '22 · 30 · 51 = 20', 'd(360) = 4 · 3 · 2 = 24']));
    } else {
      const pairs = divs.filter((a) => { const b = 360 / a; let x = a, y = b; while (y) [x, y] = [y, x % y]; return x === 1; });
      out.push([`Each of the 3 prime columns goes wholly to a or to b: 2³ = 8 ordered coprime pairs (a, b) with ab = 360 (listed: ${pairs.map((a) => `${a}·${360 / a}`).join(', ')}), so ${pairs.length / 2} unordered; the drawn one, a = 2³ · 5 = 40 and b = 3² = 9 (column 3, the highlight)`, pairs.length === 8 && 40 * 9 === 360 && pairs.includes(40)]);
      out.push(labelsCheck(s, ['colour whole columns, never rungs', 'a = 23 · 5 = 40,', 'b = 32 = 9', '23 = 8 colourings', '4 unordered coprime pairs']));
    }
    out.push(labelsCheck(s, ['2', '3', '5', '23', '22', '21', '20', '32', '31', '30', '51', '50'], 'The columns and rungs'));
    out.push(noBadChars(s, figC1));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Additional D's Figure 4 · five letters in envelopes (p. 575)          */
/* ===================================================================== */
const CAPD1 = `Exactly two of five letters in their own envelopes: ${sb(I('L'), '1')} and ${sb(I('L'), '2')} are the fixed pair, chosen in ${bn('5', '2')} = 10 ways, while ${sb(I('L'), '3')}, ${sb(I('L'), '4')}, ${sb(I('L'), '5')} form a 3-cycle (${sb(I('L'), '3')} → ${sb(I('E'), '4')}, ${sb(I('L'), '4')} → ${sb(I('E'), '5')}, ${sb(I('L'), '5')} → ${sb(I('E'), '3')}), one of the ${sb(I('D'), '3')} = 2 derangements, giving 10 × 2 = 20.`;
const XD = [86, 138, 190, 242, 294], LY = 70, EY = 150, BW = 20, BH = 15;
const SENDD = [0, 1, 3, 4, 2];
const figD1: Diagram = {
  id: 'm11-06-D-d1',
  topic: 9,
  name: 'Five letters in their envelopes',
  cases: [{ chip: 'Exactly two right', cap: CAPD1 }],
  draw() {
    const s = new Sketch(W, 282);
    runs(s, 20, 28, [{ t: 'chosen: ' }, { bn: ['5', '2'] }, { t: ' = 10 ways' }], { size: 13.5, anchor: 'start' });
    lab(s, 4, LY + 4, 'letters', { size: 11.5, anchor: 'start', color: C.slate });
    lab(s, 4, EY + 4, 'envelopes', { size: 11.5, anchor: 'start', color: C.slate });
    [0, 1].forEach((i) => box(s, [XD[i] - 25, LY - 23, XD[i] + 25, EY + 23], { color: C.slate, w: 1.2, rx: 5, dash: '4 3', name: `chosen:${i}` }));
    XD.forEach((x, i) => {
      box(s, [x - BW, LY - BH, x + BW, LY + BH], { color: C.ink, w: 1.5, rx: 5, name: `L${i + 1}` });
      labC(s, x, LY, sb(I('L'), String(i + 1)), { size: 14 });
      box(s, [x - BW, EY - BH, x + BW, EY + BH], { color: C.ink, w: 1.5, rx: 5, name: `E${i + 1}` });
      labC(s, x, EY, sb(I('E'), String(i + 1)), { size: 14 });
    });
    [0, 1].forEach((i) => arrow(s, [XD[i], LY + BH + 4], [XD[i], EY - BH - 3], { color: C.ink, w: 1.6, name: `send:${i}>${i}` }));
    [2, 3].forEach((i) => arrow(s, [XD[i] + 6, LY + BH + 2], [XD[SENDD[i]] - 6, EY - BH - 2], { color: C.mari, w: 1.8, name: `send:${i}>${SENDD[i]}` }));
    const a: P = [XD[4] + 12, LY + BH + 1], back = [...quad(a, [332, LY + 40], [330, EY + 10]), ...quad([330, EY + 10], [328, EY + 46], [286, EY + 46]).slice(1), ...quad([286, EY + 46], [XD[2], EY + 46], [XD[2], EY + BH + 10]).slice(1)];
    path(s, back, { color: C.mari, w: 1.8, name: 'send:4>2' });
    arrow(s, [XD[2], EY + BH + 10], [XD[2], EY + BH + 2], { color: C.mari, w: 1.8, name: 'send:4>2:head' });
    lab(s, W / 2, 234, `the other three deranged: ${sb(I('D'), '3')} = 2 ways`, { size: 13.5, color: C.amber });
    box(s, [118, 248, 222, 276], { color: C.mari, w: 1.6, rx: 7, name: 'result' });
    runs(s, W / 2, 267, [{ t: '10 × 2 = ' }, { t: '20', b: true }], { size: 14.5, anchor: 'middle', color: C.amber });
    return s;
  },
  check() {
    const s = figD1.draw(figD1.cases[0]), out: Check[] = [];
    const two = perms(5).filter((p) => p.filter((v, i) => v === i).length === 2).length, d3 = perms(3).filter((p) => p.every((v, i) => v !== i)).length;
    out.push([`Of the 5! = 120 ways to fill the envelopes, ${two} put exactly two letters right = ⁵C₂ × D₃ = ${Cn(5, 2)} × ${d3}`, two === 20 && Cn(5, 2) * d3 === 20 && d3 === 2]);
    const sends = linesNamed(s, /^send:\d>\d$/).map((l) => l.name.slice(5).split('>').map(Number));
    out.push([`Read off the drawing: ${sends.map(([i, j]) => `L${i + 1} → E${j + 1}`).join(', ')}: L₁ and L₂ in their own envelopes, L₃, L₄, L₅ all moved (a 3-cycle)`, sends.length === 5 && sends.every(([i, j]) => SENDD[i] === j) && [2, 3, 4].every((i) => SENDD[i] !== i) && new Set(SENDD).size === 5]);
    out.push(labelsCheck(s, ['chosen: (5 over 2) = 10 ways', 'letters', 'envelopes', 'L1', 'L2', 'L3', 'L4', 'L5', 'E1', 'E2', 'E3', 'E4', 'E5', 'the other three deranged: D3 = 2 ways', '10 × 2 = 20']));
    out.push(binomCheck(s, ['5 over 2']));
    out.push(noBadChars(s, figD1));
    out.push(...layout(s));
    return out;
  },
};

export const DIAGRAMS_MATHEMATICS_11_06: Diagram[] = [fig61, fig62, fig63, fig64, fig65, fig66, fig67, fig68, fig69, fig610, fig611, figA1, figB1, figC1, figD1];
