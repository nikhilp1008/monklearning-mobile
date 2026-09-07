/**
 * Chapter 01 · Relations and Functions, Mathematics, Class 12.
 *
 * Restructured from the Drona Class 12 Mathematics Master Reference (pages 8
 * to 90) into the block system in design_handoff_textbooks/CONTENT_SPEC.md,
 * matching the voice and density of math-11-02-relations.ts.
 *
 * Editorial decisions worth recording:
 *
 * 1. The source is two documents stacked, not the usual three. The front
 *    matter promises "a supplement and a Round 2 addendum" per chapter, but
 *    Chapter 01's own contents page lists no supplement: Subtopics 01 to 07
 *    run straight through pages 9 to 66, and the supplementary material is
 *    Subtopics 04 to 07 themselves, appended rather than titled. So what has
 *    to be folded is Subtopics 01 to 07 (pages 9 to 66)
 *    and a Round 2 Addendum of seven inserts (A equivalence classes, B
 *    composition transfer laws, C inverses on restricted domains, D symmetry
 *    axes and periods, E counting maps, F iterates and cycles, P a
 *    previous-year analysis). The addenda are written as inserts into existing
 *    subtopics, so they are folded rather than given topics of their own: A
 *    into the equivalence topic, E and Archetype C into the counting topic, B
 *    into composition, C and Archetype E into inverses, D and F into the
 *    closing topic on iterates. Addendum P is not a topic either; its
 *    distribution table feeds the hook, its archetypes feed the worked
 *    examples, and its ten engineered traps feed the `mistakes` cards.
 *
 * 2. Four of the seven subtopics are dropped, because the Class 11 chapter of
 *    the same name already teaches them and the brief for this book is that
 *    Class 12 assumes Class 11 and moves on. Subtopic 04 (domain and range),
 *    05 (standard real functions and their graphs), 06 (even, odd, periodic)
 *    and 07 (algebra of functions and functional equations) are all covered in
 *    math-11-02-relations.ts, topics 05 and 06, down to the same discriminant
 *    method, the same floor and fractional-part identities, the same parity
 *    algebra and the same four standard functional equations. What survives
 *    from them is the material Class 11 genuinely does not carry: Addendum D's
 *    pipeline from a symmetry axis or a recurrence to a period, which is a
 *    different skill from finding the period of a formula, and it is folded
 *    into topic 06 alongside iterates.
 *
 * 3. The hook is merged, as in every chapter here. The source carries an
 *    "Exam Relevance" panel per subtopic and a question-distribution table in
 *    Addendum P; the reader renders `hook` on topic 1 only, so all of it is
 *    gathered into that single accordion under six headings, one per topic.
 *
 * 4. Six `diagram` blocks: five `plot` and one `tree`. The relation as points
 *    on the A × A lattice does the work the source's Figure 1.1 directed-graph
 *    panels do, and does it better, because reflexivity is then literally the
 *    diagonal and symmetry is literally a mirror in y = x. The horizontal line
 *    test, the range against the codomain, a function beside its inverse
 *    mirrored in y = x, the domain filter on a composite, and two symmetry
 *    axes forcing a period are all `plot`. The counting tree draws the
 *    multiplication principle behind m^n and mPn, which no curve can.
 *
 * ERRATA APPLIED (source pages 830 to 832, Chapter 1 entries, both of them
 * production clipping rather than mathematics):
 *
 *   - Page 14, Example 1: the set R is printed truncated after "(1, 2), (".
 *     The full set is R = {(1,1), (2,2), (3,3), (4,4), (1,2), (2,1), (3,4)}.
 *     Not reproduced here in any case; the example is a Class 11 exercise.
 *   - Page 43, Example 4: the domain chain is clipped after "x >". It ends
 *     "x > −1", and Dom(f) = (2, ∞) is unaffected.
 *
 * CORRECTIONS BEYOND THE ERRATA (found while re-solving; the corrected value
 * is what this chapter teaches):
 *
 *   - Page 89, Practice Q8: the domain of f(x) = log base (1 − x) of (x + 2)
 *     is printed as [−2, 1) ∖ {0}. The left endpoint is wrong: at x = −2 the
 *     argument x + 2 is 0 and the logarithm is undefined. The domain is
 *     (−2, 1) ∖ {0}. The book's own working says "x + 2 > 0 ⇒ x > −2", so the
 *     square bracket contradicts the line above it.
 *   - Page 87, Archetype H (JEE 1982): the surviving case is correctly
 *     identified as "f(z) ≠ 2 is true", and then the assignment printed is
 *     "f(y) = 1, f(z) = 2, f(x) = 3", which makes the very statement just
 *     declared true false, and is self-contradictory. The correct assignment
 *     is f(x) = 2, f(y) = 1, f(z) = 3. The answer f⁻¹(1) = y is unaffected.
 *   - Page 77, Example D.2: for a non-constant f with f(x + 3) = 1 − f(x) the
 *     book concludes the fundamental period is 6. That overreaches. Six is a
 *     period, and 3 is not, but 6 need not be the smallest: f(x) = 1/2 +
 *     (1/2)cos(πx) is non-constant, satisfies the recurrence, and has
 *     fundamental period 2. This chapter teaches "6 is a period, and 3 is
 *     not", which is what the recurrence actually gives.
 */
import type { Chapter } from '@/lib/textbooks';

