/**
 * Chapter 02 · Relations and Functions, Mathematics, Class 11.
 *
 * Restructured from the Drona Class 11 Mathematics Master Reference (pages 77
 * to 143) into the block system in design_handoff_textbooks/CONTENT_SPEC.md,
 * matching the voice and density of math-11-01-sets.ts.
 *
 * Three editorial decisions worth recording:
 *
 * 1. The source is three documents stacked: Subtopics 01–03, a Round 1
 *    Supplement (Subtopic 04 on types of relations, plus Procedure E on finding
 *    a range appended to Subtopic 03), and a Round 2 Addendum of six toolkit
 *    items (F vertical line test, G composition, H parity, I periodicity,
 *    J graph transformations, K functional equations). The addenda are written
 *    as inserts into existing subtopics, not as topics of their own, so they
 *    are folded in the same way: F and J into the Functions topic, G into the
 *    domain and range topic alongside Procedure E, and H, I and K into a
 *    closing topic on symmetry, periodicity and functional equations. Six
 *    topics, the spec's maximum, is what it takes to hold that much material
 *    without any one topic running past a sitting.
 *
 * 2. The hook is merged, exactly as in Chapter 01. The source carries an "Exam
 *    Relevance" panel per subtopic, but the reader renders `hook` on topic 1
 *    only, so all six are gathered into that single accordion under their own
 *    topic headings rather than thrown away.
 *
 * 3. Five `diagram` blocks, all of them authored figures rather than the six
 *    bespoke set-theory kinds, which describe nothing in this chapter. Four are
 *    `plot` and one is `numberline`, and each one replaces a figure the source
 *    itself asks for: the product as a grid of points, a relation as a
 *    highlighted slice of that grid, the standard function graphs (with the
 *    circle alongside them as the thing that fails the vertical line test), the
 *    natural domain assembled on the real line, and the parity and periodicity
 *    pictures. Everything drawn is in the closed curve vocabulary; nothing here
 *    needs a kind the reader does not have.
 *
 * One-one, onto, bijective and inverse functions are deliberately absent: the
 * source defers them to the Class 12 treatment and says so explicitly.
 */
import type { Chapter } from '@/lib/textbooks';

