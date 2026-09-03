/**
 * Chapter 09 · Differential Equations. Mathematics, Class 12.
 *
 * Restructured from pages 543 to 600 of the Drona Class 12 Mathematics Master
 * Reference into the block system in design_handoff_textbooks/CONTENT_SPEC.md,
 * following math-12-07-integrals.ts for voice, density and file shape.
 *
 * The source is two documents stacked: five numbered Parts (544 to 582) and a
 * Round 2 Addendum of five lettered inserts (583 to 600). Six topics is the
 * schema's ceiling, so every addendum is folded into the Part it belongs to:
 *
 *   Part 1 Order, degree, solutions (544)   -> Topic 01
 *   Part 2 Formation (553)                  -> Topic 02, with Addendum P
 *                                              Archetypes A and B
 *   Part 3 Separable and homogeneous (560)  -> Topic 03, with Archetypes C and D
 *   Part 4 Linear and the IF (568)          -> Topic 04, with Addendum B Type 1
 *                                              (Bernoulli) and Archetypes E, F, G
 *   Addendum A Exact and inspection (583)   -> Topic 05, with Addendum B Type 2
 *   Addendum D Lowering the order (591)        and Addendum D
 *   Part 5 Applications (576)               -> Topic 06, with Addendum C, the
 *   Addendum C Curve geometry (589)            rest of the geometric dictionary
 *   Addendum P What JEE asks (593)          -> the hook, the mistakes cards and
 *                                              worked examples across all six
 *
 * HOW THE CUTTING WAS DECIDED. Integration technique is not re-taught. The
 * source leans on substitution, partial fractions and by-parts constantly and
 * math-12-07-integrals.ts carries all three in full, so every integral here is
 * quoted as known and the space goes to what is genuinely this chapter: order
 * and degree, elimination of constants, and the four solvable types. Where an
 * example's only difficulty was the integral (Part 4 Example 3 hangs on
 * csc x · sin x = 1, Part 3 Example 2 on the f prime over f logarithm), the
 * recognition is stated in one line and the integral is not re-derived.
 *
 *   - Every Part carries eight sections, of which sections 4 to 6 are four
 *     worked examples, five practice questions and four MCQs. Five Parts plus
 *     five addenda is well over two hundred such items and they repeat: the
 *     y = mx family is formed three separate times, the constant-collapse trap
 *     appears in Part 1, Part 2 and Addendum P. Each idea keeps the CBSE
 *     anchor, the speed trap that names the shortcut, and the one Advanced
 *     item that combines it with something else.
 *   - The four solvable types get one procedure card each and are never
 *     merged, because the entire skill the chapter is testing is choosing
 *     between them. Topic 05 opens with the triage question the source never
 *     asks outright: what do you do when an equation is none of the three.
 *   - Two things are cut rather than thinned. The source's parallel-lines
 *     sub-case of the origin shift is named and never worked (page 565 puts it
 *     "in your back pocket"), so it survives as one line of prose inside the
 *     substitution formula rather than as a worked example. Addendum P's
 *     distribution table (page 594) is a bank census, not mathematics; its
 *     conclusions are folded into the hook and its traps into the mistakes
 *     cards, and the table itself is dropped.
 *   - Addendum D is kept even though it is openly out of the board syllabus,
 *     because both of its cases reduce to Topic 03 and Topic 04 machinery and
 *     it is the only place in the chapter where a second-order equation is
 *     actually solved rather than only classified.
 *
 * NOTATION, settled before writing and checked against the SUPERS and SUBS
 * tables in components/textbook/markup.tsx, which are incomplete: a superscript
 * or subscript containing a character they lack silently drops to
 * baseline-height text.
 *
 *   - Derivatives are written with primes, y prime and y double prime, U+2032
 *     and U+2033, wherever the derivative is only being counted or classified,
 *     because d<sup>2</sup>y/dx<sup>2</sup> is four tags for one symbol and this
 *     chapter says it constantly. The Leibniz form dy/dx is used wherever the
 *     differentials matter as objects: the standard form of a linear equation,
 *     every separation step, and M dx + N dy = 0. Both forms are introduced
 *     side by side in Topic 01 before either is relied on.
 *   - An exponent is set with <sup> only when every character in it has a
 *     raised glyph. So e<sup>2x</sup>, e<sup>−kt</sup>, e<sup>sin x</sup> and
 *     y<sup>1−n</sup> are set, and everything else is written exp( ):
 *     exp(∫P dx), exp(x<sup>3</sup>/3), exp(g(x)), exp(y′). The gaps that force
 *     this are real and were hit: SUPERS has no solidus, so a 3/2 power cannot
 *     be raised; no ∫; no g; and no prime, so exp(y′) is the only way to write
 *     the exponential that makes a degree undefined.
 *   - The source's 3/2 powers are therefore written as a bracket times its own
 *     square root: (1 + (y′)<sup>2</sup>)√(1 + (y′)<sup>2</sup>) for the
 *     curvature MCQ, and 2(yy′)√(yy′) for the 1999 formation item. This is the
 *     same trade math-12-07-integrals.ts made when it wrote roots instead of
 *     fractional exponents, for the same reason.
 *   - SUBS has no y, so the exactness test is written ∂M/∂y = ∂N/∂x with real
 *     partial signs rather than as subscripted M and N. It reads better anyway.
 *   - Half-life is written in words for the same reason: t sub 1/2 needs a
 *     solidus in the subscript and there is none.
 *   - Arbitrary constants keep the source's letters: c<sub>1</sub> to
 *     c<sub>5</sub>, A, B, C, m, a, b. Function names stay upright, variables
 *     italic, per the house style.
 *
 * FIGURES. Six `diagram` blocks, eighteen frames, all of kind `plot`, and the
 * count comes from the source rather than from a quota. The source carries no
 * figure placeholders at all, but it argues six things visually and cannot
 * draw them:
 *
 *   - Topic 01, the general solution as a family and the particular solution a
 *     condition selects. This is the chapter's defining picture and the source
 *     defines both terms in words only (page 546). Drawn on the source's own
 *     y″ + 9y = 0 (page 551 Q4): three members of A cos 3x + B sin 3x, then
 *     the single member y(0) = 2 and y′(0) = 0 picks out, then that MCQ's own
 *     wrong option y = cos x, which has the right shape and the wrong
 *     frequency and misses by 8 cos x.
 *   - Topic 02, formation. Page 553 says of y = mx that "the constant m is a
 *     dial: turn it and you get a different line", which is a drawing
 *     instruction. Five lines through the origin, then the slope read off one
 *     of them as y/x, then a second family, the parabolas y<sup>2</sup> = 4ax
 *     of Example 1.
 *   - Topic 03, homogeneity. Page 560 argues that a degree-zero right-hand side
 *     "doesn't really care about the sizes of x and y, only their ratio", which
 *     is exactly a picture of one ray carrying one slope. Frames one and two
 *     draw three rays of dy/dx = (y² − x²)/2xy with their slopes; frame three
 *     draws that equation's solution family x² + y² = Cx, circles through the
 *     origin with centres on the x-axis, and the member through (1, 1) that
 *     Addendum P Archetype C asks for. That family is also Part 2 Example 4's
 *     starting point, so the figure closes a loop the source leaves open.
 *   - Topic 06 takes three, because it is the chapter's visual topic. Growth,
 *     decay and cooling are drawn as `exp` curves on the source's own numbers
 *     (doubling in 4 hours to 8 times in 12; three half-lives to one eighth;
 *     100 °C to 70 °C to 52 °C). Addendum C's "coordinate picture, derived"
 *     (page 589) is drawn as it is derived, tangent then normal then both, with
 *     T, M and N marked. And Part 5 Example 4 says outright "The picture: every
 *     parabola y = Cx² meets every ellipse x²/2 + y² = C₁ at 90°", so the two
 *     families are drawn separately and then crossing, with the two tangents at
 *     the crossing point.
 *
 * Two figures were wanted and dropped. The cooling curve itself cannot be
 * drawn: `exp` evaluates e to the ax with no vertical scale and no offset, so
 * θ = 25 + 75e<sup>−kt</sup> is not expressible. What is drawn instead is the
 * gap above the room as a fraction of the first gap, which is a genuine `exp`
 * and which makes the floor the x-axis; the caption says so. And Part 3
 * Example 2's solution x² − 2xy − y² = C is a rotated hyperbola, which
 * `PlotCurve` cannot express in any orientation but the axes, so that example
 * is carried without a picture.
 *
 * ERRATA APPLIED: none. The book's errata (pages 830 to 832) lists five
 * entries, all of them production damage rather than mathematics, and all in
 * Chapters 1, 3 and 11: a truncated relation R on page 14, a clipped inequality
 * on page 43, an incomplete factor-pair list on page 153, and two lines running
 * off the right edge on pages 678 and 693. There is nothing for Chapter 9. The
 * errata was read in full to confirm that rather than assumed.
 *
 * ERRORS FOUND IN THE SOURCE
 *
 *   1. Page 587, Addendum A Practice 5. "Find the value of k for which
 *      (6x² + kxy) dx + (3x² + 5xy) dy = 0 is exact, and solve it", answered
 *      "∂M/∂y = kx and ∂N/∂x = 6x force k = 6; then G = 2x³ + 3x²y, φ(y) = 0,
 *      and 2x³ + 3x²y + (5/2)xy² = C". Three things are wrong and they
 *      contradict each other. With N = 3x² + 5xy, ∂N/∂x = 6x + 5y, not 6x: the
 *      5y was dropped. Since ∂M/∂y = kx carries no y term, no constant k makes
 *      this equation exact at all, so the question as printed is not
 *      well posed. And the printed key refutes itself: with k = 6,
 *      G = 2x³ + 3x²y and G differentiated in y is 3x², so
 *      φ = N − 3x² = 5xy, which contains x and is therefore not a function of
 *      y alone, which is precisely the signal of non-exactness. The book
 *      states φ(y) = 0 and then silently integrates 5xy anyway to produce the
 *      (5/2)xy² term. Differentiating the printed answer settles it:
 *      2x³ + 3x²y + (5/2)xy² has x-partial 6x² + 6xy + (5/2)y², which is not
 *      6x² + kxy for any k. The smallest repair that leaves a well-posed
 *      "find k" question is N = 3x² + 5y², whose x-partial really is 6x. Then
 *      k = 6, G = 2x³ + 3x²y, φ(y) = 5y², and the solution is
 *      2x³ + 3x²y + (5/3)y³ = C, which differentiates back to
 *      (6x² + 6xy) dx + (3x² + 5y²) dy exactly. Topic 05 teaches the repaired
 *      question and its `mistakes` card names the check that catches it: if φ
 *      still contains x, the equation was never exact.
 *
 *   2. Page 599, Addendum P, practice item P4. After solving
 *      (2 + sin x) y′ + (y + 1) cos x = 0 with y(0) = 1 correctly to
 *      y = 4/(2 + sin x) − 1, the book writes the derivative correctly as
 *      y′ = −4 cos x/(2 + sin x)² and then evaluates it as y′(π/2) = −4/9.
 *      That is wrong: cos(π/2) = 0, so the numerator vanishes and
 *      y′(π/2) = 0. The printed −4/9 is what you get by evaluating
 *      −4/(2 + sin x)² and forgetting the cos x factor that is standing in
 *      the formula immediately above it. The value y(π/2) = 1/3 is correct.
 *      Worth recording twice over, because Addendum P's practice set opens
 *      with "Every answer below has been re-derived and checked". Topic 03
 *      teaches y′(π/2) = 0 and points out that the vanishing derivative is
 *      exactly what the graph predicts: y is at its minimum where sin x is at
 *      its maximum.
 *
 *   3. Page 588, Addendum B, the check after Example B.1. Having found
 *      1/y = e<sup>x</sup>(C − x), the book writes "At large negative x the
 *      denominator dominates and y → 0". The direction is reversed. As x runs
 *      to minus infinity, e<sup>x</sup>(C − x) → 0 because the exponential
 *      beats the linear factor, so 1/y → 0 and |y| grows without bound. It is
 *      at large positive x that e<sup>x</sup>(C − x) → −∞ and therefore
 *      y → 0, which is the behaviour the sentence wanted and the reason the
 *      lost singular solution y = 0 is worth naming. The conclusion is right
 *      and the supporting limit is backwards; Topic 04 states it in the
 *      correct direction.
 *
 * Every other result printed between pages 543 and 600 was checked by
 * substitution, which is the complete test for this chapter, and every
 * integrating factor was recomputed from ∫P dx. That includes all five Part 1
 * practice answers and four MCQ keys, all five Part 2 formations, all five
 * Part 3 solutions and the origin shift, all five Part 4 solutions including
 * the linear-in-x item x = C e<sup>sin y</sup> − 2(1 + sin y), all five Part 5
 * applications, all five exact-equation answers of Addendum A, all five
 * reductions of Addendum B, all five geometric conditions of Addendum C, all
 * five order-lowerings of Addendum D, and all twelve graded items of Addendum
 * P including the JEE 1996 tangent identity and the 2005 pair x = 2y − y² and
 * x₀ = e√3. They are correct as printed.
 *
 * One place where the source is muddled rather than wrong. Addendum D's check
 * on Example D.1 (page 592) prints the product yy″ as a string of stray
 * factors, "AB²A²e^{2Ax} · (1/A) · A", which is extraction damage rather than
 * mathematics; the identity it is checking, yy″ = (y′)² for y = B exp(Ax),
 * is true, and this chapter re-derives the check in one line instead of
 * copying it. The extraction of the source's minus signs is damaged throughout
 * pages 553 to 582, where a minus repeatedly arrives as an escape sequence;
 * every affected expression was re-authored from the surrounding algebra, not
 * guessed at.
 *
 * The exam hook is authored once, on topic 1, with a bold heading per topic,
 * because the reader renders `hook` only there. Diagram chips and captions
 * render as plain text, not markup, so they carry no inline tags.
 */
import type { Chapter } from '@/lib/textbooks';