export const ch12Relations: Chapter = {
  "chapter": "01",
  "title": "Relations and Functions",
  "subject": "Mathematics",
  "klass": "Class 12",
  "topics": [
    {
      "n": "01",
      "title": "Equivalence Relations: Proof, Completion, Count",
      "chip": "01 EQUIVALENCE",
      "kalam": "one relation in, one clean partition out",
      "blocks": [
        {
          "t": "hook",
          "html": "<b>01 · Equivalence Relations: Proof, Completion, Count</b><br>A guaranteed scorer. CBSE Boards almost always carry a 1 mark definition or a 3 to 5 mark <b>“show that <i>R</i> is an equivalence relation”</b> proof, with “find the equivalence class of…” as its standing follow-up. JEE Main asks one objective question on classifying a given relation or counting relations. JEE Advanced layers it with classes, partitions and counting, often multi-correct. Relations are about 12 percent of the previous-year bank and almost all of those questions are post-2013, so the trend is upward. CUET tests direct classification. Not in NEET, the medical paper has no mathematics section.<br><br><b>02 · One-One, Onto and Bijective</b><br>The single biggest block in the bank, roughly 30 percent, and it appears in every decade without exception. CBSE reliably asks a 3 to 5 mark “show that <i>f</i> is bijective” proof. JEE Main carries 1 to 2 MCQs classifying a function or manipulating its codomain. JEE Advanced runs it through calculus: sign charts of <i>f</i>′ for one-one, the intermediate value theorem for onto, and a restricted interval with a suspiciously well-chosen codomain.<br><br><b>03 · Counting Functions and Maps</b><br>About 12 percent of the bank, and rising, because it is the cleanest way to write a numerical-answer question. JEE Main asks straight counts of one-one and onto maps; JEE Advanced adds a constraint (“exactly three elements map to <i>y</i><sub>2</sub>”) or asks you to compare two counts. The traps are always the same two: <i>m</i><sup>n</sup> where <sup>m</sup><i>P<sub>n</sub></i> belongs, and ignoring feasibility.<br><br><b>04 · Composition of Functions</b><br>Composition and inverse together are about 25 percent of the bank. CBSE routinely asks a 3 to 4 mark “find <i>f</i> ∘ <i>g</i> and <i>g</i> ∘ <i>f</i>”. JEE Main tests composite evaluation and the order-reversal law. JEE Advanced asks for the transfer-law proofs, for counterexamples killing their converses, and for two skills the board syllabus skips entirely: the domain of a composite, and recovering <i>f</i> from a formula for <i>f</i> ∘ <i>g</i>.<br><br><b>05 · Inverse Functions and Restricted Domains</b><br>The other half of that 25 percent. CBSE asks “find <i>f</i><sup>−1</sup> and verify it”. JEE Main asks which functions are invertible, which is the bijectivity question wearing a hat. JEE Advanced lives on <b>branch discipline</b>: solving <i>y</i> = <i>f</i>(<i>x</i>) throws up two roots and the stated domain kills one, and the discarded root is always offered as an option.<br><br><b>06 · Iterates, Cycles and Periods from a Rule</b><br>A JEE Advanced signature that the board syllabus never names. Asked as <i>f</i><sup>2023</sup>(<i>x</i>) or <i>f</i>(2025), where brute force is hopeless and the cycle length is everything. The companion pattern is a function described only by a rule, two symmetry axes or a recurrence, from which a period has to be dug out. Periodicity questions are about 10 percent of the bank and this is the half of them Class 11 does not cover."
        },
        {
          "t": "p",
          "html": "Class 11 gave you the three properties and the picture they paint: <b>reflexive</b>, <b>symmetric</b>, <b>transitive</b>, and a relation with all three chops a set into non-overlapping blocks. Class 12 asks three harder things of the same idea. <b>Prove</b> that a relation given by a formula has all three. <b>Complete</b> a relation that does not, to the smallest one that does. And <b>count</b> how many such relations a finite set admits. Every one of those is worth marks the recognition question is not."
        },
        {
          "t": "p",
          "html": "Start with the relation every proof in this chapter is modelled on. Fix a positive integer <i>n</i> and, on ℤ, declare <i>a</i> related to <i>b</i> exactly when <b><i>a</i> − <i>b</i> is divisible by <i>n</i></b>. This is <b>congruence modulo <i>n</i></b>, and it is the archetype: if you can write its proof cold, you can write the proof for almost any relation an examiner hands you, because the moves are the same three moves."
        },
        {
          "t": "think",
          "html": "you already use it. a clock face works modulo 12: 15:00 and 3:00 are the same position of the hand, because 15 − 3 = 12 is divisible by 12. the dial has exactly twelve places, and every hour of every day gets sorted into one of them. those twelve places are the equivalence classes, and the clock is a partition of ℤ you have been reading since you were five."
        },
        {
          "t": "def",
          "term": "Congruence modulo n",
          "html": "For a fixed positive integer <i>n</i>, the relation on ℤ given by <b><i>a R b</i> ⟺ (<i>a</i> − <i>b</i>) is divisible by <i>n</i></b>, written <i>a</i> ≡ <i>b</i> (mod <i>n</i>). It is an equivalence relation, and its classes are the <b>residue classes</b> [0], [1], …, [<i>n</i> − 1], one per remainder, which partition ℤ into exactly <i>n</i> buckets."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · CONGRUENCE MOD n IS AN EQUIVALENCE, TAP A LINE",
          "steps": [
            {
              "eq": "a − a = 0 = n · 0, so a R a for every a ∈ ℤ",
              "why": "Reflexivity. Zero is divisible by every integer, so every integer trivially relates to itself. Notice that the proof does not depend on n at all, which is why reflexivity is the cheap step and the one an examiner expects in a single line."
            },
            {
              "eq": "a − b = nk ⟹ b − a = −(a − b) = n(−k)",
              "why": "Symmetry. Assume the relation holds one way, which means a − b is n times some integer k. Flipping the order flips the sign, and −k is still an integer, so divisibility survives. Divisibility never cares about sign."
            },
            {
              "eq": "a − b = nk₁ and b − c = nk₂ ⟹ a − c = n(k₁ + k₂)",
              "why": "Transitivity. Add the two given equations: a − c = (a − b) + (b − c), and the middle term b cancels. A sum of multiples of n is a multiple of n, and k₁ + k₂ is an integer, so the shortcut holds. That cancellation of the middle term is the whole trick."
            },
            {
              "eq": "classes [0], [1], …, [n − 1] partition ℤ",
              "why": "All three hold, so R is an equivalence relation, and the classes are named by the remainder on division by n. Two integers share a class exactly when they share a remainder, and there are exactly n remainders, so ℤ splits into n infinite arithmetic progressions of common difference n."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · THE PROPERTIES AS A PICTURE, TAP ONE",
          "chips": ["reflexive", "symmetric", "transitive", "equivalence"],
          "captions": [
            "A = {1, 2, 3, 4}, so a relation on A is a choice of dots from this 4 by 4 grid. Reflexive means one thing and nothing else: every dot on the diagonal y = x is filled. Four dots, no exceptions. Miss one and the relation is not reflexive, whatever else it does.",
            "Symmetry is a mirror in the dashed line y = x. Here (1, 2) and (2, 1) are both filled, and so are (3, 4) and (4, 3). Reflect the filled dots in the diagonal and you must land on filled dots again. One unreciprocated dot and symmetry is gone.",
            "Transitivity is closure of chains. The dots (1, 2) and (2, 3) chain, the second coordinate of one matching the first of the other, so the shortcut (1, 3) is forced to be filled. Leave that dot empty and transitivity fails, and no other dot can save it.",
            "All three at once, and the picture snaps into blocks. The classes are {1, 2} and {3, 4}, and the filled dots are exactly the two shaded squares: everything inside a block relates to everything in it, and nothing across. That block structure is what an equivalence relation always looks like."
          ],
          "frames": [
            {
              "x": [0, 5],
              "y": [0, 5],
              "curves": [{ "c": "line", "m": 1, "k": 0, "dash": true, "soft": true }],
              "points": [
                { "x": 1, "y": 2, "soft": true }, { "x": 1, "y": 3, "soft": true }, { "x": 1, "y": 4, "soft": true },
                { "x": 2, "y": 1, "soft": true }, { "x": 2, "y": 3, "soft": true }, { "x": 2, "y": 4, "soft": true },
                { "x": 3, "y": 1, "soft": true }, { "x": 3, "y": 2, "soft": true }, { "x": 3, "y": 4, "soft": true },
                { "x": 4, "y": 1, "soft": true }, { "x": 4, "y": 2, "soft": true }, { "x": 4, "y": 3, "soft": true },
                { "x": 1, "y": 1 }, { "x": 2, "y": 2 }, { "x": 3, "y": 3 }, { "x": 4, "y": 4 }
              ],
              "labels": [{ "x": 1.4, "y": 4.6, "text": "the diagonal", "soft": true }]
            },
            {
              "x": [0, 5],
              "y": [0, 5],
              "curves": [{ "c": "line", "m": 1, "k": 0, "dash": true, "soft": true }],
              "points": [
                { "x": 1, "y": 1, "soft": true }, { "x": 1, "y": 3, "soft": true }, { "x": 1, "y": 4, "soft": true },
                { "x": 2, "y": 2, "soft": true }, { "x": 2, "y": 3, "soft": true }, { "x": 2, "y": 4, "soft": true },
                { "x": 3, "y": 1, "soft": true }, { "x": 3, "y": 2, "soft": true }, { "x": 3, "y": 3, "soft": true },
                { "x": 4, "y": 1, "soft": true }, { "x": 4, "y": 2, "soft": true }, { "x": 4, "y": 4, "soft": true },
                { "x": 1, "y": 2 }, { "x": 2, "y": 1 }, { "x": 3, "y": 4 }, { "x": 4, "y": 3 }
              ],
              "labels": [{ "x": 1.5, "y": 4.6, "text": "mirror in y = x", "soft": true }]
            },
            {
              "x": [0, 5],
              "y": [0, 5],
              "curves": [{ "c": "line", "m": 1, "k": 0, "dash": true, "soft": true }],
              "points": [
                { "x": 1, "y": 1, "soft": true }, { "x": 1, "y": 4, "soft": true },
                { "x": 2, "y": 1, "soft": true }, { "x": 2, "y": 2, "soft": true }, { "x": 2, "y": 4, "soft": true },
                { "x": 3, "y": 1, "soft": true }, { "x": 3, "y": 2, "soft": true }, { "x": 3, "y": 3, "soft": true }, { "x": 3, "y": 4, "soft": true },
                { "x": 4, "y": 1, "soft": true }, { "x": 4, "y": 2, "soft": true }, { "x": 4, "y": 3, "soft": true }, { "x": 4, "y": 4, "soft": true },
                { "x": 1, "y": 2 }, { "x": 2, "y": 3 }, { "x": 1, "y": 3, "label": "forced" }
              ],
              "labels": [{ "x": 3.6, "y": 0.5, "text": "chain closes", "soft": true }]
            },
            {
              "x": [0, 5],
              "y": [0, 5],
              "bands": [
                { "x0": 0.6, "x1": 2.4, "y0": 0.6, "y1": 2.4 },
                { "x0": 2.6, "x1": 4.4, "y0": 2.6, "y1": 4.4 }
              ],
              "curves": [{ "c": "line", "m": 1, "k": 0, "dash": true, "soft": true }],
              "points": [
                { "x": 1, "y": 3, "soft": true }, { "x": 1, "y": 4, "soft": true },
                { "x": 2, "y": 3, "soft": true }, { "x": 2, "y": 4, "soft": true },
                { "x": 3, "y": 1, "soft": true }, { "x": 3, "y": 2, "soft": true },
                { "x": 4, "y": 1, "soft": true }, { "x": 4, "y": 2, "soft": true },
                { "x": 1, "y": 1 }, { "x": 1, "y": 2 }, { "x": 2, "y": 1 }, { "x": 2, "y": 2 },
                { "x": 3, "y": 3 }, { "x": 3, "y": 4 }, { "x": 4, "y": 3 }, { "x": 4, "y": 4 }
              ],
              "labels": [{ "x": 3.6, "y": 0.5, "text": "two blocks", "soft": true }]
            }
          ]
        },
        {
          "t": "proc",
          "title": "The equivalence proof, written the way it is marked",
          "steps": [
            "<b>Name the relation precisely, then do reflexivity first.</b> Write “let <i>a</i> ∈ <i>A</i>” and produce the one-line reason why <i>a R a</i>. It is the cheapest check and the most common killer, so a missing self-pair saves you the other two paragraphs entirely.",
            "<b>Symmetry: assume, then transform.</b> Write “suppose <i>a R b</i>”, convert that into an equation, apply the one operation that reverses it (a sign flip, a swap of sides, a reciprocal), and read the conclusion back as <i>b R a</i>. Never verify pair by pair; symmetry is an if-then, so you assume the if.",
            "<b>Transitivity: assume two, add or multiply, conclude one.</b> Write “suppose <i>a R b</i> and <i>b R c</i>”, write both as equations, and combine them so that <b><i>b</i> cancels</b>. That cancellation is the entire content of almost every transitivity proof on the syllabus.",
            "<b>Close with the verdict, then the classes if asked.</b> “All three hold, hence <i>R</i> is an equivalence relation.” If the question continues, pick a representative <i>a</i>, write [<i>a</i>] = {<i>x</i> : <i>x R a</i>} and simplify it into a description, not a list, when <i>A</i> is infinite.",
            "<b>If a property fails, produce one counterexample and stop.</b> A single explicit triple kills transitivity; a single unreciprocated pair kills symmetry. Examiners award the counterexample, not the paragraph explaining why you could not find a proof."
          ]
        },
        {
          "t": "p",
          "html": "One habit doubles your speed on the relations that come dressed as an identity: <b>simplify the defining condition before you test anything</b>. On ℝ, let <i>P</i> = {(<i>a</i>, <i>b</i>) : sec<sup>2</sup><i>a</i> − tan<sup>2</sup><i>b</i> = 1}. It looks like a trigonometry problem. Use sec<sup>2</sup><i>a</i> = 1 + tan<sup>2</sup><i>a</i> and the condition collapses to <b>tan<sup>2</sup><i>a</i> = tan<sup>2</sup><i>b</i></b>, which is visibly reflexive, symmetric and transitive because it is an equality between two computed numbers. The trigonometry was scenery."
        },
        {
          "t": "p",
          "html": "The same habit exposes the traps. On ℕ, <i>R</i> = {(<i>x</i>, <i>y</i>) : <i>x</i><sup>2</sup> − 4<i>xy</i> + 3<i>y</i><sup>2</sup> = 0} factors as (<i>x</i> − <i>y</i>)(<i>x</i> − 3<i>y</i>) = 0, so <i>x</i> = <i>y</i> or <i>x</i> = 3<i>y</i>. Reflexive, yes. Symmetric, no: (3, 1) qualifies and (1, 3) does not. Transitive? Most students check the chains through the <i>x</i> = <i>y</i> branch, find nothing broken, and answer yes. But (9, 3) and (3, 1) are both in <i>R</i> while (9, 1) is not, since 81 − 36 + 3 = 48. <b>The chains through the tripling branch are where the marks hide</b>, and the compendium's own printed answer to this question gets it wrong."
        },
        {
          "t": "defgrid",
          "title": "What the classes guarantee",
          "rows": [
            {
              "k": "Never empty",
              "v": "reflexivity gives <i>a</i> ∈ [<i>a</i>], so no class is ∅ and every element supplies one"
            },
            {
              "k": "Disjoint or identical",
              "v": "[<i>a</i>] ∩ [<i>b</i>] ≠ ∅ ⇒ [<i>a</i>] = [<i>b</i>]. There is <b>no</b> partial overlap"
            },
            {
              "k": "They cover A",
              "v": "the union of all classes is <i>A</i>, so the distinct classes <b>partition</b> <i>A</i>"
            },
            {
              "k": "Membership test",
              "v": "<i>x R y</i> ⟺ [<i>x</i>] = [<i>y</i>]. Related elements share <b>one</b> class, they do not merely meet"
            },
            {
              "k": "The converse",
              "v": "every partition of <i>A</i> defines an equivalence relation, “same block as”, whose classes are its blocks"
            },
            {
              "k": "So counting is counting partitions",
              "v": "equivalence relations on <i>A</i> ↔ partitions of <i>A</i>, and there are <i>B<sub>n</sub></i> of them"
            }
          ]
        },
        {
          "t": "proc",
          "title": "Completing R to the smallest equivalence relation",
          "steps": [
            "<b>Draw an undirected graph on <i>A</i>.</b> Join <i>a</i> to <i>b</i> whenever (<i>a</i>, <i>b</i>) ∈ <i>R</i> with <i>a</i> ≠ <i>b</i>. Ignore the loops (<i>a</i>, <i>a</i>) entirely: they carry no information about which elements must merge.",
            "<b>Find the connected components</b> <i>C</i><sub>1</sub>, <i>C</i><sub>2</sub>, …, following chains of edges as far as they go. Every isolated element is its own component of size 1.",
            "<b>The answer is the union of <i>C<sub>i</sub></i> × <i>C<sub>i</sub></i>.</b> Inside a component everything relates to everything; across components, nothing. That is exactly the partition whose blocks are the components.",
            "<b>Count what you must add:</b> Σ |<i>C<sub>i</sub></i>|<sup>2</sup> − <i>n</i>(<i>R</i>). Square each component size, add, and subtract the pairs already present.",
            "<b>Know why it is forced.</b> Symmetry walks any chain of <i>R</i>-pairs backwards and transitivity collapses it, so any equivalence relation containing <i>R</i> must contain every pair inside a component. Nothing smaller survives, and nothing larger is needed."
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE COMPLETION COUNT",
          "tag": "components C1, C2, … of the graph of R",
          "main": "pairs to add = Σ |C<sub>i</sub>|<sup>2</sup> − n(R)",
          "legend": [
            "the completed relation is <i>C</i><sub>1</sub> × <i>C</i><sub>1</sub> ∪ <i>C</i><sub>2</sub> × <i>C</i><sub>2</sub> ∪ ⋯, with Σ |<i>C<sub>i</sub></i>|<sup>2</sup> pairs in total",
            "a lone element contributes a component of size 1 and therefore exactly its own pair (<i>a</i>, <i>a</i>)"
          ],
          "note": "Answering 0 is legitimate and is examined: if R is already an equivalence relation, adding “helpful” pairs over-merges the classes and is wrong."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · COUNTING EQUIVALENCE RELATIONS",
          "tag": "n = n(A), S(n, k) partitions into exactly k blocks",
          "main": "B<sub>n</sub> = S(n, 1) + S(n, 2) + ⋯ + S(n, n)",
          "legend": [
            "Bell numbers: <i>B</i><sub>1</sub> = 1, <i>B</i><sub>2</sub> = 2, <i>B</i><sub>3</sub> = 5, <i>B</i><sub>4</sub> = 15, <i>B</i><sub>5</sub> = 52. Know the first five cold",
            "recurrences: <i>S</i>(<i>n</i>, <i>k</i>) = <i>k S</i>(<i>n</i> − 1, <i>k</i>) + <i>S</i>(<i>n</i> − 1, <i>k</i> − 1) · <i>S</i>(<i>n</i>, 2) = 2<sup>n−1</sup> − 1 · <i>S</i>(<i>n</i>, <i>n</i> − 1) = <sup>n</sup><i>C</i><sub>2</sub>"
          ],
          "note": "There is no power-of-two formula, because transitivity ties distant pairs together. Counting equivalence relations is always counting partitions."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE STIRLING RECURRENCE, TAP A LINE",
          "steps": [
            {
              "eq": "watch the last element, n",
              "why": "Every partition of {1, …, n} into k blocks does exactly one of two things with the element n. Either n sits alone in its own block, or it joins a block containing other elements. The two cases cannot both happen, and nothing else can, so the counts simply add."
            },
            {
              "eq": "n alone: S(n − 1, k − 1)",
              "why": "If {n} is a block by itself, the remaining n − 1 elements must fill the other k − 1 blocks, and every such partition gives exactly one partition of the whole set. So this case contributes S(n − 1, k − 1)."
            },
            {
              "eq": "n joins someone: k · S(n − 1, k)",
              "why": "Otherwise, remove n and what is left is a partition of n − 1 elements into all k blocks. Putting n back means choosing which of those k blocks receives it, and every choice gives a different partition. Multiply by k."
            },
            {
              "eq": "S(n, k) = k S(n − 1, k) + S(n − 1, k − 1)",
              "why": "Both moves are reversible, so nothing is counted twice and nothing is missed. Sum over k to get the Bell number: B_n counts partitions with any number of blocks, and partitions are exactly what equivalence relations are."
            }
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Show that <i>R</i> on ℤ given by <i>a R b</i> ⟺ (<i>a</i> − <i>b</i>) is divisible by 3 is an equivalence relation, and write its equivalence classes.",
          "steps": [
            "Reflexive: <i>a</i> − <i>a</i> = 0 = 3 · 0, divisible by 3. So <i>a R a</i> for every integer <i>a</i>.",
            "Symmetric: if <i>a</i> − <i>b</i> = 3<i>k</i> then <i>b</i> − <i>a</i> = 3(−<i>k</i>), and −<i>k</i> ∈ ℤ. So <i>b R a</i>.",
            "Transitive: if <i>a</i> − <i>b</i> = 3<i>k</i><sub>1</sub> and <i>b</i> − <i>c</i> = 3<i>k</i><sub>2</sub>, add them so <i>b</i> cancels: <i>a</i> − <i>c</i> = 3(<i>k</i><sub>1</sub> + <i>k</i><sub>2</sub>). So <i>a R c</i>.",
            "Classes: [0] = {…, −3, 0, 3, 6, …}, [1] = {3<i>k</i> + 1}, [2] = {3<i>k</i> + 2}. Three classes, one per remainder, and [3] = [0]."
          ],
          "ans": "An equivalence relation, with exactly 3 classes: [0], [1], [2]"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN · SPEED TRAP",
          "q": "On ℝ, <i>P</i> = {(<i>a</i>, <i>b</i>) : sec<sup>2</sup><i>a</i> − tan<sup>2</sup><i>b</i> = 1}. Classify <i>P</i> without testing a single numeric pair.",
          "steps": [
            "Simplify first. sec<sup>2</sup><i>a</i> = 1 + tan<sup>2</sup><i>a</i>, so the condition reads 1 + tan<sup>2</sup><i>a</i> − tan<sup>2</sup><i>b</i> = 1.",
            "That is tan<sup>2</sup><i>a</i> = tan<sup>2</sup><i>b</i>: an equality between two numbers computed from <i>a</i> and from <i>b</i> separately.",
            "Any relation of the form <i>g</i>(<i>a</i>) = <i>g</i>(<i>b</i>) is automatically reflexive (<i>g</i>(<i>a</i>) = <i>g</i>(<i>a</i>)), symmetric (equality reads both ways) and transitive (equalities chain)."
          ],
          "ans": "An equivalence relation, settled by one identity. Always simplify the defining condition first"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "<i>A</i> = {1, 2, 3, 4} and <i>R</i> = {(1, 2), (2, 3), (4, 4)}. Find the minimum number of ordered pairs to add so that <i>R</i> becomes an equivalence relation.",
          "steps": [
            "Graph: the edges 1 to 2 and 2 to 3 chain into one component {1, 2, 3}. The loop (4, 4) is not an edge, so 4 is isolated: {4}.",
            "The smallest equivalence relation is {1, 2, 3} × {1, 2, 3} ∪ {4} × {4}: 3<sup>2</sup> + 1<sup>2</sup> = 10 pairs.",
            "Already present: 3 pairs. So add 10 − 3 = 7, namely (1,1), (2,2), (3,3), (2,1), (1,3), (3,1), (3,2).",
            "Check it is forced: any equivalence relation with (1, 2) and (2, 3) must, by symmetry and transitivity, contain all nine pairs on {1, 2, 3}."
          ],
          "ans": "7 pairs. Components first, square the sizes, subtract what is already there"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "For <i>A</i> = {1, 2, 3, 4}: (i) how many equivalence relations are there, (ii) how many place 1 and 2 in the same class, (iii) how many have exactly two classes?",
          "steps": [
            "(i) Count partitions by block count. Four singletons: 1. One pair and two singletons: <sup>4</sup><i>C</i><sub>2</sub> = 6. Two blocks: 1 + 3 gives 4, and 2 + 2 gives <sup>4</sup><i>C</i><sub>2</sub>/2 = 3, so 7. One block: 1. Total 1 + 6 + 7 + 1 = 15 = <i>B</i><sub>4</sub>.",
            "(ii) Forcing 1 and 2 together glues them into a single object, leaving three objects {1, 2}, 3, 4 to partition freely: <i>B</i><sub>3</sub> = 5. So 5 together, 15 − 5 = 10 apart.",
            "(iii) Exactly two classes is <i>S</i>(4, 2) = 2<sup>3</sup> − 1 = 7, matching the 4 + 3 counted in (i)."
          ],
          "ans": "15 · 5 same class and 10 different · 7 with exactly two classes"
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] On ℤ, <i>a R b</i> ⟺ <i>a</i> + <i>b</i> is even. Show <i>R</i> is an equivalence relation and count its classes.",
              "a": "<i>a</i> + <i>a</i> = 2<i>a</i> is even; <i>a</i> + <i>b</i> = <i>b</i> + <i>a</i>; if <i>a</i> + <i>b</i> and <i>b</i> + <i>c</i> are even then <i>a</i> + <i>c</i> = (<i>a</i> + <i>b</i>) + (<i>b</i> + <i>c</i>) − 2<i>b</i> is even. Two classes: the evens and the odds."
            },
            {
              "q": "[CUET] On <i>A</i> = {1, 2, 3}, <i>R</i> = {(1, 2), (2, 1), (1, 3)}. Minimum pairs to add for an equivalence relation?",
              "a": "The edges 1 to 2 and 1 to 3 make one component {1, 2, 3}, so the completion is all 9 pairs. 9 − 3 = <b>6</b> pairs to add."
            },
            {
              "q": "[JEE Main] How many equivalence relations on {1, 2, 3, 4} have [1] = {1, 2}?",
              "a": "2. The block {1, 2} is fixed, and the rest, {3, 4}, may be partitioned in <i>B</i><sub>2</sub> = 2 ways: together or separately."
            },
            {
              "q": "[JEE Main] Write the equivalence relation arising from the partition {{1, 4}, {2, 3}} of {1, 2, 3, 4}.",
              "a": "{(1,1), (4,4), (1,4), (4,1), (2,2), (3,3), (2,3), (3,2)}, eight pairs: each block contributes its own full square."
            },
            {
              "q": "[JEE Advanced] How many equivalence relations on a 5-element set have exactly three classes?",
              "a": "<i>S</i>(5, 3) = 3<i>S</i>(4, 3) + <i>S</i>(4, 2) = 3(6) + 7 = <b>25</b>. Check by block pattern: 3+1+1 gives <sup>5</sup><i>C</i><sub>3</sub> = 10, and 2+2+1 gives 5 × 3 = 15."
            }
          ]
        },
        {
          "t": "mcq",
          "q": "On ℕ, <i>R</i> = {(<i>x</i>, <i>y</i>) : <i>x</i><sup>2</sup> − 4<i>xy</i> + 3<i>y</i><sup>2</sup> = 0}. Then <i>R</i> is:",
          "correct": 2,
          "opts": [
            {
              "label": "an equivalence relation",
              "nudge": "Reflexivity is the only property it has. Factoring gives <i>x</i> = <i>y</i> or <i>x</i> = 3<i>y</i>, and the tripling branch is one-way."
            },
            {
              "label": "reflexive and transitive but not symmetric",
              "nudge": "The tempting one, and the printed answer in some solution keys. It fails: (9, 3) and (3, 1) are both in <i>R</i> while (9, 1) is not, since 81 − 36 + 3 = 48."
            },
            { "label": "reflexive but neither symmetric nor transitive", "nudge": null },
            {
              "label": "symmetric and transitive but not reflexive",
              "nudge": "Backwards. <i>x</i> = <i>y</i> always satisfies the equation, so every (<i>a</i>, <i>a</i>) is in <i>R</i> and reflexivity is the one property that certainly holds."
            }
          ],
          "solution": "Factor: (x − y)(x − 3y) = 0, so x = y or x = 3y. Reflexive since x = x. Not symmetric: (3, 1) ∈ R, (1, 3) ∉ R. Not transitive: (9, 3) and (3, 1) are in R but (9, 1) is not. Chains through the tripling branch are where this question is won."
        },
        {
          "t": "mcq",
          "q": "<i>A</i> = {1, 2, 3, 4} and <i>R</i> = {(1, 3), (3, 1), (2, 2)}. The minimum number of ordered pairs to add to make <i>R</i> an equivalence relation is:",
          "correct": 0,
          "opts": [
            { "label": "3", "nudge": null },
            {
              "label": "4",
              "nudge": "One pair too many, usually (1, 2) or (2, 4). Nothing joins 2 or 4 to anything, so no pair across those components is forced."
            },
            {
              "label": "6",
              "nudge": "Σ |<i>C<sub>i</sub></i>|<sup>2</sup> = 4 + 1 + 1 = 6 is the <b>size</b> of the completed relation, not the number of pairs missing from it. Subtract the three already present."
            },
            {
              "label": "7",
              "nudge": "That is the answer when the largest component has size 3. Here only 1 and 3 are joined by an edge, so the components are {1, 3}, {2} and {4}."
            }
          ],
          "solution": "The graph has one edge, 1 to 3, so the components are {1, 3}, {2} and {4}. The completion is {(1,1), (1,3), (3,1), (3,3), (2,2), (4,4)}: Σ|C|² = 4 + 1 + 1 = 6 pairs. Three of them, (1,3), (3,1) and (2,2), are already in R, so the pairs to add are (1,1), (3,3) and (4,4). Three."
        },
        {
          "t": "mcq",
          "q": "On ℝ, <i>R</i> = {(<i>a</i>, <i>b</i>) : |<i>a</i> − <i>b</i>| ≤ 1}. Then <i>R</i> is:",
          "correct": 0,
          "opts": [
            { "label": "reflexive and symmetric but not transitive", "nudge": null },
            {
              "label": "an equivalence relation",
              "nudge": "Closeness relations almost never survive transitivity: 0 is within 1 of 1, and 1 is within 1 of 2, but 0 is 2 away from 2. Small gaps accumulate."
            },
            {
              "label": "symmetric and transitive but not reflexive",
              "nudge": "|<i>a</i> − <i>a</i>| = 0 ≤ 1, so reflexivity is the one property that never fails here."
            },
            {
              "label": "transitive but not symmetric",
              "nudge": "Both verdicts are inverted. |<i>a</i> − <i>b</i>| = |<i>b</i> − <i>a</i>|, so symmetry is automatic, and transitivity is exactly what breaks."
            }
          ],
          "solution": "|a − a| = 0 ≤ 1 gives reflexive. |a − b| = |b − a| gives symmetric. Take a = 0, b = 1, c = 2: |0 − 1| ≤ 1 and |1 − 2| ≤ 1, but |0 − 2| = 2 > 1. One counterexample and transitivity is gone."
        },
        {
          "t": "mcq",
          "q": "The number of equivalence relations on a set with 5 elements that have <b>exactly two</b> classes is:",
          "correct": 2,
          "opts": [
            {
              "label": "10",
              "nudge": "<sup>5</sup>C<sub>2</sub> = 10 counts only the splits into blocks of sizes 2 and 3. The five splits of shape 1 + 4 are missing."
            },
            {
              "label": "52",
              "nudge": "<i>B</i><sub>5</sub> = 52 counts <b>all</b> equivalence relations on a 5-set, with any number of classes. The question fixes the number of classes at two."
            },
            { "label": "15", "nudge": null },
            {
              "label": "31",
              "nudge": "2<sup>5</sup> − 1 uses the wrong exponent. Each two-block split gets named twice this way, once from each side, so the count is (2<sup>5</sup> − 2)/2 = 15, not 2<sup>5</sup> − 1."
            }
          ],
          "solution": "S(5, 2) = 2⁵⁻¹ − 1 = 15. Reason: element 1's block is {1} ∪ T where T is any subset of the other four that is not all of them, giving 2⁴ − 1 = 15. By pattern: 1 + 4 gives 5, and 2 + 3 gives ⁵C₂ = 10, and 5 + 10 = 15."
        },
        {
          "t": "mistakes",
          "items": [
            "Checking only the easy branch of a two-branch condition. In <i>x</i> = <i>y</i> or <i>x</i> = 3<i>y</i>, the chains that break transitivity all run through the tripling branch: (9, 3) then (3, 1). <b>Hunt the counterexample in the branch you are tempted to ignore.</b>",
            "Adding “helpful” pairs during a completion. The minimum is <b>Σ |<i>C<sub>i</sub></i>|<sup>2</sup> − <i>n</i>(<i>R</i>)</b> and nothing more. Merging two components that were never joined by an edge over-merges the classes and loses the mark, and if <i>R</i> is already an equivalence relation the honest answer is <b>0</b>.",
            "Treating loops as edges when building the graph. A pair (4, 4) tells you nothing about which elements must sit together, so 4 stays an isolated component of size 1.",
            "Reaching for a power of two when the question says equivalence. Reflexive and symmetric counts are 2<sup>n<sup>2</sup>−n</sup> and 2<sup>n(n+1)/2</sup>, but <b>transitivity has no such formula</b>: count partitions, and know <i>B</i><sub>3</sub> = 5, <i>B</i><sub>4</sub> = 15, <i>B</i><sub>5</sub> = 52.",
            "Writing classes as lists when the set is infinite. [1] on ℤ modulo 3 is <b>{3<i>k</i> + 1 : <i>k</i> ∈ ℤ}</b>, a description. A row of dots is not an answer an examiner can mark."
          ]
        },
        {
          "t": "protip",
          "html": "simplify the defining condition <b>before</b> you test anything. sec<sup>2</sup><i>a</i> − tan<sup>2</sup><i>b</i> = 1 becomes tan<sup>2</sup><i>a</i> = tan<sup>2</sup><i>b</i>, and any condition of the shape <i>g</i>(<i>a</i>) = <i>g</i>(<i>b</i>) is an equivalence relation for free, no work at all. and for the completion questions, draw the graph: connected components are the whole answer, and you can read them off faster than you can test a single chain."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "a ≡ b (mod n) ⟺ n divides (a − b)",
              "note": "the archetype: reflexive, symmetric, transitive"
            },
            {
              "f": "proof order: reflexive, symmetric, transitive",
              "note": "assume the if; make b cancel in the chain"
            },
            {
              "f": "[a] ∩ [b] ≠ ∅ ⇒ [a] = [b] · a ∈ [a]",
              "note": "classes partition A, and partitions give them back"
            },
            {
              "f": "completion = ⋃ C<sub>i</sub> × C<sub>i</sub>",
              "note": "components of the graph; square the sizes, subtract n(R)"
            },
            {
              "f": "equivalence relations on A = B<sub>n</sub>",
              "note": "1, 2, 5, 15, 52 for n = 1 to 5"
            },
            {
              "f": "S(n, k) = k S(n−1, k) + S(n−1, k−1)",
              "note": "S(n, 2) = 2ⁿ⁻¹ − 1 · S(n, n−1) = nC2"
            }
          ],
          "aids": [
            "“simplify the condition, then the properties are obvious”",
            "“components in, squares out, subtract what you have”"
          ]
        }
      ]
    },
    {
      "n": "02",
      "title": "One-One, Onto and Bijective",
      "chip": "02 ONE-ONE & ONTO",
      "kalam": "change the codomain, change the answer",
      "blocks": [
        {
          "t": "p",
          "html": "You already know what a function is: one input, exactly one output, and a graph that survives the vertical line test. Class 12 asks two new questions about that wiring, and everything in this topic is an answer to one of them."
        },
        {
          "t": "p",
          "html": "<b>Do two different inputs ever produce the same output?</b> If never, the function is <b>one-one</b> (injective). Aadhaar numbers are the picture: distinct people, distinct numbers, no sharing anywhere. If two inputs do collide, the function is <b>many-one</b>. The rule “first letter of your name” is many-one, and so is squaring, because +2 and −2 both land on 4. <b>Whenever you see an even power, a modulus or a trigonometric ratio, suspect many-one before you touch any algebra.</b>"
        },
        {
          "t": "p",
          "html": "<b>Does every element of the codomain actually get used?</b> If yes, the function is <b>onto</b> (surjective), a full Volvo with no empty seat. If some target is never reached, the function is <b>into</b>. Squaring as <i>f</i> : ℝ → ℝ is into, because the entire negative half of the codomain sits empty forever. A function that is <b>both</b> one-one and onto is <b>bijective</b>, and bijections are exactly the functions you will be able to run backwards in topic 05."
        },
        {
          "t": "think",
          "html": "“is this function onto?” is not a complete question. it is like asking “is this train full?” without saying which train. <i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> is into as ℝ → ℝ, onto as ℝ → [0, ∞), and bijective as [0, ∞) → [0, ∞). same formula, three different answers. read the arrow before you read the rule."
        },
        {
          "t": "def",
          "term": "Injective and surjective",
          "html": "<i>f</i> : <i>A</i> → <i>B</i> is <b>injective</b> when <i>f</i>(<i>x</i><sub>1</sub>) = <i>f</i>(<i>x</i><sub>2</sub>) ⟹ <i>x</i><sub>1</sub> = <i>x</i><sub>2</sub>, equivalently <i>x</i><sub>1</sub> ≠ <i>x</i><sub>2</sub> ⟹ <i>f</i>(<i>x</i><sub>1</sub>) ≠ <i>f</i>(<i>x</i><sub>2</sub>). It is <b>surjective</b> when for every <i>y</i> ∈ <i>B</i> there exists <i>x</i> ∈ <i>A</i> with <i>f</i>(<i>x</i>) = <i>y</i>, equivalently <b>Range(<i>f</i>) = <i>B</i></b>."
        },
        {
          "t": "def",
          "term": "Bijective, many-one, into",
          "html": "<b>Bijective</b> = injective <b>and</b> surjective. <b>Many-one</b> is the negation of injective: there exist <i>x</i><sub>1</sub> ≠ <i>x</i><sub>2</sub> with <i>f</i>(<i>x</i><sub>1</sub>) = <i>f</i>(<i>x</i><sub>2</sub>). <b>Into</b> is the negation of onto: Range(<i>f</i>) ⊊ <i>B</i>. Into is a perfectly valid function type, not a defect, and certainly not “not a function”."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · THE TWO TESTS, TAP ONE",
          "chips": ["one-one", "many-one", "onto", "into"],
          "captions": [
            "The horizontal line test for one-one. Slide any horizontal line across the graph of f(x) = 2x − 7 and it meets the curve exactly once, here at x = 3 for the height −1. One hit per height means no two inputs share an output, so f is one-one.",
            "The same test on f(x) = x² − 4x + 5, which is (x − 2)² + 1. The line at height 2 cuts the parabola twice, at x = 1 and x = 3, so those two inputs share an output. Two hits and the function is many-one. Every parabola fails this test.",
            "Onto is about the y-axis, not the x-axis. The cubic y = x³ climbs from −∞ to +∞ without stopping, so every height in the codomain ℝ is reached by some input: the two marked heights are hit, and so is every other. An odd-degree polynomial ℝ → ℝ is always onto.",
            "Into, drawn as the empty seats. The graph of y = eˣ stays strictly above the axis, so the whole shaded half of the codomain ℝ is never reached. The range is (0, ∞), the codomain is ℝ, and the gap between them is exactly what into means."
          ],
          "frames": [
            {
              "x": [0, 6],
              "y": [-8, 6],
              "curves": [
                { "c": "line", "m": 2, "k": -7 },
                { "c": "line", "m": 0, "k": -1, "dash": true, "soft": true }
              ],
              "points": [{ "x": 3, "y": -1, "label": "one hit" }]
            },
            {
              "x": [-1, 5],
              "y": [-1, 8],
              "curves": [
                { "c": "poly", "coeffs": [5, -4, 1] },
                { "c": "line", "m": 0, "k": 2, "dash": true, "soft": true }
              ],
              "points": [
                { "x": 1, "y": 2 },
                { "x": 3, "y": 2, "label": "two hits" }
              ]
            },
            {
              "x": [-1.8, 1.8],
              "y": [-5, 5],
              "curves": [
                { "c": "poly", "coeffs": [0, 0, 0, 1] },
                { "c": "line", "m": 0, "k": 3, "dash": true, "soft": true },
                { "c": "line", "m": 0, "k": -3, "dash": true, "soft": true }
              ],
              "points": [
                { "x": 1.442, "y": 3 },
                { "x": -1.442, "y": -3 }
              ],
              "labels": [{ "x": -1.0, "y": 4.3, "text": "every height", "soft": true }]
            },
            {
              "x": [-2.5, 1.6],
              "y": [-2.5, 5],
              "bands": [{ "y0": -2.5, "y1": 0 }],
              "curves": [{ "c": "exp" }],
              "points": [{ "x": 0, "y": 1, "label": "(0, 1)" }],
              "labels": [{ "x": -1.0, "y": -1.4, "text": "never reached", "soft": true }]
            }
          ]
        },
        {
          "t": "p",
          "html": "Four structural facts do most of the work in the exam, and none of them needs algebra. A <b>polynomial ℝ → ℝ of odd degree is onto</b>, because it runs from −∞ to +∞ and is continuous, so the intermediate value theorem hands it every real value; one of <b>even degree is into</b>, never onto ℝ. A <b>strictly monotonic</b> function is one-one, because a graph that always climbs can never revisit a height. And an <b>injective map from a finite set to itself is automatically bijective</b>, and conversely."
        },
        {
          "t": "formula",
          "kicker": "STRUCTURE · THE SIGHT-READING RULES",
          "tag": "no algebra required",
          "main": "f′ of one sign ⇒ one-one · odd degree ⇒ onto ℝ",
          "legend": [
            "even degree, |<i>x</i>|, even powers and sin, cos are <b>many-one</b>: the ± symmetry or the periodicity kills injectivity on sight",
            "pigeonhole sanity check: if <i>n</i>(<i>A</i>) > <i>n</i>(<i>B</i>) no one-one map exists; if <i>n</i>(<i>A</i>) < <i>n</i>(<i>B</i>) no onto map exists"
          ],
          "note": "Identity is always bijective. A constant map is many-one, and into whenever the codomain has more than one element. Inclusion of A ⊆ B is injective, and into unless A = B."
        },
        {
          "t": "proc",
          "title": "Testing one-one, three routes",
          "steps": [
            "<b>Algebraic.</b> Assume <i>f</i>(<i>x</i><sub>1</sub>) = <i>f</i>(<i>x</i><sub>2</sub>) and try to force <i>x</i><sub>1</sub> = <i>x</i><sub>2</sub>. If a step only gives <i>x</i><sub>1</sub><sup>2</sup> = <i>x</i><sub>2</sub><sup>2</sup>, that admits <i>x</i><sub>1</sub> = −<i>x</i><sub>2</sub> and the function is many-one. This is the definition applied directly, and it is what CBSE wants written out.",
            "<b>Calculus, and this is the fastest.</b> If <i>f</i>′(<i>x</i>) > 0 everywhere, or <i>f</i>′(<i>x</i>) < 0 everywhere, then <i>f</i> is strictly monotonic and therefore one-one. Done, with no algebra. For a bounded perturbation like 2<i>x</i> + sin <i>x</i>, bound <i>f</i>′ instead of solving anything.",
            "<b>Graphical.</b> The horizontal line test. Reach for it when the function is a standard shape you can draw in two seconds.",
            "<b>To disprove, produce one collision.</b> <i>f</i>(2) = <i>f</i>(−2), or <i>f</i>(0) = <i>f</i>(√3) for <i>x</i><sup>3</sup> − 3<i>x</i>. A single explicit pair settles many-one, and it is faster than any general argument."
          ]
        },
        {
          "t": "proc",
          "title": "Testing onto, and the interval version",
          "steps": [
            "<b>Solve <i>y</i> = <i>f</i>(<i>x</i>) for <i>x</i>.</b> Then ask: for every <i>y</i> in the declared codomain <i>B</i>, is the resulting <i>x</i> real and inside the domain <i>A</i>? All yes means onto; one failing <i>y</i> is an empty seat and the function is into.",
            "<b>Or compute Range(<i>f</i>) and compare with <i>B</i>.</b> These are the same test; use whichever is shorter for the shape in front of you.",
            "<b>On an unbounded domain, use continuity.</b> Show <i>f</i>(<i>x</i>) → +∞ and <i>f</i>(<i>x</i>) → −∞ at the two ends. The intermediate value theorem then hands you every value in between, so the range is all of ℝ.",
            "<b>On a closed interval, tabulate.</b> Find the zeros of <i>f</i>′, evaluate <i>f</i> at those critical points <b>and</b> at both endpoints, and read the range off the largest and smallest values. Compare that with the codomain the question chose, which is never chosen innocently."
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · A MODEL BIJECTIVITY PROOF, TAP A LINE",
          "steps": [
            {
              "eq": "f : ℝ ∖ {2} → ℝ ∖ {1}, f(x) = (x + 3)/(x − 2)",
              "why": "The excluded input 2 is where the denominator vanishes. The excluded output 1 is the horizontal asymptote of this rational map, the value the curve approaches and never attains. Both exclusions are chosen so that the map has a chance of being bijective."
            },
            {
              "eq": "(x₁ + 3)(x₂ − 2) = (x₂ + 3)(x₁ − 2)",
              "why": "Injectivity. Set f(x₁) = f(x₂) and cross-multiply. Both sides expand to x₁x₂ plus linear terms minus 6, so the product term and the constant cancel and only the linear terms remain."
            },
            {
              "eq": "−2x₁ + 3x₂ = −2x₂ + 3x₁ ⟹ 5x₂ = 5x₁",
              "why": "Collect: the x₁ terms move left, the x₂ terms right. This forces x₁ = x₂, so f is injective. Notice that the cancellation of x₁x₂ is what makes this work, and it is why every Mobius-type map behaves the same way."
            },
            {
              "eq": "y = (x + 3)/(x − 2) ⟹ x = (2y + 3)/(y − 1)",
              "why": "Surjectivity. Clear the fraction, gather the x terms, and divide. This x exists for every y ≠ 1, which is exactly the declared codomain."
            },
            {
              "eq": "(2y + 3)/(y − 1) = 2 would give 3 = −2",
              "why": "The last check, and the one students skip: the preimage must lie in the domain, so x ≠ 2. Setting it equal to 2 gives 2y + 3 = 2y − 4, an impossibility, so x ≠ 2 always. Every y has a legal preimage, so f is surjective, hence bijective, hence invertible with f⁻¹(y) = (2y + 3)/(y − 1)."
            }
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Show that <i>f</i> : ℝ → ℝ, <i>f</i>(<i>x</i>) = 2<i>x</i> − 7, is a bijection.",
          "steps": [
            "One-one: let <i>f</i>(<i>x</i><sub>1</sub>) = <i>f</i>(<i>x</i><sub>2</sub>). Then 2<i>x</i><sub>1</sub> − 7 = 2<i>x</i><sub>2</sub> − 7, so 2<i>x</i><sub>1</sub> = 2<i>x</i><sub>2</sub> and <i>x</i><sub>1</sub> = <i>x</i><sub>2</sub>.",
            "Onto: take any <i>y</i> ∈ ℝ and solve <i>y</i> = 2<i>x</i> − 7, giving <i>x</i> = (<i>y</i> + 7)/2, a real number for every real <i>y</i>.",
            "Check the preimage works: <i>f</i>((<i>y</i> + 7)/2) = (<i>y</i> + 7) − 7 = <i>y</i>. So Range(<i>f</i>) = ℝ = codomain.",
            "Both hold, so <i>f</i> is bijective. Every non-constant linear map ℝ → ℝ is, for exactly these two reasons."
          ],
          "ans": "Bijective. One-one from the algebra, onto because (y + 7)/2 is always real"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN · SPEED TRAP",
          "q": "Classify <i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> + 1 in two cases: (a) <i>f</i> : ℝ → ℝ, (b) <i>f</i> : ℝ → [1, ∞). Use the fastest reasoning.",
          "steps": [
            "One-one, both cases: the even power gives <i>f</i>(2) = <i>f</i>(−2) = 5. Many-one instantly, and no algebra was needed.",
            "(a) Outputs satisfy <i>x</i><sup>2</sup> + 1 ≥ 1, so Range = [1, ∞) ⊊ ℝ. Everything below 1 is an empty seat: into.",
            "(b) Same range, but the codomain has been shrunk to [1, ∞), which the range now fills exactly: onto."
          ],
          "ans": "(a) many-one into · (b) many-one onto. The one-one verdict never moved; the codomain flipped onto"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN · 2002 PATTERN",
          "q": "Classify <i>f</i> : ℝ → ℝ, <i>f</i>(<i>x</i>) = 2<i>x</i> + sin <i>x</i>, as one-one or many-one and onto or into.",
          "steps": [
            "Differentiate: <i>f</i>′(<i>x</i>) = 2 + cos <i>x</i>. Since −1 ≤ cos <i>x</i> ≤ 1, we get 1 ≤ <i>f</i>′(<i>x</i>) ≤ 3.",
            "So <i>f</i>′ > 0 everywhere: <i>f</i> is strictly increasing, hence one-one. Bounding beats solving here.",
            "As <i>x</i> → +∞ the term 2<i>x</i> dominates the bounded sin <i>x</i>, so <i>f</i>(<i>x</i>) → +∞; likewise <i>f</i>(<i>x</i>) → −∞ as <i>x</i> → −∞.",
            "<i>f</i> is continuous, so by the intermediate value theorem every real value is attained: onto."
          ],
          "ans": "One-one and onto, so bijective. Bound f′, then run the two limits"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED · 2012 PATTERN",
          "q": "<i>f</i> : [0, 3] → [1, 29], <i>f</i>(<i>x</i>) = 2<i>x</i><sup>3</sup> − 15<i>x</i><sup>2</sup> + 36<i>x</i> + 1. Classify it.",
          "steps": [
            "<i>f</i>′(<i>x</i>) = 6<i>x</i><sup>2</sup> − 30<i>x</i> + 36 = 6(<i>x</i> − 2)(<i>x</i> − 3), positive on [0, 2) and negative on (2, 3).",
            "Not monotonic on [0, 3], so many-one. Concretely, the value 28 is taken once on the way up and again at <i>x</i> = 3.",
            "Tabulate: <i>f</i>(0) = 1, <i>f</i>(2) = 16 − 60 + 72 + 1 = 29, <i>f</i>(3) = 54 − 135 + 108 + 1 = 28.",
            "Maximum 29 at <i>x</i> = 2, minimum 1 at <i>x</i> = 0, and <i>f</i> is continuous, so Range = [1, 29], exactly the codomain: onto."
          ],
          "ans": "Onto but not one-one. The codomain [1, 29] was chosen to make it onto, which is the whole point of the question"
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Show <i>f</i> : ℝ → ℝ, <i>f</i>(<i>x</i>) = 5<i>x</i> + 3, is a bijection.",
              "a": "One-one: 5<i>x</i><sub>1</sub> + 3 = 5<i>x</i><sub>2</sub> + 3 ⇒ <i>x</i><sub>1</sub> = <i>x</i><sub>2</sub>. Onto: <i>x</i> = (<i>y</i> − 3)/5 ∈ ℝ for every real <i>y</i>."
            },
            {
              "q": "[CUET] Classify <i>f</i> : ℝ → ℝ, <i>f</i>(<i>x</i>) = |<i>x</i>|.",
              "a": "Many-one, since |−<i>a</i>| = |<i>a</i>|; and into, since Range = [0, ∞) ≠ ℝ."
            },
            {
              "q": "[JEE Main] Classify <i>f</i> : ℝ → ℝ, <i>f</i>(<i>x</i>) = <i>x</i><sup>3</sup> + 1.",
              "a": "Bijective. Odd degree gives onto; <i>f</i>′(<i>x</i>) = 3<i>x</i><sup>2</sup> ≥ 0, zero only at a point, so strictly increasing and one-one."
            },
            {
              "q": "[JEE Main] Classify <i>f</i> : ℕ → ℕ, <i>f</i>(<i>n</i>) = <i>n</i> + 1.",
              "a": "One-one but not onto: 1 has no preimage, since that would need <i>n</i> = 0 ∉ ℕ. The same rule on ℤ would be bijective, so this tests domain awareness."
            },
            {
              "q": "[JEE Advanced] <i>f</i> : ℝ → ℝ, <i>f</i>(<i>x</i>) = <i>x</i><sup>3</sup> − 3<i>x</i>. Classify it, then find an interval [<i>a</i>, ∞) and a codomain making it bijective.",
              "a": "Onto (odd degree, IVT) but many-one, since <i>f</i>(0) = <i>f</i>(√3) = 0. On [1, ∞), <i>f</i>′(<i>x</i>) = 3(<i>x</i><sup>2</sup> − 1) ≥ 0 so it is increasing, with image [<i>f</i>(1), ∞) = [−2, ∞). So <i>f</i> : [1, ∞) → [−2, ∞) is bijective."
            }
          ]
        },
        {
          "t": "mcq",
          "q": "<i>f</i> : ℝ → ℝ, <i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> − 4<i>x</i> + 5. Then <i>f</i> is:",
          "correct": 3,
          "opts": [
            {
              "label": "one-one and onto",
              "nudge": "Every parabola fails the horizontal line test, so one-one is out before onto is even considered."
            },
            {
              "label": "one-one and into",
              "nudge": "Into is right, one-one is not. Completing the square gives (<i>x</i> − 2)<sup>2</sup> + 1, symmetric about <i>x</i> = 2, so <i>f</i>(1) = <i>f</i>(3) = 2."
            },
            {
              "label": "many-one and onto",
              "nudge": "Many-one is right, onto is not. The codomain is all of ℝ while the range bottoms out at 1, so nothing below 1 is ever reached."
            },
            { "label": "many-one and into", "nudge": null }
          ],
          "solution": "f(x) = (x − 2)² + 1, a parabola with minimum value 1 at x = 2. Range = [1, ∞) ⊊ ℝ, so into. Symmetry about x = 2 gives f(1) = f(3) = 2, so many-one."
        },
        {
          "t": "mcq",
          "q": "Which function <i>f</i> : ℝ → ℝ is a bijection?",
          "correct": 1,
          "opts": [
            {
              "label": "f(x) = x<sup>2</sup>",
              "nudge": "Many-one (<i>x</i> and −<i>x</i> share an image) and into (negatives never reached). It fails both tests at once."
            },
            { "label": "f(x) = x<sup>3</sup>", "nudge": null },
            {
              "label": "f(x) = e<sup>x</sup>",
              "nudge": "The most tempting wrong answer. It is genuinely one-one, but the range is (0, ∞), so it never reaches 0 or any negative: into, not onto."
            },
            {
              "label": "f(x) = sin x",
              "nudge": "Periodic, so many-one (sin 0 = sin 2π), and bounded, so into with range [−1, 1]."
            }
          ],
          "solution": "x³ is strictly increasing (f′(x) = 3x² ≥ 0, zero only at a point) hence one-one, and it is an odd-degree polynomial hence onto ℝ."
        },
        {
          "t": "mcq",
          "q": "If <i>f</i> : <i>A</i> → <i>B</i> with <i>n</i>(<i>A</i>) = 5 and <i>n</i>(<i>B</i>) = 3, which statement is <b>certain</b>?",
          "correct": 2,
          "opts": [
            {
              "label": "f is onto",
              "nudge": "Onto is <b>possible</b> here, not certain: the constant map sends all five inputs to one element of <i>B</i> and misses the other two."
            },
            {
              "label": "f is many-one and onto",
              "nudge": "Many-one is certain, onto is not. Two of the three verdicts have to be argued separately, and only one of them is forced."
            },
            { "label": "f is many-one", "nudge": null },
            {
              "label": "f is bijective",
              "nudge": "Bijective needs equal sizes. With 5 inputs and 3 outputs a one-one map is impossible, so a bijection certainly is."
            }
          ],
          "solution": "Pigeonhole: 5 inputs sharing 3 outputs forces at least two inputs onto one output, so f is many-one, always. Onto depends on the particular f, and bijective is impossible since n(A) ≠ n(B)."
        },
        {
          "t": "mcq",
          "q": "<i>f</i> : ℝ → ℝ, <i>f</i>(<i>x</i>) = <i>x</i><sup>3</sup> − 3<i>x</i>. The number of real solutions of <i>f</i>(<i>x</i>) = 1 is:",
          "correct": 2,
          "opts": [
            {
              "label": "1",
              "nudge": "That would be right if <i>f</i> were monotonic. It is not: <i>f</i>′(<i>x</i>) = 3(<i>x</i> − 1)(<i>x</i> + 1) changes sign twice."
            },
            {
              "label": "2",
              "nudge": "Two happens only when the horizontal line passes exactly through a turning value, here <i>y</i> = 2 or <i>y</i> = −2. The line <i>y</i> = 1 lies strictly between them."
            },
            { "label": "3", "nudge": null },
            {
              "label": "0",
              "nudge": "An odd-degree polynomial ℝ → ℝ is onto, so <i>f</i>(<i>x</i>) = <i>c</i> always has at least one solution, whatever <i>c</i> is."
            }
          ],
          "solution": "f′(x) = 3x² − 3 vanishes at x = ±1, giving a local maximum f(−1) = 2 and a local minimum f(1) = −2. The line y = 1 lies strictly between −2 and 2, so it cuts the curve once on each of (−∞, −1), (−1, 1) and (1, ∞): three solutions."
        },
        {
          "t": "mistakes",
          "items": [
            "Declaring “onto” without reading the codomain. Onto is <b>meaningless until <i>B</i> is fixed</b>. Compare Range(<i>f</i>) with the <b>given</b> codomain, never with ℝ by reflex. This is the single most common error in the whole chapter.",
            "Forgetting that even powers, |<i>x</i>| and the trigonometric ratios are many-one. The ± symmetry or the periodicity kills injectivity silently, before any algebra starts.",
            "Confusing “into” with “not a function”. Into simply means <b>not onto</b>. It is a valid classification and rejecting the map loses the mark.",
            "Skipping the well-definedness check. A 2019 JEE Main item asked to classify <i>f</i> : (0, ∞) → (0, ∞) with <i>f</i>(<i>x</i>) = ln <i>x</i>, but <i>f</i>(1) = 0 ∉ (0, ∞), so it is <b>not a function at all</b> and the item was made a bonus. Test the arrow before you test the type.",
            "Reading “not monotonic” off <i>f</i>′ = 0 alone. <i>f</i>′ must actually <b>change sign</b>: <i>f</i>(<i>x</i>) = <i>x</i><sup>3</sup> has <i>f</i>′(0) = 0 and is still strictly increasing, hence one-one."
          ]
        },
        {
          "t": "protip",
          "html": "for anything differentiable, check <b>monotonicity first</b>. if <i>f</i>′ keeps one sign throughout, <i>f</i> is one-one and you are done with half the question in one line. and for a polynomial ℝ → ℝ, read the degree: <b>odd means onto, even means into</b>, no working shown. those two habits together answer most classification MCQs before the options have been read."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "one-one: f(x₁) = f(x₂) ⇒ x₁ = x₂",
              "note": "horizontal line meets the graph once"
            },
            {
              "f": "onto: Range(f) = B",
              "note": "not Range ⊆ ℝ; compare with the declared B"
            },
            {
              "f": "bijective = one-one + onto = invertible",
              "note": "the bridge into topic 05"
            },
            {
              "f": "f′ of one sign ⇒ strictly monotonic ⇒ one-one",
              "note": "fastest route for anything differentiable"
            },
            {
              "f": "odd degree ⇒ onto ℝ · even degree ⇒ into",
              "note": "continuity plus IVT is the reason"
            },
            {
              "f": "injective self-map on a finite set ⇒ bijective",
              "note": "and conversely; pigeonhole does the rest"
            }
          ],
          "aids": [
            "“one-one: different stay different. onto: nothing left out”",
            "“change the set, change the answer”"
          ]
        }
      ]
    },
    {
      "n": "03",
      "title": "Counting Functions and Maps",
      "chip": "03 COUNTING",
      "kalam": "choices multiply, misses subtract",
      "blocks": [
        {
          "t": "p",
          "html": "The exam rarely asks you to <b>find</b> a one-one function. It asks <b>how many there are</b>, because that is a number it can key as an answer. Every count in this topic comes from two ideas you already own: the multiplication principle, which says independent choices multiply, and inclusion and exclusion, which says overlapping bad cases must be subtracted and then added back."
        },
        {
          "t": "p",
          "html": "Start with all functions. A function <i>f</i> : <i>A</i> → <i>B</i> is nothing but a decision for each element of <i>A</i>: which element of <i>B</i> does it point to? With <i>n</i>(<i>A</i>) = <i>n</i> and <i>n</i>(<i>B</i>) = <i>m</i>, each of the <i>n</i> inputs independently picks one of <i>m</i> images, so there are <b><i>m</i><sup>n</sup></b> functions. Note the shape: the <b>domain size is the exponent</b>, because it is the domain that does the choosing."
        },
        {
          "t": "think",
          "html": "it is a PIN pad. a 4-digit PIN is a function from the four slots to the ten digits, so there are 10<sup>4</sup> of them, not 4<sup>10</sup>. slots choose digits; digits do not choose slots. get that direction right once and the <i>m</i><sup>n</sup> versus <i>n</i><sup>m</sup> slip never happens again."
        },
        {
          "t": "defgrid",
          "title": "The five counts, and when they exist",
          "rows": [
            {
              "k": "All functions A → B",
              "v": "<b><i>m</i><sup>n</sup></b>, always. Each of <i>n</i> inputs picks one of <i>m</i> images"
            },
            {
              "k": "Injective (one-one)",
              "v": "<b><sup>m</sup><i>P<sub>n</sub></i></b> = <i>m</i>!/(<i>m</i> − <i>n</i>)!, and only when <i>m</i> ≥ <i>n</i>"
            },
            {
              "k": "Surjective (onto)",
              "v": "<b>Σ (−1)<sup>k</sup> <sup>m</sup><i>C<sub>k</sub></i> (<i>m</i> − <i>k</i>)<sup>n</sup></b> for <i>k</i> = 0 to <i>m</i>, and only when <i>n</i> ≥ <i>m</i>"
            },
            {
              "k": "Bijective",
              "v": "<b><i>n</i>!</b>, and only when <i>m</i> = <i>n</i>. Also the count of <b>invertible</b> maps"
            },
            {
              "k": "Injective self-map A → A",
              "v": "<b><i>n</i>!</b> as well, because on a finite set injective and bijective coincide"
            },
            {
              "k": "Derangements of A",
              "v": "<b>!<i>n</i></b> = <i>n</i>! Σ (−1)<sup>k</sup>/<i>k</i>!, the bijections with <b>no</b> fixed point"
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "tree",
          "kicker": "FIGURE · THE CHOICES, TAP A COUNT",
          "chips": ["all maps", "one-one", "bijections"],
          "captions": [
            "Three inputs a1, a2, a3 choosing images from a four-element codomain. The first input has 4 branches. Whichever it takes, the second input still has all 4 available, and so does the third, because nothing forbids a repeat. So the count is 4 × 4 × 4 = 64, and in general m to the power n.",
            "The same picture with one-one imposed. The first input still has 4 choices, but the second may not reuse what the first took, so it has 3, and the third has 2. The count is 4 × 3 × 2 = 24, which is exactly 4P3. Each step loses one option, which is why the answer is a falling product and not a power.",
            "Equal sizes, three inputs into three targets, and one-one. The choices fall 3, then 2, then 1, giving 3! = 6. With equal finite sets one-one and onto are the same condition, so this is also the number of onto maps and the number of invertible maps."
          ],
          "frames": [
            {
              "tree": {
                "root": "a1",
                "levels": [
                  { "label": "image of a1", "count": 4, "names": ["b1", "b2", "b3", "b4"] },
                  { "label": "image of a2", "count": 4 }
                ],
                "total": "4 × 4 × 4 = 64"
              }
            },
            {
              "tree": {
                "root": "a1",
                "levels": [
                  { "label": "image of a1", "count": 4, "names": ["b1", "b2", "b3", "b4"] },
                  { "label": "image of a2", "count": 3 }
                ],
                "total": "4 × 3 × 2 = 24"
              }
            },
            {
              "tree": {
                "root": "a1",
                "levels": [
                  { "label": "image of a1", "count": 3, "names": ["b1", "b2", "b3"] },
                  { "label": "image of a2", "count": 2 }
                ],
                "total": "3 × 2 × 1 = 6"
              }
            }
          ]
        },
        {
          "t": "p",
          "html": "Onto is the hard one, and it is hard for a structural reason: “every target is hit” is a condition on the function as a whole, not a decision you can make one input at a time. There is no falling product to write. So you count the <b>opposite</b>: functions that <b>miss</b> at least one target, and subtract."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE ONTO FORMULA, TAP A LINE",
          "steps": [
            {
              "eq": "for each b ∈ B let E_b = functions that miss b",
              "why": "The onto functions are exactly the ones lying in none of these sets. That is the standard setting for inclusion and exclusion: count the total, subtract each bad set, add back the pairwise overlaps, and so on."
            },
            {
              "eq": "functions missing a fixed set S of k targets: (m − k)ⁿ",
              "why": "If every element of S is off limits, each of the n inputs may still choose freely among the remaining m − k targets. Nothing else is constrained, so the count is a plain power. This is why the engine works at all: every intersection has a clean formula."
            },
            {
              "eq": "there are mCk such sets S",
              "why": "Choose which k of the m targets are the forbidden ones. All such choices behave identically, so the k-th term of the alternating sum carries the binomial coefficient as a multiplier."
            },
            {
              "eq": "onto(n, m) = Σ (−1)ᵏ mCk (m − k)ⁿ",
              "why": "Assemble the alternating sum. A function whose image misses exactly j targets is counted once for every subset of those j, with signs, and those signs total (1 − 1)^j, which is 0 unless j = 0. Only the fully surjective functions survive with weight 1."
            },
            {
              "eq": "check: n = m = 3 gives 27 − 3(8) + 3(1) − 0 = 6 = 3!",
              "why": "Onto between two sets of the same finite size means bijective, so the answer had to be 3!. Running that check on a small case is the fastest way to catch a sign slip or a misplaced binomial coefficient in an exam."
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · ONTO MAPS, WORTH KNOWING BY VALUE",
          "tag": "n(A) = n, n(B) = m, needs n ≥ m",
          "main": "onto(n, m) = Σ<sub>k=0</sub><sup>m</sup> (−1)<sup>k</sup> <sup>m</sup>C<sub>k</sub> (m − k)<sup>n</sup>",
          "legend": [
            "<i>m</i> = 2: onto(<i>n</i>, 2) = 2<sup>n</sup> − 2, the two constant maps being the only failures",
            "values to carry: onto(4, 2) = 14 · onto(5, 3) = 150 · onto(6, 3) = 540 · onto(5, 4) = 240 · onto(7, 5) = 16800"
          ],
          "note": "With m = 2 or m = 3 the sum is two or three live terms. Write it out rather than quoting the formula; the sign slips happen in the quoting."
        },
        {
          "t": "p",
          "html": "The same engine, pointed at bijections, produces <b>derangements</b>. A derangement of {1, …, <i>n</i>} is a bijection <i>σ</i> with <b><i>σ</i>(<i>i</i>) ≠ <i>i</i> for every <i>i</i></b>: nobody stays put. Let <i>E<sub>i</sub></i> be the bijections fixing <i>i</i>. Bijections fixing a chosen set of <i>k</i> elements number (<i>n</i> − <i>k</i>)!, since the rest may permute freely, and the alternating sum falls out at once."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · DERANGEMENTS",
          "tag": "bijections with no fixed point",
          "main": "!n = n! (1 − 1/1! + 1/2! − 1/3! + ⋯ ± 1/n!)",
          "legend": [
            "values to memorise: !1 = 0, !2 = 1, !3 = 2, !4 = 9, !5 = 44",
            "recurrence for a fast cross-check: !<i>n</i> = (<i>n</i> − 1)(!(<i>n</i> − 1) + !(<i>n</i> − 2)), so !5 = 4(9 + 2) = 44"
          ],
          "note": "Exactly k fixed points: choose them in nCk ways and derange the rest, giving nCk · !(n − k). “Exactly one” is not !n."
        },
        {
          "t": "proc",
          "title": "Counting with a constraint attached",
          "steps": [
            "<b>Check feasibility before anything else.</b> No one-one map exists when <i>n</i>(<i>A</i>) > <i>n</i>(<i>B</i>); no onto map exists when <i>n</i>(<i>A</i>) < <i>n</i>(<i>B</i>). If the question is infeasible the answer is 0 and you are done in five seconds.",
            "<b>Fix the constrained part by choosing, not by arranging.</b> “Exactly three elements map to <i>y</i><sub>2</sub>” means choose <b>which</b> three, in <sup>7</sup><i>C</i><sub>3</sub> ways. They are an unordered set of preimages, so no factorial multiplies them.",
            "<b>Count the remainder freely, then subtract the misses.</b> With <i>y</i><sub>2</sub> already covered, the leftover elements must still hit the remaining targets, so apply the onto count to <b>them</b> alone.",
            "<b>Multiply the two stages.</b> The choice and the completion are independent, so the answers multiply. Sanity check the size: the answer must sit between the number of bijections and the number of all functions."
          ]
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "Find the number of onto functions from {1, 2, …, 6} to {<i>a</i>, <i>b</i>, <i>c</i>}.",
          "steps": [
            "Feasible: 6 ≥ 3. Apply inclusion and exclusion with <i>n</i> = 6, <i>m</i> = 3.",
            "3<sup>6</sup> − <sup>3</sup>C<sub>1</sub> · 2<sup>6</sup> + <sup>3</sup>C<sub>2</sub> · 1<sup>6</sup> − <sup>3</sup>C<sub>3</sub> · 0<sup>6</sup>.",
            "= 729 − 3(64) + 3(1) − 0 = 729 − 192 + 3 = 540.",
            "Sanity: 540 lies between 3! = 6 and 3<sup>6</sup> = 729, as it must."
          ],
          "ans": "540. Three live terms, written out rather than quoted"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED · 2018 PATTERN",
          "q": "<i>n</i>(<i>X</i>) = 5, <i>n</i>(<i>Y</i>) = 7. Let <i>α</i> be the number of one-one maps <i>X</i> → <i>Y</i> and <i>β</i> the number of onto maps <i>Y</i> → <i>X</i>. Find (<i>β</i> − <i>α</i>)/5!.",
          "steps": [
            "<i>α</i> = <sup>7</sup><i>P</i><sub>5</sub> = 7!/2! = 2520. Feasible since 7 ≥ 5.",
            "<i>β</i>: onto from 7 elements to 5, so <i>n</i> = 7, <i>m</i> = 5. The sum is 5<sup>7</sup> − <sup>5</sup>C<sub>1</sub>4<sup>7</sup> + <sup>5</sup>C<sub>2</sub>3<sup>7</sup> − <sup>5</sup>C<sub>3</sub>2<sup>7</sup> + <sup>5</sup>C<sub>4</sub>1<sup>7</sup>.",
            "= 78125 − 81920 + 21870 − 1280 + 5 = 16800.",
            "(<i>β</i> − <i>α</i>)/5! = (16800 − 2520)/120 = 14280/120 = 119."
          ],
          "ans": "119. Read which set is the domain in each half: the arrow reverses between α and β"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN · 2015 PATTERN",
          "q": "<i>A</i> has 7 elements and <i>B</i> = {<i>y</i><sub>1</sub>, <i>y</i><sub>2</sub>, <i>y</i><sub>3</sub>}. How many onto functions <i>f</i> : <i>A</i> → <i>B</i> have <b>exactly three</b> elements of <i>A</i> mapping to <i>y</i><sub>2</sub>?",
          "steps": [
            "Choose the three preimages of <i>y</i><sub>2</sub>: <sup>7</sup>C<sub>3</sub> = 35. Unordered, so no factorial here.",
            "The remaining 4 elements must avoid <i>y</i><sub>2</sub> and still hit <b>both</b> <i>y</i><sub>1</sub> and <i>y</i><sub>3</sub>: an onto map from 4 elements to 2.",
            "onto(4, 2) = 2<sup>4</sup> − 2 = 14, the two constant maps being the only failures.",
            "The stages are independent: 35 × 14 = 490."
          ],
          "ans": "490. Choose the constrained block, then run the onto count on what is left"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "How many bijections <i>σ</i> of {1, 2, 3, 4, 5} satisfy <i>σ</i>(<i>i</i>) ≠ <i>i</i> for every <i>i</i>? What is the probability that a random bijection is one?",
          "steps": [
            "!5 = 5!(1 − 1 + 1/2 − 1/6 + 1/24 − 1/120) = 120 − 120 + 60 − 20 + 5 − 1 = 44.",
            "Read the terms: fix nobody (120), penalise each single fixed point (−5 × 24), refund each pair (+10 × 6), re-penalise each triple (−10 × 2), refund each quadruple (+5), re-penalise the identity (−1).",
            "Cross-check with the recurrence: !5 = 4(!4 + !3) = 4(9 + 2) = 44.",
            "Probability = 44/120 = 11/30."
          ],
          "ans": "44 derangements, probability 11/30. Two independent routes, one answer"
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] How many functions are there from a 3-element set to a 2-element set?",
              "a": "2<sup>3</sup> = <b>8</b>. Each of the 3 inputs independently picks one of the 2 images."
            },
            {
              "q": "[CUET] How many one-one functions are there from a 3-element set to a 5-element set?",
              "a": "<sup>5</sup><i>P</i><sub>3</sub> = 5 × 4 × 3 = <b>60</b>. Feasible since 5 ≥ 3."
            },
            {
              "q": "[JEE Main] How many onto functions are there from a 5-element set to a 3-element set?",
              "a": "3<sup>5</sup> − <sup>3</sup>C<sub>1</sub>2<sup>5</sup> + <sup>3</sup>C<sub>2</sub>1<sup>5</sup> = 243 − 96 + 3 = <b>150</b>."
            },
            {
              "q": "[JEE Main] How many functions from a 5-element set to itself are onto?",
              "a": "Onto with equal finite sizes means bijective, so 5! = <b>120</b>. No inclusion and exclusion needed."
            },
            {
              "q": "[JEE Advanced] How many bijections of a 4-element set have <b>exactly one</b> fixed point?",
              "a": "Choose the fixed point in 4 ways, then derange the other three: 4 × !3 = 4 × 2 = <b>8</b>."
            }
          ]
        },
        {
          "t": "mcq",
          "q": "The total number of functions from a set of 3 elements to a set of 2 elements is:",
          "correct": 1,
          "opts": [
            {
              "label": "6",
              "nudge": "3 × 2 multiplies the two sizes instead of exponentiating. That counts the ordered pairs in <i>A</i> × <i>B</i>, not the functions."
            },
            { "label": "8", "nudge": null },
            {
              "label": "9",
              "nudge": "3<sup>2</sup> swaps the base and the exponent. The <b>domain</b> size is the exponent, because the domain does the choosing."
            },
            {
              "label": "5",
              "nudge": "3 + 2 adds where independent choices must multiply. Adding is never the right move in a counting question of this shape."
            }
          ],
          "solution": "Each of the 3 inputs independently picks one of the 2 images: 2 × 2 × 2 = 2³ = 8."
        },
        {
          "t": "mcq",
          "q": "The number of one-one functions from a set of 3 elements to a set of 5 elements is:",
          "correct": 2,
          "opts": [
            {
              "label": "125",
              "nudge": "5<sup>3</sup> counts <b>all</b> functions, repeats included. The one-one condition removes exactly the repeats."
            },
            {
              "label": "10",
              "nudge": "<sup>5</sup>C<sub>3</sub> chooses which three images get used but never assigns them to particular inputs. Multiply by 3! and you reach 60."
            },
            { "label": "60", "nudge": null },
            {
              "label": "243",
              "nudge": "3<sup>5</sup> reverses the roles: it would count functions from the 5-element set into the 3-element one."
            }
          ],
          "solution": "The first input has 5 images available, the second 4, the third 3, since no image may repeat: 5 × 4 × 3 = 60 = ⁵P₃."
        },
        {
          "t": "mcq",
          "q": "The number of onto functions from a set of 4 elements to a set of 2 elements is:",
          "correct": 0,
          "opts": [
            { "label": "14", "nudge": null },
            {
              "label": "16",
              "nudge": "2<sup>4</sup> counts all functions and ignores the onto condition entirely. Exactly two of them fail it."
            },
            {
              "label": "8",
              "nudge": "2<sup>3</sup> uses three inputs instead of four. The domain here has four elements, and the domain size is the exponent."
            },
            {
              "label": "2",
              "nudge": "That is the count of the two <b>constant</b> maps, which are precisely the ones to be removed, not the ones to be kept."
            }
          ],
          "solution": "onto(4, 2) = 2⁴ − 2 = 14. Of the 16 functions, only the two constants (everything to the first target, everything to the second) miss a target."
        },
        {
          "t": "mcq",
          "q": "The number of bijections of {1, 2, 3, 4} with exactly one fixed point is:",
          "correct": 1,
          "opts": [
            {
              "label": "9",
              "nudge": "!4 = 9 counts the bijections with <b>no</b> fixed point at all. The question asks for exactly one, so one element must be pinned first."
            },
            { "label": "8", "nudge": null },
            {
              "label": "24",
              "nudge": "4! counts every bijection, with any number of fixed points, including the identity which has four."
            },
            {
              "label": "6",
              "nudge": "4 × 3!/2 mishandles the second stage. Once the fixed point is chosen, the other three must be <b>deranged</b>, not permuted freely, or extra fixed points sneak in."
            }
          ],
          "solution": "Choose the one element that stays put: 4 ways. The remaining three must move, so they contribute !3 = 2. Total 4 × 2 = 8."
        },
        {
          "t": "mistakes",
          "items": [
            "Using <i>m</i><sup>n</sup> for one-one maps. All functions are <b><i>m</i><sup>n</sup></b>; one-one maps are <b><sup>m</sup><i>P<sub>n</sub></i></b>. The falling product is the whole difference, and the exam offers both as options every time.",
            "Swapping base and exponent. The <b>domain size is the exponent</b>. Read which set the arrow starts from before you write anything, especially when a question defines maps in both directions, as the 2018 α and β item does.",
            "Ignoring feasibility. There is <b>no</b> one-one map when <i>n</i>(<i>A</i>) > <i>n</i>(<i>B</i>) and <b>no</b> onto map when <i>n</i>(<i>A</i>) < <i>n</i>(<i>B</i>). The answer is 0, and the option list will not contain a hint that it is.",
            "Multiplying the chosen preimage set by a factorial. “Exactly three elements map to <i>y</i><sub>2</sub>” asks which three, so it is <sup>7</sup>C<sub>3</sub>, not <sup>7</sup>P<sub>3</sub>: the three land on the <b>same</b> target and their order is meaningless.",
            "Grinding inclusion and exclusion when the sets have equal size. Onto between two <i>n</i>-element sets means <b>bijective</b>, so the answer is <i>n</i>! and the alternating sum is a waste of two minutes."
          ]
        },
        {
          "t": "protip",
          "html": "before computing anything, compare the two sizes. <b>domain bigger than codomain: one-one is impossible. codomain bigger: onto is impossible. equal: onto and one-one both mean <i>n</i>!.</b> that single comparison kills a third of the counting questions outright. and when the codomain has 2 or 3 elements, write the alternating sum out in full rather than quoting it, because every mark lost here is lost to a sign."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "all functions A → B = m<sup>n</sup>",
              "note": "domain size is the exponent, always"
            },
            {
              "f": "one-one = <sup>m</sup>P<sub>n</sub>, needs m ≥ n",
              "note": "a falling product, not a power"
            },
            {
              "f": "onto = Σ (−1)ᵏ <sup>m</sup>C<sub>k</sub> (m − k)<sup>n</sup>, needs n ≥ m",
              "note": "onto(n, 2) = 2ⁿ − 2 · onto(6, 3) = 540"
            },
            {
              "f": "bijective = n!, needs m = n",
              "note": "also the count of invertible maps"
            },
            {
              "f": "!n = n! Σ (−1)ᵏ/k!",
              "note": "0, 1, 2, 9, 44 for n = 1 to 5"
            },
            {
              "f": "exactly k fixed points = <sup>n</sup>C<sub>k</sub> · !(n − k)",
              "note": "choose who stays, derange the rest"
            }
          ],
          "aids": [
            "“slots choose digits, so the domain is upstairs”",
            "“feasibility first, then the formula”"
          ]
        }
      ]
    },
    {
      "n": "04",
      "title": "Composition of Functions",
      "chip": "04 COMPOSITION",
      "kalam": "innermost acts first, always",
      "blocks": [
        {
          "t": "p",
          "html": "Picture the two-stage water system in a hostel kitchen: an RO purifier, then a chiller. Tap water goes in, the purifier cleans it, and its output feeds straight into the chiller, which cools it. Tap water in, cold clean water out. The whole assembly is a single machine built from two, and that is exactly what <b>composition</b> of functions is."
        },
        {
          "t": "p",
          "html": "Given <i>f</i> and <i>g</i>, the composite <b><i>g</i> ∘ <i>f</i></b> means: run <i>f</i> first, then feed its output into <i>g</i>. In symbols, <b>(<i>g</i> ∘ <i>f</i>)(<i>x</i>) = <i>g</i>(<i>f</i>(<i>x</i>))</b>. Build one habit and this topic stops producing errors: <b>the innermost function acts first</b>. In <i>g</i> ∘ <i>f</i>, even though <i>g</i> is written on the left, it is <i>f</i> that touches <i>x</i>. Read it right to left, as “<i>g</i> after <i>f</i>”."
        },
        {
          "t": "think",
          "html": "composition is a relay race. runner <i>f</i> runs the first leg and hands the baton to runner <i>g</i>. swap who runs first and you usually get a different race, which is why <i>g</i> ∘ <i>f</i> ≠ <i>f</i> ∘ <i>g</i> in general. and the baton has to be catchable: if <i>f</i> hands over a negative number and <i>g</i> only accepts positives, the handoff fails and the composite is undefined there."
        },
        {
          "t": "def",
          "term": "Composite g after f",
          "html": "For <i>f</i> : <i>A</i> → <i>B</i> and <i>g</i> : <i>B</i> → <i>C</i>, the composite is <b>(<i>g</i> ∘ <i>f</i>)(<i>x</i>) = <i>g</i>(<i>f</i>(<i>x</i>))</b>, a function <i>A</i> → <i>C</i>. It exists only when the baton can be passed: <b>Range(<i>f</i>) ⊆ Dom(<i>g</i>)</b>."
        },
        {
          "t": "defgrid",
          "title": "What composition does and does not obey",
          "rows": [
            {
              "k": "Not commutative",
              "v": "<i>g</i> ∘ <i>f</i> ≠ <i>f</i> ∘ <i>g</i> in general. One counterexample value is enough to prove it"
            },
            {
              "k": "Associative",
              "v": "<i>h</i> ∘ (<i>g</i> ∘ <i>f</i>) = (<i>h</i> ∘ <i>g</i>) ∘ <i>f</i>. Grouping is free, <b>order</b> is not"
            },
            {
              "k": "Identity",
              "v": "<i>f</i> ∘ <i>I<sub>A</sub></i> = <i>f</i> = <i>I<sub>B</sub></i> ∘ <i>f</i>, the do-nothing function on either side"
            },
            {
              "k": "Inheritance",
              "v": "both injective ⇒ <i>g</i> ∘ <i>f</i> injective; both surjective ⇒ surjective; both bijective ⇒ bijective"
            },
            {
              "k": "Transfer, the useful direction",
              "v": "<i>g</i> ∘ <i>f</i> injective ⇒ <b><i>f</i></b> injective · <i>g</i> ∘ <i>f</i> surjective ⇒ <b><i>g</i></b> surjective"
            },
            {
              "k": "Handoff condition",
              "v": "Range(<i>f</i>) ⊆ Dom(<i>g</i>), checked on the <b>output</b> of <i>f</i>, never on <i>x</i> alone"
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE DOMAIN OF A COMPOSITE",
          "tag": "the line most students never write",
          "main": "Dom(g ∘ f) = {x ∈ Dom(f) : f(x) ∈ Dom(g)}",
          "legend": [
            "start inside Dom(<i>f</i>), then impose the extra condition that the <b>output</b> <i>f</i>(<i>x</i>) is a legal input for <i>g</i>",
            "this is <b>not</b> Dom(<i>f</i>) ∩ Dom(<i>g</i>): those two sets live on different variables and agreeing is a coincidence"
          ],
          "note": "For f(x) = ln x and g(t) = log(t − 1), the composite needs ln x > 1, that is x > e, which is far smaller than the intersection (0, ∞)."
        },
        {
          "t": "proc",
          "title": "Computing a composite without losing marks",
          "steps": [
            "<b>Substitute the entire formula of the inner function.</b> Wherever <i>g</i>'s rule says “input”, write <i>f</i>(<i>x</i>) in full, brackets included. The brackets are where the sign errors live: (3<i>x</i> + 1)<sup>2</sup> is not 3<i>x</i><sup>2</sup> + 1.",
            "<b>Simplify only after substituting.</b> Expanding early and substituting late reverses the order of operations and produces a different function.",
            "<b>State the handoff.</b> Confirm Range(<i>f</i>) ⊆ Dom(<i>g</i>), and if it fails, restrict the domain rather than declaring the composite impossible.",
            "<b>Never assume the order can be swapped.</b> If the question asks for both <i>f</i> ∘ <i>g</i> and <i>g</i> ∘ <i>f</i>, compute both, and prove they differ by evaluating at a single convenient value rather than by comparing the expanded forms."
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · THE HANDOFF AND THE ORDER, TAP ONE",
          "chips": ["the handoff", "the filter", "order matters"],
          "captions": [
            "f(x) = ln x feeding g(t) = √t. The square root only accepts non-negative inputs, so the composite exists exactly where ln x ≥ 0, that is where the curve sits on or above the axis. The shaded strip x ≥ 1 is the domain of the composite, and everything to the left of it is thrown away even though ln x is perfectly well defined there.",
            "Now the outer function is g(t) = log(t − 1), which demands t > 1. The composite therefore needs ln x > 1, and the dashed line at height 1 meets the curve at x = e. The domain is x > e, the shaded strip, which is far smaller than the naive intersection of the two domains. This is why the domain of a composite is filtered through the output of f, never read off x alone.",
            "Order matters, drawn. With f(x) = x² and g(x) = 2x + 1, the composite f ∘ g is (2x + 1)², the darker curve, and g ∘ f is 2x² + 1, the amber one. They are different parabolas and they agree at only two inputs: x = 0, marked, and x = −2, off to the left of this window."
          ],
          "frames": [
            {
              "x": [0.05, 6],
              "y": [-2.5, 2.5],
              "bands": [{ "x0": 1, "x1": 6 }],
              "curves": [
                { "c": "log" },
                { "c": "vline", "x": 1, "dash": true, "soft": true }
              ],
              "points": [{ "x": 1, "y": 0, "label": "x = 1" }]
            },
            {
              "x": [0.05, 6],
              "y": [-2.5, 2.5],
              "bands": [{ "x0": 2.718, "x1": 6 }],
              "curves": [
                { "c": "log" },
                { "c": "line", "m": 0, "k": 1, "dash": true, "soft": true },
                { "c": "vline", "x": 2.718, "dash": true, "soft": true }
              ],
              "points": [{ "x": 2.718, "y": 1, "label": "x = e" }]
            },
            {
              "x": [-1.2, 1.2],
              "y": [-1, 13],
              "curves": [
                { "c": "poly", "coeffs": [1, 4, 4] },
                { "c": "poly", "coeffs": [1, 0, 2] }
              ],
              "points": [{ "x": 0, "y": 1, "label": "(0, 1)" }],
              "labels": [{ "x": -0.7, "y": 11.5, "text": "two different curves", "soft": true }]
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE TRANSFER LAWS, TAP A LINE",
          "steps": [
            {
              "eq": "assume g ∘ f injective, and let f(x₁) = f(x₂)",
              "why": "We want to conclude that f itself is injective, so we start from the hypothesis of injectivity for f and aim at x₁ = x₂. Everything we are allowed to use is the injectivity of the composite."
            },
            {
              "eq": "g(f(x₁)) = g(f(x₂)), that is (g ∘ f)(x₁) = (g ∘ f)(x₂)",
              "why": "Apply g to both sides of an equality. This is legal for any function whatsoever, which is the striking part: the proof never uses a single property of g beyond its being a function."
            },
            {
              "eq": "injectivity of g ∘ f forces x₁ = x₂, so f is injective",
              "why": "The composite sends x₁ and x₂ to the same value, and it is injective, so the inputs coincide. That is the first transfer law: the composite's injectivity is inherited by the inner function."
            },
            {
              "eq": "assume g ∘ f surjective, and take y in the codomain of g",
              "why": "Now for the second law. Surjectivity of the composite supplies some x with (g ∘ f)(x) = y, that is g(f(x)) = y."
            },
            {
              "eq": "f(x) is a preimage of y under g, so g is surjective",
              "why": "The element f(x) lies in the intermediate set, which is g's domain, and g sends it to y. Every y in g's codomain therefore has a preimage. Note which function each law lands on: injectivity travels inward to f, surjectivity travels outward to g."
            }
          ]
        },
        {
          "t": "p",
          "html": "Now the converses, and they are <b>false</b>, which is precisely why JEE asks about them. <b><i>g</i> ∘ <i>f</i> injective does not force <i>g</i> injective.</b> Take <i>f</i>(<i>x</i>) = <i>e</i><sup>x</sup> on ℝ, and let <i>g</i>(<i>t</i>) = <i>t</i> for <i>t</i> > 0 while <i>g</i>(<i>t</i>) = 1 − <i>t</i> for <i>t</i> ≤ 0. Then <i>g</i> ∘ <i>f</i> = <i>e</i><sup>x</sup>, which is injective, but <i>g</i>(0) = 1 = <i>g</i>(1), so <i>g</i> is not. The misbehaviour of <i>g</i> happens entirely <b>off the range of <i>f</i></b>, where the composite cannot see it."
        },
        {
          "t": "p",
          "html": "Similarly <b><i>g</i> ∘ <i>f</i> surjective does not force <i>f</i> surjective</b>: with the same <i>f</i>(<i>x</i>) = <i>e</i><sup>x</sup>, which misses every negative number, and <i>g</i>(<i>t</i>) = ln <i>t</i> for <i>t</i> > 0 and <i>g</i>(<i>t</i>) = 0 otherwise, the composite is <i>g</i>(<i>f</i>(<i>x</i>)) = <i>x</i>, onto all of ℝ, while <i>f</i> is not onto. Here is the repair, and it is examinable in its own right: <i>g</i> ∘ <i>f</i> injective <b>does</b> force <i>g</i> to be injective <b>on the range of <i>f</i></b>. That phrase is what makes the statement true, and the counterexample works only because <i>g</i> misbehaves at inputs <i>f</i> never produces."
        },
        {
          "t": "proc",
          "title": "Recovering the outer function from a composite",
          "steps": [
            "<b>Substitute a name for the inner function.</b> Given (<i>f</i> ∘ <i>g</i>)(<i>x</i>) = <i>H</i>(<i>x</i>) with <i>g</i> known, put <i>t</i> = <i>g</i>(<i>x</i>).",
            "<b>Solve for <i>x</i> in terms of <i>t</i>.</b> For <i>g</i>(<i>x</i>) = <i>x</i> + 3 this is <i>x</i> = <i>t</i> − 3, and for <i>g</i>(<i>x</i>) = 2<i>x</i> it is <i>x</i> = <i>t</i>/2.",
            "<b>Rewrite <i>H</i> entirely in <i>t</i>, then rename.</b> <i>f</i>(<i>t</i>) = <i>H</i>(<i>x</i>(<i>t</i>)), and finally write <i>t</i> as <i>x</i>. This is the <i>y</i>-method of range-finding run on symbols instead of values.",
            "<b>Verify by composing forwards.</b> Feed <i>g</i>(<i>x</i>) back into your <i>f</i> and check you recover <i>H</i>(<i>x</i>). One line, and it catches every sign slip."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "<i>f</i>, <i>g</i> : ℝ → ℝ with <i>f</i>(<i>x</i>) = 3<i>x</i> + 1 and <i>g</i>(<i>x</i>) = <i>x</i><sup>2</sup> − 2. Find <i>f</i> ∘ <i>g</i> and <i>g</i> ∘ <i>f</i>, and show they differ.",
          "steps": [
            "<i>f</i> ∘ <i>g</i>: feed <i>g</i>(<i>x</i>) into <i>f</i>. (<i>f</i> ∘ <i>g</i>)(<i>x</i>) = 3(<i>x</i><sup>2</sup> − 2) + 1 = 3<i>x</i><sup>2</sup> − 5.",
            "<i>g</i> ∘ <i>f</i>: feed <i>f</i>(<i>x</i>) into <i>g</i>. (<i>g</i> ∘ <i>f</i>)(<i>x</i>) = (3<i>x</i> + 1)<sup>2</sup> − 2 = 9<i>x</i><sup>2</sup> + 6<i>x</i> − 1.",
            "One value settles it: at <i>x</i> = 2, <i>f</i> ∘ <i>g</i> gives 7 while <i>g</i> ∘ <i>f</i> gives 47.",
            "So <i>f</i> ∘ <i>g</i> ≠ <i>g</i> ∘ <i>f</i>. Composition is not commutative."
          ],
          "ans": "3x² − 5 and 9x² + 6x − 1. Test one value rather than comparing expansions"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "Given (<i>f</i> ∘ <i>g</i>)(<i>x</i>) = <i>x</i><sup>2</sup> + 6<i>x</i> + 7 where <i>g</i>(<i>x</i>) = <i>x</i> + 3, find <i>f</i>(<i>x</i>).",
          "steps": [
            "Put <i>t</i> = <i>g</i>(<i>x</i>) = <i>x</i> + 3, so <i>x</i> = <i>t</i> − 3.",
            "<i>f</i>(<i>t</i>) = (<i>t</i> − 3)<sup>2</sup> + 6(<i>t</i> − 3) + 7 = <i>t</i><sup>2</sup> − 6<i>t</i> + 9 + 6<i>t</i> − 18 + 7.",
            "The linear terms cancel: <i>f</i>(<i>t</i>) = <i>t</i><sup>2</sup> − 2, so <i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> − 2.",
            "Verify: <i>f</i>(<i>g</i>(<i>x</i>)) = (<i>x</i> + 3)<sup>2</sup> − 2 = <i>x</i><sup>2</sup> + 6<i>x</i> + 7. ✓"
          ],
          "ans": "f(x) = x² − 2. Substitute t = g(x), invert g, rewrite, verify"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "<i>f</i> : (0, ∞) → ℝ, <i>f</i>(<i>x</i>) = ln <i>x</i>, and <i>g</i> : ℝ → ℝ, <i>g</i>(<i>t</i>) = <i>t</i><sup>2</sup> − 2<i>t</i>. Find Dom(<i>g</i> ∘ <i>f</i>), decide whether <i>g</i> ∘ <i>f</i> is one-one, and find its range.",
          "steps": [
            "Domain: Dom(<i>f</i>) = (0, ∞), and every value of ln <i>x</i> is a legal input for <i>g</i>. So Dom(<i>g</i> ∘ <i>f</i>) = (0, ∞).",
            "Substitute <i>t</i> = ln <i>x</i>. As <i>x</i> runs over (0, ∞), <i>t</i> runs over all of ℝ, and (<i>g</i> ∘ <i>f</i>)(<i>x</i>) = <i>t</i><sup>2</sup> − 2<i>t</i>.",
            "That takes the same value at <i>t</i> = 0 and <i>t</i> = 2, so <i>x</i> = 1 and <i>x</i> = <i>e</i><sup>2</sup> both give 0: many-one.",
            "Complete the square: <i>t</i><sup>2</sup> − 2<i>t</i> = (<i>t</i> − 1)<sup>2</sup> − 1 ≥ −1, attained at <i>t</i> = 1, that is <i>x</i> = <i>e</i>. Range = [−1, ∞)."
          ],
          "ans": "Domain (0, ∞), many-one, range [−1, ∞). Had g been log(t − 1) the domain would shrink to x > e"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED · 2011 PATTERN",
          "q": "<i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> and <i>g</i>(<i>x</i>) = sin <i>x</i> on ℝ. Solve (<i>f</i> ∘ <i>g</i> ∘ <i>g</i> ∘ <i>f</i>)(<i>x</i>) = (<i>g</i> ∘ <i>g</i> ∘ <i>f</i>)(<i>x</i>).",
          "steps": [
            "Read innermost first: <i>g</i> ∘ <i>g</i> ∘ <i>f</i> sends <i>x</i> to sin(sin <i>x</i><sup>2</sup>). Call that <i>u</i>.",
            "The left side applies <i>f</i> to it, so the equation is <i>u</i><sup>2</sup> = <i>u</i>, giving <i>u</i> = 0 or <i>u</i> = 1.",
            "<i>u</i> = 1 would need sin <i>x</i><sup>2</sup> = π/2 > 1, impossible. So sin(sin <i>x</i><sup>2</sup>) = 0, that is sin <i>x</i><sup>2</sup> = <i>n</i>π.",
            "But |sin <i>x</i><sup>2</sup>| ≤ 1, so only <i>n</i> = 0 survives: <i>x</i><sup>2</sup> = <i>m</i>π for <i>m</i> = 0, 1, 2, …, hence <i>x</i> = ±√(<i>m</i>π)."
          ],
          "ans": "x = ±√(mπ), m = 0, 1, 2, … The boundedness of sine kills every branch but one"
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] For <i>f</i>(<i>x</i>) = 2<i>x</i> + 1 and <i>g</i>(<i>x</i>) = <i>x</i><sup>2</sup> on ℝ, find <i>f</i> ∘ <i>g</i> and <i>g</i> ∘ <i>f</i>.",
              "a": "(<i>f</i> ∘ <i>g</i>)(<i>x</i>) = 2<i>x</i><sup>2</sup> + 1 and (<i>g</i> ∘ <i>f</i>)(<i>x</i>) = (2<i>x</i> + 1)<sup>2</sup> = 4<i>x</i><sup>2</sup> + 4<i>x</i> + 1."
            },
            {
              "q": "[CUET] <i>f</i>(<i>x</i>) = √<i>x</i> and <i>g</i>(<i>x</i>) = <i>x</i><sup>2</sup> − 3. Find Dom(<i>g</i> ∘ <i>f</i>) and Dom(<i>f</i> ∘ <i>g</i>).",
              "a": "Dom(<i>g</i> ∘ <i>f</i>) = [0, ∞), since every √<i>x</i> is legal for <i>g</i>. Dom(<i>f</i> ∘ <i>g</i>) needs <i>x</i><sup>2</sup> − 3 ≥ 0, so (−∞, −√3] ∪ [√3, ∞)."
            },
            {
              "q": "[JEE Main] Given <i>f</i>(<i>x</i> + 2) = <i>x</i><sup>2</sup> + 4<i>x</i> + 1 for all real <i>x</i>, find <i>f</i>(<i>x</i>).",
              "a": "Put <i>t</i> = <i>x</i> + 2, so <i>x</i> = <i>t</i> − 2 and <i>f</i>(<i>t</i>) = (<i>t</i> − 2)<sup>2</sup> + 4(<i>t</i> − 2) + 1 = <i>t</i><sup>2</sup> − 3. So <i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> − 3."
            },
            {
              "q": "[JEE Main] Construct <i>f</i> and <i>g</i> with <i>g</i> ∘ <i>f</i> onto but <i>f</i> not onto.",
              "a": "<i>f</i>(<i>x</i>) = <i>e</i><sup>x</sup> from ℝ to ℝ misses every negative; <i>g</i>(<i>t</i>) = ln <i>t</i> for <i>t</i> > 0 and 0 otherwise. Then <i>g</i> ∘ <i>f</i> = <i>x</i>, onto ℝ."
            },
            {
              "q": "[JEE Advanced] Find <i>f</i> and <i>g</i> with <i>g</i>(<i>f</i>(<i>x</i>)) = |sin <i>x</i>| and <i>f</i>(<i>g</i>(<i>x</i>)) = sin<sup>2</sup>√<i>x</i>.",
              "a": "<i>f</i>(<i>x</i>) = sin<sup>2</sup><i>x</i> and <i>g</i>(<i>x</i>) = √<i>x</i>. The rival pair <i>f</i> = sin, <i>g</i> = |·| fails, because sin|<i>x</i>| ≠ |sin <i>x</i>|."
            }
          ]
        },
        {
          "t": "mcq",
          "q": "If <i>f</i>(<i>x</i>) = 3<i>x</i><sup>2</sup> − 5 and <i>g</i>(<i>x</i>) = <i>x</i>/(<i>x</i><sup>2</sup> + 1), then (<i>g</i> ∘ <i>f</i>)(<i>x</i>) equals:",
          "correct": 0,
          "opts": [
            { "label": "(3x<sup>2</sup> − 5)/(9x<sup>4</sup> − 30x<sup>2</sup> + 26)", "nudge": null },
            {
              "label": "(3x<sup>2</sup> − 5)/(9x<sup>4</sup> + 6x<sup>2</sup> + 26)",
              "nudge": "The cross term is wrong. (3<i>x</i><sup>2</sup> − 5)<sup>2</sup> has −30<i>x</i><sup>2</sup>, not +6<i>x</i><sup>2</sup>: the minus sign in <i>f</i> survives the squaring."
            },
            {
              "label": "3x<sup>2</sup>/(2x<sup>2</sup> + 4)",
              "nudge": "That is a partial computation of <i>f</i> ∘ <i>g</i>, the composite in the other order. Read which function is written on the left."
            },
            {
              "label": "3x<sup>2</sup>/(9x<sup>4</sup> − 30x<sup>2</sup> + 2)",
              "nudge": "The constant + 1 in <i>g</i>'s denominator was dropped, and the numerator lost its −5. Substitute the <b>whole</b> formula of <i>f</i>, brackets included."
            }
          ],
          "solution": "Feed f(x) = 3x² − 5 into g. Numerator: 3x² − 5. Denominator: (3x² − 5)² + 1 = 9x⁴ − 30x² + 25 + 1 = 9x⁴ − 30x² + 26."
        },
        {
          "t": "mcq",
          "q": "If <i>g</i> ∘ <i>f</i> is injective, which statement is <b>always</b> true?",
          "correct": 1,
          "opts": [
            {
              "label": "g is injective",
              "nudge": "False, and the standard counterexample is worth memorising: <i>f</i> = <i>e</i><sup>x</sup> with <i>g</i>(<i>t</i>) = <i>t</i> for <i>t</i> > 0 and 1 − <i>t</i> otherwise. <i>g</i> misbehaves off the range of <i>f</i>."
            },
            { "label": "f is injective", "nudge": null },
            {
              "label": "both f and g are injective",
              "nudge": "Half right. The transfer law lands on <i>f</i> only; adding <i>g</i> to the claim breaks it for exactly the counterexample above."
            },
            {
              "label": "f is surjective",
              "nudge": "Wrong property. Injectivity of a composite transfers to injectivity of the <b>inner</b> function; surjectivity is the one that travels outward, to <i>g</i>."
            }
          ],
          "solution": "Suppose f(x₁) = f(x₂). Apply g: (g ∘ f)(x₁) = (g ∘ f)(x₂), and injectivity of the composite forces x₁ = x₂. The proof uses nothing about g, which is exactly why g itself need not be injective."
        },
        {
          "t": "mcq",
          "q": "For <i>f</i>(<i>x</i>) = √<i>x</i> and <i>g</i>(<i>x</i>) = <i>x</i><sup>2</sup> − 3, the domain of <i>f</i> ∘ <i>g</i> is:",
          "correct": 3,
          "opts": [
            {
              "label": "[0, ∞)",
              "nudge": "That is Dom(<i>g</i> ∘ <i>f</i>), the composite in the other order. Here <i>g</i> acts first, and its outputs go under the root."
            },
            {
              "label": "ℝ",
              "nudge": "Dom(<i>g</i>) is ℝ, but the composite must also survive the square root, and <i>x</i><sup>2</sup> − 3 is negative between −√3 and √3."
            },
            {
              "label": "[−√3, √3]",
              "nudge": "The inequality is the wrong way round. The root needs <i>x</i><sup>2</sup> − 3 ≥ 0, that is <i>x</i><sup>2</sup> ≥ 3, which is the <b>outside</b> of that interval."
            },
            { "label": "(−∞, −√3] ∪ [√3, ∞)", "nudge": null }
          ],
          "solution": "Dom(f ∘ g) = {x ∈ Dom(g) : g(x) ∈ Dom(f)}. Here Dom(g) = ℝ and Dom(f) = [0, ∞), so the condition is x² − 3 ≥ 0, giving |x| ≥ √3."
        },
        {
          "t": "mcq",
          "q": "For <i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> and <i>g</i>(<i>x</i>) = 2<i>x</i> + 1 on ℝ, the solutions of (<i>f</i> ∘ <i>g</i>)(<i>x</i>) = (<i>g</i> ∘ <i>f</i>)(<i>x</i>) are:",
          "correct": 2,
          "opts": [
            {
              "label": "no real x",
              "nudge": "Non-commutative does not mean the two composites never agree; it means they are not the <b>same function</b>. They may still cross, and here they cross twice."
            },
            {
              "label": "every real x",
              "nudge": "That would make the two composites identical, contradicting non-commutativity. Test <i>x</i> = 1: (2 + 1)<sup>2</sup> = 9 while 2(1) + 1 = 3."
            },
            { "label": "x = 0 and x = −2", "nudge": null },
            {
              "label": "x = 0 only",
              "nudge": "One root was lost by dividing through by <i>x</i>. From 2<i>x</i><sup>2</sup> + 4<i>x</i> = 0, factor as 2<i>x</i>(<i>x</i> + 2) = 0 instead of cancelling <i>x</i>."
            }
          ],
          "solution": "(f ∘ g)(x) = (2x + 1)² = 4x² + 4x + 1 and (g ∘ f)(x) = 2x² + 1. Setting them equal gives 2x² + 4x = 0, so 2x(x + 2) = 0 and x = 0 or x = −2."
        },
        {
          "t": "mistakes",
          "items": [
            "Treating composition as commutative. <i>f</i> ∘ <i>g</i> and <i>g</i> ∘ <i>f</i> are almost always different functions. Read <b>innermost first</b>: in <i>g</i> ∘ <i>f</i> it is <i>f</i> that touches <i>x</i>, whatever the writing order suggests.",
            "Using Dom(<i>f</i>) ∩ Dom(<i>g</i>) for the domain of a composite. The correct condition is <b><i>f</i>(<i>x</i>) ∈ Dom(<i>g</i>)</b>, a condition on the <b>output</b>. The two sometimes coincide, and relying on that is how a JEE Advanced domain question is lost.",
            "Believing the converses of the transfer laws. <i>g</i> ∘ <i>f</i> injective gives <b><i>f</i></b> injective and nothing about <i>g</i>; <i>g</i> ∘ <i>f</i> surjective gives <b><i>g</i></b> surjective and nothing about <i>f</i>. Carry the <i>e</i><sup>x</sup> counterexamples in your head.",
            "Dropping brackets on substitution. (3<i>x</i> + 1)<sup>2</sup> − 2 is not 3<i>x</i><sup>2</sup> + 1 − 2. Write the inner formula in full, in brackets, before you simplify anything.",
            "Recovering <i>f</i> from <i>f</i> ∘ <i>g</i> by cancelling <i>g</i>. There is no cancellation; substitute <i>t</i> = <i>g</i>(<i>x</i>), solve for <i>x</i>, and rewrite. Then verify forwards."
          ]
        },
        {
          "t": "protip",
          "html": "when a composite question mentions a root, a log or a denominator anywhere, write <b>Dom(<i>g</i> ∘ <i>f</i>) = {<i>x</i> ∈ Dom(<i>f</i>) : <i>f</i>(<i>x</i>) ∈ Dom(<i>g</i>)}</b> before you compute a single term. and to disprove commutativity, never expand both composites and compare: pick <i>x</i> = 1 or <i>x</i> = 2 and evaluate. one number is a complete proof and takes five seconds."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "(g ∘ f)(x) = g(f(x))",
              "note": "innermost acts first; read right to left"
            },
            {
              "f": "Dom(g ∘ f) = {x ∈ Dom f : f(x) ∈ Dom g}",
              "note": "a condition on the output, not on x"
            },
            {
              "f": "g ∘ f ≠ f ∘ g, but h ∘ (g ∘ f) = (h ∘ g) ∘ f",
              "note": "grouping is free, order is not"
            },
            {
              "f": "g ∘ f injective ⇒ f injective",
              "note": "the converse is false; g fails off Range(f)"
            },
            {
              "f": "g ∘ f surjective ⇒ g surjective",
              "note": "surjectivity travels outward, injectivity inward"
            },
            {
              "f": "recover f: put t = g(x), solve, rewrite",
              "note": "then verify by composing forwards"
            }
          ],
          "aids": [
            "“innermost first, always, whatever the writing order says”",
            "“filter the domain through f's output, never through x”"
          ]
        }
      ]
    },
    {
      "n": "05",
      "title": "Inverse Functions and Restricted Domains",
      "chip": "05 INVERSE",
      "kalam": "no bijection, no inverse, no exceptions",
      "blocks": [
        {
          "t": "p",
          "html": "Press Ctrl+Z. Whatever the last action did, undo reverses it exactly and lands you back where you started. An <b>inverse function <i>f</i><sup>−1</sup></b> is the Ctrl+Z of <i>f</i>: if <i>f</i> sends <i>a</i> to <i>b</i>, then <i>f</i><sup>−1</sup> sends <i>b</i> straight back to <i>a</i>. Formally, <i>f</i><sup>−1</sup> is the function satisfying <b><i>f</i><sup>−1</sup> ∘ <i>f</i> = <i>I</i></b> and <b><i>f</i> ∘ <i>f</i><sup>−1</sup> = <i>I</i></b>, where <i>I</i> is the do-nothing function. Composition and inverse meet exactly here: an inverse is <b>defined</b> as the thing that composes with <i>f</i> to give “do nothing”."
        },
        {
          "t": "p",
          "html": "But not every function has one, and the reason is the whole content of topic 02. If <i>f</i> were many-one, with both 2 and −2 landing on 4, then <i>f</i><sup>−1</sup>(4) would not know which to return: the undo is ambiguous. And if <i>f</i> were not onto, some target would have nothing to return to. So <b><i>f</i> is invertible ⟺ <i>f</i> is bijective</b>. Every bijection you classified in topic 02 is exactly a function you can now invert, and every non-bijection is one you cannot, until you restrict it."
        },
        {
          "t": "think",
          "html": "to get dressed you put on socks, <b>then</b> shoes. to undo it you take off shoes first, then socks. that is the socks-and-shoes rule, (<i>g</i> ∘ <i>f</i>)<sup>−1</sup> = <i>f</i><sup>−1</sup> ∘ <i>g</i><sup>−1</sup>: you undo a chain by undoing each step in <b>reverse</b> order. the same-order version is the option the paper always offers, and it is trying to remove the socks through the shoes."
        },
        {
          "t": "def",
          "term": "Inverse function",
          "html": "For a bijection <i>f</i> : <i>A</i> → <i>B</i>, the <b>inverse</b> <i>f</i><sup>−1</sup> : <i>B</i> → <i>A</i> is the unique function with <i>f</i><sup>−1</sup>(<i>b</i>) = <i>a</i> whenever <i>f</i>(<i>a</i>) = <i>b</i>, equivalently <i>f</i><sup>−1</sup> ∘ <i>f</i> = <i>I<sub>A</sub></i> and <i>f</i> ∘ <i>f</i><sup>−1</sup> = <i>I<sub>B</sub></i>. The superscript −1 here means <b>inverse function</b>, never reciprocal: <i>f</i><sup>−1</sup>(<i>x</i>) ≠ 1/<i>f</i>(<i>x</i>)."
        },
        {
          "t": "defgrid",
          "title": "What an inverse always satisfies",
          "rows": [
            {
              "k": "Existence",
              "v": "<i>f</i><sup>−1</sup> exists ⟺ <i>f</i> is <b>bijective</b>. No bijection, no inverse, on the declared sets"
            },
            {
              "k": "Uniqueness",
              "v": "if an inverse exists it is <b>unique</b>, which is what makes “the” inverse legitimate language"
            },
            {
              "k": "Self-undoing",
              "v": "(<i>f</i><sup>−1</sup>)<sup>−1</sup> = <i>f</i>. Undoing the undo returns the original"
            },
            {
              "k": "Order reversal",
              "v": "(<i>g</i> ∘ <i>f</i>)<sup>−1</sup> = <b><i>f</i><sup>−1</sup> ∘ <i>g</i><sup>−1</sup></b>, socks and shoes, never the same order"
            },
            {
              "k": "Domain and range swap",
              "v": "Dom(<i>f</i><sup>−1</sup>) = Range(<i>f</i>) and Range(<i>f</i><sup>−1</sup>) = Dom(<i>f</i>). Always state the domain"
            },
            {
              "k": "Graph",
              "v": "the graph of <i>f</i><sup>−1</sup> is the reflection of the graph of <i>f</i> in the line <b><i>y</i> = <i>x</i></b>"
            }
          ]
        },
        {
          "t": "proc",
          "title": "Swap and solve, with the check that comes first",
          "steps": [
            "<b>Check bijectivity before anything else.</b> If <i>f</i> is not one-one and onto between the stated sets, there is no inverse to find, and the honest first move is to restrict the domain or shrink the codomain until there is.",
            "<b>Write <i>y</i> = <i>f</i>(<i>x</i>)</b> and solve algebraically for <i>x</i> in terms of <i>y</i>. This step literally reverses the input-output relationship; everything after it is cosmetic.",
            "<b>Swap the symbols.</b> Replace <i>y</i> by <i>x</i> to express <i>f</i><sup>−1</sup>(<i>x</i>). Renaming a free variable changes nothing mathematically and everything about how the answer reads.",
            "<b>State the domain of <i>f</i><sup>−1</sup>,</b> which is the range of <i>f</i>. An inverse written without its domain is an incomplete answer and is marked as one.",
            "<b>Verify both ways.</b> Check <i>f</i>(<i>f</i><sup>−1</sup>(<i>x</i>)) = <i>x</i> and <i>f</i><sup>−1</sup>(<i>f</i>(<i>x</i>)) = <i>x</i>. One equation alone only gives a one-sided inverse; a genuine two-sided inverse needs both compositions to collapse to the identity."
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY THE ORDER REVERSES, TAP A LINE",
          "steps": [
            {
              "eq": "f : A → B and g : B → C both bijective",
              "why": "Then g ∘ f : A → C is bijective too, by the inheritance rule, so it has an inverse. The claim is that the inverse is f⁻¹ ∘ g⁻¹, and to prove a function is the inverse of g ∘ f it is enough to show it composes with g ∘ f to give the identity on both sides."
            },
            {
              "eq": "(f⁻¹ ∘ g⁻¹) ∘ (g ∘ f) = f⁻¹ ∘ (g⁻¹ ∘ g) ∘ f",
              "why": "Regroup using associativity, which composition always has. This is the only structural fact the proof needs, and it is what lets the two middle factors meet each other."
            },
            {
              "eq": "= f⁻¹ ∘ I_B ∘ f = f⁻¹ ∘ f = I_A",
              "why": "The inner pair g⁻¹ ∘ g collapses to the identity on B, which is what an inverse does. The identity then vanishes under composition, and the outer pair collapses in turn. The composite has been undone from the inside out."
            },
            {
              "eq": "and (g ∘ f) ∘ (f⁻¹ ∘ g⁻¹) = I_C",
              "why": "The identical argument in the other direction. Both compositions give the identity, and inverses are unique, so (g ∘ f)⁻¹ = f⁻¹ ∘ g⁻¹. To undo do f then g, you undo g first and f last: shoes off before socks."
            }
          ]
        },
        {
          "t": "p",
          "html": "The picture is worth as much as the algebra. Because <i>f</i><sup>−1</sup> sends <i>b</i> back to <i>a</i> exactly when <i>f</i> sends <i>a</i> to <i>b</i>, the point (<i>a</i>, <i>b</i>) on the graph of <i>f</i> corresponds to the point (<i>b</i>, <i>a</i>) on the graph of <i>f</i><sup>−1</sup>. Swapping coordinates is reflection in the line <i>y</i> = <i>x</i>. So an increasing function has an increasing inverse, a branch endpoint swaps its coordinates, and any claimed inverse that is <b>not</b> the mirror image of <i>f</i> in that line is wrong before you check the algebra."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · THE MIRROR IN y = x, TAP ONE",
          "chips": ["a linear pair", "a branch for x²", "exp and log"],
          "captions": [
            "f(x) = 2x + 1 in ink and its inverse (x − 1)/2 in amber, with the dashed mirror y = x between them. The point (1, 3) on f corresponds to (3, 1) on the inverse: the coordinates simply swap. Notice both lines climb, because reflecting in y = x preserves the direction of travel.",
            "y = x² is many-one on ℝ, so it has no inverse there. Discard the shaded left arm and what is left, x ≥ 0, is strictly increasing with image [0, ∞), so it is bijective onto that. Its inverse is the square root, and the two curves are mirror images in y = x. The branch you keep decides the sign of the root in the answer.",
            "The exponential and the logarithm are each other's inverses, and the picture says so: reflect one in y = x and you get the other. Read the domain and range swap straight off the axes. eˣ has domain ℝ and range (0, ∞), and ln x has domain (0, ∞) and range ℝ. The marked points (0, 1) and (1, 0) are one pair of swapped coordinates."
          ],
          "frames": [
            {
              "x": [-4, 4],
              "y": [-4, 4],
              "curves": [
                { "c": "line", "m": 2, "k": 1 },
                { "c": "line", "m": 0.5, "k": -0.5 },
                { "c": "line", "m": 1, "k": 0, "dash": true, "soft": true }
              ],
              "points": [
                { "x": 1, "y": 3, "label": "(1, 3)" },
                { "x": 3, "y": 1, "label": "(3, 1)" }
              ]
            },
            {
              "x": [-2, 4],
              "y": [-1, 4],
              "bands": [{ "x0": -2, "x1": 0 }],
              "curves": [
                { "c": "poly", "coeffs": [0, 0, 1] },
                { "c": "sqrt" },
                { "c": "line", "m": 1, "k": 0, "dash": true, "soft": true }
              ],
              "points": [{ "x": 0, "y": 0 }],
              "labels": [{ "x": -1, "y": 3.4, "text": "discarded", "soft": true }]
            },
            {
              "x": [-3, 3],
              "y": [-3, 3],
              "curves": [
                { "c": "exp" },
                { "c": "log" },
                { "c": "line", "m": 1, "k": 0, "dash": true, "soft": true }
              ],
              "points": [
                { "x": 0, "y": 1, "label": "(0, 1)" },
                { "x": 1, "y": 0, "label": "(1, 0)" }
              ]
            }
          ]
        },
        {
          "t": "p",
          "html": "Most functions you meet are not bijective on their natural domain, but almost all become bijective on the right <b>piece</b>. If <i>f</i> is strictly monotonic on an interval <i>I</i>, then <i>f</i> : <i>I</i> → <i>f</i>(<i>I</i>) is bijective and therefore invertible. For the standard functions of this course, the <b>maximal</b> such intervals end at turning points, where <i>f</i>′(<i>x</i>) = 0, or at breaks in the formula. That is the entire theory of restricted domains."
        },
        {
          "t": "proc",
          "title": "Inverting on a maximal interval",
          "steps": [
            "<b>Locate the turning points and the breaks.</b> They cut the domain into monotonic branches, and each branch is a separate invertible function with its own answer.",
            "<b>Compute each branch's image <i>f</i>(<i>I</i>).</b> That image becomes the codomain on which the branch is onto, and then the domain of that branch's inverse.",
            "<b>Invert branch by branch with swap and solve.</b> Where the algebra throws up a quadratic, you get two roots, and the <b>branch condition</b> chooses which one: <i>x</i> ≥ vertex takes the plus root, <i>x</i> ≤ vertex the minus root.",
            "<b>Confirm with the reflection.</b> Each branch's endpoints must swap coordinates with the inverse's endpoints, and an increasing branch must have an increasing inverse. If that fails, a sign is wrong."
          ]
        },
        {
          "t": "p",
          "html": "For a <b>piecewise</b> function, invert each piece separately and take the domain of <i>f</i><sup>−1</sup> to be the union of the piece-images. The sanity check is free and is really the injectivity test in disguise: <b>if two piece-images overlap, some output has two preimages and <i>f</i> was never one-one</b>. So compute the images first, check they are pairwise disjoint, and only then invert."
        },
        {
          "t": "formula",
          "kicker": "BRANCH DISCIPLINE · THE QUADRATIC CASE",
          "tag": "the distractor is always the discarded root",
          "main": "t<sup>2</sup> − yt + 1 = 0 ⟹ t = (y ± √(y<sup>2</sup> − 4))/2",
          "legend": [
            "the two roots <b>multiply to 1</b>, so exactly one of them is ≥ 1: on a domain demanding <i>t</i> ≥ 1 the plus root is forced",
            "same shape for <i>x</i> + 1/<i>x</i> on [1, ∞) and for 2<sup>x</sup> + 2<sup>−x</sup> on [0, ∞), where <i>t</i> = 2<sup>x</sup> ≥ 1"
          ],
          "note": "Never choose the root by taste. Write down the inequality the stated domain imposes on t and let it kill one branch on paper."
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "<i>f</i> : ℝ ∖ {3} → ℝ ∖ {2} with <i>f</i>(<i>x</i>) = (2<i>x</i> − 1)/(<i>x</i> − 3). Find <i>f</i><sup>−1</sup>(<i>x</i>) and state its domain.",
          "steps": [
            "This is a Mobius-type map and is bijective between the stated sets, so <i>f</i><sup>−1</sup> exists. Swap and solve.",
            "Set <i>y</i> = (2<i>x</i> − 1)/(<i>x</i> − 3) and clear: <i>y</i>(<i>x</i> − 3) = 2<i>x</i> − 1, so <i>yx</i> − 3<i>y</i> = 2<i>x</i> − 1.",
            "Gather: <i>x</i>(<i>y</i> − 2) = 3<i>y</i> − 1, hence <i>x</i> = (3<i>y</i> − 1)/(<i>y</i> − 2).",
            "Swap symbols: <i>f</i><sup>−1</sup>(<i>x</i>) = (3<i>x</i> − 1)/(<i>x</i> − 2), domain ℝ ∖ {2}. Sanity check: Dom(<i>f</i><sup>−1</sup>) = ℝ ∖ {2} = Range(<i>f</i>) and Range(<i>f</i><sup>−1</sup>) = ℝ ∖ {3} = Dom(<i>f</i>). ✓"
          ],
          "ans": "f⁻¹(x) = (3x − 1)/(x − 2) on ℝ ∖ {2}. The domain and range swap is the free audit"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "Find the maximal intervals on which <i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> − 4<i>x</i> + 5 is invertible, and find <i>f</i><sup>−1</sup> on each.",
          "steps": [
            "Complete the square: <i>f</i>(<i>x</i>) = (<i>x</i> − 2)<sup>2</sup> + 1, one turning point at <i>x</i> = 2 with value 1.",
            "Branches: (−∞, 2] decreasing and [2, ∞) increasing, both with image [1, ∞). These are the maximal intervals.",
            "On <i>x</i> ≥ 2: <i>y</i> = (<i>x</i> − 2)<sup>2</sup> + 1 gives (<i>x</i> − 2)<sup>2</sup> = <i>y</i> − 1, and <i>x</i> ≥ 2 forces the plus root, so <i>x</i> = 2 + √(<i>y</i> − 1).",
            "So <i>f</i><sup>−1</sup>(<i>x</i>) = 2 + √(<i>x</i> − 1) on [1, ∞); the left branch gives 2 − √(<i>x</i> − 1) on the same domain. Check: <i>f</i>(4) = 5 and 2 + √4 = 4. ✓"
          ],
          "ans": "Two branches about x = 2, inverses 2 ± √(x − 1) on [1, ∞). The branch chooses the sign"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN · 2001 PATTERN",
          "q": "<i>f</i> : [1, ∞) → [2, ∞) with <i>f</i>(<i>x</i>) = <i>x</i> + 1/<i>x</i>. Find <i>f</i><sup>−1</sup>(<i>x</i>).",
          "steps": [
            "Set <i>y</i> = <i>x</i> + 1/<i>x</i> and clear the fraction: <i>x</i><sup>2</sup> − <i>yx</i> + 1 = 0.",
            "Solve: <i>x</i> = (<i>y</i> ± √(<i>y</i><sup>2</sup> − 4))/2. Two roots, and only one is admissible.",
            "The roots multiply to 1, so the minus root equals 2/(<i>y</i> + √(<i>y</i><sup>2</sup> − 4)), which is less than 1 for <i>y</i> > 2 and violates <i>x</i> ≥ 1.",
            "So the plus root is forced: <i>f</i><sup>−1</sup>(<i>x</i>) = (<i>x</i> + √(<i>x</i><sup>2</sup> − 4))/2 on [2, ∞)."
          ],
          "ans": "(x + √(x² − 4))/2. The discarded minus root is the distractor every time"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "Show <i>f</i>(<i>x</i>) = 2<sup>x</sup> + 2<sup>−x</sup> is a bijection from [0, ∞) onto its image, find the image, and find <i>f</i><sup>−1</sup>.",
          "steps": [
            "<i>f</i> is even, so it cannot be one-one on ℝ. On [0, ∞), <i>f</i>′(<i>x</i>) = (ln 2)(2<sup>x</sup> − 2<sup>−x</sup>) ≥ 0, zero only at <i>x</i> = 0: strictly increasing, hence one-one.",
            "<i>f</i>(0) = 2 and <i>f</i>(<i>x</i>) → ∞, so by strict increase the image is exactly [2, ∞).",
            "Put <i>t</i> = 2<sup>x</sup>, so <i>t</i> ≥ 1 and <i>y</i> = <i>t</i> + 1/<i>t</i>, giving <i>t</i><sup>2</sup> − <i>yt</i> + 1 = 0 and <i>t</i> = (<i>y</i> ± √(<i>y</i><sup>2</sup> − 4))/2.",
            "Roots multiply to 1 and <i>t</i> ≥ 1, so take the plus root: <i>f</i><sup>−1</sup>(<i>x</i>) = log<sub>2</sub>((<i>x</i> + √(<i>x</i><sup>2</sup> − 4))/2) on [2, ∞). Check: <i>f</i><sup>−1</sup>(2) = log<sub>2</sub>1 = 0. ✓"
          ],
          "ans": "Image [2, ∞), inverse log₂((x + √(x² − 4))/2). Same quadratic, one extra logarithm"
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Find the inverse of <i>f</i> : ℝ → ℝ, <i>f</i>(<i>x</i>) = (<i>x</i> − 5)/4.",
              "a": "<i>y</i> = (<i>x</i> − 5)/4 gives <i>x</i> = 4<i>y</i> + 5, so <i>f</i><sup>−1</sup>(<i>x</i>) = 4<i>x</i> + 5, domain ℝ."
            },
            {
              "q": "[CUET] If <i>f</i>(<i>x</i>) = 2<i>x</i> + 3 and <i>g</i>(<i>x</i>) = <i>x</i> − 1 are invertible, find (<i>g</i> ∘ <i>f</i>)<sup>−1</sup>(<i>x</i>).",
              "a": "(<i>g</i> ∘ <i>f</i>)(<i>x</i>) = 2<i>x</i> + 2, so (<i>g</i> ∘ <i>f</i>)<sup>−1</sup>(<i>x</i>) = (<i>x</i> − 2)/2. Via socks and shoes, <i>f</i><sup>−1</sup>(<i>g</i><sup>−1</sup>(<i>x</i>)) = ((<i>x</i> + 1) − 3)/2, the same thing."
            },
            {
              "q": "[JEE Main] Is <i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> − 2<i>x</i> one-one on [−1, 2]? Invert it on a maximal subinterval.",
              "a": "No: it falls on [−1, 1] from 3 to −1 and rises on [1, 2] from −1 to 0. On [1, 2] the image is [−1, 0] and <i>f</i><sup>−1</sup>(<i>x</i>) = 1 + √(<i>x</i> + 1)."
            },
            {
              "q": "[JEE Main] Invert <i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> on [0, 1] and 2<i>x</i> − 1 on (1, 2], after confirming invertibility.",
              "a": "Piece-images [0, 1] and (1, 3] are disjoint, so <i>f</i> is one-one with range [0, 3]. Then <i>f</i><sup>−1</sup>(<i>x</i>) = √<i>x</i> on [0, 1] and (<i>x</i> + 1)/2 on (1, 3]."
            },
            {
              "q": "[JEE Advanced] Show <i>f</i>(<i>x</i>) = <i>x</i>/(1 + |<i>x</i>|) is a bijection ℝ → (−1, 1) and find <i>f</i><sup>−1</sup>.",
              "a": "For <i>x</i> ≥ 0, <i>y</i> = <i>x</i>/(1 + <i>x</i>) gives <i>x</i> = <i>y</i>/(1 − <i>y</i>); for <i>x</i> < 0, <i>x</i> = <i>y</i>/(1 + <i>y</i>). Both are <i>f</i><sup>−1</sup>(<i>x</i>) = <i>x</i>/(1 − |<i>x</i>|) on (−1, 1). It is continuous and strictly increasing with limits ±1, hence onto."
            }
          ]
        },
        {
          "t": "mcq",
          "q": "If <i>f</i> : <i>A</i> → <i>B</i> and <i>g</i> : <i>B</i> → <i>C</i> are bijections, then (<i>g</i> ∘ <i>f</i>)<sup>−1</sup> is:",
          "correct": 0,
          "opts": [
            { "label": "f<sup>−1</sup> ∘ g<sup>−1</sup>", "nudge": null },
            {
              "label": "g<sup>−1</sup> ∘ f<sup>−1</sup>",
              "nudge": "The single most common error in the topic. Keeping the same order tries to remove the socks before the shoes, and the types do not even match: <i>f</i><sup>−1</sup> cannot accept an element of <i>C</i>."
            },
            {
              "label": "f ∘ g",
              "nudge": "That is a composite, not an inverse at all. Undoing requires the inverse of each piece, not the pieces themselves."
            },
            {
              "label": "g ∘ f",
              "nudge": "That is the original composite. Inverting must change something; this option changes nothing."
            }
          ],
          "solution": "Order reversal: (f⁻¹ ∘ g⁻¹) ∘ (g ∘ f) = f⁻¹ ∘ (g⁻¹ ∘ g) ∘ f = f⁻¹ ∘ f = I. Undo the last-applied function first."
        },
        {
          "t": "mcq",
          "q": "Which function ℤ → ℤ is invertible?",
          "correct": 1,
          "opts": [
            {
              "label": "f(x) = x<sup>2</sup>",
              "nudge": "Many-one, since <i>x</i> and −<i>x</i> share an image, so the undo would be ambiguous. Not invertible on ℤ."
            },
            { "label": "f(x) = x + 2", "nudge": null },
            {
              "label": "f(x) = |x|",
              "nudge": "Fails both tests at once: many-one, and not onto ℤ because no negative integer is ever an output."
            },
            {
              "label": "f(x) = x<sup>2</sup> + 1",
              "nudge": "Same defect as squaring, shifted up by one. The shift changes nothing about injectivity."
            }
          ],
          "solution": "x + 2 is a bijection on ℤ: one-one since x₁ + 2 = x₂ + 2 forces x₁ = x₂, and onto since every integer y has the preimage y − 2. Its inverse is f⁻¹(x) = x − 2. Invertible ⟺ bijective."
        },
        {
          "t": "mcq",
          "q": "For <i>f</i> : ℝ → ℝ, <i>f</i>(<i>x</i>) = 4<i>x</i> − 9, the value of <i>f</i><sup>−1</sup>(3) is:",
          "correct": 2,
          "opts": [
            {
              "label": "1/3",
              "nudge": "That is 1/<i>f</i>(3) evaluated wrongly, and it is the reciprocal trap in its purest form: <i>f</i><sup>−1</sup> is not 1/<i>f</i>."
            },
            {
              "label": "1/(4 · 3 − 9)",
              "nudge": "This computes 1/<i>f</i>(3). The superscript −1 on a <b>function</b> means inverse, on a <b>number</b> means reciprocal, and they are unrelated."
            },
            { "label": "3", "nudge": null },
            {
              "label": "cannot be found",
              "nudge": "Every non-constant linear map ℝ → ℝ is a bijection and therefore invertible. There is nothing here that could block it."
            }
          ],
          "solution": "Fastest route: solve f(x) = 3, that is 4x − 9 = 3, giving x = 3. That single value is f⁻¹(3), with no need to build the whole inverse. Check: f(3) = 12 − 9 = 3."
        },
        {
          "t": "mcq",
          "q": "<i>f</i> : ℝ → (−1, 1) with <i>f</i>(<i>x</i>) = <i>x</i>/(1 + |<i>x</i>|). Then <i>f</i><sup>−1</sup>(<i>x</i>) is:",
          "correct": 3,
          "opts": [
            {
              "label": "x/(1 + |x|)",
              "nudge": "That is <i>f</i> itself. It is not an involution: <i>f</i>(<i>f</i>(1/2)) = 1/4, not 1/2."
            },
            {
              "label": "(1 + |x|)/x",
              "nudge": "The reciprocal trap again, dressed as an algebraic flip. Inverting a function is not inverting a fraction."
            },
            {
              "label": "x/(1 + x)",
              "nudge": "Right shape, wrong sign, and the modulus has been dropped. Solving <i>y</i> = <i>x</i>/(1 + <i>x</i>) for <i>x</i> gives <i>y</i>/(1 − <i>y</i>), a minus in the denominator."
            },
            { "label": "x/(1 − |x|)", "nudge": null }
          ],
          "solution": "For x ≥ 0, y = x/(1 + x) gives x = y/(1 − y); for x < 0, y = x/(1 − x) gives x = y/(1 + y). Since y has the same sign as x, both cases read as x/(1 − |x|), on the domain (−1, 1)."
        },
        {
          "t": "mistakes",
          "items": [
            "Reading <i>f</i><sup>−1</sup> as 1/<i>f</i>. The superscript means <b>inverse function</b>, and this distractor appears in every decade of the previous-year bank. On numbers −1 means reciprocal; on functions it does not.",
            "Inverting a function that is not bijective. No inverse exists unless <i>f</i> is one-one <b>and</b> onto between the stated sets. Restrict first, then invert, and say which branch you restricted to.",
            "Keeping the order when inverting a composite. (<i>g</i> ∘ <i>f</i>)<sup>−1</sup> = <b><i>f</i><sup>−1</sup> ∘ <i>g</i><sup>−1</sup></b>. The same-order option is offered every single time.",
            "Choosing the wrong root. A quadratic in the swap step gives two roots and the <b>stated domain</b> discards one. Write the inequality down; the distractor options are built from the root you were supposed to throw away.",
            "Omitting the domain of <i>f</i><sup>−1</sup>. It is the <b>range of <i>f</i></b>, and an inverse quoted without it is incomplete. On a piecewise function, check first that the piece-images are disjoint, because overlapping images mean <i>f</i> was never one-one."
          ]
        },
        {
          "t": "protip",
          "html": "to evaluate <i>f</i><sup>−1</sup>(<i>c</i>) you almost never need the whole inverse: just <b>solve <i>f</i>(<i>x</i>) = <i>c</i></b>, and that single value is <i>f</i><sup>−1</sup>(<i>c</i>). to <b>verify</b> any claimed inverse in seconds, compose it with <i>f</i> and look for <i>x</i>. and to spot a self-inverse before doing any algebra, compose the function with itself: 1/<i>x</i>, <i>c</i> − <i>x</i>, (<i>a</i> − <i>x</i><sup>n</sup>)<sup>1/n</sup> and most Mobius-type maps collapse to <i>x</i> in one line."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "f⁻¹ exists ⟺ f is bijective",
              "note": "restrict the domain if it is not"
            },
            {
              "f": "f⁻¹ ∘ f = I and f ∘ f⁻¹ = I",
              "note": "verify both; one side is not enough"
            },
            {
              "f": "(g ∘ f)⁻¹ = f⁻¹ ∘ g⁻¹",
              "note": "socks and shoes; never the same order"
            },
            {
              "f": "Dom(f⁻¹) = Range(f), Range(f⁻¹) = Dom(f)",
              "note": "state it, and use it as a free audit"
            },
            {
              "f": "graph of f⁻¹ = graph of f reflected in y = x",
              "note": "endpoints swap coordinates; direction is kept"
            },
            {
              "f": "f⁻¹(x) ≠ 1/f(x)",
              "note": "to get f⁻¹(c) fast, just solve f(x) = c"
            }
          ],
          "aids": [
            "“no bijection, no inverse”",
            "“two roots out, one branch condition in”"
          ]
        }
      ]
    },
    {
      "n": "06",
      "title": "Iterates, Cycles and Periods from a Rule",
      "chip": "06 ITERATES",
      "kalam": "reduce the exponent modulo the cycle",
      "blocks": [
        {
          "t": "p",
          "html": "Everything in topic 04 composed two <b>different</b> functions. Compose a function with <b>itself</b> and something new appears: the iterates can come back round. Write <i>f</i><sup>2</sup> for <i>f</i> ∘ <i>f</i>, <i>f</i><sup>3</sup> for <i>f</i> ∘ <i>f</i><sup>2</sup>, and so on, with <i>f</i><sup>0</sup> the identity. Associativity gives <b><i>f</i><sup>m</sup> ∘ <i>f</i><sup>n</sup> = <i>f</i><sup>m+n</sup></b>, so iterates behave like powers of a number, provided you never leave the domain."
        },
        {
          "t": "p",
          "html": "The payoff is arithmetic. If <i>f</i><sup>k</sup> is the identity, then applying <i>f</i> another <i>k</i> times changes nothing, so <b><i>f</i><sup>n</sup> depends only on <i>n</i> modulo <i>k</i></b>. That is why an exam can ask for <i>f</i><sup>2023</sup>(<i>x</i>) and expect an answer: the cycle length is small, usually 2, 3 or 4, and the whole question collapses to one division with remainder."
        },
        {
          "t": "think",
          "html": "it is the rangoli you rotate by a quarter turn. do it four times and the pattern is exactly where it started. so “rotate 2023 times” is not 2023 pieces of work, it is 2023 = 4 × 505 + 3, and the answer is “three quarter-turns”. the cycle length turns an impossible count into a remainder."
        },
        {
          "t": "def",
          "term": "Iterate and order",
          "html": "For <i>f</i> : <i>A</i> → <i>A</i>, the <i>n</i>-th <b>iterate</b> is <i>f</i><sup>n</sup> = <i>f</i> ∘ <i>f</i> ∘ ⋯ ∘ <i>f</i> (<i>n</i> copies), with <i>f</i><sup>0</sup> = <i>I</i>. If <i>f</i><sup>k</sup> = <i>I</i> for some <i>k</i> ≥ 1 and no smaller positive power does, <i>k</i> is the <b>order</b> of <i>f</i>, and then <b><i>f</i><sup>n</sup> = <i>f</i><sup>n mod k</sup></b>. A function of order 2 is an <b>involution</b>: it is its own inverse."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · ITERATES AND INVOLUTIONS",
          "tag": "f a self-map, k its order",
          "main": "f<sup>m</sup> ∘ f<sup>n</sup> = f<sup>m+n</sup> · f<sup>k</sup> = I ⟹ f<sup>n</sup> = f<sup>n mod k</sup>",
          "legend": [
            "linear fractional maps (<i>ax</i> + <i>b</i>)/(<i>cx</i> + <i>d</i>) stay linear fractional under iteration, and their orders are tiny: usually 2, 3 or 4",
            "the only <b>linear</b> involutions are <i>f</i>(<i>x</i>) = <i>x</i> and <i>f</i>(<i>x</i>) = <i>c</i> − <i>x</i>, from <i>m</i><sup>2</sup> = 1 and <i>c</i>(<i>m</i> + 1) = 0"
          ],
          "note": "Track the poles as you iterate: each application forbids the inputs where an intermediate denominator vanishes, so the identity fᵏ = I holds wherever the whole journey is defined."
        },
        {
          "t": "proc",
          "title": "Finding the order, then reducing the exponent",
          "steps": [
            "<b>Compute <i>f</i><sup>2</sup>, then <i>f</i><sup>3</sup>, and stop the moment you hit <i>x</i>.</b> For a linear fractional map this takes two lines each and the order is almost never more than 4, so brute force is the right method.",
            "<b>Simplify hard at each step.</b> Clear the compound fraction by multiplying numerator and denominator by the inner denominator; the cancellations are what make the next step readable.",
            "<b>Divide the exponent by the order.</b> Write <i>n</i> = <i>qk</i> + <i>r</i> with 0 ≤ <i>r</i> < <i>k</i>, and the answer is <i>f</i><sup>r</sup>, which you have already computed.",
            "<b>If the question gives a value rather than a formula, run the orbit.</b> Compute <i>f</i>(<i>x</i><sub>0</sub>), <i>f</i><sup>2</sup>(<i>x</i><sub>0</sub>), … until a value repeats; the length of that cycle is what the exponent reduces against.",
            "<b>Check on one concrete number.</b> A claimed order of 4 should send some chosen input round a genuine 4-cycle. It costs four arithmetic steps and it catches an algebra slip immediately."
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY (x − 1)/(x + 1) HAS ORDER 4, TAP A LINE",
          "steps": [
            {
              "eq": "f(x) = (x − 1)/(x + 1)",
              "why": "A linear fractional map, so each iterate will be linear fractional too and the computation cannot run away. The only input the first step forbids is x = −1."
            },
            {
              "eq": "f²(x) = (−2/(x + 1)) ÷ (2x/(x + 1)) = −1/x",
              "why": "Substitute f into itself. The numerator is f − 1 = (x − 1 − x − 1)/(x + 1) = −2/(x + 1); the denominator is f + 1 = 2x/(x + 1). The common factor (x + 1) cancels and the result is startlingly simple."
            },
            {
              "eq": "f³(x) = f(−1/x) = (−1 − x)/(x − 1) = (1 + x)/(1 − x)",
              "why": "Apply f to the second iterate. Multiply numerator and denominator by x to clear the fraction, then take a common minus sign out of the top and bottom to reach the tidy form."
            },
            {
              "eq": "f⁴(x) = (2x/(1 − x)) ÷ (2/(1 − x)) = x",
              "why": "One more application and everything collapses to the identity. So the order is 4, and every exponent reduces modulo 4: 2024 = 4 × 506 gives the identity, while 2023 = 4 × 505 + 3 gives f³. Concretely the orbit of 2 is 2, 1/3, −1/2, −3, and back to 2."
            }
          ]
        },
        {
          "t": "p",
          "html": "Order 2 deserves its own name because it is the most examined case. A function with <i>f</i><sup>2</sup> = <i>I</i> is an <b>involution</b>, and an involution <b>is its own inverse</b>, which is why spotting one saves an entire swap-and-solve. For a linear <i>f</i>(<i>x</i>) = <i>mx</i> + <i>c</i>, compute <i>f</i>(<i>f</i>(<i>x</i>)) = <i>m</i><sup>2</sup><i>x</i> + <i>c</i>(<i>m</i> + 1) and set it identically equal to <i>x</i>: comparing coefficients gives <i>m</i><sup>2</sup> = 1 and <i>c</i>(<i>m</i> + 1) = 0, so either <i>m</i> = 1 with <i>c</i> = 0, or <i>m</i> = −1 with <i>c</i> free. <b>The identity and the reflections <i>c</i> − <i>x</i>, and nothing else.</b>"
        },
        {
          "t": "p",
          "html": "Now the companion pattern, and it is where JEE Advanced spends its time. Sometimes a function is not given by a formula at all, only by a <b>rule it obeys</b>, and you are asked for a period. Two rule-shapes dominate. The first is a <b>symmetry axis</b>: “<i>f</i>(<i>a</i> + <i>x</i>) = <i>f</i>(<i>a</i> − <i>x</i>) for all <i>x</i>” says the graph is mirror-symmetric about the vertical line <i>x</i> = <i>a</i>, equivalently <b><i>f</i>(2<i>a</i> − <i>x</i>) = <i>f</i>(<i>x</i>)</b>. Evenness is the special case <i>a</i> = 0. One axis alone gives no period. <b>Two</b> axes give one immediately."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · TWO AXES FORCE A PERIOD, TAP A LINE",
          "steps": [
            {
              "eq": "f(2a − x) = f(x) and f(2b − x) = f(x), a ≠ b",
              "why": "Each identity is one mirror. Written this way, an axis is a substitution rule: replacing x by 2a − x leaves the value unchanged, and the same for 2b − x. Two substitutions can be composed, and that composition is where the period comes from."
            },
            {
              "eq": "replace x by 2a − x in the second identity",
              "why": "The second identity holds for every x, so it holds for the particular input 2a − x. This is the only move in the proof, and it is available precisely because the identity is universally quantified."
            },
            {
              "eq": "f(2b − (2a − x)) = f(2a − x) = f(x)",
              "why": "The left side is what the second mirror gives at that input; the middle is the same expression rewritten; the right uses the first mirror. Reading the outer two terms is the whole conclusion."
            },
            {
              "eq": "f(x + 2(b − a)) = f(x), so 2|b − a| is a period",
              "why": "Simplify 2b − 2a + x. The function repeats after a shift of twice the gap between the axes. Two mirrors compose to a translation, which is the same fact that makes a kaleidoscope repeat. Axes then come in a family spaced half a period apart."
            }
          ]
        },
        {
          "t": "defgrid",
          "title": "Recurrences and the periods they hide",
          "rows": [
            {
              "k": "f(x + a) = −f(x)",
              "v": "apply twice: <i>f</i>(<i>x</i> + 2<i>a</i>) = −<i>f</i>(<i>x</i> + <i>a</i>) = <i>f</i>(<i>x</i>). Period <b>2<i>a</i></b>"
            },
            {
              "k": "f(x + a) = 1/f(x)",
              "v": "apply twice: the reciprocal of a reciprocal. Period <b>2<i>a</i></b>"
            },
            {
              "k": "f(x + a) = 1 − f(x)",
              "v": "apply twice: 1 − (1 − <i>f</i>) = <i>f</i>. Period <b>2<i>a</i></b>, and <i>a</i> itself is a period only if <i>f</i> ≡ ½"
            },
            {
              "k": "f(x + a) = (1 + f(x))/(1 − f(x))",
              "v": "twice gives −1/<i>f</i>(<i>x</i>), four times gives <i>f</i>(<i>x</i>). Period <b>4<i>a</i></b>"
            },
            {
              "k": "Two axes at a and b",
              "v": "period <b>2|<i>b</i> − <i>a</i>|</b>; if <i>f</i> is also even, one axis at <i>a</i> gives period 2<i>a</i>"
            },
            {
              "k": "f(x + 2) = f(x) + 3",
              "v": "<b>no</b> period: iterating gives <i>f</i>(<i>x</i> + 2<i>n</i>) = <i>f</i>(<i>x</i>) + 3<i>n</i>, unbounded, so values never repeat"
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · MIRRORS, PERIODS AND ORBITS, TAP ONE",
          "chips": ["two axes", "the period", "a 4-cycle"],
          "captions": [
            "A function obeying f(2 + x) = f(2 − x) and f(4 + x) = f(4 − x). The two dashed vertical lines are its mirrors, at x = 2 and x = 4. Neither mirror on its own says anything about repetition: a single axis is satisfied by any symmetric bump.",
            "The same curve with the consequence shaded. Composing the two mirrors is a translation by twice the gap, 2 times (4 − 2) = 4, so the shaded stretch from x = 2 to x = 6 is one full period and the curve after it is a copy of the curve inside it. Two mirrors force repetition; one does not.",
            "Iteration drawn as an orbit. Plotting n against the n-th iterate of x = 2 under f(x) = (x − 1)/(x + 1) gives 2, then 1/3, then −1/2, then −3, and at n = 4 the value is 2 again. The orbit closes, so f has order 4 and any exponent can be reduced modulo 4."
          ],
          "frames": [
            {
              "x": [0, 8],
              "y": [-1.7, 1.7],
              "curves": [
                { "c": "cos", "b": 1.5708, "shift": 2 },
                { "c": "vline", "x": 2, "dash": true, "soft": true },
                { "c": "vline", "x": 4, "dash": true, "soft": true }
              ],
              "labels": [
                { "x": 2, "y": 1.5, "text": "x = 2" },
                { "x": 4, "y": 1.5, "text": "x = 4" }
              ]
            },
            {
              "x": [0, 8],
              "y": [-1.7, 1.7],
              "bands": [{ "x0": 2, "x1": 6 }],
              "curves": [
                { "c": "cos", "b": 1.5708, "shift": 2 },
                { "c": "vline", "x": 2, "dash": true, "soft": true },
                { "c": "vline", "x": 6, "dash": true, "soft": true }
              ],
              "labels": [{ "x": 4, "y": 1.5, "text": "one period, length 4" }]
            },
            {
              "x": [-0.5, 4.5],
              "y": [-4, 3.2],
              "segments": [
                { "from": [0, 2], "to": [1, 0.333], "dash": true, "soft": true },
                { "from": [1, 0.333], "to": [2, -0.5], "dash": true, "soft": true },
                { "from": [2, -0.5], "to": [3, -3], "dash": true, "soft": true },
                { "from": [3, -3], "to": [4, 2], "dash": true, "soft": true }
              ],
              "points": [
                { "x": 0, "y": 2, "label": "2" },
                { "x": 1, "y": 0.333, "label": "1/3" },
                { "x": 2, "y": -0.5, "label": "−1/2" },
                { "x": 3, "y": -3, "label": "−3" },
                { "x": 4, "y": 2, "label": "back to 2" }
              ]
            }
          ]
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "<i>f</i>(<i>x</i>) = (<i>x</i> − 1)/(<i>x</i> + 1), wherever the iterates make sense. Find <i>f</i><sup>2024</sup>(<i>x</i>) and <i>f</i><sup>2023</sup>(<i>x</i>).",
          "steps": [
            "<i>f</i><sup>2</sup>(<i>x</i>) = −1/<i>x</i>, after clearing the compound fraction by the common factor (<i>x</i> + 1).",
            "<i>f</i><sup>3</sup>(<i>x</i>) = <i>f</i>(−1/<i>x</i>) = (1 + <i>x</i>)/(1 − <i>x</i>), and <i>f</i><sup>4</sup>(<i>x</i>) = <i>x</i>. The order is 4.",
            "2024 = 4 × 506, remainder 0, so <i>f</i><sup>2024</sup>(<i>x</i>) = <i>x</i>.",
            "2023 = 4 × 505 + 3, so <i>f</i><sup>2023</sup>(<i>x</i>) = <i>f</i><sup>3</sup>(<i>x</i>) = (1 + <i>x</i>)/(1 − <i>x</i>)."
          ],
          "ans": "x and (1 + x)/(1 − x). Find the order, then divide the exponent by it"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "<i>f</i>(<i>x</i>) = 1/(1 − <i>x</i>) for <i>x</i> ≠ 1. Find the smallest <i>k</i> with <i>f</i><sup>k</sup> = <i>I</i>, and evaluate <i>f</i><sup>100</sup>(<i>x</i>).",
          "steps": [
            "<i>f</i><sup>2</sup>(<i>x</i>) = 1/(1 − 1/(1 − <i>x</i>)) = (1 − <i>x</i>)/(−<i>x</i>) = 1 − 1/<i>x</i>.",
            "<i>f</i><sup>3</sup>(<i>x</i>) = 1/(1 − (1 − 1/<i>x</i>)) = 1/(1/<i>x</i>) = <i>x</i>. So the order is 3.",
            "100 = 3 × 33 + 1, so <i>f</i><sup>100</sup>(<i>x</i>) = <i>f</i>(<i>x</i>) = 1/(1 − <i>x</i>).",
            "Check on a number: 3 goes to −1/2, then to 2/3, then back to 3. A genuine 3-cycle. Note the moving exclusions: <i>f</i> forbids <i>x</i> = 1 and <i>f</i><sup>2</sup> also forbids <i>x</i> = 0."
          ],
          "ans": "Order 3, and f¹⁰⁰(x) = 1/(1 − x). Verify the cycle on one concrete input"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "(a) <i>f</i>(2 + <i>x</i>) = <i>f</i>(2 − <i>x</i>) and <i>f</i>(4 + <i>x</i>) = <i>f</i>(4 − <i>x</i>) for all real <i>x</i>. Find a period. (b) <i>f</i>(<i>x</i> + 3) = 1 − <i>f</i>(<i>x</i>) and <i>f</i> is not constant. Find a period, and decide whether 3 is one.",
          "steps": [
            "(a) Two mirrors, at <i>a</i> = 2 and <i>b</i> = 4. By the two-axes rule the shift 2|<i>b</i> − <i>a</i>| = 4 is a period, so <i>f</i>(<i>x</i> + 4) = <i>f</i>(<i>x</i>).",
            "(b) Compose the recurrence with itself: <i>f</i>(<i>x</i> + 6) = 1 − <i>f</i>(<i>x</i> + 3) = 1 − (1 − <i>f</i>(<i>x</i>)) = <i>f</i>(<i>x</i>). So 6 is a period.",
            "Is 3 one? If <i>f</i>(<i>x</i> + 3) = <i>f</i>(<i>x</i>) held, the recurrence would give <i>f</i>(<i>x</i>) = 1 − <i>f</i>(<i>x</i>), forcing <i>f</i> ≡ ½, which is excluded.",
            "So 6 is a period and 3 is not. Be careful with the wording: this argument does <b>not</b> show 6 is the smallest, and indeed <i>f</i>(<i>x</i>) = ½ + ½cos(π<i>x</i>) satisfies the rule with fundamental period 2."
          ],
          "ans": "(a) period 4 · (b) 6 is a period and 3 is not; “a period” and “the fundamental period” are different questions"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "<i>f</i>(<i>x</i> + 1) = (1 + <i>f</i>(<i>x</i>))/(1 − <i>f</i>(<i>x</i>)) wherever defined, and <i>f</i>(2) = 3. Find <i>f</i>(2025).",
          "steps": [
            "Compose once: writing <i>u</i> for <i>f</i>(<i>x</i>), <i>f</i>(<i>x</i> + 2) = (1 + (1+<i>u</i>)/(1−<i>u</i>))/(1 − (1+<i>u</i>)/(1−<i>u</i>)) = 2/(−2<i>u</i>) = −1/<i>u</i>.",
            "Compose again: <i>f</i>(<i>x</i> + 4) = −1/<i>f</i>(<i>x</i> + 2) = −1/(−1/<i>f</i>(<i>x</i>)) = <i>f</i>(<i>x</i>). Period 4.",
            "2025 = 1 + 4 × 506, so <i>f</i>(2025) = <i>f</i>(1).",
            "Recover <i>f</i>(1) from the given value: 3 = <i>f</i>(2) = (1 + <i>f</i>(1))/(1 − <i>f</i>(1)) gives 3 − 3<i>f</i>(1) = 1 + <i>f</i>(1), so <i>f</i>(1) = ½."
          ],
          "ans": "f(2025) = ½. Two compositions give period 4, then one linear equation gives the anchor"
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] For <i>f</i>(<i>x</i>) = 2 − <i>x</i>, find <i>f</i><sup>n</sup>(<i>x</i>) for every positive integer <i>n</i>.",
              "a": "<i>f</i><sup>2</sup>(<i>x</i>) = 2 − (2 − <i>x</i>) = <i>x</i>, so <i>f</i><sup>n</sup>(<i>x</i>) = <i>x</i> for even <i>n</i> and 2 − <i>x</i> for odd <i>n</i>."
            },
            {
              "q": "[CUET] Show that <i>f</i>(<i>x</i>) = (<i>x</i> + 1)/(<i>x</i> − 1), <i>x</i> ≠ 1, is an involution.",
              "a": "<i>f</i><sup>2</sup>(<i>x</i>) = ((<i>x</i>+1)/(<i>x</i>−1) + 1)/((<i>x</i>+1)/(<i>x</i>−1) − 1) = (2<i>x</i>/(<i>x</i>−1))/(2/(<i>x</i>−1)) = <i>x</i>. So <i>f</i> is its own inverse."
            },
            {
              "q": "[JEE Main] <i>f</i>(<i>x</i> + 2) = −<i>f</i>(<i>x</i>) for all <i>x</i>, and <i>f</i>(0) = 1. Find <i>f</i>(10).",
              "a": "Applying the rule twice gives period 4, and 10 ≡ 2 (mod 4). So <i>f</i>(10) = <i>f</i>(2) = −<i>f</i>(0) = <b>−1</b>."
            },
            {
              "q": "[JEE Main] <i>f</i> is odd with period <i>T</i>. Show <i>f</i>(<i>T</i>/2) = 0.",
              "a": "<i>f</i>(<i>T</i>/2) = <i>f</i>(<i>T</i>/2 − <i>T</i>) = <i>f</i>(−<i>T</i>/2) = −<i>f</i>(<i>T</i>/2) by oddness, so 2<i>f</i>(<i>T</i>/2) = 0."
            },
            {
              "q": "[JEE Advanced] <i>f</i><sup>3</sup> = <i>I</i> as an identity, <i>f</i>(1) = 2 and <i>f</i>(2) = 3. Find <i>f</i>(3) and <i>f</i>(<i>f</i>(<i>f</i>(7))).",
              "a": "<i>f</i>(3) = <i>f</i>(<i>f</i>(2)) = <i>f</i><sup>3</sup>(1) = <b>1</b>, and <i>f</i>(<i>f</i>(<i>f</i>(7))) = <i>f</i><sup>3</sup>(7) = <b>7</b>."
            }
          ]
        },
        {
          "t": "mcq",
          "q": "For <i>f</i>(<i>x</i>) = 1/<i>x</i>, <i>x</i> ≠ 0, the value of <i>f</i><sup>57</sup>(<i>x</i>) is:",
          "correct": 0,
          "opts": [
            { "label": "1/x", "nudge": null },
            {
              "label": "x",
              "nudge": "That is <i>f</i><sup>even</sup>. The order here is 2, and 57 is odd, so the remainder is 1, not 0."
            },
            {
              "label": "x<sup>57</sup>",
              "nudge": "Iterating is not raising to a power. <i>f</i><sup>57</sup> means composing <i>f</i> with itself 57 times, which is a different operation entirely."
            },
            {
              "label": "1/x<sup>57</sup>",
              "nudge": "Same confusion, one step further: the exponent has been pushed inside the function instead of counting compositions."
            }
          ],
          "solution": "f²(x) = 1/(1/x) = x, so f is an involution of order 2 and fⁿ = f^(n mod 2). Since 57 is odd, f⁵⁷(x) = f(x) = 1/x."
        },
        {
          "t": "mcq",
          "q": "<i>f</i> satisfies <i>f</i>(3 + <i>x</i>) = <i>f</i>(3 − <i>x</i>) and <i>f</i>(7 + <i>x</i>) = <i>f</i>(7 − <i>x</i>) for all real <i>x</i>. A period of <i>f</i> is:",
          "correct": 2,
          "opts": [
            {
              "label": "4",
              "nudge": "That is the gap between the two axes, |7 − 3|. The rule doubles that gap, because composing two mirrors translates by twice the distance between them."
            },
            {
              "label": "10",
              "nudge": "That adds the two axis positions instead of subtracting them. Only the <b>distance</b> between the mirrors matters, not where they sit."
            },
            { "label": "8", "nudge": null },
            {
              "label": "there is no period",
              "nudge": "One axis alone gives no period, which is probably the reasoning here. Two distinct axes always do, and this is exactly the two-axis theorem."
            }
          ],
          "solution": "With axes at a = 3 and b = 7, replacing x by 2a − x in the second identity gives f(x + 2(b − a)) = f(x). Here 2(7 − 3) = 8."
        },
        {
          "t": "mcq",
          "q": "Which function is its own inverse on its natural domain?",
          "correct": 3,
          "opts": [
            {
              "label": "f(x) = 2x",
              "nudge": "<i>f</i>(<i>f</i>(<i>x</i>)) = 4<i>x</i>, not <i>x</i>. A linear map with slope 2 doubles twice; only slopes 1 and −1 can be involutions."
            },
            {
              "label": "f(x) = x + 5",
              "nudge": "<i>f</i>(<i>f</i>(<i>x</i>)) = <i>x</i> + 10. A translation never undoes itself; its inverse translates the other way."
            },
            {
              "label": "f(x) = x<sup>2</sup>",
              "nudge": "<i>f</i>(<i>f</i>(<i>x</i>)) = <i>x</i><sup>4</sup>, and squaring is not even invertible on ℝ, so it cannot be self-inverse there."
            },
            { "label": "f(x) = (x + 1)/(x − 1)", "nudge": null }
          ],
          "solution": "Compose: ((x+1)/(x−1) + 1) / ((x+1)/(x−1) − 1) = (2x/(x−1)) / (2/(x−1)) = x. So f² = I and f is its own inverse. Mobius-type maps are the usual home of involutions, alongside c − x and 1/x."
        },
        {
          "t": "mcq",
          "q": "<i>f</i> : ℝ → ℝ satisfies <i>f</i>(<i>x</i> + 2) = <i>f</i>(<i>x</i>) + 3 for all <i>x</i>. Then <i>f</i> is:",
          "correct": 1,
          "opts": [
            {
              "label": "periodic with period 2",
              "nudge": "Reading the “+ 2” as the period ignores the “+ 3”. The values do not come back, they climb by 3 each time."
            },
            { "label": "not periodic", "nudge": null },
            {
              "label": "periodic with period 6",
              "nudge": "Six is what a recurrence like <i>f</i>(<i>x</i> + 3) = 1 − <i>f</i>(<i>x</i>) gives, where the second application cancels the first. Here the applications <b>accumulate</b>."
            },
            {
              "label": "periodic with period 4",
              "nudge": "Applying the rule twice gives <i>f</i>(<i>x</i> + 4) = <i>f</i>(<i>x</i>) + 6, which is not <i>f</i>(<i>x</i>). Nothing cancels, so no number of applications returns the original value."
            }
          ],
          "solution": "Iterating gives f(x + 2n) = f(x) + 3n, which grows without bound along x, x + 2, x + 4, … A periodic function repeats its values and so cannot climb forever. Periodicity needs the shifts to cancel, and here they add up."
        },
        {
          "t": "mistakes",
          "items": [
            "Confusing <i>f</i><sup>n</sup> the iterate with <i>f</i>(<i>x</i>)<sup>n</sup> the power. <i>f</i><sup>2</sup>(<i>x</i>) means <i>f</i>(<i>f</i>(<i>x</i>)), not (<i>f</i>(<i>x</i>))<sup>2</sup>, and every distractor list contains the other reading.",
            "Reducing the exponent against the wrong number. Divide by the <b>order</b>, the smallest <i>k</i> with <i>f</i><sup>k</sup> = <i>I</i>, not by whatever exponent happens to appear in the question.",
            "Forgetting the moving exclusions. Each application of a rational map forbids more inputs: <i>f</i>(<i>x</i>) = 1/(1 − <i>x</i>) rules out <i>x</i> = 1, and <i>f</i><sup>2</sup> also rules out <i>x</i> = 0. The identity <i>f</i><sup>k</sup> = <i>I</i> holds only where the whole journey is defined.",
            "Doubling the wrong quantity for two axes. The period is <b>2|<i>b</i> − <i>a</i>|</b>, twice the <b>gap</b>. Adding the two axis positions, or using the gap itself, are the two options the paper offers.",
            "Calling a period <b>the</b> fundamental period. From <i>f</i>(<i>x</i> + <i>a</i>) = −<i>f</i>(<i>x</i>) you get that 2<i>a</i> is <b>a</b> period; whether anything smaller works needs a separate argument, and for a rule with no formula attached it usually cannot be settled at all."
          ]
        },
        {
          "t": "protip",
          "html": "when you see a huge exponent, do not compute, <b>hunt the cycle</b>. compute <i>f</i><sup>2</sup> and <i>f</i><sup>3</sup> and stop the moment you see <i>x</i>; for a linear fractional map the order is essentially always 2, 3 or 4. and when a question describes <i>f</i> only by a rule, ask which of the four stock shapes it is: minus, reciprocal, one-minus, or the (1 + <i>f</i>)/(1 − <i>f</i>) one. the first three give period 2<i>a</i>, the last gives 4<i>a</i>."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "f<sup>m</sup> ∘ f<sup>n</sup> = f<sup>m+n</sup> · f<sup>k</sup> = I ⟹ f<sup>n</sup> = f<sup>n mod k</sup>",
              "note": "find the order, then divide the exponent"
            },
            {
              "f": "(x − 1)/(x + 1) has order 4 · 1/(1 − x) has order 3",
              "note": "linear fractional orders are tiny: 2, 3 or 4"
            },
            {
              "f": "f² = I ⟺ f is its own inverse",
              "note": "linear involutions: only x and c − x"
            },
            {
              "f": "f(a + x) = f(a − x) ⟺ f(2a − x) = f(x)",
              "note": "one mirror, at x = a; evenness is a = 0"
            },
            {
              "f": "two axes at a and b ⇒ period 2|b − a|",
              "note": "two mirrors compose to a translation"
            },
            {
              "f": "f(x+a) = −f, 1/f, 1−f ⇒ 2a · (1+f)/(1−f) ⇒ 4a",
              "note": "f(x + 2) = f(x) + 3 is not periodic at all"
            }
          ],
          "aids": [
            "“huge exponent means hunt the cycle, never compute”",
            "“two mirrors make a translation, twice the gap”"
          ]
        }
      ]
    }
  ]
};

export default ch12Relations;
