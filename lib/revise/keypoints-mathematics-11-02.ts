/**
 * KEY POINTS for Mathematics Class 11, Chapter 2 (Relations and Functions).
 *
 * Written for test mode: every point is a question to answer in your head,
 * then the answer and at most one more line. Four kinds, each a section on
 * the screen: Remember, Don't mix up, Common mistakes and Exam shortcuts.
 * Topics 01–04 are long, so each has two or more Remember points (Topic 03,
 * with its range procedure, has seven), at least one of each other kind and
 * one Exam shortcut; an Additional topic has three points for its central
 * results. Memory lines are a fifth, short section of their own, read rather
 * than tested: the first two of each topic.
 *
 * `topic`: Topics 01–04 are 0–3 (Topic 04 is the supplement's Subtopic 04;
 * Topic 03 carries the supplement's "Finding the Range": Procedure E and
 * Examples 6–7); Additional topics F–K, which keep the book's letters, are
 * 4–9. No point refers to another topic by number.
 *
 * Every fact is from the Master Reference book (the October 2026 edition); the
 * page (the bottom folio) is above each point. Remember: the topic's Key
 * definitions, its procedures and its Cheat sheet. Common mistakes: its Common
 * student pitfalls and its MCQ traps. Exam shortcuts: its Pro-Tip, with a worked
 * example or practice answer. `say`: two of the cheat sheet's first two memory
 * aids, word for word, without quotation marks or bold; where the book glosses
 * an aid with "→" the arrow is kept as printed, and a colon gloss stays a colon
 * (no em dashes in Mathematics). Topics 01–04 print four, four, four and five
 * aids, so the chapter has eight lines; the Additional topics print none (their
 * combined cheat sheet at the end of K has rows only). Additional topics: the
 * addenda's methods, worked examples and practice answers.
 *
 * Markup is the chapter's own: <i> for every variable, set, relation and
 * function letter, ∶ in set-builder, − (U+2212) for minus, ∘ for composition,
 * <sup>−1</sup> for an inverse relation, [x] for the greatest integer and {x}
 * for the fractional part, the number sets ℕ ℤ ℝ upright, Dom and Range
 * upright. Every fraction is stacked, <frac><num>…</num><den>…</den></frac>,
 * except inside a raised exponent (2^(n(n+1)/2)), which keeps its slash as the
 * chapter writes it; a binomial coefficient is <sup>n</sup>C<sub>2</sub>.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Cartesian Product of Sets ──
  // pp. 102–103, 110–111
  {
    topic: 0,
    kind: 'remember',
    q: 'What is <i>A</i> × <i>B</i>, and when are two ordered pairs equal?',
    a: 'For non-empty sets <i>A</i> and <i>B</i>, the Cartesian product <i>A</i> × <i>B</i> = {(<i>a</i>, <i>b</i>) ∶ <i>a</i> ∈ <i>A</i>, <i>b</i> ∈ <i>B</i>} is the set of all ordered pairs whose first coordinate is pulled from <i>A</i> and whose second is pulled from <i>B</i>: every item of one list tagged with every item of the other. Order is sacred: (<i>a</i>, <i>b</i>) = (<i>c</i>, <i>d</i>) ⟺ <i>a</i> = <i>c</i> and <i>b</i> = <i>d</i>, so (<i>a</i>, <i>b</i>) and (<i>b</i>, <i>a</i>) are different objects whenever <i>a</i> ≠ <i>b</i>, as a scoreline (180, 4) read backwards as (4, 180) claims 4 runs for 180 wickets. Membership is a coordinate check: (<i>x</i>, <i>y</i>) ∈ <i>A</i> × <i>B</i> ⟺ <i>x</i> ∈ <i>A</i> and <i>y</i> ∈ <i>B</i>. ℝ × ℝ is the coordinate plane, and ℝ<sup>3</sup> = ℝ × ℝ × ℝ is 3-D space',
    why: 'Three sizes and two flavours of chai give six cups, <i>A</i> × <i>B</i>: Small-Adrak, Small-Elaichi, Medium-Adrak, Medium-Elaichi, Large-Adrak, Large-Elaichi.',
    say: 'Every-with-every → always multiply, never add.',
  },
  // pp. 103–105, 109–110
  {
    topic: 0,
    kind: 'remember',
    q: 'How many elements has <i>A</i> × <i>B</i>, and how many subsets?',
    a: 'If <i>n</i>(<i>A</i>) = <i>p</i> and <i>n</i>(<i>B</i>) = <i>q</i>, both finite, then <i>n</i>(<i>A</i> × <i>B</i>) = <i>n</i>(<i>A</i>) · <i>n</i>(<i>B</i>) = <i>pq</i>. The proof slices the product by first coordinate: each slice {<i>a</i><sub><i>i</i></sub>} × <i>B</i> has exactly as many pairs as <i>B</i> has elements, and slices with different first coordinates don’t overlap, so their sizes simply add. This is the multiplication principle of counting in set notation. For <i>n</i> sets, <i>n</i>(<i>A</i><sub>1</sub> × ⋯ × <i>A</i><sub><i>n</i></sub>) = <i>n</i>(<i>A</i><sub>1</sub>) · <i>n</i>(<i>A</i><sub>2</sub>) ⋯ <i>n</i>(<i>A</i><sub><i>n</i></sub>), and <i>n</i>(<i>A</i><sup><i>m</i></sup>) = (<i>n</i>(<i>A</i>))<sup><i>m</i></sup>. Since <i>A</i> × <i>B</i> has <i>pq</i> elements, it has 2<sup><i>pq</i></sup> subsets, and these become the relations',
    why: 'With <i>A</i> = {2, 3, 5} and <i>B</i> = {<i>x</i>, <i>y</i>}, <i>n</i>(<i>A</i> × <i>B</i>) = 3 × 2 = 6; with <i>n</i>(<i>A</i>) = 5 and <i>n</i>(<i>B</i>) = 4, <i>A</i> × <i>B</i> has 2<sup>20</sup> = 1,048,576 subsets.',
    say: null,
  },
  // pp. 103, 105–106, 109–110
  {
    topic: 0,
    kind: 'remember',
    q: 'When is <i>A</i> × <i>B</i> empty, how does × behave with ∪, ∩ and −, and how do you recover <i>A</i> and <i>B</i> from <i>A</i> × <i>B</i>?',
    a: '<i>A</i> × <i>B</i> = ∅ ⟺ <i>A</i> = ∅ or <i>B</i> = ∅: with one set empty no pair can be formed, so don’t waste time pairing. If one set is infinite and the other non-empty, <i>A</i> × <i>B</i> is infinite. The product distributes over set operations: <i>A</i> × (<i>B</i> ∪ <i>C</i>) = (<i>A</i> × <i>B</i>) ∪ (<i>A</i> × <i>C</i>), the same for ∩ and −, and (<i>A</i> × <i>B</i>) ∩ (<i>C</i> × <i>D</i>) = (<i>A</i> ∩ <i>C</i>) × (<i>B</i> ∩ <i>D</i>); the ∩ law is proved by one biconditional chain that duplicates “<i>x</i> ∈ <i>A</i>” onto each branch. To recover the sets, run the definition backwards: the distinct first coordinates form <i>A</i>, the distinct second coordinates form <i>B</i>, and <i>n</i>(<i>A</i>) · <i>n</i>(<i>B</i>) must equal the number of pairs given',
    why: 'From <i>A</i> × <i>B</i> = {(<i>p</i>, 1), (<i>p</i>, 2), (<i>q</i>, 1), (<i>q</i>, 2)}: <i>A</i> = {<i>p</i>, <i>q</i>} and <i>B</i> = {1, 2}, and 2 × 2 = 4 pairs checks.',
    say: null,
  },
  // pp. 102–103, 107, 109–110
  {
    topic: 0,
    kind: 'mixup',
    q: 'For non-empty <i>A</i> and <i>B</i>, when is <i>A</i> × <i>B</i> = <i>B</i> × <i>A</i>? And is (3, 1) in {1, 2} × {3, 4}?',
    a: '<i>A</i> × <i>B</i> = <i>B</i> × <i>A</i> ⟺ <i>A</i> = <i>B</i>: order in the pairs is rigid, so the products match only when the sets feeding both coordinates are identical. <i>A</i> ⊆ <i>B</i> is not enough ({1} and {1, 2} give unequal products), disjointness makes the products share no pairs at all, and size is irrelevant: ℝ × ℤ ≠ ℤ × ℝ. (3, 1) has its coordinates reversed: it belongs to <i>B</i> × <i>A</i>, not <i>A</i> × <i>B</i>. Reversing coordinates is the most-exploited distractor on the topic; always read which set feeds the first slot',
    why: 'With <i>A</i> = {2, 3, 5} and <i>B</i> = {<i>x</i>, <i>y</i>}, (2, <i>x</i>) lies in <i>A</i> × <i>B</i> but not in <i>B</i> × <i>A</i>, and here the two products share no element at all.',
    say: 'Cross flips the slots → (<i>a</i>, <i>b</i>) ≠ (<i>b</i>, <i>a</i>) unless equal.',
  },
  // pp. 109–110
  {
    topic: 0,
    kind: 'mistake',
    q: 'If <i>n</i>(<i>A</i>) = 3 and <i>n</i>(<i>B</i>) = 4, is <i>n</i>(<i>A</i> × <i>B</i>) = 7?',
    a: 'No: 12. Adding instead of multiplying is the single most common error: pairing is every-with-every, so <i>n</i>(<i>A</i> × <i>B</i>) = <i>n</i>(<i>A</i>) · <i>n</i>(<i>B</i>) = 3 × 4, and with 2 and 3 elements you should get 6 pairs, not 5. 64 = 4<sup>3</sup> and 81 = 3<sup>4</sup> confuse it with the number of functions or a power-set exponent. The partner slip is in counting subsets: 2<sup><i>n</i>(<i>A</i>) <i>n</i>(<i>B</i>)</sup>, not 2<sup><i>n</i>(<i>A</i>)+<i>n</i>(<i>B</i>)</sup> and not <i>n</i>(<i>A</i>) · <i>n</i>(<i>B</i>). Compute <i>n</i>(<i>A</i> × <i>B</i>) first, then raise 2 to that power',
    why: 'If <i>n</i>(<i>A</i>) = 2, <i>A</i> × <i>A</i> has 2<sup>2</sup> = 4 elements and 2<sup>4</sup> = 16 subsets; answering 4 stops one step early.',
    say: null,
  },
  // pp. 107–108, 110
  {
    topic: 0,
    kind: 'shortcut',
    q: 'With <i>A</i> = {1, 2} and <i>B</i> = {1, 2, 3}, how many ordered pairs are common to <i>A</i> × <i>B</i> and <i>B</i> × <i>A</i>? The fast way?',
    a: 'Skip enumeration: (<i>A</i> × <i>B</i>) ∩ (<i>B</i> × <i>A</i>) = (<i>A</i> ∩ <i>B</i>) × (<i>A</i> ∩ <i>B</i>), so the answer is (<i>n</i>(<i>A</i> ∩ <i>B</i>))<sup>2</sup>. Here <i>A</i> ∩ <i>B</i> = {1, 2}, giving 2 × 2 = 4 common pairs, (1, 1), (1, 2), (2, 1), (2, 2), in one line; recalling “<i>A</i> × <i>B</i> ≠ <i>B</i> × <i>A</i>” and answering 0 is the second trap. Likewise, given the element count of <i>A</i> × <i>A</i>, take the square root first: <i>n</i>(<i>A</i>) = √(<i>n</i>(<i>A</i> × <i>A</i>)) gives the size, and the listed pairs hand you the elements',
    why: '<i>A</i> × <i>A</i> has 16 elements, among them (1, 4) and (3, 2): <i>n</i>(<i>A</i>) = 4, so <i>A</i> = {1, 2, 3, 4}, and 2<sup>15</sup> = 32,768 subsets of <i>A</i> × <i>A</i> contain (4, 1).',
    say: null,
  },

  // ── Topic 02 · Relations ──
  // pp. 112–113, 116, 119
  {
    topic: 1,
    kind: 'remember',
    q: 'What is a relation from <i>A</i> to <i>B</i>, and what are its domain, range and codomain?',
    a: 'A relation <i>R</i> from <i>A</i> to <i>B</i> is any subset of <i>A</i> × <i>B</i>: the meaningful pairs a rule carves out of the grid of all possible pairs. When (<i>a</i>, <i>b</i>) ∈ <i>R</i>, <i>a</i> is related to <i>b</i>, written <i>a</i> <i>R</i> <i>b</i>. The domain is the set of first coordinates that actually show up in <i>R</i>, the range the set of second coordinates that actually show up, and the codomain the entire set <i>B</i> that second coordinates are allowed to come from. Range ⊆ codomain always, and domain ⊆ <i>A</i> likewise: a relation needn’t use every element of <i>A</i>. A relation on <i>A</i> is a subset of <i>A</i> × <i>A</i>',
    why: 'On <i>A</i> = {1, 2, 3, 4, 5, 6}, <i>y</i> = <i>x</i> + 2 gives <i>R</i> = {(1, 3), (2, 4), (3, 5), (4, 6)}: domain {1, 2, 3, 4}, range {3, 4, 5, 6}, codomain <i>A</i>; 5 and 6 are in <i>A</i> but not in the domain.',
    say: 'Relation = highlighted slice of <i>A</i> × <i>B</i>.',
  },
  // pp. 113, 115–116, 119
  {
    topic: 1,
    kind: 'remember',
    q: 'How many relations are there from <i>A</i> to <i>B</i>, and how many on <i>A</i>?',
    a: 'With <i>n</i>(<i>A</i>) = <i>p</i> and <i>n</i>(<i>B</i>) = <i>q</i>, <i>A</i> × <i>B</i> has <i>pq</i> pairs, and each faces an independent yes/no decision, “is this pair in <i>R</i> or not?”: 2 × 2 × ⋯ × 2 (<i>pq</i> factors) = 2<sup><i>pq</i></sup> = 2<sup><i>n</i>(<i>A</i>) <i>n</i>(<i>B</i>)</sup>. The count includes both extremes, the empty relation <i>R</i> = ∅ (all “no”) and the universal relation <i>R</i> = <i>A</i> × <i>B</i> (all “yes”), both valid relations, so the non-empty relations number 2<sup><i>pq</i></sup> − 1. A relation on <i>A</i> is a subset of <i>A</i> × <i>A</i>, and there are 2<sup><i>n</i>(<i>A</i>)<sup>2</sup></sup> of them',
    why: 'From 3 elements to 4: 3 × 4 = 12 is the number of pairs and 2<sup>3+4</sup> = 128 adds in the exponent; the relations number 2<sup>12</sup> = 4096, and 4095 are non-empty.',
    say: null,
  },
  // pp. 112–117
  {
    topic: 1,
    kind: 'remember',
    q: 'In which three forms is a relation written, and how do you turn a rule into roster form?',
    a: 'Roster form spells out every ordered pair, {(1, 3), (2, 4), (3, 5)}; set-builder form states the rule, {(<i>x</i>, <i>y</i>) ∶ <i>y</i> = <i>x</i> + 2, <i>x</i>, <i>y</i> ∈ <i>A</i>}; an arrow diagram draws <i>A</i> and <i>B</i> as two columns of dots with an arrow from <i>a</i> to <i>b</i> whenever <i>a</i> <i>R</i> <i>b</i>. Roster and arrow forms only work for a finite relation; for an infinite one you must use set-builder form. Rule to roster: for each valid <i>x</i> compute <i>y</i>, keep the pair only if <i>y</i> ∈ <i>B</i>, then read the domain and range off the finished list. Roster to set-builder: spot the pattern, write the rule with quantified membership, and verify both ways',
    why: 'On ℤ, <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> = 25 gives 12 pairs, the lattice points on a circle of radius 5, with domain = range = {−5, −4, −3, 0, 3, 4, 5}.',
    say: null,
  },
  // pp. 112–113, 118–119
  {
    topic: 1,
    kind: 'mixup',
    q: 'Range or codomain: which is the part of <i>B</i> a relation actually reaches?',
    a: 'The range. The codomain is the whole declared target set <i>B</i>, whether or not every element gets used; the range is only the set of second coordinates that genuinely appear, so range ⊆ codomain and the two need not be equal. Declare <i>B</i> = {1, 2, …, 10} and output only {2, 4, 6}: the range is {2, 4, 6} while the codomain stays {1, …, 10}. If a question gives <i>B</i> explicitly and asks for the range, do not just write <i>B</i>',
    why: 'For <i>R</i> = {(1, 2), (2, 4), (3, 6)} the range is {2, 4, 6}; {1, 2, 3} is the domain.',
    say: null,
  },
  // pp. 115–116, 119
  {
    topic: 1,
    kind: 'mistake',
    q: 'Writing <i>R</i> = {(<i>x</i>, <i>y</i>) ∶ <i>y</i> = <i>x</i> + 2, <i>x</i>, <i>y</i> ∈ {1, …, 6}} in roster form, do (5, 7) and (6, 8) belong?',
    a: 'No: 7 and 8 lie outside the set, and a relation lives inside <i>A</i> × <i>B</i>. Any pair whose coordinate escapes the declared sets simply isn’t allowed in, no matter what the rule says; including such phantom pairs is where careless students go wrong, so always check the output actually belongs to the target set. The partner slip is the domain–range swap, reading second coordinates as the domain or first as the range. Lock it in: domain = left = inputs, range = right = outputs',
    why: '<i>R</i> = {(2, 1), (3, 2), (4, 3), (5, 4)} has domain {2, 3, 4, 5} and range {1, 2, 3, 4}, and in set-builder form <i>y</i> = <i>x</i> − 1, <i>x</i> ∈ {2, 3, 4, 5}.',
    say: 'Domain Left, Range Right (D-L, R-R): never swap them.',
  },
  // pp. 117, 119
  {
    topic: 1,
    kind: 'shortcut',
    q: 'On <i>A</i> = {1, 2, 3}, how many relations contain at least one of (1, 1), (2, 2), (3, 3)? The fast way?',
    a: 'For “at least one”, count the complement (“none of them”) and subtract: almost always faster than inclusion–exclusion. <i>A</i> × <i>A</i> has 3<sup>2</sup> = 9 pairs, so there are 2<sup>9</sup> = 512 relations; forcing all three diagonal pairs out leaves 6 pairs free, 2<sup>6</sup> = 64 relations with none, so 512 − 64 = 448. Keep two anchors, pairs = <i>pq</i> and relations = 2<sup><i>pq</i></sup>; each pair forced in or out freezes one switch and removes one factor of 2, giving 2<sup>(<i>pq</i>−<i>k</i>)</sup> for <i>k</i> forced pairs',
    why: 'On <i>A</i> = {1, 2, 3, 4}, the relations containing (1, 2) and (2, 1) but not (3, 3) force 3 pairs: 2<sup>(16−3)</sup> = 2<sup>13</sup> = 8192.',
    say: null,
  },

  // ── Topic 03 · Functions ──
  // pp. 120–121, 125, 129
  {
    topic: 2,
    kind: 'remember',
    q: 'What makes a relation a function, and what are its domain, codomain and range?',
    a: 'A function <i>f</i> : <i>A</i> → <i>B</i> is a relation from <i>A</i> to <i>B</i> that keeps two promises: every element of <i>A</i> has an image in <i>B</i> (no input left unmapped), and no element of <i>A</i> has more than one image. So every function is a relation, but most relations are not functions. Many-to-one is allowed; one-to-many is banned. Domain = <i>A</i>, all of it; codomain = <i>B</i>; range = {<i>f</i>(<i>x</i>) ∶ <i>x</i> ∈ <i>A</i>} ⊆ <i>B</i>, the images actually produced. Two functions are equal only with the same domain and <i>f</i>(<i>x</i>) = <i>g</i>(<i>x</i>) at every <i>x</i> in it: <i>f</i>(<i>x</i>) = <i>x</i> on ℝ and <i>g</i>(<i>x</i>) = <i>x</i> on [0, 1] are not equal',
    why: '{(1, 2), (2, 3), (3, 2), (4, 5)} from {1, 2, 3, 4} to {2, 3, 5, 7} is a function, inputs 1 and 3 sharing the image 2: range {2, 3, 5}, and 7 is in the codomain but not the range.',
    say: 'Vending machine: one button, one snack → single-valued.',
  },
  // pp. 121, 124–125, 128–129
  {
    topic: 2,
    kind: 'remember',
    q: 'How many functions are there from <i>A</i> to <i>B</i>, and why is it not 2<sup><i>pq</i></sup>?',
    a: 'With <i>n</i>(<i>A</i>) = <i>p</i> and <i>n</i>(<i>B</i>) = <i>q</i>, each of the <i>p</i> inputs independently chooses one of the <i>q</i> outputs: <i>q</i> × <i>q</i> × ⋯ × <i>q</i> (<i>p</i> inputs) = <i>q</i><sup><i>p</i></sup> = (<i>n</i>(<i>B</i>))<sup><i>n</i>(<i>A</i>)</sup>. There is no yes/no per pair here, which gave 2<sup><i>pq</i></sup> for relations; it is one choice of output per input, so the base is <i>q</i>, the exponent <i>p</i>, and functions are far fewer. Swapping them to <i>p</i><sup><i>q</i></sup> is the most-tested distractor (the book’s estimate from past papers, not official figures)',
    why: 'From 3 elements to 4: 4<sup>3</sup> = 64, not 2<sup>12</sup> = 4096 (relations), 3<sup>4</sup> = 81 (base and exponent swapped) or 12 (the pair count).',
    say: 'Outputs to the power of inputs → <i>q</i><sup><i>p</i></sup>, never <i>p</i><sup><i>q</i></sup>.',
  },
  // pp. 122–123, 126, 129
  {
    topic: 2,
    kind: 'remember',
    q: 'What are the ranges of the identity, constant, modulus, signum and greatest-integer functions?',
    a: 'All five have domain ℝ. Identity <i>f</i>(<i>x</i>) = <i>x</i>: the 45° line through the origin, range ℝ. Constant <i>f</i>(<i>x</i>) = <i>c</i>: a horizontal line, range {<i>c</i>}. Modulus |<i>x</i>|: a symmetric V with vertex at the origin, range [0, ∞). Signum, <frac><num>|<i>x</i>|</num><den><i>x</i></den></frac> for <i>x</i> ≠ 0 and 0 for <i>x</i> = 0: three flat pieces, range {−1, 0, 1}. Greatest integer [<i>x</i>], the largest integer ≤ <i>x</i>: a left-closed staircase with value <i>n</i> on [<i>n</i>, <i>n</i> + 1), range ℤ. A polynomial has domain ℝ, a rational function <frac><num><i>p</i>(<i>x</i>)</num><den><i>q</i>(<i>x</i>)</den></frac> ℝ ∖ {<i>x</i> ∶ <i>q</i>(<i>x</i>) = 0}. On any graph, the shadow on the <i>x</i>-axis is the domain and the shadow on the <i>y</i>-axis the range',
    why: '[−1.5] = −2, the greatest integer not exceeding −1.5, while [2] = 2 and [3.9] = 3.',
    say: null,
  },
  // pp. 121, 124–125, 129
  {
    topic: 2,
    kind: 'remember',
    q: 'How do you find the natural domain of a real function given only by its rule?',
    a: 'When a rule is given without a stated domain, the domain is all real <i>x</i> for which the rule makes sense: for <frac><num>1</num><den><i>x</i></den></frac>, ℝ ∖ {0}. Work through the danger sources: a denominator must be non-zero, so exclude its roots; an even root needs a non-negative radicand, so solve (inside) ≥ 0. If several conditions apply, the domain is their intersection: all must hold at once',
    why: 'Why intersect: the rule must be valid at every step simultaneously, and a value surviving one hurdle but failing another is still excluded.',
    say: null,
  },
  // pp. 123–124, 126, 129
  {
    topic: 2,
    kind: 'remember',
    q: 'What are the domains of <i>f</i> ± <i>g</i>, <i>fg</i> and <frac><num><i>f</i></num><den><i>g</i></den></frac>?',
    a: '(<i>f</i> ± <i>g</i>)(<i>x</i>) = <i>f</i>(<i>x</i>) ± <i>g</i>(<i>x</i>), (<i>fg</i>)(<i>x</i>) = <i>f</i>(<i>x</i>) <i>g</i>(<i>x</i>), (<i>αf</i>)(<i>x</i>) = <i>α</i> <i>f</i>(<i>x</i>), and (<frac><num><i>f</i></num><den><i>g</i></den></frac>)(<i>x</i>) = <frac><num><i>f</i>(<i>x</i>)</num><den><i>g</i>(<i>x</i>)</den></frac> wherever <i>g</i>(<i>x</i>) ≠ 0. Dom(<i>f</i> ± <i>g</i>) = Dom(<i>fg</i>) = Dom(<i>f</i>) ∩ Dom(<i>g</i>), since both must be defined to combine them. For <frac><num><i>f</i></num><den><i>g</i></den></frac>, take that intersection and then remove every point where <i>g</i>(<i>x</i>) = 0: the extra removal is the step students forget',
    why: 'With <i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> and <i>g</i>(<i>x</i>) = √(4 − <i>x</i><sup>2</sup>), <i>f</i> + <i>g</i> and <i>fg</i> keep [−2, 2], but <frac><num><i>f</i></num><den><i>g</i></den></frac> sheds the zeros ±2 of <i>g</i>: (−2, 2).',
    say: null,
  },
  // pp. 146–148
  {
    topic: 2,
    kind: 'remember',
    q: 'When is a value <i>y</i> in the range of <i>f</i>, and how does the method depend on the shape of <i>f</i>?',
    a: '<i>y</i> lies in the range exactly when <i>y</i> = <i>f</i>(<i>x</i>) has at least one solution <i>x</i> inside the domain of <i>f</i>, so find the domain first. Linear rational <frac><num><i>ax</i> + <i>b</i></num><den><i>cx</i> + <i>d</i></den></frac>: invert, solving for <i>x</i> = <i>g</i>(<i>y</i>), and keep the <i>y</i> for which <i>g</i>(<i>y</i>) is real and in the domain. Quadratic over quadratic: cross-multiply to a quadratic in <i>x</i> and impose <i>D</i> ≥ 0. A quadratic, or one inside a root or a denominator: complete the square, <i>a</i>(<i>x</i> − <i>h</i>)<sup>2</sup> + <i>k</i>, with range [<i>k</i>, ∞) for <i>a</i> > 0 and (−∞, <i>k</i>] for <i>a</i> < 0, then propagate through the wrapping one operation at a time. A bounded ingredient (sin, cos, |<i>x</i>|, <i>x</i><sup>2</sup>) or a sum <i>t</i> + <frac><num>1</num><den><i>t</i></den></frac>: bound the ingredient and push the bound outwards, or use AM–GM',
    why: '<i>f</i>(<i>x</i>) = <frac><num>2<i>x</i> + 3</num><den><i>x</i> − 1</den></frac> inverts to <i>x</i> = <frac><num><i>y</i> + 3</num><den><i>y</i> − 2</den></frac>, real for <i>y</i> ≠ 2 and never equal to 1: range ℝ ∖ {2}.',
    say: null,
  },
  // pp. 147, 149–152
  {
    topic: 2,
    kind: 'remember',
    q: 'Find the range of <i>f</i>(<i>x</i>) = <frac><num><i>x</i><sup>2</sup> + <i>x</i> + 1</num><den><i>x</i><sup>2</sup> + <i>x</i> − 1</den></frac>: what are the discriminant method’s three checks?',
    a: 'Cross-multiply: (<i>y</i> − 1)<i>x</i><sup>2</sup> + (<i>y</i> − 1)<i>x</i> − (<i>y</i> + 1) = 0. First the degenerate value, where the <i>x</i><sup>2</sup> coefficient vanishes, handled by hand: <i>y</i> = 1 leaves −2 = 0, so 1 is not in the range (a degenerate value can land on either side). For every other <i>y</i>, a real <i>x</i> exists exactly when <i>D</i> = (<i>y</i> − 1)(5<i>y</i> + 3) ≥ 0, that is <i>y</i> ≤ −<frac><num>3</num><den>5</den></frac> or <i>y</i> ≥ 1. Then the domain check: a real root shared by numerator and denominator is a hole whose <i>y</i> must be removed by hand; here, where the denominator vanishes the numerator is 2, so nothing is removed. Range (−∞, −<frac><num>3</num><den>5</den></frac>] ∪ (1, ∞), −<frac><num>3</num><den>5</den></frac> being attained at <i>x</i> = −<frac><num>1</num><den>2</den></frac>',
    why: 'A hole: <frac><num><i>x</i><sup>2</sup> − 4</num><den><i>x</i> − 2</den></frac> equals <i>x</i> + 2 for every <i>x</i> ≠ 2, so its range is ℝ ∖ {4}, not ℝ.',
    say: null,
  },
  // pp. 122, 127–129
  {
    topic: 2,
    kind: 'mixup',
    q: 'Signum or modulus: which has range {−1, 0, 1} and which [0, ∞)?',
    a: 'Signum has range {−1, 0, 1}: −1 for <i>x</i> < 0, 0 at <i>x</i> = 0, +1 for <i>x</i> > 0. Modulus has range [0, ∞): |<i>x</i>| ≥ 0 for every real <i>x</i>, and every non-negative value is attained, as |0| = 0 and |3| = 3. Examiners swap these constantly (the book’s estimate from past papers, not official figures). Alongside them, constant → {<i>c</i>} and greatest integer [<i>x</i>] → ℤ',
    why: '[<i>x</i>] is the greatest integer not exceeding <i>x</i>: [2.3] = 2, but [−2.3] = −3, not −2.',
    say: null,
  },
  // pp. 126–128
  {
    topic: 2,
    kind: 'mistake',
    q: 'Is the natural domain of <i>f</i>(<i>x</i>) = <frac><num>1</num><den>√(9 − <i>x</i><sup>2</sup>)</den></frac> the interval [−3, 3]?',
    a: 'No: (−3, 3). Square roots allow the radicand = 0 (closed bracket); denominators forbid = 0 (open). When a radical sits in a denominator, the inside must be > 0, strictly, so 9 − <i>x</i><sup>2</sup> > 0. A lone root keeps its endpoint: √(<i>x</i> − 4) has domain [4, ∞), not (4, ∞), since √0 = 0 is defined',
    why: 'Endpoints that survive in <i>f</i> + <i>g</i> often vanish in <frac><num><i>f</i></num><den><i>g</i></den></frac>: its domain is the intersection of the domains minus the zeros of <i>g</i>.',
    say: null,
  },
  // pp. 147–149
  {
    topic: 2,
    kind: 'mistake',
    q: 'Is the range of <i>g</i>(<i>x</i>) = <frac><num>1</num><den><i>x</i><sup>2</sup> − 4<i>x</i> + 7</den></frac> the interval [0, <frac><num>1</num><den>3</den></frac>]?',
    a: 'No: (0, <frac><num>1</num><den>3</den></frac>]. The denominator (<i>x</i> − 2)<sup>2</sup> + 3 sweeps [3, ∞), so its reciprocal hits <frac><num>1</num><den>3</den></frac> at <i>x</i> = 2 and approaches 0 without reaching it. An inequality such as <i>y</i> ≤ <frac><num>1</num><den>2</den></frac> only says the range lies in (−∞, <frac><num>1</num><den>2</den></frac>]; solve <i>f</i>(<i>x</i>) = <frac><num>1</num><den>2</den></frac> and produce the <i>x</i>, which decides a square bracket against a round one and is where most of the lost marks live. A quadratic’s range is not automatically [0, ∞), and a stated domain smaller than the natural one can only shrink the range: <i>x</i><sup>2</sup> has range [0, ∞) on ℝ but [1, 9] on [1, 3]',
    why: '<frac><num><i>x</i></num><den>1 + <i>x</i><sup>2</sup></den></frac> on ℝ has range [−<frac><num>1</num><den>2</den></frac>, <frac><num>1</num><den>2</den></frac>]: the degenerate value <i>y</i> = 0 is attained at <i>x</i> = 0, and ±<frac><num>1</num><den>2</den></frac> at <i>x</i> = ±1.',
    say: null,
  },
  // pp. 125, 128
  {
    topic: 2,
    kind: 'shortcut',
    q: 'Find the natural domain of <i>f</i>(<i>x</i>) = <frac><num>√(<i>x</i> − 2)</num><den><i>x</i> − 5</den></frac>. The fast way?',
    a: 'Scan the formula for exactly two flags: is anything under an even root (set ≥ 0, or > 0 if also in a denominator), and is anything in a denominator (set ≠ 0)? Then intersect. Here <i>x</i> − 2 ≥ 0 and <i>x</i> − 5 ≠ 0: [2, ∞) ∖ {5} = [2, 5) ∪ (5, ∞). The point 2 stays in, since the square root is 0 there and only the denominator can’t be zero; 5 is punched out. For counting, lock the chant “outputs to the power of inputs”, <i>q</i><sup><i>p</i></sup>, so you never swap',
    why: 'With <i>f</i>(<i>x</i>) = <i>x</i> + 1 and <i>g</i>(<i>x</i>) = 2<i>x</i> − 3 on ℝ, (<frac><num><i>f</i></num><den><i>g</i></den></frac>)(<i>x</i>) = <frac><num><i>x</i> + 1</num><den>2<i>x</i> − 3</den></frac> has domain ℝ ∖ {<frac><num>3</num><den>2</den></frac>}.',
    say: null,
  },

  // ── Topic 04 · Types of Relations and Equivalence Relations ──
  // pp. 130–131, 133–134, 145
  {
    topic: 3,
    kind: 'remember',
    q: 'What do reflexive, symmetric, transitive and antisymmetric each require of a relation <i>R</i> on <i>A</i>?',
    a: 'Reflexive: (<i>a</i>, <i>a</i>) ∈ <i>R</i> for every <i>a</i> ∈ <i>A</i>, equivalently <i>I</i><sub><i>A</i></sub> ⊆ <i>R</i>: is every diagonal pair present? Symmetric: (<i>a</i>, <i>b</i>) ∈ <i>R</i> ⇒ (<i>b</i>, <i>a</i>) ∈ <i>R</i>, equivalently <i>R</i> = <i>R</i><sup>−1</sup>: does every arrow have its reverse? Transitive: (<i>a</i>, <i>b</i>), (<i>b</i>, <i>c</i>) ∈ <i>R</i> ⇒ (<i>a</i>, <i>c</i>) ∈ <i>R</i>: does every chain close up? Antisymmetric: (<i>a</i>, <i>b</i>), (<i>b</i>, <i>a</i>) ∈ <i>R</i> ⇒ <i>a</i> = <i>b</i>: do two distinct elements ever point both ways? That is the property of rankings, as ≤ on ℝ. Each holds “for all”, so a single failing instance destroys it; reflexivity concerns the <i>n</i> diagonal pairs only, symmetry and antisymmetry the off-diagonal pairs only, transitivity chains',
    why: '“Lives within 5 km of” is reflexive and symmetric but not transitive: it can happen that <i>A</i> is within 5 km of <i>B</i> and <i>B</i> within 5 km of <i>C</i> while <i>A</i> and <i>C</i> are not.',
    say: 'Reflexive = Run the diagonal: all <i>n</i> of them, no exceptions.',
  },
  // pp. 130, 133, 135–136, 145
  {
    topic: 3,
    kind: 'remember',
    q: 'What is an equivalence relation, and why do its classes partition the set?',
    a: 'An equivalence relation is reflexive and symmetric and transitive, like “is in the same section as”. The class of <i>a</i> is [<i>a</i>] = {<i>x</i> ∈ <i>A</i> ∶ (<i>x</i>, <i>a</i>) ∈ <i>R</i>}; <i>a</i> ∈ [<i>a</i>] by reflexivity, so no class is empty and the classes cover <i>A</i>. If two classes meet, symmetry lets you walk an arrow backwards and transitivity joins two walks, so [<i>a</i>] ⊆ [<i>b</i>] and [<i>b</i>] ⊆ [<i>a</i>]: classes either coincide or share nothing, and [<i>a</i>] = [<i>b</i>] ⟺ (<i>a</i>, <i>b</i>) ∈ <i>R</i>. The distinct classes are therefore a partition: non-empty, pairwise disjoint, union <i>A</i>. Conversely, “in the same block” for any partition is an equivalence relation, so the two are the same objects wearing different clothes. The smallest equivalence relation on <i>A</i> is <i>I</i><sub><i>A</i></sub>, the largest <i>A</i> × <i>A</i>, with exactly one class',
    why: 'On {1, 2, 3}, <i>R</i> = {(1, 1), (2, 2), (3, 3), (1, 2), (2, 1)} is an equivalence relation with [1] = [2] = {1, 2} and [3] = {3}, partitioning the set into {1, 2} and {3}.',
    say: null,
  },
  // pp. 134, 137, 139, 144–145
  {
    topic: 3,
    kind: 'remember',
    q: 'How many relations on an <i>n</i>-element set are reflexive, symmetric, both, and antisymmetric?',
    a: 'All relations 2<sup><i>n</i><sup>2</sup></sup>. Reflexive 2<sup><i>n</i><sup>2</sup>−<i>n</i></sup>: the <i>n</i> diagonal switches are frozen “in”. Symmetric 2<sup><i>n</i>(<i>n</i>+1)/2</sup>: the diagonal is free, 2<sup><i>n</i></sup>, and each of the <sup><i>n</i></sup>C<sub>2</sub> = <frac><num><i>n</i>(<i>n</i> − 1)</num><den>2</den></frac> off-diagonal couples {(<i>a</i>, <i>b</i>), (<i>b</i>, <i>a</i>)} is one decision, both in or both out. Reflexive and symmetric 2<sup><i>n</i>(<i>n</i>−1)/2</sup>: freeze the diagonal too. Antisymmetric 2<sup><i>n</i></sup> · 3<sup><i>n</i>(<i>n</i>−1)/2</sup>: the diagonal is free, and each couple has three legal states, neither, (<i>a</i>, <i>b</i>) only or (<i>b</i>, <i>a</i>) only, “both in” being forbidden. On the grid: kill the diagonal for <i>n</i><sup>2</sup> − <i>n</i>, take the diagonal plus the upper triangle for <frac><num><i>n</i>(<i>n</i> + 1)</num><den>2</den></frac>, the upper triangle alone for <frac><num><i>n</i>(<i>n</i> − 1)</num><den>2</den></frac>',
    why: 'For <i>n</i> = 4: 4096 reflexive, 1024 symmetric, 64 both and 11664 antisymmetric, of 2<sup>16</sup> = 65536; the reflexive fraction is <frac><num>1</num><den>16</den></frac>, each frozen diagonal switch halving the population.',
    say: 'Symmetric ties the couple, antisymmetric bans the couple, reflexive freezes the diagonal.',
  },
  // pp. 135–136, 138, 142, 145
  {
    topic: 3,
    kind: 'remember',
    q: 'Why is congruence modulo <i>m</i> an equivalence relation on ℤ, and what are its classes?',
    a: '<i>R</i> = {(<i>a</i>, <i>b</i>) ∶ <i>a</i> − <i>b</i> is divisible by <i>m</i>}. Reflexive: <i>a</i> − <i>a</i> = 0 = <i>m</i> · 0. Symmetric: <i>a</i> − <i>b</i> = <i>mk</i> gives <i>b</i> − <i>a</i> = <i>m</i>(−<i>k</i>). Transitive: <i>a</i> − <i>b</i> = <i>mk</i> and <i>b</i> − <i>c</i> = <i>ml</i> give <i>a</i> − <i>c</i> = <i>m</i>(<i>k</i> + <i>l</i>). The class of <i>r</i> is [<i>r</i>] = {<i>mk</i> + <i>r</i> ∶ <i>k</i> ∈ ℤ}, and since every integer leaves exactly one remainder in {0, 1, …, <i>m</i> − 1}, there are exactly <i>m</i> classes [0], [1], …, [<i>m</i> − 1], partitioning ℤ. For an infinite set defined by a rule you cannot list pairs: argue algebraically like this, from a general (<i>a</i>, <i>b</i>) ∈ <i>R</i>',
    why: 'Modulo 4, [3] = {4<i>k</i> + 3 ∶ <i>k</i> ∈ ℤ} = {…, −5, −1, 3, 7, 11, …}, one of 4 classes; modulo 5, [5] = [0] and [−1] = [4]: different labels, same class.',
    say: null,
  },
  // pp. 131, 133, 138, 142, 145
  {
    topic: 3,
    kind: 'remember',
    q: 'What is the inverse relation <i>R</i><sup>−1</sup>, and what are its domain and range?',
    a: '<i>R</i><sup>−1</sup> = {(<i>b</i>, <i>a</i>) ∶ (<i>a</i>, <i>b</i>) ∈ <i>R</i>} ⊆ <i>B</i> × <i>A</i>: <i>R</i> with every arrow reversed, as “is the child of” reverses “is the father of”. Nothing is added and nothing dropped, so <i>n</i>(<i>R</i><sup>−1</sup>) = <i>n</i>(<i>R</i>), and (<i>R</i><sup>−1</sup>)<sup>−1</sup> = <i>R</i>. Swap rather than recompute: Dom(<i>R</i><sup>−1</sup>) = Range(<i>R</i>) and Range(<i>R</i><sup>−1</sup>) = Dom(<i>R</i>). It doubles as a test: <i>R</i> is symmetric ⟺ <i>R</i> = <i>R</i><sup>−1</sup>, and antisymmetric ⟺ <i>R</i> ∩ <i>R</i><sup>−1</sup> ⊆ <i>I</i><sub><i>A</i></sub>, where <i>I</i><sub><i>A</i></sub> = {(<i>a</i>, <i>a</i>) ∶ <i>a</i> ∈ <i>A</i>} is the identity relation',
    why: '<i>R</i> = {(1, 2), (2, 3), (1, 4)} from {1, 2} to {2, 3, 4} has <i>R</i><sup>−1</sup> = {(2, 1), (3, 2), (4, 1)}, with domain {2, 3, 4} and range {1, 2}.',
    say: null,
  },
  // pp. 131, 134, 143–145
  {
    topic: 3,
    kind: 'mixup',
    q: 'Is antisymmetric the same as “not symmetric”?',
    a: 'No: they are independent conditions. The identity relation <i>I</i><sub><i>A</i></sub> is both symmetric and antisymmetric, and so is the empty relation on a non-empty set, while {(1, 2), (2, 1), (1, 3)} on {1, 2, 3} is neither. Antisymmetry is a ban on two-way streets between distinct elements, nothing more, so it holds until a witness against it turns up. “Divides” is antisymmetric on ℕ but not on ℤ, since 2 ∣ −2 and −2 ∣ 2 but 2 ≠ −2',
    why: '≤ on ℝ is reflexive, antisymmetric and transitive, but not symmetric: 2 ≤ 3 while 3 ≰ 2.',
    say: null,
  },
  // pp. 140–141, 144
  {
    topic: 3,
    kind: 'mistake',
    q: 'On <i>A</i> = {1, 2, 3}, <i>R</i> = {(1, 1), (2, 2), (1, 2), (2, 1)} is symmetric and transitive. Is it an equivalence relation?',
    a: 'No: (3, 3) ∉ <i>R</i>, so it is not reflexive. The famous one-line “proof” that symmetry and transitivity force reflexivity (take any <i>b</i> with (<i>a</i>, <i>b</i>) ∈ <i>R</i>, so (<i>b</i>, <i>a</i>) ∈ <i>R</i>, so (<i>a</i>, <i>a</i>) ∈ <i>R</i>) silently assumes such a <i>b</i> exists, and 3 is related to nothing at all. The honest statement adds that every element of <i>A</i> is related to at least one element. This is the single most examined misconception in the topic (the book’s estimate from past papers, not official figures): always check the diagonal separately and count it, exactly <i>n</i>(<i>A</i>) pairs',
    why: 'On the smaller set {1, 2} the same <i>R</i> is the universal relation, an equivalence relation: reflexivity is always relative to the set you declare.',
    say: null,
  },
  // pp. 131, 137, 144
  {
    topic: 3,
    kind: 'mistake',
    q: 'On <i>A</i> = {1, 2, 3}, is <i>R</i> = {(1, 2)} transitive?',
    a: 'Yes, vacuously: there is no chain (<i>a</i>, <i>b</i>), (<i>b</i>, <i>c</i>) inside it to close, and transitivity fails only when a chain exists and does not close. With more than five pairs, staring will miss a chain: sort the pairs by first coordinate, then for each pair (<i>a</i>, <i>b</i>) scan only the pairs starting with <i>b</i>. In counting, freezing a switch divides the count by 2 rather than subtracting 1: reflexive relations number 2<sup><i>n</i><sup>2</sup>−<i>n</i></sup>, not 2<sup><i>n</i><sup>2</sup></sup> − <i>n</i>, so for <i>n</i> = 2 there are 4, not 14',
    why: '{(1, 1), (2, 2), (3, 3), (1, 2), (2, 3)} is reflexive only: (1, 2) has no (2, 1), and the chain (1, 2), (2, 3) needs the absent (1, 3).',
    say: null,
  },
  // pp. 134, 141–142, 144–145
  {
    topic: 3,
    kind: 'shortcut',
    q: 'How many equivalence relations are there on {1, 2, 3}, and how many contain (1, 2)? The fast way?',
    a: 'Whenever “equivalence relation” appears in a counting question, switch immediately to counting partitions: transitivity ties distant switches together, so no power-of-two formula exists. A 3-element set splits as 1 + 1 + 1 (one way), 2 + 1 (three ways) or 3 (one way): 5 equivalence relations, <i>B</i><sub>3</sub> = 5, and <i>B</i><sub>4</sub> = 15 is worth knowing cold. A relation contains (1, 2) exactly when 1 and 2 share a block, {1, 2}, {3} or {1, 2, 3}: 2. For property checks, spend the first ten seconds on the diagonal and the next ten on one chain',
    why: 'On {1, 2, 3, 4}, the equivalence relations containing (1, 2) and (3, 4) keep the blocks {1, 2} and {3, 4} separate or merge them: 2.',
    say: null,
  },

  // ── Additional F · The vertical line test, stated properly ──
  // pp. 154–156
  {
    topic: 4,
    kind: 'remember',
    q: 'What does the vertical line test say, stated so it survives a follow-up question?',
    a: 'For a relation <i>S</i> ⊆ ℝ × ℝ, let <i>m</i>(<i>a</i>) count the points of <i>S</i> on the vertical line <i>x</i> = <i>a</i>. If <i>m</i>(<i>a</i>) ≤ 1 for every real <i>a</i>, <i>S</i> is a function, with domain {<i>a</i> ∈ ℝ ∶ <i>m</i>(<i>a</i>) = 1}, its shadow on the <i>x</i>-axis. If <i>m</i>(<i>a</i>) = 1 for every <i>a</i> in a declared set <i>A</i>, <i>S</i> is a function on <i>A</i>: <i>m</i>(<i>a</i>) ≥ 1 is totality, <i>m</i>(<i>a</i>) ≤ 1 single-valuedness. If <i>m</i>(<i>a</i>) ≥ 2 for even one <i>a</i>, <i>S</i> is not a function of <i>x</i>, and one witness settles it. <i>m</i>(<i>a</i>) = 0 is not a fault: it says only that <i>a</i> is outside the domain',
    why: '<i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> = 25 fails, with <i>y</i> = ±4 at <i>x</i> = 3; with <i>y</i> ≥ 0 added it is a function, domain [−5, 5], range [0, 5].',
    say: null,
  },
  // pp. 154–156
  {
    topic: 4,
    kind: 'remember',
    q: 'How do you run the test with no picture, and on a rule given in clauses?',
    a: 'Hold <i>x</i> fixed at a general value, solve the defining equation for <i>y</i> and count the real solutions. An even power of <i>y</i>, a |<i>y</i>| or a ± is the usual source of a second solution, while anything done to <i>x</i> alone (squares, moduli, floors) only reshapes the domain and range: <i>x</i> = <i>y</i><sup>3</sup> and <i>x</i><sup>2</sup> = 4<i>y</i> are functions, 2<i>x</i> + 3|<i>y</i>| = 6 and |<i>x</i>| + |<i>y</i>| = 1 are not. A rule in clauses is a function precisely when the clauses agree wherever their intervals overlap; where two disagree, that single <i>x</i> has <i>m</i>(<i>x</i>) = 2',
    why: '<i>x</i><sup>2</sup> on [0, 3] with 3<i>x</i> on [3, 10] agree at 3, both giving 9: a function. <i>x</i><sup>2</sup> on [0, 2] with 3<i>x</i> on [2, 10] give 4 and 6 at 2: not a function.',
    say: null,
  },
  // p. 156
  {
    topic: 4,
    kind: 'mistake',
    q: 'Is the range of <i>y</i> = sgn(<i>x</i><sup>2</sup> + 1) the set {−1, 0, 1}?',
    a: 'No: {1}. <i>x</i><sup>2</sup> + 1 > 0 for every real <i>x</i>, so <i>y</i> is the constant function 1; answering {−1, 0, 1} from memory of the signum range is the trap. Likewise <i>y</i> = |<i>x</i>| − <i>x</i> is 0 for <i>x</i> ≥ 0 and −2<i>x</i> for <i>x</i> < 0: a function with range [0, ∞)',
    why: '<i>y</i><sup>2</sup> = 4<i>x</i> does not define <i>y</i> as a function of <i>x</i>: at <i>x</i> = 1, <i>y</i> = ±2.',
    say: null,
  },

  // ── Additional G · Composition of functions and the domain of a composite ──
  // pp. 157–159
  {
    topic: 5,
    kind: 'remember',
    q: 'What is <i>g</i> ∘ <i>f</i>, and what is its domain?',
    a: '(<i>g</i> ∘ <i>f</i>)(<i>x</i>) = <i>g</i>(<i>f</i>(<i>x</i>)), “<i>g</i> after <i>f</i>”: the inner function acts first, even though it is written second. Dom(<i>g</i> ∘ <i>f</i>) = {<i>x</i> ∈ Dom(<i>f</i>) ∶ <i>f</i>(<i>x</i>) ∈ Dom(<i>g</i>)}: <i>x</i> must be legal for <i>f</i>, and the number <i>f</i>(<i>x</i>) must be legal for <i>g</i>. Write down both domains, solve <i>f</i>(<i>x</i>) ∈ Dom(<i>g</i>), intersect with Dom(<i>f</i>), and only now simplify the formula: reading the domain off the simplified formula is the single most-punished error (the book’s estimate from past papers, not official figures). Composition is not commutative but is associative, and <i>f</i> ∘ <i>I</i> = <i>I</i> ∘ <i>f</i> = <i>f</i> on Dom(<i>f</i>)',
    why: 'With <i>f</i>(<i>x</i>) = √(<i>x</i> − 1) and <i>g</i>(<i>x</i>) = <frac><num>1</num><den><i>x</i> − 3</den></frac>: Dom(<i>g</i> ∘ <i>f</i>) = [1, ∞) ∖ {10}, since √(<i>x</i> − 1) ≠ 3, and Dom(<i>f</i> ∘ <i>g</i>) = (3, 4].',
    say: null,
  },
  // pp. 158–159
  {
    topic: 5,
    kind: 'mistake',
    q: 'With <i>f</i>(<i>x</i>) = √<i>x</i> and <i>g</i>(<i>x</i>) = <i>x</i><sup>2</sup>, are <i>g</i> ∘ <i>f</i> and <i>f</i> ∘ <i>g</i> both the identity?',
    a: 'No. (<i>g</i> ∘ <i>f</i>)(<i>x</i>) = (√<i>x</i>)<sup>2</sup> = <i>x</i>, but on [0, ∞) only, since <i>x</i> had to survive the root first: the identity restricted to [0, ∞), not the identity on ℝ. (<i>f</i> ∘ <i>g</i>)(<i>x</i>) = √(<i>x</i><sup>2</sup>) = |<i>x</i>| on ℝ, not <i>x</i>, since the square root returns the non-negative root. They differ in domain and in value, agreeing on [0, ∞) and nowhere else: at −4, <i>f</i> ∘ <i>g</i> gives 4 while <i>g</i> ∘ <i>f</i> is not even defined',
    why: 'With <i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> − 1 and <i>g</i>(<i>x</i>) = √<i>x</i>, (<i>f</i> ∘ <i>g</i>)(<i>x</i>) = <i>x</i> − 1 has domain [0, ∞), not ℝ.',
    say: null,
  },
  // pp. 158–159
  {
    topic: 5,
    kind: 'remember',
    q: 'For <i>f</i>(<i>x</i>) = <frac><num>1</num><den>1 − <i>x</i></den></frac>, what is <i>f</i> ∘ <i>f</i> ∘ <i>f</i>, and what is <i>f</i><sup>2026</sup>(2)?',
    a: 'Dom(<i>f</i>) = ℝ ∖ {1}. <i>f</i><sup>2</sup>(<i>x</i>) = <frac><num><i>x</i> − 1</num><den><i>x</i></den></frac>, and <i>f</i>(<i>x</i>) = 1 at <i>x</i> = 0 removes one more point: domain ℝ ∖ {0, 1}. Then <i>f</i><sup>3</sup>(<i>x</i>) = <i>x</i>, with nothing more removed, since <frac><num><i>x</i> − 1</num><den><i>x</i></den></frac> = 1 never happens: <i>f</i><sup>3</sup> is the identity on ℝ ∖ {0, 1}. As 2026 = 3 × 675 + 1, <i>f</i><sup>2026</sup>(2) = <i>f</i>(2) = −1, and the cycle 2 → −1 → <frac><num>1</num><den>2</den></frac> → 2 confirms it. The domain shrank once and then stopped: composites lose points only while new inputs are still being blocked',
    why: '<i>f</i>(<i>x</i>) = <frac><num><i>x</i></num><den><i>x</i> − 1</den></frac> gives (<i>f</i> ∘ <i>f</i>)(<i>x</i>) = <i>x</i> on ℝ ∖ {1}: <frac><num><i>x</i></num><den><i>x</i> − 1</den></frac> = 1 has no solution, so nothing extra is removed.',
    say: null,
  },

  // ── Additional H · Even and odd functions, and the work they save ──
  // pp. 160–162
  {
    topic: 6,
    kind: 'remember',
    q: 'When is a function even or odd, and what follows at once?',
    a: 'First the domain must be symmetric about 0, <i>x</i> ∈ <i>D</i> ⇒ −<i>x</i> ∈ <i>D</i>; otherwise the function is neither, whatever the formula looks like, as <i>x</i><sup>2</sup> on [1, 3]. Even: <i>f</i>(−<i>x</i>) = <i>f</i>(<i>x</i>) for all <i>x</i> ∈ <i>D</i>, a graph unchanged by reflection in the <i>y</i>-axis. Odd: <i>f</i>(−<i>x</i>) = −<i>f</i>(<i>x</i>), a graph unchanged by a half-turn about the origin, and if 0 ∈ <i>D</i> then <i>f</i>(0) = 0. The only function both even and odd is the zero function on a symmetric domain, and <i>f</i>(|<i>x</i>|) is always even. Most functions are neither; to say so, produce one <i>x</i> at which both comparisons fail',
    why: '<i>x</i><sup>3</sup> + <i>x</i><sup>2</sup> is neither: <i>f</i>(1) = 2 and <i>f</i>(−1) = 0, which is neither 2 nor −2.',
    say: null,
  },
  // pp. 161, 164
  {
    topic: 6,
    kind: 'remember',
    q: 'How does parity combine under sums, products, quotients and composition, and how does any <i>f</i> split?',
    a: 'Even with even gives even every time. Odd with odd: <i>f</i> ± <i>g</i> and <i>f</i> ∘ <i>g</i> are odd, but <i>fg</i> and <frac><num><i>f</i></num><den><i>g</i></den></frac> are even, the two sign flips cancelling as (−<i>x</i>)(−<i>x</i>) = <i>x</i><sup>2</sup>. Even with odd, either way round: the sum is neither in general, product and quotient odd, composite even. In a composite look at the inner function first: an even inner makes it even whatever the outer, an odd inner copies the parity of the outer. Every <i>f</i> on a symmetric domain splits in exactly one way into the even part <frac><num><i>f</i>(<i>x</i>) + <i>f</i>(−<i>x</i>)</num><den>2</den></frac> plus the odd part <frac><num><i>f</i>(<i>x</i>) − <i>f</i>(−<i>x</i>)</num><den>2</den></frac>',
    why: '<i>x</i><sup>3</sup> + 3<i>x</i><sup>2</sup> − 2<i>x</i> + 5 has even part 3<i>x</i><sup>2</sup> + 5 and odd part <i>x</i><sup>3</sup> − 2<i>x</i>.',
    say: null,
  },
  // pp. 161–164
  {
    topic: 6,
    kind: 'remember',
    q: 'How does parity halve the work of finding the range of <i>f</i>(<i>x</i>) = √(<i>x</i><sup>2</sup> + <i>x</i> + 1) − √(<i>x</i><sup>2</sup> − <i>x</i> + 1)?',
    a: 'Both radicands are positive for every real <i>x</i>, so <i>D</i> = ℝ, and replacing <i>x</i> by −<i>x</i> swaps them: <i>f</i> is odd. The range of an odd function is symmetric about 0, so find it on [0, ∞) and reflect it through 0, the biggest single saving in the additional topic. Rationalising, <i>f</i>(<i>x</i>) = <frac><num>2<i>x</i></num><den><i>A</i> + <i>B</i></den></frac>, with <i>A</i> and <i>B</i> the two roots, and <i>A</i> + <i>B</i> > 2<i>x</i> for <i>x</i> > 0, so <i>f</i> climbs from 0 towards 1 without reaching it: [0, 1) on [0, ∞), and (−1, 1) in all. The other payoffs: sketch an even or odd function on [0, ∞) only; an even function’s range is its range on the non-negative half; the roots of <i>f</i>(<i>x</i>) = 0 are symmetric about 0',
    why: '<i>g</i>(<i>x</i>) = <i>x</i>|<i>x</i>| is odd and equals <i>x</i><sup>2</sup> on [0, ∞), with range [0, ∞); reflecting gives (−∞, 0], so its range is ℝ.',
    say: null,
  },

  // ── Additional I · Periodicity of algebraic (non-trigonometric) functions ──
  // pp. 164–166, 168
  {
    topic: 7,
    kind: 'remember',
    q: 'When is a function periodic, and are {<i>x</i>}, [<i>x</i>] and a constant periodic?',
    a: '<i>f</i> is periodic if some <i>T</i> > 0 gives, for every <i>x</i> in the domain, <i>x</i> + <i>T</i> in the domain and <i>f</i>(<i>x</i> + <i>T</i>) = <i>f</i>(<i>x</i>); the smallest positive period, if one exists, is the fundamental period. {<i>x</i>} = <i>x</i> − [<i>x</i>] has fundamental period 1: no 0 < <i>T</i> < 1 works, since {<i>T</i>} = <i>T</i> while {0} = 0. [<i>x</i>] is not periodic: it repeats its shape, not its values. No non-constant monotone function is periodic, which kills <i>x</i>, <i>x</i><sup>3</sup>, √<i>x</i> and 2<i>x</i> + 5 in one stroke. A constant is periodic with every <i>T</i> > 0 but has no fundamental period: for <i>f</i>(<i>x</i>) = 7 the answer is “there is none”, not 1',
    why: '(−1)<sup>[<i>x</i>]</sup> has fundamental period 2, while [<i>x</i>] + {<i>x</i>} = <i>x</i> is strictly increasing and so not periodic.',
    say: null,
  },
  // pp. 165–168
  {
    topic: 7,
    kind: 'remember',
    q: 'What do scaling the input and adding two periodic functions do to a period?',
    a: 'If <i>f</i> has period <i>T</i>, then <i>f</i>(<i>ax</i> + <i>b</i>) with <i>a</i> ≠ 0 has period <frac><num><i>T</i></num><den>|<i>a</i>|</den></frac>, fundamental if <i>T</i> was: {3<i>x</i> − 1} has <frac><num>1</num><den>3</den></frac>, {<frac><num><i>x</i></num><den>4</den></frac>} has 4. If <i>f</i> and <i>g</i> have periods <i>T</i><sub>1</sub> and <i>T</i><sub>2</sub> with a rational ratio, LCM(<i>T</i><sub>1</sub>, <i>T</i><sub>2</sub>) is a period of <i>f</i> ± <i>g</i> and of <i>fg</i>, but it need not be the fundamental one: always test the obvious smaller candidates. An irrational ratio of the fundamental periods gives no common period, and for the usual functions the sum is not periodic. An outer operation never lengthens a period: {<i>x</i>}<sup>2</sup>, √{<i>x</i>} and sgn({<i>x</i>}) all have period 1',
    why: '{<frac><num><i>x</i></num><den>2</den></frac>} + {<frac><num><i>x</i></num><den>3</den></frac>} has fundamental period 6, since <i>f</i>(<i>T</i>) = <i>f</i>(0) = 0 forces both fractional parts to vanish; {<i>x</i>} + {2<i>x</i>} has 1, as <i>f</i>(<i>T</i>) = <i>f</i>(0) = 0 forces <i>T</i> to be an integer.',
    say: null,
  },
  // pp. 167–168
  {
    topic: 7,
    kind: 'remember',
    q: 'If <i>f</i>(<i>x</i> + <i>a</i>) = <frac><num>1</num><den>2</den></frac> + √(<i>f</i>(<i>x</i>) − (<i>f</i>(<i>x</i>))<sup>2</sup>) for every real <i>x</i>, with <i>a</i> > 0 fixed, why is <i>f</i> periodic?',
    a: 'First pin down the values: the root needs 0 ≤ <i>f</i>(<i>x</i>) ≤ 1, and the right side is <frac><num>1</num><den>2</den></frac> plus a non-negative number, so <frac><num>1</num><den>2</den></frac> ≤ <i>f</i>(<i>y</i>) ≤ 1 for every real <i>y</i>; without this step the proof cannot be finished. Applying the relation twice gives <i>f</i>(<i>x</i> + 2<i>a</i>) = <frac><num>1</num><den>2</den></frac> + |<i>f</i>(<i>x</i>) − <frac><num>1</num><den>2</den></frac>|, and since <i>f</i>(<i>x</i>) ≥ <frac><num>1</num><den>2</den></frac> this is <i>f</i>(<i>x</i>): 2<i>a</i> is a period. It is “a period”, not the fundamental period: the constant solution <i>c</i> = <frac><num>2 + √2</num><den>4</den></frac> has no fundamental period at all',
    why: 'The surd opens as a square: with <i>u</i><sup>2</sup> = <i>f</i>(<i>x</i>) − <i>f</i>(<i>x</i>)<sup>2</sup>, <frac><num>1</num><den>4</den></frac> − <i>u</i><sup>2</sup> = (<i>f</i>(<i>x</i>) − <frac><num>1</num><den>2</den></frac>)<sup>2</sup>.',
    say: null,
  },

  // ── Additional J · Graph transformations of the standard function library ──
  // pp. 168–169, 172
  {
    topic: 8,
    kind: 'remember',
    q: 'What do <i>f</i>(<i>x</i>) + <i>k</i>, <i>f</i>(<i>x</i> − <i>h</i>), <i>c</i> <i>f</i>(<i>x</i>), <i>f</i>(<i>cx</i>), −<i>f</i>(<i>x</i>) and <i>f</i>(−<i>x</i>) do to a graph?',
    a: 'With <i>k</i>, <i>h</i>, <i>c</i> > 0: <i>f</i>(<i>x</i>) ± <i>k</i> shifts up or down <i>k</i>, since outside the bracket a move does what it says. <i>f</i>(<i>x</i> − <i>h</i>) shifts right <i>h</i> and <i>f</i>(<i>x</i> + <i>h</i>) left <i>h</i>: inside the bracket, the opposite sign. <i>c</i> <i>f</i>(<i>x</i>) stretches vertically by <i>c</i>, multiplying the <i>y</i>-values; <i>f</i>(<i>cx</i>) squashes horizontally by <i>c</i>, dividing the <i>x</i>-values (each the reverse if <i>c</i> < 1). −<i>f</i>(<i>x</i>) reflects in the <i>x</i>-axis, <i>f</i>(−<i>x</i>) in the <i>y</i>-axis. Inside the bracket everything is backwards and happens first: factor <i>f</i>(<i>cx</i> + <i>d</i>) = <i>f</i>(<i>c</i>(<i>x</i> + <frac><num><i>d</i></num><den><i>c</i></den></frac>)), squash by <i>c</i>, then shift left <frac><num><i>d</i></num><den><i>c</i></den></frac>, not <i>d</i>',
    why: '2 + <frac><num>1</num><den><i>x</i> − 3</den></frac> is <frac><num>1</num><den><i>x</i></den></frac> shifted right 3 and then up 2, with asymptotes <i>x</i> = 3 and <i>y</i> = 2.',
    say: null,
  },
  // pp. 170–172
  {
    topic: 8,
    kind: 'remember',
    q: 'Starting from <i>y</i> = |<i>x</i>|, what are the vertex, <i>x</i>-intercepts, arm slopes and range of <i>y</i> = 3 − |2<i>x</i> − 4|?',
    a: 'Factor inside the modulus first, the whole trick: |2<i>x</i> − 4| = 2|<i>x</i> − 2|, so <i>y</i> = 3 − 2|<i>x</i> − 2|. Shift right 2, stretch vertically by 2, reflect in the <i>x</i>-axis, shift up 3: an inverted V with vertex (2, 3), the maximum, and arms of slope +2 and −2, not ±1. The <i>x</i>-intercepts solve |<i>x</i> − 2| = <frac><num>3</num><den>2</den></frac>: <i>x</i> = <frac><num>1</num><den>2</den></frac> and <i>x</i> = <frac><num>7</num><den>2</den></frac>. Range (−∞, 3]. Reading 2<i>x</i> − 4 as a shift of 4 gives the wrong vertex and the wrong slopes',
    why: '<i>y</i> = |<i>x</i> − 1| − 2 has vertex (1, −2), <i>x</i>-intercepts −1 and 3, and range [−2, ∞).',
    say: null,
  },
  // pp. 169–172
  {
    topic: 8,
    kind: 'mixup',
    q: '|<i>f</i>(<i>x</i>)|, <i>f</i>(|<i>x</i>|) or |<i>y</i>| = <i>f</i>(<i>x</i>): which folds about which axis?',
    a: '|<i>f</i>(<i>x</i>)| keeps everything on or above the <i>x</i>-axis and flips the part below it upward: a fold about the <i>x</i>-axis. <i>f</i>(|<i>x</i>|) deletes the <i>x</i> < 0 part and copies the <i>x</i> ≥ 0 part reflected into <i>x</i> < 0: a fold about the <i>y</i>-axis, always even. |<i>y</i>| = <i>f</i>(<i>x</i>) keeps only where <i>f</i>(<i>x</i>) ≥ 0 and draws <i>f</i> and its mirror −<i>f</i> there: not a function. A count of solutions of |<i>f</i>(<i>x</i>)| = <i>k</i> is a horizontal line sliding over the folded graph: for <i>x</i><sup>2</sup> − 4<i>x</i> + 3, a hump of height 1, there are 0 solutions for <i>k</i> < 0, 2 at <i>k</i> = 0, 4 for 0 < <i>k</i> < 1, 3 at <i>k</i> = 1 and 2 for <i>k</i> > 1',
    why: '<i>y</i> = <i>x</i><sup>2</sup> − 2|<i>x</i>| − 3 is even: roots ±3, twin minima −4 at <i>x</i> = ±1, a local maximum −3 at <i>x</i> = 0, range [−4, ∞).',
    say: null,
  },

  // ── Additional K · Functional equations at Class-11 level ──
  // pp. 172–175
  {
    topic: 9,
    kind: 'remember',
    q: 'What are the three techniques for solving a functional equation?',
    a: 'Strategic substitution: the equation holds for all <i>x</i> and <i>y</i>, so choose them; <i>x</i> = <i>y</i> = 0 first when 0 is in the domain, to get <i>f</i>(0), then <i>y</i> = 0, <i>y</i> = −<i>x</i> for parity, <i>y</i> = <i>x</i> for a doubling relation, <i>y</i> = 1 for a recursion, <i>y</i> = <frac><num>1</num><den><i>x</i></den></frac> when the equation involves products. The paired equation: if <i>f</i>(<i>x</i>) is tied to <i>f</i>(<i>u</i>(<i>x</i>)) for an involution, <i>u</i>(<i>u</i>(<i>x</i>)) = <i>x</i>, such as <frac><num>1</num><den><i>x</i></den></frac>, −<i>x</i>, 1 − <i>x</i> or <i>a</i> − <i>x</i>, replace <i>x</i> by <i>u</i>(<i>x</i>) and solve the pair as a 2 × 2 linear system. Recursion: from <i>f</i>(<i>x</i> + 1) in terms of <i>f</i>(<i>x</i>), iterate and sum the increments with the AP or GP formulas. Always substitute your answer back',
    why: '<i>f</i>(<i>x</i>) + 2<i>f</i>(<frac><num>1</num><den><i>x</i></den></frac>) = 3<i>x</i>, paired with its <frac><num>1</num><den><i>x</i></den></frac> version, gives <i>f</i>(<i>x</i>) = <frac><num>2</num><den><i>x</i></den></frac> − <i>x</i>; it is odd, so <i>f</i>(<i>x</i>) = <i>f</i>(−<i>x</i>) means <i>f</i>(<i>x</i>) = 0, and <i>x</i> = ±√2.',
    say: null,
  },
  // pp. 173, 175–176
  {
    topic: 9,
    kind: 'remember',
    q: 'What are the four standard functional equations and their solutions, and when may you quote them?',
    a: 'On ℝ, <i>f</i>(<i>x</i> + <i>y</i>) = <i>f</i>(<i>x</i>) + <i>f</i>(<i>y</i>) gives <i>f</i>(<i>x</i>) = <i>kx</i> with <i>k</i> = <i>f</i>(1), and <i>f</i>(<i>x</i> + <i>y</i>) = <i>f</i>(<i>x</i>) <i>f</i>(<i>y</i>) gives <i>a</i><sup><i>x</i></sup> with <i>a</i> = <i>f</i>(1) > 0, or <i>f</i> ≡ 0. On (0, ∞), <i>f</i>(<i>xy</i>) = <i>f</i>(<i>x</i>) + <i>f</i>(<i>y</i>) gives <i>k</i> ln <i>x</i>, and <i>f</i>(<i>xy</i>) = <i>f</i>(<i>x</i>) <i>f</i>(<i>y</i>) gives <i>x</i><sup><i>c</i></sup> for a real constant <i>c</i>, or <i>f</i> ≡ 0. Each needs a mild regularity hypothesis (continuity at one point, monotonicity, or boundedness on an interval): state it when you quote them. Never quote a standard form when the equation carries an extra term',
    why: '<i>f</i>(<i>x</i> + <i>y</i>) = <i>f</i>(<i>x</i>)<i>f</i>(<i>y</i>) with <i>f</i>(1) = 3 gives <i>f</i>(<i>n</i>) = 3<sup><i>n</i></sup>, so <i>f</i>(1) + <i>f</i>(2) + <i>f</i>(3) + <i>f</i>(4) + <i>f</i>(5) = 363.',
    say: null,
  },
  // pp. 173–175
  {
    topic: 9,
    kind: 'mistake',
    q: 'If <i>f</i>(<i>x</i> + <i>y</i>) = <i>f</i>(<i>x</i>) + <i>f</i>(<i>y</i>) + <i>xy</i> for all real <i>x</i>, <i>y</i>, with <i>f</i> continuous and <i>f</i>(1) = 3, is <i>f</i>(<i>x</i>) = 3<i>x</i>?',
    a: 'No: the +<i>xy</i> means the first standard form does not apply. <i>x</i> = <i>y</i> = 0 gives <i>f</i>(0) = 0, and <i>y</i> = 1 gives the recursion <i>f</i>(<i>x</i> + 1) = <i>f</i>(<i>x</i>) + 3 + <i>x</i>, so <i>f</i>(<i>n</i>) = 3<i>n</i> + <frac><num><i>n</i>(<i>n</i> − 1)</num><den>2</den></frac> and <i>f</i>(10) = 75. Since <frac><num>1</num><den>2</den></frac>(<i>x</i> + <i>y</i>)<sup>2</sup> − <frac><num>1</num><den>2</den></frac><i>x</i><sup>2</sup> − <frac><num>1</num><den>2</den></frac><i>y</i><sup>2</sup> = <i>xy</i>, try <frac><num>1</num><den>2</den></frac><i>x</i><sup>2</sup> + <i>cx</i>: <i>f</i>(1) = 3 pins <i>c</i> = <frac><num>5</num><den>2</den></frac>, so <i>f</i>(<i>x</i>) = <frac><num><i>x</i><sup>2</sup> + 5<i>x</i></num><den>2</den></frac>, the only solution under the usual regularity hypothesis',
    why: 'With +2<i>xy</i> and <i>f</i>(1) = 2 instead, <i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> + <i>x</i> and <i>f</i>(5) = 30: the +2<i>xy</i> is what <i>x</i><sup>2</sup> produces.',
    say: null,
  },
];
