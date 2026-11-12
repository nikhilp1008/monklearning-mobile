import { C, LABEL_GAP, Rect, Sketch, mathW, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';
import { stixW } from '@/lib/diagrams/mathematics-11-03b';

/**
 * MATHEMATICS CLASS 11, CHAPTER 7 (Binomial Theorem): every drawing of the Master Reference book (October edition)
 * on pp. 581–674, redrawn. The numbered figures stand on their own "CHAPTER 7 · FIGURES" plates, the page after
 * their caption; the Additional Topics part prints its own "Figure 1–3" in the text.
 *
 *   Figure 7.1 (p. 583; caption p. 582), Pascal’s triangle, rows n = 0 to 5, Topic 01, topic index 0.
 *   Figure 7.2 (p. 626; caption p. 625), adding and subtracting the conjugate expansions, Additional A, index 8.
 *   Figure 7.3 (p. 626; caption p. 625), the parity split of the indices 0 to 8, Additional A, index 8.
 *   Figure 7.4 (p. 633; caption p. 632), the two divisibility filters on r = 0 … 10, Additional B, index 9.
 *   Figure 7.5 (p. 647; caption p. 646), the cube roots of unity and the coefficients of (1 + x)⁹, Topic 08, index 7.
 *   Additional D's "Figure 1" (p. 659), the 11 terms of (a + b)¹⁰ read both ways, m11-07-D-d1, index 11.
 *   Additional E's "Figure 2" (p. 663), the committee bins, m11-07-E-d1, index 12.
 *   Additional F's "Figure 3" (p. 668), the absorption ladder, m11-07-F-d1, index 13.
 *
 * ONE HIGHLIGHT. The book's orange is the marigold wherever it is the point of the drawing: 7.1 the 3, 3 and 6 and
 * their arrows; 7.2 the kept (green in the book) columns, their arrows and "doubles"; 7.3 the odd indices and the
 * difference line; 7.4 the "both" row, its dots and dashed lines and the title (green in the book); 7.5 the centroid ×
 * and 1 + ω + ω² = 0, and the bars C₀, C₃, C₆, C₉ with their values and the sum; D-d1 T₄ and T₈ and their arrow; E-d1
 * the three bins that count (green values in the book); F-d1 the factors pulled out. The book's other colours are ink
 * (7.2's cancel arrows and "cancels", 7.4's 5 | r row, E-d1's men) and its grey is slate.
 *
 * NO FILLS. The book's box fills (7.2's kept boxes, 7.3's blue and peach boxes, D-d1's T₄, T₆, T₈, E-d1's bins, F-d1's
 * coefficient boxes), 7.5's tinted triangle and grey bars, and E-d1's solid figures are outlines only. 7.5's orange
 * bars, the one solid shape the drawing is about, are marigold hatching inside a marigold outline. E-d1's greyed empty
 * bins are dashed slate outlines. Points stay filled dots (decision 10); 7.4's off-filter positions are small slate dots.
 *
 * DEPARTURES, for a phone: long lines are broken in two (7.3's two index lines and its axis line, 7.4's title, D-d1's
 * label, E-d1's instruction and F-d1's footer); 7.2's two panels and 7.5's two panels are chips, one panel each; 7.5's
 * sum is set over the bars, not inside the plot, and its gridlines stop at the bars (they would run through outlined
 * bars). Every fraction is stacked by hand (7.3's n/2 inside the floor and ceiling brackets, drawn tall; 7.5's ⅓),
 * except in an exponent (7.4's 2^((10 − r)/2) and 3^(r/5), as the text). No em dash.
 */

const W = 340;
type P = [number, number];
const fmt = (n: number, d = 2) => String(+n.toFixed(d)).replace('-', '−');
const len = (a: P, b: P) => Math.hypot(b[0] - a[0], b[1] - a[1]);
const plain = (html: string) => html.replace(/<[^>]+>/g, '');
const widthOf = (html: string, size: number) => Math.max(mathW(html, size), plain(html).length * size * 0.5);
const I = (t: string) => `<i>${t}</i>`;
const close = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) < tol;
const nC = (n: string, r: string) => `<sup>${n}</sup>${I('C')}<sub>${r}</sub>`;
const DEG = Math.PI / 180;
const pol = (c: P, r: number, deg: number): P => [c[0] + r * Math.cos(deg * DEG), c[1] - r * Math.sin(deg * DEG)];

