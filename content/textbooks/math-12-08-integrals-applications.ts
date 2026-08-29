/**
 * Chapter 08 · Application of Integrals, Mathematics, Class 12.
 *
 * Restructured from the Drona Class 12 Mathematics Master Reference (pages 496
 * to 542) into the block system in design_handoff_textbooks/CONTENT_SPEC.md,
 * matching the voice and density of math-12-01-relations.ts. The catalogue
 * calls this chapter "Application of Integrals", singular; the source's own
 * cover page agrees, and the plural belongs to Chapter 6.
 *
 * Editorial decisions worth recording:
 *
 * 1. SIX TOPICS, from a 47-page source that is three subtopics plus a
 *    six-part Round 2 Addendum. Subtopics 01 to 03 (pages 496 to 522) become
 *    topics 01 to 03 unchanged: one curve, two curves, and boundaries that
 *    have to be decoded. Addendum A (conic segments, pages 523 to 526) is
 *    substantial enough to be topic 04 on its own, and it is the pattern the
 *    boards actually set. The last two topics each fold two addenda, because
 *    neither half is a topic by itself: topic 05 is Addendum B (parametric
 *    curves) with Addendum C (inverse functions and the mirror), joined by the
 *    one idea they share, which is that you stop trying to write y as a
 *    function of x and change what you integrate in. Topic 06 is Addendum E
 *    (multi-hump periodic areas) with Addendum D (the area is given, find the
 *    parameter), joined by being the two questions the chapter's own closing
 *    note admits its text never models. Addendum P is not a topic: its
 *    distribution table feeds the hook, its eight archetypes feed the worked
 *    examples across all six topics, and its eight named traps feed the
 *    `mistakes` cards.
 *
 * 2. TWELVE DIAGRAMS, more than any chapter so far, because every worked area
 *    problem in this source is a picture of a shaded region and a student who
 *    cannot see the region cannot choose the limits. What each one shows:
 *
 *      T1 "THE ELEMENTARY STRIP": one strip, then the whole region, then a
 *        curve that crosses the axis so the two signed pieces visibly
 *        disagree, then a region walled by the y-axis that wants dy strips.
 *      T1 "SYMMETRY, AND THE CAP": the quarter circle you actually integrate,
 *        the ×4, the ellipse as a squashed circle, and the cap beyond a chord.
 *      T2 "THE LIMITS ARE THE INTERSECTIONS": the two curves alone, the lens,
 *        one strip running from the lower curve to the upper, and the same
 *        picture with a guessed upper limit of 2, where the shaded piece past
 *        the crossing is subtracting rather than adding. That fourth frame is
 *        the argument for solving f = g before writing any integral.
 *      T2 "WHEN THE CEILING CHANGES": the composite region, the switch line,
 *        the Advanced 2018 region whose ceiling changes from x² to 8/x, and a
 *        region that needs two integrals in x and one in y. The brief calls
 *        this the single most useful figure in the chapter and it is.
 *      T3 "CORNERS AND SIDES": the V, a shifted V drawn as its two straight
 *        pieces, the diamond as a genuine four-cornered polygon, and the wedge
 *        y ≥ |x| cut out of a disc.
 *      T3 "DECODE THE SET-BUILDER": one inequality at a time, then the
 *        overlap, then a modulus ceiling over a parabola floor.
 *      T4 "A CHORD CUTS A PARABOLA": the latus-rectum segment, Archimedes'
 *        triangle inside it, a horizontal chord on a downward parabola, and
 *        the half-answer that comes from drawing only the upper branch.
 *      T4 "A LINE CUTS A CIRCLE, AND AN ELLIPSE": the cap, the two lengths in
 *        the segment formula, the ellipse cap, and the same ellipse scaled
 *        onto its auxiliary circle.
 *      T5 "CURVES YOU CANNOT SOLVE FOR y": the astroid, the astroid inside
 *        its circle, one cycloid arch, and the arch inside its bounding
 *        rectangle, which is where the 3/4 comes from.
 *      T5 "THE MIRROR IN y = x": a function and its inverse, the lens between
 *        them, and the diagonal cutting the lens into two congruent halves.
 *      T6 "COUNT THE HUMPS": one arch, two humps that cancel, five half-arches
 *        over [0, 5π/2], and sine against cosine with both crossings marked.
 *      T6 "SLIDE THE LINE UNTIL THE HALVES MATCH": three positions of y = k on
 *        the same parabolic region, only one of which bisects it.
 *
 *    Two rendering notes, both forced by the vocabulary rather than chosen.
 *    `DiagramFrame.areas` fills between curves by evaluating them as functions
 *    of x, and `circle`, `ellipse` and the sideways `parabola` have no such
 *    evaluation, so a circular or elliptical region cannot be filled with
 *    `areas` at all. Every conic region here is therefore filled with
 *    `polygons`, sampled finely along the arc (every 9 to 15 degrees, or every
 *    0.25 in y for a parabola) with `corners: false`, which is exact to well
 *    under a pixel at 316pt and needs no new kind. The same technique draws the astroid and the
 *    cycloid, which have no `PlotCurve` at all. Second: `abs` is a|x| with no
 *    horizontal shift, so y = |x − 2| is drawn as its two straight pieces.
 *
 *    Nothing was dropped for want of a figure. The one thing worth naming as
 *    absent is |sin x|, which is not expressible (there is no modulus of a
 *    curve), so the periodic figure shades sin x hump by hump instead, which
 *    is the better teaching picture anyway because the cancellation is visible.
 *
 * 3. THE CONICS ARE NOT RE-TAUGHT. y² = 4ax, x²/a² + y²/b² = 1 and
 *    x² + y² = a² are quoted as known from math-11-10-conics.ts, along with
 *    the latus rectum, the auxiliary circle and the b/a squash. What is new
 *    here is the area between them, and Lemma A.2's scaling argument, which is
 *    the auxiliary-circle picture doing work Class 11 never asked of it.
 *
 * ERRATA (source pages 830 to 832): the errata lists five entries, for
 * Chapters 1, 3 and 11, and NONE for Chapter 8. So nothing was applied, and
 * everything below was found by re-solving the chapter.
 *
 * CORRECTIONS BEYOND THE ERRATA. Every area the book prints was recomputed.
 * Four printed claims are wrong; the corrected version is what this chapter
 * teaches, and each is taught as the mistake it is rather than silently fixed.
 *
 *   - Pages 529 to 530, Example C.1: "the area bounded by y = sin⁻¹x,
 *     y = cos⁻¹x and the x-axis" is printed as π/2 + 1 − √2 ≈ 1.157. The
 *     region is misidentified. The closed region bounded by exactly those
 *     three curves runs along y = sin⁻¹x from (0, 0) up to the crossing at
 *     (1/√2, π/4), back down y = cos⁻¹x to (1, 0), and home along the x-axis:
 *     it is the region under the LOWER of the two curves, and horizontal
 *     strips give its area in one line, ∫₀^{π/4} (cos y − sin y) dy =
 *     [sin y + cos y]₀^{π/4} = √2 − 1 ≈ 0.414. Vertical strips agree:
 *     ∫₀^{1/√2} sin⁻¹x dx + ∫_{1/√2}^1 cos⁻¹x dx = (π/(4√2) + 1/√2 − 1) +
 *     (1/√2 − π/(4√2)) = √2 − 1. The book integrates the UPPER curve on each
 *     side instead, which measures a different region, one whose boundary also
 *     needs the y-axis and the line x = 1 and so is not the region stated.
 *     Its own numerical check ("a sliver of width 1 and average height a bit
 *     over 1") describes that other region, so the slip is in the picture, not
 *     the arithmetic. Taught here as the corrected value, with the book's
 *     region shown alongside as the trap.
 *   - Page 525, Example A.1: for the area bounded by y² = 4x and its latus
 *     rectum the book warns that "doubling the area under the upper branch
 *     above the axis would be wrong, that computes a different region". It is
 *     not wrong; it is exactly right. The region is symmetric about the
 *     x-axis, the upper half is ∫₀¹ 2√x dx = 4/3, and doubling gives 8/3,
 *     which is the book's own answer on the next line. The real trap, named
 *     correctly one page earlier in the commentary on Lemma A.3, is forgetting
 *     to double and reporting 4/3. This chapter teaches doubling as the fast
 *     route and reports 4/3 as the trap.
 *   - Page 537, Addendum P, Archetype 2 header: "the twin parabolas y² = 4ax,
 *     x² = ay ... they meet at (0, 0) and (a, a); area = a²/3". Not for those
 *     two curves. Substituting y = x²/a into y² = 4ax gives x⁴ = 4a³x, so
 *     x = ∛4·a and y = ∛16·a, and the enclosed area is 4a²/3, not a²/3. The
 *     printed meeting point and area belong to y² = ax with x² = ay. The
 *     chapter's own Theorem 2 on page 508 is correct and different again:
 *     y² = 4ax with x² = 4ay enclose 16a²/3. All three pairs are quoted
 *     separately in topic 02 so the three answers cannot be confused.
 *   - Page 538, Addendum P, Archetype 5: the Main 2016 region
 *     {y² ≥ 2x, x² + y² ≤ 4x, x ≥ 0, y ≥ 0} is described as "inside the
 *     circle, right of the parabola". y² ≥ 2x is x ≤ y²/2, which is OUTSIDE
 *     the rightward parabola, on its left, and the book's own decode table on
 *     page 516 says so. The integral that follows is right and the answer
 *     π − 8/3 stands; only the stated side is wrong. It is quoted here with
 *     the side corrected, because a student who copies the sentence will
 *     shade the complementary region and get 8/3 − π + 2π, not π − 8/3.
 *
 * PRINTED PASSAGES THAT SELF-CORRECT (not errors in any answer, but not
 * reproducible as printed either): page 535's brute-force check on
 * ∫|sin x − cos x| claims the piece past 5π/4 repeats the piece before π/4,
 * then visibly recomputes it as 1 + √2 and arrives at the correct 4√2; and
 * page 536's practice answer 5 writes "3 × 2 = 6… careful" before settling on
 * the correct 3. Both are re-authored here from the corrected line only.
 *
 * PDF EXTRACTION DAMAGE, re-authored rather than guessed: the extractor turns
 * the minus sign into "{n7", × into "{nN" and a few italic letters into "{nA"
 * throughout pages 504 to 521; the numbered pitfall lists on pages 504, 505,
 * 513 and 521 come out with their headings shuffled to the foot of the page;
 * the figure caption on page 516 arrives Caesar-shifted ("OHIW DQG D
 * GLHUHQW FXUYH" is "left and a different curve"); and page 505's fifth
 * pitfall loses its own formulas ("It is (product of the semi-axes), not 22,
 * not (+)"), which is πab, not πa²b², not π(a + b). None of this is
 * mathematics and none of it is reproduced.
 *
 * A MARKUP NOTE: components/textbook/markup.tsx has no raised solidus, so a
 * fractional exponent such as x^(2/3) would degrade to baseline-height text
 * reading "x2/3". The astroid is therefore written with cube roots,
 * ∛(x²) + ∛(y²) = ∛(a²), which is the same curve and renders correctly.
 */
import type { Chapter } from '@/lib/textbooks';

