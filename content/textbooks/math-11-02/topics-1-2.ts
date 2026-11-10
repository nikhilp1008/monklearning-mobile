import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 2, Topics 01 and 02: pp. 102–119 of the Class 11 Mathematics Master
 * Reference (October 2026 edition), word for word: Cartesian Product of Sets
 * (pp. 102–111) and Relations (pp. 112–119). The chapter's title and contents
 * (p. 101) are not copied. Each topic opens with its "Exam Relevance:" box as a
 * part of its own, then is split at its Sections 1 to 8.
 * Figure 2.1 (caption p. 103, drawn p. 104) sits in "Concept intuition" after
 * the paragraph on ℝ × ℝ, where the book prints its caption; Figure 2.2
 * (caption p. 113, drawn p. 114) sits after the three ways of writing a
 * relation, where the book prints its caption. Both are redrawn in
 * lib/diagrams/mathematics-11-02.ts.
 * Every fraction is stacked (<frac>); the under-braces "m times" and "pq
 * factors" follow their sums and products in brackets; the small table inside
 * Topic 01's worked example 4 is written as lines of that step.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 01 · pp. 102–111 ─────────────────────────
  {
    n: '01',
    title: 'Cartesian Product of Sets',
    kalam: 'Because order matters, A × B and B × A are generally different sets.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: 'A foundational, high-yield topic. CBSE Boards lifts 1–2 mark direct questions straight from here (write <i>A</i> × <i>B</i>, find <i>A</i> and <i>B</i> from <i>A</i> × <i>B</i>). JEE Main asks fast counting questions on <i>n</i>(<i>A</i> × <i>B</i>) and the number of subsets/relations. JEE Advanced rarely asks it in isolation (the book’s estimate from past papers, not official figures) but builds every later idea (relations, functions, domains, graphs) on this single definition. Master it now and the rest of the chapter becomes bookkeeping.',
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: 'Imagine you walk into a small chaiwala’s stall near a railway platform. The board says he sells <b>three sizes</b> (Small, Medium, Large) and <b>two flavours</b>: Adrak (ginger) and Elaichi (cardamom). Before you order, a natural question pops up: how many genuinely different cups can he serve?',
      },
      {
        t: 'p',
        html: 'You instinctively start pairing. Small-Adrak, Small-Elaichi, Medium-Adrak, Medium-Elaichi, Large-Adrak, Large-Elaichi. Six cups. What you just did, taking every item from one list and tagging it with every item from a second list, is the entire idea of the <b>Cartesian product</b>. Mathematicians simply give the two lists names. Call the sizes set <i>A</i> = {<i>S</i>, <i>M</i>, <i>L</i>} and the flavours set <i>B</i> = {Adrak, Elaichi}. The collection of all six possible cups is written <i>A</i> × <i>B</i>, read aloud as “<i>A</i> cross <i>B</i>”.',
      },
      {
        t: 'p',
        html: 'The crucial detail is <b>order</b>. A cup described as (Small, Adrak) is a size paired with a flavour. If we flipped it to (Adrak, Small) we’d be reading it as a flavour paired with a size: a different kind of label entirely. So the two coordinates play different roles, and we are never allowed to swap them casually. This is why the basic building block is called an <b>ordered pair</b>: a pair (<i>a</i>, <i>b</i>) where <i>a</i> is the <b>first coordinate</b> and <i>b</i> is the <b>second coordinate</b>, and the position carries meaning.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> an ordered pair is like a cricket scoreline written as (runs, wickets). “180/4”, that is the ordered pair (180, 4), means 180 runs for the loss of 4 wickets. Read it backwards as (4, 180) and you’d be claiming 4 runs for 180 wickets, which is nonsense. The numbers are the same, but the order completely changes the meaning. That is the heart of why (<i>a</i>, <i>b</i>) and (<i>b</i>, <i>a</i>) are different objects whenever <i>a</i> ≠ <i>b</i>.',
      },
      {
        t: 'p',
        html: 'Formally, two ordered pairs are equal <b>only when both coordinates match in their own slots</b>:<br>(<i>a</i>, <i>b</i>) = (<i>c</i>, <i>d</i>) ⟺ <i>a</i> = <i>c</i> and <i>b</i> = <i>d</i>',
      },
      {
        t: 'p',
        html: 'Now the definition writes itself. Given two non-empty sets <i>A</i> and <i>B</i>, the <b>Cartesian product</b> <i>A</i> × <i>B</i> is the set of all ordered pairs whose first coordinate is pulled from <i>A</i> and whose second coordinate is pulled from <i>B</i>:<br><i>A</i> × <i>B</i> = {(<i>a</i>, <i>b</i>) ∶ <i>a</i> ∈ <i>A</i> and <i>b</i> ∈ <i>B</i>}',
      },
      {
        t: 'p',
        html: 'Because order matters, <i>A</i> × <i>B</i> and <i>B</i> × <i>A</i> are generally <b>different sets</b>: in our chai example, <i>A</i> × <i>B</i> pairs sizes-then-flavours while <i>B</i> × <i>A</i> pairs flavours-then-sizes. They contain the same “information” but packaged in opposite slots, so they are not equal as sets.',
      },
      {
        t: 'p',
        html: 'A very natural picture is the points of a graph. If <i>A</i> and <i>B</i> are both the set of real numbers ℝ, then ℝ × ℝ is the set of all pairs (<i>x</i>, <i>y</i>), which is exactly every point on the coordinate plane. So the familiar XY-plane you’ve drawn since childhood is a Cartesian product. Descartes’ name is attached to both for the same reason.',
      },
      { t: 'fig', id: 'm11-02-fig-2.1' },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions.</b> A few boundaries are worth nailing down before we compute anything:<br>• <b>The empty set collapses everything.</b> If either <i>A</i> or <i>B</i> is empty, there is no way to form a single pair, so <i>A</i> × <i>B</i> = ∅. In symbols, <i>A</i> × <i>B</i> = ∅ ⟺ <i>A</i> = ∅ or <i>B</i> = ∅.<br>• <b>Infinite sets stay infinite.</b> If one of the sets is infinite and the other is non-empty, <i>A</i> × <i>B</i> is infinite. (This is why ℝ × ℝ, the plane, is infinite; it has uncountably many points because ℝ already does.)<br>• <b>Distinctness matters for counting.</b> The clean count <i>n</i>(<i>A</i> × <i>B</i>) = <i>n</i>(<i>A</i>) <i>n</i>(<i>B</i>) assumes the elements within each set are distinct (sets never repeat elements anyway, but watch out when a problem hands you a list with repeats).<br>• <b><i>A</i> × <i>B</i> ≠ <i>B</i> × <i>A</i> in general</b>: equality holds only in the special case <i>A</i> = <i>B</i> (for non-empty sets), or trivially when one set is empty.',
      },

      { t: 'part', title: 'Key definitions, formulas and notation' },
      {
        t: 'p',
        html: 'The key quantities here are the <b>cardinality</b> (element count) and the <b>coordinate-membership</b> rule: almost every question in this topic is a count or a membership check. Memorize these.',
      },
      {
        t: 'p',
        html: '<b>Ordered pair.</b> (<i>a</i>, <i>b</i>): first coordinate <i>a</i>, second coordinate <i>b</i>. Equality rule:',
      },
      {
        t: 'formula',
        kicker: 'Ordered pair',
        main: '(<i>a</i>, <i>b</i>) = (<i>c</i>, <i>d</i>) ⟺ <i>a</i> = <i>c</i> and <i>b</i> = <i>d</i>',
        legend: [
          '(<i>a</i>, <i>b</i>) = ordered pair; first coordinate <i>a</i>, second <i>b</i>',
          '(<i>c</i>, <i>d</i>) = a second ordered pair',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Cartesian product (two sets)',
        main: '<i>A</i> × <i>B</i> = {(<i>a</i>, <i>b</i>) ∶ <i>a</i> ∈ <i>A</i>, <i>b</i> ∈ <i>B</i>}',
        legend: [
          '<i>A</i> × <i>B</i> = Cartesian product of <i>A</i> and <i>B</i>',
          '(<i>a</i>, <i>b</i>) = ordered pair; first coordinate <i>a</i>, second <i>b</i>',
        ],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Cardinality of a Cartesian product.</b> If <i>n</i>(<i>A</i>) = <i>p</i> and <i>n</i>(<i>B</i>) = <i>q</i> (both finite), then',
      },
      {
        t: 'formula',
        kicker: 'Cardinality of a Cartesian product',
        main: '<i>n</i>(<i>A</i> × <i>B</i>) = <i>n</i>(<i>A</i>) · <i>n</i>(<i>B</i>) = <i>pq</i>',
        legend: [
          '<i>n</i>(<i>X</i>) = number of elements (cardinality) of set <i>X</i>',
          '<i>p</i> = number of elements of <i>A</i>, <i>n</i>(<i>A</i>)',
          '<i>q</i> = number of elements of <i>B</i>, <i>n</i>(<i>B</i>)',
        ],
        note: '(both finite)',
      },
      {
        t: 'formula',
        kicker: 'Membership test',
        main: '(<i>x</i>, <i>y</i>) ∈ <i>A</i> × <i>B</i> ⟺ <i>x</i> ∈ <i>A</i> and <i>y</i> ∈ <i>B</i>',
        legend: [
          '<i>A</i> × <i>B</i> = Cartesian product of <i>A</i> and <i>B</i>',
          '<i>x</i>, <i>y</i> = the two coordinates being tested',
        ],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Self-product and the <i>n</i>-fold product.</b> Writing <i>A</i> × <i>A</i> = <i>A</i><sup>2</sup>, and in general for <i>n</i> sets <i>A</i><sub>1</sub>, <i>A</i><sub>2</sub>, …, <i>A</i><sub><i>n</i></sub>:',
      },
      {
        t: 'formula',
        kicker: 'Self-product and the <i>n</i>-fold product',
        main: '<i>A</i><sub>1</sub> × <i>A</i><sub>2</sub> × ⋯ × <i>A</i><sub><i>n</i></sub> = {(<i>a</i><sub>1</sub>, <i>a</i><sub>2</sub>, …, <i>a</i><sub><i>n</i></sub>) ∶ <i>a</i><sub><i>i</i></sub> ∈ <i>A</i><sub><i>i</i></sub>, 1 ≤ <i>i</i> ≤ <i>n</i>}<br><i>n</i>(<i>A</i><sub>1</sub> × ⋯ × <i>A</i><sub><i>n</i></sub>) = <i>n</i>(<i>A</i><sub>1</sub>) · <i>n</i>(<i>A</i><sub>2</sub>) ⋯ <i>n</i>(<i>A</i><sub><i>n</i></sub>)<br><i>n</i>(<i>A</i><sup><i>m</i></sup>) = (<i>n</i>(<i>A</i>))<sup><i>m</i></sup>',
        legend: [
          '<i>A</i><sup>2</sup>, <i>A</i><sup><i>m</i></sup> = <i>A</i> × <i>A</i>, and the <i>m</i>-fold self-product',
          '<i>n</i>(<i>X</i>) = number of elements (cardinality) of set <i>X</i>',
        ],
        note: null,
      },
      {
        t: 'p',
        html: 'The elements (<i>a</i><sub>1</sub>, …, <i>a</i><sub><i>n</i></sub>) are called <b>ordered <i>n</i>-tuples</b>. For <i>n</i> = 2 they are ordered pairs; for <i>n</i> = 3, ordered triples. (ℝ<sup>3</sup> = ℝ × ℝ × ℝ is 3-D space.)',
      },
      {
        t: 'p',
        html: '<b>Number of subsets of <i>A</i> × <i>B</i>.</b> Since <i>A</i> × <i>B</i> has <i>pq</i> elements, the number of its subsets is',
      },
      {
        t: 'formula',
        kicker: 'Number of subsets of <i>A</i> × <i>B</i>',
        main: '2<sup><i>n</i>(<i>A</i>×<i>B</i>)</sup> = 2<sup><i>pq</i></sup>',
        legend: [
          '<i>n</i>(<i>X</i>) = number of elements (cardinality) of set <i>X</i>',
          '<i>pq</i> = number of elements of <i>A</i> × <i>B</i>',
        ],
        note: null,
      },
      {
        t: 'p',
        html: '(Each such subset will later be christened a relation from <i>A</i> to <i>B</i>: the bridge to Topic 02.)',
      },
      {
        t: 'p',
        html: '<b>Algebraic identities (Cartesian product distributes over set operations).</b> For any sets <i>A</i>, <i>B</i>, <i>C</i>, <i>D</i>:',
      },
      {
        t: 'formula',
        kicker: 'Algebraic identities (Cartesian product distributes over set operations)',
        main: '<i>A</i> × (<i>B</i> ∪ <i>C</i>) = (<i>A</i> × <i>B</i>) ∪ (<i>A</i> × <i>C</i>)<br><i>A</i> × (<i>B</i> ∩ <i>C</i>) = (<i>A</i> × <i>B</i>) ∩ (<i>A</i> × <i>C</i>)<br><i>A</i> × (<i>B</i> − <i>C</i>) = (<i>A</i> × <i>B</i>) − (<i>A</i> × <i>C</i>)<br>(<i>A</i> × <i>B</i>) ∩ (<i>C</i> × <i>D</i>) = (<i>A</i> ∩ <i>C</i>) × (<i>B</i> ∩ <i>D</i>)',
        legend: ['<i>A</i>, <i>B</i>, <i>C</i>, <i>D</i> = any sets'],
        note: null,
      },
      {
        t: 'table',
        title: null,
        head: ['Symbol', 'Meaning'],
        rows: [
          ['(<i>a</i>, <i>b</i>)', 'ordered pair; first coordinate <i>a</i>, second <i>b</i>'],
          ['<i>A</i> × <i>B</i>', 'Cartesian product of <i>A</i> and <i>B</i>'],
          ['<i>n</i>(<i>X</i>)', 'number of elements (cardinality) of set <i>X</i>'],
          ['<i>A</i><sup>2</sup>, <i>A</i><sup><i>m</i></sup>', '<i>A</i> × <i>A</i>, and the <i>m</i>-fold self-product'],
          ['∅', 'empty set'],
        ],
      },

      { t: 'part', title: 'Key theorems and proofs' },
      {
        t: 'p',
        html: 'Two results are worth proving in full because Boards and JEE both lean on them, and the reasoning (not the formula) is what protects you in a trap.',
      },
      {
        t: 'p',
        html: '<b>Theorem 1 (Counting): <i>n</i>(<i>A</i> × <i>B</i>) = <i>n</i>(<i>A</i>) · <i>n</i>(<i>B</i>)</b>',
      },
      {
        t: 'p',
        html: '<b>Claim.</b> If <i>A</i> and <i>B</i> are finite sets with <i>n</i>(<i>A</i>) = <i>m</i> and <i>n</i>(<i>B</i>) = <i>n</i>, then <i>n</i>(<i>A</i> × <i>B</i>) = <i>mn</i>.',
      },
      {
        t: 'p',
        html: '<b>Proof.</b> Write the elements explicitly:<br><i>A</i> = {<i>a</i><sub>1</sub>, <i>a</i><sub>2</sub>, …, <i>a</i><sub><i>m</i></sub>}, <i>B</i> = {<i>b</i><sub>1</sub>, <i>b</i><sub>2</sub>, …, <i>b</i><sub><i>n</i></sub>}.',
      },
      {
        t: 'p',
        html: '<b>Step 1: slice the product by first coordinate.</b> Group all pairs of <i>A</i> × <i>B</i> according to which element of <i>A</i> sits in the first slot. Fix one element <i>a</i><sub><i>i</i></sub>. The pairs whose first coordinate is <i>a</i><sub><i>i</i></sub> are<br>{<i>a</i><sub><i>i</i></sub>} × <i>B</i> = {(<i>a</i><sub><i>i</i></sub>, <i>b</i><sub>1</sub>), (<i>a</i><sub><i>i</i></sub>, <i>b</i><sub>2</sub>), …, (<i>a</i><sub><i>i</i></sub>, <i>b</i><sub><i>n</i></sub>)}.<br><b>Why this step?</b> Because every pair in <i>A</i> × <i>B</i> has exactly one first coordinate, so this slicing sorts all pairs into clean, separate groups with nothing left over and nothing double-counted.',
      },
      {
        t: 'p',
        html: '<b>Step 2: count one slice.</b> The set {<i>a</i><sub><i>i</i></sub>} × <i>B</i> has exactly as many pairs as <i>B</i> has elements, namely <i>n</i>. (One pair per choice of second coordinate.)',
      },
      {
        t: 'p',
        html: '<b>Step 3: the slices don’t overlap.</b> For two different first coordinates <i>a</i><sub><i>i</i></sub> ≠ <i>a</i><sub><i>k</i></sub>, a pair can’t simultaneously start with <i>a</i><sub><i>i</i></sub> and with <i>a</i><sub><i>k</i></sub>, so<br>({<i>a</i><sub><i>i</i></sub>} × <i>B</i>) ∩ ({<i>a</i><sub><i>k</i></sub>} × <i>B</i>) = ∅.<br><b>Why this matters:</b> disjoint groups let us simply add their sizes.',
      },
      {
        t: 'p',
        html: '<b>Step 4: add up.</b> There are <i>m</i> slices, each of size <i>n</i>, all disjoint, and together they form all of <i>A</i> × <i>B</i>:<br><i>n</i>(<i>A</i> × <i>B</i>) = <i>n</i> + <i>n</i> + ⋯ + <i>n</i> (<i>m</i> times) = <i>mn</i>.',
      },
      {
        t: 'p',
        html: 'This is just the <b>multiplication principle of counting</b> dressed in set notation: “<i>m</i> independent choices followed by <i>n</i> independent choices give <i>mn</i> outcomes.”',
      },
      {
        t: 'p',
        html: '<b>Theorem 2 (Distributivity): <i>A</i> × (<i>B</i> ∩ <i>C</i>) = (<i>A</i> × <i>B</i>) ∩ (<i>A</i> × <i>C</i>)</b>',
      },
      {
        t: 'p',
        html: 'The standard way to prove two sets are equal is to show each is a subset of the other, i.e., take an arbitrary element of the left side and show it lies on the right, and vice versa. Here a single biconditional chain does both directions at once:',
      },
      {
        t: 'p',
        html: '(<i>x</i>, <i>y</i>) ∈ <i>A</i> × (<i>B</i> ∩ <i>C</i>) ⟺ <i>x</i> ∈ <i>A</i> and <i>y</i> ∈ (<i>B</i> ∩ <i>C</i>)<br>⟺ <i>x</i> ∈ <i>A</i> and (<i>y</i> ∈ <i>B</i> and <i>y</i> ∈ <i>C</i>)<br>⟺ (<i>x</i> ∈ <i>A</i> and <i>y</i> ∈ <i>B</i>) and (<i>x</i> ∈ <i>A</i> and <i>y</i> ∈ <i>C</i>)<br>⟺ (<i>x</i>, <i>y</i>) ∈ (<i>A</i> × <i>B</i>) and (<i>x</i>, <i>y</i>) ∈ (<i>A</i> × <i>C</i>)<br>⟺ (<i>x</i>, <i>y</i>) ∈ (<i>A</i> × <i>B</i>) ∩ (<i>A</i> × <i>C</i>).<br>Every step is reversible, so the two sets contain exactly the same pairs.',
      },
      {
        t: 'p',
        html: 'The lone subtle move is the third line: we duplicated the condition “<i>x</i> ∈ <i>A</i>” so it could attach to each branch. This works because “<i>x</i> ∈ <i>A</i> and (<i>P</i> and <i>Q</i>)” is logically identical to “(<i>x</i> ∈ <i>A</i> and <i>P</i>) and (<i>x</i> ∈ <i>A</i> and <i>Q</i>)”: the distributive law of logic mirrors the distributive law of sets.',
      },
      {
        t: 'p',
        html: 'A favourite exam manoeuvre runs the definition backwards: you are handed the product and asked for the sets.',
      },
      {
        t: 'proc',
        title: 'Procedure: Recovering A and B from a given A × B',
        steps: [
          '<b>Harvest first coordinates.</b> Collect the first entry of every ordered pair; the distinct values form <i>A</i>.',
          '<b>Harvest second coordinates.</b> Collect the second entry of every pair; the distinct values form <i>B</i>.',
          '<b>Sanity check with the count.</b> Verify <i>n</i>(<i>A</i>) · <i>n</i>(<i>B</i>) equals the number of pairs you were given. If it doesn’t match, either a pair is missing or the set wasn’t a genuine Cartesian product.',
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Let <i>A</i> = {2, 3, 5} and <i>B</i> = {<i>x</i>, <i>y</i>}. Write <i>A</i> × <i>B</i> and <i>B</i> × <i>A</i>, state <i>n</i>(<i>A</i> × <i>B</i>), and verify that <i>A</i> × <i>B</i> ≠ <i>B</i> × <i>A</i>.',
        steps: [
          '<b>Given:</b> <i>A</i> = {2, 3, 5}, <i>B</i> = {<i>x</i>, <i>y</i>}.',
          'Pair every element of <i>A</i> with every element of <i>B</i> (first coordinate from <i>A</i>):<br><i>A</i> × <i>B</i> = {(2, <i>x</i>), (2, <i>y</i>), (3, <i>x</i>), (3, <i>y</i>), (5, <i>x</i>), (5, <i>y</i>)}',
          'Now first coordinate from <i>B</i>:<br><i>B</i> × <i>A</i> = {(<i>x</i>, 2), (<i>x</i>, 3), (<i>x</i>, 5), (<i>y</i>, 2), (<i>y</i>, 3), (<i>y</i>, 5)}',
          'Count: <i>n</i>(<i>A</i> × <i>B</i>) = <i>n</i>(<i>A</i>) · <i>n</i>(<i>B</i>) = 3 × 2 = 6. ✓ (And <i>n</i>(<i>B</i> × <i>A</i>) = 2 × 3 = 6 as well.)',
          'A pair such as (2, <i>x</i>) lies in <i>A</i> × <i>B</i> but <b>not</b> in <i>B</i> × <i>A</i> (where the first coordinate must come from <i>B</i>). Since the two sets share no common element here,',
        ],
        ans: '<i>A</i> × <i>B</i> ≠ <i>B</i> × <i>A</i>.',
      },
      {
        t: 'ex',
        tag: 'JEE Main: Speed Trap',
        q: '<i>A</i> = {1, 2} and <i>B</i> = {1, 2, 3}. How many ordered pairs are <b>common</b> to <i>A</i> × <i>B</i> and <i>B</i> × <i>A</i>?',
        steps: [
          '<b>The trap.</b> Most students brute-force it: list all 6 pairs of <i>A</i> × <i>B</i>, all 6 of <i>B</i> × <i>A</i>, then eyeball matches. Slow and error-prone. A second trap is to remember “<i>A</i> × <i>B</i> ≠ <i>B</i> × <i>A</i>” and wrongly conclude the answer is 0.',
          '<b>Speed move.</b> Use the identity (<i>A</i> × <i>B</i>) ∩ (<i>C</i> × <i>D</i>) = (<i>A</i> ∩ <i>C</i>) × (<i>B</i> ∩ <i>D</i>) with <i>C</i> = <i>B</i>, <i>D</i> = <i>A</i>:<br>(<i>A</i> × <i>B</i>) ∩ (<i>B</i> × <i>A</i>) = (<i>A</i> ∩ <i>B</i>) × (<i>B</i> ∩ <i>A</i>) = (<i>A</i> ∩ <i>B</i>) × (<i>A</i> ∩ <i>B</i>).',
          'Here <i>A</i> ∩ <i>B</i> = {1, 2}, so the common pairs are {1, 2} × {1, 2}, giving<br><i>n</i> = 2 × 2 = 4.',
          '(Verified by direct enumeration.)',
        ],
        ans: '4 common pairs, namely (1, 1), (1, 2), (2, 1), (2, 2), obtained in one line.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'The set <i>A</i> × <i>A</i> has 16 elements, and two of them are (1, 4) and (3, 2). Find <i>A</i>. Then find the number of subsets of <i>A</i> × <i>A</i> that <b>contain</b> the pair (4, 1).',
        steps: [
          'This links three ideas: cardinality, coordinate-membership, and power-set counting.',
          '<b>Step 1: find <i>n</i>(<i>A</i>).</b> Since <i>n</i>(<i>A</i> × <i>A</i>) = (<i>n</i>(<i>A</i>))<sup>2</sup> = 16, we get <i>n</i>(<i>A</i>) = 4.',
          '<b>Step 2: find the elements of <i>A</i>.</b> If (1, 4) ∈ <i>A</i> × <i>A</i> then both 1 ∈ <i>A</i> and 4 ∈ <i>A</i>. If (3, 2) ∈ <i>A</i> × <i>A</i> then 3 ∈ <i>A</i> and 2 ∈ <i>A</i>. That already forces the four distinct elements {1, 2, 3, 4} ⊆ <i>A</i>. But <i>n</i>(<i>A</i>) = 4, so there is no room for more:<br><i>A</i> = {1, 2, 3, 4}.',
          '<b>Step 3: count subsets containing a fixed element.</b> <i>A</i> × <i>A</i> has 16 elements. We want subsets that must include (4, 1) (which is indeed in <i>A</i> × <i>A</i> since 4, 1 ∈ <i>A</i>). Fix (4, 1) as “always in”; each of the remaining 15 pairs is independently in-or-out:',
        ],
        ans: 'number of such subsets = 2<sup>16−1</sup> = 2<sup>15</sup> = 32,768.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'Let <i>A</i> = {1, 2, 3, 4, 5, 6}, so <i>A</i> × <i>A</i> has 36 ordered pairs. Find<br>(a) the number of pairs (<i>x</i>, <i>y</i>) ∈ <i>A</i> × <i>A</i> such that <i>x</i> divides <i>y</i>;<br>(b) the number of pairs (<i>x</i>, <i>y</i>) ∈ <i>A</i> × <i>A</i> such that <i>x</i> ∣ <i>y</i> <b>or</b> <i>y</i> ∣ <i>x</i>.',
        steps: [
          '<b>(a)</b> Slice by the first coordinate <i>x</i> and count how many <i>y</i> ∈ <i>A</i> are multiples of <i>x</i>. The number of multiples of <i>x</i> in {1, …, 6} is ⌊<frac><num>6</num><den><i>x</i></den></frac>⌋:<br><i>x</i> = 1: multiples 1,2,3,4,5,6; count 6<br><i>x</i> = 2: multiples 2,4,6; count 3<br><i>x</i> = 3: multiples 3,6; count 2<br><i>x</i> = 4: multiples 4; count 1<br><i>x</i> = 5: multiples 5; count 1<br><i>x</i> = 6: multiples 6; count 1<br>#{<i>x</i> ∣ <i>y</i>} = 6 + 3 + 2 + 1 + 1 + 1 = 14.',
          '<b>(b)</b> Use inclusion–exclusion. By the symmetry <i>x</i> ↔ <i>y</i>, the count of pairs with <i>y</i> ∣ <i>x</i> is also 14. Their overlap is the set of pairs satisfying both <i>x</i> ∣ <i>y</i> and <i>y</i> ∣ <i>x</i>, which forces <i>x</i> = <i>y</i>: there are exactly 6 such pairs (1, 1), …, (6, 6). Hence<br>#{<i>x</i> ∣ <i>y</i> or <i>y</i> ∣ <i>x</i>} = 14 + 14 − 6 = 22.',
          '(Both confirmed by exhaustive check over the 36 pairs.) The elegance is that a divisibility question becomes a clean counting problem the instant you view the domain as <i>A</i> × <i>A</i>.',
        ],
        ans: '(a) 14, (b) 22.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] If <i>A</i> = {<i>a</i>, <i>b</i>} and <i>B</i> = {1, 2, 3}, write <i>A</i> × <i>B</i> and state <i>n</i>(<i>A</i> × <i>B</i>).',
            a: '<i>A</i> × <i>B</i> = {(<i>a</i>, 1), (<i>a</i>, 2), (<i>a</i>, 3), (<i>b</i>, 1), (<i>b</i>, 2), (<i>b</i>, 3)}; <i>n</i>(<i>A</i> × <i>B</i>) = 6.',
          },
          {
            q: '[CBSE] Given <i>A</i> × <i>B</i> = {(<i>p</i>, 1), (<i>p</i>, 2), (<i>q</i>, 1), (<i>q</i>, 2)}, find <i>A</i> and <i>B</i>.',
            a: '<i>A</i> = {<i>p</i>, <i>q</i>}, <i>B</i> = {1, 2}.',
          },
          {
            q: '[JEE Main] If <i>n</i>(<i>A</i>) = 5 and <i>n</i>(<i>B</i>) = 4, find the number of subsets of <i>A</i> × <i>B</i>.',
            a: '2<sup>5×4</sup> = 2<sup>20</sup> = 1,048,576.',
          },
          {
            q: '[JEE Main] Let <i>A</i> = {<i>x</i> ∶ <i>x</i><sup>2</sup> − 5<i>x</i> + 6 = 0} and <i>B</i> = {2, 4}. Write <i>A</i> × <i>B</i> and <i>B</i> × <i>A</i>. Are they equal?',
            a: '<i>A</i> = {2, 3} (roots of <i>x</i><sup>2</sup> − 5<i>x</i> + 6); <i>A</i> × <i>B</i> and <i>B</i> × <i>A</i> each have 4 pairs but differ (e.g. (2, 4) ∈ <i>A</i> × <i>B</i> whereas (2, 4) ∉ <i>B</i> × <i>A</i>), so they are <b>not equal</b>.',
          },
          {
            q: '[JEE Advanced] Let <i>A</i> = {1, 2, 3, 4, 5}. Find the number of ordered pairs (<i>x</i>, <i>y</i>) ∈ <i>A</i> × <i>A</i> such that <i>x</i> + <i>y</i> is a multiple of 3.',
            a: '9.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'If <i>n</i>(<i>A</i>) = 3 and <i>n</i>(<i>B</i>) = 4, then <i>n</i>(<i>A</i> × <i>B</i>) equals',
        opts: [
          {
            label: '7',
            nudge: '<b>(a)</b> 7: the classic slip of <b>adding</b> 3 + 4 instead of multiplying. Cartesian product pairs every element with every other, so it is multiplicative.',
          },
          { label: '12', nudge: null },
          {
            label: '64',
            nudge: '<b>(c)</b> 64 = 4<sup>3</sup> and <b>(d)</b> 81 = 3<sup>4</sup>: these confuse <i>n</i>(<i>A</i> × <i>B</i>) with a number of functions (<i>n</i>(<i>B</i>)<sup><i>n</i>(<i>A</i>)</sup> = 64 from <i>A</i> to <i>B</i>, or <i>n</i>(<i>A</i>)<sup><i>n</i>(<i>B</i>)</sup> = 81 from <i>B</i> to <i>A</i>) or a power-set-style exponent. Those formulas belong to later topics, not to counting pairs.',
          },
          {
            label: '81',
            nudge: '<b>(c)</b> 64 = 4<sup>3</sup> and <b>(d)</b> 81 = 3<sup>4</sup>: these confuse <i>n</i>(<i>A</i> × <i>B</i>) with a number of functions (<i>n</i>(<i>B</i>)<sup><i>n</i>(<i>A</i>)</sup> = 64 from <i>A</i> to <i>B</i>, or <i>n</i>(<i>A</i>)<sup><i>n</i>(<i>B</i>)</sup> = 81 from <i>B</i> to <i>A</i>) or a power-set-style exponent. Those formulas belong to later topics, not to counting pairs.',
          },
        ],
        correct: 1,
        solution: 'The rule is <i>n</i>(<i>A</i> × <i>B</i>) = <i>n</i>(<i>A</i>) · <i>n</i>(<i>B</i>) = 3 × 4 = 12.',
      },
      {
        t: 'mcq',
        q: 'For non-empty sets <i>A</i> and <i>B</i>, <i>A</i> × <i>B</i> = <i>B</i> × <i>A</i> holds if and only if',
        opts: [
          {
            label: '<i>A</i> ⊆ <i>B</i>',
            nudge: '<b>(a)</b> <i>A</i> ⊆ <i>B</i>: a subset relation isn’t enough; e.g. <i>A</i> = {1}, <i>B</i> = {1, 2} gives unequal products. A trap for students who recall “containment” loosely.',
          },
          { label: '<i>A</i> = <i>B</i>', nudge: null },
          {
            label: '<i>A</i> ∩ <i>B</i> = ∅',
            nudge: '<b>(c)</b> <i>A</i> ∩ <i>B</i> = ∅: disjointness actually makes the products share no pairs, the opposite of equality.',
          },
          {
            label: '<i>A</i> and <i>B</i> are both infinite',
            nudge: '<b>(d)</b> infinite: size is irrelevant; ℝ × ℤ ≠ ℤ × ℝ even though both factors are infinite.',
          },
        ],
        correct: 1,
        solution: 'Order in the pairs is rigid, so the products match only when the sets feeding both coordinates are identical.',
      },
      {
        t: 'mcq',
        q: 'If <i>n</i>(<i>A</i>) = 2, the number of subsets of <i>A</i> × <i>A</i> is',
        opts: [
          {
            label: '2',
            nudge: '<b>(a)</b> 2 and <b>(c)</b> 8: mis-tracking the exponent (2<sup>1</sup> or 2<sup>3</sup>), usually from miscounting <i>n</i>(<i>A</i> × <i>A</i>).',
          },
          {
            label: '4',
            nudge: '<b>(b)</b> 4: stopping one step early, reporting <i>n</i>(<i>A</i> × <i>A</i>) itself instead of its subset count. The two-stage structure (count pairs, then exponentiate) is the trap.',
          },
          {
            label: '8',
            nudge: '<b>(a)</b> 2 and <b>(c)</b> 8: mis-tracking the exponent (2<sup>1</sup> or 2<sup>3</sup>), usually from miscounting <i>n</i>(<i>A</i> × <i>A</i>).',
          },
          { label: '16', nudge: null },
        ],
        correct: 3,
        solution: 'First <i>n</i>(<i>A</i> × <i>A</i>) = 2<sup>2</sup> = 4; the number of subsets of a 4-element set is 2<sup>4</sup> = 16.',
      },
      {
        t: 'mcq',
        q: 'Let <i>A</i> = {1, 2} and <i>B</i> = {3, 4}. Which of the following is <b>NOT</b> an element of <i>A</i> × <i>B</i>?',
        opts: [
          {
            label: '(1, 3)',
            nudge: '<b>(a)</b>, <b>(b)</b>, <b>(d)</b> are all legitimate members (first entry from <i>A</i>, second from <i>B</i>).',
          },
          {
            label: '(2, 4)',
            nudge: '<b>(a)</b>, <b>(b)</b>, <b>(d)</b> are all legitimate members (first entry from <i>A</i>, second from <i>B</i>).',
          },
          { label: '(3, 1)', nudge: null },
          {
            label: '(1, 4)',
            nudge: '<b>(a)</b>, <b>(b)</b>, <b>(d)</b> are all legitimate members (first entry from <i>A</i>, second from <i>B</i>).',
          },
        ],
        correct: 2,
        solution: 'In <i>A</i> × <i>B</i> the first coordinate must come from <i>A</i> = {1, 2} and the second from <i>B</i> = {3, 4}. The pair (3, 1) has its coordinates reversed: it belongs to <i>B</i> × <i>A</i>, not <i>A</i> × <i>B</i>. The trap is forgetting that order is fixed; a student who treats (3, 1) and (1, 3) as “the same pair” picks wrongly.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Adding instead of multiplying.</b> The single most common error: writing <i>n</i>(<i>A</i> × <i>B</i>) = <i>n</i>(<i>A</i>) + <i>n</i>(<i>B</i>). Pairing is every-with-every, so it is always a product. Quick gut check: with <i>n</i>(<i>A</i>) = 2 and <i>n</i>(<i>B</i>) = 3 you should get 6 pairs, not 5. Verify by actually listing once, early in your prep, and the muscle memory sticks.',
          '<b>Treating (<i>a</i>, <i>b</i>) and (<i>b</i>, <i>a</i>) as identical.</b> They are equal only when <i>a</i> = <i>b</i>. Reversing coordinates is the most-exploited distractor on the topic. Always read which set feeds the first slot.',
          '<b>The “one missing factor” oversight in counting subsets.</b> Number of subsets of <i>A</i> × <i>B</i> is 2<sup><i>n</i>(<i>A</i>) <i>n</i>(<i>B</i>)</sup>, not 2<sup><i>n</i>(<i>A</i>)+<i>n</i>(<i>B</i>)</sup> and not <i>n</i>(<i>A</i>) · <i>n</i>(<i>B</i>). Compute <i>n</i>(<i>A</i> × <i>B</i>) first, then raise 2 to that power.',
          '<b>Ignoring the empty-set edge case.</b> If a problem sneaks in <i>A</i> = ∅, immediately <i>A</i> × <i>B</i> = ∅: don’t waste time pairing.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed).</b> When a question gives you <i>A</i> × <i>A</i>’s element count and asks for <i>A</i>, take the square root first: <i>n</i>(<i>A</i>) = √(<i>n</i>(<i>A</i> × <i>A</i>)) instantly tells you the size, and the listed pairs hand you the actual elements. For “common pairs of <i>A</i> × <i>B</i> and <i>B</i> × <i>A</i>”, skip enumeration entirely: the answer is (<i>n</i>(<i>A</i> ∩ <i>B</i>))<sup>2</sup>.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Definition',
            note: '<i>A</i> × <i>B</i> = {(<i>a</i>, <i>b</i>) ∶ <i>a</i> ∈ <i>A</i>, <i>b</i> ∈ <i>B</i>}. Order is sacred: (<i>a</i>, <i>b</i>) = (<i>c</i>, <i>d</i>) ⟺ <i>a</i> = <i>c</i>, <i>b</i> = <i>d</i>.',
          },
          {
            f: 'Count',
            note: '<i>n</i>(<i>A</i> × <i>B</i>) = <i>n</i>(<i>A</i>) · <i>n</i>(<i>B</i>); <i>n</i>(<i>A</i><sup><i>m</i></sup>) = (<i>n</i>(<i>A</i>))<sup><i>m</i></sup>.',
          },
          { f: 'Subsets of <i>A</i> × <i>B</i>', note: '2<sup><i>n</i>(<i>A</i>) <i>n</i>(<i>B</i>)</sup> (these become the relations).' },
          { f: 'Not commutative', note: '<i>A</i> × <i>B</i> = <i>B</i> × <i>A</i> ⟺ <i>A</i> = <i>B</i> (non-empty).' },
          { f: 'Empty rule', note: '<i>A</i> × <i>B</i> = ∅ ⟺ <i>A</i> = ∅ or <i>B</i> = ∅.' },
          {
            f: 'Distributes',
            note: '<i>A</i> × (<i>B</i> ∩ <i>C</i>) = (<i>A</i> × <i>B</i>) ∩ (<i>A</i> × <i>C</i>); same for ∪ and −. Also (<i>A</i> × <i>B</i>) ∩ (<i>C</i> × <i>D</i>) = (<i>A</i> ∩ <i>C</i>) × (<i>B</i> ∩ <i>D</i>).',
          },
        ],
        aids: [
          '“Every-with-every” → always <b>multiply</b>, never add.',
          '“Cross flips the slots” → (<i>a</i>, <i>b</i>) ≠ (<i>b</i>, <i>a</i>) unless equal.',
          '“Square-root to size, list to elements” → recovering <i>A</i> from <i>A</i> × <i>A</i>.',
          'ℝ × ℝ = the XY-plane; ℝ<sup>3</sup> = space. Coordinates are ordered pairs/triples.',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 02 · pp. 112–119 ─────────────────────────
  {
    n: '02',
    title: 'Relations',
    kalam: 'A relation R from a set A to a set B is any subset of A × B.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: 'Pure-volume territory for CBSE Boards: almost every year carries a 1–2 mark question on writing a relation in roster form or stating its domain and range, plus the count 2<sup><i>pq</i></sup> (the book’s estimate from past papers, not official figures). JEE Main turns the counting into quick objective questions. (The deeper machinery, reflexive/symmetric/transitive and equivalence relations, is Class 12 material in NCERT and is covered in Topic 04; here we build the foundation everything else stands on.)',
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: 'Picture the WhatsApp contact list on your phone. On one side sits the set of <b>people</b> you know; on the other, the set of <b>phone numbers</b>. Not every person is linked to every number: you’ve connected specific people to specific numbers. That hand-picked set of “person → number” links is exactly what mathematicians call a <b>relation</b>.',
      },
      {
        t: 'p',
        html: 'Here is the key realization. In Topic 01 we built <i>A</i> × <i>B</i>: the set of all possible ordered pairs, every person matched with every number, most of which are meaningless. A relation is simply the <b>meaningful subset</b> you carve out of that giant grid by stating a rule. Formally:',
      },
      {
        t: 'p',
        html: 'A <b>relation <i>R</i> from a set <i>A</i> to a set <i>B</i></b> is any subset of <i>A</i> × <i>B</i>.',
      },
      {
        t: 'p',
        html: 'That’s the whole definition. A relation isn’t some new exotic object: it’s just a chosen portion of the Cartesian product. “Choosing a portion” is what the rule does for you. If <i>A</i> = {Riya, Aman, Sara} and <i>B</i> = {their roll numbers}, the rule “is assigned roll number” picks out three specific pairs from the nine in <i>A</i> × <i>B</i>, and those three pairs are the relation.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> <i>A</i> × <i>B</i> is the full Mumbai local-train timetable: every train against every station, an enormous grid. A relation is the highlighter you run over it: “trains that actually stop at Dadar.” You haven’t created new trains; you’ve selected the relevant pairs. Different highlighters (different rules) give different relations on the same grid.',
      },
      {
        t: 'p',
        html: 'When (<i>a</i>, <i>b</i>) ∈ <i>R</i> we say “<i>a</i> <b>is related to</b> <i>b</i>” and write <i>a</i> <i>R</i> <i>b</i>. When it’s not, we write (<i>a</i>, <i>b</i>) ∉ <i>R</i>.',
      },
      {
        t: 'p',
        html: 'Three companion ideas travel everywhere with a relation:<br>• <b>Domain</b>: the set of all first coordinates that actually show up in <i>R</i>. These are the elements of <i>A</i> that get used. (In the contacts analogy: the people who actually have a number saved.)<br>• <b>Range</b>: the set of all second coordinates that actually show up in <i>R</i>. (The numbers that are actually in use.)<br>• <b>Codomain</b>: the entire set <i>B</i> that second coordinates are allowed to come from, whether or not every element gets used.',
      },
      {
        t: 'p',
        html: 'The distinction between <b>range</b> and <b>codomain</b> is the single most slippery point here. Codomain is the whole target set you declared; range is the part of it that the relation actually reaches. Range is always a subset of codomain, and the two need not be equal. If you declare <i>B</i> = {1, 2, …, 10} as your codomain but your relation only ever outputs {2, 4, 6}, then the range is {2, 4, 6} while the codomain stays {1, …, 10}.',
      },
      {
        t: 'p',
        html: 'A relation can be written three ways:<br>• <b>Roster (list) form:</b> spell out every ordered pair, e.g. <i>R</i> = {(1, 3), (2, 4), (3, 5)}.<br>• <b>Set-builder form:</b> state the rule, e.g. <i>R</i> = {(<i>x</i>, <i>y</i>) ∶ <i>y</i> = <i>x</i> + 2, <i>x</i>, <i>y</i> ∈ <i>A</i>}.<br>• <b>Arrow diagram:</b> draw <i>A</i> and <i>B</i> as two columns of dots and draw an arrow from <i>a</i> to <i>b</i> whenever <i>a</i> <i>R</i> <i>b</i>.',
      },
      { t: 'fig', id: 'm11-02-fig-2.2' },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions.</b><br>• <b>Empty relation is legal.</b> <i>R</i> = ∅ is a perfectly valid relation (the empty subset of <i>A</i> × <i>B</i>). Its domain and range are both ∅.<br>• <b>Universal relation is legal.</b> <i>R</i> = <i>A</i> × <i>B</i> itself is a relation: the one where everything is related to everything.<br>• <b>A relation on a set <i>A</i></b> means a relation from <i>A</i> to itself, i.e. a subset of <i>A</i> × <i>A</i>.<br>• <b>Range ⊆ codomain, always</b>, but domain ⊆ <i>A</i> likewise (a relation needn’t use every element of <i>A</i>).<br>• Roster and arrow-diagram forms only work when the relation has <b>finitely many pairs</b> (in practice, when <i>A</i> and <i>B</i> are finite); for an infinite relation you must use set-builder form.',
      },

      { t: 'part', title: 'Key definitions, formulas and notation' },
      {
        t: 'p',
        html: 'The key ideas to track are <b>set memberships and cardinalities:</b> which pairs belong to a relation, and how many relations there are.',
      },
      {
        t: 'formula',
        kicker: 'Relation',
        main: '<i>R</i> is a relation from <i>A</i> to <i>B</i> ⟺ <i>R</i> ⊆ <i>A</i> × <i>B</i><br><i>a</i> <i>R</i> <i>b</i> ⟺ (<i>a</i>, <i>b</i>) ∈ <i>R</i>',
        legend: [
          '<i>A</i> × <i>B</i> = Cartesian product of <i>A</i> and <i>B</i>',
          '<i>a</i> <i>R</i> <i>b</i> = <i>a</i> is related to <i>b</i>',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Domain, Range, Codomain',
        main: 'Dom(<i>R</i>) = {<i>a</i> ∶ (<i>a</i>, <i>b</i>) ∈ <i>R</i> for some <i>b</i>} ⊆ <i>A</i><br>Range(<i>R</i>) = {<i>b</i> ∶ (<i>a</i>, <i>b</i>) ∈ <i>R</i> for some <i>a</i>} ⊆ <i>B</i><br>Codomain(<i>R</i>) = <i>B</i><br>Range(<i>R</i>) ⊆ Codomain(<i>R</i>)',
        legend: [
          'Dom(<i>R</i>) = set of first coordinates appearing in <i>R</i>',
          'Range(<i>R</i>) = set of second coordinates appearing in <i>R</i>',
          'Codomain = the whole declared target set <i>B</i>',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Special relations',
        main: 'Empty (void) relation: <i>R</i> = ∅<br>Universal relation: <i>R</i> = <i>A</i> × <i>B</i>',
        legend: ['∅ = empty set', '<i>A</i> × <i>B</i> = Cartesian product of <i>A</i> and <i>B</i>'],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Number of relations.</b> If <i>n</i>(<i>A</i>) = <i>p</i> and <i>n</i>(<i>B</i>) = <i>q</i>, then <i>A</i> × <i>B</i> has <i>pq</i> elements, and a relation is any subset of it:',
      },
      {
        t: 'formula',
        kicker: 'Number of relations',
        main: 'Number of relations from <i>A</i> to <i>B</i> = 2<sup><i>n</i>(<i>A</i>) <i>n</i>(<i>B</i>)</sup> = 2<sup><i>pq</i></sup><br>Number of relations on <i>A</i> = 2<sup><i>n</i>(<i>A</i>)<sup>2</sup></sup>',
        legend: [
          '<i>p</i> = number of elements of <i>A</i>, <i>n</i>(<i>A</i>)',
          '<i>q</i> = number of elements of <i>B</i>, <i>n</i>(<i>B</i>)',
        ],
        note: 'For a relation <b>on</b> <i>A</i> (subset of <i>A</i> × <i>A</i>), this becomes 2<sup><i>n</i>(<i>A</i>)<sup>2</sup></sup>.',
      },
      {
        t: 'table',
        title: null,
        head: ['Symbol', 'Meaning'],
        rows: [
          ['<i>R</i> ⊆ <i>A</i> × <i>B</i>', '<i>R</i> is a relation from <i>A</i> to <i>B</i>'],
          ['<i>a</i> <i>R</i> <i>b</i>', '<i>a</i> is related to <i>b</i>, i.e. (<i>a</i>, <i>b</i>) ∈ <i>R</i>'],
          ['Dom(<i>R</i>)', 'set of first coordinates appearing in <i>R</i>'],
          ['Range(<i>R</i>)', 'set of second coordinates appearing in <i>R</i>'],
          ['Codomain', 'the whole declared target set <i>B</i>'],
          ['2<sup><i>pq</i></sup>', 'number of relations from <i>A</i> (<i>p</i> elts) to <i>B</i> (<i>q</i> elts)'],
        ],
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'p',
        html: 'There is no single “derivation” for the definition of a relation, but three procedures carry every exam question, plus one clean count to prove.',
      },
      {
        t: 'proc',
        title: 'Procedure A: Rule → Roster form (and reading off domain/range)',
        steps: [
          '<b>List the playground.</b> Identify <i>A</i> and <i>B</i> (or <i>A</i> × <i>A</i> for a relation on <i>A</i>).',
          '<b>Apply the rule as a filter.</b> Walk through candidate pairs and keep only those satisfying the rule. With a rule like <i>y</i> = <i>x</i> + 2, it’s faster to generate: for each valid <i>x</i> ∈ <i>A</i>, compute <i>y</i> and keep the pair only if <i>y</i> ∈ <i>B</i>.',
          '<b>Discard out-of-set outputs.</b> A value of <i>y</i> produced by the rule but not lying in <i>B</i> is thrown away: this is where careless students add phantom pairs.',
          '<b>Read domain and range off the finished list.</b> Domain = distinct first coordinates; range = distinct second coordinates.',
        ],
      },
      {
        t: 'p',
        html: '<b>Why step 3 matters:</b> a relation lives inside <i>A</i> × <i>B</i>. Any pair whose coordinate escapes the declared sets simply isn’t allowed in, no matter what the rule says.',
      },
      {
        t: 'proc',
        title: 'Procedure B: Roster → Set-builder form',
        steps: [
          '<b>Spot the pattern</b> linking each first coordinate to its second (<i>y</i> = <i>x</i> + 1? <i>x</i> divides <i>y</i>? <i>x</i> + <i>y</i> = 10?).',
          '<b>Write the rule with quantified membership</b>, e.g. <i>R</i> = {(<i>x</i>, <i>y</i>) ∶ <i>y</i> = <i>x</i> + 1, <i>x</i> ∈ <i>A</i>, <i>y</i> ∈ <i>B</i>}.',
          '<b>Verify both ways</b>: every listed pair must satisfy the rule, and the rule must produce no pair you didn’t list.',
        ],
      },
      { t: 'p', html: '<b>Procedure C: Counting relations (the 2<sup><i>pq</i></sup> logic)</b>' },
      {
        t: 'p',
        html: '<b>Claim.</b> If <i>n</i>(<i>A</i>) = <i>p</i> and <i>n</i>(<i>B</i>) = <i>q</i>, the number of relations from <i>A</i> to <i>B</i> is 2<sup><i>pq</i></sup>.',
      },
      {
        t: 'p',
        html: '<b>Reasoning.</b> A relation is a subset of <i>A</i> × <i>B</i>. By the Cartesian-product count (Topic 01), <i>A</i> × <i>B</i> has exactly <i>pq</i> ordered pairs. To build a subset, each of those <i>pq</i> pairs faces an independent yes/no decision: “is this pair in <i>R</i> or not?” That’s 2 choices per pair, made <i>pq</i> times independently, so by the multiplication principle:<br>2 × 2 × ⋯ × 2 (<i>pq</i> factors) = 2<sup><i>pq</i></sup>.',
      },
      {
        t: 'p',
        html: 'This count <b>includes</b> both extreme cases: the empty relation (all “no”) and the universal relation <i>A</i> × <i>B</i> (all “yes”). So the number of non-empty relations is 2<sup><i>pq</i></sup> − 1.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Let <i>A</i> = {1, 2, 3, 4, 5, 6}. A relation <i>R</i> on <i>A</i> is defined by <i>R</i> = {(<i>x</i>, <i>y</i>) ∶ <i>y</i> = <i>x</i> + 2, <i>x</i>, <i>y</i> ∈ <i>A</i>}. Write <i>R</i> in roster form and state its domain, range, and codomain.',
        steps: [
          '<b>Generate pairs:</b> for each <i>x</i>, compute <i>y</i> = <i>x</i> + 2 and keep only if <i>y</i> ∈ <i>A</i>.',
          '<i>x</i> = 1 ⇒ <i>y</i> = 3 ✓; <i>x</i> = 2 ⇒ <i>y</i> = 4 ✓; <i>x</i> = 3 ⇒ <i>y</i> = 5 ✓; <i>x</i> = 4 ⇒ <i>y</i> = 6 ✓; <i>x</i> = 5 ⇒ <i>y</i> = 7 ∉ <i>A</i> ✗; <i>x</i> = 6 ⇒ <i>y</i> = 8 ∉ <i>A</i> ✗.',
          'Note that 5, 6 ∈ <i>A</i> never appear as first coordinates (for <i>x</i> = 5, 6 the rule gives <i>y</i> = 7, 8, which lie outside <i>A</i>), so they’re in <i>A</i> but not in the domain: a clean illustration that domain ⊆ <i>A</i> need not be all of <i>A</i>.',
        ],
        ans: '<i>R</i> = {(1, 3), (2, 4), (3, 5), (4, 6)}<br>• <b>Domain</b> (first coordinates) = {1, 2, 3, 4}<br>• <b>Range</b> (second coordinates) = {3, 4, 5, 6}<br>• <b>Codomain</b> = <i>A</i> = {1, 2, 3, 4, 5, 6}',
      },
      {
        t: 'ex',
        tag: 'JEE Main: Speed Trap',
        q: 'Set <i>A</i> has 3 elements and set <i>B</i> has 4 elements. How many relations can be defined from <i>A</i> to <i>B</i>? How many of them are <b>non-empty</b>?',
        steps: [
          '<b>The trap.</b> The two reflex wrong answers are 3 × 4 = 12 (that’s the number of ordered pairs, <i>n</i>(<i>A</i> × <i>B</i>), not relations) and 2<sup>3+4</sup> = 128 (adding instead of multiplying in the exponent). Both come from not remembering that a relation is a subset of <i>A</i> × <i>B</i>.',
          '<b>Speed move.</b> Relations = 2<sup><i>n</i>(<i>A</i>) <i>n</i>(<i>B</i>)</sup> = 2<sup>3×4</sup> = 2<sup>12</sup>.<br>Total relations = 2<sup>12</sup> = 4096.',
          'The empty relation is one of these, so<br>Non-empty relations = 4096 − 1 = 4095.',
        ],
        ans: '4096 and 4095.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A relation <i>R</i> is defined on the set of integers ℤ by <i>R</i> = {(<i>x</i>, <i>y</i>) ∶ <i>x</i>, <i>y</i> ∈ ℤ, <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> = 25}. Write <i>R</i> in roster form and find its domain and range.',
        steps: [
          'This fuses relation-building with finding integer (lattice-point) solutions of an equation.',
          'Find all integer pairs with <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> = 25. Since 25 = 0<sup>2</sup> + 5<sup>2</sup> = 3<sup>2</sup> + 4<sup>2</sup>, the squares available are 0, 9, 16, 25, in the combinations 25 + 0, 0 + 25, 9 + 16, 16 + 9. Attaching all sign choices:<br><i>R</i> = {(0, 5), (0, −5), (5, 0), (−5, 0), (3, 4), (3, −4), (−3, 4), (−3, −4), (4, 3), (4, −3), (−4, 3), (−4, −3)}',
          'That’s 12 ordered pairs (geometrically, the 12 lattice points on a circle of radius 5).',
          '• <b>Domain</b> = {−5, −4, −3, 0, 3, 4, 5}<br>• <b>Range</b> = {−5, −4, −3, 0, 3, 4, 5}',
          'By the symmetry of <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> in <i>x</i> and <i>y</i>, domain and range coincide here.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'Let <i>A</i> = {1, 2, 3}. How many relations on <i>A</i> contain <b>at least one</b> of the “diagonal” pairs (1, 1), (2, 2), (3, 3)?',
        steps: [
          'A relation on <i>A</i> is a subset of <i>A</i> × <i>A</i>, which has 3<sup>2</sup> = 9 elements, so there are 2<sup>9</sup> = 512 relations in total. Counting “at least one of three pairs” directly invites messy inclusion–exclusion; <b>complementary counting</b> is cleaner.',
          '<b>Count the relations containing NONE of the three diagonal pairs.</b> Force all three of (1, 1), (2, 2), (3, 3) to be <b>out</b>. That leaves the remaining 9 − 3 = 6 ordered pairs each free to be in or out:<br>relations with no diagonal pair = 2<sup>6</sup> = 64.',
          '<b>Subtract from the total:</b><br>at least one diagonal pair = 512 − 64 = 448.',
          'The lesson is structural: fixing <i>k</i> specific pairs as “must be in” or “must be out” freezes <i>k</i> of the <i>n</i><sup>2</sup> independent yes/no switches, and the count becomes 2<sup>(<i>n</i><sup>2</sup>−<i>k</i>)</sup>. Here we used it through the complement.',
        ],
        ans: '448.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Let <i>A</i> = {1, 2, 3, 4} and <i>R</i> = {(<i>x</i>, <i>y</i>) ∶ <i>y</i> = <i>x</i>, <i>x</i>, <i>y</i> ∈ <i>A</i>}. Write <i>R</i> in roster form and state its domain and range.',
            a: '<i>R</i> = {(1, 1), (2, 2), (3, 3), (4, 4)}; domain = range = {1, 2, 3, 4}.',
          },
          {
            q: '[CBSE] A relation is given by <i>R</i> = {(2, 1), (3, 2), (4, 3), (5, 4)}. State its domain and range, and write <i>R</i> in set-builder form.',
            a: 'Domain = {2, 3, 4, 5}, range = {1, 2, 3, 4}; <i>R</i> = {(<i>x</i>, <i>y</i>) ∶ <i>y</i> = <i>x</i> − 1, <i>x</i> ∈ {2, 3, 4, 5}}.',
          },
          {
            q: '[JEE Main] If <i>n</i>(<i>A</i>) = 4 and <i>n</i>(<i>B</i>) = 5, find the total number of relations from <i>A</i> to <i>B</i> and the number of non-empty relations.',
            a: 'Total = 2<sup>20</sup> = 1,048,576; non-empty = 1,048,575.',
          },
          {
            q: '[JEE Main] Let <i>A</i> = {1, 2, 3, 4, 5, 6} and <i>R</i> = {(<i>x</i>, <i>y</i>) ∶ <i>x</i> + <i>y</i> = 7, <i>x</i>, <i>y</i> ∈ <i>A</i>}. Write <i>R</i> in roster form and find <i>n</i>(<i>R</i>), its domain, and its range.',
            a: '<i>R</i> = {(1, 6), (2, 5), (3, 4), (4, 3), (5, 2), (6, 1)}; <i>n</i>(<i>R</i>) = 6; domain = range = {1, 2, 3, 4, 5, 6}.',
          },
          {
            q: '[JEE Advanced] Let <i>A</i> = {1, 2, 3, 4}. How many relations on <i>A</i> contain the pairs (1, 2) and (2, 1) but do <b>not</b> contain (3, 3)?',
            a: '2<sup>(16−3)</sup> = 2<sup>13</sup> = 8192.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'If <i>n</i>(<i>A</i>) = 2 and <i>n</i>(<i>B</i>) = 3, the number of relations from <i>A</i> to <i>B</i> is',
        opts: [
          {
            label: '6',
            nudge: '<b>(a)</b> 6 = 2 × 3 = <i>n</i>(<i>A</i> × <i>B</i>): the number of ordered pairs, not the number of subsets. The most common slip.',
          },
          { label: '8', nudge: '<b>(b)</b> 8 = 2<sup>3</sup>: exponent mistakenly set to <i>n</i>(<i>B</i>) alone.' },
          { label: '12', nudge: '<b>(c)</b> 12: a doubling-then-multiplying muddle (2 · 6); no valid route gives this.' },
          { label: '64', nudge: null },
        ],
        correct: 3,
        solution: 'Relations = 2<sup><i>n</i>(<i>A</i>) <i>n</i>(<i>B</i>)</sup> = 2<sup>6</sup> = 64.',
      },
      {
        t: 'mcq',
        q: 'A relation <i>R</i> from a non-empty set <i>A</i> to a non-empty set <i>B</i> is',
        opts: [
          {
            label: 'any subset of <i>A</i> ∪ <i>B</i>',
            nudge: '<b>(a)</b> confuses the union of the sets with their product; relations live in the grid of pairs, not in <i>A</i> ∪ <i>B</i>.',
          },
          { label: 'any subset of <i>A</i> × <i>B</i>', nudge: null },
          {
            label: 'any element of <i>A</i> × <i>B</i>',
            nudge: '<b>(c)</b> a single ordered pair is one element, not a relation (a relation is a set of such pairs: possibly one, possibly none, possibly many).',
          },
          {
            label: 'the set <i>A</i> × <i>B</i> itself only',
            nudge: '<b>(d)</b> describes only the universal relation; that’s one specific relation, not the general definition.',
          },
        ],
        correct: 1,
        solution: 'That is the definition.',
      },
      {
        t: 'mcq',
        q: 'For <i>R</i> = {(1, 2), (2, 4), (3, 6)}, the range of <i>R</i> is',
        opts: [
          {
            label: '{1, 2, 3}',
            nudge: '<b>(a)</b> {1, 2, 3} is the <b>domain</b> (first coordinates): the classic domain/range swap.',
          },
          { label: '{2, 4, 6}', nudge: null },
          {
            label: '{1, 2, 3, 4, 6}',
            nudge: '<b>(c)</b> and <b>(d)</b> dump first and second coordinates together; range uses only the second slot.',
          },
          {
            label: '{1, 2, 4, 6}',
            nudge: '<b>(d)</b> {1, 2, 4, 6} mixes a first coordinate (1) in with the second coordinates; range uses only the second slot.',
          },
        ],
        correct: 1,
        solution: 'Range is the set of second coordinates.',
      },
      {
        t: 'mcq',
        q: 'Let <i>R</i> = {(<i>x</i>, <i>y</i>) ∶ <i>x</i>, <i>y</i> ∈ {1, 2, 3}, <i>x</i> < <i>y</i>}. Then <i>n</i>(<i>R</i>) equals',
        opts: [
          { label: '3', nudge: null },
          {
            label: '6',
            nudge: '<b>(b)</b> 6 counts every pair with <i>x</i> ≠ <i>y</i> (both <i>x</i> < <i>y</i> and <i>x</i> > <i>y</i>); the strict-inequality filter keeps only half.',
          },
          {
            label: '9',
            nudge: '<b>(c)</b> 9 counts all of {1, 2, 3} × {1, 2, 3}, ignoring the condition <i>x</i> < <i>y</i>.',
          },
          { label: '2', nudge: '<b>(d)</b> 2 typically from missing the pair (2, 3) or (1, 3) while listing.' },
        ],
        correct: 0,
        solution: 'The pairs with <i>x</i> < <i>y</i> are (1, 2), (1, 3), (2, 3): exactly 3.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Domain–range swap.</b> Reading second coordinates as the domain or first as the range. Lock it in: <b>domain = left = inputs</b>, <b>range = right = outputs</b>. (This is the same “order matters in a pair” trap from Cartesian products, wearing a new costume.)',
          '<b>Confusing range with codomain.</b> Codomain is the whole declared set <i>B</i>; range is only the part actually hit. If a question gives <i>B</i> explicitly and asks for range, do <b>not</b> just write <i>B</i>: list the second coordinates that genuinely appear.',
          '<b><i>pq</i> vs 2<sup><i>pq</i></sup> for counting relations.</b> <i>pq</i> is the number of pairs; 2<sup><i>pq</i></sup> is the number of relations. Forgetting to exponentiate (or adding <i>p</i> + <i>q</i> in the exponent) wrecks the count.',
          '<b>Phantom pairs in roster form.</b> Generating a <i>y</i> from the rule that lies outside <i>B</i>, then wrongly including it. Always check the output actually belongs to the target set.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed).</b> For counting questions, fix in your mind two anchors: pairs = <i>pq</i> and relations = 2<sup><i>pq</i></sup>. When some pairs are forced in or out, freeze them: each forced pair removes one factor of 2, giving 2<sup>(<i>pq</i>−<i>k</i>)</sup> for <i>k</i> forced pairs. And for “at least one” conditions, count the <b>complement</b> (“none of them”) and subtract from 2<sup><i>pq</i></sup>: almost always faster than inclusion–exclusion.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Definition',
            note: 'a relation from <i>A</i> to <i>B</i> is any subset <i>R</i> ⊆ <i>A</i> × <i>B</i>. (<i>a</i>, <i>b</i>) ∈ <i>R</i> ⟺ <i>a</i> <i>R</i> <i>b</i>.',
          },
          {
            f: '<b>Domain</b> = first coordinates used; <b>Range</b> = second coordinates used; <b>Codomain</b> = <i>B</i> (whole declared target). Always Range ⊆ Codomain.',
            note: '',
          },
          {
            f: '<b>Empty relation</b> <i>R</i> = ∅; <b>Universal relation</b> <i>R</i> = <i>A</i> × <i>B</i>: both are valid relations.',
            note: '',
          },
          {
            f: 'Count',
            note: 'number of relations from <i>A</i> to <i>B</i> = 2<sup><i>n</i>(<i>A</i>) <i>n</i>(<i>B</i>)</sup> = 2<sup><i>pq</i></sup>; non-empty = 2<sup><i>pq</i></sup> − 1.',
          },
          {
            f: 'On a set <i>A</i>',
            note: 'a relation on <i>A</i> is a subset of <i>A</i> × <i>A</i>; there are 2<sup><i>n</i>(<i>A</i>)<sup>2</sup></sup> of them.',
          },
          {
            f: 'Three forms',
            note: 'roster (list), set-builder (rule), arrow diagram. Roster/arrow need a finite relation; set-builder works always.',
          },
        ],
        aids: [
          '“Relation = highlighted slice of <i>A</i> × <i>B</i>.”',
          '“Domain Left, Range Right” (D-L, R-R): never swap them.',
          '“Range is reached, codomain is allowed.”',
          '“Pairs count <i>pq</i>; relations count 2<sup><i>pq</i></sup>: subsets, so power of two.”',
        ],
      },
    ],
  },
];
