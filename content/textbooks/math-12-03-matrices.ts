/**
 * Chapter 03 · Matrices. Mathematics, Class 12.
 *
 * Restructured from pages 150 to 208 of the Drona Class 12 Mathematics Master
 * Reference into the block system in design_handoff_textbooks/CONTENT_SPEC.md,
 * following math-11-01-sets.ts and math-11-06-permutations.ts for voice and
 * density.
 *
 * The source is two documents stacked: a typeset chapter of five subtopics
 * (00 Foundations and Representation, 01 Matrix Algebra and Operations, 02
 * Symmetric and Skew-Symmetric, 03 Invertible Matrices and Row Operations, 04
 * Special Square Matrices and Chapter Synthesis) and a Round 2 Addendum of six
 * parts (A near-diagonal powers, B matrix equations through the inverse, C
 * counting structured matrices, D inversion meets symmetry and orthogonality,
 * E the trace, P what JEE actually asks). There is no Round 1 Supplement for
 * this chapter.
 *
 * Six topics is the schema's ceiling, so the addenda are folded into the topic
 * that already owns their engine rather than given topics of their own:
 *
 *   - Addendum C, counting structured matrices, sits in Topic 03 directly
 *     under the free-entry counts n(n + 1)/2 and n(n − 1)/2 it exponentiates.
 *     Counting it anywhere else would state the free-cell count twice.
 *   - Addendum B, AX = B and side discipline, sits in Topic 04. Subtopic 03
 *     builds the inverse and never spends it; spending it is the board
 *     question, and it belongs next to the reduction that produced it.
 *   - Addendum D splits along its own seam: the bridge identity and the two
 *     symmetry corollaries go to Topic 04 with the other inverse laws, and the
 *     orthogonal material goes to Topic 05 where orthogonality is defined.
 *   - Addendum E, the trace, sits in Topic 05 under Subtopic 04's own trace
 *     section, which asserts tr(AB) = tr(BA) and never proves it.
 *   - Addendum A, the truncated binomial for λI + N, and Subtopic 04's matrix
 *     polynomials become Topic 06, together with Addendum P's archetypes. That
 *     is the one body of material the printed chapter genuinely under-serves,
 *     and by P's own count it is roughly a third of the JEE bank.
 *
 * Deliberate compressions. Subtopic 01's type list (row, column, square,
 * diagonal, scalar, identity, null, triangular) is pulled forward into Topic
 * 01, where representation lives, rather than sitting between addition and
 * multiplication. Addendum P's paper-by-paper distribution table is carried as
 * hook copy and as example provenance rather than reproduced: a student needs
 * to know which shapes repeat, not which session each came from.
 *
 * ONE SOURCE ERROR THE ERRATA DOES NOT COVER. Round 2 Addendum, Practice A,
 * question 5 (page 190) prints
 *
 *     A¹⁰ = 2¹⁰ I + 10 · 2⁸ N + 45 · 2⁷ N² = 1024 I + 2560 N + 5760 N²
 *
 * for A = 2I + N with N³ = O. Both scalars are one power of 2 too small. The
 * book's own formula on page 188 is (λI + N)ⁿ = λⁿ I + nλⁿ⁻¹ N + C(n,2)λⁿ⁻² N²,
 * which at λ = 2, n = 10 gives 2¹⁰ I + 10 · 2⁹ N + 45 · 2⁸ N², that is
 *
 *     A¹⁰ = 1024 I + 5120 N + 11520 N².
 *
 * The corrected values are what Topic 06 teaches and practises. The errata at
 * the back of the book (pages 830 to 832) lists exactly one Chapter 3 item,
 * the truncated order list for a 24-element matrix on page 153; that
 * correction is applied in Topic 01, where the full list of eight orders is
 * printed. Every other numerical answer in the chapter and the addendum was
 * recomputed and checks out.
 *
 * Two notation conventions, both forced by components/textbook/markup.tsx.
 * Transpose is written with the literal raised glyph ᵀ rather than <sup>T</sup>:
 * the renderer's superscript table has no capital T, so a tagged T falls back
 * to small text sitting on the baseline, and "Aᵀ = A" would read as a product.
 * Inverses use <sup>−1</sup> in markup fields and ⁻¹ in the plain-text ones
 * (chips, captions, deriv.why, snapshot.note and aids, def.term, formula
 * kicker and tag, proc and defgrid titles, ex.tag), which render identically.
 * Display matrices are drawn with the bracket pieces ⎡ ⎢ ⎣ ⎤ ⎥ ⎦ and <br>
 * between rows; in running prose a matrix is named by its rows instead.
 *
 * Three `diagram` blocks, deliberately few. There is no matrix-grid figure
 * kind and a matrix is honest as text, so the order tables, the operation
 * table and the free-cell counts are `defgrid`, and every displayed matrix is
 * a `formula` or a `deriv` step. The three figures are the places where the
 * mathematics is genuinely geometric: a `plot` of the unit square under AB and
 * under BA, which is what non-commutativity looks like; a `plot` of a singular
 * matrix flattening the plane onto a line, which is why no inverse exists; and
 * a `unitcircle` for the rotation matrix, whose first column is the point the
 * sweep lands on. Chips and captions render as plain text, so they carry no
 * inline tags.
 */
import type { Chapter } from '@/lib/textbooks';