export const ch12IntegralsApplications: Chapter = {
  "chapter": "08",
  "title": "Application of Integrals",
  "subject": "Mathematics",
  "klass": "Class 12",
  "topics": [
    {
      "n": "01",
      "title": "Area under a Simple Curve",
      "chip": "01 ONE CURVE",
      "kalam": "one thin strip, added up from a to b",
      "blocks": [
        {
          "t": "hook",
          "html": "<b>01 · Area under a Simple Curve</b><br>The gateway idea, and a guaranteed scorer. CBSE Boards almost always carry one 3 or 5 mark question here, most often <b>“find the area of a circle or an ellipse by integration”</b>, which is a proof you can rehearse to the last line. JEE Main reliably places one question per paper, usually disguised as a region bounded by a curve and an axis, and the whole difficulty is choosing <i>dx</i> or <i>dy</i>. JEE Advanced rarely asks a pure one-curve question but builds every harder area on this skill, so a shaky foundation here costs marks downstream. Not in NEET; the medical paper has no mathematics section.<br><br><b>02 · Area between Two Curves</b><br>The highest-yield idea in the chapter and the largest single block of the previous-year bank. CBSE almost always sets a 5 mark question, typically a line against a parabola or two parabolas. In the modern MCQ era essentially <b>every JEE Main session carries exactly one area question</b>, and it is usually this type. JEE Advanced intersects a curve with a circle, or with itself, and demands a split. Master “top minus bottom” and you own the chapter.<br><br><b>03 · Modulus, Inequalities and Composite Regions</b><br>The JEE layer, and the fastest-growing pattern in the bank: a region handed to you as a set, {(<i>x</i>, <i>y</i>) : …}, with two or three conditions. Main 2014, 2015, 2016, Jan 2020 and Sep 2020 all did exactly this. CBSE occasionally sets a modulus area such as <i>y</i> = |<i>x</i> − 2| for 3 marks. Nothing new is integrated here; the examiner is testing <b>decoding</b>, and almost every lost mark is a decoding error rather than a calculus one.<br><br><b>04 · Segments of Conics</b><br>What the boards actually ask when they say “area”. The parabola cut by its latus rectum, a circle cut by a chord, an ellipse cut by a line: all three are standard CBSE 5 mark questions and all three recur in Main. Advanced adds the extraneous-root check, since squaring manufactures intersections the curve does not have. Archimedes' 4/3 gives you a free check the syllabus never mentions.<br><br><b>05 · Parametric Curves and the Mirror in <i>y</i> = <i>x</i></b><br>Permanent JEE fixtures that the board text skips entirely. The astroid's 3π<i>a</i>²/8 and the cycloid arch's 3π<i>a</i>² are famous answers to curves you cannot solve for <i>y</i> at all. The inverse-function half is Main territory: areas built on sin<sup>−1</sup><i>x</i>, tan<sup>−1</sup><i>x</i>, ln <i>x</i> and cube roots, where one reflection halves the work.<br><br><b>06 · Periodic Regions, and Areas that Fix a Parameter</b><br>Two patterns the chapter's own closing note admits it under-serves. Trigonometric boundaries such as |cos <i>x</i> − sin <i>x</i>| were asked in Main 2013 and Advanced 2013, and blind integration across several periods guarantees a wrong answer. The reverse question, <b>the area is given and a coefficient is the unknown</b>, appears in Main 1999, 2004, 2011 and April 2019, ends in a cubic in the parameter, carries two valid answers as often as one, and is chronically under-practised."
        },
        {
          "t": "p",
          "html": "You can already find the area of a rectangle, a triangle and a circle from memorised formulas. Now look at a shape with one <b>curved</b> edge: the region under the arch <i>y</i> = <i>x</i>² + 1 between <i>x</i> = 0 and <i>x</i> = 2. There is no formula for it, and there is no formula for the next one either, because there are infinitely many curved edges. Class 11 and Chapter 7 gave you the definite integral as an antiderivative evaluated between limits, a number. This chapter tells you what that number <b>is</b>: it is an area, and once you see it as one, every region on the syllabus becomes the same single question."
        },
        {
          "t": "think",
          "html": "you are a surveyor measuring an irregular farm plot. one edge runs along a dead straight irrigation canal, that is your <i>x</i>-axis. the opposite edge is a stream, some curve <i>y</i> = <i>f</i>(<i>x</i>). the plot runs from the well at <i>x</i> = <i>a</i> to the banyan tree at <i>x</i> = <i>b</i>. you cut the plot into vertical strips as narrow as a sheet of paper. each strip is almost a rectangle: width a tiny <i>dx</i>, height the value of the curve there. add them all up, well to banyan, and you have the plot. that adding up is the definite integral, and it is the whole subtopic."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · VERTICAL STRIPS",
          "tag": "y = f(x) ≥ 0 on [a, b]",
          "main": "A = ∫<sub>a</sub><sup>b</sup> y dx = ∫<sub>a</sub><sup>b</sup> f(x) dx",
          "legend": [
            "the strip at <i>x</i> has height <i>y</i> = <i>f</i>(<i>x</i>) and width <i>dx</i>, so its area is <i>f</i>(<i>x</i>) <i>dx</i>",
            "<i>a</i> and <i>b</i> are the vertical boundary lines <i>x</i> = <i>a</i> and <i>x</i> = <i>b</i>. Exam papers call them the <b>ordinates</b>",
            "the answer is a number of <b>square units</b>, and it is never negative"
          ],
          "note": "This is the only formula in the chapter. Everything after it is bookkeeping about which variable to slice in and how to handle signs."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "DIAGRAM · ONE STRIP, THEN ALL OF THEM",
          "chips": ["ONE STRIP", "ADD THEM UP", "IT CROSSES THE AXIS", "STRIPS ON THEIR SIDE"],
          "captions": [
            "The curve is y = x² + 2 and the strip stands at x = 1.3. Its height is the value of the curve there, its width is dx, and its area is y dx. Nothing else in this chapter is new: every region you will meet is a pile of strips like this one.",
            "Slide the strip from x = 0 to x = 2 and sweep out the region. The definite integral adds the strips: ∫₀² (x² + 2) dx = 20/3. The dashed line is the right-hand ordinate x = 2, and the two dots are where the curve meets the two boundary lines.",
            "Now y = x³ on [−2, 2]. The left piece hangs below the axis, so its strips have negative height and the integral counts it as negative. ∫ from −2 to 2 is 0, and the region is plainly not empty. The area is 8: split at the root and add the sizes, never the signed values.",
            "The region walled by the y-axis on the left and the curve x = 4 − y² on the right. Slicing vertically would need two branches of the parabola; slicing horizontally, one strip of length x = g(y) and height dy runs from the axis to the curve, and ∫ from −2 to 2 of (4 − y²) dy = 32/3 finishes it in one line."
          ],
          "frames": [
            {
              "x": [-0.6, 3],
              "y": [-1.6, 8],
              "curves": [{ "c": "poly", "coeffs": [2, 0, 1] }],
              "areas": [{ "under": { "c": "poly", "coeffs": [2, 0, 1] }, "from": 1.15, "to": 1.45 }],
              "labels": [
                { "x": 2.2, "y": 5.4, "text": "y = f(x)" },
                { "x": 1.3, "y": -0.9, "text": "dx", "soft": true }
              ]
            },
            {
              "x": [-0.6, 3],
              "y": [-1.6, 8],
              "curves": [
                { "c": "poly", "coeffs": [2, 0, 1] },
                { "c": "vline", "x": 2, "dash": true, "soft": true }
              ],
              "areas": [{ "under": { "c": "poly", "coeffs": [2, 0, 1] }, "from": 0, "to": 2 }],
              "points": [
                { "x": 0, "y": 2, "label": "(0, 2)" },
                { "x": 2, "y": 6, "label": "(2, 6)" }
              ]
            },
            {
              "x": [-2.6, 2.6],
              "y": [-9.5, 9.5],
              "curves": [{ "c": "poly", "coeffs": [0, 0, 0, 1] }],
              "areas": [
                { "under": { "c": "poly", "coeffs": [0, 0, 0, 1] }, "from": -2, "to": 0, "soft": true },
                { "under": { "c": "poly", "coeffs": [0, 0, 0, 1] }, "from": 0, "to": 2 }
              ],
              "labels": [
                { "x": -1.5, "y": -6.4, "text": "counts as −4", "soft": true },
                { "x": 1.5, "y": 6, "text": "counts as +4" }
              ]
            },
            {
              "x": [-1.6, 5.4],
              "y": [-2.6, 2.6],
              "polygons": [
                {
                  "points": [[0, -2], [0.938, -1.75], [1.75, -1.5], [2.438, -1.25], [3, -1], [3.438, -0.75], [3.75, -0.5], [3.938, -0.25], [4, 0], [3.938, 0.25], [3.75, 0.5], [3.438, 0.75], [3, 1], [2.438, 1.25], [1.75, 1.5], [0.938, 1.75], [0, 2]],
                  "corners": false
                }
              ],
              "segments": [{ "from": [0, 1], "to": [3, 1], "dash": true, "label": "x = g(y)" }],
              "points": [
                { "x": 0, "y": 2, "label": "(0, 2)" },
                { "x": 0, "y": -2 }
              ]
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · HORIZONTAL STRIPS",
          "tag": "x = g(y) ≥ 0 between y = c and y = d",
          "main": "A = ∫<sub>c</sub><sup>d</sup> x dy = ∫<sub>c</sub><sup>d</sup> g(y) dy",
          "legend": [
            "the strip is now on its side: length <i>x</i> = <i>g</i>(<i>y</i>), thickness <i>dy</i>",
            "use it when the region is walled left and right by curves and capped by horizontal lines",
            "a sideways parabola <i>y</i>² = 4<i>ax</i> is the standing invitation: in <i>x</i> it has two branches, in <i>y</i> it has one formula"
          ],
          "note": null
        },
        {
          "t": "def",
          "term": "Signed integral against geometric area",
          "html": "∫<sub>a</sub><sup>b</sup><i>f</i>(<i>x</i>) <i>dx</i> is a <b>signed</b> number: strips below the axis contribute negatively. Area is a <b>size</b> and is never negative. The two agree only when <i>f</i> does not change sign on [<i>a</i>, <i>b</i>]. In general the area between the curve and the axis is <b>∫<sub>a</sub><sup>b</sup>|<i>f</i>(<i>x</i>)| <i>dx</i></b>, which you evaluate by splitting at every root of <i>f</i> inside the interval and adding the sizes of the pieces."
        },
        {
          "t": "p",
          "html": "Three separate things go wrong if you ignore that. If the curve lies <b>entirely below</b> the axis, the integral comes out negative and you must report its magnitude: <i>A</i> = |∫<i>f</i>| = −∫<i>f</i>. If the curve <b>crosses</b> the axis inside the interval, integrating straight across lets the pieces cancel and you get an answer that is too small, sometimes exactly zero. And if the curve is <b>odd</b> and the limits are symmetric, that cancellation is total: ∫<sub>−2</sub><sup>2</sup><i>x</i>³ <i>dx</i> = 0, while the region has area 8. The zero-area lure is the single most common wrong option in this chapter's bank, and it is planted deliberately."
        },
        {
          "t": "proc",
          "title": "SLiCE, before you write a single integral",
          "steps": [
            "<b>S · Sketch.</b> A rough curve and a shaded region, thirty seconds, no scale. You are not drawing for marks, you are finding out which curve is on top and where the region ends.",
            "<b>L · Limits, and the roots.</b> The limits are boundary lines or the points where the curve meets the axis, never numbers copied out of the question. If the question gives you <i>y</i> = 4 − <i>x</i>² and the <i>x</i>-axis, the limits are the roots <i>x</i> = ±2 and you have to solve for them.",
            "<b>i · Is it symmetric?</b> Symmetric about an axis means you integrate one half or one quadrant and multiply. A circle and an ellipse are symmetric about both axes, so the first-quadrant area times 4 is the whole thing.",
            "<b>C · Choose the variable.</b> Top and bottom are curves, sides vertical: use <i>dx</i>. Left and right are curves, top and bottom horizontal: use <i>dy</i>. Choosing badly turns a one-line integral into a two-piece one.",
            "<b>E · Evaluate, with the modulus.</b> Split at every root, integrate each smooth piece, add the sizes, and multiply the symmetry factor back. Forgetting that last multiplication is how a correct quarter-circle becomes a quarter of the answer."
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY THE INTEGRAL IS THE AREA, TAP A LINE",
          "steps": [
            {
              "eq": "cut [a, b] into n pieces of width Δx = (b − a)/n",
              "why": "Take f continuous and non-negative on [a, b] and mark division points a = x₀ < x₁ < ⋯ < xₙ = b. This is the surveyor cutting the plot into strips, written down. Nothing has been approximated yet; we have only chosen where to cut."
            },
            {
              "eq": "strip i ≈ rectangle of height f(ξᵢ), area f(ξᵢ) Δx",
              "why": "Pick any sample point ξᵢ inside the i-th piece and pretend the curve is flat across it. The strip's true top is curved, so this rectangle is wrong by a thin sliver at the top, and that sliver is the entire error of the method."
            },
            {
              "eq": "A ≈ Sₙ = Σ f(ξᵢ) Δx",
              "why": "Add all n rectangles. Because f is continuous, the curve cannot move far across one narrow strip, so each sliver is small compared with the rectangle under it and the sum is close to the true area."
            },
            {
              "eq": "A = lim (n → ∞) Σ f(ξᵢ) Δx = ∫ₐᵇ f(x) dx",
              "why": "Let the strips get thinner. Every sliver vanishes, the sums converge, and the limit of a Riemann sum is exactly what the definite integral is defined to be. So the area is not merely computed by the integral: it is the integral."
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE WORKHORSE ANTIDERIVATIVE",
          "tag": "memorise this one, it appears in every conic area",
          "main": "∫ √(a² − x²) dx = (x/2)√(a² − x²) + (a²/2) sin<sup>−1</sup>(x/a) + C",
          "legend": [
            "at <i>x</i> = <i>a</i> the first term dies and sin<sup>−1</sup>1 = π/2, so the value is π<i>a</i>²/4, the quarter disc",
            "at <i>x</i> = 0 both terms vanish, which is why circle limits are so clean",
            "it is the only non-polynomial antiderivative the boards require in this chapter"
          ],
          "note": "Two moves make every circle and ellipse question: solve the curve for its upper half, then apply this. There is no third move."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE CIRCLE'S AREA IS πa², TAP A LINE",
          "steps": [
            {
              "eq": "A = 4 ∫₀ᵃ √(a² − x²) dx",
              "why": "The circle x² + y² = a² is symmetric about both axes, so the whole area is four times the first-quadrant area. Working in the first quadrant also removes every sign question: there y ≥ 0 and the upper half is y = √(a² − x²), with x running from 0 to a."
            },
            {
              "eq": "= 4 [ (x/2)√(a² − x²) + (a²/2) sin⁻¹(x/a) ]₀ᵃ",
              "why": "Straight application of the workhorse antiderivative. This is the only integration in the whole proof, which is why it is worth knowing cold: the examiner is testing the setup and the symmetry factor, not your calculus."
            },
            {
              "eq": "at x = a: 0 + (a²/2)(π/2) = πa²/4",
              "why": "The first term carries the factor √(a² − a²) = 0. The second is sin⁻¹1 = π/2. At x = 0 both terms are zero, so the bracket is πa²/4 and nothing is subtracted."
            },
            {
              "eq": "A = 4 · πa²/4 = πa²",
              "why": "The same computation with y = (b/a)√(a² − x²) gives the ellipse: A = (4b/a)(πa²/4) = πab. Check it degenerates: put b = a and πab becomes πa². A parametrised formula that collapses correctly on a shape you already know is almost certainly right."
            }
          ]
        },
        {
          "t": "defgrid",
          "title": "The catalogue you should not re-derive",
          "rows": [
            { "k": "Circle x² + y² = a²", "v": "<i>A</i> = π<i>a</i>². Quarter disc in the first quadrant: π<i>a</i>²/4" },
            { "k": "Ellipse x²/a² + y²/b² = 1", "v": "<i>A</i> = π<i>ab</i>, the product of the semi-axes. Not π<i>a</i>²<i>b</i>², not π(<i>a</i> + <i>b</i>)" },
            { "k": "Upper half of a circle", "v": "<i>y</i> = √(<i>a</i>² − <i>x</i>²). Upper half of the ellipse: <i>y</i> = (<i>b</i>/<i>a</i>)√(<i>a</i>² − <i>x</i>²)" },
            { "k": "Upper branch of y² = 4ax", "v": "<i>y</i> = 2√(<i>ax</i>), so the area to <i>x</i> = <i>h</i> above the axis is (4/3)√(<i>a</i>) <i>h</i>√<i>h</i>" },
            { "k": "Symmetry multiplier", "v": "one axis, ×2 the half; both axes, ×4 the first quadrant. Verify the symmetry before you use it" },
            { "k": "Units", "v": "always <b>square units</b>. An area with a bare number and no unit loses the presentation mark on boards" }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "DIAGRAM · THE QUARTER YOU ACTUALLY INTEGRATE",
          "chips": ["FIRST QUADRANT", "TIMES FOUR", "THE ELLIPSE", "A CAP BEYOND A CHORD"],
          "captions": [
            "The circle x² + y² = 16. Only the shaded quarter is integrated: there y = √(16 − x²) with no sign ambiguity, and x runs from 0 to 4. One application of the workhorse antiderivative gives 4π.",
            "Multiply by four and you have the disc, 16π. The multiplication back is a step, not a formality: computing the quarter correctly and then reporting it is the most common way this proof loses marks.",
            "The ellipse x²/16 + y²/9 = 1 with its auxiliary circle dashed behind it. Every ordinate of the circle has been multiplied by b/a = 3/4, so every strip is 3/4 as tall and the whole area is 3/4 of 16π, that is 12π = πab. The squash factor does all the work.",
            "Now cut the disc with the chord x = 2. The shaded cap is what an exam means by the smaller region, and it is symmetric about the x-axis, so integrate the top half from x = 2 to x = 4 and double: 16π/3 − 4√3 ≈ 9.83, about a fifth of the disc."
          ],
          "frames": [
            {
              "x": [-6, 6],
              "y": [-4.3, 4.3],
              "curves": [{ "c": "circle", "r": 4 }],
              "polygons": [
                {
                  "points": [[0, 0], [4, 0], [3.939, 0.695], [3.759, 1.368], [3.464, 2], [3.064, 2.571], [2.571, 3.064], [2, 3.464], [1.368, 3.759], [0.695, 3.939], [0, 4]],
                  "corners": false
                }
              ],
              "labels": [{ "x": 1.9, "y": 1.5, "text": "πa²/4" }]
            },
            {
              "x": [-6, 6],
              "y": [-4.3, 4.3],
              "curves": [{ "c": "circle", "r": 4 }],
              "polygons": [
                {
                  "points": [[4, 0], [3.864, 1.035], [3.464, 2], [2.828, 2.828], [2, 3.464], [1.035, 3.864], [0, 4], [-1.035, 3.864], [-2, 3.464], [-2.828, 2.828], [-3.464, 2], [-3.864, 1.035], [-4, 0], [-3.864, -1.035], [-3.464, -2], [-2.828, -2.828], [-2, -3.464], [-1.035, -3.864], [0, -4], [1.035, -3.864], [2, -3.464], [2.828, -2.828], [3.464, -2], [3.864, -1.035]],
                  "corners": false
                }
              ],
              "labels": [{ "x": 0, "y": -0.4, "text": "A = πa² = 16π" }]
            },
            {
              "x": [-6, 6],
              "y": [-4.3, 4.3],
              "curves": [
                { "c": "ellipse", "a": 4, "b": 3 },
                { "c": "circle", "r": 4, "dash": true, "soft": true }
              ],
              "polygons": [
                {
                  "points": [[4, 0], [3.864, 0.776], [3.464, 1.5], [2.828, 2.121], [2, 2.598], [1.035, 2.898], [0, 3], [-1.035, 2.898], [-2, 2.598], [-2.828, 2.121], [-3.464, 1.5], [-3.864, 0.776], [-4, 0], [-3.864, -0.776], [-3.464, -1.5], [-2.828, -2.121], [-2, -2.598], [-1.035, -2.898], [0, -3], [1.035, -2.898], [2, -2.598], [2.828, -2.121], [3.464, -1.5], [3.864, -0.776]],
                  "corners": false
                }
              ],
              "labels": [{ "x": 0, "y": -0.4, "text": "A = πab = 12π" }]
            },
            {
              "x": [-6, 6],
              "y": [-4.3, 4.3],
              "curves": [
                { "c": "circle", "r": 4 },
                { "c": "vline", "x": 2, "dash": true }
              ],
              "polygons": [
                {
                  "points": [[2, -3.464], [2.571, -3.064], [3.064, -2.571], [3.464, -2], [3.759, -1.368], [3.939, -0.695], [4, 0], [3.939, 0.695], [3.759, 1.368], [3.464, 2], [3.064, 2.571], [2.571, 3.064], [2, 3.464]],
                  "corners": false
                }
              ],
              "points": [
                { "x": 2, "y": 3.464, "label": "(2, 2√3)" },
                { "x": 2, "y": -3.464 }
              ]
            }
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Find the area of the region bounded by <i>y</i> = <i>x</i>² + 2, the <i>x</i>-axis and the lines <i>x</i> = 0 and <i>x</i> = 2.",
          "steps": [
            "Sign check first: <i>x</i>² + 2 is positive for every <i>x</i>, so the curve is above the axis throughout and no splitting is needed.",
            "The limits are handed to you as vertical lines, so vertical strips are right: <i>A</i> = ∫₀² (<i>x</i>² + 2) <i>dx</i>.",
            "Antiderivative <i>x</i>³/3 + 2<i>x</i>. At <i>x</i> = 2 this is 8/3 + 4 = 20/3; at <i>x</i> = 0 it is 0.",
            "So <i>A</i> = 20/3. Write the unit: square units."
          ],
          "ans": "20/3 square units"
        },
        {
          "t": "ex",
          "tag": "CUET · JEE MAIN SPEED TRAP",
          "q": "Find the area bounded by <i>y</i> = <i>x</i>³ and the <i>x</i>-axis between <i>x</i> = −2 and <i>x</i> = 2.",
          "steps": [
            "The trap: ∫<sub>−2</sub><sup>2</sup> <i>x</i>³ <i>dx</i> = 0 because <i>x</i>³ is odd, and 0 is offered as an option. The region is plainly not empty, so 0 cannot be the area.",
            "The curve crosses the axis at <i>x</i> = 0: negative on [−2, 0], positive on [0, 2]. Split there.",
            "The two halves are mirror images, so <i>A</i> = 2∫₀² <i>x</i>³ <i>dx</i> = 2[<i>x</i>⁴/4]₀² = 2(16/4).",
            "<i>A</i> = 8. The moment a curve changes sign inside the interval, stop and split."
          ],
          "ans": "8 square units, not 0"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "Find the area of the region in the <b>first quadrant</b> bounded by <i>y</i>² = 4<i>x</i>, the <i>x</i>-axis and the line <i>x</i> = 4.",
          "steps": [
            "First quadrant means the upper branch only: <i>y</i> = 2√<i>x</i>. The <i>x</i>-axis is a stated boundary, so the lower branch is outside the region.",
            "<i>A</i> = ∫₀⁴ 2√<i>x</i> <i>dx</i> = 2 · (2/3)[<i>x</i>√<i>x</i>]₀⁴ = (4/3)(8).",
            "<i>A</i> = 32/3 square units.",
            "Read the boundaries: if the question had said “bounded by the parabola and the line <i>x</i> = 4” with no axis, both branches are in and symmetry doubles the answer to 64/3."
          ],
          "ans": "32/3 square units. With both branches it would be 64/3"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "Find the area of the smaller region bounded by the circle <i>x</i>² + <i>y</i>² = 16 and the line <i>x</i> = 2.",
          "steps": [
            "The radius is 4 and <i>x</i> = 2 is a vertical chord, so the smaller region is the cap between <i>x</i> = 2 and <i>x</i> = 4. It is symmetric about the <i>x</i>-axis: take the top half and double.",
            "<i>A</i> = 2∫₂⁴ √(16 − <i>x</i>²) <i>dx</i>, and the antiderivative is (<i>x</i>/2)√(16 − <i>x</i>²) + 8 sin<sup>−1</sup>(<i>x</i>/4).",
            "At <i>x</i> = 4: 0 + 8(π/2) = 4π. At <i>x</i> = 2: √12 + 8(π/6) = 2√3 + 4π/3.",
            "<i>A</i> = 2(4π − 2√3 − 4π/3) = 2(8π/3 − 2√3) = 16π/3 − 4√3 ≈ 9.83, about a fifth of the disc's 16π. A plausibility check like that costs five seconds."
          ],
          "ans": "16π/3 − 4√3 square units"
        },
        {
          "t": "mcq",
          "q": "If <i>f</i>(<i>x</i>) ≤ 0 throughout [<i>a</i>, <i>b</i>], the area between <i>y</i> = <i>f</i>(<i>x</i>) and the <i>x</i>-axis equals:",
          "correct": 1,
          "opts": [
            {
              "label": "∫<sub>a</sub><sup>b</sup> f(x) dx",
              "nudge": "That is the signed integral, and here it is a negative number. Area is a size and can never be negative. This is the single most common slip in the chapter."
            },
            { "label": "−∫<sub>a</sub><sup>b</sup> f(x) dx", "nudge": null },
            {
              "label": "0",
              "nudge": "Zero belongs to the odd-function-on-symmetric-limits case, where two equal pieces cancel. Here there is only one piece and it does not cancel with anything."
            },
            {
              "label": "½ ∫<sub>a</sub><sup>b</sup> f(x) dx",
              "nudge": "The ½ has leaked in from the triangle formula by reflex. No halving happens anywhere in a strip sum."
            }
          ],
          "solution": "Below the axis every strip has height |f(x)| = −f(x), so A = ∫|f| = −∫f, which is positive. Equivalently, A = |∫f|."
        },
        {
          "t": "mcq",
          "q": "The area bounded by <i>y</i> = sin <i>x</i> and the <i>x</i>-axis from <i>x</i> = 0 to <i>x</i> = 2π is:",
          "correct": 2,
          "opts": [
            {
              "label": "0",
              "nudge": "The signed integral of sin x over [0, 2π] is indeed 0: the two humps cancel exactly. But a picture with two visible humps has area, and the planted answer is this one."
            },
            {
              "label": "2",
              "nudge": "That is the first hump alone: the integral over [0, π] is 2. The second hump is below the axis, and it still has area 2."
            },
            { "label": "4", "nudge": null },
            {
              "label": "1",
              "nudge": "No split of this region gives 1. It usually comes from evaluating −cos x at the wrong pair of limits."
            }
          ],
          "solution": "sin x ≥ 0 on [0, π] and ≤ 0 on [π, 2π], so split at π. The integral over [0, π] is 2, and the integral over [π, 2π] is −2, whose size is 2. Area = 2 + 2 = 4."
        },
        {
          "t": "mcq",
          "q": "The area of the region bounded by <i>x</i> = <i>y</i>², the <i>y</i>-axis and the lines <i>y</i> = 0, <i>y</i> = 2 is:",
          "correct": 0,
          "opts": [
            { "label": "8/3", "nudge": null },
            {
              "label": "4/3",
              "nudge": "This is 8/3 correctly computed and then halved, usually by an unconscious reflex that some symmetry is being double-counted. Nothing here is doubled."
            },
            {
              "label": "16/3",
              "nudge": "Doubling for a symmetry the question does not provide. The bounds y = 0 to y = 2 name one side only; there is no second half to add."
            },
            {
              "label": "2",
              "nudge": "That is ∫₀² y dy, which integrates x = y instead of x = y². Wrong curve, right method."
            }
          ],
          "solution": "The boundaries are horizontal lines, so slice horizontally: A = ∫₀² x dy = ∫₀² y² dy = [y³/3]₀² = 8/3."
        },
        {
          "t": "mcq",
          "q": "The area enclosed by the ellipse <i>x</i>²/16 + <i>y</i>²/9 = 1 is:",
          "correct": 0,
          "opts": [
            { "label": "12π", "nudge": null },
            {
              "label": "7π",
              "nudge": "That adds the semi-axes, a + b = 4 + 3, instead of multiplying them. Area is a product of two lengths, never a sum."
            },
            {
              "label": "144π",
              "nudge": "That is π·16·9, the product of the denominators. You must take square roots first: a = 4 and b = 3, not 16 and 9."
            },
            {
              "label": "25π",
              "nudge": "a² + b² = 25 is a Pythagoras reflex from the conics chapter. It has nothing to do with area."
            }
          ],
          "solution": "a² = 16 gives a = 4 and b² = 9 gives b = 3, so A = πab = π(4)(3) = 12π. Degeneration check: with b = a it must collapse to πa², and πab does."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Find the area bounded by <i>y</i> = 3<i>x</i>² + 1, the <i>x</i>-axis and the lines <i>x</i> = 0, <i>x</i> = 2.",
              "a": "Positive throughout, so no split. ∫₀²(3<i>x</i>² + 1)<i>dx</i> = [<i>x</i>³ + <i>x</i>]₀² = 8 + 2 = <b>10</b> square units."
            },
            {
              "q": "[CUET · JEE Main] Find the area bounded by <i>y</i> = cos <i>x</i>, the <i>x</i>-axis, from <i>x</i> = 0 to <i>x</i> = π. Watch the sign change.",
              "a": "cos <i>x</i> changes sign at π/2. Area = (integral of cos over [0, π/2]) + |integral of cos over [π/2, π]| = 1 + 1 = <b>2</b>. The signed integral is 0."
            },
            {
              "q": "[JEE Main] Find the area of the region bounded by the curve <i>x</i> = 4 − <i>y</i>² and the <i>y</i>-axis.",
              "a": "The curve meets <i>x</i> = 0 at <i>y</i> = ±2, so slice horizontally: ∫<sub>−2</sub><sup>2</sup>(4 − <i>y</i>²)<i>dy</i> = 2(8 − 8/3) = <b>32/3</b> square units."
            },
            {
              "q": "[JEE Main] Find the area bounded by <i>y</i> = <i>x</i>², the <i>x</i>-axis and the ordinates <i>x</i> = 1 and <i>x</i> = 3.",
              "a": "[<i>x</i>³/3]₁³ = 27/3 − 1/3 = <b>26/3</b> square units. No root of <i>x</i>² lies strictly inside [1, 3], so nothing splits."
            },
            {
              "q": "[JEE Advanced] Find the area of the smaller region bounded by <i>x</i>² + <i>y</i>² = 9 and the line <i>x</i> = 3/2.",
              "a": "2∫<sub>3/2</sub>³√(9 − <i>x</i>²)<i>dx</i>. At 3: 9π/4. At 3/2: 9√3/8 + 3π/4. Doubling the difference gives <b>3π − 9√3/4</b> ≈ 5.53 square units."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "Reporting a negative or zero area. Whenever the curve dips below the axis the raw integral turns negative, and if it crosses, the pieces cancel. <b>Always sketch first and use ∫|<i>f</i>| <i>dx</i>, splitting at every root.</b>",
            "Integrating in the wrong variable. A region walled by the <i>y</i>-axis and capped by horizontal lines wants ∫<i>x</i> <i>dy</i>. Forcing <i>dx</i> onto a sideways parabola splits it into two branches and doubles your chance of an arithmetic slip.",
            "Inventing limits. They are the boundary lines or the points where the curve meets the axis. For <i>y</i> = 4 − <i>x</i>² with the <i>x</i>-axis the limits are the <b>roots</b> <i>x</i> = ±2, which you have to solve for, not numbers lifted out of the sentence.",
            "Computing the first-quadrant area of a circle and stopping there. The ×4 is part of the answer. Symmetry saves you three integrals, then asks for one multiplication in return.",
            "Mangling the ellipse. It is <b>π<i>ab</i></b>, the product of the semi-axes, not π<i>a</i>²<i>b</i>² and not π(<i>a</i> + <i>b</i>). Test any parametrised area formula by collapsing it: at <i>b</i> = <i>a</i> the ellipse must become the circle."
          ]
        },
        {
          "t": "protip",
          "html": "sketch, then split, then check for symmetry, and do all three <b>before</b> you write an integral sign. five seconds of picture kills the three biggest mark-losers in this chapter: the sign, the limits and the forgotten multiplication. and when the picture is a circle or an ellipse, remember you already know the answer, π<i>a</i>² or π<i>ab</i>, so the integration is only there to prove it. if your integral disagrees with the shape you drew, trust the shape."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "A = ∫ₐᵇ y dx · A = ∫ x dy, y from c to d", "note": "vertical strips, then strips on their side" },
            { "f": "A = ∫ₐᵇ |f(x)| dx", "note": "split at every root; the signed integral is not the area" },
            { "f": "∫√(a² − x²) dx = (x/2)√(a² − x²) + (a²/2)sin⁻¹(x/a)", "note": "the only hard antiderivative the boards want" },
            { "f": "circle πa² · ellipse πab · quarter disc πa²/4", "note": "product of the semi-axes, and it collapses correctly" },
            { "f": "symmetry: ×2 a half, ×4 a quadrant", "note": "verify the symmetry, then remember to multiply back" }
          ],
          "aids": [
            "“sketch, limits, is it symmetric, choose the variable, evaluate”",
            "“a negative answer is not an area, it is a message”"
          ]
        }
      ]
    },
    {
      "n": "02",
      "title": "Area between Two Curves",
      "chip": "02 TWO CURVES",
      "kalam": "top minus bottom, every strip, every time",
      "blocks": [
        {
          "t": "p",
          "html": "Topic 01 trapped a region between a curve and the <i>x</i>-axis. But the axis is nothing special: it is the flat line <i>y</i> = 0. Let the <b>floor</b> of your region be a curve too and the whole idea generalises in one stroke, because the strip is still a strip. It no longer runs from the axis up to the curve; it runs from the <b>lower</b> curve up to the <b>upper</b> one, so its height is the gap between them."
        },
        {
          "t": "think",
          "html": "picture the strip of land between two railway tracks crossing a hilly stretch of the konkan coast. the upper track follows one curve, the lower track another. slice the land vertically into paper-thin pieces. each piece runs from the lower rail to the upper rail, so its height is not “the curve”, it is the gap: top minus bottom. that is the entire new idea, and everything hard about it is deciding which track is on top and where the two of them meet."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · VERTICAL STRIPS, TOP MINUS BOTTOM",
          "tag": "f(x) ≥ g(x) on [a, b]",
          "main": "A = ∫<sub>a</sub><sup>b</sup> [ f(x) − g(x) ] dx",
          "legend": [
            "<i>f</i> is the upper curve and <i>g</i> the lower, decided by <b>testing one sample point</b> between the limits",
            "<i>a</i> and <i>b</i> are the <b>points of intersection</b>: solve <i>f</i>(<i>x</i>) = <i>g</i>(<i>x</i>) for them",
            "with <i>g</i>(<i>x</i>) = 0 this is topic 01 again, which is the check that the generalisation is honest"
          ],
          "note": "The single proviso f ≥ g is the whole game. It does not matter whether the curves are above or below the axis, only which of the two is higher."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "DIAGRAM · THE LIMITS ARE THE INTERSECTIONS",
          "chips": ["SOLVE FIRST", "THE LENS", "ONE STRIP", "A GUESSED LIMIT"],
          "captions": [
            "The line y = x and the parabola y = x². Nothing can be integrated yet, because nobody has told you where the region ends. Solving x = x² gives x(x − 1) = 0, so the two dots at (0, 0) and (1, 1) are the limits. They come from the algebra, never from the sentence.",
            "Now shade between them. On the whole of (0, 1) the line is above: at x = 1/2 it gives 0.5 against the parabola's 0.25. So A = ∫₀¹ (x − x²) dx = 1/2 − 1/3 = 1/6.",
            "One representative strip at x = 1/2. Its foot is on the parabola, its head on the line, and its height is the gap, 0.5 − 0.25 = 0.25. Add strips like this from 0 to 1 and you have the lens. The strip height shrinks to zero at each intersection, which is exactly why the intersections are the limits.",
            "The same picture with the upper limit guessed as 2. Past x = 1 the parabola is on top, so the integrand (x − x²) turns negative and the second shaded piece is subtracted from the first. ∫₀² (x − x²) dx = 2 − 8/3 = −2/3, a negative number that is not an area of anything. Solve for the limits."
          ],
          "frames": [
            {
              "x": [-0.5, 2.4],
              "y": [-0.6, 4.4],
              "curves": [
                { "c": "poly", "coeffs": [0, 0, 1] },
                { "c": "line", "m": 1, "k": 0 }
              ],
              "points": [
                { "x": 0, "y": 0, "label": "(0, 0)" },
                { "x": 1, "y": 1, "label": "(1, 1)" }
              ]
            },
            {
              "x": [-0.5, 2.4],
              "y": [-0.6, 4.4],
              "curves": [
                { "c": "poly", "coeffs": [0, 0, 1] },
                { "c": "line", "m": 1, "k": 0 }
              ],
              "areas": [
                { "under": { "c": "line", "m": 1, "k": 0 }, "and": { "c": "poly", "coeffs": [0, 0, 1] }, "from": 0, "to": 1 }
              ],
              "points": [
                { "x": 0, "y": 0 },
                { "x": 1, "y": 1 }
              ],
              "labels": [{ "x": 1.55, "y": 1.2, "text": "A = 1/6" }]
            },
            {
              "x": [-0.5, 2.4],
              "y": [-0.6, 4.4],
              "curves": [
                { "c": "poly", "coeffs": [0, 0, 1] },
                { "c": "line", "m": 1, "k": 0 }
              ],
              "areas": [
                { "under": { "c": "line", "m": 1, "k": 0 }, "and": { "c": "poly", "coeffs": [0, 0, 1] }, "from": 0, "to": 1, "soft": true }
              ],
              "segments": [{ "from": [0.5, 0.25], "to": [0.5, 0.5], "label": "top − bottom" }]
            },
            {
              "x": [-0.5, 2.4],
              "y": [-0.6, 4.4],
              "curves": [
                { "c": "poly", "coeffs": [0, 0, 1] },
                { "c": "line", "m": 1, "k": 0 },
                { "c": "vline", "x": 2, "dash": true, "soft": true }
              ],
              "areas": [
                { "under": { "c": "line", "m": 1, "k": 0 }, "and": { "c": "poly", "coeffs": [0, 0, 1] }, "from": 0, "to": 1 },
                { "under": { "c": "poly", "coeffs": [0, 0, 1] }, "and": { "c": "line", "m": 1, "k": 0 }, "from": 1, "to": 2, "soft": true }
              ],
              "points": [{ "x": 1, "y": 1, "label": "swap" }],
              "labels": [{ "x": 1.75, "y": 3.4, "text": "subtracted", "soft": true }]
            }
          ]
        },
        {
          "t": "p",
          "html": "Two things are genuinely new, and both happen <b>before</b> any integration. First, <b>the limits are not given to you</b>: they are the points where the two curves meet, found by solving <i>f</i>(<i>x</i>) = <i>g</i>(<i>x</i>). Copying convenient numbers out of the question is the most common 0 out of 5 on the boards. Second, <b>which curve is on top</b> is a fact you have to check, and it can change: <i>f</i> above <i>g</i> on one stretch and below it on another. Wherever they cross, the gap flips sign, so you split there and always subtract the genuine lower curve from the genuine upper one."
        },
        {
          "t": "proc",
          "title": "Intersect, sketch, sample, integrate",
          "steps": [
            "<b>Intersect.</b> Solve <i>f</i>(<i>x</i>) = <i>g</i>(<i>x</i>), or <i>p</i>(<i>y</i>) = <i>q</i>(<i>y</i>) if you are slicing horizontally. Every root inside the region matters: the outer two are the limits, any middle one is a swap.",
            "<b>Sketch.</b> Rough curves, shaded region. You are looking for two things only: does the region close, and does the boundary switch anywhere.",
            "<b>Sample.</b> Take one easy <i>x</i> strictly between two consecutive intersections and evaluate both curves. The bigger value is the top there. Guessing this is the number-one source of sign errors.",
            "<b>Integrate top minus bottom</b> on each stretch separately, and add the <b>sizes</b>. Equivalently, <i>A</i> = ∫|<i>f</i> − <i>g</i>| <i>dx</i>, which is the same instruction written as one symbol.",
            "<b>Check the sign of your answer.</b> A negative result means you subtracted in the wrong order, or integrated straight through a swap. Do not silently take the modulus at the end: if the split points were wrong, the modulus hides the error instead of fixing it."
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · HORIZONTAL STRIPS, RIGHT MINUS LEFT",
          "tag": "p(y) ≥ q(y) between y = c and y = d",
          "main": "A = ∫<sub>c</sub><sup>d</sup> [ p(y) − q(y) ] dy",
          "legend": [
            "<i>p</i> is the <b>right</b> curve and <i>q</i> the <b>left</b>, tested the same way at one sample <i>y</i>",
            "<i>c</i> and <i>d</i> are the <i>y</i>-coordinates of the intersections",
            "the crossing rule is identical: split at any <i>y</i> where right and left swap"
          ],
          "note": "Reach for this the moment a boundary is a sideways parabola. In x it is two branches and two integrals; in y it is one formula and one integral."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "DIAGRAM · WHEN THE CEILING CHANGES",
          "chips": ["TWO CANDIDATES", "THE SWITCH", "x² THEN 8/x", "OR SLICE IN y"],
          "captions": [
            "The region 0 ≤ y ≤ x² + 1 and 0 ≤ y ≤ x + 1 for 0 ≤ x ≤ 2. Two ceilings are on offer and the region lies under the lower of them. They cross at (0, 1) and (1, 2), and on (0, 1) the line is higher while past x = 1 the parabola is.",
            "So the true ceiling is the parabola on [0, 1] and the line on [1, 2], and the dashed vertical marks the switch. Two integrals, not one: ∫₀¹(x² + 1)dx + ∫₁²(x + 1)dx = 4/3 + 5/2 = 23/6. One integral across the switch would use the wrong ceiling on half the range.",
            "Advanced 2018, the same idea with a hyperbola. The region is 1 ≤ y ≤ x² with xy ≤ 8: the floor is the flat line y = 1, and the ceiling changes from y = x² to y = 8/x where they cross at (2, 4). Corners at (1, 1) and (8, 1). Area = ∫₁²(x² − 1)dx + ∫₂⁸(8/x − 1)dx = 4/3 + 16 ln 2 − 6.",
            "A different reason to split, and the way out of it. The parabola y² = 4x with the line y = 2x − 4 meet at (1, −2) and (4, 4). In x the region needs two pieces, because below x = 1 the floor is the lower branch of the parabola and above it the line takes over. In y there is one strip, right minus left, from y = −2 to y = 4, and the answer is 9."
          ],
          "frames": [
            {
              "x": [-0.4, 2.5],
              "y": [-0.6, 5.6],
              "curves": [
                { "c": "poly", "coeffs": [1, 0, 1] },
                { "c": "line", "m": 1, "k": 1 }
              ],
              "points": [
                { "x": 0, "y": 1, "label": "(0, 1)" },
                { "x": 1, "y": 2, "label": "(1, 2)" }
              ]
            },
            {
              "x": [-0.4, 2.5],
              "y": [-0.6, 5.6],
              "curves": [
                { "c": "poly", "coeffs": [1, 0, 1] },
                { "c": "line", "m": 1, "k": 1 },
                { "c": "vline", "x": 1, "dash": true, "soft": true }
              ],
              "areas": [
                { "under": { "c": "poly", "coeffs": [1, 0, 1] }, "from": 0, "to": 1 },
                { "under": { "c": "line", "m": 1, "k": 1 }, "from": 1, "to": 2 }
              ],
              "labels": [
                { "x": 0.5, "y": 0.45, "text": "x² + 1" },
                { "x": 1.6, "y": 0.45, "text": "x + 1" }
              ]
            },
            {
              "x": [-0.4, 9.4],
              "y": [-0.8, 6.2],
              "curves": [
                { "c": "poly", "coeffs": [0, 0, 1] },
                { "c": "recip", "a": 8 },
                { "c": "line", "m": 0, "k": 1, "soft": true },
                { "c": "vline", "x": 2, "dash": true, "soft": true }
              ],
              "areas": [
                { "under": { "c": "poly", "coeffs": [0, 0, 1] }, "and": { "c": "line", "m": 0, "k": 1 }, "from": 1, "to": 2 },
                { "under": { "c": "recip", "a": 8 }, "and": { "c": "line", "m": 0, "k": 1 }, "from": 2, "to": 8 }
              ],
              "points": [
                { "x": 1, "y": 1 },
                { "x": 2, "y": 4, "label": "(2, 4)" },
                { "x": 8, "y": 1, "label": "(8, 1)" }
              ]
            },
            {
              "x": [-1.2, 6.8],
              "y": [-3.4, 5.4],
              "curves": [
                { "c": "parabola", "a": 1, "horizontal": true },
                { "c": "line", "m": 2, "k": -4 }
              ],
              "polygons": [
                {
                  "points": [[1, -2], [0.766, -1.75], [0.562, -1.5], [0.391, -1.25], [0.25, -1], [0.141, -0.75], [0.062, -0.5], [0.016, -0.25], [0, 0], [0.016, 0.25], [0.062, 0.5], [0.141, 0.75], [0.25, 1], [0.391, 1.25], [0.562, 1.5], [0.766, 1.75], [1, 2], [1.266, 2.25], [1.562, 2.5], [1.891, 2.75], [2.25, 3], [2.641, 3.25], [3.062, 3.5], [3.516, 3.75], [4, 4]],
                  "corners": false
                }
              ],
              "points": [
                { "x": 1, "y": -2, "label": "(1, −2)" },
                { "x": 4, "y": 4, "label": "(4, 4)" }
              ]
            }
          ]
        },
        {
          "t": "def",
          "term": "A swap, and the modulus that handles it",
          "html": "If the curves cross at <i>x</i> = <i>k</i> strictly inside [<i>a</i>, <i>b</i>], with <i>f</i> ≥ <i>g</i> on [<i>a</i>, <i>k</i>] and <i>g</i> ≥ <i>f</i> on [<i>k</i>, <i>b</i>], then <b><i>A</i> = ∫<sub>a</sub><sup>k</sup>(<i>f</i> − <i>g</i>) <i>dx</i> + ∫<sub>k</sub><sup>b</sup>(<i>g</i> − <i>f</i>) <i>dx</i> = ∫<sub>a</sub><sup>b</sup>|<i>f</i> − <i>g</i>| <i>dx</i></b>. The modulus is not decoration: without the split, the second stretch subtracts itself from the first and the answer comes out too small, sometimes exactly zero."
        },
        {
          "t": "p",
          "html": "One worry can be retired permanently. What if part of the region sits <b>below</b> the <i>x</i>-axis, so that <i>g</i> is negative? Nothing changes. Shift the entire picture up by a constant <i>C</i> big enough to lift both curves above the axis. Shifting moves no boundary relative to any other, so the area is untouched, and the shifted integrand is (<i>f</i> + <i>C</i>) − (<i>g</i> + <i>C</i>) = <i>f</i> − <i>g</i>: the constant cancels. <b>Top minus bottom is valid wherever the region sits</b>, above the axis, below it, or straddling it. Only the ordering <i>f</i> ≥ <i>g</i> matters."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE TWO PARABOLAS, TAP A LINE",
          "steps": [
            {
              "eq": "y² = 4ax and x² = 4ay meet where x⁴ = 64a³x",
              "why": "From the second curve y = x²/(4a). Substitute into the first: x⁴/(16a²) = 4ax, so x⁴ = 64a³x and x(x³ − 64a³) = 0. The roots are x = 0 and x = 4a, so the curves meet at (0, 0) and (4a, 4a). No limits were given; they were manufactured here."
            },
            {
              "eq": "on (0, 4a) the top curve is y = 2√(ax)",
              "why": "The two candidates are y = 2√(ax) from the first parabola and y = x²/(4a) from the second. Sample at x = a: the first gives 2a, the second gives a/4. So the sideways parabola is on top throughout, and there is no swap inside the interval."
            },
            {
              "eq": "A = ∫₀⁴ᵃ [ 2√(ax) − x²/(4a) ] dx",
              "why": "Top minus bottom, with the limits just found. Both pieces integrate by the power rule: the first gives (4/3)√a·x√x and the second gives x³/(12a)."
            },
            {
              "eq": "A = 32a²/3 − 16a²/3 = 16a²/3",
              "why": "At x = 4a the first term is (4/3)√a·(4a)√(4a) = 32a²/3 and the second is 64a³/(12a) = 16a²/3. The answer scales as a², which is what an area must do. Notice the first term alone is 32a²/3, and it is the standard wrong option: it is the area under the upper parabola with the lower one never subtracted."
            }
          ]
        },
        {
          "t": "defgrid",
          "title": "Parabola pairs, which are not interchangeable",
          "rows": [
            { "k": "y² = 4ax, x² = 4ay", "v": "meet at (0, 0) and (4<i>a</i>, 4<i>a</i>); area <b>16<i>a</i>²/3</b>. The one the boards quote" },
            { "k": "y² = ax, x² = ay", "v": "meet at (0, 0) and (<i>a</i>, <i>a</i>); area <b><i>a</i>²/3</b>. Same shape, quarter of the scale" },
            { "k": "y² = 4ax, x² = ay", "v": "meet at (∛4·<i>a</i>, ∛16·<i>a</i>), <b>not</b> at (<i>a</i>, <i>a</i>); area <b>4<i>a</i>²/3</b>" },
            { "k": "y = ax², x = ay²", "v": "meet at (0, 0) and (1/<i>a</i>, 1/<i>a</i>); area <b>1/(3<i>a</i>²)</b>, which <i>shrinks</i> as <i>a</i> grows" },
            { "k": "The safe habit", "v": "do not recall the number, <b>re-solve the intersection</b>. Four printed variants of one picture give four different answers" }
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Find the area of the region bounded by the line <i>y</i> = <i>x</i> and the parabola <i>y</i> = <i>x</i>².",
          "steps": [
            "Intersect: <i>x</i> = <i>x</i>² gives <i>x</i>(<i>x</i> − 1) = 0, so <i>x</i> = 0 and <i>x</i> = 1 are the limits.",
            "Sample at <i>x</i> = 1/2: the line gives 0.5 and the parabola 0.25, so the <b>line</b> is on top.",
            "<i>A</i> = ∫₀¹(<i>x</i> − <i>x</i>²)<i>dx</i> = [<i>x</i>²/2 − <i>x</i>³/3]₀¹ = 1/2 − 1/3.",
            "<i>A</i> = 1/6 square units. Sanity: the lens sits inside a triangle of area 1/2, so a sixth is believable."
          ],
          "ans": "1/6 square units"
        },
        {
          "t": "ex",
          "tag": "CUET · JEE MAIN SPEED TRAP",
          "q": "Find the area enclosed between <i>y</i> = <i>x</i> and <i>y</i> = <i>x</i>³ for −1 ≤ <i>x</i> ≤ 1.",
          "steps": [
            "The trap: ∫<sub>−1</sub><sup>1</sup>(<i>x</i> − <i>x</i>³)<i>dx</i> = 0, because the integrand is odd. The region is two visible lobes, so 0 is not its area.",
            "The curves cross at <i>x</i> = −1, 0, 1, and the middle root is a <b>swap</b>. On (0, 1) the line is on top: at <i>x</i> = 0.5, 0.5 beats 0.125. On (−1, 0) the cube is on top: at <i>x</i> = −0.5, −0.125 beats −0.5.",
            "The two lobes are mirror images through the origin, so <i>A</i> = 2∫₀¹(<i>x</i> − <i>x</i>³)<i>dx</i> = 2[<i>x</i>²/2 − <i>x</i>⁴/4]₀¹ = 2(1/2 − 1/4).",
            "<i>A</i> = 1/2 square units. The instant two curves cross inside your interval, split."
          ],
          "ans": "1/2 square units, not 0"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "Find the area of the region bounded by the parabola <i>y</i>² = 4<i>x</i> and the line <i>y</i> = 2<i>x</i> − 4.",
          "steps": [
            "Both boundaries are easy as functions of <i>y</i>: the parabola is <i>x</i> = <i>y</i>²/4 and the line is <i>x</i> = (<i>y</i> + 4)/2. That is the signal to slice horizontally.",
            "Intersect: <i>y</i>²/4 = (<i>y</i> + 4)/2 gives <i>y</i>² − 2<i>y</i> − 8 = 0, so (<i>y</i> − 4)(<i>y</i> + 2) = 0 and <i>y</i> = −2, 4.",
            "Right versus left at <i>y</i> = 0: the line gives <i>x</i> = 2, the parabola <i>x</i> = 0. The line is the right curve.",
            "<i>A</i> = ∫<sub>−2</sub><sup>4</sup>[(<i>y</i> + 4)/2 − <i>y</i>²/4]<i>dy</i> = 15 − 6 = 9 square units. In <i>x</i> this needs two integrals; in <i>y</i> it needs one."
          ],
          "ans": "9 square units, in one integral because it was sliced in y"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "Find the area common to the interiors of the parabola <i>y</i>² = 4<i>x</i> and the circle <i>x</i>² + <i>y</i>² = 5.",
          "steps": [
            "Intersect: put <i>y</i>² = 4<i>x</i> into the circle, <i>x</i>² + 4<i>x</i> − 5 = 0, so (<i>x</i> + 5)(<i>x</i> − 1) = 0. <b>Reject <i>x</i> = −5</b>, since the parabola needs <i>x</i> ≥ 0. The curves meet at (1, ±2).",
            "The region is symmetric about the <i>x</i>-axis, so take the upper half and double. Moving right, the binding ceiling is the <b>parabola</b> from <i>x</i> = 0 to 1, then the <b>circle</b> from 1 to √5: the ceiling switches at the intersection.",
            "<i>A</i> = 2[∫₀¹2√<i>x</i> <i>dx</i> + ∫√(5 − <i>x</i>²) <i>dx</i> over [1, √5]]. First piece 4/3. Second, by the workhorse antiderivative, 5π/4 − 1 − (5/2)sin<sup>−1</sup>(1/√5).",
            "<i>A</i> = 2/3 + 5π/2 − 5 sin<sup>−1</sup>(1/√5) ≈ 6.20. The whole disc is 5π ≈ 15.7, so a common region under half of it is sensible."
          ],
          "ans": "2/3 + 5π/2 − 5 sin<sup>−1</sup>(1/√5) ≈ 6.20 square units"
        },
        {
          "t": "mcq",
          "q": "The area between an upper curve <i>y</i> = <i>f</i>(<i>x</i>) and a lower curve <i>y</i> = <i>g</i>(<i>x</i>) from <i>x</i> = <i>a</i> to <i>x</i> = <i>b</i> is:",
          "correct": 1,
          "opts": [
            {
              "label": "∫<sub>a</sub><sup>b</sup> (f + g) dx",
              "nudge": "Adding the curves measures nothing geometric. It is the reflex answer when the rule has gone blank; the strip height is a gap, and gaps are differences."
            },
            { "label": "∫<sub>a</sub><sup>b</sup> (f − g) dx", "nudge": null },
            {
              "label": "∫<sub>a</sub><sup>b</sup> (g − f) dx",
              "nudge": "Bottom minus top, which is the negative of the area. It is only right if you mislabelled which curve is upper, in which case fix the label, not the sign."
            },
            {
              "label": "∫<sub>a</sub><sup>b</sup> (|f| − |g|) dx",
              "nudge": "This confuses the between-curves rule with topic 01's absolute value. |f| − |g| is not the gap between the curves whenever either dips below the axis."
            }
          ],
          "solution": "The strip at x runs from the lower curve to the upper, so its height is f(x) − g(x) and its area is [f(x) − g(x)] dx. Summing the strips gives the integral. With g = 0 it collapses to the single-curve formula."
        },
        {
          "t": "mcq",
          "q": "The area of the region bounded by <i>y</i> = <i>x</i>² and <i>y</i> = <i>x</i> between their points of intersection is:",
          "correct": 0,
          "opts": [
            { "label": "1/6", "nudge": null },
            {
              "label": "1/3",
              "nudge": "That is ∫₀¹x² dx, the area under the parabola alone. The lower curve was never subtracted."
            },
            {
              "label": "1/2",
              "nudge": "That is ∫₀¹x dx, the area under the line alone. Same disease as the previous option, other curve."
            },
            {
              "label": "5/6",
              "nudge": "This adds the two single-curve areas, 1/2 + 1/3, instead of subtracting them. Between-curves is always a difference."
            }
          ],
          "solution": "Intersections at x = 0 and x = 1. Sampling at x = 1/2 puts the line on top. A = ∫₀¹(x − x²) dx = 1/2 − 1/3 = 1/6."
        },
        {
          "t": "mcq",
          "q": "The area bounded by the line <i>y</i> = <i>x</i> and the parabola <i>y</i>² = 4<i>x</i> is:",
          "correct": 0,
          "opts": [
            { "label": "8/3", "nudge": null },
            {
              "label": "16/3",
              "nudge": "That is ∫₀⁴2√x dx, the area under the parabola alone, with the line never subtracted. It is the most frequently planted distractor in this family."
            },
            {
              "label": "8",
              "nudge": "The area under the line alone is ∫₀⁴x dx = 8. Right limits, missing subtraction, wrong curve kept."
            },
            {
              "label": "4",
              "nudge": "A triangle guess, ½ × 4 × 2, using the width 4 and the height 2 that the parabola reaches at x = 1. The upper boundary is a curve, so no triangle formula applies."
            }
          ],
          "solution": "Intersect: x² = 4x gives x = 0 and x = 4. Sample at x = 1: the parabola gives 2, the line 1, so the parabola is on top. A = ∫₀⁴(2√x − x) dx = 32/3 − 8 = 8/3."
        },
        {
          "t": "mcq",
          "q": "The area enclosed between the parabolas <i>y</i>² = 4<i>x</i> and <i>x</i>² = 4<i>y</i> is:",
          "correct": 0,
          "opts": [
            { "label": "16/3", "nudge": null },
            {
              "label": "32/3",
              "nudge": "The area under the upper parabola alone, ∫₀⁴2√x dx. Exactly the forgot-to-subtract trap, and it is double the right answer, which makes it look plausible."
            },
            {
              "label": "8/3",
              "nudge": "Half the answer, from assuming a symmetry the region does not have about the x-axis. It is symmetric about y = x, which does not halve this integral."
            },
            {
              "label": "16",
              "nudge": "Right numerator, missing the 3. It comes from using x = 4a = 4 in a slab formula rather than actually integrating."
            }
          ],
          "solution": "This is the standard pair y² = 4ax with x² = 4ay at a = 1, so the area is 16a²/3 = 16/3. Do not recall it blind: the near-identical pair y² = ax with x² = ay gives a²/3 instead."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Find the area of the region bounded by <i>y</i> = <i>x</i>² and <i>y</i> = 2<i>x</i>.",
              "a": "Intersect: <i>x</i>² = 2<i>x</i> gives <i>x</i> = 0, 2. Line on top. ∫₀²(2<i>x</i> − <i>x</i>²)<i>dx</i> = 4 − 8/3 = <b>4/3</b> square units."
            },
            {
              "q": "[CUET · JEE Main] Find the area enclosed between <i>y</i> = sin <i>x</i> and <i>y</i> = cos <i>x</i> from <i>x</i> = 0 to <i>x</i> = π/4. Decide which is on top.",
              "a": "At <i>x</i> = 0, cos = 1 beats sin = 0, so cosine is on top and they only meet at the right end. Over [0, π/4], ∫(cos <i>x</i> − sin <i>x</i>)<i>dx</i> = [sin <i>x</i> + cos <i>x</i>] evaluated from 0 to π/4 = <b>√2 − 1</b>."
            },
            {
              "q": "[JEE Main] Find the area bounded by the parabola <i>y</i>² = <i>x</i> and the line <i>x</i> = 3<i>y</i>.",
              "a": "Slice in <i>y</i>: <i>y</i>² = 3<i>y</i> gives <i>y</i> = 0, 3, and the line is the right curve. ∫₀³(3<i>y</i> − <i>y</i>²)<i>dy</i> = 27/2 − 9 = <b>9/2</b> square units."
            },
            {
              "q": "[JEE Main] Find the area of {(<i>x</i>, <i>y</i>) : 0 ≤ <i>y</i> ≤ <i>x</i>² + 1, 0 ≤ <i>y</i> ≤ <i>x</i> + 1, 0 ≤ <i>x</i> ≤ 2}.",
              "a": "The ceiling is the smaller of the two, so it is <i>x</i>² + 1 on [0, 1] and <i>x</i> + 1 on [1, 2]. ∫₀¹(<i>x</i>² + 1)<i>dx</i> + ∫₁²(<i>x</i> + 1)<i>dx</i> = 4/3 + 5/2 = <b>23/6</b>."
            },
            {
              "q": "[JEE Advanced] Find the area bounded by <i>y</i>² = 4<i>x</i> and the line <i>x</i> + <i>y</i> = 3.",
              "a": "In <i>y</i>: <i>y</i>²/4 = 3 − <i>y</i> gives <i>y</i>² + 4<i>y</i> − 12 = 0, so <i>y</i> = 2, −6. ∫<sub>−6</sub><sup>2</sup>(3 − <i>y</i> − <i>y</i>²/4)<i>dy</i> = 10/3 + 18 = <b>64/3</b> square units."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "Subtracting in the wrong order. Bottom minus top flips the sign and hands you a negative “area”. <b>Test one interior sample point</b> and write the bigger one first; never decide by which equation you wrote down first.",
            "Inventing the limits. They are the <b>intersections</b>, from solving <i>f</i>(<i>x</i>) = <i>g</i>(<i>x</i>), not numbers copied from the question text. This single step is the most common zero on a board answer.",
            "Integrating across a swap. If the curves cross inside the interval the roles switch there, and one integral straight through gives a total that is too small, sometimes zero. <b>Split at every interior crossing.</b>",
            "Keeping an extraneous root. Squaring manufactures intersections: <i>x</i>² + 4<i>x</i> − 5 = 0 offers <i>x</i> = −5 for a parabola that only lives on <i>x</i> ≥ 0. <b>Test every root in the original equations</b> and against any stated quadrant.",
            "Trusting a memorised parabola-pair answer. <i>y</i>² = 4<i>ax</i> with <i>x</i>² = 4<i>ay</i> gives 16<i>a</i>²/3, but <i>y</i>² = <i>ax</i> with <i>x</i>² = <i>ay</i> gives <i>a</i>²/3 and <i>y</i>² = 4<i>ax</i> with <i>x</i>² = <i>ay</i> gives 4<i>a</i>²/3. <b>Re-solve the intersection every time.</b>"
          ]
        },
        {
          "t": "protip",
          "html": "before anything else, ask whether the region is walled left and right or capped top and bottom. sideways-opening curves and regions boxed in by horizontal lines are far cleaner in <i>y</i>: right minus left, one integral, no branches. the parabola <i>y</i>² = 4<i>x</i> with a line is the standard exam invitation to switch, and the students who force <i>dx</i> onto it lose the marks in the second branch, not in the calculus."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "A = ∫ₐᵇ (top − bottom) dx", "note": "the axis was only ever the line y = 0" },
            { "f": "A = ∫ (right − left) dy", "note": "sideways curves, and regions capped by horizontals" },
            { "f": "limits: solve f(x) = g(x)", "note": "never numbers lifted from the question" },
            { "f": "crossing inside ⇒ A = ∫ₐᵇ |f − g| dx", "note": "split at the swap and add the sizes" },
            { "f": "y² = 4ax with x² = 4ay ⇒ 16a²/3", "note": "and 32a²/3 is the upper curve alone, the planted trap" }
          ],
          "aids": [
            "“intersect, sketch, sample, integrate, in that order”",
            "“top minus bottom, every strip, every time”"
          ]
        }
      ]
    },
    {
      "n": "03",
      "title": "Modulus, Inequalities and Composite Regions",
      "chip": "03 DECODE",
      "kalam": "decode the boundary; the calculus is the easy part",
      "blocks": [
        {
          "t": "p",
          "html": "Every hard area question in JEE is topic 01 or topic 02 <b>in disguise</b>, and the extra work is stripping off the disguise, not integrating. Three disguises come back again and again: a <b>modulus</b>, which puts a corner in the boundary; an <b>inequality</b>, which hands you a region instead of a curve; and a <b>composite</b> boundary, where the ceiling is one curve for a while and then becomes another. Nothing new gets integrated in this topic. What gets tested is whether you can draw what the question actually said."
        },
        {
          "t": "think",
          "html": "think of it as a decoding puzzle with a routine calculation stapled to the end. find the corners, decide which side of each boundary you are on, locate the switch points, and the integral writes itself. almost every lost mark in this topic is a decoding error, almost none of them are calculus errors. so spend the first thirty seconds on the picture and none of them on the antiderivative."
        },
        {
          "t": "def",
          "term": "The corner a modulus makes",
          "html": "|<i>f</i>(<i>x</i>)| equals <i>f</i>(<i>x</i>) where <i>f</i> ≥ 0 and −<i>f</i>(<i>x</i>) where <i>f</i> is negative, so its graph is <i>f</i> with every below-axis piece <b>reflected back up</b>. Each reflection leaves a <b>corner</b> at a root of <i>f</i>. To integrate, set the inside of every modulus to zero, split the interval at those roots, replace each modulus by +<i>f</i> or −<i>f</i> according to its sign there, and add. A nested modulus such as ||<i>x</i>| − 1| has <b>two</b> corners, at <i>x</i> = ±1, and missing one of them wrecks the limits."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "DIAGRAM · CORNERS, AND WHICH SIDE",
          "chips": ["THE V", "A SHIFTED V", "THE DIAMOND", "A WEDGE IN A DISC"],
          "captions": [
            "y = |x| between x = −2 and x = 3. One corner, at the origin, where the inside changes sign. Left of it the curve is y = −x, right of it y = x, and the two triangles have areas 2 and 9/2, so the region is 13/2. Integrating |x| in one go without splitting is the error this picture exists to prevent.",
            "y = |x − 2| on [0, 4]. The corner has moved to x = 2, because that is where the inside vanishes. Nothing else changed: the region is still two triangles, each with base 2 and height 2, so the area is 4. Corners live at the roots of the inside expression, never at the origin by default.",
            "|x| + |y| ≤ 2. In the first quadrant it reads x + y ≤ 2, a right triangle with both legs 2, and the other three quadrants are its mirror images. Four such triangles give 2a² = 8. The four dots are the vertices (±2, 0) and (0, ±2), and the diagonals are both 4, so the rhombus formula d₁d₂/2 agrees.",
            "The system y ≥ |x| with x² + y² ≤ 2. The V opens upward and the disc has radius √2, and they meet where x² + x² = 2, at (±1, 1). The V's arms are at 45 degrees on each side of the y-axis, so the wedge subtends a right angle at the centre and the region is exactly a quarter of the disc: π/2. Integration must agree with that, and it does."
          ],
          "frames": [
            {
              "x": [-2.8, 3.8],
              "y": [-0.9, 3.8],
              "curves": [
                { "c": "abs" },
                { "c": "vline", "x": -2, "dash": true, "soft": true },
                { "c": "vline", "x": 3, "dash": true, "soft": true }
              ],
              "areas": [{ "under": { "c": "abs" }, "from": -2, "to": 3 }],
              "points": [{ "x": 0, "y": 0, "label": "corner" }]
            },
            {
              "x": [-1, 5],
              "y": [-0.8, 3.4],
              "polygons": [
                { "points": [[0, 0], [0, 2], [2, 0], [4, 2], [4, 0]], "corners": false }
              ],
              "segments": [
                { "from": [0, 2], "to": [2, 0] },
                { "from": [2, 0], "to": [4, 2] }
              ],
              "points": [{ "x": 2, "y": 0, "label": "corner at x = 2" }]
            },
            {
              "x": [-3.6, 3.6],
              "y": [-2.6, 2.6],
              "polygons": [{ "points": [[2, 0], [0, 2], [-2, 0], [0, -2]] }],
              "labels": [{ "x": 0, "y": -0.35, "text": "A = 2a² = 8" }]
            },
            {
              "x": [-2.4, 2.4],
              "y": [-1.72, 1.72],
              "curves": [{ "c": "circle", "r": 1.414 }, { "c": "abs" }],
              "polygons": [
                {
                  "points": [[0, 0], [1, 1], [0.831, 1.144], [0.642, 1.26], [0.437, 1.345], [0.221, 1.397], [0, 1.414], [-0.221, 1.397], [-0.437, 1.345], [-0.642, 1.26], [-0.831, 1.144], [-1, 1]],
                  "corners": false
                }
              ],
              "points": [
                { "x": 1, "y": 1, "label": "(1, 1)" },
                { "x": -1, "y": 1 }
              ]
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE DIAMOND",
          "tag": "a rhombus with its diagonals on the axes",
          "main": "|x|/p + |y|/q ≤ 1 ⇒ A = 2pq",
          "legend": [
            "the vertices are (±<i>p</i>, 0) and (0, ±<i>q</i>), so the diagonals are 2<i>p</i> and 2<i>q</i>",
            "in particular |<i>x</i>| + |<i>y</i>| ≤ <i>a</i> is the case <i>p</i> = <i>q</i> = <i>a</i>, and its area is <b>2<i>a</i>²</b>",
            "cross-check with the rhombus formula <i>d</i><sub>1</sub><i>d</i><sub>2</sub>/2 = (2<i>p</i>)(2<i>q</i>)/2 = 2<i>pq</i>"
          ],
          "note": "a is the half-diagonal, not the side. |x| + |y| ≤ 4 has area 32, not 16: the side of that square is 4√2."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY THE DIAMOND IS 2a², TAP A LINE",
          "steps": [
            {
              "eq": "|x| + |y| ≤ a is unchanged by x → −x and by y → −y",
              "why": "Replacing x by −x leaves |x| alone, and the same for y. So the region is symmetric about both axes, and about the origin as well. Its area is four times the part in the first quadrant."
            },
            {
              "eq": "in the first quadrant it reads x + y ≤ a",
              "why": "There |x| = x and |y| = y, so the modulus vanishes from the statement entirely. This is the whole trick: a modulus condition is a plain linear condition once you know which quadrant you are in."
            },
            {
              "eq": "that is a right triangle with legs a and a",
              "why": "The conditions x ≥ 0, y ≥ 0 and x + y ≤ a cut out the triangle with vertices (0, 0), (a, 0) and (0, a). Its area is ½·a·a, and no integration was needed: the boundary is straight."
            },
            {
              "eq": "A = 4 · (a²/2) = 2a²",
              "why": "The same argument on |x|/p + |y|/q ≤ 1 gives a first-quadrant triangle with legs p and q, hence 4·(pq/2) = 2pq. Both results are geometry, which is why they are also the fastest check on any integration you do here."
            }
          ]
        },
        {
          "t": "p",
          "html": "An inequality is <b>not a curve</b>: it is everything on one side of a curve. <i>y</i> ≤ <i>f</i>(<i>x</i>) is the region below the graph, <i>x</i>² + <i>y</i>² ≤ <i>r</i>² is the inside of the circle, and a system such as {<i>y</i> ≥ <i>x</i>², <i>y</i> ≤ <i>x</i> + 2} is the <b>overlap</b> of two such regions. Translate each condition into a side, shade the overlap, read off its genuine top and bottom, and you are back in topic 02. When you are unsure which side an inequality names, <b>substitute a point</b>, usually the origin, and see whether it satisfies the condition."
        },
        {
          "t": "defgrid",
          "title": "Decoding a condition into a side",
          "rows": [
            { "k": "y ≤ f(x)", "v": "below the curve. <i>y</i> ≥ <i>f</i>(<i>x</i>) is above it" },
            { "k": "x² + y² ≤ r²", "v": "inside the circle. With ≥, outside it" },
            { "k": "y² ≥ 4ax", "v": "<b>outside</b> the rightward parabola, that is <i>x</i> ≤ <i>y</i>²/4<i>a</i>. Reversing this is the classic slip" },
            { "k": "y ≥ |x|", "v": "the wedge above both lines <i>y</i> = <i>x</i> and <i>y</i> = −<i>x</i>, a right angle at the origin" },
            { "k": "0 ≤ y ≤ f(x)", "v": "between the curve and the <i>x</i>-axis, so the axis is a genuine stated boundary" },
            { "k": "A system { … }", "v": "the <b>intersection</b> of the regions, one condition at a time. Confirm with a test point" }
          ]
        },
        {
          "t": "p",
          "html": "Here is that table doing real work, on JEE Main 2016. The region is {(<i>x</i>, <i>y</i>) : <i>y</i>² ≥ 2<i>x</i>, <i>x</i>² + <i>y</i>² ≤ 4<i>x</i>, <i>x</i> ≥ 0, <i>y</i> ≥ 0}. Complete the square and the circle is (<i>x</i> − 2)² + <i>y</i>² = 4. The first condition is <i>x</i> ≤ <i>y</i>²/2, which is <b>outside</b> the rightward parabola, on the side away from its focus, so in the first quadrant the region sits <b>above</b> <i>y</i> = √(2<i>x</i>) and inside the circle. They meet where 2<i>x</i> = 4<i>x</i> − <i>x</i>², at the origin and at (2, 2). Then <i>A</i> = ∫₀²√(4<i>x</i> − <i>x</i>²)<i>dx</i> − ∫₀²√(2<i>x</i>)<i>dx</i> = π − 8/3, because the first integral is a quarter disc of radius 2 and the second is 8/3. Read that first condition as “inside the parabola” and you shade the complementary piece: same arithmetic, wrong region."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "DIAGRAM · ONE CONDITION AT A TIME",
          "chips": ["y ≥ x²", "y ≤ x + 2", "THE OVERLAP", "A MODULUS CEILING"],
          "mathChips": true,
          "captions": [
            "The first condition on its own. y ≥ x² is everything above the parabola, shaded here up to the top of the frame because the region itself is unbounded. Test the point (0, 1): 1 ≥ 0 is true, so the origin's side is the right one.",
            "The second condition on its own. y ≤ x + 2 is everything below the line, again unbounded on its own. Test (0, 0): 0 ≤ 2 is true, so the origin lies in this region too.",
            "The overlap is bounded, and it is a plain topic 02 lens. The boundaries meet where x² = x + 2, that is x = −1 and x = 2, and those roots are the limits. Line on top, parabola underneath, so the area is ∫ from −1 to 2 of (x + 2 − x²) dx = 9/2.",
            "Main Jan 8, 2020: x² ≤ y ≤ |3 − 2x|. The floor is the parabola and the ceiling is a modulus, whose corner sits at x = 3/2. On the left branch the ceiling is 3 − 2x and x² = 3 − 2x gives x = −3 and x = 1. The right branch 2x − 3 never meets the parabola, since x² − 2x + 3 has no real root, so the whole region lives on [−3, 1] and the area is 32/3."
          ],
          "frames": [
            {
              "x": [-2.8, 2.8],
              "y": [-1.2, 6.6],
              "curves": [{ "c": "poly", "coeffs": [0, 0, 1] }],
              "areas": [
                { "under": { "c": "line", "m": 0, "k": 6.4 }, "and": { "c": "poly", "coeffs": [0, 0, 1] }, "from": -2.53, "to": 2.53, "soft": true }
              ],
              "points": [{ "x": 0, "y": 1, "label": "test (0, 1)" }]
            },
            {
              "x": [-2.8, 2.8],
              "y": [-1.2, 6.6],
              "curves": [{ "c": "line", "m": 1, "k": 2 }],
              "areas": [
                { "under": { "c": "line", "m": 1, "k": 2 }, "and": { "c": "line", "m": 0, "k": -1.1 }, "from": -2.75, "to": 2.75, "soft": true }
              ],
              "points": [{ "x": 0, "y": 0, "label": "test (0, 0)" }]
            },
            {
              "x": [-2.8, 2.8],
              "y": [-1.2, 6.6],
              "curves": [
                { "c": "poly", "coeffs": [0, 0, 1] },
                { "c": "line", "m": 1, "k": 2 }
              ],
              "areas": [
                { "under": { "c": "line", "m": 1, "k": 2 }, "and": { "c": "poly", "coeffs": [0, 0, 1] }, "from": -1, "to": 2 }
              ],
              "points": [
                { "x": -1, "y": 1, "label": "(−1, 1)" },
                { "x": 2, "y": 4, "label": "(2, 4)" }
              ]
            },
            {
              "x": [-4.2, 3.2],
              "y": [-1.4, 11],
              "curves": [
                { "c": "poly", "coeffs": [0, 0, 1] },
                { "c": "line", "m": -2, "k": 3 },
                { "c": "line", "m": 2, "k": -3, "dash": true, "soft": true }
              ],
              "areas": [
                { "under": { "c": "line", "m": -2, "k": 3 }, "and": { "c": "poly", "coeffs": [0, 0, 1] }, "from": -3, "to": 1 }
              ],
              "points": [
                { "x": -3, "y": 9, "label": "(−3, 9)" },
                { "x": 1, "y": 1, "label": "(1, 1)" },
                { "x": 1.5, "y": 0, "label": "corner", "soft": true }
              ]
            }
          ]
        },
        {
          "t": "proc",
          "title": "Decode a region before you integrate it",
          "steps": [
            "<b>Corners.</b> Set the inside of every modulus to zero and mark each root on the <i>x</i>-axis. These are the only places a modulus boundary can bend, and every one of them is a potential split point.",
            "<b>Sides.</b> Turn each inequality into “above / below” or “inside / outside”, then confirm with one test point. Pick the origin unless it lies on a boundary.",
            "<b>Shade the overlap</b> and find where its boundaries cross. Those intersections are the limits, and any of them strictly inside the range is a place where the top or the bottom changes.",
            "<b>Read the genuine top and bottom</b> on each slab separately, and check them with a sample point in that slab. A composite ceiling means several integrals, one per slab, added at the end.",
            "<b>Look for symmetry, then verify it.</b> Modulus regions usually are symmetric, and “usually” is not a proof. If they are, integrate the smallest piece and multiply back; a diamond is four copies of one triangle, a wedge is two copies of one half."
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · A CEILING THAT SWITCHES AT x = s",
          "tag": "one integral per slab, added",
          "main": "A = ∫<sub>a</sub><sup>s</sup> [top<sub>1</sub> − bottom] dx + ∫<sub>s</sub><sup>b</sup> [top<sub>2</sub> − bottom] dx",
          "legend": [
            "find <i>s</i> by setting the two candidate ceilings equal to each other, then <b>sample</b> to see which one leads on which side",
            "the same shape handles a floor that switches, and a boundary that switches three times: one integral per slab",
            "a triangle bounded by three lines is the simplest case; split at the <i>x</i>-coordinate of its apex"
          ],
          "note": "This is the same instruction as ∫|f − g| dx, written out. The modulus is a promise to split, not permission to skip splitting."
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Find the area of the region bounded by <i>y</i> = |<i>x</i>|, the <i>x</i>-axis and the lines <i>x</i> = −2 and <i>x</i> = 3.",
          "steps": [
            "The corner of <i>y</i> = |<i>x</i>| is where the inside vanishes, at <i>x</i> = 0, and it lies inside [−2, 3]. Split there.",
            "On [−2, 0] the modulus opens as −<i>x</i>: ∫<sub>−2</sub><sup>0</sup>(−<i>x</i>)<i>dx</i> = [−<i>x</i>²/2]<sub>−2</sub><sup>0</sup> = 0 − (−2) = 2.",
            "On [0, 3] it opens as <i>x</i>: ∫₀³<i>x</i> <i>dx</i> = 9/2.",
            "<i>A</i> = 2 + 9/2 = 13/2. Both pieces are triangles, ½(2)(2) and ½(3)(3), which is the free geometric check."
          ],
          "ans": "13/2 square units"
        },
        {
          "t": "ex",
          "tag": "CUET · JEE MAIN SPEED TRAP",
          "q": "Find the area of the region |<i>x</i>| + |<i>y</i>| ≤ 2.",
          "steps": [
            "The trap: setting up one integral with the moduli still inside, or spotting that it is a square and calling the area “side squared”.",
            "The vertices are (2, 0), (0, 2), (−2, 0) and (0, −2). It is a square standing on a corner, and 2 is the <b>half-diagonal</b>, not the side.",
            "By the diamond result with <i>a</i> = 2: <i>A</i> = 2<i>a</i>² = 8.",
            "Check with the rhombus formula: both diagonals are 4, so <i>A</i> = ½(4)(4) = 8. Two routes, one answer, no integration at all."
          ],
          "ans": "8 square units. The side is 2√2, and squaring that does give 8. The trap is calling 2 the side when it is the half-diagonal"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN 2020 PATTERN",
          "q": "Find the area of the region {(<i>x</i>, <i>y</i>) : <i>x</i>² ≤ <i>y</i> ≤ |3 − 2<i>x</i>|}.",
          "steps": [
            "The modulus corner is at <i>x</i> = 3/2. Handle the two branches separately.",
            "Left branch, <i>x</i> ≤ 3/2, ceiling 3 − 2<i>x</i>: solve <i>x</i>² = 3 − 2<i>x</i>, that is <i>x</i>² + 2<i>x</i> − 3 = 0, so <i>x</i> = −3 and <i>x</i> = 1. Both are ≤ 3/2, so both count.",
            "Right branch, <i>x</i> ≥ 3/2, ceiling 2<i>x</i> − 3: <i>x</i>² = 2<i>x</i> − 3 gives <i>x</i>² − 2<i>x</i> + 3 = 0 with discriminant 4 − 12, which is negative. <b>No real root</b>, so the region does not extend past the corner.",
            "<i>A</i> = ∫<sub>−3</sub><sup>1</sup>(3 − 2<i>x</i> − <i>x</i>²)<i>dx</i> = [3<i>x</i> − <i>x</i>² − <i>x</i>³/3]<sub>−3</sub><sup>1</sup> = 5/3 + 9 = 32/3."
          ],
          "ans": "32/3 square units, all of it on [−3, 1]"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "Find the area of the region {(<i>x</i>, <i>y</i>) : <i>y</i> ≥ |<i>x</i>|, <i>x</i>² + <i>y</i>² ≤ 2}.",
          "steps": [
            "Decode: <i>y</i> ≥ |<i>x</i>| is the wedge above both lines <i>y</i> = ±<i>x</i>; the second condition is the inside of the circle of radius √2. The region is the slice of the disc sitting above the V.",
            "Intersect: on <i>y</i> = |<i>x</i>| the circle gives 2<i>x</i>² = 2, so <i>x</i> = ±1 and <i>y</i> = 1. The region is symmetric about the <i>y</i>-axis, so take 0 ≤ <i>x</i> ≤ 1 and double.",
            "There the top is the circle <i>y</i> = √(2 − <i>x</i>²) and the bottom is <i>y</i> = <i>x</i>: <i>A</i> = 2∫₀¹[√(2 − <i>x</i>²) − <i>x</i>]<i>dx</i> = 2[(1/2 + π/4) − 1/2].",
            "<i>A</i> = π/2. Free check: the V's arms are at ±45 degrees, so the wedge is a right angle at the centre and the region is a quarter of the disc, ¼·π(√2)² = π/2."
          ],
          "ans": "π/2 square units, and the sector check confirms it in one line"
        },
        {
          "t": "mcq",
          "q": "The area of the region |<i>x</i>| + |<i>y</i>| ≤ 4 is:",
          "correct": 1,
          "opts": [
            {
              "label": "16",
              "nudge": "This treats 4 as the side of the square, giving 4². But 4 is the half-diagonal: the vertices are 4 from the centre, so the side is 4√2."
            },
            { "label": "32", "nudge": null },
            {
              "label": "8",
              "nudge": "That is one of the four triangles, ½(4)(4). The diamond is four of them, one per quadrant."
            },
            {
              "label": "64",
              "nudge": "This squares the full diagonal, 8², and forgets the ½ that a tilted square costs. The rhombus formula is d₁d₂/2 = 64/2 = 32."
            }
          ],
          "solution": "Diamond area = 2a² with a = 4, so A = 32. Cross-check: both diagonals are 8, and d₁d₂/2 = 64/2 = 32."
        },
        {
          "t": "mcq",
          "q": "The area of the region {(<i>x</i>, <i>y</i>) : 0 ≤ <i>y</i> ≤ 4 − <i>x</i>²} is:",
          "correct": 0,
          "opts": [
            { "label": "32/3", "nudge": null },
            {
              "label": "16/3",
              "nudge": "That is the half from x = 0 to 2. The condition names no quadrant, so the left half is in the region too and the answer doubles."
            },
            {
              "label": "8/3",
              "nudge": "This integrates x² instead of 4 − x², a wrong-integrand slip. The ceiling of the region is the parabola, not the power alone."
            },
            {
              "label": "16",
              "nudge": "This treats the region as a rectangle of height 4 and width 4. The ceiling is curved, so a rectangle overestimates by exactly a third here."
            }
          ],
          "solution": "0 ≤ y means the x-axis is a boundary, so the limits are the roots of 4 − x² = 0, that is x = ±2. A = ∫ from −2 to 2 of (4 − x²) dx = 2(8 − 8/3) = 32/3."
        },
        {
          "t": "mcq",
          "q": "The area bounded by <i>y</i> = |<i>x</i>| and the <i>x</i>-axis between <i>x</i> = −1 and <i>x</i> = 1 is:",
          "correct": 0,
          "opts": [
            { "label": "1", "nudge": null },
            {
              "label": "1/2",
              "nudge": "That is the right-hand triangle only, ∫₀¹x dx. The modulus makes a matching triangle on the left, and it is a positive area too."
            },
            {
              "label": "2",
              "nudge": "This uses base times height, 2 × 1, and forgets the ½ that a triangle costs. The V is two triangles, not a rectangle."
            },
            {
              "label": "1/3",
              "nudge": "That is ∫ of x², not of |x|. A V has straight sides; a value of 1/3 is the signature of integrating a parabola."
            }
          ],
          "solution": "By symmetry about the y-axis, A = 2∫₀¹ x dx = 2(1/2) = 1. Or read it off as two triangles with legs 1 and 1."
        },
        {
          "t": "mcq",
          "q": "The area of the region {(<i>x</i>, <i>y</i>) : <i>y</i> ≥ |<i>x</i>|, <i>x</i>² + <i>y</i>² ≤ 8} is:",
          "correct": 0,
          "opts": [
            { "label": "2π", "nudge": null },
            {
              "label": "π",
              "nudge": "That is an eighth of the disc, as if the wedge subtended 45 degrees. y ≥ |x| is bounded by y = x and y = −x, which are 90 degrees apart."
            },
            {
              "label": "4π",
              "nudge": "That is half the disc: the y ≥ |x| restriction has been dropped and the whole upper half kept. The wedge is half of that half."
            },
            {
              "label": "π/2",
              "nudge": "The right method with the wrong radius, √2 instead of √8. Here r² = 8, so the quarter disc is 2π."
            }
          ],
          "solution": "y ≥ |x| cuts a 90 degree sector out of the disc of radius √8, so A = ¼·π(√8)² = ¼·8π = 2π. The integration route gives the same number and takes ten times as long."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Find the area bounded by <i>y</i> = |<i>x</i> − 2|, the <i>x</i>-axis and the lines <i>x</i> = 0, <i>x</i> = 4.",
              "a": "The corner is at <i>x</i> = 2. Two triangles, each with base 2 and height 2: <i>A</i> = 2 + 2 = <b>4</b> square units."
            },
            {
              "q": "[CUET · JEE Main] Find the area of the region |<i>x</i>| + |<i>y</i>| ≤ 3.",
              "a": "Diamond with <i>a</i> = 3, so <i>A</i> = 2<i>a</i>² = <b>18</b> square units. Both diagonals are 6 and 6·6/2 = 18 agrees."
            },
            {
              "q": "[JEE Main] Find the area of the region enclosed by <i>y</i> = 2 − <i>x</i>² and <i>y</i> = |<i>x</i>|.",
              "a": "Right of 0: 2 − <i>x</i>² = <i>x</i> gives <i>x</i> = 1. By symmetry the region runs from −1 to 1. <i>A</i> = 2∫₀¹(2 − <i>x</i>² − <i>x</i>)<i>dx</i> = 2(2 − 1/3 − 1/2) = <b>7/3</b>."
            },
            {
              "q": "[JEE Main 2020] Find the area of {(<i>x</i>, <i>y</i>) : |<i>x</i>| + |<i>y</i>| ≤ 1, 2<i>y</i>² ≤ |<i>x</i>|}.",
              "a": "Four-fold symmetry. In the first quadrant <i>x</i> ≥ 2<i>y</i>² and <i>x</i> ≤ 1 − <i>y</i>, meeting where 2<i>y</i>² = 1 − <i>y</i>, so <i>y</i> = 1/2. <i>A</i> = 4∫(1 − <i>y</i> − 2<i>y</i>²)<i>dy</i> over [0, 1/2] = 4(7/24) = <b>7/6</b>."
            },
            {
              "q": "[JEE Advanced 1997] Find the area under <i>y</i> = max{<i>x</i>², (1 − <i>x</i>)², 2<i>x</i>(1 − <i>x</i>)} on [0, 1].",
              "a": "Switches where (1 − <i>x</i>)² = 2<i>x</i>(1 − <i>x</i>), at <i>x</i> = 1/3, and where <i>x</i>² = 2<i>x</i>(1 − <i>x</i>), at <i>x</i> = 2/3. Three slabs: 19/81 + 13/81 + 19/81 = <b>17/27</b>."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "Missing a corner. Every modulus contributes one, at each root of the inside expression, and a nested one such as ||<i>x</i>| − 1| contributes <b>two</b>. A missed corner is a wrong limit, and a wrong limit is the whole answer.",
            "Shading the wrong side. <i>y</i>² ≥ 4<i>ax</i> means <i>x</i> ≤ <i>y</i>²/4<i>a</i>, which is <b>outside</b> the rightward parabola, not inside it. Translate the inequality, then <b>test one point</b> before you trust the translation.",
            "Refusing to split a composite region. When the ceiling changes curve partway, one integral cannot cover both slabs: it uses the wrong boundary on one of them and quietly returns a wrong number rather than an error.",
            "Assuming a symmetry that is not there, or using one and forgetting to multiply back. Symmetry is a gift only after you have checked that <i>x</i> → −<i>x</i> or <i>y</i> → −<i>y</i> really does leave every condition unchanged.",
            "Ignoring a stated restriction. “First quadrant”, “<i>x</i> ≥ 0, <i>y</i> ≥ 0” and “the smaller region” each halve or reshape the answer, and each is written into the question precisely because it changes it."
          ]
        },
        {
          "t": "protip",
          "html": "diamonds, wedges, sectors and triangles all have elementary-geometry areas, so compute the answer <b>twice</b>: once by integration and once by the shape formula. if they disagree you mis-decoded the boundary, and you know it in five seconds rather than after the paper. the wedge <i>y</i> ≥ |<i>x</i>| inside a circle is a quarter disc, always, whatever the radius."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "|f(x)| = f where f ≥ 0, −f where f < 0", "note": "split at every root of the inside" },
            { "f": "|x|/p + |y|/q ≤ 1 ⇒ A = 2pq · |x| + |y| ≤ a ⇒ 2a²", "note": "a is the half-diagonal, never the side" },
            { "f": "y ≥ |x| inside a disc ⇒ a quarter of it", "note": "the arms are 90 degrees apart" },
            { "f": "y² ≥ 4ax means x ≤ y²/4a", "note": "outside the parabola; test a point and be sure" },
            { "f": "ceiling switches at s ⇒ one integral per slab", "note": "find s by setting the two candidates equal" }
          ],
          "aids": [
            "“corners, sides, switch points, then integrate”",
            "“decode the boundary; the calculus is the easy part”"
          ]
        }
      ]
    },
    {
      "n": "04",
      "title": "Segments of Conics",
      "chip": "04 SEGMENTS",
      "kalam": "cut the conic, keep the smaller piece, check with geometry",
      "blocks": [
        {
          "t": "p",
          "html": "Topic 02 found the area between two whole curves. The exam prefers something narrower: it takes one conic, cuts it with a <b>line</b>, and asks for the smaller piece. The line is usually the <b>latus rectum</b> of a parabola, a vertical chord of a circle, or a line across an ellipse. The machinery is entirely topic 02's. What is new is three habits: writing the conic's two branches explicitly, <b>rejecting the roots that squaring invented</b>, and checking the answer against elementary geometry, which for these shapes is always available."
        },
        {
          "t": "p",
          "html": "Class 11 already gave you the shapes. <i>y</i>² = 4<i>ax</i> is the parabola with vertex at the origin, focus (<i>a</i>, 0) and latus rectum of length 4<i>a</i>; <i>x</i>²/<i>a</i>² + <i>y</i>²/<i>b</i>² = 1 is the ellipse with semi-axes <i>a</i> and <i>b</i> and an auxiliary circle of radius <i>a</i>; <i>x</i>² + <i>y</i>² = <i>a</i>² is the circle. None of that is re-derived here and all of it is assumed. The only new question is <b>how much area</b> a line cuts off, and the answer always reduces to the workhorse antiderivative or to a power rule."
        },
        {
          "t": "think",
          "html": "a chord across a circle is a slice off a watermelon, and the piece you keep is the cap. an examiner who says “smaller region” or “cut off by” is telling you which side of the knife to keep. sample one point inside the piece you think is meant, check it satisfies everything the question said, and only then start integrating. half the lost marks in this topic are for computing the correct area of the wrong piece."
        },
        {
          "t": "def",
          "term": "Latus rectum and double ordinate",
          "html": "For <i>y</i>² = 4<i>ax</i>, the <b>latus rectum</b> is the chord through the focus perpendicular to the axis: the line <i>x</i> = <i>a</i>, meeting the curve at (<i>a</i>, ±2<i>a</i>), of length 4<i>a</i>. Any other vertical chord <i>x</i> = <i>h</i> is called a <b>double ordinate</b>, meeting the curve at (<i>h</i>, ±2√(<i>ah</i>)). Both cut off a <b>parabolic segment</b> between the chord and the arc, and both segments span the two branches, so the region is symmetric about the axis of the parabola."
        },
        {
          "t": "proc",
          "title": "Cut a conic with a line",
          "steps": [
            "<b>Write the branches.</b> <i>y</i> = ±2√(<i>ax</i>) for the parabola, <i>y</i> = ±√(<i>a</i>² − <i>x</i>²) for the circle, <i>y</i> = ±(<i>b</i>/<i>a</i>)√(<i>a</i>² − <i>x</i>²) for the ellipse. Two branches, always, and the exam is counting on you to forget one.",
            "<b>Intersect, then audit the roots.</b> Substitute and solve. If you squared anything on the way, test every root in the <b>original</b> equations: squaring manufactures solutions, and a parabola that lives on <i>x</i> ≥ 0 will not accept a negative root.",
            "<b>Decide which piece is meant.</b> “Smaller region”, “cut off by”, “the part to the right of” all name a side. Sample one interior point and confirm it satisfies every stated condition.",
            "<b>Exploit the symmetry the chord respects.</b> A vertical chord of a circle or a parabola leaves a region symmetric about the <i>x</i>-axis, so integrate the top half and double. A horizontal chord leaves one symmetric about the <i>y</i>-axis.",
            "<b>Check with geometry.</b> A circular segment has a sector formula, a parabolic segment is exactly 4/3 of its inscribed triangle, and an ellipse is a squashed circle. If integration and geometry disagree, the picture is wrong, not the arithmetic."
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE CIRCULAR SEGMENT",
          "tag": "x² + y² = r², cut by the chord x = c, 0 ≤ c ≤ r",
          "main": "S = r² cos<sup>−1</sup>(c/r) − c√(r² − c²)",
          "legend": [
            "<i>S</i> is the smaller piece, the cap lying beyond the chord",
            "at <i>c</i> = 0 it gives <i>r</i>²(π/2), the half disc; at <i>c</i> = <i>r</i> it gives 0. Both are the right degeneration",
            "the second term is twice the area of the triangle joining the centre to the two ends of the chord"
          ],
          "note": "Worth memorising, because it turns a two-limit integration into one substitution and gives you an independent check on the version you did integrate."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE SEGMENT FORMULA, TAP A LINE",
          "steps": [
            {
              "eq": "S = 2 ∫ √(r² − x²) dx, from x = c to x = r",
              "why": "The chord x = c is vertical, so the cap is symmetric about the x-axis: integrate the upper half, from the chord at x = c out to the rim at x = r, and double. The upper half of the circle is y = √(r² − x²), non-negative throughout, so no splitting is needed."
            },
            {
              "eq": "antiderivative (x/2)√(r² − x²) + (r²/2) sin⁻¹(x/r)",
              "why": "The workhorse from topic 01, with a = r. This is the only integration in the derivation, and it is the same one the circle's own area used."
            },
            {
              "eq": "at x = r: (r²/2)(π/2). at x = c: (c/2)√(r² − c²) + (r²/2) sin⁻¹(c/r)",
              "why": "The first term dies at the rim because √(r² − r²) = 0. Subtract the lower limit from the upper and double, and the halves cancel: S = r²(π/2 − sin⁻¹(c/r)) − c√(r² − c²)."
            },
            {
              "eq": "π/2 − sin⁻¹(c/r) = cos⁻¹(c/r), so S = r² cos⁻¹(c/r) − c√(r² − c²)",
              "why": "The complementary-angle identity from the inverse trigonometry chapter, which is why the printed form carries a cosine inverse while the integration produced a sine inverse. They are the same number; if your answer has sin⁻¹ where a key has cos⁻¹, check this identity before assuming you are wrong."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "DIAGRAM · A LINE CUTS A CIRCLE, AND AN ELLIPSE",
          "chips": ["THE CAP", "THE TWO LENGTHS", "THE ELLIPSE CAP", "SQUASH THE CIRCLE"],
          "captions": [
            "The circle x² + y² = 25 cut by the chord x = 3. The shaded cap is the smaller of the two pieces, and it is symmetric about the x-axis, so only the top half is ever integrated. Its area is 25 cos⁻¹(3/5) − 12 ≈ 11.18, against 25π ≈ 78.5 for the whole disc.",
            "The same cap with the two lengths in the formula drawn. The radius to the chord's upper end is r = 5, the distance from the centre to the chord is c = 3, and the half-chord is √(r² − c²) = 4. The formula's second term, c√(r² − c²) = 12, is twice the area of that right triangle, and the first term is the sector it is being cut out of.",
            "Now the ellipse x²/16 + y²/9 = 1 cut by x = 2, one half of the semi-major axis. The cap here is 4π − 3√3 ≈ 7.37, and the quarter ellipse is 3π ≈ 9.42, so a cap a little smaller than a quarter is geometrically believable.",
            "Why the ellipse never needs its own integration. The dashed auxiliary circle has radius a = 4, and the ellipse is that circle with every ordinate multiplied by b/a = 3/4. The chord x = 2 is untouched by a vertical squash, so the ellipse cap is exactly 3/4 of the circle cap: (3/4)(16π/3 − 4√3) = 4π − 3√3, with no new antiderivative."
          ],
          "frames": [
            {
              "x": [-7.5, 7.5],
              "y": [-5.4, 5.4],
              "curves": [
                { "c": "circle", "r": 5 },
                { "c": "vline", "x": 3, "dash": true }
              ],
              "polygons": [
                {
                  "points": [[3, -4], [3.58, -3.491], [4.075, -2.898], [4.472, -2.236], [4.763, -1.521], [4.94, -0.77], [5, 0], [4.94, 0.77], [4.763, 1.521], [4.472, 2.236], [4.075, 2.898], [3.58, 3.491], [3, 4]],
                  "corners": false
                }
              ],
              "points": [
                { "x": 3, "y": 4, "label": "(3, 4)" },
                { "x": 3, "y": -4 }
              ]
            },
            {
              "x": [-7.5, 7.5],
              "y": [-5.4, 5.4],
              "curves": [
                { "c": "circle", "r": 5 },
                { "c": "vline", "x": 3, "dash": true }
              ],
              "polygons": [
                {
                  "points": [[3, -4], [3.58, -3.491], [4.075, -2.898], [4.472, -2.236], [4.763, -1.521], [4.94, -0.77], [5, 0], [4.94, 0.77], [4.763, 1.521], [4.472, 2.236], [4.075, 2.898], [3.58, 3.491], [3, 4]],
                  "corners": false
                }
              ],
              "segments": [
                { "from": [0, 0], "to": [3, 4], "label": "r = 5" },
                { "from": [0, 0], "to": [3, 0], "dash": true, "label": "c = 3" },
                { "from": [3, 0], "to": [3, 4], "dash": true, "soft": true }
              ],
              "points": [{ "x": 0, "y": 0, "label": "C" }],
              "labels": [{ "x": 4.4, "y": 2.1, "text": "4", "soft": true }]
            },
            {
              "x": [-6, 6],
              "y": [-4.3, 4.3],
              "curves": [
                { "c": "ellipse", "a": 4, "b": 3 },
                { "c": "vline", "x": 2, "dash": true }
              ],
              "polygons": [
                {
                  "points": [[2, -2.598], [2.571, -2.298], [3.064, -1.928], [3.464, -1.5], [3.759, -1.026], [3.939, -0.521], [4, 0], [3.939, 0.521], [3.759, 1.026], [3.464, 1.5], [3.064, 1.928], [2.571, 2.298], [2, 2.598]],
                  "corners": false
                }
              ],
              "points": [
                { "x": 2, "y": 2.598, "label": "(2, 3√3/2)" },
                { "x": 2, "y": -2.598 }
              ]
            },
            {
              "x": [-6, 6],
              "y": [-4.3, 4.3],
              "curves": [
                { "c": "ellipse", "a": 4, "b": 3 },
                { "c": "circle", "r": 4, "dash": true, "soft": true },
                { "c": "vline", "x": 2, "dash": true, "soft": true }
              ],
              "polygons": [
                {
                  "points": [[2, -3.464], [2.571, -3.064], [3.064, -2.571], [3.464, -2], [3.759, -1.368], [3.939, -0.695], [4, 0], [3.939, 0.695], [3.759, 1.368], [3.464, 2], [3.064, 2.571], [2.571, 3.064], [2, 3.464]],
                  "corners": false,
                  "soft": true
                },
                {
                  "points": [[2, -2.598], [2.571, -2.298], [3.064, -1.928], [3.464, -1.5], [3.759, -1.026], [3.939, -0.521], [4, 0], [3.939, 0.521], [3.759, 1.026], [3.464, 1.5], [3.064, 1.928], [2.571, 2.298], [2, 2.598]],
                  "corners": false
                }
              ],
              "labels": [{ "x": 4.9, "y": 3.2, "text": "× b/a", "soft": true }]
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE ELLIPSE SEGMENT, BY SCALING",
          "tag": "x²/a² + y²/b² = 1, cut by x = h",
          "main": "S = ab [ cos<sup>−1</sup>(h/a) − (h/a²)√(a² − h²) ]",
          "legend": [
            "the map <i>X</i> = <i>x</i>/<i>a</i>, <i>Y</i> = <i>y</i>/<i>b</i> sends the ellipse to the <b>unit circle</b> and the chord to <i>X</i> = <i>h</i>/<i>a</i>",
            "every little rectangle <i>dx dy</i> becomes <i>dX dY</i> = <i>dx dy</i>/(<i>ab</i>), so <b>every area is multiplied by <i>ab</i></b>",
            "so the ellipse segment is <i>ab</i> times the unit-circle segment, and no new integration is done"
          ],
          "note": "For a horizontal cut y = k, swap the roles: the vertical semi-axis b now carries the cut, and the formula reads ab[cos⁻¹(k/b) − (k/b²)√(b² − k²)]."
        },
        {
          "t": "p",
          "html": "That scaling is the auxiliary circle from Class 11 doing new work. There it explained the eccentric angle; here it says something stronger, that <b>the ellipse is a circle with one axis stretched</b>, and a uniform stretch multiplies every area by the same factor. The area of the ellipse itself is the same statement with the whole disc: π(1)² becomes <i>ab</i>·π = π<i>ab</i>. Once you have seen it, every ellipse area question is a circle question you already solved."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · ARCHIMEDES, THE PARABOLIC SEGMENT",
          "tag": "y² = 4ax, cut by the double ordinate x = h",
          "main": "S = (4/3) × T · S = (8/3)√(ah³) · T = 2√(ah³)",
          "legend": [
            "<i>T</i> is the triangle whose base is the chord, from (<i>h</i>, 2√(<i>ah</i>)) to (<i>h</i>, −2√(<i>ah</i>)), and whose apex is the <b>vertex</b> of the parabola",
            "the apex is the vertex because the tangent parallel to a vertical chord is the vertical tangent <i>x</i> = 0",
            "the ratio 4/3 survives any affine change of coordinates, so it holds for <b>every</b> chord of a parabola, not only vertical ones"
          ],
          "note": "For a slanted or horizontal chord, the apex is the point where the tangent is parallel to the chord: set the derivative equal to the chord's slope."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · SEGMENT IS 4/3 OF TRIANGLE, TAP A LINE",
          "steps": [
            {
              "eq": "the chord x = h meets y² = 4ax at (h, ±2√(ah))",
              "why": "Put x = h into the equation: y² = 4ah, so y = ±2√(ah). Two points, one on each branch, and the chord between them has length 4√(ah). The segment is everything between that chord and the arc."
            },
            {
              "eq": "S = ∫₀ʰ [ 2√(ax) − (−2√(ax)) ] dx = 4√a ∫₀ʰ √x dx",
              "why": "Vertical strips again, and the strip runs from the lower branch to the upper branch, so its height is the full 4√(ax), not half of it. This is exactly where the standard error lives: taking the height as 2√(ax) computes the half above the axis."
            },
            {
              "eq": "S = 4√a · (2/3) h√h = (8/3)√(ah³)",
              "why": "Power rule on √x. Equivalently, since the region is symmetric about the x-axis, you may integrate the upper half and double, and 2 × (4/3)√(ah³) is the same number. Both routes are correct; only stopping at the half is not."
            },
            {
              "eq": "T = ½ · 4√(ah) · h = 2√(ah³), so S = (4/3) T",
              "why": "The triangle has the chord as base, length 4√(ah), and height h from the chord back to the vertex. Divide: S/T = (8/3)/2 = 4/3. That is Archimedes' quadrature of the parabola, and it is a two-line check on any answer in this family."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "DIAGRAM · A CHORD CUTS A PARABOLA",
          "chips": ["THE LATUS RECTUM", "THE TRIANGLE INSIDE IT", "A HORIZONTAL CHORD", "THE HALF-ANSWER"],
          "captions": [
            "The parabola y² = 4x and its latus rectum, the dashed line x = 1, meeting the curve at (1, 2) and (1, −2). The shaded segment spans both branches: a strip at x runs from the lower branch up to the upper one, a full height of 4√x, and the area is 8/3.",
            "Archimedes' triangle drawn inside the same segment, with the chord as its base and the vertex of the parabola as its apex. Base 4, height 1, so the triangle is 2, and the segment is exactly 4/3 of that: 8/3. Every parabolic segment on the syllabus can be checked this way in ten seconds.",
            "A horizontal chord on a downward parabola: y = 4x − x² cut by y = 3, meeting it at (1, 3) and (3, 3). Here the apex is where the tangent is parallel to the chord, that is where 4 − 2x = 0, at (2, 4). Triangle base 2, height 1, area 1, and the segment is 4/3 of it.",
            "The half-answer, shaded. This is the region between the upper branch and the x-axis alone, and its area is 4/3, exactly half of the segment. It is the answer you get by integrating one branch and forgetting the other. Doubling it is not a trap, it is the fix: the region is symmetric about the x-axis, and 2 × 4/3 = 8/3."
          ],
          "frames": [
            {
              "x": [-1.5, 5.5],
              "y": [-2.5, 2.5],
              "curves": [
                { "c": "parabola", "a": 1, "horizontal": true },
                { "c": "vline", "x": 1, "dash": true }
              ],
              "polygons": [
                {
                  "points": [[1, -2], [0.766, -1.75], [0.562, -1.5], [0.391, -1.25], [0.25, -1], [0.141, -0.75], [0.062, -0.5], [0.016, -0.25], [0, 0], [0.016, 0.25], [0.062, 0.5], [0.141, 0.75], [0.25, 1], [0.391, 1.25], [0.562, 1.5], [0.766, 1.75], [1, 2]],
                  "corners": false
                }
              ],
              "points": [
                { "x": 1, "y": 2, "label": "(1, 2)" },
                { "x": 1, "y": -2, "label": "(1, −2)" }
              ]
            },
            {
              "x": [-1.5, 5.5],
              "y": [-2.5, 2.5],
              "curves": [
                { "c": "parabola", "a": 1, "horizontal": true },
                { "c": "vline", "x": 1, "dash": true }
              ],
              "polygons": [
                {
                  "points": [[1, -2], [0.766, -1.75], [0.562, -1.5], [0.391, -1.25], [0.25, -1], [0.141, -0.75], [0.062, -0.5], [0.016, -0.25], [0, 0], [0.016, 0.25], [0.062, 0.5], [0.141, 0.75], [0.25, 1], [0.391, 1.25], [0.562, 1.5], [0.766, 1.75], [1, 2]],
                  "corners": false
                },
                { "points": [[0, 0], [1, 2], [1, -2]], "soft": true }
              ],
              "labels": [{ "x": 2.7, "y": 1.4, "text": "S = (4/3) T" }]
            },
            {
              "x": [-0.6, 4.6],
              "y": [-0.8, 5],
              "curves": [
                { "c": "poly", "coeffs": [0, 4, -1] },
                { "c": "line", "m": 0, "k": 3 }
              ],
              "areas": [
                { "under": { "c": "poly", "coeffs": [0, 4, -1] }, "and": { "c": "line", "m": 0, "k": 3 }, "from": 1, "to": 3 }
              ],
              "polygons": [{ "points": [[1, 3], [3, 3], [2, 4]], "soft": true }],
              "points": [
                { "x": 1, "y": 3, "label": "(1, 3)" },
                { "x": 3, "y": 3, "label": "(3, 3)" },
                { "x": 2, "y": 4, "label": "apex" }
              ]
            },
            {
              "x": [-1.5, 5.5],
              "y": [-2.5, 2.5],
              "curves": [
                { "c": "parabola", "a": 1, "horizontal": true },
                { "c": "vline", "x": 1, "dash": true }
              ],
              "polygons": [
                {
                  "points": [[0, 0], [0.016, 0.25], [0.062, 0.5], [0.141, 0.75], [0.25, 1], [0.391, 1.25], [0.562, 1.5], [0.766, 1.75], [1, 2], [1, 0]],
                  "corners": false
                }
              ],
              "points": [{ "x": 1, "y": 2, "label": "(1, 2)" }],
              "labels": [{ "x": 2.9, "y": 1, "text": "4/3, half of it" }]
            }
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD · JEE MAIN",
          "q": "Find the area bounded by the parabola <i>y</i>² = 4<i>x</i> and its latus rectum.",
          "steps": [
            "Here 4<i>a</i> = 4 so <i>a</i> = 1, and the latus rectum is <i>x</i> = 1, meeting the curve where <i>y</i>² = 4, at (1, 2) and (1, −2).",
            "The <i>x</i>-axis is <b>not</b> a boundary, so the region spans both branches. The strip at <i>x</i> runs from −2√<i>x</i> up to 2√<i>x</i>, a height of 4√<i>x</i>.",
            "<i>A</i> = ∫₀¹4√<i>x</i> <i>dx</i> = 4(2/3) = 8/3. Because the region is symmetric about the <i>x</i>-axis you may instead integrate the upper half, ∫₀¹2√<i>x</i> <i>dx</i> = 4/3, and <b>double</b> it: same 8/3.",
            "Archimedes check: the triangle on the latus rectum has base 4 and height 1, so <i>T</i> = 2, and (4/3)(2) = 8/3. The trap is stopping at 4/3, which is one branch only."
          ],
          "ans": "8/3 square units. 4/3 is the half-answer, and doubling it is the fix, not the error"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "Find the area bounded by the parabola <i>y</i> = 4<i>x</i> − <i>x</i>² and the chord joining (1, 3) and (3, 3).",
          "steps": [
            "The chord is the horizontal line <i>y</i> = 3. Intersect: 4<i>x</i> − <i>x</i>² = 3 gives <i>x</i>² − 4<i>x</i> + 3 = 0, so <i>x</i> = 1 and 3, matching the given points with no extraneous root to reject.",
            "Sample at <i>x</i> = 2: the parabola gives 4 and the chord gives 3, so the <b>parabola is on top</b>.",
            "<i>A</i> = ∫₁³(4<i>x</i> − <i>x</i>² − 3)<i>dx</i> = [2<i>x</i>² − <i>x</i>³/3 − 3<i>x</i>]₁³ = 0 − (−4/3) = 4/3.",
            "Archimedes check: the tangent is parallel to the chord where 4 − 2<i>x</i> = 0, at the apex (2, 4). The triangle has base 2 and height 1, so <i>T</i> = 1, and (4/3)(1) = 4/3."
          ],
          "ans": "4/3 square units, confirmed twice"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "Find the area of the smaller segment of the circle <i>x</i>² + <i>y</i>² = 25 cut off by the line <i>x</i> = 3.",
          "steps": [
            "Radius <i>r</i> = 5 and the chord sits at <i>c</i> = 3, so the chord meets the circle at (3, ±4) and the smaller piece is the cap to the right.",
            "By the segment formula: <i>S</i> = <i>r</i>²cos<sup>−1</sup>(<i>c</i>/<i>r</i>) − <i>c</i>√(<i>r</i>² − <i>c</i>²) = 25 cos<sup>−1</sup>(3/5) − 3(4).",
            "<i>S</i> = 25 cos<sup>−1</sup>(3/5) − 12 ≈ 25(0.9273) − 12 ≈ 11.18 square units.",
            "Plausibility: the whole disc is 25π ≈ 78.5, so a cap taking about a seventh of it, cut at 3/5 of the radius, is sensible. The integration route, 2∫₃⁵√(25 − <i>x</i>²)<i>dx</i>, gives the same number."
          ],
          "ans": "25 cos<sup>−1</sup>(3/5) − 12 ≈ 11.18 square units"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "Find the area of the smaller region into which the line <i>x</i> = 2 cuts the ellipse <i>x</i>²/16 + <i>y</i>²/9 = 1.",
          "steps": [
            "Here <i>a</i> = 4, <i>b</i> = 3 and the cut is at <i>h</i> = 2. The upper half of the ellipse is <i>y</i> = (3/4)√(16 − <i>x</i>²), and the cap is symmetric about the <i>x</i>-axis.",
            "<i>A</i> = 2∫₂⁴(3/4)√(16 − <i>x</i>²)<i>dx</i> = (3/2)[(<i>x</i>/2)√(16 − <i>x</i>²) + 8 sin<sup>−1</sup>(<i>x</i>/4)]₂⁴.",
            "At <i>x</i> = 4: 4π. At <i>x</i> = 2: 2√3 + 4π/3. So <i>A</i> = (3/2)(8π/3 − 2√3) = 4π − 3√3 ≈ 7.37.",
            "Second route, no integration: the auxiliary circle of radius 4 cut at <i>x</i> = 2 gives 16π/3 − 4√3, and the ellipse is that circle squashed by <i>b</i>/<i>a</i> = 3/4. Three quarters of 16π/3 − 4√3 is 4π − 3√3."
          ],
          "ans": "4π − 3√3 ≈ 7.37 square units, by integration and by scaling"
        },
        {
          "t": "mcq",
          "q": "The area bounded by the parabola <i>y</i>² = 8<i>x</i> and its latus rectum is:",
          "correct": 2,
          "opts": [
            {
              "label": "8",
              "nudge": "That is the triangle T, not the segment. The segment is 4/3 of the triangle, and 4/3 of 8 is 32/3."
            },
            {
              "label": "16/3",
              "nudge": "The half-answer: one branch only, the region between the upper arc and the x-axis. The latus rectum region spans both branches, so double it."
            },
            { "label": "32/3", "nudge": null },
            {
              "label": "64/3",
              "nudge": "This is the segment cut by x = 4 on y² = 4x, a different curve and a different chord. Here 4a = 8 gives a = 2, so the latus rectum is x = 2."
            }
          ],
          "solution": "4a = 8 gives a = 2, so the latus rectum is x = 2 and it meets the curve at (2, ±4). Triangle: base 8, height 2, T = 8. Segment = (4/3)(8) = 32/3. Or directly, ∫₀² 4√(2x) dx = 32/3."
        },
        {
          "t": "mcq",
          "q": "A double ordinate cuts a parabola, and the triangle joining the chord's ends to the vertex has area <i>T</i>. The segment between the chord and the arc has area:",
          "correct": 1,
          "opts": [
            {
              "label": "T/2",
              "nudge": "Backwards, and it fails the simplest test: the segment strictly contains the triangle, so its area must be larger than T, never smaller."
            },
            { "label": "4T/3", "nudge": null },
            {
              "label": "2T",
              "nudge": "Too generous. The parabola bulges outside the triangle, but only by a third of it, not by another whole triangle."
            },
            {
              "label": "3T/2",
              "nudge": "The right shape of answer with the wrong fraction. Archimedes' constant is 4/3, and it comes out of (8/3)√(ah³) divided by 2√(ah³)."
            }
          ],
          "solution": "S = (8/3)√(ah³) and T = 2√(ah³), so S/T = 4/3 for every a and every h. Because the ratio is affine-invariant it holds for slanted chords too, with the apex taken where the tangent is parallel to the chord."
        },
        {
          "t": "mcq",
          "q": "The area of the smaller region bounded by <i>x</i>² + <i>y</i>² = 9 and the line <i>x</i> = 3/2 is:",
          "correct": 0,
          "opts": [
            { "label": "3π − 9√3/4", "nudge": null },
            {
              "label": "3π + 9√3/4",
              "nudge": "A sign slip in the segment formula. The triangle term is <b>subtracted</b> from the sector, because the cap is what remains after the triangle is removed."
            },
            {
              "label": "9π/2 − 9√3/4",
              "nudge": "This uses the half disc, r²π/2, in place of the sector. The sector for c = r/2 is r²cos⁻¹(1/2) = 3π, not 9π/2."
            },
            {
              "label": "6π − 9√3/2",
              "nudge": "Exactly twice the answer: the doubling for symmetry has been applied a second time, after the formula already accounts for both halves."
            }
          ],
          "solution": "r = 3 and c = 3/2, so S = 9 cos⁻¹(1/2) − (3/2)√(9 − 9/4) = 9(π/3) − (3/2)(3√3/2) = 3π − 9√3/4 ≈ 5.53."
        },
        {
          "t": "mcq",
          "q": "The area between <i>y</i>² = 4<i>x</i> and the double ordinate <i>x</i> = 4 is:",
          "correct": 3,
          "opts": [
            {
              "label": "32/3",
              "nudge": "One branch only, the region above the x-axis. The double ordinate cuts a segment spanning both branches, so double it."
            },
            {
              "label": "16",
              "nudge": "That is the triangle: base 2·2√(1·4) = 8, height 4, so T = 16. The segment is 4/3 of it."
            },
            {
              "label": "128/3",
              "nudge": "Double the correct answer. It comes from doubling ∫₀⁴4√x dx, which already spans both branches."
            },
            { "label": "64/3", "nudge": null }
          ],
          "solution": "a = 1 and h = 4, so the chord meets the curve at (4, ±4) and S = (8/3)√(1·64) = 64/3. Archimedes check: T = ½(8)(4) = 16 and (4/3)(16) = 64/3."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "Find the area bounded by <i>y</i>² = 8<i>x</i> and its latus rectum.",
              "a": "<i>a</i> = 2 and <i>h</i> = 2. Triangle: base 8, height 2, <i>T</i> = 8. Segment = (4/3)(8) = <b>32/3</b> square units."
            },
            {
              "q": "Find the area bounded by <i>y</i> = 6<i>x</i> − <i>x</i>² and the chord joining (1, 5) and (5, 5).",
              "a": "Chord <i>y</i> = 5, meeting the parabola at <i>x</i> = 1 and 5. ∫₁⁵(6<i>x</i> − <i>x</i>² − 5)<i>dx</i> = <b>32/3</b>. Check: apex (3, 9), triangle base 4 and height 4, <i>T</i> = 8, and (4/3)(8) = 32/3."
            },
            {
              "q": "Find the area of the smaller segment of <i>x</i>² + <i>y</i>² = 25 cut off by <i>x</i> = 3.",
              "a": "<i>r</i> = 5, <i>c</i> = 3: <i>S</i> = 25cos<sup>−1</sup>(3/5) − 3(4) = <b>25 cos<sup>−1</sup>(3/5) − 12</b> ≈ 11.18."
            },
            {
              "q": "Find the area between <i>y</i>² = 4<i>x</i> and the double ordinate <i>x</i> = 4.",
              "a": "<i>a</i> = 1, <i>h</i> = 4. Triangle: base 8, height 4, <i>T</i> = 16, so the segment is (4/3)(16) = <b>64/3</b> square units."
            },
            {
              "q": "Find the area of the smaller region into which <i>y</i> = 1 cuts the ellipse <i>x</i>²/4 + <i>y</i>²/9 = 1.",
              "a": "A horizontal cut, so the vertical semi-axis <i>b</i> = 3 carries it: <i>S</i> = 6[cos<sup>−1</sup>(1/3) − (1/9)√8] = <b>6 cos<sup>−1</sup>(1/3) − 4√2/3</b> ≈ 5.50."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "Forgetting the lower branch. A double ordinate or latus rectum cuts a segment across <b>both</b> branches, so the strip height is 4√(<i>ax</i>), not 2√(<i>ax</i>). Integrating one branch gives exactly half, and half is always among the options.",
            "Keeping a root that squaring invented. <i>x</i>² + 4<i>x</i> − 5 = 0 offers <i>x</i> = −5 to a parabola that only exists for <i>x</i> ≥ 0. <b>Substitute every root back into the original equations</b> before it becomes a limit.",
            "Reading a tangency as a crossing. <i>x</i>² = <i>y</i> and <i>y</i>² = 4<i>x</i> − 3 <b>touch</b> at (1, ±1) with a common tangent. A touch does not open a region; treating it as a pass-through invents a piece that is not there.",
            "Taking the wrong side of the knife. “Smaller region” and “cut off by” name a piece. Sample one interior point against every stated condition, because the arithmetic for the larger piece is just as convincing and just as wrong.",
            "Re-integrating the ellipse. It is the circle scaled, so its segment is <i>ab</i> times the unit-circle segment, or <i>b</i>/<i>a</i> times the same cap on the auxiliary circle. A second integration is a second chance to slip."
          ]
        },
        {
          "t": "protip",
          "html": "learn one number and one identity and this whole topic gets short. the number is archimedes' 4/3, which checks every parabola-segment answer against a triangle you can compute in your head. the identity is π/2 − sin<sup>−1</sup><i>t</i> = cos<sup>−1</sup><i>t</i>, because your integration will produce sin<sup>−1</sup> and the answer key will print cos<sup>−1</sup>, and they are the same thing. do not spend the paper's time proving you were right."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "S = r² cos⁻¹(c/r) − c√(r² − c²)", "note": "circular cap beyond the chord x = c" },
            { "f": "ellipse segment = ab × unit-circle segment", "note": "scale by X = x/a, Y = y/b; every area times ab" },
            { "f": "S = (4/3) T · S = (8/3)√(ah³) · T = 2√(ah³)", "note": "Archimedes; the apex is where the tangent is parallel to the chord" },
            { "f": "y² = 4ax, chord x = h ⇒ ends (h, ±2√(ah))", "note": "both branches; half the height is half the answer" },
            { "f": "π/2 − sin⁻¹t = cos⁻¹t", "note": "why your form and the key's form agree" }
          ],
          "aids": [
            "“segment is four thirds of the triangle, every parabola, every chord”",
            "“squaring makes roots that the curve never agreed to”"
          ]
        }
      ]
    },
    {
      "n": "05",
      "title": "Parametric Curves and the Mirror in y = x",
      "chip": "05 MIRROR",
      "kalam": "stop solving for y; change what you integrate in",
      "blocks": [
        {
          "t": "p",
          "html": "Two famous areas in this chapter belong to curves you <b>cannot</b> solve for <i>y</i>. The astroid ∛(<i>x</i>²) + ∛(<i>y</i>²) = ∛(<i>a</i>²) encloses 3π<i>a</i>²/8 and one arch of a cycloid encloses 3π<i>a</i>², and neither curve is a function of <i>x</i> in any usable way. A third family, the inverse functions sin<sup>−1</sup><i>x</i>, tan<sup>−1</sup><i>x</i>, ln <i>x</i> and ∛<i>x</i>, <b>can</b> be written as functions of <i>x</i> but are far easier the other way round. The response in both cases is the same: stop insisting on <i>y</i> = <i>f</i>(<i>x</i>) and change the variable the strips are counted in. No new calculus, one new habit."
        },
        {
          "t": "think",
          "html": "stick a blob of paint on the rim of a bicycle wheel and push the bicycle in a straight line. the blob draws an arch, up and over and back down to the road, once per revolution. that arch is a cycloid, and no formula of the shape <i>y</i> = something in <i>x</i> describes it. but the position of the blob at time <i>t</i> is easy: the wheel has turned by <i>t</i>, so you know exactly where the paint is. parametrise by <i>t</i> and the curve becomes obedient."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · AREA FROM A PARAMETER",
          "tag": "x = x(t), y = y(t) traced once, y ≥ 0, x increasing",
          "main": "A = ∫ y(t) x′(t) dt, t from α to β",
          "legend": [
            "the strip at parameter <i>t</i> still has height <i>y</i>, and its width is now <i>dx</i> = <i>x</i>′(<i>t</i>) <i>dt</i>",
            "if <i>x</i> <b>decreases</b> as <i>t</i> increases, the integral comes out negative: reverse the limits or take the size",
            "the symmetry multiplier works exactly as before, so a quarter of an astroid times 4 is the astroid"
          ],
          "note": "This is not a new theorem. It is A = ∫ y dx with the substitution x = x(t) performed, which is why nothing about it has to be proved separately."
        },
        {
          "t": "p",
          "html": "Two checks stop the usual accidents. First, <b>is the curve traced once</b> over your parameter range? Running <i>t</i> from 0 to 2π on a closed curve traces it once; running to 4π traces it twice and doubles the answer. Second, <b>which way does <i>x</i> move</b>? On the astroid's first quadrant, <i>t</i> runs from π/2 down to 0 as <i>x</i> goes from 0 to <i>a</i>, so the limits arrive reversed and flipping them is what removes the minus sign. Get those two right and the integral itself is a routine trigonometric one."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "DIAGRAM · CURVES YOU CANNOT SOLVE FOR y",
          "chips": ["THE ASTROID", "INSIDE ITS CIRCLE", "ONE CYCLOID ARCH", "THE BOUNDING BOX"],
          "captions": [
            "The astroid x = a cos³t, y = a sin³t with a = 3, traced once as t runs from 0 to 2π. It meets the axes at (±a, 0) and (0, ±a), and between those points it caves inward, which is why its area is so much less than a circle's. Its four cusps are the points where x′(t) and y′(t) both vanish.",
            "The same astroid inside the circle x² + y² = a² that shares its four extreme points. The circle is πa² and the astroid is 3πa²/8, about 0.37 of it. That comparison is the plausibility check: an obviously thinner curve must return an obviously smaller number.",
            "One arch of the cycloid x = a(t − sin t), y = a(1 − cos t) for 0 ≤ t ≤ 2π, with a = 1. Here x′(t) = a(1 − cos t) is never negative and y is never negative, so no flipping and no splitting: the arch runs cleanly left to right from 0 to 2πa.",
            "The same arch inside the rectangle it spans, of width 2πa and height 2a, area 4πa². The arch takes 3πa², exactly three quarters of the box. That fraction is famously tidy, it is independent of a, and it is the fastest sanity check on the answer."
          ],
          "frames": [
            {
              "x": [-5, 5],
              "y": [-3.6, 3.6],
              "polygons": [
                {
                  "points": [[3, 0], [2.808, 0.027], [2.287, 0.202], [1.589, 0.609], [0.899, 1.231], [0.375, 1.949], [0.089, 2.581], [0.003, 2.951], [-0.003, 2.951], [-0.089, 2.581], [-0.375, 1.949], [-0.899, 1.231], [-1.589, 0.609], [-2.287, 0.202], [-2.808, 0.027], [-3, 0], [-2.808, -0.027], [-2.287, -0.202], [-1.589, -0.609], [-0.899, -1.231], [-0.375, -1.949], [-0.089, -2.581], [-0.003, -2.951], [0.003, -2.951], [0.089, -2.581], [0.375, -1.949], [0.899, -1.231], [1.589, -0.609], [2.287, -0.202], [2.808, -0.027]],
                  "corners": false
                }
              ],
              "points": [
                { "x": 3, "y": 0, "label": "(a, 0)" },
                { "x": 0, "y": 3, "label": "(0, a)" }
              ]
            },
            {
              "x": [-5, 5],
              "y": [-3.6, 3.6],
              "curves": [{ "c": "circle", "r": 3, "dash": true, "soft": true }],
              "polygons": [
                {
                  "points": [[3, 0], [2.808, 0.027], [2.287, 0.202], [1.589, 0.609], [0.899, 1.231], [0.375, 1.949], [0.089, 2.581], [0.003, 2.951], [-0.003, 2.951], [-0.089, 2.581], [-0.375, 1.949], [-0.899, 1.231], [-1.589, 0.609], [-2.287, 0.202], [-2.808, 0.027], [-3, 0], [-2.808, -0.027], [-2.287, -0.202], [-1.589, -0.609], [-0.899, -1.231], [-0.375, -1.949], [-0.089, -2.581], [-0.003, -2.951], [0.003, -2.951], [0.089, -2.581], [0.375, -1.949], [0.899, -1.231], [1.589, -0.609], [2.287, -0.202], [2.808, -0.027]],
                  "corners": false
                }
              ],
              "labels": [{ "x": 0, "y": -0.45, "text": "3πa²/8 of πa²" }]
            },
            {
              "x": [-0.7, 7],
              "y": [-0.45, 2.6],
              "polygons": [
                {
                  "points": [[0, 0], [0.003, 0.034], [0.024, 0.134], [0.078, 0.293], [0.181, 0.5], [0.343, 0.741], [0.571, 1], [0.867, 1.259], [1.228, 1.5], [1.649, 1.707], [2.118, 1.866], [2.621, 1.966], [3.142, 2], [3.662, 1.966], [4.165, 1.866], [4.634, 1.707], [5.055, 1.5], [5.417, 1.259], [5.712, 1], [5.94, 0.741], [6.102, 0.5], [6.205, 0.293], [6.26, 0.134], [6.28, 0.034], [6.283, 0]],
                  "corners": false
                }
              ],
              "points": [
                { "x": 0, "y": 0 },
                { "x": 3.142, "y": 2, "label": "(πa, 2a)" },
                { "x": 6.283, "y": 0, "label": "2πa" }
              ]
            },
            {
              "x": [-0.7, 7],
              "y": [-0.45, 2.6],
              "bands": [{ "x0": 0, "x1": 6.283, "y0": 0, "y1": 2 }],
              "polygons": [
                {
                  "points": [[0, 0], [0.003, 0.034], [0.024, 0.134], [0.078, 0.293], [0.181, 0.5], [0.343, 0.741], [0.571, 1], [0.867, 1.259], [1.228, 1.5], [1.649, 1.707], [2.118, 1.866], [2.621, 1.966], [3.142, 2], [3.662, 1.966], [4.165, 1.866], [4.634, 1.707], [5.055, 1.5], [5.417, 1.259], [5.712, 1], [5.94, 0.741], [6.102, 0.5], [6.205, 0.293], [6.26, 0.134], [6.28, 0.034], [6.283, 0]],
                  "corners": false
                }
              ],
              "labels": [{ "x": 3.14, "y": 2.35, "text": "3πa² is 3/4 of 4πa²" }]
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · WALLIS, THE ONLY TOOL YOU NEED FOR THESE",
          "tag": "over [0, π/2]",
          "main": "I<sub>n</sub> = ∫ sin<sup>n</sup>t dt = ((n − 1)/n) I<sub>n−2</sub>",
          "legend": [
            "start values <i>I</i><sub>0</sub> = π/2 and <i>I</i><sub>1</sub> = 1, then step down two at a time",
            "so <i>I</i><sub>2</sub> = π/4, <i>I</i><sub>3</sub> = 2/3, <i>I</i><sub>4</sub> = 3π/16, <i>I</i><sub>6</sub> = 5π/32",
            "cos<sup>n</sup><i>t</i> gives the same numbers on [0, π/2], because <i>t</i> ↦ π/2 − <i>t</i> swaps the two"
          ],
          "note": "Every parametric area on this syllabus reduces to a small combination of these, most often through cos²t = 1 − sin²t."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE ASTROID IS 3πa²/8, TAP A LINE",
          "steps": [
            {
              "eq": "x = a cos³t, y = a sin³t satisfies the equation",
              "why": "Cube-rooting the squares gives ∛(x²) + ∛(y²) = ∛(a²) cos²t + ∛(a²) sin²t = ∛(a²), so the parametrisation is genuine. The curve is unchanged by x → −x and by y → −y, so compute the first quadrant and multiply by 4."
            },
            {
              "eq": "x′(t) = −3a cos²t sin t, and t runs from π/2 down to 0",
              "why": "In the first quadrant x goes from 0 up to a as t decreases from π/2 to 0. So x is decreasing in t, the limits arrive reversed, and flipping them cancels the minus sign in x′."
            },
            {
              "eq": "A_Q = 3a² ∫ sin⁴t cos²t dt over [0, π/2]",
              "why": "Substitute y = a sin³t and the flipped x′: a sin³t · 3a cos²t sin t = 3a² sin⁴t cos²t. This is where the whole problem has gone: a trigonometric integral with no geometry left in it."
            },
            {
              "eq": "= 3a²(I₄ − I₆) = 3a²(3π/16 − 5π/32) = 3πa²/32",
              "why": "Write cos²t = 1 − sin²t, so the integrand is sin⁴t − sin⁶t. Wallis gives I₄ = 3π/16 and I₆ = (5/6)I₄ = 5π/32, and their difference is π/32. Multiply by 4 for the four quadrants: A = 4(3πa²/32) = 3πa²/8, which is about 0.37πa², comfortably inside the circle of radius a."
            }
          ]
        },
        {
          "t": "def",
          "term": "The mirror in y = x",
          "html": "The graph of <i>f</i><sup>−1</sup> is the <b>reflection of the graph of <i>f</i> in the line <i>y</i> = <i>x</i></b>. The proof is one line: (<i>p</i>, <i>q</i>) lies on <i>f</i> exactly when <i>f</i>(<i>p</i>) = <i>q</i>, which is exactly when <i>f</i><sup>−1</sup>(<i>q</i>) = <i>p</i>, which is exactly when (<i>q</i>, <i>p</i>) lies on <i>f</i><sup>−1</sup>. Reflection in <i>y</i> = <i>x</i> is precisely the swap (<i>p</i>, <i>q</i>) ↦ (<i>q</i>, <i>p</i>). Since reflection preserves area, <b>any region and its mirror image have the same area</b>, and that single sentence does most of the work in this half of the topic."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE MIRROR TRICK",
          "tag": "f increasing, f(a) = a, f(b) = b, f(x) ≥ x on [a, b]",
          "main": "area between y = f(x) and y = f<sup>−1</sup>(x) = 2 ∫<sub>a</sub><sup>b</sup> [ f(x) − x ] dx",
          "legend": [
            "the diagonal <i>y</i> = <i>x</i> cuts the enclosed region into two pieces, and reflection swaps them, so they are <b>congruent</b>",
            "the upper piece lies between <i>y</i> = <i>f</i>(<i>x</i>) and <i>y</i> = <i>x</i>, which is a far easier subtraction than <i>f</i> against <i>f</i><sup>−1</sup>",
            "the fixed points <i>a</i> and <i>b</i> are the intersections, because a curve meets its own mirror image <b>on the mirror</b>"
          ],
          "note": "It replaces ∛x against x³ with ∛x against x, and √x against x² with √x against x. Same answer, half the algebra."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "DIAGRAM · THE MIRROR IN y = x",
          "chips": ["A PAIR OF INVERSES", "THE LENS", "HALF OF IT, DOUBLED"],
          "captions": [
            "y = x² and y = √x are inverses of each other on [0, ∞), so each is the other's reflection in the dashed diagonal. They meet where the curve crosses the mirror, at (0, 0) and (1, 1), and those fixed points are the limits without any solving.",
            "The lens between them, ∫₀¹(√x − x²) dx = 2/3 − 1/3 = 1/3. Nothing is wrong with computing it this way; the point of the next frame is that you never have to.",
            "The diagonal splits the lens into two pieces, and reflection in y = x maps each exactly onto the other, so they are congruent. Compute only the upper one, between √x and the line, and double: 2∫₀¹(√x − x) dx = 2(2/3 − 1/2) = 1/3. Same answer, and the subtraction was against a straight line."
          ],
          "frames": [
            {
              "x": [-0.35, 1.85],
              "y": [-0.28, 1.3],
              "curves": [
                { "c": "poly", "coeffs": [0, 0, 1] },
                { "c": "sqrt", "a": 1 },
                { "c": "line", "m": 1, "k": 0, "dash": true, "soft": true }
              ],
              "points": [
                { "x": 0, "y": 0 },
                { "x": 1, "y": 1, "label": "(1, 1)" }
              ]
            },
            {
              "x": [-0.35, 1.85],
              "y": [-0.28, 1.3],
              "curves": [
                { "c": "poly", "coeffs": [0, 0, 1] },
                { "c": "sqrt", "a": 1 },
                { "c": "line", "m": 1, "k": 0, "dash": true, "soft": true }
              ],
              "areas": [
                { "under": { "c": "sqrt", "a": 1 }, "and": { "c": "poly", "coeffs": [0, 0, 1] }, "from": 0, "to": 1 }
              ],
              "labels": [{ "x": 1.4, "y": 0.55, "text": "A = 1/3" }]
            },
            {
              "x": [-0.35, 1.85],
              "y": [-0.28, 1.3],
              "curves": [
                { "c": "poly", "coeffs": [0, 0, 1] },
                { "c": "sqrt", "a": 1 },
                { "c": "line", "m": 1, "k": 0, "dash": true, "soft": true }
              ],
              "areas": [
                { "under": { "c": "sqrt", "a": 1 }, "and": { "c": "line", "m": 1, "k": 0 }, "from": 0, "to": 1 },
                { "under": { "c": "line", "m": 1, "k": 0 }, "and": { "c": "poly", "coeffs": [0, 0, 1] }, "from": 0, "to": 1, "soft": true }
              ],
              "labels": [{ "x": 1.42, "y": 0.55, "text": "half, then ×2" }]
            }
          ]
        },
        {
          "t": "defgrid",
          "title": "Antiderivatives for inverse-function areas",
          "rows": [
            { "k": "∫ sin⁻¹x dx", "v": "<i>x</i> sin<sup>−1</sup><i>x</i> + √(1 − <i>x</i>²) + <i>C</i>. By parts with <i>u</i> = sin<sup>−1</sup><i>x</i>, <i>dv</i> = <i>dx</i>" },
            { "k": "∫ cos⁻¹x dx", "v": "<i>x</i> cos<sup>−1</sup><i>x</i> − √(1 − <i>x</i>²) + <i>C</i>. Same parts, opposite sign" },
            { "k": "∫ tan⁻¹x dx", "v": "<i>x</i> tan<sup>−1</sup><i>x</i> − ½ ln(1 + <i>x</i>²) + <i>C</i>" },
            { "k": "∫ ln x dx", "v": "<i>x</i> ln <i>x</i> − <i>x</i> + <i>C</i>, so ∫ from 1 to <i>e</i> is exactly 1" },
            { "k": "The identity that saves you", "v": "cot<sup>−1</sup><i>x</i> = π/2 − tan<sup>−1</sup><i>x</i>, so a gap between them integrates trivially" },
            { "k": "Or avoid all of them", "v": "rewrite <i>y</i> = sin<sup>−1</sup><i>x</i> as <i>x</i> = sin <i>y</i> and <b>integrate in <i>y</i></b> instead" }
          ]
        },
        {
          "t": "proc",
          "title": "An area built on an inverse function",
          "steps": [
            "<b>Sketch both curves and the mirror.</b> Draw <i>y</i> = <i>x</i> dashed. Inverse pairs are reflections in it, and they meet <b>on</b> it, which hands you the limits with no algebra.",
            "<b>Decide whether you want <i>dx</i> or <i>dy</i>.</b> If the boundaries are inverse-trig or logarithmic, rewriting <i>y</i> = sin<sup>−1</sup><i>x</i> as <i>x</i> = sin <i>y</i> and slicing horizontally usually removes every hard antiderivative.",
            "<b>If the two boundaries are mutual inverses</b>, use the mirror trick: compute the piece above the diagonal against <i>y</i> = <i>x</i>, and double it.",
            "<b>Identify the region carefully when an axis is a boundary.</b> A region bounded by two curves and the <i>x</i>-axis closes under the <b>lower</b> of the two curves, not the upper: the upper envelope needs extra walls the question never mentioned.",
            "<b>Check numerically.</b> These answers are small numbers like √2 − 1, ln 2, e − 2 or 1. Estimate the region as width times average height in your head; if you are out by a factor of two or more, you have the wrong region, not the wrong integral."
          ]
        },
        {
          "t": "ex",
          "tag": "JEE MAIN · JEE ADVANCED",
          "q": "Find the area enclosed by the astroid ∛(<i>x</i>²) + ∛(<i>y</i>²) = ∛(<i>a</i>²), for <i>a</i> positive.",
          "steps": [
            "Parametrise <i>x</i> = <i>a</i> cos³<i>t</i>, <i>y</i> = <i>a</i> sin³<i>t</i>. It satisfies the equation because cos²<i>t</i> + sin²<i>t</i> = 1, and the curve is symmetric in both axes, so take the first quadrant and multiply by 4.",
            "There <i>t</i> runs from π/2 down to 0 and <i>x</i>′(<i>t</i>) = −3<i>a</i> cos²<i>t</i> sin <i>t</i>. Flipping the limits kills the minus sign: <i>A</i><sub>Q</sub> = 3<i>a</i>²∫ sin⁴<i>t</i> cos²<i>t</i> <i>dt</i> over [0, π/2].",
            "Write cos²<i>t</i> = 1 − sin²<i>t</i>: the integral is <i>I</i><sub>4</sub> − <i>I</i><sub>6</sub> = 3π/16 − 5π/32 = π/32. So <i>A</i><sub>Q</sub> = 3π<i>a</i>²/32.",
            "<i>A</i> = 4(3π<i>a</i>²/32) = 3π<i>a</i>²/8 ≈ 0.37π<i>a</i>², against π<i>a</i>² for the circle through its four tips. A visibly thinner curve returns a visibly smaller number."
          ],
          "ans": "3πa²/8 square units"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "Find the area under one arch of the cycloid <i>x</i> = <i>a</i>(<i>t</i> − sin <i>t</i>), <i>y</i> = <i>a</i>(1 − cos <i>t</i>), 0 ≤ <i>t</i> ≤ 2π.",
          "steps": [
            "<i>x</i>′(<i>t</i>) = <i>a</i>(1 − cos <i>t</i>) ≥ 0, so <i>x</i> increases steadily from 0 to 2π<i>a</i>, and <i>y</i> = <i>a</i>(1 − cos <i>t</i>) ≥ 0 throughout. No flipping and no splitting.",
            "<i>A</i> = ∫<i>a</i>(1 − cos <i>t</i>) · <i>a</i>(1 − cos <i>t</i>) <i>dt</i> over [0, 2π] = <i>a</i>²∫(1 − cos <i>t</i>)² <i>dt</i>.",
            "Expand: ∫1 <i>dt</i> = 2π, ∫cos <i>t</i> <i>dt</i> = 0, and ∫cos²<i>t</i> <i>dt</i> = π by the half-angle identity. So <i>A</i> = <i>a</i>²(2π − 0 + π).",
            "<i>A</i> = 3π<i>a</i>². Check: the arch spans a rectangle 2π<i>a</i> by 2<i>a</i>, area 4π<i>a</i>², and 3π<i>a</i>² is exactly three quarters of it."
          ],
          "ans": "3πa² square units, three quarters of the bounding rectangle"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "Find the area enclosed between <i>y</i> = <i>x</i>³ and <i>y</i> = ∛<i>x</i>.",
          "steps": [
            "They are mutual inverses, so each is the other's reflection in <i>y</i> = <i>x</i> and they meet on that line: <i>x</i>³ = <i>x</i> gives <i>x</i> = −1, 0, 1. Two lobes, one in each of the first and third quadrants, congruent through the origin.",
            "Take the lobe on (0, 1). There ∛<i>x</i> ≥ <i>x</i> ≥ <i>x</i>³, so the mirror trick applies with <i>f</i>(<i>x</i>) = ∛<i>x</i>.",
            "Lobe = 2∫₀¹(∛<i>x</i> − <i>x</i>)<i>dx</i> = 2(3/4 − 1/2) = 1/2, so both lobes give <i>A</i> = 1.",
            "Direct check without the trick: 2∫₀¹(∛<i>x</i> − <i>x</i>³)<i>dx</i> = 2(3/4 − 1/4) = 1. The trick replaced a cube root against a cube with a cube root against a straight line."
          ],
          "ans": "1 square unit, in two congruent lobes"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN · SOURCE CORRECTED",
          "q": "Find the area of the region bounded by <i>y</i> = sin<sup>−1</sup><i>x</i>, <i>y</i> = cos<sup>−1</sup><i>x</i> and the <i>x</i>-axis.",
          "steps": [
            "Both curves live on [0, 1] and cross where sin<sup>−1</sup><i>x</i> = cos<sup>−1</sup><i>x</i>, at <i>x</i> = 1/√2, where both equal π/4.",
            "Which region closes? Walk the boundary: from (0, 0) up sin<sup>−1</sup><i>x</i> to the crossing, down cos<sup>−1</sup><i>x</i> to (1, 0), then home along the <i>x</i>-axis. The region sits under the <b>lower</b> of the two curves. Taking the upper one would need the <i>y</i>-axis and the line <i>x</i> = 1 as extra walls, and the question named neither.",
            "Slice horizontally and it is one integral: for 0 ≤ <i>y</i> ≤ π/4 the strip runs from <i>x</i> = sin <i>y</i> to <i>x</i> = cos <i>y</i>. <i>A</i> = ∫(cos <i>y</i> − sin <i>y</i>)<i>dy</i> over [0, π/4] = [sin <i>y</i> + cos <i>y</i>] from 0 to π/4 = √2 − 1.",
            "Vertical strips agree: ∫sin<sup>−1</sup><i>x</i> <i>dx</i> over [0, 1/√2] plus ∫cos<sup>−1</sup><i>x</i> <i>dx</i> over [1/√2, 1] is again √2 − 1 ≈ 0.414. <b>The source prints π/2 + 1 − √2 ≈ 1.157</b>, which is the area under the upper envelope, a different region."
          ],
          "ans": "√2 − 1 ≈ 0.414 square units. Two curves and an axis close under the lower curve"
        },
        {
          "t": "mcq",
          "q": "The area enclosed by the astroid with <i>a</i> = 4 is:",
          "correct": 1,
          "opts": [
            {
              "label": "16π",
              "nudge": "That is πa² = π(16), the circle through the four tips. The astroid caves inward between them and encloses only 3/8 of it."
            },
            { "label": "6π", "nudge": null },
            {
              "label": "3π/2",
              "nudge": "That is the astroid with a = 2. The answer scales as a², so going from a = 2 to a = 4 multiplies it by four, from 3π/2 to 6π."
            },
            {
              "label": "24π",
              "nudge": "Larger than the circumscribed circle, 16π, which is geometrically impossible: a curve inside another encloses less."
            }
          ],
          "solution": "A = 3πa²/8 with a = 4, so A = 3π(16)/8 = 6π ≈ 18.85, against 16π ≈ 50.3 for the circle. About 0.37 of it, as it must be."
        },
        {
          "t": "mcq",
          "q": "The area under one arch of <i>x</i> = <i>a</i>(<i>t</i> + sin <i>t</i>), <i>y</i> = <i>a</i>(1 − cos <i>t</i>) for 0 ≤ <i>t</i> ≤ 2π is:",
          "correct": 0,
          "opts": [
            { "label": "πa²", "nudge": null },
            {
              "label": "3πa²",
              "nudge": "That is the standard cycloid, x = a(t − sin t). One sign has changed, and it changes the answer: always expand before you assume a curve is the one you memorised."
            },
            {
              "label": "2πa²",
              "nudge": "This uses dx = a dt instead of dx = x′(t) dt, giving a²∫(1 − cos t) dt = 2πa². The strip width carries x′(t), which here is a(1 + cos t)."
            },
            {
              "label": "4πa²",
              "nudge": "That is the bounding rectangle, 2πa by 2a. The arch is strictly inside it, so the answer must be strictly less."
            }
          ],
          "solution": "Here x′(t) = a(1 + cos t), so the integrand is a²(1 − cos t)(1 + cos t) = a² sin²t. Over [0, 2π] that integrates to πa². The factor (1 − cos²t) collapses the whole thing, which is why the 3πa² of the standard cycloid does not appear."
        },
        {
          "t": "mcq",
          "q": "The area enclosed between <i>y</i> = <i>x</i>² and <i>y</i> = √<i>x</i> is:",
          "correct": 0,
          "opts": [
            { "label": "1/3", "nudge": null },
            {
              "label": "1/6",
              "nudge": "That is the mirror trick's half computed but not doubled, or the lens between y = x and y = x². Reflection makes the two halves congruent, so the doubling is compulsory."
            },
            {
              "label": "2/3",
              "nudge": "That is ∫₀¹√x dx, the area under the upper curve alone, with the lower one never subtracted."
            },
            {
              "label": "1",
              "nudge": "That is the whole unit square, which strictly contains the lens. The lens is a third of it."
            }
          ],
          "solution": "They are inverses, meeting on y = x at (0, 0) and (1, 1). Directly, ∫₀¹(√x − x²) dx = 2/3 − 1/3 = 1/3. By the mirror trick, 2∫₀¹(√x − x) dx = 2(2/3 − 1/2) = 1/3."
        },
        {
          "t": "mcq",
          "q": "The area bounded by <i>y</i> = cos<sup>−1</sup><i>x</i>, the <i>x</i>-axis and the lines <i>x</i> = 0 and <i>x</i> = 1 is:",
          "correct": 2,
          "opts": [
            {
              "label": "π/2 − 1",
              "nudge": "That is the companion region for sin⁻¹x on the same interval. The two together fill the rectangle of area π/2, and they are 1 and π/2 − 1."
            },
            {
              "label": "π/2",
              "nudge": "That is the whole rectangle [0, 1] × [0, π/2]. The curve cuts it into two pieces and this region is only one of them."
            },
            { "label": "1", "nudge": null },
            {
              "label": "π/4",
              "nudge": "This is the value of cos⁻¹x at x = 1/√2, a height rather than an area. No integration produces it here."
            }
          ],
          "solution": "∫₀¹ cos⁻¹x dx = [x cos⁻¹x − √(1 − x²)]₀¹ = (0 − 0) − (0 − 1) = 1. Faster still: reflect in y = x and the region becomes the one under x = cos y for 0 ≤ y ≤ π/2, whose area is the integral of cos y over [0, π/2], which is 1."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "Find the area enclosed by <i>x</i> = cos³<i>t</i>, <i>y</i> = sin³<i>t</i>, 0 ≤ <i>t</i> ≤ 2π.",
              "a": "An astroid with <i>a</i> = 1, so <i>A</i> = 3π(1)²/8 = <b>3π/8</b> square units."
            },
            {
              "q": "Find the area under one arch of <i>x</i> = 2(<i>t</i> − sin <i>t</i>), <i>y</i> = 2(1 − cos <i>t</i>).",
              "a": "The standard cycloid with <i>a</i> = 2, so <i>A</i> = 3π(2)² = <b>12π</b> square units. Check: the box is 4π by 4, area 16π, and 12π is three quarters."
            },
            {
              "q": "Using <i>x</i> = 3 cos <i>t</i>, <i>y</i> = 2 sin <i>t</i>, find the area of <i>x</i>²/9 + <i>y</i>²/4 = 1.",
              "a": "First quadrant: ∫2 sin <i>t</i> · 3 sin <i>t</i> <i>dt</i> over [0, π/2] = 6<i>I</i><sub>2</sub> = 6(π/4) = 3π/2. Times 4 gives <b>6π</b> = π<i>ab</i>, agreeing with topic 01."
            },
            {
              "q": "Find the area bounded by <i>y</i> = tan<sup>−1</sup><i>x</i>, <i>y</i> = cot<sup>−1</sup><i>x</i> and the <i>y</i>-axis.",
              "a": "They cross at <i>x</i> = 1, and cot<sup>−1</sup><i>x</i> = π/2 − tan<sup>−1</sup><i>x</i>. <i>A</i> = ∫₀¹(π/2 − 2tan<sup>−1</sup><i>x</i>)<i>dx</i> = π/2 − 2(π/4 − ½ln2) = <b>ln 2</b> ≈ 0.693."
            },
            {
              "q": "Find the area bounded by <i>y</i> = ln <i>x</i>, <i>y</i> = 1 and <i>x</i> = 1.",
              "a": "The curve meets <i>y</i> = 1 at <i>x</i> = <i>e</i>. <i>A</i> = ∫₁<sup>e</sup>(1 − ln <i>x</i>)<i>dx</i> = (<i>e</i> − 1) − 1 = <b><i>e</i> − 2</b> ≈ 0.718, since ∫₁<sup>e</sup>ln <i>x</i> <i>dx</i> = 1."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "Closing a region with the wrong envelope. Two curves and the <i>x</i>-axis close under the <b>lower</b> of the two. The source's own worked example takes the upper one and reports π/2 + 1 − √2 for a region whose area is <b>√2 − 1</b>; walking the boundary once would have caught it.",
            "Assuming a parametric curve is the one you memorised. <i>x</i> = <i>a</i>(<i>t</i> + sin <i>t</i>) is not the cycloid: its arch is π<i>a</i>², not 3π<i>a</i>². <b>Expand (1 − cos <i>t</i>)<i>x</i>′(<i>t</i>) before you reach for a remembered answer.</b>",
            "Losing the sign when <i>x</i> decreases. On the astroid's first quadrant <i>t</i> runs downward, so either reverse the limits or take the size. Doing both leaves the minus sign in and hands you a negative area.",
            "Tracing the curve twice. A closed parametric curve over 0 to 2π is traced once; extending the range doubles the answer without any visible symptom.",
            "Forgetting the mirror trick's doubling. The diagonal cuts the region into two congruent halves, so 2∫(<i>f</i>(<i>x</i>) − <i>x</i>)<i>dx</i>, not ∫. Half the correct value is always on the option list."
          ]
        },
        {
          "t": "protip",
          "html": "before integrating anything on this page, ask which variable makes the boundary simple. sin<sup>−1</sup><i>x</i> is a horrible integrand and sin <i>y</i> is a lovely one, and they describe the same curve. the same instinct handles ln <i>x</i> as <i>e</i><sup>y</sup> and cos<sup>−1</sup><i>x</i> as cos <i>y</i>. an inverse function is not a hard function, it is an easy function looked at from the wrong side."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "A = ∫ y(t) x′(t) dt", "note": "traced once; if x decreases, flip the limits" },
            { "f": "astroid 3πa²/8 · cycloid arch 3πa²", "note": "0.37 of its circle; 3/4 of its box" },
            { "f": "Iₙ = ((n−1)/n) Iₙ₋₂, I₀ = π/2, I₁ = 1", "note": "I₂ = π/4, I₄ = 3π/16, I₆ = 5π/32" },
            { "f": "graph of f⁻¹ = graph of f reflected in y = x", "note": "so inverses meet on the diagonal, and reflection keeps area" },
            { "f": "between f and f⁻¹: 2 ∫ (f(x) − x) dx", "note": "compute the easy half above the diagonal, then double" }
          ],
          "aids": [
            "“an inverse function is an easy function seen from the wrong side”",
            "“expand first, then recognise; a plus sign is a different curve”"
          ]
        }
      ]
    },
    {
      "n": "06",
      "title": "Periodic Regions, and Areas that Fix a Parameter",
      "chip": "06 PERIODIC",
      "kalam": "count the humps, then run the question backwards",
      "blocks": [
        {
          "t": "p",
          "html": "Topic 01 said: split a trigonometric integral at every sign change. That is correct and it does not scale. Asked for the area between sin <i>x</i> and cos <i>x</i> over [0, 2π], listing every crossing and evaluating four separate integrals costs minutes and invites four separate slips. Three structural facts replace all that casework: <b>every arch of a sine has the same area</b>, <b>a full period integrates to the same value wherever you start</b>, and <b>a sine plus a cosine is a single shifted sine</b>. Together they turn a page of splitting into two lines."
        },
        {
          "t": "think",
          "html": "counting sleepers on a railway track. you do not measure each one, you measure one and count how many there are. an arch of a sine is a sleeper: every arch has area 2, exactly, no matter which one. so the whole job is deciding how many whole arches your interval holds and what is left over at the end. that leftover piece is the only integral you actually have to do."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · COUNT THE ARCHES",
          "tag": "sin x and cos x, and their moduli",
          "main": "∫ |sin x| dx over n half-periods = 2n",
          "legend": [
            "one arch: ∫ sin <i>x</i> <i>dx</i> from 0 to π = [−cos <i>x</i>] = 2, and every other arch is a translate of it",
            "|sin(<i>x</i> + π)| = |sin <i>x</i>|, so |sin <i>x</i>| has period <b>π</b>, half the period of sin <i>x</i> itself",
            "identical for |cos <i>x</i>|, and for sin <i>bx</i> the arch width becomes π/<i>b</i> while the arch area becomes 2/<i>b</i>"
          ],
          "note": "The modulus halving the period is the most common wrong step in this family: using 2π as the period of |sin x| miscounts the blocks."
        },
        {
          "t": "def",
          "term": "A window of one full period",
          "html": "If <i>f</i> has period <i>T</i>, then <b>∫ <i>f</i> over [<i>a</i>, <i>a</i> + <i>T</i>] is the same number for every <i>a</i></b>. Split the window at <i>T</i> and substitute <i>u</i> = <i>t</i> − <i>T</i> in the far piece; periodicity turns it into the piece from 0 to <i>a</i>, and the two halves reassemble into [0, <i>T</i>]. So a shift never changes a whole-period answer, which is exactly what lets you slide an awkward interval onto a convenient one before counting."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · ONE SINE INSTEAD OF TWO CURVES",
          "tag": "the amplitude shift",
          "main": "A sin x + B cos x = R sin(x + φ), R = √(A² + B²)",
          "legend": [
            "in particular <b>sin <i>x</i> − cos <i>x</i> = √2 sin(<i>x</i> − π/4)</b>, which is the one the exam uses",
            "so the <b>gap</b> between the sine and the cosine curves is a single sine of amplitude √2, shifted",
            "the area between them becomes √2 ∫|sin <i>u</i>| <i>du</i>, and the arch count finishes it"
          ],
          "note": "This converts “area between two trigonometric curves” into “area under one modulus sine”, which you can count rather than integrate."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "DIAGRAM · COUNT THE HUMPS",
          "chips": ["ONE ARCH", "TWO THAT CANCEL", "FIVE HALF-ARCHES", "SINE AGAINST COSINE"],
          "captions": [
            "One arch of y = sin x, from 0 to π. Its area is exactly 2, and every other arch of a sine is a translate of this one, so it is also exactly 2. That single number is what turns the rest of this topic into counting.",
            "Over [0, 2π] there are two arches, one above the axis and one below. The signed integral is 2 − 2 = 0, and it is the planted wrong answer. The area is 2 + 2 = 4: below the axis the strips still have length, they merely have negative height.",
            "Over [0, 5π/2] the interval holds two whole arches and then the rising half of a third. The two arches contribute 2 + 2 = 4, and the leftover from 2π to 5π/2 is the only piece needing an integral: it is 1. Total 5. The signed integral of the same picture is 1, which is the answer to a different question.",
            "y = sin x against y = cos x over [0, 2π]. They cross at π/4 and 5π/4, so the region is three pieces and the top curve swaps twice. Or use the amplitude shift: the gap is √2 sin(x − π/4), a single modulus sine over a window of length 2π, that is two full periods of |sin|, giving √2 × 2 × 2 = 4√2."
          ],
          "frames": [
            {
              "x": [-0.6, 8.4],
              "y": [-1.7, 1.7],
              "piTicks": true,
              "curves": [{ "c": "sin" }],
              "areas": [{ "under": { "c": "sin" }, "from": 0, "to": 3.1416 }],
              "labels": [{ "x": 1.57, "y": 0.35, "text": "2" }]
            },
            {
              "x": [-0.6, 8.4],
              "y": [-1.7, 1.7],
              "piTicks": true,
              "curves": [{ "c": "sin" }],
              "areas": [
                { "under": { "c": "sin" }, "from": 0, "to": 3.1416 },
                { "under": { "c": "sin" }, "from": 3.1416, "to": 6.2832, "soft": true }
              ],
              "labels": [
                { "x": 1.57, "y": 0.35, "text": "+2" },
                { "x": 4.71, "y": -0.42, "text": "−2", "soft": true }
              ]
            },
            {
              "x": [-0.6, 8.4],
              "y": [-1.7, 1.7],
              "piTicks": true,
              "curves": [{ "c": "sin" }],
              "areas": [
                { "under": { "c": "sin" }, "from": 0, "to": 3.1416 },
                { "under": { "c": "sin" }, "from": 3.1416, "to": 6.2832 },
                { "under": { "c": "sin" }, "from": 6.2832, "to": 7.854 }
              ],
              "labels": [
                { "x": 1.57, "y": 0.35, "text": "2" },
                { "x": 4.71, "y": -0.42, "text": "2" },
                { "x": 7.2, "y": 0.35, "text": "1" }
              ]
            },
            {
              "x": [-0.6, 7],
              "y": [-1.7, 1.7],
              "piTicks": true,
              "curves": [{ "c": "sin" }, { "c": "cos" }],
              "areas": [
                { "under": { "c": "cos" }, "and": { "c": "sin" }, "from": 0, "to": 0.7854 },
                { "under": { "c": "sin" }, "and": { "c": "cos" }, "from": 0.7854, "to": 3.927 },
                { "under": { "c": "cos" }, "and": { "c": "sin" }, "from": 3.927, "to": 6.2832 }
              ],
              "points": [
                { "x": 0.7854, "y": 0.707, "label": "π/4" },
                { "x": 3.927, "y": -0.707, "label": "5π/4" }
              ]
            }
          ]
        },
        {
          "t": "proc",
          "title": "A periodic area, without the casework",
          "steps": [
            "<b>Find the true period of the integrand.</b> A modulus halves it: |sin <i>x</i>| and |cos <i>x</i>| have period π, not 2π. A squared or combined expression may collapse further, so simplify before you count.",
            "<b>Collapse two curves into one</b> where you can. sin <i>x</i> − cos <i>x</i> = √2 sin(<i>x</i> − π/4), and after that there is one curve and one modulus rather than two curves and a swap.",
            "<b>Shift the window.</b> A whole-period integral is unchanged by where it starts, so slide an interval like [−π/4, 7π/4] onto [0, 2π] and count from there.",
            "<b>Count whole arches, then integrate only the remainder.</b> <i>n</i> whole half-periods of |sin| contribute 2<i>n</i>, and the leftover fragment is the single integral you actually perform.",
            "<b>Never report the signed value.</b> On any interval holding more than one arch the signed integral is smaller than the area, and on a whole number of periods it is zero. That zero is the most common wrong option in the bank."
          ]
        },
        {
          "t": "p",
          "html": "Now reverse the arrow. Every question so far handed you the curves and asked for a number. JEE Main and Advanced regularly do the opposite: <b>the area is given, and a coefficient, a cutting line or a point of tangency is the unknown</b>. The method is always the same three moves. Name the parameter, write the limits <b>as functions of it</b> without ever plugging in numbers, and form <i>A</i>(<i>k</i>); then impose the stated condition and solve. These questions end in a cubic in the parameter, they often have two valid answers, and they are chronically under-practised because the chapter text never models them."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE ROOT-GAP LEMMA",
          "tag": "q(x) = c(x − r₁)(x − r₂), roots r₁ then r₂",
          "main": "∫ q(x) dx from r<sub>1</sub> to r<sub>2</sub> = −c (r<sub>2</sub> − r<sub>1</sub>)³/6",
          "legend": [
            "so the area between a line and a parabola depends <b>only on the gap between their intersection points</b>, never on where those points are",
            "with <i>c</i> = −1, the area is (<i>r</i><sub>2</sub> − <i>r</i><sub>1</sub>)³/6, and the gap is √(discriminant)/|leading coefficient|",
            "it replaces the whole antiderivative with one subtraction, which is exactly what a parameter question needs"
          ],
          "note": "Also written A = |c| (r₂ − r₁)³/6. The sign of c only tells you which curve was on top."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE ROOT-GAP LEMMA, TAP A LINE",
          "steps": [
            {
              "eq": "substitute t = x − r₁, so t runs from 0 to L = r₂ − r₁",
              "why": "The integral cannot depend on where the roots sit, only on how far apart they are, and a translation is how you make that visible. After the shift the quadratic is c·t(t − L)."
            },
            {
              "eq": "∫₀ᴸ c t (t − L) dt = c (L³/3 − L³/2)",
              "why": "Expand: c(t² − Lt). The first term integrates to L³/3 and the second to L·L²/2 = L³/2. No new technique, only bookkeeping."
            },
            {
              "eq": "= −c L³/6",
              "why": "Because 1/3 − 1/2 = −1/6. The minus sign is honest: if c is positive the parabola opens upward and sits below the axis between its roots, so the signed integral must be negative."
            },
            {
              "eq": "area between y = mx + k and y = x² is L³/6, L = √(discriminant)",
              "why": "Their difference is −(x² − mx − k) = −(x − r₁)(x − r₂), so c = −1 and the area is L³/6 with L the gap between the roots of x² − mx − k = 0. That gap is √(m² + 4k), so the area depends on m only through the discriminant. That single observation turns a hard optimisation into an easy one."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "DIAGRAM · SLIDE THE LINE UNTIL THE HALVES MATCH",
          "chips": ["k = 0.5", "k = 4 − ∛16", "k = 3"],
          "mathChips": true,
          "captions": [
            "The region 0 ≤ y ≤ 4 − x², whose total area is 32/3, cut by the horizontal line y = 0.5. The line meets the parabola at x = ±√3.5, and the amber cap above it takes about 8.7 of the 10.67, far more than half. Sitting too low, the line leaves too much above it.",
            "At k = 4 − ∛16 ≈ 1.48 the cap is exactly 16/3, half of the region. The cap has area 4u³/3 where u = √(4 − k), so setting 4u³/3 = 16/3 gives u³ = 4 and k = 4 − ∛16. Note it sits below the region's mean height of 1.6, which is right: the region is wider near its base, so the equal-area line must sit below the balance point.",
            "At k = 3 the cap is only 4/3, an eighth of the region. Between the three frames the cap shrinks continuously from the whole region at k = 0 to nothing at k = 4, so the bisecting line exists and is unique. That monotonicity is the argument that your single answer is the only one."
          ],
          "frames": [
            {
              "x": [-2.7, 2.7],
              "y": [-0.7, 4.8],
              "curves": [
                { "c": "poly", "coeffs": [4, 0, -1] },
                { "c": "line", "m": 0, "k": 0.5, "dash": true }
              ],
              "areas": [
                { "under": { "c": "poly", "coeffs": [4, 0, -1] }, "and": { "c": "line", "m": 0, "k": 0.5 }, "from": -1.871, "to": 1.871 },
                { "under": { "c": "line", "m": 0, "k": 0.5 }, "from": -1.871, "to": 1.871, "soft": true },
                { "under": { "c": "poly", "coeffs": [4, 0, -1] }, "from": -2, "to": -1.871, "soft": true },
                { "under": { "c": "poly", "coeffs": [4, 0, -1] }, "from": 1.871, "to": 2, "soft": true }
              ],
              "labels": [{ "x": 0, "y": 2.1, "text": "cap ≈ 8.7 of 10.67" }]
            },
            {
              "x": [-2.7, 2.7],
              "y": [-0.7, 4.8],
              "curves": [
                { "c": "poly", "coeffs": [4, 0, -1] },
                { "c": "line", "m": 0, "k": 1.4802, "dash": true }
              ],
              "areas": [
                { "under": { "c": "poly", "coeffs": [4, 0, -1] }, "and": { "c": "line", "m": 0, "k": 1.4802 }, "from": -1.5874, "to": 1.5874 },
                { "under": { "c": "line", "m": 0, "k": 1.4802 }, "from": -1.5874, "to": 1.5874, "soft": true },
                { "under": { "c": "poly", "coeffs": [4, 0, -1] }, "from": -2, "to": -1.5874, "soft": true },
                { "under": { "c": "poly", "coeffs": [4, 0, -1] }, "from": 1.5874, "to": 2, "soft": true }
              ],
              "labels": [{ "x": 0, "y": 2.6, "text": "16/3 above, 16/3 below" }]
            },
            {
              "x": [-2.7, 2.7],
              "y": [-0.7, 4.8],
              "curves": [
                { "c": "poly", "coeffs": [4, 0, -1] },
                { "c": "line", "m": 0, "k": 3, "dash": true }
              ],
              "areas": [
                { "under": { "c": "poly", "coeffs": [4, 0, -1] }, "and": { "c": "line", "m": 0, "k": 3 }, "from": -1, "to": 1 },
                { "under": { "c": "line", "m": 0, "k": 3 }, "from": -1, "to": 1, "soft": true },
                { "under": { "c": "poly", "coeffs": [4, 0, -1] }, "from": -2, "to": -1, "soft": true },
                { "under": { "c": "poly", "coeffs": [4, 0, -1] }, "from": 1, "to": 2, "soft": true }
              ],
              "labels": [{ "x": 0, "y": 3.55, "text": "cap 4/3 of 10.67" }]
            }
          ]
        },
        {
          "t": "defgrid",
          "title": "Reverse questions and what they collapse to",
          "rows": [
            { "k": "y = k bisects 0 ≤ y ≤ h − x²", "v": "cap = 4<i>u</i>³/3 with <i>u</i> = √(<i>h</i> − <i>k</i>). Set it to half the total and solve for <i>u</i> first" },
            { "k": "Line y = mx + k against y = x²", "v": "area = <i>L</i>³/6 with <i>L</i> = √(<i>m</i>² + 4<i>k</i>). Minimal when the discriminant is" },
            { "k": "y = ax − x² and the x-axis", "v": "roots 0 and <i>a</i>, so area = <i>a</i>³/6. A cubic in <i>a</i>, one positive root" },
            { "k": "y = x − x² against y = mx", "v": "roots 0 and 1 − <i>m</i>, area = |1 − <i>m</i>|³/6. The modulus is why <b>two</b> values of <i>m</i> qualify" },
            { "k": "y = c cuts the diamond", "v": "the cap above <i>y</i> = <i>c</i> is the triangle (<i>a</i> − <i>c</i>)². Ratios become a quadratic, not a cubic" },
            { "k": "The habit", "v": "write every limit as a function of the parameter and <b>do not substitute numbers</b> until the very last line" }
          ]
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "Find the area bounded by <i>y</i> = sin <i>x</i> and the <i>x</i>-axis for 0 ≤ <i>x</i> ≤ 5π/2.",
          "steps": [
            "The interval holds two whole arches, [0, π] and [π, 2π], plus the rising half of a third on [2π, 5π/2].",
            "Each whole arch has area 2, so the first two contribute 4, with no integration at all.",
            "The leftover: ∫ sin <i>x</i> <i>dx</i> from 2π to 5π/2 = [−cos <i>x</i>] = 0 − (−1) = 1.",
            "<i>A</i> = 4 + 1 = 5. Never report the signed integral, which is 1 here: that is what survives after the second arch cancels the first."
          ],
          "ans": "5 square units. The signed integral, 1, is the planted trap"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN · JEE ADVANCED",
          "q": "Find the area of the region between <i>y</i> = sin <i>x</i> and <i>y</i> = cos <i>x</i> for 0 ≤ <i>x</i> ≤ 2π.",
          "steps": [
            "The gap between the curves is sin <i>x</i> − cos <i>x</i> = √2 sin(<i>x</i> − π/4), so the area is √2 ∫|sin(<i>x</i> − π/4)| <i>dx</i> over [0, 2π].",
            "Substitute <i>u</i> = <i>x</i> − π/4. The window becomes [−π/4, 7π/4], still of length 2π, and a whole-period integral does not care where it starts.",
            "|sin <i>u</i>| has period π, so a window of length 2π holds exactly <b>two</b> full periods, each contributing 2.",
            "<i>A</i> = √2 × 2 × 2 = 4√2 ≈ 5.66. The brute-force route splits at π/4 and 5π/4 into three pieces of (√2 − 1), 2√2 and (1 + √2), which also sum to 4√2, in three times the work."
          ],
          "ans": "4√2 square units, in three lines rather than three integrals"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "Find <i>k</i> so that the line <i>y</i> = <i>k</i> divides the region {(<i>x</i>, <i>y</i>) : 0 ≤ <i>y</i> ≤ 4 − <i>x</i>²} into two parts of equal area.",
          "steps": [
            "Total first: <i>A</i> = ∫<sub>−2</sub><sup>2</sup>(4 − <i>x</i>²)<i>dx</i> = 2(8 − 8/3) = 32/3, so each half must be 16/3.",
            "Name the limits in terms of <i>k</i>: the line meets the parabola where 4 − <i>x</i>² = <i>k</i>, at <i>x</i> = ±<i>u</i> with <i>u</i> = √(4 − <i>k</i>).",
            "Cap above the line: ∫(4 − <i>x</i>² − <i>k</i>)<i>dx</i> from −<i>u</i> to <i>u</i> = 2[(4 − <i>k</i>)<i>u</i> − <i>u</i>³/3]. Since 4 − <i>k</i> = <i>u</i>², this collapses to 2(<i>u</i>³ − <i>u</i>³/3) = 4<i>u</i>³/3.",
            "Set 4<i>u</i>³/3 = 16/3, so <i>u</i>³ = 4 and <i>u</i> = ∛4. Then <i>k</i> = 4 − <i>u</i>² = 4 − ∛16 ≈ 1.48, which sits below the region's mean height 1.6, as a bottom-heavy region requires."
          ],
          "ans": "k = 4 − ∛16 ≈ 1.48"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "Among all lines <i>y</i> = <i>mx</i> + 3, find the one enclosing the least area with <i>y</i> = <i>x</i>², and find that area.",
          "steps": [
            "Intersect: <i>x</i>² = <i>mx</i> + 3, that is <i>x</i>² − <i>mx</i> − 3 = 0. Its discriminant <i>m</i>² + 12 is positive for every <i>m</i>, so there are always two roots and the region always closes.",
            "Do not write the roots out. Their gap is <i>L</i> = √(<i>m</i>² + 12), and the line is on top between them (test <i>x</i> = 0: the line gives 3, the parabola 0).",
            "By the root-gap lemma with <i>c</i> = −1 applied to line minus parabola, <i>A</i>(<i>m</i>) = <i>L</i>³/6.",
            "<i>L</i> is least when <i>m</i>² + 12 is least, that is at <b><i>m</i> = 0</b>, where <i>L</i> = √12 = 2√3 and <i>A</i> = (2√3)³/6 = 24√3/6 = 4√3 ≈ 6.93. Grinding out the two roots explicitly reaches the same place, slowly."
          ],
          "ans": "m = 0, with least area 4√3 square units"
        },
        {
          "t": "mcq",
          "q": "The area under <i>y</i> = |cos <i>x</i> − sin <i>x</i>| for 0 ≤ <i>x</i> ≤ π/2 is:",
          "correct": 2,
          "opts": [
            {
              "label": "0",
              "nudge": "That is what you get by integrating cos x − sin x straight across π/4 and ignoring the modulus. It is the deliberately planted answer in this exact question."
            },
            {
              "label": "√2 − 1",
              "nudge": "One piece only, the part left of the corner at π/4. The piece to its right has the same area, and both are positive."
            },
            { "label": "2√2 − 2", "nudge": null },
            {
              "label": "2",
              "nudge": "A rounding of 2√2 − 2 ≈ 0.83 to something tidier, or the area of a whole sine arch imported from a different question."
            }
          ],
          "solution": "The corner is where cos x = sin x, at x = π/4. Left of it cos leads, right of it sin does. Each piece integrates to √2 − 1, so the area is 2(√2 − 1) = 2√2 − 2 ≈ 0.83."
        },
        {
          "t": "mcq",
          "q": "The area under <i>y</i> = |cos <i>x</i>| for 0 ≤ <i>x</i> ≤ 3π/2 is:",
          "correct": 1,
          "opts": [
            {
              "label": "1",
              "nudge": "That is one half-period only, the piece from 0 to π/2. The interval holds three of them."
            },
            { "label": "3", "nudge": null },
            {
              "label": "6",
              "nudge": "This counts three <b>full</b> periods of |cos x| at 2 each. The interval 3π/2 is three half-periods, each worth 1, not three periods."
            },
            {
              "label": "0",
              "nudge": "The signed integral of cos x over [0, 3π/2] is −1, not 0, and in any case the modulus makes every strip positive."
            }
          ],
          "solution": "|cos x| repeats every π and each half-period [0, π/2] contributes ∫cos = 1. The interval 3π/2 holds three such pieces, so the area is 1 + 1 + 1 = 3."
        },
        {
          "t": "mcq",
          "q": "The area enclosed between <i>y</i> = sin 2<i>x</i> and <i>y</i> = sin <i>x</i> for 0 ≤ <i>x</i> ≤ π is:",
          "correct": 1,
          "opts": [
            {
              "label": "9/4",
              "nudge": "The larger piece only, from π/3 to π. The piece on [0, π/3] is a further 1/4, and the interior crossing is exactly what this question tests."
            },
            { "label": "5/2", "nudge": null },
            {
              "label": "1/4",
              "nudge": "The smaller piece only, from 0 to π/3. Both pieces count, and they are very different sizes."
            },
            {
              "label": "2",
              "nudge": "This drops the interior crossing at π/3 and integrates straight through, so the second stretch partly cancels the first."
            }
          ],
          "solution": "sin 2x = sin x gives sin x (2 cos x − 1) = 0, so x = 0, π/3, π. On (0, π/3) sin 2x is on top and the piece is 1/4; on (π/3, π) sin x is on top and the piece is 9/4. Total 5/2. Check: the area cannot exceed 2 + 2 = 4, and 5/2 sits comfortably inside."
        },
        {
          "t": "mcq",
          "q": "The area between <i>y</i> = <i>x</i> − <i>x</i>² and <i>y</i> = <i>mx</i> is 9/2. The value of <i>m</i> is:",
          "correct": 3,
          "opts": [
            {
              "label": "4 only",
              "nudge": "Half the answer. The area depends on |1 − m|³, and a modulus admits a solution on each side of m = 1."
            },
            {
              "label": "−2 only",
              "nudge": "The other half. |1 − m| = 3 has two solutions, and both are usually on the option list of the real paper."
            },
            {
              "label": "3 or −3",
              "nudge": "These are the values of 1 − m, not of m. Finish the last line: m = 1 − 3 = −2 and m = 1 + 3 = 4."
            },
            { "label": "−2 or 4", "nudge": null }
          ],
          "solution": "x − x² = mx gives x = 0 or x = 1 − m, so by the root-gap lemma the area is |1 − m|³/6. Setting that to 9/2 gives |1 − m|³ = 27, so |1 − m| = 3 and m = −2 or m = 4."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "Find the area bounded by <i>y</i> = sin <i>x</i> and the <i>x</i>-axis for 0 ≤ <i>x</i> ≤ 3π.",
              "a": "Three whole arches, each of area 2: <i>A</i> = 3 × 2 = <b>6</b> square units. The signed integral is 2, and it answers a different question."
            },
            {
              "q": "Find the area between <i>y</i> = |sin <i>x</i>| and <i>y</i> = |cos <i>x</i>| for 0 ≤ <i>x</i> ≤ π/2.",
              "a": "They cross at π/4, and the picture is symmetric about that point. <i>A</i> = 2∫(cos <i>x</i> − sin <i>x</i>)<i>dx</i> over [0, π/4] = <b>2(√2 − 1)</b> ≈ 0.83."
            },
            {
              "q": "Find the area enclosed between <i>y</i> = sin 2<i>x</i> and <i>y</i> = sin <i>x</i> for 0 ≤ <i>x</i> ≤ 2π.",
              "a": "Crossings at 0, π/3, π, 5π/3, 2π. The four pieces are 1/4, 9/4, 9/4 and 1/4, so <i>A</i> = <b>5</b>. On the third piece sin 2<i>x</i> is on top again, and on the fourth sin <i>x</i> is."
            },
            {
              "q": "Find a positive <i>a</i> such that the area bounded by <i>y</i> = <i>ax</i> − <i>x</i>² and the <i>x</i>-axis is 9/2.",
              "a": "Roots 0 and <i>a</i>, so by the root-gap lemma the area is <i>a</i>³/6. Setting <i>a</i>³/6 = 9/2 gives <i>a</i>³ = 27, so <i>a</i> = <b>3</b>."
            },
            {
              "q": "The line <i>y</i> = <i>c</i>, with <i>c</i> between 0 and 2, cuts |<i>x</i>| + |<i>y</i>| ≤ 2 into a lower and an upper part in the ratio 3 : 1. Find <i>c</i>.",
              "a": "The diamond has area 8, so the upper cap must be 2. That cap is a triangle with base 2(2 − <i>c</i>) and height 2 − <i>c</i>, of area (2 − <i>c</i>)². So (2 − <i>c</i>)² = 2 and <i>c</i> = <b>2 − √2</b> ≈ 0.586."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "Using 2π as the period of |sin <i>x</i>|. The modulus <b>halves</b> the period to π, so a window of length 2π holds two full periods and contributes 4, not 2. Every block count in the bank turns on this.",
            "Reporting the signed integral on a multi-arch interval. Over [0, 2π] the sine's two humps cancel to 0, and over [0, 5π/2] they cancel down to 1. Both are the deliberately planted options.",
            "Missing an interior crossing. sin 2<i>x</i> and sin <i>x</i> cross at π/3 inside [0, π]. Integrate straight through and the second stretch subtracts itself from the first; you get 2 instead of 5/2, with nothing to warn you.",
            "Substituting numbers too early in a reverse question. Write the limits as functions of the parameter, form <i>A</i>(<i>k</i>), and only then impose the condition. Plugging in a trial value first destroys the equation you were building.",
            "Reporting one root when the equation has two. |1 − <i>m</i>|³ = 27 gives <i>m</i> = −2 <b>and</b> <i>m</i> = 4, and both are usually printed as options. A cubic in a parameter that arrived through a modulus is a promise of two answers."
          ]
        },
        {
          "t": "protip",
          "html": "on any periodic area, do two things before integrating: find the <b>true</b> period, and try to collapse two curves into one with sin <i>x</i> − cos <i>x</i> = √2 sin(<i>x</i> − π/4). after that you are counting arches, not integrating them. and on a reverse question, resist writing the roots out: the root-gap lemma says the area depends only on the discriminant, which is why <i>m</i> = 0 is obviously the minimiser the moment you see (<i>m</i>² + 12)."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "one sine arch = 2 · |sin x| has period π", "note": "n half-periods contribute 2n, and only the remainder needs an integral" },
            { "f": "∫ over [a, a + T] is the same for every a", "note": "so slide an awkward window onto a convenient one" },
            { "f": "sin x − cos x = √2 sin(x − π/4)", "note": "two curves become one modulus sine of amplitude √2" },
            { "f": "∫ c(x − r₁)(x − r₂) dx over [r₁, r₂] = −c L³/6", "note": "L is the root gap; the area forgets where the roots are" },
            { "f": "line vs parabola: A = L³/6, L = √(discriminant)", "note": "minimise the discriminant, not the antiderivative" }
          ],
          "aids": [
            "“count the arches, integrate only the leftover”",
            "“a modulus in a parameter equation means two answers, not one”"
          ]
        }
      ]
    }
  ]
};

export default ch12IntegralsApplications;
