/**
 * Chapter 09 · Straight Lines. Mathematics, Class 11.
 *
 * Restructured from pages 684 to 779 of the Drona Class 11 Mathematics Master
 * Reference into the block system in design_handoff_textbooks/CONTENT_SPEC.md,
 * following math-11-01-sets.ts and math-11-03-trigonometry.ts for voice and
 * density.
 *
 * The source is three documents stacked: a typeset chapter of seven subtopics
 * (00 to 06), a Round 1 supplement (subtopic 07, triangle centres, plus four
 * lettered problem patterns) and a Round 2 addendum (patterns 5 and 6 plus
 * subtopic 08, pair of straight lines). Six topics is the schema's ceiling, so
 * the supplementary material is folded into the topic it actually belongs to
 * rather than given topics of its own:
 *
 *   - Pattern 4 (shifting the origin inside an equation) and Pattern 5 (locus
 *     by introducing and eliminating a parameter) sit inside Topic 01, which is
 *     where the source's own translation and locus machinery lives.
 *   - Pattern 1 Case A (the triangle a line cuts off with the axes) sits inside
 *     Topic 03, since it is read straight off the intercepts.
 *   - Pattern 3 (the side test and the ratio in which a line divides a segment)
 *     sits inside Topic 04 next to the signed distance it is built from, and
 *     subtopic 05 (angle bisectors) joins it there: a bisector is the locus of
 *     points equidistant from two lines, which is the distance formula with the
 *     moduli removed.
 *   - Pattern 1 Case B (area from three lines), Pattern 2 (the fixed point of a
 *     one-parameter family) and subtopic 07 (triangle centres) sit inside Topic
 *     05. The supplement says outright that every triangle centre is a
 *     concurrency statement, so concurrency is its home.
 *   - Pattern 6 (the substitution map and the parallel mirror) sits inside
 *     Topic 06, which it extends and partly corrects.
 *
 * One deliberate omission. Subtopic 08, pair of straight lines, is dropped. The
 * source itself labels it optional for a Boards-only reader, says it appears
 * nowhere in NCERT Class 11 Chapter 9 and that CBSE does not set it, and it
 * carries its own machinery (the 3 × 3 degeneracy determinant, homogenisation,
 * the bisector pair in coefficient form) that would need a topic of its own.
 * Carrying it would thin all six core topics to fit.
 *
 * Three corrections to the source, all arithmetic, all verified here:
 *
 *   1. Subtopic 00, Practice 5. The locus of a point equidistant from A(3, 2)
 *      and B(−1, 4) is 2x − y + 1 = 0, not 2x − y − 1 = 0. The midpoint of AB
 *      is (1, 3), which the printed answer does not satisfy.
 *   2. Subtopic 01, Practice 3. The line through (p, 4) and (2, −3) is parallel
 *      to the line through (0, 0) and (7, 14), slope 2, when p = 11/2, not
 *      p = −3.
 *   3. Subtopic 05, Practice 3. For 3x − 4y + 1 = 0 and 12x + 5y − 2 = 0 the
 *      second constant is negative and must be flipped first, after which
 *      a₁a₂ + b₁b₂ = −36 + 20 = −16 < 0, so the origin lies in the ACUTE angle,
 *      not the obtuse one. Checked independently against the bisector slopes.
 *
 * The exam hook is authored once, on topic 1, with a bold heading per topic,
 * because the reader renders `hook` only there. Same convention, and the same
 * reason, as the Sets and Trigonometry chapters.
 *
 * Eight `diagram` blocks, all of kind `plot`, which is the figure this chapter
 * was waiting for: `line` and `vline` curves, `points` for intercepts and
 * junctions, dashed `segments` for perpendicular drops and construction lines,
 * and a staircase of `bands` for the half-plane a sign test picks out. Diagram
 * chips and captions render as plain text, not markup, so they carry no inline
 * tags.
 */
import type { Chapter } from '@/lib/textbooks';

