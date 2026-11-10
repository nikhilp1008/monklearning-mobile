/**
 * KEY POINTS for Mathematics Class 11, Chapter 1 (Sets).
 *
 * Written for test mode: every point is a question to answer in your head,
 * then the answer and at most one more line. Four kinds, each a section on
 * the screen: Remember (two a topic), Don't mix up, Common mistakes and Exam
 * shortcuts (one each); an Additional topic has two points for its central
 * results. Memory lines are a fifth, short section of their own, read rather
 * than tested: the first two of each topic.
 *
 * `topic`: Topics 01–05 are 0–4 (Topic 05, the supplement's Subtopic 05,
 * follows Topic 04); Additional topics A–H are 5–12 and I–M are 13–17. No
 * point refers to another topic by number.
 *
 * Every fact is from the Master Reference book (the October 2026 edition); the
 * page (the bottom folio) is above each point. Remember: the topic's Key
 * definitions and Cheat sheet. Common mistakes: its Common student pitfalls.
 * Exam shortcuts: its Pro-Tip, with a worked example or practice answer. `say`:
 * the cheat sheet's first two memory aids, word for word, in the Ch 1–4 form:
 * no quotation marks, and the book's own gloss after ": " where it has one (no em dashes in Mathematics).
 * Topics 01–05 print three, three, three, four and five aids; the first two of
 * each are used, so the chapter has ten lines. Additional topics: the addenda's
 * methods, worked examples and practice answers.
 *
 * Where the book's claim is looser than the mathematics, the point is true:
 * Topic 05's "a shrinking open endpoint excludes its limit" and its speed
 * move "Square bracket: it stays. Round bracket: the intersection is empty"
 * are both too general (⋂ (−1/n, 1/n) = {0}, round brackets and all): the
 * point says the limit stays exactly when every member contains it, a square
 * bracket keeping it and a round one dropping it only where it is every
 * member's endpoint, and a point held inside every member staying whatever
 * the brackets, as in ⋂ [2 − 1/n, 5 + 1/n] = [2, 5]. Topic 03's interval rule
 * "for ∩, the tighter bounds and the stricter bracket" is given as each bound
 * keeping the bracket of the set it comes from, a shared endpoint included
 * only if both sets include it. Additional topic A's "discrete universe,
 * condition unbounded in at least one direction ⇒ infinite" is given as the
 * members running on without bound ({x ∈ ℕ ∶ x < 100}, the book's own
 * example, has a condition unbounded below and is finite). The even/odd
 * split of subsets, 2ⁿ⁻¹ each, is stated for n ≥ 1, as Additional topic B's
 * caveat requires.
 *
 * A few numbers are worked from the book's data rather than printed by it:
 * the 200-student survey's regions, filled centre first (45, 30, 20, 20, 10,
 * 15, 20, total 160), and the newspaper survey's "exactly two" (230 − 120 =
 * 110, checked against its union 300 + 110 + 40 = 450).
 *
 * Markup is the chapter's own: <i> for every variable and set letter, ∶ in
 * set-builder, ′ for complements, − for minus and set difference, ⊊ for a
 * proper subset, the number sets ℕ 𝕎 ℤ ℚ ℝ 𝕋 upright. Every fraction is
 * stacked, <frac><num>…</num><den>…</den></frac>; a binomial coefficient is
 * <sup>n</sup>C<sub>r</sub>. Big unions and intersections carry their limits
 * as a lowered and raised pair, as the chapter writes them.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Sets and their Representations ──
  // pp. 26–27, 33
  {
    topic: 0,
    kind: 'remember',
    q: 'What makes a collection a set, and in which two forms is a set written?',
    a: 'Membership must be well-defined: given any object, “is it in, or out?” has a definite yes or no. “The students in your class taller than 170 cm” is a set; “the tall students” is not, because tall is a matter of opinion. Order and repetition are meaningless: {1, 2, 2, 3} is just {1, 2, 3}, and {<i>a</i>, <i>b</i>, <i>c</i>} = {<i>c</i>, <i>a</i>, <i>b</i>}, so “how many elements?” means how many distinct ones. Roster form lists every member in braces, {2, 4, 6}; set-builder form states the rule they all satisfy, {<i>x</i> ∶ <i>P</i>(<i>x</i>)}, read “the set of all <i>x</i> such that <i>P</i>(<i>x</i>)”. Roster can only suggest an infinite set with dots, {1, 2, 3, …}; set-builder captures it in one line',
    why: 'A set is the answer to a single yes/no membership question: roster form lists every “yes”, set-builder form writes down the question itself.',
    say: 'Well-defined or it’s not a set: kills subjective collections.',
  },
  // pp. 27–28, 31, 33
  {
    topic: 0,
    kind: 'remember',
    q: 'Which are the standard number sets, how do they nest, and when is a set empty, finite or infinite?',
    a: 'ℕ = {1, 2, 3, …}, 𝕎 = {0, 1, 2, …}, ℤ = {…, −2, −1, 0, 1, 2, …}, ℚ = {<frac><num><i>p</i></num><den><i>q</i></den></frac> ∶ <i>p</i>, <i>q</i> ∈ ℤ, <i>q</i> ≠ 0}, ℝ the real numbers and 𝕋 the irrationals, nested ℕ ⊂ 𝕎 ⊂ ℤ ⊂ ℚ ⊂ ℝ. To classify a set, first ask whether any element satisfies the condition: if none, it is the empty set ∅ = { }, as for <i>x</i><sup>2</sup> = −4 over ℝ or a natural number strictly between 2 and 3. If elements exist, ask whether you could in principle finish counting them: the set is finite when <i>n</i>(<i>A</i>), the number of distinct elements, is a definite whole number, and infinite otherwise. A singleton has exactly one element, {<i>a</i>}',
    why: 'Empty depends on the universe: {<i>x</i> ∈ ℕ ∶ <i>x</i><sup>2</sup> − 3 = 0} is empty because <i>x</i> = ±√3 ∉ ℕ.',
    say: null,
  },
  // pp. 27–28, 30, 32–33
  {
    topic: 0,
    kind: 'mixup',
    q: 'Equal sets or equivalent sets: what does each require?',
    a: 'Equal sets, <i>A</i> = <i>B</i>, have identical elements: <i>x</i> ∈ <i>A</i> ⇔ <i>x</i> ∈ <i>B</i>. Equivalent sets only have the same number of elements, <i>n</i>(<i>A</i>) = <i>n</i>(<i>B</i>). Equal ⇒ equivalent, but equivalent ⇏ equal: {1, 2, 3} and {<i>a</i>, <i>b</i>, <i>c</i>} are equivalent, both of size 3, yet not equal. To test equality, reduce both sets to roster form and confirm mutual containment, every element of <i>A</i> in <i>B</i> and every element of <i>B</i> in <i>A</i>; if the counts match but the elements differ, the sets are only equivalent',
    why: '{<i>x</i> ∈ ℕ ∶ <i>x</i> is a factor of 6} = {1, 2, 3, 6} and {<i>p</i>, <i>q</i>, <i>r</i>, <i>s</i>} both have 4 elements: equivalent, not equal.',
    say: null,
  },
  // pp. 27, 31–32
  {
    topic: 0,
    kind: 'mistake',
    q: 'Are {0} and {∅} empty sets?',
    a: 'No: each is a singleton. {0} holds one element, the number zero; {∅} holds one element, the empty set itself. Empty means zero elements, and only ∅, also written { }, is empty, like the set of students who scored above 100 on a 100-mark paper. The slip is confusing a box that contains nothing with a box that contains the number zero or an empty box',
    why: 'Sets discard duplicates too: the distinct letters of “MATHEMATICS” are {M, A, T, H, E, I, C, S}, 8 of them, not 11.',
    say: null,
  },
  // pp. 30–33
  {
    topic: 0,
    kind: 'shortcut',
    q: 'Which of {<i>x</i> ∈ ℝ ∶ <i>x</i><sup>2</sup> + 1 = 0}, {<i>x</i> ∶ <i>x</i> is an even prime}, {0} and {<i>x</i> ∈ ℕ ∶ <i>x</i> < 1} are empty? The fast way?',
    a: 'Circle the universe symbol first and ask “is this even possible here?” <i>x</i><sup>2</sup> = −1 has no real solution, so the first is empty; the smallest natural number is 1, so no natural number is less than 1 and the last is empty too. The even primes are {2}, and {0} contains 0: neither is empty, {0} being a singleton dressed up to look empty. The same two seconds settle a quadratic: {<i>x</i> ∈ ℝ ∶ <i>x</i><sup>2</sup> − 2<i>x</i> + 5 = 0} is empty, its discriminant (−2)<sup>2</sup> − 4(1)(5) = −16 being negative; and {<i>x</i> ∶ <i>x</i><sup>2</sup> = 2} is empty over ℕ but a doubleton over ℝ',
    why: 'The domain filters roots: <i>T</i> = {<i>x</i> ∈ ℕ ∶ <i>x</i><sup>2</sup> − (<i>a</i> + 1)<i>x</i> + <i>a</i> = 0} has roots 1 and <i>a</i>, so <i>n</i>(<i>T</i>) = 1 exactly when <i>a</i> = 1 or <i>a</i> ∉ ℕ.',
    say: 'Domain first, solve second: read ℕ/ℤ/ℝ before computing.',
  },

  // ── Topic 02 · Subsets, Power Set, and Universal Set ──
  // pp. 34–35, 40
  {
    topic: 1,
    kind: 'remember',
    q: 'When is <i>A</i> a subset of <i>B</i>, which subsets does every set have, and what is its power set?',
    a: '<i>A</i> ⊆ <i>B</i> when every element of <i>A</i> is also an element of <i>B</i>: <i>x</i> ∈ <i>A</i> ⇒ <i>x</i> ∈ <i>B</i>, and <i>B</i> may have extras. Every set is a subset of itself, <i>A</i> ⊆ <i>A</i>, and ∅ ⊆ <i>A</i> for every <i>A</i>, vacuously: no element of ∅ can fail. <i>A</i> is a proper subset, <i>A</i> ⊊ <i>B</i>, when also <i>A</i> ≠ <i>B</i>; whenever <i>A</i> ⊆ <i>B</i>, <i>B</i> is a superset, <i>B</i> ⊇ <i>A</i>; equality is mutual containment, <i>A</i> = <i>B</i> ⟺ <i>A</i> ⊆ <i>B</i> and <i>B</i> ⊆ <i>A</i>. The power set <i>P</i>(<i>A</i>) = {<i>X</i> ∶ <i>X</i> ⊆ <i>A</i>} is the set of all subsets of <i>A</i>, and <i>P</i>(∅) = {∅} has one element, not zero. The universal set <i>U</i> holds every object under discussion, so every set in the discussion is a subset of it',
    why: '∈ relates an element to a set, ⊆ a set to a set: 1 ∈ {1, 2} and {1} ⊆ {1, 2}, while {1} ∈ <i>P</i>({1, 2}); for <i>A</i> = {1, 2}, writing 1 ⊆ <i>A</i> or {1} ∈ <i>A</i> is a category error.',
    say: 'In with ∈, part with ⊆.',
  },
  // pp. 34–36, 40
  {
    topic: 1,
    kind: 'remember',
    q: 'Why does a set of <i>n</i> elements have 2<sup><i>n</i></sup> subsets?',
    a: 'To build a subset, decide for each element, independently, in or out: 2 choices for <i>a</i><sub>1</sub>, times 2 for <i>a</i><sub>2</sub>, …, times 2 for <i>a</i><sub><i>n</i></sub>, giving 2<sup><i>n</i></sup>. Each in/out sequence gives a distinct subset and every subset arises from exactly one, a one-to-one match with the binary strings of length <i>n</i>, so <i>n</i>[<i>P</i>(<i>A</i>)] = 2<sup><i>n</i></sup>. The all-out string gives ∅ and the all-in string <i>A</i> itself, so both are already in the count. The number of subsets with exactly <i>r</i> elements is <sup><i>n</i></sup>C<sub><i>r</i></sub>',
    why: 'Cross-check by size: <sup><i>n</i></sup>C<sub>0</sub> + <sup><i>n</i></sup>C<sub>1</sub> + ⋯ + <sup><i>n</i></sup>C<sub><i>n</i></sub> = (1 + 1)<sup><i>n</i></sup> = 2<sup><i>n</i></sup>.',
    say: 'Coin per element: 2<sup><i>n</i></sup> subsets.',
  },
  // pp. 35, 37, 39–40
  {
    topic: 1,
    kind: 'mixup',
    q: 'Subsets, proper subsets, non-empty subsets, non-empty proper subsets: which count is which?',
    a: 'For <i>n</i>(<i>A</i>) = <i>n</i>: subsets 2<sup><i>n</i></sup>; proper subsets 2<sup><i>n</i></sup> − 1, leaving out only <i>A</i> itself; non-empty subsets 2<sup><i>n</i></sup> − 1, leaving out only ∅; non-empty proper subsets 2<sup><i>n</i></sup> − 2 (<i>n</i> ≥ 1), leaving out both. Proper is not 2<sup><i>n</i></sup> − 2: only the set itself is excluded. So a set with 63 proper subsets has 2<sup><i>n</i></sup> = 64 and <i>n</i> = 6',
    why: 'Count the easy opposite: of the 2<sup>7</sup> = 128 subsets of {1, …, 7}, the 2<sup>4</sup> = 16 subsets of the odds {1, 3, 5, 7} contain no even number, so 128 − 16 = 112 contain at least one.',
    say: null,
  },
  // pp. 35–37, 40
  {
    topic: 1,
    kind: 'mistake',
    q: 'If <i>n</i>[<i>P</i>(<i>A</i>)] = 1024, is <i>n</i>(<i>A</i>) = 1024?',
    a: 'No: 1024 counts the subsets, not the elements. Since <i>n</i>[<i>P</i>(<i>A</i>)] = 2<sup><i>n</i>(<i>A</i>)</sup> and 1024 = 2<sup>10</sup>, <i>n</i>(<i>A</i>) = 10. The partner slip is forgetting ∅ and <i>A</i> itself when listing subsets: they are always there, so list by size, ∅ first, then the singletons, the pairs, …, ending with <i>A</i>, and you should reach exactly 2<sup><i>n</i></sup>',
    why: '<i>P</i>({<i>p</i>, <i>q</i>, <i>r</i>}) = {∅, {<i>p</i>}, {<i>q</i>}, {<i>r</i>}, {<i>p</i>, <i>q</i>}, {<i>p</i>, <i>r</i>}, {<i>q</i>, <i>r</i>}, {<i>p</i>, <i>q</i>, <i>r</i>}}: 2<sup>3</sup> = 8 members.',
    say: null,
  },
  // pp. 37, 39–40
  {
    topic: 1,
    kind: 'shortcut',
    q: 'Given <i>n</i>[<i>P</i>(<i>A</i>)] = 256, find <i>n</i>(<i>A</i>) and the number of proper subsets. The fast way?',
    a: 'Recognise the power of two: memorise 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, since many power-set MCQs reduce to spotting one. 256 = 2<sup>8</sup>, so <i>n</i>(<i>A</i>) = 8, and the proper subsets number 2<sup>8</sup> − 1 = 255: not 256 elements, which is the count of subsets, and not 254, since only the set itself is excluded from “proper”. Likewise, with <i>B</i> ⊂ <i>A</i>, 2<sup><i>n</i>(<i>A</i>)</sup> − 2<sup><i>n</i>(<i>B</i>)</sup> = 56 = 64 − 8 gives <i>n</i>(<i>A</i>) = 6 and <i>n</i>(<i>B</i>) = 3',
    why: 'Over ℤ, <i>x</i><sup>2</sup> − <i>x</i> − 6 ≤ 0 gives {−2, −1, 0, 1, 2, 3} and 2<sup>6</sup> = 64 subsets; over ℝ it is the interval [−2, 3], an infinite set with no finite power-set count.',
    say: null,
  },

  // ── Topic 03 · Venn Diagrams and Set Operations ──
  // pp. 41, 43, 48
  {
    topic: 2,
    kind: 'remember',
    q: 'What do union, intersection, difference, complement and symmetric difference each keep?',
    a: 'Union <i>A</i> ∪ <i>B</i> = {<i>x</i> ∶ <i>x</i> ∈ <i>A</i> or <i>x</i> ∈ <i>B</i>}, the inclusive or, both counting. Intersection <i>A</i> ∩ <i>B</i> = {<i>x</i> ∶ <i>x</i> ∈ <i>A</i> and <i>x</i> ∈ <i>B</i>}. Difference <i>A</i> − <i>B</i> = {<i>x</i> ∶ <i>x</i> ∈ <i>A</i> and <i>x</i> ∉ <i>B</i>} = <i>A</i> ∩ <i>B</i>′. Complement <i>A</i>′ = <i>U</i> − <i>A</i>, everything in <i>U</i> outside <i>A</i>, so it changes when <i>U</i> does. Symmetric difference <i>A</i> △ <i>B</i> = (<i>A</i> − <i>B</i>) ∪ (<i>B</i> − <i>A</i>) = (<i>A</i> ∪ <i>B</i>) − (<i>A</i> ∩ <i>B</i>), the elements in exactly one of the two. Two circles cut <i>U</i> into four regions, only <i>A</i>, only <i>B</i>, both and neither: union shades three, intersection the lens, <i>A</i> − <i>B</i> the crescent of <i>A</i>, and <i>A</i>′ everything outside circle <i>A</i>',
    why: 'Disjoint, <i>A</i> ∩ <i>B</i> = ∅, is not complementary, which needs <i>A</i> ∩ <i>B</i> = ∅ and also <i>A</i> ∪ <i>B</i> = <i>U</i>.',
    say: 'Cup = or, cap = and.',
  },
  // pp. 43–44, 47–48
  {
    topic: 2,
    kind: 'remember',
    q: 'What do De Morgan’s laws say, how is the first proved, and which laws sit beside them?',
    a: '(<i>A</i> ∪ <i>B</i>)′ = <i>A</i>′ ∩ <i>B</i>′ and (<i>A</i> ∩ <i>B</i>)′ = <i>A</i>′ ∪ <i>B</i>′: complementing flips the operation. By element-chasing, <i>x</i> ∈ (<i>A</i> ∪ <i>B</i>)′ ⟺ NOT(<i>x</i> ∈ <i>A</i> or <i>x</i> ∈ <i>B</i>) ⟺ <i>x</i> ∉ <i>A</i> and <i>x</i> ∉ <i>B</i> ⟺ <i>x</i> ∈ <i>A</i>′ ∩ <i>B</i>′, every step an iff: the negation of “or” is “and”. Shading illustrates the law; element-chasing proves it. Beside them: <i>A</i> ∪ <i>A</i>′ = <i>U</i>, <i>A</i> ∩ <i>A</i>′ = ∅, (<i>A</i>′)′ = <i>A</i>, <i>U</i>′ = ∅, ∅′ = <i>U</i>; <i>A</i> ∩ (<i>B</i> ∪ <i>C</i>) = (<i>A</i> ∩ <i>B</i>) ∪ (<i>A</i> ∩ <i>C</i>) and <i>A</i> ∪ (<i>B</i> ∩ <i>C</i>) = (<i>A</i> ∪ <i>B</i>) ∩ (<i>A</i> ∪ <i>C</i>); <i>A</i> ∪ <i>A</i> = <i>A</i> ∩ <i>A</i> = <i>A</i>',
    why: '(<i>A</i>′ ∩ <i>B</i>′)′ = (<i>A</i>′)′ ∪ (<i>B</i>′)′ = <i>A</i> ∪ <i>B</i>.',
    say: 'De Morgan flips the sign: complement a union, get an intersection.',
  },
  // pp. 41, 44, 47–48
  {
    topic: 2,
    kind: 'mixup',
    q: 'With <i>A</i> = {1, 2, 3} and <i>B</i> = {3, 4, 5}, which set is <i>A</i> − <i>B</i>: {1, 2}, {4, 5}, {3} or {1, 2, 4, 5}?',
    a: '<i>A</i> − <i>B</i> = {1, 2}: the elements of <i>A</i> not in <i>B</i>, 3 being excluded because it is also in <i>B</i>. {4, 5} is <i>B</i> − <i>A</i>, {3} is <i>A</i> ∩ <i>B</i>, and {1, 2, 4, 5} is <i>A</i> △ <i>B</i>. Difference is not commutative, <i>A</i> − <i>B</i> ≠ <i>B</i> − <i>A</i> in general: read which set is the source and which is being removed',
    why: 'With <i>U</i> = {1, 2, …, 10}, <i>A</i> = {2, 4, 6, 8}, <i>B</i> = {1, 2, 3, 4, 5}: <i>A</i> − <i>B</i> = {6, 8}, <i>B</i> − <i>A</i> = {1, 3, 5}, <i>A</i> △ <i>B</i> = {1, 3, 5, 6, 8} and <i>A</i>′ = {1, 3, 5, 7, 9, 10}.',
    say: null,
  },
  // pp. 45–46, 48
  {
    topic: 2,
    kind: 'mistake',
    q: 'Over ℝ, with <i>A</i> = [−2, 5) and <i>B</i> = (1, 8], what are <i>A</i> ∩ <i>B</i>, <i>A</i> ∪ <i>B</i> and <i>A</i> − <i>B</i>, and where do the endpoints go wrong?',
    a: 'For ∩ take the tighter bounds, the larger lower bound and the smaller upper bound, each with the bracket of the set it comes from: <i>A</i> ∩ <i>B</i> = (1, 5), open at 1 because <i>B</i> excludes it and at 5 because <i>A</i> does; a shared endpoint stays only if both sets include it. For ∪ of overlapping intervals take the looser bounds: <i>A</i> ∪ <i>B</i> = [−2, 8]. <i>A</i> − <i>B</i> runs from −2 up to and including 1, which survives because 1 ∉ <i>B</i>: [−2, 1]',
    why: 'Over ℝ, (−∞, 3] ∩ (0, ∞) = (0, 3]: 0 stays out because (0, ∞) leaves it out, 3 stays in because (−∞, 3] includes it.',
    say: null,
  },
  // pp. 44–45, 47–48
  {
    topic: 2,
    kind: 'shortcut',
    q: 'Simplify (<i>A</i> − <i>B</i>) ∪ (<i>A</i> ∩ <i>B</i>). The fast way?',
    a: 'Draw the four-region Venn once and shade: <i>A</i> − <i>B</i> is the crescent of <i>A</i> and <i>A</i> ∩ <i>B</i> the lens, and together they fill circle <i>A</i>, a five-second answer: <i>A</i>. Algebra confirms it: (<i>A</i> ∩ <i>B</i>′) ∪ (<i>A</i> ∩ <i>B</i>) = <i>A</i> ∩ (<i>B</i>′ ∪ <i>B</i>) = <i>A</i> ∩ <i>U</i> = <i>A</i>. Rushing to <i>A</i> ∪ <i>B</i> over-shades into <i>B</i>; <i>A</i> ∩ <i>B</i> under-shades',
    why: 'The absorption laws read off the same picture: <i>A</i> ∩ (<i>A</i> ∪ <i>B</i>) = <i>A</i> and <i>A</i> ∪ (<i>A</i> ∩ <i>B</i>) = <i>A</i>.',
    say: null,
  },

  // ── Topic 04 · Cardinality of Unions and Practical Problems ──
  // pp. 49–50, 53–54, 56
  {
    topic: 3,
    kind: 'remember',
    q: 'How many are in <i>A</i> ∪ <i>B</i>, in “only <i>A</i>” and in neither, and when is the data impossible?',
    a: 'Adding <i>n</i>(<i>A</i>) + <i>n</i>(<i>B</i>) counts the overlap twice, so subtract it once: <i>n</i>(<i>A</i> ∪ <i>B</i>) = <i>n</i>(<i>A</i>) + <i>n</i>(<i>B</i>) − <i>n</i>(<i>A</i> ∩ <i>B</i>), which is <i>n</i>(<i>A</i>) + <i>n</i>(<i>B</i>) only for disjoint sets. “Only <i>A</i>” = <i>n</i>(<i>A</i>) − <i>n</i>(<i>A</i> ∩ <i>B</i>); neither = <i>n</i>(<i>U</i>) − <i>n</i>(<i>A</i> ∪ <i>B</i>). In a batch of 120 with 70 in Physics, 50 in Chemistry and 30 in both: 70 + 50 − 30 = 90 in at least one, 70 − 30 = 40 in Physics only, 120 − 90 = 30 in neither. If a union exceeds <i>n</i>(<i>U</i>), or a region comes out negative, the data is inconsistent',
    why: 'Of 100 people, 72 liking tea, 55 coffee and 20 both would give 72 + 55 − 20 = 107 > 100: the figures are contradictory.',
    say: 'Or = union, and = intersection, only = drop the overlaps.',
  },
  // pp. 49–50, 52–53, 56
  {
    topic: 3,
    kind: 'remember',
    q: 'What is <i>n</i>(<i>A</i> ∪ <i>B</i> ∪ <i>C</i>), and why is the triple overlap added back?',
    a: '<i>n</i>(<i>A</i> ∪ <i>B</i> ∪ <i>C</i>) = <i>n</i>(<i>A</i>) + <i>n</i>(<i>B</i>) + <i>n</i>(<i>C</i>) − <i>n</i>(<i>A</i> ∩ <i>B</i>) − <i>n</i>(<i>B</i> ∩ <i>C</i>) − <i>n</i>(<i>C</i> ∩ <i>A</i>) + <i>n</i>(<i>A</i> ∩ <i>B</i> ∩ <i>C</i>): include, exclude, include. The centre lies in all three single sets, added 3 times, and in all three pairwise overlaps, subtracted 3 times, so before the last term it is counted 3 − 3 = 0 times; adding it once restores it. The rule is the two-set rule applied repeatedly: to <i>A</i> and <i>B</i> ∪ <i>C</i>, to <i>B</i> and <i>C</i>, and to <i>A</i> ∩ <i>B</i> and <i>A</i> ∩ <i>C</i>, using <i>A</i> ∩ (<i>B</i> ∪ <i>C</i>) = (<i>A</i> ∩ <i>B</i>) ∪ (<i>A</i> ∩ <i>C</i>). In a survey of 200 with 100, 80 and 65 in three sports, pairwise 40, 30 and 35, and 20 in all three: 245 − 105 + 20 = 160 play at least one, 200 − 160 = 40 none',
    why: 'Exactly one = ∑ <i>n</i>(<i>A</i>) − 2∑ <i>n</i>(<i>A</i> ∩ <i>B</i>) + 3<i>n</i>(<i>A</i> ∩ <i>B</i> ∩ <i>C</i>), where ∑ <i>n</i>(<i>A</i>) is the three sizes and ∑ <i>n</i>(<i>A</i> ∩ <i>B</i>) the three pairwise overlaps.',
    say: 'Include, exclude, include: the signs for one, two, three sets.',
  },
  // pp. 50, 52, 54–56
  {
    topic: 3,
    kind: 'mixup',
    q: 'Exactly two or at least two of three sets: which formula is which?',
    a: 'Summing the three pairwise overlaps counts each “exactly two” element once and each “all three” element three times. Exactly two wants the centre counted zero times: ∑ <i>n</i>(<i>A</i> ∩ <i>B</i>) − 3<i>n</i>(<i>A</i> ∩ <i>B</i> ∩ <i>C</i>). At least two wants it once: ∑ <i>n</i>(<i>A</i> ∩ <i>B</i>) − 2<i>n</i>(<i>A</i> ∩ <i>B</i> ∩ <i>C</i>). The two differ by exactly one copy of the centre. With pairwise overlaps 100, 60 and 70 and 40 in all three: exactly two = 230 − 120 = 110, at least two = 230 − 80 = 150',
    why: 'Subtracting the centre only once, ∑ <i>n</i>(<i>A</i> ∩ <i>B</i>) − <i>n</i>(<i>A</i> ∩ <i>B</i> ∩ <i>C</i>), still counts it twice over.',
    say: null,
  },
  // pp. 50, 55–56
  {
    topic: 3,
    kind: 'mistake',
    q: 'With <i>n</i>(<i>A</i>) = 40 and <i>n</i>(<i>A</i> ∩ <i>B</i>) = 15, how many are in “<i>A</i> only”?',
    a: '25, not 40: “only” strips out every overlap, so “<i>A</i> only” = <i>n</i>(<i>A</i>) − <i>n</i>(<i>A</i> ∩ <i>B</i>) = 40 − 15, while plain “<i>A</i>” keeps the overlaps. 40 reports all of <i>A</i>, 55 adds instead of subtracting, and 15 is the overlap itself. Confusing “only <i>A</i>” with “<i>A</i>” is the single most common word-problem error: underline “only”, “exactly”, “at least” and “neither” before computing',
    why: '“Only” strips out every overlap: in three sets, “only <i>A</i>” = <i>n</i>(<i>A</i>) minus its two pairwise regions and the centre.',
    say: null,
  },
  // pp. 52–53, 56
  {
    topic: 3,
    kind: 'shortcut',
    q: 'Of 200 students, 100 play cricket, 80 football, 65 hockey; 40 cricket and football, 30 football and hockey, 35 cricket and hockey, 20 all three. How many play exactly two? The fast way?',
    a: 'Draw the Venn, fill the centre first, then work outward. Centre 20. Only cricket and football 40 − 20 = 20, only football and hockey 30 − 20 = 10, only cricket and hockey 35 − 20 = 15: exactly two = 45, as 105 − 3(20) gives. Then only cricket 100 − 20 − 15 − 20 = 45, only football 80 − 20 − 10 − 20 = 30, only hockey 65 − 10 − 15 − 20 = 20. The seven regions total 160, so 40 play none. Every “only”, “exactly” and “at least” answer reads straight off the labelled regions, and a negative region exposes bad data',
    why: 'When the centre is the unknown, use the partition identities, union = <i>E</i><sub>1</sub> + <i>E</i><sub>2</sub> + <i>E</i><sub>3</sub> and ∑ <i>n</i>(<i>A</i>) = <i>E</i><sub>1</sub> + 2<i>E</i><sub>2</sub> + 3<i>E</i><sub>3</sub>: with union 150, ∑ <i>n</i>(<i>A</i>) = 225 and <i>E</i><sub>2</sub> = 25, subtracting gives 25 + 2<i>E</i><sub>3</sub> = 75, so <i>E</i><sub>3</sub> = 25.',
    say: null,
  },

  // ── Topic 05 · Indexed Families of Sets, Generalised Laws, and Double Counting ──
  // pp. 73–75, 77, 84, 86
  {
    topic: 4,
    kind: 'remember',
    q: 'What do the union and the intersection of a family {<i>A</i><sub><i>i</i></sub>}<sub><i>i</i>∈<i>I</i></sub> mean, and what does complementing them give?',
    a: 'An indexed family has one set for each index in the index set <i>I</i>, finite, {1, …, <i>m</i>}, or infinite, ℕ. ⋃<sub><i>i</i>∈<i>I</i></sub> <i>A</i><sub><i>i</i></sub> is the elements in at least one member, ⋂<sub><i>i</i>∈<i>I</i></sub> <i>A</i><sub><i>i</i></sub> those in every member: ∪ and ∩ applied along a list, as ∑ is + along a list. For every index <i>j</i>, ⋂<sub><i>i</i></sub> <i>A</i><sub><i>i</i></sub> ⊆ <i>A</i><sub><i>j</i></sub> ⊆ ⋃<sub><i>i</i></sub> <i>A</i><sub><i>i</i></sub>, so an answer that breaks this sandwich is wrong. Generalised De Morgan, for any index set: (⋃<sub><i>i</i>∈<i>I</i></sub> <i>A</i><sub><i>i</i></sub>)′ = ⋂<sub><i>i</i>∈<i>I</i></sub> <i>A</i>′<sub><i>i</i></sub> and (⋂<sub><i>i</i>∈<i>I</i></sub> <i>A</i><sub><i>i</i></sub>)′ = ⋃<sub><i>i</i>∈<i>I</i></sub> <i>A</i>′<sub><i>i</i></sub>, since the negation of “in at least one” is “in none”, that is, in every complement. Element-chasing with quantifiers proves it; you cannot shade infinitely many circles',
    why: 'A monotone family collapses at once: a decreasing family has union <i>A</i><sub>1</sub>, an increasing one intersection <i>A</i><sub>1</sub>, so ⋂<sub><i>n</i>=1</sub><sup>∞</sup> (−<i>n</i>, <i>n</i>) = (−1, 1).',
    say: 'Big cup = at least one; big cap = every one.',
  },
  // pp. 76, 79, 84, 86
  {
    topic: 4,
    kind: 'remember',
    q: 'What is inclusion–exclusion for <i>m</i> sets, and why does each element end up counted once?',
    a: 'Add all singles, subtract all pairs, add all triples, and so on: the <i>r</i>-fold block sums over all <sup><i>m</i></sup>C<sub><i>r</i></sub> intersections of exactly <i>r</i> sets and carries the sign (−1)<sup><i>r</i>−1</sup>, ending with (−1)<sup><i>m</i>−1</sup> <i>n</i>(<i>A</i><sub>1</sub> ∩ ⋯ ∩ <i>A</i><sub><i>m</i></sub>). For four sets: ∑ <i>n</i>(<i>A</i>) − ∑ <i>n</i>(<i>A</i> ∩ <i>B</i>) + ∑ <i>n</i>(<i>A</i> ∩ <i>B</i> ∩ <i>C</i>) − <i>n</i>(<i>A</i> ∩ <i>B</i> ∩ <i>C</i> ∩ <i>D</i>), over 4 singles, 6 pairs and 4 triples, the last term subtracted. An element in exactly <i>d</i> ≥ 1 of the sets lies in <sup><i>d</i></sup>C<sub><i>r</i></sub> of the <i>r</i>-fold intersections, so it contributes ∑<sub><i>r</i>=1</sub><sup><i>d</i></sup> (−1)<sup><i>r</i>−1</sup> <sup><i>d</i></sup>C<sub><i>r</i></sub> = 1 − (1 − 1)<sup><i>d</i></sup> = 1',
    why: 'With sizes 25, 30, 35 and 40, every pair 10, every triple 4 and all four 2: 130 − 60 + 16 − 2 = 84.',
    say: null,
  },
  // pp. 74, 79–81, 84, 86
  {
    topic: 4,
    kind: 'mixup',
    q: '⋂<sub><i>n</i>=1</sub><sup>∞</sup> (0, <frac><num>1</num><den><i>n</i></den></frac>) or ⋂<sub><i>n</i>=1</sub><sup>∞</sup> [0, <frac><num>1</num><den><i>n</i></den></frac>]: which is ∅ and which {0}?',
    a: 'The open family gives ∅, the closed one {0}. Both shrink towards 0, but an infinite intersection is not a limit: the only question is whether 0 lies in every member. (0, <frac><num>1</num><den><i>n</i></den></frac>) excludes 0 at every index, and any <i>x</i> > 0 fails once <frac><num>1</num><den><i>n</i></den></frac> < <i>x</i>, so nothing survives; [0, <frac><num>1</num><den><i>n</i></den></frac>] contains 0 at every index, so 0 alone survives. The point the intervals close on stays exactly when every member contains it. Where it is every member’s endpoint, a square bracket keeps it and a round one drops it; where every member holds it inside, it stays whatever the brackets: ⋂<sub><i>n</i>=1</sub><sup>∞</sup> (−<frac><num>1</num><den><i>n</i></den></frac>, <frac><num>1</num><den><i>n</i></den></frac>) = {0}, and ⋂<sub><i>n</i>=1</sub><sup>∞</sup> [2 − <frac><num>1</num><den><i>n</i></den></frac>, 5 + <frac><num>1</num><den><i>n</i></den></frac>] = [2, 5]',
    why: '⋂<sub><i>n</i>=1</sub><sup>∞</sup> [3, 3 + <frac><num>2</num><den><i>n</i></den></frac>) = {3}: the square bracket keeps 3 at every index, and any <i>x</i> > 3 fails once <frac><num>2</num><den><i>n</i></den></frac> < <i>x</i> − 3.',
    say: 'Shrinking is not arriving: a family closing on a point need not contain it; read the bracket.',
  },
  // pp. 74–75, 80, 84–85
  {
    topic: 4,
    kind: 'mistake',
    q: 'With <i>A</i><sub><i>n</i></sub> the natural multiples of <i>n</i>, is <i>A</i><sub>4</sub> ∩ <i>A</i><sub>6</sub> = <i>A</i><sub>24</sub>?',
    a: 'No: <i>A</i><sub>12</sub>. The common multiples of two numbers are exactly the multiples of their lcm, so <i>A</i><sub><i>m</i></sub> ∩ <i>A</i><sub><i>n</i></sub> = <i>A</i><sub>lcm(<i>m</i>,<i>n</i>)</sub>, and lcm(4, 6) = 12. The product works only for coprime indices, as in <i>A</i><sub>2</sub> ∩ <i>A</i><sub>3</sub> = <i>A</i><sub>6</sub>; 24 fails a one-second check, since 12 is a common multiple and 12 ∉ <i>A</i><sub>24</sub>. And <i>A</i><sub><i>m</i></sub> ⊆ <i>A</i><sub><i>n</i></sub> exactly when <i>n</i> divides <i>m</i>, so <i>A</i><sub>3</sub> ∪ <i>A</i><sub>6</sub> = <i>A</i><sub>3</sub>',
    why: 'Likewise <i>A</i><sub>2</sub> ∩ <i>A</i><sub>3</sub> ∩ <i>A</i><sub>5</sub> = <i>A</i><sub>30</sub>, and ⋂<sub><i>i</i>=1</sub><sup>6</sup> <i>A</i><sub><i>i</i></sub> = <i>A</i><sub>60</sub>, since lcm(1, 2, 3, 4, 5, 6) = 60.',
    say: null,
  },
  // pp. 76–77, 79, 83–84, 86
  {
    topic: 4,
    kind: 'shortcut',
    q: 'Thirty sets of 5 elements have union <i>S</i>, every element of <i>S</i> in exactly 10 of them; <i>n</i> sets of 3 elements have the same union, every element in exactly 9. Find <i>n</i>. The fast way?',
    a: 'The moment a problem says “<i>m</i> sets, each with <i>p</i> elements” and “each element in exactly <i>k</i> of them”, write <i>mp</i> = <i>k</i> <i>n</i>(<i>S</i>): it counts the incidences, the pairs (<i>x</i>, <i>i</i>) with <i>x</i> ∈ <i>A</i><sub><i>i</i></sub>, once by sets and once by elements. So <i>n</i>(<i>S</i>) = <frac><num><i>mp</i></num><den><i>k</i></den></frac> = <frac><num>30 × 5</num><den>10</den></frac> = 15. The shared union carries across to the second family: 3<i>n</i> = 9 × 15 = 135, so <i>n</i> = 45. Check: <i>n</i>(<i>S</i>) is a positive integer at least as large as each set, 15 ≥ 5 and 15 ≥ 3',
    why: 'Twenty sets of 3 elements, every element in exactly 5: 20 × 3 = 60 incidences, so <i>n</i>(<i>S</i>) = <frac><num>60</num><den>5</den></frac> = 12; stopping at 60 forgets to divide by the multiplicity.',
    say: null,
  },

  // ── Additional A · Is this set finite or infinite? ──
  // pp. 58–59
  {
    topic: 5,
    kind: 'remember',
    q: 'How do you decide whether a set is empty, finite or infinite?',
    a: 'Read the universe first, ℕ, 𝕎, ℤ, ℚ or ℝ: the verdict changes with it. If no element exists the set is empty, and ∅ is finite, <i>n</i>(∅) = 0: empty is a special case of finite, never an alternative to it. In ℕ, 𝕎 or ℤ, a condition bounded on both sides gives a finite set, and you can usually state <i>n</i>; a set whose members run on without bound in at least one direction is infinite. In ℚ or ℝ any stretch containing two distinct points contains infinitely many, the mean of two members lying strictly between them, so every non-degenerate interval is infinite, however short. A non-zero polynomial of degree <i>d</i> has at most <i>d</i> roots, so its solution set is finite in any universe',
    why: 'The divisors of a fixed natural number <i>k</i> form a finite set, each being at most <i>k</i>; its multiples, <i>k</i>, 2<i>k</i>, 3<i>k</i>, …, an infinite one.',
    say: null,
  },
  // pp. 58–59
  {
    topic: 5,
    kind: 'remember',
    q: 'Empty, finite or infinite: {<i>x</i> ∈ ℤ ∶ <i>x</i><sup>2</sup> ≤ 10000}, {<i>x</i> ∈ ℤ ∶ <i>x</i><sup>2</sup> ≥ 10000} and {<i>x</i> ∈ ℝ ∶ <i>x</i><sup>2</sup> ≤ 10000}?',
    a: 'The first is finite: −100 ≤ <i>x</i> ≤ 100 holds 100 negatives, 0 and 100 positives, <i>n</i> = 201. The second, <i>x</i> ≤ −100 or <i>x</i> ≥ 100, is unbounded both ways: infinite. The third is the interval [−100, 100]: infinite. One inequality, three verdicts: the universe and the direction of the inequality do all the work. Likewise {<i>x</i> ∈ ℕ ∶ <i>x</i> < 100} is finite, <i>n</i> = 99, but {<i>x</i> ∈ ℤ ∶ <i>x</i> < 100} runs away to the left and is infinite',
    why: '{<i>x</i> ∈ ℕ ∶ <i>x</i> divides 1024} = {2<sup>0</sup>, 2<sup>1</sup>, …, 2<sup>10</sup>} has <i>n</i> = 11; {<i>x</i> ∈ ℝ ∶ <i>x</i><sup>2</sup> + 4 = 0} is empty, hence finite with <i>n</i> = 0.',
    say: null,
  },

  // ── Additional B · Subsets of a prescribed size ──
  // pp. 59–60
  {
    topic: 6,
    kind: 'remember',
    q: 'How many subsets of an <i>n</i>-element set have exactly <i>r</i> elements, and how do you force an element in or out?',
    a: '<sup><i>n</i></sup>C<sub><i>r</i></sub> = <frac><num><i>n</i>!</num><den><i>r</i>!(<i>n</i> − <i>r</i>)!</den></frac> for 0 ≤ <i>r</i> ≤ <i>n</i>, and 0 if <i>r</i> < 0 or <i>r</i> > <i>n</i>. Symmetry: <sup><i>n</i></sup>C<sub><i>r</i></sub> = <sup><i>n</i></sup>C<sub><i>n</i>−<i>r</i></sub>, since naming who is in names who is out. Forcing an element in spends one slot on it, <sup><i>n</i>−1</sup>C<sub><i>r</i>−1</sub>; forcing it out leaves <sup><i>n</i>−1</sup>C<sub><i>r</i></sub>. Taking <i>j</i> from a pool of <i>p</i> and <i>r</i> − <i>j</i> from a disjoint pool of <i>q</i>, multiply: <sup><i>p</i></sup>C<sub><i>j</i></sub> · <sup><i>q</i></sup>C<sub><i>r</i>−<i>j</i></sub>. For <i>n</i> ≥ 1 half of the 2<sup><i>n</i></sup> subsets have even size and half odd, 2<sup><i>n</i>−1</sup> each; for <i>n</i> = 0 the only subset, ∅, has even size',
    why: 'The 5-element subsets of {1, …, 9} with exactly 3 odd numbers take 3 of the 5 odds and 2 of the 4 evens: <sup>5</sup>C<sub>3</sub> · <sup>4</sup>C<sub>2</sub> = 10 × 6 = 60; adding instead of multiplying is the standard slip.',
    say: null,
  },
  // p. 60
  {
    topic: 6,
    kind: 'remember',
    q: 'For <i>A</i> = {1, 2, …, 7}, how many subsets have exactly 3 elements, at most 2, exactly 3 including 1, and exactly 3 excluding 1?',
    a: '<sup>7</sup>C<sub>3</sub> = <frac><num>7 · 6 · 5</num><den>3 · 2 · 1</den></frac> = 35. At most 2 means size 0, 1 or 2: 1 + 7 + 21 = 29. Including 1, choose the other 2 from {2, …, 7}: <sup>6</sup>C<sub>2</sub> = 15. Excluding 1, choose all 3 from {2, …, 7}: <sup>6</sup>C<sub>3</sub> = 20. Every 3-element subset contains 1 or does not, and 15 + 20 = 35 checks the first answer',
    why: 'The subsets of {1, …, 6} with at least 4 elements number <sup>6</sup>C<sub>4</sub> + <sup>6</sup>C<sub>5</sub> + <sup>6</sup>C<sub>6</sub> = 15 + 6 + 1 = 22; those of {1, …, 7} with an odd number of elements, 2<sup>7−1</sup> = 64.',
    say: null,
  },

  // ── Additional C · The iterated power set ──
  // pp. 61–62
  {
    topic: 7,
    kind: 'remember',
    q: 'How many elements has <i>P</i>(<i>P</i>(<i>A</i>)), and what are they for <i>A</i> = {<i>a</i>}?',
    a: 'Apply <i>n</i>[<i>P</i>(<i>X</i>)] = 2<sup><i>n</i>(<i>X</i>)</sup> from the inside outward: with <i>n</i>(<i>A</i>) = <i>n</i>, <i>n</i>[<i>P</i>(<i>P</i>(<i>A</i>))] = 2<sup>2<sup><i>n</i></sup></sup> and <i>n</i>[<i>P</i>(<i>P</i>(<i>P</i>(<i>A</i>)))] = 2<sup>2<sup>2<sup><i>n</i></sup></sup></sup>, a tower evaluated top down, 2<sup><i>n</i></sup> first. For <i>A</i> = {<i>a</i>}: <i>P</i>(<i>A</i>) = {∅, {<i>a</i>}} and <i>P</i>(<i>P</i>(<i>A</i>)) = {∅, {∅}, {{<i>a</i>}}, {∅, {<i>a</i>}}}, 4 elements, as 2<sup>2<sup>1</sup></sup> = 4 predicts. Its members are sets of subsets of <i>A</i>: ∅, the empty collection, is a different member from {∅}, the collection holding the empty set',
    why: 'For every set <i>A</i>, ∅ ∈ <i>P</i>(<i>P</i>(<i>A</i>)), since ∅ is a subset of <i>P</i>(<i>A</i>); and <i>P</i>(<i>P</i>(∅)) = {∅, {∅}}, 2<sup>2<sup>0</sup></sup> = 2 elements.',
    say: null,
  },
  // pp. 61–62
  {
    topic: 7,
    kind: 'mistake',
    q: 'If <i>n</i>[<i>P</i>(<i>P</i>(<i>A</i>))] = 256, is <i>n</i>(<i>A</i>) = 8?',
    a: 'No: 8 is <i>n</i>[<i>P</i>(<i>A</i>)], one level too shallow. Peel one exponent at a time: 256 = 2<sup>8</sup>, so 2<sup>2<sup><i>n</i>(<i>A</i>)</sup></sup> = 2<sup>8</sup> gives 2<sup><i>n</i>(<i>A</i>)</sup> = 8 = 2<sup>3</sup>, and <i>n</i>(<i>A</i>) = 3. One layer up, <i>n</i>[<i>P</i>(<i>P</i>(<i>P</i>(<i>A</i>)))] = 2<sup>2<sup>8</sup></sup> = 2<sup>256</sup>. Count the layers of <i>P</i> in the question before you equate anything',
    why: 'From <i>n</i>[<i>P</i>(<i>P</i>(<i>A</i>))] = 16 = 2<sup>4</sup>: 2<sup><i>n</i></sup> = 4, so <i>n</i>(<i>A</i>) = 2.',
    say: null,
  },

  // ── Additional D · Unbounded (infinite) intervals ──
  // pp. 62–63
  {
    topic: 8,
    kind: 'remember',
    q: 'How are unbounded intervals written, and which bracket goes beside ∞?',
    a: '(<i>a</i>, ∞) = {<i>x</i> ∈ ℝ ∶ <i>x</i> > <i>a</i>}, [<i>a</i>, ∞) = {<i>x</i> ∈ ℝ ∶ <i>x</i> ≥ <i>a</i>}, (−∞, <i>a</i>) = {<i>x</i> ∈ ℝ ∶ <i>x</i> < <i>a</i>}, (−∞, <i>a</i>] = {<i>x</i> ∈ ℝ ∶ <i>x</i> ≤ <i>a</i>}, (−∞, ∞) = ℝ. ∞ and −∞ are not real numbers but direction markers, “no bound on that side”, so the bracket beside them is always round: [3, ∞] is wrong every time. Every unbounded interval is infinite, and “length = <i>b</i> − <i>a</i>” does not apply. Complements flip the bracket as they cross the endpoint: with <i>U</i> = ℝ, ((−∞, <i>a</i>))′ = [<i>a</i>, ∞) and ([<i>a</i>, ∞))′ = (−∞, <i>a</i>), so <i>a</i> lands on exactly one side',
    why: '(2, ∞) − [5, ∞) = (2, 5), and [−2, ∞) ∩ (−∞, 5) = [−2, 5).',
    say: null,
  },
  // p. 63
  {
    topic: 8,
    kind: 'remember',
    q: 'Over ℝ, what are (−∞, 3] ∩ (0, ∞), (−∞, 3] ∪ (0, ∞) and (−∞, 3] − (0, ∞)?',
    a: 'Intersection: <i>x</i> ≤ 3 and <i>x</i> > 0, so (0, 3], round at 0 because (0, ∞) excludes it and square at 3 because (−∞, 3] includes it. Union: every real <i>x</i> ≤ 3 is in the first set and every <i>x</i> > 3 in the second, so ℝ. Difference: <i>x</i> ≤ 3 and not <i>x</i> > 0, that is <i>x</i> ≤ 0, so (−∞, 0]. Likewise {<i>x</i> ∈ ℝ ∶ <i>x</i><sup>2</sup> ≥ 9} = (−∞, −3] ∪ [3, ∞), both brackets square, and its complement is (−3, 3)',
    why: 'De Morgan agrees: ((−∞, −3])′ ∩ ([3, ∞))′ = (−3, ∞) ∩ (−∞, 3) = (−3, 3).',
    say: null,
  },

  // ── Additional E · Counting ordered pairs of subsets ──
  // pp. 63–64
  {
    topic: 9,
    kind: 'remember',
    q: 'For <i>n</i>(<i>S</i>) = <i>n</i>, how many ordered pairs (<i>A</i>, <i>B</i>) of subsets have <i>A</i> ⊆ <i>B</i>, <i>A</i> ∩ <i>B</i> = ∅ or <i>A</i> ∪ <i>B</i> = <i>S</i>?',
    a: '3<sup><i>n</i></sup> each. Every element independently takes a joint status: in both, in <i>A</i> only, in <i>B</i> only, or in neither. <i>A</i> ⊆ <i>B</i> bans “<i>A</i> only”, <i>A</i> ∩ <i>B</i> = ∅ bans “both”, <i>A</i> ∪ <i>B</i> = <i>S</i> bans “neither”: three statuses left per element. <i>A</i> ∩ <i>B</i> = ∅ and <i>A</i> ∪ <i>B</i> = <i>S</i> together leave two, 2<sup><i>n</i></sup>. A chain <i>A</i><sub>1</sub> ⊆ ⋯ ⊆ <i>A</i><sub><i>k</i></sub> ⊆ <i>S</i> gives (<i>k</i> + 1)<sup><i>n</i></sup>, each element choosing where it first enters, or never; <i>A</i> ⊊ <i>B</i> gives 3<sup><i>n</i></sup> − 2<sup><i>n</i></sup>, removing the 2<sup><i>n</i></sup> pairs with <i>A</i> = <i>B</i>',
    why: 'For <i>S</i> = {1, 2, 3, 4}, <i>A</i> ⊆ <i>B</i> ⊆ <i>S</i> gives 3<sup>4</sup> = 81; counting by the size of <i>B</i>, 1 + 8 + 24 + 32 + 16 = 81, the binomial sum (1 + 2)<sup>4</sup>.',
    say: null,
  },
  // pp. 64–65
  {
    topic: 9,
    kind: 'remember',
    q: 'With <i>n</i>(<i>S</i>) = 5, how many ordered pairs have <i>A</i> ∩ <i>B</i> = ∅ and <i>A</i> ∪ <i>B</i> ≠ <i>S</i>?',
    a: 'Count the easy superset and subtract. Pairs with <i>A</i> ∩ <i>B</i> = ∅: each element in <i>A</i> only, <i>B</i> only or neither, 3<sup>5</sup> = 243. Those with <i>A</i> ∪ <i>B</i> = <i>S</i> as well leave no element in neither, 2<sup>5</sup> = 32. So 243 − 32 = 211. In the same way, disjoint pairs with both <i>A</i> and <i>B</i> non-empty number 3<sup><i>n</i></sup> − 2 · 2<sup><i>n</i></sup> + 1, removing the pairs with <i>A</i> = ∅ and those with <i>B</i> = ∅ and restoring the one counted twice: 27 − 16 + 1 = 12 for <i>n</i> = 3',
    why: 'Unordered pairs {<i>A</i>, <i>B</i>} with <i>A</i> ∪ <i>B</i> = <i>S</i> number <frac><num>1</num><den>2</den></frac>(3<sup><i>n</i></sup> + 1), since only (<i>S</i>, <i>S</i>) has <i>A</i> = <i>B</i>: 5 for <i>n</i> = 2.',
    say: null,
  },

  // ── Additional F · Three-circle Venn shading and visual proof ──
  // p. 65
  {
    topic: 10,
    kind: 'remember',
    q: 'How do three circles turn a set identity into a comparison of region lists?',
    a: 'Three circles inside <i>U</i> make eight regions: <i>R</i><sub>1</sub>, <i>R</i><sub>2</sub>, <i>R</i><sub>3</sub> only <i>A</i>, only <i>B</i>, only <i>C</i>; <i>R</i><sub>4</sub> <i>A</i> and <i>B</i> but not <i>C</i>, <i>R</i><sub>5</sub> <i>B</i> and <i>C</i> but not <i>A</i>, <i>R</i><sub>6</sub> <i>A</i> and <i>C</i> but not <i>B</i>; <i>R</i><sub>7</sub> all three; <i>R</i><sub>8</sub> outside all three. So <i>A</i> = {<i>R</i><sub>1</sub>, <i>R</i><sub>4</sub>, <i>R</i><sub>6</sub>, <i>R</i><sub>7</sub>}, <i>B</i> = {<i>R</i><sub>2</sub>, <i>R</i><sub>4</sub>, <i>R</i><sub>5</sub>, <i>R</i><sub>7</sub>}, <i>C</i> = {<i>R</i><sub>3</sub>, <i>R</i><sub>5</sub>, <i>R</i><sub>6</sub>, <i>R</i><sub>7</sub>}. Convert each set to its list; union merges, intersection keeps the common entries, difference deletes, complement returns the regions not listed. Every element lies in exactly one region and membership of any expression depends only on the region, so two expressions are equal if and only if their region lists are identical: a proof, not just a picture',
    why: '<i>A</i> △ <i>B</i> = {<i>R</i><sub>1</sub>, <i>R</i><sub>2</sub>, <i>R</i><sub>5</sub>, <i>R</i><sub>6</sub>}, the regions in exactly one of <i>A</i> and <i>B</i>, whatever <i>C</i> does; (<i>A</i> ∩ <i>B</i> ∩ <i>C</i>)′ is every region except <i>R</i><sub>7</sub>.',
    say: null,
  },
  // pp. 65–67
  {
    topic: 10,
    kind: 'remember',
    q: 'By region lists, is <i>A</i> ∩ (<i>B</i> ∪ <i>C</i>) = (<i>A</i> ∩ <i>B</i>) ∪ (<i>A</i> ∩ <i>C</i>), and is <i>A</i> − (<i>B</i> ∪ <i>C</i>) = (<i>A</i> − <i>B</i>) ∩ (<i>A</i> − <i>C</i>)?',
    a: 'Yes, both. <i>B</i> ∪ <i>C</i> = {<i>R</i><sub>2</sub>, <i>R</i><sub>3</sub>, <i>R</i><sub>4</sub>, <i>R</i><sub>5</sub>, <i>R</i><sub>6</sub>, <i>R</i><sub>7</sub>}, and intersecting with <i>A</i> leaves {<i>R</i><sub>4</sub>, <i>R</i><sub>6</sub>, <i>R</i><sub>7</sub>}; <i>A</i> ∩ <i>B</i> = {<i>R</i><sub>4</sub>, <i>R</i><sub>7</sub>} and <i>A</i> ∩ <i>C</i> = {<i>R</i><sub>6</sub>, <i>R</i><sub>7</sub>} unite to the same list, the two petals where <i>A</i> meets one other circle plus the centre. Deleting <i>B</i> ∪ <i>C</i> from <i>A</i> leaves only <i>R</i><sub>1</sub>; <i>A</i> − <i>B</i> = {<i>R</i><sub>1</sub>, <i>R</i><sub>6</sub>} and <i>A</i> − <i>C</i> = {<i>R</i><sub>1</sub>, <i>R</i><sub>4</sub>} share only <i>R</i><sub>1</sub>, the crescent of <i>A</i> untouched by either other circle',
    why: '<i>A</i> ∪ (<i>B</i> ∩ <i>C</i>) and (<i>A</i> ∪ <i>B</i>) ∩ (<i>A</i> ∪ <i>C</i>) both give {<i>R</i><sub>1</sub>, <i>R</i><sub>4</sub>, <i>R</i><sub>5</sub>, <i>R</i><sub>6</sub>, <i>R</i><sub>7</sub>}: the second distributive law.',
    say: null,
  },

  // ── Additional G · Operations on the standard number systems ──
  // p. 69
  {
    topic: 11,
    kind: 'remember',
    q: 'With <i>U</i> = ℝ, what are ℝ − ℚ, ℚ ∩ 𝕋, ℚ ∪ 𝕋, ℚ′, 𝕎 − ℕ, ℤ − 𝕎 and ℤ − ℕ?',
    a: 'The rule: whenever <i>A</i> ⊆ <i>B</i>, <i>A</i> ∩ <i>B</i> = <i>A</i>, <i>A</i> ∪ <i>B</i> = <i>B</i>, <i>A</i> − <i>B</i> = ∅, and <i>B</i> − <i>A</i> is the extra elements of <i>B</i>, the only computation that needs thought. ℝ − ℚ = 𝕋 and ℝ − 𝕋 = ℚ; ℚ ∩ 𝕋 = ∅ and ℚ ∪ 𝕋 = ℝ, so ℚ′ = 𝕋 and 𝕋′ = ℚ. 𝕎 − ℕ = {0}, a singleton, not ∅; ℤ − 𝕎 = {−1, −2, −3, …}; ℤ − ℕ = {0, −1, −2, …}; ℚ − ℤ is the non-integer rationals, such as <frac><num>3</num><den>2</den></frac> and −<frac><num>7</num><den>4</den></frac>; ℕ ∩ 𝕋 = ∅, every natural number <i>k</i> being <frac><num><i>k</i></num><den>1</den></frac>, a rational',
    why: '(ℤ ∪ 𝕋)′ = ℤ′ ∩ 𝕋′ = ℤ′ ∩ ℚ = ℚ − ℤ: the rationals that are not integers.',
    say: null,
  },
  // pp. 69–70
  {
    topic: 11,
    kind: 'mistake',
    q: 'Is the sum or the product of two irrational numbers always irrational?',
    a: 'No: 𝕋 is not closed under addition or multiplication. √2 · √2 = 2 ∈ ℚ, and (1 + √2) + (1 − √2) = 2 ∈ ℚ. Test each number on its own merits, and a radical sign proves nothing: √9 = 3, a natural number, hence rational, so √9 ∉ 𝕋',
    why: '𝕎 ∪ 𝕋 is no single named system: it holds every irrational and every whole number, but no negative integer and no non-integer rational.',
    say: null,
  },

  // ── Additional H · Bounds on an unknown overlap ──
  // pp. 70–73
  {
    topic: 12,
    kind: 'remember',
    q: 'With <i>n</i>(<i>U</i>) = <i>N</i>, <i>n</i>(<i>A</i>) = <i>a</i> and <i>n</i>(<i>B</i>) = <i>b</i>, between which values must <i>n</i>(<i>A</i> ∩ <i>B</i>) lie?',
    a: 'max(0, <i>a</i> + <i>b</i> − <i>N</i>) ≤ <i>n</i>(<i>A</i> ∩ <i>B</i>) ≤ min(<i>a</i>, <i>b</i>), for <i>a</i> ≤ <i>N</i> and <i>b</i> ≤ <i>N</i>. The upper bound because <i>A</i> ∩ <i>B</i> lies inside both sets; the lower because the union, <i>a</i> + <i>b</i> − <i>x</i>, fits inside <i>U</i>, and a count is never negative. Both bounds are attained: nest the smaller set inside the larger for the maximum, push the two as far apart as <i>U</i> allows for the minimum. In a class of 100 with 70 liking tea and 80 coffee, 150 seats are claimed by 100 students, so 50 ≤ <i>n</i>(both) ≤ 70. The union mirrors it: max(<i>a</i>, <i>b</i>) ≤ <i>n</i>(<i>A</i> ∪ <i>B</i>) ≤ min(<i>N</i>, <i>a</i> + <i>b</i>), the largest overlap giving the smallest union',
    why: 'For percentages take <i>N</i> = 100: with 63% drinking tea and 76% coffee, 63 + 76 − 100 = 39 ≤ <i>x</i> ≤ 63.',
    say: null,
  },
  // pp. 71–73
  {
    topic: 12,
    kind: 'remember',
    q: 'In a survey of 100, 60 like dessert <i>A</i>, 70 like <i>B</i> and 80 like <i>C</i>: how few and how many can like all three?',
    a: 'At most min(60, 70, 80) = 60, by nesting <i>A</i> ⊆ <i>B</i> ⊆ <i>C</i>. For the minimum switch to complements: <i>n</i>(<i>A</i>′) = 40, <i>n</i>(<i>B</i>′) = 30, <i>n</i>(<i>C</i>′) = 20, and anyone outside the triple intersection is in at least one complement, so at most 40 + 30 + 20 = 90 are outside it and at least 10 inside: 10 ≤ <i>x</i> ≤ 60. In general max(0, <i>n</i>(<i>A</i>) + <i>n</i>(<i>B</i>) + <i>n</i>(<i>C</i>) − 2<i>N</i>) ≤ <i>n</i>(<i>A</i> ∩ <i>B</i> ∩ <i>C</i>) ≤ min(<i>n</i>(<i>A</i>), <i>n</i>(<i>B</i>), <i>n</i>(<i>C</i>)), and for <i>m</i> sets <i>n</i>(<i>A</i><sub>1</sub> ∩ ⋯ ∩ <i>A</i><sub><i>m</i></sub>) ≥ ∑<sub><i>i</i>=1</sub><sup><i>m</i></sup> <i>n</i>(<i>A</i><sub><i>i</i></sub>) − (<i>m</i> − 1)<i>N</i>, using only that a union is at most the sum of its parts',
    why: 'With <i>N</i> = 200 and sizes 120, 140 and 160: 420 − 400 = 20 ≤ <i>n</i>(<i>A</i> ∩ <i>B</i> ∩ <i>C</i>) ≤ 120.',
    say: null,
  },

  // ── Additional I · Sets whose elements are sets ──
  // pp. 87–89
  {
    topic: 13,
    kind: 'remember',
    q: 'For <i>A</i> = {1, {2}, {3, 4}, ∅}, what is <i>n</i>(<i>A</i>), and which of 2 ∈ <i>A</i>, {2} ∈ <i>A</i>, {2} ⊆ <i>A</i>, {3, 4} ⊆ <i>A</i> and ∅ ∈ <i>A</i> hold?',
    a: 'An entry is one object, however complicated it looks: four entries, so <i>n</i>(<i>A</i>) = 4 and <i>n</i>[<i>P</i>(<i>A</i>)] = 16. <i>X</i> ∈ <i>A</i> asks whether <i>X</i> appears, exactly as written, as an entry; <i>X</i> ⊆ <i>A</i> asks whether every element of <i>X</i> is an entry. So 2 ∉ <i>A</i>, 2 being inside the entry {2}; {2} ∈ <i>A</i>; {2} ⊈ <i>A</i>, which would need 2 ∈ <i>A</i>; but {{2}} ⊆ <i>A</i>; and {3, 4} ∈ <i>A</i> while {3, 4} ⊈ <i>A</i>. ∅ ⊆ <i>A</i> always, but ∅ ∈ <i>A</i> only when ∅ is listed, as it is here',
    why: 'For <i>B</i> = {1, 2}, ∅ ⊆ <i>B</i> is true but ∅ ∈ <i>B</i> false: never read one off the other.',
    say: null,
  },
  // pp. 88–90
  {
    topic: 13,
    kind: 'mixup',
    q: 'Which chains are legal: ⊆ then ⊆, ∈ then ∈, ∈ then ⊆, ⊆ then ∈?',
    a: '⊆ is transitive: <i>A</i> ⊆ <i>B</i> and <i>B</i> ⊆ <i>C</i> give <i>A</i> ⊆ <i>C</i>. ∈ is not: 1 ∈ {1} and {1} ∈ {{1}}, yet the only element of {{1}} is {1} ≠ 1, so 1 ∉ {{1}}. Mixed, the chain works in one order only: <i>A</i> ∈ <i>B</i> and <i>B</i> ⊆ <i>C</i> give <i>A</i> ∈ <i>C</i>, because <i>B</i> ⊆ <i>C</i> sends every element of <i>B</i> into <i>C</i>; <i>A</i> ⊆ <i>B</i> and <i>B</i> ∈ <i>C</i> give nothing: {1} ⊆ {1, 2} and {1, 2} ∈ {{1, 2}, 3}, yet {1} ∉ {{1, 2}, 3}',
    why: '<i>A</i> ∈ <i>B</i> and <i>B</i> ⊆ <i>C</i> do not give <i>A</i> ⊆ <i>C</i>: with <i>A</i> = {1}, <i>B</i> = {{1}, 2} and <i>C</i> = {{1}, 2, 3}, 1 ∈ <i>A</i> but 1 ∉ <i>C</i>.',
    say: null,
  },

  // ── Additional J · Power set laws ──
  // pp. 90–92
  {
    topic: 14,
    kind: 'remember',
    q: 'How do <i>P</i>(<i>A</i>) ∩ <i>P</i>(<i>B</i>) and <i>P</i>(<i>A</i>) ∪ <i>P</i>(<i>B</i>) compare with <i>P</i>(<i>A</i> ∩ <i>B</i>) and <i>P</i>(<i>A</i> ∪ <i>B</i>)?',
    a: '<i>P</i>(<i>A</i>) ∩ <i>P</i>(<i>B</i>) = <i>P</i>(<i>A</i> ∩ <i>B</i>) always, since <i>X</i> ⊆ <i>A</i> and <i>X</i> ⊆ <i>B</i> is exactly <i>X</i> ⊆ <i>A</i> ∩ <i>B</i>. But only <i>P</i>(<i>A</i>) ∪ <i>P</i>(<i>B</i>) ⊆ <i>P</i>(<i>A</i> ∪ <i>B</i>), with equality if and only if <i>A</i> ⊆ <i>B</i> or <i>B</i> ⊆ <i>A</i>: cap behaves, cup does not. A subset of <i>A</i> ∪ <i>B</i> may take some elements from <i>A</i> and some from <i>B</i>, and such a mongrel lies in neither power set: if <i>p</i> ∈ <i>A</i>, <i>p</i> ∉ <i>B</i> and <i>q</i> ∈ <i>B</i>, <i>q</i> ∉ <i>A</i>, then {<i>p</i>, <i>q</i>} is one. Also <i>A</i> ⊆ <i>B</i> ⟺ <i>P</i>(<i>A</i>) ⊆ <i>P</i>(<i>B</i>), hence <i>P</i>(<i>A</i>) = <i>P</i>(<i>B</i>) ⟺ <i>A</i> = <i>B</i>',
    why: 'For <i>A</i> = {1, 2} and <i>B</i> = {2, 3}, <i>P</i>(<i>A</i>) ∪ <i>P</i>(<i>B</i>) has 6 members but <i>P</i>(<i>A</i> ∪ <i>B</i>) has 8: the mongrels {1, 3} and {1, 2, 3} are missing.',
    say: null,
  },
  // pp. 90–92
  {
    topic: 14,
    kind: 'remember',
    q: 'With <i>n</i>(<i>A</i>) = <i>a</i>, <i>n</i>(<i>B</i>) = <i>b</i> and <i>n</i>(<i>A</i> ∩ <i>B</i>) = <i>c</i>, how many members have <i>P</i>(<i>A</i>) ∩ <i>P</i>(<i>B</i>), <i>P</i>(<i>A</i>) ∪ <i>P</i>(<i>B</i>) and <i>P</i>(<i>A</i> ∪ <i>B</i>)?',
    a: '2<sup><i>c</i></sup>, 2<sup><i>a</i></sup> + 2<sup><i>b</i></sup> − 2<sup><i>c</i></sup> and 2<sup><i>a</i>+<i>b</i>−<i>c</i></sup>. The middle count is inclusion–exclusion on the two power sets, the intersection law sizing their overlap. With <i>a</i> = 5, <i>b</i> = 4 and <i>c</i> = 2: 32 + 16 − 4 = 44 members in the union of the power sets, against <i>n</i>(<i>A</i> ∪ <i>B</i>) = 7 and 2<sup>7</sup> = 128 in the power set of the union',
    why: 'Run backwards: <i>n</i>[<i>P</i>(<i>A</i>) ∩ <i>P</i>(<i>B</i>)] = 8 with <i>n</i>(<i>A</i>) = <i>n</i>(<i>B</i>) = 5 gives <i>n</i>(<i>A</i> ∩ <i>B</i>) = 3, so <i>n</i>(<i>A</i> ∪ <i>B</i>) = 5 + 5 − 3 = 7.',
    say: null,
  },

  // ── Additional K · The four equivalent forms of A ⊆ B, and the cancellation traps ──
  // pp. 92–94
  {
    topic: 15,
    kind: 'remember',
    q: 'Which four statements are equivalent forms of <i>A</i> ⊆ <i>B</i>, and how are they best proved?',
    a: '<i>A</i> ⊆ <i>B</i> ⟺ <i>A</i> − <i>B</i> = ∅ ⟺ <i>A</i> ∪ <i>B</i> = <i>B</i> ⟺ <i>A</i> ∩ <i>B</i> = <i>A</i>. Prove them as a cycle, each implying the next and the last the first: four short implications replace twelve, since from any statement you can walk forward to any other. In an exam establish whichever form is cheapest, most often <i>A</i> − <i>B</i> = ∅, since showing a set empty needs only “no element can satisfy both conditions”, then quote the theorem. Corollary: <i>A</i> ∪ <i>B</i> = <i>A</i> ∩ <i>B</i> ⟺ <i>A</i> = <i>B</i>',
    why: '<i>A</i> − <i>B</i> = <i>B</i> − <i>A</i> forces <i>A</i> = <i>B</i>: the common set lies inside <i>A</i> yet holds nothing from <i>A</i>, so it is ∅, and <i>A</i> − <i>B</i> = ∅ = <i>B</i> − <i>A</i> gives <i>A</i> ⊆ <i>B</i> and <i>B</i> ⊆ <i>A</i>.',
    say: null,
  },
  // pp. 93–94
  {
    topic: 15,
    kind: 'mistake',
    q: 'If <i>A</i> ∩ <i>B</i> = <i>A</i> ∩ <i>C</i>, or if <i>A</i> ∪ <i>B</i> = <i>A</i> ∪ <i>C</i>, can you cancel <i>A</i> and conclude <i>B</i> = <i>C</i>?',
    a: 'No: sets are not numbers. <i>A</i> = {1}, <i>B</i> = {1, 2}, <i>C</i> = {1, 3} give <i>A</i> ∩ <i>B</i> = {1} = <i>A</i> ∩ <i>C</i>, the difference hiding outside <i>A</i>; <i>A</i> = {1, 2, 3}, <i>B</i> = {1}, <i>C</i> = {2} give <i>A</i> ∪ <i>B</i> = <i>A</i> ∪ <i>C</i>, the difference hiding inside <i>A</i>. Only the two together force <i>B</i> = <i>C</i>: <i>B</i> = <i>B</i> ∩ (<i>A</i> ∪ <i>B</i>) = <i>B</i> ∩ (<i>A</i> ∪ <i>C</i>) = (<i>B</i> ∩ <i>A</i>) ∪ (<i>B</i> ∩ <i>C</i>) = (<i>A</i> ∩ <i>C</i>) ∪ (<i>B</i> ∩ <i>C</i>) = (<i>A</i> ∪ <i>B</i>) ∩ <i>C</i> = (<i>A</i> ∪ <i>C</i>) ∩ <i>C</i> = <i>C</i>',
    why: 'The proof’s shape, absorb, substitute, distribute, substitute, distribute, substitute, absorb, solves most “show that <i>B</i> = <i>C</i>” problems in the chapter.',
    say: null,
  },

  // ── Additional L · Proving containment between algebraically described sets ──
  // pp. 95–96, 100
  {
    topic: 16,
    kind: 'remember',
    q: 'How do you show {8<sup><i>n</i></sup> − 7<i>n</i> − 1 ∶ <i>n</i> ∈ ℕ} ⊆ {49(<i>n</i> − 1) ∶ <i>n</i> ∈ ℕ}, and is the containment strict?',
    a: 'The second set is the non-negative multiples of 49: 0, 49, 98, 147, …. Write the general element of the first and force it into that shape with the binomial expansion: 8<sup><i>n</i></sup> = (1 + 7)<sup><i>n</i></sup> = 1 + 7<i>n</i> + ∑<sub><i>k</i>=2</sub><sup><i>n</i></sup> <sup><i>n</i></sup>C<sub><i>k</i></sub> 7<sup><i>k</i></sup>, so 8<sup><i>n</i></sup> − 7<i>n</i> − 1 = 49 ∑<sub><i>k</i>=2</sub><sup><i>n</i></sup> <sup><i>n</i></sup>C<sub><i>k</i></sub> 7<sup><i>k</i>−2</sup>, 49 times a non-negative integer. It is strict: the first set runs 0, 49, 490, 4067, …, strictly increasing, so no index gives 98. One-direction containment is not equality; for strictness, hunt one witness',
    why: 'In general (1 + <i>m</i>)<sup><i>n</i></sup> − <i>mn</i> − 1 is a non-negative multiple of <i>m</i><sup>2</sup> for any integer <i>m</i> ≥ 0, so 9 divides 4<sup><i>n</i></sup> − 3<i>n</i> − 1 and 64 divides 9<sup><i>n</i></sup> − 8<i>n</i> − 1.',
    say: null,
  },
  // pp. 96–97
  {
    topic: 16,
    kind: 'remember',
    q: 'Is {<frac><num><i>n</i></num><den><i>n</i> + 1</den></frac> ∶ <i>n</i> ∈ ℕ} equal to {<i>x</i> ∈ ℚ ∶ 0 < <i>x</i> < 1}?',
    a: 'No: it is a proper subset. Each <frac><num><i>n</i></num><den><i>n</i> + 1</den></frac> is rational, positive, and less than 1 because <i>n</i> < <i>n</i> + 1, so the containment holds. But <frac><num>1</num><den>3</den></frac> is a witness against the reverse: <frac><num><i>n</i></num><den><i>n</i> + 1</den></frac> = <frac><num>1</num><den>3</den></frac> gives 3<i>n</i> = <i>n</i> + 1 and <i>n</i> = <frac><num>1</num><den>2</den></frac> ∉ ℕ. A fraction <frac><num><i>p</i></num><den><i>q</i></den></frac> in lowest terms lies in the set only when <i>n</i> = <frac><num><i>p</i></num><den><i>q</i> − <i>p</i></den></frac> is a natural number, that is, when <i>q</i> − <i>p</i> divides <i>p</i>; that forces <i>q</i> − <i>p</i> = 1: the set holds only the fractions whose denominator is one more than the numerator',
    why: '{6<i>n</i> + 2 ∶ <i>n</i> ∈ 𝕎} ⊊ {2<i>n</i> ∶ <i>n</i> ∈ 𝕎}: 6<i>n</i> + 2 = 2(3<i>n</i> + 1), but 0 is never 6<i>n</i> + 2, which would need <i>n</i> = −<frac><num>1</num><den>3</den></frac>.',
    say: null,
  },

  // ── Additional M · The algebra of set difference ──
  // pp. 97–99
  {
    topic: 17,
    kind: 'remember',
    q: 'How do you simplify a difference of sets, and what are <i>A</i> − (<i>B</i> ∪ <i>C</i>), <i>A</i> − (<i>B</i> ∩ <i>C</i>) and <i>A</i> − (<i>B</i> − <i>C</i>)?',
    a: 'Rewrite <i>A</i> − <i>B</i> = <i>A</i> ∩ <i>B</i>′ first, then let De Morgan and the distributive laws finish. Difference over a union or an intersection flips the operation: <i>A</i> − (<i>B</i> ∪ <i>C</i>) = (<i>A</i> − <i>B</i>) ∩ (<i>A</i> − <i>C</i>) and <i>A</i> − (<i>B</i> ∩ <i>C</i>) = (<i>A</i> − <i>B</i>) ∪ (<i>A</i> − <i>C</i>). A double difference gives <i>C</i> back: <i>A</i> − (<i>B</i> − <i>C</i>) = <i>A</i> ∩ (<i>B</i>′ ∪ <i>C</i>) = (<i>A</i> − <i>B</i>) ∪ (<i>A</i> ∩ <i>C</i>). Trim before you subtract: <i>A</i> − <i>B</i> = <i>A</i> − (<i>A</i> ∩ <i>B</i>) = (<i>A</i> ∪ <i>B</i>) − <i>B</i>. The disjoint splits <i>A</i> = (<i>A</i> ∩ <i>B</i>) ∪ (<i>A</i> − <i>B</i>) and <i>A</i> ∪ <i>B</i> = <i>A</i> ∪ (<i>B</i> − <i>A</i>) give <i>n</i>(<i>A</i> ∪ <i>B</i>) = <i>n</i>(<i>A</i>) + <i>n</i>(<i>B</i>) − <i>n</i>(<i>A</i> ∩ <i>B</i>) with no talk of double counting',
    why: 'With <i>A</i> = {1, 2, 3, 4}, <i>B</i> = {2, 3, 5} and <i>C</i> = {3, 4, 6}: <i>A</i> − (<i>B</i> − <i>C</i>) = <i>A</i> − {2, 5} = {1, 3, 4} = {1, 4} ∪ {3, 4}.',
    say: null,
  },
  // pp. 98–100
  {
    topic: 17,
    kind: 'mistake',
    q: 'Does <i>A</i> − <i>B</i> − <i>C</i> mean anything without brackets?',
    a: 'No: difference is not associative. (<i>A</i> − <i>B</i>) − <i>C</i> = <i>A</i> − (<i>B</i> ∪ <i>C</i>) = (<i>A</i> − <i>C</i>) − <i>B</i>, but <i>A</i> − (<i>B</i> − <i>C</i>) is larger by <i>A</i> ∩ <i>C</i>. With <i>A</i> = {1, 2}, <i>B</i> = {2}, <i>C</i> = {1}: (<i>A</i> − <i>B</i>) − <i>C</i> = {1} − {1} = ∅, while <i>A</i> − (<i>B</i> − <i>C</i>) = {1, 2} − {2} = {1}. Always bracket; ∪ and ∩ are associative and may be written unbracketed',
    why: 'Symmetric difference is associative: <i>A</i> △ <i>B</i> △ <i>C</i> is the elements in an odd number of <i>A</i>, <i>B</i>, <i>C</i>, the regions <i>R</i><sub>1</sub>, <i>R</i><sub>2</sub>, <i>R</i><sub>3</sub>, <i>R</i><sub>7</sub>: the three private crescents and the centre.',
    say: null,
  },
];