export const ch12Matrices: Chapter = {
  "chapter": "03",
  "title": "Matrices",
  "subject": "Mathematics",
  "klass": "Class 12",
  "topics": [
    {
      "n": "01",
      "title": "Building a Grid, Counting the Grids",
      "chip": "01 BUILD",
      "kalam": "row before column",
      "blocks": [
        {
          "t": "hook",
          "html": "<b>01 · Building a Grid, Counting the Grids</b><br>Almost every CBSE paper opens the matrices section here, with a construct-the-matrix or find-the-order question worth 1–2 marks. They are the cheapest marks in the chapter and students lose them only through carelessness. JEE Main turns the same idea into fast objective counting: how many orders does a 36-element matrix have, how many 3 × 3 matrices can be built from two symbols. (NEET does not test mathematics.)<br><br><b>02 · The Three Operations</b><br>Near-guaranteed marks on CBSE Boards, where equality of matrices and the three operations appear as 1–3 mark questions almost every year, usually as <b>find the unknowns</b> from a matrix equation. JEE Main reliably carries one question on multiplication, powers or non-commutativity, and the traps are all in one cluster: <i>AB</i> ≠ <i>BA</i>, <i>AB</i> = <i>O</i> without a zero factor, and no cancellation. JEE Advanced rarely tests this alone; it weaves it into longer problems.<br><br><b>03 · Transpose, Symmetric and Skew</b><br>A perennial CBSE favourite: <b>express a matrix as the sum of a symmetric and a skew-symmetric matrix</b> is almost a fixed 3–4 mark question, and one-mark identifications appear alongside it. JEE Main asks one property question a year, typically the nature of <i>AB</i> − <i>BA</i>, the parity of powers of a skew matrix, or a count of structured matrices. JEE Advanced folds the same transpose-flip into longer classifications.<br><br><b>04 · Inverses by Row Operations</b><br><b>Find the inverse using elementary row operations</b> is a standard 4-mark CBSE question, sometimes 6 marks for a 3 × 3, and <b>express the system as AX = B and solve</b> is a fixed 4–6 mark item. JEE Main tests invertibility conditions, the reversal law (<i>AB</i>)<sup>−1</sup> = <i>B</i><sup>−1</sup><i>A</i><sup>−1</sup>, and punishes multiplying from the wrong side. The determinant test arrives in Chapter 4; nothing in this topic needs it.<br><br><b>05 · Special Matrices and the Trace</b><br>Idempotent, involutory, nilpotent and orthogonal matrices are JEE Main and Advanced favourites, both on their own and buried inside multi-step problems. Counting matrices under a trace condition, for instance the 3 × 3 matrices over {−1, 0, 1} with tr(<i>AA</i>ᵀ) = 3, is one of the most repeated shapes in the whole question bank. CBSE tests the trace rules lightly, usually as a one-liner.<br><br><b>06 · High Powers and Hidden Structure</b><br>The single biggest JEE cluster in this chapter, roughly a third of the question bank. The matrix always carries a concealed property (<i>A</i><sup>2</sup> = <i>I</i>, nilpotence, a rotation angle, cube roots of unity) and you are asked for <i>A</i><sup>31</sup>, <i>A</i><sup>50</sup>, one entry of a high power, or a long sum. CBSE tests the matrix-polynomial identity <i>f</i>(<i>A</i>) = <i>O</i> and reads <i>A</i><sup>−1</sup> straight off it. Brute force is always the intended wrong path."
        },
        {
          "t": "p",
          "html": "Walk up to the reservation board at New Delhi station. Down the left it lists trains, Rajdhani, Shatabdi, Duronto. Across the top it lists classes, 1A, 2A, 3A, SL. Inside the grid every cell holds one number, the fare for <i>that</i> train in <i>that</i> class. Strip away the headings and what is left is a <b>matrix</b>: a rectangular arrangement of numbers in rows and columns. Here is the idea the whole chapter hangs on. <b>Position carries meaning.</b> The number in row 2, column 3 is not interchangeable with the number in row 3, column 2. One is the 2A fare of the Shatabdi, the other the SL fare of the Duronto, and swapping them is not a rearrangement, it is a wrong answer."
        },
        {
          "t": "think",
          "html": "the order m × n is not decoration, it is the shape of the grid. twelve numbers could be a 1 × 12 strip, a 3 × 4 block, a 4 × 3 block or a 2 × 6. same twelve numbers, four different objects. rows first, columns second, every single time."
        },
        {
          "t": "def",
          "term": "Matrix and its order",
          "html": "A rectangular arrangement of numbers in <i>m</i> rows and <i>n</i> columns, written <i>A</i> = [<i>a</i><sub>ij</sub>]<sub>m×n</sub>. The entry <i>a</i><sub>ij</sub> sits in row <i>i</i> and column <i>j</i>. The ordered pair <i>m</i> × <i>n</i> is the <b>order</b>, and it is ordered: a 2 × 3 matrix and a 3 × 2 matrix are different objects even though both hold 6 numbers."
        },
        {
          "t": "p",
          "html": "A matrix is a filled-in grid, so if someone hands you a <b>recipe</b> for each cell, a formula <i>a</i><sub>ij</sub> that depends on the row number <i>i</i> and the column number <i>j</i>, you simply walk the grid and apply the recipe. It is exactly like filling a cinema seating chart where the ticket price depends on the row and the seat: row 1 seat 1 has one price, row 2 seat 3 another, both read off the same pricing rule. The rule can be piecewise, switching on whether <i>i</i> is less than, equal to or greater than <i>j</i>, and the only skill it tests is not swapping the two indices."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · BUILD FROM A RULE",
          "tag": "A = [aᵢⱼ] of order m × n",
          "main": "a<sub>ij</sub> = f(i, j)",
          "legend": [
            "<i>i</i> is the <b>row</b> number, running 1 to <i>m</i> · <i>j</i> is the <b>column</b> number, running 1 to <i>n</i>",
            "Substitute each pair (<i>i</i>, <i>j</i>) into the rule and write the value into that cell. Nothing is left blank: the grid has exactly <i>mn</i> cells and every one is filled.",
            "A piecewise rule is decided cell by cell, by comparing <i>i</i> with <i>j</i> first and only then computing."
          ],
          "note": "The number of elements equals m × n exactly. A matrix cannot be partially filled, and there is no such thing as a ragged row."
        },
        {
          "t": "defgrid",
          "title": "The named shapes",
          "rows": [
            {
              "k": "Row · column matrix",
              "v": "one row, order 1 × <i>n</i> · one column, order <i>m</i> × 1"
            },
            {
              "k": "Square matrix",
              "v": "equal rows and columns, order <i>n</i> × <i>n</i>"
            },
            {
              "k": "Diagonal matrix",
              "v": "square, with <i>a</i><sub>ij</sub> = 0 for every <i>i</i> ≠ <i>j</i>"
            },
            {
              "k": "Scalar matrix",
              "v": "diagonal, and all the diagonal entries equal"
            },
            {
              "k": "Identity <i>I</i><sub>n</sub> · null <i>O</i>",
              "v": "scalar with every diagonal entry 1 · every entry 0, any order"
            },
            {
              "k": "Triangular",
              "v": "upper: zeros below the diagonal · lower: zeros above it"
            }
          ]
        },
        {
          "t": "p",
          "html": "Now the counting. Two questions get asked, they sound alike, and they have nothing to do with each other. <b>How many orders</b> can a matrix with <i>N</i> elements have? That is a question about factor pairs of <i>N</i>. <b>How many matrices</b> of a given order can be built from a fixed set of symbols? That is a question about filling cells independently, and it is the multiplication principle from Class 11 wearing a new costume. Read which one is being asked before you compute anything."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · HOW MANY ORDERS",
          "tag": "a matrix with exactly N elements",
          "main": "number of orders = d(N)",
          "legend": [
            "<i>d</i>(<i>N</i>) is the <b>number of divisors</b> of <i>N</i>. Choosing the row count <i>m</i> forces <i>n</i> = <i>N</i>/<i>m</i>, so an order exists for every divisor and for no other number.",
            "Factor <i>N</i> = <i>p</i><sup>a</sup><i>q</i><sup>b</sup> ⋯ and multiply the (exponent + 1)s: <i>d</i>(<i>N</i>) = (<i>a</i> + 1)(<i>b</i> + 1) ⋯",
            "<i>N</i> prime ⇒ exactly 2 orders, 1 × <i>N</i> and <i>N</i> × 1."
          ],
          "note": "24 = 2³ × 3 has (3 + 1)(1 + 1) = 8 divisors, so 8 orders: 1 × 24, 2 × 12, 3 × 8, 4 × 6, 6 × 4, 8 × 3, 12 × 2, 24 × 1. Write the tail of that list, not just the head."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · HOW MANY MATRICES",
          "tag": "order m × n, entries drawn from a k-element set",
          "main": "k<sup>mn</sup>",
          "legend": [
            "There are <i>mn</i> cells and each is filled independently in <i>k</i> ways, so the counts multiply.",
            "<b>Base</b> is the number of symbols allowed, <b>exponent</b> is the number of cells. Getting them the wrong way round is the designed error.",
            "3 × 3 over {0, 1} gives 2<sup>9</sup> = 512 · 2 × 2 over {1, 2, 3} gives 3<sup>4</sup> = 81."
          ],
          "note": "Repetition is allowed and is never mentioned: two cells may hold the same number, so this is a power, not a falling product."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY ORDERS ARE DIVISORS, TAP A LINE",
          "steps": [
            {
              "eq": "the grid is full, so mn = N",
              "why": "A matrix has no empty cells. So the row count times the column count is exactly the number of elements, and that single equation is the whole problem."
            },
            {
              "eq": "choose m, and n = N/m is forced",
              "why": "There is no freedom left once the number of rows is fixed. So an order is not a pair of independent choices, it is one choice of m together with whatever n that choice implies."
            },
            {
              "eq": "n must be a positive integer, so m divides N",
              "why": "A matrix cannot have two and a half columns. So the legal values of m are exactly the divisors of N, no more and no fewer, and the count of orders is the count of divisors."
            },
            {
              "eq": "N = p<sup>a</sup> q<sup>b</sup> ⋯ ⇒ d(N) = (a + 1)(b + 1) ⋯",
              "why": "A divisor is built by choosing an exponent for each prime, from 0 up to that prime's exponent in N. That is a + 1 choices for p, b + 1 for q, and the multiplication principle multiplies them."
            },
            {
              "eq": "check: N = 18 = 2 · 3<sup>2</sup> ⇒ (1 + 1)(2 + 1) = 6",
              "why": "List them and count: 1 × 18, 2 × 9, 3 × 6, 6 × 3, 9 × 2, 18 × 1. Six orders, matching the formula. Note that 3 × 6 and 6 × 3 are both counted, because the order is an ordered pair."
            }
          ]
        },
        {
          "t": "proc",
          "title": "Filling a grid from a rule",
          "steps": [
            "<b>Draw the empty grid first</b>, with the right number of rows and columns, and pencil the labels <i>a</i><sub>11</sub>, <i>a</i><sub>12</sub>, … into the cells. Nine out of ten construction errors are an entry written into the wrong box.",
            "<b>Fix the row, sweep the columns.</b> Do the whole of row 1 before touching row 2. It keeps <i>i</i> constant while only <i>j</i> moves, which is the easiest way to not swap them.",
            "<b>For a piecewise rule, decide the branch before you compute.</b> Compare <i>i</i> and <i>j</i>, pick the line of the definition, and only then substitute. The diagonal cells are where <i>i</i> = <i>j</i>, so they need the <b>equality</b> branch.",
            "<b>Count the entries at the end.</b> A 2 × 3 grid must contain 6 numbers. If you have written 5 or 7 you have already lost the mark, and you can see it in one second."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Construct the 2 × 3 matrix <i>A</i> = [<i>a</i><sub>ij</sub>] where <i>a</i><sub>ij</sub> = 2<i>i</i> + 3<i>j</i>.",
          "steps": [
            "Six cells. Row 1 first, with <i>i</i> = 1: 2 + 3 = 5, 2 + 6 = 8, 2 + 9 = 11.",
            "Row 2, with <i>i</i> = 2: 4 + 3 = 7, 4 + 6 = 10, 4 + 9 = 13.",
            "Write the values into the grid in the order you computed them."
          ],
          "ans": "⎡ 5   8   11 ⎤<br>⎣ 7   10   13 ⎦"
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD · PIECEWISE RULE",
          "q": "Construct the 2 × 2 matrix <i>A</i> = [<i>a</i><sub>ij</sub>] where <i>a</i><sub>ij</sub> = <i>i</i> + <i>j</i> when <i>i</i> ≤ <i>j</i>, and <i>a</i><sub>ij</sub> = <i>i</i> − <i>j</i> when <i>i</i> > <i>j</i>.",
          "steps": [
            "Decide the branch first, compute second. <i>a</i><sub>11</sub>: <i>i</i> = <i>j</i>, so the ≤ branch, giving 1 + 1 = 2.",
            "<i>a</i><sub>12</sub>: <i>i</i> < <i>j</i>, so 1 + 2 = 3. <i>a</i><sub>21</sub>: <i>i</i> > <i>j</i>, so 2 − 1 = 1.",
            "<i>a</i><sub>22</sub>: <i>i</i> = <i>j</i> again, so 2 + 2 = 4."
          ],
          "ans": "⎡ 2   3 ⎤<br>⎣ 1   4 ⎦. The diagonal takes the ≤ branch, which is the cell students most often get wrong"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN · COUNTING ORDERS",
          "q": "A matrix has 18 elements. How many orders can it have? What if it had 7 elements instead?",
          "steps": [
            "Orders correspond to divisors. 18 = 2 × 3<sup>2</sup>, so <i>d</i>(18) = (1 + 1)(2 + 1) = 6.",
            "List them as a check: 1 × 18, 2 × 9, 3 × 6, 6 × 3, 9 × 2, 18 × 1.",
            "7 is prime, so <i>d</i>(7) = 2, namely 1 × 7 and 7 × 1."
          ],
          "ans": "6 orders for 18, and 2 orders for 7"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN · COUNTING MATRICES",
          "q": "How many distinct 3 × 3 matrices use only the entries 0 and 1? How many 2 × 2 matrices use entries from {1, 2, 3}?",
          "steps": [
            "Each cell is filled independently, so the answer is the number of symbols raised to the number of cells.",
            "3 × 3 has 9 cells and <i>k</i> = 2: 2<sup>9</sup> = 512.",
            "2 × 2 has 4 cells and <i>k</i> = 3: 3<sup>4</sup> = 81."
          ],
          "ans": "512 and 81. Writing 3<sup>2</sup> or 9<sup>2</sup> is the base-and-exponent swap the examiner is fishing for"
        },
        {
          "t": "mcq",
          "q": "The number of all possible matrices of order 3 × 3 with each entry 0 or 2 is",
          "correct": 3,
          "opts": [
            {
              "label": "27",
              "nudge": "That is 3<sup>3</sup>. You counted rows as cells: a 3 × 3 grid has 9 cells, not 3."
            },
            {
              "label": "18",
              "nudge": "That is 2 × 9, adding up the cells instead of multiplying the choices. Each cell is an independent AND, so the 2s multiply."
            },
            {
              "label": "81",
              "nudge": "That is 3<sup>4</sup>, the 2 × 2 answer over a 3-element set. Both the base and the exponent belong to a different question."
            },
            {
              "label": "512",
              "nudge": null
            }
          ],
          "solution": "Nine cells, each filled in 2 ways: 2<sup>9</sup> = 512. The entries being 0 and 2 rather than 0 and 1 changes nothing, because only the <b>count</b> of allowed symbols matters."
        },
        {
          "t": "mcq",
          "q": "If a matrix has 5 elements, the number of possible orders is",
          "correct": 1,
          "opts": [
            {
              "label": "1",
              "nudge": "You counted 1 × 5 and 5 × 1 as the same thing. Order is an ordered pair, so a row of five and a column of five are different matrices."
            },
            {
              "label": "2",
              "nudge": null
            },
            {
              "label": "5",
              "nudge": "That is the number of elements, not the number of orders. The question asks how many shapes the grid can take."
            },
            {
              "label": "10",
              "nudge": "You doubled the element count. Doubling is not what makes a pair ordered; the two orders 1 × 5 and 5 × 1 are already both in the list."
            }
          ],
          "solution": "5 is prime, so its only divisors are 1 and 5, giving exactly the two orders 1 × 5 and 5 × 1."
        },
        {
          "t": "mcq",
          "q": "A matrix has 36 elements. How many possible orders can it have?",
          "correct": 2,
          "opts": [
            {
              "label": "5",
              "nudge": "You listed only the pairs with <i>m</i> ≤ <i>n</i>, that is 1 × 36, 2 × 18, 3 × 12, 4 × 9, 6 × 6, and stopped. The reversed pairs are separate orders."
            },
            {
              "label": "6",
              "nudge": "That is the divisor count of 18 or 12, not of 36. Factor properly: 36 = 2<sup>2</sup> × 3<sup>2</sup>."
            },
            {
              "label": "9",
              "nudge": null
            },
            {
              "label": "10",
              "nudge": "You doubled the five pairs with <i>m</i> ≤ <i>n</i> and forgot that 6 × 6 is its own reverse, so it must not be counted twice."
            }
          ],
          "solution": "36 = 2<sup>2</sup> × 3<sup>2</sup>, so <i>d</i>(36) = (2 + 1)(2 + 1) = 9. The nine orders are 1 × 36, 2 × 18, 3 × 12, 4 × 9, 6 × 6, 9 × 4, 12 × 3, 18 × 2, 36 × 1."
        },
        {
          "t": "mcq",
          "q": "How many 2 × 3 matrices can be formed with entries from {0, 1, 2}?",
          "correct": 3,
          "opts": [
            {
              "label": "6",
              "nudge": "That is the number of cells. You answered a different question: how big is the grid, not how many grids exist."
            },
            {
              "label": "64",
              "nudge": "That is 2<sup>6</sup>. You used 2 symbols; the set {0, 1, 2} has 3."
            },
            {
              "label": "216",
              "nudge": "That is 6<sup>3</sup>, base and exponent swapped. The base is the number of symbols (3), the exponent is the number of cells (6)."
            },
            {
              "label": "729",
              "nudge": null
            }
          ],
          "solution": "There are 2 × 3 = 6 cells and 3 symbols per cell, so 3<sup>6</sup> = 729."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Construct the 3 × 2 matrix <i>A</i> = [<i>a</i><sub>ij</sub>] with <i>a</i><sub>ij</sub> = (<i>i</i> + 2<i>j</i>)<sup>2</sup>/2.",
              "a": "⎡ 4.5    12.5 ⎤<br>⎢ 8      18   ⎥<br>⎣ 12.5   24.5 ⎦"
            },
            {
              "q": "[CBSE] A matrix has 24 elements. Write all possible orders. If it had 13 elements, how many orders are possible?",
              "a": "1 × 24, 2 × 12, 3 × 8, 4 × 6, 6 × 4, 8 × 3, 12 × 2, 24 × 1, so 8 orders. 13 is prime, so 2 orders."
            },
            {
              "q": "[JEE Main] Construct the 2 × 2 matrix <i>A</i> = [<i>a</i><sub>ij</sub>] where <i>a</i><sub>ij</sub> = |−3<i>i</i> + <i>j</i>|.",
              "a": "⎡ 2   1 ⎤<br>⎣ 5   4 ⎦"
            },
            {
              "q": "[JEE Main] How many 3 × 3 matrices have entries from {0, 1, 2, 3}?",
              "a": "4<sup>9</sup> = 262,144"
            },
            {
              "q": "[JEE Main] For which values of <i>N</i> below 30 does an <i>N</i>-element matrix admit exactly 3 possible orders?",
              "a": "<i>N</i> = 4, 9, 25. A divisor count of 3 forces <i>N</i> = <i>p</i><sup>2</sup> for a prime <i>p</i>."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Swapping <i>i</i> and <i>j</i>.</b> Writing the value of <i>a</i><sub>21</sub> into the <i>a</i><sub>12</sub> cell. Fix the row, sweep the columns, and the swap cannot happen.",
            "<b>Treating <i>m</i> × <i>n</i> and <i>n</i> × <i>m</i> as the same order.</b> They are different matrices. This alone turns 8 orders into 5 and 6 orders into 4.",
            "<b>Counting divisors carelessly.</b> Factor into primes and multiply the (exponent + 1)s. Listing pairs by hand works too, but only if you write the whole list, including the reversed tail.",
            "<b>Swapping base and exponent in <i>k</i><sup>mn</sup>.</b> The base is how many symbols, the exponent is how many cells. 2<sup>9</sup> is not 9<sup>2</sup>.",
            "<b>Choosing the wrong branch of a piecewise rule on the diagonal.</b> On the diagonal <i>i</i> = <i>j</i>, so read whether the definition puts equality with the ≤ case or the ≥ case."
          ]
        },
        {
          "t": "protip",
          "html": "for “possible orders,” factor <i>N</i> and multiply the (exponent + 1)s, then write the whole list including the reversed pairs. for “how many matrices,” it is always (choices per cell) raised to the (number of cells). two different questions, two different tools, and reading which one is being asked takes three seconds."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "A = [a<sub>ij</sub>]<sub>m×n</sub>",
              "note": "i is the row, j is the column, always"
            },
            {
              "f": "elements = m × n",
              "note": "the grid is completely filled"
            },
            {
              "f": "orders of an N-element matrix = d(N)",
              "note": "one order per divisor, reversed pairs included"
            },
            {
              "f": "matrices of order m × n over a k-set = k<sup>mn</sup>",
              "note": "base is the symbols, exponent is the cells"
            },
            {
              "f": "2 × 3 ≠ 3 × 2",
              "note": "order is an ordered pair"
            }
          ],
          "aids": [
            "“i before j, row before column”",
            "“orders are divisors, matrices are powers”"
          ]
        }
      ]
    },
    {
      "n": "02",
      "title": "The Three Operations",
      "chip": "02 OPERATE",
      "kalam": "inner match, outer survive",
      "blocks": [
        {
          "t": "p",
          "html": "Back to the fare board. Suppose the railways announce a flat festival surcharge, printed as a second board with exactly the same trains down the side and the same classes across the top, holding the extra rupees per cell. To get the new fare board you add the two boards cell by cell. That is <b>matrix addition</b>, and notice the hidden condition it carries: it works only because both boards have the same layout. You could never add a 3-train board to a 5-train board, because there would be cells with no partner. Now suppose instead that every fare rises by 10 per cent. You multiply every single cell by 1.1. That is <b>scalar multiplication</b>, one ordinary number stretching the whole grid uniformly."
        },
        {
          "t": "think",
          "html": "the third operation is the odd one. picture a sweet shop bill: one matrix lists how many kilos of each mithai a customer buys, another lists the price per kilo. the total is not cell times cell. it is a whole <i>row</i> of quantities meeting a whole <i>column</i> of prices, multiplied off against each other and added into one number. row meets column, one rupee figure comes out."
        },
        {
          "t": "def",
          "term": "Equality of matrices",
          "html": "<i>A</i> = <i>B</i> exactly when two things hold: they have the <b>same order</b>, and <i>a</i><sub>ij</sub> = <i>b</i><sub>ij</sub> for every <i>i</i> and <i>j</i>. Both halves matter. Matrices of different orders are never equal, whatever their entries. And because equality is defined entry by entry, one matrix equation is a whole system of ordinary scalar equations bundled together: a single 2 × 2 equation is secretly four."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · ADD AND SCALE",
          "tag": "A and B of the same order m × n",
          "main": "(A + B)<sub>ij</sub> = a<sub>ij</sub> + b<sub>ij</sub><br>(kA)<sub>ij</sub> = k a<sub>ij</sub>",
          "legend": [
            "Addition demands <b>identical order</b>. Different orders leave cells with no partner, so the sum is <b>undefined</b>, which is not the same thing as zero.",
            "The result keeps the order of the inputs. Addition is commutative and associative, <i>A</i> + <i>O</i> = <i>A</i>, and <i>A</i> + (−<i>A</i>) = <i>O</i>.",
            "Scalar multiplication is defined for every order and obeys <i>k</i>(<i>A</i> + <i>B</i>) = <i>kA</i> + <i>kB</i>, (<i>k</i> + <i>l</i>)<i>A</i> = <i>kA</i> + <i>lA</i>, (<i>kl</i>)<i>A</i> = <i>k</i>(<i>lA</i>)."
          ],
          "note": "Subtraction is A + (−1)B, so it inherits the same-order condition unchanged."
        },
        {
          "t": "p",
          "html": "Multiplication is the operation that trips students up, because it is <b>not</b> done cell by cell. To get one entry of the product you take a whole row of the first matrix and a whole column of the second, multiply them off term by term, and add the results into a single number. That handshake is why the operation cares so much about dimensions: the row and the column must have the same length, or there is nothing to pair off. It also explains what the product <i>means</i>. Multiplying encodes the <b>chaining of two processes</b>, first apply <i>B</i>, then apply <i>A</i>, and the shared middle index is what the sum runs over."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · ROW MEETS COLUMN",
          "tag": "A of order m × n, B of order n × p",
          "main": "(AB)<sub>ij</sub> = Σ<sub>r=1</sub><sup>n</sup> a<sub>ir</sub> b<sub>rj</sub>",
          "legend": [
            "Defined only when cols(<i>A</i>) = rows(<i>B</i>). The result has order <i>m</i> × <i>p</i>, the two <b>outer</b> numbers.",
            "Row <i>i</i> of <i>A</i> against column <i>j</i> of <i>B</i>, term by term, added. One row and one column produce exactly one number.",
            "<i>AB</i> can be perfectly well defined while <i>BA</i> does not exist at all, and even when both exist they are usually different matrices."
          ],
          "note": "It is not entrywise. AB is never [a_ij b_ij]; that is a different operation and it is not on the syllabus."
        },
        {
          "t": "defgrid",
          "title": "Defined when, and what comes out",
          "rows": [
            {
              "k": "<i>A</i> + <i>B</i>",
              "v": "needs the same order <i>m</i> × <i>n</i> · result <i>m</i> × <i>n</i>"
            },
            {
              "k": "<i>kA</i>, scalar <i>k</i>",
              "v": "always defined · result <i>m</i> × <i>n</i>"
            },
            {
              "k": "<i>AB</i>",
              "v": "needs cols(<i>A</i>) = rows(<i>B</i>) · result <i>m</i> × <i>p</i>"
            },
            {
              "k": "Conformability check",
              "v": "write (<i>m</i> × <i>n</i>)(<i>n</i> × <i>p</i>) and look at the inner pair"
            },
            {
              "k": "Identity",
              "v": "<i>I</i><sub>m</sub><i>A</i> = <i>A</i> = <i>AI</i><sub>n</sub>, the do-nothing matrix"
            },
            {
              "k": "A chain <i>ABC</i>",
              "v": "exists when every adjacent inner pair matches, and its order is the outermost pair"
            }
          ]
        },
        {
          "t": "proc",
          "title": "Multiplying two matrices",
          "steps": [
            "<b>Conformability first, arithmetic second.</b> Write the two orders touching, (<i>m</i> × <i>n</i>)(<i>n</i> × <i>p</i>). If the two middle numbers match, the product lives and inherits the outer pair <i>m</i> × <i>p</i>. If they do not, stop and write <b>not defined</b>.",
            "<b>Draw the empty result grid</b> of order <i>m</i> × <i>p</i> before computing anything. Knowing you owe six numbers stops you from producing four.",
            "<b>For the entry in row <i>i</i>, column <i>j</i></b>, run your left index finger along row <i>i</i> of <i>A</i> and your right one down column <i>j</i> of <i>B</i>, multiplying the pairs you meet and adding as you go.",
            "<b>Fill the result row by row.</b> Keeping <i>i</i> fixed while <i>j</i> moves means you re-use the same row of <i>A</i> for a whole row of answers, which is faster and much harder to misalign.",
            "<b>Sanity check one entry the other way.</b> Recompute a single cell, ideally a corner, before you write the final bracket."
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY ROW TIMES COLUMN, TAP A LINE",
          "steps": [
            {
              "eq": "B: input → middle · A: middle → output",
              "why": "Read the product AB as two processes chained, B running first and A second. A matrix is a machine that turns one list of numbers into another, and multiplying two of them should mean running one machine and then the other."
            },
            {
              "eq": "input j reaches middle r with weight b<sub>rj</sub>",
              "why": "That is what the entry in row r, column j of B says: how much of input j arrives at middle slot r. The index j is the input, r is the middle, and the order of the two indices is not negotiable."
            },
            {
              "eq": "middle r reaches output i with weight a<sub>ir</sub>",
              "why": "Same reading, one machine later. So a single path from input j to output i passes through exactly one middle slot r."
            },
            {
              "eq": "that path contributes a<sub>ir</sub> b<sub>rj</sub>",
              "why": "The two weights multiply along a path, exactly as the multiplication principle in counting multiplies stages. This is the term you see inside the sum, and now it has a meaning rather than being a rule."
            },
            {
              "eq": "(AB)<sub>ij</sub> = Σ<sub>r</sub> a<sub>ir</sub> b<sub>rj</sub>",
              "why": "The entry has to gather every path from input j to output i, and the paths are indexed by the middle slot, so the contributions add. That is the definition, derived rather than announced."
            },
            {
              "eq": "r runs over the middle, so cols(A) = rows(B)",
              "why": "The sum only makes sense if A and B agree on how many middle slots there are. That single requirement is the conformability condition, and it is also why AB can exist while BA does not."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "DIAGRAM · TAP AN ORDER, WATCH THE SQUARE MOVE",
          "chips": ["THE SQUARE", "SHEAR A", "A THEN B", "B THEN A"],
          "captions": [
            "The unit square, corners (0, 0), (1, 0), (1, 1), (0, 1). Every 2 by 2 matrix is a machine that moves the plane, and the honest way to see what one does is to watch where this square goes. All three matrices in the next pictures preserve its area, so any difference you see is a difference of shape, not of size.",
            "A has rows (1, 1) and (0, 1). It leaves the bottom edge alone and pushes the top edge one unit to the right, so the square leans into a parallelogram. Nothing controversial yet. The point of the next two pictures is that doing this at a different moment gives a different answer.",
            "A first, then B, which is the single matrix BA with rows (1, 1) and (1, 2). Read a product right to left: the factor nearest the vector acts first. B has rows (1, 0) and (1, 1) and pushes the right edge upward, and the result is tall, reaching (2, 3).",
            "The same two matrices in the other order. B first, then A, which is AB with rows (2, 1) and (1, 1). The result is wide, reaching (3, 2). Same square, same two operations, different parallelogram. That is what AB not equal to BA looks like."
          ],
          "frames": [
            {
              "x": [-0.6, 3.6],
              "y": [-0.6, 3.6],
              "polygons": [
                { "points": [[0, 0], [1, 0], [1, 1], [0, 1]], "corners": true }
              ]
            },
            {
              "x": [-0.6, 3.6],
              "y": [-0.6, 3.6],
              "polygons": [
                { "points": [[0, 0], [1, 0], [1, 1], [0, 1]], "soft": true, "corners": false },
                { "points": [[0, 0], [1, 0], [2, 1], [1, 1]], "corners": true }
              ]
            },
            {
              "x": [-0.6, 3.6],
              "y": [-0.6, 3.6],
              "polygons": [
                { "points": [[0, 0], [1, 0], [1, 1], [0, 1]], "soft": true, "corners": false },
                { "points": [[0, 0], [1, 1], [2, 3], [1, 2]], "corners": true }
              ]
            },
            {
              "x": [-0.6, 3.6],
              "y": [-0.6, 3.6],
              "polygons": [
                { "points": [[0, 0], [1, 0], [1, 1], [0, 1]], "soft": true, "corners": false },
                { "points": [[0, 0], [2, 1], [3, 2], [1, 1]], "corners": true }
              ]
            }
          ]
        },
        {
          "t": "p",
          "html": "Four habits from ordinary algebra break here, and almost every trap in this chapter lives in that one cluster. Multiplication is <b>not commutative</b>: even when both products exist, <i>AB</i> and <i>BA</i> are usually different matrices. A product can be zero <b>without a zero factor</b>: with <i>A</i> keeping only the first coordinate and <i>B</i> keeping only the second, <i>AB</i> = <i>O</i> while neither is zero. <b>Cancellation fails</b>: <i>AB</i> = <i>AC</i> does not give <i>B</i> = <i>C</i>, so you may never divide a matrix out of an equation. And the <b>binomial square</b> keeps both cross terms, because you cannot collect <i>AB</i> and <i>BA</i> into 2<i>AB</i> unless you already know they are equal."
        },
        {
          "t": "defgrid",
          "title": "What survives, what breaks",
          "rows": [
            {
              "k": "Associative",
              "v": "<b>true</b>: <i>A</i>(<i>BC</i>) = (<i>AB</i>)<i>C</i>, whenever the products exist"
            },
            {
              "k": "Distributive",
              "v": "<b>true</b>: <i>A</i>(<i>B</i> + <i>C</i>) = <i>AB</i> + <i>AC</i> and (<i>A</i> + <i>B</i>)<i>C</i> = <i>AC</i> + <i>BC</i>"
            },
            {
              "k": "Commutative",
              "v": "<b>false</b>: <i>AB</i> ≠ <i>BA</i> in general, even for square matrices"
            },
            {
              "k": "Zero product",
              "v": "<b>false</b>: <i>AB</i> = <i>O</i> does not force <i>A</i> = <i>O</i> or <i>B</i> = <i>O</i>"
            },
            {
              "k": "Cancellation",
              "v": "<b>false</b>: <i>AB</i> = <i>AC</i> does not give <i>B</i> = <i>C</i>"
            },
            {
              "k": "Binomial square",
              "v": "(<i>A</i> + <i>B</i>)<sup>2</sup> = <i>A</i><sup>2</sup> + <i>AB</i> + <i>BA</i> + <i>B</i><sup>2</sup>, never 2<i>AB</i>"
            }
          ]
        },
        {
          "t": "proc",
          "title": "Solving a matrix equation",
          "steps": [
            "<b>Confirm both sides have the same order.</b> If they do not, there is no solution and saying so is the answer.",
            "<b>Do every scalar multiplication and addition on the left first</b>, so that the left side is a single matrix whose entries are expressions in the unknowns.",
            "<b>Equate corresponding entries.</b> This is the whole trick: equality is defined cell by cell, so one matrix equation becomes a system of ordinary scalar equations, one per cell.",
            "<b>Solve the scalar system</b> by whatever school method is quickest. Often each cell gives one unknown outright and no simultaneous work is needed at all.",
            "<b>Substitute back into one cell you did not use</b> to solve. A 2 × 2 equation gives four conditions and you usually need fewer, so there is a free check sitting there."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Find <i>a</i>, <i>b</i>, <i>c</i>, <i>d</i> if 2<i>A</i> + 3<i>B</i> = <i>C</i>, where <i>A</i> has rows (<i>a</i>, <i>b</i>) and (<i>c</i>, <i>d</i>), <i>B</i> has rows (1, −1) and (0, 2), and <i>C</i> has rows (5, 1) and (6, 16).",
          "steps": [
            "Scale first: 2<i>A</i> has rows (2<i>a</i>, 2<i>b</i>) and (2<i>c</i>, 2<i>d</i>); 3<i>B</i> has rows (3, −3) and (0, 6).",
            "Add: the left side has rows (2<i>a</i> + 3, 2<i>b</i> − 3) and (2<i>c</i>, 2<i>d</i> + 6).",
            "Equate cell by cell: 2<i>a</i> + 3 = 5, 2<i>b</i> − 3 = 1, 2<i>c</i> = 6, 2<i>d</i> + 6 = 16.",
            "Each cell hands over one unknown with no simultaneous work."
          ],
          "ans": "<i>a</i> = 1, <i>b</i> = 2, <i>c</i> = 3, <i>d</i> = 5"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN · SPEED TRAP",
          "q": "<i>A</i> is 3 × 2, <i>B</i> is 2 × 4, <i>C</i> is 4 × 3. Which of <i>AB</i>, <i>BA</i>, <i>BC</i>, (<i>AB</i>)<i>C</i>, <i>A</i>(<i>BC</i>) are defined, and of what order?",
          "steps": [
            "Never compute an entry. Chain the orders and check only the inner pair.",
            "<i>AB</i>: (3 × 2)(2 × 4), inner 2 = 2, so 3 × 4. <i>BA</i>: (2 × 4)(3 × 2), inner 4 ≠ 3, not defined.",
            "<i>BC</i>: (2 × 4)(4 × 3), so 2 × 3.",
            "(<i>AB</i>)<i>C</i>: (3 × 4)(4 × 3), so 3 × 3. <i>A</i>(<i>BC</i>): (3 × 2)(2 × 3), so 3 × 3."
          ],
          "ans": "3 × 4, undefined, 2 × 3, 3 × 3, 3 × 3. The last two agree, which is associativity showing up in the orders alone"
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD · APPLICATION",
          "q": "A stationery seller records two months of unit sales of pens, notebooks and erasers as <i>M</i>, with rows (40, 25, 30) and (35, 30, 20), months down the side. Prices in rupees are the column <i>p</i> = (50, 20, 10). Find the total units of each product, and each month's revenue.",
          "steps": [
            "Totals per product are a question about <b>columns</b>, so add the two month-rows: (40 + 35, 25 + 30, 30 + 20).",
            "Revenue per month pairs units with prices, so it is <i>Mp</i>: (2 × 3)(3 × 1) gives a 2 × 1 column.",
            "Month 1: 40(50) + 25(20) + 30(10) = 2000 + 500 + 300.",
            "Month 2: 35(50) + 30(20) + 20(10) = 1750 + 600 + 200."
          ],
          "ans": "75 pens, 55 notebooks, 50 erasers · Rs. 2800 and Rs. 2550, grand total Rs. 5350. Addition handled the totals, multiplication handled units times price"
        },
        {
          "t": "p",
          "html": "Powers arrive as soon as a matrix is square, and they are where examiners hide their best questions. <i>A</i><sup>2</sup> means <i>AA</i>, <i>A</i><sup>3</sup> means <i>AAA</i>, and because multiplication is associative you may bracket a power however you like. What you may <b>not</b> do is grind. Before computing <i>A</i><sup>50</sup>, always test <i>A</i><sup>2</sup> first: if it comes out as <i>I</i>, or as <i>A</i>, or as <i>O</i>, or as a small multiple of <i>A</i>, the whole tower collapses in one line."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "<i>A</i> has rows (1, 1) and (0, 1). Given that <i>A</i><sup>n</sup> has rows (1, 2026) and (0, 1), find <i>n</i>.",
          "steps": [
            "Build the pattern from the bottom. <i>A</i><sup>2</sup> has rows (1, 2) and (0, 1); <i>A</i><sup>3</sup> has rows (1, 3) and (0, 1).",
            "The top-right entry counts up by one each time, so conjecture <i>A</i><sup>n</sup> with rows (1, <i>n</i>) and (0, 1).",
            "Verify by induction: if <i>A</i><sup>k</sup> has rows (1, <i>k</i>) and (0, 1), then <i>A</i><sup>k+1</sup> = <i>A</i><sup>k</sup><i>A</i> has rows (1, <i>k</i> + 1) and (0, 1).",
            "Now equate the top-right entries."
          ],
          "ans": "<i>n</i> = 2026"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "<i>A</i> has rows (2, −1) and (3, −2). Evaluate <i>S</i> = <i>A</i> + <i>A</i><sup>2</sup> + <i>A</i><sup>3</sup> + ⋯ + <i>A</i><sup>2025</sup>.",
          "steps": [
            "Probe the structure before summing anything. <i>A</i><sup>2</sup> has entries 4 − 3, −2 + 2, 6 − 6, −3 + 4, that is rows (1, 0) and (0, 1), so <i>A</i><sup>2</sup> = <i>I</i>.",
            "Every power now collapses: even powers give <i>I</i>, odd powers give <i>A</i>.",
            "Among the exponents 1 to 2025 there are 1013 odd and 1012 even.",
            "So <i>S</i> = 1013<i>A</i> + 1012<i>I</i>, computed entrywise."
          ],
          "ans": "rows (3038, −1013) and (3039, −1014). Spotting <i>A</i><sup>2</sup> = <i>I</i> early is the entire problem; brute force over 2025 powers is hopeless"
        },
        {
          "t": "mcq",
          "q": "If <i>A</i> is of order 3 × 4 and <i>B</i> is of order 4 × 2, then <i>AB</i> has order",
          "correct": 0,
          "opts": [
            {
              "label": "3 × 2",
              "nudge": null
            },
            {
              "label": "4 × 4",
              "nudge": "You multiplied the two 4s. The inner pair is what has to <b>match</b>; it is then discarded, and the surviving order comes from the outer pair."
            },
            {
              "label": "2 × 3",
              "nudge": "That is the order <i>BA</i> would have if it existed. You read the chain backwards; the product asked for is <i>AB</i>, so the rows come from <i>A</i>."
            },
            {
              "label": "not defined",
              "nudge": "You checked the <b>outer</b> numbers, 3 against 2. Conformability is decided by the inner pair, 4 against 4, and those match."
            }
          ],
          "solution": "Write (3 × 4)(4 × 2). The inner numbers match, so <i>AB</i> exists and takes the outer pair: order 3 × 2."
        },
        {
          "t": "mcq",
          "q": "For two square matrices <i>A</i> and <i>B</i> of the same order, which statement is <b>always</b> true?",
          "correct": 2,
          "opts": [
            {
              "label": "<i>AB</i> = <i>BA</i>",
              "nudge": "Matrix multiplication is not commutative. Two shears of the plane in opposite orders already give different parallelograms."
            },
            {
              "label": "(<i>A</i> + <i>B</i>)<sup>2</sup> = <i>A</i><sup>2</sup> + 2<i>AB</i> + <i>B</i><sup>2</sup>",
              "nudge": "The classic slip: writing <i>AB</i> + <i>BA</i> as 2<i>AB</i>. That collection is legal only if <i>AB</i> = <i>BA</i>, which is exactly what you are not given."
            },
            {
              "label": "(<i>A</i> + <i>B</i>)<sup>2</sup> = <i>A</i><sup>2</sup> + <i>AB</i> + <i>BA</i> + <i>B</i><sup>2</sup>",
              "nudge": null
            },
            {
              "label": "(<i>AB</i>)<sup>2</sup> = <i>A</i><sup>2</sup><i>B</i><sup>2</sup>",
              "nudge": "(<i>AB</i>)<sup>2</sup> is <i>ABAB</i>. Turning that into <i>AABB</i> means swapping the middle <i>BA</i> into <i>AB</i>, which again assumes commutativity."
            }
          ],
          "solution": "Expand honestly: (<i>A</i> + <i>B</i>)(<i>A</i> + <i>B</i>) = <i>A</i><sup>2</sup> + <i>AB</i> + <i>BA</i> + <i>B</i><sup>2</sup>, with the two cross terms kept apart. Distributivity is always available; commutativity never is."
        },
        {
          "t": "mcq",
          "q": "<i>A</i> has rows (1, 2) and (2, 4), and <i>B</i> ≠ <i>O</i> satisfies <i>AB</i> = <i>O</i>. The columns of <i>B</i> must be proportional to",
          "correct": 1,
          "opts": [
            {
              "label": "the column (1, 1)",
              "nudge": "Substituting gives <i>x</i> + 2<i>y</i> = 1 + 2 = 3, not 0. You picked a tidy-looking vector instead of solving the condition."
            },
            {
              "label": "the column (−2, 1)",
              "nudge": null
            },
            {
              "label": "the column (1, 2)",
              "nudge": "You copied a row of <i>A</i>. Substituting gives 1 + 4 = 5, not 0; the column you need is perpendicular to that row, not equal to it."
            },
            {
              "label": "the column (2, 1)",
              "nudge": "You wrote the right two numbers with the wrong sign and in the wrong slots. Substituting gives 2 + 2 = 4, not 0."
            }
          ],
          "solution": "<i>AB</i> = <i>O</i> means each column (<i>x</i>, <i>y</i>) of <i>B</i> satisfies <i>x</i> + 2<i>y</i> = 0 and 2<i>x</i> + 4<i>y</i> = 0, which is one condition twice over. So <i>x</i> = −2<i>y</i>, giving the direction (−2, 1). Two non-zero matrices can multiply to <i>O</i>."
        },
        {
          "t": "mcq",
          "q": "If the matrix with rows (<i>a</i> + <i>b</i>, 6) and (8, <i>a</i> − <i>b</i>) equals the matrix with rows (5, 6) and (8, 1), then (<i>a</i>, <i>b</i>) is",
          "correct": 0,
          "opts": [
            {
              "label": "(3, 2)",
              "nudge": null
            },
            {
              "label": "(2, 3)",
              "nudge": "The swapped answer. It satisfies <i>a</i> + <i>b</i> = 5 but gives <i>a</i> − <i>b</i> = −1, not 1."
            },
            {
              "label": "(4, 1)",
              "nudge": "You solved only the first equation. <i>a</i> + <i>b</i> = 5 holds, but <i>a</i> − <i>b</i> = 3, not 1, so the bottom-right cells disagree."
            },
            {
              "label": "(5, 1)",
              "nudge": "You matched the wrong cell: this gives <i>a</i> + <i>b</i> = 6, not 5. Equality is cell against corresponding cell, never cell against any cell."
            }
          ],
          "solution": "Equating corresponding entries gives <i>a</i> + <i>b</i> = 5 and <i>a</i> − <i>b</i> = 1. Adding, 2<i>a</i> = 6, so <i>a</i> = 3 and <i>b</i> = 2. The cells holding 6 and 8 agree already and carry no information."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] If the matrix with rows (<i>x</i> + <i>y</i>, 2) and (5, <i>z</i> − 1) equals the matrix with rows (7, 2) and (5, 4), and <i>x</i> − <i>y</i> = 1, find <i>x</i>, <i>y</i>, <i>z</i>.",
              "a": "<i>x</i> + <i>y</i> = 7 with <i>x</i> − <i>y</i> = 1 gives <i>x</i> = 4, <i>y</i> = 3; and <i>z</i> − 1 = 4 gives <i>z</i> = 5."
            },
            {
              "q": "[CBSE] <i>A</i> has rows (1, 2) and (−1, 3), <i>B</i> has rows (0, 1) and (2, −1). Compute 2<i>A</i> − 3<i>B</i>.",
              "a": "rows (2, 1) and (−8, 9)"
            },
            {
              "q": "[JEE Main] <i>A</i> is 2 × 3, <i>B</i> is 3 × 3, <i>C</i> is 3 × 1. State the order of <i>ABC</i>, and say whether <i>CAB</i> is defined.",
              "a": "<i>ABC</i> is 2 × 1. <i>CAB</i> is not defined: (3 × 1)(2 × 3) already fails, 1 ≠ 2."
            },
            {
              "q": "[JEE Main] <i>A</i> is the diagonal matrix with diagonal (3, 2). Find <i>A</i><sup>5</sup>.",
              "a": "diagonal (243, 32). A diagonal matrix raises its diagonal entries and nothing else."
            },
            {
              "q": "[JEE Advanced] Find a non-zero 2 × 2 matrix <i>B</i> with <i>AB</i> = <i>O</i>, where <i>A</i> has rows (1, 2) and (2, 4).",
              "a": "Any <i>B</i> whose columns are multiples of (−2, 1), for instance rows (−2, −4) and (1, 2)."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Multiplying element by element.</b> <i>AB</i> is not [<i>a</i><sub>ij</sub><i>b</i><sub>ij</sub>]. It is the row-times-column sum, and the entrywise product is a different operation that this syllabus never uses.",
            "<b>Assuming <i>AB</i> = <i>BA</i>.</b> This one slip silently corrupts (<i>A</i> + <i>B</i>)<sup>2</sup>, (<i>A</i> − <i>B</i>)(<i>A</i> + <i>B</i>) and (<i>AB</i>)<sup>2</sup>. Keep <i>AB</i> and <i>BA</i> as two different objects on the page.",
            "<b>Cancelling a matrix.</b> From <i>AB</i> = <i>AC</i> you may not conclude <i>B</i> = <i>C</i>, and from <i>AB</i> = <i>O</i> you may not conclude that a factor is zero. There is no division here.",
            "<b>Checking the outer numbers for conformability.</b> The inner pair decides whether the product exists; the outer pair only tells you the result's order once it does.",
            "<b>Adding matrices of different orders.</b> The sum is undefined, and writing zeros into the missing cells is not a repair, it is a different question."
          ]
        },
        {
          "t": "protip",
          "html": "write the two orders touching, (<i>m</i> × <i>n</i>)(<i>n</i> × <i>p</i>). if the middle numbers kiss, the product lives and takes the outer pair. and for any power beyond about the third, test <i>A</i><sup>2</sup> first: <i>I</i>, <i>A</i>, <i>O</i> or a multiple of <i>A</i> all collapse the tower and save you ten minutes."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "A + B needs the same order",
              "note": "different orders: undefined, not zero"
            },
            {
              "f": "AB needs cols(A) = rows(B)",
              "note": "inner match, outer survive"
            },
            {
              "f": "(AB)<sub>ij</sub> = Σ<sub>r</sub> a<sub>ir</sub> b<sub>rj</sub>",
              "note": "row i of A against column j of B"
            },
            {
              "f": "AB ≠ BA in general",
              "note": "so (A + B)² keeps AB and BA apart"
            },
            {
              "f": "AB = O with A ≠ O, B ≠ O",
              "note": "and AB = AC does not give B = C"
            }
          ],
          "aids": [
            "“inner match, outer survive”",
            "“matrices do not swap”",
            "“before a big power, square it once”"
          ]
        }
      ]
    },
    {
      "n": "03",
      "title": "Transpose, Symmetric and Skew",
      "chip": "03 FLIP",
      "kalam": "symmetric adds, skew subtracts",
      "blocks": [
        {
          "t": "p",
          "html": "Open the back of an old Indian road atlas and you find a distance chart: cities down the side, the same cities across the top, each cell holding the road distance between them. Delhi to Jaipur reads the same whether you look it up as Delhi row, Jaipur column or as Jaipur row, Delhi column. The chart is perfectly <b>mirror-balanced across its diagonal</b>. A matrix with exactly that balance, where the entry at (<i>i</i>, <i>j</i>) equals the entry at (<i>j</i>, <i>i</i>), is called <b>symmetric</b>."
        },
        {
          "t": "p",
          "html": "Now a different chart: a who-owes-whom ledger for a group of friends splitting a trip. If Ravi owes Sita Rs. 500, then from Sita's side the same cell reads −500. Here (<i>i</i>, <i>j</i>) is the exact <b>negative</b> of (<i>j</i>, <i>i</i>). And what could the diagonal possibly mean? How much Ravi owes Ravi, which is necessarily zero. A matrix with <i>a</i><sub>ij</sub> = −<i>a</i><sub>ji</sub>, and therefore a diagonal of zeros, is called <b>skew-symmetric</b>. Two charts, two kinds of balance, and one tool makes both precise."
        },
        {
          "t": "def",
          "term": "Transpose",
          "html": "The transpose of <i>A</i>, written <i>A</i>ᵀ, is the matrix you get by turning rows into columns, that is by reflecting <i>A</i> across its main diagonal. If <i>A</i> is <i>m</i> × <i>n</i> then <i>A</i>ᵀ is <i>n</i> × <i>m</i>, and (<i>A</i>ᵀ)<sub>ij</sub> = <i>a</i><sub>ji</sub>. Transposing is defined for every matrix, square or not."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE TRANSPOSE LAWS",
          "tag": "conformable A, B and any scalar k",
          "main": "(A + B)ᵀ = Aᵀ + Bᵀ<br>(kA)ᵀ = kAᵀ<br>(AB)ᵀ = BᵀAᵀ",
          "legend": [
            "(<i>A</i>ᵀ)ᵀ = <i>A</i> and <i>I</i>ᵀ = <i>I</i>. Transposing twice returns you to where you started.",
            "The third law <b>reverses the order</b>, and it is never <i>A</i>ᵀ<i>B</i>ᵀ. Check it on the orders alone: <i>A</i> is <i>m</i> × <i>n</i> and <i>B</i> is <i>n</i> × <i>p</i>, so <i>B</i>ᵀ<i>A</i>ᵀ is (<i>p</i> × <i>n</i>)(<i>n</i> × <i>m</i>), which is conformable, while <i>A</i>ᵀ<i>B</i>ᵀ usually is not.",
            "It extends down a chain: (<i>ABC</i>)ᵀ = <i>C</i>ᵀ<i>B</i>ᵀ<i>A</i>ᵀ."
          ],
          "note": "Dropping the reversal is the silent killer in this topic. It corrupts almost every property proof, and it flips the sign of your final answer in classification questions."
        },
        {
          "t": "def",
          "term": "Symmetric and skew-symmetric",
          "html": "A square matrix <i>A</i> is <b>symmetric</b> when <i>A</i>ᵀ = <i>A</i>, that is <i>a</i><sub>ij</sub> = <i>a</i><sub>ji</sub>. It is <b>skew-symmetric</b> when <i>A</i>ᵀ = −<i>A</i>, that is <i>a</i><sub>ij</sub> = −<i>a</i><sub>ji</sub>, which forces every diagonal entry to be 0. Both ideas are defined for <b>square matrices only</b>: a non-square matrix can never equal its own transpose, because the orders would not even match."
        },
        {
          "t": "think",
          "html": "every square matrix is secretly a blend of the two pure types, a balanced part and an anti-balanced part, exactly the way any function splits into an even piece and an odd piece. squeeze out the balanced half with ½(A + Aᵀ) and the anti-balanced half with ½(A − Aᵀ), and they add back to A on the nose. that one idea powers the most-asked board question in the whole chapter."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY A SKEW DIAGONAL IS ZERO, TAP A LINE",
          "steps": [
            {
              "eq": "A skew ⇒ a<sub>ij</sub> = −a<sub>ji</sub> for all i, j",
              "why": "This is the definition written entry by entry rather than as a matrix equation, which is the form you can substitute into."
            },
            {
              "eq": "put i = j: a<sub>ii</sub> = −a<sub>ii</sub>",
              "why": "The condition says all i and j, and nothing stops us from taking them equal. On the diagonal the entry and its mirror are the same entry, so the relation folds onto itself."
            },
            {
              "eq": "2a<sub>ii</sub> = 0 ⇒ a<sub>ii</sub> = 0",
              "why": "The only real number equal to its own negative is 0. So every diagonal entry of a skew-symmetric matrix vanishes, with no computation and no special cases."
            },
            {
              "eq": "but a zero diagonal alone does not make A skew",
              "why": "The converse fails. A matrix with rows (0, 5) and (3, 0) has a zero diagonal and is not skew, because 5 ≠ −3. Zero diagonal is a consequence, not a test."
            }
          ]
        },
        {
          "t": "proc",
          "title": "Classify an expression by flipping",
          "steps": [
            "<b>Write down what you are given</b>, as transpose equations: <i>A</i>ᵀ = <i>A</i> for a symmetric matrix, <i>X</i>ᵀ = −<i>X</i> for a skew one. Never open the entries.",
            "<b>Transpose the whole expression</b>, distributing over the sums first, since (<i>U</i> + <i>V</i>)ᵀ = <i>U</i>ᵀ + <i>V</i>ᵀ costs nothing.",
            "<b>Push each ᵀ inside using the reversal law.</b> (<i>UVW</i>)ᵀ = <i>W</i>ᵀ<i>V</i>ᵀ<i>U</i>ᵀ. Getting the order backwards here is what flips a right answer into the wrong option.",
            "<b>Substitute the given relations</b>, and use the parity facts for a skew <i>X</i>: an even power of <i>X</i> transposes to itself, while an odd power transposes to its negative.",
            "<b>Read the sign.</b> If you recover the expression, it is symmetric; if you recover its negative, it is skew-symmetric; if neither, it is neither."
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE SPLIT EXISTS AND IS UNIQUE, TAP A LINE",
          "steps": [
            {
              "eq": "define P = ½(A + Aᵀ) and Q = ½(A − Aᵀ)",
              "why": "A is any square matrix. Nothing is assumed about it: the whole point of the result is that every square matrix splits, not just the well-behaved ones."
            },
            {
              "eq": "Pᵀ = ½(Aᵀ + A) = P",
              "why": "Transpose the sum term by term and use that transposing twice returns A. Addition is commutative, so the bracket is unchanged and P is symmetric."
            },
            {
              "eq": "Qᵀ = ½(Aᵀ − A) = −Q",
              "why": "Same two laws, but subtraction is not commutative, so reversing the bracket costs a sign. That single sign is the whole difference between the two halves."
            },
            {
              "eq": "P + Q = A",
              "why": "Add the definitions: the two Aᵀ terms cancel and the two halves of A add back to one A. So the decomposition exists, and you should verify this line at the end of every board answer."
            },
            {
              "eq": "suppose also A = P₁ + Q₁, P₁ symmetric, Q₁ skew",
              "why": "To show the split is unique, assume some other split exists and force it to be the same one. This is the half of the result that earns the reasoning marks."
            },
            {
              "eq": "Aᵀ = P₁ − Q₁ ⇒ P₁ = ½(A + Aᵀ) = P",
              "why": "Transposing the assumed split gives a second equation. Adding it to A = P₁ + Q₁ isolates P₁, and subtracting isolates Q₁. Both come out as the halves already built, so the pieces are forced and the decomposition is unique."
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE UNIQUE SPLIT",
          "tag": "A any square matrix",
          "main": "A = ½(A + Aᵀ) + ½(A − Aᵀ)",
          "legend": [
            "<i>P</i> = ½(<i>A</i> + <i>A</i>ᵀ) is the <b>symmetric</b> part · <i>Q</i> = ½(<i>A</i> − <i>A</i>ᵀ) is the <b>skew-symmetric</b> part.",
            "Existence and uniqueness both hold, so there is exactly one such pair for each <i>A</i> and no choice to make.",
            "Two free checks before you hand in: <i>P</i> + <i>Q</i> must give back <i>A</i>, and every diagonal entry of <i>Q</i> must be 0."
          ],
          "note": "The ½ is the most-dropped symbol in this chapter. Compute A + Aᵀ and A − Aᵀ in full first, then halve each, and never halve halfway through."
        },
        {
          "t": "defgrid",
          "title": "Which combinations keep which balance",
          "rows": [
            {
              "k": "<i>A</i> + <i>A</i>ᵀ · <i>A</i> − <i>A</i>ᵀ",
              "v": "symmetric · skew-symmetric, for every square <i>A</i>"
            },
            {
              "k": "<i>AA</i>ᵀ and <i>A</i>ᵀ<i>A</i>",
              "v": "symmetric and square, for <i>A</i> of <b>any</b> order"
            },
            {
              "k": "<i>A</i>, <i>B</i> symmetric",
              "v": "<i>A</i> ± <i>B</i> and <i>AB</i> + <i>BA</i> symmetric · <i>AB</i> − <i>BA</i> skew"
            },
            {
              "k": "<i>AB</i> symmetric",
              "v": "if and only if <i>AB</i> = <i>BA</i>, never automatically"
            },
            {
              "k": "Powers of a skew <i>A</i>",
              "v": "even powers symmetric · odd powers skew"
            },
            {
              "k": "Both at once",
              "v": "only the null matrix <i>O</i> is symmetric <b>and</b> skew"
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · HOW MANY ENTRIES ARE FREE",
          "tag": "square matrix of order n",
          "main": "symmetric: n(n + 1)/2<br>skew-symmetric: n(n − 1)/2",
          "legend": [
            "A symmetric matrix is fixed by its diagonal (<i>n</i> entries) together with the strictly-above-diagonal triangle (<i>n</i>(<i>n</i> − 1)/2 entries). Everything below the diagonal is a mirror copy and is not a free choice.",
            "A skew matrix loses the diagonal entirely, because it is forced to 0, so only the triangle survives.",
            "Order 4: symmetric 10, skew 6 · order 5: symmetric 15, skew 10."
          ],
          "note": "These are counts of free entries, which is what makes them the right input to a counting question. Memorise the pair together: they differ only in the sign inside the bracket."
        },
        {
          "t": "p",
          "html": "That last formula is not just trivia, because JEE combines it with the counting of Topic 01. A structured matrix is completely determined by its free cells, and the free cells are filled independently, so if there are <i>f</i> free cells and each accepts <i>k</i> values, the number of such matrices is <i>k</i> raised to the power <i>f</i>. Two cautions the table below hides. The skew count assumes <b>0 is in the allowed set</b>, since the diagonal must read 0. And each free cell of a skew matrix really carries a <b>pair</b> (<i>a</i>, −<i>a</i>), so the set must be closed under negation, or the honest count is smaller. Both caveats are examined."
        },
        {
          "t": "defgrid",
          "title": "Free cells, then one exponentiation",
          "rows": [
            {
              "k": "Arbitrary, order <i>n</i>",
              "v": "<i>n</i><sup>2</sup> free cells"
            },
            {
              "k": "Symmetric",
              "v": "<i>n</i>(<i>n</i> + 1)/2 free cells: diagonal plus one triangle"
            },
            {
              "k": "Skew-symmetric",
              "v": "<i>n</i>(<i>n</i> − 1)/2 free cells: the diagonal is forced to 0"
            },
            {
              "k": "Diagonal",
              "v": "<i>n</i> free cells"
            },
            {
              "k": "Scalar",
              "v": "1 free cell, the single shared diagonal value"
            },
            {
              "k": "Count over a <i>k</i>-set",
              "v": "<i>k</i> raised to the number of free cells"
            }
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Express <i>A</i> as the sum of a symmetric and a skew-symmetric matrix, where <i>A</i> has rows (2, 4, −6), (0, 1, 5) and (2, −3, 4).",
          "steps": [
            "Write the transpose by turning rows into columns: <i>A</i>ᵀ has rows (2, 0, 2), (4, 1, −3), (−6, 5, 4).",
            "<i>A</i> + <i>A</i>ᵀ has rows (4, 4, −4), (4, 2, 2), (−4, 2, 8). Halve it for <i>P</i>.",
            "<i>A</i> − <i>A</i>ᵀ has rows (0, 4, −8), (−4, 0, 8), (8, −8, 0). Halve it for <i>Q</i>.",
            "Check <i>P</i> + <i>Q</i> = <i>A</i>, and check that <i>Q</i>'s diagonal is all zeros."
          ],
          "ans": "<i>P</i> has rows (2, 2, −2), (2, 1, 1), (−2, 1, 4) and <i>Q</i> has rows (0, 2, −4), (−2, 0, 4), (4, −4, 0)"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN · SPEED TRAP",
          "q": "<i>A</i> and <i>B</i> are symmetric matrices of the same order. Without computing a single entry, classify <i>AB</i> − <i>BA</i> and <i>ABA</i>.",
          "steps": [
            "Use the flip. (<i>AB</i> − <i>BA</i>)ᵀ = (<i>AB</i>)ᵀ − (<i>BA</i>)ᵀ = <i>B</i>ᵀ<i>A</i>ᵀ − <i>A</i>ᵀ<i>B</i>ᵀ.",
            "Substitute <i>A</i>ᵀ = <i>A</i> and <i>B</i>ᵀ = <i>B</i>: this is <i>BA</i> − <i>AB</i>, which is −(<i>AB</i> − <i>BA</i>).",
            "Now the second: (<i>ABA</i>)ᵀ = <i>A</i>ᵀ<i>B</i>ᵀ<i>A</i>ᵀ = <i>ABA</i>.",
            "The reversal law is doing all the work: reversing <i>A</i>, <i>B</i>, <i>A</i> gives <i>A</i>, <i>B</i>, <i>A</i> back."
          ],
          "ans": "<i>AB</i> − <i>BA</i> is skew-symmetric, <i>ABA</i> is symmetric. Expanding entries burns a minute and risks a sign slip; the flip settles both in two lines"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "Find <i>x</i>, <i>y</i>, <i>z</i> so that the matrix with rows (0, 2<i>x</i> − 3, 4), (−1, 0, <i>y</i> + 2) and (−4, −7, <i>z</i>) is skew-symmetric.",
          "steps": [
            "The diagonal is forced to 0, and the only unknown sitting there is <i>z</i>, so <i>z</i> = 0 immediately.",
            "Pair (1, 2) against (2, 1): 2<i>x</i> − 3 = −(−1) = 1, so <i>x</i> = 2.",
            "Pair (2, 3) against (3, 2): <i>y</i> + 2 = −(−7) = 7, so <i>y</i> = 5.",
            "Consistency on (1, 3): 4 = −(−4), already satisfied, so the answer stands."
          ],
          "ans": "<i>x</i> = 2, <i>y</i> = 5, <i>z</i> = 0. The forced zero diagonal hands you one unknown before any algebra starts"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "Show that the square of every 2 × 2 skew-symmetric matrix is a scalar matrix of the form −<i>a</i><sup>2</sup><i>I</i>, and hence find all 2 × 2 skew-symmetric <i>A</i> with <i>A</i><sup>2</sup> = −9<i>I</i>.",
          "steps": [
            "Zero diagonal and opposite off-diagonals force the general form: rows (0, <i>a</i>) and (−<i>a</i>, 0), with <i>a</i> real.",
            "Square it. The (1, 1) entry is 0(0) + <i>a</i>(−<i>a</i>) = −<i>a</i><sup>2</sup>, and the (2, 2) entry is the same; both off-diagonal entries come out 0.",
            "So <i>A</i><sup>2</sup> = −<i>a</i><sup>2</sup><i>I</i> for every such <i>A</i>, which proves the claim.",
            "Impose the condition: −<i>a</i><sup>2</sup> = −9, so <i>a</i> = ±3."
          ],
          "ans": "exactly two matrices, with rows (0, 3), (−3, 0) and rows (0, −3), (3, 0). A 2 × 2 skew matrix behaves like an imaginary unit scaled by <i>a</i>, since (<i>ai</i>)<sup>2</sup> = −<i>a</i><sup>2</sup> too"
        },
        {
          "t": "mcq",
          "q": "The diagonal entries of a skew-symmetric matrix are",
          "correct": 1,
          "opts": [
            {
              "label": "all equal to 1",
              "nudge": "You are thinking of the identity matrix, which is symmetric and has nothing to do with skewness. A non-zero diagonal is exactly what a skew matrix cannot have."
            },
            {
              "label": "all equal to 0",
              "nudge": null
            },
            {
              "label": "all equal to one another but non-zero",
              "nudge": "Half a memory. They are indeed all equal, but the value is forced to 0 by <i>a</i><sub>ii</sub> = −<i>a</i><sub>ii</sub>, and the word non-zero wrecks the answer."
            },
            {
              "label": "impossible to determine",
              "nudge": "They are fully forced, not free. Setting <i>i</i> = <i>j</i> in the defining relation pins every one of them in one line."
            }
          ],
          "solution": "Setting <i>i</i> = <i>j</i> in <i>a</i><sub>ij</sub> = −<i>a</i><sub>ji</sub> gives <i>a</i><sub>ii</sub> = −<i>a</i><sub>ii</sub>, so 2<i>a</i><sub>ii</sub> = 0 and every diagonal entry is 0."
        },
        {
          "t": "mcq",
          "q": "A matrix that is both symmetric and skew-symmetric must be",
          "correct": 2,
          "opts": [
            {
              "label": "the identity matrix",
              "nudge": "<i>I</i> is symmetric, but its diagonal is all 1s, so it fails the skew condition at the very first cell."
            },
            {
              "label": "a diagonal matrix",
              "nudge": "A non-zero diagonal matrix is symmetric but not skew. Only the one diagonal matrix with every entry 0 qualifies, and that has a more specific name."
            },
            {
              "label": "the null matrix",
              "nudge": null
            },
            {
              "label": "a scalar matrix",
              "nudge": "Same problem as the identity: a scalar matrix has equal diagonal entries, and unless that shared value is 0 the skew condition fails."
            }
          ],
          "solution": "Both conditions give <i>A</i>ᵀ = <i>A</i> and <i>A</i>ᵀ = −<i>A</i>, so <i>A</i> = −<i>A</i>, that is 2<i>A</i> = <i>O</i> and <i>A</i> = <i>O</i>. No exceptions."
        },
        {
          "t": "mcq",
          "q": "The maximum number of distinct entries in a symmetric matrix of order 4 is",
          "correct": 1,
          "opts": [
            {
              "label": "16",
              "nudge": "That is <i>n</i><sup>2</sup>, the count for an unrestricted matrix. Symmetry duplicates every off-diagonal pair, so those cells are not independent."
            },
            {
              "label": "10",
              "nudge": null
            },
            {
              "label": "6",
              "nudge": "That is <i>n</i>(<i>n</i> − 1)/2, the strictly-above-diagonal count, which is the <b>skew</b> answer. You forgot the 4 diagonal entries, which a symmetric matrix is free to choose."
            },
            {
              "label": "12",
              "nudge": "Neither formula gives 12. It looks like 16 minus the 4 diagonal cells, but the diagonal is exactly the part that is free."
            }
          ],
          "solution": "A symmetric matrix of order <i>n</i> has <i>n</i>(<i>n</i> + 1)/2 free entries. For <i>n</i> = 4 that is 4 × 5/2 = 10: the four diagonal cells plus the six above them."
        },
        {
          "t": "mcq",
          "q": "How many symmetric matrices of order 3 have all their entries from {0, 1}?",
          "correct": 2,
          "opts": [
            {
              "label": "8",
              "nudge": "That is 2<sup>3</sup>. You counted only the diagonal as free and forgot the three cells above it, each of which is also a free choice."
            },
            {
              "label": "512",
              "nudge": "That is 2<sup>9</sup>, the count for an unrestricted 3 × 3 matrix. Symmetry removes three cells from the free list by forcing them to mirror."
            },
            {
              "label": "64",
              "nudge": null
            },
            {
              "label": "27",
              "nudge": "That is 3<sup>3</sup>, with base and exponent both wrong: the set {0, 1} offers 2 symbols, and there are 6 free cells, not 3."
            }
          ],
          "solution": "Free cells: <i>n</i>(<i>n</i> + 1)/2 = 3 × 4/2 = 6, namely three on the diagonal and three above it. Each is independently 0 or 1, so 2<sup>6</sup> = 64. The three cells below the diagonal are copies and are not counted."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Express the matrix with rows (1, 5) and (−3, 2) as the sum of a symmetric and a skew-symmetric matrix.",
              "a": "<i>P</i> has rows (1, 1) and (1, 2); <i>Q</i> has rows (0, 4) and (−4, 0)."
            },
            {
              "q": "[CBSE] For what value of <i>x</i> is the matrix with rows (0, <i>x</i> − 2) and (4, 0) skew-symmetric?",
              "a": "<i>x</i> − 2 = −4, so <i>x</i> = −2."
            },
            {
              "q": "[JEE Main] Find the maximum number of distinct entries in a symmetric and in a skew-symmetric matrix of order 5.",
              "a": "Symmetric 5 × 6/2 = 15; skew 5 × 4/2 = 10."
            },
            {
              "q": "[JEE Main] <i>A</i> is skew-symmetric of order 3. State the nature of <i>A</i><sup>4</sup> and of <i>A</i><sup>7</sup>.",
              "a": "<i>A</i><sup>4</sup> is symmetric (even power), <i>A</i><sup>7</sup> is skew-symmetric (odd power)."
            },
            {
              "q": "[JEE Main] How many skew-symmetric matrices of order 4 have entries from {−1, 0, 1}?",
              "a": "Free cells 4 × 3/2 = 6, each pair (<i>a</i>, −<i>a</i>) with 3 choices, so 3<sup>6</sup> = 729."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Dropping the reversal in (<i>AB</i>)ᵀ = <i>B</i>ᵀ<i>A</i>ᵀ.</b> Writing <i>A</i>ᵀ<i>B</i>ᵀ instead corrupts nearly every proof in the topic and flips the sign of a classification.",
            "<b>Forgetting that a skew diagonal is zero.</b> It hands you an unknown for free in find-the-value questions, and it kills several distractors instantly.",
            "<b>Assuming the product of two symmetric matrices is symmetric.</b> It is symmetric <b>only</b> when they commute. Otherwise use <i>AB</i> + <i>BA</i> for the symmetric half and <i>AB</i> − <i>BA</i> for the skew one.",
            "<b>Losing the ½, or swapping <i>P</i> and <i>Q</i>.</b> Then the two parts no longer add back to <i>A</i>. Always finish a decomposition by verifying <i>P</i> + <i>Q</i> = <i>A</i>.",
            "<b>Using <i>n</i>(<i>n</i> − 1)/2 for a symmetric matrix.</b> That is the skew count. Symmetric matrices are free on the diagonal too, which is the extra <i>n</i>."
          ]
        },
        {
          "t": "protip",
          "html": "to decide the nature of any product expression, transpose it, reverse the order, substitute <i>A</i>ᵀ = ±<i>A</i>, and read the sign: the expression back means symmetric, its negative means skew. and after any decomposition, glance at <i>Q</i>'s diagonal. a non-zero entry there means you have already made an arithmetic error."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "(AB)ᵀ = BᵀAᵀ",
              "note": "the order reverses, always"
            },
            {
              "f": "symmetric Aᵀ = A · skew Aᵀ = −A",
              "note": "square only, and skew forces a zero diagonal"
            },
            {
              "f": "A = ½(A + Aᵀ) + ½(A − Aᵀ)",
              "note": "exists and is unique for every square A"
            },
            {
              "f": "free entries: n(n + 1)/2 and n(n − 1)/2",
              "note": "symmetric keeps the diagonal, skew does not"
            },
            {
              "f": "structured count = k raised to the free cells",
              "note": "count what is free, then exponentiate once"
            }
          ],
          "aids": [
            "“transpose a product, turn it around”",
            "“symmetric adds, skew subtracts, both over two”",
            "“skew's diagonal is always asleep”"
          ]
        }
      ]
    },
    {
      "n": "04",
      "title": "Inverses by Row Operations",
      "chip": "04 UNDO",
      "kalam": "zero row, no go",
      "blocks": [
        {
          "t": "p",
          "html": "In ordinary arithmetic, dividing by 5 really means multiplying by 1/5, and 1/5 is simply the number that <b>undoes</b> 5, because 5 × 1/5 = 1. Matrices have no division at all, but they have the next best thing: a matrix that undoes another. If multiplying by <i>A</i> scrambles a list of numbers, then multiplying by its <b>inverse</b> <i>A</i><sup>−1</sup> unscrambles it perfectly and lands you back where you started. The do-nothing matrix is the identity <i>I</i>, so the definition is exactly the one you would hope for: <i>AA</i><sup>−1</sup> = <i>A</i><sup>−1</sup><i>A</i> = <i>I</i>."
        },
        {
          "t": "think",
          "html": "picture a UPI transaction. you send Rs. 2000, and an exact refund of Rs. 2000 puts the account back where it was: the refund is the inverse of the payment. now picture a transaction that <i>merges</i> two accounts into one total. no single reversal can recover which rupees came from where. information was destroyed. that irreversibility is precisely what makes a matrix non-invertible."
        },
        {
          "t": "def",
          "term": "Invertible matrix",
          "html": "A <b>square</b> matrix <i>A</i> of order <i>n</i> is invertible, or <b>non-singular</b>, when there exists a square matrix <i>B</i> of order <i>n</i> with <i>AB</i> = <i>BA</i> = <i>I</i><sub>n</sub>. That <i>B</i> is the inverse, written <i>A</i><sup>−1</sup>, and there is never more than one of them. Non-square matrices are simply out of the conversation, and plenty of square ones have no inverse either, just as 0 has no reciprocal."
        },
        {
          "t": "p",
          "html": "How do you actually <b>find</b> <i>A</i><sup>−1</sup> with no notion of determinant available? With <b>elementary row operations</b>, the same three legal moves you already use to solve linear equations: swap two rows, scale a row by a non-zero constant, or add a multiple of one row to another. The idea is beautifully direct. Start from <i>A</i> = <i>IA</i> and chip away at the left-hand <i>A</i> with row operations until it becomes <i>I</i>. Whatever those same operations do to the <i>I</i> on the right turns it into <i>A</i><sup>−1</sup>. The determinant test arrives in the next chapter and is faster, but nothing in this topic needs it."
        },
        {
          "t": "defgrid",
          "title": "Three legal moves, and the rules of engagement",
          "rows": [
            {
              "k": "Swap",
              "v": "<i>R</i><sub>i</sub> ↔ <i>R</i><sub>j</sub>, exchange two whole rows"
            },
            {
              "k": "Scale",
              "v": "<i>R</i><sub>i</sub> → <i>kR</i><sub>i</sub> with <i>k</i> ≠ 0, never by 0"
            },
            {
              "k": "Combine",
              "v": "<i>R</i><sub>i</sub> → <i>R</i><sub>i</sub> + <i>kR</i><sub>j</sub>, one row plus a multiple of another"
            },
            {
              "k": "Both blocks, every time",
              "v": "each move hits the left block <b>and</b> the prefactor, or <i>A</i> = <i>IA</i> stops being true"
            },
            {
              "k": "Never mix",
              "v": "rows with <i>A</i> = <i>IA</i>, <b>or</b> columns with <i>A</i> = <i>AI</i>, and stay with your choice"
            },
            {
              "k": "Stop signal",
              "v": "a full row of zeros in the left block means <i>A</i> is singular, so stop"
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE INVERSE IS UNIQUE, TAP A LINE",
          "steps": [
            {
              "eq": "suppose AB = BA = I and AC = CA = I",
              "why": "Two matrices both claiming to be the inverse of A. If they turn out to be equal, then the notation A to the minus one is unambiguous and we are entitled to say the inverse."
            },
            {
              "eq": "B = BI",
              "why": "The identity changes nothing, so we are free to insert it. This is the standard opening move for any uniqueness argument in algebra."
            },
            {
              "eq": "= B(AC) = (BA)C",
              "why": "Replace I by AC, which is legal because C is an inverse, then reassociate. Associativity is the only property being used anywhere in this proof, and it is one matrix multiplication does have."
            },
            {
              "eq": "= IC = C",
              "why": "Because B is an inverse, BA is I, and I times C is C. The chain closes."
            },
            {
              "eq": "so B = C",
              "why": "The two supposed inverses were the same matrix all along. Notice what was never used: commutativity, entries, or the size of the matrix beyond it being square."
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY A = IA WORKS, TAP A LINE",
          "steps": [
            {
              "eq": "one row operation = premultiplying by one elementary matrix E",
              "why": "E is what you get by performing that same operation on I. Multiplying on the left by E reproduces the operation exactly, which is the fact that turns row-reduction into algebra."
            },
            {
              "eq": "a chain of operations on A is E<sub>k</sub> ⋯ E<sub>2</sub>E<sub>1</sub>A",
              "why": "Each new operation multiplies on the left of everything done so far, so the chain builds outward. The first operation applied sits nearest to A."
            },
            {
              "eq": "keep going until E<sub>k</sub> ⋯ E<sub>1</sub>A = I",
              "why": "That is the goal of the reduction: turn the left block into the identity. Whether it can be reached at all is exactly the question of whether A is invertible."
            },
            {
              "eq": "so E<sub>k</sub> ⋯ E<sub>1</sub> is a left inverse of A",
              "why": "By definition of what that product does to A. For square matrices a left inverse is the inverse, by the uniqueness argument, so this product is A to the minus one."
            },
            {
              "eq": "apply the identical chain to the I in A = IA",
              "why": "Both sides of a true equation may be multiplied on the left by the same thing. This is why every operation must hit both blocks: touching only one breaks the equation you are standing on."
            },
            {
              "eq": "I = (E<sub>k</sub> ⋯ E<sub>1</sub>)A ⇒ the prefactor has become A⁻¹",
              "why": "The left side has been reduced to I, and the prefactor I has been turned into exactly that product. So whatever the operations turn the prefactor into is the inverse, which is the whole method in one line."
            }
          ]
        },
        {
          "t": "proc",
          "title": "The row-operation inverse",
          "steps": [
            "<b>Scan for singularity first.</b> If any row is a scalar multiple of another, or an obvious sum of the others, stop: the matrix is singular and has no inverse. This costs one look and saves a full reduction.",
            "<b>Write <i>A</i> = <i>IA</i></b>, or equivalently form the block [<i>A</i> | <i>I</i>], with the two halves clearly separated on the page.",
            "<b>Clear column 1, then column 2, and so on.</b> Get a 1 in the pivot position, then use it to kill everything above and below it. Applying <b>every</b> operation to both halves is not a formality, it is the method.",
            "<b>Stop early on a zero row.</b> If a full row of zeros appears in the left block, reaching <i>I</i> is impossible and the answer is that <i>A</i> is not invertible.",
            "<b>When the left block is <i>I</i>, the right block is <i>A</i><sup>−1</sup>.</b> Then verify with one multiplication: <i>AA</i><sup>−1</sup> should give <i>I</i>. It costs seconds and catches every sign slip."
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "DIAGRAM · TAP A MATRIX, SEE WHY IT CANNOT BE UNDONE",
          "chips": ["INVERTIBLE", "SINGULAR", "NO WAY BACK"],
          "captions": [
            "The unit square under a matrix with rows (2, 1) and (1, 1). It leans and stretches, but it is still a genuine parallelogram with room inside it, so nothing has been thrown away and the move can be reversed. Reversing it is exactly what the inverse matrix does.",
            "The same square under the matrix with rows (1, −1) and (−2, 2), whose second row is −2 times the first. The whole square is flattened onto the single dashed line y = −2x: the corner (1, 0) lands at (1, −2), the corner (0, 1) lands at (−1, 2), and the corner (1, 1) lands on the origin. A square has become a segment.",
            "Why no undoing is possible. Every point of the dashed line y = x is sent to the origin by that same matrix, so the origin has infinitely many possible pasts and no inverse could choose between them. Proportional rows, information destroyed, no inverse: that is what singular means, and a zero row in the reduction is the same fact showing up in arithmetic."
          ],
          "frames": [
            {
              "x": [-1.2, 3.6],
              "y": [-1.2, 3.6],
              "polygons": [
                { "points": [[0, 0], [1, 0], [1, 1], [0, 1]], "soft": true, "corners": false },
                { "points": [[0, 0], [2, 1], [3, 2], [1, 1]], "corners": true }
              ]
            },
            {
              "x": [-2.6, 2.6],
              "y": [-3.2, 3.2],
              "curves": [{ "c": "line", "m": -2, "k": 0, "dash": true }],
              "polygons": [
                { "points": [[0, 0], [1, 0], [1, 1], [0, 1]], "soft": true, "corners": false }
              ],
              "segments": [{ "from": [-1, 2], "to": [1, -2] }],
              "points": [
                { "x": 1, "y": -2, "label": "from (1, 0)" },
                { "x": -1, "y": 2, "label": "from (0, 1)" },
                { "x": 0, "y": 0, "label": "from (1, 1)" }
              ]
            },
            {
              "x": [-1.2, 3.2],
              "y": [-1.2, 3.2],
              "curves": [{ "c": "line", "m": 1, "k": 0, "dash": true }],
              "points": [
                { "x": 0, "y": 0, "label": "O" },
                { "x": 1, "y": 1 },
                { "x": 2, "y": 2 },
                { "x": 2.6, "y": 2.6 }
              ],
              "segments": [
                { "from": [1, 1], "to": [0.14, 0.14], "arrow": true, "soft": true },
                { "from": [2, 2], "to": [0.2, 0.2], "arrow": true, "soft": true },
                { "from": [2.6, 2.6], "to": [0.26, 0.26], "arrow": true, "soft": true }
              ],
              "labels": [{ "x": 1.9, "y": 0.5, "text": "all of y = x lands on O" }]
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE INVERSE LAWS",
          "tag": "A, B invertible of the same order",
          "main": "(AB)<sup>−1</sup> = B<sup>−1</sup>A<sup>−1</sup>",
          "legend": [
            "(<i>A</i><sup>−1</sup>)<sup>−1</sup> = <i>A</i> · (<i>A</i><sup>k</sup>)<sup>−1</sup> = (<i>A</i><sup>−1</sup>)<sup>k</sup> for every natural <i>k</i>.",
            "(<i>A</i>ᵀ)<sup>−1</sup> = (<i>A</i><sup>−1</sup>)ᵀ. Transpose the defining equation <i>A</i><sup>−1</sup><i>A</i> = <i>I</i> and the reversal law does the rest, and it follows that inverting a symmetric matrix leaves it symmetric, and inverting a skew one leaves it skew.",
            "The reversal runs the length of a chain: (<i>ABC</i> ⋯ <i>Z</i>)<sup>−1</sup> = <i>Z</i><sup>−1</sup> ⋯ <i>C</i><sup>−1</sup><i>B</i><sup>−1</sup><i>A</i><sup>−1</sup>."
          ],
          "note": "Verify rather than assert: (AB)(B⁻¹A⁻¹) = A(BB⁻¹)A⁻¹ = AA⁻¹ = I. Socks and shoes, last on and first off."
        },
        {
          "t": "p",
          "html": "Now spend the inverse, because on the board that is the actual question. A system of linear equations is a matrix equation in disguise: build <i>A</i> from the coefficients with one row per equation, let <i>X</i> be the column of unknowns and <i>B</i> the column of constants, and the system <b>is</b> <i>AX</i> = <i>B</i>. Entry <i>i</i> of <i>AX</i> is the row of equation <i>i</i> paired against (<i>x</i>, <i>y</i>, <i>z</i>), which is precisely the left side of equation <i>i</i>. Solving is then one move, and the only thing that can go wrong is doing it from the wrong side."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · SIDE DISCIPLINE",
          "tag": "A invertible",
          "main": "AX = B ⇒ X = A<sup>−1</sup>B<br>XA = B ⇒ X = BA<sup>−1</sup>",
          "legend": [
            "The inverse must strike from the side <i>A</i> occupies: <b>pre</b>multiply when <i>A</i> is on the left, <b>post</b>multiply when it is on the right.",
            "Multiplying <i>AX</i> = <i>B</i> on the right instead gives <i>AXA</i><sup>−1</sup> = <i>BA</i><sup>−1</sup>, which isolates nothing at all. <i>X</i> is still trapped between two factors.",
            "When <i>A</i> is invertible the solution exists and is <b>unique</b> for every <i>B</i>: if <i>AX</i> = <i>B</i> and <i>AX</i>′ = <i>B</i>, then <i>A</i>(<i>X</i> − <i>X</i>′) = <i>O</i>, and premultiplying by <i>A</i><sup>−1</sup> gives <i>X</i> = <i>X</i>′."
          ],
          "note": "Ask which side A is on before you write anything. It is one question, it takes a second, and it is the single most common lost mark in this topic."
        },
        {
          "t": "proc",
          "title": "Solving a system through the inverse",
          "steps": [
            "<b>Encode.</b> Write the coefficients as <i>A</i> with one row per equation and the variables in the same order every time, the unknowns as the column <i>X</i>, the constants as the column <i>B</i>.",
            "<b>Invert <i>A</i> by row operations</b>, exactly as before, and pull any common denominator out in front so the entries stay whole numbers.",
            "<b>Verify the inverse with one row.</b> Multiply a single row of <i>A</i> against the columns of your candidate and check you get a row of <i>I</i>. Skipping this is how a sign slip reaches the final answer.",
            "<b>Multiply from the left</b>: <i>X</i> = <i>A</i><sup>−1</sup><i>B</i>. The unknown column sits on the right of <i>A</i>, so the inverse goes on the left.",
            "<b>Substitute the answers back into the original equations.</b> Three quick sums, and the question is closed."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Find the inverse of the matrix with rows (2, 5) and (1, 3) using elementary row operations.",
          "steps": [
            "Form [<i>A</i> | <i>I</i>] and swap the rows so the pivot is 1: rows become (1, 3 | 0, 1) and (2, 5 | 1, 0).",
            "<i>R</i><sub>2</sub> → <i>R</i><sub>2</sub> − 2<i>R</i><sub>1</sub>: the second row becomes (0, −1 | 1, −2).",
            "<i>R</i><sub>2</sub> → −<i>R</i><sub>2</sub>: (0, 1 | −1, 2). Now clear above the pivot with <i>R</i><sub>1</sub> → <i>R</i><sub>1</sub> − 3<i>R</i><sub>2</sub>.",
            "Left block is <i>I</i>, so read the right block off."
          ],
          "ans": "<i>A</i><sup>−1</sup> has rows (3, −5) and (−1, 2). Check: <i>AA</i><sup>−1</sup> gives 6 − 5 = 1 and −10 + 10 = 0, so it is <i>I</i>"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN · SPEED TRAP",
          "q": "Determine whether the matrix with rows (1, −3) and (−2, 6) is invertible.",
          "steps": [
            "The slow way, for a written proof: <i>R</i><sub>2</sub> → <i>R</i><sub>2</sub> + 2<i>R</i><sub>1</sub> turns the second row into (0, 0).",
            "A zero row in the left block means it can never be reduced to <i>I</i>, so no inverse exists.",
            "The fast way: glance at the rows. (−2, 6) = −2(1, −3).",
            "One row is a scalar multiple of the other, so the matrix is singular in one look."
          ],
          "ans": "not invertible. Spotting proportional rows answers this in a second; grinding the reduction costs a full minute for the same conclusion"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "For the upper triangular <i>A</i> with rows (1, 2, 3), (0, 1, 4) and (0, 0, 1), find <i>A</i><sup>−1</sup> by row operations, then write (<i>A</i>ᵀ)<sup>−1</sup>.",
          "steps": [
            "The pivots are already 1, so work upward. <i>R</i><sub>2</sub> → <i>R</i><sub>2</sub> − 4<i>R</i><sub>3</sub> and <i>R</i><sub>1</sub> → <i>R</i><sub>1</sub> − 3<i>R</i><sub>3</sub> clear column 3.",
            "Then <i>R</i><sub>1</sub> → <i>R</i><sub>1</sub> − 2<i>R</i><sub>2</sub> clears column 2, and the left block is <i>I</i>.",
            "Read off <i>A</i><sup>−1</sup>: rows (1, −2, 5), (0, 1, −4), (0, 0, 1).",
            "For the transpose, use (<i>A</i>ᵀ)<sup>−1</sup> = (<i>A</i><sup>−1</sup>)ᵀ. No fresh reduction, just a flip."
          ],
          "ans": "<i>A</i><sup>−1</sup> has rows (1, −2, 5), (0, 1, −4), (0, 0, 1) · (<i>A</i>ᵀ)<sup>−1</sup> has rows (1, 0, 0), (−2, 1, 0), (5, −4, 1)"
        },
        {
          "t": "p",
          "html": "Two worked systems follow, and they differ only in which side <i>A</i> sits on. Read each statement twice before reaching for the inverse. In the first the unknown column stands to the <b>right</b> of the coefficient matrix, which is the ordinary board shape. In the second the unknown matrix stands to the <b>left</b>, and the reflex answer <i>A</i><sup>−1</sup><i>B</i> produces a completely different matrix, not a slightly wrong one."
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Express the system <i>x</i> − <i>y</i> + <i>z</i> = 4, 2<i>x</i> + <i>y</i> − 3<i>z</i> = 0, <i>x</i> + <i>y</i> + <i>z</i> = 2 as <i>AX</i> = <i>B</i> and solve it using <i>A</i><sup>−1</sup>.",
          "steps": [
            "<i>A</i> has rows (1, −1, 1), (2, 1, −3), (1, 1, 1); <i>X</i> = (<i>x</i>, <i>y</i>, <i>z</i>) as a column; <i>B</i> = (4, 0, 2) as a column.",
            "Reducing [<i>A</i> | <i>I</i>] gives <i>A</i><sup>−1</sup> = one tenth of the matrix with rows (4, 2, 2), (−5, 0, 5), (1, −2, 3).",
            "Check row 2 of <i>A</i> against that matrix: 8 − 5 − 3 = 0, 4 + 0 + 6 = 10, 4 + 5 − 9 = 0, which is 10 times the second row of <i>I</i>.",
            "<i>X</i> = <i>A</i><sup>−1</sup><i>B</i> = one tenth of (16 + 0 + 4, −20 + 0 + 10, 4 + 0 + 6)."
          ],
          "ans": "<i>x</i> = 2, <i>y</i> = −1, <i>z</i> = 1. Substituting back: 2 + 1 + 1 = 4, 4 − 1 − 3 = 0, 2 − 1 + 1 = 2"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN · SPEED TRAP",
          "q": "<i>A</i> has rows (1, 1) and (0, 1), and <i>XA</i> = <i>B</i> where <i>B</i> has rows (1, 2) and (3, 4). Find <i>X</i>.",
          "steps": [
            "<i>A</i> sits on the <b>right</b> of <i>X</i>, so postmultiply: <i>X</i> = <i>BA</i><sup>−1</sup>.",
            "One reduction gives <i>A</i><sup>−1</sup> with rows (1, −1) and (0, 1).",
            "<i>BA</i><sup>−1</sup>: row (1, 2) gives (1, −1 + 2) = (1, 1); row (3, 4) gives (3, −3 + 4) = (3, 1).",
            "Compare with the reflex answer <i>A</i><sup>−1</sup><i>B</i>, which has rows (−2, −2) and (3, 4)."
          ],
          "ans": "<i>X</i> has rows (1, 1) and (3, 1). The wrong side does not give a nearly-right answer, it gives a different matrix, and checking <i>XA</i> = <i>B</i> catches it in seconds"
        },
        {
          "t": "mcq",
          "q": "Which of the following is <b>not</b> an elementary row operation?",
          "correct": 2,
          "opts": [
            {
              "label": "<i>R</i><sub>1</sub> ↔ <i>R</i><sub>2</sub>",
              "nudge": "Swapping two rows is the first of the three legal moves, and it is reversible by swapping them back."
            },
            {
              "label": "<i>R</i><sub>2</sub> → 3<i>R</i><sub>2</sub>",
              "nudge": "Scaling by 3 is legal because 3 ≠ 0, and it is reversible by scaling by 1/3."
            },
            {
              "label": "<i>R</i><sub>2</sub> → 0 · <i>R</i><sub>2</sub>",
              "nudge": null
            },
            {
              "label": "<i>R</i><sub>1</sub> → <i>R</i><sub>1</sub> + 2<i>R</i><sub>3</sub>",
              "nudge": "Adding a multiple of one row to another is the third legal move, and it is reversible by subtracting the same multiple."
            }
          ],
          "solution": "Scaling is allowed only by a <b>non-zero</b> constant. Multiplying a row by 0 wipes it out and cannot be undone, and every elementary operation has to be reversible."
        },
        {
          "t": "mcq",
          "q": "To find <i>A</i><sup>−1</sup> by row operations we write <i>A</i> = <i>IA</i> and reduce the left <i>A</i> to <i>I</i>. The prefactor <i>I</i> then becomes",
          "correct": 1,
          "opts": [
            {
              "label": "<i>A</i>ᵀ",
              "nudge": "The transpose has nothing to do with row reduction. Nothing in the method reflects the matrix across its diagonal."
            },
            {
              "label": "<i>A</i><sup>−1</sup>",
              "nudge": null
            },
            {
              "label": "<i>I</i>",
              "nudge": "If the prefactor stayed <i>I</i>, the equation would read <i>I</i> = <i>IA</i>, so <i>A</i> = <i>I</i>. That is true only for the identity itself."
            },
            {
              "label": "<i>A</i><sup>2</sup>",
              "nudge": "No row operation squares a matrix. The chain multiplies on the left by elementary matrices, and their product is a left inverse, not a power."
            }
          ],
          "solution": "The operations multiply both sides on the left by the same product <i>E</i><sub>k</sub> ⋯ <i>E</i><sub>1</sub>, which is <i>A</i><sup>−1</sup> precisely because it turns <i>A</i> into <i>I</i>. So the prefactor <i>I</i> becomes <i>A</i><sup>−1</sup>."
        },
        {
          "t": "mcq",
          "q": "While computing an inverse by row operations, a row of all zeros appears in the left block. This means",
          "correct": 2,
          "opts": [
            {
              "label": "<i>A</i><sup>−1</sup> = <i>O</i>",
              "nudge": "The zero matrix is nobody's inverse: <i>AO</i> = <i>O</i>, which is never <i>I</i>. A zero row says the inverse does not exist, not that it is zero."
            },
            {
              "label": "<i>A</i><sup>−1</sup> = <i>I</i>",
              "nudge": "There is no reason for the inverse to be <i>I</i>, and if it were then <i>A</i> would be <i>I</i>, which reduces without any zero row appearing."
            },
            {
              "label": "<i>A</i> is not invertible",
              "nudge": null
            },
            {
              "label": "you must restart with column operations",
              "nudge": "Switching to columns rescues nothing. Singularity is a property of the matrix, not of the direction you happen to reduce in."
            }
          ],
          "solution": "A zero row makes reaching <i>I</i> impossible, and it appears exactly when one row was a combination of the others. The matrix collapses distinct inputs onto the same output, so no undo exists."
        },
        {
          "t": "mcq",
          "q": "If <i>A</i> and <i>B</i> are invertible matrices of the same order, then (<i>AB</i>)<sup>−1</sup> equals",
          "correct": 1,
          "opts": [
            {
              "label": "<i>A</i><sup>−1</sup><i>B</i><sup>−1</sup>",
              "nudge": "The most common error: keeping the original order. Test it. (<i>AB</i>)(<i>A</i><sup>−1</sup><i>B</i><sup>−1</sup>) leaves <i>BA</i><sup>−1</sup> stranded in the middle with nothing to cancel against."
            },
            {
              "label": "<i>B</i><sup>−1</sup><i>A</i><sup>−1</sup>",
              "nudge": null
            },
            {
              "label": "<i>BA</i>",
              "nudge": "That is a product of the originals, not of their inverses. It has the right shape and no inverses in it at all."
            },
            {
              "label": "<i>AB</i>",
              "nudge": "A matrix is its own inverse only when (<i>AB</i>)<sup>2</sup> = <i>I</i>, which is a special property, not something two arbitrary invertible matrices have."
            }
          ],
          "solution": "Verify directly: (<i>AB</i>)(<i>B</i><sup>−1</sup><i>A</i><sup>−1</sup>) = <i>A</i>(<i>BB</i><sup>−1</sup>)<i>A</i><sup>−1</sup> = <i>AA</i><sup>−1</sup> = <i>I</i>. Inversion reverses the order, exactly as transposition does."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Using elementary row operations, find the inverse of the matrix with rows (3, 1) and (2, 1).",
              "a": "rows (1, −1) and (−2, 3)"
            },
            {
              "q": "[CBSE] Using elementary row operations, find the inverse of the matrix with rows (1, 2) and (2, −1).",
              "a": "rows (1/5, 2/5) and (2/5, −1/5)"
            },
            {
              "q": "[JEE Main] Show by row operations that the matrix with rows (2, −4) and (−1, 2) has no inverse.",
              "a": "<i>R</i><sub>2</sub> → 2<i>R</i><sub>2</sub> + <i>R</i><sub>1</sub> gives a zero row. The rows were proportional from the start."
            },
            {
              "q": "[JEE Main] If <i>A</i><sup>−1</sup> has rows (2, −1) and (−3, 2), find <i>A</i>.",
              "a": "<i>A</i> = (<i>A</i><sup>−1</sup>)<sup>−1</sup>, so <i>A</i> has rows (2, 1) and (3, 2)."
            },
            {
              "q": "[JEE Main] Solve 2<i>x</i> + <i>y</i> = 5, 3<i>x</i> + 2<i>y</i> = 11 by the inverse method.",
              "a": "<i>A</i><sup>−1</sup> has rows (2, −1) and (−3, 2), so <i>X</i> = (10 − 11, −15 + 22) and <i>x</i> = −1, <i>y</i> = 7."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Operating on one block only.</b> Every row operation must hit the left block and the prefactor. Touching just one breaks the equation <i>A</i> = <i>IA</i> that the whole method rests on.",
            "<b>Mixing row and column operations</b> in a single computation. Choose rows with <i>A</i> = <i>IA</i> or columns with <i>A</i> = <i>AI</i>, and stay with it to the end.",
            "<b>Scaling a row by 0</b>, or believing a matrix with proportional rows can still be inverted. Proportional rows mean singular, and singular means no inverse exists.",
            "<b>Dropping the reversal in (<i>AB</i>)<sup>−1</sup> = <i>B</i><sup>−1</sup><i>A</i><sup>−1</sup>.</b> The same slip as with transposes, and it is punished the same way.",
            "<b>Multiplying from the wrong side.</b> <i>AX</i> = <i>B</i> needs <i>A</i><sup>−1</sup> on the left, <i>XA</i> = <i>B</i> needs it on the right, and swapping them gives a different matrix, not a near miss."
          ]
        },
        {
          "t": "protip",
          "html": "before reducing anything, check whether one row is a scalar multiple of another or an obvious sum of the others. if it is, stop and write singular. and once you have an inverse, confirm it with <i>AA</i><sup>−1</sup> = <i>I</i>: one multiplication, and it catches every sign slip you were about to hand in."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "AA<sup>−1</sup> = A<sup>−1</sup>A = I",
              "note": "square only, and the inverse is unique"
            },
            {
              "f": "[A | I] → [I | A<sup>−1</sup>]",
              "note": "every operation hits both blocks"
            },
            {
              "f": "a zero row ⇒ singular",
              "note": "proportional rows are the same signal, spotted earlier"
            },
            {
              "f": "(AB)<sup>−1</sup> = B<sup>−1</sup>A<sup>−1</sup> · (Aᵀ)<sup>−1</sup> = (A<sup>−1</sup>)ᵀ",
              "note": "inversion reverses, transposition commutes with it"
            },
            {
              "f": "AX = B ⇒ X = A<sup>−1</sup>B · XA = B ⇒ X = BA<sup>−1</sup>",
              "note": "strike from the side A occupies"
            }
          ],
          "aids": [
            "“whatever I do to A, I do to I”",
            "“zero row, no go”",
            "“inverse flips the order, socks and shoes”"
          ]
        }
      ]
    },
    {
      "n": "05",
      "title": "Special Matrices and the Trace",
      "chip": "05 CHARACTER",
      "kalam": "the diagonal remembers",
      "blocks": [
        {
          "t": "p",
          "html": "Some square matrices have a self-referential personality. Square them, or multiply them by their own transpose, and something remarkably simple comes back. Four types matter, and the examiners love them because each one collapses an otherwise long computation into a single line. An <b>idempotent</b> matrix satisfies <i>A</i><sup>2</sup> = <i>A</i>, so applying it twice changes nothing: think of a projection, where shining a shadow of a shadow gives the same shadow. An <b>involutory</b> matrix satisfies <i>A</i><sup>2</sup> = <i>I</i>, so it is its own inverse, like a mirror flip. A <b>nilpotent</b> matrix has some power equal to <i>O</i>, so it eventually annihilates everything and can never be invertible. And an <b>orthogonal</b> matrix satisfies <i>AA</i>ᵀ = <i>I</i>, which makes its inverse free to write down."
        },
        {
          "t": "defgrid",
          "title": "Four personalities, and what each one buys you",
          "rows": [
            {
              "k": "Idempotent",
              "v": "<i>A</i><sup>2</sup> = <i>A</i> ⇒ <i>A</i><sup>n</sup> = <i>A</i> for all <i>n</i> ≥ 1 · <i>I</i> − <i>A</i> is idempotent too"
            },
            {
              "k": "Involutory",
              "v": "<i>A</i><sup>2</sup> = <i>I</i> ⇒ <i>A</i><sup>−1</sup> = <i>A</i> · even powers give <i>I</i>, odd powers give <i>A</i>"
            },
            {
              "k": "Nilpotent",
              "v": "<i>A</i><sup>k</sup> = <i>O</i> for some <i>k</i>, the least such <i>k</i> is the <b>index</b> · never invertible"
            },
            {
              "k": "Orthogonal",
              "v": "<i>AA</i>ᵀ = <i>A</i>ᵀ<i>A</i> = <i>I</i> ⇒ <i>A</i><sup>−1</sup> = <i>A</i>ᵀ · rotations are the classic case"
            },
            {
              "k": "The only invertible idempotent",
              "v": "<i>I</i> itself, since <i>A</i><sup>2</sup> = <i>A</i> with an inverse gives <i>A</i> = <i>I</i>"
            },
            {
              "k": "Orthogonal closure",
              "v": "<i>I</i>, <i>A</i>ᵀ, <i>A</i><sup>−1</sup>, <i>A</i><sup>n</sup> and any product <i>AB</i> of orthogonals are orthogonal"
            }
          ]
        },
        {
          "t": "def",
          "term": "Orthogonal matrix",
          "html": "A square matrix <i>A</i> with <i>AA</i>ᵀ = <i>A</i>ᵀ<i>A</i> = <i>I</i>, equivalently <i>A</i><sup>−1</sup> = <i>A</i>ᵀ. Read the condition <i>A</i>ᵀ<i>A</i> = <i>I</i> entry by entry and it says the columns <i>c</i><sub>1</sub>, …, <i>c</i><sub>n</sub> satisfy <i>c</i><sub>i</sub> · <i>c</i><sub>j</sub> = 1 when <i>i</i> = <i>j</i> and 0 otherwise: the columns are <b>mutually perpendicular unit vectors</b>. The other condition <i>AA</i>ᵀ = <i>I</i> says the same of the rows."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE ROTATION MATRIX",
          "tag": "rotation of the plane through an angle θ",
          "main": "⎡ cos θ   −sin θ ⎤<br>⎣ sin θ    cos θ ⎦",
          "legend": [
            "Orthogonal for every θ: the (1, 1) entry of <i>R</i>ᵀ<i>R</i> is cos<sup>2</sup>θ + sin<sup>2</sup>θ = 1 and the off-diagonal entries cancel to 0.",
            "So <i>R</i><sub>θ</sub><sup>−1</sup> = <i>R</i><sub>θ</sub>ᵀ = <i>R</i><sub>−θ</sub>, and undoing a rotation costs no row operations at all.",
            "Powers are angles: <i>R</i><sub>θ</sub><sup>n</sup> = <i>R</i><sub>nθ</sub>. Any condition on a power becomes a condition on <i>n</i>θ modulo 2π."
          ],
          "note": "Never multiply a rotation matrix out. Convert the matrix condition into an angle condition and solve for the angle."
        },
        {
          "t": "diagram",
          "kind": "unitcircle",
          "kicker": "DIAGRAM · TAP AN ANGLE, READ THE COLUMN OFF",
          "chips": ["θ = 30°", "θ = 90°", "θ = 210°"],
          "mathChips": true,
          "captions": [
            "The rotation matrix has rows (cos θ, −sin θ) and (sin θ, cos θ), drawn here at 30 degrees. Its first column is (cos θ, sin θ), which is exactly the point the sweep lands on, and its second column is that same point turned one more quarter turn. Read the matrix off the picture instead of memorising it.",
            "At 90 degrees the columns become (0, 1) and (−1, 0), so the matrix sends the x-axis onto the y-axis. Both columns are still unit length and still perpendicular to each other, which is the whole definition of orthogonal, and that is why the inverse is simply the transpose.",
            "At 210 degrees both legs are negative and the landing point sits in the third quadrant. None of the algebra changes. Rotating by θ and then by θ again is a rotation by 2θ, so a power of this matrix is never computed, it is read as an angle, and that one observation answers a whole family of exam questions."
          ],
          "frames": [
            { "angle": 30, "show": ["cos", "sin"] },
            { "angle": 90, "show": ["cos", "sin"] },
            { "angle": 210, "show": ["cos", "sin"] }
          ]
        },
        {
          "t": "proc",
          "title": "Proving a closure fact by flipping",
          "steps": [
            "<b>Write the defining condition of the target</b>, not of the hypothesis. To show <i>AB</i> is orthogonal you must produce (<i>AB</i>)ᵀ(<i>AB</i>) = <i>I</i>, so write that product down first and work on it.",
            "<b>Apply the reversal law</b> to open the transpose: (<i>AB</i>)ᵀ(<i>AB</i>) = <i>B</i>ᵀ<i>A</i>ᵀ<i>AB</i>. Nothing has been assumed yet.",
            "<b>Collapse from the middle outward.</b> <i>A</i>ᵀ<i>A</i> = <i>I</i> by hypothesis, so the middle disappears and you are left with <i>B</i>ᵀ<i>IB</i> = <i>B</i>ᵀ<i>B</i> = <i>I</i>. The reversal law is what put the collapsible pair next to each other.",
            "<b>For a power, run the same step inductively.</b> Assume <i>A</i><sup>k</sup> is orthogonal, then (<i>A</i><sup>k+1</sup>)ᵀ<i>A</i><sup>k+1</sup> = (<i>A</i><sup>k</sup>)ᵀ<i>A</i>ᵀ<i>AA</i><sup>k</sup>, and the inner pair collapses first.",
            "<b>Read off the consequence.</b> If <i>A</i> is orthogonal and also symmetric, then <i>A</i><sup>−1</sup> = <i>A</i>ᵀ = <i>A</i>, so <i>A</i><sup>2</sup> = <i>I</i> and the matrix is involutory. Two conditions, one conclusion, no entries."
          ]
        },
        {
          "t": "p",
          "html": "The <b>trace</b> of a square matrix is the sum of its diagonal entries, and it is the quietest tool in the chapter. It throws away almost all the information in a matrix and keeps one number, which is exactly why it can settle questions that brute computation cannot touch. It is linear, it ignores transposition, and it has one property that looks impossible at first sight: tr(<i>AB</i>) = tr(<i>BA</i>), even though <i>AB</i> and <i>BA</i> are usually different matrices. That mismatch, an identity that survives an operation the matrices themselves do not, is a favourite JEE trap and a genuine proof technique."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE TRACE",
          "tag": "square A, B of the same order, scalar k",
          "main": "tr(A) = Σ<sub>i=1</sub><sup>n</sup> a<sub>ii</sub>",
          "legend": [
            "tr(<i>A</i> + <i>B</i>) = tr(<i>A</i>) + tr(<i>B</i>) and tr(<i>kA</i>) = <i>k</i> tr(<i>A</i>). Both fall straight out of adding the diagonals entry by entry.",
            "tr(<i>A</i>ᵀ) = tr(<i>A</i>), because transposing moves nothing that sits on the diagonal.",
            "tr(<i>AB</i>) = tr(<i>BA</i>), whenever both products exist. The products differ; only their diagonal totals agree."
          ],
          "note": "tr(I_n) = n, not 1. That single value is what turns the reversal identity into an impossibility proof."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY tr(AB) = tr(BA), TAP A LINE",
          "steps": [
            {
              "eq": "tr(AB) = Σ<sub>i</sub> (AB)<sub>ii</sub>",
              "why": "The trace by definition, applied to the product rather than to a bare matrix. Everything from here on is bookkeeping over two indices."
            },
            {
              "eq": "= Σ<sub>i</sub> Σ<sub>r</sub> a<sub>ir</sub> b<sub>ri</sub>",
              "why": "Expand the diagonal entry with the multiplication rule, taking j = i because we are on the diagonal. The outer index i runs over rows and the inner index r over the shared middle."
            },
            {
              "eq": "tr(BA) = Σ<sub>r</sub> Σ<sub>i</sub> b<sub>ri</sub> a<sub>ir</sub>",
              "why": "The same expansion with the roles of the two matrices swapped. Here r is the outer index and i is the inner one, which is the only difference between the two double sums."
            },
            {
              "eq": "the terms are identical, only the order of summation differs",
              "why": "Each term is the ordinary product of two numbers, so a_ir b_ri and b_ri a_ir are the same number. A finite sum does not care in which order its terms are added."
            },
            {
              "eq": "tr(AB) = tr(BA), even though AB ≠ BA",
              "why": "Notice exactly what has been proved and what has not. The matrices are still different; only their diagonal totals agree. Claiming more than this is the trap the identity was designed to bait."
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY AB − BA = I IS IMPOSSIBLE, TAP A LINE",
          "steps": [
            {
              "eq": "suppose AB − BA = I<sub>n</sub> for some A, B",
              "why": "Assume a solution exists and hunt for a contradiction. Nothing in the hypothesis mentions traces, entries or sizes, which is what makes the next move feel like a trick until you have seen it once."
            },
            {
              "eq": "take the trace of both sides",
              "why": "The winning move: apply a quantity that is invariant under the very reversal the left side performs. Any equation can have the same function applied to both sides."
            },
            {
              "eq": "tr(AB − BA) = tr(AB) − tr(BA) = 0",
              "why": "Linearity splits the difference, and the reversal identity makes the two pieces equal, so the left side has trace exactly 0 no matter what A and B are."
            },
            {
              "eq": "tr(I<sub>n</sub>) = n ≥ 1",
              "why": "The right side has n ones on its diagonal. So the equation forces 0 = n, which is false for every order."
            },
            {
              "eq": "no such pair exists, for any n",
              "why": "The impossibility is total: not rare, not hard to find, but ruled out for every size of matrix at once. Compare it with the flip in Topic 03, where transposing settled a classification without touching a single entry."
            }
          ]
        },
        {
          "t": "p",
          "html": "One more consequence pays for itself in objective questions. The diagonal of <i>AA</i>ᵀ is made of sums of squares, so tr(<i>AA</i>ᵀ) is the sum of the squares of <b>all</b> the entries of <i>A</i>. Two things follow at once. First, tr(<i>A</i>ᵀ<i>A</i>) = 0 forces <i>A</i> = <i>O</i> for a real matrix, since a sum of squares vanishes only when every term does. Second, and this is the one that repeats in paper after paper, a condition such as tr(<i>AA</i>ᵀ) = 3 with entries from {−1, 0, 1} is not a matrix question at all: it is a statement about how many cells are non-zero."
        },
        {
          "t": "proc",
          "title": "Counting under a trace condition",
          "steps": [
            "<b>Rewrite the condition as a sum of squares.</b> tr(<i>AA</i>ᵀ) = tr(<i>A</i>ᵀ<i>A</i>) is the sum of <i>a</i><sub>ij</sub><sup>2</sup> over every cell, not (tr <i>A</i>)<sup>2</sup> and not a count of non-zero cells.",
            "<b>List the squares the allowed set can produce.</b> From {−1, 0, 1} the squares are 0 and 1; from {0, 1, 2} they are 0, 1 and 4, and that hidden 4 is where the second case comes from.",
            "<b>Split into cases by which multiset of squares reaches the target.</b> Miss a case and you lose the question, which is exactly what the option list is built to reward.",
            "<b>Count placements, then signs.</b> Choosing which cells are non-zero is a binomial coefficient; each non-zero cell then gets its own sign or value choice, and the two multiply.",
            "<b>Add the cases</b>, and sanity check the total against the unrestricted count, which must be larger."
          ]
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "Show that <i>R</i> with rows (cos θ, −sin θ) and (sin θ, cos θ) is orthogonal for every θ, and deduce <i>R</i><sup>−1</sup>.",
          "steps": [
            "<i>R</i>ᵀ has rows (cos θ, sin θ) and (−sin θ, cos θ). Multiply <i>R</i>ᵀ<i>R</i> entry by entry.",
            "(1, 1): cos<sup>2</sup>θ + sin<sup>2</sup>θ = 1. (2, 2): sin<sup>2</sup>θ + cos<sup>2</sup>θ = 1.",
            "(1, 2): −cos θ sin θ + sin θ cos θ = 0, and (2, 1) is the same by symmetry.",
            "So <i>R</i>ᵀ<i>R</i> = <i>I</i>, which is the definition, and therefore <i>R</i><sup>−1</sup> = <i>R</i>ᵀ."
          ],
          "ans": "<i>R</i><sup>−1</sup> = <i>R</i>ᵀ, which is the rotation by −θ. Geometrically perfect: undoing a turn of θ is a turn of −θ, and it cost no row operations"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "Find all 2 × 2 upper triangular orthogonal matrices.",
          "steps": [
            "Write <i>A</i> with rows (<i>a</i>, <i>b</i>) and (0, <i>d</i>) and impose <i>A</i>ᵀ<i>A</i> = <i>I</i> cell by cell.",
            "<i>A</i>ᵀ<i>A</i> has entries <i>a</i><sup>2</sup>, <i>ab</i>, <i>ab</i>, <i>b</i><sup>2</sup> + <i>d</i><sup>2</sup>.",
            "Matching against <i>I</i>: <i>a</i><sup>2</sup> = 1, <i>ab</i> = 0, <i>b</i><sup>2</sup> + <i>d</i><sup>2</sup> = 1.",
            "From <i>a</i><sup>2</sup> = 1 we get <i>a</i> = ±1, so <i>ab</i> = 0 forces <i>b</i> = 0, and then <i>d</i><sup>2</sup> = 1 gives <i>d</i> = ±1 independently."
          ],
          "ans": "exactly four, the diagonal sign matrices with diagonal (±1, ±1). Each is its own inverse and its own transpose"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN · PATTERN",
          "q": "How many 3 × 3 matrices with entries from {−1, 0, 1} satisfy tr(<i>AA</i>ᵀ) = 3?",
          "steps": [
            "tr(<i>AA</i>ᵀ) is the sum of the squares of all nine entries, and each square is 0 or 1.",
            "So the condition says <b>exactly three cells are non-zero</b>, and the other six are 0.",
            "Choose which three cells: <sup>9</sup>C<sub>3</sub> = 84.",
            "Each chosen cell is +1 or −1 independently: 2<sup>3</sup> = 8."
          ],
          "ans": "84 × 8 = 672. Forgetting that each non-zero cell has two sign choices leaves you at 84, which is an offered option"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED · PATTERN",
          "q": "How many 3 × 3 matrices <i>M</i> with entries from {0, 1, 2} satisfy tr(<i>M</i>ᵀ<i>M</i>) = 5?",
          "steps": [
            "Again the condition is a sum of nine squares, but now the squares available are 0, 1 and 4.",
            "Case 1, five 1s and four 0s: choose the four zero cells in <sup>9</sup>C<sub>4</sub> = 126 ways.",
            "Case 2, one 2 and one 1, since 4 + 1 = 5: place the 2 in 9 ways and the 1 in the remaining 8, giving 72.",
            "No other multiset of 0s, 1s and 4s adds to 5, so add the two cases."
          ],
          "ans": "126 + 72 = 198. Missing the second case, because 2<sup>2</sup> = 4 hides inside the 5, is the designed failure"
        },
        {
          "t": "mcq",
          "q": "<i>A</i> is idempotent, so <i>A</i><sup>2</sup> = <i>A</i>. Then (<i>I</i> + <i>A</i>)<sup>3</sup> − 7<i>A</i> equals",
          "correct": 0,
          "opts": [
            {
              "label": "<i>I</i>",
              "nudge": null
            },
            {
              "label": "<i>I</i> + 7<i>A</i>",
              "nudge": "You expanded correctly and then stopped. That is (<i>I</i> + <i>A</i>)<sup>3</sup> on its own; the question also asks you to subtract 7<i>A</i>."
            },
            {
              "label": "<i>I</i> + <i>A</i>",
              "nudge": "You collapsed the powers of <i>A</i> but also collapsed the coefficients. The expansion contributes 1 + 3 + 3 = 7 copies of <i>A</i>, not one."
            },
            {
              "label": "8<i>A</i>",
              "nudge": "You replaced <i>I</i> + <i>A</i> by 2<i>A</i>, as though <i>I</i> were another copy of <i>A</i>. <i>I</i> is the identity and never merges with <i>A</i>."
            }
          ],
          "solution": "<i>I</i> commutes with everything, so the ordinary binomial expansion is legal: (<i>I</i> + <i>A</i>)<sup>3</sup> = <i>I</i> + 3<i>A</i> + 3<i>A</i><sup>2</sup> + <i>A</i><sup>3</sup>. Idempotence collapses every power of <i>A</i> to <i>A</i>, giving <i>I</i> + 7<i>A</i>, and subtracting 7<i>A</i> leaves <i>I</i>."
        },
        {
          "t": "mcq",
          "q": "<i>A</i> is a 3 × 3 matrix with tr(<i>A</i>) = 6. Then tr(2<i>A</i>ᵀ − 3<i>I</i>) equals",
          "correct": 0,
          "opts": [
            {
              "label": "3",
              "nudge": null
            },
            {
              "label": "9",
              "nudge": "You used tr(3<i>I</i>) = 3 instead of 9. The identity of order 3 has three 1s on its diagonal, so its trace is 3, and the trace of 3<i>I</i> is 9."
            },
            {
              "label": "12",
              "nudge": "That is 2 tr(<i>A</i>) alone. You dropped the −3<i>I</i> term entirely, and linearity says it contributes its own trace."
            },
            {
              "label": "6",
              "nudge": "You treated tr(2<i>A</i>ᵀ) as tr(<i>A</i>). The transpose leaves the trace alone, but the scalar 2 comes straight out in front."
            }
          ],
          "solution": "Linearity and tr(<i>A</i>ᵀ) = tr(<i>A</i>) give tr(2<i>A</i>ᵀ − 3<i>I</i>) = 2 tr(<i>A</i>) − 3 tr(<i>I</i><sub>3</sub>) = 12 − 9 = 3."
        },
        {
          "t": "mcq",
          "q": "The number of pairs of 3 × 3 matrices <i>A</i>, <i>B</i> with <i>AB</i> − <i>BA</i> = <i>I</i><sub>3</sub> is",
          "correct": 0,
          "opts": [
            {
              "label": "0",
              "nudge": null
            },
            {
              "label": "1",
              "nudge": "There is not even one. The trace argument rules out every pair simultaneously; it does not narrow the field down to a special example."
            },
            {
              "label": "3",
              "nudge": "The obstruction has nothing to do with the order. Taking traces gives 0 = <i>n</i>, which fails for <b>every</b> <i>n</i> ≥ 1, so no count can depend on the size."
            },
            {
              "label": "infinitely many",
              "nudge": "You reasoned that 18 unknowns against 9 equations must leave solutions. Taking the trace destroys all of them at once: the left side has trace 0 and the right has trace 3."
            }
          ],
          "solution": "Take traces. The left side gives tr(<i>AB</i>) − tr(<i>BA</i>) = 0 by the reversal identity, while tr(<i>I</i><sub>3</sub>) = 3. So the equation forces 0 = 3 and no pair can exist."
        },
        {
          "t": "mcq",
          "q": "<i>A</i> is involutory. Then <i>A</i><sup>2</sup> + <i>A</i><sup>4</sup> + <i>A</i><sup>6</sup> + ⋯ + <i>A</i><sup>2024</sup> equals",
          "correct": 0,
          "opts": [
            {
              "label": "1012<i>I</i>",
              "nudge": null
            },
            {
              "label": "2024<i>I</i>",
              "nudge": "You counted every exponent from 1 to 2024. The sum steps by two, so it contains only the even exponents, and there are 1012 of them."
            },
            {
              "label": "1012<i>A</i>",
              "nudge": "The term count is right but the value is not. For an involutory matrix the <b>even</b> powers give <i>I</i>; only the odd ones give <i>A</i>, and no odd power appears here."
            },
            {
              "label": "506<i>I</i>",
              "nudge": "You divided 2024 by 4. The even numbers from 2 to 2024 number 2024 ÷ 2 = 1012, not 2024 ÷ 4."
            }
          ],
          "solution": "<i>A</i><sup>2</sup> = <i>I</i>, so every even power is <i>I</i>. The exponents 2, 4, …, 2024 are 1012 terms, each contributing <i>I</i>, so the sum is 1012<i>I</i>."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[JEE Main] Show that <i>A</i> with rows (0, 1) and (0, 0) is nilpotent and state its index.",
              "a": "<i>A</i><sup>2</sup> = <i>O</i>, so <i>A</i> is nilpotent of index 2."
            },
            {
              "q": "[JEE Main] <i>A</i> is 3 × 3 with tr(<i>A</i>) = 4. Find tr(<i>A</i> + <i>A</i>ᵀ) and tr(3<i>A</i> − 2<i>I</i>).",
              "a": "tr(<i>A</i>ᵀ) = 4, so the first is 8. The second is 12 − 6 = 6."
            },
            {
              "q": "[JEE Main] Verify tr(<i>AB</i>) = tr(<i>BA</i>) for <i>A</i> with rows (2, 0), (1, 3) and <i>B</i> with rows (1, 4), (0, 2).",
              "a": "<i>AB</i> has rows (2, 8), (1, 10) and <i>BA</i> has rows (6, 12), (2, 6). Different matrices, traces 12 and 12."
            },
            {
              "q": "[JEE Main] Show that one third of the matrix with rows (1, 2, 2), (2, 1, −2), (−2, 2, −1) is orthogonal, and write its inverse.",
              "a": "Each row has squared length (1 + 4 + 4)/9 = 1 and the three pairwise row dots are 0, so <i>AA</i>ᵀ = <i>I</i> and <i>A</i><sup>−1</sup> = <i>A</i>ᵀ."
            },
            {
              "q": "[JEE Advanced] How many 3 × 3 matrices with entries from {−1, 0, 1} satisfy tr(<i>AA</i>ᵀ) = 2?",
              "a": "Exactly two non-zero cells: <sup>9</sup>C<sub>2</sub> × 2<sup>2</sup> = 36 × 4 = 144."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Misreading tr(<i>AA</i>ᵀ).</b> It is the sum of <b>all</b> the squared entries, not (tr <i>A</i>)<sup>2</sup> and not a count of non-zero cells.",
            "<b>Forgetting the sign choices.</b> Over {−1, 0, 1}, each non-zero cell carries two options, so leaving them out halves, quarters or worse the correct count.",
            "<b>Losing tr(<i>I</i><sub>n</sub>) = <i>n</i>.</b> Writing 1 instead of <i>n</i> destroys the commutator argument, which is the one place the value actually matters.",
            "<b>Reading tr(<i>AB</i>) = tr(<i>BA</i>) as <i>AB</i> = <i>BA</i>.</b> The identity is about one number, not about the matrices. They still differ.",
            "<b>Claiming a nilpotent matrix has an inverse.</b> If <i>A</i><sup>k</sup> = <i>O</i> then <i>A</i> destroys information, so no undo exists, whatever the entries look like."
          ]
        },
        {
          "t": "protip",
          "html": "when a question gives you a defining equation rather than entries, do not go looking for the entries. transpose it, trace it, or square it, and see which invariant the equation cannot survive. that is how <i>AB</i> − <i>BA</i> = <i>I</i> dies in two lines, and it is the whole method behind the hardest questions in this chapter."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "idempotent A² = A · involutory A² = I",
              "note": "so Aⁿ = A, and even or odd powers alternate I and A"
            },
            {
              "f": "nilpotent A<sup>k</sup> = O · orthogonal AAᵀ = I",
              "note": "nilpotent is never invertible, orthogonal has A⁻¹ = Aᵀ"
            },
            {
              "f": "R<sub>θ</sub><sup>n</sup> = R<sub>nθ</sub>",
              "note": "powers of a rotation are angles, never products"
            },
            {
              "f": "tr(AB) = tr(BA), tr(I<sub>n</sub>) = n",
              "note": "so AB − BA = I is impossible for every n"
            },
            {
              "f": "tr(AAᵀ) = Σ a<sub>ij</sub>²",
              "note": "a trace condition is a statement about squared entries"
            }
          ],
          "aids": [
            "“the trace only listens to the diagonal”",
            "“trace swaps the product, the product does not swap”",
            "“a rotation to the n is a rotation by nθ”"
          ]
        }
      ]
    },
    {
      "n": "06",
      "title": "High Powers and Hidden Structure",
      "chip": "06 COLLAPSE",
      "kalam": "never compute the fiftieth power",
      "blocks": [
        {
          "t": "p",
          "html": "Here is the single most reliable fact about JEE and this chapter. The moment a paper asks for <i>A</i><sup>31</sup>, <i>A</i><sup>50</sup>, one entry of <i>A</i><sup>20</sup>, or a sum like <i>I</i> + <i>A</i> + <i>A</i><sup>2</sup> + ⋯, a <b>structure has been planted</b> in the matrix and computing entry by entry is the intended wrong path. The structures repeat: <i>A</i><sup>2</sup> = <i>I</i>, <i>A</i><sup>2</sup> = <i>A</i>, <i>A</i><sup>2</sup> = <i>cA</i>, a rotation angle, or the one this topic is built around, a matrix that is a repeated diagonal value plus something that dies when raised to a small power. Find the structure first. It is always there, and it always collapses the problem to two or three terms."
        },
        {
          "t": "think",
          "html": "look at a matrix with the same number all down the diagonal and zeros on one side of it. peel the diagonal off as λ<i>I</i> and what is left is a thin triangular scrap <i>N</i>. that scrap is fragile: square it and it thins further, cube it and often it is gone. so a huge power of the whole matrix is a very short sum, because almost every term in the expansion is multiplied by nothing."
        },
        {
          "t": "def",
          "term": "Matrix polynomial",
          "html": "Evaluate an ordinary polynomial <b>at a matrix</b> by replacing <i>x</i> with <i>A</i> and the constant term <i>c</i> with <i>cI</i>, because a bare number cannot be added to a matrix. So <i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> − 2<i>x</i> − 3 becomes <i>f</i>(<i>A</i>) = <i>A</i><sup>2</sup> − 2<i>A</i> − 3<i>I</i>. A square matrix very often satisfies a polynomial equation <i>f</i>(<i>A</i>) = <i>O</i> of its own, and that single fact unlocks both high powers and the inverse with almost no computation."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY THE BINOMIAL SURVIVES AND STOPS, TAP A LINE",
          "steps": [
            {
              "eq": "(B + C)<sup>2</sup> = B<sup>2</sup> + BC + CB + C<sup>2</sup>",
              "why": "The honest expansion from Topic 02, with both cross terms kept apart. This is the obstacle: for general matrices the ordinary binomial theorem is simply false."
            },
            {
              "eq": "the cross terms collect only when BC = CB",
              "why": "BC + CB becomes 2BC exactly when the two commute, and the same requirement runs through every higher power. So the binomial theorem is not banned for matrices, it is conditional."
            },
            {
              "eq": "take B = λI: (λI)N = λN = N(λI)",
              "why": "A scalar multiple of the identity commutes with every matrix there is, because multiplying by it is just multiplying every entry by λ. So the condition is satisfied for free, whatever N happens to be."
            },
            {
              "eq": "(λI + N)<sup>n</sup> = Σ<sub>r</sub> C(n, r) λ<sup>n−r</sup> N<sup>r</sup>",
              "why": "The ordinary binomial expansion, valid term for term, with the powers of λI collapsing to scalars. Nothing here is an approximation."
            },
            {
              "eq": "if N<sup>k</sup> = O then every term with r ≥ k vanishes",
              "why": "Those terms all contain N to a power at least k, and once a power of N is the zero matrix, so is every higher power. They are not small, they are exactly zero."
            },
            {
              "eq": "so the sum stops at r = k − 1",
              "why": "An expansion that looked like it had n + 1 terms has at most k of them, and k is 2 or 3 in every exam question. That is how a 2025th power becomes three terms."
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE BINOMIAL FOR MATRICES",
          "tag": "A = λI + N with N of index k",
          "main": "(λI + N)<sup>n</sup> = Σ<sub>r=0</sub><sup>k−1</sup> C(n, r) λ<sup>n−r</sup> N<sup>r</sup>",
          "legend": [
            "λ is the repeated diagonal value and <i>N</i> = <i>A</i> − λ<i>I</i> is what is left. Compute <i>N</i><sup>2</sup>, then <i>N</i><sup>3</sup>, until one of them is <i>O</i>; that exponent is the <b>index</b> <i>k</i>.",
            "Valid because λ<i>I</i> commutes with every matrix, so the cross terms collect exactly as they do for ordinary numbers.",
            "The coefficient of <i>N</i><sup>r</sup> carries λ<sup>n−r</sup>, not λ<sup>n</sup>. The exponent on λ drops by one for every factor of <i>N</i> you pick up."
          ],
          "note": "Never assume the index. For N with rows (0, 1, 1), (0, 0, 1) and (0, 0, 0) the natural guess N² = O is wrong: N² still has a 1 in the top-right corner, and only N³ vanishes."
        },
        {
          "t": "defgrid",
          "title": "The two cases that actually appear",
          "rows": [
            {
              "k": "<i>N</i><sup>2</sup> = <i>O</i>",
              "v": "(λ<i>I</i> + <i>N</i>)<sup>n</sup> = λ<sup>n</sup><i>I</i> + <i>n</i>λ<sup>n−1</sup><i>N</i>"
            },
            {
              "k": "<i>N</i><sup>3</sup> = <i>O</i>",
              "v": "the line above, plus C(<i>n</i>, 2) λ<sup>n−2</sup> <i>N</i><sup>2</sup>"
            },
            {
              "k": "Inverse when <i>N</i><sup>2</sup> = <i>O</i>",
              "v": "(<i>I</i> + <i>N</i>)<sup>−1</sup> = <i>I</i> − <i>N</i>"
            },
            {
              "k": "Inverse in general",
              "v": "(<i>I</i> + <i>N</i>)<sup>−1</sup> = <i>I</i> − <i>N</i> + <i>N</i><sup>2</sup> − ⋯ + (−1)<sup>k−1</sup><i>N</i><sup>k−1</sup>"
            },
            {
              "k": "Sign flip",
              "v": "for (<i>I</i> − <i>N</i>)<sup>−1</sup> every sign is plus: <i>I</i> + <i>N</i> + <i>N</i><sup>2</sup> + ⋯"
            },
            {
              "k": "When it applies",
              "v": "one value repeated down the diagonal, and zeros strictly on one side of it"
            }
          ]
        },
        {
          "t": "proc",
          "title": "Collapsing a high power",
          "steps": [
            "<b>Spot the shape.</b> One value repeated down the diagonal and zeros strictly below it (or strictly above). If the diagonal is <i>not</i> constant, this method does not apply and you should be testing <i>A</i><sup>2</sup> against <i>I</i>, <i>A</i> and <i>O</i> instead.",
            "<b>Split.</b> Set λ to the diagonal value and <i>N</i> = <i>A</i> − λ<i>I</i>. Write <i>N</i> out; it should be all zeros except on one side of the diagonal.",
            "<b>Find the index by multiplying, not by guessing.</b> Compute <i>N</i><sup>2</sup>. If it is not <i>O</i>, compute <i>N</i><sup>3</sup>. For an <i>n</i> × <i>n</i> strictly triangular matrix the index is at most <i>n</i>, so this ends quickly.",
            "<b>Write the truncated sum</b> with exactly <i>k</i> terms, and evaluate the binomial coefficients as numbers before assembling anything.",
            "<b>Assemble entrywise and spot-check one entry</b>, ideally a corner, against a direct low power such as <i>A</i><sup>2</sup>. If the pattern is right at <i>n</i> = 2 it is right at <i>n</i> = 2025."
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE FINITE INVERSE SERIES",
          "tag": "N nilpotent of index k",
          "main": "(I + N)<sup>−1</sup> = I − N + N<sup>2</sup> − ⋯ + (−1)<sup>k−1</sup>N<sup>k−1</sup>",
          "legend": [
            "Verify rather than assert. For <i>k</i> = 2: (<i>I</i> + <i>N</i>)(<i>I</i> − <i>N</i>) = <i>I</i> − <i>N</i> + <i>N</i> − <i>N</i><sup>2</sup> = <i>I</i>.",
            "In general the product telescopes to <i>I</i> ± <i>N</i><sup>k</sup>, which is <i>I</i>. The series is finite and exact, not an approximation.",
            "For (<i>I</i> − <i>N</i>)<sup>−1</sup> every sign turns positive: <i>I</i> + <i>N</i> + <i>N</i><sup>2</sup> + ⋯"
          ],
          "note": "This works even when nobody hands you a polynomial equation for A, which is what makes it stronger than the f(A) = O trick and much faster than a row reduction."
        },
        {
          "t": "p",
          "html": "The other route to an inverse costs no reduction either. If a matrix satisfies a polynomial equation with a <b>non-zero constant term</b>, that equation already contains <i>A</i><sup>−1</sup>. Isolate the constant term on one side, factor <i>A</i> out of everything on the other, and divide by the scalar. You are left with <i>A</i> times something equal to <i>I</i>, and for square matrices <i>AB</i> = <i>I</i> already forces <i>B</i> = <i>A</i><sup>−1</sup>. Notice the condition doing the work: if the constant term were zero, every term would carry a factor of <i>A</i> and the matrix could perfectly well be singular."
        },
        {
          "t": "proc",
          "title": "Reading the inverse off a polynomial relation",
          "steps": [
            "<b>Check there is a non-zero constant term.</b> In <i>f</i>(<i>A</i>) = <i>O</i>, look for a <i>cI</i> with <i>c</i> ≠ 0. Without it the method does not apply and <i>A</i> may genuinely have no inverse.",
            "<b>Move that term alone to the other side</b>, so every remaining term carries at least one factor of <i>A</i>.",
            "<b>Factor <i>A</i> out on the left</b>, giving <i>A</i>(polynomial in <i>A</i>) = <i>cI</i>. Keep <i>A</i> on the same side throughout, because you may not commute your way around a mistake.",
            "<b>Divide by the scalar <i>c</i></b>, which is a legal scalar operation, and read off <i>A</i><sup>−1</sup> as the bracket over <i>c</i>.",
            "<b>Verify with one multiplication.</b> <i>A</i> times your answer must give <i>I</i>, and it takes ten seconds."
          ]
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "Find <i>A</i><sup>100</sup> for <i>A</i> with rows (1, 2) and (0, 1).",
          "steps": [
            "The diagonal is a constant 1, so split: λ = 1 and <i>N</i> = <i>A</i> − <i>I</i> has rows (0, 2) and (0, 0).",
            "Square it: <i>N</i><sup>2</sup> = <i>O</i>, so the index is 2 and the expansion has two terms.",
            "<i>A</i><sup>100</sup> = 1<sup>100</sup><i>I</i> + 100 · 1<sup>99</sup><i>N</i> = <i>I</i> + 100<i>N</i>.",
            "The top-right entry is 100 × 2, straight from the formula rather than from a guessed pattern."
          ],
          "ans": "rows (1, 200) and (0, 1)"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "For <i>A</i> with rows (1, 1, 1), (0, 1, 1) and (0, 0, 1), find <i>A</i><sup>3</sup> and <i>A</i><sup>−1</sup>.",
          "steps": [
            "λ = 1 and <i>N</i> = <i>A</i> − <i>I</i> has rows (0, 1, 1), (0, 0, 1), (0, 0, 0).",
            "Do <b>not</b> assume <i>N</i><sup>2</sup> = <i>O</i>. Multiplying gives <i>N</i><sup>2</sup> with rows (0, 0, 1), (0, 0, 0), (0, 0, 0), and only <i>N</i><sup>3</sup> = <i>O</i>. Index 3.",
            "Power: <i>A</i><sup>3</sup> = <i>I</i> + 3<i>N</i> + 3<i>N</i><sup>2</sup>, since C(3, 2) = 3.",
            "Inverse: the alternating series with <i>k</i> = 3 gives <i>A</i><sup>−1</sup> = <i>I</i> − <i>N</i> + <i>N</i><sup>2</sup>."
          ],
          "ans": "<i>A</i><sup>3</sup> has rows (1, 3, 6), (0, 1, 3), (0, 0, 1) · <i>A</i><sup>−1</sup> has rows (1, −1, 0), (0, 1, −1), (0, 0, 1). Three row-operation moves saved"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN · 2018",
          "q": "<i>A</i> has rows (1, 0, 0), (1, 1, 0) and (1, 1, 1), and <i>B</i> = <i>A</i><sup>20</sup>. Find the sum of the first column of <i>B</i>.",
          "steps": [
            "λ = 1 and <i>N</i> = <i>A</i> − <i>I</i> has rows (0, 0, 0), (1, 0, 0), (1, 1, 0). This one is lower triangular; the method does not care which side.",
            "<i>N</i><sup>2</sup> has rows (0, 0, 0), (0, 0, 0), (1, 0, 0), and <i>N</i><sup>3</sup> = <i>O</i>. Index 3.",
            "<i>A</i><sup>20</sup> = <i>I</i> + 20<i>N</i> + C(20, 2)<i>N</i><sup>2</sup> = <i>I</i> + 20<i>N</i> + 190<i>N</i><sup>2</sup>.",
            "First column, entry by entry: 1, then 20, then 20 + 190 = 210."
          ],
          "ans": "1 + 20 + 210 = 231. Brute force would need twenty 3 × 3 multiplications, which is exactly the path the question is built to punish"
        },
        {
          "t": "p",
          "html": "The same collapse wears other costumes. If the diagonal is not constant, test <i>A</i><sup>2</sup> against <i>I</i>, <i>A</i>, <i>O</i> and small multiples of <i>A</i>, as in Topic 05. If the matrix is a rotation, powers are angles and the condition becomes an equation in <i>n</i>θ. If the entries involve a cube root of unity, exponents reduce modulo 3. And if a polynomial relation is handed to you, the inverse is already inside it. Four costumes, one habit: look for the structure before you look for the entries."
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "For <i>A</i> with rows (1, 2) and (2, 1), show that <i>A</i><sup>2</sup> − 2<i>A</i> − 3<i>I</i> = <i>O</i>, and hence find <i>A</i><sup>−1</sup>.",
          "steps": [
            "<i>A</i><sup>2</sup> has rows (5, 4) and (4, 5); 2<i>A</i> has rows (2, 4) and (4, 2); 3<i>I</i> is diagonal (3, 3).",
            "Entry by entry: 5 − 2 − 3 = 0 and 4 − 4 − 0 = 0, so the relation holds.",
            "Isolate the constant term: <i>A</i><sup>2</sup> − 2<i>A</i> = 3<i>I</i>, so <i>A</i>(<i>A</i> − 2<i>I</i>) = 3<i>I</i>.",
            "Divide by 3: <i>A</i> times one third of (<i>A</i> − 2<i>I</i>) is <i>I</i>."
          ],
          "ans": "<i>A</i><sup>−1</sup> = one third of the matrix with rows (−1, 2) and (2, −1). No row reduction and no determinant"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "<i>A</i> is the rotation matrix with rows (cos θ, −sin θ) and (sin θ, cos θ), with θ = π/9. Find the least positive <i>n</i> with <i>A</i><sup>n</sup> = <i>I</i>.",
          "steps": [
            "Powers of a rotation are angles: <i>A</i><sup>n</sup> is the rotation through <i>n</i>θ.",
            "A rotation equals <i>I</i> exactly when its angle is a whole number of full turns.",
            "So <i>n</i>π/9 = 2<i>k</i>π for some positive integer <i>k</i>, giving <i>n</i> = 18<i>k</i>.",
            "The least positive value takes <i>k</i> = 1."
          ],
          "ans": "<i>n</i> = 18. Multiplying the matrix out even once is wasted work; the angle carries all the information"
        },
        {
          "t": "mcq",
          "q": "<i>A</i> has rows (1, 1) and (0, 1). The entry <i>a</i><sub>12</sub> of <i>A</i><sup>10</sup> is",
          "correct": 1,
          "opts": [
            {
              "label": "1",
              "nudge": "You assumed powers leave the matrix unchanged. Only the <b>diagonal</b> is unchanged here; the off-diagonal entry grows by 1 with every multiplication."
            },
            {
              "label": "10",
              "nudge": null
            },
            {
              "label": "45",
              "nudge": "That is C(10, 2), the coefficient of <i>N</i><sup>2</sup>. But <i>N</i><sup>2</sup> = <i>O</i> for this matrix, so that term does not exist at all."
            },
            {
              "label": "1024",
              "nudge": "That is 2<sup>10</sup>. You treated the matrix as if its entries multiplied like a single number; matrix powers are not entrywise powers."
            }
          ],
          "solution": "Split <i>A</i> = <i>I</i> + <i>N</i> with <i>N</i> having rows (0, 1) and (0, 0). Then <i>N</i><sup>2</sup> = <i>O</i>, so <i>A</i><sup>10</sup> = <i>I</i> + 10<i>N</i>, whose (1, 2) entry is 10."
        },
        {
          "t": "mcq",
          "q": "<i>A</i> has rows (1, 2) and (2, 4). Then <i>A</i><sup>5</sup> equals",
          "correct": 2,
          "opts": [
            {
              "label": "<i>A</i>",
              "nudge": "That would need <i>A</i> to be idempotent, <i>A</i><sup>2</sup> = <i>A</i>. Compute it: <i>A</i><sup>2</sup> has rows (5, 10) and (10, 20), which is 5<i>A</i>, not <i>A</i>."
            },
            {
              "label": "5<i>A</i>",
              "nudge": "That is <i>A</i><sup>2</sup>, not <i>A</i><sup>5</sup>. You found the structure and then stopped one step in."
            },
            {
              "label": "625<i>A</i>",
              "nudge": null
            },
            {
              "label": "3125<i>A</i>",
              "nudge": "That is 5<sup>5</sup><i>A</i>. The pattern is <i>A</i><sup>n</sup> = 5<sup>n−1</sup><i>A</i>, because the surviving <i>A</i> already accounts for one of the five factors."
            }
          ],
          "solution": "<i>A</i><sup>2</sup> = 5<i>A</i>, so by induction <i>A</i><sup>n</sup> = 5<sup>n−1</sup><i>A</i>. Hence <i>A</i><sup>5</sup> = 5<sup>4</sup><i>A</i> = 625<i>A</i>, with rows (625, 1250) and (1250, 2500)."
        },
        {
          "t": "mcq",
          "q": "<i>N</i> has rows (0, 1, 2), (0, 0, 1) and (0, 0, 0), and <i>P</i> = <i>I</i> + <i>N</i>. If <i>Q</i> = <i>P</i><sup>50</sup> − <i>I</i>, the sum of all the entries of <i>Q</i> is",
          "correct": 1,
          "opts": [
            {
              "label": "200",
              "nudge": "You stopped after the 50<i>N</i> term, assuming <i>N</i><sup>2</sup> = <i>O</i>. It is not: <i>N</i><sup>2</sup> still has a 1 in the top-right corner, and only <i>N</i><sup>3</sup> vanishes."
            },
            {
              "label": "1425",
              "nudge": null
            },
            {
              "label": "1225",
              "nudge": "That is the C(50, 2)<i>N</i><sup>2</sup> contribution alone. The 50<i>N</i> term, worth another 200, has gone missing."
            },
            {
              "label": "2500",
              "nudge": "That is 50<sup>2</sup>, a guess with no expansion behind it. The coefficient of <i>N</i><sup>2</sup> is C(50, 2) = 1225, not 50<sup>2</sup>."
            }
          ],
          "solution": "<i>N</i><sup>2</sup> has rows (0, 0, 1), (0, 0, 0), (0, 0, 0) and <i>N</i><sup>3</sup> = <i>O</i>, so <i>Q</i> = 50<i>N</i> + 1225<i>N</i><sup>2</sup>. The entries of <i>N</i> sum to 1 + 2 + 1 = 4 and those of <i>N</i><sup>2</sup> to 1, giving 50 × 4 + 1225 × 1 = 1425."
        },
        {
          "t": "mcq",
          "q": "<i>A</i> has rows (1, 1) and (0, 1). Then <i>A</i><sup>2025</sup> − 2025<i>A</i> + 2024<i>I</i> equals",
          "correct": 0,
          "opts": [
            {
              "label": "<i>O</i>",
              "nudge": null
            },
            {
              "label": "<i>I</i>",
              "nudge": "You cancelled the <i>N</i> terms correctly but mis-added the identity coefficients. They come to 1 − 2025 + 2024, which is 0, not 1."
            },
            {
              "label": "−<i>N</i>",
              "nudge": "The <i>N</i> terms cancel exactly: <i>A</i><sup>2025</sup> supplies 2025<i>N</i> and 2025<i>A</i> removes the same 2025<i>N</i>."
            },
            {
              "label": "2024<i>I</i>",
              "nudge": "You expanded <i>A</i><sup>2025</sup> but left 2025<i>A</i> unexpanded, so its 2025<i>I</i> part was never subtracted."
            }
          ],
          "solution": "<i>A</i> = <i>I</i> + <i>N</i> with <i>N</i><sup>2</sup> = <i>O</i>, so <i>A</i><sup>2025</sup> = <i>I</i> + 2025<i>N</i>. Then (<i>I</i> + 2025<i>N</i>) − 2025(<i>I</i> + <i>N</i>) + 2024<i>I</i> = (1 − 2025 + 2024)<i>I</i> = <i>O</i>."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[JEE Main] Find <i>A</i><sup>50</sup> for <i>A</i> with rows (1, 5) and (0, 1).",
              "a": "<i>N</i><sup>2</sup> = <i>O</i>, so <i>A</i><sup>50</sup> = <i>I</i> + 50<i>N</i>, with rows (1, 250) and (0, 1)."
            },
            {
              "q": "[JEE Main] Find <i>A</i><sup>7</sup> for <i>A</i> with rows (3, 1) and (0, 3).",
              "a": "λ = 3, <i>N</i><sup>2</sup> = <i>O</i>, so <i>A</i><sup>7</sup> = 3<sup>7</sup><i>I</i> + 7 · 3<sup>6</sup><i>N</i>, with rows (2187, 5103) and (0, 2187)."
            },
            {
              "q": "[JEE Main] Show that <i>N</i> with rows (0, 1, 0), (0, 0, 1), (0, 0, 0) has index 3, and hence find (<i>I</i> − <i>N</i>)<sup>−1</sup>.",
              "a": "<i>N</i><sup>2</sup> has rows (0, 0, 1), (0, 0, 0), (0, 0, 0) and <i>N</i><sup>3</sup> = <i>O</i>. Then (<i>I</i> − <i>N</i>)<sup>−1</sup> = <i>I</i> + <i>N</i> + <i>N</i><sup>2</sup>, with rows (1, 1, 1), (0, 1, 1), (0, 0, 1)."
            },
            {
              "q": "[JEE Advanced] <i>A</i> has rows (2, 1, 1), (0, 2, 1), (0, 0, 2). Write <i>A</i> = 2<i>I</i> + <i>N</i> and express <i>A</i><sup>10</sup> in terms of <i>I</i>, <i>N</i>, <i>N</i><sup>2</sup>.",
              "a": "<i>N</i><sup>3</sup> = <i>O</i>, so <i>A</i><sup>10</sup> = 2<sup>10</sup><i>I</i> + 10 · 2<sup>9</sup><i>N</i> + 45 · 2<sup>8</sup><i>N</i><sup>2</sup> = 1024<i>I</i> + 5120<i>N</i> + 11520<i>N</i><sup>2</sup>."
            },
            {
              "q": "[JEE Main] <i>A</i> satisfies <i>A</i><sup>2</sup> − 4<i>A</i> + 3<i>I</i> = <i>O</i>. Express <i>A</i><sup>−1</sup> as a polynomial in <i>A</i>.",
              "a": "<i>A</i>(4<i>I</i> − <i>A</i>) = 3<i>I</i>, so <i>A</i><sup>−1</sup> = one third of (4<i>I</i> − <i>A</i>)."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Brute-forcing the power.</b> Once an exponent passes about 3, a structure has been planted. Computing <i>A</i><sup>50</sup> entry by entry is the intended wrong path, not bad luck.",
            "<b>Guessing the nilpotent index.</b> Always multiply. A 3 × 3 strictly triangular <i>N</i> often has <i>N</i><sup>2</sup> ≠ <i>O</i>, and assuming otherwise drops a whole term from the answer.",
            "<b>Using λ<sup>n</sup> where λ<sup>n−1</sup> belongs.</b> Each factor of <i>N</i> costs one power of λ, so the middle term is <i>n</i>λ<sup>n−1</sup><i>N</i> and the next is C(<i>n</i>, 2)λ<sup>n−2</sup><i>N</i><sup>2</sup>. Getting this wrong scales the whole answer by a power of λ.",
            "<b>Using the binomial theorem on two matrices that do not commute.</b> It is legal here only because λ<i>I</i> commutes with everything. For a general <i>B</i> and <i>C</i>, (<i>B</i> + <i>C</i>)<sup>n</sup> has no such expansion.",
            "<b>Forgetting to write the constant term as <i>cI</i>.</b> In <i>f</i>(<i>A</i>) = <i>O</i> a bare number cannot sit beside a matrix, and it is that <i>cI</i> that the inverse is eventually read off."
          ]
        },
        {
          "t": "protip",
          "html": "before touching a high power, run three tests in ten seconds. is the diagonal constant? then split into λ<i>I</i> + <i>N</i> and find the index. is it a rotation? then powers are angles. otherwise square it and see whether <i>A</i><sup>2</sup> is <i>I</i>, <i>A</i>, <i>O</i> or a multiple of <i>A</i>. one of those three almost always fires, and the question is then two lines long."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "A = λI + N, N<sup>k</sup> = O",
              "note": "peel off the constant diagonal, then find the index"
            },
            {
              "f": "(λI + N)<sup>n</sup> = λ<sup>n</sup>I + nλ<sup>n−1</sup>N + C(n,2)λ<sup>n−2</sup>N² + ⋯",
              "note": "stops at r = k − 1, so two or three terms"
            },
            {
              "f": "(I + N)⁻¹ = I − N + N² − ⋯",
              "note": "finite and exact · signs all plus for (I − N)⁻¹"
            },
            {
              "f": "f(A) = O with a cI term ⇒ A⁻¹",
              "note": "factor A out, divide by c, read it off"
            },
            {
              "f": "test A² before any big power",
              "note": "I, A, O or cA all collapse the tower"
            }
          ],
          "aids": [
            "“a huge power is a short sum”",
            "“square N before you trust it”",
            "“every N costs one power of lambda”"
          ]
        }
      ]
    }
  ]
};

export default ch12Matrices;
