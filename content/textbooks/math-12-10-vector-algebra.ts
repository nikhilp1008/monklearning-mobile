/**
 * Chapter 10 · Vector Algebra. Mathematics, Class 12.
 *
 * Restructured from pages 601 to 647 of the Drona Class 12 Mathematics Master
 * Reference into the block system in design_handoff_textbooks/CONTENT_SPEC.md,
 * following math-12-01-relations.ts for voice, density and file shape.
 *
 * The source is two documents stacked: a typeset chapter of three subtopics
 * (01 vector operations and components, pages 601 to 610; 02 product of two
 * vectors, 611 to 618; 03 product of three vectors, 619 to 626) and a Round 2
 * Addendum of five inserts (A oblique resolution and angle bisectors, B
 * magnitude algebra and constraint problems, C nested cross products and
 * vector equations, D position-vector triangle geometry, P a previous-year
 * analysis), pages 627 to 647.
 *
 * SIX TOPICS, and the folding that produced them:
 *
 *   - Subtopic 01 is split in two. Naming a vector (magnitude, unit vector,
 *     position vector, head minus tail, direction cosines and ratios) is a
 *     different skill from combining two of them (addition, the section
 *     formula, collinearity), and the source's own pitfalls list splits along
 *     the same seam. Topics 01 and 02.
 *   - Subtopic 02 is split in two, one product each. Together they are the
 *     highest-yield block in the chapter and the source gives them eight
 *     pages; one topic would have been thirty blocks of two unrelated
 *     definitions. Topics 03 and 04.
 *   - Subtopic 03 is split in two, scalar triple product and vector triple
 *     product. The source itself says this block is 84 of the roughly 135
 *     items in its previous-year bank, which is more than the other two blocks
 *     combined. Topics 05 and 06.
 *   - Addendum A1 (splitting a vector parallel and perpendicular to another)
 *     and A3 (angle bisectors) fold into Topic 03, because both are the
 *     projection formula applied once more. A2 (coordinates in a
 *     non-orthogonal basis) folds into Topic 05, since it is Cramer's rule
 *     written with box products.
 *   - Addendum B folds in two pieces. B1, B2 and B4 (squaring a magnitude, the
 *     parallelogram law, the diagonal dictionary, the constraint strategy) are
 *     pure dot-product algebra and sit in Topic 03. B3 (Cauchy-Schwarz and the
 *     triangle inequality) sits in Topic 04 next to Lagrange's identity, which
 *     is what the source derives it from.
 *   - Addendum C folds into Topic 06 whole: C1 the cross of two cross
 *     products, C2 solving a cross x = b, C4 the plane-intersection direction.
 *     C3, the squared box product, sits in Topic 05 instead, because its
 *     payoff is the reciprocal system, which is scalar-triple-product
 *     material.
 *   - Addendum D folds into Topic 02: incentre, the circumcentre and
 *     orthocentre identity with its Euler line, and the area ratios that read
 *     straight off a section-formula coefficient.
 *   - Addendum P is not a topic. Its question distribution feeds the hook, its
 *     five archetypes feed worked examples and procedures, and its ten
 *     engineered traps feed the `mistakes` cards.
 *
 * WHAT CLASS 11 ALREADY OWNS, quoted rather than retaught. math-11-11-three-d.ts
 * teaches coordinates in space, the octants, the distance formula and the
 * section formula in coordinates, including the external case and the
 * collinearity test by ratio. So Topic 01 quotes the distance formula as the
 * magnitude formula it already is, and Topic 02 states the section formula in
 * position vectors and spends its length on the two things Class 11 cannot do:
 * proving it in one line, and using it to reach the centroid, the incentre,
 * the orthocentre and an area ratio. The Class 11 chapter also draws a point
 * marching along a segment as the ratio changes, so this chapter does not draw
 * that figure again.
 *
 * NOTATION, settled early and used everywhere:
 *
 *   - A vector is a single italic letter with no arrow over it: <i>a</i>, and
 *     its magnitude is |<i>a</i>|. The renderer has no combining-arrow glyph
 *     and Georgia would have to fall back for one, so an arrow would be a
 *     rendering gamble on the most common token in the chapter. Instead every
 *     block that introduces a letter says whether it is a vector, and the
 *     scalar side lengths in the incentre formula are named <i>p</i>, <i>q</i>,
 *     <i>s</i> rather than the source's a, b, c precisely so that no letter
 *     ever means a vector and a number in the same sentence, and the point of
 *     an area-ratio question keeps the full <i>OP</i> spelling for the same
 *     reason.
 *   - Unit vectors along the axes are î, ĵ and k̂. î (U+00EE) and ĵ (U+0135)
 *     are precomposed and safe in any WGL4 font; k̂ has no precomposed form in
 *     Unicode and is k followed by U+0302 COMBINING CIRCUMFLEX ACCENT. Same
 *     for n̂ and b̂. â (U+00E2) is precomposed. Checked: none of these fall in
 *     the validator's emoji ranges.
 *   - Dot product is · (U+00B7), cross product is × (U+00D7), both already
 *     carrying thousands of uses across the shipped chapters. Perpendicular is
 *     ⊥ and parallel is ∥, both already in use, and both are spelled out in
 *     words on first appearance in each topic.
 *   - Scalar triple product is [<i>a b c</i>].
 *   - Every <sup> and <sub> in this file was walked against the SUPERS and
 *     SUBS tables in components/textbook/markup.tsx: only digits, the minus
 *     sign and parentheses appear, so nothing degrades to small baseline text.
 *   - Diagram labels go into SVG text, not the markup renderer, so they carry
 *     no hats and no combining marks at all: a, b, c, a × b, P, O.
 *
 * SEVEN `diagram` blocks, four `axes3d` and three `plot`, one per topic except
 * Topic 03 which gets two. Each is a picture the source explicitly asks for.
 *
 *   1. Topic 01, axes3d: a vector, its shadow on the floor, its box and its
 *      three components. The source's own anchor is "go 3 blocks east, 2
 *      north, 1 up", which is a box, and axes3d already draws exactly that.
 *   2. Topic 02, plot: the triangle law, the parallelogram law and a − b. Flat
 *      on purpose. Two vectors always span a plane, so an isometric frame
 *      would foreshorten a picture that has no third dimension in it.
 *   3. Topic 03, plot: the projection of a on b at an acute angle, a right
 *      angle and an obtuse angle. Also flat, for the same reason, and the sign
 *      of the projection is the whole point, which needs the drop to be
 *      visibly on one side of the origin or the other.
 *   4. Topic 03, plot: a parallelogram's two diagonals, then the rectangle and
 *      the rhombus cases of Addendum B2. Flat, and the equal-length and
 *      right-angle facts are only readable when they are not foreshortened.
 *   5. Topic 04, axes3d: a and b, then a × b, then b × a flipped, then the
 *      parallelogram whose area is |a × b|. Genuinely three-dimensional: the
 *      product leaves the plane of the two vectors, which is the one thing a
 *      flat figure cannot show. a and b are placed in the plane x = 0 so their
 *      cross product lies along the drawn x-axis and can be read off it.
 *   6. Topic 05, axes3d: three edges, the base, the normal over the base, then
 *      all twelve edges of the parallelepiped. A box is a box; no 2D figure
 *      draws a volume.
 *   7. Topic 06, axes3d: b and c, then b × c leaving their plane, then
 *      a × (b × c) landing back in it. The claim being drawn is about which
 *      plane a vector lives in, so the figure must have a plane and a way out
 *      of it. b and c again sit in x = 0, so "back in the plane" is visible as
 *      "back to x = 0".
 *
 * Every axes3d coordinate was placed by hand against the isometric map in
 * components/textbook/figures.tsx so that the arrowhead and its label land
 * inside the drawn canvas.
 *
 * ERRATA CHECKED. The book's errata, source pages 830 to 832, lists five
 * entries: Chapter 1 pages 14 and 43, Chapter 3 page 153, Chapter 11 pages 678
 * and 693. All five are production clipping rather than mathematics. There is
 * no entry for Chapter 10, and the page range 601 to 647 is not named anywhere
 * in the errata. Confirmed by reading all three errata pages, not assumed.
 *
 * CORRECTIONS BEYOND THE ERRATA, found by re-solving every computation in the
 * range. The corrected value is what this chapter teaches; the printed one is
 * never reproduced.
 *
 *   1. Page 630, Example A.3, the external-bisector check. For
 *      a = î + 2ĵ + 2k̂ and b = 2î + ĵ − 2k̂ the book gets the external bisector
 *      direction right, (−î + ĵ + 4k̂)/(3√2), and then prints
 *      "b̂ext · â = (−1 + 2 − 8)/(9√2) = −7/(9√2)" and
 *      "b̂ext · b̂ = (−2 + 1 + 8)/(9√2) = 7/(9√2)".
 *      Both third terms carry the wrong sign: 4 × 2 = +8, not −8, and
 *      4 × (−2) = −8, not +8. The correct values are
 *      b̂ext · â = (−1 + 2 + 8)/(9√2) = 9/(9√2) = 1/√2 and
 *      b̂ext · b̂ = (−2 + 1 − 8)/(9√2) = −9/(9√2) = −1/√2.
 *      Three independent checks. First, â · b̂ = (2 + 2 − 4)/9 = 0, so a and b
 *      are perpendicular here, the external bisector is at 45° to â and 135°
 *      to b̂, and the two cosines must be ±1/√2 = ±0.707, not ±0.550.
 *      Second, in general (â − b̂) · â = 1 − â · b̂ ≥ 0 always, so the first dot
 *      product can never be the negative one; the book has the two signs the
 *      wrong way round as well as the wrong size. Third, the book's own
 *      internal check on the same page gives b̂int · â = b̂int · b̂ = 1/√2, which
 *      is the 45° the perpendicularity forces.
 *      The book's narrative conclusion, "equal magnitude, opposite sign",
 *      survives, because the identical slip was made twice in mirror image.
 *      This chapter works the example with the correct numbers.
 *   2. Page 639, Addendum D4, the area-ratio derivation. Printed:
 *      "b − p = [l(a − b) + n(c − b)]/L" and "c − p = [l(a − c) + m(b − c)]/L".
 *      Both are the negatives of what they are labelled. Expanding,
 *      Lb − (la + mb + nc) = l(b − a) + n(b − c), so the printed right-hand
 *      side is p − b, not b − p, and likewise for the second. The final ratio
 *      l/L is unaffected, because both factors were negated and the two
 *      minus signs cancel in the cross product. Corrected silently in Topic
 *      02's derivation, which writes the two edge vectors the way round its
 *      labels claim.
 *   3. Page 642, Addendum P.2, the distribution table. The three blocks are
 *      printed as "~20% (≈21 items)", "~35% (≈30 items)" and "~45% (≈84
 *      items)" out of "roughly 135 items". The counts are self-consistent,
 *      21 + 30 + 84 = 135, and page 647 leans on the 84 again by name. The
 *      percentages are not: 21/135 is 16%, 30/135 is 22%, 84/135 is 62%. The
 *      printed percentages happen to sum to 100 but do not describe these
 *      counts, and they badly understate how triple-product-heavy the bank
 *      is. The hook quotes the counts, which the book corroborates twice,
 *      and not the percentages.
 *
 * One smaller slip, not worth a correction note in the copy but recorded here.
 * Page 617, Subtopic 02, MCQ Q1 distractor (c) says that θ = 60° is "the
 * answer if one wrongly set cos θ = √3 sin θ". That substitution gives
 * tan θ = 1/√3 and θ = 30°, not 60°; the misreading that produces 60° is
 * sin θ = √3 cos θ. The MCQ in Topic 04 uses the honest version of the trap.
 *
 * PDF EXTRACTION DAMAGE, distinguished from error and re-authored rather than
 * guessed. The extractor renders the ratio colon as "{nC", the minus sign as
 * "{n7", the dot product as "{nA" and the cross product as "{nN" wherever the
 * source uses its display maths font, which affects the section formula on
 * page 604, all of Subtopic 03's Section 1, and Practice 4 on page 624. Every
 * one of those was reconstructed from the surrounding algebra and re-solved
 * from scratch: the external section formula is (m·b − n·a)/(m − n), and
 * Practice 4's answer, printed as the orphaned fragment "15̂+15̂−15̂" at the
 * foot of the page with its hats and axes stripped, is 15î + 15ĵ − 15k̂, which
 * this chapter's Topic 06 Example 1 re-derives.
 *
 * The exam hook is authored once, on topic 1, with a bold heading per topic,
 * because the reader renders `hook` only there. Diagram chips and captions are
 * plain text and carry no inline tags.
 */
import type { Chapter } from '@/lib/textbooks';

