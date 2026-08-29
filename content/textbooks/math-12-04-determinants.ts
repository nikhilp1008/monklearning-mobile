/**
 * Chapter 04 · Determinants. Mathematics, Class 12.
 *
 * Restructured from pages 209 to 272 of the Drona Class 12 Mathematics Master
 * Reference into the block system in design_handoff_textbooks/CONTENT_SPEC.md,
 * following math-11-01-sets.ts and math-11-09-straight-lines.ts for voice and
 * density. Straight Lines is the direct neighbour: its area-of-a-triangle
 * formula is this chapter's Topic 03 determinant, expanded.
 *
 * The source is two documents stacked: a typeset chapter of six parts, and a
 * Round 2 Addendum of six lettered sections (A to E, plus P, an analysis of
 * what JEE actually asks). Six topics is the schema's ceiling, so the addendum
 * is folded into the part it belongs to rather than given topics of its own:
 *
 *   - Addendum A (circulant determinants and the cube roots of unity) sits in
 *     Topic 02. Stripped of the omega machinery, which is a Class 11 complex
 *     numbers detour, what remains is the column-sum move of Part 2 aimed at a
 *     recurring shape, plus the two shift signs and the cubic they produce.
 *   - Addendum D (concurrency, the family of lines, polygon areas) sits in
 *     Topic 03, which is where its parent formula lives. Its parallelism
 *     caution is carried in full: it is the only place the chapter admits a
 *     zero determinant can lie to you about geometry.
 *   - Addendum E (what to actually do when Δ = 0) sits in Topic 05, next to
 *     the consistency table it repairs, including the rank-1 counterexample
 *     that slips past the Δᵢ screen.
 *   - Addendum B (trigonometric determinants) and Addendum C (alternants with
 *     a missing power) sit in Topic 06, alongside Part 6's own multiplication,
 *     differentiation and special-determinant material.
 *   - Addendum P's distribution of the 1979 to 2020 question bank is folded
 *     into the exam hook, where a share-of-paper figure is worth more to a
 *     student than a list of years.
 *
 * Two deliberate omissions. The omega-machine derivation of the circulant
 * (Addendum A, Step 2) is dropped: it needs primitive cube roots of unity and
 * a simultaneous column change of basis, and it produces a factorisation the
 * chapter never uses, while the value it certifies is stated and checked.
 * Addendum P's counting and extremal genre (maximum determinant over entries
 * in {−1, 0, 1}, Hadamard bounds, trace puzzles solved by eigenvalues) is
 * dropped too: the source itself says the book never develops it, and it needs
 * machinery that is not in this chapter or the ones around it.
 *
 * Three errors in the source that the book's own errata does not cover. The
 * errata (pages 830 to 832) lists entries for Chapters 1, 3 and 11 and nothing
 * at all for Chapter 4, so all three are recorded here, and all three were
 * re-derived from scratch:
 *
 *   1. Addendum D, Practice 1 answer. For the lines 2x − 3y + 5 = 0,
 *      4x − 6y + 9 = 0 and 2x − 2y + 3 = 0 the printed key opens
 *      "Determinant = 0" and then works "2(−18+18) + 3(−12+18) + 5(−8+12) =
 *      0+18+20 ≠ 0", contradicting itself inside one sentence. The correct
 *      value is 2. The middle cofactor term is +3 × |4 9 ; 2 3| = 3(12 − 18) =
 *      −18, not +18, so the sum is 0 − 18 + 20 = 2. Confirmed independently by
 *      R₂ → R₂ − 2R₁, which leaves the row (0, 0, −1) and gives Δ = 2. The
 *      printed conclusion, "not concurrent", is right: the first two lines are
 *      parallel and distinct. Carried into Topic 03 as the parallelism caution
 *      rather than as a worked answer.
 *   2. Addendum C, Practice 3 answer. Fitting the quotient of
 *      |1 1 1 ; a² b² c² ; a³ b³ c³| by the Vandermonde, the key prints
 *      "11 = 18λ + 11μ" from the specialisation (1, 2, 3) and "Δ = 2 ... gives
 *      1 = 9λ + 2μ" from (0, 1, 2). The correct equations are 11 = 36λ + 11μ,
 *      since e₁² = (1 + 2 + 3)² = 36, and 2 = 9λ + 2μ, since the determinant at
 *      (0, 1, 2) is 4 and not 2. The printed pair solves to μ = 9/7, which
 *      contradicts the key's own stated answer; the corrected pair gives λ = 0
 *      and μ = 1, so the quotient is ab + bc + ca, which is what the key
 *      states and what the identity requires.
 *   3. Addendum C, Practice 2 answer. The padding argument is described as
 *      reading "the coefficient of x³ ... (sign (−1)^(4+4))". It is the
 *      coefficient of x², whose cofactor sign is (−1)^(3+4) = −1: deleting the
 *      row of squares from the padded 4 × 4 is what leaves the 1, a, a³
 *      alternant. Both readings of the coefficient then carry a minus and it
 *      cancels, so the key's value, Δ = (a + b + c)V₃ = 60, is correct.
 *
 * Four `diagram` blocks, all of kind `plot`, and no figure is forced: a
 * determinant is mostly algebra. Two ideas here are genuinely visual and the
 * plot draws both. Topic 02 uses `polygons` for the parallelogram the rows
 * span, which is what makes swap, scale, shear and proportional rows obvious
 * rather than memorised. Topic 03 uses `polygons` again for the area of a
 * triangle and for the collinear case flattened onto a line. Topics 03 and 05
 * use `line` curves for three lines meeting, running parallel, or coinciding,
 * which is concurrency and the consistency criterion drawn rather than
 * asserted. Everything else is a table, because a table is the honest form for
 * it. Diagram chips and captions render as plain text, not markup, so they
 * carry no inline tags.
 *
 * The exam hook is authored once, on topic 1, with a bold heading per topic,
 * because the reader renders `hook` only there. Same convention, and the same
 * reason, as the Sets and Straight Lines chapters.
 */
import type { Chapter } from '@/lib/textbooks';

