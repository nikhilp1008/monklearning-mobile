/**
 * Chapter 07 · Integrals. Mathematics, Class 12.
 *
 * Restructured from pages 410 to 495 of the Drona Class 12 Mathematics Master
 * Reference into the block system in design_handoff_textbooks/CONTENT_SPEC.md,
 * following math-12-01-relations.ts for voice, density and file shape.
 *
 * At 86 pages this is the longest chapter in the book, and the source is two
 * documents stacked: nine numbered subtopics (410 to 470) and a Round 2
 * Addendum of seven lettered inserts (471 to 495). Six topics is the schema's
 * ceiling, so the nine subtopics are paired by the decision a student actually
 * has to make, and every addendum is folded into the topic it belongs to:
 *
 *   01 Foundations (414)            -> Topic 01
 *   04 Substitution (424)           -> Topic 02, with
 *   05 Trigonometric identities (430)   Addendum D, the half-angle substitution
 *   06 Quadratic forms (435)        -> Topic 03
 *   07 Partial fractions (441)
 *   08 By parts (447)               -> Topic 04, with Addendum E, reduction
 *   02 Definite integrals (452)     -> Topic 05, with Addendum A (moving
 *   09 Definite substitution (458)      limits) and Addendum B (Riemann sums
 *                                       read backwards)
 *   03 The symmetry toolkit (463)   -> Topic 06, with Addendum C (king power
 *                                       plays) and Addendum F (breakpoints)
 *   P  What JEE actually asks (488) -> the hook, the mistakes cards, and the
 *                                      worked examples across all six
 *
 * HOW THE CUTTING WAS DECIDED. Eighty-six pages do not fit in 150 blocks, and
 * the thing that does not survive the squeeze is the second and third example
 * of a technique already shown once. What a student cannot do without here is
 * not another solved integral: it is knowing which technique a given integrand
 * is asking for. So the selection rule was, keep whatever changes a decision,
 * cut whatever only repeats one.
 *
 *   - Reference material is pushed into `defgrid` and `formula` blocks at full
 *     density. All twelve rows of the standard table, all six quadratic
 *     templates, the three root integrals, the four partial-fraction templates
 *     and the three reduction recurrences are carried complete, because a
 *     table is the honest form for a table and it costs one block instead of
 *     ten paragraphs. That buys the prose room to spend itself on triage: the
 *     three-question scan in Topic 03, ILATE in Topic 04, and the six-step
 *     decision tree in Topic 06 are the blocks this chapter is actually for.
 *   - Every subtopic in the source carries eight sections, of which sections 4
 *     to 6 are five worked examples, five practice questions and four MCQs.
 *     Nine subtopics is 126 such items and they are heavily redundant: the
 *     source solves the arctan template four separate times. Each technique
 *     keeps the CBSE-level anchor, the JEE speed trap that names the shortcut,
 *     and the one Advanced item that combines it with something else. The rest
 *     go, except where an item is the only carrier of an idea.
 *   - Two whole ideas are cut rather than thinned. The source's proof of
 *     linearity (page 418) is three lines that restate the sum rule for
 *     derivatives, and the power-rule proof beside it already teaches the move
 *     it depends on, so linearity is stated and its proof dropped. Addendum
 *     C's Tool 3, the reciprocal substitution x -> 1/t, survives only as one
 *     practice item: it is a genuine JEE pattern but it appears once in the
 *     source, has no worked example, and does not change how any other
 *     integral is attacked.
 *   - Walli's formula is kept even though it is a lookup, because Topic 04's
 *     reduction recurrence derives it, and a formula whose proof is in the
 *     chapter is worth more than one quoted from nowhere.
 *
 * NOTATION, settled before writing and checked against the SUPERS and SUBS
 * tables in components/textbook/markup.tsx, which are incomplete: a superscript
 * containing a character they lack silently drops to baseline-height text.
 *
 *   - The integral sign is the literal U+222B and needs no wrapper. It is
 *     outside the emoji-defaulting range in markup.tsx, so it is never
 *     substituted for a pictogram, and it is outside the emoji range in
 *     scripts/validate-chapters.mjs, so it does not trip the checker.
 *   - Every integrand closes with d<i>x</i>, upright d, italic variable.
 *   - Definite limits ride in parentheses immediately after the sign:
 *     ∫(0→π/2), ∫(−a→a), ∫(a→b). They are NOT set as sub and sup on the sign,
 *     which was tried first and rejected: <sup>π</sup> has no raised glyph, so
 *     ∫ from 0 to π rendered as a true subscript zero followed by a
 *     baseline-height pi, which reads as a product. Since π, π/2 and π/4 are
 *     the upper limit of most integrals in this chapter, the sub-sup form
 *     would have degraded on nearly every line. The parenthesised arrow
 *     renders identically everywhere and cannot be misread. Square brackets
 *     were rejected too: Topic 06 needs [x] for the greatest integer.
 *     This is the same trade math-12-04-determinants.ts made when it wrote a
 *     determinant as |a b ; c d|, a plain-text convention adopted because the
 *     medium is a phone and consistency beats typographic fidelity.
 *   - Exponents use <sup> only where every character maps. Nested powers are
 *     written as a single run, so <sup>x3</sup> gives a raised x cubed, which
 *     is how e to the x cubed is set. Fractional exponents are avoided
 *     entirely by writing roots: (x² + 1)√(x² + 1), never (x² + 1)<sup>3/2</sup>,
 *     because the slash has no raised glyph.
 *   - Two consequences of the same gap, both checked by walking every <sup>
 *     and <sub> in this file against those tables. The substitution letter is
 *     `u` in all the prose and all the rules, but wherever it has to appear in
 *     an exponent the local letter is `t` instead, because SUPERS has no `u`
 *     and `e` to the `u` would have rendered as a baseline-height u. And the
 *     table has no `o`, so `sin x` raises cleanly and `cos x` does not: the
 *     substitution MCQ in Topic 02 is the source's page 428 Q4 rather than its
 *     Q2 for that reason alone, since Q2's option list pairs one exponent that
 *     raises with one that does not, and the two would not have lined up.
 *   - Function names stay upright, variables italic, per the house style.
 *
 * FIGURES. Four `diagram` blocks, twelve frames, all of kind `plot`, and the
 * count comes from the source rather than from a quota. The source carries one
 * explicit figure placeholder (Figure 7.1, page 415, the family of parallel
 * curves) and three further ideas it argues visually and cannot draw: signed
 * area against total area, the area function growing with its upper limit, and
 * the symmetry toolkit. Those four are the four figures.
 *
 *   - Topic 01 draws Figure 7.1 as the source specifies it: three vertical
 *     translates of one cubic, a dashed vertical line cutting all three, and
 *     the three tangents at the cuts, visibly parallel.
 *   - Topic 05 uses `areas` twice. Once for signed area on y = x³ − 3x, the
 *     lobe above the axis and the lobe below shaded separately and then
 *     together, which is the picture that stops "area = the integral" from
 *     hardening into a false rule: the two pieces are each 9/4, the integral
 *     is 0 and the area is 9/2. Once for the accumulation function, shaded to
 *     x = 1 then to x = 2, with the next sliver drawn as a `bands` rectangle
 *     of height f(2), which is the First Fundamental Theorem's own argument.
 *   - Topic 06 uses `areas` for all three symmetry moves: an odd integrand on
 *     [−a, a] with its two signed pieces cancelling, an even one with two
 *     equal halves, and the king reflection with f and f(a + b − x) shading
 *     the same total.
 *
 * One figure was wanted and dropped. The periodic property collapses
 * ∫(0→10π)|sin x| into ten copies of one hump, and that is a picture; but
 * `PlotCurve` has `sin` and it has `abs`, and it has no way to compose them,
 * so |sin x| cannot be expressed. Adding a curve kind was out of scope, so the
 * periodic property is carried as a formula and a worked example instead.
 *
 * ERRATA APPLIED: none. The book's errata (pages 830 to 832) lists entries for
 * Chapters 1, 3 and 11 only, and nothing at all for Chapter 7. All five errors
 * below were found by re-deriving the chapter's own results, and in every case
 * the corrected value is what this chapter teaches.
 *
 * ERRORS FOUND IN THE SOURCE
 *
 *   1. Page 421, Subtopic 01 Practice 5. Printed: "The slope of the tangent to
 *      a curve at any point (x, y) is (3x² + 1)/x for x > 0, and the curve
 *      passes through (1, 4)", with the answer "y = x³ + ln x + 3, and at
 *      x = e, y = e³ + 4". The answer does not solve the printed question.
 *      (3x² + 1)/x = 3x + 1/x integrates to y = 3x²/2 + ln x + C, and (1, 4)
 *      forces C = 5/2, so y = 3x²/2 + ln x + 5/2 and y(e) = 3e²/2 + 7/2. The
 *      printed key is internally consistent with a different slope, namely
 *      (3x³ + 1)/x = 3x² + 1/x, which does integrate to x³ + ln x + C with
 *      C = 3 and does give e³ + 4; so the exponent in the numerator was set as
 *      2 where 3 was meant, or the key answers the wrong problem. Either way
 *      the printed pair contradicts itself. This chapter poses the question
 *      with the printed slope and teaches y = 3x²/2 + ln x + 5/2 (Topic 01,
 *      practice), and its `mistakes` card names the internal check that catches
 *      it: differentiate the answer and see whether the slope comes back.
 *
 *   2. Pages 472 to 473, Addendum A Example A.2. "Find the minimum value of
 *      F(x) = ∫(0→x)(t − 1)(t − 2) dt over all real x", answered F(2) = 2/3 and
 *      called the global minimum. F has no global minimum on ℝ. The book's own
 *      supporting line is where it goes wrong: it prints
 *      F(−1) = ∫(0→−1)(t² − 3t + 2) dt = −[−1/3 − 3/2 − 2] = 23/6, inserting a
 *      minus sign that the evaluation does not contain. Evaluating the
 *      antiderivative t³/3 − 3t²/2 + 2t at −1 and subtracting its value at 0
 *      gives −1/3 − 3/2 − 2 = −23/6, so F(−1) = −23/6, which is less than 2/3,
 *      not greater. Structurally: for x < 0, F(x) = −∫(x→0)(t − 1)(t − 2) dt,
 *      and (t − 1)(t − 2) > 0 for every t < 1, so that integral grows without
 *      bound and F(x) → −∞. The true statement is that x = 2 is the unique
 *      local minimum, with F(2) = 2/3, confirmed by F″(2) = 1 > 0. Even
 *      restricted to x ≥ 0 the least value is F(0) = 0, not 2/3. Topic 05
 *      teaches the local minimum and says explicitly that it is not global.
 *
 *   3. Page 485, Addendum E Practice 3. ∫tan⁵x dx printed as
 *      tan⁴x/4 − tan²x/2 + ln|cos x| + C. The sign on the log is wrong. The
 *      addendum's own recurrence, I₅ = tan⁴x/4 − I₃, applied to its own printed
 *      I₃ = tan²x/2 + ln|cos x|, gives tan⁴x/4 − tan²x/2 − ln|cos x|.
 *      Differentiating the printed answer returns tan x(tan⁴x − 2), not tan⁵x;
 *      differentiating the corrected one returns
 *      tan³x sec²x − tan x sec²x + tan x = tan x(tan⁴x − 1 + 1) = tan⁵x.
 *      Topic 04 teaches the corrected antiderivative.
 *
 *   4. Page 490, Addendum P Archetype 4. ∫(0→3/2)[x²] dx is worked as
 *      1(√2 − 1) + 2(√3 − √2) + 3(3/2 − √3) = 7/2 − √2 − √3. The third piece
 *      does not exist: 3/2 = 1.5 and √3 = 1.732, so the upper limit is below
 *      the point where x² reaches 3, and that term has negative length. The
 *      correct split is [0, 1) where [x²] = 0, [1, √2) where it is 1, and
 *      [√2, 3/2] where it is 2, giving (√2 − 1) + 2(3/2 − √2) = 2 − √2.
 *      Topic 06 teaches 2 − √2 as a worked example.
 *
 *   5. Page 493, Addendum P Practice Q4. ∫(0→3/2)[x] dx is worked as
 *      "breakpoints at x = 1, 2", then ∫(0→1)0 + ∫(1→2)1 + ∫(2→3/2)2
 *      = 0 + 1 + 1 = 2. Same disease as error 4: 3/2 < 2, so x = 2 is not a
 *      breakpoint of this interval and the last piece runs backwards. The
 *      interval splits at x = 1 only, and the value is 0 + 1·(3/2 − 1) = 1/2.
 *      Worth recording twice over, because Addendum P opens by promising that
 *      "every answer below has been re-solved and verified", and this is the
 *      set where two of them were not. Topic 06 teaches 1/2.
 *
 * Every other antiderivative printed in the chapter was differentiated and
 * returned its integrand, and every definite value, practice answer and MCQ
 * key was recomputed independently. That includes the four Walli evaluations
 * (5π/256, 3π/16, π/16, 35π/256), the log-sine result −(π/2)ln 2, the two king
 * quotients that both come out π/4, the half-angle answers, and the six
 * variable-limit derivatives of Addendum A. They are all correct as printed.
 *
 * Two places where the source is muddled rather than wrong, and where this
 * chapter rewrites instead of copying: page 486 calls [2, 3) a "half-period"
 * of the fractional part while correctly counting it as a full one, and page
 * 468 explains the |sin x| period trap in a sentence that reads as though 2π
 * gave the wrong answer, when in fact 2π gives 20 as well and only a dropped
 * modulus does the damage. The extraction of the source's `Common Pitfalls`
 * boxes is also structurally damaged throughout, with bullet text landing at
 * the foot of the page with its variables stripped; those bullets were
 * re-authored from the surrounding prose rather than guessed at.
 *
 * The exam hook is authored once, on topic 1, with a bold heading per topic,
 * because the reader renders `hook` only there. Diagram chips and captions
 * render as plain text, not markup, so they carry no inline tags.
 */
import type { Chapter } from '@/lib/textbooks';

