/**
 * Chapter 07 · Binomial Theorem. Mathematics, Class 11.
 *
 * Restructured from pages 494 to 582 of the Drona Class 11 Mathematics Master
 * Reference into the block system in design_handoff_textbooks/CONTENT_SPEC.md,
 * following math-11-01-sets.ts and math-11-03-trigonometry.ts for voice and
 * density.
 *
 * The source is three documents stacked: a typeset chapter of seven subtopics,
 * a Round 1 supplement (Addenda A, B, C plus a full Subtopic 08 on multisection
 * by roots of unity) and a Round 2 addendum (D, E, F, G). Six topics is the
 * schema's ceiling, so nothing supplementary gets a topic of its own:
 *
 *   - Addendum A, conjugate-pair expansions and exact numerical evaluation,
 *     sits in Topic 01. It is Sub-01's expansion written twice and subtracted,
 *     and its term-count rule is the same off-by-one discipline.
 *   - Addendum B (rational and integral terms in a surd expansion) and
 *     Addendum D (the p-th term from the end) sit in Topic 02. Both are the
 *     "specific term" algorithm with one extra condition bolted on.
 *   - Addendum G, the central binomial coefficient, sits in Topic 03 next to
 *     the greatest-coefficient result it is the closed form of.
 *   - Addenda E and F (Vandermonde, the absorption identity) and Subtopic 08
 *     (multisection) sit in Topic 04. All three are more tools for the same
 *     job: turning a weighted coefficient sum into a closed form.
 *   - Addendum C, the mod K squared machinery, sits in Topic 06 beside the
 *     single-term reduction it corrects.
 *
 * Subtopics 05 (any index) and 07 (multinomial) share Topic 05, because they
 * are the same move made twice: Sub-01 assumed the index was a positive integer
 * and that there were exactly two parts, and these are what happens when you
 * drop one assumption or the other. They meet in the source's own example,
 * where (1 + x + x² + ⋯)³ is read as (1 − x)⁻³.
 *
 * The exam hook is authored once, on topic 1, with a bold heading per topic,
 * because the reader renders `hook` only there. Same convention, and the same
 * reason, as the Sets and Trigonometry chapters.
 *
 * Six `diagram` blocks: three `pascal` and three `plot`. The `pascal` figure
 * was built for this chapter, and the three uses are deliberately disjoint, the
 * triangle's own rules in Topic 01, the peak in Topic 03, the halves and thirds
 * of a row in Topic 04. The plots carry the three questions a picture answers
 * faster than prose: where the net exponent crosses its target, where the term
 * magnitudes peak, and what convergence looks like from outside the window.
 * Diagram chips and captions render as plain text, not markup, so they carry no
 * inline tags and use Unicode superscripts.
 */
import type { Chapter } from '@/lib/textbooks';

