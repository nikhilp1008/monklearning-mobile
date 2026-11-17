import { C, Rect, Sketch, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';
import { I, P, W, close, dotNamed, fmt, lab, labelsCheck, layout, linesNamed, marigoldOnly, noBadChars, path, pt } from '@/lib/diagrams/mathematics-12-07';

/**
 * MATHEMATICS CLASS 12, CHAPTER 13 (Probability): Figures 13.1–13.3 of the Master Reference book (October 2026
 * snapshot, math12.pdf), redrawn. Each stands on its own "CHAPTER 13 · FIGURES" plate, the page after its caption.
 *
 *   Figure 13.1 (p. 825; caption p. 824): Topic 02 (Total Probability and Bayes), index 1.
 *   Figure 13.2 (p. 832; caption p. 831): Topic 03 (Random variables), index 2.
 *   Figure 13.3 (p. 845; caption p. 844): Topic 04 (Binomial distribution), index 3, after worked example 4, whose
 *   archer (n = 6, p = 0.8) it draws (DECISIONS-M12 item 50).
 *
 * EVERY NUMBER FROM ITS DATA. 13.1's priors 0.5, 0.3, 0.2 and likelihoods 0.8, 0.6, 0.1 are the book's; the path
 * products, P(A) and the posteriors on the drawing are computed from them and printed as the book rounds them.
 * 13.2's bars are the counts of heads over the 8 outcomes of 3 tosses; its beam's blocks hang under the bars, their
 * heights in proportion to p, and the pivot stands at E(X). 13.3's bars are C(6, r)(0.8)^r(0.2)^(6 − r).
 *
 * THE BOOK'S Ā IS A′. The non-occurrence branches of 13.1 are labelled P(A′ | Eᵢ), the chapter's complement sign
 * (DECISIONS-M12 item 50).
 *
 * ONE HIGHLIGHT (marigold lines, amber words), standing for the book's orange or green: 13.1 the three A-paths
 * (the book's green branches; its orange posteriors are ink); 13.2 the balance point at the beam's pivot (the book's
 * orange dot); 13.3 the mode's bar (the book's orange bar; its orange dashed mean line is ink). No fills: the book's
 * pale bars, blocks and pivot are outlines. Every fraction on a drawing is stacked by hand.
 */

/** A stacked fraction centred on x, its rule at y; both parts are labels. */
function stack(s: Sketch, x: number, y: number, num: string, den: string, size: number, color: string = C.text): Rect {
  const a = lab(s, x, y - 4, num, { size, color }), b = lab(s, x, y + 4 + size * 0.68, den, { size, color });
  const w = Math.max(a[2] - a[0], b[2] - b[0]) + 4;
  s.add(`<line x1="${r1(x - w / 2)}" y1="${r1(y)}" x2="${r1(x + w / 2)}" y2="${r1(y)}" stroke="${color}" stroke-width="1.1"/>`);
  return [x - w / 2, a[1], x + w / 2, b[3]];
}
const box = (s: Sketch, r: Rect, name: string, color: string = C.ink, w = 1.8) => path(s, [[r[0], r[3]], [r[0], r[1]], [r[2], r[1]], [r[2], r[3]], [r[0], r[3]]], { color, w, name });
const arrowAxis = (s: Sketch, a: P, b: P, name: string) => {
  path(s, [a, b], { color: C.slate, w: 1.3, name });
  const ang = Math.atan2(b[1] - a[1], b[0] - a[0]), L = 7;
  s.add(`<path d="M${r1(b[0])} ${r1(b[1])} L${r1(b[0] - L * Math.cos(ang) + 3.5 * Math.sin(ang))} ${r1(b[1] - L * Math.sin(ang) - 3.5 * Math.cos(ang))} L${r1(b[0] - L * Math.cos(ang) - 3.5 * Math.sin(ang))} ${r1(b[1] - L * Math.sin(ang) + 3.5 * Math.cos(ang))} Z" fill="${C.slate}"/>`);
};
const P_ = I('P'), A_ = I('A');
const Ek = (k: string) => `${I('E')}<sub>${k}</sub>`;
const cp = (x: string, y: string) => `${P_}(${x} | ${y})`;
/** In the caption, which wraps: the bar kept with both sides (no-break spaces). */
const cpNB = (x: string, y: string) => `${P_}(${x}\u00a0|\u00a0${y})`;

/* ===================================================================== */
/* Figure 13.1 · the probability tree of Bayes (Topic 02, p. 825)        */
/* ===================================================================== */
const Ei = Ek(I('i'));
const CAP131 = `Probability tree for a three-cause partition ${Ek('1')}, ${Ek('2')}, ${Ek('3')}. Each ${A_}-path product ${P_}(${Ei})${cpNB(A_, Ei)} is the weight of that path; the three products add up to ${P_}(${A_}), and the posterior is ${cpNB(Ei, A_)}\u00a0= <frac><num>${P_}(${Ei})${cpNB(A_, Ei)}</num><den>${P_}(${A_})</den></frac>.`;
const PRIOR = [0.5, 0.3, 0.2], LIKE = [0.8, 0.6, 0.1];
const PROD = PRIOR.map((p, i) => p * LIKE[i]), PA = PROD.reduce((t, v) => t + v, 0), POST = PROD.map((v) => v / PA);
const YE = [66, 170, 274], XS = 48, XE = 128, XL = 204, YS = YE[1];
const d1 = (v: number) => String(v);
const fig131: Diagram = {
  id: 'm12-13-fig-13.1',
  topic: 1,
  name: 'Probability tree for Bayes',
  cases: [{ chip: 'Three causes', cap: CAP131 }],
  draw() {
    const s = new Sketch(W, 410);
    pt(s, [XS, YS], 'start', C.ink, 3.6);
    lab(s, XS - 9, YS + 4, 'start', { size: 12.5, anchor: 'end' });
    YE.forEach((y, i) => {
      const k = String(i + 1);
      path(s, [[XS, YS], [XE, y]], { color: C.slate, w: 1.6, name: `cause:${k}` });
      path(s, [[XE, y], [XL, y - 34]], { color: C.mari, w: 2.2, name: `yes:${k}` });
      path(s, [[XE, y], [XL, y + 28]], { color: C.slate, w: 1.5, name: `no:${k}` });
      pt(s, [XE, y], `E${k}`, C.ink, 3.6);
      pt(s, [XL, y - 34], `leafA${k}`, C.mari, 3);
      pt(s, [XL, y + 28], `leafN${k}`, C.slate, 2.6);
      lab(s, XE - 2, y + 23, Ek(k), { size: 14, anchor: 'start' });
      lab(s, XE - 10, y + 39, `${P_}(${Ek(k)}) = ${d1(PRIOR[i])}`, { size: 11.5, anchor: 'start' });
      lab(s, 196, y - 40, `${cp(A_, Ek(k))} = ${d1(LIKE[i])}`, { size: 11.5, anchor: 'end' });
      lab(s, XL + 9, y - 31, `${A_} occurs`, { size: 12.5, anchor: 'start', color: C.amber });
      lab(s, XL + 9, y - 15, `${d1(PRIOR[i])} × ${d1(LIKE[i])} = ${fmt(PROD[i], 2).padEnd(4, '0')}`, { size: 12, anchor: 'start' });
      lab(s, XL + 9, y + 1, `${cp(Ek(k), A_)} = ${POST[i].toFixed(3)}`, { size: 12, anchor: 'start' });
      lab(s, XL + 9, y + 32, `${A_} does not occur`, { size: 12.5, anchor: 'start', color: C.slate });
      lab(s, XL + 9, y + 47, `${cp(`${A_}′`, Ek(k))} = ${fmt(1 - LIKE[i], 2)}`, { size: 11.5, anchor: 'start', color: C.slate });
    });
    lab(s, W / 2, 356, `${P_}(${A_}) = ${PROD.map((v) => v.toFixed(2)).join(' + ')} = ${PA.toFixed(2)}`, { size: 13.5 });
    lab(s, 172, 392, `${cp(Ei, A_)} =`, { size: 13.5, anchor: 'end' });
    stack(s, 226, 387, `${P_}(${Ei})${cp(A_, Ei)}`, `${P_}(${A_})`, 12);
    return s;
  },
  check() {
    const s = fig131.draw(fig131.cases[0]), out: Check[] = [];
    out.push(['The causes E₁, E₂, E₃ are a partition: their priors 0.5 + 0.3 + 0.2 = 1', close(PRIOR.reduce((t, v) => t + v, 0), 1)]);
    out.push(['At each cause the two branches add to 1: P(A | Eᵢ) + P(A′ | Eᵢ) = 0.8 + 0.2, 0.6 + 0.4, 0.1 + 0.9', LIKE.every((l) => close(l + +fmt(1 - l, 2), 1))]);
    out.push([`Each A-path product P(Eᵢ)P(A | Eᵢ) = ${PROD.map((v) => v.toFixed(2)).join(', ')}, as printed (0.40, 0.18, 0.02)`, PROD.map((v) => v.toFixed(2)).join() === '0.40,0.18,0.02']);
    out.push([`Total Probability: P(A) = the sum of the A-paths = ${PA.toFixed(2)}`, close(PA, 0.6)]);
    out.push([`Bayes: P(Eᵢ | A) = path ÷ P(A) = ${POST.map((v) => v.toFixed(3)).join(', ')} (0.667, 0.300, 0.033 as printed), and they add to 1`, POST.map((v) => v.toFixed(3)).join() === '0.667,0.300,0.033' && close(POST.reduce((t, v) => t + v, 0), 1)]);
    out.push(['The tree: a branch from start to each cause, and from each cause an A branch up and an A′ branch down to its leaf', YE.every((y, i) => {
      const k = String(i + 1), c = linesNamed(s, new RegExp(`^cause:${k}$`))[0].pts, yes = linesNamed(s, new RegExp(`^yes:${k}$`))[0].pts, no = linesNamed(s, new RegExp(`^no:${k}$`))[0].pts;
      return close(c[0][0], XS) && close(c[0][1], YS) && close(c[1][1], y) && close(yes[0][1], y) && yes[1][1] < y && close(no[0][1], y) && no[1][1] > y && !!dotNamed(s, `E${k}`) && !!dotNamed(s, `leafA${k}`) && !!dotNamed(s, `leafN${k}`);
    })]);
    out.push(['Each label stands with its own branch: the P(A | Eᵢ) labels above their A branch, the leaf texts level with their leaf', YE.every((y, i) => {
      const L = (t: string) => s.labels.find((l) => l.text === t)!.rect, k = String(i + 1);
      const up = L(`P(A | E${k}) = ${LIKE[i]}`), occ = L('A occurs'), no = s.labels.filter((l) => l.text === 'A does not occur')[i].rect;
      return up[3] < y - 30 && up[1] > y - 52 && occ && Math.abs(no[3] - (y + 28)) < 12;
    })]);
    out.push(['The book\'s Ā is the chapter\'s A′: P(A′ | Eᵢ) on the non-occurrence branches, no Ā anywhere', [0, 1, 2].every((i) => s.labels.some((l) => l.text === `P(A′ | E${i + 1}) = ${fmt(1 - LIKE[i], 2)}`)) && !s.texts.some((t) => /Ā|Ā/.test(t.html))]);
    out.push(marigoldOnly(s, /^(yes:\d|dot:leafA\d)$/, 'the three A-paths'));
    out.push(labelsCheck(s, ['start', 'E1', 'P(E1) = 0.5', 'P(A | E1) = 0.8', '0.5 × 0.8 = 0.40', 'P(E1 | A) = 0.667', 'P(A′ | E1) = 0.2', 'P(E2 | A) = 0.300', 'P(E3 | A) = 0.033', '0.3 × 0.6 = 0.18', '0.2 × 0.1 = 0.02', 'P(A) = 0.40 + 0.18 + 0.02 = 0.60', 'P(Ei | A) =', 'P(Ei)P(A | Ei)', 'P(A)']));
    out.push(noBadChars(s, fig131));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 13.2 · the mean as a balance point (Topic 03, p. 832)          */
/* ===================================================================== */
const fr = (a: string, b: string) => `<frac><num>${a}</num><den>${b}</den></frac>`;
const CAP132 = `Distribution of the number of heads in 3 tosses (${I('p')} = ${fr('1', '8')}, ${fr('3', '8')}, ${fr('3', '8')}, ${fr('1', '8')}). The beam balances at the mean ${I('μ')} = ${I('E')}(${I('X')}) = ∑\u00a0${I('x')}\u00a0${I('p')}(${I('x')}) = 1.5.`;
/** The 8 outcomes of 3 tosses, and the number of heads in each. */
const HEADS = Array.from({ length: 8 }, (_, m) => [0, 1, 2].filter((b) => (m >> b) & 1).length);
const P132 = [0, 1, 2, 3].map((k) => HEADS.filter((h) => h === k).length / 8);
const MEAN132 = P132.reduce((t, p, k) => t + k * p, 0);
const BX = (v: number) => 92 + 62 * v, BASE = 120, UP = 192, BEAM = 168, BLK = 96;
const fig132: Diagram = {
  id: 'm12-13-fig-13.2',
  topic: 2,
  name: 'The mean as a balance point',
  cases: [{ chip: 'Heads in 3 tosses', cap: CAP132 }],
  draw() {
    const s = new Sketch(W, 298);
    arrowAxis(s, [40, BASE], [322, BASE], 'axis:x');
    arrowAxis(s, [52, BASE + 8], [52, 14], 'axis:p');
    lab(s, 60, 22, I('p'), { size: 15, anchor: 'start' });
    lab(s, 328, BASE + 5, I('x'), { size: 15, anchor: 'start' });
    [1, 3].forEach((n) => {
      path(s, [[48, BASE - UP * (n / 8)], [56, BASE - UP * (n / 8)]], { color: C.slate, w: 1.1, name: 'tick' });
      stack(s, 32, BASE - UP * (n / 8), String(n), '8', 11, C.slate);
    });
    P132.forEach((p, k) => {
      box(s, [BX(k) - 20, BASE - UP * p, BX(k) + 20, BASE], `bar:${k}`);
      stack(s, BX(k), BASE - UP * p - 19, String(p * 8), '8', 11);
      lab(s, BX(k), BASE + 18, String(k), { size: 12, color: C.slate });
      path(s, [[BX(k), BEAM + 1.5], [BX(k), BEAM + 8]], { color: C.ink, w: 1.1, name: `hanger:${k}` });
      box(s, [BX(k) - 9, BEAM + 8, BX(k) + 9, BEAM + 8 + BLK * p], `block:${k}`, C.slate, 1.4);
    });
    path(s, [[70, BEAM], [300, BEAM]], { color: C.ink, w: 3, name: 'beam' });
    const px = BX(MEAN132);
    path(s, [[px, BEAM + 2], [px - 16, BEAM + 44], [px + 16, BEAM + 44], [px, BEAM + 2]], { color: C.ink, w: 1.8, name: 'pivot' });
    pt(s, [px, BEAM], 'balance', C.mari, 4);
    lab(s, W / 2, 240, 'mean = balance point', { size: 14 });
    lab(s, W / 2, 263, `block height ∝ ${I('p')}`, { size: 13, color: C.slate });
    lab(s, W / 2, 287, `${I('μ')} = ${I('E')}(${I('X')}) = ∑ ${I('x')} ${I('p')}(${I('x')}) = 1.5`, { size: 13, color: C.slate });
    return s;
  },
  check() {
    const s = fig132.draw(fig132.cases[0]), out: Check[] = [];
    out.push([`Counting heads over the 8 outcomes of 3 tosses gives p = ${P132.map((p) => `${p * 8}/8`).join(', ')}, which add to 1`, P132.map((p) => p * 8).join() === '1,3,3,1' && close(P132.reduce((t, v) => t + v, 0), 1)]);
    out.push(['Each bar read back stands at its x with height p(x)', P132.every((p, k) => { const b = linesNamed(s, new RegExp(`^bar:${k}$`))[0].pts; return close((b[0][0] + b[2][0]) / 2, BX(k)) && close((BASE - b[1][1]) / UP, p); })]);
    out.push([`The mean E(X) = ∑ x p(x) = ${MEAN132}`, close(MEAN132, 1.5)]);
    const piv = linesNamed(s, /^pivot$/)[0].pts[0][0], bal = dotNamed(s, 'balance')!;
    out.push(['The pivot and its dot stand under x = E(X) = 1.5, on the same scale as the bars', close((piv - 92) / 62, MEAN132) && close((bal.p[0] - 92) / 62, MEAN132) && close(bal.p[1], BEAM)]);
    const blocks = P132.map((_, k) => linesNamed(s, new RegExp(`^block:${k}$`))[0].pts);
    out.push(['Each block hangs under its bar, its height in proportion to p (12 px per 1/8)', blocks.every((b, k) => close((b[0][0] + b[2][0]) / 2, BX(k)) && close((b[0][1] - b[1][1]) / P132[k], BLK))]);
    out.push(['The beam balances: the moments ∑ p(x)(x − 1.5) of the blocks about the pivot add to 0', close(blocks.reduce((t, b, k) => t + (b[0][1] - b[1][1]) * ((b[0][0] + b[2][0]) / 2 - piv), 0), 0, 1e-9)]);
    out.push(marigoldOnly(s, /^dot:balance$/, 'the balance point'));
    out.push(labelsCheck(s, ['p', 'x', '0', '1', '2', '3', 'mean = balance point', 'block height ∝ p', 'μ = E(X) = ∑ x p(x) = 1.5']));
    out.push(['The bar labels and ticks are stacked fractions 1 over 8 and 3 over 8 (no slash)', s.labels.filter((l) => l.text === '8').length === 6 && !s.labels.some((l) => /\//.test(l.text))]);
    out.push(noBadChars(s, fig132));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 13.3 · the binomial B(6, 0.8) (Topic 04, p. 845)               */
/* ===================================================================== */
const CAP133 = `Binomial distribution ${I('B')}(6, 0.8). The tallest bar is the mode ${I('r')} = 5; the dashed line marks the mean ${I('np')} = 4.8. Because ${I('p')} > 0.5 the distribution is left-skewed.`;
const N3 = 6, P3 = 0.8;
const nCr = (n: number, r: number): number => (r === 0 ? 1 : (nCr(n, r - 1) * (n - r + 1)) / r);
const PR3 = Array.from({ length: N3 + 1 }, (_, r) => nCr(N3, r) * P3 ** r * (1 - P3) ** (N3 - r));
const MEAN3 = PR3.reduce((t, p, r) => t + r * p, 0);
const MODE3 = PR3.indexOf(Math.max(...PR3));
const OX3 = 50, OY3 = 230, RX = (r: number) => 70 + 37 * r, UY3 = 450;
const fig133: Diagram = {
  id: 'm12-13-fig-13.3',
  topic: 3,
  name: 'Binomial distribution B(6, 0.8)',
  cases: [{ chip: 'Mode and mean', cap: CAP133 }],
  draw() {
    const s = new Sketch(W, 256);
    arrowAxis(s, [40, OY3], [318, OY3], 'axis:r');
    arrowAxis(s, [OX3, OY3 + 6], [OX3, 14], 'axis:P');
    lab(s, OX3 + 6, 22, `${I('P')}(${I('X')} = ${I('r')})`, { size: 14, anchor: 'start' });
    lab(s, 323, OY3 + 5, I('r'), { size: 15, anchor: 'start' });
    [0.1, 0.2, 0.3, 0.4].forEach((v) => {
      path(s, [[OX3 - 4, OY3 - UY3 * v], [OX3 + 4, OY3 - UY3 * v]], { color: C.slate, w: 1.1, name: 'tick' });
      lab(s, OX3 - 8, OY3 - UY3 * v + 4, String(v), { size: 11, anchor: 'end', color: C.slate });
    });
    PR3.forEach((p, r) => {
      box(s, [RX(r) - 13, OY3 - UY3 * p, RX(r) + 13, OY3], `bar:${r}`, r === MODE3 ? C.mari : C.ink, r === MODE3 ? 2.6 : 1.8);
      lab(s, RX(r), OY3 + 17, String(r), { size: 12, color: C.slate });
    });
    path(s, [[RX(MEAN3), OY3], [RX(MEAN3), OY3 - UY3 * 0.47]], { color: C.ink, w: 1.5, dash: '6 4', name: 'mean' });
    lab(s, RX(MEAN3) - 12, 80, 'mean = 4.8', { size: 12, anchor: 'end' });
    lab(s, RX(MODE3) + 19, 66, 'mode = 5', { size: 12, anchor: 'start', color: C.amber, bold: true });
    lab(s, OX3 + 14, 46, `${I('p')} = 0.8 > 0.5 ⇒ skewed left`, { size: 12, anchor: 'start', color: C.slate });
    return s;
  },
  check() {
    const s = fig133.draw(fig133.cases[0]), out: Check[] = [];
    out.push([`P(X = r) = ⁶Cᵣ(0.8)ʳ(0.2)⁶⁻ʳ for r = 0 to 6: ${PR3.map((p) => fmt(p, 3)).join(', ')}, which add to 1`, close(PR3.reduce((t, v) => t + v, 0), 1, 1e-12)]);
    out.push(['Each bar read back stands at its r with height P(X = r)', PR3.every((p, r) => { const b = linesNamed(s, new RegExp(`^bar:${r}$`))[0].pts; return close((b[0][0] + b[2][0]) / 2, RX(r)) && close((OY3 - b[1][1]) / UY3, p); })]);
    out.push([`The tallest bar is r = ${MODE3} = ⌊(n + 1)p⌋ = ⌊5.6⌋, with P(X = 5) = ${fmt(PR3[5], 6)} (worked example 4: 0.393216)`, MODE3 === 5 && Math.floor((N3 + 1) * P3) === 5 && close(PR3[5], 0.393216, 1e-9)]);
    out.push([`The mean ∑ r P(X = r) = ${fmt(MEAN3, 6)} = np = 4.8, and the dashed line stands there`, close(MEAN3, N3 * P3, 1e-12) && linesNamed(s, /^mean$/)[0].pts.every((q) => close((q[0] - 70) / 37, 4.8, 1e-9))]);
    const m3 = PR3.reduce((t, p, r) => t + p * (r - MEAN3) ** 3, 0);
    out.push([`Left-skewed: the third central moment ∑ (r − μ)³ P = ${fmt(m3, 3)} = npq(q − p) < 0, and the mean lies left of the mode`, m3 < 0 && close(m3, N3 * P3 * 0.2 * (0.2 - P3), 1e-9) && MEAN3 < MODE3]);
    out.push(['"mode = 5" stands beside its bar\'s top, "mean = 4.8" beside the dashed line', (() => { const md = s.labels.find((l) => l.text === 'mode = 5')!.rect, mn = s.labels.find((l) => l.text === 'mean = 4.8')!.rect; return md[0] > RX(5) + 13 && md[3] < OY3 - UY3 * PR3[6] && mn[2] < RX(MEAN3) && mn[3] < OY3 - UY3 * PR3[4]; })()]);
    out.push(marigoldOnly(s, /^bar:5$/, 'the mode\'s bar'));
    out.push(labelsCheck(s, ['P(X = r)', 'r', '0.1', '0.2', '0.3', '0.4', '0', '1', '2', '3', '4', '5', '6', 'mean = 4.8', 'mode = 5', 'p = 0.8 > 0.5 ⇒ skewed left']));
    out.push(noBadChars(s, fig133));
    out.push(...layout(s));
    return out;
  },
};

/** Mathematics 12 Chapter 13, Probability: the book's figures. */
export const DIAGRAMS_MATHEMATICS_12_13: Diagram[] = [fig131, fig132, fig133];
