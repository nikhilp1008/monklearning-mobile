import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 1, Additional Topics I to M, word for word from the Class 11 Mathematics
 * Master Reference (October 2026 edition): "Chapter 1: Sets — Additional Topics", the
 * Round 2 addendum (pp. 87–100). Its opening text (p. 87, under the heading, which is
 * not copied) is set at the head of Additional topic I's Introduction, with its
 * "Subtopic 0N", "the Supplement", "Addendum X" and "This addendum" named as the app
 * names them. Then I Sets whose elements are sets (pp. 87–90; its own "Figure 1",
 * p. 88, shown at the end of the Method, where the book prints it, as m11-01-I-d1),
 * J Power set laws (pp. 90–92), K The four equivalent forms of A ⊆ B, and the
 * cancellation traps (pp. 92–94), L Proving containment between algebraically
 * described sets (pp. 95–97) and M The algebra of set difference (pp. 97–100). The
 * addendum's closing "Cheat sheet for this addendum" (p. 100) is M's last part,
 * "Cheat sheet: Additional topics I to M". Chapter 2 starts on p. 101.
 *
 * Each addendum's parts follow its own run-in headings: the opening "Extends …" line
 * is the Introduction, then Method (K: its two "Method — …" headings), Worked
 * examples, Practice. Each prints its answers in one block after its practice
 * questions; each is set as that question's answer. Every fraction is stacked
 * (<frac>); the book's binomial coefficient (n over k in round brackets, no rule) is
 * written in the NCERT form ⁿCₖ.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic I · pp. 87–90 ─────────────────────────
  {
    n: 'I',
    title: 'Sets whose elements are sets',
    extra: true,
    kalam: 'An entry is one object, however complicated it looks.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Topics 01–04, Additional topics A to H and Topic 05 together cover the whole NCERT syllabus for this chapter with one gap: the proof-and-structure family of problems that NCERT develops in Example 11, Example 30, Example 31, Exercise 1.3 Q3 and almost the whole Miscellaneous Exercise is touched only in passing, never drilled. Those are exactly the items that ask you to reason <b>about</b> sets rather than compute <b>with</b> them, and they are worth 4–6 marks a year in CBSE and a standing one-mark trap in JEE Main (the book’s estimate from past papers, not official figures).',
      },
      {
        t: 'p',
        html: 'Additional topics I to M close that gap in five short items, continuing the lettering of Additional topics A to H. Each is a method statement, one or two worked examples, and practice with answers.',
      },
      {
        t: 'table',
        title: null,
        head: ['Additional topic', 'Topic', 'Read after'],
        rows: [
          ['Additional topic I', 'Sets whose elements are sets; why ∈ is not transitive', 'Topic 02'],
          ['Additional topic J', 'Power set laws: <i>P</i>(<i>A</i> ∩ <i>B</i>), <i>P</i>(<i>A</i> ∪ <i>B</i>), and counting', 'Additional topic C'],
          ['Additional topic K', 'The four equivalent forms of <i>A</i> ⊆ <i>B</i>, and the cancellation traps', 'Topic 03'],
          ['Additional topic L', 'Proving containment between algebraically described sets', 'Topic 01'],
          ['Additional topic M', 'The algebra of set difference; why − needs its brackets', 'Topic 03'],
        ],
      },
      {
        t: 'p',
        html: 'Extends Topic 02’s Concept intuition part (the ∈ versus ⊆ discussion) and its Common student pitfalls and pro-tips part.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: 'Topic 02 taught you that ∈ joins an element to a set and ⊆ joins a set to a set. The examiner’s favourite way to test whether you actually believe that is to put a set inside the roster of another set. Five rules settle every such question.<br>1. <b>An entry is one object, however complicated it looks.</b> In <i>A</i> = {1, {2}, {3, 4}, ∅} there are four entries, so <i>n</i>(<i>A</i>) = 4. The braces around {3, 4} are part of the object’s name, not an invitation to unpack it.<br>2. <b>To test <i>X</i> ∈ <i>A</i>:</b> ask whether <i>X</i> appears, exactly as written, as one entry in the roster of <i>A</i>.<br>3. <b>To test <i>X</i> ⊆ <i>A</i>:</b> ask whether every element of <i>X</i> appears as an entry of <i>A</i>. This is a different question from rule 2 and usually has a different answer.<br>4. <b>∅ ⊆ <i>A</i> is always true. ∅ ∈ <i>A</i> is true only when ∅ is actually listed as an entry.</b> Most sets satisfy the first and fail the second; a set like <i>A</i> above satisfies both, and that is the point of the example.<br>5. <b>⊆ is transitive; ∈ is not.</b> From <i>A</i> ⊆ <i>B</i> and <i>B</i> ⊆ <i>C</i> you may write <i>A</i> ⊆ <i>C</i>. From <i>x</i> ∈ <i>A</i> and <i>A</i> ∈ <i>B</i> you may conclude nothing at all about <i>x</i> and <i>B</i>. Mixing the two works in exactly one order: <i>A</i> ∈ <i>B</i> and <i>B</i> ⊆ <i>C</i> give <i>A</i> ∈ <i>C</i>, but <i>A</i> ⊆ <i>B</i> and <i>B</i> ∈ <i>C</i> give nothing.',
      },
      { t: 'fig', id: 'm11-01-I-d1' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: 'Let <i>A</i> = {1, {2}, {3, 4}, ∅}. Mark each statement true or false with a one-line reason.<br>(i) <i>n</i>(<i>A</i>) = 4 (ii) 2 ∈ <i>A</i> (iii) {2} ∈ <i>A</i> (iv) {2} ⊆ <i>A</i><br>(v) {{2}} ⊆ <i>A</i> (vi) {3, 4} ⊆ <i>A</i> (vii) ∅ ∈ <i>A</i><br>(viii) ∅ ⊆ <i>A</i> (ix) {∅} ⊆ <i>A</i> (x) <i>n</i>[<i>P</i>(<i>A</i>)] = 16',
        steps: [
          '(i) <b>True.</b> Four entries: 1, {2}, {3, 4}, ∅.',
          '(ii) <b>False.</b> The entry is the set {2}. The number 2 is inside that entry, not on the shelf, and 2 ≠ {2}.',
          '(iii) <b>True.</b> {2} is written as an entry.',
          '(iv) <b>False.</b> {2} ⊆ <i>A</i> would demand 2 ∈ <i>A</i>, and (ii) already killed that.',
          '(v) <b>True.</b> The only element of {{2}} is {2}, and {2} ∈ <i>A</i> by (iii).',
          '(vi) <b>False.</b> {3, 4} ⊆ <i>A</i> demands 3 ∈ <i>A</i> and 4 ∈ <i>A</i>; neither is an entry. (Note {3, 4} ∈ <i>A</i> is true: the same object, the opposite verdict.)',
          '(vii) <b>True.</b> ∅ is listed as an entry here.',
          '(viii) <b>True.</b> The empty set is a subset of every set, always.',
          '(ix) <b>True.</b> Its only element is ∅, and ∅ ∈ <i>A</i> by (vii).',
          '(x) <b>True.</b> <i>n</i>(<i>A</i>) = 4, so <i>n</i>[<i>P</i>(<i>A</i>)] = 2<sup>4</sup> = 16. The complicated-looking entries change nothing: the counting rule only cares how many entries there are.',
          'Statements (vii) and (viii) are both true here, which is unusual and deliberate. For a set like <i>B</i> = {1, 2} you get ∅ ⊆ <i>B</i> true but ∅ ∈ <i>B</i> false. Never read one off the other.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main',
        q: 'Decide whether each implication holds for all sets. If it fails, give a counterexample.<br>(i) <i>x</i> ∈ <i>A</i> and <i>A</i> ∈ <i>B</i> ⇒ <i>x</i> ∈ <i>B</i><br>(ii) <i>A</i> ⊆ <i>B</i> and <i>B</i> ∈ <i>C</i> ⇒ <i>A</i> ∈ <i>C</i><br>(iii) <i>A</i> ⊆ <i>B</i> and <i>B</i> ⊆ <i>C</i> ⇒ <i>A</i> ⊆ <i>C</i><br>(iv) <i>A</i> ⊈ <i>B</i> and <i>B</i> ⊈ <i>C</i> ⇒ <i>A</i> ⊈ <i>C</i><br>(v) <i>x</i> ∈ <i>A</i> and <i>A</i> ⊈ <i>B</i> ⇒ <i>x</i> ∈ <i>B</i><br>(vi) <i>A</i> ⊆ <i>B</i> and <i>x</i> ∉ <i>B</i> ⇒ <i>x</i> ∉ <i>A</i>',
        steps: [
          '(i) <b>False.</b> Take <i>x</i> = 1, <i>A</i> = {1}, <i>B</i> = {{1}}. Then 1 ∈ <i>A</i> and <i>A</i> ∈ <i>B</i>, but the one and only element of <i>B</i> is the set {1}, and 1 ≠ {1}, so 1 ∉ <i>B</i>. Membership does not chain.',
          '(ii) <b>False.</b> Take <i>A</i> = {1}, <i>B</i> = {1, 2}, <i>C</i> = {{1, 2}, 3}. Then <i>A</i> ⊆ <i>B</i> and <i>B</i> ∈ <i>C</i>, but the entries of <i>C</i> are {1, 2} and 3, neither of which is {1}, so <i>A</i> ∉ <i>C</i>. Following a ⊆ step with an ∈ step does not chain (the other order, <i>A</i> ∈ <i>B</i> then <i>B</i> ⊆ <i>C</i>, does give <i>A</i> ∈ <i>C</i>).',
          '(iii) <b>True.</b> Take any <i>x</i> ∈ <i>A</i>. Then <i>x</i> ∈ <i>B</i> by the first hypothesis and <i>x</i> ∈ <i>C</i> by the second. Since <i>x</i> was arbitrary, <i>A</i> ⊆ <i>C</i>. Containment does chain.',
          '(iv) <b>False.</b> Take <i>A</i> = {1}, <i>B</i> = {2}, <i>C</i> = {1, 3}. Here 1 ∉ <i>B</i>, so <i>A</i> ⊈ <i>B</i>; and 2 ∉ <i>C</i>, so <i>B</i> ⊈ <i>C</i>; yet 1 ∈ <i>C</i>, so <i>A</i> ⊆ <i>C</i>. Two failures do not compose into a third.',
          '(v) <b>False.</b> Take <i>A</i> = {1, 2}, <i>B</i> = {1}, <i>x</i> = 2. Then 2 ∈ <i>A</i>, and <i>A</i> ⊈ <i>B</i> (because of that very 2), but 2 ∉ <i>B</i>. “<i>A</i> is not inside <i>B</i>” tells you some element of <i>A</i> escapes, never that a particular one lands in <i>B</i>.',
          '(vi) <b>True.</b> This is the contrapositive of the definition: <i>A</i> ⊆ <i>B</i> says <i>x</i> ∈ <i>A</i> ⇒ <i>x</i> ∈ <i>B</i>, so <i>x</i> ∉ <i>B</i> ⇒ <i>x</i> ∉ <i>A</i>.',
          'The habit to build: for every claimed implication, first try to break it with a two- or three-element set. Only after the counterexample hunt fails should you look for a proof.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'Let <i>A</i> = {<i>a</i>, {<i>a</i>}, {<i>a</i>, <i>b</i>}}. Find <i>n</i>(<i>A</i>) and <i>n</i>[<i>P</i>(<i>A</i>)].',
            a: '<i>n</i>(<i>A</i>) = 3 (the entries are <i>a</i>, {<i>a</i>}, {<i>a</i>, <i>b</i>}), so <i>n</i>[<i>P</i>(<i>A</i>)] = 2<sup>3</sup> = 8.',
          },
          {
            q: 'For the same <i>A</i>: is {<i>a</i>} ∈ <i>A</i>? Is {<i>a</i>} ⊆ <i>A</i>? Is {{<i>a</i>}} ⊆ <i>A</i>?',
            a: '{<i>a</i>} ∈ <i>A</i>: yes, it is an entry. {<i>a</i>} ⊆ <i>A</i>: yes as well, because its only element <i>a</i> is also an entry of <i>A</i>; this is the rare set where both hold, so check both separately rather than assuming they disagree. {{<i>a</i>}} ⊆ <i>A</i>: yes, since {<i>a</i>} ∈ <i>A</i>.',
          },
          {
            q: 'Is {<i>b</i>} ⊆ <i>A</i> for the <i>A</i> of question 1?',
            a: 'No. <i>b</i> is not an entry of <i>A</i>; it only appears inside the entry {<i>a</i>, <i>b</i>}.',
          },
          {
            q: 'Let <i>C</i> = {∅, {∅}}. Find <i>n</i>(<i>C</i>), and decide whether ∅ ∈ <i>C</i>, ∅ ⊆ <i>C</i>, {∅} ∈ <i>C</i> and {∅} ⊆ <i>C</i>.',
            a: '<i>n</i>(<i>C</i>) = 2. ∅ ∈ <i>C</i>: true (listed). ∅ ⊆ <i>C</i>: true (always). {∅} ∈ <i>C</i>: true (listed). {∅} ⊆ <i>C</i>: true, since its only element ∅ belongs to <i>C</i>. All four hold.',
          },
          {
            q: 'True or false: if <i>A</i> ∈ <i>B</i> and <i>B</i> ⊆ <i>C</i>, then <i>A</i> ∈ <i>C</i>. Justify.',
            a: 'True. <i>A</i> ∈ <i>B</i> puts <i>A</i> among the elements of <i>B</i>, and <i>B</i> ⊆ <i>C</i> sends every element of <i>B</i> into <i>C</i>; so <i>A</i> ∈ <i>C</i>. This is the one legal mixed chain.',
          },
          {
            q: 'True or false: if <i>A</i> ∈ <i>B</i> and <i>B</i> ⊆ <i>C</i>, then <i>A</i> ⊆ <i>C</i>. Give a counterexample if false.',
            a: 'False. A counterexample: <i>A</i> = {1}, <i>B</i> = {{1}, 2}, <i>C</i> = {{1}, 2, 3}. Then <i>A</i> ∈ <i>B</i> and <i>B</i> ⊆ <i>C</i>, but 1 ∈ <i>A</i> while 1 ∉ <i>C</i>, so <i>A</i> ⊈ <i>C</i>. Compare with question 5: the conclusion <i>A</i> ∈ <i>C</i> is fine, the conclusion <i>A</i> ⊆ <i>C</i> is not.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic J · pp. 90–92 ─────────────────────────
  {
    n: 'J',
    title: 'Power set laws',
    extra: true,
    kalam: 'The intersection law is an equality; the union law is only a containment.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Extends Topic 02’s parts from Key definitions, notation and formulas to Worked examples, and Additional topic C.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: 'Additional topic C iterated the power set of a single set. Here you have two, and there are exactly three laws plus one set of counting formulas. Throughout, <i>n</i>(<i>A</i>) = <i>a</i>, <i>n</i>(<i>B</i>) = <i>b</i>, <i>n</i>(<i>A</i> ∩ <i>B</i>) = <i>c</i>.',
      },
      {
        t: 'formula',
        kicker: 'Power set laws',
        main: '<i>P</i>(<i>A</i>) ∩ <i>P</i>(<i>B</i>) = <i>P</i>(<i>A</i> ∩ <i>B</i>) (always, with no conditions)<br><i>P</i>(<i>A</i>) ∪ <i>P</i>(<i>B</i>) ⊆ <i>P</i>(<i>A</i> ∪ <i>B</i>), with equality if and only if <i>A</i> ⊆ <i>B</i> or <i>B</i> ⊆ <i>A</i><br><i>A</i> ⊆ <i>B</i> ⟺ <i>P</i>(<i>A</i>) ⊆ <i>P</i>(<i>B</i>), and hence <i>P</i>(<i>A</i>) = <i>P</i>(<i>B</i>) ⟺ <i>A</i> = <i>B</i>',
        legend: [],
        note: null,
      },
      {
        t: 'p',
        html: '• The intersection law is an equality; the union law is only a containment. This asymmetry is the whole examinable content; remember it as <b>“cap behaves, cup does not.”</b><br>• Why the cup misbehaves: a subset of <i>A</i> ∪ <i>B</i> is allowed to take some elements from <i>A</i> and some from <i>B</i>, and such a mongrel subset lies inside neither <i>A</i> nor <i>B</i> on its own.<br>• Counting, for finite <i>A</i> and <i>B</i>:',
      },
      {
        t: 'formula',
        kicker: 'Power set counts',
        main: '<i>n</i>[<i>P</i>(<i>A</i>) ∩ <i>P</i>(<i>B</i>)] = 2<sup><i>c</i></sup><br><i>n</i>[<i>P</i>(<i>A</i>) ∪ <i>P</i>(<i>B</i>)] = 2<sup><i>a</i></sup> + 2<sup><i>b</i></sup> − 2<sup><i>c</i></sup><br><i>n</i>[<i>P</i>(<i>A</i> ∪ <i>B</i>)] = 2<sup><i>a</i>+<i>b</i>−<i>c</i></sup>',
        legend: ['<i>a</i> = <i>n</i>(<i>A</i>)', '<i>b</i> = <i>n</i>(<i>B</i>)', '<i>c</i> = <i>n</i>(<i>A</i> ∩ <i>B</i>)'],
        note: null,
      },
      {
        t: 'p',
        html: 'The middle one is just inclusion-exclusion applied to the two power sets, using the first law to size their overlap.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: 'Let <i>A</i> = {1, 2} and <i>B</i> = {2, 3}. Write <i>P</i>(<i>A</i>), <i>P</i>(<i>B</i>), <i>P</i>(<i>A</i>) ∩ <i>P</i>(<i>B</i>) and <i>P</i>(<i>A</i>) ∪ <i>P</i>(<i>B</i>) in full, and compare with <i>P</i>(<i>A</i> ∩ <i>B</i>) and <i>P</i>(<i>A</i> ∪ <i>B</i>).',
        steps: [
          '<i>P</i>(<i>A</i>) = {∅, {1}, {2}, {1, 2}},<br><i>P</i>(<i>B</i>) = {∅, {2}, {3}, {2, 3}}',
          '<b>Intersection.</b> The members common to both lists are ∅ and {2}:<br><i>P</i>(<i>A</i>) ∩ <i>P</i>(<i>B</i>) = {∅, {2}}<br>And <i>A</i> ∩ <i>B</i> = {2}, whose power set is {∅, {2}}. Identical, as the law promises. The count agrees too: <i>c</i> = 1, and 2<sup>1</sup> = 2.',
          '<b>Union.</b> Merging the two lists and keeping one copy of each:<br><i>P</i>(<i>A</i>) ∪ <i>P</i>(<i>B</i>) = {∅, {1}, {2}, {3}, {1, 2}, {2, 3}}<br>That is 6 members, matching 2<sup><i>a</i></sup> + 2<sup><i>b</i></sup> − 2<sup><i>c</i></sup> = 4 + 4 − 2 = 6. But <i>A</i> ∪ <i>B</i> = {1, 2, 3}, so <i>n</i>[<i>P</i>(<i>A</i> ∪ <i>B</i>)] = 2<sup>3</sup> = 8. The two missing members are<br>{1, 3} and {1, 2, 3},<br>and you can see why each is missing: both contain 1 (so neither is a subset of <i>B</i> = {2, 3}) and both contain 3 (so neither is a subset of <i>A</i> = {1, 2}). Each is a mongrel. Hence <i>P</i>(<i>A</i>) ∪ <i>P</i>(<i>B</i>) ⊊ <i>P</i>(<i>A</i> ∪ <i>B</i>), consistent with the law, since neither <i>A</i> ⊆ <i>B</i> nor <i>B</i> ⊆ <i>A</i> holds.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced',
        q: 'Prove that (i) <i>P</i>(<i>A</i>) ∩ <i>P</i>(<i>B</i>) = <i>P</i>(<i>A</i> ∩ <i>B</i>) for all sets <i>A</i>, <i>B</i>, and (ii) <i>P</i>(<i>A</i>) ∪ <i>P</i>(<i>B</i>) = <i>P</i>(<i>A</i> ∪ <i>B</i>) if and only if <i>A</i> ⊆ <i>B</i> or <i>B</i> ⊆ <i>A</i>.',
        steps: [
          '<b>(i) Element-chasing, where the “elements” are themselves sets.</b> Let <i>X</i> be any set.<br><i>X</i> ∈ <i>P</i>(<i>A</i>) ∩ <i>P</i>(<i>B</i>) ⟺ <i>X</i> ∈ <i>P</i>(<i>A</i>) and <i>X</i> ∈ <i>P</i>(<i>B</i>) ⟺ <i>X</i> ⊆ <i>A</i> and <i>X</i> ⊆ <i>B</i><br>Now “<i>X</i> ⊆ <i>A</i> and <i>X</i> ⊆ <i>B</i>” says every element of <i>X</i> lies in <i>A</i> and also lies in <i>B</i>, which is precisely “every element of <i>X</i> lies in <i>A</i> ∩ <i>B</i>”, i.e. <i>X</i> ⊆ <i>A</i> ∩ <i>B</i>. So the chain continues:<br>⟺ <i>X</i> ⊆ <i>A</i> ∩ <i>B</i> ⟺ <i>X</i> ∈ <i>P</i>(<i>A</i> ∩ <i>B</i>)<br>Every step is an “if and only if”, so the two collections have exactly the same members and are equal. ■',
          '<b>(ii) The containment first.</b> If <i>X</i> ∈ <i>P</i>(<i>A</i>) ∪ <i>P</i>(<i>B</i>) then <i>X</i> ⊆ <i>A</i> or <i>X</i> ⊆ <i>B</i>; either way <i>X</i> ⊆ <i>A</i> ∪ <i>B</i>, so <i>X</i> ∈ <i>P</i>(<i>A</i> ∪ <i>B</i>). Hence <i>P</i>(<i>A</i>) ∪ <i>P</i>(<i>B</i>) ⊆ <i>P</i>(<i>A</i> ∪ <i>B</i>) always, and the only question is when it is an equality.',
          '<b>If <i>A</i> ⊆ <i>B</i>:</b> then <i>A</i> ∪ <i>B</i> = <i>B</i> and <i>P</i>(<i>A</i>) ⊆ <i>P</i>(<i>B</i>), so <i>P</i>(<i>A</i>) ∪ <i>P</i>(<i>B</i>) = <i>P</i>(<i>B</i>) = <i>P</i>(<i>A</i> ∪ <i>B</i>). Equality holds. The case <i>B</i> ⊆ <i>A</i> is the same argument with the letters swapped.',
          '<b>If neither containment holds:</b> then some <i>p</i> ∈ <i>A</i> with <i>p</i> ∉ <i>B</i>, and some <i>q</i> ∈ <i>B</i> with <i>q</i> ∉ <i>A</i>. Build the mongrel <i>X</i> = {<i>p</i>, <i>q</i>}. Since <i>p</i>, <i>q</i> ∈ <i>A</i> ∪ <i>B</i>, we get <i>X</i> ∈ <i>P</i>(<i>A</i> ∪ <i>B</i>). But <i>q</i> ∉ <i>A</i> forces <i>X</i> ⊈ <i>A</i>, and <i>p</i> ∉ <i>B</i> forces <i>X</i> ⊈ <i>B</i>, so <i>X</i> ∉ <i>P</i>(<i>A</i>) ∪ <i>P</i>(<i>B</i>). The containment is therefore strict. ■',
          'Both directions are proved, so the equality happens exactly when one of <i>A</i>, <i>B</i> sits inside the other. Notice how short the second half is once you decide to construct the missing subset rather than argue about it: one element from each private region is all it takes.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '<i>A</i> = {1, 2, 3}, <i>B</i> = {3, 4}. Find <i>n</i>[<i>P</i>(<i>A</i>) ∩ <i>P</i>(<i>B</i>)] and <i>n</i>[<i>P</i>(<i>A</i>) ∪ <i>P</i>(<i>B</i>)].',
            a: '<i>A</i> ∩ <i>B</i> = {3}, so <i>n</i>[<i>P</i>(<i>A</i>) ∩ <i>P</i>(<i>B</i>)] = 2<sup>1</sup> = 2; and <i>n</i>[<i>P</i>(<i>A</i>) ∪ <i>P</i>(<i>B</i>)] = 2<sup>3</sup> + 2<sup>2</sup> − 2<sup>1</sup> = 8 + 4 − 2 = 10.',
          },
          {
            q: 'With <i>n</i>(<i>A</i>) = 5, <i>n</i>(<i>B</i>) = 4 and <i>n</i>(<i>A</i> ∩ <i>B</i>) = 2, find <i>n</i>[<i>P</i>(<i>A</i>) ∪ <i>P</i>(<i>B</i>)] and <i>n</i>[<i>P</i>(<i>A</i> ∪ <i>B</i>)].',
            a: '2<sup>5</sup> + 2<sup>4</sup> − 2<sup>2</sup> = 32 + 16 − 4 = 44; and <i>n</i>(<i>A</i> ∪ <i>B</i>) = 5 + 4 − 2 = 7, so <i>n</i>[<i>P</i>(<i>A</i> ∪ <i>B</i>)] = 2<sup>7</sup> = 128.',
          },
          {
            q: 'True or false: <i>P</i>(<i>A</i>) ∪ <i>P</i>(<i>B</i>) = <i>P</i>(<i>A</i> ∪ <i>B</i>) whenever <i>A</i> and <i>B</i> are disjoint and both non-empty. Justify.',
            a: 'False. Disjoint non-empty sets satisfy neither <i>A</i> ⊆ <i>B</i> nor <i>B</i> ⊆ <i>A</i>, so the containment is strict. Concretely, with <i>A</i> = {1} and <i>B</i> = {2}, the subset {1, 2} belongs to <i>P</i>(<i>A</i> ∪ <i>B</i>) but to neither <i>P</i>(<i>A</i>) nor <i>P</i>(<i>B</i>).',
          },
          {
            q: 'If <i>P</i>(<i>A</i>) ⊆ <i>P</i>(<i>B</i>), what can you conclude about <i>A</i> and <i>B</i>?',
            a: '<i>A</i> ⊆ <i>B</i>. (Apply the hypothesis to the member <i>X</i> = <i>A</i> of <i>P</i>(<i>A</i>): it must lie in <i>P</i>(<i>B</i>), i.e. <i>A</i> ⊆ <i>B</i>. The converse is immediate, so the two statements are equivalent.)',
          },
          {
            q: 'Find all pairs of sets <i>A</i>, <i>B</i> ⊆ {1, 2} for which <i>P</i>(<i>A</i>) ∪ <i>P</i>(<i>B</i>) = <i>P</i>(<i>A</i> ∪ <i>B</i>), and check your answer against the criterion.',
            a: 'Every pair except {<i>A</i>, <i>B</i>} = {{1}, {2}}. Those two are the only unordered pair drawn from ∅, {1}, {2}, {1, 2} in which neither set contains the other, which is exactly the criterion.',
          },
          {
            q: 'If <i>n</i>[<i>P</i>(<i>A</i>) ∩ <i>P</i>(<i>B</i>)] = 8 and <i>n</i>(<i>A</i>) = <i>n</i>(<i>B</i>) = 5, find <i>n</i>(<i>A</i> ∪ <i>B</i>).',
            a: '2<sup><i>n</i>(<i>A</i> ∩ <i>B</i>)</sup> = 8 gives <i>n</i>(<i>A</i> ∩ <i>B</i>) = 3, so <i>n</i>(<i>A</i> ∪ <i>B</i>) = 5 + 5 − 3 = 7.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic K · pp. 92–94 ─────────────────────────
  {
    n: 'K',
    title: 'The four equivalent forms of A ⊆ B, and the cancellation traps',
    extra: true,
    kalam: 'Sets are not numbers, and the cancellation law you trust in arithmetic fails here.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Extends Topic 03’s parts from Key definitions, notation and laws to Practice exercises. Topic 03 uses several of these implications in one direction (its fourth MCQ uses <i>A</i> ⊆ <i>B</i> ⇒ <i>A</i> ∪ <i>B</i> = <i>B</i>); what follows is the full two-way statement with its proof, which is what the “show that…” questions demand.',
      },

      { t: 'part', title: 'Method: the equivalence theorem' },
      {
        t: 'p',
        html: 'For any two sets <i>A</i> and <i>B</i>, the following four statements are equivalent: each one implies all the others, so proving any one of them proves all four.',
      },
      {
        t: 'formula',
        kicker: 'The equivalence theorem',
        main: '(i) <i>A</i> ⊆ <i>B</i><br>⟺ (ii) <i>A</i> − <i>B</i> = ∅<br>⟺ (iii) <i>A</i> ∪ <i>B</i> = <i>B</i><br>⟺ (iv) <i>A</i> ∩ <i>B</i> = <i>A</i>',
        legend: [],
        note: null,
      },
      {
        t: 'p',
        html: '• <b>How to use it in an exam:</b> whichever of the four is easiest to establish from the data, establish that one and then quote the theorem. Most often (ii) is the cheapest, because showing a set is empty needs only “no element can satisfy both conditions.”<br>• <b>The economical proof</b> is a cycle: (i) ⇒ (ii) ⇒ (iii) ⇒ (iv) ⇒ (i). Four short implications replace the twelve you would need if you proved each pair separately. Why the cycle is enough: from any statement in the ring you can walk forward to any other.<br>• <b>Immediate corollary:</b> <i>A</i> ∪ <i>B</i> = <i>A</i> ∩ <i>B</i> if and only if <i>A</i> = <i>B</i>.',
      },

      { t: 'part', title: 'Method: the cancellation traps' },
      {
        t: 'p',
        html: 'Sets are not numbers, and the cancellation law you trust in arithmetic fails here.',
      },
      {
        t: 'defgrid',
        title: 'Given: Can you conclude B = C?',
        rows: [
          { k: '<i>A</i> ∩ <i>B</i> = <i>A</i> ∩ <i>C</i>', v: '<b>No</b>' },
          { k: '<i>A</i> ∪ <i>B</i> = <i>A</i> ∪ <i>C</i>', v: '<b>No</b>' },
          { k: 'both together', v: '<b>Yes</b>' },
        ],
      },
      {
        t: 'p',
        html: 'The one-line reason both singles fail: <i>A</i> can hide the difference between <i>B</i> and <i>C</i>: inside <i>A</i> for the union version, outside <i>A</i> for the intersection version. Only when you close both hiding places is <i>B</i> = <i>C</i> forced.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board / JEE Main',
        q: 'Show that the four conditions (i)–(iv) of the equivalence theorem are equivalent.',
        steps: [
          '<b>(i) ⇒ (ii).</b> Suppose <i>A</i> ⊆ <i>B</i>. An element of <i>A</i> − <i>B</i> would have to lie in <i>A</i> and outside <i>B</i>, but <i>A</i> ⊆ <i>B</i> sends every element of <i>A</i> into <i>B</i>. No such element exists, so <i>A</i> − <i>B</i> = ∅.',
          '<b>(ii) ⇒ (iii).</b> Suppose <i>A</i> − <i>B</i> = ∅. Certainly <i>B</i> ⊆ <i>A</i> ∪ <i>B</i>. For the reverse, take <i>x</i> ∈ <i>A</i> ∪ <i>B</i>. If <i>x</i> ∈ <i>B</i> we are done. If <i>x</i> ∉ <i>B</i>, then from <i>x</i> ∈ <i>A</i> ∪ <i>B</i> we get <i>x</i> ∈ <i>A</i>, so <i>x</i> ∈ <i>A</i> − <i>B</i>: impossible, since that set is empty. So every <i>x</i> ∈ <i>A</i> ∪ <i>B</i> lies in <i>B</i>, giving <i>A</i> ∪ <i>B</i> ⊆ <i>B</i>. Mutual containment yields <i>A</i> ∪ <i>B</i> = <i>B</i>.',
          '<b>(iii) ⇒ (iv).</b> Suppose <i>A</i> ∪ <i>B</i> = <i>B</i>. Then<br><i>A</i> ∩ <i>B</i> = <i>A</i> ∩ (<i>A</i> ∪ <i>B</i>) = <i>A</i>,<br>the last step being the absorption law already established in Topic 03’s practice question 5.',
          '<b>(iv) ⇒ (i).</b> Suppose <i>A</i> ∩ <i>B</i> = <i>A</i>. Take any <i>x</i> ∈ <i>A</i>. Then <i>x</i> ∈ <i>A</i> ∩ <i>B</i>, and every element of an intersection lies in <i>B</i>. So <i>x</i> ∈ <i>B</i>, and since <i>x</i> was arbitrary, <i>A</i> ⊆ <i>B</i>. ■',
          'The cycle closes, so all four are equivalent.',
          '<b>The corollary.</b> If <i>A</i> ∪ <i>B</i> = <i>A</i> ∩ <i>B</i>, then since <i>A</i> ⊆ <i>A</i> ∪ <i>B</i> = <i>A</i> ∩ <i>B</i> ⊆ <i>B</i> we get <i>A</i> ⊆ <i>B</i>; and symmetrically <i>B</i> ⊆ <i>A</i> ∪ <i>B</i> = <i>A</i> ∩ <i>B</i> ⊆ <i>A</i> gives <i>B</i> ⊆ <i>A</i>. Mutual containment forces <i>A</i> = <i>B</i>. Conversely if <i>A</i> = <i>B</i> then both sides equal <i>A</i>. So <i>A</i> ∪ <i>B</i> = <i>A</i> ∩ <i>B</i> ⟺ <i>A</i> = <i>B</i>.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced',
        q: '(a) Show by counterexample that neither <i>A</i> ∩ <i>B</i> = <i>A</i> ∩ <i>C</i> nor <i>A</i> ∪ <i>B</i> = <i>A</i> ∪ <i>C</i> alone forces <i>B</i> = <i>C</i>. (b) Show that the two together do force <i>B</i> = <i>C</i>.',
        steps: [
          '<b>(a) Intersection alone.</b> Take <i>A</i> = {1}, <i>B</i> = {1, 2}, <i>C</i> = {1, 3}. Then <i>A</i> ∩ <i>B</i> = {1} = <i>A</i> ∩ <i>C</i>, yet <i>B</i> ≠ <i>C</i>. The difference between <i>B</i> and <i>C</i> (the elements 2 and 3) lives entirely outside <i>A</i>, where intersecting with <i>A</i> cannot see it.',
          '<b>Union alone.</b> Take <i>A</i> = {1, 2, 3}, <i>B</i> = {1}, <i>C</i> = {2}. Then <i>A</i> ∪ <i>B</i> = {1, 2, 3} = <i>A</i> ∪ <i>C</i>, yet <i>B</i> ≠ <i>C</i>. This time the difference lives entirely inside <i>A</i>, where the union swallows it.',
          'Note how the two counterexamples are mirror images; that is the tell for why both hypotheses are needed.',
          '<b>(b) Both together.</b> Assume <i>A</i> ∩ <i>B</i> = <i>A</i> ∩ <i>C</i> and <i>A</i> ∪ <i>B</i> = <i>A</i> ∪ <i>C</i>. Then<br><i>B</i> = <i>B</i> ∩ (<i>A</i> ∪ <i>B</i>) (absorption)<br>= <i>B</i> ∩ (<i>A</i> ∪ <i>C</i>) (the union hypothesis)<br>= (<i>B</i> ∩ <i>A</i>) ∪ (<i>B</i> ∩ <i>C</i>) (distributive law)<br>= (<i>A</i> ∩ <i>C</i>) ∪ (<i>B</i> ∩ <i>C</i>) (the intersection hypothesis, since <i>B</i> ∩ <i>A</i> = <i>A</i> ∩ <i>B</i>)<br>= (<i>A</i> ∪ <i>B</i>) ∩ <i>C</i> (distributive law, read right to left)<br>= (<i>A</i> ∪ <i>C</i>) ∩ <i>C</i> (the union hypothesis again)<br>= <i>C</i> (absorption)',
          'So <i>B</i> = <i>C</i>. ■ The union hypothesis is used twice and the intersection hypothesis once, and the whole proof has the shape absorb, substitute, distribute, substitute, distribute, substitute, absorb: worth memorising, because the same skeleton solves most “show that <i>B</i> = <i>C</i>” problems in this chapter.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'Given <i>A</i> − <i>B</i> = ∅ and <i>B</i> − <i>A</i> = ∅, what can you say about <i>A</i> and <i>B</i>?',
            a: '<i>A</i> = <i>B</i>. Form (ii) applied both ways gives <i>A</i> ⊆ <i>B</i> and <i>B</i> ⊆ <i>A</i>.',
          },
          {
            q: 'Show that <i>A</i> ⊆ <i>B</i> implies <i>C</i> − <i>B</i> ⊆ <i>C</i> − <i>A</i>, for every set <i>C</i>.',
            a: 'Let <i>x</i> ∈ <i>C</i> − <i>B</i>, so <i>x</i> ∈ <i>C</i> and <i>x</i> ∉ <i>B</i>. If <i>x</i> were in <i>A</i> then <i>A</i> ⊆ <i>B</i> would put <i>x</i> in <i>B</i>, a contradiction; so <i>x</i> ∉ <i>A</i>, i.e. <i>x</i> ∈ <i>C</i> − <i>A</i>.',
          },
          {
            q: 'If <i>A</i> ∩ <i>X</i> = <i>B</i> ∩ <i>X</i> = ∅ and <i>A</i> ∪ <i>X</i> = <i>B</i> ∪ <i>X</i>, prove <i>A</i> = <i>B</i>. (Hint: <i>A</i> = <i>A</i> ∩ (<i>A</i> ∪ <i>X</i>).)',
            a: '<i>A</i> = <i>A</i> ∩ (<i>A</i> ∪ <i>X</i>) = <i>A</i> ∩ (<i>B</i> ∪ <i>X</i>) = (<i>A</i> ∩ <i>B</i>) ∪ (<i>A</i> ∩ <i>X</i>) = (<i>A</i> ∩ <i>B</i>) ∪ ∅ = <i>A</i> ∩ <i>B</i>, so <i>A</i> ⊆ <i>B</i> by form (iv). The identical argument with <i>A</i> and <i>B</i> swapped gives <i>B</i> ⊆ <i>A</i>. Hence <i>A</i> = <i>B</i>.',
          },
          {
            q: 'True or false: <i>A</i> − <i>B</i> = <i>B</i> − <i>A</i> implies <i>A</i> = <i>B</i>.',
            a: 'True. Call the common set <i>D</i> = <i>A</i> − <i>B</i> = <i>B</i> − <i>A</i>. Then <i>D</i> ⊆ <i>A</i> (because <i>D</i> = <i>A</i> − <i>B</i>) and <i>D</i> ∩ <i>A</i> = ∅ (because <i>D</i> = <i>B</i> − <i>A</i> contains nothing from <i>A</i>), so <i>D</i> must be ∅. So <i>A</i> − <i>B</i> = <i>B</i> − <i>A</i> = ∅, and question 1 gives <i>A</i> = <i>B</i>.',
          },
          {
            q: 'Find sets <i>A</i>, <i>B</i>, <i>C</i> with <i>A</i> ∩ <i>B</i>, <i>B</i> ∩ <i>C</i> and <i>A</i> ∩ <i>C</i> all non-empty but <i>A</i> ∩ <i>B</i> ∩ <i>C</i> = ∅.',
            a: 'For instance <i>A</i> = {1, 2}, <i>B</i> = {2, 3}, <i>C</i> = {1, 3}: the three pairwise intersections are {2}, {3}, {1}, all non-empty, while no element lies in all three.',
          },
          {
            q: 'If <i>A</i> ∪ <i>B</i> = <i>A</i>, what is <i>B</i> − <i>A</i>? Which of the four equivalent forms are you using?',
            a: '<i>B</i> − <i>A</i> = ∅, and in fact <i>B</i> ⊆ <i>A</i>. You are using form (iii) with the letters swapped (<i>B</i> ∪ <i>A</i> = <i>A</i> means <i>B</i> ⊆ <i>A</i>) and then form (ii).',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic L · pp. 95–97 ─────────────────────────
  {
    n: 'L',
    title: 'Proving containment between algebraically described sets',
    extra: true,
    kalam: 'When both sets are given by a formula rather than a roster, listing them is hopeless and comparing them term by term is worse.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Extends Topic 01’s Key procedures and logical framework part (Procedure A) and Topic 02. This is a standing JEE Main item type and does not appear anywhere in Topics 01–04 or in Additional topics A to H.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: 'When both sets are given by a formula rather than a roster, listing them is hopeless and comparing them term by term is worse. Do this instead.<br>1. <b>Write the general element of the first set</b> as an expression in its index, say <i>t</i><sub><i>n</i></sub>.<br>2. <b>Force that expression into the shape the second set demands.</b> For “multiple of <i>k</i>” targets, the workhorse is the binomial expansion of (1 + <i>m</i>)<sup><i>n</i></sup>, because it isolates the first two terms and shows that everything left over carries a visible factor.<br>3. <b>Check the range.</b> Producing the right algebraic shape is not enough; the resulting parameter must lie in the index set the second description allows (usually ℕ or 𝕎).<br>4. <b>For strictness, hunt one witness.</b> To show <i>X</i> ⊊ <i>Y</i>, name a single element of <i>Y</i> and prove no index produces it in <i>X</i>. A monotonicity remark (“the terms of <i>X</i> are increasing and already exceed it”) is a complete proof and costs one line.',
      },
      {
        t: 'p',
        html: 'The binomial fact behind almost every problem of this type: for <i>n</i> ∈ ℕ and any integer <i>m</i> ≥ 0,<br>(1 + <i>m</i>)<sup><i>n</i></sup> = 1 + <i>mn</i> + ∑<sub><i>k</i>=2</sub><sup><i>n</i></sup> <sup><i>n</i></sup>C<sub><i>k</i></sub> <i>m</i><sup><i>k</i></sup>,<br>so (1 + <i>m</i>)<sup><i>n</i></sup> − <i>mn</i> − 1 = <i>m</i><sup>2</sup> ∑<sub><i>k</i>=2</sub><sup><i>n</i></sup> <sup><i>n</i></sup>C<sub><i>k</i></sub> <i>m</i><sup><i>k</i>−2</sup>,<br>a non-negative integer multiple of <i>m</i><sup>2</sup>. Read it once and you own the whole family.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main',
        q: 'Let <i>X</i> = {8<sup><i>n</i></sup> − 7<i>n</i> − 1 ∶ <i>n</i> ∈ ℕ} and <i>Y</i> = {49(<i>n</i> − 1) ∶ <i>n</i> ∈ ℕ}. Show that <i>X</i> ⊆ <i>Y</i>, and decide whether the containment is strict.',
        steps: [
          'First identify <i>Y</i> plainly: as <i>n</i> runs through 1, 2, 3, …, the expression 49(<i>n</i> − 1) runs through 0, 49, 98, 147, …, so<br><i>Y</i> = {all non-negative multiples of 49}.',
          'Now take a general element of <i>X</i> and apply the binomial expansion with <i>m</i> = 7:<br>8<sup><i>n</i></sup> = (1 + 7)<sup><i>n</i></sup> = 1 + 7<i>n</i> + ∑<sub><i>k</i>=2</sub><sup><i>n</i></sup> <sup><i>n</i></sup>C<sub><i>k</i></sub> 7<sup><i>k</i></sup>.',
          'Subtracting 7<i>n</i> + 1 from both sides kills exactly the first two terms:<br>8<sup><i>n</i></sup> − 7<i>n</i> − 1 = ∑<sub><i>k</i>=2</sub><sup><i>n</i></sup> <sup><i>n</i></sup>C<sub><i>k</i></sub> 7<sup><i>k</i></sup> = 49 ∑<sub><i>k</i>=2</sub><sup><i>n</i></sup> <sup><i>n</i></sup>C<sub><i>k</i></sub> 7<sup><i>k</i>−2</sup>.',
          'Every term of the remaining sum is a non-negative integer, so 8<sup><i>n</i></sup> − 7<i>n</i> − 1 is 49 times a non-negative integer, that is, a non-negative multiple of 49. Hence every element of <i>X</i> lies in <i>Y</i>:<br><i>X</i> ⊆ <i>Y</i>.',
          '<b>Is it strict?</b> List the first few members of <i>X</i>: for <i>n</i> = 1, 2, 3, 4 we get<br>8 − 7 − 1 = 0, 64 − 14 − 1 = 49, 512 − 21 − 1 = 490, 4096 − 28 − 1 = 4067.',
          'Consider 98 ∈ <i>Y</i>. The terms of <i>X</i> are strictly increasing (each step multiplies 8<sup><i>n</i></sup> by 8 while subtracting only a further 7), and they jump from 49 at <i>n</i> = 2 straight to 490 at <i>n</i> = 3. So no index gives 98, and<br><i>X</i> ⊊ <i>Y</i>.',
          'The trap this question is built on is answering “<i>X</i> = <i>Y</i>” after checking only that every member of <i>X</i> is a multiple of 49. Containment in one direction is not equality; you must either exhibit the reverse containment or, as here, break it.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced',
        q: 'Let <i>A</i> = {<frac><num><i>n</i></num><den><i>n</i> + 1</den></frac> ∶ <i>n</i> ∈ ℕ} and <i>B</i> = {<i>x</i> ∈ ℚ ∶ 0 < <i>x</i> < 1}. Determine whether <i>A</i> ⊆ <i>B</i>, whether <i>B</i> ⊆ <i>A</i>, and whether the two are equal.',
        steps: [
          '<b>Is <i>A</i> ⊆ <i>B</i>?</b> Take a general element <frac><num><i>n</i></num><den><i>n</i> + 1</den></frac> with <i>n</i> ∈ ℕ.<br>• It is rational: both <i>n</i> and <i>n</i> + 1 are integers and <i>n</i> + 1 ≠ 0.<br>• It is positive: <i>n</i> ≥ 1 and <i>n</i> + 1 ≥ 2, so the quotient is positive.<br>• It is less than 1: <frac><num><i>n</i></num><den><i>n</i> + 1</den></frac> < 1 ⟺ <i>n</i> < <i>n</i> + 1, which is always true.',
          'All three requirements of <i>B</i> are met, so <i>A</i> ⊆ <i>B</i>.',
          '<b>Is <i>B</i> ⊆ <i>A</i>?</b> No. Take the witness <frac><num>1</num><den>3</den></frac> ∈ <i>B</i>. If <frac><num>1</num><den>3</den></frac> were in <i>A</i> there would be a natural number <i>n</i> with<br><frac><num><i>n</i></num><den><i>n</i> + 1</den></frac> = <frac><num>1</num><den>3</den></frac> ⟹ 3<i>n</i> = <i>n</i> + 1 ⟹ <i>n</i> = <frac><num>1</num><den>2</den></frac> ∉ ℕ.<br>No such index exists, so <frac><num>1</num><den>3</den></frac> ∉ <i>A</i> and <i>B</i> ⊈ <i>A</i>.',
          'Therefore <i>A</i> ⊊ <i>B</i>. The structural reason is worth naming: solving <frac><num><i>n</i></num><den><i>n</i> + 1</den></frac> = <frac><num><i>p</i></num><den><i>q</i></den></frac> gives <i>n</i> = <frac><num><i>p</i></num><den><i>q</i> − <i>p</i></den></frac>, so a rational in (0, 1) belongs to <i>A</i> only when <i>q</i> − <i>p</i> divides <i>p</i>. For <frac><num><i>p</i></num><den><i>q</i></den></frac> in lowest terms this forces <i>q</i> − <i>p</i> = 1, so <i>A</i> contains only the fractions whose denominator is exactly one more than the numerator, and misses everything else.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'Show that {6<i>n</i> + 2 ∶ <i>n</i> ∈ 𝕎} ⊆ {2<i>n</i> ∶ <i>n</i> ∈ 𝕎}, and decide whether the containment is strict.',
            a: '6<i>n</i> + 2 = 2(3<i>n</i> + 1), and 3<i>n</i> + 1 ∈ 𝕎 whenever <i>n</i> ∈ 𝕎, so the containment holds. It is strict: 0 belongs to the right-hand set (take <i>n</i> = 0), but 6<i>n</i> + 2 = 0 would need <i>n</i> = −<frac><num>1</num><den>3</den></frac>, which is not a whole number.',
          },
          {
            q: 'Show that every element of {9<sup><i>n</i></sup> − 8<i>n</i> − 1 ∶ <i>n</i> ∈ ℕ} is a multiple of 64.',
            a: 'With <i>m</i> = 8: 9<sup><i>n</i></sup> = (1 + 8)<sup><i>n</i></sup> = 1 + 8<i>n</i> + ∑<sub><i>k</i>=2</sub><sup><i>n</i></sup> <sup><i>n</i></sup>C<sub><i>k</i></sub> 8<sup><i>k</i></sup>, so 9<sup><i>n</i></sup> − 8<i>n</i> − 1 = 64 ∑<sub><i>k</i>=2</sub><sup><i>n</i></sup> <sup><i>n</i></sup>C<sub><i>k</i></sub> 8<sup><i>k</i>−2</sup>, a multiple of 64.',
          },
          {
            q: 'Show that every element of {4<sup><i>n</i></sup> − 3<i>n</i> − 1 ∶ <i>n</i> ∈ ℕ} is a non-negative multiple of 9.',
            a: 'With <i>m</i> = 3: 4<sup><i>n</i></sup> − 3<i>n</i> − 1 = 9 ∑<sub><i>k</i>=2</sub><sup><i>n</i></sup> <sup><i>n</i></sup>C<sub><i>k</i></sub> 3<sup><i>k</i>−2</sup>, and the sum is a non-negative integer. (Check: <i>n</i> = 1, 2, 3 give 0, 9, 54.)',
          },
          {
            q: 'Is {2<i>n</i> ∶ <i>n</i> ∈ ℕ} ⊆ {<i>n</i><sup>2</sup> ∶ <i>n</i> ∈ ℕ}? Justify in one line.',
            a: 'No. 2 is in the left-hand set but is not a perfect square, so it is not in the right-hand set.',
          },
          {
            q: 'Let <i>P</i> = {<i>x</i> ∈ ℝ ∶ <i>x</i><sup>2</sup> − 5<i>x</i> + 6 = 0} and <i>Q</i> = {<i>x</i> ∈ ℕ ∶ <i>x</i> ≤ 3}. Decide whether <i>P</i> ⊆ <i>Q</i>, <i>Q</i> ⊆ <i>P</i>, or both.',
            a: '<i>P</i> = {2, 3} and <i>Q</i> = {1, 2, 3}, so <i>P</i> ⊆ <i>Q</i> but <i>Q</i> ⊈ <i>P</i> (because 1 ∉ <i>P</i>). The containment is strict and the sets are not equal.',
          },
          {
            q: 'Show that {12<i>n</i> ∶ <i>n</i> ∈ ℕ} = {4<i>n</i> ∶ <i>n</i> ∈ ℕ} ∩ {6<i>n</i> ∶ <i>n</i> ∈ ℕ}.',
            a: 'A natural number lies in the right-hand side exactly when it is a common multiple of 4 and 6, and the common multiples of two numbers are precisely the multiples of their lcm. Since lcm(4, 6) = 12, that set is the multiples of 12. (This is the <i>A</i><sub><i>m</i></sub> ∩ <i>A</i><sub><i>n</i></sub> = <i>A</i><sub>lcm(<i>m</i>,<i>n</i>)</sub> rule of Topic 05, restated in the language of this additional topic, and note the answer is not the multiples of 24.)',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic M · pp. 97–100 ─────────────────────────
  {
    n: 'M',
    title: 'The algebra of set difference',
    extra: true,
    kalam: 'Every difference question collapses the moment you rewrite A − B = A ∩ B′.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Extends Topic 03’s parts from Key definitions, notation and laws to Worked examples and its practice question 4, and Additional topic F. Topic 03 defines <i>A</i> − <i>B</i> and works only a few identities with it; the rest of the difference algebra is used silently everywhere and drilled nowhere. This item also closes NCERT Miscellaneous Exercise Q8’s second identity, the one part of that exercise not reached by Additional topics I to L.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: 'Every difference question collapses the moment you rewrite<br><i>A</i> − <i>B</i> = <i>A</i> ∩ <i>B</i>′.<br>After that, the ordinary laws of Topic 03 finish the job, with De Morgan doing the flipping. Five facts carry the whole topic.',
      },
      {
        t: 'p',
        html: '1. <b>Splitting into disjoint pieces.</b><br><i>A</i> ∪ <i>B</i> = <i>A</i> ∪ (<i>B</i> − <i>A</i>), and <i>A</i> ∩ (<i>B</i> − <i>A</i>) = ∅<br><i>A</i> = (<i>A</i> ∩ <i>B</i>) ∪ (<i>A</i> − <i>B</i>), and these two pieces are disjoint too<br>The second is Topic 03’s worked example 2 read backwards; the first is its partner and is the half students never meet.',
      },
      {
        t: 'p',
        html: '2. <b>Difference over a union, and over an intersection: the De Morgan pair.</b><br><i>A</i> − (<i>B</i> ∪ <i>C</i>) = (<i>A</i> − <i>B</i>) ∩ (<i>A</i> − <i>C</i>),<br><i>A</i> − (<i>B</i> ∩ <i>C</i>) = (<i>A</i> − <i>B</i>) ∪ (<i>A</i> − <i>C</i>)<br>The operation flips, for exactly the reason it flips in De Morgan’s laws: <i>A</i> − <i>X</i> = <i>A</i> ∩ <i>X</i>′, and complementing <i>B</i> ∪ <i>C</i> turns it into <i>B</i>′ ∩ <i>C</i>′. (The first of the two is Topic 03’s practice question 4; the second is its unexamined mirror.)',
      },
      {
        t: 'p',
        html: '3. <b>Peeling a double difference.</b><br><i>A</i> − (<i>B</i> − <i>C</i>) = (<i>A</i> − <i>B</i>) ∪ (<i>A</i> ∩ <i>C</i>)<br>The <i>C</i> part comes back. Removing “<i>B</i> except <i>C</i>” leaves everything of <i>A</i> outside <i>B</i> <b>plus</b> everything of <i>A</i> inside <i>C</i>.',
      },
      {
        t: 'p',
        html: '4. <b>Stacked differences, and why − is not associative.</b><br>(<i>A</i> − <i>B</i>) − <i>C</i> = <i>A</i> − (<i>B</i> ∪ <i>C</i>) = (<i>A</i> − <i>C</i>) − <i>B</i><br>but <i>A</i> − (<i>B</i> − <i>C</i>) is a different set in general. So <i>A</i> − <i>B</i> − <i>C</i> is meaningless without brackets, unlike ∪ and ∩, which are associative and may be written unbracketed.',
      },
      {
        t: 'p',
        html: '5. <b>Trimming the operands.</b><br><i>A</i> − <i>B</i> = <i>A</i> − (<i>A</i> ∩ <i>B</i>) = (<i>A</i> ∪ <i>B</i>) − <i>B</i><br>Worth having when <i>B</i> is enormous and <i>A</i> ∩ <i>B</i> is small: only the overlap ever matters.',
      },
      {
        t: 'p',
        html: '<b>Contrast worth naming:</b> symmetric difference is associative, (<i>A</i> △ <i>B</i>) △ <i>C</i> = <i>A</i> △ (<i>B</i> △ <i>C</i>), and equals the set of elements lying in an <b>odd number</b> of <i>A</i>, <i>B</i>, <i>C</i>: regions <i>R</i><sub>1</sub>, <i>R</i><sub>2</sub>, <i>R</i><sub>3</sub>, <i>R</i><sub>7</sub> in Additional topic F’s numbering. Plain difference is not associative. Do not let the family resemblance fool you.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: 'Show that <i>A</i> = (<i>A</i> ∩ <i>B</i>) ∪ (<i>A</i> − <i>B</i>) and that <i>A</i> ∪ (<i>B</i> − <i>A</i>) = <i>A</i> ∪ <i>B</i>, and deduce the two-set cardinality formula.',
        steps: [
          '<b>First identity.</b> Take <i>x</i> ∈ <i>A</i>. Either <i>x</i> ∈ <i>B</i>, in which case <i>x</i> ∈ <i>A</i> ∩ <i>B</i>, or <i>x</i> ∉ <i>B</i>, in which case <i>x</i> ∈ <i>A</i> − <i>B</i>. So <i>A</i> is contained in the right side. Conversely both <i>A</i> ∩ <i>B</i> and <i>A</i> − <i>B</i> are subsets of <i>A</i>, so the right side is contained in <i>A</i>. Mutual containment gives equality. The two pieces are disjoint, because one demands <i>x</i> ∈ <i>B</i> and the other demands <i>x</i> ∉ <i>B</i>.',
          '<b>Second identity.</b> <i>A</i> ⊆ <i>A</i> ∪ <i>B</i> and <i>B</i> − <i>A</i> ⊆ <i>B</i> ⊆ <i>A</i> ∪ <i>B</i>, so the left side sits inside <i>A</i> ∪ <i>B</i>. For the reverse, take <i>x</i> ∈ <i>A</i> ∪ <i>B</i>: if <i>x</i> ∈ <i>A</i> we are done, and if <i>x</i> ∉ <i>A</i> then <i>x</i> ∈ <i>B</i>, hence <i>x</i> ∈ <i>B</i> − <i>A</i>. So <i>A</i> ∪ (<i>B</i> − <i>A</i>) = <i>A</i> ∪ <i>B</i>, and again the two pieces are disjoint, since <i>B</i> − <i>A</i> throws out every element of <i>A</i>.',
          '<b>The deduction.</b> Because the union has been cut into two disjoint slabs, counts simply add:<br><i>n</i>(<i>A</i> ∪ <i>B</i>) = <i>n</i>(<i>A</i>) + <i>n</i>(<i>B</i> − <i>A</i>).<br>Applying the first identity to <i>B</i> gives <i>B</i> = (<i>B</i> ∩ <i>A</i>) ∪ (<i>B</i> − <i>A</i>) disjointly, so <i>n</i>(<i>B</i> − <i>A</i>) = <i>n</i>(<i>B</i>) − <i>n</i>(<i>A</i> ∩ <i>B</i>). Substituting,<br><i>n</i>(<i>A</i> ∪ <i>B</i>) = <i>n</i>(<i>A</i>) + <i>n</i>(<i>B</i>) − <i>n</i>(<i>A</i> ∩ <i>B</i>).',
          'This is the honest three-piece derivation of Topic 04’s headline formula, the same one NCERT gives, and it needs no talk of “double counting” at all.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main / JEE Advanced',
        q: '(a) Prove <i>A</i> − (<i>B</i> − <i>C</i>) = (<i>A</i> − <i>B</i>) ∪ (<i>A</i> ∩ <i>C</i>). (b) Prove (<i>A</i> − <i>B</i>) − <i>C</i> = <i>A</i> − (<i>B</i> ∪ <i>C</i>) and show by counterexample that − is not associative.',
        steps: [
          '<b>(a)</b> Convert every difference to an intersection with a complement, then push the complement inward with De Morgan:<br><i>A</i> − (<i>B</i> − <i>C</i>) = <i>A</i> − (<i>B</i> ∩ <i>C</i>′) = <i>A</i> ∩ (<i>B</i> ∩ <i>C</i>′)′ = <i>A</i> ∩ (<i>B</i>′ ∪ <i>C</i>)<br>= (<i>A</i> ∩ <i>B</i>′) ∪ (<i>A</i> ∩ <i>C</i>) = (<i>A</i> − <i>B</i>) ∪ (<i>A</i> ∩ <i>C</i>). ■',
          '<b>(b)</b> The same three moves, one step shorter:<br>(<i>A</i> − <i>B</i>) − <i>C</i> = (<i>A</i> ∩ <i>B</i>′) ∩ <i>C</i>′ = <i>A</i> ∩ (<i>B</i>′ ∩ <i>C</i>′) = <i>A</i> ∩ (<i>B</i> ∪ <i>C</i>)′ = <i>A</i> − (<i>B</i> ∪ <i>C</i>).<br>Since <i>B</i>′ ∩ <i>C</i>′ = <i>C</i>′ ∩ <i>B</i>′, the same computation gives (<i>A</i> − <i>C</i>) − <i>B</i>, so the two stacked orders agree with each other. ■',
          '<b>The counterexample.</b> Take <i>A</i> = {1, 2}, <i>B</i> = {2}, <i>C</i> = {1}. Then<br>(<i>A</i> − <i>B</i>) − <i>C</i> = {1} − {1} = ∅,<br><i>A</i> − (<i>B</i> − <i>C</i>) = {1, 2} − {2} = {1}.',
          'Different sets, so <i>A</i> − <i>B</i> − <i>C</i> is genuinely ambiguous and the brackets are compulsory. Notice the two answers differ by exactly <i>A</i> ∩ <i>C</i> = {1}: precisely the term <i>A</i> ∩ <i>C</i> that part (a) says <i>A</i> − (<i>B</i> − <i>C</i>) adds back.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'Write (<i>A</i> − <i>B</i>) − <i>C</i> as a single difference.',
            a: '<i>A</i> − (<i>B</i> ∪ <i>C</i>), which also equals (<i>A</i> − <i>C</i>) − <i>B</i>.',
          },
          {
            q: 'Prove <i>A</i> − (<i>B</i> ∩ <i>C</i>) = (<i>A</i> − <i>B</i>) ∪ (<i>A</i> − <i>C</i>) by element-chasing.',
            a: '<i>x</i> ∈ <i>A</i> − (<i>B</i> ∩ <i>C</i>) means <i>x</i> ∈ <i>A</i> and NOT(<i>x</i> ∈ <i>B</i> and <i>x</i> ∈ <i>C</i>), i.e. <i>x</i> ∈ <i>A</i> and (<i>x</i> ∉ <i>B</i> or <i>x</i> ∉ <i>C</i>), i.e. <i>x</i> ∈ <i>A</i> − <i>B</i> or <i>x</i> ∈ <i>A</i> − <i>C</i>. Every step is an iff.',
          },
          {
            q: 'With <i>A</i> = {1, 2, 3, 4}, <i>B</i> = {2, 3, 5}, <i>C</i> = {3, 4, 6}, compute <i>A</i> − (<i>B</i> − <i>C</i>) and (<i>A</i> − <i>B</i>) − <i>C</i> directly, and check both against the identities of the Method part.',
            a: '<i>B</i> − <i>C</i> = {2, 5}, so <i>A</i> − (<i>B</i> − <i>C</i>) = {1, 3, 4}; and (<i>A</i> − <i>B</i>) ∪ (<i>A</i> ∩ <i>C</i>) = {1, 4} ∪ {3, 4} = {1, 3, 4}, the same set. (<i>A</i> − <i>B</i>) − <i>C</i> = {1, 4} − <i>C</i> = {1}; and <i>A</i> − (<i>B</i> ∪ <i>C</i>) = {1, 2, 3, 4} − {2, 3, 4, 5, 6} = {1}, again the same. The two bracketings differ, as worked example 2 promised.',
          },
          {
            q: 'True or false: <i>A</i> − <i>B</i> − <i>C</i> is unambiguous without brackets. Justify.',
            a: '<b>False.</b> The counterexample of worked example 2 (<i>A</i> = {1, 2}, <i>B</i> = {2}, <i>C</i> = {1}) gives ∅ one way and {1} the other. Difference is neither commutative nor associative; union and intersection are both.',
          },
          {
            q: 'Show <i>A</i> − <i>B</i> = (<i>A</i> ∪ <i>B</i>) − <i>B</i>, and say in one line why <i>A</i> − <i>B</i> = <i>A</i> − (<i>A</i> ∩ <i>B</i>).',
            a: '(<i>A</i> ∪ <i>B</i>) − <i>B</i> = (<i>A</i> ∪ <i>B</i>) ∩ <i>B</i>′ = (<i>A</i> ∩ <i>B</i>′) ∪ (<i>B</i> ∩ <i>B</i>′) = (<i>A</i> − <i>B</i>) ∪ ∅ = <i>A</i> − <i>B</i>. And <i>A</i> − (<i>A</i> ∩ <i>B</i>) removes from <i>A</i> exactly the elements of <i>A</i> that lie in <i>B</i>, the only elements <i>B</i> could ever have removed, so it removes the same thing as <i>A</i> − <i>B</i>.',
          },
          {
            q: 'Using Additional topic F’s region numbering, give the region lists of <i>A</i> − (<i>B</i> − <i>C</i>) and of (<i>A</i> − <i>B</i>) − <i>C</i>.',
            a: '<i>A</i> − (<i>B</i> − <i>C</i>) = {<i>R</i><sub>1</sub>, <i>R</i><sub>6</sub>, <i>R</i><sub>7</sub>} and (<i>A</i> − <i>B</i>) − <i>C</i> = {<i>R</i><sub>1</sub>}. The first is strictly larger, by the two regions of <i>A</i> ∩ <i>C</i>.',
          },
          {
            q: 'Show that <i>A</i> △ <i>B</i> △ <i>C</i> is the set of elements lying in an odd number of <i>A</i>, <i>B</i>, <i>C</i>, and give its region list.',
            a: 'Membership of <i>A</i> △ <i>B</i> means “in exactly one of <i>A</i>, <i>B</i>”, i.e. the parity of the count is odd; taking △ with <i>C</i> flips that parity again exactly when <i>x</i> ∈ <i>C</i>. So <i>x</i> survives precisely when it lies in an odd number of the three. Region list: {<i>R</i><sub>1</sub>, <i>R</i><sub>2</sub>, <i>R</i><sub>3</sub>, <i>R</i><sub>7</sub>}: the three private crescents and the centre.',
          },
          {
            q: 'Simplify (<i>A</i> − <i>B</i>) ∪ (<i>B</i> − <i>A</i>) ∪ (<i>A</i> ∩ <i>B</i>).',
            a: '<i>A</i> ∪ <i>B</i>. The three pieces are the disjoint slabs of Topic 03’s four-region picture other than “neither”, so together they fill the union.',
          },
        ],
      },

      { t: 'part', title: 'Cheat sheet: Additional topics I to M' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Nested rosters',
            note: 'an entry is one object. <i>n</i>({1, {2}, {3, 4}, ∅}) = 4. ∅ ⊆ <i>A</i> always; ∅ ∈ <i>A</i> only if listed.',
          },
          {
            f: '⊆ chains, ∈ does not.',
            note: '<i>A</i> ⊆ <i>B</i> ⊆ <i>C</i> ⇒ <i>A</i> ⊆ <i>C</i> is legal. <i>x</i> ∈ <i>A</i> ∈ <i>B</i> ⇒ <i>x</i> ∈ <i>B</i> is not. The one legal mixed chain is <i>A</i> ∈ <i>B</i> ⊆ <i>C</i> ⇒ <i>A</i> ∈ <i>C</i>.',
          },
          {
            f: 'Power set laws',
            note: '<i>P</i>(<i>A</i>) ∩ <i>P</i>(<i>B</i>) = <i>P</i>(<i>A</i> ∩ <i>B</i>) always; <i>P</i>(<i>A</i>) ∪ <i>P</i>(<i>B</i>) ⊆ <i>P</i>(<i>A</i> ∪ <i>B</i>), equal only when one of <i>A</i>, <i>B</i> contains the other. <b>“Cap behaves, cup does not.”</b>',
          },
          {
            f: 'Power set counts',
            note: '<i>n</i>[<i>P</i>(<i>A</i>) ∩ <i>P</i>(<i>B</i>)] = 2<sup><i>c</i></sup>; <i>n</i>[<i>P</i>(<i>A</i>) ∪ <i>P</i>(<i>B</i>)] = 2<sup><i>a</i></sup> + 2<sup><i>b</i></sup> − 2<sup><i>c</i></sup>; <i>n</i>[<i>P</i>(<i>A</i> ∪ <i>B</i>)] = 2<sup><i>a</i>+<i>b</i>−<i>c</i></sup>, where <i>c</i> = <i>n</i>(<i>A</i> ∩ <i>B</i>).',
          },
          {
            f: '<i>A</i> ⊆ <i>B</i> has four faces',
            note: '<i>A</i> ⊆ <i>B</i> ⟺ <i>A</i> − <i>B</i> = ∅ ⟺ <i>A</i> ∪ <i>B</i> = <i>B</i> ⟺ <i>A</i> ∩ <i>B</i> = <i>A</i>. Prove whichever is cheapest. Corollary: <i>A</i> ∪ <i>B</i> = <i>A</i> ∩ <i>B</i> ⟺ <i>A</i> = <i>B</i>.',
          },
          {
            f: 'Cancellation',
            note: 'one hypothesis is never enough; <i>A</i> ∩ <i>B</i> = <i>A</i> ∩ <i>C</i> and <i>A</i> ∪ <i>B</i> = <i>A</i> ∪ <i>C</i> together give <i>B</i> = <i>C</i>.',
          },
          {
            f: 'Binomial containment tool',
            note: 'for an integer <i>m</i> ≥ 0, (1 + <i>m</i>)<sup><i>n</i></sup> − <i>mn</i> − 1 is always a non-negative multiple of <i>m</i><sup>2</sup>. Hence 49 ∣ 8<sup><i>n</i></sup> − 7<i>n</i> − 1, 9 ∣ 4<sup><i>n</i></sup> − 3<i>n</i> − 1 and 64 ∣ 9<sup><i>n</i></sup> − 8<i>n</i> − 1.',
          },
          {
            f: 'One-direction containment is not equality.',
            note: 'After proving <i>X</i> ⊆ <i>Y</i>, always ask for a witness in <i>Y</i> − <i>X</i> before writing <i>X</i> = <i>Y</i>.',
          },
          {
            f: 'Difference is <i>A</i> − <i>B</i> = <i>A</i> ∩ <i>B</i>′.',
            note: 'Rewrite first, then use De Morgan and distribute.',
          },
          {
            f: 'Disjoint splits',
            note: '<i>A</i> ∪ <i>B</i> = <i>A</i> ∪ (<i>B</i> − <i>A</i>) and <i>A</i> = (<i>A</i> ∩ <i>B</i>) ∪ (<i>A</i> − <i>B</i>): the three-piece route to <i>n</i>(<i>A</i> ∪ <i>B</i>) = <i>n</i>(<i>A</i>) + <i>n</i>(<i>B</i>) − <i>n</i>(<i>A</i> ∩ <i>B</i>).',
          },
          {
            f: 'Difference De Morgan pair',
            note: '<i>A</i> − (<i>B</i> ∪ <i>C</i>) = (<i>A</i> − <i>B</i>) ∩ (<i>A</i> − <i>C</i>) and <i>A</i> − (<i>B</i> ∩ <i>C</i>) = (<i>A</i> − <i>B</i>) ∪ (<i>A</i> − <i>C</i>): the operation flips.',
          },
          {
            f: 'Double difference gives <i>C</i> back',
            note: '<i>A</i> − (<i>B</i> − <i>C</i>) = (<i>A</i> − <i>B</i>) ∪ (<i>A</i> ∩ <i>C</i>).',
          },
          {
            f: '− is not associative.',
            note: '(<i>A</i> − <i>B</i>) − <i>C</i> = <i>A</i> − (<i>B</i> ∪ <i>C</i>) = (<i>A</i> − <i>C</i>) − <i>B</i>, but <i>A</i> − (<i>B</i> − <i>C</i>) differs from it by <i>A</i> ∩ <i>C</i>. Always bracket. (△ is associative: <i>A</i> △ <i>B</i> △ <i>C</i> = “in an odd number of the three” = <i>R</i><sub>1</sub>, <i>R</i><sub>2</sub>, <i>R</i><sub>3</sub>, <i>R</i><sub>7</sub>.)',
          },
          {
            f: 'Trim before you subtract',
            note: '<i>A</i> − <i>B</i> = <i>A</i> − (<i>A</i> ∩ <i>B</i>) = (<i>A</i> ∪ <i>B</i>) − <i>B</i>.',
          },
        ],
        aids: [],
      },
    ],
  },
];
