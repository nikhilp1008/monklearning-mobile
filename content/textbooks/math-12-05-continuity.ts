/**
 * Chapter 05 · Continuity and Differentiability, Mathematics, Class 12.
 *
 * Restructured from the Drona Class 12 Mathematics Master Reference (pages 273
 * to 348) into the block system in design_handoff_textbooks/CONTENT_SPEC.md,
 * matching the voice and density of math-12-01-relations.ts.
 *
 * The source is two documents stacked: a typeset chapter of seven subtopics
 * (pages 274 to 320) and a Round 2 Addendum of six inserts (pages 321 to 348):
 * A standard limits, B differentiating through moduli, C functional equations,
 * D Cauchy's Mean Value Theorem and root counting, E greatest-integer
 * compositions, P a previous-year analysis. Six topics is the schema's
 * ceiling, so the addenda are folded into the topic they belong to rather than
 * given topics of their own. Addendum P is not a topic either: its
 * distribution table feeds the hook, its seven archetypes feed the worked
 * examples, and its ten engineered traps feed the `mistakes` cards.
 *
 * WHAT CLASS 11 ALREADY TEACHES, AND IS THEREFORE NOT RE-TAUGHT HERE
 *
 * 1. Subtopic 02, "The Differentiation Toolkit", is dropped. Every standard
 *    derivative, the sum, constant-multiple, product and quotient rules, the
 *    first-principle proof of d/dx sin x and the derivation of the quotient
 *    rule from the product rule are all in math-11-12-limits.ts, topic 05
 *    ("Rules of Differentiation"), with topic 04 carrying the standard-
 *    derivative table and the first-principle drill. The one thing in
 *    Subtopic 02 that Class 11 does not have is the ALGEBRA OF CONTINUOUS
 *    FUNCTIONS, which is the entire reason only junctions need testing; it is
 *    folded into topic 01 here as a defgrid.
 *
 * 2. Subtopic 03, "The Chain Rule", is not given a topic. math-11-12-limits.ts
 *    topic 05 already states it, states the power chain, gives the
 *    rate-multiplying reason, and says so in its own note ("The chain rule
 *    formally sits in the Class 12 syllabus, but every JEE course teaches it
 *    in Class 11"). What survives is the part Class 11 never asks for: deep
 *    nesting with the one-factor-per-layer count, and the two differentiability
 *    conditions on the links. That is folded into topic 03 as the run-up to
 *    implicit differentiation, which is the first place the chain rule does
 *    work no other rule can.
 *
 * 3. Addendum A, the six standard limits, is quoted rather than derived. All
 *    six live in math-11-12-limits.ts topic 03 ("The Standard Limits"),
 *    including the sandwich proof of sin x / x and the half in
 *    (1 − cos x)/x². They appear here as one defgrid of known stock, and the
 *    space goes to what the addendum is actually for: routing a junction limit
 *    into them to find the constant k.
 *
 * 4. Addendum C's "differentiable shortcut" (f(x + y) = f(x) f(y) with f
 *    differentiable at 0 gives f′ = f′(0) f) is math-11-12-limits.ts topic 04,
 *    defgrid "Functional equations, where the rules have nothing to act on",
 *    with the same four equations and the same worked example. Not repeated.
 *
 * A CLASS 11 GAP THIS CHAPTER FILLS
 *
 * Class 11 propagates a DERIVATIVE from one point using a functional equation.
 * It never propagates CONTINUITY. Addendum C's Theorem C.1, that an additive
 * function continuous at a single point is continuous everywhere and therefore
 * linear, is genuinely new, and it is the reason the JEE phrasing "continuous
 * at exactly one point" is not a typo. It is built in topic 01.
 *
 * Class 11 also draws |x| as a corner. It is drawn again here, because in
 * Class 12 it carries the whole weight of the one-way bridge, and this time
 * the two disagreeing one-sided tangents are actually on the page rather than
 * named in a label.
 *
 * FIGURES
 *
 * Eight `diagram` blocks, all `plot`. Three species of discontinuity (topic
 * 01); where the derivative dies, which is |x| with its two tangent rays, the
 * source's own Figure 5.1 corner at (2, 4), and a vertical tangent (topic 02);
 * the floor of a curve, where a minimum on an integer level is harmless and a
 * maximum on it is fatal (topic 02); the circle x² + y² = 25 with its slope
 * −x/y and its vertical tangent (topic 03); sin inverse of sin t as a triangle
 * wave, which is the principal-range trap drawn (topic 04); the parametric
 * parabola x = at², y = 2at (topic 05); concavity from the sign of y″ and the
 * two Mean Value Theorems (topic 06).
 *
 * ONE FIGURE DROPPED. The source's meshing-gears picture for the chain rule
 * (three shafts and their gear ratios, page 290) needs a mechanical schematic.
 * None of the implemented kinds (plot, numberline, unitcircle, tree, pascal,
 * axes3d) can draw it and no new kind may be added, so the gears survive in
 * prose only.
 *
 * ERRATA (source pages 830 to 832): the list carries entries for chapters 1, 3
 * and 11 and NONE for chapter 5. Nothing to apply.
 *
 * ERRORS FOUND BY RE-SOLVING (the corrected version is what this chapter
 * teaches; the printed one is not reproduced anywhere):
 *
 *   - Page 326, Addendum B, Lemma B.3: "In general, |x|ⁿ is differentiable
 *     exactly n − 1 times at the origin." False for even n, and contradicted
 *     four lines above it by the source's own n = 2 bullet, which correctly
 *     says |x|² = x² is a polynomial and infinitely differentiable. The rule
 *     holds for ODD n only: |x|³ is twice differentiable and not three times
 *     (its second derivative is 6|x|, which has a corner), while |x|⁴ = x⁴ is
 *     smooth to every order. Topic 02 states the odd-n restriction.
 *
 *   - Page 319, Subtopic 07, MCQ Q2 distractor gloss: for f(x) = x² on [1, 3]
 *     the keyed answer c = 2 is correct, but the gloss on option (d) 1.5 reads
 *     "is the arithmetic midpoint (1+3)/2, which is not what MVT delivers for a
 *     parabola". Both halves are wrong. (1 + 3)/2 = 2, not 1.5. And for
 *     f(x) = x² the Mean Value point IS always the midpoint, because
 *     2c = (b² − a²)/(b − a) = a + b. So the gloss denies the very fact that
 *     makes the keyed answer right. Topic 06 teaches the midpoint result and
 *     reads 1.5 for what it actually is, the midpoint of [1, 2].
 *
 *   - Page 342, Addendum P, Archetype 4: for y = sin⁻¹(2x/(1 + x²)), "At
 *     x = ±1 derivative does not exist (cusp)." It is a CORNER, not a cusp.
 *     The one-sided derivatives at x = 1 are +2/(1 + x²) = +1 and
 *     −2/(1 + x²) = −1, both finite, and page 275 of the same book defines a
 *     cusp as a point "where the slope blows up to infinity". The source
 *     contradicts its own definition. Topic 04 says corner.
 *
 * PRODUCTION DAMAGE, RE-AUTHORED RATHER THAN GUESSED:
 *
 *   - Page 281, Subtopic 01, Practice answers: the answer to Q1 is missing
 *     from the answer line, which reads "Answers: 1. 2. continuous (LHL = RHL
 *     = 0 = f(5))…", with a stray "=1" left stranded at the foot of the page.
 *     Re-solved: for f(x) = ax + 5 on x ≤ 3 and x² − 1 on x > 3, continuity at
 *     3 needs 3a + 5 = 8, so a = 1, which the stranded fragment confirms. That
 *     is the answer carried in topic 01's practice card.
 *   - Throughout the extracted text the minus sign arrives as an escape
 *     sequence and colons in "f : [a, b] → ℝ" arrive as control characters.
 *     Cosmetic only; every affected expression was re-read from context.
 *
 * TWO NOTES FOR WHOEVER EDITS THE FIGURES. Chips and captions render as plain
 * text, so they carry no inline tags. And the first curve of a frame is drawn
 * in ink and every later one in amber unless it is `soft`, so the order of
 * `curves` decides which curve the eye reads first.
 */
import type { Chapter } from '@/lib/textbooks';