export const ch02Relations: Chapter = {
  "chapter": "02",
  "title": "Relations and Functions",
  "subject": "Mathematics",
  "klass": "Class 11",
  "topics": [
    {
      "n": "01",
      "title": "Ordered Pairs and the Cartesian Product",
      "chip": "01 PRODUCT",
      "kalam": "every-with-every, so multiply",
      "blocks": [
        {
          "t": "hook",
          "html": "<b>01 · Ordered Pairs and the Cartesian Product</b><br>Foundational and high-yield. CBSE Boards lifts 1–2 mark direct questions straight from here: write <i>A</i> × <i>B</i>, or recover <i>A</i> and <i>B</i> from <i>A</i> × <i>B</i>. JEE Main asks fast counting questions on <i>n</i>(<i>A</i> × <i>B</i>) and on the number of subsets. JEE Advanced rarely asks it in isolation but builds every later idea, relations, functions, domains, graphs, on this single definition. Master it now and the rest of the chapter becomes bookkeeping.<br><br><b>02 · Relations: Domain, Range and Counting</b><br>Pure-volume territory for CBSE Boards. Almost every year carries a 1–2 mark question on writing a relation in roster form or stating its domain and range, plus the count 2<sup>pq</sup>. JEE Main turns that counting into quick objective questions, usually with a few pairs forced in or out.<br><br><b>03 · Types of Relations and Equivalence Classes</b><br>CBSE examines this formally in Class 12 Chapter 1, where <b>“show that R is an equivalence relation”</b> is a standing 3–5 mark question and “find the equivalence class of…” is its usual follow-up, so every hour here is a mark banked twice. JEE Main asks it two ways: a one-line property check, and a pure count such as the number of reflexive relations on a 5-element set. JEE Advanced pushes into classes as a partition.<br><br><b>04 · Functions, the Standard Zoo and Graph Moves</b><br>A guaranteed scorer. CBSE lifts direct 1–3 mark questions on “is this a function?”, on domain and range, and on the standard definitions and graphs. JEE Main loves the counting fact <b><i>q</i><sup>p</sup></b>. The graph transformations are never re-taught anywhere: a question like “how many real solutions has |<i>f</i>(<i>x</i>)| = <i>k</i>” is a horizontal line sliding over a folded graph, and it collapses to a glance.<br><br><b>05 · Domain, Range and the Algebra of Real Functions</b><br>Domain-finding for radicals and rational expressions is close to guaranteed in JEE Main, and range questions carry the discriminant method. Domains of composites are examined at Class 11 level. Almost every mark here rides on <b>one bracket</b>, square or round, so the endpoint check is the habit to build.<br><br><b>06 · Symmetry, Periodicity and Functional Equations</b><br>The toolkit layer JEE builds on top of this chapter and never re-teaches, assumed knowledge by the time Limits, Continuity and Definite Integrals arrive. Parity halves the work in every range and sketching problem. The fractional part {<i>x</i>} is the purest periodic function on the syllabus and is tested constantly. Functional equations look formidable and reduce to three techniques."
        },
        {
          "t": "p",
          "html": "Walk up to a chaiwala’s stall outside a railway platform. The board says he sells <b>three sizes</b>, Small, Medium and Large, and <b>two flavours</b>, Adrak and Elaichi. Before you order, one question settles itself: how many genuinely different cups can he serve? You start pairing. Small-Adrak, Small-Elaichi, Medium-Adrak, Medium-Elaichi, Large-Adrak, Large-Elaichi. Six cups."
        },
        {
          "t": "p",
          "html": "Taking every item from one list and tagging it with every item from a second list is the entire idea of the <b>Cartesian product</b>. Give the lists names, <i>A</i> = {S, M, L} for the sizes and <i>B</i> = {Adrak, Elaichi} for the flavours, and the collection of all six possible cups is written <b><i>A</i> × <i>B</i></b>, read aloud as “<i>A</i> cross <i>B</i>”."
        },
        {
          "t": "p",
          "html": "The crucial detail is <b>order</b>. A cup described as (Small, Adrak) is a size paired with a flavour. Flip it to (Adrak, Small) and you are reading a flavour paired with a size, a different kind of label entirely. The two coordinates play different roles, and you are never allowed to swap them casually. That is why the basic building block is called an <b>ordered pair</b>: in (<i>a</i>, <i>b</i>), <i>a</i> is the first coordinate, <i>b</i> is the second, and the position carries meaning."
        },
        {
          "t": "think",
          "html": "an ordered pair is a cricket scoreline. “180/4” is the pair (180, 4), 180 runs for the loss of 4 wickets. read it backwards as (4, 180) and you are claiming 4 runs for 180 wickets, which is nonsense. same numbers, different meaning, and that is the whole reason (a, b) and (b, a) are different objects whenever a ≠ b."
        },
        {
          "t": "def",
          "term": "Ordered pair (a, b)",
          "html": "First coordinate <i>a</i>, second coordinate <i>b</i>, and the slots are not interchangeable. Two ordered pairs are equal <b>only when both coordinates match in their own slots</b>: (<i>a</i>, <i>b</i>) = (<i>c</i>, <i>d</i>) ⟺ <i>a</i> = <i>c</i> <b>and</b> <i>b</i> = <i>d</i>."
        },
        {
          "t": "def",
          "term": "Cartesian product A × B",
          "html": "Given non-empty sets <i>A</i> and <i>B</i>, the set of <b>all</b> ordered pairs whose first coordinate is pulled from <i>A</i> and whose second is pulled from <i>B</i>: <b><i>A</i> × <i>B</i> = {(<i>a</i>, <i>b</i>) : <i>a</i> ∈ <i>A</i> and <i>b</i> ∈ <i>B</i>}</b>. Membership test: (<i>x</i>, <i>y</i>) ∈ <i>A</i> × <i>B</i> ⟺ <i>x</i> ∈ <i>A</i> and <i>y</i> ∈ <i>B</i>."
        },
        {
          "t": "p",
          "html": "A very natural picture: if <i>A</i> and <i>B</i> are both ℝ, then <b>ℝ × ℝ</b> is the set of all pairs (<i>x</i>, <i>y</i>), which is exactly every point on the coordinate plane. The XY-plane you have drawn since childhood <b>is</b> a Cartesian product. Descartes’ name is attached to both for the same reason, and ℝ<sup>3</sup> = ℝ × ℝ × ℝ is 3-D space."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · THE PRODUCT AS A GRID, TAP A PRODUCT",
          "chips": ["A × B", "B × A", "ℝ × ℝ"],
          "mathChips": true,
          "captions": [
            "A = {1, 2, 3} and B = {4, 5}. Every element of A meets every element of B exactly once, and that grid of meeting points is A × B. Six points, so n(A × B) = 3 × 2 = 6.",
            "The same six pairs with the slots swapped: B × A is the mirror image across the dashed line y = x. Not one point is shared with the previous frame, which is exactly why A × B ≠ B × A.",
            "Take A = B = ℝ and every point of the plane is a pair (x, y), read off the two axes. Coordinates are ordered pairs, and the plane is a Cartesian product."
          ],
          "frames": [
            {
              "x": [0, 6],
              "y": [0, 6],
              "curves": [{ "c": "line", "m": 1, "k": 0, "dash": true, "soft": true }],
              "points": [
                { "x": 1, "y": 4 },
                { "x": 1, "y": 5 },
                { "x": 2, "y": 4 },
                { "x": 2, "y": 5 },
                { "x": 3, "y": 4 },
                { "x": 3, "y": 5 }
              ],
              "labels": [
                { "x": 4.6, "y": 5.4, "text": "A × B", "soft": true },
                { "x": 5.2, "y": 4.6, "text": "y = x", "soft": true }
              ]
            },
            {
              "x": [0, 6],
              "y": [0, 6],
              "curves": [{ "c": "line", "m": 1, "k": 0, "dash": true, "soft": true }],
              "points": [
                { "x": 4, "y": 1 },
                { "x": 5, "y": 1 },
                { "x": 4, "y": 2 },
                { "x": 5, "y": 2 },
                { "x": 4, "y": 3 },
                { "x": 5, "y": 3 }
              ],
              "labels": [
                { "x": 1.4, "y": 5.4, "text": "B × A", "soft": true },
                { "x": 1.2, "y": 1.6, "text": "y = x", "soft": true }
              ]
            },
            {
              "x": [-3, 3],
              "y": [-3, 3],
              "bands": [{}],
              "segments": [
                { "from": [0, 2.1], "to": [1.7, 2.1], "dash": true, "soft": true },
                { "from": [1.7, 0], "to": [1.7, 2.1], "dash": true, "soft": true }
              ],
              "points": [{ "x": 1.7, "y": 2.1, "label": "(x, y)" }],
              "labels": [{ "x": -1.5, "y": -2.2, "text": "ℝ × ℝ", "soft": true }]
            }
          ]
        },
        {
          "t": "defgrid",
          "title": "The boundary rules",
          "rows": [
            {
              "k": "Empty factor",
              "v": "<i>A</i> × <i>B</i> = ∅ ⟺ <i>A</i> = ∅ or <i>B</i> = ∅, no pair can be formed"
            },
            {
              "k": "Infinite factor",
              "v": "one set infinite, the other non-empty ⇒ <i>A</i> × <i>B</i> is infinite"
            },
            {
              "k": "Not commutative",
              "v": "<i>A</i> × <i>B</i> = <i>B</i> × <i>A</i> only when <i>A</i> = <i>B</i> (non-empty), or one set is ∅"
            },
            {
              "k": "Self-product",
              "v": "<i>A</i> × <i>A</i> = <i>A</i><sup>2</sup>, and <i>n</i>(<i>A</i><sup>m</sup>) = (<i>n</i>(<i>A</i>))<sup>m</sup>"
            },
            {
              "k": "Ordered n-tuples",
              "v": "<i>A</i><sub>1</sub> × ⋯ × <i>A<sub>n</sub></i> has elements (<i>a</i><sub>1</sub>, …, <i>a<sub>n</sub></i>); <i>n</i> = 3 gives triples"
            },
            {
              "k": "Distinctness",
              "v": "the clean count assumes elements within each set are distinct, sets never repeat"
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · COUNTING PAIRS",
          "tag": "n(A) = p, n(B) = q",
          "main": "n(A × B) = p q",
          "legend": [
            "<i>n</i>(<i>A</i><sub>1</sub> × ⋯ × <i>A<sub>n</sub></i>) = <i>n</i>(<i>A</i><sub>1</sub>) · <i>n</i>(<i>A</i><sub>2</sub>) ⋯ <i>n</i>(<i>A<sub>n</sub></i>) · <i>n</i>(<i>A</i><sup>m</sup>) = (<i>n</i>(<i>A</i>))<sup>m</sup>",
            "subsets of <i>A</i> × <i>B</i>: 2<sup>n(A) n(B)</sup> = 2<sup>pq</sup>, and each one will be christened a <b>relation</b>"
          ],
          "note": "Adding is always wrong here. Pairing is every-with-every, so the count is a product, never a sum."
        },
        {
          "t": "formula",
          "kicker": "THE PRODUCT DISTRIBUTES",
          "tag": "all provable by chasing one pair",
          "main": "A × (B ∩ C) = (A × B) ∩ (A × C)",
          "legend": [
            "same for the other two: <i>A</i> × (<i>B</i> ∪ <i>C</i>) = (<i>A</i> × <i>B</i>) ∪ (<i>A</i> × <i>C</i>) · <i>A</i> × (<i>B</i> − <i>C</i>) = (<i>A</i> × <i>B</i>) − (<i>A</i> × <i>C</i>)",
            "the identity that kills enumeration: (<i>A</i> × <i>B</i>) ∩ (<i>C</i> × <i>D</i>) = (<i>A</i> ∩ <i>C</i>) × (<i>B</i> ∩ <i>D</i>)"
          ],
          "note": "Put C = B and D = A in the last line and the common pairs of A × B and B × A drop out as (A ∩ B) × (A ∩ B)."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY n(A × B) = m n, TAP A LINE FOR THE WHY",
          "steps": [
            {
              "eq": "A = {a<sub>1</sub>, …, a<sub>m</sub>}, B = {b<sub>1</sub>, …, b<sub>n</sub>}",
              "why": "Name the elements so the pairs can be sorted. Every pair in A × B has exactly one first coordinate, and that is what makes the sorting clean: nothing is left over and nothing is double-counted."
            },
            {
              "eq": "{a<sub>i</sub>} × B = {(a<sub>i</sub>, b<sub>1</sub>), …, (a<sub>i</sub>, b<sub>n</sub>)}",
              "why": "Fix one first coordinate and collect its pairs. This slice has exactly as many pairs as B has elements, one per choice of second coordinate, so its size is n."
            },
            {
              "eq": "({a<sub>i</sub>} × B) ∩ ({a<sub>k</sub>} × B) = ∅ for a<sub>i</sub> ≠ a<sub>k</sub>",
              "why": "A pair cannot start with two different elements at once, so distinct slices never overlap. Disjoint groups are what let you simply add their sizes."
            },
            {
              "eq": "n(A × B) = n + n + ⋯ + n (m times) = m n",
              "why": "There are m slices, each of size n, all disjoint, and together they form the whole of A × B. This is the multiplication principle of counting wearing set notation: m independent choices followed by n independent choices give mn outcomes."
            }
          ]
        },
        {
          "t": "proc",
          "title": "Running the definition backwards",
          "steps": [
            "<b>Harvest first coordinates.</b> Collect the first entry of every ordered pair you were handed; the distinct values form <i>A</i>.",
            "<b>Harvest second coordinates.</b> The distinct second entries form <i>B</i>.",
            "<b>Sanity-check with the count.</b> Verify <i>n</i>(<i>A</i>) · <i>n</i>(<i>B</i>) equals the number of pairs given. A mismatch means either a pair is missing, or the set was never a genuine Cartesian product.",
            "<b>Given only n(A × A), take the square root first.</b> <i>n</i>(<i>A</i>) = √<i>n</i>(<i>A</i> × <i>A</i>) fixes the size instantly, and the listed pairs then hand you the actual elements."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Let <i>A</i> = {2, 3, 5} and <i>B</i> = {<i>x</i>, <i>y</i>}. Write <i>A</i> × <i>B</i> and <i>B</i> × <i>A</i>, state <i>n</i>(<i>A</i> × <i>B</i>), and verify <i>A</i> × <i>B</i> ≠ <i>B</i> × <i>A</i>.",
          "steps": [
            "First coordinate from <i>A</i>: <i>A</i> × <i>B</i> = {(2, <i>x</i>), (2, <i>y</i>), (3, <i>x</i>), (3, <i>y</i>), (5, <i>x</i>), (5, <i>y</i>)}.",
            "First coordinate from <i>B</i>: <i>B</i> × <i>A</i> = {(<i>x</i>, 2), (<i>x</i>, 3), (<i>x</i>, 5), (<i>y</i>, 2), (<i>y</i>, 3), (<i>y</i>, 5)}.",
            "<i>n</i>(<i>A</i> × <i>B</i>) = 3 × 2 = 6, and <i>n</i>(<i>B</i> × <i>A</i>) = 6 too. Equal counts, and still not equal sets: (2, <i>x</i>) lies in the first and in neither pair of the second."
          ],
          "ans": "6 pairs each, sharing not one element: same size, opposite slots"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN · SPEED TRAP",
          "q": "<i>A</i> = {1, 2} and <i>B</i> = {1, 2, 3}. How many ordered pairs are <b>common</b> to <i>A</i> × <i>B</i> and <i>B</i> × <i>A</i>?",
          "steps": [
            "Two traps: brute-forcing all twelve pairs, and remembering “<i>A</i> × <i>B</i> ≠ <i>B</i> × <i>A</i>” and answering 0.",
            "Use (<i>A</i> × <i>B</i>) ∩ (<i>C</i> × <i>D</i>) = (<i>A</i> ∩ <i>C</i>) × (<i>B</i> ∩ <i>D</i>) with <i>C</i> = <i>B</i>, <i>D</i> = <i>A</i>: the intersection is (<i>A</i> ∩ <i>B</i>) × (<i>A</i> ∩ <i>B</i>).",
            "<i>A</i> ∩ <i>B</i> = {1, 2}, so the common pairs are {1, 2} × {1, 2}: 2 × 2 = 4, namely (1, 1), (1, 2), (2, 1), (2, 2)."
          ],
          "ans": "4 common pairs, in one line: the answer is always (n(A ∩ B))²"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "<i>A</i> × <i>A</i> has 16 elements, two of which are (1, 4) and (3, 2). Find <i>A</i>, then the number of subsets of <i>A</i> × <i>A</i> that <b>contain</b> (4, 1).",
          "steps": [
            "<i>n</i>(<i>A</i> × <i>A</i>) = (<i>n</i>(<i>A</i>))<sup>2</sup> = 16 ⇒ <i>n</i>(<i>A</i>) = 4.",
            "(1, 4) ∈ <i>A</i> × <i>A</i> forces 1, 4 ∈ <i>A</i>; (3, 2) forces 3, 2 ∈ <i>A</i>. That is already four distinct elements and there is no room for more: <i>A</i> = {1, 2, 3, 4}.",
            "Fix (4, 1) as “always in”; each of the remaining 15 pairs is independently in or out: 2<sup>15</sup>."
          ],
          "ans": "A = {1, 2, 3, 4} · 2¹⁵ = 32 768 subsets"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "<i>A</i> = {1, 2, 3, 4, 5, 6}, so <i>A</i> × <i>A</i> has 36 pairs. Count the pairs (<i>x</i>, <i>y</i>) with (a) <i>x</i> divides <i>y</i>, (b) <i>x</i> divides <i>y</i> or <i>y</i> divides <i>x</i>.",
          "steps": [
            "(a) Slice by the first coordinate: the multiples of <i>x</i> inside {1, …, 6} number ⌊6/<i>x</i>⌋.",
            "<i>x</i> = 1, 2, 3, 4, 5, 6 give 6, 3, 2, 1, 1, 1 ⇒ 14 pairs.",
            "(b) By the symmetry <i>x</i> ↔ <i>y</i>, the count for <i>y</i> divides <i>x</i> is also 14. Their overlap forces <i>x</i> = <i>y</i>, exactly the 6 diagonal pairs.",
            "Inclusion and exclusion: 14 + 14 − 6 = 22."
          ],
          "ans": "(a) 14 · (b) 22, a divisibility question turned into pure counting"
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] If <i>A</i> = {<i>a</i>, <i>b</i>} and <i>B</i> = {1, 2, 3}, write <i>A</i> × <i>B</i> and state <i>n</i>(<i>A</i> × <i>B</i>).",
              "a": "{(<i>a</i>, 1), (<i>a</i>, 2), (<i>a</i>, 3), (<i>b</i>, 1), (<i>b</i>, 2), (<i>b</i>, 3)}; <i>n</i>(<i>A</i> × <i>B</i>) = 6."
            },
            {
              "q": "[CBSE] Given <i>A</i> × <i>B</i> = {(<i>p</i>, 1), (<i>p</i>, 2), (<i>q</i>, 1), (<i>q</i>, 2)}, find <i>A</i> and <i>B</i>.",
              "a": "<i>A</i> = {<i>p</i>, <i>q</i>}, <i>B</i> = {1, 2}. Check: 2 × 2 = 4 pairs. ✓"
            },
            {
              "q": "[JEE Main] If <i>n</i>(<i>A</i>) = 5 and <i>n</i>(<i>B</i>) = 4, how many subsets does <i>A</i> × <i>B</i> have?",
              "a": "2<sup>5×4</sup> = 2<sup>20</sup> = 1 048 576."
            },
            {
              "q": "[JEE Main] <i>A</i> = {<i>x</i> : <i>x</i><sup>2</sup> − 5<i>x</i> + 6 = 0} and <i>B</i> = {2, 4}. Write <i>A</i> × <i>B</i> and <i>B</i> × <i>A</i>. Equal?",
              "a": "<i>A</i> = {2, 3}. Both have 4 pairs but they differ: (2, 4) ∈ <i>A</i> × <i>B</i> while (4, 2) ∈ <i>B</i> × <i>A</i>. Not equal."
            },
            {
              "q": "[JEE Advanced] <i>A</i> = {1, 2, 3, 4, 5}. How many pairs (<i>x</i>, <i>y</i>) ∈ <i>A</i> × <i>A</i> have <i>x</i> + <i>y</i> a multiple of 3?",
              "a": "9. Sort by remainder mod 3: one element leaves 0, two leave 1, two leave 2. Sums vanish for 1·1 + 2·2 + 2·2 = 9."
            }
          ]
        },
        {
          "t": "mcq",
          "q": "If <i>n</i>(<i>A</i>) = 3 and <i>n</i>(<i>B</i>) = 4, then <i>n</i>(<i>A</i> × <i>B</i>) equals:",
          "correct": 1,
          "opts": [
            {
              "label": "7",
              "nudge": "That is 3 + 4. Adding is the single most common slip here: pairing is every-with-every, so it is multiplicative."
            },
            { "label": "12", "nudge": null },
            {
              "label": "64",
              "nudge": "4<sup>3</sup> counts the <b>functions</b> from A to B, a formula from a later topic, not the pairs."
            },
            {
              "label": "81",
              "nudge": "3<sup>4</sup> is the same confusion with the base and exponent swapped as well."
            }
          ],
          "solution": "n(A × B) = n(A) · n(B) = 3 × 4 = 12. Every one of the 3 first coordinates meets every one of the 4 second coordinates."
        },
        {
          "t": "mcq",
          "q": "For non-empty sets <i>A</i> and <i>B</i>, <i>A</i> × <i>B</i> = <i>B</i> × <i>A</i> holds if and only if:",
          "correct": 1,
          "opts": [
            {
              "label": "A ⊆ B",
              "nudge": "Containment is not enough: A = {1}, B = {1, 2} gives (1, 2) on one side and (2, 1) on the other."
            },
            { "label": "A = B", "nudge": null },
            {
              "label": "A ∩ B = ∅",
              "nudge": "Disjointness makes the two products share no pair at all, which is the opposite of equality."
            },
            {
              "label": "A and B are both infinite",
              "nudge": "Size is irrelevant: ℝ × ℤ ≠ ℤ × ℝ even though both factors are infinite."
            }
          ],
          "solution": "Order in the pairs is rigid, so the products match only when the sets feeding the two coordinates are identical."
        },
        {
          "t": "mcq",
          "q": "If <i>n</i>(<i>A</i>) = 2, the number of subsets of <i>A</i> × <i>A</i> is:",
          "correct": 3,
          "opts": [
            {
              "label": "2",
              "nudge": "Mis-tracked exponent: this is 2<sup>1</sup>, which would need A × A to hold a single element."
            },
            {
              "label": "4",
              "nudge": "That is n(A × A) itself. You stopped one step early: count the pairs, then exponentiate."
            },
            {
              "label": "8",
              "nudge": "2<sup>3</sup> comes from miscounting A × A as 3 pairs. A self-product has n² of them, here 4."
            },
            { "label": "16", "nudge": null }
          ],
          "solution": "Two stages. First n(A × A) = 2² = 4; then the number of subsets of a 4-element set is 2⁴ = 16."
        },
        {
          "t": "mcq",
          "q": "Let <i>A</i> = {1, 2} and <i>B</i> = {3, 4}. Which of these is <b>not</b> an element of <i>A</i> × <i>B</i>?",
          "correct": 2,
          "opts": [
            {
              "label": "(1, 3)",
              "nudge": "First entry from A, second from B: a legitimate member."
            },
            {
              "label": "(2, 4)",
              "nudge": "2 ∈ A and 4 ∈ B, so this pair is exactly what the definition allows."
            },
            { "label": "(3, 1)", "nudge": null },
            {
              "label": "(1, 4)",
              "nudge": "1 ∈ A and 4 ∈ B: legal. Read which set feeds the first slot before rejecting a pair."
            }
          ],
          "solution": "In A × B the first coordinate must come from A = {1, 2}. The pair (3, 1) has its coordinates reversed and belongs to B × A instead."
        },
        {
          "t": "mistakes",
          "items": [
            "Adding instead of multiplying. <b><i>n</i>(<i>A</i> × <i>B</i>) = <i>n</i>(<i>A</i>) · <i>n</i>(<i>B</i>)</b>, never <i>n</i>(<i>A</i>) + <i>n</i>(<i>B</i>). List a 2-by-2 case once and the muscle memory sticks.",
            "Treating (<i>a</i>, <i>b</i>) and (<i>b</i>, <i>a</i>) as identical. They are equal <b>only when <i>a</i> = <i>b</i></b>, and reversing coordinates is the most-exploited distractor on the topic.",
            "The missing factor when counting subsets. Subsets of <i>A</i> × <i>B</i> number <b>2<sup>n(A) n(B)</sup></b>, not 2<sup>n(A)+n(B)</sup> and not <i>n</i>(<i>A</i>) · <i>n</i>(<i>B</i>).",
            "Ignoring the empty-set edge case. If a problem sneaks in <i>A</i> = ∅ then <b><i>A</i> × <i>B</i> = ∅</b> at once, no pairing needed."
          ]
        },
        {
          "t": "protip",
          "html": "when a question hands you <i>n</i>(<i>A</i> × <i>A</i>) and asks for <i>A</i>, take the square root first: the size drops out instantly and the listed pairs hand you the elements. and for “common pairs of <i>A</i> × <i>B</i> and <i>B</i> × <i>A</i>”, skip enumeration entirely, the answer is (<i>n</i>(<i>A</i> ∩ <i>B</i>))<sup>2</sup>."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "A × B = {(a, b) : a ∈ A, b ∈ B}",
              "note": "order is sacred, the slots have roles"
            },
            {
              "f": "(a, b) = (c, d) ⟺ a = c and b = d",
              "note": "both coordinates, in their own slots"
            },
            {
              "f": "n(A × B) = p q · n(A<sup>m</sup>) = (n(A))<sup>m</sup>",
              "note": "every-with-every, so multiply"
            },
            {
              "f": "subsets of A × B = 2<sup>pq</sup>",
              "note": "these become the relations"
            },
            {
              "f": "A × B = B × A ⟺ A = B",
              "note": "non-empty sets; A × B = ∅ ⟺ A or B is ∅"
            },
            {
              "f": "(A × B) ∩ (C × D) = (A ∩ C) × (B ∩ D)",
              "note": "and A × (B ∩ C) = (A × B) ∩ (A × C)"
            }
          ],
          "aids": [
            "“every-with-every, so multiply, never add”",
            "“square-root to size, list to elements”"
          ]
        }
      ]
    },
    {
      "n": "02",
      "title": "Relations: Domain, Range and Counting",
      "chip": "02 RELATIONS",
      "kalam": "a relation is a highlighted slice",
      "blocks": [
        {
          "t": "p",
          "html": "Picture the contact list on your phone. On one side sits the set of <b>people you know</b>; on the other, the set of <b>phone numbers</b>. Not every person is linked to every number. You have connected specific people to specific numbers, and that hand-picked set of “person to number” links is exactly what mathematicians call a <b>relation</b>."
        },
        {
          "t": "p",
          "html": "Here is the whole realisation. <i>A</i> × <i>B</i> is the set of <b>all possible</b> ordered pairs, every person matched with every number, most of them meaningless. A relation is the <b>meaningful subset</b> you carve out of that grid by stating a rule. Formally: a <b>relation <i>R</i> from <i>A</i> to <i>B</i> is any subset of <i>A</i> × <i>B</i></b>. That is the entire definition. A relation is not some new exotic object, it is a chosen portion of the Cartesian product."
        },
        {
          "t": "think",
          "html": "A × B is the full Mumbai local timetable, every train against every station, an enormous grid. a relation is the highlighter you run over it: “trains that actually stop at Dadar.” you haven’t created new trains, you’ve selected the relevant pairs. different highlighters, different relations, same grid."
        },
        {
          "t": "def",
          "term": "Relation R from A to B",
          "html": "Any subset <i>R</i> ⊆ <i>A</i> × <i>B</i>. When (<i>a</i>, <i>b</i>) ∈ <i>R</i> we say “<i>a</i> is related to <i>b</i>” and write <b><i>a R b</i></b>; when it is not, we write (<i>a</i>, <i>b</i>) ∉ <i>R</i>. A relation <b>on</b> a set <i>A</i> means a relation from <i>A</i> to itself, that is, a subset of <i>A</i> × <i>A</i>."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · THE HIGHLIGHTED SLICE, TAP A RULE",
          "chips": ["A × A", "y = x + 1", "x + y = 5"],
          "mathChips": true,
          "captions": [
            "A = {1, 2, 3, 4}. All 16 ordered pairs of A × A, the full grid before any rule is applied. Every relation on A is some selection of these dots, which is why there are 2 to the power 16 of them.",
            "The rule y = x + 1 keeps three: {(1, 2), (2, 3), (3, 4)}. Read the domain {1, 2, 3} off the x-axis and the range {2, 3, 4} off the y-axis. The pair (4, 5) is thrown away because 5 is not in A.",
            "The rule x + y = 5 keeps four: {(1, 4), (2, 3), (3, 2), (4, 1)}. Same grid, different highlighter, and this time the domain and the range are both all of A."
          ],
          "frames": [
            {
              "x": [0, 5],
              "y": [0, 5],
              "points": [
                { "x": 1, "y": 1 }, { "x": 1, "y": 2 }, { "x": 1, "y": 3 }, { "x": 1, "y": 4 },
                { "x": 2, "y": 1 }, { "x": 2, "y": 2 }, { "x": 2, "y": 3 }, { "x": 2, "y": 4 },
                { "x": 3, "y": 1 }, { "x": 3, "y": 2 }, { "x": 3, "y": 3 }, { "x": 3, "y": 4 },
                { "x": 4, "y": 1 }, { "x": 4, "y": 2 }, { "x": 4, "y": 3 }, { "x": 4, "y": 4 }
              ],
              "labels": [{ "x": 4.4, "y": 4.6, "text": "A × A", "soft": true }]
            },
            {
              "x": [0, 5],
              "y": [0, 5],
              "points": [
                { "x": 1, "y": 1, "soft": true }, { "x": 1, "y": 2, "soft": true }, { "x": 1, "y": 3, "soft": true }, { "x": 1, "y": 4, "soft": true },
                { "x": 2, "y": 1, "soft": true }, { "x": 2, "y": 2, "soft": true }, { "x": 2, "y": 3, "soft": true }, { "x": 2, "y": 4, "soft": true },
                { "x": 3, "y": 1, "soft": true }, { "x": 3, "y": 2, "soft": true }, { "x": 3, "y": 3, "soft": true }, { "x": 3, "y": 4, "soft": true },
                { "x": 4, "y": 1, "soft": true }, { "x": 4, "y": 2, "soft": true }, { "x": 4, "y": 3, "soft": true }, { "x": 4, "y": 4, "soft": true },
                { "x": 1, "y": 2 }, { "x": 2, "y": 3 }, { "x": 3, "y": 4 }
              ],
              "labels": [{ "x": 4.2, "y": 4.6, "text": "y = x + 1", "soft": true }]
            },
            {
              "x": [0, 5],
              "y": [0, 5],
              "points": [
                { "x": 1, "y": 1, "soft": true }, { "x": 1, "y": 2, "soft": true }, { "x": 1, "y": 3, "soft": true }, { "x": 1, "y": 4, "soft": true },
                { "x": 2, "y": 1, "soft": true }, { "x": 2, "y": 2, "soft": true }, { "x": 2, "y": 3, "soft": true }, { "x": 2, "y": 4, "soft": true },
                { "x": 3, "y": 1, "soft": true }, { "x": 3, "y": 2, "soft": true }, { "x": 3, "y": 3, "soft": true }, { "x": 3, "y": 4, "soft": true },
                { "x": 4, "y": 1, "soft": true }, { "x": 4, "y": 2, "soft": true }, { "x": 4, "y": 3, "soft": true }, { "x": 4, "y": 4, "soft": true },
                { "x": 1, "y": 4 }, { "x": 2, "y": 3 }, { "x": 3, "y": 2 }, { "x": 4, "y": 1 }
              ],
              "labels": [{ "x": 4.2, "y": 4.6, "text": "x + y = 5", "soft": true }]
            }
          ]
        },
        {
          "t": "defgrid",
          "title": "The three companions",
          "rows": [
            {
              "k": "Domain(R)",
              "v": "the <b>first</b> coordinates that actually show up in <i>R</i>, a subset of <i>A</i>"
            },
            {
              "k": "Range(R)",
              "v": "the <b>second</b> coordinates that actually show up, a subset of <i>B</i>"
            },
            {
              "k": "Codomain(R)",
              "v": "the <b>entire</b> declared target set <i>B</i>, whether or not every element gets used"
            },
            {
              "k": "Range vs codomain",
              "v": "range is <b>reached</b>, codomain is <b>allowed</b>; Range ⊆ Codomain always, equality not required"
            },
            {
              "k": "Empty (void) relation",
              "v": "<i>R</i> = ∅ is perfectly legal; its domain and range are both ∅"
            },
            {
              "k": "Universal relation",
              "v": "<i>R</i> = <i>A</i> × <i>B</i>, the one where everything is related to everything"
            }
          ]
        },
        {
          "t": "p",
          "html": "The range-codomain distinction is the slippery point. If you declare <i>B</i> = {1, 2, …, 10} as your codomain but the relation only ever outputs {2, 4, 6}, then the <b>range is {2, 4, 6}</b> while the codomain stays {1, …, 10}. Note too that the domain need not be all of <i>A</i>: a relation is free to skip elements of <i>A</i> entirely."
        },
        {
          "t": "p",
          "html": "A relation can be written three ways. <b>Roster form</b> spells out every pair, <i>R</i> = {(1, 3), (2, 4), (3, 5)}. <b>Set-builder form</b> states the rule, <i>R</i> = {(<i>x</i>, <i>y</i>) : <i>y</i> = <i>x</i> + 2, <i>x</i>, <i>y</i> ∈ <i>A</i>}. An <b>arrow diagram</b> draws <i>A</i> and <i>B</i> as two columns of dots with an arrow from <i>a</i> to <i>b</i> whenever <i>a R b</i>. Roster and arrow forms need finite sets; set-builder works always."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · COUNTING RELATIONS",
          "tag": "n(A) = p, n(B) = q",
          "main": "number of relations = 2<sup>pq</sup>",
          "legend": [
            "<i>A</i> × <i>B</i> has <i>pq</i> pairs and a relation is <b>any</b> subset, so it is one yes/no decision per pair",
            "non-empty relations 2<sup>pq</sup> − 1 · relations <b>on</b> a set <i>A</i> (subsets of <i>A</i> × <i>A</i>) 2<sup>n(A)<sup>2</sup></sup>"
          ],
          "note": "Forcing k specific pairs to be in, or to be out, freezes k switches and leaves 2 to the power (pq − k). For an “at least one” condition, count the complement and subtract."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY 2 TO THE PQ, TAP FOR THE WHY",
          "steps": [
            {
              "eq": "R is a relation from A to B ⟺ R ⊆ A × B",
              "why": "The definition itself. Counting relations is therefore counting subsets of one particular set, and nothing more."
            },
            {
              "eq": "n(A × B) = p q",
              "why": "The Cartesian product count from Topic 01: p choices of first coordinate against q choices of second."
            },
            {
              "eq": "each of the pq pairs: in R, or not",
              "why": "Two choices per pair, and the decisions are independent. Whether one pair is in tells you nothing about any other pair, which is exactly what lets the choices multiply."
            },
            {
              "eq": "2 × 2 × ⋯ × 2 (pq factors) = 2<sup>pq</sup>",
              "why": "The multiplication principle. This count includes both extremes, the empty relation (every answer no) and the universal relation A × B (every answer yes), which is why the number of non-empty relations is one less."
            }
          ]
        },
        {
          "t": "proc",
          "title": "Rule to roster, and reading off domain and range",
          "steps": [
            "<b>List the playground.</b> Identify <i>A</i> and <i>B</i>, or <i>A</i> × <i>A</i> for a relation on <i>A</i>. Nothing outside it can ever appear.",
            "<b>Generate rather than filter.</b> With a rule like <i>y</i> = <i>x</i> + 2, run through each valid <i>x</i> ∈ <i>A</i>, compute <i>y</i>, and keep the pair only if <i>y</i> ∈ <i>B</i>.",
            "<b>Discard out-of-set outputs.</b> A value of <i>y</i> the rule produces but which does not lie in <i>B</i> is thrown away. This is where careless students add phantom pairs.",
            "<b>Read the two lists off the finished roster.</b> Domain = distinct first coordinates, range = distinct second coordinates. Going the other way, spot the pattern, write the rule, then verify both directions: every listed pair satisfies it, and it produces no pair you did not list."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "<i>A</i> = {1, 2, 3, 4, 5, 6} and <i>R</i> = {(<i>x</i>, <i>y</i>) : <i>y</i> = <i>x</i> + 2, <i>x</i>, <i>y</i> ∈ <i>A</i>}. Write <i>R</i> in roster form and state its domain, range and codomain.",
          "steps": [
            "Generate: <i>x</i> = 1, 2, 3, 4 give <i>y</i> = 3, 4, 5, 6, all inside <i>A</i>. ✓",
            "<i>x</i> = 5 gives <i>y</i> = 7 ∉ <i>A</i>, and <i>x</i> = 6 gives 8 ∉ <i>A</i>. Both discarded.",
            "<i>R</i> = {(1, 3), (2, 4), (3, 5), (4, 6)}. Domain {1, 2, 3, 4}, range {3, 4, 5, 6}, codomain <i>A</i>.",
            "Notice 5 and 6 sit in <i>A</i> but never as first coordinates: the domain need not be all of <i>A</i>."
          ],
          "ans": "R = {(1, 3), (2, 4), (3, 5), (4, 6)} · domain ⊆ A, range ⊆ codomain"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN · SPEED TRAP",
          "q": "Set <i>A</i> has 3 elements and set <i>B</i> has 4. How many relations can be defined from <i>A</i> to <i>B</i>, and how many of them are non-empty?",
          "steps": [
            "The two reflex wrong answers: 3 × 4 = 12, which is the number of <b>pairs</b>, and 2<sup>3+4</sup> = 128, which adds in the exponent instead of multiplying.",
            "A relation is a subset of <i>A</i> × <i>B</i>, so relations = 2<sup>n(A) n(B)</sup> = 2<sup>12</sup> = 4096.",
            "The empty relation is one of them, so non-empty = 4096 − 1 = 4095."
          ],
          "ans": "4096 relations · 4095 non-empty"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "On ℤ, let <i>R</i> = {(<i>x</i>, <i>y</i>) : <i>x</i>, <i>y</i> ∈ ℤ, <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> = 25}. Write <i>R</i> in roster form and find its domain and range.",
          "steps": [
            "Find the integer solutions: 25 = 0<sup>2</sup> + 5<sup>2</sup> = 3<sup>2</sup> + 4<sup>2</sup>, so the usable squares are 0, 9, 16, 25.",
            "Attach every sign choice: (0, ±5), (±5, 0), (±3, ±4) and (±4, ±3), which is 12 pairs in all, the 12 lattice points on a circle of radius 5.",
            "Domain and range are both {−5, −4, −3, 0, 3, 4, 5}: the equation is symmetric in <i>x</i> and <i>y</i>, so the two coincide."
          ],
          "ans": "12 pairs · domain = range = {−5, −4, −3, 0, 3, 4, 5}"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "<i>A</i> = {1, 2, 3}. How many relations on <i>A</i> contain <b>at least one</b> of the diagonal pairs (1, 1), (2, 2), (3, 3)?",
          "steps": [
            "<i>A</i> × <i>A</i> has 3<sup>2</sup> = 9 pairs, so there are 2<sup>9</sup> = 512 relations in total.",
            "“At least one of three” invites messy inclusion and exclusion. Count the complement instead: force all three diagonal pairs <b>out</b>.",
            "That freezes 3 switches and leaves 9 − 3 = 6 pairs free: 2<sup>6</sup> = 64 relations with no diagonal pair.",
            "Subtract: 512 − 64 = 448."
          ],
          "ans": "448 · fixing k pairs in or out always leaves 2 to the power (n² − k)"
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] <i>A</i> = {1, 2, 3, 4} and <i>R</i> = {(<i>x</i>, <i>y</i>) : <i>y</i> = <i>x</i>, <i>x</i>, <i>y</i> ∈ <i>A</i>}. Roster form, domain and range?",
              "a": "<i>R</i> = {(1, 1), (2, 2), (3, 3), (4, 4)}; domain = range = {1, 2, 3, 4}."
            },
            {
              "q": "[CBSE] <i>R</i> = {(2, 1), (3, 2), (4, 3), (5, 4)}. State domain and range, and write <i>R</i> in set-builder form.",
              "a": "Domain {2, 3, 4, 5}, range {1, 2, 3, 4}; <i>R</i> = {(<i>x</i>, <i>y</i>) : <i>y</i> = <i>x</i> − 1, <i>x</i> ∈ {2, 3, 4, 5}}."
            },
            {
              "q": "[JEE Main] <i>n</i>(<i>A</i>) = 4 and <i>n</i>(<i>B</i>) = 5. Total relations from <i>A</i> to <i>B</i>, and non-empty ones?",
              "a": "2<sup>20</sup> = 1 048 576 in total; 1 048 575 non-empty."
            },
            {
              "q": "[JEE Main] <i>A</i> = {1, …, 6} and <i>R</i> = {(<i>x</i>, <i>y</i>) : <i>x</i> + <i>y</i> = 7, <i>x</i>, <i>y</i> ∈ <i>A</i>}. Roster, <i>n</i>(<i>R</i>), domain, range?",
              "a": "{(1, 6), (2, 5), (3, 4), (4, 3), (5, 2), (6, 1)}; <i>n</i>(<i>R</i>) = 6; domain = range = <i>A</i>."
            },
            {
              "q": "[JEE Advanced] <i>A</i> = {1, 2, 3, 4}. How many relations on <i>A</i> contain (1, 2) and (2, 1) but <b>not</b> (3, 3)?",
              "a": "Three of the 16 switches are frozen: 2<sup>16−3</sup> = 2<sup>13</sup> = 8192."
            }
          ]
        },
        {
          "t": "mcq",
          "q": "If <i>n</i>(<i>A</i>) = 2 and <i>n</i>(<i>B</i>) = 3, the number of relations from <i>A</i> to <i>B</i> is:",
          "correct": 3,
          "opts": [
            {
              "label": "6",
              "nudge": "That is n(A × B), the number of <b>pairs</b>. A relation is a subset of those pairs, not one of them."
            },
            {
              "label": "8",
              "nudge": "2<sup>3</sup> sets the exponent to n(B) alone. Every pair gets a switch, and there are pq pairs."
            },
            {
              "label": "12",
              "nudge": "A doubling-then-multiplying muddle, 2 · 6. No valid route gives this."
            },
            { "label": "64", "nudge": null }
          ],
          "solution": "Relations = 2 to the power n(A) n(B) = 2⁶ = 64: six pairs, each independently in or out."
        },
        {
          "t": "mcq",
          "q": "A relation <i>R</i> from a non-empty set <i>A</i> to a non-empty set <i>B</i> is:",
          "correct": 1,
          "opts": [
            {
              "label": "any subset of A ∪ B",
              "nudge": "That confuses the union of the sets with their product. Relations live in the grid of pairs, not in A ∪ B."
            },
            { "label": "any subset of A × B", "nudge": null },
            {
              "label": "any element of A × B",
              "nudge": "A single ordered pair is one element. A relation is a <b>set</b> of such pairs, possibly one, possibly none, possibly many."
            },
            {
              "label": "the set A × B itself only",
              "nudge": "That describes the universal relation, one specific relation rather than the general definition."
            }
          ],
          "solution": "That is the definition, word for word: a relation from A to B is any subset of A × B."
        },
        {
          "t": "mcq",
          "q": "For <i>R</i> = {(1, 2), (2, 4), (3, 6)}, the range of <i>R</i> is:",
          "correct": 1,
          "opts": [
            {
              "label": "{1, 2, 3}",
              "nudge": "Those are the first coordinates, so this is the <b>domain</b>. The classic domain-range swap."
            },
            { "label": "{2, 4, 6}", "nudge": null },
            {
              "label": "{1, 2, 3, 4, 6}",
              "nudge": "This dumps first and second coordinates together. Range uses the second slot only."
            },
            {
              "label": "{1, 2, 4, 6}",
              "nudge": "Same error, with one first coordinate smuggled in. Domain left, range right."
            }
          ],
          "solution": "Range is the set of second coordinates: 2, 4 and 6."
        },
        {
          "t": "mcq",
          "q": "Let <i>R</i> = {(<i>x</i>, <i>y</i>) : <i>x</i>, <i>y</i> ∈ {1, 2, 3}, <i>x</i> < <i>y</i>}. Then <i>n</i>(<i>R</i>) equals:",
          "correct": 0,
          "opts": [
            { "label": "3", "nudge": null },
            {
              "label": "6",
              "nudge": "That counts every pair with x ≠ y, both directions. The strict inequality keeps only half of them."
            },
            {
              "label": "9",
              "nudge": "That is the whole of {1, 2, 3} × {1, 2, 3}, ignoring the condition entirely."
            },
            {
              "label": "2",
              "nudge": "One pair was missed while listing, usually (1, 3). Walk x = 1, then x = 2, then x = 3."
            }
          ],
          "solution": "The pairs with x < y are (1, 2), (1, 3) and (2, 3): exactly 3."
        },
        {
          "t": "mistakes",
          "items": [
            "The domain-range swap. Lock it in: <b>domain = left = inputs, range = right = outputs</b>. It is the “order matters in a pair” trap wearing a new costume.",
            "Confusing range with codomain. Codomain is the <b>whole declared set</b> <i>B</i>; range is only the part actually hit. If a question states <i>B</i> and asks for the range, do not just write <i>B</i>.",
            "<i>pq</i> versus 2<sup>pq</sup>. <i>pq</i> counts <b>pairs</b>, 2<sup>pq</sup> counts <b>relations</b>. Forgetting to exponentiate, or adding <i>p</i> + <i>q</i> in the exponent, wrecks the count.",
            "Phantom pairs in roster form. A <i>y</i> the rule produces but which lies <b>outside <i>B</i></b> is not admitted, no matter what the rule says."
          ]
        },
        {
          "t": "protip",
          "html": "for counting questions keep two anchors in mind: <b>pairs = <i>pq</i></b> and <b>relations = 2<sup>pq</sup></b>. when some pairs are forced in or out, freeze them, each forced pair removes one factor of 2. and for “at least one” conditions, count the complement, “none of them”, and subtract, it beats inclusion and exclusion almost every time."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "R is a relation from A to B ⟺ R ⊆ A × B",
              "note": "a highlighted slice of the grid"
            },
            {
              "f": "(a, b) ∈ R ⟺ a R b",
              "note": "on a set A means R ⊆ A × A"
            },
            {
              "f": "Dom = first coordinates · Range = second",
              "note": "Range ⊆ Codomain = B, always"
            },
            {
              "f": "relations from A to B = 2<sup>pq</sup>",
              "note": "non-empty 2 to the pq, minus 1"
            },
            {
              "f": "k pairs forced ⇒ 2<sup>pq − k</sup>",
              "note": "each frozen switch halves the count"
            },
            {
              "f": "∅ and A × B are both relations",
              "note": "the void one and the universal one"
            }
          ],
          "aids": [
            "“domain left, range right, never swap”",
            "“range is reached, codomain is allowed”"
          ]
        }
      ]
    },
    {
      "n": "03",
      "title": "Types of Relations and Equivalence Classes",
      "chip": "03 EQUIVALENCE",
      "kalam": "three properties in, one clean partition out",
      "blocks": [
        {
          "t": "p",
          "html": "Walk into a school assembly of 600 students. Nobody is standing at random: every student belongs to exactly one section, 11-A, 11-B or 11-C. Now consider the rule “<b>is in the same section as</b>”. Three things are true of it, and they are so obvious you have never bothered to name them. Every student is in the same section as themselves. If Riya is in the same section as Aman, then Aman is in the same section as Riya. And if Riya is with Aman, and Aman is with Sara, then Riya is with Sara."
        },
        {
          "t": "p",
          "html": "Those three properties are called <b>reflexive</b>, <b>symmetric</b> and <b>transitive</b>, and a relation with all three is an <b>equivalence relation</b>. Here is the whole point of the topic: an equivalence relation is exactly a rule that <b>chops a set into non-overlapping groups</b>. The three properties are not an arbitrary checklist, together they are precisely what it takes to sort a set into clean sections."
        },
        {
          "t": "p",
          "html": "Look at the assembly again. The relation “same section as” and the seating chart carry identical information. Given the sections you can answer any “same section?” question; given the relation you can rebuild the sections, by collecting for each student everyone related to them. Those collections are the <b>equivalence classes</b>, and they overlap nowhere and miss nobody. That is a <b>partition</b>."
        },
        {
          "t": "think",
          "html": "on the mumbai locals, “travels on the same line as” partitions commuters into western, central and harbour. change the rule to “lives within 5 km of” and the machinery breaks: andheri is within 5 km of jogeshwari and jogeshwari of goregaon, but andheri and goregaon are not. transitivity is the fragile one, and it is the one examiners attack."
        },
        {
          "t": "defgrid",
          "title": "The four properties",
          "rows": [
            {
              "k": "Reflexive",
              "v": "(<i>a</i>, <i>a</i>) ∈ <i>R</i> for <b>every</b> <i>a</i> ∈ <i>A</i>; equivalently <i>I<sub>A</sub></i> ⊆ <i>R</i>. One absentee kills it"
            },
            {
              "k": "Symmetric",
              "v": "(<i>a</i>, <i>b</i>) ∈ <i>R</i> ⇒ (<i>b</i>, <i>a</i>) ∈ <i>R</i>; equivalently <i>R</i> = <i>R</i><sup>−1</sup>"
            },
            {
              "k": "Transitive",
              "v": "(<i>a</i>, <i>b</i>), (<i>b</i>, <i>c</i>) ∈ <i>R</i> ⇒ (<i>a</i>, <i>c</i>) ∈ <i>R</i>. Holds <b>vacuously</b> when no chain exists"
            },
            {
              "k": "Antisymmetric",
              "v": "(<i>a</i>, <i>b</i>), (<i>b</i>, <i>a</i>) ∈ <i>R</i> ⇒ <i>a</i> = <i>b</i>: a ban on two-way streets between <b>distinct</b> elements"
            },
            {
              "k": "Identity relation I<sub>A</sub>",
              "v": "{(<i>a</i>, <i>a</i>) : <i>a</i> ∈ <i>A</i>}, the only relation that is all four at once"
            },
            {
              "k": "Inverse relation R<sup>−1</sup>",
              "v": "every pair reversed. <i>n</i>(<i>R</i><sup>−1</sup>) = <i>n</i>(<i>R</i>), Dom(<i>R</i><sup>−1</sup>) = Range(<i>R</i>), (<i>R</i><sup>−1</sup>)<sup>−1</sup> = <i>R</i>"
            }
          ]
        },
        {
          "t": "p",
          "html": "Two remarks that pay for themselves. <b>Antisymmetric is not the negation of symmetric</b>: <i>I<sub>A</sub></i> is both, the empty relation on a non-empty set is both, and a relation can be neither. Antisymmetry is the temperament of <b>rankings and hierarchies</b>, ≤ on ℝ, ⊆ on sets, “divides” on ℕ, not of groupings. And the <b>inverse relation</b> is just <i>R</i> with every arrow reversed: if <i>R</i> is “is the father of”, <i>R</i><sup>−1</sup> is “is the child of”. Reversing costs nothing and tells you something, because <i>R</i> is symmetric exactly when reversing changes nothing at all."
        },
        {
          "t": "def",
          "term": "Equivalence relation",
          "html": "A relation on <i>A</i> that is <b>reflexive and symmetric and transitive</b>. The smallest one on <i>A</i> is the identity relation <i>I<sub>A</sub></i>, where every element is its own section; the largest is the universal relation <i>A</i> × <i>A</i>, one section holding everybody."
        },
        {
          "t": "def",
          "term": "Equivalence class [a]",
          "html": "For an equivalence relation <i>R</i> on <i>A</i> and <i>a</i> ∈ <i>A</i>, <b>[<i>a</i>] = {<i>x</i> ∈ <i>A</i> : (<i>x</i>, <i>a</i>) ∈ <i>R</i>}</b>. By reflexivity <i>a</i> ∈ [<i>a</i>], so no class is ever empty, and <b>[<i>a</i>] = [<i>b</i>] ⟺ (<i>a</i>, <i>b</i>) ∈ <i>R</i></b>: related elements share the <b>same</b> class, they do not merely overlap."
        },
        {
          "t": "def",
          "term": "Partition of A",
          "html": "A collection of subsets <i>A</i><sub>1</sub>, …, <i>A<sub>k</sub></i> with each <i>A<sub>i</sub></i> ≠ ∅, <i>A<sub>i</sub></i> ∩ <i>A<sub>j</sub></i> = ∅ for <i>i</i> ≠ <i>j</i>, and <i>A</i><sub>1</sub> ∪ ⋯ ∪ <i>A<sub>k</sub></i> = <i>A</i>. Non-empty, pairwise disjoint, and together the whole set."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY THE CLASSES PARTITION A, TAP FOR THE WHY",
          "steps": [
            {
              "eq": "a ∈ [a] for every a ∈ A",
              "why": "Reflexivity gives (a, a) ∈ R, so every element lies in its own class. In particular no class is empty, and reflexivity is exactly the statement that everyone sits in some section."
            },
            {
              "eq": "the classes cover A",
              "why": "By the first line, every a lies in the class [a]. Nothing can be left out, because each element supplies a class containing itself."
            },
            {
              "eq": "[a] ∩ [b] ≠ ∅ ⇒ [a] = [b]",
              "why": "Take c in both, so (c, a) and (c, b) are in R. For any x in [a] we have (x, a). Symmetry turns (c, a) into (a, c); transitivity chains (x, a) with (a, c) to give (x, c); chaining that with (c, b) gives (x, b), so x is in [b]. The same argument with a and b swapped gives the reverse containment, hence equality."
            },
            {
              "eq": "non-empty · pairwise disjoint · union = A",
              "why": "That is precisely a partition. The converse holds too: given any partition of A, the rule “a is related to b when they lie in the same block” is an equivalence relation whose classes are exactly the blocks. Equivalence relations on A and partitions of A are the same objects in different clothes, which is what makes counting them possible at all."
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "COUNTING WITH A PROPERTY IMPOSED",
          "tag": "n(A) = n",
          "main": "reflexive 2<sup>n<sup>2</sup> − n</sup> · symmetric 2<sup>n(n+1)/2</sup>",
          "legend": [
            "all relations 2<sup>n<sup>2</sup></sup> · reflexive <b>and</b> symmetric 2<sup>n(n−1)/2</sup> · antisymmetric 2<sup>n</sup> · 3<sup>n(n−1)/2</sup>",
            "equivalence relations = <i>B<sub>n</sub></i>, the number of partitions: <i>B</i><sub>1</sub> = 1, <i>B</i><sub>2</sub> = 2, <i>B</i><sub>3</sub> = 5, <i>B</i><sub>4</sub> = 15"
          ],
          "note": "Read the exponents as positions on the grid: the whole grid is n², kill the diagonal for reflexive, diagonal plus upper triangle for symmetric, upper triangle alone for both. Antisymmetric is the only one carrying a 3."
        },
        {
          "t": "p",
          "html": "Why those exponents. Reflexivity <b>freezes</b> the <i>n</i> diagonal switches to “in”, leaving <i>n</i><sup>2</sup> − <i>n</i> free. Symmetry says nothing about the diagonal, so those <i>n</i> stay free, but it <b>gangs together</b> each off-diagonal couple {(<i>a</i>, <i>b</i>), (<i>b</i>, <i>a</i>)}, both in or both out, and there are <i>n</i>(<i>n</i> − 1)/2 couples. Antisymmetry forbids exactly one of each couple’s four combinations, “both in”, leaving <b>three</b> legal states. Transitivity does none of this: it ties distant switches together, which is why it has no power-of-two formula at all."
        },
        {
          "t": "proc",
          "title": "Testing a relation, then finding its classes",
          "steps": [
            "<b>Reflexive?</b> Run down the diagonal. Is (<i>a</i>, <i>a</i>) ∈ <i>R</i> for <b>every</b> <i>a</i> ∈ <i>A</i>? One absentee and the answer is no. There is no “mostly reflexive”.",
            "<b>Symmetric?</b> For each pair (<i>a</i>, <i>b</i>) ∈ <i>R</i> with <i>a</i> ≠ <i>b</i>, look for (<i>b</i>, <i>a</i>). One unreciprocated arrow and the answer is no. Diagonal pairs are their own reverses, so do not waste time on them.",
            "<b>Transitive?</b> Find every chain (<i>a</i>, <i>b</i>), (<i>b</i>, <i>c</i>) inside <i>R</i>, the second coordinate of one pair matching the first of another, and check (<i>a</i>, <i>c</i>) ∈ <i>R</i>. Sort pairs by first coordinate, then for each (<i>a</i>, <i>b</i>) scan only the pairs starting with <i>b</i>: staring at more than five pairs will miss a chain.",
            "<b>Antisymmetric?</b> Hunt for a two-way street between distinct elements. Find one and the answer is no; find none and the answer is yes, because antisymmetry is a prohibition and holds until a witness turns up.",
            "<b>Then, and only then, collect classes.</b> Pick any unclassified <i>a</i>, take [<i>a</i>], strike out everything in it (each of those has the same class), and repeat until <i>A</i> is exhausted. Check the blocks are non-empty, disjoint and cover <i>A</i>: that is a free audit of your own work."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "<i>A</i> = {1, 2, 3}, <i>R</i> = {(1, 1), (2, 2), (3, 3), (1, 2), (2, 1)}. Examine all four properties, write <i>R</i><sup>−1</sup>, and if <i>R</i> is an equivalence relation give the partition.",
          "steps": [
            "Reflexive: (1, 1), (2, 2), (3, 3) all present. ✓ Symmetric: the only off-diagonal pairs are (1, 2) and (2, 1), each the reverse of the other. ✓",
            "Transitive: (1, 2) with (2, 1) needs (1, 1) ✓; (2, 1) with (1, 2) needs (2, 2) ✓; chains through 3 need only (3, 3) ✓. Every chain closes.",
            "Antisymmetric: (1, 2) and (2, 1) are both in but 1 ≠ 2. ✗ Inverse: reversing gives back <i>R</i> itself, confirming symmetry.",
            "Classes: [1] = {1, 2}, [2] = {1, 2}, [3] = {3}. So [1] = [2], exactly as the theory promised, since (1, 2) ∈ <i>R</i>."
          ],
          "ans": "An equivalence relation, not antisymmetric · partition {1, 2} and {3}"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "<i>A</i> has 4 elements. Count the relations on <i>A</i> that are (i) reflexive, (ii) symmetric, (iii) both, (iv) antisymmetric. What fraction of all relations is reflexive?",
          "steps": [
            "<i>n</i> = 4, so <i>A</i> × <i>A</i> has 16 pairs, 2<sup>16</sup> = 65 536 relations, and 4 · 3/2 = 6 off-diagonal couples.",
            "(i) Freeze the 4 diagonal switches: 2<sup>12</sup> = 4096. (ii) Diagonal free (2<sup>4</sup>), 6 couples decided once each (2<sup>6</sup>): 2<sup>10</sup> = 1024.",
            "(iii) Take (ii) and freeze the diagonal to “in”: 2<sup>6</sup> = 64.",
            "(iv) Diagonal free (2<sup>4</sup> = 16), and each couple has 3 legal states: 16 × 3<sup>6</sup> = 16 × 729 = 11 664."
          ],
          "ans": "4096 · 1024 · 64 · 11 664 · one sixteenth, each frozen switch halves the population"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN · SPEED TRAP",
          "q": "On <i>A</i> = {1, 2, 3}, let <i>R</i> = {(1, 1), (2, 2), (1, 2), (2, 1)}. Is <i>R</i> an equivalence relation on <i>A</i>?",
          "steps": [
            "The famous one-line “proof” that symmetry and transitivity force reflexivity: take any <i>b</i> with (<i>a</i>, <i>b</i>) ∈ <i>R</i>, symmetry gives (<i>b</i>, <i>a</i>), transitivity gives (<i>a</i>, <i>a</i>).",
            "Where it breaks: “take any <i>b</i> with (<i>a</i>, <i>b</i>) ∈ <i>R</i>” silently assumes such a <i>b</i> <b>exists</b>. For an element related to nothing, the argument never starts.",
            "Here <i>R</i> is symmetric ✓ and transitive ✓, but 3 appears in no pair at all, so (3, 3) ∉ <i>R</i> and reflexivity fails.",
            "The honest statement: symmetric and transitive <b>and every element related to at least one thing</b> gives reflexivity. That extra hypothesis is the whole content."
          ],
          "ans": "No. It is an equivalence relation on {1, 2}, but not on A: properties are relative to the declared set"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "<i>A</i> = {1, 2, 3}. (i) How many equivalence relations are there on <i>A</i>? (ii) How many contain (1, 2)? (iii) Deduce the number of relations that are symmetric but not reflexive.",
          "steps": [
            "(i) The switch-counting formulas fail here, because transitivity couples switches. Count <b>partitions</b> instead: 1+1+1 (one way), 2+1 (three ways, chosen by who is alone), 3 (one way). Total 5.",
            "(ii) An equivalence relation contains (1, 2) exactly when 1 and 2 lie in the <b>same block</b>: the partitions {1, 2}, {3} and {1, 2, 3}. Answer 2.",
            "(iii) Here the formulas do apply. Symmetric = 2<sup>3·4/2</sup> = 2<sup>6</sup> = 64; reflexive and symmetric = 2<sup>3·2/2</sup> = 2<sup>3</sup> = 8.",
            "Every reflexive-and-symmetric relation is symmetric, so subtract: 64 − 8 = 56."
          ],
          "ans": "5 · 2 · 56 · reflexive, symmetric and antisymmetric are switch counts; transitivity is not"
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] <i>A</i> = {1, 2, 3}, <i>R</i> = {(1, 1), (2, 2), (3, 3), (1, 2), (2, 3)}. Which of reflexive, symmetric, transitive holds?",
              "a": "Reflexive only. (1, 2) ∈ <i>R</i> but (2, 1) ∉ <i>R</i>; and (1, 2), (2, 3) ∈ <i>R</i> but (1, 3) ∉ <i>R</i>."
            },
            {
              "q": "[CBSE] On <i>A</i> = {1, 2, 3, 4}, <i>R</i> = {(<i>a</i>, <i>b</i>) : <i>a</i> divides <i>b</i>}. Roster form, <i>n</i>(<i>R</i>), and classify.",
              "a": "{(1,1), (1,2), (1,3), (1,4), (2,2), (2,4), (3,3), (4,4)}; <i>n</i>(<i>R</i>) = 8. Reflexive ✓, transitive ✓, antisymmetric ✓, symmetric ✗."
            },
            {
              "q": "[JEE Main] For a set with 5 elements, count the relations that are (i) reflexive, (ii) symmetric, (iii) both.",
              "a": "(i) 2<sup>20</sup> = 1 048 576 · (ii) 2<sup>15</sup> = 32 768 · (iii) 2<sup>10</sup> = 1024."
            },
            {
              "q": "[JEE Main] On ℤ, <i>R</i> = {(<i>a</i>, <i>b</i>) : <i>a</i> − <i>b</i> divisible by 4}. Write [3] and state how many distinct classes there are.",
              "a": "[3] = {4<i>k</i> + 3 : <i>k</i> ∈ ℤ} = {…, −5, −1, 3, 7, 11, …}; 4 classes, [0], [1], [2], [3], one per remainder."
            },
            {
              "q": "[JEE Advanced] <i>A</i> = {1, 2, 3, 4}. How many equivalence relations on <i>A</i> contain both (1, 2) and (3, 4)?",
              "a": "2. Forcing 1, 2 into one block and 3, 4 into another leaves only two options: the blocks stay separate, or they merge into {1, 2, 3, 4}."
            }
          ]
        },
        {
          "t": "mcq",
          "q": "On <i>A</i> = {1, 2, 3}, which relation is symmetric but <b>neither</b> reflexive nor transitive?",
          "correct": 0,
          "opts": [
            { "label": "{(1, 2), (2, 1)}", "nudge": null },
            {
              "label": "{(1, 1), (2, 2), (3, 3)}",
              "nudge": "That is I<sub>A</sub>, which is reflexive, symmetric <b>and</b> transitive. Chosen by reading “symmetric” and stopping there."
            },
            {
              "label": "{(1, 2), (2, 3), (1, 3)}",
              "nudge": "Transitive (the one chain closes) but not symmetric. “The pairs look paired up” is not the same as symmetry."
            },
            {
              "label": "{(1, 2), (2, 1), (1, 1), (2, 2)}",
              "nudge": "Symmetric and <b>transitive</b>, only reflexivity fails. Transitivity is exactly what students forget to check."
            }
          ],
          "solution": "Both arrows are reciprocated, so symmetric. No diagonal pair is present, so not reflexive. The chain (1, 2) with (2, 1) demands (1, 1), which is absent, so not transitive."
        },
        {
          "t": "mcq",
          "q": "The number of reflexive relations on a set with 3 elements is:",
          "correct": 1,
          "opts": [
            {
              "label": "512",
              "nudge": "2<sup>9</sup> counts <b>all</b> relations on a 3-element set: the reflexive condition was ignored entirely."
            },
            { "label": "64", "nudge": null },
            {
              "label": "8",
              "nudge": "2<sup>3</sup> freezes the wrong switches. It is in fact the count of reflexive <b>and symmetric</b> relations, a different question."
            },
            {
              "label": "216",
              "nudge": "2<sup>3</sup> · 3<sup>3</sup> is the <b>antisymmetric</b> count: right machinery, wrong property."
            }
          ],
          "solution": "Reflexivity freezes the 3 diagonal switches, leaving 9 − 3 = 6 free: 2⁶ = 64."
        },
        {
          "t": "mcq",
          "q": "If <i>R</i> is an equivalence relation on a non-empty set <i>A</i>, which statement is <b>false</b>?",
          "correct": 3,
          "opts": [
            {
              "label": "R<sup>−1</sup> = R",
              "nudge": "True: an equivalence relation is symmetric, and symmetry is exactly the condition R = R<sup>−1</sup>."
            },
            {
              "label": "I<sub>A</sub> ⊆ R",
              "nudge": "True: this is reflexivity restated, every diagonal pair belongs to R."
            },
            {
              "label": "two distinct classes of R are disjoint",
              "nudge": "True, and it is step 3 of the partition derivation. Marking it false usually means picturing classes as overlapping groups."
            },
            { "label": "R = A × A", "nudge": null }
          ],
          "solution": "R = A × A describes only the universal relation. I_A is an equivalence relation too, and it equals A × A only when n(A) = 1."
        },
        {
          "t": "mcq",
          "q": "On ℝ, the relation <i>R</i> = {(<i>a</i>, <i>b</i>) : <i>a</i> ≤ <i>b</i>} is:",
          "correct": 0,
          "opts": [
            { "label": "reflexive, antisymmetric and transitive but not symmetric", "nudge": null },
            {
              "label": "an equivalence relation",
              "nudge": "Order relations are the standard counterexample: reflexive and transitive, but antisymmetric rather than symmetric."
            },
            {
              "label": "symmetric only",
              "nudge": "That confuses ≤ with =. Only the equality part of ≤ runs both ways: 2 ≤ 3 while 3 is not ≤ 2."
            },
            {
              "label": "reflexive and symmetric but not transitive",
              "nudge": "Reflexivity is right, the other two verdicts are backwards: ≤ is one of the most transitive relations in mathematics."
            }
          ],
          "solution": "a ≤ a gives reflexive; a ≤ b with b ≤ a forces a = b, so antisymmetric; a ≤ b with b ≤ c gives a ≤ c, so transitive; and 2 ≤ 3 while 3 ≰ 2, so not symmetric."
        },
        {
          "t": "mistakes",
          "items": [
            "“Symmetric and transitive, <b>therefore</b> reflexive.” False, and the single most examined misconception in the topic. An element related to nothing escapes the argument entirely: check the diagonal separately, every time.",
            "Reflexive means <b>every</b> element. Finding (1, 1) and (2, 2) on <i>A</i> = {1, 2, 3} and declaring reflexive is a guaranteed mark lost. Count the diagonal pairs: you need exactly <i>n</i>(<i>A</i>) of them.",
            "Treating antisymmetric as “not symmetric”. They are independent: <i>I<sub>A</sub></i> is <b>both</b>, and {(1, 2), (2, 1), (1, 3)} is neither.",
            "Marking <i>R</i> = {(1, 2)} “not transitive” because nothing chains. No chain means no condition to violate, so it <b>is</b> transitive. Transitivity fails only when a chain exists and does not close.",
            "Writing 2<sup>n<sup>2</sup></sup> − <i>n</i> for the reflexive count. Freezing a switch <b>divides</b> by 2, it does not subtract 1: the answer is 2<sup>n<sup>2</sup> − n</sup>."
          ]
        },
        {
          "t": "protip",
          "html": "spend your first ten seconds on the <b>diagonal</b> and the next ten on <b>one chain</b>. reflexivity and transitivity are where nearly every relation dies, and a single missing diagonal pair or one unclosed chain settles the question with no further work. and the moment “equivalence relation” shows up in a counting question, abandon powers of two and count partitions, <i>B</i><sub>3</sub> = 5 and <i>B</i><sub>4</sub> = 15 are worth knowing cold."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "reflexive: I<sub>A</sub> ⊆ R · symmetric: R = R<sup>−1</sup>",
              "note": "run the diagonal, then check the reverses"
            },
            {
              "f": "transitive: chains must close",
              "note": "vacuously true when no chain exists"
            },
            {
              "f": "antisymmetric: (a,b) and (b,a) ⇒ a = b",
              "note": "not the negation of symmetric"
            },
            {
              "f": "equivalence = reflexive + symmetric + transitive",
              "note": "classes partition A, and partitions give them back"
            },
            {
              "f": "[a] = [b] ⟺ (a, b) ∈ R · a ∈ [a]",
              "note": "distinct classes are disjoint, never overlapping"
            },
            {
              "f": "reflexive 2<sup>n² − n</sup> · symmetric 2<sup>n(n+1)/2</sup>",
              "note": "antisymmetric 2ⁿ · 3 to the n(n−1)/2"
            }
          ],
          "aids": [
            "“run the diagonal, then chase one chain”",
            "“transitivity has no formula, count partitions”"
          ]
        }
      ]
    },
    {
      "n": "04",
      "title": "Functions, the Standard Zoo and Graph Moves",
      "chip": "04 FUNCTIONS",
      "kalam": "one button, one snack",
      "blocks": [
        {
          "t": "p",
          "html": "You have met relations: any highlighted slice of <i>A</i> × <i>B</i>. A <b>function</b> is a relation with discipline. Think of a snack vending machine. Each button is wired to deliver exactly one product, and two things are guaranteed: press a button and you <b>always</b> get something, no dead buttons; and you get <b>one</b> definite item, never “maybe a samosa, maybe a Frooti”."
        },
        {
          "t": "p",
          "html": "That is the whole definition. A function <i>f</i> : <i>A</i> → <i>B</i> is a relation from <i>A</i> to <i>B</i> in which <b>(1)</b> every element of <i>A</i> has an image in <i>B</i>, no input left unmapped, and <b>(2)</b> no element of <i>A</i> has more than one image. An ordinary relation is free to skip elements of <i>A</i> and free to send one element to several places; a function forbids both. So <b>every function is a relation, but most relations are not functions</b>."
        },
        {
          "t": "think",
          "html": "picture the dabbawala system. a tiffin with no address is a failure, that breaks promise 1. a tiffin tagged with two addresses is chaos, that breaks promise 2. but two different tiffins going to the same office is perfectly fine. many-to-one is allowed; one-to-many is banned."
        },
        {
          "t": "def",
          "term": "Function f : A → B",
          "html": "A subset of <i>A</i> × <i>B</i> in which every <i>a</i> ∈ <i>A</i> appears as the first coordinate of <b>exactly one</b> pair. We write <i>y</i> = <i>f</i>(<i>x</i>), read “<i>y</i> is the image of <i>x</i> under <i>f</i>”, and call <i>x</i> the <b>independent</b> variable, <i>y</i> the <b>dependent</b> variable."
        },
        {
          "t": "p",
          "html": "The three companions sharpen here. The <b>domain is the whole of <i>A</i></b>, because promise 1 forces every element to be used, which is the one real difference from a relation. The <b>codomain</b> is the declared target <i>B</i>, and the <b>range</b> is {<i>f</i>(<i>x</i>) : <i>x</i> ∈ <i>A</i>}, the images actually produced, still a subset of the codomain."
        },
        {
          "t": "def",
          "term": "Equality of functions",
          "html": "<i>f</i> = <i>g</i> if and only if they have the <b>same domain</b> and <i>f</i>(<i>x</i>) = <i>g</i>(<i>x</i>) for every <i>x</i> in it. The same rule on a different domain is a different function: <i>f</i>(<i>x</i>) = <i>x</i> on ℝ and <i>g</i>(<i>x</i>) = <i>x</i> on [0, 1] are <b>not equal</b>."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · THE GRAPHS TO KNOW ON SIGHT, TAP ONE",
          "chips": ["identity", "modulus", "signum", "greatest integer", "the circle"],
          "captions": [
            "Identity f(x) = x: the 45 degree line through the origin. Every input maps to itself, so domain and range are both ℝ.",
            "Modulus f(x) = |x|: a symmetric V with its vertex at the origin. It never dips below the x-axis, so the range is [0, ∞) while the domain is all of ℝ.",
            "Signum: −1 for x < 0, 0 at x = 0, and +1 for x > 0. The hollow circles mark values the function does not take at the jump, the filled dot the one it does. Range {−1, 0, 1}.",
            "Greatest integer f(x) = [x], the largest integer not exceeding x: a left-closed staircase. On [n, n + 1) the value is n, filled at the left end and hollow at the right. Range ℤ, and note [−2.3] = −3, not −2.",
            "x² + y² = 25 is a relation and not a function of x. The dashed line x = 3 meets it twice, at y = 4 and at y = −4, so one input carries two outputs. One such witness settles it; you never check the other lines."
          ],
          "frames": [
            {
              "x": [-3, 3],
              "y": [-3, 3],
              "curves": [{ "c": "line", "m": 1, "k": 0 }],
              "points": [{ "x": 0, "y": 0 }]
            },
            {
              "x": [-3, 3],
              "y": [-0.8, 3.2],
              "curves": [{ "c": "abs" }],
              "points": [{ "x": 0, "y": 0 }]
            },
            {
              "x": [-3, 3],
              "y": [-1.9, 1.9],
              "segments": [
                { "from": [-3, -1], "to": [-0.06, -1] },
                { "from": [0.06, 1], "to": [3, 1] }
              ],
              "points": [
                { "x": 0, "y": -1, "open": true },
                { "x": 0, "y": 1, "open": true },
                { "x": 0, "y": 0 }
              ]
            },
            {
              "x": [-3, 3],
              "y": [-3.4, 3.4],
              "segments": [
                { "from": [-3, -3], "to": [-2, -3] },
                { "from": [-2, -2], "to": [-1, -2] },
                { "from": [-1, -1], "to": [0, -1] },
                { "from": [0, 0], "to": [1, 0] },
                { "from": [1, 1], "to": [2, 1] },
                { "from": [2, 2], "to": [3, 2] }
              ],
              "points": [
                { "x": -2, "y": -3, "open": true },
                { "x": -1, "y": -2, "open": true },
                { "x": 0, "y": -1, "open": true },
                { "x": 1, "y": 0, "open": true },
                { "x": 2, "y": 1, "open": true },
                { "x": 3, "y": 2, "open": true },
                { "x": -3, "y": -3 },
                { "x": -2, "y": -2 },
                { "x": -1, "y": -1 },
                { "x": 0, "y": 0 },
                { "x": 1, "y": 1 },
                { "x": 2, "y": 2 }
              ]
            },
            {
              "x": [-6.5, 6.5],
              "y": [-6.5, 6.5],
              "curves": [
                { "c": "circle", "r": 5 },
                { "c": "vline", "x": 3, "dash": true }
              ],
              "points": [
                { "x": 3, "y": 4 },
                { "x": 3, "y": -4 }
              ],
              "labels": [{ "x": 3, "y": 5.9, "text": "x = 3 meets it twice", "soft": true }]
            }
          ]
        },
        {
          "t": "defgrid",
          "title": "The Class 11 zoo",
          "rows": [
            { "k": "Identity", "v": "<i>f</i>(<i>x</i>) = <i>x</i>, domain ℝ, range ℝ" },
            { "k": "Constant", "v": "<i>f</i>(<i>x</i>) = <i>c</i>, domain ℝ, range {<i>c</i>}" },
            {
              "k": "Polynomial / rational",
              "v": "domain ℝ · <i>p</i>(<i>x</i>)/<i>q</i>(<i>x</i>) has domain ℝ ∖ {<i>x</i> : <i>q</i>(<i>x</i>) = 0}"
            },
            { "k": "Modulus", "v": "<i>f</i>(<i>x</i>) = |<i>x</i>|, domain ℝ, range [0, ∞)" },
            {
              "k": "Signum",
              "v": "|<i>x</i>|/<i>x</i> for <i>x</i> ≠ 0 and 0 at <i>x</i> = 0, range {−1, 0, 1}"
            },
            {
              "k": "Greatest integer",
              "v": "[<i>x</i>] = largest integer ≤ <i>x</i>, range ℤ · companion: {<i>x</i>} = <i>x</i> − [<i>x</i>], range [0, 1)"
            }
          ]
        },
        {
          "t": "p",
          "html": "<b>Reading domain and range off a graph:</b> project the curve onto the axes. The shadow it casts on the <i>x</i>-axis is the domain, every <i>x</i>-value the graph covers, and the shadow on the <i>y</i>-axis is the range, every <i>y</i>-value it attains. The vertical line test comes first, though, because it is what confirms the picture is a function at all."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · COUNTING FUNCTIONS",
          "tag": "n(A) = p, n(B) = q",
          "main": "number of functions = q<sup>p</sup>",
          "legend": [
            "each of the <i>p</i> inputs independently chooses one of the <i>q</i> outputs, so the choices multiply",
            "contrast: <b>relations</b> were 2<sup>pq</sup>, one yes/no per pair. Functions are far fewer"
          ],
          "note": "Outputs are the base, inputs are the exponent. Writing p to the q is the most-tested distractor on the whole topic."
        },
        {
          "t": "proc",
          "title": "The vertical line test, stated so it survives a follow-up",
          "steps": [
            "<b>Define the count.</b> Fix a real number <i>a</i> and let <i>m</i>(<i>a</i>) be the number of points of the graph lying on the vertical line <i>x</i> = <i>a</i>. There are three verdicts and only three.",
            "<b><i>m</i>(<i>a</i>) ≤ 1 for every <i>a</i>:</b> it is a function. Its domain is {<i>a</i> : <i>m</i>(<i>a</i>) = 1}, the shadow on the <i>x</i>-axis, and its rule is “<i>f</i>(<i>a</i>) is the one <i>y</i> on that line”.",
            "<b><i>m</i>(<i>a</i>) = 1 for every <i>a</i> in a declared set <i>A</i>:</b> it is a function <b>on <i>A</i></b>. This is the two-promise definition restated: <i>m</i>(<i>a</i>) ≥ 1 is totality, <i>m</i>(<i>a</i>) ≤ 1 is single-valuedness.",
            "<b><i>m</i>(<i>a</i>) ≥ 2 for even one <i>a</i>:</b> not a function. One witness settles it. Note that <i>m</i>(<i>a</i>) = 0 is <b>not</b> a fault, it says only that <i>a</i> lies outside the domain.",
            "<b>With no picture:</b> hold <i>x</i> fixed, solve the defining equation for <i>y</i> and count real solutions. An even power of <i>y</i>, a |<i>y</i>| or a ± is the usual source of a second one. For a piecewise rule, check the clauses <b>agree wherever their intervals overlap</b>."
          ]
        },
        {
          "t": "defgrid",
          "title": "The graph moves",
          "rows": [
            {
              "k": "f(x) + k · f(x) − k",
              "v": "shift up <i>k</i>, shift down <i>k</i>. Outside the bracket, everything is literal"
            },
            {
              "k": "f(x − h) · f(x + h)",
              "v": "shift <b>right</b> <i>h</i>, shift <b>left</b> <i>h</i>. Inside the bracket, opposite sign, and it happens first"
            },
            {
              "k": "c f(x) · f(cx)",
              "v": "vertical stretch by <i>c</i> · horizontal squash by <i>c</i>: factor <i>f</i>(<i>c</i>(<i>x</i> + <i>d</i>/<i>c</i>)) before reading any shift"
            },
            {
              "k": "−f(x) · f(−x)",
              "v": "reflect in the <i>x</i>-axis · reflect in the <i>y</i>-axis"
            },
            {
              "k": "|f(x)|",
              "v": "fold about the <i>x</i>-axis: keep what is on or above it, flip what is below it upward"
            },
            {
              "k": "f(|x|)",
              "v": "fold about the <i>y</i>-axis: delete the <i>x</i> < 0 part and copy the <i>x</i> ≥ 0 part into it. Always even"
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · BUILDING 3 − |2x − 4| FROM THE V, TAP A LINE",
          "steps": [
            {
              "eq": "|2x − 4| = 2|x − 2|",
              "why": "Factor inside the modulus before doing anything else. Reading 2x − 4 as a shift of 4 gives the wrong vertex and the wrong slopes: the shift is 4 divided by 2, which is 2."
            },
            {
              "eq": "y = |x − 2|",
              "why": "Inside the bracket everything runs backwards, so subtracting 2 shifts the V right by 2. The vertex moves from (0, 0) to (2, 0), and the arms still have slopes plus and minus 1."
            },
            {
              "eq": "y = 2|x − 2|",
              "why": "Outside the bracket everything is literal: multiplying by 2 stretches vertically, so the arms steepen to slopes plus and minus 2. The vertex sits on the x-axis and does not move."
            },
            {
              "eq": "y = −2|x − 2|",
              "why": "Multiplying by minus 1 reflects in the x-axis. The V turns upside down, and the vertex is still at (2, 0)."
            },
            {
              "eq": "y = 3 − 2|x − 2|",
              "why": "Adding 3 shifts up by 3. The vertex is (2, 3) and it is now a maximum, so the range is (−∞, 3]. The x-intercepts solve 2|x − 2| = 3, giving x = 1/2 and x = 7/2. Spot check: y(0) = y(4) = −1, symmetric about x = 2 as a V must be."
            }
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "<i>A</i> = {1, 2, 3, 4}, <i>B</i> = {2, 3, 5, 7}. Is <i>R</i> = {(1, 2), (2, 3), (3, 2), (4, 5)} a function from <i>A</i> to <i>B</i>? If so, give its domain and range.",
          "steps": [
            "Promise 1, totality: the first coordinates are 1, 2, 3, 4, so every element of <i>A</i> is present. ✓",
            "Promise 2, single-valued: no first coordinate repeats, so no input has two images. ✓ The output 2 is shared by inputs 1 and 3, which is many-to-one and perfectly allowed.",
            "Domain = <i>A</i> = {1, 2, 3, 4}. Range = {2, 3, 5}: the distinct images. Note 7 ∈ <i>B</i> is never hit, so it is in the codomain but not the range."
          ],
          "ans": "Yes, a function · domain {1, 2, 3, 4}, range {2, 3, 5}, codomain B"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN · SPEED TRAP",
          "q": "<i>A</i> has 3 elements and <i>B</i> has 4. How many functions can be defined from <i>A</i> to <i>B</i>?",
          "steps": [
            "Three reflex wrong answers compete: 2<sup>3×4</sup> = 4096 (that counts <b>relations</b>), 3<sup>4</sup> = 81 (base and exponent swapped), and 3 × 4 = 12 (just the pair count).",
            "The base is the number of <b>choices per input</b>, which is <i>q</i>; the exponent is the number of <b>inputs</b>, which is <i>p</i>.",
            "Functions = <i>q</i><sup>p</sup> = 4<sup>3</sup> = 64."
          ],
          "ans": "64 · chant it: each input picks an output, so outputs to the power of inputs"
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "<i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> on 0 ≤ <i>x</i> ≤ 3 and 3<i>x</i> on 3 ≤ <i>x</i> ≤ 10. <i>g</i>(<i>x</i>) = <i>x</i><sup>2</sup> on 0 ≤ <i>x</i> ≤ 2 and 3<i>x</i> on 2 ≤ <i>x</i> ≤ 10. Show <i>f</i> is a function and <i>g</i> is not.",
          "steps": [
            "Both definitions have clauses that overlap at one point, so run the vertical line test exactly there.",
            "<i>f</i> overlaps at <i>x</i> = 3: clause one gives 3<sup>2</sup> = 9, clause two gives 3 · 3 = 9. They agree, so <i>m</i>(3) = 1, and every other point is covered by a single single-valued clause.",
            "<i>g</i> overlaps at <i>x</i> = 2: clause one gives 4, clause two gives 6. Both (2, 4) and (2, 6) belong to <i>g</i>, so <i>m</i>(2) = 2."
          ],
          "ans": "f is a function on [0, 10]; g is not. One point, two numbers, done"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "Let <i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> − 4<i>x</i> + 3. Using the graph of <i>y</i> = |<i>f</i>(<i>x</i>)|, find the number of real solutions of |<i>x</i><sup>2</sup> − 4<i>x</i> + 3| = <i>k</i> for every real <i>k</i>.",
          "steps": [
            "<i>f</i>(<i>x</i>) = (<i>x</i> − 2)<sup>2</sup> − 1: roots 1 and 3, vertex (2, −1). Folding the arc between the roots upward makes a hump of height 1 peaking at (2, 1), with corners at (1, 0) and (3, 0).",
            "Now slide the line <i>y</i> = <i>k</i> across it and count crossings.",
            "Confirm algebraically: |<i>f</i>(<i>x</i>)| = <i>k</i> means (<i>x</i> − 2)<sup>2</sup> = 1 + <i>k</i> or (<i>x</i> − 2)<sup>2</sup> = 1 − <i>k</i>. For <i>k</i> ≥ 0 the first always gives 2 roots; the second gives 2 if <i>k</i> < 1, one if <i>k</i> = 1, none if <i>k</i> > 1. At <i>k</i> = 0 the two families coincide."
          ],
          "ans": "k < 0: none · k = 0: 2 · 0 < k < 1: 4 · k = 1: 3 · k > 1: 2"
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Is <i>R</i> = {(1, 1), (2, 1), (3, 1)} a function from {1, 2, 3} to {1, 2}? Domain and range?",
              "a": "Yes, each input has exactly one image, a constant assignment. Domain {1, 2, 3}, range {1}."
            },
            {
              "q": "[CBSE] For <i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> on domain {−2, −1, 0, 1, 2}, write <i>f</i> in roster form and find its range.",
              "a": "{(−2, 4), (−1, 1), (0, 0), (1, 1), (2, 4)}; range {0, 1, 4}. Many-to-one is fine."
            },
            {
              "q": "[JEE Main] How many functions can be defined from a set of 4 elements to a set of 3?",
              "a": "<i>q</i><sup>p</sup> = 3<sup>4</sup> = 81, not 4<sup>3</sup>."
            },
            {
              "q": "[JEE Main] Which of these define <i>y</i> as a function of <i>x</i>: (a) <i>x</i> = <i>y</i><sup>3</sup>, (b) 2<i>x</i> + 3|<i>y</i>| = 6, (c) <i>x</i><sup>2</sup> = 4<i>y</i>?",
              "a": "(a) yes, an odd power never gives a second real root; (b) no, at <i>x</i> = 0 we get <i>y</i> = ±2; (c) yes, <i>y</i> = <i>x</i><sup>2</sup>/4, range [0, ∞). Anything done to <i>x</i> alone is harmless."
            },
            {
              "q": "[JEE Advanced] Give the vertex, <i>x</i>-intercepts and range of <i>y</i> = 2 − |<i>x</i> + 3|.",
              "a": "Vertex (−3, 2); intercepts −5 and −1; range (−∞, 2]. An inverted V, so the vertex is the maximum."
            }
          ]
        },
        {
          "t": "mcq",
          "q": "Which relation is a function from <i>A</i> = {1, 2, 3} to <i>B</i> = {<i>a</i>, <i>b</i>}?",
          "correct": 0,
          "opts": [
            { "label": "{(1, a), (2, b), (3, a)}", "nudge": null },
            {
              "label": "{(1, a), (1, b), (2, a), (3, b)}",
              "nudge": "Input 1 maps to both a and b. One-to-many is exactly what a function forbids."
            },
            {
              "label": "{(1, a), (2, b)}",
              "nudge": "Input 3 has no image at all, so totality fails. Every element of A must be used."
            },
            {
              "label": "{(1, a), (2, b), (3, a), (3, b)}",
              "nudge": "Input 3 maps to two places. The trap is checking outputs; the requirement is on <b>inputs</b>."
            }
          ],
          "solution": "Every element of A has exactly one image. Inputs 1 and 3 share the image a, which is many-to-one and perfectly allowed."
        },
        {
          "t": "mcq",
          "q": "The number of functions from a set with 2 elements to a set with 5 elements is:",
          "correct": 2,
          "opts": [
            {
              "label": "7",
              "nudge": "2 + 5 is an addition slip. Each input chooses independently, so the counts multiply."
            },
            {
              "label": "10",
              "nudge": "2 × 5 is the number of ordered pairs, n(A × B), not the number of functions."
            },
            { "label": "25", "nudge": null },
            {
              "label": "32",
              "nudge": "2<sup>5</sup> has base and exponent swapped: that would count functions the other way round, from the 5-element set."
            }
          ],
          "solution": "Functions = q^p = 5² = 25: two inputs, each with five choices of output."
        },
        {
          "t": "mcq",
          "q": "The range of <i>f</i>(<i>x</i>) = |<i>x</i>|, <i>x</i> ∈ ℝ, is:",
          "correct": 2,
          "opts": [
            {
              "label": "ℝ",
              "nudge": "This forgets that |x| never returns a negative value. Project the V onto the y-axis."
            },
            {
              "label": "(0, ∞)",
              "nudge": "This wrongly excludes 0, but |0| = 0 is attained, so the bracket must be closed."
            },
            { "label": "[0, ∞)", "nudge": null },
            {
              "label": "{−1, 0, 1}",
              "nudge": "That is the range of the <b>signum</b> function. Examiners swap modulus and signum constantly."
            }
          ],
          "solution": "|x| ≥ 0 for every real x, and every non-negative value is attained: |0| = 0, |3| = 3."
        },
        {
          "t": "mcq",
          "q": "For the greatest-integer function <i>f</i>(<i>x</i>) = [<i>x</i>], which statement is correct?",
          "correct": 2,
          "opts": [
            {
              "label": "[2.3] = 3",
              "nudge": "The function rounds <b>down</b>, towards minus infinity: [2.3] = 2."
            },
            {
              "label": "[−2.3] = −2",
              "nudge": "−2 is bigger than −2.3, so it is too big to qualify. This is the classic “drop the decimal” trap on negatives."
            },
            { "label": "[−2.3] = −3", "nudge": null },
            {
              "label": "the range of [x] is ℝ",
              "nudge": "The outputs are integers only, so the range is ℤ. The staircase has no values between its steps."
            }
          ],
          "solution": "[x] is the greatest integer not exceeding x. The integers ≤ −2.3 are …, −4, −3, and the greatest of them is −3."
        },
        {
          "t": "mistakes",
          "items": [
            "Checking the wrong side. The rule constrains <b>inputs</b>, one image each, not outputs. Do not reject a function because some codomain element is unused, or because two inputs share an image.",
            "<i>q</i><sup>p</sup> versus 2<sup>pq</sup>, and the base-exponent swap. Relations are 2<sup>pq</sup>; functions are <i>q</i><sup>p</sup>, <b>outputs as base, inputs as exponent</b>.",
            "Reading <i>m</i>(<i>a</i>) = 0 as a failure. A gap only means <i>a</i> is outside the domain. Only <b><i>m</i>(<i>a</i>) ≥ 2</b> is fatal.",
            "Confusing |<i>f</i>(<i>x</i>)| with <i>f</i>(|<i>x</i>|). The first folds about the <i>x</i>-axis, the second about the <i>y</i>-axis, and they are almost never the same picture. A third form, |<i>y</i>| = <i>f</i>(<i>x</i>), is <b>not a function at all</b>.",
            "Reading <i>f</i>(<i>cx</i> + <i>d</i>) as a shift of <i>d</i>. Factor first: the shift is <i>d</i>/<i>c</i>, and the squash happens before it."
          ]
        },
        {
          "t": "protip",
          "html": "two graph habits worth more than any formula here. first, sketch from the zoo, never from a table of values: identity, constant, modulus, signum and the staircase are five pictures that generate hundreds by shifting, stretching and folding. second, treat “how many solutions” questions as a <b>horizontal line sliding over a folded graph</b>, draw the fold once and read off every case at a glance instead of solving a family of quadratics."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "f : A → B ⟺ every a ∈ A has exactly one image",
              "note": "every function is a relation, not conversely"
            },
            {
              "f": "Domain = A · Codomain = B · Range ⊆ B",
              "note": "many-to-one allowed, one-to-many banned"
            },
            {
              "f": "functions from A to B = q<sup>p</sup>",
              "note": "outputs to the power of inputs; relations were 2 to the pq"
            },
            {
              "f": "m(a) ≥ 2 kills it · m(a) = 0 is only a gap",
              "note": "the vertical line test, stated in full"
            },
            {
              "f": "|x| → [0, ∞) · sgn → {−1, 0, 1} · [x] → ℤ",
              "note": "the ranges examiners swap"
            },
            {
              "f": "|f(x)| folds about x · f(|x|) folds about y",
              "note": "inside the bracket: opposite, and first"
            }
          ],
          "aids": [
            "“one button, one snack”",
            "“outputs to the power of inputs, never the other way”"
          ]
        }
      ]
    },
    {
      "n": "05",
      "title": "Domain, Range and the Algebra of Real Functions",
      "chip": "05 DOMAIN & RANGE",
      "kalam": "domain asks which x, range asks which y",
      "blocks": [
        {
          "t": "p",
          "html": "When a rule arrives without a stated domain, the convention is fixed: the domain is <b>every real <i>x</i> for which the rule makes sense</b>. That is the <b>natural domain</b>. For <i>f</i>(<i>x</i>) = 1/<i>x</i> it is ℝ ∖ {0}, because the one thing arithmetic refuses to do is divide by zero."
        },
        {
          "t": "p",
          "html": "There are only two danger sources at this level, and they behave in opposite ways. A <b>denominator</b> forbids the value 0, which punches out isolated points. An <b>even root</b> demands a non-negative radicand, which cuts the line into intervals. When both apply, they must hold <b>simultaneously</b>, so the domain is their intersection: a value surviving one hurdle but failing another is still excluded."
        },
        {
          "t": "proc",
          "title": "Finding the natural domain",
          "steps": [
            "<b>Denominators.</b> Exclude every root of the denominator. The condition is ≠ 0, and it removes points, not ranges.",
            "<b>Even roots.</b> Square roots, fourth roots and the rest need a non-negative radicand: solve (inside) ≥ 0. Equality is allowed, because √0 = 0 is perfectly defined, so the bracket <b>closes</b>.",
            "<b>A root inside a denominator.</b> Both conditions bite at once, so the inside must be strictly greater than 0. Root closes, denominator opens.",
            "<b>Intersect.</b> If several conditions apply, take the intersection. The rule must be valid at every step at once."
          ]
        },
        {
          "t": "diagram",
          "kind": "numberline",
          "kicker": "FIGURE · ASSEMBLING A DOMAIN, TAP A CONDITION",
          "chips": ["√(x − 2)", "1/(x − 5)", "both at once"],
          "mathChips": true,
          "captions": [
            "The square root needs x − 2 ≥ 0, so x ≥ 2. Equality is allowed here, which is why the left end is a filled dot: √0 = 0 is a perfectly good number. The condition cuts the line, it does not puncture it.",
            "The denominator needs x − 5 ≠ 0, so the single point 5 is punched out and everything else survives. A denominator punctures, it does not cut.",
            "Both must hold at once, so intersect the two pictures: [2, 5) ∪ (5, ∞). The filled dot at 2 and the hollow dot at 5 are the whole difference between a mark and no mark."
          ],
          "frames": [
            {
              "x": [0, 8],
              "intervals": [{ "from": 2, "to": 8, "openRight": true, "label": "x ≥ 2" }]
            },
            {
              "x": [0, 8],
              "intervals": [
                { "from": 0, "to": 5, "openLeft": true, "openRight": true },
                { "from": 5, "to": 8, "openLeft": true, "openRight": true, "label": "x ≠ 5" }
              ]
            },
            {
              "x": [0, 8],
              "intervals": [
                { "from": 2, "to": 5, "openRight": true, "label": "[2, 5)" },
                { "from": 5, "to": 8, "openLeft": true, "openRight": true, "label": "(5, ∞)" }
              ]
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "ALGEBRA OF REAL FUNCTIONS",
          "tag": "combine the rules, intersect the domains",
          "main": "Dom(f ± g) = Dom(fg) = Dom(f) ∩ Dom(g)",
          "legend": [
            "(<i>f</i> ± <i>g</i>)(<i>x</i>) = <i>f</i>(<i>x</i>) ± <i>g</i>(<i>x</i>) · (<i>fg</i>)(<i>x</i>) = <i>f</i>(<i>x</i>) <i>g</i>(<i>x</i>) · (α<i>f</i>)(<i>x</i>) = α <i>f</i>(<i>x</i>)",
            "Dom(<i>f</i>/<i>g</i>) = (Dom(<i>f</i>) ∩ Dom(<i>g</i>)) ∖ {<i>x</i> : <i>g</i>(<i>x</i>) = 0}, the extra removal students forget"
          ],
          "note": "Endpoints that survive in f + g often vanish in f/g: the quotient must shed every zero of the denominator function."
        },
        {
          "t": "p",
          "html": "There is a fifth way to combine two functions that is not arithmetic at all: feed the output of one into the input of the other. <b>(<i>g</i> ∘ <i>f</i>)(<i>x</i>) = <i>g</i>(<i>f</i>(<i>x</i>))</b>, read “<i>g</i> of <i>f</i> of <i>x</i>”, or “<i>g</i> after <i>f</i>”. The <b>inner function acts first</b>, even though it is written second, and that reversal is the source of half the errors on the topic."
        },
        {
          "t": "formula",
          "kicker": "DOMAIN OF A COMPOSITE",
          "tag": "the only formula you need",
          "main": "Dom(g ∘ f) = {x ∈ Dom(f) : f(x) ∈ Dom(g)}",
          "legend": [
            "<i>x</i> must be legal for <i>f</i>, because <i>f</i> runs first; and the number <i>f</i>(<i>x</i>) must be legal for <i>g</i>, because <i>g</i> runs on it",
            "not commutative · associative, so <i>f</i> ∘ <i>g</i> ∘ <i>h</i> is unambiguous · <i>f</i> ∘ <i>I</i> = <i>I</i> ∘ <i>f</i> = <i>f</i>"
          ],
          "note": "Find the domain before simplifying. (√x)² simplifies to x, but x had to survive the root first; and √(x²) is |x|, not x."
        },
        {
          "t": "think",
          "html": "domain asks which inputs are legal. range asks which outputs actually come out. same function, opposite ends, and completely different machinery: one hunts for illegal operations, the other asks whether an equation has a solution."
        },
        {
          "t": "p",
          "html": "That second question has one exact answer, and everything below is this sentence with different algebra attached: <b>a value <i>y</i> lies in the range of <i>f</i> if and only if the equation <i>y</i> = <i>f</i>(<i>x</i>) has at least one solution <i>x</i> inside the domain of <i>f</i></b>. Which is why every range method secretly begins by finding the domain: a <i>y</i> produced only by an <i>x</i> the domain excludes is not in the range."
        },
        {
          "t": "defgrid",
          "title": "Choosing a range method",
          "rows": [
            {
              "k": "(ax + b)/(cx + d)",
              "v": "<b>Inversion.</b> Solve for <i>x</i> in terms of <i>y</i>; exclude the <i>y</i> making the solution fail"
            },
            {
              "k": "quadratic over quadratic",
              "v": "<b>Discriminant.</b> Cross-multiply to a quadratic in <i>x</i>, then impose <i>D</i> ≥ 0"
            },
            {
              "k": "a quadratic anywhere",
              "v": "<b>Complete the square.</b> <i>a</i>(<i>x</i> − <i>h</i>)<sup>2</sup> + <i>k</i>: range [<i>k</i>, ∞) if <i>a</i> > 0, (−∞, <i>k</i>] if <i>a</i> < 0"
            },
            {
              "k": "bounded ingredient",
              "v": "sin, cos, |<i>x</i>|, <i>x</i><sup>2</sup>: <b>bound it first</b>, then propagate through the outer operations one at a time"
            },
            {
              "k": "t + 1/t",
              "v": "<b>AM-GM.</b> ≥ 2 on (0, ∞) with equality at <i>t</i> = 1, ≤ −2 on (−∞, 0)"
            },
            {
              "k": "The two traps",
              "v": "the <b>degenerate <i>y</i></b> killing the <i>x</i><sup>2</sup> coefficient, and the <b>endpoint</b> an inequality never proves is reached"
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE RANGE OF x/(1 + x²), TAP FOR THE WHY",
          "steps": [
            {
              "eq": "1 + x<sup>2</sup> ≥ 1 > 0 for every real x",
              "why": "Domain first, always. The denominator never vanishes, so the domain is the whole of ℝ and no solution can turn out illegal later on."
            },
            {
              "eq": "y(1 + x<sup>2</sup>) = x ⟹ y x<sup>2</sup> − x + y = 0",
              "why": "Clear the fraction and collect powers of x. The value y lies in the range exactly when this equation has a real solution x, which is the defining sentence made literal."
            },
            {
              "eq": "degenerate y = 0: −x = 0 ⟹ x = 0 ✓",
              "why": "When the coefficient of x squared vanishes the equation is no longer quadratic and the discriminant test does not apply at all. Substitute by hand: f(0) = 0, so y = 0 is in the range. This single value is where students lose the mark, and it can land on either side."
            },
            {
              "eq": "D = 1 − 4y<sup>2</sup> ≥ 0 ⟹ −1/2 ≤ y ≤ 1/2",
              "why": "For y ≠ 0 it is a genuine quadratic, and a quadratic with real coefficients has a real root exactly when its discriminant is non-negative."
            },
            {
              "eq": "y = 1/2 ⟹ x<sup>2</sup> − 2x + 1 = 0 ⟹ x = 1 ✓",
              "why": "The endpoint check. An inequality bounds the range but never proves the bound is attained; producing the x is what closes the bracket. At y = −1/2 the same computation gives x = −1, so both ends belong and the range is the closed interval from −1/2 to 1/2."
            }
          ]
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "Find the natural domain of <i>f</i>(<i>x</i>) = √(<i>x</i> − 2) / (<i>x</i> − 5).",
          "steps": [
            "Two danger sources, and both must hold at once.",
            "Square root: <i>x</i> − 2 ≥ 0 ⇒ <i>x</i> ∈ [2, ∞). The point <i>x</i> = 2 stays in, the root is 0 there and that is fine.",
            "Denominator: <i>x</i> − 5 ≠ 0 ⇒ <i>x</i> ≠ 5, so 5 is punched out.",
            "Intersect: [2, ∞) ∖ {5}."
          ],
          "ans": "Domain = [2, 5) ∪ (5, ∞)"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "<i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> and <i>g</i>(<i>x</i>) = √(4 − <i>x</i><sup>2</sup>). Find (<i>f</i> + <i>g</i>)(<i>x</i>), (<i>fg</i>)(<i>x</i>) and (<i>f</i>/<i>g</i>)(<i>x</i>), each with its exact domain.",
          "steps": [
            "Individual domains first: Dom(<i>f</i>) = ℝ; Dom(<i>g</i>) needs 4 − <i>x</i><sup>2</sup> ≥ 0 ⇒ <i>x</i> ∈ [−2, 2].",
            "Sum and product take the intersection: ℝ ∩ [−2, 2] = [−2, 2] for both.",
            "Quotient starts from [−2, 2], then removes the zeros of <i>g</i>. Now √(4 − <i>x</i><sup>2</sup>) = 0 at <i>x</i> = ±2, so <b>both endpoints are punched out</b>."
          ],
          "ans": "f + g and fg on [−2, 2] · f/g on (−2, 2). Forgetting to exclude ±2 is the classic error"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN · SPEED TRAP",
          "q": "<i>f</i>(<i>x</i>) = √<i>x</i> and <i>g</i>(<i>x</i>) = <i>x</i><sup>2</sup>. Find <i>g</i> ∘ <i>f</i> and <i>f</i> ∘ <i>g</i> with exact domains. Are the two composites equal?",
          "steps": [
            "The reflex answer, “both simplify to <i>x</i>, so they are equal”, is wrong twice over.",
            "<i>g</i> ∘ <i>f</i>: need <i>x</i> ∈ [0, ∞), and √<i>x</i> ∈ Dom(<i>g</i>) = ℝ costs nothing. Formula (√<i>x</i>)<sup>2</sup> = <i>x</i>, but the domain is [0, ∞), not ℝ.",
            "<i>f</i> ∘ <i>g</i>: need <i>x</i> ∈ ℝ, and <i>x</i><sup>2</sup> ∈ [0, ∞) automatically. Formula √(<i>x</i><sup>2</sup>) = <b>|<i>x</i>|</b>, not <i>x</i>: the root returns the non-negative value.",
            "Equality of functions needs the same domain <b>and</b> the same values. Here both fail: at <i>x</i> = −4 the second gives 4 while the first is not even defined."
          ],
          "ans": "(g ∘ f)(x) = x on [0, ∞) · (f ∘ g)(x) = |x| on ℝ · not equal"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "Find the range of <i>f</i>(<i>x</i>) = (<i>x</i><sup>2</sup> + <i>x</i> + 1)/(<i>x</i><sup>2</sup> + <i>x</i> − 1).",
          "steps": [
            "Cross-multiply: (<i>y</i> − 1)<i>x</i><sup>2</sup> + (<i>y</i> − 1)<i>x</i> − (<i>y</i> + 1) = 0.",
            "Degenerate value <i>y</i> = 1 leaves −2 = 0, impossible, so <b><i>y</i> = 1 is excluded</b>. Directly: <i>f</i> = 1 would need 1 = −1.",
            "For <i>y</i> ≠ 1, <i>D</i> = (<i>y</i> − 1)<sup>2</sup> + 4(<i>y</i> − 1)(<i>y</i> + 1) = (<i>y</i> − 1)(5<i>y</i> + 3) ≥ 0 ⇒ <i>y</i> ≤ −3/5 or <i>y</i> > 1.",
            "Domain check: if <i>x</i><sup>2</sup> + <i>x</i> − 1 = 0 then the numerator is 0 + 2 = 2 ≠ 0, so numerator and denominator share no root and nothing more is removed. Endpoint: <i>y</i> = −3/5 gives 2(2<i>x</i> + 1)<sup>2</sup> = 0 ⇒ <i>x</i> = −1/2 ✓, so that bracket closes."
          ],
          "ans": "Range = (−∞, −3/5] ∪ (1, ∞) · one bracket closed, one open, and the degenerate y decided it"
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Find the natural domain of <i>f</i>(<i>x</i>) = 1/√(9 − <i>x</i><sup>2</sup>).",
              "a": "(−3, 3). The radicand sits under a root <b>and</b> in a denominator, so it must be strictly positive."
            },
            {
              "q": "[JEE Main] <i>f</i>(<i>x</i>) = <i>x</i> + 1 and <i>g</i>(<i>x</i>) = 2<i>x</i> − 3 on ℝ. Find (<i>f</i>/<i>g</i>)(<i>x</i>) and its domain.",
              "a": "(<i>x</i> + 1)/(2<i>x</i> − 3), domain ℝ ∖ {3/2}."
            },
            {
              "q": "[JEE Main] <i>f</i>(<i>x</i>) = √(<i>x</i> − 1) and <i>g</i>(<i>x</i>) = 1/(<i>x</i> − 3). Find Dom(<i>g</i> ∘ <i>f</i>) and Dom(<i>f</i> ∘ <i>g</i>).",
              "a": "Dom(<i>g</i> ∘ <i>f</i>) = [1, ∞) ∖ {10}, since √(<i>x</i> − 1) ≠ 3. Dom(<i>f</i> ∘ <i>g</i>) = (3, 4], since <i>x</i> ≠ 3 and 1/(<i>x</i> − 3) ≥ 1."
            },
            {
              "q": "[JEE Main] Find the range of <i>g</i>(<i>x</i>) = 1/(2 − sin 3<i>x</i>), <i>x</i> ∈ ℝ.",
              "a": "[1/3, 1]. Bound the ingredient: sin 3<i>x</i> ∈ [−1, 1] ⇒ 2 − sin 3<i>x</i> ∈ [1, 3] ⇒ the reciprocal sweeps [1/3, 1]."
            },
            {
              "q": "[JEE Advanced] <i>f</i>(<i>x</i>) = 1/(1 − <i>x</i>). Find <i>f</i> ∘ <i>f</i> ∘ <i>f</i> and its domain, then <i>f</i><sup>2026</sup>(2).",
              "a": "<i>f</i><sup>3</sup>(<i>x</i>) = <i>x</i> on ℝ ∖ {0, 1}: iterating cycles with period 3. Since 2026 = 3(675) + 1, <i>f</i><sup>2026</sup>(2) = <i>f</i>(2) = −1."
            }
          ]
        },
        {
          "t": "mcq",
          "q": "The natural domain of <i>f</i>(<i>x</i>) = √(<i>x</i> − 4) is:",
          "correct": 2,
          "opts": [
            {
              "label": "ℝ",
              "nudge": "This ignores the radical constraint entirely: √(−1) is not a real number."
            },
            {
              "label": "(4, ∞)",
              "nudge": "This wrongly excludes x = 4. A square root allows its radicand to be 0, since √0 = 0 is defined."
            },
            { "label": "[4, ∞)", "nudge": null },
            {
              "label": "(−∞, 4]",
              "nudge": "The inequality was solved the wrong way round: x − 4 ≥ 0 gives x ≥ 4, not x ≤ 4."
            }
          ],
          "solution": "Need x − 4 ≥ 0, so x ≥ 4, and equality is allowed: the bracket closes."
        },
        {
          "t": "mcq",
          "q": "With <i>f</i>(<i>x</i>) = √<i>x</i> and <i>g</i>(<i>x</i>) = <i>x</i><sup>2</sup>, the composite (<i>f</i> ∘ <i>g</i>)(<i>x</i>) is:",
          "correct": 1,
          "opts": [
            {
              "label": "x, on ℝ",
              "nudge": "√(x²) = x only for x ≥ 0. At x = −4 the composite returns 4, not −4."
            },
            { "label": "|x|, on ℝ", "nudge": null },
            {
              "label": "x, on [0, ∞)",
              "nudge": "That is g ∘ f, the other order. Here g runs first and squares away the sign, so no input is illegal."
            },
            {
              "label": "−x, on (−∞, 0]",
              "nudge": "Right on the negative half only. The composite is defined for every real x, and |x| covers both halves at once."
            }
          ],
          "solution": "g runs first and x² ≥ 0 is always legal for the root, so the domain is ℝ; and √(x²) = |x|, because the root returns the non-negative value."
        },
        {
          "t": "mcq",
          "q": "For <i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> and <i>g</i>(<i>x</i>) = √(4 − <i>x</i><sup>2</sup>), the domain of <i>f</i>/<i>g</i> is:",
          "correct": 1,
          "opts": [
            {
              "label": "[−2, 2]",
              "nudge": "That is the domain of f + g and of fg. The quotient must also shed the points where g vanishes."
            },
            { "label": "(−2, 2)", "nudge": null },
            {
              "label": "ℝ",
              "nudge": "This ignores g entirely. Both functions must be defined before they can be divided."
            },
            {
              "label": "[0, 2]",
              "nudge": "The radicand needs 4 − x² ≥ 0, which allows negative x too: x² ≤ 4 means −2 ≤ x ≤ 2."
            }
          ],
          "solution": "Intersect the domains to get [−2, 2], then remove the zeros of g, which sit at x = ±2. Both endpoints go."
        },
        {
          "t": "mcq",
          "q": "The range of <i>g</i>(<i>x</i>) = 1/(<i>x</i><sup>2</sup> − 4<i>x</i> + 7) is:",
          "correct": 1,
          "opts": [
            {
              "label": "[3, ∞)",
              "nudge": "That is the range of the denominator, not of g. You still have to push the bound through the reciprocal."
            },
            { "label": "(0, 1/3]", "nudge": null },
            {
              "label": "[1/3, ∞)",
              "nudge": "The reciprocal reverses the inequality: as the denominator grows without bound, g shrinks towards 0."
            },
            {
              "label": "ℝ",
              "nudge": "The denominator is never 0 and never negative, so g is strictly positive everywhere."
            }
          ],
          "solution": "x² − 4x + 7 = (x − 2)² + 3 sweeps [3, ∞), so its reciprocal sweeps (0, 1/3], hitting 1/3 at x = 2 and approaching 0 without reaching it."
        },
        {
          "t": "mistakes",
          "items": [
            "Strict versus non-strict. Square roots allow the radicand <b>= 0</b> (closed bracket); denominators forbid it (open). A radical <b>inside</b> a denominator needs the inside strictly positive.",
            "Forgetting to exclude the zeros of <i>g</i> in <i>f</i>/<i>g</i>. Endpoints that survive in <i>f</i> + <i>g</i> often vanish in the quotient.",
            "Reading a composite’s domain off the <b>simplified</b> formula. (√<i>x</i>)<sup>2</sup> = <i>x</i>, but <i>x</i> had to survive the root first: the domain is [0, ∞), not ℝ.",
            "Skipping the degenerate <i>y</i> in the discriminant method. The value that kills the <i>x</i><sup>2</sup> coefficient is <b>not</b> covered by <i>D</i> ≥ 0, and it can belong to the range or not.",
            "Stopping at an inequality. <i>y</i> ≤ 1/2 says the range sits inside (−∞, 1/2]; it does not say 1/2 is reached. <b>Solve for the <i>x</i></b> and produce it."
          ]
        },
        {
          "t": "protip",
          "html": "for domains, scan the formula for exactly two flags: “is anything under an even root?” (set it ≥ 0, or > 0 if it is also in a denominator) and “is anything in a denominator?” (set it ≠ 0), then intersect. for ranges, always run step 0 and step 6, find the domain first and check the endpoints last, that is where nearly all the lost marks live."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "denominator ≠ 0 · even radicand ≥ 0 · intersect",
              "note": "root under a denominator: strictly > 0"
            },
            {
              "f": "Dom(f ± g) = Dom(fg) = Dom(f) ∩ Dom(g)",
              "note": "Dom(f/g) removes the zeros of g as well"
            },
            {
              "f": "Dom(g ∘ f) = {x ∈ Dom(f) : f(x) ∈ Dom(g)}",
              "note": "inner function first; find the domain before simplifying"
            },
            {
              "f": "y ∈ Range(f) ⟺ y = f(x) is solvable in the domain",
              "note": "every method is this one sentence"
            },
            {
              "f": "inversion · discriminant · complete the square · bound it",
              "note": "pick by the shape of the formula"
            },
            {
              "f": "√(x²) = |x| · (√x)² = x only on [0, ∞)",
              "note": "root closes, denominator opens"
            }
          ],
          "aids": [
            "“domain first, endpoints last”",
            "“root closes, denominator opens”"
          ]
        }
      ]
    },
    {
      "n": "06",
      "title": "Symmetry, Periodicity and Functional Equations",
      "chip": "06 SYMMETRY",
      "kalam": "symmetric domain first, or the answer is neither",
      "blocks": [
        {
          "t": "p",
          "html": "A great many of the functions on the JEE syllabus are built symmetrically about the origin, and spotting that symmetry lets you throw away <b>half</b> of every domain, range and sketching problem. The classification costs three lines and repays them many times over."
        },
        {
          "t": "p",
          "html": "Before you compute anything, check the <b>precondition</b>: the domain must be symmetric about 0, that is, <i>x</i> ∈ <i>D</i> must force −<i>x</i> ∈ <i>D</i>. If it does not, the function is <b>neither even nor odd</b> whatever the formula looks like. <i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> on [1, 3] is neither, because <i>f</i>(−1) does not exist and neither definition can even be tested."
        },
        {
          "t": "def",
          "term": "Even and odd functions",
          "html": "For <i>f</i> with a domain <i>D</i> symmetric about 0: <i>f</i> is <b>even</b> when <i>f</i>(−<i>x</i>) = <i>f</i>(<i>x</i>) for all <i>x</i> ∈ <i>D</i>, and <b>odd</b> when <i>f</i>(−<i>x</i>) = −<i>f</i>(<i>x</i>). Most functions are <b>neither</b>, and “neither” is a legitimate and common answer."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · SYMMETRY AND REPETITION, TAP A CURVE",
          "chips": ["even", "odd", "fractional part", "greatest integer"],
          "captions": [
            "f(x) = x⁴ − 3x² + 1 is even: only even powers appear, so f(−x) = f(x) and the graph is unchanged by reflection in the y-axis. The two marked points sit at the same height, which is why the range on the negative half adds nothing new.",
            "f(x) = x³ − 2x is odd: f(−x) = −f(x), so the graph is unchanged by a half-turn about the origin. The two marked points are opposite in sign, which is exactly why an odd function’s range is symmetric about 0.",
            "The fractional part {x} = x − [x]: a sawtooth that repeats exactly. The shaded strip is one full period and the fundamental period is 1. This, not the sine, is the purest periodic function on the Class 11 syllabus.",
            "The greatest integer [x] is built from the same ingredient and is not periodic at all. It repeats its shape and drifts upward forever, never its values, and periodicity is about values. The two differ by x, and that single term is the whole difference."
          ],
          "frames": [
            {
              "x": [-2.1, 2.1],
              "y": [-3, 4],
              "curves": [{ "c": "poly", "coeffs": [1, 0, -3, 0, 1] }],
              "points": [
                { "x": 1.5, "y": -0.69 },
                { "x": -1.5, "y": -0.69 }
              ]
            },
            {
              "x": [-2.4, 2.4],
              "y": [-3, 3],
              "curves": [{ "c": "poly", "coeffs": [0, -2, 0, 1] }],
              "points": [
                { "x": 1.2, "y": -0.67 },
                { "x": -1.2, "y": 0.67 }
              ]
            },
            {
              "x": [-3, 3],
              "y": [-0.6, 1.7],
              "bands": [{ "x0": 0, "x1": 1 }],
              "segments": [
                { "from": [-3, 0], "to": [-2, 1] },
                { "from": [-2, 0], "to": [-1, 1] },
                { "from": [-1, 0], "to": [0, 1] },
                { "from": [0, 0], "to": [1, 1] },
                { "from": [1, 0], "to": [2, 1] },
                { "from": [2, 0], "to": [3, 1] }
              ],
              "points": [
                { "x": -2, "y": 1, "open": true },
                { "x": -1, "y": 1, "open": true },
                { "x": 0, "y": 1, "open": true },
                { "x": 1, "y": 1, "open": true },
                { "x": 2, "y": 1, "open": true },
                { "x": 3, "y": 1, "open": true },
                { "x": -3, "y": 0 },
                { "x": -2, "y": 0 },
                { "x": -1, "y": 0 },
                { "x": 0, "y": 0 },
                { "x": 1, "y": 0 },
                { "x": 2, "y": 0 }
              ]
            },
            {
              "x": [-3, 3],
              "y": [-3.4, 3.4],
              "bands": [{ "x0": 0, "x1": 1 }],
              "segments": [
                { "from": [-3, -3], "to": [-2, -3] },
                { "from": [-2, -2], "to": [-1, -2] },
                { "from": [-1, -1], "to": [0, -1] },
                { "from": [0, 0], "to": [1, 0] },
                { "from": [1, 1], "to": [2, 1] },
                { "from": [2, 2], "to": [3, 2] }
              ],
              "points": [
                { "x": -2, "y": -3, "open": true },
                { "x": -1, "y": -2, "open": true },
                { "x": 0, "y": -1, "open": true },
                { "x": 1, "y": 0, "open": true },
                { "x": 2, "y": 1, "open": true },
                { "x": 3, "y": 2, "open": true },
                { "x": -3, "y": -3 },
                { "x": -2, "y": -2 },
                { "x": -1, "y": -1 },
                { "x": 0, "y": 0 },
                { "x": 1, "y": 1 },
                { "x": 2, "y": 2 }
              ]
            }
          ]
        },
        {
          "t": "defgrid",
          "title": "The algebra of parity",
          "rows": [
            { "k": "even ± even · even × even", "v": "even · even" },
            {
              "k": "odd ± odd · odd × odd",
              "v": "odd · <b>even</b>, the two sign flips cancel, exactly as (−<i>x</i>)(−<i>x</i>) = <i>x</i><sup>2</sup>"
            },
            { "k": "even ± odd", "v": "neither, in general. This is the archetypal “neither”" },
            { "k": "even × odd · odd / odd", "v": "odd · even" },
            {
              "k": "Composite f ∘ g",
              "v": "the <b>inner</b> function decides: inner even ⇒ composite even; inner odd ⇒ composite copies the outer"
            },
            {
              "k": "Decomposition",
              "v": "<i>f</i> = [<i>f</i>(<i>x</i>) + <i>f</i>(−<i>x</i>)]/2 + [<i>f</i>(<i>x</i>) − <i>f</i>(−<i>x</i>)]/2, even part plus odd part, in exactly one way"
            }
          ]
        },
        {
          "t": "proc",
          "title": "The three-line parity test, and what it buys",
          "steps": [
            "<b>Check the domain is symmetric about 0.</b> If <i>x</i> ∈ <i>D</i> does not force −<i>x</i> ∈ <i>D</i>, stop: the answer is neither, and the formula is a red herring.",
            "<b>Compute <i>f</i>(−<i>x</i>) and simplify.</b> Then compare: equal to <i>f</i>(<i>x</i>) is even, equal to −<i>f</i>(<i>x</i>) is odd. For “neither”, produce <b>one</b> value of <i>x</i> at which both comparisons fail, because a universally quantified statement dies to a single witness.",
            "<b>Two consequences to keep.</b> An odd <i>f</i> defined at 0 <b>must</b> have <i>f</i>(0) = 0, since <i>f</i>(0) = −<i>f</i>(0). And <i>f</i>(|<i>x</i>|) is always even, whatever <i>f</i> is.",
            "<b>Cash it in.</b> Sketch on [0, ∞) only, then reflect in the <i>y</i>-axis (even) or half-turn about the origin (odd). The range of an even function <b>equals</b> its range on the non-negative half; the range of an odd function is <b>symmetric about 0</b>, so compute half of it and reflect."
          ]
        },
        {
          "t": "think",
          "html": "the range payoff is the big one. for an odd function, y is attained exactly when −y is. work out the range on [0, ∞) and mirror it through zero, and you have skipped an entire second computation with the sign of x flipping through every inequality. that is where the errors live."
        },
        {
          "t": "p",
          "html": "Now periodicity. It is usually introduced with sines and cosines, which leaves students believing it is a trigonometric idea. It is not. A function <i>f</i> is <b>periodic</b> if there is a real <i>T</i> > 0 with <i>f</i>(<i>x</i> + <i>T</i>) = <i>f</i>(<i>x</i>) for every <i>x</i> in the domain (and <i>x</i> + <i>T</i> in it too). Any such <i>T</i> is <b>a</b> period; the smallest positive one, <b>if it exists</b>, is the <b>fundamental period</b>."
        },
        {
          "t": "p",
          "html": "The caveat nobody states and every examiner exploits: <b>a smallest period need not exist</b>. A constant function satisfies <i>f</i>(<i>x</i> + <i>T</i>) = <i>f</i>(<i>x</i>) for <b>every</b> <i>T</i> > 0, so it is periodic with no fundamental period at all. “Find the fundamental period of <i>f</i>(<i>x</i>) = 7” has the answer “there is none”, not “1”."
        },
        {
          "t": "formula",
          "kicker": "PERIODS YOU MUST KNOW",
          "tag": "algebraic, not trigonometric",
          "main": "{x} = x − [x] has fundamental period 1",
          "legend": [
            "scaling: <i>f</i>(<i>ax</i> + <i>b</i>) has period <i>T</i>/|<i>a</i>|, so {3<i>x</i> − 1} has period 1/3 and {<i>x</i>/4} has period 4",
            "(−1)<sup>[x]</sup> has period 2 · sgn({<i>x</i>}) and [<i>x</i>] − <i>x</i> have period 1 · <b>[<i>x</i>] is not periodic</b> · no non-constant monotone function is"
          ],
          "note": "Sum rule: if T₁/T₂ is rational, the LCM is a period of f ± g and fg, but it need not be the fundamental one. If the ratio is irrational, the sum is not periodic at all. An outer operation never lengthens a period."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY {x} REPEATS AND [x] DOES NOT, TAP FOR THE WHY",
          "steps": [
            {
              "eq": "[x + 1] = [x] + 1",
              "why": "Shifting by an integer shifts the floor by the same integer: the integers not exceeding x + 1 are exactly the integers not exceeding x, each pushed up by one."
            },
            {
              "eq": "{x + 1} = (x + 1) − ([x] + 1) = x − [x] = {x}",
              "why": "So 1 is a period of the fractional part. The two shifts cancel exactly, which is the whole mechanism of the sawtooth."
            },
            {
              "eq": "0 < T < 1 fails: {T} = T ≠ 0 = {0}",
              "why": "Any period must in particular satisfy the equation at x = 0. A smaller candidate is killed by that single substitution, so 1 is the fundamental period."
            },
            {
              "eq": "[x] periodic ⇒ [T] = [0] = 0 ⇒ 0 < T < 1",
              "why": "Now suppose T > 0 were a period of the floor and test it at x = 0. The floor of T must equal the floor of 0, which pins T strictly between 0 and 1."
            },
            {
              "eq": "x = −T/2 ⟹ [x] = −1 but [x + T] = [T/2] = 0",
              "why": "Since T lies in (0, 1), the number −T/2 lies in (−1, 0) and its floor is −1, while T/2 lies in (0, 1) and its floor is 0. That forces 0 = −1, a contradiction, so the floor is not periodic. Do not be tempted by “[x] repeats its shape every unit”: it repeats its shape, not its values."
            }
          ]
        },
        {
          "t": "proc",
          "title": "Three techniques for a functional equation",
          "steps": [
            "<b>Strategic substitution.</b> The equation holds for <b>all</b> <i>x</i> and <i>y</i>, so choose them. In order of productivity: <i>x</i> = <i>y</i> = 0 to get <i>f</i>(0), always first, because it anchors everything else; then <i>y</i> = 0 alone; then <i>y</i> = −<i>x</i> to force out the parity; then <i>y</i> = <i>x</i> for a doubling relation; then <i>y</i> = 1 to turn the equation into a recursion in <i>x</i>.",
            "<b>The paired-equation trick.</b> If the equation ties <i>f</i>(<i>x</i>) to <i>f</i>(<i>u</i>(<i>x</i>)) where <i>u</i> is an <b>involution</b>, meaning <i>u</i>(<i>u</i>(<i>x</i>)) = <i>x</i>, replace <i>x</i> by <i>u</i>(<i>x</i>) throughout to get a second equation in the same two unknowns, then solve the pair as a 2 × 2 linear system. The standard involutions are 1/<i>x</i>, −<i>x</i>, 1 − <i>x</i> and <i>a</i> − <i>x</i>. Applying <i>u</i> twice must bring you back, or the second equation introduces a third unknown and the system never closes.",
            "<b>Recursion to a closed form.</b> If a substitution produces <i>f</i>(<i>x</i> + 1) in terms of <i>f</i>(<i>x</i>), iterate from the given value, list <i>f</i>(1), <i>f</i>(2), <i>f</i>(3), <i>f</i>(4), and sum the increments with the AP or GP formula.",
            "<b>Substitute your answer back.</b> Never skip this on a functional equation, and never quote a standard form when the equation carries an extra term."
          ]
        },
        {
          "t": "defgrid",
          "title": "The four standard forms",
          "rows": [
            { "k": "f(x + y) = f(x) + f(y) on ℝ", "v": "<i>f</i>(<i>x</i>) = <i>kx</i>, with <i>k</i> = <i>f</i>(1)" },
            {
              "k": "f(x + y) = f(x) f(y) on ℝ",
              "v": "<i>f</i>(<i>x</i>) = <i>a</i><sup>x</sup> with <i>a</i> = <i>f</i>(1) > 0, or <i>f</i> identically 0"
            },
            { "k": "f(xy) = f(x) + f(y) on (0, ∞)", "v": "<i>f</i>(<i>x</i>) = <i>k</i> ln <i>x</i>" },
            {
              "k": "f(xy) = f(x) f(y) on (0, ∞)",
              "v": "<i>f</i>(<i>x</i>) = <i>x</i><sup>n</sup>, or <i>f</i> identically 0"
            },
            {
              "k": "The regularity clause",
              "v": "each needs continuity at a point, or monotonicity, or boundedness on an interval. JEE grants it implicitly, so <b>state it when you quote the form</b>"
            },
            {
              "k": "An extra term",
              "v": "<i>f</i>(<i>x</i> + <i>y</i>) = <i>f</i>(<i>x</i>) + <i>f</i>(<i>y</i>) + <i>xy</i> is <b>not</b> the first row: the + <i>xy</i> changes the answer completely"
            }
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE / JEE MAIN",
          "q": "Classify as even, odd or neither, with a one-line reason: (a) <i>x</i><sup>4</sup> − 3<i>x</i><sup>2</sup> + 1, (b) <i>x</i>|<i>x</i>|, (c) <i>x</i><sup>3</sup> + <i>x</i><sup>2</sup>, (d) [<i>x</i>] + [−<i>x</i>], (e) <i>x</i><sup>2</sup> on [1, 3].",
          "steps": [
            "(a) <b>Even.</b> Only even powers appear; the constant is 1 · <i>x</i><sup>0</sup>, also an even power.",
            "(b) <b>Odd.</b> <i>f</i>(−<i>x</i>) = (−<i>x</i>)|−<i>x</i>| = −<i>x</i>|<i>x</i>|. Odd times even is odd.",
            "(c) <b>Neither.</b> Witness <i>x</i> = 1: <i>f</i>(1) = 2 and <i>f</i>(−1) = 0, which is neither 2 nor −2.",
            "(d) <b>Even.</b> <i>f</i>(−<i>x</i>) = [−<i>x</i>] + [<i>x</i>] = <i>f</i>(<i>x</i>): the two terms simply trade places. Arguing from “[<i>x</i>] is neither” is true and irrelevant.",
            "(e) <b>Neither.</b> The domain [1, 3] is not symmetric about 0, so neither definition can be tested. The formula is a red herring."
          ],
          "ans": "even · odd · neither · even · neither, and the last one never got past the precondition"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "Find the fundamental period, or show there is none: (a) {3<i>x</i> − 1}, (b) (−1)<sup>[x]</sup>, (c) [<i>x</i>], (d) {<i>x</i>/2} + {<i>x</i>/3}, (e) <i>f</i>(<i>x</i>) = 7.",
          "steps": [
            "(a) <b>1/3.</b> The fractional part has period 1, and <i>f</i>(<i>ax</i> + <i>b</i>) scales it by 1/|<i>a</i>|. Minimality: {3<i>x</i> + 3<i>T</i> − 1} = {3<i>x</i> − 1} forces 3<i>T</i> to be a positive integer.",
            "(b) <b>2.</b> [<i>x</i> + 2] = [<i>x</i>] + 2 leaves the sign unchanged. Is 1 a period? At <i>x</i> = 0 the value is 1, at <i>x</i> = 1 it is −1, so no.",
            "(c) <b>Not periodic</b>, by the derivation above: it repeats its shape, not its values.",
            "(d) <b>6.</b> Periods 2 and 3, ratio rational, so LCM 6 is a period. Fundamental: any period <i>T</i> has <i>f</i>(<i>T</i>) = <i>f</i>(0) = 0, a sum of two non-negative terms, so both vanish and <i>T</i> is a multiple of 2 and of 3.",
            "(e) <b>Periodic with no fundamental period.</b> Every <i>T</i> > 0 works, and (0, ∞) has no smallest element."
          ],
          "ans": "1/3 · 2 · none (not periodic) · 6 · periodic but with no fundamental period"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN · SPEED TRAP",
          "q": "A real function satisfies <i>f</i>(<i>x</i>) + 2<i>f</i>(1/<i>x</i>) = 3<i>x</i> for every <i>x</i> ≠ 0. Find <i>f</i>(<i>x</i>), then all <i>x</i> with <i>f</i>(<i>x</i>) = <i>f</i>(−<i>x</i>).",
          "steps": [
            "The map <i>u</i>(<i>x</i>) = 1/<i>x</i> is an involution, so replace <i>x</i> by 1/<i>x</i> to get a second equation: <i>f</i>(1/<i>x</i>) + 2<i>f</i>(<i>x</i>) = 3/<i>x</i>.",
            "Eliminate: twice the second minus the first gives 3<i>f</i>(<i>x</i>) = 6/<i>x</i> − 3<i>x</i>, so <b><i>f</i>(<i>x</i>) = 2/<i>x</i> − <i>x</i></b>. Substitute back to verify. ✓",
            "Now notice <i>f</i> is <b>odd</b>. For an odd function, <i>f</i>(<i>x</i>) = <i>f</i>(−<i>x</i>) collapses to <i>f</i>(<i>x</i>) = −<i>f</i>(<i>x</i>), that is <i>f</i>(<i>x</i>) = 0.",
            "So 2/<i>x</i> = <i>x</i> ⇒ <i>x</i><sup>2</sup> = 2 ⇒ <i>x</i> = ±√2, both non-zero and hence legal."
          ],
          "ans": "f(x) = 2/x − x on ℝ ∖ {0} · x = ±√2, in one line once you spot the parity"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "<i>f</i> : ℝ → ℝ satisfies <i>f</i>(<i>x</i> + <i>y</i>) = <i>f</i>(<i>x</i>) + <i>f</i>(<i>y</i>) + <i>xy</i> for all real <i>x</i>, <i>y</i>, with <i>f</i>(1) = 3. Find <i>f</i>(<i>n</i>), then <i>f</i>(10), then <i>f</i>(<i>x</i>) for all real <i>x</i>.",
          "steps": [
            "Note what this is <b>not</b>: the + <i>xy</i> means the first standard form does not apply and <i>f</i>(<i>x</i>) = <i>kx</i> is wrong.",
            "Anchor: <i>x</i> = <i>y</i> = 0 gives <i>f</i>(0) = 2<i>f</i>(0), so <i>f</i>(0) = 0. Recursion: <i>y</i> = 1 gives <i>f</i>(<i>x</i> + 1) = <i>f</i>(<i>x</i>) + 3 + <i>x</i>.",
            "Iterate: 3, 7, 12, 18, 25, … Summing the increments, <i>f</i>(<i>n</i>) = 3<i>n</i> + <i>n</i>(<i>n</i> − 1)/2, so <i>f</i>(10) = 30 + 45 = 75.",
            "Closed form: <i>xy</i> is exactly what ½<i>x</i><sup>2</sup> leaves behind, so try <i>f</i>(<i>x</i>) = ½<i>x</i><sup>2</sup> + <i>cx</i>. The equation holds for every <i>c</i>, and <i>f</i>(1) = ½ + <i>c</i> = 3 pins <i>c</i> = 5/2."
          ],
          "ans": "f(n) = 3n + n(n − 1)/2 · f(10) = 75 · f(x) = (x² + 5x)/2"
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Classify: (a) <i>x</i><sup>5</sup> − 3<i>x</i><sup>3</sup> + 7<i>x</i>, (b) |<i>x</i> + 1| + |<i>x</i> − 1|, (c) |<i>x</i> + 1| − |<i>x</i> − 1|, (d) (<i>x</i> + 1)<sup>2</sup>.",
              "a": "(a) odd, (b) even, (c) odd, (d) neither: <i>f</i>(1) = 4 while <i>f</i>(−1) = 0."
            },
            {
              "q": "[JEE Main] Write <i>f</i>(<i>x</i>) = <i>x</i><sup>3</sup> + 3<i>x</i><sup>2</sup> − 2<i>x</i> + 5 as an even function plus an odd one.",
              "a": "Even part 3<i>x</i><sup>2</sup> + 5; odd part <i>x</i><sup>3</sup> − 2<i>x</i>. Split the terms by the parity of their powers."
            },
            {
              "q": "[JEE Main] Fundamental periods of (a) {<i>x</i>/4}, (b) {2<i>x</i>}, (c) {<i>x</i>} + {2<i>x</i>}, (d) [<i>x</i>] − <i>x</i>.",
              "a": "(a) 4, (b) 1/2, (c) 1, since 1/2 fails at <i>x</i> = 0, (d) 1, because it equals −{<i>x</i>}."
            },
            {
              "q": "[JEE Main] 2<i>f</i>(<i>x</i>) + <i>f</i>(−<i>x</i>) = 3<i>x</i> + 5 for all real <i>x</i>. Find <i>f</i>(<i>x</i>).",
              "a": "<i>f</i>(<i>x</i>) = 3<i>x</i> + 5/3. Pair with <i>x</i> → −<i>x</i>, the involution here being <i>u</i>(<i>x</i>) = −<i>x</i>, and eliminate."
            },
            {
              "q": "[JEE Advanced] Use parity to find the range of <i>f</i>(<i>x</i>) = √(<i>x</i><sup>2</sup> + <i>x</i> + 1) − √(<i>x</i><sup>2</sup> − <i>x</i> + 1).",
              "a": "(−1, 1). Both radicands are always positive so <i>D</i> = ℝ, and <i>f</i> is odd, so work on [0, ∞) and reflect. Rationalising gives 2<i>x</i>/(<i>A</i> + <i>B</i>), which is 0 at <i>x</i> = 0 and stays strictly below 1, so the range there is [0, 1)."
            }
          ]
        },
        {
          "t": "mcq",
          "q": "The function <i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> on the domain [1, 3] is:",
          "correct": 2,
          "opts": [
            {
              "label": "even",
              "nudge": "The formula looks even, but parity is never decided by the formula alone. Check the domain first."
            },
            {
              "label": "odd",
              "nudge": "Not even close: x² is the standard even formula. The real issue is upstream of the formula."
            },
            { "label": "neither", "nudge": null },
            {
              "label": "both even and odd",
              "nudge": "The only function that is both is the zero function on a symmetric domain, since f(x) = −f(x) forces f(x) = 0."
            }
          ],
          "solution": "The domain [1, 3] is not symmetric about 0: 1 is in it but −1 is not, so f(−1) does not exist and neither definition can even be tested."
        },
        {
          "t": "mcq",
          "q": "Which of these is <b>not</b> periodic?",
          "correct": 1,
          "opts": [
            {
              "label": "{x} = x − [x]",
              "nudge": "The sawtooth is the model periodic function on this syllabus, with fundamental period 1."
            },
            { "label": "[x]", "nudge": null },
            {
              "label": "sgn({x})",
              "nudge": "An outer operation never destroys a period: this is 0 at integers and 1 elsewhere, period 1."
            },
            {
              "label": "f(x) = 7",
              "nudge": "A constant is periodic, and every T > 0 is a period. What it lacks is a <b>fundamental</b> period, which is a different question."
            }
          ],
          "solution": "Testing a supposed period at x = 0 forces 0 < T < 1, and then x = −T/2 gives [x] = −1 while [x + T] = 0. The floor repeats its shape, not its values."
        },
        {
          "t": "mcq",
          "q": "If <i>f</i> and <i>g</i> are both odd on a symmetric domain, then <i>fg</i> is:",
          "correct": 1,
          "opts": [
            {
              "label": "odd",
              "nudge": "Track the signs: f(−x)g(−x) = (−f(x))(−g(x)). Two flips cancel rather than compound."
            },
            { "label": "even", "nudge": null },
            {
              "label": "neither, in general",
              "nudge": "That is the verdict for a <b>sum</b> of an even and an odd function, not for a product of two odd ones."
            },
            {
              "label": "the zero function",
              "nudge": "Take f = g = x: the product is x², plainly not zero. Only a function that is both even and odd must vanish."
            }
          ],
          "solution": "f(−x) g(−x) = (−f(x))(−g(x)) = f(x) g(x), exactly as (−x)(−x) = x². Odd times odd is even."
        },
        {
          "t": "mcq",
          "q": "A function <i>f</i> is odd, has period 4, and <i>f</i>(1) = 4. Then <i>f</i>(3) equals:",
          "correct": 0,
          "opts": [
            { "label": "−4", "nudge": null },
            {
              "label": "4",
              "nudge": "Periodicity alone gives f(3) = f(−1), but oddness then flips the sign of f(1)."
            },
            {
              "label": "0",
              "nudge": "f(0) = 0 is forced for an odd function, but 3 is not 0, and nothing here makes f vanish there."
            },
            {
              "label": "cannot be determined",
              "nudge": "Two facts are enough: step back one period to reach −1, then use oddness."
            }
          ],
          "solution": "f(3) = f(3 − 4) = f(−1) = −f(1) = −4. Note that period 2 with oddness would force f(1) = −f(1) = 0, contradicting f(1) = 4: always test a period-plus-parity hypothesis for consistency."
        },
        {
          "t": "mistakes",
          "items": [
            "Testing parity before the domain. If the domain is not symmetric about 0, the answer is <b>neither</b>, and no amount of algebra changes that.",
            "Assuming every function is even or odd. <b>“Neither” is the common case</b>: a sum of an odd term and an even term, like <i>x</i><sup>3</sup> + <i>x</i><sup>2</sup>, is the archetype.",
            "Thinking odd × odd = odd. It is <b>even</b>: the two sign flips cancel. And in a composite it is the <b>inner</b> function that decides the parity.",
            "Calling [<i>x</i>] periodic because it “repeats every unit”. It repeats its <b>shape</b>, not its values. And a constant is periodic but has <b>no fundamental period</b>.",
            "Quoting a standard functional form when the equation has an extra term. <i>f</i>(<i>x</i> + <i>y</i>) = <i>f</i>(<i>x</i>) + <i>f</i>(<i>y</i>) + <i>xy</i> is <b>not</b> <i>f</i>(<i>x</i>) = <i>kx</i>; substitute your answer back, every time."
          ]
        },
        {
          "t": "protip",
          "html": "before starting any range or sketching problem, spend five seconds on <i>f</i>(−<i>x</i>). if it comes back as ±<i>f</i>(<i>x</i>) you have just halved the work, and for an odd function you compute the range on [0, ∞) and mirror it through zero. on functional equations, substitute <i>x</i> = <i>y</i> = 0 first, always, and if you see <i>f</i>(1/<i>x</i>), <i>f</i>(−<i>x</i>) or <i>f</i>(1 − <i>x</i>) sitting beside <i>f</i>(<i>x</i>), write the second equation immediately."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "symmetric domain first, or neither",
              "note": "x ∈ D must force −x ∈ D"
            },
            {
              "f": "even f(−x) = f(x) · odd f(−x) = −f(x)",
              "note": "y-axis mirror · half-turn about the origin"
            },
            {
              "f": "odd × odd = even · f(0) = 0 if odd",
              "note": "in a composite, the inner function decides"
            },
            {
              "f": "range of an odd f is symmetric about 0",
              "note": "compute half, then reflect"
            },
            {
              "f": "{x} has period 1 · f(ax + b) has period T/|a|",
              "note": "[x] is not periodic; a constant has no fundamental period"
            },
            {
              "f": "involution ⇒ pair the equations and solve",
              "note": "1/x, −x, 1 − x, a − x; substitute back"
            }
          ],
          "aids": [
            "“symmetric domain first, or the answer is neither”",
            "“shape repeats, values do not: that is [x]”"
          ]
        }
      ]
    }
  ]
};

export default ch02Relations;
