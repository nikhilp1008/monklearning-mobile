import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 1, Topics 01 and 02: pp. 26–40 of the Class 11 Mathematics Master
 * Reference (October 2026 edition), word for word: Sets and their
 * Representations (pp. 26–33) and Subsets, Power Set, and Universal Set
 * (pp. 34–40). The chapter's title and contents (p. 25 and the top of p. 26)
 * are not copied. Each topic opens with its "Exam Relevance:" box as a part of
 * its own, then is split at its Sections 1 to 8.
 * Figure 1.1 (caption p. 28, drawn p. 29) sits in "Key definitions and
 * notation" after the standard number sets and their nesting, where the book
 * prints its caption; Figure 1.2 (caption p. 37, drawn p. 38) is shown inside
 * Topic 02's first worked example, the power set of {p, q, r}, which it draws.
 * Both are redrawn in lib/diagrams/mathematics-11-01.ts.
 * Every fraction is stacked (<frac>); a binomial coefficient, printed as n over
 * r in brackets, is written ⁿCᵣ on one line, and the under-brace "n factors"
 * follows its product in brackets.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 01 · pp. 26–33 ─────────────────────────
  {
    n: '01',
    title: 'Sets and their Representations',
    kalam: 'A set is simply the answer to a single yes/no membership question.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: 'This is the gateway to all of higher mathematics. CBSE Boards ask 1-mark roster/set-builder conversions and 1–2 mark empty/finite/infinite classification. In JEE Main, Sets rarely stands alone but the phrasing “<i>S</i> is the set of all values of…” hides inside dozens of algebra and calculus problems; fluency here saves time everywhere. JEE Advanced uses set language as a default dialect; direct questions are rare but assumed knowledge.',
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: 'Imagine the team-sheet a cricket captain hands the umpire before a match. It lists exactly which eleven players are in. There is no debate about whether Bumrah is on the list: either his name is written there or it isn’t. That single property, <b>unambiguous membership</b>, is the whole idea of a set. A set is any collection of objects for which, given any object in the universe, you can answer “is it in, or out?” with a definite yes or no.',
      },
      {
        t: 'p',
        html: 'The objects inside are called <b>elements</b> (or members). The catch is the word <b>well-defined</b>. “The set of students in your class taller than 170 cm” is a genuine set: measure anyone and you get a clean yes/no. But “the set of tall students” is not a set, because “tall” is a matter of opinion. The same trap appears everywhere: “good Bollywood films of 2023” is not a set, but “Bollywood films released in 2023” is. <b>If membership depends on someone’s mood, it is not a set.</b>',
      },
      {
        t: 'p',
        html: 'Two more rules fall straight out of the team-sheet picture. First, <b>repetition is meaningless</b>: writing a player’s name twice doesn’t put two of him on the field. So {1, 2, 2, 3} is just {1, 2, 3}. Second, <b>order is meaningless</b>: reshuffling the batting line-up on paper doesn’t change who is playing. So {<i>a</i>, <i>b</i>, <i>c</i>} = {<i>c</i>, <i>a</i>, <i>b</i>}. A set cares only about which objects belong, never how many times or in what sequence you happen to list them.',
      },
      {
        t: 'p',
        html: 'We write <i>a</i> ∈ <i>A</i> for “<i>a</i> belongs to <i>A</i>” (the symbol ∈ is a stylised Greek epsilon) and <i>b</i> ∉ <i>A</i> for “<i>b</i> does not belong to <i>A</i>.”',
      },
      {
        t: 'p',
        html: 'Now, how do you describe a set to someone else? There are exactly two languages:<br>• <b>Roster (tabular) form</b>: you read out every member by name, inside braces: the squad is {Rohit, Virat, Bumrah}. This is like reading the team-sheet aloud.<br>• <b>Set-builder form</b>: instead of naming members, you state the rule they all satisfy: “the set of all players in the current ODI squad.” In symbols, <i>A</i> = {<i>x</i> ∶ <i>x</i> is in the ODI squad}, read as “the set of all <i>x</i> such that <i>x</i> is in the ODI squad.” The colon means “such that.”',
      },
      {
        t: 'p',
        html: 'Roster is concrete but hopeless for huge or endless collections: you cannot list every natural number. Set-builder is the rule that captures even infinite sets in one line.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> A set is simply the answer to a single yes/no membership question. Roster form lists every “yes.” Set-builder form writes down the question itself.',
      },
      {
        t: 'p',
        html: 'One special character deserves respect: the <b>empty set</b> ∅ (also written { }), the set with no members at all, like the set of students who scored above 100 on a 100-mark paper. Nobody qualifies, so the collection is genuinely empty.',
      },
      {
        t: 'p',
        html: '<b>Edge cases & where students slip (the “fine print”):</b><br>• A collection is a set only if it is <b>well-defined</b>; subjective descriptions (“clever,” “nice,” “large”) disqualify it.<br>• {0} is <b>not</b> the empty set; it contains one element, the number zero. Likewise {∅} is not empty; it contains one element, namely ∅.<br>• Roster form can only suggest an infinite set with dots ({1, 2, 3, …}); it can never truly list one.<br>• Because order and repetition don’t count, “how many elements?” means how many distinct elements.',
      },

      { t: 'part', title: 'Key definitions and notation' },
      {
        t: 'p',
        html: '(For a non-metric topic like this there are no dimensional formulae; what matters is precise notation and the standard number sets.)',
      },
      {
        t: 'table',
        title: null,
        head: ['Term', 'Meaning', 'Notation'],
        rows: [
          ['Set', 'Well-defined collection of distinct objects', 'Capital letters <i>A</i>, <i>B</i>, <i>C</i>, …'],
          ['Element', 'An object belonging to a set', 'Lower-case <i>a</i>, <i>b</i>, <i>x</i>, …'],
          ['Belongs to / does not', 'Membership relation', '<i>a</i> ∈ <i>A</i>, <i>b</i> ∉ <i>A</i>'],
          ['Roster form', 'All elements listed in braces', '<i>A</i> = {2, 4, 6}'],
          ['Set-builder form', 'Defining property stated', '<i>A</i> = {<i>x</i> ∶ <i>P</i>(<i>x</i>)}'],
          ['Empty (null/void) set', 'Set with no element', '∅ or { }'],
          ['Singleton', 'Set with exactly one element', '{<i>a</i>}'],
          ['Cardinal number', 'Count of distinct elements', '<i>n</i>(<i>A</i>)'],
          ['Finite set', '<i>n</i>(<i>A</i>) is a definite whole number', '–'],
          ['Infinite set', 'Not finite', '–'],
          ['Equal sets', 'Identical elements', '<i>A</i> = <i>B</i> ⟺ (<i>x</i> ∈ <i>A</i> ⇔ <i>x</i> ∈ <i>B</i>)'],
          ['Equivalent sets', 'Same cardinality', '<i>n</i>(<i>A</i>) = <i>n</i>(<i>B</i>)'],
        ],
      },
      {
        t: 'p',
        html: '<b>Standard number sets</b> (memorise these: they are the most common universes in set-builder form):<br>ℕ = {1, 2, 3, …}, 𝕎 = {0, 1, 2, …}, ℤ = {…, −2, −1, 0, 1, 2, …}<br>ℚ = {<frac><num><i>p</i></num><den><i>q</i></den></frac> ∶ <i>p</i>, <i>q</i> ∈ ℤ, <i>q</i> ≠ 0}, ℝ = real numbers, 𝕋 = irrational numbers<br>with the nesting<br>ℕ ⊂ 𝕎 ⊂ ℤ ⊂ ℚ ⊂ ℝ.',
      },
      { t: 'fig', id: 'm11-01-fig-1.1' },
      {
        t: 'p',
        html: '<b>Crucial distinction:</b> equal ⇒ equivalent, but equivalent ⇏ equal. {1, 2, 3} and {<i>a</i>, <i>b</i>, <i>c</i>} are equivalent (both size 3) yet not equal.',
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'p',
        html: 'This topic has no formal theorem to derive, so here are the four routine procedures, each with the reasoning behind it.',
      },
      {
        t: 'proc',
        title: 'Procedure A: Set-builder → Roster',
        steps: [
          'Read the <b>universe symbol first</b> (<i>x</i> ∈ ℕ? ℤ? ℝ?). This decides which candidates are even allowed. <b>Why:</b> the same condition gives different sets over different universes; this is the single most common source of error.',
          'Apply the condition and <b>solve or enumerate</b>.',
          'Keep only solutions that lie in the stated universe; list distinct values in braces.',
        ],
      },
      {
        t: 'proc',
        title: 'Procedure B: Roster → Set-builder',
        steps: [
          'Hunt for the <b>pattern</b> linking the listed elements (squares? one-less-than-denominator? primes?).',
          'Express that pattern as an algebraic rule <i>x</i> = <i>f</i>(<i>n</i>) or a property <i>P</i>(<i>x</i>).',
          'Pin down the <b>range of the index</b> so you reproduce exactly those elements: no more, no less. <b>Why:</b> a rule that is too loose generates extra members.',
        ],
      },
      {
        t: 'proc',
        title: 'Procedure C: Classify as empty / finite / infinite',
        steps: [
          'Ask “does any element satisfy the condition?” If none, the set is <b>empty</b>. <b>Why:</b> impossibility (e.g. <i>x</i><sup>2</sup> = −4 over ℝ, or a natural number strictly between 2 and 3) forces ∅.',
          'If elements exist, ask “can I, in principle, finish counting them?” Yes ⇒ <b>finite</b>; no ⇒ <b>infinite</b>.',
        ],
      },
      {
        t: 'proc',
        title: 'Procedure D: Test equality',
        steps: [
          'Reduce both sets to roster form.',
          'Confirm <b>mutual containment</b>: every element of <i>A</i> is in <i>B</i> and every element of <i>B</i> is in <i>A</i>. <b>Why:</b> equality is two-directional; matching one way is not enough.',
          'If counts match but elements differ, they are only equivalent, not equal.',
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: 'Write the set of all two-digit natural numbers whose digits add up to 8 in roster form.',
        steps: [
          '<b>Given:</b> two-digit numbers (so 10 to 99) with digit-sum = 8. We need tens digit <i>t</i> and units digit <i>u</i> with <i>t</i> + <i>u</i> = 8, <i>t</i> ≥ 1.',
          '• <i>t</i> = 1, <i>u</i> = 7 → 17; <i>t</i> = 2, <i>u</i> = 6 → 26; <i>t</i> = 3, <i>u</i> = 5 → 35; <i>t</i> = 4, <i>u</i> = 4 → 44;<br>• <i>t</i> = 5, <i>u</i> = 3 → 53; <i>t</i> = 6, <i>u</i> = 2 → 62; <i>t</i> = 7, <i>u</i> = 1 → 71; <i>t</i> = 8, <i>u</i> = 0 → 80.',
          '(Note 80 qualifies: 8 + 0 = 8. Don’t drop it.)',
        ],
        ans: '{17, 26, 35, 44, 53, 62, 71, 80}',
      },
      {
        t: 'ex',
        tag: 'JEE Main: Speed Trap',
        q: 'Without lengthy computation, identify which of the following are empty sets (more than one may apply):<br>(a) {<i>x</i> ∈ ℝ ∶ <i>x</i><sup>2</sup> + 1 = 0} (b) {<i>x</i> ∶ <i>x</i> is an even prime} (c) {0} (d) {<i>x</i> ∈ ℕ ∶ <i>x</i> < 1}',
        steps: [
          '<b>Mental elimination.</b> Scan for impossibility:<br>• (a) <i>x</i><sup>2</sup> = −1 has <b>no real</b> solution ⇒ empty.<br>• (d) the smallest natural number is 1, so <b>no</b> natural number is less than 1 ⇒ empty.<br>• (b) = {2}, not empty (the trap: students forget 2 is prime). (c) contains 0, not empty (the classic {0} ≠ ∅ trap).',
          '<b>The trap:</b> (a) and (d) are both empty, so both are correct (a multi-answer item). The real lesson is spotting that (c) is a decoy: a singleton dressed up to look empty. <b>Speed move:</b> check the universe in (d) before computing: ℕ starting at 1 instantly kills it.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main',
        q: 'Let <i>A</i> = {<i>x</i> ∈ ℤ ∶ |<i>x</i>| ≤ 2} and <i>B</i> = {<i>x</i> ∈ ℤ ∶ <i>x</i><sup>3</sup> = <i>x</i>}. Find <i>n</i>(<i>A</i>) and <i>n</i>(<i>B</i>), and state whether <i>A</i> = <i>B</i>.',
        steps: [
          'This links absolute-value reasoning with polynomial factoring over a restricted universe.',
          '• <i>A</i>: integers with |<i>x</i>| ≤ 2 ⇒ <i>A</i> = {−2, −1, 0, 1, 2}, so <i>n</i>(<i>A</i>) = 5.<br>• <i>B</i>: <i>x</i><sup>3</sup> = <i>x</i> ⇒ <i>x</i>(<i>x</i> − 1)(<i>x</i> + 1) = 0 ⇒ <i>x</i> ∈ {−1, 0, 1}, all integers, so <i>B</i> = {−1, 0, 1}, <i>n</i>(<i>B</i>) = 3.',
          'Every element of <i>B</i> lies in <i>A</i>, but −2, 2 ∈ <i>A</i> are not in <i>B</i>. Mutual containment fails one way, so',
        ],
        ans: '<i>A</i> ≠ <i>B</i> (in fact <i>B</i> ⊂ <i>A</i>), <i>n</i>(<i>A</i>) = 5, <i>n</i>(<i>B</i>) = 3.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced',
        q: 'Let <i>a</i> be a real parameter and define <i>T</i> = {<i>x</i> ∈ ℕ ∶ <i>x</i><sup>2</sup> − (<i>a</i> + 1)<i>x</i> + <i>a</i> = 0}. Find all values of <i>a</i> for which <i>n</i>(<i>T</i>) = 1.',
        steps: [
          'Factor the quadratic (independent of the domain):<br><i>x</i><sup>2</sup> − (<i>a</i> + 1)<i>x</i> + <i>a</i> = (<i>x</i> − 1)(<i>x</i> − <i>a</i>) = 0 ⇒ <i>x</i> = 1 or <i>x</i> = <i>a</i>.',
          'Since 1 ∈ ℕ always, the root <i>x</i> = 1 is always a member of <i>T</i>. The second root <i>x</i> = <i>a</i> contributes a member only if <i>a</i> ∈ ℕ, and a distinct one only if <i>a</i> ≠ 1. Casework on the <b>natural-number domain</b>:<br>• If <i>a</i> ∈ ℕ and <i>a</i> ≠ 1: roots 1 and <i>a</i> are two distinct naturals ⇒ <i>T</i> = {1, <i>a</i>}, <i>n</i>(<i>T</i>) = 2.<br>• If <i>a</i> = 1: both roots coincide at 1 ⇒ <i>T</i> = {1}, <i>n</i>(<i>T</i>) = 1. ✓<br>• If <i>a</i> ∉ ℕ (e.g. <i>a</i> = 0, −3, <frac><num>5</num><den>2</den></frac>, √2): the root <i>a</i> is excluded, only 1 survives ⇒ <i>T</i> = {1}, <i>n</i>(<i>T</i>) = 1. ✓',
          'The whole problem turns on remembering the domain ℕ filters the roots; pure algebra would wrongly report two members for every <i>a</i> ≠ 1.',
        ],
        ans: '<i>n</i>(<i>T</i>) = 1 ⟺ <i>a</i> = 1 or <i>a</i> ∉ ℕ (equivalently, <i>a</i> is not a natural number greater than 1).',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Write the set of distinct letters of the word <b>“MATHEMATICS”</b> in roster form.',
            a: '{M, A, T, H, E, I, C, S} (8 distinct letters, repetition discarded)',
          },
          {
            q: '[JEE Main] Write {<i>x</i> ∈ ℤ ∶ <i>x</i><sup>2</sup> < 10} in roster form.',
            a: '{−3, −2, −1, 0, 1, 2, 3}',
          },
          {
            q: '[JEE Main] Is {<i>x</i> ∈ ℕ ∶ <i>x</i><sup>2</sup> − 3 = 0} the empty set? Justify in one line.',
            a: 'Yes; <i>x</i><sup>2</sup> = 3 ⇒ <i>x</i> = ±√3 ∉ ℕ, so no element exists.',
          },
          {
            q: '[JEE Advanced] Find <i>n</i>({<i>x</i> ∈ ℤ ∶ (<i>x</i><sup>2</sup> − 1)(<i>x</i><sup>2</sup> − 4) = 0}).',
            a: '4 (roots <i>x</i> = ±1, ±2)',
          },
          {
            q: '[JEE Advanced] Express {3, 8, 15, 24, 35} in set-builder form.',
            a: '{<i>x</i> ∶ <i>x</i> = <i>n</i><sup>2</sup> − 1, <i>n</i> ∈ ℕ, 2 ≤ <i>n</i> ≤ 6}',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Which of the following is a well-defined set?',
        opts: [
          {
            label: 'The collection of intelligent students in a school',
            nudge: '<b>(A)</b> “intelligent” is subjective: different people classify differently, so membership isn’t well-defined.',
          },
          {
            label: 'The collection of difficult chapters in Class 11 Physics',
            nudge: '<b>(B)</b> “difficult” is subjective: different people classify differently, so membership isn’t well-defined.',
          },
          { label: 'The collection of prime numbers less than 20', nudge: null },
          {
            label: 'The collection of beautiful monuments in India',
            nudge: '<b>(D)</b> “beautiful” is subjective: different people classify differently, so membership isn’t well-defined.',
          },
        ],
        correct: 2,
        solution: 'Primality is an objective test, so membership is decidable. Students who pick <b>(A)</b>, <b>(B)</b> or <b>(D)</b> are confusing a collection with a set; only the latter requires unambiguous membership.',
      },
      {
        t: 'mcq',
        q: 'Which statement is <b>correct</b>?',
        opts: [
          { label: '∅ = {0}', nudge: '<b>(A)</b> treats {0} as empty, but it holds the element 0.' },
          { label: '∅ = {∅}', nudge: '<b>(B)</b> treats {∅} as empty, but it holds one element, namely the empty set itself.' },
          { label: '{0} is a singleton set', nudge: null },
          { label: '∅ has one element', nudge: '<b>(D)</b> misreads “empty” as “has one element”; ∅ has zero elements.' },
        ],
        correct: 2,
        solution: '{0} contains exactly one element (the number 0), hence a singleton. All three are the same conceptual slip: confusing a box that contains nothing with a box that contains an empty box or the number zero.',
      },
      {
        t: 'mcq',
        q: 'Let <i>A</i> = {<i>x</i> ∈ ℕ ∶ <i>x</i> is a factor of 6} and <i>B</i> = {<i>p</i>, <i>q</i>, <i>r</i>, <i>s</i>}. Which is true?',
        opts: [
          { label: '<i>A</i> = <i>B</i>', nudge: '<b>(A)</b> ignores that equal sets need identical elements, not just identical counts.' },
          { label: '<i>A</i> and <i>B</i> are equivalent but not equal', nudge: null },
          { label: '<i>A</i> and <i>B</i> are neither equal nor equivalent', nudge: '<b>(C)</b> misses that the cardinalities match.' },
          { label: '<i>n</i>(<i>A</i>) = 3', nudge: '<b>(D)</b> mis-counts the factors of 6 (forgetting 6 itself or 1).' },
        ],
        correct: 1,
        solution: 'Factors of 6 are 1, 2, 3, 6, so <i>A</i> = {1, 2, 3, 6}, <i>n</i>(<i>A</i>) = 4 = <i>n</i>(<i>B</i>). Same size but different elements ⇒ equivalent, not equal.',
      },
      {
        t: 'mcq',
        q: 'The set {<i>x</i> ∈ ℝ ∶ <i>x</i><sup>2</sup> − 2<i>x</i> + 5 = 0} is:',
        opts: [
          { label: 'a singleton', nudge: '<b>(A)</b> imagines a repeated real root (that needs discriminant = 0).' },
          {
            label: 'a two-element set',
            nudge: '<b>(B)</b> comes from blindly saying “a quadratic has two roots” while ignoring the universe ℝ.',
          },
          { label: 'the empty set', nudge: null },
          { label: 'an infinite set', nudge: '<b>(D)</b> confuses “no solution” with “all reals.”' },
        ],
        correct: 2,
        solution: 'Discriminant = (−2)<sup>2</sup> − 4(1)(5) = 4 − 20 = −16 < 0, so there is <b>no real</b> root; over ℝ the set is empty. Always read the universe before counting roots.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Treating {0} or {∅} as empty.</b> Both are singletons. Empty means zero elements: ∅ or { } only.',
          '<b>Counting repeated elements.</b> In “MATHEMATICS,” many write 11 letters; only 8 are distinct. Sets discard duplicates.',
          '<b>Ignoring the universe symbol.</b> {<i>x</i> ∶ <i>x</i><sup>2</sup> = 2} is empty over ℕ, a doubleton over ℝ. The domain (ℕ, ℤ, ℚ, ℝ) is part of the question.',
          '<b>Confusing equal with equivalent.</b> Same number of elements is not the same as same elements.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> Before solving any set-builder problem, <b>circle the universe symbol first</b> and ask “is this even possible here?” Two seconds of domain-checking catches empty sets and impossible-root traps instantly: the exact places examiners plant marks.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Set', note: 'a well-defined collection of distinct objects; order and repetition don’t matter.' },
          { f: 'Membership', note: '<i>a</i> ∈ <i>A</i> (in), <i>b</i> ∉ <i>A</i> (out).' },
          { f: 'Two forms', note: 'Roster {2, 4, 6} vs Set-builder {<i>x</i> ∶ <i>P</i>(<i>x</i>)} (“<i>x</i> such that…”).' },
          { f: 'Empty set', note: '∅ = { }: zero elements. Remember {0} ≠ ∅ and {∅} ≠ ∅.' },
          { f: 'Finite vs infinite', note: 'decided by whether <i>n</i>(<i>A</i>) is a definite whole number.' },
          {
            f: 'Equal vs equivalent',
            note: '<i>A</i> = <i>B</i> needs identical elements; equivalent only needs <i>n</i>(<i>A</i>) = <i>n</i>(<i>B</i>).',
          },
          { f: 'Number sets', note: 'ℕ ⊂ 𝕎 ⊂ ℤ ⊂ ℚ ⊂ ℝ; irrationals = 𝕋.' },
        ],
        aids: [
          '“Well-defined or it’s not a set”: kills subjective collections.',
          '“Domain first, solve second”: read ℕ/ℤ/ℝ before computing.',
          '“Equal = same faces; equivalent = same count.”',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 02 · pp. 34–40 ─────────────────────────
  {
    n: '02',
    title: 'Subsets, Power Set, and Universal Set',
    kalam: 'A set A is a subset of a set B when every element of A is also an element of B.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: 'A perennial source of quick marks. CBSE Boards ask 1–2 mark questions on listing subsets, the power set, or converting between set-builder and interval notation. JEE Main loves the one-line trap “if <i>n</i>[<i>P</i>(<i>A</i>)] = 2<sup><i>k</i></sup>, find <i>n</i>(<i>A</i>)” and subset-counting (2<sup><i>n</i></sup>, 2<sup><i>n</i></sup> − 1). The interval-as-subset idea is the silent backbone of every domain/range problem in calculus, so JEE Advanced assumes total fluency.',
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: 'Picture the 15-member squad India announces for a tournament. From that squad the captain picks a playing eleven. Every player in the eleven is also in the squad; that is the entire idea of a <b>subset</b>. A set <i>A</i> is a subset of a set <i>B</i> when every element of <i>A</i> is also an element of <i>B</i>. We write <i>A</i> ⊆ <i>B</i>. Crucially, <i>B</i> is allowed to have extras (the four players warming the bench); all we demand is that nobody in <i>A</i> is missing from <i>B</i>.',
      },
      {
        t: 'p',
        html: 'Two boundary cases follow immediately, and both trip students up:<br>• <b>Every set is a subset of itself</b>, <i>A</i> ⊆ <i>A</i>. The full 15-member squad is, trivially, a valid “selection” from the 15-member squad.<br>• <b>The empty set is a subset of every set</b>, ∅ ⊆ <i>B</i>. This feels strange: how can “nothing” be a sub-selection? Think of it as a guest list: the empty guest list breaks no rule of any party, because to fail you’d need to point at someone on the empty list who wasn’t invited, and there’s nobody to point at. With no possible counterexample, the statement holds <b>vacuously</b>. The empty selection is always legal.',
      },
      {
        t: 'p',
        html: 'When <i>A</i> ⊆ <i>B</i> but <i>A</i> is not the whole of <i>B</i> (there’s at least one extra in <i>B</i>), we call <i>A</i> a <b>proper subset</b>, written <i>A</i> ⊊ <i>B</i>, and <i>B</i> a <b>superset</b> of <i>A</i> (<i>B</i> ⊇ <i>A</i>). The playing eleven is a proper subset of the squad.',
      },
      {
        t: 'p',
        html: '<b>The single most important hurdle in this whole chapter</b> is the difference between ∈ and ⊆. The symbol ∈ relates an element to a set; ⊆ relates a set to a set. The captain Rohit is an element of the squad (Rohit ∈ Squad), but the opening pair {Rohit, Gill} is a subset of the squad. Writing Rohit ⊆ Squad or {Rohit} ∈ Squad is a category error. Hold this distinction: a player is in the team; a partnership is part of the team.',
      },
      {
        t: 'p',
        html: 'Now widen the lens. Every discussion happens inside some agreed playing field: the set of all objects currently under consideration. That field is the <b>universal set</b> <i>U</i>. In an election, <i>U</i> is all registered voters; in a number-theory chapter, <i>U</i> might be ℤ or ℝ. Every set in the discussion is a subset of <i>U</i>. Choosing the right <i>U</i> is like agreeing on the syllabus before setting a paper: it fixes what’s fair game.',
      },
      {
        t: 'p',
        html: 'Finally, the <b>power set</b>. Suppose you have the small set <i>A</i> = {<i>a</i>, <i>b</i>}. List all its possible sub-selections: ∅, {<i>a</i>}, {<i>b</i>}, {<i>a</i>, <i>b</i>} (four of them). The set whose members are all these subsets is the <b>power set</b> <i>P</i>(<i>A</i>). It is the complete menu of every sub-selection you could make.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> To build a subset of <i>A</i>, walk down the list of elements and, for each one, flip a coin: in or out. With <i>n</i> elements you make <i>n</i> independent two-way choices, giving 2<sup><i>n</i></sup> subsets in total. That single mental image is the engine behind almost every counting question in this topic.',
      },
      {
        t: 'p',
        html: 'A special continuous case of “subset of ℝ” is an <b>interval</b>: an unbroken stretch of the number line, like {<i>x</i> ∈ ℝ ∶ 2 ≤ <i>x</i> < 5}, written [2, 5).',
      },
      {
        t: 'p',
        html: '<b>Edge cases & where students slip (the “fine print”):</b><br>• ∅ and <i>A</i> itself are always subsets of <i>A</i> (the two “improper” extremes); forgetting ∅ when listing subsets is the classic error.<br>• <i>P</i>(∅) = {∅} has <b>one</b> element, not zero; its only subset is ∅.<br>• ∈ vs ⊆: {1} ⊆ {1, 2} (subset) but {1} ∈ <i>P</i>({1, 2}) (element of the power set).<br>• An interval like (2, 5) is an <b>infinite</b> set, even though it “looks small.”',
      },

      { t: 'part', title: 'Key definitions, notation and formulas' },
      {
        t: 'table',
        title: null,
        head: ['Concept', 'Definition / Statement', 'Notation'],
        rows: [
          ['Subset', 'every element of <i>A</i> lies in <i>B</i>', '<i>A</i> ⊆ <i>B</i> ⟺ (<i>x</i> ∈ <i>A</i> ⇒ <i>x</i> ∈ <i>B</i>)'],
          ['Not a subset', 'some element of <i>A</i> is outside <i>B</i>', '<i>A</i> ⊈ <i>B</i>'],
          ['Proper subset', '<i>A</i> ⊆ <i>B</i> and <i>A</i> ≠ <i>B</i>', '<i>A</i> ⊊ <i>B</i> (many books write <i>A</i> ⊂ <i>B</i>; NCERT uses ⊂ for any subset, so <i>A</i> ⊂ <i>A</i> there)'],
          ['Superset', '<i>B</i> contains <i>A</i>', '<i>B</i> ⊇ <i>A</i>'],
          ['Equality via subsets', 'mutual containment', '<i>A</i> = <i>B</i> ⟺ <i>A</i> ⊆ <i>B</i> and <i>B</i> ⊆ <i>A</i>'],
          ['Empty-set rule', '∅ is a subset of every set', '∅ ⊆ <i>A</i>'],
          ['Self rule', 'every set is a subset of itself', '<i>A</i> ⊆ <i>A</i>'],
          ['Power set', 'the set of all subsets of <i>A</i>', '<i>P</i>(<i>A</i>) = {<i>X</i> ∶ <i>X</i> ⊆ <i>A</i>}'],
          ['Universal set', 'all objects under discussion', '<i>U</i>'],
        ],
      },
      {
        t: 'p',
        html: '<b>Intervals</b> (for <i>a</i>, <i>b</i> ∈ ℝ, <i>a</i> < <i>b</i>): open (<i>a</i>, <i>b</i>) = {<i>x</i> ∶ <i>a</i> < <i>x</i> < <i>b</i>}; closed [<i>a</i>, <i>b</i>] = {<i>x</i> ∶ <i>a</i> ≤ <i>x</i> ≤ <i>b</i>}; half-open [<i>a</i>, <i>b</i>) and (<i>a</i>, <i>b</i>]. The <b>length</b> of any of these is <i>b</i> − <i>a</i>.',
      },
      {
        t: 'formula',
        kicker: 'Core counting formulas',
        main: 'Number of subsets = <i>n</i>[<i>P</i>(<i>A</i>)] = 2<sup><i>n</i></sup><br>Number of proper subsets = 2<sup><i>n</i></sup> − 1<br>Number of non-empty subsets = 2<sup><i>n</i></sup> − 1<br>Number of non-empty proper subsets = 2<sup><i>n</i></sup> − 2 (<i>n</i> ≥ 1)<br>Number of subsets with exactly <i>r</i> elements = <sup><i>n</i></sup>C<sub><i>r</i></sub><br><i>n</i>[<i>P</i>(<i>P</i>(<i>A</i>))] = 2<sup>2<sup><i>n</i></sup></sup>',
        legend: [
          '<i>n</i> = number of elements of <i>A</i>, <i>n</i>(<i>A</i>)',
          '<i>r</i> = number of elements in the chosen subset',
          '<i>P</i>(<i>A</i>) = power set of <i>A</i>',
        ],
        note: '(for <i>n</i>(<i>A</i>) = <i>n</i>)',
      },

      { t: 'part', title: 'Derivation and key procedures' },
      { t: 'p', html: '<b>Derivation: why a set of <i>n</i> elements has exactly 2<sup><i>n</i></sup> subsets.</b>' },
      {
        t: 'p',
        html: '<b>Assumption:</b> let <i>A</i> = {<i>a</i><sub>1</sub>, <i>a</i><sub>2</sub>, …, <i>a</i><sub><i>n</i></sub>} be a finite set with <i>n</i> distinct elements.',
      },
      {
        t: 'p',
        html: 'To specify a subset <i>S</i> ⊆ <i>A</i>, we must decide, for <b>each</b> element <i>a</i><sub><i>i</i></sub>, exactly one of two things: either <i>a</i><sub><i>i</i></sub> ∈ <i>S</i> or <i>a</i><sub><i>i</i></sub> ∉ <i>S</i>. These decisions are <b>independent</b>: choosing whether <i>a</i><sub>1</sub> is in tells us nothing about <i>a</i><sub>2</sub>. So we have 2 choices for <i>a</i><sub>1</sub>, times 2 for <i>a</i><sub>2</sub>, …, times 2 for <i>a</i><sub><i>n</i></sub>:<br>2 × 2 × ⋯ × 2 (<i>n</i> factors) = 2<sup><i>n</i></sup>.',
      },
      {
        t: 'p',
        html: 'Each distinct sequence of in/out decisions yields a distinct subset, and every subset arises from exactly one such sequence: a perfect one-to-one correspondence between subsets and length-<i>n</i> binary strings. Hence <i>n</i>[<i>P</i>(<i>A</i>)] = 2<sup><i>n</i></sup>. <b>Why this is airtight:</b> the “all-out” string gives ∅ and the “all-in” string gives <i>A</i> itself, so the count already includes both improper subsets, which is why the proper-subset count is one fewer, 2<sup><i>n</i></sup> − 1.',
      },
      {
        t: 'p',
        html: '<b>Cross-check via the binomial theorem:</b> the number of subsets is the number with 0 elements plus those with 1, …, plus those with <i>n</i>:<br><sup><i>n</i></sup>C<sub>0</sub> + <sup><i>n</i></sup>C<sub>1</sub> + ⋯ + <sup><i>n</i></sup>C<sub><i>n</i></sub> = (1 + 1)<sup><i>n</i></sup> = 2<sup><i>n</i></sup>. ✓',
      },
      {
        t: 'p',
        html: '<b>Procedure A: Construct a power set without missing any subset.</b> List subsets by size, smallest first: start with ∅, then all singletons, then all pairs, …, ending with <i>A</i> itself. Counting as you go, you should reach exactly 2<sup><i>n</i></sup>. <b>Why:</b> organising by size prevents the two commonest omissions: forgetting ∅ and forgetting the full set <i>A</i>.',
      },
      {
        t: 'p',
        html: '<b>Procedure B: Choose a valid universal set.</b> <i>U</i> must contain every element appearing in all the sets under discussion (their union, at minimum). <b>Why:</b> if even one element sits outside <i>U</i>, then some set is not a subset of <i>U</i>, breaking the defining property of a universal set.',
      },
      {
        t: 'p',
        html: '<b>Procedure C: Convert set-builder ↔ interval.</b> Read the inequality type: strict (<) → round bracket (open, endpoint excluded); non-strict (≤) → square bracket (closed, endpoint included). <b>Why:</b> the bracket shape is the inequality; a square bracket is a promise that the endpoint belongs.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: 'Write the power set of <i>A</i> = {<i>p</i>, <i>q</i>, <i>r</i>} and state <i>n</i>[<i>P</i>(<i>A</i>)].',
        fig: 'm11-01-fig-1.2',
        steps: [
          'List by size:<br>• size 0: ∅<br>• size 1: {<i>p</i>}, {<i>q</i>}, {<i>r</i>}<br>• size 2: {<i>p</i>, <i>q</i>}, {<i>p</i>, <i>r</i>}, {<i>q</i>, <i>r</i>}<br>• size 3: {<i>p</i>, <i>q</i>, <i>r</i>}',
        ],
        ans: '<i>P</i>(<i>A</i>) = {∅, {<i>p</i>}, {<i>q</i>}, {<i>r</i>}, {<i>p</i>, <i>q</i>}, {<i>p</i>, <i>r</i>}, {<i>q</i>, <i>r</i>}, {<i>p</i>, <i>q</i>, <i>r</i>}}<br><i>n</i>[<i>P</i>(<i>A</i>)] = 2<sup>3</sup> = 8.',
      },
      {
        t: 'ex',
        tag: 'JEE Main: Speed Trap',
        q: 'Given <i>n</i>[<i>P</i>(<i>A</i>)] = 256, find (i) <i>n</i>(<i>A</i>) and (ii) the number of proper subsets of <i>A</i>.',
        steps: [
          '<b>Speed move:</b> recognise the power of two. 256 = 2<sup>8</sup>.',
          '• Since <i>n</i>[<i>P</i>(<i>A</i>)] = 2<sup><i>n</i>(<i>A</i>)</sup> = 2<sup>8</sup>, we get <i>n</i>(<i>A</i>) = 8.<br>• Proper subsets = 2<sup>8</sup> − 1 = 255.',
          '<b>The traps:</b> (a) Writing <i>n</i>(<i>A</i>) = 256, but 256 is the number of subsets, not the number of elements. (b) Writing 254 for proper subsets by wrongly subtracting 2; only the set itself is excluded from “proper,” so subtract 1.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main',
        q: 'Let <i>A</i> = {<i>x</i> ∈ ℤ ∶ <i>x</i><sup>2</sup> − <i>x</i> − 6 ≤ 0}. Find <i>n</i>[<i>P</i>(<i>A</i>)].',
        steps: [
          'This links a quadratic inequality, an integer domain, and the power-set count.',
          'Factor: <i>x</i><sup>2</sup> − <i>x</i> − 6 = (<i>x</i> − 3)(<i>x</i> + 2) ≤ 0 ⇒ −2 ≤ <i>x</i> ≤ 3. Over ℤ: <i>A</i> = {−2, −1, 0, 1, 2, 3}, so <i>n</i>(<i>A</i>) = 6.',
          '(The integer domain is decisive: over ℝ the solution set would be the interval [−2, 3], an infinite set with no finite power-set count.)',
        ],
        ans: '<i>n</i>[<i>P</i>(<i>A</i>)] = 2<sup>6</sup> = 64.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced',
        q: 'Let <i>A</i> = {1, 2, 3, 4, 5, 6, 7}. (a) How many subsets of <i>A</i> (∅ included) contain only odd numbers? (b) How many subsets of <i>A</i> contain at least one even number?',
        steps: [
          'Split <i>A</i> into odds <i>O</i> = {1, 3, 5, 7} (<i>n</i> = 4) and evens <i>E</i> = {2, 4, 6} (<i>n</i> = 3).',
          '<b>(a)</b> A subset made of only odd numbers is precisely a subset of <i>O</i>. By the in/out argument, there are<br>2<sup>4</sup> = 16 such subsets (this count includes ∅).',
          '<b>(b)</b> Use the <b>complement principle</b>. “At least one even” = (all subsets) − (subsets with no even number). Subsets with no even number are exactly the subsets of <i>O</i>, of which there are 2<sup>4</sup> = 16. Total subsets of <i>A</i> are 2<sup>7</sup> = 128. Hence',
          'The elegance is in part (b): rather than summing “exactly one even, exactly two evens, …” we count the easy opposite and subtract: the standard Advanced reflex.',
        ],
        ans: '128 − 16 = 112.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Write all subsets of {5, 7}, and state how many there are.',
            a: '∅, {5}, {7}, {5, 7} (four subsets).',
          },
          {
            q: '[JEE Main] If a set has 63 proper subsets, how many elements does it have?',
            a: '6 (since 2<sup><i>n</i></sup> − 1 = 63 ⇒ 2<sup><i>n</i></sup> = 64 ⇒ <i>n</i> = 6).',
          },
          {
            q: '[JEE Main] Write {<i>x</i> ∈ ℝ ∶ −3 ≤ <i>x</i> < 4} in interval form and state its length.',
            a: '[−3, 4); length = 4 − (−3) = 7.',
          },
          {
            q: '[JEE Advanced] Let <i>A</i> = {1, 2, 3, 4, 5}. How many subsets of <i>A</i> contain the element 1 but <b>not</b> the element 2?',
            a: '8 (fix 1 in and 2 out; the remaining {3, 4, 5} are free: 2<sup>3</sup> = 8).',
          },
          {
            q: '[JEE Advanced] If <i>n</i>[<i>P</i>(<i>A</i>)] − <i>n</i>[<i>P</i>(<i>B</i>)] = 56 and <i>B</i> ⊂ <i>A</i>, find <i>n</i>(<i>A</i>) and <i>n</i>(<i>B</i>).',
            a: '<i>n</i>(<i>A</i>) = 6, <i>n</i>(<i>B</i>) = 3 (since 2<sup><i>n</i>(<i>A</i>)</sup> − 2<sup><i>n</i>(<i>B</i>)</sup> = 56 = 64 − 8).',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Which statement is <b>correct</b> for the set <i>A</i> = {1, 2}?',
        opts: [
          { label: '1 ⊆ <i>A</i>', nudge: '<b>(A)</b> misuses ⊆ on the element 1: an element relates by ∈, not ⊆.' },
          {
            label: '{1} ∈ <i>A</i>',
            nudge: '<b>(B)</b> claims the set {1} is an element of <i>A</i>, but <i>A</i>’s elements are the numbers 1 and 2, not the set {1} (that would belong to <i>P</i>(<i>A</i>)).',
          },
          { label: '{1} ⊆ <i>A</i>', nudge: null },
          {
            label: '∅ ∈ <i>A</i>',
            nudge: '<b>(D)</b> confuses “∅ is a subset of <i>A</i>” (true) with “∅ is an element of <i>A</i>” (false).',
          },
        ],
        correct: 2,
        solution: '{1} is a set all of whose elements (1) lie in <i>A</i>, so {1} ⊆ <i>A</i>. All three are the ∈/⊆ category error in disguise.',
      },
      {
        t: 'mcq',
        q: 'How many elements does <i>P</i>(∅) have?',
        opts: [
          {
            label: '0',
            nudge: '<b>(A)</b> wrongly reasons “no elements ⇒ no subsets,” forgetting that ∅ is a subset of every set, including itself.',
          },
          { label: '1', nudge: null },
          { label: '2', nudge: '<b>(C)</b> confuses <i>P</i>(∅) with <i>P</i>({∅}).' },
          {
            label: 'undefined',
            nudge: '<b>(D)</b> imagines the power set is undefined for the empty set; it is perfectly well-defined.',
          },
        ],
        correct: 1,
        solution: '∅ has 0 elements, so <i>n</i>[<i>P</i>(∅)] = 2<sup>0</sup> = 1; its single member is ∅ itself, i.e. <i>P</i>(∅) = {∅}.',
      },
      {
        t: 'mcq',
        q: 'A set <i>A</i> has <i>n</i> elements (<i>n</i> ≥ 1). The number of subsets of <i>A</i> having an <b>odd</b> number of elements is:',
        opts: [
          { label: '2<sup><i>n</i>−1</sup>', nudge: null },
          { label: '2<sup><i>n</i></sup> − 1', nudge: '<b>(B)</b> is the count of proper subsets, an unrelated quantity.' },
          {
            label: '<frac><num><i>n</i></num><den>2</den></frac>',
            nudge: '<b>(C)</b> comes from guessing a formula without the even/odd symmetry argument; it is not even an integer in general.',
          },
          {
            label: '<frac><num>2<sup><i>n</i></sup></num><den><i>n</i></den></frac>',
            nudge: '<b>(D)</b> comes from guessing a formula without the even/odd symmetry argument; it is not even an integer in general.',
          },
        ],
        correct: 0,
        solution: 'Among all 2<sup><i>n</i></sup> subsets, exactly half have an even size and half have an odd size (provable from ∑<sub><i>r</i></sub>(−1)<sup><i>r</i></sup> <sup><i>n</i></sup>C<sub><i>r</i></sub> = 0), giving 2<sup><i>n</i>−1</sup>.',
      },
      {
        t: 'mcq',
        q: 'If <i>A</i> = {<i>x</i> ∶ <i>x</i> ∈ ℝ, 1 < <i>x</i> ≤ 6}, then <i>A</i> in interval form is:',
        opts: [
          { label: '[1, 6]', nudge: '<b>(A)</b> wrongly includes 1.' },
          { label: '(1, 6)', nudge: '<b>(B)</b> wrongly excludes 6.' },
          { label: '(1, 6]', nudge: null },
          { label: '[1, 6)', nudge: '<b>(D)</b> reverses both.' },
        ],
        correct: 2,
        solution: 'Strict < at the left excludes 1 (round bracket); ≤ at the right includes 6 (square bracket). <b>(A)</b> and <b>(B)</b> each flip one bracket; <b>(D)</b> flips both. The fix is to map each inequality symbol to its bracket before writing the answer.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Confusing ∈ with ⊆.</b> Elements join a set with ∈; sub-collections relate with ⊆. 1 ∈ <i>A</i>, but {1} ⊆ <i>A</i> and {1} ∈ <i>P</i>(<i>A</i>).',
          '<b>Forgetting ∅ (and <i>A</i> itself) when listing subsets.</b> They are always there; organise by size so you can’t miss them.',
          '<b>Off-by-one in proper subsets.</b> Proper subsets = 2<sup><i>n</i></sup> − 1 (exclude only <i>A</i> itself), not 2<sup><i>n</i></sup> − 2.',
          '<b>Reading <i>n</i>[<i>P</i>(<i>A</i>)] as <i>n</i>(<i>A</i>).</b> If <i>n</i>[<i>P</i>(<i>A</i>)] = 1024 = 2<sup>10</sup>, then <i>n</i>(<i>A</i>) = 10, never 1024.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> Memorise the small powers of two: 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024. Half of all power-set MCQs reduce to “spot which power of two this is” (the book’s estimate from past papers, not official figures), and instant recognition turns a 60-second problem into a 5-second one.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Subset',
            note: '<i>A</i> ⊆ <i>B</i> ⟺ every element of <i>A</i> is in <i>B</i>. <b>Proper:</b> <i>A</i> ⊊ <i>B</i> means also <i>A</i> ≠ <i>B</i>.',
          },
          { f: 'Always true', note: '∅ ⊆ <i>A</i> and <i>A</i> ⊆ <i>A</i>.' },
          { f: '∈ vs ⊆', note: 'element-to-set vs set-to-set: never mix them.' },
          { f: 'Power set', note: '<i>P</i>(<i>A</i>) = {<i>X</i> ∶ <i>X</i> ⊆ <i>A</i>}; <i>n</i>[<i>P</i>(<i>A</i>)] = 2<sup><i>n</i></sup>.' },
          {
            f: 'Subset counts',
            note: 'subsets 2<sup><i>n</i></sup>; proper 2<sup><i>n</i></sup> − 1; with exactly <i>r</i> elements <sup><i>n</i></sup>C<sub><i>r</i></sub>; <i>P</i>(∅) = {∅} (one element).',
          },
          { f: 'Intervals', note: '< → round bracket (open), ≤ → square bracket (closed); length = <i>b</i> − <i>a</i>.' },
        ],
        aids: [
          '“In with ∈, part with ⊆.”',
          '“Coin per element: 2<sup><i>n</i></sup> subsets.”',
          '“Proper means everything but yourself: 2<sup><i>n</i></sup> − 1.”',
        ],
      },
    ],
  },
];