export const ch07Binomial: Chapter = {
  "chapter": "07",
  "title": "Binomial Theorem",
  "subject": "Mathematics",
  "klass": "Class 11",
  "topics": [
    {
      "n": "01",
      "title": "The Expansion and Pascal’s Triangle",
      "chip": "01 EXPAND",
      "kalam": "n brackets, n choices, count them",
      "blocks": [
        {
          "t": "hook",
          "html": "<b>01 · The Expansion and Pascal’s Triangle</b><br>The foundation slab of the chapter: every later idea, general term, middle term, greatest coefficient, coefficient sums, is built on it. JEE Main almost always carries one direct question rooted here, the number of terms, a single coefficient, or the sum of all the coefficients. JEE Advanced uses it as scaffolding inside harder multi-concept problems. CBSE asks a straight expansion, or a conjugate-pair evaluation such as <b>(√3 + √2)<sup>4</sup> − (√3 − √2)<sup>4</sup></b>, for 2 to 3 marks. It is also the prerequisite for Class 12 Probability.<br><br><b>02 · General, Middle and Independent Terms</b><br>The most heavily examined slice of the chapter. <b>“Find the term independent of <i>x</i>”</b> and “find the coefficient of <i>x</i><sup>k</sup>” are near-guaranteed in JEE Main, often twice in one paper. CBSE routinely asks for the middle term or a stated term as a 2 to 3 mark question. JEE Advanced threads the general term through almost every binomial problem it sets, and adds the surd-expansion count where two divisibility conditions have to agree at once. Master the general term and three-quarters of the chapter becomes mechanical.<br><br><b>03 · Greatest Term and Greatest Coefficient</b><br>“Find the numerically greatest term” is a recurring JEE Main question and a frequent Advanced sub-step. The greatest binomial coefficient, always the middle one, is a quick conceptual MCQ. Not part of the rationalised CBSE Class 11 core, but standard in every JEE syllabus. The central coefficient <sup>2n</sup>C<sub>n</sub> itself <i>is</i> NCERT material: the middle term of (1 + <i>x</i>)<sup>2n</sup> is a 3 to 4 mark board proof.<br><br><b>04 · Coefficient Identities and Series Sums</b><br>The single most heavily examined area of the chapter at JEE level. Sums like Σ<i>r</i> C<sub>r</sub>, Σ C<sub>r</sub>/(<i>r</i> + 1) and Σ C<sub>r</sub><sup>2</sup> appear almost every year in Main and Advanced. Four reusable moves crack nearly all of them, and the roots-of-unity filter handles the ones they cannot reach, including counting problems in disguise (“how many subsets have size divisible by 3?”). Beyond the rationalised CBSE core, indispensable for competitive exams.<br><br><b>05 · Any Index and the Multinomial Theorem</b><br>Both are JEE extensions, beyond the rationalised CBSE Class 11 core. Main sets expansions of (1 ± <i>x</i>)<sup>−1</sup> and (1 ± <i>x</i>)<sup>−2</sup>, fractional indices, approximations such as (1.02)<sup>8</sup>, and the multinomial counts, “number of terms in (<i>a</i> + <i>b</i> + <i>c</i>)<sup>n</sup>” and “coefficient of <i>x</i><sup>a</sup><i>y</i><sup>b</sup><i>z</i><sup>c</sup>”. Advanced hides both inside series-identification and counting problems. If you are sitting boards only, this topic is optional; for JEE it is not.<br><br><b>06 · Divisibility, Remainders and Integral Parts</b><br>A high-yield application class. “Remainder when <i>a</i><sup>n</sup> is divided by <i>m</i>”, “last two digits of <i>a</i><sup>n</sup>”, and integral or fractional part problems on (<i>p</i> + √<i>q</i>)<sup>n</sup> recur in JEE Main and Advanced. The piece CBSE does ask is <b>“show that 9<sup>n+1</sup> − 8<i>n</i> − 9 is divisible by 64”</b>, an NCERT exercise worth 3 to 4 marks, and it is precisely the problem where keeping only one term of the expansion loses you the question."
        },
        {
          "t": "p",
          "html": "Your local kirana shop sells two kinds of biscuit, <i>a</i> and <i>b</i>. You are handed <i>n</i> identical boxes, each holding exactly one <i>a</i> and one <i>b</i>, and you build a combo packet by taking one biscuit from every box. How many kinds of packet are there, and how many ways can you build each kind? That question, secretly, is the entire binomial theorem."
        },
        {
          "t": "p",
          "html": "Because multiplying out (<i>a</i> + <i>b</i>)(<i>a</i> + <i>b</i>) ⋯ (<i>a</i> + <i>b</i>) with <i>n</i> brackets is exactly the same act. Every term of the answer is made by walking through the <i>n</i> brackets and taking either the <i>a</i> or the <i>b</i> from each. Take <i>b</i> from exactly <i>r</i> brackets, and <i>a</i> from the remaining <i>n</i> − <i>r</i>, and you have built the product <i>a</i><sup>n−r</sup><i>b</i><sup>r</sup>. The number of different ways to choose <b>which</b> <i>r</i> brackets hand over the <i>b</i> is <sup>n</sup>C<sub>r</sub>. So that product turns up <sup>n</sup>C<sub>r</sub> times, and <sup>n</sup>C<sub>r</sub> is its coefficient."
        },
        {
          "t": "p",
          "html": "Two facts most students memorise blindly fall straight out of this. First, in every term the powers of <i>a</i> and <i>b</i> add up to <i>n</i>, because you made exactly <i>n</i> choices and (<i>n</i> − <i>r</i>) + <i>r</i> = <i>n</i>. The expansion is <b>homogeneous of degree <i>n</i></b>. Second, the coefficients are symmetric, <sup>n</sup>C<sub>r</sub> = <sup>n</sup>C<sub>n−r</sub>, because choosing which <i>r</i> brackets give <i>b</i> is the same act as choosing which <i>n</i> − <i>r</i> give <i>a</i>."
        },
        {
          "t": "think",
          "html": "the power and the coefficient are the same story told twice. “how many boxes gave a <i>b</i>” is the exponent; “how many ways that could happen” is the coefficient. they are joined at the hip, which is why these numbers are called binomial <i>coefficients</i>, they are literally combination counts."
        },
        {
          "t": "def",
          "term": "Binomial coefficient",
          "html": "<sup>n</sup>C<sub>r</sub> = <i>n</i>! / [<i>r</i>! (<i>n</i> − <i>r</i>)!], defined for integers 0 ≤ <i>r</i> ≤ <i>n</i>. It counts the ways of choosing <i>r</i> things out of <i>n</i>, which is why it is a whole number and never a fraction. Some books write it as a stacked pair of brackets; it is the same object. This chapter uses <sup>n</sup>C<sub>r</sub> throughout, and C<sub>r</sub> as shorthand once a single <i>n</i> is fixed."
        },
        {
          "t": "formula",
          "kicker": "THE BINOMIAL THEOREM",
          "tag": "n a positive integer",
          "main": "(a + b)<sup>n</sup> = Σ <sup>n</sup>C<sub>r</sub> a<sup>n−r</sup> b<sup>r</sup>",
          "legend": [
            "the sum runs <i>r</i> = 0 to <i>n</i>, so it is <sup>n</sup>C<sub>0</sub><i>a</i><sup>n</sup> + <sup>n</sup>C<sub>1</sub><i>a</i><sup>n−1</sup><i>b</i> + ⋯ + <sup>n</sup>C<sub>n</sub><i>b</i><sup>n</sup>",
            "powers of <i>a</i> fall from <i>n</i> to 0 while powers of <i>b</i> rise from 0 to <i>n</i>, and they always add to <i>n</i>",
            "the single-variable form exams prefer: (1 + <i>x</i>)<sup>n</sup> = 1 + <sup>n</sup>C<sub>1</sub><i>x</i> + <sup>n</sup>C<sub>2</sub><i>x</i><sup>2</sup> + ⋯ + <sup>n</sup>C<sub>n</sub><i>x</i><sup>n</sup>"
          ],
          "note": "Here <i>n</i> is a positive integer, and that is what makes the expansion stop after a clean <i>n</i> + 1 terms. A negative or fractional index is a different animal entirely, an infinite series with a convergence condition, and Topic 05 handles it. Do not take Pascal’s triangle there."
        },
        {
          "t": "formula",
          "kicker": "THE GENERAL TERM",
          "tag": "the whole chapter’s workhorse",
          "main": "T<sub>r+1</sub> = <sup>n</sup>C<sub>r</sub> a<sup>n−r</sup> b<sup>r</sup>",
          "legend": [
            "<i>r</i> = 0, 1, 2, …, <i>n</i>, so <i>r</i> = 0 gives the first term and <i>r</i> = <i>n</i> the last",
            "read the subscript carefully: the (<i>r</i> + 1)th term carries <sup>n</sup>C<sub>r</sub>, so the <i>m</i>th term needs <i>r</i> = <i>m</i> − 1"
          ],
          "note": "This is the catalogue lookup for the whole expansion. Feed in an <i>r</i> and it hands you that one term without printing the other <i>n</i>. Topic 02 lives entirely inside this formula."
        },
        {
          "t": "defgrid",
          "title": "The properties that follow immediately",
          "rows": [
            {
              "k": "Number of terms",
              "v": "<i>n</i> + 1, never <i>n</i>. Powers 0 to <i>n</i> is <i>n</i> + 1 values."
            },
            {
              "k": "Sum of indices",
              "v": "power of <i>a</i> + power of <i>b</i> = <i>n</i>, in every single term"
            },
            {
              "k": "Symmetry",
              "v": "<sup>n</sup>C<sub>r</sub> = <sup>n</sup>C<sub>n−r</sub>, so the row reads the same backwards"
            },
            {
              "k": "Pascal’s rule",
              "v": "<sup>n</sup>C<sub>r</sub> + <sup>n</sup>C<sub>r−1</sub> = <sup>n+1</sup>C<sub>r</sub>, for 1 ≤ <i>r</i> ≤ <i>n</i>"
            },
            {
              "k": "The two ends",
              "v": "<sup>n</sup>C<sub>0</sub> = <sup>n</sup>C<sub>n</sub> = 1, always"
            },
            {
              "k": "Sum of coefficients",
              "v": "put <i>a</i> = <i>b</i> = 1: Σ <sup>n</sup>C<sub>r</sub> = 2<sup>n</sup>. Put <i>a</i> = 1, <i>b</i> = −1: the alternating sum is 0 for <i>n</i> ≥ 1."
            }
          ]
        },
        {
          "t": "p",
          "html": "<b>Pascal’s triangle</b> is a lazy, beautiful way to read those counts off without touching a factorial. Write 1 at the top. Start and end every new row with 1. Fill each interior entry with the sum of the two entries diagonally above it. Row <i>n</i> then hands you the coefficients of (<i>a</i> + <i>b</i>)<sup>n</sup> in order. Row 4 is 1 4 6 4 1, so (<i>a</i> + <i>b</i>)<sup>4</sup> = <i>a</i><sup>4</sup> + 4<i>a</i><sup>3</sup><i>b</i> + 6<i>a</i><sup>2</sup><i>b</i><sup>2</sup> + 4<i>ab</i><sup>3</sup> + <i>b</i><sup>4</sup>."
        },
        {
          "t": "p",
          "html": "The addition rule is not a coincidence, it is counting again. A term of (<i>a</i> + <i>b</i>)<sup>n</sup> arrives either by multiplying an <i>a</i> into a term of (<i>a</i> + <i>b</i>)<sup>n−1</sup> or a <i>b</i> into a term of the same expansion. Those two parents are the two numbers sitting above. Algebraically it is one LCM: <sup>n</sup>C<sub>r</sub> + <sup>n</sup>C<sub>r−1</sub> = <i>n</i>![(<i>n</i> − <i>r</i> + 1) + <i>r</i>] / [<i>r</i>!(<i>n</i> − <i>r</i> + 1)!] = (<i>n</i> + 1)! / [<i>r</i>!(<i>n</i> + 1 − <i>r</i>)!] = <sup>n+1</sup>C<sub>r</sub>."
        },
        {
          "t": "diagram",
          "kind": "pascal",
          "kicker": "DIAGRAM · FOUR RULES, ONE TRIANGLE",
          "chips": ["the triangle", "addition rule", "symmetry", "row sum", "the two edges"],
          "captions": [
            "Rows 0 to 6. Row n holds the n + 1 coefficients of (a + b) to the power n, left to right, and nothing else in this chapter needs computing for n up to about 6.",
            "The dashed pair is 3 and 3 in row 3; the ringed 6 below them is their sum. That is Pascal's rule, C(3,1) + C(3,2) = C(4,2), and it is why the triangle can be built with addition alone.",
            "Row 6 read forwards and backwards is the same list. The two ringed 15s are C(6,2) and C(6,4), equal because choosing 2 brackets to give b is the same act as choosing the other 4 to give a.",
            "The whole of row 5 ringed: 1 + 5 + 10 + 10 + 5 + 1 = 32 = 2 to the power 5. Putting a = b = 1 in the theorem says every row must total 2 to the power n, which is the fastest check you own.",
            "Every row starts and ends with 1, because C(n,0) and C(n,n) are the one way of taking no b at all and the one way of taking b from every bracket."
          ],
          "frames": [
            { "pascal": { "rows": 7 } },
            { "pascal": { "rows": 7, "highlight": [[4, 2]], "parents": [[3, 1], [3, 2]] } },
            { "pascal": { "rows": 7, "highlight": [[6, 2], [6, 4]] } },
            { "pascal": { "rows": 7, "highlight": [[5, 0], [5, 1], [5, 2], [5, 3], [5, 4], [5, 5]] } },
            { "pascal": { "rows": 7, "highlight": [[0, 0], [1, 0], [1, 1], [2, 0], [2, 2], [3, 0], [3, 3], [4, 0], [4, 4], [5, 0], [5, 5], [6, 0], [6, 6]] } }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE THEOREM BY INDUCTION, TAP A LINE",
          "steps": [
            {
              "eq": "n = 1:  <sup>1</sup>C<sub>0</sub>a + <sup>1</sup>C<sub>1</sub>b = a + b",
              "why": "The base case, and it is trivially true. One bracket, one choice, two possible terms."
            },
            {
              "eq": "assume (a + b)<sup>k</sup> = Σ <sup>k</sup>C<sub>r</sub> a<sup>k−r</sup> b<sup>r</sup>",
              "why": "The inductive hypothesis. Assume the statement for one index k and try to drag it up to k + 1."
            },
            {
              "eq": "(a + b)<sup>k+1</sup> = (a + b) · Σ <sup>k</sup>C<sub>r</sub> a<sup>k−r</sup> b<sup>r</sup>",
              "why": "One more factor of (a + b) acting on the previous expansion. That is the whole physical content of raising the power by one: one more bracket to choose from."
            },
            {
              "eq": "= Σ <sup>k</sup>C<sub>r</sub> a<sup>k−r+1</sup> b<sup>r</sup> + Σ <sup>k</sup>C<sub>r</sub> a<sup>k−r</sup> b<sup>r+1</sup>",
              "why": "Distribute. The first sum is what you get by taking a from the new bracket, the second by taking b from it."
            },
            {
              "eq": "shift r → r − 1 in the second sum, then collect a<sup>k+1−r</sup>b<sup>r</sup>",
              "why": "Re-index so both sums carry the same power of a and of b. The coefficient of that common power is C(k,r) + C(k,r−1), one contribution from each sum."
            },
            {
              "eq": "<sup>k</sup>C<sub>r</sub> + <sup>k</sup>C<sub>r−1</sub> = <sup>k+1</sup>C<sub>r</sub>  ⇒  true for k + 1",
              "why": "Pascal's rule, the single load-bearing fact in the whole proof, and the reason the triangle works. The statement now holds for k + 1, so by induction it holds for every positive integer n."
            }
          ]
        },
        {
          "t": "proc",
          "title": "Building the triangle, and knowing when not to",
          "steps": [
            "<b>Start at row 0.</b> A single 1, which is (<i>a</i> + <i>b</i>)<sup>0</sup> = 1. Rows are numbered from 0, so the row for (<i>a</i> + <i>b</i>)<sup>n</sup> is the (<i>n</i> + 1)th row you have written down. That mismatch is a favourite exam trap.",
            "<b>Cap each new row with 1 at both ends</b>, then fill every interior entry as the sum of the two entries diagonally above it.",
            "<b>Read row <i>n</i> as the coefficients</b>, attaching <i>a</i><sup>n</sup>, <i>a</i><sup>n−1</sup><i>b</i>, …, <i>b</i><sup>n</sup>, with powers of <i>a</i> falling and powers of <i>b</i> rising.",
            "<b>Raise the whole bracket.</b> If a part is 2<i>x</i> or 3/<i>x</i>, the power lands on all of it: (2<i>x</i>)<sup>3</sup> = 8<i>x</i><sup>3</sup>, never 2<i>x</i><sup>3</sup>. More coefficient questions are lost here than anywhere else in the topic.",
            "<b>Stop using the triangle around <i>n</i> = 6.</b> Building fifteen rows to read one number is a waste of a minute you will want back; compute <sup>n</sup>C<sub>r</sub> directly instead."
          ]
        },
        {
          "t": "p",
          "html": "One consequence of the theorem is worth a name of its own, because it turns ugly surd arithmetic into two lines. Write the expansions of (<i>a</i> + <i>b</i>)<sup>n</sup> and (<i>a</i> − <i>b</i>)<sup>n</sup> one above the other. They are the same list of terms; the only difference is that the second flips the sign of every odd-<i>r</i> entry. So <b>adding</b> the two destroys the odd-<i>r</i> terms and doubles the even-<i>r</i> ones, and <b>subtracting</b> does the reverse. You never lose the terms you keep, you double them, and that factor of 2 is the single most forgotten thing in this corner of the chapter."
        },
        {
          "t": "formula",
          "kicker": "CONJUGATE PAIRS",
          "tag": "add and the odd ones go",
          "main": "(a + b)<sup>n</sup> ± (a − b)<sup>n</sup>",
          "legend": [
            "sum = 2[<sup>n</sup>C<sub>0</sub><i>a</i><sup>n</sup> + <sup>n</sup>C<sub>2</sub><i>a</i><sup>n−2</sup><i>b</i><sup>2</sup> + ⋯], keeping only <b>even</b> <i>r</i>",
            "difference = 2[<sup>n</sup>C<sub>1</sub><i>a</i><sup>n−1</sup><i>b</i> + <sup>n</sup>C<sub>3</sub><i>a</i><sup>n−3</sup><i>b</i><sup>3</sup> + ⋯], keeping only <b>odd</b> <i>r</i>",
            "term counts: sum has ⌊<i>n</i>/2⌋ + 1 terms, difference has ⌈<i>n</i>/2⌉, and the two must add to <i>n</i> + 1"
          ],
          "note": "Read the shape before you compute. With surd parts, a conjugate <i>sum</i> comes out rational and a conjugate <i>difference</i> comes out as a rational multiple of one surd. An answer of the wrong shape means you kept a term that should have cancelled. Related and free: for <i>x</i> > 0 and <i>n</i> ≥ 2 every term past the first two is positive, so (1 + <i>x</i>)<sup>n</sup> > 1 + <i>nx</i>, which settles size comparisons with no arithmetic at all."
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Expand (2<i>x</i> + 3)<sup>4</sup> using the binomial theorem.",
          "steps": [
            "Here <i>a</i> = 2<i>x</i>, <i>b</i> = 3, <i>n</i> = 4, and row 4 of the triangle is 1, 4, 6, 4, 1.",
            "Raise the <b>whole</b> quantity 2<i>x</i> each time: 1·16<i>x</i><sup>4</sup> + 4·8<i>x</i><sup>3</sup>·3 + 6·4<i>x</i><sup>2</sup>·9 + 4·2<i>x</i>·27 + 1·81.",
            "Sanity check with <i>x</i> = 1: the left side is 5<sup>4</sup> = 625, and 16 + 96 + 216 + 216 + 81 = 625."
          ],
          "ans": "16x⁴ + 96x³ + 216x² + 216x + 81"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Find the number of dissimilar terms in the expansion of (1 + 2<i>x</i> + <i>x</i><sup>2</sup>)<sup>10</sup>.",
          "steps": [
            "The trap is to see three parts and reach for a trinomial count, or to guess 2(10) + 1 = 21 for the wrong reason.",
            "Look at the base first: 1 + 2<i>x</i> + <i>x</i><sup>2</sup> = (1 + <i>x</i>)<sup>2</sup>, a perfect square.",
            "So the expression is ((1 + <i>x</i>)<sup>2</sup>)<sup>10</sup> = (1 + <i>x</i>)<sup>20</sup>, an ordinary binomial with 20 + 1 terms. Before counting terms of any “trinomial”, check whether the base is secretly a perfect power."
          ],
          "ans": "21 terms"
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Find (<i>a</i> + <i>b</i>)<sup>4</sup> − (<i>a</i> − <i>b</i>)<sup>4</sup>, and hence evaluate (√3 + √2)<sup>4</sup> − (√3 − √2)<sup>4</sup>.",
          "steps": [
            "A difference keeps the odd indices only, here <i>r</i> = 1 and <i>r</i> = 3, and doubles them: 2[4<i>a</i><sup>3</sup><i>b</i> + 4<i>ab</i><sup>3</sup>] = 8<i>ab</i>(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>).",
            "Count check: <i>n</i> = 4 is even, so the difference should have <i>n</i>/2 = 2 terms. It does.",
            "Put <i>a</i> = √3, <i>b</i> = √2, so <i>ab</i> = √6, <i>a</i><sup>2</sup> = 3, <i>b</i><sup>2</sup> = 2: the value is 8√6 (3 + 2). Shape check: a conjugate difference must be a rational multiple of a single surd, and it is."
          ],
          "ans": "8ab(a² + b²), and the value is 40√6"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "The coefficients of three consecutive terms of (1 + <i>x</i>)<sup>n</sup> are in the ratio 1 : 3 : 5. Find <i>n</i> and the positions of the terms.",
          "steps": [
            "Call them <sup>n</sup>C<sub>r−1</sub>, <sup>n</sup>C<sub>r</sub>, <sup>n</sup>C<sub>r+1</sub>, and use the ratio of consecutive coefficients rather than factorials: <sup>n</sup>C<sub>r−1</sub>/<sup>n</sup>C<sub>r</sub> = <i>r</i>/(<i>n</i> − <i>r</i> + 1).",
            "First ratio = 1/3 gives 3<i>r</i> = <i>n</i> − <i>r</i> + 1, so <i>n</i> = 4<i>r</i> − 1.",
            "Second ratio: <sup>n</sup>C<sub>r</sub>/<sup>n</sup>C<sub>r+1</sub> = (<i>r</i> + 1)/(<i>n</i> − <i>r</i>) = 3/5 gives 8<i>r</i> + 5 = 3<i>n</i>. Substituting, 8<i>r</i> + 5 = 12<i>r</i> − 3, so <i>r</i> = 2 and <i>n</i> = 7.",
            "Verify: <sup>7</sup>C<sub>1</sub> : <sup>7</sup>C<sub>2</sub> : <sup>7</sup>C<sub>3</sub> = 7 : 21 : 35 = 1 : 3 : 5."
          ],
          "ans": "n = 7, and the terms are T₂, T₃, T₄"
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Expand (<i>x</i> − 2<i>y</i>)<sup>5</sup> completely.",
              "a": "Row 5 is 1 5 10 10 5 1, with signs alternating and the whole of 2y raised each time: x⁵ − 10x⁴y + 40x³y² − 80x²y³ + 80xy⁴ − 32y⁵."
            },
            {
              "q": "[JEE Main] Find the number of dissimilar terms in (1 + <i>x</i> + <i>x</i><sup>2</sup> + <i>x</i><sup>3</sup>)<sup>8</sup>.",
              "a": "Factor first: 1 + x + x² + x³ = (1 + x)(1 + x²), so the expression is (1 + x)⁸(1 + x²)⁸, of degree 24, and every power from 0 to 24 appears. 25 terms."
            },
            {
              "q": "[JEE Main] Find the coefficient of <i>x</i><sup>4</sup> in (1 + <i>x</i>)<sup>2</sup>(1 − <i>x</i>)<sup>6</sup>.",
              "a": "Write it as (1 + 2x + x²)(1 − x)⁶. In (1 − x)⁶ the coefficients of x², x³, x⁴ are 15, −20, 15, so the answer is 1(15) + 2(−20) + 1(15) = −10."
            },
            {
              "q": "[CBSE] Evaluate (√2 + 1)<sup>6</sup> + (√2 − 1)<sup>6</sup>.",
              "a": "A sum keeps r = 0, 2, 4, 6 and doubles: 2[x⁶ + 15x⁴ + 15x² + 1] at x = √2, that is 2[8 + 60 + 30 + 1] = 198. Note it came out a whole number, which is what a conjugate sum always does."
            },
            {
              "q": "[JEE Advanced] If <sup>n</sup>C<sub>0</sub> + <sup>n</sup>C<sub>1</sub> + ⋯ + <sup>n</sup>C<sub>n</sub> = 4096, find <i>n</i> and the value of the alternating sum <sup>n</sup>C<sub>0</sub> − <sup>n</sup>C<sub>1</sub> + <sup>n</sup>C<sub>2</sub> − ⋯",
              "a": "The first sum is 2ⁿ, and 4096 = 2¹², so n = 12. The alternating sum is (1 − 1)ⁿ = 0 for every n ≥ 1."
            }
          ]
        },
        {
          "t": "mcq",
          "q": "The number of terms in the expansion of (2<i>x</i> − 3<i>y</i>)<sup>15</sup> is:",
          "correct": 2,
          "opts": [
            {
              "label": "14",
              "nudge": "That is <i>n</i> − 1, an over-correction by someone who half-remembered that the count is not <i>n</i>."
            },
            {
              "label": "15",
              "nudge": "Using <i>n</i> instead of <i>n</i> + 1. The powers run 0 to 15, and that is sixteen values, not fifteen. This is the single most common slip in the whole chapter."
            },
            {
              "label": "16",
              "nudge": null
            },
            {
              "label": "30",
              "nudge": "2<i>n</i>, from doubling out of habit or confusing the number of terms with the total of the two indices in each term."
            }
          ],
          "solution": "A degree-<i>n</i> expansion runs from power 0 to power <i>n</i>, which is <i>n</i> + 1 = 16 terms. The minus sign and the 2 and 3 change the coefficients, never the count."
        },
        {
          "t": "mcq",
          "q": "The sum of all the binomial coefficients in the expansion of (1 + <i>x</i>)<sup>12</sup> is:",
          "correct": 2,
          "opts": [
            {
              "label": "144",
              "nudge": "That is 12<sup>2</sup>. Squaring the index has nothing to do with it; the sum is a power of 2, not of <i>n</i>."
            },
            {
              "label": "2048",
              "nudge": "2<sup>11</sup>, an off-by-one that used <i>n</i> − 1 in the exponent. 2<sup>n−1</sup> is the even-only or odd-only half-sum, not the total."
            },
            {
              "label": "4096",
              "nudge": null
            },
            {
              "label": "8192",
              "nudge": "2<sup>13</sup>, the off-by-one the other way, from confusing the number of terms (<i>n</i> + 1) with the exponent."
            }
          ],
          "solution": "Put <i>x</i> = 1 in (1 + <i>x</i>)<sup>12</sup> = Σ <sup>12</sup>C<sub>r</sub><i>x</i><sup>r</sup>. The left side becomes 2<sup>12</sup> = 4096, and the right side is exactly the sum of the coefficients."
        },
        {
          "t": "mcq",
          "q": "The coefficient of <i>x</i><sup>2</sup> in the expansion of (1 + 2<i>x</i>)<sup>6</sup> is:",
          "correct": 2,
          "opts": [
            {
              "label": "15",
              "nudge": "<sup>6</sup>C<sub>2</sub> on its own, forgetting that the 2 inside the bracket is raised as well."
            },
            {
              "label": "30",
              "nudge": "<sup>6</sup>C<sub>2</sub> × 2, raising the 2 to the power 1 instead of the power 2."
            },
            {
              "label": "60",
              "nudge": null
            },
            {
              "label": "240",
              "nudge": "<sup>6</sup>C<sub>2</sub> × 2<sup>4</sup>, applying the wrong power to the coefficient. The exponent on the 2 must match the exponent on the <i>x</i>."
            }
          ],
          "solution": "T<sub>r+1</sub> = <sup>6</sup>C<sub>r</sub>(2<i>x</i>)<sup>r</sup>, so for <i>x</i><sup>2</sup> take <i>r</i> = 2: <sup>6</sup>C<sub>2</sub> · 2<sup>2</sup> = 15 × 4 = 60. Every wrong option here has one root cause, not raising the entire term (2<i>x</i>) to its power."
        },
        {
          "t": "mcq",
          "q": "The number of terms in the expansion of (<i>x</i> + <i>a</i>)<sup>47</sup> − (<i>x</i> − <i>a</i>)<sup>47</sup> is:",
          "correct": 1,
          "opts": [
            {
              "label": "23",
              "nudge": "This applies the even-<i>n</i> rule <i>n</i>/2 and truncates 47/2 downwards. The split depends on parity, and 47 is odd."
            },
            {
              "label": "24",
              "nudge": null
            },
            {
              "label": "47",
              "nudge": "That is <i>n</i> itself, the chapter’s signature off-by-one transplanted into a halved count."
            },
            {
              "label": "48",
              "nudge": "<i>n</i> + 1, the count for the full expansion, from forgetting that half the terms cancel in a conjugate difference."
            }
          ],
          "solution": "A difference keeps the odd indices, <i>r</i> = 1, 3, …, 47, which is (47 + 1)/2 = 24 values. Check it against the partner: the sum keeps <i>r</i> = 0, 2, …, 46, also 24, and 24 + 24 = 48 = <i>n</i> + 1."
        },
        {
          "t": "mistakes",
          "items": [
            "Saying (<i>a</i> + <i>b</i>)<sup>n</sup> has <b><i>n</i> terms</b>. It has <b><i>n</i> + 1</b>. Powers 0 to <i>n</i> is <i>n</i> + 1 values, and this one slip costs more marks in this chapter than any other.",
            "Raising only part of a term. <b>(2<i>x</i>)<sup>3</sup> = 8<i>x</i><sup>3</sup></b>, never 2<i>x</i><sup>3</sup>. Cube everything inside the bracket, the number as well as the letter.",
            "Sign chaos in (<i>a</i> − <i>b</i>)<sup>n</sup>. The <i>r</i>th term carries <b>(−1)<sup>r</sup></b>, so even powers of <i>b</i> stay positive and odd powers go negative. A minus base does not make every term negative.",
            "Term number against index. The (<i>r</i> + 1)th term uses <sup>n</sup>C<sub>r</sub>, so “third term” means <b><i>r</i> = 2</b>, not 3. Same family: Pascal’s rows start at <i>n</i> = 0, so the row for (<i>a</i> + <i>b</i>)<sup>n</sup> is the (<i>n</i> + 1)th row on the page.",
            "Dropping the factor of 2 in a conjugate sum or difference. The surviving terms appear in <b>both</b> brackets, so they double. If your answer is exactly half the right one, this is why."
          ]
        },
        {
          "t": "protip",
          "html": "after any expansion, put <i>x</i> = 1 (or <i>a</i> = <i>b</i> = 1) and check the coefficients total 2<sup>n</sup>. five seconds, and it catches nearly every arithmetic and off-by-one slip you can make. second free check: the row must read the same forwards and backwards."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "(a + b)ⁿ = Σ <sup>n</sup>C<sub>r</sub> a<sup>n−r</sup> b<sup>r</sup>",
              "note": "r runs 0 to n, powers always add to n"
            },
            {
              "f": "T<sub>r+1</sub> = <sup>n</sup>C<sub>r</sub> a<sup>n−r</sup> b<sup>r</sup>",
              "note": "the mth term means r = m − 1"
            },
            {
              "f": "number of terms = n + 1",
              "note": "not n, ever"
            },
            {
              "f": "<sup>n</sup>C<sub>r</sub> = <sup>n</sup>C<sub>n−r</sub> · <sup>n</sup>C<sub>r</sub> + <sup>n</sup>C<sub>r−1</sub> = <sup>n+1</sup>C<sub>r</sub>",
              "note": "symmetry, and the rule that builds the triangle"
            },
            {
              "f": "Σ <sup>n</sup>C<sub>r</sub> = 2ⁿ · Σ (−1)<sup>r</sup> <sup>n</sup>C<sub>r</sub> = 0",
              "note": "put x = 1, then x = −1"
            },
            {
              "f": "(a + b)ⁿ ± (a − b)ⁿ = 2[even r] or 2[odd r]",
              "note": "counts add to n + 1, and never forget the 2"
            }
          ],
          "aids": [
            "“powers seesaw: a falls, b rises, they add to n”",
            "“n + 1, not n”",
            "“raise the whole bracket”",
            "“add and the odd ones go”"
          ]
        }
      ]
    },
    {
      "n": "02",
      "title": "General, Middle and Independent Terms",
      "chip": "02 WHICH TERM",
      "kalam": "set the power, solve for r, check it is whole",
      "blocks": [
        {
          "t": "p",
          "html": "Topic 01 taught you to expand (<i>a</i> + <i>b</i>)<sup>n</sup> into all <i>n</i> + 1 terms. Exams almost never want that. They want <b>one</b> term: the 7th, the middle one, the one carrying <i>x</i><sup>12</sup>, or the one with no <i>x</i> in it at all. Writing out all fifty terms of a degree-50 expansion to find one of them would be madness."
        },
        {
          "t": "p",
          "html": "The tool is the general term you already have, T<sub>r+1</sub> = <sup>n</sup>C<sub>r</sub><i>a</i><sup>n−r</sup><i>b</i><sup>r</sup>. Think of it as a railway timetable lookup. The index <i>r</i> is the page number: feed in the right <i>r</i> and the formula hands you that exact term, coefficient and powers and all, without printing the timetable. So every “find the term …” question is the same two-step move, <b>work out which <i>r</i> you need, then substitute it</b>."
        },
        {
          "t": "p",
          "html": "The three named special terms are just three different ways of deciding which <i>r</i> to ask for. For a <b>stated term</b>, <i>r</i> is handed to you (the 6th term is T<sub>6</sub> = T<sub>5+1</sub>, so <i>r</i> = 5). For the <b>middle term</b>, <i>r</i> is the balance point of a row of <i>n</i> + 1 seats. For the <b>term independent of <i>x</i></b>, <i>r</i> is whatever makes the net power of <i>x</i> collapse to zero."
        },
        {
          "t": "think",
          "html": "the independent term is a tug of war. a factor <i>x</i><sup>p</sup> pulls the exponent up, a factor 1/<i>x</i><sup>q</sup> pulls it down, and the constant term is the one place where the two pulls exactly cancel and the <i>x</i> vanishes."
        },
        {
          "t": "formula",
          "kicker": "THE NET EXPONENT",
          "tag": "one expression powers the whole topic",
          "main": "E(r) = p(n − r) − qr",
          "legend": [
            "for the standard exam binomial (α<i>x</i><sup>p</sup> + β/<i>x</i><sup>q</sup>)<sup>n</sup>, whose general term is <sup>n</sup>C<sub>r</sub> α<sup>n−r</sup> β<sup>r</sup> <i>x</i><sup>E(r)</sup>",
            "α and β are the numerical multipliers, <i>p</i> and <i>q</i> the two positive powers of <i>x</i>",
            "the 1/<i>x</i><sup>q</sup> part contributes <b>minus</b> <i>qr</i>, and dropping that minus sign is the most expensive slip in the topic"
          ],
          "note": "Want the term with <i>x</i><sup>k</sup>? Set E(<i>r</i>) = <i>k</i>. Want the term independent of <i>x</i>? Set E(<i>r</i>) = 0. Either way you solve one linear equation for <i>r</i>, and then you validate it."
        },
        {
          "t": "def",
          "term": "When the term does not exist",
          "html": "The <i>r</i> you solve for <b>must be an integer with 0 ≤ <i>r</i> ≤ <i>n</i></b>. This is not a formality, it is a genuine yes/no test. If the exponent equation returns <i>r</i> = 16/5, or <i>r</i> = −2, or <i>r</i> = <i>n</i> + 3, then <b>the term you are hunting simply does not exist</b>. An expansion of a positive integral power need not contain a constant term, nor a term of every power. Never round <i>r</i> to force an answer; “there is no such term” is a legitimate and frequently correct reply."
        },
        {
          "t": "p",
          "html": "For the middle term the argument is about seating, not algebra. The terms T<sub>1</sub>, …, T<sub>n+1</sub> are a list of length <i>n</i> + 1. If <i>n</i> is <b>even</b>, then <i>n</i> + 1 is odd, an odd-length list has exactly one centre seat, and there is a single middle term. If <i>n</i> is <b>odd</b>, then <i>n</i> + 1 is even, an even-length list has no single centre, two seats share it, and there are <b>two</b> middle terms. A question that says “the middle term” of an odd-power expansion is usually a deliberate trap."
        },
        {
          "t": "defgrid",
          "title": "What you want, and the condition you set",
          "rows": [
            {
              "k": "The term with <i>x</i><sup>k</sup>",
              "v": "solve E(<i>r</i>) = <i>k</i>, then validate <i>r</i>"
            },
            {
              "k": "Independent of <i>x</i>",
              "v": "solve E(<i>r</i>) = 0, then validate <i>r</i>"
            },
            {
              "k": "The <i>m</i>th term",
              "v": "<i>r</i> = <i>m</i> − 1, straight into T<sub>r+1</sub>"
            },
            {
              "k": "Middle, <i>n</i> even",
              "v": "one term, T<sub>n/2 + 1</sub>, at <i>r</i> = <i>n</i>/2"
            },
            {
              "k": "Middle, <i>n</i> odd",
              "v": "two terms, T<sub>(n+1)/2</sub> and T<sub>(n+3)/2</sub>"
            },
            {
              "k": "<i>p</i>th from the end",
              "v": "the <i>p</i>th from the start of the reversed binomial (<i>b</i> + <i>a</i>)<sup>n</sup>"
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "DIAGRAM · THE EXPONENT IS A STRAIGHT LINE IN r",
          "mathChips": true,
          "chips": ["18 − 3r = 0", "16 − 5r = 0", "8 − 3r = 5"],
          "captions": [
            "For (x² − 1/x)⁹ the net exponent is E(r) = 2(9 − r) − r = 18 − 3r, a straight line falling as r grows. It meets zero at r = 6, a whole number inside 0 to 9, so the constant term exists and is T7 = C(9,6) = 84.",
            "For (x² + 1/x³)⁸ the line is E(r) = 2(8 − r) − 3r = 16 − 5r. It crosses zero at r = 16/5, between the marked r = 3 and r = 4. The line crosses, but no term sits on the crossing, so this expansion has no constant term at all. Rounding 16/5 to 3 invents a term that is not there.",
            "The same line answers any target power, not just zero. For (x − 2/x²)⁸ we have E(r) = 8 − 3r, and the dashed level is the target 5. They meet at r = 1, so the x⁵ term is T2, with coefficient C(8,1)(−2) = −16."
          ],
          "frames": [
            {
              "x": [0, 9.4],
              "y": [-12, 21],
              "curves": [{ "c": "line", "m": -3, "k": 18 }],
              "points": [
                { "x": 0, "y": 18, "soft": true },
                { "x": 3, "y": 9, "soft": true },
                { "x": 6, "y": 0, "label": "r = 6" },
                { "x": 9, "y": -9, "soft": true }
              ],
              "labels": [{ "x": 2.1, "y": 19, "text": "E(r) = 18 − 3r" }]
            },
            {
              "x": [0, 8.4],
              "y": [-26, 20],
              "curves": [{ "c": "line", "m": -5, "k": 16 }],
              "points": [
                { "x": 3, "y": 1, "label": "r = 3" },
                { "x": 4, "y": -4, "label": "r = 4" },
                { "x": 3.2, "y": 0, "open": true }
              ],
              "labels": [{ "x": 2.1, "y": 17.5, "text": "E(r) = 16 − 5r" }]
            },
            {
              "x": [0, 8.4],
              "y": [-18, 11],
              "curves": [
                { "c": "line", "m": -3, "k": 8 },
                { "c": "line", "m": 0, "k": 5, "dash": true, "soft": true }
              ],
              "points": [{ "x": 1, "y": 5, "label": "r = 1" }],
              "labels": [{ "x": 6.4, "y": 7.5, "text": "target x⁵" }]
            }
          ]
        },
        {
          "t": "proc",
          "title": "The specific-term algorithm",
          "steps": [
            "<b>Write T<sub>r+1</sub></b> for the given binomial and simplify until every <i>x</i> is collected into a single power. Raise the whole of each part, brackets and numbers included.",
            "<b>Read off the net exponent E(<i>r</i>).</b> Write it explicitly as <i>p</i>(<i>n</i> − <i>r</i>) − <i>qr</i> rather than in your head; that is where the sign is lost.",
            "<b>Impose the condition.</b> E(<i>r</i>) = <i>k</i> for the <i>x</i><sup>k</sup> term, E(<i>r</i>) = 0 for the independent term.",
            "<b>Solve, then validate.</b> Is <i>r</i> a whole number with 0 ≤ <i>r</i> ≤ <i>n</i>? If not, the term does not exist. Say so and stop.",
            "<b>Only now substitute</b> the valid <i>r</i> back into T<sub>r+1</sub>, and only as far as the question asks: often it wants the coefficient, not the term."
          ]
        },
        {
          "t": "p",
          "html": "The <b><i>p</i>th term from the end</b> is stated in most books as “the (<i>n</i> − <i>p</i> + 2)th term from the beginning”, which is correct and invites two stacked off-by-one errors, because after finding that term <i>number</i> you must still drop to the <i>index</i> <i>r</i> = <i>n</i> − <i>p</i> + 1. Reverse the binomial instead. Counting from the far end of (<i>a</i> + <i>b</i>)<sup>n</sup> is counting from the near end of (<i>b</i> + <i>a</i>)<sup>n</sup>, so you use the familiar <i>r</i> = <i>p</i> − 1 and never touch <i>n</i> − <i>p</i> + 2 at all."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE pTH TERM FROM THE END, TAP A LINE",
          "steps": [
            {
              "eq": "p-th from end of (a + b)<sup>n</sup> = p-th from start of (b + a)<sup>n</sup>",
              "why": "Swapping the two parts reverses the whole list of terms, so counting backwards through one list is counting forwards through the other. This is the only idea in the derivation."
            },
            {
              "eq": "= <sup>n</sup>C<sub>p−1</sub> b<sup>n−p+1</sup> a<sup>p−1</sup>",
              "why": "Apply the ordinary general term to the reversed binomial with index r = p − 1. One subtraction, not two."
            },
            {
              "eq": "p-th from start = <sup>n</sup>C<sub>p−1</sub> a<sup>n−p+1</sup> b<sup>p−1</sup>",
              "why": "The partner term, for comparison. Notice the binomial coefficient is identical; only a and b have swapped roles."
            },
            {
              "eq": "ratio = (a / b)<sup>n−2p+2</sup>",
              "why": "Divide one by the other. The binomial coefficients cancel completely, so every ratio-of-ends question collapses to this single line and you never compute either term."
            },
            {
              "eq": "equal ⇔ n = 2p − 2",
              "why": "The ratio is 1 only when the exponent vanishes, assuming a is not equal to b. That says T-p is the middle term of an even-power expansion, the one term that is its own mirror image under reversal."
            }
          ]
        },
        {
          "t": "p",
          "html": "One more condition can be bolted onto the same engine. In an expansion of surds such as (√2 + <sup>5</sup>√3)<sup>10</sup>, the general term is <sup>10</sup>C<sub>r</sub> 2<sup>(10−r)/2</sup> 3<sup>r/5</sup>. The binomial coefficient is always a whole number, so the only thing that can make a term irrational is a leftover root. A term is rational exactly when <b>both</b> fractional exponents clear at the same time. That is two divisibility conditions on one unknown <i>r</i>, and the word doing the work is <b>simultaneously</b>: counting the <i>r</i> that clear the harder-looking exponent and forgetting the other one always over-counts."
        },
        {
          "t": "formula",
          "kicker": "RATIONAL TERMS IN A SURD EXPANSION",
          "tag": "p, q distinct primes",
          "main": "T<sub>r+1</sub> = <sup>N</sup>C<sub>r</sub> p<sup>(N−r)/α</sup> q<sup>r/β</sup>",
          "legend": [
            "rational ⇔ α divides (<i>N</i> − <i>r</i>) <b>and</b> β divides <i>r</i>, both at once",
            "rational means integral here, since both exponents become non-negative integers and <sup>N</sup>C<sub>r</sub> is an integer",
            "qualifying <i>r</i> form an AP with common difference lcm(α, β), starting at the smallest valid <i>r</i><sub>0</sub>; the count is ⌊(<i>N</i> − <i>r</i><sub>0</sub>)/lcm(α, β)⌋ + 1"
          ],
          "note": "If α divides <i>N</i>, the two conditions collapse to lcm(α, β) dividing <i>r</i> and the run starts at <i>r</i><sub>0</sub> = 0. That is the friendly case most textbook problems use, and it is not the general one: the conditions can also be flatly incompatible, in which case there is no rational term. Irrational count = (<i>N</i> + 1) − rational count."
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Find the 6th term in the expansion of (2<i>x</i> + 3/<i>x</i>)<sup>9</sup>.",
          "steps": [
            "“6th term” means T<sub>6</sub> = T<sub>5+1</sub>, so <i>r</i> = 5. Mind the off-by-one, it is never <i>r</i> = 6.",
            "T<sub>6</sub> = <sup>9</sup>C<sub>5</sub>(2<i>x</i>)<sup>4</sup>(3/<i>x</i>)<sup>5</sup> = 126 · 16<i>x</i><sup>4</sup> · 243/<i>x</i><sup>5</sup>.",
            "The whole of 2<i>x</i> was raised to the 4th (giving 16<i>x</i><sup>4</sup>, not 2<i>x</i><sup>4</sup>) and the whole of 3/<i>x</i> to the 5th. Net power of <i>x</i>: 4 − 5 = −1."
          ],
          "ans": "T₆ = 489888/x"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Find the term independent of <i>x</i> in (<i>x</i><sup>2</sup> − 1/<i>x</i>)<sup>9</sup>.",
          "steps": [
            "Do not compute the term yet, find <i>r</i> first. T<sub>r+1</sub> = <sup>9</sup>C<sub>r</sub>(<i>x</i><sup>2</sup>)<sup>9−r</sup>(−1/<i>x</i>)<sup>r</sup> = <sup>9</sup>C<sub>r</sub>(−1)<sup>r</sup><i>x</i><sup>18−3r</sup>.",
            "Independent of <i>x</i> means 18 − 3<i>r</i> = 0, so <i>r</i> = 6, a valid integer in [0, 9]. The term exists.",
            "Substitute: T<sub>7</sub> = <sup>9</sup>C<sub>6</sub>(−1)<sup>6</sup> = 84. Note the trap the question is built around: the −1/<i>x</i> contributes <i>x</i><sup>−r</sup>, so the exponent is 2(9 − <i>r</i>) <b>minus</b> <i>r</i>. Write 2(9 − <i>r</i>) + <i>r</i> and you get <i>r</i> = 18, out of range, and then either force a wrong term or wrongly declare there is none."
          ],
          "ans": "84"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Find all rational terms in the expansion of (√2 + <sup>5</sup>√3)<sup>10</sup>, and their sum.",
          "steps": [
            "T<sub>r+1</sub> = <sup>10</sup>C<sub>r</sub> 2<sup>(10−r)/2</sup> 3<sup>r/5</sup>, so the conditions are 2 divides (10 − <i>r</i>), meaning <i>r</i> is even, and 5 divides <i>r</i>.",
            "From 5 | <i>r</i> with 0 ≤ <i>r</i> ≤ 10: <i>r</i> ∈ {0, 5, 10}. Of these only 0 and 10 are even. <i>r</i> = 5 fails, because 10 − 5 = 5 is odd and leaves a stray √2.",
            "<i>r</i> = 0 gives <sup>10</sup>C<sub>0</sub>2<sup>5</sup> = 32; <i>r</i> = 10 gives <sup>10</sup>C<sub>10</sub>3<sup>2</sup> = 9. Both are integers, as a rational term in this setting always is."
          ],
          "ans": "Two rational terms, 32 and 9, summing to 41 (and 9 irrational terms)"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "If the coefficient of <i>x</i><sup>7</sup> in (<i>ax</i><sup>2</sup> + 1/(<i>bx</i>))<sup>11</sup> equals the coefficient of <i>x</i><sup>−7</sup> in (<i>ax</i> − 1/(<i>bx</i><sup>2</sup>))<sup>11</sup>, find the relation between <i>a</i> and <i>b</i>.",
          "steps": [
            "First expansion: T<sub>r+1</sub> = <sup>11</sup>C<sub>r</sub><i>a</i><sup>11−r</sup><i>b</i><sup>−r</sup><i>x</i><sup>22−3r</sup>. For <i>x</i><sup>7</sup>, 22 − 3<i>r</i> = 7 gives <i>r</i> = 5, coefficient <sup>11</sup>C<sub>5</sub><i>a</i><sup>6</sup><i>b</i><sup>−5</sup>.",
            "Second expansion: T<sub>k+1</sub> = <sup>11</sup>C<sub>k</sub><i>a</i><sup>11−k</sup>(−1)<sup>k</sup><i>b</i><sup>−k</sup><i>x</i><sup>11−3k</sup>. For <i>x</i><sup>−7</sup>, 11 − 3<i>k</i> = −7 gives <i>k</i> = 6, coefficient <sup>11</sup>C<sub>6</sub><i>a</i><sup>5</sup><i>b</i><sup>−6</sup> (the sign is positive, since 6 is even).",
            "Now the elegant step: <sup>11</sup>C<sub>5</sub> = <sup>11</sup>C<sub>6</sub> by symmetry, so the coefficients cancel and <i>a</i><sup>6</sup><i>b</i><sup>−5</sup> = <i>a</i><sup>5</sup><i>b</i><sup>−6</sup>. The problem looks intimidating and collapses the instant you spot that."
          ],
          "ans": "ab = 1"
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Find the middle term in the expansion of (<i>x</i>/3 + 3<i>y</i>)<sup>8</sup>.",
              "a": "n = 8 is even, so there is one middle term, T5, at r = 4: C(8,4)(x/3)⁴(3y)⁴ = 70 · x⁴/81 · 81y⁴ = 70x⁴y⁴."
            },
            {
              "q": "[JEE Main] Find the term independent of <i>x</i> in (2<i>x</i><sup>2</sup> + 1/<i>x</i>)<sup>12</sup>.",
              "a": "E(r) = 2(12 − r) − r = 24 − 3r = 0 gives r = 8, valid. T9 = C(12,8) · 2⁴ = 495 × 16 = 7920."
            },
            {
              "q": "[JEE Main] Find the coefficient of <i>x</i><sup>5</sup> in (<i>x</i> − 2/<i>x</i><sup>2</sup>)<sup>8</sup>.",
              "a": "E(r) = (8 − r) − 2r = 8 − 3r = 5 gives r = 1. Coefficient = C(8,1)(−2)¹ = −16."
            },
            {
              "q": "[JEE Advanced] If the term independent of <i>x</i> in (√<i>x</i> − <i>k</i>/<i>x</i><sup>2</sup>)<sup>10</sup> equals 405, find <i>k</i>.",
              "a": "E(r) = (10 − r)/2 − 2r = 5 − 5r/2 = 0 gives r = 2. The term is C(10,2)(−k)² = 45k² = 405, so k² = 9 and k = ±3."
            },
            {
              "q": "[JEE Main] Find the number of rational terms in the expansion of (√2 + <sup>4</sup>√3)<sup>100</sup>.",
              "a": "Conditions: 2 divides (100 − r), so r is even, and 4 divides r. The second already forces the first, so the qualifying r are 0, 4, 8, …, 100, that is 100/4 + 1 = 26 terms. The +1 is the whole difficulty."
            }
          ]
        },
        {
          "t": "mcq",
          "q": "The 7th term in the expansion of (<i>x</i> − 1/<i>x</i>)<sup>10</sup> is:",
          "correct": 0,
          "opts": [
            {
              "label": "210/<i>x</i><sup>2</sup>",
              "nudge": null
            },
            {
              "label": "−210/<i>x</i><sup>2</sup>",
              "nudge": "This assumes a minus base gives a minus term. The factor is (−1/<i>x</i>)<sup>6</sup>, an even power, so it is positive."
            },
            {
              "label": "210<i>x</i><sup>2</sup>",
              "nudge": "The exponent sign is reversed. The 1/<i>x</i> part pulls the power <b>down</b>, from <i>x</i><sup>4</sup> to <i>x</i><sup>−2</sup>."
            },
            {
              "label": "252",
              "nudge": "That is <sup>10</sup>C<sub>5</sub>, from taking <i>r</i> = 5 for the “7th” term. The 7th term needs <i>r</i> = 6."
            }
          ],
          "solution": "7th term means <i>r</i> = 6, so T<sub>7</sub> = <sup>10</sup>C<sub>6</sub><i>x</i><sup>4</sup>(−1/<i>x</i>)<sup>6</sup> = 210 <i>x</i><sup>4</sup> · <i>x</i><sup>−6</sup> = 210<i>x</i><sup>−2</sup>."
        },
        {
          "t": "mcq",
          "q": "How many middle terms does the expansion of (<i>x</i> + <i>y</i>)<sup>15</sup> have?",
          "correct": 1,
          "opts": [
            {
              "label": "1",
              "nudge": "This assumes every expansion has a single middle term. That is true only when <i>n</i> is even, so that <i>n</i> + 1 is odd."
            },
            {
              "label": "2",
              "nudge": null
            },
            {
              "label": "8",
              "nudge": "That is a <b>position</b>, T<sub>8</sub>, reported in answer to a question about the <b>count</b>."
            },
            {
              "label": "0",
              "nudge": "Confusing “no single middle” with “no middle term at all”. Two terms share the middle; neither is missing."
            }
          ],
          "solution": "<i>n</i> = 15 is odd, so there are <i>n</i> + 1 = 16 terms, an even-length list with no single centre. The two central terms are T<sub>8</sub> and T<sub>9</sub>."
        },
        {
          "t": "mcq",
          "q": "The term independent of <i>x</i> in the expansion of (<i>x</i><sup>2</sup> + 1/<i>x</i><sup>3</sup>)<sup>8</sup> is:",
          "correct": 3,
          "opts": [
            {
              "label": "<sup>8</sup>C<sub>3</sub>",
              "nudge": "This rounds <i>r</i> = 16/5 down to 3 to force an answer. A non-integer <i>r</i> is the expansion telling you the term is absent, not an invitation to round."
            },
            {
              "label": "<sup>8</sup>C<sub>4</sub>",
              "nudge": "The same forcing, rounding 16/5 up to 4 instead. Rounding in either direction invents a term that is not in the expansion."
            },
            {
              "label": "1",
              "nudge": "A guess that every expansion must contain a constant term. It need not, and this one does not."
            },
            {
              "label": "there is no such term",
              "nudge": null
            }
          ],
          "solution": "E(<i>r</i>) = 2(8 − <i>r</i>) − 3<i>r</i> = 16 − 5<i>r</i>. Setting it to 0 gives <i>r</i> = 16/5, not an integer, so no term of this expansion is independent of <i>x</i>. This is the single most important conceptual check in the topic."
        },
        {
          "t": "mcq",
          "q": "The 3rd term from the end in the expansion of (<i>x</i> + <i>y</i>)<sup>10</sup> is:",
          "correct": 1,
          "opts": [
            {
              "label": "120<i>x</i><sup>3</sup><i>y</i><sup>7</sup>",
              "nudge": "This computes <i>n</i> − <i>p</i> = 7 and reads it as the index, landing on T<sub>8</sub>. It is a genuine term of the expansion, which is exactly what makes it seductive."
            },
            {
              "label": "45<i>x</i><sup>2</sup><i>y</i><sup>8</sup>",
              "nudge": null
            },
            {
              "label": "45<i>x</i><sup>8</sup><i>y</i><sup>2</sup>",
              "nudge": "Right coefficient, wrong end. Counting from the far end means the high power sits on <i>y</i>, not on <i>x</i>."
            },
            {
              "label": "10<i>xy</i><sup>9</sup>",
              "nudge": "That is the 2nd term from the end, one place short. Two off-by-ones stacked: term number to index, and then the count itself."
            }
          ],
          "solution": "Reverse the binomial. The 3rd term from the end of (<i>x</i> + <i>y</i>)<sup>10</sup> is the 3rd from the start of (<i>y</i> + <i>x</i>)<sup>10</sup>, so <i>r</i> = 2 and the term is <sup>10</sup>C<sub>2</sub><i>y</i><sup>8</sup><i>x</i><sup>2</sup> = 45<i>x</i><sup>2</sup><i>y</i><sup>8</sup>. Cross-check by the other route: <i>n</i> − <i>p</i> + 2 = 9, and T<sub>9</sub> uses <i>r</i> = 8, giving <sup>10</sup>C<sub>8</sub><i>x</i><sup>2</sup><i>y</i><sup>8</sup>, the same thing."
        },
        {
          "t": "mistakes",
          "items": [
            "Off-by-one in term position. The (<i>r</i> + 1)th term uses <sup>n</sup>C<sub>r</sub>, so the <b><i>m</i>th term means <i>r</i> = <i>m</i> − 1</b>. “7th term” is <i>r</i> = 6, never 7.",
            "Forgetting the second middle term. Odd <i>n</i> gives <b>two</b>, and a question that says “the middle term” of an odd power is often testing exactly that.",
            "Dropping the minus from a 1/<i>x</i><sup>q</sup> factor. It contributes <b>−<i>qr</i></b> to the exponent, and may carry a sign of its own. Write E(<i>r</i>) = <i>p</i>(<i>n</i> − <i>r</i>) − <i>qr</i> out in full, every time.",
            "Forcing a term that does not exist. A non-integer <i>r</i>, or an <i>r</i> outside [0, <i>n</i>], means the term is <b>genuinely absent</b>. Do not round.",
            "Counting rational terms with only one filter. <b>Both</b> exponents must clear together, and the run of qualifying <i>r</i> starts at 0 only when α divides <i>N</i>. Counting the multiples of one root order alone always over-counts."
          ]
        },
        {
          "t": "protip",
          "html": "for anything of the form “independent of <i>x</i>”, “coefficient of <i>x</i><sup>k</sup>” or “which term”, never expand and never compute the term until you have <i>r</i>. form E(<i>r</i>), set the condition, solve, validate. in an objective paper that is the difference between a fifteen-second solve and a two-minute one, and it catches the “no such term” cases for free."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "T<sub>r+1</sub> = <sup>n</sup>C<sub>r</sub> a<sup>n−r</sup> b<sup>r</sup>",
              "note": "the mth term means r = m − 1"
            },
            {
              "f": "E(r) = p(n − r) − qr",
              "note": "set it to k, or to 0, then solve for r"
            },
            {
              "f": "r must be an integer in [0, n]",
              "note": "otherwise the term does not exist, and that is the answer"
            },
            {
              "f": "n even: one middle T<sub>n/2+1</sub> · n odd: two",
              "note": "n + 1 seats, and only an odd count has a centre"
            },
            {
              "f": "pth from end = <sup>n</sup>C<sub>p−1</sub> b<sup>n−p+1</sup> a<sup>p−1</sup>",
              "note": "reverse the binomial, ratio of the two ends is (a/b) to the n − 2p + 2"
            },
            {
              "f": "rational ⇔ α | (N − r) and β | r",
              "note": "both at once, then step by lcm(α, β) and remember the +1"
            }
          ],
          "aids": [
            "“set the power, solve for r, check it is whole and in range”",
            "“odd power, two middles; even power, one middle”",
            "“1/x to the q pulls the exponent down by qr”",
            "“reverse the binomial instead of counting backwards”"
          ]
        }
      ]
    },
    {
      "n": "03",
      "title": "Greatest Term and Greatest Coefficient",
      "chip": "03 BIGGEST",
      "kalam": "the coefficient peaks at the middle, the term peaks where the ratio crosses 1",
      "blocks": [
        {
          "t": "p",
          "html": "Two different “biggest” questions live here, and students confuse them constantly. The first is the <b>greatest binomial coefficient</b>: among <sup>n</sup>C<sub>0</sub>, <sup>n</sup>C<sub>1</sub>, …, <sup>n</sup>C<sub>n</sub>, which is largest? That depends only on <i>n</i> and on nothing else, no value of <i>x</i> enters. From Pascal’s triangle you can see the answer: the rows rise to a peak in the middle and fall symmetrically, so the largest is always the middle one, the same middle you found in Topic 02."
        },
        {
          "t": "p",
          "html": "The second is the <b>numerically greatest term</b>, and it is genuinely harder. In an actual expansion like (4 − 3<i>x</i>)<sup>8</sup> evaluated at <i>x</i> = 1, which whole term, coefficient times both powers, has the largest magnitude? That depends on <i>a</i>, <i>b</i> and <i>n</i> together, because a fat coefficient can be dragged down by a small power of <i>b</i>, and a modest one lifted by a large power. Read the question twice before you start; the two answers are usually different numbers."
        },
        {
          "t": "think",
          "html": "walk along T<sub>1</sub>, T<sub>2</sub>, T<sub>3</sub>, … and watch each term divided by the one before it. while that ratio is above 1 the terms are still growing; the moment it drops below 1 they start shrinking. the greatest term sits exactly at the turning point, so instead of computing all <i>n</i> + 1 terms you just find where the ratio crosses 1."
        },
        {
          "t": "def",
          "term": "Numerically against algebraically greatest",
          "html": "The <b>numerically</b> greatest term is the one of largest <b>magnitude</b>, signs ignored. The <b>algebraically</b> greatest is the largest as a signed number. In (<i>a</i> + <i>b</i>)<sup>n</sup> with everything positive the two coincide and nobody notices the distinction. In (<i>a</i> − <i>b</i>)<sup>n</sup> the terms alternate, so the numerically greatest term may well be negative, and then the algebraically greatest is one of its two positive neighbours. Read which one the question wants, and if it is the algebraic one, compare the neighbours explicitly."
        },
        {
          "t": "formula",
          "kicker": "GREATEST BINOMIAL COEFFICIENT",
          "tag": "independent of x, always the middle",
          "main": "n even: <sup>n</sup>C<sub>n/2</sub> · n odd: <sup>n</sup>C<sub>(n−1)/2</sub> = <sup>n</sup>C<sub>(n+1)/2</sub>",
          "legend": [
            "for even <i>n</i> the peak is a single value; for odd <i>n</i> two central coefficients tie, and both are greatest",
            "this is the greatest <sup>n</sup>C<sub>r</sub>, which is not the same object as the greatest <b>term</b> of a numerical expansion"
          ],
          "note": "Reporting only one of the tied pair when <i>n</i> is odd is a standard way to lose an otherwise correct answer."
        },
        {
          "t": "formula",
          "kicker": "NUMERICALLY GREATEST TERM",
          "tag": "the ratio test",
          "main": "|T<sub>r+1</sub> / T<sub>r</sub>| = [(n − r + 1)/r] · |b/a|",
          "legend": [
            "set the ratio ≥ 1 and solve for <i>r</i>, which gives <i>r</i> ≤ <i>k</i> for some number <i>k</i>",
            "terms grow while <i>r</i> ≤ <i>k</i> and shrink after, so the greatest term is T<sub>⌊k⌋+1</sub>",
            "if <i>k</i> is an exact integer the ratio equals 1 at that step, so T<sub>k</sub> = T<sub>k+1</sub> are <b>jointly</b> greatest"
          ],
          "note": "For (1 + <i>x</i>)<sup>n</sup> the whole inequality collapses into one division: <i>k</i> = (<i>n</i> + 1)|<i>x</i>| / (1 + |<i>x</i>|), then read off <i>r</i> = ⌊<i>k</i>⌋. Memorise that form for objective papers. And the |<i>b</i>/<i>a</i>| must carry the <b>full</b> second part: in (1 + 4<i>x</i>)<sup>n</sup> it is |4<i>x</i>|, never |<i>x</i>|."
        },
        {
          "t": "formula",
          "kicker": "GREATEST COEFFICIENT OF (1 + λx)ⁿ",
          "tag": "the peak moves",
          "main": "c<sub>r+1</sub>/c<sub>r</sub> = [(n − r)/(r + 1)] · λ ≥ 1",
          "legend": [
            "the coefficients are <i>c</i><sub>r</sub> = <sup>n</sup>C<sub>r</sub>λ<sup>r</sup>, so the same ratio idea applies to them",
            "a λ greater than 1 drags the peak to the right of the middle, and a λ less than 1 drags it left"
          ],
          "note": "This is why “the greatest coefficient” and “the middle coefficient” are the same thing only when λ = 1. In (1 + 2<i>x</i>)<sup>6</sup> the peak is at <i>r</i> = 4, not at the middle <i>r</i> = 3."
        },
        {
          "t": "diagram",
          "kind": "pascal",
          "kicker": "DIAGRAM · WHERE A ROW PEAKS",
          "chips": ["even n", "odd n", "rise and fall"],
          "captions": [
            "Row 6, an even index. The ringed 20 in the centre is C(6,3), the unique greatest coefficient of the row. An even n always has exactly one peak, because the row has an odd number of entries.",
            "Row 7, an odd index. The two ringed 35s are C(7,3) and C(7,4), equal by symmetry and jointly greatest. An odd n has no single centre, so it never has a single largest coefficient.",
            "The dashed 15s on either side of the ringed 20 are the neighbours. The ratio C(n,r) to C(n,r−1) is (n − r + 1)/r, which is above 1 while r is less than (n + 1)/2 and below it after, so the entries climb to the middle and fall away symmetrically."
          ],
          "frames": [
            { "pascal": { "rows": 8, "highlight": [[6, 3]] } },
            { "pascal": { "rows": 8, "highlight": [[7, 3], [7, 4]] } },
            { "pascal": { "rows": 8, "highlight": [[6, 3]], "parents": [[6, 2], [6, 4]] } }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY THE MIDDLE COEFFICIENT WINS, TAP A LINE",
          "steps": [
            {
              "eq": "<sup>n</sup>C<sub>r</sub> / <sup>n</sup>C<sub>r−1</sub> = (n − r + 1) / r",
              "why": "Write both as factorials and cancel. Everything except one factor upstairs and one downstairs disappears, which is why this ratio is the cheapest tool in the topic."
            },
            {
              "eq": "ratio > 1 ⇔ n − r + 1 > r",
              "why": "A fraction exceeds 1 exactly when its numerator exceeds its denominator, and r is positive so multiplying across is safe."
            },
            {
              "eq": "⇔ r < (n + 1)/2",
              "why": "Rearrange. This is the turning point: to the left of it each coefficient is bigger than the one before, to the right each is smaller."
            },
            {
              "eq": "n even ⇒ single peak at r = n/2",
              "why": "The condition r < (n + 1)/2 is satisfied up to r = n/2 and fails after, and no integer sits exactly on the boundary, so one entry is strictly the largest."
            },
            {
              "eq": "n odd ⇒ tie at r = (n − 1)/2 and (n + 1)/2",
              "why": "Now (n + 1)/2 is itself an integer, the ratio equals exactly 1 at that step, and the two central coefficients are equal. Symmetry says the same thing: they are C(n,r) and C(n,n−r) for the same r."
            }
          ]
        },
        {
          "t": "proc",
          "title": "Finding the numerically greatest term",
          "steps": [
            "<b>Write the magnitude ratio</b> |T<sub>r+1</sub>/T<sub>r</sub>| = [(<i>n</i> − <i>r</i> + 1)/<i>r</i>] · |<i>b</i>/<i>a</i>|, with <i>b</i> the <b>entire</b> second part, coefficient and value of <i>x</i> included.",
            "<b>Solve the inequality</b> ratio ≥ 1 for <i>r</i>. You will get <i>r</i> ≤ <i>k</i>.",
            "<b>Read off the answer.</b> The terms increase up to <i>r</i> = ⌊<i>k</i>⌋ and decrease after, so the greatest is T<sub>⌊k⌋+1</sub>. If <i>k</i> is an exact integer, T<sub>k</sub> and T<sub>k+1</sub> are equal and jointly greatest, and you must report both.",
            "<b>For (<i>a</i> − <i>b</i>)<sup>n</sup>, decide the sign</b> of that term. If it is negative and the question asks for the <i>algebraically</i> greatest, compare its two positive neighbours explicitly and take the larger."
          ]
        },
        {
          "t": "p",
          "html": "The middle coefficient of an even power has a name and a closed form of its own, <b><sup>2n</sup>C<sub>n</sub></b>, the central binomial coefficient. It is NCERT material twice over: it is the middle term of (1 + <i>x</i>)<sup>2n</sup>, and it is the constant term of (<i>x</i> + 1/<i>x</i>)<sup>2n</sup>. Splitting (2<i>n</i>)! into its <i>n</i> odd factors and its <i>n</i> even factors, and pulling a 2 out of each even one, gives the odd-product form below in two lines."
        },
        {
          "t": "formula",
          "kicker": "THE CENTRAL BINOMIAL COEFFICIENT",
          "tag": "three faces of one number",
          "main": "<sup>2n</sup>C<sub>n</sub> = 2ⁿ [1·3·5⋯(2n − 1)] / n!",
          "legend": [
            "Pascal form: <sup>2n</sup>C<sub>n</sub> = 2 · <sup>2n−1</sup>C<sub>n−1</sub>, because <sup>2n−1</sup>C<sub>n−1</sub> = <sup>2n−1</sup>C<sub>n</sub> and Pascal’s rule adds two equal things",
            "sum-of-squares form: <sup>2n</sup>C<sub>n</sub> = <sup>n</sup>C<sub>0</sub><sup>2</sup> + <sup>n</sup>C<sub>1</sub><sup>2</sup> + ⋯ + <sup>n</sup>C<sub>n</sub><sup>2</sup>, proved in Topic 04",
            "successive ratio: <sup>2n</sup>C<sub>n</sub> / <sup>2n−2</sup>C<sub>n−1</sub> = 2(2<i>n</i> − 1)/<i>n</i> = 4 − 2/<i>n</i>, a little <b>less</b> than 4 every time"
          ],
          "note": "Size bounds worth carrying: 4<sup>n</sup>/(2<i>n</i> + 1) ≤ <sup>2n</sup>C<sub>n</sub> < 4<sup>n</sup> for <i>n</i> ≥ 1. Both come in one line from Σ<sup>2n</sup>C<sub>k</sub> = 4<sup>n</sup>: that sum has 2<i>n</i> + 1 positive terms of which <sup>2n</sup>C<sub>n</sub> is the largest. Sharper asymptotics are outside both syllabuses; do not quote them in a paper."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "DIAGRAM · TERM MAGNITUDES, PLOTTED AGAINST r",
          "mathChips": true,
          "chips": ["(1 + 4x)⁸", "(4 − 3x)⁸", "(1 + 2x)⁶"],
          "captions": [
            "Magnitudes of the nine terms of (1 + 4x) to the 8th at x = 1/2, so the second part is 4x = 2. They climb, tie, and fall. The ratio hits exactly 1 at r = 6, which is the integer-crossing case, so T6 and T7 are both 1792 and both greatest. Reporting only one of them is a lost mark.",
            "Magnitudes for (4 − 3x) to the 8th at x = 1, drawn in hundreds of thousands. The single peak is at r = 3, so the numerically greatest term is T4 with magnitude 1548288. But T4 carries an odd power of −3x and is therefore negative: the algebraically greatest term is its taller positive neighbour T5, at 1451520.",
            "Coefficients of (1 + 2x) to the 6th, that is C(6,r) times 2 to the r. The peak sits at r = 4, not at the middle r = 3, because the factor 2 to the r drags it rightwards. This is exactly why the greatest coefficient and the middle coefficient are different questions."
          ],
          "frames": [
            {
              "x": [-0.6, 8.6],
              "y": [0, 2150],
              "points": [
                { "x": 0, "y": 1, "soft": true },
                { "x": 1, "y": 16, "soft": true },
                { "x": 2, "y": 112, "soft": true },
                { "x": 3, "y": 448, "soft": true },
                { "x": 4, "y": 1120, "soft": true },
                { "x": 5, "y": 1792, "label": "T₆" },
                { "x": 6, "y": 1792, "label": "T₇" },
                { "x": 7, "y": 1024, "soft": true },
                { "x": 8, "y": 256, "soft": true }
              ]
            },
            {
              "x": [-0.6, 8.6],
              "y": [0, 18.5],
              "points": [
                { "x": 0, "y": 0.66, "soft": true },
                { "x": 1, "y": 3.93, "soft": true },
                { "x": 2, "y": 10.32, "soft": true },
                { "x": 3, "y": 15.48, "label": "T₄" },
                { "x": 4, "y": 14.52, "label": "T₅" },
                { "x": 5, "y": 8.71, "soft": true },
                { "x": 6, "y": 3.27, "soft": true },
                { "x": 7, "y": 0.7, "soft": true },
                { "x": 8, "y": 0.07, "soft": true }
              ]
            },
            {
              "x": [-0.6, 6.6],
              "y": [0, 285],
              "points": [
                { "x": 0, "y": 1, "soft": true },
                { "x": 1, "y": 12, "soft": true },
                { "x": 2, "y": 60, "soft": true },
                { "x": 3, "y": 160, "label": "middle" },
                { "x": 4, "y": 240, "label": "peak" },
                { "x": 5, "y": 192, "soft": true },
                { "x": 6, "y": 64, "soft": true }
              ]
            }
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Find the greatest binomial coefficient in the expansion of (1 + <i>x</i>)<sup>12</sup>.",
          "steps": [
            "<i>n</i> = 12 is even, so the peak is a single central value, <sup>12</sup>C<sub>12/2</sub> = <sup>12</sup>C<sub>6</sub>.",
            "<sup>12</sup>C<sub>6</sub> = 924. No value of <i>x</i> appears anywhere in the question, which is the signature of a “greatest coefficient” problem."
          ],
          "ans": "924"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Find the numerically greatest term in (1 + 4<i>x</i>)<sup>8</sup> when <i>x</i> = 1/2.",
          "steps": [
            "The second part is 4<i>x</i> = 2, not <i>x</i> = 1/2. Using |<i>x</i>| here is the trap the question is built on.",
            "Ratio: |T<sub>r+1</sub>/T<sub>r</sub>| = [(8 − <i>r</i> + 1)/<i>r</i>] · 2 = 2(9 − <i>r</i>)/<i>r</i> ≥ 1 gives 18 − 2<i>r</i> ≥ <i>r</i>, so <i>r</i> ≤ 6.",
            "At <i>r</i> = 6 the ratio is exactly 2(9 − 6)/6 = 1, the integer-crossing case. So two terms tie: T<sub>6</sub> = <sup>8</sup>C<sub>5</sub>2<sup>5</sup> = 56 × 32 and T<sub>7</sub> = <sup>8</sup>C<sub>6</sub>2<sup>6</sup> = 28 × 64."
          ],
          "ans": "T₆ = T₇ = 1792, jointly greatest"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Find the greatest coefficient in the expansion of (1 + 2<i>x</i>)<sup>6</sup>.",
          "steps": [
            "The coefficients are <i>c</i><sub>r</sub> = <sup>6</sup>C<sub>r</sub>2<sup>r</sup>, so apply the ratio to them: <i>c</i><sub>r+1</sub>/<i>c</i><sub>r</sub> = [(6 − <i>r</i>)/(<i>r</i> + 1)] · 2 ≥ 1.",
            "That gives 2(6 − <i>r</i>) ≥ <i>r</i> + 1, so 11 ≥ 3<i>r</i> and <i>r</i> ≤ 3.67. The coefficients therefore rise up to <i>r</i> = 4.",
            "Check both sides of the peak: <i>c</i><sub>4</sub>/<i>c</i><sub>3</sub> = (3/4)·2 = 1.5 > 1 and <i>c</i><sub>5</sub>/<i>c</i><sub>4</sub> = (2/5)·2 = 0.8 < 1. So <i>c</i><sub>4</sub> = <sup>6</sup>C<sub>4</sub>2<sup>4</sup> = 15 × 16.",
            "This is the coefficient of <i>x</i><sup>4</sup>, not the middle term, because the factor 2<sup>r</sup> shifts the peak rightward."
          ],
          "ans": "240"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "Find the numerically greatest term in (4 − 3<i>x</i>)<sup>8</sup> at <i>x</i> = 1, and state the algebraically greatest term.",
          "steps": [
            "Magnitudes: |T<sub>r+1</sub>| = <sup>8</sup>C<sub>r</sub>4<sup>8−r</sup>3<sup>r</sup>, since |3<i>x</i>| = 3 at <i>x</i> = 1.",
            "Ratio: [(9 − <i>r</i>)/<i>r</i>] · (3/4) ≥ 1 gives 3(9 − <i>r</i>) ≥ 4<i>r</i>, so 27 ≥ 7<i>r</i> and <i>r</i> ≤ 27/7 ≈ 3.86. The magnitudes therefore rise to <i>r</i> = 3.",
            "|T<sub>4</sub>| = <sup>8</sup>C<sub>3</sub>4<sup>5</sup>3<sup>3</sup> = 56 × 1024 × 27 = 1548288. But T<sub>4</sub> carries (−3<i>x</i>)<sup>3</sup>, an odd power, so T<sub>4</sub> is negative.",
            "For the algebraically greatest, compare the positive neighbours: T<sub>3</sub> = <sup>8</sup>C<sub>2</sub>4<sup>6</sup>3<sup>2</sup> = 1032192 and T<sub>5</sub> = <sup>8</sup>C<sub>4</sub>4<sup>4</sup>3<sup>4</sup> = 1451520."
          ],
          "ans": "Numerically greatest T₄ = −1548288 · algebraically greatest T₅ = +1451520"
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Find the greatest binomial coefficient in (1 + <i>x</i>)<sup>15</sup>.",
              "a": "n = 15 is odd, so two central coefficients tie: C(15,7) = C(15,8) = 6435. Both are greatest, and both must be quoted."
            },
            {
              "q": "[JEE Main] Find the numerically greatest term in (1 + <i>x</i>)<sup>10</sup> when <i>x</i> = 2/3.",
              "a": "k = (n + 1)|x|/(1 + |x|) = 11(2/3)/(5/3) = 22/5 = 4.4, not an integer, so r = 4 and the greatest is T5 = C(10,4)(2/3)⁴ = 210 × 16/81 = 1120/27."
            },
            {
              "q": "[JEE Main] Find the greatest coefficient in (2 + 3<i>x</i>)<sup>5</sup>.",
              "a": "c_r = C(5,r)2^(5−r)3^r gives 32, 240, 720, 1080, 810, 243. The peak is 1080, the coefficient of x³."
            },
            {
              "q": "[JEE Advanced] In (3 + 2<i>x</i>)<sup>9</sup> with <i>x</i> = 1, find the numerically greatest term.",
              "a": "The magnitude ratio [(10 − r)/r](2/3) ≥ 1 gives r ≤ 4, with equality at r = 4, so two terms tie: T4 = C(9,3)3⁶2³ and T5 = C(9,4)3⁵2⁴, both 489888."
            },
            {
              "q": "[JEE Main] Find the term independent of <i>x</i> in (<i>x</i> + 1/<i>x</i>)<sup>14</sup>.",
              "a": "E(r) = (14 − r) − r = 14 − 2r = 0 gives r = 7, so the term is C(14,7) = 3432. It is the central binomial coefficient with n = 7, which is how NCERT introduces that object."
            }
          ]
        },
        {
          "t": "mcq",
          "q": "The greatest binomial coefficient in the expansion of (1 + <i>x</i>)<sup>11</sup> is:",
          "correct": 2,
          "opts": [
            {
              "label": "<sup>11</sup>C<sub>5</sub> only",
              "nudge": "Half the answer. With <i>n</i> odd there is no single centre, and the two central coefficients are equal."
            },
            {
              "label": "<sup>11</sup>C<sub>6</sub> only",
              "nudge": "The other half of the same mistake. <sup>11</sup>C<sub>6</sub> is greatest, but so is its twin, and the question asks which coefficient is largest."
            },
            {
              "label": "<sup>11</sup>C<sub>5</sub> = <sup>11</sup>C<sub>6</sub>",
              "nudge": null
            },
            {
              "label": "<sup>11</sup>C<sub>0</sub>",
              "nudge": "That is 1, an edge coefficient and the <b>smallest</b> in the row. The row rises to the middle, it does not start there."
            }
          ],
          "solution": "<i>n</i> = 11 is odd, so the peak is a tie between <sup>11</sup>C<sub>(11−1)/2</sub> and <sup>11</sup>C<sub>(11+1)/2</sub>, that is <sup>11</sup>C<sub>5</sub> = <sup>11</sup>C<sub>6</sub> = 462."
        },
        {
          "t": "mcq",
          "q": "The greatest binomial coefficient of an expansion is always:",
          "correct": 1,
          "opts": [
            {
              "label": "<sup>n</sup>C<sub>1</sub>",
              "nudge": "That is near the edge of the row, where the coefficients are at their smallest, not their largest."
            },
            {
              "label": "the middle one, or the two middle ones",
              "nudge": null
            },
            {
              "label": "<sup>n</sup>C<sub>n</sub>",
              "nudge": "That is 1, the last entry of the row. Edges are minima, not maxima."
            },
            {
              "label": "it depends on <i>x</i>",
              "nudge": "This confuses the greatest <b>coefficient</b>, which involves no <i>x</i> at all, with the greatest <b>term</b>, which does."
            }
          ],
          "solution": "The ratio <sup>n</sup>C<sub>r</sub>/<sup>n</sup>C<sub>r−1</sub> = (<i>n</i> − <i>r</i> + 1)/<i>r</i> exceeds 1 exactly while <i>r</i> < (<i>n</i> + 1)/2, so the coefficients rise to the middle and fall symmetrically. One peak when <i>n</i> is even, two tied when <i>n</i> is odd."
        },
        {
          "t": "mcq",
          "q": "In a numerically-greatest-term problem the ratio crossing point <i>k</i> comes out an exact integer. It follows that:",
          "correct": 2,
          "opts": [
            {
              "label": "there is no greatest term",
              "nudge": "A finite list of numbers always has a largest member. An integer <i>k</i> makes the answer richer, not absent."
            },
            {
              "label": "T<sub>k</sub> alone is greatest",
              "nudge": "This misses the tie. An integer <i>k</i> is precisely the case where the ratio equals 1 rather than crossing it, so nothing separates the two neighbours."
            },
            {
              "label": "T<sub>k</sub> = T<sub>k+1</sub> are jointly greatest",
              "nudge": null
            },
            {
              "label": "T<sub>k−1</sub> is greatest",
              "nudge": "Off by one on top of missing the tie: the terms are still growing at that step, so the peak is not behind you."
            }
          ],
          "solution": "The ratio |T<sub>r+1</sub>/T<sub>r</sub>| equals exactly 1 at <i>r</i> = <i>k</i>, so T<sub>k</sub> and T<sub>k+1</sub> have the same magnitude and both are greatest. Report both."
        },
        {
          "t": "mcq",
          "q": "The value of <sup>10</sup>C<sub>5</sub> ÷ <sup>8</sup>C<sub>4</sub> is:",
          "correct": 1,
          "opts": [
            {
              "label": "4",
              "nudge": "This reads the slogan “central coefficients grow like 4<sup>n</sup>” as an exact identity. It is close, 252/70 = 3.6, which is exactly why the error survives a rough check."
            },
            {
              "label": "18/5",
              "nudge": null
            },
            {
              "label": "2",
              "nudge": "The Pascal relation <sup>2n</sup>C<sub>n</sub> = 2 · <sup>2n−1</sup>C<sub>n−1</sub> compares row 2<i>n</i> with row 2<i>n</i> − 1. Here the rows differ by two, not one."
            },
            {
              "label": "9/2",
              "nudge": "Larger than 4, which is impossible: the ratio 4 − 2/<i>n</i> is strictly below 4 for every <i>n</i>."
            }
          ],
          "solution": "<sup>2n</sup>C<sub>n</sub> ÷ <sup>2n−2</sup>C<sub>n−1</sub> = 2(2<i>n</i> − 1)/<i>n</i> = 4 − 2/<i>n</i>. At <i>n</i> = 5 that is 4 − 2/5 = 18/5 = 3.6, and indeed 252 = 3.6 × 70. The gap below 4 is exactly what makes <sup>2n</sup>C<sub>n</sub> strictly smaller than 4<sup>n</sup>."
        },
        {
          "t": "mistakes",
          "items": [
            "Answering the wrong “greatest”. The greatest <b>binomial coefficient</b> is the middle one and involves no <i>x</i>; the greatest <b>term</b> depends on <i>a</i>, <i>b</i> and <i>x</i> through the ratio test.",
            "Dropping the coefficient inside the bracket. In (1 + 4<i>x</i>)<sup>n</sup> the ratio uses <b>|4<i>x</i>|</b>, not |<i>x</i>|. The full second part enters.",
            "Missing the integer-<i>k</i> tie. If the crossing point is an exact integer, <b>two</b> terms are jointly greatest, and quoting one is an incomplete answer.",
            "Confusing numerical with algebraic for (<i>a</i> − <i>b</i>)<sup>n</sup>. The numerically greatest term can be <b>negative</b>; the algebraically greatest is then a neighbouring positive term, and you must compare the neighbours.",
            "Quoting only one of the tied pair when <i>n</i> is odd. <sup>n</sup>C<sub>(n−1)/2</sub> and <sup>n</sup>C<sub>(n+1)/2</sub> are <b>both</b> greatest."
          ]
        },
        {
          "t": "protip",
          "html": "for (1 + <i>x</i>)<sup>n</sup>, memorise <i>k</i> = (<i>n</i> + 1)|<i>x</i>| / (1 + |<i>x</i>|) and read off <i>r</i> = ⌊<i>k</i>⌋. one division replaces the whole inequality. and if <i>k</i> lands on a whole number, stop and write down two terms, not one."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "greatest coefficient = middle",
              "note": "n even: unique. n odd: two equal."
            },
            {
              "f": "|T<sub>r+1</sub>/T<sub>r</sub>| = [(n − r + 1)/r]|b/a| ≥ 1",
              "note": "solve for r, greatest is T with index ⌊k⌋ + 1"
            },
            {
              "f": "k = (n + 1)|x| / (1 + |x|)",
              "note": "the (1 + x)ⁿ shortcut; integer k means a tie"
            },
            {
              "f": "greatest coefficient of (1 + λx)ⁿ: [(n − r)/(r + 1)]λ ≥ 1",
              "note": "λ ≠ 1 moves the peak off the middle"
            },
            {
              "f": "<sup>2n</sup>C<sub>n</sub> = 2·<sup>2n−1</sup>C<sub>n−1</sub> · ratio 4 − 2/n",
              "note": "central coefficient, always just under four times the last"
            },
            {
              "f": "4ⁿ/(2n + 1) ≤ <sup>2n</sup>C<sub>n</sub> < 4ⁿ",
              "note": "one line from the row summing to 4ⁿ"
            }
          ],
          "aids": [
            "“coefficient peak = middle; term peak = where the ratio crosses 1”",
            "“the b in b/a is the whole second part”",
            "“integer crossing means two winners”",
            "“numerically greatest can still be negative”"
          ]
        }
      ]
    },
    {
      "n": "04",
      "title": "Coefficient Identities and Series Sums",
      "chip": "04 SUM THE Cs",
      "kalam": "read the weights, then pick the tool",
      "blocks": [
        {
          "t": "p",
          "html": "Write C<sub>r</sub> for <sup>n</sup>C<sub>r</sub> throughout this topic. The identity (1 + <i>x</i>)<sup>n</sup> = C<sub>0</sub> + C<sub>1</sub><i>x</i> + C<sub>2</sub><i>x</i><sup>2</sup> + ⋯ + C<sub>n</sub><i>x</i><sup>n</sup> is not just a formula, it is <b>a machine with a dial</b>, and the dial is <i>x</i>. Turn the dial to different values, or operate on the whole identity, and out drop exact closed forms for sums that look impossible to add directly."
        },
        {
          "t": "p",
          "html": "Want C<sub>0</sub> + C<sub>1</sub> + ⋯ + C<sub>n</sub>? Turn the dial to <i>x</i> = 1 and the left side becomes 2<sup>n</sup>. Want the alternating sum? Turn it to <i>x</i> = −1 and the left side becomes 0. The dial is not restricted to ±1 either: <i>x</i> = 3 reads Σ 3<sup>r</sup>C<sub>r</sub> = 4<sup>n</sup>, and <i>x</i> = 2 reads Σ 2<sup>r</sup>C<sub>r</sub> = 3<sup>n</sup>. A polynomial identity holds at every value, so every substitution is a free true statement."
        },
        {
          "t": "p",
          "html": "Weights that are not just powers need a different operation. Want C<sub>1</sub> + 2C<sub>2</sub> + 3C<sub>3</sub> + ⋯, each coefficient multiplied by its index? Multiplying <i>x</i><sup>r</sup> by <i>r</i> is exactly what <b>differentiation</b> does. Want C<sub>0</sub> + C<sub>1</sub>/2 + C<sub>2</sub>/3 + ⋯, each weighted by 1/(<i>r</i> + 1)? That is what <b>integration</b> does. Want ΣC<sub>r</sub><sup>2</sup>, a product of coefficients? Multiply two expansions together and read off a single coefficient on each side."
        },
        {
          "t": "think",
          "html": "you never “sum the series” by brute force. you look at the weight sitting on each coefficient, work out which operation manufactures that weight, apply it to the master identity, and substitute. matching the weight pattern to the operation is about ninety per cent of every problem in this topic."
        },
        {
          "t": "defgrid",
          "title": "Read the weight, pick the tool",
          "rows": [
            {
              "k": "Constant, or <i>y</i><sup>r</sup>",
              "v": "substitute <i>x</i> = 1, −1, or <i>y</i>"
            },
            {
              "k": "Weight <i>r</i>, or <i>r</i><sup>2</sup>",
              "v": "differentiate once, or twice"
            },
            {
              "k": "Weight 1/(<i>r</i> + 1)",
              "v": "integrate, from 0 to 1"
            },
            {
              "k": "Squares or products",
              "v": "multiply two expansions, compare one coefficient"
            },
            {
              "k": "Any polynomial in <i>r</i>",
              "v": "absorb: <i>r</i> C<sub>r</sub> = <i>n</i> <sup>n−1</sup>C<sub>r−1</sub>"
            },
            {
              "k": "Every <i>k</i>th coefficient",
              "v": "multisection: the <i>k</i>th roots of unity"
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "SUBSTITUTION IDENTITIES",
          "tag": "turn the dial",
          "main": "Σ C<sub>r</sub> = 2ⁿ · Σ (−1)<sup>r</sup> C<sub>r</sub> = 0",
          "legend": [
            "adding those two and halving isolates the even places: C<sub>0</sub> + C<sub>2</sub> + C<sub>4</sub> + ⋯ = 2<sup>n−1</sup>",
            "subtracting instead gives the odd places: C<sub>1</sub> + C<sub>3</sub> + C<sub>5</sub> + ⋯ = 2<sup>n−1</sup>, the same number",
            "general dial: Σ <i>y</i><sup>r</sup>C<sub>r</sub> = (1 + <i>y</i>)<sup>n</sup>, so <i>y</i> = 3 gives 4<sup>n</sup> and <i>y</i> = 2 gives 3<sup>n</sup>"
          ],
          "note": "The alternating sum needs <i>n</i> ≥ 1, because (1 − 1)<sup>0</sup> is 1, not 0. That edge case matters more often than it looks."
        },
        {
          "t": "formula",
          "kicker": "WEIGHTED SUMS",
          "tag": "differentiate, or integrate",
          "main": "Σ r C<sub>r</sub> = n 2<sup>n−1</sup>",
          "legend": [
            "Σ <i>r</i><sup>2</sup>C<sub>r</sub> = <i>n</i>(<i>n</i> + 1)2<sup>n−2</sup>, from differentiating twice with a multiplication by <i>x</i> in between",
            "Σ C<sub>r</sub>/(<i>r</i> + 1) = (2<sup>n+1</sup> − 1)/(<i>n</i> + 1), from integrating over [0, 1]",
            "Σ (−1)<sup>r</sup>C<sub>r</sub>/(<i>r</i> + 1) = 1/(<i>n</i> + 1), the same integral taken over [−1, 0]"
          ],
          "note": "After differentiating, the exponent drops: <i>n</i>(1 + <i>x</i>)<sup>n−1</sup> at <i>x</i> = 1 is <i>n</i>2<sup>n−1</sup>, not <i>n</i>2<sup>n</sup>. And the sum now starts at <i>r</i> = 1, because the constant term vanished. Re-read which sum you actually produced before substituting."
        },
        {
          "t": "formula",
          "kicker": "PRODUCTS OF COEFFICIENTS",
          "tag": "multiply, then compare",
          "main": "Σ C<sub>r</sub><sup>2</sup> = <sup>2n</sup>C<sub>n</sub>",
          "legend": [
            "Σ C<sub>r</sub>C<sub>r+k</sub> = <sup>2n</sup>C<sub>n−k</sub>, the same move with the second factor shifted",
            "Vandermonde: Σ <sup>m</sup>C<sub>k</sub> <sup>n</sup>C<sub>p−k</sub> = <sup>m+n</sup>C<sub>p</sub>, the parent of both",
            "read <sup>n</sup>C<sub>j</sub> = 0 for <i>j</i> < 0 or <i>j</i> > <i>n</i>, and the out-of-range terms take care of themselves"
          ],
          "note": "Vandermonde applies only when <b>the two lower indices add to a constant</b>. In Σ<sup>m</sup>C<sub>r</sub><sup>n</sup>C<sub>r</sub> they add to 2<i>r</i>, which is not constant, so you must first flip one factor by symmetry. Skipping that check is the classic way to misuse the identity."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY THE SUM OF SQUARES IS CENTRAL, TAP A LINE",
          "steps": [
            {
              "eq": "(1 + x)<sup>n</sup> (1 + x)<sup>n</sup> = (1 + x)<sup>2n</sup>",
              "why": "The only input. An identity so obvious it looks useless, until you read one coefficient off each side."
            },
            {
              "eq": "coefficient of x<sup>n</sup> on the right = <sup>2n</sup>C<sub>n</sub>",
              "why": "Straight from the binomial theorem applied to the single bracket on the right."
            },
            {
              "eq": "on the left: Σ C<sub>r</sub> C<sub>n−r</sub>",
              "why": "An x to the n arises as x to the r from the first bracket times x to the n minus r from the second, and you sum over every way of splitting."
            },
            {
              "eq": "C<sub>n−r</sub> = C<sub>r</sub>, so the left side is Σ C<sub>r</sub><sup>2</sup>",
              "why": "Symmetry, from Topic 01. This is the step that turns a product of two different coefficients into a square."
            },
            {
              "eq": "Σ C<sub>r</sub><sup>2</sup> = <sup>2n</sup>C<sub>n</sub>",
              "why": "Equate the two readings of the same coefficient. Check it at n = 4: 1 + 16 + 36 + 16 + 1 = 70, and C(8,4) = 70. Note it is not the square of the sum, which would be 4 to the n."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "pascal",
          "kicker": "DIAGRAM · SLICING ONE ROW",
          "chips": ["the whole row", "even places", "odd places", "every third"],
          "captions": [
            "All of row 6: 1 + 6 + 15 + 20 + 15 + 6 + 1 = 64 = 2 to the 6th. Putting x = 1 in the expansion says every row totals 2 to the n, and every identity in this topic is a way of slicing that total.",
            "The even places C0, C2, C4, C6: 1 + 15 + 15 + 1 = 32 = 2 to the 5th. You get this by adding the x = 1 and x = −1 readings and halving, which is a filter of period 2.",
            "The odd places C1, C3, C5: 6 + 20 + 6 = 32, the same number. Subtracting instead of adding keeps the other half, and the two halves of any row are always equal.",
            "Every third coefficient, C0 + C3 + C6 = 1 + 20 + 1 = 22. No combination of x = 1 and x = −1 can produce a period-3 pattern; that needs the cube roots of unity, and the closed form gives (64 + 2cos 2 pi)/3 = 22."
          ],
          "frames": [
            { "pascal": { "rows": 7, "highlight": [[6, 0], [6, 1], [6, 2], [6, 3], [6, 4], [6, 5], [6, 6]] } },
            { "pascal": { "rows": 7, "highlight": [[6, 0], [6, 2], [6, 4], [6, 6]] } },
            { "pascal": { "rows": 7, "highlight": [[6, 1], [6, 3], [6, 5]] } },
            { "pascal": { "rows": 7, "highlight": [[6, 0], [6, 3], [6, 6]] } }
          ]
        },
        {
          "t": "p",
          "html": "Two stored results, Σ<i>r</i>C<sub>r</sub> and Σ<i>r</i><sup>2</sup>C<sub>r</sub>, are not a method, and JEE routinely sets a weight nobody stored, 3<i>r</i> + 2, or <i>r</i>(<i>r</i> − 1), or <i>r</i><sup>3</sup>. The <b>absorption identity</b> generates all of them with no calculus at all: a factor of <i>r</i> in front can be swallowed by the coefficient, at the price of dropping both indices by one and pulling out an <i>n</i>. Apply it twice and the weight it swallows is <i>r</i>(<i>r</i> − 1), not <i>r</i><sup>2</sup>, which is exactly the trap a second differentiation sets."
        },
        {
          "t": "formula",
          "kicker": "THE ABSORPTION IDENTITY",
          "tag": "no calculus needed",
          "main": "r <sup>n</sup>C<sub>r</sub> = n <sup>n−1</sup>C<sub>r−1</sub>",
          "legend": [
            "twice: <i>r</i>(<i>r</i> − 1)<sup>n</sup>C<sub>r</sub> = <i>n</i>(<i>n</i> − 1)<sup>n−2</sup>C<sub>r−2</sub>, and so on down the falling factorials",
            "rewrite any weight in falling factorials first: <i>r</i><sup>2</sup> = <i>r</i>(<i>r</i> − 1) + <i>r</i>, and <i>r</i><sup>3</sup> = <i>r</i>(<i>r</i> − 1)(<i>r</i> − 2) + 3<i>r</i>(<i>r</i> − 1) + <i>r</i>",
            "then substitute: <i>x</i> = 1 leaves a complete row 2<sup>n−k</sup>, <i>x</i> = −1 leaves 0, a general <i>x</i> leaves (1 + <i>x</i>)<sup>n−k</sup>"
          ],
          "note": "For a purely linear weight there is a faster route still. Write S = Σ(<i>a</i> + <i>rd</i>)C<sub>r</sub> a second time with <i>r</i> replaced by <i>n</i> − <i>r</i>, legitimate because C<sub>n−r</sub> = C<sub>r</sub>, and add: the two weights pair up to the constant 2<i>a</i> + <i>nd</i>, so S = (2<i>a</i> + <i>nd</i>)2<sup>n−1</sup>."
        },
        {
          "t": "p",
          "html": "And one filter the four tools cannot reach. Setting <i>x</i> = 1 adds every coefficient; combining <i>x</i> = 1 and <i>x</i> = −1 splits the row into two halves. Both are patterns of <b>period 2</b>. So how do you get C<sub>0</sub> + C<sub>3</sub> + C<sub>6</sub> + ⋯? Picture a signal cycling green, amber, red once per second: to total only the green seconds you need a device whose own rhythm repeats every three. Real numbers give you rhythms of period 1 and period 2 and nothing else. The complex cube root of unity ω is the device with rhythm 3, because its powers march 1, ω, ω<sup>2</sup>, 1, ω, ω<sup>2</sup> and the three of them sum to zero."
        },
        {
          "t": "formula",
          "kicker": "MULTISECTION BY ROOTS OF UNITY",
          "tag": "JEE Advanced",
          "main": "Σ<sub>r ≡ a (mod k)</sub> C<sub>r</sub> = (1/k) Σ<sub>j</sub> ω<sup>−ja</sup>(1 + ω<sup>j</sup>)<sup>n</sup>",
          "legend": [
            "ω is a primitive <i>k</i>th root of unity and <i>j</i> runs 0 to <i>k</i> − 1; the whole point is that Σ<sub>j</sub> ω<sup>jm</sup> is <i>k</i> when <i>k</i> divides <i>m</i> and 0 otherwise",
            "period 3: C<sub>a</sub> + C<sub>a+3</sub> + ⋯ = [2<sup>n</sup> + 2cos((<i>n</i> − 2<i>a</i>)π/3)]/3, and the three such sums add to 2<sup>n</sup>",
            "period 4, the two components: C<sub>0</sub> − C<sub>2</sub> + C<sub>4</sub> − ⋯ = Re[(1 + <i>i</i>)<sup>n</sup>] and C<sub>1</sub> − C<sub>3</sub> + C<sub>5</sub> − ⋯ = Im[(1 + <i>i</i>)<sup>n</sup>]"
          ],
          "note": "Count the indices between sign changes before choosing a tool. Signs flipping every index is period 2 and needs <i>x</i> = −1. Signs flipping every two indices is period 4 and needs <i>x</i> = <i>i</i>. A repeating block of three is period 3 and needs ω. Reduce every angle modulo 2π before taking a cosine, and check that the <i>k</i> pieces rebuild 2<sup>n</sup>."
        },
        {
          "t": "proc",
          "title": "Summing a series with a polynomial weight",
          "steps": [
            "<b>Rewrite the weight in falling factorials.</b> <i>r</i><sup>2</sup> becomes <i>r</i>(<i>r</i> − 1) + <i>r</i>; <i>r</i><sup>3</sup> becomes <i>r</i>(<i>r</i> − 1)(<i>r</i> − 2) + 3<i>r</i>(<i>r</i> − 1) + <i>r</i>. A linear weight needs no rewriting at all.",
            "<b>Absorb each piece</b> with <i>r</i>C<sub>r</sub> = <i>n</i>·<sup>n−1</sup>C<sub>r−1</sub>, applied as many times as the falling factorial is long. Each application pulls out one factor and drops both indices by one.",
            "<b>Re-index and substitute.</b> After absorbing, each piece is a <b>complete</b> row of Pascal’s triangle for a smaller upper index, which totals 2<sup>n−k</sup> at <i>x</i> = 1 and 0 at <i>x</i> = −1.",
            "<b>Recombine over the common power of 2</b> and simplify. Self-check with <i>r</i><sup>2</sup> = <i>r</i>(<i>r</i> − 1) + <i>r</i>: the two sums must differ by exactly Σ<i>r</i>C<sub>r</sub> = <i>n</i>2<sup>n−1</sup>."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Show that C<sub>0</sub> + C<sub>2</sub> + C<sub>4</sub> + ⋯ = 2<sup>n−1</sup> for (1 + <i>x</i>)<sup>n</sup>, <i>n</i> ≥ 1.",
          "steps": [
            "Put <i>x</i> = 1: C<sub>0</sub> + C<sub>1</sub> + C<sub>2</sub> + ⋯ + C<sub>n</sub> = 2<sup>n</sup>.",
            "Put <i>x</i> = −1: C<sub>0</sub> − C<sub>1</sub> + C<sub>2</sub> − ⋯ = 0.",
            "Add the two equations. The odd-indexed terms cancel and the even-indexed ones double: 2(C<sub>0</sub> + C<sub>2</sub> + C<sub>4</sub> + ⋯) = 2<sup>n</sup>.",
            "Subtracting instead gives C<sub>1</sub> + C<sub>3</sub> + ⋯ = 2<sup>n−1</sup> as well, so the two families are equal, which is the period-2 filter in its simplest form."
          ],
          "ans": "C₀ + C₂ + C₄ + ⋯ = 2ⁿ⁻¹"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Evaluate Σ (3<i>r</i> + 2) <sup>10</sup>C<sub>r</sub>, the sum running <i>r</i> = 0 to 10.",
          "steps": [
            "The weight is linear, <i>a</i> = 2 and <i>d</i> = 3, so the reversal trick applies directly: S = (2<i>a</i> + <i>nd</i>)2<sup>n−1</sup> = (4 + 30) × 2<sup>9</sup>.",
            "34 × 512 = 17408.",
            "Check by splitting instead: 3Σ<i>r</i>C<sub>r</sub> + 2ΣC<sub>r</sub> = 3(10 × 2<sup>9</sup>) + 2(2<sup>10</sup>) = 15360 + 2048. Two routes, one answer, which is worth doing once so you trust the shortcut afterwards."
          ],
          "ans": "17408"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "For (1 + <i>x</i>)<sup>10</sup>, evaluate Σ <i>r</i>(<i>r</i> − 1) C<sub>r</sub>.",
          "steps": [
            "The trap: the weight looks like a lightly disguised <i>r</i><sup>2</sup>, so the reflex is the stored result <i>n</i>(<i>n</i> + 1)2<sup>n−2</sup> = 10 × 11 × 256 = 28160. Same error in another costume: “differentiate twice and put <i>x</i> = 1”, believing that produces Σ<i>r</i><sup>2</sup>C<sub>r</sub>. It does not, it produces this sum.",
            "<i>r</i>(<i>r</i> − 1) is already a falling factorial, so absorb it twice: Σ<i>r</i>(<i>r</i> − 1)<sup>10</sup>C<sub>r</sub> = 10 × 9 × Σ<sup>8</sup>C<sub>r−2</sub> = 90 × 2<sup>8</sup>.",
            "90 × 256 = 23040. Self-check: since <i>r</i><sup>2</sup> = <i>r</i>(<i>r</i> − 1) + <i>r</i>, the two sums must differ by Σ<i>r</i>C<sub>r</sub>, and 28160 − 23040 = 5120 = 10 × 2<sup>9</sup>."
          ],
          "ans": "23040"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "For (1 + <i>x</i>)<sup>10</sup>, evaluate C<sub>0</sub> + C<sub>3</sub> + C<sub>6</sub> + C<sub>9</sub>.",
          "steps": [
            "Every third coefficient starting at C<sub>0</sub>, so <i>k</i> = 3 and <i>a</i> = 0. The closed form is [2<sup>n</sup> + 2cos(<i>n</i>π/3)]/3.",
            "Reduce the angle before taking the cosine: 10π/3 − 2π = 4π/3, and cos(4π/3) = −1/2.",
            "So the sum is [1024 + 2(−1/2)]/3 = 1023/3 = 341.",
            "Two checks. Direct: 1 + 120 + 210 + 10 = 341. And the partition check, the three residue sums are 341, 341 and 342, totalling 1024 = 2<sup>10</sup>."
          ],
          "ans": "341"
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] For (1 + <i>x</i>)<sup>8</sup>, find C<sub>0</sub> + C<sub>1</sub> + ⋯ + C<sub>8</sub> and C<sub>0</sub> − C<sub>1</sub> + C<sub>2</sub> − ⋯",
              "a": "Put x = 1 for the first: 2⁸ = 256. Put x = −1 for the second: (1 − 1)⁸ = 0."
            },
            {
              "q": "[JEE Main] Evaluate Σ <i>r</i> C<sub>r</sub> for (1 + <i>x</i>)<sup>12</sup>.",
              "a": "Index weights are the differentiation signature, so the answer is n·2^(n−1) = 12 × 2¹¹ = 24576. No expansion needed."
            },
            {
              "q": "[JEE Main] Evaluate C<sub>0</sub> + C<sub>1</sub>/2 + ⋯ + C<sub>n</sub>/(<i>n</i> + 1) for <i>n</i> = 6.",
              "a": "The 1/(r + 1) weights are the integration signature: (2^(n+1) − 1)/(n + 1) = (2⁷ − 1)/7 = 127/7."
            },
            {
              "q": "[JEE Advanced] Evaluate C<sub>0</sub><sup>2</sup> + C<sub>1</sub><sup>2</sup> + ⋯ + C<sub>6</sub><sup>2</sup> for <i>n</i> = 6.",
              "a": "Sum of squares, not square of sum: it is C(2n,n) = C(12,6) = 924."
            },
            {
              "q": "[JEE Main] Evaluate Σ <sup>5</sup>C<sub>r</sub> <sup>7</sup>C<sub>r</sub>, the sum running <i>r</i> = 0 to 5.",
              "a": "The lower indices add to 2r, not a constant, so Vandermonde does not apply as printed. Flip one factor first: C(5,r) = C(5,5−r), and now the indices add to 5, giving C(12,5) = 792. Direct check: 1 + 35 + 210 + 350 + 175 + 21 = 792."
            }
          ]
        },
        {
          "t": "mcq",
          "q": "C<sub>0</sub> + C<sub>1</sub> + C<sub>2</sub> + ⋯ + C<sub>n</sub> equals:",
          "correct": 1,
          "opts": [
            {
              "label": "2<sup>n−1</sup>",
              "nudge": "That is the even-only, or odd-only, half-sum. You have taken one slice of the row and reported it as the whole."
            },
            {
              "label": "2<sup>n</sup>",
              "nudge": null
            },
            {
              "label": "<i>n</i><sup>2</sup>",
              "nudge": "The total is a power of 2, not a power of <i>n</i>. Test it at <i>n</i> = 3: the row is 1 3 3 1, totalling 8, not 9."
            },
            {
              "label": "2<sup>n+1</sup>",
              "nudge": "An off-by-one in the exponent, from confusing the <i>n</i> + 1 terms with the power that the total carries."
            }
          ],
          "solution": "Put <i>x</i> = 1 in (1 + <i>x</i>)<sup>n</sup> = ΣC<sub>r</sub><i>x</i><sup>r</sup>. Every <i>x</i><sup>r</sup> becomes 1, so the right side is the plain sum of the coefficients and the left side is 2<sup>n</sup>."
        },
        {
          "t": "mcq",
          "q": "C<sub>1</sub> + 2C<sub>2</sub> + 3C<sub>3</sub> + ⋯ + <i>n</i>C<sub>n</sub> equals:",
          "correct": 2,
          "opts": [
            {
              "label": "2<sup>n</sup>",
              "nudge": "This ignores the index weights entirely and reports the plain coefficient sum."
            },
            {
              "label": "<i>n</i> 2<sup>n</sup>",
              "nudge": "Right shape, wrong exponent: differentiating drops the power by one, so it is 2<sup>n−1</sup> at <i>x</i> = 1, not 2<sup>n</sup>."
            },
            {
              "label": "<i>n</i> 2<sup>n−1</sup>",
              "nudge": null
            },
            {
              "label": "(<i>n</i> − 1)2<sup>n</sup>",
              "nudge": "A fabricated form: the <i>n</i> comes out in front from differentiating, and it is the exponent that loses the 1, not the multiplier."
            }
          ],
          "solution": "Differentiate (1 + <i>x</i>)<sup>n</sup> = ΣC<sub>r</sub><i>x</i><sup>r</sup> to get <i>n</i>(1 + <i>x</i>)<sup>n−1</sup> = Σ<i>r</i>C<sub>r</sub><i>x</i><sup>r−1</sup>, then put <i>x</i> = 1. Equivalently absorb: <i>r</i>C<sub>r</sub> = <i>n</i>·<sup>n−1</sup>C<sub>r−1</sub>, and the reduced sum is a complete row totalling 2<sup>n−1</sup>."
        },
        {
          "t": "mcq",
          "q": "C<sub>0</sub><sup>2</sup> + C<sub>1</sub><sup>2</sup> + ⋯ + C<sub>n</sub><sup>2</sup> equals:",
          "correct": 1,
          "opts": [
            {
              "label": "2<sup>2n</sup>",
              "nudge": "That is 4<sup>n</sup>, the <b>square of the sum</b> (ΣC<sub>r</sub>)<sup>2</sup>. Squaring a sum is not summing the squares."
            },
            {
              "label": "<sup>2n</sup>C<sub>n</sub>",
              "nudge": null
            },
            {
              "label": "(2<sup>n</sup>)<sup>2</sup>",
              "nudge": "The same error written differently. Test at <i>n</i> = 2: 1 + 4 + 1 = 6, while (2<sup>2</sup>)<sup>2</sup> = 16."
            },
            {
              "label": "<sup>2n</sup>C<sub>n−1</sub>",
              "nudge": "The central coefficient’s neighbour, one place off. Comparing coefficients of <i>x</i><sup>n</sup>, not <i>x</i><sup>n−1</sup>, is what the derivation does."
            }
          ],
          "solution": "Compare the coefficient of <i>x</i><sup>n</sup> on the two sides of (1 + <i>x</i>)<sup>n</sup>(1 + <i>x</i>)<sup>n</sup> = (1 + <i>x</i>)<sup>2n</sup>. On the left it is ΣC<sub>r</sub>C<sub>n−r</sub> = ΣC<sub>r</sub><sup>2</sup> by symmetry; on the right it is <sup>2n</sup>C<sub>n</sub>."
        },
        {
          "t": "mcq",
          "q": "For (1 + <i>x</i>)<sup>8</sup>, the value of C<sub>0</sub> − C<sub>2</sub> + C<sub>4</sub> − C<sub>6</sub> + C<sub>8</sub> is:",
          "correct": 2,
          "opts": [
            {
              "label": "0",
              "nudge": "That is the alternating sum of <b>all</b> the coefficients, which the dial at <i>x</i> = −1 gives. This sum runs over the even places only, and the signs flip every two indices, not every one."
            },
            {
              "label": "128",
              "nudge": "That is 2<sup>n−1</sup>, the <b>non-alternating</b> even-place sum. A genuine identity, just not for this sum, which is what makes it the seductive option."
            },
            {
              "label": "16",
              "nudge": null
            },
            {
              "label": "256",
              "nudge": "2<sup>n</sup>, the total of every coefficient, ignoring both the signs and the gaps."
            }
          ],
          "solution": "The signs change once every <b>two</b> indices, a period-4 pattern, so no combination of <i>x</i> = 1 and <i>x</i> = −1 can produce it. Substitute <i>x</i> = <i>i</i>: the real part of (1 + <i>i</i>)<sup>8</sup> is exactly this sum, and (1 + <i>i</i>)<sup>8</sup> = [(1 + <i>i</i>)<sup>2</sup>]<sup>4</sup> = (2<i>i</i>)<sup>4</sup> = 16. Direct check: 1 − 28 + 70 − 28 + 1 = 16."
        },
        {
          "t": "mistakes",
          "items": [
            "Sum of squares against square of sum. <b>ΣC<sub>r</sub><sup>2</sup> = <sup>2n</sup>C<sub>n</sub></b>, not (2<sup>n</sup>)<sup>2</sup>. The multiply-then-compare move is not optional.",
            "Forgetting the exponent drops after differentiating. d/d<i>x</i>(1 + <i>x</i>)<sup>n</sup> = <i>n</i>(1 + <i>x</i>)<sup>n−1</sup>, giving <b><i>n</i>2<sup>n−1</sup></b> at <i>x</i> = 1, and the sum now starts at <i>r</i> = 1.",
            "Treating <i>r</i>(<i>r</i> − 1) and <i>r</i><sup>2</sup> as the same weight. They differ by Σ<i>r</i>C<sub>r</sub>, which is never zero. A second differentiation delivers the <b>falling factorial</b>, not the square.",
            "Applying Vandermonde without checking the precondition. The two lower indices must add to a <b>constant</b>; if they add to 2<i>r</i>, flip one factor by symmetry first.",
            "Dividing by 2 out of habit in a multisection. The <i>k</i>-way filter divides by <b><i>k</i></b>, and every angle must be reduced modulo 2π before you take its cosine."
          ]
        },
        {
          "t": "protip",
          "html": "match the weight to the operation and the problem is over: constants mean substitute, an <i>r</i> means differentiate or absorb, a 1/(<i>r</i> + 1) means integrate, squares mean multiply two expansions and compare one coefficient. and for a period-<i>k</i> filter, compute two of the <i>k</i> sums and get the third by subtraction from 2<sup>n</sup>, it is faster and it checks itself."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "Σ C<sub>r</sub> = 2ⁿ · Σ (−1)<sup>r</sup>C<sub>r</sub> = 0",
              "note": "even half = odd half = 2ⁿ⁻¹"
            },
            {
              "f": "Σ r C<sub>r</sub> = n2<sup>n−1</sup> · Σ r²C<sub>r</sub> = n(n + 1)2<sup>n−2</sup>",
              "note": "the differentiation family"
            },
            {
              "f": "Σ C<sub>r</sub>/(r + 1) = (2<sup>n+1</sup> − 1)/(n + 1)",
              "note": "integrate over [0, 1]; over [−1, 0] it is 1/(n + 1)"
            },
            {
              "f": "Σ C<sub>r</sub>² = <sup>2n</sup>C<sub>n</sub> · Σ <sup>m</sup>C<sub>k</sub><sup>n</sup>C<sub>p−k</sub> = <sup>m+n</sup>C<sub>p</sub>",
              "note": "lower indices must add to a constant"
            },
            {
              "f": "r <sup>n</sup>C<sub>r</sub> = n <sup>n−1</sup>C<sub>r−1</sub>",
              "note": "absorption; rewrite any weight in falling factorials"
            },
            {
              "f": "period 2 is −1, period 3 is ω, period 4 is i",
              "note": "divide by k, and the k pieces must rebuild 2ⁿ"
            }
          ],
          "aids": [
            "“substitute for constants, differentiate for r, integrate for 1/(r+1), multiply for squares”",
            "“count the indices between sign changes, then pick the root of unity”",
            "“divide by k, not by 2”",
            "“1 + ω is not 0, it is −ω²”"
          ]
        }
      ]
    },
    {
      "n": "05",
      "title": "Any Index and the Multinomial Theorem",
      "chip": "05 GENERALISE",
      "kalam": "drop the whole-number index, or drop the two parts",
      "blocks": [
        {
          "t": "p",
          "html": "Everything so far rested on two assumptions: the index <i>n</i> was a positive integer, and the bracket had exactly two parts. This topic breaks one, then the other. Neither breakage is exotic; both are standard JEE material, and they meet in the same worked problem at the end."
        },
        {
          "t": "p",
          "html": "First the index. What could (1 + <i>x</i>)<sup>1/2</sup> or (1 + <i>x</i>)<sup>−3</sup> possibly expand to? There is no last term to stop at, because you cannot choose <i>r</i> things from half a thing. But look at the positive-integer coefficient written the long way: <sup>n</sup>C<sub>r</sub> = <i>n</i>(<i>n</i> − 1)(<i>n</i> − 2)⋯(<i>n</i> − <i>r</i> + 1) / <i>r</i>!. For a positive integer <i>n</i> that product eventually hits the factor (<i>n</i> − <i>n</i>) = 0 and every later coefficient dies. <b>That is why the series stops.</b> If <i>n</i> is −3 or 1/2, the product never hits zero, so the series never stops."
        },
        {
          "t": "think",
          "html": "the expansion does not terminate because someone decided it should. it terminates because one factor becomes zero. take that zero away and the same coefficient pattern simply keeps going forever."
        },
        {
          "t": "p",
          "html": "The price of an infinite series is a convergence condition. The any-index expansion adds up to the true value of (1 + <i>x</i>)<sup>n</sup> only when <b>|<i>x</i>| < 1</b>. Outside that window the partial sums scatter and the expansion is meaningless, so this is not a technicality you can skip. It also means there are no <sup>n</sup>C<sub>r</sub> symbols here at all: <sup>n</sup>C<sub>r</sub> is undefined when <i>n</i> is negative or fractional, and writing <sup>−3</sup>C<sub>4</sub> is a guaranteed lost mark."
        },
        {
          "t": "def",
          "term": "What convergence actually means",
          "html": "An infinite series is not automatically a number. Adding the first term, then the first two, then the first three, gives a sequence of <b>partial sums</b>, and the series <b>converges</b> if those partial sums settle down onto a single value. For the any-index expansion they settle onto (1 + <i>x</i>)<sup>n</sup> exactly when |<i>x</i>| < 1, and outside that window they do not settle onto anything at all. So “valid for |<i>x</i>| < 1” is not a caution, it is the difference between a true equation and a meaningless one."
        },
        {
          "t": "formula",
          "kicker": "THE GENERAL BINOMIAL SERIES",
          "tag": "any index, |x| < 1",
          "main": "(1 + x)<sup>n</sup> = 1 + nx + [n(n − 1)/2!]x<sup>2</sup> + ⋯",
          "legend": [
            "general term: [<i>n</i>(<i>n</i> − 1)⋯(<i>n</i> − <i>r</i> + 1)/<i>r</i>!] <i>x</i><sup>r</sup>, for <i>r</i> = 0, 1, 2, … without end",
            "<i>n</i> is any rational index, positive or negative, whole or fractional",
            "to expand (<i>a</i> + <i>b</i>)<sup>n</sup>, factor the larger part out first: <i>a</i><sup>n</sup>(1 + <i>b</i>/<i>a</i>)<sup>n</sup>, valid when |<i>b</i>/<i>a</i>| < 1"
          ],
          "note": "The positive-integer theorem of Topic 01 is the special case where the factor (<i>n</i> − <i>n</i>) kills everything past <i>r</i> = <i>n</i>. Same pattern, one extra piece of luck."
        },
        {
          "t": "defgrid",
          "title": "The four expansions to know cold",
          "rows": [
            {
              "k": "(1 − <i>x</i>)<sup>−1</sup>",
              "v": "1 + <i>x</i> + <i>x</i><sup>2</sup> + <i>x</i><sup>3</sup> + ⋯, the geometric series"
            },
            {
              "k": "(1 + <i>x</i>)<sup>−1</sup>",
              "v": "1 − <i>x</i> + <i>x</i><sup>2</sup> − <i>x</i><sup>3</sup> + ⋯"
            },
            {
              "k": "(1 − <i>x</i>)<sup>−2</sup>",
              "v": "1 + 2<i>x</i> + 3<i>x</i><sup>2</sup> + 4<i>x</i><sup>3</sup> + ⋯, general term (<i>r</i> + 1)<i>x</i><sup>r</sup>"
            },
            {
              "k": "(1 − <i>x</i>)<sup>−p</sup>",
              "v": "general term <sup>p+r−1</sup>C<sub>r</sub> <i>x</i><sup>r</sup>, for <i>p</i> a positive integer"
            },
            {
              "k": "Approximation",
              "v": "small |<i>x</i>| ⇒ (1 + <i>x</i>)<sup>n</sup> ≈ 1 + <i>nx</i>"
            },
            {
              "k": "Validity",
              "v": "all of the above need |<i>x</i>| < 1, no exceptions"
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "DIAGRAM · WHY |x| < 1 IS NOT A TECHNICALITY",
          "chips": ["two terms", "three terms", "six terms", "past x = 1"],
          "captions": [
            "The shaded strip is the convergence window, from x = −1 to x = 1. The soft dashed curve is the twelve-term partial sum of 1 + x + x² + ⋯, close enough inside the strip to read as the true 1/(1 − x). The solid line is just 1 + x, and already it tracks the truth near the origin.",
            "Three terms, 1 + x + x². The agreement near x = 0 tightens and the curve begins to bend upwards on the right, following the truth. Outside the strip it goes its own way, because there is no truth out there to follow.",
            "Six terms. Inside the strip the solid curve has all but merged with the dashed one, which is what convergence looks like: keep adding terms and the partial sums settle onto one curve. The merge is fast near 0 and slow near the edges.",
            "The same twelve-term sum on a wider frame, with the two dashed verticals at x = 1 and x = −1. Past those lines the partial sums do not settle on anything, they run off the top and the bottom of the picture. Using the series there gives nonsense, which is the whole content of the condition |x| < 1."
          ],
          "frames": [
            {
              "x": [-1.6, 1.6],
              "y": [-1, 6],
              "bands": [{ "x0": -1, "x1": 1 }],
              "curves": [
                { "c": "poly", "coeffs": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], "dash": true, "soft": true },
                { "c": "poly", "coeffs": [1, 1] }
              ]
            },
            {
              "x": [-1.6, 1.6],
              "y": [-1, 6],
              "bands": [{ "x0": -1, "x1": 1 }],
              "curves": [
                { "c": "poly", "coeffs": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], "dash": true, "soft": true },
                { "c": "poly", "coeffs": [1, 1, 1] }
              ]
            },
            {
              "x": [-1.6, 1.6],
              "y": [-1, 6],
              "bands": [{ "x0": -1, "x1": 1 }],
              "curves": [
                { "c": "poly", "coeffs": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], "dash": true, "soft": true },
                { "c": "poly", "coeffs": [1, 1, 1, 1, 1, 1] }
              ]
            },
            {
              "x": [-1.7, 1.7],
              "y": [-8, 14],
              "bands": [{ "x0": -1, "x1": 1 }],
              "curves": [
                { "c": "poly", "coeffs": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
                { "c": "vline", "x": 1, "dash": true, "soft": true },
                { "c": "vline", "x": -1, "dash": true, "soft": true }
              ],
              "labels": [{ "x": 1.35, "y": 12, "text": "x = 1" }]
            }
          ]
        },
        {
          "t": "proc",
          "title": "Two moves the any-index series is set for",
          "steps": [
            "<b>Expanding (<i>a</i> + <i>b</i>)<sup>n</sup>.</b> Factor out the dominant term so the bracket leads with 1: (<i>a</i> + <i>b</i>)<sup>n</sup> = <i>a</i><sup>n</sup>(1 + <i>b</i>/<i>a</i>)<sup>n</sup>, choosing <i>a</i> as the larger so |<i>b</i>/<i>a</i>| < 1. Apply the series, then multiply back by <i>a</i><sup>n</sup>.",
            "<b>Approximating.</b> For small |<i>x</i>| truncate after the linear term, (1 + <i>x</i>)<sup>n</sup> ≈ 1 + <i>nx</i>. Keep the <i>n</i>(<i>n</i> − 1)<i>x</i><sup>2</sup>/2 term only if the question demands more precision. Arrange the number so the correction really is small: 255 becomes 256(1 − 1/256).",
            "<b>Identifying a numeric series.</b> Match the first three terms to 1, <i>ny</i> and <i>n</i>(<i>n</i> − 1)<i>y</i><sup>2</sup>/2, factoring out so the first term is 1.",
            "<b>Then divide the third by the square of the second.</b> The scaling cancels and you are left with (<i>n</i> − 1)/2<i>n</i>, a single equation for <i>n</i>. Recover <i>y</i> from <i>ny</i>, and the series sums to (1 + <i>y</i>)<sup>n</sup>."
          ]
        },
        {
          "t": "p",
          "html": "Now the other assumption. The binomial theorem asked what comes out when each of <i>n</i> brackets donates one of <b>two</b> things. The <b>multinomial theorem</b> asks the identical question when each bracket offers more. A term of (<i>a</i> + <i>b</i> + <i>c</i>)<sup>n</sup> looks like <i>a</i><sup>n₁</sup><i>b</i><sup>n₂</sup><i>c</i><sup>n₃</sup> where <i>n</i><sub>1</sub> brackets gave <i>a</i>, <i>n</i><sub>2</sub> gave <i>b</i>, <i>n</i><sub>3</sub> gave <i>c</i>, and the three add to <i>n</i> because every bracket donated exactly once. Its coefficient counts the ways of splitting the <i>n</i> brackets into those groups."
        },
        {
          "t": "formula",
          "kicker": "THE MULTINOMIAL THEOREM",
          "tag": "k = 2 gives back the binomial",
          "main": "coefficient of x₁<sup>n₁</sup>⋯x<sub>k</sub><sup>n<sub>k</sub></sup> = n! / (n₁! n₂! ⋯ n<sub>k</sub>!)",
          "legend": [
            "the sum runs over all non-negative integers <i>n</i><sub>1</sub>, …, <i>n</i><sub>k</sub> adding to <i>n</i>, and the coefficient is 0 unless they do",
            "number of distinct terms: <sup>n+k−1</sup>C<sub>k−1</sub>, by stars and bars, so a trinomial has <sup>n+2</sup>C<sub>2</sub> = (<i>n</i> + 1)(<i>n</i> + 2)/2 terms",
            "sum of all the coefficients: put every variable equal to 1, giving <i>k</i><sup>n</sup>"
          ],
          "note": "With <i>k</i> = 2 the coefficient collapses to <i>n</i>!/[<i>r</i>!(<i>n</i> − <i>r</i>)!] = <sup>n</sup>C<sub>r</sub>, so the whole of Topic 01 is this theorem with two parts. The term count assumes the variables are independent; if the bracket is secretly a perfect power, distinct terms merge and the count drops, as in (1 + 2<i>x</i> + <i>x</i><sup>2</sup>)<sup>10</sup>."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · COUNTING THE TERMS OF A MULTINOMIAL, TAP A LINE",
          "steps": [
            {
              "eq": "a term is fixed by its exponents (n₁, n₂, …, n<sub>k</sub>)",
              "why": "Two terms are the same term exactly when every exponent agrees, so counting terms is counting exponent tuples and nothing else."
            },
            {
              "eq": "n₁ + n₂ + ⋯ + n<sub>k</sub> = n, each n<sub>i</sub> ≥ 0",
              "why": "Every one of the n brackets donates exactly one variable, so the exponents must account for all n donations."
            },
            {
              "eq": "count = number of non-negative solutions",
              "why": "The counting question has been converted into a Permutations and Combinations question, which is the point of the derivation."
            },
            {
              "eq": "stars and bars ⇒ <sup>n+k−1</sup>C<sub>k−1</sub>",
              "why": "Distribute n identical units among k labelled slots by laying out n stars and k − 1 dividing bars in a row; every arrangement is one solution. Check at k = 2: C(n+1,1) = n + 1, the familiar binomial term count."
            }
          ]
        },
        {
          "t": "ex",
          "tag": "FOUNDATION",
          "q": "Write the first four terms of (1 + <i>x</i>)<sup>−2</sup> and state the validity condition.",
          "steps": [
            "Use the general series with <i>n</i> = −2. There are no combination symbols to reach for; the coefficients come from the falling product.",
            "1 + (−2)<i>x</i> + [(−2)(−3)/2!]<i>x</i><sup>2</sup> + [(−2)(−3)(−4)/3!]<i>x</i><sup>3</sup> + ⋯",
            "The signs alternate because each new factor is one more negative number, and the magnitudes are 1, 2, 3, 4, which is the pattern worth memorising."
          ],
          "ans": "1 − 2x + 3x² − 4x³ + ⋯, valid for |x| < 1"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Find the coefficient of <i>x</i><sup>4</sup> in the expansion of (1 − 2<i>x</i>)<sup>−3</sup>, for |<i>x</i>| < 1/2.",
          "steps": [
            "Do not write <sup>−3</sup>C<sub>4</sub>; it is undefined. Use the clean form (1 − <i>y</i>)<sup>−p</sup> = Σ <sup>p+r−1</sup>C<sub>r</sub><i>y</i><sup>r</sup> with <i>p</i> = 3 and <i>y</i> = 2<i>x</i>.",
            "Coefficient of <i>y</i><sup>4</sup> is <sup>3+4−1</sup>C<sub>4</sub> = <sup>6</sup>C<sub>4</sub> = 15.",
            "But <i>y</i><sup>4</sup> = (2<i>x</i>)<sup>4</sup> = 16<i>x</i><sup>4</sup>, so the coefficient of <i>x</i><sup>4</sup> is 15 × 16. Forgetting that the substitution <i>y</i> = 2<i>x</i> drags in a factor 2<sup>4</sup> is the second half of the trap."
          ],
          "ans": "240"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Use the binomial approximation to estimate (255)<sup>1/4</sup>.",
          "steps": [
            "Arrange the number so the correction is small: 255 = 256(1 − 1/256), and 256 = 4<sup>4</sup>.",
            "So (255)<sup>1/4</sup> = 4(1 − 1/256)<sup>1/4</sup>, and 1/256 is tiny enough that the linear term is plenty.",
            "Apply (1 + <i>x</i>)<sup>n</sup> ≈ 1 + <i>nx</i> with <i>n</i> = 1/4 and <i>x</i> = −1/256: the value is about 4(1 − 1/1024) = 4 − 4/1024 = 4 − 1/256."
          ],
          "ans": "(255)^(1/4) ≈ 3.9961"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Find the coefficient of <i>x</i><sup>2</sup><i>y</i><sup>3</sup><i>z</i><sup>4</sup> in the expansion of (<i>x</i> + <i>y</i> + <i>z</i>)<sup>9</sup>.",
          "steps": [
            "First the free check: do the exponents sum to the index? 2 + 3 + 4 = 9, so the coefficient is not zero and it is worth computing.",
            "The multinomial coefficient is 9! / (2! 3! 4!) = 362880 / (2 × 6 × 24) = 362880 / 288.",
            "The trap is reaching for <sup>9</sup>C<sub>2</sub> or any single binomial coefficient. With three variables you need the full factorial quotient."
          ],
          "ans": "1260"
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[Foundation] Write the first four terms of (1 − <i>x</i>)<sup>−1</sup> and of (1 + <i>x</i>)<sup>−1</sup>, with validity.",
              "a": "1 + x + x² + x³ + ⋯ and 1 − x + x² − x³ + ⋯, both valid only for |x| < 1."
            },
            {
              "q": "[JEE Main] Find the coefficient of <i>x</i><sup>3</sup> in (1 − 3<i>x</i>)<sup>−2</sup>.",
              "a": "(1 − y)⁻² has general term (r + 1)y^r, so at r = 3 the coefficient of y³ is 4, and y³ = 27x³. The answer is 4 × 27 = 108."
            },
            {
              "q": "[JEE Main] Approximate (1.02)<sup>8</sup> to two decimal places.",
              "a": "(1 + 0.02)⁸ ≈ 1 + 8(0.02) = 1.16. Keeping the quadratic term would add 28(0.0004) = 0.0112, so 1.16 is right to two places."
            },
            {
              "q": "[JEE Advanced] Find the coefficient of <i>x</i><sup>7</sup> in (1 + <i>x</i> + <i>x</i><sup>2</sup> + ⋯)<sup>3</sup>, |<i>x</i>| < 1.",
              "a": "The bracket is (1 − x)⁻¹, so the expression is (1 − x)⁻³, whose x^r coefficient is C(r+2,2). At r = 7 that is C(9,2) = 36. It is also the number of ways to write 7 as an ordered sum of three non-negative integers, so the two viewpoints agree."
            },
            {
              "q": "[JEE Main] Find the number of distinct terms in (<i>p</i> + <i>q</i> + <i>r</i> + <i>s</i>)<sup>10</sup>, and the sum of all coefficients in (2<i>x</i> − 3<i>y</i> + <i>z</i>)<sup>8</sup>.",
              "a": "Terms: C(10+4−1, 4−1) = C(13,3) = 286. Sum of coefficients: put every variable equal to 1, giving (2 − 3 + 1)⁸ = 0. Two different questions, and mixing them up is the standard error."
            }
          ]
        },
        {
          "t": "mcq",
          "q": "The expansion of (1 + <i>x</i>)<sup>n</sup> for a non-integer <i>n</i> is valid only when:",
          "correct": 1,
          "opts": [
            {
              "label": "<i>x</i> > 0",
              "nudge": "The sign of <i>x</i> is irrelevant; it is the magnitude that decides convergence. The series works perfectly well at <i>x</i> = −0.5."
            },
            {
              "label": "|<i>x</i>| < 1",
              "nudge": null
            },
            {
              "label": "<i>n</i> > 0",
              "nudge": "The any-index series is at its most useful for negative indices such as −1 and −2. The condition is on <i>x</i>, not on <i>n</i>."
            },
            {
              "label": "always",
              "nudge": "An infinite series is not automatically a number. For |<i>x</i>| ≥ 1 the partial sums do not settle, and the expression is meaningless."
            }
          ],
          "solution": "The series is infinite, and it converges to (1 + <i>x</i>)<sup>n</sup> only inside |<i>x</i>| < 1. That is why you always arrange a binomial so the <b>smaller</b> part plays the role of <i>x</i>."
        },
        {
          "t": "mcq",
          "q": "Which expansion has general term (<i>r</i> + 1)<i>x</i><sup>r</sup>?",
          "correct": 2,
          "opts": [
            {
              "label": "(1 + <i>x</i>)<sup>−1</sup>",
              "nudge": "Its coefficients are (−1)<sup>r</sup>, alternating ±1, with no growth at all."
            },
            {
              "label": "(1 − <i>x</i>)<sup>−1</sup>",
              "nudge": "Every coefficient there is exactly 1. That is the plain geometric series, one index short of this one."
            },
            {
              "label": "(1 − <i>x</i>)<sup>−2</sup>",
              "nudge": null
            },
            {
              "label": "(1 + <i>x</i>)<sup>2</sup>",
              "nudge": "A positive integer index, so this stops after three terms, 1 + 2<i>x</i> + <i>x</i><sup>2</sup>. It cannot have a general term running to infinity."
            }
          ],
          "solution": "(1 − <i>x</i>)<sup>−2</sup> = 1 + 2<i>x</i> + 3<i>x</i><sup>2</sup> + 4<i>x</i><sup>3</sup> + ⋯, so the coefficient of <i>x</i><sup>r</sup> is <i>r</i> + 1. It is the <i>p</i> = 2 case of (1 − <i>x</i>)<sup>−p</sup> = Σ<sup>p+r−1</sup>C<sub>r</sub><i>x</i><sup>r</sup>."
        },
        {
          "t": "mcq",
          "q": "The number of distinct terms in the expansion of (<i>a</i> + <i>b</i> + <i>c</i>)<sup>n</sup> is:",
          "correct": 2,
          "opts": [
            {
              "label": "<i>n</i> + 1",
              "nudge": "That is the count for a <b>binomial</b>, the <i>k</i> = 2 case. Three parts give a two-dimensional family of exponent tuples, not a one-dimensional one."
            },
            {
              "label": "3<i>n</i>",
              "nudge": "A fabricated form that happens to be right for <i>n</i> = 1 and <i>n</i> = 2, which is why it survives a quick check. At <i>n</i> = 3 there are <sup>5</sup>C<sub>2</sub> = 10 terms, not 9."
            },
            {
              "label": "<sup>n+2</sup>C<sub>2</sub>",
              "nudge": null
            },
            {
              "label": "3<sup>n</sup>",
              "nudge": "That is the <b>sum of all the coefficients</b>, obtained by putting <i>a</i> = <i>b</i> = <i>c</i> = 1. It also counts the terms before like ones are collected."
            }
          ],
          "solution": "Each distinct term is one solution of <i>n</i><sub>1</sub> + <i>n</i><sub>2</sub> + <i>n</i><sub>3</sub> = <i>n</i> in non-negative integers, and stars and bars counts those as <sup>n+3−1</sup>C<sub>3−1</sub> = <sup>n+2</sup>C<sub>2</sub> = (<i>n</i> + 1)(<i>n</i> + 2)/2."
        },
        {
          "t": "mcq",
          "q": "The sum of all the coefficients in the expansion of (<i>x</i> + <i>y</i> + <i>z</i>)<sup>n</sup> is:",
          "correct": 0,
          "opts": [
            {
              "label": "3<sup>n</sup>",
              "nudge": null
            },
            {
              "label": "2<sup>n</sup>",
              "nudge": "That is the binomial answer, for two parts. Each of the <i>n</i> brackets now offers three choices, not two."
            },
            {
              "label": "<i>n</i><sup>3</sup>",
              "nudge": "The 3 counts the parts and belongs in the base, not the exponent. Test at <i>n</i> = 1: the sum is 3, not 1."
            },
            {
              "label": "<sup>n+2</sup>C<sub>2</sub>",
              "nudge": "That is the <b>number of terms</b>, a different question. Terms and coefficient sums are counted by different formulas and agree only by accident."
            }
          ],
          "solution": "Put <i>x</i> = <i>y</i> = <i>z</i> = 1. Every monomial becomes 1, so the right side is the plain sum of the coefficients, and the left side is 3<sup>n</sup>. In general the sum is <i>k</i><sup>n</sup> for <i>k</i> parts, which is also why (2<i>x</i> − 3<i>y</i> + <i>z</i>)<sup>8</sup> has coefficient sum (2 − 3 + 1)<sup>8</sup> = 0."
        },
        {
          "t": "mistakes",
          "items": [
            "Ignoring |<i>x</i>| < 1. The any-index series says nothing outside that window. Always arrange the bracket so the <b>smaller</b> part is the <i>x</i>.",
            "Writing <sup>n</sup>C<sub>r</sub> for a non-integer or negative <i>n</i>. It is <b>undefined</b>. Use the falling-factorial general term, or the <sup>p+r−1</sup>C<sub>r</sub> form for (1 − <i>x</i>)<sup>−p</sup>.",
            "Forgetting to factor out the leading term. For (<i>a</i> + <i>b</i>)<sup>n</sup>, write <b><i>a</i><sup>n</sup>(1 + <i>b</i>/<i>a</i>)<sup>n</sup></b> first. The series only starts from a bracket that leads with 1.",
            "Forgetting the substitution’s own factor. In (1 − 2<i>x</i>)<sup>−3</sup> the <i>y</i> = 2<i>x</i> contributes <b>2<sup>r</sup></b> as well as the combination count.",
            "Using a binomial coefficient for three or more variables, or forgetting the sum-to-<i>n</i> check. The coefficient of <i>x</i><sup>a</sup><i>y</i><sup>b</sup><i>z</i><sup>c</sup> is <b><i>n</i>!/(<i>a</i>!<i>b</i>!<i>c</i>!)</b>, and it is <b>zero</b> unless <i>a</i> + <i>b</i> + <i>c</i> = <i>n</i>."
          ]
        },
        {
          "t": "protip",
          "html": "asked to <i>sum</i> a numeric series, match its first three terms to 1, <i>ny</i> and <i>n</i>(<i>n</i> − 1)<i>y</i><sup>2</sup>/2, then divide the third by the square of the second. all the scaling cancels, you are left with (<i>n</i> − 1)/2<i>n</i>, and <i>n</i> then <i>y</i> fall out immediately. and for “coefficient of <i>x</i><sup>m</sup> in (1 + <i>x</i> + ⋯ + <i>x</i><sup>t</sup>)<sup>k</sup>”, rewrite the bracket as (1 − <i>x</i><sup>t+1</sup>)/(1 − <i>x</i>) and pair it with (1 − <i>x</i>)<sup>−k</sup>: a messy multinomial collection becomes two clean lookups."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "(1 + x)ⁿ = 1 + nx + [n(n − 1)/2!]x² + ⋯",
              "note": "infinite, |x| < 1, and no combination symbols at all"
            },
            {
              "f": "(1 − x)<sup>−1</sup> = Σ x<sup>r</sup> · (1 − x)<sup>−2</sup> = Σ (r + 1)x<sup>r</sup>",
              "note": "and (1 − x) to the −p has general term C(p+r−1, r) x to the r"
            },
            {
              "f": "small |x|: (1 + x)ⁿ ≈ 1 + nx",
              "note": "keep the quadratic term only if precision demands it"
            },
            {
              "f": "(a + b)ⁿ = aⁿ(1 + b/a)ⁿ",
              "note": "factor the larger out, need |b/a| < 1"
            },
            {
              "f": "coefficient = n! / (n₁! ⋯ n<sub>k</sub>!)",
              "note": "zero unless the exponents add to n"
            },
            {
              "f": "terms = <sup>n+k−1</sup>C<sub>k−1</sub> · coefficient sum = kⁿ",
              "note": "two different questions, never the same answer"
            }
          ],
          "aids": [
            "“non-integer power means infinite series, only if |x| < 1”",
            "“factor out the big one, then expand”",
            "“spread n choices over k boxes, divide by the factorials of the box sizes”",
            "“terms is stars and bars, coefficient sum is all ones”"
          ]
        }
      ]
    },
    {
      "n": "06",
      "title": "Divisibility, Remainders and Integral Parts",
      "chip": "06 APPLY",
      "kalam": "make the divisor appear inside the bracket",
      "blocks": [
        {
          "t": "p",
          "html": "Why would a chapter about expansions help you find the remainder of 7<sup>103</sup> divided by 25, a question with no <i>x</i> anywhere in it? Because the binomial theorem lets you <b>split a number into a big clean piece plus a tiny piece</b>, and then throw the big piece away."
        },
        {
          "t": "p",
          "html": "The move is always the same: rewrite the base so that it is <i>almost</i> a multiple of the divisor. For 7<sup>103</sup> modulo 25, notice that 7<sup>2</sup> = 49 = 50 − 1, and 50 is a multiple of 25. So 7<sup>103</sup> = 7 · (50 − 1)<sup>51</sup>, and when you expand that bracket, every term containing 50 is divisible by 25 and vanishes. Only the last term, (−1)<sup>51</sup>, survives to decide the answer."
        },
        {
          "t": "think",
          "html": "an expansion of (<i>km</i> ± 1)<sup>n</sup> is a list of terms, and all but the very last carry a factor of <i>m</i>. modulo <i>m</i> those terms are invisible. so every divisibility, remainder and last-digit question becomes the same one: which few terms survive when i throw away everything divisible by the modulus?"
        },
        {
          "t": "def",
          "term": "The ≡ sign, read as a remainder",
          "html": "<i>A</i> ≡ <i>B</i> (mod <i>m</i>) says that <i>A</i> and <i>B</i> leave the <b>same remainder</b> on division by <i>m</i>, equivalently that <i>m</i> divides <i>A</i> − <i>B</i>. It is not an equation, it is a statement about a clock with <i>m</i> hours on it. You may add, subtract and multiply congruences freely, which is exactly what lets you throw a whole expansion away term by term. The final answer must still be shifted into 0 to <i>m</i> − 1: 18 is a remainder, −7 is not."
        },
        {
          "t": "formula",
          "kicker": "BASE SPLITTING",
          "tag": "the core move",
          "main": "(K ± 1)<sup>n</sup> = Σ <sup>n</sup>C<sub>r</sub> K<sup>r</sup> (±1)<sup>n−r</sup>",
          "legend": [
            "choose <i>K</i> to be a multiple of the divisor, or of its square, so the divisor appears <b>inside</b> the bracket",
            "modulo <i>K</i>, every term with <i>r</i> ≥ 1 disappears and only (±1)<sup>n</sup> is left",
            "two standard consequences: <i>a</i><sup>n</sup> − 1 is divisible by <i>a</i> − 1, and <i>a</i><sup>n</sup> − <i>b</i><sup>n</sup> is divisible by <i>a</i> − <i>b</i>"
          ],
          "note": "Last digit means the value modulo 10, last two digits means modulo 100. Match the split to what you are asked for: a split that does not expose the modulus wastes the method entirely."
        },
        {
          "t": "proc",
          "title": "Remainder of a power",
          "steps": [
            "<b>Express the base, or a convenient power of it, as <i>K</i> ± 1</b> with <i>K</i> a multiple of the modulus. You get to choose which power of the base you split, and that freedom is usually the whole trick: 7<sup>2</sup> = 50 − 1, 3<sup>4</sup> = 80 + 1.",
            "<b>Expand (<i>K</i> ± 1)<sup>n</sup></b> by the binomial theorem, and write the surviving head explicitly rather than in your head.",
            "<b>Reduce.</b> Drop every term that carries the modulus, and keep exactly as many terms as the modulus demands (see the next card, this is where marks are lost).",
            "<b>Multiply back</b> any factor you split off in step 1, and shift the answer into the range 0 to <i>m</i> − 1. A remainder of −7 modulo 25 is 18, never −7."
          ]
        },
        {
          "t": "p",
          "html": "That last step deserves its own warning, because every easy example collapses to a <b>single</b> surviving term and teaches a habit that fails exactly when the question is worth marks. Suppose a journey takes 9<sup>n+1</sup> minutes and you want the answer on a 64-minute clock. Splitting 9 = 1 + 8 tells you the journey is one minute plus a whole number of 8-minute blocks, which is useful modulo 8 and useless modulo 64, because 8-minute blocks are not invisible on a 64-minute clock. To work modulo <i>K</i><sup>2</sup> you must keep track of <b>how many</b> single blocks there are as well."
        },
        {
          "t": "formula",
          "kicker": "TWO-TERM DIVISIBILITY",
          "tag": "when the divisor is a square",
          "main": "(1 + K)<sup>n</sup> ≡ 1 + nK   (mod K<sup>2</sup>)",
          "legend": [
            "written out: (1 + <i>K</i>)<sup>n</sup> = 1 + <i>nK</i> + <i>K</i><sup>2</sup>Σ<sup>n</sup>C<sub>r</sub><i>K</i><sup>r−2</sup>, and that trailing sum is an integer",
            "corollary: <i>K</i><sup>2</sup> divides [(1 + <i>K</i>)<sup>n</sup> − 1 − <i>nK</i>] for every positive integer <i>n</i>",
            "the guarantee stops at <i>K</i><sup>2</sup>: at <i>n</i> = 2 the expression is exactly <i>K</i><sup>2</sup>, so do not claim <i>K</i><sup>3</sup>"
          ],
          "note": "It also holds modulo any divisor of <i>K</i><sup>2</sup>, which is what licenses last-two-digit work with <i>K</i> = 80 and modulus 100, since 100 divides 6400."
        },
        {
          "t": "defgrid",
          "title": "How many terms to keep",
          "rows": [
            {
              "k": "Modulus <i>K</i>",
              "v": "1 term: (1 + <i>K</i>)<sup>n</sup> ≡ 1"
            },
            {
              "k": "Modulus <i>K</i><sup>2</sup>",
              "v": "2 terms: (1 + <i>K</i>)<sup>n</sup> ≡ 1 + <i>nK</i>"
            },
            {
              "k": "Modulus <i>K</i><sup>3</sup>",
              "v": "3 terms: ≡ 1 + <i>nK</i> + <sup>n</sup>C<sub>2</sub><i>K</i><sup>2</sup>"
            },
            {
              "k": "Divisor 64",
              "v": "<i>K</i> = 8, not 64. <i>K</i> is the square <b>root</b> of the divisor."
            },
            {
              "k": "Divisor 225 · 9 · 36",
              "v": "<i>K</i> = 15 · <i>K</i> = 3 · <i>K</i> = 6"
            },
            {
              "k": "Last two digits",
              "v": "hunt for a power ending in 1: 3<sup>4</sup> = 1 + 80, 7<sup>4</sup> = 1 + 2400"
            }
          ]
        },
        {
          "t": "p",
          "html": "A sister idea handles integral and fractional parts. A number like (7 + 4√3)<sup>n</sup> is irrational, but its <b>conjugate</b> (7 − 4√3)<sup>n</sup> is a tiny positive number, less than 1, and adding the two cancels every odd power of the surd and leaves a whole number. Since one of the pair is an integer and the other is squeezed into (0, 1), the fractional parts are pinned down exactly. The check you must never skip is that the conjugate genuinely lies strictly between 0 and 1."
        },
        {
          "t": "formula",
          "kicker": "INTEGRAL AND FRACTIONAL PART",
          "tag": "the conjugate trick",
          "main": "(I + f) f′ = (p<sup>2</sup> − q)<sup>n</sup>",
          "legend": [
            "set <i>I</i> + <i>f</i> = (<i>p</i> + √<i>q</i>)<sup>n</sup> with <i>I</i> an integer and 0 ≤ <i>f</i> < 1, and <i>f</i>′ = (<i>p</i> − √<i>q</i>)<sup>n</sup>",
            "verify 0 < <i>p</i> − √<i>q</i> < 1 first, so that 0 < <i>f</i>′ < 1",
            "the sum or difference that cancels the surds is an integer, which forces <i>f</i>′ = 1 − <i>f</i>"
          ],
          "note": "The product is just (<i>p</i> + √<i>q</i>)<sup>n</sup>(<i>p</i> − √<i>q</i>)<sup>n</sup> = (<i>p</i><sup>2</sup> − <i>q</i>)<sup>n</sup>, which is usually 1 in exam problems because they are built from a unit: 49 − 48 = 1, 25 − 24 = 1, 9 − 8 = 1."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY f′ = 1 − f, TAP A LINE",
          "steps": [
            {
              "eq": "7 − 4√3 ≈ 0.072, so 0 < f′ < 1",
              "why": "The check that licenses everything after it. If the conjugate were bigger than 1, or negative, the squeeze argument below would say nothing."
            },
            {
              "eq": "(7 + 4√3)<sup>n</sup> + (7 − 4√3)<sup>n</sup> = an integer",
              "why": "Adding the two conjugate expansions kills every term with an odd power of the surd and doubles the rest, which is exactly the conjugate-pair result from Topic 01."
            },
            {
              "eq": "so I + f + f′ is an integer",
              "why": "The left side is I + f by definition and f prime by definition, and their total was just shown to be a whole number."
            },
            {
              "eq": "f + f′ ∈ (0, 2), so f + f′ = 1",
              "why": "I is already an integer, so f + f prime must be one too. It lies strictly between 0 and 2, and the only integer in that range is 1. Hence f prime = 1 − f."
            },
            {
              "eq": "(I + f)(1 − f) = (49 − 48)<sup>n</sup> = 1",
              "why": "Replace 1 − f by f prime, and the product of the two conjugates is (7 + 4 root 3)(7 − 4 root 3) all to the n, which is 1 to the n."
            }
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Show that 9<sup>n</sup> − 1 is divisible by 8 for every positive integer <i>n</i>.",
          "steps": [
            "Split the base against the divisor: 9 = 8 + 1, so 9<sup>n</sup> = (1 + 8)<sup>n</sup> = 1 + <sup>n</sup>C<sub>1</sub>8 + <sup>n</sup>C<sub>2</sub>8<sup>2</sup> + ⋯ + 8<sup>n</sup>.",
            "Subtract 1 and the leading term goes: 9<sup>n</sup> − 1 = <sup>n</sup>C<sub>1</sub>8 + <sup>n</sup>C<sub>2</sub>8<sup>2</sup> + ⋯",
            "Every surviving term carries a factor of 8, so the whole thing is 8(<sup>n</sup>C<sub>1</sub> + <sup>n</sup>C<sub>2</sub>8 + ⋯) with an integer in the bracket."
          ],
          "ans": "8 divides 9ⁿ − 1 for all n ∈ ℕ"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Find the remainder when 7<sup>103</sup> is divided by 25.",
          "steps": [
            "Do not compute powers of 7. Look for a power of 7 that is close to a multiple of 25: 7<sup>2</sup> = 49 = 50 − 1.",
            "So 7<sup>103</sup> = 7 · (7<sup>2</sup>)<sup>51</sup> = 7(50 − 1)<sup>51</sup>. Expanding, every term except the last contains 50, hence 25.",
            "Therefore (50 − 1)<sup>51</sup> ≡ (−1)<sup>51</sup> = −1, and 7<sup>103</sup> ≡ 7 × (−1) = −7 (mod 25).",
            "Shift into range: −7 + 25 = 18. A negative remainder is never a final answer."
          ],
          "ans": "Remainder 18"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Find the largest positive integer that divides 3<sup>2n+2</sup> − 8<i>n</i> − 9 for every positive integer <i>n</i>.",
          "steps": [
            "The trap: 3<sup>2n+2</sup> = 9<sup>n+1</sup> = (1 + 8)<sup>n+1</sup>, and keeping only the leading 1 gives divisibility by 8. True, but not largest, and in a single-answer objective that scores zero.",
            "Keep <b>two</b> terms. The head of (1 + 8)<sup>n+1</sup> is 1 + 8(<i>n</i> + 1) = 8<i>n</i> + 9, which is precisely what the −8<i>n</i> − 9 exists to delete.",
            "What remains is Σ<sup>n+1</sup>C<sub>r</sub>8<sup>r</sup> over <i>r</i> ≥ 2, and every term there carries 8<sup>2</sup> = 64.",
            "Can anything larger work? Test the smallest case: <i>n</i> = 1 gives 81 − 8 − 9 = 64 exactly. Any universal divisor must divide 64, so nothing bigger is possible."
          ],
          "ans": "64"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "Find the last two digits of 3<sup>2018</sup>.",
          "steps": [
            "Last two digits means the value modulo 100. Hunt for a power of 3 that is one more than a multiple of 10: 3<sup>4</sup> = 81 = 1 + 80. Take <i>K</i> = 80, and note <i>K</i><sup>2</sup> = 6400 is a multiple of 100, which is what licenses the two-term formula.",
            "Write the exponent to expose 3<sup>4</sup>: 3<sup>2018</sup> = 3<sup>2</sup> · (3<sup>4</sup>)<sup>504</sup> = 9(1 + 80)<sup>504</sup>.",
            "Two-term identity: (1 + 80)<sup>504</sup> ≡ 1 + 504(80) = 40321 ≡ 21 (mod 100).",
            "Multiply back the 9 that was split off: 9 × 21 = 189 ≡ 89. Drop the linear term 504 × 80 and you would answer 9, which is why this example exists."
          ],
          "ans": "Last two digits 89"
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Show that 6<sup>n</sup> − 1 is divisible by 5 for all <i>n</i> ∈ ℕ.",
              "a": "Write 6 = 1 + 5. Then 6ⁿ − 1 = C(n,1)5 + C(n,2)5² + ⋯, and every surviving term carries a factor of 5."
            },
            {
              "q": "[CBSE] Show that 4<sup>n</sup> − 3<i>n</i> − 1 is divisible by 9 for all <i>n</i> ∈ ℕ.",
              "a": "The divisor 9 is 3², so take K = 3 and write 4ⁿ = (1 + 3)ⁿ. The head 1 + 3n is exactly what −3n − 1 deletes, and every remaining term carries 3² = 9."
            },
            {
              "q": "[JEE Main] Find the remainder when 2<sup>50</sup> is divided by 7.",
              "a": "2³ = 8 = 1 + 7, so 2⁵⁰ = 2²·(2³)¹⁶ = 4(1 + 7)¹⁶ ≡ 4 × 1 = 4 (mod 7). Remainder 4."
            },
            {
              "q": "[JEE Main] Find the remainder when 9<sup>50</sup> is divided by 64.",
              "a": "The modulus is 8², so keep two terms: 9⁵⁰ = (1 + 8)⁵⁰ ≡ 1 + 50(8) = 401 (mod 64), and 401 = 64 × 6 + 17. Remainder 17. Keeping one term would have answered 1."
            },
            {
              "q": "[JEE Advanced] If (5 + 2√6)<sup>n</sup> = <i>I</i> + <i>f</i> with 0 ≤ <i>f</i> < 1, find (<i>I</i> + <i>f</i>)(1 − <i>f</i>).",
              "a": "The conjugate is (5 − 2√6)ⁿ, and 5 − 2√6 ≈ 0.101 lies in (0, 1), so f′ = 1 − f. Then the product is (25 − 24)ⁿ = 1."
            }
          ]
        },
        {
          "t": "mcq",
          "q": "To find 8<sup>20</sup> modulo 7, the best split of the base is:",
          "correct": 0,
          "opts": [
            {
              "label": "8 = 7 + 1",
              "nudge": null
            },
            {
              "label": "8 = 2<sup>3</sup>",
              "nudge": "A true identity that never mentions 7. The split has to put the <b>modulus</b> inside the bracket, and this one hides it."
            },
            {
              "label": "8 = 9 − 1",
              "nudge": "9 has no relationship to 7, so nothing in the expansion will vanish. This would be the right instinct for a modulus of 3 or 9."
            },
            {
              "label": "8 = 4 × 2",
              "nudge": "A product, not a sum, so there is no expansion to make and no terms to discard."
            }
          ],
          "solution": "8<sup>20</sup> = (7 + 1)<sup>20</sup>, and every term except the last carries a 7, so 8<sup>20</sup> ≡ 1 (mod 7). Read the divisor first, then choose the split that exposes it."
        },
        {
          "t": "mcq",
          "q": "The remainder when (101)<sup>50</sup> is divided by 100 is:",
          "correct": 1,
          "opts": [
            {
              "label": "0",
              "nudge": "That would say 100 divides an odd number ending in 1. Nothing in the expansion kills the leading 1."
            },
            {
              "label": "1",
              "nudge": null
            },
            {
              "label": "50",
              "nudge": "This keeps the linear term <sup>50</sup>C<sub>1</sub> × 100 and forgets that it is itself a multiple of 100, so it vanishes too."
            },
            {
              "label": "51",
              "nudge": "The same slip as the last option, plus the leading 1 added back. Two errors stacked."
            }
          ],
          "solution": "(101)<sup>50</sup> = (100 + 1)<sup>50</sup> = 1 + <sup>50</sup>C<sub>1</sub>100 + ⋯, and every term after the first carries at least one factor of 100. So the remainder is 1. Note this is the modulus-<i>K</i> case, one surviving term; had the modulus been 10000 you would have needed two."
        },
        {
          "t": "mcq",
          "q": "For positive integers <i>a</i>, <i>b</i> and <i>n</i>, the expression <i>a</i><sup>n</sup> − <i>b</i><sup>n</sup> is always divisible by:",
          "correct": 1,
          "opts": [
            {
              "label": "<i>a</i> + <i>b</i>",
              "nudge": "Only when <i>n</i> is even. Test <i>n</i> = 3, <i>a</i> = 3, <i>b</i> = 1: 26 is not divisible by 4."
            },
            {
              "label": "<i>a</i> − <i>b</i>",
              "nudge": null
            },
            {
              "label": "<i>ab</i>",
              "nudge": "Test <i>a</i> = 3, <i>b</i> = 2, <i>n</i> = 2: 5 is not divisible by 6. There is no reason for the product to appear at all."
            },
            {
              "label": "<i>n</i>",
              "nudge": "The exponent has no reason to divide the result. Test <i>a</i> = 2, <i>b</i> = 1, <i>n</i> = 4: the value is 15, which is not divisible by 4."
            }
          ],
          "solution": "Write <i>a</i> = <i>b</i> + (<i>a</i> − <i>b</i>) and expand <i>a</i><sup>n</sup> = [<i>b</i> + (<i>a</i> − <i>b</i>)]<sup>n</sup>. The leading term is <i>b</i><sup>n</sup>, which the subtraction removes, and every other term carries at least one factor of (<i>a</i> − <i>b</i>)."
        },
        {
          "t": "mcq",
          "q": "The largest positive integer that divides 9<sup>n+1</sup> − 8<i>n</i> − 9 for every positive integer <i>n</i> is:",
          "correct": 2,
          "opts": [
            {
              "label": "8",
              "nudge": "This keeps only the leading 1 of the expansion. It is a true statement and not the largest one, which in a single-answer question scores nothing."
            },
            {
              "label": "9",
              "nudge": "Fixating on the base 9 rather than on the split <i>K</i> = 8. It fails immediately: at <i>n</i> = 1 the value is 64, which is not a multiple of 9."
            },
            {
              "label": "64",
              "nudge": null
            },
            {
              "label": "72",
              "nudge": "8 × 9, manufactured by multiplying the split by the base. 64 is not a multiple of 72, so it cannot divide the <i>n</i> = 1 value."
            }
          ],
          "solution": "Split 9 = 1 + 8 and keep two terms. The head 1 + 8(<i>n</i> + 1) = 8<i>n</i> + 9 is exactly cancelled, and everything left carries 8<sup>2</sup> = 64. At <i>n</i> = 1 the value is 64 itself, so no larger universal divisor exists."
        },
        {
          "t": "mistakes",
          "items": [
            "Choosing a split that does not expose the modulus. For mod 25 use a multiple of 25 such as 50; for last two digits use a multiple of 100. Otherwise <b>nothing vanishes</b> and the method does no work.",
            "Keeping one term when the divisor is a square. Modulo <i>K</i><sup>2</sup> you must keep <b>1 + <i>nK</i></b>. Dropping <i>nK</i> is the single most punished error in this topic.",
            "Splitting with the wrong <i>K</i>. For divisor 64 the split is <b><i>K</i> = 8</b>, not 64: <i>K</i> is the square root of the divisor.",
            "Leaving a negative remainder. <b>−7 mod 25 is 18.</b> Always shift into the range 0 to <i>m</i> − 1 before writing the answer.",
            "Skipping the 0 < <i>p</i> − √<i>q</i> < 1 check, or forgetting to multiply back a factor you split off. Both turn a correct method into a wrong number."
          ]
        },
        {
          "t": "protip",
          "html": "find the smallest power of the base that is ±1 modulo the divisor: that power sets a short cycle, and the exponent reduced modulo the cycle gives the answer fast. 2<sup>3</sup> ≡ 1 mod 7, so powers of 2 repeat with period 3 there. and if a question says “the largest integer that divides … for every <i>n</i>”, assume the answer is the square and confirm by substituting <i>n</i> = 1."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "base = K ± 1, K a multiple of the divisor",
              "note": "expand, then drop every term carrying K"
            },
            {
              "f": "(1 + K)ⁿ ≡ 1 + nK  (mod K²)",
              "note": "one term for K, two for K², three for K³"
            },
            {
              "f": "9<sup>n+1</sup> − 8n − 9 is divisible by 64",
              "note": "and 64 is the largest; check with n = 1"
            },
            {
              "f": "aⁿ − 1 ⋮ (a − 1) · aⁿ − bⁿ ⋮ (a − b)",
              "note": "the two splits worth memorising"
            },
            {
              "f": "I + f = (p + √q)ⁿ, f′ = (p − √q)ⁿ ∈ (0, 1)",
              "note": "then f′ = 1 − f, and (I + f)f′ = (p² − q)ⁿ"
            },
            {
              "f": "last digit = mod 10 · last two digits = mod 100",
              "note": "split so K ends in a zero, e.g. 3⁴ = 1 + 80"
            }
          ],
          "aids": [
            "“make the divisor appear inside the bracket, then everything with it disappears”",
            "“square divisor, two terms”",
            "“K is the square root of the divisor, not the divisor”",
            "“check the conjugate really sits between 0 and 1”"
          ]
        }
      ]
    }
  ]
};

export default ch07Binomial;