export const ch12Integrals: Chapter = {
  "chapter": "07",
  "title": "Integrals",
  "subject": "Mathematics",
  "klass": "Class 12",
  "topics": [
    {
      "n": "01",
      "title": "The Antiderivative and the Standard Table",
      "chip": "01 STANDARD FORMS",
      "kalam": "read the spine, you cannot read the height",
      "blocks": [
        {
          "t": "hook",
          "html": "<b>01 · The Antiderivative and the Standard Table</b><br>The gate every other method walks through. CBSE Boards carry 1 to 2 mark direct integrals and a standing 1 mark question on the constant <i>C</i>. JEE Main and CUET lean on the twelve-row table for fast single-correct items. JEE Advanced never asks it alone, it asks it inside something larger. The whole subtopic is worth about a mark on its own and every mark in the chapter after it. Not in NEET, the medical paper has no mathematics section.<br><br><b>02 · Substitution, and the Trigonometric Rewrite</b><br>The most-used technique in the chapter. Boards carry 2 to 4 marks of direct substitution every year, plus a guaranteed <b>∫sin<sup>2</sup><i>x</i> d<i>x</i></b> or <b>∫cos<sup>2</sup><i>x</i> d<i>x</i></b> for 2 to 3 marks. In the previous-year bank the indefinite questions cluster in Main 2013 to 2020 and are almost always <b>recognition</b>, not grinding: the <i>f</i>′/<i>f</i> logarithm pattern and “a power of a function times its derivative” between them account for most of them.<br><br><b>03 · Quadratic Denominators, Roots and Partial Fractions</b><br>Partial fractions is a guaranteed CBSE question at 3 to 5 marks. The quadratic templates are a Main and CUET staple, typically 1 to 2 questions that are pure formula recognition once you complete the square. JEE Advanced combines them, a linear numerator over the root of a quadratic, and punishes the two setup errors: skipping the division on an improper fraction, and missing the second term of a repeated factor.<br><br><b>04 · Integration by Parts, and Reduction Formulas</b><br>A Board guarantee at 3 to 5 marks: <b>∫<i>x</i> cos <i>x</i></b>, <b>∫ln <i>x</i></b>, <b>∫<i>e</i><sup>x</sup> sin <i>x</i></b>. JEE Main tests the <i>e</i><sup>x</sup>[<i>f</i> + <i>f</i>′] recognition and the cycling integral, and asked ∫cos(ln <i>x</i>) d<i>x</i> in January 2019 for exactly that reason. The reduction recurrences are the Board-favourite “prove and hence evaluate” long question, and they are the honest way to reach ∫sec<sup>5</sup><i>x</i> d<i>x</i>.<br><br><b>05 · The Definite Integral: Signed Area, Two Theorems, Moving Limits</b><br>Boards test direct Fundamental Theorem evaluation and, as a favourite 5 mark first-principles question, the limit of a sum. Differentiating an integral whose limits move is a whole recurring family in Main and Advanced (1997, 1998, 2004, 2009, 2010, 2013, 2015, 2018, 2019, 2020), often dressed as “classify this point”. Reading a limit of a sum <b>backwards</b> as an integral is rarer but live at Advanced level. Recent numerical answers in this chapter land on small clean numbers: 0, 1, 2, 4, 7, 9. An ugly answer usually means a missed symmetry.<br><br><b>06 · The Symmetry Toolkit</b><br>The single most leverage-heavy part of the chapter, and the biggest cluster in the previous-year bank: the properties of definite integrals are roughly half of all definite-integral questions, with the signature move <b>write <i>I</i>, flip the variable, add the two copies, solve 2<i>I</i> = easy</b> appearing in official solutions across four decades. Even and odd deletion on symmetric limits recurs constantly; periodicity with a modulus is a fixture; greatest-integer and fractional-part integrands are reliable. Boards ask a property proof for 2 to 3 marks almost every year."
        },
        {
          "t": "p",
          "html": "You spent last year learning to go one way. Hand differentiation a function and it hands back the rate at which that function changes. This chapter runs the arrow backwards: hand it a rate, and ask for the function the rate came from. Picture the speedometer of a Mumbai local. It tells you the speed at every instant, and you forgot to note which station you started from. The speed at every instant is the derivative. The distance travelled is what you are trying to recover."
        },
        {
          "t": "p",
          "html": "That is why the answer is called an <b>antiderivative</b>, and why it is not unique. Differentiation destroys information. The derivative of <i>x</i><sup>2</sup> + 7 is 2<i>x</i>. So is the derivative of <i>x</i><sup>2</sup> − 100, and of <i>x</i><sup>2</sup> on its own. Run the process backwards from 2<i>x</i> and there is no way to tell which constant was there. It is gone. So you write an unknown <b><i>C</i></b> and say so honestly: ∫2<i>x</i> d<i>x</i> = <i>x</i><sup>2</sup> + <i>C</i>."
        },
        {
          "t": "think",
          "html": "differentiation is like flattening a tall stack of identical books and reading only the title on the spine. every book in the stack sits at a different height, and every one has the same spine. integrating reads the spine back perfectly. it cannot tell you which shelf the book was on. + C means any book in the stack."
        },
        {
          "t": "def",
          "term": "Indefinite integral",
          "html": "If <b>(d/d<i>x</i>)<i>F</i>(<i>x</i>) = <i>f</i>(<i>x</i>)</b>, then <i>F</i> is an antiderivative of <i>f</i>, and you write <b>∫<i>f</i>(<i>x</i>) d<i>x</i> = <i>F</i>(<i>x</i>) + <i>C</i></b>. Here <i>f</i>(<i>x</i>) is the <b>integrand</b>, <i>x</i> is the <b>variable of integration</b>, d<i>x</i> announces which variable you are integrating with respect to, and <i>C</i> is the <b>constant of integration</b>, any real number at all. The whole symbol is read “the integral of <i>f</i>(<i>x</i>) with respect to <i>x</i>”."
        },
        {
          "t": "p",
          "html": "So an indefinite integral is never one curve. It is a <b>family</b> of curves, all the same shape, stacked vertically. Draw <i>F</i>(<i>x</i>), then <i>F</i>(<i>x</i>) + 1, then <i>F</i>(<i>x</i>) + 2, and you get a ladder. Now pick any vertical line <i>x</i> = <i>a</i>. It cuts every member of the family, and at every one of those crossings the tangent has the <b>same slope</b>, namely <i>f</i>(<i>a</i>). That has to be true: sliding a curve up or down never changes how steep it is."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · ONE INTEGRAL, A LADDER OF CURVES",
          "chips": ["the family", "one vertical line", "same slope"],
          "captions": [
            "Three members of the family F(x) + C for C = 1, 0 and minus 1. Identical shape, different height. Every one of them differentiates back to the same f(x).",
            "The line x = 1.5 cuts all three. Three different points, three different heights, and the same x.",
            "The tangents at those three crossings. They are parallel, because the slope there is f(1.5) for every member, whatever C is. That is the picture of the plus C."
          ],
          "frames": [
            {
              "x": [-2.4, 2.4],
              "y": [-3.4, 3.4],
              "curves": [
                { "c": "poly", "coeffs": [0, -1, 0, 0.3333] },
                { "c": "poly", "coeffs": [1, -1, 0, 0.3333], "soft": true },
                { "c": "poly", "coeffs": [-1, -1, 0, 0.3333], "soft": true }
              ],
              "labels": [{ "x": -1.55, "y": 2.6, "text": "F(x) + C" }]
            },
            {
              "x": [-2.4, 2.4],
              "y": [-3.4, 3.4],
              "curves": [
                { "c": "poly", "coeffs": [0, -1, 0, 0.3333] },
                { "c": "poly", "coeffs": [1, -1, 0, 0.3333], "soft": true },
                { "c": "poly", "coeffs": [-1, -1, 0, 0.3333], "soft": true },
                { "c": "vline", "x": 1.5, "dash": true, "soft": true }
              ],
              "points": [
                { "x": 1.5, "y": 0.625 },
                { "x": 1.5, "y": -0.375 },
                { "x": 1.5, "y": -1.375 }
              ],
              "labels": [{ "x": 1.5, "y": 2.9, "text": "x = a" }]
            },
            {
              "x": [-2.4, 2.4],
              "y": [-3.4, 3.4],
              "curves": [
                { "c": "poly", "coeffs": [0, -1, 0, 0.3333] },
                { "c": "poly", "coeffs": [1, -1, 0, 0.3333], "soft": true },
                { "c": "poly", "coeffs": [-1, -1, 0, 0.3333], "soft": true },
                { "c": "vline", "x": 1.5, "dash": true, "soft": true }
              ],
              "segments": [
                { "from": [1.0, 0.0], "to": [2.0, 1.25] },
                { "from": [1.0, -1.0], "to": [2.0, 0.25] },
                { "from": [1.0, -2.0], "to": [2.0, -0.75] }
              ],
              "labels": [{ "x": -1.2, "y": 2.6, "text": "slope f(a) on all three" }]
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "THE TWO OPERATIONS, MUTUALLY INVERSE",
          "tag": "inverse up to a constant, never exactly",
          "main": "(d/d<i>x</i>)(∫<i>f</i>(<i>x</i>) d<i>x</i>) = <i>f</i>(<i>x</i>)   ·   ∫<i>f</i>′(<i>x</i>) d<i>x</i> = <i>f</i>(<i>x</i>) + <i>C</i>",
          "legend": [
            "read left to right, integrating then differentiating returns exactly what you started with, with nothing lost",
            "read the other way, differentiating then integrating returns the function plus an unknown constant, because the differentiating step threw one away",
            "so the two are inverses <b>modulo a constant</b>, and that asymmetry is the whole reason the <i>C</i> exists"
          ],
          "note": "An antiderivative behaves nicely only where <i>f</i> is continuous on the interval you care about, and even then a formula is not guaranteed: <i>e</i><sup>−x2</sup> is perfectly continuous and has no antiderivative expressible in elementary functions at all."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE POWER RULE, PROVED BY DIFFERENTIATING IT, TAP A LINE",
          "steps": [
            {
              "eq": "claim: ∫<i>x</i><sup>n</sup> d<i>x</i> = <i>x</i><sup>n+1</sup>/(<i>n</i> + 1) + <i>C</i>, for <i>n</i> ≠ −1",
              "why": "There is no derivation of integration from first principles the way there is for a derivative. Integration is defined as the reverse of differentiation, so the only way to prove a rule is to differentiate the proposed answer and see whether the integrand comes back."
            },
            {
              "eq": "(d/d<i>x</i>)[<i>x</i><sup>n+1</sup>/(<i>n</i> + 1) + <i>C</i>]",
              "why": "Differentiate the right-hand side. The constant contributes nothing, which is the point: any value of C survives this test, so every member of the family is a valid antiderivative."
            },
            {
              "eq": "= [1/(<i>n</i> + 1)] · (<i>n</i> + 1)<i>x</i><sup>n</sup> + 0",
              "why": "Power rule for derivatives on the numerator, with 1/(n + 1) riding along as a constant multiplier."
            },
            {
              "eq": "= <i>x</i><sup>n</sup>, the integrand. Proved.",
              "why": "The derivative returns exactly the integrand, so the proposed function is an antiderivative and the rule holds."
            },
            {
              "eq": "why <i>n</i> ≠ −1: at <i>n</i> = −1 the divisor <i>n</i> + 1 is 0",
              "why": "The formula is meaningless there, and no amount of algebra rescues it. That single case is handled separately, by its own row of the table: the integral of 1/x is ln|x| + C."
            }
          ]
        },
        {
          "t": "defgrid",
          "title": "The table, part one: powers, logs, exponentials",
          "rows": [
            { "k": "∫<i>x</i><sup>n</sup> d<i>x</i>", "v": "<i>x</i><sup>n+1</sup>/(<i>n</i> + 1) + <i>C</i>, for <i>n</i> ≠ −1" },
            { "k": "∫(1/<i>x</i>) d<i>x</i>", "v": "ln|<i>x</i>| + <i>C</i>. The modulus is required, not decoration: 1/<i>x</i> is defined for negative <i>x</i> too" },
            { "k": "∫<i>e</i><sup>x</sup> d<i>x</i>", "v": "<i>e</i><sup>x</sup> + <i>C</i>, the one function that is its own antiderivative" },
            { "k": "∫<i>a</i><sup>x</sup> d<i>x</i>", "v": "<i>a</i><sup>x</sup>/ln <i>a</i> + <i>C</i>, for <i>a</i> > 0 and <i>a</i> ≠ 1" }
          ]
        },
        {
          "t": "defgrid",
          "title": "The table, part two: the six trigonometric rows",
          "rows": [
            { "k": "∫cos <i>x</i> d<i>x</i>", "v": "sin <i>x</i> + <i>C</i>, the one with the plus sign" },
            { "k": "∫sin <i>x</i> d<i>x</i>", "v": "−cos <i>x</i> + <i>C</i>. The minus lives here, and nowhere else in the pair" },
            { "k": "∫sec<sup>2</sup><i>x</i> d<i>x</i>", "v": "tan <i>x</i> + <i>C</i>" },
            { "k": "∫csc<sup>2</sup><i>x</i> d<i>x</i>", "v": "−cot <i>x</i> + <i>C</i>" },
            { "k": "∫sec <i>x</i> tan <i>x</i> d<i>x</i>", "v": "sec <i>x</i> + <i>C</i>" },
            { "k": "∫csc <i>x</i> cot <i>x</i> d<i>x</i>", "v": "−csc <i>x</i> + <i>C</i>. The co-functions all carry the minus" }
          ]
        },
        {
          "t": "formula",
          "kicker": "THE TABLE, PART THREE: THE TWO INVERSE-TRIG ROWS",
          "tag": "no 1/a factor on the arcsine, ever",
          "main": "∫d<i>x</i>/√(1 − <i>x</i><sup>2</sup>) = sin<sup>−1</sup><i>x</i> + <i>C</i>   ·   ∫d<i>x</i>/(1 + <i>x</i><sup>2</sup>) = tan<sup>−1</sup><i>x</i> + <i>C</i>"
          ,
          "legend": [
            "a root in the denominator with a minus inside gives an <b>arcsine</b>; no root and a plus gives an <b>arctangent</b>",
            "these are the unit-scale versions; topic 03 generalises both to <i>a</i><sup>2</sup> in place of 1, and that is where the 1/<i>a</i> factor appears on one of them and not on the other",
            "the entire table is self-verifying: differentiate the right column and if the integrand does not come back, the row is wrong"
          ],
          "note": "Twelve rows in all. There is no clever way to learn them, and there is no need for one, because every single one is a derivative you already know, read backwards."
        },
        {
          "t": "formula",
          "kicker": "LINEARITY, THE WORKHORSE",
          "tag": "sums and constant multiples only",
          "main": "∫[<i>f</i>(<i>x</i>) + <i>g</i>(<i>x</i>)] d<i>x</i> = ∫<i>f</i>(<i>x</i>) d<i>x</i> + ∫<i>g</i>(<i>x</i>) d<i>x</i>   ·   ∫<i>k f</i>(<i>x</i>) d<i>x</i> = <i>k</i>∫<i>f</i>(<i>x</i>) d<i>x</i>",
          "legend": [
            "both follow in one line from the matching derivative rules, exactly the way the power rule did: differentiate the right side and the left integrand comes back",
            "<i>k</i> must be a <b>constant</b>. A factor containing <i>x</i> cannot be pulled through an integral sign",
            "and there is <b>no product rule and no quotient rule</b> for integrals: ∫<i>fg</i> is not ∫<i>f</i> · ∫<i>g</i>, and that mistake is worth naming out loud because it is the most confidently made error in the chapter"
          ],
          "note": "Split a sum into three integrals and you might write <i>C</i><sub>1</sub> + <i>C</i><sub>2</sub> + <i>C</i><sub>3</sub>. Do not. The sum of arbitrary constants is one arbitrary constant, so a single <i>C</i> at the very end carries the whole family."
        },
        {
          "t": "proc",
          "title": "Direct integration, when no method is needed",
          "steps": [
            "<b>Simplify first, integrate second.</b> Expand brackets, split a fraction term by term, cancel, rewrite roots as powers. Algebra is cheaper than calculus and it is almost always the whole job.",
            "<b>Split with linearity.</b> Break the sum into separate integrals and pull every constant multiplier out in front.",
            "<b>Use a trigonometric identity if the shape needs one.</b> cos 2<i>x</i> = cos<sup>2</sup><i>x</i> − sin<sup>2</sup><i>x</i> and sin<sup>2</sup><i>x</i> = (1 − cos 2<i>x</i>)/2 turn awkward products into integrable sums.",
            "<b>Apply the table term by term.</b> Every surviving piece should now be a row.",
            "<b>Add one <i>C</i>, at the very end.</b> One for the whole answer, not one per term.",
            "<b>Differentiate your answer.</b> If it does not return the integrand, you have a mistake, and you have it now rather than in the results."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD PATTERN",
          "q": "Evaluate ∫(3<i>x</i><sup>2</sup> + 4/<i>x</i> − 5 sec<sup>2</sup><i>x</i>) d<i>x</i>.",
          "steps": [
            "Split with linearity and pull the constants out: 3∫<i>x</i><sup>2</sup> d<i>x</i> + 4∫(1/<i>x</i>) d<i>x</i> − 5∫sec<sup>2</sup><i>x</i> d<i>x</i>.",
            "Table rows one, two and seven, in that order.",
            "3 · <i>x</i><sup>3</sup>/3 + 4 ln|<i>x</i>| − 5 tan <i>x</i> + <i>C</i>.",
            "Check: differentiate. 3<i>x</i><sup>2</sup> + 4/<i>x</i> − 5 sec<sup>2</sup><i>x</i>. It comes back."
          ],
          "ans": "<i>x</i><sup>3</sup> + 4 ln|<i>x</i>| − 5 tan <i>x</i> + <i>C</i>. One <i>C</i>, and a modulus inside the log."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Evaluate ∫(<i>x</i><sup>2</sup> + 2<i>x</i> + 5)/<i>x</i> d<i>x</i> in under thirty seconds.",
          "steps": [
            "The trap is reaching for a substitution. There is nothing to substitute.",
            "A polynomial sitting over a single monomial: divide through, term by term. (<i>x</i><sup>2</sup> + 2<i>x</i> + 5)/<i>x</i> = <i>x</i> + 2 + 5/<i>x</i>.",
            "Now all three are table rows: ∫(<i>x</i> + 2 + 5/<i>x</i>) d<i>x</i>."
          ],
          "ans": "<i>x</i><sup>2</sup>/2 + 2<i>x</i> + 5 ln|<i>x</i>| + <i>C</i>. <b>Speed lesson:</b> polynomial over a monomial, divide first, always."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Evaluate ∫cos 2<i>x</i>/(cos<sup>2</sup><i>x</i> sin<sup>2</sup><i>x</i>) d<i>x</i>.",
          "steps": [
            "Use cos 2<i>x</i> = cos<sup>2</sup><i>x</i> − sin<sup>2</sup><i>x</i> on the numerator, then split over the denominator.",
            "cos<sup>2</sup><i>x</i>/(cos<sup>2</sup><i>x</i> sin<sup>2</sup><i>x</i>) − sin<sup>2</sup><i>x</i>/(cos<sup>2</sup><i>x</i> sin<sup>2</sup><i>x</i>) = 1/sin<sup>2</sup><i>x</i> − 1/cos<sup>2</sup><i>x</i>.",
            "Those are csc<sup>2</sup><i>x</i> and sec<sup>2</sup><i>x</i>, rows eight and seven.",
            "∫(csc<sup>2</sup><i>x</i> − sec<sup>2</sup><i>x</i>) d<i>x</i> = −cot <i>x</i> − tan <i>x</i> + <i>C</i>."
          ],
          "ans": "−cot <i>x</i> − tan <i>x</i> + <i>C</i>. The entire difficulty was algebraic. No method beyond the table was used at any point."
        },
        {
          "t": "p",
          "html": "One more idea before the table becomes routine, and it is the one that connects this chapter to differential equations later in the year. An indefinite integral hands you a whole family. Give it <b>one extra fact</b>, a single point the curve passes through, and the family collapses to one curve. That is what the phrase “the curve passes through (1, 4)” is doing in an exam question: it is not decoration, it is the equation that pins <i>C</i>."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · RECOVERING A FUNCTION FROM ITS SLOPE, TAP A LINE",
          "steps": [
            {
              "eq": "given <i>f</i>′(<i>x</i>) = (<i>x</i> + 1)(<i>x</i> − 1)/<i>x</i> for <i>x</i> > 0, and <i>f</i>(1) = 3/2. Find <i>f</i>(<i>e</i>).",
              "why": "The question hides integration inside a recover-the-function problem. Nothing here is a new technique; the only new thing is that a boundary condition is supplied and has to be used."
            },
            {
              "eq": "<i>f</i>′(<i>x</i>) = (<i>x</i><sup>2</sup> − 1)/<i>x</i> = <i>x</i> − 1/<i>x</i>",
              "why": "Simplify before integrating. Polynomial over a monomial, divide through, exactly as in the speed-trap example."
            },
            {
              "eq": "<i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup>/2 − ln|<i>x</i>| + <i>C</i>",
              "why": "Two table rows and one C. At this point f is a whole family of curves, all of them consistent with the given slope."
            },
            {
              "eq": "3/2 = 1/2 − ln 1 + <i>C</i> ⇒ <i>C</i> = 1",
              "why": "Substitute the point. ln 1 = 0, so the equation is 3/2 = 1/2 + C. This single line is what selects one curve out of infinitely many."
            },
            {
              "eq": "<i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup>/2 − ln <i>x</i> + 1, so <i>f</i>(<i>e</i>) = <i>e</i><sup>2</sup>/2",
              "why": "The modulus can be dropped because the domain is x > 0. Then f(e) = e squared over 2, minus ln e which is 1, plus 1, and the last two cancel."
            }
          ]
        },
        {
          "t": "mcq",
          "q": "∫(sin <i>x</i> + 1/<i>x</i>) d<i>x</i> equals:",
          "opts": [
            { "label": "cos <i>x</i> + ln|<i>x</i>| + <i>C</i>", "nudge": "The sign on the sine integral is flipped. ∫sin <i>x</i> d<i>x</i> = −cos <i>x</i>, and ∫cos <i>x</i> d<i>x</i> = +sin <i>x</i>. The minus belongs to the sine." },
            { "label": "−cos <i>x</i> + ln|<i>x</i>| + <i>C</i>", "nudge": null },
            { "label": "−cos <i>x</i> + 1/<i>x</i><sup>2</sup> + <i>C</i>", "nudge": "This applies the power rule to 1/<i>x</i>, which is <i>x</i><sup>−1</sup>, the one exponent the power rule forbids. At <i>n</i> = −1 the divisor <i>n</i> + 1 is zero." },
            { "label": "cos <i>x</i> − ln|<i>x</i>| + <i>C</i>", "nudge": "Both signs are wrong at once. Differentiate it and you get −sin <i>x</i> − 1/<i>x</i>, which is the negative of the integrand." }
          ],
          "correct": 1,
          "solution": "Row six gives −cos <i>x</i> and row two gives ln|<i>x</i>|. Differentiating −cos <i>x</i> + ln|<i>x</i>| returns sin <i>x</i> + 1/<i>x</i> exactly."
        },
        {
          "t": "mcq",
          "q": "If <i>F</i>(<i>x</i>) is an antiderivative of <i>f</i>(<i>x</i>), which statement is <b>always</b> true?",
          "opts": [
            { "label": "<i>F</i>(<i>x</i>) is unique", "nudge": "There are infinitely many, one for every real <i>C</i>, and they all differ by a constant. Uniqueness is exactly what integration cannot give you." },
            { "label": "<i>F</i>′(<i>x</i>) = <i>f</i>(<i>x</i>)", "nudge": null },
            { "label": "<i>F</i>(0) = 0", "nudge": "Nothing in the definition imposes a value anywhere. That would be an extra boundary condition, and if you had one you would use it to pin <i>C</i>." },
            { "label": "∫<i>f</i>(<i>x</i>) d<i>x</i> = <i>F</i>(<i>x</i>), with no constant", "nudge": "This drops the <i>C</i>, which changes the answer from a family of functions to one specific function. That is not a small slip, it is a different claim." }
          ],
          "correct": 1,
          "solution": "That is the definition, and it is the only thing the definition asserts. Everything else about <i>F</i> is up for grabs."
        },
        {
          "t": "mcq",
          "q": "The family of curves given by ∫2<i>x</i> d<i>x</i> has the property that along any vertical line <i>x</i> = <i>a</i>, the tangents to all members are:",
          "opts": [
            { "label": "perpendicular", "nudge": "Equal slopes are never perpendicular. Perpendicular would need the product of the slopes to be −1, and here all the slopes are the same number." },
            { "label": "parallel", "nudge": null },
            { "label": "coincident", "nudge": "Coincident tangents would need the curves themselves to coincide. They are vertically shifted copies, so the tangent lines are parallel but distinct." },
            { "label": "of slope zero", "nudge": "The slope is 2<i>a</i>, which is zero only when <i>a</i> = 0. True at one line, false at every other, which is what makes it tempting." }
          ],
          "correct": 1,
          "solution": "The integral is <i>x</i><sup>2</sup> + <i>C</i>, so the slope at <i>x</i> = <i>a</i> is 2<i>a</i> for every member, whatever <i>C</i> is. Same slope, different heights: parallel."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "Evaluate ∫(2√<i>x</i> + 3/<i>x</i><sup>2</sup> − cos <i>x</i>) d<i>x</i>.",
              "a": "(4/3)<i>x</i>√<i>x</i> − 3/<i>x</i> − sin <i>x</i> + <i>C</i>. Rewrite √<i>x</i> as <i>x</i> to the half and 3/<i>x</i><sup>2</sup> as 3<i>x</i><sup>−2</sup> first, then it is three table rows."
            },
            {
              "q": "Evaluate ∫(<i>x</i><sup>4</sup> − 1)/(<i>x</i><sup>2</sup> − 1) d<i>x</i>.",
              "a": "<i>x</i><sup>3</sup>/3 + <i>x</i> + <i>C</i>. Factor before you integrate: the integrand is just <i>x</i><sup>2</sup> + 1."
            },
            {
              "q": "Evaluate ∫(2<i>x</i><sup>3</sup> − 3<i>x</i> + 7)/<i>x</i><sup>2</sup> d<i>x</i>.",
              "a": "<i>x</i><sup>2</sup> − 3 ln|<i>x</i>| − 7/<i>x</i> + <i>C</i>. Split into 2<i>x</i> − 3/<i>x</i> + 7<i>x</i><sup>−2</sup> and take the three rows."
            },
            {
              "q": "The slope of the tangent to a curve at (<i>x</i>, <i>y</i>) is (3<i>x</i><sup>2</sup> + 1)/<i>x</i> for <i>x</i> > 0, and the curve passes through (1, 4). Find <i>y</i>, and <i>y</i> at <i>x</i> = <i>e</i>.",
              "a": "<i>y</i> = 3<i>x</i><sup>2</sup>/2 + ln <i>x</i> + 5/2, and <i>y</i>(<i>e</i>) = 3<i>e</i><sup>2</sup>/2 + 7/2. Divide first: the slope is 3<i>x</i> + 1/<i>x</i>. Integrate to 3<i>x</i><sup>2</sup>/2 + ln <i>x</i> + <i>C</i>, then 4 = 3/2 + 0 + <i>C</i> gives <i>C</i> = 5/2. <b>The book prints <i>y</i> = <i>x</i><sup>3</sup> + ln <i>x</i> + 3 here, which answers a different slope, (3<i>x</i><sup>3</sup> + 1)/<i>x</i>. Differentiate the printed answer and you get 3<i>x</i><sup>2</sup> + 1/<i>x</i>, not the slope you were given.</b>"
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Dropping the <i>C</i>.</b> On an indefinite integral this is not a missing decoration, it is a wrong answer: it claims one function where the truth is a family. It is the most penalised error in the whole chapter and the easiest to never make. Write it the instant you finish.",
            "<b>Using the power rule at <i>n</i> = −1.</b> ∫(1/<i>x</i>) d<i>x</i> is not <i>x</i><sup>0</sup>/0 and it is not −1/<i>x</i><sup>2</sup>. It is ln|<i>x</i>| + <i>C</i>, a separate memorised row, because the power rule's divisor is zero exactly there.",
            "<b>Dropping the modulus in ln|<i>x</i>|.</b> The integrand 1/<i>x</i> is perfectly well defined for negative <i>x</i>, so an answer of ln <i>x</i> is undefined on half the domain the question gave you.",
            "<b>Sign-slipping the sine and cosine pair.</b> ∫sin <i>x</i> d<i>x</i> = −cos <i>x</i>, and ∫cos <i>x</i> d<i>x</i> = +sin <i>x</i>. Every co-function integral carries the minus; the plain ones do not.",
            "<b>Assuming ∫(<i>f g</i>) = ∫<i>f</i> · ∫<i>g</i>.</b> Linearity covers sums and constant multiples and stops there. Products and quotients have their own methods, and they are the next four topics."
          ]
        },
        {
          "t": "protip",
          "html": "integration is the one operation in the whole syllabus you can check completely, by yourself, in ten seconds. differentiate your answer. if it is not the integrand, you have a mistake and you have it before the examiner does. this single habit removes almost every sign error and almost every coefficient error you would otherwise hand in."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "(d/d<i>x</i>)<i>F</i> = <i>f</i> ⟺ ∫<i>f</i> d<i>x</i> = <i>F</i> + <i>C</i>", "note": "the definition, and the plus C is part of it" },
            { "f": "∫<i>x</i><sup>n</sup> d<i>x</i> = <i>x</i><sup>n+1</sup>/(<i>n</i> + 1) + <i>C</i>, <i>n</i> ≠ −1", "note": "and the excluded case is ln|x| + C, on its own row" },
            { "f": "∫<i>k</i><sub>1</sub><i>f</i> + <i>k</i><sub>2</sub><i>g</i> = <i>k</i><sub>1</sub>∫<i>f</i> + <i>k</i><sub>2</sub>∫<i>g</i>", "note": "sums and constant multiples only, never products" },
            { "f": "sin → −cos, cos → +sin, sec<sup>2</sup> → tan, csc<sup>2</sup> → −cot", "note": "the co-functions carry the minus" },
            { "f": "one boundary point ⇒ one value of <i>C</i>", "note": "a family collapses to a single curve" }
          ],
          "aids": [
            "co goes positive: the cosine integral keeps the plus, the sine integral carries the minus",
            "one over x is the lonely log, it never obeys the power rule",
            "simplify, split, identify, integrate, one C, differentiate to verify",
            "no C, no marks"
          ]
        }
      ]
    },
    {
      "n": "02",
      "title": "Substitution, and the Trigonometric Rewrite",
      "chip": "02 SUBSTITUTION",
      "kalam": "rename a chunk, integrate, rename it back",
      "blocks": [
        {
          "t": "p",
          "html": "The standard table can only integrate what already matches a row. Hand it ∫2<i>x</i> cos(<i>x</i><sup>2</sup>) d<i>x</i> and it has nothing to offer: there is no row for cos of <i>x</i> squared. Substitution is the move that <b>reshapes</b> an unfamiliar integral into a familiar one, by temporarily renaming a chunk of it. It is the most-used technique in the chapter, and almost every non-trivial integral you meet begins here."
        },
        {
          "t": "p",
          "html": "It is the chain rule read backwards. The chain rule says (d/d<i>x</i>)<i>F</i>(<i>g</i>(<i>x</i>)) = <i>F</i>′(<i>g</i>(<i>x</i>)) · <i>g</i>′(<i>x</i>). So if an integrand has the shape <b>(something of <i>g</i>(<i>x</i>)) times <i>g</i>′(<i>x</i>)</b>, it is already the derivative of something, and substitution is how you find what. Peel off the inner function, call it <i>u</i>, and the integral becomes an ordinary one in <i>u</i>. In ∫2<i>x</i> cos(<i>x</i><sup>2</sup>) d<i>x</i> the inner function is <i>x</i><sup>2</sup> and its derivative 2<i>x</i> is sitting right there in front."
        },
        {
          "t": "think",
          "html": "it is like converting rupees to another currency to shop abroad, then converting back at the end. u = g(x) is the conversion. you switch to the u world where the integral is easy, do the shopping, then convert the answer back to the x world. du = g'(x) dx is the exchange rate, and forgetting it is like ignoring the rate and getting the price catastrophically wrong."
        },
        {
          "t": "formula",
          "kicker": "THE SUBSTITUTION RULE",
          "tag": "the integral must become purely in u",
          "main": "if <i>u</i> = <i>g</i>(<i>x</i>) then d<i>u</i> = <i>g</i>′(<i>x</i>) d<i>x</i>, and ∫<i>f</i>(<i>g</i>(<i>x</i>)) <i>g</i>′(<i>x</i>) d<i>x</i> = ∫<i>f</i>(<i>u</i>) d<i>u</i>",
          "legend": [
            "the d<i>u</i> = <i>g</i>′(<i>x</i>) d<i>x</i> half is not bookkeeping, it is the whole content of the rule: you are trading one differential for another and the exchange rate is the derivative",
            "if any <i>x</i> is still standing after the substitution, the substitution was the wrong one; go back and pick a different inner function",
            "substitution only helps when <i>g</i>′(<i>x</i>), or a constant multiple of it, is <b>actually present</b> in the integrand. If it is not there, this method stalls and you need a different one"
          ],
          "note": "For an indefinite integral, always convert the answer back to <i>x</i>. Leaving it in <i>u</i> answers a question nobody asked. A definite integral has a second option, changing the limits instead, and topic 05 handles that."
        },
        {
          "t": "formula",
          "kicker": "THE PATTERN THAT PAYS FOR ITSELF",
          "tag": "derivative on top, log on the bottom",
          "main": "∫[<i>f</i>′(<i>x</i>)/<i>f</i>(<i>x</i>)] d<i>x</i> = ln|<i>f</i>(<i>x</i>)| + <i>C</i>",
          "legend": [
            "a numerator that is the derivative of the denominator integrates to the log of the denominator, and nothing else has to be written down",
            "if the numerator is a <b>constant multiple</b> of the derivative, pull the constant out first: ∫<i>x</i>/(<i>x</i><sup>2</sup> + 4) d<i>x</i> is half of ∫2<i>x</i>/(<i>x</i><sup>2</sup> + 4) d<i>x</i>, so the answer carries a 1/2",
            "the companion pattern is the <b>power chain</b>: ∫[<i>f</i>(<i>x</i>)]<sup>n</sup> <i>f</i>′(<i>x</i>) d<i>x</i> = [<i>f</i>(<i>x</i>)]<sup>n+1</sup>/(<i>n</i> + 1) + <i>C</i>, for <i>n</i> ≠ −1, which is the same idea with a power instead of a reciprocal"
          ],
          "note": "In the previous-year bank these two patterns between them account for most of the indefinite questions asked in JEE Main since 2013. They are recognition, not computation. Train the reflex: <b>is the top the derivative of the bottom?</b>"
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE FOUR RESULTS SUBSTITUTION BUYS YOU, TAP A LINE",
          "steps": [
            {
              "eq": "∫tan <i>x</i> d<i>x</i> = ∫(sin <i>x</i>/cos <i>x</i>) d<i>x</i>",
              "why": "Write the tangent out. Now look at the shape: the numerator is, up to a sign, the derivative of the denominator. That is the f-prime over f pattern in disguise."
            },
            {
              "eq": "<i>u</i> = cos <i>x</i>, d<i>u</i> = −sin <i>x</i> d<i>x</i> ⇒ ∫(−d<i>u</i>/<i>u</i>)",
              "why": "The minus comes out of the exchange rate, not out of nowhere. This is exactly where the sign on the tangent integral is decided."
            },
            {
              "eq": "= −ln|<i>u</i>| + <i>C</i> = −ln|cos <i>x</i>| + <i>C</i> = ln|sec <i>x</i>| + <i>C</i>",
              "why": "Minus a log is the log of the reciprocal, and the reciprocal of cosine is secant. Both forms are correct and both are accepted; the secant form is the one usually quoted."
            },
            {
              "eq": "∫sec <i>x</i> d<i>x</i>: multiply top and bottom by (sec <i>x</i> + tan <i>x</i>)",
              "why": "A trick with a reason. The derivative of sec x + tan x is sec x tan x + sec squared x, which is exactly sec x times (sec x + tan x). So multiplying by that factor manufactures the f-prime over f shape."
            },
            {
              "eq": "= ∫[(sec<sup>2</sup><i>x</i> + sec <i>x</i> tan <i>x</i>)/(sec <i>x</i> + tan <i>x</i>)] d<i>x</i> = ln|sec <i>x</i> + tan <i>x</i>| + <i>C</i>",
              "why": "Numerator is now the derivative of the denominator, so the log rule finishes it in one line. The cosecant result is the same argument with csc x minus cot x."
            }
          ]
        },
        {
          "t": "defgrid",
          "title": "Four results to hold in memory",
          "rows": [
            { "k": "∫tan <i>x</i> d<i>x</i>", "v": "ln|sec <i>x</i>| + <i>C</i>, which is the same as −ln|cos <i>x</i>| + <i>C</i>" },
            { "k": "∫cot <i>x</i> d<i>x</i>", "v": "ln|sin <i>x</i>| + <i>C</i>. No minus here, and that asymmetry against the tangent is the sign students slip on" },
            { "k": "∫sec <i>x</i> d<i>x</i>", "v": "ln|sec <i>x</i> + tan <i>x</i>| + <i>C</i>" },
            { "k": "∫csc <i>x</i> d<i>x</i>", "v": "ln|csc <i>x</i> − cot <i>x</i>| + <i>C</i>, minus inside, matching the co-function pattern" }
          ]
        },
        {
          "t": "proc",
          "title": "The substitution workflow",
          "steps": [
            "<b>Spot the inner function.</b> Look for a composite chunk <i>g</i>(<i>x</i>) whose derivative also appears, up to a constant. The usual signals: something under a root, in an exponent, inside a trigonometric or log function, or sitting in a denominator.",
            "<b>Set <i>u</i> = <i>g</i>(<i>x</i>) and compute d<i>u</i> = <i>g</i>′(<i>x</i>) d<i>x</i>.</b> Write both lines down before touching the integral.",
            "<b>Replace every <i>x</i>-piece.</b> The <i>g</i>(<i>x</i>) becomes <i>u</i>, the <i>g</i>′(<i>x</i>) d<i>x</i> becomes d<i>u</i>. If a single <i>x</i> survives, stop: the substitution is wrong.",
            "<b>Integrate in <i>u</i></b> using the standard table.",
            "<b>Back-substitute <i>u</i> = <i>g</i>(<i>x</i>)</b> and add <i>C</i>.",
            "<b>Differentiate to check.</b> The chain rule should hand the integrand straight back."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD PATTERN",
          "q": "Evaluate ∫2<i>x</i>√(<i>x</i><sup>2</sup> + 1) d<i>x</i>.",
          "steps": [
            "Inner function <i>u</i> = <i>x</i><sup>2</sup> + 1, so d<i>u</i> = 2<i>x</i> d<i>x</i>, and the 2<i>x</i> d<i>x</i> is already there.",
            "∫√<i>u</i> d<i>u</i>. Written as a power that is <i>u</i> to the half, and the power rule sends it to <i>u</i> to the three halves divided by 3/2.",
            "= (2/3)<i>u</i>√<i>u</i>.",
            "Back-substitute: (2/3)(<i>x</i><sup>2</sup> + 1)√(<i>x</i><sup>2</sup> + 1)."
          ],
          "ans": "(2/3)(<i>x</i><sup>2</sup> + 1)√(<i>x</i><sup>2</sup> + 1) + <i>C</i>. Differentiate it: the chain rule gives 2<i>x</i>√(<i>x</i><sup>2</sup> + 1)."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Evaluate ∫<i>x</i>/(<i>x</i><sup>2</sup> + 4) d<i>x</i> in seconds.",
          "steps": [
            "Derivative of the denominator is 2<i>x</i>. The numerator is <i>x</i>, which is half of it.",
            "So write (1/2)∫2<i>x</i>/(<i>x</i><sup>2</sup> + 4) d<i>x</i> and read the log straight off.",
            "No formal <i>u</i> is needed. The denominator is positive everywhere, so the modulus can be dropped here."
          ],
          "ans": "(1/2) ln(<i>x</i><sup>2</sup> + 4) + <i>C</i>. <b>Speed lesson:</b> numerator a constant times the denominator's derivative means the answer is (that constant) × ln(denominator). Write it immediately."
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD PATTERN",
          "q": "Evaluate ∫3<i>x</i><sup>2</sup> <i>e</i><sup>x3</sup> d<i>x</i>.",
          "steps": [
            "The exponent is <i>x</i><sup>3</sup> and its derivative is 3<i>x</i><sup>2</sup>, which is exactly the factor in front. The integrand was built for this.",
            "<i>t</i> = <i>x</i><sup>3</sup>, d<i>t</i> = 3<i>x</i><sup>2</sup> d<i>x</i>.",
            "∫<i>e</i><sup>t</sup> d<i>t</i> = <i>e</i><sup>t</sup> + <i>C</i>."
          ],
          "ans": "<i>e</i><sup>x3</sup> + <i>C</i>. Anything of the form (derivative of the exponent) times <i>e</i> to that exponent integrates to <i>e</i> to the exponent, full stop."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "Evaluate ∫d<i>x</i>/(1 + √<i>x</i>).",
          "steps": [
            "The root blocks every standard form and no inner derivative is present, so substitute the root <b>away</b>: let <i>x</i> = <i>t</i><sup>2</sup> with <i>t</i> ≥ 0, so d<i>x</i> = 2<i>t</i> d<i>t</i> and √<i>x</i> = <i>t</i>.",
            "∫2<i>t</i>/(1 + <i>t</i>) d<i>t</i>. This is an improper fraction, so split it before integrating: <i>t</i>/(1 + <i>t</i>) = 1 − 1/(1 + <i>t</i>).",
            "2∫[1 − 1/(1 + <i>t</i>)] d<i>t</i> = 2<i>t</i> − 2 ln|1 + <i>t</i>|.",
            "Back-substitute <i>t</i> = √<i>x</i>, and 1 + √<i>x</i> > 0 so the modulus goes."
          ],
          "ans": "2√<i>x</i> − 2 ln(1 + √<i>x</i>) + <i>C</i>. <b>Two ideas worth keeping:</b> a rationalising substitution kills a root even when no derivative is present, and splitting an improper fraction as 1 minus something is a move you will need again in topic 03."
        },
        {
          "t": "mcq",
          "q": "∫(2<i>x</i> + 3)/(<i>x</i><sup>2</sup> + 3<i>x</i> + 5) d<i>x</i> equals:",
          "opts": [
            { "label": "ln|<i>x</i><sup>2</sup> + 3<i>x</i> + 5| + <i>C</i>", "nudge": null },
            { "label": "(1/2) ln|<i>x</i><sup>2</sup> + 3<i>x</i> + 5| + <i>C</i>", "nudge": "The 1/2 only appears when the numerator is <b>half</b> the derivative. Here 2<i>x</i> + 3 is the full derivative of <i>x</i><sup>2</sup> + 3<i>x</i> + 5, so there is nothing to compensate for." },
            { "label": "(2<i>x</i> + 3) ln|<i>x</i><sup>2</sup> + 3<i>x</i> + 5| + <i>C</i>", "nudge": "This treats the log as if it were multiplied by the numerator. Differentiate it and you get a product of two terms, nothing like the integrand." },
            { "label": "tan<sup>−1</sup>(<i>x</i><sup>2</sup> + 3<i>x</i> + 5) + <i>C</i>", "nudge": "The arctangent template needs 1/(1 + <i>u</i><sup>2</sup>), a constant numerator over a <b>sum of squares</b>. Here the numerator is not constant and the denominator is not a sum of squares." }
          ],
          "correct": 0,
          "solution": "The numerator is exactly the derivative of the denominator, so this is the pure log pattern with no constant to carry."
        },
        {
          "t": "mcq",
          "q": "Using <i>x</i> = <i>t</i><sup>2</sup>, ∫d<i>x</i>/[√<i>x</i> (1 + <i>x</i>)] equals:",
          "opts": [
            { "label": "2 tan<sup>−1</sup>√<i>x</i> + <i>C</i>", "nudge": null },
            { "label": "tan<sup>−1</sup>√<i>x</i> + <i>C</i>", "nudge": "This forgets the factor 2 that d<i>x</i> = 2<i>t</i> d<i>t</i> brings in. The substitution transforms the differential as well as the integrand, and here that factor survives to the end." },
            { "label": "ln(1 + <i>x</i>) + <i>C</i>", "nudge": "This misreads the shape as <i>f</i>′/<i>f</i>. The derivative of 1 + <i>x</i> is 1, not 1/√<i>x</i>, so the numerator is not the denominator's derivative." },
            { "label": "2√<i>x</i> + <i>C</i>", "nudge": "This integrates the 1/√<i>x</i> and drops the (1 + <i>x</i>) entirely. You cannot ignore a factor of the denominator, however inconvenient it is." }
          ],
          "correct": 0,
          "solution": "With <i>x</i> = <i>t</i><sup>2</sup>, d<i>x</i> = 2<i>t</i> d<i>t</i> and √<i>x</i> = <i>t</i>, so the integral becomes ∫2<i>t</i> d<i>t</i>/[<i>t</i>(1 + <i>t</i><sup>2</sup>)] = 2∫d<i>t</i>/(1 + <i>t</i><sup>2</sup>) = 2 tan<sup>−1</sup><i>t</i>. The <i>t</i> cancels, which is exactly why this substitution was chosen."
        },
        {
          "t": "p",
          "html": "Now the other half of this topic, and it starts from an honest admission: you cannot integrate sin<sup>2</sup><i>x</i>. There is no row for it, no inner derivative to peel off, nothing. What you can do is <b>rewrite it</b> until it becomes something the table already knows. A music chord sounds complicated, but it is just a sum of pure tones sounding together; trigonometric identities are the spectrum analyser that breaks sin<sup>2</sup><i>x</i> or sin 3<i>x</i> cos <i>x</i> into its pure tones, cos 2<i>x</i> and sin 4<i>x</i>, each of which integrates instantly. Integration here is a two-step dance: <b>rewrite, then integrate term by term.</b>"
        },
        {
          "t": "defgrid",
          "title": "Read the shape, pick the identity",
          "rows": [
            { "k": "Even power of sin or cos", "v": "power-reduce: sin<sup>2</sup><i>x</i> = (1 − cos 2<i>x</i>)/2, cos<sup>2</sup><i>x</i> = (1 + cos 2<i>x</i>)/2. Repeat for the fourth and sixth powers" },
            { "k": "Odd power", "v": "peel one factor off and convert the rest with sin<sup>2</sup> = 1 − cos<sup>2</sup>, then substitute. sin<sup>3</sup><i>x</i> = (1 − cos<sup>2</sup><i>x</i>) sin <i>x</i>, and <i>u</i> = cos <i>x</i>" },
            { "k": "A cube, in one step", "v": "sin<sup>3</sup><i>x</i> = (3 sin <i>x</i> − sin 3<i>x</i>)/4 and cos<sup>3</sup><i>x</i> = (3 cos <i>x</i> + cos 3<i>x</i>)/4, if you would rather not substitute" },
            { "k": "A product like sin <i>ax</i> cos <i>bx</i>", "v": "product-to-sum. 2 sin <i>A</i> cos <i>B</i> = sin(<i>A</i> + <i>B</i>) + sin(<i>A</i> − <i>B</i>); 2 cos <i>A</i> cos <i>B</i> = cos(<i>A</i> + <i>B</i>) + cos(<i>A</i> − <i>B</i>); 2 sin <i>A</i> sin <i>B</i> = cos(<i>A</i> − <i>B</i>) − cos(<i>A</i> + <i>B</i>)" },
            { "k": "Powers of tan and sec", "v": "use sec<sup>2</sup><i>x</i> = 1 + tan<sup>2</sup><i>x</i> together with the fact that sec<sup>2</sup><i>x</i> is the derivative of tan <i>x</i>: peel off a sec<sup>2</sup><i>x</i> and substitute <i>u</i> = tan <i>x</i>" },
            { "k": "Definite, from 0 to π/2", "v": "go straight to Walli's formula below and skip the identities entirely" }
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD PATTERN",
          "q": "Evaluate ∫cos<sup>2</sup><i>x</i> d<i>x</i>.",
          "steps": [
            "Even power, so power-reduce: cos<sup>2</sup><i>x</i> = (1 + cos 2<i>x</i>)/2.",
            "∫(1 + cos 2<i>x</i>)/2 d<i>x</i> = (1/2)∫1 d<i>x</i> + (1/2)∫cos 2<i>x</i> d<i>x</i>.",
            "The second integral carries a 1/2 of its own, from the inner 2<i>x</i>: ∫cos 2<i>x</i> d<i>x</i> = (sin 2<i>x</i>)/2."
          ],
          "ans": "<i>x</i>/2 + (sin 2<i>x</i>)/4 + <i>C</i>. The sine version is the same working with the sign flipped: ∫sin<sup>2</sup><i>x</i> d<i>x</i> = <i>x</i>/2 − (sin 2<i>x</i>)/4 + <i>C</i>."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Evaluate ∫sin 5<i>x</i> cos 3<i>x</i> d<i>x</i>.",
          "steps": [
            "A product of a sine and a cosine at different frequencies. Product-to-sum, never by parts.",
            "2 sin 5<i>x</i> cos 3<i>x</i> = sin 8<i>x</i> + sin 2<i>x</i>, so sin 5<i>x</i> cos 3<i>x</i> = (1/2)(sin 8<i>x</i> + sin 2<i>x</i>).",
            "(1/2)∫(sin 8<i>x</i> + sin 2<i>x</i>) d<i>x</i> = (1/2)[−(cos 8<i>x</i>)/8 − (cos 2<i>x</i>)/2].",
            "Each inner coefficient divides its own term, and then the outer 1/2 divides both."
          ],
          "ans": "−(cos 8<i>x</i>)/16 − (cos 2<i>x</i>)/4 + <i>C</i>. <b>Speed lesson:</b> a sine times a cosine is two trivial integrals once you split it, and parts on it goes round in circles."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Evaluate ∫sin<sup>3</sup><i>x</i> cos<sup>2</sup><i>x</i> d<i>x</i>.",
          "steps": [
            "The sine power is odd, so peel one sin <i>x</i> off and convert the rest: sin<sup>3</sup><i>x</i> cos<sup>2</sup><i>x</i> = (1 − cos<sup>2</sup><i>x</i>) cos<sup>2</sup><i>x</i> sin <i>x</i>.",
            "Now <i>u</i> = cos <i>x</i>, d<i>u</i> = −sin <i>x</i> d<i>x</i>, and the whole integrand is in <i>u</i>.",
            "−∫(1 − <i>u</i><sup>2</sup>)<i>u</i><sup>2</sup> d<i>u</i> = −∫(<i>u</i><sup>2</sup> − <i>u</i><sup>4</sup>) d<i>u</i> = −<i>u</i><sup>3</sup>/3 + <i>u</i><sup>5</sup>/5.",
            "Back-substitute."
          ],
          "ans": "(cos<sup>5</sup><i>x</i>)/5 − (cos<sup>3</sup><i>x</i>)/3 + <i>C</i>. Check by differentiating: −cos<sup>4</sup><i>x</i> sin <i>x</i> + cos<sup>2</sup><i>x</i> sin <i>x</i> = cos<sup>2</sup><i>x</i> sin <i>x</i>(1 − cos<sup>2</sup><i>x</i>) = sin<sup>3</sup><i>x</i> cos<sup>2</sup><i>x</i>."
        },
        {
          "t": "formula",
          "kicker": "WALLI'S FORMULA, DEFINITE AND ONLY FROM 0 TO π/2",
          "tag": "double factorials, and one branch that carries the π/2",
          "main": "∫(0→π/2) sin<sup>n</sup><i>x</i> cos<sup>m</sup><i>x</i> d<i>x</i> = [(<i>n</i> − 1)!! (<i>m</i> − 1)!!/(<i>m</i> + <i>n</i>)!!] × (π/2 if <i>m</i> and <i>n</i> are <b>both even</b>, otherwise 1)",
          "legend": [
            "<i>k</i>!! is the double factorial, <i>k</i>(<i>k</i> − 2)(<i>k</i> − 4) all the way down to 2 or 1, and by convention 0!! = 1 and (−1)!! = 1",
            "<b>both even is the only case that carries the π/2</b>; if either exponent is odd the second factor is just 1, and this is where marks are lost",
            "the notation ∫(0→π/2) means the <b>definite</b> integral from 0 to π/2, a single number rather than a family. Topic 05 builds it properly; this row is usable before then"
          ],
          "note": "Worked once: ∫(0→π/2) sin<sup>6</sup><i>x</i> cos<sup>2</sup><i>x</i> d<i>x</i> has <i>n</i> = 6 and <i>m</i> = 2, both even, so it is [5!! · 1!!/8!!] × π/2 = [15/384] × π/2 = 5π/256. And it applies to <b>definite integrals only</b>. Using it on an indefinite one is meaningless, because the answer is a number and an indefinite integral is not."
        },
        {
          "t": "formula",
          "kicker": "THE HALF-ANGLE SUBSTITUTION",
          "tag": "the only systematic method for a quotient of sines and cosines",
          "main": "<i>t</i> = tan(<i>x</i>/2) ⇒ sin <i>x</i> = 2<i>t</i>/(1 + <i>t</i><sup>2</sup>), cos <i>x</i> = (1 − <i>t</i><sup>2</sup>)/(1 + <i>t</i><sup>2</sup>), d<i>x</i> = 2 d<i>t</i>/(1 + <i>t</i><sup>2</sup>)",
          "legend": [
            "the identities are just the double-angle formulas divided top and bottom by cos<sup>2</sup>(<i>x</i>/2), and the differential comes from differentiating <i>t</i> = tan(<i>x</i>/2), which gives d<i>t</i> = (1 + <i>t</i><sup>2</sup>)/2 · d<i>x</i>",
            "every rational function of sin <i>x</i> and cos <i>x</i> becomes a rational function of <i>t</i>, the (1 + <i>t</i><sup>2</sup>) factors cancel against d<i>x</i>, and what is left is <b>partial fractions</b>, which is topic 03",
            "nothing in the chapter's other trigonometric toolkit touches quotients like 1/(3 + 5 cos <i>x</i>); identity-juggling will not crack them and this will"
          ],
          "note": "It fails at <i>x</i> = (2<i>k</i> + 1)π, where tan(<i>x</i>/2) blows up, and it is not monotone across such a point. For a definite integral, check that no odd multiple of π lies inside your interval, and split there first if one does."
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD PATTERN",
          "q": "Evaluate ∫d<i>x</i>/(3 + 5 cos <i>x</i>).",
          "steps": [
            "Put <i>t</i> = tan(<i>x</i>/2). The denominator becomes 3 + 5(1 − <i>t</i><sup>2</sup>)/(1 + <i>t</i><sup>2</sup>) = (8 − 2<i>t</i><sup>2</sup>)/(1 + <i>t</i><sup>2</sup>).",
            "The integral is ∫[2 d<i>t</i>/(1 + <i>t</i><sup>2</sup>)] · [(1 + <i>t</i><sup>2</sup>)/(8 − 2<i>t</i><sup>2</sup>)] = ∫d<i>t</i>/(4 − <i>t</i><sup>2</sup>).",
            "That is the template ∫d<i>u</i>/(<i>a</i><sup>2</sup> − <i>u</i><sup>2</sup>) = (1/2<i>a</i>) ln|(<i>a</i> + <i>u</i>)/(<i>a</i> − <i>u</i>)| with <i>a</i> = 2, so the factor is 1/4.",
            "The 1 + <i>t</i><sup>2</sup> cancelled completely, which is what always happens."
          ],
          "ans": "(1/4) ln|(2 + <i>t</i>)/(2 − <i>t</i>)| + <i>C</i>, with <i>t</i> = tan(<i>x</i>/2). Leave the answer in <i>t</i> only after saying what <i>t</i> is."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Evaluate ∫d<i>x</i>/(1 − sin <i>x</i> + cos <i>x</i>).",
          "steps": [
            "With <i>t</i> = tan(<i>x</i>/2), the denominator is 1 − 2<i>t</i>/(1 + <i>t</i><sup>2</sup>) + (1 − <i>t</i><sup>2</sup>)/(1 + <i>t</i><sup>2</sup>).",
            "Over the common denominator the numerator is (1 + <i>t</i><sup>2</sup>) − 2<i>t</i> + (1 − <i>t</i><sup>2</sup>) = 2 − 2<i>t</i>, so the denominator is 2(1 − <i>t</i>)/(1 + <i>t</i><sup>2</sup>).",
            "The integral collapses to ∫[2 d<i>t</i>/(1 + <i>t</i><sup>2</sup>)] · [(1 + <i>t</i><sup>2</sup>)/(2(1 − <i>t</i>))] = ∫d<i>t</i>/(1 − <i>t</i>).",
            "And ∫d<i>t</i>/(1 − <i>t</i>) = −ln|1 − <i>t</i>|, because the derivative of 1 − <i>t</i> is −1."
          ],
          "ans": "−ln|1 − tan(<i>x</i>/2)| + <i>C</i>. <b>Why it is worth the setup:</b> the original integrand has no identity that helps it, and the substitution turned it into a single log."
        },
        {
          "t": "mcq",
          "q": "∫tan <i>x</i> d<i>x</i> equals:",
          "opts": [
            { "label": "sec<sup>2</sup><i>x</i> + <i>C</i>", "nudge": "That is the <b>derivative</b> of tan <i>x</i>, not its integral. The arrow is pointing the wrong way." },
            { "label": "ln|cos <i>x</i>| + <i>C</i>", "nudge": "The sign is dropped. d<i>u</i> = −sin <i>x</i> d<i>x</i> puts a minus in front, and −ln|cos <i>x</i>| is what you get." },
            { "label": "ln|sec <i>x</i>| + <i>C</i>", "nudge": null },
            { "label": "−sec <i>x</i> tan <i>x</i> + <i>C</i>", "nudge": "Unrelated. sec <i>x</i> tan <i>x</i> is the derivative of sec <i>x</i>, and it has nothing to do with this integrand." }
          ],
          "correct": 2,
          "solution": "−ln|cos <i>x</i>| = ln|1/cos <i>x</i>| = ln|sec <i>x</i>|. The cotangent partner has no minus: ∫cot <i>x</i> d<i>x</i> = +ln|sin <i>x</i>| + <i>C</i>."
        },
        {
          "t": "mcq",
          "q": "∫sin<sup>2</sup><i>x</i> d<i>x</i> equals:",
          "opts": [
            { "label": "<i>x</i>/2 − (sin 2<i>x</i>)/4 + <i>C</i>", "nudge": null },
            { "label": "(sin<sup>3</sup><i>x</i>)/3 + <i>C</i>", "nudge": "This applies the power rule to sin <i>x</i> as though it were the variable. The power rule integrates powers of <i>x</i>, not powers of a function, unless the function's derivative is present." },
            { "label": "−(cos<sup>3</sup><i>x</i>)/3 + <i>C</i>", "nudge": "That is the antiderivative of sin<sup>2</sup><i>x</i> cos <i>x</i>, a different integrand: it has an extra cos <i>x</i> factor that this one does not." },
            { "label": "<i>x</i>/2 + (sin 2<i>x</i>)/4 + <i>C</i>", "nudge": "That is ∫cos<sup>2</sup><i>x</i> d<i>x</i>. The double-angle sign is the only difference and it is the one that matters: sine uses 1 − cos 2<i>x</i>, cosine uses 1 + cos 2<i>x</i>." }
          ],
          "correct": 0,
          "solution": "Power-reduction gives ∫(1 − cos 2<i>x</i>)/2 d<i>x</i> = <i>x</i>/2 − (sin 2<i>x</i>)/4 + <i>C</i>."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "Evaluate ∫(ln <i>x</i>)<sup>2</sup>/<i>x</i> d<i>x</i>.",
              "a": "(ln <i>x</i>)<sup>3</sup>/3 + <i>C</i>. The power-chain pattern: <i>u</i> = ln <i>x</i> and its derivative 1/<i>x</i> is the rest of the integrand."
            },
            {
              "q": "Evaluate ∫d<i>x</i>/(<i>x</i> ln <i>x</i>).",
              "a": "ln|ln <i>x</i>| + <i>C</i>. Same substitution, but now the shape is d<i>u</i>/<i>u</i>, so it is a log of a log."
            },
            {
              "q": "Evaluate ∫tan<sup>2</sup><i>x</i> d<i>x</i>.",
              "a": "tan <i>x</i> − <i>x</i> + <i>C</i>. Use tan<sup>2</sup><i>x</i> = sec<sup>2</sup><i>x</i> − 1 first. Reaching for (tan<sup>3</sup><i>x</i>)/3 is the trap, and it is the same power-rule-on-a-function error as sin<sup>2</sup><i>x</i>."
            },
            {
              "q": "Evaluate ∫d<i>x</i>/(5 + 3 cos <i>x</i>).",
              "a": "(1/2) tan<sup>−1</sup>(<i>t</i>/2) + <i>C</i> with <i>t</i> = tan(<i>x</i>/2). The denominator becomes 2(<i>t</i><sup>2</sup> + 4)/(1 + <i>t</i><sup>2</sup>), so the integral is ∫d<i>t</i>/(<i>t</i><sup>2</sup> + 4)."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Substituting <i>g</i>(<i>x</i>) but not <i>g</i>′(<i>x</i>) d<i>x</i>.</b> You must replace the differential too. Dropping the d<i>u</i> accounting is the single most common substitution error there is.",
            "<b>Leaving the answer in <i>u</i>.</b> An indefinite integral in <i>x</i> must come back as a function of <i>x</i>. Say what <i>u</i> was and convert.",
            "<b>Getting the constant wrong in the log pattern.</b> ∫<i>x</i>/(<i>x</i><sup>2</sup> + 4) d<i>x</i> carries a 1/2 because the numerator is half the derivative. ∫(2<i>x</i> + 3)/(<i>x</i><sup>2</sup> + 3<i>x</i> + 5) d<i>x</i> carries nothing, because the numerator is all of it. Check which before you write the factor.",
            "<b>Applying the power rule to sin<sup>2</sup><i>x</i> or tan<sup>2</sup><i>x</i>.</b> The power rule integrates powers of the variable. A power of a function needs either that function's derivative alongside it, or an identity first.",
            "<b>Using Walli's formula anywhere except a definite integral from 0 to π/2</b>, or forgetting that the π/2 branch needs <b>both</b> exponents even."
          ]
        },
        {
          "t": "protip",
          "html": "before you integrate anything, ask one question: is the numerator a constant times the derivative of the denominator? if yes, the answer is a log and you are already done. that one reflex handles a large share of every integral you will be shown, and it costs you three seconds to ask."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "<i>u</i> = <i>g</i>(<i>x</i>), d<i>u</i> = <i>g</i>′(<i>x</i>) d<i>x</i>", "note": "replace the chunk and the differential, both" },
            { "f": "∫<i>f</i>′/<i>f</i> d<i>x</i> = ln|<i>f</i>| + <i>C</i>", "note": "derivative on top, log on the bottom" },
            { "f": "∫<i>f</i><sup>n</sup><i>f</i>′ d<i>x</i> = <i>f</i><sup>n+1</sup>/(<i>n</i> + 1) + <i>C</i>", "note": "the power chain, same idea with a power" },
            { "f": "sin<sup>2</sup><i>x</i> = (1 − cos 2<i>x</i>)/2, cos<sup>2</sup><i>x</i> = (1 + cos 2<i>x</i>)/2", "note": "even power, halve it; odd power, peel one off" },
            { "f": "<i>t</i> = tan(<i>x</i>/2) turns any sin, cos quotient rational", "note": "and then partial fractions finishes it" }
          ],
          "aids": [
            "convert there, convert back, never leave the answer in u",
            "even is halve it, odd is peel it, a product is split it",
            "walli only from 0 to pi over 2, and only both-even gets the pi over 2",
            "if an x survives the substitution, you picked the wrong chunk"
          ]
        }
      ]
    },
    {
      "n": "03",
      "title": "Quadratic Denominators, Roots and Partial Fractions",
      "chip": "03 TEMPLATES",
      "kalam": "reshape the parcel until it fits a standard box",
      "blocks": [
        {
          "t": "p",
          "html": "An enormous family of integrals, everything with a quadratic underneath, collapses onto about six templates whose answers are inverse-trigonometric functions or logarithms. The skill is not memorising dozens of results. It is learning to <b>reshape</b> any quadratic into one of a few canonical shapes, and there is one move that does almost all of it: <b>completing the square</b>."
        },
        {
          "t": "p",
          "html": "Why that move in particular? Because sin<sup>−1</sup>, tan<sup>−1</sup> and the log forms are built for expressions that look like <i>a</i><sup>2</sup> − <i>x</i><sup>2</sup>, <i>a</i><sup>2</sup> + <i>x</i><sup>2</sup> and <i>x</i><sup>2</sup> − <i>a</i><sup>2</sup>. A messy <i>x</i><sup>2</sup> + <i>bx</i> + <i>c</i> matches none of them, until you rewrite it as (<i>x</i> + <i>b</i>/2)<sup>2</sup> + a constant, which is a perfect <i>X</i><sup>2</sup> + <i>A</i><sup>2</sup> shape in the shifted variable <i>X</i> = <i>x</i> + <i>b</i>/2."
        },
        {
          "t": "think",
          "html": "it is a courier office. the parcel is an odd shape and they will not ship it as it is. a little repacking, which is the completing of the square, makes it fit a standard-size box, and once it is in a standard box the rate is fixed and printed on the wall. you never negotiate the rate. you only repack."
        },
        {
          "t": "defgrid",
          "title": "The six templates, with a > 0",
          "rows": [
            { "k": "∫d<i>x</i>/(<i>x</i><sup>2</sup> + <i>a</i><sup>2</sup>)", "v": "(1/<i>a</i>) tan<sup>−1</sup>(<i>x</i>/<i>a</i>) + <i>C</i>. Plus sign, no root: arctangent, and it <b>carries</b> the 1/<i>a</i>" },
            { "k": "∫d<i>x</i>/(<i>x</i><sup>2</sup> − <i>a</i><sup>2</sup>)", "v": "(1/2<i>a</i>) ln|(<i>x</i> − <i>a</i>)/(<i>x</i> + <i>a</i>)| + <i>C</i>. Minus sign: a log of a ratio, and the numerator matches the sign order of the denominator" },
            { "k": "∫d<i>x</i>/(<i>a</i><sup>2</sup> − <i>x</i><sup>2</sup>)", "v": "(1/2<i>a</i>) ln|(<i>a</i> + <i>x</i>)/(<i>a</i> − <i>x</i>)| + <i>C</i>. The same log with the ratio the other way up, because the denominator is the other way round" },
            { "k": "∫d<i>x</i>/√(<i>a</i><sup>2</sup> − <i>x</i><sup>2</sup>)", "v": "sin<sup>−1</sup>(<i>x</i>/<i>a</i>) + <i>C</i>. Arcsine, and it carries <b>no</b> 1/<i>a</i> at all. Valid where |<i>x</i>| < <i>a</i>" },
            { "k": "∫d<i>x</i>/√(<i>x</i><sup>2</sup> + <i>a</i><sup>2</sup>)", "v": "ln|<i>x</i> + √(<i>x</i><sup>2</sup> + <i>a</i><sup>2</sup>)| + <i>C</i>" },
            { "k": "∫d<i>x</i>/√(<i>x</i><sup>2</sup> − <i>a</i><sup>2</sup>)", "v": "ln|<i>x</i> + √(<i>x</i><sup>2</sup> − <i>a</i><sup>2</sup>)| + <i>C</i>, the same shape with the sign inside the root changed" }
          ]
        },
        {
          "t": "formula",
          "kicker": "AND THE THREE WITH THE ROOT ON TOP",
          "tag": "each is half the root plus half a template",
          "main": "∫√(<i>a</i><sup>2</sup> − <i>x</i><sup>2</sup>) d<i>x</i> = (<i>x</i>/2)√(<i>a</i><sup>2</sup> − <i>x</i><sup>2</sup>) + (<i>a</i><sup>2</sup>/2) sin<sup>−1</sup>(<i>x</i>/<i>a</i>) + <i>C</i>",
          "legend": [
            "∫√(<i>x</i><sup>2</sup> + <i>a</i><sup>2</sup>) d<i>x</i> = (<i>x</i>/2)√(<i>x</i><sup>2</sup> + <i>a</i><sup>2</sup>) + (<i>a</i><sup>2</sup>/2) ln|<i>x</i> + √(<i>x</i><sup>2</sup> + <i>a</i><sup>2</sup>)| + <i>C</i>",
            "∫√(<i>x</i><sup>2</sup> − <i>a</i><sup>2</sup>) d<i>x</i> = (<i>x</i>/2)√(<i>x</i><sup>2</sup> − <i>a</i><sup>2</sup>) <b>−</b> (<i>a</i><sup>2</sup>/2) ln|<i>x</i> + √(<i>x</i><sup>2</sup> − <i>a</i><sup>2</sup>)| + <i>C</i>, and that minus is the only sign that differs across the three",
            "the pattern is worth seeing rather than memorising three separate lines: <b>(<i>x</i>/2) times the root, plus (<i>a</i><sup>2</sup>/2) times whatever the matching template on the previous card gives</b>"
          ],
          "note": "All three come out of integration by parts, which topic 04 sets up. They are quoted here because the exam quotes them here, and because they close the quadratic toolkit: root on the bottom, root on the top, and no root at all."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHERE THE LOG TEMPLATE COMES FROM, TAP A LINE",
          "steps": [
            {
              "eq": "1/(<i>x</i><sup>2</sup> − <i>a</i><sup>2</sup>) = 1/[(<i>x</i> − <i>a</i>)(<i>x</i> + <i>a</i>)]",
              "why": "Factor the difference of two squares. Nothing is being integrated yet; this is pure algebra, and it is the whole idea of the second half of this topic in miniature."
            },
            {
              "eq": "= (1/2<i>a</i>)[1/(<i>x</i> − <i>a</i>) − 1/(<i>x</i> + <i>a</i>)]",
              "why": "Subtract the two simple fractions and you get (x + a) minus (x − a) on top, which is 2a, over the product. So dividing by 2a recovers the original. This is partial fractions, run once by hand."
            },
            {
              "eq": "∫ = (1/2<i>a</i>)[ln|<i>x</i> − <i>a</i>| − ln|<i>x</i> + <i>a</i>|]",
              "why": "Each piece is now a log, because each denominator is linear and its derivative is 1. No substitution machinery is needed."
            },
            {
              "eq": "= (1/2<i>a</i>) ln|(<i>x</i> − <i>a</i>)/(<i>x</i> + <i>a</i>)| + <i>C</i>",
              "why": "A difference of logs is the log of the quotient. That is why the printed template is a ratio inside a single modulus, and it is also where the 1/2a in front comes from: it was never a mystery constant, it is the 2a you divided by in step two."
            }
          ]
        },
        {
          "t": "proc",
          "title": "Reading a quadratic integral in three questions",
          "steps": [
            "<b>Is there a root?</b> A root in the denominator sends you to the arcsine or the log-root rows; no root sends you to the arctangent or the log-of-a-ratio rows. This is the first fork and it is decided by eye.",
            "<b>What is the sign inside?</b> A plus in <i>x</i><sup>2</sup> + <i>a</i><sup>2</sup> means arctangent. A minus means a log. Read the sign before you write anything at all.",
            "<b>Is the numerator a constant, or does it contain <i>x</i>?</b> A constant goes straight to a template. A numerator containing <i>x</i> is a different problem and needs step 5.",
            "<b>If the quadratic is not already <i>X</i><sup>2</sup> ± <i>A</i><sup>2</sup>, complete the square.</b> Write <i>ax</i><sup>2</sup> + <i>bx</i> + <i>c</i> as <i>a</i>[(<i>x</i> + <i>b</i>/2<i>a</i>)<sup>2</sup> + <i>c</i>/<i>a</i> − <i>b</i><sup>2</sup>/4<i>a</i><sup>2</sup>], substitute <i>X</i> = <i>x</i> + <i>b</i>/2<i>a</i>, and the template appears.",
            "<b>For a linear numerator <i>px</i> + <i>q</i>, split it.</b> Write <i>px</i> + <i>q</i> = λ · (derivative of the quadratic) + μ and solve for λ and μ. The λ part is a log or a root by the substitution patterns of topic 02; the μ part is a pure template after completing the square.",
            "<b>Differentiate to check.</b> Templates are where sign errors hide, because two of them differ only in where the minus sits."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD PATTERN",
          "q": "Evaluate ∫d<i>x</i>/(<i>x</i><sup>2</sup> + 9).",
          "steps": [
            "No root, plus sign, constant numerator, and the quadratic is already <i>x</i><sup>2</sup> + <i>a</i><sup>2</sup>.",
            "So <i>a</i> = 3, and the arctangent template applies directly.",
            "It carries the 1/<i>a</i>, which is 1/3."
          ],
          "ans": "(1/3) tan<sup>−1</sup>(<i>x</i>/3) + <i>C</i>. The 1/3 appears twice, once outside and once inside, and dropping either one is a whole mark."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Evaluate ∫d<i>x</i>/(<i>x</i><sup>2</sup> + 4<i>x</i> + 13).",
          "steps": [
            "The quadratic matches nothing as written, so complete the square: <i>x</i><sup>2</sup> + 4<i>x</i> + 13 = (<i>x</i> + 2)<sup>2</sup> + 9.",
            "Set <i>X</i> = <i>x</i> + 2. Then d<i>X</i> = d<i>x</i>, which is why this substitution costs nothing.",
            "∫d<i>X</i>/(<i>X</i><sup>2</sup> + 9) = (1/3) tan<sup>−1</sup>(<i>X</i>/3).",
            "Put <i>X</i> back."
          ],
          "ans": "(1/3) tan<sup>−1</sup>[(<i>x</i> + 2)/3] + <i>C</i>. Every general quadratic in the chapter is this example wearing different numbers."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "Evaluate ∫(2<i>x</i> + 3)/√(<i>x</i><sup>2</sup> + 4<i>x</i> + 8) d<i>x</i>.",
          "steps": [
            "Linear numerator, so split it. The derivative of <i>x</i><sup>2</sup> + 4<i>x</i> + 8 is 2<i>x</i> + 4, and 2<i>x</i> + 3 = (2<i>x</i> + 4) − 1.",
            "First piece: the numerator is exactly the inner derivative, so ∫<i>f</i>′/√<i>f</i> = 2√<i>f</i>, giving 2√(<i>x</i><sup>2</sup> + 4<i>x</i> + 8).",
            "Second piece: −∫d<i>x</i>/√(<i>x</i><sup>2</sup> + 4<i>x</i> + 8). Complete the square to (<i>x</i> + 2)<sup>2</sup> + 4, so <i>X</i> = <i>x</i> + 2 and <i>a</i> = 2.",
            "That gives −ln|<i>X</i> + √(<i>X</i><sup>2</sup> + 4)| = −ln|(<i>x</i> + 2) + √(<i>x</i><sup>2</sup> + 4<i>x</i> + 8)|."
          ],
          "ans": "2√(<i>x</i><sup>2</sup> + 4<i>x</i> + 8) − ln|(<i>x</i> + 2) + √(<i>x</i><sup>2</sup> + 4<i>x</i> + 8)| + <i>C</i>. <b>Master key:</b> split a linear numerator into derivative-part plus constant-part, and every linear-over-quadratic integral falls apart, with a root or without one."
        },
        {
          "t": "mcq",
          "q": "∫d<i>x</i>/√(9 − <i>x</i><sup>2</sup>) equals:",
          "opts": [
            { "label": "ln|<i>x</i> + √(9 − <i>x</i><sup>2</sup>)| + <i>C</i>", "nudge": "The log-root form belongs to √(<i>x</i><sup>2</sup> + <i>a</i><sup>2</sup>) and √(<i>x</i><sup>2</sup> − <i>a</i><sup>2</sup>), where the <i>x</i><sup>2</sup> comes first. Here it is <i>a</i><sup>2</sup> minus <i>x</i><sup>2</sup>, which is the arcsine row." },
            { "label": "sin<sup>−1</sup>(<i>x</i>/3) + <i>C</i>", "nudge": null },
            { "label": "(1/3) sin<sup>−1</sup>(<i>x</i>/3) + <i>C</i>", "nudge": "This inserts a 1/<i>a</i> that the arcsine row does not have. Differentiate it and you get a third of the integrand." },
            { "label": "(1/3) tan<sup>−1</sup>(<i>x</i>/3) + <i>C</i>", "nudge": "The arctangent row has no root in it at all. The presence of the root is the first thing the triage asks about." }
          ],
          "correct": 1,
          "solution": "Root, and the sign inside is <i>a</i><sup>2</sup> − <i>x</i><sup>2</sup>, so it is the arcsine template with <i>a</i> = 3. Arcsine is the one row in the whole set that carries no 1/<i>a</i>."
        },
        {
          "t": "mcq",
          "q": "∫d<i>x</i>/(<i>x</i><sup>2</sup> − 2<i>x</i> + 5) equals:",
          "opts": [
            { "label": "(1/2) tan<sup>−1</sup>[(<i>x</i> − 1)/2] + <i>C</i>", "nudge": null },
            { "label": "tan<sup>−1</sup>(<i>x</i> − 1) + <i>C</i>", "nudge": "This forgets the 1/<i>a</i> and uses <i>a</i> = 1. Completing the square gives (<i>x</i> − 1)<sup>2</sup> + 4, so <i>a</i> = 2, not 1." },
            { "label": "(1/4) ln|(<i>x</i> − 3)/(<i>x</i> + 1)| + <i>C</i>", "nudge": "The log form needs <i>X</i><sup>2</sup> − <i>a</i><sup>2</sup> after completing the square. Here it is <i>X</i><sup>2</sup> + <i>a</i><sup>2</sup>, a sum, which never factors and never gives a log." },
            { "label": "(1/2) tan<sup>−1</sup>[(<i>x</i> + 1)/2] + <i>C</i>", "nudge": "The square was completed with the wrong sign. <i>x</i><sup>2</sup> − 2<i>x</i> + 5 is (<i>x</i> − 1)<sup>2</sup> + 4, so the shift is <i>x</i> − 1." }
          ],
          "correct": 0,
          "solution": "<i>x</i><sup>2</sup> − 2<i>x</i> + 5 = (<i>x</i> − 1)<sup>2</sup> + 4, so with <i>X</i> = <i>x</i> − 1 and <i>a</i> = 2 the arctangent template gives (1/2) tan<sup>−1</sup>(<i>X</i>/2)."
        },
        {
          "t": "p",
          "html": "The second half of this topic handles the other kind of rational integrand, the kind with a <b>factorable</b> denominator. Something like 1/[(<i>x</i> − 1)(<i>x</i> + 2)] has no substitution that helps and no template it matches. The fix is to break one complicated fraction into a sum of simpler ones, each of which is a log or an arctangent. That is <b>partial fractions</b>, and it is nothing more than the addition of fractions run in reverse: adding <i>A</i>/(<i>x</i> − 1) and <i>B</i>/(<i>x</i> + 2) gives you a single fraction over the product, and partial fractions starts from the product and recovers <i>A</i> and <i>B</i>. Think of a restaurant handing your table one combined bill when what you want is who ordered what."
        },
        {
          "t": "defgrid",
          "title": "One template per factor, and never fewer",
          "rows": [
            { "k": "Linear (<i>ax</i> + <i>b</i>)", "v": "<i>A</i>/(<i>ax</i> + <i>b</i>). A constant on top, and it integrates to a log" },
            { "k": "Repeated (<i>ax</i> + <i>b</i>)<sup>2</sup>", "v": "<i>A</i>/(<i>ax</i> + <i>b</i>) + <i>B</i>/(<i>ax</i> + <i>b</i>)<sup>2</sup>. <b>Both</b> terms, always. The second integrates to a power, not a log" },
            { "k": "Repeated (<i>ax</i> + <i>b</i>)<sup>3</sup>", "v": "three terms, one at each power from 1 up to 3. A factor raised to <i>k</i> contributes <i>k</i> terms" },
            { "k": "Irreducible quadratic", "v": "(<i>Ax</i> + <i>B</i>)/(<i>ax</i><sup>2</sup> + <i>bx</i> + <i>c</i>). A <b>linear</b> numerator, and it splits into a log plus an arctangent" }
          ]
        },
        {
          "t": "formula",
          "kicker": "THE COVER-UP SHORTCUT",
          "tag": "distinct linear factors only",
          "main": "to find the numerator over (<i>x</i> − <i>r</i>): delete that factor from the original, then put <i>x</i> = <i>r</i> into what is left",
          "legend": [
            "for (3<i>x</i> + 1)/[(<i>x</i> + 1)(<i>x</i> − 2)], covering (<i>x</i> + 1) and setting <i>x</i> = −1 leaves (−3 + 1)/(−1 − 2) = 2/3, so 2/3 is the numerator over (<i>x</i> + 1)",
            "covering (<i>x</i> − 2) and setting <i>x</i> = 2 leaves (6 + 1)/(2 + 1) = 7/3, and the decomposition is finished with no system of equations at all",
            "it works because clearing denominators gives an identity, and substituting a root kills every term except one; that is also why it fails for a repeated factor, where two terms survive the same root"
          ],
          "note": "For repeated factors and irreducible quadratics, substitute the roots to get what you can, then compare coefficients of the highest power to finish. That mix is faster than either method alone."
        },
        {
          "t": "proc",
          "title": "The partial-fraction workflow",
          "steps": [
            "<b>Proper or improper?</b> If the numerator's degree is greater than or equal to the denominator's, <b>divide first</b>. Write <i>N</i>/<i>D</i> = <i>Q</i> + <i>R</i>/<i>D</i>, integrate <i>Q</i> separately, and take the remainder on to step 2. Skipping this gives wrong constants, every time.",
            "<b>Factor the denominator completely</b> into linear and irreducible-quadratic factors.",
            "<b>Write the template</b>, one term per factor, per the table above. A repeated factor gets one term at every power.",
            "<b>Clear the denominators</b> by multiplying through, which turns the equation into an identity between numerators.",
            "<b>Solve for the constants</b>: substitute the roots for speed, compare coefficients for whatever is left over.",
            "<b>Integrate each simple fraction.</b> Linear gives a log, a repeated factor gives a power, an irreducible quadratic gives a log plus an arctangent."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD PATTERN",
          "q": "Evaluate ∫d<i>x</i>/[(<i>x</i> − 1)(<i>x</i> + 2)].",
          "steps": [
            "Proper, and already factored. Template: <i>A</i>/(<i>x</i> − 1) + <i>B</i>/(<i>x</i> + 2).",
            "Clear: 1 = <i>A</i>(<i>x</i> + 2) + <i>B</i>(<i>x</i> − 1).",
            "Put <i>x</i> = 1: 1 = 3<i>A</i>, so <i>A</i> = 1/3. Put <i>x</i> = −2: 1 = −3<i>B</i>, so <i>B</i> = −1/3.",
            "∫ = (1/3) ln|<i>x</i> − 1| − (1/3) ln|<i>x</i> + 2|."
          ],
          "ans": "(1/3) ln|(<i>x</i> − 1)/(<i>x</i> + 2)| + <i>C</i>. Each root substitution kills one unknown, which is why you substitute roots and not convenient-looking numbers."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Evaluate ∫(3<i>x</i> + 1)/[(<i>x</i> + 1)(<i>x</i> − 2)] d<i>x</i>.",
          "steps": [
            "Distinct linear factors, so use cover-up and skip the algebra entirely.",
            "Cover (<i>x</i> + 1), put <i>x</i> = −1: (−3 + 1)/(−1 − 2) = 2/3.",
            "Cover (<i>x</i> − 2), put <i>x</i> = 2: (6 + 1)/(2 + 1) = 7/3.",
            "So the integrand is (2/3)/(<i>x</i> + 1) + (7/3)/(<i>x</i> − 2)."
          ],
          "ans": "(2/3) ln|<i>x</i> + 1| + (7/3) ln|<i>x</i> − 2| + <i>C</i>. <b>Speed lesson:</b> cover-up finds each constant in one mental step. Save the linear system for the cases that need it."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Evaluate ∫<i>x</i>/[(<i>x</i> − 1)<sup>2</sup>(<i>x</i> + 1)] d<i>x</i>.",
          "steps": [
            "Repeated factor, so three terms: <i>A</i>/(<i>x</i> − 1) + <i>B</i>/(<i>x</i> − 1)<sup>2</sup> + <i>K</i>/(<i>x</i> + 1). The third letter is <i>K</i> and not <i>C</i> on purpose: <i>C</i> is already spoken for as the constant of integration.",
            "Clear: <i>x</i> = <i>A</i>(<i>x</i> − 1)(<i>x</i> + 1) + <i>B</i>(<i>x</i> + 1) + <i>K</i>(<i>x</i> − 1)<sup>2</sup>.",
            "Put <i>x</i> = 1: 1 = 2<i>B</i>, so <i>B</i> = 1/2. Put <i>x</i> = −1: −1 = 4<i>K</i>, so <i>K</i> = −1/4. Compare <i>x</i><sup>2</sup> coefficients: 0 = <i>A</i> + <i>K</i>, so <i>A</i> = 1/4.",
            "Integrate: (1/4) ln|<i>x</i> − 1| + (1/2)·(−1/(<i>x</i> − 1)) − (1/4) ln|<i>x</i> + 1|."
          ],
          "ans": "(1/4) ln|(<i>x</i> − 1)/(<i>x</i> + 1)| − 1/[2(<i>x</i> − 1)] + <i>C</i>. Note the middle term is <b>not</b> a log: a squared factor in the denominator integrates to a power."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "Evaluate ∫<i>x</i><sup>3</sup>/(<i>x</i><sup>2</sup> + 1) d<i>x</i>.",
          "steps": [
            "Degree 3 on top against degree 2 below: improper. Divide before anything else.",
            "<i>x</i> · (<i>x</i><sup>2</sup> + 1) = <i>x</i><sup>3</sup> + <i>x</i>, so the remainder is −<i>x</i> and the integrand is <i>x</i> − <i>x</i>/(<i>x</i><sup>2</sup> + 1).",
            "The first piece is a power rule. The second is the log pattern from topic 02, with the numerator half the denominator's derivative."
          ],
          "ans": "<i>x</i><sup>2</sup>/2 − (1/2) ln(<i>x</i><sup>2</sup> + 1) + <i>C</i>. <b>Test the degree first.</b> Forcing a partial-fraction template onto an improper fraction is the most common way this whole method goes wrong."
        },
        {
          "t": "mcq",
          "q": "The correct partial-fraction template for 1/[(<i>x</i> − 2)<sup>2</sup>(<i>x</i> + 3)] is:",
          "opts": [
            { "label": "<i>A</i>/(<i>x</i> − 2) + <i>B</i>/(<i>x</i> + 3)", "nudge": "This treats the squared factor as though it appeared once. A factor raised to the power 2 contributes <b>two</b> terms, and dropping one makes the identity unsolvable." },
            { "label": "<i>A</i>/(<i>x</i> − 2)<sup>2</sup> + <i>B</i>/(<i>x</i> + 3)", "nudge": "The other half of the same mistake: the squared term is there but the plain (<i>x</i> − 2) term is missing. You need both." },
            { "label": "<i>A</i>/(<i>x</i> − 2) + <i>B</i>/(<i>x</i> − 2)<sup>2</sup> + <i>K</i>/(<i>x</i> + 3)", "nudge": null },
            { "label": "(<i>Ax</i> + <i>B</i>)/(<i>x</i> − 2)<sup>2</sup> + <i>K</i>/(<i>x</i> + 3)", "nudge": "A linear numerator is for an <b>irreducible quadratic</b> factor. (<i>x</i> − 2)<sup>2</sup> is a repeated linear factor, and it takes constants." }
          ],
          "correct": 2,
          "solution": "A repeated linear factor raised to <i>k</i> contributes one term at each power from 1 to <i>k</i>, each with a constant numerator, plus one term for every other factor."
        },
        {
          "t": "mcq",
          "q": "Before applying partial fractions to <i>x</i><sup>2</sup>/(<i>x</i><sup>2</sup> − 1), you must first:",
          "opts": [
            { "label": "factor the denominator only", "nudge": "Factoring is step 2, not step 1. Doing it first and stopping there leaves an improper fraction, and the constants you then solve for will be wrong." },
            { "label": "complete the square", "nudge": "That is the move for an <b>irreducible</b> quadratic. This denominator factors as (<i>x</i> − 1)(<i>x</i> + 1), so there is nothing to complete." },
            { "label": "divide, because it is improper", "nudge": null },
            { "label": "substitute <i>u</i> = <i>x</i><sup>2</sup>", "nudge": "That leaves a d<i>u</i> = 2<i>x</i> d<i>x</i> with no <i>x</i> anywhere in the integrand to supply it, so the substitution stalls immediately." }
          ],
          "correct": 2,
          "solution": "Numerator degree equals denominator degree, so the fraction is improper. Dividing gives 1 + 1/(<i>x</i><sup>2</sup> − 1), and only then does the template apply, to the remainder."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "Evaluate ∫d<i>x</i>/√(25 − <i>x</i><sup>2</sup>).",
              "a": "sin<sup>−1</sup>(<i>x</i>/5) + <i>C</i>. Root, and <i>a</i><sup>2</sup> − <i>x</i><sup>2</sup> inside, so arcsine with <i>a</i> = 5 and no leading factor."
            },
            {
              "q": "Evaluate ∫d<i>x</i>/(9 − 4<i>x</i><sup>2</sup>).",
              "a": "(1/12) ln|(3 + 2<i>x</i>)/(3 − 2<i>x</i>)| + <i>C</i>. Pull the 4 out first: the integral is (1/4)∫d<i>x</i>/(9/4 − <i>x</i><sup>2</sup>), which is the third template with <i>a</i> = 3/2, giving (1/4)(1/3) ln|(3/2 + <i>x</i>)/(3/2 − <i>x</i>)|."
            },
            {
              "q": "Evaluate ∫d<i>x</i>/[(<i>x</i> + 1)<sup>2</sup><i>x</i>].",
              "a": "ln|<i>x</i>/(<i>x</i> + 1)| + 1/(<i>x</i> + 1) + <i>C</i>. Template <i>A</i>/<i>x</i> + <i>B</i>/(<i>x</i> + 1) + <i>K</i>/(<i>x</i> + 1)<sup>2</sup> gives <i>A</i> = 1, <i>K</i> = −1 and then <i>B</i> = −1 from the <i>x</i><sup>2</sup> coefficient. The squared term integrates to +1/(<i>x</i> + 1), not to a log."
            },
            {
              "q": "Evaluate ∫<i>x</i><sup>2</sup>/(<i>x</i><sup>2</sup> + 4) d<i>x</i>.",
              "a": "<i>x</i> − 2 tan<sup>−1</sup>(<i>x</i>/2) + <i>C</i>. Improper, so divide: the integrand is 1 − 4/(<i>x</i><sup>2</sup> + 4), and the second piece is 4 × (1/2) tan<sup>−1</sup>(<i>x</i>/2)."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Confusing <i>x</i><sup>2</sup> + <i>a</i><sup>2</sup> with <i>x</i><sup>2</sup> − <i>a</i><sup>2</sup>.</b> The sign in the denominator alone decides between an arctangent and a log of a ratio. Read it first, before you write a single symbol.",
            "<b>Inserting or dropping the 1/<i>a</i>.</b> The arctangent row carries it. The arcsine row does not. There is no pattern to deduce it from, so learn which is which.",
            "<b>Reaching for a template when the numerator contains <i>x</i>.</b> A constant numerator goes to a template; a numerator with an <i>x</i> in it must be split into derivative-part plus constant-part first, and the two parts then use different rows.",
            "<b>Forcing partial fractions onto an improper fraction.</b> If the numerator's degree is at least the denominator's, divide first. The constants you get otherwise are simply wrong.",
            "<b>Giving a repeated factor one term instead of two.</b> (<i>x</i> − <i>a</i>)<sup>2</sup> needs both <i>A</i>/(<i>x</i> − <i>a</i>) and <i>B</i>/(<i>x</i> − <i>a</i>)<sup>2</sup>, and an irreducible quadratic needs a <b>linear</b> numerator, not a constant."
          ]
        },
        {
          "t": "protip",
          "html": "decide the answer type in one glance, before any algebra. root or no root picks arcsine against arctangent. the sign in the denominator picks log against arctangent. numerator x against numerator 1 picks log against template. three binary questions and the shape of the answer is already fixed, which means you know what you are aiming at while you complete the square."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "∫d<i>x</i>/(<i>x</i><sup>2</sup> + <i>a</i><sup>2</sup>) = (1/<i>a</i>) tan<sup>−1</sup>(<i>x</i>/<i>a</i>)", "note": "plus is arctan, and it carries the 1/a" },
            { "f": "∫d<i>x</i>/(<i>x</i><sup>2</sup> − <i>a</i><sup>2</sup>) = (1/2<i>a</i>) ln|(<i>x</i> − <i>a</i>)/(<i>x</i> + <i>a</i>)|", "note": "minus is a log of a ratio" },
            { "f": "∫d<i>x</i>/√(<i>a</i><sup>2</sup> − <i>x</i><sup>2</sup>) = sin<sup>−1</sup>(<i>x</i>/<i>a</i>)", "note": "arcsine, and no 1/a anywhere" },
            { "f": "<i>px</i> + <i>q</i> = λ(quadratic)′ + μ", "note": "the master key for any linear over any quadratic" },
            { "f": "improper ⇒ divide · repeated ⇒ one term per power", "note": "the two setup errors the exam is built to punish" }
          ],
          "aids": [
            "plus is arctan, minus is log",
            "the root with a squared minus x squared is arcsine, and arcsine has no one over a",
            "improper? divide before you decide",
            "repeated factor means repeated terms, quadratic on the bottom means linear on top"
          ]
        }
      ]
    },
    {
      "n": "04",
      "title": "Integration by Parts, and Reduction Formulas",
      "chip": "04 BY PARTS",
      "kalam": "differentiate the one that gets simpler",
      "blocks": [
        {
          "t": "p",
          "html": "Substitution handles an integrand that is a function times its own derivative. But what about a product of two <b>unrelated</b> functions, <i>x</i> cos <i>x</i>, or <i>x e</i><sup>x</sup>? There is no inner function whose derivative is sitting alongside it, so there is nothing to peel off. Integration by parts is the technique built for exactly that, and it is the reverse of the <b>product rule</b> in the same way that substitution is the reverse of the chain rule."
        },
        {
          "t": "p",
          "html": "The product rule says (<i>uv</i>)′ = <i>u</i>′<i>v</i> + <i>uv</i>′. Rearrange it and integrate, and you get a formula that <b>trades one integral for another</b>. You do not solve the problem, you swap it. You differentiate the hard factor, integrate the easy one, and hope the new integral is simpler than the one you started with. The entire skill is choosing which factor plays which role, because the wrong choice hands you something worse."
        },
        {
          "t": "think",
          "html": "it is a relay race with one baton. you cannot integrate x cos x in a single runner's leg, so you hand off: differentiate the x, which becomes a plain 1, and integrate the cos x. after the handoff the leftover integral is just sin x, which one runner can finish. the skill is deciding who carries the baton first so the race actually ends."
        },
        {
          "t": "formula",
          "kicker": "INTEGRATION BY PARTS",
          "tag": "one integral traded for another",
          "main": "∫<i>u</i> d<i>v</i> = <i>uv</i> − ∫<i>v</i> d<i>u</i>,   equivalently   ∫<i>u v</i>′ d<i>x</i> = <i>uv</i> − ∫<i>u</i>′<i>v</i> d<i>x</i>",
          "legend": [
            "<i>u</i> is the factor you <b>differentiate</b>; <i>v</i>′ is the factor you <b>integrate</b> to get <i>v</i>",
            "it helps only if ∫<i>v</i> d<i>u</i> is easier than ∫<i>u</i> d<i>v</i>. If your new integral looks worse than the old one, you chose the wrong way round: swap and go again",
            "some integrals, ∫<i>e</i><sup>x</sup> sin <i>x</i> d<i>x</i> being the standard case, come back to themselves after two applications. That is not failure, it is the method working: you then solve for the integral algebraically"
          ],
          "note": "There is no <i>C</i> on the intermediate <i>v</i>. Any antiderivative will do, and adding a constant there adds a term that cancels itself out two lines later, so take the simplest one."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE FORMULA, AND THE SHORTCUT IT HIDES, TAP A LINE",
          "steps": [
            {
              "eq": "(<i>uv</i>)′ = <i>u</i>′<i>v</i> + <i>uv</i>′",
              "why": "The product rule, unchanged from last year. Everything in this topic comes from this one line."
            },
            {
              "eq": "<i>uv</i> = ∫<i>u</i>′<i>v</i> d<i>x</i> + ∫<i>uv</i>′ d<i>x</i>",
              "why": "Integrate both sides. The left side integrates to uv exactly, because uv is an antiderivative of its own derivative."
            },
            {
              "eq": "⇒ ∫<i>uv</i>′ d<i>x</i> = <i>uv</i> − ∫<i>u</i>′<i>v</i> d<i>x</i>",
              "why": "Move one integral across. That is the whole formula, in two lines, and it is a standard Board derivation worth being able to write cold."
            },
            {
              "eq": "now apply it to ∫<i>e</i><sup>x</sup><i>f</i>(<i>x</i>) d<i>x</i> with <i>u</i> = <i>f</i>, d<i>v</i> = <i>e</i><sup>x</sup> d<i>x</i>",
              "why": "A special case worth deriving separately, because it turns a whole family of hard-looking integrals into one-line answers."
            },
            {
              "eq": "∫<i>e</i><sup>x</sup><i>f</i> d<i>x</i> = <i>e</i><sup>x</sup><i>f</i> − ∫<i>e</i><sup>x</sup><i>f</i>′ d<i>x</i> ⇒ ∫<i>e</i><sup>x</sup>[<i>f</i> + <i>f</i>′] d<i>x</i> = <i>e</i><sup>x</sup><i>f</i> + <i>C</i>",
              "why": "Move the second integral to the left and the two integrals combine into one over f plus f-prime. So whenever you see e to the x multiplying a function and its own derivative, the answer is e to the x times the function, and no work is required at all."
            }
          ]
        },
        {
          "t": "defgrid",
          "title": "ILATE: which factor to differentiate",
          "rows": [
            { "k": "I, inverse trigonometric", "v": "sin<sup>−1</sup><i>x</i>, tan<sup>−1</sup><i>x</i>. Differentiating one turns it algebraic, which is the biggest simplification available" },
            { "k": "L, logarithmic", "v": "ln <i>x</i>. Its derivative is 1/<i>x</i>, and you almost never want to integrate it" },
            { "k": "A, algebraic", "v": "<i>x</i>, <i>x</i><sup>2</sup>, any polynomial. Each differentiation drops the degree by one, so repeated parts eventually clears it" },
            { "k": "T, trigonometric", "v": "sin <i>x</i>, cos <i>x</i>. Neither better nor worse under either operation, so it goes late" },
            { "k": "E, exponential", "v": "<i>e</i><sup>x</sup>, <i>a</i><sup>x</sup>. Never simplifies, so it is the one you integrate. Last in the list for exactly that reason" }
          ]
        },
        {
          "t": "proc",
          "title": "Working an integral by parts",
          "steps": [
            "<b>Name the two factors and rank them by ILATE.</b> Whichever comes earlier in the list is <i>u</i>, the one you differentiate. Everything else, including the d<i>x</i>, is d<i>v</i>.",
            "<b>Compute d<i>u</i> and <i>v</i>.</b> Differentiate <i>u</i>, integrate d<i>v</i>. Take the simplest <i>v</i>, no constant.",
            "<b>Write <i>uv</i> − ∫<i>v</i> d<i>u</i></b> and look hard at the new integral. If it is worse than the original, you have <i>u</i> and d<i>v</i> the wrong way round.",
            "<b>If the new integral is the original again</b>, as it is for ∫<i>e</i><sup>x</sup> sin <i>x</i> d<i>x</i>, apply parts once more, then treat <i>I</i> as an unknown and solve for it.",
            "<b>Check for the shortcut first, not last.</b> If the integrand is <i>e</i><sup>x</sup> times a sum, test whether the second term is the derivative of the first. If it is, write down <i>e</i><sup>x</sup> times the first term and stop.",
            "<b>A lone log or inverse-trig function is a product too.</b> Pair it with an invisible factor of 1, and parts applies."
          ]
        },
        {
          "t": "formula",
          "kicker": "THE TWO RESULTS WORTH KNOWING BY SIGHT",
          "tag": "one shortcut, one cycling pair",
          "main": "∫<i>e</i><sup>x</sup>[<i>f</i>(<i>x</i>) + <i>f</i>′(<i>x</i>)] d<i>x</i> = <i>e</i><sup>x</sup><i>f</i>(<i>x</i>) + <i>C</i>",
          "legend": [
            "the cycling pair, once and for all: ∫<i>e</i><sup>ax</sup> sin <i>bx</i> d<i>x</i> = <i>e</i><sup>ax</sup>(<i>a</i> sin <i>bx</i> − <i>b</i> cos <i>bx</i>)/(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>) + <i>C</i>",
            "and its partner ∫<i>e</i><sup>ax</sup> cos <i>bx</i> d<i>x</i> = <i>e</i><sup>ax</sup>(<i>a</i> cos <i>bx</i> + <i>b</i> sin <i>bx</i>)/(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>) + <i>C</i>",
            "both are what you get after doing parts twice and solving for <i>I</i>, so knowing the derivation matters more than knowing the formula, and the Board asks for the derivation"
          ],
          "note": "JEE Main asked ∫cos(ln <i>x</i>) d<i>x</i> in January 2019 for precisely the cycling reason: parts twice returns the original integral, and 2<i>I</i> = <i>x</i>[cos(ln <i>x</i>) + sin(ln <i>x</i>)] finishes it."
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD PATTERN",
          "q": "Evaluate ∫<i>x</i> cos <i>x</i> d<i>x</i>.",
          "steps": [
            "ILATE: Algebraic comes before Trigonometric, so <i>u</i> = <i>x</i> and d<i>v</i> = cos <i>x</i> d<i>x</i>.",
            "Then d<i>u</i> = d<i>x</i> and <i>v</i> = sin <i>x</i>.",
            "<i>x</i> sin <i>x</i> − ∫sin <i>x</i> d<i>x</i>.",
            "And ∫sin <i>x</i> d<i>x</i> = −cos <i>x</i>, so subtracting it adds a cosine."
          ],
          "ans": "<i>x</i> sin <i>x</i> + cos <i>x</i> + <i>C</i>. The plus sign at the end comes from the minus in the formula meeting the minus in ∫sin, and that double negative is where most of the marks are lost."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Evaluate ∫ln <i>x</i> d<i>x</i>.",
          "steps": [
            "There is only one function, so there seems to be nothing to split. Treat it as ln <i>x</i> · 1.",
            "ILATE: Log comes before Algebraic, so <i>u</i> = ln <i>x</i> and d<i>v</i> = 1 d<i>x</i>.",
            "d<i>u</i> = (1/<i>x</i>) d<i>x</i>, <i>v</i> = <i>x</i>.",
            "<i>x</i> ln <i>x</i> − ∫<i>x</i> · (1/<i>x</i>) d<i>x</i> = <i>x</i> ln <i>x</i> − ∫1 d<i>x</i>."
          ],
          "ans": "<i>x</i> ln <i>x</i> − <i>x</i> + <i>C</i>. <b>Speed lesson:</b> a lone ln <i>x</i>, tan<sup>−1</sup><i>x</i> or sin<sup>−1</sup><i>x</i> is always paired with an invisible 1. That single move is the whole question."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Evaluate <i>I</i> = ∫<i>e</i><sup>x</sup> sin <i>x</i> d<i>x</i>.",
          "steps": [
            "Parts with <i>u</i> = sin <i>x</i>, d<i>v</i> = <i>e</i><sup>x</sup> d<i>x</i>: <i>I</i> = <i>e</i><sup>x</sup> sin <i>x</i> − ∫<i>e</i><sup>x</sup> cos <i>x</i> d<i>x</i>.",
            "Parts again on the new integral, same choice of roles: ∫<i>e</i><sup>x</sup> cos <i>x</i> d<i>x</i> = <i>e</i><sup>x</sup> cos <i>x</i> + <i>I</i>.",
            "Substitute back: <i>I</i> = <i>e</i><sup>x</sup> sin <i>x</i> − <i>e</i><sup>x</sup> cos <i>x</i> − <i>I</i>.",
            "That is an equation in <i>I</i>, not a dead end: 2<i>I</i> = <i>e</i><sup>x</sup>(sin <i>x</i> − cos <i>x</i>)."
          ],
          "ans": "<i>I</i> = <i>e</i><sup>x</sup>(sin <i>x</i> − cos <i>x</i>)/2 + <i>C</i>. <b>Why it works:</b> the integral reappears, so you stop integrating and start doing algebra. Keep the same role assignment on both rounds, or the second round undoes the first."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "Evaluate ∫<i>e</i><sup>x</sup>(1/<i>x</i> − 1/<i>x</i><sup>2</sup>) d<i>x</i>.",
          "steps": [
            "Do not start integrating. Look at the bracket first: is the second term the derivative of the first?",
            "Take <i>f</i>(<i>x</i>) = 1/<i>x</i>. Then <i>f</i>′(<i>x</i>) = −1/<i>x</i><sup>2</sup>, which is exactly the second term.",
            "So the integrand is <i>e</i><sup>x</sup>[<i>f</i> + <i>f</i>′], and the shortcut applies with no work at all."
          ],
          "ans": "<i>e</i><sup>x</sup>/<i>x</i> + <i>C</i>. <b>Deep idea:</b> recognising the <i>f</i> plus <i>f</i>′ structure turns an integral that looks like two rounds of parts into a single line. Test for it every time you see <i>e</i><sup>x</sup> multiplying a sum."
        },
        {
          "t": "mcq",
          "q": "∫ln <i>x</i> d<i>x</i> equals:",
          "opts": [
            { "label": "1/<i>x</i> + <i>C</i>", "nudge": "That is the <b>derivative</b> of ln <i>x</i>. Integration and differentiation have been run in opposite directions." },
            { "label": "<i>x</i> ln <i>x</i> + <i>x</i> + <i>C</i>", "nudge": "The sign on the second term is wrong. The formula subtracts ∫<i>v</i> d<i>u</i>, and here that integral is ∫1 d<i>x</i> = <i>x</i>, so it comes off." },
            { "label": "<i>x</i> ln <i>x</i> − <i>x</i> + <i>C</i>", "nudge": null },
            { "label": "(ln <i>x</i>)<sup>2</sup>/2 + <i>C</i>", "nudge": "This is the answer to ∫(ln <i>x</i>)/<i>x</i> d<i>x</i>, where the 1/<i>x</i> supplies the derivative that makes a substitution work. There is no 1/<i>x</i> here." }
          ],
          "correct": 2,
          "solution": "Pair the log with an invisible 1, take <i>u</i> = ln <i>x</i> and <i>v</i> = <i>x</i>, and the remaining integral is ∫1 d<i>x</i>. Differentiate the answer: ln <i>x</i> + 1 − 1 = ln <i>x</i>."
        },
        {
          "t": "mcq",
          "q": "∫<i>e</i><sup>x</sup>(sin <i>x</i> + cos <i>x</i>) d<i>x</i> equals:",
          "opts": [
            { "label": "<i>e</i><sup>x</sup> sin <i>x</i> + <i>C</i>", "nudge": null },
            { "label": "<i>e</i><sup>x</sup> cos <i>x</i> + <i>C</i>", "nudge": "This takes <i>f</i> = cos <i>x</i>, but then <i>f</i>′ = −sin <i>x</i>, and the bracket has <b>plus</b> sin <i>x</i>. The structure does not match with the cosine in that role." },
            { "label": "<i>e</i><sup>x</sup>(sin <i>x</i> − cos <i>x</i>) + <i>C</i>", "nudge": "That is the answer to ∫<i>e</i><sup>x</sup> sin <i>x</i> d<i>x</i>, up to a factor of 2. Different integrand: this one has both trigonometric terms in the bracket." },
            { "label": "<i>e</i><sup>x</sup>(sin <i>x</i> + cos <i>x</i>)/2 + <i>C</i>", "nudge": "The halving belongs to the cycling result, where you solve 2<i>I</i> = something. Nothing cycles here, because the shortcut ends it in one step." }
          ],
          "correct": 0,
          "solution": "With <i>f</i> = sin <i>x</i> the derivative is cos <i>x</i>, so the bracket is exactly <i>f</i> + <i>f</i>′ and the answer is <i>e</i><sup>x</sup> <i>f</i>. Differentiate to confirm: <i>e</i><sup>x</sup> sin <i>x</i> + <i>e</i><sup>x</sup> cos <i>x</i>."
        },
        {
          "t": "p",
          "html": "One last use of parts, and it is the one the Board asks you to <b>prove</b>. Some integrals will not close in one step at any power: there is no identity that cracks ∫sec<sup>5</sup><i>x</i> d<i>x</i> open. What parts can do is relate the power <i>n</i> case to the power <i>n</i> − 2 case, which relates to <i>n</i> − 4, and so on down a ladder to something you already know. That relation is a <b>reduction formula</b>, and running down the ladder is how you actually evaluate a high power."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE SECANT REDUCTION FORMULA, TAP A LINE",
          "steps": [
            {
              "eq": "<i>I</i><sub>n</sub> = ∫sec<sup>n</sup><i>x</i> d<i>x</i>, peel off one sec<sup>2</sup><i>x</i>",
              "why": "Choosing what to peel is the only creative step. sec squared x is chosen because it is the derivative of tan x, so it integrates cleanly and gives a v you can work with."
            },
            {
              "eq": "<i>u</i> = sec<sup>n−2</sup><i>x</i>, d<i>v</i> = sec<sup>2</sup><i>x</i> d<i>x</i> ⇒ <i>v</i> = tan <i>x</i>",
              "why": "Parts, with the peeled factor as the piece to integrate and the remaining power as the piece to differentiate."
            },
            {
              "eq": "<i>I</i><sub>n</sub> = sec<sup>n−2</sup><i>x</i> tan <i>x</i> − (<i>n</i> − 2)∫sec<sup>n−2</sup><i>x</i> tan<sup>2</sup><i>x</i> d<i>x</i>",
              "why": "The derivative of sec to the n minus 2 brings down a factor of n minus 2 and one more sec x tan x, which pairs with the tan x from v to make tan squared x."
            },
            {
              "eq": "tan<sup>2</sup><i>x</i> = sec<sup>2</sup><i>x</i> − 1 ⇒ <i>I</i><sub>n</sub> = sec<sup>n−2</sup><i>x</i> tan <i>x</i> − (<i>n</i> − 2)<i>I</i><sub>n</sub> + (<i>n</i> − 2)<i>I</i><sub>n−2</sub>",
              "why": "This identity is what makes the remaining integral split into the original power n and the power n minus 2. The original has reappeared, exactly as in the cycling examples."
            },
            {
              "eq": "(<i>n</i> − 1)<i>I</i><sub>n</sub> = sec<sup>n−2</sup><i>x</i> tan <i>x</i> + (<i>n</i> − 2)<i>I</i><sub>n−2</sub>",
              "why": "Collect the two copies of I sub n on the left. One step down the ladder, and the same move run repeatedly gets you to I sub 1 or I sub 0, both of which are known."
            }
          ]
        },
        {
          "t": "defgrid",
          "title": "The three recurrences, and where each ladder ends",
          "rows": [
            { "k": "<i>I</i><sub>n</sub> = ∫tan<sup>n</sup><i>x</i> d<i>x</i>", "v": "<i>I</i><sub>n</sub> = tan<sup>n−1</sup><i>x</i>/(<i>n</i> − 1) − <i>I</i><sub>n−2</sub>. Straight substitution, no parts needed, because sec<sup>2</sup><i>x</i> appears on its own" },
            { "k": "<i>I</i><sub>n</sub> = ∫sec<sup>n</sup><i>x</i> d<i>x</i>", "v": "(<i>n</i> − 1)<i>I</i><sub>n</sub> = sec<sup>n−2</sup><i>x</i> tan <i>x</i> + (<i>n</i> − 2)<i>I</i><sub>n−2</sub>. Parts, derived above" },
            { "k": "<i>W</i><sub>n</sub> = ∫(0→π/2) sin<sup>n</sup><i>x</i> d<i>x</i>", "v": "<i>W</i><sub>n</sub> = [(<i>n</i> − 1)/<i>n</i>] <i>W</i><sub>n−2</sub>. Parts, with the boundary term vanishing at both ends" },
            { "k": "Where the ladders end", "v": "<i>I</i><sub>1</sub> = ∫tan <i>x</i> d<i>x</i> = −ln|cos <i>x</i>| and ∫sec <i>x</i> d<i>x</i> = ln|sec <i>x</i> + tan <i>x</i>|; <i>I</i><sub>0</sub> = <i>x</i>; and <i>W</i><sub>0</sub> = π/2, <i>W</i><sub>1</sub> = 1" }
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD PATTERN",
          "q": "Evaluate ∫tan<sup>4</sup><i>x</i> d<i>x</i>.",
          "steps": [
            "Apply the tangent recurrence at <i>n</i> = 4: <i>I</i><sub>4</sub> = tan<sup>3</sup><i>x</i>/3 − <i>I</i><sub>2</sub>.",
            "<i>I</i><sub>2</sub> = ∫tan<sup>2</sup><i>x</i> d<i>x</i> = ∫(sec<sup>2</sup><i>x</i> − 1) d<i>x</i> = tan <i>x</i> − <i>x</i>.",
            "So <i>I</i><sub>4</sub> = tan<sup>3</sup><i>x</i>/3 − tan <i>x</i> + <i>x</i>.",
            "Check by differentiating: tan<sup>2</sup><i>x</i> sec<sup>2</sup><i>x</i> − sec<sup>2</sup><i>x</i> + 1 = sec<sup>2</sup><i>x</i>(tan<sup>2</sup><i>x</i> − 1) + 1 = tan<sup>4</sup><i>x</i>."
          ],
          "ans": "tan<sup>3</sup><i>x</i>/3 − tan <i>x</i> + <i>x</i> + <i>C</i>. Two steps down the ladder and it lands on something the table already knows."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Evaluate ∫tan<sup>5</sup><i>x</i> d<i>x</i>.",
          "steps": [
            "<i>I</i><sub>5</sub> = tan<sup>4</sup><i>x</i>/4 − <i>I</i><sub>3</sub>, and <i>I</i><sub>3</sub> = tan<sup>2</sup><i>x</i>/2 − <i>I</i><sub>1</sub>.",
            "<i>I</i><sub>1</sub> = ∫tan <i>x</i> d<i>x</i> = −ln|cos <i>x</i>|, so <i>I</i><sub>3</sub> = tan<sup>2</sup><i>x</i>/2 + ln|cos <i>x</i>|.",
            "Substituting: <i>I</i><sub>5</sub> = tan<sup>4</sup><i>x</i>/4 − tan<sup>2</sup><i>x</i>/2 <b>−</b> ln|cos <i>x</i>|. The minus on the log is not optional, it is what the recurrence produced.",
            "Verify: differentiating gives tan<sup>3</sup><i>x</i> sec<sup>2</sup><i>x</i> − tan <i>x</i> sec<sup>2</sup><i>x</i> + tan <i>x</i> = tan <i>x</i>(tan<sup>4</sup><i>x</i> − 1 + 1) = tan<sup>5</sup><i>x</i>."
          ],
          "ans": "tan<sup>4</sup><i>x</i>/4 − tan<sup>2</sup><i>x</i>/2 − ln|cos <i>x</i>| + <i>C</i>, which is also tan<sup>4</sup><i>x</i>/4 − tan<sup>2</sup><i>x</i>/2 + ln|sec <i>x</i>| + <i>C</i>. <b>The book prints a plus in front of ln|cos <i>x</i>| here.</b> Differentiate that version and you get tan <i>x</i>(tan<sup>4</sup><i>x</i> − 2), not tan<sup>5</sup><i>x</i>, and the book's own two-step recurrence gives the minus."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "Evaluate ∫sec<sup>5</sup><i>x</i> d<i>x</i>, and ∫(0→π/2) sin<sup>8</sup><i>x</i> d<i>x</i>.",
          "steps": [
            "Secant, <i>n</i> = 5: 4<i>I</i><sub>5</sub> = sec<sup>3</sup><i>x</i> tan <i>x</i> + 3<i>I</i><sub>3</sub>, and 2<i>I</i><sub>3</sub> = sec <i>x</i> tan <i>x</i> + <i>I</i><sub>1</sub>.",
            "<i>I</i><sub>1</sub> = ∫sec <i>x</i> d<i>x</i> = ln|sec <i>x</i> + tan <i>x</i>|. Assemble upward.",
            "Sine: run <i>W</i><sub>n</sub> = [(<i>n</i> − 1)/<i>n</i>]<i>W</i><sub>n−2</sub> from 8 down to <i>W</i><sub>0</sub> = π/2, giving (7/8)(5/6)(3/4)(1/2)(π/2).",
            "That is (105/384)(π/2) = 35π/256, and Walli's closed form with <i>n</i> = 8, <i>m</i> = 0 gives 7!!/8!! × π/2, the same fraction. The recurrence <b>is</b> Walli's formula, derived."
          ],
          "ans": "∫sec<sup>5</sup><i>x</i> d<i>x</i> = sec<sup>3</sup><i>x</i> tan <i>x</i>/4 + (3/8) sec <i>x</i> tan <i>x</i> + (3/8) ln|sec <i>x</i> + tan <i>x</i>| + <i>C</i>, and ∫(0→π/2) sin<sup>8</sup><i>x</i> d<i>x</i> = 35π/256."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "Evaluate ∫<i>x e</i><sup>x</sup> d<i>x</i>.",
              "a": "<i>e</i><sup>x</sup>(<i>x</i> − 1) + <i>C</i>. ILATE puts Algebraic before Exponential, so differentiate the <i>x</i> and integrate the <i>e</i><sup>x</sup>."
            },
            {
              "q": "Evaluate ∫<i>x</i><sup>2</sup> ln <i>x</i> d<i>x</i>.",
              "a": "(<i>x</i><sup>3</sup>/3) ln <i>x</i> − <i>x</i><sup>3</sup>/9 + <i>C</i>. Log beats Algebraic, so <i>u</i> = ln <i>x</i>, and the leftover integral is ∫<i>x</i><sup>2</sup>/3 d<i>x</i>."
            },
            {
              "q": "Evaluate ∫<i>e</i><sup>x</sup>[tan<sup>−1</sup><i>x</i> + 1/(1 + <i>x</i><sup>2</sup>)] d<i>x</i>.",
              "a": "<i>e</i><sup>x</sup> tan<sup>−1</sup><i>x</i> + <i>C</i>. The bracket is <i>f</i> + <i>f</i>′ with <i>f</i> = tan<sup>−1</sup><i>x</i>, so the shortcut gives it in one line. Doing parts here works but costs four times as long."
            },
            {
              "q": "Evaluate ∫(0→π/2) cos<sup>7</sup><i>x</i> d<i>x</i>.",
              "a": "16/35. The cosine ladder is the same recurrence as the sine one, so it is (6/7)(4/5)(2/3) × <i>W</i><sub>1</sub> with <i>W</i><sub>1</sub> = 1, giving 48/105."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Choosing <i>u</i> and d<i>v</i> the wrong way round.</b> Differentiate the ILATE-earlier function. Pick <i>u</i> = <i>e</i><sup>x</sup> on ∫<i>x e</i><sup>x</sup> d<i>x</i> and the new integral has an <i>x</i><sup>2</sup> in it, which is worse than what you started with.",
            "<b>Losing the sign that ∫sin <i>x</i> d<i>x</i> = −cos <i>x</i> introduces.</b> On ∫<i>x</i> sin <i>x</i> d<i>x</i> the minus appears twice, once from <i>v</i> and once from the formula, and only one of them survives.",
            "<b>Looping forever on a cycling integral.</b> When the original reappears, stop integrating. Treat <i>I</i> as an unknown, collect it on one side and divide.",
            "<b>Grinding through parts without checking for <i>e</i><sup>x</sup>[<i>f</i> + <i>f</i>′].</b> Whenever <i>e</i><sup>x</sup> multiplies a sum, spend three seconds asking whether the second term is the derivative of the first.",
            "<b>Treating a reduction formula as a closed answer.</b> <i>I</i><sub>n</sub> in terms of <i>I</i><sub>n−2</sub> is not a value. You have to run the ladder all the way down to <i>I</i><sub>0</sub> or <i>I</i><sub>1</sub> and substitute back upward."
          ]
        },
        {
          "t": "protip",
          "html": "before you grind through parts on anything that starts with e to the x, test the f plus f prime pattern. it converts a whole class of hard-looking integrals into instant answers, and it costs nothing to check. and for a lone log or a lone inverse trig function, remember the invisible times one. those two habits between them cover most of what this topic is actually asked for."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "∫<i>u</i> d<i>v</i> = <i>uv</i> − ∫<i>v</i> d<i>u</i>", "note": "one integral traded for a better one" },
            { "f": "ILATE picks <i>u</i>", "note": "inverse trig, log, algebraic, trig, exponential: differentiate the earliest" },
            { "f": "∫<i>e</i><sup>x</sup>[<i>f</i> + <i>f</i>′] d<i>x</i> = <i>e</i><sup>x</sup><i>f</i> + <i>C</i>", "note": "the shortcut worth testing for every time" },
            { "f": "<i>I</i> reappears ⇒ solve 2<i>I</i> = something", "note": "cycling is the method working, not failing" },
            { "f": "(<i>n</i> − 1)<i>I</i><sub>n</sub> = sec<sup>n−2</sup><i>x</i> tan <i>x</i> + (<i>n</i> − 2)<i>I</i><sub>n−2</sub>", "note": "and W_n = ((n−1)/n) W_(n−2), which is Walli derived" }
          ],
          "aids": [
            "ilate: differentiate the one that comes first",
            "e to the x times f plus f prime is e to the x times f",
            "sine integrates to minus cosine, and that minus meets the formula's minus",
            "a reduction formula is a ladder, not an answer; climb all the way down"
          ]
        }
      ]
    },
    {
      "n": "05",
      "title": "The Definite Integral: Signed Area, Two Theorems, Moving Limits",
      "chip": "05 DEFINITE",
      "kalam": "a number, not a family, and no plus C anywhere",
      "blocks": [
        {
          "t": "p",
          "html": "Everything so far has produced a <b>family</b> of functions. A definite integral produces a single <b>number</b>: the net accumulation of a quantity between two endpoints. Geometrically, ∫(<i>a</i>→<i>b</i>) <i>f</i>(<i>x</i>) d<i>x</i> is the <b>signed area</b> between the curve <i>y</i> = <i>f</i>(<i>x</i>) and the <i>x</i>-axis, from <i>x</i> = <i>a</i> to <i>x</i> = <i>b</i>. Area above the axis counts positive. Area below counts negative. That word <b>signed</b> is doing serious work, and the figure below is what it means."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · SIGNED AREA IS NOT AREA",
          "chips": ["above the axis", "below the axis", "both at once"],
          "captions": [
            "y = x cubed minus 3x, from minus root 3 to 0. The curve is above the axis, the region has area 9/4, and the integral over that stretch is plus 9/4.",
            "The same curve from 0 to root 3. Identical region, flipped. Its area is still 9/4, but the integral over that stretch is minus 9/4, because the curve is below the axis.",
            "Both together, over the symmetric interval. The integral is 9/4 minus 9/4, which is 0. The area enclosed is 9/4 plus 9/4, which is 9/2. Same picture, two different questions, two different answers."
          ],
          "frames": [
            {
              "x": [-2.3, 2.3],
              "y": [-5.6, 5.6],
              "curves": [{ "c": "poly", "coeffs": [0, -3, 0, 1] }],
              "areas": [{ "under": { "c": "poly", "coeffs": [0, -3, 0, 1] }, "from": -1.7320508, "to": 0 }],
              "labels": [{ "x": -1.0, "y": 3.4, "text": "counts positive" }]
            },
            {
              "x": [-2.3, 2.3],
              "y": [-5.6, 5.6],
              "curves": [{ "c": "poly", "coeffs": [0, -3, 0, 1] }],
              "areas": [{ "under": { "c": "poly", "coeffs": [0, -3, 0, 1] }, "from": 0, "to": 1.7320508 }],
              "labels": [{ "x": 1.0, "y": -3.4, "text": "counts negative" }]
            },
            {
              "x": [-2.3, 2.3],
              "y": [-5.6, 5.6],
              "curves": [{ "c": "poly", "coeffs": [0, -3, 0, 1] }],
              "areas": [
                { "under": { "c": "poly", "coeffs": [0, -3, 0, 1] }, "from": -1.7320508, "to": 0 },
                { "under": { "c": "poly", "coeffs": [0, -3, 0, 1] }, "from": 0, "to": 1.7320508 }
              ],
              "labels": [
                { "x": -1.0, "y": 3.4, "text": "+ 9/4" },
                { "x": 1.0, "y": -3.4, "text": "− 9/4" },
                { "x": 0, "y": -4.9, "text": "integral 0, area 9/2" }
              ]
            }
          ]
        },
        {
          "t": "p",
          "html": "So <b>“evaluate the integral” and “find the area” are different questions</b>, and an exam that asks for one will happily offer the other as a distractor. If the curve dips below the axis anywhere in your interval, the geometric area is ∫|<i>f</i>|, which means splitting at the roots of <i>f</i> and adding the absolute values of the pieces. An odd function on a symmetric interval integrates to zero while enclosing perfectly real, positive area. Read the verb in the question before you compute anything."
        },
        {
          "t": "think",
          "html": "picture filling a tank from a tap whose flow rate keeps changing. the limit of a sum is measuring the inflow second by second and adding thousands of tiny amounts: accurate, exhausting. the fundamental theorem is the water meter on the wall. read it at the start, read it at the end, subtract, and you know the total without tracking a single drop."
        },
        {
          "t": "def",
          "term": "Definite integral, as a limit of a sum",
          "html": "For <i>f</i> continuous on [<i>a</i>, <i>b</i>], with <i>h</i> = (<i>b</i> − <i>a</i>)/<i>n</i>, the definite integral is defined as <b>∫(<i>a</i>→<i>b</i>) <i>f</i>(<i>x</i>) d<i>x</i> = lim <i>h</i>[<i>f</i>(<i>a</i>) + <i>f</i>(<i>a</i> + <i>h</i>) + … + <i>f</i>(<i>a</i> + (<i>n</i> − 1)<i>h</i>)]</b> as <i>n</i> → ∞. Slice [<i>a</i>, <i>b</i>] into <i>n</i> thin strips, treat each as a rectangle of width <i>h</i> and height the function value at its left edge, add them up, and let the strips shrink. This is what the integral <b>is</b>. Everything else in this topic is a way of avoiding having to compute it this way."
        },
        {
          "t": "formula",
          "kicker": "THE SECOND FUNDAMENTAL THEOREM, THE ONE YOU EVALUATE WITH",
          "tag": "upper minus lower, and no plus C",
          "main": "∫(<i>a</i>→<i>b</i>) <i>f</i>(<i>x</i>) d<i>x</i> = [<i>F</i>(<i>x</i>)] from <i>a</i> to <i>b</i> = <i>F</i>(<i>b</i>) − <i>F</i>(<i>a</i>),   where <i>F</i>′ = <i>f</i>",
          "legend": [
            "<b>any</b> antiderivative works, and that is the surprising part: the <i>C</i> cancels, because (<i>F</i>(<i>b</i>) + <i>C</i>) − (<i>F</i>(<i>a</i>) + <i>C</i>) is just <i>F</i>(<i>b</i>) − <i>F</i>(<i>a</i>)",
            "the order is fixed and it is <b>upper minus lower</b>. Swap them and the answer changes sign, which is a real property and not a mistake, but only if you meant to",
            "the answer is a number, so writing + <i>C</i> on it is not a harmless habit, it is a category error: a number does not have a family"
          ],
          "note": "This theorem is what makes integration computable. Without it every definite integral would be an infinite summing chore, and this chapter would be about two hundred pages longer."
        },
        {
          "t": "formula",
          "kicker": "THE FIRST FUNDAMENTAL THEOREM, THE ONE THAT EXPLAINS WHY",
          "tag": "differentiate an integral, get the integrand back",
          "main": "<i>A</i>(<i>x</i>) = ∫(<i>a</i>→<i>x</i>) <i>f</i>(<i>t</i>) d<i>t</i>   ⇒   <i>A</i>′(<i>x</i>) = <i>f</i>(<i>x</i>)",
          "legend": [
            "<i>A</i> is the <b>area function</b>: it accumulates area from a fixed left end <i>a</i> out to a moving right end <i>x</i>, so it is a function of <i>x</i>, not a number",
            "notice the dummy variable inside is <i>t</i>, not <i>x</i>. It has to be: <i>x</i> is already spoken for as the limit, and using it twice is a sure way to confuse yourself",
            "the statement is that <b>the rate at which accumulated area grows is exactly the height of the curve</b>, which is why antiderivatives compute areas at all"
          ],
          "note": "Read the two theorems together and they say one thing: differentiation and integration are inverse processes. The first says so going one way, the second says so going the other."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · THE AREA FUNCTION, AND HOW FAST IT GROWS",
          "chips": ["out to x = 1", "out to x = 2", "the next sliver"],
          "captions": [
            "The area under y = x squared over 2, accumulated from 0 out to 1. The shaded number is A(1), and it is 1/6.",
            "The same accumulation carried out to 2. A(2) is 4/3. Moving the right-hand end to the right always adds area, and never removes any, because this curve stays above the axis.",
            "Push the end a little further, by an amount delta x. The extra area is almost exactly a rectangle: height f(2), width delta x. So the change in A divided by delta x is about f(2), and in the limit that is A prime of 2 equals f of 2. That is the First Fundamental Theorem, drawn."
          ],
          "frames": [
            {
              "x": [0, 3.2],
              "y": [0, 5.4],
              "curves": [{ "c": "poly", "coeffs": [0, 0, 0.5] }],
              "areas": [{ "under": { "c": "poly", "coeffs": [0, 0, 0.5] }, "from": 0, "to": 1 }],
              "labels": [{ "x": 1.15, "y": 1.5, "text": "A(1) = 1/6" }]
            },
            {
              "x": [0, 3.2],
              "y": [0, 5.4],
              "curves": [{ "c": "poly", "coeffs": [0, 0, 0.5] }],
              "areas": [{ "under": { "c": "poly", "coeffs": [0, 0, 0.5] }, "from": 0, "to": 2 }],
              "labels": [{ "x": 1.05, "y": 2.9, "text": "A(2) = 4/3" }]
            },
            {
              "x": [0, 3.2],
              "y": [0, 5.4],
              "curves": [{ "c": "poly", "coeffs": [0, 0, 0.5] }],
              "areas": [{ "under": { "c": "poly", "coeffs": [0, 0, 0.5] }, "from": 0, "to": 2, "soft": true }],
              "bands": [{ "x0": 2, "x1": 2.4, "y0": 0, "y1": 2 }],
              "labels": [{ "x": 2.2, "y": 3.1, "text": "height f(2), width dx" }]
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE STRIP ARGUMENT, AND WHY THE SECOND THEOREM FOLLOWS, TAP A LINE",
          "steps": [
            {
              "eq": "<i>A</i>(<i>x</i>) = ∫(<i>a</i>→<i>x</i>) <i>f</i>(<i>t</i>) d<i>t</i>. Push the top end by Δ<i>x</i>.",
              "why": "The lower limit is nailed down and the upper one moves. Everything that follows is about what the extra strip on the right is worth."
            },
            {
              "eq": "<i>A</i>(<i>x</i> + Δ<i>x</i>) − <i>A</i>(<i>x</i>) ≈ <i>f</i>(<i>x</i>) Δ<i>x</i>",
              "why": "The extra area is a thin sliver of width delta x whose height is nearly constant at f(x), because f is continuous and the sliver is thin. So it is almost a rectangle."
            },
            {
              "eq": "[<i>A</i>(<i>x</i> + Δ<i>x</i>) − <i>A</i>(<i>x</i>)]/Δ<i>x</i> ≈ <i>f</i>(<i>x</i>) ⇒ <i>A</i>′(<i>x</i>) = <i>f</i>(<i>x</i>)",
              "why": "Divide by delta x and let it go to zero. The left side is the definition of the derivative of A, so A is an antiderivative of f. That is the First Fundamental Theorem."
            },
            {
              "eq": "so any other antiderivative is <i>F</i>(<i>x</i>) = <i>A</i>(<i>x</i>) + <i>k</i>",
              "why": "Two functions with the same derivative on an interval differ by a constant. This is the fact that makes the plus C legitimate, used here in the other direction."
            },
            {
              "eq": "<i>F</i>(<i>b</i>) − <i>F</i>(<i>a</i>) = <i>A</i>(<i>b</i>) − <i>A</i>(<i>a</i>) = ∫(<i>a</i>→<i>b</i>) <i>f</i> − 0",
              "why": "The constant k cancels in the subtraction, and A(a) is an integral from a to a, which is zero because it accumulates over no width at all. So F(b) minus F(a) is the integral, for any antiderivative F. That is the Second Fundamental Theorem, proved from the first."
            }
          ]
        },
        {
          "t": "defgrid",
          "title": "The structural properties this topic owns",
          "rows": [
            { "k": "P0, dummy variable", "v": "∫(<i>a</i>→<i>b</i>) <i>f</i>(<i>x</i>) d<i>x</i> = ∫(<i>a</i>→<i>b</i>) <i>f</i>(<i>t</i>) d<i>t</i>. The letter inside is invisible from outside, because the answer is a number" },
            { "k": "P1, reversal", "v": "∫(<i>a</i>→<i>b</i>) = −∫(<i>b</i>→<i>a</i>), and ∫(<i>a</i>→<i>a</i>) = 0. Swapping the ends flips the sign, and zero width gives zero" },
            { "k": "P2, additivity", "v": "∫(<i>a</i>→<i>b</i>) = ∫(<i>a</i>→<i>c</i>) + ∫(<i>c</i>→<i>b</i>). This is the property that lets you split a piecewise integrand at its breakpoints" },
            { "k": "No constant", "v": "a definite integral has no + <i>C</i> and is not a function of <i>x</i>. It is a number. Both of those are standard MCQ distractors" }
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD PATTERN",
          "q": "Evaluate ∫(1→2) (3<i>x</i><sup>2</sup> − 2<i>x</i> + 1) d<i>x</i>.",
          "steps": [
            "Antiderivative: <i>F</i>(<i>x</i>) = <i>x</i><sup>3</sup> − <i>x</i><sup>2</sup> + <i>x</i>. Drop the <i>C</i>, it cancels.",
            "<i>F</i>(2) = 8 − 4 + 2 = 6.",
            "<i>F</i>(1) = 1 − 1 + 1 = 1.",
            "Upper minus lower: 6 − 1."
          ],
          "ans": "5. Three lines, and the only place to go wrong is the order of the subtraction."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "Evaluate ∫(0→2) (<i>x</i><sup>2</sup> + 2<i>x</i>) d<i>x</i> from first principles, as a limit of a sum.",
          "steps": [
            "<i>a</i> = 0, <i>b</i> = 2, so <i>h</i> = 2/<i>n</i> and the sample points are <i>x</i><sub>r</sub> = 2<i>r</i>/<i>n</i> for <i>r</i> = 0 up to <i>n</i> − 1.",
            "The sum is (2/<i>n</i>) Σ [4<i>r</i><sup>2</sup>/<i>n</i><sup>2</sup> + 4<i>r</i>/<i>n</i>], which is (8/<i>n</i><sup>3</sup>) Σ<i>r</i><sup>2</sup> + (8/<i>n</i><sup>2</sup>) Σ<i>r</i>.",
            "Use the two power sums: Σ<i>r</i> = <i>n</i>(<i>n</i> − 1)/2 and Σ<i>r</i><sup>2</sup> = (<i>n</i> − 1)<i>n</i>(2<i>n</i> − 1)/6, both taken from <i>r</i> = 0 to <i>n</i> − 1.",
            "As <i>n</i> → ∞ the first term tends to (8/6)·2 = 8/3 and the second to 8/2 = 4."
          ],
          "ans": "8/3 + 4 = 20/3. Check with the Second Theorem: [<i>x</i><sup>3</sup>/3 + <i>x</i><sup>2</sup>] at 2 is 8/3 + 4 = 20/3. The two definitions agree, which is the whole point of the exercise, and the Board gives marks for showing they do."
        },
        {
          "t": "mcq",
          "q": "∫(0→π) sin <i>x</i> d<i>x</i> equals:",
          "opts": [
            { "label": "0", "nudge": "This comes from evaluating cos π − cos 0 instead of −cos π + cos 0. The antiderivative of sin <i>x</i> is <b>minus</b> cos <i>x</i>, and dropping that minus is the whole error." },
            { "label": "1", "nudge": "This is the value of ∫(0→π/2) sin <i>x</i> d<i>x</i>, over half the interval. The full hump is worth twice that." },
            { "label": "2", "nudge": null },
            { "label": "−2", "nudge": "Right magnitude, wrong order: this is lower minus upper. The rule is <i>F</i>(<i>b</i>) − <i>F</i>(<i>a</i>), always, and the sine hump on [0, π] sits above the axis so the answer must be positive." }
          ],
          "correct": 2,
          "solution": "[−cos <i>x</i>] from 0 to π is −cos π + cos 0 = −(−1) + 1 = 2."
        },
        {
          "t": "mcq",
          "q": "(d/d<i>x</i>) ∫(0→<i>x</i>) <i>t</i><sup>2</sup> d<i>t</i> equals:",
          "opts": [
            { "label": "<i>x</i><sup>3</sup>/3", "nudge": "That is the integral itself, not its derivative. The question asks you to differentiate what you would get, and you can skip computing it entirely." },
            { "label": "<i>x</i><sup>2</sup>", "nudge": null },
            { "label": "2<i>x</i>", "nudge": "This differentiates one time too many: it is the derivative of <i>x</i><sup>2</sup>, so the integral was computed and then differentiated twice." },
            { "label": "0", "nudge": "This treats the whole expression as a constant. It would be, if both limits were fixed; but the upper limit is <i>x</i>, so the expression genuinely varies with <i>x</i>." }
          ],
          "correct": 1,
          "solution": "The First Fundamental Theorem: differentiating an integral with respect to its upper limit returns the integrand evaluated there, so it is <i>t</i><sup>2</sup> with <i>t</i> replaced by <i>x</i>."
        },
        {
          "t": "proc",
          "title": "Substituting inside a definite integral",
          "steps": [
            "<b>Choose <i>u</i> = <i>g</i>(<i>x</i>)</b> and compute d<i>u</i> = <i>g</i>′(<i>x</i>) d<i>x</i>, exactly as for an indefinite integral.",
            "<b>Convert the limits.</b> The lower limit <i>x</i> = <i>a</i> becomes <i>u</i> = <i>g</i>(<i>a</i>), the upper limit <i>x</i> = <i>b</i> becomes <i>u</i> = <i>g</i>(<i>b</i>). Write them next to the integral sign immediately, before you forget.",
            "<b>Rewrite the whole integral in <i>u</i>,</b> integrand and limits together. As <i>x</i> sweeps from <i>a</i> to <i>b</i>, <i>u</i> sweeps from <i>g</i>(<i>a</i>) to <i>g</i>(<i>b</i>), and that is the range the new integral must run over.",
            "<b>Evaluate in <i>u</i>.</b> No back-substitution, ever. That is the point of changing the limits.",
            "<b>The alternative, if you prefer it:</b> keep the old limits, integrate, back-substitute to <i>x</i>, then apply the original limits. Both are correct. <b>Never mix them</b>, and never change the limits and back-substitute as well.",
            "<b>Check the substitution is one-to-one on the interval.</b> <i>u</i> = <i>x</i><sup>2</sup> across a sign change is not, so split the interval at 0 first."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD PATTERN",
          "q": "Evaluate ∫(0→1) <i>x</i>/(<i>x</i><sup>2</sup> + 1) d<i>x</i>.",
          "steps": [
            "<i>u</i> = <i>x</i><sup>2</sup> + 1, so d<i>u</i> = 2<i>x</i> d<i>x</i> and <i>x</i> d<i>x</i> = (1/2) d<i>u</i>.",
            "Convert the limits: <i>x</i> = 0 gives <i>u</i> = 1, and <i>x</i> = 1 gives <i>u</i> = 2.",
            "(1/2) ∫(1→2) d<i>u</i>/<i>u</i> = (1/2)[ln <i>u</i>] from 1 to 2.",
            "= (1/2)(ln 2 − ln 1) = (1/2) ln 2."
          ],
          "ans": "(1/2) ln 2. Both the integrand and the limits transformed; leaving the 0 and 1 on a <i>u</i>-integral would have given (1/2) ln 1 = 0, which is wrong and looks plausible."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Evaluate ∫(0→π/2) sin <i>x</i> cos <i>x</i> d<i>x</i>.",
          "steps": [
            "<i>u</i> = sin <i>x</i>, d<i>u</i> = cos <i>x</i> d<i>x</i>.",
            "Limits: <i>x</i> = 0 gives <i>u</i> = 0; <i>x</i> = π/2 gives <i>u</i> = 1. The trigonometric limits become ordinary numbers, which is half the appeal.",
            "∫(0→1) <i>u</i> d<i>u</i> = [<i>u</i><sup>2</sup>/2] from 0 to 1."
          ],
          "ans": "1/2. <b>Speed lesson:</b> once the limits are converted the answer falls out in <i>u</i>, and there is no route back to <i>x</i> that you have to remember not to take."
        },
        {
          "t": "formula",
          "kicker": "WHEN BOTH LIMITS MOVE: THE GENERAL LEIBNIZ RULE",
          "tag": "top limit in, bottom limit out",
          "main": "(d/d<i>x</i>) ∫(<i>u</i>(<i>x</i>)→<i>v</i>(<i>x</i>)) <i>f</i>(<i>t</i>) d<i>t</i> = <i>f</i>(<i>v</i>(<i>x</i>)) <i>v</i>′(<i>x</i>) − <i>f</i>(<i>u</i>(<i>x</i>)) <i>u</i>′(<i>x</i>)",
          "legend": [
            "it is one line of chain rule on the Second Theorem: the integral is Φ(<i>v</i>) − Φ(<i>u</i>) for an antiderivative Φ, and differentiating that gives exactly the two terms above",
            "evaluate <i>f</i> at each moving limit, multiply by that limit's derivative, then <b>upper term minus lower term</b>. A fixed limit contributes nothing, because its derivative is 0",
            "put <i>u</i> = <i>a</i> and <i>v</i> = <i>x</i> and it collapses to <i>f</i>(<i>x</i>)·1 − <i>f</i>(<i>a</i>)·0 = <i>f</i>(<i>x</i>), which is the First Fundamental Theorem back again"
          ],
          "note": "<b>Never hunt for an antiderivative first.</b> The rule exists precisely so that you do not need one, and the exam picks integrands like sin(<i>t</i><sup>2</sup>) and 1/ln <i>t</i> that have no elementary antiderivative at all. On symmetric limits [−<i>x</i>, <i>x</i>] the rule gives <i>f</i>(<i>x</i>) + <i>f</i>(−<i>x</i>), so an odd <i>f</i> makes the accumulated integral constant, exactly as parity predicts."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "Let <i>H</i>(<i>x</i>) = ∫(<i>x</i>→<i>x</i><sup>2</sup>) sin(<i>t</i><sup>2</sup>) d<i>t</i>. Find <i>H</i>′(<i>x</i>).",
          "steps": [
            "There is no elementary antiderivative of sin(<i>t</i><sup>2</sup>). That is not an obstacle here, it is the reason the question exists.",
            "Upper limit <i>v</i> = <i>x</i><sup>2</sup>, so <i>v</i>′ = 2<i>x</i>, and <i>f</i>(<i>v</i>) = sin(<i>x</i><sup>4</sup>).",
            "Lower limit <i>u</i> = <i>x</i>, so <i>u</i>′ = 1, and <i>f</i>(<i>u</i>) = sin(<i>x</i><sup>2</sup>).",
            "Upper term minus lower term."
          ],
          "ans": "<i>H</i>′(<i>x</i>) = 2<i>x</i> sin(<i>x</i><sup>4</sup>) − sin(<i>x</i><sup>2</sup>). Note that <i>f</i>(<i>v</i>) means sin of (<i>x</i><sup>2</sup>) squared, which is sin(<i>x</i><sup>4</sup>), and substituting carelessly there is the usual slip."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "For <i>F</i>(<i>x</i>) = ∫(0→<i>x</i>) (<i>t</i> − 1)(<i>t</i> − 2) d<i>t</i>, find and classify the turning points, and give the local minimum value.",
          "steps": [
            "Differentiate under the integral sign rather than integrating: <i>F</i>′(<i>x</i>) = (<i>x</i> − 1)(<i>x</i> − 2).",
            "Sign chart: positive on (−∞, 1), negative on (1, 2), positive on (2, ∞). So <i>x</i> = 1 is a local maximum and <i>x</i> = 2 a local minimum. Confirm with <i>F</i>″(<i>x</i>) = 2<i>x</i> − 3, giving <i>F</i>″(2) = 1 > 0.",
            "<i>F</i>(2) = ∫(0→2) (<i>t</i><sup>2</sup> − 3<i>t</i> + 2) d<i>t</i> = [<i>t</i><sup>3</sup>/3 − 3<i>t</i><sup>2</sup>/2 + 2<i>t</i>] at 2 = 8/3 − 6 + 4 = 2/3.",
            "<b>And it is not a global minimum.</b> For <i>x</i> < 0, <i>F</i>(<i>x</i>) = −∫(<i>x</i>→0)(<i>t</i> − 1)(<i>t</i> − 2) d<i>t</i>, and the integrand is positive for every <i>t</i> < 1, so <i>F</i>(<i>x</i>) → −∞ as <i>x</i> → −∞. For instance <i>F</i>(−1) = −23/6."
          ],
          "ans": "<i>x</i> = 2 is the unique local minimum, with <i>F</i>(2) = 2/3. <b>The book asks for “the minimum value over all real <i>x</i>” and answers 2/3.</b> There is no global minimum: its supporting line computes <i>F</i>(−1) as +23/6 by inserting a stray minus sign, when evaluating <i>t</i><sup>3</sup>/3 − 3<i>t</i><sup>2</sup>/2 + 2<i>t</i> at −1 gives −1/3 − 3/2 − 2 = −23/6. Even on <i>x</i> ≥ 0 the least value is <i>F</i>(0) = 0."
        },
        {
          "t": "formula",
          "kicker": "READING A LIMIT OF A SUM BACKWARDS",
          "tag": "the definition, run in the direction the exam runs it",
          "main": "∫(0→1) <i>f</i>(<i>x</i>) d<i>x</i> = lim (1/<i>n</i>) Σ <i>f</i>(<i>r</i>/<i>n</i>), the sum over <i>r</i> = 1 to <i>n</i>, as <i>n</i> → ∞",
          "legend": [
            "<b>factor out a 1/<i>n</i>,</b> which is your <i>h</i>. Whatever is left has to become a function of <i>r</i>/<i>n</i> and nothing else, and you force that by dividing top and bottom by the highest power of <i>n</i> present",
            "<b>read the limits off the range of <i>r</i>/<i>n</i>.</b> <i>r</i> from 1 to <i>n</i> gives the interval 0 to 1; <i>r</i> from <i>n</i> + 1 to 2<i>n</i> gives 1 to 2",
            "worked once: Σ <i>n</i>/(<i>n</i><sup>2</sup> + <i>r</i><sup>2</sup>) becomes (1/<i>n</i>) Σ 1/[1 + (<i>r</i>/<i>n</i>)<sup>2</sup>], which is ∫(0→1) d<i>x</i>/(1 + <i>x</i><sup>2</sup>) = π/4, in three lines and with no summation formula at all"
          ],
          "note": "A constant shift inside the argument, such as <i>f</i>((<i>r</i> + 1)/<i>n</i>), changes nothing in the limit: the shifted grid still fills the same interval. This pattern is rare in Boards and live at Advanced level, so learn the mechanics and do not over-invest."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "Evaluate ∫(1→4) d<i>x</i>/√<i>x</i>.",
              "a": "2. The antiderivative of <i>x</i> to the minus half is 2√<i>x</i>, so it is 2·2 − 2·1."
            },
            {
              "q": "Evaluate ∫(0→π/2) cos <i>x</i> <i>e</i><sup>sin x</sup> d<i>x</i>.",
              "a": "<i>e</i> − 1. Put <i>t</i> = sin <i>x</i> and convert the limits to 0 and 1, giving ∫(0→1) <i>e</i><sup>t</sup> d<i>t</i>. Forgetting to subtract the lower-limit value leaves you with <i>e</i>, which is the offered trap."
            },
            {
              "q": "Find (d/d<i>x</i>) ∫(<i>x</i>→2<i>x</i>) <i>e</i><sup>−t2</sup> d<i>t</i>.",
              "a": "2<i>e</i><sup>−4x2</sup> − <i>e</i><sup>−x2</sup>. Leibniz: the upper limit 2<i>x</i> has derivative 2, the lower limit <i>x</i> has derivative 1, and there is no antiderivative to find."
            },
            {
              "q": "Evaluate lim (1/<i>n</i>) Σ √(1 + <i>r</i>/<i>n</i>), summed from <i>r</i> = 1 to <i>n</i>, as <i>n</i> → ∞.",
              "a": "(2/3)(2√2 − 1). The 1/<i>n</i> is already factored and the summand is already a function of <i>r</i>/<i>n</i>, so it is ∫(0→1) √(1 + <i>x</i>) d<i>x</i> = (2/3)[(1 + <i>x</i>)√(1 + <i>x</i>)] from 0 to 1."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Writing + <i>C</i> on a definite integral.</b> The result is a number, and the constant cancels in <i>F</i>(<i>b</i>) − <i>F</i>(<i>a</i>). Writing it says you have not noticed which kind of object you produced.",
            "<b>Reversing the order.</b> It is upper minus lower. Swapping them negates the answer, and the negated answer is always one of the four options.",
            "<b>Keeping the old limits on a <i>u</i>-integral.</b> The single most common error in the whole of definite substitution. If you switch to <i>u</i>, the limits become <i>g</i>(<i>a</i>) and <i>g</i>(<i>b</i>). And do not change the limits <b>and</b> back-substitute: that double-handles the conversion.",
            "<b>Answering “area” when you were asked for the integral, or the reverse.</b> If the curve crosses the axis inside the interval, the two numbers differ. Split at the roots for area; do not split at all for the integral.",
            "<b>Hunting an antiderivative when the limits move.</b> Questions built on Leibniz choose integrands that have none. Differentiate the expression, do not evaluate it."
          ]
        },
        {
          "t": "protip",
          "html": "for a first-principles question, memorise exactly three power sums: the count is n, the sum of r is n(n minus 1) over 2, and the sum of r squared is (n minus 1)n(2n minus 1) over 6. almost every board limit-of-a-sum reduces to a combination of those three, and the rest is arithmetic you can do while the person next to you is still expanding brackets."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "∫(<i>a</i>→<i>b</i>) <i>f</i> d<i>x</i> = <i>F</i>(<i>b</i>) − <i>F</i>(<i>a</i>)", "note": "any antiderivative; upper minus lower; no plus C" },
            { "f": "(d/d<i>x</i>) ∫(<i>a</i>→<i>x</i>) <i>f</i>(<i>t</i>) d<i>t</i> = <i>f</i>(<i>x</i>)", "note": "differentiate an integral, get the integrand back" },
            { "f": "(d/d<i>x</i>) ∫(<i>u</i>→<i>v</i>) <i>f</i> d<i>t</i> = <i>f</i>(<i>v</i>)<i>v</i>′ − <i>f</i>(<i>u</i>)<i>u</i>′", "note": "top limit in, bottom limit out" },
            { "f": "∫(<i>a</i>→<i>b</i>) <i>f</i>(<i>g</i>)<i>g</i>′ d<i>x</i> = ∫(<i>g</i>(<i>a</i>)→<i>g</i>(<i>b</i>)) <i>f</i>(<i>u</i>) d<i>u</i>", "note": "new variable, new limits, and then finish in u" },
            { "f": "signed integral ≠ enclosed area", "note": "area needs the modulus, split at the roots of f" }
          ],
          "aids": [
            "upper minus lower, and no C",
            "new variable, new limits: change the ends or change back, never both",
            "if the limits move, differentiate; never go looking for an antiderivative",
            "the integral can be zero while the area is not"
          ]
        }
      ]
    },
    {
      "n": "06",
      "title": "The Symmetry Toolkit",
      "chip": "06 SYMMETRY",
      "kalam": "read the limits first, the integrand second",
      "blocks": [
        {
          "t": "p",
          "html": "Someone hands you ∫(0→π/2) √sin <i>x</i>/(√sin <i>x</i> + √cos <i>x</i>) d<i>x</i> and asks for the value. You reach for an antiderivative, and there is not one, not in any elementary form. Brute force is a dead end. And yet the answer is a clean π/4, in two lines. That is this topic in one sentence: <b>the properties of definite integrals let you compute the value of an integral without ever finding an antiderivative</b>, by noticing symmetry in the function and in the interval. A definite integral is accumulated area, and area does not care which direction you sweep it. If a region looks the same after you flip it left to right about the midpoint of the interval, then sweeping from the left and sweeping from the right must give the same total. That single observation is the <b>king property</b>, and it is the biggest cluster of questions in the previous-year bank."
        },
        {
          "t": "think",
          "html": "imagine counting the total footfall at a railway platform whose morning and evening rush mirror each other about noon. you do not need to track every hour. measure the easy half and double it. and if the morning arrivals were exactly cancelled by an equal evening crowd of departures, an odd pattern, the net change over the day is zero and there is nothing to calculate at all."
        },
        {
          "t": "formula",
          "kicker": "THE KING PROPERTY",
          "tag": "replace x by the sum of the limits minus x",
          "main": "∫(<i>a</i>→<i>b</i>) <i>f</i>(<i>x</i>) d<i>x</i> = ∫(<i>a</i>→<i>b</i>) <i>f</i>(<i>a</i> + <i>b</i> − <i>x</i>) d<i>x</i>,   and with <i>a</i> = 0,   ∫(0→<i>a</i>) <i>f</i>(<i>x</i>) d<i>x</i> = ∫(0→<i>a</i>) <i>f</i>(<i>a</i> − <i>x</i>) d<i>x</i>",
          "legend": [
            "the replacement is <b><i>a</i> + <i>b</i> − <i>x</i></b>, the sum of the limits minus <i>x</i>, and it is only <i>a</i> − <i>x</i> when the lower limit happens to be 0. Using the wrong one silently wrecks the cancellation",
            "it holds for <b>any</b> continuous <i>f</i>, but it only <b>helps</b> when <i>f</i>(<i>a</i> + <i>b</i> − <i>x</i>) relates nicely to <i>f</i>(<i>x</i>), which on [0, π/2] means sin swapping with cos, and on [0, π] means sin staying put while a lone <i>x</i> becomes π − <i>x</i>",
            "the signature move: write <i>I</i>, write the flipped version, <b>add them</b>, and the sum usually collapses to the integral of 1. Then solve 2<i>I</i> = something easy, <b>and divide by two</b>"
          ],
          "note": "That final halving is the most-offered distractor in the entire chapter. After you add the two copies you are holding 2<i>I</i>, not <i>I</i>, and several published option sets carry the doubled value on purpose."
        },
        {
          "t": "defgrid",
          "title": "The rest of the toolkit",
          "rows": [
            { "k": "P5, the 0 to 2<i>a</i> split", "v": "∫(0→2<i>a</i>) <i>f</i>(<i>x</i>) d<i>x</i> = ∫(0→<i>a</i>) <i>f</i>(<i>x</i>) d<i>x</i> + ∫(0→<i>a</i>) <i>f</i>(2<i>a</i> − <i>x</i>) d<i>x</i>" },
            { "k": "P5 corollary", "v": "that equals 2∫(0→<i>a</i>) <i>f</i> when <i>f</i>(2<i>a</i> − <i>x</i>) = <i>f</i>(<i>x</i>), and 0 when <i>f</i>(2<i>a</i> − <i>x</i>) = −<i>f</i>(<i>x</i>). Symmetry about the midpoint, rather than about the origin" },
            { "k": "P6, even and odd", "v": "∫(−<i>a</i>→<i>a</i>) <i>f</i> d<i>x</i> = 2∫(0→<i>a</i>) <i>f</i> d<i>x</i> for even <i>f</i>, and 0 for odd <i>f</i>. <b>The limits must be symmetric.</b> On [0, 2] or [1, 3], parity tells you nothing at all" },
            { "k": "P7, periodic", "v": "if <i>f</i>(<i>x</i> + <i>T</i>) = <i>f</i>(<i>x</i>) then ∫(0→<i>nT</i>) <i>f</i> d<i>x</i> = <i>n</i>∫(0→<i>T</i>) <i>f</i> d<i>x</i>, for positive integer <i>n</i>. A partial period has to be handled on its own" },
            { "k": "Parity arithmetic", "v": "even × even = even, odd × odd = even, even × odd = odd, and any constant is even. You will use this line more than any formula on this card" }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · THREE SYMMETRIES, THREE SHORTCUTS",
          "chips": ["odd cancels", "even doubles", "king reflects"],
          "captions": [
            "An odd integrand on a symmetric interval. The piece on the left sits below the axis and the piece on the right sits above, they are the same size, and the signed sum is exactly zero. Nothing is computed.",
            "An even integrand on a symmetric interval. The two halves are mirror images and both count positive, so the integral is twice the right-hand half. You measure the easy half and double it.",
            "The king property. The solid curve is f on the interval 0 to 2, the dashed one is f(2 minus x), its reflection about the midpoint. The two shaded regions are congruent, so the two integrals are equal, which is what lets you add the original and the flip."
          ],
          "frames": [
            {
              "x": [-1.8, 1.8],
              "y": [-3.2, 3.2],
              "curves": [{ "c": "poly", "coeffs": [0, 0, 0, 0.5] }],
              "areas": [
                { "under": { "c": "poly", "coeffs": [0, 0, 0, 0.5] }, "from": -1.5, "to": 0 },
                { "under": { "c": "poly", "coeffs": [0, 0, 0, 0.5] }, "from": 0, "to": 1.5 }
              ],
              "labels": [
                { "x": -1.0, "y": -2.3, "text": "negative" },
                { "x": 1.0, "y": 2.3, "text": "positive" }
              ]
            },
            {
              "x": [-1.9, 1.9],
              "y": [-0.6, 3.6],
              "curves": [{ "c": "poly", "coeffs": [3, 0, -1] }],
              "areas": [
                { "under": { "c": "poly", "coeffs": [3, 0, -1] }, "from": -1.5, "to": 0 },
                { "under": { "c": "poly", "coeffs": [3, 0, -1] }, "from": 0, "to": 1.5 }
              ],
              "labels": [
                { "x": -0.78, "y": 1.15, "text": "half" },
                { "x": 0.82, "y": 1.15, "text": "same half" }
              ]
            },
            {
              "x": [-0.3, 2.5],
              "y": [-0.5, 2.9],
              "curves": [
                { "c": "poly", "coeffs": [0, 0, 0.5] },
                { "c": "poly", "coeffs": [2, -2, 0.5], "dash": true }
              ],
              "areas": [
                { "under": { "c": "poly", "coeffs": [0, 0, 0.5] }, "from": 0, "to": 2 },
                { "under": { "c": "poly", "coeffs": [2, -2, 0.5] }, "from": 0, "to": 2, "soft": true }
              ],
              "labels": [
                { "x": 1.72, "y": 0.4, "text": "f(x)" },
                { "x": 0.42, "y": 0.4, "text": "f(2−x)" }
              ]
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · KING, AND THE SPLIT IT GENERATES, TAP A LINE",
          "steps": [
            {
              "eq": "in ∫(<i>a</i>→<i>b</i>) <i>f</i>(<i>x</i>) d<i>x</i>, put <i>t</i> = <i>a</i> + <i>b</i> − <i>x</i>",
              "why": "This is a substitution and nothing more exotic. Its whole virtue is that it maps the interval onto itself: the ends swap places, so the shape of the problem is unchanged."
            },
            {
              "eq": "d<i>t</i> = −d<i>x</i>; <i>x</i> = <i>a</i> gives <i>t</i> = <i>b</i>, and <i>x</i> = <i>b</i> gives <i>t</i> = <i>a</i>",
              "why": "Two sign flips are about to happen and they cancel: the differential picks up a minus, and the limits come out the wrong way round, which is a second minus by P1."
            },
            {
              "eq": "= ∫(<i>b</i>→<i>a</i>) <i>f</i>(<i>a</i> + <i>b</i> − <i>t</i>)(−d<i>t</i>) = ∫(<i>a</i>→<i>b</i>) <i>f</i>(<i>a</i> + <i>b</i> − <i>t</i>) d<i>t</i>",
              "why": "The minus on the differential reverses the limits back to a then b. Renaming the dummy t as x, by P0, finishes the proof. Setting a equal to 0 gives the special case."
            },
            {
              "eq": "for P5: ∫(0→2<i>a</i>) = ∫(0→<i>a</i>) + ∫(<i>a</i>→2<i>a</i>), by additivity",
              "why": "Break at the midpoint. The left half is already in the form we want; the right half needs the same reflection trick applied to it alone."
            },
            {
              "eq": "in ∫(<i>a</i>→2<i>a</i>) put <i>x</i> = 2<i>a</i> − <i>t</i> ⇒ ∫(0→<i>a</i>) <i>f</i>(2<i>a</i> − <i>x</i>) d<i>x</i>",
              "why": "Same two cancelling signs as before. Add it to the left half and you have P5. If f(2a − x) equals f(x) the two pieces are identical and you get twice one of them; if it equals minus f(x) they annihilate and the whole integral is zero."
            }
          ]
        },
        {
          "t": "proc",
          "title": "The decision tree, run before you write anything",
          "steps": [
            "<b>Are the limits symmetric, −<i>a</i> to <i>a</i>?</b> Split the integrand into even and odd terms and delete every odd one. Two-thirds of the problem often disappears here, before any integration.",
            "<b>Is there a modulus, a greatest integer, or a piecewise rule?</b> Find where the inside changes sign or crosses an integer, and split there with additivity. On each piece the function is a clean formula.",
            "<b>Are the limits 0 to <i>a</i>, with sin and cos, or an <i>f</i>/(<i>f</i> + <i>g</i>) shape?</b> Apply king, add the original to the flipped version, solve 2<i>I</i> = easy, and halve.",
            "<b>Is there a lone factor of <i>x</i> multiplying a function of sin <i>x</i>, on [0, π]?</b> King turns <i>x</i> into π − <i>x</i>, which peels the <i>x</i> off into a constant π and leaves an integral you can do.",
            "<b>Is the integrand periodic over a whole number of periods?</b> Collapse it with P7, and be careful about what the <b>true</b> period is.",
            "<b>None of the above?</b> Only now fall back on the Second Fundamental Theorem and actually integrate."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD PATTERN",
          "q": "Evaluate ∫(0→4) |<i>x</i> − 2| d<i>x</i>.",
          "steps": [
            "The formula changes where <i>x</i> − 2 changes sign, at <i>x</i> = 2. Split there with additivity.",
            "|<i>x</i> − 2| is 2 − <i>x</i> for <i>x</i> < 2 and <i>x</i> − 2 for <i>x</i> > 2.",
            "∫(0→2)(2 − <i>x</i>) d<i>x</i> = [2<i>x</i> − <i>x</i><sup>2</sup>/2] at 2 = 4 − 2 = 2.",
            "∫(2→4)(<i>x</i> − 2) d<i>x</i> = [<i>x</i><sup>2</sup>/2 − 2<i>x</i>] from 2 to 4 = (8 − 8) − (2 − 4) = 2."
          ],
          "ans": "2 + 2 = 4. Sanity check on the picture: two right triangles with base 2 and height 2, so area 2 each. Integrating |<i>x</i> − 2| as a single formula, without splitting, is where the marks go."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Evaluate ∫(−π/2→π/2) (<i>x</i><sup>2</sup> sin <i>x</i> + <i>x</i> cos <i>x</i> + 4) d<i>x</i> mentally.",
          "steps": [
            "The limits are symmetric, so classify each term before integrating anything.",
            "<i>x</i><sup>2</sup> sin <i>x</i>: even times odd, so odd. It dies.",
            "<i>x</i> cos <i>x</i>: odd times even, so odd. It dies too.",
            "4 is a constant, hence even, and it survives: ∫(−π/2→π/2) 4 d<i>x</i> = 4π."
          ],
          "ans": "4π. <b>Speed lesson:</b> never reach for parts on <i>x</i><sup>2</sup> sin <i>x</i> or <i>x</i> cos <i>x</i> here. Parity deletes both before you start, and the distractors in questions like this are exactly the values you get by grinding them out."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Evaluate <i>I</i> = ∫(0→π) <i>x</i> sin<sup>3</sup><i>x</i> d<i>x</i>.",
          "steps": [
            "King with <i>a</i> = 0 and <i>b</i> = π replaces <i>x</i> by π − <i>x</i>. Since sin(π − <i>x</i>) = sin <i>x</i>, the sin<sup>3</sup> is untouched and only the lone <i>x</i> changes.",
            "<i>I</i> = ∫(0→π) (π − <i>x</i>) sin<sup>3</sup><i>x</i> d<i>x</i> = π∫(0→π) sin<sup>3</sup><i>x</i> d<i>x</i> − <i>I</i>.",
            "So 2<i>I</i> = π∫(0→π) sin<sup>3</sup><i>x</i> d<i>x</i>. Now sin<sup>3</sup><i>x</i> is symmetric about π/2, so that integral is 2∫(0→π/2) sin<sup>3</sup><i>x</i> d<i>x</i> = 2 × 2/3 = 4/3.",
            "2<i>I</i> = π × 4/3, and now <b>halve</b>."
          ],
          "ans": "<i>I</i> = 2π/3. <b>Why it works:</b> king's whole job here is to separate the awkward <i>x</i> from the sin<sup>3</sup><i>x</i>. The <i>x</i> folds into a constant π and the integral then solves itself as an equation."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "Evaluate ∫(0→10π) |sin <i>x</i>| d<i>x</i>.",
          "steps": [
            "The whole question is the period of the integrand. sin <i>x</i> has period 2π, but the modulus folds the negative hump up.",
            "Confirm: |sin(<i>x</i> + π)| = |−sin <i>x</i>| = |sin <i>x</i>|, so the true period is <b>π</b>, not 2π.",
            "So [0, 10π] holds exactly 10 full periods, and P7 gives 10∫(0→π) |sin <i>x</i>| d<i>x</i>.",
            "On [0, π], sin <i>x</i> ≥ 0, so the modulus does nothing there: ∫(0→π) sin <i>x</i> d<i>x</i> = [−cos <i>x</i>] = 1 + 1 = 2."
          ],
          "ans": "10 × 2 = 20. <b>The real trap is not the period.</b> Using 2π gives five blocks of 4, which is also 20. The damage comes from writing period 2π and then <b>forgetting the modulus</b>, so the second hump cancels the first and the block is worth 0. Spot the modulus period π and you cannot make that mistake."
        },
        {
          "t": "defgrid",
          "title": "King, upgraded from a trick to a machine",
          "rows": [
            { "k": "The quotient theorem", "v": "∫(0→<i>a</i>) <i>f</i>(<i>x</i>)/[<i>f</i>(<i>x</i>) + <i>f</i>(<i>a</i> − <i>x</i>)] d<i>x</i> = <i>a</i>/2, whenever the denominator is never zero. Add the flip and the integrand becomes 1" },
            { "k": "The <i>x</i>-peeling theorem", "v": "∫(0→π) <i>x f</i>(sin <i>x</i>) d<i>x</i> = (π/2) ∫(0→π) <i>f</i>(sin <i>x</i>) d<i>x</i>, for any integrable <i>f</i>. The worked example above is the case <i>f</i>(sin <i>x</i>) = sin<sup>3</sup><i>x</i>" },
            { "k": "The log-sine master result", "v": "∫(0→π/2) ln(sin <i>x</i>) d<i>x</i> = ∫(0→π/2) ln(cos <i>x</i>) d<i>x</i> = −(π/2) ln 2, proved by running king once and then rescaling the interval with <i>u</i> = 2<i>x</i>" },
            { "k": "Its corollary", "v": "∫(0→π/2) ln(tan <i>x</i>) d<i>x</i> = 0, since ln tan = ln sin − ln cos and the two halves are equal. Consistent with tan(π/2 − <i>x</i>) = 1/tan <i>x</i>" }
          ]
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Evaluate <i>I</i> = ∫(0→π/2) d<i>x</i>/(1 + √tan <i>x</i>).",
          "steps": [
            "King with <i>a</i> + <i>b</i> = π/2 sends tan to cot, so <i>I</i> = ∫(0→π/2) d<i>x</i>/(1 + √cot <i>x</i>).",
            "Multiply that second form top and bottom by √tan <i>x</i>: it becomes ∫(0→π/2) √tan <i>x</i>/(1 + √tan <i>x</i>) d<i>x</i>.",
            "Now the two forms share a denominator. Add them: 2<i>I</i> = ∫(0→π/2) (1 + √tan <i>x</i>)/(1 + √tan <i>x</i>) d<i>x</i> = ∫(0→π/2) 1 d<i>x</i> = π/2.",
            "Halve."
          ],
          "ans": "<i>I</i> = π/4. And the quotient theorem predicts it instantly: this is <i>f</i>(<i>x</i>) = 1 with <i>a</i> = π/2, so the answer is <i>a</i>/2 = π/4. The value does not depend on the exponent on the tangent at all, which is why the same question is asked with √2 in the exponent."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "Evaluate <i>I</i> = ∫(0→π) <i>x</i> sin <i>x</i>/(1 + cos<sup>2</sup><i>x</i>) d<i>x</i>.",
          "steps": [
            "Is this <i>x</i> times a function of sin <i>x</i> alone? Not as written, because of the cos<sup>2</sup><i>x</i>. Rewrite it: cos<sup>2</sup><i>x</i> = 1 − sin<sup>2</sup><i>x</i>, so the integrand is <i>x</i> sin <i>x</i>/(2 − sin<sup>2</sup><i>x</i>), which is <i>x f</i>(sin <i>x</i>).",
            "So the <i>x</i>-peeling theorem applies: <i>I</i> = (π/2) ∫(0→π) sin <i>x</i>/(1 + cos<sup>2</sup><i>x</i>) d<i>x</i>.",
            "Substitute <i>u</i> = cos <i>x</i>, d<i>u</i> = −sin <i>x</i> d<i>x</i>. The limits sweep from 1 to −1, and the minus sign turns them back the right way.",
            "∫(−1→1) d<i>u</i>/(1 + <i>u</i><sup>2</sup>) = [tan<sup>−1</sup><i>u</i>] from −1 to 1 = π/4 + π/4 = π/2."
          ],
          "ans": "<i>I</i> = (π/2)(π/2) = π<sup>2</sup>/4. The rewrite in step one is the whole difficulty: the theorem needs a function of sin <i>x</i>, and recognising that a function of cos<sup>2</sup><i>x</i> already is one is the move."
        },
        {
          "t": "mcq",
          "q": "∫(−4→4) <i>x</i><sup>3</sup>/(<i>x</i><sup>4</sup> + 1) d<i>x</i> equals:",
          "opts": [
            { "label": "0", "nudge": null },
            { "label": "ln 257", "nudge": "This is what you get by grinding out the perfectly correct-looking log antiderivative and then mishandling the two limits. Parity kills the integral before any of that is needed." },
            { "label": "(1/4) ln 257", "nudge": "Same route, with the 1/4 from the substitution kept. It is the value of the integral from 0 to 4, doubled would still not be it, and in any case symmetry answers the question first." },
            { "label": "8", "nudge": "This is the width of the interval, guessed at. Once parity applies, the width is irrelevant." }
          ],
          "correct": 0,
          "solution": "<i>f</i>(−<i>x</i>) = −<i>x</i><sup>3</sup>/(<i>x</i><sup>4</sup> + 1) = −<i>f</i>(<i>x</i>), so the integrand is odd, and the limits are symmetric. P6 gives 0 with no computation at all."
        },
        {
          "t": "mcq",
          "q": "∫(0→2π) |sin <i>x</i>| d<i>x</i> equals:",
          "opts": [
            { "label": "0", "nudge": "This is ∫(0→2π) sin <i>x</i> d<i>x</i>, with the modulus dropped, so the second hump cancels the first. But |sin <i>x</i>| is never negative, so its integral over a positive-width interval cannot be zero." },
            { "label": "2", "nudge": "That is one period's worth. |sin <i>x</i>| has period π, so [0, 2π] holds two of them, not one." },
            { "label": "4", "nudge": null },
            { "label": "2π", "nudge": "This confuses the area under the humps with the length of the interval. They are not the same quantity and they do not have the same units." }
          ],
          "correct": 2,
          "solution": "|sin <i>x</i>| has period π and ∫(0→π) |sin <i>x</i>| d<i>x</i> = 2, so over two periods the value is 2 × 2 = 4."
        },
        {
          "t": "defgrid",
          "title": "Integrands that break, and the one distinction that costs most",
          "rows": [
            { "k": "Greatest integer [<i>x</i>]", "v": "on [<i>k</i>, <i>k</i> + 1) it is the constant <i>k</i>. Chop at every integer <b>inside the interval</b> and add rectangles. Endpoint values never matter, a single point has no width" },
            { "k": "Fractional part {<i>x</i>}", "v": "{<i>x</i>} = <i>x</i> − [<i>x</i>], equal to <i>x</i> on [0, 1) and periodic with period 1, so ∫(0→<i>T</i>) {<i>x</i>} d<i>x</i> = <i>T</i>/2 for a positive integer <i>T</i>" },
            { "k": "min and max of two functions", "v": "solve <i>g</i>(<i>x</i>) = <i>h</i>(<i>x</i>) for the crossing points, split there, and on each piece test <b>one interior point</b> to see which function wins" },
            { "k": "Signed against total", "v": "∫<i>f</i> counts below-axis area negatively. The geometric area is ∫|<i>f</i>|, found by splitting at the <b>roots</b> of <i>f</i>. When a question says <b>area</b>, split; when it says <b>evaluate the integral</b>, do not" }
          ]
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Evaluate ∫(0→3/2) [<i>x</i>] d<i>x</i>, where [·] is the greatest-integer function.",
          "steps": [
            "Find the breakpoints <b>inside the interval</b>. [<i>x</i>] jumps at the integers, and the only integer strictly inside (0, 3/2) is 1.",
            "So there are two pieces, not three: [0, 1) where [<i>x</i>] = 0, and [1, 3/2] where [<i>x</i>] = 1.",
            "∫(0→1) 0 d<i>x</i> = 0, and ∫(1→3/2) 1 d<i>x</i> = 1 × (3/2 − 1) = 1/2."
          ],
          "ans": "1/2. <b>The book works this as three pieces, ending with ∫(2→3/2) 2 d<i>x</i>, and reports 2.</b> But 3/2 is less than 2, so <i>x</i> = 2 is not a breakpoint of this interval and that last piece runs backwards. Check every breakpoint you list actually lies between the limits."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "Evaluate ∫(0→3/2) [<i>x</i><sup>2</sup>] d<i>x</i>.",
          "steps": [
            "Now the breakpoints are where <i>x</i><sup>2</sup> crosses an integer, so at <i>x</i> = 1, √2 and √3. But √3 ≈ 1.732 and the upper limit is 1.5, so <b>√3 is outside</b> and only two breakpoints count.",
            "On [0, 1), <i>x</i><sup>2</sup> is in [0, 1) so [<i>x</i><sup>2</sup>] = 0. On [1, √2), <i>x</i><sup>2</sup> is in [1, 2) so [<i>x</i><sup>2</sup>] = 1. On [√2, 3/2], <i>x</i><sup>2</sup> is in [2, 2.25] so [<i>x</i><sup>2</sup>] = 2.",
            "0 + 1 × (√2 − 1) + 2 × (3/2 − √2).",
            "= √2 − 1 + 3 − 2√2 = 2 − √2."
          ],
          "ans": "2 − √2, roughly 0.586. <b>The book prints 7/2 − √2 − √3 here</b>, having included a fourth piece 3(3/2 − √3) whose length is negative. Same lesson as the previous card: list the breakpoints, then throw away every one that falls outside the limits."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "Evaluate ∫(−2→2) |<i>x</i>| d<i>x</i>.",
              "a": "4. |<i>x</i>| is even and the limits are symmetric, so it is 2∫(0→2) <i>x</i> d<i>x</i> = 2 × 2. Answering 0 by treating it as odd is the offered trap, and |<i>x</i>| is never negative."
            },
            {
              "q": "Evaluate ∫(0→π/2) sin <i>x</i>/(sin <i>x</i> + cos <i>x</i>) d<i>x</i>.",
              "a": "π/4. Straight off the quotient theorem with <i>f</i> = sin and <i>a</i> = π/2. Its cosine partner has the same value, and the two of them add to π/2, which is the whole proof."
            },
            {
              "q": "Evaluate ∫(0→8π) |cos <i>x</i>| d<i>x</i>.",
              "a": "16. The modulus halves the period to π, so there are 8 blocks, and ∫ over one period is 2."
            },
            {
              "q": "Evaluate ∫(1/4→4) ln <i>x</i>/(1 + <i>x</i><sup>2</sup>) d<i>x</i>.",
              "a": "0. The reciprocal substitution <i>x</i> = 1/<i>t</i> maps this interval onto itself, swapping the ends. It sends ln <i>x</i> to −ln <i>t</i>, and the minus that d<i>x</i> = −d<i>t</i>/<i>t</i><sup>2</sup> introduces is cancelled by the reversal of the limits, so d<i>x</i>/(1 + <i>x</i><sup>2</sup>) comes back as d<i>t</i>/(1 + <i>t</i><sup>2</sup>). That gives <i>I</i> = −<i>I</i>. Any interval of the form <i>p</i> to 1/<i>p</i> is worth testing this way."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Using parity on non-symmetric limits.</b> Even and odd cancellation needs −<i>a</i> to <i>a</i>. On [0, 2] or [1, 3] an odd function tells you nothing, and reflexively writing 0 is a common way to lose a whole question.",
            "<b>Misapplying king.</b> The replacement is (sum of the limits) − <i>x</i>, so <i>a</i> + <i>b</i> − <i>x</i>, and only <i>a</i> − <i>x</i> when the lower limit is 0. The wrong replacement fails silently: the algebra still runs, it just does not cancel.",
            "<b>Reporting 2<i>I</i> as <i>I</i>.</b> After you add the original and the flip you have twice the integral. Every king answer in this topic ends with a division by two, and the doubled value is a standard distractor.",
            "<b>Getting the period wrong for |sin <i>x</i>| or |cos <i>x</i>|.</b> The modulus halves it to π. Pairing period 2π with a dropped modulus is the double error that returns 0.",
            "<b>Listing a breakpoint that lies outside the interval.</b> Both greatest-integer worked examples above turn on this. Find the breakpoints, then discard every one that is not strictly between the limits, and check the last piece has positive length."
          ]
        },
        {
          "t": "protip",
          "html": "train yourself to read the limits first and the integrand second. symmetric means parity. zero to a with trig means king. a modulus or a greatest integer means split. whole periods means collapse. ninety percent of the hard-looking property problems are pattern recognition, and once you have named the pattern the algebra is the easy part."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "∫(<i>a</i>→<i>b</i>) <i>f</i>(<i>x</i>) d<i>x</i> = ∫(<i>a</i>→<i>b</i>) <i>f</i>(<i>a</i> + <i>b</i> − <i>x</i>) d<i>x</i>", "note": "king: add the flip, solve 2I = easy, then halve" },
            { "f": "∫(−<i>a</i>→<i>a</i>) <i>f</i> = 2∫(0→<i>a</i>) <i>f</i> if even, 0 if odd", "note": "and only on symmetric limits, never otherwise" },
            { "f": "∫(0→<i>nT</i>) <i>f</i> = <i>n</i>∫(0→<i>T</i>) <i>f</i>", "note": "and for |sin x| and |cos x| the period T is pi" },
            { "f": "∫(0→<i>a</i>) <i>f</i>/[<i>f</i>(<i>x</i>) + <i>f</i>(<i>a</i> − <i>x</i>)] d<i>x</i> = <i>a</i>/2", "note": "the quotient theorem, whatever f happens to be" },
            { "f": "∫(0→π) <i>x f</i>(sin <i>x</i>) d<i>x</i> = (π/2)∫(0→π) <i>f</i>(sin <i>x</i>) d<i>x</i>", "note": "king peels a lone x off into a constant" }
          ],
          "aids": [
            "king swaps the ends: replace x by the sum of the limits minus x, then add",
            "odd dies on a mirror, even doubles",
            "the modulus halves the period",
            "solve for 2I, then halve; and list breakpoints, then throw out the ones outside"
          ]
        }
      ]
    }
  ]
};

export default ch12Integrals;
