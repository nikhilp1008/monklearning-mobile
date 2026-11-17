/**
 * KEY POINTS for Mathematics Class 11, Chapter 6 (Permutations and
 * Combinations).
 *
 * Written for test mode: every point is a question to answer in your head,
 * then the answer and at most one more line. Four kinds, each a section on
 * the screen: Remember, Don't mix up, Common mistakes and Exam shortcuts.
 * Topics 01–06 and Additional topics A–D each have two or more Remember
 * points, at least one of each other kind and one Exam shortcut; the long
 * ones carry more (Topic 01, the factorial and two MCQ traps; Topics 02–03,
 * the alike, circular, restricted and grouped counts; Topic 05, the named
 * techniques; Additional C, the divisor toolkit; Topic 06, inclusion–exclusion, onto
 * counts, Stirling numbers, the distribution table and upper bounds): 70
 * points in all. Memory lines are a fifth, short section of their own, read
 * rather than tested: the first two of each topic.
 *
 * `topic`: Topics 01–06 are 0–5 (01–05 the main chapter, 06 the
 * supplement's Subtopic 06), Additional topics A–D are 6–9 (the "Additional
 * Topics" part's Addenda 07A–07D). No point refers to another topic by
 * number.
 *
 * Every fact is from the Master Reference book (the October 2026 edition); the
 * page (the bottom folio) is above each point. Remember: the topic's key
 * formulas and definitions, its derivations and procedures, and its Cheat
 * sheet. Common mistakes: its Common pitfalls and its MCQ traps (A–D, which
 * have no MCQs or pitfalls: their Speed Trap examples). Exam shortcuts: its
 * Pro-Tips, with a worked example or practice answer. `say`: the book's own
 * mnemonics, word for word without their quotation marks, from each topic's
 * cheat sheet (Topics 01–06) and from the closing "Cheat sheet: further
 * patterns", each given to the additional topic it sums up (A, B and D one
 * each, C two): twenty-three in all, every one the book prints, seventeen of
 * them memory lines (Topics 02–06 carry a third or fourth mnemonic on a later
 * point). Where the book
 * over-states a rule ("handle essentially every counting problem", "n!
 * defined only for non-negative integers", the gap method for "must not be
 * together", "every count is a positive integer", "Dₙ < n! always", "requires
 * the full alternating inclusion–exclusion sum", the rank rule for repeated
 * letters, "always too big", "the single table that resolves every … question",
 * "upper bounds always need this sum", "the word boxes signals distinct",
 * "2ᵏ⁻¹ unordered coprime pairs", "no binomial coefficient describes it"), the
 * point states it only with the condition the chapter itself gives, or in the
 * chapter's own milder words, or leaves it out.
 *
 * Markup is the chapter's own: variables italic, ⁿCᵣ and ⁿPᵣ with an italic C
 * and P, <sup><i>n</i></sup><i>C</i><sub><i>r</i></sub>; the stacked binomial
 * coefficient <binom><num>…</num><den>…</den></binom> where the chapter writes
 * it (Topic 06 and the additional topics); − (U+2212) for minus; every fraction
 * stacked, <frac><num>…</num><den>…</den></frac>, except inside a raised run
 * (N<sup>d(N)/2</sup>), which keeps the chapter's form; no em dashes; and
 * always a space after "<" (as the book prints it), so it is never read as a
 * tag. Exam-frequency claims would keep the label "(the book’s estimate from
 * past papers, not official figures)"; none of these points makes one.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

const fr = (a: string, b: string) => `<frac><num>${a}</num><den>${b}</den></frac>`;
const bn = (a: string, b: string) => `<binom><num>${a}</num><den>${b}</den></binom>`;
const C = (a: string, b: string) => `<sup>${a}</sup><i>C</i><sub>${b}</sub>`;
const P = (a: string, b: string) => `<sup>${a}</sup><i>P</i><sub>${b}</sub>`;
const SUM = (lo: string, hi: string) => `∑<sub>${lo}</sub><sup>${hi}</sup>`;
const NEG = (e: string) => `(−1)<sup>${e}</sup>`;
const FL = (a: string, b: string) => `⌊${fr(a, b)}⌋`;
const n = '<i>n</i>';
const r = '<i>r</i>';
const k = '<i>k</i>';
const m = '<i>m</i>';
const p = '<i>p</i>';
const q = '<i>q</i>';
const s = '<i>s</i>';
const d = '<i>d</i>';
const g = '<i>g</i>';
const i = '<i>i</i>';
const j = '<i>j</i>';
const a = '<i>a</i>';
const b = '<i>b</i>';
const c = '<i>c</i>';
const t = '<i>t</i>';
const N = '<i>N</i>';
const D = (sub: string) => `<i>D</i><sub>${sub}</sub>`;
const NN = (u: string, v: string) => `<i>N</i>(${u}, ${v})`;
const SS = (u: string, v: string) => `<i>S</i>(${u}, ${v})`;
const nCr = C(n, r);
const nPr = P(n, r);
const NR = `(${n} − ${r})!`;
const xi = '<i>x</i><sub><i>i</i></sub>';
const ci = '<i>c</i><sub><i>i</i></sub>';
const ai = '<i>a</i><sub><i>i</i></sub>';
const pi = '<i>p</i><sub><i>i</i></sub>';
const Ai = '<i>A</i><sub><i>i</i></sub>';
const Sr = '<i>S</i><sub><i>r</i></sub>';
const Sj = '<i>S</i><sub><i>j</i></sub>';
const SG1 = 'Σ<sub>1</sub>';
const SG2 = 'Σ<sub>2</sub>';
const SG3 = 'Σ<sub>3</sub>';
const dN = '<i>d</i>(<i>N</i>)';
const sN = '<i>σ</i>(<i>N</i>)';
const KN = `${k}<sup>${n}</sup>`;

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Fundamental Principle of Counting and Factorial ──
  // pp. 491–492, 495, 501
  {
    topic: 0,
    kind: 'remember',
    q: 'When do you multiply the counts of two stages, and when do you add them?',
    a: `Multiplication Principle: if a task is completed by stage 1 in ${m} ways and stage 2 in ${n} ways, stage 2’s count not depending on which option was chosen in stage 1, the whole task can be done in ${m} × ${n} ways; for any finite number of stages, ${m}<sub>1</sub> × ${m}<sub>2</sub> × ⋯ × ${m}<sub>${k}</sub>. Addition Principle: a choice of either an option of type A (${m} ways) or a mutually exclusive option of type B (${n} ways) can be made in ${m} + ${n} ways. The distinction lives in two words: “AND” (do this and then that) multiplies; “OR” (do this or instead that) adds`,
    why: 'A thali of one of 4 sabzis AND one of 3 rotis AND one of 2 sweets: 4 × 3 × 2 = 24; either one of 4 sabzis OR one of 2 sweets: 4 + 2 = 6.',
    say: 'AND multiply, OR add.',
  },
  // pp. 492, 494–495, 501
  {
    topic: 0,
    kind: 'remember',
    q: `What does ${n}! count, and why is 0! = 1?`,
    a: `${n}! = ${n} × (${n} − 1) × (${n} − 2) × ⋯ × 2 × 1 is the number of ways to arrange ${n} distinct objects in a row: position 1 in ${n} ways, position 2 in ${n} − 1, down to 1 for the last. At this level it is defined only for non-negative integers. The recursion ${n}! = ${n} · (${n} − 1)! holds for ${n} ≥ 1. 0! = 1 by two independent justifications: the recursion at ${n} = 1 gives 1! = 1 · 0!, so 0! = 1; and there is exactly one way to arrange zero objects, the empty arrangement. Anything else would break ${C(n, n)} = ${fr(`${n}!`, `${n}! 0!`)} = 1`,
    why: '5 different trophies in a row: 5 × 4 × 3 × 2 × 1 = 120 = 5!. Factorials explode: 10! = 3,628,800, so an answer like 20! is left as 20!.',
    say: null,
  },
  // pp. 494, 497, 501
  {
    topic: 0,
    kind: 'remember',
    q: `${r} slots, each filled from ${n} options: when is the count ${n}<sup>${r}</sup>, and when the falling product?`,
    a: `With repetition allowed every slot sees all ${n} options, whatever was chosen earlier: ${n} × ${n} × ⋯ × ${n} (${r} factors) = ${n}<sup>${r}</sup>. Without repetition each slot loses one option: ${n}(${n} − 1) ⋯ (${n} − ${r} + 1) = ${nPr} = ${fr(`${n}!`, NR)}. Arranging all ${n} distinct objects is the special case ${r} = ${n}, ${n}!. Repetition vs. no-repetition is the single most important fork in the whole chapter`,
    why: 'A 4-wheel lock with digits 0–9 has 10<sup>4</sup> = 10,000 settings: the digits may repeat.',
    say: 'Repetition ⇒ powers (<i>n</i><sup><i>r</i></sup>); no repetition ⇒ falling product.',
  },
  // pp. 492, 497
  {
    topic: 0,
    kind: 'remember',
    q: 'What do you do when a later stage’s count depends on what was chosen earlier?',
    a: 'The Multiplication Principle assumes each stage’s count is independent of the specific earlier choices. When it is not, either reorder so the constrained stage comes first, or break the problem into disjoint cases and add them (Addition Principle)',
    why: '3-digit numbers with distinct digits from {0, 1, 2, 3}: 4 × 3 × 2 = 24 is wrong, since the first slot cannot use 0; fix slot 1 first (3 ways), then 3 × 2 = 6 for the rest, giving 18.',
    say: null,
  },
  // pp. 498, 500–501
  {
    topic: 0,
    kind: 'mixup',
    q: 'A breakfast is a ready plate (3 kinds) or a combo of a paratha (4 kinds) and a chutney (5 kinds). Is the count 60, 12 or 23?',
    a: 'Bracket each “AND” group with ×, then join the mutually exclusive alternatives with +: 3 + 4 × 5 = 23. Multiplying everything (3 × 4 × 5 = 60) or adding everything (3 + 4 + 5 = 12) ignores the AND/OR structure. Always translate the problem into AND/OR first, then assign × or +',
    why: 'One of 3 ready-made project topics, or a theme (2) paired with a method (4): 3 + 2 × 4 = 11; (3 + 4) × 2 = 14 applies the OR before the AND.',
    say: null,
  },
  // pp. 498–501
  {
    topic: 0,
    kind: 'mistake',
    q: 'Counting 5-digit numbers with no 9, is the first digit chosen in 9 ways?',
    a: 'No: in 8 ways. The leading digit obeys two exclusions at once, ≠ 0 and ≠ 9; the other four digits obey only one, ≠ 9, so 9 ways each. So 8 × 9<sup>4</sup> = 52,488 have no 9, and 90,000 − 52,488 = 37,512 contain at least one 9. The other listed slips: confusing AND with OR, assuming “no repetition” by default (locks, number plates and passwords usually allow it), taking 0! as 0, and adding “OR” cases that overlap (divisible by 2 or by 3), which double-counts',
    why: 'A lock with 3 dials of digits 0–9 has 10 × 10 × 10 = 1000 codes: 720 = 10 × 9 × 8 forbids repetition, and 999 forgets that 000 to 999 is 1000 values.',
    say: null,
  },
  // p. 500
  {
    topic: 0,
    kind: 'mistake',
    q: `If ${fr(`${n}!`, `(${n} − 3)!`)} = 120, is ${n} = 5 because 5! = 120?`,
    a: `No: ${fr(`${n}!`, `(${n} − 3)!`)} = ${n}(${n} − 1)(${n} − 2) is a product of 3 terms, not ${n}!. Three consecutive integers multiplying to 120 are 6 × 5 × 4, so ${n} = 6. Guesses like 8 or 10 die at once: 8 · 7 · 6 = 336, 10 · 9 · 8 = 720`,
    why: `(${n} + 1)! = 12 × (${n} − 1)! gives (${n} + 1)${n} = 12, so ${n} = 3.`,
    say: null,
  },
  // pp. 499–501
  {
    topic: 0,
    kind: 'shortcut',
    q: 'How many 3-letter codes from {A, B, C, D, E}, repetition allowed, contain at least one vowel (A, E)?',
    a: '98. “At least one” means complement: compute total − none. Total 5<sup>3</sup> = 125; codes with no vowel use only B, C, D: 3<sup>3</sup> = 27; so 125 − 27 = 98. It turns a messy sum of cases into two clean products',
    why: '4-character passwords from 36 symbols with at least one digit: 36<sup>4</sup> − 26<sup>4</sup> = 1,222,640.',
    say: null,
  },

  // ── Topic 02 · Permutations ──
  // pp. 502–504, 512
  {
    topic: 1,
    kind: 'remember',
    q: `What is ${nPr}, and how is ${fr(`${n}!`, NR)} derived?`,
    a: `The number of arrangements of ${r} of ${n} distinct objects, no repetition, order mattering: ${nPr} = ${n}(${n} − 1)(${n} − 2) ⋯ (${n} − ${r} + 1) = ${fr(`${n}!`, NR)}, 0 ≤ ${r} ≤ ${n}. Position 1 takes any of ${n}; by position ${r}, ${r} − 1 objects are used, leaving ${n} − ${r} + 1. Multiplying and dividing by the missing tail (${n} − ${r})(${n} − ${r} − 1) ⋯ 2 · 1 = ${NR} compresses the product. Special cases: ${P(n, n)} = ${n}!, ${P(n, '0')} = 1, ${P(n, '1')} = ${n}`,
    why: `President, Secretary and Treasurer from 8 members: ${P('8', '3')} = ${fr('8!', '5!')} = 8 × 7 × 6 = 336.`,
    say: 'Order matters ⇒ Permutation.',
  },
  // pp. 503–506, 512
  {
    topic: 1,
    kind: 'remember',
    q: `How many arrangements do ${n} objects have when some of them are alike, and why?`,
    a: `${fr(`${n}!`, `${p}! ${q}! ${s}! ⋯`)}, with ${p} alike of one kind, ${q} of another, ${s} of a third, and ${p} + ${q} + ${s} + ⋯ = ${n}. Pretend the alike objects are secretly labelled: ${n}! arrangements. But the ${p} look-alikes can be permuted among themselves in ${p}! ways without changing what you see, so every genuinely distinct arrangement was counted ${p}! times; each repeated group divides out its own over-count. Start from ${n}!, then quotient out every group of look-alikes`,
    why: `SAMOSA has 6 letters with S twice and A twice: ${fr('6!', '2! 2!')} = ${fr('720', '4')} = 180.`,
    say: 'Repeats? Divide them out.',
  },
  // pp. 503, 506, 512
  {
    topic: 1,
    kind: 'remember',
    q: `How many ways are there to arrange ${n} distinct objects in a circle, and when is it half that?`,
    a: `(${n} − 1)!. Reading one circular arrangement from each of its ${n} objects gives ${n} different linear arrangements of the same circle, so ${fr(`${n}!`, n)} = (${n} − 1)!. If a mirror flip is also identical (necklaces, garlands, bracelets, key-rings), each circle of three or more objects is double-counted (it and its mirror image are two different circles): ${fr(`(${n} − 1)!`, '2')} for ${n} ≥ 3. The circular count applies to genuinely rotatable arrangements; a row of chairs bolted to the floor is still linear even if curved`,
    why: 'Friends X, Y, Z round a table: (3 − 1)! = 2, “Y on X’s left, Z on the right” and its mirror.',
    say: 'Circle loses one: (<i>n</i> − 1)!; flip loses half.',
  },
  // pp. 506–508, 512
  {
    topic: 1,
    kind: 'remember',
    q: 'What are the reflexes for “together”, “kept apart” and “fixed position”?',
    a: `Together: glue the group into one block, arrange the block among the others, then multiply by the block’s internal arrangements (${k}! for ${k} distinct objects). Apart, no two of them side by side: arrange the other objects first; they create gaps (including the two ends); drop the restricted objects into those gaps, one per gap, using ${nPr} on the gaps. Fixed position: lock the constrained objects in place first, then permute the rest`,
    why: `A, B, C, D, E in a row: A and B together, 4! × 2! = 48; apart, 3! × ${P('4', '2')} = 6 × 12 = 72; check 48 + 72 = 120 = 5!.`,
    say: null,
  },
  // pp. 502, 504, 508, 512
  {
    topic: 1,
    kind: 'mixup',
    q: 'Permutation or combination: what single question decides it?',
    a: `“If I swap two chosen objects, is it a new outcome?” Yes: permutation (positions). No: combination (committee). The bridge ${nPr} = ${r}! · ${C(n, r)}: arranging ${r} of ${n} is selecting them (${C(n, r)} ways) and then ordering them (${r}! ways), so a permutation is a combination that has been put in order`,
    why: 'ABC, ACB, BAC, BCA, CAB, CBA: 6 = 3! permutations of A, B, C, but a single selection.',
    say: null,
  },
  // pp. 511–512
  {
    topic: 1,
    kind: 'mistake',
    q: 'In how many ways can 5 different keys go on a key-ring: 120, 60, 24 or 12?',
    a: `12: a ring can be flipped, so ${fr('(5 − 1)!', '2')} = ${fr('24', '2')} = 12. 24 = (5 − 1)! is right for a fixed round table but forgets the flip; 120 = 5! treats the ring as a line; 60 = ${fr('5!', '2')} makes the flip correction but not the rotation one. The other listed slips: ${n}! for a word with repeated letters, and ${nPr} when repetition is allowed (that case is ${n}<sup>${r}</sup>)`,
    why: `GANGA: ${fr('5!', '2! 2!')} = 30; 60 divides by only one 2!, and 120 ignores both repeats.`,
    say: null,
  },
  // pp. 509, 511–512
  {
    topic: 1,
    kind: 'shortcut',
    q: 'Seat 5 boys and 3 girls round a table with no two girls together. The fast route?',
    a: `Fix one object to kill the rotational symmetry, and seat the unconstrained group first: 5 boys in (5 − 1)! = 24 ways create 5 gaps; place the 3 girls in distinct gaps in ${P('5', '3')} = 60 ways; 24 × 60 = 1440. On a circle the problem collapses to a linear one on the remaining (${n} − 1) objects`,
    why: '7 people round a table with 3 specified people together: (5 − 1)! × 3! = 24 × 6 = 144.',
    say: null,
  },

  // ── Topic 03 · Combinations ──
  // pp. 513–514, 520
  {
    topic: 2,
    kind: 'remember',
    q: `What is ${nCr}, and how does it follow from ${nPr}?`,
    a: `The number of selections of ${r} from ${n} distinct objects, without repetition, order ignored: ${nCr} = ${fr(`${n}!`, `${r}! (${n} − ${r})!`)} = ${fr(nPr, `${r}!`)}, 0 ≤ ${r} ≤ ${n}; ${nCr} = 0 whenever ${r} > ${n}. Arranging ${r} of ${n} is two stages, select (${nCr}) then order (${r}!), so ${nPr} = ${nCr} × ${r}!: the permutation formula with the internal orderings divided out`,
    why: `9 people each shaking hands once with every other: ${C('9', '2')} = 36 handshakes, not ${P('9', '2')} = 72.`,
    say: 'Order out ⇒ divide by <i>r</i>!.',
  },
  // pp. 514–515, 520
  {
    topic: 2,
    kind: 'remember',
    q: `Which properties of ${nCr} are examinable, and what is the idea behind each proof?`,
    a: `${C(n, '0')} = ${C(n, n)} = 1, ${C(n, '1')} = ${n}. Symmetry ${nCr} = ${C(n, `${n}−${r}`)}: choosing ${r} to keep is the same act as choosing ${n} − ${r} to reject. Pascal’s rule ${nCr} + ${C(n, `${r}−1`)} = ${C(`${n}+1`, r)} (1 ≤ ${r} ≤ ${n}): single out one object and ask whether it is in the group (${C(n, `${r}−1`)} ways) or out (${nCr} ways). If ${nCr} = ${C(n, s)} with 0 ≤ ${r}, ${s} ≤ ${n}, then ${r} = ${s} or ${r} + ${s} = ${n}`,
    why: `${C('7', '5')} = ${C('7', '2')} = 21: choosing 5 to keep is choosing 2 to leave out.`,
    say: 'Choose <i>r</i> = reject <i>n</i> − <i>r</i>.',
  },
  // pp. 515–516, 520
  {
    topic: 2,
    kind: 'remember',
    q: 'How do you count selections that must include, must exclude, or include at least some objects?',
    a: `Must include ${k} specific objects: lock them in and choose the other ${r} − ${k} from the remaining ${n} − ${k}, ${C(`${n}−${k}`, `${r}−${k}`)}. Must exclude ${k}: drop them from the pool, ${C(`${n}−${k}`, r)}. At least / at most: add the qualifying cases, or take Total − complement`,
    why: `A 5-member team from 9: with the captain, ${C('8', '4')} = 70; without a suspended player, ${C('8', '5')} = 56; with at least 1 of 2 named players, ${C('9', '5')} − ${C('7', '5')} = 126 − 21 = 105.`,
    say: null,
  },
  // pp. 517, 519–520
  {
    topic: 2,
    kind: 'remember',
    q: `Why is splitting ${n} distinct objects into ${g} unlabelled groups of ${m} each ${fr(`${n}!`, `(${m}!)<sup>${g}</sup> ${g}!`)}?`,
    a: `Treat the groups as labelled first: ${C(n, m)} ways to fill the first, ${C(`${n}−${m}`, m)} the second, and so on, which telescopes to ${fr(`${n}!`, `(${m}!)<sup>${g}</sup>`)}. The groups are really unlabelled, so relabelling the ${g} equal groups (${g}! ways) gives the same division: divide by ${g}!. Divide by the factorial of the number of groups that are interchangeable, equal in size and unlabelled`,
    why: `12 distinct books into three unlabelled groups of 4: ${fr('12!', '(4!)<sup>3</sup> 3!')} = 5775.`,
    say: null,
  },
  // pp. 517–519
  {
    topic: 2,
    kind: 'mixup',
    q: 'From 6 students: a quiz team of 3, or a leader, a scribe and a timekeeper?',
    a: `Team: order irrelevant, ${C('6', '3')} = 20. Distinct posts: order matters, ${P('6', '3')} = 6 × 5 × 4 = 120. And 120 = 20 × 3!: the appointments are the teams with their 3! internal orderings restored. Using ${nPr} for a plain selection overcounts by ${r}!; using ${nCr} for a role-assignment undercounts`,
    why: `3 identical prize certificates to 10 students, at most one each: ${C('10', '3')} = 120; 720 = ${P('10', '3')} treats the certificates as distinct.`,
    say: 'Roles? → Permutation. Just a group? → Combination.',
  },
  // pp. 518, 520
  {
    topic: 2,
    kind: 'mistake',
    q: 'A committee of 3 from 4 men and 3 women with at least one woman: is it 3 × 6 = 18?',
    a: `No: 31. 18 = ${C('3', '1')} × ${C('4', '2')} counts only the “exactly one woman” committees. Total − (no women) = ${C('7', '3')} − ${C('4', '3')} = 35 − 4 = 31. The other listed slips: missing a case in an “at least” sum, using the complement when it is not shorter (count the cases on each side first), forgetting to divide by ${r}!, and dividing objects into equal unlabelled groups without dividing by (number of equal groups)!`,
    why: `At least 3 women in 5 from 8 men and 6 women: the complement also has three cases, so add directly: 560 + 120 + 6 = 686.`,
    say: null,
  },
  // pp. 514, 519–520
  {
    topic: 2,
    kind: 'shortcut',
    q: `Find ${C('15', '13')} in your head.`,
    a: `Use symmetry to shrink the arithmetic: ${C('15', '13')} = ${C('15', '2')} = ${fr('15 × 14', '2')} = 105. Never grind the large factorial. And if ${nCr} = ${C(n, s)} with ${r} ≠ ${s} (both from 0 to ${n}), then ${n} = ${r} + ${s} at once`,
    why: `${C(n, '8')} = ${C(n, '12')} gives ${n} = 20, so ${C(n, '2')} = ${fr('20 × 19', '2')} = 190.`,
    say: null,
  },

  // ── Topic 04 · Total Selections, Grouping & Distribution (Stars and Bars) ──
  // pp. 522–524, 526, 529
  {
    topic: 3,
    kind: 'remember',
    q: `How many selections can be made from ${n} distinct objects, and from groups of alike objects?`,
    a: `Each distinct object is independently in or out: 2<sup>${n}</sup> selections, the empty one included (an ${n}-element set has 2<sup>${n}</sup> subsets); at least one, 2<sup>${n}</sup> − 1. From ${p} alike objects you only choose how many, 0 to ${p}: ${p} + 1 choices, not 2<sup>${p}</sup>. With ${p} alike of type 1, ${q} alike of type 2, …, plus ${d} all-distinct objects: (${p} + 1)(${q} + 1) ⋯ 2<sup>${d}</sup>, minus 1 for “at least one”`,
    why: '3 identical red apples, 2 identical green apples and 1 orange: 4 × 3 × 2 − 1 = 23 ways to pick at least one fruit; treating all six as distinct gives 2<sup>6</sup> − 1 = 63.',
    say: 'In-or-out ⇒ 2<sup><i>n</i></sup>.',
  },
  // pp. 522–524, 529
  {
    topic: 3,
    kind: 'remember',
    q: `How many ways are there to choose ${r} items from ${n} types with repetition allowed, and how many integer solutions does <i>x</i><sub>1</sub> + ⋯ + <i>x</i><sub>${k}</sub> = ${n} have?`,
    a: `Lay down ${r} identical stars and separate them into ${n} type-groups with ${n} − 1 bars; choose which of the ${r} + ${n} − 1 places hold bars: ${C(`${n}+${r}−1`, r)} = ${C(`${n}+${r}−1`, `${n}−1`)}. For <i>x</i><sub>1</sub> + ⋯ + <i>x</i><sub>${k}</sub> = ${n}: non-negative solutions ${C(`${n}+${k}−1`, `${k}−1`)}; positive solutions ${C(`${n}−1`, `${k}−1`)}, by first giving one unit to every variable (<i>y</i><sub><i>i</i></sub> = ${xi} − 1). These are the counts of ${n} identical objects in ${k} distinct boxes, empty allowed or each non-empty; stars and bars assumes identical items and distinct boxes`,
    why: `<i>a</i> + <i>b</i> + <i>c</i> + <i>d</i> = 12 in non-negative integers: ${C('15', '3')} = ${fr('15 × 14 × 13', '6')} = 455.`,
    say: 'Identical-into-distinct ⇒ stars and bars.',
  },
  // pp. 523–525, 527, 529
  {
    topic: 3,
    kind: 'remember',
    q: `How do you divide ${n} distinct objects into groups, and how does that differ from handing them to people?`,
    a: `Into groups of unequal sizes ${m}<sub>1</sub>, …, ${m}<sub>${k}</sub> (∑ <i>m</i><sub><i>i</i></sub> = ${n}): ${fr(`${n}!`, `${m}<sub>1</sub>! ${m}<sub>2</sub>! ⋯ ${m}<sub>${k}</sub>!`)}. If ${g} of the groups are equal-sized and unlabelled, divide by ${g}! for each such set. If recipient ${i} is to get exactly <i>m</i><sub><i>i</i></sub> objects, the count is the bare ${fr(`${n}!`, `∏ <i>m</i><sub><i>i</i></sub>!`)}, with no ÷ ${g}! even for equal sizes. ${n} distinct objects into ${k} distinct boxes with no restriction: ${k}<sup>${n}</sup>`,
    why: `6 distinct toys into two unlabelled groups of 3: ${fr('6!', '3! 3! 2!')} = 10; to two named children, 3 each: ${fr('6!', '3! 3!')} = 20.`,
    say: 'Unlabelled equal groups ⇒ divide by their factorial.',
  },
  // pp. 523, 527–528
  {
    topic: 3,
    kind: 'mixup',
    q: `Choosing ${r} from ${n} types: when is it ${C(`${n}+${r}−1`, r)}, ${nCr} or ${n}<sup>${r}</sup>?`,
    a: `Selection with repetition, order ignored: ${C(`${n}+${r}−1`, r)}. Selection without repetition: ${nCr}. ${n}<sup>${r}</sup> is ordered placement with repetition. Identify “identical items into distinct boxes” before reaching for stars and bars`,
    why: `12 identical pens among 3 students, a student may get none: ${C('14', '2')} = 91; 3<sup>12</sup> treats the pens as distinct, and ${C('11', '2')} = 55 is the “each at least one” count.`,
    say: null,
  },
  // pp. 527–528
  {
    topic: 3,
    kind: 'mistake',
    q: 'From 4 identical marbles and 1 distinct coin, how many ways to select one or more objects: 31, 10 or 9?',
    a: '9. Marbles: take 0 to 4, 5 choices; coin in or out, 2; 5 × 2 = 10, minus the empty selection. 31 = 2<sup>5</sup> − 1 treats the identical marbles as distinct; 10 forgets to exclude the empty selection. The other listed slips: the wrong model for repetition, forgetting the ÷ <i>g</i>! for equal unlabelled groups (or applying it to labelled recipients), and forgetting that 2<sup><i>n</i></sup> and the basic stars-and-bars count include “choose nothing”',
    why: `Non-negative solutions of <i>x</i> + <i>y</i> + <i>z</i> = 7: ${C('9', '2')} = 36; ${C('7', '2')} = 21 forgets to add the bars to the slot count.`,
    say: null,
  },
  // pp. 526–528
  {
    topic: 3,
    kind: 'shortcut',
    q: 'Distribute 15 identical chocolates among 4 children so that each gets at least 2. The quick way?',
    a: `Pre-allocate to clear lower bounds: hand out 2 to each child first (8 used), then distribute the remaining 7 freely, <i>y</i><sub>1</sub> + <i>y</i><sub>2</sub> + <i>y</i><sub>3</sub> + <i>y</i><sub>4</sub> = 7 with <i>y</i><sub><i>i</i></sub> ≥ 0: ${C('10', '3')} = 120. For “each box at least ${c}”, give ${c} to every box, then solve the leftover as a non-negative stars-and-bars problem`,
    why: `20 identical balls into 5 distinct boxes, none empty: ${C('19', '4')} = 3876.`,
    say: null,
  },

  // ── Topic 05 · Counting Applications & Advanced Tools ──
  // pp. 530–532, 534, 536
  {
    topic: 4,
    kind: 'remember',
    q: 'How many lines, triangles, diagonals and rectangles do points and lines give?',
    a: `From ${n} points, no three collinear: lines ${C(n, '2')}, triangles ${C(n, '3')}. If ${m} of the points are collinear (all on one line; no other three collinear): lines ${C(n, '2')} − ${C(m, '2')} + 1 (their pairs give one line, not many), triangles ${C(n, '3')} − ${C(m, '3')} (three collinear points have zero area). Diagonals of a convex ${n}-gon: ${C(n, '2')} − ${n} = ${fr(`${n}(${n} − 3)`, '2')}. Rectangles from a grid of ${a} horizontal and ${b} vertical lines, or parallelograms from two families of ${a} and ${b} parallel lines: ${C(a, '2')} · ${C(b, '2')}`,
    why: `10 points with 4 collinear: lines ${C('10', '2')} − ${C('4', '2')} + 1 = 40, triangles ${C('10', '3')} − ${C('4', '3')} = 120 − 4 = 116.`,
    say: 'Shapes = choosing vertices.',
  },
  // pp. 530–532, 534, 536
  {
    topic: 4,
    kind: 'remember',
    q: `How many divisors does ${N} = <i>p</i><sub>1</sub><sup><i>a</i>₁</sup> ⋯ <i>p</i><sub>${k}</sub><sup><i>a</i>ₖ</sup> have, and what do they sum to?`,
    a: `A divisor is <i>p</i><sub>1</sub><sup><i>e</i>₁</sup> ⋯ <i>p</i><sub>${k}</sub><sup><i>e</i>ₖ</sup> with 0 ≤ <i>e</i><sub><i>i</i></sub> ≤ ${ai}: each exponent is an independent choice of ${ai} + 1 values, so the number of positive divisors is (<i>a</i><sub>1</sub> + 1)(<i>a</i><sub>2</sub> + 1) ⋯ (<i>a</i><sub>${k}</sub> + 1). The sum is the product of geometric series 1 + ${pi} + ⋯ + ${pi}<sup><i>a</i>ᵢ</sup>: ∏ ${fr(`${pi}<sup><i>a</i>ᵢ+1</sup> − 1`, `${pi} − 1`)}. The formula needs the complete prime factorisation`,
    why: '360 = 2<sup>3</sup> × 3<sup>2</sup> × 5: (3 + 1)(2 + 1)(1 + 1) = 24 divisors.',
    say: 'Divisor = pick an exponent per prime.',
  },
  // pp. 530–532, 534
  {
    topic: 4,
    kind: 'remember',
    q: `What is the sum of all numbers formed by ${n} distinct non-zero digits, each used once?`,
    a: `(∑ ${d})(${n} − 1)! ${fr(`10<sup>${n}</sup> − 1`, '9')}, that is (sum of the digits) × (${n} − 1)! × 111 … 1 (${n} ones). Fix any digit in the units place: the other ${n} − 1 digits permute in (${n} − 1)! ways, so each digit sits in each place (${n} − 1)! times. The formula assumes distinct non-zero digits used without repetition; zero needs a small adjustment`,
    why: 'Digits 2, 3, 4, 5: each sits in each place 3! = 6 times, so the sum is 14 × 6 × 1111 = 93,324.',
    say: null,
  },
  // pp. 530–532, 534–536
  {
    topic: 4,
    kind: 'remember',
    q: `How many derangements of ${n} objects are there (no object in its own place)?`,
    a: `Of all ${n}! permutations, remove those fixing at least one object: fixing a chosen set of ${i} objects leaves (${n} − ${i})! arrangements, and there are ${C(n, i)} such sets, so inclusion–exclusion gives ${D(n)} = ${n}! (1 − ${fr('1', '1!')} + ${fr('1', '2!')} − ⋯ + ${fr(NEG(n), `${n}!`)}). Also ${D(n)} = (${n} − 1)(${D(`${n}−1`)} + ${D(`${n}−2`)}) for ${n} ≥ 3. ${D('1')} = 0, ${D('2')} = 1, ${D('3')} = 2, ${D('4')} = 9, ${D('5')} = 44; for ${n} ≥ 1, ${D(n)} is less than ${n}!, and ${fr(D(n), `${n}!`)} → ${fr('1', '<i>e</i>')} ≈ 0.3679`,
    why: `5 letters, none in its own envelope: 120(${fr('1', '2')} − ${fr('1', '6')} + ${fr('1', '24')} − ${fr('1', '120')}) = 120 × ${fr('11', '30')} = 44; the recurrence agrees, 4(9 + 2) = 44.`,
    say: 'None-correct ⇒ derangement ⇒ inclusion–exclusion.',
  },
  // pp. 531–532, 535–536
  {
    topic: 4,
    kind: 'remember',
    q: `What is the exponent of a prime ${p} in ${n}!, and how many zeros end ${n}!?`,
    a: `Legendre: <i>E</i><sub>${p}</sub>(${n}!) = ${FL(n, p)} + ${FL(n, `${p}<sup>2</sup>`)} + ${FL(n, `${p}<sup>3</sup>`)} + ⋯. Among 1, 2, …, ${n}, exactly ${FL(n, p)} are multiples of ${p}; of those, ${FL(n, `${p}<sup>2</sup>`)} carry a second factor of ${p}; and so on, so every factor of ${p} is counted once. Trailing zeros of ${n}! = <i>E</i><sub>5</sub>(${n}!)`,
    why: `100! ends in ${FL('100', '5')} + ${FL('100', '25')} = 20 + 4 = 24 zeros.`,
    say: null,
  },
  // pp. 532, 536
  {
    topic: 4,
    kind: 'mixup',
    q: `In the sum of all numbers formed, do you multiply by ${n}! or by (${n} − 1)!?`,
    a: `By (${n} − 1)!: the number of times each digit sits in one fixed place. ${n}! is how many numbers there are, and multiplying by it is the listed slip`,
    why: 'With digits 2, 3, 4, 5 there are 4! = 24 numbers, but each digit is in the units place only 3! = 6 times.',
    say: null,
  },
  // pp. 535–536
  {
    topic: 4,
    kind: 'mistake',
    q: `Is the exponent of 3 in 30! just ${FL('30', '3')} = 10?`,
    a: `No: 14. ${FL('30', '3')} + ${FL('30', '9')} + ${FL('30', '27')} = 10 + 3 + 1 = 14; stopping at the first term forgets that 9 and 27 contribute extra factors, and dropping ${FL('30', '27')} gives 13. The other listed slips: ${C(n, '3')} for triangles without subtracting the collinear cases, a dropped prime in the divisor formula (it silently divides the answer by <i>a</i><sub><i>i</i></sub> + 1), and treating “none in its correct place” as a plain ${n}! or a single subtraction`,
    why: '72 = 2<sup>3</sup> × 3<sup>2</sup> has (3 + 1)(2 + 1) = 12 divisors; 3 × 2 = 6 multiplies the exponents instead of the incremented exponents.',
    say: null,
  },
  // pp. 535–536
  {
    topic: 4,
    kind: 'shortcut',
    q: 'Faced with an application problem, what do you ask first?',
    a: `What is being chosen. Most application problems reduce to a one-line ${nCr} once you name the underlying selection: points for shapes, exponents for divisors, positions for arrangements. For “at least one correct / none correct” flavours, reach straight for inclusion–exclusion`,
    why: `A grid of 5 horizontal and 6 vertical lines: a rectangle is a choice of 2 of each, ${C('5', '2')} · ${C('6', '2')} = 10 × 15 = 150.`,
    say: null,
  },

  // ── Topic 06 · Inclusion–Exclusion and Onto Distributions ──
  // pp. 537–539, 544, 548, 556
  {
    topic: 5,
    kind: 'remember',
    q: 'What are the union formulas for two and three finite sets, and why do the signs alternate?',
    a: `|<i>A</i> ∪ <i>B</i>| = |<i>A</i>| + |<i>B</i>| − |<i>A</i> ∩ <i>B</i>|; |<i>A</i> ∪ <i>B</i> ∪ <i>C</i>| = |<i>A</i>| + |<i>B</i>| + |<i>C</i>| − |<i>A</i> ∩ <i>B</i>| − |<i>B</i> ∩ <i>C</i>| − |<i>C</i> ∩ <i>A</i>| + |<i>A</i> ∩ <i>B</i> ∩ <i>C</i>|. Adding the list lengths counts a student on two lists twice; subtracting the pairs erases a student on all three (added 3 times, subtracted 3 times), so the triple is added back once, and every element then contributes exactly 1`,
    why: '60 students, 32 Physics, 28 Chemistry, 12 both: 32 + 28 − 12 = 48 take at least one, 60 − 48 = 12 neither, 48 − 12 = 36 exactly one.',
    say: 'Add singles, subtract pairs, add triples: signs alternate to the end.',
  },
  // pp. 538–539, 544–545, 557
  {
    topic: 5,
    kind: 'remember',
    q: `State inclusion–exclusion for ${n} sets, and its complement form.`,
    a: `With ${Sr} the total of the sizes of all ${bn(n, r)} intersections taken ${r} at a time: |⋃<sub>${i}=1</sub><sup>${n}</sup> ${Ai}| = ${SUM(`${r}=1`, n)}${NEG(`${r}−1`)}${Sr}, the final sign ${NEG(`${n}−1`)}. Inside a finite universal set <i>S</i>, the number with none of the properties is |<i>S</i>| − |⋃ ${Ai}| = ${SUM(`${r}=0`, n)}${NEG(r)}${Sr}, starting with +|<i>S</i>| (<i>S</i><sub>0</sub> = |<i>S</i>|): the form that solves exam questions. Proof: an element in ${m} ≥ 1 of the sets contributes ${bn(m, r)} to ${Sr}, and ${SUM(`${r}=1`, m)}${NEG(`${r}−1`)}${bn(m, r)} = 1 because (1 − 1)<sup>${m}</sup> = 0. All sets finite; no disjointness assumed`,
    why: 'An element in 3 of the sets is added 3 times, subtracted 3 times and added once: 3 − 3 + 1 = 1.',
    say: null,
  },
  // pp. 540, 552–554, 557
  {
    topic: 5,
    kind: 'remember',
    q: 'For three sets, how many lie in exactly one, exactly two, at least two, or none?',
    a: `With ${SG1} = |<i>A</i>| + |<i>B</i>| + |<i>C</i>|, ${SG2} the three pairwise intersections, ${SG3} = |<i>A</i> ∩ <i>B</i> ∩ <i>C</i>|: at least one ${SG1} − ${SG2} + ${SG3}; exactly one ${SG1} − 2${SG2} + 3${SG3}; exactly two ${SG2} − 3${SG3}; at least two ${SG2} − 2${SG3}; all three ${SG3}; none |<i>S</i>| − ${SG1} + ${SG2} − ${SG3}. In general, exactly ${r} of ${n} sets: <i>E</i><sub>${r}</sub> = ${SUM(`${j}=${r}`, n)}${NEG(`${j}−${r}`)}${bn(j, r)}${Sj}`,
    why: '200 students; Hindi 100, Sanskrit 80, French 70; pairs 40, 30, 35; all three 15: at least one 250 − 105 + 15 = 160, none 40, exactly one 250 − 210 + 45 = 85.',
    say: null,
  },
  // pp. 538, 540, 545, 557
  {
    topic: 5,
    kind: 'remember',
    q: `How many ways can ${n} distinct objects go into ${k} distinct boxes with no box empty?`,
    a: `${NN(n, k)} = ${SUM(`${i}=0`, k)}${NEG(i)}${bn(k, i)}(${k} − ${i})<sup>${n}</sup> = ${KN} − ${bn(k, '1')}(${k} − 1)<sup>${n}</sup> + ${bn(k, '2')}(${k} − 2)<sup>${n}</sup> − ⋯, the number of onto functions from an ${n}-set to a ${k}-set. Of all ${KN} placements, let ${Ai} leave box ${i} empty; barring ${r} named boxes leaves (${k} − ${r})<sup>${n}</sup> placements, and the complement form does the rest. Valid for all ${n}, ${k} ≥ 1: it returns 0 when ${n} < ${k} and ${k}! when ${n} = ${k}. ${NN(n, '2')} = 2<sup>${n}</sup> − 2, ${NN(n, '3')} = 3<sup>${n}</sup> − 3 · 2<sup>${n}</sup> + 3`,
    why: `${NN('4', '3')} = 3<sup>4</sup> − 3 · 2<sup>4</sup> + 3 · 1<sup>4</sup> = 81 − 48 + 3 = 36.`,
    say: 'Distinct objects kill stars and bars.',
  },
  // pp. 542–543, 546, 551–552, 557
  {
    topic: 5,
    kind: 'remember',
    q: `What is the Stirling number ${SS(n, k)}, and how is it linked to the onto count?`,
    a: `${SS(n, k)}, the Stirling number of the second kind, is the number of ways to split ${n} distinct objects into exactly ${k} non-empty unlabelled blocks. Labelling the blocks with the ${k} distinct boxes multiplies by ${k}!: ${NN(n, k)} = ${k}! ${SS(n, k)}. Recurrence: ${SS(n, k)} = ${SS(`${n} − 1`, `${k} − 1`)} + ${k} ${SS(`${n} − 1`, k)} (object ${n} alone in a block, or joining one of ${k} blocks); ${SS(n, '1')} = ${SS(n, n)} = 1, ${SS(n, '2')} = 2<sup>${n}−1</sup> − 1, ${SS(n, `${n} − 1`)} = ${bn(n, '2')}, ${SS(n, k)} = 0 for ${k} > ${n}. Row 6: 1, 31, 90, 65, 15, 1`,
    why: `6 books into 4 identical boxes, none empty: ${SS('6', '4')} = ${fr(NN('6', '4'), '4!')} = ${fr('1560', '24')} = 65.`,
    say: 'Labelled boxes multiply by <i>k</i>!.',
  },
  // pp. 542–543, 557
  {
    topic: 5,
    kind: 'remember',
    q: `${n} objects into ${k} boxes: what is the count in each case of the distribution table?`,
    a: `Identical objects, distinct boxes: ${bn(`${n} + ${k} − 1`, `${k} − 1`)} (empty allowed), ${bn(`${n} − 1`, `${k} − 1`)} (none empty). Distinct objects, distinct boxes: ${KN}, and ${k}! ${SS(n, k)}. Distinct objects, identical boxes: ${SUM(`${j}=1`, k)} ${SS(n, j)}, and ${SS(n, k)}. Identical objects, identical boxes: partitions of ${n} into at most ${k} parts, and into exactly ${k} parts, with no closed formula at this level. Check: ${KN} = ${SUM(`${j}=1`, k)}${bn(k, j)}${NN(n, j)}`,
    why: '6 identical balls into 3 identical boxes, none empty: 4+1+1, 3+2+1, 2+2+2, so 3.',
    say: null,
  },
  // pp. 543–544, 548, 557
  {
    topic: 5,
    kind: 'remember',
    q: 'How do you count integer solutions with an upper bound on each variable?',
    a: `Pre-allocation handles only lower bounds, so clear those first. For ${xi} ≤ ${ci}, let ${Ai} be the solutions violating the ${i}-th cap, ${xi} ≥ ${ci} + 1, a lower bound: pre-allocating ${ci} + 1 sizes it, |${Ai}| = ${bn(`${n} − (${ci} + 1) + ${k} − 1`, `${k} − 1`)}. Alternate the signs over the violations, keeping a term only while the leftover total is non-negative. With every cap equal to ${c}: ∑<sub>${r}≥0</sub>${NEG(r)}${bn(k, r)}${bn(`${n} − ${r}(${c} + 1) + ${k} − 1`, `${k} − 1`)}, only while ${r}(${c} + 1) ≤ ${n}`,
    why: `<i>x</i><sub>1</sub> + <i>x</i><sub>2</sub> + <i>x</i><sub>3</sub> = 15, 0 ≤ ${xi} ≤ 8: ${bn('17', '2')} − 3${bn('8', '2')} = 136 − 84 = 52; two variables cannot both reach 9, since 18 > 15.`,
    say: 'Upper bound ⇒ violate it, then alternate.',
  },
  // pp. 538, 542, 547, 554–556
  {
    topic: 5,
    kind: 'mixup',
    q: `${bn(`${n} − 1`, `${k} − 1`)}, ${NN(n, k)} or ${SS(n, k)}: which counts ${n} objects into ${k} boxes with none empty?`,
    a: `Ask two questions. Are the objects distinguishable (would swapping two of them change the outcome)? If not, ${bn(`${n} − 1`, `${k} − 1`)}, which only decides how many each box gets. Are the boxes labelled? If both are distinct, ${NN(n, k)} = ${k}! ${SS(n, k)}; with identical boxes, ${SS(n, k)}. Words such as “children”, “students”, “envelopes”, “counters” and plain “boxes” (not called identical) signal distinct recipients; “groups”, “bundles”, “identical boxes” and “parts” signal unlabelled. Decide before computing, not after`,
    why: `6 distinct balls into 3 distinct boxes, none empty: 540; 90 = ${SS('6', '3')} is the identical-box count, and 10 = ${bn('5', '2')} treats the balls as identical.`,
    say: null,
  },
  // pp. 538, 550, 555
  {
    topic: 5,
    kind: 'mistake',
    q: `To give 5 distinct chocolates to 3 children, each at least one, can you hand one to each child first (${P('5', '3')} = 60) and then place the other two freely (3<sup>2</sup> = 9)?`,
    a: `No: 540 is 3.6 times too large. The finished distribution carries no record of which chocolate was the pre-allocated one, so pre-allocation over-counts as soon as the objects are distinguishable; it is a bijection only for identical objects. ${bn('4', '2')} = 6 is wrong too: it counts only how many each child gets. Correct: ${NN('5', '3')} = 3<sup>5</sup> − ${bn('3', '1')}2<sup>5</sup> + ${bn('3', '2')}1<sup>5</sup> = 243 − 96 + 3 = 150`,
    why: `Cross-check: ${SS('5', '3')} = 25 and 3! × 25 = 150.`,
    say: null,
  },
  // pp. 547, 549, 554–555, 557
  {
    topic: 5,
    kind: 'mistake',
    q: `How many integers from 1 to ${N} are multiples of both 4 and 6: ${FL(N, '24')}?`,
    a: `No: ${FL(N, '12')}. A multiple of both <i>a</i> and <i>b</i> is a multiple of lcm(<i>a</i>, <i>b</i>), which equals <i>ab</i> only when <i>a</i> and <i>b</i> are coprime; the standard 2, 3, 5 question hides this because they are pairwise coprime. The other listed slips: ${bn(`${n} − 1`, `${k} − 1`)} for distinct objects, pre-allocating to enforce an upper bound, inserting a non-zero value for a term that cannot occur, losing the sign of the last term, confusing labelled with unlabelled boxes, and not stating the universe |<i>S</i>|`,
    why: `Integers 1 to 60 divisible by 2 or by 3: ${FL('60', '2')} + ${FL('60', '3')} − ${FL('60', '6')} = 30 + 20 − 10 = 40; 50 = 30 + 20 adds piles that are not mutually exclusive.`,
    say: null,
  },
  // pp. 555–556
  {
    topic: 5,
    kind: 'shortcut',
    q: 'How do you make sure an onto count is right?',
    a: `Cross-check it two ways: compute ${NN(n, k)} by the alternating sum, confirm it is divisible by ${k}!, and that the quotient matches ${SS(n, k)} from the recurrence. A single arithmetic slip almost never survives both tests. And the ${n} < ${k} reflex: fewer objects than boxes means the onto count is 0, with no work`,
    why: `7 distinct toys to 3 children, none left out: 3<sup>7</sup> − 3 · 2<sup>7</sup> + 3 = 2187 − 384 + 3 = 1806 = 6 × 301, and ${SS('7', '3')} = 301.`,
    say: null,
  },
  // pp. 548, 555
  {
    topic: 5,
    kind: 'shortcut',
    q: 'Non-negative solutions of <i>x</i> + <i>y</i> + <i>z</i> = 10 with each variable at most 5: how do you check the answer 21?',
    a: `Substitute <i>u</i> = 5 − <i>x</i>, <i>v</i> = 5 − <i>y</i>, <i>w</i> = 5 − <i>z</i>: then <i>u</i> + <i>v</i> + <i>w</i> = 5 with each at most 5, which is automatic, so the count is ${bn('7', '2')} = 21. Where the caps are equal, this complementary substitution gives an independent check. And test every term for existence: two variables cannot both reach 6, since 12 > 10, so the series stops at ${bn('12', '2')} − 3${bn('6', '2')} = 66 − 45 = 21`,
    why: '24 = 66 − 45 + 3 adds back a pair term for violations that cannot happen together.',
    say: null,
  },

  // ── Additional topic A · Rank of a word in dictionary order ──
  // pp. 559–560, 578
  {
    topic: 6,
    kind: 'remember',
    q: 'How do you find the rank of a word in the dictionary list of its arrangements?',
    a: `Alphabetise the letter pool, repeats included; the total ${fr(`${n}!`, `${p}! ${q}! ⋯`)} is the ceiling. Scan the word left to right. At position ${i}, for each distinct unused letter smaller than the word’s letter, add the arrangements of the pool left after one copy of that letter is removed, ${fr(`(${n} − ${i})!`, '∏ <i>m</i><sub><i>j</i></sub>!')}, with the repeat counts <i>m</i><sub><i>j</i></sub> recomputed for this step. Delete the word’s letter and move on. Rank = running total + 1, the +1 being the word itself`,
    why: 'DRONA (pool A, D, N, O, R): 1 × 4! + 3 × 3! + 2 × 2! + 1 × 1! = 24 + 18 + 4 + 1 = 47 words before it, so rank 48.',
    say: 'Rank = count the earlier words, then +1.',
  },
  // pp. 559, 562
  {
    topic: 6,
    kind: 'remember',
    q: `How do you find the ${k}-th word of the dictionary list?`,
    a: `Walk the same tree, subtracting instead of adding: compute the block size for each first letter in alphabetical order, keep subtracting until ${k} falls inside a block, fix that letter, and repeat on the tail with the reduced ${k}`,
    why: `AGAIN (60 words): blocks A 1–24, G 25–36, I 37–48, N 49–60; the 50th is the 2nd of the N block, then the 2nd under NA, then under NAA the 2nd of GI, IG: NAAIG.`,
    say: null,
  },
  // pp. 559, 561
  {
    topic: 6,
    kind: 'mixup',
    q: 'With repeated letters, is the denominator fixed for the whole word, and is each copy of a smaller letter its own branch?',
    a: `Neither. The denominator is not frozen: removing a letter can destroy a repeat group, so recompute it at every branch. And count distinct smaller letters, not letter-slots: two unplaced A’s give one “start with A” branch; branching twice double-counts every word in it`,
    why: `In SAMOSA, fixing an A leaves {A, M, O, S, S}: ${fr('5!', '2!')} = 60, not ${fr('5!', '2! 2!')} = 30; fixing M or O leaves both repeats, 30 each.`,
    say: null,
  },
  // p. 561
  {
    topic: 6,
    kind: 'mistake',
    q: 'Is the rank of SAMOSA 3 × 5! + 3! + 2! + 1! + 1 = 370?',
    a: `No: 130. SAMOSA has only ${fr('6!', '2! 2!')} = 180 arrangements, so 370 lies past the end of the list; plain factorials ignore the repeats. Correctly, position 1 (S) skips 60 + 30 + 30 = 120 words, then 0 + 6 + 2 + 1 + 0: 129 words before it, rank 130. The second, quieter trap is stopping at 129`,
    why: `KOLKATA: 360 + 240 + 36 + 6 + 0 + 1 + 0 = 643 words before it, rank 644, below the ceiling ${fr('7!', '2! 2!')} = 1260.`,
    say: null,
  },
  // pp. 560, 562–563
  {
    topic: 6,
    kind: 'shortcut',
    q: 'How many arrangements of EXAMINATION come before the first word beginning with E?',
    a: `Only the words starting with a letter before E, here only A, precede it. Fix one A; the rest {A, E, I, I, M, N, N, O, T, X} has I twice and N twice: ${fr('10!', '2! 2!')} = 907,200. Check every running total against the ceiling ${fr(`${n}!`, `${p}! ${q}! ⋯`)} after the very first position: it takes seconds and kills the forgotten-denominator error`,
    why: 'GANGA ranks 18 out of 30; MATHS 53 out of 120.',
    say: null,
  },

  // ── Additional topic B · Lattice-path counting ──
  // pp. 564–565, 579
  {
    topic: 7,
    kind: 'remember',
    q: `How many monotonic paths (unit steps right R and up U) run from (0, 0) to (${m}, ${n})?`,
    a: `A path is a word: it takes exactly ${m} R-steps and ${n} U-steps in some order, and the order is the path, so the count is the alike-objects count of RR⋯R UU⋯U: ${fr(`(${m} + ${n})!`, `${m}! ${n}!`)} = ${bn(`${m} + ${n}`, m)} = ${bn(`${m} + ${n}`, n)}. It is symmetric in ${m} and ${n}: reflecting the grid in the line <i>y</i> = <i>x</i> is a bijection between the paths to (${m}, ${n}) and to (${n}, ${m})`,
    why: `A courier going 4 blocks east and 3 north, never west or south: ${fr('7!', '4! 3!')} = ${bn('7', '4')} = 35 routes.`,
    say: 'A grid path is a word in R and U.',
  },
  // pp. 565–566, 568
  {
    topic: 7,
    kind: 'remember',
    q: 'How do you count paths through a checkpoint, and paths that avoid points?',
    a: `Through <i>P</i>(${a}, ${b}): ${bn(`${a} + ${b}`, a)} × ${bn(`(${m} − ${a}) + (${n} − ${b})`, `${m} − ${a}`)}, because arriving at <i>P</i> erases all memory of how you got there (Multiplication Principle). Avoiding <i>P</i>: total − through <i>P</i>. Avoiding several points: inclusion–exclusion on “passes through <i>P</i><sub><i>i</i></sub>”. A checkpoint outside 0 ≤ ${a} ≤ ${m}, 0 ≤ ${b} ≤ ${n} contributes zero`,
    why: `(0, 0) to (6, 6) avoiding (2, 2) and (4, 4): 924 − 420 − 420 + 216 = 300.`,
    say: null,
  },
  // p. 565
  {
    topic: 7,
    kind: 'mixup',
    q: 'Does the path formula still apply with diagonal steps, or with a ban on rising above <i>y</i> = <i>x</i>?',
    a: `No. The formula counts monotonic paths only: with a diagonal step, or with moves left or down, a path is no longer a rearrangement of a fixed letter-string. A constraint that depends on the whole history is not a plain combination either: paths from (0, 0) to (${n}, ${n}) that never rise above <i>y</i> = <i>x</i> are counted by the Catalan number ${fr('1', `${n} + 1`)}${bn(`2${n}`, n)}, beyond the syllabus`,
    why: `Catalan numbers for ${n} = 1 to 5: 1, 2, 5, 14, 42.`,
    say: null,
  },
  // p. 566
  {
    topic: 7,
    kind: 'mistake',
    q: 'Paths from (0, 0) to (4, 4) not through (2, 2): is it 70 − (6 + 6) = 58?',
    a: `No: 34. Reaching (2, 2) in 6 ways and then continuing in 6 ways is a two-stage AND, so the legs multiply: ${bn('4', '2')} × ${bn('4', '2')} = 36 paths go through it, and ${bn('8', '4')} − 36 = 70 − 36 = 34. Subtracting a single path (70 − 1 = 69) is the close cousin`,
    why: `Paths from (0, 0) to (5, 5) through (2, 3): ${bn('5', '2')} × ${bn('5', '3')} = 10 × 10 = 100, against a free count of 252.`,
    say: null,
  },
  // pp. 567–568, 579
  {
    topic: 7,
    kind: 'shortcut',
    q: 'Two insects start together at (0, 0) and (8, 8) and crawl at equal speed, one right or up, the other left or down. In how many ways can they meet?',
    a: `Equal speed pins the meeting to the anti-diagonal <i>x</i> + <i>y</i> = 8, after 8 steps each; at (${k}, 8 − ${k}) each insect has ${bn('8', k)} routes. So the count is ${SUM(`${k}=0`, '8')} ${bn('8', k)}<sup>2</sup> = ${bn('16', '8')} = 12,870, by the identity ∑<sub>${k}</sub> ${bn(n, k)}<sup>2</sup> = ${bn(`2${n}`, n)}`,
    why: `On a 4 × 4 board: ${SUM(`${k}=0`, '4')} ${bn('4', k)}<sup>2</sup> = ${bn('8', '4')} = 70.`,
    say: null,
  },

  // ── Additional topic C · The divisor toolkit beyond d(N) and σ(N) ──
  // pp. 569, 579
  {
    topic: 8,
    kind: 'remember',
    q: `In how many ways can ${N} be written as a product of two factors, and what is the product of all its divisors?`,
    a: `Unordered pairs {${a}, ${b}} with <i>ab</i> = ${N}: ${fr(dN, '2')} if ${N} is not a perfect square, ${fr(`${dN} + 1`, '2')} if it is (√${N} pairs with itself); ordered pairs number ${dN}. ${N} is a perfect square exactly when every exponent is even, equivalently when ${dN} is odd: faster than a square root. Pairing each divisor ${t} with ${fr(N, t)}, the product of all divisors is ${N}<sup><i>d</i>(<i>N</i>)/2</sup>; leave it as a power`,
    why: `7200 = 2<sup>5</sup> · 3<sup>2</sup> · 5<sup>2</sup>: <i>d</i> = 54, so 27 ways; 3600 = 60<sup>2</sup>: <i>d</i> = 45, so ${fr('45 + 1', '2')} = 23 ways.`,
    say: '<i>d</i>(<i>N</i>) odd means <i>N</i> is a perfect square.',
  },
  // pp. 569, 572, 579
  {
    topic: 8,
    kind: 'remember',
    q: `In how many ways can ${N} be split into two coprime factors?`,
    a: `If gcd(${a}, ${b}) = 1 and <i>ab</i> = ${N}, each whole prime block ${pi}<sup><i>a</i>ᵢ</sup> must go entirely to ${a} or entirely to ${b}: with ${k} distinct primes, 2<sup>${k}</sup> ordered pairs, and for ${N} > 1, where no split pairs a factor with itself, 2<sup>${k}−1</sup> unordered pairs. The exponents play no part; only the number of distinct primes matters`,
    why: '18900 = 2<sup>2</sup> · 3<sup>3</sup> · 5<sup>2</sup> · 7 has 4 distinct primes: 2<sup>3</sup> = 8 unordered coprime pairs, such as {4, 4725} and {100, 189}.',
    say: 'Coprime split colours whole prime blocks.',
  },
  // pp. 569–570, 573
  {
    topic: 8,
    kind: 'remember',
    q: `How many divisors of ${N} are multiples of ${m}, and how many are odd or even?`,
    a: `For ${m} ∣ ${N}, the divisors of ${N} that are multiples of ${m} are exactly ${m} × (divisors of ${fr(N, m)}): count <i>d</i>(${fr(N, m)}), sum ${m} · <i>σ</i>(${fr(N, m)}). Writing ${N} = 2<sup>${a}</sup><i>M</i> with <i>M</i> odd: odd divisors, count <i>d</i>(<i>M</i>) and sum <i>σ</i>(<i>M</i>) (delete the prime 2); even divisors, count ${dN} − <i>d</i>(<i>M</i>) = ${a} · <i>d</i>(<i>M</i>), sum ${sN} − <i>σ</i>(<i>M</i>)`,
    why: `Divisors of 7200 divisible by 12: ${fr('7200', '12')} = 600 = 2<sup>3</sup> · 3 · 5<sup>2</sup>, so <i>d</i>(600) = 24.`,
    say: null,
  },
  // pp. 569, 573
  {
    topic: 8,
    kind: 'remember',
    q: `How many ordered triples of natural numbers have <i>xyz</i> = ${N}?`,
    a: `Each prime’s exponent ${ai} is split among the three factors in non-negative integers, a stars-and-bars count of ${bn(`${ai} + 2`, '2')} ways, and the primes are independent: ∏<sub>${i}=1</sub><sup>${k}</sup> ${bn(`${ai} + 2`, '2')}. For integer triples with ${N} > 0, the sign pattern needs an even number of negatives (all positive, or exactly two negative in ${bn('3', '2')} = 3 ways): multiply by 4`,
    why: `360 = 2<sup>3</sup> · 3<sup>2</sup> · 5: ${bn('5', '2')}${bn('4', '2')}${bn('3', '2')} = 10 × 6 × 3 = 180 natural triples, 720 integer triples.`,
    say: null,
  },
  // pp. 569, 571
  {
    topic: 8,
    kind: 'mixup',
    q: 'Ordered or unordered factor pairs, all pairs or coprime pairs: which count is which?',
    a: `Ordered pairs (${a}, ${b}) with <i>ab</i> = ${N}: ${dN}, one for each choice of ${a}. Unordered: ${fr(dN, '2')}, or ${fr(`${dN} + 1`, '2')} for a perfect square. Coprime pairs depend only on the number ${k} of distinct primes, and never exceed the total pair count`,
    why: '36: five unordered pairs (1 × 36, 2 × 18, 3 × 12, 4 × 9, 6 × 6) but only two coprime ones, 1 × 36 and 4 × 9.',
    say: null,
  },
  // p. 571
  {
    topic: 8,
    kind: 'mistake',
    q: `36 = 2<sup>2</sup> · 3<sup>2</sup> has 9 divisors. Is the number of ways to write it as a product of two factors ${fr('9', '2')}, rounded down to 4?`,
    a: `No: 5. A count is never a fraction. An odd ${dN} is the signal that ${N} is a perfect square, so use ${fr(`${dN} + 1`, '2')} = ${fr('10', '2')} = 5; the self-paired 6 × 6 is exactly the pair the naive halving throws away`,
    why: `2520 = 2<sup>3</sup> · 3<sup>2</sup> · 5 · 7: <i>d</i> = 48, not a perfect square, so ${fr('48', '2')} = 24 ways.`,
    say: null,
  },
  // p. 572
  {
    topic: 8,
    kind: 'shortcut',
    q: `For ${N} = 18900, how many divisors are divisible by 15, and what is their sum?`,
    a: `Use the ${fr(N, m)} bijection rather than casework on exponents: the divisors divisible by 15 are 15${t} for ${t} ∣ ${fr('18900', '15')} = 1260 = 2<sup>2</sup> · 3<sup>2</sup> · 5 · 7, so there are <i>d</i>(1260) = 36 of them, and their sum is 15 · <i>σ</i>(1260) = 15 × 4368 = 65,520. The bijection hands you the sum for free, which casework does not`,
    why: 'The product of all divisors of 1200 (<i>d</i> = 30) is 1200<sup>15</sup>: left as a power.',
    say: null,
  },

  // ── Additional topic D · Partial derangements: exactly k objects in place ──
  // pp. 573–575, 579
  {
    topic: 9,
    kind: 'remember',
    q: `In how many permutations of ${n} objects are exactly ${k} of them in their own place?`,
    a: `${bn(n, k)} ${D(`${n}−${k}`)}: choose which ${k} objects are in place, then the other ${n} − ${k} must all be wrong (one more in place would break “exactly”), a derangement of ${n} − ${k} objects. The formula needs a genuine one-to-one matching of objects and places; otherwise go back to inclusion–exclusion with the forbidden positions the problem actually gives`,
    why: `5 letters with exactly two in the correct envelopes: ${bn('5', '2')} × ${D('3')} = 10 × 2 = 20.`,
    say: 'Fix <i>k</i>, derange the rest.',
  },
  // pp. 574, 579
  {
    topic: 9,
    kind: 'remember',
    q: 'Which derangement values and identities should you keep on hand?',
    a: `${D(n)} for ${n} = 0 to 8: 1, 0, 1, 2, 9, 44, 265, 1854, 14833; ${D('0')} = 1 (the empty arrangement). At least ${k} in place: ${SUM(`${j}=${k}`, n)} ${bn(n, j)}${D(`${n}−${j}`)}. The categories “exactly ${k} in place” are disjoint and exhaustive, so ${SUM(`${k}=0`, n)} ${bn(n, k)}${D(`${n}−${k}`)} = ${n}!. For every ${n} ≥ 1, ${D(n)} is the nearest integer to ${fr(`${n}!`, '<i>e</i>')}, so, beyond the smallest ${n}, roughly 37 percent of permutations are derangements`,
    why: 'For 6 objects: 265 + 264 + 135 + 40 + 15 + 0 + 1 = 720 = 6!.',
    say: null,
  },
  // pp. 574, 577
  {
    topic: 9,
    kind: 'mixup',
    q: 'Six letters in six envelopes: “at least one letter misplaced” or “no letter in place”?',
    a: `At least one misplaced is the complement of “all six right”, which happens in exactly one way: 6! − 1 = 719. No letter in place is the derangement count ${D('6')} = 265. In general ${n}! − 1 against ${D(n)}`,
    why: `The probability that no letter of six is in place: ${fr('265', '720')} = ${fr('53', '144')} ≈ 0.3681, close to ${fr('1', '<i>e</i>')} ≈ 0.3679.`,
    say: null,
  },
  // p. 576
  {
    topic: 9,
    kind: 'mistake',
    q: `In how many ways can exactly four of five letters reach their correct envelopes: ${bn('5', '4')} = 5?`,
    a: `None: ${bn('5', '4')} ${D('1')} = 5 × 0 = 0. If four letters are right, the one envelope left is the last letter’s own, so it is right too. Exactly ${n} − 1 in place is impossible for every ${n}, because ${D('1')} = 0; stopping after “choose which four” is the most common wrong answer`,
    why: `Exactly three of five correct is possible: ${bn('5', '3')} ${D('2')} = 10 × 1 = 10, the last two letters simply swap.`,
    say: null,
  },
  // pp. 575–576
  {
    topic: 9,
    kind: 'shortcut',
    q: 'Six letters, at least two in the correct envelopes: how do you get the answer and check it?',
    a: `Add the exactly-${k} counts for ${k} = 2 to 6: 135 + 40 + 15 + 0 + 1 = 191. Then complete the table with exactly 0 (${D('6')} = 265) and exactly 1 (${bn('6', '1')}${D('5')} = 264): the whole distribution must total 6! = 720, and 265 + 264 + 191 = 720. It is the cheapest insurance in the topic`,
    why: `Exactly three of eight objects in place: ${bn('8', '3')}${D('5')} = 56 × 44 = 2464.`,
    say: null,
  },
];
