/**
 * KEY POINTS for Mathematics Class 11, Chapter 7 (Binomial Theorem).
 *
 * Written for test mode: every point is a question to answer in your head,
 * then the answer and at most one more line. Four kinds, each a section on
 * the screen: Remember, Don't mix up, Common mistakes and Exam shortcuts.
 * Topics 01–08 and Additional topics A–G each have two or more Remember
 * points, at least one of each other kind and one Exam shortcut; the long
 * ones carry more (Topic 04, the four summation tools; Topic 08, the filter
 * and its period-2, 3 and 4 forms; Additional A, the conjugate identities,
 * term counts, surd shapes and the truncation bound): 95 points in all.
 * Memory lines are a fifth, short section of their own, read rather than
 * tested: the first two of each topic.
 *
 * `topic`: Topics 01–08 are 0–7 (01–07 the main chapter, 08 the
 * supplement's Subtopic 08), Additional topics A–G are 8–14 (A–C the
 * supplement's addenda, D–G the "Additional Topics" part). No point refers
 * to another topic by number.
 *
 * Every fact is from the Master Reference book (the October 2026 edition); the
 * page (the bottom folio) is above each point. Remember: the topic's key
 * formulas and definitions, its derivations and procedures, and its Cheat
 * sheet. Common mistakes: its Common pitfalls and its MCQ traps (D–G, which
 * have no MCQs or pitfalls: their Speed Trap examples). Exam shortcuts: its
 * Pro-Tips, with a worked example or practice answer. `say`: the book's own
 * mnemonics, word for word without their quotation marks, from each cheat
 * sheet (Topics 01–08 and A–C): twenty-four in all, every one the book
 * prints. D–G have no cheat sheet and no mnemonic, so each has the book's own
 * one-line sentence instead (D: the reversal line; E: the one precondition;
 * F: the falling-factorial line; G: the "little less than four times" line):
 * twenty-eight in all, twenty-one of them memory lines (Topics 01, 02, A, B
 * and C carry a third mnemonic, and Topic 08 a third and fourth, on later
 * points). Where the printed book over-states a rule (each one corrected in the chapter text under decision 30) (the any-index series "valid only
 * for |x| < 1", "the coefficients must sum to 2ⁿ" and "must be symmetric"
 * after any expansion, "conjugate sums go rational", "substitute n = 1" for
 * the largest divisor, "averaging … keeps the third, tripled", "compute two of
 * them and get the third", "sums of positive integers", "the terms j and k − j
 * always pair up", "a + b divides aⁿ − bⁿ only for even n", "differentiating
 * again gives ∑ r²Cᵣ", "never zero", "equal exactly when n = 2p − 2, provided
 * a ≠ ±b", "if the divisor is … a square whose root is not the K … nothing",
 * "no JEE question requires them"), the point states it only with its true
 * condition, or in the chapter's own milder words, or leaves it out. The one
 * mnemonic that carries such a rule (Topic 05's "only if |x| < 1") is kept
 * word for word as the book's memory line; its point gives the condition.
 *
 * Markup is the chapter's own: variables and Greek letters italic, ⁿCᵣ with an
 * italic C, <sup><i>n</i></sup><i>C</i><sub><i>r</i></sub>, and Cᵣ for ⁿCᵣ where
 * the chapter writes it (Topics 04 and 08, Additional E and F); the stacked
 * binomial coefficient <binom><num>…</num><den>…</den></binom> where the chapter
 * writes it; − (U+2212) for minus; every fraction stacked,
 * <frac><num>…</num><den>…</den></frac>, except inside a raised or lowered run
 * (2<sup>n/2</sup>, T<sub>n/2+1</sub>, 3<sup>1/5</sup>), which keeps the
 * chapter's form; no em dashes; and always a space after "<" (as the book
 * prints it), so it is never read as a tag. Exam-frequency claims would keep
 * the label "(the book’s estimate from past papers, not official figures)";
 * none of these points makes one.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

const fr = (a: string, b: string) => `<frac><num>${a}</num><den>${b}</den></frac>`;
const bn = (a: string, b: string) => `<binom><num>${a}</num><den>${b}</den></binom>`;
const C = (a: string, b: string) => `<sup>${a}</sup><i>C</i><sub>${b}</sub>`;
const Cs = (s: string) => `<i>C</i><sub>${s}</sub>`;
const T = (s: string) => `<i>T</i><sub>${s}</sub>`;
const SUM = (lo: string, hi: string) => `∑<sub>${lo}</sub><sup>${hi}</sup>`;
const a = '<i>a</i>';
const b = '<i>b</i>';
const k = '<i>k</i>';
const m = '<i>m</i>';
const n = '<i>n</i>';
const p = '<i>p</i>';
const q = '<i>q</i>';
const r = '<i>r</i>';
const x = '<i>x</i>';
const y = '<i>y</i>';
const K = '<i>K</i>';
const N = '<i>N</i>';
const f = '<i>f</i>';
const I = '<i>I</i>';
const om = '<i>ω</i>';
const i = '<i>i</i>';
const al = '<i>α</i>';
const be = '<i>β</i>';
const nCr = C(n, r);
const AB = `(${a} + ${b})<sup>${n}</sup>`;
const X1 = `(1 + ${x})<sup>${n}</sup>`;
const C2n = C(`2${n}`, n);

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Binomial Expansion and Pascal’s Triangle ──
  // pp. 581–582, 584, 589
  {
    topic: 0,
    kind: 'remember',
    q: `Why is the coefficient of ${a}<sup>${n}−${r}</sup>${b}<sup>${r}</sup> in ${AB} exactly ${nCr}?`,
    a: `Multiplying out ${n} brackets (${a} + ${b}), every term is made by picking ${a} or ${b} from each bracket. Picking ${b} from exactly ${r} brackets gives ${a}<sup>${n}−${r}</sup>${b}<sup>${r}</sup>, and the number of ways to choose those ${r} brackets is ${nCr}. So, for ${n} ∈ ℕ, ${AB} = ${SUM(`${r}=0`, n)} ${nCr} ${a}<sup>${n}−${r}</sup>${b}<sup>${r}</sup>, with general term ${T(`${r}+1`)} = ${nCr} ${a}<sup>${n}−${r}</sup>${b}<sup>${r}</sup>. In every term the powers of ${a} and ${b} add up to ${n}: the expansion is homogeneous of degree ${n}`,
    why: `(2${x} + 3)<sup>4</sup> = 16${x}<sup>4</sup> + 96${x}<sup>3</sup> + 216${x}<sup>2</sup> + 216${x} + 81, from row 4 (1, 4, 6, 4, 1) with the whole 2${x} raised to each power.`,
    say: 'Powers seesaw: power of <i>a</i> falls <i>n</i> → 0 while power of <i>b</i> rises 0 → <i>n</i>; they always add to <i>n</i>.',
  },
  // pp. 584, 589
  {
    topic: 0,
    kind: 'remember',
    q: `What are the core properties of ${AB} for ${n} ∈ ℕ?`,
    a: `Number of terms ${n} + 1. Symmetry ${nCr} = ${C(n, `${n}−${r}`)} (choosing which ${r} brackets give ${b} is choosing which ${n} − ${r} give ${a}). End coefficients ${C(n, '0')} = ${C(n, n)} = 1. Sum of all coefficients: put ${a} = ${b} = 1, ${SUM(`${r}=0`, n)} ${nCr} = 2<sup>${n}</sup>. Alternating sum: put ${a} = 1, ${b} = −1, ${SUM(`${r}=0`, n)} (−1)<sup>${r}</sup> ${nCr} = 0 for ${n} ≥ 1. If ${n} is negative or fractional the expansion becomes an infinite series instead, and Pascal’s triangle does not apply`,
    why: `${C(n, '0')} + ${C(n, '1')} + ⋯ + ${C(n, n)} = 4096 = 2<sup>12</sup> gives ${n} = 12, and the alternating sum is 0.`,
    say: '<i>n</i> + 1, not <i>n</i>: for the term count.',
  },
  // pp. 582, 584–585, 589
  {
    topic: 0,
    kind: 'remember',
    q: 'How is Pascal’s triangle built, and which identity is its skeleton?',
    a: `Row 0 is a single 1; every row begins and ends with 1; every interior entry is the sum of the two entries diagonally above it. Row ${n} (rows start at ${n} = 0, so it is the (${n} + 1)th row) gives the coefficients of ${AB}. The skeleton is Pascal’s rule, ${nCr} + ${C(n, `${r}−1`)} = ${C(`${n}+1`, r)} (1 ≤ ${r} ≤ ${n}): a term of ${AB} comes from an ${a} or a ${b} multiplied into a term of (${a} + ${b})<sup>${n}−1</sup>. It is also the one load-bearing fact in the induction proof of the theorem, and it follows by taking the LCM ${r}! (${n} − ${r} + 1)!. The triangle is fastest for small ${n} (say ${n} ≤ 6); for large ${n}, use ${nCr} directly`,
    why: `Row 4 is 1 4 6 4 1, so (${a} + ${b})<sup>4</sup> = ${a}<sup>4</sup> + 4${a}<sup>3</sup>${b} + 6${a}<sup>2</sup>${b}<sup>2</sup> + 4<i>ab</i><sup>3</sup> + ${b}<sup>4</sup>.`,
    say: null,
  },
  // pp. 588, 589
  {
    topic: 0,
    kind: 'mixup',
    q: `In (${x} + ${y})<sup>6</sup>, is the third binomial coefficient ${C('6', '3')}?`,
    a: `No: ${C('6', '2')} = 15. The (${r} + 1)th term uses ${nCr}, so “third term” means ${r} = 2, not ${r} = 3. ${C('6', '3')} = 20 forgets that ${T(`${r}+1`)} shifts the index; ${C('6', '1')} = 6 stops at ${T('2')}; and ${C('7', '2')} = 21 uses the wrong Pascal row`,
    why: `The terms are ${T('1')}, ${T('2')}, ${T('3')}, … with coefficients ${C('6', '0')}, ${C('6', '1')}, ${C('6', '2')}, ….`,
    say: null,
  },
  // pp. 586, 588
  {
    topic: 0,
    kind: 'mistake',
    q: `Is the coefficient of ${x}<sup>2</sup> in (1 + 2${x})<sup>6</sup> equal to ${C('6', '2')} = 15?`,
    a: `No: 60. ${T(`${r}+1`)} = ${C('6', r)}(2${x})<sup>${r}</sup>, so at ${r} = 2 it is ${C('6', '2')} · 2<sup>2</sup> = 15 · 4 = 60. 15 forgets to raise the 2, 30 raises it to the power 1, 240 to the power 4: one root error, not raising the entire term to its power. The other listed slips: ${n} terms instead of ${n} + 1, and signs in (${a} − ${b})<sup>${n}</sup>, where the term with ${b}<sup>${r}</sup> carries (−1)<sup>${r}</sup>`,
    why: `(2${x})<sup>3</sup> = 8${x}<sup>3</sup>, never 2${x}<sup>3</sup>; (2${x} − 3${y})<sup>15</sup> has 16 terms, not 15.`,
    say: 'Raise the whole bracket: (2<i>x</i>)<sup>3</sup> = 8<i>x</i><sup>3</sup>, cube everything inside.',
  },
  // p. 586
  {
    topic: 0,
    kind: 'mistake',
    q: `How many dissimilar terms has (1 + 2${x} + ${x}<sup>2</sup>)<sup>10</sup>: 66?`,
    a: `No: 21. The base is a perfect square, 1 + 2${x} + ${x}<sup>2</sup> = (1 + ${x})<sup>2</sup>, so the expression is (1 + ${x})<sup>20</sup>, with 20 + 1 terms. ${bn('12', '2')} = 66 is the trinomial count, which assumes the three parts are unrelated. Before counting terms of a “trinomial”, check whether the base is secretly a perfect power`,
    why: '(1 + <i>x</i> + <i>x</i><sup>2</sup> + <i>x</i><sup>3</sup>)<sup>8</sup> has 25 dissimilar terms.',
    say: null,
  },
  // pp. 587, 589
  {
    topic: 0,
    kind: 'shortcut',
    q: 'How do you check an expansion in five seconds?',
    a: `Substitute ${x} = 1 (or the actual values) and confirm you recover the original number: for ${X1} the coefficients must sum to 2<sup>${n}</sup>; for any other expansion they sum to the bracket’s value at ${x} = 1, as (1 + 2${x})<sup>6</sup> gives 3<sup>6</sup>, not 2<sup>6</sup>. A second free check: the binomial coefficients ${nCr} read the same forwards and backwards (${nCr} = ${C(n, `${n}−${r}`)}), though the full coefficients of (2${x} + 3)<sup>4</sup> need not`,
    why: `(2${x} + 3)<sup>4</sup> at ${x} = 1: 16 + 96 + 216 + 216 + 81 = 625 = 5<sup>4</sup>.`,
    say: null,
  },
  // p. 587
  {
    topic: 0,
    kind: 'shortcut',
    q: `Three consecutive coefficients of ${X1} are in the ratio 1 ∶ 3 ∶ 5. Find ${n} without factorials.`,
    a: `Use the ratio of consecutive coefficients: ${fr(C(n, `${r}−1`), nCr)} = ${fr(r, `${n} − ${r} + 1`)} = ${fr('1', '3')} gives ${n} = 4${r} − 1, and ${fr(nCr, C(n, `${r}+1`))} = ${fr(`${r} + 1`, `${n} − ${r}`)} = ${fr('3', '5')} gives 8${r} + 5 = 3${n}. So ${r} = 2, ${n} = 7: the terms ${T('2')}, ${T('3')}, ${T('4')}, with 7 ∶ 21 ∶ 35 = 1 ∶ 3 ∶ 5`,
    why: `Ratio 5 ∶ 10 ∶ 14 in (1 + ${x})<sup>${n}+5</sup>: ${n} = 6.`,
    say: null,
  },

  // ── Topic 02 · General, Middle and Independent Terms ──
  // pp. 590–592, 596
  {
    topic: 1,
    kind: 'remember',
    q: 'What is the “specific term” algorithm, and when does the term not exist?',
    a: `Write ${T(`${r}+1`)} and collect ${x} into one power: for (${al}${x}<sup>${p}</sup> + ${fr(be, `${x}<sup>${q}</sup>`)})<sup>${n}</sup>, ${T(`${r}+1`)} = ${nCr} ${al}<sup>${n}−${r}</sup>${be}<sup>${r}</sup>${x}<sup>${p}(${n}−${r})−<i>qr</i></sup>, net exponent <i>E</i>(${r}) = ${p}(${n} − ${r}) − <i>qr</i>. Set <i>E</i>(${r}) = ${k} for the ${x}<sup>${k}</sup> term, or 0 for the term independent of ${x}. Solve and validate: ${r} must be an integer with 0 ≤ ${r} ≤ ${n}, or the term does not exist (an expansion need not contain a constant term). Then back-substitute`,
    why: `(${x}<sup>2</sup> − ${fr('1', x)})<sup>9</sup>: 18 − 3${r} = 0, ${r} = 6, so ${T('7')} = ${C('9', '6')}(−1)<sup>6</sup> = 84.`,
    say: 'Set the power, solve for <i>r</i>, check it’s whole and in range.',
  },
  // pp. 590–592, 596
  {
    topic: 1,
    kind: 'remember',
    q: `How many middle terms has ${AB}, and which are they?`,
    a: `The terms ${T('1')}, …, ${T(`${n}+1`)} are a list of length ${n} + 1. ${n} even: an odd-length list, one middle term ${T(`${n}/2+1`)} (${r} = ${fr(n, '2')}). ${n} odd: an even-length list, two middle terms ${T(`(${n}+1)/2`)} and ${T(`(${n}+3)/2`)} (${r} = ${fr(`${n} − 1`, '2')} and ${fr(`${n} + 1`, '2')}). Check the parity, read off the position, apply the general term: never expand to hunt for the middle`,
    why: `(${fr(x, '3')} + 3${y})<sup>8</sup>: the one middle term is ${T('5')} = 70${x}<sup>4</sup>${y}<sup>4</sup>.`,
    say: 'Odd power → two middles; even power → one middle.',
  },
  // pp. 590–592, 596
  {
    topic: 1,
    kind: 'remember',
    q: `Which ${r} gives the ${m}th term from the beginning, and which term is the ${p}th from the end?`,
    a: `The ${m}th term is ${T(m)} = ${T(`(${m}−1)+1`)}, so ${r} = ${m} − 1. The ${p}th term from the end of ${AB} is the (${n} − ${p} + 2)th term from the beginning; equivalently, the ${p}th term from the beginning of the reversed binomial (${b} + ${a})<sup>${n}</sup>`,
    why: `6th term of (2${x} + ${fr('3', x)})<sup>9</sup>: ${r} = 5, ${C('9', '5')}(2${x})<sup>4</sup>(${fr('3', x)})<sup>5</sup> = 126 · 16 · 243 · ${x}<sup>−1</sup> = ${fr('489888', x)}.`,
    say: null,
  },
  // p. 593
  {
    topic: 1,
    kind: 'mixup',
    q: 'Is the middle term always the term independent of x?',
    a: `No. The middle term is fixed by the position (parity of ${n}); the independent term by the condition <i>E</i>(${r}) = 0. They coincide only when the powers happen to balance at the middle: a coincidence of the chosen powers, not a rule`,
    why: `(${fr(`3${x}`, '2')} − ${fr('1', `3${x}`)})<sup>6</sup>: the middle term ${T('4')} = 20 · ${fr(`27${x}<sup>3</sup>`, '8')} · (−${fr('1', `27${x}<sup>3</sup>`)}) = −${fr('5', '2')} is also free of ${x}.`,
    say: null,
  },
  // pp. 595–596
  {
    topic: 1,
    kind: 'mistake',
    q: `What is the term independent of ${x} in (${x}<sup>2</sup> + ${fr('1', `${x}<sup>3</sup>`)})<sup>8</sup>: ${C('8', '3')} or ${C('8', '4')}?`,
    a: `Neither: there is none. The net exponent is 2(8 − ${r}) − 3${r} = 16 − 5${r}, and 16 − 5${r} = 0 gives ${r} = ${fr('16', '5')}, not an integer. Rounding ${r} to 3 or 4 forces a term that does not exist; a non-integer or out-of-range ${r} means the term is absent. The other listed slips: “the ${m}th term” as ${r} = ${m}, missing the second middle term when ${n} is odd, and the sign or exponent of a ${fr('1', `${x}<sup>${q}</sup>`)} factor`,
    why: `(${x}<sup>2</sup> − ${fr('1', x)})<sup>9</sup>: writing 2(9 − ${r}) + ${r} gives ${r} = 18, out of range; the true exponent 18 − 3${r} gives ${r} = 6.`,
    say: '<frac><num>1</num><den><i>x</i><sup><i>q</i></sup></den></frac> pulls the exponent down by <i>qr</i>: keep that minus sign.',
  },
  // pp. 594–595
  {
    topic: 1,
    kind: 'mistake',
    q: `Is the 7th term of (${x} − ${fr('1', x)})<sup>10</sup> equal to −${fr('210', `${x}<sup>2</sup>`)}?`,
    a: `No: +${fr('210', `${x}<sup>2</sup>`)}. The 7th term means ${r} = 6, and (−${fr('1', x)})<sup>6</sup> is an even power, so positive: ${T('7')} = ${C('10', '6')}${x}<sup>4</sup> · ${x}<sup>−6</sup> = 210${x}<sup>−2</sup>. 210${x}<sup>2</sup> reverses the exponent sign, and 252 = ${C('10', '5')} takes ${r} = 5`,
    why: `(${x} − ${fr('2', `${x}<sup>2</sup>`)})<sup>9</sup>: 9 − 3${r} = 0, ${r} = 3, ${C('9', '3')}(−2)<sup>3</sup> = −672; 672 drops the sign, −84 forgets 2<sup>3</sup>.`,
    say: null,
  },
  // pp. 594, 596
  {
    topic: 1,
    kind: 'shortcut',
    q: 'In an independent-term or coefficient question, when do you compute the term?',
    a: `Only after you have ${r}. Form <i>E</i>(${r}), set the condition, solve for ${r} and validate it; then substitute. It turns a two-minute solve into a fifteen-second one and catches the “no such term” cases at once`,
    why: `The ${x}<sup>7</sup> coefficient of (${a}${x}<sup>2</sup> + ${fr('1', `${b}${x}`)})<sup>11</sup> (${r} = 5) equals the ${x}<sup>−7</sup> coefficient of (${a}${x} − ${fr('1', `${b}${x}<sup>2</sup>`)})<sup>11</sup> (${r} = 6); ${C('11', '5')} = ${C('11', '6')} cancels, so ${a}<sup>6</sup>${b}<sup>−5</sup> = ${a}<sup>5</sup>${b}<sup>−6</sup> and, for ${a} ≠ 0, <i>ab</i> = 1.`,
    say: null,
  },

  // ── Topic 03 · Greatest Term and Greatest Binomial Coefficient ──
  // pp. 597–599, 601
  {
    topic: 2,
    kind: 'remember',
    q: `Which ${nCr} is the greatest binomial coefficient, and why?`,
    a: `The middle one(s), whatever ${x}: ${n} even, ${C(n, `${n}/2`)} (unique); ${n} odd, ${C(n, `(${n}−1)/2`)} = ${C(n, `(${n}+1)/2`)} (two equal). Proof: ${fr(nCr, C(n, `${r}−1`))} = ${fr(`${n} − ${r} + 1`, r)} exceeds 1 exactly when ${r} < ${fr(`${n} + 1`, '2')}, so the coefficients rise to the middle and fall symmetrically`,
    why: `(1 + ${x})<sup>12</sup>: ${C('12', '6')} = 924; (1 + ${x})<sup>15</sup>: ${C('15', '7')} = ${C('15', '8')} = 6435.`,
    say: 'Coefficient peak = middle; term peak = where ratio crosses 1.',
  },
  // pp. 598–599, 601
  {
    topic: 2,
    kind: 'remember',
    q: `How do you find the numerically greatest term of ${AB}?`,
    a: `Walk along the terms and watch the ratio: |${fr(T(`${r}+1`), T(r))}| = ${fr(`${n} − ${r} + 1`, r)} |${fr(b, a)}|. Solve ${fr(`${n} − ${r} + 1`, r)} |${fr(b, a)}| ≥ 1 to get ${r} ≤ ${k}. The terms grow up to ${r} = ⌊${k}⌋ and shrink after, so the greatest term is ${T(`⌊${k}⌋+1`)}; if ${k} is an exact integer, ${T(k)} = ${T(`${k}+1`)} are jointly greatest. The ${fr(b, a)} must include the full second part of the binomial`,
    why: `(1 + 4${x})<sup>8</sup> at ${x} = ${fr('1', '2')}: ${fr(`2(9 − ${r})`, r)} ≥ 1 gives ${r} ≤ 6, equal to 1 at ${r} = 6, so ${T('6')} = ${T('7')} = 1792.`,
    say: null,
  },
  // pp. 598–599, 601
  {
    topic: 2,
    kind: 'remember',
    q: `How do you find the greatest coefficient of (1 + <i>λ</i>${x})<sup>${n}</sup>?`,
    a: `The coefficients are <i>c</i><sub>${r}</sub> = ${nCr} <i>λ</i><sup>${r}</sup>; apply the same ratio idea to the sizes, |${fr(`<i>c</i><sub>${r}+1</sub>`, `<i>c</i><sub>${r}</sub>`)}| = ${fr(`${n} − ${r}`, `${r} + 1`)} |<i>λ</i>| ≥ 1. The factor <i>λ</i><sup>${r}</sup> shifts the peak, so the answer need not be the middle coefficient`,
    why: `(1 + 2${x})<sup>6</sup>: 2(6 − ${r}) ≥ ${r} + 1 gives ${r} ≤ ${fr('11', '3')} ≈ 3.67, so the peak is <i>c</i><sub>4</sub> = ${C('6', '4')} 2<sup>4</sup> = 240, the coefficient of ${x}<sup>4</sup>.`,
    say: null,
  },
  // pp. 597, 600–601
  {
    topic: 2,
    kind: 'mixup',
    q: 'Greatest binomial coefficient or greatest term: what does each depend on?',
    a: `The greatest binomial coefficient depends only on ${n}: it is the middle one, whatever ${x}. The greatest term depends on ${a}, ${b}, ${x} and ${n} together, because a large coefficient can be dragged down by a small power, and a modest one lifted by a large power: use the ratio test`,
    why: `In (1 + ${x})<sup>${n}</sup> with ${x} > 0 the greatest term comes from ${fr(`${n} − ${r} + 1`, r)}${x} ≥ 1; maximising ${nCr} alone ignores ${x}.`,
    say: null,
  },
  // pp. 599–601
  {
    topic: 2,
    kind: 'mistake',
    q: `In (4 − 3${x})<sup>8</sup> at ${x} = 1 the numerically greatest term is ${T('4')}. Is it also the algebraically greatest?`,
    a: `No. ${fr(`9 − ${r}`, r)} · ${fr('3', '4')} ≥ 1 gives ${r} ≤ ${fr('27', '7')} ≈ 3.86, so ${T('4')} has the largest size, but it carries (−3${x})<sup>3</sup>: ${T('4')} = −1,548,288. The algebraically greatest is the larger positive neighbour: ${T('3')} = 1,032,192, ${T('5')} = 1,451,520, so ${T('5')}. The other listed slips: dropping the 4 of (1 + 4${x}) from the ratio, and reporting one term when ${k} is an integer (two tie)`,
    why: `(3 + 2${x})<sup>9</sup> at ${x} = 1: the ratio equals 1 at ${r} = 4, so ${T('4')} = ${T('5')} = 489888.`,
    say: null,
  },
  // pp. 598, 600–601
  {
    topic: 2,
    kind: 'shortcut',
    q: `What is the one-division shortcut for the greatest term of (1 + ${x})<sup>${n}</sup>?`,
    a: `${k} = ${fr(`(${n} + 1)|${x}|`, `1 + |${x}|`)}. If ${k} is not an integer, the greatest term is ${T(`⌊${k}⌋+1`)} (${r} = ⌊${k}⌋); if it is, ${T(k)} and ${T(`${k}+1`)} are equal and both greatest`,
    why: `(1 + ${x})<sup>10</sup> at ${x} = ${fr('2', '3')}: ${k} = ${fr('22', '5')}, so ${T('5')} = ${C('10', '4')}(${fr('2', '3')})<sup>4</sup> = ${fr('1120', '27')}; and ${T('10')} = ${T('11')} in (1 + ${x})<sup>20</sup> needs ${k} = 10, ${x} = ${fr('10', '11')} (for ${x} > 0).`,
    say: null,
  },

  // ── Topic 04 · Properties of Binomial Coefficients and Summation of Series ──
  // pp. 603–606, 608
  {
    topic: 3,
    kind: 'remember',
    q: `With ${Cs(r)} = ${nCr}, what do the substitutions ${x} = 1 and ${x} = −1 give?`,
    a: `${x} = 1: ${SUM(`${r}=0`, n)} ${Cs(r)} = 2<sup>${n}</sup>. ${x} = −1: ${SUM(`${r}=0`, n)} (−1)<sup>${r}</sup>${Cs(r)} = 0 (${n} ≥ 1). Adding the two and halving isolates the even-indexed coefficients, subtracting the odd ones: ${Cs('0')} + ${Cs('2')} + ${Cs('4')} + ⋯ = ${Cs('1')} + ${Cs('3')} + ${Cs('5')} + ⋯ = 2<sup>${n}−1</sup> (${n} ≥ 1). Substitution is always valid: the expansion is a finite polynomial`,
    why: `(1 + ${x})<sup>8</sup>: ${Cs('0')} + ${Cs('1')} + ⋯ + ${Cs('8')} = 256, and the alternating sum is 0.`,
    say: 'The four tools: substitute for constants, differentiate for <i>r</i>, integrate for <frac><num>1</num><den><i>r</i> + 1</den></frac>, multiply-and-compare for squares.',
  },
  // pp. 604–605, 607–608
  {
    topic: 3,
    kind: 'remember',
    q: `How are ∑ ${r}${Cs(r)} and ∑ ${r}<sup>2</sup>${Cs(r)} obtained, and what are they?`,
    a: `Differentiation multiplies the ${x}<sup>${r}</sup> term by ${r}: ${n}(1 + ${x})<sup>${n}−1</sup> = ${SUM(`${r}=1`, n)} ${r}${Cs(r)}${x}<sup>${r}−1</sup>, and ${x} = 1 gives ${SUM(`${r}=1`, n)} ${r}${Cs(r)} = ${n}2<sup>${n}−1</sup> (the sum now starts at ${r} = 1). ${SUM(`${r}=1`, n)} ${r}<sup>2</sup>${Cs(r)} = ${n}(${n} + 1)2<sup>${n}−2</sup>. A plain second derivative at ${x} = 1 gives ∑ ${r}(${r} − 1)${Cs(r)} = ${n}(${n} − 1)2<sup>${n}−2</sup>; ${r}<sup>2</sup> = ${r}(${r} − 1) + ${r} adds ${n}2<sup>${n}−1</sup> to reach ${n}(${n} + 1)2<sup>${n}−2</sup>`,
    why: `${Cs('1')} + 2${Cs('2')} + ⋯ + 10${Cs('10')} for (1 + ${x})<sup>10</sup> = 10 · 2<sup>9</sup> = 5120; ∑ ${r}<sup>2</sup>${Cs(r)} for ${n} = 5 is 5 · 6 · 2<sup>3</sup> = 240.`,
    say: null,
  },
  // pp. 604–605, 607–608
  {
    topic: 3,
    kind: 'remember',
    q: `How are ∑ ${fr(Cs(r), `${r} + 1`)} and its alternating version obtained?`,
    a: `Integration divides the ${x}<sup>${r}</sup> term by ${r} + 1. ∫<sub>0</sub><sup>1</sup> ${X1} <i>dx</i> gives ${SUM(`${r}=0`, n)} ${fr(Cs(r), `${r} + 1`)} = ${fr(`2<sup>${n}+1</sup> − 1`, `${n} + 1`)}; integrating over [−1, 0] gives ${SUM(`${r}=0`, n)} ${fr(`(−1)<sup>${r}</sup>${Cs(r)}`, `${r} + 1`)} = ${fr('1', `${n} + 1`)}. Related: ${fr(Cs(r), `${r} + 1`)} = ${fr('1', `${n} + 1`)} ${C(`${n}+1`, `${r}+1`)}, ${r} · ${nCr} = ${n} · ${C(`${n}−1`, `${r}−1`)} (1 ≤ ${r} ≤ ${n}), ${fr(Cs(r), Cs(`${r}−1`))} = ${fr(`${n} − ${r} + 1`, r)}`,
    why: `${n} = 5: ${Cs('0')} + ${fr(Cs('1'), '2')} + ⋯ + ${fr(Cs('5'), '6')} = ${fr('63', '6')} = ${fr('21', '2')}; ${n} = 6 gives ${fr('127', '7')}.`,
    say: null,
  },
  // pp. 604–606, 608
  {
    topic: 3,
    kind: 'remember',
    q: `Why is ${Cs('0')}<sup>2</sup> + ${Cs('1')}<sup>2</sup> + ⋯ + ${Cs(n)}<sup>2</sup> = ${C2n}?`,
    a: `Multiply two expansions and compare one coefficient: in (1 + ${x})<sup>${n}</sup>(1 + ${x})<sup>${n}</sup> = (1 + ${x})<sup>2${n}</sup>, the coefficient of ${x}<sup>${n}</sup> on the left is ∑ ${Cs(r)}${Cs(`${n}−${r}`)} = ∑ ${Cs(r)}<sup>2</sup> (symmetry), on the right ${C2n}. The same move gives ${SUM(`${r}=0`, `${n}−${k}`)} ${Cs(r)}${Cs(`${r}+${k}`)} = ${C(`2${n}`, `${n}−${k}`)} and Vandermonde’s identity ∑<sub>${k}</sub> ${C(m, k)} ${C(n, `${p}−${k}`)} = ${C(`${m}+${n}`, p)}`,
    why: `${n} = 4: 1 + 16 + 36 + 16 + 1 = 70 = ${C('8', '4')}; ${n} = 6 gives ${C('12', '6')} = 924.`,
    say: null,
  },
  // pp. 606–607
  {
    topic: 3,
    kind: 'mixup',
    q: `Is ∑ ${Cs(r)}<sup>2</sup> the same as (∑ ${Cs(r)})<sup>2</sup>?`,
    a: `No. The sum of squares is ${C2n}; the square of the sum is (2<sup>${n}</sup>)<sup>2</sup> = 2<sup>2${n}</sup> = 4<sup>${n}</sup>. 2<sup>${n}−1</sup> is the even-indexed half-sum, and ${C(`2${n}`, `${n}−1`)} the central coefficient’s neighbour`,
    why: `${n} = 4: ∑ ${Cs(r)}<sup>2</sup> = 70, but (∑ ${Cs(r)})<sup>2</sup> = 16<sup>2</sup> = 256.`,
    say: null,
  },
  // pp. 606–607
  {
    topic: 3,
    kind: 'mistake',
    q: `Is ${Cs('1')} + 2${Cs('2')} + 3${Cs('3')} + ⋯ + ${n}${Cs(n)} equal to ${n}2<sup>${n}</sup>?`,
    a: `No: ${n}2<sup>${n}−1</sup>. Differentiating drops the exponent: ${fr('<i>d</i>', '<i>dx</i>')}(1 + ${x})<sup>${n}</sup> = ${n}(1 + ${x})<sup>${n}−1</sup>. 2<sup>${n}</sup> ignores the weights. The other listed slips: wrong limits of integration (∫<sub>0</sub><sup>1</sup> for the plain sum, ∫<sub>−1</sub><sup>0</sup> for the alternating one; mixing them flips the answer), and forgetting that after differentiating the sum runs from ${r} = 1`,
    why: `${Cs('0')} − ${fr(Cs('1'), '2')} + ⋯ + ${fr(`(−1)<sup>${n}</sup>${Cs(n)}`, `${n} + 1`)} = ${fr('1', `${n} + 1`)}, not 0 (the alternating coefficient sum) or ${fr(`2<sup>${n}+1</sup> − 1`, `${n} + 1`)} (the non-alternating integral).`,
    say: null,
  },
  // p. 607
  {
    topic: 3,
    kind: 'shortcut',
    q: 'Faced with a coefficient sum, how do you choose the tool?',
    a: `Read the weights. Constant weights: substitute ${x} = ±1. Weights ${r} (or ${r}<sup>2</sup>): differentiate. Weights ${fr('1', `${r} + 1`)}: integrate. Squared or product coefficients: multiply two expansions and compare one coefficient`,
    why: `${SUM(`${r}=0`, '12')} ${r}${Cs(r)} for (1 + ${x})<sup>12</sup>: index weights, so 12 · 2<sup>11</sup> = 24576.`,
    say: null,
  },

  // ── Topic 05 · Binomial Theorem for Any Index and Approximations ──
  // pp. 609–610, 613
  {
    topic: 4,
    kind: 'remember',
    q: `What is ${X1} when ${n} is negative or fractional, and when may you use it?`,
    a: `1 + <i>nx</i> + ${fr(`${n}(${n} − 1)`, '2!')}${x}<sup>2</sup> + ${fr(`${n}(${n} − 1)(${n} − 2)`, '3!')}${x}<sup>3</sup> + ⋯, general term ${T(`${r}+1`)} = ${fr(`${n}(${n} − 1) ⋯ (${n} − ${r} + 1)`, `${r}!`)}${x}<sup>${r}</sup>, ${r} = 0, 1, 2, …. For a positive integer ${n} the product reaches the factor (${n} − ${n}) = 0 and the series stops at ${r} = ${n}; otherwise it never stops. The chapter uses the series for |${x}| < 1, where the infinite series converges to ${X1}; for |${x}| > 1 the terms grow without bound and the “expansion” is meaningless. There is no ${nCr} here: ${nCr} is undefined for negative or fractional ${n}`,
    why: `(1 + ${x})<sup>−2</sup> = 1 + (−2)${x} + ${fr('(−2)(−3)', '2!')}${x}<sup>2</sup> + ⋯ = 1 − 2${x} + 3${x}<sup>2</sup> − 4${x}<sup>3</sup> + ⋯, for |${x}| < 1.`,
    say: 'Non-integer power → infinite series, only if |<i>x</i>| < 1, and never write <sup><i>n</i></sup><i>C</i><sub><i>r</i></sub>.',
  },
  // pp. 610, 613
  {
    topic: 4,
    kind: 'remember',
    q: 'Which special expansions must you know (|x| < 1)?',
    a: `(1 − ${x})<sup>−1</sup> = 1 + ${x} + ${x}<sup>2</sup> + ⋯ (geometric series); (1 + ${x})<sup>−1</sup> = 1 − ${x} + ${x}<sup>2</sup> − ⋯; (1 − ${x})<sup>−2</sup> = 1 + 2${x} + 3${x}<sup>2</sup> + ⋯, general term (${r} + 1)${x}<sup>${r}</sup>; (1 + ${x})<sup>−2</sup> = 1 − 2${x} + 3${x}<sup>2</sup> − ⋯; and (1 − ${x})<sup>−${p}</sup> = ${SUM(`${r}=0`, '∞')} ${C(`${p}+${r}−1`, r)} ${x}<sup>${r}</sup> for ${p} ∈ ℕ`,
    why: `Coefficient of ${x}<sup>4</sup> in (1 − 2${x})<sup>−3</sup>, |${x}| < ${fr('1', '2')}: ${C('6', '4')} · 2<sup>4</sup> = 15 · 16 = 240.`,
    say: null,
  },
  // pp. 609, 611–613
  {
    topic: 4,
    kind: 'remember',
    q: `How do you expand (${a} + ${b})<sup>${n}</sup> for a general ${n}, and how do you approximate?`,
    a: `Factor out the larger term so the bracket starts with 1: (${a} + ${b})<sup>${n}</sup> = ${a}<sup>${n}</sup>(1 + ${fr(b, a)})<sup>${n}</sup>, with |${fr(b, a)}| < 1; apply the series; multiply back by ${a}<sup>${n}</sup>. For small |${x}|, truncate after the linear term, ${X1} ≈ 1 + <i>nx</i>, and keep ${fr(`${n}(${n} − 1)`, '2')}${x}<sup>2</sup> if more accuracy is needed`,
    why: `(255)<sup>1/4</sup> = 4(1 − ${fr('1', '256')})<sup>1/4</sup> ≈ 4(1 − ${fr('1', '4')} · ${fr('1', '256')}) = 4 − ${fr('1', '256')} ≈ 3.99609.`,
    say: null,
  },
  // pp. 612–613
  {
    topic: 4,
    kind: 'mixup',
    q: `What is the coefficient of ${x}<sup>${r}</sup> in (1 − ${x})<sup>−1</sup>, (1 + ${x})<sup>−1</sup> and (1 − ${x})<sup>−2</sup>?`,
    a: `1, (−1)<sup>${r}</sup> and ${r} + 1 respectively. In (1 − ${x})<sup>−2</sup>, ${r} is the coefficient of ${x}<sup>${r}−1</sup>, not of ${x}<sup>${r}</sup>; (1 + ${x})<sup>2</sup> is a finite 3-term expansion`,
    why: `(1 − ${x})<sup>−2</sup> = 1 + 2${x} + 3${x}<sup>2</sup> + ⋯: the coefficient of ${x}<sup>2</sup> is 3.`,
    say: null,
  },
  // pp. 611–613
  {
    topic: 4,
    kind: 'mistake',
    q: `For the coefficient of ${x}<sup>4</sup> in (1 − 2${x})<sup>−3</sup>, can you write ${C('−3', '4')}?`,
    a: `No: ${C('−3', '4')} is undefined. For a negative integer power switch to (1 − ${y})<sup>−${p}</sup> = ∑ ${C(`${p}+${r}−1`, r)}${y}<sup>${r}</sup> with ${y} = 2${x}, and keep the factor 2<sup>4</sup>: ${C('6', '4')} · 16 = 240. The other listed slips: ignoring |${x}| < 1 (arrange the binomial so the smaller part is the ${x}), expanding (${a} + ${b})<sup>${n}</sup> without factoring out the leading term, and stopping at 1 + <i>nx</i> when more precision is asked for`,
    why: `(1.02)<sup>8</sup>: 1 + 8(0.02) = 1.16 to first order, but 1 + 8(0.02) + 28(0.02)<sup>2</sup> = 1.1712 ≈ 1.17.`,
    say: null,
  },
  // pp. 612–613
  {
    topic: 4,
    kind: 'shortcut',
    q: 'How do you sum a numeric series by recognising a binomial expansion?',
    a: `Match the first three terms to 1, <i>ny</i>, ${fr(`${n}(${n} − 1)`, '2')}${y}<sup>2</sup>, and divide the third by the square of the second: ${fr(`${n} − 1`, `2${n}`)} gives ${n}, then <i>ny</i> gives ${y}, and the series sums to (1 + ${y})<sup>${n}</sup>`,
    why: `1 + ${fr('3', '4')} + ${fr('3 · 5', '4 · 8')} + ⋯: ${fr(`${n} − 1`, `2${n}`)} = ${fr('5', '6')}, so ${n} = −${fr('3', '2')}, ${y} = −${fr('1', '2')}, and the sum is (${fr('1', '2')})<sup>−3/2</sup> = 2√2.`,
    say: null,
  },

  // ── Topic 06 · Applications: Divisibility, Remainders, Last Digits & Integral/Fractional Parts ──
  // pp. 614–616, 618
  {
    topic: 5,
    kind: 'remember',
    q: `How do you find the remainder of ${a}<sup>${n}</sup> on division by ${m}?`,
    a: `Write ${a}, or a convenient power of ${a}, as ${K} ± 1 with ${K} a multiple of ${m} (of ${m}<sup>2</sup> for last-two-digit work). Expand (${K} ± 1)<sup>${n}</sup> = ${SUM(`${r}=0`, n)} ${nCr}${K}<sup>${r}</sup>(±1)<sup>${n}−${r}</sup>; every term containing ${K} is ≡ 0, so only the low-order terms survive. Adjust the leftover to the range 0 to ${m} − 1`,
    why: `7<sup>103</sup> = 7(7<sup>2</sup>)<sup>51</sup> = 7(50 − 1)<sup>51</sup> ≡ 7(−1) = −7 ≡ 18 (mod 25).`,
    say: 'Make the divisor appear inside the bracket, then everything with it disappears.',
  },
  // pp. 614–616, 618
  {
    topic: 5,
    kind: 'remember',
    q: 'What are the last two digits of a power, and which consequences of the expansion help?',
    a: `Last two digits = the value mod 100 (last digit = mod 10). Choose ${K} a multiple of 100, or arrange that ${K}<sup>2</sup> is, and keep terms until they become divisible by 100: (1 + ${K})<sup>${n}</sup> = 1 + <i>nK</i> + ${C(n, '2')}${K}<sup>2</sup> + ⋯, so (1 + ${K})<sup>${n}</sup> ≡ 1 + <i>nK</i> (mod ${K}<sup>2</sup>). For integers, ${a}<sup>${n}</sup> − 1 is divisible by ${a} − 1, and ${a}<sup>${n}</sup> − ${b}<sup>${n}</sup> by ${a} − ${b}`,
    why: `3<sup>400</sup> = 81<sup>100</sup> = (80 + 1)<sup>100</sup>: ${C('100', '1')} · 80 = 8000 and 80<sup>2</sup> are ≡ 0 (mod 100), so the last two digits are 01.`,
    say: null,
  },
  // pp. 614–616, 618
  {
    topic: 5,
    kind: 'remember',
    q: `If (${p} + √${q})<sup>${n}</sup> = ${I} + ${f} with ${I} an integer and 0 ≤ ${f} < 1, how do you find ${I} and ${f}?`,
    a: `For ${q} > 0 not a perfect square, take the conjugate ${f}′ = (${p} − √${q})<sup>${n}</sup> and first check 0 < ${p} − √${q} < 1, so 0 < ${f}′ < 1. Adding the two expansions cancels every odd power of √${q}, so ${I} + ${f} + ${f}′ is an integer; ${f} + ${f}′ lies in (0, 2), so ${f}′ = 1 − ${f}. Then (${I} + ${f})${f}′ = (${p}<sup>2</sup> − ${q})<sup>${n}</sup>. (If the conjugate is (√${q} − ${p})<sup>${n}</sup> with ${n} odd, subtract instead: ${f}′ = ${f}.)`,
    why: `(7 + 4√3)<sup>${n}</sup> = ${I} + ${f}: 7 − 4√3 ≈ 0.072, so (${I} + ${f})(1 − ${f}) = (49 − 48)<sup>${n}</sup> = 1.`,
    say: null,
  },
  // p. 617
  {
    topic: 5,
    kind: 'mixup',
    q: `Which always divides ${a}<sup>${n}</sup> − ${b}<sup>${n}</sup>: ${a} − ${b} or ${a} + ${b}?`,
    a: `${a} − ${b}, for every ${n}: write ${a} = ${b} + (${a} − ${b}) and expand, and every surviving term carries (${a} − ${b}). As a polynomial, ${a} + ${b} divides ${a}<sup>${n}</sup> − ${b}<sup>${n}</sup> only for even ${n}; for particular integers it can still divide for an odd ${n}`,
    why: `6<sup>3</sup> − 2<sup>3</sup> = 208 = 8 · 26: 6 + 2 divides it although 3 is odd.`,
    say: null,
  },
  // pp. 617–618
  {
    topic: 5,
    kind: 'mistake',
    q: `For (3 + √8)<sup>${n}</sup> = ${I} + ${f}, is the conjugate (√8 − 3)<sup>${n}</sup>?`,
    a: `No: (3 − √8)<sup>${n}</sup>, with 0 < 3 − √8 < 1 (√8 ≈ 2.83), so it equals 1 − ${f}. (√8 − 3)<sup>${n}</sup> is negative for odd ${n}. The other listed slips: a split that does not expose the modulus, stopping the reduction while a ${K}-term remains, leaving a negative remainder (−7 mod 25 is 18), and skipping the 0 < ${p} − √${q} < 1 check`,
    why: `(101)<sup>50</sup> = (100 + 1)<sup>50</sup> ≡ 1 (mod 100); 50 misreads ${C('50', '1')} · 100.`,
    say: null,
  },
  // p. 618
  {
    topic: 5,
    kind: 'shortcut',
    q: `What is the fastest route to 2<sup>50</sup> mod 7?`,
    a: `Find the smallest power of the base that is ≡ ±1 modulo the divisor: it sets a short cycle, and the exponent reduced modulo that cycle gives the answer. 2<sup>3</sup> = 8 ≡ 1 (mod 7), so 2<sup>50</sup> = 2<sup>48</sup> · 2<sup>2</sup> ≡ 4`,
    why: `15<sup>40</sup> mod 11: 15 ≡ 4 and 4<sup>5</sup> = 1024 ≡ 1, so 4<sup>40</sup> = (4<sup>5</sup>)<sup>8</sup> ≡ 1; 7<sup>300</sup> ends in 1, since 7<sup>4</sup> ≡ 1 (mod 10).`,
    say: null,
  },

  // ── Topic 07 · The Multinomial Theorem ──
  // pp. 619–621, 623
  {
    topic: 6,
    kind: 'remember',
    q: `What is the coefficient of ${x}<sub>1</sub><sup>${n}₁</sup> ⋯ ${x}<sub>${k}</sub><sup>${n}ₖ</sup> in (${x}<sub>1</sub> + ⋯ + ${x}<sub>${k}</sub>)<sup>${n}</sup>, and why?`,
    a: `${fr(`${n}!`, `${n}<sub>1</sub>! ${n}<sub>2</sub>! ⋯ ${n}<sub>${k}</sub>!`)}, for non-negative integers with ${n}<sub>1</sub> + ⋯ + ${n}<sub>${k}</sub> = ${n} (${n} ∈ ℕ); otherwise the coefficient is 0. Each of the ${n} brackets donates one ${x}<sub>${i}</sub>, and the count of ways to split the brackets into labelled groups of sizes ${n}<sub>1</sub>, …, ${n}<sub>${k}</sub> is that multiset count. With two parts it is ${fr(`${n}!`, `${r}!(${n} − ${r})!`)} = ${nCr}: the binomial theorem is the case ${k} = 2`,
    why: `${x}<sup>2</sup>${y}<sup>3</sup><i>z</i><sup>4</sup> in (${x} + ${y} + <i>z</i>)<sup>9</sup>: 2 + 3 + 4 = 9, so ${fr('9!', '2! 3! 4!')} = 1260.`,
    say: 'Spread <i>n</i> choices over <i>k</i> boxes: coefficient is <i>n</i>! over the factorials of the box-sizes.',
  },
  // pp. 620–621, 623
  {
    topic: 6,
    kind: 'remember',
    q: `How many distinct terms has (${x}<sub>1</sub> + ⋯ + ${x}<sub>${k}</sub>)<sup>${n}</sup>, and what is the sum of all its coefficients?`,
    a: `A term is fixed by its exponents, a non-negative solution of ${n}<sub>1</sub> + ⋯ + ${n}<sub>${k}</sub> = ${n}: by stars and bars, ${C(`${n}+${k}−1`, `${k}−1`)} terms; a trinomial has ${C(`${n}+2`, '2')} = ${fr(`(${n} + 1)(${n} + 2)`, '2')}. The count assumes independent variables: a hidden relation (a perfect-power bracket) merges terms. Sum of all coefficients: set every variable to 1, ${k}<sup>${n}</sup>`,
    why: `(${a} + ${b} + <i>c</i>)<sup>12</sup>: ${C('14', '2')} = 91 terms; (2${x} − 3${y} + <i>z</i>)<sup>8</sup>: coefficients sum to (2 − 3 + 1)<sup>8</sup> = 0.`,
    say: null,
  },
  // pp. 621–622
  {
    topic: 6,
    kind: 'remember',
    q: `How do you find the coefficient of ${x}<sup>4</sup> in (1 + ${x} + ${x}<sup>2</sup>)<sup>3</sup> directly?`,
    a: `Choose exponents ${n}<sub>1</sub>, ${n}<sub>2</sub>, ${n}<sub>3</sub> for 1, ${x}, ${x}<sup>2</sup> with ${n}<sub>1</sub> + ${n}<sub>2</sub> + ${n}<sub>3</sub> = 3 and total power ${n}<sub>2</sub> + 2${n}<sub>3</sub> = 4: (0, 2, 1) and (1, 0, 2). Add their multinomial coefficients: ${fr('3!', '0! 2! 1!')} + ${fr('3!', '1! 0! 2!')} = 3 + 3 = 6`,
    why: `Check: (1 + ${x} + ${x}<sup>2</sup>)<sup>3</sup> = 1 + 3${x} + 6${x}<sup>2</sup> + 7${x}<sup>3</sup> + 6${x}<sup>4</sup> + 3${x}<sup>5</sup> + ${x}<sup>6</sup>.`,
    say: null,
  },
  // pp. 622–623
  {
    topic: 6,
    kind: 'mixup',
    q: `(${x} + ${y} + <i>z</i>)<sup>${n}</sup>: ${C(`${n}+2`, '2')} or 3<sup>${n}</sup>?`,
    a: `${C(`${n}+2`, '2')} is the number of terms; 3<sup>${n}</sup> is the sum of the coefficients (put ${x} = ${y} = <i>z</i> = 1). Different questions. ${n} + 1 is the binomial count, and 2<sup>${n}</sup> the binomial sum`,
    why: `(${a} + ${b} + <i>c</i>)<sup>2</sup> has ${C('4', '2')} = 6 terms and coefficients summing to 9.`,
    say: null,
  },
  // pp. 622–623
  {
    topic: 6,
    kind: 'mistake',
    q: `Is the coefficient of <i>xyz</i> in (${x} + ${y} + <i>z</i>)<sup>3</sup> equal to ${C('3', '1')} = 3?`,
    a: `No: ${fr('3!', '1! 1! 1!')} = 6. With three or more variables the coefficient is the full multinomial ${fr(`${n}!`, `${a}! ${b}! <i>c</i>!`)}, never a single ${nCr}. The other listed slips: skipping the sum-to-${n} check (a monomial’s coefficient is 0 unless its exponents add to exactly ${n}), confusing the term count with the coefficient sum, and missing a hidden relation that merges terms`,
    why: `${x}<sup>2</sup>${y}<sup>2</sup><i>z</i><sup>2</sup> has a non-zero coefficient in (${x} + ${y} + <i>z</i>)<sup>${n}</sup> only for ${n} = 6.`,
    say: null,
  },
  // pp. 621–623
  {
    topic: 6,
    kind: 'shortcut',
    q: `How do you get the coefficient of ${x}<sup>${m}</sup> in (1 + ${x} + ⋯ + ${x}<sup><i>t</i></sup>)<sup>${k}</sup> without collecting terms?`,
    a: `Write the bracket as ${fr(`1 − ${x}<sup><i>t</i>+1</sup>`, `1 − ${x}`)} and pair (1 − ${x}<sup><i>t</i>+1</sup>)<sup>${k}</sup> with the any-index expansion of (1 − ${x})<sup>−${k}</sup>: two clean binomial-coefficient lookups`,
    why: `${x}<sup>5</sup> in (1 + ${x} + ${x}<sup>2</sup> + ${x}<sup>3</sup>)<sup>4</sup> = (1 − ${x}<sup>4</sup>)<sup>4</sup>(1 − ${x})<sup>−4</sup>: ${C('8', '3')} − 4 · ${C('4', '3')} = 56 − 16 = 40.`,
    say: null,
  },

  // ── Topic 08 · Multisection of Binomial Series: Roots of Unity and Complex Substitution ──
  // pp. 646, 648, 652, 657
  {
    topic: 7,
    kind: 'remember',
    q: `What does substituting a value other than ±1 into ${X1} give?`,
    a: `A polynomial identity holds at every point, so for any number ${y} and ${n} ∈ ℕ, ${SUM(`${r}=0`, n)} ${nCr} ${y}<sup>${r}</sup> = (1 + ${y})<sup>${n}</sup>: a weight ${y}<sup>${r}</sup> on ${Cs(r)} means set the dial to ${x} = ${y}. So ∑ 3<sup>${r}</sup>${nCr} = 4<sup>${n}</sup>, ∑ 2<sup>${r}</sup>${nCr} = 3<sup>${n}</sup>, ∑ (−2)<sup>${r}</sup>${nCr} = (−1)<sup>${n}</sup>`,
    why: `${n} = 5: 1 + 15 + 90 + 270 + 405 + 243 = 1024 = 4<sup>5</sup>; ∑ 2<sup>${r}</sup>${C('6', r)} = 3<sup>6</sup> = 729.`,
    say: 'Period 2 is −1, period 3 is <i>ω</i>, period 4 is <i>i</i>.',
  },
  // pp. 648–650, 657
  {
    topic: 7,
    kind: 'remember',
    q: 'What is the root-of-unity filter, and what multisection formula does it give?',
    a: `For a primitive ${k}th root of unity <i>ω</i><sub>${k}</sub> and any integer ${m}, ${fr('1', k)} ${SUM(`<i>j</i>=0`, `${k}−1`)} <i>ω</i><sub>${k}</sub><sup><i>jm</i></sup> = 1 if ${k} ∣ ${m}, 0 if ${k} ∤ ${m} (for ${k} ∤ ${m} it is a geometric progression with ratio <i>ω</i><sub>${k}</sub><sup>${m}</sup> ≠ 1, summing to 0). Substituting ${x} = <i>ω</i><sub>${k}</sub><sup><i>j</i></sup>, weighting by <i>ω</i><sub>${k}</sub><sup>−<i>ja</i></sup>, adding and dividing by ${k}: ∑<sub>${r}≡${a} (mod ${k})</sub> ${nCr} = ${fr('1', k)} ${SUM(`<i>j</i>=0`, `${k}−1`)} <i>ω</i><sub>${k}</sub><sup>−<i>ja</i></sup>(1 + <i>ω</i><sub>${k}</sub><sup><i>j</i></sup>)<sup>${n}</sup>, 0 ≤ ${a} ≤ ${k} − 1. It needs a genuine polynomial: ${n} ∈ ℕ`,
    why: `Selecting ${Cs('0')} + ${Cs('4')} + ${Cs('8')} + ⋯ needs all four of ${x} = 1, ${i}, −1, −${i}; ${x} = 1, −1 alone only separates even from odd.`,
    say: 'Divide by <i>k</i>, not by 2.',
  },
  // pp. 646, 648–651, 657
  {
    topic: 7,
    kind: 'remember',
    q: `What is ${Cs('0')} + ${Cs('3')} + ${Cs('6')} + ⋯, and where does it come from?`,
    a: `Substitute ${x} = 1, ${om}, ${om}<sup>2</sup> and add: 1 + ${om}<sup>${r}</sup> + ${om}<sup>2${r}</sup> is 3 when 3 ∣ ${r} and 0 otherwise, so the sum of the three substitutions keeps every third coefficient, tripled, and dividing by 3 keeps it once: ${fr('1', '3')}[2<sup>${n}</sup> + (1 + ${om})<sup>${n}</sup> + (1 + ${om}<sup>2</sup>)<sup>${n}</sup>]. With 1 + ${om} = <i>e</i><sup><i>iπ</i>/3</sup> and 1 + ${om}<sup>2</sup> = <i>e</i><sup>−<i>iπ</i>/3</sup>: ${fr('1', '3')}[2<sup>${n}</sup> + 2 cos ${fr(`${n}π`, '3')}]. In general ${Cs(a)} + ${Cs(`${a}+3`)} + ⋯ = ${fr('1', '3')}[2<sup>${n}</sup> + 2 cos ${fr(`(${n} − 2${a})π`, '3')}], and the three sums add to 2<sup>${n}</sup>`,
    why: `(1 + ${x})<sup>10</sup>: ${fr('1', '3')}[1024 + 2 cos ${fr('4π', '3')}] = ${fr('1023', '3')} = 341 = 1 + 120 + 210 + 10.`,
    say: null,
  },
  // pp. 649–651, 653, 657
  {
    topic: 7,
    kind: 'remember',
    q: `What do ${Cs('0')} − ${Cs('2')} + ${Cs('4')} − ⋯ and ${Cs('1')} − ${Cs('3')} + ${Cs('5')} − ⋯ equal?`,
    a: `Substitute ${x} = ${i}, whose powers cycle 1, ${i}, −1, −${i}: (1 + ${i})<sup>${n}</sup> = ∑ ${Cs(r)}${i}<sup>${r}</sup>, and since the ${Cs(r)} are real, the even-indexed alternating sum is Re[(1 + ${i})<sup>${n}</sup>] = 2<sup>${n}/2</sup> cos ${fr(`${n}π`, '4')} and the odd-indexed one is Im[(1 + ${i})<sup>${n}</sup>] = 2<sup>${n}/2</sup> sin ${fr(`${n}π`, '4')}. Adding all four fourth roots: ${Cs('0')} + ${Cs('4')} + ${Cs('8')} + ⋯ = ${fr('1', '2')}[2<sup>${n}−1</sup> + 2<sup>${n}/2</sup> cos ${fr(`${n}π`, '4')}] for ${n} ≥ 1 (it uses (1 − 1)<sup>${n}</sup> = 0)`,
    why: `(1 + ${x})<sup>12</sup>: ${fr('1', '2')}[2048 + 64 cos 3π] = ${fr('1984', '2')} = 992 = 1 + 495 + 495 + 1.`,
    say: null,
  },
  // pp. 653, 656
  {
    topic: 7,
    kind: 'mixup',
    q: `${Cs('0')} − ${Cs('2')} + ${Cs('4')} − ${Cs('6')} + ${Cs('8')} for (1 + ${x})<sup>8</sup>: is it 0 or 128?`,
    a: `Neither: 16. The signs change once every two indices, a period-4 pattern, so it needs ${x} = ${i}: (1 + ${i})<sup>8</sup> = (2${i})<sup>4</sup> = 16, real part 16. 0 is the alternating sum of all coefficients (${x} = −1, period 2); 128 = 2<sup>7</sup> is the plain even-index sum, a true identity for the wrong sum. Count the indices between sign changes: one means ${x} = −1, two means ${x} = ${i}; every third coefficient means ${om}`,
    why: `Direct check: 1 − 28 + 70 − 28 + 1 = 16.`,
    say: null,
  },
  // pp. 655–656
  {
    topic: 7,
    kind: 'mistake',
    q: `Is (1 + ${om})<sup>${n}</sup> + (1 + ${om}<sup>2</sup>)<sup>${n}</sup> equal to 0, since 1 + ${om} = 0?`,
    a: `No: 1 + ${om} ≠ 0. The identity that vanishes is 1 + ${om} + ${om}<sup>2</sup> = 0, so 1 + ${om} = −${om}<sup>2</sup> = <i>e</i><sup><i>iπ</i>/3</sup> and 1 + ${om}<sup>2</sup> = −${om} = <i>e</i><sup>−<i>iπ</i>/3</sup>, both of modulus 1, and the sum is 2 cos ${fr(`${n}π`, '3')}. 2<sup>${n}</sup> is (1 + 1)<sup>${n}</sup>, the ${x} = 1 term of the filter, not the ${x} = ${om} and ${x} = ${om}<sup>2</sup> terms; −1 is ${om}<sup>${n}</sup> + ${om}<sup>2${n}</sup> for 3 ∤ ${n}`,
    why: `${om}<sup>3</sup> = 1 and ${om}<sup>2</sup> is the conjugate of ${om}, so (1 + ${om})<sup>3</sup> = −1.`,
    say: '1 + <i>ω</i> ≠ 0; it is −<i>ω</i><sup>2</sup>.',
  },
  // pp. 655–656
  {
    topic: 7,
    kind: 'mistake',
    q: `For (1 + ${x})<sup>12</sup>, is ${Cs('0')} + ${Cs('3')} + ⋯ + ${Cs('12')} = ${fr('1', '3')}(4096 − 1) = 1365?`,
    a: `No: 1366. ${fr(`12π`, '3')} = 4π reduces to cos 4π = 1, so ${fr('1', '3')}[4096 + 2] = 1366; the correction depends on ${n} mod 6 and cannot be memorised as one number. Reduce every angle modulo 2π first (cos ${fr('10π', '3')} = cos ${fr('4π', '3')} = −${fr('1', '2')}). The other listed slips: dividing by 2 instead of ${k}; an ${i} left in the answer (these are sums of integers, so real); forgetting that (1 − 1)<sup>${n}</sup> = 0 only for ${n} ≥ 1; and applying multisection to the any-index series, where |${om}| = |${i}| = 1 breaks the convergence condition`,
    why: `Direct check: 1 + 220 + 924 + 220 + 1 = 1366.`,
    say: null,
  },
  // pp. 654, 656
  {
    topic: 7,
    kind: 'shortcut',
    q: 'How do you check, or shorten, a set of period-k sums?',
    a: `The ${k} residue-class sums partition all the coefficients, so they add to 2<sup>${n}</sup>: compute ${k} − 1 of them and get the last by subtraction. For ${k} = 3, each sum is within ${fr('2', '3')} of ${fr(`2<sup>${n}</sup>`, '3')}, so it is one of the two integers straddling ${fr(`2<sup>${n}</sup>`, '3')}. For even ${n}, (1 + ${i})<sup>${n}</sup> = (2${i})<sup>${n}/2</sup> needs no trigonometry`,
    why: `${n} = 10: ${fr('1024', '3')} = 341.33, so the three sums are 341, 341 and 342 (total 1024).`,
    say: 'The <i>k</i> pieces must rebuild 2<sup><i>n</i></sup>.',
  },
  // pp. 654, 656
  {
    topic: 7,
    kind: 'shortcut',
    q: 'How many subsets of {1, 2, …, 9} have a size divisible by 3 (the empty set included)?',
    a: `170. A count restricted by a remainder condition on the size is a multisection question in disguise: ${C('9', '0')} + ${C('9', '3')} + ${C('9', '6')} + ${C('9', '9')} = ${fr('1', '3')}[2<sup>9</sup> + 2 cos 3π] = ${fr('510', '3')}`,
    why: `Directly: 1 + 84 + 84 + 1 = 170.`,
    say: null,
  },

  // ── Additional topic A · Conjugate-Pair Expansions and Exact Evaluation ──
  // pp. 625, 627–628, 631
  {
    topic: 8,
    kind: 'remember',
    q: `What survives in ${AB} + (${a} − ${b})<sup>${n}</sup>, and in ${AB} − (${a} − ${b})<sup>${n}</sup>?`,
    a: `The two lists of terms differ only in the sign of every odd-${r} term. So the sum keeps exactly the even ${r} (including ${r} = 0), doubled: 2[${C(n, '0')}${a}<sup>${n}</sup> + ${C(n, '2')}${a}<sup>${n}−2</sup>${b}<sup>2</sup> + ⋯]; the difference keeps exactly the odd ${r}, doubled: 2[${C(n, '1')}${a}<sup>${n}−1</sup>${b} + ${C(n, '3')}${a}<sup>${n}−3</sup>${b}<sup>3</sup> + ⋯] (${n} ∈ ℕ). The kept terms are doubled, not merely kept`,
    why: `(${a} + ${b})<sup>4</sup> − (${a} − ${b})<sup>4</sup> = 2[4${a}<sup>3</sup>${b} + 4<i>ab</i><sup>3</sup>] = 8<i>ab</i>(${a}<sup>2</sup> + ${b}<sup>2</sup>), so (√3 + √2)<sup>4</sup> − (√3 − √2)<sup>4</sup> = 8√6(5) = 40√6.`,
    say: 'Add and the odd ones go.',
  },
  // pp. 625, 628–629, 631
  {
    topic: 8,
    kind: 'remember',
    q: `How many terms have (${x} + ${a})<sup>${n}</sup> + (${x} − ${a})<sup>${n}</sup> and (${x} + ${a})<sup>${n}</sup> − (${x} − ${a})<sup>${n}</sup>?`,
    a: `Sum: ⌊${fr(n, '2')}⌋ + 1 (${fr(n, '2')} + 1 for even ${n}, ${fr(`${n} + 1`, '2')} for odd ${n}). Difference: ⌈${fr(n, '2')}⌉ (${fr(n, '2')} for even ${n}, ${fr(`${n} + 1`, '2')} for odd ${n}). The two counts always add to ${n} + 1, the instant check (${x} ≠ 0, ${a} ≠ 0, ${n} ∈ ℕ)`,
    why: `${n} = 100: the sum keeps ${r} = 0, 2, …, 100 (51 terms), the difference ${r} = 1, 3, …, 99 (50 terms), and 51 + 50 = 101.`,
    say: 'Counts must add to <i>n</i> + 1.',
  },
  // pp. 625, 631
  {
    topic: 8,
    kind: 'remember',
    q: `With ${a} = √${p}, ${b} = √${q} (${p}, ${q} positive rationals), what shape does a conjugate sum or difference have?`,
    a: `Always a rational number or (a rational number) × (a single surd): every kept ${b}<sup>${r}</sup> is rational in the sum (${r} even) and carries exactly one √${q} in the difference (${r} odd), and the parity of ${n} − ${r} decides the ${a} side. The sum is rational when ${n} is even, or whenever the first part is rational; for odd ${n} with a surd first part it is a rational multiple of that surd. The difference is a rational multiple of one surd`,
    why: `(√2 + 1)<sup>6</sup> + (√2 − 1)<sup>6</sup> = 2[8 + 15(4) + 15(2) + 1] = 198, a whole number; but (√3 + √2)<sup>1</sup> + (√3 − √2)<sup>1</sup> = 2√3.`,
    say: null,
  },
  // pp. 627–628, 631
  {
    topic: 8,
    kind: 'remember',
    q: 'How do you settle “which is larger” and exact-power questions with a binomial expansion?',
    a: `The truncation bound: for ${x} > 0 and ${n} ≥ 2 every term of ${X1} after the first two is positive, so ${X1} > 1 + <i>nx</i>. For an exact power, split the base against the nearest round number (102 = 100 + 2, 99 = 100 − 1), write every term, and line the digits up by place value; signs alternate when the split is a subtraction`,
    why: `(1.1)<sup>10000</sup> > 1 + 10000(0.1) = 1001 > 1000; (102)<sup>5</sup> = 11040808032.`,
    say: null,
  },
  // pp. 629–631
  {
    topic: 8,
    kind: 'mixup',
    q: `(√3 + √2)<sup>4</sup> + (√3 − √2)<sup>4</sup> or (√3 + √2)<sup>4</sup> − (√3 − √2)<sup>4</sup>: which is 98 and which 40√6?`,
    a: `The sum is 98 = 2(9 + 36 + 4), from the even ${r}: rational. The difference is 40√6, from the odd ${r}: one surd. Adding kills the odd-${r} terms; subtracting kills the even-${r} terms`,
    why: `0 is the answer of a student who thinks conjugates always annihilate completely; only half the terms do.`,
    say: null,
  },
  // pp. 630–631
  {
    topic: 8,
    kind: 'mistake',
    q: `Is (√5 + √2)<sup>4</sup> + (√5 − √2)<sup>4</sup> equal to 89?`,
    a: `No: 178. The sum keeps ${r} = 0, 2, 4 doubled, 2[25 + 6(10) + 4] = 2(89); 89 drops the factor 2. 89 + 28√10 is one bracket alone, and 56√10 keeps the odd indices. The other listed slips: keeping the wrong half, counting terms as ${fr(`${n} + 1`, '2')} for even ${n}, expanding both brackets in full, and losing the ${r} = 0 term ${C(n, '0')}${a}<sup>${n}</sup>`,
    why: `(${x} + ${a})<sup>47</sup> − (${x} − ${a})<sup>47</sup> has ${fr('47 + 1', '2')} = 24 terms: 23 truncates, 48 forgets the cancellation.`,
    say: 'Keep half, double it.',
  },
  // pp. 629, 631
  {
    topic: 8,
    kind: 'shortcut',
    q: `What is the integral part of (2 + √3)<sup>5</sup>?`,
    a: `723. Write the conjugate sum first: (2 + √3)<sup>5</sup> + (2 − √3)<sup>5</sup> = 2[32 + 240 + 90] = 724. Since 0 < 2 − √3 < 1, 0 < (2 − √3)<sup>5</sup> < 1, so the integer part is 724 − 1. Read the shape before you compute: a mixture like 5 + 3√6 from a conjugate sum means a term that should have cancelled`,
    why: `The fractional part of (2 + √3)<sup>5</sup> is 1 − (2 − √3)<sup>5</sup>.`,
    say: null,
  },

  // ── Additional topic B · Rational and Integral Terms in a Surd Expansion ──
  // pp. 632–634, 639
  {
    topic: 9,
    kind: 'remember',
    q: `When is a term of (${p}<sup>1/<i>α</i></sup> + ${q}<sup>1/<i>β</i></sup>)<sup>${N}</sup> rational (${p}, ${q} distinct primes)?`,
    a: `${T(`${r}+1`)} = ${C(N, r)} ${p}<sup>(${N}−${r})/<i>α</i></sup>${q}<sup>${r}/<i>β</i></sup>, and ${C(N, r)} is an integer, so only the leftover roots can make it irrational. It is rational exactly when both exponents clear at once: ${al} ∣ (${N} − ${r}) and ${be} ∣ ${r}. With positive integer bases it is then a positive integer, so “rational” and “integral” terms are the same count here`,
    why: `(√2 + <sup>5</sup>√3)<sup>10</sup>: ${r} even and 5 ∣ ${r} leave ${r} = 0 and 10, the terms 32 and 9 (sum 41); ${r} = 5 leaves a stray √2.`,
    say: 'Both exponents must clear, or the term is out.',
  },
  // pp. 634, 639
  {
    topic: 9,
    kind: 'remember',
    q: 'How many rational terms are there, and how many irrational?',
    a: `The qualifying ${r} form an arithmetic progression with common difference lcm(${al}, ${be}) starting at the smallest valid <i>r</i><sub>0</sub> ∈ [0, ${N}]: ⌊${fr(`${N} − <i>r</i><sub>0</sub>`, `lcm(${al}, ${be})`)}⌋ + 1 terms, or 0 if no ${r} satisfies both conditions. Irrational terms = (${N} + 1) − rational terms`,
    why: `(3<sup>1/2</sup> + 5<sup>1/8</sup>)<sup>256</sup>: 8 ∣ ${r} already forces ${r} even, so ${r} = 0, 8, …, 256: ${fr('256', '8')} + 1 = 33.`,
    say: 'Endpoints count: remember the +1.',
  },
  // pp. 634, 636–637, 639
  {
    topic: 9,
    kind: 'remember',
    q: `When does the run of qualifying ${r} start at 0, and what do you do when it does not?`,
    a: `If ${al} ∣ ${N}, then ${al} ∣ (${N} − ${r}) ⟺ ${al} ∣ ${r}, the criterion collapses to lcm(${al}, ${be}) ∣ ${r}, and <i>r</i><sub>0</sub> = 0. If ${al} ∤ ${N}, solve the pair ${r} ≡ ${N} (mod ${al}), ${r} ≡ 0 (mod ${be}): the run starts in the middle, or does not exist`,
    why: `(<sup>8</sup>√5 + <sup>6</sup>√2)<sup>100</sup>: ${r} ≡ 4 (mod 8), ${r} ≡ 0 (mod 6) give ${r} = 12, 36, 60, 84, so 4 rational and 101 − 4 = 97 irrational terms.`,
    say: '<i>α</i> ∤ <i>N</i> means the run does not start at zero.',
  },
  // p. 638
  {
    topic: 9,
    kind: 'mixup',
    q: `The rationality condition: ${al} ∣ (${N} − ${r}) and ${be} ∣ ${r}, or lcm(${al}, ${be}) ∣ ${r}, or ${al}${be} ∣ ${r}?`,
    a: `${al} ∣ (${N} − ${r}) and ${be} ∣ ${r}, the exponent of ${p} being ${fr(`${N} − ${r}`, al)} and of ${q} being ${fr(r, be)}. lcm(${al}, ${be}) ∣ ${r} is equivalent to it only when ${al} ∣ ${N}; ${al}${be} ∣ ${r} discards genuine rational terms when ${al} and ${be} share a factor, and when ${al} ∤ ${N} it keeps only irrational ones; swapping the two root orders changes the answer whenever ${al} ≠ ${be}`,
    why: `(<sup>8</sup>√5 + <sup>6</sup>√2)<sup>100</sup>: lcm(8, 6) = 24 ∣ ${r} would give ${r} = 0, 24, 48, 72, 96, none of which qualifies.`,
    say: null,
  },
  // pp. 636–638
  {
    topic: 9,
    kind: 'mistake',
    q: `How many rational terms has (√3 + <sup>4</sup>√5)<sup>101</sup>: ${fr('100', '4')} + 1 = 26?`,
    a: `None. The √3 part needs 2 ∣ (101 − ${r}), so ${r} odd; the <sup>4</sup>√5 part needs 4 ∣ ${r}, so ${r} even. The conditions are incompatible, so there is no rational term: non-existence is a legitimate answer. The other listed slips: imposing one condition only, the +1 off-by-one, assuming the run starts at 0, and ignoring the distinct-primes hypothesis (bases like 2 and 8 share a prime)`,
    why: `(√3 + <sup>8</sup>√5)<sup>256</sup> has 33 rational terms: 32 forgets ${r} = 0, 129 imposes the √3 condition only, 257 is the total.`,
    say: null,
  },
  // p. 638
  {
    topic: 9,
    kind: 'shortcut',
    q: 'What is the two-line method for any rational-term count?',
    a: `Convert to congruences at once, ${r} ≡ ${N} (mod ${al}) and ${r} ≡ 0 (mod ${be}): it tells you whether any solution exists. Once one qualifying ${r} is found, every other is a multiple of lcm(${al}, ${be}) away: never test values one by one`,
    why: `(<sup>3</sup>√5 + <sup>7</sup>√2)<sup>100</sup>: ${r} ≡ 1 (mod 3), ${r} ≡ 0 (mod 7) give ${r} = 7, 28, 49, 70, 91: 5 integral terms.`,
    say: null,
  },

  // ── Additional topic C · Two-Term Divisibility and the mod K² Formula ──
  // pp. 639–640, 645
  {
    topic: 10,
    kind: 'remember',
    q: `What is (1 + ${K})<sup>${n}</sup> modulo ${K}<sup>2</sup>, and what divisibility follows?`,
    a: `(1 + ${K})<sup>${n}</sup> = 1 + <i>nK</i> + ${K}<sup>2</sup>${SUM(`${r}=2`, n)} ${nCr}${K}<sup>${r}−2</sup>, the sum an integer, so (1 + ${K})<sup>${n}</sup> ≡ 1 + <i>nK</i> (mod ${K}<sup>2</sup>), and ${K}<sup>2</sup> ∣ [(1 + ${K})<sup>${n}</sup> − 1 − <i>nK</i>] for every ${n} ∈ ℕ. The congruence also holds modulo any divisor of ${K}<sup>2</sup>, so match ${K} to the divisor: ${K} = √divisor, or a ${K} whose square is a multiple of the divisor (${K} = 80 for 100)`,
    why: `9<sup>${n}+1</sup> − 8${n} − 9 = (1 + 8)<sup>${n}+1</sup> − 1 − 8(${n} + 1) is divisible by 8<sup>2</sup> = 64.`,
    say: 'Square divisor, two terms.',
  },
  // pp. 640, 645
  {
    topic: 10,
    kind: 'remember',
    q: `How many terms of (1 + ${K})<sup>${n}</sup> do you keep modulo ${K}, ${K}<sup>2</sup> and ${K}<sup>3</sup>?`,
    a: `Modulo ${K}<sup>${m}</sup>, keep the terms up to ${r} = ${m} − 1: one term (1) modulo ${K}, two (1 + <i>nK</i>) modulo ${K}<sup>2</sup>, three (1 + <i>nK</i> + ${C(n, '2')}${K}<sup>2</sup>) modulo ${K}<sup>3</sup>. The guarantee stops at ${K}<sup>2</sup>: at ${n} = 2, (1 + ${K})<sup>2</sup> − 1 − 2${K} = ${K}<sup>2</sup> exactly`,
    why: `4<sup>${n}</sup> − 3${n} − 1 is divisible by 9 and 16<sup>${n}</sup> − 15${n} − 1 by 225 (${K} = 3 and 15).`,
    say: '<i>K</i> is the square root of the divisor, not the divisor.',
  },
  // pp. 640–641, 645
  {
    topic: 10,
    kind: 'remember',
    q: `How do you prove that 9<sup>${n}+1</sup> − 8${n} − 9 is divisible by 64?`,
    a: `Read the divisor: 64 = 8<sup>2</sup>, so ${K} = 8 and 9<sup>${n}+1</sup> = (1 + 8)<sup>${n}+1</sup> = 1 + (${n} + 1)8 + ${SUM(`${r}=2`, `${n}+1`)} ${C(`${n}+1`, r)}8<sup>${r}</sup>. The head 8${n} + 9 cancels the linear part exactly, and every remaining term carries 8<sup>${r}</sup> with ${r} ≥ 2: 9<sup>${n}+1</sup> − 8${n} − 9 = 64${SUM(`${r}=2`, `${n}+1`)} ${C(`${n}+1`, r)}8<sup>${r}−2</sup>. 3<sup>2${n}+2</sup> − 8${n} − 9 is the same expression`,
    why: `${n} = 1: 81 − 8 − 9 = 64; ${n} = 2: 704 = 64 × 11; ${n} = 3: 6528 = 64 × 102.`,
    say: 'The linear part of the expression exists to cancel 1 + <i>nK</i>.',
  },
  // pp. 641–643
  {
    topic: 10,
    kind: 'mixup',
    q: `Is 7<sup>100</sup> ≡ 1 modulo 36, since 7 = 1 + 6?`,
    a: `No: modulo 36 = 6<sup>2</sup> keep two terms, 7<sup>100</sup> ≡ 1 + 100(6) = 601 ≡ 25. Keeping only the first term is right modulo 6 and wrong modulo 36: the linear term ${n}${K} is usually non-zero here`,
    why: `3<sup>2018</sup> = 9(1 + 80)<sup>504</sup> ≡ 9(1 + 40320) ≡ 9 × 21 ≡ 89 (mod 100), using 100 ∣ 80<sup>2</sup>; dropping 504 · 80 gives 9.`,
    say: null,
  },
  // pp. 642, 644–645
  {
    topic: 10,
    kind: 'mistake',
    q: `Is the largest integer dividing 9<sup>${n}+1</sup> − 8${n} − 9 for every ${n} equal to 8?`,
    a: `No: 64. 8 comes from keeping only the leading 1: true but not largest. 64 always divides it, and any universal divisor must divide the value at the smallest ${n} that gives a non-zero value: here ${n} = 1, exactly 64. In the form (1 + ${K})<sup>${n}</sup> − 1 − <i>nK</i> that is ${n} = 2 (${n} = 1 gives 0), where it equals ${K}<sup>2</sup>. 9 fails already at ${n} = 1, and 72 does not divide 64. The other listed slips: ${K} = the divisor instead of its square root, a head that does not cancel, forgetting to multiply back a split-off factor, and claiming ${K}<sup>3</sup>`,
    why: `10<sup>${n}</sup> + 3 · 4<sup>${n}+2</sup> + 5: divisible by 9 for every ${n}, and ${n} = 1, 2 give 207 and 873, whose gcd is 9.`,
    say: null,
  },
  // pp. 644–645
  {
    topic: 10,
    kind: 'shortcut',
    q: 'How do you set up a last-two-digits problem for the two-term formula?',
    a: `Hunt for a power of the base ending in 1: 3<sup>4</sup> = 81, 7<sup>4</sup> = 2401, 9<sup>2</sup> = 81. Each gives a ${K} that is a multiple of 10, so ${K}<sup>2</sup> is a multiple of 100 and (1 + ${K})<sup>${n}</sup> ≡ 1 + <i>nK</i> (mod 100). In general read the divisor first (64 ⇒ ${K} = 8, 225 ⇒ 15, 36 ⇒ 6), then force the base into 1 + ${K}, adjusting the exponent`,
    why: `3<sup>2014</sup> = 9(1 + 80)<sup>503</sup> ≡ 9(1 + 40240) ≡ 9 × 41 = 369, so the last two digits are 69.`,
    say: null,
  },

  // ── Additional topic D · The pth Term From the End ──
  // pp. 658–659
  {
    topic: 11,
    kind: 'remember',
    q: `What is the ${p}th term from the end of ${AB}?`,
    a: `Counting from the far end reverses the list, so it is ${T(`${n}−${p}+2`)}, the (${n} − ${p} + 2)th from the beginning, with index ${r} = ${n} − ${p} + 1. Safer: it is the ${p}th term from the beginning of (${b} + ${a})<sup>${n}</sup>, with ${r} = ${p} − 1: ${C(n, `${p}−1`)} ${b}<sup>${n}−${p}+1</sup>${a}<sup>${p}−1</sup>`,
    why: `4th from the end of (${fr(`${x}<sup>3</sup>`, '2')} − ${fr('2', `${x}<sup>2</sup>`)})<sup>9</sup>: ${C('9', '3')}(−${fr('2', `${x}<sup>2</sup>`)})<sup>6</sup>(${fr(`${x}<sup>3</sup>`, '2')})<sup>3</sup> = ${fr('672', `${x}<sup>3</sup>`)}.`,
    say: 'The safer route is to reverse the binomial instead of the counting.',
  },
  // p. 659
  {
    topic: 11,
    kind: 'remember',
    q: `What is the ratio of the ${p}th term from the beginning to the ${p}th from the end, and when are they equal?`,
    a: `Both carry ${C(n, `${p}−1`)}, with ${a} and ${b} swapped, so the ratio is coefficient-free: (${fr(a, b)})<sup>${n}−2${p}+2</sup>. For ${a}, ${b} ≠ 0 and ${a} ≠ ±${b} they are equal exactly when ${n} = 2${p} − 2: ${T(p)} is then the middle term of an even-power expansion, its own mirror image. (If ${a} = −${b} the ratio is (−1)<sup>${n}</sup>, 1 for every even ${n}.)`,
    why: `(<sup>3</sup>√2 + ${fr('1', '<sup>3</sup>√3')})<sup>${n}</sup> with equal 7th terms: (6<sup>1/3</sup>)<sup>${n}−12</sup> = 1, so ${n} = 12.`,
    say: null,
  },
  // p. 661
  {
    topic: 11,
    kind: 'mixup',
    q: `${p}th from the end: does setting ${p} = 1 give the first term or the last?`,
    a: `The last: ${C(n, '0')}${b}<sup>${n}</sup> = ${b}<sup>${n}</sup>. At ${p} = ${n} + 1 the formula gives ${C(n, n)}${a}<sup>${n}</sup> = ${a}<sup>${n}</sup>, the first term. The ${p}th from the end and the ${p}th from the beginning share ${C(n, `${p}−1`)}, not their powers`,
    why: `(${x} − 2${y})<sup>12</sup>: the 6th term from the end is −101376${x}<sup>5</sup>${y}<sup>7</sup>.`,
    say: null,
  },
  // p. 660
  {
    topic: 11,
    kind: 'mistake',
    q: `Is the 3rd term from the end of (${x} + ${y})<sup>10</sup> equal to 120${x}<sup>3</sup>${y}<sup>7</sup>?`,
    a: `No: 45${x}<sup>2</sup>${y}<sup>8</sup>. Two off-by-ones stacked: ${n} − ${p} + 2 = 9 is a term number, so ${r} = 8, not 9 or 7. Reversing the binomial, the 3rd term of (${y} + ${x})<sup>10</sup> has ${r} = 2: ${C('10', '2')}${y}<sup>8</sup>${x}<sup>2</sup>. 120${x}<sup>3</sup>${y}<sup>7</sup> is a genuine term, which is why it looks respectable`,
    why: `Other route: ${T('9')} uses ${r} = 8, ${C('10', '8')}${x}<sup>2</sup>${y}<sup>8</sup> = 45${x}<sup>2</sup>${y}<sup>8</sup>.`,
    say: null,
  },
  // pp. 660–661
  {
    topic: 11,
    kind: 'shortcut',
    q: `The 5th term from the beginning and the 5th from the end of (<sup>4</sup>√2 + ${fr('1', '<sup>4</sup>√3')})<sup>${n}</sup> are in the ratio √6 ∶ 1. Find ${n} fast.`,
    a: `Never write either term: ${fr(a, b)} = 2<sup>1/4</sup> · 3<sup>1/4</sup> = 6<sup>1/4</sup>, so the ratio is (6<sup>1/4</sup>)<sup>${n}−8</sup> = 6<sup>1/2</sup>, ${fr(`${n} − 8`, '4')} = ${fr('1', '2')}, ${n} = 10`,
    why: `Ratio <sup>3</sup>√6 ∶ 1 for the 4th terms of (<sup>3</sup>√2 + ${fr('1', '<sup>3</sup>√3')})<sup>${n}</sup>: ${fr(`${n} − 6`, '3')} = ${fr('1', '3')}, ${n} = 7.`,
    say: null,
  },

  // ── Additional topic E · Vandermonde’s Identity ──
  // pp. 662–663
  {
    topic: 12,
    kind: 'remember',
    q: 'State Vandermonde’s identity and its two proofs.',
    a: `For non-negative integers ${m}, ${n}, ${p}: ∑<sub>${k}</sub> ${C(m, k)} ${C(n, `${p}−${k}`)} = ${C(`${m}+${n}`, p)}. Counting: a committee of ${p} from ${m} women and ${n} men, split by the number ${k} of women. Coefficients: the ${x}<sup>${p}</sup> coefficient of (1 + ${x})<sup>${m}</sup>(1 + ${x})<sup>${n}</sup> = (1 + ${x})<sup>${m}+${n}</sup>. Read ${C(n, '<i>j</i>')} = 0 for <i>j</i> < 0 or <i>j</i> > ${n}; without that convention restrict the sum to max(0, ${p} − ${n}) ≤ ${k} ≤ min(${m}, ${p})`,
    why: `${SUM(`${r}=0`, '5')} ${C('10', r)} ${C('20', `5−${r}`)} = ${C('30', '5')} = 142506; ∑ ${C('15', r)} ${C('10', `12−${r}`)} = ${C('25', '12')}, only ${r} = 2 to 12 contributing.`,
    say: 'Vandermonde applies only when the two lower indices in each term add to a constant.',
  },
  // p. 663
  {
    topic: 12,
    kind: 'remember',
    q: 'Which product sums are special cases, and what is the alternating companion?',
    a: `${m} = ${n} = ${p}: ${SUM(`${r}=0`, n)} ${Cs(r)}<sup>2</sup> = ${C2n}. ${m} = ${n}, ${p} = ${n} − ${k}: ∑ ${Cs(r)}${Cs(`${r}+${k}`)} = ${C(`2${n}`, `${n}−${k}`)}. Different ${m}, ${n}, one factor flipped: ∑ ${C(m, r)} ${C(n, r)} = ${C(`${m}+${n}`, m)}. From (1 − ${x})<sup>${n}</sup>(1 + ${x})<sup>${n}</sup> = (1 − ${x}<sup>2</sup>)<sup>${n}</sup>: ${SUM(`${r}=0`, n)} (−1)<sup>${r}</sup>${Cs(r)}<sup>2</sup> = 0 for ${n} odd, (−1)<sup>${n}/2</sup> ${C(n, `${n}/2`)} for ${n} even`,
    why: `(1 + ${x})<sup>8</sup>: ${Cs('0')}<sup>2</sup> − ${Cs('1')}<sup>2</sup> + ⋯ + ${Cs('8')}<sup>2</sup> = (−1)<sup>4</sup> ${C('8', '4')} = 70.`,
    say: null,
  },
  // pp. 663–664
  {
    topic: 12,
    kind: 'mixup',
    q: `Can you apply Vandermonde directly to ${Cs('0')}${Cs('2')} + ${Cs('1')}${Cs('3')} + ⋯ + ${Cs('6')}${Cs('8')} for (1 + ${x})<sup>8</sup>?`,
    a: `Not as printed: the lower indices ${r} and ${r} + 2 add to 2${r} + 2, not a constant. Flip one factor by symmetry, ${Cs(r)} = ${C('8', `8−${r}`)}; now the indices add to 10, and the sum is ${C('16', '10')} = ${C('16', '6')} = 8008`,
    why: `∑ ${C('6', r)} ${C('9', r)}: flip one factor first, ${C('15', '6')} = 5005.`,
    say: null,
  },
  // p. 664
  {
    topic: 12,
    kind: 'mistake',
    q: `${SUM(`${r}=0`, '5')} ${C('5', r)} ${C('7', `${r}+1`)}: is it ${C('12', '5')} = 792, as for ${SUM(`${r}=0`, '5')} ${C('5', r)} ${C('7', r)}?`,
    a: `No: 924. Flipping the first factor, ${C('5', r)} = ${C('5', `5−${r}`)}, makes the lower indices add to 6, so the value is ${C('12', '6')}. The reflex “add the upper indices” skips the precondition; it happens to give 792 for ∑ ${C('5', r)} ${C('7', r)}, where the flipped indices add to 5, and ${C('12', r)} is not even a number`,
    why: `Direct check: 7 + 105 + 350 + 350 + 105 + 7 = 924.`,
    say: null,
  },
  // p. 665
  {
    topic: 12,
    kind: 'shortcut',
    q: `How do you evaluate ${SUM(`${r}=1`, n)} ${r}(${nCr})<sup>2</sup>?`,
    a: `Two tools: absorb the weight, ${r}${nCr} = ${n}${C(`${n}−1`, `${r}−1`)}; then flip ${nCr} = ${C(n, `${n}−${r}`)} so the lower indices add to ${n} − 1, and apply Vandermonde: ${n} ${C(`2${n}−1`, `${n}−1`)}`,
    why: `${n} = 5: 5 · ${C('9', '4')} = 630 = 25 + 200 + 300 + 100 + 5.`,
    say: null,
  },

  // ── Additional topic F · Arbitrary Polynomial Weights: the Absorption Identity ──
  // pp. 666–668
  {
    topic: 13,
    kind: 'remember',
    q: 'What is the absorption identity, and how far does it reach?',
    a: `${r} ${nCr} = ${n} ${C(`${n}−1`, `${r}−1`)} for 1 ≤ ${r} ≤ ${n}: a factor ${r} in front is swallowed by the coefficient, at the price of dropping both indices by one and pulling out ${n}. Applied ${k} times: ${r}(${r} − 1) ⋯ (${r} − ${k} + 1) ${nCr} = ${n}(${n} − 1) ⋯ (${n} − ${k} + 1) ${C(`${n}−${k}`, `${r}−${k}`)}`,
    why: `${SUM(`${r}=1`, n)} ${r}${nCr} = ${n}${SUM(`<i>j</i>=0`, `${n}−1`)} ${C(`${n}−1`, '<i>j</i>')} = ${n}2<sup>${n}−1</sup>, a complete row for index ${n} − 1.`,
    say: 'The weight that absorbs cleanly is the falling factorial <i>r</i>(<i>r</i> − 1) ⋯ (<i>r</i> − <i>k</i> + 1), not the power <i>r</i><sup><i>k</i></sup>.',
  },
  // pp. 667, 669–670
  {
    topic: 13,
    kind: 'remember',
    q: 'How do you sum a polynomial weight times ⁿCᵣ?',
    a: `Rewrite the weight in falling factorials (${r}<sup>2</sup> = ${r}(${r} − 1) + ${r}; ${r}<sup>3</sup> = ${r}(${r} − 1)(${r} − 2) + 3${r}(${r} − 1) + ${r}), absorb each piece, then substitute: ${x} = 1 gives 2<sup>${n}−${k}</sup>, ${x} = −1 gives 0 (for ${n} > ${k}), a general ${x} gives ${x}<sup>${k}</sup>(1 + ${x})<sup>${n}−${k}</sup>. Results: ∑ ${r}${Cs(r)} = ${n}2<sup>${n}−1</sup>, ∑ ${r}(${r} − 1)${Cs(r)} = ${n}(${n} − 1)2<sup>${n}−2</sup>, ∑ ${r}<sup>2</sup>${Cs(r)} = ${n}(${n} + 1)2<sup>${n}−2</sup>, ∑ ${r}<sup>3</sup>${Cs(r)} = ${n}<sup>2</sup>(${n} + 3)2<sup>${n}−3</sup>`,
    why: `${SUM(`${r}=0`, '6')} ${r}<sup>3</sup> ${C('6', r)} = 36 · 9 · 2<sup>3</sup> = 2592; ∑ ${r} ${C('6', r)}2<sup>${r}</sup> = 6 · 2 · 3<sup>5</sup> = 2916.`,
    say: null,
  },
  // p. 667
  {
    topic: 13,
    kind: 'remember',
    q: `When do ∑ (−1)<sup>${r}</sup>${r}${Cs(r)} and ∑ (−1)<sup>${r}</sup>${r}<sup>2</sup>${Cs(r)} vanish?`,
    a: `The first for ${n} ≥ 2, the second for ${n} ≥ 3: after absorption the reduced sum ∑ (−1)<sup><i>j</i></sup> ${C(`${n}−${k}`, '<i>j</i>')} vanishes only when its upper index ${n} − ${k} is at least 1. Check the small cases: at ${n} = 1 the first sum is −1, at ${n} = 2 the second is 2`,
    why: `∑ (−1)<sup>${r}</sup>${r}<sup>2</sup>${C('6', r)} = 0, but ∑ (−1)<sup>${r}</sup>${r}<sup>2</sup>${C('2', r)} = −2 + 4 = 2.`,
    say: null,
  },
  // pp. 667, 669
  {
    topic: 13,
    kind: 'mixup',
    q: `Differentiating ${X1} twice and setting ${x} = 1: does it give ∑ ${r}<sup>2</sup>${Cs(r)}?`,
    a: `No: it gives ∑ ${r}(${r} − 1)${Cs(r)} = ${n}(${n} − 1)2<sup>${n}−2</sup>. The operator that manufactures ${r}<sup>${k}</sup> is (${x}${fr('<i>d</i>', '<i>dx</i>')})<sup>${k}</sup>: multiply by ${x} between the differentiations. The two sums differ by ∑ ${r}${Cs(r)} = ${n}2<sup>${n}−1</sup>`,
    why: `${n} = 8: ∑ ${r}(${r} − 1)${C('8', r)} = 8 · 7 · 2<sup>6</sup> = 3584.`,
    say: null,
  },
  // p. 669
  {
    topic: 13,
    kind: 'mistake',
    q: `For (1 + ${x})<sup>10</sup>, is ${SUM(`${r}=0`, '10')} ${r}(${r} − 1)${Cs(r)} = 10 · 11 · 2<sup>8</sup> = 28160?`,
    a: `No: 23040. ${r}(${r} − 1) is already a falling factorial: absorbing twice gives 10 · 9 ${SUM(`${r}=2`, '10')} ${C('8', `${r}−2`)} = 90 · 2<sup>8</sup>. 28160 is ∑ ${r}<sup>2</sup>${Cs(r)}; the two differ by ∑ ${r}${Cs(r)} = 10 · 2<sup>9</sup> = 5120, which is zero only for ${n} = 0`,
    why: `Check: 28160 − 23040 = 5120.`,
    say: null,
  },
  // pp. 667–669
  {
    topic: 13,
    kind: 'shortcut',
    q: `What is the fastest route to ∑ (${a} + <i>rd</i>) ${nCr}?`,
    a: `The reversal trick: write the sum again with ${r} replaced by ${n} − ${r} (legitimate because ${Cs(`${n}−${r}`)} = ${Cs(r)}) and add; the two weights pair to the constant 2${a} + <i>nd</i>, so 2<i>S</i> = (2${a} + <i>nd</i>)2<sup>${n}</sup> and <i>S</i> = (2${a} + <i>nd</i>)2<sup>${n}−1</sup>`,
    why: `${SUM(`${r}=0`, '10')} (3${r} + 2)${C('10', r)} = (4 + 30)2<sup>9</sup> = 17408 = 15360 + 2048.`,
    say: null,
  },

  // ── Additional topic G · The Central Binomial Coefficient 2nCn ──
  // pp. 671–672
  {
    topic: 14,
    kind: 'remember',
    q: `What are the factorial, odd-product and Pascal forms of ${C2n}?`,
    a: `${C2n} = ${fr(`(2${n})!`, `${n}! ${n}!`)} = ${fr(`2<sup>${n}</sup> [1 · 3 · 5 ⋯ (2${n} − 1)]`, `${n}!`)}: the ${n} even factors of (2${n})! give 2<sup>${n}</sup>${n}!. So the middle term of (1 + ${x})<sup>2${n}</sup> is ${fr(`1 · 3 · 5 ⋯ (2${n} − 1)`, `${n}!`)} 2<sup>${n}</sup>${x}<sup>${n}</sup>. By Pascal’s rule and ${C(`2${n}−1`, `${n}−1`)} = ${C(`2${n}−1`, n)}: ${C2n} = 2 ${C(`2${n}−1`, `${n}−1`)}. It is also ${SUM(`${r}=0`, n)} (${nCr})<sup>2</sup>, and the constant term of (${x} + ${fr('1', x)})<sup>2${n}</sup>`,
    why: `${n} = 3: ${fr('1 · 3 · 5', '3!')} · 2<sup>3</sup> = 20 = ${C('6', '3')}; the term independent of ${x} in (${x} + ${fr('1', x)})<sup>14</sup> is ${C('14', '7')} = 3432.`,
    say: 'Each central coefficient is a little less than four times the previous one.',
  },
  // pp. 671, 673
  {
    topic: 14,
    kind: 'remember',
    q: `How big is ${C2n}?`,
    a: `Exactly: ${fr(C2n, C(`2${n}−2`, `${n}−1`))} = ${fr(`2(2${n} − 1)`, n)} = 4 − ${fr('2', n)}. Bounds: ${fr(`4<sup>${n}</sup>`, `2${n} + 1`)} ≤ ${C2n} < 4<sup>${n}</sup> (${n} ≥ 1), from ${SUM(`${k}=0`, `2${n}`)} ${C(`2${n}`, k)} = 4<sup>${n}</sup>: 2${n} + 1 terms, ${C2n} the largest (lower bound), and every other term a positive integer, so at least 1 (strict upper bound)`,
    why: `${C('40', '20')}: 2.68 × 10<sup>10</sup> ≤ ${C('40', '20')} < 1.10 × 10<sup>12</sup>; the true value is about 1.38 × 10<sup>11</sup>.`,
    say: null,
  },
  // p. 673
  {
    topic: 14,
    kind: 'mixup',
    q: `${C('8', '4')} = 70. Is ${C('10', '5')} = 4 × 70 = 280?`,
    a: `No: 252. The ratio of successive central coefficients is 4 − ${fr('2', n)}, here ${fr('18', '5')} = 3.6, never 4: “grows like 4<sup>${n}</sup>” is an asymptotic slogan, not an exact identity, and the gap is why ${C2n} is strictly less than 4<sup>${n}</sup>`,
    why: `${fr(C('12', '6'), C('10', '5'))} = 4 − ${fr('2', '6')} = ${fr('11', '3')} = ${fr('924', '252')}.`,
    say: null,
  },
  // p. 672
  {
    topic: 14,
    kind: 'mistake',
    q: `Should you quote ${C2n} ∼ ${fr(`4<sup>${n}</sup>`, '√(<i>πn</i>)')} in a paper?`,
    a: `No. The Stirling estimate is not part of either the CBSE or the JEE syllabus. Quote the elementary bounds ${fr(`4<sup>${n}</sup>`, `2${n} + 1`)} ≤ ${C2n} < 4<sup>${n}</sup>, provable from this chapter`,
    why: `${C('30', '15')}: 34636833 ≤ ${C('30', '15')} < 1073741824, and the true value 155117520 lies inside.`,
    say: null,
  },
  // p. 672
  {
    topic: 14,
    kind: 'shortcut',
    q: `Prove in two lines that the coefficient of ${x}<sup>${n}</sup> in (1 + ${x})<sup>2${n}</sup> is twice that in (1 + ${x})<sup>2${n}−1</sup>.`,
    a: `Pascal’s rule: ${C2n} = ${C(`2${n}−1`, `${n}−1`)} + ${C(`2${n}−1`, n)}; and (${n} − 1) + ${n} = 2${n} − 1 is the symmetry condition, so the two terms are equal: ${C2n} = 2 ${C(`2${n}−1`, n)}. The two middle coefficients of an odd-index row are always equal`,
    why: `${C('10', '5')} = 252 = 2 × ${C('9', '4')} = 2 × 126.`,
    say: null,
  },
];
