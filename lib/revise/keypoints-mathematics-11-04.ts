/**
 * KEY POINTS for Mathematics Class 11, Chapter 4 (Complex Numbers and
 * Quadratic Equations).
 *
 * Written for test mode: every point is a question to answer in your head,
 * then the answer and at most one more line. Four kinds, each a section on
 * the screen: Remember, Don't mix up, Common mistakes and Exam shortcuts.
 * Topics 01–09 each have two or more Remember points, at least one of each
 * other kind and one Exam shortcut; the long one carries more (Topic 07, real
 * quadratics: sign, extremum, location of roots and common roots): 60 points
 * in all. Memory lines are a fifth, short section of their own, read rather
 * than tested: the first two of each topic.
 *
 * `topic`: Topics 01–09 are 0–8 (01–06 the main chapter, 07 the supplement,
 * 08–09 the "Additional Topics" part). No point refers to another topic by
 * number.
 *
 * Every fact is from the Master Reference book (the October 2026 edition); the
 * page (the bottom folio) is above each point. Remember: the topic's key
 * formulas and definitions, its theorems, derivations and procedures, and its
 * Cheat sheet. Common mistakes: its Common pitfalls and its MCQ traps. Exam
 * shortcuts: its Pro-Tips, with a worked example or practice answer. `say`:
 * this chapter's cheat sheets print no memory aids and the text has no
 * labelled memory hooks, so the memory lines are the book's own bold one-line
 * sentences, word for word, without bold (no em dashes in Mathematics), a
 * first letter capitalised where the sentence starts mid-line: seventeen in
 * all, two per topic and one for Topic 09. Where the book over-states a rule
 * ("always two square roots", "exactly n roots", "|z₀| ± r", "with complex
 * coefficients it fails"), the point states it only with the condition the
 * chapter itself gives, or in the chapter's own milder words.
 *
 * Markup is the chapter's own: i, variables and Greek letters italic, π
 * upright, Re, Im and arg upright, − (U+2212) for minus; the conjugate bar is
 * U+0305 straight after the barred letter's closing tag. Every fraction is
 * stacked, <frac><num>…</num><den>…</den></frac>, except inside a raised run
 * (r<sup>1/n</sup>, e<sup>iπ/3</sup>), which keeps the chapter's form.
 * Exam-frequency claims would keep the label "(the book’s estimate from past
 * papers, not official figures)"; none of these points makes one.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

const B = '̅';
const fr = (n: string, d: string) => `<frac><num>${n}</num><den>${d}</den></frac>`;
const i = '<i>i</i>';
const z = '<i>z</i>';
const zb = `<i>z</i>${B}`;
const zzb = `<i>zz</i>${B}`;
const z1 = '<i>z</i><sub>1</sub>';
const z2 = '<i>z</i><sub>2</sub>';
const z3 = '<i>z</i><sub>3</sub>';
const zb1 = `<i>z</i>${B}<sub>1</sub>`;
const zb2 = `<i>z</i>${B}<sub>2</sub>`;
const zb3 = `<i>z</i>${B}<sub>3</sub>`;
const ub = `<i>u</i>${B}`;
const uvb = `<i>u</i><i>v</i>${B}`;
const om = '<i>ω</i>';
const D = '<i>D</i>';
const PI2 = fr('π', '2');
/** −b/2a, the vertex. */
const VX = `−${fr('<i>b</i>', '2<i>a</i>')}`;
/** −D/4a, the extreme value. */
const VY = `−${fr(D, '4<i>a</i>')}`;
const SUM = `−${fr('<i>b</i>', '<i>a</i>')}`;
const PROD = fr('<i>c</i>', '<i>a</i>');

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Algebra of Complex Numbers ──
  // pp. 338–340, 343
  {
    topic: 0,
    kind: 'remember',
    q: `What is ${i}, and how do you evaluate any power ${i}<sup><i>n</i></sup>?`,
    a: `${i} = √−1, so ${i}<sup>2</sup> = −1. Powers of ${i} cycle with period 4: ${i}<sup>4<i>k</i></sup> = 1, ${i}<sup>4<i>k</i>+1</sup> = ${i}, ${i}<sup>4<i>k</i>+2</sup> = −1, ${i}<sup>4<i>k</i>+3</sup> = −${i} (<i>k</i> ∈ ℤ). Write <i>n</i> = 4<i>k</i> + <i>r</i>, <i>r</i> ∈ {0, 1, 2, 3}: then ${i}<sup><i>n</i></sup> = (${i}<sup>4</sup>)<sup><i>k</i></sup>${i}<sup><i>r</i></sup> = ${i}<sup><i>r</i></sup>, so keep only the remainder of <i>n</i> on division by 4. For negative powers, add a multiple of 4 first: ${i}<sup>−1</sup> = ${i}<sup>3</sup> = −${i}. Multiplying by ${i} rotates a number 90° anticlockwise, which is why ${i}<sup>4</sup> = 1 (a full turn brings you home) and why the powers repeat every four steps`,
    why: `${i}<sup>135</sup> + ${i}<sup>−50</sup>: 135 = 4(33) + 3 gives ${i}<sup>135</sup> = ${i}<sup>3</sup> = −${i}, and ${i}<sup>−50</sup> = ${i}<sup>−50+52</sup> = ${i}<sup>2</sup> = −1, so the sum is −1 − ${i}.`,
    say: 'Two quarter-turns make a half-turn.',
  },
  // pp. 338–340, 343
  {
    topic: 0,
    kind: 'remember',
    q: 'What is a complex number, when are two of them equal, and what does ℂ not have?',
    a: `${z} = <i>a</i> + <i>ib</i> with <i>a</i>, <i>b</i> ∈ ℝ: <i>a</i> = Re(${z}) is the real part and <i>b</i> = Im(${z}) the imaginary part, both real. ${z} is purely real if <i>b</i> = 0 and purely imaginary if <i>a</i> = 0, <i>b</i> ≠ 0, and ℕ ⊂ 𝕎 ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ. Equality needs both conditions: <i>a</i> + <i>ib</i> = <i>c</i> + <i>id</i> ⟺ <i>a</i> = <i>c</i> and <i>b</i> = <i>d</i>, as two grid addresses match only if both coordinates agree; satisfying only one is an error. Order is undefined: <, > do not apply to non-real complex numbers, so “9 + 6${i} > 3 + 2${i}” is meaningless`,
    why: `4<i>x</i> + ${i}(3<i>x</i> − <i>y</i>) = 3 + ${i}(−6): equating parts, 4<i>x</i> = 3 and 3<i>x</i> − <i>y</i> = −6, so <i>x</i> = ${fr('3', '4')} and <i>y</i> = ${fr('33', '4')}.`,
    say: null,
  },
  // pp. 339–341
  {
    topic: 0,
    kind: 'remember',
    q: 'How do you multiply and divide complex numbers, and what is the multiplicative inverse of <i>a</i> + <i>ib</i>?',
    a: `<i>z</i><sub>1</sub><i>z</i><sub>2</sub> = (<i>ac</i> − <i>bd</i>) + ${i}(<i>ad</i> + <i>bc</i>), applying ${i}<sup>2</sup> = −1. To divide, multiply numerator and denominator by (<i>c</i> − <i>id</i>): ${fr('<i>a</i> + <i>ib</i>', '<i>c</i> + <i>id</i>')} = ${fr('(<i>a</i> + <i>ib</i>)(<i>c</i> − <i>id</i>)', '<i>c</i><sup>2</sup> + <i>d</i><sup>2</sup>')}; the denominator is now the real number <i>c</i><sup>2</sup> + <i>d</i><sup>2</sup>, then separate real and imaginary parts. Leaving a complex denominator is an error. For ${z} = <i>a</i> + <i>ib</i> ≠ 0, ${z}<sup>−1</sup> = ${fr('<i>a</i> − <i>ib</i>', '<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>')}, and it is unique: every ${z} ≠ 0 has exactly one <i>s</i> with <i>zs</i> = 1, the only non-routine axiom in proving ℂ a field`,
    why: `${z} = 3 − 4${i}: <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> = 25, so ${z}<sup>−1</sup> = ${fr('3 + 4<i>i</i>', '25')}; check (3 − 4${i}) · ${fr('3 + 4<i>i</i>', '25')} = ${fr('9 + 16', '25')} = 1.`,
    say: null,
  },
  // pp. 339, 342–343
  {
    topic: 0,
    kind: 'mixup',
    q: `Is the imaginary part of ${z} = <i>a</i> + <i>ib</i> equal to <i>b</i> or to <i>ib</i>?`,
    a: `<i>b</i>. Im(${z}) = <i>b</i>, a real number, not <i>ib</i>; writing Im(${z}) = <i>bi</i> is a listed pitfall. Both parts are real: Re(${z}) = <i>a</i>, Im(${z}) = <i>b</i>`,
    why: `${fr('2 − <i>i</i>', '1 + <i>i</i>')} = ${fr('(2 − <i>i</i>)(1 − <i>i</i>)', '2')} = ${fr('1 − 3<i>i</i>', '2')}: Re = ${fr('1', '2')} and Im = −${fr('3', '2')}.`,
    say: null,
  },
  // pp. 338, 343
  {
    topic: 0,
    kind: 'mistake',
    q: 'Is √−4 · √−9 = √36 = 6?',
    a: `No: it is −6. The rule √<i>a</i> √<i>b</i> = √(<i>ab</i>) holds for real <i>a</i>, <i>b</i> only when they are not both negative. Convert each √negative to ${i}√positive first: √−4 · √−9 = (2${i})(3${i}) = 6${i}<sup>2</sup> = −6, and likewise √−2 √−3 = (${i}√2)(${i}√3) = ${i}<sup>2</sup>√6 = −√6, not √6. The partner slip is treating ${i}<sup>2</sup> as +1 or leaving it unsimplified: replace ${i}<sup>2</sup> with −1 immediately`,
    why: `The multiplicative inverse of ${i} is ${fr('1', i)} · ${fr('−<i>i</i>', '−<i>i</i>')} = −${i}, not −1, which confuses the inverse with ${i}<sup>2</sup>.`,
    say: null,
  },
  // pp. 341–343
  {
    topic: 0,
    kind: 'shortcut',
    q: `Evaluate <i>S</i> = ∑<sub><i>n</i>=1</sub><sup>100</sup> ${i}<sup><i>n</i>!</sup>. The fast way?`,
    a: `For <i>n</i> ≥ 4, <i>n</i>! is a multiple of 4, so ${i}<sup><i>n</i>!</sup> = 1. Only the first three terms differ: ${i}<sup>1!</sup> = ${i}, ${i}<sup>2!</sup> = −1, ${i}<sup>3!</sup> = ${i}<sup>6</sup> = −1. So <i>S</i> = (${i} − 2) + 97 = 95 + ${i}. Two more collapsers: any four consecutive powers of ${i} sum to 0, since ${i}<sup><i>n</i></sup>(1 + ${i} + ${i}<sup>2</sup> + ${i}<sup>3</sup>) = ${i}<sup><i>n</i></sup>(1 + ${i} − 1 − ${i}) = 0; and (1 + ${i})<sup>2</sup> = 2${i}, (1 − ${i})<sup>2</sup> = −2${i}, worth memorising for power problems`,
    why: `(${fr('1 + <i>i</i>', '1 − <i>i</i>')})<sup><i>m</i></sup> = 1: the base is ${fr('(1 + <i>i</i>)<sup>2</sup>', '(1 − <i>i</i>)(1 + <i>i</i>)')} = ${fr('2<i>i</i>', '2')} = ${i}, and ${i}<sup><i>m</i></sup> = 1 exactly when <i>m</i> is a multiple of 4, so the least positive <i>m</i> is 4.`,
    say: `Four consecutive powers of ${i} sum to zero.`,
  },

  // ── Topic 02 · The Modulus and the Conjugate of a Complex Number ──
  // pp. 345–348, 351
  {
    topic: 1,
    kind: 'remember',
    q: `What is the conjugate of ${z} = <i>a</i> + <i>ib</i>, and why is ${zzb} = |${z}|<sup>2</sup> the workhorse?`,
    a: `${zb} = <i>a</i> − <i>ib</i>: only the sign of the imaginary part flips. It is the reflection of ${z} across the real axis, so a first-quadrant number has its conjugate in the fourth. ${zzb} = (<i>a</i> + <i>ib</i>)(<i>a</i> − <i>ib</i>) = <i>a</i><sup>2</sup> − ${i}<sup>2</sup><i>b</i><sup>2</sup> = <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> = |${z}|<sup>2</sup>, a plain non-negative real number: it turns the complex quantity ${z} into the real quantity |${z}|<sup>2</sup>, the trick behind every division and every “show it’s real” proof. Hence ${z}<sup>−1</sup> = ${fr(zb, `|${z}|<sup>2</sup>`)} (${z} ≠ 0). Also ${z} + ${zb} = 2 Re(${z}) and ${z} − ${zb} = 2${i} Im(${z})`,
    why: `${z} = 4 − 3${i}: |${z}|<sup>2</sup> = 25 and ${zb} = 4 + 3${i}, so ${z}<sup>−1</sup> = ${fr('4 + 3<i>i</i>', '25')} = ${fr('4', '25')} + ${fr('3', '25')}${i}.`,
    say: 'The conjugate is a mirror reflection.',
  },
  // pp. 345–348, 351
  {
    topic: 1,
    kind: 'remember',
    q: `What is |${z}|, and which modulus rules hold?`,
    a: `|${z}| = √(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>) ≥ 0, the straight-line distance from the origin. |${z}| = 0 ⟺ ${z} = 0; |${z}| = |${zb}| = |−${z}|. The modulus is multiplicative, |${z1}${z2}| = |${z1}||${z2}| (from ${zzb} = |${z}|<sup>2</sup> and the conjugate of a product), so |${fr(z1, z2)}| = ${fr(`|${z1}|`, `|${z2}|`)} (${z2} ≠ 0) and |${z}<sup><i>n</i></sup>| = |${z}|<sup><i>n</i></sup>; and |Re(${z})| ≤ |${z}|, |Im(${z})| ≤ |${z}|. Over a sum only the triangle inequality holds: |${z1} + ${z2}| ≤ |${z1}| + |${z2}|, with equality iff ${z1}, ${z2} point in the same direction (one a non-negative real multiple of the other), and ||${z1}| − |${z2}|| ≤ |${z1} − ${z2}|. Parallelogram identity: |${z1} + ${z2}|<sup>2</sup> + |${z1} − ${z2}|<sup>2</sup> = 2(|${z1}|<sup>2</sup> + |${z2}|<sup>2</sup>)`,
    why: `|(1 + ${i})<sup>10</sup>| = |1 + ${i}|<sup>10</sup> = (√2)<sup>10</sup> = 2<sup>5</sup> = 32, with no expansion.`,
    say: 'The modulus is “as the crow flies.”',
  },
  // pp. 346, 348, 350–351
  {
    topic: 1,
    kind: 'remember',
    q: 'How does the conjugate behave over sums and products, and how does it prove a number real or purely imaginary?',
    a: `Conjugation passes through every operation: the conjugate of ${z1} ± ${z2} is ${zb1} ± ${zb2}, of ${z1}${z2} it is ${zb1}${zb2}, of ${fr(z1, z2)} it is ${fr(zb1, zb2)} (${z2} ≠ 0), and of ${z}<sup><i>n</i></sup> it is (${zb})<sup><i>n</i></sup>; conjugating twice gives back ${z}. ${z} is purely real ⟺ ${z} = ${zb}; purely imaginary ⟺ ${z} = −${zb} (${z} ≠ 0). To prove “<i>E</i> is real”, show <i>E</i> = <i>E</i>${B}; to prove “imaginary”, show <i>E</i> + <i>E</i>${B} = 0: taking the conjugate of a whole expression and comparing is often faster than expanding into <i>a</i> + <i>ib</i>. On the unit circle (|${z}| = 1), ${zb} = ${fr('1', z)}, a powerful substitution`,
    why: `With <i>w</i> = ${fr('<i>z</i> − 1', '<i>z</i> + 1')} (${z} ≠ ±1): <i>w</i> purely imaginary ⟺ <i>w</i> + <i>w</i>${B} = 0 ⟺ ${zzb} = 1 ⟺ |${z}| = 1.`,
    say: null,
  },
  // pp. 346, 350–351
  {
    topic: 1,
    kind: 'mixup',
    q: 'Conjugate or additive inverse: which flips one sign and which flips both?',
    a: `The conjugate ${zb} = <i>a</i> − <i>ib</i> flips only the imaginary sign; the additive inverse −${z} = −<i>a</i> − <i>ib</i> flips both. For ${z} = 2 + 3${i}: conjugate 2 − 3${i}, additive inverse −2 − 3${i}. The other listed confusion is ${zzb} with (${zb})<sup>2</sup> or with |${z}|: ${zzb} = |${z}|<sup>2</sup>, a non-negative real`,
    why: `For any ${z}, ${zzb} is |${z}|<sup>2</sup>: |${z}| drops the square, and 2 Re(${z}) is ${z} + ${zb}.`,
    say: null,
  },
  // pp. 346, 350–351
  {
    topic: 1,
    kind: 'mistake',
    q: `If ${z} = −3 − 4${i}, is |${z}| = −5, or 7?`,
    a: `Neither: |${z}| = √(9 + 16) = 5. The modulus is always the non-negative square root, and the real-number shortcut |<i>x</i>| = ±<i>x</i> does not carry over: you cannot write |${z}| = ±${z} for complex ${z}. Adding |−3| + |−4| = 7 skips Pythagoras. The other listed slips: |${z1} + ${z2}| ≠ |${z1}| + |${z2}| in general, since the modulus does not distribute over a sum; and conjugating a product as a sum, when the conjugate of ${z1}${z2} is ${zb1}${zb2}, not ${zb1} + ${zb2}`,
    why: `Conjugating only one factor fails too: the conjugate of ${z1}${z2} is not ${z1}${zb2}.`,
    say: null,
  },
  // pp. 349, 351
  {
    topic: 1,
    kind: 'shortcut',
    q: 'If (2 + <i>i</i>)(2 + 2<i>i</i>)(2 + 3<i>i</i>) ⋯ (2 + <i>ni</i>) = <i>x</i> + <i>iy</i>, find 5 · 8 · 13 ⋯ (4 + <i>n</i><sup>2</sup>). The fast way?',
    a: `Take | · | across the factors instead of multiplying out (|∏ <i>z</i><sub><i>k</i></sub>| = ∏ |<i>z</i><sub><i>k</i></sub>|): |2 + <i>ki</i>| = √(4 + <i>k</i><sup>2</sup>), so ∏<sub><i>k</i>=1</sub><sup><i>n</i></sup> √(4 + <i>k</i><sup>2</sup>) = |<i>x</i> + <i>iy</i>| = √(<i>x</i><sup>2</sup> + <i>y</i><sup>2</sup>). Squaring, 5 · 8 · 13 ⋯ (4 + <i>n</i><sup>2</sup>) = <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup>. For moduli of products, powers and quotients, go factor by factor`,
    why: `<i>a</i> + <i>ib</i> = ${fr('<i>c</i> + <i>i</i>', '<i>c</i> − <i>i</i>')} (<i>c</i> ∈ ℝ): taking the modulus, |<i>a</i> + <i>ib</i>| = ${fr('√(<i>c</i><sup>2</sup> + 1)', '√(<i>c</i><sup>2</sup> + 1)')} = 1, so <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> = 1.`,
    say: null,
  },

  // ── Topic 03 · The Argand Plane and Polar Representation ──
  // pp. 352–354, 358
  {
    topic: 2,
    kind: 'remember',
    q: `What is the argument of ${z}, and what is its principal value?`,
    a: `In the Argand plane ${z} = <i>x</i> + <i>iy</i> is the point (<i>x</i>, <i>y</i>), or the vector <i>OP⃗</i>; the horizontal axis is real, the vertical imaginary, and |${z}| is the distance of <i>P</i> from the origin. If <i>OP⃗</i> makes angle <i>θ</i> with the positive real axis, <i>θ</i> is an argument of ${z}, with tan <i>θ</i> = ${fr('<i>y</i>', '<i>x</i>')}. The argument is many-valued: if <i>θ</i> works, so does <i>θ</i> + 2<i>n</i>π, <i>n</i> ∈ ℤ. The principal value arg ${z} is the unique <i>θ</i> with −π < <i>θ</i> ≤ π; a value outside this range is not the principal argument. arg(0) is undefined: the origin has a modulus but no direction`,
    why: `Axis cases: arg ${z} = 0 for a positive real, π for a negative real, ${PI2} for a purely imaginary number with <i>y</i> > 0 and −${PI2} with <i>y</i> < 0.`,
    say: 'Modulus = distance, argument = bearing.',
  },
  // pp. 353, 355–356, 358
  {
    topic: 2,
    kind: 'remember',
    q: 'How is the principal argument placed by quadrant?',
    a: `Take the acute reference angle <i>α</i> = tan<sup>−1</sup>|${fr('<i>y</i>', '<i>x</i>')}|. Then Q I: <i>α</i>; Q II: π − <i>α</i>; Q III: −(π − <i>α</i>) = <i>α</i> − π; Q IV: −<i>α</i>. A calculator’s tan<sup>−1</sup>(${fr('<i>y</i>', '<i>x</i>')}) returns an angle in (−${PI2}, ${PI2}) only, so you must correct by quadrant. The method: <i>r</i> = √(<i>x</i><sup>2</sup> + <i>y</i><sup>2</sup>), then <i>α</i>, then the quadrant from the table, then ${z} = <i>r</i>(cos <i>θ</i> + ${i} sin <i>θ</i>); the quadrant step is where most marks are lost`,
    why: `±1 ± ${i}√3 all have <i>r</i> = 2 and <i>α</i> = ${fr('π', '3')}: the arguments of 1 + ${i}√3, −1 + ${i}√3, −1 − ${i}√3 and 1 − ${i}√3 are ${fr('π', '3')}, ${fr('2π', '3')}, −${fr('2π', '3')} and −${fr('π', '3')}.`,
    say: null,
  },
  // pp. 354–355, 358
  {
    topic: 2,
    kind: 'remember',
    q: 'What is the polar form, and what happens to moduli and arguments when you multiply?',
    a: `With <i>r</i> = |${z}| and <i>θ</i> = arg ${z}, ${z} = <i>r</i>(cos <i>θ</i> + ${i} sin <i>θ</i>) = <i>r</i> cis <i>θ</i>, where <i>x</i> = <i>r</i> cos <i>θ</i>, <i>y</i> = <i>r</i> sin <i>θ</i>; every ${z} ≠ 0 has one. By the angle-sum identities, ${z1}${z2} = <i>r</i><sub>1</sub><i>r</i><sub>2</sub>(cos(<i>θ</i><sub>1</sub> + <i>θ</i><sub>2</sub>) + ${i} sin(<i>θ</i><sub>1</sub> + <i>θ</i><sub>2</sub>)): moduli multiply and arguments add, so multiplication is rotation plus scaling. Hence arg(${z1}${z2}) = arg ${z1} + arg ${z2}, arg(${fr(z1, z2)}) = arg ${z1} − arg ${z2} and arg(${zb}) = −arg ${z}, equalities that hold up to multiples of 2π. Repeated, it is De Moivre’s theorem: (cos <i>θ</i> + ${i} sin <i>θ</i>)<sup><i>n</i></sup> = cos <i>nθ</i> + ${i} sin <i>nθ</i> for every integer <i>n</i>, so ${z}<sup><i>n</i></sup> = <i>r</i><sup><i>n</i></sup>(cos <i>nθ</i> + ${i} sin <i>nθ</i>)`,
    why: `${z} = −√3 + ${i} = 2(cos ${fr('5π', '6')} + ${i} sin ${fr('5π', '6')}), so ${z}<sup>6</sup> = 64(cos 5π + ${i} sin 5π) = −64.`,
    say: 'Multiplication is rotation.',
  },
  // pp. 355, 357–358
  {
    topic: 2,
    kind: 'mixup',
    q: `In polar form, which is ${zb} and which is ${fr('1', z)}, and is <i>r</i>(cos <i>θ</i> − ${i} sin <i>θ</i>) polar form?`,
    a: `${zb} = <i>r</i>(cos <i>θ</i> − ${i} sin <i>θ</i>) = <i>r</i>(cos(−<i>θ</i>) + ${i} sin(−<i>θ</i>)): same modulus, negated argument. ${fr('1', z)} = ${fr('1', '<i>r</i>')}(cos(−<i>θ</i>) + ${i} sin(−<i>θ</i>)). ${fr('1', '<i>r</i>')}(cos <i>θ</i> + ${i} sin <i>θ</i>) is ${fr('1', zb)}, the conjugate’s reciprocal. The standard form uses a + between cosine and sine, so <i>r</i>(cos <i>θ</i> − ${i} sin <i>θ</i>) is not standard polar: rewrite it as <i>r</i>(cos(−<i>θ</i>) + ${i} sin(−<i>θ</i>))`,
    why: `The polar form of −1 is cos π + ${i} sin π; −(cos 0 + ${i} sin 0) is not in standard polar form.`,
    say: null,
  },
  // pp. 357–358
  {
    topic: 2,
    kind: 'mistake',
    q: `Is the principal argument of −1 − ${i} equal to ${fr('π', '4')}, or ${fr('5π', '4')}?`,
    a: `Neither: it is −${fr('3π', '4')}. The point is in Quadrant III with <i>α</i> = ${fr('π', '4')}, so arg = <i>α</i> − π = −${fr('3π', '4')}. ${fr('π', '4')} ignores the quadrant (the bare tan<sup>−1</sup>); ${fr('5π', '4')} lies outside (−π, π], so reduce it by subtracting 2π; ${fr('3π', '4')} is the Quadrant II answer. The other listed slips: assigning an argument to 0, and mixing degrees and radians inside De Moivre`,
    why: `−√3 − ${i}: <i>r</i> = 2, Quadrant III, <i>α</i> = ${fr('π', '6')}, so arg = −${fr('5π', '6')}.`,
    say: null,
  },
  // pp. 356–358
  {
    topic: 2,
    kind: 'shortcut',
    q: `Evaluate (1 + ${i})<sup>20</sup>. The fast way?`,
    a: `For any integer power, go to polar form and apply De Moivre: far faster than the binomial theorem. 1 + ${i} = √2(cos ${fr('π', '4')} + ${i} sin ${fr('π', '4')}), so (1 + ${i})<sup>20</sup> = (√2)<sup>20</sup>(cos 5π + ${i} sin 5π) = 1024(−1) = −1024. Memorise 1 + ${i} = √2∠${fr('π', '4')}, 1 + ${i}√3 = 2∠${fr('π', '3')} and √3 + ${i} = 2∠${fr('π', '6')}: they recur constantly. Sketch the point first, and the quadrant is obvious`,
    why: `(1 + ${i}√3)<sup>6</sup>: <i>r</i> = 2, arg = ${fr('π', '3')}, so 2<sup>6</sup>(cos 2π + ${i} sin 2π) = 64.`,
    say: null,
  },

  // ── Topic 04 · Quadratic Equations with Complex Roots ──
  // pp. 359, 361–362, 364
  {
    topic: 3,
    kind: 'remember',
    q: 'What does the discriminant say about the roots of <i>ax</i><sup>2</sup> + <i>bx</i> + <i>c</i> = 0 with real coefficients?',
    a: `<i>x</i> = ${fr(`−<i>b</i> ± √${D}`, '2<i>a</i>')}, ${D} = <i>b</i><sup>2</sup> − 4<i>ac</i> (<i>a</i> ≠ 0). With <i>a</i>, <i>b</i>, <i>c</i> ∈ ℝ: ${D} > 0, real and distinct; ${D} = 0, real and equal, <i>x</i> = ${VX}; ${D} < 0, a complex conjugate pair (non-real). For ${D} < 0, √${D} = ${i}√(4<i>ac</i> − <i>b</i><sup>2</sup>), so <i>x</i> = ${fr('−<i>b</i> ± <i>i</i>√(4<i>ac</i> − <i>b</i><sup>2</sup>)', '2<i>a</i>')}. Completing the square proves the formula, and since the square root is now defined for every value of <i>b</i><sup>2</sup> − 4<i>ac</i>, the formula that “failed” for a negative discriminant now succeeds for every quadratic. The table assumes real coefficients: if <i>a</i>, <i>b</i>, <i>c</i> are complex, the “${D} < 0” classification is meaningless`,
    why: `√2<i>x</i><sup>2</sup> + <i>x</i> + √2 = 0: ${D} = 1 − 8 = −7 < 0, so <i>x</i> = ${fr('−1 ± <i>i</i>√7', '2√2')}, a conjugate pair.`,
    say: 'The discriminant is a weather forecast.',
  },
  // pp. 359, 361–362, 364–365
  {
    topic: 3,
    kind: 'remember',
    q: 'What does the conjugate-root theorem say, and how do you build a real quadratic from one complex root?',
    a: `If a quadratic (indeed any polynomial) has real coefficients and <i>p</i> + <i>iq</i> (<i>q</i> ≠ 0) is a root, then <i>p</i> − <i>iq</i> is also a root. Proof: conjugate the whole equation; since <i>a</i>${B} = <i>a</i> and so on, ${zb} satisfies it too, and that step is exactly where real coefficients are required. With roots <i>α</i>, <i>β</i> of <i>ax</i><sup>2</sup> + <i>bx</i> + <i>c</i> = 0: <i>α</i> + <i>β</i> = ${SUM}, <i>αβ</i> = ${PROD} (mind the minus sign on the sum), and the quadratic with given roots is <i>x</i><sup>2</sup> − (<i>α</i> + <i>β</i>)<i>x</i> + <i>αβ</i> = 0. From a root <i>p</i> + <i>iq</i>: sum 2<i>p</i>, product <i>p</i><sup>2</sup> + <i>q</i><sup>2</sup>, so <i>x</i><sup>2</sup> − 2<i>px</i> + (<i>p</i><sup>2</sup> + <i>q</i><sup>2</sup>) = 0`,
    why: `One root 2 − 3${i}: the other is 2 + 3${i}, sum 4, product 4 + 9 = 13, so <i>x</i><sup>2</sup> − 4<i>x</i> + 13 = 0.`,
    say: 'Complex roots travel as mirror-image pairs, but only with real coefficients.',
  },
  // pp. 361–362, 364–365
  {
    topic: 3,
    kind: 'remember',
    q: 'How do you find the square root of <i>a</i> + <i>ib</i>?',
    a: `Set √(<i>a</i> + <i>ib</i>) = <i>x</i> + <i>iy</i>, square and equate parts: <i>x</i><sup>2</sup> − <i>y</i><sup>2</sup> = <i>a</i> and 2<i>xy</i> = <i>b</i>. With |${z}| = √(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>), <i>x</i><sup>2</sup> = ${fr(`|${z}| + <i>a</i>`, '2')} and <i>y</i><sup>2</sup> = ${fr(`|${z}| − <i>a</i>`, '2')}, with the sign of <i>xy</i> matching the sign of <i>b</i>. For <i>a</i> + <i>ib</i> ≠ 0 the two square roots are ±(<i>x</i> + <i>iy</i>). This method is what makes the quadratic formula usable when ${D} is complex`,
    why: `√(−15 − 8${i}): |${z}| = 17, <i>x</i><sup>2</sup> = ${fr('17 − 15', '2')} = 1, <i>y</i><sup>2</sup> = ${fr('17 + 15', '2')} = 16 and <i>xy</i> < 0, so the roots are ±(1 − 4${i}).`,
    say: null,
  },
  // pp. 359, 361, 363–364
  {
    topic: 3,
    kind: 'mixup',
    q: 'Real coefficients or complex coefficients: when must the two roots be conjugates?',
    a: `Only with real coefficients. With complex coefficients the conjugate-root theorem does not apply and the roots need not be conjugates. The quadratic formula still works there: you just need √${D} of a complex ${D}, by the <i>x</i><sup>2</sup> − <i>y</i><sup>2</sup> = <i>a</i>, 2<i>xy</i> = <i>b</i> method`,
    why: `<i>x</i><sup>2</sup> − (3 + ${i})<i>x</i> + (2 + ${i}) = 0: ${D} = 2${i}, √(2${i}) = ±(1 + ${i}), and the roots 2 + ${i} and 1 are not conjugates (sum 3 + ${i}, product 2 + ${i}).`,
    say: null,
  },
  // p. 364
  {
    topic: 3,
    kind: 'mistake',
    q: `A quadratic with real coefficients has the root 3 + 4${i}. Is its other root −3 − 4${i}?`,
    a: `No: 3 − 4${i}, by the conjugate-root theorem; −3 − 4${i} negates instead of conjugating. The other listed slips: misreading the sign of ${D}, or declaring “no roots” when ${D} < 0 (over ℂ there are two); forgetting √${D} = ${i}√|${D}| when ${D} < 0; dropping one square root of a complex number or getting the sign branch wrong (sgn(<i>xy</i>) = sgn(<i>b</i>)); and a sign error in Vieta’s sum, <i>α</i> + <i>β</i> = ${SUM}, not ${fr('<i>b</i>', '<i>a</i>')}`,
    why: `For <i>x</i><sup>2</sup> + <i>px</i> + <i>q</i> = 0, <i>α</i> + <i>β</i> = −<i>p</i>; answering <i>p</i> drops the sign.`,
    say: null,
  },
  // pp. 363–364
  {
    topic: 3,
    kind: 'shortcut',
    q: 'Solve <i>x</i><sup>2</sup> − 2<i>x</i> + 5 = 0 with the least work.',
    a: `Check ${D} first: it tells you the root type before any computation. ${D} = 4 − 20 = −16 < 0, so the roots are a conjugate pair, <i>x</i> = ${fr('2 ± 4<i>i</i>', '2')} = 1 ± 2${i}. With real coefficients you only ever need to find one complex root; the other is its conjugate`,
    why: `<i>x</i><sup>2</sup> + 2<i>x</i> + 5 = 0: <i>α</i> + <i>β</i> = −2, <i>αβ</i> = 5, and the roots −1 ± 2${i} are a conjugate pair because the coefficients are real.`,
    say: null,
  },

  // ── Topic 05 · Euler Form, De Moivre’s Theorem & Roots of a Complex Number ──
  // pp. 366, 368–371
  {
    topic: 4,
    kind: 'remember',
    q: 'What is Euler’s formula, and what does it turn multiplication into?',
    a: `<i>e</i><sup><i>iθ</i></sup> = cos <i>θ</i> + ${i} sin <i>θ</i>, so ${z} = <i>re</i><sup><i>iθ</i></sup> (<i>r</i> = |${z}|, <i>θ</i> = arg ${z}); <i>e</i><sup><i>iθ</i></sup> is the arrow of length 1 pointing at angle <i>θ</i>. Substituting <i>iθ</i> into the series for <i>e</i><sup><i>x</i></sup> and splitting even and odd powers gives it. Multiplying two unit arrows adds the angles, now literally the exponent rule, and dividing subtracts them; the conjugate of <i>re</i><sup><i>iθ</i></sup> is <i>re</i><sup>−<i>iθ</i></sup>, and ${fr('1', '<i>re</i><sup><i>iθ</i></sup>')} = ${fr('1', '<i>r</i>')}<i>e</i><sup>−<i>iθ</i></sup>. Inverse Euler: cos <i>θ</i> = ${fr('<i>e</i><sup><i>iθ</i></sup> + <i>e</i><sup>−<i>iθ</i></sup>', '2')}, sin <i>θ</i> = ${fr('<i>e</i><sup><i>iθ</i></sup> − <i>e</i><sup>−<i>iθ</i></sup>', '2<i>i</i>')}. De Moivre becomes ${z}<sup><i>n</i></sup> = <i>r</i><sup><i>n</i></sup><i>e</i><sup><i>inθ</i></sup> for integer <i>n</i>`,
    why: `<i>e</i><sup><i>i</i>π</sup> = cos π + ${i} sin π = −1 (Euler’s identity).`,
    say: 'Euler’s formula packages polar form into one symbol.',
  },
  // pp. 366, 368–371
  {
    topic: 4,
    kind: 'remember',
    q: 'How many <i>n</i>th roots does a non-zero <i>z</i> = <i>re</i><sup><i>iθ</i></sup> have, and where do they lie?',
    a: `Exactly <i>n</i>: <i>w</i><sub><i>k</i></sub> = <i>r</i><sup>1/<i>n</i></sup><i>e</i><sup><i>i</i>(<i>θ</i>+2<i>k</i>π)/<i>n</i></sup> = <i>r</i><sup>1/<i>n</i></sup>[cos ${fr('<i>θ</i> + 2<i>k</i>π', '<i>n</i>')} + ${i} sin ${fr('<i>θ</i> + 2<i>k</i>π', '<i>n</i>')}], <i>k</i> = 0, 1, …, <i>n</i> − 1. Writing <i>w</i> = <i>ρe</i><sup><i>iϕ</i></sup>, <i>w</i><sup><i>n</i></sup> = <i>re</i><sup><i>iθ</i></sup> forces <i>ρ</i> = <i>r</i><sup>1/<i>n</i></sup> and <i>nϕ</i> = <i>θ</i> + 2<i>k</i>π, since arguments are equal only up to 2π; <i>k</i> = <i>n</i> repeats <i>k</i> = 0. The roots lie on a circle of radius <i>r</i><sup>1/<i>n</i></sup>, equally spaced by ${fr('2π', '<i>n</i>')}: the vertices of a regular <i>n</i>-gon. Method: Euler form, <i>ρ</i> = <i>r</i><sup>1/<i>n</i></sup>, list the <i>n</i> angles, convert back if <i>a</i> + <i>ib</i> form is required`,
    why: `Cube roots of 8${i} = 8<i>e</i><sup><i>i</i>π/2</sup>: <i>ρ</i> = 2 and angles ${fr('π', '6')}, ${fr('5π', '6')}, ${fr('3π', '2')}, giving √3 + ${i}, −√3 + ${i} and −2${i}.`,
    say: 'Roots live on a circle, equally spaced.',
  },
  // pp. 368–371
  {
    topic: 4,
    kind: 'remember',
    q: 'What are the <i>n</i>th roots of unity and the cube roots of unity, and what do they sum to?',
    a: `Setting ${z} = 1: <i>α</i><sub><i>k</i></sub> = <i>e</i><sup>2π<i>ik</i>/<i>n</i></sup> = cos ${fr('2<i>k</i>π', '<i>n</i>')} + ${i} sin ${fr('2<i>k</i>π', '<i>n</i>')}, <i>k</i> = 0, …, <i>n</i> − 1, that is 1, <i>α</i>, <i>α</i><sup>2</sup>, …, <i>α</i><sup><i>n</i>−1</sup> with <i>α</i> = <i>e</i><sup>2π<i>i</i>/<i>n</i></sup>. For <i>n</i> ≥ 2 they sum to 0 (a geometric series, since <i>α</i><sup><i>n</i></sup> = 1 and <i>α</i> ≠ 1), and their product is (−1)<sup><i>n</i>−1</sup>. Cube roots: 1, ${om}, ${om}<sup>2</sup> with ${om} = −${fr('1', '2')} + ${fr('√3', '2')}${i}, ${om}<sup>2</sup> = ${om}${B} = −${fr('1', '2')} − ${fr('√3', '2')}${i}, ${om}<sup>3</sup> = 1, 1 + ${om} + ${om}<sup>2</sup> = 0 and ${om}<sup><i>n</i></sup> = ${om}<sup><i>n</i> mod 3</sup>. They factor <i>a</i><sup>3</sup> + <i>b</i><sup>3</sup> + <i>c</i><sup>3</sup> − 3<i>abc</i> = (<i>a</i> + <i>b</i> + <i>c</i>)(<i>a</i> + <i>b</i>${om} + <i>c</i>${om}<sup>2</sup>)(<i>a</i> + <i>b</i>${om}<sup>2</sup> + <i>c</i>${om})`,
    why: `The four 4th roots of unity are <i>e</i><sup><i>ik</i>π/2</sup>: 1, ${i}, −1, −${i}, with sum 0.`,
    say: null,
  },
  // pp. 368, 370–371
  {
    topic: 4,
    kind: 'mixup',
    q: `Is ${om}<sup>2</sup> unrelated to ${om}, or its conjugate?`,
    a: `Its conjugate: ${om}<sup>2</sup> = ${om}${B}, so ${om} and ${om}<sup>2</sup> are a conjugate pair; forgetting this is a listed pitfall. Two instant simplifiers follow from 1 + ${om} + ${om}<sup>2</sup> = 0: 1 + ${om} = −${om}<sup>2</sup> and 1 + ${om}<sup>2</sup> = −${om}. Also do not confuse <i>e</i><sup><i>iθ</i></sup> with <i>e</i><sup><i>θ</i></sup>, or mix degrees and radians in the exponent`,
    why: `(1 + ${om})<sup>3</sup> = (−${om}<sup>2</sup>)<sup>3</sup> = −${om}<sup>6</sup> = −1, and (1 + ${om}<sup>2</sup>)<sup>3</sup> = (−${om})<sup>3</sup> = −1.`,
    say: null,
  },
  // pp. 366, 370
  {
    topic: 4,
    kind: 'mistake',
    q: 'Are the cube roots of 8 just 2?',
    a: `No: 2, 2${om}, 2${om}<sup>2</sup>. An <i>n</i>th root of a non-zero number has <i>n</i> values, <i>k</i> = 0, …, <i>n</i> − 1: a non-zero complex number has exactly 6 distinct 6th roots. Reporting a single root, or the wrong number, is the listed trap. The partner slip is mishandling ${om} powers: reduce the exponent mod 3`,
    why: `${om}<sup>2024</sup> (${om} a non-real cube root of unity): 2024 ≡ 2 (mod 3), so ${om}<sup>2024</sup> = ${om}<sup>2</sup>, not ${om} (which takes 2024 ≡ 1).`,
    say: null,
  },
  // pp. 369–371
  {
    topic: 4,
    kind: 'shortcut',
    q: `Evaluate (1 + ${om})(1 + ${om}<sup>2</sup>)(1 + ${om}<sup>4</sup>)(1 + ${om}<sup>8</sup>). The fast way?`,
    a: `Reduce exponents mod 3: ${om}<sup>4</sup> = ${om}, ${om}<sup>8</sup> = ${om}<sup>2</sup>, so the product is [(1 + ${om})(1 + ${om}<sup>2</sup>)]<sup>2</sup>. And (1 + ${om})(1 + ${om}<sup>2</sup>) = 1 + ${om} + ${om}<sup>2</sup> + ${om}<sup>3</sup> = 0 + 1 = 1, so the value is 1. The <i>n</i> roots of unity sum to 0 and form a regular <i>n</i>-gon: use symmetry to kill sums fast. For powers and roots, go to Euler form first: powers multiply the angle, roots divide it`,
    why: `(1 + ${i}√3)<sup>9</sup> = (2<i>e</i><sup><i>i</i>π/3</sup>)<sup>9</sup> = 512<i>e</i><sup><i>i</i>3π</sup> = 512(cos 3π + ${i} sin 3π) = −512.`,
    say: null,
  },

  // ── Topic 06 · Geometry of Complex Numbers (Argand Geometry & Loci) ──
  // pp. 372, 374–375, 377
  {
    topic: 5,
    kind: 'remember',
    q: 'How do distance, division of a segment and rotation look in complex numbers?',
    a: `${z} is a position vector: ${z2} − ${z1} is the displacement from ${z1} to ${z2}, and |${z1} − ${z2}| the distance. Midpoint ${fr(`${z1} + ${z2}`, '2')}; the point dividing ${z1}${z2} in ratio <i>m</i> ∶ <i>n</i> is ${fr(`<i>n</i>${z1} + <i>m</i>${z2}`, '<i>m</i> + <i>n</i>')}; centroid ${fr(`${z1} + ${z2} + ${z3}`, '3')}. Rotation theorem: ${fr(`${z2} − ${z1}`, `${z3} − ${z1}`)} = |${fr(`${z2} − ${z1}`, `${z3} − ${z1}`)}|<i>e</i><sup><i>iθ</i></sup>, where <i>θ</i> = arg ${fr(`${z2} − ${z1}`, `${z3} − ${z1}`)} is measured at the common vertex ${z1}, from ${z1}<i>z⃗</i><sub>3</sub> to ${z1}<i>z⃗</i><sub>2</sub>; reversing the ratio reverses the angle’s sign. To rotate <i>AB⃗</i> about <i>A</i> by <i>θ</i>, multiply the displacement <i>z</i><sub><i>B</i></sub> − <i>z</i><sub><i>A</i></sub> by <i>e</i><sup><i>iθ</i></sup>; multiplying by ${i} is +90°`,
    why: `Rotating 2 + ${i} about the origin by 90° anticlockwise: (2 + ${i})${i} = −1 + 2${i}.`,
    say: `Rotation = multiply by <i>e</i><sup><i>iθ</i></sup>.`,
  },
  // pp. 372, 374–375, 377
  {
    topic: 5,
    kind: 'remember',
    q: 'What are the complex equations of a line, a perpendicular bisector and a circle?',
    a: `Line through ${z1}, ${z2}: ${z} is on it iff ${fr(`${z} − ${z1}`, `${z2} − ${z1}`)} is real; general form <i>a</i>${B}${z} + <i>a</i>${zb} + <i>b</i> = 0 (<i>a</i> ∈ ℂ, <i>a</i> ≠ 0, <i>b</i> ∈ ℝ). ${z1}, ${z2}, ${z3} are collinear iff ${fr(`${z3} − ${z1}`, `${z2} − ${z1}`)} ∈ ℝ (arg = 0 or π). |${z} − ${z1}| = |${z} − ${z2}| is the perpendicular bisector of the segment joining ${z1}, ${z2}. Circle: |${z} − <i>z</i><sub>0</sub>| = <i>r</i> (centre <i>z</i><sub>0</sub>, radius <i>r</i>), or ${zzb} + <i>a</i>${B}${z} + <i>a</i>${zb} + <i>b</i> = 0 (<i>a</i> ∈ ℂ, <i>b</i> ∈ ℝ, |<i>a</i>|<sup>2</sup> ≥ <i>b</i>), with centre −<i>a</i> and radius √(|<i>a</i>|<sup>2</sup> − <i>b</i>). Four points are concyclic (or collinear) iff the cross-ratio ${fr(`(${z1} − ${z3})(${z2} − <i>z</i><sub>4</sub>)`, `(${z1} − <i>z</i><sub>4</sub>)(${z2} − ${z3})`)} is real. For loci, translate the words into a ${z}-equation and simplify with |<i>w</i>|<sup>2</sup> = <i>ww</i>${B}`,
    why: `|${z} − 2| = |${z} + 2| is equidistant from 2 and −2: the imaginary axis, Re(${z}) = 0. |${z} − 3| = 2 is the circle with centre 3, radius 2.`,
    say: 'A complex number is a position vector.',
  },
  // pp. 372, 374–378
  {
    topic: 5,
    kind: 'remember',
    q: `What do the loci ${fr(`|${z} − ${z1}|`, `|${z} − ${z2}|`)} = <i>k</i> and arg ${fr(`${z} − ${z1}`, `${z} − ${z2}`)} = <i>α</i> represent?`,
    a: `For <i>k</i> > 0, <i>k</i> ≠ 1, the ratio locus is a circle, the Apollonius circle: squaring and expanding with |<i>w</i>|<sup>2</sup> = <i>ww</i>${B} leaves a ${zzb} term with coefficient 1 − <i>k</i><sup>2</sup>, the circle form. For <i>k</i> = 1 that term vanishes and the locus is the perpendicular bisector, a straight line, not a circle. A fixed argument <i>α</i> (0 < |<i>α</i>| < π) gives an arc of a circle through ${z1}, ${z2}, not the whole circle; <i>α</i> = ${PI2} gives a semicircle on the diameter ${z1}${z2} (endpoints excluded), and the full circle on that diameter is where the ratio is purely imaginary (arg = ±${PI2}). Equilateral triangle (${z1}, ${z2}, ${z3} not all equal): ${z1}<sup>2</sup> + ${z2}<sup>2</sup> + ${z3}<sup>2</sup> = ${z1}${z2} + ${z2}${z3} + ${z3}${z1}, equivalently ${fr('1', `${z1} − ${z2}`)} + ${fr('1', `${z2} − ${z3}`)} + ${fr('1', `${z3} − ${z1}`)} = 0`,
    why: `${fr(`|${z} − 1|`, `|${z} + 1|`)} = 2 (<i>k</i> = 2 ≠ 1) is a circle with centre −${fr('5', '3')} and radius ${fr('4', '3')}.`,
    say: null,
  },
  // pp. 375–377
  {
    topic: 5,
    kind: 'mixup',
    q: 'Multiply by <i>e</i><sup><i>iθ</i></sup> or by <i>e</i><sup>−<i>iθ</i></sup>: which turns anticlockwise, and does the order of the ratio matter?',
    a: `<i>e</i><sup><i>iθ</i></sup> is anticlockwise, <i>e</i><sup>−<i>iθ</i></sup> clockwise; the angle sits at the common vertex and the ratio order fixes its sign. In a square <i>ABCD</i> labelled anticlockwise, <i>AB⃗</i> turns +90° to <i>BC⃗</i>; equivalently <i>BA⃗</i> turns −90° about <i>B</i>: <i>z</i><sub><i>C</i></sub> − <i>z</i><sub><i>B</i></sub> = (<i>z</i><sub><i>A</i></sub> − <i>z</i><sub><i>B</i></sub>)<i>e</i><sup>−<i>i</i>π/2</sup> = (<i>z</i><sub><i>A</i></sub> − <i>z</i><sub><i>B</i></sub>)(−${i})`,
    why: `<i>A</i> = 1 + 2${i}, <i>B</i> = 3 + ${i}: <i>z</i><sub><i>C</i></sub> − <i>z</i><sub><i>B</i></sub> = (−2 + ${i})(−${i}) = 1 + 2${i}, so <i>C</i> = 4 + 3${i}.`,
    say: null,
  },
  // pp. 372, 376–377
  {
    topic: 5,
    kind: 'mistake',
    q: `Is ${fr(`|${z} − 1|`, `|${z} − 3|`)} = 1 a circle?`,
    a: `No: <i>k</i> = 1 gives the perpendicular bisector of the segment joining 1 and 3, a line. Calling the <i>k</i> = 1 Apollonius locus a circle is the listed trap; so is treating an arg-locus as a full circle, when a fixed argument (not 0 or π) gives only an arc. The third is getting the rotation direction wrong, or the ratio the wrong way round`,
    why: `arg ${fr(`${z} − 1`, `${z} + 1`)} = ${PI2}: the semicircle of the unit circle with Im(${z}) > 0, endpoints excluded, not the whole circle.`,
    say: null,
  },
  // pp. 375–377
  {
    topic: 5,
    kind: 'shortcut',
    q: `${z} lies on |${z} − 3 − 4${i}| = 2. The greatest and least |${z}|, fast?`,
    a: `If ${z} lies on |${z} − <i>z</i><sub>0</sub>| = <i>r</i>, then ||<i>z</i><sub>0</sub>| − <i>r</i>| ≤ |${z}| ≤ |<i>z</i><sub>0</sub>| + <i>r</i>: the nearest and farthest points lie along the line through <i>O</i> and <i>z</i><sub>0</sub>. Here <i>z</i><sub>0</sub> = 3 + 4${i}, |<i>z</i><sub>0</sub>| = 5 and <i>r</i> = 2, so |${z}|<sub>max</sub> = 7 and |${z}|<sub>min</sub> = 3. For any vertex-finding problem, reach for the rotation theorem: displacement × <i>e</i><sup><i>iθ</i></sup>`,
    why: `On |${z} − 5| = 3: |<i>z</i><sub>0</sub>| = 5 and <i>r</i> = 3, so max |${z}| = 8 and min |${z}| = 2.`,
    say: null,
  },

  // ── Topic 07 · Real Quadratic Equations: Roots, Signs and Location ──
  // pp. 380, 386–387, 395
  {
    topic: 6,
    kind: 'remember',
    q: 'What is the vertex form of a real quadratic, and what does it decide?',
    a: `For <i>f</i>(<i>x</i>) = <i>ax</i><sup>2</sup> + <i>bx</i> + <i>c</i> (<i>a</i>, <i>b</i>, <i>c</i> ∈ ℝ, <i>a</i> ≠ 0), completing the square gives <i>f</i>(<i>x</i>) = <i>a</i>(<i>x</i> + ${fr('<i>b</i>', '2<i>a</i>')})<sup>2</sup> − ${fr(D, '4<i>a</i>')}: the vertex is at <i>x</i> = ${VX} (the axis of symmetry), with value ${VY} = ${fr('4<i>ac</i> − <i>b</i><sup>2</sup>', '4<i>a</i>')}. If <i>a</i> > 0, <i>f</i> attains a minimum ${VY} there and has no maximum, range [${VY}, ∞); if <i>a</i> < 0, a maximum ${VY} and no minimum, range (−∞, ${VY}]. If a parameter can make <i>a</i> = 0, that case is not covered by any of these formulas and must be examined separately as a linear expression`,
    why: `<i>f</i>(<i>x</i>) = 2<i>x</i><sup>2</sup> − 8<i>x</i> + 11: ${D} = −24, minimum −${fr('−24', '8')} = 3 at <i>x</i> = 2, so <i>f</i>(<i>x</i>) = 2(<i>x</i> − 2)<sup>2</sup> + 3 and the range is [3, ∞).`,
    say: 'Stop solving. Start looking at the graph.',
  },
  // pp. 379–381, 387, 395
  {
    topic: 6,
    kind: 'remember',
    q: 'When does a real quadratic keep one sign for every real <i>x</i>?',
    a: `<i>f</i>(<i>x</i>) has the same sign as <i>a</i> for every real <i>x</i> if and only if ${D} < 0: with no crossing of the <i>x</i>-axis it cannot change sign, so it keeps the sign it has far out to the right, the sign of <i>a</i>. The four exam conditions, each an “if and only if”: <i>f</i> > 0 ∀<i>x</i> ⟺ <i>a</i> > 0 and ${D} < 0; <i>f</i> ≥ 0 ∀<i>x</i> ⟺ <i>a</i> > 0 and ${D} ≤ 0; <i>f</i> < 0 ∀<i>x</i> ⟺ <i>a</i> < 0 and ${D} < 0; <i>f</i> ≤ 0 ∀<i>x</i> ⟺ <i>a</i> < 0 and ${D} ≤ 0. With ${D} = 0, <i>f</i> has the sign of <i>a</i> everywhere except at <i>x</i> = ${VX}, where it is zero; with ${D} > 0 it opposes the sign of <i>a</i> strictly between the roots and agrees with it strictly outside them`,
    why: `<i>x</i><sup>2</sup> − 4<i>x</i> + 7 is positive for every <i>x</i> not because of the +7 but because ${D} = 16 − 28 = −12 < 0 and <i>a</i> = 1 > 0.`,
    say: `A quadratic with ${D} < 0 takes the sign of <i>a</i> at every real <i>x</i>, with no exceptions.`,
  },
  // pp. 381, 383, 395
  {
    topic: 6,
    kind: 'remember',
    q: 'What is the master identity, and what are the conditions for both roots greater than <i>k</i>?',
    a: `With roots <i>α</i>, <i>β</i>, <i>f</i>(<i>x</i>) = <i>a</i>(<i>x</i> − <i>α</i>)(<i>x</i> − <i>β</i>), so <i>af</i>(<i>k</i>) = <i>a</i><sup>2</sup>(<i>k</i> − <i>α</i>)(<i>k</i> − <i>β</i>) for any real <i>k</i>. Since <i>a</i><sup>2</sup> > 0, when the roots are real: <i>af</i>(<i>k</i>) > 0 ⟺ <i>k</i> lies strictly outside the closed interval joining the roots; <i>af</i>(<i>k</i>) < 0 ⟺ strictly between them; <i>af</i>(<i>k</i>) = 0 ⟺ <i>k</i> is a root. Both roots > <i>k</i>: ${D} ≥ 0 and <i>af</i>(<i>k</i>) > 0 and ${VX} > <i>k</i>. Both roots < <i>k</i>: the same with ${VX} < <i>k</i>. For the ≥ and ≤ versions, relax <i>af</i>(<i>k</i>) > 0 to <i>af</i>(<i>k</i>) ≥ 0 and the vertex inequality to a non-strict one. It is ${D} ≥ 0, not ${D} > 0, because a repeated root greater than <i>k</i> is allowed`,
    why: `Both roots of <i>x</i><sup>2</sup> − 6<i>x</i> + <i>k</i> = 0 greater than 2: ${D} ≥ 0 gives <i>k</i> ≤ 9, <i>af</i>(2) > 0 gives <i>k</i> > 8, and the vertex 3 > 2 is automatic, so 8 < <i>k</i> ≤ 9.`,
    say: null,
  },
  // pp. 383, 395
  {
    topic: 6,
    kind: 'remember',
    q: 'What are the conditions for <i>k</i> between the roots, both roots in (<i>k</i><sub>1</sub>, <i>k</i><sub>2</sub>), and exactly one root there?',
    a: `<i>α</i> < <i>k</i> < <i>β</i>: <i>af</i>(<i>k</i>) < 0 alone; it already forces ${D} > 0, so writing ${D} > 0 alongside it is harmless but redundant. Both roots in (<i>k</i><sub>1</sub>, <i>k</i><sub>2</sub>): ${D} ≥ 0, <i>af</i>(<i>k</i><sub>1</sub>) > 0, <i>af</i>(<i>k</i><sub>2</sub>) > 0 and <i>k</i><sub>1</sub> < ${VX} < <i>k</i><sub>2</sub>. Exactly one root in (<i>k</i><sub>1</sub>, <i>k</i><sub>2</sub>): <i>f</i>(<i>k</i><sub>1</sub>)<i>f</i>(<i>k</i><sub>2</sub>) < 0 is sufficient, and the cases <i>f</i>(<i>k</i><sub>1</sub>) = 0 or <i>f</i>(<i>k</i><sub>2</sub>) = 0 must be tested separately. Roots straddling the interval, <i>α</i> < <i>k</i><sub>1</sub> < <i>k</i><sub>2</sub> < <i>β</i>: <i>af</i>(<i>k</i><sub>1</sub>) < 0 and <i>af</i>(<i>k</i><sub>2</sub>) < 0`,
    why: `2 strictly between the roots of <i>x</i><sup>2</sup> + <i>kx</i> + (<i>k</i><sup>2</sup> − 4) = 0: <i>f</i>(2) = <i>k</i>(<i>k</i> + 2) < 0, so <i>k</i> ∈ (−2, 0).`,
    say: null,
  },
  // pp. 383–385, 387, 395–396
  {
    topic: 6,
    kind: 'remember',
    q: 'When do two quadratics share one root, and when do they share both?',
    a: `For <i>a</i><sub>1</sub><i>x</i><sup>2</sup> + <i>b</i><sub>1</sub><i>x</i> + <i>c</i><sub>1</sub> = 0 and <i>a</i><sub>2</sub><i>x</i><sup>2</sup> + <i>b</i><sub>2</sub><i>x</i> + <i>c</i><sub>2</sub> = 0, provided <i>a</i><sub>1</sub><i>b</i><sub>2</sub> − <i>a</i><sub>2</sub><i>b</i><sub>1</sub> ≠ 0: they have a common root iff (<i>c</i><sub>1</sub><i>a</i><sub>2</sub> − <i>c</i><sub>2</sub><i>a</i><sub>1</sub>)<sup>2</sup> = (<i>a</i><sub>1</sub><i>b</i><sub>2</sub> − <i>a</i><sub>2</sub><i>b</i><sub>1</sub>)(<i>b</i><sub>1</sub><i>c</i><sub>2</sub> − <i>b</i><sub>2</sub><i>c</i><sub>1</sub>), and it is <i>α</i> = ${fr('<i>c</i><sub>1</sub><i>a</i><sub>2</sub> − <i>c</i><sub>2</sub><i>a</i><sub>1</sub>', '<i>a</i><sub>1</sub><i>b</i><sub>2</sub> − <i>a</i><sub>2</sub><i>b</i><sub>1</sub>')}. The proof treats <i>X</i> = <i>α</i><sup>2</sup> and <i>Y</i> = <i>α</i> as unknowns of a linear system, solves by Cramer’s rule and imposes <i>X</i> = <i>Y</i><sup>2</sup>. Both roots common iff the coefficient triples are proportional, ${fr('<i>a</i><sub>1</sub>', '<i>a</i><sub>2</sub>')} = ${fr('<i>b</i><sub>1</sub>', '<i>b</i><sub>2</sub>')} = ${fr('<i>c</i><sub>1</sub>', '<i>c</i><sub>2</sub>')}. If both have real coefficients and share a non-real root, they share both roots (the conjugate of the shared root is shared too), so their coefficients are proportional`,
    why: `<i>x</i><sup>2</sup> + 2<i>x</i> + 3 = 0 has ${D} = −8 < 0, so a real <i>ax</i><sup>2</sup> + <i>bx</i> + <i>c</i> = 0 (<i>a</i> ≠ 0) sharing one of its roots shares both: <i>a</i> ∶ <i>b</i> ∶ <i>c</i> = 1 ∶ 2 ∶ 3.`,
    say: null,
  },
  // pp. 385–386, 392, 396
  {
    topic: 6,
    kind: 'remember',
    q: 'With rational coefficients, when are the roots rational, and how do symmetric functions of the roots reduce?',
    a: `For <i>a</i>, <i>b</i>, <i>c</i> ∈ ℚ: ${D} > 0 and a perfect square of a rational gives real, distinct, rational roots; ${D} > 0 and not a perfect square gives irrational roots, a conjugate surd pair <i>p</i> ± √<i>q</i>; ${D} = 0 gives equal rational roots ${VX}; ${D} < 0 a non-real conjugate pair. The surd conjugate-root theorem is the complex one with “rational coefficients” replacing “real coefficients”. Symmetric functions go through the sum and product: <i>α</i><sup>2</sup> + <i>β</i><sup>2</sup> = (<i>α</i> + <i>β</i>)<sup>2</sup> − 2<i>αβ</i> = ${fr('<i>b</i><sup>2</sup> − 2<i>ac</i>', '<i>a</i><sup>2</sup>')}; (<i>α</i> − <i>β</i>)<sup>2</sup> = ${fr(D, '<i>a</i><sup>2</sup>')}, so |<i>α</i> − <i>β</i>| = ${fr(`√${D}`, '|<i>a</i>|')} (${D} ≥ 0), the bridge between the discriminant and the width of the root pair; <i>α</i><sup>3</sup> + <i>β</i><sup>3</sup> = ${fr('3<i>abc</i> − <i>b</i><sup>3</sup>', '<i>a</i><sup>3</sup>')}; ${fr('1', '<i>α</i>')} + ${fr('1', '<i>β</i>')} = −${fr('<i>b</i>', '<i>c</i>')} (<i>c</i> ≠ 0)`,
    why: `6<i>x</i><sup>2</sup> − 7<i>x</i> + 2 = 0 has ${D} = 1, a perfect square, so rational roots (${fr('2', '3')} and ${fr('1', '2')}); <i>x</i><sup>2</sup> − 4<i>x</i> + 2 = 0 has ${D} = 8, so the surd pair 2 ± √2.`,
    say: null,
  },
  // pp. 381, 383, 393–394
  {
    topic: 6,
    kind: 'mixup',
    q: `${D} ≥ 0, <i>af</i>(<i>k</i>) > 0 and the vertex condition: what does each one decide?`,
    a: `${D} ≥ 0 makes the roots real. If ${D} < 0 the roots are a conjugate pair <i>α</i>, <i>α</i>${B} and <i>af</i>(<i>k</i>) = <i>a</i><sup>2</sup>|<i>k</i> − <i>α</i>|<sup>2</sup> > 0 for every real <i>k</i>, so <i>af</i>(<i>k</i>) > 0 alone carries no information about position. ${D} ≥ 0 together with <i>af</i>(<i>k</i>) > 0 says only that <i>k</i> is outside the root pair, not on which side; the vertex condition ${VX} > <i>k</i> or ${VX} < <i>k</i> chooses the side. Each condition rules out a distinct unwanted configuration, so write all of them down`,
    why: `For both roots of <i>x</i><sup>2</sup> − 6<i>x</i> + <i>k</i> = 0 above 2, keeping only <i>f</i>(2) > 0 gives <i>k</i> > 8; but at <i>k</i> = 10, <i>f</i>(2) = 2 > 0 while ${D} = −4 < 0, so there are no real roots at all.`,
    say: null,
  },
  // pp. 390–391, 394
  {
    topic: 6,
    kind: 'mistake',
    q: 'Find all real <i>a</i> with <i>ax</i><sup>2</sup> + 4<i>x</i> + <i>a</i> > 0 for every real <i>x</i>. Is the answer |<i>a</i>| ≥ 2?',
    a: `No: <i>a</i> > 2. The one-line route “${D} ≤ 0, so <i>a</i><sup>2</sup> ≥ 4” loses the requirement <i>a</i> > 0 and turns a strict inequality into a non-strict one; and <i>a</i> = 0 makes the expression 4<i>x</i>, not a quadratic, which is negative for <i>x</i> < 0. Correctly: <i>a</i> > 0 and ${D} = 16 − 4<i>a</i><sup>2</sup> < 0, so <i>a</i> > 2. Using ${D} < 0 alone is the partner slip: it says the sign never changes, not which sign, so pair it with <i>a</i> > 0 for positivity or <i>a</i> < 0 for negativity. When the leading coefficient carries a parameter, split off the value that makes it 0 first`,
    why: `At <i>a</i> = −3 the expression is negative for every <i>x</i>; at <i>a</i> = 2 it is 2(<i>x</i> + 1)<sup>2</sup>, which is 0 at <i>x</i> = −1.`,
    say: null,
  },
  // pp. 387, 389–390, 394
  {
    topic: 6,
    kind: 'mistake',
    q: 'You eliminate <i>x</i><sup>2</sup> between two quadratics and get <i>x</i> = 1. Is 1 their common root?',
    a: `Only a candidate. Eliminating <i>x</i><sup>2</sup> (<i>a</i><sub>2</sub><i>f</i><sub>1</sub> − <i>a</i><sub>1</sub><i>f</i><sub>2</sub> = 0) gives a linear equation that any common root must satisfy, but it is a consequence, not a guarantee: substitute the candidate back into one of the original quadratics, every time. Check the proportional case first, the only way to have two common roots; and if one quadratic factorises, substitute its two roots into the other instead. With real coefficients and a non-real shared root, both roots are shared, so check the discriminant of the known quadratic before choosing your method`,
    why: `<i>x</i><sup>2</sup> + <i>kx</i> + 1 = 0 and <i>x</i><sup>2</sup> + <i>x</i> + <i>k</i> = 0: <i>k</i> = 1 makes them the same equation (both roots common); otherwise subtracting gives (<i>k</i> − 1)(<i>x</i> − 1) = 0, and substituting <i>x</i> = 1 back gives <i>k</i> = −2 (exactly one common root, 1).`,
    say: null,
  },
  // pp. 388, 392, 394–395
  {
    topic: 6,
    kind: 'mistake',
    q: 'Solving −<i>x</i><sup>2</sup> + 4<i>x</i> − 3 > 0: does it become <i>x</i><sup>2</sup> − 4<i>x</i> + 3 > 0?',
    a: `No: multiplying an inequality by −1 flips it, so <i>x</i><sup>2</sup> − 4<i>x</i> + 3 < 0, giving 1 < <i>x</i> < 3. In the sign scheme, <i>f</i> agrees with the sign of <i>a</i> on the two outer intervals and opposes it on the middle interval (<i>α</i>, <i>β</i>); if ${D} < 0 the answer is all of ℝ or the empty set. Endpoints: ≥ and ≤ include the roots, > and < exclude them, since <i>f</i>(<i>α</i>) = <i>f</i>(<i>β</i>) = 0`,
    why: `2<i>x</i><sup>2</sup> − 5<i>x</i> − 3 = (2<i>x</i> + 1)(<i>x</i> − 3) ≥ 0 with <i>a</i> > 0: <i>x</i> ∈ (−∞, −${fr('1', '2')}] ∪ [3, ∞).`,
    say: null,
  },
  // pp. 391–392, 395
  {
    topic: 6,
    kind: 'shortcut',
    q: 'For <i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> − 2<i>mx</i> + (<i>m</i><sup>2</sup> − 1), find all <i>m</i> with exactly one root in (−2, 4). What does the product test miss?',
    a: `Start with <i>f</i>(−2)<i>f</i>(4) < 0: (<i>m</i> + 1)(<i>m</i> + 3)(<i>m</i> − 3)(<i>m</i> − 5) < 0 gives (−3, −1) ∪ (3, 5). The test is blind to the values that make <i>f</i>(<i>k</i><sub>1</sub>) = 0 or <i>f</i>(<i>k</i><sub>2</sub>) = 0, so test those at once: <i>m</i> = −1 (roots −2, 0) and <i>m</i> = 3 (roots 2, 4) are included, <i>m</i> = −3 and <i>m</i> = 5 are not. Answer (−3, −1] ∪ [3, 5). After any parameter problem, substitute the endpoints of your answer and find the actual roots; and prefer <i>af</i>(<i>k</i>) to <i>f</i>(<i>k</i>), so the same line works when a parameter can flip <i>a</i>`,
    why: `Here <i>f</i>(<i>x</i>) = (<i>x</i> − <i>m</i>)<sup>2</sup> − 1 has roots <i>m</i> ± 1, which confirms it; both roots lie in (−2, 4) for <i>m</i> ∈ (−1, 3).`,
    say: null,
  },

  // ── Topic 08 · Transformation of Equations and Functions of the Roots ──
  // pp. 398–401, 408
  {
    topic: 7,
    kind: 'remember',
    q: 'How do you form the equation whose roots are <i>φ</i>(<i>α</i>), <i>φ</i>(<i>β</i>)?',
    a: `Do not find <i>α</i> and <i>β</i>. Write the rule <i>y</i> = <i>φ</i>(<i>x</i>) that carries an old root to a new one, invert it to <i>x</i> = <i>ψ</i>(<i>y</i>), substitute into the equation you have, <i>f</i>(<i>ψ</i>(<i>y</i>)) = 0, and clear denominators. The substitution must be reversible on the roots you care about: without that, the transformed equation can gain roots you did not ask for or lose one you did. Then confirm it is still quadratic (if the <i>y</i><sup>2</sup> coefficient vanished, a root has been lost) and cross-check its sum and product by Vieta`,
    why: `Roots of <i>x</i><sup>2</sup> − 5<i>x</i> + 6 = 0 increased by 2: <i>x</i> = <i>y</i> − 2 gives <i>y</i><sup>2</sup> − 9<i>y</i> + 20 = 0, with roots 4 and 5.`,
    say: 'You substitute the inverse.',
  },
  // pp. 399–401, 408
  {
    topic: 7,
    kind: 'remember',
    q: 'What are the standard transformations of <i>ax</i><sup>2</sup> + <i>bx</i> + <i>c</i> = 0?',
    a: `<i>α</i> + <i>h</i> (put <i>x</i> = <i>y</i> − <i>h</i>): <i>ay</i><sup>2</sup> + (<i>b</i> − 2<i>ah</i>)<i>y</i> + (<i>ah</i><sup>2</sup> − <i>bh</i> + <i>c</i>) = 0. <i>kα</i> (<i>k</i> ≠ 0): <i>ay</i><sup>2</sup> + <i>bky</i> + <i>ck</i><sup>2</sup> = 0. −<i>α</i>: <i>ay</i><sup>2</sup> − <i>by</i> + <i>c</i> = 0. ${fr('1', '<i>α</i>')} (<i>c</i> ≠ 0): <i>cy</i><sup>2</sup> + <i>by</i> + <i>a</i> = 0, the coefficient string reversed with no sign changed. <i>α</i><sup>2</sup>: <i>a</i><sup>2</sup><i>y</i><sup>2</sup> + (2<i>ac</i> − <i>b</i><sup>2</sup>)<i>y</i> + <i>c</i><sup>2</sup> = 0, derived by squaring <i>ax</i><sup>2</sup> + <i>c</i> = −<i>bx</i>, never by writing <i>x</i> = √<i>y</i>. No <i>y</i>-term: <i>x</i> = <i>y</i> − ${fr('<i>b</i>', '2<i>a</i>')} gives <i>ay</i><sup>2</sup> = ${fr(D, '4<i>a</i>')}, the vertex form read as an equation. Möbius ${fr('<i>pα</i> + <i>q</i>', '<i>rα</i> + <i>s</i>')} (<i>ps</i> − <i>qr</i> ≠ 0): put <i>x</i> = ${fr('<i>q</i> − <i>sy</i>', '<i>ry</i> − <i>p</i>')}`,
    why: `Reciprocals of the roots of 5<i>x</i><sup>2</sup> − 3<i>x</i> + 2 = 0: 2<i>y</i><sup>2</sup> − 3<i>y</i> + 5 = 0.`,
    say: null,
  },
  // pp. 398–399, 401, 408
  {
    topic: 7,
    kind: 'remember',
    q: 'What is Newton’s theorem for <i>S</i><sub><i>n</i></sub> = <i>α</i><sup><i>n</i></sup> + <i>β</i><sup><i>n</i></sup>?',
    a: `For every integer <i>n</i> ≥ 2, <i>aS</i><sub><i>n</i></sub> + <i>bS</i><sub><i>n</i>−1</sub> + <i>cS</i><sub><i>n</i>−2</sub> = 0, i.e. <i>S</i><sub><i>n</i></sub> = ${SUM}<i>S</i><sub><i>n</i>−1</sub> − ${PROD}<i>S</i><sub><i>n</i>−2</sub>, seeded by <i>S</i><sub>0</sub> = 2 and <i>S</i><sub>1</sub> = ${SUM}. Proof: multiply <i>aα</i><sup>2</sup> + <i>bα</i> + <i>c</i> = 0 by <i>α</i><sup><i>n</i>−2</sup>, the same for <i>β</i>, and add. It needs nothing beyond <i>a</i> ≠ 0 for <i>n</i> ≥ 2, and extends to all integers <i>n</i>, negative ones included, exactly when <i>c</i> ≠ 0. Step up one index at a time, writing every intermediate <i>S</i><sub><i>k</i></sub>`,
    why: `<i>x</i><sup>2</sup> − 5<i>x</i> + 3 = 0: <i>S</i><sub><i>n</i></sub> = 5<i>S</i><sub><i>n</i>−1</sub> − 3<i>S</i><sub><i>n</i>−2</sub> gives <i>S</i><sub>2</sub> = 19, <i>S</i><sub>3</sub> = 80, <i>S</i><sub>4</sub> = 343, and (<i>α</i><sup>2</sup> + <i>β</i><sup>2</sup>)<sup>2</sup> − 2(<i>αβ</i>)<sup>2</sup> = 19<sup>2</sup> − 2(9) = 343 agrees.`,
    say: 'A quadratic equation is a machine for lowering exponents.',
  },
  // pp. 399, 401, 404, 408
  {
    topic: 7,
    kind: 'remember',
    q: 'How do you evaluate a high-degree polynomial <i>g</i>(<i>α</i>) at a root of a quadratic?',
    a: `Divide: <i>g</i>(<i>x</i>) = (<i>ax</i><sup>2</sup> + <i>bx</i> + <i>c</i>)<i>q</i>(<i>x</i>) + <i>px</i> + <i>t</i>, so <i>g</i>(<i>α</i>) = <i>pα</i> + <i>t</i>: the quotient is multiplied by something that vanishes at <i>α</i>. The remainder is linear because the divisor is quadratic, and the method works verbatim when <i>α</i> is non-real. Keep the remainder, discard the quotient`,
    why: `<i>α</i> a root of <i>x</i><sup>2</sup> − 2<i>x</i> + 4 = 0: <i>x</i><sup>4</sup> − 4<i>x</i><sup>3</sup> + 8<i>x</i><sup>2</sup> + 3<i>x</i> + 5 = (<i>x</i><sup>2</sup> − 2<i>x</i> + 4)(<i>x</i><sup>2</sup> − 2<i>x</i>) + (11<i>x</i> + 5), so its value at <i>α</i> is 11<i>α</i> + 5.`,
    say: null,
  },
  // pp. 401, 405–407
  {
    topic: 7,
    kind: 'mixup',
    q: 'For roots each 2 more than those of <i>x</i><sup>2</sup> − 4<i>x</i> + 3 = 0: substitute <i>x</i> = <i>y</i> − 2 or <i>x</i> = <i>y</i> + 2?',
    a: `<i>x</i> = <i>y</i> − 2: the rule is <i>y</i> = <i>x</i> + 2 and you substitute its inverse, giving <i>y</i><sup>2</sup> − 8<i>y</i> + 15 = 0 (roots 3 and 5). Substituting <i>x</i> = <i>y</i> + 2 reverses the direction, decreases the roots by 2 and gives <i>y</i><sup>2</sup> − 1 = 0. Reversing <i>φ</i> and <i>ψ</i> is the most common error in the topic: write the rule, solve it for <i>x</i> on a separate line, and only then substitute`,
    why: `Likewise the reciprocal equation of <i>x</i><sup>2</sup> + <i>px</i> + <i>q</i> = 0 (<i>q</i> ≠ 0) is <i>qx</i><sup>2</sup> + <i>px</i> + 1 = 0: the string reverses and no sign changes, so <i>qx</i><sup>2</sup> − <i>px</i> + 1 = 0 is wrong.`,
    say: null,
  },
  // pp. 403, 406–407
  {
    topic: 7,
    kind: 'mistake',
    q: `For roots <i>α</i><sup>2</sup>, <i>β</i><sup>2</sup> from 2<i>x</i><sup>2</sup> + 3<i>x</i> − 4 = 0, is the new sum (<i>α</i> + <i>β</i>)<sup>2</sup> = ${fr('9', '4')}?`,
    a: `No: the sum of the squares is not the square of the sum. <i>α</i><sup>2</sup> + <i>β</i><sup>2</sup> = (<i>α</i> + <i>β</i>)<sup>2</sup> − 2<i>αβ</i> = ${fr('9', '4')} + 4 = ${fr('25', '4')} and the product is 4, so 4<i>y</i><sup>2</sup> − 25<i>y</i> + 16 = 0, not 4<i>y</i><sup>2</sup> − 9<i>y</i> + 16 = 0. In <i>a</i><sup>2</sup><i>y</i><sup>2</sup> + (2<i>ac</i> − <i>b</i><sup>2</sup>)<i>y</i> + <i>c</i><sup>2</sup> = 0 the sum of the roots is the negative of the middle coefficient, <i>b</i><sup>2</sup> − 2<i>ac</i>. After any squares transformation on a real-rooted quadratic, check that the new discriminant is non-negative: the wrong answer’s is 81 − 256 = −175. Other listed slips: seeding Newton with <i>S</i><sub>0</sub> = 1 (it is 2, because there are two roots), and using the reciprocal transformation when <i>c</i> = 0`,
    why: `<i>x</i><sup>2</sup> − 6<i>x</i> + 5 = 0 has roots 1 and 5, so the squares equation is <i>x</i><sup>2</sup> − 26<i>x</i> + 25 = 0, not <i>x</i><sup>2</sup> − 36<i>x</i> + 25 = 0.`,
    say: null,
  },
  // pp. 401, 403–404, 406–407
  {
    topic: 7,
    kind: 'shortcut',
    q: 'Find <i>α</i><sup>9</sup> + <i>β</i><sup>9</sup> for the roots of <i>x</i><sup>2</sup> − 2<i>x</i> + 4 = 0. The fast way?',
    a: `Newton: <i>S</i><sub><i>n</i></sub> = 2<i>S</i><sub><i>n</i>−1</sub> − 4<i>S</i><sub><i>n</i>−2</sub> from <i>S</i><sub>0</sub> = 2, <i>S</i><sub>1</sub> = 2 runs −4, −16, −16, 32, 128, 128, −256, −1024. When the coefficients are real and the roots non-real, take the polar form as your second route: here ${D} = −12 and the roots 1 ± ${i}√3 = 2<i>e</i><sup>±<i>i</i>π/3</sup>, so <i>S</i><sub><i>n</i></sub> = 2<sup><i>n</i>+1</sup> cos ${fr('<i>n</i>π', '3')} and <i>S</i><sub>9</sub> = 2<sup>10</sup> cos 3π = −1024 in one line. For real coefficients and a non-real pair <i>re</i><sup>±<i>iθ</i></sup>, <i>S</i><sub><i>n</i></sub> = 2<i>r</i><sup><i>n</i></sup> cos <i>nθ</i>`,
    why: `<i>x</i><sup>2</sup> − <i>x</i> + 1 = 0 has roots <i>e</i><sup>±<i>i</i>π/3</sup>, so <i>S</i><sub><i>n</i></sub> = 2 cos ${fr('<i>n</i>π', '3')} and <i>S</i><sub>5</sub> = 1, matching the recurrence 2, 1, −1, −2, −1, 1.`,
    say: null,
  },

  // ── Topic 09 · Complex Numbers as Vectors: Perpendicularity, Dot and Cross Products ──
  // pp. 408–409, 413
  {
    topic: 8,
    kind: 'remember',
    q: 'How do you test two segments for being parallel or perpendicular with complex numbers?',
    a: `With <i>u</i> = ${z2} − ${z1} (the vector <i>AB⃗</i>) and <i>v</i> = <i>z</i><sub>4</sub> − ${z3} (the vector <i>CD⃗</i>), both non-zero: <i>AB</i> ∥ <i>CD</i> ⟺ ${fr('<i>u</i>', '<i>v</i>')} ∈ ℝ ⟺ ${ub}<i>v</i> − ${uvb} = 0 ⟺ Im(${ub}<i>v</i>) = 0. <i>AB</i> ⊥ <i>CD</i> ⟺ ${fr('<i>u</i>', '<i>v</i>')} is purely imaginary ⟺ ${ub}<i>v</i> + ${uvb} = 0 ⟺ Re(${ub}<i>v</i>) = 0. The steps are equivalences, not mere implications, because multiplying through by |<i>v</i>|<sup>2</sup> > 0 is reversible. The perpendicularity test is the exact companion of the collinearity test “${fr(`${z3} − ${z1}`, `${z2} − ${z1}`)} is real”`,
    why: `The segment from 2 + ${i} to 5 + 5${i} and the segment from 1 to −7 + 6${i}: <i>u</i> = 3 + 4${i}, <i>v</i> = −8 + 6${i}, ${ub}<i>v</i> = 50${i} with real part 0, so they are perpendicular.`,
    say: 'The conjugate goes on the first vector.',
  },
  // pp. 409, 413
  {
    topic: 8,
    kind: 'remember',
    q: `What do Re(${ub}<i>v</i>) and Im(${ub}<i>v</i>) mean for plane vectors?`,
    a: `For <i>u</i> = <i>x</i><sub>1</sub> + <i>iy</i><sub>1</sub> and <i>v</i> = <i>x</i><sub>2</sub> + <i>iy</i><sub>2</sub>: ${ub}<i>v</i> = (<i>x</i><sub>1</sub> − <i>iy</i><sub>1</sub>)(<i>x</i><sub>2</sub> + <i>iy</i><sub>2</sub>) = (<i>x</i><sub>1</sub><i>x</i><sub>2</sub> + <i>y</i><sub>1</sub><i>y</i><sub>2</sub>) + ${i}(<i>x</i><sub>1</sub><i>y</i><sub>2</sub> − <i>y</i><sub>1</sub><i>x</i><sub>2</sub>). So Re(${ub}<i>v</i>) is the dot product <i>u</i> · <i>v</i> and Im(${ub}<i>v</i>) the scalar cross product <i>u</i> × <i>v</i>: ${ub}<i>v</i> = (<i>u</i> · <i>v</i>) + ${i}(<i>u</i> × <i>v</i>). Hence cos <i>θ</i> = ${fr(`Re(${ub}<i>v</i>)`, '|<i>u</i>||<i>v</i>|')} and sin <i>θ</i> = ${fr(`Im(${ub}<i>v</i>)`, '|<i>u</i>||<i>v</i>|')}, where <i>θ</i> = arg(${fr('<i>v</i>', '<i>u</i>')}) is the directed angle from <i>u</i> to <i>v</i>, consistent with the rotation theorem`,
    why: `<i>u</i> = 3 + 4${i}, <i>v</i> = −8 + 6${i}: ${ub}<i>v</i> = 50${i}, so <i>u</i> · <i>v</i> = 0 and <i>u</i> × <i>v</i> = 50; the angle is 90°, with <i>v</i> anticlockwise from <i>u</i> since the cross product is positive.`,
    say: null,
  },
  // pp. 409–413
  {
    topic: 8,
    kind: 'remember',
    q: 'What are the area of a triangle and its orthocentre in complex form?',
    a: `Area = ${fr('1', '2')}|Im[(${zb2} − ${zb1})(${z3} − ${z1})]| = ${fr('1', '2')}|Im(${zb1}${z2} + ${zb2}${z3} + ${zb3}${z1})|: half the cross product of two edge vectors, the shoelace formula in complex clothing. Without the modulus signs it is the signed area, positive exactly when ${z1} → ${z2} → ${z3} runs anticlockwise. If the circumcentre is at the origin, the orthocentre is <i>H</i> = ${z1} + ${z2} + ${z3}; for a circumcentre <i>O</i>, <i>H</i> = ${z1} + ${z2} + ${z3} − 2<i>O</i>, and with the centroid <i>G</i>, <i>H</i> − <i>G</i> = 2(<i>G</i> − <i>O</i>): the Euler line with its 2 ∶ 1 ratio. The proof that <i>AH</i> ⊥ <i>BC</i> works because |${z2}| = |${z3}| cancels the two modulus terms`,
    why: `<i>A</i> = 1 + ${i}, <i>B</i> = 4 + 2${i}, <i>C</i> = 5 − ${i}: at <i>B</i>, ${ub}<i>v</i> = (−3 + ${i})(1 − 3${i}) = 10${i}, a right angle, and the area is ${fr('1', '2')}|Im(10${i})| = 5.`,
    say: null,
  },
  // pp. 408–409, 413
  {
    topic: 8,
    kind: 'mixup',
    q: `Im(${ub}<i>v</i>) = 0 or Re(${ub}<i>v</i>) = 0: which means parallel and which perpendicular?`,
    a: `Im(${ub}<i>v</i>) = 0, the cross product vanishing, with ${fr('<i>u</i>', '<i>v</i>')} real, is parallel; Re(${ub}<i>v</i>) = 0, the dot product vanishing, with ${fr('<i>u</i>', '<i>v</i>')} purely imaginary, is perpendicular. In bar form, ${ub}<i>v</i> = ${uvb} is parallel and ${ub}<i>v</i> + ${uvb} = 0 is perpendicular`,
    why: `For non-zero ${z1}, ${z2}: ${zb1}${z2} + ${z1}${zb2} = 2 Re(${zb1}${z2}) = 0 exactly when the position vectors are perpendicular, so <i>a</i>${B}${z} + <i>a</i>${zb} = 0 is the line through the origin perpendicular to <i>a</i>.`,
    say: null,
  },
  // pp. 409, 411
  {
    topic: 8,
    kind: 'mistake',
    q: 'Is <i>u</i> ⊥ <i>v</i> ⟺ Re(<i>uv</i>) = 0?',
    a: `No: the conjugate goes on the first vector, Re(${ub}<i>v</i>) = 0. Re(<i>uv</i>) is not the dot product and tests nothing geometric about the pair: <i>uv</i> has argument arg <i>u</i> + arg <i>v</i> (up to a multiple of 2π), which depends on where the pair sits in the plane, while ${ub}<i>v</i> has argument arg <i>v</i> − arg <i>u</i>, the angle you care about. Rotating both vectors together leaves ${ub}<i>v</i> unchanged but spins <i>uv</i>`,
    why: `<i>u</i> = 1 + ${i}, <i>v</i> = 1 − ${i} are perpendicular, yet Re(<i>uv</i>) = 2; <i>u</i> = <i>v</i> = 1 + ${i} are not, yet Re(<i>uv</i>) = Re(2${i}) = 0: a false negative and a false positive.`,
    say: null,
  },
  // pp. 411–413
  {
    topic: 8,
    kind: 'shortcut',
    q: `If |${z1}| = |${z2}| = |${z3}| = 1 and ${z1} + ${z2} + ${z3} = 0, why is the triangle equilateral, fast?`,
    a: `The circumcentre is the origin, so the orthocentre is ${z1} + ${z2} + ${z3} = 0, which is also the circumcentre; a triangle whose orthocentre and circumcentre coincide is equilateral. With the circumcentre at the origin, <i>H</i> = 3<i>G</i>, so <i>O</i>, <i>G</i>, <i>H</i> are collinear with <i>OH</i> = 3 <i>OG</i>`,
    why: `A check of <i>H</i> = ${z1} + ${z2} + ${z3}: for 1, ${i}, −1 on the unit circle the right angle is at ${i}, the orthocentre, and 1 + ${i} − 1 = ${i}.`,
    say: null,
  },
];
