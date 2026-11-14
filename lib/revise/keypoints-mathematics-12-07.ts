/**
 * KEY POINTS for Mathematics Class 12, Chapter 7 (Integrals).
 *
 * Written for test mode: every point is a question to answer in your head,
 * then the answer and at most one more line. Four kinds, each a section on
 * the screen: Remember, Don't mix up, Common mistakes and Exam shortcuts.
 * Topics 01–09 each have four or five Remember points, at least one of each
 * other kind and one Exam shortcut (Topic 07 carries five Remember points,
 * Topic 09 five Remember points and two Common mistakes); Additional topics
 * A–F have two Remember points and one of each other kind; Additional P, the
 * past-paper analysis, has five points (three archetypes as Remember and Exam
 * shortcuts, two traps): 101 points in all. Memory lines are a fifth, short
 * section of their own, read rather than tested: the first two of each topic.
 *
 * `topic`: the book prints its nine subtopics in the order 01, 04, 05, 06,
 * 07, 08, 02, 09, 03 and the app numbers them by position (decision 28), so
 * Topics 01–09 are 0–8 in printed order; Additional topics A–F are 9–14
 * (Addenda A–F) and Additional P is 15 (Addendum P, What JEE Actually Asks).
 * No point refers to another topic by number.
 *
 * Every fact is from the Master Reference book (the October 2026 edition); the
 * page (the bottom folio; the addenda's own "Page n of 25" counted on from
 * p. 505) is above each point. Remember: the topic's key definitions,
 * properties, derivations and its Cheat sheet. Common mistakes: its Common
 * student pitfalls and its MCQ traps (A–F, which print neither: the slips
 * their worked examples and practice answers warn about; P: its traps).
 * Exam shortcuts: its Pro-Tip, Speed Traps and worked examples. `say`: the
 * book's own memory aids, word for word without their quotation marks and
 * the gloss after them (": the cosine integral keeps a plus sign …"), with a
 * full stop added where the aid has none: Topics 01–09 print three, two,
 * two, two, three, three, two, two and four; all twenty-three are here,
 * eighteen of them memory lines. Topic 09's "Modulus halves the period"
 * over-states (|⁠tan x| keeps period π; the book's gloss limits it to |⁠sin|
 * and |⁠cos|), so it rides on the third `say` of its topic and is not shown
 * as a memory line; the point states it for |⁠sin x| and |⁠cos x| only. A–F
 * and P print no aids, so each has two of the book's own one-line sentences
 * (A: "Top limit in, bottom limit out.", cut from its slogan and
 * capitalised, and "Never hunt for an anti-derivative first.", cut; B:
 * "Factor 1/n out of the summand: this is your h." and "The shifted grid
 * still fills the same interval.", cut and capitalised; C: "Add the two
 * expressions; the denominators are identical." and "Solve for I and
 * halve."; D: "Set t = tan(x/2)." and "Factor the denominator first.", cut;
 * E: "Split off one tan² x and use tan² x = sec² x − 1." and "Peel one sec² x
 * and apply parts.", both cut; F: "Endpoint values never matter: a single
 * point carries no width." and "Whenever a question says area, split at
 * zeros; whenever it says evaluate the integral, do not."; P: "If your
 * answer is ugly, you have almost certainly missed a symmetry." and "Never
 * attempt the integral itself."): thirty-seven in all, thirty-two of them
 * memory lines.
 *
 * Where the book over-states a rule, the point states only the true version
 * (the modulus period above). The Exam relevance claims, the past-paper
 * distribution and its counts, the CBSE, NCERT and syllabus remarks (among
 * them the limit-of-a-sum and reduction-formula notes), the difficulty tags
 * and the paper names in P are left out.
 *
 * Markup is the chapter's own: ∫ upright with <sub>/<sup> limits, d upright
 * and glued to its variable, e upright, + C italic, <i> for every variable
 * and constant letter, |⁠…| with a word joiner, − (U+2212) for minus. Every
 * fraction is stacked, <frac><num>…</num><den>…</den></frac>, and never a
 * fraction inside a fraction (÷ there, as the chapter writes it); no em
 * dashes; and always a space after "<", so it is never read as a tag.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

const fr = (t: string, b: string) => `<frac><num>${t}</num><den>${b}</den></frac>`;
const I = (s: string) => `<i>${s}</i>`;
const NB = ' ';
const WJ = '⁠';
const bar = (s: string) => `|${WJ}${s}|`;
const sb = (base: string, s: string) => `${base}<sub>${s}</sub>`;
const sup = (base: string, s: string) => `${base}<sup>${s}</sup>`;
const sq = (s: string) => sup(s, '2');
const INT = (lo: string, hi: string) => `∫<sub>${lo}</sub><sup>${hi}</sup>`;
const tf = (fn: string, s: string, pow = '') => `${fn}${pow ? `<sup>${pow}</sup>` : ''}${NB}${s}`;

const a = I('a');
const b = I('b');
const c = I('c');
const f = I('f');
const g = I('g');
const k = I('k');
const m = I('m');
const n = I('n');
const p = I('p');
const r = I('r');
const t = I('t');
const u = I('u');
const v = I('v');
const x = I('x');
const A = I('A');
const B = I('B');
const C = I('C');
const F = I('F');
const II = I('I');
const T = I('T');
const W = I('W');
const DX = `${NB}d${x}`;
const DT = `${NB}d${t}`;
const DU = `${NB}d${u}`;
const PC = ` + ${C}`;
const fx = `${f}(${x})`;
const fpx = `${f}′(${x})`;
const gx = `${g}(${x})`;
const gpx = `${g}′(${x})`;
const X2 = sq(x);
const LN = (s: string) => `ln${bar(s)}`;
const SIN = tf('sin', x);
const COS = tf('cos', x);
const TAN = tf('tan', x);
const EX = sup('e', x);
const PI2 = fr('π', '2');
const HALF = fr('1', '2');
const ATAN = (s: string) => `tan<sup>−1</sup>${NB}${s}`;
const ASIN = (s: string) => `sin<sup>−1</sup>${NB}${s}`;
const LIM = `lim<sub>${n}→∞</sub>`;
const SUM = (lo: string, hi: string) => `∑<sub>${lo}</sub><sup>${hi}</sup>`;

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Foundations of Integration: Indefinite Integrals, Properties & Standard Forms ──
  // pp. 448–449, 451
  {
    topic: 0,
    kind: 'remember',
    q: `What is an indefinite integral, and why does it carry + ${C}?`,
    a: `If ${fr('d', `d${x}`)}${NB}${F}(${x}) = ${fx}, then ∫${fx}${DX} = ${F}(${x})${PC}: ${F} is an anti-derivative and ${C} any real constant. Differentiation wipes out constants, so the answer is a whole family of curves stacked vertically, never one curve`,
    why: `Along any vertical line ${x} = ${a} every member has slope ${f}(${a}), so the tangents there are parallel.`,
    say: `No ${C}, no marks.`,
  },
  // pp. 451–452, 457
  {
    topic: 0,
    kind: 'remember',
    q: 'What are the power rule, the log rule and the two exponential rules?',
    a: `∫${sup(x, n)}${DX} = ${fr(sup(x, `${n}+1`), `${n} + 1`)}${PC} for ${n} ≠ −1; ∫${fr('1', x)}${DX} = ${LN(x)}${PC}, the modulus required because ${fr('1', x)} is defined for negative ${x} too; ∫${EX}${DX} = ${EX}${PC}; ∫${sup(a, x)}${DX} = ${fr(sup(a, x), `ln${NB}${a}`)}${PC} for ${a} > 0, ${a} ≠ 1`,
    why: `Proof of the power rule: differentiate the answer, ${fr('1', `${n} + 1`)} · (${n} + 1)${sup(x, n)} = ${sup(x, n)}.`,
    say: `One over ${x} is the lonely log.`,
  },
  // pp. 451, 457
  {
    topic: 0,
    kind: 'remember',
    q: 'What are the trigonometric and inverse-trigonometric rows of the table?',
    a: `${tf('sec', x, '2')} → ${TAN}, ${tf('csc', x, '2')} → −${tf('cot', x)}, ${tf('sec', x)} ${TAN} → ${tf('sec', x)}, ${tf('csc', x)} ${tf('cot', x)} → −${tf('csc', x)}; ${fr('1', `√(1 − ${X2})`)} → ${ASIN(x)}, ${fr('1', `1 + ${X2}`)} → ${ATAN(x)}, each + ${C}`,
    why: 'The table checks itself: differentiate the right column and it must return the integrand.',
    say: 'Co goes positive.',
  },
  // p. 452
  {
    topic: 0,
    kind: 'remember',
    q: 'What is the procedure for direct (standard-form) integration?',
    a: `Simplify first (expand, split fractions term by term, roots to powers); split with linearity, ∫(${f} + ${g}) = ∫${f} + ∫${g} and ∫${k}${f} = ${k}∫${f}; reduce trigonometric products with identities; apply the table term by term; add a single ${C} at the very end; differentiate to verify`,
    why: `Linearity covers sums and constant multiples only, never products or quotients: ∫(${f} · ${g}) is not ∫${f} · ∫${g}.`,
    say: null,
  },
  // pp. 451, 456
  {
    topic: 0,
    kind: 'mixup',
    q: `∫${SIN}${DX} or ∫${COS}${DX}: which carries the minus?`,
    a: `The sine integral: ∫${SIN}${DX} = −${COS}${PC}, but ∫${COS}${DX} = +${SIN}${PC}. The minus lives with the sine integral`,
    why: `So ∫(${SIN} + ${fr('1', x)})${DX} = −${COS} + ${LN(x)}${PC}; “${COS} + ${LN(x)}” flips the sign.`,
    say: null,
  },
  // pp. 455–456
  {
    topic: 0,
    kind: 'mistake',
    q: `Can ∫${fr('1', x)}${DX} be done by the power rule?`,
    a: `No: ${n} = −1 gives ${fr(sup(x, '0'), '0')}, which is meaningless. ∫${fr('1', x)}${DX} = ${LN(x)}${PC} is a separate, memorised result`,
    why: `“Fixing” it to ${fr('1', X2)} is the same forbidden step; and forgetting + ${C} is the most penalised slip of all.`,
    say: null,
  },
  // pp. 453, 456
  {
    topic: 0,
    kind: 'shortcut',
    q: `∫${fr(`${X2} + 2${x} + 5`, x)}${DX} in under thirty seconds?`,
    a: `Divide through first: ${x} + 2 + ${fr('5', x)}, so ${fr(X2, '2')} + 2${x} + 5${NB}${LN(x)}${PC}. A polynomial over a single monomial is split, never substituted`,
    why: 'The universal safety net: differentiate your answer; if it does not return the integrand, find the mistake.',
    say: null,
  },

  // ── Topic 02 · Integration by Substitution ──
  // pp. 458–459, 463
  {
    topic: 1,
    kind: 'remember',
    q: 'What is the substitution rule?',
    a: `If ${u} = ${gx}, then d${u} = ${gpx}${DX} and ∫${f}(${gx})${NB}${gpx}${DX} = ∫${f}(${u})${DU}: the chain rule in reverse. It helps only when ${gpx}, or a constant multiple of it, is present`,
    why: `∫2${x}√(${X2} + 1)${DX}: ${u} = ${X2} + 1, d${u} = 2${x}${DX}, giving ${fr('2', '3')}(${X2} + 1)<sup>3/2</sup>${PC}.`,
    say: 'Convert there, convert back.',
  },
  // pp. 459, 462–463
  {
    topic: 1,
    kind: 'remember',
    q: 'What are the two patterns behind most substitutions?',
    a: `∫${fr(fpx, fx)}${DX} = ${LN(fx)}${PC}: a numerator that is the derivative of the denominator gives the log of the denominator. ∫[${fx}]<sup>${n}</sup>${NB}${fpx}${DX} = ${fr(`[${fx}]<sup>${n}+1</sup>`, `${n} + 1`)}${PC}, ${n} ≠ −1`,
    why: `∫${fr(`2${x} + 3`, `${X2} + 3${x} + 5`)}${DX} = ${LN(`${X2} + 3${x} + 5`)}${PC}.`,
    say: 'Derivative on top → log on the bottom.',
  },
  // p. 459
  {
    topic: 1,
    kind: 'remember',
    q: `What are ∫${TAN}, ∫${tf('cot', x)}, ∫${tf('sec', x)} and ∫${tf('csc', x)}?`,
    a: `${LN(tf('sec', x))} = −${LN(COS)}; ${LN(SIN)}; ${LN(`${tf('sec', x)} + ${TAN}`)}; ${LN(`${tf('csc', x)} − ${tf('cot', x)}`)}; each + ${C}`,
    why: `For ${tf('sec', x)}, multiply top and bottom by ${tf('sec', x)} + ${TAN}: the numerator becomes the derivative of the denominator.`,
    say: null,
  },
  // pp. 460–461
  {
    topic: 1,
    kind: 'remember',
    q: 'What is the substitution workflow?',
    a: `Spot an inner ${gx} whose derivative also appears; set ${u} = ${gx}, d${u} = ${gpx}${DX}; replace every ${x}-piece (if any ${x} survives, the substitution was wrong); integrate in ${u}; back-substitute and add ${C}; differentiate to check`,
    why: `A root that blocks every form is substituted away: ∫${fr('1', `1 + √${x}`)}${DX} with ${x} = ${sq(t)} gives 2√${x} − 2${NB}ln(1 + √${x})${PC}.`,
    say: null,
  },
  // pp. 461–462
  {
    topic: 1,
    kind: 'mixup',
    q: `∫${fr(x, `${X2} + ${sq(a)}`)}${DX} against ∫${fr(`2${x}`, `${X2} + ${sq(a)}`)}${DX}?`,
    a: `The first is ${HALF}${NB}ln(${X2} + ${sq(a)})${PC}, the second ln(${X2} + ${sq(a)})${PC}. Check whether the numerator is the whole derivative or a fraction of it`,
    why: `A stray ${HALF} on ∫${fr(`2${x} + 3`, `${X2} + 3${x} + 5`)}${DX} is the planted wrong option.`,
    say: null,
  },
  // p. 462
  {
    topic: 1,
    kind: 'mistake',
    q: 'What is the number-one substitution error?',
    a: `Replacing ${gx} by ${u} but not ${gpx}${DX} by d${u}. And an indefinite integral must end back in ${x}, never in ${u}`,
    why: `A sign slip to avoid as well: ∫${TAN}${DX} = +${LN(tf('sec', x))} = −${LN(COS)}; ${LN(COS)} alone drops the minus.`,
    say: null,
  },
  // pp. 460, 462
  {
    topic: 1,
    kind: 'shortcut',
    q: `∫${fr(sup('e', `√${x}`), `√${x}`)}${DX} quickly?`,
    a: `2${sup('e', `√${x}`)}${PC}: with ${u} = √${x}, ${fr(`d${x}`, `√${x}`)} = 2${NB}d${u}. The ${fr('1', `√${x}`)} is twice the derivative of the exponent`,
    why: 'Before integrating, ask whether the numerator is a constant times the derivative of the denominator: if so, the answer is a log at once.',
    say: null,
  },

  // ── Topic 03 · Integration using Trigonometric Identities ──
  // pp. 464–465, 468
  {
    topic: 2,
    kind: 'remember',
    q: `How are ∫${tf('sin', x, '2')} and ∫${tf('cos', x, '2')} done?`,
    a: `Power-reduction: ${tf('sin', x, '2')} = ${fr(`1 − cos${NB}2${x}`, '2')}, ${tf('cos', x, '2')} = ${fr(`1 + cos${NB}2${x}`, '2')}. So ∫${tf('sin', x, '2')}${DX} = ${fr(x, '2')} − ${fr(`sin${NB}2${x}`, '4')}${PC} and ∫${tf('cos', x, '2')}${DX} = ${fr(x, '2')} + ${fr(`sin${NB}2${x}`, '4')}${PC}`,
    why: 'For a fourth or sixth power, halve again.',
    say: 'Even = halve it, odd = peel it, product = split it.',
  },
  // pp. 464, 466
  {
    topic: 2,
    kind: 'remember',
    q: 'What are the product-to-sum identities?',
    a: `2${NB}sin${NB}${A}${NB}cos${NB}${B} = sin(${A} + ${B}) + sin(${A} − ${B}); 2${NB}cos${NB}${A}${NB}cos${NB}${B} = cos(${A} + ${B}) + cos(${A} − ${B}); 2${NB}sin${NB}${A}${NB}sin${NB}${B} = cos(${A} − ${B}) − cos(${A} + ${B})`,
    why: `∫sin${NB}5${x}${NB}cos${NB}3${x}${DX} = −${fr(`cos${NB}8${x}`, '16')} − ${fr(`cos${NB}2${x}`, '4')}${PC}.`,
    say: null,
  },
  // pp. 465–466
  {
    topic: 2,
    kind: 'remember',
    q: 'How are odd powers and powers of tan and sec handled?',
    a: `Odd power: peel one factor off and convert the rest with sin<sup>2</sup> = 1 − cos<sup>2</sup> (or the reverse), then substitute. Tan and sec: use ${tf('sec', x, '2')} = 1 + ${tf('tan', x, '2')} and peel off a ${tf('sec', x, '2')}, since ${fr('d', `d${x}`)}${NB}${TAN} = ${tf('sec', x, '2')}`,
    why: `∫${tf('sin', x, '3')}${NB}${tf('cos', x, '2')}${DX} with ${u} = ${COS}: ${fr(tf('cos', x, '5'), '5')} − ${fr(tf('cos', x, '3'), '3')}${PC}.`,
    say: null,
  },
  // pp. 464–466
  {
    topic: 2,
    kind: 'remember',
    q: 'What is Wallis’ formula?',
    a: `${INT('0', 'π/2')} ${tf('sin', x, n)}${NB}${tf('cos', x, m)}${DX} = ${fr(`(${n} − 1)!! (${m} − 1)!!`, `(${m} + ${n})!!`)} × ${PI2} if ${m} and ${n} are both even, × 1 otherwise; ${m}, ${n} non-negative integers, ${k}!! = ${k}(${k} − 2)(${k} − 4)⋯ down to 2 or 1, 0!! = (−1)!! = 1`,
    why: `${INT('0', 'π/2')} ${tf('sin', x, '6')}${NB}${tf('cos', x, '2')}${DX} = ${fr('5!! · 1!!', '8!!')} · ${PI2} = ${fr('5π', '256')}.`,
    say: `Wallis only on 0 to ${PI2}.`,
  },
  // pp. 464, 468
  {
    topic: 2,
    kind: 'mixup',
    q: `${tf('sin', x, '2')} or ${tf('cos', x, '2')}: which takes 1 − cos${NB}2${x}?`,
    a: `${tf('sin', x, '2')} = ${fr(`1 − cos${NB}2${x}`, '2')}; ${tf('cos', x, '2')} = ${fr(`1 + cos${NB}2${x}`, '2')}. Mixing them flips the sign of the ${fr(`sin${NB}2${x}`, '4')} term`,
    why: `${fr(x, '2')} + ${fr(`sin${NB}2${x}`, '4')}${PC} is ∫${tf('cos', x, '2')}${DX}: the planted wrong option for ∫${tf('sin', x, '2')}${DX}.`,
    say: null,
  },
  // pp. 467–468
  {
    topic: 2,
    kind: 'mistake',
    q: `Is ∫${tf('sin', x, '2')}${DX} = ${fr(tf('sin', x, '3'), '3')}${PC}?`,
    a: `No: the power rule integrates powers of ${x}, not powers of ${SIN}. Use an identity first`,
    why: `Likewise ∫${tf('tan', x, '2')}${DX} = ${TAN} − ${x}${PC} from ${tf('tan', x, '2')} = ${tf('sec', x, '2')} − 1, not ${fr(tf('tan', x, '3'), '3')}.`,
    say: null,
  },
  // pp. 466, 468
  {
    topic: 2,
    kind: 'shortcut',
    q: `∫sin(${a}${x})${NB}cos(${b}${x})${DX}: integration by parts?`,
    a: 'No: product-to-sum turns it into two trivial integrals, and parts would go round in circles',
    why: 'Classify before you compute: even power → halve it; odd power → peel one off and substitute; product → product-to-sum.',
    say: null,
  },

  // ── Topic 04 · Integrals of Special Forms (Quadratic Denominators & Roots) ──
  // pp. 469–470, 474
  {
    topic: 3,
    kind: 'remember',
    q: `What are the three quadratic templates (${a} > 0)?`,
    a: `∫${fr(`d${x}`, `${X2} + ${sq(a)}`)} = ${fr('1', a)}${NB}${ATAN(fr(x, a))}; ∫${fr(`d${x}`, `${X2} − ${sq(a)}`)} = ${fr('1', `2${a}`)}${NB}ln${bar(fr(`${x} − ${a}`, `${x} + ${a}`))}; ∫${fr(`d${x}`, `${sq(a)} − ${X2}`)} = ${fr('1', `2${a}`)}${NB}ln${bar(fr(`${a} + ${x}`, `${a} − ${x}`))}; each + ${C}`,
    why: `The log form comes from partial fractions: ${fr('1', `${X2} − ${sq(a)}`)} = ${fr('1', `2${a}`)}(${fr('1', `${x} − ${a}`)} − ${fr('1', `${x} + ${a}`)}).`,
    say: 'Plus is arctan, minus is log.',
  },
  // pp. 469–470, 474
  {
    topic: 3,
    kind: 'remember',
    q: 'What are the three root templates?',
    a: `∫${fr(`d${x}`, `√(${sq(a)} − ${X2})`)} = ${ASIN(fr(x, a))}${PC}, with no ${fr('1', a)}; ∫${fr(`d${x}`, `√(${X2} + ${sq(a)})`)} = ${LN(`${x} + √(${X2} + ${sq(a)})`)}${PC}; ∫${fr(`d${x}`, `√(${X2} − ${sq(a)})`)} = ${LN(`${x} + √(${X2} − ${sq(a)})`)}${PC}`,
    why: `∫${fr(`d${x}`, `√(9 − ${X2})`)} = ${ASIN(fr(x, '3'))}${PC}; a spurious ${fr('1', '3')} is the planted wrong option.`,
    say: `Root with ${sq(a)} − ${X2} is arcsin, and arcsin has no ${fr('1', a)}.`,
  },
  // p. 470
  {
    topic: 3,
    kind: 'remember',
    q: 'What are the three square-root integrals?',
    a: `∫√(${sq(a)} − ${X2})${DX} = ${fr(x, '2')}√(${sq(a)} − ${X2}) + ${fr(sq(a), '2')}${NB}${ASIN(fr(x, a))}; ∫√(${X2} ± ${sq(a)})${DX} = ${fr(x, '2')}√(${X2} ± ${sq(a)}) ± ${fr(sq(a), '2')}${NB}${LN(`${x} + √(${X2} ± ${sq(a)})`)}; each + ${C}`,
    why: `∫√(4 − ${X2})${DX} = ${fr(x, '2')}√(4 − ${X2}) + 2${NB}${ASIN(fr(x, '2'))}${PC}.`,
    say: null,
  },
  // pp. 470–471
  {
    topic: 3,
    kind: 'remember',
    q: 'How is a general quadratic, or a linear numerator, brought to a template?',
    a: `Complete the square, ${a}${X2} + ${b}${x} + ${c} = ${a}[(${x} + ${fr(b, `2${a}`)})<sup>2</sup> + ${fr(c, a)} − ${fr(sq(b), `4${sq(a)}`)}], and match with ${I('X')} = ${x} + ${fr(b, `2${a}`)}. A linear numerator is split as ${p}${x} + ${I('q')} = ${I('λ')} · (quadratic)′ + ${I('μ')}: the ${I('λ')}-part gives a log (a root under √), the ${I('μ')}-part a template`,
    why: `∫${fr(`d${x}`, `${X2} + 4${x} + 13`)} = ${fr('1', '3')}${NB}${ATAN(fr(`${x} + 2`, '3'))}${PC}, from (${x} + 2)<sup>2</sup> + 9.`,
    say: null,
  },
  // pp. 470, 473
  {
    topic: 3,
    kind: 'mixup',
    q: `Numerator ${x} or numerator 1 over ${X2} + ${sq(a)}?`,
    a: `Numerator ${x} is an ${fr(`${f}′`, f)} form: ${HALF}${NB}ln(${X2} + ${sq(a)}). Numerator 1 is the arctan template. Under a square root, numerator ${x} gives a root instead`,
    why: `∫${fr(x, `√(${X2} + ${sq(a)})`)}${DX} = √(${X2} + ${sq(a)})${PC}, since ∫${fr(`${f}′`, `√${f}`)} = 2√${f}.`,
    say: null,
  },
  // pp. 472–473
  {
    topic: 3,
    kind: 'mistake',
    q: `Which templates carry the ${fr('1', a)} factor?`,
    a: `The arctan one, ${fr('1', a)}${NB}${ATAN(fr(x, a))}, and the logs of a ratio, with ${fr('1', `2${a}`)}. The arcsin one, ${ASIN(fr(x, a))}, has none`,
    why: `∫${fr(`d${x}`, `${X2} + 25`)} = ${fr('1', '5')}${NB}${ATAN(fr(x, '5'))}${PC}, not 5${NB}${ATAN(fr(x, '5'))}.`,
    say: null,
  },
  // pp. 471, 473
  {
    topic: 3,
    kind: 'shortcut',
    q: `∫${fr(`2${x} + 3`, `√(${X2} + 4${x} + 8)`)}${DX}?`,
    a: `Write 2${x} + 3 = (2${x} + 4) − 1. The first part is ${fr(`${f}′`, `√${f}`)}: 2√(${X2} + 4${x} + 8). The second, after ${X2} + 4${x} + 8 = (${x} + 2)<sup>2</sup> + 4, is ${LN(`(${x} + 2) + √(${X2} + 4${x} + 8)`)}. Subtract and add ${C}`,
    why: `Three binary checks pin the template: the denominator’s sign (log or arctan), a root or not, numerator ${x} or a constant.`,
    say: null,
  },

  // ── Topic 05 · Integration by Partial Fractions ──
  // pp. 475–476, 479
  {
    topic: 4,
    kind: 'remember',
    q: 'What must be checked before partial fractions?',
    a: `That the fraction is proper, numerator degree < denominator degree. If not, divide first: ${fr(I('N'), I('D'))} = ${I('Q')} + ${fr(I('R'), I('D'))} with deg${NB}${I('R')} < deg${NB}${I('D')}. Then factor the denominator completely`,
    why: `${fr(sup(x, '3'), `${X2} + 1`)} = ${x} − ${fr(x, `${X2} + 1`)}, so the integral is ${fr(X2, '2')} − ${HALF}${NB}ln(${X2} + 1)${PC}.`,
    say: 'Improper? Divide before you decide.',
  },
  // pp. 475–476, 479
  {
    topic: 4,
    kind: 'remember',
    q: 'Which partial-fraction term goes with which factor?',
    a: `Linear ${a}${x} + ${b}: ${fr(A, `${a}${x} + ${b}`)}. Repeated (${a}${x} + ${b})<sup>2</sup>: ${fr(A, `${a}${x} + ${b}`)} + ${fr(B, `(${a}${x} + ${b})<sup>2</sup>`)}, and so on up to the power. Irreducible quadratic: ${fr(`${A}${x} + ${B}`, `${a}${X2} + ${b}${x} + ${c}`)}`,
    why: `They integrate to logs, powers (∫${fr(`d${x}`, `(${x} − ${a})<sup>2</sup>`)} = −${fr('1', `${x} − ${a}`)}) and log plus arctan.`,
    say: 'Repeated factor → repeated terms.',
  },
  // p. 476
  {
    topic: 4,
    kind: 'remember',
    q: 'What is the cover-up shortcut?',
    a: `For a distinct linear factor (${x} − ${r}): delete it from the original and put ${x} = ${r} in what remains. Each root substitution kills one unknown at a time`,
    why: `${fr('1', `(${x} − 1)(${x} + 2)`)}: ${A} = ${fr('1', '3')} at ${x} = 1, ${B} = −${fr('1', '3')} at ${x} = −2; integral ${fr('1', '3')}${NB}ln${bar(fr(`${x} − 1`, `${x} + 2`))}${PC}.`,
    say: 'Quadratic on bottom → linear on top.',
  },
  // p. 477
  {
    topic: 4,
    kind: 'remember',
    q: 'How are the constants found with a repeated factor?',
    a: `Roots give some, comparing coefficients the rest. ${fr(x, `(${x} − 1)<sup>2</sup>(${x} + 1)`)}: ${x} = 1 gives ${B} = ${HALF}, ${x} = −1 gives the last constant −${fr('1', '4')}, and the ${X2} coefficients give ${A} = ${fr('1', '4')}`,
    why: `The integral is ${fr('1', '4')}${NB}ln${bar(fr(`${x} − 1`, `${x} + 1`))} − ${fr('1', `2(${x} − 1)`)}${PC}.`,
    say: null,
  },
  // pp. 478–479
  {
    topic: 4,
    kind: 'mixup',
    q: `Which factor takes a linear numerator ${A}${x} + ${B}?`,
    a: 'An irreducible quadratic factor. A linear factor, repeated or not, takes a constant',
    why: `For ${fr('1', `(${x} − 2)<sup>2</sup>(${x} + 3)`)} the template has ${fr(A, `${x} − 2`)} and ${fr(B, `(${x} − 2)<sup>2</sup>`)}, not ${fr(`${A}${x} + ${B}`, `(${x} − 2)<sup>2</sup>`)}.`,
    say: null,
  },
  // pp. 478–479
  {
    topic: 4,
    kind: 'mistake',
    q: `Partial fractions straight away on ${fr(X2, `${X2} − 1`)}?`,
    a: `No: the degrees are equal, so it is improper and the constants come out wrong. Divide first: 1 + ${fr('1', `${X2} − 1`)}`,
    why: `The other common slip: (${x} − ${a})<sup>2</sup> needs both ${fr(A, `${x} − ${a}`)} and ${fr(B, `(${x} − ${a})<sup>2</sup>`)}, not just one.`,
    say: null,
  },
  // pp. 477, 479
  {
    topic: 4,
    kind: 'shortcut',
    q: `∫${fr(`3${x} + 1`, `(${x} + 1)(${x} − 2)`)}${DX} by cover-up?`,
    a: `Over ${x} + 1, put ${x} = −1 in the rest: ${fr('−2', '−3')} = ${fr('2', '3')}. Over ${x} − 2, put ${x} = 2: ${fr('7', '3')}. So ${fr('2', '3')}${NB}${LN(`${x} + 1`)} + ${fr('7', '3')}${NB}${LN(`${x} − 2`)}${PC}`,
    why: 'Keep comparing coefficients for repeated or quadratic factors.',
    say: null,
  },

  // ── Topic 06 · Integration by Parts ──
  // pp. 481–482, 485
  {
    topic: 5,
    kind: 'remember',
    q: 'What is integration by parts, and when does it help?',
    a: `∫${u}${NB}d${v} = ${u}${v} − ∫${v}${NB}d${u}, from integrating the product rule: differentiate ${u}, integrate d${v}. It helps only if ∫${v}${NB}d${u} is easier than the original; if not, swap the choice`,
    why: `∫${x}${NB}${COS}${DX}: ${u} = ${x}, d${v} = ${COS}${DX}, giving ${x}${NB}${SIN} + ${COS}${PC}.`,
    say: 'ILATE: differentiate the one that comes first.',
  },
  // pp. 482, 484
  {
    topic: 5,
    kind: 'remember',
    q: `How is ${u} chosen?`,
    a: `By ILATE: Inverse trig, Logarithm, Algebraic, Trigonometric, Exponential; the earlier one is ${u}. It is a rule of thumb, not a law: ∫${sup(x, '3')}${sup('e', X2)}${DX} needs ${u} = ${X2}, d${v} = ${x}${sup('e', X2)}${DX}`,
    why: `For ∫${x}${EX}${DX}, ${u} = ${x}; ${u} = ${EX} makes the new integral harder.`,
    say: null,
  },
  // pp. 481–483, 485
  {
    topic: 5,
    kind: 'remember',
    q: `What is the ${EX}[${f} + ${f}′] result?`,
    a: `∫${EX}[${fx} + ${fpx}]${DX} = ${EX}${fx}${PC}, from parts on ∫${EX}${fx}${DX}: the second integral moves across and cancels`,
    why: `∫${EX}(${fr('1', x)} − ${fr('1', X2)})${DX} = ${fr(EX, x)}${PC}, with ${f} = ${fr('1', x)}.`,
    say: `${EX} times (${f} plus ${f}-prime) = ${EX} times ${f}.`,
  },
  // pp. 482–483, 485
  {
    topic: 5,
    kind: 'remember',
    q: `How is a cycling integral like ∫${EX}${NB}${SIN}${DX} finished?`,
    a: `Two rounds of parts bring ${II} back: ${II} = ${EX}${NB}${SIN} − ${EX}${NB}${COS} − ${II}, so solve 2${II} = ${EX}(${SIN} − ${COS}). In general ∫${sup('e', `${a}${x}`)}${NB}sin${NB}${b}${x}${DX} = ${fr(`${sup('e', `${a}${x}`)}(${a}${NB}sin${NB}${b}${x} − ${b}${NB}cos${NB}${b}${x})`, `${sq(a)} + ${sq(b)}`)}${PC}`,
    why: `For cos: ${fr(`${sup('e', `${a}${x}`)}(${a}${NB}cos${NB}${b}${x} + ${b}${NB}sin${NB}${b}${x})`, `${sq(a)} + ${sq(b)}`)}${PC}.`,
    say: null,
  },
  // pp. 484–485
  {
    topic: 5,
    kind: 'mixup',
    q: `∫${EX}(${SIN} + ${COS})${DX}: ${f} = ${SIN} or ${f} = ${COS}?`,
    a: `${f} = ${SIN}, whose derivative is the other term: ${EX}${NB}${SIN}${PC}. With ${f} = ${COS}, ${f}′ = −${SIN} does not match`,
    why: `${EX}(${SIN} − ${COS})${PC} is 2∫${EX}${NB}${SIN}${DX}, a different integrand.`,
    say: null,
  },
  // pp. 484–485
  {
    topic: 5,
    kind: 'mistake',
    q: `∫${x}${NB}${SIN}${DX}: where does it usually go wrong?`,
    a: `The sign: ${v} = ∫${SIN}${DX} = −${COS}, carried through both terms: −${x}${NB}${COS} + ${SIN}${PC}`,
    why: `${x}${NB}${COS} − ${SIN}${PC} flips every sign.`,
    say: 'Sine integrates to minus cosine: mind the sign.',
  },
  // pp. 483, 485
  {
    topic: 5,
    kind: 'shortcut',
    q: `∫ln${NB}${x}${DX}, with only one function?`,
    a: `Pair it with an invisible “×1”: ${u} = ln${NB}${x}, d${v} = d${x}, giving ${x}${NB}ln${NB}${x} − ${x}${PC}. The same works for a lone ${ATAN(x)} or ${ASIN(x)}`,
    why: `∫${ATAN(x)}${DX} = ${x}${NB}${ATAN(x)} − ${HALF}${NB}ln(1 + ${X2})${PC}.`,
    say: null,
  },

  // ── Topic 07 · Definite Integrals: Definition, the Fundamental Theorem & Limit of a Sum ──
  // pp. 486, 491
  {
    topic: 6,
    kind: 'remember',
    q: 'What is a definite integral?',
    a: `A number: the signed area between ${I('y')} = ${fx} and the ${x}-axis from ${a} to ${b}, above the axis positive, below negative. It has no + ${C}; the total geometric area needs ∫${bar(f)}`,
    why: `${INT('0', 'π')} ${SIN}${DX} = [−${COS}]<sub>0</sub><sup>π</sup> = 1 + 1 = 2.`,
    say: `Upper minus lower, no ${C}.`,
  },
  // pp. 487, 491
  {
    topic: 6,
    kind: 'remember',
    q: 'What does the Second Fundamental Theorem say?',
    a: `If ${F}′ = ${f}, then ${INT(a, b)} ${fx}${DX} = ${F}(${b}) − ${F}(${a}), upper minus lower, for any anti-derivative ${F}: its constant cancels`,
    why: `${INT('1', '2')} (3${X2} − 2${x} + 1)${DX} = ${F}(2) − ${F}(1) = 6 − 1 = 5, with ${F} = ${sup(x, '3')} − ${X2} + ${x}.`,
    say: null,
  },
  // pp. 487–488
  {
    topic: 6,
    kind: 'remember',
    q: 'What does the First Fundamental Theorem say, and why is it true?',
    a: `For ${f} continuous, ${A}(${x}) = ${INT(a, x)} ${f}(${t})${DT} has ${A}′(${x}) = ${fx}: raising the upper limit by Δ${x} adds a strip of area about ${fx}${NB}Δ${x}`,
    why: `${fr('d', `d${x}`)}${NB}${INT('0', x)} ${sq(t)}${DT} = ${X2}.`,
    say: 'Differentiate an integral → get the integrand back.',
  },
  // pp. 487–489, 491
  {
    topic: 6,
    kind: 'remember',
    q: 'What is the definite integral as a limit of a sum?',
    a: `${INT(a, b)} ${fx}${DX} = ${LIM}${NB}${I('h')}${SUM(`${r}=0`, `${n}−1`)} ${f}(${a} + ${r}${I('h')}), ${I('h')} = ${fr(`${b} − ${a}`, n)}. The power sums: ∑${NB}1 = ${n}, ∑${NB}${r} = ${fr(`${n}(${n} − 1)`, '2')}, ∑${NB}${sq(r)} = ${fr(`(${n} − 1)${n}(2${n} − 1)`, '6')}`,
    why: `${INT('0', '2')} (${X2} + 2${x})${DX} from first principles is ${fr('8', '3')} + 4 = ${fr('20', '3')}, as the Fundamental Theorem gives.`,
    say: null,
  },
  // p. 487
  {
    topic: 6,
    kind: 'remember',
    q: 'Which three structural properties rest on the definition?',
    a: `Dummy variable: ${INT(a, b)} ${fx}${DX} = ${INT(a, b)} ${f}(${t})${DT}. Reversal: ${INT(a, b)} = −${INT(b, a)}. Additivity: ${INT(a, b)} = ${INT(a, c)} + ${INT(c, b)}`,
    why: 'Additivity is what lets a piecewise integrand be split at its breakpoints.',
    say: null,
  },
  // pp. 490–491
  {
    topic: 6,
    kind: 'mixup',
    q: `${F}(${b}) − ${F}(${a}) or ${F}(${a}) − ${F}(${b})?`,
    a: `Upper minus lower, ${F}(${b}) − ${F}(${a}). The other order flips the sign, exactly as swapping the limits does`,
    why: `${INT('0', 'π')} ${SIN}${DX} = −cos${NB}π + cos${NB}0 = 2; lower minus upper gives −2.`,
    say: null,
  },
  // pp. 490–491
  {
    topic: 6,
    kind: 'mistake',
    q: `Where does ${I('h')} go in a limit of a sum?`,
    a: `It multiplies the whole sum, ${I('h')}${NB}∑${NB}${f}(${a} + ${r}${I('h')}) with ${I('h')} = ${fr(`${b} − ${a}`, n)}; dropping it scales the answer wrongly`,
    why: `For ${INT('0', '1')} ${X2}${DX}, ${fr('1', sup(n, '3'))}${NB}∑${NB}${sq(r)} → ${fr('2', '6')} = ${fr('1', '3')}; losing the 2 of 2${n} gives the wrong ${fr('1', '6')}.`,
    say: null,
  },
  // p. 488
  {
    topic: 6,
    kind: 'shortcut',
    q: `${INT('1', 'e')} ${fr('1', x)}${DX} at sight?`,
    a: `1: [ln${NB}${x}] from 1 to e is ln${NB}e − ln${NB}1 = 1 − 0. Limits are often chosen so the logs collapse`,
    why: `Likewise ${INT('1', '3')} ${fr('1', x)}${DX} = ln${NB}3.`,
    say: null,
  },

  // ── Topic 08 · Evaluation of Definite Integrals by Substitution ──
  // pp. 492–493, 496
  {
    topic: 7,
    kind: 'remember',
    q: 'What happens to the limits when a definite integral is substituted?',
    a: `They move with the variable: ${INT(a, b)} ${f}(${gx})${NB}${gpx}${DX} = ${INT(`${g}(${a})`, `${g}(${b})`)} ${f}(${u})${DU}. As ${x} sweeps ${a} to ${b}, ${u} sweeps ${g}(${a}) to ${g}(${b})`,
    why: `${INT('0', 'π/2')} ${SIN}${NB}${COS}${DX}: ${u} = ${SIN} runs 0 to 1, giving ${INT('0', '1')} ${u}${DU} = ${HALF}.`,
    say: 'New variable, new limits.',
  },
  // pp. 492, 496
  {
    topic: 7,
    kind: 'remember',
    q: 'What are the two valid methods?',
    a: `Method A: change the limits to ${u}-values and finish in ${u}, with no back-substitution (preferred, faster). Method B: keep the ${x}-limits, integrate, return to ${x}, then apply them. Pick one; never mix`,
    why: `Write the new ${u}-limits next to the integral sign at once, so they cannot be forgotten.`,
    say: 'Change the ends or change back, not both.',
  },
  // pp. 492, 495–496
  {
    topic: 7,
    kind: 'remember',
    q: 'When is the substitution valid across the whole interval?',
    a: `${g}′ must be continuous on [${a}, ${b}]; and if ${x} has to be written back in terms of ${u}, ${g} must also be one-to-one there. Otherwise split the interval first`,
    why: `${u} = ${X2} across 0 is not one-to-one: split unless the integrand is already ${f}(${gx})${NB}${gpx}.`,
    say: null,
  },
  // pp. 492, 494
  {
    topic: 7,
    kind: 'remember',
    q: `How does a change of variable that keeps the limits evaluate ${INT('0', 'π/2')} ${fr(`√(${SIN})`, `√(${SIN}) + √(${COS})`)}${DX}?`,
    a: `${x} → ${PI2} − ${x} keeps 0 and ${PI2} and swaps sin and cos. Adding the two forms, 2${II} = ${INT('0', 'π/2')} 1${DX} = ${PI2}, so ${II} = ${fr('π', '4')}`,
    why: 'The king and even-odd properties are proved by exactly this limit-changing mechanism.',
    say: null,
  },
  // pp. 495–496
  {
    topic: 7,
    kind: 'mixup',
    q: `${x}-limits or ${u}-limits on ∫${f}(${u})${DU}?`,
    a: `${u}-limits, ${g}(${a}) and ${g}(${b}). The ${x}-limits belong to the ${x}-integral only; putting them on a ${u}-integral mixes two rulers`,
    why: `${INT('0', '2')} ${x}(${X2} + 1)${DX} with ${u} = ${X2} + 1 runs from 1 to 5, not 0 to 2 (0 to 5 and 1 to 4 each forget a + 1).`,
    say: null,
  },
  // pp. 493, 495
  {
    topic: 7,
    kind: 'mistake',
    q: `${INT('0', '1')} ${fr(x, `${X2} + 1`)}${DX} with ${u} = ${X2} + 1: once the limits are 1 and 2, is the ${HALF} still needed?`,
    a: `Yes: ${x}${DX} = ${HALF}${NB}d${u} still applies, so the value is ${HALF}${NB}ln${NB}2. Limits and integrand both transform`,
    why: `Without it the answer doubles to ln${NB}2; with numerator 2${x} there is no ${HALF}.`,
    say: null,
  },
  // pp. 495–496
  {
    topic: 7,
    kind: 'shortcut',
    q: `${INT('0', 'π/2')} ${COS}${NB}${sup('e', `sin${NB}${x}`)}${DX} in one line?`,
    a: `e − 1: ${u} = ${SIN} runs 0 to 1, and ${INT('0', '1')} ${sup('e', u)}${DU} = e − 1`,
    why: 'e alone forgets the lower-limit value; e + 1 adds instead of subtracting.',
    say: null,
  },

  // ── Topic 09 · Properties of Definite Integrals: The Symmetry Toolkit ──
  // pp. 498–499, 504
  {
    topic: 8,
    kind: 'remember',
    q: 'What is the king property?',
    a: `${INT(a, b)} ${fx}${DX} = ${INT(a, b)} ${f}(${a} + ${b} − ${x})${DX}, and ${INT('0', a)} ${fx}${DX} = ${INT('0', a)} ${f}(${a} − ${x})${DX}. Proof: ${t} = ${a} + ${b} − ${x} reverses the limits and −d${t} reverses them back`,
    why: `The signature move: add the original and the flipped integral, solve 2${II} = (easy), then halve.`,
    say: 'King swaps the ends.',
  },
  // pp. 498–499, 504
  {
    topic: 8,
    kind: 'remember',
    q: `What do even and odd integrands give on [−${a}, ${a}]?`,
    a: `${INT(`−${a}`, a)} ${fx}${DX} = 2${INT('0', a)} ${fx}${DX} for even ${f}, and 0 for odd ${f}. Parity arithmetic: even × even and odd × odd are even, even × odd is odd, a constant is even`,
    why: `${INT('−π/2', 'π/2')} (${X2}${NB}${SIN} + ${x}${NB}${COS} + 4)${DX} = 4π: only the constant survives.`,
    say: 'Odd dies on a mirror.',
  },
  // pp. 498–499
  {
    topic: 8,
    kind: 'remember',
    q: `What is the zero-to-2${a} split?`,
    a: `${INT('0', `2${a}`)} ${fx}${DX} = ${INT('0', a)} ${fx}${DX} + ${INT('0', a)} ${f}(2${a} − ${x})${DX}: so 2${INT('0', a)} ${fx}${DX} if ${f}(2${a} − ${x}) = ${fx}, and 0 if ${f}(2${a} − ${x}) = −${fx}`,
    why: `${INT('0', 'π')} ${tf('sin', x, '3')}${DX} = 2${INT('0', 'π/2')} ${tf('sin', x, '3')}${DX} = 2 · ${fr('2', '3')} = ${fr('4', '3')}.`,
    say: null,
  },
  // pp. 498, 500–501, 504
  {
    topic: 8,
    kind: 'remember',
    q: `What is the periodic property, and the period of ${bar(SIN)} and ${bar(COS)}?`,
    a: `If ${f}(${x} + ${T}) = ${fx}, then ${INT('0', `${n}${T}`)} ${fx}${DX} = ${n}${INT('0', T)} ${fx}${DX} for a positive integer ${n}. The modulus folds the negative hump of sine or cosine up, so ${bar(SIN)} and ${bar(COS)} have period π`,
    why: `${INT('0', '10π')} ${bar(SIN)}${DX} = 10${INT('0', 'π')} ${SIN}${DX} = 10 × 2 = 20.`,
    say: 'Modulus halves the period.',
  },
  // pp. 500, 503
  {
    topic: 8,
    kind: 'remember',
    q: 'What is the scan before writing any anti-derivative?',
    a: `Read the limits first. Symmetric: delete the odd terms. Modulus, greatest-integer or piecewise: split at the sign changes. 0 to ${a} or ${a} to ${b} with sin and cos, or an ${fr(f, `${f} + ${g}`)} shape: king, then add. A lone ${x} times a function of ${SIN} on [0, π]: king. Whole periods: collapse. Otherwise the Fundamental Theorem`,
    why: `${INT('0', '4')} ${bar(`${x} − 2`)}${DX} = 2 + 2 = 4, split at ${x} = 2.`,
    say: null,
  },
  // pp. 499, 503
  {
    topic: 8,
    kind: 'mixup',
    q: `King: ${x} → ${b} − ${x} or ${x} → ${a} + ${b} − ${x}?`,
    a: `${a} + ${b} − ${x}, the sum of the limits minus ${x}. ${b} − ${x} is right only when the lower limit is 0`,
    why: `On [0, ${PI2}] the flip is ${PI2} − ${x}, which swaps sin and cos.`,
    say: null,
  },
  // pp. 502–503
  {
    topic: 8,
    kind: 'mistake',
    q: 'Does an odd integrand vanish on [0, 2] or [1, 3]?',
    a: `Not by parity: even-odd cancellation needs symmetric limits, −${a} to ${a}. On any other interval parity tells you nothing`,
    why: `${INT('−4', '4')} ${fr(sup(x, '3'), `${sup(x, '4')} + 1`)}${DX} = 0 at once, because the integrand is odd and the limits symmetric.`,
    say: null,
  },
  // pp. 502–504
  {
    topic: 8,
    kind: 'mistake',
    q: `After the king step, 2${II} = ${PI2}. The answer?`,
    a: `${II} = ${fr('π', '4')}: divide by two. Reporting 2${II} as ${II} doubles every king answer`,
    why: `For ${INT('0', 'π/2')} ${fr(COS, `${SIN} + ${COS}`)}${DX}, ${PI2} is the planted wrong option.`,
    say: `Solve for ${II}, then halve.`,
  },
  // pp. 501, 503
  {
    topic: 8,
    kind: 'shortcut',
    q: `${INT('0', 'π')} ${x}${NB}${tf('sin', x, '3')}${DX}?`,
    a: `${fr('2π', '3')}. King turns ${x} into π − ${x} and leaves ${tf('sin', x, '3')} alone: ${II} = π${INT('0', 'π')} ${tf('sin', x, '3')}${DX} − ${II}, so 2${II} = π · ${fr('4', '3')}`,
    why: `The lone ${x} folds into the constant π: no integration by parts.`,
    say: null,
  },

  // ── Additional A · Differentiating an Integral Whose Limits Move ──
  // pp. 505–506
  {
    topic: 9,
    kind: 'remember',
    q: 'What is the general Leibniz rule?',
    a: `For ${f} continuous and ${u}, ${v} differentiable, ${F}(${x}) = ${INT(`${u}(${x})`, `${v}(${x})`)} ${f}(${t})${DT} has ${F}′(${x}) = ${f}(${v}(${x}))${NB}${v}′(${x}) − ${f}(${u}(${x}))${NB}${u}′(${x}). A fixed limit contributes nothing`,
    why: `${F}(${x}) = ${INT('0', X2)} (3${sq(t)} + 1)${DT}: ${F}′(${x}) = (3${sup(x, '4')} + 1)(2${x}) = 6${sup(x, '5')} + 2${x}, as integrating first confirms.`,
    say: 'Top limit in, bottom limit out.',
  },
  // pp. 505–506
  {
    topic: 9,
    kind: 'remember',
    q: `What do symmetric limits [−${x}, ${x}] give?`,
    a: `${F}′(${x}) = ${fx} + ${f}(−${x}): 2${fx} for an even ${f}, and 0 for an odd ${f}, whose accumulated integral is constant, as parity predicts`,
    why: `With a fixed lower limit the rule gives back ${fx} · 1 − ${f}(${a}) · 0 = ${fx}.`,
    say: 'Never hunt for an anti-derivative first.',
  },
  // p. 507
  {
    topic: 9,
    kind: 'mixup',
    q: `${INT(x, X2)} ${fr(`d${t}`, `${t}${NB}ln${NB}${t}`)} and ${INT(x, X2)} ${fr(`d${t}`, `ln${NB}${t}`)}: both constant?`,
    a: `Only the first: its derivative is ${fr(`2${x}`, `2${X2}${NB}ln${NB}${x}`)} − ${fr('1', `${x}${NB}ln${NB}${x}`)} = 0, and it equals ln${NB}2 on each of (0, 1) and (1, ∞). The second has derivative ${fr(`${x} − 1`, `ln${NB}${x}`)} ≠ 0`,
    why: `The integrand is evaluated at the moving limit ${X2} and multiplied by its derivative 2${x}.`,
    say: null,
  },
  // p. 507
  {
    topic: 9,
    kind: 'mistake',
    q: `${f}(${x}) = ${INT('0', x)} (${x} − ${t})${NB}${g}(${t})${DT}: is ${f}′(${x}) = (${x} − ${x})${gx} = 0?`,
    a: `No: ${x} sits inside the integrand too, so pull it out first, ${fx} = ${x}${INT('0', x)} ${g}(${t})${DT} − ${INT('0', x)} ${t}${NB}${g}(${t})${DT}. Then ${f}′(${x}) = ${INT('0', x)} ${g}(${t})${DT} and ${f}″(${x}) = ${gx}`,
    why: `Check with ${g} = 1: ${fx} = ${fr(X2, '2')} and ${f}″ = 1.`,
    say: null,
  },
  // p. 506
  {
    topic: 9,
    kind: 'shortcut',
    q: `The local minimum value of ${F}(${x}) = ${INT('0', x)} (${t} − 1)(${t} − 2)${DT}?`,
    a: `${F}′(${x}) = (${x} − 1)(${x} − 2) changes from − to + at ${x} = 2, so the local minimum is ${F}(2) = ${fr('2', '3')}. It is not a global minimum: ${F} → −∞ as ${x} → −∞`,
    why: `${x} = 1 is the local maximum, ${F}(1) = ${fr('5', '6')}: the sign of ${F}′ settles both without integrating first.`,
    say: null,
  },

  // ── Additional B · Reading a Limit Backwards: Riemann Sums in Reverse ──
  // pp. 508–509
  {
    topic: 10,
    kind: 'remember',
    q: 'How is a limit of a sum read as an integral?',
    a: `${INT('0', '1')} ${fx}${DX} = ${LIM}${NB}${fr('1', n)}${SUM(`${r}=1`, n)} ${f}(${fr(r, n)}). Take ${fr('1', n)} out as ${I('h')}, make the rest a function of ${fr(r, n)} alone, read the limits off the range of ${fr(r, n)}, then integrate`,
    why: `${LIM}${NB}${SUM(`${r}=1`, n)} ${fr(n, `${sq(n)} + ${sq(r)}`)} = ${INT('0', '1')} ${fr(`d${x}`, `1 + ${X2}`)} = ${fr('π', '4')}.`,
    say: `Factor ${fr('1', n)} out of the summand: this is your ${I('h')}.`,
  },
  // pp. 508–509
  {
    topic: 10,
    kind: 'remember',
    q: `How is the rest of the summand made a function of ${fr(r, n)}?`,
    a: `Divide top and bottom by the highest power of ${n} present: ${fr(n, `${sq(n)} + ${sq(r)}`)} = ${fr('1', n)} · 1 ÷ (1 + (${fr(r, n)})<sup>2</sup>). A constant shift such as ${f}(${fr(`${r} + 1`, n)}) does not change the limit`,
    why: `${LIM}${NB}${SUM(`${r}=1`, n)} ${fr(n, `${sq(n)} + ${n}${r} + ${sq(r)}`)} = ${INT('0', '1')} ${fr(`d${x}`, `1 + ${x} + ${X2}`)} = ${fr('π', '3√3')}.`,
    say: 'The shifted grid still fills the same interval.',
  },
  // p. 509
  {
    topic: 10,
    kind: 'mixup',
    q: `∑ from ${r} = 1 to ${n}, or from ${r} = ${n} + 1 to 2${n}: the same integral?`,
    a: `No: ${fr(r, n)} runs over (0, 1] in the first and (1, 2] in the second, so they read as ${INT('0', '1')} and ${INT('1', '2')}`,
    why: `${LIM}${NB}${fr('1', n)}${SUM(`${r}=${n}+1`, `2${n}`)} ${fr(r, `√(${sq(n)} + ${sq(r)})`)} = ${INT('1', '2')} ${fr(x, `√(1 + ${X2})`)}${DX} = √5 − √2.`,
    say: null,
  },
  // pp. 509–510
  {
    topic: 10,
    kind: 'mistake',
    q: `${LIM}${NB}${fr('1', n)}${NB}∑${NB}ln${NB}${fr(r, n)} = ${INT('0', '1')} ln${NB}${x}${DX}: evaluate at 0 by the Fundamental Theorem?`,
    a: `Not blindly: the integral is improper at 0. Cut at ${I('ε')}: [${x}${NB}ln${NB}${x} − ${x}] from ${I('ε')} to 1 is −1 − ${I('ε')}${NB}ln${NB}${I('ε')} + ${I('ε')}, and ${I('ε')}${NB}ln${NB}${I('ε')} → 0, so the value is −1`,
    why: `Hence ${LIM}${NB}${fr(`(${n}!)<sup>1/${n}</sup>`, n)} = e<sup>−1</sup>.`,
    say: null,
  },
  // p. 510
  {
    topic: 10,
    kind: 'shortcut',
    q: `${LIM}${NB}${fr('1', sq(n))}${SUM(`${r}=1`, n)} ${r}${NB}${sup('e', `${r}/${n}`)}?`,
    a: `1: it is ${fr('1', n)}${NB}∑${NB}${fr(r, n)}${NB}${sup('e', `${r}/${n}`)} → ${INT('0', '1')} ${x}${EX}${DX} = [${x}${EX} − ${EX}]<sub>0</sub><sup>1</sup> = 1`,
    why: `Split one ${fr('1', n)} off first: it is always the ${I('h')}.`,
    say: null,
  },

  // ── Additional C · King Property Power Plays ──
  // p. 511
  {
    topic: 11,
    kind: 'remember',
    q: 'What is the quotient theorem?',
    a: `For ${f} continuous on [0, ${a}] with ${fx} + ${f}(${a} − ${x}) ≠ 0 there, ${INT('0', a)} ${fr(fx, `${fx} + ${f}(${a} − ${x})`)}${DX} = ${fr(a, '2')}. Proof: the king step leaves it unchanged; adding, the denominators are identical and 2${II} = ${a}`,
    why: `${INT('0', 'π/2')} ${fr(`d${x}`, `1 + √(${TAN})`)} = ${fr('π', '4')}, with ${f} = √(${COS}).`,
    say: 'Add the two expressions; the denominators are identical.',
  },
  // pp. 511–512
  {
    topic: 11,
    kind: 'remember',
    q: `What are the ${x}-peeling theorem and the reciprocal substitution?`,
    a: `${INT('0', 'π')} ${x}${NB}${f}(${SIN})${DX} = ${PI2}${NB}${INT('0', 'π')} ${f}(${SIN})${DX} for ${f} continuous on [0, 1]. For ${p} > 0, ${x} = ${fr('1', t)} turns ${INT(p, `1/${p}`)} ${fx}${DX} into ${INT(p, `1/${p}`)} (${f}(${fr('1', t)}) ÷ ${sq(t)})${DT}: the limits flip and the minus in d${x} flips them back`,
    why: `${INT('0', 'π')} ${fr(`${x}${NB}${SIN}`, `1 + ${tf('cos', x, '2')}`)}${DX} = ${PI2} · ${PI2} = ${fr(sq('π'), '4')}, since 1 + ${tf('cos', x, '2')} = 2 − ${tf('sin', x, '2')}.`,
    say: `Solve for ${II} and halve.`,
  },
  // pp. 512–513
  {
    topic: 11,
    kind: 'mixup',
    q: `${INT('0', 'π/2')} ln(${SIN})${DX} against ${INT('0', 'π/2')} ln(${TAN})${DX}?`,
    a: `−${PI2}${NB}ln${NB}2 and 0: ln${NB}tan = ln${NB}sin − ln${NB}cos, and the king step makes those two integrals equal`,
    why: `${INT('0', 'π/2')} ln(${tf('sec', x)})${DX} = ${PI2}${NB}ln${NB}2, since ln${NB}sec = −ln${NB}cos.`,
    say: null,
  },
  // pp. 512–513
  {
    topic: 11,
    kind: 'mistake',
    q: `${INT('1/4', '4')} ${fr(`ln${NB}${x}`, `1 + ${X2}`)}${DX}: hunt for an anti-derivative?`,
    a: `No: ${x} = ${fr('1', t)} keeps the limits and turns the integral into −${II}, so ${II} = 0`,
    why: 'Nothing in this topic needs an anti-derivative: the log-sine result is reached by the king step twice and a rescaling.',
    say: null,
  },
  // p. 514
  {
    topic: 11,
    kind: 'shortcut',
    q: `${INT('0', 'π/2')} ${fr(`d${x}`, `1 + ${tf('cot', x)}`)}?`,
    a: `${fr('π', '4')}: ${fr('1', `1 + ${tf('cot', x)}`)} = ${fr(SIN, `${SIN} + ${COS}`)}, the quotient theorem with ${f} = sin and ${a} = ${PI2}`,
    why: `Recognise ${fr(fx, `${fx} + ${f}(${a} − ${x})`)} and write ${fr(a, '2')} at once.`,
    say: null,
  },

  // ── Additional D · Rational Functions of sin x and cos x: the Half-Angle Substitution ──
  // pp. 514–515
  {
    topic: 12,
    kind: 'remember',
    q: 'What is the half-angle substitution?',
    a: `${t} = tan${NB}${fr(x, '2')}: ${SIN} = ${fr(`2${t}`, `1 + ${sq(t)}`)}, ${COS} = ${fr(`1 − ${sq(t)}`, `1 + ${sq(t)}`)}, d${x} = ${fr(`2${NB}d${t}`, `1 + ${sq(t)}`)}. Every rational function of ${SIN} and ${COS} becomes an ordinary rational function of ${t}, for partial fractions`,
    why: `From ${SIN} = 2${NB}sin${NB}${fr(x, '2')}${NB}cos${NB}${fr(x, '2')} and ${COS} = ${tf('cos', fr(x, '2'), '2')} − ${tf('sin', fr(x, '2'), '2')}, divided by ${tf('cos', fr(x, '2'), '2')}.`,
    say: `Set ${t} = tan${NB}${fr(x, '2')}.`,
  },
  // p. 515
  {
    topic: 12,
    kind: 'remember',
    q: `∫${fr(`d${x}`, `3 + 5${NB}${COS}`)}?`,
    a: `The denominator becomes ${fr(`8 − 2${sq(t)}`, `1 + ${sq(t)}`)}, so the integral is ∫${fr(`d${t}`, `4 − ${sq(t)}`)} = ${fr('1', '4')}${NB}ln${bar(fr(`2 + ${t}`, `2 − ${t}`))}${PC}, ${t} = tan${NB}${fr(x, '2')}`,
    why: `One 1 + ${sq(t)} always cancels against d${x}.`,
    say: null,
  },
  // p. 514
  {
    topic: 12,
    kind: 'mixup',
    q: `Powers and products of sin and cos, or a quotient like ${fr('1', `3 + 5${NB}${COS}`)}: which tool?`,
    a: 'Powers and products: the identities (halve, peel, product-to-sum). Quotients: the half-angle substitution, then partial fractions',
    why: 'Identity-juggling cracks such quotients only case by case.',
    say: null,
  },
  // pp. 515–516
  {
    topic: 12,
    kind: 'mistake',
    q: `Can ${t} = tan${NB}${fr(x, '2')} be used on any interval of a definite integral?`,
    a: `No: it fails at ${x} = (2${k} + 1)π, where tan${NB}${fr(x, '2')} blows up, and is non-monotone across such points. Check that no odd multiple of π lies inside; otherwise split first`,
    why: `On [0, ${PI2}], ${t} runs from 0 to tan${NB}${fr('π', '4')} = 1: ${INT('0', 'π/2')} ${fr(`d${x}`, `2 + ${COS}`)} = ${INT('0', '1')} ${fr(`2${NB}d${t}`, `${sq(t)} + 3`)} = ${fr('π', '3√3')}.`,
    say: null,
  },
  // pp. 515–516
  {
    topic: 12,
    kind: 'shortcut',
    q: `${INT('0', 'π/2')} ${fr(`d${x}`, `1 + ${SIN} + ${COS}`)}?`,
    a: `ln${NB}2: the denominator becomes ${fr(`2(1 + ${t})`, `1 + ${sq(t)}`)}, so the integral is ${INT('0', '1')} ${fr(`d${t}`, `1 + ${t}`)}`,
    why: `When the denominator factors, factor before substituting: ${SIN} + sin${NB}2${x} = ${SIN}(1 + 2${NB}${COS}).`,
    say: 'Factor the denominator first.',
  },

  // ── Additional E · Reduction Formulas: Integrating Powers Systematically ──
  // pp. 517, 519
  {
    topic: 13,
    kind: 'remember',
    q: `What is the recurrence for ${sb(II, n)} = ∫${tf('tan', x, n)}${DX}?`,
    a: `${sb(II, n)} = ${fr(tf('tan', x, `${n}−1`), `${n} − 1`)} − ${sb(II, `${n}−2`)} for ${n} ≥ 2: split off ${tf('tan', x, '2')} = ${tf('sec', x, '2')} − 1, and the first piece is an exact substitution`,
    why: `∫${tf('tan', x, '3')}${DX} = ${fr(tf('tan', x, '2'), '2')} + ${LN(COS)}${PC}.`,
    say: `Split off one ${tf('tan', x, '2')} and use ${tf('tan', x, '2')} = ${tf('sec', x, '2')} − 1.`,
  },
  // pp. 517–518
  {
    topic: 13,
    kind: 'remember',
    q: 'What are the recurrences for powers of sec and for the Wallis integral?',
    a: `For ${sb(II, n)} = ∫${tf('sec', x, n)}${DX}: (${n} − 1)${sb(II, n)} = ${tf('sec', x, `${n}−2`)}${NB}${TAN} + (${n} − 2)${sb(II, `${n}−2`)}. For ${sb(W, n)} = ${INT('0', 'π/2')} ${tf('sin', x, n)}${DX}: ${sb(W, n)} = ${fr(`${n} − 1`, n)}${NB}${sb(W, `${n}−2`)}, ${sb(W, '0')} = ${PI2}, ${sb(W, '1')} = 1`,
    why: `Iterating down to ${sb(W, '0')} or ${sb(W, '1')} reproduces Wallis’ formula: the proof behind it.`,
    say: `Peel one ${tf('sec', x, '2')} and apply parts.`,
  },
  // pp. 517–519
  {
    topic: 13,
    kind: 'mixup',
    q: 'Which recurrence comes from substitution, and which from parts?',
    a: `Tangent: substitution, since ${fr('d', `d${x}`)}${NB}${TAN} = ${tf('sec', x, '2')}. Secant and the Wallis integral: parts (${u} = ${tf('sec', x, `${n}−2`)}, d${v} = ${tf('sec', x, '2')}${DX}; ${u} = ${tf('sin', x, `${n}−1`)}, d${v} = ${SIN}${DX})`,
    why: `For ${sb(W, n)} the boundary term [−${tf('sin', x, `${n}−1`)}${NB}${COS}] vanishes at both ends.`,
    say: null,
  },
  // pp. 518–519
  {
    topic: 13,
    kind: 'mistake',
    q: `Is ∫${tf('tan', x, '4')}${DX} = ${fr(tf('tan', x, '5'), '5')}${PC}?`,
    a: `No: that would need a ${tf('sec', x, '2')} factor. The recurrence gives ${fr(tf('tan', x, '3'), '3')} − ${TAN} + ${x}${PC}`,
    why: `Check by differentiating: ${tf('tan', x, '2')}${NB}${tf('sec', x, '2')} − ${tf('sec', x, '2')} + 1 = ${tf('tan', x, '4')}.`,
    say: null,
  },
  // pp. 518–519
  {
    topic: 13,
    kind: 'shortcut',
    q: `${INT('0', 'π/2')} ${tf('sin', x, '8')}${DX}?`,
    a: `${fr('35π', '256')}: ${sb(W, '8')} = ${fr('7', '8')} · ${fr('5', '6')} · ${fr('3', '4')} · ${fr('1', '2')} · ${PI2}, as Wallis’ formula confirms`,
    why: `${INT('0', 'π/2')} ${tf('cos', x, '7')}${DX} equals ${sb(W, '7')} by the king step: ${fr('6', '7')} · ${fr('4', '5')} · ${fr('2', '3')} · 1 = ${fr('16', '35')}.`,
    say: null,
  },

  // ── Additional F · Breakpoint Integrands II: Greatest Integer, Fractional Part, Min/Max ──
  // pp. 520–521
  {
    topic: 14,
    kind: 'remember',
    q: 'How is a greatest-integer integrand integrated?',
    a: `[${x}] = ${k} on [${k}, ${k} + 1), so chop at every integer inside and sum rectangles: for integers ${m} < ${n}, ${INT(m, n)} [${x}]${DX} = ${fr(`(${n} − 1)${n}`, '2')} − ${fr(`(${m} − 1)${m}`, '2')}`,
    why: `${INT('−2', '3')} [${x}]${DX} = −2 − 1 + 0 + 1 + 2 = 0.`,
    say: 'Endpoint values never matter: a single point carries no width.',
  },
  // pp. 520–521
  {
    topic: 14,
    kind: 'remember',
    q: 'How are the fractional part and min/max handled?',
    a: `{${x}} = ${x} − [${x}] has period 1, so ${INT('0', T)} {${x}}${DX} = ${fr(T, '2')} for a positive integer ${T}. Min/max: solve where the two expressions are equal, split there, and test one interior point per piece`,
    why: `${INT('0', '2')} min(${X2}, ${x})${DX} = ${fr('1', '3')} + ${fr('3', '2')} = ${fr('11', '6')}.`,
    say: 'Whenever a question says area, split at zeros; whenever it says evaluate the integral, do not.',
  },
  // pp. 520–521
  {
    topic: 14,
    kind: 'mixup',
    q: 'Signed integral or area?',
    a: `“Evaluate the integral”: the signed ${INT(a, b)} ${f}, below-axis parts negative. “Area”: ${INT(a, b)} ${bar(f)}, split at the roots of ${f}`,
    why: `${I('y')} = ${sup(x, '3')} − 3${x} on [−√3, √3]: the integral is 0, the area ${fr('9', '2')}.`,
    say: null,
  },
  // p. 521
  {
    topic: 14,
    kind: 'mistake',
    q: `Is ${INT('0', '2π')} [${SIN}]${DX} = 0 by symmetry?`,
    a: `No: −π. On (0, π), [${SIN}] = 0 (the point ${PI2} carries no width); on (π, 2π), [${SIN}] = −1`,
    why: 'Locate where the inside crosses an integer before splitting.',
    say: null,
  },
  // p. 520
  {
    topic: 14,
    kind: 'shortcut',
    q: `${INT('0', '3')} (${x} − [${x}])${DX}?`,
    a: `${fr('3', '2')}: ${x} − [${x}] = {${x}} has period 1, so three periods give 3 · ${HALF}`,
    why: `${INT('0', '5')} [${x}]${DX} = 0 + 1 + 2 + 3 + 4 = 10.`,
    say: null,
  },

  // ── Additional P · What JEE Actually Asks ──
  // pp. 522–523
  {
    topic: 15,
    kind: 'shortcut',
    q: `On [0, ${a}], ${fx} = ${f}(${a} − ${x}) and ${gx} + ${g}(${a} − ${x}) = 4: what is ${INT('0', a)} ${fx}${gx}${DX}?`,
    a: `2${INT('0', a)} ${fx}${DX}: the flip gives ${II} = ${INT('0', a)} ${fx}(4 − ${gx})${DX}; adding, 2${II} = 4${INT('0', a)} ${fx}${DX}`,
    why: 'No anti-derivative was ever needed.',
    say: 'If your answer is ugly, you have almost certainly missed a symmetry.',
  },
  // p. 524
  {
    topic: 15,
    kind: 'remember',
    q: `${INT('0', '3/2')} [${X2}]${DX}?`,
    a: `2 − √2: on [0, ${fr('3', '2')}], ${X2} reaches only the integers 1 and 2, at ${x} = 1 and ${x} = √2 (3 would need √3 > ${fr('3', '2')}). So 0 · 1 + 1(√2 − 1) + 2(${fr('3', '2')} − √2)`,
    why: 'Locate every breakpoint where the inside crosses an integer, split with additivity, integrate the clean pieces.',
    say: null,
  },
  // p. 524
  {
    topic: 15,
    kind: 'shortcut',
    q: `${F}(${x}) = ${INT('1', x)} ${sq(t)}${g}(${t})${DT} with ${g}(${t}) = ${INT('1', t)} ${f}(${u})${DU} and ${f}(1) = 3: what is ${x} = 1 for ${F}?`,
    a: `A strict local minimum: ${F}′(${x}) = ${X2}${gx}, so ${F}′(1) = ${g}(1) = 0; ${F}″(${x}) = 2${x}${gx} + ${X2}${fx}, so ${F}″(1) = 3 > 0`,
    why: 'Differentiate with the Fundamental Theorem and the chain rule; never evaluate the integral.',
    say: 'Never attempt the integral itself.',
  },
  // p. 526
  {
    topic: 15,
    kind: 'mistake',
    q: 'Is an anti-derivative of a periodic function periodic?',
    a: `Not necessarily: ${fr(x, '2')} − ${fr(`sin${NB}2${x}`, '4')} + ${C}, an anti-derivative of ${tf('sin', x, '2')}, grows by ${PI2} over each period π`,
    why: `The related slips: dropping the modulus of ${bar(SIN)} so humps cancel, or using period 2π for it.`,
    say: null,
  },
  // p. 526
  {
    topic: 15,
    kind: 'mistake',
    q: 'A question asks you to bound an integral. The trap?',
    a: 'Grinding for an anti-derivative. Bounding items want squeeze estimates or the monotonicity of a ratio, not a value',
    why: `Likewise a substitution that ignores the principal branch of ${ATAN(x)} silently changes the integrand.`,
    say: null,
  },
];
