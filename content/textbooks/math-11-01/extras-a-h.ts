import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 1, Additional Topics A to H, word for word from the Class 11 Mathematics
 * Master Reference (October 2026 edition): the supplement's Part 1, "Addendum to
 * Subtopics 01–04" (pp. 57–73). The supplement's opening text (p. 57, before Part 1's
 * heading, which is not copied) is set at the head of Additional topic A's
 * Introduction, with its "Part 1" / "Part 2" / "Subtopic 0N" named as the app names
 * them. Then A Is this set finite or infinite? (pp. 57–59), B Subsets of a prescribed
 * size (pp. 59–60), C The iterated power set (pp. 61–62), D Unbounded (infinite)
 * intervals (pp. 62–63), E Counting ordered pairs of subsets (pp. 63–65; its answers
 * run onto p. 65), F Three-circle Venn shading and visual proof (pp. 65–67; Figure 1.6,
 * figure page 66, and Figure 1.7, figure page 68, both F's), G Operations on the
 * standard number systems (pp. 67–70; its heading at the foot of p. 67, its method on
 * p. 69) and H Bounds on an unknown overlap (pp. 70–73; its answers end on p. 73,
 * where "Part 2 — New Subtopic" begins: Topic 05, another file).
 *
 * Each addendum's parts follow its own run-in headings: the opening "Extends …" line
 * is the Introduction, then Method (D: Definitions), Worked examples, Practice. Each
 * prints its answers in one block after its practice questions; each is set as that
 * question's answer. Every fraction is stacked (<frac>); the book's binomial
 * coefficient (n over r in round brackets, no rule) is written in the NCERT form
 * ⁿCᵣ, with a "·" where the book set two side by side.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic A · pp. 57–59 ─────────────────────────
  {
    n: 'A',
    title: 'Is this set finite or infinite?',
    extra: true,
    kalam: 'The universe and the direction of the inequality do all the work: exactly the two things you must read before you compute.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Topics 01–04 give you a complete NCERT-level command of Sets. Additional topics A to H and Topic 05 carry that command up to the JEE ceiling. They form two parts, and you should read them at different times.',
      },
      {
        t: 'p',
        html: '<b>Additional topics A to H.</b> Eight compact techniques that the main chapter names, assumes, or promises but barely drills. Each item is one method statement, one or two worked examples, and practice with answers. Read each additional topic straight after the topic it extends:',
      },
      {
        t: 'table',
        title: null,
        head: ['Additional topic', 'Topic', 'Read after'],
        rows: [
          ['Additional topic A', 'Deciding finite vs infinite as a solved problem type', 'Topic 01'],
          ['Additional topic B', 'Subsets of a prescribed size, <sup><i>n</i></sup>C<sub><i>r</i></sub>', 'Topic 02'],
          ['Additional topic C', 'The iterated power set, 2<sup>2<sup><i>n</i></sup></sup>', 'Topic 02'],
          ['Additional topic D', 'Unbounded (infinite) intervals', 'Topic 02'],
          ['Additional topic E', 'Counting ordered pairs of subsets, 3<sup><i>n</i></sup>', 'Topic 02'],
          ['Additional topic F', 'Three-circle Venn shading and visual proof', 'Topic 03'],
          ['Additional topic G', 'Operations on the standard number systems', 'Topic 03'],
          ['Additional topic H', 'Bounds on an unknown overlap', 'Topic 04'],
        ],
      },
      {
        t: 'p',
        html: '<b>Topic 05.</b> A full eight-section topic on families of sets: what happens when the problem hands you not two or three sets but a whole indexed run of them, <i>A</i><sub>1</sub>, <i>A</i><sub>2</sub>, <i>A</i><sub>3</sub>, …. Indexed unions and intersections, the generalised De Morgan and inclusion–exclusion laws, and the double-counting technique that JEE Advanced has returned to for four decades (the book’s estimate from past papers, not official figures). Read it after Topic 04.',
      },
      {
        t: 'p',
        html: 'Extends Topic 01’s parts from Key procedures and logical framework to Practice exercises.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: 'Topic 01’s Procedure C gives the two questions; here is the version you execute under exam pressure.<br>1. <b>Read the universe first</b> (ℕ, 𝕎, ℤ, ℚ, ℝ). The verdict changes with it.<br>2. <b>Does even one element exist?</b> If none, the set is empty, and ∅ is <b>finite</b>, with <i>n</i>(∅) = 0. “Empty” is a special case of finite, never an alternative to it. Writing “empty, so neither finite nor infinite” loses the mark.<br>3. <b>Discrete universe (ℕ, 𝕎, ℤ), condition and universe together bounded on both sides</b> ⇒ finite, and you can usually state <i>n</i> exactly.<br>4. <b>Discrete universe, and the set unbounded in at least one direction once the universe is taken into account</b> ⇒ infinite (in ℕ, <i>x</i> < 100 is bounded below by 1).<br>5. <b>Universe ℚ or ℝ (no gaps between members):</b> any stretch of the line containing two distinct points contains infinitely many, because the mean of any two members lies strictly between them. So every non-degenerate interval is infinite, however short.<br>6. <b>Polynomial equations are the exception:</b> a non-zero polynomial of degree <i>d</i> has at most <i>d</i> roots, so its solution set is finite in any universe.',
      },
      {
        t: 'p',
        html: 'Two families worth memorising as a contrasting pair:',
      },
      {
        t: 'table',
        title: null,
        head: ['Set', 'Verdict', 'Why'],
        rows: [
          ['Divisors of a fixed natural number <i>k</i>', 'Finite', 'Every divisor is at most <i>k</i>: bounded'],
          ['Multiples of a fixed natural number <i>k</i>', 'Infinite', '<i>k</i>, 2<i>k</i>, 3<i>k</i>, … never stops'],
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: 'Classify each as empty, finite (stating <i>n</i>), or infinite.',
        steps: [
          '(i) {<i>x</i> ∈ ℕ ∶ <i>x</i> < 100}, the naturals 1 to 99: <b>finite</b>, <i>n</i> = 99.',
          '(ii) {<i>x</i> ∈ ℤ ∶ <i>x</i> < 100}. Same condition, larger universe: …, −2, −1, 0, …, 99 runs away to the left, so <b>infinite</b>.',
          '(iii) {<i>x</i> ∈ ℝ ∶ 0 < <i>x</i> < 1}, the interval (0, 1): <b>infinite</b> (rule 5).',
          '(iv) {<i>x</i> ∈ ℕ ∶ <i>x</i> divides 1024}. Since 1024 = 2<sup>10</sup>, the divisors are 2<sup>0</sup>, 2<sup>1</sup>, …, 2<sup>10</sup>: <b>finite</b>, <i>n</i> = 11.',
          '(v) {<i>x</i> ∈ ℕ ∶ <i>x</i> is a multiple of 10}: <b>infinite</b>.',
          '(vi) {<i>x</i> ∈ ℝ ∶ <i>x</i><sup>2</sup> + 4 = 0}: no real square is negative, so the set is <b>empty</b>, hence finite with <i>n</i> = 0.',
          '(vii) The set of all lines in a plane parallel to the <i>x</i>-axis, one line for every height <i>c</i> ∈ ℝ: <b>infinite</b>.',
          '(viii) {<i>x</i> ∈ ℚ ∶ 1 < <i>x</i> < 2}: <b>infinite</b>; between any two rationals sits their mean, which is again rational.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main',
        q: 'Classify <i>A</i> = {<i>x</i> ∈ ℤ ∶ <i>x</i><sup>2</sup> ≤ 10000}, <i>B</i> = {<i>x</i> ∈ ℤ ∶ <i>x</i><sup>2</sup> ≥ 10000}, <i>C</i> = {<i>x</i> ∈ ℝ ∶ <i>x</i><sup>2</sup> ≤ 10000}.',
        steps: [
          '<i>A</i>: <i>x</i><sup>2</sup> ≤ 10000 ⟺ −100 ≤ <i>x</i> ≤ 100. Over ℤ that is 100 negatives, 0, and 100 positives: <b>finite</b>, <i>n</i>(<i>A</i>) = 201.',
          '<i>B</i>: <i>x</i><sup>2</sup> ≥ 10000 ⟺ <i>x</i> ≤ −100 or <i>x</i> ≥ 100. Unbounded in both directions: <b>infinite</b>.',
          '<i>C</i>: the same inequality as <i>A</i>, but over ℝ it is the interval [−100, 100]: <b>infinite</b>.',
          'One inequality, three verdicts. The universe and the direction of the inequality do all the work: exactly the two things you must read before you compute.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '{<i>x</i> ∈ ℕ ∶ <i>x</i> is a prime and <i>x</i> < 50}',
            a: 'Finite, <i>n</i> = 15.',
          },
          {
            q: '{<i>x</i> ∈ ℤ ∶ <i>x</i><sup>3</sup> = 8}',
            a: 'Finite, <i>n</i> = 1 (the set is {2}).',
          },
          {
            q: '{<i>x</i> ∈ ℝ ∶ 2 < <i>x</i> < 3}',
            a: 'Infinite.',
          },
          {
            q: '{<i>x</i> ∈ ℕ ∶ <i>x</i><sup>2</sup> < 0}',
            a: 'Empty, hence finite with <i>n</i> = 0.',
          },
          {
            q: '{<i>x</i> ∈ 𝕎 ∶ <i>x</i> ≤ 6}',
            a: 'Finite, <i>n</i> = 7 (the set is {0, 1, 2, 3, 4, 5, 6}).',
          },
          {
            q: '{<i>x</i> ∈ ℚ ∶ <i>x</i><sup>2</sup> = 5}',
            a: 'Empty (finite, <i>n</i> = 0), because √5 is irrational.',
          },
          {
            q: 'The set of all circles in a plane passing through the origin',
            a: 'Infinite.',
          },
          {
            q: '{<i>x</i> ∈ ℤ ∶ |<i>x</i>| > 7}',
            a: 'Infinite.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic B · pp. 59–60 ─────────────────────────
  {
    n: 'B',
    title: 'Subsets of a prescribed size',
    extra: true,
    kalam: 'The habit to build: read the constraint, split into pools, multiply.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Extends Topic 02’s parts from Key definitions, notation and formulas to Practice exercises.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: 'For a set with <i>n</i> elements, the number of subsets having exactly <i>r</i> elements is:',
      },
      {
        t: 'formula',
        kicker: 'Subsets of a prescribed size',
        main: '<sup><i>n</i></sup>C<sub><i>r</i></sub> = <frac><num><i>n</i>!</num><den><i>r</i>!(<i>n</i> − <i>r</i>)!</den></frac>, 0 ≤ <i>r</i> ≤ <i>n</i>',
        legend: ['<i>n</i> = the number of elements available', '<i>r</i> = the size demanded'],
        note: 'If <i>r</i> < 0 or <i>r</i> > <i>n</i>, the count is 0: you cannot choose more elements than exist.',
      },
      {
        t: 'p',
        html: '• <b>Symmetry:</b> <sup><i>n</i></sup>C<sub><i>r</i></sub> = <sup><i>n</i></sup>C<sub><i>n</i>−<i>r</i></sub>. Naming who is in is the same act as naming who is out.<br>• <b>Total:</b> ∑<sub><i>r</i>=0</sub><sup><i>n</i></sup> <sup><i>n</i></sup>C<sub><i>r</i></sub> = 2<sup><i>n</i></sup>, which is the binomial cross-check already used in Topic 02’s Derivation and key procedures part.<br>• <b>Forcing an element in:</b> spend one slot on it and choose the rest from the other <i>n</i> − 1 elements: <sup><i>n</i>−1</sup>C<sub><i>r</i>−1</sub>.<br>• <b>Forcing an element out:</b> ignore it entirely and choose all <i>r</i> from the remaining <i>n</i> − 1: <sup><i>n</i>−1</sup>C<sub><i>r</i></sub>.<br>• <b>Two pools:</b> to take <i>j</i> elements from a pool of size <i>p</i> and <i>r</i> − <i>j</i> from a disjoint pool of size <i>q</i>, multiply: <sup><i>p</i></sup>C<sub><i>j</i></sub> · <sup><i>q</i></sup>C<sub><i>r</i>−<i>j</i></sub>.',
      },
      {
        t: 'p',
        html: '<b>A caveat worth carrying.</b> For <i>n</i> ≥ 1, exactly half of the 2<sup><i>n</i></sup> subsets have an even number of elements and half have an odd number, giving 2<sup><i>n</i>−1</sup> of each; this follows from ∑<sub><i>r</i>=0</sub><sup><i>n</i></sup> (−1)<sup><i>r</i></sup> · <sup><i>n</i></sup>C<sub><i>r</i></sub> = (1 − 1)<sup><i>n</i></sup> = 0. The condition <i>n</i> ≥ 1 is not decoration: for <i>n</i> = 0 the only set is ∅, the alternating sum equals 1, and the number of odd-sized subsets is 0, not 2<sup>−1</sup>.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: 'Let <i>A</i> = {1, 2, 3, 4, 5, 6, 7}. Find the number of subsets of <i>A</i> that have (i) exactly 3 elements, (ii) at most 2 elements, (iii) exactly 3 elements including 1, (iv) exactly 3 elements excluding 1.',
        steps: [
          '(i) <sup>7</sup>C<sub>3</sub> = <frac><num>7 · 6 · 5</num><den>3 · 2 · 1</den></frac> = 35.',
          '(ii) “At most 2” means size 0, 1 or 2: <sup>7</sup>C<sub>0</sub> + <sup>7</sup>C<sub>1</sub> + <sup>7</sup>C<sub>2</sub> = 1 + 7 + 21 = 29.',
          '(iii) Fix 1 as a member, then choose the other 2 from {2, …, 7}: <sup>6</sup>C<sub>2</sub> = 15.',
          '(iv) Choose all 3 from {2, …, 7}: <sup>6</sup>C<sub>3</sub> = 20.',
          '<b>Consistency check:</b> every 3-element subset either contains 1 or does not, and 15 + 20 = 35, matching (i).',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main',
        q: 'From <i>S</i> = {1, 2, …, 9}, how many 5-element subsets contain exactly 3 odd numbers?',
        steps: [
          'Split <i>S</i> into two disjoint pools: odds {1, 3, 5, 7, 9} (five of them) and evens {2, 4, 6, 8} (four of them). “Exactly 3 odd” inside a 5-element subset forces exactly 2 even. The two choices are independent, so multiply.',
          'The habit to build: read the constraint, split into pools, multiply. Adding instead of multiplying is the standard slip.',
        ],
        ans: '<sup>5</sup>C<sub>3</sub> · <sup>4</sup>C<sub>2</sub> = 10 × 6 = 60.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'Number of 4-element subsets of a 10-element set.',
            a: '<sup>10</sup>C<sub>4</sub> = 210.',
          },
          {
            q: 'Number of subsets of {1, …, 6} having at least 4 elements.',
            a: '<sup>6</sup>C<sub>4</sub> + <sup>6</sup>C<sub>5</sub> + <sup>6</sup>C<sub>6</sub> = 15 + 6 + 1 = 22.',
          },
          {
            q: 'Number of 3-element subsets of {1, …, 8} containing both 1 and 2.',
            a: '<sup>6</sup>C<sub>1</sub> = 6.',
          },
          {
            q: 'Find <i>n</i> if <sup><i>n</i></sup>C<sub>2</sub> = 45.',
            a: '<i>n</i> = 10.',
          },
          {
            q: 'Number of subsets of {1, …, 7} having an odd number of elements.',
            a: '2<sup>7−1</sup> = 64.',
          },
          {
            q: 'From {1, 2, …, 10}, the number of 4-element subsets all of whose elements are even.',
            a: 'The evens are {2, 4, 6, 8, 10}, so <sup>5</sup>C<sub>4</sub> = 5.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic C · pp. 61–62 ─────────────────────────
  {
    n: 'C',
    title: 'The iterated power set',
    extra: true,
    kalam: 'To run the formula backwards, peel one exponent at a time: write the given number as a power of 2, equate exponents, repeat.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Extends Topic 02’s Key definitions, notation and formulas part and its Worked examples part.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: 'Apply the rule <i>n</i>[<i>P</i>(<i>X</i>)] = 2<sup><i>n</i>(<i>X</i>)</sup> repeatedly, from the inside outward. With <i>n</i>(<i>A</i>) = <i>n</i>:',
      },
      {
        t: 'formula',
        kicker: 'The iterated power set',
        main: '<i>n</i>[<i>P</i>(<i>A</i>)] = 2<sup><i>n</i></sup><br><i>n</i>[<i>P</i>(<i>P</i>(<i>A</i>))] = 2<sup>2<sup><i>n</i></sup></sup><br><i>n</i>[<i>P</i>(<i>P</i>(<i>P</i>(<i>A</i>)))] = 2<sup>2<sup>2<sup><i>n</i></sup></sup></sup>',
        legend: ['<i>n</i> = <i>n</i>(<i>A</i>)'],
        note: null,
      },
      {
        t: 'p',
        html: '• A tower of exponents is evaluated <b>top down</b>: in 2<sup>2<sup><i>n</i></sup></sup> you compute 2<sup><i>n</i></sup> first, then raise 2 to that.<br>• The conceptual step: the elements of <i>P</i>(<i>P</i>(<i>A</i>)) are themselves sets of subsets of <i>A</i>. If <i>A</i> = {<i>a</i>}, then {∅} and ∅ are two different elements of <i>P</i>(<i>P</i>(<i>A</i>)): the first is a one-element collection, the second is the empty collection.<br>• To run the formula backwards, peel one exponent at a time: write the given number as a power of 2, equate exponents, repeat.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: 'Let <i>A</i> = {<i>a</i>}. Write <i>P</i>(<i>A</i>) and <i>P</i>(<i>P</i>(<i>A</i>)) in full, and verify the count.',
        steps: [
          '<i>P</i>(<i>A</i>) = {∅, {<i>a</i>}}, so <i>n</i>[<i>P</i>(<i>A</i>)] = 2<sup>1</sup> = 2.',
          '<i>P</i>(<i>P</i>(<i>A</i>)) is the set of all subsets of the two-element set <i>P</i>(<i>A</i>):<br><i>P</i>(<i>P</i>(<i>A</i>)) = {∅, {∅}, {{<i>a</i>}}, {∅, {<i>a</i>}}}',
          'That is 4 elements, and the formula predicts 2<sup>2<sup>1</sup></sup> = 2<sup>2</sup> = 4. Confirmed.',
          'Look hard at the four members: each is a set, and ∅ (the empty collection) is a different member from {∅} (the collection containing the empty set). That is the ∈-versus-⊆ distinction of Topic 02 raised one storey.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main',
        q: 'If <i>n</i>[<i>P</i>(<i>P</i>(<i>A</i>))] = 256, find <i>n</i>(<i>A</i>) and <i>n</i>[<i>P</i>(<i>P</i>(<i>P</i>(<i>A</i>)))].',
        steps: [
          'Write 256 as a power of 2: 256 = 2<sup>8</sup>. Then<br>2<sup>2<sup><i>n</i>(<i>A</i>)</sup></sup> = 2<sup>8</sup> ⇒ 2<sup><i>n</i>(<i>A</i>)</sup> = 8 = 2<sup>3</sup> ⇒ <i>n</i>(<i>A</i>) = 3.',
          'Peeling the next layer, <i>n</i>[<i>P</i>(<i>P</i>(<i>P</i>(<i>A</i>)))] = 2<sup>2<sup>2<sup>3</sup></sup></sup> = 2<sup>2<sup>8</sup></sup> = 2<sup>256</sup>.',
          'The trap is answering <i>n</i>(<i>A</i>) = 8: that is <i>n</i>[<i>P</i>(<i>A</i>)], one level too shallow. Count the layers of <i>P</i> in the question before you equate anything.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'If <i>n</i>(<i>A</i>) = 2, find <i>n</i>[<i>P</i>(<i>P</i>(<i>A</i>))].',
            a: '2<sup>2<sup>2</sup></sup> = 2<sup>4</sup> = 16.',
          },
          {
            q: 'If <i>n</i>(<i>A</i>) = 1, find <i>n</i>[<i>P</i>(<i>P</i>(<i>P</i>(<i>A</i>)))].',
            a: '2<sup>2<sup>2<sup>1</sup></sup></sup> = 2<sup>4</sup> = 16.',
          },
          {
            q: 'If <i>n</i>[<i>P</i>(<i>P</i>(<i>A</i>))] = 16, find <i>n</i>(<i>A</i>).',
            a: '2<sup>2<sup><i>n</i></sup></sup> = 2<sup>4</sup> ⇒ 2<sup><i>n</i></sup> = 4 ⇒ <i>n</i> = 2.',
          },
          {
            q: 'Find <i>n</i>[<i>P</i>(<i>P</i>(∅))] and list its elements.',
            a: '<i>n</i>(∅) = 0, so the count is 2<sup>2<sup>0</sup></sup> = 2<sup>1</sup> = 2; explicitly <i>P</i>(∅) = {∅} and <i>P</i>(<i>P</i>(∅)) = {∅, {∅}}.',
          },
          {
            q: 'True or false: ∅ ∈ <i>P</i>(<i>P</i>(<i>A</i>)) for every set <i>A</i>. Give the reason.',
            a: 'True: ∅ is a subset of every set, in particular of <i>P</i>(<i>A</i>), and the elements of <i>P</i>(<i>P</i>(<i>A</i>)) are exactly the subsets of <i>P</i>(<i>A</i>).',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic D · pp. 62–63 ─────────────────────────
  {
    n: 'D',
    title: 'Unbounded (infinite) intervals',
    extra: true,
    kalam: 'The bracket beside ∞ or −∞ is always round.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Extends Topic 02’s Key definitions, notation and formulas part. Practice question 3 of Topic 03 uses this notation, so master it before you attempt that exercise.',
      },

      { t: 'part', title: 'Definitions' },
      {
        t: 'p',
        html: 'For a real number <i>a</i>:',
      },
      {
        t: 'formula',
        kicker: 'Unbounded (infinite) intervals',
        main: '(<i>a</i>, ∞) = {<i>x</i> ∈ ℝ ∶ <i>x</i> > <i>a</i>}<br>[<i>a</i>, ∞) = {<i>x</i> ∈ ℝ ∶ <i>x</i> ≥ <i>a</i>}<br>(−∞, <i>a</i>) = {<i>x</i> ∈ ℝ ∶ <i>x</i> < <i>a</i>}<br>(−∞, <i>a</i>] = {<i>x</i> ∈ ℝ ∶ <i>x</i> ≤ <i>a</i>}<br>(−∞, ∞) = ℝ',
        legend: ['<i>a</i> = the single finite endpoint, a genuine real number'],
        note: '∞ and −∞ are <b>not</b> real numbers. They are direction markers meaning “with no bound on that side.”',
      },
      {
        t: 'p',
        html: 'Four rules that carry all the marks:<br>1. <b>The bracket beside ∞ or −∞ is always round.</b> A square bracket is a promise that the endpoint belongs to the set, and ∞ can never belong to a set of real numbers. Writing [3, ∞] is wrong every time.<br>2. <b>Every unbounded interval is an infinite set</b>, and the formula “length = <i>b</i> − <i>a</i>” of Topic 02 does not apply.<br>3. <b>Complements flip the bracket as they cross the endpoint.</b> With <i>U</i> = ℝ: ((−∞, <i>a</i>))′ = [<i>a</i>, ∞) and ([<i>a</i>, ∞))′ = (−∞, <i>a</i>). The endpoint <i>a</i> must land on exactly one side.<br>4. <b>Operations obey the same rule as bounded intervals:</b> for ∩ take the tighter bound at each end, with that bound’s own bracket (at an endpoint both sets share, it stays only if both include it); for ∪ of overlapping intervals take the looser bound at each end, with its own bracket (a shared endpoint stays if either includes it).',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board / JEE Main',
        q: 'Over <i>U</i> = ℝ, find (−∞, 3] ∩ (0, ∞), (−∞, 3] ∪ (0, ∞), and (−∞, 3] − (0, ∞).',
        steps: [
          '<b>Intersection.</b> Membership requires both <i>x</i> ≤ 3 and <i>x</i> > 0. Combining, 0 < <i>x</i> ≤ 3, which is (0, 3]. The left bracket is round because (0, ∞) excludes 0; the right is square because (−∞, 3] includes 3.',
          '<b>Union.</b> Take any real <i>x</i>. If <i>x</i> ≤ 3 it lies in the first set; if <i>x</i> > 3 then certainly <i>x</i> > 0, so it lies in the second. No real is left out, so the union is ℝ.',
          '<b>Difference.</b> Membership requires <i>x</i> ≤ 3 and <i>x</i> ≯ 0, that is <i>x</i> ≤ 0. The binding condition is <i>x</i> ≤ 0, giving (−∞, 0].',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main',
        q: 'Express <i>A</i> = {<i>x</i> ∈ ℝ ∶ <i>x</i><sup>2</sup> ≥ 9} in interval form, and find <i>A</i>′ with <i>U</i> = ℝ.',
        steps: [
          '<i>x</i><sup>2</sup> ≥ 9 ⟺ |<i>x</i>| ≥ 3 ⟺ <i>x</i> ≤ −3 or <i>x</i> ≥ 3. The word “or” is a union, and both endpoints satisfy the non-strict inequality, so both brackets are square:<br><i>A</i> = (−∞, −3] ∪ [3, ∞).',
          'For the complement, negate: |<i>x</i>| < 3 ⟺ −3 < <i>x</i> < 3, so <i>A</i>′ = (−3, 3). Check against De Morgan: <i>A</i>′ = ((−∞, −3])′ ∩ ([3, ∞))′ = (−3, ∞) ∩ (−∞, 3) = (−3, 3). Consistent.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[−2, ∞) ∩ (−∞, 5)',
            a: '[−2, 5).',
          },
          {
            q: '(2, ∞) − [5, ∞)',
            a: '(2, 5).',
          },
          {
            q: 'The complement of (−∞, 1) in ℝ',
            a: '[1, ∞).',
          },
          {
            q: '{<i>x</i> ∈ ℝ ∶ 3<i>x</i> − 7 > 2} in interval form',
            a: '3<i>x</i> > 9 ⇒ <i>x</i> > 3, so (3, ∞).',
          },
          {
            q: '(−∞, 0) ∪ [0, ∞) and (−∞, 0) ∩ [0, ∞)',
            a: 'ℝ and ∅.',
          },
          {
            q: 'Is (−∞, 4] a finite set?',
            a: 'No, it is infinite; unbounded intervals are never finite.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic E · pp. 63–65 ─────────────────────────
  {
    n: 'E',
    title: 'Counting ordered pairs of subsets',
    extra: true,
    kalam: 'To count pairs of subsets, give each element an independent decision about its joint status in (A, B).',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Extends Topic 02’s Derivation and key procedures and Worked examples parts. This is a standing JEE Advanced item type.',
      },

      { t: 'part', title: 'Method: the three-way coin flip' },
      {
        t: 'p',
        html: 'Topic 02 derived 2<sup><i>n</i></sup> by giving each element an independent two-way decision: in or out. To count <b>pairs</b> of subsets, give each element an independent decision about its joint status in (<i>A</i>, <i>B</i>). There are four conceivable statuses (in both, in <i>A</i> only, in <i>B</i> only, in neither), and every standard constraint bans exactly one of them, leaving three. Three independent choices per element over <i>n</i> elements gives 3<sup><i>n</i></sup>.',
      },
      {
        t: 'p',
        html: 'Let <i>n</i>(<i>S</i>) = <i>n</i> and let (<i>A</i>, <i>B</i>) be an <b>ordered</b> pair of subsets of <i>S</i>.',
      },
      {
        t: 'table',
        title: null,
        head: ['Constraint', 'Status banned', 'Allowed statuses', 'Count'],
        rows: [
          ['<i>A</i> ⊆ <i>B</i> ⊆ <i>S</i>', 'in <i>A</i> only', 'both, <i>B</i> only, neither', '3<sup><i>n</i></sup>'],
          ['<i>A</i> ∩ <i>B</i> = ∅', 'in both', '<i>A</i> only, <i>B</i> only, neither', '3<sup><i>n</i></sup>'],
          ['<i>A</i> ∪ <i>B</i> = <i>S</i>', 'in neither', 'both, <i>A</i> only, <i>B</i> only', '3<sup><i>n</i></sup>'],
          ['<i>A</i> ∩ <i>B</i> = ∅ <b>and</b> <i>A</i> ∪ <i>B</i> = <i>S</i>', 'both, and neither', '<i>A</i> only, <i>B</i> only', '2<sup><i>n</i></sup>'],
        ],
      },
      {
        t: 'p',
        html: 'Two extensions:<br>• <b>Chains.</b> For <i>A</i><sub>1</sub> ⊆ <i>A</i><sub>2</sub> ⊆ ⋯ ⊆ <i>A</i><sub><i>k</i></sub> ⊆ <i>S</i>, each element chooses the first index at which it enters, or never enters at all: that is <i>k</i> + 1 options, giving (<i>k</i> + 1)<sup><i>n</i></sup>. Setting <i>k</i> = 2 recovers 3<sup><i>n</i></sup>.<br>• <b>Strictness by subtraction.</b> The number of pairs with <i>A</i> ⊊ <i>B</i> is 3<sup><i>n</i></sup> − 2<sup><i>n</i></sup>: from the 3<sup><i>n</i></sup> pairs with <i>A</i> ⊆ <i>B</i>, remove the 2<sup><i>n</i></sup> pairs in which <i>A</i> = <i>B</i> (one for each subset).',
      },
      {
        t: 'p',
        html: '<b>Cross-check on the 3<sup><i>n</i></sup> claim.</b> Count <i>A</i> ⊆ <i>B</i> ⊆ <i>S</i> a second way: choose <i>B</i> of size <i>k</i> in <sup><i>n</i></sup>C<sub><i>k</i></sub> ways, then choose any <i>A</i> ⊆ <i>B</i> in 2<sup><i>k</i></sup> ways. Summing, ∑<sub><i>k</i>=0</sub><sup><i>n</i></sup> <sup><i>n</i></sup>C<sub><i>k</i></sub> · 2<sup><i>k</i></sup> = (1 + 2)<sup><i>n</i></sup> = 3<sup><i>n</i></sup> by the binomial theorem. Two independent routes, one answer.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main',
        q: 'Let <i>S</i> = {1, 2, 3, 4}. Find the number of ordered pairs (<i>A</i>, <i>B</i>) with <i>A</i> ⊆ <i>B</i> ⊆ <i>S</i>.',
        steps: [
          'Each of the 4 elements independently takes one of three statuses: in <i>A</i> (and therefore in <i>B</i>), in <i>B</i> but not <i>A</i>, or in neither; so the count is 3<sup>4</sup> = 81.',
          'Verify by the size-of-<i>B</i> route: <sup>4</sup>C<sub>0</sub> · 2<sup>0</sup> + <sup>4</sup>C<sub>1</sub> · 2<sup>1</sup> + <sup>4</sup>C<sub>2</sub> · 2<sup>2</sup> + <sup>4</sup>C<sub>3</sub> · 2<sup>3</sup> + <sup>4</sup>C<sub>4</sub> · 2<sup>4</sup> = 1 + 8 + 24 + 32 + 16 = 81. Confirmed.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced',
        q: 'Let <i>n</i>(<i>S</i>) = 5. Find the number of ordered pairs (<i>A</i>, <i>B</i>) of subsets of <i>S</i> with <i>A</i> ∩ <i>B</i> = ∅ and <i>A</i> ∪ <i>B</i> ≠ <i>S</i>.',
        steps: [
          'Count the easy superset and subtract, exactly as in Topic 02’s worked example 4.',
          'Pairs with <i>A</i> ∩ <i>B</i> = ∅: each element is in <i>A</i> only, <i>B</i> only, or neither, so 3<sup>5</sup> = 243.',
          'Among those, the ones with <i>A</i> ∪ <i>B</i> = <i>S</i> leave no element in “neither”, so each element is in exactly one of <i>A</i>, <i>B</i>: 2<sup>5</sup> = 32.',
        ],
        ans: 'The required count is 243 − 32 = 211.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'p',
        html: 'Throughout, <i>S</i> has <i>n</i> elements and pairs are ordered unless stated otherwise.',
      },
      {
        t: 'practice',
        items: [
          {
            q: '<i>n</i> = 6: the number of pairs (<i>A</i>, <i>B</i>) with <i>A</i> ⊆ <i>B</i> ⊆ <i>S</i>.',
            a: '3<sup>6</sup> = 729.',
          },
          {
            q: '<i>n</i> = 3: the number of ordered triples (<i>A</i>, <i>B</i>, <i>C</i>) with <i>A</i> ⊆ <i>B</i> ⊆ <i>C</i> ⊆ <i>S</i>.',
            a: '4<sup>3</sup> = 64.',
          },
          {
            q: '<i>n</i> = 4: the number of pairs (<i>A</i>, <i>B</i>) with <i>A</i> ∪ <i>B</i> = <i>S</i>.',
            a: '3<sup>4</sup> = 81.',
          },
          {
            q: 'General <i>n</i>: the number of pairs with <i>A</i> ⊊ <i>B</i>. Evaluate it for <i>n</i> = 3.',
            a: '3<sup><i>n</i></sup> − 2<sup><i>n</i></sup>; for <i>n</i> = 3 this is 27 − 8 = 19.',
          },
          {
            q: 'General <i>n</i>: the number of pairs with <i>A</i> ∩ <i>B</i> = ∅ and both <i>A</i> and <i>B</i> non-empty. Evaluate it for <i>n</i> = 3.',
            a: '3<sup><i>n</i></sup> − 2 · 2<sup><i>n</i></sup> + 1 (remove the 2<sup><i>n</i></sup> pairs with <i>A</i> = ∅ and the 2<sup><i>n</i></sup> with <i>B</i> = ∅, then restore the one pair counted twice); for <i>n</i> = 3 this is 27 − 16 + 1 = 12.',
          },
          {
            q: '<i>n</i> = 2: the number of <b>unordered</b> pairs {<i>A</i>, <i>B</i>} with <i>A</i> ∪ <i>B</i> = <i>S</i>.',
            a: '5; in general <frac><num>1</num><den>2</den></frac>(3<sup><i>n</i></sup> + 1), since only the single ordered pair (<i>S</i>, <i>S</i>) has <i>A</i> = <i>B</i>.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic F · pp. 65–67 ─────────────────────────
  {
    n: 'F',
    title: 'Three-circle Venn shading and visual proof',
    extra: true,
    kalam: 'Comparing two lists of at most eight entries settles any three-set identity completely.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Extends Topic 03’s Derivation and key procedures and Worked examples parts, which develop shading for two sets only.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: 'Three overlapping circles inside a rectangle <i>U</i> carve the universe into exactly eight regions. Number them once and never renumber:',
      },
      {
        t: 'table',
        title: null,
        head: ['Region', 'Description', 'In A?', 'In B?', 'In C?'],
        rows: [
          ['<i>R</i><sub>1</sub>', 'only <i>A</i>', 'yes', 'no', 'no'],
          ['<i>R</i><sub>2</sub>', 'only <i>B</i>', 'no', 'yes', 'no'],
          ['<i>R</i><sub>3</sub>', 'only <i>C</i>', 'no', 'no', 'yes'],
          ['<i>R</i><sub>4</sub>', '<i>A</i> and <i>B</i> but not <i>C</i>', 'yes', 'yes', 'no'],
          ['<i>R</i><sub>5</sub>', '<i>B</i> and <i>C</i> but not <i>A</i>', 'no', 'yes', 'yes'],
          ['<i>R</i><sub>6</sub>', '<i>A</i> and <i>C</i> but not <i>B</i>', 'yes', 'no', 'yes'],
          ['<i>R</i><sub>7</sub>', 'all three', 'yes', 'yes', 'yes'],
          ['<i>R</i><sub>8</sub>', 'outside all three', 'no', 'no', 'no'],
        ],
      },
      {
        t: 'p',
        html: 'Reading the columns downwards gives the three basic region lists, which you should be able to write from memory:<br><i>A</i> = {<i>R</i><sub>1</sub>, <i>R</i><sub>4</sub>, <i>R</i><sub>6</sub>, <i>R</i><sub>7</sub>}, <i>B</i> = {<i>R</i><sub>2</sub>, <i>R</i><sub>4</sub>, <i>R</i><sub>5</sub>, <i>R</i><sub>7</sub>}, <i>C</i> = {<i>R</i><sub>3</sub>, <i>R</i><sub>5</sub>, <i>R</i><sub>6</sub>, <i>R</i><sub>7</sub>}',
      },
      {
        t: 'p',
        html: '<b>Procedure.</b> (1) Convert every set in the expression to its region list. (2) Perform the operations on lists: union merges, intersection keeps the common entries, difference deletes, complement returns the eight regions you did not list. (3) Shade the final list.',
      },
      {
        t: 'p',
        html: '<b>Why this is a proof, not just a picture.</b> Every element of <i>U</i> lies in exactly one of the eight regions, and membership of a compound expression depends only on which of <i>A</i>, <i>B</i>, <i>C</i> contain the element, that is, only on the region. So two expressions are equal as sets <b>if and only if</b> their region lists are identical. Comparing two lists of at most eight entries settles any three-set identity completely.',
      },
      { t: 'fig', id: 'm11-01-fig-1.6' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board / JEE Main',
        fig: 'm11-01-fig-1.7',
        q: 'Verify the distributive law <i>A</i> ∩ (<i>B</i> ∪ <i>C</i>) = (<i>A</i> ∩ <i>B</i>) ∪ (<i>A</i> ∩ <i>C</i>) by shading.',
        steps: [
          '<b>Left side.</b> <i>B</i> ∪ <i>C</i> = {<i>R</i><sub>2</sub>, <i>R</i><sub>4</sub>, <i>R</i><sub>5</sub>, <i>R</i><sub>7</sub>} ∪ {<i>R</i><sub>3</sub>, <i>R</i><sub>5</sub>, <i>R</i><sub>6</sub>, <i>R</i><sub>7</sub>} = {<i>R</i><sub>2</sub>, <i>R</i><sub>3</sub>, <i>R</i><sub>4</sub>, <i>R</i><sub>5</sub>, <i>R</i><sub>6</sub>, <i>R</i><sub>7</sub>}. Intersecting with <i>A</i> = {<i>R</i><sub>1</sub>, <i>R</i><sub>4</sub>, <i>R</i><sub>6</sub>, <i>R</i><sub>7</sub>} keeps only the common entries:<br><i>A</i> ∩ (<i>B</i> ∪ <i>C</i>) = {<i>R</i><sub>4</sub>, <i>R</i><sub>6</sub>, <i>R</i><sub>7</sub>}.',
          '<b>Right side.</b> <i>A</i> ∩ <i>B</i> = {<i>R</i><sub>4</sub>, <i>R</i><sub>7</sub>} and <i>A</i> ∩ <i>C</i> = {<i>R</i><sub>6</sub>, <i>R</i><sub>7</sub>}; their union is {<i>R</i><sub>4</sub>, <i>R</i><sub>6</sub>, <i>R</i><sub>7</sub>}.',
          'The lists are identical, so the two sets are equal. In pictures: both sides shade the two petals where <i>A</i> meets one other circle, plus the centre.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main',
        q: 'Shade <i>A</i> − (<i>B</i> ∪ <i>C</i>) and show it equals (<i>A</i> − <i>B</i>) ∩ (<i>A</i> − <i>C</i>).',
        steps: [
          '<i>A</i> − (<i>B</i> ∪ <i>C</i>): start from <i>A</i> = {<i>R</i><sub>1</sub>, <i>R</i><sub>4</sub>, <i>R</i><sub>6</sub>, <i>R</i><sub>7</sub>} and delete everything in <i>B</i> ∪ <i>C</i> = {<i>R</i><sub>2</sub>, <i>R</i><sub>3</sub>, <i>R</i><sub>4</sub>, <i>R</i><sub>5</sub>, <i>R</i><sub>6</sub>, <i>R</i><sub>7</sub>}. Only <i>R</i><sub>1</sub> survives.',
          '(<i>A</i> − <i>B</i>) ∩ (<i>A</i> − <i>C</i>): <i>A</i> − <i>B</i> = {<i>R</i><sub>1</sub>, <i>R</i><sub>6</sub>} (drop the regions inside <i>B</i>), <i>A</i> − <i>C</i> = {<i>R</i><sub>1</sub>, <i>R</i><sub>4</sub>}; the common entry is <i>R</i><sub>1</sub>.',
          'Both are {<i>R</i><sub>1</sub>}: the crescent of <i>A</i> untouched by either other circle. This is practice question 4 of Topic 03, settled by picture instead of element-chasing, and the two methods agree.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'p',
        html: 'Give the region list for each expression.',
      },
      {
        t: 'practice',
        items: [
          {
            q: '<i>B</i> − (<i>A</i> ∪ <i>C</i>)',
            a: '{<i>R</i><sub>2</sub>}.',
          },
          {
            q: '(<i>A</i> ∩ <i>B</i>) − <i>C</i>',
            a: '{<i>R</i><sub>4</sub>}.',
          },
          {
            q: '<i>A</i>′ ∩ <i>B</i> ∩ <i>C</i>',
            a: '{<i>R</i><sub>5</sub>}.',
          },
          {
            q: '(<i>A</i> ∪ <i>B</i> ∪ <i>C</i>)′',
            a: '{<i>R</i><sub>8</sub>}.',
          },
          {
            q: '<i>A</i> △ <i>B</i>',
            a: '{<i>R</i><sub>1</sub>, <i>R</i><sub>2</sub>, <i>R</i><sub>5</sub>, <i>R</i><sub>6</sub>}: the regions lying in exactly one of <i>A</i> and <i>B</i>, whatever <i>C</i> does.',
          },
          {
            q: '<i>A</i> ∪ (<i>B</i> ∩ <i>C</i>) and (<i>A</i> ∪ <i>B</i>) ∩ (<i>A</i> ∪ <i>C</i>): are they equal?',
            a: 'Both give {<i>R</i><sub>1</sub>, <i>R</i><sub>4</sub>, <i>R</i><sub>5</sub>, <i>R</i><sub>6</sub>, <i>R</i><sub>7</sub>}, so yes, equal; this is the second distributive law.',
          },
          {
            q: '(<i>A</i> ∩ <i>B</i> ∩ <i>C</i>)′',
            a: '{<i>R</i><sub>1</sub>, <i>R</i><sub>2</sub>, <i>R</i><sub>3</sub>, <i>R</i><sub>4</sub>, <i>R</i><sub>5</sub>, <i>R</i><sub>6</sub>, <i>R</i><sub>8</sub>}, that is, everything except the centre.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic G · pp. 67–70 ─────────────────────────
  {
    n: 'G',
    title: 'Operations on the standard number systems',
    extra: true,
    kalam: 'Every question of this type is settled by one rule plus a short table.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Extends Topic 03’s Worked examples and Practice exercises parts, where every difference and complement is computed on roster sets or bounded intervals.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: 'Topic 01 gives you the nesting ℕ ⊂ 𝕎 ⊂ ℤ ⊂ ℚ ⊂ ℝ and defines 𝕋 as the set of irrationals. Every question of this type is settled by one rule plus a short table.',
      },
      {
        t: 'p',
        html: '<b>The rule.</b> Whenever <i>A</i> ⊆ <i>B</i>:<br><i>A</i> ∩ <i>B</i> = <i>A</i>, <i>A</i> ∪ <i>B</i> = <i>B</i>, <i>A</i> − <i>B</i> = ∅, <i>B</i> − <i>A</i> = the extra elements of <i>B</i>.<br>So for nested number systems, the only interesting computation is <i>B</i> − <i>A</i>.',
      },
      {
        t: 'p',
        html: '<b>The table</b> (take <i>U</i> = ℝ for all complements):',
      },
      {
        t: 'table',
        title: null,
        head: ['Expression', 'Value', 'Reason'],
        rows: [
          ['ℝ − ℚ', '𝕋', 'definition of the irrationals'],
          ['ℝ − 𝕋', 'ℚ', 'the two halves of ℝ swap roles'],
          ['ℚ ∩ 𝕋', '∅', 'no real is both rational and irrational'],
          ['ℚ ∪ 𝕋', 'ℝ', 'every real is one or the other'],
          ['ℚ′', '𝕋, and 𝕋′ = ℚ', 'previous two rows combined'],
          ['𝕎 − ℕ', '{0}', '𝕎 adds exactly one element to ℕ'],
          ['ℤ − 𝕎', '{−1, −2, −3, …}', 'the negative integers'],
          ['ℤ − ℕ', '{0, −1, −2, …}', 'zero together with the negatives'],
          ['ℚ − ℤ', 'non-integer rationals, e.g. <frac><num>3</num><den>2</den></frac>, −<frac><num>7</num><den>4</den></frac>', 'fractions that do not reduce to integers'],
          ['ℕ ∩ 𝕋', '∅', 'naturals are rational'],
        ],
      },
      {
        t: 'p',
        html: '<b>A warning that examiners exploit.</b> 𝕋 is not closed under addition or multiplication: √2 · √2 = 2 ∈ ℚ and (1 + √2) + (1 − √2) = 2 ∈ ℚ. So never argue “irrational plus irrational is irrational.” Test each number on its own merits, and remember √9 = 3 is rational, despite the radical sign.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: 'With <i>U</i> = ℝ, find (i) ℚ′, (ii) 𝕎 − ℕ, (iii) ℤ − ℕ, (iv) ℕ ∩ 𝕋, (v) ℕ ∪ ℤ.',
        steps: [
          '(i) ℚ′ = ℝ − ℚ = 𝕋, the irrationals.',
          '(ii) 𝕎 is ℕ with 0 adjoined, so 𝕎 − ℕ = {0}: a singleton, not ∅.',
          '(iii) ℤ adds 0 and all the negatives, so ℤ − ℕ = {0, −1, −2, −3, …}.',
          '(iv) Every natural number <i>k</i> equals <frac><num><i>k</i></num><den>1</den></frac>, hence is rational, so it can never be irrational: ℕ ∩ 𝕋 = ∅.',
          '(v) Since ℕ ⊂ ℤ, the union is the larger set: ℤ.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main',
        q: 'With <i>U</i> = ℝ, find (ℤ ∪ 𝕋)′.',
        steps: [
          'Apply De Morgan, then the table:<br>(ℤ ∪ 𝕋)′ = ℤ′ ∩ 𝕋′ = ℤ′ ∩ ℚ = ℚ − ℤ.',
          'So the answer is the set of rationals that are not integers: numbers such as <frac><num>1</num><den>2</den></frac>, −<frac><num>7</num><den>4</den></frac>, <frac><num>22</num><den>7</den></frac>.',
          '<b>Sanity check by direct reading:</b> a real number outside ℤ ∪ 𝕋 is not irrational (so it is rational) and not an integer: the same description.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'p',
        html: 'Take <i>U</i> = ℝ where a complement appears.',
      },
      {
        t: 'practice',
        items: [
          {
            q: 'ℚ ∩ 𝕋',
            a: '∅.',
          },
          {
            q: 'ℝ − 𝕋',
            a: 'ℚ.',
          },
          {
            q: 'ℤ ∩ 𝕎',
            a: '𝕎 (since 𝕎 ⊂ ℤ).',
          },
          {
            q: '(ℚ ∩ 𝕋)′',
            a: '∅′ = ℝ.',
          },
          {
            q: 'Is ℚ ∩ (0, 1) finite or infinite?',
            a: 'Infinite: for instance <frac><num>1</num><den>2</den></frac>, <frac><num>1</num><den>3</den></frac>, <frac><num>1</num><den>4</den></frac>, … all lie in it.',
          },
          {
            q: 'Is √9 ∈ 𝕋?',
            a: 'No; √9 = 3, a natural number, hence rational.',
          },
          {
            q: '𝕎 ∪ 𝕋: can it be simplified to a single named system?',
            a: 'No, it contains all irrationals and the whole numbers but no negative integers and no non-integer rationals, so it is not one of the named systems.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic H · pp. 70–73 ─────────────────────────
  {
    n: 'H',
    title: 'Bounds on an unknown overlap',
    extra: true,
    kalam: 'Both bounds are attained: they are genuine minimum and maximum values, not loose estimates.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Extends Topic 04’s parts from Key definitions, notation and formulas to Practice exercises. Topic 04 solves inclusion–exclusion when the data fix every count, solving for an unknown overlap where needed; this item handles the far more common JEE phrasing “find the least (or greatest) possible number who did both.”',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: 'Let <i>n</i>(<i>U</i>) = <i>N</i>, <i>n</i>(<i>A</i>) = <i>a</i>, <i>n</i>(<i>B</i>) = <i>b</i>, and let the unknown overlap be <i>x</i> = <i>n</i>(<i>A</i> ∩ <i>B</i>). Then:',
      },
      {
        t: 'formula',
        kicker: 'Bounds on an unknown overlap',
        main: 'max(0, <i>a</i> + <i>b</i> − <i>N</i>) ≤ <i>n</i>(<i>A</i> ∩ <i>B</i>) ≤ min(<i>a</i>, <i>b</i>)',
        legend: [
          '<i>N</i> = the size of the universe (the total surveyed)',
          '<i>a</i>, <i>b</i> = the two given counts',
          '<i>n</i>(<i>A</i> ∩ <i>B</i>) = <i>x</i>, the overlap you are asked to bound',
        ],
        note: '<b>Validity:</b> <i>a</i> ≤ <i>N</i> and <i>b</i> ≤ <i>N</i> must hold, otherwise the data is already inconsistent.',
      },
      {
        t: 'p',
        html: '<b>Derivation of the upper bound.</b> <i>A</i> ∩ <i>B</i> ⊆ <i>A</i> and <i>A</i> ∩ <i>B</i> ⊆ <i>B</i>, so <i>x</i> ≤ <i>a</i> and <i>x</i> ≤ <i>b</i>, hence <i>x</i> ≤ min(<i>a</i>, <i>b</i>).',
      },
      {
        t: 'p',
        html: '<b>Derivation of the lower bound.</b> By the two-set formula, <i>n</i>(<i>A</i> ∪ <i>B</i>) = <i>a</i> + <i>b</i> − <i>x</i>. The union is a subset of <i>U</i>, so <i>a</i> + <i>b</i> − <i>x</i> ≤ <i>N</i>, which rearranges to <i>x</i> ≥ <i>a</i> + <i>b</i> − <i>N</i>. A count is never negative, so also <i>x</i> ≥ 0. Take whichever bound is larger.',
      },
      {
        t: 'p',
        html: '<b>Both bounds are attained</b>: they are genuine minimum and maximum values, not loose estimates. For the maximum, place the smaller set entirely inside the larger. For the minimum, push the two sets as far apart as the universe allows: their overlap is exactly the amount by which <i>a</i> + <i>b</i> spills past <i>N</i>. Every integer between the two bounds is also achievable, by sliding one set across one element at a time.',
      },
      {
        t: 'p',
        html: '<b>Companion bounds for the union.</b> Since <i>n</i>(<i>A</i> ∪ <i>B</i>) = <i>a</i> + <i>b</i> − <i>x</i>, running <i>x</i> through its range gives<br>max(<i>a</i>, <i>b</i>) ≤ <i>n</i>(<i>A</i> ∪ <i>B</i>) ≤ min(<i>N</i>, <i>a</i> + <i>b</i>).<br>Large overlap means small union, and conversely: the two ranges are mirror images.',
      },
      {
        t: 'p',
        html: '<b>Three sets and beyond.</b> For three sets in a universe of size <i>N</i>:<br>max(0, <i>n</i>(<i>A</i>) + <i>n</i>(<i>B</i>) + <i>n</i>(<i>C</i>) − 2<i>N</i>) ≤ <i>n</i>(<i>A</i> ∩ <i>B</i> ∩ <i>C</i>) ≤ min(<i>n</i>(<i>A</i>), <i>n</i>(<i>B</i>), <i>n</i>(<i>C</i>))<br>and in general, for <i>m</i> sets,<br><i>n</i>(<i>A</i><sub>1</sub> ∩ <i>A</i><sub>2</sub> ∩ ⋯ ∩ <i>A</i><sub><i>m</i></sub>) ≥ ∑<sub><i>i</i>=1</sub><sup><i>m</i></sup> <i>n</i>(<i>A</i><sub><i>i</i></sub>) − (<i>m</i> − 1)<i>N</i>.',
      },
      {
        t: 'p',
        html: '<b>Why the general bound holds.</b> An element fails to lie in the intersection exactly when it lies in at least one complement <i>A</i>′<sub><i>i</i></sub>. Hence<br><i>n</i>(⋂<sub><i>i</i>=1</sub><sup><i>m</i></sup> <i>A</i><sub><i>i</i></sub>) = <i>N</i> − <i>n</i>(⋃<sub><i>i</i>=1</sub><sup><i>m</i></sup> <i>A</i>′<sub><i>i</i></sub>) ≥ <i>N</i> − ∑<sub><i>i</i>=1</sub><sup><i>m</i></sup> <i>n</i>(<i>A</i>′<sub><i>i</i></sub>) = <i>N</i> − ∑<sub><i>i</i>=1</sub><sup><i>m</i></sup> (<i>N</i> − <i>n</i>(<i>A</i><sub><i>i</i></sub>)) = ∑<sub><i>i</i>=1</sub><sup><i>m</i></sup> <i>n</i>(<i>A</i><sub><i>i</i></sub>) − (<i>m</i> − 1)<i>N</i>,<br>using only the fact that a union is never bigger than the sum of its pieces.',
      },
      {
        t: 'proc',
        title: 'Procedure: least/greatest overlap under exam pressure',
        steps: [
          'Underline <i>N</i>, <i>a</i>, <i>b</i>. If the problem is in percentages, set <i>N</i> = 100 and read the percentages as counts.',
          'Greatest overlap = min(<i>a</i>, <i>b</i>). Write it immediately; it needs no arithmetic.',
          'Least overlap = <i>a</i> + <i>b</i> − <i>N</i> if that is positive, otherwise 0. <b>Why:</b> <i>a</i> + <i>b</i> − <i>N</i> measures the unavoidable spill-over past the universe.',
          'If the question asks about the union, “none”, or “only <i>A</i>”, convert using <i>n</i>(<i>A</i> ∪ <i>B</i>) = <i>a</i> + <i>b</i> − <i>x</i> and <i>n</i>(neither) = <i>N</i> − <i>n</i>(<i>A</i> ∪ <i>B</i>), then substitute the extreme value of <i>x</i>, remembering that the largest <i>x</i> gives the smallest union.',
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main',
        q: 'In a class of 100 students, 70 like tea and 80 like coffee. Find the minimum and the maximum possible number of students who like both.',
        steps: [
          'Here <i>N</i> = 100, <i>a</i> = 70, <i>b</i> = 80.',
          '<b>Maximum.</b> <i>x</i> ≤ min(70, 80) = 70. Attained when the tea-likers all lie inside the coffee-likers, which is possible since 70 ≤ 80.',
          '<b>Minimum.</b> <i>x</i> ≥ 70 + 80 − 100 = 50, and 50 > 0 so this is the binding bound. Attained when the union fills the class: <i>n</i>(<i>A</i> ∪ <i>B</i>) = 70 + 80 − 50 = 100 = <i>N</i>. Concretely, 50 students take both, 20 take tea only, 30 take coffee only, and nobody is left out.',
          'Notice the reasoning behind the minimum: 70 + 80 = 150 seats are claimed but only 100 students exist, so at least 150 − 100 = 50 students must be sitting in two seats at once.',
        ],
        ans: '50 ≤ <i>n</i>(both) ≤ 70.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced',
        q: 'In a survey of 100 people, 60 like dessert <i>A</i>, 70 like <i>B</i>, and 80 like <i>C</i>. If <i>x</i> is the number who like all three, find the range of <i>x</i>.',
        steps: [
          '<b>Maximum.</b> <i>A</i> ∩ <i>B</i> ∩ <i>C</i> ⊆ <i>A</i>, so <i>x</i> ≤ min(60, 70, 80) = 60. Attained by nesting <i>A</i> ⊆ <i>B</i> ⊆ <i>C</i>, which the sizes permit.',
          '<b>Minimum.</b> Use the complement argument. <i>n</i>(<i>A</i>′) = 40, <i>n</i>(<i>B</i>′) = 30, <i>n</i>(<i>C</i>′) = 20, and a person outside the triple intersection must lie in at least one complement. So<br><i>n</i>((<i>A</i> ∩ <i>B</i> ∩ <i>C</i>)′) = <i>n</i>(<i>A</i>′ ∪ <i>B</i>′ ∪ <i>C</i>′) ≤ 40 + 30 + 20 = 90,<br>giving <i>x</i> ≥ 100 − 90 = 10. This matches the formula 60 + 70 + 80 − 2(100) = 10. It is attained because 90 ≤ 100, so the three complements can be made pairwise disjoint: 40 people dislike only <i>A</i>, 30 only <i>B</i>, 20 only <i>C</i>, and the remaining 10 like all three.',
          '<b>The lesson:</b> for a minimum intersection switch to complements, where the union bound “a union is at most the sum of its parts” does the whole job.',
        ],
        ans: '10 ≤ <i>x</i> ≤ 60.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '<i>n</i>(<i>U</i>) = 50, <i>n</i>(<i>A</i>) = 30, <i>n</i>(<i>B</i>) = 25. Find the range of <i>n</i>(<i>A</i> ∩ <i>B</i>).',
            a: 'max(0, 30 + 25 − 50) = 5 to min(30, 25) = 25, so 5 ≤ <i>n</i>(<i>A</i> ∩ <i>B</i>) ≤ 25.',
          },
          {
            q: '<i>n</i>(<i>A</i>) = 17, <i>n</i>(<i>B</i>) = 23, with no restriction on the universe. Find the range of <i>n</i>(<i>A</i> ∩ <i>B</i>).',
            a: '0 to 17: with an unrestricted universe <i>N</i> can be taken large (<i>N</i> ≥ 40), making <i>a</i> + <i>b</i> − <i>N</i> ≤ 0, so only <i>x</i> ≥ 0 binds.',
          },
          {
            q: '<i>n</i>(<i>U</i>) = 100, <i>n</i>(<i>A</i>) = 40, <i>n</i>(<i>B</i>) = 50. Find the range of <i>n</i>(<i>A</i> ∪ <i>B</i>).',
            a: 'max(40, 50) = 50 to min(100, 90) = 90, so 50 ≤ <i>n</i>(<i>A</i> ∪ <i>B</i>) ≤ 90.',
          },
          {
            q: 'In a town, 63% of people drink tea and 76% drink coffee. If <i>x</i>% drink both, find the range of <i>x</i>.',
            a: 'Take <i>N</i> = 100: 63 + 76 − 100 = 39 and min(63, 76) = 63, so 39 ≤ <i>x</i> ≤ 63.',
          },
          {
            q: '<i>n</i>(<i>U</i>) = 200 with <i>n</i>(<i>A</i>) = 120, <i>n</i>(<i>B</i>) = 140, <i>n</i>(<i>C</i>) = 160. Find the range of <i>n</i>(<i>A</i> ∩ <i>B</i> ∩ <i>C</i>).',
            a: '120 + 140 + 160 − 2(200) = 20 and min(120, 140, 160) = 120, so 20 ≤ <i>n</i>(<i>A</i> ∩ <i>B</i> ∩ <i>C</i>) ≤ 120.',
          },
          {
            q: 'In a class of 40, 25 play cricket and 20 play football. Find (i) the least possible number who play both, and (ii) the greatest possible number who play neither.',
            a: '(i) 25 + 20 − 40 = 5. (ii) “Neither” is largest when the union is smallest; the smallest union is max(25, 20) = 25, so at most 40 − 25 = 15 play neither.',
          },
        ],
      },
    ],
  },
];