/* ---------- counting ---------- */
const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
const Cn = (n: number, r: number) => (r < 0 || r > n ? 0 : fact(n) / (fact(r) * fact(n - r)));
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
/** No vulgar-fraction character, no em dash and no one-line fraction in anything the drawing shows (its texts: a stacked fraction is two; an exponent may keep its slash). */
const noBadChars = (s: Sketch, d: Diagram): Check => {
  // a fraction in an exponent keeps its slash (the house exception): the raised runs are left out of the slash test
  const flat = (h: string) => plain(h.replace(/<sup>[^<]*(?:<\/?i>[^<]*)*<\/sup>/g, ''));
  const all = [...s.texts.map((t) => flat(t.html)), d.name, ...d.cases.flatMap((c) => [c.chip, flat(c.cap)])].join(' ');
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
      // a step lower than the ∑'s foot, so the limit's top never touches the bottom stroke (Android check of Ch 7)
      s.text(cx, y + size * 1.1, p.bot, { size: size * SUM_LIM, color });
      grow([0, y - size * 1.05, 0, y + size * 1.27]);
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

/** n over 2 stacked inside tall floor (⌊ ⌋) or ceiling (⌈ ⌉) brackets, drawn as strokes; (x, y) its left end on the baseline. */
const FL_W = 6;
const flBoxW = (num: string, den: string, size: number) => fracW(num, den, size) + 2 * FL_W + 2;
function floorFrac(s: Sketch, x: number, y: number, kind: 'floor' | 'ceil', num: string, den: string, size: number, color: string): Rect {
  const w = flBoxW(num, den, size), axis = y - size * 0.27, r = frac(s, x + w / 2, axis, num, den, size, color), top = r[1] - 1, bot = r[3] + 1, foot = 4;
  const L = x + 2, R = x + w - 2, yf = kind === 'floor' ? bot : top;
  s.add(`<path d="M${r1(L + foot)} ${r1(yf)} L${r1(L)} ${r1(yf)} M${r1(L)} ${r1(top)} L${r1(L)} ${r1(bot)} M${r1(R - foot)} ${r1(yf)} L${r1(R)} ${r1(yf)} M${r1(R)} ${r1(top)} L${r1(R)} ${r1(bot)}" fill="none" stroke="${color}" stroke-width="1.1" stroke-linecap="round"/>`);
  return [x, top, x + w, bot];
}
/** A line of text runs around one floor or ceiling of a stacked fraction, registered as one label. */
function floorLine(s: Sketch, x: number, y: number, before: string, kind: 'floor' | 'ceil', num: string, den: string, after: string, size: number, color: string): Rect {
  // a leading space of `after` is set as a real gap (an SVG text drops it), so "⌋ + 1" never touches the bracket
  const body = after.replace(/^ +/, ''), gap = (after.length - body.length) * stixW(' ', size);
  const wa = stixW(before.replace(/ +$/, ''), size) + stixW(' ', size), wf = flBoxW(num, den, size), wb = gap + stixW(body, size), total = wa + wf + wb;
  const x0 = x - total / 2;
  // set by its end, a space short of the bracket: a font a little wider than the estimate then
  // grows the text leftwards, and the colon never runs into the bracket (Android check of Ch 7)
  s.text(x0 + wa - stixW(' ', size), y, before.replace(/ +$/, ''), { size, anchor: 'end', color });
  const fr = floorFrac(s, x0 + wa, y, kind, num, den, size, color);
  s.text(x0 + wa + wf + gap, y, body, { size, anchor: 'start', color });
  const bx: Rect = [x0, Math.min(y - size * 0.72, fr[1]), x0 + total, Math.max(y + size * 0.22, fr[3])];
  s.labels.push({ text: `${plain(before)}${kind === 'floor' ? '⌊' : '⌈'}${plain(num)}/${plain(den)}${kind === 'floor' ? '⌋' : '⌉'}${plain(after)}`, rect: bx });
  return bx;
}

/* ===================================================================== */
/* Figure 7.1 · Pascal’s triangle (Topic 01, p. 583)                     */
/* ===================================================================== */
const CAP71 = `Pascal’s triangle, rows ${I('n')} = 0 to 5: each entry inside the edges is the sum of the two above it.`;
const ROW71 = (n: number) => 34 + 54 * n, X71 = (n: number, k: number) => 160 + (2 * k - n) * 20;
const HI71 = ['3:1', '3:2', '4:2'];
const fig71: Diagram = {
  id: 'm11-07-fig-7.1',
  topic: 0,
  name: 'Pascal’s triangle',
  cases: [{ chip: 'Rows n = 0 to 5', cap: CAP71 }],
  draw() {
    const s = new Sketch(W, 322);
    for (let n = 0; n <= 5; n++) {
      const y = ROW71(n);
      lab(s, 6, y + 5, `${I('n')} = ${n}`, { size: 13, anchor: 'start', color: C.slate });
      lab(s, 274, y + 5, `(${I('a')} + ${I('b')})<sup>${n}</sup>`, { size: 13, anchor: 'start', color: C.slate });
      for (let k = 0; k <= n; k++) {
        const hi = HI71.includes(`${n}:${k}`);
        lab(s, X71(n, k), y + 5, String(Cn(n, k)), { size: 15, color: hi ? C.amber : C.text, semibold: hi });
      }
    }
    // each inner entry of row n + 1 gets an arrow from each of the two entries above it (the book draws none into row 1)
    for (let n = 1; n <= 4; n++)
      for (let k = 1; k <= n; k++)
        [k - 1, k].forEach((j) => {
          const a: P = [X71(n, j), ROW71(n)], b: P = [X71(n + 1, k), ROW71(n + 1)], hi = n === 3 && k === 2;
          arrow(s, [a[0] + 0.3 * (b[0] - a[0]), a[1] + 0.3 * (b[1] - a[1])], [a[0] + 0.72 * (b[0] - a[0]), a[1] + 0.72 * (b[1] - a[1])], { color: hi ? C.mari : C.slate, w: hi ? 1.8 : 1.1, name: `add:${n}.${j}>${n + 1}.${k}${hi ? ':hi' : ''}` });
        });
    lab(s, 274, (ROW71(3) + ROW71(4)) / 2 + 5, '3 + 3 = 6', { size: 13, anchor: 'start', color: C.amber });
    return s;
  },
  check() {
    const s = fig71.draw(fig71.cases[0]), out: Check[] = [];
    const rows = [[1]];
    for (let n = 1; n <= 5; n++) rows.push(Array.from({ length: n + 1 }, (_, k) => (rows[n - 1][k - 1] ?? 0) + (rows[n - 1][k] ?? 0)));
    out.push([`Built by the addition rule, the rows are ${rows.map((r) => r.join(' ')).join(' / ')}, and each is the row of ⁿCᵣ (the coefficients of (a + b)ⁿ)`, rows.every((r, n) => r.every((v, k) => v === Cn(n, k)))]);
    let poly = [1];
    for (let n = 1; n <= 5; n++) poly = [...poly, 0].map((v, i) => v + (poly[i - 1] ?? 0));
    out.push([`Multiplying out (a + b)⁵ gives the coefficients ${poly.join(', ')}, the bottom row`, poly.join() === rows[5].join()]);
    const adds = linesNamed(s, /^add:/), into = (n: number, k: number) => adds.filter((l) => l.name.split(':')[1].endsWith(`>${n}.${k}`));
    out.push([`Every inner entry of rows 2 to 5 has two arrows in, from the two entries above it (${adds.length} arrows)`, adds.length === 20 && [2, 3, 4, 5].every((n) => Array.from({ length: n - 1 }, (_, i) => i + 1).every((k) => into(n, k).length === 2))]);
    out.push(['The highlight: 3 + 3 = 6, the two 3s of row 3 and their two arrows into the 6 of row 4', linesNamed(s, /:hi$/).length === 2 && Cn(3, 1) + Cn(3, 2) === Cn(4, 2) && Cn(4, 2) === 6]);
    out.push(labelsCheck(s, ['n = 0', 'n = 1', 'n = 2', 'n = 3', 'n = 4', 'n = 5', '(a + b)0', '(a + b)1', '(a + b)2', '(a + b)3', '(a + b)4', '(a + b)5', '3 + 3 = 6', '10', '6']));
    out.push(noBadChars(s, fig71));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 7.2 · the conjugate expansions added and subtracted (Add. A)   */
/* ===================================================================== */
const CAP72 = `Adding conjugate expansions doubles the even-${I('r')} terms and cancels the odd.`;
const CAP72D = `Subtracting conjugate expansions doubles the odd-${I('r')} terms and cancels the even.`;
const AB4 = (op: string) => `(${I('a')} ${op} ${I('b')})<sup>4</sup>`;
const TOP72 = [`${I('a')}<sup>4</sup>`, `+ 4${I('a')}<sup>3</sup>${I('b')}`, `+ 6${I('a')}<sup>2</sup>${I('b')}<sup>2</sup>`, `+ 4${I('ab')}<sup>3</sup>`, `+ ${I('b')}<sup>4</sup>`];
const BOT72 = [`${I('a')}<sup>4</sup>`, `− 4${I('a')}<sup>3</sup>${I('b')}`, `+ 6${I('a')}<sup>2</sup>${I('b')}<sup>2</sup>`, `− 4${I('ab')}<sup>3</sup>`, `+ ${I('b')}<sup>4</sup>`];
const BX72 = (r: number) => 58 + 55.5 * r, BW72 = 53.5, TY72: [number, number] = [56, 84], LY72: [number, number] = [126, 154];
type Case72 = { chip: string; cap: string; op: '+' | '−' };
const fig72: Diagram = {
  id: 'm11-07-fig-7.2',
  topic: 8,
  name: 'Adding and subtracting conjugate expansions',
  cases: [
    { chip: 'The sum', cap: CAP72, op: '+' },
    { chip: 'The difference', cap: CAP72D, op: '−' },
  ],
  draw(c: Case72) {
    const s = new Sketch(W, 222), keepR = (r: number) => (c.op === '+' ? r % 2 === 0 : r % 2 === 1);
    lab(s, (BX72(0) + BX72(4) + BW72) / 2, 20, `${AB4('+')} ${c.op} ${AB4('−')}`, { size: 14 });
    lab(s, 4, (TY72[0] + TY72[1]) / 2 + 5, AB4('+'), { size: 12, anchor: 'start' });
    lab(s, 4, (LY72[0] + LY72[1]) / 2 + 5, AB4('−'), { size: 12, anchor: 'start' });
    for (let r = 0; r <= 4; r++) {
      const x = BX72(r), cx = x + BW72 / 2, kept = keepR(r), col = kept ? C.mari : C.slate;
      lab(s, cx, 44, `${I('r')} = ${r}`, { size: 12, color: C.slate });
      box(s, [x, TY72[0], x + BW72, TY72[1]], { color: col, w: kept ? 1.6 : 1.1, rx: 2, name: `top:${r}${kept ? ':kept' : ''}` });
      box(s, [x, LY72[0], x + BW72, LY72[1]], { color: col, w: kept ? 1.6 : 1.1, rx: 2, name: `bot:${r}${kept ? ':kept' : ''}` });
      labC(s, cx, (TY72[0] + TY72[1]) / 2, TOP72[r], { size: 12.5 });
      labC(s, cx, (LY72[0] + LY72[1]) / 2, BOT72[r], { size: 12.5 });
      both(s, [cx, TY72[1] + 6], [cx, LY72[0] - 6], { color: kept ? C.mari : C.slate, w: kept ? 1.5 : 1.1, name: kept ? `keep:${r}` : `cancel:${r}` });
      if (!kept) {
        const m = (TY72[1] + LY72[0]) / 2, k = 7;
        path(s, [[cx - k, m - k], [cx + k, m + k]], { color: C.text, w: 1.8, name: `cross:${r}` });
        path(s, [[cx - k, m + k], [cx + k, m - k]], { color: C.text, w: 1.8, name: `cross:${r}` });
      }
      lab(s, cx, 174, kept ? 'doubles' : 'cancels', { size: 12, color: kept ? C.amber : C.text });
    }
    lab(s, (BX72(0) + BX72(4) + BW72) / 2, 202, c.op === '+' ? `keeps the even values of ${I('r')}, doubled  (3 terms)` : `keeps the odd values of ${I('r')}, doubled  (2 terms)`, { size: 12.5, color: C.slate });
    return s;
  },
  check(c: Case72) {
    const s = fig72.draw(c), out: Check[] = [], sg = c.op === '+' ? 1 : -1;
    // (a + b)⁴ ± (a − b)⁴: the coefficient of a^(4−r) b^r is ⁴Cᵣ (1 ± (−1)^r)
    const coef = [0, 1, 2, 3, 4].map((r) => Cn(4, r) * (1 + sg * (-1) ** r));
    const keptR = coef.map((v, r) => (v ? r : -1)).filter((r) => r >= 0);
    out.push([`(a + b)⁴ ${c.op} (a − b)⁴ = ${coef.map((v, r) => (v ? `${v}a${4 - r}b${r}` : '')).filter(Boolean).join(' + ')}: the ${c.op === '+' ? 'even' : 'odd'} r (${keptR.join(', ')}) doubled, the rest cancel`, keptR.join() === (c.op === '+' ? '0,2,4' : '1,3') && keptR.every((r) => coef[r] === 2 * Cn(4, r))]);
    out.push([`The second row is the first with the odd-r signs flipped (−4a³b, −4ab³), as (a − b)⁴ = Σ ⁴Cᵣ (−1)ʳ a⁴⁻ʳ bʳ`, [1, 3].every((r) => BOT72[r].startsWith('−') && TOP72[r].startsWith('+')) && [2, 4].every((r) => BOT72[r].startsWith('+'))]);
    const kept = linesNamed(s, /^keep:/).map((l) => +l.name.split(':')[1]), cancel = linesNamed(s, /^cancel:/).map((l) => +l.name.split(':')[1]);
    out.push([`Kept columns (marigold, two-way arrow): ${kept.join(', ')}; crossed-out columns: ${cancel.join(', ')}; ${kept.length} terms`, kept.join() === keptR.join() && cancel.length + kept.length === 5 && new Set(linesNamed(s, /^cross:/).map((l) => l.name)).size === cancel.length && linesNamed(s, /:kept$/).length === 2 * kept.length]);
    out.push(labelsCheck(s, [c.op === '+' ? '(a + b)4 + (a − b)4' : '(a + b)4 − (a − b)4', '(a + b)4', '(a − b)4', 'r = 0', 'r = 4', 'a4', '+ 4a3b', '+ 6a2b2', '+ 4ab3', '+ b4', '− 4a3b', '− 4ab3', 'doubles', 'cancels', c.op === '+' ? 'keeps the even values of r, doubled  (3 terms)' : 'keeps the odd values of r, doubled  (2 terms)']));
    out.push(noBadChars(s, fig72));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 7.3 · the parity split (Additional A, p. 626)                  */
/* ===================================================================== */
const CAP73 = 'The parity split: the sum keeps the even indices, the difference the odd.';
const BX73 = (i: number) => 8 + 36 * i, BW73 = 34, BY73: [number, number] = [118, 156], AX73 = 176;
const fig73: Diagram = {
  id: 'm11-07-fig-7.3',
  topic: 8,
  name: 'The parity split',
  cases: [{ chip: 'n = 8', cap: CAP73 }],
  draw() {
    const s = new Sketch(W, 240), n = I('n');
    lab(s, W / 2, 22, `the sum (${I('a')} + ${I('b')})<sup>${n}</sup> + (${I('a')} − ${I('b')})<sup>${n}</sup>`, { size: 14 });
    floorLine(s, W / 2, 54, 'keeps the even indices: ', 'floor', n, '2', ' + 1 = 5', 14, C.text);
    floorLine(s, W / 2, 96, 'the difference keeps the odd indices: ', 'ceil', n, '2', ' = 4', 13.5, C.amber);
    for (let i = 0; i <= 8; i++) {
      const odd = i % 2 === 1, x = BX73(i), cx = x + BW73 / 2;
      box(s, [x, BY73[0], x + BW73, BY73[1]], { color: odd ? C.mari : C.ink, w: 1.6, rx: 2, name: `index:${i}${odd ? ':odd' : ''}` });
      labC(s, cx, (BY73[0] + BY73[1]) / 2, String(i), { size: 16, color: odd ? C.amber : C.text });
      path(s, [[cx, AX73], [cx, AX73 + 6]], { color: C.slate, w: 1.2, name: `tick:${i}` });
    }
    path(s, [[4, AX73], [336, AX73]], { color: C.slate, w: 1.3, name: 'axis' });
    lab(s, W / 2, 204, `term index ${I('r')} = 0, 1, …, ${n}`, { size: 13.5, color: C.slate });
    lab(s, W / 2, 226, `(here ${n} = 8, so ${n} + 1 = 9 terms)`, { size: 13.5, color: C.slate });
    return s;
  },
  check() {
    const s = fig73.draw(fig73.cases[0]), out: Check[] = [], n = 8;
    const even = Array.from({ length: n + 1 }, (_, r) => r).filter((r) => r % 2 === 0), odd = Array.from({ length: n + 1 }, (_, r) => r).filter((r) => r % 2 === 1);
    out.push([`n = 8: ${n + 1} terms; even indices ${even.join(', ')} (${even.length} = ⌊8/2⌋ + 1 = ${Math.floor(n / 2) + 1}), odd ${odd.join(', ')} (${odd.length} = ⌈8/2⌉ = ${Math.ceil(n / 2)})`, even.length === Math.floor(n / 2) + 1 && odd.length === Math.ceil(n / 2) && even.length === 5 && odd.length === 4]);
    const ok = Array.from({ length: 12 }, (_, m) => m + 1).every((m) => Array.from({ length: m + 1 }, (_, r) => r).filter((r) => r % 2 === 0).length === Math.floor(m / 2) + 1 && Array.from({ length: m + 1 }, (_, r) => r).filter((r) => r % 2 === 1).length === Math.ceil(m / 2));
    out.push(['And for every n from 1 to 12: ⌊n/2⌋ + 1 even indices, ⌈n/2⌉ odd ones', ok]);
    out.push([`Nine boxes 0 to 8 with a tick under each; the odd ones (${linesNamed(s, /:odd$/).length}) are the highlight`, linesNamed(s, /^index:/).length === 9 && linesNamed(s, /^tick:/).length === 9 && linesNamed(s, /:odd$/).length === 4]);
    out.push(labelsCheck(s, ['the sum (a + b)n + (a − b)n', 'keeps the even indices: ⌊n/2⌋ + 1 = 5', 'the difference keeps the odd indices: ⌈n/2⌉ = 4', '0', '1', '2', '3', '4', '5', '6', '7', '8', 'term index r = 0, 1, …, n', '(here n = 8, so n + 1 = 9 terms)']));
    out.push(stackedCheck(s, ['n/2', 'n/2']));
    out.push(noBadChars(s, fig73));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 7.4 · the two divisibility filters (Additional B, p. 633)      */
/* ===================================================================== */
const CAP74 = 'Rational terms occur only where both divisibility filters agree.';
const X74 = (r: number) => 108 + 21 * r, Y74 = { both: 72, five: 110, two: 148 }, AX74 = 182;
const ROWS74: { key: keyof typeof Y74; label: string; on: (r: number) => boolean }[] = [
  { key: 'both', label: 'both', on: (r) => (10 - r) % 2 === 0 && r % 5 === 0 },
  { key: 'five', label: `5 | ${I('r')}`, on: (r) => r % 5 === 0 },
  { key: 'two', label: `2 | (10 − ${I('r')})`, on: (r) => (10 - r) % 2 === 0 },
];
const fig74: Diagram = {
  id: 'm11-07-fig-7.4',
  topic: 9,
  name: 'Where both filters agree',
  cases: [{ chip: '(√2 + ⁵√3)¹⁰', cap: CAP74 }],
  draw() {
    const s = new Sketch(W, 258), r_ = I('r');
    lab(s, W / 2, 20, 'rational terms live where both filters agree:', { size: 13.5, color: C.amber });
    lab(s, W / 2, 40, `${r_} = 0 and ${r_} = 10`, { size: 13.5, color: C.amber });
    ROWS74.forEach((row) => {
      const y = Y74[row.key], hi = row.key === 'both';
      lab(s, 88, y + 4.5, row.label, { size: 13, anchor: 'end', color: hi ? C.amber : C.text });
      path(s, [[96, y], [330, y]], { color: C.slate, w: 0.8, name: `row:${row.key}` });
    });
    [0, 10].forEach((r) => path(s, [[X74(r), Y74.both - 8], [X74(r), Y74.two + 8]], { color: C.mari, w: 1.3, dash: '3 3', name: `agree:${r}` }));
    ROWS74.forEach((row) => {
      for (let r = 0; r <= 10; r++) {
        if (row.on(r)) pt(s, [X74(r), Y74[row.key]], `${row.key}:${r}`, row.key === 'both' ? C.mari : C.ink, 4.2);
        else pt(s, [X74(r), Y74[row.key]], `${row.key}:${r}:off`, C.slate, 1.9);
      }
    });
    path(s, [[96, AX74], [326, AX74]], { color: C.ink, w: 1.6, name: 'axis' });
    for (let r = 0; r <= 10; r++) {
      path(s, [[X74(r), AX74], [X74(r), AX74 + 6]], { color: C.slate, w: 1.1, name: `tick:${r}` });
      lab(s, X74(r), AX74 + 22, String(r), { size: 12.5, color: C.slate });
    }
    lab(s, 335, AX74 + 5, r_, { size: 15 });
    lab(s, W / 2, 242, `${I('T')}<sub>${r_}+1</sub> = ${nC('10', r_)} 2<sup>(10 − ${r_})/2</sup> 3<sup>${r_}/5</sup> in (√2 + <sup>5</sup>√3)<sup>10</sup>`, { size: 13.5, color: C.slate });
    return s;
  },
  check() {
    const s = fig74.draw(fig74.cases[0]), out: Check[] = [];
    // the term is rational exactly when both exponents (10 − r)/2 and r/5 are whole numbers
    const rational = Array.from({ length: 11 }, (_, r) => r).filter((r) => Number.isInteger((10 - r) / 2) && Number.isInteger(r / 5));
    out.push([`T(r+1) = ¹⁰Cᵣ 2^((10 − r)/2) 3^(r/5) is rational exactly for r = ${rational.join(', ')}: ${rational.length} rational terms`, rational.join() === '0,10']);
    const on = (k: string) => dotsOf(s).filter((d) => d.name.startsWith(`${k}:`) && !d.name.endsWith(':off')).map((d) => +d.name.split(':')[1]);
    out.push([`Big dots, read off the drawing: 2 | (10 − r) at ${on('two').join(', ')}; 5 | r at ${on('five').join(', ')}; both at ${on('both').join(', ')}`, on('two').join() === '0,2,4,6,8,10' && on('five').join() === '0,5,10' && on('both').join() === rational.join() && on('both').every((r) => on('two').includes(r) && on('five').includes(r))]);
    out.push(['Each dot stands over its r on the axis, 11 positions a row; the dashed lines stand at r = 0 and r = 10', dotsOf(s).length === 33 && dotsOf(s).every((d) => close(d.p[0], X74(+d.name.split(':')[1]))) && linesNamed(s, /^agree:/).map((l) => l.pts[0][0]).join() === `${X74(0)},${X74(10)}`]);
    out.push(labelsCheck(s, ['rational terms live where both filters agree:', 'r = 0 and r = 10', 'both', '5 | r', '2 | (10 − r)', '0', '5', '10', 'r', 'Tr+1 = 10Cr 2(10 − r)/2 3r/5 in (√2 + 5√3)10']));
    out.push(noBadChars(s, fig74));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 7.5 · cube roots of unity and the (1 + x)⁹ bars (Topic 08)     */
/* ===================================================================== */
const CAP75 = 'Cube roots of unity, and the every-third coefficients they select.';
const O75: P = [170, 132], R75 = 96;
const hiK75 = [0, 3, 6, 9];
const BARS75 = Array.from({ length: 10 }, (_, k) => Cn(9, k)), Y0_75 = 236, K75 = 1.08, BX75 = (k: number) => 64 + 27 * k, BW75 = 19;
type Case75 = { chip: string; cap: string; panel: 'roots' | 'bars' };
const fig75: Diagram = {
  id: 'm11-07-fig-7.5',
  topic: 7,
  name: 'Cube roots of unity and the every-third coefficients',
  cases: [
    { chip: 'Cube roots of unity', cap: CAP75, panel: 'roots' },
    { chip: 'Coefficients of (1 + x)⁹', cap: CAP75, panel: 'bars' },
  ],
  draw(c: Case75) {
    if (c.panel === 'roots') {
      const s = new Sketch(W, 290), O = O75, R = R75, w = I('ω'), v = [0, 120, 240].map((a) => pol(O, R, a));
      path(s, [[O[0] - R - 24, O[1]], [O[0] + R + 22, O[1]]], { color: C.slate, w: 1, name: 'axis:Re' });
      path(s, [[O[0], O[1] + R + 18], [O[0], O[1] - R - 22]], { color: C.slate, w: 1, name: 'axis:Im' });
      lab(s, O[0] + R + 26, O[1] + 5, 'Re', { size: 13.5, anchor: 'start', color: C.slate });
      lab(s, O[0] + 8, O[1] - R - 12, 'Im', { size: 13.5, anchor: 'start', color: C.slate });
      ring(s, O, R, { color: C.ink, w: 1.6, name: 'circle' });
      path(s, [...v, v[0]], { color: C.slate, w: 1.1, name: 'triangle' });
      [1, 2].forEach((k) => path(s, [O, v[k]], { color: C.slate, w: 0.9, name: `radius:${k}` }));
      v.forEach((p, k) => pt(s, p, ['1', 'ω', 'ω2'][k], C.ink, 4));
      lab(s, v[0][0] + 7, v[0][1] + 18, '1', { size: 16, anchor: 'start' });
      lab(s, ...pol(O, R + 20, 128), w, { size: 17 });
      lab(s, ...pol(O, R + 24, 234), `${w}<sup>2</sup>`, { size: 17 });
      lab(s, O[0] + R + 8, O[1] - 12, '0°', { size: 12, anchor: 'start', color: C.slate });
      lab(s, ...pol(O, R + 18, 106), '120°', { size: 12, color: C.slate });
      lab(s, ...pol(O, R + 22, 254), '240°', { size: 12, color: C.slate });
      const k = 5;
      path(s, [[O[0] - k, O[1] - k], [O[0] + k, O[1] + k]], { color: C.mari, w: 2.2, name: 'centroid' });
      path(s, [[O[0] - k, O[1] + k], [O[0] + k, O[1] - k]], { color: C.mari, w: 2.2, name: 'centroid' });
      lab(s, O[0], O[1] + R + 46, `1 + ${w} + ${w}<sup>2</sup> = 0`, { size: 17, color: C.amber });
      return s;
    }
    const s = new Sketch(W, 296), w = I('ω'), Ck = (k: number | string) => `${I('C')}<sub>${k}</sub>`, hiK = hiK75;
    lab(s, 8, 22, `${Ck(0)} + ${Ck(3)} + ${Ck(6)} + ${Ck(9)} = 170`, { size: 13.5, anchor: 'start', color: C.amber });
    runs(s, 8, 54, [{ t: '= ' }, { num: '1', den: '3' }, { t: `(2<sup>9</sup> + (1 + ${w})<sup>9</sup> + (1 + ${w}<sup>2</sup>)<sup>9</sup>)` }], { size: 13.5, anchor: 'start', color: C.amber });
    path(s, [[50, Y0_75 - 150], [50, Y0_75]], { color: C.slate, w: 1.2, name: 'axis:y' });
    path(s, [[50, Y0_75], [334, Y0_75]], { color: C.slate, w: 1.2, name: 'axis:x' });
    [0, 50, 100].forEach((t) => {
      const y = Y0_75 - K75 * t;
      lab(s, 44, y + 4.5, String(t), { size: 12, anchor: 'end', color: C.slate });
      if (!t) return;
      // the gridline runs only between the bars, never through an outlined bar or a bar's value
      const xs = [50, ...BARS75.flatMap((v, k) => (K75 * v + (hiK.includes(k) ? 22 : 0) > K75 * t - 1 ? [BX75(k) - BW75 / 2 - 3, BX75(k) + BW75 / 2 + 3] : [])), 334];
      for (let i = 0; i < xs.length; i += 2) if (xs[i + 1] - xs[i] > 2) path(s, [[xs[i] + (i ? 0 : 1), y], [xs[i + 1], y]], { color: C.slate, w: 0.6, name: `grid:${t}` });
    });
    BARS75.forEach((v, k) => {
      const hi = hiK.includes(k), x = BX75(k), top = Y0_75 - K75 * v, r: Rect = [x - BW75 / 2, top, x + BW75 / 2, Y0_75];
      box(s, r, { color: hi ? C.mari : C.ink, w: hi ? 1.5 : 1.1, rx: 0, name: `bar:${k}:${v}${hi ? ':hi' : ''}` });
      if (hi && v > 3) hatch(s, (p) => p[0] > r[0] + 1.5 && p[0] < r[2] - 1.5 && p[1] > r[1] + 1.5 && p[1] < r[3] - 1.5, r, { step: 5, gap: 0 });
      if (hi) lab(s, x, top - 7, String(v), { size: 12.5, color: C.amber });
      path(s, [[x, Y0_75], [x, Y0_75 + 5]], { color: C.slate, w: 1, name: `tick:${k}` });
      lab(s, x, Y0_75 + 20, Ck(k), { size: 12.5, color: C.slate });
    });
    lab(s, 192, 284, `coefficients of (1 + ${I('x')})<sup>9</sup>`, { size: 13.5, color: C.slate });
    return s;
  },
  check(c: Case75) {
    const s = fig75.draw(c), out: Check[] = [];
    type Cx = [number, number];
    const mul = (a: Cx, b: Cx): Cx => [a[0] * b[0] - a[1] * b[1], a[0] * b[1] + a[1] * b[0]], pw = (z: Cx, n: number) => Array.from({ length: n }, () => z).reduce<Cx>((a, b) => mul(a, b), [1, 0]);
    const w: Cx = [Math.cos((2 * Math.PI) / 3), Math.sin((2 * Math.PI) / 3)], w2 = mul(w, w);
    const filt = [pw([2, 0], 9), pw([1 + w[0], w[1]], 9), pw([1 + w2[0], w2[1]], 9)].reduce<Cx>((a, b) => [a[0] + b[0], a[1] + b[1]], [0, 0]);
    const every3 = BARS75.filter((_, k) => k % 3 === 0).reduce((a, b) => a + b, 0);
    out.push([`C₀ + C₃ + C₆ + C₉ = ${BARS75.filter((_, k) => k % 3 === 0).join(' + ')} = ${every3}; ⅓(2⁹ + (1 + ω)⁹ + (1 + ω²)⁹) = ⅓(512 − 1 − 1) = ${fmt(filt[0] / 3, 6)} (imaginary part ${fmt(filt[1], 9)})`, every3 === 170 && close(filt[0] / 3, 170, 1e-9) && close(filt[1], 0, 1e-9)]);
    if (c.panel === 'roots') {
      const zs = dotsOf(s).map((d): Cx => [(d.p[0] - O75[0]) / R75, (O75[1] - d.p[1]) / R75]);
      out.push([`Three dots on the unit circle at 0°, 120°, 240°, each a cube root of 1 (z³ = ${zs.map((z) => fmt(pw(z, 3)[0], 6)).join(', ')}); they add to (${fmt(zs.reduce((a, z) => a + z[0], 0), 9)}, ${fmt(zs.reduce((a, z) => a + z[1], 0), 9)}): 1 + ω + ω² = 0, the centroid × at the centre`, zs.length === 3 && zs.every((z) => close(pw(z, 3)[0], 1, 1e-9) && close(pw(z, 3)[1], 0, 1e-9)) && close(zs.reduce((a, z) => a + z[0], 0), 0, 1e-9) && close(zs.reduce((a, z) => a + z[1], 0), 0, 1e-9) && close(zs[1][1], Math.sin((2 * Math.PI) / 3), 1e-9)]);
      out.push(labelsCheck(s, ['Re', 'Im', '1', 'ω', 'ω2', '0°', '120°', '240°', '1 + ω + ω2 = 0']));
      // each root's name and angle sit beside their own dot (nearer it than either other dot), and the × is at the centre O
      const ds = dotsOf(s), mid = (r: Rect): P => [(r[0] + r[2]) / 2, (r[1] + r[3]) / 2];
      const besideOwn = ([t, i]: [string, number]) => s.labels.filter((l) => l.text === t).some((l) => ds.every((d, j) => j === i || len(mid(l.rect), ds[i].p) < len(mid(l.rect), d.p)));
      const pairs: [string, number][] = [['1', 0], ['0°', 0], ['ω', 1], ['120°', 1], ['ω2', 2], ['240°', 2]];
      out.push(['Each root’s name and angle stand beside its own dot: 1 and 0°, ω and 120°, ω² and 240°', ds.length === 3 && pairs.every(besideOwn)]);
      const cx = linesNamed(s, /^centroid$/).flatMap((l) => l.pts), cm: P = [cx.reduce((a, p) => a + p[0], 0) / cx.length, cx.reduce((a, p) => a + p[1], 0) / cx.length];
      out.push(['The marigold × (the centroid, where 1 + ω + ω² = 0 puts it) is drawn at the centre O of the circle', cx.length === 4 && close(cm[0], O75[0], 1e-9) && close(cm[1], O75[1], 1e-9)]);
    } else {
      const bars = linesNamed(s, /^bar:/).map((l) => ({ k: +l.name.split(':')[1], v: +l.name.split(':')[2], h: Y0_75 - Math.min(...l.pts.map((p) => p[1])), hi: l.name.endsWith(':hi') }));
      out.push([`Ten bars, the coefficients of (1 + x)⁹: ${bars.map((b) => b.v).join(', ')}, each as tall as its value (${fmt(K75)} px a unit)`, bars.length === 10 && bars.every((b) => b.v === Cn(9, b.k) && close(b.h, K75 * b.v, 1e-6))]);
      out.push(['The highlighted bars are C₀, C₃, C₆, C₉, every third one', bars.filter((b) => b.hi).map((b) => b.k).join() === '0,3,6,9']);
      out.push(labelsCheck(s, ['C0 + C3 + C6 + C9 = 170', '= 1/3(29 + (1 + ω)9 + (1 + ω2)9)', '0', '50', '100', '1', '84', 'C0', 'C9', 'coefficients of (1 + x)9']));
      // each highlighted bar carries its own value, centred over it and just above its top
      const vals = hiK75.map((k) => s.labels.filter((l) => l.text === String(Cn(9, k)) && close((l.rect[0] + l.rect[2]) / 2, BX75(k), 1e-6) && l.rect[3] <= Y0_75 - K75 * Cn(9, k) && l.rect[3] > Y0_75 - K75 * Cn(9, k) - 12).length);
      out.push([`Each highlighted bar carries its own value over it: ${hiK75.map((k) => `C${k} = ${Cn(9, k)}`).join(', ')}`, vals.every((v) => v === 1)]);
      out.push(stackedCheck(s, ['1/3']));
    }
    out.push(noBadChars(s, fig75));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Additional D's Figure 1 · the 11 terms read both ways (p. 659)        */
/* ===================================================================== */
const CAPD1 = `The 11 terms of (${I('a')} + ${I('b')})<sup>10</sup> read in both directions: the 4th from the beginning (${I('T')}<sub>4</sub>) and the 4th from the end (${I('T')}<sub>8</sub>) share the coefficient ${nC('10', '3')} = 120 with ${I('a')} and ${I('b')} swapped, and the central term ${I('T')}<sub>6</sub> is its own mirror.`;
const XD1 = (i: number) => 12 + 29 * i, BWD = 27, BYD: [number, number] = [82, 110];
const figD1: Diagram = {
  id: 'm11-07-D-d1',
  topic: 11,
  name: 'The terms read from both ends',
  cases: [{ chip: '(a + b)¹⁰, 11 terms', cap: CAPD1 }],
  draw() {
    const s = new Sketch(W, 232), T = (k: number) => `${I('T')}<sub>${k}</sub>`, cx = (i: number) => XD1(i) + BWD / 2;
    lab(s, W / 2, 20, `counting from the beginning: index ${I('r')} = ${I('p')} − 1`, { size: 12.5 });
    arrow(s, [12, 34], [329, 34], { color: C.ink, w: 1.3, name: 'forward' });
    lab(s, cx(5), 68, `${T(6)}: its own mirror`, { size: 12.5 });
    for (let i = 0; i < 11; i++) {
      const hi = i === 3 || i === 7, mid = i === 5;
      box(s, [XD1(i), BYD[0], XD1(i) + BWD, BYD[1]], { color: hi ? C.mari : mid ? C.ink : C.slate, w: hi ? 1.6 : mid ? 2 : 1.1, rx: 2, name: `T${i + 1}${hi ? ':hi' : ''}${mid ? ':mid' : ''}` });
      labC(s, cx(i), (BYD[0] + BYD[1]) / 2, T(i + 1), { size: 12.5, color: hi ? C.amber : C.text });
    }
    const a: P = [cx(3), BYD[1] + 5], b: P = [cx(7), BYD[1] + 5], arc = quad(a, [(a[0] + b[0]) / 2, BYD[1] + 50], b);
    path(s, arc.slice(2, -2), { color: C.mari, w: 1.6, name: 'swap' });
    arrow(s, arc[3], a, { color: C.mari, w: 1.6, name: 'swap:head' });
    arrow(s, arc[arc.length - 4], b, { color: C.mari, w: 1.6, name: 'swap:head' });
    lab(s, W / 2, 162, '4th from the beginning and 4th from the end:', { size: 12.5, color: C.amber });
    lab(s, W / 2, 180, `same ${nC('10', '3')} = 120, parts swapped`, { size: 12.5, color: C.amber });
    arrow(s, [329, 196], [12, 196], { color: C.slate, w: 1.3, name: 'backward' });
    lab(s, 12, 218, 'counting from the end', { size: 12, anchor: 'start', color: C.slate });
    lab(s, 329, 218, `(${I('a')} + ${I('b')})<sup>10</sup>: ${I('n')} + 1 = 11 terms`, { size: 12, anchor: 'end', color: C.slate });
    return s;
  },
  check() {
    const s = figD1.draw(figD1.cases[0]), out: Check[] = [], n = 10, p = 4;
    // the pth term from the beginning is T(p) with r = p − 1; the pth from the end is T(n + 2 − p)
    const fromEnd = n + 2 - p;
    out.push([`(a + b)¹⁰ has n + 1 = ${n + 1} terms; the 4th from the end is T${fromEnd} (index r = ${fromEnd - 1}), and ¹⁰C₃ = ${Cn(10, 3)} = ¹⁰C₇ = ${Cn(10, 7)}: T₄ = 120a⁷b³, T₈ = 120a³b⁷, the parts swapped`, fromEnd === 8 && Cn(10, 3) === 120 && Cn(10, 7) === 120]);
    out.push([`The middle term of 11 is T${(n + 2) / 2} = T₆, the 6th from either end, its own mirror`, (n + 2) / 2 === 6 && n + 2 - 6 === 6]);
    out.push(['Eleven boxes T₁ … T₁₁; T₄ and T₈ are the highlight, joined by the two-way arrow; T₆ is boxed in ink', linesNamed(s, /^T\d+/).length === 11 && linesNamed(s, /^T\d+:hi$/).map((l) => l.name).join() === 'T4:hi,T8:hi' && linesNamed(s, /:mid$/).map((l) => l.name).join() === 'T6:mid' && linesNamed(s, /^swap:head$/).length === 2]);
    out.push(labelsCheck(s, ['counting from the beginning: index r = p − 1', 'T6: its own mirror', 'T1', 'T4', 'T8', 'T11', '4th from the beginning and 4th from the end:', 'same 10C3 = 120, parts swapped', 'counting from the end', '(a + b)10: n + 1 = 11 terms']));
    out.push(noBadChars(s, figD1));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Additional E's Figure 2 · the committee bins (p. 663)                 */
/* ===================================================================== */
const CAPE1 = `Every committee of ${I('p')} lands in exactly one bin, so the bins must total ${nC(`${I('m')}+${I('n')}`, I('p'))}: here ${I('m')} = 3 women, ${I('n')} = 4 men and ${I('p')} = 5, where the bins ${I('k')} = 0, 4, 5 ask for an impossible choice and contribute nothing, and the rest total 3 + 12 + 6 = 21 = ${nC('7', '5')}.`;
const XE1 = (k: number) => 6 + 55 * k, BWE = 51, BYE: [number, number] = [142, 194];
/** A person drawn in outline: a round head and a rounded body. */
function person(s: Sketch, x: number, y: number, name: string) {
  ring(s, [x, y], 5.5, { color: C.ink, w: 1.5, name: `head:${name}` });
  s.add(`<path d="M${x - 8} ${y + 26} L${x - 8} ${y + 16} Q${x - 8} ${y + 8} ${x} ${y + 8} Q${x + 8} ${y + 8} ${x + 8} ${y + 16} L${x + 8} ${y + 26} Z" fill="none" stroke="${C.ink}" stroke-width="1.5" stroke-linejoin="round"/>`);
  keep(s, [[x - 8, y + 26], [x - 8, y + 12], [x, y + 8], [x + 8, y + 12], [x + 8, y + 26], [x - 8, y + 26]], `body:${name}`);
}
const figE1: Diagram = {
  id: 'm11-07-E-d1',
  topic: 12,
  name: 'The committee bins',
  cases: [{ chip: 'm = 3, n = 4, p = 5', cap: CAPE1 }],
  draw() {
    const s = new Sketch(W, 276), k_ = I('k');
    lab(s, 80, 18, `${I('m')} = 3 women`, { size: 13 });
    lab(s, 246, 18, `${I('n')} = 4 men`, { size: 13 });
    [56, 80, 104].forEach((x, i) => person(s, x, 36, `w${i}`));
    [210, 234, 258, 282].forEach((x, i) => person(s, x, 36, `m${i}`));
    lab(s, W / 2, 90, `choose a committee of ${I('p')} = 5,`, { size: 12.5, color: C.slate });
    lab(s, W / 2, 108, `split by the number ${k_} of women`, { size: 12.5, color: C.slate });
    for (let k = 0; k <= 5; k++) {
      const v = Cn(3, k) * Cn(4, 5 - k), x = XE1(k), cx = x + BWE / 2, live = v > 0, tc = live ? C.text : C.slate;
      lab(s, cx, 132, `${k_} = ${k}`, { size: 11.5, color: tc });
      box(s, [x, BYE[0], x + BWE, BYE[1]], { color: live ? C.mari : C.slate, w: live ? 1.6 : 1, rx: 2, dash: live ? undefined : '3 3', name: `bin:${k}:${v}` });
      lab(s, cx, 164, `${nC('3', String(k))} ${nC('4', String(5 - k))}`, { size: 12, color: tc });
      lab(s, cx, 185, `= ${v}`, { size: 12.5, color: live ? C.amber : C.slate });
      if (!live) lab(s, cx, 212, `${Cn(3, k) ? nC('4', String(5 - k)) : nC('3', String(k))} = 0`, { size: 10.5, color: C.slate });
    }
    runs(s, W / 2, 250, [{ sum: true, bot: k_ }, { t: `${nC('3', k_)} ${nC('4', `5 − ${k_}`)} = 3 + 12 + 6 = 21 = ${nC('7', '5')}` }], { size: 13.5, anchor: 'middle' });
    return s;
  },
  check() {
    const s = figE1.draw(figE1.cases[0]), out: Check[] = [];
    const people = [0, 1, 2, 3, 4, 5, 6], committees = subsets(7, 5), byK = [0, 1, 2, 3, 4, 5].map((k) => committees.filter((c) => c.filter((x) => x < 3).length === k).length);
    out.push([`Listing all ${committees.length} committees of 5 from ${people.length} (⁷C₅ = ${Cn(7, 5)}) and sorting by the number k of women (people 1–3): ${byK.join(', ')} for k = 0 … 5`, committees.length === 21 && Cn(7, 5) === 21 && byK.join() === '0,3,12,6,0,0']);
    out.push([`Each bin is ³Cₖ ⁴C₅₋ₖ: ${[0, 1, 2, 3, 4, 5].map((k) => Cn(3, k) * Cn(4, 5 - k)).join(', ')}; k = 0 is empty as ⁴C₅ = 0, k = 4, 5 as ³C₄ = ³C₅ = 0`, [0, 1, 2, 3, 4, 5].every((k) => Cn(3, k) * Cn(4, 5 - k) === byK[k]) && Cn(4, 5) === 0 && Cn(3, 4) === 0 && Cn(3, 5) === 0]);
    const bins = linesNamed(s, /^bin:/).map((l) => +l.name.split(':')[2]);
    out.push([`Six bins drawn with the values ${bins.join(', ')}; 3 women and 4 men drawn`, bins.join() === byK.join() && linesNamed(s, /^head:w/).length === 3 && linesNamed(s, /^head:m/).length === 4]);
    out.push(labelsCheck(s, ['m = 3 women', 'n = 4 men', 'choose a committee of p = 5,', 'split by the number k of women', 'k = 0', 'k = 5', '3C0 4C5', '3C1 4C4', '3C2 4C3', '3C3 4C2', '3C4 4C1', '3C5 4C0', '= 0', '= 3', '= 12', '= 6', '4C5 = 0', '3C4 = 0', '3C5 = 0', '∑[k]3Ck 4C5 − k = 3 + 12 + 6 = 21 = 7C5']));
    out.push(noBadChars(s, figE1));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Additional F's Figure 3 · the absorption ladder (p. 668)              */
/* ===================================================================== */
const CAPF1 = `The absorption ladder: each step down the ladder swallows one more factor of the falling-factorial weight and drops both indices by one more, pulling out 1, then ${I('n')}, then ${I('n')}(${I('n')} − 1), then ${I('n')}(${I('n')} − 1)(${I('n')} − 2).`;
const RUNGS: { w: string; f: string; c: string; k: number }[] = (() => {
  const n = I('n'), r = I('r'), nCr = nC(n, r);
  return [
    { w: `1 · ${nCr}`, f: '× 1', c: nCr, k: 0 },
    { w: `${r} · ${nCr}`, f: `× ${n}`, c: nC(`${n}−1`, `${r}−1`), k: 1 },
    { w: `${r}(${r} − 1) · ${nCr}`, f: `× ${n}(${n} − 1)`, c: nC(`${n}−2`, `${r}−2`), k: 2 },
    { w: `${r}(${r} − 1)(${r} − 2) · ${nCr}`, f: `× ${n}(${n} − 1)(${n} − 2)`, c: nC(`${n}−3`, `${r}−3`), k: 3 },
  ];
})();
const YF = (k: number) => 52 + 60 * k, LXF = 78, RXF = 296;
const figF1: Diagram = {
  id: 'm11-07-F-d1',
  topic: 13,
  name: 'The absorption ladder',
  cases: [{ chip: 'Four rungs', cap: CAPF1 }],
  draw() {
    const s = new Sketch(W, 296);
    lab(s, LXF, 20, 'weight', { size: 12, color: C.slate });
    lab(s, 284, 20, 'reduced coefficient', { size: 11.5, color: C.slate });
    RUNGS.forEach((g) => {
      const y = YF(g.k), lw = widthOf(g.w, 12.5) + 14, rw = widthOf(g.c, 13) + 14;
      box(s, [LXF - lw / 2, y - 14, LXF + lw / 2, y + 14], { color: C.slate, w: 1.1, rx: 5, name: `weight:${g.k}` });
      labC(s, LXF, y, g.w, { size: 12.5 });
      box(s, [RXF - rw / 2, y - 14, RXF + rw / 2, y + 14], { color: C.ink, w: 1.6, rx: 5, name: `coef:${g.k}` });
      labC(s, RXF, y, g.c, { size: 13 });
      arrow(s, [157, y], [260, y], { color: C.mari, w: 1.6, name: `pull:${g.k}` });
      lab(s, 208.5, y - 8, g.f, { size: 11.5, color: C.amber });
      if (g.k < 3) {
        arrow(s, [LXF, y + 19], [LXF, YF(g.k + 1) - 19], { color: C.slate, w: 1.2, name: `down:weight:${g.k}` });
        arrow(s, [RXF, y + 19], [RXF, YF(g.k + 1) - 19], { color: C.slate, w: 1.2, name: `down:coef:${g.k}` });
      }
    });
    lab(s, W / 2, 268, 'each step down swallows one more factor', { size: 12.5, color: C.slate });
    lab(s, W / 2, 286, 'and drops both indices by one more', { size: 12.5, color: C.slate });
    return s;
  },
  check() {
    const s = figF1.draw(figF1.cases[0]), out: Check[] = [];
    const ff = (x: number, k: number) => Array.from({ length: k }, (_, i) => x - i).reduce((a, b) => a * b, 1);
    // r(r − 1)⋯(r − k + 1) · ⁿCᵣ = n(n − 1)⋯(n − k + 1) · ⁿ⁻ᵏCᵣ₋ₖ, for every n ≤ 12, k ≤ 3, k ≤ r ≤ n
    const ok = Array.from({ length: 12 }, (_, i) => i + 1).every((n) => [0, 1, 2, 3].every((k) => Array.from({ length: n + 1 }, (_, r) => r).filter((r) => r >= k && n >= k).every((r) => ff(r, k) * Cn(n, r) === ff(n, k) * Cn(n - k, r - k))));
    out.push(['Each rung, checked for every n ≤ 12 and r: 1 · ⁿCᵣ = 1 · ⁿCᵣ, r ⁿCᵣ = n ⁿ⁻¹Cᵣ₋₁, r(r − 1) ⁿCᵣ = n(n − 1) ⁿ⁻²Cᵣ₋₂, r(r − 1)(r − 2) ⁿCᵣ = n(n − 1)(n − 2) ⁿ⁻³Cᵣ₋₃', ok]);
    out.push(['Four rungs, each with its weight, the factor pulled out (a marigold arrow) and the reduced coefficient; down arrows join the rungs in both columns', linesNamed(s, /^pull:/).length === 4 && linesNamed(s, /^weight:/).length === 4 && linesNamed(s, /^coef:/).length === 4 && linesNamed(s, /^down:/).length === 6]);
    out.push(labelsCheck(s, ['weight', 'reduced coefficient', '1 · nCr', 'r · nCr', 'r(r − 1) · nCr', 'r(r − 1)(r − 2) · nCr', '× 1', '× n', '× n(n − 1)', '× n(n − 1)(n − 2)', 'nCr', 'n−1Cr−1', 'n−2Cr−2', 'n−3Cr−3', 'each step down swallows one more factor', 'and drops both indices by one more']));
    out.push(noBadChars(s, figF1));
    out.push(...layout(s));
    return out;
  },
};

export const DIAGRAMS_MATHEMATICS_11_07: Diagram[] = [fig71, fig72, fig73, fig74, fig75, figD1, figE1, figF1];
