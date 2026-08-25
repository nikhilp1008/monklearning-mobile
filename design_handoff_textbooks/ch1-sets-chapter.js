// Chapter 1 · Sets, complete chapter content, restructured from the
// Drona Class 11 Mathematics Master Reference into the MonkLearning block system.
// Block types: hook p think def defgrid formula fine proc deriv diagram ex practice mcq mistakes protip snapshot
window.CH1SETS = {
  chapter: "01", title: "Sets", subject: "Mathematics", klass: "Class 11",
  kalam: "the language underneath",
  topics: [

  // ─────────────────────────────────────────────── TOPIC 01
  { n: "01", title: "Sets and their Representations", chip: "01 REPRESENT",
    kalam: "in, or out, that's the whole idea",
    blocks: [
    { t: "hook", html: "This is the gateway to all of higher mathematics. CBSE Boards ask 1-mark roster/set-builder conversions and 1–2 mark empty/finite/infinite classification. In JEE Main, Sets rarely stands alone but the phrasing <b>“S is the set of all values of…”</b> hides inside dozens of algebra and calculus problems, fluency here saves time everywhere. JEE Advanced uses set language as a default dialect.", kalam: "fluency here saves time everywhere." },
    { t: "p", html: "Imagine the team-sheet a cricket captain hands the umpire before a match. It lists exactly which eleven players are in. There is no debate about whether Bumrah is on the list, either his name is written there or it isn’t. That single property, <b>unambiguous membership</b>, is the whole idea of a set. A set is any collection of objects for which, given any object in the universe, you can answer “is it in, or out?” with a definite yes or no." },
    { t: "p", html: "The objects inside are called <b>elements</b>. The catch is the word <b>well-defined</b>. “The set of students in your class taller than 170 cm” is a genuine set, measure anyone and you get a clean yes/no. But “the set of tall students” is not a set, because “tall” is a matter of opinion. If membership depends on someone’s mood, it is not a set." },
    { t: "p", html: "Two more rules fall straight out of the team-sheet picture. <b>Repetition is meaningless</b>, writing a player’s name twice doesn’t put two of him on the field, so {1, 2, 2, 3} is just {1, 2, 3}. And <b>order is meaningless</b>: {<i>a</i>, <i>b</i>, <i>c</i>} = {<i>c</i>, <i>a</i>, <i>b</i>}. A set cares only about which objects belong. We write <i>a</i> ∈ <i>A</i> for “<i>a</i> belongs to <i>A</i>” and <i>b</i> ∉ <i>A</i> for “<i>b</i> does not.”" },
    { t: "def", term: "Roster (tabular) form", html: "You read out every member by name, inside braces: the squad is {Rohit, Virat, Bumrah}. Like reading the team-sheet aloud. Concrete, but hopeless for endless collections, you cannot list every natural number." },
    { t: "def", term: "Set-builder form", html: "You state the rule the members satisfy: <i>A</i> = {<i>x</i> : <i>x</i> is in the ODI squad}, read “the set of all <i>x</i> such that…”. The colon means <b>such that</b>. One line captures even an infinite set." },
    { t: "think", html: "a set is simply the answer to a single yes/no membership question. roster form lists every “yes.” set-builder form writes down the question itself." },
    { t: "def", term: "The empty set ∅", html: "Also written { }, the set with no members at all, like the set of students who scored above 100 on a 100-mark paper. Nobody qualifies, so the collection is genuinely empty. Careful: <b>{0} ≠ ∅</b> and <b>{∅} ≠ ∅</b>, each of those contains one element." },
    { t: "defgrid", title: "Notation to memorise", rows: [
      { k: "Membership", v: "<i>a</i> ∈ <i>A</i> (in) · <i>b</i> ∉ <i>A</i> (out)" },
      { k: "Singleton", v: "{<i>a</i>}, exactly one element" },
      { k: "Cardinal number", v: "<i>n</i>(<i>A</i>), count of distinct elements" },
      { k: "Finite / infinite", v: "<i>n</i>(<i>A</i>) is a definite whole number, or not" },
      { k: "Equal sets", v: "<i>A</i> = <i>B</i> ⟺ identical elements" },
      { k: "Equivalent sets", v: "<i>n</i>(<i>A</i>) = <i>n</i>(<i>B</i>), same count only" } ] },
    { t: "p", html: "<b>Crucial distinction:</b> equal ⇒ equivalent, but equivalent ⇏ equal. {1, 2, 3} and {<i>a</i>, <i>b</i>, <i>c</i>} are equivalent (both size 3) yet not equal, same count, different faces." },
    { t: "formula", kicker: "THE STANDARD NUMBER SETS", tag: "your universes", main: "ℕ ⊂ 𝕎 ⊂ ℤ ⊂ ℚ ⊂ ℝ", legend: [
      "ℕ = {1, 2, 3, …} naturals · 𝕎 = {0, 1, 2, …} wholes",
      "ℤ = integers · ℚ = fractions p/q, q ≠ 0 · ℝ = reals · 𝕋 = irrationals" ],
      note: "The same condition gives different sets over different universes, read the universe symbol first." },
    { t: "diagram", kind: "numsys", kicker: "DIAGRAM · TAP A NUMBER SYSTEM" },
    { t: "proc", title: "The four routine procedures", steps: [
      "<b>Set-builder → Roster.</b> Read the universe symbol first (<i>x</i> ∈ ℕ? ℤ? ℝ?), it decides which candidates are even allowed. Then solve the condition and list distinct survivors in braces.",
      "<b>Roster → Set-builder.</b> Hunt the pattern (squares? primes?), express it as a rule, and pin the index range so you reproduce exactly those elements, a loose rule generates extras.",
      "<b>Classify empty / finite / infinite.</b> Does any element satisfy the condition? None ⇒ ∅. Some ⇒ can you finish counting? Yes ⇒ finite; no ⇒ infinite.",
      "<b>Test equality.</b> Reduce both to roster; confirm containment both ways. Counts matching but elements differing ⇒ only equivalent." ] },
    { t: "ex", tag: "CBSE BOARD", q: "Write the set of all two-digit natural numbers whose digits add up to 8 in roster form.", steps: [
      "Tens digit <i>t</i> ≥ 1 and units <i>u</i> with <i>t</i> + <i>u</i> = 8:",
      "17, 26, 35, 44, 53, 62, 71, and 80 (8 + 0 = 8, don’t drop it)." ],
      ans: "{17, 26, 35, 44, 53, 62, 71, 80}" },
    { t: "ex", tag: "JEE MAIN · SPEED TRAP", q: "Without lengthy computation, identify the empty set: (a) {<i>x</i> ∈ ℝ : <i>x</i><sup>2</sup> + 1 = 0}  (b) {<i>x</i> : <i>x</i> is an even prime}  (c) {0}  (d) {<i>x</i> ∈ ℕ : <i>x</i> < 1}", steps: [
      "(a) <i>x</i><sup>2</sup> = −1 has no real solution ⇒ empty. (d) ℕ starts at 1 ⇒ empty.",
      "(b) = {2}, students forget 2 is prime. (c) contains 0, the classic {0} ≠ ∅ decoy." ],
      ans: "(a) and (d) are empty; (c) is a singleton dressed up to look empty" },
    { t: "ex", tag: "JEE MAIN", q: "Let <i>A</i> = {<i>x</i> ∈ ℤ : |<i>x</i>| ≤ 2} and <i>B</i> = {<i>x</i> ∈ ℤ : <i>x</i><sup>3</sup> = <i>x</i>}. Find <i>n</i>(<i>A</i>), <i>n</i>(<i>B</i>), and whether <i>A</i> = <i>B</i>.", steps: [
      "<i>A</i> = {−2, −1, 0, 1, 2} ⇒ <i>n</i>(<i>A</i>) = 5.",
      "<i>x</i><sup>3</sup> = <i>x</i> ⇒ <i>x</i>(<i>x</i> − 1)(<i>x</i> + 1) = 0 ⇒ <i>B</i> = {−1, 0, 1}, <i>n</i>(<i>B</i>) = 3.",
      "−2, 2 ∈ <i>A</i> but ∉ <i>B</i>: containment fails one way." ],
      ans: "A ≠ B (in fact B ⊂ A) · n(A) = 5 · n(B) = 3" },
    { t: "ex", tag: "JEE ADVANCED", q: "Let <i>a</i> be real and <i>T</i> = {<i>x</i> ∈ ℕ : <i>x</i><sup>2</sup> − (<i>a</i> + 1)<i>x</i> + <i>a</i> = 0}. For which <i>a</i> is <i>n</i>(<i>T</i>) = 1?", steps: [
      "Factor: (<i>x</i> − 1)(<i>x</i> − <i>a</i>) = 0 ⇒ roots 1 and <i>a</i>. Root 1 ∈ ℕ always.",
      "<i>a</i> ∈ ℕ, <i>a</i> ≠ 1: two distinct naturals ⇒ <i>n</i>(<i>T</i>) = 2. ✗",
      "<i>a</i> = 1 (roots coincide) or <i>a</i> ∉ ℕ (root excluded): <i>T</i> = {1}. ✓" ],
      ans: "n(T) = 1 ⟺ a = 1 or a ∉ ℕ, the domain ℕ filters the roots" },
    { t: "practice", items: [
      { q: "[CBSE] Write the set of distinct letters of “MATHEMATICS” in roster form.", a: "{M, A, T, H, E, I, C, S}, 8 distinct letters, repetition discarded." },
      { q: "[JEE Main] Write {<i>x</i> ∈ ℤ : <i>x</i><sup>2</sup> < 10} in roster form.", a: "{−3, −2, −1, 0, 1, 2, 3}" },
      { q: "[JEE Main] Is {<i>x</i> ∈ ℕ : <i>x</i><sup>2</sup> − 3 = 0} the empty set? Justify in one line.", a: "Yes; <i>x</i> = ±√3 ∉ ℕ, so no element exists." },
      { q: "[JEE Advanced] Find <i>n</i>({<i>x</i> ∈ ℤ : (<i>x</i><sup>2</sup> − 1)(<i>x</i><sup>2</sup> − 4) = 0}).", a: "4, roots <i>x</i> = ±1, ±2." },
      { q: "[JEE Advanced] Express {3, 8, 15, 24, 35} in set-builder form.", a: "{<i>x</i> : <i>x</i> = <i>n</i><sup>2</sup> − 1, <i>n</i> ∈ ℕ, 2 ≤ <i>n</i> ≤ 6}" } ] },
    { t: "mcq", q: "Which of the following is a well-defined set?", correct: 2, opts: [
      { label: "The collection of intelligent students in a school", nudge: "“Intelligent” is subjective, different people classify differently, so membership isn’t decidable." },
      { label: "The collection of difficult chapters in Class 11 Physics", nudge: "“Difficult” is a matter of opinion, a collection needs an objective in/out test to be a set." },
      { label: "The collection of prime numbers less than 20", nudge: null },
      { label: "The collection of beautiful monuments in India", nudge: "“Beautiful” is subjective. A set requires unambiguous membership." } ],
      solution: "Primality is an objective test, so membership is decidable, that’s exactly what “well-defined” demands." },
    { t: "mcq", q: "Which statement is correct?", correct: 2, opts: [
      { label: "∅ = {0}", nudge: "{0} holds the element 0, a box containing zero is not an empty box." },
      { label: "∅ = {∅}", nudge: "{∅} holds one element (the empty set itself), so it isn’t empty." },
      { label: "{0} is a singleton set", nudge: null },
      { label: "∅ has one element", nudge: "Empty means zero elements, not one." } ],
      solution: "{0} contains exactly one element, the number 0, hence a singleton." },
    { t: "mcq", q: "Let <i>A</i> = {<i>x</i> ∈ ℕ : <i>x</i> is a factor of 6} and <i>B</i> = {<i>p</i>, <i>q</i>, <i>r</i>, <i>s</i>}. Which is true?", correct: 1, opts: [
      { label: "A = B", nudge: "Equal sets need identical elements, not just identical counts." },
      { label: "A and B are equivalent but not equal", nudge: null },
      { label: "Neither equal nor equivalent", nudge: "Count the factors of 6 again: 1, 2, 3, 6, the cardinalities do match." },
      { label: "n(A) = 3", nudge: "You dropped a factor, 6 divides itself, and 1 divides everything." } ],
      solution: "A = {1, 2, 3, 6}, so n(A) = 4 = n(B). Same size, different elements ⇒ equivalent, not equal." },
    { t: "mcq", q: "The set {<i>x</i> ∈ ℝ : <i>x</i><sup>2</sup> − 2<i>x</i> + 5 = 0} is:", correct: 2, opts: [
      { label: "a singleton", nudge: "A repeated real root needs discriminant = 0, compute it first." },
      { label: "a two-element set", nudge: "“A quadratic has two roots”, but are they real? Check the discriminant before counting." },
      { label: "the empty set", nudge: null },
      { label: "an infinite set", nudge: "“No solution” is not “all reals”, an unsatisfiable condition gives ∅." } ],
      solution: "Discriminant = 4 − 20 = −16 < 0: no real root, so over ℝ the set is empty." },
    { t: "mistakes", items: [
      "Treating <b>{0} or {∅} as empty</b>. Both are singletons. Empty means zero elements, ∅ or { } only.",
      "Counting repeated elements. “MATHEMATICS” has 11 letters; only <b>8 are distinct</b>. Sets discard duplicates.",
      "Ignoring the universe symbol. {<i>x</i> : <i>x</i><sup>2</sup> = 2} is <b>empty over ℕ</b>, a doubleton over ℝ.",
      "Confusing <b>equal</b> with <b>equivalent</b>. Same number of elements ≠ same elements." ] },
    { t: "protip", html: "circle the universe symbol first and ask “is this even possible here?” two seconds of domain-checking catches empty sets and impossible-root traps, the exact places examiners plant marks." },
    { t: "snapshot", rows: [
      { f: "Set = well-defined + distinct", note: "order & repetition don’t matter" },
      { f: "Roster {2, 4, 6} · Builder {x : P(x)}", note: "list the yeses · state the question" },
      { f: "∅ ≠ {0} ≠ {∅}", note: "zero elements vs singletons" },
      { f: "Equal = same faces · Equivalent = same count", note: "equal ⇒ equivalent only" },
      { f: "ℕ ⊂ 𝕎 ⊂ ℤ ⊂ ℚ ⊂ ℝ", note: "𝕋 = the irrationals" } ],
      aids: [ "“well-defined or it’s not a set”", "“domain first, solve second”" ] } ] },

  // ─────────────────────────────────────────────── TOPIC 02
  { n: "02", title: "Subsets, Power Set, and Universal Set", chip: "02 SUBSETS",
    kalam: "a coin flip per element",
    blocks: [
    { t: "hook", html: "A perennial source of quick marks. CBSE asks 1–2 mark questions on listing subsets and the power set. JEE Main loves the one-line trap <b>“if n[P(A)] = 2<sup>k</sup>, find n(A)”</b> and subset-counting. The interval-as-subset idea is the silent backbone of every domain/range problem in calculus, so JEE Advanced assumes total fluency.", kalam: "quick marks, if you respect ∅." },
    { t: "p", html: "Picture the 15-member squad India announces for a tournament. From that squad the captain picks a playing eleven. Every player in the eleven is also in the squad, that is the entire idea of a subset. <b><i>A</i> ⊆ <i>B</i></b> when every element of <i>A</i> is also an element of <i>B</i>. <i>B</i> is allowed to have extras (the bench); all we demand is that nobody in <i>A</i> is missing from <i>B</i>." },
    { t: "p", html: "Two boundary cases trip students up. <b>Every set is a subset of itself</b>, the full squad is, trivially, a valid “selection” from the squad. And <b>the empty set is a subset of every set</b>: the empty guest list breaks no rule of any party, because to fail you’d need to point at someone on the list who wasn’t invited, and there’s nobody to point at. The empty selection is always legal." },
    { t: "def", term: "Proper subset A ⊊ B", html: "<i>A</i> ⊆ <i>B</i> but <i>A</i> ≠ <i>B</i>, at least one extra sits in <i>B</i>. The playing eleven is a proper subset of the squad; <i>B</i> is a <b>superset</b> (<i>B</i> ⊇ <i>A</i>)." },
    { t: "p", html: "The single most important hurdle in this whole chapter: <b>∈ relates an element to a set; ⊆ relates a set to a set.</b> Rohit ∈ Squad, but the opening pair {Rohit, Gill} ⊆ Squad. Writing Rohit ⊆ Squad or {Rohit} ∈ Squad is a category error. A player is <i>in</i> the team; a partnership is <i>part of</i> the team." },
    { t: "def", term: "Universal set U", html: "The agreed playing field, the set of all objects under discussion. In an election, <i>U</i> is all registered voters. Every set in the discussion is a subset of <i>U</i>. Choosing <i>U</i> is like agreeing on the syllabus before setting the paper." },
    { t: "def", term: "Power set P(A)", html: "Take {<i>a</i>, <i>b</i>}. All its sub-selections: ∅, {<i>a</i>}, {<i>b</i>}, {<i>a</i>, <i>b</i>}, four. The set of all these subsets is <b><i>P</i>(<i>A</i>) = {<i>X</i> : <i>X</i> ⊆ <i>A</i>}</b>, the complete menu of every selection you could make." },
    { t: "think", html: "to build a subset, walk down the list and flip a coin for each element: in or out. n elements, n independent choices, 2<sup>n</sup> subsets. that one image drives every counting question here." },
    { t: "formula", kicker: "FORMULA · SUBSET COUNTS", tag: "n(A) = n", main: "n[P(A)] = 2<sup>n</sup>", legend: [
      "proper subsets 2<sup>n</sup> − 1 · non-empty 2<sup>n</sup> − 1 · non-empty proper 2<sup>n</sup> − 2",
      "exactly r elements: C(n, r) · n[P(P(A))] = 2<sup>2<sup>n</sup></sup> · P(∅) = {∅}, one element" ],
      note: "Intervals are subsets of ℝ: strict < → open ( ) · with ≤ → closed [ ] · length = b − a." },
    { t: "deriv", kicker: "DERIVATION · WHY 2ⁿ, TAP A LINE FOR THE WHY", steps: [
      { eq: "A = {a<sub>1</sub>, a<sub>2</sub>, …, a<sub>n</sub>}", why: "A finite set with n distinct elements. To specify a subset S you must make one decision per element." },
      { eq: "each a<sub>i</sub>: in S, or not", why: "Exactly two choices per element, and the decisions are independent, choosing a₁ tells you nothing about a₂." },
      { eq: "2 × 2 × ⋯ × 2 (n factors) = 2<sup>n</sup>", why: "Each distinct in/out sequence yields a distinct subset, and every subset arises from exactly one sequence, a perfect one-to-one correspondence with binary strings. The all-out string gives ∅, the all-in string gives A, both improper subsets are already counted, which is why proper = 2ⁿ − 1." },
      { eq: "check: C(n,0) + C(n,1) + ⋯ + C(n,n) = (1+1)<sup>n</sup> = 2<sup>n</sup> ✓", why: "Count by size instead and the binomial theorem returns the same total, two roads, one answer." } ] },
    { t: "diagram", kind: "lattice", kicker: "DIAGRAM · THE 8 SUBSETS OF {p, q, r}, TAP A SIZE" },
    { t: "proc", title: "Key procedures", steps: [
      "<b>List a power set by size</b>, ∅, then singletons, then pairs, … ending with <i>A</i>. Counting as you go to 2<sup>n</sup> prevents the two classic omissions: ∅ and <i>A</i> itself.",
      "<b>Choose a valid U</b>, it must contain every element of every set under discussion (their union, at minimum).",
      "<b>Set-builder ↔ interval</b>, the bracket shape <i>is</i> the inequality: square bracket = promise the endpoint belongs." ] },
    { t: "ex", tag: "CBSE BOARD", q: "Write the power set of <i>A</i> = {<i>p</i>, <i>q</i>, <i>r</i>} and state <i>n</i>[<i>P</i>(<i>A</i>)].", steps: [
      "By size, 0: ∅ · 1: {<i>p</i>}, {<i>q</i>}, {<i>r</i>} · 2: {<i>p</i>,<i>q</i>}, {<i>p</i>,<i>r</i>}, {<i>q</i>,<i>r</i>} · 3: {<i>p</i>,<i>q</i>,<i>r</i>}" ],
      ans: "P(A) has 2³ = 8 members" },
    { t: "ex", tag: "JEE MAIN · SPEED TRAP", q: "Given <i>n</i>[<i>P</i>(<i>A</i>)] = 256, find <i>n</i>(<i>A</i>) and the number of proper subsets.", steps: [
      "Recognise the power of two: 256 = 2<sup>8</sup> ⇒ <i>n</i>(<i>A</i>) = 8.",
      "Proper subsets = 2<sup>8</sup> − 1 = 255. Traps: answering 256 for n(A); writing 254 by subtracting 2." ],
      ans: "n(A) = 8 · proper subsets = 255" },
    { t: "ex", tag: "JEE MAIN", q: "Let <i>A</i> = {<i>x</i> ∈ ℤ : <i>x</i><sup>2</sup> − <i>x</i> − 6 ≤ 0}. Find <i>n</i>[<i>P</i>(<i>A</i>)].", steps: [
      "(<i>x</i> − 3)(<i>x</i> + 2) ≤ 0 ⇒ −2 ≤ <i>x</i> ≤ 3. Over ℤ: <i>A</i> = {−2, −1, 0, 1, 2, 3}, <i>n</i>(<i>A</i>) = 6.",
      "Over ℝ the answer would be the interval [−2, 3], infinite, no finite power-set count. The integer domain is decisive." ],
      ans: "n[P(A)] = 2⁶ = 64" },
    { t: "ex", tag: "JEE ADVANCED", q: "<i>A</i> = {1, …, 7}. (a) How many subsets contain only odd numbers? (b) How many contain at least one even number?", steps: [
      "Split: odds <i>O</i> = {1, 3, 5, 7}, evens <i>E</i> = {2, 4, 6}.",
      "(a) Only-odd subsets are exactly subsets of <i>O</i>: 2<sup>4</sup> = 16 (∅ included).",
      "(b) Complement principle: all − none-even = 2<sup>7</sup> − 2<sup>4</sup> = 128 − 16. Count the easy opposite and subtract, the standard Advanced reflex." ],
      ans: "(a) 16 · (b) 112" },
    { t: "practice", items: [
      { q: "[CBSE] Write all subsets of {5, 7}, and how many there are.", a: "∅, {5}, {7}, {5, 7}, four subsets." },
      { q: "[JEE Main] A set has 63 proper subsets. How many elements?", a: "2<sup>n</sup> − 1 = 63 ⇒ 2<sup>n</sup> = 64 ⇒ n = 6." },
      { q: "[JEE Main] Write {<i>x</i> ∈ ℝ : −3 ≤ <i>x</i> < 4} in interval form and state its length.", a: "[−3, 4); length = 4 − (−3) = 7." },
      { q: "[JEE Advanced] How many subsets of {1, …, 5} contain 1 but not 2?", a: "Fix 1 in, 2 out; {3, 4, 5} free: 2³ = 8." },
      { q: "[JEE Advanced] If n[P(A)] − n[P(B)] = 56 and B ⊂ A, find n(A), n(B).", a: "2<sup>a</sup> − 2<sup>b</sup> = 56 = 64 − 8 ⇒ n(A) = 6, n(B) = 3." } ] },
    { t: "mcq", q: "Which statement is correct for <i>A</i> = {1, 2}?", correct: 2, opts: [
      { label: "1 ⊆ A", nudge: "1 is an element, elements relate by ∈, never ⊆." },
      { label: "{1} ∈ A", nudge: "A’s elements are the numbers 1 and 2, not the set {1}, that one lives in P(A)." },
      { label: "{1} ⊆ A", nudge: null },
      { label: "∅ ∈ A", nudge: "∅ is a subset of A (always true), not an element of it, the two claims differ." } ],
      solution: "{1} is a set whose every element lies in A, so {1} ⊆ A. The other three are the ∈/⊆ category error in disguise." },
    { t: "mcq", q: "How many elements does <i>P</i>(∅) have?", correct: 1, opts: [
      { label: "0", nudge: "“No elements ⇒ no subsets” forgets that ∅ is a subset of every set, including itself." },
      { label: "1", nudge: null },
      { label: "2", nudge: "That’s P({∅}), one storey up from P(∅)." },
      { label: "undefined", nudge: "The power set is perfectly well-defined for ∅." } ],
      solution: "n[P(∅)] = 2⁰ = 1; the single member is ∅ itself: P(∅) = {∅}." },
    { t: "mcq", q: "A set has <i>n</i> elements. The number of subsets with an <b>odd</b> number of elements is:", correct: 0, opts: [
      { label: "2<sup>n−1</sup>", nudge: null },
      { label: "2<sup>n</sup> − 1", nudge: "That’s the count of proper subsets, an unrelated quantity." },
      { label: "n/2", nudge: "Not even an integer in general, guessing a formula skips the even/odd symmetry argument." },
      { label: "2<sup>n</sup>/n", nudge: "Also not an integer in general. Think “half of all subsets,” not division by n." } ],
      solution: "Among all 2ⁿ subsets, exactly half have odd size: 2ⁿ⁻¹." },
    { t: "mcq", q: "If <i>A</i> = {<i>x</i> ∈ ℝ : 1 < <i>x</i> ≤ 6}, then <i>A</i> in interval form is:", correct: 2, opts: [
      { label: "[1, 6]", nudge: "Strict < at the left must exclude 1, that needs a round bracket." },
      { label: "(1, 6)", nudge: "≤ at the right includes 6, that end needs a square bracket." },
      { label: "(1, 6]", nudge: null },
      { label: "[1, 6)", nudge: "Both brackets are flipped, map each inequality to its bracket before writing." } ],
      solution: "Strict < excludes 1 (round); ≤ includes 6 (square): (1, 6]." },
    { t: "mistakes", items: [
      "Confusing <b>∈ with ⊆</b>. 1 ∈ <i>A</i>, but {1} ⊆ <i>A</i> and {1} ∈ <i>P</i>(<i>A</i>).",
      "Forgetting <b>∅ and A itself</b> when listing subsets, organise by size so you can’t miss them.",
      "Off-by-one: proper subsets = <b>2<sup>n</sup> − 1</b> (exclude only <i>A</i>), not 2<sup>n</sup> − 2.",
      "Reading <i>n</i>[<i>P</i>(<i>A</i>)] as <i>n</i>(<i>A</i>). If <i>n</i>[<i>P</i>(<i>A</i>)] = 1024 = 2<sup>10</sup>, then <i>n</i>(<i>A</i>) = 10, never 1024." ] },
    { t: "protip", html: "memorise the small powers of two, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024. half of all power-set MCQs reduce to “spot which power of two this is.”" },
    { t: "snapshot", rows: [
      { f: "A ⊆ B ⟺ every element of A is in B", note: "proper ⊊ means also A ≠ B" },
      { f: "∅ ⊆ A and A ⊆ A, always", note: "the two improper extremes" },
      { f: "n[P(A)] = 2ⁿ · proper 2ⁿ − 1", note: "exactly r: C(n, r) · P(∅) = {∅}" },
      { f: "∈ joins element→set · ⊆ joins set→set", note: "never mix them" },
      { f: "< → ( open · ≤ → [ closed", note: "length = b − a" } ],
      aids: [ "“in with ∈, part with ⊆”", "“coin per element: 2ⁿ subsets”" ] } ] },

  // ─────────────────────────────────────────────── TOPIC 03
  { n: "03", title: "Venn Diagrams and Set Operations", chip: "03 OPERATIONS",
    kalam: "when stuck, shade the venn",
    blocks: [
    { t: "hook", html: "Bread-and-butter marks across every exam. CBSE asks 2–3 mark questions on computing <i>A</i> ∪ <i>B</i>, <i>A</i> ∩ <i>B</i>, <i>A</i> − <i>B</i>, <i>A</i>′ or shading a Venn diagram. JEE Main tests simplification and De Morgan’s laws, often disguised inside logic or probability. Operations on intervals are the silent machinery behind every domain-of-a-function problem in Advanced calculus.", kalam: "or = cup, and = cap." },
    { t: "p", html: "Think of two WhatsApp broadcast lists on your phone: <b>Family (<i>A</i>)</b> and <b>Office (<i>B</i>)</b>. All your saved contacts form the universal set <i>U</i>. Every set operation is a membership question about these two lists." },
    { t: "defgrid", title: "The five operations", rows: [
      { k: "Union A ∪ B", v: "in Family <b>or</b> Office (or both), the wedding-invite list. Inclusive or." },
      { k: "Intersection A ∩ B", v: "in <b>both</b>, the cousin who is also a colleague. Keyword: and." },
      { k: "Difference A − B", v: "in Family but <b>not</b> Office. One-directional: B − A is a different group." },
      { k: "Complement A′", v: "everyone <b>not</b> in Family. Only meaningful once U is fixed, change U and A′ changes." },
      { k: "Symmetric diff A △ B", v: "in <b>exactly one</b> list, never both: (A − B) ∪ (B − A)." },
      { k: "Disjoint", v: "A ∩ B = ∅, the lists share nobody." } ] },
    { t: "think", html: "two overlapping circles carve U into four regions: only A, only B, both, neither. every operation is simply a choice of which regions to shade. you never memorise operations, you shade." },
    { t: "diagram", kind: "venn2", kicker: "DIAGRAM · TAP AN OPERATION TO SHADE IT" },
    { t: "formula", kicker: "THE LAWS OF SET ALGEBRA", tag: "all provable by shading", main: "(A ∪ B)′ = A′ ∩ B′ · (A ∩ B)′ = A′ ∪ B′", legend: [
      "Commutative · Associative · Distributive: A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)",
      "Idempotent A ∪ A = A · Identity A ∪ ∅ = A, A ∩ U = A",
      "Complement: A ∪ A′ = U · A ∩ A′ = ∅ · (A′)′ = A" ],
      note: "De Morgan: complement flips the operation, union becomes intersection, every time." },
    { t: "deriv", kicker: "DERIVATION · DE MORGAN BY ELEMENT-CHASING", steps: [
      { eq: "x ∈ (A ∪ B)′", why: "Start with an arbitrary element of the left side, the complement of a set is exactly the elements of U outside it." },
      { eq: "⟺ NOT(x ∈ A or x ∈ B)", why: "Unpack the union: being outside A ∪ B negates “in A or in B.”" },
      { eq: "⟺ x ∉ A and x ∉ B", why: "The negation of “or” is “and”, that single logical fact is the whole law." },
      { eq: "⟺ x ∈ A′ ∩ B′", why: "Outside A means inside A′; outside B means inside B′; both at once is the intersection. Every step is an iff, so the sets are equal. Shading illustrates it; element-chasing proves it." } ] },
    { t: "proc", title: "Working procedures", steps: [
      "<b>Shade a compound expression inside-out</b>, innermost bracket first, then the outer operation. For <i>A</i>′ ∩ <i>B</i>: shade outside <i>A</i>, keep only what lies inside <i>B</i>.",
      "<b>Simplify with the laws</b>, treat ∪ like +, ∩ like ×, complement like negation; distribute, apply De Morgan, collapse with <i>A</i> ∩ <i>A</i>′ = ∅." ] },
    { t: "ex", tag: "CBSE BOARD", q: "<i>U</i> = {1, …, 10}, <i>A</i> = {2, 4, 6, 8}, <i>B</i> = {1, 2, 3, 4, 5}. Find <i>A</i> ∪ <i>B</i>, <i>A</i> ∩ <i>B</i>, <i>A</i> − <i>B</i>, <i>A</i>′, <i>A</i> △ <i>B</i>.", steps: [
      "<i>A</i> ∪ <i>B</i> = {1, 2, 3, 4, 5, 6, 8} · <i>A</i> ∩ <i>B</i> = {2, 4} · <i>A</i> − <i>B</i> = {6, 8}",
      "<i>A</i>′ = <i>U</i> − <i>A</i> = {1, 3, 5, 7, 9, 10} · <i>A</i> △ <i>B</i> = {6, 8} ∪ {1, 3, 5} = {1, 3, 5, 6, 8}" ],
      ans: "five answers, one four-region picture" },
    { t: "ex", tag: "JEE MAIN · SPEED TRAP", q: "Simplify (<i>A</i> − <i>B</i>) ∪ (<i>A</i> ∩ <i>B</i>).", steps: [
      "Shade, don’t grind: (<i>A</i> − <i>B</i>) is the “only A” crescent; (<i>A</i> ∩ <i>B</i>) is the lens. Together they fill circle <i>A</i>.",
      "Algebra confirms: (<i>A</i> ∩ <i>B</i>′) ∪ (<i>A</i> ∩ <i>B</i>) = <i>A</i> ∩ (<i>B</i>′ ∪ <i>B</i>) = <i>A</i> ∩ <i>U</i> = <i>A</i>. Rushing gives A ∪ B (over-shading) or A ∩ B (under)." ],
      ans: "(A − B) ∪ (A ∩ B) = A, a 5-second answer if you see the regions" },
    { t: "ex", tag: "JEE MAIN", q: "Over ℝ, <i>A</i> = [−2, 5) and <i>B</i> = (1, 8]. Find <i>A</i> ∩ <i>B</i>, <i>A</i> ∪ <i>B</i>, <i>A</i> − <i>B</i>.", steps: [
      "∩: larger lower bound 1 (open, from B) to smaller upper bound 5 (open, from A): (1, 5).",
      "∪: looser bounds, −2 (closed) to 8 (closed): [−2, 8].",
      "−: B starts just above 1, so 1 survives in A − B: [−2, 1]. Endpoints are where marks are won or lost." ],
      ans: "A ∩ B = (1, 5) · A ∪ B = [−2, 8] · A − B = [−2, 1]" },
    { t: "ex", tag: "JEE ADVANCED", q: "Prove (<i>A</i> ∪ <i>B</i>) − (<i>A</i> ∩ <i>B</i>) = (<i>A</i> − <i>B</i>) ∪ (<i>B</i> − <i>A</i>).", steps: [
      "<i>x</i> ∈ LHS ⟺ (in at least one) and (not in both), precisely “in exactly one of A, B.”",
      "That splits into two exclusive cases: (<i>x</i> ∈ <i>A</i>, ∉ <i>B</i>) or (<i>x</i> ∈ <i>B</i>, ∉ <i>A</i>), which is the RHS. Every step an iff. ∎" ],
      ans: "symmetric difference = “one or the other, but not both,” formally" },
    { t: "practice", items: [
      { q: "[CBSE] U = {x ∈ ℕ : x ≤ 9}, A = {1, 2, 3, 4}, B = {3, 4, 5, 6}. Find A′, B − A, A △ B.", a: "A′ = {5, 6, 7, 8, 9} · B − A = {5, 6} · A △ B = {1, 2, 5, 6}" },
      { q: "[JEE Main] Simplify (A′ ∩ B′)′.", a: "A ∪ B, De Morgan applied backwards: (A′)′ ∪ (B′)′." },
      { q: "[JEE Main] Over ℝ, find (−∞, 3] ∩ (0, ∞).", a: "(0, 3]" },
      { q: "[JEE Advanced] Prove (A − B) ∩ (A − C) = A − (B ∪ C).", a: "x ∈ LHS ⟺ x ∈ A, x ∉ B, x ∉ C ⟺ x ∈ A, x ∉ (B ∪ C) ⟺ x ∈ RHS." },
      { q: "[JEE Advanced] Simplify A ∩ (A ∪ B) and A ∪ (A ∩ B).", a: "Both equal A, the absorption laws: the combination is always swallowed." } ] },
    { t: "mcq", q: "(<i>A</i> ∪ <i>B</i>)′ is equal to:", correct: 1, opts: [
      { label: "A′ ∪ B′", nudge: "That’s the other De Morgan form, the one for (A ∩ B)′. Complement flips ∪ into ∩." },
      { label: "A′ ∩ B′", nudge: null },
      { label: "A′ − B′", nudge: "There is no such difference rule, this one is invented." },
      { label: "A ∩ B", nudge: "“Outside both circles” is not the overlap, it’s outside it entirely." } ],
      solution: "De Morgan: the complement of a union is the intersection of the complements." },
    { t: "mcq", q: "If <i>A</i> = {1, 2, 3} and <i>B</i> = {3, 4, 5}, then <i>A</i> − <i>B</i> equals:", correct: 2, opts: [
      { label: "{4, 5}", nudge: "That’s B − A, difference is not commutative; read which set is the source." },
      { label: "{3}", nudge: "That’s A ∩ B, the shared part is exactly what difference removes." },
      { label: "{1, 2}", nudge: null },
      { label: "{1, 2, 4, 5}", nudge: "That’s the symmetric difference A △ B, both crescents, not just A’s." } ],
      solution: "Elements in A but not in B: 1 and 2 (3 is excluded, it’s also in B)." },
    { t: "mcq", q: "For any set <i>A</i> with universe <i>U</i>, <i>A</i> ∩ <i>A</i>′ equals:", correct: 2, opts: [
      { label: "U", nudge: "That’s A ∪ A′, the union fills the universe; the intersection is its opposite." },
      { label: "A", nudge: "No element can be in A and outside A at once, check the contradiction." },
      { label: "∅", nudge: null },
      { label: "A′", nudge: "A and A′ share nothing by definition, the answer can’t be either of them." } ],
      solution: "No element is both in A and outside A: the intersection is empty. A and A′ are disjoint by definition." },
    { t: "mcq", q: "If <i>A</i> ⊆ <i>B</i>, then <i>A</i> ∪ <i>B</i> equals:", correct: 1, opts: [
      { label: "A", nudge: "Roles reversed, A ∩ B = A under this hypothesis, not the union." },
      { label: "B", nudge: null },
      { label: "∅", nudge: "A union can only be empty if both sets are, nothing here says that." },
      { label: "A ∩ B", nudge: "Union collects, intersection filters, visualise circle A inside circle B." } ],
      solution: "Every element of A is already in B, so the union adds nothing new: A ∪ B = B." },
    { t: "mistakes", items: [
      "Treating difference as commutative. <b><i>A</i> − <i>B</i> ≠ <i>B</i> − <i>A</i></b>, read which set is the source.",
      "Swapping the two De Morgan forms. <b>The operation flips</b>: (A ∪ B)′ = A′ ∩ B′.",
      "Taking a complement <b>before fixing U</b>, A′ is undefined until the universe is stated.",
      "Endpoint errors on intervals: ∩ takes the <b>tighter</b> bounds and stricter bracket; ∪ the looser." ] },
    { t: "protip", html: "for any two-set expression, draw the four-region venn once and shade. shading is faster than juggling laws, and instantly catches whether your algebra landed on A, A ∪ B, or A ∩ B." },
    { t: "snapshot", rows: [
      { f: "∪ = or · ∩ = and · A − B = A ∩ B′", note: "A′ = U − A" },
      { f: "A △ B = (A − B) ∪ (B − A)", note: "= (A ∪ B) − (A ∩ B)" },
      { f: "(A ∪ B)′ = A′ ∩ B′", note: "De Morgan, the operation flips" },
      { f: "A ∪ A′ = U · A ∩ A′ = ∅ · (A′)′ = A", note: "complement laws" },
      { f: "n(A ∪ B) = n(A) + n(B) − n(A ∩ B)", note: "the bridge to Topic 04" } ],
      aids: [ "“cup = or, cap = and”", "“when stuck, shade the venn”" ] } ] },

  // ─────────────────────────────────────────────── TOPIC 04
  { n: "04", title: "Cardinality of Unions and Practical Problems", chip: "04 COUNTING",
    kalam: "fill the centre first",
    blocks: [
    { t: "hook", html: "One of the highest-yield, most predictable scoring topics in the whole chapter. CBSE almost always carries a 3–4 mark word problem on two or three sets. JEE Main features inclusion–exclusion standalone and woven into Probability. JEE Advanced pushes into fine partitions, <b>exactly one, exactly two, at least two</b>, and problems where the three-way overlap is the unknown.", kalam: "predictable marks. take them." },
    { t: "p", html: "A coaching batch has 70 students in Physics and 50 in Chemistry. How many are in at least one? The tempting answer is 70 + 50 = 120, but that is almost always wrong, because some students take both. Counting the 70 already swept up the both-subject students; counting the 50 counted those same people <b>a second time</b>." },
    { t: "formula", kicker: "FORMULA · INCLUSION–EXCLUSION", tag: "the headline act", main: "n(A ∪ B) = n(A) + n(B) − n(A ∩ B)", legend: [
      "three sets: n(A ∪ B ∪ C) = Σn(A) − Σn(A ∩ B) + n(A ∩ B ∩ C)",
      "signs alternate +, −, +, include, exclude, include" ],
      note: "Disjoint sets: the overlap term is 0 and the formula collapses to plain addition." },
    { t: "deriv", kicker: "DERIVATION · THE THREE-SET FORMULA, TAP FOR THE WHY", steps: [
      { eq: "n(A ∪ (B ∪ C)) = n(A) + n(B ∪ C) − n(A ∩ (B ∪ C))", why: "Treat B ∪ C as a single set and apply the two-set rule to A and it, no new axiom needed." },
      { eq: "n(B ∪ C) = n(B) + n(C) − n(B ∩ C)", why: "The two-set rule again, expanding the middle term." },
      { eq: "A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)", why: "Distribute intersection over union, the distributive law from Topic 03 earning its keep." },
      { eq: "n(A ∩ (B∪C)) = n(A∩B) + n(A∩C) − n(A∩B∩C)", why: "Two-set rule a third time, using (A ∩ B) ∩ (A ∩ C) = A ∩ B ∩ C." },
      { eq: "n(A∪B∪C) = Σn(A) − Σn(A∩B) + n(A∩B∩C)", why: "Substitute back and collect. The three-set rule is the two-set rule applied twice, which is exactly why the pattern extends to any number of sets." } ] },
    { t: "think", html: "don’t memorise long formulas, label the regions. a three-circle venn has exactly seven inner regions; fill the centre first and work outward, and every word problem collapses into addition." },
    { t: "diagram", kind: "venn3", kicker: "DIAGRAM · THE 8 REGIONS, TAP A PHRASE" },
    { t: "defgrid", title: "Reading exam phrases into regions", rows: [
      { k: "“or” / “and”", v: "or = union · and = intersection" },
      { k: "“at least one”", v: "the union n(A ∪ B ∪ C), and “none” = n(U) − union" },
      { k: "“only A”", v: "n(A) − its overlaps, plain “A” keeps every overlap. The single most common word-problem error." },
      { k: "Exactly one", v: "Σn(A) − 2Σn(A ∩ B) + 3n(A ∩ B ∩ C)" },
      { k: "Exactly two", v: "Σn(A ∩ B) − 3n(A ∩ B ∩ C)" },
      { k: "At least two", v: "Σn(A ∩ B) − 2n(A ∩ B ∩ C)" } ] },
    { t: "formula", kicker: "PARTITION IDENTITIES", tag: "for unknown overlaps", main: "union = E₁ + E₂ + E₃", legend: [
      "Σn(A) = E₁ + 2E₂ + 3E₃, each element counted once per set it belongs to",
      "E₁, E₂, E₃ = counts in exactly one / exactly two / all three" ],
      note: "When the three-way overlap is unknown, these two lines give two equations, algebra finishes the job." },
    { t: "ex", tag: "CBSE BOARD", q: "In a batch of 120: 70 in Physics, 50 in Chemistry, 30 in both. Find (i) at least one, (ii) Physics only, (iii) neither.", steps: [
      "(i) n(P ∪ C) = 70 + 50 − 30 = 90",
      "(ii) Physics only = 70 − 30 = 40 · (iii) neither = 120 − 90 = 30" ],
      ans: "90 · 40 · 30" },
    { t: "ex", tag: "JEE MAIN · SPEED TRAP", q: "In a hostel of 80, 60 take tea and 35 take coffee. Every student takes at least one. How many take both?", steps: [
      "“At least one” hands you the union for free: n(tea ∪ coffee) = 80.",
      "n(both) = 60 + 35 − 80 = 15. The decoy instinct: 60 + 35 = 95 “exceeds 80!”, that excess IS the double-counted overlap." ],
      ans: "15 take both" },
    { t: "ex", tag: "JEE MAIN", q: "200 students: 100 cricket, 80 football, 65 hockey; 40 C∩F, 30 F∩H, 35 C∩H; 20 all three. Find (i) at least one, (ii) exactly two, (iii) none.", steps: [
      "Σ singles = 245 · Σ pairs = 105 · triple = 20.",
      "(i) 245 − 105 + 20 = 160 · (ii) 105 − 3(20) = 45 · (iii) 200 − 160 = 40" ],
      ans: "160 · 45 · 40" },
    { t: "ex", tag: "JEE ADVANCED", q: "150 residents each speak at least one of Hindi (100), English (70), Tamil (55). Exactly 25 speak precisely two. How many speak all three?", steps: [
      "Union = 150 · Σn = 225 · E₂ = 25. Two identities:",
      "E₁ + 25 + E₃ = 150 and E₁ + 50 + 3E₃ = 225.",
      "Subtract: 25 + 2E₃ = 75 ⇒ E₃ = 25. (Check: E₁ = 100; 100 + 25 + 25 = 150 ✓)" ],
      ans: "25 speak all three, no diagram needed" },
    { t: "practice", items: [
      { q: "[CBSE] Of 60 students, 35 passed Maths, 40 Physics, 25 both. At least one? Failed both?", a: "At least one = 50 · failed both = 10." },
      { q: "[JEE Main] 100 people: 72 like tea, 55 coffee, 20 both. Consistent?", a: "No, union = 107 > 100 = n(U). The data is contradictory." },
      { q: "[JEE Main] 250 commuters: 140 bus, 100 metro, 75 auto; 60, 40, 45 pairwise; 25 all three. None?", a: "Union = 315 − 145 + 25 = 195; none = 55." },
      { q: "[JEE Advanced] 500 families: X 280, Y 210, Z 150; 100 XY, 60 YZ, 70 XZ; 40 all. Exactly one? At least two?", a: "Exactly one = 640 − 460 + 120 = 300 · at least two = 230 − 80 = 150." },
      { q: "[JEE Advanced] 100 people, each likes ≥ 1 of three desserts: 60 A, 50 B, 40 C, 10 all three. Exactly two?", a: "Σn − union = E₂ + 2E₃ ⇒ 50 = E₂ + 20 ⇒ E₂ = 30." } ] },
    { t: "mcq", q: "If <i>n</i>(<i>A</i>) = 25, <i>n</i>(<i>B</i>) = 18, <i>n</i>(<i>A</i> ∪ <i>B</i>) = 35, then <i>n</i>(<i>A</i> ∩ <i>B</i>) is:", correct: 1, opts: [
      { label: "43", nudge: "That’s 25 + 18 with no subtraction, the double-count left uncorrected." },
      { label: "8", nudge: null },
      { label: "10", nudge: "Subtracted the wrong pair, the overlap is sum of parts minus the union." },
      { label: "17", nudge: "Check which quantities you subtracted, anchor: n(A) + n(B) − n(A ∪ B)." } ],
      solution: "n(A ∩ B) = 25 + 18 − 35 = 8, the overlap is “sum of parts minus the union.”" },
    { t: "mcq", q: "For three sets, the number of elements in <b>exactly two</b> of them is:", correct: 2, opts: [
      { label: "Σn(A ∩ B) − n(A∩B∩C)", nudge: "Subtracting the centre once still counts it twice over, it sits inside all three pairwise overlaps." },
      { label: "Σn(A ∩ B) − 2n(A∩B∩C)", nudge: "That’s at least two, centre kept once. “Exactly two” wants the centre counted zero times." },
      { label: "Σn(A ∩ B) − 3n(A∩B∩C)", nudge: null },
      { label: "Σn(A ∩ B) + n(A∩B∩C)", nudge: "Adding pushes the centre count the wrong way entirely." } ],
      solution: "Each pairwise overlap counts the all-three group once, three copies total; remove all three. The deciding question is always: how many times do I want the centre counted?" },
    { t: "mcq", q: "With <i>n</i>(<i>A</i>) = 40 and <i>n</i>(<i>A</i> ∩ <i>B</i>) = 15, the number in “<i>A</i> only” is:", correct: 2, opts: [
      { label: "40", nudge: "That’s all of A, “only” strips out the shared part." },
      { label: "55", nudge: "Adding instead of subtracting, “only” removes the overlap." },
      { label: "25", nudge: null },
      { label: "15", nudge: "That’s the overlap itself, not what’s left of A without it." } ],
      solution: "“A only” excludes the shared part: 40 − 15 = 25. The trap word is only." },
    { t: "mcq", q: "In the three-set formula, <i>n</i>(<i>A</i> ∩ <i>B</i> ∩ <i>C</i>) appears with which sign, and why?", correct: 1, opts: [
      { label: "Subtracted once, to remove the centre", nudge: "Sign is backwards, track the net count: +3 from singles, −3 from pairs = 0 so far." },
      { label: "Added once, counted +3 in singles, −3 in pairs, so it stands at zero", nudge: null },
      { label: "Added three times", nudge: "Ignores the cancellation from the three pairwise subtractions." },
      { label: "It does not appear", nudge: "The centre is part of the union, it must end up counted exactly once." } ],
      solution: "The centre lies in all three singles (+3) and all three pairwise overlaps (−3), zero so far; adding it once restores it. That net-count reasoning is the whole logic of the alternating signs." },
    { t: "mistakes", items: [
      "n(A ∪ B) = n(A) + n(B) is correct <b>only for disjoint sets</b>, with any overlap, subtract it.",
      "“Only A” vs “A”: underline <b>only, exactly, at least, neither</b> before computing.",
      "Mis-signing the triple: the pattern is <b>+ singles − pairs + triple</b>.",
      "“Exactly two” vs “at least two” differ by one copy of the centre: <b>−3</b> vs <b>−2</b> of n(A∩B∩C).",
      "If a region comes out negative or the union exceeds n(U), <b>the data is inconsistent</b>, say so." ] },
    { t: "protip", html: "draw the venn, fill the centre first, work outward. every “only / exactly / at least” answer reads straight off the labelled regions, no formula recall under pressure, and negative regions instantly expose bad data." },
    { t: "snapshot", rows: [
      { f: "n(A ∪ B) = n(A) + n(B) − n(A ∩ B)", note: "“only A” = n(A) − n(A ∩ B)" },
      { f: "3 sets: Σ singles − Σ pairs + triple", note: "include, exclude, include" },
      { f: "none = n(U) − n(union)", note: "outside every circle" },
      { f: "exactly two: Σ pairs − 3·centre", note: "at least two: − 2·centre" },
      { f: "union = E₁ + E₂ + E₃ · Σn = E₁ + 2E₂ + 3E₃", note: "when the overlap is unknown" } ],
      aids: [ "“fill the centre first, then count outward”", "“exactly-two kills the centre thrice; at-least-two only twice”" ] } ] },

  // ─────────────────────────────────────────────── TOPIC 05
  { n: "05", title: "Indexed Families, Generalised Laws & Double Counting", chip: "05 FAMILIES",
    kalam: "shrinking is not arriving",
    blocks: [
    { t: "hook", html: "CBSE asks 1–2 mark questions on indexed families, usually <i>A<sub>n</sub></i> as the multiples of <i>n</i>. JEE Main tests the notation on families of shrinking intervals, where <b>the whole mark rides on whether an endpoint is open or closed</b>. JEE Advanced draws on this twice: inclusion–exclusion for four or more sets, and the double-counting identity, a question type that has recurred for decades and collapses into two lines once you recognise it.", kalam: "two lines, once you see it." },
    { t: "p", html: "Take the 8:14 Churchgate fast from Andheri. For each day of the month, let <i>A</i><sub>1</sub> be the passengers who boarded on day 1, <i>A</i><sub>2</sub> on day 2, … to <i>A</i><sub>30</sub>. Nobody hands you a single set, you get a whole <b>run of sets, numbered by day</b>. Only two questions ever come up: Who rode <b>at least once</b>? That’s the union ⋃<i>A<sub>i</sub></i>. Who rode <b>every single day</b>? The season-ticket regulars, the intersection ⋂<i>A<sub>i</sub></i>." },
    { t: "think", html: "⋃ and ⋂ are not new operations. they are ∪ and ∩ applied along a list, exactly as Σ is + applied along a list. big cup = at least one; big cap = every one." },
    { t: "p", html: "Now the part that separates a JEE candidate from a Board candidate: <b>the index set may be infinite</b>, and infinite families behave in ways finite ones never do. Consider <i>A<sub>n</sub></i> = (0, 1/<i>n</i>): every member is non-empty, any finite batch has a non-empty intersection, yet the intersection of the whole family is <b>empty</b>. Pick any <i>x</i> > 0: eventually 1/<i>n</i> drops below it. And 0 was never inside a single one, every <i>A<sub>n</sub></i> excludes its left endpoint. Change the brackets to [0, 1/<i>n</i>] and the intersection genuinely becomes {0}. <b>In an infinite family, brackets decide everything.</b>" },
    { t: "diagram", kind: "family", kicker: "DIAGRAM · THE LIMIT-POINT TRAP, TAP A BRACKET" },
    { t: "defgrid", title: "Family vocabulary", rows: [
      { k: "Indexed family", v: "{A<sub>i</sub>}<sub>i∈I</sub>, one set per label in the index set I" },
      { k: "Family union ⋃", v: "elements in at least one member" },
      { k: "Family intersection ⋂", v: "elements in every member" },
      { k: "Increasing / decreasing", v: "A₁ ⊆ A₂ ⊆ ⋯ each contains the last · A₁ ⊇ A₂ ⊇ ⋯ each inside the last" },
      { k: "Sandwich", v: "⋂A<sub>i</sub> ⊆ A<sub>j</sub> ⊆ ⋃A<sub>i</sub> for every j, any answer violating this is wrong on sight" },
      { k: "Multiplicity d(x)", v: "how many members contain x" } ] },
    { t: "formula", kicker: "GENERALISED LAWS", tag: "any I, finite or infinite", main: "(⋃A<sub>i</sub>)′ = ⋂A<sub>i</sub>′ · (⋂A<sub>i</sub>)′ = ⋃A<sub>i</sub>′", legend: [
      "distributive: B ∩ ⋃A<sub>i</sub> = ⋃(B ∩ A<sub>i</sub>) · B ∪ ⋂A<sub>i</sub> = ⋂(B ∪ A<sub>i</sub>)",
      "monotone: decreasing ⇒ union = A₁ · increasing ⇒ intersection = A₁",
      "multiples: A<sub>m</sub> ∩ A<sub>n</sub> = A<sub>lcm(m,n)</sub>, lcm, never the product" ],
      note: "Must-know families: ⋂(0, 1/n) = ∅ · ⋂[0, 1/n] = {0} · ⋃(−n, n) = ℝ · ⋃[n, n+1] = [1, ∞)." },
    { t: "deriv", kicker: "DERIVATION · GENERALISED DE MORGAN, TAP FOR THE WHY", steps: [
      { eq: "x ∈ (⋃<sub>i</sub> A<sub>i</sub>)′ ⟺ x ∉ ⋃<sub>i</sub> A<sub>i</sub>", why: "Definition of complement: the elements of U outside the union." },
      { eq: "⟺ no index i has x ∈ A<sub>i</sub>", why: "The union means “there exists an index with x inside”, negate it." },
      { eq: "⟺ for every i, x ∉ A<sub>i</sub>", why: "The quantifier flip: the negation of “at least one” is “every one fails.” This is the two-set fact “not (P or Q) = (not P) and (not Q)” carried along a whole list." },
      { eq: "⟺ x ∈ ⋂<sub>i</sub> A<sub>i</sub>′", why: "Outside every Aᵢ means inside every complement. Every step is an iff. Shading cannot help here, you cannot draw infinitely many circles; element-chasing with quantifiers is the only proof that survives an infinite index set." } ] },
    { t: "formula", kicker: "THE DOUBLE-COUNTING IDENTITY", tag: "the most productive line", main: "m p = k n(S)", legend: [
      "m sets, each of size p · every element of the union S lies in exactly k of them",
      "general form: Σ n(A<sub>i</sub>) = Σ<sub>x∈S</sub> d(x), count the incidence grid two ways" ],
      note: "Also: n(⋃Aᵢ) ≤ Σn(Aᵢ), equality exactly when pairwise disjoint. Four sets: + singles − pairs + triples − quadruple." },
    { t: "diagram", kind: "grid", kicker: "DIAGRAM · COUNT THE TICKS TWICE, TAP A DIRECTION" },
    { t: "proc", title: "Procedures", steps: [
      "<b>Evaluate ⋃ / ⋂ of intervals:</b> write out A₁, A₂, A₃; spot increasing/decreasing (the table answers monotone families instantly); for the rest, interrogate a general candidate and <b>test the boundary points by substitution</b>, the entire mark is usually a single endpoint.",
      "<b>Reduce a family to one member:</b> one containment check A<sub>n+1</sub> ⊆ A<sub>n</sub> settles infinitely many.",
      "<b>Uniform multiplicity:</b> name m, p, k → write mp = k·n(S) → solve. If a second family shares the union, run it again, the shared n(S) is the bridge." ] },
    { t: "ex", tag: "CBSE BOARD", q: "<i>A<sub>n</sub></i> = multiples of <i>n</i>. Find (i) <i>A</i><sub>3</sub> ∩ <i>A</i><sub>4</sub>, (ii) <i>A</i><sub>3</sub> ∪ <i>A</i><sub>6</sub>, (iii) ⋃<sub>n≥2</sub> <i>A<sub>n</sub></i>, (iv) ⋂<sub>n≥1</sub> <i>A<sub>n</sub></i>.", steps: [
      "(i) common multiples = multiples of lcm(3,4) = 12: A₁₂.",
      "(ii) A₆ ⊆ A₃, and a union with a subset changes nothing: A₃.",
      "(iii) any x ≥ 2 lies in A<sub>x</sub>; 1 lies in none: ℕ − {1}.",
      "(iv) a member would be a multiple of every natural, even of x + 1, forcing x ≥ x + 1: ∅." ],
      ans: "A₁₂ · A₃ · ℕ − {1} · ∅" },
    { t: "ex", tag: "JEE MAIN", q: "<i>A<sub>n</sub></i> = [2 − 1/<i>n</i>, 5 + 1/<i>n</i>]. Find ⋃ and ⋂.", steps: [
      "A₁ = [1, 6], A₂ = [1.5, 5.5], …, left endpoint climbs to 2, right falls to 5: decreasing family.",
      "Union = A₁ = [1, 6] (the largest member).",
      "Intersection: x survives every index ⟺ 2 ≤ x ≤ 5. The endpoints DO belong, each Aₙ contains them comfortably in its interior: [2, 5]." ],
      ans: "⋃ = [1, 6] · ⋂ = [2, 5]" },
    { t: "ex", tag: "JEE MAIN · SPEED TRAP", q: "Find ⋂(0, 1/<i>n</i>) and ⋂[0, 1/<i>n</i>].", steps: [
      "The seductive wrong answer: “they collapse onto 0, so {0} for both.” Right for the second, wrong for the first, <b>the limit-point trap</b>.",
      "(0, 1/n) is open at 0: 0 ∉ Aₙ, not once ⇒ ∅. [0, 1/n] is closed: 0 ∈ every Aₙ ⇒ {0}.",
      "Speed move: test the one suspicious candidate against the bracket next to it. Square: stays. Round: empty. Five seconds." ],
      ans: "⋂(0, 1/n) = ∅ · ⋂[0, 1/n] = {0}" },
    { t: "ex", tag: "JEE ADVANCED", q: "Thirty sets <i>A<sub>i</sub></i>, each of 5 elements; <i>n</i> sets <i>B<sub>j</sub></i>, each of 3. Same union <i>S</i>. Each element of <i>S</i> is in exactly 10 of the <i>A</i>’s and 9 of the <i>B</i>’s. Find <i>n</i>.", steps: [
      "No diagram can help, count incidences.",
      "A-family: by sets 30 × 5 = 150; by elements 10·n(S). So n(S) = 15.",
      "B-family: 3n = 9 × 15 = 135 ⇒ n = 45. The union S, a set nobody described, is the bridge." ],
      ans: "n = 45" },
    { t: "practice", items: [
      { q: "[CBSE] Find A₄ ∩ A₆ and A₂ ∩ A₃ ∩ A₅ (multiples).", a: "A₁₂ and A₃₀, lcm(4,6) = 12; lcm(2,3,5) = 30." },
      { q: "[CBSE] Aᵢ = [i, i + 1]. Find ⋃ and A₃ ∩ A₄.", a: "[1, ∞) and {4}, consecutive bars share one endpoint." },
      { q: "[JEE Main] Find ⋃(−n, n) and ⋂(−n, n).", a: "ℝ and (−1, 1), increasing family, so ⋂ = A₁." },
      { q: "[JEE Main] Find ⋂[3, 3 + 2/n).", a: "{3}, the left endpoint is in every member; any x > 3 fails once 2/n < x − 3." },
      { q: "[JEE Main] Express (⋂Aᵢ)′ via complements.", a: "⋃Aᵢ′, generalises (A ∩ B)′ = A′ ∪ B′." },
      { q: "[JEE Advanced] n(A,B,C,D) = 25, 30, 35, 40; six pairwise = 10 each; four triples = 4 each; quad = 2. Find n(A∪B∪C∪D).", a: "130 − 60 + 16 − 2 = 84, the fourth block is subtracted." },
      { q: "[JEE Advanced] Twelve 6-element sets, union S, each element in exactly 4. Find n(S); then n for 4-element sets with multiplicity 6.", a: "72 = 4n(S) ⇒ n(S) = 18 · 4n = 108 ⇒ n = 27." },
      { q: "[JEE Advanced] Find ⋂<sub>i=1..6</sub> Aᵢ (multiples).", a: "A₆₀, lcm(1, …, 6) = 60." } ] },
    { t: "mcq", q: "⋂<sub>n≥1</sub> [0, 1/<i>n</i>] equals:", correct: 1, opts: [
      { label: "∅", nudge: "That’s the answer for the OPEN family (0, 1/n), check the bracket beside the limit point first." },
      { label: "{0}", nudge: null },
      { label: "[0, 1]", nudge: "That’s the union, the family is decreasing, so ⋃ = A₁ = [0, 1]." },
      { label: "(0, 1)", nudge: "Drops the endpoint AND reports a union-flavoured answer, two errors at once." } ],
      solution: "0 lies in every member (closed bracket); every x > 0 is excluded once 1/n < x." },
    { t: "mcq", q: "For any family, (⋂<sub>i</sub> <i>A<sub>i</sub></i>)′ equals:", correct: 1, opts: [
      { label: "⋂ Aᵢ′", nudge: "Complementation flips the operation, same slip as writing (A ∩ B)′ = A′ ∩ B′." },
      { label: "⋃ Aᵢ′", nudge: null },
      { label: "⋃ Aᵢ", nudge: "The complement vanished, failing “every” must land you among complements." },
      { label: "(⋃ Aᵢ)′", nudge: "That’s ⋂Aᵢ′ in disguise, the flip applied to the wrong operation." } ],
      solution: "Failing to be in every set means failing in at least one, membership of at least one complement: a union." },
    { t: "mcq", q: "Twenty sets, 3 elements each, union <i>S</i>, every element in exactly 5. Then <i>n</i>(<i>S</i>) =", correct: 0, opts: [
      { label: "12", nudge: null },
      { label: "60", nudge: "That’s the incidence total mp, each element was counted five times; divide by the multiplicity." },
      { label: "100", nudge: "20 × 5 multiplies the wrong pair, the multiplicity is not a set size." },
      { label: "4", nudge: "20/5 ignores the size of the sets entirely. Anchor: rows × row-size = columns × column-height." } ],
      solution: "Ticks by sets: 20 × 3 = 60. By elements: 5·n(S). So n(S) = 12." },
    { t: "mcq", q: "With <i>A<sub>n</sub></i> the multiples of <i>n</i>, <i>A</i><sub>4</sub> ∩ <i>A</i><sub>6</sub> equals:", correct: 1, opts: [
      { label: "A₂₄", nudge: "The product works only for coprime indices, and 12 is a common multiple with 12 ∉ A₂₄. One-second check." },
      { label: "A₁₂", nudge: null },
      { label: "A₂", nudge: "The hcf describes the union’s container, not the intersection, it would wrongly admit 2." },
      { label: "A₁₀", nudge: "Adding indices has no basis at all, common multiples run on the lcm." } ],
      solution: "Common multiples of 4 and 6 = multiples of lcm(4, 6) = 12." },
    { t: "mistakes", items: [
      "Treating an infinite intersection as a limit. ⋂(0, 1/n) ≠ {0}, <b>0 belongs to none of them</b>. Check the bracket beside the limit point, every time.",
      "Using the <b>product instead of the lcm</b>: A₄ ∩ A₆ = A₁₂, not A₂₄.",
      "Losing the quantifier flip: complementation always flips ⋃ and ⋂, however long the family.",
      "Dividing by the wrong quantity: the identity is <b>mp = k·n(S)</b>, count the grid two ways and the roles can’t swap.",
      "The last sign of inclusion–exclusion: the r-fold block carries (−1)<sup>r−1</sup>, with four sets, <b>the final term is subtracted</b>.",
      "Forgetting the sandwich: ⋂ ⊆ Aⱼ ⊆ ⋃ for every j, test your answer against A₁ before writing it." ] },
    { t: "protip", html: "never manipulate a family symbolically when you can interrogate a single candidate. pick the one suspicious number, the limit point, the endpoint, the element 1, and ask “is it in A₁? in all of them?” three membership tests settle almost every JEE Main question here." },
    { t: "snapshot", rows: [
      { f: "⋃ = at least one · ⋂ = every one", note: "sandwich: ⋂ ⊆ Aⱼ ⊆ ⋃" },
      { f: "(⋃Aᵢ)′ = ⋂Aᵢ′ · (⋂Aᵢ)′ = ⋃Aᵢ′", note: "De Morgan survives infinity" },
      { f: "decreasing ⇒ ⋃ = A₁ · increasing ⇒ ⋂ = A₁", note: "one containment check settles all" },
      { f: "⋂(0, 1/n) = ∅ · ⋂[0, 1/n] = {0}", note: "brackets decide everything" },
      { f: "A_m ∩ A_n = A_lcm(m,n)", note: "lcm for the cap, never the product" },
      { f: "mp = k·n(S)", note: "count the ticks twice" } ],
      aids: [ "“shrinking is not arriving”", "“odd blocks plus, even blocks minus”" ] } ] }
]};