export const ch12DifferentialEquations: Chapter = {
  "chapter": "09",
  "title": "Differential Equations",
  "subject": "Mathematics",
  "klass": "Class 12",
  "topics": [
    {
      "n": "01",
      "title": "Order, Degree, and What Counts as a Solution",
      "chip": "01 ORDER + DEGREE",
      "kalam": "read the scoreboard before you play the match",
      "blocks": [
        {
          "t": "hook",
          "html": "<b>01 · Order, Degree, and What Counts as a Solution</b><br>The gateway subtopic, and the most reliably scored part of the chapter. CBSE almost always carries a guaranteed 1 mark question asking for order and degree. JEE Main runs 1 to 2 a year, very often the “degree is not defined” trap or a count of arbitrary constants. JEE Advanced rarely asks it alone, it hides it as the first step of a curve-family problem. One honest warning from the previous-year bank: standalone order and degree items are <b>rarer at JEE than the drilling suggests</b>, because there they arrive buried inside a formation problem. The pure “not defined” drill is a Boards and CUET staple. Not in NEET, the medical paper has no mathematics section.<br><br><b>02 · Forming an Equation by Eliminating the Constants</b><br>A near-guaranteed CBSE question at 2 to 3 marks: “form the differential equation of the family…”. JEE Main sets it as an order-counting MCQ about once a year, almost always with a constant-collapse trap. In the previous-year bank it is roughly <b>one question in six</b>, with at least one item in most recent sessions. It is the reverse of solving, and it is the bridge between “what is a solution” and “how do I get one”.<br><br><b>03 · Variables Separable, and Homogeneous Equations</b><br>Where you finally solve something, and heavily examined. Boards almost always carry a 3 to 5 mark “solve this” drawn from one of the two, frequently with an initial condition attached. JEE Main asks 1 to 2 a year, usually a homogeneous equation disguised well enough that you must first <b>recognise</b> the type. Homogeneous and reducible-to-separable together are about <b>one question in five</b> in the bank. Plain separable is a small share on its own and almost always fused with another skill.<br><br><b>04 · Linear Equations and the Integrating Factor</b><br>The single most examined method in the chapter, and it is not close. Boards effectively guarantee a 3 to 5 mark linear equation, usually with an initial condition. JEE Main asks 1 to 2 a year, often an integrating-factor MCQ or an equation cunningly disguised as <b>linear in <i>x</i></b> rather than in <i>y</i>. Linear equations in all their disguises are <b>close to half</b> the previous-year bank, and even where the printed question is damaged the printed solutions show integrating-factor work throughout. If you master one technique here, make it this one.<br><br><b>05 · Exact Equations, Inspection, and Lowering the Order</b><br>What to do when an equation is none of the three. CBSE asks exactness rarely; JEE Main sets one “solve” question most years that fits no workhorse type and turns out to be exact, or exact after a well-chosen division. Advanced expects you to <b>spot</b> a perfect differential by eye, which is a table you memorise once. Bernoulli equations and the <i>f</i>(<i>ax</i> + <i>by</i> + <i>c</i>) substitution live here too. Order-lowering is openly beyond the board syllabus and is JEE Advanced enrichment, built entirely on Topics 03 and 04.<br><br><b>06 · Growth, Decay, Cooling, and the Geometry of Curves</b><br>Where the chapter meets the world. CBSE sets growth, decay and cooling word problems at 3 to 5 marks in the miscellaneous set. JEE Main reliably asks one application a year. JEE Advanced layers in orthogonal trajectories and tangent and normal geometry. A useful piece of intelligence: in the previous-year bank the application questions <b>cluster before 2005</b> and have thinned out of recent Mains, while the geometric conditions have not. Every model in the topic reduces to a separable or a linear equation you already own."
        },
        {
          "t": "p",
          "html": "Picture a cup of hot chai cooling on a winter morning in Shimla. Nobody can hand you a formula for its exact temperature at 9:47. That is hard. But you can say something simpler and truer: the chai cools <b>faster when the gap between it and the room is larger</b>. That sentence is about a rate of change rather than about a value, and a sentence like that is a differential equation."
        },
        {
          "t": "p",
          "html": "So a differential equation is any equation containing a derivative of an unknown function. Instead of handing you the function, it hands you a <b>rule about how the function changes</b>, and the rest of the chapter is about undoing the rule to recover the function. In this topic you solve nothing. You learn to read, classify and check, which is the vocabulary every later topic assumes."
        },
        {
          "t": "def",
          "term": "Differential equation",
          "html": "An equation relating an unknown function <i>y</i>, the independent variable <i>x</i>, and one or more derivatives of <i>y</i>. If every derivative is taken with respect to a <b>single</b> independent variable, it is an <b>ordinary</b> differential equation, an ODE, and every equation in Class 12 is one of those. Partial derivatives with respect to several independent variables give a <b>partial</b> differential equation, which you will meet in engineering and not here."
        },
        {
          "t": "p",
          "html": "Two ways of writing the same thing, and you need both. <b>Leibniz</b>: d<i>y</i>/d<i>x</i>, then d<sup>2</sup><i>y</i>/d<i>x</i><sup>2</sup>, up to d<sup>n</sup><i>y</i>/d<i>x</i><sup>n</sup>. <b>Prime</b>: <i>y</i>′, <i>y</i>″, <i>y</i><sup>(n)</sup>. This chapter uses primes wherever a derivative is only being counted or classified, because that is most of Topic 01. From Topic 03 onwards the Leibniz form earns its extra length, because there d<i>y</i> and d<i>x</i> get physically moved to opposite sides of the equation and you need to see them as objects."
        },
        {
          "t": "p",
          "html": "<b>Order</b> is the order of the highest derivative that appears. If the deepest thing in the equation is <i>y</i>″, the order is 2, no matter how many first derivatives crowd around it and no matter what powers any of them carry. Order answers exactly one question: what is the deepest level of change this equation talks about?"
        },
        {
          "t": "p",
          "html": "<b>Degree</b> is subtler, and the subtlety is where the marks are. Before you may read a degree, the equation has to be a <b>polynomial in its derivatives</b>: no root over a derivative, no derivative in a denominator, no derivative sitting inside a sine or a logarithm or an exponential. Only then is the degree defined, and it is the <b>power of the highest-order derivative</b> in that cleaned-up form. Clean first, read second. Never the other way round."
        },
        {
          "t": "think",
          "html": "picture the derivatives as a batting order. the order of the equation is the rank of the top batsman, the deepest derivative who walks out. the degree is how many runs that exact batsman scores, counted after the innings is settled. you never read a score off a messy scorecard. you tidy up, then count."
        },
        {
          "t": "defgrid",
          "title": "The vocabulary the rest of the chapter assumes",
          "rows": [
            { "k": "Ordinary DE", "v": "derivatives with respect to a <b>single</b> independent variable. All of Class 12" },
            { "k": "Partial DE", "v": "derivatives with respect to more than one independent variable. Not examined here" },
            { "k": "Order", "v": "the order of the <b>highest</b> derivative present. Powers play no part in it" },
            { "k": "Degree", "v": "the <b>power</b> of the highest-order derivative, read only after the equation is polynomial in its derivatives. Defined only when that form exists" },
            { "k": "General solution", "v": "a solution carrying exactly as many <b>independent</b> arbitrary constants as the order" },
            { "k": "Particular solution", "v": "the general solution with its constants pinned by given conditions. <b>No</b> arbitrary constants survive" }
          ]
        },
        {
          "t": "formula",
          "kicker": "THE SHAPE OF AN ORDER n EQUATION",
          "tag": "an implicit relation, not necessarily solvable for the top derivative",
          "main": "<i>F</i>(<i>x</i>, <i>y</i>, <i>y</i>′, <i>y</i>″, …, <i>y</i><sup>(n)</sup>) = 0",
          "legend": [
            "<i>y</i> is the <b>dependent</b> variable, <i>x</i> the <b>independent</b> one, and every derivative is of <i>y</i> with respect to <i>x</i>",
            "<i>y</i><sup>(n)</sup> is the same object as d<sup>n</sup><i>y</i>/d<i>x</i><sup>n</sup>, and its presence is what makes the order <i>n</i>",
            "arbitrary constants are written <i>A</i>, <i>B</i>, <i>C</i>, <i>c</i><sub>1</sub>, <i>c</i><sub>2</sub>, and they never appear in the equation itself, only in its solutions"
          ],
          "note": "Order and degree are two <b>independent</b> fingerprints. (<i>y</i>″)<sup>4</sup> + <i>y</i>′ = 0 has order 2 and degree 4, and neither number tells you anything about the other."
        },
        {
          "t": "proc",
          "title": "Read the order, then the degree",
          "steps": [
            "<b>Find the highest derivative present.</b> Its order is the order of the equation. Ignore powers entirely at this step: they are a degree question, not an order question.",
            "<b>Run the gate before anything else.</b> Is any derivative sitting inside sin, cos, tan, log, an exponential, or an inverse trigonometric function? If yes, stop. <b>Degree is not defined</b>, and that is a complete and correct answer.",
            "<b>Clear the mess.</b> Square out roots, raise both sides to whatever integer power removes a fractional exponent, and clear denominators, until the equation is a genuine polynomial in the derivatives. The order is unchanged by this; the readable degree is not.",
            "<b>Read the power of the highest-order derivative</b> in that cleaned form. That power is the degree, and it is always a positive integer when it exists.",
            "<b>Write the pair explicitly.</b> “Order = 3, Degree = 1”. Examiners award the mark on the stated pair, not on your working."
          ]
        },
        {
          "t": "def",
          "term": "Degree not defined",
          "html": "The moment a derivative sits inside a transcendental function, the degree does not exist. Not 1, not 0, and not “undefined because the question is broken”. Expand exp(<i>y</i>′) and you get 1 + <i>y</i>′ + (<i>y</i>′)<sup>2</sup>/2! + …, an infinite chain of powers of <i>y</i>′ with no highest one to point at, so there is nothing to read a degree off. Order is untouched by any of this: <i>y</i>″ + exp(<i>y</i>′) = 0 has order 2 and no degree at all."
        },
        {
          "t": "p",
          "html": "Now the other half of the vocabulary. A <b>solution</b> is any relation between <i>x</i> and <i>y</i>, free of derivatives, that satisfies the equation for every <i>x</i> in the interval you care about. And there is a counting fact that runs through the entire chapter: <b>the order equals the number of independent arbitrary constants</b> in the general solution. An order 2 equation has a general solution with exactly two free constants, no more and no fewer. Supply two extra facts, say a point and a slope there, and both constants are pinned. What is left is a <b>particular</b> solution: one curve out of infinitely many."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · ONE EQUATION, A WHOLE FAMILY, ONE CURVE",
          "chips": ["the family", "one condition", "not a solution"],
          "captions": [
            "The equation y double prime plus 9y equals 0 has order 2, so its general solution carries two constants: y equals A cos 3x plus B sin 3x. Three members are drawn. Every one of them satisfies the same equation.",
            "Add two facts, y equals 2 and slope 0 at x equals 0. They force A equals 2 and B equals 0, and the family collapses to the single curve y equals 2 cos 3x. That is what particular solution means.",
            "y equals cos x, drawn against y equals cos 3x. Right shape, wrong frequency. Substituting gives minus cos x plus 9 cos x, which is 8 cos x, not 0. Being in the right family is not the same as being a solution."
          ],
          "frames": [
            {
              "x": [-3.14159, 3.14159],
              "y": [-2.6, 2.6],
              "piTicks": true,
              "curves": [
                { "c": "cos", "b": 3 },
                { "c": "cos", "b": 3, "a": 2, "soft": true },
                { "c": "sin", "b": 3, "soft": true }
              ],
              "labels": [{ "x": -1.6, "y": 2.3, "text": "A cos 3x + B sin 3x" }]
            },
            {
              "x": [-3.14159, 3.14159],
              "y": [-2.6, 2.6],
              "piTicks": true,
              "curves": [
                { "c": "cos", "b": 3, "a": 2 },
                { "c": "cos", "b": 3, "soft": true },
                { "c": "sin", "b": 3, "soft": true }
              ],
              "points": [{ "x": 0, "y": 2, "label": "(0, 2)" }],
              "labels": [{ "x": -1.75, "y": -2.2, "text": "y = 2 cos 3x" }]
            },
            {
              "x": [-3.14159, 3.14159],
              "y": [-2.6, 2.6],
              "piTicks": true,
              "curves": [
                { "c": "cos", "b": 3 },
                { "c": "cos", "b": 1 }
              ],
              "labels": [
                { "x": -1.7, "y": 2.3, "text": "cos 3x solves it" },
                { "x": 1.6, "y": -2.2, "text": "cos x does not" }
              ]
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "CONSTANTS AND ORDER, THE SAME NUMBER TWICE",
          "tag": "independent constants only, count after simplifying",
          "main": "order <i>n</i> ⟺ <i>n</i> independent arbitrary constants in the general solution",
          "legend": [
            "read one way, an order 3 equation has a general solution with exactly three free constants",
            "read the other way, a family written with three genuinely independent constants satisfies an order 3 equation, and that is the whole of Topic 02",
            "<b>independent</b> is the load-bearing word: constants that can be merged into one another count once"
          ],
          "note": "In <i>y</i> = <i>Ax</i> + <i>A</i><sup>3</sup> both terms come from the <b>same</b> <i>A</i>, so there is one independent constant and the order is 1, not 2. Likewise <i>c</i><sub>1</sub> + <i>c</i><sub>2</sub> is one constant wearing two names. Always ask “can these be combined?” before you count."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE ARBITRARY-CONSTANT COLLAPSE, TAP A LINE",
          "steps": [
            {
              "eq": "given <i>y</i> = (<i>c</i><sub>1</sub> + <i>c</i><sub>2</sub>) exp(<i>x</i> + <i>c</i><sub>3</sub>) + <i>c</i><sub>4</sub> sin(<i>x</i> + <i>c</i><sub>5</sub>). find the order.",
              "why": "Five symbols are written down, so the naive answer is five, and five is the trap the question is built around. Order counts independent constants, so the first job is to find out how many of these five survive simplification."
            },
            {
              "eq": "(<i>c</i><sub>1</sub> + <i>c</i><sub>2</sub>) exp(<i>x</i> + <i>c</i><sub>3</sub>) = [(<i>c</i><sub>1</sub> + <i>c</i><sub>2</sub>) exp(<i>c</i><sub>3</sub>)] <i>e</i><sup>x</sup> = <i>A e</i><sup>x</sup>",
              "why": "A sum of two constants is one constant, and a constant inside an exponent factors straight out as another constant multiplier. Three written symbols collapse into a single new constant A. This whole term contributes one."
            },
            {
              "eq": "<i>c</i><sub>4</sub> sin(<i>x</i> + <i>c</i><sub>5</sub>) = (<i>c</i><sub>4</sub> cos <i>c</i><sub>5</sub>) sin <i>x</i> + (<i>c</i><sub>4</sub> sin <i>c</i><sub>5</sub>) cos <i>x</i>",
              "why": "Expand with the compound angle formula. The coefficient of sin x and the coefficient of cos x can be set to any pair of numbers you like by choosing c4 and c5, so these are two genuinely independent constants, not one."
            },
            {
              "eq": "independent count = 1 + 2 = 3",
              "why": "One from the exponential term, two from the sinusoid, and nothing left that can be merged with anything else."
            },
            {
              "eq": "order = 3",
              "why": "Constants summed inside one coefficient, and constants buried in an exponent, almost always collapse. Constants that end up as coefficients of different functions of x almost never do. Simplify before you count, every single time."
            }
          ]
        },
        {
          "t": "proc",
          "title": "Check whether a proposed function is a solution",
          "steps": [
            "<b>Differentiate the candidate</b> as many times as the equation needs, and no more. This step is pure mechanics.",
            "<b>Substitute</b> the candidate and its derivatives into the left-hand side of the equation.",
            "<b>Simplify.</b> If the left side reduces to the right side <b>for every</b> <i>x</i>, the candidate is a genuine solution.",
            "<b>If it matches only at particular values of <i>x</i>, it is not a solution.</b> An identity in <i>x</i> is the entire requirement, and “it works at <i>x</i> = 0” is worth nothing.",
            "<b>Use this on your own answers too.</b> Every solving question in this chapter can be checked by substituting the answer back. It costs thirty seconds and it is the one check that cannot lie to you."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD PATTERN",
          "q": "Find the order and degree of <i>y</i>‴ + 5(<i>y</i>″)<sup>2</sup> − 7<i>y</i>′ + 4<i>y</i> = cos <i>x</i>.",
          "steps": [
            "Highest derivative present is <i>y</i>‴, so the <b>order is 3</b>. The square on <i>y</i>″ is irrelevant here.",
            "Gate: every derivative appears as a plain polynomial term. The cos <i>x</i> on the right involves <i>x</i>, not a derivative, so it does not trip the gate. Degree is defined.",
            "Power of the highest-order derivative <i>y</i>‴ is 1."
          ],
          "ans": "Order 3, degree 1. Write the pair out in full; the mark is awarded on the explicit statement, not on the working above it."
        },
        {
          "t": "ex",
          "tag": "CUET / JEE MAIN PATTERN",
          "q": "State the degree of each in under fifteen seconds. (i) <i>y</i>″ = sin(<i>y</i>′).  (ii) √(1 + (<i>y</i>′)<sup>2</sup>) = <i>y</i>″.",
          "steps": [
            "(i) <i>y</i>′ is trapped inside a sine. Trip the gate immediately: <b>degree not defined</b>. Compute nothing else.",
            "(ii) A square root sits over a derivative expression, so this is not yet polynomial. Square both sides: 1 + (<i>y</i>′)<sup>2</sup> = (<i>y</i>″)<sup>2</sup>.",
            "Now it is polynomial. Highest-order derivative is <i>y</i>″ and its power is 2."
          ],
          "ans": "(i) degree not defined, order 2. (ii) order 2, degree 2. <b>Speed rule:</b> a root over a derivative means square it; a transcendental wrapper means stop."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED 1999 PATTERN",
          "q": "Find the order and degree of the differential equation of the family <i>y</i><sup>2</sup> = 2<i>c</i>(<i>x</i> + √<i>c</i>), with <i>c</i> > 0.",
          "steps": [
            "One constant, so differentiate once: 2<i>yy</i>′ = 2<i>c</i>, giving <i>c</i> = <i>yy</i>′.",
            "Substitute back. The 2<i>c</i>√<i>c</i> piece becomes 2(<i>yy</i>′)√(<i>yy</i>′), so <i>y</i><sup>2</sup> = 2<i>xyy</i>′ + 2(<i>yy</i>′)√(<i>yy</i>′).",
            "That root is not polynomial. Isolate it and square: (<i>y</i><sup>2</sup> − 2<i>xyy</i>′)<sup>2</sup> = 4<i>y</i><sup>3</sup>(<i>y</i>′)<sup>3</sup>.",
            "Highest-order derivative is <i>y</i>′, so the order is 1, and in this cleaned form its power is 3."
          ],
          "ans": "Order 1, degree 3. Reading the degree off the unsquared line gives 1, and that wrong answer is on every option list this question has ever carried."
        },
        {
          "t": "mcq",
          "q": "The order and degree of (1 + (<i>y</i>′)<sup>2</sup>)√(1 + (<i>y</i>′)<sup>2</sup>) = <i>k y</i>″, the curvature equation, are respectively:",
          "opts": [
            { "label": "2 and 3", "nudge": "This reads the 3 out of the power three over two on the left bracket and calls it the degree. That power sits on a <b>first</b>-derivative bracket, and degree only ever counts the power of the <b>highest</b>-order derivative." },
            { "label": "2 and 2", "nudge": null },
            { "label": "2 and 1", "nudge": "This reads the degree off the unsquared form, where <i>y</i>″ does appear to the first power. Fractional powers must be cleared first, and clearing this one squares the right-hand side." },
            { "label": "1 and 2", "nudge": "The order is misread. The equation contains <i>y</i>″, a second derivative, so the order is 2 whatever the degree turns out to be." }
          ],
          "correct": 1,
          "solution": "The left side is a bracket raised to the power three over two, written here as the bracket times its own square root. Square both sides to clear it: (1 + (<i>y</i>′)<sup>2</sup>)<sup>3</sup> = <i>k</i><sup>2</sup>(<i>y</i>″)<sup>2</sup>. Highest derivative <i>y</i>″ gives order 2, and its power is now 2."
        },
        {
          "t": "mcq",
          "q": "The degree of <i>y</i>″ + 3(<i>y</i>′)<sup>2</sup> = <i>x</i> log(<i>y</i>″) is:",
          "opts": [
            { "label": "1", "nudge": "This takes the power of <i>y</i>″ on the <b>left</b> and ignores the right-hand side entirely. The gate applies to the whole equation, not to the half you looked at first." },
            { "label": "2", "nudge": "This picks up the 2 from (<i>y</i>′)<sup>2</sup>, but that is a lower-order derivative. Degree only ever counts the power of the highest-order one." },
            { "label": "3", "nudge": "There is no 3 anywhere in this equation. It is chosen by students who feel that “not defined” cannot really be an option on a paper." },
            { "label": "not defined", "nudge": null }
          ],
          "correct": 3,
          "solution": "The highest-order derivative <i>y</i>″ appears inside a logarithm on the right. A transcendental function of a derivative can never be reduced to a polynomial form, so no degree exists. The order is a comfortable 2, and “not defined” is a complete answer, not a cop-out."
        },
        {
          "t": "mcq",
          "q": "Which of these is a solution of <i>y</i>″ + 9<i>y</i> = 0?",
          "opts": [
            { "label": "<i>y</i> = <i>e</i><sup>3x</sup>", "nudge": "Here <i>y</i>″ = 9<i>y</i>, so the left side becomes 9<i>y</i> + 9<i>y</i> = 18<i>y</i>, not 0. This solves <i>y</i>″ − 9<i>y</i> = 0: right magnitude, wrong sign of curvature." },
            { "label": "<i>y</i> = cos 3<i>x</i>", "nudge": null },
            { "label": "<i>y</i> = cos <i>x</i>", "nudge": "Right family, wrong frequency. <i>y</i>″ = −cos <i>x</i>, so the left side is −cos <i>x</i> + 9 cos <i>x</i> = 8 cos <i>x</i>, which is not identically zero. The 3 inside the cosine is doing real work." },
            { "label": "<i>y</i> = <i>e</i><sup>−3x</sup>", "nudge": "Same failure as the first option. Both exponentials give <i>y</i>″ = 9<i>y</i> and the left side comes out 18<i>y</i>. A minus in the exponent does not flip the sign of a second derivative." }
          ],
          "correct": 1,
          "solution": "Run the verification procedure. For <i>y</i> = cos 3<i>x</i>, <i>y</i>′ = −3 sin 3<i>x</i> and <i>y</i>″ = −9 cos 3<i>x</i>, so <i>y</i>″ + 9<i>y</i> = −9 cos 3<i>x</i> + 9 cos 3<i>x</i> = 0 for every <i>x</i>. That is an identity, which is the whole requirement."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "Find the order and degree of 2<i>y</i>″ + 3<i>y</i>′ + <i>y</i> = 0.",
              "a": "Order 2, degree 1. Highest derivative <i>y</i>″, appearing to the first power, nothing inside a transcendental function and nothing under a root."
            },
            {
              "q": "Write the degree of <i>y</i>″ + cos(<i>y</i>′) = 0.",
              "a": "Not defined. A derivative sits inside a cosine, so the gate trips and there is no polynomial form to read a power off. The order is still 2."
            },
            {
              "q": "Find the order and degree of (1 + <i>y</i>′)<sup>3</sup> = (<i>y</i>″)<sup>2</sup>.",
              "a": "Order 2, degree 2. Already polynomial, so no cleaning is needed. The cube sits on a first-derivative bracket and is not the degree; the power of <i>y</i>″ is."
            },
            {
              "q": "Determine the order of the equation whose general solution is <i>y</i> = <i>A</i> cos(2<i>x</i> + <i>B</i>) + <i>C</i> exp(<i>Dx</i>).",
              "a": "Order 4. <i>A</i> cos(2<i>x</i> + <i>B</i>) expands into coefficients of cos 2<i>x</i> and sin 2<i>x</i>, so it carries two. In <i>C</i> exp(<i>Dx</i>) the <i>D</i> multiplies <i>x</i> and cannot be absorbed into <i>C</i>, so that term carries two as well. Four independent constants, order 4."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "Announcing the degree off a messy equation. Radicals, fractional powers and denominators all have to go first. The order survives that cleaning unchanged; the readable degree does not.",
            "Forcing a degree onto a non-polynomial equation. If a derivative hides inside sin, log, an exponential or an inverse trig function, the honest answer is “not defined”, and it is a full-mark answer.",
            "Taking the power of the wrong derivative. Degree uses the power of the <b>highest-order</b> derivative, not the largest power anywhere in sight. In (<i>y</i>′)<sup>5</sup> + <i>y</i>″ = 0 the degree is 1, even with a 5 staring at you.",
            "Counting written constants instead of independent ones. <i>c</i><sub>1</sub> + <i>c</i><sub>2</sub>, <i>c</i><sub>1</sub><i>c</i><sub>2</sub>, and constants buried in exponents all collapse. Simplify, then count.",
            "Calling something a solution because it works at one value of <i>x</i>. Substitution has to give an identity, true for every <i>x</i> on the interval."
          ]
        },
        {
          "t": "protip",
          "html": "run a two-second gate on every order and degree question before you write anything. is any derivative inside a sine, a log or an exponential? then degree undefined, done. is any derivative under a root or in a fractional power? then square first, and only then read. neither? read the power of the top derivative straight off. that one reflex prevents three of the four mistakes above."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "order = order of the highest derivative present", "note": "powers are irrelevant to it, completely" },
            { "f": "degree = power of that highest derivative, polynomial form only", "note": "clean the equation first, then read" },
            { "f": "derivative inside sin, log, exp, tan<sup>−1</sup> ⇒ no degree", "note": "the order is still perfectly well defined" },
            { "f": "order = number of <b>independent</b> arbitrary constants", "note": "merge what can be merged before counting" },
            { "f": "general solution has <i>n</i> constants, particular has none", "note": "conditions are what convert one into the other" }
          ],
          "aids": [
            "order is the rank of the boss derivative, degree is the boss's power",
            "no polynomial, no degree",
            "clean before you count",
            "constants equal order, and only the independent ones count"
          ]
        }
      ]
    },
    {
      "n": "02",
      "title": "Forming an Equation by Eliminating the Constants",
      "chip": "02 FORMATION",
      "kalam": "constants in, derivatives out",
      "blocks": [
        {
          "t": "p",
          "html": "Solving takes you <b>from</b> a differential equation <b>to</b> a family of curves. Formation runs the other way. You are handed a whole family, described by an equation carrying one or more arbitrary constants, and you have to find the single differential equation that <b>every</b> member of that family obeys. It is the reverse of everything the next three topics do, and doing it first is what makes them make sense."
        },
        {
          "t": "p",
          "html": "Take the family “all straight lines through the origin”, written <i>y</i> = <i>mx</i>. The constant <i>m</i> is a dial: turn it and you get a different line. But every line in the family shares one property. At every point on it, the slope equals <i>y</i>/<i>x</i>. Write that with a derivative and <b>strip out the dial</b>, and you have d<i>y</i>/d<i>x</i> = <i>y</i>/<i>x</i>. The arbitrary constant has been eliminated. What is left is the family's DNA."
        },
        {
          "t": "think",
          "html": "a family of curves is a batch of biscuits from one cutter. different positions on the tray are the arbitrary constants, the identical shape is the underlying rule. formation is reverse-engineering the cutter from the biscuits: differentiate to expose the rule, then erase the position information."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · TURN THE DIAL, KEEP THE RULE",
          "chips": ["the dial", "what they share", "another family"],
          "captions": [
            "Five members of y equals mx, one for each setting of the dial m. One arbitrary constant, so one turn of the dial names a member, and the differential equation of the family will have order 1.",
            "Pick any member and any point on it. The rise over the run is y over x, and that is true on every line in the family whatever m is. So dy/dx equals y over x, with m nowhere in sight. That is the formed equation.",
            "A different family with one constant: the parabolas y squared equals 4ax. Turn a and the parabola opens wider or narrower. One constant again, so again order 1, and the equation comes out 2x dy/dx equals y."
          ],
          "frames": [
            {
              "x": [-3, 3],
              "y": [-2.14, 2.14],
              "curves": [
                { "c": "line", "m": 1, "k": 0 },
                { "c": "line", "m": 2.2, "k": 0, "soft": true },
                { "c": "line", "m": 0.45, "k": 0, "soft": true },
                { "c": "line", "m": -1.3, "k": 0, "soft": true },
                { "c": "line", "m": 0, "k": 0, "soft": true }
              ],
              "labels": [{ "x": -1.7, "y": 1.8, "text": "y = mx" }]
            },
            {
              "x": [-3, 3],
              "y": [-2.14, 2.14],
              "curves": [
                { "c": "line", "m": 1.5, "k": 0 },
                { "c": "line", "m": 2.2, "k": 0, "soft": true },
                { "c": "line", "m": 0.45, "k": 0, "soft": true },
                { "c": "line", "m": -1.3, "k": 0, "soft": true }
              ],
              "segments": [
                { "from": [1.2, 1.8], "to": [1.2, 0], "dash": true, "soft": true },
                { "from": [0, 0], "to": [1.2, 0], "dash": true, "soft": true }
              ],
              "points": [{ "x": 1.2, "y": 1.8, "label": "(x, y)" }],
              "labels": [{ "x": -1.5, "y": 1.8, "text": "slope = y/x" }]
            },
            {
              "x": [-0.4, 5.6],
              "y": [-2.14, 2.14],
              "curves": [
                { "c": "parabola", "a": 0.5, "horizontal": true },
                { "c": "parabola", "a": 0.2, "horizontal": true, "soft": true },
                { "c": "parabola", "a": 1.1, "horizontal": true, "soft": true }
              ],
              "labels": [{ "x": 3.4, "y": 1.75, "text": "y² = 4ax" }]
            }
          ]
        },
        {
          "t": "def",
          "term": "Differential equation of a family",
          "html": "A family of curves with <i>n</i> independent arbitrary constants is written <i>F</i>(<i>x</i>, <i>y</i>, <i>a</i><sub>1</sub>, …, <i>a</i><sub>n</sub>) = 0. Its <b>differential equation</b> is the relation you get by eliminating all <i>n</i> constants, and it has the form Φ(<i>x</i>, <i>y</i>, <i>y</i>′, …, <i>y</i><sup>(n)</sup>) = 0: an equation of <b>order <i>n</i></b> containing only <i>x</i>, <i>y</i> and derivatives. If any arbitrary constant survives into your final line, the job is not finished."
        },
        {
          "t": "formula",
          "kicker": "THE COUNTING RULE THAT DRIVES EVERYTHING",
          "tag": "count first, differentiate second",
          "main": "<i>n</i> independent constants ⇒ differentiate <i>n</i> times ⇒ an order <i>n</i> equation",
          "legend": [
            "one constant means differentiate once and eliminate, giving a first-order equation",
            "two constants means differentiate twice, and the original equation plus its two derivatives are <b>three</b> relations, which is exactly enough to eliminate two unknowns and keep one clean equation",
            "in general the original plus <i>n</i> derivative equations is <i>n</i> + 1 relations for <i>n</i> unknown constants, so the count is never accidental"
          ],
          "note": "Stopping early strands a constant in your answer. Going further than needed is not wrong, but it produces a higher-order equation that the family still satisfies while not being the <b>minimal</b> one the examiner asked for, so it will not score."
        },
        {
          "t": "proc",
          "title": "Form the differential equation of a family",
          "steps": [
            "<b>Count the independent arbitrary constants</b>, <i>n</i>. Merge everything that collapses first: sums inside one coefficient, products of constants, constants hiding in exponents.",
            "<b>Write down the order you expect.</b> It is <i>n</i>. Doing this before any algebra is what catches a miscount later.",
            "<b>Differentiate the given equation <i>n</i> times</b> with respect to <i>x</i>. Each differentiation hands you one new relation.",
            "<b>Eliminate the constants</b> using the original equation together with those <i>n</i> derivative equations, either by substitution or by treating them as simultaneous equations in the constants.",
            "<b>Write the result purely in <i>x</i>, <i>y</i> and derivatives</b>, and check that no arbitrary constant survived and no new one was introduced.",
            "<b>Check the order against your prediction.</b> A mismatch means either a collapse you missed or a differentiation you skipped, and it points at which one."
          ]
        },
        {
          "t": "p",
          "html": "The counting step is where the marks are actually lost, because constants disguise themselves. In <i>y</i> = (<i>c</i><sub>1</sub> + <i>c</i><sub>2</sub>)<i>e</i><sup>3x</sup> there is <b>one</b> constant, not two. In <i>y</i> = <i>c</i><sub>1</sub><i>e</i><sup>3x</sup> + <i>c</i><sub>2</sub><i>e</i><sup>3x</sup> there is also one, because the two exponentials are identical and their coefficients add. But in <i>y</i> = <i>c</i><sub>1</sub><i>e</i><sup>3x</sup> + <i>c</i><sub>2</sub><i>e</i><sup>−3x</sup> there are genuinely two, because no algebra fuses <i>e</i><sup>3x</sup> with <i>e</i><sup>−3x</sup>. The test is always the same: <b>is there an identity that merges these?</b>"
        },
        {
          "t": "p",
          "html": "Geometric families hide their constant count inside the English, so translate the geometry into parameters before you do anything else. “All circles of radius 3 with centre on the <i>x</i>-axis” has one free parameter, the centre's <i>x</i>-coordinate, so order 1. “All circles in the plane”, <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> + 2<i>gx</i> + 2<i>fy</i> + <i>c</i> = 0, has three, so order 3. That second one is a classic exam fact and it is worth knowing cold."
        },
        {
          "t": "defgrid",
          "title": "Geometry translated into a parameter count",
          "rows": [
            { "k": "All lines through the origin", "v": "<i>y</i> = <i>mx</i>. One parameter, order 1" },
            { "k": "All straight lines", "v": "<i>y</i> = <i>mx</i> + <i>c</i>. Two parameters, order 2, and the equation is <i>y</i>″ = 0" },
            { "k": "Circles of fixed radius, centre on the <i>x</i>-axis", "v": "one parameter, order 1" },
            { "k": "Circles through the origin, centre on the <i>x</i>-axis", "v": "<i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> = 2<i>ax</i>. One parameter, order 1" },
            { "k": "All circles in the plane", "v": "<i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> + 2<i>gx</i> + 2<i>fy</i> + <i>c</i> = 0. Three parameters, order 3" },
            { "k": "Rectangular hyperbolas <i>xy</i> = <i>c</i>", "v": "one parameter, order 1, and the equation is <i>xy</i>′ + <i>y</i> = 0" }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · TWO CONSTANTS, TWO DIFFERENTIATIONS, TAP A LINE",
          "steps": [
            {
              "eq": "form the equation of <i>y</i> = <i>e</i><sup>x</sup>(<i>A</i> cos <i>x</i> + <i>B</i> sin <i>x</i>)",
              "why": "Two independent constants A and B, so predict order 2 and expect to differentiate twice. This one also tests the product rule, which is why it is worth doing slowly."
            },
            {
              "eq": "<i>y</i>′ = <i>e</i><sup>x</sup>(<i>A</i> cos <i>x</i> + <i>B</i> sin <i>x</i>) + <i>e</i><sup>x</sup>(−<i>A</i> sin <i>x</i> + <i>B</i> cos <i>x</i>) = <i>y</i> + <i>w</i>",
              "why": "Product rule. The first bracket is exactly y again, which is the whole trick: naming the second bracket w keeps the algebra to two symbols instead of four."
            },
            {
              "eq": "so <i>w</i> = <i>y</i>′ − <i>y</i>, where <i>w</i> = <i>e</i><sup>x</sup>(−<i>A</i> sin <i>x</i> + <i>B</i> cos <i>x</i>)",
              "why": "One constant-carrying quantity has been expressed purely in terms of y and its derivative. The constants are still inside w, but we no longer have to look at them."
            },
            {
              "eq": "<i>w</i>′ = <i>e</i><sup>x</sup>(−<i>A</i> sin <i>x</i> + <i>B</i> cos <i>x</i>) + <i>e</i><sup>x</sup>(−<i>A</i> cos <i>x</i> − <i>B</i> sin <i>x</i>) = <i>w</i> − <i>y</i>",
              "why": "Product rule again on w. The second bracket is the negative of the original one, so it is minus y. The same trick twice, and no constants have been written down since step two."
            },
            {
              "eq": "<i>y</i>″ = <i>y</i>′ + <i>w</i>′ = <i>y</i>′ + (<i>w</i> − <i>y</i>) = <i>y</i>′ + (<i>y</i>′ − <i>y</i>) − <i>y</i>",
              "why": "Differentiate y prime equals y plus w, then substitute both expressions for w. Every arbitrary constant has now disappeared without ever being solved for."
            },
            {
              "eq": "<i>y</i>″ − 2<i>y</i>′ + 2<i>y</i> = 0",
              "why": "Order 2, matching the two constants, and free of A and B. Check it: differentiating a solution back through this equation returns zero for any A and any B, which is what a formed equation is supposed to do."
            }
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD PATTERN",
          "q": "Form the differential equation of the family of parabolas <i>y</i><sup>2</sup> = 4<i>ax</i>, where <i>a</i> is arbitrary.",
          "steps": [
            "One constant, so predict order 1 and differentiate once.",
            "2<i>y</i> d<i>y</i>/d<i>x</i> = 4<i>a</i>, which already gives 4<i>a</i> = 2<i>y</i> d<i>y</i>/d<i>x</i> with no rearranging.",
            "Substitute that straight into <i>y</i><sup>2</sup> = 4<i>ax</i>: <i>y</i><sup>2</sup> = 2<i>xy</i> d<i>y</i>/d<i>x</i>.",
            "Divide by <i>y</i>: <i>y</i> = 2<i>x</i> d<i>y</i>/d<i>x</i>."
          ],
          "ans": "2<i>x</i> d<i>y</i>/d<i>x</i> − <i>y</i> = 0, order 1 and degree 1. State the constant count and the expected order at the top of your answer; examiners reward the reasoning and it catches a miscount before you waste the algebra."
        },
        {
          "t": "ex",
          "tag": "CUET / JEE MAIN PATTERN",
          "q": "Form the differential equation of <i>y</i> = <i>A</i> cos <i>x</i> + <i>B</i> sin <i>x</i>.",
          "steps": [
            "Two independent constants, so differentiate <b>twice</b>. Predict order 2.",
            "<i>y</i>′ = −<i>A</i> sin <i>x</i> + <i>B</i> cos <i>x</i>.",
            "<i>y</i>″ = −<i>A</i> cos <i>x</i> − <i>B</i> sin <i>x</i> = −(<i>A</i> cos <i>x</i> + <i>B</i> sin <i>x</i>) = −<i>y</i>.",
            "The whole bracket is the original <i>y</i>, so both constants vanish in one stroke."
          ],
          "ans": "<i>y</i>″ + <i>y</i> = 0, the simple harmonic equation. <b>Speed lesson:</b> recognise the family. Any <i>A</i> cos <i>x</i> + <i>B</i> sin <i>x</i> is the general sinusoid and you can write its equation on sight. The trap is differentiating only once and then panicking when <i>A</i> and <i>B</i> refuse to cancel."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "Form the differential equation of all circles through the origin with centres on the <i>x</i>-axis: <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> = 2<i>ax</i>.",
          "steps": [
            "The centre is (<i>a</i>, 0) and the radius is <i>a</i>, so there is exactly one free parameter. Order 1.",
            "Differentiate: 2<i>x</i> + 2<i>y</i> d<i>y</i>/d<i>x</i> = 2<i>a</i>, so <i>a</i> = <i>x</i> + <i>y</i> d<i>y</i>/d<i>x</i>.",
            "Substitute: <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> = 2<i>x</i>(<i>x</i> + <i>y</i> d<i>y</i>/d<i>x</i>) = 2<i>x</i><sup>2</sup> + 2<i>xy</i> d<i>y</i>/d<i>x</i>.",
            "Collect: <i>y</i><sup>2</sup> − <i>x</i><sup>2</sup> = 2<i>xy</i> d<i>y</i>/d<i>x</i>."
          ],
          "ans": "d<i>y</i>/d<i>x</i> = (<i>y</i><sup>2</sup> − <i>x</i><sup>2</sup>)/2<i>xy</i>. Notice what that right-hand side depends on: divide top and bottom by <i>x</i><sup>2</sup> and it is a function of <i>y</i>/<i>x</i> alone. Forming an equation here has landed you exactly on a <b>homogeneous</b> equation, which is the type Topic 03 solves."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN 2020 PATTERN",
          "q": "Form the differential equation of the family <i>x</i><sup>2</sup> = 4<i>b</i>(<i>y</i> + <i>b</i>).",
          "steps": [
            "Expand first, so the constant appears in a form you can differentiate cleanly: <i>x</i><sup>2</sup> = 4<i>by</i> + 4<i>b</i><sup>2</sup>. One constant, order 1.",
            "Differentiate: 2<i>x</i> = 4<i>by</i>′, so <i>b</i> = <i>x</i>/(2<i>y</i>′).",
            "Substitute back: <i>x</i><sup>2</sup> = 4 · [<i>x</i>/(2<i>y</i>′)] · [<i>y</i> + <i>x</i>/(2<i>y</i>′)] = 2<i>xy</i>/<i>y</i>′ + <i>x</i><sup>2</sup>/(<i>y</i>′)<sup>2</sup>.",
            "Multiply through by (<i>y</i>′)<sup>2</sup> to clear the denominators, then divide by <i>x</i>."
          ],
          "ans": "<i>x</i>(<i>y</i>′)<sup>2</sup> = 2<i>yy</i>′ + <i>x</i>. Order 1 and degree 2, which is the pair this question is really testing: one constant fixes the order, and the elimination is what produced the square."
        },
        {
          "t": "p",
          "html": "That last example is worth a second look, because it is the shape JEE actually sets. The formation is routine; the examinable content is that <b>eliminating a constant can raise the degree</b> without touching the order. One free parameter guarantees order 1 and says nothing at all about degree, and a question that asks for both is asking whether you know they are independent."
        },
        {
          "t": "mcq",
          "q": "The differential equation of the family <i>y</i> = <i>mx</i>, with <i>m</i> arbitrary, is:",
          "opts": [
            { "label": "d<i>y</i>/d<i>x</i> = <i>y</i>/<i>x</i>", "nudge": null },
            { "label": "d<i>y</i>/d<i>x</i> = <i>x</i>/<i>y</i>", "nudge": "The ratio is inverted. On <i>y</i> = <i>mx</i> the slope is <i>m</i>, and <i>m</i> = <i>y</i>/<i>x</i>, not <i>x</i>/<i>y</i>. Check it on the line <i>y</i> = 2<i>x</i> at the point (1, 2): the slope is 2, and <i>y</i>/<i>x</i> is 2." },
            { "label": "d<i>y</i>/d<i>x</i> = <i>m</i>", "nudge": "This is true but it is not a differential equation of the family, because the arbitrary constant <i>m</i> is still standing in it. Elimination is the entire job." },
            { "label": "<i>x</i> d<i>y</i>/d<i>x</i> + <i>y</i> = 0", "nudge": "That is the equation of <i>xy</i> = <i>c</i>, the rectangular hyperbolas, a different family altogether. It says the slope is −<i>y</i>/<i>x</i>: right ratio, wrong sign." }
          ],
          "correct": 0,
          "solution": "Differentiating gives d<i>y</i>/d<i>x</i> = <i>m</i>, and the original equation gives <i>m</i> = <i>y</i>/<i>x</i>. Substituting the second into the first eliminates the constant and leaves d<i>y</i>/d<i>x</i> = <i>y</i>/<i>x</i>, order 1, as the single constant predicted."
        },
        {
          "t": "mcq",
          "q": "The order of the differential equation of the family of all circles <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> + 2<i>gx</i> + 2<i>fy</i> + <i>c</i> = 0 is:",
          "opts": [
            { "label": "1", "nudge": "This undercounts badly. One parameter would describe a one-dimensional slice of the circles, such as those of a fixed radius with centres on a line, not all of them." },
            { "label": "2", "nudge": "This counts the centre (−<i>g</i>, −<i>f</i>) and forgets that the radius is free as well. A circle needs three numbers, not two." },
            { "label": "3", "nudge": null },
            { "label": "4", "nudge": "There is no fourth independent parameter. Once the centre and the radius are chosen the circle is completely determined, so nothing is left to vary." }
          ],
          "correct": 2,
          "solution": "Three independent arbitrary constants <i>g</i>, <i>f</i> and <i>c</i>, so order 3. Geometrically: two numbers place the centre and one more fixes the radius, and a circle in the plane needs exactly three."
        },
        {
          "t": "mcq",
          "q": "The order of the differential equation of the family <i>y</i> = (<i>c</i><sub>1</sub> + <i>c</i><sub>2</sub>)<i>e</i><sup>x</sup> + <i>c</i><sub>3</sub> is:",
          "opts": [
            { "label": "1", "nudge": "This spots the collapse in the first term but then forgets the additive <i>c</i><sub>3</sub>, which is a genuinely independent constant of its own." },
            { "label": "2", "nudge": null },
            { "label": "3", "nudge": "This counts all three written symbols without noticing that <i>c</i><sub>1</sub> + <i>c</i><sub>2</sub> is one constant wearing two names. It is the headline trap of the whole topic." },
            { "label": "not defined", "nudge": "Order is always defined. You are thinking of degree, which can fail to exist when a derivative sits inside a transcendental function. Nothing like that is happening here." }
          ],
          "correct": 1,
          "solution": "<i>c</i><sub>1</sub> + <i>c</i><sub>2</sub> collapses to a single constant <i>A</i>, so the family is <i>y</i> = <i>Ae</i><sup>x</sup> + <i>c</i><sub>3</sub>: two independent constants, order 2. Simplify, then count, in that order every time."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "Form the differential equation of the family <i>y</i> = <i>Cx</i><sup>2</sup>.",
              "a": "<i>x</i> d<i>y</i>/d<i>x</i> = 2<i>y</i>. One constant, so differentiate once: d<i>y</i>/d<i>x</i> = 2<i>Cx</i>, and <i>C</i> = <i>y</i>/<i>x</i><sup>2</sup>, so d<i>y</i>/d<i>x</i> = 2<i>y</i>/<i>x</i>."
            },
            {
              "q": "Form the differential equation of the family <i>y</i> = <i>ax</i><sup>2</sup> + <i>bx</i>, with <i>a</i> and <i>b</i> arbitrary.",
              "a": "<i>x</i><sup>2</sup><i>y</i>″ − 2<i>xy</i>′ + 2<i>y</i> = 0. Two constants, so differentiate twice: <i>y</i>′ = 2<i>ax</i> + <i>b</i> and <i>y</i>″ = 2<i>a</i>. Then <i>a</i> = <i>y</i>″/2 and <i>b</i> = <i>y</i>′ − <i>xy</i>″, and substituting both into the original collapses it."
            },
            {
              "q": "Form the differential equation of <i>y</i> = <i>Ae</i><sup>3x</sup> + <i>Be</i><sup>−3x</sup>.",
              "a": "<i>y</i>″ − 9<i>y</i> = 0. Two independent constants, since <i>e</i><sup>3x</sup> and <i>e</i><sup>−3x</sup> cannot be merged. Differentiating twice gives <i>y</i>″ = 9<i>Ae</i><sup>3x</sup> + 9<i>Be</i><sup>−3x</sup> = 9<i>y</i>."
            },
            {
              "q": "Form the differential equation of the family of all straight lines <i>y</i> = <i>mx</i> + <i>c</i>.",
              "a": "<i>y</i>″ = 0. Two constants, so differentiate twice: <i>y</i>′ = <i>m</i>, then <i>y</i>″ = 0. This is the honest content of “a line has zero curvature”."
            },
            {
              "q": "Form the differential equation of the family of rectangular hyperbolas <i>xy</i> = <i>c</i>.",
              "a": "<i>x</i> d<i>y</i>/d<i>x</i> + <i>y</i> = 0. One constant, so differentiate once, using the product rule on the left: <i>y</i> + <i>xy</i>′ = 0."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "Counting dependent constants as independent. <i>c</i><sub>1</sub> + <i>c</i><sub>2</sub>, <i>c</i><sub>1</sub><i>c</i><sub>2</sub>, and constants inside exponents all collapse into one. Simplify, and only then count.",
            "Under-differentiating. Two constants need two differentiations. Stopping after one strands a constant in the answer and no amount of rearranging will remove it.",
            "Leaving an arbitrary constant in the final equation. If an <i>a</i>, <i>m</i> or <i>A</i> is still visible, the elimination is incomplete and the answer scores nothing however tidy it looks.",
            "Miscounting a geometric family. Translate the English into parameters before writing symbols: circles on the <i>x</i>-axis through the origin is one, all circles is three.",
            "Assuming the formed equation must have degree 1. Eliminating a constant often squares or cubes a derivative, as the <i>x</i><sup>2</sup> = 4<i>b</i>(<i>y</i> + <i>b</i>) example shows. Order comes from the count; degree comes from the algebra."
          ]
        },
        {
          "t": "protip",
          "html": "predict, then verify. before you differentiate anything, count the independent constants and write the expected order in the margin. after the elimination, check the order of what you got. a mismatch instantly tells you which of two things went wrong, a collapse you missed or a differentiation you skipped, and that is far faster than re-checking algebra line by line."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "order = number of independent arbitrary constants", "note": "the same counting rule as topic 01, read backwards" },
            { "f": "differentiate <i>n</i> times, then eliminate all <i>n</i> constants", "note": "n derivative equations plus the original is exactly enough" },
            { "f": "final answer contains only <i>x</i>, <i>y</i> and derivatives", "note": "a surviving constant means the job is unfinished" },
            { "f": "<i>y</i> = <i>mx</i> ⇒ <i>y</i>′ = <i>y</i>/<i>x</i>  ·  <i>xy</i> = <i>c</i> ⇒ <i>xy</i>′ + <i>y</i> = 0", "note": "two one-parameter families worth knowing on sight" },
            { "f": "all circles in the plane ⇒ order 3", "note": "two for the centre, one for the radius" }
          ],
          "aids": [
            "constants in, derivatives out",
            "count the dials, count the order",
            "differentiate once per constant, no fewer",
            "no constant may survive the answer"
          ]
        }
      ]
    },
    {
      "n": "03",
      "title": "Variables Separable, and Homogeneous Equations",
      "chip": "03 SEPARATE + RATIO",
      "kalam": "sort the laundry, or switch to ratios",
      "blocks": [
        {
          "t": "p",
          "html": "There is no single trick that cracks every differential equation, and pretending otherwise is how students lose this chapter. What there is instead is a small toolbox and a habit: <b>diagnose before you compute</b>. Almost every mark lost in the three solving topics is lost by starting the wrong method confidently, not by making an algebra slip halfway through the right one."
        },
        {
          "t": "p",
          "html": "The first tool. Suppose the rate of change splits cleanly into an <i>x</i>-part times a <i>y</i>-part, d<i>y</i>/d<i>x</i> = <i>g</i>(<i>x</i>)<i>h</i>(<i>y</i>). Then you can physically move every <i>y</i> and the d<i>y</i> to one side and every <i>x</i> and the d<i>x</i> to the other, like sorting mixed laundry into two baskets, and integrate each side on its own. That is the whole method. If the variables separate, two ordinary integrals finish the job and no substitution is needed at all."
        },
        {
          "t": "think",
          "html": "think of splitting a shared autorickshaw fare. as long as your expenses and your friend's never get tangled together, each of you just totals your own column. separation works the moment the x-costs and the y-costs stop mixing."
        },
        {
          "t": "def",
          "term": "Variables separable",
          "html": "A first-order equation is <b>separable</b> if it can be written as d<i>y</i>/d<i>x</i> = <i>g</i>(<i>x</i>)<i>h</i>(<i>y</i>), which rearranges to d<i>y</i>/<i>h</i>(<i>y</i>) = <i>g</i>(<i>x</i>) d<i>x</i>. The test is a factorisation test, not a shape test: sin <i>x</i> tan <i>y</i> separates, and <i>x</i> + <i>y</i> does not, because a sum is not a product and no rearrangement makes it one."
        },
        {
          "t": "formula",
          "kicker": "SEPARATE, THEN INTEGRATE EACH SIDE",
          "tag": "one arbitrary constant for the whole equation",
          "main": "d<i>y</i>/d<i>x</i> = <i>g</i>(<i>x</i>)<i>h</i>(<i>y</i>) ⇒ ∫d<i>y</i>/<i>h</i>(<i>y</i>) = ∫<i>g</i>(<i>x</i>) d<i>x</i> + <i>C</i>",
          "legend": [
            "the left integral is in <i>y</i> alone and the right in <i>x</i> alone, and neither knows the other exists",
            "both indefinite integrals carry a constant, but their <b>difference</b> is one new arbitrary constant, so write a single <i>C</i> and write it once",
            "when the answer is going to be logarithmic, writing the constant as ln <i>C</i> rather than <i>C</i> makes the logs combine in one step instead of three"
          ],
          "note": "Dividing by <i>h</i>(<i>y</i>) quietly assumes <i>h</i>(<i>y</i>) ≠ 0. Any constant function with <i>h</i>(<i>y</i>) = 0 is usually a solution too, and you have just thrown it away. Note those values <b>before</b> you divide."
        },
        {
          "t": "proc",
          "title": "Solve a separable equation",
          "steps": [
            "<b>Separate.</b> Rearrange into d<i>y</i>/<i>h</i>(<i>y</i>) = <i>g</i>(<i>x</i>) d<i>x</i>, with every <i>y</i> on the left and every <i>x</i> on the right. Show this line; examiners look for it.",
            "<b>Flag the danger.</b> Write down any value of <i>y</i> that makes <i>h</i>(<i>y</i>) zero. Those constant functions are candidate solutions you are about to lose.",
            "<b>Integrate both sides</b>, adding a single arbitrary constant.",
            "<b>Simplify.</b> Combine logs, exponentiate, and get the answer into a recognisable relation between <i>x</i> and <i>y</i>.",
            "<b>Apply the initial condition</b> if one is given, and solve for the constant. Do this to the <b>general</b> solution, after integrating, never partway through.",
            "<b>Restore any lost solution</b> from step 2 that genuinely satisfies the original equation."
          ]
        },
        {
          "t": "p",
          "html": "Step 2 deserves a paragraph of its own because it is examined directly. Solve d<i>y</i>/d<i>x</i> = <i>y</i><sup>2</sup> by separation and you divide by <i>y</i><sup>2</sup>, which assumes <i>y</i> ≠ 0. But the constant function <i>y</i> = 0 satisfies the original equation perfectly: both sides are zero. It is a genuine solution, it is not in the family you get by integrating, and the division is what destroyed it. Solutions lost this way are called <b>singular</b> solutions, and an MCQ that asks “which solution is lost” is asking exactly this."
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD PATTERN",
          "q": "Solve d<i>y</i>/d<i>x</i> = (4<i>x</i><sup>3</sup> + 2)<i>e</i><sup>−y</sup>.",
          "steps": [
            "The right side is already a product of an <i>x</i>-part and a <i>y</i>-part, so it separates on sight.",
            "Multiply across by <i>e</i><sup>y</sup>: <i>e</i><sup>y</sup> d<i>y</i> = (4<i>x</i><sup>3</sup> + 2) d<i>x</i>. Nothing was divided by, so nothing can be lost here.",
            "Integrate both sides: <i>e</i><sup>y</sup> = <i>x</i><sup>4</sup> + 2<i>x</i> + <i>C</i>.",
            "Check by differentiating: <i>e</i><sup>y</sup> <i>y</i>′ = 4<i>x</i><sup>3</sup> + 2, so <i>y</i>′ = (4<i>x</i><sup>3</sup> + 2)<i>e</i><sup>−y</sup>. It comes back."
          ],
          "ans": "<i>e</i><sup>y</sup> = <i>x</i><sup>4</sup> + 2<i>x</i> + <i>C</i>, that is <i>y</i> = ln(<i>x</i><sup>4</sup> + 2<i>x</i> + <i>C</i>). Show the separation line and carry exactly one <i>C</i>. Both are worth marks."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Solve d<i>y</i>/d<i>x</i> = <i>y</i> cos <i>x</i>, given <i>y</i>(0) = 1.",
          "steps": [
            "Separable: d<i>y</i>/<i>y</i> = cos <i>x</i> d<i>x</i>. Flag <i>y</i> = 0 before dividing; it solves the equation but it cannot pass through (0, 1), so it is not the answer here.",
            "Integrate: ln|<i>y</i>| = sin <i>x</i> + <i>c</i>, so <i>y</i> = <i>A e</i><sup>sin x</sup> with <i>A</i> = <i>e</i><sup>c</sup>.",
            "Apply <i>y</i>(0) = 1: sin 0 = 0, so 1 = <i>A</i> · 1 and <i>A</i> = 1.",
            "Check: differentiating <i>e</i><sup>sin x</sup> gives cos <i>x</i> · <i>e</i><sup>sin x</sup> = <i>y</i> cos <i>x</i>."
          ],
          "ans": "<i>y</i> = <i>e</i><sup>sin x</sup>. Notice how the condition was applied: to the finished general solution, not halfway through the integration."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN 2017 PATTERN",
          "q": "Solve (2 + sin <i>x</i>) d<i>y</i>/d<i>x</i> + (<i>y</i> + 1) cos <i>x</i> = 0 with <i>y</i>(0) = 1, then find <i>y</i>(π/2) and <i>y</i>′(π/2).",
          "steps": [
            "Separate: d<i>y</i>/(<i>y</i> + 1) = −cos <i>x</i> d<i>x</i>/(2 + sin <i>x</i>). Both sides are now the derivative of a logarithm over its own function.",
            "Integrate: ln(<i>y</i> + 1) = −ln(2 + sin <i>x</i>) + <i>c</i>, so (<i>y</i> + 1)(2 + sin <i>x</i>) = <i>C</i>.",
            "Apply <i>y</i>(0) = 1: (2)(2) = 4, so <i>C</i> = 4 and <i>y</i> = 4/(2 + sin <i>x</i>) − 1.",
            "At <i>x</i> = π/2, sin <i>x</i> = 1, so <i>y</i> = 4/3 − 1 = 1/3.",
            "Differentiate: <i>y</i>′ = −4 cos <i>x</i>/(2 + sin <i>x</i>)<sup>2</sup>. At <i>x</i> = π/2 the <b>numerator</b> carries cos(π/2) = 0."
          ],
          "ans": "<i>y</i>(π/2) = 1/3 and <i>y</i>′(π/2) = <b>0</b>. That zero is not a coincidence and it is worth pausing on: <i>y</i> is smallest exactly where 2 + sin <i>x</i> is largest, and π/2 is where sin <i>x</i> peaks, so the curve is flat there. Evaluating the derivative formula while dropping the cos <i>x</i> factor gives −4/9, and it is a very easy −4/9 to write down."
        },
        {
          "t": "p",
          "html": "Now the second tool, for equations that <b>refuse</b> to separate because <i>x</i> and <i>y</i> are knotted together. Look at d<i>y</i>/d<i>x</i> = (<i>x</i><sup>2</sup> + <i>y</i><sup>2</sup>)/2<i>xy</i>. There is no way to factor that into an <i>x</i>-part times a <i>y</i>-part. But look closer: the right side does not care about the <b>sizes</b> of <i>x</i> and <i>y</i>, only about their <b>ratio</b>. Divide top and bottom by <i>x</i><sup>2</sup> and it becomes (1 + <i>v</i><sup>2</sup>)/2<i>v</i>, a pure function of <i>v</i> = <i>y</i>/<i>x</i>."
        },
        {
          "t": "def",
          "term": "Homogeneous differential equation",
          "html": "A function <i>F</i> is <b>homogeneous of degree <i>n</i></b> if <i>F</i>(λ<i>x</i>, λ<i>y</i>) = λ<sup>n</sup><i>F</i>(<i>x</i>, <i>y</i>). The equation d<i>y</i>/d<i>x</i> = <i>F</i>(<i>x</i>, <i>y</i>) is <b>homogeneous</b> when <i>F</i> has degree <b>zero</b>, that is when scaling both variables by the same λ leaves the right side unchanged. Equivalently: the right side can be written as φ(<i>y</i>/<i>x</i>), a function of the ratio alone. A fast proxy for <i>M</i> d<i>x</i> + <i>N</i> d<i>y</i> = 0: it is homogeneous exactly when <i>M</i> and <i>N</i> are homogeneous of the <b>same</b> degree."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · THE SLOPE ONLY SEES THE RATIO",
          "chips": ["one ray", "three rays", "the solutions"],
          "captions": [
            "The equation dy/dx equals y squared minus x squared over 2xy. Along the ray y equals x the ratio is always 1, so the slope is always the same number, here 0. Three points at three different distances from the origin, three identical slopes.",
            "Change the ratio and the slope changes with it. On y equals 2x the slope is 3 over 4 everywhere; on y equals x over 2 it is minus 3 over 4 everywhere. Degree zero means exactly this: the slope is a function of the ray, not of the point.",
            "The solutions of that equation are x squared plus y squared equals Cx, circles through the origin with centres on the x-axis. The dark one is the member through the point (1, 1), which is C equals 2. This is the same family Topic 02 started from, arrived at from the other end."
          ],
          "frames": [
            {
              "x": [-2.1, 2.1],
              "y": [-1.5, 1.5],
              "curves": [{ "c": "line", "m": 1, "k": 0, "dash": true, "soft": true }],
              "points": [
                { "x": 0.45, "y": 0.45 },
                { "x": 0.9, "y": 0.9 },
                { "x": 1.35, "y": 1.35 }
              ],
              "segments": [
                { "from": [0.2, 0.45], "to": [0.7, 0.45] },
                { "from": [0.65, 0.9], "to": [1.15, 0.9] },
                { "from": [1.1, 1.35], "to": [1.6, 1.35] }
              ],
              "labels": [{ "x": -1.15, "y": 1.15, "text": "v = 1, slope 0" }]
            },
            {
              "x": [-2.1, 2.1],
              "y": [-1.5, 1.5],
              "curves": [
                { "c": "line", "m": 2, "k": 0, "dash": true, "soft": true },
                { "c": "line", "m": 0.5, "k": 0, "dash": true, "soft": true },
                { "c": "line", "m": 1, "k": 0, "dash": true, "soft": true }
              ],
              "points": [
                { "x": 0.6, "y": 1.2 },
                { "x": 1.6, "y": 0.8 }
              ],
              "segments": [
                { "from": [0.3, 0.975], "to": [0.9, 1.425] },
                { "from": [1.3, 1.025], "to": [1.9, 0.575] }
              ],
              "labels": [
                { "x": -1.2, "y": 1.15, "text": "v = 2, slope 3/4" },
                { "x": -1.2, "y": 0.45, "text": "v = 1/2, slope −3/4" }
              ]
            },
            {
              "x": [-0.6, 3.6],
              "y": [-1.5, 1.5],
              "curves": [
                { "c": "circle", "cx": 1, "cy": 0, "r": 1 },
                { "c": "circle", "cx": 0.5, "cy": 0, "r": 0.5, "soft": true },
                { "c": "circle", "cx": 1.5, "cy": 0, "r": 1.5, "soft": true }
              ],
              "points": [{ "x": 1, "y": 1, "label": "(1, 1)" }],
              "labels": [{ "x": 2.8, "y": -1.15, "text": "x² + y² = Cx" }]
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "THE SUBSTITUTION THAT UNTANGLES IT",
          "tag": "y = vx turns homogeneous into separable, always",
          "main": "<i>y</i> = <i>vx</i>, d<i>y</i>/d<i>x</i> = <i>v</i> + <i>x</i> d<i>v</i>/d<i>x</i> ⇒ d<i>v</i>/(φ(<i>v</i>) − <i>v</i>) = d<i>x</i>/<i>x</i>",
          "legend": [
            "the substitution forces the unknown to <b>wear</b> the ratio explicitly, which is why the tangled <i>x</i> and <i>y</i> dependence turns into a clean <i>v</i> and <i>x</i> one",
            "the product rule on <i>vx</i> is where the extra <i>x</i> d<i>v</i>/d<i>x</i> term comes from, and forgetting it is the single most common error in the method",
            "what is left is <b>separable</b>, so the rest is Procedure A: two integrals, one constant"
          ],
          "note": "When the equation naturally isolates d<i>x</i>/d<i>y</i> as a function of <i>x</i>/<i>y</i>, that is, when <i>x</i> is the heavier variable, use the mirror substitution <i>x</i> = <i>vy</i> instead. Same logic, much less algebra."
        },
        {
          "t": "proc",
          "title": "Solve a homogeneous equation",
          "steps": [
            "<b>Confirm the type.</b> Scale test: replace <i>x</i> by λ<i>x</i> and <i>y</i> by λ<i>y</i> on the right. If every λ cancels, it is homogeneous. If a stray constant breaks it, do <b>not</b> substitute <i>y</i> = <i>vx</i>.",
            "<b>Rewrite the right side as a function of <i>v</i> = <i>y</i>/<i>x</i></b>, usually by dividing top and bottom by the highest power of <i>x</i> present.",
            "<b>Substitute <i>y</i> = <i>vx</i> and d<i>y</i>/d<i>x</i> = <i>v</i> + <i>x</i> d<i>v</i>/d<i>x</i></b>. The <i>v</i> on the left will cancel against part of the right side.",
            "<b>Separate and solve</b> the resulting equation in <i>v</i> and <i>x</i>. Before splitting anything into partial fractions, scan for a numerator proportional to the derivative of the denominator: that turns the integral into a single logarithm.",
            "<b>Back-substitute <i>v</i> = <i>y</i>/<i>x</i>.</b> An answer left in <i>v</i> scores zero, however correct it is.",
            "<b>Tidy.</b> Multiply through by whatever power of <i>x</i> clears the fractions, and absorb log constants into a single <i>C</i>."
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · A HOMOGENEOUS EQUATION END TO END, TAP A LINE",
          "steps": [
            {
              "eq": "solve (<i>x</i><sup>2</sup> − <i>y</i><sup>2</sup>) d<i>x</i> + 2<i>xy</i> d<i>y</i> = 0 through (1, 1)",
              "why": "M and N are both homogeneous of degree 2, the same degree, so the equation is homogeneous. This exact question was set in April 2018 and again in January 2019: examiners recycle shapes, so learning the shape pays better than memorising the answer."
            },
            {
              "eq": "d<i>y</i>/d<i>x</i> = (<i>y</i><sup>2</sup> − <i>x</i><sup>2</sup>)/2<i>xy</i>",
              "why": "Rearranged into the standard form. Dividing top and bottom by x squared would give (v squared minus 1) over 2v, confirming the type without any substitution yet."
            },
            {
              "eq": "<i>v</i> + <i>x</i> d<i>v</i>/d<i>x</i> = (<i>v</i><sup>2</sup> − 1)/2<i>v</i>",
              "why": "Put y = vx. The left side needs the product rule, which is where the x dv/dx comes from."
            },
            {
              "eq": "<i>x</i> d<i>v</i>/d<i>x</i> = (<i>v</i><sup>2</sup> − 1)/2<i>v</i> − <i>v</i> = −(1 + <i>v</i><sup>2</sup>)/2<i>v</i>",
              "why": "Subtract v from both sides and put the right over a common denominator: v squared minus 1 minus 2v squared is minus 1 minus v squared. The minus sign here is the one to guard."
            },
            {
              "eq": "2<i>v</i> d<i>v</i>/(1 + <i>v</i><sup>2</sup>) = −d<i>x</i>/<i>x</i>",
              "why": "Separated. The left numerator 2v is exactly the derivative of the denominator 1 + v squared, so this is an instant logarithm and there is no reason to reach for partial fractions."
            },
            {
              "eq": "ln(1 + <i>v</i><sup>2</sup>) = −ln <i>x</i> + ln <i>C</i> ⇒ <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> = <i>Cx</i>",
              "why": "Exponentiate: 1 + v squared equals C over x. Back-substitute v = y/x and multiply through by x squared."
            },
            {
              "eq": "through (1, 1): <i>C</i> = 2, so (<i>x</i> − 1)<sup>2</sup> + <i>y</i><sup>2</sup> = 1",
              "why": "1 + 1 = C. Completing the square shows it is a circle of radius 1 centred at (1, 0), which is exactly the family Topic 02 formed this equation from. Solving and forming really are inverse operations."
            }
          ]
        },
        {
          "t": "ex",
          "tag": "CUET / JEE MAIN PATTERN",
          "q": "Solve d<i>y</i>/d<i>x</i> = (<i>x</i> − <i>y</i>)/(<i>x</i> + <i>y</i>).",
          "steps": [
            "Numerator and denominator are both homogeneous of degree 1, so the ratio has degree 0. Put <i>y</i> = <i>vx</i>.",
            "<i>v</i> + <i>x</i> d<i>v</i>/d<i>x</i> = (1 − <i>v</i>)/(1 + <i>v</i>), so <i>x</i> d<i>v</i>/d<i>x</i> = (1 − 2<i>v</i> − <i>v</i><sup>2</sup>)/(1 + <i>v</i>).",
            "<b>The speed move.</b> The derivative of 1 − 2<i>v</i> − <i>v</i><sup>2</sup> is −2(1 + <i>v</i>), which is the numerator up to a constant. So the left integral is a single logarithm and partial fractions would waste two minutes.",
            "−(1/2) ln|1 − 2<i>v</i> − <i>v</i><sup>2</sup>| = ln|<i>x</i>| + <i>c</i>, so 1 − 2<i>v</i> − <i>v</i><sup>2</sup> = <i>K</i>/<i>x</i><sup>2</sup>.",
            "Back-substitute <i>v</i> = <i>y</i>/<i>x</i> and multiply through by <i>x</i><sup>2</sup>."
          ],
          "ans": "<i>x</i><sup>2</sup> − 2<i>xy</i> − <i>y</i><sup>2</sup> = <i>C</i>. Verify it in one line: differentiating implicitly gives 2<i>x</i> − 2<i>y</i> − 2(<i>x</i> + <i>y</i>)<i>y</i>′ = 0, which rearranges to the original."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "A curve passes through (1, π/6) and its slope at every point satisfies d<i>y</i>/d<i>x</i> = <i>y</i>/<i>x</i> + tan(<i>y</i>/<i>x</i>). Find the curve.",
          "steps": [
            "The right side is written in <i>y</i>/<i>x</i> already, so the diagnosis is free: homogeneous.",
            "Put <i>y</i> = <i>vx</i>: <i>v</i> + <i>x</i> d<i>v</i>/d<i>x</i> = <i>v</i> + tan <i>v</i>, so <i>x</i> d<i>v</i>/d<i>x</i> = tan <i>v</i>.",
            "Separate: cot <i>v</i> d<i>v</i> = d<i>x</i>/<i>x</i>. The left integral is ln|sin <i>v</i>|, quoted from the standard table.",
            "ln|sin <i>v</i>| = ln|<i>x</i>| + ln <i>C</i>, so sin <i>v</i> = <i>Cx</i>, and back-substituting gives sin(<i>y</i>/<i>x</i>) = <i>Cx</i>.",
            "Apply (1, π/6): sin(π/6) = 1/2 = <i>C</i>."
          ],
          "ans": "sin(<i>y</i>/<i>x</i>) = <i>x</i>/2. Three separate skills in one question: spot the homogeneity, recall that the antiderivative of cot is ln|sin|, and pin the constant with the point."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "Solve d<i>y</i>/d<i>x</i> = (<i>x</i> − <i>y</i> + 3)/(<i>x</i> + <i>y</i> − 1).",
          "steps": [
            "The lone constants +3 and −1 break the scale test, so this is <b>not</b> homogeneous and <i>y</i> = <i>vx</i> will produce nonsense. Do not force it.",
            "Shift the origin to the point where both lines vanish. Solve <i>x</i> − <i>y</i> + 3 = 0 and <i>x</i> + <i>y</i> − 1 = 0: adding gives 2<i>x</i> + 2 = 0, so <i>x</i> = −1 and then <i>y</i> = 2.",
            "Put <i>X</i> = <i>x</i> + 1 and <i>Y</i> = <i>y</i> − 2, so d<i>X</i> = d<i>x</i> and d<i>Y</i> = d<i>y</i>. The numerator becomes <i>X</i> − <i>Y</i> and the denominator <i>X</i> + <i>Y</i>.",
            "That is exactly the homogeneous equation solved two examples ago, in <i>X</i> and <i>Y</i>: <i>X</i><sup>2</sup> − 2<i>XY</i> − <i>Y</i><sup>2</sup> = <i>C</i>.",
            "Restore <i>X</i> and <i>Y</i>."
          ],
          "ans": "(<i>x</i> + 1)<sup>2</sup> − 2(<i>x</i> + 1)(<i>y</i> − 2) − (<i>y</i> − 2)<sup>2</sup> = <i>C</i>. The only new skill was the shift; the homogeneous core was already solved."
        },
        {
          "t": "p",
          "html": "That shift works only when the two lines actually <b>intersect</b>. If their coefficients are proportional the lines are parallel, there is no intersection point to shift to, and the fix is different: the two linear expressions differ only by a constant, so substitute the common combination itself, <i>t</i> = <i>ax</i> + <i>by</i>, and the equation becomes separable in <i>t</i> and <i>x</i>. That substitution is the whole of one of Topic 05's reducible types, and it also handles d<i>y</i>/d<i>x</i> = <i>f</i>(<i>x</i> ± <i>y</i>) in general. Origin shifting is a JEE extension beyond the strict NCERT core; the boards will not require it."
        },
        {
          "t": "mcq",
          "q": "Which of these is a homogeneous differential equation?",
          "opts": [
            { "label": "d<i>y</i>/d<i>x</i> = (<i>x</i> + <i>y</i> + 1)/(<i>x</i> − <i>y</i>)", "nudge": "The stray +1 destroys the scale invariance: replacing <i>x</i>, <i>y</i> by λ<i>x</i>, λ<i>y</i> does not leave it unchanged. This is the <b>reducible</b> type, fixed by shifting the origin, not by <i>y</i> = <i>vx</i>." },
            { "label": "d<i>y</i>/d<i>x</i> = (<i>x</i><sup>2</sup> + <i>y</i><sup>2</sup>)/<i>xy</i>", "nudge": null },
            { "label": "d<i>y</i>/d<i>x</i> = <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup>", "nudge": "The classic confusion. <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> is a homogeneous <b>function</b> of degree 2, but a homogeneous <b>equation</b> needs its right side to have degree <b>0</b>. Scaling multiplies this right side by λ<sup>2</sup>." },
            { "label": "d<i>y</i>/d<i>x</i> = <i>xy</i> + 1", "nudge": "Degree mismatch inside a single expression: <i>xy</i> scales by λ<sup>2</sup> and the 1 does not scale at all, so no λ cancels and the right side is not a function of <i>y</i>/<i>x</i>." }
          ],
          "correct": 1,
          "solution": "Numerator and denominator are both homogeneous of degree 2, so their ratio has degree 0. Dividing both by <i>x</i><sup>2</sup> gives (1 + <i>v</i><sup>2</sup>)/<i>v</i>, a function of <i>v</i> = <i>y</i>/<i>x</i> alone. Never conflate a homogeneous function with a homogeneous equation."
        },
        {
          "t": "mcq",
          "q": "While solving d<i>y</i>/d<i>x</i> = <i>y</i><sup>2</sup> by separation, one divides by <i>y</i><sup>2</sup>. Which solution is lost?",
          "opts": [
            { "label": "<i>y</i> = 0", "nudge": null },
            { "label": "<i>y</i> = 1", "nudge": "Check it against the equation: the left side is 0 and the right is 1, so <i>y</i> = 1 is not a solution at all. Nothing about it can be lost." },
            { "label": "<i>y</i> = <i>x</i>", "nudge": "Substituting gives 1 = <i>x</i><sup>2</sup>, which holds at two isolated points rather than identically. A solution has to satisfy the equation for every <i>x</i>." },
            { "label": "nothing is lost", "nudge": "This is the complacent answer the question is built to catch. Every division by an expression in <i>y</i> assumes that expression is nonzero, and that assumption has consequences." }
          ],
          "correct": 0,
          "solution": "Dividing by <i>y</i><sup>2</sup> tacitly assumes <i>y</i> ≠ 0. But the constant function <i>y</i> = 0 satisfies the original equation, 0 = 0, and it is nowhere in the family −1/<i>y</i> = <i>x</i> + <i>C</i> that integration produces. It is a genuine singular solution, thrown away by the division."
        },
        {
          "t": "mcq",
          "q": "Solving d<i>y</i>/d<i>x</i> = (<i>x</i> + <i>y</i>)/<i>x</i> by the substitution <i>y</i> = <i>vx</i> gives:",
          "opts": [
            { "label": "<i>y</i> = <i>x</i> ln|<i>x</i>| + <i>Cx</i>", "nudge": null },
            { "label": "<i>y</i> = <i>x</i> + <i>Cx</i>", "nudge": "This integrates d<i>v</i> = d<i>x</i>/<i>x</i> as though it were d<i>v</i> = d<i>x</i>, giving <i>v</i> = <i>x</i> + <i>C</i> instead of <i>v</i> = ln|<i>x</i>| + <i>C</i>." },
            { "label": "<i>y</i> = ln|<i>x</i>| + <i>C</i>", "nudge": "The answer has been left in <i>v</i>. Solving gives <i>v</i> = ln|<i>x</i>| + <i>C</i>, and <i>v</i> is <i>y</i>/<i>x</i>, so the whole line still has to be multiplied by <i>x</i>." },
            { "label": "<i>y</i> = <i>Cx</i>", "nudge": "That solves d<i>y</i>/d<i>x</i> = <i>y</i>/<i>x</i>, which is this equation with the +<i>x</i> in the numerator dropped. That extra term is what produces the logarithm." }
          ],
          "correct": 0,
          "solution": "Write the right side as 1 + <i>y</i>/<i>x</i>. With <i>y</i> = <i>vx</i>: <i>v</i> + <i>x</i> d<i>v</i>/d<i>x</i> = 1 + <i>v</i>, so <i>x</i> d<i>v</i>/d<i>x</i> = 1 and d<i>v</i> = d<i>x</i>/<i>x</i>. Then <i>v</i> = ln|<i>x</i>| + <i>C</i>, and back-substituting <i>v</i> = <i>y</i>/<i>x</i> gives <i>y</i> = <i>x</i> ln|<i>x</i>| + <i>Cx</i>."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "Solve d<i>y</i>/d<i>x</i> = <i>x</i><sup>2</sup><i>y</i>.",
              "a": "<i>y</i> = <i>A</i> exp(<i>x</i><sup>3</sup>/3). Separable: d<i>y</i>/<i>y</i> = <i>x</i><sup>2</sup> d<i>x</i>, so ln|<i>y</i>| = <i>x</i><sup>3</sup>/3 + <i>c</i>. Flag <i>y</i> = 0, which is also a solution and is recovered by allowing <i>A</i> = 0."
            },
            {
              "q": "Solve sec<sup>2</sup><i>x</i> tan <i>y</i> d<i>x</i> + sec<sup>2</sup><i>y</i> tan <i>x</i> d<i>y</i> = 0.",
              "a": "tan <i>x</i> tan <i>y</i> = <i>C</i>. Divide through by tan <i>x</i> tan <i>y</i> and each side becomes a derivative over its own function: ln|tan <i>x</i>| + ln|tan <i>y</i>| = <i>c</i>."
            },
            {
              "q": "Solve the homogeneous equation d<i>y</i>/d<i>x</i> = (<i>x</i><sup>2</sup> + <i>y</i><sup>2</sup>)/<i>xy</i>.",
              "a": "<i>y</i><sup>2</sup> = 2<i>x</i><sup>2</sup>(ln|<i>x</i>| + <i>C</i>). With <i>y</i> = <i>vx</i>: <i>x</i> d<i>v</i>/d<i>x</i> = (1 + <i>v</i><sup>2</sup>)/<i>v</i> − <i>v</i> = 1/<i>v</i>, so <i>v</i> d<i>v</i> = d<i>x</i>/<i>x</i> and <i>v</i><sup>2</sup>/2 = ln|<i>x</i>| + <i>C</i>."
            },
            {
              "q": "Solve (<i>x</i><sup>3</sup> + <i>y</i><sup>3</sup>) d<i>x</i> = <i>xy</i><sup>2</sup> d<i>y</i>.",
              "a": "<i>y</i><sup>3</sup> = 3<i>x</i><sup>3</sup>(ln|<i>x</i>| + <i>C</i>). Both sides are degree 3, so it is homogeneous. With <i>y</i> = <i>vx</i>: <i>x</i> d<i>v</i>/d<i>x</i> = (1 + <i>v</i><sup>3</sup>)/<i>v</i><sup>2</sup> − <i>v</i> = 1/<i>v</i><sup>2</sup>, so <i>v</i><sup>3</sup>/3 = ln|<i>x</i>| + <i>C</i>."
            },
            {
              "q": "Solve d<i>y</i>/d<i>x</i> = (<i>x</i> − <i>y</i>)<sup>2</sup> with <i>y</i>(1) = 1, then find <i>y</i>(2).",
              "a": "ln|(1 + <i>x</i> − <i>y</i>)/(1 − <i>x</i> + <i>y</i>)| = 2(<i>x</i> − 1), and <i>y</i>(2) = (<i>e</i><sup>2</sup> + 3)/(<i>e</i><sup>2</sup> + 1). Put <i>t</i> = <i>x</i> − <i>y</i>, so d<i>t</i>/d<i>x</i> = 1 − <i>t</i><sup>2</sup>, which separates. The condition gives <i>t</i> = 0 at <i>x</i> = 1, so the constant is −1, not 0."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "Losing the constant solution. Dividing by <i>h</i>(<i>y</i>) can erase a valid solution <i>h</i>(<i>y</i>) = 0. Note it before dividing and check it at the end.",
            "Forgetting the product rule in the substitution. d<i>y</i>/d<i>x</i> is <i>v</i> + <i>x</i> d<i>v</i>/d<i>x</i>, not d<i>v</i>/d<i>x</i>. Drop the <i>v</i> and nothing afterwards can be rescued.",
            "Forcing <i>y</i> = <i>vx</i> onto a non-homogeneous equation. A stray constant anywhere in the numerator or denominator means shift the origin instead.",
            "Leaving the answer in <i>v</i>. It came in as <i>y</i>, it must leave as <i>y</i>. An answer containing <i>v</i> scores nothing.",
            "Carrying two arbitrary constants, one per integral. Their difference is a single constant. Write one <i>C</i>, and write log-constants as ln <i>C</i> so the logs combine."
          ]
        },
        {
          "t": "protip",
          "html": "diagnose before you touch algebra. do the variables separate as they stand? if yes, integrate two columns and stop. if not, is the right side a pure function of y over x? then substitute y = vx, or x = vy when x is the heavier variable. and inside any separation integral, scan for a numerator proportional to the derivative of the denominator before reaching for partial fractions. that one scan is worth two minutes in every paper."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "d<i>y</i>/d<i>x</i> = <i>g</i>(<i>x</i>)<i>h</i>(<i>y</i>) ⇒ ∫d<i>y</i>/<i>h</i>(<i>y</i>) = ∫<i>g</i>(<i>x</i>) d<i>x</i> + <i>C</i>", "note": "and watch for the lost solutions where h is zero" },
            { "f": "homogeneous ⟺ right side is a function of <i>y</i>/<i>x</i> alone", "note": "equivalently M and N have the same degree" },
            { "f": "<i>y</i> = <i>vx</i>, d<i>y</i>/d<i>x</i> = <i>v</i> + <i>x</i> d<i>v</i>/d<i>x</i>", "note": "the product rule term is not optional" },
            { "f": "d<i>v</i>/(φ(<i>v</i>) − <i>v</i>) = d<i>x</i>/<i>x</i>, then back-substitute", "note": "homogeneous always collapses to separable" },
            { "f": "a stray constant ⇒ shift the origin to the intersection", "note": "and if the lines are parallel, substitute the combination itself" }
          ],
          "aids": [
            "separate the laundry, integrate each basket",
            "if it only sees the ratio y over x, let y be vx",
            "divide and you might lose a root",
            "came in as y, must leave as y"
          ]
        }
      ]
    },
    {
      "n": "04",
      "title": "Linear Equations and the Integrating Factor",
      "chip": "04 INTEGRATING FACTOR",
      "kalam": "one multiplier folds the whole left side flat",
      "blocks": [
        {
          "t": "p",
          "html": "A large family of equations resists both tools so far. In them <i>y</i> and d<i>y</i>/d<i>x</i> both appear, each only to the <b>first power</b>, with no products like <i>y</i> · d<i>y</i>/d<i>x</i> and no powers like <i>y</i><sup>2</sup>. They do not separate, and the presence of a bare <i>y</i> added to a function of <i>x</i> usually kills the scale test. These are <b>linear</b> equations, and they have a method of their own that is worth more marks than anything else in the chapter."
        },
        {
          "t": "p",
          "html": "The idea in plain words. The left side of d<i>y</i>/d<i>x</i> + <i>Py</i> = <i>Q</i> is <b>almost</b> the derivative of a product, but not quite. The method finds one magic multiplier, called the <b>integrating factor</b>, such that after you multiply the whole equation by it the left side becomes <b>exactly</b> the derivative of (IF × <i>y</i>). Once the left side is a single clean derivative, you integrate both sides and you are done. And the multiplier is never guessed: it is forced, and there is a one-line derivation that shows why."
        },
        {
          "t": "think",
          "html": "folding a fitted bedsheet, the elastic corners fight you and nothing lies flat. but there is one specific way to tuck the corners after which the whole sheet folds into a neat rectangle in a single motion. the integrating factor is that tuck. it turns a messy left-hand side into one foldable derivative."
        },
        {
          "t": "def",
          "term": "Linear differential equation",
          "html": "A first-order equation is <b>linear in <i>y</i></b> if it can be written d<i>y</i>/d<i>x</i> + <i>Py</i> = <i>Q</i>, where the coefficient of d<i>y</i>/d<i>x</i> is exactly 1 and <i>P</i> and <i>Q</i> are functions of <b><i>x</i> only</b>. Linearity is a statement about <i>y</i> and its derivative, not about <i>x</i>: <i>Q</i> may be as ugly a function of <i>x</i> as it likes. A genuine <i>y</i> inside <i>P</i> or <i>Q</i>, a <i>y</i><sup>2</sup>, or a squared derivative all break it."
        },
        {
          "t": "formula",
          "kicker": "THE STANDARD FORM, THE FACTOR, THE SOLUTION",
          "tag": "three lines, and the middle one is forced",
          "main": "d<i>y</i>/d<i>x</i> + <i>Py</i> = <i>Q</i>  ·  IF = exp(∫<i>P</i> d<i>x</i>)  ·  <i>y</i> · IF = ∫<i>Q</i> · IF d<i>x</i> + <i>C</i>",
          "legend": [
            "<b>standard form first.</b> If anything other than 1 sits in front of d<i>y</i>/d<i>x</i>, divide it out before you so much as look at <i>P</i>",
            "<b>watch the sign inside the integral.</b> ∫(2/<i>x</i>) d<i>x</i> = 2 ln <i>x</i> gives IF = <i>x</i><sup>2</sup>, while ∫(−2/<i>x</i>) d<i>x</i> = −2 ln <i>x</i> gives IF = <i>x</i><sup>−2</sup>. One sign slip inverts the whole factor",
            "<b>the integrating factor rides into the integral.</b> The right side is ∫<i>Q</i> · IF d<i>x</i>, never ∫<i>Q</i> d<i>x</i>",
            "no arbitrary constant is needed inside ∫<i>P</i> d<i>x</i>: a different constant there multiplies the IF by a number, and that number cancels straight out of the final equation"
          ],
          "note": "After multiplying by the IF, the left side <b>is</b> the derivative of <i>y</i> · IF. That is guaranteed by the construction, so never waste time expanding or verifying it. Jump straight to integrating the right side."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY THE FACTOR MUST BE THAT ONE, TAP A LINE",
          "steps": [
            {
              "eq": "multiply d<i>y</i>/d<i>x</i> + <i>Py</i> = <i>Q</i> by an unknown μ(<i>x</i>): μ d<i>y</i>/d<i>x</i> + μ<i>Py</i> = μ<i>Q</i>",
              "why": "Do not assume anything about mu yet. The point of the derivation is that its identity is forced by one requirement, not chosen. CBSE can ask for this derivation directly."
            },
            {
              "eq": "we want the left side to be (d/d<i>x</i>)(μ<i>y</i>) = μ d<i>y</i>/d<i>x</i> + (dμ/d<i>x</i>)<i>y</i>",
              "why": "That is just the product rule written out. Comparing it with the line above, the first terms already agree, so everything hinges on the second."
            },
            {
              "eq": "so we need dμ/d<i>x</i> = μ<i>P</i>",
              "why": "Match the coefficient of y in the two expressions. This is the entire requirement, and it is a condition on mu alone."
            },
            {
              "eq": "dμ/μ = <i>P</i> d<i>x</i> ⇒ ln μ = ∫<i>P</i> d<i>x</i> ⇒ μ = exp(∫<i>P</i> d<i>x</i>)",
              "why": "That condition is itself a separable equation, which is why this topic comes after Topic 03. Separate, integrate, exponentiate. There is no choice at any step, so the factor is forced rather than invented."
            },
            {
              "eq": "(d/d<i>x</i>)(<i>y</i> · IF) = <i>Q</i> · IF",
              "why": "With that mu, the left side of the multiplied equation collapses into a single derivative, by construction."
            },
            {
              "eq": "<i>y</i> · IF = ∫<i>Q</i> · IF d<i>x</i> + <i>C</i>",
              "why": "Integrate both sides once. One arbitrary constant for the whole equation, matching the order 1. Everything after this line is an ordinary integral, which is why this chapter never re-teaches integration."
            }
          ]
        },
        {
          "t": "proc",
          "title": "Solve a linear equation",
          "steps": [
            "<b>Reduce to standard form.</b> Make the coefficient of d<i>y</i>/d<i>x</i> equal to 1 by dividing the whole equation through. Skipping this is the number one error in the topic.",
            "<b>Identify <i>P</i> and <i>Q</i></b>, and confirm both are functions of <i>x</i> alone.",
            "<b>Compute IF = exp(∫<i>P</i> d<i>x</i>)</b>, watching the sign of the integral. A logarithm in the exponent simplifies to a power: exp(<i>k</i> ln <i>x</i>) = <i>x</i><sup>k</sup>.",
            "<b>Write <i>y</i> · IF = ∫<i>Q</i> · IF d<i>x</i> + <i>C</i></b> and do the integral. Simplify <i>Q</i> · IF <b>before</b> integrating: it very often collapses to something trivial.",
            "<b>Apply any initial condition</b> to find <i>C</i>, then make <i>y</i> the subject if the question asks for <i>y</i>.",
            "<b>Check by substitution.</b> Differentiate your answer, put it into the original equation, and see the right side come back."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD PATTERN",
          "q": "Solve d<i>y</i>/d<i>x</i> + (2/<i>x</i>)<i>y</i> = <i>x</i><sup>3</sup>.",
          "steps": [
            "Already in standard form, with <i>P</i> = 2/<i>x</i> and <i>Q</i> = <i>x</i><sup>3</sup>.",
            "∫<i>P</i> d<i>x</i> = 2 ln <i>x</i>, so IF = exp(2 ln <i>x</i>) = <i>x</i><sup>2</sup>.",
            "<i>y</i> · <i>x</i><sup>2</sup> = ∫<i>x</i><sup>3</sup> · <i>x</i><sup>2</sup> d<i>x</i> + <i>C</i> = ∫<i>x</i><sup>5</sup> d<i>x</i> + <i>C</i> = <i>x</i><sup>6</sup>/6 + <i>C</i>.",
            "Divide by <i>x</i><sup>2</sup>."
          ],
          "ans": "<i>y</i> = <i>x</i><sup>4</sup>/6 + <i>C</i>/<i>x</i><sup>2</sup>. Show the integrating factor explicitly and show that you integrated <i>x</i><sup>5</sup>, not <i>x</i><sup>3</sup>. Both steps carry marks."
        },
        {
          "t": "ex",
          "tag": "CUET / JEE MAIN PATTERN",
          "q": "Solve <i>x</i> d<i>y</i>/d<i>x</i> − 3<i>y</i> = <i>x</i><sup>5</sup>.",
          "steps": [
            "The trap is visible from across the room: an <i>x</i> sits in front of d<i>y</i>/d<i>x</i>, so you may <b>not</b> read <i>P</i> = −3.",
            "Divide through by <i>x</i> first: d<i>y</i>/d<i>x</i> − (3/<i>x</i>)<i>y</i> = <i>x</i><sup>4</sup>, so <i>P</i> = −3/<i>x</i> and <i>Q</i> = <i>x</i><sup>4</sup>.",
            "∫<i>P</i> d<i>x</i> = −3 ln <i>x</i>, so IF = <i>x</i><sup>−3</sup>. Mind that minus.",
            "<i>y</i> · <i>x</i><sup>−3</sup> = ∫<i>x</i><sup>4</sup> · <i>x</i><sup>−3</sup> d<i>x</i> + <i>C</i> = ∫<i>x</i> d<i>x</i> + <i>C</i> = <i>x</i><sup>2</sup>/2 + <i>C</i>."
          ],
          "ans": "<i>y</i> = <i>x</i><sup>5</sup>/2 + <i>Cx</i><sup>3</sup>. <b>Speed rule:</b> the coefficient of d<i>y</i>/d<i>x</i> must be 1 before you touch <i>P</i>. Skip the division and you get IF = <i>e</i><sup>−3x</sup> and the whole problem collapses."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "A curve satisfies d<i>y</i>/d<i>x</i> + <i>y</i> cot <i>x</i> = 4<i>x</i> csc <i>x</i> and passes through (π/2, 0). Find <i>y</i>.",
          "steps": [
            "Standard form already, with <i>P</i> = cot <i>x</i> and <i>Q</i> = 4<i>x</i> csc <i>x</i>.",
            "∫cot <i>x</i> d<i>x</i> = ln sin <i>x</i>, so IF = sin <i>x</i>.",
            "<b>Simplify <i>Q</i> · IF before integrating.</b> 4<i>x</i> csc <i>x</i> · sin <i>x</i> = 4<i>x</i>, because csc and sin are reciprocals. A horrible integral has just vanished.",
            "<i>y</i> sin <i>x</i> = ∫4<i>x</i> d<i>x</i> + <i>C</i> = 2<i>x</i><sup>2</sup> + <i>C</i>.",
            "At (π/2, 0): 0 = 2(π/2)<sup>2</sup> + <i>C</i>, so <i>C</i> = −π<sup>2</sup>/2."
          ],
          "ans": "<i>y</i> = (4<i>x</i><sup>2</sup> − π<sup>2</sup>)/(2 sin <i>x</i>). Three skills in one question: build the factor, spot the collapse, pin the constant. The collapse is the one that separates a two-minute solve from a ten-minute one."
        },
        {
          "t": "p",
          "html": "Now the disguise that JEE loves. Linearity is a property of <b><i>y</i></b>, and there is nothing sacred about which variable is which. If <i>y</i> is tangled up nonlinearly but <i>x</i> appears only to the first power, <b>flip your viewpoint</b>: treat <i>x</i> as the dependent variable and <i>y</i> as the independent one, write d<i>x</i>/d<i>y</i>, and run exactly the same five steps with the roles swapped. Many questions that look hard are ordinary linear equations lying on their side."
        },
        {
          "t": "formula",
          "kicker": "THE MIRROR CASE, LINEAR IN x",
          "tag": "same method, roles of x and y swapped",
          "main": "d<i>x</i>/d<i>y</i> + <i>P</i><sub>1</sub><i>x</i> = <i>Q</i><sub>1</sub>  ·  IF = exp(∫<i>P</i><sub>1</sub> d<i>y</i>)  ·  <i>x</i> · IF = ∫<i>Q</i><sub>1</sub> · IF d<i>y</i> + <i>C</i>",
          "legend": [
            "<i>P</i><sub>1</sub> and <i>Q</i><sub>1</sub> are functions of <b><i>y</i></b> alone, and every integral is now with respect to <i>y</i>",
            "the flip test: try standard form in <i>y</i>, and if <i>y</i> refuses to come out to the first power, invert d<i>y</i>/d<i>x</i> and try again in <i>x</i>",
            "a first-degree <i>x</i> sitting next to a squared or exponential <i>y</i> is the signature, and it is deliberately planted"
          ],
          "note": "<i>y</i> d<i>y</i>/d<i>x</i> + <i>y</i> = <i>x</i> is nonlinear as written, because of the product <i>y</i> d<i>y</i>/d<i>x</i>. It becomes perfectly linear after flipping. “Not linear” always means “not linear in the variable I happened to try first”."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "Solve d<i>y</i>/d<i>x</i> = <i>y</i>/(<i>x</i> + <i>y</i><sup>2</sup>).",
          "steps": [
            "In <i>y</i> this is hopeless: there is a <i>y</i><sup>2</sup> in the denominator, so it is not linear in <i>y</i> and no dividing will fix that.",
            "Flip: d<i>x</i>/d<i>y</i> = (<i>x</i> + <i>y</i><sup>2</sup>)/<i>y</i> = <i>x</i>/<i>y</i> + <i>y</i>, so d<i>x</i>/d<i>y</i> − (1/<i>y</i>)<i>x</i> = <i>y</i>. Now it is linear in <i>x</i>, with <i>P</i><sub>1</sub> = −1/<i>y</i> and <i>Q</i><sub>1</sub> = <i>y</i>.",
            "IF = exp(−ln <i>y</i>) = 1/<i>y</i>.",
            "<i>x</i>/<i>y</i> = ∫<i>y</i> · (1/<i>y</i>) d<i>y</i> + <i>C</i> = ∫1 d<i>y</i> + <i>C</i> = <i>y</i> + <i>C</i>.",
            "Verify: from <i>x</i> = <i>y</i><sup>2</sup> + <i>Cy</i>, d<i>x</i>/d<i>y</i> = 2<i>y</i> + <i>C</i>, so d<i>y</i>/d<i>x</i> = 1/(2<i>y</i> + <i>C</i>). And <i>y</i>/(<i>x</i> + <i>y</i><sup>2</sup>) = <i>y</i>/(2<i>y</i><sup>2</sup> + <i>Cy</i>) = 1/(2<i>y</i> + <i>C</i>). They agree."
          ],
          "ans": "<i>x</i> = <i>y</i><sup>2</sup> + <i>Cy</i>. The whole difficulty was deciding which variable the equation is linear in; after that it was four lines."
        },
        {
          "t": "ex",
          "tag": "JEE 2005 PATTERN",
          "q": "Solve <i>y</i> d<i>x</i> + <i>y</i><sup>2</sup> d<i>y</i> = <i>x</i> d<i>y</i> with <i>y</i> > 0 and <i>y</i>(1) = 1, then find <i>y</i> when <i>x</i> = −3.",
          "steps": [
            "Collect the differentials: <i>y</i> d<i>x</i> = (<i>x</i> − <i>y</i><sup>2</sup>) d<i>y</i>, so d<i>x</i>/d<i>y</i> = <i>x</i>/<i>y</i> − <i>y</i>, which is linear in <i>x</i> with <i>P</i><sub>1</sub> = −1/<i>y</i> and <i>Q</i><sub>1</sub> = −<i>y</i>.",
            "IF = 1/<i>y</i>, and the left side is (d/d<i>y</i>)(<i>x</i>/<i>y</i>) = −1.",
            "Integrate: <i>x</i>/<i>y</i> = −<i>y</i> + <i>C</i>. With <i>y</i>(1) = 1: 1 = −1 + <i>C</i>, so <i>C</i> = 2 and <i>x</i> = 2<i>y</i> − <i>y</i><sup>2</sup>.",
            "Set <i>x</i> = −3: <i>y</i><sup>2</sup> − 2<i>y</i> − 3 = 0, giving <i>y</i> = 3 or <i>y</i> = −1."
          ],
          "ans": "<i>y</i> = 3. The stated condition <i>y</i> > 0 is not decoration: it is there to kill <i>y</i> = −1, which will be sitting on the option list waiting for you."
        },
        {
          "t": "p",
          "html": "One more family reduces to this one. A <b>Bernoulli</b> equation is d<i>y</i>/d<i>x</i> + <i>Py</i> = <i>Qy</i><sup>n</sup> with <i>n</i> ≠ 0 and <i>n</i> ≠ 1. The <i>y</i><sup>n</sup> on the right spoils linearity, but a single division fixes it. Divide through by <i>y</i><sup>n</sup> and the combination <i>y</i><sup>−n</sup> d<i>y</i>/d<i>x</i> that appears is begging for the substitution <i>v</i> = <i>y</i><sup>1−n</sup>, because differentiating <i>v</i> produces exactly that combination times (1 − <i>n</i>)."
        },
        {
          "t": "formula",
          "kicker": "BERNOULLI, REDUCED TO LINEAR",
          "tag": "one division and one substitution",
          "main": "d<i>y</i>/d<i>x</i> + <i>Py</i> = <i>Qy</i><sup>n</sup>, <i>v</i> = <i>y</i><sup>1−n</sup> ⇒ d<i>v</i>/d<i>x</i> + (1 − <i>n</i>)<i>Pv</i> = (1 − <i>n</i>)<i>Q</i>",
          "legend": [
            "d<i>v</i>/d<i>x</i> = (1 − <i>n</i>)<i>y</i><sup>−n</sup> d<i>y</i>/d<i>x</i>, which is why dividing by <i>y</i><sup>n</sup> first is the move that makes the substitution work",
            "what is left is <b>linear in <i>v</i></b>, with integrating factor exp(∫(1 − <i>n</i>)<i>P</i> d<i>x</i>), and Topic 04's machinery finishes it",
            "back-substitute <i>v</i> = <i>y</i><sup>1−n</sup> at the end. For the common case <i>n</i> = 2 that means <i>v</i> = 1/<i>y</i>"
          ],
          "note": "Dividing by <i>y</i><sup>n</sup> loses <i>y</i> = 0, exactly as in Topic 03. Name it. For <i>n</i> = 2 the constant function <i>y</i> = 0 always solves the equation and never appears in the family you get from <i>v</i>."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Solve d<i>y</i>/d<i>x</i> + <i>y</i> = <i>y</i><sup>2</sup><i>e</i><sup>x</sup>.",
          "steps": [
            "Bernoulli with <i>n</i> = 2, <i>P</i> = 1, <i>Q</i> = <i>e</i><sup>x</sup>. Note the lost solution <i>y</i> = 0 before dividing.",
            "Put <i>v</i> = <i>y</i><sup>−1</sup>, so d<i>v</i>/d<i>x</i> = −<i>y</i><sup>−2</sup> d<i>y</i>/d<i>x</i>. Dividing the equation by <i>y</i><sup>2</sup> and substituting gives −d<i>v</i>/d<i>x</i> + <i>v</i> = <i>e</i><sup>x</sup>.",
            "Tidy the signs: d<i>v</i>/d<i>x</i> − <i>v</i> = −<i>e</i><sup>x</sup>. Linear in <i>v</i>, with IF = <i>e</i><sup>−x</sup>.",
            "(<i>ve</i><sup>−x</sup>)′ = −<i>e</i><sup>x</sup> · <i>e</i><sup>−x</sup> = −1, so <i>ve</i><sup>−x</sup> = −<i>x</i> + <i>C</i>.",
            "Back-substitute <i>v</i> = 1/<i>y</i>."
          ],
          "ans": "1/<i>y</i> = <i>e</i><sup>x</sup>(<i>C</i> − <i>x</i>), together with the singular solution <i>y</i> = 0. Sanity check the shape: as <i>x</i> grows large and positive, <i>e</i><sup>x</sup>(<i>C</i> − <i>x</i>) runs to minus infinity, so <i>y</i> approaches 0, which is the singular solution the family is creeping towards."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN 2019 PATTERN",
          "q": "Solve (<i>y</i><sup>2</sup> − <i>x</i><sup>3</sup>) d<i>x</i> − <i>xy</i> d<i>y</i> = 0.",
          "steps": [
            "Not separable, and not homogeneous: <i>y</i><sup>2</sup> and <i>x</i><sup>3</sup> have different degrees, so the scale test fails.",
            "Look at how <i>y</i> appears: only as <i>y</i><sup>2</sup> and as <i>y</i> d<i>y</i>. That is the signature of the substitution <i>u</i> = <i>y</i><sup>2</sup>, for which d<i>u</i> = 2<i>y</i> d<i>y</i>.",
            "The equation becomes <i>u</i> d<i>x</i> − (<i>x</i>/2) d<i>u</i> = <i>x</i><sup>3</sup> d<i>x</i>, that is d<i>u</i>/d<i>x</i> − (2/<i>x</i>)<i>u</i> = −2<i>x</i><sup>2</sup>. Linear in <i>u</i>.",
            "IF = exp(−2 ln <i>x</i>) = <i>x</i><sup>−2</sup>, so (<i>u</i>/<i>x</i><sup>2</sup>)′ = −2 and <i>u</i>/<i>x</i><sup>2</sup> = −2<i>x</i> + <i>C</i>.",
            "Back-substitute <i>u</i> = <i>y</i><sup>2</sup>."
          ],
          "ans": "<i>y</i><sup>2</sup> + 2<i>x</i><sup>3</sup> = <i>Cx</i><sup>2</sup>. The examinable idea is not the algebra, it is the reading: when <i>y</i> shows up only in the combination <i>y</i><sup>2</sup> and <i>y</i> d<i>y</i>, the right new variable is <i>y</i><sup>2</sup>."
        },
        {
          "t": "p",
          "html": "One last shape, because Advanced sets it and it frightens people for no reason. Sometimes the equation is linear but its coefficients are an <b>unnamed</b> function. Take <i>y</i>′ + <i>y g</i>′(<i>x</i>) = <i>g</i>(<i>x</i>)<i>g</i>′(<i>x</i>) with <i>g</i>(0) = <i>g</i>(2) = 0 and <i>y</i>(0) = 0, and find <i>y</i>(2). Here <i>P</i> = <i>g</i>′, so IF = exp(<i>g</i>), and the solution comes out <i>y</i> exp(<i>g</i>) = exp(<i>g</i>)(<i>g</i> − 1) + <i>C</i>. Feeding in <i>y</i>(0) = 0 and <i>g</i>(0) = 0 gives <i>C</i> = 1, and at <i>x</i> = 2 with <i>g</i>(2) = 0 the answer is <i>y</i>(2) = −1 + 1 = <b>0</b>. You never need to know what <i>g</i> is. The method does not care."
        },
        {
          "t": "mcq",
          "q": "The integrating factor of <i>x</i> d<i>y</i>/d<i>x</i> − 2<i>y</i> = <i>x</i><sup>5</sup> is:",
          "opts": [
            { "label": "<i>x</i><sup>2</sup>", "nudge": "This drops the minus sign on <i>P</i>. Using <i>P</i> = +2/<i>x</i> gives exp(2 ln <i>x</i>) = <i>x</i><sup>2</sup>, but the equation has −2<i>y</i>, so <i>P</i> is negative." },
            { "label": "1/<i>x</i><sup>2</sup>", "nudge": null },
            { "label": "−2<i>x</i>", "nudge": "This confuses ∫<i>P</i> d<i>x</i> with the integrating factor itself. The integral is only the exponent; the factor is <i>e</i> raised to it." },
            { "label": "<i>e</i><sup>−2x</sup>", "nudge": "This forgets to divide by <i>x</i> and reads <i>P</i> = −2, a constant. With a coefficient in front of d<i>y</i>/d<i>x</i>, every <i>P</i> you read is wrong and so is every factor built from it." }
          ],
          "correct": 1,
          "solution": "Standard form first: d<i>y</i>/d<i>x</i> − (2/<i>x</i>)<i>y</i> = <i>x</i><sup>4</sup>, so <i>P</i> = −2/<i>x</i>. Then ∫<i>P</i> d<i>x</i> = −2 ln <i>x</i> and IF = exp(−2 ln <i>x</i>) = <i>x</i><sup>−2</sup>."
        },
        {
          "t": "mcq",
          "q": "Which of these is a <b>linear</b> differential equation?",
          "opts": [
            { "label": "d<i>y</i>/d<i>x</i> + <i>y</i><sup>2</sup> = <i>x</i>", "nudge": "The <i>y</i><sup>2</sup> makes it nonlinear in <i>y</i>. Linearity demands the first power of <i>y</i> and of its derivative, with no exceptions." },
            { "label": "d<i>y</i>/d<i>x</i> + <i>xy</i> = <i>x</i><sup>2</sup>", "nudge": null },
            { "label": "(d<i>y</i>/d<i>x</i>)<sup>2</sup> + <i>y</i> = <i>x</i>", "nudge": "The derivative is squared, so it is nonlinear in the derivative. Note that this one also has degree 2, which is a separate fact about the same square." },
            { "label": "<i>y</i> d<i>y</i>/d<i>x</i> + <i>y</i> = <i>x</i>", "nudge": "The product <i>y</i> d<i>y</i>/d<i>x</i> is nonlinear. It is worth knowing that this equation <b>is</b> linear in <i>x</i> after flipping, but as written in <i>y</i> it is not." }
          ],
          "correct": 1,
          "solution": "<i>y</i> and d<i>y</i>/d<i>x</i> each appear to the first power, and the coefficient <i>x</i> and the right side <i>x</i><sup>2</sup> depend on <i>x</i> only. A messy function of <i>x</i> never breaks linearity; only <i>y</i> does."
        },
        {
          "t": "mcq",
          "q": "The equation d<i>y</i>/d<i>x</i> = 1/(<i>x</i> + <i>y</i>) is most efficiently solved by treating it as:",
          "opts": [
            { "label": "linear in <i>y</i>, as written", "nudge": "It fails: <i>y</i> sits in the denominator on the right, so no rearrangement puts this into d<i>y</i>/d<i>x</i> + <i>Py</i> = <i>Q</i> with <i>P</i> and <i>Q</i> functions of <i>x</i>." },
            { "label": "linear in <i>x</i>, after swapping the variables", "nudge": null },
            { "label": "homogeneous, via <i>y</i> = <i>vx</i>", "nudge": "The right side is 1/(<i>x</i> + <i>y</i>), which scales by 1/λ rather than staying fixed. Degree −1 is not degree 0, so it is not homogeneous." },
            { "label": "variables separable", "nudge": "<i>x</i> + <i>y</i> is a sum, and a sum does not factor into an <i>x</i>-part times a <i>y</i>-part. Separation needs a product." }
          ],
          "correct": 1,
          "solution": "Invert both sides: d<i>x</i>/d<i>y</i> = <i>x</i> + <i>y</i>, that is d<i>x</i>/d<i>y</i> − <i>x</i> = <i>y</i>, linear in <i>x</i> with <i>P</i><sub>1</sub> = −1 and IF = <i>e</i><sup>−y</sup>. A one-line flip turns an impossible equation into a routine one."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "Solve d<i>y</i>/d<i>x</i> + <i>y</i> = <i>e</i><sup>x</sup>.",
              "a": "<i>y</i> = <i>e</i><sup>x</sup>/2 + <i>Ce</i><sup>−x</sup>. Here <i>P</i> = 1 so IF = <i>e</i><sup>x</sup>, and <i>ye</i><sup>x</sup> = ∫<i>e</i><sup>2x</sup> d<i>x</i> + <i>C</i> = <i>e</i><sup>2x</sup>/2 + <i>C</i>."
            },
            {
              "q": "Solve <i>x</i> d<i>y</i>/d<i>x</i> + <i>y</i> = <i>x</i><sup>3</sup>.",
              "a": "<i>y</i> = <i>x</i><sup>3</sup>/4 + <i>C</i>/<i>x</i>. Divide by <i>x</i> first to get <i>P</i> = 1/<i>x</i> and IF = <i>x</i>. Then <i>xy</i> = ∫<i>x</i><sup>3</sup> d<i>x</i> + <i>C</i>. Notice the left side was already (<i>xy</i>)′ before you multiplied by anything."
            },
            {
              "q": "Solve d<i>y</i>/d<i>x</i> + 2<i>xy</i> = <i>x</i>.",
              "a": "<i>y</i> = 1/2 + <i>C</i> exp(−<i>x</i><sup>2</sup>). Here ∫2<i>x</i> d<i>x</i> = <i>x</i><sup>2</sup>, so IF = exp(<i>x</i><sup>2</sup>), and ∫<i>x</i> exp(<i>x</i><sup>2</sup>) d<i>x</i> = exp(<i>x</i><sup>2</sup>)/2."
            },
            {
              "q": "Solve d<i>y</i>/d<i>x</i> + <i>y</i> tan <i>x</i> = sec <i>x</i> with <i>y</i>(0) = 1.",
              "a": "<i>y</i> = sin <i>x</i> + cos <i>x</i>. IF = exp(∫tan <i>x</i> d<i>x</i>) = sec <i>x</i>, and <i>Q</i> · IF = sec<sup>2</sup><i>x</i>, so <i>y</i> sec <i>x</i> = tan <i>x</i> + <i>C</i>. The condition gives <i>C</i> = 1."
            },
            {
              "q": "Solve d<i>y</i>/d<i>x</i> + <i>y</i>/<i>x</i> = <i>xy</i><sup>2</sup>.",
              "a": "1/<i>y</i> = <i>Cx</i> − <i>x</i><sup>2</sup>, plus the singular solution <i>y</i> = 0. Bernoulli with <i>n</i> = 2: put <i>v</i> = 1/<i>y</i> to get <i>v</i>′ − <i>v</i>/<i>x</i> = −<i>x</i>, whose integrating factor is 1/<i>x</i>."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "Reading <i>P</i> before reaching standard form. Any coefficient in front of d<i>y</i>/d<i>x</i> has to be divided out first, or <i>P</i> and the whole integrating factor are wrong from the start.",
            "Sign errors in the integrating factor. A negative <i>P</i> gives a negative ∫<i>P</i> d<i>x</i>, which gives a negative power or a decaying exponential. Check the sign before you exponentiate, not after.",
            "Integrating <i>Q</i> instead of <i>Q</i> · IF. The factor rides into the integral on the right. This single slip is the most common way a correct integrating factor still produces a wrong answer.",
            "Expanding the left side after multiplying. It is guaranteed to be (<i>y</i> · IF)′ by construction, so expanding it wastes time and invites an algebra error.",
            "Missing “linear in <i>x</i>”. If <i>y</i> is tangled but <i>x</i> is first-degree, flip to d<i>x</i>/d<i>y</i>. Many problems that look hard are ordinary linear equations lying on their side."
          ]
        },
        {
          "t": "protip",
          "html": "before solving, glance at the equation and ask one question: first power in y and in y prime, with no products between them? if yes, linear in y, go. if y is messy but x is clean and first-degree, flip and it is linear in x. if the right side is a power of y, it is bernoulli and one division reaches the same place. three seconds of looking saves ten minutes of the wrong method."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "d<i>y</i>/d<i>x</i> + <i>Py</i> = <i>Q</i>, coefficient of d<i>y</i>/d<i>x</i> equal to 1", "note": "standard form is step zero, not step one" },
            { "f": "IF = exp(∫<i>P</i> d<i>x</i>)", "note": "forced by the product rule, never guessed" },
            { "f": "<i>y</i> · IF = ∫<i>Q</i> · IF d<i>x</i> + <i>C</i>", "note": "the factor rides into the integral on the right" },
            { "f": "linear in <i>x</i>: d<i>x</i>/d<i>y</i> + <i>P</i><sub>1</sub><i>x</i> = <i>Q</i><sub>1</sub>", "note": "same five steps, roles swapped" },
            { "f": "Bernoulli <i>Qy</i><sup>n</sup>: put <i>v</i> = <i>y</i><sup>1−n</sup>", "note": "and name the solution y equals zero that the division loses" }
          ],
          "aids": [
            "standard form first, P second",
            "the factor is e to the integral of P",
            "the factor rides into the integral, it is Q times IF",
            "messy in y? try x"
          ]
        }
      ]
    },
    {
      "n": "05",
      "title": "Exact Equations, Inspection, and Lowering the Order",
      "chip": "05 EXACT + REDUCE",
      "kalam": "when it is none of the three, look for a perfect differential",
      "blocks": [
        {
          "t": "p",
          "html": "You now have three tools, and JEE Main sets one “solve this equation” question most years that fits <b>none</b> of them. It does not separate, it fails the scale test, and it is not linear in either variable. That is not bad luck: it is a deliberate design, and there is a fourth idea waiting for exactly that case."
        },
        {
          "t": "p",
          "html": "Write the equation in differential form, <i>M</i> d<i>x</i> + <i>N</i> d<i>y</i> = 0. Now ask a question nobody asked in the last three topics: <b>is the left side the total differential of something?</b> If there is a function <i>F</i>(<i>x</i>, <i>y</i>) whose total differential d<i>F</i> is exactly <i>M</i> d<i>x</i> + <i>N</i> d<i>y</i>, then the equation says nothing more than d<i>F</i> = 0, and the solution is <i>F</i>(<i>x</i>, <i>y</i>) = <i>C</i>. No integration technique at all, just recognition."
        },
        {
          "t": "think",
          "html": "an exact equation is a photograph of a contour map with the labels rubbed off. every solution curve is one contour of a single hidden surface F. the whole method is rebuilding F from its two slopes, and once you have it the answer is just F equals a constant."
        },
        {
          "t": "def",
          "term": "Exact differential equation",
          "html": "<i>M</i> d<i>x</i> + <i>N</i> d<i>y</i> = 0 is <b>exact</b> if there exists <i>F</i>(<i>x</i>, <i>y</i>) with ∂<i>F</i>/∂<i>x</i> = <i>M</i> and ∂<i>F</i>/∂<i>y</i> = <i>N</i>, so that the left side is d<i>F</i>. The solution is then <i>F</i>(<i>x</i>, <i>y</i>) = <i>C</i>, an implicit relation and usually not solvable for <i>y</i>. Here ∂ is the <b>partial</b> derivative sign: differentiate with respect to one variable and treat the other as a constant."
        },
        {
          "t": "formula",
          "kicker": "THE TEST, AND WHAT IT UNLOCKS",
          "tag": "one comparison decides everything",
          "main": "exact ⟺ ∂<i>M</i>/∂<i>y</i> = ∂<i>N</i>/∂<i>x</i>",
          "legend": [
            "differentiate <i>M</i> with respect to <i>y</i>, holding <i>x</i> fixed, and <i>N</i> with respect to <i>x</i>, holding <i>y</i> fixed. If the two agree the equation is exact, and if they do not it is not",
            "the condition is <b>necessary</b> because mixed second partials of <i>F</i> commute, and it is <b>sufficient</b> because the proof of sufficiency is itself the construction of <i>F</i>",
            "the answer is always an implicit relation <i>F</i>(<i>x</i>, <i>y</i>) = <i>C</i>, and you are not expected to solve it for <i>y</i>"
          ],
          "note": "The test is cheap: two partial derivatives, usually one line each. Run it before trying anything clever, because if it passes you are three routine steps from the answer."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE TEST, AND THE ALGORITHM THAT FALLS OUT OF IT, TAP A LINE",
          "steps": [
            {
              "eq": "suppose <i>F</i> exists with ∂<i>F</i>/∂<i>x</i> = <i>M</i> and ∂<i>F</i>/∂<i>y</i> = <i>N</i>",
              "why": "This is the definition of exact, written out. Everything below is the consequence of assuming it, and then of assuming the reverse."
            },
            {
              "eq": "∂<i>M</i>/∂<i>y</i> = ∂<sup>2</sup><i>F</i>/∂<i>y</i>∂<i>x</i> = ∂<sup>2</sup><i>F</i>/∂<i>x</i>∂<i>y</i> = ∂<i>N</i>/∂<i>x</i>",
              "why": "Mixed second partial derivatives are equal for the functions this syllabus deals with, so differentiating M in y and N in x reach the same object by two routes. The test is therefore necessary."
            },
            {
              "eq": "now assume the test holds. define <i>G</i> = ∫<i>M</i> d<i>x</i>, holding <i>y</i> constant, so ∂<i>G</i>/∂<i>x</i> = <i>M</i>",
              "why": "This is an ordinary integral in x with y along for the ride. G already has the correct x-partial; the only question left is whether its y-partial can be repaired into N."
            },
            {
              "eq": "let <i>H</i> = <i>N</i> − ∂<i>G</i>/∂<i>y</i>. then ∂<i>H</i>/∂<i>x</i> = ∂<i>N</i>/∂<i>x</i> − ∂<i>M</i>/∂<i>y</i> = 0",
              "why": "Differentiating G's y-partial with respect to x gives back M differentiated in y, again because mixed partials commute. The test says that equals N differentiated in x, so H has zero x-derivative."
            },
            {
              "eq": "so <i>H</i> depends on <i>y</i> alone, call it φ(<i>y</i>), and <i>F</i> = <i>G</i> + ∫φ(<i>y</i>) d<i>y</i>",
              "why": "A function with zero x-derivative everywhere cannot contain x. Adding its y-integral to G fixes the y-partial without disturbing the x-partial, because the added piece has no x in it."
            },
            {
              "eq": "check: ∂<i>F</i>/∂<i>x</i> = <i>M</i> and ∂<i>F</i>/∂<i>y</i> = ∂<i>G</i>/∂<i>y</i> + φ = <i>N</i>. solution: <i>F</i> = <i>C</i>",
              "why": "Exactly what was required, so the test is sufficient as well. And the proof is the procedure: integrate M in x, subtract, integrate what is left in y. Nothing else is needed."
            }
          ]
        },
        {
          "t": "proc",
          "title": "Solve an exact equation",
          "steps": [
            "<b>Write it as <i>M</i> d<i>x</i> + <i>N</i> d<i>y</i> = 0</b>, and be careful with signs when you move a term across.",
            "<b>Compute ∂<i>M</i>/∂<i>y</i> and ∂<i>N</i>/∂<i>x</i>.</b> If they differ, the equation is not exact; go to the inspection table below.",
            "<b>Set <i>G</i> = ∫<i>M</i> d<i>x</i></b>, treating <i>y</i> as a constant throughout. No arbitrary constant here.",
            "<b>Compute φ(<i>y</i>) = <i>N</i> − ∂<i>G</i>/∂<i>y</i>.</b> If the test passed, this contains <b>no <i>x</i></b>. If an <i>x</i> survives, the equation was not exact and you made an arithmetic slip in step 2.",
            "<b>Write the solution <i>G</i> + ∫φ(<i>y</i>) d<i>y</i> = <i>C</i>.</b> Do this step even when φ turns out to be zero: skipping it is how students confirm wrong answers.",
            "<b>Check</b> by differentiating the answer implicitly. The original <i>M</i> and <i>N</i> should come straight back."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD PATTERN",
          "q": "Test for exactness and solve (2<i>xy</i> + 3<i>x</i><sup>2</sup>) d<i>x</i> + (<i>x</i><sup>2</sup> + 6<i>y</i><sup>2</sup>) d<i>y</i> = 0.",
          "steps": [
            "<i>M</i> = 2<i>xy</i> + 3<i>x</i><sup>2</sup> and <i>N</i> = <i>x</i><sup>2</sup> + 6<i>y</i><sup>2</sup>.",
            "∂<i>M</i>/∂<i>y</i> = 2<i>x</i> and ∂<i>N</i>/∂<i>x</i> = 2<i>x</i>. Equal, so exact.",
            "<i>G</i> = ∫(2<i>xy</i> + 3<i>x</i><sup>2</sup>) d<i>x</i> = <i>x</i><sup>2</sup><i>y</i> + <i>x</i><sup>3</sup>, with <i>y</i> held fixed.",
            "∂<i>G</i>/∂<i>y</i> = <i>x</i><sup>2</sup>, so φ(<i>y</i>) = <i>N</i> − <i>x</i><sup>2</sup> = 6<i>y</i><sup>2</sup>, which contains no <i>x</i> as promised. Its integral is 2<i>y</i><sup>3</sup>."
          ],
          "ans": "<i>x</i><sup>2</sup><i>y</i> + <i>x</i><sup>3</sup> + 2<i>y</i><sup>3</sup> = <i>C</i>. Differentiate it implicitly and (2<i>xy</i> + 3<i>x</i><sup>2</sup>) d<i>x</i> + (<i>x</i><sup>2</sup> + 6<i>y</i><sup>2</sup>) d<i>y</i> comes back exactly."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Solve (<i>ye</i><sup>xy</sup> + 2<i>x</i>) d<i>x</i> + <i>xe</i><sup>xy</sup> d<i>y</i> = 0.",
          "steps": [
            "∂<i>M</i>/∂<i>y</i> = <i>e</i><sup>xy</sup> + <i>xye</i><sup>xy</sup>, using the product rule on <i>ye</i><sup>xy</sup>.",
            "∂<i>N</i>/∂<i>x</i> = <i>e</i><sup>xy</sup> + <i>xye</i><sup>xy</sup> by the same working. Equal, so exact.",
            "<i>G</i> = ∫(<i>ye</i><sup>xy</sup> + 2<i>x</i>) d<i>x</i> = <i>e</i><sup>xy</sup> + <i>x</i><sup>2</sup>. The <i>y</i> is a spectator here, and it is exactly the factor that makes the first term integrate to <i>e</i><sup>xy</sup>.",
            "∂<i>G</i>/∂<i>y</i> = <i>xe</i><sup>xy</sup>, so φ(<i>y</i>) = <i>N</i> − <i>xe</i><sup>xy</sup> = 0."
          ],
          "ans": "<i>e</i><sup>xy</sup> + <i>x</i><sup>2</sup> = <i>C</i>. The φ step is <b>not optional</b> when it comes out zero. Computing it and getting zero is a verification; skipping it and assuming zero is how students confirm answers that are wrong."
        },
        {
          "t": "p",
          "html": "When the test fails, do not give up on the idea. Many exam equations are not exact as written but become a <b>sum of perfect differentials</b> after regrouping and dividing by a well-chosen factor. Five differentials cover nearly every case, and each is one line of ordinary calculus you already know: the product rule gives the first, the quotient rule the next two, and the chain rule the last two. Memorise the table and the spotting becomes a two-second scan. Without it, the same problems are impossible."
        },
        {
          "t": "defgrid",
          "title": "The inspection table, and two algebraic facts",
          "rows": [
            { "k": "d(<i>xy</i>)", "v": "<i>y</i> d<i>x</i> + <i>x</i> d<i>y</i>, the product rule read backwards" },
            { "k": "d(<i>y</i>/<i>x</i>)", "v": "(<i>x</i> d<i>y</i> − <i>y</i> d<i>x</i>)/<i>x</i><sup>2</sup>, the quotient rule" },
            { "k": "d(<i>x</i>/<i>y</i>)", "v": "(<i>y</i> d<i>x</i> − <i>x</i> d<i>y</i>)/<i>y</i><sup>2</sup>, the same rule the other way up" },
            { "k": "d(ln(<i>x</i><sup>2</sup> + <i>y</i><sup>2</sup>))", "v": "2(<i>x</i> d<i>x</i> + <i>y</i> d<i>y</i>)/(<i>x</i><sup>2</sup> + <i>y</i><sup>2</sup>), the chain rule" },
            { "k": "d(tan<sup>−1</sup>(<i>y</i>/<i>x</i>))", "v": "(<i>x</i> d<i>y</i> − <i>y</i> d<i>x</i>)/(<i>x</i><sup>2</sup> + <i>y</i><sup>2</sup>). Same numerator as row two, different denominator" },
            { "k": "Two facts that weaponise these", "v": "d(<i>xy</i>)/(<i>xy</i>)<sup>2</sup> = −d(1/<i>xy</i>), and (<i>y</i> d<i>x</i> − <i>x</i> d<i>y</i>)/<i>xy</i> = d(ln|<i>x</i>/<i>y</i>|)" }
          ]
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "Solve <i>y</i>(1 + <i>xy</i>) d<i>x</i> + <i>x</i>(1 − <i>xy</i>) d<i>y</i> = 0 by inspection.",
          "steps": [
            "Test first: <i>M</i> = <i>y</i> + <i>xy</i><sup>2</sup> gives ∂<i>M</i>/∂<i>y</i> = 1 + 2<i>xy</i>, and <i>N</i> = <i>x</i> − <i>x</i><sup>2</sup><i>y</i> gives ∂<i>N</i>/∂<i>x</i> = 1 − 2<i>xy</i>. Not exact.",
            "Expand and regroup: (<i>y</i> d<i>x</i> + <i>x</i> d<i>y</i>) + <i>xy</i>(<i>y</i> d<i>x</i> − <i>x</i> d<i>y</i>) = 0. The first bracket is row one of the table.",
            "To make the second group match a row, divide the whole equation by <i>x</i><sup>2</sup><i>y</i><sup>2</sup>: d(<i>xy</i>)/(<i>xy</i>)<sup>2</sup> + (<i>y</i> d<i>x</i> − <i>x</i> d<i>y</i>)/<i>xy</i> = 0.",
            "Apply both algebraic facts: −d(1/<i>xy</i>) + d(ln|<i>x</i>/<i>y</i>|) = 0.",
            "Integrate. Every term is already a differential, so integration is just removing the d."
          ],
          "ans": "ln|<i>x</i>/<i>y</i>| − 1/<i>xy</i> = <i>C</i>. Nothing in the equation announces the divisor <i>x</i><sup>2</sup><i>y</i><sup>2</sup>. You find it by asking what power of <i>x</i> and <i>y</i> turns each group into a tabulated differential, which is a two-second scan once the table is in your head and impossible without it."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Find <i>k</i> so that (6<i>x</i><sup>2</sup> + <i>kxy</i>) d<i>x</i> + (3<i>x</i><sup>2</sup> + 5<i>y</i><sup>2</sup>) d<i>y</i> = 0 is exact, and solve it.",
          "steps": [
            "∂<i>M</i>/∂<i>y</i> = <i>kx</i> and ∂<i>N</i>/∂<i>x</i> = 6<i>x</i>. Setting them equal forces <i>k</i> = 6.",
            "With <i>k</i> = 6: <i>G</i> = ∫(6<i>x</i><sup>2</sup> + 6<i>xy</i>) d<i>x</i> = 2<i>x</i><sup>3</sup> + 3<i>x</i><sup>2</sup><i>y</i>.",
            "∂<i>G</i>/∂<i>y</i> = 3<i>x</i><sup>2</sup>, so φ(<i>y</i>) = (3<i>x</i><sup>2</sup> + 5<i>y</i><sup>2</sup>) − 3<i>x</i><sup>2</sup> = 5<i>y</i><sup>2</sup>. No <i>x</i> survives, which is the confirmation that <i>k</i> was chosen correctly.",
            "∫5<i>y</i><sup>2</sup> d<i>y</i> = (5/3)<i>y</i><sup>3</sup>.",
            "Check: differentiating 2<i>x</i><sup>3</sup> + 3<i>x</i><sup>2</sup><i>y</i> + (5/3)<i>y</i><sup>3</sup> in <i>x</i> gives 6<i>x</i><sup>2</sup> + 6<i>xy</i>, and in <i>y</i> gives 3<i>x</i><sup>2</sup> + 5<i>y</i><sup>2</sup>. Both come back."
          ],
          "ans": "<i>k</i> = 6, and 2<i>x</i><sup>3</sup> + 3<i>x</i><sup>2</sup><i>y</i> + (5/3)<i>y</i><sup>3</sup> = <i>C</i>. Watch what <i>N</i> is here. If the second bracket had carried an <i>xy</i> term instead of <i>y</i><sup>2</sup>, then ∂<i>N</i>/∂<i>x</i> would contain a <i>y</i>, ∂<i>M</i>/∂<i>y</i> = <i>kx</i> could never match it, and <b>no</b> value of <i>k</i> would make the equation exact."
        },
        {
          "t": "p",
          "html": "Two more reductions, and then the topic is complete. The first finishes the business Topic 03 left open. When the equation has the shape d<i>y</i>/d<i>x</i> = <i>f</i>(<i>ax</i> + <i>by</i> + <i>c</i>), with the whole right side depending on <b>one linear combination</b> of <i>x</i> and <i>y</i>, there is nothing to shift the origin to. Substitute the combination itself and the equation separates. This is also the fix for the parallel-lines case that Topic 03 named and did not work."
        },
        {
          "t": "formula",
          "kicker": "ONE LINEAR COMBINATION, ONE SUBSTITUTION",
          "tag": "the argument of the function is the new variable",
          "main": "<i>v</i> = <i>ax</i> + <i>by</i> + <i>c</i> ⇒ d<i>v</i>/d<i>x</i> = <i>a</i> + <i>b f</i>(<i>v</i>) ⇒ d<i>v</i>/(<i>a</i> + <i>b f</i>(<i>v</i>)) = d<i>x</i>",
          "legend": [
            "differentiating <i>v</i> gives <i>a</i> + <i>b</i> d<i>y</i>/d<i>x</i>, and the equation replaces that derivative by <i>f</i>(<i>v</i>) at once",
            "what is left is <b>separable</b> in <i>v</i> and <i>x</i>, so Topic 03 finishes it",
            "the mark-winning move is recognising that the <b>argument</b> of the awkward function is the right new variable, which kills the transcendental in one stroke"
          ],
          "note": "Look for a hidden multiple too. sin(10<i>x</i> + 6<i>y</i>) is sin(2(5<i>x</i> + 3<i>y</i>)), so the right substitution is <i>v</i> = 5<i>x</i> + 3<i>y</i>, not the whole argument."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "Solve d<i>y</i>/d<i>x</i> = tan<sup>2</sup>(<i>x</i> + <i>y</i>).",
          "steps": [
            "It fits no workhorse type: not separable as written, not homogeneous because <i>x</i> + <i>y</i> sits inside a transcendental function, not linear.",
            "Put <i>v</i> = <i>x</i> + <i>y</i>, so d<i>v</i>/d<i>x</i> = 1 + tan<sup>2</sup><i>v</i> = sec<sup>2</sup><i>v</i>. The Pythagorean identity has just removed the tangent entirely.",
            "Separate: cos<sup>2</sup><i>v</i> d<i>v</i> = d<i>x</i>.",
            "Integrate using cos<sup>2</sup><i>v</i> = (1 + cos 2<i>v</i>)/2, quoted from the integrals chapter: <i>v</i>/2 + sin 2<i>v</i>/4 = <i>x</i> + <i>C</i>.",
            "Restore <i>v</i> = <i>x</i> + <i>y</i> and collect the <i>x</i> terms."
          ],
          "ans": "(<i>y</i> − <i>x</i>)/2 + sin(2(<i>x</i> + <i>y</i>))/4 = <i>C</i>. The one idea being tested is that the argument of the tangent was the correct new variable."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Solve d<i>y</i>/d<i>x</i> = (<i>x</i> + <i>y</i> + 1)<sup>2</sup>.",
          "steps": [
            "One linear combination, so put <i>v</i> = <i>x</i> + <i>y</i> + 1.",
            "d<i>v</i>/d<i>x</i> = 1 + d<i>y</i>/d<i>x</i> = 1 + <i>v</i><sup>2</sup>.",
            "Separate: d<i>v</i>/(1 + <i>v</i><sup>2</sup>) = d<i>x</i>, which is the arctangent row of the standard table.",
            "tan<sup>−1</sup><i>v</i> = <i>x</i> + <i>C</i>."
          ],
          "ans": "<i>x</i> + <i>y</i> + 1 = tan(<i>x</i> + <i>C</i>). Compare it with the practice item on (<i>y</i> − <i>x</i>)<sup>2</sup>: there d<i>v</i>/d<i>x</i> = <i>v</i><sup>2</sup> − 1 and the integral is a logarithm instead. The sign that comes out of the differentiation decides which standard integral you land on."
        },
        {
          "t": "p",
          "html": "The last reduction is openly beyond the board syllabus and is JEE Advanced enrichment. Advanced regularly sets a <b>second-order</b> equation that contains no <i>y</i>, or no <i>x</i>, and expects the substitution <i>p</i> = d<i>y</i>/d<i>x</i> to collapse it to something first order. The diagnosis takes five seconds: look at what the equation <b>omits</b>. Omits <i>y</i>, use Case 1. Omits <i>x</i>, use Case 2. Omits neither, look for a perfect derivative before giving up."
        },
        {
          "t": "formula",
          "kicker": "LOWERING THE ORDER WITH p = dy/dx",
          "tag": "two cases, and which one is decided by what is missing",
          "main": "<i>y</i> missing: <i>y</i>″ = d<i>p</i>/d<i>x</i>  ·  <i>x</i> missing: <i>y</i>″ = <i>p</i> d<i>p</i>/d<i>y</i>",
          "legend": [
            "<b>Case 1, <i>y</i> absent.</b> The equation becomes d<i>p</i>/d<i>x</i> = <i>f</i>(<i>x</i>, <i>p</i>), first order in <i>p</i> and <i>x</i>. Solve it by any Topic 03 or Topic 04 method, then integrate <i>p</i> once more to get <i>y</i>",
            "<b>Case 2, <i>x</i> absent.</b> Differentiating <i>p</i> with respect to <i>x</i> would drag <i>x</i> back in, so use the chain rule: d<i>p</i>/d<i>x</i> = (d<i>p</i>/d<i>y</i>)(d<i>y</i>/d<i>x</i>) = <i>p</i> d<i>p</i>/d<i>y</i>. That gives a first-order equation in <i>p</i> and <i>y</i>",
            "either way you integrate <b>twice</b> in total and collect <b>two</b> constants, which is what an order 2 equation must have"
          ],
          "note": "Some equations are neither case but are a derivative in disguise. <i>xy</i>″ + <i>y</i>′ is exactly (<i>xy</i>′)′, and <i>yy</i>″ + (<i>y</i>′)<sup>2</sup> is exactly (<i>yy</i>′)′. Spotting one of those is faster than either case."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "Solve <i>yy</i>″ = (<i>y</i>′)<sup>2</sup>.",
          "steps": [
            "No <i>x</i> appears anywhere, so this is Case 2. Put <i>p</i> = <i>y</i>′ and <i>y</i>″ = <i>p</i> d<i>p</i>/d<i>y</i>.",
            "<i>yp</i> d<i>p</i>/d<i>y</i> = <i>p</i><sup>2</sup>. If <i>p</i> is identically zero then <i>y</i> is constant, and that will reappear at the end, so note it and divide by <i>p</i>.",
            "<i>y</i> d<i>p</i>/d<i>y</i> = <i>p</i>, which separates: d<i>p</i>/<i>p</i> = d<i>y</i>/<i>y</i>, so <i>p</i> = <i>Ay</i>.",
            "Now d<i>y</i>/d<i>x</i> = <i>Ay</i>, separable again: <i>y</i> = <i>B</i> exp(<i>Ax</i>).",
            "Check: <i>y</i>′ = <i>AB</i> exp(<i>Ax</i>) and <i>y</i>″ = <i>A</i><sup>2</sup><i>B</i> exp(<i>Ax</i>), so <i>yy</i>″ = <i>A</i><sup>2</sup><i>B</i><sup>2</sup> exp(2<i>Ax</i>) and (<i>y</i>′)<sup>2</sup> = <i>A</i><sup>2</sup><i>B</i><sup>2</sup> exp(2<i>Ax</i>). Equal."
          ],
          "ans": "<i>y</i> = <i>B</i> exp(<i>Ax</i>). Two constants for an order 2 equation, as required, and <i>A</i> = 0 recovers the constant solutions that dividing by <i>p</i> had set aside."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "Solve <i>y</i>″ = <i>y</i>′ + <i>x</i>.",
          "steps": [
            "<i>y</i> itself never appears, so this is Case 1. Put <i>p</i> = <i>y</i>′, giving d<i>p</i>/d<i>x</i> − <i>p</i> = <i>x</i>.",
            "That is linear in <i>p</i>, with IF = <i>e</i><sup>−x</sup>, so (<i>pe</i><sup>−x</sup>)′ = <i>xe</i><sup>−x</sup>.",
            "By parts, ∫<i>xe</i><sup>−x</sup> d<i>x</i> = −(<i>x</i> + 1)<i>e</i><sup>−x</sup>, quoted from the integrals chapter.",
            "<i>pe</i><sup>−x</sup> = −(<i>x</i> + 1)<i>e</i><sup>−x</sup> + <i>C</i><sub>1</sub>, so <i>p</i> = <i>C</i><sub>1</sub><i>e</i><sup>x</sup> − <i>x</i> − 1.",
            "Integrate once more, since <i>p</i> is d<i>y</i>/d<i>x</i>."
          ],
          "ans": "<i>y</i> = <i>C</i><sub>1</sub><i>e</i><sup>x</sup> − <i>x</i><sup>2</sup>/2 − <i>x</i> + <i>C</i><sub>2</sub>. The equation looks like nothing in the chapter, and the entire difficulty is refusing to panic: one glance shows <i>y</i> is missing, one substitution drops it to a Topic 04 linear equation, and the rest is bookkeeping."
        },
        {
          "t": "mcq",
          "q": "For which value of <i>k</i> is (3<i>x</i><sup>2</sup> + <i>ky</i>) d<i>x</i> + (2<i>x</i> + 5<i>y</i>) d<i>y</i> = 0 exact?",
          "opts": [
            { "label": "<i>k</i> = 5", "nudge": "This matches the coefficient in the second bracket instead of running the test. The test compares ∂<i>M</i>/∂<i>y</i> with ∂<i>N</i>/∂<i>x</i>, and neither of those is 5." },
            { "label": "<i>k</i> = 2", "nudge": null },
            { "label": "<i>k</i> = 3", "nudge": "This picks up the 3 from 3<i>x</i><sup>2</sup>, which differentiates in <i>y</i> to zero and contributes nothing at all to ∂<i>M</i>/∂<i>y</i>." },
            { "label": "no value of <i>k</i> works", "nudge": "This would be the right answer if ∂<i>N</i>/∂<i>x</i> contained a <i>y</i>, since ∂<i>M</i>/∂<i>y</i> = <i>k</i> is a constant and could never match. Here ∂<i>N</i>/∂<i>x</i> is the constant 2, so a match exists." }
          ],
          "correct": 1,
          "solution": "∂<i>M</i>/∂<i>y</i> = <i>k</i> and ∂<i>N</i>/∂<i>x</i> = 2, so <i>k</i> = 2. Then <i>G</i> = <i>x</i><sup>3</sup> + 2<i>xy</i>, ∂<i>G</i>/∂<i>y</i> = 2<i>x</i>, φ(<i>y</i>) = 5<i>y</i>, and the solution is <i>x</i><sup>3</sup> + 2<i>xy</i> + (5/2)<i>y</i><sup>2</sup> = <i>C</i>."
        },
        {
          "t": "mcq",
          "q": "The best first move for d<i>y</i>/d<i>x</i> = cos(<i>x</i> + <i>y</i>) is:",
          "opts": [
            { "label": "substitute <i>y</i> = <i>vx</i>", "nudge": "That is for homogeneous equations. Here <i>x</i> + <i>y</i> sits inside a cosine, so the right side is not a function of the ratio <i>y</i>/<i>x</i> and no scaling leaves it fixed." },
            { "label": "substitute <i>v</i> = <i>x</i> + <i>y</i>", "nudge": null },
            { "label": "compute the integrating factor exp(∫cos <i>x</i> d<i>x</i>)", "nudge": "There is no <i>P</i> to read. The equation is not linear in <i>y</i>: <i>y</i> is buried inside a cosine, not sitting to the first power." },
            { "label": "separate the variables directly", "nudge": "cos(<i>x</i> + <i>y</i>) does not factor into an <i>x</i>-part times a <i>y</i>-part. Expanding it gives a sum of products, which is still not a single product." }
          ],
          "correct": 1,
          "solution": "The whole right side depends on the single combination <i>x</i> + <i>y</i>, so substitute it. Then d<i>v</i>/d<i>x</i> = 1 + cos <i>v</i> = 2cos<sup>2</sup>(<i>v</i>/2), which separates to give tan((<i>x</i> + <i>y</i>)/2) = <i>x</i> + <i>C</i>."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "Verify exactness and solve (2<i>x</i> + <i>y</i>) d<i>x</i> + (<i>x</i> + 2<i>y</i>) d<i>y</i> = 0.",
              "a": "<i>x</i><sup>2</sup> + <i>xy</i> + <i>y</i><sup>2</sup> = <i>C</i>. Both partials equal 1, so it is exact. <i>G</i> = <i>x</i><sup>2</sup> + <i>xy</i>, then φ(<i>y</i>) = 2<i>y</i>."
            },
            {
              "q": "Verify exactness and solve (<i>x</i><sup>2</sup> − <i>y</i>) d<i>x</i> − (<i>x</i> + <i>y</i><sup>2</sup>) d<i>y</i> = 0.",
              "a": "<i>x</i><sup>3</sup>/3 − <i>xy</i> − <i>y</i><sup>3</sup>/3 = <i>C</i>. Careful with the signs: <i>N</i> = −<i>x</i> − <i>y</i><sup>2</sup>, and both partials equal −1."
            },
            {
              "q": "Solve cos <i>y</i> d<i>x</i> + (cos <i>y</i> − <i>x</i> sin <i>y</i>) d<i>y</i> = 0.",
              "a": "<i>x</i> cos <i>y</i> + sin <i>y</i> = <i>C</i>. Both partials equal −sin <i>y</i>. Then <i>G</i> = <i>x</i> cos <i>y</i> and φ(<i>y</i>) = cos <i>y</i>."
            },
            {
              "q": "Solve d<i>y</i>/d<i>x</i> + <i>y</i>/<i>x</i> = <i>xy</i><sup>2</sup> and d<i>y</i>/d<i>x</i> = (<i>y</i> − <i>x</i>)<sup>2</sup>, and say which reduction each needs.",
              "a": "The first is Bernoulli: <i>v</i> = 1/<i>y</i> gives 1/<i>y</i> = <i>Cx</i> − <i>x</i><sup>2</sup>. The second is a linear combination: <i>v</i> = <i>y</i> − <i>x</i> gives d<i>v</i>/d<i>x</i> = <i>v</i><sup>2</sup> − 1, so (1/2) ln|(<i>v</i> − 1)/(<i>v</i> + 1)| = <i>x</i> + <i>C</i> with <i>v</i> = <i>y</i> − <i>x</i>."
            },
            {
              "q": "Solve <i>xy</i>″ + <i>y</i>′ = 0 by spotting a perfect derivative, and <i>yy</i>″ + (<i>y</i>′)<sup>2</sup> = 0 the same way.",
              "a": "The first is (<i>xy</i>′)′ = 0, so <i>xy</i>′ = <i>C</i><sub>1</sub> and <i>y</i> = <i>C</i><sub>1</sub> ln|<i>x</i>| + <i>C</i><sub>2</sub>. The second is (<i>yy</i>′)′ = 0, so <i>yy</i>′ = <i>C</i><sub>1</sub> and <i>y</i><sup>2</sup> = 2<i>C</i><sub>1</sub><i>x</i> + <i>C</i><sub>2</sub>, a family of parabolas. Hold on to that second one: it is the constant-subnormal curve of Topic 06."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "Announcing exactness after computing only one partial derivative. The test needs both, and the whole point is the comparison.",
            "Dropping a term while differentiating <i>N</i> with respect to <i>x</i>. In <i>N</i> = 3<i>x</i><sup>2</sup> + 5<i>xy</i> the <i>x</i>-partial is 6<i>x</i> + 5<i>y</i>, not 6<i>x</i>. Every factor containing <i>x</i> contributes, whatever else is sitting beside it.",
            "Accepting a φ that still contains <i>x</i>. If φ = <i>N</i> − ∂<i>G</i>/∂<i>y</i> has an <i>x</i> in it, the equation is not exact, full stop. Integrating it anyway produces an answer that does not differentiate back.",
            "Skipping the φ step when it looks like zero. Compute it and see the zero. Assuming it is how wrong answers get confirmed.",
            "Forcing <i>y</i> = <i>vx</i> or an integrating factor onto an equation that fits neither. If none of the three types applies, the equation is telling you to look for a perfect differential or a linear combination."
          ]
        },
        {
          "t": "protip",
          "html": "keep the triage in this order and it costs almost nothing. does it separate? is the right side a function of y over x? is it first power in y, or in x after a flip? is the right side a power of y, meaning bernoulli? write it as M dx plus N dy and test the two partials. does the whole right side depend on one linear combination? only after all six does anything get hard, and by then you have usually found it."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "<i>M</i> d<i>x</i> + <i>N</i> d<i>y</i> = 0 is exact ⟺ ∂<i>M</i>/∂<i>y</i> = ∂<i>N</i>/∂<i>x</i>", "note": "two partial derivatives, one comparison" },
            { "f": "<i>G</i> = ∫<i>M</i> d<i>x</i>, φ(<i>y</i>) = <i>N</i> − ∂<i>G</i>/∂<i>y</i>, answer <i>G</i> + ∫φ d<i>y</i> = <i>C</i>", "note": "if an x survives into phi, it was never exact" },
            { "f": "d(<i>xy</i>), d(<i>y</i>/<i>x</i>), d(ln(<i>x</i><sup>2</sup> + <i>y</i><sup>2</sup>)), d(tan<sup>−1</sup>(<i>y</i>/<i>x</i>))", "note": "the inspection table, and it must be memorised" },
            { "f": "d<i>y</i>/d<i>x</i> = <i>f</i>(<i>ax</i> + <i>by</i> + <i>c</i>) ⇒ put <i>v</i> = <i>ax</i> + <i>by</i> + <i>c</i>", "note": "the argument of the function is the new variable" },
            { "f": "<i>y</i> missing ⇒ <i>y</i>″ = <i>p</i>′  ·  <i>x</i> missing ⇒ <i>y</i>″ = <i>p</i> d<i>p</i>/d<i>y</i>", "note": "two integrations, two constants, matching order 2" }
          ],
          "aids": [
            "exact means the left side was already a differential of something",
            "if phi still has an x in it, the test failed and you missed it",
            "memorise five differentials and the impossible ones become two seconds",
            "look at what the equation is missing, that tells you which case"
          ]
        }
      ]
    },
    {
      "n": "06",
      "title": "Growth, Decay, Cooling, and the Geometry of Curves",
      "chip": "06 APPLICATIONS",
      "kalam": "underline the rate word before you write a symbol",
      "blocks": [
        {
          "t": "p",
          "html": "Almost every sentence in science that contains the word “rate” is secretly a differential equation. “Bacteria multiply faster when there are more of them.” “Hot tea cools quicker when the gap with the room is larger.” “The subnormal of this curve is constant.” Each one links a <b>rate of change</b> to the <b>current state</b>, and that link is an equation waiting to be written down and solved by a method you already own."
        },
        {
          "t": "p",
          "html": "Three model situations cover most exam questions. <b>Growth and decay</b>, when a quantity changes at a rate proportional to its own size: populations, bacteria, radioactive atoms, compound interest. <b>Newton's law of cooling</b>, when a hot body loses heat at a rate proportional to how much hotter it is than its surroundings, which is a different statement and is where the marks are lost. And <b>geometric conditions</b>, where the data is about the shape of a curve: its slope, its subnormal, its tangent length, or the demand that two families cross at right angles."
        },
        {
          "t": "think",
          "html": "the chai again. straight out of the kettle it cools fast, because the gap with the room is huge. near room temperature it barely cools at all, because the gap is tiny. the rate tracks the gap, not the chai's own temperature. that single sentence is the difference between newton's cooling and ordinary decay, and it is half the marks."
        },
        {
          "t": "formula",
          "kicker": "PROPORTIONAL TO ITSELF MEANS EXPONENTIAL",
          "tag": "the only questions left are the sign and the constants",
          "main": "d<i>N</i>/d<i>t</i> = <i>kN</i> ⇒ <i>N</i> = <i>N</i><sub>0</sub><i>e</i><sup>kt</sup>",
          "legend": [
            "<i>N</i><sub>0</sub> is the amount at <i>t</i> = 0, so it is fixed by the initial condition and nothing else",
            "<i>k</i> > 0 is growth and <i>k</i> < 0 is decay. Write decay as d<i>N</i>/d<i>t</i> = −<i>kN</i> with <i>k</i> > 0 and keep the minus visible, because a lost minus makes a decaying substance grow forever",
            "doubling time and half-life are both (ln 2)/|<i>k</i>|, which is why a single second data point is always enough to pin <i>k</i>"
          ],
          "note": "The derivation is one line of Topic 03: d<i>N</i>/<i>N</i> = <i>k</i> d<i>t</i>, integrate, exponentiate. Every model in this topic is separable or linear, so nothing new is being learned here except translation."
        },
        {
          "t": "formula",
          "kicker": "NEWTON'S LAW OF COOLING",
          "tag": "the rate tracks the gap, never the temperature",
          "main": "dθ/d<i>t</i> = −<i>k</i>(θ − θ<sub>s</sub>) ⇒ θ = θ<sub>s</sub> + (θ<sub>0</sub> − θ<sub>s</sub>)<i>e</i><sup>−kt</sup>",
          "legend": [
            "θ<sub>s</sub> is the surrounding temperature and θ<sub>0</sub> the initial temperature, so (θ<sub>0</sub> − θ<sub>s</sub>) is the <b>first gap</b> and everything after is that gap shrinking",
            "as <i>t</i> grows the exponential decays to zero, so θ settles at θ<sub>s</sub>. <b>Cooling has a floor</b>, and the floor is the room, not zero",
            "modelling dθ/d<i>t</i> proportional to θ instead of to the gap is the classic setup error and it makes the body cool past the room temperature and keep going"
          ],
          "note": "When the second time is a multiple of the first, never solve for <i>k</i>. Write <i>e</i><sup>−20k</sup> as the square of the known <i>e</i><sup>−10k</sup> and substitute the ratio directly. It saves a minute and removes the place a sign slip would hide."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · THE THREE CURVES EVERY APPLICATION DRAWS",
          "chips": ["growth", "decay", "cooling"],
          "captions": [
            "A culture that doubles every 4 hours. The dots are at 4, 8 and 12 hours, and the multiples are 2, 4 and 8. Eight is 2 cubed, so three doublings, so 12 hours: you can count that off without ever solving for k.",
            "Radioactive decay, with time measured in half-lives. After 1, 2 and 3 half-lives what remains is a half, a quarter and an eighth. A substance with a 1600 year half-life is at one eighth after 4800 years, and that is a counting question, not a calculus one.",
            "Cooling, drawn as the gap above the room as a fraction of the first gap, because that fraction is what decays exponentially. A body at 100 degrees in a 25 degree room reaching 70 after 10 minutes is at 52 after 20. The axis here is the room itself, and the curve approaches it and never crosses."
          ],
          "frames": [
            {
              "x": [0, 13],
              "y": [0, 9],
              "curves": [{ "c": "exp", "a": 0.1732868 }],
              "points": [
                { "x": 4, "y": 2, "label": "×2" },
                { "x": 8, "y": 4, "label": "×4" },
                { "x": 12, "y": 8, "label": "×8" }
              ],
              "labels": [{ "x": 3.6, "y": 7.9, "text": "doubles every 4 hours" }]
            },
            {
              "x": [0, 3.4],
              "y": [0, 1.15],
              "curves": [{ "c": "exp", "a": -0.6931472 }],
              "points": [
                { "x": 1, "y": 0.5, "label": "1/2" },
                { "x": 2, "y": 0.25, "label": "1/4" },
                { "x": 3, "y": 0.125, "label": "1/8" }
              ],
              "labels": [{ "x": 2.2, "y": 0.78, "text": "t in half-lives" }]
            },
            {
              "x": [0, 42],
              "y": [0, 1.15],
              "curves": [{ "c": "exp", "a": -0.0510826 }],
              "points": [
                { "x": 0, "y": 1, "label": "100 °C" },
                { "x": 10, "y": 0.6, "label": "70 °C" },
                { "x": 20, "y": 0.36, "label": "52 °C" }
              ],
              "labels": [{ "x": 31, "y": 0.14, "text": "room 25 °C: gap zero" }]
            }
          ]
        },
        {
          "t": "proc",
          "title": "Turn a word problem into an equation and solve it",
          "steps": [
            "<b>Underline the rate word</b> and what it is proportional to, before writing a single symbol. “Rate”, “proportional to”, “slope”, “subnormal”, “cuts at right angles” each map to one specific derivative condition.",
            "<b>Name the variables</b> and say what changes with respect to what: <i>N</i> with <i>t</i>, θ with <i>t</i>, <i>y</i> with <i>x</i>.",
            "<b>Write the equation and fix the sign</b> by asking whether the quantity rises or falls. Decay and cooling lose, so they carry a minus.",
            "<b>Solve it</b>, which for these models means separating and integrating. Nothing in this topic needs a technique from outside Topics 03 and 04.",
            "<b>Apply the conditions in order.</b> The initial value pins the leading constant; a second data point pins <i>k</i>. Do not try to pin both at once.",
            "<b>Answer the exact question asked</b>, a time or a temperature or a fraction or the equation of a curve, and sanity-check the limiting behaviour before you write the final line."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD PATTERN",
          "q": "A bacterial culture grows at a rate proportional to its size and doubles in 4 hours. How long until it is 8 times its original size?",
          "steps": [
            "Model: d<i>N</i>/d<i>t</i> = <i>kN</i>, so <i>N</i> = <i>N</i><sub>0</sub><i>e</i><sup>kt</sup>.",
            "Doubling fixes <i>k</i>: 2<i>N</i><sub>0</sub> = <i>N</i><sub>0</sub><i>e</i><sup>4k</sup>, so <i>e</i><sup>4k</sup> = 2 and <i>k</i> = (ln 2)/4.",
            "Now solve 8 = <i>e</i><sup>kt</sup>: <i>kt</i> = ln 8 = 3 ln 2, so <i>t</i> = 3 ln 2 divided by (ln 2)/4."
          ],
          "ans": "<i>t</i> = 12 hours. Sanity check without any calculus: 8 = 2<sup>3</sup>, so three doublings, and each takes 4 hours."
        },
        {
          "t": "ex",
          "tag": "CUET / JEE MAIN PATTERN",
          "q": "A radioactive substance has a half-life of 1600 years. What fraction remains after 4800 years?",
          "steps": [
            "Count half-lives instead of computing: 4800 divided by 1600 is 3.",
            "Each half-life halves the amount, so three of them give (1/2)<sup>3</sup>."
          ],
          "ans": "One eighth. <b>The trap is doing it properly:</b> setting up <i>N</i> = <i>N</i><sub>0</sub><i>e</i><sup>−kt</sup>, solving for <i>k</i>, substituting back. That is correct and slow, and it is where a sign slip lives. Reserve the full machinery for a non-integer number of half-lives, where the fraction is (1/2) raised to the power (elapsed time over half-life)."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "A body at 100 °C is placed in a room at 25 °C and cools to 70 °C in 10 minutes. Find its temperature after a further 10 minutes.",
          "steps": [
            "Model: dθ/d<i>t</i> = −<i>k</i>(θ − 25), so θ = 25 + 75<i>e</i><sup>−kt</sup>. The 75 is the first gap, 100 minus 25.",
            "At <i>t</i> = 10, θ = 70: 75<i>e</i><sup>−10k</sup> = 45, so <i>e</i><sup>−10k</sup> = 3/5.",
            "At <i>t</i> = 20 write <i>e</i><sup>−20k</sup> as (<i>e</i><sup>−10k</sup>)<sup>2</sup> = 9/25, and never solve for <i>k</i> at all.",
            "θ = 25 + 75 × 9/25 = 25 + 27."
          ],
          "ans": "52 °C. The squaring shortcut works whenever the second time is a whole multiple of the first, and it is worth reaching for every time, because it removes the logarithm and with it the place a sign error would hide."
        },
        {
          "t": "p",
          "html": "Now the geometric half of the topic, which JEE weights more heavily than the word problems. Every condition here is one sentence about the tangent or the normal at a general point, and every one of them becomes a first-order equation through the same small piece of coordinate geometry. Let <i>m</i> = d<i>y</i>/d<i>x</i> at a point <i>P</i> = (<i>x</i>, <i>y</i>) on the curve, and let <i>M</i> = (<i>x</i>, 0) be the foot of the ordinate. The tangent at <i>P</i> is <i>Y</i> − <i>y</i> = <i>m</i>(<i>X</i> − <i>x</i>); setting <i>Y</i> = 0 gives where it meets the <i>x</i>-axis, at <i>T</i> = (<i>x</i> − <i>y</i>/<i>m</i>, 0). The normal has slope −1/<i>m</i> and meets the axis at <i>N</i> = (<i>x</i> + <i>my</i>, 0). Everything else is read off that one picture."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · THE PICTURE EVERY GEOMETRIC CONDITION IS READ OFF",
          "chips": ["tangent", "normal", "the four lengths"],
          "captions": [
            "The tangent at P meets the x-axis at T. M is the foot of the ordinate, directly below P. The piece of the axis from T to M is the subtangent, and its length is the absolute value of y over m. On y equals x squared at the point (1, 1) the slope is 2, so the subtangent is one half.",
            "The normal at P has slope minus one over m and meets the axis at N. The piece from M to N is the subnormal, and its length is the absolute value of m times y. At the same point that is 2, four times the subtangent.",
            "Both together. PT is the length of the tangent and PN the length of the normal, and neither is the same thing as a subtangent or a subnormal. Here PT is root 5 over 2 and PN is root 5. Confusing a length with a sub-length is the single most expensive error in this topic."
          ],
          "frames": [
            {
              "x": [-0.3, 3.5],
              "y": [-0.75, 1.96],
              "curves": [{ "c": "poly", "coeffs": [0, 0, 1] }],
              "segments": [
                { "from": [0.5, 0], "to": [1.45, 1.9] },
                { "from": [1, 1], "to": [1, 0], "dash": true, "soft": true },
                { "from": [0.5, 0], "to": [1, 0], "label": "subtangent", "at": "below" }
              ],
              "points": [
                { "x": 1, "y": 1, "label": "P" },
                { "x": 0.5, "y": 0, "label": "T" },
                { "x": 1, "y": 0, "label": "M" }
              ],
              "labels": [{ "x": 2.7, "y": 1.5, "text": "y = f(x)" }]
            },
            {
              "x": [-0.3, 3.5],
              "y": [-0.75, 1.96],
              "curves": [{ "c": "poly", "coeffs": [0, 0, 1] }],
              "segments": [
                { "from": [1, 1], "to": [3, 0] },
                { "from": [1, 1], "to": [1, 0], "dash": true, "soft": true },
                { "from": [1, 0], "to": [3, 0], "label": "subnormal" }
              ],
              "points": [
                { "x": 1, "y": 1, "label": "P" },
                { "x": 1, "y": 0, "label": "M" },
                { "x": 3, "y": 0, "label": "N" }
              ],
              "labels": [{ "x": 2.7, "y": 1.5, "text": "slope −1/m" }]
            },
            {
              "x": [-0.3, 3.5],
              "y": [-0.75, 1.96],
              "curves": [{ "c": "poly", "coeffs": [0, 0, 1] }],
              "segments": [
                { "from": [0.5, 0], "to": [1.45, 1.9], "soft": true },
                { "from": [1, 1], "to": [3, 0], "soft": true },
                { "from": [1, 1], "to": [1, 0], "dash": true, "soft": true }
              ],
              "points": [
                { "x": 1, "y": 1, "label": "P" },
                { "x": 0.5, "y": 0, "label": "T" },
                { "x": 1, "y": 0, "label": "M" },
                { "x": 3, "y": 0, "label": "N" }
              ],
              "labels": [{ "x": 2.2, "y": 1.62, "text": "PT and PN" }]
            }
          ]
        },
        {
          "t": "defgrid",
          "title": "The geometric dictionary, all of it",
          "rows": [
            { "k": "Subtangent", "v": "|<i>y</i>/<i>m</i>|, the piece of the <i>x</i>-axis from <i>T</i> to <i>M</i>" },
            { "k": "Subnormal", "v": "|<i>my</i>|, the piece from <i>M</i> to <i>N</i>. Note it does <b>not</b> divide by <i>m</i>" },
            { "k": "Length of tangent", "v": "|<i>y</i>|√(1 + <i>m</i><sup>2</sup>)/|<i>m</i>|, the distance <i>PT</i> itself" },
            { "k": "Length of normal", "v": "|<i>y</i>|√(1 + <i>m</i><sup>2</sup>), the distance <i>PN</i>" },
            { "k": "Intercepts of the tangent", "v": "<i>x</i>-intercept <i>x</i> − <i>y</i>/<i>m</i>, <i>y</i>-intercept <i>y</i> − <i>mx</i>" },
            { "k": "Orthogonal trajectories", "v": "replace <i>m</i> by −1/<i>m</i> in the family's own equation, then solve" }
          ]
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Find the curve through (2, 3) such that the portion of the tangent between the axes is bisected at the point of contact.",
          "steps": [
            "“Bisected at the point of contact” means <i>P</i> is the <b>midpoint</b> of the two intercepts, so <i>x</i> = (1/2)(<i>x</i> − <i>y</i>/<i>m</i>) and <i>y</i> = (1/2)(<i>y</i> − <i>mx</i>).",
            "The first gives 2<i>x</i> = <i>x</i> − <i>y</i>/<i>m</i>, so <i>m</i> = −<i>y</i>/<i>x</i>. The second gives 2<i>y</i> = <i>y</i> − <i>mx</i>, which is the same statement, so there is one equation, not two.",
            "Separate: d<i>y</i>/<i>y</i> = −d<i>x</i>/<i>x</i>, giving <i>xy</i> = <i>C</i>.",
            "Through (2, 3): <i>C</i> = 6.",
            "Check: on <i>xy</i> = 6 at (2, 3), <i>m</i> = −3/2. The <i>x</i>-intercept is 2 − 3/(−3/2) = 4 and the <i>y</i>-intercept is 3 + 3 = 6, and the midpoint of (4, 0) and (0, 6) is (2, 3)."
          ],
          "ans": "<i>xy</i> = 6. Two geometric statements collapsing into one equation is normal and is not a sign that you dropped something."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "Find the curve through (2, 1) whose normal at every point passes through the fixed point (1, 0).",
          "steps": [
            "No standard quantity is named, so build the slope relation from the two-point formula. The normal joins <i>P</i> = (<i>x</i>, <i>y</i>) to (1, 0), so its slope is (0 − <i>y</i>)/(1 − <i>x</i>) = <i>y</i>/(<i>x</i> − 1).",
            "The normal's slope is also −1/<i>m</i>, so −1/<i>m</i> = <i>y</i>/(<i>x</i> − 1), giving <i>m</i> = (1 − <i>x</i>)/<i>y</i>.",
            "Separate: <i>y</i> d<i>y</i> = (1 − <i>x</i>) d<i>x</i>, so <i>y</i><sup>2</sup>/2 = <i>x</i> − <i>x</i><sup>2</sup>/2 + <i>c</i>, that is <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> = 2<i>x</i> + <i>C</i>.",
            "Through (2, 1): 4 + 1 = 4 + <i>C</i>, so <i>C</i> = 1."
          ],
          "ans": "<i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> = 2<i>x</i> + 1, a circle centred at (1, 0) with radius √2. That is exactly what geometry predicts, since every normal of a circle passes through its centre, and getting an answer you can check against theory is the closure Advanced rewards."
        },
        {
          "t": "p",
          "html": "The last condition is the one Advanced likes best. Two families are <b>orthogonal trajectories</b> of each other when every member of one crosses every member of the other at right angles. Right angles mean the two slopes multiply to −1, so the recipe is: form the first family's own differential equation, replace d<i>y</i>/d<i>x</i> by <b>−1 divided by d<i>y</i>/d<i>x</i></b>, and solve the result. It chains all three of Topic 02, this dictionary, and Topic 03 into one question, which is precisely why it gets set."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · TWO FAMILIES CROSSING AT RIGHT ANGLES",
          "chips": ["the parabolas", "the ellipses", "the crossing"],
          "captions": [
            "The family y equals Cx squared. Forming its own equation gives dy/dx equals 2y over x, with the constant eliminated.",
            "Replacing dy/dx by minus its reciprocal gives dy/dx equals minus x over 2y, which separates to x squared over 2 plus y squared equals a constant: a family of ellipses.",
            "The two families together, with one crossing marked. At the point (1, 1) the parabola has slope 2 and the ellipse has slope minus a half, and 2 times minus a half is minus 1. Every parabola meets every ellipse at 90 degrees."
          ],
          "frames": [
            {
              "x": [-2.6, 2.6],
              "y": [-1.85, 1.85],
              "curves": [
                { "c": "poly", "coeffs": [0, 0, 1] },
                { "c": "poly", "coeffs": [0, 0, 0.4], "soft": true },
                { "c": "poly", "coeffs": [0, 0, 2], "soft": true },
                { "c": "poly", "coeffs": [0, 0, -0.8], "soft": true }
              ],
              "labels": [{ "x": -1.65, "y": 1.6, "text": "y = Cx²" }]
            },
            {
              "x": [-2.6, 2.6],
              "y": [-1.85, 1.85],
              "curves": [
                { "c": "ellipse", "a": 1.732, "b": 1.2247 },
                { "c": "ellipse", "a": 1, "b": 0.7071, "soft": true },
                { "c": "ellipse", "a": 2.449, "b": 1.732, "soft": true }
              ],
              "labels": [{ "x": 0, "y": -1.65, "text": "x²/2 + y² = C" }]
            },
            {
              "x": [-2.6, 2.6],
              "y": [-1.85, 1.85],
              "curves": [
                { "c": "poly", "coeffs": [0, 0, 1] },
                { "c": "ellipse", "a": 1.732, "b": 1.2247 },
                { "c": "poly", "coeffs": [0, 0, 0.4], "soft": true },
                { "c": "ellipse", "a": 1, "b": 0.7071, "soft": true }
              ],
              "segments": [
                { "from": [0.72, 0.44], "to": [1.28, 1.56] },
                { "from": [0.6, 1.2], "to": [1.4, 0.8] }
              ],
              "points": [{ "x": 1, "y": 1, "label": "(1, 1)" }],
              "labels": [{ "x": -1.5, "y": 1.6, "text": "slopes 2 and −1/2" }]
            }
          ]
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "Find the orthogonal trajectories of the family of parabolas <i>y</i> = <i>Cx</i><sup>2</sup>.",
          "steps": [
            "<b>First form the family's own equation.</b> Differentiating gives d<i>y</i>/d<i>x</i> = 2<i>Cx</i>, and <i>C</i> = <i>y</i>/<i>x</i><sup>2</sup>, so d<i>y</i>/d<i>x</i> = 2<i>y</i>/<i>x</i>. The constant is gone, which is the whole of Topic 02 in one line.",
            "<b>Make the orthogonality swap.</b> Replace d<i>y</i>/d<i>x</i> by −1 over d<i>y</i>/d<i>x</i>, which turns the equation into d<i>y</i>/d<i>x</i> = −<i>x</i>/2<i>y</i>.",
            "Separate: 2<i>y</i> d<i>y</i> = −<i>x</i> d<i>x</i>.",
            "Integrate: <i>y</i><sup>2</sup> = −<i>x</i><sup>2</sup>/2 + <i>C</i><sub>1</sub>."
          ],
          "ans": "<i>x</i><sup>2</sup>/2 + <i>y</i><sup>2</sup> = <i>C</i><sub>1</sub>, a family of ellipses. Note the order of operations: form the equation <b>first</b>, and only then swap the slope. Swapping before eliminating the constant leaves a <i>C</i> in the answer and it is a very common way to lose the whole question."
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD PATTERN",
          "q": "Find the curve through (0, 1) whose subnormal at every point is constant and equal to 2.",
          "steps": [
            "Translate: subnormal = <i>my</i>, so the condition is <i>y</i> d<i>y</i>/d<i>x</i> = 2. No absolute value is needed here because the curve is being built, not measured.",
            "Separate: <i>y</i> d<i>y</i> = 2 d<i>x</i>.",
            "Integrate: <i>y</i><sup>2</sup>/2 = 2<i>x</i> + <i>c</i>, so <i>y</i><sup>2</sup> = 4<i>x</i> + <i>C</i>.",
            "Through (0, 1): 1 = 0 + <i>C</i>."
          ],
          "ans": "<i>y</i><sup>2</sup> = 4<i>x</i> + 1, a parabola. This is a general fact worth carrying: a constant subnormal always gives <i>y</i><sup>2</sup> = 2<i>ax</i> + <i>C</i>, a parabola, and the same equation turned up in Topic 05 as the perfect derivative (<i>yy</i>′)′ = 0."
        },
        {
          "t": "mcq",
          "q": "The differential equation d<i>N</i>/d<i>t</i> = <i>kN</i>, with <i>k</i> > 0, models:",
          "opts": [
            { "label": "exponential growth", "nudge": null },
            { "label": "exponential decay", "nudge": "Decay needs <i>k</i> < 0, or equivalently the equation written as d<i>N</i>/d<i>t</i> = −<i>kN</i> with a positive <i>k</i>. The sign is the entire difference between the two." },
            { "label": "linear growth", "nudge": "Linear growth is d<i>N</i>/d<i>t</i> = <i>k</i>, a constant rate that does not care how much is already there. Here the rate is proportional to <i>N</i> itself, which is a completely different behaviour." },
            { "label": "logistic growth", "nudge": "Logistic growth carries a carrying-capacity term, d<i>N</i>/d<i>t</i> = <i>kN</i>(1 − <i>N</i>/<i>M</i>), which slows the growth as <i>N</i> approaches <i>M</i>. There is no such term here, so nothing ever slows down." }
          ],
          "correct": 0,
          "solution": "Rate proportional to current size, with a positive constant, integrates to <i>N</i> = <i>N</i><sub>0</sub><i>e</i><sup>kt</sup>: unbounded exponential growth. Reading the sign of <i>k</i> is the whole question."
        },
        {
          "t": "mcq",
          "q": "If the subnormal of a curve is constant at every point, the curve is a:",
          "opts": [
            { "label": "parabola", "nudge": null },
            { "label": "circle", "nudge": "A circle comes from a constant <b>length of normal</b>, |<i>y</i>|√(1 + <i>m</i><sup>2</sup>), which is a different quantity. Confusing a length with a sub-length is exactly what this option is for." },
            { "label": "straight line", "nudge": "A straight line comes from a constant <b>slope</b>, d<i>y</i>/d<i>x</i> = <i>k</i>. The subnormal is <i>my</i>, and holding that fixed lets the slope vary as <i>y</i> changes." },
            { "label": "rectangular hyperbola", "nudge": "<i>xy</i> = <i>c</i> comes from the tangent-intercept condition of the worked example above, and has nothing to do with the subnormal." }
          ],
          "correct": 0,
          "solution": "Subnormal = <i>y</i> d<i>y</i>/d<i>x</i> = <i>a</i>, a constant. Separating gives <i>y</i> d<i>y</i> = <i>a</i> d<i>x</i>, so <i>y</i><sup>2</sup> = 2<i>ax</i> + <i>C</i>, which is a parabola for every nonzero <i>a</i>."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "A population grows at a rate proportional to its size and triples in 5 years. When will it be 9 times the original?",
              "a": "10 years. 9 = 3<sup>2</sup>, so two triplings, and each takes 5 years. Counting beats solving for <i>k</i> whenever the multiple is a whole power of the given one."
            },
            {
              "q": "Water at 80 °C is kept in a room at 20 °C and cools to 50 °C in 5 minutes. Find its temperature after 10 minutes.",
              "a": "35 °C. The first gap is 60, so θ = 20 + 60<i>e</i><sup>−kt</sup>. At 5 minutes 60<i>e</i><sup>−5k</sup> = 30, so <i>e</i><sup>−5k</sup> = 1/2. At 10 minutes the factor is (1/2)<sup>2</sup> = 1/4, giving 20 + 15."
            },
            {
              "q": "Find the curve passing through (1, 2) whose slope at every point equals <i>y</i>/<i>x</i>.",
              "a": "<i>y</i> = 2<i>x</i>. Separating gives ln|<i>y</i>| = ln|<i>x</i>| + ln <i>C</i>, so <i>y</i> = <i>Cx</i>, and the point forces <i>C</i> = 2. This is Topic 02's opening family arrived at from the solving side."
            },
            {
              "q": "Find the curve through (2, 3) whose subnormal is constantly 4.",
              "a": "<i>y</i><sup>2</sup> = 8<i>x</i> − 7. From <i>y</i> d<i>y</i>/d<i>x</i> = 4 you get <i>y</i><sup>2</sup> = 8<i>x</i> + <i>C</i>, and the point gives 9 = 16 + <i>C</i>, so <i>C</i> = −7."
            },
            {
              "q": "Show that a curve whose subtangent is a constant <i>a</i> > 0 is an exponential curve, and find it.",
              "a": "<i>y</i> = <i>C</i> exp(<i>x</i>/<i>a</i>). The condition <i>y</i>/<i>m</i> = <i>a</i> rearranges to d<i>y</i>/<i>y</i> = d<i>x</i>/<i>a</i>, which integrates to ln|<i>y</i>| = <i>x</i>/<i>a</i> + <i>c</i>. Constant subtangent and constant subnormal give completely different curves, which is why the two words must never be swapped."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "Getting the sign of <i>k</i> wrong. Decay and cooling <b>lose</b> quantity, so write d<i>N</i>/d<i>t</i> = −<i>kN</i> and dθ/d<i>t</i> = −<i>k</i>(θ − θ<sub>s</sub>) with a positive <i>k</i>. A slip here makes a cooling body heat up forever.",
            "Modelling cooling on the temperature instead of the gap. The rate is proportional to (θ − θ<sub>s</sub>), never to θ. This is the classic setup error and it costs the whole question, not a mark.",
            "Solving for <i>k</i> when you do not need to. If the second time is a multiple of the first, write <i>e</i><sup>−20k</sup> as (<i>e</i><sup>−10k</sup>)<sup>2</sup> and substitute the known ratio.",
            "Confusing a length with a sub-length. Subnormal is |<i>my</i>| and the length of the normal is |<i>y</i>|√(1 + <i>m</i><sup>2</sup>). They agree only when <i>m</i> = 0, which is never the case in a question.",
            "Swapping the slope before eliminating the constant. In an orthogonal-trajectory question you must form the family's own equation first. Swap too early and an arbitrary constant survives into the answer."
          ]
        },
        {
          "t": "protip",
          "html": "for growth and decay over a whole number of doublings or half-lives, count instead of computing. eight times means three doublings, a quarter left means two half-lives. seconds instead of minutes, and no place for a sign to hide. keep the full e to the kt machinery for the awkward ratios that are not whole powers."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "d<i>N</i>/d<i>t</i> = <i>kN</i> ⇒ <i>N</i> = <i>N</i><sub>0</sub><i>e</i><sup>kt</sup>", "note": "half-life and doubling time are both ln 2 over the size of k" },
            { "f": "dθ/d<i>t</i> = −<i>k</i>(θ − θ<sub>s</sub>) ⇒ θ = θ<sub>s</sub> + (θ<sub>0</sub> − θ<sub>s</sub>)<i>e</i><sup>−kt</sup>", "note": "the gap decays, and the room is the floor" },
            { "f": "subtangent = |<i>y</i>/<i>m</i>|  ·  subnormal = |<i>my</i>|", "note": "one divides by the slope, the other multiplies" },
            { "f": "length of tangent = |<i>y</i>|√(1 + <i>m</i><sup>2</sup>)/|<i>m</i>|, length of normal = |<i>y</i>|√(1 + <i>m</i><sup>2</sup>)", "note": "the actual distances PT and PN, not the axis pieces" },
            { "f": "orthogonal: form the equation, then replace <i>m</i> by −1/<i>m</i>", "note": "in that order, or a constant survives" }
          ],
          "aids": [
            "proportional to itself means exponential",
            "cooling tracks the gap, not the heat",
            "lose means minus k",
            "right angles means negative reciprocal slope"
          ]
        }
      ]
    }
  ]
};

export default ch12DifferentialEquations;
