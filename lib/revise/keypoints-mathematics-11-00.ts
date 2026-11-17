/**
 * KEY POINTS for Mathematics Class 11, Chapter 0 (Basic Mathematics: Indices,
 * Surds and Logarithms).
 *
 * Written for test mode: every point is a question to answer in your head,
 * then the answer and at most one more line. Four kinds, each a section on
 * the screen: Remember, Don't mix up, Common mistakes and Exam shortcuts.
 * Topic 01 (index 0) has the chapter's eleven sections: ten Remember points,
 * two Don't mix ups, three Common mistakes and three Exam shortcuts (18);
 * Additional topic A (index 1) is the book's Addendum P (where logarithms show
 * up in chemistry, physics and the rest of mathematics): five Remember points,
 * one Don't mix up, one Common mistake and two Exam shortcuts (9). 27 points in
 * all, trimmed from 57 to the density of the other Mathematics chapters:
 * related points are merged, and what is cut is a restatement, a second worked
 * example of the same rule, or a rule another point already carries. Memory
 * lines are a fifth, short section of their own, read rather than tested: the
 * first two of each topic.
 *
 * `topic`: Topic 01 is 0 and Additional topic A is 1. No point refers to
 * another topic by number.
 *
 * Every fact is from the Master Reference book (the October 2026 edition,
 * corrected after two expert reviews); the page (the bottom folio, book pp. 10
 * to 24: Topic 01 is pp. 10 to 22, Additional A pp. 23 to 24) is above each
 * point. Remember: the key definitions, laws and procedures of each section.
 * Common mistakes: the chapter's Common pitfalls. Exam shortcuts: its Pro-Tips
 * and the methods of its worked examples and practice answers. The chapter
 * prints no cheat sheet and no mnemonics, so `say` lines are the book's own
 * sentences, word for word, cut at a clause: "The laws come first; the
 * definitions are built to obey them.", "State the domain first.", "The
 * product law for logarithms is the addition law for exponents, seen from the
 * other side.", "Extraneous roots are the norm in this topic, not the
 * exception." and the Addendum's "Logarithms are not confined to algebra
 * chapters." and "The logarithm is what converts the problem into one algebra
 * already knows how to solve."
 *
 * Where the book is loose, the point states the corrected version, as the
 * chapter text now does: the graph of y = log_a x hugs the y-axis as x tends
 * to 0 from the right without touching it (down to minus infinity for a > 1,
 * up to plus infinity for 0 < a < 1) and for a > 1 rises steeply near 0 and
 * ever more slowly; the three immediate identities; the reciprocal relation
 * needs b not equal to 1; the characteristic is the greatest integer not
 * exceeding log N and 0 <= mantissa < 1; scientific notation compares
 * exponents first; the sign mnemonic for multiplying an inequality by log_a b
 * holds only for b > 1; combining logarithms can widen the domain (so a root
 * can be extraneous) and splitting can narrow it; 2^-100 is thirty 0s then
 * 788; a plain log can mean ln in calculus and in many JEE Advanced questions;
 * pH 4.3 gives 10^0.7 about 5.0; the decibel scale is about 120 units wide; the
 * Nernst result is quoted as 1.16 V; the printed AP/GP question finds no
 * logarithmic law until its follow-up; limits and derivatives is Chapter 12
 * (so no point names a chapter number). "2 + sqrt 3" is named a binomial surd
 * (a rational number plus a surd), not a surd itself. No point makes an
 * exam-year or exam-frequency claim, so none carries the "(the book's
 * estimate from past papers, not official figures)" label, and "JEE & NEET" in
 * the Addendum's title is kept only as a title: NEET has no Mathematics paper.
 * Cut as repeats: the separate points on rational exponents, the positive-base
 * reason, like surds, the three-surd case, the characteristic's two rules and
 * the digit count, the mantissa's dependence on digits, the stand-alone domain
 * mistake, the stand-alone modulus and product-split mistakes, the
 * remove-the-logarithm direction mistake, the (-8)^(2/6) mistake, the surd
 * reduction and negative fractional exponent shortcuts, the GP-to-AP shortcut,
 * the verify shortcut, and in Additional A the exam-setting mixup, the Nernst
 * and decibel mistakes, the half-life shortcut and the separate limit point.
 *
 * Markup is the chapter's own: variables italic, a root with its index raised
 * (<sup>n</sup>√), log with its base as a subscript, bar notation with the
 * combining overline after each character, − (U+2212) for minus; every
 * fraction stacked, <frac><num>…</num><den>…</den></frac> (and never a fraction
 * inside a numerator), except a fraction inside a raised or lowered run, which
 * keeps its slash (a<sup>p/q</sup>, (−8)<sup>1/3</sup>, the exponent t/T) and
 * the unit slashes (mol/L, W/m²); no em dashes; and always a space after "<"
 * (as the book prints it), so it is never read as a tag.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

const fr = (t: string, b: string) => `<frac><num>${t}</num><den>${b}</den></frac>`;
const I = (s: string) => `<i>${s}</i>`;
const NB = ' ';
const BAR = '̅';
const pw = (base: string, ex: string) => `${base}<sup>${ex}</sup>`;
const a = I('a');
const b = I('b');
const c = I('c');
const d = I('d');
const e = I('e');
const k = I('k');
const m = I('m');
const n = I('n');
const p = I('p');
const q = I('q');
const x = I('x');
const y = I('y');
const N = I('N');
const x2 = pw(x, '2');
const rt = (index: string, rad: string) => `<sup>${index}</sup>√${rad}`;
const lg = (base: string, arg = '') => `log<sub>${base}</sub>${arg === '' ? '' : arg.startsWith('(') ? arg : NB + arg}`;
const ln = (arg: string) => `ln${NB}${arg}`;
const LA = (arg = '') => lg(a, arg);
const LB = (arg = '') => lg(b, arg);
const LC = (arg = '') => lg(c, arg);
const L10 = (arg = '') => lg('10', arg);
const L2 = (arg = '') => lg('2', arg);
const L3 = (arg = '') => lg('3', arg);
const HP = '[H<sup>+</sup>]';
const E = I('E');
const P = I('P');
const Q = I('Q');
const T = I('T');
const N0 = `${N}<sub>0</sub>`;

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Basic Mathematics: Indices, Surds and Logarithms ──
  // p. 10
  {
    topic: 0,
    kind: 'remember',
    q: 'What does an index record, and where do negative and fractional exponents come from?',
    a: `${pw(a, n)} = ${a} · ${a} ⋯ ${a} (${n} factors) for a positive integer ${n}. Every other exponent is a definition, chosen so the same laws keep working: ${pw(a, '−3')} is the number that makes ${pw(a, '−3')} · ${pw(a, '3')} = ${pw(a, '0')} = 1 true, so ${pw(a, '−3')} = ${fr('1', pw(a, '3'))}`,
    why: `${pw('2', '−3')} = ${fr('1', '8')}, because ${pw('2', '−3')} · ${pw('2', '3')} = 1.`,
    say: 'The laws come first; the definitions are built to obey them.',
  },
  // pp. 10, 11
  {
    topic: 0,
    kind: 'remember',
    q: 'What are the laws of exponents, how do roots fit in, and why a positive base?',
    a: `For ${a}, ${b}${NB}>${NB}0 and real ${m}, ${n}: ${pw(a, m)} · ${pw(a, n)} = ${pw(a, `${m} + ${n}`)}; ${fr(pw(a, m), pw(a, n))} = ${pw(a, `${m} − ${n}`)}; (${pw(a, m)})<sup>${n}</sup> = ${pw(a, `${m}${n}`)}; (${a}${b})<sup>${n}</sup> = ${pw(a, n)}${pw(b, n)}; (${fr(a, b)})<sup>${n}</sup> = ${fr(pw(a, n), pw(b, n))}; ${pw(a, '0')} = 1; ${pw(a, `−${n}`)} = ${fr('1', pw(a, n))}. Roots: ${pw(a, `${p}/${q}`)} = ${rt(q, `(${pw(a, p)})`)} = (${rt(q, a)})<sup>${p}</sup>, airtight only for ${a}${NB}>${NB}0. With a negative base the routes disagree, so assume a positive base unless the exponent is a plain integer`,
    why: `(−8)<sup>2/6</sup> has no real value as (${rt('6', '(−8)')})<sup>2</sup>, yet (−8)<sup>1/3</sup> = −2 and ((−8)<sup>2</sup>)<sup>1/6</sup> = 2.`,
    say: null,
  },
  // p. 11
  {
    topic: 0,
    kind: 'remember',
    q: 'How do you compare two numbers in scientific notation?',
    a: `A number is written ${m} × 10<sup>${n}</sup> with 1${NB}≤${NB}${m}${NB}<${NB}10. Compare the exponents ${n} first (the larger exponent is the larger number), and the parts ${m} only when the exponents are equal. It previews the characteristic and mantissa of logarithms`,
    why: `6.2 × 10<sup>−3</sup> is larger than 9.1 × 10<sup>−5</sup>, although 6.2 < 9.1, because −3 > −5.`,
    say: null,
  },
  // pp. 11, 12
  {
    topic: 0,
    kind: 'remember',
    q: 'What is a surd, and how do you rationalise a denominator?',
    a: `A surd is an irrational root of a rational number: √2 and ${rt('3', '5')} are surds, √4 = 2 is not; 2 + √3 is a binomial surd. Only like surds (same order, same radicand after simplifying) can be added, and ${rt(n, a)} · ${rt(n, b)} = ${rt(n, `(${a}${b})`)}. To rationalise, multiply top and bottom by the conjugate, using (${x} − ${y})(${x} + ${y}) = ${x2} − ${pw(y, '2')}: √${a} + √${b} pairs with √${a} − √${b} to give ${a} − ${b}. With three surds, rationalise in two passes, grouping two terms first`,
    why: `${fr('1', '√5 − √3')} = ${fr('√5 + √3', '5 − 3')} = ${fr('√5 + √3', '2')} ≈ 1.984.`,
    say: null,
  },
  // p. 13
  {
    topic: 0,
    kind: 'remember',
    q: `What is a logarithm, and for which ${a}, ${x} is ${LA(x)} = ${y} meaningful?`,
    a: `${LA(x)} = ${y} ⟺ ${pw(a, y)} = ${x}, the inverse of the exponential. It needs ${a}${NB}>${NB}0, ${a}${NB}≠${NB}1, ${x}${NB}>${NB}0: a negative base makes ${pw(a, y)} non-real for most ${y}, 1<sup>${y}</sup> is always 1, and ${pw(a, y)} > 0 always, so zero and negative numbers have no logarithm to a positive base`,
    why: `${L10(`(${x2} − 5${x} + 6)`)} needs (${x} − 2)(${x} − 3)${NB}>${NB}0, so ${x}${NB}<${NB}2 or ${x}${NB}>${NB}3, not all real ${x}.`,
    say: 'State the domain first.',
  },
  // p. 14
  {
    topic: 0,
    kind: 'remember',
    q: 'What are the laws of logarithms and the three immediate identities?',
    a: `For ${a}${NB}>${NB}0, ${a}${NB}≠${NB}1 and ${m}, ${n}${NB}>${NB}0: ${LA(`(${m}${n})`)} = ${LA(m)} + ${LA(n)}; ${LA(`(${fr(m, n)})`)} = ${LA(m)} − ${LA(n)}; ${LA(`(${pw(m, p)})`)} = ${p} ${LA(m)}. Identities, straight from the definition: ${pw(a, `log<sub>${a}</sub> ${x}`)} = ${x} (${x}${NB}>${NB}0), ${LA('1')} = 0 and ${LA(a)} = 1`,
    why: `${L10('72')} = ${L10('(2<sup>3</sup>)')} + ${L10('(3<sup>2</sup>)')} = 3 ${L10('2')} + 2 ${L10('3')}.`,
    say: 'The product law for logarithms is the addition law for exponents, seen from the other side.',
  },
  // p. 15
  {
    topic: 0,
    kind: 'remember',
    q: 'What is the change-of-base formula, and what follows from it?',
    a: `For ${a}, ${c}${NB}>${NB}0, ${a}, ${c}${NB}≠${NB}1 and ${b}${NB}>${NB}0: ${LA(b)} = ${fr(LC(b), LC(a))}, needed because calculators give only base 10 or ${e}. Setting ${c} = ${b} (allowed as ${b}${NB}≠${NB}1) gives ${LA(b)} · ${LB(a)} = 1, and for ${p}, ${q}${NB}≠${NB}0, ${lg(`${a}<sup>${p}</sup>`, `(${pw(b, q)})`)} = ${fr(q, p)} ${LA(b)}`,
    why: `${L2('8')} = 3, so ${lg('8', '2')} = ${fr('1', '3')}; and ${lg('4', '25')} = ${L2('5')}.`,
    say: null,
  },
  // pp. 15, 16
  {
    topic: 0,
    kind: 'remember',
    q: `What are the characteristic and mantissa of ${L10(N)}, and how do you read them off?`,
    a: `${L10(N)} = (integer part, the greatest integer not exceeding it, the characteristic) + (the mantissa), with 0${NB}≤${NB}mantissa${NB}<${NB}1 even if the characteristic is negative. The mantissa depends only on the digits; moving the decimal point changes only the characteristic. For ${N}${NB}≥${NB}1 with ${k} digits before the point it is ${k} − 1; for 0${NB}<${NB}${N}${NB}<${NB}1 with ${k} zeros after the point it is −(${k} + 1), written ${k}${BAR}+${BAR}1${BAR}, so 3${BAR}1${BAR}.90 means −31 + 0.90, not −31.90. A positive integer ${N} has (characteristic) + 1 digits`,
    why: `${L10('43700')} = 4.6405 and ${L10('(0.000437)')} = 4${BAR}.6405: same mantissa, characteristics 4 and −4.`,
    say: null,
  },
  // pp. 16, 17
  {
    topic: 0,
    kind: 'remember',
    q: 'What are the three steps for solving a logarithmic equation?',
    a: `1. State the domain: every argument positive, every variable base positive and not 1. 2. Combine into one logarithm a side, then use ${LA(P)} = ${LA(Q)} ⟺ ${P} = ${Q}, or ${LA(P)} = ${k} ⟺ ${P} = ${pw(a, k)}. 3. Solve, then check every root against the step 1 domain. Combining two logarithms can widen the domain, which is how an extraneous root slips in`,
    why: `${lg('4', `(${x} + 3)`)} + ${lg('4', `(${x} − 3)`)} = 2 gives ${x2} − 9 = 16, so ${x} = ±5, and the domain ${x}${NB}>${NB}3 keeps only ${x} = 5.`,
    say: null,
  },
  // pp. 13, 17, 18
  {
    topic: 0,
    kind: 'remember',
    q: 'How does the base decide the direction of a logarithmic inequality?',
    a: `Both arguments must be positive first. For ${a}${NB}>${NB}1, ${y} = ${LA(x)} rises (steeply near ${x} = 0, then ever more slowly) and ${LA(x)} > ${LA(y)} ⟺ ${x} > ${y}. For 0${NB}<${NB}${a}${NB}<${NB}1 it falls and the direction reverses. Either graph hugs the ${y}-axis as ${x} → 0<sup>+</sup> without touching it, towards −∞ for ${a}${NB}>${NB}1 and +∞ for 0${NB}<${NB}${a}${NB}<${NB}1`,
    why: `${L3(`(${x} − 1)`)} < 2 gives 1${NB}<${NB}${x}${NB}<${NB}10; ${lg('0.5', `(2${x} − 3)`)} ≥ −2 gives 1.5${NB}<${NB}${x}${NB}≤${NB}3.5.`,
    say: 'The direction of a logarithmic inequality depends on whether the base is bigger or smaller than 1.',
  },
  // ── Don't mix up ──
  // pp. 13, 18
  {
    topic: 0,
    kind: 'mixup',
    q: `${lg(x, '81')} = 4 and ${L10(`(${x2})`)} = 2: is ${x} = −3 rejected, and is ${x} = −10?`,
    a: `Different positions of ${x}. In ${lg(x, '81')} = 4, ${x} is the base, so ${x}${NB}>${NB}0, ${x}${NB}≠${NB}1 and ${x} = −3 is rejected, leaving ${x} = 3. In ${L10(`(${x2})`)} = 2, ${x} sits in the argument, which needs only ${x2}${NB}>${NB}0, so both ${x} = 10 and ${x} = −10 are valid`,
    why: `${x}<sup>4</sup> = 81 gives ±3 and ${x2} = 100 gives ±10; the check is on the base in one and on ${x2} in the other.`,
    say: null,
  },
  // p. 17
  {
    topic: 0,
    kind: 'mixup',
    q: `Does multiplying an inequality by ${LA(b)} always act like multiplying by a number with the sign of (${a} − 1)?`,
    a: `Only when ${b}${NB}>${NB}1. Then ${LA(b)} is positive for ${a}${NB}>${NB}1 and negative for 0${NB}<${NB}${a}${NB}<${NB}1, the sign of (${a} − 1); for 0${NB}<${NB}${b}${NB}<${NB}1 the sign is opposite, and for ${b} = 1 it is 0, so check ${b} first`,
    why: `${L2('4')} = 2 > 0 and ${lg('0.5', '4')} = −2 < 0, for the same ${b} = 4.`,
    say: null,
  },
  // ── Common mistakes ──
  // pp. 14, 21
  {
    topic: 0,
    kind: 'mistake',
    q: `${L10(`(${x2})`)} = 2 or ${L10('((−2)(−3))')}: when is splitting a logarithm safe?`,
    a: `${LA(`(${x2})`)} = 2 ${LA(`|${x}|`)} for all ${x}${NB}≠${NB}0; the version without the modulus needs ${x}${NB}>${NB}0 first, so reach for the modulus by reflex. And ${LA(`(${m}${n})`)} = ${LA(m)} + ${LA(n)} needs ${m}${NB}>${NB}0 and ${n}${NB}>${NB}0 individually, not just ${m}${n}${NB}>${NB}0`,
    why: `${L10('((−2)(−3))')} = ${L10('6')} is defined, but ${L10('(−2)')} and ${L10('(−3)')} do not exist; and ${x2} = 100 gives ${x} = ±10, both valid.`,
    say: null,
  },
  // pp. 17, 21
  {
    topic: 0,
    kind: 'mistake',
    q: 'You solve a logarithmic equation and get two roots: do you keep both?',
    a: `Check each in the original domain: combining logarithms can widen the domain, and splitting ${L10(`(${x2})`)} into 2 ${L10(x)} can narrow it and lose a root. Reject any root that makes an argument zero or negative, and verify by substituting into the original form of the equation`,
    why: `${L2(`(${x} − 1)`)} + ${L2(`(${x} + 1)`)} = 3 gives ${x2} = 9; the domain is ${x}${NB}>${NB}1, so ${x} = −3 is rejected and ${x} = 3 is kept (check: 1 + 2 = 3).`,
    say: 'Extraneous roots are the norm in this topic, not the exception.',
  },
  // pp. 15, 21
  {
    topic: 0,
    kind: 'mistake',
    q: 'A formula uses ln but you have common-log tables: do you just substitute?',
    a: `No: log is base 10 and ln is base ${e}, and a formula in one base needs a change of base for tables built for the other. Check which symbol the formula uses; in calculus, and in many JEE Advanced questions, a plain log can mean the natural logarithm, so the question or its options decide, and ln is never ambiguous`,
    why: `${ln(x)} = ${fr(L10(x), L10(e))}.`,
    say: null,
  },
  // ── Exam shortcuts ──
  // p. 22
  {
    topic: 0,
    kind: 'shortcut',
    q: 'A question gives log 2 and log 3: what is the method?',
    a: `Factorise the argument into powers of 2, 3 and 5 (recall ${L10('5')} = 1 − ${L10('2')}) and apply the laws term by term`,
    why: `${L10('108')} = 2(0.3010) + 3(0.4771) = 2.0333.`,
    say: null,
  },
  // pp. 16, 22
  {
    topic: 0,
    kind: 'shortcut',
    q: '“How many digits” or “how many leading zeros”: the whole solution?',
    a: `Take ${lg('10')}, split off the characteristic and read the answer: digits = characteristic + 1; for a number below 1, ${k} = (the bar characteristic) − 1 zeros after the point`,
    why: `2<sup>40</sup> has 13 digits (40 × 0.3010 = 12.04); 2<sup>−100</sup> = 7.8886 × 10<sup>−31</sup> has thirty 0s, then the digits 788.`,
    say: null,
  },
  // p. 22
  {
    topic: 0,
    kind: 'shortcut',
    q: `A chain ${LA(b)} · ${LB(c)} · ${LC(d)} ⋯: what do you suspect first?`,
    a: `Telescoping through change of base: every numerator cancels the next denominator, leaving the first denominator and the last numerator`,
    why: `${L2('3')} · ${L3('4')} · ${lg('4', '5')} · ${lg('5', '6')} · ${lg('6', '7')} · ${lg('7', '8')} = ${fr(ln('8'), ln('2'))} = 3.`,
    say: null,
  },

  // ── Additional topic A · Where Logarithms Actually Show Up in JEE and NEET ──
  // p. 23
  {
    topic: 1,
    kind: 'remember',
    q: 'What is pH, and why the minus sign?',
    a: `pH = −${lg('10')}${HP}, with ${HP} in mol/L. Hydrogen-ion concentrations span 10<sup>−1</sup> to 10<sup>−14</sup> M, and the minus sign makes the logarithm a small positive number from 1 to 14`,
    why: `${HP} = 10<sup>−3</sup> M gives pH = 3.`,
    say: 'Logarithms are not confined to algebra chapters.',
  },
  // p. 23
  {
    topic: 1,
    kind: 'remember',
    q: 'What is the Nernst equation at 298 K, and where does 0.0591 come from?',
    a: `${E} = ${E}° − ${fr('0.0591', n)} ${lg('10')}${NB}${Q}, in volt, with ${n} the electrons transferred. The constant is ${fr('<i>RT</i> ln 10', '<i>F</i>')} = ${fr('8.314 × 298 × 2.303', '96485')} ≈ 0.0591`,
    why: `${n} = 2, ${E}° = 1.10 V, ${Q} = 0.01: ${E} = 1.10 + 0.0591 = 1.1591 V, quoted as 1.16 V (the data are to two decimal places).`,
    say: null,
  },
  // p. 23
  {
    topic: 1,
    kind: 'remember',
    q: 'What is the decibel scale for sound intensity level?',
    a: `<i>β</i> = 10 ${lg('10')}(${fr('<i>I</i>', '<i>I</i><sub>0</sub>')}), with <i>I</i><sub>0</sub> = 10<sup>−12</sup> W/m<sup>2</sup>, the threshold of hearing. It compresses about twelve orders of magnitude into about 120 units (0 dB to about 120 dB at 1 W/m<sup>2</sup>), not a few tens`,
    why: `<i>I</i> = 10<sup>−2</sup> W/m<sup>2</sup>: <i>β</i> = 10 ${lg('10')}(10<sup>10</sup>) = 100 dB.`,
    say: null,
  },
  // pp. 23, 24
  {
    topic: 1,
    kind: 'remember',
    q: 'What is the half-life law, and when does it force a logarithm?',
    a: `${N} = ${N0}(${fr('1', '2')})<sup><i>t</i>/<i>T</i></sup>, with ${T} the half-life; activity falls in the same ratio. Any fraction that is not a clean power of ${fr('1', '2')} forces a logarithm: ${fr('<i>t</i>', T)} = ${fr(`${lg('10')}${NB}(fraction)`, `${lg('10')}${NB}0.5`)}`,
    why: `For 10%, ${fr('<i>t</i>', T)} = ${fr('−1', '−0.3010')} ≈ 3.32 half-lives.`,
    say: null,
  },
  // p. 24
  {
    topic: 1,
    kind: 'remember',
    q: 'How does logarithmic differentiation work, and what is the derivative of ln x?',
    a: `${fr('<i>d</i>', '<i>dx</i>')}(ln ${x}) = ${fr('1', x)}. Take ln of both sides, differentiate implicitly, then multiply back by ${y}; the laws of this chapter turn a variable exponent into something the ordinary rules can handle`,
    why: `${y} = ${pw(x, x)} (${x}${NB}>${NB}0): ln ${y} = ${x} ln ${x}, so ${fr('<i>dy</i>', '<i>dx</i>')} = ${pw(x, x)}(ln ${x} + 1).`,
    say: 'The logarithm is what converts the problem into one algebra already knows how to solve.',
  },
  // p. 24
  {
    topic: 1,
    kind: 'mixup',
    q: `Is ${pw(x, x)} differentiated by the power rule or by the exponential rule?`,
    a: `Neither alone: the power rule needs a constant exponent and the exponential rule a constant base. Take ln first, or write ${pw(x, x)} = ${pw(e, `${x} ln ${x}`)} and use the chain rule; or vary the base and the exponent one at a time and add`,
    why: `Every route gives ${pw(x, x)}(ln ${x} + 1).`,
    say: null,
  },
  // p. 24
  {
    topic: 1,
    kind: 'mistake',
    q: `The 3rd, 6th and 12th terms of an AP (common difference ${d}${NB}≠${NB}0) are in GP: is a logarithm used to find them?`,
    a: `No: (<i>A</i> + 5${d})<sup>2</sup> = (<i>A</i> + 2${d})(<i>A</i> + 11${d}) gives ${d} = <i>A</i>, and the terms are 3<i>A</i>, 6<i>A</i>, 12<i>A</i>, ratio 2. Logarithms enter only in the follow-up about exceeding ${N}, where dividing by ${lg('10')}${NB}<i>r</i> keeps the direction only for <i>r</i> > 1`,
    why: null,
    say: null,
  },
  // p. 23
  {
    topic: 1,
    kind: 'shortcut',
    q: 'pH = 4.3: how do you find [H<sup>+</sup>] without a calculator?',
    a: `Split the power: ${HP} = 10<sup>−4.3</sup> = 10<sup>−5</sup> × 10<sup>0.7</sup>, and since ${lg('10')}${NB}5 ≈ 0.7, 10<sup>0.7</sup> ≈ 5.0`,
    why: `So ${HP} ≈ 5.0 × 10<sup>−5</sup> M.`,
    say: null,
  },
  // p. 23
  {
    topic: 1,
    kind: 'shortcut',
    q: `A decibel question where <i>I</i> over <i>I</i><sub>0</sub> is a power of ten?`,
    a: `Read the exponent: <i>β</i> = 10 × (the power of ten)`,
    why: `${fr('10<sup>−2</sup>', '10<sup>−12</sup>')} = 10<sup>10</sup>, so 100 dB.`,
    say: null,
  },
];
