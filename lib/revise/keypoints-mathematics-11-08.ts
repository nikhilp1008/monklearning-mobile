/**
 * KEY POINTS for Mathematics Class 11, Chapter 8 (Sequences and Series).
 *
 * Written for test mode: every point is a question to answer in your head,
 * then the answer and at most one more line. Four kinds, each a section on
 * the screen: Remember, Don't mix up, Common mistakes and Exam shortcuts.
 * Topics 01–09 and Additional topics A–G each have two or more Remember
 * points, at least one of each other kind and one Exam shortcut; the long
 * ones carry more (Topic 02, the characterization and the ratio of sums;
 * Topic 03, the GM, symmetric picks and the log bridge; Topic 07, the
 * standard sums and the method of differences; Topic 09, growth, instalments,
 * the product of a GP and the period count): 96 points in all. Memory lines
 * are a fifth, short section of their own, read rather than tested: the
 * first two of each topic.
 *
 * `topic`: Topics 01–09 are 0–8 (01–08 the main chapter's Units 1–8, 09 the
 * supplement's Unit 9), Additional topics A–G are 9–15 (A–E the supplement's
 * addenda, F–G the "Additional Topics" part). No point refers to another
 * topic by number.
 *
 * Every fact is from the Master Reference book (the October 2026 edition); the
 * page (the bottom folio) is above each point. Remember: the topic's key
 * formulas and definitions, its derivations and procedures, and its Cheat
 * sheet. Common mistakes: its Common pitfalls and its MCQ traps (A–G, which
 * have no MCQs or pitfall lists: their Speed Trap examples, rules and scope
 * conditions). Exam shortcuts: its Pro-Tips, with a worked example or
 * practice answer. `say`: this chapter prints no quoted mnemonics, so the
 * memory lines are the book's own one-line summaries, word for word: the
 * cheat sheets' closing lines (Topic 01's "Golden habit"; Topic 02's three-term
 * test and ratio of mth terms; Topic 03's three tests; the One-liners of
 * Topics 04, 05, 06 and 08; Topic 07's Workflow and Shortcut; Topic 09's
 * Triggers), Topic 01's, Topic 02's and Topic 04's own sentences ("Sequences
 * are about the terms …", "Always say “n minus one.”", "Reciprocate first,
 * always."), and for A–G, which have no cheat
 * sheet of their own except F–G's, the book's one-line statement of each
 * method (A: "replace every progression statement …"; B: the alternating
 * squares line; C: "compute the square of the sum …"; D: the n(n + 1) line;
 * E: the AP/GP diagnostic; F and G: their cheat sheet's and Method's lines):
 * twenty-seven in all, twenty-four of them memory lines (Topics 02, 03 and 09
 * carry a third on a later point). The labels "Golden habit:", "One-liner:"
 * and "Shortcut:" name the book's box, not the idea, so the memory lines drop
 * them (decision 31); "Workflow:" stays, since it says the line is a sequence
 * of steps. Where the book over-states a rule (an infinite AP "always
 * diverges", the means "line up forever", the HM "always the smallest", logs
 * of a GP with no positivity, inserted GMs without positive ends, "only the
 * very first and very last pieces survive", "n > log k / log r" for decay,
 * S/R = al with R = 0, the AGP method at r = 1, the Vₙ method without its
 * value at r = 0, (al)^{n/2} for terms not all positive, "period counts
 * always round up", the drawdown closed form, Additional F's GP diagnostic
 * at r = 1, Additional G's "nearest boundary"), the chapter text now carries
 * the true condition (decision 31) and each point states the rule with it.
 * The one memory line that carries such a rule (Topic 08's "only the ends
 * survive") is kept word for word as the book's line; its point gives the
 * condition.
 *
 * Markup is the chapter's own: variables italic, subscripts and sums as
 * <sub>/<sup> (∑ with its limits stacked), − (U+2212) for minus, every
 * fraction stacked, <frac><num>…</num><den>…</den></frac>, except inside a
 * raised run (<i>r</i><sup><i>n</i>(<i>n</i>−1)/2</sup>, (b/a)<sup>k/(n+1)</sup>),
 * which keeps the chapter's form; no em dashes; and always a space after "<"
 * (as the book prints it), so it is never read as a tag. Exam-frequency
 * claims would keep the label "(the book’s estimate from past papers, not
 * official figures)"; none of these points makes one.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

const fr = (t: string, b: string) => `<frac><num>${t}</num><den>${b}</den></frac>`;
const sb = (base: string, s: string) => `<i>${base}</i><sub>${s}</sub>`;
const SUM = (lo: string, hi: string) => `∑<sub>${lo}</sub><sup>${hi}</sup>`;
/** ∑ with a lower limit only: ∑<sub>i < j</sub>. */
const SUB = (lo: string) => `∑<sub>${lo}</sub>`;
const a = '<i>a</i>';
const b = '<i>b</i>';
const c = '<i>c</i>';
const d = '<i>d</i>';
const e = '<i>e</i>';
const k = '<i>k</i>';
const l = '<i>l</i>';
const m = '<i>m</i>';
const n = '<i>n</i>';
const p = '<i>p</i>';
const q = '<i>q</i>';
const r = '<i>r</i>';
const x = '<i>x</i>';
const y = '<i>y</i>';
const A = '<i>A</i>';
const G = '<i>G</i>';
const H = '<i>H</i>';
const L = '<i>L</i>';
const P = '<i>P</i>';
const Q = '<i>Q</i>';
const R = '<i>R</i>';
const S = '<i>S</i>';
const ir = '<i>i</i>';
const an = sb('a', n);
const a1 = sb('a', '1');
const Sn = sb('S', n);
const Sinf = '<i>S</i><sub>∞</sub>';
const tn = sb('t', n);
const tr = sb('t', r);
const Vr = (s: string) => sb('V', s);
const sq = (s: string) => `${s}<sup>2</sup>`;
const abs = (s: string) => `|${s}|`;

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Foundations: Sequences and Series ──
  // pp. 677, 679, 682
  {
    topic: 0,
    kind: 'remember',
    q: 'What is a sequence, what is a series, and what are the two ways to define a sequence?',
    a: `A sequence is a function ${a} ∶ ℕ → ℝ (or on {1, 2, …, ${m}} for a finite sequence): feed in the position ${n}, get out the term ${an}, the general term (or ${n}th term). Explicit: a formula for ${an} directly (${an} = 2${n} − 1 gives 1, 3, 5, 7, …); recursive: each term from earlier ones plus seed values (Fibonacci ${a1} = ${sb('a', '2')} = 1, ${an} = ${sb('a', `${n}−1`)} + ${sb('a', `${n}−2`)}). A series is the sum of the terms, ${a1} + ${sb('a', '2')} + ⋯ + ${an} = ${SUM(`${k}=1`, n)} ${sb('a', k)}, finite or infinite. A sequence is not its set of values: order and repetition matter, and 1, 1, 2 is a valid sequence that as a set collapses to {1, 2}`,
    why: `${SUM(`${k}=1`, '4')}(2${k} − 1) = 1 + 3 + 5 + 7 = 16: the sequence lists the terms, the series adds them up.`,
    say: 'Position → general term <i>a</i><sub><i>n</i></sub> → then list or sum.',
  },
  // pp. 677, 679, 682
  {
    topic: 0,
    kind: 'remember',
    q: 'Which rules of sigma notation do you use, and how do you sum over a range that does not start at 1?',
    a: `Linearity: ∑(${sb('a', k)} + ${sb('b', k)}) = ∑ ${sb('a', k)} + ∑ ${sb('b', k)}; ∑ ${c}${sb('a', k)} = ${c} ∑ ${sb('a', k)}; ${SUM(`${k}=1`, n)} ${c} = <i>cn</i>. The lower limit need not be 1: a partial range is ${SUM(m, n)} = ${SUM('1', n)} − ${SUM('1', `${m}−1`)}. To expand a sum, read the index range, substitute, add`,
    why: `${SUM(`${k}=2`, '5')}(${sq(k)} − 1) = 3 + 8 + 15 + 24 = 50: the sum starts at ${k} = 2.`,
    say: 'Sequences are about the terms; series are about the running total.',
  },
  // pp. 679–680
  {
    topic: 0,
    kind: 'remember',
    q: 'How do you find the general term from a pattern of terms?',
    a: `Inspect how each term relates to its position ${n}. Constant differences: linear, ${an} = <i>An</i> + <i>B</i> (AP-type); constant second differences: quadratic ${an}; constant ratios: GP-type. A “general term” must hold for all ${n}: a pattern fitting ${a1}, ${sb('a', '2')}, ${sb('a', '3')} is a conjecture until the rule is stated`,
    why: `3, 8, 15, 24, 35, …: the first differences 5, 7, 9, 11 form an AP, so ${an} is quadratic: ${an} = ${n}(${n} + 2).`,
    say: null,
  },
  // p. 681
  {
    topic: 0,
    kind: 'mixup',
    q: `Is ${an} the same thing as ${Sn}?`,
    a: `No. ${an} is the ${n}th term, one value at one position; ${Sn} is the sum of the first ${n} terms. Confusing the two is the root error behind countless slips with every progression later. Write ${an} first, then decide whether to list it or sum it`,
    why: `For ${SUM(`${k}=1`, '3')} ${k}(${k} + 1) the terms are 2, 6, 12 and the sum is 20.`,
    say: null,
  },
  // p. 681
  {
    topic: 0,
    kind: 'mistake',
    q: 'Is the general term of 2, 5, 10, 17, 26, … equal to 2n + 1?',
    a: `No: ${sq(n)} + 1. The differences 3, 5, 7, 9 grow, so the term is not linear: 2${n} + 1 and 3${n} − 1 would give constant differences, and ${sq(n)} + ${n} gives 2, 6, 12, …, failing at ${n} = 2. The other listed slips: trusting a pattern of three terms without checking a fourth, misreading the limits of ∑ (starting at 1 when it starts at 2), and treating a sequence as an unordered set`,
    why: `${SUM(`${k}=1`, '3')} ${k}(${k} + 1) is 2 + 6 + 12 = 20; running on to ${k} = 4 gives 40, and summing ${k} alone gives 6.`,
    say: null,
  },
  // pp. 680–682
  {
    topic: 0,
    kind: 'shortcut',
    q: `How do you evaluate ${SUM(`${k}=1`, n)}(3${sq(k)} − 2${k} + 1) quickly?`,
    a: `Write the general term first, then split the sum by linearity and apply known sums: 3∑${sq(k)} − 2∑${k} + ∑1 = 3 · ${fr(`${n}(${n} + 1)(2${n} + 1)`, '6')} − 2 · ${fr(`${n}(${n} + 1)`, '2')} + ${n} = ${n}<sup>3</sup> + ${fr('1', '2')}${sq(n)} + ${fr('1', '2')}${n}. Sigma is just shorthand for addition: expand it whenever you are unsure`,
    why: `At ${n} = 1 the formula gives 1 + ${fr('1', '2')} + ${fr('1', '2')} = 2, and the first term is 3 − 2 + 1 = 2.`,
    say: null,
  },

  // ── Topic 02 · Arithmetic Progression (AP) ──
  // pp. 684, 686–687, 692–693
  {
    topic: 1,
    kind: 'remember',
    q: 'What are the nth-term and sum formulas of an AP, and where does each come from?',
    a: `${an} = ${a} + (${n} − 1)${d}: adding the ${n} − 1 equations ${sb('a', k)} = ${sb('a', `${k}−1`)} + ${d}, the intermediate terms cancel. From the end, ${sb('a', n).replace('<i>a</i>', '<i>a</i>′')} = ${l} − (${n} − 1)${d}. ${Sn} = ${fr(n, '2')}[2${a} + (${n} − 1)${d}] = ${fr(n, '2')}(${a} + ${l}): write the sum forwards and backwards and add, and each of the ${n} columns sums to 2${a} + (${n} − 1)${d} (the Gauss reversal). ${n} ∈ ℕ: a non-integer or negative ${n} signals an error or “no such term”. ${d} may be positive, zero or negative: do not assume ${d} > 0`,
    why: `20, 19${fr('1', '4')}, 18${fr('1', '2')}, …: ${d} = −${fr('3', '4')}, ${sb('a', '28')} = −${fr('1', '4')}, and ${an} < 0 needs ${n} > 27${fr('2', '3')}, so the 28th term is the first negative one.`,
    say: 'Always say “<i>n</i> minus one.”',
  },
  // pp. 684, 686–687, 693
  {
    topic: 1,
    kind: 'remember',
    q: 'What is the AM, how do you insert m AMs between a and b, and what does the equidistant identity say?',
    a: `${a}, ${b}, ${c} in AP ⟺ 2${b} = ${a} + ${c}, so ${b} = ${fr(`${a} + ${c}`, '2')} is the AM; the test holds for any three consecutive terms and needs no knowledge of ${a} or ${d}. Inserting ${m} AMs between ${a} and ${b}: ${d} = ${fr(`${b} − ${a}`, `${m} + 1`)}, ${sb('A', k)} = ${a} + ${k} · ${fr(`${b} − ${a}`, `${m} + 1`)}, and their sum is ${m} times the single AM, ${m}(${fr(`${a} + ${b}`, '2')}). In a finite AP, terms equidistant from the ends have equal sums: ${a1} + ${an} = ${sb('a', '2')} + ${sb('a', `${n}−1`)} = ⋯`,
    why: `11 AMs between 28 and 10: ${d} = ${fr('−18', '12')} = −${fr('3', '2')}, and the middle three are ${fr('41', '2')}, 19, ${fr('35', '2')}, with 19 itself the AM of 28 and 10.`,
    say: 'Three-term AP test: 2<i>a</i><sub>2</sub> = <i>a</i><sub>1</sub> + <i>a</i><sub>3</sub>.',
  },
  // pp. 686–687, 693
  {
    topic: 1,
    kind: 'remember',
    q: `When is ${Sn} = <i>An</i><sup>2</sup> + <i>Bn</i> the sum of an AP, and what are its first term and common difference?`,
    a: `Always, provided the constant term is zero: ${Sn} = <i>An</i><sup>2</sup> + <i>Bn</i> ⟺ AP, with ${d} = 2${A} and ${a1} = ${A} + <i>B</i>. Proof: ${an} = ${Sn} − ${sb('S', `${n}−1`)} = ${A}(2${n} − 1) + <i>B</i>, so ${an} − ${sb('a', `${n}−1`)} = 2${A}. Equivalently, a sequence is an AP iff ${an} is linear in ${n}, ${an} = <i>pn</i> + ${q}, with ${p} the common difference. If ${Sn} = <i>An</i><sup>2</sup> + <i>Bn</i> + ${c} with ${c} ≠ 0, it is not an AP: only the terms from the 2nd onward are`,
    why: `${Sn} = 3${sq(n)} + 5${n}: ${d} = 2(3) = 6 and ${a1} = 3 + 5 = 8.`,
    say: null,
  },
  // pp. 688, 692–693
  {
    topic: 1,
    kind: 'mixup',
    q: 'The sums of n terms of two APs are in a given ratio. Is the ratio of their mth terms the ratio of the sums at n = m?',
    a: `No: at ${n} = 2${m} − 1. ${fr(sb('a', m), `<i>a</i>′<sub>${m}</sub>`)} = ${fr(`${a} + (${m} − 1)${d}`, `${a}′ + (${m} − 1)${d}′`)}, and ${fr(sb('S', `2${m}−1`), `<i>S</i>′<sub>2${m}−1</sub>`)} reduces to exactly the same fraction once the common factor ${fr(`2${m} − 1`, '2')} and the 2 cancel. Recovering ${a} and ${d} separately is the slow route`,
    why: `Ratio of sums (7${n} + 1) ∶ (4${n} + 17): for the 24th terms put ${n} = 47, giving ${fr('330', '205')} = ${fr('66', '41')}.`,
    say: 'Ratio of <i>m</i>th terms = <i>S</i><sub>2<i>m</i>−1</sub> ratio.',
  },
  // pp. 691–692
  {
    topic: 1,
    kind: 'mistake',
    q: `If ${Sn} = 3${sq(n)} + 5${n} is the sum of an AP, is the common difference 3?`,
    a: `No: 6. ${d} = 2${A}, twice the coefficient of ${sq(n)}: 3 forgets the factor 2, 5 is <i>B</i> (related to the first term), and 8 is ${a1} = ${A} + <i>B</i> mislabelled as ${d}. The other listed slips: ${a} + <i>nd</i> instead of ${a} + (${n} − 1)${d} (the single most frequent AP error), treating ${Sn} with a constant term as an AP, assuming ${d} > 0, accepting a non-integer ${n}, and forgetting a domain condition that rejects an extraneous root`,
    why: `log<sub>10</sub> 2, log<sub>10</sub>(2<sup>${x}</sup> − 1), log<sub>10</sub>(2<sup>${x}</sup> + 3) in AP: with <i>u</i> = 2<sup>${x}</sup>, (<i>u</i> − 5)(<i>u</i> + 1) = 0, and 2<sup>${x}</sup> > 0 rejects <i>u</i> = −1, so ${x} = log<sub>2</sub> 5.`,
    say: null,
  },
  // pp. 687, 691–692
  {
    topic: 1,
    kind: 'mistake',
    q: 'For four terms of an AP chosen symmetrically, is the common difference d?',
    a: `No: 2${d}. The symmetric picks are ${a} − ${d}, ${a}, ${a} + ${d} (sum 3${a}); ${a} − 3${d}, ${a} − ${d}, ${a} + ${d}, ${a} + 3${d} (sum 4${a}, common difference 2${d}); ${a} − 2${d}, ${a} − ${d}, ${a}, ${a} + ${d}, ${a} + 2${d} (sum 5${a}). Using ${d} for the even case is a frequent slip`,
    why: `Three numbers in AP with sum −3 and product 8: 3${a} = −3 gives ${a} = −1, then (1 − ${sq(d)})(−1) = 8 gives ${sq(d)} = 9, and the sum of squares is 3${sq(a)} + 2${sq(d)} = 21.`,
    say: null,
  },
  // pp. 688, 692
  {
    topic: 1,
    kind: 'shortcut',
    q: `Given ${a1} + ${sb('a', '5')} + ${sb('a', '10')} + ${sb('a', '15')} + ${sb('a', '20')} + ${sb('a', '24')} = 225, find ${sb('S', '24')} in one line.`,
    a: `Use the equidistant identity: ${a1} + ${sb('a', '24')} = ${sb('a', '5')} + ${sb('a', '20')} = ${sb('a', '10')} + ${sb('a', '15')}, so 3(${a1} + ${sb('a', '24')}) = 225 and ${a1} + ${sb('a', '24')} = 75. Then ${sb('S', '24')} = ${fr('24', '2')}(${a1} + ${sb('a', '24')}) = 12 × 75 = 900, with no need for ${a} or ${d}. When a problem gives a sum, switch to symmetric terms; when it gives specific terms, stay with ${a} + (${n} − 1)${d}`,
    why: `To test an AP fast: ${an} linear in ${n}, or ${Sn} quadratic with zero constant.`,
    say: null,
  },

  // ── Topic 03 · Geometric Progression (GP) ──
  // pp. 695, 697–698, 704
  {
    topic: 2,
    kind: 'remember',
    q: 'What are the nth term, the sum of n terms and the sum to infinity of a GP, and when does the sum to infinity exist?',
    a: `A GP has non-zero terms with ${fr(sb('a', k), sb('a', `${k}−1`))} = ${r}, a constant (${a} ≠ 0, ${r} ≠ 0): ${an} = <i>ar</i><sup>${n}−1</sup>, and from the end ${fr(l, `${r}<sup>${n}−1</sup>`)}. ${Sn} = ${fr(`${a}(${r}<sup>${n}</sup> − 1)`, `${r} − 1`)} = ${fr(`${a}(1 − ${r}<sup>${n}</sup>)`, `1 − ${r}`)} for ${r} ≠ 1 (multiply by ${r} and subtract: every interior term cancels), and ${Sn} = <i>na</i> for ${r} = 1. ${Sinf} = ${fr(a, `1 − ${r}`)} exists iff ${abs(r)} < 1, because only then ${r}<sup>${n}</sup> → 0; for ${abs(r)} ≥ 1 the infinite sum diverges (its partial sums oscillate when ${r} ≤ −1)`,
    why: `2, 6, 18, …: ${sb('a', '9')} = 13122 and ${sb('S', '9')} = 19682.`,
    say: '3-term GP test: <i>b</i><sup>2</sup> = <i>ac</i>.',
  },
  // pp. 695, 697–698, 701, 704
  {
    topic: 2,
    kind: 'remember',
    q: 'What is the GM of a and c, and how do you insert n GMs between a and b?',
    a: `${a}, ${b}, ${c} in GP ⟺ ${sq(b)} = <i>ac</i>, so ${b} = ±√(<i>ac</i>): choose the sign that keeps the three terms a genuine GP, and a real GM needs <i>ac</i> > 0. For two positive numbers the single GM is ${G} = √(<i>ab</i>). Inserting ${n} GMs between positive ${a} and ${b} (positive ratio taken): ${r} = (${fr(b, a)})<sup>1/(${n}+1)</sup>, ${sb('G', k)} = ${a}(${fr(b, a)})<sup>${k}/(${n}+1)</sup>, and the product of the ${n} GMs is (√(<i>ab</i>))<sup>${n}</sup>, the single GM to the power ${n}`,
    why: `Three GMs between 1 and 256: ${r}<sup>4</sup> = 256, so ${r} = 4 gives 4, 16, 64; ${r} = −4 gives the real GMs −4, 16, −64 as well.`,
    say: '<i>r</i> < 0 ⟹ alternating signs.',
  },
  // pp. 698–699, 703–704
  {
    topic: 2,
    kind: 'remember',
    q: 'When a problem gives the product of terms of a GP, how do you choose the terms?',
    a: `Symmetrically, so the ${r}’s cancel: ${fr(a, r)}, ${a}, <i>ar</i> (product ${a}<sup>3</sup>); ${fr(a, `${r}<sup>3</sup>`)}, ${fr(a, r)}, <i>ar</i>, <i>ar</i><sup>3</sup> (product ${a}<sup>4</sup>, common ratio ${sq(r)}); ${fr(a, sq(r))}, ${fr(a, r)}, ${a}, <i>ar</i>, <i>ar</i><sup>2</sup> (product ${a}<sup>5</sup>). The even case uses ratio ${sq(r)} between the symmetric terms: the GP analogue of the AP’s “2${d}” trap. Given specific terms, stay with <i>ar</i><sup>${n}−1</sup>`,
    why: `Product 216, sum of pairwise products 156: ${a}<sup>3</sup> = 216 gives ${a} = 6, then 36(${fr('1', r)} + ${r} + 1) = 156 gives ${r} = 3 or ${fr('1', '3')}: the numbers 2, 6, 18.`,
    say: 'Recurring decimal = convergent GP.',
  },
  // pp. 695, 702, 704
  {
    topic: 2,
    kind: 'remember',
    q: 'If a, b, c are positive and in GP, what are log a, log b, log c?',
    a: `In AP: ${sq(b)} = <i>ac</i> gives 2 log ${b} = log ${a} + log ${c}, and the converse holds too. Plot log ${an} against ${n} and you get a straight line, which is why logs convert a GP into an AP. The bridge needs positive terms, since a logarithm of a negative term or of 0 is not defined`,
    why: '“GP in, GP out” is the reflexive wrong guess; HP and “none” miss the log–exponential duality.',
    say: null,
  },
  // pp. 694–695, 697
  {
    topic: 2,
    kind: 'mixup',
    q: 'An infinite AP and an infinite GP: which can have a finite sum?',
    a: `An infinite GP converges precisely when ${abs(r)} < 1, to ${fr(a, `1 − ${r}`)}. An infinite AP has no finite sum unless every term is 0 (${a} = ${d} = 0). The sign of ${r} sets the shape: ${r} > 1 explosive growth, 0 < ${r} < 1 decay toward zero, ${r} < 0 terms alternating in sign, neither increasing nor decreasing`,
    why: `Squares of side 16 nested by joining midpoints: areas 256, 128, 64, … with ${r} = ${fr('1', '2')}, total ${fr('256', `1 − ${fr('1', '2')}`)} = 512 cm<sup>2</sup>.`,
    say: null,
  },
  // pp. 699, 702–703
  {
    topic: 2,
    kind: 'mistake',
    q: `If ${x}, 2${x} + 2, 3${x} + 3 are in GP, is ${x} = −1 a valid answer?`,
    a: `No. (2${x} + 2)<sup>2</sup> = ${x}(3${x} + 3) gives ${x} = −1 or −4, but ${x} = −1 makes the terms −1, 0, 0, and no term of a GP may be zero. So ${x} = −4: the terms −4, −6, −9, ratio ${fr('3', '2')}, fourth term −13.5 (13.5 drops the sign, −27 uses ratio 3, and 27 does both). The other listed slips: ${Sinf} without checking ${abs(r)} < 1 (the most punished GP error), dropping the ${r} < 0 case, taking ${b} = +√(<i>ac</i>) blindly, ratio ${r} instead of ${sq(r)} for an even symmetric pick, and ${fr(`${a}(${r}<sup>${n}</sup> − 1)`, `${r} − 1`)} at ${r} = 1, where the sum is <i>na</i>`,
    why: `Sum to infinity 2 and sum of cubes 24: ${r} = −${fr('1', '2')} or −2, and ${abs(r)} < 1 rejects −2, so ${r} = −${fr('1', '2')}, ${a} = 3.`,
    say: null,
  },
  // pp. 699, 703
  {
    topic: 2,
    kind: 'shortcut',
    q: 'How do you turn a recurring decimal into a fraction?',
    a: `Recognise it on sight as a convergent GP and use ${Sinf} = ${fr(a, `1 − ${r}`)}: 0.333… = ${fr('3', '10')} + ${fr('3', '100')} + ⋯ with ${a} = ${fr('3', '10')}, ${r} = ${fr('1', '10')}, so ${fr(fr('3', '10'), fr('9', '10'))} = ${fr('1', '3')}. The check ${abs(r)} = ${fr('1', '10')} < 1 is what licenses the formula`,
    why: `0.424242… = ${fr('42', '100')} + ${fr('42', '10000')} + ⋯ = ${fr('42', '99')} = ${fr('14', '33')}.`,
    say: null,
  },
  // pp. 700, 703
  {
    topic: 2,
    kind: 'shortcut',
    q: `For positive ${a}, ${b}, ${c}, how do you prove (${a} + ${b} + ${c})(${fr('1', a)} + ${fr('1', b)} + ${fr('1', c)}) ≥ 9?`,
    a: `Multiply two AM–GMs: ${a} + ${b} + ${c} ≥ 3(<i>abc</i>)<sup>1/3</sup> and ${fr('1', a)} + ${fr('1', b)} + ${fr('1', c)} ≥ 3(<i>abc</i>)<sup>−1/3</sup>; both sides are positive, so the product is at least 9, with equality iff ${a} = ${b} = ${c}. For inequalities and optimisation with positive terms, reach for AM ≥ GM before calculus`,
    why: `For two positive numbers, (√${a} − √${b})<sup>2</sup> ≥ 0 gives ${fr(`${a} + ${b}`, '2')} ≥ √(<i>ab</i>), equality iff ${a} = ${b}.`,
    say: null,
  },

  // ── Topic 04 · Harmonic Progression (HP) and Harmonic Mean ──
  // pp. 705–706, 711
  {
    topic: 3,
    kind: 'remember',
    q: 'What is an HP, what is its nth term, and what is the sum of its terms?',
    a: `${a1}, ${sb('a', '2')}, … (all non-zero) are in HP ⟺ ${fr('1', a1)}, ${fr('1', sb('a', '2'))}, … are in AP. If the reciprocal AP has first term ${fr('1', a)} and common difference ${d}, ${an} = ${fr('1', `${fr('1', a)} + (${n} − 1)${d}`)}. There is no general closed form for the sum of an HP: sum termwise, or telescope. No term can be zero, since its reciprocal would be undefined`,
    why: `3rd term ${fr('1', '7')}, 7th term ${fr('1', '15')}: the reciprocals 7 and 15 give ${d} = 2 and first term 3, so the 10th reciprocal is 21 and the 10th term ${fr('1', '21')}.`,
    say: 'Flip to reciprocals → it’s an AP → solve → flip back.',
  },
  // pp. 705–706, 708, 711
  {
    topic: 3,
    kind: 'remember',
    q: 'What is the HM of two numbers, and of n numbers, and how do you insert n HMs?',
    a: `If ${a}, ${H}, ${b} are in HP, ${fr('1', H)} is the AM of ${fr('1', a)} and ${fr('1', b)}: ${fr('1', H)} = ${fr(`${a} + ${b}`, `2<i>ab</i>`)}, so ${H} = ${fr(`2<i>ab</i>`, `${a} + ${b}`)} (note the 2). For ${n} numbers, HM = ${fr(n, `${fr('1', a1)} + ⋯ + ${fr('1', an)}`)}. To insert ${n} HMs between ${a} and ${b}, insert ${n} AMs between ${fr('1', a)} and ${fr('1', b)} and reciprocate: <i>D</i> = ${fr(`${a} − ${b}`, `(${n} + 1)<i>ab</i>`)}, ${fr('1', sb('H', k))} = ${fr('1', a)} + <i>kD</i>. The HM is the honest average of rates over a fixed task`,
    why: `Out at 40 km/h and back at 60 km/h: the average speed is ${fr('2 · 40 · 60', '40 + 60')} = 48 km/h, not 50.`,
    say: 'Reciprocate first, always.',
  },
  // pp. 708–709
  {
    topic: 3,
    kind: 'remember',
    q: 'If the pth term of an HP is q and the qth term is p, what is the nth term?',
    a: `${an} = ${fr(`<i>pq</i>`, n)}. In the reciprocal AP with first term <i>A</i><sub>0</sub>: <i>A</i><sub>0</sub> + (${p} − 1)${d} = ${fr('1', q)} and <i>A</i><sub>0</sub> + (${q} − 1)${d} = ${fr('1', p)}; subtracting gives ${d} = ${fr('1', `<i>pq</i>`)}, and then <i>A</i><sub>0</sub> = ${fr('1', `<i>pq</i>`)}, so the ${n}th reciprocal is ${fr(n, `<i>pq</i>`)}. In particular the (${p} + ${q})th term is ${fr(`<i>pq</i>`, `${p} + ${q}`)}`,
    why: 'Reciprocate-first turns a messy HP problem into one line of AP algebra.',
    say: null,
  },
  // pp. 705–706, 708, 711
  {
    topic: 3,
    kind: 'mixup',
    q: 'Can the HM of two numbers be larger than their GM or their AM?',
    a: `Not for positive numbers: ${A} ≥ ${G} ≥ ${H}, so the HM is never larger than the other two, and all three are equal when the numbers are equal. ${A}${H} = ${fr(`${a} + ${b}`, '2')} · ${fr(`2<i>ab</i>`, `${a} + ${b}`)} = <i>ab</i> = ${sq(G)}, so ${A}, ${G}, ${H} are in GP, and then ${H} = ${fr(sq(G), A)} ≤ ${fr(sq(G), G)} = ${G} because ${A} ≥ ${G}. Positivity is required for the chain; the HM is pulled toward the smaller number`,
    why: `4 and 12: ${H} = ${fr('96', '16')} = 6, ${G} = 4√3, ${A} = 8, and ${A}${H} = 48 = ${sq('(4√3)')}.`,
    say: null,
  },
  // pp. 706, 710
  {
    topic: 3,
    kind: 'mistake',
    q: `Is the HM of ${a} and ${b} equal to ${fr(`<i>ab</i>`, `${a} + ${b}`)}?`,
    a: `No: ${fr(`2<i>ab</i>`, `${a} + ${b}`)}. Dropping the 2 in the numerator is the classic slip; ${fr(`${a} + ${b}`, '2')} is the AM and √(<i>ab</i>) the GM. The other listed slips: attacking HP terms directly instead of converting to the reciprocal AP (the dominant HP error), inventing a closed-form sum for an HP, allowing a zero term, and reversing ${A} ≥ ${G} ≥ ${H}`,
    why: `HM of 3 and 7: ${fr('2 · 3 · 7', '10')} = ${fr('21', '5')} = 4.2.`,
    say: null,
  },
  // pp. 709–710
  {
    topic: 3,
    kind: 'shortcut',
    q: 'The AM of two positive numbers is 9 and their HM is 4. Find the numbers without solving the HM equation.',
    a: `Use ${A}${H} = ${sq(G)} to jump between means: ${sq(G)} = 36, so ${a} + ${b} = 2${A} = 18 and <i>ab</i> = ${sq(G)} = 36. The numbers are the roots of ${sq(x)} − 18${x} + 36 = 0: 9 ± 3√5`,
    why: `AM 10 and GM 8: ${H} = ${fr(sq(G), A)} = ${fr('64', '10')} = 6.4.`,
    say: null,
  },

  // ── Topic 05 · Relationship Between AM, GM and HM ──
  // pp. 713, 715, 718
  {
    topic: 4,
    kind: 'remember',
    q: 'For two positive numbers, what are the two central results about A, G and H?',
    a: `${A} = ${fr(`${a} + ${b}`, '2')}, ${G} = √(<i>ab</i>), ${H} = ${fr(`2<i>ab</i>`, `${a} + ${b}`)}. First, ${A}${H} = ${sq(G)}: so ${fr(A, G)} = ${fr(G, H)}, and ${A}, ${G}, ${H} are in GP with ${G} as their geometric mean. Second, ${A} ≥ ${G} ≥ ${H}, with equality throughout iff ${a} = ${b}. For ${n} positive reals, AM ≥ GM ≥ HM, equality iff all are equal. The chain needs ${a}, ${b} > 0, and ${G} is real only for <i>ab</i> > 0`,
    why: `${a} = 4, ${b} = 16: ${H} = 6.4, ${G} = 8, ${A} = 10, and ${A}${H} = 64 = ${sq('8')}.`,
    say: '<i>G</i> is the GM of both {<i>a</i>, <i>b</i>} and of {<i>A</i>, <i>H</i>}.',
  },
  // p. 715
  {
    topic: 4,
    kind: 'remember',
    q: 'How do you prove A ≥ G and G ≥ H for two positive numbers?',
    a: `${A} ≥ ${G}: (√${a} − √${b})<sup>2</sup> ≥ 0 gives ${a} + ${b} ≥ 2√(<i>ab</i>), equality iff ${a} = ${b}. ${G} ≥ ${H}: since ${A}${H} = ${sq(G)}, ${H} = ${fr(sq(G), A)}, and ${A} ≥ ${G} > 0 gives ${fr(sq(G), A)} ≤ ${fr(sq(G), G)} = ${G}. Chaining the two: ${A} ≥ ${G} ≥ ${H}`,
    why: `${a} = 4, ${b} = 9: ${A} = 6.5, ${H} = ${fr('72', '13')}, and ${A}${H} = 36 = ${sq(G)}.`,
    say: null,
  },
  // pp. 713, 715–716, 718
  {
    topic: 4,
    kind: 'remember',
    q: 'Given the AM A and the GM G of two numbers, how do you recover the numbers, and when are they real?',
    a: `${a} + ${b} = 2${A} and <i>ab</i> = ${sq(G)}, so the numbers are the roots of ${sq(x)} − 2<i>Ax</i> + ${sq(G)} = 0: ${a}, ${b} = ${A} ± √(${sq(A)} − ${sq(G)}). The discriminant 4(${sq(A)} − ${sq(G)}) ≥ 0 is exactly ${A} ≥ ${G}: if a problem hands you ${A} < ${G}, no such real numbers exist`,
    why: `${A} = 10, ${G} = 8: 10 ± √(100 − 64) = 10 ± 6, the numbers 4 and 16; ${A} = 15, ${G} = 9 gives 3 and 27.`,
    say: null,
  },
  // p. 717
  {
    topic: 4,
    kind: 'mixup',
    q: `Are the numbers with AM ${A} and GM ${G} equal to ${A} ± √(${sq(G)} − ${sq(A)}) or ${G} ± √(${sq(A)} − ${sq(G)})?`,
    a: `Neither: ${A} ± √(${sq(A)} − ${sq(G)}). The quadratic ${sq(x)} − 2<i>Ax</i> + ${sq(G)} = 0 is centred on ${A}, not on ${G}; flipping the discriminant gives imaginary numbers whenever ${A} > ${G}`,
    why: `If the AM of two positive numbers exceeds their GM by 2 and the numbers differ by 8: 9 and 1 (${A} = 5, ${G} = 3).`,
    say: null,
  },
  // p. 717
  {
    topic: 4,
    kind: 'mistake',
    q: 'For two distinct positive numbers, is H ≥ G ≥ A?',
    a: `No: ${A} > ${G} > ${H}. Writing the chain backwards is the signature trap of this topic; ${G} ≥ ${A} ≥ ${H} and ${A} ≥ ${H} ≥ ${G} misplace ${G}, which must sit between the other two as their GM. The other listed slips: forgetting that ${A} ≥ ${G} is needed for the numbers to be real, mishandling the sign of ${G}, and centring the recovery quadratic on ${G}`,
    why: `${A}, ${G}, ${H} form a decreasing GP, common ratio ${fr(G, A)} = ${fr(H, G)} < 1, always a GP: never an AP or an HP.`,
    say: null,
  },
  // pp. 716–717
  {
    topic: 4,
    kind: 'shortcut',
    q: `For ${x} > 0, find the minimum of ${x} + ${fr('9', x)} in one line.`,
    a: `AM ≥ GM on the positive numbers ${x} and ${fr('9', x)}: ${fr(`${x} + ${fr('9', x)}`, '2')} ≥ √(${x} · ${fr('9', x)}) = 3, so ${x} + ${fr('9', x)} ≥ 6, with equality when ${x} = ${fr('9', x)}, at ${x} = 3. The equality point locates the optimiser`,
    why: `4${x} + ${fr('1', x)} for ${x} > 0: minimum 4, at ${x} = ${fr('1', '2')}.`,
    say: null,
  },
  // pp. 716–717
  {
    topic: 4,
    kind: 'shortcut',
    q: 'The AM of two positive numbers is to their GM as 5 ∶ 4. What is the ratio of the numbers?',
    a: `4 ∶ 1. If ${a} ∶ ${b} = ${m} ∶ ${n}, then ${A} ∶ ${G} = (${m} + ${n}) ∶ 2√(<i>mn</i>): the ratio of the numbers is fixed entirely by ${fr(A, G)}. With ${a} = <i>t</i>${b}: ${fr(`<i>t</i> + 1`, '2√<i>t</i>')} = ${fr('5', '4')}, so 2<i>t</i> − 5√<i>t</i> + 2 = 0 and <i>t</i> = 4`,
    why: `Check: 4 and 1 have ${A} = ${fr('5', '2')} and ${G} = 2, in the ratio 5 ∶ 4.`,
    say: null,
  },

  // ── Topic 06 · Arithmetico-Geometric Progression (AGP) ──
  // pp. 720, 725
  {
    topic: 5,
    kind: 'remember',
    q: 'What is the general term of an AGP, and what are its sum of n terms and its sum to infinity?',
    a: `${tn} = [${a} + (${n} − 1)${d}]${r}<sup>${n}−1</sup>, the product of an AP term and a GP term. For ${r} ≠ 1, ${Sn} = ${fr(a, `1 − ${r}`)} + ${fr(`<i>dr</i>(1 − ${r}<sup>${n}−1</sup>)`, `(1 − ${r})<sup>2</sup>`)} − ${fr(`[${a} + (${n} − 1)${d}]${r}<sup>${n}</sup>`, `1 − ${r}`)}. For ${abs(r)} < 1, ${r}<sup>${n}</sup> → 0 and <i>nr</i><sup>${n}</sup> → 0 (geometric decay beats linear growth), so ${Sinf} = ${fr(a, `1 − ${r}`)} + ${fr(`<i>dr</i>`, `(1 − ${r})<sup>2</sup>`)}. If ${r} = 1 the AGP is just an AP`,
    why: `1 + ${fr('2', '3')} + ${fr('3', sq('3'))} + ⋯ (${a} = ${d} = 1, ${r} = ${fr('1', '3')}): ${fr('3', '2')} + ${fr('3', '4')} = ${fr('9', '4')}.`,
    say: 'AGP = AP × GP, term by term; sum it the way you sum a GP: multiply by <i>r</i> and subtract.',
  },
  // pp. 720–722, 725
  {
    topic: 5,
    kind: 'remember',
    q: 'How do you sum an AGP by the multiply-by-r method, and when does it fail?',
    a: `Multiply ${Sn} by ${r}, shift one place and subtract: the first column gives ${a}, every middle column a clean <i>dr</i><sup>${k}</sup>, and the last term is subtracted whole: (1 − ${r})${Sn} = ${a} + ${d}(${r} + ${sq(r)} + ⋯ + ${r}<sup>${n}−1</sup>) − [${a} + (${n} − 1)${d}]${r}<sup>${n}</sup>, then sum the GP bracket. It needs ${r} ≠ 1: at ${r} = 1 the subtraction leaves 0 · ${Sn}, and the series is a plain AP. Confirm the term is genuinely (linear in ${n}) × ${r}<sup>${n}−1</sup> first`,
    why: `1 + 2${x} + 3${sq(x)} + ⋯ + <i>nx</i><sup>${n}−1</sup>, ${x} ≠ 1: ${Sn} = ${fr(`1 − ${x}<sup>${n}</sup>`, `(1 − ${x})<sup>2</sup>`)} − ${fr(`<i>nx</i><sup>${n}</sup>`, `1 − ${x}`)}.`,
    say: null,
  },
  // pp. 723, 725
  {
    topic: 5,
    kind: 'remember',
    q: `What are the related sums ∑<i>nr</i><sup>${n}</sup> and ∑${sq(n)}${r}<sup>${n}</sup>?`,
    a: `For ${abs(r)} < 1, summed from ${n} = 1 to ∞: ∑<i>nr</i><sup>${n}</sup> = ${fr(r, `(1 − ${r})<sup>2</sup>`)} and ∑${sq(n)}${r}<sup>${n}</sup> = ${fr(`${r}(1 + ${r})`, `(1 − ${r})<sup>3</sup>`)}. They follow from the same idea, or from differentiating the GP sum; for ${sq(n)} use ${sq(n)} = ${n}(${n} − 1) + ${n} and ∑${n}(${n} − 1)${r}<sup>${n}</sup> = ${fr(`2${sq(r)}`, `(1 − ${r})<sup>3</sup>`)}`,
    why: `∑ ${fr(n, `2<sup>${n}</sup>`)} = 2 and ∑ ${fr(sq(n), `2<sup>${n}</sup>`)} = 4 + 2 = 6.`,
    say: null,
  },
  // p. 724
  {
    topic: 5,
    kind: 'mixup',
    q: `For ${abs(r)} < 1, is 1 + 2${r} + 3${sq(r)} + ⋯ equal to ${fr(r, `(1 − ${r})<sup>2</sup>`)}?`,
    a: `No: ${fr('1', `(1 − ${r})<sup>2</sup>`)}. With ${a} = ${d} = 1, ${Sinf} = ${fr('1', `1 − ${r}`)} + ${fr(r, `(1 − ${r})<sup>2</sup>`)} = ${fr('1', `(1 − ${r})<sup>2</sup>`)}. ${fr(r, `(1 − ${r})<sup>2</sup>`)} is ∑<i>nr</i><sup>${n}</sup>, off by one power of ${r}; ${fr('1', `1 − ${r}`)} is the plain GP sum, which forgets the AP weighting`,
    why: `The AGP converges when ${abs(r)} < 1: the size of ${a} or ${d} is irrelevant.`,
    say: null,
  },
  // p. 724
  {
    topic: 5,
    kind: 'mistake',
    q: `Can you sum 1 + 4${x} + 7${sq(x)} + ⋯ with the AP formula, the GP formula or the sum-of-powers method?`,
    a: `No: each handles only one part, and the term is not a polynomial in ${n}. It is (linear) × ${x}<sup>${n}−1</sup>, an AGP: multiply by ${x} and subtract. The other listed slips: writing ${Sinf} without checking ${abs(r)} < 1, applying the ${r} ≠ 1 formula when ${r} = 1, and swapping the roles of ${d} and ${r}`,
    why: `${fr('3', '1')} + ${fr('5', '2')} + ${fr('7', '4')} + ${fr('9', '8')} + ⋯: ${a} = 3, ${d} = 2, ${r} = ${fr('1', '2')}, so ${Sinf} = 6 + 4 = 10.`,
    say: null,
  },
  // pp. 723, 725
  {
    topic: 5,
    kind: 'shortcut',
    q: `Find 1 + ${fr('3', '4')} + ${fr('5', '16')} + ${fr('7', '64')} + ⋯ in one line.`,
    a: `Read off ${a} = 1, ${d} = 2, ${r} = ${fr('1', '4')} and use the compact ${Sinf} = ${fr(a, `1 − ${r}`)} + ${fr(`<i>dr</i>`, `(1 − ${r})<sup>2</sup>`)}, worth memorising: ${fr('4', '3')} + ${fr('8', '9')} = ${fr('20', '9')}. Do not memorise the messy ${Sn}: re-derive it with the multiply-by-${r} subtraction every time`,
    why: `∑ ${fr(n, `5<sup>${n}−1</sup>`)} = ${fr('1', `(1 − ${fr('1', '5')})<sup>2</sup>`)} = ${fr('25', '16')}.`,
    say: null,
  },

  // ── Topic 07 · Special Series Summation ──
  // pp. 727, 733
  {
    topic: 6,
    kind: 'remember',
    q: `What are the standard sums ∑${r}, ∑${sq(r)}, ∑${r}<sup>3</sup> and ∑${r}<sup>4</sup>?`,
    a: `${SUM(`${r}=1`, n)} 1 = ${n}; ${SUM(`${r}=1`, n)} ${r} = ${fr(`${n}(${n} + 1)`, '2')}; ${SUM(`${r}=1`, n)} ${sq(r)} = ${fr(`${n}(${n} + 1)(2${n} + 1)`, '6')}; ${SUM(`${r}=1`, n)} ${r}<sup>3</sup> = [${fr(`${n}(${n} + 1)`, '2')}]<sup>2</sup> = (${SUM(`${r}=1`, n)} ${r})<sup>2</sup>; and, rarely needed, ${SUM(`${r}=1`, n)} ${r}<sup>4</sup> = ${fr(`${n}(${n} + 1)(2${n} + 1)(3${sq(n)} + 3${n} − 1)`, '30')}. Each is for the first ${n} terms from ${r} = 1; for ${r} = ${m} to ${n} use ${SUM('1', n)} − ${SUM('1', `${m}−1`)}`,
    why: '1 + 8 + 27 = 36 = 6<sup>2</sup> = (1 + 2 + 3)<sup>2</sup>.',
    say: 'Workflow: find <i>t</i><sub><i>n</i></sub> → expand to powers of <i>n</i> → apply standard sums.',
  },
  // pp. 727, 729
  {
    topic: 6,
    kind: 'remember',
    q: `How are the formulas for ∑${sq(n)} and ∑${n}<sup>3</sup> derived?`,
    a: `By telescoping. ${k}<sup>3</sup> − (${k} − 1)<sup>3</sup> = 3${sq(k)} − 3${k} + 1, summed for ${k} = 1, …, ${n}: the left collapses to ${n}<sup>3</sup>, so ${n}<sup>3</sup> = 3∑${sq(k)} − 3∑${k} + ${n}; substitute ∑${k} and solve for ∑${sq(k)}. For ∑${k}<sup>3</sup> use (${k} + 1)<sup>4</sup> − ${k}<sup>4</sup> = 4${k}<sup>3</sup> + 6${sq(k)} + 4${k} + 1, whose left side telescopes to (${n} + 1)<sup>4</sup> − 1; ${k}<sup>5</sup> − (${k} − 1)<sup>5</sup> gives ∑${n}<sup>4</sup>. If you forget ∑${sq(n)}, re-derive it in 4 lines`,
    why: `3∑${sq(k)} = ${n}<sup>3</sup> + ${fr(`3${n}(${n} + 1)`, '2')} − ${n} gives ∑${sq(k)} = ${fr(`${n}(${n} + 1)(2${n} + 1)`, '6')}.`,
    say: '∑<i>n</i><sup>3</sup> = (∑<i>n</i>)<sup>2</sup>.',
  },
  // pp. 727, 729–730
  {
    topic: 6,
    kind: 'remember',
    q: 'What is the master technique for summing a series, and when does it apply?',
    a: `Find ${tn}, expand it to powers of ${n}, then use linearity: ${tn} = <i>an</i><sup>3</sup> + <i>bn</i><sup>2</sup> + <i>cn</i> + ${d} ⟹ ${Sn} = ${a}∑${n}<sup>3</sup> + ${b}∑${sq(n)} + ${c}∑${n} + <i>dn</i>. Linearity needs the same index range on every piece. It applies only when ${tn} is a polynomial in ${n} (or reducible to one): expand products like ${r}(${r} + 1)(${r} + 2) first; for ${fr('1', `${r}(${r} + 1)`)} or AGP terms use telescoping or the AGP method instead`,
    why: `2 · 4 + 4 · 6 + 6 · 8 + ⋯: ${tr} = 4${sq(r)} + 4${r}, so ${Sn} = ${fr(`4${n}(${n} + 1)(${n} + 2)`, '3')}, and the 20th term alone is 4 · 20 · 21 = 1680.`,
    say: null,
  },
  // pp. 727, 729–730
  {
    topic: 6,
    kind: 'remember',
    q: 'When the differences of consecutive terms form an AP, what is the general term, and how do you sum products taken two at a time?',
    a: `The general term is one degree higher than the differences: for 3, 7, 13, 21, 31, … the differences 4, 6, 8, 10 form an AP, so ${tn} is quadratic, ${tn} = ${sq(n)} + ${n} + 1, and ∑ applies termwise. For products two at a time: (∑ ${sb('a', ir)})<sup>2</sup> = ∑ ${sb('a', ir)}<sup>2</sup> + 2${SUB(`${ir} < <i>j</i>`)} ${sb('a', ir)}${sb('a', '<i>j</i>')}, so ${SUB(`${ir} < <i>j</i>`)} ${sb('a', ir)}${sb('a', '<i>j</i>')} = ${fr(`(∑ ${sb('a', ir)})<sup>2</sup> − ∑ ${sb('a', ir)}<sup>2</sup>`, '2')}`,
    why: `3 + 7 + 13 + 21 + 31 + ⋯: ${Sn} = ${fr(`${n}(${sq(n)} + 3${n} + 5)`, '3')}; check ${sb('S', '3')} = 23.`,
    say: null,
  },
  // p. 732
  {
    topic: 6,
    kind: 'mixup',
    q: `Is ${SUM(`${r}=1`, n)} ${r}<sup>3</sup> equal to ${fr(`${n}(${n} + 1)(2${n} + 1)`, '6')}?`,
    a: `No: that is ∑${sq(r)}. ∑${r}<sup>3</sup> = [${fr(`${n}(${n} + 1)`, '2')}]<sup>2</sup>, the square of the whole fraction, not ${fr(`${sq(n)}(${n} + 1)`, '2')} (which squares only ${n}). Swapping the ∑${sq(n)} and ∑${n}<sup>3</sup> formulas is the dominant error of this topic`,
    why: `${n} = 3: ∑${sq(r)} = 14 but ∑${r}<sup>3</sup> = 36.`,
    say: null,
  },
  // pp. 730, 732
  {
    topic: 6,
    kind: 'mistake',
    q: `Is the general term of 1 · 2 + 2 · 3 + 3 · 4 + … equal to ${sq(n)}?`,
    a: `No: ${n}(${n} + 1). ${sq(n)} forgets the second factor, ${n}(${n} − 1) shifts the index, and 2${n} fits only ${n} = 1. The term-recognition step is where special-series problems are won or lost. The other listed slips: summing a product without expanding it, applying ${SUM('1', n)} formulas to a sum that does not start at 1, treating a quadratic ${tn} as linear because only first differences were checked, and using the polynomial method on an AGP term`,
    why: `${SUM(`${k}=1`, '20')}(1 + 2 + ⋯ + ${k}) = ${fr('1', '2')}(∑${sq(k)} + ∑${k}) = ${fr('1', '2')}(2870 + 210) = 1540.`,
    say: null,
  },
  // pp. 730, 732–733
  {
    topic: 6,
    kind: 'shortcut',
    q: `If ∑${r} = 78, what is ∑${r}<sup>3</sup>, and how do you sum 5 + 55 + 555 + …?`,
    a: `∑${r}<sup>3</sup> = (∑${r})<sup>2</sup> = 78<sup>2</sup> = 6084, the fastest shortcut in the chapter: no need even to find ${n} (it is 12). For 5 + 55 + 555 + ⋯ peel off the GP and the constant separately: ${tr} = 5 · ${fr(`10<sup>${r}</sup> − 1`, '9')}, so ${Sn} = ${fr('5', '9')}(${fr(`10(10<sup>${n}</sup> − 1)`, '9')} − ${n}) = ${fr('5', '81')}(10<sup>${n}+1</sup> − 9${n} − 10)`,
    why: `.6 + .66 + .666 + ⋯ = ${fr('2', '27')}(9${n} − 1 + 10<sup>−${n}</sup>).`,
    say: null,
  },

  // ── Topic 08 · Telescoping Series & Partial Fractions ──
  // pp. 734–735, 737, 741
  {
    topic: 7,
    kind: 'remember',
    q: 'What is the telescoping principle, and which pieces survive?',
    a: `If ${tr} = ${Vr(r)} − ${Vr(`${r}+1`)}, then ${SUM(`${r}=1`, n)} ${tr} = (${Vr('1')} − ${Vr('2')}) + ⋯ + (${Vr(n)} − ${Vr(`${n}+1`)}) = ${Vr('1')} − ${Vr(`${n}+1`)}: every interior <i>V</i> appears once with + and once with −. With a shift of one, only the first and last pieces survive; the term must factor into a genuine difference of consecutive quantities, and with a larger fixed shift as many pieces survive at each end as the shift. The endpoints are ${Vr('1')} − ${Vr(`${n}+1`)}, not ${Vr('0')} − ${Vr(n)}`,
    why: `${SUM(`${r}=1`, '5')} ${fr('1', `${r}(${r} + 1)`)} = ${Vr('1')} − ${Vr('6')} = 1 − ${fr('1', '6')} = ${fr('5', '6')}, with ${Vr(r)} = ${fr('1', r)}.`,
    say: 'Rewrite each term as a difference of consecutive things; the middle collapses, only the ends survive.',
  },
  // pp. 735, 737, 740
  {
    topic: 7,
    kind: 'remember',
    q: 'Which standard partial-fraction sums must you know?',
    a: `${fr('1', `${r}(${r} + 1)`)} = ${fr('1', r)} − ${fr('1', `${r} + 1`)}, so ${SUM(`${r}=1`, n)} ${fr('1', `${r}(${r} + 1)`)} = ${fr(n, `${n} + 1`)}. ${fr('1', `${r}(${r} + 1)(${r} + 2)`)} = ${fr('1', '2')}[${fr('1', `${r}(${r} + 1)`)} − ${fr('1', `(${r} + 1)(${r} + 2)`)}], so the sum is ${fr('1', '2')}[${fr('1', '1 · 2')} − ${fr('1', `(${n} + 1)(${n} + 2)`)}] = ${fr(`${n}(${n} + 3)`, `4(${n} + 1)(${n} + 2)`)}. ${SUM(`${r}=1`, n)} ${fr('1', `(2${r} − 1)(2${r} + 1)`)} = ${fr('1', '2')}[1 − ${fr('1', `2${n} + 1`)}] = ${fr(n, `2${n} + 1`)}. Track the constant multiplier the difference form carries`,
    why: `${fr('1', '1 · 4')} + ${fr('1', '4 · 7')} + ${fr('1', '7 · 10')} + ⋯: ${tr} = ${fr('1', '3')}[${fr('1', `3${r} − 2`)} − ${fr('1', `3${r} + 1`)}], so ${Sn} = ${fr(n, `3${n} + 1`)}.`,
    say: null,
  },
  // pp. 735, 737–738
  {
    topic: 7,
    kind: 'remember',
    q: `How do you sum products of consecutive integers, ${r} · ${r}!, and ${fr('1', `√${r} + √(${r} + 1)`)}?`,
    a: `The ${Vr(n)} method: append the next factor and divide by the new count (times the common difference), subtracting the same expression at ${r} = 0 unless the first factor is ${r}: ${SUM(`${r}=1`, n)} ${r}(${r} + 1) ⋯ (${r} + ${k} − 1) = ${fr(`${n}(${n} + 1)(${n} + 2) ⋯ (${n} + ${k})`, `${k} + 1`)}, because ${Vr(r)} − ${Vr(`${r}−1`)} = 3${r}(${r} + 1) for ${Vr(r)} = ${r}(${r} + 1)(${r} + 2). Factorials: ${r} · ${r}! = (${r} + 1)! − ${r}!, so ∑${r} · ${r}! = (${n} + 1)! − 1. Surds: rationalise, ${fr('1', `√${r} + √(${r} + 1)`)} = √(${r} + 1) − √${r}, so the sum is √(${n} + 1) − 1`,
    why: `${SUM(`${r}=1`, n)} ${r}(${r} + 1)(${r} + 2) = ${fr(`${n}(${n} + 1)(${n} + 2)(${n} + 3)`, '4')}; at ${n} = 99 the surd sum is √100 − 1 = 9.`,
    say: null,
  },
  // p. 739
  {
    topic: 7,
    kind: 'mixup',
    q: `Is ${SUM(`${r}=1`, n)} ${fr('1', `${r}(${r} + 1)`)} equal to ${fr('1', `${n}(${n} + 1)`)}?`,
    a: `No: ${fr('1', `${n}(${n} + 1)`)} is the last term, not the sum. The sum is 1 − ${fr('1', `${n} + 1`)} = ${fr(n, `${n} + 1`)}; ${fr(`${n} + 1`, n)} inverts it, and 1 + ${fr('1', `${n} + 1`)} adds the endpoint instead of subtracting it`,
    why: `As ${n} → ∞ the sum tends to 1: ${fr('1', '1 · 2')} + ${fr('1', '2 · 3')} + ⋯ = 1 exactly.`,
    say: null,
  },
  // pp. 739–740
  {
    topic: 7,
    kind: 'mistake',
    q: `Is ${SUM(`${r}=1`, n)} ${fr('1', `√${r} + √(${r} + 1)`)} equal to √${n} − 1?`,
    a: `No: √(${n} + 1) − 1. The surviving endpoints are ${Vr('1')} − ${Vr(`${n}+1`)}: √${n} − 1 is an off-by-one endpoint slip, and √(${n} + 1) + 1 has the wrong sign. The other listed slips: never rewriting ${tr} as a difference (applying polynomial ∑ formulas to a fraction or surd, the dominant error), dropping the ${fr('1', '2')} (or ${fr('1', k)}) multiplier, and the wrong divisor in the ${Vr(n)} method (divide by ${k} + 1 for ${k} factors)`,
    why: `${fr('1', '2 · 3')} + ${fr('1', '3 · 4')} + ⋯ to ${n} terms = ${fr('1', '2')} − ${fr('1', `${n} + 2`)} = ${fr(n, `2(${n} + 2)`)}.`,
    say: null,
  },
  // pp. 738, 740
  {
    topic: 7,
    kind: 'shortcut',
    q: `How do you sum ${SUM(`${r}=1`, n)} ${fr(r, `(${r} + 1)!`)} and ${SUM(`${r}=1`, n)} ${fr(`2${r} + 1`, `${sq(r)}(${r} + 1)<sup>2</sup>`)}?`,
    a: `Look for a hidden difference of consecutive things. ${fr(r, `(${r} + 1)!`)} = ${fr(`(${r} + 1) − 1`, `(${r} + 1)!`)} = ${fr('1', `${r}!`)} − ${fr('1', `(${r} + 1)!`)}, so the sum is 1 − ${fr('1', `(${n} + 1)!`)}. Since (${r} + 1)<sup>2</sup> − ${sq(r)} = 2${r} + 1, the second term is ${fr('1', sq(r))} − ${fr('1', `(${r} + 1)<sup>2</sup>`)}, and the sum is 1 − ${fr('1', `(${n} + 1)<sup>2</sup>`)} = ${fr(`${n}(${n} + 2)`, `(${n} + 1)<sup>2</sup>`)}. For a fraction try partial fractions; for surds in a denominator, rationalise`,
    why: `Both sums tend to 1 as ${n} → ∞.`,
    say: null,
  },

  // ── Topic 09 · Growth, Decay and the Product of a GP ──
  // pp. 742–743, 745, 757
  {
    topic: 8,
    kind: 'remember',
    q: 'When is a growing or shrinking quantity a GP, and what are the compound-growth formulas?',
    a: `When it changes by a fixed percentage of its current value each period: the values ${P}, ${P}(1 + ${ir}), ${P}(1 + ${ir})<sup>2</sup>, … form a GP with ratio 1 + ${ir}, ${ir} = ${fr(R, '100')}. ${A} = ${P}(1 + ${fr(R, '100')})<sup>${n}</sup>, CI = ${A} − ${P}; decay at ${R}% gives ${r} = 1 − ${fr(R, '100')} < 1, a shrinking GP that never reaches zero; compounded ${k} times a year for <i>y</i> years, ${r} = 1 + ${fr(R, `100${k}`)} and ${n} = <i>ky</i>. A percentage of the original value gives equal steps, an AP: simple interest ${A} = ${P}(1 + ${fr(`<i>nR</i>`, '100')}), straight-line depreciation`,
    why: `Rs 15,625 at 20% on the reducing balance for 5 years: 15625(${fr('4', '5')})<sup>5</sup> = Rs 5,120; at 8% compound interest for 3 years: Rs 19,683, CI Rs 4,058.`,
    say: '“Compounded / reducing balance / of its current value” ⇒ GP. “Of the original cost / simple interest” ⇒ AP.',
  },
  // pp. 745, 748, 752–753
  {
    topic: 8,
    kind: 'remember',
    q: 'What is the total of a fixed instalment Q deposited every period for n periods at rate i?',
    a: `Deposits at the end of each period: <i>M</i> = ${Q}${fr(`(1 + ${ir})<sup>${n}</sup> − 1`, ir)}, since the deposit made at the end of period ${k} is worth ${Q}(1 + ${ir})<sup>${n}−${k}</sup>, a GP with ${n} terms. Deposits at the beginning: every deposit earns one extra period, so multiply by (1 + ${ir}): <i>M</i> = ${Q}(1 + ${ir})${fr(`(1 + ${ir})<sup>${n}</sup> − 1`, ir)}. Valid for ${ir} ≠ 0; at ${ir} = 0 the total is <i>nQ</i>. Ask whether the last deposit earns any interest`,
    why: `Rs 10,000 at the beginning of each year for 3 years at 10%: 10000 × 1.1 × 3.31 = Rs 36,410; the end formula gives Rs 33,100.`,
    say: '“After how many years” ⇒ take logs, round up.',
  },
  // pp. 747, 749, 758
  {
    topic: 8,
    kind: 'remember',
    q: 'What is the product of n terms of a GP, and how are the sum S, the product P and the sum of reciprocals R linked?',
    a: `${P} = ${a}<sup>${n}</sup>${r}<sup>${n}(${n}−1)/2</sup> = (<i>al</i>)<sup>${n}/2</sup>: outside-in pairs all share the product <i>al</i>, as an AP’s share the sum ${a} + ${l}. The reciprocals form a GP with ratio ${fr('1', r)}, and the common bracket cancels: ${fr(S, R)} = <i>al</i> = ${sq(a)}${r}<sup>${n}−1</sup> (when ${R} ≠ 0), and ${sq(P)}${R}<sup>${n}</sup> = ${S}<sup>${n}</sup> for every GP, including ${r} = 1. (<i>al</i>)<sup>${n}/2</sup> is safe for positive terms; when the terms are not all positive (${r} < 0 or ${a} < 0), use ${a}<sup>${n}</sup>${r}<sup>${n}(${n}−1)/2</sup>. ${sq(P)} = (${fr(S, R)})<sup>${n}</sup> fixes ${P} only up to sign`,
    why: `Four positive terms with ${S} = 30, ${R} = ${fr('15', '16')}: <i>al</i> = 32, ${P} = 32<sup>2</sup> = 1024 (the GP 2, 4, 8, 16). For 1, −1, 1, −1, ${S} = ${R} = 0 and ${fr(S, R)} is undefined.`,
    say: 'Two of {<i>S</i>, <i>P</i>, <i>R</i>} given ⇒ compute <i>al</i> = <frac><num><i>S</i></num><den><i>R</i></den></frac> first.',
  },
  // pp. 748, 750
  {
    topic: 8,
    kind: 'remember',
    q: 'In a growth problem, what exponent does the value after n periods carry, and how do you find an unknown n?',
    a: `Exponent ${n}: the value after ${n} periods is <i>Pr</i><sup>${n}</sup>, the (${n} + 1)th term of ${A}<sub>0</sub>, ${A}<sub>1</sub>, …, because the first term is the value at time zero. For an unknown ${n}, take logs: for growth (${r} > 1), ${r}<sup>${n}</sup> > ${k} gives ${n} > ${fr(`log ${k}`, `log ${r}`)}; for decay (0 < ${r} < 1) log ${r} < 0 and dividing flips the inequality. Since ${n} counts whole periods, take the next integer up for a “first exceeds” or “first falls below” question, and confirm it by substituting`,
    why: `Population 20,000 growing at 5%: ${n} > ${fr('0.1761', '0.0212')} ≈ 8.31, so ${n} = 9 (29,549 at ${n} = 8, still below 30,000).`,
    say: null,
  },
  // pp. 743, 755–756
  {
    topic: 8,
    kind: 'mixup',
    q: 'A machine “depreciates by 20% of its value each year” or “by 20% of its original cost each year”: same model?',
    a: `No. Of its value each year: a GP with ${r} = 0.8. Of its original cost: equal rupee losses, an AP with ${d} = −0.2${P}. Read the sentence, not the number: locate the base of the percentage before you touch a formula. The word “compounded” (or “on the amount”) is the switch from simple to compound interest`,
    why: `Rs 8,000 at 5% for 2 years compounded annually: 8000(1.05)<sup>2</sup> = Rs 8,820; Rs 8,800 is the simple-interest answer.`,
    say: null,
  },
  // pp. 750, 756
  {
    topic: 8,
    kind: 'mistake',
    q: 'A machine depreciates at 10% on the reducing balance. Is its value first below half after 6 complete years?',
    a: `No: 7. (0.9)<sup>${n}</sup> < 0.5 gives ${n} log 0.9 < log 0.5; both logs are negative, so dividing flips the inequality: ${n} > ${fr('0.3010', '0.0458')} ≈ 6.57. Truncating to 6 is the trap: (0.9)<sup>6</sup> = 0.5314 is still above half, (0.9)<sup>7</sup> = 0.4783 below. 10 years is straight-line thinking: a shrinking GP never reaches zero. The other listed slips: not dividing the rate by the compounding frequency, writing <i>Pr</i><sup>${n}−1</sup>, the end-of-period annuity formula for beginning-of-period deposits, and reporting the amount when the compound interest was asked`,
    why: `12% per annum compounded quarterly for 2 years: ${r} = 1.03 and ${n} = 8, not ${r} = 1.12 and ${n} = 2.`,
    say: null,
  },
  // pp. 750, 757
  {
    topic: 8,
    kind: 'shortcut',
    q: 'How do you handle a compound-interest power and a drawdown balance quickly?',
    a: `Convert the rate to an exact fraction before powering: 8% → ${fr('27', '25')}, 10% → ${fr('11', '10')}, 20% decay → ${fr('4', '5')}; board principals such as 15,625 are chosen so the denominator cancels. For withdrawals at the end of each period, compute the break-even corpus <i>C</i> = ${fr('annual withdrawal', ir)} first; then <i>B</i><sub>${n}</sub> = <i>C</i> − (<i>C</i> − ${P})(1 + ${ir})<sup>${n}</sup>`,
    why: `Rs 1,00,000 at 8% with Rs 10,000 withdrawn yearly: <i>C</i> = 125000, <i>B</i><sub>${n}</sub> = 125000 − 25000(1.08)<sup>${n}</sup>, and (1.08)<sup>${n}</sup> ≥ 5 at ${n} ≈ 20.93: the fund fails in year 21.`,
    say: null,
  },

  // ── Additional topic A · Mixed AP–GP–HP Chain Problems ──
  // pp. 758–759
  {
    topic: 9,
    kind: 'remember',
    q: 'How do you attack a chain problem with a different progression on each overlapping triple?',
    a: `Replace every progression statement by its middle-term equation: AP 2${b} = ${a} + ${c}; GP ${sq(b)} = <i>ac</i>; HP ${fr('2', b)} = ${fr('1', a)} + ${fr('1', c)}, that is ${b} = ${fr(`2<i>ac</i>`, `${a} + ${c}`)}. Then eliminate the letters that appear in two conditions, and never expand more than you must: chain identities almost always collapse through a single cancellation. No letter may be zero, and the HP relation also needs ${a} + ${c} ≠ 0`,
    why: `In the chain ${a}, ${b}, ${c} (AP), ${b}, ${c}, ${d} (GP), ${c}, ${d}, ${e} (HP), ${b} and ${d} each appear in two conditions; eliminating them leaves a relation among ${a}, ${c}, ${e}.`,
    say: 'Replace every progression statement by its middle-term equation, then eliminate.',
  },
  // pp. 759–760
  {
    topic: 9,
    kind: 'remember',
    q: 'If a, b, c are in AP, b, c, d in GP and c, d, e in HP, what can you say about a, c, e? And if a, b, c are in AP and b, c, d in HP?',
    a: `${a}, ${c}, ${e} are in GP. ${d} = ${fr(sq(c), b)} = ${fr(`2<i>ce</i>`, `${c} + ${e}`)}; cancel ${c} (≠ 0, a term of a GP) to get ${c}(${c} + ${e}) = 2<i>be</i>, then 2${b} = ${a} + ${c} gives ${sq(c)} = <i>ae</i>: the middle progression survives. For AP then HP: 2<i>bd</i> = ${c}(${b} + ${d}) and ${a} = 2${b} − ${c} give <i>ad</i> = <i>bc</i>`,
    why: `${a} = 1, ${b} = 3: ${c} = 5, ${d} = ${fr('25', '3')}, ${e} = ${fr(sq(c), a)} = 25.`,
    say: null,
  },
  // pp. 759, 760
  {
    topic: 9,
    kind: 'mixup',
    q: `Which form of the HP condition do you write: ${fr('2', b)} = ${fr('1', a)} + ${fr('1', c)} or ${b} = ${fr(`2<i>ac</i>`, `${a} + ${c}`)}?`,
    a: `Either: they are the same statement. Use the reciprocal form when the letters are in denominators, and the product form when you are about to cross-multiply; picking the convenient shape halves the algebra. In any HP proof, reciprocate first`,
    why: `${a}, ${b}, ${c} in HP: with ${fr('1', a)} = ${x} − <i>D</i>, ${fr('1', b)} = ${x}, ${fr('1', c)} = ${x} + <i>D</i>, ${fr(`${b} + ${a}`, `${b} − ${a}`)} + ${fr(`${b} + ${c}`, `${b} − ${c}`)} = 2.`,
    say: null,
  },
  // p. 760
  {
    topic: 9,
    kind: 'mistake',
    q: `If ${a}, ${b}, ${c} are in AP and ${sq(a)}, ${sq(b)}, ${sq(c)} in HP, must ${a} = ${b} = ${c}?`,
    a: `Not necessarily: the conditions give (${a} − ${c})<sup>2</sup>(${sq(a)} + 4<i>ac</i> + ${sq(c)}) = 0, so either ${a} = ${c} (and then ${a} = ${b} = ${c}), or ${sq(a)} + 4<i>ac</i> + ${sq(c)} = 0, which is 4${sq(b)} = −2<i>ac</i>: ${a}, ${b}, −${fr(c, '2')} are in GP. Dividing by ${a} − ${c} loses the first case; keeping only it loses the second`,
    why: `(${a} + ${c})<sup>2</sup> = −2<i>ac</i> and ${a} + ${c} = 2${b} give ${sq(b)} = ${a} · (−${fr(c, '2')}).`,
    say: null,
  },
  // p. 760
  {
    topic: 9,
    kind: 'shortcut',
    q: 'The AM of two positive numbers is twice their HM. Find their ratio fast.',
    a: `${fr(`${a} + ${b}`, '2')} = 2 · ${fr(`2<i>ab</i>`, `${a} + ${b}`)} gives (${a} + ${b})<sup>2</sup> = 8<i>ab</i>, that is ${sq(a)} − 6<i>ab</i> + ${sq(b)} = 0, so ${a} ∶ ${b} = 3 + 2√2 ∶ 1, equivalently (√2 + 1)<sup>2</sup> ∶ 1; the other root 3 − 2√2 is the same ratio inverted`,
    why: `${a}, ${b}, ${c} in AP and ${b}, ${c}, ${d} in HP with ${a} = 3, ${b} = 5: ${c} = 7 and <i>ad</i> = <i>bc</i> = 35, so ${d} = ${fr('35', '3')}.`,
    say: null,
  },

  // ── Additional topic B · Alternating-Sign Series ──
  // pp. 761, 763
  {
    topic: 10,
    kind: 'remember',
    q: `How do you sum an alternating series ${SUM(`${r}=1`, n)}(−1)<sup>${r}−1</sup>${tr}?`,
    a: `Not with the standard ∑${r}, ∑${sq(r)}, ∑${r}<sup>3</sup> formulas directly, since (−1)<sup>${r}−1</sup> is not a polynomial in ${r}. Pair the terms from the front: the ${k}th bracket ${sb('t', `2${k}−1`)} − ${sb('t', `2${k}`)}, for ${tr} a polynomial of degree ${p}, is a polynomial in ${k} of degree ${p} − 1, summed with the ordinary formulas. Then split on the parity of ${n}: for ${n} = 2${m} the pairing is exact; for odd ${n} apply the even result to ${n} − 1 terms and add ${tn} separately`,
    why: `(2${k} − 1)<sup>2</sup> − (2${k})<sup>2</sup> = −(4${k} − 1), by the difference of squares rather than by expanding.`,
    say: 'The alternating sum of the first <i>n</i> squares is the ordinary sum of the first <i>n</i> naturals, with a sign.',
  },
  // pp. 761, 763–764
  {
    topic: 10,
    kind: 'remember',
    q: 'What are the three standard alternating sums?',
    a: `${SUM(`${r}=1`, n)}(−1)<sup>${r}−1</sup>${r} = ${fr(`${n} + 1`, '2')} (${n} odd), −${fr(n, '2')} (${n} even); ${SUM(`${r}=1`, n)}(−1)<sup>${r}−1</sup>${sq(r)} = (−1)<sup>${n}−1</sup>${fr(`${n}(${n} + 1)`, '2')}; ${SUM(`${r}=1`, `2${m}`)}(−1)<sup>${r}−1</sup>${r}<sup>3</sup> = −${sq(m)}(4${m} + 3), for an even number 2${m} of terms`,
    why: `1<sup>2</sup> − 2<sup>2</sup> + ⋯ + 15<sup>2</sup> = 120 and 1<sup>2</sup> − 2<sup>2</sup> + ⋯ − 20<sup>2</sup> = −210.`,
    say: null,
  },
  // p. 764
  {
    topic: 10,
    kind: 'mixup',
    q: 'Do 1<sup>2</sup> − 2<sup>2</sup> + ⋯ + 15<sup>2</sup> and 1<sup>2</sup> − 2<sup>2</sup> + ⋯ − 100<sup>2</sup> have the same sign?',
    a: `No. The sign is set by the parity of the last term: an odd count ends on a plus and gives +${fr(`${n}(${n} + 1)`, '2')}; an even count ends on a minus and gives −${fr(`${n}(${n} + 1)`, '2')}. So +${fr('15 · 16', '2')} = 120, but −${fr('100 · 101', '2')} = −5050`,
    why: `${sb('S', '4')} = 1 − 4 + 9 − 16 = −10 and ${sb('S', '5')} = −10 + 25 = 15.`,
    say: null,
  },
  // pp. 761, 763
  {
    topic: 10,
    kind: 'mistake',
    q: `Is 1<sup>2</sup> − 2<sup>2</sup> + 3<sup>2</sup> − ⋯ to ${n} terms equal to −${fr(`${n}(${n} + 1)`, '2')}?`,
    a: `Only for even ${n}. For odd ${n}, ${Sn} = ${sb('S', `${n}−1`)} + ${sq(n)} = −${fr(`(${n} − 1)${n}`, '2')} + ${sq(n)} = ${fr(`${n}(${n} + 1)`, '2')}. An answer that does not distinguish odd ${n} from even ${n} is incomplete; the single closed form (−1)<sup>${n}−1</sup>${fr(`${n}(${n} + 1)`, '2')} covers both`,
    why: `1 − 2 + 3 − 4 + ⋯: each front pair is −1, so ${fr(`${n} + 1`, '2')} for odd ${n} and −${fr(n, '2')} for even ${n}.`,
    say: null,
  },
  // pp. 763–764
  {
    topic: 10,
    kind: 'shortcut',
    q: 'Evaluate 1<sup>3</sup> − 2<sup>3</sup> + 3<sup>3</sup> − 4<sup>3</sup> + ⋯ − 10<sup>3</sup> quickly.',
    a: `10 terms is an even count, 2${m} with ${m} = 5, so the pairing is exact and −${sq(m)}(4${m} + 3) = −25 × 23 = −575. The ${k}th bracket is (2${k} − 1)<sup>3</sup> − (2${k})<sup>3</sup> = −12${sq(k)} + 6${k} − 1`,
    why: `1<sup>3</sup> − 2<sup>3</sup> + ⋯ − 8<sup>3</sup> (${m} = 4) = −16 × 19 = −304; check ${m} = 1: 1 − 8 = −7.`,
    say: null,
  },

  // ── Additional topic C · Sum of Products Taken Two at a Time ──
  // pp. 764–765
  {
    topic: 11,
    kind: 'remember',
    q: `Why is (${a1} + ⋯ + ${an})<sup>2</sup> = ∑ ${sb('a', ir)}<sup>2</sup> + 2${SUB(`${ir} < <i>j</i>`)} ${sb('a', ir)}${sb('a', '<i>j</i>')}?`,
    a: `It is a counting argument, not an algebraic trick: expanding (${a1} + ⋯ + ${an})<sup>2</sup> produces every ordered pair (${ir}, <i>j</i>) exactly once. The ${n} pairs with ${ir} = <i>j</i> give ∑ ${sb('a', ir)}<sup>2</sup>; every unordered pair with ${ir} ≠ <i>j</i> appears twice, as ${sb('a', ir)}${sb('a', '<i>j</i>')} and ${sb('a', '<i>j</i>')}${sb('a', ir)}, which is where the factor 2 comes from. So ${SUB(`1≤${ir} < <i>j</i>≤${n}`)} ${sb('a', ir)}${sb('a', '<i>j</i>')} = ${fr(`(∑ ${sb('a', ir)})<sup>2</sup> − ∑ ${sb('a', ir)}<sup>2</sup>`, '2')}: you never enumerate the pairs`,
    why: `${a} + ${b} + ${c} = 9 and ${sq(a)} + ${sq(b)} + ${sq(c)} = 35: <i>ab</i> + <i>bc</i> + <i>ca</i> = ${fr('81 − 35', '2')} = 23.`,
    say: 'Compute the square of the sum, subtract the sum of the squares, halve.',
  },
  // p. 765
  {
    topic: 11,
    kind: 'remember',
    q: `What is the sum of the products of the first ${n} natural numbers taken two at a time?`,
    a: `${SUB(`1≤${ir} < <i>j</i>≤${n}`)} <i>ij</i> = ${fr('1', '2')}[${fr(`${sq(n)}(${n} + 1)<sup>2</sup>`, '4')} − ${fr(`${n}(${n} + 1)(2${n} + 1)`, '6')}] = ${fr(`${n}(${n} + 1)(${n} − 1)(3${n} + 2)`, '24')}. Take out the common factor ${n}(${n} + 1) before combining; the factor (${n} − 1) correctly gives 0 at ${n} = 1, where there are no pairs`,
    why: `${n} = 3: 1 · 2 + 1 · 3 + 2 · 3 = 11 = ${fr('3 · 4 · 2 · 11', '24')}; ${n} = 4 gives 35.`,
    say: null,
  },
  // pp. 765–766
  {
    topic: 11,
    kind: 'mixup',
    q: `Is (∑ ${sb('a', ir)})<sup>2</sup> − ∑ ${sb('a', ir)}<sup>2</sup> the sum of the pairwise products?`,
    a: `No: it is twice that sum, since each unordered pair appears twice in the square. Halve it: ${SUB(`${ir} < <i>j</i>`)} ${sb('a', ir)}${sb('a', '<i>j</i>')} = ${fr(`(∑ ${sb('a', ir)})<sup>2</sup> − ∑ ${sb('a', ir)}<sup>2</sup>`, '2')}`,
    why: `${SUB(`1≤${ir} < <i>j</i>≤10`)} <i>ij</i> = ${fr(`55<sup>2</sup> − 385`, '2')} = ${fr('3025 − 385', '2')} = 1320.`,
    say: null,
  },
  // p. 766
  {
    topic: 11,
    kind: 'mistake',
    q: `For a list of ${n} numbers, ∑ ${sb('a', ir)} = 20 and ∑ ${sb('a', ir)}<sup>2</sup> = 150. Do you need the individual numbers to find ${SUB(`${ir} < <i>j</i>`)} ${sb('a', ir)}${sb('a', '<i>j</i>')}?`,
    a: `No: the identity is aggregate-to-aggregate. ${fr(`20<sup>2</sup> − 150`, '2')} = ${fr('400 − 150', '2')} = 125. Whenever a problem supplies a sum and a sum of squares, the sum of pairwise products is already determined, and no extra information about the terms is required`,
    why: `Six numbers with ∑ ${sb('a', ir)} = 24 and ∑ ${sb('a', ir)}<sup>2</sup> = 130: ${fr('576 − 130', '2')} = 223.`,
    say: null,
  },
  // p. 766
  {
    topic: 11,
    kind: 'shortcut',
    q: `Evaluate ${SUB(`1≤${ir} < <i>j</i>≤4`)} ${sq(ir)}<i>j</i><sup>2</sup> without listing the pairs.`,
    a: `Apply the method to ${sb('a', ir)} = ${sq(ir)}: ${fr(`(∑ ${sq(ir)})<sup>2</sup> − ∑ ${ir}<sup>4</sup>`, '2')} = ${fr(`30<sup>2</sup> − 354`, '2')} = 273, with ∑ ${sq(ir)} = 30 and ∑ ${ir}<sup>4</sup> = 354 for ${ir} = 1 to 4`,
    why: `The same move works for any list: square of the sum, minus the sum of the squares, halved.`,
    say: null,
  },

  // ── Additional topic D · The Sum ∑ r⁴: Derivation and Use ──
  // pp. 766–767
  {
    topic: 12,
    kind: 'remember',
    q: `How is ∑${r}<sup>4</sup> derived?`,
    a: `By the same telescoping identity, one power higher: ${k}<sup>5</sup> − (${k} − 1)<sup>5</sup> = 5${k}<sup>4</sup> − 10${k}<sup>3</sup> + 10${sq(k)} − 5${k} + 1. Summing for ${k} = 1, …, ${n}, the left telescopes to ${n}<sup>5</sup>: ${n}<sup>5</sup> = 5Σ<sub>4</sub> − 10Σ<sub>3</sub> + 10Σ<sub>2</sub> − 5Σ<sub>1</sub> + ${n}. Substitute the three known sums and clear denominators: 30Σ<sub>4</sub> = 6${n}<sup>5</sup> + 15${n}<sup>4</sup> + 10${n}<sup>3</sup> − ${n}, which factorises as ${n}(${n} + 1)(2${n} + 1)(3${sq(n)} + 3${n} − 1)`,
    why: `${n} = 3: ${fr('3 · 4 · 7 · 35', '30')} = 98 = 1 + 16 + 81; ${n} = 4: 354.`,
    say: 'Every one of ∑ <i>r</i>, ∑ <i>r</i><sup>2</sup>, ∑ <i>r</i><sup>3</sup>, ∑ <i>r</i><sup>4</sup> carries the factor <i>n</i>(<i>n</i> + 1).',
  },
  // p. 767
  {
    topic: 12,
    kind: 'remember',
    q: `What is ∑${r}<sup>4</sup>, and how do you recall it?`,
    a: `${SUM(`${r}=1`, n)} ${r}<sup>4</sup> = ${fr(`${n}(${n} + 1)(2${n} + 1)(3${sq(n)} + 3${n} − 1)`, '30')}. The first three factors ${n}(${n} + 1)(2${n} + 1) are exactly the numerator of ∑${sq(r)}, which makes the formula far easier to recall than it looks`,
    why: `${SUM(`${r}=1`, '10')} ${r}<sup>4</sup> = ${fr('10 · 11 · 21 · 329', '30')} = 77 × 329 = 25,333.`,
    say: null,
  },
  // pp. 767–768
  {
    topic: 12,
    kind: 'mixup',
    q: 'Do you sum 1<sup>2</sup> · 2<sup>2</sup> + 2<sup>2</sup> · 3<sup>2</sup> + 3<sup>2</sup> · 4<sup>2</sup> + ⋯ by partial fractions or by the standard sums?',
    a: `By the standard sums: ${tr} = ${sq(r)}(${r} + 1)<sup>2</sup> = ${r}<sup>4</sup> + 2${r}<sup>3</sup> + ${sq(r)} is a polynomial, not a reciprocal of a product. Expand, then use linearity with ∑${r}<sup>4</sup>: ${Sn} = ${fr(`${n}(${n} + 1)(${n} + 2)(3${sq(n)} + 6${n} + 1)`, '15')}. Reaching for partial fractions here wastes five minutes and produces nothing`,
    why: `${n} = 2: ${fr('2 · 3 · 4 · 25', '15')} = 40 = 4 + 36.`,
    say: null,
  },
  // p. 768
  {
    topic: 12,
    kind: 'mistake',
    q: `Is ${SUM(`${r}=11`, '20')} ${r}<sup>4</sup> equal to ${SUM('1', '20')} − ${SUM('1', '11')}?`,
    a: `No: subtract ${SUM('1', '10')}, the sum up to one below the lower limit. ${SUM('1', '20')} ${r}<sup>4</sup> = ${fr('20 · 21 · 41 · 1259', '30')} = 722,666, and 722,666 − 25,333 = 697,333`,
    why: `In general ${SUM(m, n)} = ${SUM('1', n)} − ${SUM('1', `${m}−1`)}.`,
    say: null,
  },
  // p. 768
  {
    topic: 12,
    kind: 'shortcut',
    q: `How can you check a closed form for ${SUM(`${r}=1`, n)} ${sq(r)}(${sq(r)} − 1) at a glance?`,
    a: `Expand to Σ<sub>4</sub> − Σ<sub>2</sub> and factorise: ${fr(`${n}(${n} − 1)(${n} + 1)(${n} + 2)(2${n} + 1)`, '10')}. The factor (${n} − 1) must be there, because the ${r} = 1 term is zero; then test a small ${n}`,
    why: `${n} = 3: ${fr('3 · 2 · 4 · 5 · 7', '10')} = 84 = 0 + 12 + 72.`,
    say: null,
  },

  // ── Additional topic E · Method of Differences When the Differences Form a GP ──
  // pp. 768–769
  {
    topic: 13,
    kind: 'remember',
    q: 'What is the method of differences, step by step?',
    a: `Write the first differences <i>d</i><sub>${k}</sub> = ${sb('t', `${k}+1`)} − ${sb('t', k)} and identify what they form. Telescope: ${tn} = ${sb('t', '1')} + ${SUM(`${k}=1`, `${n}−1`)} <i>d</i><sub>${k}</sub>. Sum the ${n} − 1 differences with the AP formula if they are in AP (then ${tn} is quadratic), or the GP formula if they are in GP (then ${tn} contains an exponential term). Verify on a given term that was not used to build the formula; then sum the series termwise`,
    why: `5, 7, 11, 19, 35, …: differences 2, 4, 8, 16, a GP, so ${tn} = 5 + 2(2<sup>${n}−1</sup> − 1) = 2<sup>${n}</sup> + 3.`,
    say: 'Constant difference between the <i>d</i><sub><i>k</i></sub> means AP; constant ratio between the <i>d</i><sub><i>k</i></sub> means GP.',
  },
  // pp. 769–770
  {
    topic: 13,
    kind: 'remember',
    q: `Once ${tn} = 2<sup>${n}</sup> + 3, how do you sum the series?`,
    a: `Split it into a GP and a constant series: ${Sn} = (2 + 4 + ⋯ + 2<sup>${n}</sup>) + 3${n} = 2<sup>${n}+1</sup> − 2 + 3${n}. With differences 3, 9, 27, 81 (2, 5, 14, 41, 122, …), ${tn} = ${fr(`3<sup>${n}</sup> + 1`, '2')} and ${Sn} = ${fr(`3<sup>${n}+1</sup> − 3`, '4')} + ${fr(n, '2')}`,
    why: `Check ${sb('S', '3')} = 16 − 2 + 9 = 23 = 5 + 7 + 11.`,
    say: null,
  },
  // pp. 769–770
  {
    topic: 13,
    kind: 'mixup',
    q: 'Differences 4, 6, 8, 10 and differences 2, 4, 8, 16: same kind of general term?',
    a: `No. 4, 6, 8, 10 have a constant difference of 2: an AP, and ${tn} is quadratic. 2, 4, 8, 16 have a constant ratio of 2: a GP, and ${tn} contains 2<sup>${n}</sup>. The diagnostic in the first step decides everything`,
    why: `2, 6, 12, 20, 30, …: differences 4, 6, 8, 10, so ${tn} = ${n}(${n} + 1) and ${Sn} = ${fr(`${n}(${n} + 1)(${n} + 2)`, '3')}.`,
    say: null,
  },
  // p. 769
  {
    topic: 13,
    kind: 'mistake',
    q: 'Can you fit a quadratic to 1, 3, 7, 15, 31, …?',
    a: `No: the differences 2, 4, 8, 16 form a GP, so no polynomial fit will ever work. A quadratic matches three terms and fails at the fourth, which is exactly how the trap is set. Telescoping gives ${tn} = 2<sup>${n}</sup> − 1 and ${Sn} = 2<sup>${n}+1</sup> − 2 − ${n}`,
    why: `4, 5, 7, 11, 19, …: differences 1, 2, 4, 8, so ${tn} = 2<sup>${n}−1</sup> + 3.`,
    say: null,
  },
  // p. 770
  {
    topic: 13,
    kind: 'shortcut',
    q: 'What do you do when the first differences form neither an AP nor a GP?',
    a: `Look at the differences of the differences. For 1, 2, 5, 12, 27, 58, … the differences 1, 3, 7, 15, 31 have their own differences 2, 4, 8, 16, a GP; so <i>d</i><sub>${k}</sub> = 2<sup>${k}</sup> − 1 and ${tn} = 1 + ${SUM(`${k}=1`, `${n}−1`)}(2<sup>${k}</sup> − 1) = 2<sup>${n}</sup> − ${n}`,
    why: `${sb('t', '6')} = 64 − 6 = 58, and ${Sn} = (2<sup>${n}+1</sup> − 2) − ${fr(`${n}(${n} + 1)`, '2')}.`,
    say: null,
  },

  // ── Additional topic F · Recovering aₙ: from Sₙ, from a recurrence, and in the limit ──
  // pp. 773, 786
  {
    topic: 14,
    kind: 'remember',
    q: `How do you recover ${an} from ${Sn}, and when is the sequence an AP or a GP from its first term?`,
    a: `${a1} = ${sb('S', '1')} and ${an} = ${Sn} − ${sb('S', `${n}−1`)} for ${n} ≥ 2 only: there is no ${sb('S', '0')}. Always test the ${n} ≥ 2 formula at ${n} = 1: if it reproduces ${sb('S', '1')}, one formula covers every term; if not, the answer is two-piece. ${Sn} need not be a polynomial. Diagnostics: an AP from the first term iff ${Sn} = <i>An</i><sup>2</sup> + <i>Bn</i> (no constant term); a GP with ${r} ≠ 1 from the first term iff ${Sn} has the shape <i>λ</i>(${r}<sup>${n}</sup> − 1) with <i>λ</i> ≠ 0 (for ${r} = 1, ${Sn} = <i>na</i>)`,
    why: `${Sn} = ${sq(n)} + 2${n} + 3: ${a1} = 6 and ${an} = 2${n} + 1 for ${n} ≥ 2, so 6, 5, 7, 9, …: not an AP. ${Sn} = 3<sup>${n}</sup> − 1 gives ${an} = 2 · 3<sup>${n}−1</sup> for every ${n}.`,
    say: 'An affine recurrence is a GP measured from <i>L</i>.',
  },
  // pp. 773–775, 786
  {
    topic: 14,
    kind: 'remember',
    q: 'How do you turn a recurrence into a closed form?',
    a: `Three shapes, with ${a1} given. Additive, ${sb('a', `${n}+1`)} = ${an} + <i>f</i>(${n}): telescope, ${an} = ${a1} + ${SUM(`${k}=1`, `${n}−1`)} <i>f</i>(${k}). Multiplicative, ${sb('a', `${n}+1`)} = ${an} · <i>g</i>(${n}): ${an} = ${a1} ∏<sub>${k}=1</sub><sup>${n}−1</sup> <i>g</i>(${k}). Affine, ${sb('a', `${n}+1`)} = <i>p</i>${an} + ${q} with ${p} ≠ 1: find the fixed point ${L} = ${fr(q, `1 − ${p}`)}; then ${an} − ${L} is a GP with ratio ${p}, so ${an} = (${a1} − ${L})${p}<sup>${n}−1</sup> + ${L}`,
    why: `${a1} = 2, ${an} = 3${sb('a', `${n}−1`)} + 1: ${L} = −${fr('1', '2')}, ${an} = ${fr(`5 · 3<sup>${n}−1</sup> − 1`, '2')}, giving 2, 7, 22, 67, 202.`,
    say: '<i>a</i><sub><i>n</i></sub> → <i>L</i> ⇒ <i>L</i> = <i>f</i>(<i>L</i>), never the converse.',
  },
  // pp. 775–776, 778, 786
  {
    topic: 14,
    kind: 'remember',
    q: 'How do you find the value of a nested radical or a continued fraction?',
    a: `Build the recursion ${sb('a', `${n}+1`)} = <i>f</i>(${an}), justify that the limit exists, then solve ${L} = <i>f</i>(${L}) and reject the roots the terms rule out, naming the reason (positivity, an upper bound, monotonicity). √(${c} + √(${c} + ⋯)) = ${fr(`1 + √(1 + 4${c})`, '2')}; √(${c}√(${c}√${c} ⋯)) = ${c}; ${c} + ${fr('1', `${c} + ${fr('1', `${c} + ⋯`)}`)} = ${fr(`${c} + √(${sq(c)} + 4)`, '2')}`,
    why: `√(6 + √(6 + ⋯)) = 3: the terms are positive, increasing and below 3, and −2 is rejected; 1 + ${fr('1', `1 + ⋯`)} = ${fr('1 + √5', '2')}.`,
    say: null,
  },
  // pp. 773, 776, 779
  {
    topic: 14,
    kind: 'mixup',
    q: `${Sn} = 5${sq(n)} + 3${n} and ${Sn} = ${sq(n)} + 5: does one formula give every term in both?`,
    a: `Only in the first. 5${sq(n)} + 3${n} has no constant term: ${an} = 10${n} − 2 also gives ${a1} = 8 = ${sb('S', '1')}, an AP with ${d} = 10. ${sq(n)} + 5 gives ${a1} = 6 but ${an} = 2${n} − 1 for ${n} ≥ 2: the terms 6, 3, 5, 7, not an AP; the constant is what breaks it`,
    why: `${Sn} = 2<sup>${n}+1</sup> − 2 gives ${an} = 2<sup>${n}</sup> for every ${n}: a GP with ${a} = 2, ${r} = 2.`,
    say: null,
  },
  // pp. 775, 777
  {
    topic: 14,
    kind: 'mistake',
    q: `${a1} = 3 and ${sb('a', `${n}+1`)} = 3${an} − 4. Is the limit 2, from ${L} = 3${L} − 4?`,
    a: `No: the limit does not exist. ${L} = <i>f</i>(${L}) only says what the limit must be if one exists. The closed form is ${an} = 3<sup>${n}−1</sup> + 2, which tends to ∞: 2 is a genuine fixed point, but the distance from it is multiplied by 3 every step, so it repels. For the affine case ${an} → ${L} iff ${abs(p)} < 1 (or ${a1} = ${L})`,
    why: `${a1} = 5, ${sb('a', `${n}+1`)} = 2${an} − 3: ${an} = 2<sup>${n}</sup> + 3 → ∞, although ${L} = 3.`,
    say: null,
  },
  // pp. 777, 779
  {
    topic: 14,
    kind: 'shortcut',
    q: `Find ${sb('a', '5')} for ${a1} = 1, ${sb('a', `${n}+1`)} = 4${an} + 3 without unfolding the terms.`,
    a: `Shape (iii): ${L} = ${fr('3', '1 − 4')} = −1 and ${a1} − ${L} = 2, so ${an} = 2 · 4<sup>${n}−1</sup> − 1 and ${sb('a', '5')} = 2(256) − 1 = 511. The answer is always a GP term plus a constant when ${p} ≠ 1; check the closed form on a term you did not use to build it`,
    why: `${a1} = 2, ${sb('a', `${n}+1`)} = ${an} + 3${n} + 1 (additive): ${an} = ${fr(`3${sq(n)} − ${n} + 2`, '2')}; ${n} = 4 gives 23.`,
    say: null,
  },

  // ── Additional topic G · AM-GM as an optimisation engine ──
  // pp. 780, 786
  {
    topic: 15,
    kind: 'remember',
    q: 'What do fixing the sum and fixing the product of positive numbers give?',
    a: `From ${fr(`${a1} + ⋯ + ${an}`, n)} ≥ (${a1}${sb('a', '2')} ⋯ ${an})<sup>1/${n}</sup>: if ∑ ${sb('a', ir)} = ${S} is fixed, ∏ ${sb('a', ir)} ≤ (${fr(S, n)})<sup>${n}</sup>; if ∏ ${sb('a', ir)} = ${P} is fixed, ∑ ${sb('a', ir)} ≥ <i>nP</i><sup>1/${n}</sup>. Both bounds are reached exactly when all the numbers are equal`,
    why: `Three positive numbers with sum 12: product at most (${fr('12', '3')})<sup>3</sup> = 64; with product 64: sum at least 3 · 64<sup>1/3</sup> = 12; both at 4, 4, 4.`,
    say: 'For positive numbers, fixing the sum caps the product, and fixing the product floors the sum, and both bounds are reached exactly when all the numbers are equal.',
  },
  // pp. 780–782, 787
  {
    topic: 15,
    kind: 'remember',
    q: `How do you split a weighted product such as ${x}<sup>${p}</sup>${y}<sup>${q}</sup> under <i>αx</i> + <i>βy</i> = ${k}?`,
    a: `Choose the terms so that the geometric mean is a constant: break the constraint into as many equal pieces as the exponents demand. Apply AM-GM to ${p} copies of ${fr(`<i>αx</i>`, p)} and ${q} copies of ${fr(`<i>βy</i>`, q)}, whose sum is exactly ${k}: ${x}<sup>${p}</sup>${y}<sup>${q}</sup> ≤ ${fr(`${p}<sup>${p}</sup>${q}<sup>${q}</sup>`, `<i>α</i><sup>${p}</sup><i>β</i><sup>${q}</sup>`)}(${fr(k, `${p} + ${q}`)})<sup>${p}+${q}</sup>, with equality iff ${fr(`<i>αx</i>`, p)} = ${fr(`<i>βy</i>`, q)}. The exponents give the number of copies; the coefficients give the divisor`,
    why: `${a} + ${b} + ${c} = 1: ${a} + ${fr(b, '2')} + ${fr(b, '2')} + ${fr(c, '3')} + ${fr(c, '3')} + ${fr(c, '3')} gives <i>ab</i><sup>2</sup>${c}<sup>3</sup> ≤ ${fr('1', '432')}, at ${a}, ${b}, ${c} = ${fr('1', '6')}, ${fr('1', '3')}, ${fr('1', '2')}.`,
    say: 'A bound containing the variable is not a bound.',
  },
  // pp. 780, 782
  {
    topic: 15,
    kind: 'mixup',
    q: `For ${x} > 0, does AM-GM on the two terms 2${x} and ${fr('3', sq(x))} give the least value of 2${x} + ${fr('3', sq(x))}?`,
    a: `No: 2${x} + ${fr('3', sq(x))} ≥ 2√(${fr(`6`, x)}) is true but useless, since the right-hand side still contains ${x}. Split it as ${x} + ${x} + ${fr('3', sq(x))}: the product is 3, a constant, so the sum is at least 3 · 3<sup>1/3</sup> = 3<sup>4/3</sup> ≈ 4.327, attained at ${x} = 3<sup>1/3</sup>. For <i>λ</i>${x}<sup>${m}</sup> + <i>μ</i>${x}<sup>−${k}</sup> (<i>λ</i>, <i>μ</i>, ${x} > 0), split the first term into ${k} pieces and the second into ${m}`,
    why: `3${x} + ${fr('12', sq(x))} = ${fr(`3${x}`, '2')} + ${fr(`3${x}`, '2')} + ${fr('12', sq(x))} ≥ 3 · 3 = 9, at ${x} = 2.`,
    say: null,
  },
  // pp. 780, 783–784
  {
    topic: 15,
    kind: 'mistake',
    q: `Is the minimum of ${x} + ${fr('4', x)} for ${x} ≥ 3 equal to 4?`,
    a: `No: ${fr('13', '3')}, at ${x} = 3. ${x} + ${fr('4', x)} ≥ 4 is true, but equality needs ${x} = ${fr('4', x)}, ${x} = 2, outside the domain, so 4 is a bound that is never reached. On ${x} ≥ 3 the function is increasing (for 3 ≤ ${x}<sub>1</sub> < ${x}<sub>2</sub>, the difference is (${x}<sub>2</sub> − ${x}<sub>1</sub>)(1 − ${fr('4', `${x}<sub>1</sub>${x}<sub>2</sub>`)}) > 0), so its least value is at the left endpoint. Always solve “all terms equal” and check it is allowed`,
    why: `${x} + ${fr('9', x)} for ${x} ≥ 4: not 6 (equality at ${x} = 3) but ${fr('25', '4')}, at ${x} = 4.`,
    say: null,
  },
  // pp. 784–785
  {
    topic: 15,
    kind: 'shortcut',
    q: `If ${x}, ${y} > 0 and ${x} + ${y} = 10, find the greatest value of ${x}<sup>3</sup>${y}<sup>2</sup>.`,
    a: `Five pieces: three copies of ${fr(x, '3')} and two of ${fr(y, '2')}, summing to 10, so [${fr(`${x}<sup>3</sup>${y}<sup>2</sup>`, '108')}]<sup>1/5</sup> ≤ 2 and ${x}<sup>3</sup>${y}<sup>2</sup> ≤ 108 · 32 = 3456, at ${fr(x, '3')} = ${fr(y, '2')}: ${x} = 6, ${y} = 4. Rebuild the bound from the splitting each time rather than memorising the general formula`,
    why: `<i>abc</i> = 1 with ${a}, ${b}, ${c} > 0: (1 + ${a})(1 + ${b})(1 + ${c}) ≥ 2√${a} · 2√${b} · 2√${c} = 8.`,
    say: null,
  },
];