export const ch12Determinants: Chapter = {
  "chapter": "04",
  "title": "Determinants",
  "subject": "Mathematics",
  "klass": "Class 12",
  "topics": [
    {
      "n": "01",
      "title": "Expanding a Determinant",
      "chip": "01 EXPAND",
      "kalam": "one number out of a whole square table",
      "blocks": [
        {
          "t": "hook",
          "html": "<b>01 · Expanding a Determinant</b><br>The bedrock: you cannot attempt a single question in this chapter without it. CBSE asks direct 1 to 2 mark evaluations and “solve the determinant equation” problems. Every JEE Main and Advanced determinant question silently depends on fluent, error-free expansion, so a shaky expansion quietly costs you marks in five other topics.<br><br><b>02 · Properties, and Proving Without Expanding</b><br>The single most-used tool in the chapter: you simplify <b>before</b> you expand. CBSE almost always carries a 3 to 4 mark “prove without expanding” or “evaluate using properties” question. JEE Main poses 1 to 2 a paper on property-based factoring or fast evaluation, and across the 1979 to 2020 bank properties and factorisation are about a fifth of all determinant items. JEE Advanced folds them into multi-step manipulations with algebra, sequences or matrices.<br><br><b>03 · Area, Collinearity and Concurrency</b><br>A guaranteed CBSE scorer: 1 to 2 mark area or collinearity questions appear almost every year, and “find <i>k</i> so that the points are collinear” is a perennial. JEE Main hides it inside coordinate geometry and loci, roughly one item in twelve. The bookkeeping is the whole trap: drop the ½ or the modulus and both branches of an area equation collapse into one wrong answer.<br><br><b>04 · Minors, Cofactors and the Adjoint</b><br>The machinery the rest of the chapter runs on. CBSE asks a direct 1 to 2 mark “find the minor or cofactor of <i>a</i><sub><i>ij</i></sub>”, or “expand using cofactors”. JEE Main leans on cofactor expansion, the cross-cofactor-zero trick and |adj <i>A</i>| shortcuts, which together with the inverse identities carry about 15% of the bank. JEE Advanced pushes |adj <i>A</i>| = |<i>A</i>|<sup><i>n</i>−1</sup> into multi-step ladders.<br><br><b>05 · The Inverse and Systems of Equations</b><br>The payoff, and the largest single block in the exam bank: consistency of linear systems is roughly 35% of all determinant questions, and from 2017 onward most JEE Main papers carry two to four of them. CBSE almost always sets a 5 to 6 mark “solve the system by matrix method”. JEE Advanced favours homogeneous systems, the dimension of the solution space, and parameter-rich consistency analysis.<br><br><b>06 · Advanced Techniques</b><br>Pure JEE territory, and it rarely appears on CBSE at all. Multiplication and adjoint identities power the one-mark |2<i>AB</i>| traps. Elementwise scaling, differentiation of a determinant, trigonometric determinants and Vandermonde-style factorisation appear as full Advanced problems. Mastering these is the difference between a good score and a top percentile."
        },
        {
          "t": "p",
          "html": "A <b>determinant</b> is one number squeezed out of a <b>square</b> arrangement of numbers. Hand it a square grid and it hands you back a single value that captures the grid's essence: in particular, whether the rows pull in genuinely independent directions, in which case the number is non-zero, or secretly collapse onto one another, in which case it is exactly 0."
        },
        {
          "t": "p",
          "html": "You have met the smallest version already. For a 2 × 2 array the determinant is the <b>cross difference</b>, <i>ad</i> − <i>bc</i>. Geometrically that is the signed area of the parallelogram drawn by the two rows, and the determinant of a 3 × 3 array is the signed <b>volume</b> of the box drawn by its three rows. Topic 02 lives entirely inside that picture, and once you hold it every property of determinants stops being a rule to memorise."
        },
        {
          "t": "p",
          "html": "Two conventions before anything else. Throughout this chapter a determinant written on one line separates its rows with a semicolon, so |2 1 3 ; 0 4 1 ; 5 2 1| is the three-row array with 2, 1, 3 across the top. And the value itself is written det <i>A</i>, or |<i>A</i>| with vertical bars, or simply Δ. Arthur Cayley introduced the bars in 1841; the idea grew out of Gabriel Cramer's 1750 work on simultaneous equations, which is precisely where topic 05 takes it."
        },
        {
          "t": "think",
          "html": "a determinant is net run rate for a table of numbers. one figure, squeezed out of a whole season, that still tells you something real about the team. here the real thing it tells you is whether a related set of equations has a clean unique answer."
        },
        {
          "t": "def",
          "term": "Determinant",
          "html": "A single scalar assigned to a <b>square</b> matrix and to nothing else: a 2 × 3 array has no determinant, because the definition has nowhere to put the leftover column. It is dimensionless, a pure number with no units. The order-1 case is the one students misread. As a determinant |<i>a</i>| = <i>a</i>, so |−5| = −5 here. It is <b>not</b> the modulus, even though the notation is identical."
        },
        {
          "t": "defgrid",
          "title": "Determinants, order by order",
          "rows": [
            {
              "k": "Order 1",
              "v": "|<i>a</i>| = <i>a</i>, the entry itself, sign included and never its modulus"
            },
            {
              "k": "Order 2",
              "v": "|<i>a</i> <i>b</i> ; <i>c</i> <i>d</i>| = <i>ad</i> − <i>bc</i>, the cross difference"
            },
            {
              "k": "Order 3",
              "v": "expand along any row or column with the checkerboard signs, or use Sarrus"
            },
            {
              "k": "The sign board",
              "v": "+ − + / − + − / + − +, which is (−1)<sup><i>i</i>+<i>j</i></sup> at position (<i>i</i>, <i>j</i>)"
            },
            {
              "k": "Term count",
              "v": "an order-<i>n</i> determinant expands into <i>n</i>! signed products: 2, 6, 24, 120"
            },
            {
              "k": "Not defined for",
              "v": "any non-square array. And Sarrus is 3 × 3 only, never 2 × 2 and never 4 × 4"
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "EXPANSION ALONG THE FIRST ROW",
          "tag": "the answer never depends on the line you pick",
          "main": "|<i>A</i>| = <i>a</i><sub>11</sub><i>M</i><sub>11</sub> − <i>a</i><sub>12</sub><i>M</i><sub>12</sub> + <i>a</i><sub>13</sub><i>M</i><sub>13</sub>",
          "legend": [
            "<i>M</i><sub>1<i>j</i></sub> is the 2 × 2 determinant left after deleting row 1 and column <i>j</i>, called the <b>minor</b> of that entry, and topic 04 builds it out properly",
            "the alternating + − + is the sign board (−1)<sup><i>i</i>+<i>j</i></sup>, and the middle minus is the term students drop most often",
            "the same recipe along any row or any column returns the identical number, which is a licence to pick the line with the most zeros"
          ],
          "note": "For the array |<i>a</i><sub>11</sub> <i>a</i><sub>12</sub> <i>a</i><sub>13</sub> ; <i>a</i><sub>21</sub> <i>a</i><sub>22</sub> <i>a</i><sub>23</sub> ; <i>a</i><sub>31</sub> <i>a</i><sub>32</sub> <i>a</i><sub>33</sub>| the first minor is |<i>a</i><sub>22</sub> <i>a</i><sub>23</sub> ; <i>a</i><sub>32</sub> <i>a</i><sub>33</sub>|. Every zero on your chosen line deletes a whole 2 × 2 evaluation, which is exactly why the scan for zeros pays."
        },
        {
          "t": "formula",
          "kicker": "SARRUS, FOR ORDER 3 AND NOTHING ELSE",
          "tag": "fast, mechanical, and it does not generalise",
          "main": "|<i>A</i>| = (<i>a</i><sub>11</sub><i>a</i><sub>22</sub><i>a</i><sub>33</sub> + <i>a</i><sub>12</sub><i>a</i><sub>23</sub><i>a</i><sub>31</sub> + <i>a</i><sub>13</sub><i>a</i><sub>21</sub><i>a</i><sub>32</sub>) − (<i>a</i><sub>13</sub><i>a</i><sub>22</sub><i>a</i><sub>31</sub> + <i>a</i><sub>11</sub><i>a</i><sub>23</sub><i>a</i><sub>32</sub> + <i>a</i><sub>12</sub><i>a</i><sub>21</sub><i>a</i><sub>33</sub>)",
          "legend": [
            "rewrite the first two columns to the right of the array, then add the three full down-right diagonal products and subtract the three full down-left ones",
            "valid at order 3 and nowhere else: on a 4 × 4 it collects 6 terms where 24 are needed, so the answer is simply wrong",
            "it offers no zero-skipping, so on a sparse determinant a row or column expansion beats it"
          ],
          "note": "Use it when the array is small and dense. The moment you see a zero-rich row, abandon it and expand there instead."
        },
        {
          "t": "proc",
          "title": "Expanding a 3 by 3 along a row or column",
          "steps": [
            "<b>Scan for zeros first.</b> Pick the row or column carrying the most zero entries. Every zero removes a whole 2 × 2 evaluation, and one well-chosen line can cut the work by two thirds.",
            "<b>Walk along that line.</b> For each entry, mentally strike out its row and its column and evaluate the 2 × 2 determinant that survives. That is its <b>minor</b>.",
            "<b>Stamp the checkerboard sign</b> (−1)<sup><i>i</i>+<i>j</i></sup> onto each minor. Do not recompute the exponent each time: memorise the board + − + / − + − / + − + and read it off.",
            "<b>Multiply each entry by its signed minor and add.</b> The alternating signs are exactly what makes the answer independent of the line you chose, so a sign slip does not merely cost a term, it breaks that guarantee.",
            "<b>If the array carries an unknown</b>, expand fully to a polynomial in it and solve. Where the array is symmetric, simplify with a column operation first (topic 02) so the polynomial arrives already factored."
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · SOLVING A DETERMINANT EQUATION",
          "steps": [
            {
              "eq": "Δ = |<i>x</i> 1 1 ; 1 <i>x</i> 1 ; 1 1 <i>x</i>| = 0",
              "why": "The unknown sits on the diagonal, and the array is symmetric in one very particular way: every row adds up to the same thing. That is the signal to use a column operation before expanding anything at all."
            },
            {
              "eq": "<i>C</i><sub>1</sub> → <i>C</i><sub>1</sub> + <i>C</i><sub>2</sub> + <i>C</i><sub>3</sub>",
              "why": "Adding other columns into one leaves the value unchanged, which topic 02 proves. Every entry of the new first column becomes x + 1 + 1 = x + 2, the common row sum."
            },
            {
              "eq": "Δ = (<i>x</i> + 2) |1 1 1 ; 1 <i>x</i> 1 ; 1 1 <i>x</i>|",
              "why": "A whole column now shares the factor x + 2, so it comes outside the bars. Half the algebra has vanished and nothing has been expanded yet."
            },
            {
              "eq": "<i>R</i><sub>2</sub> → <i>R</i><sub>2</sub> − <i>R</i><sub>1</sub>, <i>R</i><sub>3</sub> → <i>R</i><sub>3</sub> − <i>R</i><sub>1</sub>",
              "why": "Subtracting the first row from the other two clears the first column below the diagonal and leaves an upper triangular array, with diagonal 1, x − 1, x − 1."
            },
            {
              "eq": "Δ = (<i>x</i> + 2)(<i>x</i> − 1)<sup>2</sup>",
              "why": "A triangular determinant is the product of its diagonal entries. No 3 by 3 expansion ever happened, and the answer arrived already factored."
            },
            {
              "eq": "Δ = 0 ⟺ <i>x</i> = −2 or <i>x</i> = 1",
              "why": "Read the roots straight off the factors. This is the same determinant that decides the kx + y + z system in topic 05, which is why −2 and 1 will look familiar when you meet them there."
            }
          ]
        },
        {
          "t": "p",
          "html": "One habit worth building now, before the arrays get hard. <b>Check a determinant along a second line.</b> Expanding along a different row or column must return the identical number, so a thirty-second recomputation catches almost every sign slip and almost every dropped minor. On a symbolic determinant the equivalent check is to substitute convenient values, such as <i>a</i> = 0, <i>b</i> = 1, <i>c</i> = 2, into both your answer and the original array."
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Evaluate |3 −2 ; 5 4| and |2 1 3 ; 0 4 1 ; 5 2 1|.",
          "steps": [
            "The 2 × 2 is the cross difference: (3)(4) − (−2)(5) = 12 + 10 = 22. The double negative is where the marks go.",
            "For the 3 × 3, no line is zero-rich, so expand along row 1: 2|4 1 ; 2 1| − 1|0 1 ; 5 1| + 3|0 4 ; 5 2|.",
            "= 2(4 − 2) − 1(0 − 5) + 3(0 − 20) = 4 + 5 − 60."
          ],
          "ans": "22 and −51"
        },
        {
          "t": "ex",
          "tag": "SPEED TRAP · SARRUS",
          "q": "Evaluate |1 2 1 ; 0 3 2 ; 2 1 1| using Sarrus.",
          "steps": [
            "Down-right products: (1)(3)(1) + (2)(2)(2) + (1)(0)(1) = 3 + 8 + 0 = 11.",
            "Down-left products: (1)(3)(2) + (1)(2)(1) + (2)(0)(1) = 6 + 2 + 0 = 8.",
            "Δ = 11 − 8 = 3. The trap is size: this is legal only because the array is 3 × 3. A student who memorises the diagonal trick and tries it on a 4 × 4 collects 6 of the 24 required terms and returns a confident wrong answer."
          ],
          "ans": "3"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Find all <i>x</i> satisfying |<i>x</i> 1 1 ; 1 <i>x</i> 1 ; 1 1 <i>x</i>| = 0.",
          "steps": [
            "Every row sums to x + 2, so run C₁ → C₁ + C₂ + C₃ and pull that common factor straight out.",
            "Then R₂ → R₂ − R₁ and R₃ → R₃ − R₁ leave a triangular array with diagonal 1, x − 1, x − 1.",
            "So Δ = (x + 2)(x − 1)², which is zero exactly when x = −2 or x = 1. Expanding blindly gives the same cubic, x³ − 3x + 2, and then you still have to factor it."
          ],
          "ans": "x = −2 or x = 1"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "Prove that |1 1 1 ; <i>a</i> <i>b</i> <i>c</i> ; <i>a</i><sup>3</sup> <i>b</i><sup>3</sup> <i>c</i><sup>3</sup>| = (<i>a</i> − <i>b</i>)(<i>b</i> − <i>c</i>)(<i>c</i> − <i>a</i>)(<i>a</i> + <i>b</i> + <i>c</i>).",
          "steps": [
            "Treat the left side as a polynomial rather than a grid. If a = b then columns 1 and 2 coincide and the determinant vanishes, so (a − b) is a factor. The same argument gives (b − c) and (c − a).",
            "Those three account for degree 3. The determinant's own terms, such as bc³, have degree 4, so exactly one degree is left over, and the leftover factor is symmetric in a, b, c: it must be λ(a + b + c).",
            "Fix λ by substituting a = 0, b = 1, c = 2. The left side is |1 1 1 ; 0 1 2 ; 0 1 8| = 1(8 − 2) = 6, and (−1)(−1)(2)(3) = 6, so λ = 1 and the identity holds."
          ],
          "ans": "Proved, with λ = 1"
        },
        {
          "t": "mcq",
          "q": "The value of the order-1 determinant |−7| is:",
          "correct": 1,
          "opts": [
            { "label": "7", "nudge": "This is the absolute value, which the identical notation invites. As a determinant the bars are not modulus bars: an order-1 determinant is the entry itself, sign and all." },
            { "label": "−7", "nudge": null },
            { "label": "0", "nudge": "Zero is what a repeated or dependent line produces, and a single entry has no second line to repeat." },
            { "label": "undefined", "nudge": "Order 1 is perfectly well defined. It is the base case the whole cofactor recursion bottoms out on." }
          ],
          "solution": "An order-1 determinant equals its single entry, so |−7| = −7. Only a non-square array is undefined."
        },
        {
          "t": "mcq",
          "q": "|2 4 ; 3 6| equals:",
          "correct": 1,
          "opts": [
            { "label": "24", "nudge": "This added the two cross products instead of subtracting them. The rule is ad − bc, never ad + bc." },
            { "label": "0", "nudge": null },
            { "label": "−12", "nudge": "This is 12 − 24, which uses bc − ad. Order matters: the main diagonal product comes first." },
            { "label": "12", "nudge": "This computed only the main diagonal product and stopped. The second product, 4 × 3, is still owed." }
          ],
          "solution": "2 × 6 − 4 × 3 = 12 − 12 = 0. Better still, look before you compute: the rows (2, 4) and (3, 6) are proportional, and proportional rows force 0 by the zero property of topic 02."
        },
        {
          "t": "mcq",
          "q": "Expanding a 3 × 3 determinant along any row or column gives:",
          "correct": 1,
          "opts": [
            { "label": "different values for different lines", "nudge": "If that were true the determinant would not be a well-defined number at all, and every result in this chapter would collapse." },
            { "label": "the same value always", "nudge": null },
            { "label": "zero unless you expand along row 1", "nudge": "Row 1 has no special status. The definition is stated there for convenience, and the checkerboard signs make every other line agree with it." },
            { "label": "twice the value when you expand along a column", "nudge": "Transpose invariance says rows and columns are interchangeable, so a column can never produce a scaled copy of the row answer." }
          ],
          "solution": "The determinant is well defined independently of the expansion line, and the checkerboard signs (−1)^(i+j) are exactly what guarantees that consistency. The freedom is a gift: it lets you always choose the zero-richest line."
        },
        {
          "t": "mcq",
          "q": "An order-4 determinant, fully expanded, has how many terms?",
          "correct": 2,
          "opts": [
            { "label": "4", "nudge": "That is n, the order itself. It counts the terms in one expansion line, not the fully multiplied-out total." },
            { "label": "16", "nudge": "That is n², the number of entries in the array. Entry count and term count agree only at n = 1." },
            { "label": "24", "nudge": null },
            { "label": "12", "nudge": "There is no route to 12 here. The count is a factorial, so it jumps 2, 6, 24, 120." }
          ],
          "solution": "An order-n determinant expands into n! signed products, so 4! = 24. This is also the honest reason shortcuts exist: at order 5 you would be facing 120 terms."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Evaluate |4 7 ; −2 5|.",
              "a": "(4)(5) − (7)(−2) = 20 + 14 = 34. The minus inside the array and the minus in the rule multiply to a plus."
            },
            {
              "q": "[CBSE] Evaluate |1 0 2 ; 3 −1 4 ; 2 5 1|.",
              "a": "Row 1 carries a zero, so expand there: 1(−1 − 20) − 0(3 − 8) + 2(15 + 2) = −21 + 0 + 34 = 13."
            },
            {
              "q": "[JEE Main] Solve |<i>x</i> 3 ; 2 <i>x</i> − 1| = 0.",
              "a": "x(x − 1) − 6 = 0, so x² − x − 6 = 0 and (x − 3)(x + 2) = 0. Hence x = 3 or x = −2."
            },
            {
              "q": "[JEE Main] Evaluate |0 2 0 ; 3 1 4 ; 0 5 0|.",
              "a": "0. Column 1 holds a single non-zero entry, 3, and the 2 × 2 surviving after you delete its row and column is |2 0 ; 5 0|, which has a zero column. You can also read it straight off: rows 1 and 3 are proportional."
            },
            {
              "q": "[JEE Advanced] Show that |1 <i>a</i> <i>a</i><sup>2</sup> ; 1 <i>b</i> <i>b</i><sup>2</sup> ; 1 <i>c</i> <i>c</i><sup>2</sup>| = (<i>a</i> − <i>b</i>)(<i>b</i> − <i>c</i>)(<i>c</i> − <i>a</i>).",
              "a": "This is the Vandermonde determinant. Run R₂ → R₂ − R₁ and R₃ → R₃ − R₁ to get rows (0, b − a, b² − a²) and (0, c − a, c² − a²), pull out (b − a) and (c − a), and the surviving 2 × 2 is |1 b + a ; 1 c + a| = c − b. Multiplying and tidying the signs gives (a − b)(b − c)(c − a). Topic 06 returns to it as the model for every alternant."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Reading the order-1 bars as a modulus.</b> |<i>a</i>| as a determinant is <i>a</i>, sign included. Modulus bars appear only in topic 03, where you take ½|Δ| for an area, and there they are wrapped around a determinant that already has its own bars.",
            "<b>Dropping the middle minus.</b> In row-1 expansion the second term carries a minus, −<i>a</i><sub>12</sub><i>M</i><sub>12</sub>. Forgetting it is the most common 3 × 3 error in the whole chapter.",
            "<b>Sarrus on the wrong size.</b> The diagonal trick is order 3 only. On a 4 × 4 it produces 6 of the 24 required terms and looks perfectly confident doing it.",
            "<b>Brute-forcing a sparse determinant.</b> Expanding along a dense line when a zero-rich one is sitting right there wastes time and multiplies your chances of a sign slip.",
            "<b>Expanding a symbolic determinant before simplifying.</b> If the rows or columns share a common sum or a common factor, one operation from topic 02 usually turns a cubic into a product of linear factors you can read off."
          ]
        },
        {
          "t": "protip",
          "html": "before you expand anything, spend two seconds scanning. zero-richest row or column? expand there, because every zero kills a whole 2 × 2. and on a symbolic determinant, check whether the rows or columns share a common sum: if they do, C₁ → C₁ + C₂ + C₃ pulls that sum out as a factor before any real work starts. the scan routinely halves the labour, and it never costs more than the two seconds."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "|<i>a</i>| = <i>a</i> · |<i>a</i> <i>b</i> ; <i>c</i> <i>d</i>| = <i>ad</i> − <i>bc</i>",
              "note": "order 1 is the entry, not its modulus"
            },
            {
              "f": "|<i>A</i>| = <i>a</i><sub>11</sub><i>M</i><sub>11</sub> − <i>a</i><sub>12</sub><i>M</i><sub>12</sub> + <i>a</i><sub>13</sub><i>M</i><sub>13</sub>",
              "note": "signs (−1) to the i + j, the + − + board"
            },
            {
              "f": "expand along ANY row or column",
              "note": "so always pick the one with the most zeros"
            },
            {
              "f": "Sarrus: sum of down-right products − sum of down-left products",
              "note": "order 3 only, never 2 by 2 or 4 by 4"
            },
            {
              "f": "order <i>n</i> ⇒ <i>n</i>! terms: 2, 6, 24, 120",
              "note": "why shortcuts exist at all"
            },
            {
              "f": "determinant equation: simplify first, then solve",
              "note": "row and column ops, then the polynomial"
            }
          ],
          "aids": [
            "“plus, minus, plus, and march along the zeros”",
            "“order one is the entry, not the size”",
            "“sarrus is three by three, and nothing else”"
          ]
        }
      ]
    },
    {
      "n": "02",
      "title": "Properties, and Proving Without Expanding",
      "chip": "02 PROPERTIES",
      "kalam": "the rows draw a box, and the determinant is its volume",
      "blocks": [
        {
          "t": "p",
          "html": "Take the three rows of a 3 × 3 array and treat each one as an arrow in space. Those three arrows are the edges of a slanted box, a parallelepiped, and <b>the determinant is the signed volume of that box</b>. For a 2 × 2 array it is the signed area of the parallelogram made by its two rows. Hold that picture and every property below stops being a rule to memorise and becomes something obvious."
        },
        {
          "t": "p",
          "html": "Watch what the box does. <b>Swap two rows</b> and you swap two edges, turning the box inside out: same volume, opposite sign. <b>Make two rows identical</b>, or merely proportional, and two edges point the same way, so the box is squashed flat and the volume is 0. <b>Multiply one row by <i>k</i></b> and you stretch one edge to <i>k</i> times its length, so the volume stretches by exactly <i>k</i>. <b>Add a multiple of one row to another</b> and you shear the box, like pushing the top sheet of a stack of paper sideways: base unchanged, height unchanged, volume unchanged."
        },
        {
          "t": "p",
          "html": "That last one is the workhorse. The operation <i>R</i><sub><i>i</i></sub> → <i>R</i><sub><i>i</i></sub> + <i>kR</i><sub><i>j</i></sub> costs you nothing and buys you zeros, and almost every “prove without expanding” question is two or three of those followed by a one-line kill. It must use a <b>different</b> row, so <i>i</i> ≠ <i>j</i>, and only one operation may be performed at a time."
        },
        {
          "t": "think",
          "html": "a shopkeeper who relists his stock categories in a different order has not changed his wealth, he has only flipped a sign in his own bookkeeping. but if he writes the same category twice, the ledger collapses: those two lines carry no new information, and the determinant reports zero."
        },
        {
          "t": "p",
          "html": "The least visual property is the most powerful one. |<i>A</i><sup>T</sup>| = |<i>A</i>|: transposing swaps every row with the corresponding column and does not change the value at all. So <b>every row rule is automatically a column rule</b>. Learn six rules about rows and you have quietly learned twelve."
        },
        {
          "t": "def",
          "term": "Proportional rows",
          "html": "Two rows, or two columns, are proportional when one is a constant multiple of the other, as (2, 4, 6) is 2 × (1, 2, 3). Proportional is enough to force Δ = 0; they need not be equal. More generally, if any row is a combination of the others the rows are <b>linearly dependent</b>, the box is flat, and the determinant is 0. Checking ratios rather than equality is what separates a five-second answer from a full expansion."
        },
        {
          "t": "defgrid",
          "title": "The property toolkit",
          "rows": [
            {
              "k": "P1 transpose",
              "v": "|<i>A</i><sup>T</sup>| = |<i>A</i>|, so every row rule is also a column rule"
            },
            {
              "k": "P2 interchange",
              "v": "<i>R</i><sub><i>i</i></sub> ↔ <i>R</i><sub><i>j</i></sub> flips the sign: Δ → −Δ"
            },
            {
              "k": "P3 zero",
              "v": "two identical or proportional lines, or one all-zero line, force Δ = 0"
            },
            {
              "k": "P4 scalar",
              "v": "one row times <i>k</i> multiplies Δ by <i>k</i>; the whole matrix gives |<i>kA</i>| = <i>k</i><sup><i>n</i></sup>|<i>A</i>|"
            },
            {
              "k": "P5 and P6",
              "v": "a row that is a sum of two rows splits Δ in two, and that is exactly why <i>R</i><sub><i>i</i></sub> → <i>R</i><sub><i>i</i></sub> + <i>kR</i><sub><i>j</i></sub> leaves Δ unchanged"
            },
            {
              "k": "P7 triangular",
              "v": "an upper, lower or diagonal array has Δ = the product of the diagonal entries"
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "SCALING: ONE ROW AGAINST THE WHOLE MATRIX",
          "tag": "the most punished slip in the chapter",
          "main": "<i>k</i> out of one row: Δ → <i>k</i>Δ   ·   |<i>kA</i>| = <i>k</i><sup><i>n</i></sup>|<i>A</i>|",
          "legend": [
            "pulling a common factor out of a single row or column multiplies the determinant by that factor once",
            "multiplying the whole <i>n</i> × <i>n</i> matrix by <i>k</i> scales every one of the <i>n</i> rows, so the factor comes out <i>n</i> times",
            "for order 3 that means |3<i>A</i>| = 27|<i>A</i>|, not 3|<i>A</i>|"
          ],
          "note": "The same one-versus-all distinction returns in topic 06 for elementwise scaling, where <i>b</i><sub><i>ij</i></sub> = 2<sup><i>i</i>+<i>j</i></sup><i>a</i><sub><i>ij</i></sub> costs a factor of 2<sup>12</sup>, not 2<sup>36</sup>."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "DIAGRAM · THE BOX THE ROWS DRAW",
          "chips": ["Rows as edges", "Scale a row", "Shear a row", "Proportional rows"],
          "captions": [
            "The rows (3, 1) and (1, 2), drawn as arrows from the origin. They span a parallelogram, and its area is exactly the determinant: 3 times 2 minus 1 times 1, which is 5. The determinant is not an abstraction here, it is the shaded region.",
            "Double the first row to (6, 2). The parallelogram stretches along that one edge and nothing else moves, so the area doubles to 10, and indeed 6 times 2 minus 2 times 1 is 10. Pulling a common factor out of one row is this picture read backwards.",
            "Now replace the first row by row 1 plus row 2, that is (4, 3), leaving the second row alone. The shape leans over, but the base and the perpendicular height are untouched, so the area is still 5: 4 times 2 minus 3 times 1. That is the shear, and it is why adding a multiple of one row to another is free.",
            "Make the second row (6, 2), which is twice the first. The two edges now point the same way, the parallelogram collapses onto a single line, and the area is 0. Proportional rows, not only identical ones, flatten the box."
          ],
          "frames": [
            {
              "x": [-1, 10],
              "y": [-1, 6],
              "polygons": [{ "points": [[0, 0], [3, 1], [4, 3], [1, 2]], "corners": true }],
              "segments": [
                { "from": [0, 0], "to": [3, 1], "arrow": true },
                { "from": [0, 0], "to": [1, 2], "arrow": true }
              ],
              "labels": [
                { "x": 3.4, "y": 0.6, "text": "row 1" },
                { "x": 0.5, "y": 2.6, "text": "row 2" },
                { "x": 2.1, "y": 1.5, "text": "area 5" }
              ]
            },
            {
              "x": [-1, 10],
              "y": [-1, 6],
              "polygons": [{ "points": [[0, 0], [6, 2], [7, 4], [1, 2]], "corners": true }],
              "segments": [
                { "from": [0, 0], "to": [6, 2], "arrow": true },
                { "from": [0, 0], "to": [1, 2], "arrow": true }
              ],
              "labels": [
                { "x": 6.2, "y": 1.5, "text": "row 1 doubled" },
                { "x": 3.2, "y": 2.1, "text": "area 10" }
              ]
            },
            {
              "x": [-1, 10],
              "y": [-1, 6],
              "polygons": [{ "points": [[0, 0], [4, 3], [5, 5], [1, 2]], "corners": true }],
              "segments": [
                { "from": [0, 0], "to": [4, 3], "arrow": true },
                { "from": [0, 0], "to": [1, 2], "arrow": true }
              ],
              "labels": [
                { "x": 4.2, "y": 2.7, "text": "row 1 + row 2" },
                { "x": 2.2, "y": 2.4, "text": "area still 5" }
              ]
            },
            {
              "x": [-1, 10],
              "y": [-1, 6],
              "polygons": [{ "points": [[0, 0], [3, 1], [9, 3], [6, 2]], "corners": true }],
              "segments": [
                { "from": [0, 0], "to": [3, 1], "arrow": true },
                { "from": [0, 0], "to": [6, 2], "arrow": true }
              ],
              "labels": [
                { "x": 5.4, "y": 0.9, "text": "both rows on one line" },
                { "x": 1.6, "y": 2.4, "text": "area 0" }
              ]
            }
          ]
        },
        {
          "t": "proc",
          "title": "Proving a determinant identity without expanding",
          "steps": [
            "<b>Scan for an instant kill first.</b> A zero row or column, or two proportional lines, hands you 0 on sight. So does odd-order skew-symmetry, which topic 06 explains.",
            "<b>Look for equal row sums or column sums.</b> If every row adds to the same expression, run <i>C</i><sub>1</sub> → <i>C</i><sub>1</sub> + <i>C</i><sub>2</sub> + <i>C</i><sub>3</sub>, or the row version, and that common sum becomes a factor of the whole determinant in one move.",
            "<b>Pull out common factors</b> from any row or column by P4. The numbers shrink and the arithmetic that follows gets safe.",
            "<b>Create zeros</b> with <i>R</i><sub><i>i</i></sub> → <i>R</i><sub><i>i</i></sub> + <i>kR</i><sub><i>j</i></sub>. One operation at a time, always built from the original rows, and always with <i>i</i> ≠ <i>j</i>.",
            "<b>Finish with a kill or a triangle.</b> If two lines have become identical or proportional, write 0 by P3. Otherwise reduce to triangular form and multiply the diagonal by P7.",
            "<b>Name every operation you used.</b> On Boards the examiner awards a method mark for writing “<i>C</i><sub>1</sub> → <i>C</i><sub>1</sub> + <i>C</i><sub>2</sub> + <i>C</i><sub>3</sub>” explicitly, and it costs you one line."
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY THE ROW OPERATION IS FREE",
          "steps": [
            {
              "eq": "Δ′ = |<i>R</i><sub>1</sub> + <i>kR</i><sub>2</sub> ; <i>R</i><sub>2</sub> ; <i>R</i><sub>3</sub>|",
              "why": "Start from the determinant after the operation has already been carried out. The claim is that this equals the determinant before it, so the whole simplification technique is legitimate."
            },
            {
              "eq": "= |<i>R</i><sub>1</sub> ; <i>R</i><sub>2</sub> ; <i>R</i><sub>3</sub>| + |<i>kR</i><sub>2</sub> ; <i>R</i><sub>2</sub> ; <i>R</i><sub>3</sub>|",
              "why": "The sum property P5. One row is a sum of two things, so the determinant splits into two determinants that differ only in that row, with everything else copied across."
            },
            {
              "eq": "= Δ + <i>k</i>|<i>R</i><sub>2</sub> ; <i>R</i><sub>2</sub> ; <i>R</i><sub>3</sub>|",
              "why": "The scalar property P4 pulls the k out of the first row of the second determinant. The first determinant is the original Δ, untouched."
            },
            {
              "eq": "|<i>R</i><sub>2</sub> ; <i>R</i><sub>2</sub> ; <i>R</i><sub>3</sub>| = 0",
              "why": "Two identical rows. Swap them: by P2 the value becomes its own negative, but the array after the swap is the same array, so Δ = −Δ, and only 0 can equal its own negative."
            },
            {
              "eq": "Δ′ = Δ + <i>k</i> × 0 = Δ",
              "why": "The damage you added lands in a determinant that already has a copy of that row sitting below it, so it is worth exactly nothing. This single argument is the backbone of every prove-without-expanding question you will ever be set."
            }
          ]
        },
        {
          "t": "p",
          "html": "Four shapes recur so often that recognising one is worth more than any amount of expansion. The <b>Vandermonde</b> stacks powers in its rows and factors into a product of differences. An <b>odd-order skew-symmetric</b> array, where <i>a</i><sub><i>ij</i></sub> = −<i>a</i><sub><i>ji</i></sub> and the diagonal is therefore all zeros, is always 0. A <b>cyclic</b> or <b>circulant</b> array, whose rows are shifts of one another, factors through <i>a</i> + <i>b</i> + <i>c</i>. And rows in arithmetic progression are linearly dependent, so they give 0 on sight."
        },
        {
          "t": "formula",
          "kicker": "THE CIRCULANT, AND ITS TWO SHIFTS",
          "tag": "left shift is minus, right shift is plus",
          "main": "|<i>a</i> <i>b</i> <i>c</i> ; <i>b</i> <i>c</i> <i>a</i> ; <i>c</i> <i>a</i> <i>b</i>| = −(<i>a</i><sup>3</sup> + <i>b</i><sup>3</sup> + <i>c</i><sup>3</sup> − 3<i>abc</i>)",
          "legend": [
            "the other shift, with rows (<i>a</i>, <i>b</i>, <i>c</i>), (<i>c</i>, <i>a</i>, <i>b</i>), (<i>b</i>, <i>c</i>, <i>a</i>), gives the same expression with a plus in front",
            "and <i>a</i><sup>3</sup> + <i>b</i><sup>3</sup> + <i>c</i><sup>3</sup> − 3<i>abc</i> = (<i>a</i> + <i>b</i> + <i>c</i>)(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> + <i>c</i><sup>2</sup> − <i>ab</i> − <i>bc</i> − <i>ca</i>), which is the column-sum move written out as an identity",
            "the quadratic factor equals ½[(<i>a</i> − <i>b</i>)<sup>2</sup> + (<i>b</i> − <i>c</i>)<sup>2</sup> + (<i>c</i> − <i>a</i>)<sup>2</sup>], so it vanishes only when <i>a</i> = <i>b</i> = <i>c</i>"
          ],
          "note": "If you forget which shift carries which sign, test (<i>a</i>, <i>b</i>, <i>c</i>) = (1, 2, 3): the left-shift array is −18 and the right-shift array is +18, while <i>a</i><sup>3</sup> + <i>b</i><sup>3</sup> + <i>c</i><sup>3</sup> − 3<i>abc</i> = 18. Circulants turn up constantly as the coefficient array of a homogeneous system, where “for which <i>k</i> is there a non-trivial solution” becomes “for which <i>k</i> is this cubic zero”."
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Prove, without expanding, that |<i>a</i> − <i>b</i>  <i>b</i> − <i>c</i>  <i>c</i> − <i>a</i> ; <i>b</i> − <i>c</i>  <i>c</i> − <i>a</i>  <i>a</i> − <i>b</i> ; <i>c</i> − <i>a</i>  <i>a</i> − <i>b</i>  <i>b</i> − <i>c</i>| = 0.",
          "steps": [
            "Every row and every column is built from the same three differences, so all three column sums are equal. That is the signal for C₁ → C₁ + C₂ + C₃.",
            "Each new first-column entry becomes (a − b) + (b − c) + (c − a) = 0.",
            "A determinant with an entire column of zeros is 0 by P3, and the operation never changed the value. Write the operation down: on Boards that line carries its own method mark."
          ],
          "ans": "Δ = 0"
        },
        {
          "t": "ex",
          "tag": "SPEED TRAP",
          "q": "Evaluate |2 4 6 ; 1 2 3 ; 5 7 9| as fast as you can.",
          "steps": [
            "Do not expand. Compare the first two rows: (2, 4, 6) = 2 × (1, 2, 3).",
            "Two proportional rows force Δ = 0 by P3, whatever the third row happens to be.",
            "Answer in under five seconds. A student who reaches for cofactors here burns a full minute and risks an arithmetic slip, all to arrive at a zero a single glance reveals."
          ],
          "ans": "0"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "If <i>p</i>, <i>q</i>, <i>r</i> are in arithmetic progression, show that |<i>x</i> + 1  <i>x</i> + 2  <i>x</i> + <i>p</i> ; <i>x</i> + 2  <i>x</i> + 3  <i>x</i> + <i>q</i> ; <i>x</i> + 3  <i>x</i> + 4  <i>x</i> + <i>r</i>| = 0 for every <i>x</i>.",
          "steps": [
            "Look for a linear dependence among the rows rather than a common factor. Test the combination R₁ − 2R₂ + R₃, column by column.",
            "Column 1: (x + 1) − 2(x + 2) + (x + 3) = 0. Column 2: (x + 2) − 2(x + 3) + (x + 4) = 0.",
            "Column 3: (x + p) − 2(x + q) + (x + r) = p + r − 2q, and that is 0 precisely because p, q, r are in AP, so 2q = p + r.",
            "Every column gives 0, so R₁ − 2R₂ + R₃ is the zero row: the rows are linearly dependent, the box is flat, and Δ = 0 for every x. Spotting that the third column is also in AP is the whole game."
          ],
          "ans": "Δ = 0, for all x"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "Evaluate |1 5 7 ; 5 7 1 ; 7 1 5|.",
          "steps": [
            "The rows are (a, b, c), (b, c, a), (c, a, b) with a = 1, b = 5, c = 7: the left-shift circulant.",
            "So Δ = −(a³ + b³ + c³ − 3abc) = −(1 + 125 + 343 − 3 × 1 × 5 × 7) = −(469 − 105).",
            "Check by expanding along row 1: 1(35 − 1) − 5(25 − 7) + 7(5 − 49) = 34 − 90 − 308 = −364. Two routes, one answer, and the first took ten seconds."
          ],
          "ans": "−364"
        },
        {
          "t": "mcq",
          "q": "If two columns of a third-order determinant are interchanged, the new value is the old value:",
          "correct": 2,
          "opts": [
            { "label": "multiplied by 2", "nudge": "This borrows the scalar-multiple idea, which applies when a line is scaled, not when two lines trade places. Nothing was scaled here." },
            { "label": "unchanged", "nudge": "That is true of <i>C</i><sub><i>i</i></sub> → <i>C</i><sub><i>i</i></sub> + <i>kC</i><sub><i>j</i></sub>, the shearing operation, which really is harmless. An interchange is a different move and it always costs a sign." },
            { "label": "multiplied by −1", "nudge": null },
            { "label": "made zero", "nudge": "Zero is what <i>identical</i> columns give. Swapping two distinct columns keeps every entry, so it cannot destroy the value." }
          ],
          "solution": "One interchange flips the sign, by P2. Two interchanges return you to plus, so an even number of swaps is free and an odd number leaves a minus you must carry."
        },
        {
          "t": "mcq",
          "q": "|1 2 3 ; 4 5 6 ; 7 8 9| is:",
          "correct": 1,
          "opts": [
            { "label": "1", "nudge": "There is no arithmetic route to 1 here. Any non-zero answer means the dependence among the rows was missed." },
            { "label": "0", "nudge": null },
            { "label": "−3", "nudge": "This is what a rushed expansion produces from a single sign slip, mis-adding −3 + 12 − 9. The point of the question is that no expansion was needed at all." },
            { "label": "24", "nudge": "An arithmetic landing spot, not a derivation. Check the structure of the rows before trusting any non-zero value here." }
          ],
          "solution": "The rows are in arithmetic progression, so R₁ − 2R₂ + R₃ is the zero row and the rows are dependent. Δ = 0, spotted in a glance."
        },
        {
          "t": "mcq",
          "q": "If <i>A</i> is 3 × 3 with |<i>A</i>| = 5, then |2<i>A</i>| equals:",
          "correct": 2,
          "opts": [
            { "label": "10", "nudge": "This treats 2<i>A</i> as scaling a single row. Multiplying the matrix scales all three rows, so the factor is paid three times over." },
            { "label": "20", "nudge": "This uses <i>k</i><sup>2</sup>, the right idea with the wrong exponent. The exponent is the order of the matrix, which is 3." },
            { "label": "40", "nudge": null },
            { "label": "80", "nudge": "This over-corrects to 2<sup>4</sup>. The exponent is exactly the order, so 2<sup>3</sup>." }
          ],
          "solution": "|kA| = kⁿ|A| = 2³ × 5 = 40. Contrast it with pulling a 2 out of one row, which multiplies the determinant by 2 alone."
        },
        {
          "t": "mcq",
          "q": "Without expanding, |<i>a</i> <i>b</i> <i>c</i> ; <i>a</i> + 2<i>x</i>  <i>b</i> + 2<i>y</i>  <i>c</i> + 2<i>z</i> ; <i>x</i> <i>y</i> <i>z</i>| equals:",
          "correct": 0,
          "opts": [
            { "label": "0", "nudge": null },
            { "label": "2 × |<i>a</i> <i>b</i> <i>c</i> ; <i>x</i> <i>y</i> <i>z</i> ; <i>x</i> <i>y</i> <i>z</i>|", "nudge": "Splitting off the 2 by P5 is legal, but it lands on a determinant with two identical rows, which is itself 0. So the route agrees with the answer, and the option is a disguised zero rather than an alternative to it." },
            { "label": "(<i>a</i> + <i>b</i> + <i>c</i>)(<i>x</i> + <i>y</i> + <i>z</i>)", "nudge": "A symmetric-looking product with nothing behind it. Determinants do not factor into products of row sums." },
            { "label": "<i>abc</i>", "nudge": "This reads the first row off as though the determinant were a product of diagonal entries, which is true only for a triangular array." }
          ],
          "solution": "Apply R₂ → R₂ − 2R₃. The middle row becomes (a, b, c), identical to R₁, so Δ = 0 by P3."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Evaluate using properties: |3 6 9 ; 1 2 4 ; 2 4 8|.",
              "a": "0. Rows R₂ = (1, 2, 4) and R₃ = (2, 4, 8) = 2R₂ are proportional, so P3 kills it. Note that R₁ = (3, 6, 9) is <i>not</i> proportional to them, which is the small trap: one proportional pair anywhere is enough."
            },
            {
              "q": "[JEE Main] <i>A</i> is 3 × 3 with |<i>A</i>| = 4. Find |3<i>A</i>| + |<i>A</i><sup>T</sup>|.",
              "a": "|3A| = 3³ × 4 = 108 and |Aᵀ| = |A| = 4, so the sum is 112. The whole question is the two different rules living side by side."
            },
            {
              "q": "[JEE Main] Evaluate |1  log<sub><i>x</i></sub><i>y</i>  log<sub><i>x</i></sub><i>z</i> ; log<sub><i>y</i></sub><i>x</i>  1  log<sub><i>y</i></sub><i>z</i> ; log<sub><i>z</i></sub><i>x</i>  log<sub><i>z</i></sub><i>y</i>  1|.",
              "a": "0. Rewrite every entry in one base, so that log of y to base x is (log y)/(log x) and so on. Row 1 is then (1/log x) times (log x, log y, log z), row 2 is (1/log y) times the same triple, and row 3 likewise. All three rows are proportional, so Δ = 0."
            },
            {
              "q": "[JEE Advanced] Prove that |<i>b</i> + <i>c</i>  <i>a</i>  <i>a</i> ; <i>b</i>  <i>c</i> + <i>a</i>  <i>b</i> ; <i>c</i>  <i>c</i>  <i>a</i> + <i>b</i>| = 4<i>abc</i>.",
              "a": "R₁ → R₁ − R₂ − R₃ makes the first row (0, −2c, −2b), so pull out −2: Δ = −2|0 <i>c</i> <i>b</i> ; <i>b</i>  <i>c</i> + <i>a</i>  <i>b</i> ; <i>c</i>  <i>c</i>  <i>a</i> + <i>b</i>|. Expanding along that first row gives −2[−bc(a + b − c) + bc(b − c − a)] = −2bc(−2a) = 4abc."
            },
            {
              "q": "[JEE Advanced] Find all real <i>k</i> for which the homogeneous system with coefficient rows (<i>k</i>, 1, −2), (−2, <i>k</i>, 1), (1, −2, <i>k</i>) has a non-trivial solution, and exhibit one.",
              "a": "The rows are (a, b, c), (c, a, b), (b, c, a) with a = k, b = 1, c = −2: the right-shift circulant, so Δ = +(k³ + 1 − 8 − 3k(1)(−2)) = k³ + 6k − 7. A non-trivial solution needs Δ = 0. Now k = 1 is a root, and the quotient k² + k + 7 has negative discriminant, so k = 1 is the only real value. There every row sums to 1 + 1 − 2 = 0, so (1, 1, 1) is a non-trivial solution."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Confusing <i>kR</i> with <i>kA</i>.</b> Pulling <i>k</i> out of <b>one</b> row multiplies Δ by <i>k</i>; multiplying the whole <i>n</i> × <i>n</i> matrix multiplies it by <i>k</i><sup><i>n</i></sup>. This is the single most punished slip in the chapter.",
            "<b>Doing two operations in one breath.</b> <i>R</i><sub>1</sub> → <i>R</i><sub>1</sub> + <i>R</i><sub>2</sub> together with <i>R</i><sub>2</sub> → <i>R</i><sub>2</sub> + <i>R</i><sub>1</sub> is invalid: the second must use the <b>original</b> rows. Perform one operation, rewrite the array, then perform the next.",
            "<b>Forgetting the sign on an interchange.</b> Every swap of two rows or two columns costs a factor of −1. Count them: an even number is free, an odd number leaves a minus you must carry to the end.",
            "<b>Thinking only equal lines give zero.</b> Proportional rows or columns force Δ = 0 just as hard, and so does any row that is a combination of the others. Check ratios, not just equality.",
            "<b>Expanding before scanning.</b> A zero line, a proportional pair or an equal row sum turns most of these questions into a one-line answer, and every second spent expanding first is a second spent inviting a sign error."
          ]
        },
        {
          "t": "protip",
          "html": "run the same five-second scan on every determinant you meet. one: is there a zero row or column? two: are any two rows or columns proportional? three: do the rows or columns share a common sum? the first two hand you zero on the spot. the third invites C₁ → C₁ + C₂ + C₃, which pulls a factor out in a single move. this scan defeats most board and jee determinant questions before any real work begins."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "|<i>A</i><sup>T</sup>| = |<i>A</i>|",
              "note": "so every row rule is also a column rule"
            },
            {
              "f": "<i>R</i><sub><i>i</i></sub> ↔ <i>R</i><sub><i>j</i></sub> ⇒ Δ → −Δ",
              "note": "one swap, one sign flip"
            },
            {
              "f": "identical OR proportional lines ⇒ Δ = 0",
              "note": "check ratios, not equality"
            },
            {
              "f": "one row × <i>k</i> pulls out <i>k</i> · |<i>kA</i>| = <i>k</i><sup><i>n</i></sup>|<i>A</i>|",
              "note": "one row against the whole matrix"
            },
            {
              "f": "<i>R</i><sub><i>i</i></sub> → <i>R</i><sub><i>i</i></sub> + <i>kR</i><sub><i>j</i></sub> (<i>i</i> ≠ <i>j</i>) leaves Δ alone",
              "note": "the shear, and the workhorse"
            },
            {
              "f": "triangular ⇒ Δ = product of the diagonal",
              "note": "the target every reduction aims at"
            },
            {
              "f": "circulant = ∓(<i>a</i><sup>3</sup> + <i>b</i><sup>3</sup> + <i>c</i><sup>3</sup> − 3<i>abc</i>)",
              "note": "left shift minus, right shift plus"
            }
          ],
          "aids": [
            "“swap flips, same is zero, scale pulls out, shear is safe”",
            "“k from one row costs k, k from the matrix costs k cubed”",
            "“equal row sums? add the columns into the first one”"
          ]
        }
      ]
    },
    {
      "n": "03",
      "title": "Area, Collinearity and Concurrency",
      "chip": "03 AREA",
      "kalam": "flatten the triangle and the determinant lands on zero",
      "blocks": [
        {
          "t": "p",
          "html": "In topic 02 a 2 × 2 determinant turned out to be the signed area of a parallelogram. A triangle is exactly half a parallelogram, so determinants are the natural tool for triangle area from coordinates. A surveyor marking three corner pegs of a triangular plot does not have to measure sides and angles: she drops the three coordinate pairs into one determinant and reads the area off. The determinant does all the trigonometry silently."
        },
        {
          "t": "p",
          "html": "Two details make it work. The <b>third column of 1s</b> is not decoration: it is what injects the <i>positions</i> of the points, rather than merely their differences, into a single array, and dropping it changes the meaning entirely. And the determinant returns a <b>signed</b> number, positive when the vertices are listed anticlockwise and negative when clockwise, so it needs both the ½ and the modulus before it is an area."
        },
        {
          "t": "think",
          "html": "the signed answer is a feature, not a nuisance. squash the triangle flat and the sign has nowhere to go, so the determinant lands exactly on zero. that one fact turns an area formula into a collinearity detector, and one step further into the equation of a line."
        },
        {
          "t": "def",
          "term": "Collinear points",
          "html": "Three points lie on one straight line exactly when the triangle they span has zero area. Comparing slopes tests the same thing but divides, so a vertical pair breaks it; the determinant never divides by anything and has no special case at all. That is why “find <i>k</i> so that these three points are collinear” is set every single year: it turns into one linear or quadratic equation in <i>k</i> with no case analysis anywhere."
        },
        {
          "t": "formula",
          "kicker": "AREA OF A TRIANGLE",
          "tag": "coordinates left, ones on the right",
          "main": "Area = ½ |Δ|,  Δ = |<i>x</i><sub>1</sub> <i>y</i><sub>1</sub> 1 ; <i>x</i><sub>2</sub> <i>y</i><sub>2</sub> 1 ; <i>x</i><sub>3</sub> <i>y</i><sub>3</sub> 1|",
          "legend": [
            "expanded, Δ = <i>x</i><sub>1</sub>(<i>y</i><sub>2</sub> − <i>y</i><sub>3</sub>) + <i>x</i><sub>2</sub>(<i>y</i><sub>3</sub> − <i>y</i><sub>1</sub>) + <i>x</i><sub>3</sub>(<i>y</i><sub>1</sub> − <i>y</i><sub>2</sub>)",
            "the ½ is there because the determinant measures the parallelogram, and a triangle is half of it",
            "the modulus is there because listing the vertices clockwise returns the same number with a minus in front"
          ],
          "note": "Both are mandatory, and an area equation such as ½|Δ| = 5 therefore splits into <b>two</b> branches, Δ = 10 and Δ = −10. Losing one branch is worth a whole question, and the exam bank is full of items where both branches are keyed."
        },
        {
          "t": "formula",
          "kicker": "COLLINEARITY, AND THE LINE THROUGH TWO POINTS",
          "tag": "the same determinant, set to zero",
          "main": "|<i>x</i> <i>y</i> 1 ; <i>x</i><sub>1</sub> <i>y</i><sub>1</sub> 1 ; <i>x</i><sub>2</sub> <i>y</i><sub>2</sub> 1| = 0",
          "legend": [
            "with three fixed points this is the collinearity test: zero area means no triangle, which means one line",
            "with a variable point (<i>x</i>, <i>y</i>) in the first row it <b>is</b> the line through the two fixed points, since the equation forces (<i>x</i>, <i>y</i>) to be collinear with them",
            "expanding it returns the familiar two-point form <i>y</i> − <i>y</i><sub>1</sub> = [(<i>y</i><sub>2</sub> − <i>y</i><sub>1</sub>)/(<i>x</i><sub>2</sub> − <i>x</i><sub>1</sub>)](<i>x</i> − <i>x</i><sub>1</sub>), already cleared of fractions"
          ],
          "note": "No ½ and no modulus here. Those belong to areas alone, and zero is zero either way, so setting Δ = 0 needs neither."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "DIAGRAM · AREA, FLATNESS, AND A PARAMETER",
          "chips": ["Area 6.5", "Flat, so zero", "Solve for k", "Locus of area 2"],
          "captions": [
            "Vertices A(1, 2), B(3, 5) and C(−2, 4). The determinant with those coordinates and a column of 1s comes out to 13, so the area is half of 13, that is 6.5 square units. No side length and no angle was ever measured.",
            "The points (1, 1), (2, 3) and (3, 5) all sit on the line y = 2x − 1. The triangle has collapsed onto that line: zero height, zero area, and the determinant lands exactly on 0. Collinearity is not a separate test, it is the area formula honestly reporting flat.",
            "Fix (−3, 4) and (7, −1) and let the third vertex be (k, 2). Setting the determinant to zero gives 5k − 5 = 0, so k = 1, and the point (1, 2) sits on the line through the other two. The hollow point at (4, 2) is a value of k that fails: it lies off the line, and the determinant there is not zero.",
            "Now let P(x, y) be free and demand that the triangle P, (1, 0), (0, 1) always have area 2. The determinant is 1 − x − y, so half its modulus equal to 2 gives x + y = 5 or x + y = −3. The locus is a pair of parallel lines, one on each side, which is exactly what the modulus was telling you."
          ],
          "frames": [
            {
              "x": [-4, 6],
              "y": [-1, 7],
              "polygons": [{ "points": [[1, 2], [3, 5], [-2, 4]], "corners": true }],
              "labels": [
                { "x": 1.2, "y": 1.4, "text": "A(1, 2)" },
                { "x": 3.2, "y": 5.5, "text": "B(3, 5)" },
                { "x": -3.1, "y": 4.4, "text": "C(−2, 4)" },
                { "x": 0.6, "y": 3.7, "text": "area 6.5" }
              ]
            },
            {
              "x": [-1, 6],
              "y": [-1, 7],
              "curves": [{ "c": "line", "m": 2, "k": -1, "soft": true }],
              "points": [
                { "x": 1, "y": 1, "label": "(1, 1)" },
                { "x": 2, "y": 3, "label": "(2, 3)" },
                { "x": 3, "y": 5, "label": "(3, 5)" }
              ],
              "labels": [{ "x": 3.6, "y": 3.2, "text": "no height, so no area" }]
            },
            {
              "x": [-5, 9],
              "y": [-3, 6],
              "curves": [{ "c": "line", "m": -0.5, "k": 2.5 }],
              "points": [
                { "x": -3, "y": 4, "label": "(−3, 4)" },
                { "x": 7, "y": -1, "label": "(7, −1)" },
                { "x": 1, "y": 2, "label": "k = 1 works" },
                { "x": 4, "y": 2, "label": "k = 4 fails", "open": true }
              ]
            },
            {
              "x": [-5, 7],
              "y": [-5, 7],
              "curves": [
                { "c": "line", "m": -1, "k": 5 },
                { "c": "line", "m": -1, "k": -3 }
              ],
              "points": [
                { "x": 1, "y": 0, "label": "(1, 0)" },
                { "x": 0, "y": 1, "label": "(0, 1)" }
              ],
              "labels": [
                { "x": 3.4, "y": 2.4, "text": "x + y = 5" },
                { "x": -2.4, "y": -1.2, "text": "x + y = −3" }
              ]
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY HALF THE DETERMINANT IS THE AREA",
          "steps": [
            {
              "eq": "signed area = ½[(<i>x</i><sub>1</sub><i>y</i><sub>2</sub> − <i>x</i><sub>2</sub><i>y</i><sub>1</sub>) + (<i>x</i><sub>2</sub><i>y</i><sub>3</sub> − <i>x</i><sub>3</sub><i>y</i><sub>2</sub>) + (<i>x</i><sub>3</sub><i>y</i><sub>1</sub> − <i>x</i><sub>1</sub><i>y</i><sub>3</sub>)]",
              "why": "This is the shoelace sum, got by writing the region under each edge as a trapezium and taking the differences. It is elementary but tedious, and it is the only geometric input in the whole proof."
            },
            {
              "eq": "Δ = |<i>x</i><sub>1</sub> <i>y</i><sub>1</sub> 1 ; <i>x</i><sub>2</sub> <i>y</i><sub>2</sub> 1 ; <i>x</i><sub>3</sub> <i>y</i><sub>3</sub> 1|, expanded along column 3",
              "why": "Column 3 is all 1s, which is the zero-poorest line but the tidiest: each term is 1 times a 2 by 2 of coordinates, carrying the checkerboard signs plus, minus, plus."
            },
            {
              "eq": "Δ = (<i>x</i><sub>2</sub><i>y</i><sub>3</sub> − <i>x</i><sub>3</sub><i>y</i><sub>2</sub>) − (<i>x</i><sub>1</sub><i>y</i><sub>3</sub> − <i>x</i><sub>3</sub><i>y</i><sub>1</sub>) + (<i>x</i><sub>1</sub><i>y</i><sub>2</sub> − <i>x</i><sub>2</sub><i>y</i><sub>1</sub>)",
              "why": "Read the three 2 by 2 minors off. Every product of one coordinate with another appears exactly once, which is the sign that nothing has been double counted."
            },
            {
              "eq": "Δ = 2 × (signed area)",
              "why": "The three brackets are precisely the three brackets of step 1, sign for sign. So the bare determinant is twice the signed area, and the third column of 1s is what turned three coordinate pairs into the shoelace sum automatically."
            },
            {
              "eq": "Area = ½|Δ|",
              "why": "Halve it to undo the doubling and take the modulus to discard the orientation. Setting Δ = 0 needs neither, which is exactly why the collinearity test is cleaner than the area formula it came from."
            }
          ]
        },
        {
          "t": "proc",
          "title": "Reading the area determinant three ways",
          "steps": [
            "<b>Build the array.</b> Coordinates in the first two columns, a column of 1s on the right. Keep the vertices in whatever order the question gave them; the order only decides the sign.",
            "<b>Expand along column 3</b>, which is all 1s, so each term is just a 2 × 2 of coordinates carrying the signs + − +.",
            "<b>For an area</b>, take ½ times the modulus. If the question sets the area equal to a number, remember the modulus splits it into two branches and solve both.",
            "<b>For collinearity</b>, set the determinant to 0 and solve for the unknown. No ½ and no modulus.",
            "<b>For the line through two points</b>, put (<i>x</i>, <i>y</i>, 1) in the first row, the two known points below, and set the determinant to 0. Expanding gives the equation directly.",
            "<b>Sanity check.</b> A zero determinant means there is no triangle, so do not then quote an area for it. And an area of 0 in a question that promised you a triangle means an arithmetic slip, not a degenerate answer."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Find the area of the triangle with vertices (1, 2), (3, 5) and (−2, 4).",
          "steps": [
            "Δ = |1 2 1 ; 3 5 1 ; −2 4 1|. Expanding along row 1: 1(5 − 4) − 2(3 + 2) + 1(12 + 10).",
            "= 1 − 10 + 22 = 13.",
            "Area = ½ × |13| = 13/2."
          ],
          "ans": "6.5 square units"
        },
        {
          "t": "ex",
          "tag": "SPEED TRAP",
          "q": "Are (1, 1), (2, 3) and (3, 5) collinear?",
          "steps": [
            "With integers this clean, compare slopes first. From the first point to the second, (3 − 1)/(2 − 1) = 2; from the second to the third, (5 − 3)/(3 − 2) = 2.",
            "Equal slopes, so collinear, in five seconds and with no determinant at all.",
            "The determinant confirms it: |1 1 1 ; 2 3 1 ; 3 5 1| = 1(3 − 5) − 1(2 − 3) + 1(10 − 9) = −2 + 1 + 1 = 0. Reserve the determinant for messy coordinates or for a parameter, where it gives a clean equation and slopes give a mess."
          ],
          "ans": "Collinear"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Find <i>k</i> so that (<i>k</i>, 2), (−3, 4) and (7, −1) are collinear.",
          "steps": [
            "Collinear means the determinant is 0: |k 2 1 ; −3 4 1 ; 7 −1 1| = 0.",
            "Expand along row 1: k(4 + 1) − 2(−3 − 7) + 1(3 − 28) = 5k + 20 − 25.",
            "So 5k − 5 = 0 and k = 1. Notice that the determinant produced one linear equation with no case analysis. A slope comparison would have made you worry about k = −3 and k = 7 separately."
          ],
          "ans": "k = 1"
        },
        {
          "t": "p",
          "html": "The same determinant answers a question about <b>lines</b> rather than points. Three lines <i>a</i><sub><i>i</i></sub><i>x</i> + <i>b</i><sub><i>i</i></sub><i>y</i> + <i>c</i><sub><i>i</i></sub> = 0 are <b>concurrent</b> when they all pass through one point. Solve the first two by Cramer's rule (topic 05), substitute the answer into the third, and what appears in the numerator is exactly the cofactor expansion of the 3 × 3 coefficient determinant along row 3. So the third line passes through the intersection of the other two precisely when that determinant vanishes."
        },
        {
          "t": "formula",
          "kicker": "CONCURRENCY OF THREE LINES",
          "tag": "coefficients in, constants included",
          "main": "|<i>a</i><sub>1</sub> <i>b</i><sub>1</sub> <i>c</i><sub>1</sub> ; <i>a</i><sub>2</sub> <i>b</i><sub>2</sub> <i>c</i><sub>2</sub> ; <i>a</i><sub>3</sub> <i>b</i><sub>3</sub> <i>c</i><sub>3</sub>| = 0",
          "legend": [
            "each row is one line's coefficients, constant term included, and every line must first be written in the form <i>ax</i> + <i>by</i> + <i>c</i> = 0",
            "if a common point (<i>x</i><sub>0</sub>, <i>y</i><sub>0</sub>) exists then (<i>x</i><sub>0</sub>, <i>y</i><sub>0</sub>, 1) is a non-zero solution of the associated homogeneous system, which forces the determinant to 0",
            "the converse needs a hypothesis: the three lines must not be parallel"
          ],
          "note": "The caution is real and examiners use it. The lines <i>x</i> + <i>y</i> − 1 = 0, <i>x</i> + <i>y</i> − 2 = 0 and 2<i>x</i> + 2<i>y</i> − 5 = 0 have determinant 0, because columns 1 and 2 are identical, and yet they are three parallel lines with no common point at all. A vanishing determinant signals dependent rows, and that is concurrency only when the lines are pairwise non-parallel."
        },
        {
          "t": "p",
          "html": "One further consequence, and it saves real time. If <i>L</i><sub>1</sub> = 0 and <i>L</i><sub>2</sub> = 0 meet at <i>P</i>, then <i>L</i><sub>1</sub> + λ<i>L</i><sub>2</sub> = 0 passes through <i>P</i> for every real λ, because both summands vanish there. Conversely every line through <i>P</i> except <i>L</i><sub>2</sub> itself arises for exactly one λ. To pick the member that also passes through some further point <i>Q</i>, substitute <i>Q</i> and solve a <b>linear</b> equation in λ. The intersection point is never computed."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "DIAGRAM · THREE LINES, THREE OUTCOMES",
          "chips": ["Concurrent", "The parallel trap", "A triangle instead"],
          "captions": [
            "x + 2y − 4 = 0, 2x + y − 5 = 0 and 3x + 3y − 9 = 0. The coefficient determinant is 0, and the first two lines are not parallel, so the test applies and all three really do meet, at (2, 1). Substituting into the third confirms it: 6 + 3 − 9 = 0.",
            "x + y − 1 = 0, x + y − 2 = 0 and 2x + 2y − 5 = 0. The determinant is 0 here as well, because its first two columns are identical, and yet there is no common point anywhere: the three lines are parallel. Glance for parallelism before you believe a zero.",
            "x + y = 6, x − y = 2 and y = 2x. Here the determinant is −12, not zero, so the lines are not concurrent and they bound a triangle instead, with vertices (4, 2), (2, 4) and (−2, −4). The cyclic sum comes to 24, so the area is 12 square units."
          ],
          "frames": [
            {
              "x": [-1, 6],
              "y": [-2, 6],
              "curves": [
                { "c": "line", "m": -0.5, "k": 2 },
                { "c": "line", "m": -2, "k": 5 },
                { "c": "line", "m": -1, "k": 3 }
              ],
              "points": [{ "x": 2, "y": 1, "label": "(2, 1)" }]
            },
            {
              "x": [-1, 5],
              "y": [-1, 5],
              "curves": [
                { "c": "line", "m": -1, "k": 1 },
                { "c": "line", "m": -1, "k": 2 },
                { "c": "line", "m": -1, "k": 2.5 }
              ],
              "labels": [{ "x": 2.4, "y": 3.6, "text": "no common point" }]
            },
            {
              "x": [-4, 7],
              "y": [-6, 7],
              "curves": [
                { "c": "line", "m": -1, "k": 6 },
                { "c": "line", "m": 1, "k": -2 },
                { "c": "line", "m": 2, "k": 0 }
              ],
              "polygons": [{ "points": [[4, 2], [2, 4], [-2, -4]], "corners": true }],
              "labels": [{ "x": 2.4, "y": 0.6, "text": "area 12" }]
            }
          ]
        },
        {
          "t": "defgrid",
          "title": "One determinant, five jobs",
          "rows": [
            {
              "k": "Area of a triangle",
              "v": "½|Δ|, with the vertices in the first two columns and 1s in the third"
            },
            {
              "k": "Collinearity",
              "v": "Δ = 0. No ½ and no modulus, because zero is zero"
            },
            {
              "k": "Line through two points",
              "v": "put (<i>x</i>, <i>y</i>, 1) in row 1, the two points below, and set Δ = 0"
            },
            {
              "k": "Concurrency of three lines",
              "v": "coefficients including constants as the rows, Δ = 0, provided no two lines are parallel"
            },
            {
              "k": "Family through an intersection",
              "v": "<i>L</i><sub>1</sub> + λ<i>L</i><sub>2</sub> = 0, then substitute a second point and solve for λ"
            },
            {
              "k": "Area of a polygon",
              "v": "½ of the cyclic sum (<i>x</i><sub>1</sub><i>y</i><sub>2</sub> − <i>x</i><sub>2</sub><i>y</i><sub>1</sub>) + ... + (<i>x</i><sub><i>n</i></sub><i>y</i><sub>1</sub> − <i>x</i><sub>1</sub><i>y</i><sub><i>n</i></sub>), vertices in order round the boundary"
            }
          ]
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Show that <i>x</i> + 2<i>y</i> − 4 = 0, 2<i>x</i> + <i>y</i> − 5 = 0 and 3<i>x</i> + 3<i>y</i> − 9 = 0 are concurrent, and find the point.",
          "steps": [
            "First check the test applies: for the first two lines, 1 × 1 − 2 × 2 = −3, which is not zero, so they are not parallel.",
            "Now the coefficient determinant, expanded along row 3: 3|2 −4 ; 1 −5| − 3|1 −4 ; 2 −5| + (−9)|1 2 ; 2 1| = 3(−10 + 4) − 3(−5 + 8) − 9(1 − 4) = −18 − 9 + 27 = 0.",
            "Concurrent. Solving the first two: doubling the first and subtracting the second gives 3y = 3, so y = 1 and x = 2. Check the third: 6 + 3 − 9 = 0."
          ],
          "ans": "Concurrent at (2, 1)"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "Find the area of the quadrilateral with vertices (1, 2), (5, 5), (4, 8) and (0, 7), listed in that order.",
          "steps": [
            "You do not have to split it into triangles. The cyclic sum handles any number of sides, provided the vertices are listed in order round the boundary.",
            "(1 × 5 − 5 × 2) + (5 × 8 − 4 × 5) + (4 × 7 − 0 × 8) + (0 × 2 − 1 × 7) = −5 + 20 + 28 − 7 = 36.",
            "Area = ½ × |36| = 18. Cross-check by cutting along the diagonal from (1, 2) to (4, 8): the two triangles come to 7.5 and 10.5, which is 18."
          ],
          "ans": "18 square units"
        },
        {
          "t": "mcq",
          "q": "The area of the triangle with vertices (0, 0), (3, 0) and (0, 4) is:",
          "correct": 1,
          "opts": [
            { "label": "12", "nudge": "This is the bare determinant, which measures the parallelogram. The ½ is still owed." },
            { "label": "6", "nudge": null },
            { "label": "7", "nudge": "This added the two legs, 3 and 4. Adding lengths never produces an area." },
            { "label": "24", "nudge": "This doubled the determinant instead of halving it, so it is four times the right answer." }
          ],
          "solution": "Δ = |0 0 1 ; 3 0 1 ; 0 4 1| = 12, so the area is ½ × 12 = 6. Or simply ½ × base × height = ½ × 3 × 4."
        },
        {
          "t": "mcq",
          "q": "If (2, −3), (λ, 1) and (0, 4) are collinear, then λ equals:",
          "correct": 0,
          "opts": [
            { "label": "6/7", "nudge": null },
            { "label": "−6/7", "nudge": "A sign was flipped in the expansion. The −3 entry carries a minus from the sign board, and two minuses make that term +3λ." },
            { "label": "7/6", "nudge": "This inverted the final fraction. From 7λ − 6 = 0 you divide by 7, not by 6." },
            { "label": "2/7", "nudge": "This mishandled the cofactor of the −3 entry and lost the 4λ that the third term contributes." }
          ],
          "solution": "Set |2 −3 1 ; λ 1 1 ; 0 4 1| = 0 and expand along row 1: 2(1 − 4) + 3(λ − 0) + 1(4λ − 0) = −6 + 3λ + 4λ = 7λ − 6, so λ = 6/7."
        },
        {
          "t": "mcq",
          "q": "The factor of ½ in the area formula is there because:",
          "correct": 1,
          "opts": [
            { "label": "a determinant is always halved", "nudge": "Nothing about a determinant is halved in general. The ½ comes from geometry, not from the algebra." },
            { "label": "a triangle is half the parallelogram its two edges span", "nudge": null },
            { "label": "of the modulus", "nudge": "The modulus explains why a clockwise listing does not give a negative area. It says nothing about the size." },
            { "label": "there are three vertices", "nudge": "The vertex count is not what sets the scale. A polygon area also carries a ½, whatever the number of vertices." }
          ],
          "solution": "The determinant measures the parallelogram spanned by the edges, which is twice the triangle. Halving recovers the triangle; the modulus separately discards the orientation."
        },
        {
          "t": "mcq",
          "q": "Three lines have coefficient determinant 0. It follows that:",
          "correct": 2,
          "opts": [
            { "label": "they are always concurrent", "nudge": "This is the converse stated without its hypothesis. Three parallel lines can give a zero determinant and share no point at all." },
            { "label": "they are always parallel", "nudge": "Concurrent lines give zero too, and they are as far from parallel as lines get." },
            { "label": "their coefficient rows are dependent, so they are concurrent provided no two are parallel", "nudge": null },
            { "label": "the three lines coincide", "nudge": "Coincident lines certainly give zero, but so do plenty of configurations in which the three lines are perfectly distinct." }
          ],
          "solution": "A zero determinant means the three coefficient rows are linearly dependent. When no two lines are parallel that dependence forces a common point; when two are parallel it does not. The standard counterexample is x + y − 1 = 0, x + y − 2 = 0 and 2x + 2y − 5 = 0."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Find the area of the triangle with vertices (0, 0), (4, 0) and (0, 6).",
              "a": "Δ = |0 0 1 ; 4 0 1 ; 0 6 1| = 24, so the area is 12 square units. The right angle at the origin makes ½ × 4 × 6 an instant check."
            },
            {
              "q": "[JEE Main] The triangle with vertices (λ, 2), (1, 3) and (4, −1) has area 11/2. Find λ.",
              "a": "Δ = λ(3 + 1) − 2(1 − 4) + 1(−1 − 12) = 4λ + 6 − 13 = 4λ − 7. Then ½|4λ − 7| = 11/2 gives |4λ − 7| = 11, so 4λ = 18 or 4λ = −4, that is λ = 9/2 or λ = −1. Both branches count."
            },
            {
              "q": "[JEE Main] Find the equation of the line through (2, 3) and (−1, 5) using a determinant.",
              "a": "|x y 1 ; 2 3 1 ; −1 5 1| = 0 gives x(3 − 5) − y(2 + 1) + (10 + 3) = 0, that is −2x − 3y + 13 = 0, or 2x + 3y − 13 = 0. Check both points: 4 + 9 − 13 = 0 and −2 + 15 − 13 = 0."
            },
            {
              "q": "[JEE Main] Find <i>k</i> so that <i>x</i> + <i>y</i> − 2 = 0, 2<i>x</i> − <i>y</i> − 1 = 0 and 3<i>x</i> + <i>ky</i> − 4 = 0 are concurrent, and give the point.",
              "a": "Expand |1 1 −2 ; 2 −1 −1 ; 3 k −4| along row 3: 3(−1 − 2) − k(−1 + 4) − 4(−1 − 2) = −9 − 3k + 12 = 3 − 3k, so k = 1. The first two lines meet where x + y = 2 and 2x − y = 1, that is (1, 1), and 3 + 1 − 4 = 0 confirms it."
            },
            {
              "q": "[JEE Advanced] If (<i>a</i>, 0), (0, <i>b</i>) and (1, 1) are collinear with <i>a</i> ≠ 0 and <i>b</i> ≠ 0, prove that 1/<i>a</i> + 1/<i>b</i> = 1.",
              "a": "|a 0 1 ; 0 b 1 ; 1 1 1| = a(b − 1) − 0(0 − 1) + 1(0 − b) = ab − a − b = 0. Divide through by ab: 1 − 1/b − 1/a = 0, that is 1/a + 1/b = 1. Geometrically the line has intercepts a and b, so it is x/a + y/b = 1, and demanding that it pass through (1, 1) says exactly the same thing."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Dropping the ½ or the modulus.</b> The bare determinant is <b>twice</b> the signed area. An area needs both, every time.",
            "<b>Reporting a negative area.</b> A negative determinant only means you listed the vertices clockwise. Take the modulus and move on.",
            "<b>Losing a branch.</b> ½|Δ| = <i>K</i> is two equations, Δ = 2<i>K</i> and Δ = −2<i>K</i>. Solving only the first is a whole question lost on any item that keys both.",
            "<b>Omitting the column of 1s.</b> Without it the array no longer encodes the positions of the points, and the number it returns is not an area at all.",
            "<b>Trusting a zero concurrency determinant blindly.</b> It certifies dependent rows, not a common point. Check that no two of the three lines are parallel first.",
            "<b>Quoting an area after a zero determinant.</b> Zero means the three points are collinear and there is no triangle. Say so, rather than reporting an area of 0 square units as though it were a measurement."
          ]
        },
        {
          "t": "protip",
          "html": "for collinearity with clean integer coordinates, compare slopes. it is faster than any determinant and there is nothing to expand. save the determinant for messy coordinates and for parameters, where setting it to zero hands you one tidy linear or quadratic equation and no case analysis at all. and whenever a question sets an area equal to a number, write both branches down before you start solving either one."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "Area = ½|Δ|, Δ = |<i>x</i><sub>1</sub> <i>y</i><sub>1</sub> 1 ; <i>x</i><sub>2</sub> <i>y</i><sub>2</sub> 1 ; <i>x</i><sub>3</sub> <i>y</i><sub>3</sub> 1|",
              "note": "the column of 1s is mandatory"
            },
            {
              "f": "Δ = <i>x</i><sub>1</sub>(<i>y</i><sub>2</sub> − <i>y</i><sub>3</sub>) + <i>x</i><sub>2</sub>(<i>y</i><sub>3</sub> − <i>y</i><sub>1</sub>) + <i>x</i><sub>3</sub>(<i>y</i><sub>1</sub> − <i>y</i><sub>2</sub>)",
              "note": "expand along the column of 1s"
            },
            {
              "f": "collinear ⟺ Δ = 0",
              "note": "no half, no modulus, no special case"
            },
            {
              "f": "line through two points: (<i>x</i>, <i>y</i>, 1) on top, Δ = 0",
              "note": "expands to the two-point form"
            },
            {
              "f": "concurrent: |<i>a</i><sub>1</sub> <i>b</i><sub>1</sub> <i>c</i><sub>1</sub> ; <i>a</i><sub>2</sub> <i>b</i><sub>2</sub> <i>c</i><sub>2</sub> ; <i>a</i><sub>3</sub> <i>b</i><sub>3</sub> <i>c</i><sub>3</sub>| = 0",
              "note": "only when no two lines are parallel"
            },
            {
              "f": "family through <i>P</i>: <i>L</i><sub>1</sub> + λ<i>L</i><sub>2</sub> = 0",
              "note": "never compute the intersection"
            },
            {
              "f": "polygon: ½ of the cyclic sum of <i>x</i><sub><i>i</i></sub><i>y</i><sub><i>i</i>+1</sub> − <i>x</i><sub><i>i</i>+1</sub><i>y</i><sub><i>i</i></sub>",
              "note": "vertices in order round the boundary"
            }
          ],
          "aids": [
            "“coordinates left, ones on the right, half the size, take it positive”",
            "“zero area means in a row”",
            "“a zero concurrency determinant still owes you a parallelism check”"
          ]
        }
      ]
    },
    {
      "n": "04",
      "title": "Minors, Cofactors and the Adjoint",
      "chip": "04 COFACTORS",
      "kalam": "cover a row and a column, and look at what survives",
      "blocks": [
        {
          "t": "p",
          "html": "Picture a 3 × 3 scoreboard at a gully-cricket tournament: three teams down the side, three statistics across the top, nine cells in all. To judge the weight of one particular cell, say row 2 column 3, the determinant does something beautifully simple. <b>Cover that whole row and that whole column</b>, and look only at the smaller grid that survives. What is left of a 3 × 3 is a tidy 2 × 2, and its determinant is the <b>minor</b> of the entry you covered, written <i>M</i><sub>23</sub>."
        },
        {
          "t": "p",
          "html": "A <b>cofactor</b> is a minor with a sign stuck on it, and the sign follows the black-and-white pattern of a carrom board: + − + / − + − / + − +. Formally the colour of position (<i>i</i>, <i>j</i>) is (−1)<sup><i>i</i>+<i>j</i></sup>, plus when <i>i</i> + <i>j</i> is even and minus when it is odd, so <i>C</i><sub><i>ij</i></sub> = (−1)<sup><i>i</i>+<i>j</i></sup><i>M</i><sub><i>ij</i></sub>. Why bother attaching a sign? Because baking the alternation into the minor lets you write one clean sign-free rule: <b>the determinant is the sum of each entry times its own cofactor, along any single row or column</b>."
        },
        {
          "t": "think",
          "html": "a cofactor is the sensitivity of the determinant to one entry. nudge that entry up a little and Δ changes by exactly its cofactor, which is what ∂Δ/∂a means here. a row of tiny entries paired with huge cofactors can still produce a huge determinant, because each entry's leverage is its cofactor and not its size."
        },
        {
          "t": "def",
          "term": "Minor",
          "html": "The minor <i>M</i><sub><i>ij</i></sub> of the entry <i>a</i><sub><i>ij</i></sub> is the determinant of the array left after deleting row <i>i</i> and column <i>j</i>. For a 3 × 3 every minor is a 2 × 2 determinant; for a 4 × 4 every minor is a 3 × 3 determinant, and so on down. Minors exist only for <b>square</b> arrays, because the surviving sub-grid must itself be square, and the indices start at 1: an off-by-one in the sign exponent flips every single sign."
        },
        {
          "t": "def",
          "term": "Cofactor",
          "html": "<i>C</i><sub><i>ij</i></sub> = (−1)<sup><i>i</i>+<i>j</i></sup><i>M</i><sub><i>ij</i></sub>, the minor with its board sign attached. NCERT writes the same object as <i>A</i><sub><i>ij</i></sub>, so recognise both notations; they are identical. Reporting the minor when the cofactor was asked for, or the reverse, is the most common error in this topic and it costs the whole mark."
        },
        {
          "t": "p",
          "html": "Two facts fall straight out of this picture, and between them they govern almost every exam question here. First, <b>expand along any row or column and you get the same determinant</b>, which is a licence to always choose the line carrying the most zeros: a zero entry kills its whole cofactor term and saves you a 2 × 2 evaluation. Second, <b>pair a row's entries with a different row's cofactors and you get exactly zero</b>, because you are secretly evaluating a determinant in which one row has been duplicated."
        },
        {
          "t": "formula",
          "kicker": "LAPLACE EXPANSION, AND THE CROSS SUM",
          "tag": "same row gives delta, different row gives zero",
          "main": "Σ<sub><i>j</i></sub> <i>a</i><sub><i>ij</i></sub><i>C</i><sub><i>kj</i></sub> = Δ δ<sub><i>ik</i></sub>",
          "legend": [
            "when <i>i</i> = <i>k</i> this is the cofactor expansion along row <i>i</i>, and it returns Δ for every choice of <i>i</i>",
            "when <i>i</i> ≠ <i>k</i> it returns exactly 0: replacing row <i>k</i> by a copy of row <i>i</i> does not change the cofactors <i>C</i><sub><i>kj</i></sub>, since those are computed by deleting row <i>k</i>, and the new array has two identical rows",
            "δ<sub><i>ik</i></sub> is the Kronecker delta, 1 when the indices agree and 0 otherwise, which is a compact way of writing both statements at once"
          ],
          "note": "The column version reads the same way. The trap is memorising “entries times cofactors gives |<i>A</i>|” and forgetting that the cofactors must come from the <b>same</b> line. A different line gives 0, and that is not an accident: it is the whole engine behind the adjoint."
        },
        {
          "t": "p",
          "html": "Those nine cofactors are worth assembling into a matrix of their own. Transpose that matrix and you get the <b>adjoint</b> of <i>A</i>, written adj <i>A</i>. The transpose is not decoration: it is what lines the cross sums up correctly, so that the product <i>A</i>(adj <i>A</i>) has genuine cofactor expansions down its diagonal and cross sums everywhere else. The result is the single most useful identity in the chapter, and topic 05 turns it into the inverse."
        },
        {
          "t": "formula",
          "kicker": "THE ADJOINT AND ITS DETERMINANT",
          "tag": "adj drops the power by one",
          "main": "adj <i>A</i> = [<i>C</i><sub><i>ij</i></sub>]<sup>T</sup>,  <i>A</i>(adj <i>A</i>) = |<i>A</i>|<i>I</i>,  |adj <i>A</i>| = |<i>A</i>|<sup><i>n</i>−1</sup>",
          "legend": [
            "the adjoint is the <b>transpose</b> of the cofactor matrix, and skipping the transpose is the classic lost mark",
            "the middle identity is the cross-sum statement written as a matrix product: diagonal entries are genuine expansions and give |<i>A</i>|, off-diagonal entries are cross sums and give 0",
            "for order 3 the last identity reads |adj <i>A</i>| = |<i>A</i>|<sup>2</sup>, and iterating gives |adj(adj <i>A</i>)| = |<i>A</i>|<sup>4</sup>"
          ],
          "note": "The exponent is <i>n</i> − 1, never <i>n</i>. Writing |<i>A</i>|<sup>3</sup> for a 3 × 3 is the most common power-cofactor mistake in the exam bank, and it appears as a keyed distractor in more than one paper."
        },
        {
          "t": "defgrid",
          "title": "The adjoint ladder at order 3",
          "rows": [
            {
              "k": "|adj <i>A</i>|",
              "v": "|<i>A</i>|<sup>2</sup>, from |adj <i>A</i>| = |<i>A</i>|<sup><i>n</i>−1</sup>"
            },
            {
              "k": "|adj(adj <i>A</i>)|",
              "v": "|<i>A</i>|<sup>4</sup>, since the iterated exponent is (<i>n</i> − 1)<sup>2</sup> = 4"
            },
            {
              "k": "adj(adj <i>A</i>)",
              "v": "|<i>A</i>|<sup><i>n</i>−2</sup><i>A</i>, which at <i>n</i> = 3 is |<i>A</i>|<i>A</i>: a matrix, not a number"
            },
            {
              "k": "adj(<i>AB</i>)",
              "v": "(adj <i>B</i>)(adj <i>A</i>), reversed, exactly like the inverse of a product"
            },
            {
              "k": "adj(<i>kA</i>)",
              "v": "<i>k</i><sup><i>n</i>−1</sup> adj <i>A</i>, so <i>k</i><sup>2</sup> adj <i>A</i> at order 3"
            },
            {
              "k": "|<i>C</i>|, the cofactor matrix",
              "v": "the same as |adj <i>A</i>|, since adj <i>A</i> = <i>C</i><sup>T</sup> and a transpose changes nothing"
            }
          ]
        },
        {
          "t": "proc",
          "title": "Computing the nine cofactors, and delta, without slipping",
          "steps": [
            "<b>Write the sign board once</b>, + − + / − + − / + − +, at the top of your working. Read the signs off it, and never recompute (−1)<sup><i>i</i>+<i>j</i></sup> nine separate times.",
            "<b>Fix an entry, strike out its row and column</b>, and read the surviving 2 × 2 off in its natural order: top row first, left column first. Reordering it silently flips the sign.",
            "<b>Evaluate that 2 × 2</b> to get the minor <i>M</i><sub><i>ij</i></sub>, then stamp the board sign to get the cofactor <i>C</i><sub><i>ij</i></sub>.",
            "<b>For the determinant, pick the zero-richest line</b> and add entry times its own cofactor along it. You never need all nine cofactors for a determinant, only for an adjoint.",
            "<b>For the adjoint, compute all nine and then transpose.</b> Write the cofactor matrix and the adjoint as two separate arrays: the transpose is a mark-bearing step and the examiner wants to see it.",
            "<b>Check along a second line.</b> Expanding along a different row must give the identical number, and when it does not the culprit is almost always a board sign."
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY THE ADJOINT DETERMINANT DROPS THE POWER BY ONE",
          "steps": [
            {
              "eq": "[<i>A</i>(adj <i>A</i>)]<sub><i>ik</i></sub> = Σ<sub><i>j</i></sub> <i>a</i><sub><i>ij</i></sub>(adj <i>A</i>)<sub><i>jk</i></sub> = Σ<sub><i>j</i></sub> <i>a</i><sub><i>ij</i></sub><i>C</i><sub><i>kj</i></sub>",
              "why": "Write out one entry of the product. The adjoint is the transpose of the cofactor matrix, so its entry in position (j, k) is the cofactor C with indices k and j, and the index k lands on the cofactor's row."
            },
            {
              "eq": "<i>A</i>(adj <i>A</i>) = |<i>A</i>|<i>I</i>",
              "why": "By the cross-sum identity that sum is Δ when i = k and 0 otherwise. So every diagonal entry is |A| and every off-diagonal entry is 0, which is exactly |A| times the identity matrix."
            },
            {
              "eq": "|<i>A</i>| · |adj <i>A</i>| = ||<i>A</i>|<i>I</i>| = |<i>A</i>|<sup><i>n</i></sup>",
              "why": "Take determinants of both sides. The left uses the multiplicative property |XY| = |X||Y|; the right uses |kI| = kⁿ, because scaling the identity scales all n of its rows."
            },
            {
              "eq": "|adj <i>A</i>| = |<i>A</i>|<sup><i>n</i>−1</sup>",
              "why": "Divide by |A|, which is legal whenever A is non-singular. The singular case follows by a limiting argument, and for exam purposes the formula is used exactly as stated."
            },
            {
              "eq": "<i>A</i><sup>−1</sup> = (1/|<i>A</i>|) adj <i>A</i>",
              "why": "Divide the step-2 identity by |A| instead of taking determinants. The entire inverse formula of topic 05 rests on a cofactor fact proved right here, which is what makes this chapter a chain rather than a list."
            }
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "For <i>A</i> = (3 1 2 ; 0 2 −1 ; 4 1 5), find the cofactors of the second-row entries and hence evaluate |<i>A</i>|.",
          "steps": [
            "Strike out row 2 each time. M₂₁ = |1 2 ; 1 5| = 5 − 2 = 3, and the board sign at (2, 1) is minus, so C₂₁ = −3.",
            "M₂₂ = |3 2 ; 4 5| = 15 − 8 = 7, sign plus, so C₂₂ = 7. M₂₃ = |3 1 ; 4 1| = 3 − 4 = −1, sign minus, so C₂₃ = 1.",
            "Expand along row 2: |A| = (0)(−3) + (2)(7) + (−1)(1) = 14 − 1 = 13. Check along row 1: 3(10 + 1) − 1(0 + 4) + 2(0 − 8) = 33 − 4 − 16 = 13."
          ],
          "ans": "C₂₁ = −3, C₂₂ = 7, C₂₃ = 1, and |A| = 13"
        },
        {
          "t": "ex",
          "tag": "SPEED TRAP",
          "q": "Evaluate |7 0 0 ; 2 5 3 ; 9 −1 4| as fast as possible.",
          "steps": [
            "Do not grind out nine cofactors. Row 1 has two zeros, so two of the three expansion terms vanish before you start.",
            "Δ = 7 × C₁₁ = 7 × (+1) × |5 3 ; −1 4| = 7(20 + 3).",
            "= 161. Expanding along column 2 or column 3, each of which has only one zero, would have forced two 2 × 2 evaluations and twice the sign bookkeeping for the same answer."
          ],
          "ans": "161"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "For <i>A</i> = (1 2 3 ; 2 0 1 ; 1 1 1), evaluate <i>a</i><sub>11</sub><i>C</i><sub>11</sub> + <i>a</i><sub>12</sub><i>C</i><sub>12</sub> + <i>a</i><sub>13</sub><i>C</i><sub>13</sub> and <i>a</i><sub>11</sub><i>C</i><sub>21</sub> + <i>a</i><sub>12</sub><i>C</i><sub>22</sub> + <i>a</i><sub>13</sub><i>C</i><sub>23</sub>.",
          "steps": [
            "The first sum pairs row-1 entries with row-1 cofactors, so it is the Laplace expansion along row 1 and equals |A|: 1(0 − 1) − 2(2 − 1) + 3(2 − 0) = −1 − 2 + 6 = 3.",
            "The second pairs row-1 entries with row-2 cofactors. That is a cross sum, so it is 0, with no computation at all.",
            "Recognising “same row gives Δ, different row gives 0” turns a frightening pair of sums into one short expansion and one instant zero."
          ],
          "ans": "3 and 0"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "Let <i>A</i> be 3 × 3 with |<i>A</i>| = 2, let <i>C</i> be its cofactor matrix and let <i>B</i> = adj(adj <i>A</i>). Find |<i>C</i>| and |<i>B</i>|.",
          "steps": [
            "With n = 3, |adj A| = |A| to the power n − 1, that is |A|² = 4. Since adj A = Cᵀ and a transpose does not change a determinant, |C| = 4 as well.",
            "Now apply the same rule with adj A as the input matrix: |B| = |adj(adj A)| = |adj A|² = (|A|²)² = |A|⁴.",
            "So |B| = 2⁴ = 16. The pattern worth carrying: |adj(adj A)| = |A| to the power (n − 1)², which at n = 3 is |A|⁴."
          ],
          "ans": "|C| = 4 and |B| = 16"
        },
        {
          "t": "mcq",
          "q": "The cofactor <i>C</i><sub>23</sub> is related to the minor <i>M</i><sub>23</sub> by:",
          "correct": 1,
          "opts": [
            { "label": "<i>C</i><sub>23</sub> = <i>M</i><sub>23</sub>", "nudge": "This quotes the minor as the cofactor and drops the sign. Position (2, 3) has <i>i</i> + <i>j</i> = 5, which is odd, so the board reads minus there." },
            { "label": "<i>C</i><sub>23</sub> = −<i>M</i><sub>23</sub>", "nudge": null },
            { "label": "<i>C</i><sub>23</sub> = 0", "nudge": "This confuses a single cofactor with the cross-cofactor <i>sum</i>, which is what vanishes. An individual cofactor is a perfectly ordinary number." },
            { "label": "<i>C</i><sub>23</sub> = 2<i>M</i><sub>23</sub>", "nudge": "There is no doubling anywhere in the definition. The only thing ever attached to a minor is a sign, never a scale factor." }
          ],
          "solution": "C_ij = (−1)^(i+j) M_ij, and (−1)^(2+3) = −1, so C₂₃ = −M₂₃."
        },
        {
          "t": "mcq",
          "q": "|2 1 0 ; 3 −1 0 ; 5 4 2| equals:",
          "correct": 0,
          "opts": [
            { "label": "−10", "nudge": null },
            { "label": "10", "nudge": "A sign slip inside the 2 × 2: |2 1 ; 3 −1| is −2 − 3 = −5, not +5." },
            { "label": "−5", "nudge": "This is the signed minor on its own. It forgot to multiply by the entry <i>a</i><sub>33</sub> = 2 sitting in front of it." },
            { "label": "0", "nudge": "Two zeros in a column do not make a determinant zero. A whole zero column would; a column with one surviving entry just makes the expansion short." }
          ],
          "solution": "Column 3 has two zeros, so expand there: Δ = 2 × C₃₃ = 2 × (+1) × |2 1 ; 3 −1| = 2(−2 − 3) = −10."
        },
        {
          "t": "mcq",
          "q": "If <i>A</i> is 3 × 3 with |<i>A</i>| = <i>k</i>, then |adj <i>A</i>| equals:",
          "correct": 1,
          "opts": [
            { "label": "<i>k</i>", "nudge": "This assumes the adjoint has the same determinant as the matrix, which happens only in the special cases <i>k</i> = 0 and <i>k</i> = 1." },
            { "label": "<i>k</i><sup>2</sup>", "nudge": null },
            { "label": "<i>k</i><sup>3</sup>", "nudge": "This uses the exponent <i>n</i> rather than <i>n</i> − 1, which is the single most common power-cofactor mistake in the exam bank." },
            { "label": "1/<i>k</i>", "nudge": "That is |<i>A</i><sup>−1</sup>|. The adjoint and the inverse differ by exactly the factor |<i>A</i>|, and their determinants differ accordingly." }
          ],
          "solution": "|adj A| = |A|^(n−1) = k^(3−1) = k²."
        },
        {
          "t": "mcq",
          "q": "For a 3 × 3 matrix, <i>a</i><sub>11</sub><i>C</i><sub>21</sub> + <i>a</i><sub>12</sub><i>C</i><sub>22</sub> + <i>a</i><sub>13</sub><i>C</i><sub>23</sub> equals:",
          "correct": 1,
          "opts": [
            { "label": "|<i>A</i>|", "nudge": "This is the headline trap: entries times cofactors gives |<i>A</i>| only when both come from the same row. Here the entries are from row 1 and the cofactors from row 2." },
            { "label": "0", "nudge": null },
            { "label": "−|<i>A</i>|", "nudge": "A cross sum is not a signed copy of the determinant, it is genuinely nothing. The determinant it secretly computes has two identical rows." },
            { "label": "|<i>A</i>|<sup>2</sup>", "nudge": "Squaring appears in the adjoint identities, not here. This sum is linear in the entries and cannot produce a square." }
          ],
          "solution": "Row-1 entries against row-2 cofactors is a cross sum, and every cross sum is 0. You are effectively expanding a determinant in which row 2 has been replaced by a copy of row 1, and two identical rows force 0."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Find the cofactor of <i>a</i><sub>32</sub> in (2 3 1 ; 4 0 5 ; 1 −2 3).",
              "a": "Delete row 3 and column 2 to get |2 1 ; 4 5| = 10 − 4 = 6. The board sign at (3, 2) is (−1) to the fifth power, that is −1, so the cofactor is −6."
            },
            {
              "q": "[CBSE] Evaluate |5 0 2 ; 3 0 1 ; 4 7 6| by expanding along the line with the most zeros.",
              "a": "Column 2 has two zeros, leaving only the entry 7 at position (3, 2). Its board sign is minus and its minor is |5 2 ; 3 1| = 5 − 6 = −1, so Δ = 7 × (−1) × (−1) = 7."
            },
            {
              "q": "[JEE Main] For <i>A</i> = (1 −1 2 ; 3 0 1 ; 2 4 −2), find <i>a</i><sub>21</sub><i>C</i><sub>11</sub> + <i>a</i><sub>22</sub><i>C</i><sub>12</sub> + <i>a</i><sub>23</sub><i>C</i><sub>13</sub>.",
              "a": "0, with no arithmetic at all. Row-2 entries paired with row-1 cofactors is a cross sum, and every cross sum vanishes."
            },
            {
              "q": "[JEE Main] A 3 × 3 matrix has |<i>A</i>| = −5. Find |adj <i>A</i>|.",
              "a": "|adj A| = |A| to the power n − 1 = (−5)² = 25. The square kills the sign, which is worth noticing: at order 3 the adjoint determinant is never negative."
            },
            {
              "q": "[JEE Advanced] A 3 × 3 matrix satisfies |adj(adj <i>A</i>)| = 81. Find all possible values of |<i>A</i>|.",
              "a": "|adj(adj A)| = |A| to the power (n − 1)² = |A|⁴, so |A|⁴ = 81 and |A| = ±3. Both signs are genuinely possible, because the fourth power hides the sign."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Reporting the minor as the cofactor.</b> Always finish by stamping the board sign. The word “cofactor” in a question means the sign is part of the answer.",
            "<b>Pairing entries with the wrong line's cofactors.</b> Same row gives |<i>A</i>|; a different row gives 0. Two different facts sharing one notation, and the exam sets both.",
            "<b>The wrong power in |adj <i>A</i>|.</b> It is |<i>A</i>|<sup><i>n</i>−1</sup>, so |<i>A</i>|<sup>2</sup> for a 3 × 3, never |<i>A</i>|<sup>3</sup>.",
            "<b>Skipping the transpose.</b> adj <i>A</i> is the transpose of the cofactor matrix, not the cofactor matrix itself. On CBSE that step carries its own mark.",
            "<b>Reading the surviving 2 × 2 out of order.</b> Keep the rows and columns in their original order when you write a minor down. Reordering flips its sign, and the board sign then compounds the error instead of catching it.",
            "<b>Expanding along a dense line.</b> Choosing a row or column with no zeros wastes time and multiplies the chances of a slip. Scan for zeros before you commit."
          ]
        },
        {
          "t": "protip",
          "html": "two one-liners win most of these questions. first, “same row sums to delta, cross row sums to zero”. second, “adj drops the power by one”, so |adj A| = |A| to the n − 1, and iterating gives |A| to the (n − 1) squared. internalise those and you skip the algebra entirely on a large share of board and jee cofactor problems. and when you do have to compute, write the sign board at the top of your page once, before anything else."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "<i>M</i><sub><i>ij</i></sub> = what is left after deleting row <i>i</i>, column <i>j</i>",
              "note": "cover the row and the column"
            },
            {
              "f": "<i>C</i><sub><i>ij</i></sub> = (−1)<sup><i>i</i>+<i>j</i></sup><i>M</i><sub><i>ij</i></sub>",
              "note": "NCERT writes the same object as A with two indices"
            },
            {
              "f": "Δ = Σ<sub><i>j</i></sub> <i>a</i><sub><i>ij</i></sub><i>C</i><sub><i>ij</i></sub> along any row or column",
              "note": "so pick the zero-richest line"
            },
            {
              "f": "Σ<sub><i>j</i></sub> <i>a</i><sub><i>ij</i></sub><i>C</i><sub><i>kj</i></sub> = Δ δ<sub><i>ik</i></sub>",
              "note": "same row delta, different row zero"
            },
            {
              "f": "adj <i>A</i> = [<i>C</i><sub><i>ij</i></sub>]<sup>T</sup> and <i>A</i>(adj <i>A</i>) = |<i>A</i>|<i>I</i>",
              "note": "the transpose is its own step"
            },
            {
              "f": "|adj <i>A</i>| = |<i>A</i>|<sup><i>n</i>−1</sup> · |adj(adj <i>A</i>)| = |<i>A</i>|<sup>4</sup> at order 3",
              "note": "the powers to keep straight are 3, 2 and 4"
            },
            {
              "f": "∂Δ / ∂<i>a</i><sub><i>ij</i></sub> = <i>C</i><sub><i>ij</i></sub>",
              "note": "a cofactor is a sensitivity"
            }
          ],
          "aids": [
            "“cover to find the minor, sign the board for the cofactor”",
            "“same row gives delta, cross row gives zero”",
            "“adj drops the power by one”"
          ]
        }
      ]
    },
    {
      "n": "05",
      "title": "The Inverse and Systems of Equations",
      "chip": "05 SYSTEMS",
      "kalam": "three planes, and the only three things they can do",
      "blocks": [
        {
          "t": "p",
          "html": "This topic has two faces that turn out to be one coin: the <b>inverse</b> of a matrix, and <b>solving a system of equations</b>. A matrix <i>A</i> takes a vector and transforms it, stretching, rotating, shearing. The inverse <i>A</i><sup>−1</sup> is whatever undoes that transformation, so that applying <i>A</i> and then <i>A</i><sup>−1</sup> returns you to where you started. Converting rupees to dollars at the airport is multiplying by an exchange matrix; converting back is the inverse."
        },
        {
          "t": "p",
          "html": "The catch is that you can only undo a transformation that did not destroy information. From topic 02, |<i>A</i>| is the signed volume of the box spanned by the rows. If |<i>A</i>| = 0 the transformation has squashed space flat, collapsing a three-dimensional box onto a plane or a line, and once flattened you cannot un-flatten: infinitely many starting points landed in the same place, so there is no unique way back. That is the entire reason a matrix has an inverse <b>if and only if</b> |<i>A</i>| ≠ 0."
        },
        {
          "t": "p",
          "html": "A linear system in three unknowns is three planes in space, and a solution is a point lying on all three. Only three things can happen. The planes meet at <b>one common point</b>, a unique solution, which happens exactly when Δ ≠ 0. They share a whole <b>line or plane</b>, which is infinitely many solutions. Or they have <b>no common point at all</b>, because at least two are parallel and offset like railway tracks, which is no solution. The moment Δ = 0 you have tipped out of the first case, and which of the other two you land in is decided by the right-hand side."
        },
        {
          "t": "think",
          "html": "a homogeneous system, where all the constants are zero, has every plane passing through the origin, so x = y = z = 0 always works. that trivial solution is never the question. the question is always whether the planes share more than the origin, a whole line or a whole plane of solutions, and they do exactly when Δ = 0."
        },
        {
          "t": "def",
          "term": "Singular and non-singular",
          "html": "A square matrix is <b>non-singular</b> when |<i>A</i>| ≠ 0 and <b>singular</b> when |<i>A</i>| = 0. Only a non-singular matrix has an inverse, and only a non-singular coefficient matrix gives a system a unique solution. Those are the same statement wearing two hats: no determinant, no inverse, no unique answer."
        },
        {
          "t": "formula",
          "kicker": "THE INVERSE, VIA THE ADJOINT",
          "tag": "everything here needs a non-zero determinant",
          "main": "<i>A</i><sup>−1</sup> = (1/|<i>A</i>|) adj <i>A</i>,  |<i>A</i><sup>−1</sup>| = 1/|<i>A</i>|",
          "legend": [
            "adj <i>A</i> is the transpose of the cofactor matrix, built in topic 04",
            "the identity <i>A</i>(adj <i>A</i>) = |<i>A</i>|<i>I</i> is the entire justification: divide both sides by |<i>A</i>| and the inverse formula falls out",
            "for the system <i>AX</i> = <i>B</i> this gives the matrix method, <i>X</i> = <i>A</i><sup>−1</sup><i>B</i> = (1/|<i>A</i>|)(adj <i>A</i>)<i>B</i>"
          ],
          "note": "When |<i>A</i>| = 0 there is no inverse to write down and the matrix method has nothing to say at all, so you switch to the consistency criterion below rather than trying to force it."
        },
        {
          "t": "formula",
          "kicker": "CRAMER'S RULE",
          "tag": "one determinant per unknown",
          "main": "<i>x</i> = Δ<sub>1</sub>/Δ,  <i>y</i> = Δ<sub>2</sub>/Δ,  <i>z</i> = Δ<sub>3</sub>/Δ",
          "legend": [
            "Δ = |<i>A</i>| is the coefficient determinant, and Δ<sub><i>i</i></sub> is Δ with its <i>i</i>-th column replaced by the constants <i>B</i>",
            "valid only when Δ ≠ 0, since the rule divides by it",
            "it comes straight out of <i>X</i> = (1/|<i>A</i>|)(adj <i>A</i>)<i>B</i>, as the derivation below shows"
          ],
          "note": "Cramer cannot resolve the Δ = 0 cases by itself. The Δ<sub><i>i</i></sub> still get computed there, but as a <b>screen</b> for consistency rather than as numerators."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "DIAGRAM · WHAT THE DETERMINANTS ARE LOOKING AT",
          "chips": ["Unique", "No solution", "Infinitely many", "Homogeneous"],
          "captions": [
            "x + y = 3 and x − y = 1. The coefficient determinant is 1 times −1 minus 1 times 1, that is −2, which is not zero, so the two lines are genuinely tilted against each other and cross at exactly one point, (2, 1). In three unknowns this is three planes meeting at a single spot.",
            "x + 2y = 4 and 2x + 4y = 9. The coefficient rows are proportional, so the determinant is 0, but the constants do not follow the same ratio: doubling the first equation demands 8 on the right and the second says 9. The lines are parallel and offset, and there is no solution. This is the branch where a replacement determinant comes out non-zero.",
            "x + 2y = 4 and 2x + 4y = 8. The determinant is 0 again, but now the constants do follow the ratio, so the second equation is simply the first one doubled and the two lines coincide, drawn here one over the other. Every point on the line solves the system, and all the replacement determinants vanish too.",
            "A homogeneous system, 2x − y = 0 and 4x − 2y = 0. Every line passes through the origin, so the trivial solution is automatic and tells you nothing. The determinant is 0 here, the two lines coincide, and the whole line is a family of non-trivial solutions. Had the determinant been non-zero the lines would have crossed at the origin and nowhere else."
          ],
          "frames": [
            {
              "x": [-2, 6],
              "y": [-3, 5],
              "curves": [
                { "c": "line", "m": -1, "k": 3 },
                { "c": "line", "m": 1, "k": -1 }
              ],
              "points": [{ "x": 2, "y": 1, "label": "(2, 1)" }]
            },
            {
              "x": [-2, 8],
              "y": [-2, 5],
              "curves": [
                { "c": "line", "m": -0.5, "k": 2 },
                { "c": "line", "m": -0.5, "k": 2.25 }
              ],
              "labels": [{ "x": 1.4, "y": 3.4, "text": "parallel, never meeting" }]
            },
            {
              "x": [-2, 8],
              "y": [-2, 5],
              "curves": [
                { "c": "line", "m": -0.5, "k": 2 },
                { "c": "line", "m": -0.5, "k": 2, "dash": true }
              ],
              "labels": [{ "x": 1.4, "y": 3.4, "text": "one line drawn twice" }]
            },
            {
              "x": [-4, 4],
              "y": [-5, 5],
              "curves": [
                { "c": "line", "m": 2, "k": 0 },
                { "c": "line", "m": 2, "k": 0, "dash": true }
              ],
              "points": [{ "x": 0, "y": 0, "label": "trivial solution" }]
            }
          ]
        },
        {
          "t": "defgrid",
          "title": "The consistency criterion",
          "rows": [
            {
              "k": "Δ ≠ 0",
              "v": "unique solution, and the system is consistent. Solve by Cramer or by the matrix method"
            },
            {
              "k": "Δ = 0, some Δ<sub><i>i</i></sub> ≠ 0",
              "v": "no solution. One non-zero replacement determinant is enough to certify inconsistency"
            },
            {
              "k": "Δ = 0, all Δ<sub><i>i</i></sub> = 0",
              "v": "infinitely many solutions, as an exam rule. Verify by elimination on anything high-stakes"
            },
            {
              "k": "Homogeneous <i>AX</i> = <i>O</i>",
              "v": "always consistent, since <i>X</i> = <i>O</i> works. A <b>non-trivial</b> solution exists exactly when Δ = 0"
            },
            {
              "k": "How many solutions",
              "v": "a linear system has exactly 0, 1 or infinitely many. So “more than two solutions” means infinitely many"
            },
            {
              "k": "Free parameters",
              "v": "<i>n</i> − <i>r</i>, where <i>r</i> is the number of independent equations left after elimination"
            }
          ]
        },
        {
          "t": "proc",
          "title": "The matrix method, the CBSE five-mark template",
          "steps": [
            "<b>Write <i>A</i>, <i>X</i> and <i>B</i></b> and compute Δ = |<i>A</i>|. If Δ ≠ 0 a unique solution exists, and say so on the page: it is a mark.",
            "<b>Find all nine cofactors</b> and assemble the cofactor matrix, reading the signs off the board from topic 04 rather than recomputing them.",
            "<b>Transpose</b> to get adj <i>A</i>. This is a separate step and the classic lost mark, so write the two arrays out separately.",
            "<b>Form <i>A</i><sup>−1</sup> = (1/Δ) adj <i>A</i></b>, keeping the 1/Δ outside the array so that the arithmetic stays in whole numbers.",
            "<b>Compute <i>X</i> = <i>A</i><sup>−1</sup><i>B</i></b> and read off <i>x</i>, <i>y</i> and <i>z</i>.",
            "<b>Verify by substitution</b> into all three original equations. It costs fifteen seconds and it catches every arithmetic slip in steps 2 to 5."
          ]
        },
        {
          "t": "proc",
          "title": "Classifying any system, including the hard branch",
          "steps": [
            "<b>Compute Δ.</b> If Δ ≠ 0 the classification is finished: unique solution, and you can solve it however you like.",
            "<b>If a parameter is present, factor Δ as a polynomial in it.</b> Its roots are the only interesting values; everywhere else the system has a unique solution.",
            "<b>At each root, compute the Δ<sub><i>i</i></sub>.</b> Any non-zero one convicts the system immediately: no solution, no further work needed.",
            "<b>If all the Δ<sub><i>i</i></sub> vanish, eliminate.</b> Row-reduce the array with the constants attached, identify the independent equations, and count the free variables as <i>n</i> − <i>r</i>.",
            "<b>Parametrise and check.</b> Assign a parameter to each free variable, back-substitute, and put the answer into an equation you did not use during the elimination.",
            "<b>For a homogeneous system</b>, ask only about non-trivial solutions. They exist exactly when Δ = 0, and the solution space then has dimension <i>n</i> − <i>r</i>: a line when <i>r</i> = 2, a plane when <i>r</i> = 1."
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · CRAMER'S RULE OUT OF THE INVERSE",
          "steps": [
            {
              "eq": "<i>AX</i> = <i>B</i>, with Δ = |<i>A</i>| ≠ 0",
              "why": "Non-singular is the hypothesis, and it is doing real work: every line below divides by Δ."
            },
            {
              "eq": "<i>X</i> = <i>A</i><sup>−1</sup><i>B</i> = (1/Δ)(adj <i>A</i>)<i>B</i>",
              "why": "Multiply on the left by the inverse, then substitute the adjoint formula proved in topic 04."
            },
            {
              "eq": "<i>x</i> = (1/Δ) Σ<sub><i>i</i></sub> (adj <i>A</i>)<sub>1<i>i</i></sub><i>b</i><sub><i>i</i></sub> = (1/Δ) Σ<sub><i>i</i></sub> <i>C</i><sub><i>i</i>1</sub><i>b</i><sub><i>i</i></sub>",
              "why": "Read off the first component of the product. The adjoint is the transpose of the cofactor matrix, so its entry in position (1, i) is the cofactor with indices i and 1."
            },
            {
              "eq": "Σ<sub><i>i</i></sub> <i>b</i><sub><i>i</i></sub><i>C</i><sub><i>i</i>1</sub> = Δ<sub>1</sub>",
              "why": "That sum is entries times the cofactors of column 1, which is precisely the expansion down column 1 of the array in which column 1 has been replaced by B. Deleting column 1 never touches those cofactors, which is exactly why the substitution is legal."
            },
            {
              "eq": "<i>x</i> = Δ<sub>1</sub>/Δ, and identically <i>y</i> = Δ<sub>2</sub>/Δ and <i>z</i> = Δ<sub>3</sub>/Δ",
              "why": "The same argument for the second and third components. Cramer's rule is not a separate theorem at all, it is the inverse formula read one component at a time."
            }
          ]
        },
        {
          "t": "p",
          "html": "One caveat the textbooks gloss over, and Advanced papers exploit. “All Δ<sub><i>i</i></sub> = 0” is a reliable exam rule for “infinitely many solutions”, but it is not a theorem. It is genuinely correct whenever the rows of <i>A</i> span a plane, that is whenever some 2 × 2 minor of <i>A</i> survives. If instead <b>every row of <i>A</i> is proportional to the same triple</b>, the screen can pass a system with no solution at all: <i>x</i> + <i>y</i> + <i>z</i> = 1, 2<i>x</i> + 2<i>y</i> + 2<i>z</i> = 3, 3<i>x</i> + 3<i>y</i> + 3<i>z</i> = 4 has Δ = 0 and every Δ<sub><i>i</i></sub> = 0, and yet the three equations demand <i>x</i> + <i>y</i> + <i>z</i> = 1 and 3/2 and 4/3 at once. <b>Elimination is the judge; the Δ<sub><i>i</i></sub> are only the bailiff.</b>"
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Solve by the matrix method: <i>x</i> + <i>y</i> + <i>z</i> = 6, <i>x</i> − <i>y</i> + <i>z</i> = 2, 2<i>x</i> + <i>y</i> − <i>z</i> = 1.",
          "steps": [
            "A = (1 1 1 ; 1 −1 1 ; 2 1 −1) and B = (6, 2, 1). Then Δ = 1(1 − 1) − 1(−1 − 2) + 1(1 + 2) = 0 + 3 + 3 = 6, which is not zero, so a unique solution exists.",
            "Cofactor matrix C = (0 3 3 ; 2 −3 1 ; 2 0 −2), so adj A = Cᵀ = (0 2 2 ; 3 −3 0 ; 3 1 −2). The transpose is the step that carries its own mark.",
            "X = (1/6)(adj A)B. Row by row: 0(6) + 2(2) + 2(1) = 6, then 3(6) − 3(2) + 0(1) = 12, then 3(6) + 1(2) − 2(1) = 18. So X = (1/6)(6, 12, 18).",
            "Hence x = 1, y = 2, z = 3. Check all three equations: 1 + 2 + 3 = 6, 1 − 2 + 3 = 2, 2 + 2 − 3 = 1."
          ],
          "ans": "x = 1, y = 2, z = 3"
        },
        {
          "t": "ex",
          "tag": "SPEED TRAP",
          "q": "Classify, as fast as possible: <i>x</i> + 2<i>y</i> + 3<i>z</i> = 4, 2<i>x</i> + 4<i>y</i> + 6<i>z</i> = 9, <i>x</i> − <i>y</i> + <i>z</i> = 2.",
          "steps": [
            "Look at the first two equations before computing anything. The left side of the second is exactly twice the left side of the first.",
            "So the left sides demand 2 × 4 = 8 on the right, and the second equation says 9. Contradiction, and the third equation cannot repair it.",
            "The system is inconsistent, in one glance. Setting up Cramer and grinding out Δ, Δ₁, Δ₂ and Δ₃ wastes two minutes to reach the same verdict."
          ],
          "ans": "Inconsistent: no solution"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "For what values of <i>k</i> does <i>kx</i> + <i>y</i> + <i>z</i> = 1, <i>x</i> + <i>ky</i> + <i>z</i> = 1, <i>x</i> + <i>y</i> + <i>kz</i> = 1 have (i) a unique solution, (ii) no solution, (iii) infinitely many?",
          "steps": [
            "Factor the coefficient determinant as a polynomial in k: Δ = |k 1 1 ; 1 k 1 ; 1 1 k| = k³ − 3k + 2 = (k − 1)²(k + 2), the determinant you already solved in topic 01.",
            "(i) Δ ≠ 0 exactly when k ≠ 1 and k ≠ −2, and there the solution is unique.",
            "(ii) At k = −2, adding all three equations gives (−2 + 1 + 1)(x + y + z) = 3, that is 0 = 3. No solution.",
            "(iii) At k = 1 all three equations collapse to x + y + z = 1, a single plane, so there are infinitely many solutions with two free parameters. Never assume which root does which: test each one."
          ],
          "ans": "Unique for k ≠ 1 and k ≠ −2, none at k = −2, infinitely many at k = 1"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "Find all λ for which <i>x</i> + <i>y</i> + λ<i>z</i> = 0, <i>x</i> + λ<i>y</i> + <i>z</i> = 0, λ<i>x</i> + <i>y</i> + <i>z</i> = 0 has a non-trivial solution, and describe the solution space in each case.",
          "steps": [
            "The system is homogeneous, so a non-trivial solution exists exactly when Δ = 0. Expanding, Δ = −(λ − 1)²(λ + 2), so λ = 1 or λ = −2.",
            "At λ = 1 every equation becomes x + y + z = 0: a single constraint. The solution set is a whole plane through the origin, a two-parameter family (s, t, −s − t).",
            "At λ = −2 the equations are x + y − 2z = 0, x − 2y + z = 0 and −2x + y + z = 0. Subtracting the first two gives 3y − 3z = 0, so y = z, and back-substituting gives x = z.",
            "So the solution set is the line x = y = z, a one-parameter family (t, t, t). The geometry separates the two singular cases: a plane at λ = 1, a line at λ = −2."
          ],
          "ans": "λ = 1 gives a plane through the origin, λ = −2 gives the line x = y = z"
        },
        {
          "t": "mcq",
          "q": "A square matrix <i>A</i> has an inverse if and only if:",
          "correct": 2,
          "opts": [
            { "label": "<i>A</i> is symmetric", "nudge": "Symmetry says nothing about invertibility. The all-zero matrix is symmetric and has no inverse at all." },
            { "label": "|<i>A</i>| = 0", "nudge": "This is the precise opposite. A singular matrix has squashed space flat and cannot be undone." },
            { "label": "|<i>A</i>| ≠ 0", "nudge": null },
            { "label": "<i>A</i> is of order 3", "nudge": "The order is irrelevant. A 3 × 3 with determinant 0 has no inverse, and a 2 × 2 with determinant 7 does." }
          ],
          "solution": "An inverse exists exactly when A is non-singular, since A⁻¹ = (1/|A|) adj A divides by |A|."
        },
        {
          "t": "mcq",
          "q": "A homogeneous system <i>AX</i> = <i>O</i> of three equations has a non-trivial solution if and only if:",
          "correct": 1,
          "opts": [
            { "label": "Δ ≠ 0", "nudge": "Δ ≠ 0 gives a unique solution, and for a homogeneous system that unique solution is the trivial one. It rules non-trivial solutions out." },
            { "label": "Δ = 0", "nudge": null },
            { "label": "Δ > 0", "nudge": "There is no sign condition anywhere in this chapter's consistency theory. Δ = −7 behaves exactly like Δ = 7." },
            { "label": "it always does", "nudge": "The <i>trivial</i> solution always exists, which is precisely why the exam only ever asks about non-trivial ones." }
          ],
          "solution": "X = O always solves a homogeneous system, so uniqueness would leave only that. A second solution requires the coefficient determinant to vanish."
        },
        {
          "t": "mcq",
          "q": "For <i>AX</i> = <i>B</i> with three equations, Δ = 0 and Δ<sub>1</sub> ≠ 0. The system has:",
          "correct": 2,
          "opts": [
            { "label": "a unique solution", "nudge": "Uniqueness needs Δ ≠ 0, and Δ is zero here." },
            { "label": "infinitely many solutions", "nudge": "That branch needs <i>all</i> the replacement determinants to vanish. One non-zero Δ<sub>1</sub> rules it out." },
            { "label": "no solution", "nudge": null },
            { "label": "only the trivial solution", "nudge": "“Trivial solution” is a homogeneous-system idea. With a general <i>B</i> there is no trivial solution to speak of." }
          ],
          "solution": "Δ = 0 with some replacement determinant non-zero is the inconsistency signature: the constants column adds a rank that the coefficient array does not have."
        },
        {
          "t": "mcq",
          "q": "If <i>A</i> is 3 × 3 with |<i>A</i>| = 2, then |<i>A</i><sup>−1</sup>| equals:",
          "correct": 1,
          "opts": [
            { "label": "2", "nudge": "This forgets to reciprocate. The inverse undoes the transformation, so it must undo the volume scaling too." },
            { "label": "1/2", "nudge": null },
            { "label": "1/8", "nudge": "This is 1/|<i>A</i>|<sup>3</sup> and confuses the inverse with adjoint-style scaling. The inverse carries no power of the order." },
            { "label": "8", "nudge": "This is |<i>A</i>|<sup>3</sup>, the wrong direction entirely: the inverse shrinks what <i>A</i> stretched." }
          ],
          "solution": "|A||A⁻¹| = |AA⁻¹| = |I| = 1, so |A⁻¹| = 1/|A| = 1/2."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Solve using the inverse: 2<i>x</i> − <i>y</i> = 3, <i>x</i> + <i>y</i> = 3.",
              "a": "A = (2 −1 ; 1 1) with |A| = 3, and A⁻¹ = (1/3)(1 1 ; −1 2). Then X = A⁻¹(3, 3) = (1/3)(6, 3) = (2, 1), so x = 2 and y = 1."
            },
            {
              "q": "[CBSE] Find <i>A</i><sup>−1</sup> for <i>A</i> = (2 5 ; 1 3).",
              "a": "|A| = 6 − 5 = 1, so A⁻¹ = (3 −5 ; −1 2). For a 2 × 2 the adjoint is “swap the diagonal entries, negate the off-diagonal ones”, which is worth memorising outright."
            },
            {
              "q": "[JEE Main] Find <i>k</i> for which <i>kx</i> + 2<i>y</i> − <i>z</i> = 0, 2<i>x</i> − <i>y</i> + 3<i>z</i> = 0, <i>x</i> + <i>y</i> + <i>z</i> = 0 has a non-trivial solution.",
              "a": "Set Δ = 0: k(−1 − 3) − 2(2 − 3) + (−1)(2 + 1) = −4k + 2 − 3 = −4k − 1, so k = −1/4."
            },
            {
              "q": "[JEE Main] The system <i>x</i> + <i>y</i> + <i>z</i> = 6, <i>x</i> + 2<i>y</i> + 3<i>z</i> = 14, 2<i>x</i> + 5<i>y</i> + λ<i>z</i> = μ has a unique solution. Find the condition on λ.",
              "a": "Δ = 1(2λ − 15) − 1(λ − 6) + 1(5 − 4) = λ − 8, so the condition is λ ≠ 8, for any μ whatsoever. Notice that μ never enters Δ, which is why the right-hand side can only start to matter once Δ has already vanished."
            },
            {
              "q": "[JEE Advanced] Solve completely: <i>x</i> + <i>y</i> + <i>z</i> = 6, <i>x</i> + 2<i>y</i> + 3<i>z</i> = 14, 2<i>x</i> + 3<i>y</i> + 4<i>z</i> = 20.",
              "a": "Δ = 1(8 − 9) − 1(4 − 6) + 1(3 − 4) = 0, and Δ₁ = 6(8 − 9) − 1(56 − 60) + 1(42 − 40) = −6 + 4 + 2 = 0, with Δ₂ and Δ₃ vanishing the same way. The screen passes, so eliminate: subtracting equation 1 from equation 2, and twice equation 1 from equation 3, both give y + 2z = 8, which is one independent equation. With r = 2 there is one free parameter. Put z = t, then y = 8 − 2t and x = 6 − y − z = t − 2, so (x, y, z) = (t − 2, 8 − 2t, t). Check in equation 2: (t − 2) + 2(8 − 2t) + 3t = 14."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Scrambling the three branches.</b> Lock it down: Δ ≠ 0 is unique; Δ = 0 with some Δ<sub><i>i</i></sub> ≠ 0 is no solution; Δ = 0 with all Δ<sub><i>i</i></sub> = 0 is infinitely many.",
            "<b>Forgetting that the trivial solution always exists.</b> For <i>AX</i> = <i>O</i> the question is never “is there a solution”, it is “is there a non-trivial one”, and that needs Δ = 0.",
            "<b>Skipping the transpose in adj <i>A</i>.</b> The adjoint is the transpose of the cofactor matrix, and on a five-mark answer that line is worth a mark by itself.",
            "<b>Using Cramer when Δ = 0.</b> The rule divides by Δ, so it is undefined there. Switch to the consistency criterion, and then to elimination.",
            "<b>Assuming which root does what.</b> Factoring Δ hands you the interesting values of a parameter and nothing more. Test each root separately for no-solution against infinitely-many, because the two roots of one factorisation routinely behave differently.",
            "<b>Trusting the screen when every row of <i>A</i> is proportional.</b> All Δ<sub><i>i</i></sub> = 0 certifies consistency only when some 2 × 2 minor of <i>A</i> survives. Otherwise eliminate and look."
          ]
        },
        {
          "t": "protip",
          "html": "for any parameter problem, factor Δ as a polynomial in the parameter first. its roots are the only interesting values; everywhere else the answer is “unique solution” and you are already done. then test each root on its own. two shortcuts almost always beat computing three replacement determinants: if adding all three equations gives something like 0 = 3, there is no solution, and if they all collapse to a single plane, there are infinitely many."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "<i>A</i><sup>−1</sup> = (1/|<i>A</i>|) adj <i>A</i>, exists ⟺ |<i>A</i>| ≠ 0",
              "note": "no determinant, no inverse"
            },
            {
              "f": "<i>A</i>(adj <i>A</i>) = |<i>A</i>|<i>I</i>",
              "note": "the engine behind the inverse formula"
            },
            {
              "f": "<i>X</i> = <i>A</i><sup>−1</sup><i>B</i> · <i>x</i> = Δ<sub>1</sub>/Δ, <i>y</i> = Δ<sub>2</sub>/Δ, <i>z</i> = Δ<sub>3</sub>/Δ",
              "note": "both need a non-zero delta"
            },
            {
              "f": "Δ ≠ 0 unique · Δ = 0 with some Δ<sub><i>i</i></sub> ≠ 0 none · Δ = 0 with all Δ<sub><i>i</i></sub> = 0 infinite",
              "note": "the three branches, in order"
            },
            {
              "f": "homogeneous: non-trivial ⟺ Δ = 0",
              "note": "the trivial solution is always there"
            },
            {
              "f": "free parameters = <i>n</i> − <i>r</i>",
              "note": "r counts the independent rows after elimination"
            },
            {
              "f": "|<i>A</i><sup>−1</sup>| = 1/|<i>A</i>|",
              "note": "the inverse undoes the volume scaling too"
            }
          ],
          "aids": [
            "“no determinant, no inverse”",
            "“delta zero, hopes alive: check the side determinants for none or infinite”",
            "“elimination is the judge, the side determinants are only the bailiff”"
          ]
        }
      ]
    },
    {
      "n": "06",
      "title": "Advanced Techniques",
      "chip": "06 ADVANCED",
      "kalam": "stop computing determinants, start manipulating them",
      "blocks": [
        {
          "t": "p",
          "html": "Up to now you have <b>computed</b> determinants. In this topic you manipulate them as algebraic objects, multiplying, differentiating and pattern-matching, exactly as you manipulate polynomials once you stop plugging numbers in. Almost none of it appears on CBSE. Most of it decides marks on JEE."
        },
        {
          "t": "p",
          "html": "The first tool is that the determinant is <b>multiplicative</b>: |<i>AB</i>| = |<i>A</i>||<i>B</i>|. It turns matrix products into ordinary number products, and everything else about scaling follows, including |<i>A</i><sup><i>n</i></sup>| = |<i>A</i>|<sup><i>n</i></sup> and |<i>kA</i>| = <i>k</i><sup><i>n</i></sup>|<i>A</i>|. Two determinants of the same order are multiplied row by row, so the entry in position (<i>i</i>, <i>j</i>) of the product is the dot product of row <i>i</i> of the first with column <i>j</i> of the second. Read backwards, that lets you recognise an ugly determinant as a product of two simple ones and factor it."
        },
        {
          "t": "p",
          "html": "A favourite one-mark trap runs on the same idea. If <i>b</i><sub><i>ij</i></sub> = <i>f</i>(<i>i</i>)<i>g</i>(<i>j</i>)<i>a</i><sub><i>ij</i></sub>, never pull one global factor out: the factor depends on the position, so it is not a scalar. Split it into a <b>row</b> factor times a <b>column</b> factor, <i>B</i> = <i>DAG</i> with <i>D</i> and <i>G</i> diagonal, so |<i>B</i>| = |<i>D</i>||<i>A</i>||<i>G</i>|. With <i>b</i><sub><i>ij</i></sub> = 2<sup><i>i</i>+<i>j</i></sup><i>a</i><sub><i>ij</i></sub> at order 3 that is diag(2, 4, 8) on both sides, so the cost is 2<sup>6</sup> × 2<sup>6</sup> = 2<sup>12</sup>. The wrong global-factor route gives 2<sup>36</sup>, which is exactly the keyed distractor."
        },
        {
          "t": "p",
          "html": "The second tool is differentiation. When a determinant's entries are functions of <i>x</i>, do <b>not</b> expand and then differentiate. Differentiate <b>one row at a time</b>, leaving the other rows fixed, and add the resulting determinants. It mirrors the product rule for a good reason: a determinant is a sum of products of entries, one entry from each row, so differentiating each product gives one piece per row, and collecting all the pieces where the first row was differentiated reconstitutes the first determinant of the rule."
        },
        {
          "t": "think",
          "html": "trigonometric determinants look like a different subject and are not. every one of them yields to a tool you already have: expand a compound angle and one column turns out to be a combination of the others, or substitute so that the array becomes a vandermonde, or subtract rows and convert the differences with the sum-to-product formulas."
        },
        {
          "t": "def",
          "term": "Vandermonde determinant",
          "html": "The array whose rows are successive powers of the same variables, |1 1 1 ; <i>a</i> <i>b</i> <i>c</i> ; <i>a</i><sup>2</sup> <i>b</i><sup>2</sup> <i>c</i><sup>2</sup>| = (<i>a</i> − <i>b</i>)(<i>b</i> − <i>c</i>)(<i>c</i> − <i>a</i>). Any determinant whose rows are functions <i>f</i><sub>1</sub>, <i>f</i><sub>2</sub>, <i>f</i><sub>3</sub> evaluated at <i>a</i>, <i>b</i>, <i>c</i> down the columns is called an <b>alternant</b>, and Vandermonde is the one with <i>f</i><sub><i>i</i></sub>(<i>t</i>) = <i>t</i><sup><i>i</i>−1</sup>. Swapping two of the variables swaps two columns, so every alternant changes sign, which is where the name comes from and why each difference (<i>a</i> − <i>b</i>) has to divide it."
        },
        {
          "t": "formula",
          "kicker": "MULTIPLICATION AND SCALING",
          "tag": "the one-mark traps live right here",
          "main": "|<i>AB</i>| = |<i>A</i>||<i>B</i>|,  |<i>A</i><sup><i>n</i></sup>| = |<i>A</i>|<sup><i>n</i></sup>,  |<i>kA</i>| = <i>k</i><sup><i>n</i></sup>|<i>A</i>|",
          "legend": [
            "both matrices must be square and of the same order for the first identity to mean anything",
            "|2<i>AB</i>| at order 3 is 2<sup>3</sup>|<i>A</i>||<i>B</i>|: handle the scalar and the product separately, then multiply",
            "adj(<i>AB</i>) = (adj <i>B</i>)(adj <i>A</i>), reversed like the inverse, which is a different question with a very similar look"
          ],
          "note": "Read the first identity backwards too. Recognising a messy determinant as |<i>A</i>||<i>B</i>| for two simple arrays is often the whole solution rather than a step in it."
        },
        {
          "t": "formula",
          "kicker": "DIFFERENTIATING A DETERMINANT",
          "tag": "one row at a time, then add",
          "main": "Δ′(<i>x</i>) = |<i>R</i>′<sub>1</sub> ; <i>R</i><sub>2</sub> ; <i>R</i><sub>3</sub>| + |<i>R</i><sub>1</sub> ; <i>R</i>′<sub>2</sub> ; <i>R</i><sub>3</sub>| + |<i>R</i><sub>1</sub> ; <i>R</i><sub>2</sub> ; <i>R</i>′<sub>3</sub>|",
          "legend": [
            "each term differentiates exactly one row and leaves the other two completely alone",
            "the column version is identical, by transpose invariance, so pick whichever line has the simplest derivatives",
            "when differentiating a row produces a copy of another row, that whole term is 0, which often kills two of the three at a stroke"
          ],
          "note": "This is the product rule wearing a determinant's clothes. If the entries are simple enough to expand first, expanding first is allowed and sometimes quicker; the row rule earns its keep when they are not."
        },
        {
          "t": "defgrid",
          "title": "Shapes worth recognising on sight",
          "rows": [
            {
              "k": "Vandermonde",
              "v": "|1 1 1 ; <i>a</i> <i>b</i> <i>c</i> ; <i>a</i><sup>2</sup> <i>b</i><sup>2</sup> <i>c</i><sup>2</sup>| = (<i>a</i> − <i>b</i>)(<i>b</i> − <i>c</i>)(<i>c</i> − <i>a</i>)"
            },
            {
              "k": "Skew-symmetric, odd order",
              "v": "<i>A</i><sup>T</sup> = −<i>A</i> with <i>n</i> odd forces |<i>A</i>| = 0. Even order proves nothing at all"
            },
            {
              "k": "Cyclic, left shift",
              "v": "rows (<i>a</i>, <i>b</i>, <i>c</i>), (<i>b</i>, <i>c</i>, <i>a</i>), (<i>c</i>, <i>a</i>, <i>b</i>) give −(<i>a</i><sup>3</sup> + <i>b</i><sup>3</sup> + <i>c</i><sup>3</sup> − 3<i>abc</i>)"
            },
            {
              "k": "Alternant, one power skipped",
              "v": "|1 1 1 ; <i>a</i> <i>b</i> <i>c</i> ; <i>a</i><sup>3</sup> <i>b</i><sup>3</sup> <i>c</i><sup>3</sup>| = (<i>a</i> − <i>b</i>)(<i>b</i> − <i>c</i>)(<i>c</i> − <i>a</i>)(<i>a</i> + <i>b</i> + <i>c</i>)"
            },
            {
              "k": "The 1, <i>a</i>, <i>bc</i> array",
              "v": "|1 1 1 ; <i>a</i> <i>b</i> <i>c</i> ; <i>bc</i> <i>ca</i> <i>ab</i>| = (<i>a</i> − <i>b</i>)(<i>b</i> − <i>c</i>)(<i>c</i> − <i>a</i>), alternating of degree 3, so it is the Vandermonde itself"
            },
            {
              "k": "A product of rotations",
              "v": "|cos α cos β  cos α sin β  −sin α ; −sin β  cos β  0 ; sin α cos β  sin α sin β  cos α| = 1, for every α and β"
            }
          ]
        },
        {
          "t": "proc",
          "title": "Four ways into a trigonometric determinant",
          "steps": [
            "<b>Scan for a dependent column.</b> Expand every compound angle with the addition formulas. If a column turns out to be a fixed combination of the others, as sin(θ + δ) makes column 3 equal cos δ times column 1 plus sin δ times column 2, subtract that combination off and a zero column remains.",
            "<b>Substitute.</b> If every entry depends on its angle through one single expression, name it. A determinant built from 1, cos θ and cos<sup>2</sup>θ across three angles is a Vandermonde in the cosines, and topic 02 hands you the factorisation free.",
            "<b>Difference, then factor.</b> For rows of parallel structure, run <i>R</i><sub><i>i</i></sub> → <i>R</i><sub><i>i</i></sub> − <i>R</i><sub>1</sub> and convert each difference with sin <i>u</i> − sin <i>v</i> = 2 cos((<i>u</i> + <i>v</i>)/2) sin((<i>u</i> − <i>v</i>)/2) and cos <i>u</i> − cos <i>v</i> = −2 sin((<i>u</i> + <i>v</i>)/2) sin((<i>u</i> − <i>v</i>)/2). Common sine factors then fall out of the rows.",
            "<b>Expand along the zero-richest line and burn the Pythagorean identity.</b> Many trigonometric determinants carry a strategically placed 0, and the two surviving 2 × 2s combine through sin<sup>2</sup> + cos<sup>2</sup> = 1.",
            "<b>Check numerically.</b> Substitute one convenient set of angles into both your answer and the original array. Sign errors dominate here, and swapping any two of the angles must flip the sign of the whole thing, because it swaps two columns."
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · AN ODD-ORDER SKEW-SYMMETRIC DETERMINANT IS ZERO",
          "steps": [
            {
              "eq": "<i>A</i><sup>T</sup> = −<i>A</i>, with <i>A</i> of order <i>n</i>",
              "why": "That is the definition of skew-symmetric. It forces every diagonal entry to satisfy a = −a and hence to be 0, which is the visual give-away when you meet one in a question."
            },
            {
              "eq": "|<i>A</i><sup>T</sup>| = |−<i>A</i>|",
              "why": "Take determinants of both sides of the defining equation. Nothing has been assumed about n yet, which matters: the conclusion depends entirely on its parity."
            },
            {
              "eq": "|<i>A</i>| = (−1)<sup><i>n</i></sup>|<i>A</i>|",
              "why": "The left side is |A| by transpose invariance, P1 of topic 02. The right side is the scalar rule |kA| = kⁿ|A| with k = −1, because negating the matrix negates all n rows."
            },
            {
              "eq": "<i>n</i> odd ⇒ |<i>A</i>| = −|<i>A</i>| ⇒ 2|<i>A</i>| = 0",
              "why": "At odd n the factor is −1. Only 0 can equal its own negative, which is the same argument that proved two identical rows give 0."
            },
            {
              "eq": "|<i>A</i>| = 0, for odd <i>n</i> only",
              "why": "At even n the equation reads |A| = |A|, which is vacuous, so nothing follows and even-order skew determinants are generally non-zero. Applying the rule at even order is a standard trap, and one Advanced paper hands you a non-singular 3 by 3 skew-symmetric matrix as a deliberately impossible premise."
            }
          ]
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Let <i>A</i> and <i>B</i> be 3 × 3 with |<i>A</i>| = 3 and |<i>B</i>| = −2. Find |2<i>AB</i>| and |<i>A</i><sup>2</sup><i>B</i>|.",
          "steps": [
            "Handle the scalar and the product separately. |2AB| = 2³|A||B|, because the 2 multiplies all three rows.",
            "= 8 × 3 × (−2) = −48.",
            "And |A²B| = |A|²|B| = 9 × (−2) = −18. No matrix was ever multiplied out."
          ],
          "ans": "−48 and −18"
        },
        {
          "t": "ex",
          "tag": "SPEED TRAP",
          "q": "Evaluate |0 3 −5 ; −3 0 2 ; 5 −2 0|.",
          "steps": [
            "Check the shape before computing anything: the diagonal is all zeros and every entry is the negative of its mirror across the diagonal. This is skew-symmetric.",
            "The order is 3, which is odd.",
            "So the determinant is 0 by the odd-order rule, with no computation at all. Expanding the six Sarrus terms would cost a minute and risk a sign error, to arrive at the same zero."
          ],
          "ans": "0"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "For <i>f</i>(<i>x</i>) = |1 + <i>x</i>  1  1 ; 1  1 + <i>x</i>  1 ; 1  1  1 + <i>x</i>|, find <i>f</i>′(<i>x</i>).",
          "steps": [
            "By the row rule, the rows differentiate to (1, 0, 0), (0, 1, 0) and (0, 0, 1) respectively, so f′(x) is the sum of three determinants, one per row.",
            "The first is |1 0 0 ; 1 1 + x 1 ; 1 1 1 + x| = (1 + x)² − 1, and by the symmetry of the array the second and third give the same value.",
            "So f′(x) = 3[(1 + x)² − 1] = 3(x² + 2x) = 3x² + 6x.",
            "Cross-check by simplifying first: C₁ → C₁ + C₂ + C₃ pulls out (x + 3), and reduction gives f(x) = x²(x + 3) = x³ + 3x², whose derivative is 3x² + 6x. Both routes agree."
          ],
          "ans": "f′(x) = 3x² + 6x"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "<i>A</i> and <i>B</i> are 3 × 3 with <i>b</i><sub><i>ij</i></sub> = 3<sup><i>i</i>+<i>j</i>−2</sup><i>a</i><sub><i>ij</i></sub> and |<i>B</i>| = 81. Find |<i>A</i>|.",
          "steps": [
            "Split the exponent: 3 to the power i + j − 2 is 3 to the power i − 1 times 3 to the power j − 1, a row factor times a column factor.",
            "So B = diag(1, 3, 9) A diag(1, 3, 9), and each diagonal matrix has determinant 1 × 3 × 9 = 27.",
            "Hence |B| = 27 × |A| × 27 = 729|A|, and 81 = 729|A| gives |A| = 1/9. Pulling out one global factor would have been meaningless, because the exponent depends on the position and so is not a scalar."
          ],
          "ans": "|A| = 1/9"
        },
        {
          "t": "mcq",
          "q": "For a 3 × 3 matrix, |2<i>A</i>| in terms of |<i>A</i>| is:",
          "correct": 2,
          "opts": [
            { "label": "2|<i>A</i>|", "nudge": "This treats 2<i>A</i> as a single scaled row. Multiplying the matrix scales all three rows, so the 2 comes out three times." },
            { "label": "6|<i>A</i>|", "nudge": "This computes 2<i>n</i> rather than 2<sup><i>n</i></sup>. The order is an exponent here, not a multiplier." },
            { "label": "8|<i>A</i>|", "nudge": null },
            { "label": "|<i>A</i>|", "nudge": "This ignores the scalar entirely. Scaling a matrix certainly changes its determinant, and by rather a lot." }
          ],
          "solution": "|kA| = kⁿ|A| = 2³|A| = 8|A|."
        },
        {
          "t": "mcq",
          "q": "A skew-symmetric matrix of order 3 has determinant:",
          "correct": 0,
          "opts": [
            { "label": "always 0", "nudge": null },
            { "label": "always 1", "nudge": "There is no normalisation anywhere in the argument. It produces 0, and 1 is not in reach." },
            { "label": "equal to its trace", "nudge": "The trace happens to be 0 as well, since every diagonal entry is 0, but that is a separate fact with a different proof. Determinant and trace are not interchangeable." },
            { "label": "always positive", "nudge": "Zero is not positive, and in any case the argument produces an equality rather than an inequality." }
          ],
          "solution": "|A| = (−1)ⁿ|A| for a skew-symmetric matrix, and at n = 3 that says |A| = −|A|, so |A| = 0. The result is odd-order only: even-order skew determinants are generally non-zero."
        },
        {
          "t": "mcq",
          "q": "adj(<i>AB</i>) equals:",
          "correct": 1,
          "opts": [
            { "label": "(adj <i>A</i>)(adj <i>B</i>)", "nudge": "This keeps the order, which is the classic error. The adjoint reverses it, exactly as the inverse does." },
            { "label": "(adj <i>B</i>)(adj <i>A</i>)", "nudge": null },
            { "label": "adj <i>A</i> + adj <i>B</i>", "nudge": "This treats the adjoint as additive. It is built from determinants of submatrices, which are wildly non-additive." },
            { "label": "adj(<i>BA</i>)", "nudge": "This assumes <i>AB</i> and <i>BA</i> behave alike, but matrix multiplication does not commute in general, and neither do their adjoints." }
          ],
          "solution": "adj(AB) = (adj B)(adj A). Both the inverse and the adjoint reverse the order of a product, and papers list the unreversed form as a keyed wrong option."
        },
        {
          "t": "mcq",
          "q": "If <i>A</i> is 3 × 3 with |<i>A</i>| = 2, then |adj(adj <i>A</i>)| equals:",
          "correct": 3,
          "opts": [
            { "label": "2", "nudge": "This ignores the powers completely. Each adjoint raises the determinant to the power <i>n</i> − 1." },
            { "label": "4", "nudge": "This applies one adjoint, not two. |adj <i>A</i>| = |<i>A</i>|<sup>2</sup> = 4 is a correct intermediate value, not the answer." },
            { "label": "8", "nudge": "This uses |<i>A</i>|<sup><i>n</i></sup> rather than the iterated exponent (<i>n</i> − 1)<sup>2</sup>." },
            { "label": "16", "nudge": null }
          ],
          "solution": "|adj(adj A)| = |A| to the power (n − 1)², that is |A|⁴ = 2⁴ = 16. At order 3 the three powers to keep straight are n = 3, n − 1 = 2 and (n − 1)² = 4."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[JEE Main] If |<i>A</i>| = 4 for a 3 × 3 matrix, find |3<i>A</i>| and |<i>A</i><sup>−1</sup>|.",
              "a": "|3A| = 3³ × 4 = 108 and |A⁻¹| = 1/4. Two different rules for two different operations, and mixing them up is the whole point of the question."
            },
            {
              "q": "[JEE Main] For 3 × 3 matrices with |<i>A</i>| = 2 and |<i>B</i>| = 5, find |adj(<i>AB</i>)|.",
              "a": "|AB| = 10, and |adj X| = |X|² at order 3, so |adj(AB)| = 100. You never need the reversal rule here, though going through (adj B)(adj A) gives the same answer."
            },
            {
              "q": "[JEE Main] Evaluate |0 <i>p</i> −<i>q</i> ; −<i>p</i> 0 <i>r</i> ; <i>q</i> −<i>r</i> 0|.",
              "a": "0. The diagonal is all zeros and every entry is the negative of its mirror, so the array is skew-symmetric of order 3, and 3 is odd."
            },
            {
              "q": "[JEE Advanced] For <i>f</i>(<i>x</i>) = |<i>x</i> <i>x</i><sup>2</sup> <i>x</i><sup>3</sup> ; 1 2<i>x</i> 3<i>x</i><sup>2</sup> ; 0 2 6<i>x</i>|, find <i>f</i>′(<i>x</i>) using the row rule.",
              "a": "Differentiating row 1 gives (1, 2x, 3x²), a copy of row 2, so that determinant is 0. Differentiating row 2 gives (0, 2, 6x), a copy of row 3, so that one is 0 too. Only the third term survives, and it comes to 6x². Expanding directly confirms it: f(x) = 2x³, so f′(x) = 6x²."
            },
            {
              "q": "[JEE Advanced] Show that |1 sin α cos α ; 1 sin β cos β ; 1 sin γ cos γ| = −4 sin((β − α)/2) sin((γ − α)/2) sin((γ − β)/2).",
              "a": "Run R₂ → R₂ − R₁ and R₃ → R₃ − R₁, then expand down the first column: Δ = (sin β − sin α)(cos γ − cos α) − (cos β − cos α)(sin γ − sin α). Convert every difference with the sum-to-product formulas and abbreviate u = (α + β)/2, v = (β − α)/2, U = (α + γ)/2, V = (γ − α)/2. The expression collapses to −4 sin v sin V (cos u sin U − sin u cos U) = −4 sin v sin V sin(U − u), and U − u = (γ − β)/2. Check at α = 60°, β = 30°, γ = 0°: both sides come to about 0.134."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Differentiating after expanding, when the entries are ugly.</b> For function-valued determinants the row-at-a-time rule is both faster and safer. Expanding first is legal, but on a 3 × 3 of trigonometric entries it is a minute you do not have.",
            "<b>Keeping the order in adj(<i>AB</i>).</b> It is (adj <i>B</i>)(adj <i>A</i>), reversed, exactly like (<i>AB</i>)<sup>−1</sup> = <i>B</i><sup>−1</sup><i>A</i><sup>−1</sup>.",
            "<b>Applying the skew-symmetric rule at even order.</b> The theorem is odd-order only. At even order the equation |<i>A</i>| = (−1)<sup><i>n</i></sup>|<i>A</i>| says nothing at all.",
            "<b>Power slips in the adjoint identities.</b> Track <i>n</i> against <i>n</i> − 1 against (<i>n</i> − 1)<sup>2</sup>. At order 3 those are 3, 2 and 4, and mixing them is a keyed distractor in several papers.",
            "<b>Pulling a global factor out of an elementwise rule.</b> <i>b</i><sub><i>ij</i></sub> = 2<sup><i>i</i>+<i>j</i></sup><i>a</i><sub><i>ij</i></sub> is not a scalar multiple of <i>A</i>: the factor depends on the position, so it must split into a row diagonal and a column diagonal.",
            "<b>Forgetting that an alternant is sign-sensitive.</b> Swapping two of the variables swaps two columns and flips the whole answer's sign, so a factorisation written in the wrong cyclic order is off by −1."
          ]
        },
        {
          "t": "protip",
          "html": "build a reflex for the three instant zeros that run through this whole chapter: a zero row or column, two proportional rows or columns, and an odd-order skew-symmetric array. any one of them lets you write 0 on sight and skip the entire expansion. and for anything symbolic, the column-sum move C₁ → C₁ + C₂ + C₃ is the universal first try: it costs nothing when it fails, and it finishes the question when it works."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "|<i>AB</i>| = |<i>A</i>||<i>B</i>| · |<i>A</i><sup><i>n</i></sup>| = |<i>A</i>|<sup><i>n</i></sup> · |<i>kA</i>| = <i>k</i><sup><i>n</i></sup>|<i>A</i>|",
              "note": "square, and the same order"
            },
            {
              "f": "<i>b</i><sub><i>ij</i></sub> = <i>f</i>(<i>i</i>)<i>g</i>(<i>j</i>)<i>a</i><sub><i>ij</i></sub> ⇒ |<i>B</i>| = |<i>D</i>||<i>A</i>||<i>G</i>|",
              "note": "row diagonal times column diagonal"
            },
            {
              "f": "Δ′ = differentiate one row, hold the rest, then add",
              "note": "the product rule in disguise"
            },
            {
              "f": "adj(<i>AB</i>) = (adj <i>B</i>)(adj <i>A</i>) · adj(<i>kA</i>) = <i>k</i><sup><i>n</i>−1</sup> adj <i>A</i>",
              "note": "reversed, exactly like the inverse"
            },
            {
              "f": "adj(adj <i>A</i>) = |<i>A</i>|<sup><i>n</i>−2</sup><i>A</i>",
              "note": "a matrix, not a number"
            },
            {
              "f": "odd-order skew-symmetric ⇒ Δ = 0",
              "note": "even order proves nothing"
            },
            {
              "f": "Vandermonde ⇒ product of differences · cyclic ⇒ factors through <i>a</i> + <i>b</i> + <i>c</i>",
              "note": "recognise the shape, do not expand it"
            }
          ],
          "aids": [
            "“multiply the dets, differentiate row by row, reverse the adj, zero the odd skew”",
            "“three, two, four: the powers at order three”",
            "“a position-dependent factor splits into rows times columns”"
          ]
        }
      ]
    }
  ]
};

export default ch12Determinants;