export const ch12Continuity: Chapter = {
  "chapter": "05",
  "title": "Continuity and Differentiability",
  "subject": "Mathematics",
  "klass": "Class 12",
  "topics": [
    {
      "n": "01",
      "title": "Continuity: The Three-Part Test",
      "chip": "01 UNBROKEN",
      "kalam": "three things must agree, not two",
      "blocks": [
        {
          "t": "hook",
          "html": "<b>01 · Continuity: The Three-Part Test</b><br>The bedrock, so it pays everywhere. CBSE Boards carry a 1 to 4 mark question almost every year: check continuity at a point, or find the constant that makes a piecewise function continuous. JEE Main reliably asks 1 to 2 questions on piecewise, modulus or greatest-integer functions, and continuity of piecewise functions is the <b>single largest block</b> in the 43-year bank, roughly 25 to 30 of about 140 questions. JEE Advanced pushes into functional equations and functions built to misbehave. Not in NEET, the medical paper has no mathematics section.<br><br><b>02 · Differentiability, and Counting Where It Fails</b><br>20 to 25 questions in the bank and present in every decade without exception. CBSE examines differentiability at a join for 2 to 4 marks. JEE Main's favourite phrasing is <b>“at how many points”</b>, applied to a modulus or greatest-integer expression, which is a counting question wearing a calculus hat. JEE Advanced asks the subtle version: a function that is differentiable everywhere and whose derivative is not even continuous.<br><br><b>03 · The Chain Rule and Implicit Differentiation</b><br>A guaranteed scorer. CBSE asks for <i>dy</i>/<i>dx</i> of a relation like <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> = <i>a</i><sup>2</sup> or sin(<i>xy</i>) = <i>x</i> for 2 to 4 marks. Composite-function questions are 15 to 20 of the bank and implicit ones another 5 to 8, and JEE Advanced pushes implicit into second derivatives and curve-tangent problems.<br><br><b>04 · Inverse Trigonometric Derivatives</b><br>10 to 12 of the bank, and one of the highest-yield areas for JEE. CBSE asks direct derivatives plus one simplify-by-substitution problem for 3 to 4 marks. JEE Advanced routinely penalises an answer that ignores the principal range, because outside it the simplification changes and <b>the sign of the derivative flips</b>.<br><br><b>05 · Logarithmic and Parametric Differentiation</b><br>Two reliable mark-earners. CBSE almost always includes a logarithmic sum, a variable power or a large product, and frequently a parametric <i>dy</i>/<i>dx</i>, typically 2 to 4 marks each. The bank holds 8 to 10 logarithmic and 10 to 12 parametric questions. The <b>parametric second-derivative ratio</b> is the most-tested single error in the chapter.<br><br><b>06 · Second Derivatives and the Mean Value Theorems</b><br>A dependable scoring zone. CBSE almost always carries a second-order relation to prove, such as <i>y</i>″ + <i>n</i><sup>2</sup><i>y</i> = 0, plus frequently a “verify Rolle” question. 12 to 15 second-derivative questions and 10 to 12 Mean Value questions sit in the bank. JEE Advanced does not verify these theorems, it <b>uses</b> them, to prove inequalities and to bound how many roots an equation can have."
        },
        {
          "t": "p",
          "html": "You are on a Mumbai local and the track runs out ahead of you, rail joined to rail with no gaps. The train glides. Now pull one rail out of the line. The train cannot cross that point without a jolt or a full stop, and no amount of speed helps. That missing rail is a <b>discontinuity</b>. At the crudest level, continuity means you can draw the graph through the point <b>without lifting your pen off the paper</b>: no jumps, no holes, no teleportation."
        },
        {
          "t": "p",
          "html": "That sentence will not earn a mark, because an examiner cannot grade a pen. So make it precise. For <i>f</i> to be continuous at <i>x</i> = <i>c</i>, <b>three separate things must all be true and must all agree</b>. First, <i>f</i>(<i>c</i>) must exist. Second, lim<sub>x→c</sub> <i>f</i>(<i>x</i>) must exist, which itself needs the approach from the left and the approach from the right to land on the same number. Third, those two must be <b>the same</b>. Class 11 built the middle one for you and stopped there. Everything Class 12 does here starts from the third."
        },
        {
          "t": "think",
          "html": "walk toward the point from the left, then walk toward it from the right. continuity wants both walks to end at the same dot, and it wants that dot to be actually painted on the graph. two walks, one dot, and the dot is there. lose any one of the three and the function snaps."
        },
        {
          "t": "def",
          "term": "Continuity at a point",
          "html": "<i>f</i> is <b>continuous at <i>x</i> = <i>c</i></b> when lim<sub>x→c</sub> <i>f</i>(<i>x</i>) = <i>f</i>(<i>c</i>), which unpacks into LHL = RHL = <i>f</i>(<i>c</i>), all three existing and all three equal. On an <b>interval</b>: <i>f</i> is continuous on the open (<i>a</i>, <i>b</i>) when it is continuous at every interior point, and on the closed [<i>a</i>, <i>b</i>] when additionally lim<sub>x→a+</sub> <i>f</i>(<i>x</i>) = <i>f</i>(<i>a</i>) and lim<sub>x→b−</sub> <i>f</i>(<i>x</i>) = <i>f</i>(<i>b</i>). Endpoints get <b>one-sided</b> continuity only, because you can only reach an endpoint from inside."
        },
        {
          "t": "formula",
          "kicker": "THE THREE-PART TEST",
          "tag": "writing h for a small positive number",
          "main": "LHL = RHL = f(c)",
          "legend": [
            "LHL = lim<sub>h→0+</sub> <i>f</i>(<i>c</i> − <i>h</i>) · RHL = lim<sub>h→0+</sub> <i>f</i>(<i>c</i> + <i>h</i>) · <i>f</i>(<i>c</i>) is the value actually printed at the point",
            "three quantities, so <b>three</b> ways to fail: no <i>f</i>(<i>c</i>), no agreement between the two sides, or agreement that misses <i>f</i>(<i>c</i>)"
          ],
          "note": "Order of work: compute f(c) first. If the function is not even defined at c, stop. Nothing else can rescue it."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · THREE WAYS A GRAPH BREAKS, TAP ONE",
          "chips": ["removable", "jump", "infinite"],
          "captions": [
            "The mildest break. The two sides agree perfectly, both heading for 2, so the limit exists. But the value printed at x = 1 sits somewhere else entirely. One hollow dot and one misplaced filled dot. This is the only species you can repair, and repairing it means one thing: redefine f(1) to be 2, the number the limit already chose.",
            "A jump. Here the two walks land at different heights, 7 from the left and 3 from the right, so the limit itself does not exist and there is nothing to repair. This is the source's own Example 1 with the wrong constant: fix the constant and the open dot slides up to close the gap. That is what every find-the-value-of-k question is really asking you to do.",
            "An infinite break, drawn on y = 1/x. Neither side settles anywhere, they run off in opposite directions, and the dashed vertical line is the asymptote they run along. There is no finite limit and no value at x = 0 either, so this fails all three parts of the test at once."
          ],
          "frames": [
            {
              "x": [-1, 3],
              "y": [-1, 4],
              "curves": [{ "c": "line", "m": 1, "k": 1 }],
              "points": [
                { "x": 1, "y": 2, "open": true },
                { "x": 1, "y": 0.5 }
              ],
              "labels": [
                { "x": 2.1, "y": 2.7, "text": "limit is 2", "soft": true },
                { "x": 2.1, "y": 0.5, "text": "but f(1) is here", "soft": true }
              ]
            },
            {
              "x": [0, 4],
              "y": [0, 9],
              "segments": [
                { "from": [0, 3], "to": [2, 7] },
                { "from": [2, 3], "to": [4, 7] }
              ],
              "points": [
                { "x": 2, "y": 7 },
                { "x": 2, "y": 3, "open": true }
              ],
              "labels": [
                { "x": 0.9, "y": 8, "text": "LHL = 7", "soft": true },
                { "x": 3.2, "y": 1.4, "text": "RHL = 3", "soft": true }
              ]
            },
            {
              "x": [-4, 4],
              "y": [-4, 4],
              "curves": [
                { "c": "recip" },
                { "c": "vline", "x": 0, "dash": true, "soft": true }
              ],
              "labels": [{ "x": 2.3, "y": 3.4, "text": "no finite limit", "soft": true }]
            }
          ]
        },
        {
          "t": "defgrid",
          "title": "Naming the break, and whether it can be mended",
          "rows": [
            {
              "k": "Removable",
              "v": "LHL = RHL ≠ <i>f</i>(<i>c</i>), or <i>f</i>(<i>c</i>) undefined. <b>Mendable</b>: redefine <i>f</i>(<i>c</i>) as the common limit"
            },
            {
              "k": "Jump",
              "v": "LHL ≠ RHL, both finite. <b>Not mendable</b>: no single number can be both"
            },
            {
              "k": "Infinite",
              "v": "one side or both run to ±∞. The limit is not finite, so the test fails whatever <i>f</i>(<i>c</i>) says"
            },
            {
              "k": "Oscillatory",
              "v": "neither side settles, as sin(1/<i>x</i>) does at 0. No limit, so no repair"
            },
            {
              "k": "What “find <i>k</i>” means",
              "v": "the examiner has planted a <b>removable</b> break and is asking you to mend it. The answer is always one number"
            }
          ]
        },
        {
          "t": "proc",
          "title": "Checking continuity at a point c",
          "steps": [
            "<b>Compute <i>f</i>(<i>c</i>) first.</b> Read the inequalities carefully: whichever piece carries the equality sign owns the value at the junction. If no piece is defined at <i>c</i>, the function cannot be continuous there and you stop.",
            "<b>LHL: substitute <i>x</i> = <i>c</i> − <i>h</i> and let <i>h</i> → 0<sup>+</sup>.</b> Use the formula for the piece to the <b>left</b>. Writing it with <i>h</i> rather than as <i>x</i> → <i>c</i><sup>−</sup> stops you from picking the wrong piece, which is the commonest slip on the whole procedure.",
            "<b>RHL: substitute <i>x</i> = <i>c</i> + <i>h</i> and let <i>h</i> → 0<sup>+</sup></b>, using the piece to the <b>right</b>.",
            "<b>Compare all three.</b> Equal on all three counts, and the function is continuous. LHL ≠ RHL is a jump. LHL = RHL ≠ <i>f</i>(<i>c</i>) is a removable hole. Say <b>which</b>, not merely “discontinuous”: examiners award the classification.",
            "<b>If the question supplies an unknown, turn the comparison into an equation.</b> One junction gives one equation and therefore one constant. Two unknowns in a continuity-only question means either two junctions or a second condition hiding elsewhere in the wording."
          ]
        },
        {
          "t": "p",
          "html": "Now the labour-saving theorem, and it saves more labour than anything else in the chapter. If <i>f</i> and <i>g</i> are continuous at <i>c</i>, then so are <i>f</i> + <i>g</i>, <i>f</i> − <i>g</i>, <i>kf</i>, <i>fg</i>, and <i>f</i>/<i>g</i> wherever <i>g</i>(<i>c</i>) ≠ 0, and so is the composite <i>f</i>(<i>g</i>(<i>x</i>)). Polynomials, sin <i>x</i>, cos <i>x</i>, <i>e</i><sup>x</sup> and every sensible combination of them are therefore continuous wherever they are defined, for free, with no checking at all. <b>That is exactly why a piecewise question only ever needs its junctions tested.</b> The smooth interiors were settled before you picked up the pen."
        },
        {
          "t": "defgrid",
          "title": "The algebra of continuous functions",
          "rows": [
            {
              "k": "Sum, difference, multiple",
              "v": "<i>f</i> ± <i>g</i> and <i>kf</i> are continuous at <i>c</i>. No conditions"
            },
            {
              "k": "Product",
              "v": "<i>fg</i> is continuous at <i>c</i>. No conditions"
            },
            {
              "k": "Quotient",
              "v": "<i>f</i>/<i>g</i> is continuous at <i>c</i> <b>provided <i>g</i>(<i>c</i>) ≠ 0</b>. The word “always” makes this statement false, and that is an examined MCQ"
            },
            {
              "k": "Composite",
              "v": "<i>f</i> ∘ <i>g</i> is continuous at <i>c</i> if <i>g</i> is continuous at <i>c</i> <b>and</b> <i>f</i> is continuous at <i>g</i>(<i>c</i>). Two conditions, at two different points"
            },
            {
              "k": "The payoff",
              "v": "test <b>junctions only</b>, plus any point where a piece is individually undefined. Never the interiors"
            }
          ]
        },
        {
          "t": "defgrid",
          "title": "The standard limits, already yours from Class 11",
          "rows": [
            {
              "k": "sin <i>x</i> / <i>x</i> → 1",
              "v": "(1 − cos <i>x</i>)/<i>x</i><sup>2</sup> → ½ · both as <i>x</i> → 0, both proved by the sandwich in Class 11"
            },
            {
              "k": "(<i>e</i><sup>x</sup> − 1)/<i>x</i> → 1",
              "v": "ln(1 + <i>x</i>)/<i>x</i> → 1 · (<i>a</i><sup>x</sup> − 1)/<i>x</i> → ln <i>a</i>"
            },
            {
              "k": "((1 + <i>x</i>)<sup>n</sup> − 1)/<i>x</i> → <i>n</i>",
              "v": "true for every real <i>n</i>, not only integers"
            },
            {
              "k": "The one principle",
              "v": "every one of them is a difference quotient in disguise: [<i>f</i>(<i>a</i> + <i>h</i>) − <i>f</i>(<i>a</i>)]/<i>h</i> is just <i>f</i>′(<i>a</i>), evaluated at a chosen point"
            },
            {
              "k": "Match the argument",
              "v": "sin 5<i>x</i>/(3<i>x</i>) is (5/3)·(sin 5<i>x</i>/5<i>x</i>). <b>Force the denominator to equal the argument</b>, then fix the constant"
            },
            {
              "k": "Shifting the centre",
              "v": "for a junction away from 0, substitute <i>u</i> = <i>x</i> − <i>c</i> so that <i>u</i> → 0 and the stock applies again"
            }
          ]
        },
        {
          "t": "proc",
          "title": "Finding the constant that closes a junction",
          "steps": [
            "<b>Identify the junction and which piece owns it.</b> The piece carrying ≤ or ≥ supplies <i>f</i>(<i>c</i>).",
            "<b>Evaluate the side that is easy.</b> A polynomial or rational piece is continuous, so its one-sided limit is just substitution. That side gives you a number.",
            "<b>Evaluate the side that is a 0/0 quotient</b> by routing it through the standard limits: split off factors, force each argument to match its denominator, and multiply back the constant you borrowed. Rationalise a surd numerator before you do anything else.",
            "<b>Set the two equal to <i>f</i>(<i>c</i>) and solve.</b> One equation, one unknown, one answer.",
            "<b>Sanity-check numerically.</b> Put a value like <i>x</i> = 0.001 into the awkward piece and see whether it is drifting toward your answer. Thirty seconds, and it catches a dropped constant every time."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Find <i>k</i> so that <i>f</i> is continuous at <i>x</i> = 2, where <i>f</i>(<i>x</i>) = 2<i>x</i> + 3 for <i>x</i> ≤ 2 and <i>f</i>(<i>x</i>) = <i>kx</i> − 1 for <i>x</i> > 2.",
          "steps": [
            "Value at the point. The first piece carries the equality sign, so <i>f</i>(2) = 2(2) + 3 = 7.",
            "LHL uses the same first piece: lim<sub>x→2−</sub> (2<i>x</i> + 3) = 7. It agrees with <i>f</i>(2) automatically, as it must, since that piece is a polynomial.",
            "RHL uses the second piece: lim<sub>x→2+</sub> (<i>kx</i> − 1) = 2<i>k</i> − 1.",
            "Impose the test: 2<i>k</i> − 1 = 7, so 2<i>k</i> = 8. One junction, one equation, one constant."
          ],
          "ans": "k = 4"
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Find <i>k</i> so that <i>f</i> is continuous at 0, where <i>f</i>(<i>x</i>) = (√(1 + <i>kx</i>) − √(1 − <i>kx</i>))/<i>x</i> for −1 ≤ <i>x</i> < 0 and <i>f</i>(<i>x</i>) = (2<i>x</i> + 1)/(<i>x</i> − 2) for 0 ≤ <i>x</i> ≤ 1.",
          "steps": [
            "RHL is free: the second piece is rational and its denominator is −2 at <i>x</i> = 0, so substitute. RHL = 1/(−2) = −½, and this piece owns the point, so <i>f</i>(0) = −½ too.",
            "LHL substitutes to 0/0, and a surd is blocking. Rationalise the numerator: multiply top and bottom by √(1 + <i>kx</i>) + √(1 − <i>kx</i>).",
            "The numerator becomes (1 + <i>kx</i>) − (1 − <i>kx</i>) = 2<i>kx</i>, which cancels the <i>x</i> below and leaves 2<i>k</i>/(√(1 + <i>kx</i>) + √(1 − <i>kx</i>)).",
            "Now substitute safely: the denominator tends to 1 + 1 = 2, so LHL = <i>k</i>. Set <i>k</i> = −½. Check at <i>x</i> = −0.01: the piece reads (√1.005 − √0.995)/(−0.01) ≈ 0.0050/(−0.01) = −0.50."
          ],
          "ans": "k = −1/2"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Find <i>k</i> so that <i>f</i>(<i>x</i>) = (<i>e</i><sup>3x</sup> − 1)/ln(1 + 2<i>x</i>) for <i>x</i> ≠ 0, with <i>f</i>(0) = <i>k</i>, is continuous at 0.",
          "steps": [
            "Substitution gives 0/0, so route each half into a standard limit. Split the fraction so that every argument matches its own denominator.",
            "Write it as [(<i>e</i><sup>3x</sup> − 1)/3<i>x</i>] · [2<i>x</i>/ln(1 + 2<i>x</i>)] · (3<i>x</i>/2<i>x</i>). Nothing has changed, the borrowed 3<i>x</i> and 2<i>x</i> cancel.",
            "The first bracket → 1, the second → 1, and the third is the constant 3/2. So the limit is 3/2 and continuity forces <i>k</i> = 3/2.",
            "Check at <i>x</i> = 0.001: <i>e</i><sup>0.003</sup> − 1 ≈ 0.0030045 and ln(1.002) ≈ 0.001998, giving 1.5037, drifting down to 1.5."
          ],
          "ans": "k = 3/2"
        },
        {
          "t": "mcq",
          "q": "The greatest integer function <i>f</i>(<i>x</i>) = ⌊<i>x</i>⌋ is discontinuous at how many points in the interval (0, 3)?",
          "correct": 2,
          "opts": [
            {
              "label": "0",
              "nudge": "Defined everywhere is not the same as continuous. ⌊<i>x</i>⌋ has a value at every real number and still jumps by 1 at every integer."
            },
            {
              "label": "1",
              "nudge": "One integer found and one missed. Both 1 and 2 lie strictly inside (0, 3)."
            },
            { "label": "2", "nudge": null },
            {
              "label": "3",
              "nudge": "Endpoint over-counting, the designed trap. The interval is open, so <i>x</i> = 3 is not in it at all and cannot contribute."
            }
          ],
          "solution": "⌊x⌋ jumps at every integer, so the discontinuities inside an interval are exactly the integers inside it. In (0, 3) those are 1 and 2. Neither 0 nor 3 belongs to an open interval, so neither counts. Two points."
        },
        {
          "t": "mcq",
          "q": "Which statement about continuity is <b>false</b>?",
          "correct": 2,
          "opts": [
            {
              "label": "The sum of two continuous functions is continuous",
              "nudge": "True, and unconditionally so. The question asks for the one that is false, which is the statement carrying the word “always”."
            },
            {
              "label": "The product of two continuous functions is continuous",
              "nudge": "True, and unconditionally so. Products never need a side condition; quotients do."
            },
            { "label": "The quotient of two continuous functions is always continuous", "nudge": null },
            {
              "label": "The composite of continuous functions is continuous",
              "nudge": "True, given the two conditions the algebra states: <i>g</i> continuous at <i>c</i> and <i>f</i> continuous at <i>g</i>(<i>c</i>). Nothing here is false."
            }
          ],
          "solution": "A quotient is continuous only where the denominator is non-zero. Both 1 and x are continuous everywhere, yet 1/x fails at x = 0 because it is not even defined there. The word always is what makes the statement false, and dropping the g(c) ≠ 0 condition is the standard slip."
        },
        {
          "t": "mcq",
          "q": "<i>f</i>(<i>x</i>) = <i>kx</i> + 3 for <i>x</i> ≤ 2 and <i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> − 1 for <i>x</i> > 2 is continuous at <i>x</i> = 2 when <i>k</i> equals:",
          "correct": 0,
          "opts": [
            { "label": "0", "nudge": null },
            {
              "label": "3",
              "nudge": "That solves 2<i>k</i> + 3 = 9, which reads the right piece as <i>x</i><sup>2</sup> and drops the −1."
            },
            {
              "label": "−1",
              "nudge": "That solves 2<i>k</i> + 3 = 1, which evaluates the right piece at <i>x</i> = 1 instead of at the junction <i>x</i> = 2."
            },
            {
              "label": "2",
              "nudge": "The junction value, not the constant. With <i>k</i> = 2 the LHL is 7 while the RHL is 3, a jump of four."
            }
          ],
          "solution": "The left piece owns the point, so f(2) = 2k + 3 and LHL = 2k + 3. RHL = 2² − 1 = 3. Continuity needs 2k + 3 = 3, so k = 0, and the left piece is the constant 3 on its whole side. A zero answer is legitimate and is examined."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Find <i>a</i> so that <i>f</i>(<i>x</i>) = <i>ax</i> + 5 for <i>x</i> ≤ 3 and <i>x</i><sup>2</sup> − 1 for <i>x</i> > 3 is continuous at <i>x</i> = 3.",
              "a": "<i>f</i>(3) = LHL = 3<i>a</i> + 5 and RHL = 9 − 1 = 8, so 3<i>a</i> + 5 = 8 and <b><i>a</i> = 1</b>."
            },
            {
              "q": "[CBSE] Find <i>k</i> so that <i>f</i>(<i>x</i>) = sin 5<i>x</i> / 3<i>x</i> for <i>x</i> ≠ 0 and <i>f</i>(0) = <i>k</i> is continuous at 0.",
              "a": "Force the argument to match: sin 5<i>x</i>/3<i>x</i> = (5/3)(sin 5<i>x</i>/5<i>x</i>) → 5/3. So <b><i>k</i> = 5/3</b>, not 1."
            },
            {
              "q": "[JEE Main] How many points of discontinuity does ⌊<i>x</i>⌋ have in (−2, 3)?",
              "a": "The integers strictly inside are −1, 0, 1 and 2. <b>4 points.</b> The ends −2 and 3 are excluded."
            },
            {
              "q": "[JEE Advanced] Find <i>k</i> making <i>f</i>(<i>x</i>) = (1 − cos <i>x</i>)/<i>x</i><sup>2</sup> for <i>x</i> ≠ 0, <i>f</i>(0) = <i>k</i>, continuous at 0. Is it then differentiable there?",
              "a": "The standard limit gives <b><i>k</i> = ½</b>. For differentiability, [<i>f</i>(<i>h</i>) − ½]/<i>h</i>: since (1 − cos <i>h</i>)/<i>h</i><sup>2</sup> = ½ − <i>h</i><sup>2</sup>/24 + …, the quotient is −<i>h</i>/24 → 0. <b>Yes, with <i>f</i>′(0) = 0.</b>"
            },
            {
              "q": "[JEE Main] <i>f</i> satisfies <i>f</i>(<i>x</i> + <i>y</i>) = <i>f</i>(<i>x</i>) + <i>f</i>(<i>y</i>) for all reals and is continuous. If <i>f</i>(1) = 7, find <i>f</i>(2024) and <i>f</i>(−3).",
              "a": "Additive plus continuous forces <i>f</i>(<i>x</i>) = 7<i>x</i>. So <b><i>f</i>(2024) = 14168</b> and <b><i>f</i>(−3) = −21</b>."
            }
          ]
        },
        {
          "t": "p",
          "html": "One Class 12 result deserves its own paragraph, because JEE Advanced builds whole questions on it and it looks like a typo the first time you meet it. Suppose <i>f</i> satisfies <b><i>f</i>(<i>x</i> + <i>y</i>) = <i>f</i>(<i>x</i>) + <i>f</i>(<i>y</i>)</b> for <b>all</b> reals, and you are told only that <i>f</i> is continuous <b>at one single point</b>. That one crumb is enough to force continuity everywhere, and then to force <i>f</i>(<i>x</i>) = <i>cx</i> with <i>c</i> = <i>f</i>(1). Class 11 propagated a <i>derivative</i> from a point this way; propagating <b>continuity</b> is the new move, and the hypothesis really cannot be dropped: without it there exist additive functions that are discontinuous at every real number."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · ONE POINT OF CONTINUITY SPREADS TO ALL OF ℝ, TAP A LINE",
          "steps": [
            {
              "eq": "x = y = 0 gives f(0) = f(0) + f(0), so f(0) = 0",
              "why": "The cheapest possible substitution, and it anchors everything that follows. Every additive function sends 0 to 0, with no hypotheses needed at all: this step does not use continuity."
            },
            {
              "eq": "f(x₀ + h) − f(x₀) = f(h), so f(h) → 0 = f(0)",
              "why": "Here the single point earns its keep. Continuity at x₀ says the left side tends to 0 as h tends to 0. But the functional equation says the left side IS f(h). So f(h) tends to 0, which is exactly continuity at 0. The point of continuity has moved to the origin for free."
            },
            {
              "eq": "f(x + h) = f(x) + f(h) → f(x) + 0",
              "why": "Now fix any real x at all. The same equation splits f(x + h) into a constant piece and f(h), and the second piece has just been shown to vanish. So f is continuous at x, and x was arbitrary. Continuity has spread from one point to the whole line."
            },
            {
              "eq": "f(m/n) = (m/n) f(1), then rationals are dense",
              "why": "Induction gives f(n) = n f(1) for positive integers, and f(n) + f(−n) = f(0) = 0 handles the negatives. Writing 1 as n copies of 1/n gives f(1/n) = f(1)/n, so f is linear on every rational. Any real is a limit of rationals, and continuity carries the formula across: f(x) = cx with c = f(1)."
            }
          ]
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "<i>f</i>(<i>x</i> + <i>y</i>) = <i>f</i>(<i>x</i>) + <i>f</i>(<i>y</i>) for all reals, <i>f</i> is continuous at 0, and <i>f</i>(2) = 10. Find <i>f</i>(<i>x</i>), <i>f</i>(−5), and lim<sub>h→0</sub> [<i>f</i>(3 + <i>h</i>) − <i>f</i>(3)]/<i>h</i>.",
          "steps": [
            "Additive and continuous at one point, so the theorem applies: <i>f</i>(<i>x</i>) = <i>cx</i> for some constant.",
            "Pin the constant with the data given: <i>f</i>(2) = 2<i>c</i> = 10, so <i>c</i> = 5 and <i>f</i>(<i>x</i>) = 5<i>x</i>.",
            "Then <i>f</i>(−5) = −25. Notice you never needed a formula for <i>f</i> to start with; the equation manufactured one.",
            "The limit is the honest derivative of the line 5<i>x</i> at <i>x</i> = 3, which is 5. Once the explicit form is out, every calculus question about <i>f</i> becomes trivial."
          ],
          "ans": "f(x) = 5x · f(−5) = −25 · the limit is 5"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "<i>f</i> : (0, ∞) → ℝ satisfies <i>f</i>(<i>xy</i>) = <i>f</i>(<i>x</i>) + <i>f</i>(<i>y</i>) for all positive <i>x</i>, <i>y</i>, is continuous at 1, and <i>f</i>(<i>e</i>) = 1. Find <i>f</i>.",
          "steps": [
            "The equation is additive in the wrong variable: it turns products into sums, not sums into sums. So change coordinates to make it additive.",
            "Set <i>g</i>(<i>t</i>) = <i>f</i>(<i>e</i><sup>t</sup>) for real <i>t</i>. Then <i>g</i>(<i>s</i> + <i>t</i>) = <i>f</i>(<i>e</i><sup>s</sup><i>e</i><sup>t</sup>) = <i>f</i>(<i>e</i><sup>s</sup>) + <i>f</i>(<i>e</i><sup>t</sup>) = <i>g</i>(<i>s</i>) + <i>g</i>(<i>t</i>): plain Cauchy.",
            "<i>g</i> is continuous at <i>t</i> = 0, because that is <i>x</i> = 1, exactly where <i>f</i> was given continuous. So <i>g</i>(<i>t</i>) = <i>ct</i> with <i>c</i> = <i>g</i>(1) = <i>f</i>(<i>e</i>) = 1.",
            "Back-substitute: <i>f</i>(<i>x</i>) = <i>g</i>(ln <i>x</i>) = ln <i>x</i>. Check both conditions: ln(<i>xy</i>) = ln <i>x</i> + ln <i>y</i>, and ln <i>e</i> = 1."
          ],
          "ans": "f(x) = ln x"
        },
        {
          "t": "mistakes",
          "items": [
            "Checking two of the three conditions. LHL = RHL settles the <b>limit</b>, not continuity. If <i>f</i>(<i>c</i>) is defined somewhere else, or not defined at all, the function is still discontinuous. <b>Compute <i>f</i>(<i>c</i>) first, every time.</b>",
            "Taking the wrong piece for a one-sided limit. For LHL you need the formula valid on <i>x</i> < <i>c</i>, whatever the equality signs say; the ≤ only tells you who owns <i>f</i>(<i>c</i>). Writing the limits as <i>c</i> − <i>h</i> and <i>c</i> + <i>h</i> makes the mistake almost impossible.",
            "Counting endpoints of an open interval. “Discontinuous in (0, 3)” means the integers 1 and 2 and nothing else; 0 and 3 are not in the interval. The same trap runs on kink-counting questions.",
            "Answering “discontinuous” and stopping. The mark is for the <b>species</b>: jump if LHL ≠ RHL, removable if LHL = RHL ≠ <i>f</i>(<i>c</i>), infinite if a side runs away. Only the removable one can be repaired, and only by redefining <i>f</i>(<i>c</i>).",
            "Substituting into a 0/0 junction piece and calling the result the limit. sin 5<i>x</i>/3<i>x</i> is <b>5/3</b>, not 1 and not 0: force the denominator to match the argument before you read anything off."
          ]
        },
        {
          "t": "protip",
          "html": "for a piecewise function, test the <b>junctions only</b>, plus any point where a piece is individually undefined. never the interiors: polynomials, sin, cos and <i>e</i><sup>x</sup> were continuous before you arrived, and the algebra of continuous functions says their sums, products, safe quotients and composites are too. that one habit collapses most “examine the continuity” problems to one or two points. and when a question hands you an unknown constant, it is telling you the break is <b>removable</b> and the answer is a single number."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "continuous at c ⟺ LHL = RHL = f(c)", "note": "three quantities, so three ways to fail" },
            { "f": "LHL = lim f(c − h), RHL = lim f(c + h), h → 0+", "note": "write it in h and you cannot pick the wrong piece" },
            { "f": "LHL = RHL ≠ f(c): removable", "note": "the only mendable break; redefine f(c)" },
            { "f": "LHL ≠ RHL: jump, and nothing repairs it", "note": "a find-k question always plants a removable one" },
            { "f": "f ± g, fg, f∘g continuous · f/g needs g(c) ≠ 0", "note": "why only junctions are ever tested" },
            { "f": "additive + continuous at one point ⇒ f(x) = f(1)·x", "note": "one crumb of continuity spreads to all of ℝ" }
          ],
          "aids": [
            "“value first, then the two walks, then compare all three”",
            "“an unknown constant means the hole is fillable”"
          ]
        }
      ]
    },
    {
      "n": "02",
      "title": "Differentiability, and Counting Where It Fails",
      "chip": "02 SMOOTH OR NOT",
      "kalam": "unbroken is cheap, smooth is not",
      "blocks": [
        {
          "t": "p",
          "html": "Continuity only asks that the graph be <b>unbroken</b>. Differentiability asks for something stronger: that it be <b>smooth</b>. Drive the Mumbai to Pune Expressway and the long banked curve lets you keep the wheel turning steadily, because at every instant there is exactly one direction you are pointing. That is a differentiable path. Now take a hairpin in the Western Ghats where the road suddenly kinks. At the corner itself there is <b>no single direction</b>: you point one way the instant before and another the instant after. The road never broke. It simply stopped being smooth."
        },
        {
          "t": "p",
          "html": "The mathematical hairpin is <i>f</i>(<i>x</i>) = |<i>x</i>| at 0. The graph is a perfect V, unbroken, drawable without lifting the pen. And at the tip the slope is −1 on the way in and +1 on the way out, so there is no single tangent line and no derivative. That one example carries the most important sentence in the chapter: <b>differentiable ⇒ continuous, but continuous ⇏ differentiable</b>. Smooth forces unbroken; unbroken forces nothing. Memorise the direction of that arrow, because examiners test it relentlessly and always in the direction you did not check."
        },
        {
          "t": "think",
          "html": "continuity is about the <b>height</b> you arrive at. differentiability is about the <b>direction</b> you arrive from. two travellers can reach the same dot from opposite sides and still be pointing at different things when they get there, and that is precisely a corner."
        },
        {
          "t": "formula",
          "kicker": "THE EXISTENCE TEST FOR A DERIVATIVE",
          "tag": "the three-part test, one level up",
          "main": "f′(c) exists ⟺ LHD = RHD, finite",
          "legend": [
            "LHD = lim<sub>h→0+</sub> [<i>f</i>(<i>c</i> − <i>h</i>) − <i>f</i>(<i>c</i>)]/(−<i>h</i>) · RHD = lim<sub>h→0+</sub> [<i>f</i>(<i>c</i> + <i>h</i>) − <i>f</i>(<i>c</i>)]/<i>h</i>",
            "<b>finite</b> is not decoration: two one-sided derivatives that both run to +∞ still give no derivative, because the tangent is vertical"
          ],
          "note": "This is not a new rule. It is the existence test from topic 01 applied to the difference quotient instead of to f itself, so everything you know about one-sided limits transfers unchanged."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · DIFFERENTIABLE FORCES CONTINUOUS, TAP A LINE",
          "steps": [
            {
              "eq": "given: lim (f(x) − f(c))/(x − c) = f′(c), finite",
              "why": "State exactly what you are handed. Differentiability at c is the existence of this one limit as a finite number. Nothing else is assumed, and the word finite is the whole hinge of the argument."
            },
            {
              "eq": "want: lim [f(x) − f(c)] = 0",
              "why": "Continuity at c says lim f(x) = f(c), which is the same statement as this one with f(c) moved across. Naming the target before you start is what turns this from a manipulation into a proof."
            },
            {
              "eq": "f(x) − f(c) = [(f(x) − f(c))/(x − c)] · (x − c)",
              "why": "The whole trick, and it is legal because x ≠ c in a limit, so the factor (x − c) is never zero and multiplying and dividing by it changes nothing. What it buys is a product of two pieces whose limits are both already known."
            },
            {
              "eq": "→ f′(c) · 0 = 0, so lim f(x) = f(c)",
              "why": "The product rule for limits applies because both factors have finite limits. The first is f′(c) by hypothesis, the second is plainly 0. A finite number times zero is zero. Notice where the converse dies: if f′(c) does not exist, the first factor has no finite limit, the product rule does not apply, and the argument collapses. That is exactly the case of |x| at 0."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · THREE WAYS THE DERIVATIVE DIES, TAP ONE",
          "chips": ["the corner", "a corner mid-curve", "a vertical tangent"],
          "captions": [
            "y = |x| at the origin, and the reason the bridge runs one way. Both dashed rays are tangent lines: the left branch arrives with slope −1 and its tangent continues into the right half-plane, the right branch leaves with slope +1 and its tangent continues into the left. Two candidate tangents, no agreement, no derivative. The function is perfectly continuous the whole time. Learn to draw this from memory.",
            "The source's own Figure 5.1, and the same failure without the symmetry. The parabola y = x² runs up to (2, 4) and the line y = 3x − 2 leaves from it, so the graph is unbroken and the value matches from both sides. But the parabola arrives with slope 2x = 4 while the line departs with slope 3. The two faint stubs are those tangents. A gap of one in the slope is invisible to continuity and fatal to differentiability.",
            "y = x to the power one third, at 0. This time the two sides agree about direction, and the direction is straight up. The one-sided derivatives both run to infinity, and the existence test demands a finite common value, so there is no derivative here either. A vertical tangent is a third way to fail, distinct from a corner and from a break."
          ],
          "frames": [
            {
              "x": [-2.2, 2.2],
              "y": [-1.7, 2.4],
              "curves": [{ "c": "abs" }],
              "segments": [
                { "from": [0, 0], "to": [1.5, -1.5], "dash": true },
                { "from": [0, 0], "to": [-1.5, -1.5], "dash": true }
              ],
              "points": [{ "x": 0, "y": 0 }],
              "labels": [
                { "x": -1.4, "y": 2.1, "text": "LHD = −1", "soft": true },
                { "x": 1.4, "y": 2.1, "text": "RHD = +1", "soft": true }
              ]
            },
            {
              "x": [0, 3.4],
              "y": [0, 8],
              "segments": [
                { "from": [0, 0], "to": [0.5, 0.25] },
                { "from": [0.5, 0.25], "to": [1, 1] },
                { "from": [1, 1], "to": [1.25, 1.5625] },
                { "from": [1.25, 1.5625], "to": [1.5, 2.25] },
                { "from": [1.5, 2.25], "to": [1.75, 3.0625] },
                { "from": [1.75, 3.0625], "to": [2, 4] },
                { "from": [2, 4], "to": [3.3, 7.9] },
                { "from": [1.2, 0.8], "to": [2.8, 7.2], "dash": true, "soft": true },
                { "from": [1.2, 1.6], "to": [2.8, 6.4], "dash": true, "soft": true }
              ],
              "points": [{ "x": 2, "y": 4 }],
              "labels": [
                { "x": 0.8, "y": 6.6, "text": "in with slope 4", "soft": true },
                { "x": 2.7, "y": 1.5, "text": "out with slope 3", "soft": true }
              ]
            },
            {
              "x": [-2.2, 2.2],
              "y": [-1.7, 1.7],
              "curves": [{ "c": "vline", "x": 0, "dash": true, "soft": true }],
              "segments": [
                { "from": [-2.2, -1.3006], "to": [-1.2, -1.0627] },
                { "from": [-1.2, -1.0627], "to": [-0.5, -0.7937] },
                { "from": [-0.5, -0.7937], "to": [-0.15, -0.5313] },
                { "from": [-0.15, -0.5313], "to": [-0.03, -0.3107] },
                { "from": [-0.03, -0.3107], "to": [0, 0] },
                { "from": [0, 0], "to": [0.03, 0.3107] },
                { "from": [0.03, 0.3107], "to": [0.15, 0.5313] },
                { "from": [0.15, 0.5313], "to": [0.5, 0.7937] },
                { "from": [0.5, 0.7937], "to": [1.2, 1.0627] },
                { "from": [1.2, 1.0627], "to": [2.2, 1.3006] }
              ],
              "points": [{ "x": 0, "y": 0 }],
              "labels": [{ "x": 1.25, "y": -1.1, "text": "slope runs to infinity", "soft": true }]
            }
          ]
        },
        {
          "t": "proc",
          "title": "Checking differentiability at a point c",
          "steps": [
            "<b>Confirm continuity at <i>c</i> first.</b> If it fails, <i>f</i> is not differentiable and there is nothing further to compute. Skipping this is expensive twice over: it wastes the algebra, and the two one-sided derivatives of a broken function often come out equal and finite, which will happily convince you of the wrong answer.",
            "<b>Compute the LHD</b> as lim<sub>h→0+</sub> [<i>f</i>(<i>c</i> − <i>h</i>) − <i>f</i>(<i>c</i>)]/(−<i>h</i>), using the formula for the <b>left</b> piece in the numerator's first term and the actual value <i>f</i>(<i>c</i>) in the second.",
            "<b>Compute the RHD</b> the same way with <i>c</i> + <i>h</i> and denominator <i>h</i>, using the <b>right</b> piece.",
            "<b>Resolve every modulus before you differentiate.</b> Near <i>x</i> = 1 you know <i>x</i> > 0, so 1/|<i>x</i>| is simply 1/<i>x</i>. A modulus that survives to the differentiation step is a guaranteed sign error.",
            "<b>Compare.</b> Equal and finite: differentiable, and <i>f</i>′(<i>c</i>) is that common value. Different and finite: a corner. Either one infinite: a vertical tangent or cusp. In all three failing cases the verdict is the same, and naming <b>which</b> failure is what earns the mark."
          ]
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Examine continuity and differentiability at <i>x</i> = 2 of <i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> for <i>x</i> ≤ 2 and 3<i>x</i> − 2 for <i>x</i> > 2.",
          "steps": [
            "Continuity first. <i>f</i>(2) = 4, LHL = lim <i>x</i><sup>2</sup> = 4, RHL = lim (3<i>x</i> − 2) = 4. All three agree, so <i>f</i> is continuous at 2 and it is worth going on.",
            "LHD = lim<sub>h→0+</sub> [(2 − <i>h</i>)<sup>2</sup> − 4]/(−<i>h</i>) = lim (−4<i>h</i> + <i>h</i><sup>2</sup>)/(−<i>h</i>) = lim (4 − <i>h</i>) = 4.",
            "RHD = lim<sub>h→0+</sub> [3(2 + <i>h</i>) − 2 − 4]/<i>h</i> = lim 3<i>h</i>/<i>h</i> = 3.",
            "4 ≠ 3, so no derivative at 2. The parabola arrives with slope 4 and the line leaves with slope 3: the bridge theorem in action, continuous but not differentiable."
          ],
          "ans": "Continuous at x = 2, not differentiable: a corner, LHD = 4 and RHD = 3"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "<i>f</i>(<i>x</i>) = <i>ax</i> + <i>b</i> for <i>x</i> < 1, <i>f</i>(1) = 4, and <i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> + 3<i>x</i> for <i>x</i> > 1. Find <i>a</i> and <i>b</i> so that <i>f</i> is differentiable at <i>x</i> = 1.",
          "steps": [
            "Continuity is forced, because differentiable implies continuous, so impose it first. LHL = <i>a</i> + <i>b</i>, <i>f</i>(1) = 4, RHL = 1 + 3 = 4. Equation (i): <i>a</i> + <i>b</i> = 4.",
            "Now the slopes. LHD is the slope of the line, which is <i>a</i>. RHD is (2<i>x</i> + 3) at <i>x</i> = 1, which is 5. Equation (ii): <i>a</i> = 5.",
            "Solve: <i>a</i> = 5 and <i>b</i> = 4 − 5 = −1.",
            "Verify both conditions, which is where the marks are: LHL = RHL = <i>f</i>(1) = 4 and LHD = RHD = 5. Doing the slopes before securing continuity is how students find constants that make two pieces parallel with a vertical gap between them."
          ],
          "ans": "a = 5, b = −1"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "For <i>f</i>(<i>x</i>) = <i>kx</i> + 1 on <i>x</i> ≤ π and cos <i>x</i> on <i>x</i> > π, find <i>k</i> for continuity at π, then for differentiability at π.",
          "steps": [
            "Continuity: <i>f</i>(π) = LHL = <i>k</i>π + 1 and RHL = cos π = −1. So <i>k</i>π + 1 = −1 and <i>k</i> = −2/π.",
            "Differentiability needs the slopes as well. LHD = <i>k</i> and RHD = −sin π = 0, so slope matching demands <i>k</i> = 0.",
            "But <i>k</i> = 0 makes the left piece the constant 1, and 1 ≠ −1, so continuity fails. The two requirements name different constants and cannot both hold.",
            "So the honest answer to the second half is that <b>no such <i>k</i> exists</b>. A demand for a unique constant is itself the clue that only continuity is being tested; a demand for two constants signals differentiability."
          ],
          "ans": "Continuous when k = −2/π; differentiable for no value of k at all"
        },
        {
          "t": "p",
          "html": "Now the gem of the chapter, and the trap in every “which is necessarily true” MCQ. Differentiability at a point does <b>not</b> force the derivative to be continuous there. The standing counterexample is <i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> sin(1/<i>x</i>) for <i>x</i> ≠ 0 with <i>f</i>(0) = 0. It is differentiable at the origin, with <i>f</i>′(0) = 0, and yet <i>f</i>′ has <b>no limit at all</b> as <i>x</i> → 0. The bridge theorem says differentiable ⇒ continuous, about <i>f</i>. It says nothing whatsoever about <i>f</i>′, and half-remembering it as though it did is what the option “<i>f</i>′ is continuous at <i>c</i>” is fishing for."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · DIFFERENTIABLE, WITH A DISCONTINUOUS DERIVATIVE, TAP A LINE",
          "steps": [
            {
              "eq": "0 ≤ |x² sin(1/x)| ≤ x² → 0, so f is continuous at 0",
              "why": "The sine factor is trapped between −1 and 1 however wildly it swings, so the whole product is trapped between −x² and x². Both bounds go to 0, so the squeeze theorem forces the function to 0, which is f(0). Continuity secured, and the oscillation has been made harmless by the x² in front."
            },
            {
              "eq": "f′(0) = lim (h² sin(1/h))/h = lim h sin(1/h) = 0",
              "why": "Straight from the definition, because no rule can act at a point where the formula changes. One power of h cancels, leaving h sin(1/h), which is squeezed between −|h| and |h| and therefore goes to 0. So the derivative at the origin exists and equals 0."
            },
            {
              "eq": "for x ≠ 0, f′(x) = 2x sin(1/x) − cos(1/x)",
              "why": "Away from the origin there is a formula, so the product and chain rules apply. The chain rule on sin(1/x) contributes cos(1/x) times the derivative of 1/x, which is −1/x², and the x² outside cancels that x² exactly. That cancellation is what leaves a bare cosine behind."
            },
            {
              "eq": "2x sin(1/x) → 0 but cos(1/x) has no limit",
              "why": "The first term is squeezed to 0 again. The second oscillates between −1 and 1 infinitely often in every neighbourhood of the origin, however small, so it has no limit. Therefore lim f′(x) does not exist and cannot possibly equal f′(0) = 0. The function is differentiable everywhere and its derivative is not continuous at 0."
            }
          ]
        },
        {
          "t": "p",
          "html": "The rest of this topic is counting. JEE Main almost never asks “is this differentiable”; it asks <b>at how many points</b>, for an expression built from moduli and greatest integers. Two rules settle every modulus case. Away from its zeros, |<i>g</i>| is exactly as smooth as <i>g</i>, because near such a point |<i>g</i>| is simply <i>g</i> or −<i>g</i>. And at a zero of <i>g</i>, the one-sided derivatives of |<i>g</i>| are +|<i>g</i>′(<i>c</i>)| and −|<i>g</i>′(<i>c</i>)|, which agree only when <i>g</i>′(<i>c</i>) = 0. So <b>the corners of |<i>g</i>| are exactly the points where <i>g</i> crosses the axis</b>, and a zero where <i>g</i> merely touches the axis is not a corner at all."
        },
        {
          "t": "formula",
          "kicker": "THE CORNER TEST FOR A MODULUS",
          "tag": "g differentiable, c a zero of g",
          "main": "|g| has a corner at c ⟺ g(c) = 0 and g′(c) ≠ 0",
          "legend": [
            "away from the zeros of <i>g</i>, |<i>g</i>| inherits every derivative <i>g</i> has, so <b>only the zeros are ever candidates</b>",
            "|<i>x</i>|<sup>n</sup> at the origin, for <b>odd</b> <i>n</i>, is differentiable exactly <i>n</i> − 1 times: |<i>x</i>| not once, |<i>x</i>|<sup>3</sup> twice but not three times. For <b>even</b> <i>n</i> it is the polynomial <i>x</i><sup>n</sup> and is smooth to every order",
            "companion rule: <i>f</i>(|<i>x</i>|) is differentiable at 0 exactly when <i>f</i>′(0) = 0, which is why cos|<i>x</i>| is perfectly smooth there"
          ],
          "note": "|g| never fails by blow-up, only ever by corner: the two one-sided derivatives are the two signs of the same finite number, so they always exist."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN · SPEED TRAP",
          "q": "At how many points is <i>f</i>(<i>x</i>) = |<i>x</i><sup>2</sup> − 4| + |<i>x</i> − 1| not differentiable?",
          "steps": [
            "Do not differentiate anything. Count sign changes of each inside, which is all the corner test asks for.",
            "|<i>x</i><sup>2</sup> − 4|: the inside vanishes at <i>x</i> = −2 and <i>x</i> = 2, and its derivative 2<i>x</i> is −4 and +4 there, both non-zero. Two corners.",
            "|<i>x</i> − 1|: one zero, at <i>x</i> = 1, with derivative 1. One corner. The classic blunder is to add <i>x</i> = 0, the vertex of <i>x</i><sup>2</sup> − 4, but near 0 the inside stays negative, so |<i>x</i><sup>2</sup> − 4| = 4 − <i>x</i><sup>2</sup> smoothly there.",
            "Can a sum heal a corner? Only if both terms kink at the <b>same</b> place with opposite slope jumps. Here −2, 1 and 2 are distinct, so nothing cancels and all three survive."
          ],
          "ans": "3 points: x = −2, 1 and 2"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "Find every point where <i>f</i>(<i>x</i>) = ||<i>x</i>| − 1| fails to be differentiable.",
          "steps": [
            "Peel from the inside. The inner φ(<i>x</i>) = |<i>x</i>| − 1 is differentiable everywhere except <i>x</i> = 0.",
            "Outer layer. Candidates for |φ| are only the zeros of φ, that is |<i>x</i>| = 1, so <i>x</i> = ±1. There φ′ = ±1 ≠ 0, so both are genuine corners.",
            "What about the inner corner at 0? There φ(0) = −1 ≠ 0, so the outer modulus is locally inert: for |<i>x</i>| < 1 we have φ < 0 and <i>f</i>(<i>x</i>) = 1 − |<i>x</i>|, which still has the inner kink. <b>Nesting does not heal a corner sitting away from the outer zeros.</b>",
            "Piecewise confirmation: <i>f</i> is −<i>x</i> − 1 on <i>x</i> ≤ −1, then 1 + <i>x</i>, then 1 − <i>x</i>, then <i>x</i> − 1 on <i>x</i> ≥ 1. Reading left to right the slopes run −1, +1, −1, +1: three sign flips, three corners."
          ],
          "ans": "3 points: x = −1, 0 and 1"
        },
        {
          "t": "p",
          "html": "The greatest integer function needs its own rule, because “⌊<i>x</i>⌋ jumps at every integer” is not enough to answer the question actually asked, which is about <b>⌊<i>g</i>(<i>x</i>)⌋</b> for a continuous <i>g</i>. The naive instruction, count the places where <i>g</i> hits an integer, is wrong. Here is why, in one word: the floor rounds <b>down</b>. So a <b>dip below</b> an integer level breaks continuity, while hovering above it does not. A local maximum of <i>g</i> sitting exactly on an integer is a discontinuity, because everything nearby is strictly lower and its floor drops. A local minimum sitting exactly on an integer is <b>not</b>, because everything nearby is strictly higher and every floor still agrees."
        },
        {
          "t": "def",
          "term": "The floor criterion",
          "html": "For continuous <i>g</i>, put <i>f</i> = ⌊<i>g</i>⌋ and <i>m</i> = ⌊<i>g</i>(<i>c</i>)⌋. If <i>g</i>(<i>c</i>) is <b>not</b> an integer, <i>g</i> stays inside (<i>m</i>, <i>m</i> + 1) near <i>c</i> and <i>f</i> is constant there, hence continuous. If <i>g</i>(<i>c</i>) = <i>m</i> is an integer, then <i>f</i> is <b>discontinuous at <i>c</i> exactly when every neighbourhood of <i>c</i> contains points with <i>g</i>(<i>x</i>) < <i>m</i></b>. A transversal crossing always does; a maximum touching the level does; a minimum touching it does not. <b>Shortcut:</b> if <i>g</i> is strictly monotonic on an interval, every solution of <i>g</i>(<i>x</i>) = integer is a genuine crossing, and the count is just the number of solutions."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · THE FLOOR OF A CURVE, TAP ONE",
          "chips": ["a minimum on the level", "a crossing", "a maximum on the level"],
          "captions": [
            "g(x) = x² touching the level 0 at its minimum. The floor is the amber step, and it is flat at height 0 across the whole of the open interval from −1 to 1, the filled dot at the origin included. Nothing nearby dips below 0, so no floor anywhere near changes, and the step is unbroken through x = 0. Hitting an integer dead-on has caused no discontinuity at all, which is the counterexample that kills the naive rule.",
            "The same curve at x = 1, crossing the level 1 instead of touching it. From the left x² lies in (0, 1) and the floor reads 0; from the right it lies in (1, 2) and the floor reads 1; the value at the point is 1. Left limit 0, value 1: a jump of exactly one, and the same happens again at root 2. Every transversal crossing behaves this way.",
            "g(x) = cos x touching the level 1 at its maximum. Now the asymmetry bites. Everything in a punctured neighbourhood of 0 has cos x strictly below 1, so its floor is 0, while the value at the origin is the lone filled dot at height 1. A single point sticking up out of a flat step is still a discontinuity, and a maximum on an integer level is always one."
          ],
          "frames": [
            {
              "x": [-1.7, 1.7],
              "y": [-0.7, 2.4],
              "curves": [
                { "c": "poly", "coeffs": [0, 0, 1], "soft": true },
                { "c": "line", "m": 0, "k": 1, "dash": true, "soft": true }
              ],
              "segments": [
                { "from": [-1, 0], "to": [1, 0] },
                { "from": [1, 1], "to": [1.414, 1] },
                { "from": [-1.414, 1], "to": [-1, 1] }
              ],
              "points": [
                { "x": 0, "y": 0 },
                { "x": 1, "y": 0, "open": true },
                { "x": -1, "y": 0, "open": true },
                { "x": 1, "y": 1 },
                { "x": -1, "y": 1 }
              ],
              "labels": [{ "x": 0, "y": -0.45, "text": "floor stays 0 through x = 0", "soft": true }]
            },
            {
              "x": [0.1, 1.9],
              "y": [-0.5, 2.6],
              "curves": [
                { "c": "poly", "coeffs": [0, 0, 1], "soft": true },
                { "c": "line", "m": 0, "k": 1, "dash": true, "soft": true }
              ],
              "segments": [
                { "from": [0.1, 0], "to": [1, 0] },
                { "from": [1, 1], "to": [1.414, 1] },
                { "from": [1.414, 2], "to": [1.732, 2] }
              ],
              "points": [
                { "x": 1, "y": 0, "open": true },
                { "x": 1, "y": 1 },
                { "x": 1.414, "y": 1, "open": true },
                { "x": 1.414, "y": 2 }
              ],
              "labels": [{ "x": 0.62, "y": 2.2, "text": "x² crosses the level 1", "soft": true }]
            },
            {
              "x": [-1.7, 1.7],
              "y": [-0.7, 1.8],
              "curves": [
                { "c": "cos", "soft": true },
                { "c": "line", "m": 0, "k": 1, "dash": true, "soft": true }
              ],
              "segments": [{ "from": [-1.5708, 0], "to": [1.5708, 0] }],
              "points": [
                { "x": 0, "y": 0, "open": true },
                { "x": 0, "y": 1 }
              ],
              "labels": [{ "x": 0.95, "y": 1.5, "text": "f(0) = 1, neighbours 0", "soft": true }]
            }
          ]
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "How many points of discontinuity does <i>f</i>(<i>x</i>) = ⌊2 sin <i>x</i>⌋ have in (0, 2π)?",
          "steps": [
            "2 sin <i>x</i> ranges over [−2, 2], so the integer levels to test are −2, −1, 0, 1, 2. Solve 2 sin <i>x</i> = <i>m</i> inside (0, 2π) and classify each solution.",
            "Level 2 gives <i>x</i> = π/2, a <b>maximum</b> touching the level: nearby values lie in (1, 2) with floor 1 while <i>f</i>(π/2) = 2. Discontinuous. Level 1 gives π/6 and 5π/6, both crossings. Level 0 gives π, a crossing.",
            "Level −1 gives 7π/6 and 11π/6, both crossings. Level −2 gives <i>x</i> = 3π/2, a <b>minimum</b> touching the level: nearby, 2 sin <i>x</i> lies in (−2, −1) whose floor is −2, and <i>f</i>(3π/2) = −2 as well. Continuous.",
            "Seven solutions, six discontinuities. The minimum-touch at 3π/2 is the designed trap, and counting solutions instead of classifying them loses the mark."
          ],
          "ans": "6 points: x = π/6, π/2, 5π/6, π, 7π/6 and 11π/6"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "Find the number of points in (−2, 3) where <i>f</i>(<i>x</i>) = ⌊<i>x</i><sup>2</sup>⌋ sin(π<i>x</i>) is discontinuous.",
          "steps": [
            "⌊<i>x</i><sup>2</sup>⌋ jumps where <i>x</i><sup>2</sup> crosses an integer, that is at <i>x</i> = ±√<i>n</i>. Inside (−2, 3) those are −1, −√2, −√3 on the left and 1, √2, √3, 2, √5, √6, √7, √8 on the right: eleven candidates. At <i>x</i> = 0 the level 0 is touched at a minimum, so no jump there, and −2 and 3 are excluded ends.",
            "Now the second factor. At an <b>integer</b> <i>x</i><sub>0</sub>, sin(π<i>x</i>) → 0 while ⌊<i>x</i><sup>2</sup>⌋ stays bounded, so both one-sided limits of the product are 0, and <i>f</i>(<i>x</i><sub>0</sub>) = 0 too.",
            "So the multiplication kills the jump at every integer. At <i>x</i> = 2, for instance, the left limit is 3 · 0 = 0 and the right limit is 4 · 0 = 0, matching <i>f</i>(2) = 0. The same happens at ±1.",
            "At the non-integer candidates sin(π<i>x</i>) is continuous and non-zero, so a unit jump in the floor survives multiplication. Eleven candidates minus the three integers leaves eight."
          ],
          "ans": "8 points: x = ±√2, ±√3, √5, √6, √7 and √8"
        },
        {
          "t": "mcq",
          "q": "Which function is continuous everywhere but differentiable everywhere <b>except at exactly one point</b>?",
          "correct": 1,
          "opts": [
            {
              "label": "<i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup>",
              "nudge": "A polynomial is smooth at every real number, so it has <b>no</b> exceptional point and fails the “except one” half of the requirement."
            },
            { "label": "<i>f</i>(<i>x</i>) = |<i>x</i>|", "nudge": null },
            {
              "label": "<i>f</i>(<i>x</i>) = ⌊<i>x</i>⌋",
              "nudge": "It fails the first clause before the second is reached: the step function is not continuous, jumping at every integer."
            },
            {
              "label": "<i>f</i>(<i>x</i>) = 1/<i>x</i>",
              "nudge": "Not defined at <i>x</i> = 0, so it is not continuous everywhere to begin with. An undefined point is not an exceptional point of differentiability."
            }
          ],
          "solution": "|x| is continuous on all of ℝ and has one corner, at x = 0, where LHD = −1 and RHD = +1. That is exactly one non-differentiable point. It is the standing counterexample to continuous implying differentiable, and it is worth carrying in your pocket for the whole chapter."
        },
        {
          "t": "mcq",
          "q": "If <i>f</i> is differentiable at <i>x</i> = <i>c</i>, which statement is <b>necessarily</b> true?",
          "correct": 0,
          "opts": [
            { "label": "<i>f</i> is continuous at <i>c</i>", "nudge": null },
            {
              "label": "<i>f</i>′ is continuous at <i>c</i>",
              "nudge": "The deep trap. The bridge theorem is about <i>f</i>, not <i>f</i>′. <i>x</i><sup>2</sup> sin(1/<i>x</i>) is differentiable at 0 and its derivative has no limit there at all."
            },
            {
              "label": "<i>f</i> has a maximum at <i>c</i>",
              "nudge": "A derivative existing says nothing about extrema. A maximum would additionally need <i>f</i>′(<i>c</i>) = 0 plus a sign test, and <i>f</i>′(<i>c</i>) may be any number."
            },
            {
              "label": "<i>f</i>(<i>c</i>) = 0",
              "nudge": "Confuses the value of the function with the value of its derivative. Differentiability places no constraint whatsoever on <i>f</i>(<i>c</i>)."
            }
          ],
          "solution": "Differentiability at c forces continuity at c, and that is the whole content of the bridge theorem. The proof multiplies and divides by (x − c) so that f(x) − f(c) becomes the difference quotient times (x − c), then sends x to c to get f′(c) · 0 = 0. Nothing in that argument touches f′ as a function, which is why option two is false."
        },
        {
          "t": "mcq",
          "q": "<i>f</i>(<i>x</i>) = <i>ax</i> + 1 for <i>x</i> ≤ 1 and <i>x</i><sup>2</sup> + <i>b</i> for <i>x</i> > 1 is differentiable at <i>x</i> = 1. Then <i>a</i> + <i>b</i> equals:",
          "correct": 2,
          "opts": [
            {
              "label": "2",
              "nudge": "That is <i>a</i> alone, reported as though it were the answer. Continuity gives <i>a</i> = <i>b</i>, so the sum is twice as large."
            },
            {
              "label": "3",
              "nudge": "Comes from imposing only one of the two conditions. Continuity by itself gives <i>a</i> = <i>b</i> and pins nothing down; the slope equation is what fixes the value."
            },
            { "label": "4", "nudge": null },
            {
              "label": "5",
              "nudge": "<i>a</i> = 2 is right, but <i>b</i> = 3 comes from forcing the right piece through (1, 4) instead of through (1, <i>a</i> + 1) = (1, 3)."
            }
          ],
          "solution": "Continuity at 1: a(1) + 1 = 1 + b, so a = b. Differentiability: LHD = a and RHD = 2x at x = 1, which is 2. So a = 2, hence b = 2, and a + b = 4. Continuity first, slopes second: doing it the other way round finds a and leaves b free."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Show that <i>f</i>(<i>x</i>) = |<i>x</i> − 5| is continuous at <i>x</i> = 5 but not differentiable there.",
              "a": "LHL = RHL = 0 = <i>f</i>(5), so continuous. LHD = lim [|−<i>h</i>| − 0]/(−<i>h</i>) = <b>−1</b> and RHD = lim [<i>h</i> − 0]/<i>h</i> = <b>+1</b>. Different, so no derivative: |<i>x</i>| shifted five units right."
            },
            {
              "q": "[JEE Main] Examine differentiability at <i>x</i> = 1 of <i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> + 1 for <i>x</i> ≤ 1 and 3 − <i>x</i> for <i>x</i> > 1.",
              "a": "Both pieces give 2 at <i>x</i> = 1, so continuous. LHD = 2<i>x</i> at 1 = <b>2</b>, RHD = <b>−1</b>. Not differentiable: a corner."
            },
            {
              "q": "[JEE Main] Where is <i>f</i>(<i>x</i>) = |<i>x</i> − 1| + |<i>x</i> − 2| + |<i>x</i> − 3| not differentiable?",
              "a": "Exactly <b><i>x</i> = 1, 2, 3</b>. At each join only one summand kinks and the other two are smooth there, so no cancellation is possible."
            },
            {
              "q": "[JEE Main] Find the set of points where <i>f</i>(<i>x</i>) = max{<i>x</i>, <i>x</i><sup>2</sup>} is not differentiable.",
              "a": "<i>x</i><sup>2</sup> ≥ <i>x</i> when <i>x</i> ≤ 0 or <i>x</i> ≥ 1, so <i>f</i> = <i>x</i><sup>2</sup> there and <i>f</i> = <i>x</i> on [0, 1]. Slopes 0 then 1 at the origin, 1 then 2 at <i>x</i> = 1. Set: <b>{0, 1}</b>."
            },
            {
              "q": "[JEE Advanced] Is <i>g</i>(<i>x</i>) = |<i>x</i>|<sup>3</sup> twice differentiable at 0? Three times?",
              "a": "<i>g</i>′(<i>x</i>) = 3<i>x</i>|<i>x</i>| and <i>g</i>″(<i>x</i>) = 6|<i>x</i>|, both existing at 0 with value 0, so <b>yes, twice</b>. But 6|<i>x</i>| has a corner at 0, so <b>not three times</b>. Odd powers of |<i>x</i>| survive exactly <i>n</i> − 1 differentiations; even ones are polynomials and survive forever."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "Believing “continuous ⟹ differentiable”. It is the other way round, and |<i>x</i>| at 0 is the eternal counterexample. <b>Smooth forces unbroken; unbroken forces nothing.</b>",
            "Jumping to LHD and RHD without checking continuity. If <i>f</i> is already discontinuous at <i>c</i> it cannot be differentiable, and worse, the two one-sided derivatives of the separate pieces often come out equal and finite and will convince you otherwise.",
            "Over-extending the bridge theorem to <i>f</i>′. Differentiable does <b>not</b> mean the derivative is continuous: <i>x</i><sup>2</sup> sin(1/<i>x</i>) is differentiable at 0 and its derivative oscillates forever. The theorem is about <i>f</i>.",
            "Counting every zero of the inside as a corner of |<i>g</i>|. Count <b>sign changes</b>, not zeros: <i>x</i> = 0 is a zero of the derivative of <i>x</i><sup>2</sup> − 4 and no corner of |<i>x</i><sup>2</sup> − 4|, because the inside never changes sign there.",
            "Counting solutions of <i>g</i>(<i>x</i>) = integer as discontinuities of ⌊<i>g</i>⌋. A <b>minimum</b> touching the level is continuous and a <b>maximum</b> touching it is not, because the floor rounds down. ⌊<i>x</i><sup>2</sup>⌋ is continuous at 0 and ⌊cos <i>x</i>⌋ is not."
          ]
        },
        {
          "t": "protip",
          "html": "in a counting question, never differentiate. write down the candidate points first: zeros of every inside modulus, and solutions of <i>g</i>(<i>x</i>) = integer for every floor. then classify each one in a line. does the inside <b>change sign</b>, or only touch? does the curve <b>cross</b> the level, or bounce off it from above? and is anything multiplying the expression that vanishes exactly there, which can quietly heal a jump? candidates, then classification, then the count. it is thirty seconds and it is never wrong."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "f′(c) exists ⟺ LHD = RHD, both finite", "note": "the topic 01 test, applied to the difference quotient" },
            { "f": "differentiable ⇒ continuous · continuous ⇏ differentiable", "note": "the one-way bridge; |x| at 0 is the counterexample" },
            { "f": "corner · cusp or vertical tangent · any break", "note": "the three ways smoothness dies, in that order of frequency" },
            { "f": "x² sin(1/x): f′(0) = 0, f′ discontinuous at 0", "note": "the theorem says nothing about f′" },
            { "f": "|g| kinks where g = 0 and g′ ≠ 0", "note": "sign changes, not zeros; a touch is smooth" },
            { "f": "⌊g⌋ breaks where g dips below the level", "note": "maximum on the level yes, minimum on the level no" }
          ],
          "aids": [
            "“continuity is the height, differentiability is the direction”",
            "“candidates first, classify second, count last”"
          ]
        }
      ]
    },
    {
      "n": "03",
      "title": "The Chain Rule and Implicit Differentiation",
      "chip": "03 CHAIN & IMPLICIT",
      "kalam": "every y is secretly y of x",
      "blocks": [
        {
          "t": "p",
          "html": "Class 11 handed you the chain rule and you used it as a convenience. From here it stops being a convenience. Implicit differentiation, every inverse-trigonometric derivative, logarithmic differentiation and parametric differentiation are all the chain rule in costume, and none of them can be done without it. So it is worth restating once, precisely. Picture three shafts linked by gears: turning <i>x</i> drives an intermediate shaft <i>u</i>, which drives the output <i>y</i>. If <i>u</i> spins three times per turn of <i>x</i> and <i>y</i> spins five times per turn of <i>u</i>, then <i>y</i> spins fifteen times per turn of <i>x</i>. <b>Rates multiply along the chain.</b>"
        },
        {
          "t": "formula",
          "kicker": "THE CHAIN RULE, AND THE LONGER CHAIN",
          "tag": "u = g(x), and every link differentiable",
          "main": "dy/dx = (dy/du) · (du/dx)",
          "legend": [
            "two links: <i>d</i>/<i>dx</i> <i>f</i>(<i>g</i>(<i>x</i>)) = <i>f</i>′(<i>g</i>(<i>x</i>)) · <i>g</i>′(<i>x</i>) · three links: <i>f</i>′(<i>g</i>(<i>h</i>(<i>x</i>))) · <i>g</i>′(<i>h</i>(<i>x</i>)) · <i>h</i>′(<i>x</i>)",
            "the four patterns that cover most of the paper: [<i>g</i>]<sup>n</sup> → <i>n</i>[<i>g</i>]<sup>n−1</sup><i>g</i>′ · sin <i>g</i> → cos <i>g</i> · <i>g</i>′ · <i>e</i><sup>g</sup> → <i>e</i><sup>g</sup><i>g</i>′ · ln <i>g</i> → <i>g</i>′/<i>g</i>"
          ],
          "note": "Both links have conditions: g differentiable at x, and f differentiable at u = g(x). Neither is automatic. √u is not differentiable at u = 0, so y = √(g(x)) needs care wherever g vanishes."
        },
        {
          "t": "proc",
          "title": "Differentiating a composite, layer by layer",
          "steps": [
            "<b>Ask what is done last.</b> That operation is the outermost layer. For sin(cos(<i>x</i><sup>2</sup>)) you square, then take cosine, then take sine, so sine is outermost.",
            "<b>Differentiate the outer, leaving the inner completely untouched inside it.</b> The derivative of sin(anything) is cos(that same anything), unchanged. Simplifying the inside at this stage is a guaranteed error.",
            "<b>Multiply by the derivative of the inner</b>, and keep going for deeper nesting. Every layer you peel owes exactly one factor.",
            "<b>Count your factors as a completeness check.</b> A triple composite must produce three factors. Two factors means a layer went missing, and a missing layer is the single most punished slip in the paper.",
            "<b>Mixed structures: outermost structure first.</b> If a composite sits inside a product, apply the product rule first and use the chain rule to differentiate the composite factor when its turn comes."
          ]
        },
        {
          "t": "think",
          "html": "say it out loud as you write: “derivative of the outside, times derivative of the inside.” for each layer you strip, append its factor <b>before</b> you do anything else, even before tidying. that mechanical rhythm removes the dropped-inner-factor error almost entirely, and that one error costs more marks in this chapter than everything else put together."
        },
        {
          "t": "p",
          "html": "Now the move that makes the rest of the chapter possible. Many curves refuse to be written as <i>y</i> = something in <i>x</i>. Take the circle <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> = 25. You <b>could</b> solve for <i>y</i> = ±√(25 − <i>x</i><sup>2</sup>), but that is clumsy and it splits one curve into two. The slicker route starts from a small shift of mind: even though <i>y</i> is not written as a formula in <i>x</i>, it <b>is</b> secretly a function of <i>x</i> along the curve. So treat it as one, and differentiate the whole equation, both sides, with respect to <i>x</i>."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Differentiate <i>y</i> = sin(cos(<i>x</i><sup>2</sup>)).",
          "steps": [
            "Three layers. Outer sin, middle cos, inner <i>x</i><sup>2</sup>, and you peel outside in.",
            "Outer: cos(cos(<i>x</i><sup>2</sup>)), with the inside carried through untouched.",
            "Middle: times −sin(<i>x</i><sup>2</sup>). Inner: times 2<i>x</i>.",
            "Three layers, three factors, so the completeness check passes: <i>y</i>′ = cos(cos(<i>x</i><sup>2</sup>)) · (−sin(<i>x</i><sup>2</sup>)) · 2<i>x</i>."
          ],
          "ans": "y′ = −2x sin(x²) cos(cos(x²))"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN · TRAP",
          "q": "A student differentiates <i>y</i> = <i>e</i><sup>3x</sup> and writes <i>y</i>′ = <i>e</i><sup>3x</sup>. What is missing, and what is the right answer?",
          "steps": [
            "The student treated <i>e</i><sup>3x</sup> like the plain <i>e</i><sup>x</sup>, whose derivative is itself. But <i>e</i><sup>3x</sup> is a composite: the inside is 3<i>x</i>.",
            "Outer derivative: <i>e</i><sup>3x</sup>, inside untouched. Inner derivative: 3.",
            "So <i>y</i>′ = 3<i>e</i><sup>3x</sup>. Only <i>e</i><sup>x</sup> itself is its own derivative; nothing else is.",
            "Same slip, same cure elsewhere: <i>d</i>/<i>dx</i> sin(2<i>x</i>) is 2cos(2<i>x</i>), not cos(2<i>x</i>), and <i>d</i>/<i>dx</i> ln(cos <i>x</i>) is (1/cos <i>x</i>)(−sin <i>x</i>) = −tan <i>x</i>, not 1/cos <i>x</i>."
          ],
          "ans": "y′ = 3e³ˣ. Every peeled layer owes a factor"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "Differentiate <i>y</i> = <i>x</i><sup>2</sup>√(1 + <i>x</i><sup>2</sup>) and simplify.",
          "steps": [
            "Outermost structure is a product, so the product rule leads. Put <i>u</i> = <i>x</i><sup>2</sup> and <i>v</i> = (1 + <i>x</i><sup>2</sup>)<sup>1/2</sup>.",
            "The chain rule handles <i>v</i>: <i>v</i>′ = ½(1 + <i>x</i><sup>2</sup>)<sup>−1/2</sup> · 2<i>x</i> = <i>x</i>/√(1 + <i>x</i><sup>2</sup>).",
            "Product rule: <i>y</i>′ = 2<i>x</i>√(1 + <i>x</i><sup>2</sup>) + <i>x</i><sup>2</sup> · <i>x</i>/√(1 + <i>x</i><sup>2</sup>).",
            "Common denominator √(1 + <i>x</i><sup>2</sup>): numerator 2<i>x</i>(1 + <i>x</i><sup>2</sup>) + <i>x</i><sup>3</sup> = 2<i>x</i> + 3<i>x</i><sup>3</sup>."
          ],
          "ans": "y′ = x(2 + 3x²)/√(1 + x²)"
        },
        {
          "t": "p",
          "html": "Here is the whole technique in one line. Whenever you differentiate a term containing <i>y</i>, the chain rule fires and tacks on a factor <b><i>dy</i>/<i>dx</i></b>, because <i>y</i> is itself a function of <i>x</i>. A pure-<i>x</i> term like <i>x</i><sup>2</sup> differentiates normally to 2<i>x</i>; a <i>y</i>-term always drags its <i>dy</i>/<i>dx</i> along behind it. For the circle, 2<i>x</i> + 2<i>y</i> · <i>dy</i>/<i>dx</i> = 0, so <i>dy</i>/<i>dx</i> = −<i>x</i>/<i>y</i>. Notice the answer involves <b>both</b> variables. That is normal and correct for an implicit curve: it hands you the slope at any point (<i>x</i>, <i>y</i>) on it."
        },
        {
          "t": "def",
          "term": "Implicit differentiation",
          "html": "For a relation <i>F</i>(<i>x</i>, <i>y</i>) = 0 that defines <i>y</i> as a differentiable function of <i>x</i> near the point of interest, differentiate <b>every term of both sides</b> with respect to <i>x</i>, applying the chain rule to each <i>y</i>-term and the product rule to each mixed term, then collect the <i>dy</i>/<i>dx</i> terms on one side, factor, and solve. It fails exactly where the curve does not locally define such a function, and the formula reports that honestly by blowing up: at (±5, 0) on <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> = 25 the tangent really is vertical."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY EVERY y-TERM CARRIES A dy/dx, TAP A LINE",
          "steps": [
            {
              "eq": "y³ is really [y(x)]³, a composite",
              "why": "This is the entire idea and there is nothing else to it. Once you write the invisible (x) after every y, the expression stops looking like a power of a variable and starts looking like what it is: an outer cube wrapped around an inner function of x."
            },
            {
              "eq": "d/dx [y(x)]³ = 3[y(x)]² · d/dx[y(x)] = 3y² dy/dx",
              "why": "Now the chain rule applies unchanged. Outer derivative, inner left intact, times the derivative of the inner. The derivative of the inner is dy/dx, which has no simpler form, so it stays as a symbol. That symbol is the factor students drop."
            },
            {
              "eq": "d/dx (xy) = 1 · y + x · dy/dx",
              "why": "A mixed term is a product of two things that both depend on x, so it needs the product rule, and then the chain rule on the y factor. Two terms, not one. Losing the first term or the second is the second commonest error in the topic."
            },
            {
              "eq": "collect, factor, divide",
              "why": "After differentiating, every dy/dx term goes to one side and everything else to the other. Factor dy/dx out and divide. The result generally involves both x and y, which is expected and is not a sign that anything went wrong."
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "THE TWO RULES YOU ACTUALLY USE",
          "tag": "y treated throughout as y(x)",
          "main": "d/dx yⁿ = n yⁿ⁻¹ (dy/dx)",
          "legend": [
            "general <i>y</i>-term: <i>d</i>/<i>dx</i> <i>f</i>(<i>y</i>) = <i>f</i>′(<i>y</i>) · <i>dy</i>/<i>dx</i>, so sin <i>y</i> gives cos <i>y</i> · <i>dy</i>/<i>dx</i> and <i>e</i><sup>y</sup> gives <i>e</i><sup>y</sup> · <i>dy</i>/<i>dx</i>",
            "mixed term: <i>d</i>/<i>dx</i> (<i>xy</i>) = <i>y</i> + <i>x</i> · <i>dy</i>/<i>dx</i>, and <i>d</i>/<i>dx</i> (<i>x</i><sup>2</sup><i>y</i><sup>3</sup>) = 2<i>xy</i><sup>3</sup> + 3<i>x</i><sup>2</sup><i>y</i><sup>2</sup> · <i>dy</i>/<i>dx</i>"
          ],
          "note": "Sanity check that costs one second: scan your differentiated equation. A y-term with no dy/dx anywhere means a chain factor was dropped, and the answer is already wrong."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · THE CIRCLE, AND WHERE ITS SLOPE DIES, TAP ONE",
          "chips": ["the slope at a point", "where the formula breaks"],
          "captions": [
            "x² + y² = 25, and the reason an implicit answer is allowed to contain both variables. Differentiating gives 2x + 2y y′ = 0, so y′ = −x/y, and at the marked point (3, 4) that reads −3/4. The amber line is the tangent with exactly that slope, and the faint radius shows why: the tangent is perpendicular to the radius, and the radius has slope y/x = 4/3. One formula, a different number at every point of the curve.",
            "The same formula at (5, 0), where y = 0 and −x/y has no value. This is not a failure of the method. The tangent there genuinely is vertical, so there is no finite slope to report, and the algebra is telling you so rather than hiding it. Near such a point the relation does not define y as a function of x at all, which is the one hypothesis implicit differentiation needs."
          ],
          "frames": [
            {
              "x": [-6.5, 6.5],
              "y": [-6.5, 6.5],
              "curves": [{ "c": "circle", "r": 5 }],
              "segments": [
                { "from": [0, 0], "to": [3, 4], "dash": true, "soft": true },
                { "from": [-0.2, 6.4], "to": [6.2, 1.6] }
              ],
              "points": [{ "x": 3, "y": 4, "label": "(3, 4)" }],
              "labels": [{ "x": -3.2, "y": 5.6, "text": "slope −x/y = −3/4", "soft": true }]
            },
            {
              "x": [-6.5, 6.5],
              "y": [-6.5, 6.5],
              "curves": [{ "c": "circle", "r": 5 }],
              "segments": [{ "from": [5, -5.8], "to": [5, 5.8] }],
              "points": [{ "x": 5, "y": 0, "label": "(5, 0)" }],
              "labels": [{ "x": -2.4, "y": 5.6, "text": "y = 0, so −x/y blows up", "soft": true }]
            }
          ]
        },
        {
          "t": "proc",
          "title": "Finding dy/dx implicitly, and then the second derivative",
          "steps": [
            "<b>Differentiate both sides term by term with respect to <i>x</i>.</b> Pure-<i>x</i> terms behave normally, <i>y</i>-terms get a <i>dy</i>/<i>dx</i>, mixed terms get the product rule as well.",
            "<b>Collect every <i>dy</i>/<i>dx</i> on the left</b> and move everything else to the right.",
            "<b>Factor <i>dy</i>/<i>dx</i> out and divide.</b> Do not try to solve the original relation for <i>y</i> first: it is usually messy, sometimes impossible, and never necessary.",
            "<b>For the second derivative, differentiate the first one again</b> with respect to <i>x</i>, using the quotient rule and remembering that <i>y</i> is still a function of <i>x</i> inside it.",
            "<b>Then substitute the first derivative back in</b>, and use the original relation to simplify. That last step is where the answer collapses from something ugly into something clean, and skipping it usually loses the mark."
          ]
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Find <i>dy</i>/<i>dx</i> for the folium of Descartes, <i>x</i><sup>3</sup> + <i>y</i><sup>3</sup> = 3<i>axy</i>.",
          "steps": [
            "Differentiate both sides: the chain rule on <i>y</i><sup>3</sup>, the product rule on <i>xy</i>. 3<i>x</i><sup>2</sup> + 3<i>y</i><sup>2</sup>(<i>dy</i>/<i>dx</i>) = 3<i>a</i>[<i>y</i> + <i>x</i>(<i>dy</i>/<i>dx</i>)].",
            "Divide through by 3: <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup>(<i>dy</i>/<i>dx</i>) = <i>ay</i> + <i>ax</i>(<i>dy</i>/<i>dx</i>).",
            "Gather: (<i>dy</i>/<i>dx</i>)(<i>y</i><sup>2</sup> − <i>ax</i>) = <i>ay</i> − <i>x</i><sup>2</sup>.",
            "Divide. Both variables appear in the answer, as they should for a curve that is not a graph."
          ],
          "ans": "dy/dx = (ay − x²)/(y² − ax)"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "If <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> = 1, find <i>d</i><sup>2</sup><i>y</i>/<i>dx</i><sup>2</sup> in terms of <i>y</i>.",
          "steps": [
            "First derivative, as for any circle: 2<i>x</i> + 2<i>y</i>(<i>dy</i>/<i>dx</i>) = 0, so <i>dy</i>/<i>dx</i> = −<i>x</i>/<i>y</i>.",
            "Differentiate that quotient again, remembering <i>d</i>/<i>dx</i> of <i>y</i> is <i>dy</i>/<i>dx</i>: <i>y</i>″ = −[(1)<i>y</i> − <i>x</i>(<i>dy</i>/<i>dx</i>)]/<i>y</i><sup>2</sup>.",
            "Substitute the first derivative in: the bracket becomes <i>y</i> − <i>x</i>(−<i>x</i>/<i>y</i>) = <i>y</i> + <i>x</i><sup>2</sup>/<i>y</i> = (<i>y</i><sup>2</sup> + <i>x</i><sup>2</sup>)/<i>y</i>. So <i>y</i>″ = −(<i>y</i><sup>2</sup> + <i>x</i><sup>2</sup>)/<i>y</i><sup>3</sup>.",
            "Now use the original relation, <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> = 1, and the whole numerator collapses to 1. That last substitution is the step examiners are looking for."
          ],
          "ans": "d²y/dx² = −1/y³"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "If <i>x</i>√(1 + <i>y</i>) + <i>y</i>√(1 + <i>x</i>) = 0 with <i>x</i> ≠ <i>y</i>, show that <i>dy</i>/<i>dx</i> = −1/(1 + <i>x</i>)<sup>2</sup>.",
          "steps": [
            "Differentiating this as it stands is punishing. Simplify the relation first: move one term across and square, giving <i>x</i><sup>2</sup>(1 + <i>y</i>) = <i>y</i><sup>2</sup>(1 + <i>x</i>).",
            "Expand and group: <i>x</i><sup>2</sup> − <i>y</i><sup>2</sup> + <i>x</i><sup>2</sup><i>y</i> − <i>y</i><sup>2</sup><i>x</i> = 0, which factors as (<i>x</i> − <i>y</i>)(<i>x</i> + <i>y</i>) + <i>xy</i>(<i>x</i> − <i>y</i>) = (<i>x</i> − <i>y</i>)(<i>x</i> + <i>y</i> + <i>xy</i>) = 0.",
            "Since <i>x</i> ≠ <i>y</i>, the second factor vanishes: <i>y</i>(1 + <i>x</i>) = −<i>x</i>, so <i>y</i> = −<i>x</i>/(1 + <i>x</i>). The relation was an explicit function all along, wearing a disguise.",
            "Quotient rule: <i>dy</i>/<i>dx</i> = −[(1 + <i>x</i>) − <i>x</i>]/(1 + <i>x</i>)<sup>2</sup> = −1/(1 + <i>x</i>)<sup>2</sup>. <b>Simplify before you differentiate</b> is worth more marks than any rule in the chapter."
          ],
          "ans": "dy/dx = −1/(1 + x)²"
        },
        {
          "t": "mcq",
          "q": "<i>d</i>/<i>dx</i> ln(cos <i>x</i>) equals:",
          "correct": 1,
          "opts": [
            {
              "label": "1/cos <i>x</i>",
              "nudge": "The outer derivative alone. You still owe the factor <i>d</i>/<i>dx</i>(cos <i>x</i>) = −sin <i>x</i>, and it is the signature chain-rule slip."
            },
            { "label": "−tan <i>x</i>", "nudge": null },
            {
              "label": "tan <i>x</i>",
              "nudge": "Right in magnitude, wrong in sign: the inner derivative of cos <i>x</i> is −sin <i>x</i>, not +sin <i>x</i>."
            },
            {
              "label": "−1/cos <i>x</i>",
              "nudge": "Keeps the outer reciprocal and borrows the minus sign, but never multiplies by sin <i>x</i>. The inner factor is the whole of −sin <i>x</i>, not just its sign."
            }
          ],
          "solution": "Outer derivative of ln(anything) is 1 over that same thing, so 1/cos x. Inner derivative is −sin x. Multiply: −sin x / cos x = −tan x. The general pattern is d/dx ln g = g′/g, and here g′ = −sin x."
        },
        {
          "t": "mcq",
          "q": "Differentiating <i>xy</i> with respect to <i>x</i> gives:",
          "correct": 2,
          "opts": [
            {
              "label": "<i>dy</i>/<i>dx</i>",
              "nudge": "Loses the <i>x</i> factor entirely. This would be the derivative of <i>y</i> alone, not of the product."
            },
            {
              "label": "<i>y</i>",
              "nudge": "Only the first half of the product rule. It treats <i>y</i> as a constant, which is exactly the sin implicit differentiation exists to avoid."
            },
            { "label": "<i>y</i> + <i>x</i>(<i>dy</i>/<i>dx</i>)", "nudge": null },
            {
              "label": "<i>x</i>(<i>dy</i>/<i>dx</i>)",
              "nudge": "Only the second half. A product of two <i>x</i>-dependent factors always yields <b>two</b> terms; a one-term answer is wrong by inspection."
            }
          ],
          "solution": "The product rule on x times y: derivative of x is 1, times y, plus x times the derivative of y, which is dy/dx. So y + x dy/dx. Both factors depend on x, so both strips of the rectangle are there."
        },
        {
          "t": "mcq",
          "q": "For sin <i>y</i> = <i>x</i>, the derivative <i>dy</i>/<i>dx</i> equals:",
          "correct": 1,
          "opts": [
            {
              "label": "cos <i>y</i>",
              "nudge": "That is the coefficient of <i>dy</i>/<i>dx</i>, not the answer. You differentiated correctly and then forgot to solve for the thing you were asked about."
            },
            { "label": "1/cos <i>y</i>", "nudge": null },
            {
              "label": "−1/cos <i>y</i>",
              "nudge": "A sign invented from nowhere. The derivative of sin <i>y</i> is +cos <i>y</i>, so no minus enters at any step."
            },
            {
              "label": "sec <i>y</i> tan <i>y</i>",
              "nudge": "The derivative of sec <i>y</i>, imported from the wrong row of the table. Nothing in this relation produces a tangent."
            }
          ],
          "solution": "Differentiate both sides with respect to x, chain rule on the y-term: cos y (dy/dx) = 1, so dy/dx = 1/cos y. This is exactly how the derivative of the inverse sine is built: substitute cos y = √(1 − sin²y) = √(1 − x²) and you have 1/√(1 − x²)."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Find <i>dy</i>/<i>dx</i> if <i>xy</i> = 1.",
              "a": "<i>y</i> + <i>x</i>(<i>dy</i>/<i>dx</i>) = 0, so <b><i>dy</i>/<i>dx</i> = −<i>y</i>/<i>x</i></b>, which is −1/<i>x</i><sup>2</sup> once you substitute <i>y</i> = 1/<i>x</i>."
            },
            {
              "q": "[CBSE] Find <i>dy</i>/<i>dx</i> if <i>x</i><sup>2</sup> − <i>xy</i> + <i>y</i><sup>2</sup> = 7.",
              "a": "2<i>x</i> − [<i>y</i> + <i>x</i>(<i>dy</i>/<i>dx</i>)] + 2<i>y</i>(<i>dy</i>/<i>dx</i>) = 0, so (2<i>y</i> − <i>x</i>)(<i>dy</i>/<i>dx</i>) = <i>y</i> − 2<i>x</i> and <b><i>dy</i>/<i>dx</i> = (<i>y</i> − 2<i>x</i>)/(2<i>y</i> − <i>x</i>)</b>."
            },
            {
              "q": "[JEE Main] Find <i>dy</i>/<i>dx</i> if sin(<i>xy</i>) = <i>x</i>.",
              "a": "cos(<i>xy</i>)[<i>y</i> + <i>x</i>(<i>dy</i>/<i>dx</i>)] = 1. Solve: <b><i>dy</i>/<i>dx</i> = (1 − <i>y</i> cos(<i>xy</i>))/(<i>x</i> cos(<i>xy</i>))</b>. Chain rule outside, product rule inside."
            },
            {
              "q": "[JEE Main] Find <i>dy</i>/<i>dx</i> if <i>y</i> = <i>x</i> sin <i>y</i>.",
              "a": "<i>dy</i>/<i>dx</i> = sin <i>y</i> + <i>x</i> cos <i>y</i>(<i>dy</i>/<i>dx</i>), so <b><i>dy</i>/<i>dx</i> = sin <i>y</i>/(1 − <i>x</i> cos <i>y</i>)</b>. Note that <i>y</i> appears on both sides and that is fine."
            },
            {
              "q": "[JEE Main] Differentiate <i>y</i> = tan<sup>3</sup>(2<i>x</i>), and say how many factors your answer must have.",
              "a": "Three layers, three factors: 3tan<sup>2</sup>(2<i>x</i>) · sec<sup>2</sup>(2<i>x</i>) · 2 = <b>6 tan<sup>2</sup>(2<i>x</i>) sec<sup>2</sup>(2<i>x</i>)</b>."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "Forgetting the inner derivative. <i>d</i>/<i>dx</i> sin(2<i>x</i>) is <b>2</b>cos(2<i>x</i>). Every layer you peel owes exactly one factor, and counting the factors against the layers catches it before the examiner does.",
            "Differentiating the inside too early. The outer derivative keeps the inner function <b>intact</b>; only its separate derivative becomes a multiplying factor. Simplifying inside the outer derivative is how triple composites lose a layer.",
            "Forgetting the <i>dy</i>/<i>dx</i> on a <i>y</i>-term. <i>d</i>/<i>dx</i>(<i>y</i><sup>2</sup>) = 2<i>y</i>(<i>dy</i>/<i>dx</i>), never just 2<i>y</i>. Scan the differentiated equation: a <i>y</i>-term with no <i>dy</i>/<i>dx</i> in sight is an instant red flag, and “2<i>x</i> + 2<i>y</i> = 0” is not a derivative at all.",
            "Forgetting the product rule on a mixed term. <i>d</i>/<i>dx</i>(<i>xy</i>) = <i>y</i> + <i>x</i>(<i>dy</i>/<i>dx</i>), two terms. Writing only the second is as common as writing only the first.",
            "Skipping the final substitution in a second derivative. You must put <i>dy</i>/<i>dx</i> back in, and then use the <b>original relation</b> to simplify: that is what turns −(<i>x</i><sup>2</sup> + <i>y</i><sup>2</sup>)/<i>y</i><sup>3</sup> into the clean −1/<i>y</i><sup>3</sup>."
          ]
        },
        {
          "t": "protip",
          "html": "treat every <i>y</i> as if it wore a small “(<i>x</i>)” label. write it in the margin once if you have to. with that label visible, implicit differentiation stops being a separate technique and becomes the chain rule you already know, and the <i>dy</i>/<i>dx</i> factors appear on their own without any effort of memory. and before you differentiate anything at all, look for an algebraic simplification: the surd relation that took four lines of implicit work is <i>y</i> = −<i>x</i>/(1 + <i>x</i>) after one squaring."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "dy/dx = (dy/du)(du/dx)", "note": "rates multiply; one factor per layer, so count them" },
            { "f": "[g]ⁿ → n[g]ⁿ⁻¹g′ · eᵍ → eᵍg′ · ln g → g′/g", "note": "the four patterns that cover most of the paper" },
            { "f": "d/dx f(y) = f′(y) · dy/dx", "note": "every y-term owes a dy/dx" },
            { "f": "d/dx (xy) = y + x dy/dx", "note": "mixed terms need the product rule too" },
            { "f": "x² + y² = a² ⇒ dy/dx = −x/y", "note": "an answer in both variables is correct, not a mistake" },
            { "f": "x² + y² = 1 ⇒ y″ = −1/y³", "note": "substitute dy/dx back, then use the relation" }
          ],
          "aids": [
            "“outside-in, and never forget the inside”",
            "“every y wears an invisible (x)”"
          ]
        }
      ]
    },
    {
      "n": "04",
      "title": "Inverse Trigonometric Derivatives",
      "chip": "04 INVERSE TRIG",
      "kalam": "collapse it first, then mind the range",
      "blocks": [
        {
          "t": "p",
          "html": "An inverse trigonometric function answers one question: <b>which angle gives this ratio?</b> sin<sup>−1</sup><i>x</i> is the angle whose sine is <i>x</i>. To differentiate these you need no new machinery at all, only the implicit differentiation you just met. If <i>y</i> = sin<sup>−1</sup><i>x</i> then sin <i>y</i> = <i>x</i>; differentiate both sides and solve for <i>dy</i>/<i>dx</i>. Out comes 1/√(1 − <i>x</i><sup>2</sup>). <b>Every one of the six is born that way</b>, which means the table is not six facts to memorise but one method applied six times."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE ARCTANGENT AND THE ARCSINE, TAP A LINE",
          "steps": [
            {
              "eq": "y = tan⁻¹x, so tan y = x",
              "why": "Undo the inverse by applying the function to both sides. This is the move that converts an expression you cannot differentiate into a relation you can, and it is the only creative step in the whole derivation."
            },
            {
              "eq": "sec²y (dy/dx) = 1, so dy/dx = 1/sec²y = 1/(1 + tan²y) = 1/(1 + x²)",
              "why": "Implicit differentiation with the chain rule on tan y. Then the Pythagorean identity turns sec²y into 1 + tan²y, and tan y is x by construction, so the answer comes out in terms of x rather than y. No domain worry here: 1 + x² is never zero and the arctangent is defined on all of ℝ."
            },
            {
              "eq": "y = sin⁻¹x, so sin y = x, and cos y (dy/dx) = 1",
              "why": "The same two moves. Now the identity to reach for is cos y = √(1 − sin²y) = √(1 − x²), so dy/dx = 1/√(1 − x²)."
            },
            {
              "eq": "the + root, because cos y ≥ 0 on [−π/2, π/2]",
              "why": "This is the step that is worth a mark and is usually skipped. A square root has two candidates and the principal range of the arcsine decides between them: y lies in [−π/2, π/2], where the cosine is never negative. The principal range is not decoration; it settles the sign."
            }
          ]
        },
        {
          "t": "defgrid",
          "title": "The six derivatives, in cofunction pairs",
          "rows": [
            {
              "k": "sin<sup>−1</sup><i>x</i> · cos<sup>−1</sup><i>x</i>",
              "v": "1/√(1 − <i>x</i><sup>2</sup>) · −1/√(1 − <i>x</i><sup>2</sup>), both for |<i>x</i>| < 1"
            },
            {
              "k": "tan<sup>−1</sup><i>x</i> · cot<sup>−1</sup><i>x</i>",
              "v": "1/(1 + <i>x</i><sup>2</sup>) · −1/(1 + <i>x</i><sup>2</sup>), both on all of ℝ"
            },
            {
              "k": "sec<sup>−1</sup><i>x</i> · csc<sup>−1</sup><i>x</i>",
              "v": "1/(|<i>x</i>|√(<i>x</i><sup>2</sup> − 1)) · −1/(|<i>x</i>|√(<i>x</i><sup>2</sup> − 1)), both for |<i>x</i>| > 1"
            },
            {
              "k": "The pattern",
              "v": "each cofunction is the same magnitude with a <b>minus</b>. Three minus signs, and they are cos<sup>−1</sup>, cot<sup>−1</sup>, csc<sup>−1</sup>"
            },
            {
              "k": "The sum consequence",
              "v": "sin<sup>−1</sup><i>x</i> + cos<sup>−1</sup><i>x</i> is constant, since its derivative is 0. The constant is π/2, and the same holds for the other two pairs"
            },
            {
              "k": "Chain them",
              "v": "<i>d</i>/<i>dx</i> tan<sup>−1</sup>(<i>g</i>) = <i>g</i>′/(1 + <i>g</i><sup>2</sup>), so tan<sup>−1</sup>(2<i>x</i>) gives 2/(1 + 4<i>x</i><sup>2</sup>)"
            }
          ]
        },
        {
          "t": "def",
          "term": "Why sec inverse carries a modulus",
          "html": "Setting <i>y</i> = sec<sup>−1</sup><i>x</i> gives sec <i>y</i> tan <i>y</i> (<i>dy</i>/<i>dx</i>) = 1, and tan <i>y</i> = ±√(sec<sup>2</sup><i>y</i> − 1). On the principal range the product sec <i>y</i> tan <i>y</i> is <b>positive on both branches</b>, so the honest answer is 1/(|<i>x</i>|√(<i>x</i><sup>2</sup> − 1)) rather than 1/(<i>x</i>√(<i>x</i><sup>2</sup> − 1)). The two agree for <i>x</i> > 1 and differ in sign for <i>x</i> < −1, which is exactly where the dropped modulus is examined."
        },
        {
          "t": "p",
          "html": "The real exam drama is elsewhere. Examiners adore expressions like <i>y</i> = tan<sup>−1</sup>(2<i>x</i>/(1 − <i>x</i><sup>2</sup>)) and <i>y</i> = sin<sup>−1</sup>(2<i>x</i>√(1 − <i>x</i><sup>2</sup>)), which look monstrous if you reach for the quotient rule. The secret is that they are <b>double-angle formulas in disguise</b>. Simplify first with a trigonometric substitution, and differentiate the simple result. Grinding one of these head-on wastes five minutes and invites three algebra errors; recognising the pattern turns it into a one-line answer."
        },
        {
          "t": "think",
          "html": "put <i>x</i> = tan θ and watch 2<i>x</i>/(1 − <i>x</i><sup>2</sup>) become 2tan θ/(1 − tan<sup>2</sup>θ), which is just tan 2θ. so the whole thing is tan<sup>−1</sup>(tan 2θ) = 2θ = 2tan<sup>−1</sup><i>x</i>, and differentiating <b>that</b> is a one-liner. the brutal expression was never brutal, it was wearing a costume."
        },
        {
          "t": "defgrid",
          "title": "The golden identities and their substitutions",
          "rows": [
            {
              "k": "2 tan<sup>−1</sup><i>x</i>",
              "v": "= tan<sup>−1</sup>(2<i>x</i>/(1 − <i>x</i><sup>2</sup>)) = sin<sup>−1</sup>(2<i>x</i>/(1 + <i>x</i><sup>2</sup>)) = cos<sup>−1</sup>((1 − <i>x</i><sup>2</sup>)/(1 + <i>x</i><sup>2</sup>))"
            },
            {
              "k": "2 sin<sup>−1</sup><i>x</i> · 3 sin<sup>−1</sup><i>x</i>",
              "v": "= sin<sup>−1</sup>(2<i>x</i>√(1 − <i>x</i><sup>2</sup>)) · = sin<sup>−1</sup>(3<i>x</i> − 4<i>x</i><sup>3</sup>)"
            },
            {
              "k": "Sees 2<i>x</i>/(1 ∓ <i>x</i><sup>2</sup>) or (1 − <i>x</i><sup>2</sup>)/(1 + <i>x</i><sup>2</sup>)",
              "v": "substitute <b><i>x</i> = tan θ</b>, so θ = tan<sup>−1</sup><i>x</i>"
            },
            {
              "k": "Sees √(1 − <i>x</i><sup>2</sup>)",
              "v": "substitute <b><i>x</i> = sin θ</b> (or cos θ), so θ = sin<sup>−1</sup><i>x</i>"
            },
            {
              "k": "Sees √(<i>x</i><sup>2</sup> − 1)",
              "v": "substitute <b><i>x</i> = sec θ</b>"
            },
            {
              "k": "The fine print",
              "v": "each identity holds only where the multiple angle stays in the <b>principal range</b>. Outside it the simplification changes, and so can the sign of the derivative"
            }
          ]
        },
        {
          "t": "proc",
          "title": "The substitution method, end to end",
          "steps": [
            "<b>Spot the pattern</b> from the shape of the argument. 2<i>x</i>/(1 − <i>x</i><sup>2</sup>), 2<i>x</i>√(1 − <i>x</i><sup>2</sup>), (1 − <i>x</i><sup>2</sup>)/(1 + <i>x</i><sup>2</sup>) and 3<i>x</i> − 4<i>x</i><sup>3</sup> are all multiple angles in disguise.",
            "<b>Substitute the matching trigonometric form</b>, so that θ becomes the inverse function of <i>x</i>. Write down the interval θ lives in, taken from the principal range, before you go on.",
            "<b>Collapse the inner expression</b> into a single trigonometric ratio of a multiple angle, using the double-angle or triple-angle formula.",
            "<b>Cancel the inverse, and check you are allowed to.</b> tan<sup>−1</sup>(tan 2θ) = 2θ only when 2θ lies in (−π/2, π/2), and the corresponding restriction on <i>x</i> is part of the answer.",
            "<b>Differentiate the simple form, then state the valid range of <i>x</i>.</b> If the question spans a breakpoint, give the derivative on each piece: they can differ by a sign, and an answer valid on only half the domain earns half the marks."
          ]
        },
        {
          "t": "p",
          "html": "Why the fine print matters, in one picture. sin<sup>−1</sup>(sin <i>t</i>) is <b>not</b> <i>t</i>. It equals <i>t</i> only while <i>t</i> stays inside the principal range [−π/2, π/2]; outside it the graph folds back, because the output of an arcsine is forbidden to leave that interval. So sin<sup>−1</sup>(sin <i>t</i>) is a triangle wave: it rises with slope +1, turns at π/2, and falls with slope −1. That fold is where the derivative of every substitution problem changes sign, and it is why a single formula written for all <i>x</i> is wrong on half the domain."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · WHY THE INVERSE DOES NOT ALWAYS CANCEL, TAP ONE",
          "chips": ["where it cancels", "where it folds back"],
          "captions": [
            "The shaded strip is the principal range of the arcsine, from minus pi over two to plus pi over two. Inside it the amber graph of sin inverse of sin t sits exactly on the dashed line y = t, so the cancellation is honest and the slope is +1. This is the only interval where writing sin inverse of sin t equals t costs you nothing.",
            "The same function drawn wider. Past pi over two the amber graph turns and runs back down with slope −1 while the dashed line y = t keeps climbing, and the two have nothing to do with each other any more. On that stretch the correct identity is pi minus t, not t, and its derivative is −1. Every sign flip in this topic is this corner, seen through a substitution."
          ],
          "frames": [
            {
              "x": [-4.9, 4.9],
              "y": [-2.3, 2.3],
              "piTicks": true,
              "curves": [{ "c": "line", "m": 1, "k": 0, "dash": true, "soft": true }],
              "bands": [{ "x0": -1.5708, "x1": 1.5708 }],
              "segments": [{ "from": [-1.5708, -1.5708], "to": [1.5708, 1.5708] }],
              "points": [
                { "x": 1.5708, "y": 1.5708 },
                { "x": -1.5708, "y": -1.5708 }
              ],
              "labels": [{ "x": 0, "y": -1.95, "text": "here it really is t", "soft": true }]
            },
            {
              "x": [-4.9, 4.9],
              "y": [-2.3, 2.3],
              "piTicks": true,
              "curves": [{ "c": "line", "m": 1, "k": 0, "dash": true, "soft": true }],
              "segments": [
                { "from": [-4.7124, 1.5708], "to": [-1.5708, -1.5708] },
                { "from": [-1.5708, -1.5708], "to": [1.5708, 1.5708] },
                { "from": [1.5708, 1.5708], "to": [4.7124, -1.5708] }
              ],
              "points": [
                { "x": 1.5708, "y": 1.5708 },
                { "x": -1.5708, "y": -1.5708 }
              ],
              "labels": [
                { "x": -0.85, "y": 1.95, "text": "slope +1", "soft": true },
                { "x": 3.2, "y": 1.95, "text": "slope −1", "soft": true }
              ]
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "WHERE EACH COLLAPSE IS LEGAL",
          "tag": "the range guards, and the sign outside them",
          "main": "tan⁻¹(2x/(1 − x²)) = 2 tan⁻¹x for |x| < 1",
          "legend": [
            "sin<sup>−1</sup>(2<i>x</i>√(1 − <i>x</i><sup>2</sup>)) = 2 sin<sup>−1</sup><i>x</i> only for |<i>x</i>| ≤ 1/√2; for 1/√2 < <i>x</i> ≤ 1 it is π − 2 sin<sup>−1</sup><i>x</i>, so the derivative changes sign",
            "sin<sup>−1</sup>(2<i>x</i>/(1 + <i>x</i><sup>2</sup>)) = 2 tan<sup>−1</sup><i>x</i> for |<i>x</i>| ≤ 1; for <i>x</i> > 1 it is π − 2 tan<sup>−1</sup><i>x</i> and for <i>x</i> < −1 it is −π − 2 tan<sup>−1</sup><i>x</i>",
            "cos<sup>−1</sup>((1 − <i>x</i><sup>2</sup>)/(1 + <i>x</i><sup>2</sup>)) = 2 tan<sup>−1</sup><i>x</i> for <i>x</i> ≥ 0, and −2 tan<sup>−1</sup><i>x</i> for <i>x</i> < 0"
          ],
          "note": "At a breakpoint like x = ±1 the two one-sided derivatives are +1 and −1: both finite, so this is a corner, not a cusp. A cusp needs the slope to run to infinity, and nothing here does."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Differentiate <i>y</i> = tan<sup>−1</sup>(2<i>x</i>/(1 − <i>x</i><sup>2</sup>)) for −1 < <i>x</i> < 1.",
          "steps": [
            "Substitute <i>x</i> = tan θ, so θ = tan<sup>−1</sup><i>x</i>, and for this range of <i>x</i> the angle θ lies in (−π/4, π/4).",
            "The argument collapses: 2tan θ/(1 − tan<sup>2</sup>θ) = tan 2θ.",
            "Cancellation check. 2θ lies in (−π/2, π/2), which is the principal range of tan<sup>−1</sup>, so tan<sup>−1</sup>(tan 2θ) = 2θ is legal here. Hence <i>y</i> = 2 tan<sup>−1</sup><i>x</i>.",
            "Differentiate the simple form. Grinding the quotient rule on the original gives the same answer after several lines and two chances to slip."
          ],
          "ans": "y′ = 2/(1 + x²), valid for |x| < 1"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN · TRAP",
          "q": "Differentiate <i>y</i> = sin<sup>−1</sup>(2<i>x</i>√(1 − <i>x</i><sup>2</sup>)) and state where each answer is valid.",
          "steps": [
            "Substitute <i>x</i> = sin θ with θ = sin<sup>−1</sup><i>x</i>. Then 2<i>x</i>√(1 − <i>x</i><sup>2</sup>) = 2 sin θ cos θ = sin 2θ.",
            "Cancellation needs 2θ inside [−π/2, π/2], that is θ inside [−π/4, π/4], that is <b>|<i>x</i>| ≤ 1/√2</b>. There <i>y</i> = 2 sin<sup>−1</sup><i>x</i> and <i>y</i>′ = 2/√(1 − <i>x</i><sup>2</sup>).",
            "For 1/√2 < <i>x</i> ≤ 1 the angle 2θ lies in (π/2, π], and the identity becomes <i>y</i> = π − 2 sin<sup>−1</sup><i>x</i>.",
            "So there the derivative is <b>−</b>2/√(1 − <i>x</i><sup>2</sup>): the same magnitude with the opposite sign. A student who writes one formula for all <i>x</i> is wrong on part of the domain, and that part is always the part the option list offers."
          ],
          "ans": "y′ = 2/√(1 − x²) for |x| ≤ 1/√2, and −2/√(1 − x²) for 1/√2 < x ≤ 1"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "Differentiate <i>y</i> = tan<sup>−1</sup>((√(1 + <i>x</i><sup>2</sup>) − 1)/<i>x</i>).",
          "steps": [
            "The √(1 + <i>x</i><sup>2</sup>) says <i>x</i> = tan θ. Then √(1 + <i>x</i><sup>2</sup>) = sec θ and the argument is (sec θ − 1)/tan θ.",
            "Write everything over sin and cos: (1/cos θ − 1)/(sin θ/cos θ) = (1 − cos θ)/sin θ.",
            "Half-angle identities: 1 − cos θ = 2sin<sup>2</sup>(θ/2) and sin θ = 2 sin(θ/2) cos(θ/2), so the ratio is tan(θ/2).",
            "Hence <i>y</i> = θ/2 = ½ tan<sup>−1</sup><i>x</i>, and one differentiation finishes it. An intimidating expression reduced to a clean half."
          ],
          "ans": "y′ = 1/(2(1 + x²))"
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Differentiate <i>y</i> = tan<sup>−1</sup>(cos <i>x</i>/(1 + sin <i>x</i>)).",
          "steps": [
            "No <i>x</i><sup>2</sup> in sight, so this is a half-angle problem rather than a double-angle one. Write both parts in <i>x</i>/2.",
            "cos <i>x</i> = cos<sup>2</sup>(<i>x</i>/2) − sin<sup>2</sup>(<i>x</i>/2) = (cos(<i>x</i>/2) − sin(<i>x</i>/2))(cos(<i>x</i>/2) + sin(<i>x</i>/2)), and 1 + sin <i>x</i> = (cos(<i>x</i>/2) + sin(<i>x</i>/2))<sup>2</sup>.",
            "One factor cancels, leaving (1 − tan(<i>x</i>/2))/(1 + tan(<i>x</i>/2)) after dividing top and bottom by cos(<i>x</i>/2). That is tan(π/4 − <i>x</i>/2).",
            "So <i>y</i> = π/4 − <i>x</i>/2, a straight line, and its derivative is a constant. Nothing about the original expression suggested that."
          ],
          "ans": "y′ = −1/2"
        },
        {
          "t": "p",
          "html": "One point of vocabulary, because a common source of this material gets it wrong. At a breakpoint such as <i>x</i> = 1 for <i>y</i> = sin<sup>−1</sup>(2<i>x</i>/(1 + <i>x</i><sup>2</sup>)), the derivative approaches +2/(1 + <i>x</i><sup>2</sup>) = +1 from the left and −2/(1 + <i>x</i><sup>2</sup>) = −1 from the right. Both are <b>finite</b>. That is a <b>corner</b>, in exactly the sense of topic 02, and it is not a cusp: a cusp needs the slope to run off to infinity, as <i>x</i><sup>1/3</sup> does at 0. Getting the name right matters because the two failures are distinguished in the marking scheme."
        },
        {
          "t": "mcq",
          "q": "<i>d</i>/<i>dx</i> tan<sup>−1</sup>(2<i>x</i>/(1 − <i>x</i><sup>2</sup>)) for |<i>x</i>| < 1 equals:",
          "correct": 1,
          "opts": [
            {
              "label": "2/(1 − <i>x</i><sup>2</sup>)",
              "nudge": "Comes from grinding the quotient rule and slipping a sign in the denominator. After the substitution the expression is 2 tan<sup>−1</sup><i>x</i>, whose derivative has 1 <b>plus</b> <i>x</i><sup>2</sup> below."
            },
            { "label": "2/(1 + <i>x</i><sup>2</sup>)", "nudge": null },
            {
              "label": "1/(1 + <i>x</i><sup>2</sup>)",
              "nudge": "Forgets the factor 2. The expression collapses to <b>2</b> tan<sup>−1</sup><i>x</i>, not tan<sup>−1</sup><i>x</i>, so the derivative doubles."
            },
            {
              "label": "2/(1 − <i>x</i><sup>2</sup>)<sup>2</sup>",
              "nudge": "The shape you get from the quotient rule if you never simplify: a squared denominator that the substitution route never produces."
            }
          ],
          "solution": "Put x = tan θ, so the argument is tan 2θ and the whole expression is 2θ = 2 tan⁻¹x, legally for |x| < 1. Differentiating gives 2/(1 + x²). The substitution takes thirty seconds; the quotient rule takes five minutes and lands on the same place if nothing slips."
        },
        {
          "t": "mcq",
          "q": "The simplification sin<sup>−1</sup>(2<i>x</i>√(1 − <i>x</i><sup>2</sup>)) = 2 sin<sup>−1</sup><i>x</i> holds for:",
          "correct": 1,
          "opts": [
            {
              "label": "all <i>x</i> in [−1, 1]",
              "nudge": "The classic over-extension. Both sides are defined on all of [−1, 1], but they are not <b>equal</b> there: past 1/√2 the true identity is π − 2 sin<sup>−1</sup><i>x</i>."
            },
            { "label": "<i>x</i> in [−1/√2, 1/√2]", "nudge": null },
            {
              "label": "<i>x</i> ≥ 0 only",
              "nudge": "The identity is odd in <i>x</i>, so it cannot break on one side of 0 and hold on the other. The restriction is symmetric about the origin."
            },
            {
              "label": "<i>x</i> in (−1, 1) except 0",
              "nudge": "Nothing goes wrong at 0; both sides are 0 there. The failure happens at the far ends, where the doubled angle leaves the principal range."
            }
          ],
          "solution": "Write x = sin θ. The cancellation sin⁻¹(sin 2θ) = 2θ needs 2θ inside [−π/2, π/2], so sin⁻¹x must lie in [−π/4, π/4], which means |x| ≤ 1/√2. Outside that the identity changes to π − 2 sin⁻¹x, and the derivative flips sign with it."
        },
        {
          "t": "mcq",
          "q": "<i>d</i>/<i>dx</i> sec<sup>−1</sup><i>x</i> equals:",
          "correct": 1,
          "opts": [
            {
              "label": "1/(<i>x</i>√(<i>x</i><sup>2</sup> − 1))",
              "nudge": "Drops the modulus. It agrees for <i>x</i> > 1 and is genuinely wrong for <i>x</i> < −1, where it reports a negative derivative for an increasing function."
            },
            { "label": "1/(|<i>x</i>|√(<i>x</i><sup>2</sup> − 1))", "nudge": null },
            {
              "label": "1/√(<i>x</i><sup>2</sup> − 1)",
              "nudge": "Loses the <i>x</i> factor altogether. Differentiating sec <i>y</i> = <i>x</i> brings down sec <i>y</i> tan <i>y</i>, and the sec <i>y</i> is exactly where the <i>x</i> comes from."
            },
            {
              "label": "1/(|<i>x</i>|√(1 − <i>x</i><sup>2</sup>))",
              "nudge": "The wrong radicand, borrowed from the arcsine row. The domain of sec<sup>−1</sup> is |<i>x</i>| > 1, so <i>x</i><sup>2</sup> − 1 is what must sit under the root."
            }
          ],
          "solution": "From sec y = x, sec y tan y (dy/dx) = 1. On the principal range sec y tan y is positive on both branches and equals |x|√(x² − 1), so dy/dx = 1/(|x|√(x² − 1)). The modulus is not cosmetic; it is what keeps the derivative positive for x < −1."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Differentiate <i>y</i> = cos<sup>−1</sup>(3<i>x</i>).",
              "a": "Chain rule on the standard result: <b>−3/√(1 − 9<i>x</i><sup>2</sup>)</b>. The minus belongs to the arccosine, the 3 to the inside."
            },
            {
              "q": "[CBSE] Differentiate <i>y</i> = sin<sup>−1</sup>(<i>x</i><sup>2</sup>).",
              "a": "<b>2<i>x</i>/√(1 − <i>x</i><sup>4</sup>)</b>. The inner square goes into the radicand as <i>x</i><sup>4</sup> and its derivative 2<i>x</i> comes out in front."
            },
            {
              "q": "[JEE Main] Differentiate <i>y</i> = sin<sup>−1</sup>(2<i>x</i>/(1 + <i>x</i><sup>2</sup>)) for −1 < <i>x</i> < 1.",
              "a": "Put <i>x</i> = tan θ: the argument is sin 2θ and 2θ stays in the principal range, so <i>y</i> = 2 tan<sup>−1</sup><i>x</i> and <b><i>y</i>′ = 2/(1 + <i>x</i><sup>2</sup>)</b>. For |<i>x</i>| > 1 the sign flips."
            },
            {
              "q": "[JEE Main] Differentiate <i>y</i> = tan<sup>−1</sup>(cos <i>x</i>/(1 + sin <i>x</i>)).",
              "a": "Half angles collapse it to tan(π/4 − <i>x</i>/2), so <i>y</i> = π/4 − <i>x</i>/2 and <b><i>y</i>′ = −1/2</b>."
            },
            {
              "q": "[JEE Advanced] Differentiate <i>y</i> = cos<sup>−1</sup>((1 − <i>x</i><sup>2</sup>)/(1 + <i>x</i><sup>2</sup>)) for <i>x</i> > 0, and say what happens for <i>x</i> < 0.",
              "a": "For <i>x</i> > 0 it is 2 tan<sup>−1</sup><i>x</i>, so <b>2/(1 + <i>x</i><sup>2</sup>)</b>. For <i>x</i> < 0 it is −2 tan<sup>−1</sup><i>x</i>, so <b>−2/(1 + <i>x</i><sup>2</sup>)</b>. The sign flips at the origin."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "Writing one simplified formula for <b>all</b> <i>x</i>. These identities are piecewise, and so is the derivative. State the range with the answer, every time: an answer valid on half the domain is worth half the marks.",
            "Mixing up which three carry the minus sign. It is the <b>cofunctions</b>: cos<sup>−1</sup>, cot<sup>−1</sup>, csc<sup>−1</sup>. Their partners sin<sup>−1</sup>, tan<sup>−1</sup>, sec<sup>−1</sup> are all positive.",
            "Dropping the |<i>x</i>| in sec<sup>−1</sup> and csc<sup>−1</sup>. It matters for <i>x</i> < −1, and it is the only place in the six-row table where an absolute value appears.",
            "Brute-forcing 2<i>x</i>/(1 − <i>x</i><sup>2</sup>) through the quotient rule. It works, and it costs five minutes and two chances to slip a sign. <b>Substitution is both faster and safer.</b>",
            "Calling the breakpoint a cusp. At <i>x</i> = ±1 the one-sided derivatives are +1 and −1, both finite, so it is a <b>corner</b>. A cusp is where the slope runs to infinity, and none of these do."
          ]
        },
        {
          "t": "protip",
          "html": "train your eye on the argument alone, before you read the rest of the question. 2<i>x</i>/(1 ∓ <i>x</i><sup>2</sup>) and (1 − <i>x</i><sup>2</sup>)/(1 + <i>x</i><sup>2</sup>) scream “<i>x</i> = tan θ”. 2<i>x</i>√(1 − <i>x</i><sup>2</sup>) and 3<i>x</i> − 4<i>x</i><sup>3</sup> scream “<i>x</i> = sin θ”. √(<i>x</i><sup>2</sup> − 1) screams “<i>x</i> = sec θ”. recognising the pattern turns a five-minute grind into a thirty-second answer, and then <b>always</b> finish by writing down the range on which your simplification was legal."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "d/dx sin⁻¹x = 1/√(1 − x²) · d/dx tan⁻¹x = 1/(1 + x²)", "note": "each derived from sin y = x by implicit differentiation" },
            { "f": "d/dx sec⁻¹x = 1/(|x|√(x² − 1))", "note": "the modulus is essential for x below −1" },
            { "f": "cos⁻¹, cot⁻¹, csc⁻¹ carry the minus", "note": "same magnitude as their partners, opposite sign" },
            { "f": "2 tan⁻¹x = tan⁻¹(2x/(1 − x²)) = sin⁻¹(2x/(1 + x²))", "note": "double angle in disguise; substitute x = tan θ" },
            { "f": "sin⁻¹(2x√(1 − x²)) = 2 sin⁻¹x only for |x| ≤ 1/√2", "note": "beyond it the identity is pi minus twice the arcsine" },
            { "f": "at a breakpoint the derivative flips sign", "note": "finite on both sides, so a corner and not a cusp" }
          ],
          "aids": [
            "“substitute, collapse the double angle, then differentiate”",
            "“and mind the range, or lose half the domain”"
          ]
        }
      ]
    },
    {
      "n": "05",
      "title": "Logarithmic and Parametric Differentiation",
      "chip": "05 LOG & PARAMETRIC",
      "kalam": "take logs, or ask the puppeteer",
      "blocks": [
        {
          "t": "p",
          "html": "Differentiate three things: <i>x</i><sup>5</sup>, then 5<sup>x</sup>, then <i>x</i><sup>x</sup>. The first is the power rule, which assumes the <b>exponent stands still</b>. The second is the exponential rule, which assumes the <b>base stands still</b>. The third has a variable in both places at once, so neither rule applies and you are stuck. That is not a gap in your training, it is a genuine gap in the rules, and closing it needs a different kind of move."
        },
        {
          "t": "think",
          "html": "think of the logarithm as a currency converter in a busy market. it converts the hard currency of multiplication and powers into the easy currency of addition: ln(<i>xy</i>) = ln <i>x</i> + ln <i>y</i>, and ln(<i>x</i><sup>n</sup>) = <i>n</i> ln <i>x</i>. take ln of both sides of <i>y</i> = <i>x</i><sup>x</sup> and the troublesome exponent slides down to become an ordinary factor: ln <i>y</i> = <i>x</i> ln <i>x</i>, which you <b>can</b> differentiate."
        },
        {
          "t": "formula",
          "kicker": "THE ENGINE",
          "tag": "y is a function of x, so ln y is a composite",
          "main": "d/dx (ln y) = (1/y)(dy/dx)",
          "legend": [
            "the 1/<i>y</i> is nothing but the chain rule on the outer logarithm, and <i>dy</i>/<i>dx</i> is the derivative of the inner <i>y</i>",
            "dropping it, and writing <i>d</i>/<i>dx</i> ln <i>y</i> = 1/<i>y</i>, silently corrupts every answer in the topic"
          ],
          "note": "The technique earns its keep twice: for a variable base with a variable exponent, and for a long ugly product or quotient, where ln shatters the whole thing into a sum that differentiates term by term."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE MASTER FORMULA FOR f TO THE POWER g, TAP A LINE",
          "steps": [
            {
              "eq": "y = [f(x)]<sup>g(x)</sup>, with f(x) > 0",
              "why": "The positivity is not a technicality you can skip: the logarithm of a non-positive number does not exist, so the whole method needs a positive base. If the base can go negative, work with its modulus or restrict the domain and say so."
            },
            {
              "eq": "ln y = g(x) ln f(x)",
              "why": "Take the natural logarithm of both sides. The point of the move is that the log pulls the exponent down to the front, converting a power nothing can differentiate into a plain product that the product rule handles."
            },
            {
              "eq": "(1/y)(dy/dx) = g′(x) ln f(x) + g(x) f′(x)/f(x)",
              "why": "Differentiate both sides. The left uses the chain rule on ln y, which is where the 1/y comes from. The right uses the product rule on g times ln f, and the chain rule again on ln f, which is where the f′/f comes from."
            },
            {
              "eq": "dy/dx = [f]<sup>g</sup> [ g′ ln f + g f′/f ]",
              "why": "Multiply through by y and substitute the original expression back for y. Read the answer as two pieces: the first is what you would get with the base frozen, the exponential-rule piece, and the second is what you would get with the exponent frozen, the power-rule piece. The truth is their sum, and each half on its own is a standard wrong option."
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "THE u TO THE v SHORTCUT",
          "tag": "u = f(x) > 0, v = g(x)",
          "main": "d/dx (uᵛ) = uᵛ ln u · v′ + v uᵛ⁻¹ u′",
          "legend": [
            "first term is the <b>exponential piece</b>, base frozen: differentiate as if <i>u</i> were a constant, which brings down ln <i>u</i>",
            "second term is the <b>power piece</b>, exponent frozen: differentiate as if <i>v</i> were a constant, which gives the ordinary power rule"
          ],
          "note": "Worth memorising as a sum of two familiar answers rather than as a formula: d/dx <i>x</i><sup>x</sup> is <i>x</i><sup>x</sup> ln <i>x</i> plus <i>x</i>·<i>x</i><sup>x−1</sup> = <i>x</i><sup>x</sup>, so <i>x</i><sup>x</sup>(1 + ln <i>x</i>). Each half alone is a distractor in every MCQ on this."
        },
        {
          "t": "proc",
          "title": "Logarithmic differentiation, checklist",
          "steps": [
            "<b>Confirm the base is positive</b>, or wrap it in a modulus and restrict the domain. Say which you did.",
            "<b>Take ln of both sides.</b> Not log to base 10, not log to some base the question mentions in passing: the natural log, because its derivative is the clean 1/<i>x</i>.",
            "<b>Use the log laws to flatten the right side</b> into a sum and difference of simple terms, bringing every exponent down to the front. A quotient of four factors becomes four separate logs.",
            "<b>Differentiate both sides implicitly</b>, remembering the 1/<i>y</i> on the left. Every term on the right is now a one-line derivative.",
            "<b>Multiply by <i>y</i> and substitute the original expression back.</b> Leaving the answer with a bare <i>y</i> in it is incomplete unless the question asked for it in that form."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Differentiate <i>y</i> = <i>x</i><sup>sin x</sup> for <i>x</i> > 0.",
          "steps": [
            "Variable base and variable exponent, so no single rule applies. Take logs: ln <i>y</i> = sin <i>x</i> · ln <i>x</i>.",
            "Differentiate. Left side by the chain rule: (1/<i>y</i>)(<i>dy</i>/<i>dx</i>). Right side by the product rule: cos <i>x</i> · ln <i>x</i> + sin <i>x</i> · (1/<i>x</i>).",
            "Multiply by <i>y</i> and substitute back.",
            "Cross-check with the shortcut: exponential piece <i>x</i><sup>sin x</sup> ln <i>x</i> · cos <i>x</i>, power piece sin <i>x</i> · <i>x</i><sup>sin x−1</sup> · 1. Their sum is the same thing."
          ],
          "ans": "dy/dx = <i>x</i><sup>sin x</sup> (cos <i>x</i> ln <i>x</i> + (sin <i>x</i>)/<i>x</i>)"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Differentiate <i>y</i> = (tan <i>x</i>)<sup>cot x</sup>.",
          "steps": [
            "Take logs: ln <i>y</i> = cot <i>x</i> · ln(tan <i>x</i>).",
            "Differentiate the product: (1/<i>y</i>)<i>y</i>′ = −csc<sup>2</sup><i>x</i> · ln(tan <i>x</i>) + cot <i>x</i> · (sec<sup>2</sup><i>x</i>/tan <i>x</i>).",
            "Simplify the second term, which is where this problem is won: cot <i>x</i> · sec<sup>2</sup><i>x</i>/tan <i>x</i> = cot<sup>2</sup><i>x</i> sec<sup>2</sup><i>x</i> = (cos<sup>2</sup><i>x</i>/sin<sup>2</sup><i>x</i>)(1/cos<sup>2</sup><i>x</i>) = csc<sup>2</sup><i>x</i>.",
            "Both terms now carry csc<sup>2</sup><i>x</i>, so factor it out and multiply by <i>y</i>."
          ],
          "ans": "y′ = (tan <i>x</i>)<sup>cot x</sup> csc<sup>2</sup><i>x</i> (1 − ln tan <i>x</i>)"
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Using logarithmic differentiation, find <i>dy</i>/<i>dx</i> for <i>y</i> = (<i>x</i> − 1)(<i>x</i> − 2)/[(<i>x</i> − 3)(<i>x</i> − 4)].",
          "steps": [
            "No variable exponent here, so this is the second use of the technique: the product rule twice and the quotient rule once is a page of algebra, and ln collapses it.",
            "ln <i>y</i> = ln(<i>x</i> − 1) + ln(<i>x</i> − 2) − ln(<i>x</i> − 3) − ln(<i>x</i> − 4). A product became a sum and a quotient became a difference.",
            "Differentiate term by term: (1/<i>y</i>)<i>y</i>′ = 1/(<i>x</i> − 1) + 1/(<i>x</i> − 2) − 1/(<i>x</i> − 3) − 1/(<i>x</i> − 4).",
            "Multiply by <i>y</i>. Notice the pattern worth carrying: each factor contributes its own reciprocal, with a <b>plus</b> upstairs and a <b>minus</b> downstairs."
          ],
          "ans": "dy/dx = y[1/(x − 1) + 1/(x − 2) − 1/(x − 3) − 1/(x − 4)], with y the original expression"
        },
        {
          "t": "p",
          "html": "Now the second half of the topic, and a genuinely different situation. Sometimes <i>x</i> and <i>y</i> are not tied to each other directly at all; both are driven by a third, behind-the-scenes variable, a <b>parameter</b>, usually <i>t</i> for time or θ for angle. Picture a cricket ball in flight. You do not naturally know its height as a function of its horizontal distance. What you know is how <b>time</b> drives both. Time is the puppeteer and <i>x</i> and <i>y</i> are two puppets on its strings, so to get the slope of the path you ask how fast each puppet responds and take the ratio."
        },
        {
          "t": "formula",
          "kicker": "THE PARAMETRIC SLOPE",
          "tag": "x = f(t) and y = g(t), with dx/dt not zero",
          "main": "dy/dx = (dy/dt) / (dx/dt)",
          "legend": [
            "read it as “rate of <i>y</i> per unit of <i>t</i>, divided by rate of <i>x</i> per unit of <i>t</i>”, which is rate of <i>y</i> per unit of <i>x</i>",
            "where <i>dx</i>/<i>dt</i> = 0 the slope is undefined and the tangent is <b>vertical</b>; where <i>dy</i>/<i>dt</i> = 0 the slope is 0 and the tangent is horizontal"
          ],
          "note": "Simplify the slope fully in terms of the parameter before substituting any value. The constants almost always cancel, and a clean symbolic slope is far less error-prone to substitute into."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · A CURVE DRIVEN BY A PARAMETER, TAP ONE",
          "chips": ["the slope is 1/t", "at t = 0 it is vertical"],
          "captions": [
            "The parabola traced by x = t², y = 2t, which is the source's own example with a set to 1. Differentiating each coordinate against the parameter gives dx/dt = 2t and dy/dt = 2, so the slope is 1 over t and nothing else. At t = 1 the point is (1, 2) and the amber tangent has slope 1, which you can read off the picture. One parameter, two coordinates, and the ratio of their rates is the geometry.",
            "The same curve at t = 0, the vertex. Here dy/dt is still 2 but dx/dt has fallen to 0, so the ratio has no value at all and the amber tangent is the vertical line. The formula has not failed; it is reporting a vertical tangent honestly. That is the one place a parametric slope is allowed to be undefined, and it is the standard MCQ on the topic."
          ],
          "frames": [
            {
              "x": [-1, 9],
              "y": [-6.5, 6.5],
              "curves": [{ "c": "parabola", "a": 1, "horizontal": true }],
              "segments": [{ "from": [-0.8, 0.2], "to": [4, 5] }],
              "points": [{ "x": 1, "y": 2, "label": "t = 1", "at": "se" }],
              "labels": [{ "x": 5.6, "y": -4.6, "text": "slope = 1/t", "soft": true }]
            },
            {
              "x": [-1, 9],
              "y": [-6.5, 6.5],
              "curves": [{ "c": "parabola", "a": 1, "horizontal": true }],
              "segments": [{ "from": [0, -5.8], "to": [0, 5.8] }],
              "points": [{ "x": 0, "y": 0, "label": "t = 0" }],
              "labels": [{ "x": 4.4, "y": -4.6, "text": "dx/dt = 0 here", "soft": true }]
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "THE PARAMETRIC SECOND DERIVATIVE",
          "tag": "read this one twice",
          "main": "d²y/dx² = [d/dt (dy/dx)] / (dx/dt)",
          "legend": [
            "find the slope first, differentiate <b>that whole slope</b> with respect to <i>t</i>, then divide by <i>dx</i>/<i>dt</i> <b>once more</b>",
            "it is <b>not</b> (<i>d</i><sup>2</sup><i>y</i>/<i>dt</i><sup>2</sup>)/(<i>d</i><sup>2</sup><i>x</i>/<i>dt</i><sup>2</sup>), and that wrong version is the most-tested single error in the chapter"
          ],
          "note": "The reason is one line of chain rule: d/dx of anything written in t is (1/(dx/dt)) times d/dt of it. Apply that operator a second time and the extra division appears on its own."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY THE NAIVE RATIO IS WRONG, TAP A LINE",
          "steps": [
            {
              "eq": "dy/dx = g′(t)/f′(t), a function of t and not of x",
              "why": "That is the whole source of the difficulty. The slope you just computed is expressed in the parameter, so differentiating it with respect to x is not something you can do directly. You need a way to convert d/dx into d/dt."
            },
            {
              "eq": "d/dx ( · ) = (1/(dx/dt)) · d/dt ( · )",
              "why": "The chain rule supplies exactly that conversion, and it is an operator you can apply to anything, not just to y. Every d/dx becomes a d/dt followed by one division by dx/dt."
            },
            {
              "eq": "so d²y/dx² = (1/(dx/dt)) · d/dt (dy/dx)",
              "why": "Apply the operator to the slope. Two things happen: the slope is differentiated with respect to t, and the result is divided by dx/dt one more time. That second division is what the naive formula loses."
            },
            {
              "eq": "the cancellation of dt is not legal",
              "why": "Writing d²y/dx² as (d²y/dt²)/(d²x/dt²) treats the differentials as numbers and cancels them. But dy/dx is a quotient of t-derivatives, and you cannot differentiate a quotient by differentiating its top and bottom separately. On x = t², y = t³ the naive route gives 6t/2 = 3t while the truth is 3/(4t), and on x = at², y = 2at it gives 0, which would claim a parabola has no curvature anywhere."
            }
          ]
        },
        {
          "t": "proc",
          "title": "Parametric differentiation, checklist",
          "steps": [
            "<b>Compute <i>dx</i>/<i>dt</i> and <i>dy</i>/<i>dt</i> separately</b>, and keep them side by side. Do not try to eliminate the parameter first: that is usually impossible and never necessary.",
            "<b>Take the ratio for the slope</b>, requiring <i>dx</i>/<i>dt</i> ≠ 0, and <b>simplify it completely</b>. Constants cancel, squared trigonometric factors cancel, and a well-posed problem always collapses to something short.",
            "<b>For the second derivative, differentiate the simplified slope with respect to <i>t</i></b>, then divide by <i>dx</i>/<i>dt</i> again. Chant it: slope, differentiate by <i>t</i>, divide by <i>dx</i>/<i>dt</i>.",
            "<b>Substitute a numerical value of the parameter last.</b> If the question gives a point rather than a parameter value, find the parameter value first.",
            "<b>Check the shape of the answer.</b> A parametric second derivative almost always still contains the parameter; an answer that has become a bare constant is usually the naive ratio in disguise."
          ]
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "For the astroid <i>x</i> = <i>a</i> cos<sup>3</sup><i>t</i>, <i>y</i> = <i>a</i> sin<sup>3</sup><i>t</i>, find <i>dy</i>/<i>dx</i>.",
          "steps": [
            "Differentiate each coordinate against the parameter, chain rule on the cube: <i>dx</i>/<i>dt</i> = 3<i>a</i> cos<sup>2</sup><i>t</i> · (−sin <i>t</i>) = −3<i>a</i> cos<sup>2</sup><i>t</i> sin <i>t</i>.",
            "And <i>dy</i>/<i>dt</i> = 3<i>a</i> sin<sup>2</sup><i>t</i> · cos <i>t</i>.",
            "Take the ratio. The 3<i>a</i> cancels, one power of sin cancels against one power of sin, and one power of cos against one power of cos.",
            "What is left is −sin <i>t</i>/cos <i>t</i>. The wholesale cancellation is the hallmark of a well-posed parametric problem: if nothing cancels, check your derivatives."
          ],
          "ans": "dy/dx = −tan t"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN · SPEED TRAP",
          "q": "For <i>x</i> = <i>at</i><sup>2</sup>, <i>y</i> = 2<i>at</i>, find <i>d</i><sup>2</sup><i>y</i>/<i>dx</i><sup>2</sup>.",
          "steps": [
            "The trap: cancel the <i>dt</i>s and write (<i>d</i><sup>2</sup><i>y</i>/<i>dt</i><sup>2</sup>)/(<i>d</i><sup>2</sup><i>x</i>/<i>dt</i><sup>2</sup>) = 0/2<i>a</i> = 0. That answer would claim the parabola is a straight line.",
            "Correct route. <i>dx</i>/<i>dt</i> = 2<i>at</i> and <i>dy</i>/<i>dt</i> = 2<i>a</i>, so the slope is 2<i>a</i>/2<i>at</i> = 1/<i>t</i>.",
            "Differentiate that slope with respect to <i>t</i>: <i>d</i>/<i>dt</i>(1/<i>t</i>) = −1/<i>t</i><sup>2</sup>.",
            "Divide by <i>dx</i>/<i>dt</i> = 2<i>at</i> one more time: (−1/<i>t</i><sup>2</sup>)/(2<i>at</i>)."
          ],
          "ans": "d²y/dx² = −1/(2at³), and never 0"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "For <i>x</i> = 2 sin θ − sin 2θ and <i>y</i> = 2 cos θ − cos 2θ, find <i>dy</i>/<i>dx</i> and <i>d</i><sup>2</sup><i>y</i>/<i>dx</i><sup>2</sup> at θ = π.",
          "steps": [
            "<i>dx</i>/<i>d</i>θ = 2cos θ − 2cos 2θ and <i>dy</i>/<i>d</i>θ = −2sin θ + 2sin 2θ, so the slope is (sin 2θ − sin θ)/(cos θ − cos 2θ).",
            "Sum to product on both: sin 2θ − sin θ = 2cos(3θ/2) sin(θ/2), and cos θ − cos 2θ = 2sin(3θ/2) sin(θ/2). The common factor cancels and the slope is cot(3θ/2). At θ = π that is cot(3π/2) = 0.",
            "Second derivative: <i>d</i>/<i>d</i>θ of cot(3θ/2) is −(3/2)csc<sup>2</sup>(3θ/2), which at θ = π is −3/2, since csc(3π/2) = −1.",
            "Divide by <i>dx</i>/<i>d</i>θ at θ = π, which is −2 − 2 = −4. So the answer is (−3/2)/(−4) = 3/8. The naive ratio cannot even be attempted here: <i>d</i><sup>2</sup><i>x</i>/<i>d</i>θ<sup>2</sup> is 0 at θ = π while <i>d</i><sup>2</sup><i>y</i>/<i>d</i>θ<sup>2</sup> is 6."
          ],
          "ans": "dy/dx = 0 and d²y/dx² = 3/8 at θ = π"
        },
        {
          "t": "mcq",
          "q": "<i>d</i>/<i>dx</i> (<i>x</i><sup>x</sup>) equals:",
          "correct": 2,
          "opts": [
            {
              "label": "<i>x</i><sup>x</sup> ln <i>x</i>",
              "nudge": "The exponential piece alone, with the base frozen. Half the truth: you still owe the power piece, which contributes the 1."
            },
            {
              "label": "<i>x</i> · <i>x</i><sup>x−1</sup>",
              "nudge": "The power piece alone, with the exponent frozen. It simplifies to <i>x</i><sup>x</sup>, and it is the opposite half-error to the first option."
            },
            { "label": "<i>x</i><sup>x</sup>(1 + ln <i>x</i>)", "nudge": null },
            {
              "label": "<i>x</i><sup>x</sup>",
              "nudge": "Assumes <i>x</i><sup>x</sup> differentiates to itself the way <i>e</i><sup>x</sup> does. Only <i>e</i><sup>x</sup> has that property, and nothing else."
            }
          ],
          "solution": "Take logs: ln y = x ln x, so y′/y = ln x + 1 and y′ = <i>x</i><sup>x</sup>(1 + ln <i>x</i>). Read it as the sum of two familiar answers: <i>x</i><sup>x</sup> ln <i>x</i> with the base frozen, plus <i>x</i>·<i>x</i><sup>x−1</sup> = <i>x</i><sup>x</sup> with the exponent frozen. The two half-answers are always offered."
        },
        {
          "t": "mcq",
          "q": "If <i>x</i> = <i>t</i><sup>2</sup> and <i>y</i> = <i>t</i><sup>3</sup>, then <i>d</i><sup>2</sup><i>y</i>/<i>dx</i><sup>2</sup> equals:",
          "correct": 1,
          "opts": [
            {
              "label": "3/2",
              "nudge": "The slope differentiated with respect to <i>t</i> and then <b>not</b> divided by <i>dx</i>/<i>dt</i>. The signature parametric error: one division short."
            },
            { "label": "3/(4<i>t</i>)", "nudge": null },
            {
              "label": "3<i>t</i>",
              "nudge": "That is (<i>d</i><sup>2</sup><i>y</i>/<i>dt</i><sup>2</sup>)/(<i>d</i><sup>2</sup><i>x</i>/<i>dt</i><sup>2</sup>) = 6<i>t</i>/2, the forbidden ratio. You cannot differentiate a quotient by differentiating top and bottom."
            },
            {
              "label": "3/(2<i>t</i>)",
              "nudge": "Divides correctly but mishandles the constant: <i>d</i>/<i>dt</i> of 3<i>t</i>/2 is 3/2, not 3, so the numerator is half what you used."
            }
          ],
          "solution": "dy/dx = 3t²/2t = 3t/2. Then d/dt of that is 3/2, and dividing by dx/dt = 2t gives 3/(4t). Chant the rhythm: slope, differentiate with respect to t, divide by dx/dt one more time."
        },
        {
          "t": "mcq",
          "q": "For a parametric curve <i>x</i> = <i>f</i>(<i>t</i>), <i>y</i> = <i>g</i>(<i>t</i>), the slope <i>dy</i>/<i>dx</i> is undefined, meaning a vertical tangent, when:",
          "correct": 1,
          "opts": [
            {
              "label": "<i>dy</i>/<i>dt</i> = 0",
              "nudge": "That gives a <b>horizontal</b> tangent, slope zero. A zero numerator is a perfectly good answer, not an undefined one."
            },
            { "label": "<i>dx</i>/<i>dt</i> = 0", "nudge": null },
            {
              "label": "<i>t</i> = 0",
              "nudge": "A specific parameter value with no general meaning at all. It happens to be the vertical point on <i>x</i> = <i>at</i><sup>2</sup>, but that is because <i>dx</i>/<i>dt</i> = 2<i>at</i> vanishes there, not because <i>t</i> is 0."
            },
            {
              "label": "<i>dy</i>/<i>dt</i> = <i>dx</i>/<i>dt</i>",
              "nudge": "That merely makes the slope equal to 1, a perfectly ordinary tangent at 45 degrees."
            }
          ],
          "solution": "dy/dx = (dy/dt)/(dx/dt) blows up exactly when the denominator vanishes. A zero denominator means x has stopped changing while y is still moving, which is a vertical tangent. A zero numerator is the opposite case and gives a horizontal one."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Differentiate <i>y</i> = <i>x</i><sup>ln x</sup> for <i>x</i> > 0.",
              "a": "ln <i>y</i> = (ln <i>x</i>)<sup>2</sup>, so (1/<i>y</i>)<i>y</i>′ = 2 ln <i>x</i> · (1/<i>x</i>). Hence <b><i>y</i>′ = <i>x</i><sup>ln x</sup> · 2 ln <i>x</i> / <i>x</i></b>."
            },
            {
              "q": "[CBSE] Use logarithmic differentiation on <i>y</i> = (<i>x</i> − 1)(<i>x</i> − 2)/[(<i>x</i> − 3)(<i>x</i> − 4)].",
              "a": "<b><i>y</i>′ = <i>y</i>[1/(<i>x</i> − 1) + 1/(<i>x</i> − 2) − 1/(<i>x</i> − 3) − 1/(<i>x</i> − 4)]</b>. Numerator factors get a plus, denominator factors a minus."
            },
            {
              "q": "[JEE Main] For the cycloid <i>x</i> = <i>a</i>(<i>t</i> + sin <i>t</i>), <i>y</i> = <i>a</i>(1 − cos <i>t</i>), find <i>dy</i>/<i>dx</i>.",
              "a": "<i>dx</i>/<i>dt</i> = <i>a</i>(1 + cos <i>t</i>) and <i>dy</i>/<i>dt</i> = <i>a</i> sin <i>t</i>, so the slope is sin <i>t</i>/(1 + cos <i>t</i>) = <b>tan(<i>t</i>/2)</b> by the half-angle identities."
            },
            {
              "q": "[JEE Main] Differentiate <i>y</i> = (tan <i>x</i>)<sup>cot x</sup>.",
              "a": "<b><i>y</i>′ = (tan <i>x</i>)<sup>cot x</sup> csc<sup>2</sup><i>x</i> (1 − ln tan <i>x</i>)</b>, once you notice cot <i>x</i> · sec<sup>2</sup><i>x</i>/tan <i>x</i> collapses to csc<sup>2</sup><i>x</i>."
            },
            {
              "q": "[JEE Advanced] For <i>x</i> = <i>a</i> cos<sup>3</sup>θ, <i>y</i> = <i>a</i> sin<sup>3</sup>θ, find <i>d</i><sup>2</sup><i>y</i>/<i>dx</i><sup>2</sup>.",
              "a": "The slope is −tan θ, whose θ-derivative is −sec<sup>2</sup>θ. Divide by <i>dx</i>/<i>d</i>θ = −3<i>a</i> cos<sup>2</sup>θ sin θ to get <b>sec<sup>4</sup>θ csc θ/(3<i>a</i>)</b>."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "Dropping the 1/<i>y</i>. Writing <i>d</i>/<i>dx</i> ln <i>y</i> = 1/<i>y</i> instead of (1/<i>y</i>)(<i>dy</i>/<i>dx</i>) corrupts every logarithmic answer silently, because the result still looks plausible.",
            "Giving half the <i>u</i><sup>v</sup> rule. <i>x</i><sup>x</sup> is neither <i>x</i><sup>x</sup> ln <i>x</i> nor <i>x</i> · <i>x</i><sup>x−1</sup>. It is their <b>sum</b>, and both halves appear as options every time.",
            "The parametric second-derivative ratio. Never (<i>d</i><sup>2</sup><i>y</i>/<i>dt</i><sup>2</sup>)/(<i>d</i><sup>2</sup><i>x</i>/<i>dt</i><sup>2</sup>). Always: <b>slope, differentiate with respect to <i>t</i>, divide by <i>dx</i>/<i>dt</i> again.</b>",
            "Taking logs of a base that can be zero or negative. The method needs <i>f</i>(<i>x</i>) > 0; otherwise use |<i>f</i>| or restrict the domain, and say which.",
            "Substituting a parameter value before simplifying. Simplify the slope symbolically first: the constants cancel almost always, and a tidy slope is far less error-prone to differentiate a second time."
          ]
        },
        {
          "t": "protip",
          "html": "for any <i>u</i><sup>v</sup>, skip the derivation and write the answer straight down as “exponential piece plus power piece”: <i>u</i><sup>v</sup> ln <i>u</i> · <i>v</i>′ + <i>v u</i><sup>v−1</sup> <i>u</i>′. and for parametric curves, say the rhythm out loud before you write anything: <b>slope, differentiate by <i>t</i>, divide by <i>dx</i>/<i>dt</i></b>. that sentence is worth more marks than any other sentence in this chapter, because the error it prevents is the single most examined mistake in the whole of parametric calculus."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "d/dx (ln y) = (1/y)(dy/dx)", "note": "never drop the 1 over y" },
            { "f": "d/dx (uᵛ) = uᵛ ln u · v′ + v uᵛ⁻¹ u′", "note": "exponential piece plus power piece, never one alone" },
            { "f": "d/dx (xˣ) = xˣ(1 + ln x)", "note": "the one to know cold; both halves are offered as traps" },
            { "f": "big product: ln it, then sum the reciprocals", "note": "plus for numerator factors, minus for denominator ones" },
            { "f": "dy/dx = (dy/dt)/(dx/dt)", "note": "dx/dt = 0 is a vertical tangent, not an error" },
            { "f": "d²y/dx² = [d/dt (dy/dx)] / (dx/dt)", "note": "not the ratio of second derivatives, ever" }
          ],
          "aids": [
            "“take the log, and the exponent falls to the floor”",
            "“slope, then by t, then divide by x-dot once more”"
          ]
        }
      ]
    },
    {
      "n": "06",
      "title": "Second Derivatives and the Mean Value Theorems",
      "chip": "06 SECOND & MVT",
      "kalam": "same heights mean a flat spot somewhere",
      "blocks": [
        {
          "t": "p",
          "html": "The first derivative is the speedometer: how fast position changes with time. So the derivative of the derivative is the <b>accelerator</b>: how fast the rate itself is changing. Geometrically it tells you which way the road <b>bends</b>. Where <i>y</i>″ > 0 the graph is concave up, a cup ∪ that would hold water; where <i>y</i>″ < 0 it is concave down, a dome ∩ that sheds it. The first derivative says uphill or downhill; the second says whether the road is curving toward the sky or toward the ground, and the point where the sign changes is an <b>inflexion</b>."
        },
        {
          "t": "formula",
          "kicker": "THE SECOND DERIVATIVE, THREE WAYS IN",
          "tag": "written y″ or d²y/dx²",
          "main": "d²y/dx² = d/dx (dy/dx)",
          "legend": [
            "<b>direct:</b> differentiate <i>f</i>(<i>x</i>) twice · <b>parametric:</b> find <i>dy</i>/<i>dx</i> in <i>t</i>, differentiate by <i>t</i>, divide by <i>dx</i>/<i>dt</i> · <b>implicit:</b> differentiate the relation twice, then substitute <i>dy</i>/<i>dx</i> back",
            "sign of <i>y</i>″: positive means concave up, negative means concave down, and a change of sign marks an inflexion point"
          ],
          "note": "The board favourite is a relation to prove rather than a value to compute: y″ + n²y = 0, or y″ − 2y′ + 2y = 0. Compute y′, then y″, then substitute and watch everything cancel."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · WHICH WAY THE ROAD BENDS, TAP ONE",
          "chips": ["concave down", "concave up"],
          "captions": [
            "The cubic y = x³, with the region x below zero shaded. There the second derivative 6x is negative, and the curve is a dome: it sheds water, and every tangent line lies above it. Notice the first derivative 3x² is positive on this stretch, so the graph is climbing the whole time. Uphill and concave down at once is perfectly ordinary, which is why the two derivatives answer genuinely different questions.",
            "The same cubic, with x above zero shaded instead. Now 6x is positive and the curve is a cup that would hold water, with every tangent below it. The sign of the second derivative changed at the origin, and that single crossing point is the inflexion. Answering that a cubic has one concavity everywhere is the standard error, and the picture is why."
          ],
          "frames": [
            {
              "x": [-2.2, 2.2],
              "y": [-4.6, 4.6],
              "curves": [{ "c": "poly", "coeffs": [0, 0, 0, 1] }],
              "bands": [{ "x0": -2.2, "x1": 0 }],
              "points": [{ "x": 0, "y": 0 }],
              "labels": [{ "x": -1.2, "y": 3.4, "text": "y″ = 6x is negative", "soft": true }]
            },
            {
              "x": [-2.2, 2.2],
              "y": [-4.6, 4.6],
              "curves": [{ "c": "poly", "coeffs": [0, 0, 0, 1] }],
              "bands": [{ "x0": 0, "x1": 2.2 }],
              "points": [{ "x": 0, "y": 0 }],
              "labels": [{ "x": 1.2, "y": -3.4, "text": "y″ = 6x is positive", "soft": true }]
            }
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "If <i>y</i> = <i>e</i><sup>x</sup> sin <i>x</i>, prove that <i>y</i>″ − 2<i>y</i>′ + 2<i>y</i> = 0.",
          "steps": [
            "First derivative, product rule: <i>y</i>′ = <i>e</i><sup>x</sup> sin <i>x</i> + <i>e</i><sup>x</sup> cos <i>x</i> = <i>e</i><sup>x</sup>(sin <i>x</i> + cos <i>x</i>).",
            "Second derivative, product rule again on that: <i>y</i>″ = <i>e</i><sup>x</sup>(sin <i>x</i> + cos <i>x</i>) + <i>e</i><sup>x</sup>(cos <i>x</i> − sin <i>x</i>) = 2<i>e</i><sup>x</sup> cos <i>x</i>.",
            "Substitute all three into the expression: 2<i>e</i><sup>x</sup> cos <i>x</i> − 2<i>e</i><sup>x</sup>(sin <i>x</i> + cos <i>x</i>) + 2<i>e</i><sup>x</sup> sin <i>x</i>.",
            "Expand and cancel in pairs: the cosine terms kill each other and so do the sine terms. Note the working habit: keep <i>e</i><sup>x</sup> factored out at every stage and the cancellation is visible by eye."
          ],
          "ans": "Both derivatives substitute in and every term cancels, so the relation holds identically"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "If <i>x</i> = sin <i>t</i> and <i>y</i> = sin <i>pt</i>, prove that (1 − <i>x</i><sup>2</sup>)<i>y</i>″ − <i>xy</i>′ + <i>p</i><sup>2</sup><i>y</i> = 0.",
          "steps": [
            "Parametric, so the slope first: <i>dx</i>/<i>dt</i> = cos <i>t</i> and <i>dy</i>/<i>dt</i> = <i>p</i> cos <i>pt</i>, giving <i>y</i>′ = <i>p</i> cos <i>pt</i>/cos <i>t</i>.",
            "Differentiate that whole quotient by <i>t</i>, then divide by cos <i>t</i> once more. The result is <i>y</i>″ = (−<i>p</i><sup>2</sup> sin <i>pt</i> cos <i>t</i> + <i>p</i> sin <i>t</i> cos <i>pt</i>)/cos<sup>3</sup><i>t</i>.",
            "Now assemble, using 1 − <i>x</i><sup>2</sup> = 1 − sin<sup>2</sup><i>t</i> = cos<sup>2</sup><i>t</i>. That kills two powers of cosine: (1 − <i>x</i><sup>2</sup>)<i>y</i>″ = −<i>p</i><sup>2</sup> sin <i>pt</i> + <i>p</i> sin <i>t</i> cos <i>pt</i>/cos <i>t</i>.",
            "And <i>xy</i>′ = sin <i>t</i> · <i>p</i> cos <i>pt</i>/cos <i>t</i>, which is exactly the second term, so subtracting it cancels that piece. What is left is −<i>p</i><sup>2</sup> sin <i>pt</i> = −<i>p</i><sup>2</sup><i>y</i>, and adding <i>p</i><sup>2</sup><i>y</i> gives zero."
          ],
          "ans": "The two awkward terms annihilate and the p² sin pt pair cancels, so the relation holds identically"
        },
        {
          "t": "p",
          "html": "Now the two theorems, which sound abstract and describe something you have done a thousand times. Start with <b>Rolle</b>. Throw a cricket ball straight up and catch it at exactly the height it left your hand, so the start and end heights are equal. Common sense says that at the top of the flight, for one instant, the ball was neither rising nor falling: its vertical velocity was <b>zero</b>. Rolle's theorem is that made rigorous. If a smooth unbroken function has <i>f</i>(<i>a</i>) = <i>f</i>(<i>b</i>), then somewhere strictly between them the slope must be zero. You went up and came back, so there had to be a flat moment at the turn."
        },
        {
          "t": "p",
          "html": "<b>Lagrange's Mean Value Theorem</b> is the grown-up version, and it has the best real-world picture in all of calculus. Drive Mumbai to Pune, 150 km in exactly 2 hours. Your <b>average</b> speed was 75 km/h, and the theorem guarantees that at some instant your speedometer read <b>exactly</b> 75. You cannot average 75 without hitting 75 at least once. That is precisely what the average-speed cameras on the Expressway enforce. In symbols, some interior point has instantaneous slope equal to the average slope, which is to say <b>some tangent is parallel to the chord</b>."
        },
        {
          "t": "think",
          "html": "rolle is not a second theorem to learn. it is the mean value theorem for the special case where the chord happens to be horizontal: if <i>f</i>(<i>a</i>) = <i>f</i>(<i>b</i>) the average slope is 0, and “some tangent parallel to the chord” becomes “some tangent flat”. one picture, two theorems."
        },
        {
          "t": "formula",
          "kicker": "ROLLE'S THEOREM",
          "tag": "three hypotheses, and all three are load-bearing",
          "main": "f(a) = f(b) ⇒ f′(c) = 0 for some c in (a, b)",
          "legend": [
            "requires <i>f</i> <b>continuous on the closed [<i>a</i>, <i>b</i>]</b>, <b>differentiable on the open (<i>a</i>, <i>b</i>)</b>, and <i>f</i>(<i>a</i>) = <i>f</i>(<i>b</i>)",
            "the standard cautionary tale is |<i>x</i>| on [−1, 1]: the equal-heights condition holds, and there is <b>no</b> flat point, because differentiability fails at the corner"
          ],
          "note": "An existence theorem. It promises at least one such c, says nothing about uniqueness, and does not find it for you: you still have to solve f′(c) = 0 and check the root lies strictly inside."
        },
        {
          "t": "formula",
          "kicker": "LAGRANGE'S MEAN VALUE THEOREM",
          "tag": "drop the equal-endpoints condition and this is what survives",
          "main": "f′(c) = [f(b) − f(a)] / (b − a)",
          "legend": [
            "requires only <b>continuity on [<i>a</i>, <i>b</i>]</b> and <b>differentiability on (<i>a</i>, <i>b</i>)</b>, for some <i>c</i> strictly inside",
            "geometrically: some tangent is <b>parallel to the chord</b> joining (<i>a</i>, <i>f</i>(<i>a</i>)) and (<i>b</i>, <i>f</i>(<i>b</i>))"
          ],
          "note": "For f(x) = x² the point is always the midpoint, because 2c = (b² − a²)/(b − a) = a + b. Worth knowing: on [1, 3] the answer is 2, and that is the midpoint, not a coincidence."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · THE TANGENT PARALLEL TO THE CHORD, TAP ONE",
          "chips": ["Rolle", "Lagrange", "a hypothesis broken"],
          "captions": [
            "y = sin x on the interval from 0 to pi. The two endpoints sit at the same height, both zero, so the chord joining them is flat and lies along the axis. Rolle promises a flat tangent somewhere strictly inside, and there it is at the peak, where cos c = 0 and c is pi over two. The ball went up and came back, and this is the instant at the top.",
            "y = x² on the interval from 1 to 3, with the chord drawn faint from (1, 1) to (3, 9). Its slope is the average, (9 − 1)/(3 − 1) = 4. The amber tangent has that same slope and touches at c = 2, which is exactly the midpoint of the interval, as it always is for a parabola. Same picture as Rolle, tilted.",
            "y = |x| on the interval from minus one to plus one, and the trap the examiners build. The endpoints are level, both at height 1, so the obvious condition holds and the chord is flat. But there is no flat tangent anywhere: the slope is minus one on the left and plus one on the right and never zero. Differentiability failed at the corner, so the conclusion was never promised."
          ],
          "frames": [
            {
              "x": [-0.6, 3.8],
              "y": [-0.7, 1.6],
              "curves": [{ "c": "sin" }],
              "segments": [
                { "from": [0, 0], "to": [3.1416, 0], "dash": true, "soft": true },
                { "from": [0.85, 1], "to": [2.29, 1] }
              ],
              "points": [
                { "x": 0, "y": 0 },
                { "x": 3.1416, "y": 0 },
                { "x": 1.5708, "y": 1, "label": "c = π/2" }
              ],
              "labels": [{ "x": 2.8, "y": -0.42, "text": "the chord is flat", "soft": true }]
            },
            {
              "x": [0.2, 3.8],
              "y": [-1.6, 10.6],
              "curves": [{ "c": "poly", "coeffs": [0, 0, 1] }],
              "segments": [
                { "from": [1, 1], "to": [3, 9], "dash": true, "soft": true },
                { "from": [1.1, 0.4], "to": [3, 8] }
              ],
              "points": [
                { "x": 1, "y": 1 },
                { "x": 3, "y": 9 },
                { "x": 2, "y": 4, "label": "c = 2" }
              ],
              "labels": [{ "x": 2.9, "y": 0.4, "text": "tangent parallel to chord", "soft": true }]
            },
            {
              "x": [-1.7, 1.7],
              "y": [-0.7, 1.7],
              "curves": [{ "c": "abs" }],
              "segments": [{ "from": [-1, 1], "to": [1, 1], "dash": true, "soft": true }],
              "points": [
                { "x": -1, "y": 1 },
                { "x": 1, "y": 1 },
                { "x": 0, "y": 0 }
              ],
              "labels": [{ "x": 0, "y": -0.44, "text": "level ends, and no flat spot", "soft": true }]
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · LAGRANGE FROM ROLLE, TAP A LINE",
          "steps": [
            {
              "eq": "Rolle only fires when the endpoints are level, so tilt the function",
              "why": "That single sentence is the whole idea, and it is worth stating before any algebra. The general theorem differs from Rolle only in that the chord is sloped, so subtract the chord off, apply Rolle to what is left, and add it back."
            },
            {
              "eq": "g(x) = f(x) − [ f(a) + ((f(b) − f(a))/(b − a))(x − a) ]",
              "why": "The bracket is exactly the straight secant joining the two endpoints, written in point-slope form. So g measures the vertical gap between the curve and that chord, which is zero at both ends by construction."
            },
            {
              "eq": "g(a) = 0 and g(b) = 0, and g inherits both hypotheses",
              "why": "g is f minus a polynomial, so it is continuous on the closed interval and differentiable on the open one wherever f is. And the endpoint values are both zero, because the curve meets its own chord at the endpoints. All three Rolle hypotheses now hold, manufactured deliberately."
            },
            {
              "eq": "g′(c) = 0 gives f′(c) = (f(b) − f(a))/(b − a)",
              "why": "Rolle supplies an interior c with g′(c) = 0. Differentiating g gives f′(x) minus the constant chord slope, so setting that to zero at c reads off the theorem. Notice the slickness sits entirely in the choice of g: subtracting the secant is the move that converts the general statement into Rolle's special case."
            }
          ]
        },
        {
          "t": "proc",
          "title": "Verifying Rolle or Lagrange, and finding c",
          "steps": [
            "<b>Check continuity on the closed interval [<i>a</i>, <i>b</i>].</b> Look for a modulus, a greatest integer, a piecewise definition or a denominator that vanishes inside.",
            "<b>Check differentiability on the open interval (<i>a</i>, <i>b</i>).</b> This is where the engineered traps live: a function is handed to you with <i>f</i>(<i>a</i>) = <i>f</i>(<i>b</i>) built in, and a corner quietly planted in the middle.",
            "<b>For Rolle, check <i>f</i>(<i>a</i>) = <i>f</i>(<i>b</i>) as well.</b> If any hypothesis fails, say so and stop: the correct answer is that the theorem does not apply, and that is worth full marks.",
            "<b>Compute the target slope.</b> Zero for Rolle; [<i>f</i>(<i>b</i>) − <i>f</i>(<i>a</i>)]/(<i>b</i> − <i>a</i>) for Lagrange.",
            "<b>Solve <i>f</i>′(<i>c</i>) = target and keep only the roots strictly inside (<i>a</i>, <i>b</i>).</b> A solution landing on an endpoint does not verify anything, because the theorem promises an interior point."
          ]
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Verify Rolle's Theorem for <i>f</i>(<i>x</i>) = sin <i>x</i> on [0, π] and find <i>c</i>.",
          "steps": [
            "Hypotheses. sin <i>x</i> is continuous everywhere, so on [0, π]. It is differentiable everywhere, so on (0, π).",
            "Endpoints: <i>f</i>(0) = 0 and <i>f</i>(π) = 0, so <i>f</i>(0) = <i>f</i>(π). All three conditions hold and the theorem applies.",
            "Solve <i>f</i>′(<i>c</i>) = 0: cos <i>c</i> = 0 gives <i>c</i> = π/2 inside the interval.",
            "Geometrically, the tangent at the peak (π/2, 1) is horizontal, parallel to the flat chord joining the two equal endpoints. Verified."
          ],
          "ans": "c = π/2"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Verify the Mean Value Theorem for <i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> − 3<i>x</i> + 2 on [1, 4] and find <i>c</i>.",
          "steps": [
            "A polynomial, so continuous on [1, 4] and differentiable on (1, 4). Both hypotheses hold and no equal-endpoints condition is needed.",
            "Average slope: <i>f</i>(1) = 1 − 3 + 2 = 0 and <i>f</i>(4) = 16 − 12 + 2 = 6, so the chord slope is (6 − 0)/(4 − 1) = 2.",
            "Solve <i>f</i>′(<i>c</i>) = 2: 2<i>c</i> − 3 = 2, so <i>c</i> = 5/2.",
            "5/2 lies strictly inside (1, 4), so the theorem is verified. Consistency check: 5/2 is the midpoint of [1, 4], as it must be for any quadratic."
          ],
          "ans": "c = 5/2"
        },
        {
          "t": "p",
          "html": "Two extensions turn these from things you verify into things you <b>use</b>. The first is <b>Cauchy's Mean Value Theorem</b>, which contains both of the others: it compares two functions on the same interval instead of one function against the identity. The second is the <b>Rolle cascade</b>, which is a counting machine. Two roots of <i>f</i> force a root of <i>f</i>′ between them, so contrapositively, <b>if <i>f</i>′ has no zeros on an interval then <i>f</i> has at most one root there</b>. Pair that with the intermediate value theorem for existence and you can pin down the exact number of real roots of an equation you cannot solve."
        },
        {
          "t": "formula",
          "kicker": "CAUCHY'S MEAN VALUE THEOREM",
          "tag": "f and g continuous on [a, b], differentiable on (a, b), g′ never zero",
          "main": "f′(c)/g′(c) = [f(b) − f(a)] / [g(b) − g(a)]",
          "legend": [
            "the denominator is safe: if <i>g</i>(<i>b</i>) = <i>g</i>(<i>a</i>) then Rolle would give a point with <i>g</i>′ = 0, which the hypothesis forbids",
            "<b>Lagrange is the case <i>g</i>(<i>x</i>) = <i>x</i></b>, where <i>g</i>′(<i>c</i>) = 1, and Rolle is Lagrange with level endpoints. One theorem, three faces"
          ],
          "note": "Proved from Rolle the same way Lagrange is, with the auxiliary F(x) = f(x) − λg(x) and λ chosen so that F(a) = F(b)."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Verify Cauchy's Mean Value Theorem for <i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> and <i>g</i>(<i>x</i>) = <i>x</i><sup>3</sup> on [1, 2], and find <i>c</i>.",
          "steps": [
            "Hypotheses: polynomials are continuous and differentiable everywhere, and <i>g</i>′(<i>x</i>) = 3<i>x</i><sup>2</sup> is non-zero on (1, 2). All satisfied.",
            "Right side: [<i>f</i>(2) − <i>f</i>(1)]/[<i>g</i>(2) − <i>g</i>(1)] = (4 − 1)/(8 − 1) = 3/7.",
            "Left side: <i>f</i>′(<i>c</i>)/<i>g</i>′(<i>c</i>) = 2<i>c</i>/3<i>c</i><sup>2</sup> = 2/(3<i>c</i>).",
            "Set equal: 2/(3<i>c</i>) = 3/7 gives 14 = 9<i>c</i>, so <i>c</i> = 14/9 ≈ 1.56, strictly inside (1, 2). Verified."
          ],
          "ans": "c = 14/9"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "Show that 2<i>x</i><sup>3</sup> − 3<i>x</i><sup>2</sup> + 6<i>x</i> + 6 = 0 has <b>exactly</b> one real root.",
          "steps": [
            "Split the job in two, because the marks are split that way: uniqueness comes from the derivative, existence from continuity.",
            "Uniqueness. <i>q</i>′(<i>x</i>) = 6<i>x</i><sup>2</sup> − 6<i>x</i> + 6 = 6(<i>x</i><sup>2</sup> − <i>x</i> + 1), whose discriminant is 1 − 4 = −3 < 0, so <i>q</i>′ > 0 everywhere. If <i>q</i> had two roots, Rolle would manufacture a zero of <i>q</i>′ between them. It has none, so <i>q</i> has <b>at most one</b> root.",
            "Existence. <i>q</i>(−1) = −2 − 3 − 6 + 6 = −5 < 0 and <i>q</i>(0) = 6 > 0. A continuous function that changes sign has a root between, by the intermediate value theorem, so there is one in (−1, 0).",
            "At most one, and at least one. Exactly one. Merging the two arguments into a single paragraph is how students prove neither."
          ],
          "ans": "Exactly one real root, and it lies in (−1, 0)"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "Using the Mean Value Theorem, prove that (<i>b</i> − <i>a</i>)/<i>b</i> < ln(<i>b</i>/<i>a</i>) < (<i>b</i> − <i>a</i>)/<i>a</i> for 0 < <i>a</i> < <i>b</i>.",
          "steps": [
            "Choose the function so that <i>f</i>′(<i>c</i>) is the quantity you want to bound. Here ln(<i>b</i>/<i>a</i>) = ln <i>b</i> − ln <i>a</i>, so take <i>f</i>(<i>x</i>) = ln <i>x</i> on [<i>a</i>, <i>b</i>], which is continuous and differentiable for <i>x</i> > 0.",
            "The theorem gives a <i>c</i> in (<i>a</i>, <i>b</i>) with 1/<i>c</i> = (ln <i>b</i> − ln <i>a</i>)/(<i>b</i> − <i>a</i>) = ln(<i>b</i>/<i>a</i>)/(<i>b</i> − <i>a</i>).",
            "Now squeeze using only the fact that <i>c</i> is between the endpoints. Since 0 < <i>a</i> < <i>c</i> < <i>b</i>, reciprocating reverses the order: 1/<i>b</i> < 1/<i>c</i> < 1/<i>a</i>.",
            "Substitute and multiply throughout by (<i>b</i> − <i>a</i>) > 0, which preserves the inequalities. An apparently unprovable inequality falls out in three lines once the right function is chosen."
          ],
          "ans": "Proved, and the pattern generalises: pick f so that f′(c) is what you must bound, then use a < c < b"
        },
        {
          "t": "mcq",
          "q": "On the interval [−1, 1], Rolle's Theorem <b>fails to apply</b> to which function?",
          "correct": 1,
          "opts": [
            {
              "label": "<i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> − 1",
              "nudge": "Smooth everywhere, and <i>f</i>(−1) = <i>f</i>(1) = 0, so all three hypotheses hold. It even delivers <i>c</i> = 0."
            },
            { "label": "<i>f</i>(<i>x</i>) = |<i>x</i>|", "nudge": null },
            {
              "label": "<i>f</i>(<i>x</i>) = <i>x</i><sup>4</sup>",
              "nudge": "A polynomial, so smooth, and <i>f</i>(−1) = <i>f</i>(1) = 1. The theorem applies and <i>c</i> = 0 works."
            },
            {
              "label": "<i>f</i>(<i>x</i>) = cos(π<i>x</i>/2)",
              "nudge": "Smooth everywhere, and <i>f</i>(−1) = <i>f</i>(1) = 0. The theorem applies here as well."
            }
          ],
          "solution": "|x| satisfies the eye-catching condition, f(−1) = f(1) = 1, and fails the quiet one: it is not differentiable at the corner x = 0, which lies inside (−1, 1). With a hypothesis broken the conclusion is not promised, and indeed there is no point where the slope is zero. This is the standard engineered trap."
        },
        {
          "t": "mcq",
          "q": "For <i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> on [1, 3], the value <i>c</i> guaranteed by the Mean Value Theorem is:",
          "correct": 1,
          "opts": [
            {
              "label": "4",
              "nudge": "That is the average slope, not the point. You computed [<i>f</i>(3) − <i>f</i>(1)]/(3 − 1) correctly and then reported it instead of solving 2<i>c</i> = 4."
            },
            { "label": "2", "nudge": null },
            {
              "label": "√5",
              "nudge": "The root mean square of the endpoints, √((1 + 9)/2). The theorem delivers a point where the tangent is parallel to the chord, which for a parabola is the plain average of the endpoints."
            },
            {
              "label": "1.5",
              "nudge": "The midpoint of [1, 2], not of [1, 3]. For <i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> the answer really is the midpoint, since 2<i>c</i> = (<i>b</i><sup>2</sup> − <i>a</i><sup>2</sup>)/(<i>b</i> − <i>a</i>) = <i>a</i> + <i>b</i>, so read the interval again."
            }
          ],
          "solution": "Average slope = (9 − 1)/(3 − 1) = 4. Solve f′(c) = 2c = 4, giving c = 2, which lies in (1, 3). For any quadratic the Mean Value point is exactly the midpoint (a + b)/2, and here that is (1 + 3)/2 = 2. Knowing that turns this into a one-second question and also checks your arithmetic."
        },
        {
          "t": "mcq",
          "q": "If <i>f</i> is differentiable on [<i>a</i>, <i>b</i>] and <i>f</i>′(<i>x</i>) ≠ 0 for every <i>x</i> in (<i>a</i>, <i>b</i>), then in [<i>a</i>, <i>b</i>] the function <i>f</i> can have <b>at most</b>:",
          "correct": 1,
          "opts": [
            {
              "label": "0 roots",
              "nudge": "Too strong. A strictly increasing function can cross the axis once, and nothing in the hypothesis prevents it. The theorem bounds the number, it does not forbid one."
            },
            { "label": "1 root", "nudge": null },
            {
              "label": "2 roots",
              "nudge": "Two roots is exactly what the hypothesis rules out: Rolle applied between them would produce a point where <i>f</i>′ vanishes."
            },
            {
              "label": "infinitely many roots",
              "nudge": "Even further from it. Any two of those roots would already manufacture a zero of <i>f</i>′ between them."
            }
          ],
          "solution": "Suppose f had two distinct roots p < q. Then f(p) = f(q) = 0 and Rolle would force some c in (p, q) with f′(c) = 0, contradicting the hypothesis. So at most one root. This is the Rolle cascade in its simplest form, and it is half of every exactly-one-root proof."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] If <i>y</i> = <i>A</i> cos <i>nx</i> + <i>B</i> sin <i>nx</i>, prove that <i>y</i>″ + <i>n</i><sup>2</sup><i>y</i> = 0.",
              "a": "<i>y</i>′ = −<i>An</i> sin <i>nx</i> + <i>Bn</i> cos <i>nx</i>, and <i>y</i>″ = −<i>An</i><sup>2</sup> cos <i>nx</i> − <i>Bn</i><sup>2</sup> sin <i>nx</i> = <b>−<i>n</i><sup>2</sup><i>y</i></b>. Add <i>n</i><sup>2</sup><i>y</i> and it is 0."
            },
            {
              "q": "[CBSE] Find <i>d</i><sup>2</sup><i>y</i>/<i>dx</i><sup>2</sup> for <i>y</i> = <i>x</i><sup>3</sup> ln <i>x</i>.",
              "a": "<i>y</i>′ = 3<i>x</i><sup>2</sup> ln <i>x</i> + <i>x</i><sup>2</sup>, so <i>y</i>″ = 6<i>x</i> ln <i>x</i> + 3<i>x</i> + 2<i>x</i> = <b><i>x</i>(6 ln <i>x</i> + 5)</b>."
            },
            {
              "q": "[JEE Main] Verify the Mean Value Theorem for <i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> − 3<i>x</i> + 2 on [1, 4] and find <i>c</i>.",
              "a": "Hypotheses hold. Average slope = (6 − 0)/3 = 2, and 2<i>c</i> − 3 = 2 gives <b><i>c</i> = 5/2</b>, inside (1, 4)."
            },
            {
              "q": "[JEE Main] For the cycloid <i>x</i> = <i>a</i>(θ − sin θ), <i>y</i> = <i>a</i>(1 − cos θ), find <i>d</i><sup>2</sup><i>y</i>/<i>dx</i><sup>2</sup>.",
              "a": "Slope = sin θ/(1 − cos θ) = cot(θ/2). Its θ-derivative is −½csc<sup>2</sup>(θ/2); divide by <i>dx</i>/<i>d</i>θ = 2<i>a</i> sin<sup>2</sup>(θ/2) to get <b>−1/(4<i>a</i> sin<sup>4</sup>(θ/2))</b>."
            },
            {
              "q": "[JEE Advanced] Using the Mean Value Theorem, prove |cos <i>a</i> − cos <i>b</i>| ≤ |<i>a</i> − <i>b</i>| for all real <i>a</i>, <i>b</i>.",
              "a": "Apply it to <i>f</i>(<i>x</i>) = cos <i>x</i>: cos <i>a</i> − cos <i>b</i> = −sin <i>c</i> (<i>a</i> − <i>b</i>) for some <i>c</i> between. Since |sin <i>c</i>| ≤ 1, taking moduli gives <b>|cos <i>a</i> − cos <i>b</i>| ≤ |<i>a</i> − <i>b</i>|</b>."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "Reaching for the conclusion without checking the hypotheses. The classic trap hands you a function engineered to satisfy the <b>obvious</b> condition <i>f</i>(<i>a</i>) = <i>f</i>(<i>b</i>) while quietly breaking differentiability. Spot the modulus, the greatest integer or the piecewise corner first.",
            "Confusing Rolle with Lagrange. Rolle needs <i>f</i>(<i>a</i>) = <i>f</i>(<i>b</i>) and concludes <i>f</i>′(<i>c</i>) = 0. Using <i>f</i>′(<i>c</i>) = 0 when the endpoints are <b>not</b> level is simply the wrong theorem.",
            "Accepting a <i>c</i> on the boundary. The guaranteed point lies <b>strictly</b> inside (<i>a</i>, <i>b</i>); a root landing on an endpoint verifies nothing and must be discarded.",
            "Reporting the average slope as <i>c</i>. For <i>x</i><sup>2</sup> on [1, 3] the average slope is 4 and the point is 2. They are different objects and both appear in the options.",
            "Merging the existence and uniqueness arguments in a root-counting proof. <b>Uniqueness comes from the sign of <i>f</i>′, via Rolle. Existence comes from two opposite-signed samples, via continuity.</b> Examiners award them separately."
          ]
        },
        {
          "t": "protip",
          "html": "learn one picture and you get both theorems: a curve, a chord, and a tangent parallel to it. rolle is the case where the chord happens to be level. for <b>inequality</b> proofs at JEE Advanced, the mean value theorem is the default weapon: choose <i>f</i> so that <i>f</i>′(<i>c</i>) is exactly the quantity you need to bound, then squeeze it using nothing but <i>a</i> < <i>c</i> < <i>b</i>. and for “how many roots can this have”, reach for rolle every time, because two roots always manufacture a zero of <i>f</i>′ between them."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "y″ = d/dx (dy/dx) · sign gives concavity", "note": "positive is a cup, negative is a cap, change is an inflexion" },
            { "f": "Rolle: f(a) = f(b) ⇒ f′(c) = 0", "note": "continuous on [a, b], differentiable on (a, b), and level ends" },
            { "f": "MVT: f′(c) = (f(b) − f(a))/(b − a)", "note": "some tangent is parallel to the chord" },
            { "f": "for f(x) = x², c is the midpoint (a + b)/2", "note": "on [1, 3] that is 2, and it is not a coincidence" },
            { "f": "Cauchy: f′(c)/g′(c) = Δf/Δg", "note": "Lagrange is the case g(x) = x, Rolle the level-chord case" },
            { "f": "f′ never zero ⇒ at most one root", "note": "add a sign change for existence and you get exactly one" }
          ],
          "aids": [
            "“same heights, so there was a flat moment at the turn”",
            "“your average speed was your exact speed at some instant”"
          ]
        }
      ]
    }
  ]
};

export default ch12Continuity;