export const ch12VectorAlgebra: Chapter = {
  "chapter": "10",
  "title": "Vector Algebra",
  "subject": "Mathematics",
  "klass": "Class 12",
  "topics": [
    {
      "n": "01",
      "title": "Vectors, Components and Direction Cosines",
      "chip": "01 COMPONENTS",
      "kalam": "a number with a direction stapled to it",
      "blocks": [
        {
          "t": "hook",
          "html": "<b>01 · Vectors, Components and Direction Cosines</b><br>The foundation block, and a guaranteed scorer. CBSE Boards carry a 1 to 2 mark definition, a unit vector or a magnitude in almost every paper. JEE Main reliably asks 1 to 2 questions a year on unit vectors and on direction cosines and direction ratios. CUET loves the direct plug-in. JEE Advanced rarely tests this head-on, but every collinearity and coplanarity setup in the paper is built on top of it, so get it airtight and the rest of the chapter rests on solid ground.<br><br><b>02 · Addition, the Section Formula and Triangle Geometry</b><br>CBSE sets a short section-formula or midpoint problem most years, and a 3 to 5 mark position-vector proof about a triangle is a standing favourite. JEE Main asks a fast section-formula numeric. JEE Advanced ran 4 to 8 mark cevian proofs through the whole of 1988 to 2001, and their modern descendant is a one-line ratio question, so the method is still worth owning.<br><br><b>03 · The Dot Product: Angle, Projection and Magnitude Algebra</b><br>Half of the highest-yield subtopic in the chapter. CBSE routinely sets 2 to 3 marks on the scalar product or a projection. JEE Main asks projections more often than any other single idea in the chapter, across more sessions than any other. JEE Advanced does not ask for a projection, it asks you to square a magnitude, expand, and notice that the unknowns are dot products.<br><br><b>04 · The Cross Product: Area and the Perpendicular Direction</b><br>The other half. CBSE asks for the area of a triangle or parallelogram. JEE Main asks for a vector of given magnitude perpendicular to two others, or for an angle from mixed dot and cross data. The trap planted most often in this whole chapter lives here: a dot product of zero means perpendicular, a cross product of zero means parallel, and swapping them costs the question.<br><br><b>05 · The Scalar Triple Product: Volume and Coplanarity</b><br>Pure JEE territory, and the largest block in the bank by a distance. Coplanarity with a parameter is the single most repeated question shape the source records, running from 1985 to 2020. Volumes of a parallelepiped or a tetrahedron are close behind. The rationalised CBSE syllabus no longer tests this directly, so treat it as your JEE edge.<br><br><b>06 · The Vector Triple Product and Vector Equations</b><br>A JEE Advanced signature. The BAC minus CAB identity is a recurring tool, and the equations it solves, where the unknown is a vector rather than a number, are the shape Advanced likes best because a careless student never notices the whole line of solutions. The source's own previous-year bank runs to about 135 items from 1978 to 2020: 21 on position-vector geometry, 30 on the two products, and 84 on the triple products and their applications."
        },
        {
          "t": "p",
          "html": "Stand at Connaught Place and tell an auto driver “take me 4 kilometres”. He cannot move. Four kilometres towards Karol Bagh and four towards Nehru Place end in completely different parts of Delhi. The number on its own is a <b>scalar</b>: it carries size and nothing else. Add “towards Nehru Place” and you have handed him a <b>vector</b>, which carries a <b>magnitude</b> and a <b>direction</b> together.<br><br>That single distinction is the seed of the whole chapter. Temperature, mass, distance, speed and your bank balance are scalars, fully described by one number. Displacement, velocity, force and a fielder's throw are vectors: “80 km/h” is an incomplete description of a throw until you add “towards the stumps”."
        },
        {
          "t": "think",
          "html": "a vector is an instruction: “move this far, in this direction.” the instruction does not care where you start. if you and your friend both walk 200 m due east from different gates of the same colony, you followed the same vector. two arrows with the same length and the same direction are the same vector, wherever they sit on the page, which is exactly why you are allowed to slide one until its tail meets another's head."
        },
        {
          "t": "def",
          "term": "Vector, and equality of vectors",
          "html": "A quantity with both a <b>magnitude</b> and a <b>direction</b>, drawn as a <b>directed line segment</b>: the length of the arrow is the magnitude, the arrowhead gives the direction. An arrow from <i>A</i>, its <b>initial point</b> or tail, to <i>B</i>, its <b>terminal point</b> or head, is written <i>AB</i>, with magnitude |<i>AB</i>|. Two vectors are <b>equal</b> only when they have the same magnitude <b>and</b> the same direction. Equal length alone is not enough and parallel direction alone is not enough; both conditions have to hold, and exam questions attack exactly that."
        },
        {
          "t": "p",
          "html": "Now pin a vector down with numbers. Giving directions on a city grid, you say “three blocks east, then two north, then up one floor”, and those three numbers fix where you end up. In space the three perpendicular grid directions are the unit vectors <b>î</b> along the <i>x</i>-axis, <b>ĵ</b> along the <i>y</i>-axis and <b>k̂</b> along the <i>z</i>-axis, each of length exactly 1. Any vector <i>r</i> can then be written with those three as its scaffolding."
        },
        {
          "t": "formula",
          "kicker": "COMPONENT FORM AND MAGNITUDE",
          "main": "r = xî + yĵ + zk̂,  |r| = √(x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup>)",
          "legend": [
            "<i>x</i>, <i>y</i>, <i>z</i> are the <b>scalar components</b> of <i>r</i>. The arrow and the triple (<i>x</i>, <i>y</i>, <i>z</i>) are two faces of the same object.",
            "<i>x</i>î, <i>y</i>ĵ, <i>z</i>k̂ are the <b>vector components</b>: the three pieces that add up to <i>r</i>.",
            "|<i>r</i>| ≥ 0 always, with equality only for the zero vector."
          ],
          "note": "You have met the magnitude formula before. It is the Class 11 distance formula: the distance of (<i>x</i>, <i>y</i>, <i>z</i>) from the origin is √(<i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> + <i>z</i><sup>2</sup>), and that is Pythagoras applied twice. Nothing new is being asked of you here except a new name."
        },
        {
          "t": "diagram",
          "kind": "axes3d",
          "kicker": "DIAGRAM · A VECTOR AND ITS THREE COMPONENTS",
          "chips": ["The arrow", "Its shadow", "The box", "Components"],
          "captions": [
            "OP is the vector. It has a length and a direction and, so far, no numbers on it at all. Everything below is the work of turning that one arrow into three numbers you can compute with.",
            "Drop P straight down onto the floor. The grey dashed line runs along the floor from O, and the amber dashed line climbs from the floor up to P. The foot of that climb carries the x and y of P; the climb itself is the z.",
            "Now shade the floor rectangle. Its two edges at O have lengths x and y, the dashed climb above it has length z, and OP is the long diagonal of the box those three edges frame. The magnitude formula is Pythagoras run twice in here: once across the shaded floor, once up the climb.",
            "The three vector components drawn as arrows in their own right: x along the x-axis, y along the y-axis, z straight up. Lay them tail to head in any order and you arrive at P. That is what r = xî + yĵ + zk̂ means as a picture."
          ],
          "frames": [
            { "axes3d": { "point": [2, 2.2, 1.8], "label": "P", "projections": false } },
            { "axes3d": { "point": [2, 2.2, 1.8], "label": "P", "projections": true } },
            { "axes3d": { "point": [2, 2.2, 1.8], "label": "P", "projections": true, "box": true } },
            { "axes3d": { "point": [2, 2.2, 1.8], "label": "P", "projections": false, "vectors": [{ "to": [2, 0, 0], "label": "x" }, { "to": [0, 2.2, 0], "label": "y" }, { "to": [0, 0, 1.8], "label": "z" }] } }
          ]
        },
        {
          "t": "def",
          "term": "Position vector",
          "html": "The vector <i>OP</i> from the origin <i>O</i> to a point <i>P</i>(<i>x</i>, <i>y</i>, <i>z</i>), namely <i>x</i>î + <i>y</i>ĵ + <i>z</i>k̂. A position vector is <b>not</b> a free vector: it is deliberately tied to the origin, so you may not slide it about the way you slide an ordinary vector. Slide it and it stops describing that point."
        },
        {
          "t": "formula",
          "kicker": "THE VECTOR JOINING TWO POINTS",
          "tag": "HEAD MINUS TAIL",
          "main": "AB = b − a",
          "legend": [
            "<i>a</i> and <i>b</i> are the position vectors of <i>A</i> and <i>B</i>. Subtract the tail's position vector from the head's.",
            "So <i>AB</i> = −<i>BA</i>. Reverse the letters and every component flips sign, and the magnitude does not change.",
            "In coordinates, <i>AB</i> = (<i>x</i><sub>2</sub> − <i>x</i><sub>1</sub>)î + (<i>y</i><sub>2</sub> − <i>y</i><sub>1</sub>)ĵ + (<i>z</i><sub>2</sub> − <i>z</i><sub>1</sub>)k̂."
          ],
          "note": "Subtraction order is everything, and it is worth one whole mark on its own. Write the letters down in the order the question gives them before you touch any numbers."
        },
        {
          "t": "formula",
          "kicker": "UNIT VECTOR, AND SCALING TO ANY LENGTH",
          "main": "â = a / |a|,   a vector of magnitude k along a is kâ",
          "legend": [
            "A <b>unit vector</b> has magnitude exactly 1. It carries the direction and throws the size away.",
            "Defined only for <i>a</i> ≠ 0, because the recipe divides by |<i>a</i>| and you cannot divide by zero.",
            "To get a vector of length <i>k</i> in the direction of <i>a</i>: normalise first, then multiply by <i>k</i>. To get one in the <b>opposite</b> direction, multiply by −<i>k</i>."
          ],
          "note": "Divide by the magnitude, never by its square. That single slip is a standing distractor in every direction-cosine question the source records."
        },
        {
          "t": "formula",
          "kicker": "SCALAR MULTIPLICATION",
          "main": "|λa| = |λ| |a|",
          "legend": [
            "λ > 0: <i>λa</i> points the <b>same</b> way as <i>a</i>, stretched or squashed by λ.",
            "λ < 0: <i>λa</i> points the <b>opposite</b> way, with length |λ| |<i>a</i>|.",
            "λ = 0: you get the zero vector 0, which has magnitude 0 and <b>no definite direction</b>."
          ],
          "note": "Because the zero vector has no direction, phrases like “the direction cosines of 0” or “the unit vector along 0” are meaningless, not merely hard to compute."
        },
        {
          "t": "defgrid",
          "title": "THE TYPES OF VECTOR, BY DEFINING PROPERTY",
          "rows": [
            { "k": "Zero vector 0", "v": "magnitude 0, direction undefined" },
            { "k": "Unit vector", "v": "magnitude exactly 1" },
            { "k": "Equal vectors", "v": "same magnitude <b>and</b> same direction" },
            { "k": "Negative of <i>a</i>", "v": "same magnitude, opposite direction: −<i>a</i>" },
            { "k": "Collinear or parallel", "v": "<i>a</i> = λ<i>b</i> for some scalar λ" },
            { "k": "Coplanar", "v": "all lie in, or parallel to, one plane" },
            { "k": "Position vector", "v": "drawn from the origin to a fixed point" }
          ]
        },
        {
          "t": "p",
          "html": "One last piece of vocabulary, and it is the one CBSE and JEE Main ask about most in this topic. A vector makes some angle with each of the three positive axes. Call those angles α, β and γ. Their cosines are the <b>direction cosines</b> of the vector, written <i>l</i>, <i>m</i>, <i>n</i>. They describe direction and nothing else, which is why they turn out to be the components of the unit vector."
        },
        {
          "t": "formula",
          "kicker": "DIRECTION COSINES",
          "main": "l = x/r,  m = y/r,  n = z/r,  with r = |r|",
          "legend": [
            "<i>l</i> = cos α, <i>m</i> = cos β, <i>n</i> = cos γ, where α, β, γ are the angles the vector makes with the positive <i>x</i>-, <i>y</i>- and <i>z</i>-axes.",
            "Equivalently: (<i>l</i>, <i>m</i>, <i>n</i>) are exactly the components of the unit vector along <i>r</i>.",
            "They satisfy <i>l</i><sup>2</sup> + <i>m</i><sup>2</sup> + <i>n</i><sup>2</sup> = 1, always."
          ],
          "note": "Direction cosines are unique for a given ray, and flip sign together for the opposite ray. There is no third possibility."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY THE SQUARES ALWAYS SUM TO ONE",
          "steps": [
            {
              "eq": "r = xî + yĵ + zk̂, r = |r| = √(x² + y² + z²) > 0",
              "why": "Start with a non zero vector, so that r is strictly positive and every division below is legal. This is the only place the non zero hypothesis is used, and it is why the zero vector has no direction cosines."
            },
            {
              "eq": "l = x/r, m = y/r, n = z/r",
              "why": "The direction cosines measure direction only, so we normalise the length out by dividing each component by r. That is the definition unpacked, not a new fact: dividing a vector by its own magnitude is exactly what produces the unit vector."
            },
            {
              "eq": "l² + m² + n² = (x² + y² + z²) / r²",
              "why": "Square each of the three and add. Every term has the same denominator r squared, so the three fractions combine into a single one whose numerator is the sum of the squared components."
            },
            {
              "eq": "= r² / r² = 1",
              "why": "The numerator collapses because r squared is defined to be x squared plus y squared plus z squared. So the identity is not a coincidence, it is the magnitude definition read backwards, and it holds for every non zero vector in space."
            }
          ]
        },
        {
          "t": "def",
          "term": "Direction ratios",
          "html": "Any three numbers (<i>p</i>, <i>q</i>, <i>s</i>) <b>proportional</b> to the direction cosines. They fix the direction but not the scale, so they are <b>not unique</b>: (2, −1, 2) and (4, −2, 4) describe the same direction. The scalar components of a vector are themselves a perfectly good set of direction ratios. To turn ratios into cosines, divide each by √(<i>p</i><sup>2</sup> + <i>q</i><sup>2</sup> + <i>s</i><sup>2</sup>)."
        },
        {
          "t": "proc",
          "title": "From two points to a unit vector and its direction cosines",
          "steps": [
            "<b>Write the vector head minus tail.</b> For <i>AB</i>, subtract <i>A</i>'s coordinates from <i>B</i>'s. Copy the order out of the question before you subtract anything; half the marks lost here are lost at this step.",
            "<b>Take the magnitude.</b> Square the three components, add, take the positive square root. If it comes out a whole number the question was designed that way, which is a useful confirmation that step 1 was right.",
            "<b>Divide the vector by that magnitude.</b> This is the unit vector, and its three components are the direction cosines. Both jobs are done by the one division.",
            "<b>Check by squaring.</b> Square the three cosines and add. If you do not get 1, go back; you have divided by the wrong thing or dropped a component.",
            "<b>Scale if the question asks for a length.</b> A vector of magnitude <i>k</i> in that direction is <i>k</i> times the unit vector; in the opposite direction it is −<i>k</i> times it. Read the word “opposite” before you commit."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Find the unit vector in the direction of <i>a</i> = 6î − 2ĵ + 3k̂, and hence the vector of magnitude 35 in the same direction.",
          "steps": [
            "<b>Magnitude.</b> |<i>a</i>| = √(6<sup>2</sup> + (−2)<sup>2</sup> + 3<sup>2</sup>) = √(36 + 4 + 9) = √49 = <b>7</b>.",
            "<b>Unit vector.</b> â = <i>a</i>/|<i>a</i>| = (1/7)(6î − 2ĵ + 3k̂) = (6/7)î − (2/7)ĵ + (3/7)k̂.",
            "<b>Scale to 35.</b> 35â = 35 · (1/7)(6î − 2ĵ + 3k̂) = 5(6î − 2ĵ + 3k̂) = 30î − 10ĵ + 15k̂.",
            "<b>Check.</b> |30î − 10ĵ + 15k̂| = √(900 + 100 + 225) = √1225 = 35. It lands exactly where it was asked to."
          ],
          "ans": "â = (1/7)(6î − 2ĵ + 3k̂), and the required vector is <b>30î − 10ĵ + 15k̂</b>."
        },
        {
          "t": "ex",
          "tag": "CONCEPTUAL TRAP",
          "q": "<i>P</i>(2, −1, 3) and <i>Q</i>(5, 3, −1) are given. Find the unit vector in the direction of <i>QP</i>.",
          "steps": [
            "<b>Read the order first.</b> <i>QP</i> runs <b>from</b> <i>Q</i> <b>to</b> <i>P</i>, so it is head <i>P</i> minus tail <i>Q</i>. Under exam pressure students compute <i>PQ</i>, and every sign then comes out flipped.",
            "<i>QP</i> = (2 − 5)î + (−1 − 3)ĵ + (3 − (−1))k̂ = −3î − 4ĵ + 4k̂.",
            "<b>Magnitude.</b> |<i>QP</i>| = √(9 + 16 + 16) = √41.",
            "<b>Unit vector.</b> (1/√41)(−3î − 4ĵ + 4k̂)."
          ],
          "ans": "<b>(1/√41)(−3î − 4ĵ + 4k̂)</b>. In a multiple choice setting, fix the sign pattern from <i>Q</i> → <i>P</i> and the denominator √41 first: every option that fails either is gone before you compute anything."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "A vector <i>r</i> has magnitude 14 and direction ratios 2, 3, −6, and makes an acute angle with the <i>x</i>-axis. Find its direction cosines and its component form.",
          "steps": [
            "<b>Normalise the ratios.</b> √(2<sup>2</sup> + 3<sup>2</sup> + (−6)<sup>2</sup>) = √(4 + 9 + 36) = √49 = 7.",
            "<b>Direction cosines.</b> Dividing by 7: (2/7, 3/7, −6/7). The other admissible set is (−2/7, −3/7, 6/7), the opposite ray.",
            "<b>Pick the ray.</b> An acute angle with the <i>x</i>-axis means cos α > 0, so <i>l</i> = 2/7 and the first set is the one wanted.",
            "<b>Components.</b> <i>r</i> = 14 × (2/7, 3/7, −6/7) = 4î + 6ĵ − 12k̂. Check: √(16 + 36 + 144) = √196 = 14."
          ],
          "ans": "Direction cosines <b>(2/7, 3/7, −6/7)</b>; <i>r</i> = <b>4î + 6ĵ − 12k̂</b>."
        },
        {
          "t": "mcq",
          "q": "The direction cosines of the vector î − 2ĵ + 2k̂ are:",
          "opts": [
            { "label": "(1/3, −2/3, 2/3)" },
            { "label": "(1, −2, 2)", "nudge": "Those are direction <b>ratios</b>, not cosines. They fix the direction but not the scale. Square them and add: 1 + 4 + 4 = 9, not 1, so they cannot be cosines." },
            { "label": "(1/9, −2/9, 2/9)", "nudge": "You divided by |<i>r</i>|<sup>2</sup> = 9 instead of |<i>r</i>| = 3. The denominator is the magnitude itself, never its square. Squares here sum to 1/9." },
            { "label": "(1/√5, −2/√5, 2/√5)", "nudge": "√5 comes from 1 + 4, so the third component's square was never added. |<i>r</i>| = √(1 + 4 + 4) = 3." }
          ],
          "correct": 0,
          "solution": "|<i>r</i>| = √(1 + 4 + 4) = 3, so the cosines are (1/3, −2/3, 2/3). Check: 1/9 + 4/9 + 4/9 = 1."
        },
        {
          "t": "mcq",
          "q": "A vector of magnitude 10 in the direction <b>opposite</b> to <i>a</i> = 3î + 4k̂ is:",
          "opts": [
            { "label": "6î + 8k̂", "nudge": "Right magnitude, wrong direction. This is +10â, so it points the <b>same</b> way as <i>a</i>. The word “opposite” demands the minus sign." },
            { "label": "−6î − 8k̂" },
            { "label": "−3î − 4k̂", "nudge": "This is just −<i>a</i>. Its magnitude is 5, not 10; you flipped the direction but never scaled." },
            { "label": "−(3/5)î − (4/5)k̂", "nudge": "That is the opposite <b>unit</b> vector, magnitude 1. You normalised and then forgot to multiply by 10." }
          ],
          "correct": 1,
          "solution": "|<i>a</i>| = √(9 + 16) = 5, so â = (1/5)(3î + 4k̂). Opposite direction, magnitude 10: −10â = −2(3î + 4k̂) = −6î − 8k̂."
        },
        {
          "t": "mcq",
          "q": "The direction cosines of the vector from <i>A</i>(1, 2, −2) to <i>B</i>(3, 1, 0) are:",
          "opts": [
            { "label": "(2, −1, 2)", "nudge": "That is <i>AB</i> itself, a perfectly good set of direction <b>ratios</b>. Cosines are the normalised version; these square to 9." },
            { "label": "(2/3, −1/3, 2/3)" },
            { "label": "(−2/3, 1/3, −2/3)", "nudge": "You computed <i>BA</i> instead of <i>AB</i>: head minus tail means <i>B</i> minus <i>A</i>. Every sign is flipped, which is the opposite ray." },
            { "label": "(2/9, −1/9, 2/9)", "nudge": "Divided by |<i>AB</i>|<sup>2</sup> = 9 rather than |<i>AB</i>| = 3. Squaring these gives 1/9, not 1." }
          ],
          "correct": 1,
          "solution": "<i>AB</i> = (3 − 1)î + (1 − 2)ĵ + (0 − (−2))k̂ = 2î − ĵ + 2k̂, |<i>AB</i>| = √(4 + 1 + 4) = 3. Cosines (2/3, −1/3, 2/3), and 4/9 + 1/9 + 4/9 = 1."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Find the magnitude and the unit vector in the direction of <i>a</i> = 2î + ĵ − 2k̂.",
              "a": "|<i>a</i>| = √(4 + 1 + 4) = <b>3</b>, so â = <b>(1/3)(2î + ĵ − 2k̂)</b>. Check: (2/3)<sup>2</sup> + (1/3)<sup>2</sup> + (2/3)<sup>2</sup> = 9/9 = 1."
            },
            {
              "q": "[CBSE] For <i>P</i>(2, −1, 3) and <i>Q</i>(5, 3, −1), write <i>PQ</i> and find |<i>PQ</i>|.",
              "a": "<i>PQ</i> = (5 − 2)î + (3 − (−1))ĵ + (−1 − 3)k̂ = <b>3î + 4ĵ − 4k̂</b>, |<i>PQ</i>| = √(9 + 16 + 16) = <b>√41</b>. Note this is exactly −<i>QP</i>, with the same magnitude."
            },
            {
              "q": "[JEE MAIN] Find a vector of magnitude 21 in the direction of 2î − 3ĵ + 6k̂.",
              "a": "The magnitude is √(4 + 9 + 36) = 7, so the unit vector is (1/7)(2î − 3ĵ + 6k̂) and 21 times it is 3(2î − 3ĵ + 6k̂) = <b>6î − 9ĵ + 18k̂</b>. Check: √(36 + 81 + 324) = √441 = 21."
            },
            {
              "q": "[JEE MAIN] Can (1/2, 1/2, 1/2) be a set of direction cosines? If not, scale it so that it can.",
              "a": "No: the squares sum to 3/4, not 1. But it is a valid set of direction <b>ratios</b>, proportional to (1, 1, 1). Dividing by √3 gives the cosines <b>(1/√3, 1/√3, 1/√3)</b>, the direction of the main diagonal of a cube."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Mixing up direction ratios and direction cosines.</b> Ratios are any proportional triple; cosines are the one normalised triple with <i>l</i><sup>2</sup> + <i>m</i><sup>2</sup> + <i>n</i><sup>2</sup> = 1. If the question says “cosines”, you must divide by the magnitude.",
            "<b>Getting the subtraction order wrong.</b> <i>AB</i> = <i>b</i> − <i>a</i>, head minus tail, always. Writing <i>a</i> − <i>b</i> silently computes <i>BA</i> and flips every sign in the answer.",
            "<b>Dividing by |<i>r</i>|<sup>2</sup> instead of |<i>r</i>|.</b> The denominator of a unit vector, and of a direction cosine, is the magnitude itself.",
            "<b>Forming a unit vector from the zero vector.</b> The recipe divides by |<i>a</i>|, so it needs <i>a</i> ≠ 0. The zero vector has no direction at all, so it has no unit vector and no direction cosines.",
            "<b>Sliding a position vector.</b> An ordinary vector may be moved anywhere. A position vector is tied to the origin by definition, and moving it changes which point it names."
          ]
        },
        {
          "t": "protip",
          "html": "the squares-sum-to-one gatekeeper. whenever an option claims to be a set of direction cosines, or a unit vector, square the three numbers and add. if you do not get 1, delete that option without any further work. in the source's own mcqs this one check kills two or three distractors in seconds, and it costs you about four."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "|r| = √(x² + y² + z²)", "note": "the Class 11 distance formula, renamed" },
            { "f": "â = a / |a|, needs a ≠ 0", "note": "divide by the magnitude, never by its square" },
            { "f": "AB = b − a, and AB = −BA", "note": "head minus tail; order is a whole mark" },
            { "f": "|λa| = |λ| |a|", "note": "λ > 0 same way, λ < 0 opposite, λ = 0 gives 0" },
            { "f": "l = x/r, m = y/r, n = z/r", "note": "the components of the unit vector" },
            { "f": "l² + m² + n² = 1", "note": "the fastest sanity check in the topic" },
            { "f": "DRs are proportional to DCs, and not unique", "note": "(2, −1, 2) and (4, −2, 4) are the same direction" }
          ],
          "aids": [
            "“dc means divided by the magnitude, dr means ratio only”",
            "“squares of direction cosines always sum to one”",
            "“head minus tail, every single time”"
          ]
        }
      ]
    },
    {
      "n": "02",
      "title": "Addition, the Section Formula and Triangle Geometry",
      "chip": "02 SECTION",
      "kalam": "walk one, then the other, and land in the same place",
      "blocks": [
        {
          "t": "p",
          "html": "Walk 300 m east, then 400 m north. You could have walked 500 m north-east-ish and arrived at the same corner. That is vector addition, and it is the reason a vector is allowed to slide: to add <i>b</i> to <i>a</i>, slide <i>b</i> until its tail sits on <i>a</i>'s head, and the arrow from the start of <i>a</i> to the end of <i>b</i> is <i>a</i> + <i>b</i>. This is the <b>triangle law</b>.<br><br>Draw both from the same point instead and complete the parallelogram: the diagonal through that shared corner is the same <i>a</i> + <i>b</i>. This is the <b>parallelogram law</b>, and it is the same statement with the picture redrawn. Addition is commutative, which is exactly the observation that the parallelogram has two routes round it and both end at the same corner."
        },
        {
          "t": "think",
          "html": "the two laws are one law seen twice. triangle law is “do this, then that”. parallelogram law is “do both at once from here”. displacement does not care which story you tell, so the answer is the same arrow either way, which is why you can pick whichever picture the question has already half-drawn for you."
        },
        {
          "t": "formula",
          "kicker": "ADDITION, AND WHAT SUBTRACTION MEANS",
          "main": "a + b = b + a,   a − b = a + (−b)",
          "legend": [
            "<b>Triangle law:</b> tail of <i>b</i> to head of <i>a</i>; the resultant runs from the free tail to the free head.",
            "<b>Parallelogram law:</b> both from one point; the resultant is the diagonal through that point.",
            "<b>Subtraction:</b> <i>a</i> − <i>b</i> is the arrow from the head of <i>b</i> to the head of <i>a</i>, when both are drawn from the same point. That is head minus tail again, in disguise."
          ],
          "note": "In components you simply add or subtract componentwise: (<i>a</i><sub>1</sub> + <i>b</i><sub>1</sub>)î + (<i>a</i><sub>2</sub> + <i>b</i><sub>2</sub>)ĵ + (<i>a</i><sub>3</sub> + <i>b</i><sub>3</sub>)k̂. The geometry is the reason; the arithmetic is the tool."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "DIAGRAM · TWO LAWS AND ONE DIFFERENCE",
          "chips": ["Triangle", "Parallelogram", "a − b"],
          "mathChips": true,
          "captions": [
            "Triangle law. Slide b until its tail meets the head of a. The arrow from the start of a to the head of b is a + b. Notice that nothing was measured; the resultant is defined by where you end up.",
            "Parallelogram law. Draw a and b from the same corner and complete the shape. The diagonal through that corner is the same a + b as before. Going a then b, or b then a, walks the two different sides of the same parallelogram and lands on the same corner, which is commutativity as a picture.",
            "Subtraction. With a and b drawn from O, the arrow from the head of b to the head of a is a − b, because b plus that arrow gets you to a. This is the same head minus tail rule as AB = b − a, with the origin moved."
          ],
          "frames": [
            {
              "x": [-1.0, 4.2],
              "y": [-0.8, 3.0],
              "segments": [
                { "from": [0, 0], "to": [2.4, 0.6], "arrow": true, "label": "a" },
                { "from": [2.4, 0.6], "to": [3.2, 2.4], "arrow": true, "label": "b" },
                { "from": [0, 0], "to": [3.2, 2.4], "arrow": true, "soft": true, "label": "a + b" }
              ],
              "points": [{ "x": 0, "y": 0, "label": "O" }]
            },
            {
              "x": [-1.0, 4.2],
              "y": [-0.8, 3.0],
              "polygons": [{ "points": [[0, 0], [2.4, 0.6], [3.2, 2.4], [0.8, 1.8]], "corners": false, "soft": true }],
              "segments": [
                { "from": [0, 0], "to": [2.4, 0.6], "arrow": true, "label": "a" },
                { "from": [0, 0], "to": [0.8, 1.8], "arrow": true, "label": "b" },
                { "from": [0, 0], "to": [3.2, 2.4], "arrow": true, "soft": true, "label": "a + b" }
              ],
              "points": [{ "x": 0, "y": 0, "label": "O" }]
            },
            {
              "x": [-1.0, 4.2],
              "y": [-0.8, 3.0],
              "segments": [
                { "from": [0, 0], "to": [2.4, 0.6], "arrow": true, "soft": true, "label": "a" },
                { "from": [0, 0], "to": [0.8, 1.8], "arrow": true, "soft": true, "label": "b" },
                { "from": [0.8, 1.8], "to": [2.4, 0.6], "arrow": true, "label": "a − b" }
              ],
              "points": [{ "x": 0, "y": 0, "label": "O" }]
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "THE COLLINEARITY TEST",
          "main": "A, B, C collinear  ⟺  AB = λ AC for some scalar λ",
          "legend": [
            "In position vectors: <i>b</i> − <i>a</i> = λ(<i>c</i> − <i>a</i>).",
            "In components, just check whether the two triples are proportional, componentwise, with the <b>same</b> λ in all three places.",
            "λ is allowed to be negative: that puts <i>B</i> and <i>C</i> on opposite sides of <i>A</i>, which is still one line."
          ],
          "note": "Three points are collinear exactly when the two vectors joining them from a common point are scalar multiples of each other: no lengths, no angles, one proportionality check. And the common point matters. Two parallel vectors sitting on two different lines are parallel, not collinear; it is sharing <i>A</i> that forces the three points onto one line."
        },
        {
          "t": "p",
          "html": "Now the workhorse. A point <i>R</i> sits on the segment <i>AB</i> and cuts it in a given ratio. Class 11 gave you this in coordinates, one line per axis. In position vectors it is a single line for all three coordinates at once, and, better, it can be proved in four steps rather than assumed."
        },
        {
          "t": "formula",
          "kicker": "THE SECTION FORMULA",
          "tag": "INTERNAL, EXTERNAL, MIDPOINT",
          "main": "OR = (m b + n a)/(m + n)   internal<br>OR = (m b − n a)/(m − n)   external",
          "legend": [
            "<i>R</i> divides <i>AB</i> in the ratio <i>m</i> : <i>n</i>, with <i>a</i> and <i>b</i> the position vectors of <i>A</i> and <i>B</i>.",
            "<b>Internal</b> needs <i>m</i> + <i>n</i> ≠ 0 and puts <i>R</i> between <i>A</i> and <i>B</i>.",
            "<b>External</b> needs <i>m</i> ≠ <i>n</i> and puts <i>R</i> outside the segment, beyond <i>A</i> or beyond <i>B</i>.",
            "<b>Midpoint</b> is the internal case with <i>m</i> = <i>n</i> = 1: (<i>a</i> + <i>b</i>)/2."
          ],
          "note": "Notice which letter travels with which coefficient: <i>m</i> is the part next to <i>A</i>, and it multiplies <i>b</i>, the far end. Get that crossing wrong and you have divided in the ratio <i>n</i> : <i>m</i> instead."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE SECTION FORMULA, TAP A LINE",
          "steps": [
            {
              "eq": "AR : RB = m : n, so n AR = m RB",
              "why": "R lies between A and B, so the two segment vectors AR and RB point the same way along the line. Equal direction is what lets a ratio of lengths be promoted to an equation between vectors; without it you would only have an equation between magnitudes and no information about direction."
            },
            {
              "eq": "AR = r − a and RB = b − r, with r = OR",
              "why": "Head minus tail, twice. This is the only place the section formula uses any geometry at all; everything after it is algebra you could do with your eyes shut."
            },
            {
              "eq": "n(r − a) = m(b − r)",
              "why": "Substitute the two expressions into the vector equation from step 1. Both sides are now written in the three position vectors a, b and r, which are the only quantities the answer is allowed to mention."
            },
            {
              "eq": "(m + n) r = m b + n a",
              "why": "Expand both sides and gather the r terms on the left and everything else on the right. The n a moves right and the m r moves left, which is why the far endpoint b ends up paired with m."
            },
            {
              "eq": "r = (m b + n a)/(m + n)",
              "why": "R lies strictly between A and B, so m and n are both positive and m + n is not zero, and we may divide. For external division the directions of AR and RB are opposite, so step 1 reads n AR = −m RB, which is the same algebra with n replaced by −n, and that is where the two minus signs in the external formula come from."
            }
          ]
        },
        {
          "t": "p",
          "html": "The section formula pays for itself immediately. Take a triangle <i>ABC</i> with vertices at <i>a</i>, <i>b</i>, <i>c</i>, let <i>D</i> be the midpoint of <i>BC</i>, and walk two thirds of the way down the median <i>AD</i> from <i>A</i>. Two applications of the formula, and the point you land on turns out not to care which vertex you started from."
        },
        {
          "t": "formula",
          "kicker": "THE CENTROID",
          "main": "OG = (a + b + c)/3",
          "legend": [
            "The three medians of a triangle meet at one point <i>G</i>, the <b>centroid</b>.",
            "<i>G</i> divides each median in the ratio 2 : 1, measured <b>from the vertex</b>.",
            "The formula is completely symmetric in <i>a</i>, <i>b</i>, <i>c</i>, which is the proof of concurrency in one glance."
          ],
          "note": "The vector method delivers in three lines what coordinate geometry needs a page for, and the symmetry argument is the part worth writing out: it is what turns “the medians from <i>A</i> and from <i>B</i> meet” into “all three pass through one point”."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "<i>R</i> divides the join of <i>A</i>(3, −2, 4) and <i>B</i>(8, 3, −6) internally in the ratio 2 : 3. Find the position vector of <i>R</i> and the direction cosines of <i>OR</i>.",
          "steps": [
            "<b>Set up.</b> <i>a</i> = 3î − 2ĵ + 4k̂, <i>b</i> = 8î + 3ĵ − 6k̂, <i>m</i> : <i>n</i> = 2 : 3, so <i>OR</i> = (2<i>b</i> + 3<i>a</i>)/5.",
            "<b>Numerator, componentwise.</b> î: 16 + 9 = 25. ĵ: 6 − 6 = 0. k̂: −12 + 12 = 0.",
            "<b>Divide.</b> <i>OR</i> = (25î + 0ĵ + 0k̂)/5 = 5î. So <i>R</i> sits on the positive <i>x</i>-axis, which the two zeros were quietly telling you.",
            "<b>Direction cosines.</b> |<i>OR</i>| = 5, so <i>l</i> = 5/5 = 1, <i>m</i> = 0, <i>n</i> = 0. Check: 1 + 0 + 0 = 1."
          ],
          "ans": "<i>OR</i> = <b>5î</b>, with direction cosines <b>(1, 0, 0)</b>."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "In triangle <i>ABC</i> the vertices have position vectors <i>a</i>, <i>b</i>, <i>c</i>. Let <i>D</i> be the midpoint of <i>BC</i>. Show that the point dividing the median <i>AD</i> in the ratio 2 : 1 from <i>A</i> does not depend on which vertex you start from, and find it.",
          "steps": [
            "<b>Locate <i>D</i>.</b> Midpoint of <i>BC</i>, so <i>OD</i> = (<i>b</i> + <i>c</i>)/2.",
            "<b>Divide <i>AD</i> in 2 : 1 from <i>A</i>.</b> Here <i>m</i> : <i>n</i> = 2 : 1, from <i>A</i>(<i>a</i>) to <i>D</i>(<i>OD</i>): <i>OP</i> = (2·<i>OD</i> + 1·<i>a</i>)/3.",
            "<b>Substitute.</b> 2·(<i>b</i> + <i>c</i>)/2 = <i>b</i> + <i>c</i>, so <i>OP</i> = (<i>a</i> + <i>b</i> + <i>c</i>)/3.",
            "<b>Read the symmetry.</b> That expression treats <i>a</i>, <i>b</i>, <i>c</i> identically. Running the same two steps from <i>B</i> to the midpoint of <i>CA</i>, or from <i>C</i> to the midpoint of <i>AB</i>, produces the identical algebra and the identical answer."
          ],
          "ans": "All three medians pass through <b><i>G</i> with <i>OG</i> = (<i>a</i> + <i>b</i> + <i>c</i>)/3</b>, so they are concurrent, and <i>G</i> divides each median 2 : 1 from the vertex."
        },
        {
          "t": "p",
          "html": "The same machinery reaches three more centres of a triangle, and boards and JEE both ask for them. Write the side lengths as <i>p</i> = |<i>BC</i>|, <i>q</i> = |<i>CA</i>| and <i>s</i> = |<i>AB</i>|, opposite <i>A</i>, <i>B</i> and <i>C</i> respectively. The <b>incentre</b> is the centroid's weighted cousin: instead of weighting the three vertices equally, weight each by the length of the side opposite it."
        },
        {
          "t": "formula",
          "kicker": "THE INCENTRE",
          "main": "OI = (p a + q b + s c)/(p + q + s)",
          "legend": [
            "<i>p</i>, <i>q</i>, <i>s</i> are the lengths of the sides opposite <i>A</i>, <i>B</i>, <i>C</i>. They are <b>numbers</b>; <i>a</i>, <i>b</i>, <i>c</i> are the position vectors of the vertices.",
            "The bisector from <i>A</i> meets <i>BC</i> at the point dividing it in the ratio <i>s</i> : <i>q</i>, by the angle bisector theorem.",
            "The incentre then divides that bisector in the ratio (<i>q</i> + <i>s</i>) : <i>p</i> from <i>A</i>, which comes from comparing areas: each of the three inner triangles has height <i>r</i> over its own side."
          ],
          "note": "Set <i>p</i> = <i>q</i> = <i>s</i> and this collapses to the centroid, which is the right answer for an equilateral triangle. That is a free check on whether you have the weights the right way round."
        },
        {
          "t": "p",
          "html": "Next, put the <b>circumcentre at the origin</b>. That single choice, which costs nothing because you may place the origin where you like, makes |<i>a</i>| = |<i>b</i>| = |<i>c</i>| = <i>R</i> and turns the orthocentre into the simplest formula in the topic."
        },
        {
          "t": "formula",
          "kicker": "ORTHOCENTRE, WITH THE CIRCUMCENTRE AT O",
          "main": "OH = a + b + c",
          "legend": [
            "Valid only when the circumcentre is the origin, so that |<i>a</i>| = |<i>b</i>| = |<i>c</i>|.",
            "Proof in one line: (<i>h</i> − <i>a</i>) · (<i>b</i> − <i>c</i>) = (<i>b</i> + <i>c</i>) · (<i>b</i> − <i>c</i>) = |<i>b</i>|<sup>2</sup> − |<i>c</i>|<sup>2</sup> = 0, so <i>AH</i> ⊥ <i>BC</i>. Cycle the letters for the other two altitudes.",
            "<b>Euler line:</b> the centroid is (<i>a</i> + <i>b</i> + <i>c</i>)/3 = <i>OH</i>/3, so <i>O</i>, <i>G</i>, <i>H</i> are collinear with <i>OG</i> : <i>GH</i> = 1 : 2."
          ],
          "note": "That one-line proof uses the dot product, which Topic 03 sets up properly. If you have not met it yet, read the identity as “perpendicular means the product is zero” and come back."
        },
        {
          "t": "formula",
          "kicker": "AREA RATIOS READ OFF THE COEFFICIENTS",
          "main": "OP = (l a + m b + n c)/(l + m + n)  ⇒  [PBC] : [PCA] : [PAB] = l : m : n",
          "legend": [
            "Requires <i>l</i> + <i>m</i> + <i>n</i> ≠ 0. The three weights need not be whole numbers.",
            "Each ratio to the whole triangle is that weight over the total: [<i>PBC</i>]/[<i>ABC</i>] = <i>l</i>/(<i>l</i> + <i>m</i> + <i>n</i>).",
            "The weight sitting on <i>a</i> governs the triangle <b>opposite</b> <i>A</i>, which is the half of the statement students misremember."
          ],
          "note": "This is the line that turns a geometry question into arithmetic: no construction, no altitudes, no similar triangles. Sanity check built in: the three fractions must add to 1, because the three small triangles tile the big one. The centroid has weights 1 : 1 : 1 and thirds all round; the incentre has weights <i>p</i> : <i>q</i> : <i>s</i>, which is why the inradius is the same for all three."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY THE COEFFICIENTS ARE THE AREAS",
          "steps": [
            {
              "eq": "L = l + m + n, and OP = (l a + m b + n c)/L",
              "why": "Name the total weight once so the algebra stays readable. Dividing by L is what makes OP an average of the three vertices rather than a sum, and it is why P does not move when all three weights are doubled. Note that l, m and n here are the area weights, not the section ratio m : n from earlier in this topic."
            },
            {
              "eq": "b − OP = [l(b − a) + n(b − c)]/L",
              "why": "Compute L times b minus the numerator: Lb minus la minus mb minus nc leaves lb plus nb minus la minus nc, which factorises as l times (b minus a) plus n times (b minus c). Watch the direction of each bracket carefully; the source prints these two brackets the other way round, which is the negative of what the label claims."
            },
            {
              "eq": "c − OP = [l(c − a) + m(c − b)]/L",
              "why": "The same computation with c in place of b. These two are the edge vectors of triangle PBC as seen from P, and their cross product is twice its oriented area."
            },
            {
              "eq": "each of (b−a)×(c−a), (b−a)×(c−b), (b−c)×(c−a) equals S",
              "why": "Write u for b minus a and v for c minus a. Then b minus c is u minus v and c minus b is v minus u, and each of these three products expands to u cross v, because a vector crossed with itself vanishes. Call that common value S; it is twice the oriented area of the whole triangle ABC. Check the order of every bracket against step 2 and step 3: reverse one and you have the negative of S, not S."
            },
            {
              "eq": "(b − OP) × (c − OP) = (l² + lm + ln)S/L² = (l/L) S",
              "why": "Expand the product of the two brackets. Three of the four term pairs give a multiple of S, and the fourth crosses b minus c with its own negative and vanishes. The three surviving coefficients are l squared, l times m and n times l, and they factorise as l times L, so one factor of L cancels. Taking magnitudes gives the area ratio, and the same computation with the letters cycled gives the other two."
            }
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Find the incentre of the triangle with vertices <i>A</i>(0, 0), <i>B</i>(4, 0), <i>C</i>(0, 3).",
          "steps": [
            "<b>Side lengths, each opposite its vertex.</b> <i>p</i> = |<i>BC</i>| = √(16 + 9) = 5, <i>q</i> = |<i>CA</i>| = 3, <i>s</i> = |<i>AB</i>| = 4.",
            "<b>Weighted average.</b> <i>OI</i> = [5(0, 0) + 3(4, 0) + 4(0, 3)]/(5 + 3 + 4) = [(12, 0) + (0, 12)]/12.",
            "<b>Divide.</b> (12, 12)/12 = (1, 1).",
            "<b>Check.</b> The triangle is right angled at <i>A</i>, area Δ = 6 and semiperimeter <i>s</i><sub>0</sub> = 6, so the inradius is Δ/<i>s</i><sub>0</sub> = 1. A right triangle with its legs on the axes has its incentre at (<i>r</i>, <i>r</i>). Agreement."
          ],
          "ans": "The incentre is <b>(1, 1)</b>."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "<i>A</i>(5, 0), <i>B</i>(0, 5) and <i>C</i>(−3, −4) all lie on <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> = 25. Taking the circumcentre as origin, find the orthocentre and verify it lies on two altitudes.",
          "steps": [
            "<b>Check the hypothesis.</b> 25 + 0 = 25, 0 + 25 = 25, 9 + 16 = 25. All three are at distance 5 from the origin, so the origin really is the circumcentre and the formula applies.",
            "<b>Apply it.</b> <i>OH</i> = <i>a</i> + <i>b</i> + <i>c</i> = (5 + 0 − 3, 0 + 5 − 4) = (2, 1).",
            "<b>Altitude from <i>A</i>.</b> <i>BC</i> = (−3, −9) and <i>AH</i> = (2 − 5, 1 − 0) = (−3, 1). Product of components: 9 − 9 = 0, so <i>AH</i> ⊥ <i>BC</i>.",
            "<b>Altitude from <i>B</i>.</b> <i>AC</i> = (−8, −4) and <i>BH</i> = (2, −4). Product: −16 + 16 = 0. Two altitudes is enough; the third is forced."
          ],
          "ans": "The orthocentre is <b><i>H</i>(2, 1)</b>. The centroid is (2, 1)/3, so |<i>OG</i>| = √5/3 and |<i>GH</i>| = 2√5/3, confirming <i>OG</i> : <i>GH</i> = 1 : 2 on the Euler line."
        },
        {
          "t": "mcq",
          "q": "If <i>R</i> divides <i>A</i>(<i>a</i>) and <i>B</i>(<i>b</i>) <b>externally</b> in the ratio 3 : 1, then <i>OR</i> =",
          "opts": [
            { "label": "(3b + a)/4", "nudge": "That is the <b>internal</b> formula. External division has a minus in the numerator and <i>m</i> − <i>n</i> underneath; you changed neither." },
            { "label": "(3b − a)/2" },
            { "label": "(3b − a)/4", "nudge": "Numerator right, denominator wrong. External uses <i>m</i> − <i>n</i> = 3 − 1 = 2, not <i>m</i> + <i>n</i> = 4." },
            { "label": "(a − 3b)/2", "nudge": "The numerator's sign is flipped, which computes the point dividing in the ratio 1 : 3 instead of 3 : 1. That is a different point on the line." }
          ],
          "correct": 1,
          "solution": "External: (<i>m b</i> − <i>n a</i>)/(<i>m</i> − <i>n</i>) = (3<i>b</i> − <i>a</i>)/(3 − 1) = (3<i>b</i> − <i>a</i>)/2. A quick tell that it is external: <i>R</i> lands outside the segment, beyond <i>B</i>."
        },
        {
          "t": "mcq",
          "q": "The points <i>P</i>(1, 2, 3), <i>Q</i>(3, 6, 9) and <i>S</i>(2, 4, 6) are:",
          "opts": [
            { "label": "vertices of a triangle", "nudge": "Three distinct points do not have to make a triangle. If they line up, the “triangle” has zero area, and these do line up." },
            { "label": "collinear" },
            { "label": "coincident", "nudge": "Coincident would need all three to be the same point. (1, 2, 3) and (3, 6, 9) are visibly different." },
            { "label": "forming a right angle at <i>S</i>", "nudge": "Nothing here has been tested for perpendicularity, and a right angle needs three genuinely non-collinear points to sit at. Check proportionality before you reach for angles." }
          ],
          "correct": 1,
          "solution": "<i>PQ</i> = 2î + 4ĵ + 6k̂ and <i>PS</i> = î + 2ĵ + 3k̂, so <i>PQ</i> = 2<i>PS</i>. Two parallel vectors through the common point <i>P</i>, hence one line."
        },
        {
          "t": "mcq",
          "q": "<i>P</i> lies on the median <i>AD</i> of triangle <i>ABC</i> with <i>AP</i> : <i>PD</i> = 3 : 1. Then [<i>PBC</i>] / [<i>ABC</i>] =",
          "opts": [
            { "label": "1/2", "nudge": "1/2 is the answer for a point <b>halfway</b> along the median, <i>AP</i> : <i>PD</i> = 1 : 1. Here <i>P</i> is three quarters of the way from <i>A</i>, so the answer must be smaller than a half." },
            { "label": "1/4" },
            { "label": "3/4", "nudge": "You used the 3 instead of the 2. <i>P</i> is three quarters of the way from <i>A</i>, so it is <b>close</b> to <i>BC</i>, and the triangle <i>PBC</i> must be small, not large." },
            { "label": "3/8", "nudge": "3/8 is real, but it is [<i>PCA</i>]/[<i>ABC</i>] and [<i>PAB</i>]/[<i>ABC</i>], the other two pieces. Note 1/4 + 3/8 + 3/8 = 1." }
          ],
          "correct": 1,
          "solution": "<i>OD</i> = (<i>b</i> + <i>c</i>)/2, and <i>P</i> divides <i>AD</i> in 3 : 1 from <i>A</i>, so <i>OP</i> = (3·<i>OD</i> + <i>a</i>)/4 = (2<i>a</i> + 3<i>b</i> + 3<i>c</i>)/8. The weight on <i>a</i> is 2 out of 8, so [<i>PBC</i>]/[<i>ABC</i>] = 2/8 = 1/4."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Find the position vector of the midpoint of the segment joining <i>A</i>(−1, 4, 2) and <i>B</i>(5, −2, 6).",
              "a": "(<i>a</i> + <i>b</i>)/2 = [(−1 + 5)î + (4 − 2)ĵ + (2 + 6)k̂]/2 = <b>2î + ĵ + 4k̂</b>."
            },
            {
              "q": "[JEE MAIN] Find <i>k</i> so that <i>A</i>(<i>k</i>, −10, 3), <i>B</i>(1, −1, 3) and <i>C</i>(3, 5, 3) are collinear.",
              "a": "<i>AB</i> = (1 − <i>k</i>, 9, 0) and <i>BC</i> = (2, 6, 0). Proportionality needs (1 − <i>k</i>)/2 = 9/6 = 3/2, so 1 − <i>k</i> = 3 and <b><i>k</i> = −2</b>. The <i>z</i>-components are both 0, which is consistent and gives no extra condition."
            },
            {
              "q": "[JEE ADVANCED] <i>A</i> and <i>B</i> have position vectors <i>a</i> and <i>b</i>. Find the position vector of <i>C</i> on <i>BA</i> produced with <i>BC</i> = (3/2)<i>BA</i>.",
              "a": "<i>BA</i> = <i>a</i> − <i>b</i>, so <i>OC</i> = <i>OB</i> + <i>BC</i> = <i>b</i> + (3/2)(<i>a</i> − <i>b</i>) = (3/2)<i>a</i> − (1/2)<i>b</i> = <b>(1/2)(3<i>a</i> − <i>b</i>)</b>. The factor 3/2 exceeds 1, which is exactly what “produced” means: <i>C</i> lies beyond <i>A</i>."
            },
            {
              "q": "[JEE MAIN] Find the incentre of the triangle with vertices <i>A</i>(0, 0), <i>B</i>(6, 0), <i>C</i>(0, 8).",
              "a": "<i>p</i> = |<i>BC</i>| = 10, <i>q</i> = |<i>CA</i>| = 8, <i>s</i> = |<i>AB</i>| = 6. Then [10(0, 0) + 8(6, 0) + 6(0, 8)]/24 = (48, 48)/24 = <b>(2, 2)</b>. Check: Δ = 24, semiperimeter 12, inradius 2, and a right triangle on the axes has incentre (<i>r</i>, <i>r</i>)."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Confusing internal and external division.</b> Internal has a plus and denominator <i>m</i> + <i>n</i>; external has a minus and denominator <i>m</i> − <i>n</i>. A quick tell: external puts <i>R</i> outside the segment, so its coordinates should land beyond <i>A</i> or beyond <i>B</i>.",
            "<b>Pairing the coefficients with the near endpoint.</b> In ratio <i>m</i> : <i>n</i> from <i>A</i> to <i>B</i>, the <i>m</i> multiplies <i>b</i>. Pair them the natural way and you have computed the point for ratio <i>n</i> : <i>m</i>.",
            "<b>Assuming three points make a triangle.</b> They may be collinear, and then every area is zero. Test proportionality before assuming an angle exists.",
            "<b>Weighting the incentre with the adjacent sides.</b> Each vertex is weighted by the side <b>opposite</b> it. Weighting it by an adjacent side gives a point that is not any named centre at all.",
            "<b>Using <i>OH</i> = <i>a</i> + <i>b</i> + <i>c</i> without moving the circumcentre to the origin.</b> That formula is a consequence of |<i>a</i>| = |<i>b</i>| = |<i>c</i>|, and away from that origin it is simply false."
          ]
        },
        {
          "t": "protip",
          "html": "internal adds, external subtracts. and once a point is written as a weighted average of the three vertices, stop drawing: the three weights are already the three area ratios, and if they do not add up to the denominator you have made an arithmetic slip somewhere upstream."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "triangle law: tail of b to head of a", "note": "parallelogram law is the same picture redrawn" },
            { "f": "internal: OR = (m b + n a)/(m + n)", "note": "m sits next to A and multiplies b" },
            { "f": "external: OR = (m b − n a)/(m − n)", "note": "R lands outside the segment" },
            { "f": "midpoint: (a + b)/2", "note": "the internal case with m = n = 1" },
            { "f": "centroid: (a + b + c)/3", "note": "medians concur, 2 : 1 from each vertex" },
            { "f": "incentre: (p a + q b + s c)/(p + q + s)", "note": "p, q, s are the sides opposite A, B, C" },
            { "f": "circumcentre at O ⇒ OH = a + b + c", "note": "and OG : GH = 1 : 2 on the Euler line" },
            { "f": "weights l : m : n are the area ratios", "note": "the weight on a governs the triangle opposite A" }
          ],
          "aids": [
            "“internal adds, external subtracts”",
            "“centroid weights all ones, incentre weights the opposite sides”",
            "“coefficients are areas, so they must add to the whole”"
          ]
        }
      ]
    },
    {
      "n": "03",
      "title": "The Dot Product: Angle, Projection and Magnitude Algebra",
      "chip": "03 DOT",
      "kalam": "how much of this push actually goes that way",
      "blocks": [
        {
          "t": "p",
          "html": "There are two completely different ways to multiply two vectors, and the whole of this topic and the next is built on appreciating why they differ. One multiplication asks <b>how much do these two vectors agree in direction</b> and answers with a plain number. The other asks <b>how much do they spread apart</b> and answers with a brand new vector. This topic is the first one: the <b>dot</b>, or <b>scalar</b>, product.<br><br>Picture shoving a loaded thela down a straight market lane. You push at a slight angle, but only the part of your push that points <b>along</b> the lane moves the cart forward; the sideways part is wasted on the wheels. The dot product measures exactly that useful overlap. Two vectors pointing the same way overlap maximally. Two at right angles do not overlap at all, and their dot product is zero. The answer is a single number, because “amount of agreement” is a quantity, not a direction."
        },
        {
          "t": "think",
          "html": "the dot product is the shadow one vector casts on another. shine a light straight down onto the line of b and see how long a's shadow is. line them up and the shadow is as long as a itself. turn a to a right angle and the shadow shrinks to a point. that is the whole idea, and every formula below is bookkeeping on top of it."
        },
        {
          "t": "def",
          "term": "Dot (scalar) product",
          "html": "For vectors <i>a</i> and <i>b</i> with angle θ between them, 0 ≤ θ ≤ π, the number <i>a</i> · <i>b</i> = |<i>a</i>| |<i>b</i>| cos θ. The result is a <b>scalar</b>. Writing “<i>a</i> · <i>b</i> = a vector” is a conceptual error, not an arithmetic one, and it is marked as such."
        },
        {
          "t": "formula",
          "kicker": "THE DOT PRODUCT, TWO WAYS",
          "main": "a · b = |a| |b| cos θ = a<sub>1</sub>b<sub>1</sub> + a<sub>2</sub>b<sub>2</sub> + a<sub>3</sub>b<sub>3</sub>",
          "legend": [
            "The geometric form tells you what it <b>means</b>; the component form is how you <b>compute</b> it. Multiply matching components and add.",
            "The component form follows from distributivity plus the nine basis products: î · î = ĵ · ĵ = k̂ · k̂ = 1, and every mixed product î · ĵ = ĵ · k̂ = k̂ · î = 0, so six of the nine terms die.",
            "<i>a</i> · <i>a</i> = |<i>a</i>|<sup>2</sup>, which is the identity the whole second half of this topic runs on."
          ],
          "note": "The sign of the answer reads the angle for you before you compute anything else: positive means acute, zero means a right angle, negative means obtuse."
        },
        {
          "t": "defgrid",
          "title": "PROPERTIES OF THE DOT PRODUCT",
          "rows": [
            { "k": "Commutative", "v": "<i>a</i> · <i>b</i> = <i>b</i> · <i>a</i>" },
            { "k": "Distributive", "v": "<i>a</i> · (<i>b</i> + <i>c</i>) = <i>a</i> · <i>b</i> + <i>a</i> · <i>c</i>" },
            { "k": "Square", "v": "<i>a</i> · <i>a</i> = |<i>a</i>|<sup>2</sup>" },
            { "k": "Scalars pull out", "v": "(λ<i>a</i>) · <i>b</i> = λ(<i>a</i> · <i>b</i>)" },
            { "k": "Perpendicularity", "v": "for non-zero <i>a</i>, <i>b</i>: <i>a</i> · <i>b</i> = 0 ⟺ <i>a</i> ⊥ <i>b</i>" },
            { "k": "Basis", "v": "î · î = ĵ · ĵ = k̂ · k̂ = 1, all others 0" },
            { "k": "No division", "v": "from <i>a</i> · <i>b</i> alone you cannot recover <i>b</i>" }
          ]
        },
        {
          "t": "formula",
          "kicker": "THE ANGLE BETWEEN TWO VECTORS",
          "main": "cos θ = (a · b) / (|a| |b|)",
          "legend": [
            "Compute the dot product, divide by both magnitudes, take the inverse cosine.",
            "Because 0 ≤ θ ≤ π, the inverse cosine is unambiguous: there is exactly one answer in that range.",
            "A negative right-hand side means θ is obtuse, and the answer is legitimately more than 90 degrees. Do not throw the minus sign away."
          ],
          "note": "You will be asked for this in half a dozen disguises: “find the angle”, “show they are perpendicular”, “for what λ is the angle acute”. All three are this one formula with different questions asked of the sign."
        },
        {
          "t": "p",
          "html": "Now the idea the source records as the single most examined in the chapter, appearing in more separate sessions than any other: the <b>projection</b>. It is the shadow made numerical. Project <i>a</i> onto <i>b</i> and you get a signed length, and the sign carries real information."
        },
        {
          "t": "formula",
          "kicker": "PROJECTION OF a ON b",
          "main": "scalar projection = (a · b)/|b|<br>projection vector = ((a · b)/|b|<sup>2</sup>) b",
          "legend": [
            "Divide by the magnitude of the vector you are landing <b>on</b>, never the one you are projecting.",
            "The <b>scalar</b> projection is a signed length: positive for an acute angle, zero at a right angle, negative for an obtuse one.",
            "The <b>projection vector</b> divides by |<i>b</i>|<sup>2</sup> and then multiplies by <i>b</i>, which lands you back on the line of <i>b</i> with the right length and sign."
          ],
          "note": "If <i>b</i> is already a unit vector both formulas simplify: the scalar projection is <i>a</i> · b̂ and the vector is (<i>a</i> · b̂)b̂. That special case is where the general formula comes from. It is also half of something bigger: any vector <i>r</i> splits, in exactly one way, into a part along a given non-zero <i>a</i> and a part perpendicular to it, and exams ask for that split constantly."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "DIAGRAM · THE PROJECTION, AND ITS SIGN",
          "chips": ["Acute", "Right angle", "Obtuse"],
          "captions": [
            "Drop a perpendicular from the head of a onto the line of b. The bar underneath is the projection: how far along b you have actually travelled. The angle is acute, the bar runs the same way as b, and a dot b is positive.",
            "Turn a to a right angle. The perpendicular now lands exactly on O, the bar has shrunk to nothing, and the projection is 0. This is the picture behind a dot b = 0 meaning perpendicular, and it is worth carrying instead of the sentence.",
            "Turn a past a right angle. The foot of the perpendicular lands on the far side of O, so the bar runs against b: the projection is negative, and so is a dot b. A negative projection is not an error, it is the answer telling you the angle is obtuse."
          ],
          "frames": [
            {
              "x": [-2.8, 3.8],
              "y": [-1.3, 2.6],
              "segments": [
                { "from": [0, 0], "to": [3, 0], "arrow": true, "label": "b" },
                { "from": [0, 0], "to": [2.2, 1.6], "arrow": true, "label": "a" },
                { "from": [2.2, 1.6], "to": [2.2, 0], "dash": true, "soft": true },
                { "from": [0, -0.55], "to": [2.2, -0.55], "label": "positive" }
              ],
              "points": [{ "x": 0, "y": 0, "label": "O" }]
            },
            {
              "x": [-2.8, 3.8],
              "y": [-1.3, 2.6],
              "segments": [
                { "from": [0, 0], "to": [3, 0], "arrow": true, "label": "b" },
                { "from": [0, 0], "to": [0, 2.2], "arrow": true, "label": "a" }
              ],
              "points": [{ "x": 0, "y": 0, "label": "O" }],
              "labels": [{ "x": 1.1, "y": -0.7, "text": "projection = 0" }]
            },
            {
              "x": [-2.8, 3.8],
              "y": [-1.3, 2.6],
              "segments": [
                { "from": [0, 0], "to": [3, 0], "arrow": true, "label": "b" },
                { "from": [0, 0], "to": [-1.6, 1.6], "arrow": true, "label": "a" },
                { "from": [-1.6, 1.6], "to": [-1.6, 0], "dash": true, "soft": true },
                { "from": [0, -0.55], "to": [-1.6, -0.55], "label": "negative" }
              ],
              "points": [{ "x": 0, "y": 0, "label": "O" }]
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · SPLITTING r ALONG AND ACROSS a",
          "steps": [
            {
              "eq": "assume r = λa + u with u · a = 0",
              "why": "Do not try to construct the split. Assume it exists in this shape, force the coefficient out, and then check afterwards that the pieces you built really do what was assumed. This assume and verify move is worth learning on its own; it appears again in the vector triple product."
            },
            {
              "eq": "r · a = λ(a · a) + u · a = λ|a|²",
              "why": "Dot both sides with a. The whole point of demanding that u be perpendicular to a is that this term now vanishes, leaving one equation in the single unknown lambda."
            },
            {
              "eq": "λ = (r · a)/|a|²",
              "why": "Divide, which is legal because a is non zero so its squared magnitude is strictly positive. Notice that lambda times a is exactly the projection vector of r on a, recovered as a by-product."
            },
            {
              "eq": "r = ((r · a)/|a|²) a  +  (r − ((r · a)/|a|²) a)",
              "why": "Define the two pieces by these formulas and the split exists. Check the second one really is perpendicular: dotting it with a gives r dot a minus lambda times a dot a, which is r dot a minus r dot a, that is zero."
            },
            {
              "eq": "|r|² = |r∥|² + |r⊥|²",
              "why": "Uniqueness and a free check in one line. If two such splits existed, dotting their difference with a would force the two lambdas equal. And because the two pieces are perpendicular, their squared lengths add to the squared length of r, so any split you compute can be verified by Pythagoras in one line."
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "ANGLE BISECTOR DIRECTIONS",
          "main": "internal along â + b̂,   external along â − b̂",
          "legend": [
            "â = <i>a</i>/|<i>a</i>| and b̂ = <i>b</i>/|<i>b</i>|. <b>Normalise first</b>; the rhombus argument needs the two sides to be the same length.",
            "The other diagonal, â − b̂, bisects the supplementary angle: it makes equal angles with â and with −b̂.",
            "The two bisector directions are always perpendicular, because (â + b̂) · (â − b̂) = |â|<sup>2</sup> − |b̂|<sup>2</sup> = 1 − 1 = 0."
          ],
          "note": "<b>Why it works:</b> â and b̂ have equal length, so tail to tail they are two sides of a <b>rhombus</b>, and a rhombus's diagonal bisects the angle between its sides. Shortcut worth memorising: if |<i>a</i>| = |<i>b</i>| already, the two unit vectors share a denominator, so the bisector directions are simply proportional to <i>a</i> + <i>b</i> and <i>a</i> − <i>b</i>. Skipping the normalisation when the magnitudes differ is the standing trap."
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Given <i>a</i> = 2î + 3ĵ + k̂ and <i>b</i> = î − 2ĵ + 2k̂, find (i) <i>a</i> · <i>b</i>, (ii) the angle between them, (iii) the projection of <i>a</i> on <i>b</i>.",
          "steps": [
            "<b>(i) Dot product.</b> (2)(1) + (3)(−2) + (1)(2) = 2 − 6 + 2 = <b>−2</b>. Negative already, so the angle is obtuse and the projection will be negative too.",
            "<b>Magnitudes.</b> |<i>a</i>| = √(4 + 9 + 1) = √14 and |<i>b</i>| = √(1 + 4 + 4) = 3.",
            "<b>(ii) Angle.</b> cos θ = −2/(3√14), so θ = cos<sup>−1</sup>(−2/(3√14)), an obtuse angle.",
            "<b>(iii) Projection of <i>a</i> on <i>b</i>.</b> Divide by |<i>b</i>|, the vector we are landing on: (<i>a</i> · <i>b</i>)/|<i>b</i>| = −2/3."
          ],
          "ans": "<i>a</i> · <i>b</i> = <b>−2</b>, θ = <b>cos<sup>−1</sup>(−2/(3√14))</b>, projection = <b>−2/3</b>. The negative projection and the negative dot product agree, which is the check."
        },
        {
          "t": "ex",
          "tag": "CONCEPTUAL TRAP",
          "q": "For what value of λ are <i>a</i> = λî + 2ĵ − 3k̂ and <i>b</i> = 3î − ĵ + 2k̂ (i) perpendicular, and (ii) parallel?",
          "steps": [
            "<b>The trap.</b> Students reach for one condition for both, or swap them. Perpendicular uses the <b>dot</b> product; parallel needs the components <b>proportional</b>.",
            "<b>(i) Perpendicular ⇒ <i>a</i> · <i>b</i> = 0.</b> 3λ + (2)(−1) + (−3)(2) = 3λ − 2 − 6 = 0, so 3λ = 8 and λ = <b>8/3</b>.",
            "<b>(ii) Parallel ⇒ λ/3 = 2/(−1) = −3/2.</b> Look at the last two ratios alone: 2/(−1) = −2 while −3/2 = −1.5.",
            "<b>They are unequal, and λ does not appear in either.</b> The condition fails for reasons that have nothing to do with λ, so <b>no value of λ</b> makes them parallel."
          ],
          "ans": "Perpendicular at λ = <b>8/3</b>; parallel for <b>no λ</b>. A student who wrongly used the dot product for “parallel” would have produced a spurious answer, which is exactly what the question is testing."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "Resolve <i>r</i> = 2î + 3ĵ + 6k̂ into components parallel and perpendicular to <i>a</i> = î + 2ĵ + 2k̂.",
          "steps": [
            "<b>The two numbers you need.</b> <i>r</i> · <i>a</i> = 2 + 6 + 12 = 20 and |<i>a</i>|<sup>2</sup> = 1 + 4 + 4 = 9, so λ = 20/9.",
            "<b>Parallel part.</b> (20/9)(î + 2ĵ + 2k̂) = (20/9)î + (40/9)ĵ + (40/9)k̂.",
            "<b>Perpendicular part</b> is whatever is left: (2 − 20/9)î + (3 − 40/9)ĵ + (6 − 40/9)k̂ = −(2/9)î − (13/9)ĵ + (14/9)k̂.",
            "<b>Check 1, perpendicularity.</b> Dot the second piece with <i>a</i>: (−2 − 26 + 28)/9 = 0.",
            "<b>Check 2, Pythagoras.</b> |<i>r</i>|<sup>2</sup> = 4 + 9 + 36 = 49. The parallel piece squares to 400/9 and the perpendicular one to (4 + 169 + 196)/81 = 369/81 = 41/9, and 400/9 + 41/9 = 441/9 = 49."
          ],
          "ans": "Parallel: <b>(20/9)(î + 2ĵ + 2k̂)</b>. Perpendicular: <b>−(2/9)î − (13/9)ĵ + (14/9)k̂</b>. The split conserves length, as it must."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "Find unit vectors along the internal and external bisectors of the angle between <i>a</i> = î + 2ĵ + 2k̂ and <i>b</i> = 2î + ĵ − 2k̂.",
          "steps": [
            "<b>Check the magnitudes.</b> |<i>a</i>| = √(1 + 4 + 4) = 3 and |<i>b</i>| = √(4 + 1 + 4) = 3. Equal, so the shortcut applies and the bisector directions are proportional to <i>a</i> ± <i>b</i>.",
            "<b>Internal.</b> <i>a</i> + <i>b</i> = 3î + 3ĵ, of magnitude 3√2, giving the unit vector (1/√2)(î + ĵ).",
            "<b>External.</b> <i>a</i> − <i>b</i> = −î + ĵ + 4k̂, of magnitude √(1 + 1 + 16) = 3√2, giving (1/(3√2))(−î + ĵ + 4k̂).",
            "<b>Check the internal one.</b> With â = (1/3)(1, 2, 2) and b̂ = (1/3)(2, 1, −2): the internal unit vector dotted with â is (1 + 2 + 0)/(3√2) = 1/√2, and with b̂ is (2 + 1 + 0)/(3√2) = 1/√2. Equal, so it really does bisect.",
            "<b>Check the external one, carefully.</b> Dotted with â: (−1 + 2 + 8)/(9√2) = 9/(9√2) = 1/√2. Dotted with b̂: (−2 + 1 − 8)/(9√2) = −9/(9√2) = −1/√2. Equal in size, opposite in sign, which is what bisecting the supplementary angle means."
          ],
          "ans": "Internal <b>(1/√2)(î + ĵ)</b>, external <b>(1/(3√2))(−î + ĵ + 4k̂)</b>. Note â · b̂ = (2 + 2 − 4)/9 = 0 here, so <i>a</i> ⊥ <i>b</i> and both cosines had to come out ±1/√2, the cosine of 45 degrees. The two bisectors are themselves perpendicular: (1, 1, 0) · (−1, 1, 4) = 0."
        },
        {
          "t": "p",
          "html": "That is the geometry. Now the algebra, which is what JEE actually asks. The moment a question hands you a magnitude, <b>square it</b>. Squaring turns |<i>a</i> + <i>b</i>| into <i>a</i> · <i>a</i> + 2<i>a</i> · <i>b</i> + <i>b</i> · <i>b</i>, and suddenly the unknowns of the problem are dot products, which are numbers you can solve for."
        },
        {
          "t": "formula",
          "kicker": "SQUARING A MAGNITUDE",
          "main": "|a ± b|<sup>2</sup> = |a|<sup>2</sup> + |b|<sup>2</sup> ± 2 a · b",
          "legend": [
            "Straight from distributivity and <i>a</i> · <i>a</i> = |<i>a</i>|<sup>2</sup>. Everything below is these two lines added or subtracted.",
            "<b>Parallelogram law:</b> |<i>a</i> + <i>b</i>|<sup>2</sup> + |<i>a</i> − <i>b</i>|<sup>2</sup> = 2(|<i>a</i>|<sup>2</sup> + |<i>b</i>|<sup>2</sup>). The cross terms cancel.",
            "<b>Difference:</b> |<i>a</i> + <i>b</i>|<sup>2</sup> − |<i>a</i> − <i>b</i>|<sup>2</sup> = 4 <i>a</i> · <i>b</i>. This is how you extract a dot product you were never given.",
            "<b>And:</b> (<i>a</i> + <i>b</i>) · (<i>a</i> − <i>b</i>) = |<i>a</i>|<sup>2</sup> − |<i>b</i>|<sup>2</sup>, because the two cross terms cancel each other."
          ],
          "note": "In a parallelogram with adjacent sides <i>a</i> and <i>b</i>, the diagonals are <i>a</i> + <i>b</i> and <i>a</i> − <i>b</i>, so every line above is also a fact about diagonals. Two of them are worth naming: <b>equal diagonals ⟺ <i>a</i> ⊥ <i>b</i> ⟺ rectangle</b>, and <b>perpendicular diagonals ⟺ |<i>a</i>| = |<i>b</i>| ⟺ rhombus</b>. Both at once gives a square. That is what the next figure draws."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "DIAGRAM · THE TWO DIAGONALS, AND WHAT THEY DECIDE",
          "chips": ["Sides", "Diagonals", "Rectangle", "Rhombus"],
          "captions": [
            "A parallelogram with adjacent sides a and b drawn from one corner. Everything the next three panels say is about these two vectors and nothing else.",
            "Its diagonals are a + b, from the shared corner across, and a − b, running between the two heads. Two vectors, two diagonals: the whole dictionary lives in this one picture.",
            "Equal diagonals. |a + b| = |a − b| forces 4 a dot b = 0, so the sides are perpendicular and the shape is a rectangle. Here both diagonals have length 3, and the sides meet at a right angle.",
            "Perpendicular diagonals. (a + b) dot (a − b) = 0 forces |a| = |b|, so the sides are equal and the shape is a rhombus. Here both sides have length the square root of 5.2, and the two diagonals cross at a right angle."
          ],
          "frames": [
            {
              "x": [-0.7, 3.9],
              "y": [-0.6, 3.3],
              "polygons": [{ "points": [[0, 0], [2.6, 0.4], [3.2, 2.2], [0.6, 1.8]], "corners": false, "soft": true }],
              "segments": [
                { "from": [0, 0], "to": [2.6, 0.4], "arrow": true, "label": "a" },
                { "from": [0, 0], "to": [0.6, 1.8], "arrow": true, "label": "b" }
              ]
            },
            {
              "x": [-0.7, 3.9],
              "y": [-0.6, 3.3],
              "polygons": [{ "points": [[0, 0], [2.6, 0.4], [3.2, 2.2], [0.6, 1.8]], "corners": false, "soft": true }],
              "segments": [
                { "from": [0, 0], "to": [3.2, 2.2], "arrow": true, "label": "a + b" },
                { "from": [0.6, 1.8], "to": [2.6, 0.4], "arrow": true, "label": "a − b" }
              ]
            },
            {
              "x": [-0.7, 3.9],
              "y": [-0.6, 3.3],
              "polygons": [{ "points": [[0, 0], [2.4, 0], [2.4, 1.8], [0, 1.8]], "corners": false, "soft": true }],
              "segments": [
                { "from": [0, 0], "to": [2.4, 1.8], "arrow": true, "label": "a + b" },
                { "from": [0, 1.8], "to": [2.4, 0], "arrow": true, "label": "a − b" }
              ]
            },
            {
              "x": [-0.7, 3.9],
              "y": [-0.6, 3.3],
              "polygons": [{ "points": [[0, 0], [2.2, 0.6], [2.8, 2.8], [0.6, 2.2]], "corners": false, "soft": true }],
              "segments": [
                { "from": [0, 0], "to": [2.8, 2.8], "arrow": true, "label": "a + b" },
                { "from": [0.6, 2.2], "to": [2.2, 0.6], "arrow": true, "label": "a − b" }
              ]
            }
          ]
        },
        {
          "t": "proc",
          "title": "Solving a constraint problem in vectors",
          "steps": [
            "<b>Square every magnitude you are given.</b> A magnitude is a square root, and square roots do not add. Squares do, and they turn into dot products.",
            "<b>Expand with |<i>a</i> ± <i>b</i>|<sup>2</sup> = |<i>a</i>|<sup>2</sup> + |<i>b</i>|<sup>2</sup> ± 2<i>a</i> · <i>b</i>.</b> For three vectors, the same expansion produces every pairwise dot product exactly twice.",
            "<b>Count equations against unknown dot products.</b> If the count comes out even, solve. If you are short, the question is asking about an <b>aggregate</b> rather than the individual pieces, and finding which aggregate is determined is the marks-earning move.",
            "<b>Do not go hunting for the individual vectors.</b> They are almost never determined, and they are almost never needed.",
            "<b>Check the sign at the end.</b> A negative dot product means an obtuse angle and a negative projection, and those two must agree with each other."
          ]
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "<i>a</i>, <i>b</i>, <i>c</i> are unit vectors, <i>a</i> ⊥ <i>b</i>, and |<i>a</i> + <i>b</i> + <i>c</i>| = 1. Find the angle between <i>c</i> and <i>a</i> + <i>b</i>.",
          "steps": [
            "<b>Square the given magnitude.</b> |<i>a</i> + <i>b</i> + <i>c</i>|<sup>2</sup> = 3 + 2(<i>a</i> · <i>b</i> + <i>b</i> · <i>c</i> + <i>c</i> · <i>a</i>) = 1, so the three pairwise dot products sum to −1.",
            "<b>Use the perpendicularity.</b> <i>a</i> · <i>b</i> = 0, so <i>b</i> · <i>c</i> + <i>c</i> · <i>a</i> = −1, that is <i>c</i> · (<i>a</i> + <i>b</i>) = −1.",
            "<b>Size the target vector.</b> |<i>a</i> + <i>b</i>|<sup>2</sup> = 1 + 1 + 0 = 2, so |<i>a</i> + <i>b</i>| = √2.",
            "<b>Read the angle.</b> cos φ = −1/(1 · √2) = −1/√2, so φ = 135 degrees."
          ],
          "ans": "<b>135 degrees.</b> Note that the individual angles of <i>c</i> with <i>a</i> and with <i>b</i> are <b>not</b> determined by the data, and do not need to be: the question asks about the combined vector, and step 1 pins the combined dot product exactly."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "Minimise <i>f</i>(<i>x</i>) = |<i>x</i> − <i>a</i>|<sup>2</sup> + |<i>x</i> − <i>b</i>|<sup>2</sup> over all vectors <i>x</i>, where |<i>a</i>| = 2, |<i>b</i>| = 4 and the angle between <i>a</i> and <i>b</i> is 60 degrees. Where is the minimum attained?",
          "steps": [
            "<b>Expand both squares.</b> <i>f</i>(<i>x</i>) = 2|<i>x</i>|<sup>2</sup> − 2<i>x</i> · (<i>a</i> + <i>b</i>) + |<i>a</i>|<sup>2</sup> + |<i>b</i>|<sup>2</sup>. Every <i>x</i> now sits in a square or a dot product.",
            "<b>Complete the square around the midpoint</b> <i>m</i> = (<i>a</i> + <i>b</i>)/2: 2|<i>x</i> − <i>m</i>|<sup>2</sup> = 2|<i>x</i>|<sup>2</sup> − 2<i>x</i> · (<i>a</i> + <i>b</i>) + |<i>a</i> + <i>b</i>|<sup>2</sup>/2, which matches the <i>x</i> terms exactly.",
            "<b>The leftover constant</b> is |<i>a</i>|<sup>2</sup> + |<i>b</i>|<sup>2</sup> − |<i>a</i> + <i>b</i>|<sup>2</sup>/2 = |<i>a</i> − <i>b</i>|<sup>2</sup>/2, by the parallelogram law rearranged.",
            "<b>So <i>f</i>(<i>x</i>) = 2|<i>x</i> − <i>m</i>|<sup>2</sup> + |<i>a</i> − <i>b</i>|<sup>2</sup>/2</b>, a non-negative term plus a constant, minimised exactly when <i>x</i> = <i>m</i>.",
            "<b>Numbers.</b> |<i>a</i> − <i>b</i>|<sup>2</sup> = 4 + 16 − 2(2)(4)cos 60 = 20 − 8 = 12, so the minimum value is 6."
          ],
          "ans": "Minimum <b>6</b>, attained at <b><i>x</i> = (<i>a</i> + <i>b</i>)/2</b>. The sum of squared distances to two fixed points is minimised at their midpoint, proved by completing one square."
        },
        {
          "t": "mcq",
          "q": "The projection of <i>a</i> = 4î − 3ĵ + k̂ on <i>b</i> = 2î + ĵ − 2k̂ is:",
          "opts": [
            { "label": "1" },
            { "label": "3/√26", "nudge": "You divided by |<i>a</i>| = √26 instead of |<i>b</i>| = 3, which projects onto the wrong vector. The denominator is the magnitude of the vector you are landing on." },
            { "label": "3", "nudge": "That is the dot product, stopped one step early. A projection is a length, so it still has to be divided by |<i>b</i>|." },
            { "label": "1/3", "nudge": "You divided |<i>b</i>| by the dot product rather than the other way round. The fraction is upside down." }
          ],
          "correct": 0,
          "solution": "<i>a</i> · <i>b</i> = 8 − 3 − 2 = 3 and |<i>b</i>| = √(4 + 1 + 4) = 3, so the projection is 3/3 = 1. Positive, so the angle is acute."
        },
        {
          "t": "mcq",
          "q": "|<i>a</i>| = 3, |<i>b</i>| = 4 and <i>a</i> · <i>b</i> = 6. Then |<i>a</i> + <i>b</i>| =",
          "opts": [
            { "label": "7", "nudge": "You added the magnitudes. |<i>a</i> + <i>b</i>| = |<i>a</i>| + |<i>b</i>| only when <i>a</i> and <i>b</i> point the same way, and here they do not: 7 is the upper bound, not the value." },
            { "label": "5", "nudge": "That is √(9 + 16), which drops the cross term. Pythagoras applies only when <i>a</i> · <i>b</i> = 0, and here it is 6." },
            { "label": "√37" },
            { "label": "√13", "nudge": "√13 is |<i>a</i> − <i>b</i>|: you subtracted the cross term instead of adding it. Check the sign in front of 2<i>a</i> · <i>b</i>." }
          ],
          "correct": 2,
          "solution": "|<i>a</i> + <i>b</i>|<sup>2</sup> = 9 + 16 + 2(6) = 37, so |<i>a</i> + <i>b</i>| = √37. For contrast, |<i>a</i> − <i>b</i>|<sup>2</sup> = 9 + 16 − 12 = 13."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] If <i>a</i> = î + ĵ + k̂ and <i>b</i> = 2î − ĵ + 3k̂, find <i>a</i> · <i>b</i> and the projection of <i>b</i> on <i>a</i>.",
              "a": "<i>a</i> · <i>b</i> = 2 − 1 + 3 = <b>4</b>. Projecting <b>onto <i>a</i></b> means dividing by |<i>a</i>| = √3, so the projection is <b>4/√3</b>. Note the roles are the other way round from the usual phrasing, which is the point of the question."
            },
            {
              "q": "[JEE MAIN] Find λ so that <i>a</i> = 2î + λĵ + k̂ and <i>b</i> = î − 2ĵ + 3k̂ are perpendicular.",
              "a": "Set <i>a</i> · <i>b</i> = 0: 2 − 2λ + 3 = 0, so 2λ = 5 and <b>λ = 5/2</b>."
            },
            {
              "q": "[JEE ADVANCED] Vectors <i>a</i> and <i>b</i> satisfy |<i>a</i> + <i>b</i>| = |<i>a</i> − <i>b</i>|. Prove that <i>a</i> ⊥ <i>b</i>.",
              "a": "Square both sides: |<i>a</i>|<sup>2</sup> + |<i>b</i>|<sup>2</sup> + 2<i>a</i> · <i>b</i> = |<i>a</i>|<sup>2</sup> + |<i>b</i>|<sup>2</sup> − 2<i>a</i> · <i>b</i>, so 4<i>a</i> · <i>b</i> = 0 and <b><i>a</i> · <i>b</i> = 0</b>. Geometrically: a parallelogram with equal diagonals is a rectangle."
            },
            {
              "q": "[JEE MAIN] Resolve <i>r</i> = î + 2ĵ + 2k̂ into parts parallel and perpendicular to <i>a</i> = 2î + ĵ + 2k̂.",
              "a": "<i>r</i> · <i>a</i> = 2 + 2 + 4 = 8 and |<i>a</i>|<sup>2</sup> = 9, so λ = 8/9. Parallel part <b>(8/9)(2î + ĵ + 2k̂)</b>; perpendicular part <b>−(7/9)î + (10/9)ĵ + (2/9)k̂</b>. Check: its dot with <i>a</i> is (−14 + 10 + 4)/9 = 0."
            },
            {
              "q": "[JEE MAIN] If |<i>a</i>| = 2 and |<i>a</i> + <i>b</i>|<sup>2</sup> + |<i>a</i> − <i>b</i>|<sup>2</sup> = 20, find |<i>b</i>|.",
              "a": "The parallelogram law gives 20 = 2(|<i>a</i>|<sup>2</sup> + |<i>b</i>|<sup>2</sup>) = 2(4 + |<i>b</i>|<sup>2</sup>), so |<i>b</i>|<sup>2</sup> = 6 and <b>|<i>b</i>| = √6</b>. The angle never entered, because the law has no cross term."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Forgetting to divide for a projection.</b> The projection of <i>a</i> on <i>b</i> is (<i>a</i> · <i>b</i>)/|<i>b</i>|, not just <i>a</i> · <i>b</i>. Stopping at the dot product is the commonest single error in this topic.",
            "<b>Dividing by the wrong magnitude.</b> Divide by the magnitude of the vector you are landing <b>on</b>. Dividing by |<i>a</i>| projects onto the wrong thing entirely.",
            "<b>Treating a zero dot product as “parallel”.</b> Zero dot product means <b>perpendicular</b>. That is the swap the source records as the most planted distractor in the whole chapter.",
            "<b>Adding magnitudes.</b> |<i>a</i> + <i>b</i>| is not |<i>a</i>| + |<i>b</i>| unless the two point the same way. Square first, then expand; never add square roots.",
            "<b>Skipping the normalisation in a bisector.</b> The rhombus argument needs two <b>unit</b> vectors. Using <i>a</i> + <i>b</i> when |<i>a</i>| ≠ |<i>b</i>| gives a direction that bisects nothing."
          ]
        },
        {
          "t": "protip",
          "html": "let the sign of the dot product read the angle for you before you compute anything. positive means acute, zero means a right angle, negative means obtuse. it instantly sanity-checks a projection, because a negative projection must pair with a negative dot product, and in an mcq it usually kills two options on inspection."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "a · b = |a| |b| cos θ = a₁b₁ + a₂b₂ + a₃b₃", "note": "a scalar; sign reads the angle" },
            { "f": "cos θ = (a · b)/(|a| |b|)", "note": "one formula, half a dozen disguises" },
            { "f": "projection of a on b = (a · b)/|b|", "note": "divide by the one you land on" },
            { "f": "projection vector = ((a · b)/|b|²) b", "note": "same number, put back on the line of b" },
            { "f": "r = ((r·a)/|a|²)a + the rest", "note": "the unique parallel plus perpendicular split" },
            { "f": "bisectors run along â + b̂ and â − b̂", "note": "normalise first; the two are perpendicular" },
            { "f": "|a ± b|² = |a|² + |b|² ± 2 a · b", "note": "square every magnitude you are given" },
            { "f": "|a+b|² + |a−b|² = 2(|a|² + |b|²)", "note": "parallelogram law; no angle in it" },
            { "f": "a ⊥ b ⟺ a · b = 0", "note": "for non-zero vectors only" }
          ],
          "aids": [
            "“project? divide by the one you land on”",
            "“dot zero means perpendicular, never parallel”",
            "“see a magnitude, square it”"
          ]
        }
      ]
    },
    {
      "n": "04",
      "title": "The Cross Product: Area and the Perpendicular Direction",
      "chip": "04 CROSS",
      "kalam": "push the door far from the hinge and it swings",
      "blocks": [
        {
          "t": "p",
          "html": "Now the other multiplication. Think of opening a heavy almirah door. Push near the hinge and almost nothing happens; push at the far edge, square to the door, and it swings easily. The turning effect depends on how <b>perpendicular</b> your push is, and the axis of the resulting rotation sticks straight out along the hinge. The <b>cross</b>, or <b>vector</b>, product captures exactly that."
        },
        {
          "t": "p",
          "html": "So the cross product is <b>largest when the two vectors are perpendicular</b>, <b>zero when they are parallel</b>, and it produces a <b>new vector perpendicular to both</b>, along the axis of their spread. Its magnitude is the <b>area of the parallelogram</b> the two vectors frame. Every one of those four clauses gets used in an exam."
        },
        {
          "t": "think",
          "html": "the two products are mirror-image questions. the dot product is the shadow, biggest when the vectors line up and vanishing at a right angle. the cross product is the area they sweep, vanishing when they line up and biggest at a right angle. wherever one is large the other is small, and together they say everything there is to say about how two vectors sit relative to each other."
        },
        {
          "t": "def",
          "term": "Cross (vector) product",
          "html": "With n̂ the unit vector perpendicular to both <i>a</i> and <i>b</i>, chosen by the right-hand rule, <i>a</i> × <i>b</i> = |<i>a</i>| |<i>b</i>| sin θ n̂. The result is a <b>vector</b>, and its magnitude is |<i>a</i>| |<i>b</i>| sin θ. There is no such thing as vector division: from <i>a</i> × <i>b</i> alone you cannot recover <i>b</i>."
        },
        {
          "t": "p",
          "html": "The direction is fixed by the <b>right-hand rule</b>: curl the fingers of your right hand from the <b>first</b> vector towards the <b>second</b>, and your thumb points along <i>a</i> × <i>b</i>. Reverse the order and your thumb flips, which is precisely why <i>a</i> × <i>b</i> = −(<i>b</i> × <i>a</i>). Say the rule aloud in the right order or you will get the perpendicular direction backwards, and an area question will not catch the mistake but a direction question will."
        },
        {
          "t": "formula",
          "kicker": "THE CROSS PRODUCT IN COMPONENTS",
          "main": "a × b = (a<sub>2</sub>b<sub>3</sub> − a<sub>3</sub>b<sub>2</sub>)î − (a<sub>1</sub>b<sub>3</sub> − a<sub>3</sub>b<sub>1</sub>)ĵ + (a<sub>1</sub>b<sub>2</sub> − a<sub>2</sub>b<sub>1</sub>)k̂",
          "legend": [
            "This is the cofactor expansion, along the top row, of the 3 by 3 determinant whose rows are î ĵ k̂, then the components of <i>a</i>, then the components of <i>b</i>.",
            "<b>The middle term carries a minus sign.</b> The determinant expansion alternates plus, minus, plus, and that middle minus is the most common cross-product slip in the whole paper.",
            "Swapping the last two rows of a determinant flips its sign, which reproduces <i>a</i> × <i>b</i> = −(<i>b</i> × <i>a</i>) automatically."
          ],
          "note": "The identity follows from distributivity over the nine basis products. Three of them, î × î, ĵ × ĵ and k̂ × k̂, are the zero vector; the other six come in signed pairs governed by the cyclic rule."
        },
        {
          "t": "defgrid",
          "title": "PROPERTIES OF THE CROSS PRODUCT",
          "rows": [
            { "k": "Anti-commutative", "v": "<i>a</i> × <i>b</i> = −(<i>b</i> × <i>a</i>). Order matters." },
            { "k": "Distributive", "v": "<i>a</i> × (<i>b</i> + <i>c</i>) = <i>a</i> × <i>b</i> + <i>a</i> × <i>c</i>" },
            { "k": "Self", "v": "<i>a</i> × <i>a</i> = 0, the zero vector" },
            { "k": "Scalars pull out", "v": "(λ<i>a</i>) × <i>b</i> = λ(<i>a</i> × <i>b</i>)" },
            { "k": "Parallelism", "v": "for non-zero <i>a</i>, <i>b</i>: <i>a</i> × <i>b</i> = 0 ⟺ <i>a</i> ∥ <i>b</i>" },
            { "k": "Basis, cyclic", "v": "î × ĵ = k̂, ĵ × k̂ = î, k̂ × î = ĵ" },
            { "k": "Basis, reversed", "v": "ĵ × î = −k̂, k̂ × ĵ = −î, î × k̂ = −ĵ" }
          ]
        },
        {
          "t": "diagram",
          "kind": "axes3d",
          "kicker": "DIAGRAM · WHERE THE CROSS PRODUCT POINTS",
          "chips": ["a and b", "a × b", "b × a", "The area"],
          "mathChips": true,
          "captions": [
            "Two vectors a and b, drawn so that both lie flat in the plane x = 0, the back wall of the picture. They span that plane and nothing more; a and b alone can never leave it.",
            "a × b leaves the plane completely and runs along the x-axis, straight out of the wall towards you. That is what perpendicular to both means, and it is the one fact no flat drawing can show. Curl your right hand from a towards b and your thumb points this way.",
            "Reverse the order and the arrow flips to the other side of the wall. Same length, opposite direction: b × a = −(a × b). Area questions do not notice the difference, but any question that asks for a direction does.",
            "Complete the parallelogram on a and b. Its area, the flat region inside the wall, is exactly the length of the arrow that left the wall. Half of it is the area of the triangle on a and b, which is where the factor of one half comes from."
          ],
          "frames": [
            {
              "axes3d": {
                "vectors": [
                  { "to": [0, 1.6, 0], "label": "a" },
                  { "to": [0, 0.6, 1.4], "label": "b" }
                ]
              }
            },
            {
              "axes3d": {
                "vectors": [
                  { "to": [0, 1.6, 0], "label": "a", "soft": true },
                  { "to": [0, 0.6, 1.4], "label": "b", "soft": true },
                  { "to": [2.24, 0, 0], "label": "a × b" }
                ]
              }
            },
            {
              "axes3d": {
                "vectors": [
                  { "to": [0, 1.6, 0], "label": "a", "soft": true },
                  { "to": [0, 0.6, 1.4], "label": "b", "soft": true },
                  { "to": [-2.24, 0, 0], "label": "b × a" }
                ]
              }
            },
            {
              "axes3d": {
                "vectors": [
                  { "to": [0, 1.6, 0], "label": "a" },
                  { "to": [0, 0.6, 1.4], "label": "b" },
                  { "from": [0, 1.6, 0], "to": [0, 2.2, 1.4], "soft": true },
                  { "from": [0, 0.6, 1.4], "to": [0, 2.2, 1.4], "soft": true, "label": "area" }
                ]
              }
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "AREAS, AND THE PERPENDICULAR DIRECTION",
          "main": "parallelogram = |a × b|,   triangle = ½|a × b|,   n̂ = ±(a × b)/|a × b|",
          "legend": [
            "For a <b>parallelogram</b> with <i>a</i> and <i>b</i> as adjacent sides, the area is |<i>a</i> × <i>b</i>|.",
            "For a <b>triangle</b> with <i>a</i> and <i>b</i> as two sides from one vertex, halve it. For a triangle given by three points, take two edge vectors from the same vertex first.",
            "The <b>unit vector perpendicular to both</b> is the cross product normalised. The ± is genuine: there are two such unit vectors, one on each side."
          ],
          "note": "For a parallelogram given by its <b>diagonals</b> <i>d</i><sub>1</sub> and <i>d</i><sub>2</sub> instead, the area is ½|<i>d</i><sub>1</sub> × <i>d</i><sub>2</sub>|. Read the question for which pair of vectors it has handed you."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · LAGRANGE'S IDENTITY, THE BRIDGE BETWEEN THE PRODUCTS",
          "steps": [
            {
              "eq": "a · b = |a||b| cos θ and |a × b| = |a||b| sin θ",
              "why": "The two definitions side by side. This is the only input the identity needs; nothing about components is used anywhere below, so the result holds in any dimension where both products make sense."
            },
            {
              "eq": "(a · b)² = |a|²|b|² cos²θ,  |a × b|² = |a|²|b|² sin²θ",
              "why": "Square each. Both are now the same product of squared magnitudes multiplied by a squared trigonometric ratio, which is what makes the next step possible."
            },
            {
              "eq": "(a · b)² + |a × b|² = |a|²|b|²(cos²θ + sin²θ)",
              "why": "Add, and factor out the common product of squared magnitudes. This is the step where the two products, which have looked like strangers up to now, turn out to be two components of one thing."
            },
            {
              "eq": "(a · b)² + |a × b|² = |a|²|b|²",
              "why": "The Pythagorean identity closes it. The payoff is that you can get one product from the other without ever finding the angle, which is a standing exam shortcut: given three of the four quantities, the fourth is a subtraction and a square root."
            }
          ]
        },
        {
          "t": "p",
          "html": "Lagrange's identity has one more consequence, and it is the bound every constraint problem is measured against. The second term is a squared magnitude, so it cannot be negative. Drop it and the equality becomes an inequality."
        },
        {
          "t": "formula",
          "kicker": "CAUCHY-SCHWARZ AND THE TRIANGLE INEQUALITY",
          "main": "|a · b| ≤ |a| |b|,   | |a| − |b| | ≤ |a + b| ≤ |a| + |b|",
          "legend": [
            "<b>Cauchy-Schwarz</b> is Lagrange with the cross-product term dropped. Equality holds exactly when <i>a</i> × <i>b</i> = 0, that is when the two are parallel.",
            "<b>Triangle inequality:</b> feed 2<i>a</i> · <i>b</i> ≤ 2|<i>a</i>||<i>b</i>| into |<i>a</i> + <i>b</i>|<sup>2</sup> = |<i>a</i>|<sup>2</sup> + |<i>b</i>|<sup>2</sup> + 2<i>a</i> · <i>b</i> and the right-hand side becomes (|<i>a</i>| + |<i>b</i>|)<sup>2</sup>.",
            "Equality on the right needs <i>a</i> and <i>b</i> pointing the <b>same</b> way; the lower bound comes from running the same argument with the inequality reversed."
          ],
          "note": "The two-sided version is what answers “find the largest and smallest possible value of |<i>a</i> + <i>b</i> + <i>c</i>|” questions in one line, with both ends actually attained."
        },
        {
          "t": "proc",
          "title": "A vector of given magnitude perpendicular to two others",
          "steps": [
            "<b>Cross the two given vectors.</b> Write the determinant with î ĵ k̂ on top, and say the alternating signs out loud: plus, <b>minus</b>, plus.",
            "<b>Take the magnitude of the result.</b> If it is zero, the two given vectors were parallel and no unique perpendicular direction exists; say so rather than dividing by zero.",
            "<b>Normalise.</b> Divide the cross product by that magnitude. You now have n̂, a unit vector perpendicular to both.",
            "<b>Scale to the required magnitude <i>k</i>.</b> The answer is ±<i>k</i>n̂, and the plus-or-minus is part of the answer, not a hedge: both directions are perpendicular to both vectors.",
            "<b>Check.</b> Dot your answer with each of the two given vectors; both must come out zero. That catches a sign slip in the middle cofactor immediately."
          ]
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "Find the area of the triangle whose two sides from vertex <i>A</i> are <i>a</i> = 3î + ĵ − 2k̂ and <i>b</i> = î − 3ĵ + 4k̂, and find a unit vector perpendicular to both.",
          "steps": [
            "<b>Cross product, cofactor by cofactor.</b> î: (1)(4) − (−2)(−3) = 4 − 6 = −2. ĵ: −[(3)(4) − (−2)(1)] = −(12 + 2) = −14. k̂: (3)(−3) − (1)(1) = −9 − 1 = −10.",
            "<b>So <i>a</i> × <i>b</i> = −2î − 14ĵ − 10k̂.</b> Check the middle sign: the ĵ term is the negative of its 2 by 2 minor, and here that flips 14 to −14.",
            "<b>Magnitude.</b> √(4 + 196 + 100) = √300 = 10√3.",
            "<b>Area of the triangle.</b> Half of that: 5√3 square units.",
            "<b>Unit normal.</b> ±(1/(10√3))(−2î − 14ĵ − 10k̂) = ±(1/(5√3))(−î − 7ĵ − 5k̂)."
          ],
          "ans": "Area <b>5√3</b> square units; n̂ = <b>±(1/(5√3))(−î − 7ĵ − 5k̂)</b>. Check: (−1, −7, −5) · (3, 1, −2) = −3 − 7 + 10 = 0 and (−1, −7, −5) · (1, −3, 4) = −1 + 21 − 20 = 0."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "Two vectors satisfy |<i>a</i>| = 5, |<i>b</i>| = 4 and <i>a</i> · <i>b</i> = 10. Without finding the angle, evaluate |<i>a</i> × <i>b</i>| and then the area of the parallelogram whose diagonals are <i>a</i> + <i>b</i> and <i>a</i> − <i>b</i>.",
          "steps": [
            "<b>Lagrange.</b> (<i>a</i> · <i>b</i>)<sup>2</sup> + |<i>a</i> × <i>b</i>|<sup>2</sup> = |<i>a</i>|<sup>2</sup>|<i>b</i>|<sup>2</sup>, so 100 + |<i>a</i> × <i>b</i>|<sup>2</sup> = 25 × 16 = 400.",
            "<b>Solve.</b> |<i>a</i> × <i>b</i>|<sup>2</sup> = 300, so |<i>a</i> × <i>b</i>| = 10√3. No angle was ever computed.",
            "<b>Cross the diagonals.</b> (<i>a</i> + <i>b</i>) × (<i>a</i> − <i>b</i>) = <i>a</i> × <i>a</i> − <i>a</i> × <i>b</i> + <i>b</i> × <i>a</i> − <i>b</i> × <i>b</i>. The first and last are zero, and <i>b</i> × <i>a</i> = −(<i>a</i> × <i>b</i>), so this is −2(<i>a</i> × <i>b</i>).",
            "<b>Area from diagonals.</b> ½|−2(<i>a</i> × <i>b</i>)| = |<i>a</i> × <i>b</i>| = 10√3."
          ],
          "ans": "|<i>a</i> × <i>b</i>| = <b>10√3</b> and the area is <b>10√3</b> square units. The two agree because the factor 2 picked up by crossing the diagonals exactly cancels the ½ in the diagonal area formula."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Find a vector of magnitude 12 perpendicular to both <i>a</i> = 2î + ĵ − 2k̂ and <i>b</i> = î + 2ĵ + 2k̂.",
          "steps": [
            "<b>Cross product.</b> î: (1)(2) − (−2)(2) = 2 + 4 = 6. ĵ: −[(2)(2) − (−2)(1)] = −(4 + 2) = −6. k̂: (2)(2) − (1)(1) = 3.",
            "<b>So <i>a</i> × <i>b</i> = 6î − 6ĵ + 3k̂</b>, with magnitude √(36 + 36 + 9) = √81 = 9.",
            "<b>Normalise.</b> n̂ = (1/9)(6î − 6ĵ + 3k̂) = (1/3)(2î − 2ĵ + k̂).",
            "<b>Scale to 12.</b> ±12n̂ = ±4(2î − 2ĵ + k̂) = ±(8î − 8ĵ + 4k̂)."
          ],
          "ans": "<b>±(8î − 8ĵ + 4k̂).</b> Both signs are correct answers, and dropping one loses a mark. Check: (8, −8, 4) · (2, 1, −2) = 16 − 8 − 8 = 0."
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Find the area of the triangle with vertices <i>O</i>(0, 0, 0), <i>A</i>(1, 2, 2) and <i>B</i>(2, 1, −2).",
          "steps": [
            "<b>Two edges from one vertex.</b> Take <i>O</i>: <i>OA</i> = (1, 2, 2) and <i>OB</i> = (2, 1, −2). Three points always give three edges; pick two that share a vertex.",
            "<b>Cross.</b> î: (2)(−2) − (2)(1) = −4 − 2 = −6. ĵ: −[(1)(−2) − (2)(2)] = −(−2 − 4) = 6. k̂: (1)(1) − (2)(2) = 1 − 4 = −3.",
            "<b>Magnitude.</b> |−6î + 6ĵ − 3k̂| = √(36 + 36 + 9) = √81 = 9.",
            "<b>Halve it.</b> Area = 9/2."
          ],
          "ans": "<b>9/2</b> square units. If you got 9, you found the parallelogram and forgot the half; that decoy is offered in every area MCQ the source records."
        },
        {
          "t": "mcq",
          "q": "If <i>a</i> · <i>b</i> = |<i>a</i> × <i>b</i>| for two non-zero vectors, the angle between them is:",
          "opts": [
            { "label": "30 degrees", "nudge": "tan 30 = 1/√3, not 1. The condition forces the sine and the cosine to be <b>equal</b>, and 30 degrees is where the tangent is smallest of the four." },
            { "label": "45 degrees" },
            { "label": "60 degrees", "nudge": "tan 60 = √3. You get 60 degrees by misreading the condition as sin θ = √3 cos θ, which is a different equation." },
            { "label": "90 degrees", "nudge": "At 90 degrees the dot product is 0 while the cross product is at its largest. They cannot be equal unless both are zero, which non-zero vectors rule out." }
          ],
          "correct": 1,
          "solution": "|<i>a</i>||<i>b</i>| cos θ = |<i>a</i>||<i>b</i>| sin θ, and the magnitudes are non-zero, so tan θ = 1 and θ = 45 degrees."
        },
        {
          "t": "mcq",
          "q": "For non-zero vectors, <i>a</i> × <i>b</i> = 0 implies:",
          "opts": [
            { "label": "<i>a</i> ⊥ <i>b</i>", "nudge": "That is the <b>dot</b> product condition. A vanishing cross product means sin θ = 0, and sin θ = 0 at 0 and 180 degrees, not at 90." },
            { "label": "<i>a</i> ∥ <i>b</i>" },
            { "label": "|<i>a</i>| = |<i>b</i>|", "nudge": "Magnitudes have nothing to do with it. Two parallel vectors of wildly different lengths still have a zero cross product." },
            { "label": "<i>a</i> · <i>b</i> = 0", "nudge": "Same swap as option A, written in symbols. If <i>a</i> × <i>b</i> = 0 then the vectors are parallel, so <i>a</i> · <i>b</i> = ±|<i>a</i>||<i>b</i>|, which is as far from zero as it can get." }
          ],
          "correct": 1,
          "solution": "|<i>a</i> × <i>b</i>| = |<i>a</i>||<i>b</i>| sin θ = 0 with both magnitudes non-zero forces sin θ = 0, so θ = 0 or 180 degrees: the vectors are parallel, that is collinear."
        },
        {
          "t": "mcq",
          "q": "A unit vector perpendicular to both î + ĵ + k̂ and î − ĵ + k̂ is:",
          "opts": [
            { "label": "±(î − k̂)/√2" },
            { "label": "±(î + k̂)/√2", "nudge": "A sign slip in the k̂ cofactor. That cofactor is (1)(−1) − (1)(1) = −2, so the k̂ component is negative and the two components must have opposite signs." },
            { "label": "±(î − k̂)/2", "nudge": "You divided the cross product (2, 0, −2) by 2 instead of by its magnitude 2√2. The result has length √2, not 1." },
            { "label": "±(2î − 2k̂)", "nudge": "That is the cross product itself, never normalised. Its magnitude is 2√2." }
          ],
          "correct": 0,
          "solution": "The cross product is î[(1)(1) − (1)(−1)] − ĵ[(1)(1) − (1)(1)] + k̂[(1)(−1) − (1)(1)] = 2î + 0ĵ − 2k̂, of magnitude 2√2. Dividing gives ±(î − k̂)/√2."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Find the area of the parallelogram whose adjacent sides are <i>a</i> = 2î + ĵ and <i>b</i> = î + 3ĵ.",
              "a": "Both lie in the <i>xy</i>-plane, so only the k̂ component survives: <i>a</i> × <i>b</i> = [(2)(3) − (1)(1)]k̂ = 5k̂. Area = <b>5</b> square units."
            },
            {
              "q": "[JEE MAIN] If |<i>a</i>| = 3, |<i>b</i>| = 5 and the angle between them is 60 degrees, find |<i>a</i> × <i>b</i>| and <i>a</i> · <i>b</i>.",
              "a": "|<i>a</i> × <i>b</i>| = 15 sin 60 = <b>15√3/2</b> and <i>a</i> · <i>b</i> = 15 cos 60 = <b>15/2</b>. Check with Lagrange: (15/2)<sup>2</sup> + (15√3/2)<sup>2</sup> = 225/4 + 675/4 = 225 = 3<sup>2</sup> × 5<sup>2</sup>."
            },
            {
              "q": "[CBSE] Find the area of the triangle with vertices <i>A</i>(1, 1, 1), <i>B</i>(1, 2, 3) and <i>C</i>(2, 3, 1).",
              "a": "<i>AB</i> = (0, 1, 2) and <i>AC</i> = (1, 2, 0). Cross: î(0 − 4) − ĵ(0 − 2) + k̂(0 − 1) = −4î + 2ĵ − k̂, magnitude √(16 + 4 + 1) = √21. Area = <b>√21/2</b> square units."
            },
            {
              "q": "[JEE MAIN] If |<i>a</i>| = 2, |<i>b</i>| = 3 and <i>a</i> · <i>b</i> = 4, find |<i>a</i> × <i>b</i>| without finding the angle.",
              "a": "Lagrange: |<i>a</i> × <i>b</i>|<sup>2</sup> = |<i>a</i>|<sup>2</sup>|<i>b</i>|<sup>2</sup> − (<i>a</i> · <i>b</i>)<sup>2</sup> = 36 − 16 = 20, so |<i>a</i> × <i>b</i>| = <b>2√5</b>."
            },
            {
              "q": "[JEE ADVANCED] <i>a</i> and <i>b</i> are perpendicular unit vectors and <i>c</i> ranges over all unit vectors. Find the smallest and largest possible values of |<i>a</i> + <i>b</i> + <i>c</i>|.",
              "a": "|<i>a</i> + <i>b</i>| = √2 is fixed. Applying the two-sided triangle inequality to (<i>a</i> + <i>b</i>) + <i>c</i>, the magnitude ranges over <b>[√2 − 1, √2 + 1]</b>, and both ends are reached, for <i>c</i> anti-parallel and parallel to <i>a</i> + <i>b</i> respectively."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>The dot and cross zero-condition swap.</b> <i>a</i> · <i>b</i> = 0 means perpendicular; <i>a</i> × <i>b</i> = 0 means parallel. Memorise them as opposites and the confusion cannot survive.",
            "<b>Losing the minus on the middle cofactor.</b> The determinant expansion alternates plus, minus, plus. The ĵ term carries the minus, and it is the most common cross-product slip in the exam.",
            "<b>Treating the cross product as commutative.</b> <i>a</i> × <i>b</i> = −(<i>b</i> × <i>a</i>). An area survives the swap; a direction does not, so read whether the question wants a number or an arrow.",
            "<b>Forgetting the half for a triangle.</b> |<i>a</i> × <i>b</i>| is the <b>parallelogram</b>. Every area MCQ in the source offers the un-halved value as a decoy.",
            "<b>Handing in a perpendicular vector that was never normalised, or scaled.</b> A unit normal must have magnitude 1, and a vector of magnitude <i>k</i> must be <i>k</i> times it, with the ± kept."
          ]
        },
        {
          "t": "protip",
          "html": "dot means aligned, cross means crossed. the dot product peaks when the vectors are parallel and dies at a right angle; the cross product does exactly the reverse. and whatever else you forget, remember that the middle sign of the determinant is minus."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "a × b = |a| |b| sin θ n̂", "note": "a vector, perpendicular to both, right-hand rule" },
            { "f": "î × ĵ = k̂, ĵ × k̂ = î, k̂ × î = ĵ", "note": "cyclic; reverse the order and the sign flips" },
            { "f": "a × b = −(b × a), and a × a = 0", "note": "order matters; a vector cannot spread from itself" },
            { "f": "a ∥ b ⟺ a × b = 0", "note": "the opposite of the dot-product condition" },
            { "f": "parallelogram = |a × b|, triangle = ½|a × b|", "note": "diagonals instead? then ½|d₁ × d₂|" },
            { "f": "n̂ = ±(a × b)/|a × b|", "note": "the ± is part of the answer" },
            { "f": "(a · b)² + |a × b|² = |a|²|b|²", "note": "Lagrange: one product from the other, no angle" },
            { "f": "| |a| − |b| | ≤ |a + b| ≤ |a| + |b|", "note": "both ends attained, parallel and anti-parallel" }
          ],
          "aids": [
            "“dot equals aligned, cross equals crossed”",
            "“middle sign of the determinant is minus”",
            "“triangle takes a half, and the plus-or-minus stays”"
          ]
        }
      ]
    },
    {
      "n": "05",
      "title": "The Scalar Triple Product: Volume and Coplanarity",
      "chip": "05 BOX",
      "kalam": "a stack of books shoved out of square",
      "blocks": [
        {
          "t": "p",
          "html": "You have two ways to multiply two vectors. The natural next question is what happens when <b>three</b> enter the picture, and there are exactly two sensible combinations. This topic is the first: dot one vector with the cross product of the other two. The answer is a number, and that number is a <b>volume</b>.<br><br>Take three vectors sprouting from one corner. They frame a slanted box, a <b>parallelepiped</b>: think of a stack of books shoved sideways so its faces lean. The recipe is elegant. <i>b</i> × <i>c</i> produces a vector perpendicular to the base whose magnitude is the base's area. Dotting that with <i>a</i> picks out the height. Base area times height is volume, and the answer is a scalar, which is where the name comes from."
        },
        {
          "t": "think",
          "html": "if the three vectors all lie flat in one plane, the box is squashed completely flat. no thickness, no volume. so a zero box product is the exact signal that the three vectors are coplanar: they share a plane, and one of them is a mixture of the other two. that one fact is the most examined idea in the whole chapter, and it is a single determinant away."
        },
        {
          "t": "def",
          "term": "Scalar triple product",
          "html": "For vectors <i>a</i>, <i>b</i>, <i>c</i>, the number [<i>a b c</i>] = <i>a</i> · (<i>b</i> × <i>c</i>). Also called the <b>box product</b>. It is a scalar, and its <b>sign</b> encodes orientation: positive for a right-handed ordering, negative for a left-handed one. Volume is its absolute value, never the signed number itself."
        },
        {
          "t": "formula",
          "kicker": "THE BOX PRODUCT AS A DETERMINANT",
          "main": "[a b c] = the 3 by 3 determinant with rows a, b, c",
          "legend": [
            "Row 1 is <i>a</i><sub>1</sub>, <i>a</i><sub>2</sub>, <i>a</i><sub>3</sub>; row 2 is <i>b</i>'s components; row 3 is <i>c</i>'s. Expand along the first row as usual.",
            "This is the fastest computation in the chapter: three vectors in, one number out, no cross product ever written down separately.",
            "Every property below is a determinant property in disguise, which is why they are worth learning as a family rather than one at a time."
          ],
          "note": "You already know the machinery. This is the Class 12 Determinants chapter's 3 by 3 expansion, with the rows carrying a geometric meaning."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY THE BOX PRODUCT IS THE VOLUME",
          "steps": [
            {
              "eq": "take the face spanned by b and c as the base",
              "why": "A parallelepiped has three pairs of faces and you may take any of them as the base. Choosing the b and c face is what makes the algebra come out as a dot with a cross rather than the other way round; the cyclic property later shows the choice did not matter."
            },
            {
              "eq": "base area = |b × c|, and b × c ⊥ the base",
              "why": "The cross product does two jobs at once here, and that is the whole reason this proof is short. Its magnitude is the area of the base parallelogram, and its direction is the normal to the base. A volume needs exactly those two things."
            },
            {
              "eq": "height = |a| cos φ, with φ the angle between a and b × c",
              "why": "The height of the box is how far the slant edge a rises above the base plane, which is the length of a's projection onto the base normal. That is the projection formula from Topic 03 with the normal as the vector you land on."
            },
            {
              "eq": "V = |b × c| · |a| cos φ = a · (b × c)",
              "why": "Base area times height, and the product of two magnitudes with the cosine of the angle between them is by definition their dot product. The formula assembles itself; nothing was chosen except which face to call the base."
            },
            {
              "eq": "V = |[a b c]|",
              "why": "Cos phi is negative when a lies on the far side of the base plane, so the signed quantity can come out negative. A volume cannot, so take the absolute value. The sign that was thrown away is real information: it records whether the three vectors form a right-handed or a left-handed set."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "axes3d",
          "kicker": "DIAGRAM · THE BOX THREE VECTORS FRAME",
          "chips": ["Three edges", "The base", "The height", "The box"],
          "mathChips": true,
          "captions": [
            "Three vectors a, b and c from one corner. Nothing has been assumed about them except that they do not all lie flat, which is what the next three panels turn into a number.",
            "Take the face on a and b as the base. Its area is the length of a cross b, and c is the slant edge that will be lifted above it. The base is a parallelogram, not a rectangle: the vectors were never assumed perpendicular.",
            "a × b runs straight up, perpendicular to the base, and its length is the base area. The height of the box is how far c rises along that normal, which is c projected onto it. Area times height, and the dot product does the projecting.",
            "All twelve edges. Opposite faces are parallel parallelograms, and the volume is the absolute value of the box product. Flatten the box by pushing c down into the base plane and the volume goes to zero, which is coplanarity."
          ],
          "frames": [
            {
              "axes3d": {
                "vectors": [
                  { "to": [1.5, 0, 0], "label": "a" },
                  { "to": [0, 1.7, 0], "label": "b" },
                  { "to": [0.3, 0.5, 1.6], "label": "c" }
                ]
              }
            },
            {
              "axes3d": {
                "vectors": [
                  { "to": [1.5, 0, 0], "label": "a" },
                  { "to": [0, 1.7, 0], "label": "b" },
                  { "from": [1.5, 0, 0], "to": [1.5, 1.7, 0], "soft": true },
                  { "from": [0, 1.7, 0], "to": [1.5, 1.7, 0], "soft": true, "label": "base" },
                  { "to": [0.3, 0.5, 1.6], "label": "c", "soft": true }
                ]
              }
            },
            {
              "axes3d": {
                "vectors": [
                  { "to": [1.5, 0, 0], "label": "a", "soft": true },
                  { "to": [0, 1.7, 0], "label": "b", "soft": true },
                  { "from": [1.5, 0, 0], "to": [1.5, 1.7, 0], "soft": true },
                  { "from": [0, 1.7, 0], "to": [1.5, 1.7, 0], "soft": true },
                  { "to": [0, 0, 2.55], "label": "a × b" },
                  { "to": [0.3, 0.5, 1.6], "label": "c" }
                ]
              }
            },
            {
              "axes3d": {
                "vectors": [
                  { "to": [1.5, 0, 0], "label": "a" },
                  { "to": [0, 1.7, 0], "label": "b" },
                  { "to": [0.3, 0.5, 1.6], "label": "c" },
                  { "from": [1.5, 0, 0], "to": [1.5, 1.7, 0], "soft": true },
                  { "from": [0, 1.7, 0], "to": [1.5, 1.7, 0], "soft": true },
                  { "from": [1.5, 0, 0], "to": [1.8, 0.5, 1.6], "soft": true },
                  { "from": [0.3, 0.5, 1.6], "to": [1.8, 0.5, 1.6], "soft": true },
                  { "from": [0, 1.7, 0], "to": [0.3, 2.2, 1.6], "soft": true },
                  { "from": [0.3, 0.5, 1.6], "to": [0.3, 2.2, 1.6], "soft": true },
                  { "from": [1.5, 1.7, 0], "to": [1.8, 2.2, 1.6], "soft": true },
                  { "from": [1.8, 0.5, 1.6], "to": [1.8, 2.2, 1.6], "soft": true },
                  { "from": [0.3, 2.2, 1.6], "to": [1.8, 2.2, 1.6], "soft": true }
                ]
              }
            }
          ]
        },
        {
          "t": "defgrid",
          "title": "PROPERTIES OF THE BOX PRODUCT",
          "rows": [
            { "k": "Cyclic invariance", "v": "[<i>a b c</i>] = [<i>b c a</i>] = [<i>c a b</i>]" },
            { "k": "One swap flips the sign", "v": "[<i>a b c</i>] = −[<i>b a c</i>]" },
            { "k": "Dot and cross trade places", "v": "<i>a</i> · (<i>b</i> × <i>c</i>) = (<i>a</i> × <i>b</i>) · <i>c</i>" },
            { "k": "Repeated vector", "v": "if any two are equal or parallel, [<i>a b c</i>] = 0" },
            { "k": "Coplanarity", "v": "[<i>a b c</i>] = 0 ⟺ <i>a</i>, <i>b</i>, <i>c</i> are coplanar" },
            { "k": "Scalars pull out", "v": "[λ<i>a b c</i>] = λ[<i>a b c</i>]" },
            { "k": "Linear dependence", "v": "[<i>a b c</i>] = 0 ⟺ the three are linearly dependent" }
          ]
        },
        {
          "t": "p",
          "html": "Cyclic invariance and the sign flip are one fact. A cyclic shift of three rows is two row swaps, and each swap multiplies a determinant by −1, so a cyclic shift multiplies it by (−1)<sup>2</sup> = 1. A single swap multiplies it by −1. That is the entire explanation, and it is why the dot and the cross can trade places: (<i>a</i> × <i>b</i>) · <i>c</i> is <i>c</i> · (<i>a</i> × <i>b</i>) = [<i>c a b</i>], which is [<i>a b c</i>] by the cyclic rule."
        },
        {
          "t": "formula",
          "kicker": "VOLUMES, AND THE COPLANARITY TESTS",
          "main": "parallelepiped V = |[a b c]|,   tetrahedron V = (1/6)|[a b c]|",
          "legend": [
            "The three vectors are the <b>coterminous edges</b>, meeting at one corner. For a tetrahedron on the same three edges, the volume is one sixth of the box.",
            "<b>Three vectors are coplanar</b> exactly when [<i>a b c</i>] = 0.",
            "<b>Four points <i>A</i>, <i>B</i>, <i>C</i>, <i>D</i> are coplanar</b> exactly when [<i>AB AC AD</i>] = 0. Build the three edge vectors from one common vertex first."
          ],
          "note": "One sixth, not one half. The one half belongs to triangles, and it is offered as a decoy in every volume MCQ. A tetrahedron is one sixth of the box on the same three edges."
        },
        {
          "t": "p",
          "html": "Coplanarity has a second name that says more. Three vectors are <b>linearly dependent</b> when one of them can be written as a combination of the other two, which is exactly when they share a plane. So three <b>non-coplanar</b> vectors are linearly independent, and they form a <b>basis</b>: every vector <i>r</i> in space can be written as <i>x a</i> + <i>y b</i> + <i>z c</i> in exactly one way.<br><br>That raises a fair question. If <i>a</i>, <i>b</i>, <i>c</i> are not perpendicular and not unit vectors, how do you find <i>x</i>, <i>y</i>, <i>z</i>? You cannot dot with <i>a</i> and hope the other terms vanish, because they will not. The box product does the job instead."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · COORDINATES IN A NON-ORTHOGONAL BASIS",
          "steps": [
            {
              "eq": "assume r = x a + y b + z c, with [a b c] ≠ 0",
              "why": "Non-coplanarity is exactly what makes the three vectors a basis, and it is also what stops the denominator below from being zero. The two facts are the same fact, which is the point of the whole derivation."
            },
            {
              "eq": "[r b c] = x[a b c] + y[b b c] + z[c b c]",
              "why": "Take the box product of both sides with b and c, in that order. The box product is linear in each slot, so it distributes over the sum exactly the way a determinant distributes over a row written as a sum."
            },
            {
              "eq": "[b b c] = 0 and [c b c] = 0, so [r b c] = x[a b c]",
              "why": "Any box product with a repeated vector vanishes, because a determinant with two equal rows is zero. Two of the three terms die and the surviving one carries the coefficient we want."
            },
            {
              "eq": "x = [r b c]/[a b c],  y = [a r c]/[a b c],  z = [a b r]/[a b c]",
              "why": "Divide, then run the identical argument in the other two slots. This is Cramer's rule wearing vector clothing: replace one row by r, divide by the original determinant. It also explains why a coplanar triple cannot be a basis, since the denominator would be zero."
            }
          ]
        },
        {
          "t": "p",
          "html": "One more construction, and it is the JEE Advanced favourite. Given a non-coplanar triple, build a second triple from its cross products, each divided by the box product. The new triple is <b>reciprocal</b> to the old one: each new vector dots to 1 with its own partner and to 0 with the other two."
        },
        {
          "t": "formula",
          "kicker": "THE RECIPROCAL SYSTEM",
          "main": "a′ = (b × c)/[a b c],  b′ = (c × a)/[a b c],  c′ = (a × b)/[a b c]",
          "legend": [
            "Defined only when [<i>a b c</i>] ≠ 0, because that quantity sits in every denominator.",
            "<i>a</i> · <i>a</i>′ = <i>b</i> · <i>b</i>′ = <i>c</i> · <i>c</i>′ = 1, and every mixed dot product, such as <i>a</i> · <i>b</i>′, is 0.",
            "[<i>a b c</i>] [<i>a</i>′ <i>b</i>′ <i>c</i>′] = 1, so the two triples have reciprocal box products, which is where the name comes from."
          ],
          "note": "Note the cyclic pattern in the numerators: <i>a</i>′ uses <i>b</i> × <i>c</i>, <i>b</i>′ uses <i>c</i> × <i>a</i>, <i>c</i>′ uses <i>a</i> × <i>b</i>. Break the cycle and every sign is wrong."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · [a × b, b × c, c × a] = [a b c] SQUARED",
          "steps": [
            {
              "eq": "(b × c) × (c × a) = [b c a]c − [b c c]a",
              "why": "Name the first bracket: write p for b cross c. Then p crossed with (c cross a) expands, by the vector triple product rule of Topic 06, into p dot a times c minus p dot c times a. Each of those dot products is a cross product dotted with a third vector, which is a box product by definition."
            },
            {
              "eq": "= [a b c] c,  since [b c c] = 0",
              "why": "The second term has a repeated vector and vanishes. The first uses cyclic invariance to rewrite the box product in the standard order. So the cross of two of the three new vectors is the third one scaled by the original box product."
            },
            {
              "eq": "[a×b, b×c, c×a] = (a × b) · ([a b c] c)",
              "why": "Write the new box product as a dot with a cross, and substitute what was just found for the inner cross product. The scalar factor comes straight out of the dot product."
            },
            {
              "eq": "= [a b c] ((a × b) · c) = [a b c]²",
              "why": "The bracket is the dot and cross interchange of the original box product, so it is [a b c] again. Two consequences follow at once: the crossed triple is non-coplanar whenever the original is, since a non-zero square is non-zero, and dividing each crossed vector by the box product produces exactly the reciprocal system, which is therefore a genuine basis."
            }
          ]
        },
        {
          "t": "proc",
          "title": "Coplanarity in one line",
          "steps": [
            "<b>Do not hunt for a common plane.</b> Never try to find the plane's equation; the determinant answers the question without ever naming it.",
            "<b>Three vectors?</b> Write them as the three rows of a 3 by 3 determinant and evaluate. Zero means coplanar; non-zero means they span space.",
            "<b>Four points?</b> Pick one as the base vertex and form three edge vectors from it. Then it is the same determinant. Which vertex you pick makes no difference to whether the answer is zero.",
            "<b>A parameter in the mix?</b> Set the determinant to zero and solve. Then <b>count the real roots honestly</b>: the answer may be one value, two values, or none at all.",
            "<b>Read a stubborn contradiction as an answer.</b> If the parameter cancels and you are left with something like 3 = 0, that is not a mistake, it means no value of the parameter works."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Find [<i>a b c</i>] and hence the volume of the parallelepiped with coterminous edges <i>a</i> = 2î + ĵ − k̂, <i>b</i> = î + 2ĵ + 3k̂, <i>c</i> = −î + ĵ + 2k̂.",
          "steps": [
            "<b>Set up the determinant</b> with rows (2, 1, −1), (1, 2, 3), (−1, 1, 2).",
            "<b>Expand along the first row.</b> 2[(2)(2) − (3)(1)] − 1[(1)(2) − (3)(−1)] + (−1)[(1)(1) − (2)(−1)].",
            "<b>Evaluate each bracket.</b> 2(4 − 3) − 1(2 + 3) − 1(1 + 2) = 2(1) − 1(5) − 1(3) = 2 − 5 − 3 = −6.",
            "<b>Volume is the absolute value.</b> <i>V</i> = |−6| = 6 cubic units."
          ],
          "ans": "[<i>a b c</i>] = <b>−6</b>; volume = <b>6</b> cubic units. The minus sign only records that this ordering of the three edges is left-handed; a volume is never negative."
        },
        {
          "t": "ex",
          "tag": "CONCEPTUAL TRAP",
          "q": "Find λ so that <i>a</i> = î − ĵ + k̂, <i>b</i> = 2î + ĵ − k̂ and <i>c</i> = λî − ĵ + 2k̂ are coplanar.",
          "steps": [
            "<b>Set the box product to zero,</b> not to any volume value. Coplanar means the box is flat.",
            "<b>Expand</b> the determinant with rows (1, −1, 1), (2, 1, −1), (λ, −1, 2): 1[(1)(2) − (−1)(−1)] − (−1)[(2)(2) − (−1)λ] + 1[(2)(−1) − (1)λ].",
            "<b>Simplify each bracket.</b> 1(2 − 1) + 1(4 + λ) + 1(−2 − λ) = 1 + 4 + λ − 2 − λ.",
            "<b>The λ terms cancel</b> and what is left is 1 + 4 − 2 = 3, so the equation reads 3 = 0, which is impossible."
          ],
          "ans": "<b>No such λ exists.</b> For every λ these three vectors span a genuine, non-flat box of volume 3. A careless student either “solves” 3 = 0 or drops the middle sign and invents a spurious answer, which is exactly what this question is built to catch."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "Find the volume of the tetrahedron with vertices <i>A</i>(1, 1, 1), <i>B</i>(3, 2, 1), <i>C</i>(2, 4, 3), <i>D</i>(4, 3, 5).",
          "steps": [
            "<b>Three edge vectors from one vertex.</b> Take <i>A</i>: <i>AB</i> = (2, 1, 0), <i>AC</i> = (1, 3, 2), <i>AD</i> = (3, 2, 4).",
            "<b>Box product.</b> 2[(3)(4) − (2)(2)] − 1[(1)(4) − (2)(3)] + 0[(1)(2) − (3)(3)].",
            "<b>Evaluate.</b> 2(12 − 4) − 1(4 − 6) + 0 = 2(8) − 1(−2) = 16 + 2 = 18.",
            "<b>Take one sixth.</b> <i>V</i> = (1/6)(18) = 3 cubic units."
          ],
          "ans": "<b>3</b> cubic units. The box product came out non-zero, which confirms the four points are not coplanar, so a genuine tetrahedron exists in the first place."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "Express <i>r</i> = î + 2ĵ + 3k̂ in terms of <i>a</i> = î + ĵ, <i>b</i> = ĵ + k̂ and <i>c</i> = k̂ + î.",
          "steps": [
            "<b>Method 1, direct comparison.</b> Write <i>r</i> = <i>xa</i> + <i>yb</i> + <i>zc</i> and match components: <i>x</i> + <i>z</i> = 1, <i>x</i> + <i>y</i> = 2, <i>y</i> + <i>z</i> = 3.",
            "<b>Add all three.</b> 2(<i>x</i> + <i>y</i> + <i>z</i>) = 6, so <i>x</i> + <i>y</i> + <i>z</i> = 3. Subtracting each original equation from this gives <i>y</i> = 2, <i>z</i> = 1, <i>x</i> = 0.",
            "<b>Method 2, the box-product formula, as a check.</b> [<i>a b c</i>] = 2 for this triple. Then [<i>r b c</i>] = 1(1 − 0) − 2(0 − 1) + 3(0 − 1) = 1 + 2 − 3 = 0, so <i>x</i> = 0/2 = 0.",
            "<b>The other two.</b> [<i>a r c</i>] = 1(2) − 1(1 − 3) + 0 = 4, so <i>y</i> = 2. [<i>a b r</i>] = 1(3 − 2) − 1(0 − 1) + 0 = 2, so <i>z</i> = 1."
          ],
          "ans": "<i>r</i> = <b>2<i>b</i> + <i>c</i></b>. A zero coefficient is perfectly legal. Method 1 is faster here; Method 2 is the one that survives when the components are ugly enough that direct comparison becomes a mess."
        },
        {
          "t": "mcq",
          "q": "If [<i>a b c</i>] = 0 for three non-zero vectors, then <i>a</i>, <i>b</i>, <i>c</i> are:",
          "opts": [
            { "label": "mutually perpendicular", "nudge": "Mutually perpendicular vectors give the <b>largest</b> possible box for their lengths, not a flat one. For unit vectors that box product is ±1, never 0." },
            { "label": "coplanar" },
            { "label": "collinear", "nudge": "Collinear is stronger than what a zero box product gives you. Collinear implies coplanar, but three vectors can share a plane while pointing in three different directions." },
            { "label": "equal in magnitude", "nudge": "Magnitudes are irrelevant. Scaling any of the three multiplies the box product by that scalar, so it cannot turn a non-zero value into zero." }
          ],
          "correct": 1,
          "solution": "A zero box product means the parallelepiped is flat, so the three vectors share a plane. Equivalently, they are linearly dependent and cannot form a basis for space."
        },
        {
          "t": "mcq",
          "q": "The volume of the tetrahedron with coterminous edges î + ĵ, ĵ + k̂ and k̂ + î is:",
          "opts": [
            { "label": "2", "nudge": "That is the <b>parallelepiped</b> volume, the box product itself. A tetrahedron on the same three edges is one sixth of it." },
            { "label": "1", "nudge": "That is the box halved, as if this were a triangle. The one half belongs to areas; a tetrahedron takes one sixth." },
            { "label": "1/3" },
            { "label": "1/6", "nudge": "You applied the one sixth to a box product of 1 rather than 2. Recompute the determinant: its rows are (1, 1, 0), (0, 1, 1), (1, 0, 1)." }
          ],
          "correct": 2,
          "solution": "The determinant with rows (1, 1, 0), (0, 1, 1), (1, 0, 1) is 1(1 − 0) − 1(0 − 1) + 0 = 2, so the tetrahedron volume is (1/6)(2) = 1/3."
        },
        {
          "t": "mcq",
          "q": "[<i>a b c</i>] is <b>not</b> equal to:",
          "opts": [
            { "label": "[<i>b c a</i>]", "nudge": "That is a cyclic shift, which is two row swaps, so the sign is multiplied by (−1)<sup>2</sup> = 1. It is equal." },
            { "label": "(<i>a</i> × <i>b</i>) · <i>c</i>", "nudge": "That is the dot and cross interchange, which is equal. Read it as [<i>c a b</i>], then cycle back." },
            { "label": "[<i>b a c</i>]" },
            { "label": "<i>a</i> · (<i>b</i> × <i>c</i>)", "nudge": "That is the definition of the box product, so it is equal by construction, not by any property." }
          ],
          "correct": 2,
          "solution": "Swapping the first two entries is a single row swap, so [<i>b a c</i>] = −[<i>a b c</i>]. Unless the value happens to be zero, the two are different. Only a single swap breaks the equality; a cyclic shift does not."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Evaluate [î ĵ k̂] and [î k̂ ĵ].",
              "a": "[î ĵ k̂] = î · (ĵ × k̂) = î · î = <b>1</b>. Swapping the last two entries is one swap, so [î k̂ ĵ] = <b>−1</b>. The first is the unit cube taken right-handed; the second is the same cube taken left-handed."
            },
            {
              "q": "[CBSE] Find the volume of the parallelepiped with coterminous edges <i>a</i> = î + ĵ, <i>b</i> = ĵ + k̂, <i>c</i> = k̂ + î.",
              "a": "The determinant with rows (1, 1, 0), (0, 1, 1), (1, 0, 1) is 1(1) − 1(−1) + 0 = <b>2</b> cubic units."
            },
            {
              "q": "[JEE MAIN] Show that <i>A</i>(1, 2, 3), <i>B</i>(2, 3, 4), <i>C</i>(3, 4, 5) and <i>D</i>(0, 1, 2) are coplanar.",
              "a": "<i>AB</i> = (1, 1, 1), <i>AC</i> = (2, 2, 2), <i>AD</i> = (−1, −1, −1). All three are multiples of (1, 1, 1), so the determinant has three proportional rows and equals <b>0</b>. These four points are in fact <b>collinear</b>, all on the line through (1, 2, 3) with direction (1, 1, 1), and collinear points are certainly coplanar."
            },
            {
              "q": "[JEE MAIN] Find all λ for which (1, 2, 3), (2, λ, 4) and (3, 6, 13) are coplanar.",
              "a": "The determinant is 1(13λ − 24) − 2(26 − 12) + 3(12 − 3λ) = 13λ − 24 − 28 + 36 − 9λ = 4λ − 16. Setting it to zero gives <b>λ = 4</b>, a single value. Count the roots rather than assuming there is one."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Reporting a negative volume.</b> [<i>a b c</i>] may be negative; the volume is its absolute value. A question that says “the volume is” wants a positive number.",
            "<b>Confusing the two volume factors.</b> The parallelepiped uses the full box product, the tetrahedron one sixth of it. The one half belongs to triangles and has no business here.",
            "<b>Treating coplanar as collinear.</b> A zero box product gives linear dependence, which is weaker than collinearity. Three coplanar vectors can point in three different directions.",
            "<b>Forgetting that a repeated vector kills the box product.</b> [<i>a a c</i>] = 0 always, because a determinant with two equal rows is zero. Whole derivations collapse to one term because of this.",
            "<b>Miscounting the roots when a parameter is involved.</b> After reducing the determinant, count the real solutions of the <b>original</b> condition. The answer may be none, one or two, and the paper has set each of the three."
          ]
        },
        {
          "t": "protip",
          "html": "to test whether three vectors are coplanar, or whether four points lie in a plane, do not go hunting for a common plane. compute one determinant. zero means coplanar, non-zero means not. it collapses a geometry problem into a three by three, and the source's own bank leans on this shape more than any other in the chapter."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "[a b c] = a · (b × c) = the determinant of the rows", "note": "a scalar; the sign records handedness" },
            { "f": "[a b c] = [b c a] = [c a b]", "note": "cyclic shift is two swaps, so no sign change" },
            { "f": "[a b c] = −[b a c]", "note": "one swap, one sign flip" },
            { "f": "a · (b × c) = (a × b) · c", "note": "dot and cross trade places freely" },
            { "f": "V(parallelepiped) = |[a b c]|", "note": "coterminous edges from one corner" },
            { "f": "V(tetrahedron) = (1/6)|[a b c]|", "note": "one sixth, never one half" },
            { "f": "[a b c] = 0 ⟺ coplanar ⟺ dependent", "note": "four points: [AB AC AD] = 0" },
            { "f": "x = [r b c]/[a b c], and cycle", "note": "coordinates in a non-orthogonal basis" },
            { "f": "[a×b, b×c, c×a] = [a b c]²", "note": "why the reciprocal system is again a basis" }
          ],
          "aids": [
            "“box product equals volume of the box”",
            "“flat box means zero means coplanar”",
            "“tetra takes a sixth”"
          ]
        }
      ]
    },
    {
      "n": "06",
      "title": "The Vector Triple Product and Vector Equations",
      "chip": "06 BAC-CAB",
      "kalam": "cross it twice and you come back home",
      "blocks": [
        {
          "t": "p",
          "html": "The other way to combine three vectors: cross one with a cross product. Since <i>b</i> × <i>c</i> is perpendicular to the plane of <i>b</i> and <i>c</i>, crossing it again with <i>a</i> gives something perpendicular to <i>that</i>, which swings the answer <b>back into</b> the plane of <i>b</i> and <i>c</i>. So <i>a</i> × (<i>b</i> × <i>c</i>) is always a blend of <i>b</i> and <i>c</i>, and there is a clean formula for the blend."
        },
        {
          "t": "think",
          "html": "the outer vector a never appears in the answer. it only decides how much b and how much c to mix. if you ever write down an expansion with an a term surviving, you have made a mistake you can spot without checking any arithmetic, because the answer has to live in the plane of the two vectors inside the bracket."
        },
        {
          "t": "formula",
          "kicker": "THE BAC MINUS CAB RULE",
          "main": "a × (b × c) = (a · c) b − (a · b) c",
          "legend": [
            "The two surviving vectors are the two <b>inside</b> the bracket. Each is multiplied by the dot product of the <b>other</b> two.",
            "The <b>first term is positive</b>, and it is the one whose vector sits nearest the outer vector across the bracket: in <i>a</i> × (<i>b</i> × <i>c</i>), that is <i>b</i>.",
            "Note the shape of the name: <i>a</i> crosses (<i>b</i> cross <i>c</i>) gives <i>b</i> times (<i>a</i> · <i>c</i>) minus <i>c</i> times (<i>a</i> · <i>b</i>)."
          ],
          "note": "Both terms are scalars times vectors, so the answer is a vector. And it is a combination of <i>b</i> and <i>c</i> only, which is the structural check to run before any arithmetic one."
        },
        {
          "t": "formula",
          "kicker": "THE BRACKET IS NOT FREE TO MOVE",
          "main": "(a × b) × c = (a · c) b − (b · c) a",
          "legend": [
            "Different bracket, different answer. The cross product is <b>not associative</b>: <i>a</i> × (<i>b</i> × <i>c</i>) ≠ (<i>a</i> × <i>b</i>) × <i>c</i> in general.",
            "The rule is the same rule, applied to the pair inside <b>this</b> bracket: the survivors are <i>a</i> and <i>b</i>, each multiplied by the dot product of the other two.",
            "So the position of the bracket decides which two vectors survive. Read it before you expand."
          ],
          "note": "Derive it if you forget it: (<i>a</i> × <i>b</i>) × <i>c</i> = −<i>c</i> × (<i>a</i> × <i>b</i>), then apply the standard rule with <i>c</i> outside and flip the sign."
        },
        {
          "t": "diagram",
          "kind": "axes3d",
          "kicker": "DIAGRAM · OUT OF THE PLANE, AND BACK INTO IT",
          "chips": ["b and c", "b × c", "Cross again", "Back in"],
          "mathChips": true,
          "captions": [
            "b and c, both lying flat in the plane x = 0. Everything they can build by addition and scaling stays in this plane; that is what spanning a plane means.",
            "b × c leaves the plane entirely and runs along the x-axis, perpendicular to both. This is the vector the outer cross product is about to act on, and it is the only step in the whole picture that goes anywhere new.",
            "Now bring in a, which points wherever it likes and is not in the plane. Crossing a with b × c gives a vector perpendicular to b × c, and perpendicular to the x-axis means back in the plane x = 0.",
            "The result lands flat in the plane of b and c, exactly as promised. It is a mixture of b and c and carries no trace of a except in how much of each it took. That is what the BAC minus CAB formula computes."
          ],
          "frames": [
            {
              "axes3d": {
                "vectors": [
                  { "to": [0, 1.3, 0], "label": "b" },
                  { "to": [0, 0.4, 1.1], "label": "c" }
                ]
              }
            },
            {
              "axes3d": {
                "vectors": [
                  { "to": [0, 1.3, 0], "label": "b", "soft": true },
                  { "to": [0, 0.4, 1.1], "label": "c", "soft": true },
                  { "to": [1.43, 0, 0], "label": "b × c" }
                ]
              }
            },
            {
              "axes3d": {
                "vectors": [
                  { "to": [0, 1.3, 0], "label": "b", "soft": true },
                  { "to": [0, 0.4, 1.1], "label": "c", "soft": true },
                  { "to": [1.43, 0, 0], "label": "b × c", "soft": true },
                  { "to": [0.8, 0.9, 0.8], "label": "a" },
                  { "to": [0, 1.144, -1.287], "label": "result" }
                ]
              }
            },
            {
              "axes3d": {
                "vectors": [
                  { "to": [0, 1.3, 0], "label": "b" },
                  { "to": [0, 0.4, 1.1], "label": "c" },
                  { "to": [0, 1.144, -1.287], "label": "result" }
                ]
              }
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY THE ANSWER LIVES IN THE PLANE OF b AND c",
          "steps": [
            {
              "eq": "b × c ⊥ the plane of b and c",
              "why": "By the definition of the cross product. Call that plane the b c plane; the inner product has left it completely, which is the only way the outer product can be forced back into it."
            },
            {
              "eq": "a × (b × c) ⊥ (b × c), so it lies back in that plane",
              "why": "A cross product is perpendicular to both its factors, so the result is perpendicular to b cross c. But the only directions perpendicular to the normal of a plane are the directions inside that plane, so the result has returned."
            },
            {
              "eq": "therefore a × (b × c) = λ b + μ c for some scalars λ, μ",
              "why": "Any vector in the plane spanned by b and c is a linear combination of them. We do not yet know the two coefficients, but we now know the shape of the answer, which is most of the work."
            },
            {
              "eq": "a · [a × (b × c)] = 0",
              "why": "A consistency check that costs nothing: the left side is a cross product with a as a factor, so it is perpendicular to a. Any candidate formula that fails this is wrong, and this alone kills two of the four options in the standard MCQ."
            },
            {
              "eq": "λ = a · c and μ = −(a · b)",
              "why": "Fix the two coefficients by expanding both sides in components, or by checking the standard basis cases where a, b and c are each one of i, j, k, which the identity reproduces exactly. That gives the BAC minus CAB rule as stated."
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "THE JACOBI IDENTITY",
          "main": "a × (b × c) + b × (c × a) + c × (a × b) = 0",
          "legend": [
            "Expand all three by the BAC minus CAB rule and every term cancels against another.",
            "Group the <i>a</i> terms: −(<i>b</i> · <i>c</i>)<i>a</i> from the second and +(<i>c</i> · <i>b</i>)<i>a</i> from the third, and the dot product is commutative, so they cancel.",
            "The <i>b</i> and <i>c</i> terms cancel identically by the same symmetry. Nothing survives."
          ],
          "note": "The right-hand side is the <b>zero vector</b>, not the number zero. Writing “= 0” with a scalar zero is the same category error as calling a dot product a vector."
        },
        {
          "t": "p",
          "html": "JEE Advanced routinely nests one level further and crosses two cross products together. There is no new idea here: name the first bracket as a single vector and apply the same rule."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · CROSSING TWO CROSS PRODUCTS",
          "steps": [
            {
              "eq": "let p = a × b, so the target is p × (c × d)",
              "why": "Naming the first bracket turns an unfamiliar four-vector expression into the familiar three-vector one. This is the whole trick, and it is worth doing on paper rather than in your head."
            },
            {
              "eq": "p × (c × d) = (p · d) c − (p · c) d",
              "why": "BAC minus CAB, applied exactly as stated, with p in the outer slot and c and d inside the bracket. The survivors are therefore c and d."
            },
            {
              "eq": "p · d = [a b d] and p · c = [a b c]",
              "why": "Each of those dot products is a cross product dotted with a third vector, which is the definition of the box product. Two scalars appear where two dot products were, and they are numbers you can compute with one determinant each."
            },
            {
              "eq": "(a × b) × (c × d) = [a b d] c − [a b c] d",
              "why": "Substituting gives the identity. Naming the second bracket instead, and paying the sign for anticommutativity, gives the equally useful second form: [a c d] b minus [b c d] a. So the same vector is a combination of c and d, and also of a and b, which means it points along the intersection of the two planes those pairs span."
            }
          ]
        },
        {
          "t": "p",
          "html": "That last observation earns its own name. The vector (<i>a</i> × <i>b</i>) × (<i>c</i> × <i>d</i>) is perpendicular to <i>a</i> × <i>b</i>, so it lies in the plane of <i>a</i> and <i>b</i>; and it is perpendicular to <i>c</i> × <i>d</i>, so it lies in the plane of <i>c</i> and <i>d</i>. A vector in both planes points along their <b>line of intersection</b>, which is the engine behind the plane-intersection formula you meet in Three Dimensional Geometry."
        },
        {
          "t": "p",
          "html": "Now the other skill this topic owns: solving an equation whose <b>unknown is a vector</b>. Given <i>a</i> and <i>b</i>, find every <i>x</i> with <i>a</i> × <i>x</i> = <i>b</i>. There is a compatibility condition, there is a particular solution, and there is a whole line of them."
        },
        {
          "t": "formula",
          "kicker": "SOLVING a × x = b",
          "main": "x = (b × a)/|a|<sup>2</sup> + λa,  λ any real number",
          "legend": [
            "<b>Compatibility first.</b> Dot both sides with <i>a</i>: the left side is perpendicular to <i>a</i>, so <i>a</i> · <i>b</i> must be 0. If it is not, there is no solution at all.",
            "That condition is also sufficient, provided <i>a</i> ≠ 0. The first term is one particular solution.",
            "<b>The λa is not optional.</b> <i>a</i> × (λ<i>a</i>) = 0, so adding any multiple of <i>a</i> changes nothing. The solution set is a whole line, and an answer that gives only the particular vector is incomplete."
          ],
          "note": "Why the particular solution works: <i>a</i> × (<i>b</i> × <i>a</i>) = (<i>a</i> · <i>a</i>)<i>b</i> − (<i>a</i> · <i>b</i>)<i>a</i> = |<i>a</i>|<sup>2</sup><i>b</i>, using <i>a</i> · <i>b</i> = 0. Divide by |<i>a</i>|<sup>2</sup> and you have <i>b</i> exactly."
        },
        {
          "t": "proc",
          "title": "Solving a vector equation a × x = b",
          "steps": [
            "<b>Test compatibility.</b> Compute <i>a</i> · <i>b</i>. If it is not zero, stop and write “no solution”; a cross product with <i>a</i> can never produce a vector with a component along <i>a</i>.",
            "<b>Compute <i>b</i> × <i>a</i>, in that order.</b> Not <i>a</i> × <i>b</i>. The sign matters and it is the easiest place in the whole procedure to lose a mark.",
            "<b>Divide by |<i>a</i>|<sup>2</sup>.</b> This is the particular solution, the one perpendicular to <i>a</i>.",
            "<b>Add λ<i>a</i>.</b> A cross product cannot see any component along <i>a</i>, so that whole direction is free. State λ ∈ ℝ explicitly.",
            "<b>Check by crossing back.</b> Compute <i>a</i> × (your particular solution) and confirm it equals <i>b</i>. The λ term needs no checking, since it cancels by construction."
          ]
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "If <i>a</i> = 2î − ĵ + k̂, <i>b</i> = î + 2ĵ − 3k̂ and <i>c</i> = 3î + ĵ + k̂, find <i>a</i> × (<i>b</i> × <i>c</i>) using the BAC minus CAB rule.",
          "steps": [
            "<b>Do not compute <i>b</i> × <i>c</i>.</b> The rule replaces one cross product with two dot products, which is much less arithmetic and far fewer sign traps.",
            "<b>The two dot products.</b> <i>a</i> · <i>c</i> = 6 − 1 + 1 = 6, and <i>a</i> · <i>b</i> = 2 − 2 − 3 = −3.",
            "<b>Substitute.</b> <i>a</i> × (<i>b</i> × <i>c</i>) = (<i>a</i> · <i>c</i>)<i>b</i> − (<i>a</i> · <i>b</i>)<i>c</i> = 6<i>b</i> − (−3)<i>c</i> = 6<i>b</i> + 3<i>c</i>.",
            "<b>Expand.</b> 6(î + 2ĵ − 3k̂) + 3(3î + ĵ + k̂) = (6 + 9)î + (12 + 3)ĵ + (−18 + 3)k̂ = 15î + 15ĵ − 15k̂."
          ],
          "ans": "<b>15î + 15ĵ − 15k̂.</b> Structural check: it is a combination of <i>b</i> and <i>c</i> only, with no <i>a</i> in it, and dotting it with <i>a</i> gives 30 − 15 − 15 = 0, as it must."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "Simplify <i>a</i> × (<i>b</i> × <i>c</i>) + <i>b</i> × (<i>c</i> × <i>a</i>) + <i>c</i> × (<i>a</i> × <i>b</i>), and use the result to show that if <i>a</i> + <i>b</i> + <i>c</i> = 0 then <i>a</i> × <i>b</i> = <i>b</i> × <i>c</i> = <i>c</i> × <i>a</i>.",
          "steps": [
            "<b>Expand all three.</b> (<i>a</i>·<i>c</i>)<i>b</i> − (<i>a</i>·<i>b</i>)<i>c</i>, then (<i>b</i>·<i>a</i>)<i>c</i> − (<i>b</i>·<i>c</i>)<i>a</i>, then (<i>c</i>·<i>b</i>)<i>a</i> − (<i>c</i>·<i>a</i>)<i>b</i>.",
            "<b>Group by vector.</b> The <i>a</i> terms are −(<i>b</i>·<i>c</i>)<i>a</i> + (<i>c</i>·<i>b</i>)<i>a</i> = 0, since the dot product is commutative. The <i>b</i> and <i>c</i> terms cancel the same way. The sum is the zero vector: the <b>Jacobi identity</b>.",
            "<b>Now use the hypothesis.</b> Cross <i>a</i> + <i>b</i> + <i>c</i> = 0 with <i>a</i> on the left: <i>a</i> × <i>a</i> + <i>a</i> × <i>b</i> + <i>a</i> × <i>c</i> = 0, so 0 + <i>a</i> × <i>b</i> − <i>c</i> × <i>a</i> = 0 and <i>a</i> × <i>b</i> = <i>c</i> × <i>a</i>.",
            "<b>Cross the same equation with <i>b</i>.</b> <i>b</i> × <i>a</i> + 0 + <i>b</i> × <i>c</i> = 0, so <i>b</i> × <i>c</i> = −(<i>b</i> × <i>a</i>) = <i>a</i> × <i>b</i>."
          ],
          "ans": "The cyclic sum is <b>0</b>, the Jacobi identity, and <i>a</i> + <i>b</i> + <i>c</i> = 0 gives <b><i>a</i> × <i>b</i> = <i>b</i> × <i>c</i> = <i>c</i> × <i>a</i></b>. This is the vector engine behind the sine rule: three closed sides of a triangle, three cross products of equal magnitude."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "Solve <i>a</i> × <i>x</i> = <i>b</i> where <i>a</i> = î + ĵ + k̂ and <i>b</i> = î − ĵ.",
          "steps": [
            "<b>Compatibility.</b> <i>a</i> · <i>b</i> = 1 − 1 + 0 = 0, so solutions exist. If this had been non-zero the answer would be “none”.",
            "<b>Particular piece: <i>b</i> × <i>a</i>,</b> in that order. î[(−1)(1) − (0)(1)] − ĵ[(1)(1) − (0)(1)] + k̂[(1)(1) − (−1)(1)] = −î − ĵ + 2k̂.",
            "<b>Divide by |<i>a</i>|<sup>2</sup> = 3.</b> The particular solution is (1/3)(−î − ĵ + 2k̂).",
            "<b>Add the free direction.</b> <i>x</i> = (1/3)(−î − ĵ + 2k̂) + λ(î + ĵ + k̂), λ ∈ ℝ.",
            "<b>Check at λ = 0.</b> <i>a</i> × (−1, −1, 2)/3 = (1/3)[î(2 + 1) − ĵ(2 + 1) + k̂(−1 + 1)] = î − ĵ = <i>b</i>."
          ],
          "ans": "<b><i>x</i> = (1/3)(−î − ĵ + 2k̂) + λ(î + ĵ + k̂), λ ∈ ℝ.</b> Handing in only the first term loses the mark for the family: a cross product cannot see components along <i>a</i>, so an entire line of vectors solves this."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "Show that (<i>a</i> × <i>b</i>) × (<i>c</i> × <i>a</i>) = −[<i>a b c</i>] <i>a</i>, and verify it for <i>a</i> = î, <i>b</i> = ĵ, <i>c</i> = k̂.",
          "steps": [
            "<b>Use the four-vector identity</b> (<i>a</i> × <i>b</i>) × (<i>c</i> × <i>d</i>) = [<i>a b d</i>]<i>c</i> − [<i>a b c</i>]<i>d</i>, with <i>d</i> = <i>a</i>.",
            "<b>First term dies.</b> [<i>a b a</i>] = 0, a box product with a repeated vector.",
            "<b>Second term survives.</b> −[<i>a b c</i>]<i>a</i>, which is the claim.",
            "<b>Verify.</b> Left side: (î × ĵ) × (k̂ × î) = k̂ × ĵ = −î. Right side: −[î ĵ k̂]î = −(1)î = −î. They agree."
          ],
          "ans": "<b>(<i>a</i> × <i>b</i>) × (<i>c</i> × <i>a</i>) = −[<i>a b c</i>] <i>a</i>.</b> Read it as a fact: the result points along <i>a</i>, which is exactly the line where the plane of <i>a</i>, <i>b</i> meets the plane of <i>c</i>, <i>a</i>."
        },
        {
          "t": "mcq",
          "q": "<i>a</i> × (<i>b</i> × <i>c</i>) equals:",
          "opts": [
            { "label": "(<i>a</i> · <i>b</i>)<i>c</i> − (<i>a</i> · <i>c</i>)<i>b</i>", "nudge": "Both signs are reversed. This is the negative of the correct answer, which is the classic sign reversal in this identity. The <b>first</b> term is the positive one." },
            { "label": "(<i>a</i> · <i>c</i>)<i>b</i> − (<i>a</i> · <i>b</i>)<i>c</i>" },
            { "label": "(<i>a</i> · <i>c</i>)<i>b</i> − (<i>b</i> · <i>c</i>)<i>a</i>", "nudge": "That is the expansion of (<i>a</i> × <i>b</i>) × <i>c</i>, a different bracketing. The cross product is not associative, so the bracket position decides which two vectors survive." },
            { "label": "(<i>b</i> · <i>c</i>)<i>a</i> − (<i>a</i> · <i>c</i>)<i>b</i>", "nudge": "There is an <i>a</i> in it, and there cannot be: the answer must lie in the plane of the two vectors <b>inside</b> the bracket, which are <i>b</i> and <i>c</i>." }
          ],
          "correct": 1,
          "solution": "The BAC minus CAB rule: the survivors are the two inside the bracket, each multiplied by the dot product of the other two, first term positive."
        },
        {
          "t": "mcq",
          "q": "The equation <i>a</i> × <i>x</i> = <i>b</i>, with <i>a</i> ≠ 0, has a solution if and only if:",
          "opts": [
            { "label": "<i>a</i> × <i>b</i> = 0", "nudge": "That would force <i>b</i> parallel to <i>a</i>, which is the opposite of what happens. A cross product with <i>a</i> is always perpendicular to <i>a</i>, so <i>b</i> must be perpendicular to it." },
            { "label": "<i>a</i> · <i>b</i> = 0" },
            { "label": "|<i>a</i>| = |<i>b</i>|", "nudge": "Magnitudes place no restriction here. Scaling <i>x</i> scales <i>b</i>, so any length of <i>b</i> is reachable as long as the direction is admissible." },
            { "label": "<i>b</i> = 0", "nudge": "Too strong. <i>b</i> = 0 is one admissible case, giving <i>x</i> = λ<i>a</i>, but plenty of non-zero <i>b</i> perpendicular to <i>a</i> also work." }
          ],
          "correct": 1,
          "solution": "Dot both sides with <i>a</i>. The left side is <i>a</i> · (<i>a</i> × <i>x</i>) = 0 because a cross product is perpendicular to its own factors, so <i>a</i> · <i>b</i> = 0 is necessary. It is also sufficient: <i>x</i> = (<i>b</i> × <i>a</i>)/|<i>a</i>|<sup>2</sup> + λ<i>a</i> then works."
        },
        {
          "t": "mcq",
          "q": "If <i>a</i>, <i>b</i>, <i>c</i> are mutually perpendicular unit vectors, then [<i>a</i> × <i>b</i>, <i>b</i> × <i>c</i>, <i>c</i> × <i>a</i>] equals:",
          "opts": [
            { "label": "0", "nudge": "Zero would mean the three crossed vectors are coplanar. They cannot be: the identity makes their box product the square of the original one, and a mutually perpendicular unit triple has box product ±1." },
            { "label": "1" },
            { "label": "−1", "nudge": "The answer is a <b>square</b>, so it is never negative, whichever handedness the original triple had. That is the whole point of the identity." },
            { "label": "3", "nudge": "There is no 3 anywhere in this. The identity says the answer is [<i>a b c</i>] squared, and for a mutually perpendicular unit triple that box product is ±1." }
          ],
          "correct": 1,
          "solution": "[<i>a</i> × <i>b</i>, <i>b</i> × <i>c</i>, <i>c</i> × <i>a</i>] = [<i>a b c</i>]<sup>2</sup>. For mutually perpendicular unit vectors the box product is the signed volume of a unit cube, that is ±1, and squaring gives 1 either way."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[JEE MAIN] Evaluate (î × ĵ) × (ĵ × k̂) directly, and again by the four-vector identity.",
              "a": "Directly: î × ĵ = k̂ and ĵ × k̂ = î, so the product is k̂ × î = <b>ĵ</b>. By the identity with <i>a</i> = î, <i>b</i> = ĵ, <i>c</i> = ĵ, <i>d</i> = k̂: [î ĵ k̂]ĵ − [î ĵ ĵ]k̂ = (1)ĵ − (0)k̂ = <b>ĵ</b>. They agree."
            },
            {
              "q": "[JEE MAIN] Solve <i>a</i> × <i>x</i> = <i>b</i> for <i>a</i> = 2î − ĵ + 2k̂ and <i>b</i> = î + 2ĵ.",
              "a": "Compatibility: <i>a</i> · <i>b</i> = 2 − 2 + 0 = 0, so solutions exist. <i>b</i> × <i>a</i> = (1, 2, 0) × (2, −1, 2) = (4, −2, −5) and |<i>a</i>|<sup>2</sup> = 9, so <b><i>x</i> = (1/9)(4î − 2ĵ − 5k̂) + λ(2î − ĵ + 2k̂)</b>. Check: (2, −1, 2) × (4, −2, −5) = (9, 18, 0), and dividing by 9 gives (1, 2, 0) = <i>b</i>."
            },
            {
              "q": "[JEE ADVANCED] Show that (<i>a</i> − <i>b</i>) × (<i>a</i> + <i>b</i>) = 2(<i>a</i> × <i>b</i>), and say what it means for areas.",
              "a": "Expand: <i>a</i> × <i>a</i> + <i>a</i> × <i>b</i> − <i>b</i> × <i>a</i> − <i>b</i> × <i>b</i>. The first and last vanish, and −(<i>b</i> × <i>a</i>) = <i>a</i> × <i>b</i>, so the sum is <b>2(<i>a</i> × <i>b</i>)</b>. So the parallelogram spanned by the two <b>diagonals</b> has twice the area of the one spanned by the sides, which is exactly why the diagonal area formula carries a factor of one half."
            },
            {
              "q": "[JEE ADVANCED] Prove that a vector perpendicular to both <i>a</i> × <i>b</i> and <i>a</i> × <i>c</i> must be parallel to <i>a</i>, given that <i>a</i>, <i>b</i>, <i>c</i> are non-coplanar.",
              "a": "The directions perpendicular to two non-parallel vectors <i>u</i>, <i>v</i> form a single line, along <i>u</i> × <i>v</i>. Here <i>u</i> × <i>v</i> = (<i>a</i> × <i>b</i>) × (<i>a</i> × <i>c</i>), which by the four-vector identity is [<i>a b c</i>]<i>a</i>, a non-zero multiple of <i>a</i> precisely because the three are non-coplanar. Hence the perpendicular direction is <b>along <i>a</i></b>."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Treating the cross product as associative.</b> <i>a</i> × (<i>b</i> × <i>c</i>) ≠ (<i>a</i> × <i>b</i>) × <i>c</i>. The bracket decides which two vectors survive, so read it before you expand.",
            "<b>Reversing the signs in BAC minus CAB.</b> The first term is positive: it is the inner vector nearest the outer one across the bracket, multiplied by the dot product of the other two.",
            "<b>Letting the outer vector survive.</b> The answer lies in the plane of the two vectors <b>inside</b> the bracket. An expression with an <i>a</i> term in it is dead on inspection, no arithmetic needed.",
            "<b>Skipping the compatibility test for <i>a</i> × <i>x</i> = <i>b</i>.</b> If <i>a</i> · <i>b</i> ≠ 0 there is no solution at all, and computing a formula anyway produces a confident wrong answer.",
            "<b>Dropping the λ<i>a</i>.</b> The solution set is a line, not a point. A cross product cannot see any component along <i>a</i>, so that whole direction is free and must be stated."
          ]
        },
        {
          "t": "protip",
          "html": "bac minus cab, middle vector first, first sign plus. and before you check any arithmetic, check the shape: the answer to a cross (b cross c) has to be built from b and c alone. if an a has crept in, the line is wrong and you have not had to compute a single number to know it."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "a × (b × c) = (a · c) b − (a · b) c", "note": "BAC minus CAB; first term positive" },
            { "f": "(a × b) × c = (a · c) b − (b · c) a", "note": "different bracket, different survivors" },
            { "f": "the result lies in the plane of the pair inside", "note": "an a term surviving is an instant error" },
            { "f": "a × (b × c) + b × (c × a) + c × (a × b) = 0", "note": "Jacobi; the zero vector, not the number" },
            { "f": "(a × b) × (c × d) = [a b d] c − [a b c] d", "note": "also equals [a c d] b − [b c d] a" },
            { "f": "that vector points along the two planes' intersection", "note": "the engine behind the 3D geometry formula" },
            { "f": "a × x = b solvable ⟺ a · b = 0", "note": "test compatibility before computing anything" },
            { "f": "x = (b × a)/|a|² + λa", "note": "b cross a, in that order; the line is the answer" }
          ],
          "aids": [
            "“bac minus cab, first sign plus”",
            "“the bracket decides who survives”",
            "“cross equations answer with a line, never a point”"
          ]
        }
      ]
    }
  ]
};

export default ch12VectorAlgebra;
