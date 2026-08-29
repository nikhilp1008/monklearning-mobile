/**
 * Chapter 11 · Three Dimensional Geometry. Mathematics, Class 12.
 *
 * Restructured from pages 648 to 720 of the Drona Class 12 Mathematics Master
 * Reference into the block system in design_handoff_textbooks/CONTENT_SPEC.md,
 * matching the voice and density of math-12-01-relations.ts.
 *
 * HOW 73 PAGES WERE CUT TO 151 BLOCKS
 *
 * The organising idea is that this chapter owns three objects, the point, the
 * line and the plane, and asks a fixed set of questions about every pair of
 * them: what angle do they make, how far apart are they, where do they meet,
 * and what is the special case. Seen that way the source's six subtopics and
 * five addenda are not eleven topics, they are one grid, and the grid is what
 * the six topics here are. Topic 01 builds the line out of a point and a
 * direction. Topic 02 is line against line. Topic 03 is how to write a plane
 * down at all. Topic 04 is angle and distance wherever a plane is involved.
 * Topic 05 is the single construction, dropping a perpendicular, that answers
 * "nearest", "foot" and "image" for both a line and a plane. Topic 06 is line
 * against plane, and plane against plane.
 *
 * So the formula inventory is carried densely by `formula` and `defgrid`
 * cards, twenty-four and eleven of them, and the prose is spent almost
 * entirely on the one question the formula sheet cannot answer: which formula
 * a given configuration calls for. That is where the marks actually go. The
 * skew formula on parallel lines divides by zero; cosine on a line and a plane
 * is off by exactly ninety degrees; a zero dot product does not put a line in
 * a plane. Each of those gets paragraphs, and the algebra that follows the
 * choice gets a card.
 *
 * What was dropped:
 *
 *   - Subtopic 00 (pages 649 to 657) in full. It is the source's own
 *     "Prerequisite" recap of coordinates, distance, the section formula, the
 *     centroid and collinearity, and math-11-11-three-d.ts already teaches all
 *     of it across five topics. It is quoted as known in topic 01's opening
 *     paragraph and never re-derived. The one item in it that is genuinely
 *     Class 12 machinery, the scalar triple product as a volume, is
 *     reintroduced in topic 02 where the shortest-distance formula needs it.
 *   - The source's per-subtopic "Exam Relevance" panels, merged into the
 *     single hook, since the reader renders `hook` on topic 1 only.
 *   - Addendum P's question-distribution table, which feeds the hook rather
 *     than becoming content, and its seven archetypes, which are folded into
 *     the topic whose machinery they use rather than given a topic of their
 *     own. Archetype 7, distance measured parallel to a line, is the one that
 *     is a genuinely new procedure, and it is worked in topic 06.
 *   - Repeated statements of the same formula. The source states the
 *     point-plane distance three times, in Subtopics 03, 04 and the addendum;
 *     it is stated once here, in topic 04, and used in topic 05.
 *
 * Everything else survives. The five Round 2 addenda are folded in: A (the
 * line where two planes meet) into topic 06, B (both endpoints of the shortest
 * bridge) into topic 02, C (four-point coplanarity and the extended
 * plane-building table) into topic 03, D (origin feet, coordinate-wall
 * reflections, the mirror trick) into topic 05, and E (locus) split, with the
 * perpendicular bisector plane in topic 06 and the sphere of feet in topic 05
 * beside the origin-foot pattern it belongs to.
 *
 * ERRATA APPLIED (source pages 830 to 832, the two Chapter 11 entries, both
 * production clipping rather than mathematics):
 *
 *   - Page 678, Subtopic 03 Section 2: the parallel-planes line is clipped at
 *     the page edge, losing the final "0" of "ax + by + cz + d₂ = 0". Written
 *     out in full in topic 04's parallel-planes formula card.
 *   - Page 693, Subtopic 05 Section 2: the plane-through-two-parallel-lines
 *     normal is clipped, losing the closing bracket of "N = b × (a₂ − a₁)".
 *     Written out in full in topic 03's plane-building procedure.
 *
 *   The errata also pre-empts a false positive it says an automated audit
 *     raised: the practice answer 2x + 3y + 7z = 16 for the plane containing
 *     two parallel lines, page 697. Recomputed here and the printed answer is
 *     right: a₁ = (1, 0, 2), a₂ = (0, 3, 1), b = (2, 1, −1), so
 *     b × (a₂ − a₁) = (2, 1, −1) × (−1, 3, −1) = (2, 3, 7), and through
 *     (1, 0, 2) that is 2x + 3y + 7z = 16, which (0, 3, 1) also satisfies.
 *
 * CORRECTIONS BEYOND THE ERRATA (found by re-solving every worked example,
 * practice answer and MCQ in the page range; the corrected value is what this
 * chapter teaches):
 *
 *   - Page 702, Addendum A, Practice 5 answer. The question asks you to show
 *     that x + y + z = 1, 2x − y + 2z = 3 and x + z = 5 have no common point.
 *     The printed working reads "substituting back, x + z = 5 from plane 1 but
 *     x + 2(−4) + 2z = 3 forces x + z = 11/2", and calls that a
 *     contradiction. Two things are wrong. The substitution is made into a
 *     plane that is not in the question: the second plane is 2x − y + 2z = 3,
 *     whose x-coefficient is 2 and whose y-coefficient is −1, not 1 and 2.
 *     And 11/2 does not follow even from the misread plane, since
 *     x + 2(−4) + 2z = 3 gives x + 2z = 11.
 *     The correct chain: planes 1 and 3 give y = −4 and x + z = 5, and
 *     substituting y = −4 into 2x − y + 2z = 3 gives 2x + 2z = −1, that is
 *     x + z = −1/2, which contradicts x + z = 5. The conclusion is right and
 *     the answer's own second argument is right (the first two planes meet in
 *     a line of direction (1, 0, −1), which is perpendicular to the third
 *     plane's normal (1, 0, 1) and so runs parallel to it). Topic 06 teaches
 *     the corrected chain, in the practice card on three-plane consistency.
 *   - Page 682, Subtopic 03 MCQ Q4, the gloss on option (C). The family is
 *     (x + y + z − 1) + λ(2x + y − z − 2) = 0 and the option is (0, 1, 0).
 *     Printed: "(C) gives −2λ". At (0, 1, 0) the first plane expression is
 *     0 + 1 + 0 − 1 = 0 and the second is 0 + 1 − 0 − 2 = −1, so the family
 *     evaluates to −λ, not −2λ. The point still fails, since −λ is zero only
 *     at λ = 0, so the answer (A) is unaffected; the arithmetic in the gloss
 *     is not. The MCQ is carried in topic 03 with the nudge corrected.
 *
 * FIGURES
 *
 * Six `diagram` blocks, one per topic, every one `axes3d`. That is the kind
 * built for this chapter and it had never been used at scale; its `lines`,
 * `planes` and `vectors` arrays all get their first real exercise here. Every
 * coordinate below was projected by hand through the renderer's own isometric
 * map, P(x, y, z) = [cx + (y − 0.62x)u, cy − (z − 0.42x)u] at the 308pt
 * figure width, and checked to land inside the frame along with its label.
 *
 *   01  Direction cosines. The position vector with its floor rectangle, then
 *       the same point with grey arrows out to its three axis feet at x = r·l,
 *       y = r·m, z = r·n, then a direction equally inclined to all three axes.
 *       The three shadows are the whole definition, so drawing them is the
 *       definition rather than an illustration of it.
 *   02  Skew, intersecting, parallel. Two horizontal lines at different
 *       heights whose projections cross but which never meet, with the
 *       vertical common perpendicular drawn as the bridge; then the same two
 *       directions at one height, meeting; then two parallels with the
 *       constant gap. This is the figure the chapter needs most, because skew
 *       is exactly the configuration a student cannot get from an equation.
 *   03  A plane. Point-and-normal with the foot from the origin, then a plane
 *       with three unequal intercepts, then the pencil: three planes sharing
 *       one edge, which is literally what P₁ + λP₂ = 0 draws.
 *   04  Angles and distances. Two planes with an arrow out of each along its
 *       normal, so the plane-plane angle is visibly the normal-normal angle;
 *       a line piercing a plane with the normal beside it, so the complement
 *       is visible; and a point with its perpendicular down to a plane.
 *   05  The perpendicular, twice. Foot on a line, foot on a plane, and the
 *       image continuing the same arrow through to the far side.
 *   06  A line against a plane: crossing, lying in, parallel, and then two
 *       planes with their line of intersection drawn along their shared edge.
 *
 * FIGURES TRIED AND REJECTED
 *
 *   - The angle α, β, γ drawn as three arcs at the origin. The renderer has no
 *     arc primitive on `axes3d` and only `plot` has one (the unit circle),
 *     which is 2D. The three axis feet carry the same content and are drawn
 *     instead, with the caption naming the angles.
 *   - Skew lines in general position, that is, two lines with unrelated
 *     directions and a slanted common perpendicular. Drawn isometrically they
 *     are unreadable: nothing in the projection says which line is nearer, so
 *     "skew" and "intersecting" produce the same picture. Making one line
 *     horizontal at z = 0.2 and the other horizontal at z = 2.0 fixes it, the
 *     bridge is then vertical and the separation is visible, and the pair is
 *     still genuinely skew. Honest, and readable, at the cost of generality.
 *   - The two angle-bisector planes of a pair of planes. Four translucent
 *     triangles sharing one edge is a smear, and which of the four is the
 *     acute bisector, the whole point of the figure, cannot be read off it.
 *     Dropped; topic 04 teaches the acute test as a procedure instead.
 *   - A tetrahedron, for the scalar triple product as a volume. `axes3d` draws
 *     no solids, only lines, planes and arrows, and faking one from three
 *     planes gives an open shell that reads as three separate sheets.
 *   - The reflected image of a whole line in a plane. Two lines plus a plane
 *     plus two joining perpendiculars is six strokes through one small
 *     triangle; the point-and-image figure in topic 05 already carries the
 *     mirror idea and the line case is one sentence away from it.
 *
 * A known renderer limit, recorded rather than worked around because
 * components/textbook is not this file's to edit: the z-axis is drawn to 3.2
 * units, which at the 308pt figure width puts its tip and its "z" label a few
 * pixels above the top edge, so the label is clipped. That is true of every
 * axes3d frame ever authored, including the four in math-11-11-three-d.ts. No
 * content in these eighteen frames sits above z = 2.4, so nothing that
 * carries meaning is lost.
 *
 * Diagram chips and captions render as plain text, not markup, so they carry
 * no inline tags. Chip labels are unique within each figure, because the
 * reader keys the chip row on the label.
 */
import type { Chapter } from '@/lib/textbooks';