export const ch09StraightLines: Chapter = {
  "chapter": "09",
  "title": "Straight Lines",
  "subject": "Mathematics",
  "klass": "Class 11",
  "topics": [
    {
      "n": "01",
      "title": "Points, Sections and Locus",
      "chip": "01 POINTS",
      "kalam": "the plane is a spreadsheet with two columns",
      "blocks": [
        {
          "t": "hook",
          "html": "<b>01 · Points, Sections and Locus</b><br>The load-bearing prerequisites for the whole chapter, and every later result quietly uses them. CBSE asks the section formula, the midpoint and the area of a triangle directly, 2–3 marks. JEE Main reliably carries one question on area, collinearity or the centroid. JEE Advanced uses the <b>locus method</b> and <b>translation of axes</b> as setup machinery inside harder problems, and JEE Main names “locus and its equation” as its own syllabus line item. Master these cold and the rest of Straight Lines becomes bookkeeping.<br><br><b>02 · Slope, Inclination and the Angle Between Two Lines</b><br>Slope is the single most-used idea in all of coordinate geometry, so it turns up everywhere. CBSE Class 11 finals lean on the inclination–slope link and the parallel and perpendicular conditions for 2–4 marks. JEE Main almost always has a question riding on the angle-between-lines formula or on a collinearity or perpendicularity condition. JEE Advanced folds slope into locus and multi-line problems where <b>the vertical-line edge case is the whole trap</b>.<br><br><b>03 · Writing the Equation of a Line</b><br>The engine room: every later result rides on writing a line's equation correctly. CBSE reliably asks 2–4 marks on point-slope, intercept form, or “reduce to a given form”. JEE Main almost guarantees a question on extracting the slope and intercepts from <i>Ax</i> + <i>By</i> + <i>C</i> = 0, or on the normal form. JEE Advanced rarely tests a form in isolation but uses these as the substrate for locus, family-of-lines and triangle problems, and <b>quietly punishes the sign errors that creep into the normal form</b>.<br><br><b>04 · Distance, Side and Angle Bisectors</b><br>A perennial favourite because it is short to ask and easy to trap. CBSE carries a 2–3 mark direct distance computation almost every year. JEE Main reliably has one question on the distance of a point from a line or between two parallel lines, <b>usually with a normalisation trap baked in</b>. JEE Advanced uses the symmetric form to reach intersection points and to set up loci. Bisectors are rare on CBSE but a reliable JEE topic, and the examined skill is never writing the two equations, it is <b>identifying which is which</b>.<br><br><b>05 · Intersection, Concurrency and Triangle Centres</b><br>A JEE staple. CBSE may ask the intersection point or a simple concurrency check for 3–4 marks. JEE Main almost always carries a concurrency or family-of-lines question, and JEE Advanced loves <i>L</i><sub>1</sub> + λ<i>L</i><sub>2</sub> = 0, which writes a line through an intersection <b>without ever finding the intersection</b>. Triangle centres are a named block in both JEE syllabi: Main lists the centroid, orthocentre and circumcentre, Advanced adds the incentre, and CBSE sets 3–4 mark circumcentre and missing-vertex problems.<br><br><b>06 · Foot of Perpendicular, Image and Reflection</b><br>A high-frequency JEE topic and a CBSE favourite for 3–4 mark “find the image of the point” problems. JEE Main tests the image and foot formulas directly. JEE Advanced embeds them in reflection-of-a-line, shortest-path and optics-style problems. The reflection-in-<i>y</i> = <i>x</i> shortcut also appears constantly in functions and inverse-function questions, so it pays off well beyond this chapter."
        },
        {
          "t": "p",
          "html": "Before you can talk about lines you have to be fluent with <b>points</b>: how far apart they are, how to split the gap between them, how much area they enclose, and how to describe a moving point by the rule it obeys. Think of this topic as learning the grammar before writing sentences."
        },
        {
          "t": "p",
          "html": "The coordinate plane turns geometry into arithmetic, and that is Descartes' one great idea. Give every point an address, two numbers, and a geometric question becomes a calculation. “How far is Jaipur from Delhi on the map?” becomes a subtraction and a square root. “Where is the dhaba exactly one third of the way along the highway?” becomes the section formula. “Do these three survey markers lie on one straight boundary?” becomes “is the area of their triangle zero?”"
        },
        {
          "t": "p",
          "html": "The distance formula is Pythagoras wearing coordinates. Take <i>A</i>(<i>x</i><sub>1</sub>, <i>y</i><sub>1</sub>) and <i>B</i>(<i>x</i><sub>2</sub>, <i>y</i><sub>2</sub>), draw the horizontal through <i>A</i> and the vertical through <i>B</i>, and you have a right triangle whose legs are <i>x</i><sub>2</sub> − <i>x</i><sub>1</sub> and <i>y</i><sub>2</sub> − <i>y</i><sub>1</sub>. The segment <i>AB</i> is its hypotenuse, so <i>AB</i><sup>2</sup> is the sum of the two squares. Both legs get squared, which is why the order of the two points never matters."
        },
        {
          "t": "p",
          "html": "The <b>section formula</b> answers the next natural question: not how long the segment is, but where a given fraction along it lands. A point dividing <i>AB</i> in the ratio <i>m</i> : <i>n</i> is a weighted average of the two ends, and the weights are crossed over: the far end <i>B</i> is weighted by <i>m</i>, the near end <i>A</i> by <i>n</i>. Internal division uses <i>m</i> + <i>n</i> underneath. <b>External</b> division, where the point lands outside the segment, uses <i>m</i> − <i>n</i>, which blows up when <i>m</i> = <i>n</i>: you cannot divide a segment externally in the ratio 1 : 1, because that point has run off to infinity."
        },
        {
          "t": "think",
          "html": "the plane is a spreadsheet with two columns. once you accept that, every “prove that” in geometry becomes a “compute this” in algebra, and computing is something you can drill."
        },
        {
          "t": "def",
          "term": "Locus",
          "html": "The path traced by a point that obeys a rule. A goat tied to a peg by a 5 m rope traces a circle, and the rule is “stay 5 m from the peg”. A point kept equidistant from two villages traces the perpendicular bisector of the line joining them, which is a straight line. The <b>equation</b> of a locus is the relation <i>x</i>, <i>y</i> must satisfy for the rule to hold, and almost every “find the path of a point such that…” problem is a locus problem in disguise."
        },
        {
          "t": "def",
          "term": "Collinear points",
          "html": "Three points lie on one straight line exactly when the triangle they span has <b>zero area</b>. That is not a failure of the area formula, it is the most useful thing the formula does: it turns a geometric claim into a single arithmetic check that never divides by anything."
        },
        {
          "t": "defgrid",
          "title": "The five point formulas",
          "rows": [
            {
              "k": "Distance <i>AB</i>",
              "v": "√((<i>x</i><sub>2</sub> − <i>x</i><sub>1</sub>)<sup>2</sup> + (<i>y</i><sub>2</sub> − <i>y</i><sub>1</sub>)<sup>2</sup>)"
            },
            {
              "k": "Section, internal <i>m</i> : <i>n</i>",
              "v": "((<i>mx</i><sub>2</sub> + <i>nx</i><sub>1</sub>)/(<i>m</i> + <i>n</i>), (<i>my</i><sub>2</sub> + <i>ny</i><sub>1</sub>)/(<i>m</i> + <i>n</i>))"
            },
            {
              "k": "Section, external <i>m</i> : <i>n</i>",
              "v": "the same with minus signs, over <i>m</i> − <i>n</i>. Undefined at <i>m</i> = <i>n</i>"
            },
            {
              "k": "Midpoint",
              "v": "((<i>x</i><sub>1</sub> + <i>x</i><sub>2</sub>)/2, (<i>y</i><sub>1</sub> + <i>y</i><sub>2</sub>)/2), the 1 : 1 case"
            },
            {
              "k": "Centroid of △<i>ABC</i>",
              "v": "((<i>x</i><sub>1</sub> + <i>x</i><sub>2</sub> + <i>x</i><sub>3</sub>)/3, (<i>y</i><sub>1</sub> + <i>y</i><sub>2</sub> + <i>y</i><sub>3</sub>)/3), the plain average"
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "AREA, AND THE COLLINEARITY TEST",
          "tag": "one determinant, no slopes",
          "main": "Δ = ½ |<i>x</i><sub>1</sub>(<i>y</i><sub>2</sub> − <i>y</i><sub>3</sub>) + <i>x</i><sub>2</sub>(<i>y</i><sub>3</sub> − <i>y</i><sub>1</sub>) + <i>x</i><sub>3</sub>(<i>y</i><sub>1</sub> − <i>y</i><sub>2</sub>)|",
          "legend": [
            "the modulus removes orientation: labelling the vertices the other way round returns the same number with a minus in front",
            "Δ = 0 ⟺ <i>A</i>, <i>B</i>, <i>C</i> are collinear, and that equivalence is a tool, not a warning"
          ],
          "note": "Prefer this to comparing three slopes. It is one computation, it never divides by zero so a vertical side costs you nothing, and the modulus shields you from sign errors."
        },
        {
          "t": "formula",
          "kicker": "TRANSLATION OF AXES",
          "tag": "the origin moves, the axes never turn",
          "main": "<i>X</i> = <i>x</i> − <i>h</i> · <i>Y</i> = <i>y</i> − <i>k</i>",
          "legend": [
            "to rewrite an <i>equation</i> in the new frame you need the substitution the other way: <i>x</i> = <i>X</i> + <i>h</i>, <i>y</i> = <i>Y</i> + <i>k</i>",
            "on a line only the constant term changes, so the slope is untouched, and that new constant vanishes exactly when the new origin lies on the line"
          ],
          "note": "New equals old minus shift. On a second-degree curve you can choose <i>h</i> and <i>k</i> to kill both first-degree terms, which is how a shifted conic is put into standard position before any real work starts."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "DIAGRAM · SPLITTING A SEGMENT, AND THE FLAT TRIANGLE",
          "chips": ["Midpoint", "Internal 2 : 1", "External 3 : 1", "Area zero"],
          "captions": [
            "A(0, 0) and B(6, 3). The midpoint is the 1 : 1 case of the section formula, so it is just the average of the two ends: (3, 1.5). Nothing is weighted, so nothing can be weighted the wrong way round.",
            "P divides AB internally in the ratio 2 : 1 measured from A, so P is two thirds of the way along. The far end B carries the weight 2 and the near end A carries 1: P = ((2 times 6 + 1 times 0)/3, (2 times 3 + 1 times 0)/3) = (4, 2). The weights are crossed over, and that crossing is what students reverse.",
            "External division in 3 : 1 puts the point outside the segment, beyond B, and the denominator becomes 3 − 1 = 2 instead of 3 + 1 = 4. Here P' = (9, 4.5). At a ratio of 1 : 1 the denominator would be zero: there is no external midpoint.",
            "A, M and B lie on one line, so the triangle they span is flat and the area determinant returns exactly 0. Move one vertex off the line, to C(2, 3), and the dashed triangle has genuine area. That is the whole collinearity test: compute the area, and read the answer off zero."
          ],
          "frames": [
            {
              "x": [-3, 10],
              "y": [-2, 6.5],
              "curves": [{ "c": "line", "m": 0.5, "k": 0, "soft": true }],
              "points": [
                { "x": 0, "y": 0, "label": "A" },
                { "x": 6, "y": 3, "label": "B" },
                { "x": 3, "y": 1.5, "label": "M(3, 1.5)" }
              ]
            },
            {
              "x": [-3, 10],
              "y": [-2, 6.5],
              "curves": [{ "c": "line", "m": 0.5, "k": 0, "soft": true }],
              "points": [
                { "x": 0, "y": 0, "label": "A" },
                { "x": 6, "y": 3, "label": "B" },
                { "x": 4, "y": 2, "label": "P(4, 2)" }
              ]
            },
            {
              "x": [-3, 10],
              "y": [-2, 6.5],
              "curves": [{ "c": "line", "m": 0.5, "k": 0, "soft": true }],
              "points": [
                { "x": 0, "y": 0, "label": "A" },
                { "x": 6, "y": 3, "label": "B" },
                { "x": 9, "y": 4.5, "label": "P′(9, 4.5)" }
              ]
            },
            {
              "x": [-3, 10],
              "y": [-2, 6.5],
              "curves": [{ "c": "line", "m": 0.5, "k": 0, "soft": true }],
              "points": [
                { "x": 0, "y": 0, "label": "A" },
                { "x": 3, "y": 1.5, "label": "M" },
                { "x": 6, "y": 3, "label": "B" },
                { "x": 2, "y": 3, "label": "C" }
              ],
              "segments": [
                { "from": [0, 0], "to": [2, 3], "dash": true },
                { "from": [2, 3], "to": [6, 3], "dash": true }
              ]
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE SECTION FORMULA, TAP A LINE",
          "steps": [
            {
              "eq": "<i>AP</i> : <i>PB</i> = <i>m</i> : <i>n</i>",
              "why": "P sits on the segment and cuts it in the given ratio. Everything below is that one sentence projected onto the x-axis."
            },
            {
              "eq": "drop <i>AL</i>, <i>PM</i>, <i>BN</i> perpendicular to the <i>x</i>-axis",
              "why": "The three feet L, M, N carry the x-coordinates x₁, x_P and x₂. The three perpendiculars are parallel to one another, so they cut the segment AB proportionally."
            },
            {
              "eq": "(<i>x</i><sub>P</sub> − <i>x</i><sub>1</sub>)/(<i>x</i><sub>2</sub> − <i>x</i><sub>P</sub>) = <i>m</i>/<i>n</i>",
              "why": "Similar triangles: the ratio measured along AB is copied exactly onto the ratio measured along the axis. This is the only geometric input in the whole proof."
            },
            {
              "eq": "<i>n</i>(<i>x</i><sub>P</sub> − <i>x</i><sub>1</sub>) = <i>m</i>(<i>x</i><sub>2</sub> − <i>x</i><sub>P</sub>)",
              "why": "Cross-multiply. Nothing geometric happens from here on, it is bookkeeping."
            },
            {
              "eq": "<i>x</i><sub>P</sub>(<i>m</i> + <i>n</i>) = <i>mx</i><sub>2</sub> + <i>nx</i><sub>1</sub>",
              "why": "Collect x_P on one side. The m + n in the denominator is born right here, which is why internal division adds: both pieces of the segment are being counted."
            },
            {
              "eq": "<i>x</i><sub>P</sub> = (<i>mx</i><sub>2</sub> + <i>nx</i><sub>1</sub>)/(<i>m</i> + <i>n</i>), and identically for <i>y</i>",
              "why": "The y-argument is the same argument with the perpendiculars dropped to the y-axis instead. For external division P lies outside the segment, one of the two directed lengths turns negative, and m + n becomes m − n."
            }
          ]
        },
        {
          "t": "proc",
          "title": "Finding the equation of a locus",
          "steps": [
            "<b>Name the moving point <i>P</i>(<i>h</i>, <i>k</i>).</b> Never (<i>x</i>, <i>y</i>): you need those two letters free to mean “any point” while you work, and reusing them is how students end up solving for the wrong unknowns.",
            "<b>Name the parameter, if the rule hides one.</b> Ask what single number decides which member of the family you are looking at. It is almost always the slope <i>m</i> of a variable line, one of its intercepts <i>a</i> or <i>b</i>, an inclination θ, or one auxiliary point that is itself constrained.",
            "<b>Write <i>h</i> and <i>k</i> in terms of it</b>, using whatever the configuration hands you: the section formula, the midpoint, the intercept form. If the moving point is a midpoint, invert at once. The intercepts are <i>twice</i> the midpoint's coordinates, never equal to them.",
            "<b>Write the constraint</b> the parameter must obey: the fixed point the line passes through, the fixed length of the sliding rod, the fixed sum of distances.",
            "<b>Eliminate the parameter.</b> Solve and substitute when it appears polynomially. Square and add when it enters as cos θ and sin θ, so that cos<sup>2</sup>θ + sin<sup>2</sup>θ = 1 does the work in one line. Add or subtract when it enters the two expressions symmetrically and cancels.",
            "<b>Replace (<i>h</i>, <i>k</i>) by (<i>x</i>, <i>y</i>)</b> and state any restriction, because the locus is often only part of the curve you have written. If the parameter is still on the page you have described a family of curves, not a path, and a correct calculation scores zero."
          ]
        },
        {
          "t": "p",
          "html": "One habit costs ten seconds and rescues whole questions: <b>test a single member</b>. Pick the easiest line of the family, compute the point it produces, and feed that point back into your answer. It catches the factor-of-two error that comes from confusing a midpoint with an intercept, and it catches any extra branch that squaring may have quietly added."
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Find the centroid of the triangle with vertices <i>A</i>(2, −3), <i>B</i>(−4, 5), <i>C</i>(8, 1).",
          "steps": [
            "The centroid is the plain average of the three vertices, no weights involved.",
            "<i>G</i> = ((2 − 4 + 8)/3, (−3 + 5 + 1)/3) = (6/3, 3/3)."
          ],
          "ans": "G = (2, 1)"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Are the points (1, 4), (3, −2) and (−3, 16) collinear?",
          "steps": [
            "Do not compute three slopes and risk a sign error in each. Use area = 0 as a one-shot test.",
            "2Δ = |1(−2 − 16) + 3(16 − 4) + (−3)(4 − (−2))| = |−18 + 36 − 18| = 0.",
            "The area is zero, so the three points lie on one line. The determinant does in one line what the slope comparison does in three, and the modulus removes the orientation question entirely."
          ],
          "ans": "Collinear"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "Find the locus of a point whose distance from (4, 0) is always twice its distance from (1, 0).",
          "steps": [
            "Let the moving point be <i>P</i>(<i>h</i>, <i>k</i>). The rule <i>PA</i> = 2<i>PB</i> squares to (<i>h</i> − 4)<sup>2</sup> + <i>k</i><sup>2</sup> = 4[(<i>h</i> − 1)<sup>2</sup> + <i>k</i><sup>2</sup>].",
            "Expand: <i>h</i><sup>2</sup> − 8<i>h</i> + 16 + <i>k</i><sup>2</sup> = 4<i>h</i><sup>2</sup> − 8<i>h</i> + 4 + 4<i>k</i><sup>2</sup>, so 0 = 3<i>h</i><sup>2</sup> + 3<i>k</i><sup>2</sup> − 12.",
            "Hence <i>h</i><sup>2</sup> + <i>k</i><sup>2</sup> = 4. Replace (<i>h</i>, <i>k</i>) by (<i>x</i>, <i>y</i>). Note how the linear −8<i>h</i> terms cancelled: that cancellation is the signature of an Apollonius locus, and spotting it early saves the algebra."
          ],
          "ans": "x² + y² = 4, a circle of radius 2 at the origin"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "A variable line through <i>R</i>(3, 4) meets the positive <i>x</i>-axis at <i>A</i> and the positive <i>y</i>-axis at <i>B</i>. Find the locus of the midpoint of <i>AB</i>.",
          "steps": [
            "Let the midpoint be <i>P</i>(<i>h</i>, <i>k</i>) and let the line have intercepts <i>a</i> and <i>b</i>, so <i>A</i> = (<i>a</i>, 0) and <i>B</i> = (0, <i>b</i>). The intercepts are the better parameters here because the midpoint is built directly out of them.",
            "Midpoint: <i>h</i> = <i>a</i>/2 and <i>k</i> = <i>b</i>/2, so <b><i>a</i> = 2<i>h</i> and <i>b</i> = 2<i>k</i></b>. Read that aloud: the intercepts are twice the midpoint's coordinates.",
            "Constraint: in intercept form the line is <i>x</i>/<i>a</i> + <i>y</i>/<i>b</i> = 1 and it passes through (3, 4), so 3/<i>a</i> + 4/<i>b</i> = 1.",
            "Substitute: 3/(2<i>h</i>) + 4/(2<i>k</i>) = 1, that is 3/<i>h</i> + 4/<i>k</i> = 2. Restore (<i>x</i>, <i>y</i>) and clear fractions. Test one member: the line <i>x</i> + <i>y</i> = 7 through <i>R</i> gives midpoint (7/2, 7/2), and 6/7 + 8/7 = 2. Correct."
          ],
          "ans": "4x + 3y = 2xy, for x > 0 and y > 0"
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Find the distance between (−2, 5) and (4, −3).",
              "a": "√((4 + 2)² + (−3 − 5)²) = √(36 + 64) = √100 = 10."
            },
            {
              "q": "[JEE Main] Find the area of the triangle with vertices (0, 0), (4, 0), (0, 6), and state whether (2, 3), (4, 6), (6, 9) are collinear.",
              "a": "Δ = ½|0(0 − 6) + 4(6 − 0) + 0(0 − 0)| = 12 square units. For the second set, 2Δ = |2(6 − 9) + 4(9 − 3) + 6(3 − 6)| = |−6 + 24 − 18| = 0, so yes, collinear."
            },
            {
              "q": "[JEE Main] The point (2, k) divides the segment from (0, 0) to (6, 9) internally in some ratio. Find that ratio and k.",
              "a": "2 = 6m/(m + n) gives m/(m + n) = 1/3, so m : n = 1 : 2. Then k = 9m/(m + n) = 9/3 = 3."
            },
            {
              "q": "[JEE Advanced] Find the locus of a point equidistant from A(3, 2) and B(−1, 4).",
              "a": "PA² = PB² gives x² + y² − 6x − 4y + 13 = x² + y² + 2x − 8y + 17, so −8x + 4y − 4 = 0, that is 2x − y + 1 = 0. Check: the midpoint of AB is (1, 3) and 2 − 3 + 1 = 0, and the slope 2 is the negative reciprocal of slope(AB) = −1/2. It is the perpendicular bisector, as a locus of equidistance must be."
            },
            {
              "q": "[JEE Advanced] A rod of length 10 slides with one end on the x-axis and the other on the y-axis. Find the locus of its midpoint.",
              "a": "Ends A(a, 0) and B(0, b) with a² + b² = 100. The midpoint gives a = 2h and b = 2k, so 4h² + 4k² = 100 and the locus is x² + y² = 25, a circle of radius 5 at the origin. Sanity check: the midpoint of the hypotenuse of a right triangle is always its circumcentre, so it sits at half the hypotenuse from the right-angle corner, whatever the rod's tilt."
            }
          ]
        },
        {
          "t": "mcq",
          "q": "The midpoint of the segment joining (<i>a</i>, <i>b</i>) and (3<i>a</i>, −<i>b</i>) is:",
          "correct": 0,
          "opts": [
            { "label": "(2<i>a</i>, 0)", "nudge": null },
            { "label": "(2<i>a</i>, <i>b</i>)", "nudge": "The x is right, so the slip is in y alone: b + (−b) = 0, and half of 0 is 0. The y-coordinates cancel completely." },
            { "label": "(<i>a</i>, 0)", "nudge": "This averaged only one of the two x-terms. (a + 3a)/2 is 2a, not a." },
            { "label": "(4<i>a</i>, 0)", "nudge": "This added the two x-coordinates and forgot to halve them. A midpoint is an average, not a sum." }
          ],
          "solution": "((a + 3a)/2, (b − b)/2) = (4a/2, 0) = (2a, 0)."
        },
        {
          "t": "mcq",
          "q": "The point (2, <i>k</i>) divides the segment from <i>O</i>(0, 0) to <i>B</i>(6, 9) internally. The ratio and <i>k</i> are:",
          "correct": 0,
          "opts": [
            { "label": "1 : 2 and <i>k</i> = 3", "nudge": null },
            { "label": "2 : 1 and <i>k</i> = 6", "nudge": "This measures the ratio from B instead of from O. 2 : 1 from O is the point (4, 6), and its x is 4, not 2." },
            { "label": "1 : 2 and <i>k</i> = 6", "nudge": "The ratio is right but k is taken from the wrong point. 2 is one third of 6, so k must be one third of 9." },
            { "label": "1 : 3 and <i>k</i> = 3", "nudge": "This counts the parts wrongly. (2, k) is one part out of three along the whole segment, so the two pieces are 1 and 2, not 1 and 3." }
          ],
          "solution": "2 = (m·6 + n·0)/(m + n) gives 6m = 2m + 2n, so m : n = 1 : 2. Then k = 9m/(m + n) = 9/3 = 3."
        },
        {
          "t": "mcq",
          "q": "Translating the origin to (2, −1), the point with old coordinates (5, 3) has new coordinates:",
          "correct": 0,
          "opts": [
            { "label": "(3, 4)", "nudge": null },
            { "label": "(7, 2)", "nudge": "This adds the shift instead of subtracting it. New equals old minus shift, in both coordinates." },
            { "label": "(3, 2)", "nudge": "The x is handled correctly but the y subtracts −1 as though it were +1. The double negative in 3 − (−1) is the whole point of this question." },
            { "label": "(−3, −4)", "nudge": "This negates the finished answer, as though the point had moved. The point never moves in a translation of axes; only its label does." }
          ],
          "solution": "(X, Y) = (x − h, y − k) = (5 − 2, 3 − (−1)) = (3, 4)."
        },
        {
          "t": "mcq",
          "q": "Three points give Δ = 0 in the area formula. This means:",
          "correct": 1,
          "opts": [
            { "label": "the triangle is right-angled", "nudge": "A right angle fixes the shape, not the size. A right triangle has perfectly good area, so this tells you nothing about Δ." },
            { "label": "the three points are collinear", "nudge": null },
            { "label": "two of the three points coincide", "nudge": "That does force Δ = 0, but it is only one of the ways it can happen. Three distinct points strung along one line give 0 as well." },
            { "label": "the formula has broken down", "nudge": "Zero is an answer, not an error. The determinant is built so that a flat triangle honestly reports flat, and this chapter uses that constantly." }
          ],
          "solution": "The area formula returns exactly 0 when and only when the three points fail to span a triangle, that is, when they lie on one straight line. This is the standard collinearity test."
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Internal against external section formula.</b> Internal divides by <i>m</i> + <i>n</i>, external by <i>m</i> − <i>n</i>. Picking the wrong one puts the point on the wrong side of the segment, and <i>m</i> = <i>n</i> makes the external form meaningless rather than merely inconvenient.",
            "<b>Dropping the modulus in the area formula.</b> Area is never negative. Without the bars, labelling the vertices clockwise reports a negative “area”.",
            "<b>Forgetting to scale the centroid.</b> <i>x</i><sub>1</sub> + <i>x</i><sub>2</sub> + <i>x</i><sub>3</sub> = 3<i>x</i><sub>G</sub>, so multiply the centroid by 3 <i>before</i> solving for a missing vertex.",
            "<b>Getting the sign of a shift wrong.</b> New equals old minus shift: (<i>X</i>, <i>Y</i>) = (<i>x</i> − <i>h</i>, <i>y</i> − <i>k</i>). To transform an equation you substitute the other way, <i>x</i> = <i>X</i> + <i>h</i>. Two different directions, and mixing them is the classic slip.",
            "<b>Leaving the parameter in a locus answer.</b> If <i>m</i> or θ survives to the final line you have written a family of curves, not the path of one point, and the mark is gone even though every step was right."
          ]
        },
        {
          "t": "protip",
          "html": "for collinearity, reach for the area determinant, never three slopes. it is one computation, it never divides by zero so a vertical pair costs you nothing, and the modulus mops up orientation. and for any locus, test one member before you write the answer down: pick the easiest line of the family, find the point it gives, feed it back in. ten seconds, and it catches the factor-of-two error every single time."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "AB = √((x₂ − x₁)² + (y₂ − y₁)²)",
              "note": "Pythagoras, with the legs read off the axes"
            },
            {
              "f": "Internal m : n → ((mx₂ + nx₁)/(m + n), (my₂ + ny₁)/(m + n))",
              "note": "external swaps both signs, over m − n"
            },
            {
              "f": "Midpoint is the 1 : 1 case · Centroid is the plain average",
              "note": "3G = A + B + C, so scale before you solve"
            },
            {
              "f": "Δ = ½|x₁(y₂ − y₃) + x₂(y₃ − y₁) + x₃(y₁ − y₂)|",
              "note": "Δ = 0 ⟺ collinear"
            },
            {
              "f": "Shift to (h, k): X = x − h, Y = y − k",
              "note": "slopes, distances, angles and areas do not move"
            },
            {
              "f": "Locus: P(h, k) → constraint → eliminate → (x, y)",
              "note": "a surviving parameter means a family, not a locus"
            }
          ],
          "aids": [
            "“internal adds, external subtracts”",
            "“area zero means in a row”",
            "“new equals old minus shift”"
          ]
        }
      ]
    },
    {
      "n": "02",
      "title": "Slope, Inclination and the Angle Between Two Lines",
      "chip": "02 SLOPE",
      "kalam": "horizontal zero, vertical void",
      "blocks": [
        {
          "t": "p",
          "html": "Imagine walking the Konkan Railway track as it climbs out of a valley. Some stretches are almost flat and you barely feel the rise. Others are steep and your legs know it instantly. <b>Slope</b> is just the number that captures how steeply a line tilts, and the remarkable thing is that one number does the whole job."
        },
        {
          "t": "p",
          "html": "Here is the cleanest way to see it. Stand a line on the plane and ask: starting from the positive <i>x</i>-axis, how far do I rotate <b>anticlockwise</b> until I am pointing along the line? That rotation is the line's <b>inclination</b> θ. A line lying flat along the <i>x</i>-axis has θ = 0°. Tilt it up and θ grows. Stand it upright and θ = 90°. Tilt it the other way, so it falls as you move right, and θ is obtuse, somewhere between 90° and 180°. The convention is 0° ≤ θ < 180°, because a line and the same line rotated by 180° are identical: a line carries no arrow."
        },
        {
          "t": "p",
          "html": "Angles are clumsy to compute with, so we convert the angle into a pure number using the tangent: <i>m</i> = tan θ. Why tangent and not sine or cosine? Because slope should answer “for every step I take to the right, how far do I rise?”, and that is exactly rise over run, which is the tangent of the inclination. A gentle 30° track has slope tan 30° ≈ 0.58. A 45° track has slope exactly 1, rise equal to run. Past 45° the slope climbs fast, and a line running downhill to the right has a <b>negative</b> slope because the rise is negative."
        },
        {
          "t": "think",
          "html": "slope is direction, not position. a line of slope 2 can sit anywhere on the plane and still be a line of slope 2. two lines that agree on this one number point the same way, which is all “parallel” ever meant."
        },
        {
          "t": "def",
          "term": "Inclination θ",
          "html": "The angle a line makes with the positive direction of the <i>x</i>-axis, measured anticlockwise, with 0° ≤ θ < 180°. A horizontal line has θ = 0°, a vertical line has θ = 90°, and a line falling to the right has an obtuse θ. The range stops short of 180° because rotating a line by a straight angle gives back the same line."
        },
        {
          "t": "def",
          "term": "Slope (gradient) <i>m</i>",
          "html": "<i>m</i> = tan θ, defined for every line except the vertical one. At θ = 90° the tangent runs off to infinity, so <b>the slope of a vertical line is undefined</b>: never “infinite”, and never “zero”, because zero belongs to the horizontal line, tan 0° = 0. As θ sweeps [0°, 180°) without 90°, <i>m</i> takes every real value exactly once."
        },
        {
          "t": "formula",
          "kicker": "SLOPE FROM TWO POINTS",
          "tag": "rise over run",
          "main": "<i>m</i> = (<i>y</i><sub>2</sub> − <i>y</i><sub>1</sub>)/(<i>x</i><sub>2</sub> − <i>x</i><sub>1</sub>),  <i>x</i><sub>1</sub> ≠ <i>x</i><sub>2</sub>",
          "legend": [
            "the answer does not care which point you call first: negating both the top and the bottom leaves the quotient alone",
            "if <i>x</i><sub>1</sub> = <i>x</i><sub>2</sub> the denominator collapses, which is the vertical line showing up in algebra rather than a new problem"
          ],
          "note": "The whole rise-over-run machinery assumes the two points are genuinely different and not stacked vertically. Keep the two poles straight, horizontal means 0 and vertical means undefined, and half the slope mistakes vanish."
        },
        {
          "t": "defgrid",
          "title": "The four conditions read off slopes",
          "rows": [
            {
              "k": "Parallel",
              "v": "<i>m</i><sub>1</sub> = <i>m</i><sub>2</sub>, equal inclinations"
            },
            {
              "k": "Perpendicular",
              "v": "<i>m</i><sub>1</sub><i>m</i><sub>2</sub> = −1, equivalently <i>m</i><sub>2</sub> = −1/<i>m</i><sub>1</sub>"
            },
            {
              "k": "Collinear <i>A</i>, <i>B</i>, <i>C</i>",
              "v": "slope(<i>AB</i>) = slope(<i>BC</i>)"
            },
            {
              "k": "Equally inclined to the axes",
              "v": "θ = 45° or 135°, so <i>m</i> = ±1"
            },
            {
              "k": "One line vertical",
              "v": "the product rule does not apply. Its perpendicular is horizontal, and you settle the pair by inspection"
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "DIAGRAM · ONE NUMBER FOR DIRECTION",
          "chips": ["θ = 30°", "θ = 135°", "The two poles", "Parallel", "Perpendicular", "The angle between"],
          "captions": [
            "Inclination is measured anticlockwise from the positive x-axis. At 30° the line rises gently and tan 30° ≈ 0.58: a little under six units of rise for every ten of run.",
            "At 135° the line falls as you move right, so the rise is negative and so is the slope: tan 135° = −1. Every obtuse inclination gives a negative slope, and that is the fastest sign check there is.",
            "The two poles that exam-setters live on. A horizontal line has slope exactly 0. A vertical line has inclination 90°, tan 90° does not exist, and its slope is undefined. Not infinite, not zero, undefined.",
            "Two lines with the same slope point the same way and never meet. Position is irrelevant: both these lines have slope 3/4 and only their intercepts differ.",
            "Slopes 2 and −1/2 multiply to −1, so these lines cross at a right angle. Notice that perpendicular slopes always have opposite signs, which is a one-second sanity check on any flip-and-negate.",
            "Slopes 2 and 1/3. The angle formula gives tan θ = |(1/3 − 2)/(1 + 2/3)| = 1, so the acute angle between them is exactly 45°. The modulus is what picks the acute one out of the two supplementary angles."
          ],
          "frames": [
            {
              "x": [-3, 3],
              "y": [-2.4, 2.4],
              "curves": [{ "c": "line", "m": 0.5774, "k": 0 }],
              "labels": [{ "x": 0, "y": 1.9, "text": "θ = 30°, m = tan 30° ≈ 0.58" }]
            },
            {
              "x": [-3, 3],
              "y": [-2.4, 2.4],
              "curves": [{ "c": "line", "m": -1, "k": 0 }],
              "labels": [{ "x": 0, "y": 1.9, "text": "θ = 135°, m = tan 135° = −1" }]
            },
            {
              "x": [-3, 3],
              "y": [-2.4, 2.4],
              "curves": [
                { "c": "vline", "x": 1 },
                { "c": "line", "m": 0, "k": -1.2 }
              ],
              "labels": [
                { "x": -1.1, "y": 1.9, "text": "x = 1: slope undefined" },
                { "x": 0.7, "y": -1.75, "text": "y = −1.2: slope 0" }
              ]
            },
            {
              "x": [-3, 3],
              "y": [-2.4, 2.4],
              "curves": [
                { "c": "line", "m": 0.75, "k": 1 },
                { "c": "line", "m": 0.75, "k": -1 }
              ],
              "labels": [{ "x": -1.2, "y": 2.05, "text": "same slope, never meet" }]
            },
            {
              "x": [-3, 3],
              "y": [-2.4, 2.4],
              "curves": [
                { "c": "line", "m": 2, "k": 0 },
                { "c": "line", "m": -0.5, "k": 0 }
              ],
              "labels": [{ "x": 1.1, "y": 2.05, "text": "2 × (−1/2) = −1" }]
            },
            {
              "x": [-3, 3],
              "y": [-2.4, 2.4],
              "curves": [
                { "c": "line", "m": 2, "k": 0 },
                { "c": "line", "m": 0.3333, "k": 0 }
              ],
              "labels": [{ "x": 1.1, "y": 1.0, "text": "θ = 45°" }]
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "THE ANGLE BETWEEN TWO LINES",
          "tag": "the modulus picks the acute one",
          "main": "tan θ = |(<i>m</i><sub>2</sub> − <i>m</i><sub>1</sub>)/(1 + <i>m</i><sub>1</sub><i>m</i><sub>2</sub>)|",
          "legend": [
            "two crossing lines form two supplementary angles, θ and 180° − θ, and the bars select the acute one",
            "1 + <i>m</i><sub>1</sub><i>m</i><sub>2</sub> = 0 makes the right side blow up, and that is not a failure: it is precisely the perpendicular case, θ = 90°"
          ],
          "note": "Use the bars only for “the angle between two given lines”. For “find the line making angle α with a given line” there are genuinely two answers, so set the <i>signed</i> ratio equal to ±tan α instead."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY tan θ IS RISE OVER RUN, TAP A LINE",
          "steps": [
            {
              "eq": "line ℓ through <i>P</i>(<i>x</i><sub>1</sub>, <i>y</i><sub>1</sub>) and <i>Q</i>(<i>x</i><sub>2</sub>, <i>y</i><sub>2</sub>), inclination θ",
              "why": "The claim is that the geometric angle θ and the arithmetic ratio of coordinate differences are the same object. A right triangle is what will connect them."
            },
            {
              "eq": "drop <i>PL</i> and <i>QM</i> to the <i>x</i>-axis, then <i>PN</i> horizontally onto <i>QM</i>",
              "why": "This builds triangle QPN, right-angled at N, whose legs are exactly the run and the rise. The horizontal auxiliary line PN is the bridge that turns an angle into a ratio."
            },
            {
              "eq": "∠<i>QPN</i> = θ",
              "why": "PN is parallel to the x-axis, so the angle the line makes with PN equals the angle it makes with the x-axis, by corresponding angles."
            },
            {
              "eq": "<i>PN</i> = <i>LM</i> = <i>x</i><sub>2</sub> − <i>x</i><sub>1</sub>, <i>QN</i> = <i>QM</i> − <i>NM</i> = <i>y</i><sub>2</sub> − <i>y</i><sub>1</sub>",
              "why": "The horizontal leg is the gap between the two feet on the axis, and the vertical leg is what is left of QM after the height of P is taken off."
            },
            {
              "eq": "tan θ = <i>QN</i>/<i>PN</i> = (<i>y</i><sub>2</sub> − <i>y</i><sub>1</sub>)/(<i>x</i><sub>2</sub> − <i>x</i><sub>1</sub>) = <i>m</i>",
              "why": "Opposite over adjacent in the right triangle. If x₁ = x₂ then PN = 0, the triangle collapses, θ = 90° and m is undefined: the vertical line, exactly where you expect it."
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY PERPENDICULAR MEANS m₁m₂ = −1",
          "steps": [
            {
              "eq": "θ<sub>2</sub> = θ<sub>1</sub> + 90°",
              "why": "Two perpendicular lines have inclinations differing by a right angle. Taking the second as the larger costs nothing, since inclinations are read modulo 180°."
            },
            {
              "eq": "<i>m</i><sub>2</sub> = tan(θ<sub>1</sub> + 90°) = −cot θ<sub>1</sub>",
              "why": "The standard allied-angle identity tan(α + 90°) = −cot α. All the geometry is already spent; this is a trigonometric fact."
            },
            {
              "eq": "−cot θ<sub>1</sub> = −1/tan θ<sub>1</sub> = −1/<i>m</i><sub>1</sub>",
              "why": "Cotangent is the reciprocal of tangent, and m₁ = tan θ₁ by definition."
            },
            {
              "eq": "<i>m</i><sub>1</sub><i>m</i><sub>2</sub> = −1",
              "why": "Cross-multiply. The converse runs backwards through the same identity, so this is an equivalence, not just an implication. Both slopes must exist: if one line is vertical, its perpendicular is horizontal and the product rule has nothing to multiply."
            }
          ]
        },
        {
          "t": "proc",
          "title": "Finding the acute angle between two lines",
          "steps": [
            "<b>Check the special poles first.</b> If either line is vertical its slope does not exist, so compute the angle from inclinations directly: 90° minus the other line's inclination. The formula below assumes both slopes exist.",
            "<b>Compute 1 + <i>m</i><sub>1</sub><i>m</i><sub>2</sub>.</b> If it is 0 the lines are perpendicular, the answer is 90°, and you stop.",
            "<b>Otherwise evaluate tan θ = |(<i>m</i><sub>2</sub> − <i>m</i><sub>1</sub>)/(1 + <i>m</i><sub>1</sub><i>m</i><sub>2</sub>)|.</b> The modulus guarantees you have the tangent of the acute angle.",
            "<b>Take θ = tan<sup>−1</sup> of that value.</b> If the obtuse angle is what was asked, it is 180° − θ.",
            "<b>Sense-check the sign you dropped.</b> Without the bars the ratio's sign only records whether you measured from line 1 to line 2 clockwise or anticlockwise. That is direction, not size, which is why “the angle between” never needs it."
          ]
        },
        {
          "t": "p",
          "html": "The slope idea has exactly one place where it breaks, and exam-setters love it: the <b>vertical line</b>. Whenever a solution begins “let the slope be <i>m</i>”, it has quietly excluded every vertical line from consideration. In an Advanced problem that exclusion is often where the second answer was hiding, so check the case <i>x</i> = <i>a</i> separately before you commit."
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A line passes through <i>A</i>(−3, 2) and <i>B</i>(5, −4). Find its slope and say whether its inclination is acute or obtuse.",
          "steps": [
            "<i>m</i> = (<i>y</i><sub>2</sub> − <i>y</i><sub>1</sub>)/(<i>x</i><sub>2</sub> − <i>x</i><sub>1</sub>) = (−4 − 2)/(5 − (−3)) = −6/8.",
            "The slope is negative, so the line falls as you move right and the inclination lies between 90° and 180°."
          ],
          "ans": "m = −3/4, inclination obtuse"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "The line through (2, 7) and (<i>k</i>, 1) is perpendicular to the line through (0, −3) and (4, 5). Find <i>k</i>.",
          "steps": [
            "Nail the known line first: <i>m</i><sub>2</sub> = (5 − (−3))/(4 − 0) = 8/4 = 2.",
            "Perpendicular means flip and negate, so <i>m</i><sub>1</sub> = −1/2. Do not recompute anything.",
            "(1 − 7)/(<i>k</i> − 2) = −1/2, so −6/(<i>k</i> − 2) = −1/2 and <i>k</i> − 2 = 12.",
            "The trap: writing <i>m</i><sub>1</sub> = +1/2 lands on <i>k</i> = −10, a planted distractor. One-second defence: perpendicular slopes always have opposite signs, and <i>m</i><sub>2</sub> is positive."
          ],
          "ans": "k = 14"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "For <i>P</i>(1, 1), <i>Q</i>(4, 7) and <i>R</i>(<i>a</i>, <i>a</i> + 5): find <i>a</i> so that the three are collinear, then find the acute angle the line makes with <i>y</i> = <i>x</i>.",
          "steps": [
            "slope(<i>PQ</i>) = (7 − 1)/(4 − 1) = 2.",
            "Collinearity needs slope(<i>PR</i>) = 2: ((<i>a</i> + 5) − 1)/(<i>a</i> − 1) = 2 gives <i>a</i> + 4 = 2<i>a</i> − 2, so <i>a</i> = 6 and <i>R</i> = (6, 11).",
            "The line <i>y</i> = <i>x</i> has slope 1. tan θ = |(1 − 2)/(1 + 2(1))| = 1/3."
          ],
          "ans": "a = 6, θ = tan⁻¹(1/3) ≈ 18.43°"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "A line ℓ makes an angle of 45° with 3<i>x</i> − <i>y</i> + 5 = 0. Find <b>both</b> possible slopes, and say whether either line is vertical.",
          "steps": [
            "The given line is <i>y</i> = 3<i>x</i> + 5, so <i>m</i><sub>2</sub> = 3. Because 45° can be measured on either side, do <b>not</b> take the modulus. Set the signed ratio equal to ±tan 45° = ±1: (<i>m</i> − 3)/(1 + 3<i>m</i>) = ±1.",
            "Case +1: <i>m</i> − 3 = 1 + 3<i>m</i>, so −2<i>m</i> = 4 and <i>m</i> = −2.",
            "Case −1: <i>m</i> − 3 = −1 − 3<i>m</i>, so 4<i>m</i> = 2 and <i>m</i> = 1/2.",
            "Vertical check, the Advanced subtlety: writing “let the slope be <i>m</i>” silently excluded vertical lines. A vertical line has inclination 90°, the given line has inclination tan<sup>−1</sup>3 ≈ 71.57°, and the angle between them is ≈ 18.43°, not 45°. So there is no vertical solution and the algebra found both lines."
          ],
          "ans": "m = −2 or m = 1/2, neither vertical"
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Find the slope of the line joining (6, −2) and (−4, 3), and state whether its inclination is acute or obtuse.",
              "a": "m = (3 − (−2))/(−4 − 6) = 5/(−10) = −1/2. Negative slope, so the inclination is obtuse."
            },
            {
              "q": "[CBSE] A line has inclination 120°. Find its slope, and the slope of any line perpendicular to it.",
              "a": "m = tan 120° = −√3. Perpendicular slope = −1/(−√3) = 1/√3."
            },
            {
              "q": "[JEE Main] For what value of p is the line through (p, 4) and (2, −3) parallel to the line through (0, 0) and (7, 14)?",
              "a": "The second line has slope 14/7 = 2. So (−3 − 4)/(2 − p) = 2, that is −7 = 4 − 2p, giving p = 11/2. Check: the line through (5.5, 4) and (2, −3) has slope (−3 − 4)/(2 − 5.5) = −7/−3.5 = 2."
            },
            {
              "q": "[JEE Main] Find the acute angle between the lines with slopes m₁ = 1/2 and m₂ = −3.",
              "a": "tan θ = |(−3 − 1/2)/(1 + (1/2)(−3))| = |(−7/2)/(−1/2)| = 7, so θ = tan⁻¹7 ≈ 81.87°."
            },
            {
              "q": "[JEE Advanced] A(0, 2), B(3, 0), C(6, −2) are claimed to be collinear, and D(t, 5) is to lie on the perpendicular to AB drawn through A. Verify the claim, then find t.",
              "a": "slope(AB) = (0 − 2)/(3 − 0) = −2/3 and slope(BC) = (−2 − 0)/(6 − 3) = −2/3, so the three are collinear. The perpendicular through A has slope 3/2 and equation y = 2 + (3/2)x. Setting y = 5 gives 3 = 1.5t, so t = 2."
            }
          ]
        },
        {
          "t": "mcq",
          "q": "The slope of a line equally inclined to both coordinate axes can be:",
          "correct": 2,
          "opts": [
            { "label": "only 1", "nudge": "This keeps the rising diagonal and forgets the falling one. An inclination of 135° is equally inclined to the axes too." },
            { "label": "only −1", "nudge": "The same half-answer in the other direction: 45° is just as equally inclined as 135°." },
            { "label": "1 or −1", "nudge": null },
            { "label": "0 or undefined", "nudge": "This confuses “equally inclined to the axes” with “parallel to an axis”, which is the opposite situation: a horizontal line makes 0° with one axis and 90° with the other." }
          ],
          "solution": "Equally inclined means the line makes 45° with each axis, so its inclination is 45° or 135°, giving m = tan 45° = 1 or m = tan 135° = −1."
        },
        {
          "t": "mcq",
          "q": "Two lines are perpendicular and one has slope 2/3. The other's slope is:",
          "correct": 1,
          "opts": [
            { "label": "3/2", "nudge": "This reciprocates but drops the minus. Two perpendicular slopes can never share a sign, and (2/3)(3/2) = 1, not −1." },
            { "label": "−3/2", "nudge": null },
            { "label": "−2/3", "nudge": "This negates but forgets to reciprocate, so the product is −4/9 rather than −1." },
            { "label": "undefined", "nudge": "Undefined is the perpendicular of a horizontal line, slope 0. A line of slope 2/3 is not horizontal." }
          ],
          "solution": "m₁m₂ = −1 gives m₂ = −1/(2/3) = −3/2. Flip and negate, in that order and both times."
        },
        {
          "t": "mcq",
          "q": "The angle between the line <i>y</i> = √3 <i>x</i> + 1 and the <i>x</i>-axis is:",
          "correct": 2,
          "opts": [
            { "label": "30°", "nudge": "This reads tan⁻¹√3 as 30°, swapping tan 30° = 1/√3 with tan 60° = √3." },
            { "label": "45°", "nudge": "45° would need slope 1. The slope here is √3 ≈ 1.73." },
            { "label": "60°", "nudge": null },
            { "label": "90°", "nudge": "A 90° line is vertical, which would need an undefined slope, not √3." }
          ],
          "solution": "The slope is √3, so the inclination is tan⁻¹√3 = 60°. The x-axis has inclination 0°, so the angle between them is 60° itself."
        },
        {
          "t": "mcq",
          "q": "The points <i>A</i>(2, 3), <i>B</i>(4, 7) and <i>C</i>(5, <i>k</i>) are collinear. Then <i>k</i> equals:",
          "correct": 1,
          "opts": [
            { "label": "5", "nudge": "This sign-flips the denominator of slope(AB) to 2 − 4 = −2 and then writes k = 7 + (−2)." },
            { "label": "9", "nudge": null },
            { "label": "11", "nudge": "This uses the rise, 7 − 3 = 4, where the slope, 2, belongs. Δy is not m unless the run happens to be 1." },
            { "label": "3", "nudge": "This reads “collinear” as “horizontal” and forces C to share A's y-coordinate." }
          ],
          "solution": "slope(AB) = (7 − 3)/(4 − 2) = 2. Collinearity needs slope(BC) = 2, and slope(BC) = (k − 7)/(5 − 4) = k − 7, so k = 9."
        },
        {
          "t": "mistakes",
          "items": [
            "<b>“The slope of a vertical line is infinity.”</b> It is <b>undefined</b>, full stop. Zero belongs to the horizontal line. Mixing these two poles is the commonest slope error in board scripts.",
            "<b>Perpendicular means reciprocal <i>and</i> a minus.</b> <i>m</i><sub>1</sub><i>m</i><sub>2</sub> = −1, not 1. If both your perpendicular slopes have the same sign, you have already made the mistake.",
            "<b>Taking the modulus when two answers exist.</b> For “find the line making angle α with a given line”, set the signed ratio equal to ±tan α: there are genuinely two such lines. The bars belong only to “the angle between two given lines”.",
            "<b>Letting the slope be <i>m</i> and forgetting vertical lines.</b> That phrase quietly excludes <i>x</i> = <i>a</i> from the search. In an Advanced problem, check that case separately.",
            "<b>Reading a blown-up denominator as a breakdown.</b> 1 + <i>m</i><sub>1</sub><i>m</i><sub>2</sub> = 0 is the answer, not an error: the lines meet at 90°."
          ]
        },
        {
          "t": "protip",
          "html": "before any slope computation, glance at the geometry. rising left to right means positive, falling means negative, flat means zero, upright means undefined. that two-second sign check catches most arithmetic slips before they cost you marks, and it is the only defence against the flip-without-negating trap."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "θ measured anticlockwise from +x, 0° ≤ θ < 180°",
              "note": "a line carries no arrow, so 180° is the whole range"
            },
            {
              "f": "m = tan θ, undefined at θ = 90°",
              "note": "horizontal zero, vertical void"
            },
            {
              "f": "m = (y₂ − y₁)/(x₂ − x₁), needs x₁ ≠ x₂",
              "note": "the order of the two points does not matter"
            },
            {
              "f": "Parallel: m₁ = m₂ · Perpendicular: m₁m₂ = −1",
              "note": "flip and negate, and check the signs differ"
            },
            {
              "f": "tan θ = |(m₂ − m₁)/(1 + m₁m₂)|",
              "note": "denominator 0 means θ = 90°"
            },
            {
              "f": "Collinear: slope(AB) = slope(BC)",
              "note": "equally inclined to the axes ⇒ m = ±1"
            }
          ],
          "aids": [
            "“horizontal zero, vertical void”",
            "“flip and negate”",
            "“modulus for the angle between, ± for the line that makes an angle”"
          ]
        }
      ]
    },
    {
      "n": "03",
      "title": "Writing the Equation of a Line",
      "chip": "03 FORMS",
      "kalam": "six costumes, one line",
      "blocks": [
        {
          "t": "p",
          "html": "A line is the simplest curve there is, and yet there are <b>six different costumes</b> it can wear. Why so many? Because real problems hand you different clues. Sometimes a point and a direction. Sometimes two points. Sometimes where the line crosses the axes. Sometimes how far it sits from the origin. Each form is the answer to “given <i>this</i> clue, what is the fastest way to write the equation?”"
        },
        {
          "t": "p",
          "html": "Think of giving someone directions to a chai stall in a crowded bazaar. You could say “start at the gate and walk at exactly this angle”, which is the <b>point-slope</b> idea: one point, one direction. Or “it is on the straight line joining the temple and the post office”, the <b>two-point</b> form. Or “it cuts the main road three shops in and the side lane five shops in”, the <b>intercept</b> form. Or “stand at the central fountain, face this bearing, walk 7 metres and you hit the line head on”, the <b>normal</b> form. Every description pins down the same line."
        },
        {
          "t": "p",
          "html": "All six are dialects of one sentence: <b><i>Ax</i> + <i>By</i> + <i>C</i> = 0</b>, the general form. Any straight line on the plane, slanted, horizontal or bolt upright, can be written this way, and conversely every such equation with <i>A</i> and <i>B</i> not both zero draws a straight line. So the skill that actually earns marks is not memorising six formulas, it is <b>translating fluently between them</b>: pulling the slope out of the general form, or rewriting a point-slope equation in intercept form, on demand."
        },
        {
          "t": "think",
          "html": "the general form never fails, which is why it is the fallback. every other costume has a body shape it does not fit, and knowing which one is half of what is being tested."
        },
        {
          "t": "def",
          "term": "General form",
          "html": "<i>Ax</i> + <i>By</i> + <i>C</i> = 0 with <i>A</i>, <i>B</i> not both zero. It is the only description that <b>never</b> fails: <i>B</i> = 0 gives the vertical line <i>x</i> = −<i>C</i>/<i>A</i>, <i>A</i> = 0 gives the horizontal line <i>y</i> = −<i>C</i>/<i>B</i>, and <i>C</i> = 0 gives a line through the origin. Every first-degree equation in two variables is a straight line, and every straight line has such an equation."
        },
        {
          "t": "defgrid",
          "title": "The six costumes",
          "rows": [
            {
              "k": "Horizontal · Vertical",
              "v": "<i>y</i> = <i>b</i> · <i>x</i> = <i>a</i>"
            },
            {
              "k": "Point-slope",
              "v": "<i>y</i> − <i>y</i><sub>1</sub> = <i>m</i>(<i>x</i> − <i>x</i><sub>1</sub>), needs <i>m</i> to exist"
            },
            {
              "k": "Two-point",
              "v": "<i>y</i> − <i>y</i><sub>1</sub> = ((<i>y</i><sub>2</sub> − <i>y</i><sub>1</sub>)/(<i>x</i><sub>2</sub> − <i>x</i><sub>1</sub>))(<i>x</i> − <i>x</i><sub>1</sub>)"
            },
            {
              "k": "Slope-intercept",
              "v": "<i>y</i> = <i>mx</i> + <i>c</i>"
            },
            {
              "k": "Intercept",
              "v": "<i>x</i>/<i>a</i> + <i>y</i>/<i>b</i> = 1, with <i>a</i> ≠ 0 and <i>b</i> ≠ 0"
            },
            {
              "k": "Normal",
              "v": "<i>x</i> cos ω + <i>y</i> sin ω = <i>p</i>, with <i>p</i> ≥ 0"
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "READING A LINE OFF Ax + By + C = 0",
          "tag": "the reductions worth knowing cold",
          "main": "<i>m</i> = −<i>A</i>/<i>B</i> · <i>a</i> = −<i>C</i>/<i>A</i> · <i>b</i> = −<i>C</i>/<i>B</i>",
          "legend": [
            "the slope needs <i>B</i> ≠ 0; when <i>B</i> = 0 the line is vertical, <i>x</i> = −<i>C</i>/<i>A</i>, and has no slope at all",
            "for normal form, divide through by ±√(<i>A</i><sup>2</sup> + <i>B</i><sup>2</sup>) with the sign chosen so the right side comes out positive, and then <i>p</i> = |<i>C</i>|/√(<i>A</i><sup>2</sup> + <i>B</i><sup>2</sup>)"
          ],
          "note": "The slope is <b>minus</b> A over B, never A over B. Forgetting that minus is the single most frequent error on this topic, and both ±A/B are always sitting on the option list waiting for you."
        },
        {
          "t": "formula",
          "kicker": "NORMAL FORM",
          "tag": "how far from the origin, and in which direction",
          "main": "<i>x</i> cos ω + <i>y</i> sin ω = <i>p</i>",
          "legend": [
            "<i>p</i> ≥ 0 is the perpendicular distance from the origin to the line, and a distance cannot be negative",
            "ω is the angle the perpendicular <i>ON</i> makes with the positive <i>x</i>-axis, with 0 ≤ ω < 360°"
          ],
          "note": "Fix ω from the signs of cos ω and sin ω <i>together</i>. cos ω = −1/2 on its own leaves 120° and 240° both open; only sin ω > 0 settles it at 120°."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "DIAGRAM · ONE LINE, FOUR DESCRIPTIONS",
          "chips": ["Point-slope", "Intercepts", "Normal form", "The vertical line"],
          "captions": [
            "The line 3x + 4y = 12, described by a point on it and a direction. From P(0, 3), stepping 4 to the right drops you 3, so m = −3/4 and the equation is y − 3 = −(3/4)(x − 0). Any point of the line would do; the slope triangle would just sit somewhere else.",
            "The same line, described by where it crosses the axes: a = 4 on the x-axis and b = 3 on the y-axis. Divide 3x + 4y = 12 by 12 and it reads x/4 + y/3 = 1, which is the intercept form with the two crossings sitting in plain sight underneath the x and the y.",
            "The same line again, described by the perpendicular dropped from the origin. Its length is p = 12/5 and it lands at the foot N(1.44, 1.92), making an angle ω of about 53° with the x-axis. In normal form: x cos 53° + y sin 53° = 12/5, with cos ω = 3/5 and sin ω = 4/5.",
            "x = 4 is the one line none of those costumes fits. Its inclination is 90°, its slope is undefined, and every form containing m has already assumed it away. Intercept form fails too, since it never crosses the y-axis. Only x = a and the general form survive."
          ],
          "frames": [
            {
              "x": [-2, 6.5],
              "y": [-2, 5],
              "curves": [{ "c": "line", "m": -0.75, "k": 3 }],
              "points": [{ "x": 0, "y": 3, "label": "P(0, 3)" }],
              "segments": [
                { "from": [0, 3], "to": [4, 3], "dash": true, "soft": true, "label": "run 4" },
                { "from": [4, 3], "to": [4, 0], "dash": true, "soft": true, "label": "rise −3" }
              ]
            },
            {
              "x": [-2, 6.5],
              "y": [-2, 5],
              "curves": [{ "c": "line", "m": -0.75, "k": 3 }],
              "points": [
                { "x": 4, "y": 0, "label": "a = 4" },
                { "x": 0, "y": 3, "label": "b = 3" }
              ]
            },
            {
              "x": [-2, 6.5],
              "y": [-2, 5],
              "curves": [{ "c": "line", "m": -0.75, "k": 3 }],
              "points": [{ "x": 1.44, "y": 1.92, "label": "N" }],
              "segments": [{ "from": [0, 0], "to": [1.44, 1.92], "arrow": true, "label": "p = 12/5" }],
              "labels": [{ "x": 3.1, "y": 0.6, "text": "ω ≈ 53°" }]
            },
            {
              "x": [-2, 6.5],
              "y": [-2, 5],
              "curves": [
                { "c": "line", "m": -0.75, "k": 3, "soft": true },
                { "c": "vline", "x": 4 }
              ],
              "labels": [
                { "x": 5.2, "y": 3.4, "text": "x = 4" },
                { "x": 2.0, "y": -1.4, "text": "no slope to write" }
              ]
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · EVERY FORM DESCENDS FROM ONE, TAP A LINE",
          "steps": [
            {
              "eq": "take any (<i>x</i>, <i>y</i>) on the line other than (<i>x</i><sub>1</sub>, <i>y</i><sub>1</sub>)",
              "why": "Two points on a line are all you need to compute its slope, and this line already has a slope m."
            },
            {
              "eq": "(<i>y</i> − <i>y</i><sub>1</sub>)/(<i>x</i> − <i>x</i><sub>1</sub>) = <i>m</i>",
              "why": "The slope measured from the fixed point to the running point must equal the line's own slope. That is the definition of slope, and nothing more is assumed."
            },
            {
              "eq": "<i>y</i> − <i>y</i><sub>1</sub> = <i>m</i>(<i>x</i> − <i>x</i><sub>1</sub>)",
              "why": "Cross-multiply. The excluded point now satisfies it too, both sides becoming 0, so the equation holds for every point of the line. This is the parent form."
            },
            {
              "eq": "put <i>m</i> = (<i>y</i><sub>2</sub> − <i>y</i><sub>1</sub>)/(<i>x</i><sub>2</sub> − <i>x</i><sub>1</sub>) ⇒ two-point form",
              "why": "A second point determines the slope, so substituting it turns the parent into the two-point form. No new idea, only a substitution."
            },
            {
              "eq": "put (<i>x</i><sub>1</sub>, <i>y</i><sub>1</sub>) = (0, <i>c</i>) ⇒ <i>y</i> = <i>mx</i> + <i>c</i>",
              "why": "The y-intercept is where the line meets x = 0. Anchoring the parent there collapses it into the slope-intercept form."
            },
            {
              "eq": "apply the two-point form to (<i>a</i>, 0) and (0, <i>b</i>) ⇒ <i>x</i>/<i>a</i> + <i>y</i>/<i>b</i> = 1",
              "why": "The slope between the two axis crossings is −b/a, so y = −(b/a)(x − a). Multiply out to bx + ay = ab, then divide by ab. The intercept form is the two-point form applied to the two crossings."
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHERE cos ω AND sin ω COME FROM",
          "steps": [
            {
              "eq": "<i>N</i> = (<i>p</i> cos ω, <i>p</i> sin ω)",
              "why": "The foot of the perpendicular sits at distance p from the origin along the direction ω, so its coordinates are that distance times the unit vector in that direction."
            },
            {
              "eq": "slope of <i>ON</i> is tan ω, so the line's slope is −cos ω / sin ω",
              "why": "The line is perpendicular to ON, so its slope is the negative reciprocal of tan ω, and −1/tan ω = −cos ω/sin ω."
            },
            {
              "eq": "<i>y</i> − <i>p</i> sin ω = −(cos ω / sin ω)(<i>x</i> − <i>p</i> cos ω)",
              "why": "Point-slope form through N with that slope. Everything from here is algebra."
            },
            {
              "eq": "<i>y</i> sin ω − <i>p</i> sin<sup>2</sup>ω = −<i>x</i> cos ω + <i>p</i> cos<sup>2</sup>ω",
              "why": "Multiply through by sin ω to clear the fraction."
            },
            {
              "eq": "<i>x</i> cos ω + <i>y</i> sin ω = <i>p</i>(cos<sup>2</sup>ω + sin<sup>2</sup>ω) = <i>p</i>",
              "why": "Collect the x and y terms on the left and the p terms on the right, then use the Pythagorean identity. The form exists in this shape precisely because that identity is available to collapse the right side."
            }
          ]
        },
        {
          "t": "proc",
          "title": "Reducing Ax + By + C = 0 to normal form",
          "steps": [
            "<b>Move the constant across:</b> <i>Ax</i> + <i>By</i> = −<i>C</i>.",
            "<b>Divide by ±√(<i>A</i><sup>2</sup> + <i>B</i><sup>2</sup>), choosing the sign so the right-hand side comes out positive.</b> That right side is going to be <i>p</i>, and a distance cannot be negative. In practice: pick the sign <i>opposite</i> to that of <i>C</i>.",
            "<b>Read off</b> cos ω = <i>A</i>/(±√(<i>A</i><sup>2</sup> + <i>B</i><sup>2</sup>)), sin ω = <i>B</i>/(±√(<i>A</i><sup>2</sup> + <i>B</i><sup>2</sup>)) and <i>p</i> = |<i>C</i>|/√(<i>A</i><sup>2</sup> + <i>B</i><sup>2</sup>), using the same radical sign throughout.",
            "<b>Fix ω from the two signs together.</b> The pair of signs picks a quadrant; either one alone leaves two open.",
            "<b>Check:</b> if your reduction has produced a negative <i>p</i>, you chose the wrong radical. That alone tells you, before any marking, that the sign choice was wrong."
          ]
        },
        {
          "t": "p",
          "html": "Every costume has a body shape it does not fit, and exam questions are built on exactly those gaps. <b>Slope-intercept and point-slope</b> both assume a slope exists, so neither can describe a vertical line: that is always <i>x</i> = <i>a</i>. <b>Intercept form</b> breaks for a line through the origin, where both intercepts are 0 and you would be dividing by zero, and for a line parallel to an axis, where one intercept is missing. <b>Normal form</b> insists that <i>p</i> ≥ 0. The general form is the only one that never fails, which is why it is the universal fallback."
        },
        {
          "t": "formula",
          "kicker": "THE TRIANGLE A LINE CUTS OFF",
          "tag": "with the two coordinate axes",
          "main": "Δ = ½|<i>ab</i>| = <i>C</i><sup>2</sup>/(2|<i>AB</i>|)",
          "legend": [
            "<i>a</i> = −<i>C</i>/<i>A</i> and <i>b</i> = −<i>C</i>/<i>B</i> are the intercepts, and they are the two legs of a right triangle with its right angle at the origin",
            "<i>C</i> = 0 puts the line through the origin and bounds no triangle; <i>A</i> = 0 or <i>B</i> = 0 makes it parallel to an axis and again bounds none"
          ],
          "note": "Reading the intercepts by setting y = 0 and then x = 0 is safer than the closed formula. The substitution carries the signs for you, and the modulus finishes the job."
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Find the equation of the line through (−2, 5) and (3, −1), and state its <i>y</i>-intercept.",
          "steps": [
            "Slope first: <i>m</i> = (−1 − 5)/(3 − (−2)) = −6/5.",
            "Point-slope through (−2, 5): <i>y</i> − 5 = −(6/5)(<i>x</i> + 2), so 5<i>y</i> − 25 = −6<i>x</i> − 12.",
            "Rearrange: 6<i>x</i> + 5<i>y</i> − 13 = 0. For the <i>y</i>-intercept set <i>x</i> = 0, giving 5<i>y</i> = 13."
          ],
          "ans": "6x + 5y − 13 = 0, y-intercept 13/5"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "For 3<i>x</i> − 4<i>y</i> + 12 = 0, write down the slope, the <i>x</i>-intercept and the <i>y</i>-intercept, fast.",
          "steps": [
            "Slope = −<i>A</i>/<i>B</i> = −3/(−4) = 3/4.",
            "<i>x</i>-intercept: set <i>y</i> = 0, so 3<i>x</i> = −12 and <i>x</i> = −4.",
            "<i>y</i>-intercept: set <i>x</i> = 0, so −4<i>y</i> = −12 and <i>y</i> = 3.",
            "The trap: writing <i>A</i>/<i>B</i> = 3/(−4) = −3/4 gets the sign wrong, and both ±3/4 are on the option list. Anchor it: rearranged, <i>y</i> = (3/4)<i>x</i> + 3, and the line visibly rises to the right."
          ],
          "ans": "m = 3/4, a = −4, b = 3"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Find the line through (2, 3) perpendicular to 4<i>x</i> − 3<i>y</i> + 7 = 0, and express it in intercept form.",
          "steps": [
            "Slope of the given line: <i>m</i><sub>1</sub> = −<i>A</i>/<i>B</i> = −4/(−3) = 4/3.",
            "Perpendicular slope, flip and negate: <i>m</i> = −3/4.",
            "Point-slope through (2, 3): <i>y</i> − 3 = −(3/4)(<i>x</i> − 2), so 4<i>y</i> − 12 = −3<i>x</i> + 6 and 3<i>x</i> + 4<i>y</i> − 18 = 0.",
            "Intercept form: write 3<i>x</i> + 4<i>y</i> = 18 and divide by 18."
          ],
          "ans": "3x + 4y − 18 = 0, that is x/6 + y/(9/2) = 1"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "Reduce <i>x</i> − √3 <i>y</i> + 8 = 0 to normal form, finding <i>p</i> and ω exactly, and explain why the naive sign choice is forbidden.",
          "steps": [
            "Here <i>A</i> = 1, <i>B</i> = −√3, <i>C</i> = 8, and √(<i>A</i><sup>2</sup> + <i>B</i><sup>2</sup>) = √(1 + 3) = 2.",
            "Move the constant: <i>x</i> − √3 <i>y</i> = −8. The right side is negative, so divide by the <b>negative</b> radical, −2: −<i>x</i>/2 + (√3/2)<i>y</i> = 4.",
            "So cos ω = −1/2, sin ω = √3/2 and <i>p</i> = 4. Negative cosine with positive sine puts ω in the second quadrant, ω = 120°.",
            "Dividing by +2 instead would give (1/2)<i>x</i> − (√3/2)<i>y</i> = −4, that is “<i>p</i> = −4”, a negative distance. That alone proves the sign choice was wrong. And reading ω from cos ω = −1/2 alone would leave 120° and 240° both open; only sin ω > 0 pins it."
          ],
          "ans": "x cos 120° + y sin 120° = 4, so p = 4 and ω = 120°"
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Find the equation of the line with slope −2 passing through (4, −1).",
              "a": "y + 1 = −2(x − 4), so y + 1 = −2x + 8 and 2x + y − 7 = 0."
            },
            {
              "q": "[CBSE] Find the line with x-intercept 3 and y-intercept −5, then clear fractions.",
              "a": "x/3 + y/(−5) = 1. Multiply by 15: 5x − 3y = 15, that is 5x − 3y − 15 = 0."
            },
            {
              "q": "[JEE Main] Reduce 5x + 12y − 39 = 0 to normal form and find p, cos ω and sin ω.",
              "a": "√(25 + 144) = 13, and 5x + 12y = 39 already has a positive right side, so divide by +13: (5/13)x + (12/13)y = 3. So p = 3, cos ω = 5/13, sin ω = 12/13, and ω = tan⁻¹(12/5) ≈ 67.4°."
            },
            {
              "q": "[JEE Main] Find the line through (1, 2) that makes equal, non-zero intercepts on the axes.",
              "a": "Equal intercepts means a = b, so x/a + y/a = 1, that is x + y = a. Through (1, 2): a = 3. The line is x + y = 3."
            },
            {
              "q": "[JEE Main] Find the area of the triangle 5x + 3y − 15 = 0 cuts off with the coordinate axes.",
              "a": "Set y = 0 for a = 3, then x = 0 for b = 5. Δ = ½(3)(5) = 15/2 = 7.5 square units. The shortcut agrees: C²/(2|AB|) = 225/(2 × 15) = 7.5."
            }
          ]
        },
        {
          "t": "mcq",
          "q": "The slope and <i>y</i>-intercept of 2<i>x</i> − 5<i>y</i> + 10 = 0 are:",
          "correct": 0,
          "opts": [
            { "label": "(2/5, 2)", "nudge": null },
            { "label": "(−2/5, 2)", "nudge": "This uses m = +A/B. The slope is minus A over B, and here that minus turns −2/5 into +2/5." },
            { "label": "(2/5, −2)", "nudge": "The slope is right but the intercept takes c = +C/B and loses the minus. Substituting x = 0 would have carried the sign for free." },
            { "label": "(5/2, 2)", "nudge": "This inverts the slope to B/A. The x-coefficient goes on top of the fraction, not underneath." }
          ],
          "solution": "m = −A/B = −2/(−5) = 2/5, and c = −C/B = −10/(−5) = 2. Equivalently, rearranging gives y = (2/5)x + 2."
        },
        {
          "t": "mcq",
          "q": "When reducing <i>Ax</i> + <i>By</i> + <i>C</i> = 0 to normal form, you divide both sides by:",
          "correct": 1,
          "opts": [
            { "label": "√(<i>A</i><sup>2</sup> + <i>B</i><sup>2</sup>)", "nudge": "This ignores the sign choice altogether, so p comes out negative whenever C has the wrong sign, and a distance cannot be negative." },
            { "label": "±√(<i>A</i><sup>2</sup> + <i>B</i><sup>2</sup>), the sign chosen so <i>p</i> > 0", "nudge": null },
            { "label": "<i>A</i><sup>2</sup> + <i>B</i><sup>2</sup>", "nudge": "This forgets the square root, so the resulting coefficients no longer satisfy cos²ω + sin²ω = 1 and cannot be a cosine and a sine at all." },
            { "label": "|<i>C</i>|", "nudge": "This confuses the divisor with the numerator of p. |C| is what ends up on top, not underneath." }
          ],
          "solution": "The whole point of the ± is to force the right-hand side, which becomes p, to be non-negative. Pick the sign opposite to that of C."
        },
        {
          "t": "mcq",
          "q": "A line passes through the origin. Which form <b>cannot</b> directly represent it?",
          "correct": 2,
          "opts": [
            { "label": "slope-intercept <i>y</i> = <i>mx</i> + <i>c</i>", "nudge": "It works fine with c = 0, giving y = mx, which is exactly what a line through the origin looks like." },
            { "label": "point-slope", "nudge": "It works with (x₁, y₁) = (0, 0), and the origin is as good a fixed point as any other." },
            { "label": "intercept form <i>x</i>/<i>a</i> + <i>y</i>/<i>b</i> = 1", "nudge": null },
            { "label": "general form", "nudge": "It works with C = 0, giving Ax + By = 0, which every point of a line through the origin satisfies." }
          ],
          "solution": "A line through the origin has both intercepts equal to 0, so x/a + y/b = 1 would require dividing by zero twice. The form has no meaning there."
        },
        {
          "t": "mcq",
          "q": "The <i>x</i>-intercept and <i>y</i>-intercept of 3<i>x</i> − 4<i>y</i> = 12 are, respectively:",
          "correct": 0,
          "opts": [
            { "label": "4 and −3", "nudge": null },
            { "label": "−4 and 3", "nudge": "Both signs are flipped, which is what happens if you write a = C/A and b = C/B without the minus." },
            { "label": "3 and −4", "nudge": "This misreads the coefficients 3 and 4 as the intercepts. Coefficients and intercepts are different quantities and here they even swap places." },
            { "label": "4 and 3", "nudge": "This forgets that −4y = 12 gives y = −3, not 3. The line crosses the y-axis below the origin." }
          ],
          "solution": "Set y = 0: 3x = 12, so x = 4. Set x = 0: −4y = 12, so y = −3."
        },
        {
          "t": "mistakes",
          "items": [
            "<b>The slope from the general form is −<i>A</i>/<i>B</i>, not <i>A</i>/<i>B</i>.</b> Forgetting the minus is the most frequent error on this topic, and both answers are always offered.",
            "<b>A negative <i>p</i> in the normal form.</b> Distance cannot be negative. If your reduction yields <i>p</i> < 0 you chose the wrong sign for the radical, so flip it and everything else follows.",
            "<b>Reading ω from one trig value.</b> cos ω = −1/2 alone leaves 120° and 240° open. Use the signs of cos ω and sin ω <i>together</i> to fix the quadrant.",
            "<b>Forcing intercept form on the wrong line.</b> A line through the origin, or one parallel to an axis, has no valid intercept form. Use slope-intercept, or <i>x</i> = <i>a</i> and <i>y</i> = <i>b</i>.",
            "<b>Using a slope form on a vertical line.</b> Any equation containing <i>m</i> has already assumed the line is not vertical. <i>x</i> = <i>a</i> is the only description that works there."
          ]
        },
        {
          "t": "protip",
          "html": "to find the intercepts of any line equation in two seconds, set <i>y</i> = 0 for the <i>x</i>-intercept and <i>x</i> = 0 for the <i>y</i>-intercept. no need to memorise −<i>C</i>/<i>A</i> and −<i>C</i>/<i>B</i>, and no sign to get wrong: the substitution carries the signs for you, every time."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "Horizontal y = b · Vertical x = a",
              "note": "the vertical line is the one no slope form reaches"
            },
            {
              "f": "Point-slope: y − y₁ = m(x − x₁)",
              "note": "the parent form; every other one descends from it"
            },
            {
              "f": "Slope-intercept y = mx + c · Intercept x/a + y/b = 1",
              "note": "intercept form needs a ≠ 0 and b ≠ 0"
            },
            {
              "f": "Normal: x cos ω + y sin ω = p, p ≥ 0",
              "note": "both signs together fix ω, never one alone"
            },
            {
              "f": "General: m = −A/B, a = −C/A, b = −C/B",
              "note": "minus A over B, and it never fails"
            },
            {
              "f": "Triangle with the axes: Δ = ½|ab| = C²/(2|AB|)",
              "note": "set y = 0, then x = 0, and let the signs look after themselves"
            }
          ],
          "aids": [
            "“minus A over B”",
            "“p is positive, period”",
            "“set the other one to zero”"
          ]
        }
      ]
    },
    {
      "n": "04",
      "title": "Distance, Side and Angle Bisectors",
      "chip": "04 DISTANCE",
      "kalam": "modulus on top, root sum of squares below",
      "blocks": [
        {
          "t": "p",
          "html": "You know how to write a line. The next question a surveyor, an architect or an exam-setter asks is: <b>how far is something from it?</b> If a railway track is the line and your house is a point, the distance that matters is not how far you would walk along some random diagonal. It is the shortest path, the perpendicular dropped straight onto the track. That single perpendicular length is what every distance formula in this topic computes."
        },
        {
          "t": "p",
          "html": "Here is the idea behind the famous formula. For the line <i>Ax</i> + <i>By</i> + <i>C</i> = 0, the pair (<i>A</i>, <i>B</i>) points <b>perpendicular</b> to it: it is the line's normal direction. So to measure how far a point <i>P</i> sits from the line, you do not need the slope at all. You project the gap between <i>P</i> and the line onto that normal direction and read off the length. Once you see it as “project onto the normal”, the formula stops being something to memorise and becomes something you could rebuild on the spot."
        },
        {
          "t": "think",
          "html": "two parallel lines share a normal direction, so the gap between them is just the difference of how far each sits from the origin. that is why the parallel formula is a subtraction, and why it only works once both lines are written with the same A and B."
        },
        {
          "t": "formula",
          "kicker": "DISTANCE OF A POINT FROM A LINE",
          "tag": "project onto the normal",
          "main": "<i>d</i> = |<i>Ax</i><sub>1</sub> + <i>By</i><sub>1</sub> + <i>C</i>| / √(<i>A</i><sup>2</sup> + <i>B</i><sup>2</sup>)",
          "legend": [
            "the line must be in general form: rearrange <i>y</i> = <i>mx</i> + <i>c</i> to <i>mx</i> − <i>y</i> + <i>c</i> = 0 first",
            "drop the bars and the same expression tells you <i>which side</i> of the line the point is on"
          ],
          "note": "The denominator is √(A² + B²): not A² + B², and not |A| + |B|. It is the same root-sum-of-squares that appeared in the normal form, so treat it as one recurring object rather than a new one."
        },
        {
          "t": "formula",
          "kicker": "DISTANCE BETWEEN TWO PARALLEL LINES",
          "tag": "normalise, then subtract",
          "main": "<i>d</i> = |<i>C</i><sub>1</sub> − <i>C</i><sub>2</sub>| / √(<i>A</i><sup>2</sup> + <i>B</i><sup>2</sup>)",
          "legend": [
            "valid only once both lines show <i>identical</i> <i>A</i> and <i>B</i>, so rescale one of them before you subtract anything",
            "the line running exactly midway between them has constant (<i>C</i><sub>1</sub> + <i>C</i><sub>2</sub>)/2, the average"
          ],
          "note": "Applied to 3x + 4y + 1 = 0 and 6x + 8y + 5 = 0 as written it returns the wrong answer. Halve the second to 3x + 4y + 2.5 = 0 and only then subtract the constants."
        },
        {
          "t": "def",
          "term": "Symmetric (distance) form",
          "html": "(<i>x</i> − <i>x</i><sub>1</sub>)/cos θ = (<i>y</i> − <i>y</i><sub>1</sub>)/sin θ = <i>r</i>. Stand at <i>P</i>(<i>x</i><sub>1</sub>, <i>y</i><sub>1</sub>), face the inclination θ and walk a signed distance <i>r</i>: you land at (<i>x</i><sub>1</sub> + <i>r</i> cos θ, <i>y</i><sub>1</sub> + <i>r</i> sin θ), with <i>r</i> > 0 in the direction of θ and <i>r</i> < 0 the other way. Because (cos θ, sin θ) is a <b>unit</b> step, <i>r</i> is the genuine distance, and that is the whole point: substitute the other line's equation and solve for <i>r</i> to read a length off directly, without ever finding the meeting point's coordinates."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "DIAGRAM · HOW FAR, AND WHICH SIDE",
          "chips": ["The perpendicular drop", "Which side", "A parallel strip"],
          "captions": [
            "The line 3x + 4y − 12 = 0 and the point P(1, 1). Substituting gives 3 + 4 − 12 = −5, and dividing by √(9 + 16) = 5 gives d = 1. The dashed segment is that distance: the shortest route from P to the line, and the only one that meets it at a right angle.",
            "Before you take the modulus, the sign is information. The shaded half-plane is where 3x + 4y − 12 is negative; P(1, 1) gives −5 and sits in it, while Q(4, 3) gives +12 and sits outside. Same sign means same side, opposite signs mean the line separates the two points.",
            "3x + 4y − 12 = 0 and 3x + 4y + 3 = 0 have identical A and B, so they are parallel and the constants can be compared directly: d = |−12 − 3|/5 = 3. If one line had been written as 6x + 8y + 6 = 0 you would have to halve it first, and skipping that is the planted trap."
          ],
          "frames": [
            {
              "x": [-2, 6],
              "y": [-2, 5],
              "curves": [{ "c": "line", "m": -0.75, "k": 3 }],
              "points": [
                { "x": 1, "y": 1, "label": "P(1, 1)" },
                { "x": 1.6, "y": 1.8, "label": "Q" }
              ],
              "segments": [{ "from": [1, 1], "to": [1.6, 1.8], "dash": true, "label": "d = 1" }]
            },
            {
              "x": [-2, 6],
              "y": [-2, 5],
              "curves": [{ "c": "line", "m": -0.75, "k": 3 }],
              "bands": [
                { "x0": -2, "x1": 0, "y0": -2, "y1": 3 },
                { "x0": 0, "x1": 1, "y0": -2, "y1": 2.25 },
                { "x0": 1, "x1": 2, "y0": -2, "y1": 1.5 },
                { "x0": 2, "x1": 3, "y0": -2, "y1": 0.75 },
                { "x0": 3, "x1": 4, "y0": -2, "y1": 0 },
                { "x0": 4, "x1": 5, "y0": -2, "y1": -0.75 },
                { "x0": 5, "x1": 6, "y0": -2, "y1": -1.5 }
              ],
              "points": [
                { "x": 1, "y": 1, "label": "P: −5" },
                { "x": 4, "y": 3, "label": "Q: +12" }
              ]
            },
            {
              "x": [-2, 6],
              "y": [-2, 5],
              "curves": [
                { "c": "line", "m": -0.75, "k": 3 },
                { "c": "line", "m": -0.75, "k": -0.75 }
              ],
              "segments": [{ "from": [0, -0.75], "to": [1.8, 1.65], "dash": true, "label": "d = 3" }]
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY THE DISTANCE FORMULA LOOKS LIKE THAT",
          "steps": [
            {
              "eq": "<b>n</b> = (<i>A</i>, <i>B</i>) is normal to <i>Ax</i> + <i>By</i> + <i>C</i> = 0",
              "why": "Two points on the line differ by a vector along it, and dotting that difference with (A, B) gives AΔx + BΔy = 0. A zero dot product means (A, B) is perpendicular to the line."
            },
            {
              "eq": "unit normal = (<i>A</i>, <i>B</i>)/√(<i>A</i><sup>2</sup> + <i>B</i><sup>2</sup>)",
              "why": "Divide by the length. Every root-sum-of-squares in this topic is this one normalisation showing up again."
            },
            {
              "eq": "pick any <i>R</i>(<i>x</i><sub>0</sub>, <i>y</i><sub>0</sub>) on the line, so <i>Ax</i><sub>0</sub> + <i>By</i><sub>0</sub> = −<i>C</i>",
              "why": "Which point you pick does not matter. Sliding R along the line changes the vector RP only by something parallel to the line, and that contributes nothing to a dot product with the normal."
            },
            {
              "eq": "<i>d</i> = |<i>RP</i> · unit normal| = |<i>A</i>(<i>x</i><sub>1</sub> − <i>x</i><sub>0</sub>) + <i>B</i>(<i>y</i><sub>1</sub> − <i>y</i><sub>0</sub>)| / √(<i>A</i><sup>2</sup> + <i>B</i><sup>2</sup>)",
              "why": "The perpendicular distance is the length of the projection of RP onto the unit normal. That is exactly what shortest path means once you are in coordinates."
            },
            {
              "eq": "= |<i>Ax</i><sub>1</sub> + <i>By</i><sub>1</sub> + <i>C</i>| / √(<i>A</i><sup>2</sup> + <i>B</i><sup>2</sup>)",
              "why": "Substitute Ax₀ + By₀ = −C, so the bracket becomes Ax₁ + By₁ − (−C). The formula is a projection, not an incantation."
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "WHICH SIDE, AND IN WHAT RATIO",
          "tag": "one expression answers both",
          "main": "<i>PX</i> : <i>XQ</i> = −<i>L</i>(<i>P</i>) / <i>L</i>(<i>Q</i>),  <i>L</i>(<i>x</i>, <i>y</i>) = <i>Ax</i> + <i>By</i> + <i>C</i>",
          "legend": [
            "same signs at <i>P</i> and <i>Q</i> means same side and the line misses the segment; opposite signs mean it cuts <i>PQ</i>",
            "a positive ratio is internal division, a negative one is external, and exactly −1 means the line is parallel to <i>PQ</i> and never meets it"
          ],
          "note": "Why it works: L is first degree, so if X divides PQ in m : n then L(X) is the same weighted average of L(P) and L(Q) that the section formula takes of the coordinates. Setting L(X) = 0 gives m : n = −L(P) : L(Q)."
        },
        {
          "t": "p",
          "html": "The same sign test answers a question that looks much harder: <b>is the origin inside this triangle?</b> For each side, write the side's line equation and compare the sign of <i>L</i> at the origin with its sign at the opposite vertex. If all three comparisons agree, the origin is inside. A single disagreement puts it outside. This works because “inside the triangle” means precisely “on the same side of each side-line as the remaining vertex”, and no construction is needed at all."
        },
        {
          "t": "p",
          "html": "Now turn the distance formula on two lines at once. When two roads cross they make four angles, in two pairs of equal opposite angles, and the <b>angle bisectors</b> are the two lines that split those angles in half. The defining property is beautifully simple: a point lies on a bisector exactly when it is <b>equidistant</b> from the two original lines. Stand where you are the same perpendicular distance from both roads and the path you trace is a bisector. So set the two distances equal, and the bisector equations fall out on their own."
        },
        {
          "t": "formula",
          "kicker": "THE PAIR OF ANGLE BISECTORS",
          "tag": "the distance formula with the moduli removed",
          "main": "(<i>a</i><sub>1</sub><i>x</i> + <i>b</i><sub>1</sub><i>y</i> + <i>c</i><sub>1</sub>)/√(<i>a</i><sub>1</sub><sup>2</sup> + <i>b</i><sub>1</sub><sup>2</sup>) = ±(<i>a</i><sub>2</sub><i>x</i> + <i>b</i><sub>2</sub><i>y</i> + <i>c</i><sub>2</sub>)/√(<i>a</i><sub>2</sub><sup>2</sup> + <i>b</i><sub>2</sub><sup>2</sup>)",
          "legend": [
            "equal distances, moduli dropped: the two cases “equal” and “negatives of each other” are exactly the ±, and each sign gives one bisector",
            "each line keeps <i>its own</i> denominator, and there is no shared one to factor out"
          ],
          "note": "The two bisectors are always perpendicular to each other, because they bisect supplementary angles: if one angle is 2α the other is 2(90° − α), and the half-lines differ by exactly 90°. That is a free check on every bisector computation."
        },
        {
          "t": "defgrid",
          "title": "Which bisector is which",
          "tag": "only after both constants are made positive",
          "rows": [
            {
              "k": "Step zero, always",
              "v": "rewrite both lines so that <i>c</i><sub>1</sub> > 0 and <i>c</i><sub>2</sub> > 0"
            },
            {
              "k": "Angle containing the origin",
              "v": "the “+” bisector, every time"
            },
            {
              "k": "<i>a</i><sub>1</sub><i>a</i><sub>2</sub> + <i>b</i><sub>1</sub><i>b</i><sub>2</sub> > 0",
              "v": "“+” is the <b>obtuse</b> bisector, “−” is the acute one"
            },
            {
              "k": "<i>a</i><sub>1</sub><i>a</i><sub>2</sub> + <i>b</i><sub>1</sub><i>b</i><sub>2</sub> < 0",
              "v": "“+” is the <b>acute</b> bisector, “−” is the obtuse one"
            },
            {
              "k": "<i>a</i><sub>1</sub><i>a</i><sub>2</sub> + <i>b</i><sub>1</sub><i>b</i><sub>2</sub> = 0",
              "v": "the original lines are already perpendicular, both angles are 90°, and acute against obtuse has no meaning"
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "DIAGRAM · THE TWO BISECTORS",
          "chips": ["The two lines", "The origin's angle", "Both, at right angles"],
          "captions": [
            "4x + 3y − 6 = 0 and 5x + 12y + 9 = 0 cross at J(3, −2), carving the plane into four angles in two equal pairs. The origin O sits inside one of them, and which one is the whole question.",
            "Make both constants positive first: the first line becomes −4x − 3y + 6 = 0, and the second already has +9. Then the “+” combination gives 7x + 9y − 3 = 0, the bisector of the angle containing the origin. Taking “+” on the lines as given would have returned the other one.",
            "Both bisectors, 7x + 9y − 3 = 0 with slope −7/9 and 9x − 7y − 41 = 0 with slope 9/7. Their product is −1, so they cross at exactly 90°, which is true of every pair of angle bisectors and is your free check."
          ],
          "frames": [
            {
              "x": [-1, 6.5],
              "y": [-5.5, 3.5],
              "curves": [
                { "c": "line", "m": -1.3333, "k": 2 },
                { "c": "line", "m": -0.41667, "k": -0.75 }
              ],
              "points": [
                { "x": 3, "y": -2, "label": "J(3, −2)" },
                { "x": 0, "y": 0, "label": "O", "soft": true }
              ]
            },
            {
              "x": [-1, 6.5],
              "y": [-5.5, 3.5],
              "curves": [
                { "c": "line", "m": -1.3333, "k": 2, "soft": true },
                { "c": "line", "m": -0.41667, "k": -0.75, "soft": true },
                { "c": "line", "m": -0.7778, "k": 0.3333 }
              ],
              "points": [
                { "x": 3, "y": -2, "label": "J" },
                { "x": 0, "y": 0, "label": "O", "soft": true }
              ]
            },
            {
              "x": [-1, 6.5],
              "y": [-5.5, 3.5],
              "curves": [
                { "c": "line", "m": -1.3333, "k": 2, "soft": true },
                { "c": "line", "m": -0.41667, "k": -0.75, "soft": true },
                { "c": "line", "m": -0.7778, "k": 0.3333 },
                { "c": "line", "m": 1.2857, "k": -5.8571 }
              ],
              "points": [{ "x": 3, "y": -2, "label": "J" }],
              "labels": [{ "x": 1.6, "y": 3.0, "text": "the bisectors cross at 90°" }]
            }
          ]
        },
        {
          "t": "proc",
          "title": "Identifying the bisector you were asked for",
          "steps": [
            "<b>Rewrite both lines so their constant terms are positive</b>, multiplying an equation through by −1 where needed. Every rule below assumes this, and skipping it inverts all of them. The side of a line on which the origin lies is encoded in the sign of the constant, so forcing <i>c</i><sub>1</sub>, <i>c</i><sub>2</sub> > 0 pins the origin to the positive side of both.",
            "<b>For the angle containing the origin, take the “+” combination.</b> No dot product is needed, and no further work.",
            "<b>For acute against obtuse, compute <i>a</i><sub>1</sub><i>a</i><sub>2</sub> + <i>b</i><sub>1</sub><i>b</i><sub>2</sub></b> using the positive-constant forms. Positive means “+” is the obtuse bisector; negative means “+” is the acute one. Write the rule down before you decide, because it is easy to state backwards.",
            "<b>Check the perpendicularity.</b> The two bisectors must satisfy <i>m</i><sub>1</sub><i>m</i><sub>2</sub> = −1. If they do not, there is an arithmetic error above.",
            "<b>Compute only what was asked.</b> If the question wants the origin's bisector, the dot product is wasted effort."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Find the distance of the point (3, −4) from the line 4<i>x</i> + 3<i>y</i> − 5 = 0.",
          "steps": [
            "Here <i>A</i> = 4, <i>B</i> = 3, <i>C</i> = −5 and (<i>x</i><sub>1</sub>, <i>y</i><sub>1</sub>) = (3, −4).",
            "Numerator: |4(3) + 3(−4) − 5| = |12 − 12 − 5| = 5.",
            "Denominator: √(4<sup>2</sup> + 3<sup>2</sup>) = √25 = 5."
          ],
          "ans": "d = 1 unit"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Find the distance between the parallel lines 3<i>x</i> − 4<i>y</i> + 7 = 0 and 6<i>x</i> − 8<i>y</i> − 5 = 0.",
          "steps": [
            "The coefficients are proportional, so the lines are parallel, but they are <b>not yet comparable</b>: the second has doubled coefficients.",
            "Normalise: 6<i>x</i> − 8<i>y</i> − 5 = 0 becomes 3<i>x</i> − 4<i>y</i> − 2.5 = 0.",
            "Now <i>C</i><sub>1</sub> = 7 and <i>C</i><sub>2</sub> = −2.5, with √(9 + 16) = 5: <i>d</i> = |7 − (−2.5)|/5 = 9.5/5.",
            "The trap: using the lines as written gives |7 − (−5)|/5 = 2.4, and that is the planted wrong answer. The formula is valid only once both lines show the same <i>A</i> and <i>B</i>."
          ],
          "ans": "d = 1.9 = 19/10 units"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "A line through <i>P</i>(1, 1) has inclination θ = 60° and meets 2<i>x</i> + <i>y</i> = 8 at <i>Q</i>. Using the symmetric form, find <i>PQ</i> exactly.",
          "steps": [
            "Parametrise with the unit direction (cos 60°, sin 60°) = (1/2, √3/2): <i>x</i> = 1 + <i>r</i>/2 and <i>y</i> = 1 + (√3/2)<i>r</i>.",
            "<i>Q</i> lies on 2<i>x</i> + <i>y</i> = 8, so substitute: 2(1 + <i>r</i>/2) + (1 + (√3/2)<i>r</i>) = 8, giving 3 + <i>r</i> + (√3/2)<i>r</i> = 8.",
            "So <i>r</i>(2 + √3)/2 = 5 and <i>r</i> = 10/(2 + √3). Rationalise: <i>r</i> = 10(2 − √3)/((2 + √3)(2 − √3)) = 10(2 − √3)/1.",
            "The unit direction is what makes <i>r</i> the true length. Substitute non-unit direction numbers and the parameter silently stops being a distance, with no warning anywhere in the algebra."
          ],
          "ans": "PQ = 10(2 − √3) = 20 − 10√3 ≈ 2.68 units"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "For 4<i>x</i> + 3<i>y</i> − 6 = 0 and 5<i>x</i> + 12<i>y</i> + 9 = 0, find the bisector of the angle containing the origin, and say whether that angle is acute or obtuse.",
          "steps": [
            "Make both constants positive. The first has <i>c</i> = −6, so multiply by −1: −4<i>x</i> − 3<i>y</i> + 6 = 0. The second already has <i>c</i> = +9.",
            "Take the “+” bisector: (−4<i>x</i> − 3<i>y</i> + 6)/5 = (5<i>x</i> + 12<i>y</i> + 9)/13.",
            "Cross-multiply: 13(−4<i>x</i> − 3<i>y</i> + 6) = 5(5<i>x</i> + 12<i>y</i> + 9), so −52<i>x</i> − 39<i>y</i> + 78 = 25<i>x</i> + 60<i>y</i> + 45, giving 77<i>x</i> + 99<i>y</i> − 33 = 0 and, dividing by 11, 7<i>x</i> + 9<i>y</i> − 3 = 0.",
            "Acute or obtuse: <i>a</i><sub>1</sub><i>a</i><sub>2</sub> + <i>b</i><sub>1</sub><i>b</i><sub>2</sub> = (−4)(5) + (−3)(12) = −56 < 0, so the “+” bisector is the <b>acute</b> one, and the origin therefore sits in the acute angle. The trap is using the lines as given, with <i>c</i> = −6, which returns the other bisector entirely."
          ],
          "ans": "7x + 9y − 3 = 0, bisecting the acute angle"
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Find the distance of (2, 3) from the line 3x + 4y − 12 = 0.",
              "a": "|3(2) + 4(3) − 12|/√(9 + 16) = |6 + 12 − 12|/5 = 6/5 = 1.2 units."
            },
            {
              "q": "[CBSE] Find the distance between 2x + y − 3 = 0 and 2x + y + 7 = 0.",
              "a": "The coefficients already match, so d = |−3 − 7|/√(4 + 1) = 10/√5 = 2√5 units."
            },
            {
              "q": "[JEE Main] Find the distance between 5x + 12y − 10 = 0 and 10x + 24y + 13 = 0, minding the normalisation.",
              "a": "Halve the second to 5x + 12y + 6.5 = 0. Then d = |−10 − 6.5|/13 = 16.5/13 = 33/26 ≈ 1.27 units."
            },
            {
              "q": "[JEE Main] Find the ratio in which x + 3y − 6 = 0 divides the segment joining A(−2, 1) and B(4, 3), and say whether A and B are on the same side.",
              "a": "L(A) = −2 + 3 − 6 = −5 and L(B) = 4 + 9 − 6 = 7. Opposite signs, so opposite sides and the line does cut the segment. The ratio is −(−5)/7 = 5/7, internal division in 5 : 7. Check: the dividing point is (1/2, 11/6), and 1/2 + 11/2 − 6 = 0."
            },
            {
              "q": "[JEE Main] For 3x − 4y + 1 = 0 and 12x + 5y − 2 = 0, does the origin lie in the acute angle or the obtuse one?",
              "a": "Make constants positive: the first is fine with c = 1, the second becomes −12x − 5y + 2 = 0. Then a₁a₂ + b₁b₂ = 3(−12) + (−4)(−5) = −36 + 20 = −16 < 0, so the “+” bisector, which is the origin's, is the acute bisector: the origin lies in the ACUTE angle. Independent check: the lines have slopes 3/4 and −12/5, so the acute angle between them is tan⁻¹(63/16) ≈ 75.8°, and the origin's bisector has slope 11/3, which sits exactly halfway between the two inclinations 36.87° and 112.62°."
            }
          ]
        },
        {
          "t": "mcq",
          "q": "The distance of the origin from the line 3<i>x</i> − 4<i>y</i> + 10 = 0 is:",
          "correct": 0,
          "opts": [
            { "label": "2", "nudge": null },
            { "label": "10", "nudge": "This reports the numerator alone and never divides by √(A² + B²). A bare constant term is not a distance." },
            { "label": "10/7", "nudge": "This divides by |A| + |B| = 7 instead of √(A² + B²) = 5. Adding the magnitudes is not the same as the root of the sum of squares." },
            { "label": "−2", "nudge": "A distance can never be negative. This dropped the modulus, which is the one part of the formula that is not optional." }
          ],
          "solution": "d = |3(0) − 4(0) + 10|/√(9 + 16) = 10/5 = 2."
        },
        {
          "t": "mcq",
          "q": "The distance between 4<i>x</i> + 3<i>y</i> − 5 = 0 and 8<i>x</i> + 6<i>y</i> + 10 = 0 is:",
          "correct": 0,
          "opts": [
            { "label": "2", "nudge": null },
            { "label": "3", "nudge": "This uses the un-normalised constant: |−5 − 10|/5 = 3. The second line must be halved to 4x + 3y + 5 = 0 before its constant means anything." },
            { "label": "1.5", "nudge": "This leaves both the constant and the denominator un-normalised, computing 15/√(64 + 36) = 15/10." },
            { "label": "5", "nudge": "This reports √(A² + B²) itself, which is the divisor, not the answer." }
          ],
          "solution": "Halve the second line to 4x + 3y + 5 = 0. Then C₁ = −5, C₂ = 5 and √(16 + 9) = 5, so d = |−5 − 5|/5 = 2."
        },
        {
          "t": "mcq",
          "q": "In the symmetric form (<i>x</i> − <i>x</i><sub>1</sub>)/cos θ = (<i>y</i> − <i>y</i><sub>1</sub>)/sin θ = <i>r</i>, the parameter <i>r</i> represents:",
          "correct": 1,
          "opts": [
            { "label": "the slope of the line", "nudge": "The slope is tan θ, which is built from the two denominators, not from r. r changes as you move along the line; a slope does not." },
            { "label": "the signed distance from (<i>x</i><sub>1</sub>, <i>y</i><sub>1</sub>) to (<i>x</i>, <i>y</i>) along the line", "nudge": null },
            { "label": "the <i>y</i>-intercept", "nudge": "An intercept is a fixed feature of the line. r is a running parameter that takes every real value as the point sweeps along." },
            { "label": "the inclination", "nudge": "θ is the inclination. r is what you walk once you have faced that direction." }
          ],
          "solution": "(cos θ, sin θ) is a unit vector, so each unit of r moves exactly one unit along the line. That is what makes r the genuine signed distance."
        },
        {
          "t": "mcq",
          "q": "To use the rule that the “+” bisector contains the origin, you must first:",
          "correct": 1,
          "opts": [
            { "label": "make both lines pass through the origin", "nudge": "Impossible in general, and it would destroy the configuration you are trying to bisect." },
            { "label": "make both constant terms positive", "nudge": null },
            { "label": "make both slopes positive", "nudge": "The slopes play no part in the origin rule. Only the constants encode which side of each line the origin lies on." },
            { "label": "normalise both lines to unit slope", "nudge": "There is no such step. Each line is divided by its own √(a² + b²), which rescales the equation, not the slope." }
          ],
          "solution": "The identification rules assume c₁ > 0 and c₂ > 0, because the sign of the constant term records the side of the line on which the origin sits. Normalise first, every time."
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Skipping normalisation for parallel lines.</b> |<i>C</i><sub>1</sub> − <i>C</i><sub>2</sub>|/√(<i>A</i><sup>2</sup> + <i>B</i><sup>2</sup>) is valid <i>only</i> when both lines show identical <i>A</i> and <i>B</i>. Always rescale one line first.",
            "<b>Dropping the modulus in the point-to-line distance.</b> Distance is non-negative and the bars are mandatory. The signed value is useful, but it is not the distance.",
            "<b>The wrong denominator.</b> It is √(<i>A</i><sup>2</sup> + <i>B</i><sup>2</sup>), not <i>A</i><sup>2</sup> + <i>B</i><sup>2</sup> and not |<i>A</i>| + |<i>B</i>|.",
            "<b>Non-unit direction numbers in the symmetric form.</b> If the direction you use is not (cos θ, sin θ), the parameter stops equalling the true distance and nothing in the algebra warns you.",
            "<b>Skipping the positive-constant normalisation before the bisector rules, or sharing one denominator.</b> Each line gets its own √(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>), and every origin, acute and obtuse rule assumes <i>c</i><sub>1</sub>, <i>c</i><sub>2</sub> > 0."
          ]
        },
        {
          "t": "protip",
          "html": "the signed quantity <i>Ax</i><sub>1</sub> + <i>By</i><sub>1</sub> + <i>C</i>, before you take the modulus, is worth more than the distance itself. same sign at two points means same side, opposite signs mean the line separates them. that one observation answers “do these lie on the same side”, “does this line cut the segment” and “is the origin inside this triangle”, with no construction at all."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "d = |Ax₁ + By₁ + C| / √(A² + B²)",
              "note": "modulus on top, root sum of squares below"
            },
            {
              "f": "Parallel lines: d = |C₁ − C₂| / √(A² + B²)",
              "note": "normalise to identical A and B first"
            },
            {
              "f": "(x − x₁)/cos θ = (y − y₁)/sin θ = r",
              "note": "a unit step makes r the true distance"
            },
            {
              "f": "sign of L = Ax₁ + By₁ + C gives the side",
              "note": "PX : XQ = −L(P)/L(Q), positive means internal"
            },
            {
              "f": "Bisectors: L₁/√(a₁² + b₁²) = ±L₂/√(a₂² + b₂²)",
              "note": "positive constants first, then + is the origin's"
            },
            {
              "f": "a₁a₂ + b₁b₂ > 0 ⇒ + is obtuse; < 0 ⇒ + is acute",
              "note": "and the two bisectors are always perpendicular"
            }
          ],
          "aids": [
            "“normalise, then subtract”",
            "“r is the ruler”",
            "“positive constants first, then plus is the origin's side”"
          ]
        }
      ]
    },
    {
      "n": "05",
      "title": "Intersection, Concurrency and Triangle Centres",
      "chip": "05 MEETING",
      "kalam": "both zero, so the sum is zero",
      "blocks": [
        {
          "t": "p",
          "html": "Two roads that are not parallel cross at exactly one junction. Finding that junction algebraically is just solving the two line equations together: the (<i>x</i>, <i>y</i>) that satisfies both is the crossing point. Scale up and the question gets interesting. When do <b>three</b> roads all meet at a single roundabout? That is <b>concurrency</b>, and it is a common exam setup. You could find where two of them cross and then check the third passes through it, but there is a slicker determinant test that does it in one shot."
        },
        {
          "t": "think",
          "html": "suppose two lines L₁ = 0 and L₂ = 0 cross at J. at J both are zero, so any combination L₁ + λL₂ is automatically zero there too. every single member of that family passes through J, whatever λ you pick. it feels like magic the first time."
        },
        {
          "t": "p",
          "html": "That is the cleverest idea in the chapter. <i>L</i><sub>1</sub> + λ<i>L</i><sub>2</sub> = 0 is a family of <b>all</b> lines through the junction, one for each λ. If you need the line through <i>J</i> that also satisfies one more condition, passes through a given point, has a given slope, is perpendicular to something, just impose that condition to pin down λ. <b>You never have to compute <i>J</i> itself</b>, and that is exactly the elegance examiners reward."
        },
        {
          "t": "formula",
          "kicker": "WHERE TWO LINES MEET",
          "tag": "Cramer, and the three cases",
          "main": "<i>x</i> = (<i>b</i><sub>1</sub><i>c</i><sub>2</sub> − <i>b</i><sub>2</sub><i>c</i><sub>1</sub>)/(<i>a</i><sub>1</sub><i>b</i><sub>2</sub> − <i>a</i><sub>2</sub><i>b</i><sub>1</sub>) · <i>y</i> = (<i>c</i><sub>1</sub><i>a</i><sub>2</sub> − <i>c</i><sub>2</sub><i>a</i><sub>1</sub>)/(<i>a</i><sub>1</sub><i>b</i><sub>2</sub> − <i>a</i><sub>2</sub><i>b</i><sub>1</sub>)",
          "legend": [
            "<i>a</i><sub>1</sub><i>b</i><sub>2</sub> − <i>a</i><sub>2</sub><i>b</i><sub>1</sub> ≠ 0 is exactly the condition for a unique crossing",
            "<i>a</i><sub>1</sub>/<i>a</i><sub>2</sub> = <i>b</i><sub>1</sub>/<i>b</i><sub>2</sub> ≠ <i>c</i><sub>1</sub>/<i>c</i><sub>2</sub> is parallel and distinct, and all three ratios equal is coincident"
          ],
          "note": "For two small numeric equations, substitution is faster and less error-prone than Cramer. Keep the closed formula for the case where the coefficients carry letters."
        },
        {
          "t": "formula",
          "kicker": "CONCURRENCY OF THREE LINES",
          "tag": "one determinant, no intersection point",
          "main": "<i>a</i><sub>1</sub>(<i>b</i><sub>2</sub><i>c</i><sub>3</sub> − <i>b</i><sub>3</sub><i>c</i><sub>2</sub>) + <i>b</i><sub>1</sub>(<i>c</i><sub>2</sub><i>a</i><sub>3</sub> − <i>c</i><sub>3</sub><i>a</i><sub>2</sub>) + <i>c</i><sub>1</sub>(<i>a</i><sub>2</sub><i>b</i><sub>3</sub> − <i>a</i><sub>3</sub><i>b</i><sub>2</sub>) = 0",
          "legend": [
            "the three rows are the coefficients (<i>a</i>, <i>b</i>, <i>c</i>) of the three lines, taken in order",
            "the test presumes <b>no two of the three are parallel</b>, since parallel lines cannot share a finite point at all"
          ],
          "note": "It works because concurrency says the homogeneous 3 × 3 system has the non-zero solution (x₀, y₀, 1), and a homogeneous system has a non-zero solution exactly when its coefficient determinant vanishes. Keep the + − + pattern explicit across the row you expand along; rushing the middle minor is where marks vanish."
        },
        {
          "t": "formula",
          "kicker": "THE FAMILY THROUGH A JUNCTION",
          "tag": "and, read backwards, the fixed point",
          "main": "<i>L</i><sub>1</sub> + λ<i>L</i><sub>2</sub> = 0",
          "legend": [
            "at the junction both <i>L</i><sub>1</sub> and <i>L</i><sub>2</sub> vanish, so the combination vanishes for every λ: every member passes through it",
            "the family reaches every line through the junction <i>except</i> <i>L</i><sub>2</sub> = 0 itself, which would need λ to run off to infinity"
          ],
          "note": "Run it backwards and it finds a fixed point. Given a line whose coefficients are linear in a parameter, regroup as (…) + λ(…) = 0. For a point to satisfy it for <i>every</i> λ, both brackets must vanish separately, so solve them simultaneously: that solution is the fixed point every member passes through."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "DIAGRAM · THE PENCIL THROUGH A JUNCTION",
          "chips": ["λ = 0", "λ = 1", "λ = −1", "The whole pencil"],
          "captions": [
            "The base lines are L₁: x + y − 4 = 0 and L₂: x − y = 0, crossing at J(2, 2). At λ = 0 the family member is L₁ itself, drawn dark, with L₂ left grey behind it.",
            "At λ = 1 the family gives (x + y − 4) + (x − y) = 2x − 4 = 0, that is the vertical line x = 2. No slope form could have produced it, and yet the family reaches it without effort, because the family is built from equations rather than from slopes.",
            "At λ = −1 the y-terms survive instead: (x + y − 4) − (x − y) = 2y − 4 = 0, the horizontal line y = 2. One parameter has already delivered a vertical line, a horizontal one and everything slanted in between.",
            "Several members at once. Every one of them passes through J(2, 2) and nothing else was imposed. The only line through J the family misses is L₂ itself, which would need λ to run off to infinity, so check that case separately if your answer might be it."
          ],
          "frames": [
            {
              "x": [-2, 6.5],
              "y": [-2.5, 6.5],
              "curves": [
                { "c": "line", "m": -1, "k": 4 },
                { "c": "line", "m": 1, "k": 0, "soft": true }
              ],
              "points": [{ "x": 2, "y": 2, "label": "J(2, 2)" }]
            },
            {
              "x": [-2, 6.5],
              "y": [-2.5, 6.5],
              "curves": [
                { "c": "line", "m": -1, "k": 4, "soft": true },
                { "c": "line", "m": 1, "k": 0, "soft": true },
                { "c": "vline", "x": 2 }
              ],
              "points": [{ "x": 2, "y": 2, "label": "J" }],
              "labels": [{ "x": 3.7, "y": 5.6, "text": "x = 2" }]
            },
            {
              "x": [-2, 6.5],
              "y": [-2.5, 6.5],
              "curves": [
                { "c": "line", "m": -1, "k": 4, "soft": true },
                { "c": "line", "m": 1, "k": 0, "soft": true },
                { "c": "line", "m": 0, "k": 2 }
              ],
              "points": [{ "x": 2, "y": 2, "label": "J" }],
              "labels": [{ "x": 5.0, "y": 2.7, "text": "y = 2" }]
            },
            {
              "x": [-2, 6.5],
              "y": [-2.5, 6.5],
              "curves": [
                { "c": "line", "m": -1, "k": 4, "soft": true },
                { "c": "line", "m": 1, "k": 0, "soft": true },
                { "c": "line", "m": 2, "k": -2 },
                { "c": "line", "m": -0.5, "k": 3 },
                { "c": "line", "m": 0, "k": 2 },
                { "c": "vline", "x": 2 }
              ],
              "points": [{ "x": 2, "y": 2, "label": "J" }]
            }
          ]
        },
        {
          "t": "proc",
          "title": "Using the family trick",
          "steps": [
            "<b>Write <i>L</i><sub>1</sub> + λ<i>L</i><sub>2</sub> = 0</b> and expand into <i>Ax</i> + <i>By</i> + <i>C</i> = 0 shape, so that the coefficients now carry λ.",
            "<b>Impose the extra condition.</b> Passes through a point: substitute it. Given slope: set −<i>A</i>/<i>B</i> equal to it. Parallel to an axis: set the appropriate coefficient to zero. Perpendicular to a line: set the slope product to −1.",
            "<b>Solve for λ and substitute back</b>, then clear fractions. The intersection point never appears anywhere in the working, which is the whole payoff.",
            "<b>Check the excluded member.</b> If the answer might be <i>L</i><sub>2</sub> = 0 itself, the family cannot produce it, so test that line separately.",
            "<b>Reading the family backwards</b>, group a λ-carrying equation into a λ-free bracket plus λ times a second bracket, set both to zero, and solve. If two parameters appear, group by each in turn and set every group to zero."
          ]
        },
        {
          "t": "p",
          "html": "Now point all of this at one triangle. A village panchayat owns a triangular plot and has to decide where to sink the borewell. One elder says <b>put it where the plot balances</b>: rest the shape on a pin and there is exactly one point where it will not topple, the <b>centroid</b> <i>G</i>. A second says <b>put it equally far from all three boundary walls</b>, so one circular apron of paving serves every fence: the <b>incentre</b> <i>I</i>. A third says <b>put it equally far from all three corner posts</b>, so a single cable of one length reaches each: the <b>circumcentre</b> <i>O</i>. Then the youngest member asks whether the three perpendiculars dropped from each corner onto the opposite wall meet. They do, at the <b>orthocentre</b> <i>H</i>, and it is the one with no “equally far from” description at all, which is exactly why students find it slippery."
        },
        {
          "t": "p",
          "html": "Every one of those four is a <b>concurrency statement</b>, and you already know what concurrency costs: three arbitrary lines in a plane do not meet at a point. So each centre is a small miracle that has to be proved. The structural fact worth carrying is that three of the four are <b>collinear</b>. For any non-equilateral triangle, <i>O</i>, <i>G</i> and <i>H</i> lie on one straight line, the <b>Euler line</b>, with <i>G</i> always between the other two, dividing <i>OH</i> in the ratio 1 : 2. The incentre is the odd one out and does not sit on it, except in an isosceles triangle where symmetry drags every centre onto the axis."
        },
        {
          "t": "defgrid",
          "title": "The four centres",
          "rows": [
            {
              "k": "Centroid <i>G</i>",
              "v": "medians meet · the plain average of the vertices · divides each median 2 : 1 from the vertex"
            },
            {
              "k": "Incentre <i>I</i>",
              "v": "internal bisectors meet · equidistant from the three <b>sides</b> · inradius <i>r</i> = Δ/<i>s</i>"
            },
            {
              "k": "Circumcentre <i>O</i>",
              "v": "perpendicular bisectors meet · equidistant from the three <b>vertices</b> · <i>R</i> = <i>abc</i>/4Δ"
            },
            {
              "k": "Orthocentre <i>H</i>",
              "v": "altitudes meet · no “equally far from” description exists, so compute it or read it off the Euler line"
            },
            {
              "k": "Where they sit",
              "v": "<i>G</i> and <i>I</i> are always inside · <i>O</i> and <i>H</i> fall outside an obtuse triangle · every excentre is outside"
            },
            {
              "k": "Right angle at <i>C</i>",
              "v": "<i>H</i> = <i>C</i> and <i>O</i> = midpoint of the hypotenuse <i>AB</i>. Screen for this before computing anything"
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "THE INCENTRE, AND THE ONE LINE THAT COSTS MARKS",
          "tag": "each weight is the opposite side",
          "main": "<i>I</i> = (<i>ax</i><sub>1</sub> + <i>bx</i><sub>2</sub> + <i>cx</i><sub>3</sub>)/(<i>a</i> + <i>b</i> + <i>c</i>), and the same for <i>y</i>",
          "legend": [
            "<i>a</i> = <i>BC</i>, <i>b</i> = <i>CA</i>, <i>c</i> = <i>AB</i>: each weight is the side <b>opposite</b> its vertex, never the side that starts at it",
            "flip the sign of exactly one weight, in numerator <b>and</b> denominator, and you get that vertex's excentre, which always lies outside"
          ],
          "note": "Write the three labelled lengths on their own line before touching the formula. The mis-ordered version still lands inside the triangle, so it survives a lazy “is it inside?” check and is a planted option in every paper that sets this."
        },
        {
          "t": "formula",
          "kicker": "THE EULER LINE",
          "tag": "never compute all three centres",
          "main": "<i>H</i> = 3<i>G</i> − 2<i>O</i> = <i>A</i> + <i>B</i> + <i>C</i> − 2<i>O</i>",
          "legend": [
            "<i>O</i>, <i>G</i> and <i>H</i> are collinear, with <i>OG</i> : <i>GH</i> = 1 : 2, so the short piece sits next to the circumcentre",
            "rearranged: <i>O</i> = (3<i>G</i> − <i>H</i>)/2 and <i>G</i> = (<i>H</i> + 2<i>O</i>)/3"
          ],
          "note": "G is one addition, so compute G plus whichever of O and H looks cheaper and let this relation hand you the third. If a question gives you two centres and asks for the third, this relation is the entire solution. For an equilateral triangle all four centres coincide and no line is determined, so do not go hunting for one."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "DIAGRAM · FOUR CONCURRENCIES, AND ONE STRAIGHT LINE",
          "chips": ["The triangle", "Centroid G", "Circumcentre O", "Orthocentre H", "The Euler line"],
          "captions": [
            "A(5, 7), B(−2, 6), C(2, −2). A plain scalene triangle, chosen because nothing about it is symmetric, so no centre can be guessed from the picture.",
            "The three medians, each joining a vertex to the midpoint of the opposite side. They meet at G(5/3, 11/3), the average of the three vertices, and G cuts every median in the ratio 2 : 1 measured from the vertex.",
            "The circumcircle, centre O(2, 3) and radius R = 5. O is the point equidistant from all three vertices, found by solving OA squared = OB squared and OB squared = OC squared: two linear equations, because squaring kills the x squared and y squared terms on both sides.",
            "The altitudes, each dropped from a vertex perpendicular to the opposite side. They meet at H(1, 5). Two altitudes are enough to find it, since concurrency is a theorem and the third is only ever a verification.",
            "O(2, 3), G(5/3, 11/3) and H(1, 5) all lie on 2x + y − 7 = 0, the Euler line, with G between the other two and OG : GH = 1 : 2. Find any two of the three and the last one is arithmetic."
          ],
          "frames": [
            {
              "x": [-4.5, 7.5],
              "y": [-4, 9],
              "points": [
                { "x": 5, "y": 7, "label": "A(5, 7)" },
                { "x": -2, "y": 6, "label": "B(−2, 6)" },
                { "x": 2, "y": -2, "label": "C(2, −2)" }
              ],
              "segments": [
                { "from": [5, 7], "to": [-2, 6] },
                { "from": [-2, 6], "to": [2, -2] },
                { "from": [2, -2], "to": [5, 7] }
              ]
            },
            {
              "x": [-4.5, 7.5],
              "y": [-4, 9],
              "points": [{ "x": 1.6667, "y": 3.6667, "label": "G" }],
              "segments": [
                { "from": [5, 7], "to": [-2, 6], "soft": true },
                { "from": [-2, 6], "to": [2, -2], "soft": true },
                { "from": [2, -2], "to": [5, 7], "soft": true },
                { "from": [5, 7], "to": [0, 2], "dash": true },
                { "from": [-2, 6], "to": [3.5, 2.5], "dash": true },
                { "from": [2, -2], "to": [1.5, 6.5], "dash": true }
              ]
            },
            {
              "x": [-4.5, 7.5],
              "y": [-4, 9],
              "curves": [{ "c": "circle", "cx": 2, "cy": 3, "r": 5 }],
              "points": [{ "x": 2, "y": 3, "label": "O" }],
              "segments": [
                { "from": [5, 7], "to": [-2, 6], "soft": true },
                { "from": [-2, 6], "to": [2, -2], "soft": true },
                { "from": [2, -2], "to": [5, 7], "soft": true }
              ]
            },
            {
              "x": [-4.5, 7.5],
              "y": [-4, 9],
              "points": [{ "x": 1, "y": 5, "label": "H" }],
              "segments": [
                { "from": [5, 7], "to": [-2, 6], "soft": true },
                { "from": [-2, 6], "to": [2, -2], "soft": true },
                { "from": [2, -2], "to": [5, 7], "soft": true },
                { "from": [5, 7], "to": [-1, 4], "dash": true },
                { "from": [-2, 6], "to": [4, 4], "dash": true }
              ]
            },
            {
              "x": [-4.5, 7.5],
              "y": [-4, 9],
              "curves": [{ "c": "line", "m": -2, "k": 7 }],
              "points": [
                { "x": 2, "y": 3, "label": "O" },
                { "x": 1.6667, "y": 3.6667, "label": "G" },
                { "x": 1, "y": 5, "label": "H" }
              ],
              "segments": [
                { "from": [5, 7], "to": [-2, 6], "soft": true },
                { "from": [-2, 6], "to": [2, -2], "soft": true },
                { "from": [2, -2], "to": [5, 7], "soft": true }
              ]
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE ALTITUDES MEET, AND THE EULER LINE COMES FREE",
          "steps": [
            {
              "eq": "shift the origin to the circumcentre <i>O</i>",
              "why": "Translating axes changes no distance and no perpendicularity, so nothing about the triangle is disturbed, and the defining property of O becomes as simple as it can possibly be."
            },
            {
              "eq": "|<i>A</i>| = |<i>B</i>| = |<i>C</i>| = <i>R</i>",
              "why": "O is equidistant from the three vertices, and with O at the origin each vertex's position vector has length exactly R."
            },
            {
              "eq": "test the candidate <i>P</i> = <i>A</i> + <i>B</i> + <i>C</i>",
              "why": "A guess, but a symmetric one, and symmetry is what will do the work: whatever we prove about one vertex will then hold for all three with no fresh computation."
            },
            {
              "eq": "(<i>P</i> − <i>A</i>)·(<i>B</i> − <i>C</i>) = (<i>B</i> + <i>C</i>)·(<i>B</i> − <i>C</i>) = |<i>B</i>|<sup>2</sup> − |<i>C</i>|<sup>2</sup> = 0",
              "why": "A zero dot product means AP is perpendicular to BC, so P lies on the line through A perpendicular to BC, which is the altitude from A."
            },
            {
              "eq": "the same computation puts <i>P</i> on the other two altitudes, so <i>H</i> = <i>A</i> + <i>B</i> + <i>C</i>",
              "why": "A + B + C is symmetric in the three vertices, so the argument above repeats verbatim starting from B or from C. The altitudes are concurrent."
            },
            {
              "eq": "<i>G</i> = (<i>A</i> + <i>B</i> + <i>C</i>)/3 = <i>H</i>/3, so <i>H</i> = 3<i>G</i>, and undoing the shift gives <i>H</i> = 3<i>G</i> − 2<i>O</i>",
              "why": "With O at the origin, H is exactly three times G, so O, G and H lie on one line through O with OG : GH = 1 : 2. Translating back restores the general statement, and no determinant was needed anywhere."
            }
          ]
        },
        {
          "t": "proc",
          "title": "Circumcentre and orthocentre, cheaply",
          "steps": [
            "<b>Screen for a right angle first.</b> One dot product of two side vectors at a vertex does it. If the angle at <i>C</i> is right then <i>H</i> = <i>C</i> and <i>O</i> is the midpoint of <i>AB</i>: stop, you are done, and you have saved a minute.",
            "<b>For <i>O</i>, let <i>O</i> = (<i>x</i>, <i>y</i>) and write <i>OA</i><sup>2</sup> = <i>OB</i><sup>2</sup>.</b> Square, never root: the <i>x</i><sup>2</sup> and <i>y</i><sup>2</sup> terms cancel on both sides and what survives is a linear equation. Repeat with <i>OB</i><sup>2</sup> = <i>OC</i><sup>2</sup> and solve the pair.",
            "<b>Confirm <i>R</i><sup>2</sup> = <i>OA</i><sup>2</sup> = <i>OB</i><sup>2</sup> = <i>OC</i><sup>2</sup>.</b> The third equality was never imposed, so agreeing is genuine evidence and not a circular check.",
            "<b>For <i>H</i>, take the slope of <i>BC</i>, flip and negate</b>, and write that altitude through <i>A</i> in point-slope form. Repeat for one more altitude and stop: concurrency is a theorem, so the third altitude is only a verification.",
            "<b>Handle horizontal and vertical sides by inspection.</b> If a side is horizontal the altitude to it is the vertical line through the opposite vertex; if a side is vertical the altitude is horizontal. The slope formula is undefined there.",
            "<b>Never compute all three of <i>O</i>, <i>G</i> and <i>H</i>.</b> Get <i>G</i> free, get whichever of <i>O</i> and <i>H</i> is cheaper, and let <i>H</i> = 3<i>G</i> − 2<i>O</i> deliver the last."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Find the point of intersection of 2<i>x</i> + 3<i>y</i> − 8 = 0 and <i>x</i> − <i>y</i> + 1 = 0.",
          "steps": [
            "From the second equation, <i>x</i> = <i>y</i> − 1.",
            "Substitute: 2(<i>y</i> − 1) + 3<i>y</i> − 8 = 0, so 5<i>y</i> − 10 = 0 and <i>y</i> = 2, giving <i>x</i> = 1."
          ],
          "ans": "(1, 2)"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Find the line through the intersection of <i>x</i> + 2<i>y</i> − 5 = 0 and 3<i>x</i> − <i>y</i> + 1 = 0 that also passes through (2, 1), using the family method.",
          "steps": [
            "Family: (<i>x</i> + 2<i>y</i> − 5) + λ(3<i>x</i> − <i>y</i> + 1) = 0.",
            "Impose passage through (2, 1): (2 + 2 − 5) + λ(6 − 1 + 1) = 0, so −1 + 6λ = 0 and λ = 1/6.",
            "Substitute and clear the fraction: 6(<i>x</i> + 2<i>y</i> − 5) + (3<i>x</i> − <i>y</i> + 1) = 0, giving 6<i>x</i> + 12<i>y</i> − 30 + 3<i>x</i> − <i>y</i> + 1 = 0.",
            "Notice that the intersection point was never computed. That is the payoff, and it is the reason examiners set the question this way."
          ],
          "ans": "9x + 11y − 29 = 0"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Show that (2 + λ)<i>x</i> + (1 − 3λ)<i>y</i> + (λ − 5) = 0 passes through a fixed point for every real λ, and find it.",
          "steps": [
            "Separate the terms carrying λ from those that do not: 2<i>x</i> + <i>y</i> − 5 + λ(<i>x</i> − 3<i>y</i> + 1) = 0.",
            "For a point to satisfy this for <b>every</b> λ, both brackets must vanish: 2<i>x</i> + <i>y</i> − 5 = 0 and <i>x</i> − 3<i>y</i> + 1 = 0.",
            "From the second, <i>x</i> = 3<i>y</i> − 1. Substituting: 2(3<i>y</i> − 1) + <i>y</i> − 5 = 0, so 7<i>y</i> = 7, <i>y</i> = 1 and <i>x</i> = 2.",
            "Verify directly for arbitrary λ: (2 + λ)(2) + (1 − 3λ)(1) + (λ − 5) = 4 + 2λ + 1 − 3λ + λ − 5 = 0. The λ terms cancel identically."
          ],
          "ans": "Fixed point (2, 1)"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "For <i>A</i>(5, 7), <i>B</i>(−2, 6), <i>C</i>(2, −2), find <i>O</i>, <i>G</i>, <i>H</i> and the Euler line, computing at most one of <i>O</i> and <i>H</i> from scratch.",
          "steps": [
            "<i>O</i> by equidistance. <i>OA</i><sup>2</sup> = <i>OB</i><sup>2</sup> gives −10<i>x</i> + 25 − 14<i>y</i> + 49 = 4<i>x</i> + 4 − 12<i>y</i> + 36, that is 7<i>x</i> + <i>y</i> = 17. <i>OB</i><sup>2</sup> = <i>OC</i><sup>2</sup> gives <i>x</i> − 2<i>y</i> = −4.",
            "Solving, <i>x</i> = 2<i>y</i> − 4 and 14<i>y</i> − 28 + <i>y</i> = 17, so <i>y</i> = 3 and <i>x</i> = 2. <i>O</i> = (2, 3), with <i>R</i><sup>2</sup> = 9 + 16 = 25, and the unimposed check <i>OC</i><sup>2</sup> = 0 + 25 holds.",
            "<i>G</i> = ((5 − 2 + 2)/3, (7 + 6 − 2)/3) = (5/3, 11/3), one addition.",
            "<i>H</i> = 3<i>G</i> − 2<i>O</i> = (5 − 4, 11 − 6) = (1, 5), with no altitude written at all. Check it: <i>AH</i> = (−4, −2) and <i>BC</i> = (4, −8) have dot product −16 + 16 = 0, so <i>AH</i> ⊥ <i>BC</i>. The brute-force route would have needed four line equations and two simultaneous systems."
          ],
          "ans": "O = (2, 3), G = (5/3, 11/3), H = (1, 5), Euler line 2x + y − 7 = 0"
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Find the point of intersection of 3x − 2y − 1 = 0 and x + 2y − 7 = 0.",
              "a": "Adding kills y: 4x − 8 = 0, so x = 2 and then 2y = 5, giving (2, 5/2)."
            },
            {
              "q": "[CBSE] Are x + y − 3 = 0, 2x − y = 0 and x − 2 = 0 concurrent?",
              "a": "The first two meet where 3x = 3, at (1, 2). The third line is x = 2, which does not pass through (1, 2). Not concurrent."
            },
            {
              "q": "[JEE Main] Using the family method, find the line through the intersection of 2x − 3y + 4 = 0 and x + y − 3 = 0 that is parallel to the x-axis.",
              "a": "Family: (2 + λ)x + (−3 + λ)y + (4 − 3λ) = 0. Parallel to the x-axis needs the x-coefficient to vanish, so λ = −2, giving −5y + 10 = 0, that is y = 2."
            },
            {
              "q": "[JEE Main] Find the area of the triangle formed by the lines y = x, y = 2x and x + y = 6.",
              "a": "Pairwise intersections: y = x with y = 2x at (0, 0); y = x with x + y = 6 at (3, 3); y = 2x with x + y = 6 at (2, 4). Then Δ = ½|0(3 − 4) + 3(4 − 0) + 2(0 − 3)| = ½|12 − 6| = 3 square units."
            },
            {
              "q": "[JEE Advanced] For A(0, 0), B(6, 0), C(2, 4), find G, O and H, write the Euler line, and verify HG : GO = 2 : 1.",
              "a": "G = (8/3, 4/3). OA² = OB² gives x = 3; OA² = OC² gives 9 + y² = 1 + (y − 4)², so y = 1 and O = (3, 1), with OA² = OB² = OC² = 10. Then H = 3G − 2O = (8 − 6, 4 − 2) = (2, 2). The Euler line through O and H has slope −1: x + y − 4 = 0, and G obliges since 8/3 + 4/3 = 4. Finally HG = √2·(2/3) and GO = √2·(1/3), a ratio of 2 : 1."
            }
          ]
        },
        {
          "t": "mcq",
          "q": "The lines <i>a</i><sub>1</sub><i>x</i> + <i>b</i><sub>1</sub><i>y</i> + <i>c</i><sub>1</sub> = 0 and <i>a</i><sub>2</sub><i>x</i> + <i>b</i><sub>2</sub><i>y</i> + <i>c</i><sub>2</sub> = 0 are parallel and distinct when:",
          "correct": 2,
          "opts": [
            { "label": "<i>a</i><sub>1</sub><i>b</i><sub>2</sub> − <i>a</i><sub>2</sub><i>b</i><sub>1</sub> ≠ 0", "nudge": "That is the condition for the lines to <i>intersect</i>, which is the opposite of parallel." },
            { "label": "<i>a</i><sub>1</sub>/<i>a</i><sub>2</sub> = <i>b</i><sub>1</sub>/<i>b</i><sub>2</sub> = <i>c</i><sub>1</sub>/<i>c</i><sub>2</sub>", "nudge": "All three ratios equal makes the two equations the same line, coincident rather than distinct." },
            { "label": "<i>a</i><sub>1</sub>/<i>a</i><sub>2</sub> = <i>b</i><sub>1</sub>/<i>b</i><sub>2</sub> ≠ <i>c</i><sub>1</sub>/<i>c</i><sub>2</sub>", "nudge": null },
            { "label": "<i>a</i><sub>1</sub><i>a</i><sub>2</sub> + <i>b</i><sub>1</sub><i>b</i><sub>2</sub> = 0", "nudge": "That is the perpendicularity condition on the two normals, which is as far from parallel as two lines can get." }
          ],
          "solution": "Equal ratios of the x and y coefficients mean the same direction, and a different constant ratio means the lines are shifted apart rather than identical."
        },
        {
          "t": "mcq",
          "q": "Every member of the family (2<i>x</i> − <i>y</i> + 1) + λ(<i>x</i> + 3<i>y</i> − 2) = 0 passes through:",
          "correct": 1,
          "opts": [
            { "label": "the origin", "nudge": "At the origin the equation reads 1 + λ(−2) = 0, which is true for λ = 1/2 alone and not for every λ." },
            { "label": "the intersection of 2<i>x</i> − <i>y</i> + 1 = 0 and <i>x</i> + 3<i>y</i> − 2 = 0", "nudge": null },
            { "label": "(1, 1)", "nudge": "At (1, 1) the equation reads 2 + λ(2) = 0, again true for one particular λ and not for all of them." },
            { "label": "no common point", "nudge": "This contradicts the family theorem: both brackets vanish at the junction, so their combination vanishes there for every λ." }
          ],
          "solution": "At the junction of the two base lines both L₁ and L₂ are zero, so L₁ + λL₂ is zero there whatever λ is. That is the construction of the family."
        },
        {
          "t": "mcq",
          "q": "In the incentre formula <i>I</i> = (<i>ax</i><sub>1</sub> + <i>bx</i><sub>2</sub> + <i>cx</i><sub>3</sub>)/(<i>a</i> + <i>b</i> + <i>c</i>) for △<i>ABC</i>, the weight <i>a</i> is:",
          "correct": 0,
          "opts": [
            { "label": "the length <i>BC</i>", "nudge": null },
            { "label": "the length <i>AB</i>", "nudge": "The classic left-to-right misreading: pairing A with the side that <i>starts</i> at A. It produces a wrong point that still lies inside the triangle, so it survives casual checking." },
            { "label": "the length <i>CA</i>", "nudge": "The same misreading run the other way round the triangle, pairing A with the side that <i>ends</i> at it." },
            { "label": "the measure of angle <i>A</i>", "nudge": "The weights are lengths. You cannot average coordinates against degrees, and weighting by angles gives a genuinely different point." }
          ],
          "solution": "The weights are the side lengths labelled by the vertex they are opposite to: a = BC, b = CA, c = AB. Write the three labelled values down before you use the formula."
        },
        {
          "t": "mcq",
          "q": "If <i>O</i>, <i>G</i>, <i>H</i> are the circumcentre, centroid and orthocentre of a non-equilateral triangle, then:",
          "correct": 0,
          "opts": [
            { "label": "<i>OG</i> : <i>GH</i> = 1 : 2", "nudge": null },
            { "label": "<i>OG</i> : <i>GH</i> = 2 : 1", "nudge": "This inverts the ratio by importing the 2 : 1 of a median, which is measured from a vertex. On the Euler line the short piece sits next to O." },
            { "label": "<i>O</i>, <i>G</i>, <i>H</i> are never collinear", "nudge": "This contradicts the Euler line, and it is what you would guess if you had only ever computed the three centres separately and never compared them." },
            { "label": "<i>G</i> is the midpoint of <i>OH</i>", "nudge": "That would need OG : GH = 1 : 1, i.e. H = 2G − O, which fails on any worked triangle: for A(0,0), B(4,0), C(1,3) it gives (4/3, 1) rather than H = (1, 1)." }
          ],
          "solution": "H = 3G − 2O rearranges to OH = 3·OG as vectors from O, so G divides OH with OG : GH = 1 : 2."
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Solving for the intersection when the family trick is faster.</b> If the question wants a line <i>through</i> an intersection plus one more condition, reach for <i>L</i><sub>1</sub> + λ<i>L</i><sub>2</sub> = 0 and skip the point entirely.",
            "<b>Forgetting the parallel check after the concurrency determinant.</b> A vanishing determinant can also be produced by a degenerate parallel configuration, so verify that no two of the three lines are parallel.",
            "<b>Forgetting that the family misses <i>L</i><sub>2</sub> = 0.</b> The pencil reaches every line through the junction except that one, which would need λ → ∞. Test it separately when your answer might be it.",
            "<b>Mis-ordering the incentre weights.</b> <i>a</i>, <i>b</i>, <i>c</i> are the sides <i>opposite</i> <i>A</i>, <i>B</i>, <i>C</i>, never the sides that begin at them. Two seconds of labelling removes the chapter's most expensive error.",
            "<b>Taking square roots for the circumcentre, or computing a third altitude.</b> <i>OA</i><sup>2</sup> = <i>OB</i><sup>2</sup> kills the squared terms and leaves a linear equation, and concurrency is a theorem you do not have to re-establish each time."
          ]
        },
        {
          "t": "protip",
          "html": "screen every triangle-centre question for a right angle before you compute anything. one dot product tells you whether <i>H</i> and <i>O</i> are already known: <i>H</i> sits at the right-angle vertex and <i>O</i> at the midpoint of the hypotenuse. setters use right triangles constantly because the arithmetic stays clean, and this check turns a three-minute problem into a fifteen-second one."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "Unique crossing ⟺ a₁b₂ − a₂b₁ ≠ 0",
              "note": "equal a and b ratios but not c means parallel"
            },
            {
              "f": "Concurrent ⟺ the 3 × 3 coefficient determinant vanishes",
              "note": "valid only if no two of the three are parallel"
            },
            {
              "f": "L₁ + λL₂ = 0 is every line through the junction",
              "note": "except L₂ itself · run it backwards for a fixed point"
            },
            {
              "f": "G = (A + B + C)/3 · I weights each vertex by the opposite side",
              "note": "r = Δ/s · G and I are always inside"
            },
            {
              "f": "O from OA² = OB² and OB² = OC²",
              "note": "square, never root · R = abc/4Δ"
            },
            {
              "f": "H = 3G − 2O, with OG : GH = 1 : 2",
              "note": "right angle at C ⇒ H = C and O = midpoint of AB"
            }
          ],
          "aids": [
            "“both zero, so the sum is zero”",
            "“determinant dies, they meet”",
            "“opposite, always opposite”",
            "“square it, don’t root it”"
          ]
        }
      ]
    },
    {
      "n": "06",
      "title": "Foot of Perpendicular, Image and Reflection",
      "chip": "06 MIRROR",
      "kalam": "one step to the foot, two to the mirror",
      "blocks": [
        {
          "t": "p",
          "html": "Stand at a point <i>P</i> and shine a torch straight at a wall. The spot where the beam hits perpendicularly is the <b>foot of the perpendicular</b>, the closest point of the wall to you. Walk an equal distance <i>past</i> the wall along the same beam and you reach the <b>image</b> of <i>P</i>, exactly as your reflection in a mirror sits as far behind the glass as you stand in front of it."
        },
        {
          "t": "p",
          "html": "That one picture gives both results at once: the foot <i>Q</i> is the <b>midpoint</b> of <i>P</i> and its image <i>P</i>′, and <i>PP</i>′ is perpendicular to the line. So the foot is halfway to the image, and the image is twice as far as the foot. Everything in this topic is that single idea turned into formulas."
        },
        {
          "t": "think",
          "html": "the line <i>ax</i> + <i>by</i> + <i>c</i> = 0 has normal direction (<i>a</i>, <i>b</i>). to reach the foot you step from P along that normal just far enough to land on the line. the whole topic is one question: how far along the normal do i move? one step for the foot, two for the mirror."
        },
        {
          "t": "formula",
          "kicker": "FOOT OF THE PERPENDICULAR",
          "tag": "one step along the normal",
          "main": "(<i>x</i> − <i>x</i><sub>1</sub>)/<i>a</i> = (<i>y</i> − <i>y</i><sub>1</sub>)/<i>b</i> = −(<i>ax</i><sub>1</sub> + <i>by</i><sub>1</sub> + <i>c</i>)/(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>)",
          "legend": [
            "the common ratio is the scalar <i>t</i> that steps from <i>P</i> along the normal (<i>a</i>, <i>b</i>) until it lands on the line, so <i>Q</i> = (<i>x</i><sub>1</sub> + <i>ta</i>, <i>y</i><sub>1</sub> + <i>tb</i>)",
            "the distance actually travelled is |<i>t</i>|√(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>), which is the point-to-line distance of the previous topic"
          ],
          "note": "The denominator here is a² + b², with no square root. The distance formula's denominator has one. Mixing the two is common and it silently rescales your answer instead of producing an obvious error."
        },
        {
          "t": "formula",
          "kicker": "IMAGE OF A POINT",
          "tag": "the same step, doubled",
          "main": "(<i>x</i>′ − <i>x</i><sub>1</sub>)/<i>a</i> = (<i>y</i>′ − <i>y</i><sub>1</sub>)/<i>b</i> = −2(<i>ax</i><sub>1</sub> + <i>by</i><sub>1</sub> + <i>c</i>)/(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>)",
          "legend": [
            "exactly double the foot's step, because the foot is the midpoint of <i>P</i> and <i>P</i>′",
            "equivalently <i>P</i>′ = 2<i>Q</i> − <i>P</i>, which is the fastest route once you already have the foot"
          ],
          "note": "Drop the factor of 2 and you land on the mirror instead of behind it. A point that already lies on the line has ax₁ + by₁ + c = 0, so the step is zero and the point is its own image, at distance 0 on both sides."
        },
        {
          "t": "defgrid",
          "title": "Reflection as a substitution",
          "tag": "substitute the map into the line's equation",
          "rows": [
            {
              "k": "Mirror <i>y</i> = 0, the <i>x</i>-axis",
              "v": "(<i>x</i>, <i>y</i>) ↦ (<i>x</i>, −<i>y</i>) · substitute <i>y</i> → −<i>y</i>"
            },
            {
              "k": "Mirror <i>x</i> = 0, the <i>y</i>-axis",
              "v": "(<i>x</i>, <i>y</i>) ↦ (−<i>x</i>, <i>y</i>) · substitute <i>x</i> → −<i>x</i>"
            },
            {
              "k": "Mirror <i>y</i> = <i>x</i>",
              "v": "(<i>x</i>, <i>y</i>) ↦ (<i>y</i>, <i>x</i>) · swap <i>x</i> and <i>y</i>"
            },
            {
              "k": "Mirror <i>y</i> = −<i>x</i>",
              "v": "(<i>x</i>, <i>y</i>) ↦ (−<i>y</i>, −<i>x</i>)"
            },
            {
              "k": "Mirror <i>x</i> = <i>h</i> · <i>y</i> = <i>k</i>",
              "v": "(2<i>h</i> − <i>x</i>, <i>y</i>) · (<i>x</i>, 2<i>k</i> − <i>y</i>)"
            },
            {
              "k": "Mirror <i>ax</i> + <i>by</i> + <i>c</i> = 0",
              "v": "the image formula with (<i>x</i><sub>1</sub>, <i>y</i><sub>1</sub>) left running as (<i>x</i>, <i>y</i>)"
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "DIAGRAM · ONE STEP, TWO STEPS, AND THE EASY MIRRORS",
          "chips": ["The foot", "One step, two steps", "Mirror y = x", "Mirror x = 3"],
          "captions": [
            "The mirror is x + y − 1 = 0 and P is (2, 3). Substituting gives 2 + 3 − 1 = 4, and a squared plus b squared is 2, so the step is t = −2 and the foot is Q(0, 1). The dashed segment meets the line at a right angle, which is what makes Q the closest point of the line to P.",
            "Take the same step again and you arrive at P'(−2, −1). The foot is the midpoint of P and its image, so the image uses parameter 2t while the foot uses t. Drop that factor of 2 and you stop on the mirror instead of passing through it.",
            "For y = x there is nothing to compute: reflection swaps the coordinates, so P(4, −1) goes to P'(−1, 4). Recognise y = x, the x-axis and the y-axis on sight and use swap or negate. The general formula would work here too, and would waste a minute and invite a sign error.",
            "A shifted mirror is just as easy. Reflecting in x = 3 sends x to 6 − x and leaves y alone, so P(1, 2) goes to P'(5, 2). The mirror sits exactly midway between them, which is the check you get for free."
          ],
          "frames": [
            {
              "x": [-4.5, 5.5],
              "y": [-3.5, 5],
              "curves": [{ "c": "line", "m": -1, "k": 1 }],
              "points": [
                { "x": 2, "y": 3, "label": "P(2, 3)" },
                { "x": 0, "y": 1, "label": "Q(0, 1)" }
              ],
              "segments": [{ "from": [2, 3], "to": [0, 1], "dash": true }]
            },
            {
              "x": [-4.5, 5.5],
              "y": [-3.5, 5],
              "curves": [{ "c": "line", "m": -1, "k": 1 }],
              "points": [
                { "x": 2, "y": 3, "label": "P" },
                { "x": 0, "y": 1, "label": "Q", "at": "se" },
                { "x": -2, "y": -1, "label": "P′(−2, −1)", "at": "sw" }
              ],
              "segments": [
                { "from": [2, 3], "to": [0, 1], "dash": true, "label": "t" },
                { "from": [0, 1], "to": [-2, -1], "dash": true, "label": "t again" }
              ]
            },
            {
              "x": [-4.5, 5.5],
              "y": [-3.5, 5],
              "curves": [{ "c": "line", "m": 1, "k": 0 }],
              "points": [
                { "x": 4, "y": -1, "label": "P(4, −1)" },
                { "x": -1, "y": 4, "label": "P′(−1, 4)" }
              ],
              "segments": [{ "from": [4, -1], "to": [-1, 4], "dash": true, "soft": true }]
            },
            {
              "x": [-4.5, 5.5],
              "y": [-3.5, 5],
              "curves": [{ "c": "vline", "x": 3 }],
              "points": [
                { "x": 1, "y": 2, "label": "P(1, 2)" },
                { "x": 5, "y": 2, "label": "P′(5, 2)" }
              ],
              "segments": [{ "from": [1, 2], "to": [5, 2], "dash": true, "soft": true }]
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · HOW FAR ALONG THE NORMAL, TAP A LINE",
          "steps": [
            {
              "eq": "<i>PQ</i> ⊥ ℓ, so <i>Q</i> = (<i>x</i><sub>1</sub> + <i>ta</i>, <i>y</i><sub>1</sub> + <i>tb</i>)",
              "why": "The segment from P to the foot points along the line's normal (a, b). Its direction is therefore already known, and the only unknown in the whole problem is the single scalar t."
            },
            {
              "eq": "<i>a</i>(<i>x</i><sub>1</sub> + <i>ta</i>) + <i>b</i>(<i>y</i><sub>1</sub> + <i>tb</i>) + <i>c</i> = 0",
              "why": "Q lies on the line, so it satisfies the line's equation. That is the only condition available, and it is exactly enough to pin down one unknown."
            },
            {
              "eq": "(<i>ax</i><sub>1</sub> + <i>by</i><sub>1</sub> + <i>c</i>) + <i>t</i>(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>) = 0",
              "why": "Expand and collect. The bracket is the same expression that measured distance in the previous topic, now doing a different job: it is a step size rather than a length."
            },
            {
              "eq": "<i>t</i> = −(<i>ax</i><sub>1</sub> + <i>by</i><sub>1</sub> + <i>c</i>)/(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>)",
              "why": "Solve for the step. Substituting it back gives the foot's coordinates, and writing (x − x₁)/a = (y − y₁)/b = t is only that statement rearranged as a pair of ratios."
            },
            {
              "eq": "<i>Q</i> is the midpoint of <i>P</i> and <i>P</i>′, so <i>P</i>′ = 2<i>Q</i> − <i>P</i> = <i>P</i> + 2<i>t</i>(<i>a</i>, <i>b</i>)",
              "why": "A mirror image sits as far behind the glass as the object stands in front. Doubling the step is the entire difference between the foot and the image, and no new computation is needed."
            }
          ]
        },
        {
          "t": "proc",
          "title": "Reflecting a line in a line",
          "steps": [
            "<b>Route A, always works.</b> Reflect two convenient points of <i>m</i>, usually its intercepts, in the mirror ℓ, and join the two images.",
            "<b>Route B, faster when they meet.</b> The reflected line passes through <i>m</i> ∩ ℓ, so the intersection point plus the image of one single point is enough. That halves Route A.",
            "<b>Route C, the substitution map.</b> Reflection in a fixed line is its own inverse, reflect twice and you are back where you started, and that licenses substituting the reflection map straight into <i>m</i>'s equation. It is the general form of the “<i>y</i> = <i>x</i>, just swap” shortcut and is valid for <b>every</b> mirror, not only that one.",
            "<b>Route D, the parallel mirror.</b> If <i>m</i> and ℓ share the same <i>a</i> and <i>b</i> they never meet, Route B cannot even start, and only the constant moves.",
            "<b>Verify.</b> Whichever route you took, reflect one point independently and check that it lands on your answer. It costs twenty seconds and catches every arithmetic slip."
          ]
        },
        {
          "t": "formula",
          "kicker": "WHEN THE MIRROR IS PARALLEL TO THE LINE",
          "tag": "only the constant moves",
          "main": "image of <i>ax</i> + <i>by</i> + <i>c</i><sub>1</sub> = 0 in <i>ax</i> + <i>by</i> + <i>c</i> = 0 is <i>ax</i> + <i>by</i> + (2<i>c</i> − <i>c</i><sub>1</sub>) = 0",
          "legend": [
            "read it as “the mirror's constant is the average of the other two”, since <i>c</i> is halfway between <i>c</i><sub>1</sub> and 2<i>c</i> − <i>c</i><sub>1</sub>",
            "so the mirror runs exactly midway, at distance |<i>c</i> − <i>c</i><sub>1</sub>|/√(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>) on each side, which is your free check"
          ],
          "note": "Why: any P on m has ax + by + c = c − c₁, so the image formula moves it by −2(c − c₁)/(a² + b²) times (a, b), landing every point of m on that one line."
        },
        {
          "t": "p",
          "html": "One rule you may have been taught is stated too strongly. It is often said that a line cannot be reflected by touching its coefficients, except for <i>y</i> = <i>x</i>, where swapping works. What is actually true is narrower: you cannot reflect a line by <b>guessing</b> at its coefficients. Negating the equation, adding the two equations, or swapping <i>x</i> and <i>y</i> for a mirror that is not <i>y</i> = <i>x</i> are all meaningless operations. But <b>substituting the reflection map</b> into the equation is always legitimate, for every mirror, and it turns six lines of point-reflecting into one. Reflecting points remains the safe default when the mirror is awkward, and Route A is never wrong."
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Find the foot of the perpendicular from <i>P</i>(2, 3) to the line <i>x</i> + <i>y</i> − 1 = 0.",
          "steps": [
            "Here <i>a</i> = 1, <i>b</i> = 1, <i>c</i> = −1, so <i>ax</i><sub>1</sub> + <i>by</i><sub>1</sub> + <i>c</i> = 2 + 3 − 1 = 4 and <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> = 2.",
            "The step is <i>t</i> = −4/2 = −2.",
            "<i>Q</i> = (2 + (−2)(1), 3 + (−2)(1)) = (0, 1). Check: 0 + 1 − 1 = 0, so <i>Q</i> really is on the line."
          ],
          "ans": "Q = (0, 1)"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Find the image of the point (4, −1) in the line <i>y</i> = <i>x</i>.",
          "steps": [
            "Do not grind the general formula. <i>y</i> = <i>x</i> is a special mirror, and reflection in it simply swaps the coordinates.",
            "(4, −1) becomes (−1, 4).",
            "The trap: substituting into the general formula with <i>a</i> = 1, <i>b</i> = −1, <i>c</i> = 0 does work, but it wastes a minute and invites a sign error. Recognise <i>y</i> = <i>x</i>, the <i>x</i>-axis and the <i>y</i>-axis on sight: swap, negate <i>y</i>, negate <i>x</i>."
          ],
          "ans": "(−1, 4)"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Find the image of <i>P</i>(1, 1) in 3<i>x</i> − 4<i>y</i> + 5 = 0, then verify it is as far behind the line as <i>P</i> is in front.",
          "steps": [
            "<i>a</i> = 3, <i>b</i> = −4, <i>c</i> = 5, so <i>ax</i><sub>1</sub> + <i>by</i><sub>1</sub> + <i>c</i> = 3 − 4 + 5 = 4 and <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> = 25.",
            "Image step = −2(4)/25 = −8/25, so <i>P</i>′ = (1 − (8/25)(3), 1 − (8/25)(−4)) = (1 − 24/25, 1 + 32/25).",
            "Distance of <i>P</i> from the line: |4|/5 = 0.8. Distance of <i>P</i>′: |3(1/25) − 4(57/25) + 5|/5 = |(3 − 228 + 125)/25|/5 = (100/25)/5 = 0.8.",
            "Equal distances on opposite sides, exactly as a mirror requires."
          ],
          "ans": "P′ = (1/25, 57/25)"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "Find the reflection of 2<i>x</i> − 3<i>y</i> + 4 = 0 in the line <i>x</i> + <i>y</i> − 1 = 0, using the substitution map.",
          "steps": [
            "The mirror has <i>a</i> = 1, <i>b</i> = 1, <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> = 2, so the map is (<i>x</i>, <i>y</i>) ↦ (<i>x</i> − (<i>x</i> + <i>y</i> − 1), <i>y</i> − (<i>x</i> + <i>y</i> − 1)) = (1 − <i>y</i>, 1 − <i>x</i>).",
            "Substitute it into the line being reflected: 2(1 − <i>y</i>) − 3(1 − <i>x</i>) + 4 = 2 − 2<i>y</i> − 3 + 3<i>x</i> + 4 = 3<i>x</i> − 2<i>y</i> + 3.",
            "One line of algebra instead of six. Free check by Route B: the two lines meet where 2<i>x</i> − 3<i>y</i> + 4 = 0 and <i>x</i> + <i>y</i> − 1 = 0, that is at (−1/5, 6/5), and 3(−1/5) − 2(6/5) + 3 = −3 + 3 = 0. The answer passes through the intersection, as any reflection must."
          ],
          "ans": "3x − 2y + 3 = 0"
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Find the foot of the perpendicular from (3, 8) to the x-axis, and the image of (2, 5) in the y-axis.",
              "a": "The foot on the x-axis is directly below: (3, 0). Reflection in the y-axis negates x, so (2, 5) becomes (−2, 5)."
            },
            {
              "q": "[JEE Main] Find the foot of the perpendicular from (1, 2) to 4x − 3y − 1 = 0.",
              "a": "ax₁ + by₁ + c = 4 − 6 − 1 = −3 and a² + b² = 25, so t = 3/25. The foot is (1 + 12/25, 2 − 9/25) = (37/25, 41/25). Check: 4(37/25) − 3(41/25) − 1 = (148 − 123 − 25)/25 = 0."
            },
            {
              "q": "[JEE Main] Find the image of (3, 4) in the line x + y = 0.",
              "a": "Reflection in y = −x sends (x, y) to (−y, −x), so (3, 4) becomes (−4, −3). Check: the midpoint (−1/2, 1/2) lies on x + y = 0, and the segment has slope 1, perpendicular to the mirror's slope −1."
            },
            {
              "q": "[JEE Main] Find the reflection of 5x − 12y + 13 = 0 in the parallel line 5x − 12y − 26 = 0, and the distance between the original line and its image.",
              "a": "Here c = −26 and c₁ = 13, so the image constant is 2c − c₁ = −52 − 13 = −65, giving 5x − 12y − 65 = 0. With √(25 + 144) = 13, the mirror sits |13 + 26|/13 = 3 from the original, so original and image are 6 apart, and indeed |13 − (−65)|/13 = 6."
            },
            {
              "q": "[JEE Advanced] Find the image of the line 3x − y = 2 in the line y = x − 1. (The mirror is y = x shifted; do not reach for the swap shortcut without checking it.)",
              "a": "Write the mirror as x − y − 1 = 0, so a = 1, b = −1, a² + b² = 2 and the map is (x, y) ↦ (x − (x − y − 1), y + (x − y − 1)) = (y + 1, x − 1): the swap, but with a shift attached, which the bare rule would have lost. Substituting into 3x − y − 2 = 0 gives 3(y + 1) − (x − 1) − 2 = −x + 3y + 2, so the image is x − 3y = 2. Check: (1, 1) lies on 3x − y = 2 and maps to (2, 0), with 2 − 0 = 2. Note the slope has gone from 3 to 1/3, the reciprocal, as it must for any mirror parallel to y = x."
            }
          ]
        },
        {
          "t": "mcq",
          "q": "The foot of the perpendicular is related to the image how? The foot is:",
          "correct": 1,
          "opts": [
            { "label": "twice the image", "nudge": "This reverses the relationship. The image is twice as far along the normal as the foot, not the other way round." },
            { "label": "the midpoint of the point and its image", "nudge": null },
            { "label": "the same as the image", "nudge": "True only in the degenerate case where P already lies on the line, so the step is zero and both coincide with P itself." },
            { "label": "unrelated to it", "nudge": "They are one construction with one parameter. The foot uses t and the image uses 2t, and nothing else differs." }
          ],
          "solution": "The mirror runs midway between the object and its image, so Q is the midpoint of P and P′, and P′ = 2Q − P."
        },
        {
          "t": "mcq",
          "q": "The image of (<i>a</i>, <i>b</i>) in the line <i>y</i> = <i>x</i> is:",
          "correct": 0,
          "opts": [
            { "label": "(<i>b</i>, <i>a</i>)", "nudge": null },
            { "label": "(−<i>a</i>, <i>b</i>)", "nudge": "That is reflection in the y-axis, which negates x and leaves y alone." },
            { "label": "(<i>a</i>, −<i>b</i>)", "nudge": "That is reflection in the x-axis, which negates y and leaves x alone." },
            { "label": "(−<i>b</i>, −<i>a</i>)", "nudge": "That is reflection in y = −x, the other diagonal, which swaps and negates." }
          ],
          "solution": "Reflection in y = x swaps the coordinates. Check the two defining properties: the midpoint ((a + b)/2, (a + b)/2) lies on y = x, and the joining segment has slope −1."
        },
        {
          "t": "mcq",
          "q": "In (<i>x</i> − <i>x</i><sub>1</sub>)/<i>a</i> = (<i>y</i> − <i>y</i><sub>1</sub>)/<i>b</i> = −(<i>ax</i><sub>1</sub> + <i>by</i><sub>1</sub> + <i>c</i>)/(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>), the common ratio represents:",
          "correct": 1,
          "opts": [
            { "label": "the distance from <i>P</i> to the line", "nudge": "The distance is |t|√(a² + b²). The ratio t is a step count along the normal, and only becomes a length after multiplying by the normal's own length." },
            { "label": "the signed step along the normal that lands on the line", "nudge": null },
            { "label": "the slope of the line", "nudge": "The slope is −a/b, and it does not depend on P at all, while this ratio changes with every point you feed in." },
            { "label": "the <i>y</i>-intercept", "nudge": "An intercept is a fixed feature of the line. This quantity is built from the point P, which the line knows nothing about." }
          ],
          "solution": "It is the scalar t for which P + t(a, b) lands on the line: one step to the foot, and 2t to the image."
        },
        {
          "t": "mcq",
          "q": "Which of these actually reflects a line <i>m</i> in a line ℓ?",
          "correct": 1,
          "opts": [
            { "label": "negate the equation of <i>m</i>", "nudge": "Negating an equation gives back the same line: ax + by + c = 0 and −ax − by − c = 0 have identical solution sets, so nothing has moved." },
            { "label": "reflect two points of <i>m</i> in ℓ and join the images", "nudge": null },
            { "label": "swap <i>x</i> and <i>y</i> in the equation of <i>m</i>", "nudge": "That reflects in y = x only. Applied to any other mirror it produces a line with no relation to the answer." },
            { "label": "add the equations of <i>m</i> and ℓ", "nudge": "That produces one member of the family through their intersection, which passes through the right point but has the wrong direction entirely." }
          ],
          "solution": "Reflecting two points and rejoining always works. So does substituting the reflection map into m's equation, which is the same operation done symbolically and in one line."
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Mixing up the foot and image factors.</b> The foot uses −(<i>ax</i><sub>1</sub> + <i>by</i><sub>1</sub> + <i>c</i>)/(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>) and the image uses twice that. Drop the 2 and you land on the line instead of behind it.",
            "<b>Using the general formula for the special mirrors.</b> For <i>y</i> = <i>x</i>, the <i>x</i>-axis and the <i>y</i>-axis, swap or negate: faster and error-proof.",
            "<b>Guessing at coefficients instead of substituting the map.</b> You cannot reflect a line by tweaking its numbers, but you can always reflect it by substituting the reflection map into its equation.",
            "<b>The wrong denominator.</b> It is <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> here, with no square root, in contrast with the distance formula's √(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>).",
            "<b>Trying the intersection shortcut on a parallel mirror.</b> A line parallel to the mirror never meets it, so there is no intersection to hang the shortcut on. Move the constant to 2<i>c</i> − <i>c</i><sub>1</sub> instead."
          ]
        },
        {
          "t": "protip",
          "html": "for a reflection-of-a-line problem where the two lines actually meet, you only need <i>one</i> image point: the reflected line passes through the intersection and through the image of any single point of the original. that halves the work against reflecting two points. and when they do not meet, only the constant moves, so the whole answer is one subtraction."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "Foot: (x − x₁)/a = (y − y₁)/b = −(ax₁ + by₁ + c)/(a² + b²)",
              "note": "one step along the normal (a, b)"
            },
            {
              "f": "Image: the same ratio, with the step doubled",
              "note": "the foot is the midpoint of P and P′"
            },
            {
              "f": "y = x: swap · x-axis: negate y · y-axis: negate x",
              "note": "y = −x sends (x, y) to (−y, −x)"
            },
            {
              "f": "x = h: (2h − x, y) · y = k: (x, 2k − y)",
              "note": "shifted mirrors, still one substitution"
            },
            {
              "f": "Reflect a line: substitute the reflection map into it",
              "note": "or reflect two points and rejoin, which never fails"
            },
            {
              "f": "Parallel mirror: the constant goes to 2c − c₁",
              "note": "the mirror's constant is the average of the two"
            }
          ],
          "aids": [
            "“one step to the foot, two steps to the mirror”",
            "“y = x? just swap”",
            "“foot uses a² + b², distance uses the square root”"
          ]
        }
      ]
    }
  ]
};

export default ch09StraightLines;
