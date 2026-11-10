import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 1, Topic 05: pp. 73–86 of the Class 11 Mathematics Master Reference
 * (October 2026 edition), word for word: the supplement's "Part 2 — New
 * Subtopic", Subtopic 05, Indexed Families of Sets, Generalised Laws, and
 * Double Counting. It starts on p. 73 under Addendum H's answers; the headings
 * "Part 2 — New Subtopic" and "Subtopic 05 —" are not copied. It ends on p. 86,
 * before "Chapter 1: Sets — Additional Topics" (p. 87). The topic opens with
 * its "Exam Relevance:" box as a part of its own, then is split at its
 * Sections 1 to 8.
 * Figure 1.8 (caption p. 77, drawn p. 78), the incidence grid, follows the
 * double-counting derivation's Step 5, where the book prints its caption;
 * Figure 1.9 (caption p. 81, drawn p. 82), the nested bars of A₁, A₂, A₃, is
 * shown inside worked example 2, which it draws. Both are redrawn in
 * lib/diagrams/mathematics-11-01.ts.
 * Every fraction is stacked (<frac>); a binomial coefficient, printed as n over
 * r in brackets, is written ⁿCᵣ on one line. A big union, intersection or sum
 * carries its limits as a lowered and raised pair (⋃ with i = 1 below, m above).
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 05 · pp. 73–86 ─────────────────────────
  {
    n: '05',
    title: 'Indexed Families of Sets, Generalised Laws, and Double Counting',
    kalam: 'A big union asks “in at least one”; a big intersection asks “in every one.”',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: 'Indexed families go beyond the NCERT Class 11 syllabus, so CBSE Boards rarely ask them directly; when the idea appears, it is as <i>A</i><sub><i>n</i></sub> the multiples of <i>n</i>, or a run of intervals [<i>n</i>, <i>n</i> + 1]. JEE Main tests the same notation on families of shrinking intervals, where the whole mark rides on whether an endpoint is open or closed, and on the generalised De Morgan laws inside logic and probability questions. JEE Advanced draws on this material twice over: the alternating inclusion–exclusion formula for four or more sets, and the double-counting identity for <i>m</i> sets of uniform size with a uniform multiplicity, a question type that has recurred for decades (the book’s estimate from past papers, not official figures) and collapses into two lines once you recognise it.',
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: 'Take the 8:14 Churchgate fast from Andheri. For each day of the month, let <i>A</i><sub>1</sub> be the set of passengers who boarded it on day 1, <i>A</i><sub>2</sub> those who boarded on day 2, and so on to <i>A</i><sub>30</sub>. Nobody hands you a single set here; you are handed a whole <b>run</b> of sets, numbered by day.',
      },
      {
        t: 'p',
        html: 'Two questions about that run come up constantly, and they are the only two you ever need.<br>• <b>Who rode at least once this month?</b> A passenger qualifies if they appear in <i>A</i><sub>1</sub>, or in <i>A</i><sub>2</sub>, or in any single one of the thirty. That is the <b>union of the family</b>, written ⋃<sub><i>i</i>=1</sub><sup>30</sup> <i>A</i><sub><i>i</i></sub>.<br>• <b>Who rode every single day?</b> A passenger qualifies only by appearing in <i>A</i><sub>1</sub> and in <i>A</i><sub>2</sub> and in all thirty without exception: the season-ticket regulars. That is the <b>intersection of the family</b>, written ⋂<sub><i>i</i>=1</sub><sup>30</sup> <i>A</i><sub><i>i</i></sub>.',
      },
      {
        t: 'p',
        html: '<b>A big union asks “in at least one”; a big intersection asks “in every one.”</b> Everything in this topic is bookkeeping around those two sentences.',
      },
      {
        t: 'p',
        html: 'Think about it this way… the symbols ⋃ and ⋂ are not new operations. They are ∪ and ∩ applied along a list, exactly as ∑ is + applied along a list. And just as with ∑, the list is described by an <b>index</b>: the letter <i>i</i> or <i>n</i> that runs through an <b>index set</b> <i>I</i>. Write <i>I</i> = {1, 2, …, <i>m</i>} for a finite run, or <i>I</i> = ℕ for an endless one.',
      },
      {
        t: 'p',
        html: 'Now the part that separates a JEE candidate from a Board candidate: <b>the index set is allowed to be infinite, and infinite families behave in ways finite ones never do.</b> Consider the shrinking intervals<br><i>A</i><sub>1</sub> = (0, 1), <i>A</i><sub>2</sub> = (0, <frac><num>1</num><den>2</den></frac>), <i>A</i><sub>3</sub> = (0, <frac><num>1</num><den>3</den></frac>), …, <i>A</i><sub><i>n</i></sub> = (0, <frac><num>1</num><den><i>n</i></den></frac>).',
      },
      {
        t: 'p',
        html: 'Every one of these is non-empty. Any finite batch of them has a non-empty intersection: the smallest interval in the batch. Yet the intersection of the whole infinite family is <b>empty</b>. Here is why: pick any candidate <i>x</i>. If <i>x</i> ≤ 0 it is in none of them. If <i>x</i> > 0, then <frac><num>1</num><den><i>n</i></den></frac> eventually drops below <i>x</i>, so from that index onwards <i>x</i> lies outside <i>A</i><sub><i>n</i></sub>. No real number survives every index, so ⋂<sub><i>n</i>=1</sub><sup>∞</sup> <i>A</i><sub><i>n</i></sub> = ∅.',
      },
      {
        t: 'p',
        html: 'The intervals are closing in on 0, and the temptation is overwhelming to answer {0}. But 0 was never inside a single one of them: every <i>A</i><sub><i>n</i></sub> excludes its left endpoint. Change the brackets to [0, <frac><num>1</num><den><i>n</i></den></frac>] and 0 becomes a member of every set, so the intersection genuinely becomes {0}. <b>In an infinite family, brackets decide everything.</b>',
      },
      {
        t: 'p',
        html: 'One more family worth carrying in your head. For <i>n</i> ∈ ℕ let <i>A</i><sub><i>n</i></sub> be the set of natural multiples of <i>n</i>: <i>A</i><sub>2</sub> = {2, 4, 6, …}, <i>A</i><sub>3</sub> = {3, 6, 9, …}. Then <i>A</i><sub>2</sub> ∩ <i>A</i><sub>3</sub> is the set of common multiples of 2 and 3, which is the set of multiples of 6, that is, <i>A</i><sub>6</sub>. Intersection of multiple-sets is governed by the <b>lcm</b>, not the product, and it happens to coincide with the product here only because 2 and 3 are coprime.',
      },
      {
        t: 'p',
        html: '<b>Edge cases and where students slip (the “fine print”):</b><br>• An infinite intersection is not a limit. The sets may shrink towards a point without that point ever belonging to them.<br>• ⋂<sub><i>i</i>∈<i>I</i></sub> <i>A</i><sub><i>i</i></sub> ⊆ <i>A</i><sub><i>j</i></sub> ⊆ ⋃<sub><i>i</i>∈<i>I</i></sub> <i>A</i><sub><i>i</i></sub> for every single index <i>j</i>: the intersection is the tightest set in sight and the union the loosest. Any answer violating this is wrong before you check anything else.<br>• If the index set <i>I</i> is empty, the notation is not used at this level. Always check that at least one index exists.<br>• <i>A</i><sub><i>m</i></sub> ∩ <i>A</i><sub><i>n</i></sub> = <i>A</i><sub>lcm(<i>m</i>,<i>n</i>)</sub> for multiple-sets, not <i>A</i><sub><i>mn</i></sub>.<br>• Being in the union does <b>not</b> mean being in most of the sets; one index is enough.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'table',
        title: null,
        head: ['Term', 'Meaning', 'Notation'],
        rows: [
          ['Indexed family', 'a collection of sets, one for each index', '{<i>A</i><sub><i>i</i></sub>}<sub><i>i</i>∈<i>I</i></sub>'],
          ['Index set', 'the labels the index runs through', '<i>I</i> (often {1, …, <i>m</i>} or ℕ)'],
          ['Family union', 'elements lying in at least one member', '⋃<sub><i>i</i>∈<i>I</i></sub> <i>A</i><sub><i>i</i></sub>'],
          ['Family intersection', 'elements lying in every member', '⋂<sub><i>i</i>∈<i>I</i></sub> <i>A</i><sub><i>i</i></sub>'],
          ['Increasing family', 'each set contains the previous one', '<i>A</i><sub>1</sub> ⊆ <i>A</i><sub>2</sub> ⊆ <i>A</i><sub>3</sub> ⊆ ⋯'],
          ['Decreasing family', 'each set is contained in the previous one', '<i>A</i><sub>1</sub> ⊇ <i>A</i><sub>2</sub> ⊇ <i>A</i><sub>3</sub> ⊇ ⋯'],
          ['Pairwise disjoint family', 'no two members share an element', '<i>A</i><sub><i>i</i></sub> ∩ <i>A</i><sub><i>j</i></sub> = ∅ whenever <i>i</i> ≠ <i>j</i>'],
          ['Multiplicity of <i>x</i>', 'how many members contain <i>x</i>', '<i>d</i>(<i>x</i>)'],
        ],
      },
      {
        t: 'formula',
        kicker: 'Definitions',
        main: '⋃<sub><i>i</i>∈<i>I</i></sub> <i>A</i><sub><i>i</i></sub> = {<i>x</i> ∶ <i>x</i> ∈ <i>A</i><sub><i>i</i></sub> for at least one <i>i</i> ∈ <i>I</i>}<br>⋂<sub><i>i</i>∈<i>I</i></sub> <i>A</i><sub><i>i</i></sub> = {<i>x</i> ∶ <i>x</i> ∈ <i>A</i><sub><i>i</i></sub> for every <i>i</i> ∈ <i>I</i>}',
        legend: [
          '<i>x</i> = an arbitrary candidate element, drawn from the universal set <i>U</i>',
          '<i>i</i> = the running index',
          '<i>I</i> = the index set, which may be finite or infinite',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Generalised laws',
        main: 'De Morgan: (⋃<sub><i>i</i>∈<i>I</i></sub> <i>A</i><sub><i>i</i></sub>)′ = ⋂<sub><i>i</i>∈<i>I</i></sub> <i>A</i>′<sub><i>i</i></sub><br>(⋂<sub><i>i</i>∈<i>I</i></sub> <i>A</i><sub><i>i</i></sub>)′ = ⋃<sub><i>i</i>∈<i>I</i></sub> <i>A</i>′<sub><i>i</i></sub><br>Distributive: <i>B</i> ∩ (⋃<sub><i>i</i>∈<i>I</i></sub> <i>A</i><sub><i>i</i></sub>) = ⋃<sub><i>i</i>∈<i>I</i></sub> (<i>B</i> ∩ <i>A</i><sub><i>i</i></sub>)<br><i>B</i> ∪ (⋂<sub><i>i</i>∈<i>I</i></sub> <i>A</i><sub><i>i</i></sub>) = ⋂<sub><i>i</i>∈<i>I</i></sub> (<i>B</i> ∪ <i>A</i><sub><i>i</i></sub>)',
        legend: ['<i>I</i> = any index set, finite or infinite', '<i>U</i> = the universe holding every set'],
        note: '(valid for any index set <i>I</i>, finite or infinite, with all sets inside a universe <i>U</i>)',
      },
      {
        t: 'p',
        html: '<b>Monotone families</b> (these turn a hard-looking question into a one-line answer):',
      },
      {
        t: 'table',
        title: null,
        head: ['Family type', '⋃<sub><i>n</i>≥1</sub> <i>A</i><sub><i>n</i></sub>', '⋂<sub><i>n</i>≥1</sub> <i>A</i><sub><i>n</i></sub>'],
        rows: [
          ['Increasing <i>A</i><sub>1</sub> ⊆ <i>A</i><sub>2</sub> ⊆ ⋯', 'the set the family grows towards', '<i>A</i><sub>1</sub> (the smallest member)'],
          ['Decreasing <i>A</i><sub>1</sub> ⊇ <i>A</i><sub>2</sub> ⊇ ⋯', '<i>A</i><sub>1</sub> (the largest member)', 'the set the family shrinks towards'],
        ],
      },
      {
        t: 'p',
        html: 'For an increasing family the intersection is genuinely attained at <i>A</i><sub>1</sub>, and for a decreasing family the union is attained at <i>A</i><sub>1</sub>. The other entry in each row need not be a member of the family at all; that is exactly the (0, <frac><num>1</num><den><i>n</i></den></frac>) phenomenon.',
      },
      {
        t: 'p',
        html: '<b>Standard families to recognise on sight</b> (all with <i>n</i> ∈ ℕ):',
      },
      {
        t: 'table',
        title: null,
        head: ['Family', 'Union', 'Intersection'],
        rows: [
          ['(0, <frac><num>1</num><den><i>n</i></den></frac>)', '(0, 1)', '∅'],
          ['[0, <frac><num>1</num><den><i>n</i></den></frac>]', '[0, 1]', '{0}'],
          ['[<frac><num>1</num><den><i>n</i></den></frac>, 1]', '(0, 1]', '{1}'],
          ['(−<i>n</i>, <i>n</i>)', 'ℝ', '(−1, 1)'],
          ['[<i>n</i>, <i>n</i> + 1]', '[1, ∞)', '∅'],
          ['<i>A</i><sub><i>n</i></sub> = {<i>x</i> ∈ ℕ ∶ <i>n</i> divides <i>x</i>}', 'ℕ', '∅'],
        ],
      },
      {
        t: 'p',
        html: 'For the multiple-sets in the last row: <i>A</i><sub><i>m</i></sub> ∩ <i>A</i><sub><i>n</i></sub> = <i>A</i><sub>lcm(<i>m</i>,<i>n</i>)</sub>, and <i>A</i><sub><i>m</i></sub> ⊆ <i>A</i><sub><i>n</i></sub> exactly when <i>n</i> divides <i>m</i>.',
      },
      {
        t: 'p',
        html: '<b>Generalised inclusion–exclusion</b> for <i>m</i> finite sets, the formula Topic 04 promised when it said the pattern extends to any number of sets:',
      },
      {
        t: 'formula',
        kicker: 'Generalised inclusion–exclusion',
        main: '<i>n</i>(⋃<sub><i>i</i>=1</sub><sup><i>m</i></sup> <i>A</i><sub><i>i</i></sub>) = ∑<sub><i>i</i></sub> <i>n</i>(<i>A</i><sub><i>i</i></sub>) − ∑<sub><i>i</i><<i>j</i></sub> <i>n</i>(<i>A</i><sub><i>i</i></sub> ∩ <i>A</i><sub><i>j</i></sub>) + ∑<sub><i>i</i><<i>j</i><<i>k</i></sub> <i>n</i>(<i>A</i><sub><i>i</i></sub> ∩ <i>A</i><sub><i>j</i></sub> ∩ <i>A</i><sub><i>k</i></sub>) − ⋯ + (−1)<sup><i>m</i>−1</sup> <i>n</i>(<i>A</i><sub>1</sub> ∩ ⋯ ∩ <i>A</i><sub><i>m</i></sub>)',
        legend: ['<i>m</i> = number of finite sets'],
        note: 'The <i>r</i>-th block sums over all <sup><i>m</i></sup>C<sub><i>r</i></sub> intersections of exactly <i>r</i> of the sets, and carries the sign (−1)<sup><i>r</i>−1</sup>: add the singles, subtract the pairs, add the triples, and so on.',
      },
      {
        t: 'p',
        html: 'Written out for <i>m</i> = 4:',
      },
      {
        t: 'formula',
        kicker: 'Four sets',
        main: '<i>n</i>(<i>A</i> ∪ <i>B</i> ∪ <i>C</i> ∪ <i>D</i>) = ∑ <i>n</i>(<i>A</i>) − ∑ <i>n</i>(<i>A</i> ∩ <i>B</i>) + ∑ <i>n</i>(<i>A</i> ∩ <i>B</i> ∩ <i>C</i>) − <i>n</i>(<i>A</i> ∩ <i>B</i> ∩ <i>C</i> ∩ <i>D</i>)',
        legend: [
          '∑ <i>n</i>(<i>A</i>) = sum over the 4 single sets',
          '∑ <i>n</i>(<i>A</i> ∩ <i>B</i>) = sum over the 6 pairs',
          '∑ <i>n</i>(<i>A</i> ∩ <i>B</i> ∩ <i>C</i>) = sum over the 4 triples',
        ],
        note: 'where the three sums run over the 4 single sets, the 6 pairs, and the 4 triples respectively.',
      },
      {
        t: 'p',
        html: '<b>Generalised De Morgan for counts</b> (the “at least one” complement): <i>n</i>((<i>A</i><sub>1</sub> ∪ ⋯ ∪ <i>A</i><sub><i>m</i></sub>)′) = <i>n</i>(<i>U</i>) − <i>n</i>(<i>A</i><sub>1</sub> ∪ ⋯ ∪ <i>A</i><sub><i>m</i></sub>).',
      },
      {
        t: 'p',
        html: '<b>Counting bounds for a family:</b>',
      },
      {
        t: 'formula',
        kicker: 'Union bound',
        main: '<i>n</i>(⋃<sub><i>i</i>=1</sub><sup><i>m</i></sup> <i>A</i><sub><i>i</i></sub>) ≤ ∑<sub><i>i</i>=1</sub><sup><i>m</i></sup> <i>n</i>(<i>A</i><sub><i>i</i></sub>)',
        legend: ['<i>m</i> = number of sets'],
        note: 'with equality precisely when the <i>A</i><sub><i>i</i></sub> are pairwise disjoint',
      },
      {
        t: 'formula',
        kicker: 'Intersection bound',
        main: '<i>n</i>(⋂<sub><i>i</i>=1</sub><sup><i>m</i></sup> <i>A</i><sub><i>i</i></sub>) ≥ ∑<sub><i>i</i>=1</sub><sup><i>m</i></sup> <i>n</i>(<i>A</i><sub><i>i</i></sub>) − (<i>m</i> − 1) <i>n</i>(<i>U</i>)',
        legend: ['<i>n</i>(<i>U</i>) = size of the universe', '<i>m</i> = number of sets'],
        note: '(derived in Additional topic H)',
      },
      {
        t: 'p',
        html: '<b>The double-counting (multiplicity) identity</b>, the single most productive formula in this topic:',
      },
      {
        t: 'formula',
        kicker: 'The double-counting (multiplicity) identity',
        main: '∑<sub><i>i</i>=1</sub><sup><i>m</i></sup> <i>n</i>(<i>A</i><sub><i>i</i></sub>) = ∑<sub><i>x</i>∈<i>S</i></sub> <i>d</i>(<i>x</i>)',
        legend: ['<i>S</i> = the union of the family, ⋃<sub><i>i</i>=1</sub><sup><i>m</i></sup> <i>A</i><sub><i>i</i></sub>', '<i>d</i>(<i>x</i>) = #{<i>i</i> ∶ <i>x</i> ∈ <i>A</i><sub><i>i</i></sub>}'],
        note: null,
      },
      {
        t: 'p',
        html: 'In the uniform case (every <i>A</i><sub><i>i</i></sub> of the same size <i>p</i>, every element of <i>S</i> lying in exactly <i>k</i> of them), this becomes',
      },
      {
        t: 'formula',
        kicker: 'Uniform case',
        main: '<i>mp</i> = <i>k</i> <i>n</i>(<i>S</i>) ⟹ <i>n</i>(<i>S</i>) = <frac><num><i>mp</i></num><den><i>k</i></den></frac>',
        legend: [
          '<i>m</i> = how many sets',
          '<i>p</i> = the common size of each set',
          '<i>k</i> = the common multiplicity',
          '<i>n</i>(<i>S</i>) = the size of the union',
        ],
        note: 'Validity: every <i>A</i><sub><i>i</i></sub> must have exactly <i>p</i> elements, every element of <i>S</i> must lie in exactly <i>k</i> of the sets, and <i>S</i> must be their union.',
      },

      { t: 'part', title: 'CBSE board derivations and key procedures' },
      { t: 'p', html: '<b>Derivation: Generalised De Morgan, (⋃<sub><i>i</i>∈<i>I</i></sub> <i>A</i><sub><i>i</i></sub>)′ = ⋂<sub><i>i</i>∈<i>I</i></sub> <i>A</i>′<sub><i>i</i></sub></b>' },
      {
        t: 'p',
        html: '<b>Step 1.</b> Take an arbitrary <i>x</i> ∈ <i>U</i> and unpack the left side by definition of complement: <i>x</i> ∈ (⋃<sub><i>i</i></sub> <i>A</i><sub><i>i</i></sub>)′ means <i>x</i> ∉ ⋃<sub><i>i</i></sub> <i>A</i><sub><i>i</i></sub>. <b>Reason:</b> the complement of a set is exactly the elements of <i>U</i> outside it.',
      },
      {
        t: 'p',
        html: '<b>Step 2.</b> Unpack the union: <i>x</i> ∈ ⋃<sub><i>i</i></sub> <i>A</i><sub><i>i</i></sub> means “there exists an index <i>i</i> with <i>x</i> ∈ <i>A</i><sub><i>i</i></sub>.” Negating, <i>x</i> ∉ ⋃<sub><i>i</i></sub> <i>A</i><sub><i>i</i></sub> means “there is <b>no</b> index <i>i</i> with <i>x</i> ∈ <i>A</i><sub><i>i</i></sub>.” <b>Reason:</b> this is the definition of the family union, read backwards.',
      },
      {
        t: 'p',
        html: '<b>Step 3.</b> “There is no index with <i>x</i> ∈ <i>A</i><sub><i>i</i></sub>” says the same thing as “for <b>every</b> index, <i>x</i> ∉ <i>A</i><sub><i>i</i></sub>.” <b>Reason:</b> this is the quantifier flip: the negation of “at least one” is “none at all”, that is, “every one fails”. It is the two-set fact “not (P or Q) means (not P) and (not Q)” carried along a whole list.',
      },
      {
        t: 'p',
        html: '<b>Step 4.</b> “For every <i>i</i>, <i>x</i> ∉ <i>A</i><sub><i>i</i></sub>” says “for every <i>i</i>, <i>x</i> ∈ <i>A</i>′<sub><i>i</i></sub>”, which is precisely <i>x</i> ∈ ⋂<sub><i>i</i></sub> <i>A</i>′<sub><i>i</i></sub>. <b>Reason:</b> definition of the family intersection.',
      },
      {
        t: 'p',
        html: 'Every step is an “if and only if”, so the two sets contain exactly the same elements and are equal. The second law follows by the same argument with the roles of “at least one” and “every” exchanged.',
      },
      {
        t: 'p',
        html: '<b>Why this is the gold-standard method:</b> shading cannot help you here; you cannot draw infinitely many circles. Element-chasing with quantifiers is the only proof that survives an infinite index set.',
      },
      { t: 'p', html: '<b>Derivation: the double-counting identity ∑<sub><i>i</i></sub> <i>n</i>(<i>A</i><sub><i>i</i></sub>) = ∑<sub><i>x</i></sub> <i>d</i>(<i>x</i>)</b>' },
      {
        t: 'p',
        html: '<b>Step 1.</b> Build the list of all <b>incidences</b>: pairs (<i>x</i>, <i>i</i>) for which <i>x</i> ∈ <i>A</i><sub><i>i</i></sub>. <b>Reason:</b> one object, to be counted in two different orders.',
      },
      {
        t: 'p',
        html: '<b>Step 2.</b> Count the list set by set. Set <i>A</i><sub><i>i</i></sub> contributes one incidence for each of its elements, so it contributes <i>n</i>(<i>A</i><sub><i>i</i></sub>). Totalling over the <i>m</i> sets gives ∑<sub><i>i</i>=1</sub><sup><i>m</i></sup> <i>n</i>(<i>A</i><sub><i>i</i></sub>).',
      },
      {
        t: 'p',
        html: '<b>Step 3.</b> Count the same list element by element. Element <i>x</i> contributes one incidence for each set containing it, so it contributes <i>d</i>(<i>x</i>). Totalling over <i>S</i> gives ∑<sub><i>x</i>∈<i>S</i></sub> <i>d</i>(<i>x</i>).',
      },
      {
        t: 'p',
        html: '<b>Step 4.</b> The two totals count the identical list, so they are equal.',
      },
      {
        t: 'p',
        html: '<b>Step 5.</b> Impose uniformity: if <i>n</i>(<i>A</i><sub><i>i</i></sub>) = <i>p</i> for all <i>i</i>, Step 2 gives <i>mp</i>; if <i>d</i>(<i>x</i>) = <i>k</i> for all <i>x</i> ∈ <i>S</i>, Step 3 gives <i>k</i> <i>n</i>(<i>S</i>). Hence <i>mp</i> = <i>k</i> <i>n</i>(<i>S</i>).',
      },
      { t: 'fig', id: 'm11-01-fig-1.8' },
      { t: 'p', html: '<b>Derivation: why the alternating signs of inclusion–exclusion give the right count</b>' },
      {
        t: 'p',
        html: 'Fix an element <i>x</i> lying in exactly <i>d</i> of the <i>m</i> sets, where <i>d</i> ≥ 1 (so <i>x</i> belongs to the union and must be counted once). In the formula, <i>x</i> is counted inside an <i>r</i>-fold intersection precisely when all <i>r</i> of the chosen sets contain it, and there are <sup><i>d</i></sup>C<sub><i>r</i></sub> such choices. So the total contribution of <i>x</i> is<br>∑<sub><i>r</i>=1</sub><sup><i>d</i></sup> (−1)<sup><i>r</i>−1</sup> <sup><i>d</i></sup>C<sub><i>r</i></sub> = −∑<sub><i>r</i>=1</sub><sup><i>d</i></sup> (−1)<sup><i>r</i></sup> <sup><i>d</i></sup>C<sub><i>r</i></sub> = <sup><i>d</i></sup>C<sub>0</sub> − ∑<sub><i>r</i>=0</sub><sup><i>d</i></sup> (−1)<sup><i>r</i></sup> <sup><i>d</i></sup>C<sub><i>r</i></sub> = 1 − (1 − 1)<sup><i>d</i></sup> = 1 − 0 = 1.',
      },
      {
        t: 'p',
        html: 'An element outside the union lies in no <i>A</i><sub><i>i</i></sub> and contributes 0. So every element of the union is counted exactly once and nothing else is counted at all, which is the formula. The three-set case of Topic 04 is <i>m</i> = 3 (so <i>d</i> ≤ 3) of this argument.',
      },
      {
        t: 'proc',
        title: 'Procedure A: evaluate ⋃ or ⋂ over a family of intervals',
        steps: [
          'Write out <i>A</i><sub>1</sub>, <i>A</i><sub>2</sub> and <i>A</i><sub>3</sub> explicitly. <b>Why:</b> you cannot see monotonicity until you see three terms.',
          'Decide whether the family is increasing, decreasing, or neither. <b>Why:</b> for a monotone family, the table in the Key formulas and definitions part gives one of the two answers, <i>A</i><sub>1</sub>, with no further work.',
          'For the <b>intersection</b>, take a general candidate <i>x</i> and ask “for which <i>x</i> does the membership condition hold at every index?” Push <i>n</i> towards infinity in the endpoint expression and test the limit point itself: it survives exactly when every member contains it. If an endpoint sits at the limit point for every <i>n</i>, its bracket decides (closed keeps it, open drops it); if the endpoints only approach the limit point without reaching it, every member contains it, whatever the brackets.',
          'For the <b>union</b>, ask “for which <i>x</i> does the condition hold at some index?” One successful index is enough.',
          'Test the two boundary candidates explicitly by substitution. <b>Why:</b> the entire mark is usually a single endpoint.',
        ],
      },
      {
        t: 'proc',
        title: 'Procedure B: reduce a family to one member',
        steps: [
          'Check whether <i>A</i><sub><i>n</i>+1</sub> ⊆ <i>A</i><sub><i>n</i></sub> for all <i>n</i> (decreasing) or <i>A</i><sub><i>n</i></sub> ⊆ <i>A</i><sub><i>n</i>+1</sub> (increasing). <b>Why:</b> one containment check settles infinitely many.',
          'Decreasing: the union collapses to <i>A</i><sub>1</sub>. Increasing: the intersection collapses to <i>A</i><sub>1</sub>. <b>Why:</b> in a decreasing family every member lies inside <i>A</i><sub>1</sub>; in an increasing family <i>A</i><sub>1</sub> lies inside every member.',
          'For the remaining half, apply Procedure A. <b>Why:</b> that is where the genuine work always is.',
        ],
      },
      {
        t: 'proc',
        title: 'Procedure C: solve a uniform-multiplicity problem',
        steps: [
          'Name the three uniform numbers: <i>m</i> (how many sets), <i>p</i> (size of each set), <i>k</i> (how many sets each element lies in).',
          'Compute the incidence total <i>mp</i>. <b>Why:</b> this is the number of ticks in the grid, counted by rows.',
          'Divide by the multiplicity: <i>n</i>(<i>S</i>) = <frac><num><i>mp</i></num><den><i>k</i></den></frac>. <b>Why:</b> counted by columns, each element accounts for exactly <i>k</i> ticks.',
          'If a second family shares the same union <i>S</i>, repeat with its own <i>m</i>′, <i>p</i>′, <i>k</i>′ and solve for the unknown, using the <i>n</i>(<i>S</i>) you just found. <b>Why:</b> the union is the bridge between the two families.',
          'Sanity check: <i>n</i>(<i>S</i>) must be a positive integer and must satisfy <i>n</i>(<i>S</i>) ≥ <i>p</i> (each set sits inside <i>S</i>).',
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'For each <i>n</i> ∈ ℕ, let <i>A</i><sub><i>n</i></sub> = {<i>x</i> ∈ ℕ ∶ <i>x</i> is a multiple of <i>n</i>}. Find (i) <i>A</i><sub>3</sub> ∩ <i>A</i><sub>4</sub>, (ii) <i>A</i><sub>3</sub> ∪ <i>A</i><sub>6</sub>, (iii) ⋃<sub><i>n</i>=2</sub><sup>∞</sup> <i>A</i><sub><i>n</i></sub>, (iv) ⋂<sub><i>n</i>=1</sub><sup>∞</sup> <i>A</i><sub><i>n</i></sub>.',
        steps: [
          '<b>(i)</b> A natural number lies in <i>A</i><sub>3</sub> ∩ <i>A</i><sub>4</sub> exactly when it is a multiple of both 3 and 4, that is, a common multiple. The common multiples of two numbers are precisely the multiples of their lcm, and lcm(3, 4) = 12. So<br><i>A</i><sub>3</sub> ∩ <i>A</i><sub>4</sub> = <i>A</i><sub>12</sub> = {12, 24, 36, …}.',
          '<b>(ii)</b> Every multiple of 6 is a multiple of 3, so <i>A</i><sub>6</sub> ⊆ <i>A</i><sub>3</sub>. A union with a subset changes nothing:<br><i>A</i><sub>3</sub> ∪ <i>A</i><sub>6</sub> = <i>A</i><sub>3</sub> = {3, 6, 9, 12, …}.',
          '<b>(iii)</b> Which naturals lie in at least one <i>A</i><sub><i>n</i></sub> with <i>n</i> ≥ 2? Any <i>x</i> ≥ 2 lies in <i>A</i><sub><i>x</i></sub>, since <i>x</i> is a multiple of itself and <i>x</i> ≥ 2 is a legal index. The number 1 lies in no <i>A</i><sub><i>n</i></sub> with <i>n</i> ≥ 2, because a multiple of <i>n</i> ≥ 2 is at least 2. Hence<br>⋃<sub><i>n</i>=2</sub><sup>∞</sup> <i>A</i><sub><i>n</i></sub> = ℕ − {1} = {2, 3, 4, …}.',
          '<b>(iv)</b> An element of this intersection would be a natural number <i>x</i> that is a multiple of <b>every</b> natural number, in particular of <i>x</i> + 1. But a positive multiple of <i>x</i> + 1 is at least <i>x</i> + 1, forcing <i>x</i> ≥ <i>x</i> + 1, which is impossible. So<br>⋂<sub><i>n</i>=1</sub><sup>∞</sup> <i>A</i><sub><i>n</i></sub> = ∅.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'For <i>n</i> ∈ ℕ let <i>A</i><sub><i>n</i></sub> = [2 − <frac><num>1</num><den><i>n</i></den></frac>, 5 + <frac><num>1</num><den><i>n</i></den></frac>]. Find ⋃<sub><i>n</i>=1</sub><sup>∞</sup> <i>A</i><sub><i>n</i></sub> and ⋂<sub><i>n</i>=1</sub><sup>∞</sup> <i>A</i><sub><i>n</i></sub>.',
        fig: 'm11-01-fig-1.9',
        steps: [
          'Write the first three members: <i>A</i><sub>1</sub> = [1, 6], <i>A</i><sub>2</sub> = [1.5, 5.5], <i>A</i><sub>3</sub> = [<frac><num>5</num><den>3</den></frac>, <frac><num>16</num><den>3</den></frac>]. The left endpoint climbs towards 2 and the right endpoint falls towards 5, so each set sits inside the one before it: the family is <b>decreasing</b>.',
          '<b>Union.</b> For a decreasing family the union is the first and largest member:<br>⋃<sub><i>n</i>=1</sub><sup>∞</sup> <i>A</i><sub><i>n</i></sub> = <i>A</i><sub>1</sub> = [1, 6].',
          '<b>Intersection.</b> A real <i>x</i> survives every index exactly when 2 − <frac><num>1</num><den><i>n</i></den></frac> ≤ <i>x</i> ≤ 5 + <frac><num>1</num><den><i>n</i></den></frac> for all <i>n</i>.<br>• The left condition. If <i>x</i> ≥ 2 it holds for every <i>n</i>, since 2 − <frac><num>1</num><den><i>n</i></den></frac> < 2 ≤ <i>x</i>. If <i>x</i> < 2, write <i>x</i> = 2 − <i>ε</i> with <i>ε</i> > 0; then the condition demands <frac><num>1</num><den><i>n</i></den></frac> ≥ <i>ε</i> for every <i>n</i>, which fails as soon as <frac><num>1</num><den><i>n</i></den></frac> drops below <i>ε</i>. So the left condition is exactly <i>x</i> ≥ 2.<br>• The right condition, by the mirror-image argument, is exactly <i>x</i> ≤ 5.<br>⋂<sub><i>n</i>=1</sub><sup>∞</sup> <i>A</i><sub><i>n</i></sub> = [2, 5].',
          'Note the endpoints 2 and 5 <b>do</b> belong, even though no single <i>A</i><sub><i>n</i></sub> has them as its own endpoints: each <i>A</i><sub><i>n</i></sub> contains them comfortably in its interior. Compare this with the next example, where the answer goes the other way.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main: Speed Trap',
        q: 'Find ⋂<sub><i>n</i>=1</sub><sup>∞</sup> (0, <frac><num>1</num><den><i>n</i></den></frac>) and ⋂<sub><i>n</i>=1</sub><sup>∞</sup> [0, <frac><num>1</num><den><i>n</i></den></frac>].',
        steps: [
          '<b>The seductive wrong answer.</b> The intervals shrink towards 0, so the eye reports “they collapse onto the point 0” and the hand writes {0} for both. That answer is right for the second family and wrong for the first.',
          '<b>The trap has a name: the limit-point trap.</b> A family shrinking towards a point does not have to contain it. The only legitimate question is membership: is 0 inside every <i>A</i><sub><i>n</i></sub>?',
          '<b>First family.</b> (0, <frac><num>1</num><den><i>n</i></den></frac>) is open at the left, so 0 ∉ <i>A</i><sub><i>n</i></sub> for any <i>n</i>, not once. Take any other candidate: <i>x</i> < 0 fails immediately, and any <i>x</i> > 0 fails from the index where <frac><num>1</num><den><i>n</i></den></frac> < <i>x</i> onwards. Nothing survives:<br>⋂<sub><i>n</i>=1</sub><sup>∞</sup> (0, <frac><num>1</num><den><i>n</i></den></frac>) = ∅.',
          '<b>Second family.</b> [0, <frac><num>1</num><den><i>n</i></den></frac>] is closed at the left, so 0 ∈ <i>A</i><sub><i>n</i></sub> for every <i>n</i>; and every <i>x</i> > 0 is eliminated exactly as before. Only 0 survives:<br>⋂<sub><i>n</i>=1</sub><sup>∞</sup> [0, <frac><num>1</num><den><i>n</i></den></frac>] = {0}.',
          '<b>Speed move.</b> Do not manipulate the family at all. Test the one suspicious candidate, the point the intervals are closing on, against the bracket next to it. Here it is every member’s left endpoint, so the bracket decides: square bracket, it stays; round bracket, it goes and the intersection is empty. (If the intervals close in on it from both sides, as (−<frac><num>1</num><den><i>n</i></den></frac>, <frac><num>1</num><den><i>n</i></den></frac>) do, it lies inside every member and stays whatever the brackets.) That is a five-second answer.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'Let <i>A</i><sub>1</sub>, <i>A</i><sub>2</sub>, …, <i>A</i><sub>30</sub> be thirty sets, each containing exactly 5 elements, and let <i>B</i><sub>1</sub>, <i>B</i><sub>2</sub>, …, <i>B</i><sub><i>n</i></sub> be <i>n</i> sets, each containing exactly 3 elements. Suppose<br>⋃<sub><i>i</i>=1</sub><sup>30</sup> <i>A</i><sub><i>i</i></sub> = ⋃<sub><i>j</i>=1</sub><sup><i>n</i></sup> <i>B</i><sub><i>j</i></sub> = <i>S</i>,<br>and that each element of <i>S</i> belongs to exactly 10 of the <i>A</i><sub><i>i</i></sub> and to exactly 9 of the <i>B</i><sub><i>j</i></sub>. Find <i>n</i>.',
        steps: [
          'Neither family can be listed, and no Venn diagram will help. Count incidences instead: the double-counting identity is built for exactly this.',
          '<b>Step 1: the <i>A</i> family, counted by sets.</b> Thirty sets of five elements each produce<br>30 × 5 = 150 incidences.',
          '<b>Step 2: the <i>A</i> family, counted by elements.</b> Each element of <i>S</i> sits in exactly 10 of the <i>A</i><sub><i>i</i></sub>, contributing 10 incidences, so the same total is 10 <i>n</i>(<i>S</i>).',
          '<b>Step 3: solve for <i>n</i>(<i>S</i>).</b> Equating the two counts, 10 <i>n</i>(<i>S</i>) = 150, so<br><i>n</i>(<i>S</i>) = 15.',
          '<b>Step 4: the <i>B</i> family.</b> Counted by sets, <i>n</i> sets of three elements give 3<i>n</i> incidences. Counted by elements, each of the 15 elements of <i>S</i> lies in exactly 9 of the <i>B</i><sub><i>j</i></sub>, giving 9 × 15 = 135. Equating,<br>3<i>n</i> = 135 ⟹ <i>n</i> = 45.',
          '<b>Consistency check.</b> Each <i>B</i><sub><i>j</i></sub> has 3 elements and 3 ≤ 15 = <i>n</i>(<i>S</i>), so the sets fit inside <i>S</i>; and each <i>A</i><sub><i>i</i></sub> has 5 ≤ 15 elements. Both counts are positive integers. The answer stands:',
          'The elegance is that the union <i>S</i>, a set nobody described to you, is the bridge. One family tells you its size; the other family then has no room to hide.',
        ],
        ans: '<i>n</i> = 45.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] With <i>A</i><sub><i>n</i></sub> = {<i>x</i> ∈ ℕ ∶ <i>n</i> divides <i>x</i>}, find <i>A</i><sub>4</sub> ∩ <i>A</i><sub>6</sub> and <i>A</i><sub>2</sub> ∩ <i>A</i><sub>3</sub> ∩ <i>A</i><sub>5</sub>.',
            a: '<i>A</i><sub>12</sub> and <i>A</i><sub>30</sub> (the lcm of 4 and 6 is 12; the lcm of 2, 3, 5 is 30).',
          },
          {
            q: '[CBSE] For <i>i</i> ∈ ℕ let <i>A</i><sub><i>i</i></sub> = [<i>i</i>, <i>i</i> + 1]. Find ⋃<sub><i>i</i>=1</sub><sup>∞</sup> <i>A</i><sub><i>i</i></sub> and <i>A</i><sub>3</sub> ∩ <i>A</i><sub>4</sub>.',
            a: '[1, ∞) and {4}.',
          },
          {
            q: '[JEE Main] Find ⋃<sub><i>n</i>=1</sub><sup>∞</sup> (−<i>n</i>, <i>n</i>) and ⋂<sub><i>n</i>=1</sub><sup>∞</sup> (−<i>n</i>, <i>n</i>).',
            a: 'ℝ and (−1, 1): the family is increasing, so the intersection is the first member.',
          },
          {
            q: '[JEE Main] Find ⋂<sub><i>n</i>=1</sub><sup>∞</sup> [3, 3 + <frac><num>2</num><den><i>n</i></den></frac>).',
            a: '{3}; the left endpoint is included at every index, and any <i>x</i> > 3 fails once <frac><num>2</num><den><i>n</i></den></frac> < <i>x</i> − 3.',
          },
          {
            q: '[JEE Main] Express (⋂<sub><i>i</i>∈<i>I</i></sub> <i>A</i><sub><i>i</i></sub>)′ in terms of the complements <i>A</i>′<sub><i>i</i></sub>, and state which two-set law it generalises.',
            a: '⋃<sub><i>i</i>∈<i>I</i></sub> <i>A</i>′<sub><i>i</i></sub>; it generalises (<i>A</i> ∩ <i>B</i>)′ = <i>A</i>′ ∪ <i>B</i>′.',
          },
          {
            q: '[JEE Advanced] Four sets satisfy <i>n</i>(<i>A</i>) = 25, <i>n</i>(<i>B</i>) = 30, <i>n</i>(<i>C</i>) = 35, <i>n</i>(<i>D</i>) = 40; every one of the six pairwise intersections has 10 elements, every one of the four triple intersections has 4, and <i>n</i>(<i>A</i> ∩ <i>B</i> ∩ <i>C</i> ∩ <i>D</i>) = 2. Find <i>n</i>(<i>A</i> ∪ <i>B</i> ∪ <i>C</i> ∪ <i>D</i>).',
            a: '130 − 60 + 16 − 2 = 84.',
          },
          {
            q: '[JEE Advanced] Twelve sets <i>A</i><sub>1</sub>, …, <i>A</i><sub>12</sub> each have 6 elements and their union is <i>S</i>, with every element of <i>S</i> lying in exactly 4 of them. (i) Find <i>n</i>(<i>S</i>). (ii) If sets <i>B</i><sub>1</sub>, …, <i>B</i><sub><i>n</i></sub>, each of size 4, also have union <i>S</i> with every element of <i>S</i> lying in exactly 6 of them, find <i>n</i>.',
            a: '(i) 12 × 6 = 72 = 4 <i>n</i>(<i>S</i>), so <i>n</i>(<i>S</i>) = 18. (ii) 4<i>n</i> = 6 × 18 = 108, so <i>n</i> = 27.',
          },
          {
            q: '[JEE Advanced] With <i>A</i><sub><i>i</i></sub> the multiples of <i>i</i> in ℕ, find ⋂<sub><i>i</i>=1</sub><sup>6</sup> <i>A</i><sub><i>i</i></sub>.',
            a: '<i>A</i><sub>60</sub>, since lcm(1, 2, 3, 4, 5, 6) = 60.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: '⋂<sub><i>n</i>=1</sub><sup>∞</sup> [0, <frac><num>1</num><den><i>n</i></den></frac>] equals:',
        opts: [
          {
            label: '∅',
            nudge: '<b>(A)</b> imports the answer for the open family (0, <frac><num>1</num><den><i>n</i></den></frac>) without checking the bracket: the single most common error in this topic.',
          },
          { label: '{0}', nudge: null },
          {
            label: '[0, 1]',
            nudge: '<b>(C)</b> computes the <b>union</b> instead: the family is decreasing, so ⋃<sub><i>n</i></sub> [0, <frac><num>1</num><den><i>n</i></den></frac>] = [0, 1].',
          },
          { label: '(0, 1)', nudge: '<b>(D)</b> commits both errors at once: it reads the family as the open (0, <frac><num>1</num><den><i>n</i></den></frac>) and reports the union, (0, 1).' },
        ],
        correct: 1,
        solution: '0 lies in every member because the left bracket is closed; every <i>x</i> > 0 is excluded once <frac><num>1</num><den><i>n</i></den></frac> < <i>x</i>.',
      },
      {
        t: 'mcq',
        q: 'For any family {<i>A</i><sub><i>i</i></sub>}<sub><i>i</i>∈<i>I</i></sub> inside a universe <i>U</i>, (⋂<sub><i>i</i>∈<i>I</i></sub> <i>A</i><sub><i>i</i></sub>)′ equals:',
        opts: [
          {
            label: '⋂<sub><i>i</i>∈<i>I</i></sub> <i>A</i>′<sub><i>i</i></sub>',
            nudge: '<b>(A)</b> forgets that complementation flips the operation, mirroring the classic two-set slip of writing (<i>A</i> ∩ <i>B</i>)′ = <i>A</i>′ ∩ <i>B</i>′.',
          },
          { label: '⋃<sub><i>i</i>∈<i>I</i></sub> <i>A</i>′<sub><i>i</i></sub>', nudge: null },
          { label: '⋃<sub><i>i</i>∈<i>I</i></sub> <i>A</i><sub><i>i</i></sub>', nudge: '<b>(C)</b> drops the complement altogether.' },
          {
            label: '(⋃<sub><i>i</i>∈<i>I</i></sub> <i>A</i><sub><i>i</i></sub>)′',
            nudge: '<b>(D)</b> complements the wrong family operation, giving ⋂<sub><i>i</i></sub> <i>A</i>′<sub><i>i</i></sub> in disguise: the same error as <b>(A)</b> written another way.',
          },
        ],
        correct: 1,
        solution: 'Failing to be in every set means failing in at least one, which is membership of at least one complement: a union.',
      },
      {
        t: 'mcq',
        q: 'Twenty sets <i>A</i><sub>1</sub>, …, <i>A</i><sub>20</sub> each have 3 elements, their union is <i>S</i>, and every element of <i>S</i> lies in exactly 5 of the sets. Then <i>n</i>(<i>S</i>) equals:',
        opts: [
          { label: '12', nudge: null },
          {
            label: '60',
            nudge: '<b>(B)</b> stops at the incidence total 60, forgetting that each element was counted five times over; this is the “forgot to divide by the multiplicity” error.',
          },
          { label: '100', nudge: '<b>(C)</b> multiplies the two wrong quantities, 20 × 5, mistaking the multiplicity for a set size.' },
          {
            label: '4',
            nudge: '<b>(D)</b> divides the number of sets by the multiplicity, <frac><num>20</num><den>5</den></frac>, ignoring the size of the sets entirely.',
          },
        ],
        correct: 0,
        solution: 'Incidences counted by sets: 20 × 3 = 60. Counted by elements: 5 <i>n</i>(<i>S</i>). So <i>n</i>(<i>S</i>) = <frac><num>60</num><den>5</den></frac> = 12. Anchor the method: total ticks equals rows times row-size equals columns times column-height.',
      },
      {
        t: 'mcq',
        q: 'With <i>A</i><sub><i>n</i></sub> the set of natural multiples of <i>n</i>, the set <i>A</i><sub>4</sub> ∩ <i>A</i><sub>6</sub> equals:',
        opts: [
          {
            label: '<i>A</i><sub>24</sub>',
            nudge: '<b>(A)</b> uses the product 4 × 6 = 24 instead of the lcm (correct only when the two numbers are coprime, which 4 and 6 are not). It also fails a one-second check: 12 is a common multiple and 12 ∉ <i>A</i><sub>24</sub>.',
          },
          { label: '<i>A</i><sub>12</sub>', nudge: null },
          {
            label: '<i>A</i><sub>2</sub>',
            nudge: '<b>(C)</b> uses the hcf, which describes <i>A</i><sub>4</sub> ∪ <i>A</i><sub>6</sub> ⊆ <i>A</i><sub>2</sub> rather than the intersection, and would wrongly admit 2.',
          },
          { label: '<i>A</i><sub>10</sub>', nudge: '<b>(D)</b> adds the indices, a rule with no basis at all.' },
        ],
        correct: 1,
        solution: 'The common multiples of 4 and 6 are exactly the multiples of lcm(4, 6) = 12; for instance 12 and 24 qualify, but 24 is not the smallest.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Treating an infinite intersection as a limit.</b> The error: writing ⋂<sub><i>n</i></sub> (0, <frac><num>1</num><den><i>n</i></den></frac>) = {0} because the intervals shrink to 0. The correction: the intersection contains only elements that belong to <b>every</b> member, and 0 belongs to none of them. Check whether every member contains the limit point; where it is every member’s endpoint, that means checking its bracket.',
          '<b>Using the product instead of the lcm.</b> The error: <i>A</i><sub>4</sub> ∩ <i>A</i><sub>6</sub> = <i>A</i><sub>24</sub>. The correction: common multiples are the multiples of the lcm, so <i>A</i><sub>4</sub> ∩ <i>A</i><sub>6</sub> = <i>A</i><sub>12</sub>. The product works only for coprime indices.',
          '<b>Losing the quantifier flip in De Morgan.</b> The error: (⋃<sub><i>i</i></sub> <i>A</i><sub><i>i</i></sub>)′ = ⋃<sub><i>i</i></sub> <i>A</i>′<sub><i>i</i></sub>. The correction: the negation of “in at least one” is “in none”, which is “in every complement”: a ⋂. Complementation always flips ⋃ and ⋂, however long the family.',
          '<b>Dividing by the wrong quantity in double counting.</b> The error: reporting <i>n</i>(<i>S</i>) = <i>mp</i> or <i>n</i>(<i>S</i>) = <frac><num><i>m</i></num><den><i>k</i></den></frac>. The correction: the identity is <i>mp</i> = <i>k</i> <i>n</i>(<i>S</i>); count the ticks in the grid two ways and the roles of <i>p</i> and <i>k</i> can never swap.',
          '<b>Getting the last sign of inclusion–exclusion wrong.</b> The error: adding the <i>m</i>-fold intersection regardless of <i>m</i>. The correction: the sign of the <i>r</i>-fold block is (−1)<sup><i>r</i>−1</sup>, so with four sets the final term is <b>subtracted</b>, not added. Only the odd-numbered blocks are added.',
          '<b>Forgetting the sandwich.</b> The error: an answer for ⋂<sub><i>i</i></sub> <i>A</i><sub><i>i</i></sub> that is larger than some member. The correction: ⋂<sub><i>i</i></sub> <i>A</i><sub><i>i</i></sub> ⊆ <i>A</i><sub><i>j</i></sub> ⊆ ⋃<sub><i>i</i></sub> <i>A</i><sub><i>i</i></sub> for every <i>j</i>; test your answer against <i>A</i><sub>1</sub> before writing it down.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> Never manipulate a family symbolically when you can interrogate a single candidate element. Pick the one suspicious number (the limit point, the endpoint, the element 1) and ask “is it in <i>A</i><sub>1</sub>? in <i>A</i><sub>2</sub>? in all of them?” Three membership tests settle almost every indexed-family question in JEE Main, and they cannot go wrong the way symbol-pushing can.',
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> The moment a problem mentions “<i>m</i> sets, each with <i>p</i> elements” and “each element belongs to exactly <i>k</i> of them”, stop reading for structure and write <i>mp</i> = <i>k</i> <i>n</i>(<i>S</i>). The problem is over. If a second family shares the same union, run the identity again with the new numbers; the shared <i>n</i>(<i>S</i>) carries across.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Family union / intersection', note: '⋃<sub><i>i</i>∈<i>I</i></sub> <i>A</i><sub><i>i</i></sub> = “in at least one”; ⋂<sub><i>i</i>∈<i>I</i></sub> <i>A</i><sub><i>i</i></sub> = “in every one”.' },
          { f: 'Sandwich', note: '⋂<sub><i>i</i></sub> <i>A</i><sub><i>i</i></sub> ⊆ <i>A</i><sub><i>j</i></sub> ⊆ ⋃<sub><i>i</i></sub> <i>A</i><sub><i>i</i></sub> for every index <i>j</i>.' },
          { f: 'Generalised De Morgan', note: '(⋃<sub><i>i</i></sub> <i>A</i><sub><i>i</i></sub>)′ = ⋂<sub><i>i</i></sub> <i>A</i>′<sub><i>i</i></sub> and (⋂<sub><i>i</i></sub> <i>A</i><sub><i>i</i></sub>)′ = ⋃<sub><i>i</i></sub> <i>A</i>′<sub><i>i</i></sub>.' },
          {
            f: 'Generalised distributive',
            note: '<i>B</i> ∩ ⋃<sub><i>i</i></sub> <i>A</i><sub><i>i</i></sub> = ⋃<sub><i>i</i></sub> (<i>B</i> ∩ <i>A</i><sub><i>i</i></sub>); <i>B</i> ∪ ⋂<sub><i>i</i></sub> <i>A</i><sub><i>i</i></sub> = ⋂<sub><i>i</i></sub> (<i>B</i> ∪ <i>A</i><sub><i>i</i></sub>).',
          },
          { f: 'Monotone families', note: 'decreasing ⇒ union = <i>A</i><sub>1</sub>; increasing ⇒ intersection = <i>A</i><sub>1</sub>.' },
          {
            f: 'Must-know families',
            note: '⋂<sub><i>n</i></sub> (0, <frac><num>1</num><den><i>n</i></den></frac>) = ∅; ⋂<sub><i>n</i></sub> [0, <frac><num>1</num><den><i>n</i></den></frac>] = {0}; ⋃<sub><i>n</i></sub> [<frac><num>1</num><den><i>n</i></den></frac>, 1] = (0, 1]; ⋃<sub><i>n</i></sub> (−<i>n</i>, <i>n</i>) = ℝ; ⋃<sub><i>n</i></sub> [<i>n</i>, <i>n</i> + 1] = [1, ∞).',
          },
          {
            f: 'Multiple-sets',
            note: '<i>A</i><sub><i>m</i></sub> ∩ <i>A</i><sub><i>n</i></sub> = <i>A</i><sub>lcm(<i>m</i>,<i>n</i>)</sub>; <i>A</i><sub><i>m</i></sub> ⊆ <i>A</i><sub><i>n</i></sub> exactly when <i>n</i> | <i>m</i>; ⋃<sub><i>n</i>≥2</sub> <i>A</i><sub><i>n</i></sub> = ℕ − {1}.',
          },
          {
            f: 'Inclusion–exclusion for <i>m</i> sets',
            note: 'add all singles, subtract all pairs, add all triples, …, with the <i>r</i>-fold block carrying (−1)<sup><i>r</i>−1</sup>.',
          },
          {
            f: 'Four sets',
            note: '<i>n</i>(<i>A</i> ∪ <i>B</i> ∪ <i>C</i> ∪ <i>D</i>) = ∑ <i>n</i>(<i>A</i>) − ∑ <i>n</i>(<i>A</i> ∩ <i>B</i>) + ∑ <i>n</i>(<i>A</i> ∩ <i>B</i> ∩ <i>C</i>) − <i>n</i>(<i>A</i> ∩ <i>B</i> ∩ <i>C</i> ∩ <i>D</i>), over 4 singles, 6 pairs, 4 triples.',
          },
          {
            f: 'Union bound',
            note: '<i>n</i>(⋃<sub><i>i</i>=1</sub><sup><i>m</i></sup> <i>A</i><sub><i>i</i></sub>) ≤ ∑<sub><i>i</i>=1</sub><sup><i>m</i></sup> <i>n</i>(<i>A</i><sub><i>i</i></sub>), with equality exactly for pairwise disjoint sets.',
          },
          { f: 'Intersection bound', note: '<i>n</i>(⋂<sub><i>i</i>=1</sub><sup><i>m</i></sup> <i>A</i><sub><i>i</i></sub>) ≥ ∑<sub><i>i</i>=1</sub><sup><i>m</i></sup> <i>n</i>(<i>A</i><sub><i>i</i></sub>) − (<i>m</i> − 1) <i>n</i>(<i>U</i>).' },
          { f: 'Double counting', note: '∑<sub><i>i</i>=1</sub><sup><i>m</i></sup> <i>n</i>(<i>A</i><sub><i>i</i></sub>) = ∑<sub><i>x</i>∈<i>S</i></sub> <i>d</i>(<i>x</i>); uniform case <i>mp</i> = <i>k</i> <i>n</i>(<i>S</i>).' },
        ],
        aids: [
          '“Big cup = at least one; big cap = every one.”',
          '“Shrinking is not arriving”: a family closing on a point need not contain it; read the bracket.',
          '“Lcm for the cap”: intersecting multiple-sets runs on the lcm, never the product.',
          '“Count the ticks twice: rows give <i>mp</i>, columns give <i>k</i> <i>n</i>(<i>S</i>).”',
          '“Odd blocks plus, even blocks minus”: the alternating signs of inclusion–exclusion.',
        ],
      },
    ],
  },
];
