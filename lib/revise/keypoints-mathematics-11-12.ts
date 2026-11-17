/**
 * KEY POINTS for Mathematics Class 11, Chapter 12 (Limits and Derivatives).
 *
 * Written for test mode: every point is a question to answer in your head,
 * then the answer and at most one more line. Four kinds, each a section on
 * the screen: Remember, Don't mix up, Common mistakes and Exam shortcuts.
 * Topics 01–07 and Additional topics A–B each have two or more Remember
 * points, at least one of each other kind and one Exam shortcut; the long
 * ones carry more (Topic 01, the star limit, the indeterminate forms and two
 * Exam shortcuts; Topic 02, the argument-matching, 1^∞ and sandwich points,
 * with two Common mistakes; Topic 03, the product rule and the existence test,
 * with two Don't mix ups; Topic 06, the shift, L’Hopital, the Maclaurin
 * table, the order rule, −∞ and 0 × ∞, with two of every other kind; Topic
 * 07, the bridge theorem, growing sums, the growth ordering, the max-base
 * rule, recursions and the ratio-to-root rule, with two Don't mix ups and two
 * Common mistakes; Additional B, two Common mistakes): 78 points in all.
 * Memory lines are a fifth, short section of their own, read rather than
 * tested: the first two of each topic.
 *
 * `topic`: Topics 01–07 are 0–6 (01–05 the main chapter’s Subtopics 01–05,
 * 06 the supplement’s Subtopic 06, 07 the Additional Topics part’s Subtopic
 * 07); Additional topics A–B are 7–8 (the supplement’s Addenda A–B). No point
 * refers to another topic by number.
 *
 * Every fact is from the Master Reference book (the October 2026 edition); the
 * page (the bottom folio) is above each point. Remember: the topic’s key
 * definitions, formulas, derivations and procedures, and its Cheat sheet.
 * Common mistakes: its Common pitfalls and its MCQ traps (A–B, which have no
 * MCQs: their Pitfalls and worked examples). Exam shortcuts: its Pro-Tips and
 * Speed Trap solutions, with a worked example or practice answer. `say`: the
 * book’s own mnemonics, word for word without their quotation marks and
 * their bracketed glosses, from each cheat sheet’s Memory aids (Topics 01–07:
 * twenty-nine, every one the book prints). A–B print no mnemonics (B’s cheat
 * sheet has an empty Memory aids box), so each has the book’s own one-line
 * sentences instead (A: “The functional equation propagates differentiability
 * across the whole line.” and “Match the operation in the functional equation
 * to the operation you create in the increment …”, cut at its colon; B: its
 * “Whenever a piecewise problem gives you two unknowns …” line, “Impose
 * continuity first.” and the cheat sheet’s “Resolve every modulus on the
 * correct side before differentiating.”): thirty-four in all, eighteen of
 * them memory lines.
 *
 * Where the book over-states a rule, the point states it only with its true
 * condition: the star limit (xⁿ − aⁿ) over (x − a) → naⁿ⁻¹ “for all
 * rational n” (with a > 0 when n is not an integer, as the topic’s own card
 * says); the list of indeterminate forms (1^∞ added); “every expansion
 * begins with the linear term” (eˣ, aˣ, cos x and (1 + x)ⁿ begin with 1);
 * the binomial series “|x| < 1 for non-integer n” (for every n that is not a
 * non-negative integer, negative integers included); “number over 0 … the
 * limit is infinite” (a non-zero number); “0 over 0 at every stage” of a
 * L’Hopital chain (the last stage is a number); “at non-integers, lim [x] =
 * [x]” (the limit at a is [a]); the chain rule’s “needs both links
 * differentiable” (enough, not necessary); a sequence limit “approached from
 * one side only” (the index moves one way; the terms may land from either
 * side); “Steps 2 to 4 fail” for aₙ₊₁ = 2aₙ + 1 (only boundedness fails, the
 * sequence is increasing); its limit “is +∞” (it diverges to +∞, so the limit
 * does not exist, the book’s own definition); the monotone convergence
 * theorem as “the only thing” that establishes existence (it is what these
 * recursions use); “the two summation formulas” (three); and Additional B’s
 * differentiate-each-piece step, which names only continuity (each piece must
 * also be differentiable at c from its side). The Exam relevance claims (“no
 * other technique cracks it cleanly”, which topics “set up but did not
 * deliver”), the Class 12, NCERT and CBSE syllabus remarks, and the use of
 * antiderivatives in Additional A are left out.
 *
 * Markup is the chapter’s own: variables italic, lim, sin, cos, tan, ln
 * upright, subscripts as <sub>; − (U+2212) for minus; every fraction
 * stacked, <frac><num>…</num><den>…</den></frac>, and never a fraction inside
 * a numerator; no em dashes; and always a space after "<" (as the book prints
 * it), so it is never read as a tag. Exam-frequency claims would keep the
 * label "(the book’s estimate from past papers, not official figures)"; none
 * of these points makes one.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

const fr = (t: string, b: string) => `<frac><num>${t}</num><den>${b}</den></frac>`;
const lim = (s: string) => `lim<sub>${s}</sub>`;
const sq = (s: string) => `${s}<sup>2</sup>`;
const NB = ' ';
const a = '<i>a</i>';
const b = '<i>b</i>';
const c = '<i>c</i>';
const e = '<i>e</i>';
const f = '<i>f</i>';
const g = '<i>g</i>';
const h = '<i>h</i>';
const k = '<i>k</i>';
const m = '<i>m</i>';
const n = '<i>n</i>';
const t = '<i>t</i>';
const u = '<i>u</i>';
const v = '<i>v</i>';
const x = '<i>x</i>';
const y = '<i>y</i>';
const L = '<i>L</i>';
const M = '<i>M</i>';
const fx = `${f}(${x})`;
const gx = `${g}(${x})`;
const fp = `${f}′`;
const gp = `${g}′`;
const up = `${u}′`;
const vp = `${v}′`;
const X2 = sq(x);
const X3 = `${x}<sup>3</sup>`;
const XN = `${x}<sup><i>n</i></sup>`;
const AN = `${a}<sup><i>n</i></sup>`;
const EX = `${e}<sup><i>x</i></sup>`;
const AX = `${a}<sup><i>x</i></sup>`;
const an = `${a}<sub><i>n</i></sub>`;
const an1 = `${a}<sub><i>n</i>+1</sub>`;
const HALF = fr('1', '2');
const ZZ = fr('0', '0');
const II = fr('∞', '∞');
const ONEINF = '1<sup>∞</sup>';
const ELIM = `${e}<sup>lim <i>g</i>(<i>f</i> − 1)</sup>`;
const DYDX = fr('<i>dy</i>', '<i>dx</i>');
const DDX = fr('<i>d</i>', '<i>dx</i>');
const LXA = lim(`${x}→${a}`);
const LXAM = lim(`${x}→${a}<sup>−</sup>`);
const LXAP = lim(`${x}→${a}<sup>+</sup>`);
const LH0 = lim(`${h}→0`);
const LX0 = lim(`${x}→0`);
const LX1 = lim(`${x}→1`);
const LXI = lim(`${x}→∞`);
const LXMI = lim(`${x}→−∞`);
const LNI = lim(`${n}→∞`);
const STAR = fr(`${XN} − ${AN}`, `${x} − ${a}`);
const NAN1 = `${n}${a}<sup><i>n</i>−1</sup>`;
const SINX = fr(`sin ${x}`, x);
const COS1 = fr(`1 − cos ${x}`, X2);
const COS1X = fr(`1 − cos ${x}`, x);
const EX1 = fr(`${EX} − 1`, x);
const AX1 = fr(`${AX} − 1`, x);
const DQ = fr(`${f}(${x} + ${h}) − ${fx}`, h);
const DQA = fr(`${f}(${a} + ${h}) − ${f}(${a})`, h);
const ROOT = (s: string) => `√(${X2} + ${s})`;

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Limits: Concepts & Algebra ──
  // pp. 1062, 1064, 1068
  {
    topic: 0,
    kind: 'remember',
    q: 'What does lim f(x) = L as x → a say, and does the value f(a) matter?',
    a: `${L} is the value ${fx} heads towards as ${x} gets closer and closer to ${a}: a destination, separate from whether you ever arrive. The limit is about the neighbourhood of ${a}, not the point: ${f}(${a}) may be undefined, or defined but different from the limit, and the limit ignores it`,
    why: `${fr(`${X2} − 1`, `${x} − 1`)} is ${ZZ} at ${x} = 1, yet the readings 1.9, 1.99, 1.999 from below and 2.1, 2.01, 2.001 from above home in on 2: it is ${x} + 1 for ${x} ≠ 1.`,
    say: 'Limit cares about the neighbours, not the house.',
  },
  // pp. 1062, 1064, 1068
  {
    topic: 0,
    kind: 'remember',
    q: 'What is the existence test for a limit, and what kills a limit?',
    a: `With ${h} a small positive increment, LHL = ${LXAM} ${fx} = ${LH0} ${f}(${a} − ${h}) and RHL = ${LXAP} ${fx} = ${LH0} ${f}(${a} + ${h}); ${LXA} ${fx} = ${L} exactly when LHL = RHL = ${L}, finite. A limit fails at a jump (LHL ≠ RHL), when either side runs off to ±∞, and under endless oscillation (sin${NB}${fr('1', x)} near 0). A plain ${LXA} is two-sided by default`,
    why: `${fr('|<i>x</i>|', x)} at 0: RHL = 1 and LHL = −1, so the limit does not exist; answering 1 or −1 reports one side only.`,
    say: null,
  },
  // pp. 1064, 1065
  {
    topic: 0,
    kind: 'remember',
    q: 'What does the algebra of limits allow, and when does direct substitution work?',
    a: `If ${LXA} ${fx} = ${L} and ${LXA} ${gx} = ${M}, both finite: sum, difference, scalar multiple, product and power split freely (${L} ± ${M}, <i>kL</i>, <i>LM</i>, ${L}<sup><i>n</i></sup>); the quotient gives ${fr(L, M)} only when ${M} ≠ 0, since dividing by something heading to 0 makes the ratio explode or behave wildly. So a polynomial’s limit is <i>p</i>(${a}), and a rational function’s is ${fr(`<i>p</i>(${a})`, `<i>q</i>(${a})`)} when <i>q</i>(${a}) ≠ 0`,
    why: `Destinations simply add: near ${a} the two functions are arbitrarily close to their targets, so their sum is arbitrarily close to ${L} + ${M}.`,
    say: null,
  },
  // pp. 1064, 1065, 1068
  {
    topic: 0,
    kind: 'remember',
    q: 'What is the standard algebraic limit, and for which n does it hold?',
    a: `${LXA} ${STAR} = ${NAN1}. For a positive integer ${n}, ${XN} − ${AN} = (${x} − ${a})(${x}<sup><i>n</i>−1</sup> + ${x}<sup><i>n</i>−2</sup>${a} + ⋯ + ${a}<sup><i>n</i>−1</sup>): cancel ${x} − ${a}, and at ${x} = ${a} the ${n} terms are each ${a}<sup><i>n</i>−1</sup>. It holds for every rational ${n} provided ${a} > 0 when ${n} is not an integer`,
    why: `${LX1} ${fr(`${x}<sup>1/3</sup> − 1`, `${x}<sup>1/2</sup> − 1`)} = ${fr('1', '3')} ÷ ${fr('1', '2')} = ${fr('2', '3')}, splitting through ${x} − 1.`,
    say: null,
  },
  // pp. 1064, 1065, 1068
  {
    topic: 0,
    kind: 'remember',
    q: 'Substitution gives 0 over 0. What does that mean, and how is it resolved?',
    a: `${ZZ} is indeterminate, like ${II}, ∞ − ∞, 0 × ∞ and the power form ${ONEINF}: it decides nothing. For a rational function it is a promise that ${x} − ${a} divides top and bottom: factor, cancel, re-substitute. For a square root, multiply and divide by the conjugate, (√<i>p</i> − √<i>q</i>)(√<i>p</i> + √<i>q</i>) = <i>p</i> − <i>q</i>, to expose the cancellable ${x} − ${a}`,
    why: `${LX0} ${fr(`√(4 + ${x}) − 2`, x)} = ${LX0} ${fr('1', `√(4 + ${x}) + 2`)} = ${fr('1', '4')}.`,
    say: 'Zero-by-zero means do more, not done.',
  },
  // pp. 1066, 1067, 1068
  {
    topic: 0,
    kind: 'mixup',
    q: `The ${fr('<i>m</i>', '<i>n</i>')} shortcut or the full ratio: which one, where?`,
    a: `${fr(`${x}<sup><i>m</i></sup> − 1`, `${XN} − 1`)} → ${fr(m, n)} holds only as ${x} → 1. About any other point ${a}, take the ratio of the two standard limits: ${fr(`${m}${a}<sup><i>m</i>−1</sup>`, `${NAN1}`)}`,
    why: `${lim(`${x}→2`)} ${fr(`${X3} − 8`, `${X2} − 4`)} = ${fr('3 · 2<sup>2</sup>', '2 · 2')} = ${fr('12', '4')} = 3, not ${fr('3', '2')}.`,
    say: `${fr('<i>m</i>', '<i>n</i>')} only at one.`,
  },
  // pp. 1067, 1068
  {
    topic: 0,
    kind: 'mistake',
    q: `${lim(`${x}→3`)} ${fr(`${X2} − 9`, `${X2} − 5${x} + 6`)}: is the answer 0, or “does not exist”?`,
    a: `Neither: 6. ${ZZ} is not “zero” and not “does not exist”; it is an instruction to factor. (${x} − 3)(${x} + 3) over (${x} − 2)(${x} − 3) leaves ${fr(`${x} + 3`, `${x} − 2`)} → 6. The other listed slips: confusing the limit with ${f}(${a}), and using the quotient rule when the denominator’s limit is 0`,
    why: `0 comes from “numerator → 0” and stopping; 1 from cancelling the leading ${X2} terms.`,
    say: null,
  },
  // pp. 1066, 1068
  {
    topic: 0,
    kind: 'shortcut',
    q: 'The limit is finite but the denominator vanishes at the point. What do you write at once?',
    a: `“The numerator must also → 0”: otherwise a non-zero number over 0 runs off to infinity. That one equation, plus factoring out ${x} − ${a}, cracks almost every “find ${a}, ${b}” problem. And always substitute first: a clean number ends the question in one line`,
    why: `${lim(`${x}→2`)} ${fr(`${X2} + <i>ax</i> + ${b}`, `${X2} − ${x} − 2`)} = ${fr('5', '3')}: 4 + 2${a} + ${b} = 0, then ${fr(`${x} − ${c}`, `${x} + 1`)} → ${fr(`2 − ${c}`, '3')} = ${fr('5', '3')} gives ${c} = −3, so ${a} = 1, ${b} = −6.`,
    say: null,
  },
  // pp. 1066, 1068
  {
    topic: 0,
    kind: 'shortcut',
    q: `${LX1} ${fr(`${x}<sup>18</sup> − 1`, `${x}<sup>12</sup> − 1`)} in ten seconds?`,
    a: `Do not factor a degree-18 polynomial: both pieces are ${XN} − 1<sup><i>n</i></sup>, so the answer is ${fr('18', '12')} = ${fr('3', '2')}, the ${fr(m, n)} rule at ${x} = 1`,
    why: `${LX1} ${fr(`${x}<sup>25</sup> − 1`, `${x}<sup>5</sup> − 1`)} = 5 the same way.`,
    say: null,
  },

  // ── Topic 02 · Standard Limits ──
  // pp. 1069, 1071, 1075–1076
  {
    topic: 1,
    kind: 'remember',
    q: 'What are the trigonometric standard limits, and on what conditions?',
    a: `As ${x} → 0: ${SINX} → 1, ${fr(`tan ${x}`, x)} → 1, ${fr(`sin<sup>−1</sup>${NB}${x}`, x)} → 1, ${fr(`tan<sup>−1</sup>${NB}${x}`, x)} → 1, ${COS1} → ${HALF} and ${COS1X} → 0. Two conditions: ${x} in radians, and the argument itself tending to 0 (at ${x} → π, ${SINX} is just ${fr('0', 'π')} = 0)`,
    why: `In degrees, ${fr(`sin ${x}°`, x)} → ${fr('π', '180')}, since ${x}° = ${fr('π<i>x</i>', '180')} radians.`,
    say: 'Sine and angle are twins near zero, but only in radians.',
  },
  // pp. 1069, 1071, 1072, 1076
  {
    topic: 1,
    kind: 'remember',
    q: 'How do the standard limits extend to sin kx, 1 − cos kx and e to the kx?',
    a: `The result is really ${fr('sin(box)', '(same box)')} → 1, so match the boxes and keep the constant: ${fr(`sin(<i>kx</i>)`, x)} → ${k}, ${fr(`1 − cos(<i>kx</i>)`, X2)} → ${fr(sq(k), '2')} (square the ${k}), ${fr(`${e}<sup><i>kx</i></sup> − 1`, x)} → ${k}`,
    why: `${fr(`sin 5${x}`, `sin 3${x}`)} = ${fr(`sin 5${x}`, `5${x}`)} · ${fr(`3${x}`, `sin 3${x}`)} · ${fr(`5${x}`, `3${x}`)} → 1 · 1 · ${fr('5', '3')}.`,
    say: 'Match the box, keep the constant.',
  },
  // pp. 1069, 1071, 1072
  {
    topic: 1,
    kind: 'remember',
    q: 'What are the exponential and logarithmic standard limits, and the limits that define e?',
    a: `As ${x} → 0: ${EX1} → 1, ${AX1} → ln${NB}${a} (${a} > 0), ${fr(`ln(1 + ${x})`, x)} → 1 and ${fr(`log<sub><i>a</i></sub>(1 + ${x})`, x)} → ${fr('1', `ln ${a}`)} (${a} > 0, ${a} ≠ 1), the “twins near zero” idea: ${EX} ≈ 1 + ${x} and ln(1 + ${x}) ≈ ${x} for small ${x}. And (1 + ${x})<sup>1/<i>x</i></sup> → ${e} as ${x} → 0, (1 + ${fr('1', n)})<sup><i>n</i></sup> → ${e} as ${n} → ∞`,
    why: `${LX0} ${fr(`2<sup><i>x</i></sup> − 1`, x)} = ln${NB}2, not 1 and not 2.`,
    say: `${e} gives one, any other base gives ln.`,
  },
  // pp. 1071, 1072, 1074
  {
    topic: 1,
    kind: 'remember',
    q: `What is the ${ONEINF} rule, and why does it work?`,
    a: `If ${fx} → 1 and ${gx} → ∞ as ${x} → ${a}, then ${LXA} [${fx}]<sup><i>g</i>(<i>x</i>)</sup> = ${e}<sup>lim <i>g</i>(<i>x</i>)[<i>f</i>(<i>x</i>) − 1]</sup>. Write <i>f</i><sup><i>g</i></sup> = ${e}<sup><i>g</i> ln <i>f</i></sup>: near ${ONEINF}, ${f} − 1 is small, so ln${NB}${f} = ln(1 + (${f} − 1)) ≈ ${f} − 1`,
    why: `(cos ${x})<sup>1/<i>x</i><sup>2</sup></sup> as ${x} → 0: ${fr(`cos ${x} − 1`, X2)} → −${HALF}, so the limit is ${e}<sup>−1/2</sup> = ${fr('1', `√${e}`)}.`,
    say: `One-to-the-infinity? Lift to ${e} to the ${g}(${f} − 1).`,
  },
  // pp. 1071–1073
  {
    topic: 1,
    kind: 'remember',
    q: 'How is lim sin x over x = 1 proved?',
    a: `By the Sandwich Theorem: if ${gx} ≤ ${fx} ≤ <i>h</i>(${x}) near ${a} and ${g}, ${h} head to the same ${L}, so does ${f}. In a unit circle with 0 < ${x} < ${fr('π', '2')}, area △<i>OAP</i> ≤ sector <i>OAP</i> ≤ △<i>OAT</i>: ${HALF}${NB}sin${NB}${x} ≤ ${HALF}${x} ≤ ${HALF}${NB}tan${NB}${x}, so cos${NB}${x} ≤ ${SINX} ≤ 1 and cos${NB}${x} → 1. The left side follows by symmetry. The sector’s area is ${HALF}${x} only in radians`,
    why: `Multiply ${HALF}${NB}sin${NB}${x} ≤ ${HALF}${x} ≤ ${HALF}${NB}tan${NB}${x} by 2 and divide by sin${NB}${x} > 0: 1 ≤ ${fr(x, `sin ${x}`)} ≤ ${fr('1', `cos ${x}`)}.`,
    say: null,
  },
  // pp. 1069, 1075
  {
    topic: 1,
    kind: 'mixup',
    q: 'Over x or over x squared: what does 1 − cos x tend to?',
    a: `${COS1X} → 0, but ${COS1} → ${HALF}: same numerator, totally different destinations, because 1 − cos${NB}${x} vanishes like ${HALF}${X2}. Note the power before you quote a value`,
    why: `${LX0} ${fr(`1 − cos 6${x}`, `1 − cos 3${x}`)} = ${fr('36', '9')} = 4, the ratio of ${fr(sq(k), '2')} at ${k} = 6 and at ${k} = 3.`,
    say: null,
  },
  // pp. 1072, 1075
  {
    topic: 1,
    kind: 'mistake',
    q: `Is ${LX0} ${fr(`1 − cos 4${x}`, X2)} = ${HALF}?`,
    a: `No: 8. The argument is 4${x}, not ${x}, so the junction is ${fr(`1 − cos(<i>kx</i>)`, X2)} → ${fr(sq(k), '2')} = ${fr('16', '2')}. The other listed slips: a degree symbol missed (${fr('π', '180')}, not 1), ${fr(`sin(<i>kx</i>)`, x)} taken as 1, and ${AX1} taken as 1 instead of ln${NB}${a}`,
    why: `${LX0} ${fr(`tan<sup>−1</sup>(3${x})`, `sin(2${x})`)} = ${fr('3', '2')}: 1 forgets the leftover constant, ${fr('2', '3')} flips it.`,
    say: null,
  },
  // pp. 1071, 1075
  {
    topic: 1,
    kind: 'mistake',
    q: `${LXI} (1 + ${fr('3', x)})<sup><i>x</i></sup>: is it 1, since the base tends to 1?`,
    a: `No: ${e}<sup>3</sup>. ${ONEINF} is indeterminate, not 1. With ${f} = 1 + ${fr('3', x)} and ${g} = ${x}: ${g}(${f} − 1) = ${x} · ${fr('3', x)} = 3. Recalling “(1 + ${fr('1', x)})<sup><i>x</i></sup> → ${e}” and ignoring the 3 gives ${e}, also wrong`,
    why: `${LX0} (1 + sin${NB}${x})<sup>cot <i>x</i></sup>: ${g}(${f} − 1) = cot${NB}${x} · sin${NB}${x} = cos${NB}${x} → 1, so ${e}.`,
    say: null,
  },
  // pp. 1072, 1075
  {
    topic: 1,
    kind: 'shortcut',
    q: 'A messy trigonometric, exponential or logarithmic 0 over 0: what is the fast route?',
    a: `Make every piece pass through a junction: multiply and divide to force each into its ${fr('sin(box)', 'box')} or ${fr(`${e}<sup>box</sup> − 1`, 'box')} shape, collect the leftover constants, read off. And for a base → 1 with a power → ∞, write ${ELIM} at once`,
    why: `${fr(`${e}<sup>2<i>x</i></sup> − 1`, `sin 3${x}`)} = ${fr(`${e}<sup>2<i>x</i></sup> − 1`, `2${x}`)} · ${fr(`3${x}`, `sin 3${x}`)} · ${fr(`2${x}`, `3${x}`)} → ${fr('2', '3')}.`,
    say: null,
  },

  // ── Topic 03 · Derivatives and First Principle ──
  // pp. 1077, 1079, 1082
  {
    topic: 2,
    kind: 'remember',
    q: 'What is the derivative, in its two forms, and what does it mean?',
    a: `${fp}(${x}) = ${LH0} ${DQ}, or at a point ${fp}(${a}) = ${LXA} ${fr(`${fx} − ${f}(${a})`, `${x} − ${a}`)}: the average rate of change with the interval squeezed to zero, a ${ZZ} limit. Geometrically the secant through (${x}, ${fx}) and (${x} + ${h}, ${f}(${x} + ${h})) pivots into the tangent, so ${fp}(${a}) = the slope of the tangent at ${x} = ${a} = tan${NB}<i>ψ</i>; physically, if <i>s</i>(${t}) is position, <i>s</i>′(${t}) is the instantaneous velocity`,
    why: `Notations for the same thing: ${fp}(${x}), ${DYDX}, ${DDX}[${fx}], <i>Df</i>.`,
    say: 'Secant slides into tangent.',
  },
  // pp. 1079–1080
  {
    topic: 2,
    kind: 'remember',
    q: 'How does the first principle prove the derivatives of xⁿ, sin x and eˣ?',
    a: `Write ${f}(${x} + ${h}), form ${DQ}, simplify the numerator (expand, factor or rationalise), take ${LH0} through a standard limit. ${XN}: the second form is exactly the star limit, ${lim(`${t}→${x}`)} ${fr(`${t}<sup><i>n</i></sup> − ${XN}`, `${t} − ${x}`)} = ${n}${x}<sup><i>n</i>−1</sup>. sin${NB}${x}: sin(${x} + ${h}) − sin${NB}${x} = 2${NB}cos(${x} + ${fr(h, '2')})${NB}sin${NB}${fr(h, '2')}, and ${fr(`sin${NB}<i>θ</i>`, '<i>θ</i>')} → 1 with <i>θ</i> = ${fr(h, '2')} leaves cos${NB}${x}. ${EX}: ${EX}${NB}·${NB}${fr(`${e}<sup><i>h</i></sup> − 1`, h)} → ${EX}`,
    why: `√${x}: multiply by the conjugate, ${fr(`(${x} + ${h}) − ${x}`, `${h}(√(${x} + ${h}) + √${x})`)} = ${fr('1', `√(${x} + ${h}) + √${x}`)} → ${fr('1', `2√${x}`)}.`,
    say: null,
  },
  // pp. 1079, 1081, 1082–1083
  {
    topic: 2,
    kind: 'remember',
    q: 'What are the standard derivatives, each provable from first principle?',
    a: `A constant gives 0; ${XN} gives ${n}${x}<sup><i>n</i>−1</sup>; sin${NB}${x} gives cos${NB}${x}; cos${NB}${x} gives −sin${NB}${x}; ${EX} gives ${EX}; ${AX} gives ${AX}${NB}ln${NB}${a}; ln${NB}${x} gives ${fr('1', x)}; tan${NB}${x} gives sec<sup>2</sup>${NB}${x}`,
    why: `${AX}: ${AX}${NB}·${NB}${fr(`${a}<sup><i>h</i></sup> − 1`, h)} → ${AX}${NB}ln${NB}${a}, and ${a} = ${e} gives ${EX} back, since ln${NB}${e} = 1.`,
    say: `${EX} is its own echo.`,
  },
  // pp. 1079–1080, 1082
  {
    topic: 2,
    kind: 'remember',
    q: 'Why is the product rule u′v + uv′ and not u′v′?',
    a: `From first principle, insert −${u}(${x} + ${h})${v}(${x}) + ${u}(${x} + ${h})${v}(${x}) in the numerator of ${fr(`${u}(${x} + ${h})${v}(${x} + ${h}) − ${u}(${x})${v}(${x})`, h)} and split: ${u}(${x} + ${h})${NB}${fr(`${v}(${x} + ${h}) − ${v}(${x})`, h)} + ${v}(${x})${NB}${fr(`${u}(${x} + ${h}) − ${u}(${x})`, h)} → ${u}${vp} + ${v}${up}. The cross term is exactly why two derivatives cannot simply multiply`,
    why: `${f}(${x}) = ${X2}${EX}: ${fp}(${x}) = ${EX}(${X2} + 2${x}) = ${x}${EX}(${x} + 2).`,
    say: 'Product rule: first-d-second plus second-d-first.',
  },
  // pp. 1077, 1081, 1082
  {
    topic: 2,
    kind: 'remember',
    q: 'When does f′(a) exist, and how is it tied to continuity?',
    a: `When the difference quotient has a limit: its left-hand and right-hand versions (LHD and RHD) are finite and equal. Differentiable at ${a} ⇒ continuous at ${a}, but not conversely: a sharp corner, a jump or a vertical tangent kills the derivative even where ${f} is well defined, and |${x}| is continuous everywhere but not differentiable at 0`,
    why: `|${x} − 2| at 2: LHD = −1, RHD = +1, a corner, so ${fp}(2) does not exist.`,
    say: null,
  },
  // pp. 1077, 1081, 1082
  {
    topic: 2,
    kind: 'mixup',
    q: 'f′(a) or f′(x): which is a number and which a function?',
    a: `${fp}(${a}) is a single number, the slope at one point; ${fp}(${x}) is a brand-new function, the derivative evaluated at every point. Leaving an ${x} where a number belongs loses marks`,
    why: `${f}(${x}) = √${x}: ${fp}(${x}) = ${fr('1', `2√${x}`)}, so ${fp}(4) = ${fr('1', '4')}; 2 is ${f}(4), the function value, not the slope.`,
    say: null,
  },
  // p. 1081
  {
    topic: 2,
    kind: 'mixup',
    q: 'Differentiable at a point, or continuously differentiable there?',
    a: `Not the same: ${f}(${x}) = ${X2}${NB}sin${NB}${fr('1', x)} (${x} ≠ 0), ${f}(0) = 0 has ${fp}(0) = ${LH0} ${h}${NB}sin${NB}${fr('1', h)} = 0, by the Sandwich Theorem (−|${h}| ≤ ${h}${NB}sin${NB}${fr('1', h)} ≤ |${h}|); yet away from 0, ${fp}(${x}) = 2${x}${NB}sin${NB}${fr('1', x)} − cos${NB}${fr('1', x)}, which has no limit as ${x} → 0`,
    why: 'A function that oscillates wildly near a point can still be differentiable there: go to the definition at the point, never “plug in”.',
    say: null,
  },
  // p. 1082
  {
    topic: 2,
    kind: 'mistake',
    q: `For ${f}(${x}) = sin${NB}${x} and ${a} = ${fr('π', '6')}, is ${LH0} ${DQA} equal to ${HALF}?`,
    a: `No: ${fr('√3', '2')}. The limit is ${fp}(${fr('π', '6')}) = cos${NB}${fr('π', '6')}; ${HALF} = sin${NB}${fr('π', '6')} is the function value, not its derivative, and 1 is the “standard limit = 1” reflex. The other listed slips: (<i>uv</i>)′ = ${up}${vp}, cancelling ${h} before simplifying the numerator, dropping the ${LH0} line, and continuous ⇒ differentiable`,
    why: `${DDX}(tan${NB}${x}) = sec<sup>2</sup>${NB}${x}; sec${NB}${x}${NB}tan${NB}${x} is the derivative of sec${NB}${x}, −csc<sup>2</sup>${NB}${x} that of cot${NB}${x}.`,
    say: null,
  },
  // pp. 1080, 1082
  {
    topic: 2,
    kind: 'shortcut',
    q: `${LH0} ${fr(`(2 + ${h})<sup>10</sup> − 2<sup>10</sup>`, h)} without the binomial expansion?`,
    a: `Recognise the disguise: any limit shaped like ${DQA} or ${fr(`${fx} − ${f}(${a})`, `${x} − ${a}`)} is ${fp}(${a}). Here ${f}(${x}) = ${x}<sup>10</sup>, so the limit is ${fp}(2) = 10 · 2<sup>9</sup> = 5120`,
    why: `${LH0} ${fr(`${e}<sup>3+<i>h</i></sup> − ${e}<sup>3</sup>`, h)} is the derivative of ${EX} at 3: ${e}<sup>3</sup>.`,
    say: `${DQA} is a derivative in disguise.`,
  },

  // ── Topic 04 · Rules of Differentiation ──
  // pp. 1084, 1086, 1089
  {
    topic: 3,
    kind: 'remember',
    q: 'What are the core rules of differentiation?',
    a: `For differentiable ${u}, ${v} and a constant ${c}: (${u} ± ${v})′ = ${up} ± ${vp}; (<i>cu</i>)′ = <i>cu</i>′; (<i>uv</i>)′ = ${up}${v} + ${u}${vp}; (${fr(u, v)})′ = ${fr(`${up}${v} − ${u}${vp}`, sq(v))} (${v} ≠ 0); and the reciprocal (${fr('1', v)})′ = −${fr(vp, sq(v))}. The quotient rule is the product rule rearranged: from ${u} = <i>yv</i>, ${up} = <i>y</i>′${v} + <i>y</i>${vp}`,
    why: `${fr(x, `${X2} + 1`)} differentiates to ${fr(`1 − ${X2}`, `(${X2} + 1)<sup>2</sup>`)}.`,
    say: 'Low d-high minus high d-low, over low-squared, away we go.',
  },
  // pp. 1084, 1086, 1089
  {
    topic: 3,
    kind: 'remember',
    q: 'How do you differentiate a product of three or more factors?',
    a: `One factor at a time, then add: (<i>uvw</i>)′ = ${up}<i>vw</i> + ${u}${vp}<i>w</i> + <i>uvw</i>′, every term keeping all the other factors whole. No grouping is needed`,
    why: `(2${x} + 1)(${x} − 3) differentiates to 2(${x} − 3) + (2${x} + 1) = 4${x} − 5.`,
    say: 'First d-second plus second d-first.',
  },
  // pp. 1084, 1086, 1089
  {
    topic: 3,
    kind: 'remember',
    q: 'What is the chain rule, and why do the rates multiply?',
    a: `For ${y} = ${f}(${u}), ${u} = ${g}(${x}): ${DYDX} = ${fr('<i>dy</i>', '<i>du</i>')} · ${fr('<i>du</i>', '<i>dx</i>')} = ${fp}(${g}(${x})) · ${gp}(${x}); the power chain is ${DDX}[${gx}]<sup><i>n</i></sup> = ${n}[${gx}]<sup><i>n</i>−1</sup> · ${gp}(${x}). Write ${fr('Δ<i>y</i>', 'Δ<i>x</i>')} = ${fr('Δ<i>y</i>', 'Δ<i>u</i>')} · ${fr('Δ<i>u</i>', 'Δ<i>x</i>')}: the intermediate change cancels, like gears or currency. It holds whenever ${g} is differentiable at ${x} and ${f} at ${g}(${x}): that is enough, though a composite can be differentiable without it`,
    why: `${y} changes 3 times as fast as ${u}, ${u} 2 times as fast as ${x}: ${y} changes 6 times as fast as ${x}.`,
    say: 'Outside derivative, times inside derivative.',
  },
  // p. 1086
  {
    topic: 3,
    kind: 'remember',
    q: 'What are the derivatives of tan, cot, sec and csc, and where do they come from?',
    a: `tan${NB}${x} → sec<sup>2</sup>${NB}${x}, cot${NB}${x} → −csc<sup>2</sup>${NB}${x}, sec${NB}${x} → sec${NB}${x}${NB}tan${NB}${x}, csc${NB}${x} → −csc${NB}${x}${NB}cot${NB}${x}: each from the quotient or the reciprocal rule on sin and cos`,
    why: `cot${NB}${x} = ${fr(`cos ${x}`, `sin ${x}`)}: ${fr(`(−sin ${x})(sin ${x}) − (cos ${x})(cos ${x})`, `sin<sup>2</sup>${NB}${x}`)} = −${fr('1', `sin<sup>2</sup>${NB}${x}`)} = −csc<sup>2</sup>${NB}${x}.`,
    say: null,
  },
  // pp. 1086, 1088
  {
    topic: 3,
    kind: 'mixup',
    q: 'Quotient rule numerator: u′v − uv′ or uv′ − u′v?',
    a: `${up}${v} − ${u}${vp}, top-derivative-times-bottom first. Swapping the order flips the sign of the whole answer; and the product rule has no minus at all`,
    why: `(${x}${NB}sin${NB}${x})′ = sin${NB}${x} + ${x}${NB}cos${NB}${x}; sin${NB}${x} − ${x}${NB}cos${NB}${x} mis-signs the second term.`,
    say: null,
  },
  // pp. 1084, 1088, 1089
  {
    topic: 3,
    kind: 'mistake',
    q: `Is ${DDX}${NB}sin(${X2}) = cos(${X2})?`,
    a: `No: 2${x}${NB}cos(${X2}). Every composition contributes a “× derivative of the inside”, the most common chain-rule error. Likewise ${DDX}(${X2} + 1)<sup>3</sup> = 3(${X2} + 1)<sup>2</sup> · 2${x} = 6${x}(${X2} + 1)<sup>2</sup>, not 3(${X2} + 1)<sup>2</sup>`,
    why: `${y} = ${u}<sup>3</sup>, ${u} = 2${x} + 1 at ${x} = 0: ${fr('<i>dy</i>', '<i>du</i>')} · ${fr('<i>du</i>', '<i>dx</i>')} = 3(1)<sup>2</sup> · 2 = 6 (${u} = 1 there, not 2).`,
    say: 'Rates cascade: gears multiply.',
  },
  // pp. 1087, 1088
  {
    topic: 3,
    kind: 'shortcut',
    q: `Differentiate ${y} = ${fr(`${X2} + 1`, x)} fast.`,
    a: `Simplify first: ${y} = ${x} + ${x}<sup>−1</sup>, so ${DYDX} = 1 − ${fr('1', X2)}. Before any rule, glance for an algebraic simplification; a quotient-rule slog often becomes one line`,
    why: `Nested layers peel outside-in: sin(cos(${X2})) gives cos(cos(${X2})) · (−sin(${X2})) · 2${x} = −2${x}${NB}sin(${X2})${NB}cos(cos(${X2})).`,
    say: null,
  },

  // ── Topic 05 · Limits at Infinity & Special Cases of Existence ──
  // pp. 1090, 1092, 1094–1095
  {
    topic: 4,
    kind: 'remember',
    q: 'What is the degree rule for a rational function as x → ∞?',
    a: `With numerator degree ${m}, denominator degree ${n} and leading coefficients <i>a</i><sub><i>m</i></sub>, <i>b</i><sub><i>n</i></sub>: ${m} < ${n} gives 0, ${m} = ${n} gives ${fr('<i>a</i><sub><i>m</i></sub>', '<i>b</i><sub><i>n</i></sub>')}, ${m} > ${n} gives ±∞. It is the shortcut of dividing every term by the highest power of ${x} in the denominator and sending each ${fr('1', `${x}<sup><i>k</i></sup>`)} → 0 (${k} > 0)`,
    why: `${LXI} ${fr(`3${X2} + 2${x} − 1`, `5${X2} − ${x} + 4`)} = ${fr('3', '5')}: equal degrees, the ratio of leading coefficients.`,
    say: 'Far out, only the top powers matter.',
  },
  // pp. 1090, 1092, 1093, 1095
  {
    topic: 4,
    kind: 'remember',
    q: 'How is an ∞ − ∞ surd such as √(x² + bx) − x resolved as x → ∞?',
    a: `Rationalise by the conjugate to make one fraction, then divide by the highest power: ${ROOT(`<i>bx</i>`)} − ${x} = ${fr(`<i>bx</i>`, `${ROOT(`<i>bx</i>`)} + ${x}`)} = ${fr(b, `√(1 + ${fr(b, x)}) + 1`)} → ${fr(b, '2')}. ∞ − ∞ and ${II} are indeterminate: never 0 or 1`,
    why: `${LXI} (${ROOT(`3${x}`)} − ${x}) = ${fr('3', '2')}; (√(4${X2} + ${x}) − 2${x}) → ${fr('1', '4')}.`,
    say: '∞ − ∞ is a question, not zero.',
  },
  // pp. 1090, 1091, 1094
  {
    topic: 4,
    kind: 'remember',
    q: 'What does “lim = ∞” mean, and how do the one-sided limits of 1 over x behave?',
    a: `It describes behaviour, not a value: ${f} grows without bound, so in the finite sense the limit does not exist, and ∞ only records how it fails (∞ is a direction, not a number). ${fr('1', X2)} → +∞ as ${x} → 0; ${fr('1', x)} → +∞ as ${x} → 0<sup>+</sup> but −∞ as ${x} → 0<sup>−</sup>`,
    why: `${lim(`${x}→0<sup>+</sup>`)} ${fr('1', x)} = +∞; −∞ is the left-hand limit, and 0 confuses small ${x} with large.`,
    say: null,
  },
  // pp. 1090, 1092, 1094–1095
  {
    topic: 4,
    kind: 'remember',
    q: 'Where does the limit of the greatest integer function exist?',
    a: `At an integer ${n}: just below, [${x}] = ${n} − 1; just above, [${x}] = ${n}; LHL ≠ RHL, so ${lim(`${x}→${n}`)}[${x}] does not exist. At a non-integer ${a}, [${x}] is locally constant, so ${LXA}[${x}] = [${a}]. Any jump function ([${x}], modulus, signum, piecewise) needs LHL and RHL computed separately: ${LXA}${NB}|${x}| = |${a}| everywhere, but ${fr('|<i>x</i>|', x)} has no limit at 0`,
    why: `${lim(`${x}→2`)}[${x}]: LHL = 1, RHL = 2, so it does not exist; ${lim(`${x}→2.5`)}[${x}] = 2.`,
    say: 'Steps and bars and bends: split it into two ends.',
  },
  // pp. 1092, 1093
  {
    topic: 4,
    kind: 'remember',
    q: `How is ${lim(`${x}→0<sup>+</sup>`)} ${x}[${fr('1', x)}] found?`,
    a: `Bound the bracket: [${fr('1', x)}] = ${fr('1', x)} − {${fr('1', x)}} with 0 ≤ {${fr('1', x)}} < 1, so ${x}[${fr('1', x)}] = 1 − ${x}{${fr('1', x)}}. Since 0 ≤ ${x}{${fr('1', x)}} < ${x} → 0, the Sandwich Theorem gives the limit 1`,
    why: 'A greatest-integer expression that looks hopeless becomes a clean sandwich once you split off the fractional part.',
    say: null,
  },
  // pp. 1094
  {
    topic: 4,
    kind: 'mixup',
    q: 'lim [x] as x → 2: is it 2, 1, or does it not exist?',
    a: `It does not exist: 2 is the RHL (and the value [2]), 1 the LHL, and 1.5 an invented average. The value at the point and the limit there are different questions`,
    why: `${lim(`${x}→1`)}[${x}] fails the same way: LHL = 0, RHL = 1.`,
    say: null,
  },
  // pp. 1093, 1094
  {
    topic: 4,
    kind: 'mistake',
    q: `${LXI} (${fr(`${X2} + 1`, `${x} + 1`)} − ${x}): is it 0, since ∞ − ∞ = 0?`,
    a: `No: −1. ∞ − ∞ is indeterminate. Combine over a common denominator first: ${fr(`${X2} + 1 − ${x}(${x} + 1)`, `${x} + 1`)} = ${fr(`1 − ${x}`, `${x} + 1`)}, equal degrees, leading coefficients −1 and 1. The other listed slips: substituting into a jump function, dividing by the wrong power, treating ∞ as a number`,
    why: `${LXI} (${fr(`3${x}<sup>4</sup> + 2${X2}`, `${X2} − 1`)} − 3${X2}) = ${LXI} ${fr(`5${X2}`, `${X2} − 1`)} = 5.`,
    say: null,
  },
  // pp. 1094
  {
    topic: 4,
    kind: 'shortcut',
    q: 'A rational function as x → ∞, a surd ∞ − ∞, a jump function: what is the first reflex for each?',
    a: `Rational: skip the algebra and use the three-case degree rule (smaller top → 0, equal → leading-coefficient ratio, bigger top → ±∞). Surd ∞ − ∞: rationalise on sight. [·], |·|, signum or a piecewise definition: split into LHL and RHL`,
    why: `${LXI} ${fr(`5${X3} + 2${x}`, `3${X3} − ${X2} + 1`)} = ${fr('5', '3')}; 5 forgets the 3, 0 and ∞ are the other two cases.`,
    say: null,
  },

  // ── Topic 06 · Advanced Limit Techniques ──
  // pp. 1099, 1101, 1105, 1107, 1114
  {
    topic: 5,
    kind: 'remember',
    q: 'A limit is taken at x = a, away from 0. How do the standard limits become usable?',
    a: `Shift the point: ${LXA} ${fx} = ${LH0} ${f}(${a} + ${h}), legal because ${h} = ${x} − ${a} only relabels the axis. Rewrite every ${x} as ${a} + ${h}, inside every trigonometric, exponential and logarithmic argument; simplify with exact identities (sin(${fr('π', '2')} + ${h}) = cos${NB}${h}, tan(${fr('π', '2')} + ${h}) = −cot${NB}${h}, tan(π + ${h}) = tan${NB}${h}); confirm ${ZZ}; route through a standard limit. For one side, ${h} → 0<sup>+</sup> on the right and ${x} = ${a} − ${h}, ${h} → 0<sup>+</sup> on the left`,
    why: `${fr(`tan 2${x}`, `${x} − ${fr('π', '2')}`)} as ${x} → ${fr('π', '2')}: with ${x} = ${fr('π', '2')} + ${h}, tan(π + 2${h}) = tan${NB}2${h}, and ${fr(`tan 2${h}`, h)} → 2.`,
    say: 'If it isn’t at zero, move zero to it.',
  },
  // pp. 1101, 1105, 1110, 1113–1114
  {
    topic: 5,
    kind: 'remember',
    q: 'What exactly does L’Hopital’s rule say, and when does it apply?',
    a: `If ${f}, ${g} are differentiable on an open interval round ${a} (except possibly at ${a}), ${fx} → 0 and ${gx} → 0, ${gp}(${x}) ≠ 0 near ${a}, and ${LXA} ${fr(`${fp}(${x})`, `${gp}(${x})`)} exists (finite, +∞ or −∞), then ${LXA} ${fr(fx, gx)} = ${LXA} ${fr(`${fp}(${x})`, `${gp}(${x})`)}. The same holds for ${II}, and ${a} may be one-sided or ±∞. Top and bottom are differentiated separately: it is not the quotient rule. If ${fr(fp, gp)} has no limit, the rule is silent, not a verdict`,
    why: `${LXI} ${fr(`${x} + sin ${x}`, x)}: ${fr(fp, gp)} = 1 + cos${NB}${x} oscillates forever, yet the limit is 1 + ${fr(`sin ${x}`, x)} → 1.`,
    say: 'Check the form, then differentiate, separately.',
  },
  // pp. 1102, 1114
  {
    topic: 5,
    kind: 'remember',
    q: 'What are the Maclaurin expansions to know, and where are they valid?',
    a: `About ${x} = 0: ${EX} = 1 + ${x} + ${fr(X2, '2!')} + ⋯ and sin${NB}${x} = ${x} − ${fr(X3, '3!')} + ⋯, cos${NB}${x} = 1 − ${fr(X2, '2!')} + ⋯ (all ${x}); tan${NB}${x} = ${x} + ${fr(X3, '3')} + ⋯ (|${x}| < ${fr('π', '2')}); ln(1 + ${x}) = ${x} − ${fr(X2, '2')} + ${fr(X3, '3')} − ⋯ (−1 < ${x} ≤ 1); (1 + ${x})<sup><i>n</i></sup> = 1 + <i>nx</i> + ${fr(`${n}(${n} − 1)`, '2!')}${X2} + ⋯ (|${x}| < 1 unless ${n} is a non-negative integer, when it is the finite binomial sum); tan<sup>−1</sup>${NB}${x} = ${x} − ${fr(X3, '3')} + ⋯ and sin<sup>−1</sup>${NB}${x} = ${x} + ${fr(X3, '6')} + ⋯ (|${x}| ≤ 1). At any other point, shift first`,
    why: `sin${NB}${x}, tan${NB}${x} and ln(1 + ${x}) begin with the linear term behind their standard limit; ${EX}, ${AX}, cos${NB}${x} and (1 + ${x})<sup><i>n</i></sup> begin with 1 (${EX} − 1 then starts with ${x}), and ${COS1} → ${HALF} comes from the ${X2} term.`,
    say: null,
  },
  // pp. 1102, 1104–1105, 1114
  {
    topic: 5,
    kind: 'remember',
    q: 'How many terms of an expansion do you keep?',
    a: `If the denominator vanishes like ${x}<sup><i>m</i></sup>, expand the numerator up to and including the ${x}<sup><i>m</i></sup> term: the limit is the ratio of the ${x}<sup><i>m</i></sup> coefficients, since every later term leaves a factor ${x} → 0. Everything below order ${m} must cancel for a finite limit, a free check on the algebra. Truncating early is fatal, late merely wasteful`,
    why: `${fr(`${x} − sin ${x}`, X3)}: the numerator is ${fr(X3, '6')} − ⋯, so the limit is ${fr('1', '6')}, where L’Hopital needs three rounds.`,
    say: 'Expand as deep as the denominator is low.',
  },
  // pp. 1099, 1102–1103, 1106, 1114
  {
    topic: 5,
    kind: 'remember',
    q: 'How do you take a limit as x → −∞ with a square root?',
    a: `Put ${x} = −${t}, ${t} → +∞, making every sign explicit; or work in ${x} and use √(${X2}) = |${x}| = −${x} for ${x} < 0, so ${ROOT(`<i>bx</i>`)} = −${x}√(1 + ${fr(b, x)}). The pair to memorise: ${ROOT(`<i>bx</i>`)} − ${x} → ${fr(b, '2')} as ${x} → +∞, and ${ROOT(`<i>bx</i>`)} + ${x} → −${fr(b, '2')} as ${x} → −∞`,
    why: `${LXMI} (${ROOT(x)} + ${x}) = ${lim(`${t}→∞`)} (√(${t}<sup>2</sup> − ${t}) − ${t}) = ${fr('−1', '1 + 1')} = −${HALF}.`,
    say: 'Root of a square wears a modulus.',
  },
  // pp. 1103, 1106, 1113–1114
  {
    topic: 5,
    kind: 'remember',
    q: 'How is a 0 × ∞ product resolved?',
    a: `With ${f} → 0 and ${g} → ∞, rewrite ${f}${NB}·${NB}${g} as ${fr(f, fr('1', g))} (form ${ZZ}) or ${fr(g, fr('1', f))} (form ${II}), choosing the one whose denominator is simple to differentiate or expand; then use a standard limit, a series or L’Hopital. A vanishing and an exploding factor can balance at any value`,
    why: `${lim(`${x}→0<sup>+</sup>`)} ${x}${NB}ln${NB}${x} = ${lim(`${x}→0<sup>+</sup>`)} ${fr(`ln ${x}`, fr('1', x))}: L’Hopital gives −${x} → 0; and ${LXI} ${x}${NB}sin${NB}${fr('1', x)} is ${fr(`sin ${t}`, t)} → 1 with ${t} = ${fr('1', x)}.`,
    say: 'Zero times infinity is a question, not zero.',
  },
  // p. 1104
  {
    topic: 5,
    kind: 'mixup',
    q: 'Can L’Hopital’s rule prove that sin x over x → 1?',
    a: `No: it needs ${DDX}${NB}sin${NB}${x} = cos${NB}${x}, which was itself established using ${SINX} → 1. The argument is circular, and the same goes for ${EX1}. Use L’Hopital to evaluate, never to justify a standard limit`,
    why: `In the clean case (${f}(${a}) = ${g}(${a}) = 0, ${gp}(${a}) ≠ 0) the rule is just two difference quotients: ${fr(`${f}(${x}) − ${f}(${a})`, `${x} − ${a}`)} ÷ ${fr(`${g}(${x}) − ${g}(${a})`, `${x} − ${a}`)} → ${fr(`${fp}(${a})`, `${gp}(${a})`)}.`,
    say: null,
  },
  // pp. 1107, 1112
  {
    topic: 5,
    kind: 'mixup',
    q: 'As x → −∞, which of √(x² + x) − x and √(x² + x) + x is indeterminate?',
    a: `Only the sum: √(${X2} + ${x}) → +∞ while ${x} → −∞, so √(${X2} + ${x}) + ${x} is ∞ − ∞ and tends to −${HALF}. The difference √(${X2} + ${x}) − ${x} is ∞ + ∞ there and grows without bound. At +∞ the roles swap`,
    why: `Answering ${HALF} for √(${X2} + ${x}) − ${x} at −∞ is the +∞ result with the direction dropped; ${x} = −${t} makes it √(${t}<sup>2</sup> − ${t}) + ${t} → ∞.`,
    say: null,
  },
  // pp. 1105, 1112, 1113
  {
    topic: 5,
    kind: 'mistake',
    q: `${LX0} ${fr(`${X2} + 3${x} + 2`, `${x} + 1`)}: differentiate top and bottom to get 3?`,
    a: `No: 2, by direct substitution. The form was never ${ZZ} or ${II}, so L’Hopital does not apply and manufactures a wrong answer with total confidence. Substitute first, every time, and name the form before differentiating; and write ${fr(fp, gp)}, never (${fr(f, g)})′`,
    why: `0 reports the value of ${x}, not of the function; “does not exist” assumes every limit question is a trick.`,
    say: null,
  },
  // pp. 1108, 1110, 1113
  {
    topic: 5,
    kind: 'mistake',
    q: `${LX0} ${fr(`tan ${x} − sin ${x}`, X3)}: tan x ≈ x and sin x ≈ x, so is it 0?`,
    a: `No: ${HALF}. “sin${NB}${x} ≈ ${x}” hides an error of size ${X3}, and you are dividing by ${X3}: expand to order 3, tan${NB}${x} − sin${NB}${x} = (${fr('1', '3')} + ${fr('1', '6')})${X3} + ⋯. Or factor: ${SINX} · ${COS1} · ${fr('1', `cos ${x}`)} → ${HALF}. With L’Hopital, re-check the form before each round: it may be repeated only while the form stays ${ZZ} or ${II}; if it becomes a non-zero number over 0, the limit is infinite (or does not exist, if the sides differ in sign)`,
    why: `L’Hopital three times: ${fr(`cos ${x} − 4${NB}sec<sup>2</sup>${NB}${x} + 6${NB}sec<sup>4</sup>${NB}${x}`, '6')} at ${x} = 0 is ${fr('3', '6')} = ${HALF}, the last stage a number, no longer ${ZZ}.`,
    say: null,
  },
  // pp. 1113
  {
    topic: 5,
    kind: 'shortcut',
    q: 'Which four expansion coefficients answer most high-order limits on sight?',
    a: `The cubic terms: sin${NB}${x} gives −${fr('1', '6')}, tan${NB}${x} gives +${fr('1', '3')}, ${EX} gives +${fr('1', '6')}, ln(1 + ${x}) gives +${fr('1', '3')}. And if the limit is not at 0 or ∞, the first pen stroke is the substitution line`,
    why: `${fr(`tan ${x} − ${x}`, X3)} → ${fr('1', '3')}, and ${fr(`${x} − sin ${x}`, X3)} → ${fr('1', '6')}: learn the two as a contrasting pair.`,
    say: null,
  },
  // pp. 1110–1111, 1114
  {
    topic: 5,
    kind: 'shortcut',
    q: `${LX0} ${fr(`(1 + ${x})<sup>1/<i>x</i></sup> − ${e}`, x)} in two lines?`,
    a: `Expand, do not differentiate: (1 + ${x})<sup>1/<i>x</i></sup> = exp(${fr(`ln(1 + ${x})`, x)}) = exp(1 − ${fr(x, '2')} + ⋯) = ${e}(1 − ${fr(x, '2')} + ⋯), so the limit is −${fr(e, '2')}. When the numerator is a log inside an exponential, expand`,
    why: `The same first-order correction is why (1 + ${fr('1', n)})<sup><i>n</i></sup> approaches ${e} only about as fast as ${fr('1', n)}.`,
    say: null,
  },

  // ── Topic 07 · Limits of Sequences ──
  // pp. 1125, 1126–1127, 1136–1137
  {
    topic: 6,
    kind: 'remember',
    q: 'How does a sequence limit differ from a function limit?',
    a: `A sequence ${an} is a function on ℕ: as ${n} grows it hops through 1, 2, 3, … rather than sliding, so the only limit is ${n} → ∞, with no finite approach point and no LHL or RHL. The index only moves one way, but the terms may land from either side (${fr('(−1)<sup><i>n</i></sup>', n)} → 0 alternates). ${LNI} ${an} = ${L} if the terms become and remain arbitrarily close to ${L} for all large ${n}; otherwise the sequence diverges to ±∞ or oscillates, and in each of those cases the limit does not exist`,
    why: `(−1)<sup><i>n</i></sup> stays between −1 and 1 and never settles: no limit.`,
    say: 'The car slides, the train hops.',
  },
  // pp. 1125, 1127–1128, 1137
  {
    topic: 6,
    kind: 'remember',
    q: 'What is the bridge theorem, and which way does it run?',
    a: `If ${LXI} ${fx} = ${L}, then ${LNI} ${f}(${n}) = ${L}: the integers ${n} > <i>X</i> are among the real ${x} > <i>X</i>. The converse is false: ${f}(${x}) = sin(π${x}) has no limit as ${x} → ∞, yet sin(${n}π) = 0 for every integer, so the sequence tends to 0. So a routine sequence limit is a function limit in disguise: treat ${n} as continuous and use the degree rule`,
    why: `${LNI} ${fr(`2${n}<sup>2</sup> + 3${n} + 1`, `5${n}<sup>2</sup> − ${n}`)} = ${fr('2', '5')}, inherited from the function version.`,
    say: 'Function to sequence, one way only.',
  },
  // pp. 1126, 1128–1130, 1137
  {
    topic: 6,
    kind: 'remember',
    q: 'Why can’t a sum of n terms be sent to its limit term by term, and what do you do instead?',
    a: `The algebra of limits splits a sum of a fixed number of pieces only; induction never reaches “${n} terms” with the same ${n} going to infinity. ${fr('1', n)} + ⋯ + ${fr('1', n)} (${n} terms) is 1 for every ${n}, though each term → 0. So sum first in closed form with the three Chapter 8 formulas (∑${NB}${k} = ${fr(`${n}(${n} + 1)`, '2')}, ∑${NB}${k}<sup>2</sup> = ${fr(`${n}(${n} + 1)(2${n} + 1)`, '6')}, ∑${NB}${k}<sup>3</sup> = [${fr(`${n}(${n} + 1)`, '2')}]<sup>2</sup>) and take the limit, or trap the whole sum between two bounds`,
    why: `${fr(`1<sup>2</sup> + 2<sup>2</sup> + ⋯ + ${n}<sup>2</sup>`, `${n}<sup>3</sup>`)} = ${fr(`2${n}<sup>3</sup> + 3${n}<sup>2</sup> + ${n}`, `6${n}<sup>3</sup>`)} → ${fr('1', '3')}; with ∑${NB}${k} and ∑${NB}${k}<sup>3</sup>, ${fr('1', '2')} and ${fr('1', '4')}.`,
    say: 'Count the terms before you split the sum.',
  },
  // pp. 1127–1128, 1137
  {
    topic: 6,
    kind: 'remember',
    q: 'What are the standard sequence limits and the growth ordering?',
    a: `${fr('1', `${n}<sup><i>k</i></sup>`)} → 0 (${k} > 0); ${a}<sup>1/<i>n</i></sup> → 1 (${a} > 0); ${n}<sup>1/<i>n</i></sup> → 1; ${a}<sup><i>n</i></sup> → 0 for |${a}| < 1, → +∞ for ${a} > 1, no limit for ${a} ≤ −1; (1 + ${fr(a, n)})<sup><i>n</i></sup> → ${e}<sup><i>a</i></sup>. As ${n} → ∞, ln${NB}${n} ≪ ${n}<sup><i>k</i></sup> ≪ ${a}<sup><i>n</i></sup> ≪ ${n}! ≪ ${n}<sup><i>n</i></sup> (${k} > 0, ${a} > 1): any ratio with a later item in the denominator → 0`,
    why: `${fr(`${n}<sup>100</sup>`, `2<sup><i>n</i></sup>`)} → 0: the exponent 100 is fixed while ${n} grows; at ${n} = 10<sup>4</sup> the ratio is about 5 × 10<sup>−2611</sup>.`,
    say: 'Log, power, exponential, factorial, <i>n</i>-to-the-<i>n</i>.',
  },
  // pp. 1127, 1131, 1137
  {
    topic: 6,
    kind: 'remember',
    q: 'What is the limit of the n-th root of a sum of powers?',
    a: `For positive constants, (<i>a</i><sub>1</sub><sup><i>n</i></sup> + ⋯ + <i>a</i><sub><i>m</i></sub><sup><i>n</i></sup>)<sup>1/<i>n</i></sup> → max{<i>a</i><sub>1</sub>, …, <i>a</i><sub><i>m</i></sub>}: the largest base swallows the rest. Proof by the Sandwich Theorem: if ${an} ≤ <i>b</i><sub><i>n</i></sub> ≤ <i>c</i><sub><i>n</i></sub> for all ${n} ≥ <i>N</i> and ${an}, <i>c</i><sub><i>n</i></sub> → ${L}, then <i>b</i><sub><i>n</i></sub> → ${L}`,
    why: `5<sup><i>n</i></sup> ≤ 2<sup><i>n</i></sup> + 3<sup><i>n</i></sup> + 5<sup><i>n</i></sup> ≤ 3 · 5<sup><i>n</i></sup>, so 5 ≤ (…)<sup>1/<i>n</i></sup> ≤ 3<sup>1/<i>n</i></sup> · 5 → 5; likewise (5<sup><i>n</i></sup> + 7<sup><i>n</i></sup>)<sup>1/<i>n</i></sup> → 7.`,
    say: 'Biggest base wins the root.',
  },
  // pp. 1127, 1130, 1132–1133, 1137
  {
    topic: 6,
    kind: 'remember',
    q: 'How is a recursively defined sequence shown to converge and its limit found?',
    a: `Compute ${a}<sub>1</sub>, ${a}<sub>2</sub>, ${a}<sub>3</sub>; prove monotone and bounded by induction, so the monotone convergence theorem (increasing and bounded above, or decreasing and bounded below, converges) gives existence; only then set ${L} = lim ${an} = lim ${an1} in the recursion and solve; discard roots the sequence cannot reach (positive terms cannot tend to a negative number); check against the numbers`,
    why: `${a}<sub>1</sub> = 1, ${an1} = √(2 + ${an}): increasing and below 2, so it converges; ${L}<sup>2</sup> = 2 + ${L} gives 2 or −1, and the limit is 2.`,
    say: 'Prove it lands before you say where.',
  },
  // pp. 1127, 1128, 1134, 1137
  {
    topic: 6,
    kind: 'remember',
    q: 'What do the bounded × null corollary and the ratio-to-root rule give?',
    a: `If |${an}| ≤ ${M} for all ${n} and <i>b</i><sub><i>n</i></sub> → 0, then ${an}<i>b</i><sub><i>n</i></sub> → 0. If ${an} > 0 and ${fr(an1, an)} → ℓ, then ${an}<sup>1/<i>n</i></sup> → ℓ too, turning an intractable ${n}-th root into an easy ratio`,
    why: `${fr(`sin ${n}`, n)} → 0 on sight; ${fr(`(${n}!)<sup>1/<i>n</i></sup>`, n)} → ${fr('1', e)}, from ${an} = ${fr(`${n}!`, `${n}<sup><i>n</i></sup>`)} with ratio ${fr('1', `(1 + ${fr('1', n)})<sup><i>n</i></sup>`)} → ${fr('1', e)}.`,
    say: null,
  },
  // pp. 1130, 1133, 1135
  {
    topic: 6,
    kind: 'mixup',
    q: `${a}<sub>1</sub> = 1, ${an1} = 2${an} + 1: the fixed point is ${L} = −1. Is that the limit?`,
    a: `No: the terms 1, 3, 7, 15, 31, … are ${an} = 2<sup><i>n</i></sup> − 1, increasing but unbounded, so the sequence diverges to +∞ and the limit does not exist. The increasing step holds; only boundedness fails, so the monotone convergence theorem never applies. A fixed point says what the limit must be if one exists, never whether it exists`,
    why: `At ${n} = 26 the term is already 67,108,863; writing ${L} = lim ${an} presupposed a finite limit.`,
    say: null,
  },
  // pp. 1126, 1127, 1136
  {
    topic: 6,
    kind: 'mixup',
    q: 'Bounded, or convergent?',
    a: `Not the same: (−1)<sup><i>n</i></sup> is bounded and has no limit. Bounded is half of the monotone convergence theorem; monotone is the other half, and you need both`,
    why: `Increasing and bounded above converges; decreasing and bounded below converges.`,
    say: null,
  },
  // pp. 1131–1132, 1136
  {
    topic: 6,
    kind: 'mistake',
    q: `${LNI} (${fr('1', `√(${n}<sup>2</sup> + 1)`)} + ⋯ + ${fr('1', `√(${n}<sup>2</sup> + ${n})`)}): every term → 0, so is it 0?`,
    a: `No: 1. There are ${n} terms, each roughly ${fr('1', n)}. Sandwich the whole sum: ${fr(n, `√(${n}<sup>2</sup> + ${n})`)} ≤ <i>S</i><sub><i>n</i></sub> ≤ ${fr(n, `√(${n}<sup>2</sup> + 1)`)}, and both bounds → 1. Count the terms before splitting a sum`,
    why: `At ${n} = 10 the bounds are 0.9535 and 0.9950, with <i>S</i><sub>10</sub> = 0.9739.`,
    say: null,
  },
  // pp. 1135, 1136
  {
    topic: 6,
    kind: 'mistake',
    q: `${LNI} (${fr('1', `${n} + 1`)} + ⋯ + ${fr('1', `${n} + ${n}`)}): the upper bound tends to 1, so is the limit 1?`,
    a: `No: a bound is the answer only when the other bound agrees. Here ${n}${NB}·${NB}${fr('1', `2${n}`)} = ${HALF} and ${fr(n, `${n} + 1`)} → 1 do not meet, so they only trap the limit between ${HALF} and 1. It is ln${NB}2 ≈ 0.693, strictly between them. The other listed slips: LHL and RHL for a sequence, keeping every root of the fixed-point equation`,
    why: '0 is the term-by-term trap again; +∞ forgets that the terms shrink as their number grows.',
    say: null,
  },
  // pp. 1136
  {
    topic: 6,
    kind: 'shortcut',
    q: 'A sequence limit: what is the three-way triage?',
    a: `First: plain algebra in ${n}? Cross the bridge and use the degree rule. Second: a sum whose length grows? Chapter 8 formulas if they apply, the Sandwich if not. Third: recursive? Monotone convergence, starting from “${a}<sub>1</sub> =, ${a}<sub>2</sub> =, ${a}<sub>3</sub> =”. And an ${n}-th root of a sum of powers: write down the largest base`,
    why: `${LNI} ${fr(`1<sup>3</sup> + 2<sup>3</sup> + ⋯ + ${n}<sup>3</sup>`, `${n}<sup>4</sup>`)} = ${fr('1', '4')}, from [${fr(`${n}(${n} + 1)`, '2')}]<sup>2</sup>.`,
    say: null,
  },

  // ── Additional topic A · Derivatives from Functional Equations ──
  // pp. 1114–1115
  {
    topic: 7,
    kind: 'remember',
    q: 'You are given only a functional equation for f. How do you find f′(x)?',
    a: `The rules need a formula; the first principle needs only ${f}(${x} + ${h}). Find the anchor value ${f}(0) (additive type) or ${f}(1) (multiplicative type) from ${x} = ${y} = 0 or 1, and discard the trivial branch explicitly. Write ${fp}(${x}) = ${LH0} ${DQ}, substitute the equation into ${f}(${x} + ${h}), take everything depending on ${x} outside the limit, and recognise what survives as ${fp}(0) or ${fp}(1)`,
    why: `${f}(${x} + ${y}) = ${f}(${x})${f}(${y}): ${fp}(${x}) = ${fx}${NB}${LH0} ${fr(`${f}(${h}) − 1`, h)} = ${fx}${NB}${fp}(0), using ${f}(0) = 1.`,
    say: null,
  },
  // p. 1115
  {
    topic: 7,
    kind: 'remember',
    q: 'What are the four standard families of functional equations?',
    a: `${f}(${x} + ${y}) = ${f}(${x}) + ${f}(${y}): ${f}(0) = 0, ${fp}(${x}) = ${fp}(0), ${fx} = <i>kx</i>. ${f}(${x} + ${y}) = ${f}(${x})${f}(${y}): ${f}(0) = 1, ${fp}(${x}) = ${fp}(0)${fx}, ${fx} = ${e}<sup><i>kx</i></sup>. For ${x}, ${y} > 0 (the last two families), ${f}(<i>xy</i>) = ${f}(${x}) + ${f}(${y}): ${f}(1) = 0, ${fp}(${x}) = ${fr(`${fp}(1)`, x)}, ${fx} = ${c}${NB}ln${NB}${x}. ${f}(<i>xy</i>) = ${f}(${x})${f}(${y}): ${f}(1) = 1, ${fp}(${x}) = ${fr(`${fp}(1)${NB}${fx}`, x)}, ${fx} = ${x}<sup><i>n</i></sup>. Here ${k} = ${fp}(0), ${c} = ${fp}(1), ${n} = ${fp}(1), with ${f} differentiable where stated and not identically zero`,
    why: `${f}(<i>xy</i>) = ${f}(${x})${f}(${y}), ${fp}(1) = 3, not identically zero: ${fx} = ${X3} and ${fp}(2) = 12.`,
    say: null,
  },
  // p. 1116
  {
    topic: 7,
    kind: 'remember',
    q: 'f(x + y) = f(x)f(y) and f is differentiable only at 0. Is f differentiable everywhere?',
    a: `Yes: ${fp}(${x}) = ${fx}${NB}${fp}(0) came out finite at every ${x}, with nothing assumed except at 0. The functional equation carries the derivative at the anchor to the whole line`,
    why: `With ${fx} ≠ 0 and ${fp}(0) = 2: ${f}(0) = 1, ${fp}(${x}) = 2${fx}, ${fx} = ${e}<sup>2<i>x</i></sup>, so ${fp}(3) = 2${e}<sup>6</sup>.`,
    say: 'The functional equation propagates differentiability across the whole line.',
  },
  // pp. 1117, 1118
  {
    topic: 7,
    kind: 'mixup',
    q: 'Additive or multiplicative-argument equation: how do you write the increment?',
    a: `Additive equations want ${x} + ${h}, split as ${f}(${x}) and ${f}(${h}). Multiplicative-argument equations want ${x}(1 + ${fr(h, x)}), so ${f}(${x} + ${h}) = ${fx} + ${f}(1 + ${fr(h, x)}) for ${f}(<i>xy</i>) = ${f}(${x}) + ${f}(${y}); with ${t} = ${fr(h, x)} the limit becomes ${fr('1', x)}${NB}${fp}(1)`,
    why: `${f}(<i>xy</i>) = ${f}(${x}) + ${f}(${y}), ${fp}(1) = 2: ${fp}(${x}) = ${fr('2', x)}, ${fx} = 2${NB}ln${NB}${x}, ${f}(${e}<sup>2</sup>) = 4.`,
    say: 'Match the operation in the functional equation to the operation you create in the increment.',
  },
  // pp. 1115, 1116, 1118
  {
    topic: 7,
    kind: 'mistake',
    q: 'f(0) = f(0)² gives f(0) = 0 or 1. Can you simply take f(0) = 1?',
    a: `Not silently: show that ${f}(0) = 0 forces ${f} ≡ 0, since ${fx} = ${f}(${x} + 0) = ${fx}${f}(0) = 0, then discard it. Without the anchor value, ${LH0} ${fr(`${f}(${h}) − 1`, h)} stays an unnamed limit instead of ${fp}(0). The other listed slips: the wrong kind of increment, and quoting ${e}<sup><i>kx</i></sup> without checking it fits the data`,
    why: `${f}(${x} + ${y}) = ${f}(${x}) + ${f}(${y}) + 2<i>xy</i> − 1: ${f}(0) = 2${f}(0) − 1 gives ${f}(0) = 1, not 0.`,
    say: null,
  },
  // pp. 1115, 1117
  {
    topic: 7,
    kind: 'shortcut',
    q: 'Which column of the families table do you actually learn, and how do you check a constructed f?',
    a: `The derivative relation (${fp} = ${fp}(0)${f}, and so on): it is what questions ask for, and it can be rebuilt from first principle in twenty seconds. Then substitute the answer back into the original equation: the only check that catches inconsistent data`,
    why: `${f}(${x} + ${y}) = ${f}(${x}) + ${f}(${y}) + 2<i>xy</i> − 1, ${fp}(0) = ${a}: ${fp}(${x}) = ${fp}(0) + 2${x}, ${fx} = ${X2} + <i>ax</i> + 1, which satisfies the equation; real roots when |${a}| ≥ 2.`,
    say: null,
  },

  // ── Additional topic B · Finding Constants for Differentiability at a Junction ──
  // pp. 1119, 1121, 1123
  {
    topic: 8,
    kind: 'remember',
    q: 'What two conditions make a piecewise f differentiable at the junction x = c?',
    a: `Continuity: ${lim(`${x}→${c}<sup>−</sup>`)} ${fx} = ${lim(`${x}→${c}<sup>+</sup>`)} ${fx} = ${f}(${c}), equation (i). Matching one-sided derivatives: LHD = ${lim(`${h}→0<sup>+</sup>`)} ${fr(`${f}(${c} − ${h}) − ${f}(${c})`, `−${h}`)} equals RHD = ${lim(`${h}→0<sup>+</sup>`)} ${fr(`${f}(${c} + ${h}) − ${f}(${c})`, h)}, equation (ii). The first is forced, since differentiable at ${c} implies continuous at ${c}; two equations, two unknowns, a unique (${a}, ${b})`,
    why: `${X2} for ${x} ≤ 1 and <i>ax</i> + ${b} for ${x} > 1: ${a} + ${b} = 1 and 2 = ${a}, so ${a} = 2, ${b} = −1.`,
    say: 'Whenever a piecewise problem gives you two unknowns and asks for a unique answer, differentiability is being tested.',
  },
  // pp. 1119–1120, 1123
  {
    topic: 8,
    kind: 'remember',
    q: 'In what order do you find a and b, and when may you just differentiate each piece?',
    a: `Continuity first, the cheaper equation. Then differentiate each piece and evaluate at ${c}: LHD = (left piece)′ at ${c}, RHD = (right piece)′ at ${c}. That shortcut is valid once ${f} is continuous at ${c} and each piece is differentiable at ${c} (polynomials and the standard smooth functions are). Solve, then verify: same value at ${c}, same slope at ${c}`,
    why: `${x}<sup>2</sup> + ${a} for ${x} ≤ 2 and <i>bx</i> + 3 for ${x} > 2: slopes give ${b} = 4, values 4 + ${a} = 11, so ${a} = 7.`,
    say: 'Impose continuity first.',
  },
  // pp. 1121, 1122, 1123
  {
    topic: 8,
    kind: 'mixup',
    q: 'Merely continuous, or differentiable: how many answers for (a, b)?',
    a: `Continuity gives one equation, so two unknowns leave a one-parameter family; the slope condition is what pins one pair down`,
    why: `<i>ax</i> + ${b} for ${x} < 0 and sin${NB}${x} for ${x} ≥ 0: continuity needs only ${b} = 0 (every (${a}, 0)); differentiability adds ${a} = 1.`,
    say: null,
  },
  // pp. 1119, 1122
  {
    topic: 8,
    kind: 'mistake',
    q: 'The two slopes match at c. Is f differentiable there?',
    a: `Not unless the values match too: parallel pieces with a vertical gap are discontinuous, and a discontinuous function is not differentiable. Continuity is equation (i), always. And take ${f}(${c}) from the piece whose inequality includes ${c}`,
    why: `Figure 12.9’s three cases: a gap (slopes match, continuity fails), a corner (continuous, LHD ≠ RHD), smooth (both hold).`,
    say: null,
  },
  // pp. 1121, 1122, 1123
  {
    topic: 8,
    kind: 'mistake',
    q: `How do you differentiate ${fr('1', `|${x}|`)} at the junction x = 1?`,
    a: `Resolve the modulus on the side you approach from before differentiating: near ${x} = 1, ${x} > 0, so ${fr('1', `|${x}|`)} = ${fr('1', x)}, with derivative −${fr('1', X2)}. A modulus that survives to the differentiation step is a guaranteed sign error`,
    why: `<i>ax</i><sup>2</sup> + ${b} for ${x} < 1 and ${fr('1', `|${x}|`)} for ${x} ≥ 1: ${a} + ${b} = 1 and 2${a} = −1, so ${a} = −${HALF}, ${b} = ${fr('3', '2')}.`,
    say: 'Resolve every modulus on the correct side before differentiating.',
  },
  // p. 1122
  {
    topic: 8,
    kind: 'shortcut',
    q: 'For which a is a|x − 1| + 3 differentiable at x = 1?',
    a: `Only ${a} = 0: LHD = −${a} and RHD = ${a}, so equality forces ${a} = 0; any non-zero ${a} leaves a corner at ${x} = 1. Read the one-sided slopes straight off each side of the modulus`,
    why: `${X2} + 3${x} + ${a} for ${x} ≤ 1 and <i>bx</i> + 2 for ${x} > 1: ${b} = 5 from the slopes, then 4 + ${a} = 7, ${a} = 3.`,
    say: null,
  },
];
