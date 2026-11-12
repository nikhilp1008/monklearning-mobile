import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 2, Topic 04: pp. 130–145 of the Class 11 Mathematics Master Reference
 * (October 2026 edition), word for word: the supplement's Subtopic 04, Types of
 * Relations and Equivalence Relations. The supplement's heading "Chapter 2:
 * Relations and Functions — Supplement" (p. 130) is not copied; the topic ends
 * on p. 145, before "Addendum to Subtopic 03: Finding the Range" (p. 146), which
 * Topic 03 carries. The topic opens with its "Exam Relevance:" box as a part of
 * its own, then is split at its Sections 1 to 8. Its procedures keep the book's
 * own letters A to C.
 * Figure 2.3 (caption p. 131, drawn p. 132), the nine cells of A × A, follows the
 * identity-relation paragraph of "Concept intuition", where the book prints its
 * caption; Figure 2.4 (caption p. 135, drawn p. 136), the classes cutting A into
 * blocks, follows the converse of the partition derivation, likewise. Both are
 * redrawn in lib/diagrams/mathematics-11-02.ts.
 * Every fraction is stacked (<frac>); one inside a power (2^(n(n+1)/2)) keeps its
 * slash, and the binomial coefficient n over 2 is written ⁿC₂ on one line.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 04 · pp. 130–145 ─────────────────────────
  {
    n: '04',
    title: 'Types of Relations and Equivalence Relations',
    kalam: 'An equivalence relation is exactly a rule that chops a set into non-overlapping groups.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: 'This is the material Topic 02 left for later. CBSE Boards formally examines it in Class 12 Chapter 1, where “show that <i>R</i> is an equivalence relation” is a standing 3–5 mark question (the book’s estimate from past papers, not official figures) and “find the equivalence class of…” is its usual follow-up, so every hour you spend here is a mark banked twice. JEE Main asks it two ways: a one-line property check (“<i>R</i> is reflexive and symmetric but not transitive”) and a pure count (“the number of reflexive relations on a set of 5 elements”). JEE Advanced pushes into equivalence classes as a partition: counting equivalence relations by counting partitions, or finding how many equivalence relations contain a specified pair.',
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: 'Walk into a school assembly of 600 students. Nobody is standing at random: every student belongs to exactly one section (11-A, 11-B, 11-C). Now consider the rule “<b>is in the same section as</b>”. Three things are true of it, and they are true so obviously that you have never bothered to name them:<br>• Every student is in the same section as <b>themselves</b>.<br>• If Riya is in the same section as Aman, then Aman is in the same section as Riya.<br>• If Riya is in the same section as Aman, and Aman is in the same section as Sara, then Riya is in the same section as Sara.',
      },
      {
        t: 'p',
        html: 'Those three properties are called <b>reflexive</b>, <b>symmetric</b> and <b>transitive</b>, and a relation that has all three is called an <b>equivalence relation</b>. Here is the key realization, and it is the whole point of the topic:',
      },
      {
        t: 'p',
        html: '<b>An equivalence relation is exactly a rule that chops a set into non-overlapping groups.</b> The three properties are not an arbitrary checklist: together they are precisely what it takes to sort a set into clean sections.',
      },
      {
        t: 'p',
        html: 'Look at the assembly again. The relation “same section as” and the seating chart carry identical information. Given the sections, you can decide any “same section?” question. Given the relation, you can reconstruct the sections: just collect, for each student, everyone related to them. Those collections are the <b>equivalence classes</b>, and they overlap nowhere and miss nobody. That is a <b>partition</b>.',
      },
      {
        t: 'p',
        html: 'Think about it this way… on the Mumbai locals, “<b>travels on the same line as</b>” partitions commuters into Western, Central and Harbour. No commuter is on zero lines (reflexive fails nowhere), the relation reads the same both ways (symmetric), and same-line-ness chains (transitive). Change the rule to “<b>lives within 5 km of</b>” and the machinery breaks: it is still reflexive and still symmetric, but it can happen that <i>A</i> is within 5 km of <i>B</i> and <i>B</i> within 5 km of <i>C</i> while <i>A</i> and <i>C</i> are not. <b>Transitivity is the fragile one.</b> It is the property that fails most often, and it is the one examiners attack.',
      },
      {
        t: 'p',
        html: 'Two more properties round out the family:<br>• <b>Antisymmetric</b> is the opposite temperament to symmetric. It says two different elements can never point at each other. “≤” is antisymmetric: <i>a</i> ≤ <i>b</i> and <i>b</i> ≤ <i>a</i> force <i>a</i> = <i>b</i>. This is the property of <b>rankings and hierarchies</b> (a merit list, a divisibility ladder), not of groupings.<br>• The <b>inverse relation</b> <i>R</i><sup>−1</sup> is simply <i>R</i> with every arrow reversed. If <i>R</i> is “is the father of”, <i>R</i><sup>−1</sup> is “is the child of”. Reversing arrows costs nothing and tells you something: <i>R</i> <b>is symmetric exactly when reversing all the arrows changes nothing at all</b>, i.e. <i>R</i><sup>−1</sup> = <i>R</i>.',
      },
      {
        t: 'p',
        html: 'And the smallest possible equivalence relation deserves a name of its own: the <b>identity relation</b> <i>I</i><sub><i>A</i></sub>, where every element is related to itself and to nothing else. In the assembly analogy, that is the pathological school where every student is their own section.',
      },
      { t: 'fig', id: 'm11-02-fig-2.3' },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions.</b><br>• These properties are defined for a relation <b>on a set</b> <i>A</i> (a subset of <i>A</i> × <i>A</i>). A relation from <i>A</i> to a different set <i>B</i> has no diagonal to speak of, so “reflexive” is meaningless for it.<br>• <b>Reflexive means every element</b>, not some. One missing (<i>a</i>, <i>a</i>) kills it.<br>• <b>Symmetric and transitive do not imply reflexive.</b> The standard “proof” that they do is false and is dismantled in Example 3.<br>• <b>Antisymmetric is not the negation of symmetric.</b> The identity relation <i>I</i><sub><i>A</i></sub> is both. The empty relation on a non-empty set is both. A relation can also be neither.<br>• <b>Transitivity can hold vacuously.</b> On <i>A</i> = {1, 2, 3}, the relation <i>R</i> = {(1, 2)} is transitive, because there is no chain (<i>a</i>, <i>b</i>), (<i>b</i>, <i>c</i>) inside it to close.<br>• The <b>empty relation</b> on a non-empty <i>A</i> is symmetric, transitive and antisymmetric, but never reflexive. The <b>universal relation</b> <i>A</i> × <i>A</i> is reflexive, symmetric and transitive: it is an equivalence relation with exactly one class.',
      },

      { t: 'part', title: 'Key definitions, formulas and notation' },
      {
        t: 'p',
        html: 'Throughout, <i>R</i> is a relation on a set <i>A</i>, i.e. <i>R</i> ⊆ <i>A</i> × <i>A</i>, and <i>n</i>(<i>A</i>) = <i>n</i>.',
      },
      {
        t: 'formula',
        kicker: 'The four properties',
        main: '<i>R</i> is reflexive ⟺ (<i>a</i>, <i>a</i>) ∈ <i>R</i> for every <i>a</i> ∈ <i>A</i><br><i>R</i> is symmetric ⟺ [(<i>a</i>, <i>b</i>) ∈ <i>R</i> ⇒ (<i>b</i>, <i>a</i>) ∈ <i>R</i>] for all <i>a</i>, <i>b</i> ∈ <i>A</i><br><i>R</i> is transitive ⟺ [(<i>a</i>, <i>b</i>) ∈ <i>R</i> and (<i>b</i>, <i>c</i>) ∈ <i>R</i> ⇒ (<i>a</i>, <i>c</i>) ∈ <i>R</i>] for all <i>a</i>, <i>b</i>, <i>c</i> ∈ <i>A</i><br><i>R</i> is antisymmetric ⟺ [(<i>a</i>, <i>b</i>) ∈ <i>R</i> and (<i>b</i>, <i>a</i>) ∈ <i>R</i> ⇒ <i>a</i> = <i>b</i>] for all <i>a</i>, <i>b</i> ∈ <i>A</i>',
        legend: ['<i>R</i> = a relation on <i>A</i>, <i>R</i> ⊆ <i>A</i> × <i>A</i>', '<i>a</i>, <i>b</i>, <i>c</i> = elements of <i>A</i>'],
        note: null,
      },
      {
        t: 'p',
        html: '• <i>a</i>, <i>b</i>, <i>c</i> are elements of <i>A</i>; the quantifier “for all” is not decoration: a single failing instance destroys the property.<br>• Reflexivity is a condition on the <i>n</i> diagonal pairs only; symmetry and antisymmetry are conditions on off-diagonal pairs only; transitivity is a condition on chains.',
      },
      {
        t: 'formula',
        kicker: 'Identity relation',
        main: '<i>I</i><sub><i>A</i></sub> = {(<i>a</i>, <i>a</i>) ∶ <i>a</i> ∈ <i>A</i>}<br><i>n</i>(<i>I</i><sub><i>A</i></sub>) = <i>n</i>',
        legend: ['<i>I</i><sub><i>A</i></sub> = identity relation on <i>A</i>', '<i>n</i> = number of elements of <i>A</i>, <i>n</i>(<i>A</i>)'],
        note: null,
      },
      {
        t: 'p',
        html: '• <i>I</i><sub><i>A</i></sub> is reflexive, symmetric, transitive <b>and</b> antisymmetric.<br>• Restated: <i>R</i> is reflexive ⟺ <i>I</i><sub><i>A</i></sub> ⊆ <i>R</i>.',
      },
      { t: 'p', html: 'For a relation <i>R</i> from <i>A</i> to <i>B</i>:' },
      {
        t: 'formula',
        kicker: 'Inverse relation',
        main: '<i>R</i><sup>−1</sup> = {(<i>b</i>, <i>a</i>) ∶ (<i>a</i>, <i>b</i>) ∈ <i>R</i>} ⊆ <i>B</i> × <i>A</i><br>Dom(<i>R</i><sup>−1</sup>) = Range(<i>R</i>)<br>Range(<i>R</i><sup>−1</sup>) = Dom(<i>R</i>)<br>(<i>R</i><sup>−1</sup>)<sup>−1</sup> = <i>R</i>',
        legend: ['<i>R</i> = a relation from <i>A</i> to <i>B</i>', '<i>R</i><sup>−1</sup> = inverse relation (all pairs of <i>R</i> reversed)'],
        note: null,
      },
      {
        t: 'p',
        html: '• <i>n</i>(<i>R</i><sup>−1</sup>) = <i>n</i>(<i>R</i>) always: reversing arrows never creates or destroys one.<br>• <i>R</i> is symmetric ⟺ <i>R</i> = <i>R</i><sup>−1</sup>. <i>R</i> is antisymmetric ⟺ <i>R</i> ∩ <i>R</i><sup>−1</sup> ⊆ <i>I</i><sub><i>A</i></sub>.',
      },
      {
        t: 'formula',
        kicker: 'Equivalence relation',
        main: '<i>R</i> is an equivalence relation ⟺ <i>R</i> is reflexive <b>and</b> symmetric <b>and</b> transitive',
        legend: ['<i>R</i> = a relation on <i>A</i>'],
        note: null,
      },
      { t: 'p', html: 'For an equivalence relation <i>R</i> on <i>A</i> and <i>a</i> ∈ <i>A</i>:' },
      {
        t: 'formula',
        kicker: 'Equivalence class',
        main: '[<i>a</i>] = {<i>x</i> ∈ <i>A</i> ∶ (<i>x</i>, <i>a</i>) ∈ <i>R</i>}',
        legend: [
          '[<i>a</i>] = equivalence class of <i>a</i>',
          '<i>R</i> = an equivalence relation on <i>A</i>',
          '<i>x</i> = any element of <i>A</i>',
        ],
        note: null,
      },
      {
        t: 'p',
        html: '• [<i>a</i>] is read “the equivalence class of <i>a</i>”; some books write <i>a/R</i> or <i>ā</i>.<br>• <i>a</i> ∈ [<i>a</i>] always (by reflexivity), so no class is ever empty.<br>• [<i>a</i>] = [<i>b</i>] ⟺ (<i>a</i>, <i>b</i>) ∈ <i>R</i>. Two elements that are related have <b>the same</b> class, not merely overlapping ones.',
      },
      {
        t: 'def',
        term: 'Partition',
        html: 'A collection of subsets {<i>A</i><sub>1</sub>, <i>A</i><sub>2</sub>, …, <i>A</i><sub><i>k</i></sub>} of <i>A</i> is a partition of <i>A</i> if each <i>A</i><sub><i>i</i></sub> ≠ ∅, <i>A</i><sub><i>i</i></sub> ∩ <i>A</i><sub><i>j</i></sub> = ∅ for <i>i</i> ≠ <i>j</i>, and <i>A</i><sub>1</sub> ∪ <i>A</i><sub>2</sub> ∪ ⋯ ∪ <i>A</i><sub><i>k</i></sub> = <i>A</i>.',
      },
      {
        t: 'table',
        title: 'Comparison table',
        head: ['Property', 'Formal condition', 'One-line test', 'Standard example', 'Standard non-example'],
        rows: [
          ['Reflexive', '(<i>a</i>, <i>a</i>) ∈ <i>R</i> ∀<i>a</i>', 'Is every diagonal pair present?', '≤ on ℝ; “divides” on ℕ', '< on ℝ; ⊥ on lines'],
          ['Symmetric', '(<i>a</i>, <i>b</i>) ∈ <i>R</i> ⇒ (<i>b</i>, <i>a</i>) ∈ <i>R</i>', 'Does every arrow have its reverse?', '⊥ on lines; “is a sibling of”', '≤ on ℝ'],
          ['Transitive', '(<i>a</i>, <i>b</i>), (<i>b</i>, <i>c</i>) ∈ <i>R</i> ⇒ (<i>a</i>, <i>c</i>) ∈ <i>R</i>', 'Does every chain close up?', '≤, <, ∥, “divides”', '⊥ on lines; “within 5 km of”'],
          ['Antisymmetric', '(<i>a</i>, <i>b</i>), (<i>b</i>, <i>a</i>) ∈ <i>R</i> ⇒ <i>a</i> = <i>b</i>', 'Do two distinct elements ever point both ways?', '≤ on ℝ; ⊆ on sets; “divides” on ℕ', '<i>A</i> × <i>A</i> when <i>n</i>(<i>A</i>) ≥ 2'],
        ],
      },
      {
        t: 'p',
        html: 'Note the entry “divides on ℕ”, not on ℤ: on ℤ divisibility fails antisymmetry, since 2 ∣ −2 and −2 ∣ 2 but 2 ≠ −2.',
      },
      {
        t: 'p',
        html: '<b>Counting relations with imposed properties</b> on a set with <i>n</i>(<i>A</i>) = <i>n</i>:',
      },
      {
        t: 'defgrid',
        title: 'Type of relation on A: Count',
        rows: [
          { k: 'All relations', v: '2<sup><i>n</i><sup>2</sup></sup>' },
          { k: 'Reflexive', v: '2<sup><i>n</i><sup>2</sup>−<i>n</i></sup>' },
          { k: 'Symmetric', v: '2<sup><i>n</i>(<i>n</i>+1)/2</sup>' },
          { k: 'Reflexive <b>and</b> symmetric', v: '2<sup><i>n</i>(<i>n</i>−1)/2</sup>' },
          { k: 'Antisymmetric', v: '2<sup><i>n</i></sup> · 3<sup><i>n</i>(<i>n</i>−1)/2</sup>' },
          {
            k: 'Equivalence relations',
            v: '<i>B</i><sub><i>n</i></sub> (the <i>n</i>-th Bell number);<br><i>B</i><sub>1</sub> = 1, <i>B</i><sub>2</sub> = 2, <i>B</i><sub>3</sub> = 5, <i>B</i><sub>4</sub> = 15',
          },
        ],
      },
      {
        t: 'p',
        html: '• <frac><num><i>n</i>(<i>n</i> − 1)</num><den>2</den></frac> = <sup><i>n</i></sup>C<sub>2</sub> is the number of <b>unordered</b> pairs {<i>a</i>, <i>b</i>} with <i>a</i> ≠ <i>b</i>: the number of off-diagonal slots once you force (<i>a</i>, <i>b</i>) and (<i>b</i>, <i>a</i>) to share a decision.<br>• There is no elementary closed form for <i>B</i><sub><i>n</i></sub>, which is why exams only ever ask for equivalence relations on sets of 3 or 4 elements (the book’s estimate from past papers, not official figures), where you count partitions by hand.',
      },
      {
        t: 'defgrid',
        title: 'Symbol: Meaning',
        rows: [
          { k: '<i>I</i><sub><i>A</i></sub>', v: 'identity relation on <i>A</i>: {(<i>a</i>, <i>a</i>) ∶ <i>a</i> ∈ <i>A</i>}' },
          { k: '<i>R</i><sup>−1</sup>', v: 'inverse relation: all pairs of <i>R</i> reversed' },
          { k: '[<i>a</i>]', v: 'equivalence class of <i>a</i> under an equivalence relation' },
          { k: '<i>a</i> ≡ <i>b</i> (mod <i>m</i>)', v: '<i>a</i> − <i>b</i> is divisible by <i>m</i>' },
          {
            k: '<sup><i>n</i></sup>C<sub>2</sub> = <frac><num><i>n</i>(<i>n</i> − 1)</num><den>2</den></frac>',
            v: 'number of unordered pairs of distinct elements of <i>A</i>',
          },
        ],
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      { t: 'p', html: '<b>Derivation: Equivalence classes partition the set</b>' },
      {
        t: 'p',
        html: '<b>Claim.</b> Let <i>R</i> be an equivalence relation on a non-empty set <i>A</i>. Then the distinct equivalence classes of <i>R</i> form a partition of <i>A</i>.',
      },
      { t: 'p', html: '<b>Proof.</b>' },
      {
        t: 'p',
        html: '1. <b>No class is empty.</b> For any <i>a</i> ∈ <i>A</i>, reflexivity gives (<i>a</i>, <i>a</i>) ∈ <i>R</i>, so <i>a</i> ∈ [<i>a</i>]. (<b>Reason:</b> reflexivity is exactly the statement that every element sits in its own class.)',
      },
      {
        t: 'p',
        html: '2. <b>The classes cover <i>A</i>.</b> By step 1 every <i>a</i> ∈ <i>A</i> lies in the class [<i>a</i>], so ⋃<sub><i>a</i>∈<i>A</i></sub> [<i>a</i>] = <i>A</i>. (<b>Reason:</b> nothing can be left out, because each element supplies a class containing itself.)',
      },
      {
        t: 'p',
        html: '3. <b>Two classes that meet are identical.</b> Suppose [<i>a</i>] ∩ [<i>b</i>] ≠ ∅, say <i>c</i> ∈ [<i>a</i>] ∩ [<i>b</i>]. Then (<i>c</i>, <i>a</i>) ∈ <i>R</i> and (<i>c</i>, <i>b</i>) ∈ <i>R</i>. Take any <i>x</i> ∈ [<i>a</i>], so (<i>x</i>, <i>a</i>) ∈ <i>R</i>. From (<i>c</i>, <i>a</i>) ∈ <i>R</i> and symmetry, (<i>a</i>, <i>c</i>) ∈ <i>R</i>. Chaining (<i>x</i>, <i>a</i>) with (<i>a</i>, <i>c</i>) by transitivity gives (<i>x</i>, <i>c</i>) ∈ <i>R</i>; chaining that with (<i>c</i>, <i>b</i>) gives (<i>x</i>, <i>b</i>) ∈ <i>R</i>, i.e. <i>x</i> ∈ [<i>b</i>]. Hence [<i>a</i>] ⊆ [<i>b</i>]. The same argument with <i>a</i> and <i>b</i> swapped gives [<i>b</i>] ⊆ [<i>a</i>]. Therefore [<i>a</i>] = [<i>b</i>]. (<b>Reason:</b> symmetry lets you walk an arrow backwards, transitivity lets you join two walks; together they let you travel from any member of one class to any member of the other.)',
      },
      {
        t: 'p',
        html: '4. <b>Conclusion.</b> By step 3, two distinct classes cannot overlap at all; by steps 1 and 2 the classes are non-empty and cover <i>A</i>. That is precisely a partition. ■',
      },
      {
        t: 'p',
        html: '<b>The converse also holds</b>, and it is worth knowing: given any partition of <i>A</i>, the rule “<i>a</i> <i>R</i> <i>b</i> if and only if <i>a</i> and <i>b</i> lie in the same block” is an equivalence relation whose classes are exactly the blocks. So <b>equivalence relations on <i>A</i> and partitions of <i>A</i> are the same objects wearing different clothes.</b> This is what makes the counting in Example 4 possible.',
      },
      { t: 'fig', id: 'm11-02-fig-2.4' },
      { t: 'p', html: '<b>Derivation: Congruence modulo <i>m</i> is an equivalence relation</b>' },
      {
        t: 'p',
        html: '<b>Claim.</b> Fix a positive integer <i>m</i>. On ℤ, define <i>R</i> = {(<i>a</i>, <i>b</i>) ∶ <i>a</i> − <i>b</i> is divisible by <i>m</i>}. Then <i>R</i> is an equivalence relation with exactly <i>m</i> classes.',
      },
      { t: 'p', html: '<b>Proof.</b>' },
      {
        t: 'p',
        html: '1. <b>Reflexive:</b> <i>a</i> − <i>a</i> = 0 = <i>m</i> · 0 is divisible by <i>m</i>, so (<i>a</i>, <i>a</i>) ∈ <i>R</i> for every integer <i>a</i>.',
      },
      {
        t: 'p',
        html: '2. <b>Symmetric:</b> if <i>a</i> − <i>b</i> = <i>mk</i> for some integer <i>k</i>, then <i>b</i> − <i>a</i> = <i>m</i>(−<i>k</i>), and −<i>k</i> is an integer, so (<i>b</i>, <i>a</i>) ∈ <i>R</i>.',
      },
      {
        t: 'p',
        html: '3. <b>Transitive:</b> if <i>a</i> − <i>b</i> = <i>mk</i> and <i>b</i> − <i>c</i> = <i>ml</i>, then <i>a</i> − <i>c</i> = (<i>a</i> − <i>b</i>) + (<i>b</i> − <i>c</i>) = <i>m</i>(<i>k</i> + <i>l</i>), and <i>k</i> + <i>l</i> is an integer, so (<i>a</i>, <i>c</i>) ∈ <i>R</i>.',
      },
      {
        t: 'p',
        html: '4. <b>The classes.</b> [<i>r</i>] = {<i>x</i> ∈ ℤ ∶ <i>x</i> − <i>r</i> divisible by <i>m</i>} = {<i>mk</i> + <i>r</i> ∶ <i>k</i> ∈ ℤ}. By the division algorithm every integer leaves exactly one remainder <i>r</i> ∈ {0, 1, …, <i>m</i> − 1} on division by <i>m</i>, so there are exactly <i>m</i> distinct classes [0], [1], …, [<i>m</i> − 1], and they partition ℤ. ■',
      },
      {
        t: 'p',
        html: 'For <i>m</i> = 5: [0] = {…, −10, −5, 0, 5, 10, …}, [1] = {…, −9, −4, 1, 6, 11, …}, and so on to [4]. Note [5] = [0] and [−1] = [4]: different labels, same class.',
      },
      { t: 'p', html: '<b>Derivation: Counting relations with imposed properties</b>' },
      {
        t: 'p',
        html: 'Everything below is the Topic 02 machinery (<i>n</i><sup>2</sup> independent yes/no switches) with some switches frozen or ganged together.',
      },
      {
        t: 'p',
        html: '<b>Reflexive: 2<sup><i>n</i><sup>2</sup>−<i>n</i></sup>.</b> Reflexivity forces all <i>n</i> diagonal pairs (<i>a</i>, <i>a</i>) to be <b>in</b>. Those <i>n</i> switches are frozen, contributing a factor of 1 each. The other <i>n</i><sup>2</sup> − <i>n</i> pairs are untouched by the condition, each still free to be in or out:<br>1 × ⋯ × 1 (<i>n</i> frozen) × 2 × ⋯ × 2 (<i>n</i><sup>2</sup> − <i>n</i> free) = 2<sup><i>n</i><sup>2</sup>−<i>n</i></sup>.',
      },
      {
        t: 'p',
        html: '<b>Symmetric: 2<sup><i>n</i>(<i>n</i>+1)/2</sup>.</b> Symmetry says nothing about the diagonal, so each of the <i>n</i> diagonal pairs is still a free yes/no: 2<sup><i>n</i></sup>. Off the diagonal, the pairs come in couples {(<i>a</i>, <i>b</i>), (<i>b</i>, <i>a</i>)} with <i>a</i> ≠ <i>b</i>, and symmetry ties each couple together: both in, or both out, one decision for the couple. The number of such couples is the number of unordered pairs of distinct elements, <sup><i>n</i></sup>C<sub>2</sub> = <frac><num><i>n</i>(<i>n</i> − 1)</num><den>2</den></frac>. Hence<br>2<sup><i>n</i></sup> · 2<sup><i>n</i>(<i>n</i>−1)/2</sup> = 2<sup><i>n</i>+<i>n</i>(<i>n</i>−1)/2</sup> = 2<sup>(2<i>n</i>+<i>n</i>²−<i>n</i>)/2</sup> = 2<sup><i>n</i>(<i>n</i>+1)/2</sup>.',
      },
      {
        t: 'p',
        html: '<b>Reflexive and symmetric: 2<sup><i>n</i>(<i>n</i>−1)/2</sup>.</b> Take the symmetric count and freeze the diagonal to “in”: the factor 2<sup><i>n</i></sup> collapses to 1, leaving 2<sup><i>n</i>(<i>n</i>−1)/2</sup>.',
      },
      {
        t: 'p',
        html: '<b>Antisymmetric: 2<sup><i>n</i></sup> · 3<sup><i>n</i>(<i>n</i>−1)/2</sup>.</b> Antisymmetry also says nothing about the diagonal (the condition (<i>a</i>, <i>a</i>), (<i>a</i>, <i>a</i>) ∈ <i>R</i> ⇒ <i>a</i> = <i>a</i> is automatic), so the <i>n</i> diagonal switches are free: 2<sup><i>n</i></sup>. For each of the <frac><num><i>n</i>(<i>n</i> − 1)</num><den>2</den></frac> couples {(<i>a</i>, <i>b</i>), (<i>b</i>, <i>a</i>)} with <i>a</i> ≠ <i>b</i>, antisymmetry forbids exactly one of the four combinations, “both in”, leaving <b>three</b> legal options: neither, (<i>a</i>, <i>b</i>) only, (<i>b</i>, <i>a</i>) only. Hence 3<sup><i>n</i>(<i>n</i>−1)/2</sup>, and the product is 2<sup><i>n</i></sup> · 3<sup><i>n</i>(<i>n</i>−1)/2</sup>. ■',
      },
      {
        t: 'p',
        html: '<b>Sanity check on <i>n</i> = 2.</b> Total relations 2<sup>4</sup> = 16. Reflexive 2<sup>4−2</sup> = 4; symmetric 2<sup>3</sup> = 8; both 2<sup>1</sup> = 2; antisymmetric 2<sup>2</sup> · 3<sup>1</sup> = 12. The last one is checkable by hand: the only way to break antisymmetry on {1, 2} is to include both (1, 2) and (2, 1), which leaves the two diagonal pairs free: 4 bad relations, and 16 − 4 = 12. It matches.',
      },
      {
        t: 'proc',
        title: 'Procedure A: Testing a relation for the four properties',
        steps: [
          '<b>Reflexive?</b> Run down the diagonal. Is (<i>a</i>, <i>a</i>) ∈ <i>R</i> for <b>every</b> <i>a</i> ∈ <i>A</i>? One absentee and the answer is no. (<b>Why:</b> the definition is universally quantified; there is no “mostly reflexive”.)',
          '<b>Symmetric?</b> For each pair (<i>a</i>, <i>b</i>) ∈ <i>R</i> with <i>a</i> ≠ <i>b</i>, look for (<i>b</i>, <i>a</i>). One unreciprocated arrow and the answer is no. (<b>Why:</b> diagonal pairs are their own reverses, so they never threaten symmetry; do not waste time on them.)',
          '<b>Transitive?</b> Find every chain (<i>a</i>, <i>b</i>), (<i>b</i>, <i>c</i>) <b>inside</b> <i>R</i> (the second coordinate of one pair matching the first coordinate of another) and check (<i>a</i>, <i>c</i>) ∈ <i>R</i>. (<b>Why:</b> you only have to check chains that actually exist. If no chain exists, transitivity holds vacuously.)',
          '<b>Antisymmetric?</b> Look for a two-way street between distinct elements: a pair <i>a</i> ≠ <i>b</i> with both (<i>a</i>, <i>b</i>) and (<i>b</i>, <i>a</i>) in <i>R</i>. Find one and the answer is no; find none and the answer is yes. (<b>Why:</b> antisymmetry is a prohibition, so it holds until a witness against it turns up.)',
          '<b>Verdict.</b> Reflexive + symmetric + transitive ⇒ equivalence relation. Then, and only then, go looking for classes.',
        ],
      },
      {
        t: 'p',
        html: 'For an infinite set defined by a rule, you cannot list pairs; argue algebraically instead, exactly as in the congruence derivation in the Key procedures and logical framework part: take a general (<i>a</i>, <i>b</i>) ∈ <i>R</i>, write down what that means, and manipulate.',
      },
      {
        t: 'proc',
        title: 'Procedure B: Writing down R⁻¹',
        steps: [
          '<b>Reverse every pair.</b> (<i>a</i>, <i>b</i>) ∈ <i>R</i> becomes (<i>b</i>, <i>a</i>) ∈ <i>R</i><sup>−1</sup>. Nothing is added, nothing is dropped, so <i>n</i>(<i>R</i><sup>−1</sup>) = <i>n</i>(<i>R</i>).',
          '<b>Swap the sets.</b> If <i>R</i> ⊆ <i>A</i> × <i>B</i> then <i>R</i><sup>−1</sup> ⊆ <i>B</i> × <i>A</i>. (<b>Why:</b> first coordinates and second coordinates have exchanged roles.)',
          '<b>Read off domain and range by swapping.</b> Dom(<i>R</i><sup>−1</sup>) = Range(<i>R</i>) and Range(<i>R</i><sup>−1</sup>) = Dom(<i>R</i>): never recompute them from scratch.',
          '<b>Use it as a symmetry test.</b> If <i>R</i><sup>−1</sup> comes out identical to <i>R</i>, then <i>R</i> is symmetric; if they differ, it is not.',
        ],
      },
      {
        t: 'proc',
        title: 'Procedure C: Finding the equivalence classes and the induced partition',
        steps: [
          '<b>Confirm <i>R</i> is an equivalence relation first.</b> Classes are only guaranteed to partition when all three properties hold. (<b>Why:</b> without symmetry and transitivity, “classes” can overlap without being equal, and the whole picture collapses.)',
          '<b>Pick any unclassified element</b> <i>a</i>. Collect [<i>a</i>] = {<i>x</i> ∈ <i>A</i> ∶ (<i>x</i>, <i>a</i>) ∈ <i>R</i>}.',
          '<b>Strike out everything in</b> [<i>a</i>]. Every element of [<i>a</i>] has [<i>x</i>] = [<i>a</i>], so none of them will generate anything new. (<b>Why:</b> step 3 of the partition derivation: classes that meet are equal.)',
          '<b>Repeat</b> with the next unclassified element until <i>A</i> is exhausted.',
          '<b>State the partition</b> as the list of distinct classes, and check: non-empty, pairwise disjoint, union = <i>A</i>. (<b>Why:</b> this is a free verification of your own work; if the blocks overlap or miss an element, you have made an error upstream.)',
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Let <i>A</i> = {1, 2, 3} and <i>R</i> = {(1, 1), (2, 2), (3, 3), (1, 2), (2, 1)}. Examine <i>R</i> for reflexivity, symmetry, transitivity and antisymmetry. Write <i>R</i><sup>−1</sup>. If <i>R</i> is an equivalence relation, find all its equivalence classes and the partition they induce.',
        steps: [
          'Work Procedure A in order.',
          '<b>Reflexive:</b> the diagonal pairs (1, 1), (2, 2), (3, 3) are all present. Reflexive.',
          '<b>Symmetric:</b> the only off-diagonal pairs are (1, 2) and (2, 1), and each is the reverse of the other. Symmetric.',
          '<b>Transitive:</b> list the chains that exist inside <i>R</i> and check each closes.<br>• (1, 2) with (2, 1) needs (1, 1): present.<br>• (2, 1) with (1, 2) needs (2, 2): present.<br>• (1, 1) with (1, 2) needs (1, 2): present. (1, 2) with (2, 2) needs (1, 2): present.<br>• (2, 2) with (2, 1) needs (2, 1): present. (2, 1) with (1, 1) needs (2, 1): present.<br>• Chains through 3 only involve (3, 3) with itself, needing (3, 3): present.<br>Every chain closes. Transitive.',
          '<b>Antisymmetric:</b> (1, 2) ∈ <i>R</i> and (2, 1) ∈ <i>R</i> but 1 ≠ 2. <b>Not</b> antisymmetric.',
          '<b>Inverse:</b> reversing every pair, <i>R</i><sup>−1</sup> = {(1, 1), (2, 2), (3, 3), (2, 1), (1, 2)} = <i>R</i>, confirming symmetry.',
          'Since <i>R</i> is reflexive, symmetric and transitive, it <b>is an equivalence relation</b> on <i>A</i>. Now Procedure C:<br>[1] = {<i>x</i> ∶ (<i>x</i>, 1) ∈ <i>R</i>} = {1, 2}, [2] = {<i>x</i> ∶ (<i>x</i>, 2) ∈ <i>R</i>} = {1, 2}, [3] = {3}.',
          'So [1] = [2], as the theory promised, since (1, 2) ∈ <i>R</i>. The <b>distinct</b> classes are {1, 2} and {3}, giving the partition<br><i>A</i> = {1, 2} ∪ {3}, {1, 2} ∩ {3} = ∅.',
          'Non-empty, disjoint, union all of <i>A</i>: a genuine partition. ■',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'Let <i>A</i> be a set with 4 elements. Find the number of relations on <i>A</i> that are (i) reflexive, (ii) symmetric, (iii) both reflexive and symmetric, (iv) antisymmetric. What fraction of all relations on <i>A</i> is reflexive?',
        steps: [
          'Here <i>n</i> = 4, so <i>A</i> × <i>A</i> has <i>n</i><sup>2</sup> = 16 ordered pairs and there are 2<sup>16</sup> = 65536 relations on <i>A</i> altogether. Off the diagonal there are <sup>4</sup>C<sub>2</sub> = <frac><num>4 × 3</num><den>2</den></frac> = 6 unordered pairs of distinct elements.',
          '<b>(i) Reflexive.</b> Freeze the 4 diagonal pairs as “in”; the remaining 16 − 4 = 12 pairs stay free:<br>2<sup>16−4</sup> = 2<sup>12</sup> = 4096.',
          '<b>(ii) Symmetric.</b> Diagonal free (2<sup>4</sup>), and the 6 off-diagonal couples each decided once (2<sup>6</sup>):<br>2<sup>4</sup> · 2<sup>6</sup> = 2<sup>10</sup> = 1024, matching 2<sup><i>n</i>(<i>n</i>+1)/2</sup> = 2<sup>4·5/2</sup> = 2<sup>10</sup>.',
          '<b>(iii) Reflexive and symmetric.</b> Take (ii) and freeze the diagonal to “in”, killing the 2<sup>4</sup>:<br>2<sup>6</sup> = 64, matching 2<sup><i>n</i>(<i>n</i>−1)/2</sup> = 2<sup>4·3/2</sup> = 2<sup>6</sup>.',
          '<b>(iv) Antisymmetric.</b> Diagonal free (2<sup>4</sup> = 16), and each of the 6 couples has 3 legal states:<br>2<sup>4</sup> · 3<sup>6</sup> = 16 × 729 = 11664.',
          '<b>Fraction reflexive:</b> <frac><num>2<sup>12</sup></num><den>2<sup>16</sup></den></frac> = <frac><num>1</num><den>2<sup>4</sup></den></frac> = <frac><num>1</num><den>16</den></frac>: each of the four frozen diagonal switches halves the population.',
        ],
        ans: '4096, 1024, 64, 11664; one-sixteenth.',
      },
      {
        t: 'ex',
        tag: 'JEE Main: Speed Trap',
        q: 'On <i>A</i> = {1, 2, 3}, let <i>R</i> = {(1, 1), (2, 2), (1, 2), (2, 1)}. Is <i>R</i> an equivalence relation on <i>A</i>?',
        steps: [
          '<b>The trap.</b> There is a famous one-line “proof” that symmetry and transitivity together force reflexivity:',
          'Let <i>a</i> ∈ <i>A</i>. Take any <i>b</i> with (<i>a</i>, <i>b</i>) ∈ <i>R</i>. By symmetry (<i>b</i>, <i>a</i>) ∈ <i>R</i>. By transitivity applied to (<i>a</i>, <i>b</i>) and (<i>b</i>, <i>a</i>), we get (<i>a</i>, <i>a</i>) ∈ <i>R</i>. So <i>R</i> is reflexive.',
          'It looks airtight, and the seductive wrong answer is <b>“Yes: <i>R</i> is symmetric and transitive, and those force reflexivity, so <i>R</i> is an equivalence relation.”</b>',
          '<b>Where it breaks.</b> Read the second sentence again: “Take any <i>b</i> with (<i>a</i>, <i>b</i>) ∈ <i>R</i>.” That step silently assumes such a <i>b</i> exists. For an element related to <b>nothing at all</b>, the argument never gets started and manufactures no (<i>a</i>, <i>a</i>).',
          '<b>Check the actual relation.</b><br>• Symmetric: (1, 2) and (2, 1) are both present; done. Yes.<br>• Transitive: the chains are (1, 2) with (2, 1) needing (1, 1) (present), (2, 1) with (1, 2) needing (2, 2) (present), and the chains through (1, 1) and (2, 2) which close trivially. Yes.<br>• Reflexive: (3, 3) ∉ <i>R</i>. <b>No.</b>',
          'Element 3 appears in no pair of <i>R</i> whatsoever, so the bogus argument has nothing to bite on. <i>R</i> is symmetric and transitive but not reflexive on <i>A</i>, hence <b>not an equivalence relation on <i>A</i></b>.',
          '<b>The honest version of the statement:</b> if <i>R</i> is symmetric and transitive <b>and every element of <i>A</i> is related to at least one element</b>, then <i>R</i> is reflexive. That extra hypothesis is the whole content.',
          'A useful footnote: <i>R</i> is an equivalence relation on the smaller set {1, 2}, where it is the universal relation. Properties like reflexivity are always relative to the set you declare.',
        ],
        ans: 'No.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'Let <i>A</i> = {1, 2, 3}. (i) Find the total number of equivalence relations on <i>A</i> and list them. (ii) How many of them contain the ordered pair (1, 2)? (iii) Deduce the number of relations on <i>A</i> that are symmetric but not reflexive.',
        steps: [
          'Parts (i) and (ii) are counting problems in disguise. The counting formulas of the Key definitions, formulas and notation part handle “reflexive”, “symmetric” and “antisymmetric” because each imposes an independent constraint on separate switches, but transitivity couples switches together and defeats that method entirely. Use the partition correspondence instead.',
          '<b>(i)</b> By the converse of the partition derivation, equivalence relations on <i>A</i> correspond one-to-one with partitions of <i>A</i>. So count partitions of {1, 2, 3}:<br>Partition: Corresponding equivalence relation<br>• {1}, {2}, {3}: <i>I</i><sub><i>A</i></sub> = {(1, 1), (2, 2), (3, 3)}<br>• {1, 2}, {3}: <i>I</i><sub><i>A</i></sub> ∪ {(1, 2), (2, 1)}<br>• {1, 3}, {2}: <i>I</i><sub><i>A</i></sub> ∪ {(1, 3), (3, 1)}<br>• {2, 3}, {1}: <i>I</i><sub><i>A</i></sub> ∪ {(2, 3), (3, 2)}<br>• {1, 2, 3}: <i>A</i> × <i>A</i> (all nine pairs)',
          'There are no others: a partition of a 3-element set has block sizes 1 + 1 + 1 (one way), 2 + 1 (three ways, chosen by which element is alone), or 3 (one way). <b>Total:</b> 5.',
          '<b>(ii)</b> An equivalence relation contains (1, 2) exactly when 1 and 2 lie in the <b>same block</b> of its partition. Scanning the table, that happens for {1, 2}, {3} and for {1, 2, 3}. <b>Answer:</b> 2.',
          'Note what is not being asked. There are far more relations containing (1, 2); the equivalence condition is what cuts the list to two. And observe the forced consequences: once (1, 2) is in, symmetry drags in (2, 1) and reflexivity drags in all three diagonal pairs; that is already the second row of the table. The only remaining freedom is whether 3 joins them, giving exactly two options.',
          '<b>(iii)</b> Here the independent-switch formulas do apply. With <i>n</i> = 3:<br>symmetric = 2<sup><i>n</i>(<i>n</i>+1)/2</sup> = 2<sup>6</sup> = 64, reflexive and symmetric = 2<sup><i>n</i>(<i>n</i>−1)/2</sup> = 2<sup>3</sup> = 8.',
          'Every reflexive-and-symmetric relation is symmetric, so subtract:<br>symmetric but not reflexive = 64 − 8 = 56.',
          'The structural lesson: <b>reflexivity, symmetry and antisymmetry are switch-counting conditions; transitivity is not.</b> The moment transitivity enters, abandon powers of 2 and count partitions. ■',
        ],
        ans: '5; 2; 56.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Let <i>A</i> = {1, 2, 3} and <i>R</i> = {(1, 1), (2, 2), (3, 3), (1, 2), (2, 3)}. State which of reflexive, symmetric, transitive <i>R</i> satisfies.',
            a: 'Reflexive only. Symmetry fails because (1, 2) ∈ <i>R</i> but (2, 1) ∉ <i>R</i>; transitivity fails because (1, 2), (2, 3) ∈ <i>R</i> but (1, 3) ∉ <i>R</i>.',
          },
          {
            q: '[CBSE] On <i>A</i> = {1, 2, 3, 4} let <i>R</i> = {(<i>a</i>, <i>b</i>) ∶ <i>a</i> divides <i>b</i>}. Write <i>R</i> in roster form, give <i>n</i>(<i>R</i>), and classify <i>R</i> as reflexive / symmetric / transitive / antisymmetric.',
            a: '<i>R</i> = {(1, 1), (1, 2), (1, 3), (1, 4), (2, 2), (2, 4), (3, 3), (4, 4)}; <i>n</i>(<i>R</i>) = 8. Reflexive: yes. Symmetric: no ((1, 2) ∈ <i>R</i>, (2, 1) ∉ <i>R</i>). Transitive: yes. Antisymmetric: yes.',
          },
          {
            q: '[JEE Main] Let <i>R</i> = {(1, 2), (2, 3), (1, 4)} be a relation from <i>A</i> = {1, 2} to <i>B</i> = {2, 3, 4}. Write <i>R</i><sup>−1</sup> and state Dom(<i>R</i><sup>−1</sup>) and Range(<i>R</i><sup>−1</sup>).',
            a: '<i>R</i><sup>−1</sup> = {(2, 1), (3, 2), (4, 1)}; Dom(<i>R</i><sup>−1</sup>) = {2, 3, 4} = Range(<i>R</i>); Range(<i>R</i><sup>−1</sup>) = {1, 2} = Dom(<i>R</i>).',
          },
          {
            q: '[JEE Main] For a set with 5 elements, find the number of relations that are (i) reflexive, (ii) symmetric, (iii) both.',
            a: '(i) 2<sup>25−5</sup> = 2<sup>20</sup> = 1,048,576; (ii) 2<sup>5·6/2</sup> = 2<sup>15</sup> = 32,768; (iii) 2<sup>5·4/2</sup> = 2<sup>10</sup> = 1024.',
          },
          {
            q: '[JEE Main] On ℤ, let <i>R</i> = {(<i>a</i>, <i>b</i>) ∶ <i>a</i> − <i>b</i> is divisible by 4}. Write the equivalence class [3] in set-builder form and state how many distinct equivalence classes <i>R</i> has.',
            a: '[3] = {4<i>k</i> + 3 ∶ <i>k</i> ∈ ℤ} = {…, −5, −1, 3, 7, 11, …}; there are 4 distinct classes, namely [0], [1], [2], [3].',
          },
          {
            q: '[JEE Main] Let <i>A</i> = {1, 2, 3} and <i>R</i> = {(1, 1), (2, 2), (3, 3), (1, 2), (2, 1), (2, 3), (3, 2)}. Show <i>R</i> is not transitive, and find the minimum number of ordered pairs that must be added to make <i>R</i> an equivalence relation.',
            a: '(1, 2), (2, 3) ∈ <i>R</i> but (1, 3) ∉ <i>R</i>, so <i>R</i> is not transitive. Add (1, 3) and, for symmetry, (3, 1): minimum 2 pairs. The result is all nine pairs, i.e. <i>A</i> × <i>A</i>, which is an equivalence relation.',
          },
          {
            q: '[JEE Advanced] Let <i>A</i> = {1, 2, 3, 4}. How many equivalence relations on <i>A</i> contain both (1, 2) and (3, 4)?',
            a: '2. Forcing 1, 2 into one block and 3, 4 into one block leaves only the two blocks themselves as free objects: either they stay separate, giving the partition {1, 2}, {3, 4}, or they merge, giving {1, 2, 3, 4}.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'On <i>A</i> = {1, 2, 3}, which relation is symmetric but neither reflexive nor transitive?',
        opts: [
          { label: '{(1, 2), (2, 1)}', nudge: null },
          {
            label: '{(1, 1), (2, 2), (3, 3)}',
            nudge: '<b>(b)</b> is the identity relation <i>I</i><sub><i>A</i></sub>: reflexive, symmetric <b>and</b> transitive, a full equivalence relation. Chosen by students who read “symmetric” and stop reading.',
          },
          {
            label: '{(1, 2), (2, 3), (1, 3)}',
            nudge: '<b>(c)</b> is transitive (the only chain, (1, 2) with (2, 3), closes into (1, 3)) but not symmetric and not reflexive. Chosen by students who confuse “the pairs look paired up” with symmetry.',
          },
          {
            label: '{(1, 2), (2, 1), (1, 1), (2, 2)}',
            nudge: '<b>(d)</b> is symmetric and <b>transitive</b> but not reflexive: this is the Example 3 relation. It is tempting because it looks nearly complete, but it is excluded: it is transitive, since the chain (1, 2), (2, 1) closes through (1, 1), so it fails the “not transitive” condition.',
          },
        ],
        correct: 0,
        solution: 'Both arrows are reciprocated, so it is symmetric. No diagonal pair is present, so it is not reflexive. The chain (1, 2) with (2, 1) demands (1, 1), which is absent, so it is not transitive.',
      },
      {
        t: 'mcq',
        q: 'The number of reflexive relations on a set with 3 elements is',
        opts: [
          {
            label: '512',
            nudge: '<b>(a)</b> 512 = 2<sup>9</sup> = 2<sup><i>n</i><sup>2</sup></sup> is the number of <b>all</b> relations on a 3-element set: the condition was ignored entirely.',
          },
          { label: '64', nudge: null },
          {
            label: '8',
            nudge: '<b>(c)</b> 8 = 2<sup>3</sup> is 2<sup><i>n</i></sup>; it counts only the diagonal choices, i.e. it freezes the wrong set of switches. (It is in fact the count of reflexive <b>and symmetric</b> relations, 2<sup><i>n</i>(<i>n</i>−1)/2</sup> = 2<sup>3</sup>: a genuinely different question.)',
          },
          {
            label: '216',
            nudge: '<b>(d)</b> 216 = 2<sup>3</sup> · 3<sup>3</sup> is the <b>antisymmetric</b> count 2<sup><i>n</i></sup> · 3<sup><i>n</i>(<i>n</i>−1)/2</sup>: the right machinery attached to the wrong property.',
          },
        ],
        correct: 1,
        solution: 'Reflexive relations number 2<sup><i>n</i><sup>2</sup>−<i>n</i></sup> = 2<sup>9−3</sup> = 2<sup>6</sup> = 64.',
      },
      {
        t: 'mcq',
        q: 'If <i>R</i> is an equivalence relation on a non-empty set <i>A</i>, which statement is <b>false</b>?',
        opts: [
          {
            label: '<i>R</i><sup>−1</sup> = <i>R</i>',
            nudge: '<b>(a)</b> is true: an equivalence relation is symmetric, and symmetric is exactly the condition <i>R</i> = <i>R</i><sup>−1</sup>.',
          },
          {
            label: '<i>I</i><sub><i>A</i></sub> ⊆ <i>R</i>',
            nudge: '<b>(b)</b> is true: it is reflexivity restated; every diagonal pair belongs to <i>R</i>.',
          },
          {
            label: 'two distinct equivalence classes of <i>R</i> are disjoint',
            nudge: '<b>(c)</b> is true: it is step 3 of the partition derivation. Students who mark this false are usually thinking of classes as “overlapping groups”, the very picture the derivation rules out.',
          },
          { label: '<i>R</i> = <i>A</i> × <i>A</i>', nudge: null },
        ],
        correct: 3,
        solution: '<i>R</i> = <i>A</i> × <i>A</i> describes only one particular equivalence relation, the universal one. The identity relation <i>I</i><sub><i>A</i></sub> is also an equivalence relation and equals <i>A</i> × <i>A</i> only when <i>n</i>(<i>A</i>) = 1.',
      },
      {
        t: 'mcq',
        q: 'On ℝ, the relation <i>R</i> = {(<i>a</i>, <i>b</i>) ∶ <i>a</i> ≤ <i>b</i>} is',
        opts: [
          { label: 'reflexive, antisymmetric and transitive but not symmetric', nudge: null },
          {
            label: 'an equivalence relation',
            nudge: '<b>(b)</b> treats every “nice-looking” relation as an equivalence relation. Order relations are the standard counterexample: they are reflexive and transitive but antisymmetric rather than symmetric.',
          },
          { label: 'symmetric only', nudge: '<b>(c)</b> confuses ≤ with =. Only the equality part of ≤ is two-way.' },
          {
            label: 'reflexive and symmetric but not transitive',
            nudge: '<b>(d)</b> gets reflexivity right but then attaches the wrong two verdicts; ≤ is one of the most transitive relations in mathematics.',
          },
        ],
        correct: 0,
        solution: '<i>a</i> ≤ <i>a</i> (reflexive); <i>a</i> ≤ <i>b</i> and <i>b</i> ≤ <i>a</i> force <i>a</i> = <i>b</i> (antisymmetric); <i>a</i> ≤ <i>b</i> and <i>b</i> ≤ <i>c</i> give <i>a</i> ≤ <i>c</i> (transitive); and 2 ≤ 3 while 3 ≰ 2, so it is not symmetric.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>“Symmetric and transitive, therefore reflexive.”</b> This is false, and it is the single most examined misconception in the topic (the book’s estimate from past papers, not official figures). The argument needs every element to be related to something; an element related to nothing (like 3 in Example 3) escapes it. Correction: always check the diagonal separately, every time.',
          '<b>Reflexive means every element.</b> Finding (1, 1) and (2, 2) in <i>R</i> on <i>A</i> = {1, 2, 3} and declaring “reflexive” is a guaranteed mark lost. Correction: count the diagonal pairs; you need exactly <i>n</i>(<i>A</i>) of them.',
          '<b>Treating antisymmetric as “not symmetric”.</b> They are independent conditions. <i>I</i><sub><i>A</i></sub> is both symmetric and antisymmetric; {(1, 2), (2, 1), (1, 3)} on {1, 2, 3} is neither. Correction: antisymmetry is a ban on <b>two-way streets between distinct elements</b>, nothing more.',
          '<b>Forgetting that transitivity can hold vacuously.</b> Students mark <i>R</i> = {(1, 2)} as “not transitive” because “nothing chains”. No chain means no condition to violate, so it <b>is</b> transitive. Correction: transitivity fails only when a chain exists and does not close.',
          '<b>Checking transitivity by staring.</b> With more than five pairs you will miss a chain. Correction: sort the pairs by first coordinate, then for each pair (<i>a</i>, <i>b</i>) scan only the pairs starting with <i>b</i>; this is Procedure A step 3 done systematically.',
          '<b>Using 2<sup><i>n</i><sup>2</sup></sup> − <i>n</i> instead of 2<sup><i>n</i><sup>2</sup>−<i>n</i></sup>.</b> Freezing a switch <b>divides</b> the count by 2; it does not subtract 1 from it. Correction: for <i>n</i> = 2, 2<sup>4−2</sup> = 4 reflexive relations, which you can list; 2<sup>4</sup> − 2 = 14 is nonsense.',
          '<b>Applying the power-of-two formulas to transitivity or to equivalence relations.</b> There is no formula 2<sup>something</sup> for these, because transitivity ties distant switches together. Correction: for equivalence relations, count <b>partitions</b>.',
          '<b>Confusing Dom(<i>R</i><sup>−1</sup>) with Dom(<i>R</i>).</b> Reversing arrows swaps the roles. Correction: Dom(<i>R</i><sup>−1</sup>) = Range(<i>R</i>), always.',
          '<b>Writing [<i>a</i>] and [<i>b</i>] as “overlapping”.</b> Under an equivalence relation, two classes either coincide completely or share nothing. Correction: if you find [1] = {1, 2} and [2] = {2, 3}, you have made an arithmetic error or <i>R</i> is not transitive; go back.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed).</b> In the exam, spend your first ten seconds on the <b>diagonal</b> and your next ten on <b>one chain</b>. Reflexivity and transitivity are where nearly every relation dies, and a single missing diagonal pair or a single unclosed chain settles the question with no further work. For counting questions, memorise the exponents as positions on the grid: the whole grid is <i>n</i><sup>2</sup>; kill the diagonal and you get <i>n</i><sup>2</sup> − <i>n</i> (reflexive); take the diagonal plus the upper triangle and you get <frac><num><i>n</i>(<i>n</i> + 1)</num><den>2</den></frac> (symmetric); take the upper triangle alone and you get <frac><num><i>n</i>(<i>n</i> − 1)</num><den>2</den></frac> (reflexive and symmetric). Antisymmetric is the only one with a 3 in it: the three legal states of each off-diagonal couple. And whenever “equivalence relation” appears in a counting question, switch immediately to counting partitions: <i>B</i><sub>3</sub> = 5 and <i>B</i><sub>4</sub> = 15 are worth knowing cold.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Reflexive', note: '(<i>a</i>, <i>a</i>) ∈ <i>R</i> for <b>every</b> <i>a</i> ∈ <i>A</i>; equivalently <i>I</i><sub><i>A</i></sub> ⊆ <i>R</i>.' },
          { f: 'Symmetric', note: '(<i>a</i>, <i>b</i>) ∈ <i>R</i> ⇒ (<i>b</i>, <i>a</i>) ∈ <i>R</i>; equivalently <i>R</i> = <i>R</i><sup>−1</sup>.' },
          { f: 'Transitive', note: '(<i>a</i>, <i>b</i>), (<i>b</i>, <i>c</i>) ∈ <i>R</i> ⇒ (<i>a</i>, <i>c</i>) ∈ <i>R</i>. Holds vacuously if no chain exists.' },
          { f: 'Antisymmetric', note: '(<i>a</i>, <i>b</i>), (<i>b</i>, <i>a</i>) ∈ <i>R</i> ⇒ <i>a</i> = <i>b</i>. Not the negation of symmetric.' },
          {
            f: 'Identity relation',
            note: '<i>I</i><sub><i>A</i></sub> = {(<i>a</i>, <i>a</i>) ∶ <i>a</i> ∈ <i>A</i>}: reflexive, symmetric, transitive <b>and</b> antisymmetric. It is the only relation on <i>A</i> that is all four.',
          },
          {
            f: 'Inverse relation',
            note: '<i>R</i><sup>−1</sup> = {(<i>b</i>, <i>a</i>) ∶ (<i>a</i>, <i>b</i>) ∈ <i>R</i>}; <i>n</i>(<i>R</i><sup>−1</sup>) = <i>n</i>(<i>R</i>); (<i>R</i><sup>−1</sup>)<sup>−1</sup> = <i>R</i>; Dom(<i>R</i><sup>−1</sup>) = Range(<i>R</i>) and Range(<i>R</i><sup>−1</sup>) = Dom(<i>R</i>).',
          },
          {
            f: 'Equivalence relation',
            note: 'reflexive <b>and</b> symmetric <b>and</b> transitive. Smallest on <i>A</i> is <i>I</i><sub><i>A</i></sub>; largest is <i>A</i> × <i>A</i>.',
          },
          {
            f: 'Equivalence class',
            note: '[<i>a</i>] = {<i>x</i> ∈ <i>A</i> ∶ (<i>x</i>, <i>a</i>) ∈ <i>R</i>}; <i>a</i> ∈ [<i>a</i>]; [<i>a</i>] = [<i>b</i>] ⟺ (<i>a</i>, <i>b</i>) ∈ <i>R</i>; distinct classes are disjoint.',
          },
          {
            f: 'Partition theorem',
            note: 'the distinct equivalence classes of an equivalence relation on <i>A</i> partition <i>A</i>: non-empty, pairwise disjoint, union = <i>A</i>. Conversely every partition gives an equivalence relation.',
          },
          {
            f: 'Model example',
            note: '<i>a</i> ≡ <i>b</i> (mod <i>m</i>) on ℤ is an equivalence relation with exactly <i>m</i> classes [0], [1], …, [<i>m</i> − 1], where [<i>r</i>] = {<i>mk</i> + <i>r</i> ∶ <i>k</i> ∈ ℤ}.',
          },
          { f: 'Counts on a set with <i>n</i>(<i>A</i>) = <i>n</i>', note: '' },
          { f: 'All relations', note: '2<sup><i>n</i><sup>2</sup></sup>' },
          { f: 'Reflexive', note: '2<sup><i>n</i><sup>2</sup>−<i>n</i></sup>' },
          { f: 'Symmetric', note: '2<sup><i>n</i>(<i>n</i>+1)/2</sup>' },
          { f: 'Reflexive and symmetric', note: '2<sup><i>n</i>(<i>n</i>−1)/2</sup>' },
          { f: 'Antisymmetric', note: '2<sup><i>n</i></sup> · 3<sup><i>n</i>(<i>n</i>−1)/2</sup>' },
          {
            f: 'Equivalence relations',
            note: 'number of partitions of <i>A</i>; <i>B</i><sub>3</sub> = 5, <i>B</i><sub>4</sub> = 15 (no power-of-two formula exists)',
          },
        ],
        aids: [
          '“<b>R</b>eflexive = <b>R</b>un the diagonal”: all <i>n</i> of them, no exceptions.',
          '“Symmetric ties the couple, antisymmetric bans the couple, reflexive freezes the diagonal.”',
          '“Equivalence relation = sorting hat”: three properties in, one clean partition out.',
          '“Transitivity has no formula”: when transitivity appears in a count, count partitions instead.',
          '“Reverse the arrows, swap domain and range”: for <i>R</i><sup>−1</sup>.',
        ],
      },
    ],
  },
];