export const ch12ThreeDGeometry: Chapter = {
  "chapter": "11",
  "title": "Three Dimensional Geometry",
  "subject": "Mathematics",
  "klass": "Class 12",
  "topics": [
    {
      "n": "01",
      "title": "Direction Cosines, Ratios and the Line in Space",
      "chip": "01 DIRECTION",
      "kalam": "a point says where, a direction says which way",
      "blocks": [
        {
          "t": "hook",
          "html": "<b>01 · Direction Cosines, Ratios and the Line in Space</b><br>The foundation stone of the chapter. CBSE Boards almost always carry a 1 to 2 mark direct question: find the direction cosines, or write a line’s equation. JEE Main asks 1 to 2 every year, usually disguised inside a larger problem on angles, collinearity or feet of perpendiculars. JEE Advanced rarely asks it alone but builds every skew-line and plane question on top of it. About 10 to 12 questions of the 66 legible previous-year questions in the bank sit here. Not in NEET, the medical paper has no mathematics section.<br><br><b>02 · Two Lines: Angle, Meeting and Shortest Distance</b><br>A guaranteed scorer. CBSE Boards regularly carry a 3 to 5 mark shortest-distance problem and a short angle-between-lines question. JEE Main asks 1 to 2 every year, either a direct shortest distance or a “find the parameter that makes them intersect” coplanarity question. JEE Advanced feeds the skew distance into plane and locus problems, and asks for the two endpoints of the bridge, not just its length. Another 10 to 12 of the bank.<br><br><b>03 · The Plane: Every Way to Write One</b><br>JEE only. The plane was removed from the rationalised CBSE Board syllabus, so there is no Board question here. In exchange, planes are the single biggest block of the previous-year bank, 25 to 30 of the 66, and JEE Main reliably carries 2 to 3 a year: a plane through points or intercepts, and very often a family-of-planes problem. JEE Advanced fuses planes with lines, spheres and loci.<br><br><b>04 · Angles and Distances Once a Plane Is Involved</b><br>The other half of that plane block, and the home of the chapter’s most reliable single-mark loss: the line-to-plane angle uses <b>sine</b>, not cosine. JEE Main asks a plane-plane angle, a point-plane distance or a parallel-planes distance most years. JEE Advanced asks for the angle-bisector planes and then for which of the two bisects the acute angle, which is a second question hiding inside the first.<br><br><b>05 · The Perpendicular Toolkit: Feet, Distances, Images</b><br>One of the most question-dense corners of the chapter and the one place CBSE and JEE overlap completely, because point-to-line is still in the Board syllabus. “Foot of perpendicular”, “image of a point” and “perpendicular distance” appear in almost every JEE Main paper, 10 to 12 in the bank, and JEE Advanced combines images and feet into multi-step reflection and locus problems. Master one act, dropping a perpendicular, and four formula families fall out at once.<br><br><b>06 · Line and Plane Together</b><br>Where the chapter converges. JEE Main reliably asks for the point where a line meets a plane, or for a plane built from given lines; JEE Advanced adds reflections and projections of a whole line, and the line where two planes meet, which the chapter text repeatedly tells you to avoid computing and then needs. About 8 to 10 of the bank, and rising, because it is the cleanest way to build a question that tests four earlier ideas at once."
        },
        {
          "t": "p",
          "html": "Class 11 already gave you the room and the ruler. A point in space is an ordered triple (<i>x</i>, <i>y</i>, <i>z</i>), the distance between two points is Pythagoras used twice, and the section formula splits a segment one coordinate at a time. All three are assumed here and none is re-derived. What Class 11 never asked is the question this chapter is built on: given a line in that room, <b>which way is it pointing?</b>"
        },
        {
          "t": "p",
          "html": "In a plane, one number answered it. The slope tan <i>θ</i> fixed a line’s direction completely, because there was only one other axis to measure against. Space has three axes and one angle is no longer enough: a line tilted 30° from the <i>x</i>-axis can still swing through a whole cone of orientations. So we measure the angle the line makes with each axis in turn, <i>α</i> with <i>x</i>, <i>β</i> with <i>y</i>, <i>γ</i> with <i>z</i>, and carry the three cosines rather than the three angles."
        },
        {
          "t": "think",
          "html": "direction cosines are a budget. a direction has a fixed total strength of 1 and has to spend it across the three axes. a line lying flat along the <i>x</i>-axis spends everything there, (1, 0, 0). a line tilted equally between all three splits it evenly. and the rule that makes it a budget rather than a free-for-all is that the squares must add to exactly one, no more and no less."
        },
        {
          "t": "def",
          "term": "Direction cosines",
          "html": "For a <b>directed</b> line making angles <i>α</i>, <i>β</i>, <i>γ</i> with the positive <i>x</i>-, <i>y</i>- and <i>z</i>-axes, the numbers <b><i>l</i> = cos <i>α</i>, <i>m</i> = cos <i>β</i>, <i>n</i> = cos <i>γ</i></b>. They are the components of the <b>unit vector</b> along the line, so a single step of length 1 along it moves you <i>l</i> in <i>x</i>, <i>m</i> in <i>y</i> and <i>n</i> in <i>z</i>. Reverse the arrow and all three flip sign, which is why an undirected line has exactly two valid sets and why a ± keeps appearing."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE MASTER IDENTITY",
          "tag": "true for every line, no exceptions",
          "main": "l<sup>2</sup> + m<sup>2</sup> + n<sup>2</sup> = 1",
          "legend": [
            "equivalently cos<sup>2</sup><i>α</i> + cos<sup>2</sup><i>β</i> + cos<sup>2</sup><i>γ</i> = 1, which is the form to use when the data is angles",
            "the free corollary: sin<sup>2</sup><i>α</i> + sin<sup>2</sup><i>β</i> + sin<sup>2</sup><i>γ</i> = 3 − 1 = <b>2</b>",
            "a line equally inclined to all three axes has 3<i>l</i><sup>2</sup> = 1, so <i>l</i> = <i>m</i> = <i>n</i> = ±1/√3"
          ],
          "note": "Use it as a one-second check on every answer. Square your three numbers. If they do not add to 1 you reported direction ratios, not direction cosines, and you forgot to normalise."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY THE SQUARES ADD TO ONE, TAP A LINE",
          "steps": [
            {
              "eq": "slide the line to pass through O, and take P(x, y, z) on it with OP = r",
              "why": "The angles a line makes with the axes depend only on its direction, never on where it sits, so translating it to the origin changes nothing and makes every projection start from O. This is the same move that lets you measure the angle between two lines that never meet."
            },
            {
              "eq": "the foot of the perpendicular from P to the x-axis is (x, 0, 0), so x = r cos α = r l",
              "why": "In the right triangle with hypotenuse OP and one leg along the x-axis, the adjacent side is the projection of OP onto that axis. Its length is r cos α, and its signed value is exactly the coordinate x. So the direction cosine is the fraction of the full length spent along that axis."
            },
            {
              "eq": "the same argument on the other two axes gives y = r m and z = r n",
              "why": "Nothing in the previous step used which axis it was, only that the axis is perpendicular to the other two. The three statements together say one thing: the point is at distance r in the direction (l, m, n), so its coordinates are r times that unit triple."
            },
            {
              "eq": "r<sup>2</sup> = x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> = r<sup>2</sup>(l<sup>2</sup> + m<sup>2</sup> + n<sup>2</sup>)",
              "why": "The left equality is the Class 11 distance from the origin. Substituting x = rl, y = rm, z = rn into the right side and pulling out r squared leaves the bracket. Dividing by r squared, which is non-zero because P is not the origin, gives the identity."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "axes3d",
          "kicker": "FIGURE · WHAT A DIRECTION COSINE ACTUALLY IS, TAP ONE",
          "chips": ["in space", "the three shadows", "equally inclined"],
          "captions": [
            "A point P at (x, y, z), with the arrow OP drawn from the origin and the rectangle it stands on marked out on the floor. The dashed pair is the standard two-step reading of a point in space: walk across the floor to (x, y, 0), then climb z. Everything in this chapter is measured against that arrow or against a copy of it slid somewhere else.",
            "The same arrow, with grey arrows out to the three points where its perpendiculars land on the axes. Those feet sit at x = r cos alpha, y = r cos beta and z = r cos gamma, so the three lengths are r times the three direction cosines. That is the whole definition drawn: a direction cosine is the fraction of the arrow spent along one axis, and the three fractions are locked together by l squared plus m squared plus n squared being 1.",
            "A direction equally inclined to all three axes. Sharing the budget of 1 evenly forces 3l squared = 1, so l = m = n = 1 over root 3 and each angle is about 54.7 degrees. Worth memorising outright: it turns up in roughly one exam problem in three, usually phrased as a line making equal angles with the axes."
          ],
          "frames": [
            {
              "axes3d": {
                "point": [1.6, 2.2, 1.8],
                "label": "P",
                "projections": true,
                "box": true
              }
            },
            {
              "axes3d": {
                "point": [1.6, 2.2, 1.8],
                "label": "P",
                "projections": false,
                "vectors": [
                  { "to": [1.6, 0, 0], "label": "x = r l", "soft": true },
                  { "to": [0, 2.2, 0], "label": "y = r m", "soft": true },
                  { "to": [0, 0, 1.8], "label": "z = r n", "soft": true }
                ]
              }
            },
            {
              "axes3d": {
                "point": [1.5, 1.5, 1.5],
                "label": "l = m = n",
                "projections": false
              }
            }
          ]
        },
        {
          "t": "p",
          "html": "Nobody computes three cosines from scratch. If a line passes through (1, 2, 3) and (4, 8, 11), the natural step along it is the coordinate difference (3, 6, 8). Those three numbers are <b>not</b> the direction cosines, their squares add to 109, but they are proportional to them, and proportional is all you usually need. Any triple proportional to (<i>l</i>, <i>m</i>, <i>n</i>) is a set of <b>direction ratios</b>."
        },
        {
          "t": "def",
          "term": "Direction ratios",
          "html": "Any triple (<i>a</i>, <i>b</i>, <i>c</i>), not all zero, with <i>a</i> : <i>b</i> : <i>c</i> = <i>l</i> : <i>m</i> : <i>n</i>. The components of <b>any</b> vector lying along the line are direction ratios, with no normalising required, which is why coordinate differences work and why you may freely scale or reverse them: (2, −1, 3), (4, −2, 6) and (−2, 1, −3) all describe the same line. Direction ratios are never unique. Direction cosines are, up to one overall sign."
        },
        {
          "t": "defgrid",
          "title": "Three ways to say the same direction",
          "rows": [
            { "k": "Direction cosines <i>l</i>, <i>m</i>, <i>n</i>", "v": "unique up to one shared ±. Constraint: <i>l</i><sup>2</sup> + <i>m</i><sup>2</sup> + <i>n</i><sup>2</sup> = 1" },
            { "k": "Direction ratios <i>a</i>, <i>b</i>, <i>c</i>", "v": "never unique, any non-zero scalar multiple serves. Constraint: <b>not all zero</b>" },
            { "k": "Angles <i>α</i>, <i>β</i>, <i>γ</i>", "v": "unique for a directed line. Constraint: cos<sup>2</sup><i>α</i> + cos<sup>2</sup><i>β</i> + cos<sup>2</sup><i>γ</i> = 1" },
            { "k": "The zero triple", "v": "(0, 0, 0) has no direction and is meaningless as ratios. Never a valid answer" },
            { "k": "Line in a coordinate plane", "v": "one direction cosine vanishes. A line inside the <i>xy</i>-plane makes 90° with <i>z</i>, so <i>n</i> = 0" },
            { "k": "Parallel lines", "v": "share a direction, so ratios proportional and cosines equal up to one sign. <b>Position is not encoded</b>" }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · RATIOS TO COSINES",
          "tag": "one shared sign, not three independent ones",
          "main": "(l, m, n) = ± (a, b, c) / √(a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup>)",
          "legend": [
            "divide each ratio by the length of the ratio vector, which is what turns a proportional triple into a unit one",
            "the ± is <b>shared</b>: the same sign on all three, because it is the choice of which way to walk along the line",
            "through two points <i>P</i>(<i>x</i><sub>1</sub>, <i>y</i><sub>1</sub>, <i>z</i><sub>1</sub>) and <i>Q</i>(<i>x</i><sub>2</sub>, <i>y</i><sub>2</sub>, <i>z</i><sub>2</sub>): ratios are (<i>x</i><sub>2</sub> − <i>x</i><sub>1</sub>, <i>y</i><sub>2</sub> − <i>y</i><sub>1</sub>, <i>z</i><sub>2</sub> − <i>z</i><sub>1</sub>), and dividing by <i>PQ</i> gives the cosines"
          ],
          "note": "Normalise at the very last step, never in the middle. Scaling ratios costs nothing and keeps the arithmetic in integers; normalising early puts a surd into every line that follows."
        },
        {
          "t": "p",
          "html": "A line carries exactly two independent pieces of information: <b>where it is</b>, any one point on it, and <b>which way it goes</b>, its direction. Keep the direction and shift the point and you slide to a parallel line. Keep the point and rotate the direction and you pivot about it. Direction ratios capture only the second piece, which is precisely why the same ratios describe infinitely many parallel lines. To name one line you must marry a direction to a point, and that is all the equation of a line does."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE EQUATION OF A LINE",
          "tag": "a supplies where, b supplies which way",
          "main": "r = a + λb <br> (x − x<sub>1</sub>)/a = (y − y<sub>1</sub>)/b = (z − z<sub>1</sub>)/c",
          "legend": [
            "vector form: <i>a</i> is the position vector of a known point, <i>b</i> is any direction vector, and <i>λ</i> ∈ ℝ slides you along the track",
            "Cartesian form: the same statement with <i>λ</i> eliminated, the point’s coordinates as the constants and the direction ratios as the denominators",
            "through two points, the direction is the difference: (<i>x</i> − <i>x</i><sub>1</sub>)/(<i>x</i><sub>2</sub> − <i>x</i><sub>1</sub>) = (<i>y</i> − <i>y</i><sub>1</sub>)/(<i>y</i><sub>2</sub> − <i>y</i><sub>1</sub>) = (<i>z</i> − <i>z</i><sub>1</sub>)/(<i>z</i><sub>2</sub> − <i>z</i><sub>1</sub>)"
          ],
          "note": "λ is a true distance only when b is a unit vector, that is, only when a, b, c are the direction cosines themselves. With arbitrary ratios λ is a parameter and nothing more."
        },
        {
          "t": "proc",
          "title": "Standardise a Cartesian equation before reading anything off it",
          "steps": [
            "<b>Force every numerator to look like <i>x</i> − <i>x</i><sub>1</sub>.</b> A numerator written 3 − <i>y</i> is −(<i>y</i> − 3), so rewrite (3 − <i>y</i>)/4 as (<i>y</i> − 3)/(−4). The sign moves down to the denominator, and the denominator is what you are about to read.",
            "<b>Force the coefficient on the variable to 1.</b> (2<i>z</i> − 5)/6 is 2(<i>z</i> − 5/2)/6, which is (<i>z</i> − 5/2)/3. Halving the variable’s coefficient halves the denominator. This is the step examiners bank on you skipping.",
            "<b>Now read the point off the numerators and the ratios off the denominators.</b> After standardising, (<i>x</i> − 1)/2 = (3 − <i>y</i>)/4 = (2<i>z</i> − 5)/6 has point (1, 3, 5/2) and ratios (2, −4, 3), not the raw (2, 4, 6).",
            "<b>A zero denominator is legal and means something.</b> (<i>x</i> − 1)/0 = (<i>y</i> − 2)/3 = (<i>z</i>)/4 is shorthand for “<i>x</i> = 1, together with the other two equal”. The line is perpendicular to the <i>x</i>-axis. Do not divide by it, read it as a constraint.",
            "<b>To go the other way, assemble.</b> Point (<i>x</i><sub>1</sub>, <i>y</i><sub>1</sub>, <i>z</i><sub>1</sub>) and ratios (<i>a</i>, <i>b</i>, <i>c</i>) become <i>r</i> = (<i>x</i><sub>1</sub><i>i</i> + <i>y</i><sub>1</sub><i>j</i> + <i>z</i><sub>1</sub><i>k</i>) + <i>λ</i>(<i>a i</i> + <i>b j</i> + <i>c k</i>). The two forms carry identical information."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A line has direction ratios 2, −3, 6. Find its direction cosines, and write the vector and Cartesian equations of the line through (1, 4, −2) parallel to it.",
          "steps": [
            "Length of the ratio vector: √(2<sup>2</sup> + (−3)<sup>2</sup> + 6<sup>2</sup>) = √(4 + 9 + 36) = √49 = <b>7</b>.",
            "Direction cosines: <i>l</i> = 2/7, <i>m</i> = −3/7, <i>n</i> = 6/7. Check: 4/49 + 9/49 + 36/49 = 1 ✓",
            "Vector form with <i>a</i> = <i>i</i> + 4<i>j</i> − 2<i>k</i> and <i>b</i> = 2<i>i</i> − 3<i>j</i> + 6<i>k</i>: <i>r</i> = (<i>i</i> + 4<i>j</i> − 2<i>k</i>) + <i>λ</i>(2<i>i</i> − 3<i>j</i> + 6<i>k</i>).",
            "Cartesian: the point’s coordinates become the constants with signs flipped, the ratios become the denominators."
          ],
          "ans": "(2/7, −3/7, 6/7); and (<i>x</i> − 1)/2 = (<i>y</i> − 4)/(−3) = (<i>z</i> + 2)/6"
        },
        {
          "t": "ex",
          "tag": "CUET / JEE MAIN SPEED TRAP",
          "q": "A line makes 60° with the positive <i>x</i>-axis and 45° with the positive <i>y</i>-axis. What angle does it make with the <i>z</i>-axis?",
          "steps": [
            "Go straight to the identity, do not compute all three cosines: cos<sup>2</sup>60° + cos<sup>2</sup>45° + cos<sup>2</sup><i>γ</i> = 1.",
            "That is 1/4 + 1/2 + cos<sup>2</sup><i>γ</i> = 1, so cos<sup>2</sup><i>γ</i> = 1/4.",
            "Taking the square root gives cos <i>γ</i> = <b>±</b>1/2, and both signs are legitimate, because the undirected line has two directions.",
            "So <i>γ</i> = 60° or <i>γ</i> = 120°. The second is the line dipping below the <i>xy</i>-plane instead of rising above it."
          ],
          "ans": "60° <b>or</b> 120°. Stopping at 60° loses the mark"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN · MULTI-CONCEPT",
          "q": "<i>A</i>(3, −1, 2), <i>B</i>(1, 3, 4) and <i>C</i>(5, <i>k</i>, 0) are collinear. Find <i>k</i>, then the direction cosines of the line.",
          "steps": [
            "Ratios of <i>AB</i> = (1 − 3, 3 + 1, 4 − 2) = (−2, 4, 2); ratios of <i>AC</i> = (5 − 3, <i>k</i> + 1, 0 − 2) = (2, <i>k</i> + 1, −2).",
            "Collinear means proportional: (−2)/2 = (<i>k</i> + 1)/4 = 2/(−2). First and third both give −1, so the middle must too.",
            "(<i>k</i> + 1)/4 = −1 ⇒ <i>k</i> + 1 = −4 ⇒ <b><i>k</i> = −5</b>.",
            "Now normalise <i>AB</i>: |<i>AB</i>| = √(4 + 16 + 4) = √24 = 2√6, so (<i>l</i>, <i>m</i>, <i>n</i>) = (−2, 4, 2)/(2√6) = (−1/√6, 2/√6, 1/√6). Check: 1/6 + 4/6 + 1/6 = 1 ✓"
          ],
          "ans": "<i>k</i> = −5, and (−1/√6, 2/√6, 1/√6)"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "The direction cosines of two lines satisfy 3<i>l</i> + <i>m</i> + 5<i>n</i> = 0 and 6<i>mn</i> − 2<i>nl</i> + 5<i>lm</i> = 0. Find the acute angle between the two lines.",
          "steps": [
            "From the linear relation, <i>m</i> = −(3<i>l</i> + 5<i>n</i>). Substitute into the quadratic: −18<i>ln</i> − 30<i>n</i><sup>2</sup> − 2<i>nl</i> − 15<i>l</i><sup>2</sup> − 25<i>ln</i> = 0.",
            "Collect and divide by −15: <i>l</i><sup>2</sup> + 3<i>ln</i> + 2<i>n</i><sup>2</sup> = 0, which factors as (<i>l</i> + <i>n</i>)(<i>l</i> + 2<i>n</i>) = 0.",
            "Case <i>l</i> = −<i>n</i> gives <i>m</i> = −2<i>n</i>, so the direction is (1, 2, −1). Case <i>l</i> = −2<i>n</i> gives <i>m</i> = <i>n</i>, so the direction is (2, −1, −1). Both have length √6.",
            "cos <i>θ</i> = |(1)(2) + (2)(−1) + (−1)(−1)| / (√6 · √6) = |2 − 2 + 1|/6 = 1/6."
          ],
          "ans": "<i>θ</i> = cos<sup>−1</sup>(1/6), about 80.4°"
        },
        {
          "t": "mcq",
          "q": "The direction ratios of the line (<i>x</i> − 1)/2 = (3 − <i>y</i>)/4 = (2<i>z</i> − 5)/6 are",
          "correct": 1,
          "opts": [
            { "label": "2, 4, 6", "nudge": "The raw denominators, read without standardising. This ignores both the flipped sign on <i>y</i> and the coefficient 2 sitting on <i>z</i>. It is the single most-failed type in JEE Main." },
            { "label": "2, −4, 3", "nudge": null },
            { "label": "2, −4, 6", "nudge": "Half right. You caught (3 − <i>y</i>)/4 = (<i>y</i> − 3)/(−4), but forgot that 2<i>z</i> − 5 = 2(<i>z</i> − 5/2), which <b>halves</b> the denominator from 6 to 3." },
            { "label": "1, 3, 5", "nudge": "These are the point’s coordinates hiding in the numerators, not the direction. The point is (1, 3, 5/2); the ratios always live in the denominators." }
          ],
          "solution": "Standardise first. (3 − y)/4 = (y − 3)/(−4), and (2z − 5)/6 = 2(z − 5/2)/6 = (z − 5/2)/3. So the equation reads (x − 1)/2 = (y − 3)/(−4) = (z − 5/2)/3, and the ratios are 2, −4, 3. Three seconds of rewriting is the cheapest mark on the page."
        },
        {
          "t": "mcq",
          "q": "A line makes angles 90°, 135° and 45° with the <i>x</i>-, <i>y</i>- and <i>z</i>-axes. Its direction cosines are",
          "correct": 0,
          "opts": [
            { "label": "(0, −1/√2, 1/√2)", "nudge": null },
            { "label": "(0, 1/√2, 1/√2)", "nudge": "The sign on the middle term is wrong. 135° is obtuse, so cos 135° = −1/√2. Squares still add to 1, which is exactly why this distractor survives the usual check." },
            { "label": "(1, −1/√2, 1/√2)", "nudge": "This uses cos 90° = 1 instead of 0, the classic axis-angle blunder. The squares then add to 2, so the master identity kills it in one second." },
            { "label": "(0, −1/2, 1/2)", "nudge": "This uses cos 45° = 1/2, confusing it with cos 60°. The squares add to 1/2, not 1, so it is not a direction-cosine triple at all." }
          ],
          "solution": "cos 90° = 0, cos 135° = −1/√2, cos 45° = 1/√2. Check the identity: 0 + 1/2 + 1/2 = 1 ✓. The only genuine decision in the question is remembering that an obtuse angle carries a negative cosine."
        },
        {
          "t": "mcq",
          "q": "The direction cosines of the line joining <i>P</i>(2, 3, 5) to <i>Q</i>(−1, 3, 2) are",
          "correct": 2,
          "opts": [
            { "label": "(−3, 0, −3)", "nudge": "These are the direction <b>ratios</b>, reported without normalising. Their squares add to 18, not 1. Dividing by |<i>PQ</i>| is not optional." },
            { "label": "(−1/√2, 1, −1/√2)", "nudge": "A panic reaction to a zero component: the middle term is set to 1 because 0 looks wrong. It is not wrong. <i>P</i> and <i>Q</i> share <i>y</i> = 3, so the line makes 90° with the <i>y</i>-axis." },
            { "label": "(−1/√2, 0, −1/√2)", "nudge": null },
            { "label": "(3/√18, 0, 3/√18)", "nudge": "Correctly normalised but pointing the wrong way. This is the direction <i>Q</i> to <i>P</i>; the question asked for <i>P</i> to <i>Q</i>, so every sign flips." }
          ],
          "solution": "PQ = (−1 − 2, 3 − 3, 2 − 5) = (−3, 0, −3), and |PQ| = √(9 + 0 + 9) = 3√2. Dividing, (−3/(3√2), 0, −3/(3√2)) = (−1/√2, 0, −1/√2). Squares: 1/2 + 0 + 1/2 = 1 ✓"
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Find the direction cosines of a line whose direction ratios are 6, −2, 3.",
              "a": "√(36 + 4 + 9) = √49 = 7, so the cosines are <b>(6/7, −2/7, 3/7)</b>. Check: (36 + 4 + 9)/49 = 1 ✓"
            },
            {
              "q": "[CUET] A line makes 120° with the <i>x</i>-axis and 60° with the <i>y</i>-axis. Find its angle with the <i>z</i>-axis.",
              "a": "1/4 + 1/4 + cos<sup>2</sup><i>γ</i> = 1 gives cos<sup>2</sup><i>γ</i> = 1/2, so cos <i>γ</i> = ±1/√2 and <i>γ</i> = <b>45° or 135°</b>. Two answers, always."
            },
            {
              "q": "[JEE Main] Write the vector and Cartesian equations of the line through (2, −1, 3) and (4, 2, 1).",
              "a": "Direction = (2, 3, −2). <i>r</i> = (2<i>i</i> − <i>j</i> + 3<i>k</i>) + <i>λ</i>(2<i>i</i> + 3<i>j</i> − 2<i>k</i>); and (<i>x</i> − 2)/2 = (<i>y</i> + 1)/3 = (<i>z</i> − 3)/(−2)."
            },
            {
              "q": "[JEE Main] If <i>A</i>(1, 2, 3), <i>B</i>(3, <i>a</i>, 5) and <i>C</i>(5, 4, <i>b</i>) are collinear, find <i>a</i> and <i>b</i>.",
              "a": "<i>AB</i> = (2, <i>a</i> − 2, 2), <i>AC</i> = (4, 2, <i>b</i> − 3). Proportionality constant is 2/4 = 1/2, so (<i>a</i> − 2)/2 = 1/2 gives <b><i>a</i> = 3</b>, and 2/(<i>b</i> − 3) = 1/2 gives <b><i>b</i> = 7</b>."
            },
            {
              "q": "[JEE Advanced] <i>OP</i> makes equal angles with all three axes; <i>OQ</i> has ratios 1, −1, 0. Find the acute angle between them.",
              "a": "Ratios of <i>OP</i> are (1, 1, 1). Dot product 1 − 1 + 0 = 0, so cos <i>θ</i> = 0 and <i>θ</i> = <b>90°</b>. Notice you never needed the actual cosines: the angle formula is scale-free."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "Reporting direction <b>ratios</b> where direction <b>cosines</b> were asked. (−3, 0, −3) is not an answer to “find the direction cosines”. Divide by the length of the ratio vector and then square-and-add to confirm you get 1.",
            "Reading denominators off an un-standardised equation. (3 − <i>y</i>)/4 hides the ratio −4 and (2<i>z</i> − 5)/6 hides the ratio 3. <b>Rewrite before you read.</b>",
            "Dropping the ± when the working ends in cos<sup>2</sup><i>γ</i> = something. An undirected line has two direction-cosine sets, so questions of this shape almost always have <b>two</b> angle answers, one acute and one obtuse.",
            "Confusing the angle with an axis and the angle with a plane. They are <b>complementary</b>, not equal: a line at 30° to the <i>z</i>-axis is at 60° to the <i>xy</i>-plane. This one trap resurfaces as the sine-versus-cosine trap in topic 04.",
            "Treating the parameter <i>λ</i> as a distance. It measures a true length only when the direction vector is a unit vector. With ratios (2, −3, 6), moving <i>λ</i> = 1 moves you 7 units, not 1."
          ]
        },
        {
          "t": "protip",
          "html": "when the question gives you angles, never compute all three cosines. go straight to cos<sup>2</sup><i>α</i> + cos<sup>2</sup><i>β</i> + cos<sup>2</sup><i>γ</i> = 1 and solve for the missing one. and when the question gives you points, stay in integers as long as you can: scale the ratios to their smallest whole form, do all the dot products and cross products there, and normalise once, at the very end. surds carried through five lines of arithmetic are where marks quietly leak."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "l = cos α, m = cos β, n = cos γ", "note": "components of the unit vector along the line" },
            { "f": "l<sup>2</sup> + m<sup>2</sup> + n<sup>2</sup> = 1", "note": "the check to run on every answer. sin version gives 2" },
            { "f": "(l, m, n) = ±(a, b, c)/√(a<sup>2</sup>+b<sup>2</sup>+c<sup>2</sup>)", "note": "one shared sign: one line, two directions" },
            { "f": "ratios through two points = (x₂−x₁, y₂−y₁, z₂−z₁)", "note": "no normalising needed to call them ratios" },
            { "f": "r = a + λb", "note": "a is where, b is which way, λ slides you along" },
            { "f": "(x−x₁)/a = (y−y₁)/b = (z−z₁)/c", "note": "standardise numerators to x − x₁ before reading a, b, c" }
          ],
          "aids": [
            "“cosines spend a budget of one, in squares”",
            "“ratios are the recipe, cosines are the plated dish”",
            "“standardise, then read the denominators”"
          ]
        }
      ]
    },
    {
      "n": "02",
      "title": "Two Lines: Angle, Meeting and Shortest Distance",
      "chip": "02 TWO LINES",
      "kalam": "cross to bridge, dot to project",
      "blocks": [
        {
          "t": "p",
          "html": "Two distinct lines in space can do exactly three things, and space allows one more than a plane does. They can <b>intersect</b>, sharing one point. They can be <b>parallel</b>, same direction, never meeting, a constant gap everywhere. Or they can be <b>skew</b>: different directions and still never meeting. Only inside a single plane are “not parallel” and “intersecting” the same statement."
        },
        {
          "t": "think",
          "html": "two metro tunnels bored under a city. one runs north-east and gently down, the other runs east and slightly up. they never meet and they are not parallel. two questions follow immediately: at what angle do they cross as seen from directly above, and what is the thinnest wall of earth between them. those two questions are this whole topic."
        },
        {
          "t": "diagram",
          "kind": "axes3d",
          "kicker": "FIGURE · THE THREE WAYS TWO LINES CAN SIT, TAP ONE",
          "chips": ["skew", "intersecting", "parallel"],
          "captions": [
            "Two horizontal lines, L1 low down and L2 higher up, running in different directions. Their shadows on the floor cross, which is exactly why skewness is so hard to see from an equation, but the lines themselves never touch: at the place where the shadows cross, one line is at height 0.2 and the other at 2.0. The amber bar between them is the common perpendicular, the unique shortest bridge, and it is vertical because it must be at right angles to both horizontal directions at once.",
            "The same two directions, now at the same height. Nothing else has changed and the lines meet in a single point, marked in amber. The shortest distance is zero. Note that the projection looks almost identical to the skew picture: only the heights differ, which is the entire content of the scalar triple product test.",
            "Two lines with the same direction. There is no crossing and no single closest pair, because the gap is identical at every point along them. That constant gap is what the parallel formula measures, and it is why you may start from any point of either line and get the same answer."
          ],
          "frames": [
            {
              "axes3d": {
                "lines": [
                  { "through": [1.2, 1.2, 0.2], "dir": [0.5, -0.5, 0], "label": "L1" },
                  { "through": [1.2, 1.2, 2], "dir": [0.5, 0.5, 0], "label": "L2" }
                ],
                "vectors": [{ "from": [1.2, 1.2, 0.2], "to": [1.2, 1.2, 2], "label": "d" }]
              }
            },
            {
              "axes3d": {
                "lines": [
                  { "through": [1.2, 1.2, 1.1], "dir": [0.5, -0.5, 0], "label": "L1" },
                  { "through": [1.2, 1.2, 1.1], "dir": [0.5, 0.5, 0], "label": "L2" }
                ],
                "vectors": [{ "from": [1.2, 1.2, 1.1], "to": [1.2, 1.2, 1.1] }]
              }
            },
            {
              "axes3d": {
                "lines": [
                  { "through": [1.2, 1.2, 0.6], "dir": [0.5, 0.5, 0], "label": "L1" },
                  { "through": [1.2, 1.2, 2], "dir": [0.5, 0.5, 0], "label": "L2" }
                ],
                "vectors": [{ "from": [1.2, 1.2, 0.6], "to": [1.2, 1.2, 2], "label": "d" }]
              }
            }
          ]
        },
        {
          "t": "p",
          "html": "The angle first, because it is the easy half and it does not care which configuration you are in. The angle between two lines depends <b>only on their directions</b>, never on where they sit, so you slide both direction vectors to a common point and measure between the arrows. That is the dot product. One subtlety: a line points two opposite ways, so the dot product can come out negative and suggest an obtuse angle. By convention the angle between two lines is the <b>acute</b> one, so the numerator carries a modulus."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · ANGLE BETWEEN TWO LINES",
          "tag": "three forms, one statement",
          "main": "cos θ = |b<sub>1</sub> · b<sub>2</sub>| / (|b<sub>1</sub>| |b<sub>2</sub>|)",
          "legend": [
            "in direction ratios: |<i>a</i><sub>1</sub><i>a</i><sub>2</sub> + <i>b</i><sub>1</sub><i>b</i><sub>2</sub> + <i>c</i><sub>1</sub><i>c</i><sub>2</sub>| ÷ √(<i>a</i><sub>1</sub><sup>2</sup>+<i>b</i><sub>1</sub><sup>2</sup>+<i>c</i><sub>1</sub><sup>2</sup>) √(<i>a</i><sub>2</sub><sup>2</sup>+<i>b</i><sub>2</sub><sup>2</sup>+<i>c</i><sub>2</sub><sup>2</sup>)",
            "in direction cosines the denominators are both 1, so cos <i>θ</i> = |<i>l</i><sub>1</sub><i>l</i><sub>2</sub> + <i>m</i><sub>1</sub><i>m</i><sub>2</sub> + <i>n</i><sub>1</sub><i>n</i><sub>2</sub>|",
            "the reported <i>θ</i> always lies in [0°, 90°]: a line with itself gives 0°, perpendicular lines give 90°, nothing else is possible"
          ],
          "note": "The modulus is not decoration. Without it the same pair of lines gives two different answers depending on which way you chose to write each direction, and the equations describe the same pair either way."
        },
        {
          "t": "defgrid",
          "title": "Which configuration, and what to compute",
          "rows": [
            { "k": "Perpendicular", "v": "<i>a</i><sub>1</sub><i>a</i><sub>2</sub> + <i>b</i><sub>1</sub><i>b</i><sub>2</sub> + <i>c</i><sub>1</sub><i>c</i><sub>2</sub> = 0. One dot product and you are done, no angle needed" },
            { "k": "Parallel", "v": "<i>a</i><sub>1</sub>/<i>a</i><sub>2</sub> = <i>b</i><sub>1</sub>/<i>b</i><sub>2</sub> = <i>c</i><sub>1</sub>/<i>c</i><sub>2</sub>. Equal ratios, <b>not</b> a zero dot product" },
            { "k": "Intersecting", "v": "triple product (<i>a</i><sub>2</sub> − <i>a</i><sub>1</sub>) · (<i>b</i><sub>1</sub> × <i>b</i><sub>2</sub>) = 0 <b>and</b> directions not proportional. Distance 0" },
            { "k": "Skew", "v": "triple product ≠ 0. This is the only case with a positive shortest distance to compute" },
            { "k": "Coplanar", "v": "means intersecting <b>or</b> parallel: the triple product vanishes either way, because the box collapses" },
            { "k": "First move, always", "v": "compute <i>b</i><sub>1</sub> × <i>b</i><sub>2</sub>. Its magnitude is your denominator and its being zero tells you the lines are parallel" }
          ]
        },
        {
          "t": "p",
          "html": "Now the shortest distance. Hold two pencils crookedly in the air: the shortest gap between them is bridged by a third tiny stick meeting both at right angles. Which way must that stick point? Perpendicular to <b>both</b> directions at once, and the cross product <i>b</i><sub>1</sub> × <i>b</i><sub>2</sub> is built to be exactly that. So take <b>any</b> vector joining the two lines, the difference <i>a</i><sub>2</sub> − <i>a</i><sub>1</sub> of their reference points, and measure only its component along that common perpendicular. Everything else in <i>a</i><sub>2</sub> − <i>a</i><sub>1</sub> runs along the tunnels and does not count toward the gap."
        },
        {
          "t": "think",
          "html": "the triple product (<i>a</i><sub>2</sub> − <i>a</i><sub>1</sub>) · (<i>b</i><sub>1</sub> × <i>b</i><sub>2</sub>) is the volume of the slanted box built on those three vectors. divide a volume by the area of its base and you get its height. the height <b>is</b> the gap. distance is volume per unit base area, and that one sentence is the whole formula."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE SKEW DISTANCE, TAP A LINE",
          "steps": [
            {
              "eq": "the shortest segment is perpendicular to both lines at once",
              "why": "Suppose a joining segment were not perpendicular to one of the lines. Then sliding its endpoint a little along that line would shorten it, so it was not the shortest. The minimum therefore meets both lines at right angles, and for two genuinely skew lines exactly one such segment exists."
            },
            {
              "eq": "so it points along n = (b₁ × b₂) / |b₁ × b₂|",
              "why": "The cross product of two vectors is perpendicular to both by construction, so it points along the common perpendicular direction. Dividing by its own magnitude turns it into a unit vector, which is what a projection needs. This is the only place the cross product enters, and it enters for exactly one reason."
            },
            {
              "eq": "d = |(a₂ − a₁) · n|",
              "why": "Take the vector joining the reference point of one line to that of the other. Its component along the common perpendicular is the gap; its components along either line contribute nothing, because sliding along a line does not change how far apart the lines are. Projection onto a unit vector is a dot product, and the modulus is there because a projection is signed and a distance is not."
            },
            {
              "eq": "d = |(a₂ − a₁) · (b₁ × b₂)| / |b₁ × b₂|",
              "why": "Substituting the unit vector back in. Read the numerator as a volume and the denominator as a base area and the formula stops needing memorisation. Note also what happens for parallel lines: the cross product is the zero vector, the denominator is zero, and the formula is undefined rather than merely inconvenient."
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · SHORTEST DISTANCE, SKEW LINES",
          "tag": "volume divided by base area",
          "main": "d = |(a<sub>2</sub> − a<sub>1</sub>) · (b<sub>1</sub> × b<sub>2</sub>)| / |b<sub>1</sub> × b<sub>2</sub>|",
          "legend": [
            "<i>a</i><sub>1</sub>, <i>a</i><sub>2</sub> are position vectors of a known point on <b>each</b> line, one from each, never both from the same",
            "<i>b</i><sub>1</sub> × <i>b</i><sub>2</sub> is the common-perpendicular direction, and its magnitude is the base area of the box",
            "if the answer comes out 0, the lines are not skew at all: they meet, or they coincide"
          ],
          "note": "Works only for skew lines. If b₁ and b₂ are proportional the cross product is the zero vector and this divides by zero, which is the classic parallel-line trap."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE SAME THING IN CARTESIAN",
          "tag": "one determinant answers two questions",
          "main": "d = |det[ a<sub>2</sub>−a<sub>1</sub> ; b<sub>1</sub> ; b<sub>2</sub> ]| / |b<sub>1</sub> × b<sub>2</sub>|",
          "legend": [
            "the 3 by 3 determinant has rows (<i>x</i><sub>2</sub>−<i>x</i><sub>1</sub>, <i>y</i><sub>2</sub>−<i>y</i><sub>1</sub>, <i>z</i><sub>2</sub>−<i>z</i><sub>1</sub>), then (<i>a</i><sub>1</sub>, <i>b</i><sub>1</sub>, <i>c</i><sub>1</sub>), then (<i>a</i><sub>2</sub>, <i>b</i><sub>2</sub>, <i>c</i><sub>2</sub>)",
            "the denominator expands to √((<i>b</i><sub>1</sub><i>c</i><sub>2</sub> − <i>b</i><sub>2</sub><i>c</i><sub>1</sub>)<sup>2</sup> + (<i>c</i><sub>1</sub><i>a</i><sub>2</sub> − <i>c</i><sub>2</sub><i>a</i><sub>1</sub>)<sup>2</sup> + (<i>a</i><sub>1</sub><i>b</i><sub>2</sub> − <i>a</i><sub>2</sub><i>b</i><sub>1</sub>)<sup>2</sup>)",
            "<b>coplanarity</b> is the same determinant set to zero, so “find <i>k</i> so the lines intersect” is one equation, not a system"
          ],
          "note": "A triple product written as an array, nothing more. Compute the determinant once and it answers both “are they coplanar” and “how far apart are they”."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · SHORTEST DISTANCE, PARALLEL LINES",
          "tag": "the gap is the same everywhere",
          "main": "d = |b × (a<sub>2</sub> − a<sub>1</sub>)| / |b|",
          "legend": [
            "<i>b</i> is the direction the two lines <b>share</b>, so there is only one of it",
            "|<i>b</i> × (<i>a</i><sub>2</sub> − <i>a</i><sub>1</sub>)| = |<i>b</i>| |<i>a</i><sub>2</sub> − <i>a</i><sub>1</sub>| sin <i>α</i> already isolates the perpendicular part of the joining vector",
            "divide by |<i>b</i>| <b>once</b>, not twice: the cross product carries exactly one factor of it"
          ],
          "note": "The same shape as the point-to-line distance in topic 05, and for the same reason: a parallel line is just a point-to-line problem where the point happens to lie on another line."
        },
        {
          "t": "proc",
          "title": "Route any two-line problem in four moves",
          "steps": [
            "<b>Read off <i>a</i><sub>1</sub>, <i>b</i><sub>1</sub>, <i>a</i><sub>2</sub>, <i>b</i><sub>2</sub>, standardising any Cartesian form first.</b> The commonest silent disaster in this topic is pairing a point with the wrong line: each <i>a</i> must be a point of <b>its own</b> line, or the triple product is corrupted from the start.",
            "<b>Compute <i>b</i><sub>1</sub> × <i>b</i><sub>2</sub>.</b> One calculation, two pieces of information. If it is the zero vector the lines are parallel, so stop and use the parallel formula. Otherwise its magnitude is the denominator you are about to need.",
            "<b>Compute the triple product (<i>a</i><sub>2</sub> − <i>a</i><sub>1</sub>) · (<i>b</i><sub>1</sub> × <i>b</i><sub>2</sub>).</b> Zero means coplanar, so the lines meet and the distance is 0. Non-zero means skew, and its modulus is the numerator.",
            "<b>Divide, and sanity-check.</b> Distance is never negative, so a minus sign means you dropped a modulus. If a question asked instead for the angle, none of steps 2 and 3 was needed: a single dot product and two magnitudes.",
            "<b>If the question asks where they meet, do not stop at the determinant.</b> Write general points on both lines, equate coordinates, solve any two of the three equations and <b>verify with the third</b>. That third equation is the check that coplanarity promised would hold."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Find the acute angle between (<i>x</i> − 1)/2 = (<i>y</i> + 1)/(−1) = (<i>z</i> − 3)/2 and (<i>x</i> − 2)/1 = (<i>y</i> − 1)/2 = (<i>z</i> + 4)/2.",
          "steps": [
            "Directions are already standard: <i>b</i><sub>1</sub> = (2, −1, 2), <i>b</i><sub>2</sub> = (1, 2, 2).",
            "Dot product: (2)(1) + (−1)(2) + (2)(2) = 2 − 2 + 4 = 4.",
            "Magnitudes: |<i>b</i><sub>1</sub>| = √(4 + 1 + 4) = 3 and |<i>b</i><sub>2</sub>| = √(1 + 4 + 4) = 3.",
            "cos <i>θ</i> = |4|/(3 · 3) = 4/9. Had the dot product come out −4, the modulus would return the same angle: the equations describe the same pair of lines either way."
          ],
          "ans": "<i>θ</i> = cos<sup>−1</sup>(4/9)"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN · MULTI-CONCEPT",
          "q": "Find the shortest distance between <i>r</i> = (<i>i</i> + 2<i>j</i> − <i>k</i>) + <i>λ</i>(2<i>i</i> + <i>j</i> − 2<i>k</i>) and <i>r</i> = (3<i>i</i> − <i>j</i> + <i>k</i>) + <i>μ</i>(<i>i</i> + 2<i>j</i> + 2<i>k</i>).",
          "steps": [
            "<i>a</i><sub>1</sub> = (1, 2, −1), <i>b</i><sub>1</sub> = (2, 1, −2); <i>a</i><sub>2</sub> = (3, −1, 1), <i>b</i><sub>2</sub> = (1, 2, 2).",
            "Common perpendicular: <i>b</i><sub>1</sub> × <i>b</i><sub>2</sub> = (1·2 − (−2)·2, −(2·2 − (−2)·1), 2·2 − 1·1) = <b>(6, −6, 3)</b>, with magnitude √(36 + 36 + 9) = √81 = 9.",
            "Joining vector: <i>a</i><sub>2</sub> − <i>a</i><sub>1</sub> = (2, −3, 2). Triple product: (2)(6) + (−3)(−6) + (2)(3) = 12 + 18 + 6 = 36.",
            "<i>d</i> = |36|/9 = 4. Check the cross product really is perpendicular to both: (6, −6, 3)·(2, 1, −2) = 0 ✓ and (6, −6, 3)·(1, 2, 2) = 0 ✓"
          ],
          "ans": "4 units"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "Find <i>k</i> for which (<i>x</i> − 2)/1 = (<i>y</i> − 1)/2 = (<i>z</i> + 1)/3 and (<i>x</i> − 1)/3 = (<i>y</i> − <i>k</i>)/2 = (<i>z</i> − 2)/1 are coplanar, and locate their point of intersection.",
          "steps": [
            "<i>a</i><sub>2</sub> − <i>a</i><sub>1</sub> = (−1, <i>k</i> − 1, 3), <i>b</i><sub>1</sub> = (1, 2, 3), <i>b</i><sub>2</sub> = (3, 2, 1). Set the determinant of these three rows to zero.",
            "Expanding: −1(2 − 6) − (<i>k</i> − 1)(1 − 9) + 3(2 − 6) = 4 + 8(<i>k</i> − 1) − 12 = 8<i>k</i> − 16, so <b><i>k</i> = 2</b>.",
            "General points: <i>P</i> = (2 + <i>t</i>, 1 + 2<i>t</i>, −1 + 3<i>t</i>) and <i>Q</i> = (1 + 3<i>s</i>, 2 + 2<i>s</i>, 2 + <i>s</i>). Equating <i>x</i> and <i>y</i>: <i>t</i> − 3<i>s</i> = −1 and 2<i>t</i> − 2<i>s</i> = 1, giving <i>s</i> = 3/4, <i>t</i> = 5/4.",
            "Verify with the third: 3(5/4) − 3/4 = 3 ✓ Substituting <i>t</i> = 5/4 gives the point, and <i>s</i> = 3/4 gives the same one."
          ],
          "ans": "<i>k</i> = 2, meeting at (13/4, 7/2, 11/4)"
        },
        {
          "t": "mcq",
          "q": "The acute angle between the lines with direction ratios (1, 2, 2) and (2, −1, −2) is",
          "correct": 0,
          "opts": [
            { "label": "cos<sup>−1</sup>(4/9)", "nudge": null },
            { "label": "cos<sup>−1</sup>(−4/9)", "nudge": "The dot product really is −4, but you kept its sign and reported the obtuse angle. The angle between two <b>lines</b> is by convention the acute one, so the numerator is wrapped in a modulus." },
            { "label": "cos<sup>−1</sup>(4/3)", "nudge": "Only one magnitude made it into the denominator, 3 instead of 3 × 3. The result is a cosine greater than 1, which is impossible and is a free self-check on this question." },
            { "label": "90°", "nudge": "A small or negative dot product is not a zero dot product. Perpendicular needs the dot product to be exactly 0; here it is −4." }
          ],
          "solution": "Dot product = (1)(2) + (2)(−1) + (2)(−2) = 2 − 2 − 4 = −4. Both magnitudes are 3. cos θ = |−4|/9 = 4/9. The modulus is the entire question."
        },
        {
          "t": "mcq",
          "q": "The shortest distance between <i>r</i> = (2<i>i</i> − <i>j</i>) + <i>λ</i>(<i>i</i> − <i>j</i> + <i>k</i>) and <i>r</i> = (3<i>i</i> + <i>k</i>) + <i>μ</i>(2<i>i</i> + <i>j</i> − <i>k</i>) is",
          "correct": 0,
          "opts": [
            { "label": "√2", "nudge": null },
            { "label": "2√2", "nudge": "A slip in the final division: 6/(3√2) = 2/√2 = √2, not 2√2. Rationalise carefully, or check that your answer is smaller than |<i>a</i><sub>2</sub> − <i>a</i><sub>1</sub>| = √3, which 2√2 is not." },
            { "label": "6", "nudge": "That is the triple product, the numerator, reported without dividing by |<i>b</i><sub>1</sub> × <i>b</i><sub>2</sub>|. A volume is not a distance." },
            { "label": "3√2", "nudge": "That is |<i>b</i><sub>1</sub> × <i>b</i><sub>2</sub>|, the denominator, reported as the answer. The two halves of a fraction are easy to swap under time pressure; label them as you compute." }
          ],
          "solution": "b₁ × b₂ = (1, −1, 1) × (2, 1, −1) = (0, 3, 3), so |b₁ × b₂| = √18 = 3√2. With a₂ − a₁ = (1, 1, 1), the triple product is 0 + 3 + 3 = 6. Hence d = 6/(3√2) = √2."
        },
        {
          "t": "mcq",
          "q": "The shortest distance between two <b>parallel</b> lines <i>r</i> = <i>a</i><sub>1</sub> + <i>λb</i> and <i>r</i> = <i>a</i><sub>2</sub> + <i>μb</i> is",
          "correct": 1,
          "opts": [
            { "label": "|(a<sub>2</sub> − a<sub>1</sub>) · (b<sub>1</sub> × b<sub>2</sub>)| / |b<sub>1</sub> × b<sub>2</sub>|", "nudge": "The skew formula, applied where it is undefined. The lines share one direction <i>b</i>, so <i>b</i> × <i>b</i> is the zero vector and this is 0/0. Reaching for it here is the classic parallel-line trap." },
            { "label": "|b × (a<sub>2</sub> − a<sub>1</sub>)| / |b|", "nudge": null },
            { "label": "|a<sub>2</sub> − a<sub>1</sub>|", "nudge": "The full separation of the two reference points. It over-counts, because part of that joining vector runs <b>along</b> the lines and contributes nothing to the gap." },
            { "label": "0", "nudge": "True only if the lines coincide. Distinct parallel lines are never zero apart; that is what makes them distinct." }
          ],
          "solution": "For parallel lines the direction is shared, so the gap is the perpendicular component of a₂ − a₁ relative to b, and the cross product isolates exactly that component. Divide by |b| once, because the cross product already carries one factor of it."
        },
        {
          "t": "p",
          "html": "The formula gives the <b>length</b> of the bridge in one stroke and says nothing about where it lands. JEE Advanced regularly asks for both endpoints, and for that you go back to first principles: take a general point on each line, write the joining vector, and demand that it be perpendicular to both directions. Two dot products, two unknowns, one small linear system."
        },
        {
          "t": "proc",
          "title": "Find both ends of the shortest bridge",
          "steps": [
            "<b>Write general points and the joining vector.</b> <i>P</i><sub>1</sub> = <i>a</i><sub>1</sub> + <i>λb</i><sub>1</sub> and <i>P</i><sub>2</sub> = <i>a</i><sub>2</sub> + <i>μb</i><sub>2</sub>, and with <i>c</i> = <i>a</i><sub>2</sub> − <i>a</i><sub>1</sub> the joining vector is <i>D</i> = <i>c</i> + <i>μb</i><sub>2</sub> − <i>λb</i><sub>1</sub>.",
            "<b>Demand perpendicularity to both.</b> <i>D</i> · <i>b</i><sub>1</sub> = 0 and <i>D</i> · <i>b</i><sub>2</sub> = 0. Expanded, that is the 2 by 2 system <i>λ</i>|<i>b</i><sub>1</sub>|<sup>2</sup> − <i>μ</i>(<i>b</i><sub>1</sub>·<i>b</i><sub>2</sub>) = <i>c</i>·<i>b</i><sub>1</sub> and <i>λ</i>(<i>b</i><sub>1</sub>·<i>b</i><sub>2</sub>) − <i>μ</i>|<i>b</i><sub>2</sub>|<sup>2</sup> = <i>c</i>·<i>b</i><sub>2</sub>.",
            "<b>Solve for <i>λ</i> and <i>μ</i>, then substitute back.</b> When the two directions happen to be perpendicular the system decouples and each equation gives one unknown outright, which is why examiners choose such pairs.",
            "<b>Cross-check against the formula.</b> |<i>D</i>| at the solved values must equal the triple-product answer. If it does not, one of the two computations has an arithmetic slip and you now know to look.",
            "<b>Know when this fails.</b> If the lines are parallel the two equations carry the same information and there is no unique solution, correctly: every perpendicular transversal has the same length. Use the parallel formula instead."
          ]
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "The two lines of the earlier example, <i>a</i><sub>1</sub> = (1, 2, −1), <i>b</i><sub>1</sub> = (2, 1, −2) and <i>a</i><sub>2</sub> = (3, −1, 1), <i>b</i><sub>2</sub> = (1, 2, 2), are 4 units apart. Locate the two closest points.",
          "steps": [
            "<i>c</i> = <i>a</i><sub>2</sub> − <i>a</i><sub>1</sub> = (2, −3, 2). Data: |<i>b</i><sub>1</sub>|<sup>2</sup> = 9, |<i>b</i><sub>2</sub>|<sup>2</sup> = 9, and <i>b</i><sub>1</sub>·<i>b</i><sub>2</sub> = 2 + 2 − 4 = <b>0</b>, so the system decouples.",
            "<i>c</i>·<i>b</i><sub>1</sub> = 4 − 3 − 4 = −3, so 9<i>λ</i> = −3 and <i>λ</i> = −1/3. And <i>c</i>·<i>b</i><sub>2</sub> = 2 − 6 + 4 = 0, so −9<i>μ</i> = 0 and <i>μ</i> = 0.",
            "<i>P</i><sub>1</sub> = (1, 2, −1) − (1/3)(2, 1, −2) = (1/3, 5/3, −1/3), and <i>P</i><sub>2</sub> = (3, −1, 1) with no shift at all.",
            "Check: <i>D</i> = <i>P</i><sub>2</sub> − <i>P</i><sub>1</sub> = (8/3, −8/3, 4/3), so |<i>D</i>| = √(64 + 64 + 16)/3 = 12/3 = <b>4</b> ✓ and <i>D</i>·<i>b</i><sub>1</sub> = <i>D</i>·<i>b</i><sub>2</sub> = 0 ✓"
          ],
          "ans": "(1/3, 5/3, −1/3) and (3, −1, 1)"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "Find the shortest distance between <i>r</i> = <i>λ</i>(<i>i</i> + <i>j</i>) and <i>r</i> = (<i>i</i> + 2<i>k</i>) + <i>μ</i>(<i>j</i> + <i>k</i>), and the points where it is attained.",
          "steps": [
            "<i>a</i><sub>1</sub> = (0, 0, 0), <i>b</i><sub>1</sub> = (1, 1, 0), <i>a</i><sub>2</sub> = (1, 0, 2), <i>b</i><sub>2</sub> = (0, 1, 1), so <i>c</i> = (1, 0, 2). Here <i>b</i><sub>1</sub>·<i>b</i><sub>2</sub> = 1, so the coupling term is alive.",
            "|<i>b</i><sub>1</sub>|<sup>2</sup> = |<i>b</i><sub>2</sub>|<sup>2</sup> = 2, <i>c</i>·<i>b</i><sub>1</sub> = 1, <i>c</i>·<i>b</i><sub>2</sub> = 2. System: 2<i>λ</i> − <i>μ</i> = 1 and <i>λ</i> − 2<i>μ</i> = 2.",
            "From the first, <i>μ</i> = 2<i>λ</i> − 1. Substituting: <i>λ</i> − 4<i>λ</i> + 2 = 2, so <i>λ</i> = 0 and <i>μ</i> = −1.",
            "<i>P</i><sub>1</sub> = (0, 0, 0) and <i>P</i><sub>2</sub> = (1, 0, 2) − (0, 1, 1) = (1, −1, 1). Cross-check: <i>b</i><sub>1</sub> × <i>b</i><sub>2</sub> = (1, −1, 1) of magnitude √3, and <i>c</i>·(1, −1, 1) = 3, giving 3/√3 = √3 ✓"
          ],
          "ans": "√3, between (0, 0, 0) and (1, −1, 1)"
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Find the acute angle between (<i>x</i>−1)/1 = (<i>y</i>−2)/2 = <i>z</i>/2 and <i>x</i>/2 = (<i>y</i>+1)/2 = (<i>z</i>−3)/1.",
              "a": "Dot product = 2 + 4 + 2 = 8, magnitudes 3 and 3. cos <i>θ</i> = <b>8/9</b>, so <i>θ</i> = cos<sup>−1</sup>(8/9)."
            },
            {
              "q": "[CUET] Find <i>p</i> if the lines with ratios (3, −2, <i>p</i>) and (2, <i>p</i>, −1) are perpendicular.",
              "a": "6 − 2<i>p</i> − <i>p</i> = 0, so 6 = 3<i>p</i> and <b><i>p</i> = 2</b>. Perpendicular needs the dot product zero, not the ratios equal."
            },
            {
              "q": "[JEE Main] Shortest distance between <i>r</i> = (<i>i</i> + <i>j</i>) + <i>λ</i>(2<i>i</i> − <i>j</i> + <i>k</i>) and <i>r</i> = (2<i>i</i> + <i>j</i> − <i>k</i>) + <i>μ</i>(3<i>i</i> − 5<i>j</i> + 2<i>k</i>).",
              "a": "<i>b</i><sub>1</sub> × <i>b</i><sub>2</sub> = (3, −1, −7), magnitude √59. With <i>a</i><sub>2</sub> − <i>a</i><sub>1</sub> = (1, 0, −1), the triple product is 3 + 0 + 7 = 10. Distance <b>10/√59</b>."
            },
            {
              "q": "[JEE Main] Are (<i>x</i>−1)/2 = (<i>y</i>−2)/3 = (<i>z</i>−4)/4 and (<i>x</i>−2)/3 = (<i>y</i>−3)/4 = (<i>z</i>−5)/5 coplanar?",
              "a": "Rows (1, 1, 1), (2, 3, 4), (3, 4, 5). Determinant = 1(15−16) − 1(10−12) + 1(8−9) = −1 + 2 − 1 = <b>0</b>, so yes, coplanar: they intersect."
            },
            {
              "q": "[JEE Advanced] Distance between the parallel lines <i>r</i> = (<i>i</i> + 2<i>j</i> − 3<i>k</i>) + <i>λ</i>(2<i>i</i> + 3<i>j</i> − 6<i>k</i>) and <i>r</i> = (3<i>i</i> − <i>j</i> + <i>k</i>) + <i>μ</i>(2<i>i</i> + 3<i>j</i> − 6<i>k</i>).",
              "a": "Parallel, so use <i>b</i> = (2, 3, −6) and <i>a</i><sub>2</sub> − <i>a</i><sub>1</sub> = (2, −3, 4). <i>b</i> × (<i>a</i><sub>2</sub> − <i>a</i><sub>1</sub>) = (−6, −20, −12), magnitude √580 = 2√145, and |<i>b</i>| = 7. Distance <b>2√145/7</b>."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "Using the skew formula on parallel lines. If the directions are proportional, <i>b</i><sub>1</sub> × <i>b</i><sub>2</sub> is the zero vector and you are dividing by zero. <b>Compute the cross product first</b> and let its zero-ness tell you which formula to use.",
            "Pairing a point with the wrong line. In <i>a</i><sub>2</sub> − <i>a</i><sub>1</sub>, each point must come from its own line. Subtracting two points of the same line silently corrupts the whole triple product and still produces a plausible-looking number.",
            "Dropping the modulus. On the angle it hands you an obtuse answer for what is by convention an acute one; on the distance it hands you a negative length. Neither error announces itself.",
            "Treating a zero dot product as parallel, or equal ratios as perpendicular. <b>Perpendicular means dot product zero. Parallel means ratios equal.</b> They are the two extreme values of the same cosine and students routinely apply the wrong one.",
            "Answering “find the point of intersection” with only two of the three coordinate equations. Solve two, then <b>verify with the third</b>. If it fails, the lines were not coplanar and there is no intersection to find."
          ]
        },
        {
          "t": "protip",
          "html": "one cross product buys you two answers. compute <i>b</i><sub>1</sub> × <i>b</i><sub>2</sub> before anything else: its magnitude is the denominator you will need, and whether it is zero tells you at once whether you are in the skew case or the parallel case. then the triple product decides between skew and meeting. two calculations, and the entire configuration is classified before you have written a single distance."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "cos θ = |b₁ · b₂| / (|b₁| |b₂|)", "note": "always the acute angle. modulus is compulsory" },
            { "f": "perpendicular ⟺ b₁ · b₂ = 0", "note": "parallel ⟺ ratios proportional. never swap them" },
            { "f": "skew: d = |(a₂−a₁)·(b₁×b₂)| / |b₁×b₂|", "note": "volume over base area. skew lines only" },
            { "f": "parallel: d = |b × (a₂−a₁)| / |b|", "note": "one shared b, divide by |b| once" },
            { "f": "coplanar ⟺ triple product = 0", "note": "same determinant as the distance numerator" },
            { "f": "ends of the bridge: D · b₁ = D · b₂ = 0", "note": "a 2 by 2 system in λ and μ. decouples if b₁ · b₂ = 0" }
          ],
          "aids": [
            "“cross to bridge, dot to project”",
            "“zero volume, they meet”",
            "“parallel kills the cross, so change formula”"
          ]
        }
      ]
    },
    {
      "n": "03",
      "title": "The Plane: Every Way to Write One",
      "chip": "03 PLANES",
      "kalam": "find the normal and the rest follows",
      "blocks": [
        {
          "t": "p",
          "html": "A plane is the flattest surface in space, an infinite tabletop, and the remarkable thing is how little it takes to fix one completely: <b>a single point on it, plus the direction it faces</b>. That direction is carried by a vector sticking straight out of the surface, the <b>normal</b> <i>n</i>. Tilt the normal and the whole tabletop tilts with it; slide the point and the tabletop slides parallel to itself. Everything about planes flows from that one pairing."
        },
        {
          "t": "think",
          "html": "stand a pencil upright on a sheet of glass. the pencil is the normal, the glass is the plane. a point lies on the glass exactly when the little arrow from your base point out to it runs <b>flat along the glass</b>, which is to say perpendicular to the pencil. and perpendicular is just a dot product being zero. that is the master equation of a plane, obtained in one stroke."
        },
        {
          "t": "def",
          "term": "Normal to a plane",
          "html": "A vector <i>n</i> perpendicular to <b>every</b> line lying in the plane. Written <i>n</i> = (<i>a</i>, <i>b</i>, <i>c</i>), so the coefficients of <i>x</i>, <i>y</i> and <i>z</i> in <i>ax</i> + <i>by</i> + <i>cz</i> + <i>d</i> = 0 <b>are</b> the normal’s direction ratios. Like any direction it is fixed only up to scale and sign, so (1, 2, −2) and (−3, −6, 6) describe the same plane orientation. Note the letter clash with topic 01: from here on <i>n</i> is the normal vector, not a direction cosine."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · POINT AND NORMAL",
          "tag": "every other form is this one in disguise",
          "main": "(r − a) · n = 0 ⟺ r · n = d",
          "legend": [
            "<i>a</i> is the position vector of a known point on the plane, <i>r</i> is a general point, and <i>d</i> = <i>a</i> · <i>n</i> is a constant",
            "in coordinates: <i>a</i>(<i>x</i> − <i>x</i><sub>1</sub>) + <i>b</i>(<i>y</i> − <i>y</i><sub>1</sub>) + <i>c</i>(<i>z</i> − <i>z</i><sub>1</sub>) = 0, which expands to <i>ax</i> + <i>by</i> + <i>cz</i> = <i>d</i>",
            "read backwards: given <i>ax</i> + <i>by</i> + <i>cz</i> + <i>d</i> = 0, the normal is (<i>a</i>, <i>b</i>, <i>c</i>) with no work at all"
          ],
          "note": "The proof is one line. r lies on the plane exactly when r − a stays within the surface, that is, when it is perpendicular to n, and perpendicularity is the dot product being zero."
        },
        {
          "t": "diagram",
          "kind": "axes3d",
          "kicker": "FIGURE · A PLANE, THREE WAYS TO SEE IT, TAP ONE",
          "chips": ["a point and a normal", "intercepts", "the pencil"],
          "captions": [
            "The plane x + y + z = 2.4, drawn as the triangle it cuts from the three axes. The grey arrow from the origin lands at (0.8, 0.8, 0.8), which is the foot of the perpendicular from O, and the amber arrow continuing outward is the normal (1, 1, 1). Notice the foot lies along the normal: that is not a coincidence but the whole reason the point-plane distance formula divides by the length of the normal.",
            "A plane with three different intercepts, 3 on x, 2 on y and 1 on z, so its equation in intercept form is x over 3 plus y over 2 plus z over 1 equals 1. Multiplying out gives 2x + 3y + 6z = 6, and the normal (2, 3, 6) can be read straight off. Intercept form is not a new idea, it is the three-point construction with three especially convenient points.",
            "Three members of the family x + y + z = 2.4 hinged along one shared edge. Every plane a x + y + z = 2.4 contains both (0, 2.4, 0) and (0, 0, 2.4), so all of them pass through the same line, and sweeping the parameter flips through the pages of the book. That line is where two of the planes meet, and the point of the family method is that you get every page without ever computing the spine."
          ],
          "frames": [
            {
              "axes3d": {
                "planes": [{ "normal": [1, 1, 1], "d": 2.4, "label": "π" }],
                "vectors": [
                  { "to": [0.8, 0.8, 0.8], "soft": true },
                  { "from": [0.8, 0.8, 0.8], "to": [1.6, 1.6, 1.6], "label": "n" }
                ]
              }
            },
            {
              "axes3d": {
                "planes": [{ "normal": [2, 3, 6], "d": 6, "label": "π" }]
              }
            },
            {
              "axes3d": {
                "planes": [
                  { "normal": [1, 1, 1], "d": 2.4, "soft": true },
                  { "normal": [4, 1, 1], "d": 2.4, "soft": true },
                  { "normal": [2, 1, 1], "d": 2.4, "label": "π" }
                ]
              }
            }
          ]
        },
        {
          "t": "defgrid",
          "title": "Which form, for which data",
          "rows": [
            { "k": "A point and a normal", "v": "<i>a</i>(<i>x</i> − <i>x</i><sub>1</sub>) + <i>b</i>(<i>y</i> − <i>y</i><sub>1</sub>) + <i>c</i>(<i>z</i> − <i>z</i><sub>1</sub>) = 0. The default; everything else reduces to it" },
            { "k": "Three points", "v": "cross two edge vectors to manufacture the normal, then use the point form" },
            { "k": "Three intercepts", "v": "<i>x</i>/<i>a</i> + <i>y</i>/<i>b</i> + <i>z</i>/<i>c</i> = 1. Three points in disguise, namely (<i>a</i>,0,0), (0,<i>b</i>,0), (0,0,<i>c</i>)" },
            { "k": "Distance from the origin", "v": "normal form <i>r</i> · <i>n̂</i> = <i>p</i>, with <i>n̂</i> a <b>unit</b> normal and <i>p</i> ≥ 0. Only then is <i>p</i> the true distance" },
            { "k": "Parallel to a known plane", "v": "copy its normal, change the constant. Then force the new plane through the given point" },
            { "k": "Through a line of intersection", "v": "the family <i>P</i><sub>1</sub> + <i>λP</i><sub>2</sub> = 0, and one extra condition to pin <i>λ</i>" }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · PLANE THROUGH THREE POINTS",
          "tag": "two edges, one cross product",
          "main": "(r − a) · [ (b − a) × (c − a) ] = 0",
          "legend": [
            "<i>b</i> − <i>a</i> and <i>c</i> − <i>a</i> are two vectors lying <b>in</b> the plane, so their cross product is perpendicular to the whole surface",
            "as a determinant, set to zero the 3 by 3 array with rows (<i>x</i>−<i>x</i><sub>1</sub>, <i>y</i>−<i>y</i><sub>1</sub>, <i>z</i>−<i>z</i><sub>1</sub>), (<i>x</i><sub>2</sub>−<i>x</i><sub>1</sub>, …), (<i>x</i><sub>3</sub>−<i>x</i><sub>1</sub>, …)",
            "the three points must be <b>non-collinear</b>, or the cross product is the zero vector and infinitely many planes qualify"
          ],
          "note": "The determinant is not a separate result. Expanding it is exactly the two-edges-one-cross-product recipe written out, so use whichever you can execute without slips."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · INTERCEPT AND NORMAL FORMS",
          "tag": "convenient repackagings",
          "main": "x/a + y/b + z/c = 1 <br> r · n̂ = p",
          "legend": [
            "intercept form: the plane meets the axes at (<i>a</i>, 0, 0), (0, <i>b</i>, 0), (0, 0, <i>c</i>). Check it by substituting each in turn: 1 + 0 + 0 = 1",
            "to find intercepts from <i>Ax</i> + <i>By</i> + <i>Cz</i> = <i>D</i>, divide through by <i>D</i>: the intercepts are <i>D</i>/<i>A</i>, <i>D</i>/<i>B</i>, <i>D</i>/<i>C</i>",
            "normal form: divide the whole equation by |<i>n</i>| and, if the right side comes out negative, flip every sign so that <i>p</i> ≥ 0"
          ],
          "note": "Only in normal form does the constant mean anything geometric. In ax + by + cz = d the number d is not a distance; d divided by the length of the normal is."
        },
        {
          "t": "proc",
          "title": "Build the plane, whatever you were given",
          "steps": [
            "<b>Two intersecting lines.</b> Both directions lie in the plane, so <i>N</i> = <i>b</i><sub>1</sub> × <i>b</i><sub>2</sub>. Use either line’s point. This only works if the lines really are coplanar: skew lines share no plane at all.",
            "<b>A line and an external point <i>P</i>.</b> The direction and the vector from a point of the line to <i>P</i> both lie in the plane, so <i>N</i> = <i>b</i> × (<i>P</i> − <i>a</i>).",
            "<b>Two parallel lines.</b> The shared direction and the joining vector both lie in the plane, so <b><i>N</i> = <i>b</i> × (<i>a</i><sub>2</sub> − <i>a</i><sub>1</sub>)</b>. Crossing the two directions is useless here, they are proportional.",
            "<b>A line, parallel to a given direction <i>m</i>.</b> <i>N</i> = <i>b</i> × <i>m</i>. If <i>m</i> happens to be parallel to <i>b</i> the cross product dies, and correctly so: every plane through the line would then qualify, so the answer is “not unique”.",
            "<b>A line, parallel to a given plane of normal <i>n</i>.</b> The new normal must be perpendicular to <i>b</i> (to contain the line) and to <i>n</i> (to be parallel), so <i>N</i> = <i>b</i> × <i>n</i>. A zero cross product here means the line pierces every such plane and none exists.",
            "<b>Then finish identically in every case.</b> Point-normal form through any point you already have, expand, and <b>verify by substituting back every point the plane was built from</b>. A correct plane must contain all of them."
          ]
        },
        {
          "t": "p",
          "html": "Three points always determine a plane. Four generally do not lie on one, and “are these four points coplanar” is a standard question with a one-computation answer. Build the normal from the first three and ask whether the fourth is perpendicular to it. If the first three happen to be collinear the cross product is the zero vector and the condition holds automatically, which is correct: a line and a fourth point always share <b>some</b> plane."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · FOUR POINTS ON ONE PLANE",
          "tag": "one triple product, no special cases",
          "main": "(AB × AC) · AD = 0",
          "legend": [
            "<i>AB</i>, <i>AC</i>, <i>AD</i> are the three difference vectors from one chosen vertex <i>A</i> to the other three points",
            "the same scalar triple product as the coplanarity test for two lines, because it is the same geometric statement: zero volume",
            "if it is non-zero, one sixth of its modulus is the volume of the tetrahedron the four points span"
          ],
          "note": "The order of the four points does not matter and neither does which one you call A. Reordering can only change the sign of the determinant, and the test is against zero."
        },
        {
          "t": "p",
          "html": "The last form is the one that saves the most time in an exam. When a problem says “the plane through the line where <i>P</i><sub>1</sub> and <i>P</i><sub>2</sub> meet”, <b>do not find that line</b>. Write <i>P</i><sub>1</sub> + <i>λP</i><sub>2</sub> = 0 instead. Every point on the intersection line makes both expressions zero, so it makes the combination zero for every <i>λ</i>, which means every member of the family already passes through the line. One extra condition then picks the single right <i>λ</i>."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE FAMILY OF PLANES",
          "tag": "a pencil hinged on the intersection line",
          "main": "P<sub>1</sub> + λP<sub>2</sub> = 0",
          "legend": [
            "with <i>P</i><sub>1</sub> ≡ <i>A</i><sub>1</sub><i>x</i> + <i>B</i><sub>1</sub><i>y</i> + <i>C</i><sub>1</sub><i>z</i> + <i>D</i><sub>1</sub> and <i>P</i><sub>2</sub> ≡ <i>A</i><sub>2</sub><i>x</i> + <i>B</i><sub>2</sub><i>y</i> + <i>C</i><sub>2</sub><i>z</i> + <i>D</i><sub>2</sub>, both written with everything on one side",
            "its normal is (<i>A</i><sub>1</sub> + <i>λA</i><sub>2</sub>, <i>B</i><sub>1</sub> + <i>λB</i><sub>2</sub>, <i>C</i><sub>1</sub> + <i>λC</i><sub>2</sub>), which is what any perpendicularity or parallelism condition acts on",
            "one free parameter, so exactly <b>one</b> linear condition is needed. Two conditions generally over-determine it and have no solution"
          ],
          "note": "The family can never reproduce P₂ itself: no finite λ gives it. If the answer happens to be P₂, write the symmetric form μP₁ + P₂ = 0 instead and solve for μ."
        },
        {
          "t": "proc",
          "title": "Use the family, and never find the line",
          "steps": [
            "<b>Write both planes as expressions equal to zero.</b> <i>x</i> + <i>y</i> + <i>z</i> = 6 becomes <i>x</i> + <i>y</i> + <i>z</i> − 6. A constant left on the wrong side flips a sign and poisons everything downstream.",
            "<b>Form <i>P</i><sub>1</sub> + <i>λP</i><sub>2</sub> = 0.</b> Do not expand it yet; the condition is usually easier to impose on the unexpanded form.",
            "<b>Turn the extra condition into one linear equation in <i>λ</i>.</b> Passes through a point: substitute the point. Perpendicular to a given plane: set the dot product of normals to zero. Parallel to an axis: set that coefficient to zero. Parallel to a line: set the normal’s dot product with the line’s direction to zero.",
            "<b>Solve for <i>λ</i>, substitute back, and clear fractions.</b> Multiplying through by the common denominator at the end keeps the answer in integers, which is how examiners print it.",
            "<b>Verify.</b> The answer must satisfy the extra condition and must contain any point that lies on both original planes. Two substitutions, ten seconds, and a wrong <i>λ</i> is caught."
          ]
        },
        {
          "t": "ex",
          "tag": "JEE MAIN · WARM-UP",
          "q": "Find the plane through (2, −1, 3) with normal <i>n</i> = <i>i</i> + 2<i>j</i> − 2<i>k</i>, and its perpendicular distance from the origin.",
          "steps": [
            "Point-normal: 1(<i>x</i> − 2) + 2(<i>y</i> + 1) − 2(<i>z</i> − 3) = 0.",
            "Expanding: <i>x</i> − 2 + 2<i>y</i> + 2 − 2<i>z</i> + 6 = 0, so <b><i>x</i> + 2<i>y</i> − 2<i>z</i> + 6 = 0</b>. Check the given point: 2 − 2 − 6 + 6 = 0 ✓",
            "Distance from the origin: substitute (0, 0, 0) into the plane expression and divide by |<i>n</i>| = √(1 + 4 + 4) = 3. That is |6|/3 = 2.",
            "Same answer from the normal form: dividing <i>x</i> + 2<i>y</i> − 2<i>z</i> = −6 by 3 gives a right side of −2, and flipping signs to make it non-negative gives <i>r</i> · <i>n̂</i> = 2 with <i>n̂</i> = (−1, −2, 2)/3."
          ],
          "ans": "<i>x</i> + 2<i>y</i> − 2<i>z</i> + 6 = 0, at distance 2 from the origin"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN · MULTI-CONCEPT",
          "q": "Find the plane through the line of intersection of <i>x</i> + <i>y</i> + <i>z</i> = 6 and 2<i>x</i> + 3<i>y</i> + 4<i>z</i> + 5 = 0 that passes through (1, 1, 1).",
          "steps": [
            "Family: (<i>x</i> + <i>y</i> + <i>z</i> − 6) + <i>λ</i>(2<i>x</i> + 3<i>y</i> + 4<i>z</i> + 5) = 0. Note the first plane is rewritten with everything on one side.",
            "Impose the point: (1 + 1 + 1 − 6) + <i>λ</i>(2 + 3 + 4 + 5) = 0, that is −3 + 14<i>λ</i> = 0, so <i>λ</i> = 3/14.",
            "Substitute and multiply through by 14: 14(<i>x</i> + <i>y</i> + <i>z</i> − 6) + 3(2<i>x</i> + 3<i>y</i> + 4<i>z</i> + 5) = 0.",
            "Collecting: (14 + 6)<i>x</i> + (14 + 9)<i>y</i> + (14 + 12)<i>z</i> + (−84 + 15) = 0. Check at (1, 1, 1): 20 + 23 + 26 − 69 = 0 ✓"
          ],
          "ans": "20<i>x</i> + 23<i>y</i> + 26<i>z</i> − 69 = 0"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "Find the plane through the line of intersection of 2<i>x</i> + <i>y</i> − <i>z</i> = 3 and <i>x</i> − <i>y</i> + 2<i>z</i> = 1 that is perpendicular to 3<i>x</i> + 2<i>y</i> + <i>z</i> = 0.",
          "steps": [
            "Family: (2<i>x</i> + <i>y</i> − <i>z</i> − 3) + <i>λ</i>(<i>x</i> − <i>y</i> + 2<i>z</i> − 1) = 0, whose normal is <i>N</i> = (2 + <i>λ</i>, 1 − <i>λ</i>, −1 + 2<i>λ</i>).",
            "“Perpendicular to that plane” is one dot product: <i>N</i> · (3, 2, 1) = 0.",
            "3(2 + <i>λ</i>) + 2(1 − <i>λ</i>) + (−1 + 2<i>λ</i>) = 6 + 3<i>λ</i> + 2 − 2<i>λ</i> − 1 + 2<i>λ</i> = 7 + 3<i>λ</i> = 0, so <i>λ</i> = −7/3.",
            "Substituting and multiplying by −3 clears the thirds. Verify: the normal (1, −10, 17) gives 3 − 20 + 17 = 0 against (3, 2, 1) ✓"
          ],
          "ans": "<i>x</i> − 10<i>y</i> + 17<i>z</i> + 2 = 0"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Find the plane containing the line <i>r</i> = (<i>i</i> − <i>j</i> + 3<i>k</i>) + <i>λ</i>(2<i>i</i> + 3<i>j</i> + <i>k</i>) and the point (2, 1, 0).",
          "steps": [
            "<i>a</i> = (1, −1, 3), <i>b</i> = (2, 3, 1), <i>P</i> = (2, 1, 0), so the second in-plane vector is <i>P</i> − <i>a</i> = (1, 2, −3).",
            "Normal: <i>N</i> = <i>b</i> × (<i>P</i> − <i>a</i>) = (3(−3) − 1(2), 1(1) − 2(−3), 2(2) − 3(1)) = <b>(−11, 7, 1)</b>.",
            "Point-normal through <i>a</i>: −11(<i>x</i> − 1) + 7(<i>y</i> + 1) + (<i>z</i> − 3) = 0, that is −11<i>x</i> + 7<i>y</i> + <i>z</i> + 15 = 0.",
            "Tidy the signs and verify both: at (1, −1, 3), 11 + 7 − 3 = 15 ✓ and at (2, 1, 0), 22 − 7 − 0 = 15 ✓"
          ],
          "ans": "11<i>x</i> − 7<i>y</i> − <i>z</i> = 15"
        },
        {
          "t": "mcq",
          "q": "The plane through (1, 2, 3) parallel to the plane 2<i>x</i> − 3<i>y</i> + 4<i>z</i> = 10 is",
          "correct": 0,
          "opts": [
            { "label": "2x − 3y + 4z = 8", "nudge": null },
            { "label": "2x − 3y + 4z = 10", "nudge": "The given plane, repeated. Parallel planes do share a normal, but this one does not pass through (1, 2, 3): substituting gives 2 − 6 + 12 = 8, not 10." },
            { "label": "x + 2y + 3z = 14", "nudge": "This uses the <b>point</b> as the normal. The point says where; the coefficients of the parallel plane say which way. Never swap the two." },
            { "label": "2x − 3y + 4z = 0", "nudge": "Right normal, but the constant was dropped, which forces the plane through the origin instead of through (1, 2, 3)." }
          ],
          "solution": "Parallel planes share a normal, so use n = (2, −3, 4) with the point-normal form: 2(x − 1) − 3(y − 2) + 4(z − 3) = 0, which gives 2x − 3y + 4z = 2 − 6 + 12 = 8."
        },
        {
          "t": "mcq",
          "q": "Every plane of the family (<i>x</i> + <i>y</i> + <i>z</i> − 1) + <i>λ</i>(2<i>x</i> + <i>y</i> − <i>z</i> − 2) = 0 passes through",
          "correct": 0,
          "opts": [
            { "label": "(1, 0, 0)", "nudge": null },
            { "label": "the origin", "nudge": "At (0, 0, 0) the two expressions are −1 and −2, so the family gives −1 − 2<i>λ</i>. That is zero for one specific <i>λ</i>, namely −1/2, not for every <i>λ</i>." },
            { "label": "(0, 1, 0)", "nudge": "At (0, 1, 0) the first expression is 0 but the second is 1 − 2 = −1, so the family gives −<i>λ</i>. Zero only at <i>λ</i> = 0, which is the plane <i>P</i><sub>1</sub> alone, not the whole family." },
            { "label": "(1, 1, 1)", "nudge": "At (1, 1, 1) the first expression is 2 and the second is 0, so the family gives 2 for every <i>λ</i>. Never zero, so the point is on no member at all." }
          ],
          "solution": "A family P₁ + λP₂ = 0 passes, for all λ, through exactly the line where P₁ = 0 and P₂ = 0 meet, so the point must satisfy both original planes. At (1, 0, 0): 1 + 0 + 0 − 1 = 0 ✓ and 2 + 0 − 0 − 2 = 0 ✓. Every other option fails at least one of them."
        },
        {
          "t": "mcq",
          "q": "The normal to the plane containing two intersecting lines with directions <i>b</i><sub>1</sub> and <i>b</i><sub>2</sub> is along",
          "correct": 2,
          "opts": [
            { "label": "b<sub>1</sub> + b<sub>2</sub>", "nudge": "A sum of two in-plane vectors is itself in the plane, so it is perpendicular to the normal rather than parallel to it. It is in fact the direction of one angle bisector of the two lines." },
            { "label": "b<sub>1</sub> · b<sub>2</sub>", "nudge": "A dot product is a number, not a direction. It can tell you whether the two lines are perpendicular, but it cannot point anywhere." },
            { "label": "b<sub>1</sub> × b<sub>2</sub>", "nudge": null },
            { "label": "b<sub>1</sub> − b<sub>2</sub>", "nudge": "Also an in-plane combination, and the direction of the <b>other</b> angle bisector. Any sum or difference of the two directions stays inside the plane." }
          ],
          "solution": "Both directions lie in the plane, so the normal must be perpendicular to both, and that is exactly what the cross product delivers. The same move builds the plane through a line and a point, and the plane through two parallel lines, with a different second vector each time."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CUET] Find the plane through (1, 0, −2) with normal 2<i>i</i> − <i>j</i> + 3<i>k</i>.",
              "a": "2(<i>x</i> − 1) − (<i>y</i> − 0) + 3(<i>z</i> + 2) = 0, so <b>2<i>x</i> − <i>y</i> + 3<i>z</i> + 4 = 0</b>. Check the point: 2 − 0 − 6 + 4 = 0 ✓"
            },
            {
              "q": "[JEE Main] Find the intercepts of 3<i>x</i> − 2<i>y</i> + 6<i>z</i> = 12 and its distance from the origin.",
              "a": "Divide by 12: <i>x</i>/4 + <i>y</i>/(−6) + <i>z</i>/2 = 1, so intercepts <b>4, −6, 2</b>. Distance = |−12|/√(9 + 4 + 36) = <b>12/7</b>."
            },
            {
              "q": "[JEE Advanced] Find the plane through the line of intersection of <i>x</i> + <i>y</i> + <i>z</i> = 1 and 2<i>x</i> + 3<i>y</i> − <i>z</i> + 4 = 0 that is parallel to the <i>x</i>-axis.",
              "a": "Parallel to the <i>x</i>-axis means the <i>x</i>-coefficient vanishes: 1 + 2<i>λ</i> = 0, so <i>λ</i> = −1/2. Substituting gives −<i>y</i>/2 + 3<i>z</i>/2 − 3 = 0, and multiplying by −2 gives <b><i>y</i> − 3<i>z</i> + 6 = 0</b>."
            },
            {
              "q": "[JEE Main] Are (1, 2, 3), (3, 2, 1), (2, 3, 1) and (6, 0, 0) coplanar? If so, find the plane.",
              "a": "From <i>A</i>(1,2,3): <i>AB</i> = (2, 0, −2), <i>AC</i> = (1, 1, −2), <i>AD</i> = (5, −2, −3). <i>AB</i> × <i>AC</i> = (2, 2, 2), and (2,2,2)·(5,−2,−3) = 10 − 4 − 6 = <b>0</b>, so yes. Plane: <b><i>x</i> + <i>y</i> + <i>z</i> = 6</b>, and all four points sum to 6 ✓"
            },
            {
              "q": "[JEE Advanced] Find <i>k</i> so that (1,0,0), (0,1,0), (0,0,1) and (1,1,<i>k</i>) are coplanar.",
              "a": "From <i>A</i>(1,0,0): <i>AB</i> = (−1,1,0), <i>AC</i> = (−1,0,1), <i>AD</i> = (0,1,<i>k</i>). <i>AB</i> × <i>AC</i> = (1,1,1), so the triple product is 0 + 1 + <i>k</i> = 1 + <i>k</i> and <b><i>k</i> = −1</b>. Equivalently, <i>D</i> must lie on <i>x</i> + <i>y</i> + <i>z</i> = 1."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "Swapping the point and the normal. In <i>a</i>(<i>x</i> − <i>x</i><sub>1</sub>) + <i>b</i>(<i>y</i> − <i>y</i><sub>1</sub>) + <i>c</i>(<i>z</i> − <i>z</i><sub>1</sub>) = 0 the coefficients are the <b>normal</b> and the subtracted numbers are the <b>point</b>. Reversing them produces a perfectly valid-looking plane that is simply the wrong one.",
            "Crossing the wrong pair of vectors for “the plane through …”. Two intersecting lines give <i>b</i><sub>1</sub> × <i>b</i><sub>2</sub>; two <b>parallel</b> lines give <i>b</i> × (<i>a</i><sub>2</sub> − <i>a</i><sub>1</sub>), because crossing two proportional directions gives the zero vector.",
            "Solving for the intersection line in a family problem. You never need it. Write <i>P</i><sub>1</sub> + <i>λP</i><sub>2</sub> = 0, impose the one extra condition, and stop.",
            "Forgetting that the family misses <i>P</i><sub>2</sub>. No finite <i>λ</i> reproduces the second plane, so if the working leads nowhere, try the symmetric form <i>μP</i><sub>1</sub> + <i>P</i><sub>2</sub> = 0.",
            "Reading <i>d</i> in <i>ax</i> + <i>by</i> + <i>cz</i> = <i>d</i> as a distance from the origin. It is a distance only after dividing by |<i>n</i>|, which is exactly what the normal form does."
          ]
        },
        {
          "t": "protip",
          "html": "almost every plane question is really the question “what is the normal”. forms come from a normal, the plane-to-plane angle is the normal-to-normal angle, and every distance divides by the normal’s length. so read the data, ask what two vectors you can find that lie <b>in</b> the target plane, cross them, and the rest is bookkeeping. even the family method is a disguised search for the right normal among a one-parameter pencil of them."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "a(x−x₁) + b(y−y₁) + c(z−z₁) = 0", "note": "the point-normal form. (a, b, c) is the normal" },
            { "f": "normal from three points = (b−a) × (c−a)", "note": "two in-plane edges, one cross product" },
            { "f": "x/a + y/b + z/c = 1", "note": "intercept form. from Ax+By+Cz=D the intercepts are D/A, D/B, D/C" },
            { "f": "r · n̂ = p, n̂ unit, p ≥ 0", "note": "only here does the constant equal the distance from O" },
            { "f": "(AB × AC) · AD = 0", "note": "four points coplanar. same triple product as two-line coplanarity" },
            { "f": "P₁ + λP₂ = 0", "note": "one free parameter, so exactly one extra condition. misses P₂" }
          ],
          "aids": [
            "“a point and a normal make a plane”",
            "“plane through anything equals a cross product”",
            "“family first, the line never”"
          ]
        }
      ]
    },
    {
      "n": "04",
      "title": "Angles and Distances Once a Plane Is Involved",
      "chip": "04 ANGLE, GAP",
      "kalam": "plane to plane cosine, line to plane sine",
      "blocks": [
        {
          "t": "p",
          "html": "A plane is handled through its normal, and once you accept that, this whole topic collapses into two sentences. The angle between two planes is the angle between their normals. The distance from a point to a plane is measured along the normal. There is exactly one place where that reflex misfires, and it is the single most expensive one-mark loss in the chapter: the angle between a <b>line</b> and a plane."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · ANGLE BETWEEN TWO PLANES",
          "tag": "cosine, because two normals are two arrows",
          "main": "cos θ = |n<sub>1</sub> · n<sub>2</sub>| / (|n<sub>1</sub>| |n<sub>2</sub>|)",
          "legend": [
            "<i>n</i><sub>1</sub>, <i>n</i><sub>2</sub> are the two normals, read straight off the coefficients of <i>x</i>, <i>y</i>, <i>z</i>",
            "parallel planes: <i>n</i><sub>1</sub> ∥ <i>n</i><sub>2</sub>, that is, the coefficients are proportional",
            "perpendicular planes: <i>n</i><sub>1</sub> · <i>n</i><sub>2</sub> = 0, exactly as for two lines"
          ],
          "note": "The proof is a rotation. Draw, inside each plane, the ray perpendicular to their line of intersection; the angle between those two rays is the dihedral angle. Rotate each ray 90° inside its own plane and each becomes that plane's normal, and rotating both arms of an angle equally does not change it."
        },
        {
          "t": "p",
          "html": "Now the line. When a line meets a plane the angle we care about is measured against the <b>surface</b>, not against the normal, and the normal sticks up at 90° to the surface. So if <i>α</i> is the angle between the line and the normal, the angle we want is its complement, 90° − <i>α</i>. The cosine of a complement is a sine. That is the entire content of the trap: the formula looks identical to the plane-plane one and answers a different question."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · ANGLE BETWEEN A LINE AND A PLANE",
          "tag": "sine, not cosine",
          "main": "sin φ = |b · n| / (|b| |n|)",
          "legend": [
            "<i>b</i> is the line’s direction, <i>n</i> is the plane’s normal, and <i>φ</i> is measured from the line to the <b>surface</b>",
            "<i>φ</i> = 0 means the line is parallel to the plane or lies in it, which is the condition <i>b</i> · <i>n</i> = 0",
            "<i>φ</i> = 90° means the line is perpendicular to the plane, which is <i>b</i> ∥ <i>n</i>"
          ],
          "note": "Built-in safeguard: a sine cannot exceed 1. If your value does, you divided by only one of the two magnitudes. If your value is right but you wrote cos inverse, you reported the angle with the normal and are off by exactly 90°."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY THE LINE CASE FLIPS TO SINE, TAP A LINE",
          "steps": [
            {
              "eq": "the plane is steered by n, so the only angle a dot product can reach is the one with n",
              "why": "A plane equation contains its normal and nothing else about orientation. Any formula you write from the equation is therefore a statement about the normal, and the dot product of the line direction with the normal is the only scale-free quantity available."
            },
            {
              "eq": "cos α = |b · n| / (|b| |n|), where α is the angle from the line to the normal",
              "why": "This is just the angle-between-two-lines formula applied to the line and the normal, treating the normal as a line through the point of intersection. The modulus keeps it acute, since the normal can be written either way round."
            },
            {
              "eq": "φ = 90° − α, because the surface is 90° from the normal",
              "why": "Stand at the point where the line pierces the plane. The normal rises at a right angle to the surface, so the angle the line makes with the surface and the angle it makes with the normal must add to a right angle. There is no choice about this; it is the definition of a normal."
            },
            {
              "eq": "sin φ = sin(90° − α) = cos α = |b · n| / (|b| |n|)",
              "why": "The complement identity does the rest. Note what stays the same: the numerator and the denominator are identical to the plane-plane case. Only the trigonometric function on the left changes, which is exactly why the trap is so easy to fall into and so cheap to avoid."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "axes3d",
          "kicker": "FIGURE · WHERE EACH ANGLE AND GAP IS MEASURED, TAP ONE",
          "chips": ["two planes", "a line and a plane", "how far to a plane"],
          "captions": [
            "Two planes, each with an amber arrow leaving its surface along its own normal. The planes meet in a line, and the angle you would measure between the two sheets is the same as the angle between the two arrows, because rotating both arms of an angle by 90 degrees leaves the angle alone. That is why every plane-plane question reduces to a dot product of coefficients.",
            "A line piercing a plane, with the normal drawn at the same point. Two different angles are visible: the one between the line and the amber normal, and the one between the line and the surface itself. They add to 90 degrees, and the question always asks for the second while the dot product always delivers the first. Hence sine.",
            "A point P off the plane, with the perpendicular dropped from it to the surface. That perpendicular runs along the normal, which is why the distance is the plane expression evaluated at P and then divided by the length of the normal. Any other route from P to the plane is longer, so this one segment is what distance means."
          ],
          "frames": [
            {
              "axes3d": {
                "planes": [
                  { "normal": [3, 1, 1], "d": 2.2, "soft": true },
                  { "normal": [1, 1, 3], "d": 2.2, "soft": true }
                ],
                "vectors": [
                  { "from": [0.6, 0.2, 0.2], "to": [1.5, 0.5, 0.5], "label": "n1" },
                  { "from": [0.2, 0.2, 0.6], "to": [0.5, 0.5, 1.5], "label": "n2" }
                ]
              }
            },
            {
              "axes3d": {
                "planes": [{ "normal": [1, 1, 1], "d": 2.4, "label": "π" }],
                "lines": [{ "through": [0.8, 0.8, 0.8], "dir": [0.35, 0.15, 0.5], "label": "L" }],
                "vectors": [{ "from": [0.8, 0.8, 0.8], "to": [1.6, 1.6, 1.6], "label": "n" }]
              }
            },
            {
              "axes3d": {
                "planes": [{ "normal": [1, 1, 1], "d": 1.2, "label": "π" }],
                "vectors": [
                  { "to": [1.6, 1.6, 1.6], "label": "P", "soft": true },
                  { "from": [1.6, 1.6, 1.6], "to": [0.4, 0.4, 0.4], "label": "D" }
                ]
              }
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · DISTANCE FROM A POINT TO A PLANE",
          "tag": "plane expression at the point, over |n|",
          "main": "D = |ax<sub>1</sub> + by<sub>1</sub> + cz<sub>1</sub> + d| / √(a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup>)",
          "legend": [
            "the plane must first be written with <b>everything on one side</b>, as <i>ax</i> + <i>by</i> + <i>cz</i> + <i>d</i> = 0. A constant left on the right flips a sign",
            "feed the point into the plane expression, take the modulus, divide by the length of the normal. Nothing else",
            "the distance from the <b>origin</b> is the special case |<i>d</i>|/|<i>n</i>|, which is the <i>p</i> of the normal form"
          ],
          "note": "Denominator |n|, not |n| squared. That distinction returns in topic 05 as the difference between the distance and the step parameter t, and it is worth one mark every time it appears."
        },
        {
          "t": "p",
          "html": "Before you take the modulus, the <b>sign</b> of <i>ax</i><sub>1</sub> + <i>by</i><sub>1</sub> + <i>cz</i><sub>1</sub> + <i>d</i> is telling you which side of the plane the point is on, and that fact solves a whole class of problems for free. Evaluate the expression at two points: same sign means same side, opposite signs mean the plane <b>separates</b> them and the segment joining them is cut by the plane. No extra computation beyond the distance you were already doing."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · DISTANCE BETWEEN PARALLEL PLANES",
          "tag": "match the normals first",
          "main": "ax + by + cz + d<sub>1</sub> = 0, ax + by + cz + d<sub>2</sub> = 0 <br> D = |d<sub>1</sub> − d<sub>2</sub>| / √(a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup>)",
          "legend": [
            "the two planes must carry <b>identical</b> normal coefficients before you compare the constants, so scale one of them first",
            "2<i>x</i> − <i>y</i> + 2<i>z</i> = 6 and 4<i>x</i> − 2<i>y</i> + 4<i>z</i> = 9 are parallel, but you must halve the second to 2<i>x</i> − <i>y</i> + 2<i>z</i> = 4.5 before subtracting",
            "it is the point formula in disguise: take any point of one plane and measure it against the other"
          ],
          "note": "Comparing the raw constants of un-scaled planes gives a number with no geometric meaning at all. Halving the second plane above changes 9 to 4.5, and the gap from 1 to 1/2."
        },
        {
          "t": "defgrid",
          "title": "Which pair, which measurement",
          "rows": [
            { "k": "Line and line", "v": "cos <i>θ</i> = |<i>b</i><sub>1</sub> · <i>b</i><sub>2</sub>| / (|<i>b</i><sub>1</sub>||<i>b</i><sub>2</sub>|). <b>Cosine</b>, two directions" },
            { "k": "Plane and plane", "v": "cos <i>θ</i> = |<i>n</i><sub>1</sub> · <i>n</i><sub>2</sub>| / (|<i>n</i><sub>1</sub>||<i>n</i><sub>2</sub>|). <b>Cosine</b>, two normals" },
            { "k": "Line and plane", "v": "sin <i>φ</i> = |<i>b</i> · <i>n</i>| / (|<i>b</i>||<i>n</i>|). <b>Sine</b>, because the surface is 90° from the normal" },
            { "k": "Point and plane", "v": "|plane expression at the point| ÷ |<i>n</i>|" },
            { "k": "Parallel planes", "v": "|<i>d</i><sub>1</sub> − <i>d</i><sub>2</sub>| ÷ |<i>n</i>|, after matching the normals" },
            { "k": "Equidistant from two planes", "v": "<i>P</i><sub>1</sub>/|<i>n</i><sub>1</sub>| = ±<i>P</i><sub>2</sub>/|<i>n</i><sub>2</sub>|, the two bisector planes" }
          ]
        },
        {
          "t": "think",
          "html": "two surfaces compare like two arrows, so cosine. a line piercing a surface is measured against the flat, and the flat is a quarter turn from the arrow, so cosine flips to sine. say it once as “plane to plane cosine, line to plane sine” and it will not desert you in the exam hall."
        },
        {
          "t": "p",
          "html": "Two intersecting planes make a pair of angles, exactly like two crossing lines in 2D, and there are two planes that bisect them. A point lies on a bisector when it is <b>equidistant</b> from the two planes. So write each distance, drop the modulus in favour of a ±, and set them equal. The one non-negotiable step is dividing each plane expression by the length of its own normal first: skip it and you still get a plane through the intersection line, but not one that bisects anything."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE TWO ANGLE-BISECTOR PLANES",
          "tag": "normalise, then equate with a ±",
          "main": "P<sub>1</sub> / |n<sub>1</sub>| = ± P<sub>2</sub> / |n<sub>2</sub>|",
          "legend": [
            "<i>P</i><sub>1</sub> and <i>P</i><sub>2</sub> are the two plane expressions, each written with everything on one side",
            "the two signs give two planes, and they are always <b>perpendicular to each other</b>, because they bisect the two supplementary angles",
            "both are valid answers; a question that wants one of them will say which"
          ],
          "note": "Equating the raw expressions P₁ = ±P₂ is only correct when the two normals happen to have equal lengths. Otherwise it is a member of the family, not a bisector."
        },
        {
          "t": "proc",
          "title": "Pick out the acute-angle bisector",
          "steps": [
            "<b>Compute both bisectors from the ±.</b> There is no shortcut past this: you cannot tell from the signs of the constants which branch will turn out to be the acute one.",
            "<b>Take one original plane and one bisector.</b> Find the angle between their normals with the usual cosine formula.",
            "<b>The bisector making the smaller angle with that original plane is the acute-angle bisector.</b> Equivalently, if the angle comes out less than 45°, that bisector bisects the acute angle.",
            "<b>Sanity-check the pair.</b> The two bisector normals must have zero dot product. If they do not, one of the two expansions has an arithmetic slip.",
            "<b>Never assume the plus sign gives the acute one.</b> Which branch is acute depends on the signs of <i>d</i><sub>1</sub> and <i>d</i><sub>2</sub>, and examiners choose them to punish the assumption."
          ]
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "Find the angle between the planes 2<i>x</i> − <i>y</i> + 2<i>z</i> = 5 and 3<i>x</i> + 6<i>y</i> − 2<i>z</i> = 7.",
          "steps": [
            "Normals straight off the coefficients: <i>n</i><sub>1</sub> = (2, −1, 2) and <i>n</i><sub>2</sub> = (3, 6, −2). The constants play no part in an angle.",
            "Dot product: 6 − 6 − 4 = −4.",
            "Magnitudes: |<i>n</i><sub>1</sub>| = √(4 + 1 + 4) = 3 and |<i>n</i><sub>2</sub>| = √(9 + 36 + 4) = 7.",
            "cos <i>θ</i> = |−4|/(3 · 7) = 4/21. Two surfaces, so cosine."
          ],
          "ans": "<i>θ</i> = cos<sup>−1</sup>(4/21)"
        },
        {
          "t": "ex",
          "tag": "CUET / JEE MAIN SPEED TRAP",
          "q": "Find the angle between the line (<i>x</i> − 1)/2 = <i>y</i>/(−1) = (<i>z</i> + 2)/2 and the plane 3<i>x</i> − 6<i>y</i> + 2<i>z</i> = 7.",
          "steps": [
            "Direction <i>b</i> = (2, −1, 2); normal <i>n</i> = (3, −6, 2).",
            "<i>b</i> · <i>n</i> = 6 + 6 + 4 = 16, with |<i>b</i>| = 3 and |<i>n</i>| = 7.",
            "A <b>line</b> and a <b>plane</b>, so sine: sin <i>φ</i> = 16/21.",
            "Check that 16/21 is less than 1, as any genuine sine must be. Writing cos<sup>−1</sup>(16/21) instead would report the angle with the normal, off by exactly 90°."
          ],
          "ans": "<i>φ</i> = sin<sup>−1</sup>(16/21)"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "Find the distance between the parallel planes 2<i>x</i> − <i>y</i> + 2<i>z</i> = 6 and 4<i>x</i> − 2<i>y</i> + 4<i>z</i> = 9.",
          "steps": [
            "Confirm they are parallel: (4, −2, 4) = 2(2, −1, 2), so the normals are proportional ✓",
            "Scale the second to match the first: divide it by 2 to get 2<i>x</i> − <i>y</i> + 2<i>z</i> = 4.5.",
            "In the form <i>ax</i> + <i>by</i> + <i>cz</i> + <i>d</i> = 0 the constants are <i>d</i><sub>1</sub> = −6 and <i>d</i><sub>2</sub> = −4.5, so |<i>d</i><sub>1</sub> − <i>d</i><sub>2</sub>| = 1.5.",
            "Divide by |<i>n</i>| = 3: the gap is 1.5/3 = 1/2. Skipping the scaling step would have given |6 − 9|/3 = 1, which is wrong by a factor of two."
          ],
          "ans": "1/2 unit"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "Find the planes bisecting the angles between 2<i>x</i> − <i>y</i> + 2<i>z</i> + 3 = 0 and 3<i>x</i> − 2<i>y</i> + 6<i>z</i> − 8 = 0.",
          "steps": [
            "|<i>n</i><sub>1</sub>| = √(4 + 1 + 4) = 3 and |<i>n</i><sub>2</sub>| = √(9 + 4 + 36) = 7, so the condition is (2<i>x</i> − <i>y</i> + 2<i>z</i> + 3)/3 = ±(3<i>x</i> − 2<i>y</i> + 6<i>z</i> − 8)/7.",
            "Cross-multiplying: 7(2<i>x</i> − <i>y</i> + 2<i>z</i> + 3) = ±3(3<i>x</i> − 2<i>y</i> + 6<i>z</i> − 8).",
            "Plus: 14<i>x</i> − 7<i>y</i> + 14<i>z</i> + 21 = 9<i>x</i> − 6<i>y</i> + 18<i>z</i> − 24, giving 5<i>x</i> − <i>y</i> − 4<i>z</i> + 45 = 0.",
            "Minus: 14<i>x</i> − 7<i>y</i> + 14<i>z</i> + 21 = −9<i>x</i> + 6<i>y</i> − 18<i>z</i> + 24, giving 23<i>x</i> − 13<i>y</i> + 32<i>z</i> − 3 = 0. Check they are perpendicular: 115 + 13 − 128 = 0 ✓"
          ],
          "ans": "5<i>x</i> − <i>y</i> − 4<i>z</i> + 45 = 0 and 23<i>x</i> − 13<i>y</i> + 32<i>z</i> − 3 = 0"
        },
        {
          "t": "mcq",
          "q": "The angle between <i>r</i> = (<i>i</i> + <i>j</i>) + <i>λ</i>(2<i>i</i> + 2<i>j</i> + <i>k</i>) and the plane <i>x</i> + 2<i>y</i> + 2<i>z</i> = 5 is",
          "correct": 0,
          "opts": [
            { "label": "sin<sup>−1</sup>(8/9)", "nudge": null },
            { "label": "cos<sup>−1</sup>(8/9)", "nudge": "This is the angle the line makes with the <b>normal</b>, not with the plane. The two are complements, so this answer is off by exactly 90°. It is the most common single-mark loss in the chapter." },
            { "label": "sin<sup>−1</sup>(8/3)", "nudge": "Only one magnitude reached the denominator. A sine cannot exceed 1, so the answer flags itself as impossible the moment you write it down." },
            { "label": "90° − sin<sup>−1</sup>(8/9)", "nudge": "The complement applied a second time, which lands you back on the angle with the normal. One complement, not two: the formula already has the flip built in." }
          ],
          "solution": "b = (2, 2, 1) and n = (1, 2, 2), so b · n = 2 + 4 + 2 = 8, and |b| = |n| = 3. A line and a plane, so sine: sin φ = 8/9."
        },
        {
          "t": "mcq",
          "q": "The distance of (3, −2, 1) from the plane 2<i>x</i> − 2<i>y</i> + <i>z</i> + 3 = 0 is",
          "correct": 0,
          "opts": [
            { "label": "14/3", "nudge": null },
            { "label": "14", "nudge": "That is the numerator alone. The plane expression at the point is not a distance until it is divided by the length of the normal, here 3." },
            { "label": "2", "nudge": "This mishandles the sign on the <i>y</i>-term: −2 × (−2) is +4, not −4. Getting 6 in the numerator instead of 14 is a double-negative slip, not a formula error." },
            { "label": "14/9", "nudge": "Divided by |<i>n</i>|<sup>2</sup> = 9 instead of |<i>n</i>| = 3. That quantity is the step parameter <i>t</i> of topic 05, not the distance; they differ by a factor of |<i>n</i>|." }
          ],
          "solution": "2(3) − 2(−2) + 1 + 3 = 6 + 4 + 1 + 3 = 14, and |n| = √(4 + 4 + 1) = 3. Distance = 14/3. Watch the double negative in the y-term, which is where this question is actually won or lost."
        },
        {
          "t": "mcq",
          "q": "The angle-bisector planes of <i>P</i><sub>1</sub> = 0 and <i>P</i><sub>2</sub> = 0, with normals <i>n</i><sub>1</sub> and <i>n</i><sub>2</sub>, are",
          "correct": 2,
          "opts": [
            { "label": "P<sub>1</sub> = P<sub>2</sub>", "nudge": "Correct only in the special case |<i>n</i><sub>1</sub>| = |<i>n</i><sub>2</sub>|. In general it gives a plane through the intersection line that does not bisect the angle, because the two expressions are measured in different units of length." },
            { "label": "P<sub>1</sub> + P<sub>2</sub> = 0", "nudge": "One specific member of the family <i>P</i><sub>1</sub> + <i>λP</i><sub>2</sub> = 0, namely <i>λ</i> = 1. Every member passes through the intersection line, but almost none of them bisect." },
            { "label": "P<sub>1</sub>/|n<sub>1</sub>| = ± P<sub>2</sub>/|n<sub>2</sub>|", "nudge": null },
            { "label": "P<sub>1</sub>P<sub>2</sub> = 0", "nudge": "This is the pair of original planes themselves, since a product vanishes when either factor does. It describes the two surfaces you started with, not the bisectors." }
          ],
          "solution": "A bisector is the locus of points equidistant from both planes. The signed distance from Pᵢ = 0 is Pᵢ divided by |nᵢ|, so equating the magnitudes gives the ± pair. Skipping the normalisation is the single most common slip on this question."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[JEE Main] Find the angle between the planes <i>x</i> + 2<i>y</i> + 2<i>z</i> = 5 and 2<i>x</i> + <i>y</i> + 2<i>z</i> = 7.",
              "a": "<i>n</i><sub>1</sub> · <i>n</i><sub>2</sub> = 2 + 2 + 4 = 8, both magnitudes 3. cos <i>θ</i> = <b>8/9</b>. Same numbers as the line-plane MCQ above, and a different function on the left: that contrast is the whole lesson."
            },
            {
              "q": "[JEE Main] How far is the origin from the plane <i>x</i> + 2<i>y</i> + 2<i>z</i> − 9 = 0, and what is the locus of points 2 units from it?",
              "a": "Distance = |−9|/3 = <b>3</b>. For distance 2, |<i>x</i> + 2<i>y</i> + 2<i>z</i> − 9|/3 = 2 splits into <b><i>x</i> + 2<i>y</i> + 2<i>z</i> = 15</b> and <b><i>x</i> + 2<i>y</i> + 2<i>z</i> = 3</b>: two parallel planes, one on each side."
            },
            {
              "q": "[JEE Main] Do (1, 1, 1) and (0, 0, 0) lie on the same side of 2<i>x</i> − 3<i>y</i> + 5<i>z</i> − 1 = 0?",
              "a": "At (1,1,1): 2 − 3 + 5 − 1 = 3, positive. At the origin: −1, negative. Opposite signs, so the plane <b>separates</b> them and the segment joining them is cut by it. No distance computation needed."
            },
            {
              "q": "[JEE Advanced] Find the planes bisecting the angles between <i>x</i> + 2<i>y</i> + 2<i>z</i> − 9 = 0 and 4<i>x</i> − 3<i>y</i> + 12<i>z</i> + 13 = 0.",
              "a": "|<i>n</i><sub>1</sub>| = 3, |<i>n</i><sub>2</sub>| = 13, so 13(<i>x</i> + 2<i>y</i> + 2<i>z</i> − 9) = ±3(4<i>x</i> − 3<i>y</i> + 12<i>z</i> + 13). Plus gives <b><i>x</i> + 35<i>y</i> − 10<i>z</i> = 156</b>; minus gives <b>25<i>x</i> + 17<i>y</i> + 62<i>z</i> = 78</b>."
            },
            {
              "q": "[JEE Advanced] A plane bisects the angle between 2<i>x</i> − <i>y</i> + 2<i>z</i> − 4 = 0 and <i>x</i> + 2<i>y</i> + 2<i>z</i> − 2 = 0. Show that (2, −4, 1) lies on one of them.",
              "a": "Both normals have length 3, so the bisectors are 2<i>x</i> − <i>y</i> + 2<i>z</i> − 4 = ±(<i>x</i> + 2<i>y</i> + 2<i>z</i> − 2). Plus gives <i>x</i> − 3<i>y</i> − 2 = 0; minus gives 3<i>x</i> + <i>y</i> + 4<i>z</i> − 6 = 0. At (2, −4, 1) the second reads 6 − 4 + 4 − 6 = <b>0</b> ✓"
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "Using cosine for a line and a plane. The line-plane angle is the <b>complement</b> of the line-normal angle, so it uses <b>sine</b>. Same numerator, same denominator, different function: that is why the wrong answer looks so plausible.",
            "Comparing un-scaled parallel planes. 2<i>x</i> − <i>y</i> + 2<i>z</i> = 6 and 4<i>x</i> − 2<i>y</i> + 4<i>z</i> = 9 need matching normals before their constants can be subtracted, or the answer is out by the scale factor.",
            "Dividing the point-plane distance by |<i>n</i>|<sup>2</sup>. The denominator is √(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> + <i>c</i><sup>2</sup>), not the sum of squares itself.",
            "Bisecting without normalising. <i>P</i><sub>1</sub> = ±<i>P</i><sub>2</sub> gives a plane through the intersection line, not an angle bisector, unless the two normals happen to have equal length.",
            "Reporting only one bisector. The ± yields <b>two</b> mutually perpendicular planes and both are valid answers, unless the question names which angle it wants."
          ]
        },
        {
          "t": "protip",
          "html": "before writing any angle formula, name the two objects out loud. two planes? cosine. a line and a plane? sine. a line and a line? cosine. that half-second of naming costs nothing and defends the one mark this chapter loses most often. and for distances, remember which denominator you are in: <b>|<i>n</i>| for a length, |<i>n</i>|<sup>2</sup> for a step</b>. the numerator is the same either way, which is exactly why the two get swapped."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "plane, plane: cos θ = |n₁ · n₂| / (|n₁||n₂|)", "note": "two normals, so cosine" },
            { "f": "line, plane: sin φ = |b · n| / (|b||n|)", "note": "same fraction, sine. the surface is 90° from n" },
            { "f": "D = |ax₁ + by₁ + cz₁ + d| / √(a² + b² + c²)", "note": "write the plane as = 0 first. denominator |n|, not |n|²" },
            { "f": "sign of ax₁ + by₁ + cz₁ + d", "note": "same sign, same side. opposite signs, the plane separates them" },
            { "f": "parallel planes: |d₁ − d₂| / |n|", "note": "match the normals before subtracting the constants" },
            { "f": "bisectors: P₁/|n₁| = ± P₂/|n₂|", "note": "two planes, mutually perpendicular. normalise first" }
          ],
          "aids": [
            "“plane to plane cosine, line to plane sine”",
            "“t over |n| squared, distance over |n|”",
            "“bisect means normalise, then plus or minus”"
          ]
        }
      ]
    },
    {
      "n": "05",
      "title": "The Perpendicular Toolkit: Feet, Distances, Images",
      "chip": "05 PERPENDICULAR",
      "kalam": "one drawing, three answers",
      "blocks": [
        {
          "t": "p",
          "html": "Almost every question in this chapter with the word <b>shortest</b>, <b>nearest</b>, <b>foot</b> or <b>image</b> in it is the same physical act: stand at a point <i>P</i> off to one side and drop a perpendicular onto a line or a plane. Three things appear the instant you do. The <b>foot</b> <i>F</i>, where the perpendicular lands. The <b>distance</b>, the length <i>PF</i>. And the <b>image</b> <i>P</i>′, found by continuing the perpendicular an equal distance through to the other side."
        },
        {
          "t": "p",
          "html": "Those are not three topics, they are three readings of one drawing. Find <i>F</i> and you immediately have the distance, |<i>PF</i>|, and the image, <i>P</i>′ = 2<i>F</i> − <i>P</i>, because <i>F</i> is the midpoint of <i>P</i> and its reflection. Which of the three a question asks for is almost cosmetic. A dozen differently worded problems collapse to one routine, which is why practice compounds so fast here and why examiners can ask any of them with equal ease."
        },
        {
          "t": "think",
          "html": "the dot product hands you the <b>shadow along</b> the line, which gives the foot. the cross product hands you the <b>height above</b> the line, which gives the distance. two products, two legs of the same right triangle. and for a plane you need neither, because the perpendicular direction is gift-wrapped as the normal."
        },
        {
          "t": "diagram",
          "kind": "axes3d",
          "kicker": "FIGURE · THE SAME CONSTRUCTION TWICE, TAP ONE",
          "chips": ["foot on a line", "foot on a plane", "and the image"],
          "captions": [
            "A line L and an external point P, with the perpendicular from P landing at the foot F. The grey arrow is the position vector of P, drawn only so you can see where P is. The amber segment is what the question is really about, and it meets the line at a right angle: that right angle is the one equation you solve to find F, since the vector from P to a general point of the line is perpendicular to the direction only at the foot.",
            "The same picture with the line replaced by a plane. Nothing about the construction changes except how you find the direction to travel: for a line you had to extract the perpendicular direction yourself, but a plane hands it to you as its normal. So the entire job becomes one number, how many normals away the plane is.",
            "The perpendicular continued through the plane by the same amount again, landing at the image P prime. F is now visibly the midpoint of P and P prime, which is the whole content of the identity image equals twice the foot minus the point. It holds for reflection in a line too, with exactly the same picture and a different foot."
          ],
          "frames": [
            {
              "axes3d": {
                "lines": [{ "through": [1.6, 1.6, 0.6], "dir": [0.65, 0.65, 0], "label": "L" }],
                "vectors": [
                  { "to": [2.1, 1.1, 1.6], "label": "P", "soft": true },
                  { "from": [2.1, 1.1, 1.6], "to": [1.6, 1.6, 0.6], "label": "F" }
                ]
              }
            },
            {
              "axes3d": {
                "planes": [{ "normal": [1, 1, 1], "d": 1.2, "label": "π" }],
                "vectors": [
                  { "to": [2, 2, 2], "label": "P", "soft": true },
                  { "from": [2, 2, 2], "to": [0.4, 0.4, 0.4], "label": "F" }
                ]
              }
            },
            {
              "axes3d": {
                "planes": [{ "normal": [1, 1, 1], "d": 1.2, "label": "π" }],
                "vectors": [
                  { "to": [2, 2, 2], "label": "P", "soft": true },
                  { "from": [2, 2, 2], "to": [0.4, 0.4, 0.4], "label": "F" },
                  { "from": [0.4, 0.4, 0.4], "to": [-1.2, -1.2, -1.2], "label": "P'" }
                ]
              }
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · POINT TO A LINE",
          "tag": "dot for the foot, cross for the gap",
          "main": "λ<sub>0</sub> = (AP · b) / |b|<sup>2</sup> , F = a + λ<sub>0</sub>b <br> PF = |AP × b| / |b|",
          "legend": [
            "the line is <i>r</i> = <i>a</i> + <i>λb</i>, the external point is <i>P</i>, and <i>AP</i> = <i>P</i> − <i>a</i> is the arrow from the line’s known point out to <i>P</i>",
            "the foot divides <i>AP</i> into a part along the line and a part across it; <i>λ</i><sub>0</sub> measures the along-part, the cross product measures the across-part",
            "image: <b><i>P</i>′ = 2<i>F</i> − <i>P</i></b>, because <i>F</i> is the midpoint of <i>P</i> and <i>P</i>′"
          ],
          "note": "Denominator |b| in the distance, not |b| squared. The cross product already carries one factor of |b|, so you cancel exactly one, never two."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHERE THE FOOT PARAMETER COMES FROM, TAP A LINE",
          "steps": [
            {
              "eq": "a general point of the line is a + λb, so FP = AP − λb",
              "why": "Every point of the line is reached by starting at the known point a and walking some multiple of the direction. The vector from that moving point to P is then the fixed arrow AP minus however far you have walked. One unknown, λ, and one condition to pin it down."
            },
            {
              "eq": "the foot is where this is perpendicular to the line: (AP − λb) · b = 0",
              "why": "Of all the points on the line, the nearest to P is the one where the joining segment meets the line at a right angle. Anywhere else you could slide along the line and shorten the segment. Perpendicular is a zero dot product, so the geometry becomes one linear equation."
            },
            {
              "eq": "AP · b − λ|b|² = 0, so λ₀ = (AP · b) / |b|²",
              "why": "Expanding the bracket and using b · b = |b| squared. The denominator is the square because you are solving for a scalar multiple of b, not for a length: λ₀ counts copies of b, and b need not be a unit vector."
            },
            {
              "eq": "the leftover AP − λ₀b has length |AP| sin θ = |AP × b| / |b|",
              "why": "What is left after removing the along-component points straight out from the line to P, and its length is the perpendicular distance. The cross product magnitude is |AP||b| sin θ, so dividing by |b| once isolates exactly |AP| sin θ. That is the second formula, obtained without ever locating F."
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · POINT TO A PLANE",
          "tag": "one number t does all three jobs",
          "main": "t = (ax<sub>1</sub> + by<sub>1</sub> + cz<sub>1</sub> + d) / (a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup>) <br> F = P − t n , P′ = P − 2t n",
          "legend": [
            "<i>t</i> answers “how many copies of the normal must I lay end to end, starting at <i>P</i>, to reach the plane”",
            "the foot is <i>P</i> minus that many normals; the image is <i>P</i> minus <b>twice</b> that many, overshooting symmetrically",
            "the distance is |<i>t</i>| |<i>n</i>|, which is the topic 04 formula with denominator |<i>n</i>| rather than |<i>n</i>|<sup>2</sup>"
          ],
          "note": "The sign of t locates the side: positive means P sits where the plane expression is positive, and the corrective step −t n then moves P towards the plane, exactly as it must. t = 0 means P is already on it."
        },
        {
          "t": "defgrid",
          "title": "Dropping onto a line, dropping onto a plane",
          "rows": [
            { "k": "Perpendicular direction", "v": "line: you must <b>extract</b> it from <i>AP</i>. plane: it is handed to you as <i>n</i>" },
            { "k": "Foot", "v": "line: <i>a</i> + <i>λ</i><sub>0</sub><i>b</i> with <i>λ</i><sub>0</sub> = (<i>AP</i>·<i>b</i>)/|<i>b</i>|<sup>2</sup>. plane: <i>P</i> − <i>t n</i>" },
            { "k": "Distance", "v": "line: |<i>AP</i> × <i>b</i>|/|<i>b</i>|. plane: |plane expression|/|<i>n</i>|" },
            { "k": "Image", "v": "<b>2<i>F</i> − <i>P</i></b> in both cases, because <i>F</i> is the midpoint either way" },
            { "k": "Tools needed", "v": "line: a dot <b>and</b> a cross. plane: neither, just the single scalar <i>t</i>" },
            { "k": "If <i>P</i> is already on it", "v": "<i>λ</i><sub>0</sub> lands on <i>P</i>, or <i>t</i> = 0. Distance 0, foot <i>P</i>, image <i>P</i>. No special case needed" }
          ]
        },
        {
          "t": "proc",
          "title": "One foot, three answers",
          "steps": [
            "<b>Read the question for which of the three it wants, then ignore the answer and find the foot anyway.</b> The only exception is a bare “find the distance from a point to a line”, where the cross product route skips <i>F</i> entirely and is faster.",
            "<b>For a line: compute <i>AP</i> = <i>P</i> − <i>a</i>, then <i>λ</i><sub>0</sub>, then <i>F</i>.</b> Compute <i>λ</i><sub>0</sub> before anything else; it turns “somewhere on the line” into a concrete point and everything downstream is arithmetic.",
            "<b>For a plane: compute <i>t</i>, then <i>F</i> = <i>P</i> − <i>t n</i>.</b> Note the minus sign. Writing <i>P</i> + <i>t n</i> sends you the same distance the wrong way and lands you on the far side.",
            "<b>Read off the distance as |<i>PF</i>|, and the image as 2<i>F</i> − <i>P</i>.</b> Twice the foot minus the point, coordinatewise. This one identity is the most reused line in the topic.",
            "<b>Run the one-line check.</b> For a line, <i>PF</i> · <i>b</i> = 0. For a plane, <i>F</i> must satisfy the plane equation. Either check costs one line and catches almost every arithmetic slip, because a wrong foot fails it immediately."
          ]
        },
        {
          "t": "p",
          "html": "One distinction is worth isolating because it costs a mark every time it is missed. For the plane, <i>t</i> divides by |<i>n</i>|<sup>2</sup> and the distance divides by |<i>n</i>|. They have the <b>same numerator</b> and differ by a factor of |<i>n</i>|, which is exactly why they get swapped. The reason is dimensional: <i>t</i> scales a <b>vector</b>, so it counts copies of <i>n</i>; the distance converts that vector step into a pure <b>length</b>, so it needs one more factor of |<i>n</i>| removed."
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Find the foot, the distance and the image of <i>P</i>(2, 4, 1) in the line <i>r</i> = (<i>i</i> + 2<i>j</i> + 3<i>k</i>) + <i>λ</i>(<i>i</i> − <i>j</i> + <i>k</i>).",
          "steps": [
            "<i>a</i> = (1, 2, 3), <i>b</i> = (1, −1, 1), so |<i>b</i>|<sup>2</sup> = 3 and <i>AP</i> = <i>P</i> − <i>a</i> = (1, 2, −2).",
            "<i>λ</i><sub>0</sub> = (1 − 2 − 2)/3 = −1, so <i>F</i> = <i>a</i> − <i>b</i> = <b>(0, 3, 2)</b>.",
            "Distance: <i>AP</i> × <i>b</i> = (1, 2, −2) × (1, −1, 1) = (0, −3, −3), of magnitude 3√2, so <i>PF</i> = 3√2/√3 = <b>√6</b>.",
            "Image: <i>P</i>′ = 2<i>F</i> − <i>P</i> = (0 − 2, 6 − 4, 4 − 1) = <b>(−2, 2, 3)</b>. Check: <i>PF</i> = (−2, −1, 1) and (−2, −1, 1)·(1, −1, 1) = −2 + 1 + 1 = 0 ✓"
          ],
          "ans": "<i>F</i> = (0, 3, 2), distance √6, image (−2, 2, 3)"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN · MULTI-CONCEPT",
          "q": "Find the foot, the distance and the image of <i>P</i>(4, 1, 3) in the plane <i>x</i> − 2<i>y</i> + 2<i>z</i> − 5 = 0.",
          "steps": [
            "<i>n</i> = (1, −2, 2), so |<i>n</i>|<sup>2</sup> = 9. Compute <i>t</i> = (4 − 2 + 6 − 5)/9 = 3/9 = <b>1/3</b>.",
            "Foot: <i>F</i> = <i>P</i> − <i>t n</i> = (4 − 1/3, 1 + 2/3, 3 − 2/3) = <b>(11/3, 5/3, 7/3)</b>. Check it satisfies the plane: 11/3 − 10/3 + 14/3 = 15/3 = 5 ✓",
            "Distance: |<i>t</i>| |<i>n</i>| = (1/3)(3) = <b>1</b>, which is also |3|/√9.",
            "Image: <i>P</i>′ = <i>P</i> − 2<i>t n</i> = (4 − 2/3, 1 + 4/3, 3 − 4/3) = <b>(10/3, 7/3, 5/3)</b>. Averaging <i>P</i> and <i>P</i>′ returns <i>F</i> ✓ And <i>t</i> > 0, so <i>P</i> is on the positive side and −<i>t n</i> moves it towards the plane."
          ],
          "ans": "<i>F</i> = (11/3, 5/3, 7/3), distance 1, image (10/3, 7/3, 5/3)"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "Find the image of <i>P</i>(1, 6, 3) in the line <i>r</i> = (<i>j</i> + 2<i>k</i>) + <i>λ</i>(<i>i</i> + 2<i>j</i> + 3<i>k</i>).",
          "steps": [
            "<i>a</i> = (0, 1, 2), <i>b</i> = (1, 2, 3), |<i>b</i>|<sup>2</sup> = 14, and <i>AP</i> = (1, 5, 1).",
            "<i>λ</i><sub>0</sub> = (1 + 10 + 3)/14 = 14/14 = 1, so <i>F</i> = <i>a</i> + <i>b</i> = <b>(1, 3, 5)</b>.",
            "Image: <i>P</i>′ = 2<i>F</i> − <i>P</i> = (2 − 1, 6 − 6, 10 − 3) = <b>(1, 0, 7)</b>.",
            "Two checks: <i>PF</i> = (0, −3, 2) and (0, −3, 2)·(1, 2, 3) = 0 − 6 + 6 = 0 ✓, and the midpoint of (1, 6, 3) and (1, 0, 7) is (1, 3, 5) = <i>F</i> ✓"
          ],
          "ans": "(1, 0, 7)"
        },
        {
          "t": "mcq",
          "q": "The perpendicular distance of <i>P</i>(1, 4, 1) from the line through <i>A</i>(1, 1, 1) with direction <i>b</i> = (2, 1, 2) is",
          "correct": 0,
          "opts": [
            { "label": "2√2", "nudge": null },
            { "label": "2√2/3", "nudge": "Divided by |<i>b</i>|<sup>2</sup> = 9 instead of |<i>b</i>| = 3. The cross product already carries one factor of |<i>b</i>|, so you cancel exactly one more." },
            { "label": "6√2", "nudge": "The cross product magnitude alone, with the denominator dropped entirely. |<i>AP</i> × <i>b</i>| is a length times a length; it becomes a distance only after one division." },
            { "label": "3√2", "nudge": "An arithmetic slip in the final division: 6√2 divided by 3 is 2√2, not 3√2." }
          ],
          "solution": "AP = (0, 3, 0), so AP × b = (6, 0, −6), of magnitude √72 = 6√2. With |b| = 3, the distance is 6√2/3 = 2√2. Cross product over |b|, divided once."
        },
        {
          "t": "mcq",
          "q": "The foot of the perpendicular from <i>P</i>(1, 2, −1) to 2<i>x</i> − <i>y</i> + 2<i>z</i> + 1 = 0 is reached by stepping <i>t</i> normals from <i>P</i>, where <i>t</i> =",
          "correct": 0,
          "opts": [
            { "label": "−1/9", "nudge": null },
            { "label": "1/3", "nudge": "Divided by |<i>n</i>| = 3 instead of |<i>n</i>|<sup>2</sup> = 9, and lost the sign. Dividing by |<i>n</i>| gives the <b>distance</b>, which is a length, not the step parameter, which scales a vector." },
            { "label": "−1/3", "nudge": "Right sign, wrong denominator. |<i>n</i>| = 3 gives the distance; <i>t</i> needs |<i>n</i>|<sup>2</sup> = 9 because it counts copies of the vector <i>n</i>." },
            { "label": "9", "nudge": "The fraction inverted. The numerator here is the plane expression at <i>P</i>, which is −1, and it belongs on top." }
          ],
          "solution": "t = (2(1) − 2 + 2(−1) + 1) / (4 + 1 + 4) = (2 − 2 − 2 + 1)/9 = −1/9. The negative sign says P sits on the side where the plane expression is negative, so the corrective step −t n moves it in the positive direction, towards the plane."
        },
        {
          "t": "mcq",
          "q": "Given the foot of the perpendicular <i>F</i>, the image of <i>P</i> in a line is",
          "correct": 0,
          "opts": [
            { "label": "2F − P", "nudge": null },
            { "label": "F − P", "nudge": "That is the displacement from <i>P</i> to <i>F</i>, a vector, not a point. Adding it to <i>P</i> once gets you to <i>F</i>; you need to add it twice." },
            { "label": "(P + F)/2", "nudge": "The midpoint of <i>P</i> and <i>F</i>, so only half the needed step. <i>F</i> is already the midpoint of <i>P</i> and the answer." },
            { "label": "2P − F", "nudge": "This reflects the wrong point: it images <i>F</i> in <i>P</i> rather than <i>P</i> in the line. The roles of the fixed point and the moving one are swapped." }
          ],
          "solution": "F is the midpoint of P and its image P′, so F = (P + P′)/2, giving P′ = 2F − P. Read it as “twice the foot, minus the point”. It is identical for reflection in a line and in a plane, and only the way you find F differs."
        },
        {
          "t": "p",
          "html": "Two small results built from the same construction do a disproportionate amount of work in JEE papers. The first converts between a plane and the foot of the perpendicular dropped to it <b>from the origin</b>, and it runs in both directions. Forwards is routine. Backwards is the exam favourite: given only the foot (<i>α</i>, <i>β</i>, <i>γ</i>), the normal must be parallel to (<i>α</i>, <i>β</i>, <i>γ</i>) itself, because <i>OF</i> runs along the normal, and the plane passes through that same point."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE ORIGIN FOOT, BOTH WAYS",
          "tag": "and the images in the coordinate walls",
          "main": "F = d(a, b, c) / (a<sup>2</sup>+b<sup>2</sup>+c<sup>2</sup>) <br> foot (α, β, γ) ⇒ αx + βy + γz = α<sup>2</sup> + β<sup>2</sup> + γ<sup>2</sup>",
          "legend": [
            "forwards: the foot from <i>O</i> to <i>ax</i> + <i>by</i> + <i>cz</i> = <i>d</i> is a scalar multiple of the normal, and substituting fixes the scalar",
            "backwards: free check, the origin’s distance is (<i>α</i><sup>2</sup>+<i>β</i><sup>2</sup>+<i>γ</i><sup>2</sup>)/√(<i>α</i><sup>2</sup>+<i>β</i><sup>2</sup>+<i>γ</i><sup>2</sup>) = |<i>OF</i>|, as it must be",
            "images in the walls need no formula: in the <i>xy</i>-plane (<i>x</i>, <i>y</i>, <i>z</i>) goes to (<i>x</i>, <i>y</i>, −<i>z</i>); in the <i>x</i>-axis it goes to (<i>x</i>, −<i>y</i>, −<i>z</i>)"
          ],
          "note": "Reflecting in a coordinate plane flips one sign, the one the plane sets to zero. Reflecting in an axis flips the other two. Both follow from P′ = 2F − P with an obvious foot."
        },
        {
          "t": "p",
          "html": "The second result is the reason “image of a point” questions are not idle exercises. The shortest path from <i>A</i> to <i>B</i> that must first <b>touch</b> a plane is found by reflecting one endpoint across it: every point <i>M</i> of the plane is equidistant from <i>B</i> and its image <i>B</i>′, so <i>AM</i> + <i>MB</i> = <i>AM</i> + <i>MB</i>′ ≥ <i>AB</i>′, with equality exactly where the straight segment <i>AB</i>′ crosses the plane. Reflect, join, read off the crossing point. A bent path becomes a straight one."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE LOCUS OF FEET FROM THE ORIGIN",
          "tag": "a sphere on OP as diameter",
          "main": "x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> = x<sub>0</sub>x + y<sub>0</sub>y + z<sub>0</sub>z",
          "legend": [
            "the setting: every plane passes through a <b>fixed</b> point <i>P</i>(<i>x</i><sub>0</sub>, <i>y</i><sub>0</sub>, <i>z</i><sub>0</sub>), and <i>F</i> is the foot from <i>O</i> to such a plane",
            "why: the plane’s normal is along <i>OF</i>, and <i>P</i> − <i>F</i> lies in the plane, so (<i>P</i> − <i>F</i>) · <i>F</i> = 0, which is the equation above",
            "completing the square gives centre <i>P</i>/2 and radius |<i>P</i>|/2: the sphere on <i>OP</i> as diameter, passing through both <i>O</i> and <i>P</i>"
          ],
          "note": "A locus question is always the same move: name a generic point, translate the stated condition into an equation, and read the surface. Linear means a plane; equal squared coefficients with no cross terms means a sphere."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "A ray travels from <i>A</i>(1, 1, 2), reflects off the <i>xy</i>-plane and reaches <i>B</i>(3, 4, 6). Find the point of contact and the total path length.",
          "steps": [
            "Reflect <i>B</i> in the <i>xy</i>-plane by flipping the <i>z</i>-sign: <i>B</i>′ = (3, 4, −6).",
            "The straight segment <i>AB</i>′ has direction (2, 3, −8), so its points are (1 + 2<i>t</i>, 1 + 3<i>t</i>, 2 − 8<i>t</i>).",
            "It meets the mirror where <i>z</i> = 0, that is 2 − 8<i>t</i> = 0 and <i>t</i> = 1/4, giving <i>M</i> = <b>(3/2, 7/4, 0)</b>, which lies strictly between <i>A</i> and <i>B</i>′.",
            "Total path = <i>AB</i>′ = √(4 + 9 + 64) = <b>√77</b>. Verify by parts: <i>AM</i> = √77/4 and <i>MB</i> = 3√77/4, which sum to √77 ✓"
          ],
          "ans": "Contact at (3/2, 7/4, 0), total length √77"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "Planes pass through the fixed point <i>P</i>(2, 4, 4). Find the locus of the foot of the perpendicular from the origin to these planes.",
          "steps": [
            "Let the foot be <i>F</i> = (<i>x</i>, <i>y</i>, <i>z</i>). Since <i>OF</i> is along the plane’s normal and <i>P</i> lies in the plane, the in-plane vector <i>P</i> − <i>F</i> is perpendicular to <i>F</i>.",
            "So (<i>P</i> − <i>F</i>) · <i>F</i> = 0, that is <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> + <i>z</i><sup>2</sup> = 2<i>x</i> + 4<i>y</i> + 4<i>z</i>.",
            "Complete the squares: (<i>x</i> − 1)<sup>2</sup> + (<i>y</i> − 2)<sup>2</sup> + (<i>z</i> − 2)<sup>2</sup> = 1 + 4 + 4 = 9.",
            "A sphere of radius 3 centred at (1, 2, 2), which is <i>P</i>/2, and 3 is |<i>P</i>|/2: the sphere on <i>OP</i> as diameter. Both <i>O</i> and <i>P</i> satisfy the unsquared equation ✓"
          ],
          "ans": "(<i>x</i> − 1)<sup>2</sup> + (<i>y</i> − 2)<sup>2</sup> + (<i>z</i> − 2)<sup>2</sup> = 9"
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Find the foot of the perpendicular from <i>P</i>(1, 2, 3) to <i>r</i> = (6<i>i</i> + 7<i>j</i> + 7<i>k</i>) + <i>λ</i>(3<i>i</i> + 2<i>j</i> − 2<i>k</i>).",
              "a": "<i>AP</i> = (−5, −5, −4) and <i>b</i> = (3, 2, −2), so <i>AP</i>·<i>b</i> = −15 − 10 + 8 = −17 while |<i>b</i>|<sup>2</sup> = 17. Hence <i>λ</i><sub>0</sub> = −1 and <i>F</i> = <i>a</i> − <i>b</i> = <b>(3, 5, 9)</b>."
            },
            {
              "q": "[CUET] Find the perpendicular distance of (2, 3, −1) from the line through the origin with direction (1, 2, 2).",
              "a": "<i>AP</i> = (2, 3, −1), and <i>AP</i> × <i>b</i> = (8, −5, 1) of magnitude √90 = 3√10. Divide by |<i>b</i>| = 3: the distance is <b>√10</b>."
            },
            {
              "q": "[JEE Main] Find the distance and the foot of the perpendicular from (3, −2, 1) to 2<i>x</i> − <i>y</i> + 2<i>z</i> + 3 = 0.",
              "a": "Numerator 6 + 2 + 2 + 3 = 13, so the distance is <b>13/3</b>. Then <i>t</i> = 13/9 and <i>F</i> = <i>P</i> − <i>t n</i> = <b>(1/9, −5/9, −17/9)</b>. Check: 2/9 + 5/9 − 34/9 + 3 = −27/9 + 3 = 0 ✓"
            },
            {
              "q": "[JEE Main] Find the image of (1, 3, 4) in the plane 2<i>x</i> − <i>y</i> + <i>z</i> + 3 = 0.",
              "a": "Numerator 2 − 3 + 4 + 3 = 6 and |<i>n</i>|<sup>2</sup> = 6, so <i>t</i> = 1. Image = <i>P</i> − 2<i>n</i> = (1 − 4, 3 + 2, 4 − 2) = <b>(−3, 5, 2)</b>."
            },
            {
              "q": "[JEE Advanced] The foot of the perpendicular from the origin to a plane is (1, 2, 2). Find the plane, and the foot from the origin to 3<i>x</i> − 4<i>y</i> + 12<i>z</i> = 26.",
              "a": "First: <i>x</i> + 2<i>y</i> + 2<i>z</i> = 1 + 4 + 4, so <b><i>x</i> + 2<i>y</i> + 2<i>z</i> = 9</b>, at distance 9/3 = 3 = |(1,2,2)| ✓ Second: |<i>n</i>|<sup>2</sup> = 169, so the scalar is 26/169 = 2/13 and the foot is <b>(6/13, −8/13, 24/13)</b>, at distance 26/13 = 2."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "Dividing the point-to-line distance by |<i>b</i>|<sup>2</sup>. The cross product already carries one factor of |<i>b</i>|, so you divide by it <b>exactly once</b>. Dimensionally, |<i>AP</i> × <i>b</i>| is a length times a length.",
            "Reporting the foot when the image was asked. The image is 2<i>F</i> − <i>P</i>, not <i>F</i>. The foot is the <b>midpoint</b> of the point and its image, which is a different thing entirely.",
            "Stepping the normal the wrong way. It is <i>F</i> = <i>P</i> <b>−</b> <i>t n</i>. Writing <i>P</i> + <i>t n</i> lands you the same distance on the far side of the plane, and the answer will still look tidy.",
            "Confusing <i>t</i> with the distance. <i>t</i> divides by |<i>n</i>|<sup>2</sup>, the distance by |<i>n</i>|. Same numerator, and they differ by a factor of |<i>n</i>|.",
            "Skipping the perpendicularity check on a line foot. A wrong <i>λ</i><sub>0</sub> produces a plausible-looking point, and the one-line test <i>PF</i> · <i>b</i> = 0 exposes it instantly."
          ]
        },
        {
          "t": "protip",
          "html": "never solve a “distance, foot and image” set as three problems. find the foot once; the distance is |<i>PF</i>| and the image is 2<i>F</i> − <i>P</i>. three marks from one computation. and if a problem asks for the minimum total length of a path that has to touch a plane or a line, reflect one endpoint across it and join: the straight segment is the answer and its crossing point is where the path should touch."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "λ₀ = (AP · b) / |b|² · F = a + λ₀b", "note": "line case. AP is P minus a point of the line" },
            { "f": "PF = |AP × b| / |b|", "note": "divide by |b| once, never twice" },
            { "f": "t = (ax₁+by₁+cz₁+d) / (a²+b²+c²)", "note": "plane case. one number gives foot, image and distance" },
            { "f": "F = P − t n · P′ = P − 2t n", "note": "minus, not plus. sign of t tells you the side" },
            { "f": "P′ = 2F − P", "note": "twice the foot minus the point. line or plane, same identity" },
            { "f": "foot (α, β, γ) ⇒ αx + βy + γz = α² + β² + γ²", "note": "locus of feet from O through a fixed P is a sphere on OP" }
          ],
          "aids": [
            "“dot for the foot, cross for the gap”",
            "“the normal is the perpendicular, just count normals”",
            "“reflect to straighten a bent path”"
          ]
        }
      ]
    },
    {
      "n": "06",
      "title": "Line and Plane Together",
      "chip": "06 TOGETHER",
      "kalam": "one dot product routes the whole problem",
      "blocks": [
        {
          "t": "p",
          "html": "A line and a plane can do exactly three things. The line can <b>pierce</b> the plane at a single point, the generic case. It can <b>lie flat inside</b> it, every point of the line on the plane. Or it can run <b>parallel</b> and never touch. One number decides which, and it is the dot product of the line’s direction with the plane’s normal."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · CLASSIFYING A LINE AGAINST A PLANE",
          "tag": "compute b · n first, every time",
          "main": "K + λ(b · n) = 0",
          "legend": [
            "substituting the line’s general point into the plane gives this, where <i>K</i> is the plane expression evaluated at the line’s base point",
            "<i>b</i> · <i>n</i> ≠ 0: one solution <i>λ</i> = −<i>K</i>/(<i>b</i> · <i>n</i>). The line <b>crosses</b>",
            "<i>b</i> · <i>n</i> = 0 and <i>K</i> = 0: every <i>λ</i> works, the line <b>lies in</b> the plane. <i>b</i> · <i>n</i> = 0 and <i>K</i> ≠ 0: no <i>λ</i> works, the line is <b>strictly parallel</b>"
          ],
          "note": "b · n = 0 is necessary but never sufficient for a line to lie in a plane. It fixes orientation only. Position needs the separate point test, and skipping it is the single commonest error in this topic."
        },
        {
          "t": "diagram",
          "kind": "axes3d",
          "kicker": "FIGURE · A LINE AGAINST A PLANE, AND TWO PLANES, TAP ONE",
          "chips": ["crosses", "lies in", "parallel to it", "two planes meet"],
          "captions": [
            "The generic case. The line dives through the plane at one point and out the other side, because its direction is not perpendicular to the normal. Substituting the moving point of the line into the plane equation gives one linear equation in the parameter, and one linear equation has one solution.",
            "The same plane with a line whose direction is now perpendicular to the normal, and whose base point happens to satisfy the plane equation. The line is a chord of the drawn triangle: every one of its points is on the surface. Nothing about the direction distinguishes this case from the next one.",
            "Direction perpendicular to the normal again, so the line still runs flat relative to the surface, but this time its base point is off the plane and the whole line floats above it. Compare with the previous chip: identical orientation, different height. That is exactly why the point test is not optional.",
            "Two planes, drawn as the triangles they cut from the axes, sharing an edge. The dark line along that shared edge is their line of intersection. Its direction is the cross product of the two normals, because any displacement staying on both planes must be perpendicular to both normals at once."
          ],
          "frames": [
            {
              "axes3d": {
                "planes": [{ "normal": [1, 1, 1], "d": 2.4, "label": "π" }],
                "lines": [{ "through": [0.8, 0.8, 0.8], "dir": [0.35, 0.15, 0.5], "label": "L" }]
              }
            },
            {
              "axes3d": {
                "planes": [{ "normal": [1, 1, 1], "d": 2.4, "label": "π" }],
                "lines": [{ "through": [0.8, 0.8, 0.8], "dir": [0.35, -0.35, 0], "label": "L" }]
              }
            },
            {
              "axes3d": {
                "planes": [{ "normal": [1, 1, 1], "d": 2.4, "label": "π" }],
                "lines": [{ "through": [1.3, 1.3, 1.3], "dir": [0.35, -0.35, 0], "label": "L" }]
              }
            },
            {
              "axes3d": {
                "planes": [
                  { "normal": [1, 1, 1], "d": 2.4, "soft": true },
                  { "normal": [2, 1, 1], "d": 2.4, "soft": true }
                ],
                "lines": [{ "through": [0, 1.2, 1.2], "dir": [0, 0.5, -0.5], "label": "L" }]
              }
            }
          ]
        },
        {
          "t": "proc",
          "title": "Find where a line meets a plane",
          "steps": [
            "<b>Write the line as one moving point.</b> From (<i>x</i> − <i>x</i><sub>1</sub>)/<i>a</i> = (<i>y</i> − <i>y</i><sub>1</sub>)/<i>b</i> = (<i>z</i> − <i>z</i><sub>1</sub>)/<i>c</i> = <i>λ</i>, the point is (<i>x</i><sub>1</sub> + <i>aλ</i>, <i>y</i><sub>1</sub> + <i>bλ</i>, <i>z</i><sub>1</sub> + <i>cλ</i>). Standardise the equation first if it is disguised.",
            "<b>Substitute into the plane and solve the single linear equation for <i>λ</i>.</b> The plane is linear and the coordinates are linear in <i>λ</i>, so the substitution always collapses to one equation.",
            "<b>Put that <i>λ</i> back into the moving point.</b> That is the intersection. Verify it satisfies the plane, which costs one line.",
            "<b>Read the degenerate outcomes rather than panicking at them.</b> If step 2 gives 0 = a non-zero number, the line is parallel and there is no intersection. If it gives 0 = 0, the line lies in the plane and every point is an intersection.",
            "<b>Variant: distance from a point measured <i>parallel to a given line</i>.</b> Write the line through your point with the given direction, find where <b>that</b> line meets the plane, and measure to it. It is this same procedure with a line you built yourself."
          ]
        },
        {
          "t": "think",
          "html": "a railway track running alongside a wall is parallel to the wall, so its direction is perpendicular to the wall’s normal. it is still not painted <b>on</b> the wall. orientation and position are two different facts, and <i>b</i> · <i>n</i> = 0 only ever tells you the first."
        },
        {
          "t": "p",
          "html": "Topic 03 told you never to compute the line where two planes meet, and for family problems that advice stands. But the moment a question asks for the <b>angle</b> that intersection line makes with something, or its distance to another line, or whether a third plane cuts it, you need the line itself. Writing it down is two steps: get the direction, then get one point."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE LINE WHERE TWO PLANES MEET",
          "tag": "direction from the normals, point by killing a coordinate",
          "main": "direction = n<sub>1</sub> × n<sub>2</sub>",
          "legend": [
            "any displacement <i>u</i> between two points lying on <b>both</b> planes satisfies <i>u</i> · <i>n</i><sub>1</sub> = 0 and <i>u</i> · <i>n</i><sub>2</sub> = 0, and the cross product is the vector perpendicular to both",
            "for a point, set one variable to 0, usually <i>z</i>, and solve the remaining 2 by 2 system",
            "if that system is inconsistent, the line does not pierce that coordinate plane. Zero a different variable instead"
          ],
          "note": "Membership needs no parametrisation at all. A point lies on the intersection line exactly when it satisfies both plane equations, so testing it is two substitutions."
        },
        {
          "t": "proc",
          "title": "Parametrise the intersection of two planes",
          "steps": [
            "<b>Cross the two normals.</b> That is the direction, straight away, with no algebra on the equations themselves.",
            "<b>Set <i>z</i> = 0 and solve the two remaining equations for <i>x</i> and <i>y</i>.</b> That produces one honest point of the line, and any point of the line will do.",
            "<b>If the 2 by 2 system has no solution, set <i>y</i> = 0 or <i>x</i> = 0 instead.</b> The failure is informative: it means the line runs parallel to the coordinate plane you tried.",
            "<b>Assemble the symmetric form, and watch for a zero direction component.</b> If the direction is (0, 1, 1) the symmetric form is illegal in <i>x</i>; write the line as “<i>x</i> = constant, together with the other two equal” instead.",
            "<b>Then treat it as any other line.</b> Everything after this step is topic 02 and topic 05 verbatim: angles, shortest distances, feet, images. Step 1 was the whole difficulty."
          ]
        },
        {
          "t": "p",
          "html": "Three planes are a short extension of the same idea and a favourite of JEE Advanced. Take the line where two of them meet and ask what the third does to it. If the third plane cuts that line, the three planes share exactly one point. If the line is <b>parallel to</b> the third plane and off it, there is no common point at all, and you can detect that without solving anything: the intersection direction has zero dot product with the third normal, and one point of the line fails the third equation."
        },
        {
          "t": "p",
          "html": "Reflecting and projecting a whole line needs nothing new. To <b>reflect</b> a line in a plane, note that where the line meets the plane is a fixed point, since it is already on the mirror, and reflecting any second point of the line gives a second point of the image. Two points determine the reflected line. To <b>project</b> a line onto a plane, drop perpendiculars from two of its points and join the two feet. Both are topic 05 applied twice."
        },
        {
          "t": "proc",
          "title": "Reflect a line in a plane, and project one onto it",
          "steps": [
            "<b>Reflection, step 1: find <i>M</i>, where the line meets the plane.</b> It lies on the mirror, so it is a fixed point of the reflection and belongs to the image line unchanged.",
            "<b>Reflection, step 2: take any other point <i>Q</i> of the line and find its image <i>Q</i>′ in the plane</b>, using <i>t</i> and <i>Q</i>′ = <i>Q</i> − 2<i>t n</i> from topic 05.",
            "<b>Reflection, step 3: the image line is the line through <i>M</i> and <i>Q</i>′.</b> Its direction is <i>Q</i>′ − <i>M</i>. If the original line was parallel to the plane there is no <i>M</i>, so reflect two points instead, or reflect one point and keep the direction, which is unchanged because <i>b</i> · <i>n</i> = 0.",
            "<b>Projection, route A: build the plane <i>π</i>′ containing the line and perpendicular to <i>π</i>.</b> It must contain both <i>b</i> and <i>n</i>, so its normal is <i>b</i> × <i>n</i>. The projection is the intersection of <i>π</i> and <i>π</i>′.",
            "<b>Projection, route B: drop perpendicular feet from two points of the line onto <i>π</i> and join them.</b> Same answer, no new machinery, and usually faster under exam pressure."
          ]
        },
        {
          "t": "p",
          "html": "Locus questions close the chapter, and they are all the same move: name a generic point (<i>x</i>, <i>y</i>, <i>z</i>), translate the stated condition into an equation, and recognise the surface. Linear means a plane. Equal squared coefficients with no cross terms means a sphere. The most common condition of all is equidistance from two points, and squaring both sides cancels the quadratic terms and leaves a plane."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE PERPENDICULAR BISECTOR PLANE",
          "tag": "equidistant from two points",
          "main": "2 r · (b − a) = |b|<sup>2</sup> − |a|<sup>2</sup>",
          "legend": [
            "from |<i>r</i> − <i>a</i>|<sup>2</sup> = |<i>r</i> − <i>b</i>|<sup>2</sup>: the |<i>r</i>|<sup>2</sup> terms cancel on both sides and a <b>plane</b> is left",
            "its normal is <i>b</i> − <i>a</i>, along the segment, exactly as geometry demands, and it passes through the midpoint",
            "equidistant from two <b>parallel</b> planes is the same idea one dimension up: the single mid-plane <i>ax</i> + <i>by</i> + <i>cz</i> + (<i>d</i><sub>1</sub> + <i>d</i><sub>2</sub>)/2 = 0"
          ],
          "note": "Always check your answer against the midpoint of the two points. If the midpoint does not satisfy the equation, something went wrong in the cancellation."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN · WARM-UP",
          "q": "Find where the line (<i>x</i> − 2)/1 = (<i>y</i> + 1)/(−1) = (<i>z</i> − 3)/2 meets the plane 2<i>x</i> + <i>y</i> − <i>z</i> = 1.",
          "steps": [
            "Moving point: (2 + <i>λ</i>, −1 − <i>λ</i>, 3 + 2<i>λ</i>).",
            "Substitute: 2(2 + <i>λ</i>) + (−1 − <i>λ</i>) − (3 + 2<i>λ</i>) = 1.",
            "Expanding: 4 + 2<i>λ</i> − 1 − <i>λ</i> − 3 − 2<i>λ</i> = −<i>λ</i> = 1, so <i>λ</i> = −1.",
            "Point: (2 − 1, −1 + 1, 3 − 2) = <b>(1, 0, 1)</b>. Check: 2(1) + 0 − 1 = 1 ✓"
          ],
          "ans": "(1, 0, 1)"
        },
        {
          "t": "ex",
          "tag": "CUET / JEE MAIN SPEED TRAP",
          "q": "Does the line through (1, 0, 2) with direction (1, 2, 1) lie in, run parallel to, or cross the plane <i>x</i> + <i>y</i> − 3<i>z</i> + 2 = 0?",
          "steps": [
            "First the dot product: <i>b</i> · <i>n</i> = (1)(1) + (2)(1) + (1)(−3) = 1 + 2 − 3 = <b>0</b>. So the line does not cross.",
            "That is only half the answer. It says the line runs flat relative to the surface and nothing about how high above it.",
            "Now the decisive point test: at (1, 0, 2) the plane expression is 1 + 0 − 6 + 2 = −3, which is not zero.",
            "The base point is off the plane, so the line is <b>strictly parallel</b>, not contained."
          ],
          "ans": "Strictly parallel. Stopping at <i>b</i> · <i>n</i> = 0 and saying “lies in the plane” is the trap"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "Find the line where <i>x</i> + <i>y</i> + <i>z</i> = 6 meets 2<i>x</i> − <i>y</i> + <i>z</i> = 3, and where that line meets 2<i>x</i> − <i>y</i> + 3<i>z</i> = 9.",
          "steps": [
            "Direction: (1, 1, 1) × (2, −1, 1) = (1·1 − 1·(−1), −(1·1 − 1·2), 1·(−1) − 1·2) = <b>(2, 1, −3)</b>.",
            "Point: set <i>z</i> = 0, so <i>x</i> + <i>y</i> = 6 and 2<i>x</i> − <i>y</i> = 3. Adding gives 3<i>x</i> = 9, so <i>x</i> = 3 and <i>y</i> = 3. The line is (3 + 2<i>t</i>, 3 + <i>t</i>, −3<i>t</i>).",
            "Substitute into the third plane: 2(3 + 2<i>t</i>) − (3 + <i>t</i>) + 3(−3<i>t</i>) = 3 − 6<i>t</i> = 9, so <i>t</i> = −1.",
            "Meeting point: <b>(1, 2, 3)</b>. Check both originals: 1 + 2 + 3 = 6 ✓ and 2 − 2 + 3 = 3 ✓"
          ],
          "ans": "(<i>x</i> − 3)/2 = (<i>y</i> − 3)/1 = <i>z</i>/(−3), meeting the third plane at (1, 2, 3)"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN · MULTI-CONCEPT",
          "q": "Find the distance of (1, −5, 9) from the plane <i>x</i> − <i>y</i> + <i>z</i> = 5, measured <b>parallel</b> to the line <i>x</i> = <i>y</i> = <i>z</i>.",
          "steps": [
            "This is not the perpendicular distance. Build the line through the given point with direction (1, 1, 1): (1 + <i>t</i>, −5 + <i>t</i>, 9 + <i>t</i>).",
            "Substitute into the plane: (1 + <i>t</i>) − (−5 + <i>t</i>) + (9 + <i>t</i>) = 15 + <i>t</i> = 5, so <i>t</i> = −10.",
            "Intersection: <i>Q</i> = (−9, −15, −1).",
            "<i>PQ</i> = √((−10)<sup>2</sup> + (−10)<sup>2</sup> + (−10)<sup>2</sup>) = 10√3. For contrast, the perpendicular distance would be |1 + 5 + 9 − 5|/√3 = 10/√3, which is three times smaller."
          ],
          "ans": "10√3"
        },
        {
          "t": "mcq",
          "q": "The line (<i>x</i> − 1)/2 = <i>y</i>/3 = (<i>z</i> + 1)/(−1) meets the plane <i>x</i> + 2<i>y</i> + <i>z</i> = 7 at",
          "correct": 0,
          "opts": [
            { "label": "(3, 3, −2)", "nudge": null },
            { "label": "(1, 0, −1)", "nudge": "That is the base point, <i>λ</i> = 0. It is on the line but not on the plane: 1 + 0 − 1 = 0, not 7." },
            { "label": "(5, 6, −3)", "nudge": "This takes <i>λ</i> = 2 instead of 1. It is a genuine point of the line, which is what makes it tempting, but it misses the plane: 5 + 12 − 3 = 14." },
            { "label": "(−1, −3, 0)", "nudge": "This takes <i>λ</i> = −1, the sign of the solution flipped. Also on the line, also off the plane: −1 − 6 + 0 = −7." }
          ],
          "solution": "The moving point is (1 + 2λ, 3λ, −1 − λ). Substituting: (1 + 2λ) + 6λ + (−1 − λ) = 7λ = 7, so λ = 1 and the point is (3, 3, −2). Every distractor here is a point of the line at a different λ, so checking the plane equation is the only way to separate them."
        },
        {
          "t": "mcq",
          "q": "The line <i>r</i> = <i>a</i> + <i>λb</i> is parallel to, but <b>not contained in</b>, the plane <i>r</i> · <i>n</i> = <i>d</i> if and only if",
          "correct": 3,
          "opts": [
            { "label": "b · n = 0", "nudge": "This omits the point test, so it also admits a line lying <b>in</b> the plane. It fixes orientation and says nothing about position." },
            { "label": "b × n = 0", "nudge": "This says the direction is parallel to the <b>normal</b>, which describes a line perpendicular to the plane, the opposite configuration." },
            { "label": "b · n = d", "nudge": "Dimensionally meaningless: it compares a dot product of two directions with the plane’s constant, which depends on how the equation was scaled." },
            { "label": "b · n = 0 and a · n ≠ d", "nudge": null }
          ],
          "solution": "Two independent conditions, and that pairing is the whole lesson of this topic. b · n = 0 makes the direction perpendicular to the normal, so the line runs flat. a · n ≠ d puts a point of it off the plane, so it floats above rather than lying in."
        },
        {
          "t": "mcq",
          "q": "The line of intersection of <i>x</i> + <i>y</i> + <i>z</i> = 1 and 2<i>x</i> − <i>y</i> + 2<i>z</i> = 3 has direction",
          "correct": 1,
          "opts": [
            { "label": "(3, 0, 3)", "nudge": "A sign slip in the third entry, which is (1)(−1) − (1)(2) = −3, not +3. There is a free check available: an intersection direction must be perpendicular to <b>both</b> normals, and (3, 0, 3) · (1, 1, 1) = 6, not 0." },
            { "label": "(1, 0, −1)", "nudge": null },
            { "label": "(1, 1, 1)", "nudge": "That is the first plane’s normal, not the intersection direction. The direction must be perpendicular to <b>both</b> normals, so it cannot be either of them." },
            { "label": "(3, 1, −3)", "nudge": "The middle entry should be zero. Recompute it: the <i>j</i>-component is −(1·2 − 1·2) = 0, since both planes have the same <i>x</i> and <i>z</i> coefficient ratio here." }
          ],
          "solution": "(1, 1, 1) × (2, −1, 2) = (1·2 − 1·(−1), −(1·2 − 1·2), 1·(−1) − 1·2) = (3, 0, −3), which is proportional to (1, 0, −1). Direction ratios are only ever fixed up to scale, so (3, 0, −3) and (1, 0, −1) are the same answer."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[JEE Main] Find the point of intersection of (<i>x</i>−1)/2 = (<i>y</i>−2)/(−1) = (<i>z</i>+1)/1 and <i>x</i> + <i>y</i> + <i>z</i> = 4.",
              "a": "Moving point (1 + 2<i>λ</i>, 2 − <i>λ</i>, −1 + <i>λ</i>); the sum is 2 + 2<i>λ</i> = 4, so <i>λ</i> = 1 and the point is <b>(3, 1, 0)</b>."
            },
            {
              "q": "[CUET] Does the line through (1, 1, 1) with direction (1, −1, 2) lie in, run parallel to, or cross 3<i>x</i> + <i>y</i> − <i>z</i> = 2?",
              "a": "<i>b</i> · <i>n</i> = 3 − 1 − 2 = 0, so not crossing. Point test: 3 + 1 − 1 = 3 ≠ 2, so the base point is off the plane. <b>Strictly parallel.</b>"
            },
            {
              "q": "[JEE Main] Find the plane containing the parallel lines <i>r</i> = (<i>i</i> + 2<i>k</i>) + <i>λ</i>(2<i>i</i> + <i>j</i> − <i>k</i>) and <i>r</i> = (3<i>j</i> + <i>k</i>) + <i>μ</i>(2<i>i</i> + <i>j</i> − <i>k</i>).",
              "a": "Parallel, so <i>N</i> = <i>b</i> × (<i>a</i><sub>2</sub> − <i>a</i><sub>1</sub>) = (2, 1, −1) × (−1, 3, −1) = (2, 3, 7). Through (1, 0, 2): <b>2<i>x</i> + 3<i>y</i> + 7<i>z</i> = 16</b>, and (0, 3, 1) gives 9 + 7 = 16 ✓"
            },
            {
              "q": "[JEE Advanced] Show that <i>x</i> + <i>y</i> + <i>z</i> = 1, 2<i>x</i> − <i>y</i> + 2<i>z</i> = 3 and <i>x</i> + <i>z</i> = 5 have no common point.",
              "a": "Subtract the third from the first: <i>y</i> = −4. The first and third then both give <i>x</i> + <i>z</i> = 5. But the second, with <i>y</i> = −4, reads 2<i>x</i> + 4 + 2<i>z</i> = 3, that is <b><i>x</i> + <i>z</i> = −1/2</b>, contradicting 5. Equivalently, the first two meet in a line of direction (1, 0, −1), which is perpendicular to (1, 0, 1) and so runs parallel to the third plane, and off it."
            },
            {
              "q": "[JEE Advanced] Find the locus of points equidistant from <i>A</i>(1, 2, 3) and <i>B</i>(3, 4, 5).",
              "a": "<i>b</i> − <i>a</i> = (2, 2, 2), and |<i>b</i>|<sup>2</sup> − |<i>a</i>|<sup>2</sup> = 50 − 14 = 36. So 2(2<i>x</i> + 2<i>y</i> + 2<i>z</i>) = 36, giving <b><i>x</i> + <i>y</i> + <i>z</i> = 9</b>. Check the midpoint (2, 3, 4): 2 + 3 + 4 = 9 ✓ and the normal (1,1,1) is along <i>AB</i> ✓"
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "Reading <i>b</i> · <i>n</i> = 0 as “the line lies in the plane”. It only means parallel. <b>Test a point</b> to separate “lies in” from “floats above”, every single time.",
            "Computing the intersection line when the family would do. For “the plane through the line where <i>P</i><sub>1</sub> and <i>P</i><sub>2</sub> meet”, use <i>P</i><sub>1</sub> + <i>λP</i><sub>2</sub> = 0. Parametrise the line only when the question asks about the <b>line itself</b>.",
            "Writing a symmetric form when a direction component is zero. Direction (0, 1, 1) cannot be written with 0 as a denominator. State the constant coordinate separately: <i>x</i> = <i>k</i>, together with the other two ratios equal.",
            "Reflecting a line by reflecting only its direction. Reflect actual <b>points</b>: the intersection point stays fixed, and the image of any second point completes the line.",
            "Reporting the perpendicular distance when the question said “measured parallel to a line”. Those are different numbers, and the perpendicular one is always the smaller."
          ]
        },
        {
          "t": "protip",
          "html": "before any line-and-plane work, compute <i>b</i> · <i>n</i>. non-zero and it crosses, so go find <i>λ</i>. zero and you test a point: on the plane means contained, off it means parallel. that one number routes the entire problem in a single step, which is why it should always be your first move. and remember that reflecting and projecting a line introduce nothing new at all: an intersection point plus a reflected point, or two perpendicular feet, are all you ever need."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "b · n ≠ 0 ⇒ crosses, at λ = −K/(b · n)", "note": "K is the plane expression at the line's base point" },
            { "f": "b · n = 0, point on ⇒ lies in; point off ⇒ parallel", "note": "orientation then position. the point test is compulsory" },
            { "f": "intersection of two planes: direction n₁ × n₂", "note": "one point by setting z = 0 and solving the 2 by 2 system" },
            { "f": "reflect a line: keep M, image a second point Q", "note": "project instead: two feet, or cross with b × n" },
            { "f": "2 r · (b − a) = |b|² − |a|²", "note": "perpendicular bisector plane. check it holds at the midpoint" },
            { "f": "distance parallel to a line ≠ perpendicular distance", "note": "build the line through P, find where it meets the plane" }
          ],
          "aids": [
            "“dot decides: cross or flat, then a point decides on or off”",
            "“family first, the line only when the line is the question”",
            "“reflect and project reuse old tools”"
          ]
        }
      ]
    }
  ]
};

export default ch12ThreeDGeometry;
