/**
 * Chapter 11 · Introduction to Three Dimensional Geometry. Mathematics, Class 11.
 *
 * Restructured from pages 878 to 917 of the Drona Class 11 Mathematics Master
 * Reference into the block system in design_handoff_textbooks/CONTENT_SPEC.md,
 * following math-11-01-sets.ts and math-11-09-straight-lines.ts for voice and
 * density.
 *
 * The source is three documents stacked: a typeset chapter of three subtopics
 * (01 axes/planes/octants, 02 distance and section, 03 centroid/collinearity/
 * locus), a Round 1 supplement of six problem patterns, and a Round 2 addendum
 * of two more. This is the shortest chapter in the book, 40 pages, and it owns
 * exactly three tools: naming a point, measuring between points, and splitting
 * between points. Everything else in the source is a question shape built out
 * of those three. So five topics, not six, and the supplementary patterns are
 * folded into the topic whose machinery they actually use:
 *
 *   - Subtopic 02 is split in two, because it is two independent tools with two
 *     independent traps. Distance becomes Topic 02 and the section formula
 *     becomes Topic 03. The source's own supplement treats them separately too.
 *   - Round 1 Pattern 1 (distance from a coordinate axis, and the cylinder it
 *     sweeps) and Round 2 Pattern 7 (a point on an axis at a given distance,
 *     the quadratic case) sit inside Topic 02 next to the distance formula they
 *     are both one substitution away from. The cylinder itself is carried into
 *     Topic 05, where the other two standard loci live.
 *   - Round 1 Pattern 2 (substituting into the section formula) and Round 2
 *     Pattern 8 (a coordinate plane dividing externally, where k comes out
 *     negative) sit inside Topic 03. Pattern 8 is the case the typeset chapter
 *     never demonstrates, so it is worked in full there.
 *   - Round 1 Pattern 3 (fourth vertex of a parallelogram), Pattern 5 (incentre
 *     and the tetrahedron centroid) and Pattern 6 (length of a median) sit
 *     inside Topic 04, which is the source's own applications subtopic.
 *   - Round 1 Pattern 4 (a point equidistant from three or four given points)
 *     sits inside Topic 05, since it is the same "squares cancel" argument the
 *     perpendicular bisector plane runs on.
 *
 * Nothing is dropped. The source's own "deliberately out of scope" list at the
 * end of Round 2 (direction cosines, the equation of a line or a plane, skew
 * distance) is Class 12 material and is signposted in the hook rather than
 * imported.
 *
 * Two corrections to the source, both arithmetic, both verified here:
 *
 *   1. Subtopic 02, Practice 2(i). Dividing the join of (−2, 3, 5) and
 *      (1, −4, 6) internally in the ratio 2 : 3 gives (−4/5, 1/5, 27/5), not
 *      (−4/5, −2/5, 27/5). The y-coordinate is (2(−4) + 3(3))/5 = 1/5. The
 *      chapter's own Round 1 Supplement, Example 2.1, works the identical
 *      numbers and prints 1/5, so the printed answer key contradicts it.
 *   2. Subtopic 02, Practice 4. A(2, −3, 4), B(−1, 2, 1) and C(0, 1/3, 2) are
 *      indeed collinear, but B does not divide AC in the ratio 1 : 2. Solving
 *      the x-coordinate, (0k + 2)/(k + 1) = −1, gives k = −3, and y and z both
 *      confirm it: B divides AC EXTERNALLY in the ratio 3 : 1. Equivalently, C
 *      divides AB internally in 2 : 1. The printed 1 : 2 is the correct answer
 *      to Subtopic 03's Practice 3, which is a different set of points.
 *
 * One clarification. Subtopic 01, MCQ Q4 asks for the distance of (2, −6, 3)
 * from the YZ-plane and offers 7 as a distractor; the source's gloss for it is
 * incoherent ("√(2² + 3² + nothing sensible)"). The honest trap is that 7 is
 * exactly OP = √(4 + 36 + 9), the distance from the origin. The nudge here says
 * that instead.
 *
 * The exam hook is authored once, on topic 1, with a bold heading per topic,
 * because the reader renders `hook` only there. Same convention, and the same
 * reason, as the Sets and Straight Lines chapters.
 *
 * Six `diagram` blocks. Four are `axes3d`, the isometric figure built for this
 * chapter: the eight octants as one sign flip per chip, the three coordinate
 * planes and the feet of the perpendiculars onto them, the space diagonal of
 * the box that is the distance formula, and a point marching along a segment as
 * the ratio changes. Two are `plot`, for the genuinely flat pictures: the
 * medians of a triangle meeting at the centroid, and the cross-sections of the
 * four standard loci. Every axes3d point was placed so that it and its label
 * sit inside the frame the renderer draws. Diagram chips and captions render as
 * plain text, not markup, so they carry no inline tags.
 */
import type { Chapter } from '@/lib/textbooks';

export const ch11ThreeD: Chapter = {
  "chapter": "11",
  "title": "Introduction to Three Dimensional Geometry",
  "subject": "Mathematics",
  "klass": "Class 11",
  "topics": [
    {
      "n": "01",
      "title": "Coordinate Axes, Planes and Octants",
      "chip": "01 OCTANTS",
      "kalam": "the corner of your room is the origin",
      "blocks": [
        {
          "t": "hook",
          "html": "<b>01 · Coordinate Axes, Planes and Octants</b><br>The vocabulary the rest of the chapter is written in, and it pays its own way. JEE Main sets these as quick one-markers: name the octant, write the equation of a coordinate plane or axis, find the foot of a perpendicular. JEE Advanced rarely asks it bare but leans on it inside locus and symmetry arguments. CBSE Boards pose a 1–3 mark short answer on octant signs or on the coordinates of a projected point. <b>The single trap is the stray zero</b>: a point with any coordinate 0 lies on a plane or an axis and belongs to no octant at all.<br><br><b>02 · Distance in Space</b><br>High-yield, because half of every later question is a length. CBSE reliably sets a 2–4 mark distance or triangle-classification question. JEE Main asks the distance of a point from a coordinate <i>axis</i> almost every cycle, and separately the “points on an axis at a given distance” question, which is a genuine quadratic: <b>writing one root where there are two is the standard mark loss</b>. Everything in Class 12 that measures anything starts here.<br><br><b>03 · The Section Formula</b><br>The other half of the machinery, and the examiner's favourite. JEE Main asks it almost every cycle: the ratio of division, or the point where a coordinate plane cuts a segment. CBSE reliably sets a 2–4 mark section-formula or “find the ratio” question. The twist that separates candidates is a division that turns out <b>external</b>, where the sign of <i>k</i> is the entire answer and reporting a negative ratio costs the mark.<br><br><b>04 · Centroid, Collinearity and Figures</b><br>Where the two tools start earning marks. CBSE regularly sets centroid, collinearity and “what type of quadrilateral” questions for 2–4 marks, plus the reverse problem where a vertex is missing and the centroid is given. JEE Main asks collinearity and ratio problems almost every cycle, and <b>the whole skill is checking that one ratio fits all three coordinates</b>, not just the first one you solved. JEE Advanced rewards the incentre and the tetrahedron centroid, both of which are the section formula wearing a hat.<br><br><b>05 · Locus: Planes, Spheres and Cylinders</b><br>CBSE sets a “find the equation of the set of points” problem, usually the perpendicular bisector. JEE Advanced uses a locus derivation as the opening move of a harder question. Knowing in advance which rule gives which surface, <b>two points give a plane, one point gives a sphere, one axis gives a cylinder</b>, saves a page of algebra under pressure. Everything here is the launch pad for Class 12: direction cosines and ratios, the equations of a line and a plane in space, and the shortest distance between skew lines."
        },
        {
          "t": "p",
          "html": "You already live comfortably in two dimensions. On graph paper you fix an origin, draw two perpendicular lines, the <i>x</i>-axis and the <i>y</i>-axis, and any point is pinned down by an ordered pair (<i>x</i>, <i>y</i>). Those two axes slice the flat sheet into four quadrants. Everything so far has happened <b>on the paper</b>."
        },
        {
          "t": "p",
          "html": "Now lift your pen straight off the page. That upward direction is a brand-new third direction the flat sheet never had, and no combination of <i>x</i> and <i>y</i> can fake it. Call it the <i>z</i>-axis. You now have three mutually perpendicular lines meeting at a single point <i>O</i>, the <b>origin</b>, and you have stepped out of a flat world into the room you are actually sitting in."
        },
        {
          "t": "think",
          "html": "look at the corner of your room where two walls meet the floor. that corner is the origin. the three edges running away from it are the axes, and the floor and the two walls are the three coordinate planes. you have been standing inside this diagram all along."
        },
        {
          "t": "p",
          "html": "The floor is the <b><i>XY</i>-plane</b>, one wall is the <b><i>YZ</i>-plane</b>, the other wall is the <b><i>ZX</i>-plane</b>. To locate a point <i>P</i> you ask three questions: how far right, how far in, how far up. Those three signed numbers are the coordinates (<i>x</i>, <i>y</i>, <i>z</i>). Here is the cleaner way to say what each one means, and it is the idea examiners love to test: <b>a coordinate is the signed perpendicular distance of <i>P</i> from a coordinate plane</b>. Precisely, <i>x</i> is measured from the <i>YZ</i>-plane, <i>y</i> from the <i>ZX</i>-plane, <i>z</i> from the <i>XY</i>-plane. The sign records which side you are on."
        },
        {
          "t": "p",
          "html": "Now extend each wall and the floor straight <i>through</i> the corner, so each becomes a full infinite plane. The corner of one room becomes the shared corner of eight rooms stacked around the origin, and each of those eight regions of space is an <b>octant</b>. This is the exact 3D cousin of the four quadrants: two perpendicular lines cut a plane into 2<sup>2</sup> = 4 pieces, three perpendicular planes cut space into 2<sup>3</sup> = 8. Which octant a point sits in is decided entirely by the sign pattern of (<i>x</i>, <i>y</i>, <i>z</i>). The room you are physically in, everything positive, is the first octant; diagonally opposite, everything negative, is the seventh."
        },
        {
          "t": "def",
          "term": "Octant",
          "html": "One of the eight regions into which the three coordinate planes cut space. Membership is decided by the sign triple of (<i>x</i>, <i>y</i>, <i>z</i>) and by nothing else: the <i>size</i> of a coordinate never matters. (−7, 3, −2) and (−1, 1, −1) sit in the same octant because they carry the same signs."
        },
        {
          "t": "def",
          "term": "No octant at all",
          "html": "The sign rule only classifies points <b>strictly inside</b> a region. A point with one coordinate 0 lies on a coordinate plane, a point with two zeros lies on an axis, and the origin has all three. Those points sit on the boundaries between octants and belong to none of them. “Which octant?” is a fair question only when none of <i>x</i>, <i>y</i>, <i>z</i> is zero, and examiners plant a stray zero precisely to catch this."
        },
        {
          "t": "defgrid",
          "title": "Planes and axes, by what vanishes",
          "tag": "set a coordinate to zero",
          "rows": [
            { "k": "<i>XY</i>-plane (the floor)", "v": "<i>z</i> = 0" },
            { "k": "<i>YZ</i>-plane (a wall)", "v": "<i>x</i> = 0" },
            { "k": "<i>ZX</i>-plane (the other wall)", "v": "<i>y</i> = 0" },
            { "k": "<i>x</i>-axis", "v": "<i>y</i> = 0 and <i>z</i> = 0" },
            { "k": "<i>y</i>-axis", "v": "<i>x</i> = 0 and <i>z</i> = 0" },
            { "k": "<i>z</i>-axis", "v": "<i>x</i> = 0 and <i>y</i> = 0" }
          ]
        },
        {
          "t": "defgrid",
          "title": "The octant sign table",
          "tag": "NCERT convention",
          "rows": [
            { "k": "Octant", "v": "I · II · III · IV · V · VI · VII · VIII" },
            { "k": "<i>x</i> sign", "v": "+ · − · − · + · + · − · − · +" },
            { "k": "<i>y</i> sign", "v": "+ · + · − · − · + · + · − · −" },
            { "k": "<i>z</i> sign", "v": "+ · + · + · + · − · − · − · −" }
          ]
        },
        {
          "t": "formula",
          "kicker": "COORDINATE VERSUS DISTANCE",
          "tag": "the sign is the only difference",
          "main": "<i>x</i> = ±dist(<i>P</i>, <i>YZ</i>) · <i>y</i> = ±dist(<i>P</i>, <i>ZX</i>) · <i>z</i> = ±dist(<i>P</i>, <i>XY</i>)",
          "legend": [
            "each coordinate is the <b>signed</b> perpendicular distance from the plane that the other two axes span",
            "so the actual distance is the <b>absolute value</b>: distance from <i>YZ</i> = |<i>x</i>|, from <i>ZX</i> = |<i>y</i>|, from <i>XY</i> = |<i>z</i>|"
          ],
          "note": "For (−5, 1, 2) the distance from the <i>YZ</i>-plane is 5, not −5. Distances are never negative, and a question that says “distance” has already thrown the sign away."
        },
        {
          "t": "diagram",
          "kind": "axes3d",
          "kicker": "DIAGRAM · THE EIGHT OCTANTS, ONE SIGN AT A TIME",
          "chips": ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"],
          "mathChips": true,
          "captions": [
            "Octant I, signs (+, +, +). The room you are standing in: right, forward and up are all positive. Only two octants have a single repeated sign, and this is one of them. Anchor on it.",
            "Octant II, signs (−, +, +). Still above the floor, but you have walked back through the YZ-wall, so x has gone negative. Compare with I: exactly one sign flipped, exactly one plane crossed.",
            "Octant III, signs (−, −, +). Above the floor, behind the YZ-wall and behind the ZX-wall. Two signs flipped from I, two planes crossed. Note the magnitudes here are 2, 2 and 1: the sizes never entered the decision.",
            "Octant IV, signs (+, −, +). Above the floor again, x positive, y negative. Octants I to IV are the four plane quadrants lifted upstairs, cycling the (x, y) signs in exactly the same order.",
            "Octant V, signs (+, +, −). The first basement room. The (x, y) pattern is the same as octant I, but z has turned negative, so you have dropped through the floor. Every octant from V on has z < 0.",
            "Octant VI, signs (−, +, −). Below the floor and behind the YZ-wall. The mirror image of octant II through the XY-plane. If you can read II, you can read VI: same picture, flipped downwards.",
            "Octant VII, signs (−, −, −). All three negative, diagonally opposite octant I through the origin. The other all-same-sign octant, and the second thing worth memorising outright.",
            "Octant VIII, signs (+, −, −). The last basement room, the mirror of octant IV. Top four above the floor, bottom four below, the same quadrant dance run twice."
          ],
          "frames": [
            { "axes3d": { "point": [2, 3, 2], "label": "(2, 3, 2)", "projections": true } },
            { "axes3d": { "point": [-2, 1, 1], "label": "(−2, 1, 1)", "projections": true } },
            { "axes3d": { "point": [-2, -2, 1], "label": "(−2, −2, 1)", "projections": true } },
            { "axes3d": { "point": [2, -1, 2], "label": "(2, −1, 2)", "projections": true } },
            { "axes3d": { "point": [1, 2, -1], "label": "(1, 2, −1)", "projections": true } },
            { "axes3d": { "point": [-2, 1, -1], "label": "(−2, 1, −1)", "projections": true } },
            { "axes3d": { "point": [-2, -3, -2], "label": "(−2, −3, −2)", "projections": true } },
            { "axes3d": { "point": [1, -1, -1], "label": "(1, −1, −1)", "projections": true } }
          ]
        },
        {
          "t": "p",
          "html": "Read the table one way and it is eight columns to memorise. Read it the other way and it is almost nothing: <b>octants I to IV all sit above the floor</b> and cycle the (<i>x</i>, <i>y</i>) signs exactly like the four quadrants of the plane, and <b>octants V to VIII are their mirror images below the floor</b>. So the <i>z</i>-sign picks the storey and the (<i>x</i>, <i>y</i>) pair picks the room, which is why a question that only asks “is it below the <i>XY</i>-plane?” never needs the table at all."
        },
        {
          "t": "proc",
          "title": "Identifying the octant of a point",
          "steps": [
            "<b>Check for a zero first.</b> If any of <i>x</i>, <i>y</i>, <i>z</i> is 0 the point is on a plane or an axis and the answer is “no octant”. Do this before anything else, because everything below assumes it passed.",
            "<b>Discard the magnitudes.</b> Keep only the sign of each coordinate. (−7, 3, −2) and (−0.1, 100, −0.4) carry the same information here.",
            "<b>Read the <i>z</i>-sign to pick the storey.</b> <i>z</i> > 0 puts you in I to IV, <i>z</i> < 0 in V to VIII. Half the table is gone in one glance.",
            "<b>Read the (<i>x</i>, <i>y</i>) pair as a plane quadrant.</b> (+, +) is the first of the four, (−, +) the second, (−, −) the third, (+, −) the fourth. Add 4 if you are downstairs. So (−, +, −) is the second room, downstairs, which is octant VI."
          ]
        },
        {
          "t": "proc",
          "title": "Feet of perpendiculars, and images",
          "steps": [
            "<b>Foot on a coordinate plane: kill the coordinate that the plane kills.</b> Projecting <i>P</i>(<i>x</i>, <i>y</i>, <i>z</i>) onto <i>XY</i> sets <i>z</i> → 0, giving (<i>x</i>, <i>y</i>, 0). Onto <i>YZ</i>: (0, <i>y</i>, <i>z</i>). Onto <i>ZX</i>: (<i>x</i>, 0, <i>z</i>). The perpendicular runs purely in the killed direction, so it cannot disturb the other two.",
            "<b>Foot on a coordinate axis: keep only the coordinate along that axis.</b> On the <i>x</i>-axis it is (<i>x</i>, 0, 0), on the <i>y</i>-axis (0, <i>y</i>, 0), on the <i>z</i>-axis (0, 0, <i>z</i>). A line is stricter than a plane: only the displacement along it survives.",
            "<b>Image in a plane: flip one sign</b>, the coordinate perpendicular to that plane. The image of <i>P</i> in <i>XY</i> is (<i>x</i>, <i>y</i>, −<i>z</i>), in <i>YZ</i> it is (−<i>x</i>, <i>y</i>, <i>z</i>), in <i>ZX</i> it is (<i>x</i>, −<i>y</i>, <i>z</i>).",
            "<b>Image in an axis: flip two signs</b>, the two coordinates perpendicular to it. The image in the <i>x</i>-axis is (<i>x</i>, −<i>y</i>, −<i>z</i>). <b>Image in the origin: flip all three.</b>",
            "<b>Count before you flip.</b> A mirror reverses only the direction across it. A plane is two directions wide, so one flip. An axis is one direction wide, so the two perpendicular directions both flip. The origin is a point, so all three do. Plane 1, axis 2, origin 3."
          ]
        },
        {
          "t": "diagram",
          "kind": "axes3d",
          "kicker": "DIAGRAM · WHERE A POINT LANDS WHEN YOU DROP IT",
          "chips": ["P(2, 2, 2)", "Foot on XY", "Foot on YZ", "Foot on ZX", "Foot on x-axis", "Foot on z-axis"],
          "captions": [
            "P(2, 2, 2) in the first octant. The grey dashed line runs along the floor from O, the amber dashed line climbs from the floor up to P, and the solid amber line is OP itself. Read the three coordinates off the drawing: two along x, two along y, two up z.",
            "Drop P straight down onto the floor. The XY-plane is z = 0, so the projection sets z to 0 and nothing else moves: the foot is M(2, 2, 0). The length of that vertical drop is |z| = 2, which is exactly the distance of P from the XY-plane.",
            "Drop P sideways onto the YZ-wall. That plane is x = 0, so x is the coordinate that dies: the foot is (0, 2, 2). The y and z of P are untouched, because the perpendicular to a plane moves in one direction only.",
            "Drop P onto the ZX-wall, which is y = 0. The foot is (2, 0, 2). Three planes, three feet, and in each case the rule is the same single sentence: set the plane's own coordinate to zero.",
            "Now project onto a line instead of a plane. The x-axis needs y = 0 and z = 0 together, so two coordinates die and only x survives: the foot is L(2, 0, 0). A plane kills one coordinate, an axis kills two.",
            "Foot on the z-axis: keep z, zero the other two, giving N(0, 0, 2). Notice this is not the nearest point of the picture to P by accident; the foot of a perpendicular is always the nearest point of that plane or line to P, which matters a great deal in Topic 02."
          ],
          "frames": [
            { "axes3d": { "point": [2, 2, 2], "label": "P(2, 2, 2)", "projections": true } },
            { "axes3d": { "point": [2, 2, 0], "label": "M(2, 2, 0)", "projections": true } },
            { "axes3d": { "point": [0, 2, 2], "label": "(0, 2, 2)", "projections": true } },
            { "axes3d": { "point": [2, 0, 2], "label": "(2, 0, 2)", "projections": true } },
            { "axes3d": { "point": [2, 0, 0], "label": "L(2, 0, 0)", "projections": true } },
            { "axes3d": { "point": [0, 0, 2], "label": "N(0, 0, 2)", "projections": true } }
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A point <i>P</i> has coordinates (5, −4, 9). (a) State its octant. (b) Find the foot of the perpendicular from <i>P</i> to the <i>ZX</i>-plane. (c) Find the distance of <i>P</i> from the <i>XY</i>-plane.",
          "steps": [
            "(a) The sign pattern is (+, −, +). <i>z</i> > 0, so it is upstairs, and (+, −) is the fourth quadrant pattern. Octant <b>IV</b>.",
            "(b) The <i>ZX</i>-plane is <i>y</i> = 0, so projecting kills <i>y</i>: the foot is (5, 0, 9).",
            "(c) Distance from the <i>XY</i>-plane is |<i>z</i>| = |9| = 9. Quote the rule before you substitute; “<i>ZX</i>-plane ⇒ <i>y</i> = 0” earns the method mark even if arithmetic slips."
          ],
          "ans": "IV · (5, 0, 9) · 9 units"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Among <i>A</i>(−1, −2, −3), <i>B</i>(2, −5, 4), <i>C</i>(−6, 7, −1) and <i>D</i>(3, 8, −2), how many lie in octants entirely below the <i>XY</i>-plane?",
          "steps": [
            "“Below the <i>XY</i>-plane” means <i>z</i> < 0, which is octants V to VIII. Do not name a single octant; just scan the third coordinate.",
            "<i>A</i>: <i>z</i> = −3, below. <i>B</i>: <i>z</i> = 4, above. <i>C</i>: <i>z</i> = −1, below. <i>D</i>: <i>z</i> = −2, below.",
            "Three of the four. A rushed student classifies all four points into octants I to VIII and burns a minute; the question only ever cared about one coordinate's sign."
          ],
          "ans": "3"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "The image of <i>P</i>(4, −3, 7) in the <i>YZ</i>-plane is <i>Q</i>. The image of <i>Q</i> in the <i>x</i>-axis is <i>R</i>. In which octant does <i>R</i> lie?",
          "steps": [
            "Reflection in the <i>YZ</i>-plane flips the one perpendicular coordinate, <i>x</i>: <i>Q</i> = (−4, −3, 7).",
            "Reflection in the <i>x</i>-axis flips the two coordinates perpendicular to it, <i>y</i> and <i>z</i>: <i>R</i> = (−4, 3, −7).",
            "Signs (−, +, −): <i>z</i> < 0 so downstairs, and (−, +) is the second quadrant pattern, so second room downstairs. Order matters here, and so does flipping the right <i>number</i> of signs: one for a plane, two for an axis."
          ],
          "ans": "Octant VI"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "Find the locus of all points equidistant from the <i>XY</i>-plane and the <i>YZ</i>-plane, and describe it geometrically.",
          "steps": [
            "Let <i>P</i>(<i>x</i>, <i>y</i>, <i>z</i>) be a general point. Distance from the <i>XY</i>-plane is |<i>z</i>|; distance from the <i>YZ</i>-plane is |<i>x</i>|.",
            "Equidistance means |<i>x</i>| = |<i>z</i>|, so <i>x</i><sup>2</sup> = <i>z</i><sup>2</sup>, that is (<i>x</i> − <i>z</i>)(<i>x</i> + <i>z</i>) = 0.",
            "So the locus is <b>not one surface but two</b>: the planes <i>x</i> = <i>z</i> and <i>x</i> = −<i>z</i>. Note <i>y</i> never appeared, so it is free and both planes contain the whole <i>y</i>-axis. They are the two planes bisecting the angles between the <i>XY</i>- and <i>YZ</i>-planes.",
            "Dropping the modulus and solving <i>x</i> = <i>z</i> alone silently throws away half the answer. That is the classic “you found only one of the two planes” deduction."
          ],
          "ans": "x = z and x = −z, a pair of planes through the y-axis"
        },
        {
          "t": "mcq",
          "q": "The point (−3, 0, 5) lies:",
          "correct": 2,
          "opts": [
            { "label": "in octant II", "nudge": "This ignores the zero and forces a sign pattern onto it, reading (−, 0, +) as if it were (−, +, +). A zero coordinate disqualifies a point from every octant." },
            { "label": "in octant III", "nudge": "Same mistake as the first option, with the zero pushed the other way. There is no rule for signing a 0, because there is nothing to sign." },
            { "label": "on the <i>ZX</i>-plane", "nudge": null },
            { "label": "on the <i>z</i>-axis", "nudge": "An axis needs <b>two</b> zeros. The <i>z</i>-axis is <i>x</i> = 0 and <i>y</i> = 0, but here <i>x</i> = −3 ≠ 0. One zero puts you on a plane, two put you on an axis." }
          ],
          "solution": "The y-coordinate is 0, and y = 0 is precisely the ZX-plane. So the point lies on that plane and in no octant."
        },
        {
          "t": "mcq",
          "q": "How many of the eight octants contain points with a negative <i>z</i>-coordinate?",
          "correct": 1,
          "opts": [
            { "label": "2", "nudge": "This treats “negative <i>z</i>” as if it named one or two specific octants. It is a condition on a whole storey, not a room number." },
            { "label": "4", "nudge": null },
            { "label": "6", "nudge": "This is counting octants that have <i>some</i> negative coordinate, which is a different question (and the answer to that one is 7, not 6)." },
            { "label": "8", "nudge": "If all eight had <i>z</i> < 0 there would be nothing above the floor. Exactly half of space sits on each side of the <i>XY</i>-plane." }
          ],
          "solution": "z < 0 characterises octants V, VI, VII and VIII, which is exactly four. The XY-plane splits the eight octants into four above and four below."
        },
        {
          "t": "mcq",
          "q": "The reflection of <i>P</i>(7, −2, −4) in the <i>x</i>-axis is:",
          "correct": 1,
          "opts": [
            { "label": "(−7, −2, −4)", "nudge": "This flips <i>x</i> only, which is reflection in the <i>YZ</i>-plane, not in the <i>x</i>-axis. Plane flips one, axis flips two." },
            { "label": "(7, 2, 4)", "nudge": null },
            { "label": "(−7, 2, 4)", "nudge": "Three signs flipped is reflection in the <b>origin</b>. One flip too many, and it lands in a different octant." },
            { "label": "(7, −2, 4)", "nudge": "Only <i>z</i> was flipped, which is reflection in the <i>XY</i>-plane, and <i>y</i> was left untouched. The <i>x</i>-axis is perpendicular to both <i>y</i> and <i>z</i>, so both must move." }
          ],
          "solution": "Reflection in the x-axis flips the two coordinates perpendicular to it, y and z: (7, −2, −4) becomes (7, 2, 4)."
        },
        {
          "t": "mcq",
          "q": "The distance of the point (2, −6, 3) from the <i>YZ</i>-plane is:",
          "correct": 0,
          "opts": [
            { "label": "2", "nudge": null },
            { "label": "6", "nudge": "This is |<i>y</i>|, which is the distance from the <i>ZX</i>-plane. Match the plane to the coordinate it sets to zero: <i>YZ</i> is <i>x</i> = 0, so <i>YZ</i> pairs with <i>x</i>." },
            { "label": "3", "nudge": "This is |<i>z</i>|, the distance from the <i>XY</i>-plane. Same mismatch as the previous option, one plane further round." },
            { "label": "7", "nudge": "This is <i>OP</i> = √(4 + 36 + 9) = 7, the distance from the <b>origin</b>. A correct number, answering a question that was not asked." }
          ],
          "solution": "The YZ-plane is x = 0, so the distance is |x| = |2| = 2. Distance from a plane uses one coordinate and nothing else."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Name the octants of (2, 1, 3), (−2, 1, 3) and (2, −1, −3).",
              "a": "(+, +, +) is octant I. (−, +, +) is octant II. (+, −, −) has z < 0 so it is downstairs, and (+, −) is the fourth quadrant pattern, so 4 + 4 = octant VIII."
            },
            {
              "q": "[CBSE] Write the foot of the perpendicular from (6, −2, 5) to (i) the y-axis and (ii) the XY-plane.",
              "a": "(i) On the y-axis only y survives: (0, −2, 0). (ii) The XY-plane is z = 0, so kill z: (6, −2, 0)."
            },
            {
              "q": "[JEE Main] A point lies on the YZ-plane, is at distance 4 from the ZX-plane and 3 from the XY-plane, with both relevant coordinates positive. Find it.",
              "a": "On the YZ-plane means x = 0. Distance 4 from the ZX-plane means |y| = 4, so y = 4. Distance 3 from the XY-plane means |z| = 3, so z = 3. The point is (0, 4, 3)."
            },
            {
              "q": "[JEE Main] The image of (−2, 5, −7) in the ZX-plane is reflected again in the origin. State the octant of the final point.",
              "a": "The ZX-plane is y = 0, so flip y: (−2, −5, −7). Reflection in the origin flips all three: (2, 5, 7). All positive, so octant I."
            },
            {
              "q": "[JEE Advanced] Find the locus of points equidistant from all three coordinate planes with x, y, z > 0, and identify it.",
              "a": "Equidistance from all three planes gives |x| = |y| = |z|. With every coordinate positive that collapses to x = y = z, which is a straight line through the origin running into the first octant: the space-diagonal direction."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Memorising octant names instead of signs.</b> Trying to recall which Roman numeral goes with which wall is fragile. The <i>signs</i> are the definition; the numeral is only a label. Recall the table, or rebuild it from “<i>z</i> picks the storey, (<i>x</i>, <i>y</i>) picks the room”.",
            "<b>Confusing a coordinate with a distance.</b> The distance of <i>P</i> from the <i>YZ</i>-plane is |<i>x</i>|, not <i>x</i>. For (−5, 1, 2) that distance is 5. Distances are never negative.",
            "<b>Forcing a zero point into an octant.</b> If any coordinate is 0 the point is on a plane or an axis and belongs to no octant. Check for zeros before you reach for the table.",
            "<b>Flipping the wrong number of signs.</b> Plane flips one, axis flips two, origin flips three. Reflecting in the <i>x</i>-axis by changing <i>x</i> is the single most common version of this, and it is exactly backwards.",
            "<b>Matching the wrong coordinate to a plane.</b> The <i>YZ</i>-plane is <i>x</i> = 0, so it pairs with <i>x</i>, not with <i>y</i> or <i>z</i>. Read the plane's name as “the plane the other two axes span”."
          ]
        },
        {
          "t": "protip",
          "html": "only two octants have all three signs the same: I is all plus, VII is all minus. anchor on those two and read everything else off the z-sign. z > 0 puts you in I to IV, behaving exactly like the four quadrants you already know, and z < 0 puts you in V to VIII, the same dance one floor down."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "XY: z = 0 · YZ: x = 0 · ZX: y = 0", "note": "a plane is one coordinate set to zero" },
            { "f": "x-axis: y = z = 0 · y-axis: x = z = 0 · z-axis: x = y = 0", "note": "an axis is two" },
            { "f": "dist from YZ = |x| · from ZX = |y| · from XY = |z|", "note": "coordinate is signed, distance is not" },
            { "f": "Octant count = 2³ = 8", "note": "three independent sign choices" },
            { "f": "I (+,+,+) · VII (−,−,−) · I to IV above, V to VIII below", "note": "z picks the storey, (x, y) picks the room" },
            { "f": "Image: plane flips 1 sign, axis 2, origin 3", "note": "count before you flip" }
          ],
          "aids": [
            "“a zero means no octant, ever”",
            "“top four upstairs, bottom four down, same quadrant dance”",
            "“plane one, axis two, origin three”"
          ]
        }
      ]
    },
    {
      "n": "02",
      "title": "Distance in Space",
      "chip": "02 DISTANCE",
      "kalam": "pythagoras, used twice",
      "blocks": [
        {
          "t": "p",
          "html": "In Topic 01 you learned to <b>name</b> a point in space. Now you learn to measure with it. There is only one new idea in this whole topic, and it is not new at all: <b>distance in space is Pythagoras used twice</b>. On flat paper the gap between two points is √((Δ<i>x</i>)<sup>2</sup> + (Δ<i>y</i>)<sup>2</sup>), the hypotenuse of a right triangle. Space adds a third perpendicular direction, so you apply the same idea one extra time."
        },
        {
          "t": "think",
          "html": "picture a drone hovering in a room. to reach it from the corner, first walk across the floor to the spot directly underneath it, then rise straight up. the drone's real distance is the hypotenuse of a triangle whose legs are “floor walk” and “height”. that picture is the formula."
        },
        {
          "t": "p",
          "html": "Write that out. The floor walk covers Δ<i>x</i> and Δ<i>y</i>, so its length squared is (Δ<i>x</i>)<sup>2</sup> + (Δ<i>y</i>)<sup>2</sup>. The rise covers Δ<i>z</i>. The floor walk is horizontal and the rise is vertical, so they are perpendicular and Pythagoras applies again: <b>distance<sup>2</sup> = [(Δ<i>x</i>)<sup>2</sup> + (Δ<i>y</i>)<sup>2</sup>] + (Δ<i>z</i>)<sup>2</sup></b>. That is also why the longest rod you can slide into a room is the space diagonal of that box, and why the formula is symmetric in the three coordinates: every direction gets the same treatment."
        },
        {
          "t": "formula",
          "kicker": "DISTANCE BETWEEN TWO POINTS",
          "tag": "the whole of Topic 02 in one line",
          "main": "<i>PQ</i> = √((<i>x</i><sub>2</sub> − <i>x</i><sub>1</sub>)<sup>2</sup> + (<i>y</i><sub>2</sub> − <i>y</i><sub>1</sub>)<sup>2</sup> + (<i>z</i><sub>2</sub> − <i>z</i><sub>1</sub>)<sup>2</sup>)",
          "legend": [
            "every difference is squared, so the order of <i>P</i> and <i>Q</i> never matters and no direction survives",
            "from the origin this collapses to <i>OP</i> = √(<i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> + <i>z</i><sup>2</sup>), which is the same formula with the second point at (0, 0, 0)"
          ],
          "note": "Work with <i>PQ</i><sup>2</sup> throughout and take the root only if the question asks for a length. It keeps the arithmetic clean, and any Pythagoras check you want to run is exact rather than decimal."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · DISTANCE FROM A BOX",
          "steps": [
            {
              "eq": "through <i>P</i> and <i>Q</i>, draw three planes each parallel to a coordinate plane",
              "why": "Six planes in all. They box in a rectangular parallelepiped with PQ as its space diagonal and every edge parallel to an axis. This construction is the whole proof; the rest is Pythagoras."
            },
            {
              "eq": "<i>PQ</i><sup>2</sup> = <i>PA</i><sup>2</sup> + <i>AQ</i><sup>2</sup>",
              "why": "A is the box vertex at P's height and directly below Q, so edge AQ runs purely along z while PA lies in a horizontal plane. Vertical against horizontal is a right angle, so triangle PAQ is right-angled at A."
            },
            {
              "eq": "<i>PA</i><sup>2</sup> = <i>PN</i><sup>2</sup> + <i>NA</i><sup>2</sup>",
              "why": "PA is itself the hypotenuse of a right triangle lying flat in that horizontal plane, with legs along the x- and y-directions. Second use of Pythagoras, and the last."
            },
            {
              "eq": "<i>PN</i> = |<i>x</i><sub>2</sub> − <i>x</i><sub>1</sub>|, <i>NA</i> = |<i>y</i><sub>2</sub> − <i>y</i><sub>1</sub>|, <i>AQ</i> = |<i>z</i><sub>2</sub> − <i>z</i><sub>1</sub>|",
              "why": "Every edge is parallel to an axis, so its length is just the gap in that one coordinate. The moduli are here because a length cannot be negative."
            },
            {
              "eq": "<i>PQ</i><sup>2</sup> = (<i>x</i><sub>2</sub> − <i>x</i><sub>1</sub>)<sup>2</sup> + (<i>y</i><sub>2</sub> − <i>y</i><sub>1</sub>)<sup>2</sup> + (<i>z</i><sub>2</sub> − <i>z</i><sub>1</sub>)<sup>2</sup>",
              "why": "Substitute the second equation into the first and square the edge lengths. The squares erase the absolute-value signs, which is exactly why direction never matters for a distance."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "axes3d",
          "kicker": "DIAGRAM · THE SPACE DIAGONAL OF A BOX",
          "chips": ["Floor leg", "Rise", "Space diagonal", "Two points"],
          "captions": [
            "First leg. From O, walk across the floor to the point directly beneath P, that is (2, 3, 0). The shaded rectangle is the floor of the box, and this walk is its diagonal: length √(2² + 3²) = √13. Nothing has left the XY-plane yet.",
            "Second leg. Now climb straight up by z = 2 to reach P(2, 3, 2). The amber dashed segment is that climb. It is vertical and the floor walk was horizontal, so the two legs meet at a right angle.",
            "The hypotenuse. OP is the solid amber line, the space diagonal of the box: OP² = 13 + 4 = 17, so OP = √17. Two applications of Pythagoras, one after the other, and that is the entire 3D distance formula.",
            "Two general points. For PQ rather than OP, slide the whole box so that P sits at the origin. The point drawn is then Q − P = (x₂ − x₁, y₂ − y₁, z₂ − z₁), and the same picture gives the same answer with differences in place of coordinates."
          ],
          "frames": [
            { "axes3d": { "point": [2, 3, 0], "label": "(2, 3, 0)", "box": true, "projections": false } },
            { "axes3d": { "point": [2, 3, 2], "label": "P(2, 3, 2)", "box": true, "projections": true } },
            { "axes3d": { "point": [2, 3, 2], "label": "OP = √17", "box": true, "projections": false } },
            { "axes3d": { "point": [2, 3, 2], "label": "Q − P", "box": false, "projections": false } }
          ]
        },
        {
          "t": "p",
          "html": "Now the contrast that Topic 01 set up and this topic completes. <b>Distance from a coordinate <i>plane</i> uses one coordinate. Distance from a coordinate <i>axis</i> uses the other two.</b> A plane kills one coordinate, so what is left over is a single modulus. An axis kills two, so what is left over is a two-term square root. Mixing these up is the commonest slip on a one-marker: the distance of (2, −6, 3) from the <i>YZ</i>-plane is 2, but its distance from the <i>x</i>-axis is √(36 + 9) = √45."
        },
        {
          "t": "def",
          "term": "Distance from an axis",
          "html": "The length of the perpendicular from <i>P</i> to that axis, measured to the <b>foot</b> you already know how to write down. The foot on the <i>z</i>-axis is <i>N</i>(0, 0, <i>z</i>), so <i>PN</i> = √((<i>x</i> − 0)<sup>2</sup> + (<i>y</i> − 0)<sup>2</sup> + (<i>z</i> − <i>z</i>)<sup>2</sup>) = √(<i>x</i><sup>2</sup> + <i>y</i><sup>2</sup>). The coordinate <i>along</i> the axis cancels itself out, every time."
        },
        {
          "t": "defgrid",
          "title": "One coordinate, or two",
          "tag": "plane against axis",
          "rows": [
            { "k": "From the <i>YZ</i>-plane", "v": "|<i>x</i>|" },
            { "k": "From the <i>ZX</i>-plane", "v": "|<i>y</i>|" },
            { "k": "From the <i>XY</i>-plane", "v": "|<i>z</i>|" },
            { "k": "From the <i>x</i>-axis", "v": "√(<i>y</i><sup>2</sup> + <i>z</i><sup>2</sup>), foot at (<i>x</i>, 0, 0)" },
            { "k": "From the <i>y</i>-axis", "v": "√(<i>z</i><sup>2</sup> + <i>x</i><sup>2</sup>), foot at (0, <i>y</i>, 0)" },
            { "k": "From the <i>z</i>-axis", "v": "√(<i>x</i><sup>2</sup> + <i>y</i><sup>2</sup>), foot at (0, 0, <i>z</i>)" }
          ]
        },
        {
          "t": "formula",
          "kicker": "A FREE SELF-CHECK",
          "tag": "carry it into the hall",
          "main": "<i>d<sub>x</sub></i><sup>2</sup> + <i>d<sub>y</sub></i><sup>2</sup> + <i>d<sub>z</sub></i><sup>2</sup> = 2 <i>OP</i><sup>2</sup>",
          "legend": [
            "<i>d<sub>x</sub></i>, <i>d<sub>y</sub></i>, <i>d<sub>z</sub></i> are the distances of the same point <i>P</i> from the three coordinate axes",
            "the reason is structural, not arithmetical: each of <i>x</i><sup>2</sup>, <i>y</i><sup>2</sup>, <i>z</i><sup>2</sup> appears in exactly two of the three axis distances, so the sum counts <i>OP</i><sup>2</sup> twice"
          ],
          "note": "Whenever a question asks for more than one axis distance, this identity checks all of them at once. For (2, −3, 6): 45 + 40 + 13 = 98 and <i>OP</i><sup>2</sup> = 49, and 98 = 2 × 49."
        },
        {
          "t": "p",
          "html": "One more question shape rides on the distance formula, and it is the one candidates most reliably half-answer: <b>find the points on an axis at a given distance <i>d</i> from a fixed point <i>P</i></b>. Writing the axis form first collapses three unknowns to one, exactly as in Topic 01. But imposing a distance leaves one squared term standing, so the equation is a genuine <b>quadratic</b>, and the honest answer is usually <i>two</i> points, not one."
        },
        {
          "t": "proc",
          "title": "Points on an axis at a given distance",
          "steps": [
            "<b>Write the axis form.</b> A point on the <i>y</i>-axis is <i>R</i>(0, <i>y</i>, 0), on the <i>x</i>-axis <i>R</i>(<i>x</i>, 0, 0), on the <i>z</i>-axis <i>R</i>(0, 0, <i>z</i>). One unknown, not three.",
            "<b>Count the answers before you solve.</b> Compute the axis distance <i>d</i><sub>min</sub> of <i>P</i> from that axis, using the two-coordinate formula. The foot of the perpendicular is the nearest point of the axis to <i>P</i>, so nothing on the axis can be closer than <i>d</i><sub>min</sub>.",
            "<b>Read off the count.</b> <i>d</i> > <i>d</i><sub>min</sub> gives <b>two</b> points, one on each side of the foot. <i>d</i> = <i>d</i><sub>min</sub> gives <b>one</b>, the foot itself. <i>d</i> < <i>d</i><sub>min</sub> gives <b>none</b>, and that is an answer, not a failure.",
            "<b>Square before you do anything else.</b> Impose <i>RP</i><sup>2</sup> = <i>d</i><sup>2</sup>, never <i>RP</i> = <i>d</i> with the radical standing.",
            "<b>Keep every real root.</b> The instant you see ( · )<sup>2</sup> = 16, write ±4 on the same line. A negative right-hand side is not an arithmetic slip to be fixed; it is the correct statement that no such point exists."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Show that <i>A</i>(0, 7, 10), <i>B</i>(−1, 6, 6) and <i>C</i>(−4, 9, 6) are the vertices of a right-angled isosceles triangle.",
          "steps": [
            "Work in squares throughout. <i>AB</i><sup>2</sup> = 1 + 1 + 16 = 18.",
            "<i>BC</i><sup>2</sup> = (−4 + 1)<sup>2</sup> + (9 − 6)<sup>2</sup> + 0 = 9 + 9 + 0 = 18. Two sides equal, so the triangle is isosceles.",
            "<i>CA</i><sup>2</sup> = 16 + 4 + 16 = 36. Now <i>AB</i><sup>2</sup> + <i>BC</i><sup>2</sup> = 18 + 18 = 36 = <i>CA</i><sup>2</sup>, so by the converse of Pythagoras the right angle sits at <i>B</i>.",
            "Never taking a root kept both checks exact. Had you rooted first you would be comparing √18 with 4.24 and hoping."
          ],
          "ans": "Isosceles, right-angled at B"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Find the distance of <i>P</i>(3, −4, 12) from (i) the <i>z</i>-axis, (ii) the <i>x</i>-axis, (iii) the <i>y</i>-axis and (iv) the origin.",
          "steps": [
            "In each case discard the coordinate lying <i>along</i> that axis and square-root the other two.",
            "(i) √(<i>x</i><sup>2</sup> + <i>y</i><sup>2</sup>) = √(9 + 16) = 5. (ii) √(<i>y</i><sup>2</sup> + <i>z</i><sup>2</sup>) = √(16 + 144) = √160 = 4√10.",
            "(iii) √(<i>z</i><sup>2</sup> + <i>x</i><sup>2</sup>) = √(144 + 9) = √153 = 3√17. (iv) <i>OP</i> = √(9 + 16 + 144) = √169 = 13.",
            "Every axis distance is smaller than <i>OP</i> = 13, and that is not luck: the foot of the perpendicular is the nearest point of the axis to <i>P</i>, and the origin is itself on that axis. Check with the identity: 25 + 160 + 153 = 338 = 2 × 169."
          ],
          "ans": "5 · 4√10 · 3√17 · 13"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Find the point on the <i>y</i>-axis equidistant from <i>A</i>(3, 1, 2) and <i>B</i>(−1, 5, −4).",
          "steps": [
            "Any point on the <i>y</i>-axis is <i>R</i>(0, <i>y</i>, 0). That single fact from Topic 01 collapses three unknowns to one.",
            "Impose <i>RA</i><sup>2</sup> = <i>RB</i><sup>2</sup>: 9 + (<i>y</i> − 1)<sup>2</sup> + 4 = 1 + (<i>y</i> − 5)<sup>2</sup> + 16.",
            "Expand: <i>y</i><sup>2</sup> − 2<i>y</i> + 14 = <i>y</i><sup>2</sup> − 10<i>y</i> + 42. The <i>y</i><sup>2</sup> terms cancel, leaving 8<i>y</i> = 28, so <i>y</i> = 7/2.",
            "That cancellation is the structural signal: an <b>equidistant</b> condition is always linear, because the two squares subtract each other away. Topic 05 turns this into a general rule."
          ],
          "ans": "(0, 7/2, 0)"
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Find the points on the <i>y</i>-axis at a distance 5√2 from <i>P</i>(3, −2, 5).",
          "steps": [
            "Count first. The distance of <i>P</i> from the <i>y</i>-axis is √(<i>z</i><sup>2</sup> + <i>x</i><sup>2</sup>) = √(25 + 9) = √34, and the required distance is 5√2 = √50. Since √50 > √34, expect <b>two</b> points.",
            "With <i>R</i>(0, <i>y</i>, 0), impose <i>RP</i><sup>2</sup> = 50: 9 + (<i>y</i> + 2)<sup>2</sup> + 25 = 50.",
            "There is no second point to subtract against, so nothing cancels the <i>y</i><sup>2</sup>: (<i>y</i> + 2)<sup>2</sup> = 16, hence <i>y</i> + 2 = ±4 and <i>y</i> = 2 or <i>y</i> = −6.",
            "The two answers are (0, 2, 0) and (0, −6, 0). The foot of the perpendicular from <i>P</i> is (0, −2, 0), exactly midway between them, as the count predicted."
          ],
          "ans": "(0, 2, 0) and (0, −6, 0)"
        },
        {
          "t": "mcq",
          "q": "The distance of the point (1, −2, 2) from the origin is:",
          "correct": 0,
          "opts": [
            { "label": "3", "nudge": null },
            { "label": "√5", "nudge": "This dropped a term, computing √(1 + 4) and stopping. All three squares go under the same root; space has three directions and the formula counts every one." },
            { "label": "9", "nudge": "This is <i>OP</i><sup>2</sup>, not <i>OP</i>. The root at the end is not optional decoration." },
            { "label": "√3", "nudge": "This added the magnitudes of the coordinates in some form without squaring them. The squares are what make the three perpendicular legs combine." }
          ],
          "solution": "OP = √(1² + (−2)² + 2²) = √(1 + 4 + 4) = √9 = 3."
        },
        {
          "t": "mcq",
          "q": "The distance of the point (2, −6, 3) from the <i>x</i>-axis is:",
          "correct": 2,
          "opts": [
            { "label": "2", "nudge": "This is |<i>x</i>|, the distance from the <i>YZ</i>-<b>plane</b>. A plane uses one coordinate; an axis uses the other two. This option answers the wrong half of the contrast." },
            { "label": "√13", "nudge": "This used <i>x</i> and <i>z</i>, √(4 + 9). For the <i>x</i>-axis it is <i>x</i> that must be discarded, not kept." },
            { "label": "3√5", "nudge": null },
            { "label": "7", "nudge": "This is <i>OP</i> = √(4 + 36 + 9), the distance from the origin. The origin lies on the <i>x</i>-axis, so <i>OP</i> can never be smaller than the perpendicular distance, and here it is strictly larger." }
          ],
          "solution": "Distance from the x-axis = √(y² + z²) = √(36 + 9) = √45 = 3√5. Discard the coordinate that runs along the axis."
        },
        {
          "t": "mcq",
          "q": "How many points on the <i>z</i>-axis lie at a distance 5 from <i>P</i>(3, 4, 7)?",
          "correct": 1,
          "opts": [
            { "label": "none", "nudge": "There would be none only if 5 were <b>less</b> than the axis distance √(9 + 16) = 5. It equals it exactly, so the boundary case applies." },
            { "label": "exactly one", "nudge": null },
            { "label": "exactly two", "nudge": "Two points appear when the required distance strictly exceeds <i>d</i><sub>min</sub>. Here they have merged: solving gives (<i>z</i> − 7)<sup>2</sup> = 0, a repeated root." },
            { "label": "infinitely many", "nudge": "A distance condition on a line is a quadratic in one unknown, so it can have at most two solutions. Infinitely many would need the condition to be an identity." }
          ],
          "solution": "The distance of P from the z-axis is √(x² + y²) = √(9 + 16) = 5, exactly the required distance. So the only point is the foot of the perpendicular, (0, 0, 7), and the algebra agrees: 9 + 16 + (z − 7)² = 25 gives the repeated root z = 7."
        },
        {
          "t": "mcq",
          "q": "If <i>d<sub>x</sub></i>, <i>d<sub>y</sub></i>, <i>d<sub>z</sub></i> are the distances of <i>P</i> from the three coordinate axes, then <i>d<sub>x</sub></i><sup>2</sup> + <i>d<sub>y</sub></i><sup>2</sup> + <i>d<sub>z</sub></i><sup>2</sup> equals:",
          "correct": 1,
          "opts": [
            { "label": "<i>OP</i><sup>2</sup>", "nudge": "This would be right if each of <i>x</i><sup>2</sup>, <i>y</i><sup>2</sup>, <i>z</i><sup>2</sup> appeared once in the sum. Each appears in two of the three axis distances, so the total is doubled." },
            { "label": "2 <i>OP</i><sup>2</sup>", "nudge": null },
            { "label": "3 <i>OP</i><sup>2</sup>", "nudge": "Three is the count of axis distances, not the count of times each squared coordinate is used. Write out (<i>y</i><sup>2</sup> + <i>z</i><sup>2</sup>) + (<i>z</i><sup>2</sup> + <i>x</i><sup>2</sup>) + (<i>x</i><sup>2</sup> + <i>y</i><sup>2</sup>) and count." },
            { "label": "<i>OP</i><sup>2</sup>/2", "nudge": "This has the factor upside down. Each axis distance is <i>smaller</i> than <i>OP</i>, but there are three of them, so the sum of squares comes out larger, not smaller." }
          ],
          "solution": "(y² + z²) + (z² + x²) + (x² + y²) = 2(x² + y² + z²) = 2 OP². Every squared coordinate is used in exactly two of the three axis distances."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Find the distance between (2, 3, 5) and (4, 3, 1), and check whether (1, 0, 0), (0, 1, 0), (0, 0, 1) form an equilateral triangle.",
              "a": "√(4 + 0 + 16) = √20 = 2√5. For the triangle, each of the three side-lengths squared is 1 + 1 + 0 = 2, so every side is √2 and the triangle is equilateral."
            },
            {
              "q": "[JEE Main] Find the distance of (1, 2, 3) from the y-axis.",
              "a": "Discard y and use the other two: √(z² + x²) = √(9 + 1) = √10."
            },
            {
              "q": "[CBSE] Find the points on the z-axis at a distance 7 from (2, 3, −1).",
              "a": "d_min = √(4 + 9) = √13 < 7, so expect two. With R(0, 0, z): 4 + 9 + (z + 1)² = 49, so (z + 1)² = 36 and z = 5 or z = −7. The points are (0, 0, 5) and (0, 0, −7)."
            },
            {
              "q": "[JEE Main] Find the points on the x-axis at a distance 3 from (1, 2, 5), or show there are none.",
              "a": "d_min = √(4 + 25) = √29, which is about 5.39 and larger than 3. No point of the axis can be nearer to P than its foot, so none exists. The algebra agrees: (x − 1)² + 4 + 25 = 9 gives (x − 1)² = −20, which has no real root."
            },
            {
              "q": "[JEE Main] For what value of d does the y-axis contain exactly one point at distance d from (6, −1, 8)?",
              "a": "Exactly one happens only at d = d_min = √(z² + x²) = √(64 + 36) = 10, and that single point is the foot of the perpendicular, (0, −1, 0)."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Confusing plane distance with axis distance.</b> A plane uses one coordinate, an axis uses the other two. Deciding which by feel is how a one-mark question is lost.",
            "<b>Forgetting to square, or forgetting to root.</b> Coordinate differences go in squared and the whole sum comes out rooted. Skipping either end gives an answer that is off by a whole operation.",
            "<b>Writing one root where there are two.</b> A fixed-distance condition is quadratic. The moment you reach ( · )<sup>2</sup> = 16, write ±4 on the same line, before you forget.",
            "<b>Treating a negative right-hand side as a slip.</b> (<i>x</i> − 1)<sup>2</sup> = −20 is not broken arithmetic. It is the honest statement that the required distance is smaller than the axis distance, so the locus is empty.",
            "<b>Assuming a triangle without checking.</b> Three given points may be collinear. Test with <i>AB</i> + <i>BC</i> = <i>AC</i>, or with the ratio method of Topic 04, before you start classifying angles."
          ]
        },
        {
          "t": "protip",
          "html": "square everything and stay there. keep <i>AB</i><sup>2</sup>, <i>BC</i><sup>2</sup>, <i>CA</i><sup>2</sup> on the page and only take a root if the question actually wants a length. the converse of pythagoras is then an exact integer check instead of a decimal comparison, and “which side is longest” is decided by the same numbers you already have."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "PQ = √((x₂ − x₁)² + (y₂ − y₁)² + (z₂ − z₁)²)", "note": "Pythagoras applied twice, floor leg then height" },
            { "f": "OP = √(x² + y² + z²)", "note": "the same formula with Q at the origin" },
            { "f": "From a plane: |x|, |y| or |z|", "note": "one coordinate, matched to the plane's own equation" },
            { "f": "From an axis: √(y² + z²), √(z² + x²), √(x² + y²)", "note": "the other two, because an axis kills two" },
            { "f": "d_x² + d_y² + d_z² = 2 OP²", "note": "free check whenever two axis distances are asked" },
            { "f": "On an axis at distance d: RP² = d², compare d with d_min", "note": "d > d_min two points, d = d_min one, d < d_min none" }
          ],
          "aids": [
            "“plane one coordinate, axis two”",
            "“stay squared until the last line”",
            "“a squared bracket always brings a ±”"
          ]
        }
      ]
    },
    {
      "n": "03",
      "title": "The Section Formula",
      "chip": "03 SECTION",
      "kalam": "three one-dimensional splits at once",
      "blocks": [
        {
          "t": "p",
          "html": "Topic 02 answered “how far apart are two points?”. This topic answers the next natural question: <b>where does a point sit that splits the gap between them in a given ratio?</b> It is the other half of this chapter's machinery, and between them the two formulas answer almost every question the chapter can ask."
        },
        {
          "t": "think",
          "html": "imagine a toll booth on the mumbai–pune expressway sitting at the point that divides the route 2 : 3. then <i>every</i> coordinate of that booth, its easting, its northing, its altitude, is the same 2 : 3 split of the two endpoints' matching coordinates. one 3d division is quietly three 1d divisions."
        },
        {
          "t": "p",
          "html": "That is not a coincidence, it is the reason the formula looks so simple. <b>A coordinate is a projection onto an axis, and parallel projection preserves ratios.</b> So a single division in space becomes three independent, identical one-dimensional divisions, one per axis. Nothing couples them, which is why you can solve for a ratio using one coordinate and then check it against the other two."
        },
        {
          "t": "p",
          "html": "Two flavours. If the dividing point <i>R</i> lies <b>between</b> <i>P</i> and <i>Q</i>, the division is <b>internal</b>: the booth is on the road. If <i>R</i> lies on the line <i>PQ</i> but <b>outside</b> the segment, beyond <i>P</i> or beyond <i>Q</i>, the division is <b>external</b>: the split point is an extrapolation. Internally the two parts add, externally they subtract, and that is exactly the sign difference between the two formulas."
        },
        {
          "t": "def",
          "term": "Internal and external division",
          "html": "<i>R</i> divides <i>PQ</i> in the ratio <i>m</i> : <i>n</i> means <i>PR</i> : <i>RQ</i> = <i>m</i> : <i>n</i>. Internally, <i>R</i> is between the ends and the denominator is <i>m</i> + <i>n</i>. Externally, <i>RQ</i> is measured in the opposite sense, so <i>n</i> is replaced by −<i>n</i> throughout and the denominator becomes <i>m</i> − <i>n</i>. External division is <b>undefined when <i>m</i> = <i>n</i></b>, and the geometry agrees: equal external parts push the point off to infinity."
        },
        {
          "t": "formula",
          "kicker": "SECTION FORMULA, INTERNAL",
          "tag": "m goes with the far point",
          "main": "<i>R</i> = ((<i>mx</i><sub>2</sub> + <i>nx</i><sub>1</sub>)/(<i>m</i> + <i>n</i>), (<i>my</i><sub>2</sub> + <i>ny</i><sub>1</sub>)/(<i>m</i> + <i>n</i>), (<i>mz</i><sub>2</sub> + <i>nz</i><sub>1</sub>)/(<i>m</i> + <i>n</i>))",
          "legend": [
            "the weights are crossed over: <i>m</i>, the part next to <i>P</i>, multiplies the <b>far</b> point <i>Q</i>",
            "swapping which point you called <i>P</i> and which <i>Q</i> silently inverts your ratio, so write the labels down before you substitute"
          ],
          "note": "The <b>midpoint</b> is just the 1 : 1 case, ((<i>x</i><sub>1</sub> + <i>x</i><sub>2</sub>)/2, (<i>y</i><sub>1</sub> + <i>y</i><sub>2</sub>)/2, (<i>z</i><sub>1</sub> + <i>z</i><sub>2</sub>)/2). Nothing is weighted, so nothing can be weighted the wrong way round."
        },
        {
          "t": "formula",
          "kicker": "SECTION FORMULA, EXTERNAL",
          "tag": "internal adds, external subtracts",
          "main": "<i>R</i> = ((<i>mx</i><sub>2</sub> − <i>nx</i><sub>1</sub>)/(<i>m</i> − <i>n</i>), (<i>my</i><sub>2</sub> − <i>ny</i><sub>1</sub>)/(<i>m</i> − <i>n</i>), (<i>mz</i><sub>2</sub> − <i>nz</i><sub>1</sub>)/(<i>m</i> − <i>n</i>))",
          "legend": [
            "the minus appears in the numerator <b>and</b> the denominator, together; changing one but not the other is the classic wreck",
            "<i>m</i> > <i>n</i> lands the point beyond <i>Q</i>; <i>m</i> < <i>n</i> lands it beyond <i>P</i>; <i>m</i> = <i>n</i> lands it nowhere"
          ],
          "note": "A negative ratio is just external division in disguise: dividing in <i>m</i> : <i>n</i> externally is the same as dividing in <i>m</i> : (−<i>n</i>) internally. Watch the signs rather than the words."
        },
        {
          "t": "formula",
          "kicker": "THE k : 1 FORM",
          "tag": "one unknown instead of two",
          "main": "<i>R</i> = ((<i>kx</i><sub>2</sub> + <i>x</i><sub>1</sub>)/(<i>k</i> + 1), (<i>ky</i><sub>2</sub> + <i>y</i><sub>1</sub>)/(<i>k</i> + 1), (<i>kz</i><sub>2</sub> + <i>z</i><sub>1</sub>)/(<i>k</i> + 1))",
          "legend": [
            "set <i>m</i> : <i>n</i> = <i>k</i> : 1 and every point of the line <i>PQ</i> is reached by one number <i>k</i>",
            "<i>k</i> > 0 means internal with ratio <i>k</i> : 1; <i>k</i> < 0 means <b>external</b> with ratio |<i>k</i>| : 1"
          ],
          "note": "Use this for every “find the ratio” and every “where does a plane cut the segment” question. One unknown instead of two, and the <b>sign</b> of <i>k</i> hands you internal against external for free, with no case analysis."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · PROJECTION PRESERVES RATIO",
          "steps": [
            {
              "eq": "let <i>R</i>(<i>x</i>, <i>y</i>, <i>z</i>) divide <i>PQ</i> internally with <i>PR</i> : <i>RQ</i> = <i>m</i> : <i>n</i>",
              "why": "That single sentence is the whole hypothesis. Everything below is it, projected onto one axis at a time."
            },
            {
              "eq": "drop perpendiculars from <i>P</i>, <i>R</i>, <i>Q</i> to the <i>XY</i>-plane, meeting it at <i>L</i>, <i>N</i>, <i>M</i>",
              "why": "All three perpendiculars are perpendicular to the same plane, so they are parallel to one another. That is the only geometric input in the proof."
            },
            {
              "eq": "<i>N</i> divides <i>LM</i> in the same ratio <i>m</i> : <i>n</i>",
              "why": "A fundamental fact of parallel projection: a family of parallel lines cuts any two transversals proportionally. The ratio measured along PQ is copied exactly onto the ratio measured in the plane."
            },
            {
              "eq": "(<i>z</i> − <i>z</i><sub>1</sub>)/(<i>z</i><sub>2</sub> − <i>z</i>) = <i>m</i>/<i>n</i>",
              "why": "Track the heights through that projection. Similar triangles turn the ratio of the two pieces of PQ into the ratio of the two height gaps."
            },
            {
              "eq": "<i>n</i>(<i>z</i> − <i>z</i><sub>1</sub>) = <i>m</i>(<i>z</i><sub>2</sub> − <i>z</i>), so <i>z</i>(<i>m</i> + <i>n</i>) = <i>mz</i><sub>2</sub> + <i>nz</i><sub>1</sub>",
              "why": "Cross-multiply and collect z. The m + n denominator is born right here, which is why internal division adds: both pieces of the segment are being counted."
            },
            {
              "eq": "<i>z</i> = (<i>mz</i><sub>2</sub> + <i>nz</i><sub>1</sub>)/(<i>m</i> + <i>n</i>), and identically for <i>x</i> and <i>y</i>",
              "why": "Projecting onto the YZ- and ZX-planes instead gives the other two coordinates by the identical argument. For external division R lies outside the segment, RQ is measured in the opposite sense, and replacing n by −n produces the m − n denominator."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "axes3d",
          "kicker": "DIAGRAM · ONE POINT, EVERY RATIO",
          "chips": ["P", "1 : 3", "Midpoint", "3 : 1", "Q", "External 1 : 3"],
          "captions": [
            "The starting end, P(1, 0, 2). Think of the ratio as k : 1 with k = 0: no weight at all on Q, so the dividing point sits exactly on P. Watch the drawn point march as you tap along the chips.",
            "Ratio 1 : 3 internally, a quarter of the way from P to Q. Each coordinate is split in the same 1 : 3 proportion independently: x stays at 1 because both ends have x = 1, y goes 0 to 0.5, z goes 2 to 1.5.",
            "The midpoint, the 1 : 1 case, at (1, 1, 1). Simply the average of the two ends. Nothing is weighted here, which is why the midpoint is the one case nobody gets backwards.",
            "Ratio 3 : 1 internally, three quarters of the way along, at (1, 1.5, 0.5). Compare with the second chip: 1 : 3 and 3 : 1 are different points, and reversing which end you called P swaps them. That is the ratio-order trap in one picture.",
            "The far end, Q(1, 2, 0). In k : 1 language this is k running off to infinity, all the weight on Q. Everything between the first chip and this one is internal division.",
            "External 1 : 3. The denominator becomes m − n = 1 − 3 = −2 and the point leaves the segment entirely, landing at (1, −1, 3), beyond P. Since m < n it went out past the first point, as the rule predicts; had m been the larger it would have shot out past Q instead."
          ],
          "frames": [
            { "axes3d": { "point": [1, 0, 2], "label": "P(1, 0, 2)", "projections": true } },
            { "axes3d": { "point": [1, 0.5, 1.5], "label": "R(1, 0.5, 1.5)", "projections": true } },
            { "axes3d": { "point": [1, 1, 1], "label": "M(1, 1, 1)", "projections": true } },
            { "axes3d": { "point": [1, 1.5, 0.5], "label": "R(1, 1.5, 0.5)", "projections": true } },
            { "axes3d": { "point": [1, 2, 0], "label": "Q(1, 2, 0)", "projections": true } },
            { "axes3d": { "point": [1, -1, 3], "label": "R(1, −1, 3)", "projections": true } }
          ]
        },
        {
          "t": "p",
          "html": "The commonest exam use of all this is not “find the point” but “<b>in what ratio does a coordinate plane divide this segment?</b>”. It is one line of algebra, because a coordinate plane is one coordinate set to zero. Write the general point in <i>k</i> : 1 form, set the relevant coordinate to 0, and solve. For <i>XY</i> that is the <i>z</i>-coordinate, for <i>YZ</i> the <i>x</i>, for <i>ZX</i> the <i>y</i>. The other two coordinates never enter the calculation."
        },
        {
          "t": "proc",
          "title": "Where a coordinate plane cuts a segment",
          "steps": [
            "<b>Name the plane's coordinate.</b> <i>XY</i> is <i>z</i> = 0, <i>YZ</i> is <i>x</i> = 0, <i>ZX</i> is <i>y</i> = 0. Only that one coordinate matters.",
            "<b>Predict the sign of <i>k</i> before you compute.</b> Compare that coordinate's value at the two endpoints. <b>Opposite signs</b> means the endpoints straddle the plane, the plane genuinely cuts the segment, and the division is internal. <b>Same sign</b> means both ends are on one side, the plane cannot reach the segment, and the division must be external. A zero at one end means that endpoint already lies on the plane.",
            "<b>Solve the single equation.</b> Set the relevant coordinate of the <i>k</i> : 1 point to 0 and solve for <i>k</i>. One linear equation, one unknown.",
            "<b>Read the sign, then translate.</b> <i>k</i> > 0 gives internal, ratio <i>k</i> : 1. <i>k</i> < 0 gives external, ratio |<i>k</i>| : 1. Say “externally” out loud and never write a negative ratio; both omissions cost the mark even when every line of algebra was right.",
            "<b>Same method, other disguise.</b> “Which point of <i>PQ</i> has <i>x</i> = 4?” is the identical question with the target value not zero. Set the relevant coordinate of the <i>k</i> : 1 point equal to whatever is asked, and everything else is unchanged."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Find the point dividing the join of <i>P</i>(−2, 3, 5) and <i>Q</i>(1, −4, 6) in the ratio 2 : 3, (i) internally and (ii) externally.",
          "steps": [
            "Fix the labels first: (<i>x</i><sub>1</sub>, <i>y</i><sub>1</sub>, <i>z</i><sub>1</sub>) = (−2, 3, 5), (<i>x</i><sub>2</sub>, <i>y</i><sub>2</sub>, <i>z</i><sub>2</sub>) = (1, −4, 6), <i>m</i> = 2, <i>n</i> = 3.",
            "(i) Denominator <i>m</i> + <i>n</i> = 5. <i>x</i> = (2 − 6)/5 = −4/5, <i>y</i> = (−8 + 9)/5 = 1/5, <i>z</i> = (12 + 15)/5 = 27/5, giving (−4/5, 1/5, 27/5).",
            "(ii) Every plus becomes a minus and the denominator becomes <i>m</i> − <i>n</i> = −1. <i>x</i> = (2 + 6)/(−1) = −8, <i>y</i> = (−8 − 9)/(−1) = 17, <i>z</i> = (12 − 15)/(−1) = 3, giving (−8, 17, 3).",
            "Check the geometry. The step from <i>P</i> to <i>Q</i> is (3, −7, 1). The internal point sits two fifths of that step past <i>P</i>; the external point sits two full steps <i>backwards</i> from <i>P</i>, which is where <i>m</i> < <i>n</i> says it should be."
          ],
          "ans": "(−4/5, 1/5, 27/5) internally · (−8, 17, 3) externally"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "In what ratio does the <i>XY</i>-plane divide the segment joining <i>P</i>(2, −3, 5) and <i>Q</i>(4, 6, −10)?",
          "steps": [
            "Predict. The <i>z</i>-values are 5 and −10, opposite in sign, so the endpoints straddle the plane and the division must be internal, with <i>k</i> positive.",
            "The <i>XY</i>-plane is <i>z</i> = 0. Force only the <i>z</i>-coordinate of the <i>k</i> : 1 point to zero: (−10<i>k</i> + 5)/(<i>k</i> + 1) = 0.",
            "So −10<i>k</i> + 5 = 0 and <i>k</i> = 1/2, positive as predicted. The ratio is 1/2 : 1, that is <b>1 : 2 internally</b>.",
            "Students who set up all three coordinates and hunt for the point burn a minute they did not have. For a plane, one coordinate's equation is the entire calculation."
          ],
          "ans": "1 : 2, internally"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Find the ratio in which the <i>YZ</i>-plane divides the segment joining <i>A</i>(4, 8, 10) and <i>B</i>(6, 10, −8), and find the point of division.",
          "steps": [
            "Predict. The <i>YZ</i>-plane is <i>x</i> = 0, and the <i>x</i>-values are 4 and 6, <b>both positive</b>. Both endpoints sit on the same side, so the plane cannot cross the segment and <i>k</i> must come out negative.",
            "Solve: (6<i>k</i> + 4)/(<i>k</i> + 1) = 0 gives 6<i>k</i> + 4 = 0, so <i>k</i> = −2/3. Negative, exactly as predicted, so the division is <b>external in the ratio 2 : 3</b>.",
            "For the point, use the external formula with <i>m</i> = 2, <i>n</i> = 3 and denominator −1: <i>x</i> = (12 − 12)/(−1) = 0, <i>y</i> = (20 − 24)/(−1) = 4, <i>z</i> = (−16 − 30)/(−1) = 46.",
            "The point is (0, 4, 46). Its <i>x</i> is 0, confirming it lies on the plane, and <i>z</i> = 46 is nowhere between 10 and −8, visible proof that it is outside the segment, beyond <i>A</i> as <i>m</i> < <i>n</i> predicts."
          ],
          "ans": "2 : 3 externally, at (0, 4, 46)"
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A point <i>R</i> with <i>x</i>-coordinate 4 lies on the segment joining <i>P</i>(2, −3, 4) and <i>Q</i>(8, 0, 10). Find <i>R</i>.",
          "steps": [
            "Same machinery, with the target value no longer zero. Let <i>R</i> divide <i>PQ</i> in <i>k</i> : 1, so its <i>x</i>-coordinate is (8<i>k</i> + 2)/(<i>k</i> + 1), and set that equal to 4.",
            "8<i>k</i> + 2 = 4(<i>k</i> + 1), so 4<i>k</i> = 2 and <i>k</i> = 1/2. Positive, so internal in the ratio 1 : 2, consistent with the word “segment” and with 4 lying between the endpoint <i>x</i>-values 2 and 8.",
            "Substitute <i>k</i> = 1/2 into the other two: <i>y</i> = (0 − 3)/(3/2) = −2 and <i>z</i> = (5 + 4)/(3/2) = 6.",
            "So <i>R</i>(4, −2, 6). “Where does the plane <i>z</i> = 0 cut <i>PQ</i>?” and “which point of <i>PQ</i> has <i>x</i> = 4?” are the same question with a different target number."
          ],
          "ans": "R(4, −2, 6)"
        },
        {
          "t": "mcq",
          "q": "The midpoint of the segment joining (4, −1, 7) and (−2, 5, 3) is:",
          "correct": 0,
          "opts": [
            { "label": "(1, 2, 5)", "nudge": null },
            { "label": "(3, 3, 2)", "nudge": "This is a mix of arithmetic slips rather than one identifiable rule. Average each pair on its own and none of these three numbers survives." },
            { "label": "(6, −6, 4)", "nudge": "This took the <b>difference</b> of the coordinates instead of the average. Differences belong in the distance formula, not the midpoint." },
            { "label": "(2, 4, 10)", "nudge": "This added the two coordinates and forgot to halve. A midpoint is an average, not a sum." }
          ],
          "solution": "((4 − 2)/2, (−1 + 5)/2, (7 + 3)/2) = (1, 2, 5)."
        },
        {
          "t": "mcq",
          "q": "The <i>XY</i>-plane divides the segment joining (1, 2, −3) and (3, 4, 5) in the ratio:",
          "correct": 0,
          "opts": [
            { "label": "3 : 5 internally", "nudge": null },
            { "label": "5 : 3 internally", "nudge": "This used 5/3 instead of 3/5, which is what happens when you swap which endpoint is “1” in the <i>k</i> : 1 form. The ratio order is not free." },
            { "label": "3 : 5 externally", "nudge": "The magnitude is right but the verdict is not. <i>k</i> came out positive, and positive means internal. Check the endpoint <i>z</i>-signs: −3 and 5 are opposite, so the plane really does cut between them." },
            { "label": "1 : 1", "nudge": "The plane would bisect only if the endpoint <i>z</i>-values were equal and opposite. Here they are −3 and 5, so the cut is off-centre." }
          ],
          "solution": "The XY-plane is z = 0, so (5k − 3)/(k + 1) = 0 gives k = 3/5. Positive, so internal, in the ratio 3 : 5."
        },
        {
          "t": "mcq",
          "q": "The <i>ZX</i>-plane divides the join of <i>A</i>(3, −4, 5) and <i>B</i>(1, −2, 7) in the ratio:",
          "correct": 2,
          "opts": [
            { "label": "2 : 1 internally", "nudge": "The algebra behind this is right and the reading is wrong. <i>k</i> came out −2, and the minus sign is the answer, not a nuisance to be dropped." },
            { "label": "1 : 2 externally", "nudge": "The verdict is right but the ratio is inverted. <i>k</i> = −2 means |<i>k</i>| : 1 = 2 : 1, not 1 : 2." },
            { "label": "2 : 1 externally", "nudge": null },
            { "label": "−2 : 1", "nudge": "A ratio of division is never written negative. The minus sign is carried by the word “externally”, which is what the examiner is looking for on the page." }
          ],
          "solution": "The ZX-plane is y = 0. Both y-values, −4 and −2, are negative, so the endpoints are on the same side and the answer is external before any algebra. Solving (−2k − 4)/(k + 1) = 0 gives k = −2, so the division is external in the ratio 2 : 1."
        },
        {
          "t": "mcq",
          "q": "External division of a segment in the ratio <i>m</i> : <i>n</i> is impossible when:",
          "correct": 1,
          "opts": [
            { "label": "<i>m</i> > <i>n</i>", "nudge": "This is perfectly possible; it simply lands the point beyond <i>Q</i>. The size comparison chooses the side, not whether the point exists." },
            { "label": "<i>m</i> = <i>n</i>", "nudge": null },
            { "label": "<i>m</i> < <i>n</i>", "nudge": "Also possible, and it lands the point beyond <i>P</i>. Both of the strict inequalities give genuine points, on opposite sides." },
            { "label": "<i>m</i> and <i>n</i> are both even", "nudge": "A ratio is unchanged by a common factor, so 2 : 4 and 1 : 2 are the same division. Parity cannot matter to a ratio." }
          ],
          "solution": "The external denominator is m − n, which vanishes at m = n. The geometry agrees: equal external parts push the dividing point off to infinity, so there is no such point."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Find the point dividing the join of A(2, −1, 4) and B(4, 3, 2) in the ratio 1 : 3, (i) internally and (ii) externally.",
              "a": "(i) Denominator 4: ((4 + 6)/4, (3 − 3)/4, (2 + 12)/4) = (5/2, 0, 7/2). (ii) Denominator 1 − 3 = −2: ((4 − 6)/(−2), (3 + 3)/(−2), (2 − 12)/(−2)) = (1, −3, 5). Since m < n the external point lies beyond A."
            },
            {
              "q": "[CBSE] Find the points that trisect the segment joining P(4, 2, −6) and Q(10, −16, 6).",
              "a": "Trisection means the ratios 1 : 2 and 2 : 1. For 1 : 2: ((10 + 8)/3, (−16 + 4)/3, (6 − 12)/3) = (6, −4, −2). For 2 : 1: ((20 + 4)/3, (−32 + 2)/3, (12 − 6)/3) = (8, −10, 2)."
            },
            {
              "q": "[JEE Main] Find the ratio in which the YZ-plane divides the join of (−2, 4, 7) and (3, −5, 8).",
              "a": "The x-values −2 and 3 have opposite signs, so predict internal. Solving (3k − 2)/(k + 1) = 0 gives k = 2/3, positive, so the division is internal in the ratio 2 : 3."
            },
            {
              "q": "[JEE Main] Predict without computing whether the XY-plane divides the join of A(2, −3, 4) and B(−1, −2, 1) internally or externally, then find the ratio.",
              "a": "The z-values 4 and 1 are both positive, so both endpoints lie above the plane and the division must be external. Solving (k + 4)/(k + 1) = 0 gives k = −4, so it is external in the ratio 4 : 1."
            },
            {
              "q": "[CBSE] Find the point on the line joining A(1, 2, 3) and B(3, 6, 9) whose y-coordinate is 5.",
              "a": "Set (6k + 2)/(k + 1) = 5, so 6k + 2 = 5k + 5 and k = 3. Positive, so internal in the ratio 3 : 1, and substituting gives x = (9 + 1)/4 = 5/2 and z = (27 + 3)/4 = 15/2. The point is (5/2, 5, 15/2)."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Mixing the internal and external forms.</b> Internal uses a plus in the numerator <i>and</i> <i>m</i> + <i>n</i> below. External uses a minus in both. Changing one but not the other produces a point that is on no useful part of the line.",
            "<b>Swapping the ratio order.</b> <i>m</i> : <i>n</i> means <i>PR</i> : <i>RQ</i>, so <i>m</i> multiplies the <b>second</b> point. Reversing which point you called <i>P</i> quietly inverts the answer: the 3 : 5 against 5 : 3 trap.",
            "<b>Dropping the sign of <i>k</i>.</b> Solving correctly and then reporting “2 : 1” when <i>k</i> = −2 loses the mark. The sign carries the word “externally”, which the examiner is reading for.",
            "<b>Writing a negative ratio.</b> “−2 : 1” is not how a ratio of division is stated. Convert it: <i>k</i> < 0 means external, ratio |<i>k</i>| : 1.",
            "<b>Solving all three coordinates for a plane question.</b> A coordinate plane sets one coordinate to zero, so exactly one equation matters. The other two are only there to compute the point once the ratio is known."
          ]
        },
        {
          "t": "protip",
          "html": "before you write a single equation for “in what ratio does this plane divide the segment”, look at the two endpoint values of the relevant coordinate. opposite signs means internal, same sign means external, one of them zero means that endpoint is already on the plane. it takes two seconds, and it is also your check: a same-sign prediction with a positive <i>k</i> on the page means you slipped somewhere."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "Internal m : n → (mx₂ + nx₁)/(m + n), and so on", "note": "m goes with the far point, denominator adds" },
            { "f": "External m : n → (mx₂ − nx₁)/(m − n), and so on", "note": "minus in numerator and denominator together" },
            { "f": "Midpoint = the 1 : 1 case, plain averages", "note": "no weights, so nothing to reverse" },
            { "f": "k : 1 form → (kx₂ + x₁)/(k + 1), and so on", "note": "k > 0 internal, k < 0 external with ratio |k| : 1" },
            { "f": "Plane cuts segment: set its coordinate to 0, solve for k", "note": "XY is z = 0, YZ is x = 0, ZX is y = 0" },
            { "f": "Same-sign endpoints ⇒ external · opposite signs ⇒ internal", "note": "predict first, then let the algebra agree" }
          ],
          "aids": [
            "“internal adds, external subtracts”",
            "“m goes with the far point”",
            "“solve for k, then read its sign out loud”"
          ]
        }
      ]
    },
    {
      "n": "04",
      "title": "Centroid, Collinearity and Figures",
      "chip": "04 APPLY",
      "kalam": "no new machinery, only new questions",
      "blocks": [
        {
          "t": "p",
          "html": "Everything in this topic is an <b>application</b> of the two results you already own: the distance formula and the section formula. There is no new machinery here at all, only new questions, and that is exactly why it is where the marks are. An examiner who wants to test both tools at once asks for a centroid, a collinearity check, or the type of a quadrilateral."
        },
        {
          "t": "p",
          "html": "Start with the <b>centroid</b>. Cut a triangle out of stiff card and balance it on a fingertip: the single point where it balances is the centroid <i>G</i>. Geometrically it is where the three medians meet, and each median is split by <i>G</i> in the ratio 2 : 1 measured from the vertex. In coordinates that collapses to something delightfully simple: <b><i>G</i> is the plain average of the three vertices</b>. The reason it is an average and not something messier is the independence idea from Topic 03: each coordinate behaves on its own, so balancing in space is three separate one-dimensional balancing acts."
        },
        {
          "t": "def",
          "term": "Centroid",
          "html": "The point of concurrency of the three medians of a triangle, and the average of the three vertices. It always exists, it is unique, and it has nothing to do with the side lengths, which is what distinguishes it from the incentre. Its reverse problem is a favourite: <b>the sum of the vertices is 3<i>G</i></b>, so multiply by 3 before you solve for a missing vertex."
        },
        {
          "t": "p",
          "html": "Next, <b>collinearity</b>. Three points are collinear when they lie on one straight line, that is, when they fail to make a triangle. There are two honest ways to detect it. The <b>distance lens</b>: if <i>B</i> lies between <i>A</i> and <i>C</i> then the long hop equals the two short hops, <i>AB</i> + <i>BC</i> = <i>AC</i>. The <b>section lens</b>: if the points are collinear then <i>B</i> must divide <i>AC</i> in some real ratio <i>k</i> : 1, and crucially <b>the same <i>k</i> must satisfy all three coordinates at once</b>."
        },
        {
          "t": "think",
          "html": "picture three milestones along the expressway. if they really are on the road, the middle one splits the gap between the outer two in a fixed proportion, and that proportion is the same whether you measure easting, northing or altitude. if even one of the three disagrees, that milestone is off the road."
        },
        {
          "t": "def",
          "term": "Collinear points",
          "html": "Three points lying on one straight line. The section test is the one JEE rewards, because it hands you the dividing ratio for free as a by-product. Its verification step is not optional: a single coordinate can match by coincidence, and <b>checking only <i>x</i> is the classic false positive</b>."
        },
        {
          "t": "formula",
          "kicker": "CENTROID OF A TRIANGLE",
          "tag": "the plain average",
          "main": "<i>G</i> = ((<i>x</i><sub>1</sub> + <i>x</i><sub>2</sub> + <i>x</i><sub>3</sub>)/3, (<i>y</i><sub>1</sub> + <i>y</i><sub>2</sub> + <i>y</i><sub>3</sub>)/3, (<i>z</i><sub>1</sub> + <i>z</i><sub>2</sub> + <i>z</i><sub>3</sub>)/3)",
          "legend": [
            "every vertex carries the same weight 1, which is the whole difference between a centroid and an incentre",
            "<i>G</i> divides each median in the ratio 2 : 1 measured <b>from the vertex</b>, so it sits twice as far from a vertex as from the opposite midpoint"
          ],
          "note": "Reverse form: <i>A</i> + <i>B</i> + <i>C</i> = 3<i>G</i>. Two vertices and the centroid always determine the third, and forgetting the factor of 3 is the only common slip in that question."
        },
        {
          "t": "formula",
          "kicker": "CENTROID OF A TETRAHEDRON",
          "tag": "beyond CBSE, JEE extension",
          "main": "<i>G</i> = ((<i>x</i><sub>1</sub> + <i>x</i><sub>2</sub> + <i>x</i><sub>3</sub> + <i>x</i><sub>4</sub>)/4, and the same for <i>y</i> and <i>z</i>)",
          "legend": [
            "join a vertex to the centroid of the opposite <b>face</b>; that segment is a median of the tetrahedron",
            "<i>G</i> divides each such median in the ratio <b>3 : 1</b> from the vertex, and all four medians pass through it"
          ],
          "note": "Memorise it as a family. A triangle: ratio 2 : 1, denominator 3. A tetrahedron: ratio 3 : 1, denominator 4. The proof is one line of the section formula, since 3<i>G</i><sub>1</sub> + <i>A</i> over 4 is exactly (<i>B</i> + <i>C</i> + <i>D</i> + <i>A</i>)/4."
        },
        {
          "t": "formula",
          "kicker": "INCENTRE OF A TRIANGLE",
          "tag": "beyond CBSE, JEE extension",
          "main": "<i>I</i> = (<i>aA</i> + <i>bB</i> + <i>cC</i>)/(<i>a</i> + <i>b</i> + <i>c</i>), read coordinate by coordinate",
          "legend": [
            "<i>a</i> = |<i>BC</i>|, <i>b</i> = |<i>CA</i>|, <i>c</i> = |<i>AB</i>|: each weight is the length of the side <b>opposite</b> the vertex it multiplies",
            "the same expression as the centroid with all three weights set to 1, which is the cleanest way to remember both"
          ],
          "note": "The order is what students reverse. The weight sitting next to <i>A</i>'s coordinates is <i>a</i> = |<i>BC</i>|, the side <i>A</i> does not touch. Centroid is a plain average; incentre is a weighted one."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE CENTROID FROM THE SECTION FORMULA",
          "steps": [
            {
              "eq": "<i>D</i> = ((<i>x</i><sub>2</sub> + <i>x</i><sub>3</sub>)/2, (<i>y</i><sub>2</sub> + <i>y</i><sub>3</sub>)/2, (<i>z</i><sub>2</sub> + <i>z</i><sub>3</sub>)/2)",
              "why": "D is the midpoint of BC, so the median from A runs to it. This is the 1 : 1 case of the section formula and nothing more."
            },
            {
              "eq": "<i>AG</i> : <i>GD</i> = 2 : 1",
              "why": "The one geometric fact imported from plane geometry: the centroid divides every median in 2 : 1 from the vertex. Everything after this line is arithmetic."
            },
            {
              "eq": "<i>x<sub>G</sub></i> = (2 · (<i>x</i><sub>2</sub> + <i>x</i><sub>3</sub>)/2 + 1 · <i>x</i><sub>1</sub>)/(2 + 1)",
              "why": "Apply the internal section formula on AD with m = 2, n = 1, taking A as the first point and D as the second. The far point D carries the weight 2."
            },
            {
              "eq": "<i>x<sub>G</sub></i> = (<i>x</i><sub>1</sub> + <i>x</i><sub>2</sub> + <i>x</i><sub>3</sub>)/3",
              "why": "The 2 cancels the halving inside D, which is precisely why the messy weights collapse into a plain average. The same computation on y and z finishes it."
            },
            {
              "eq": "the medians from <i>B</i> and from <i>C</i> give the same point",
              "why": "The expression is symmetric in the three vertices, so starting from any vertex lands you here. That symmetry is a clean proof that the three medians are concurrent."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "DIAGRAM · THREE MEDIANS, ONE BALANCE POINT",
          "chips": ["The triangle", "One median", "All three", "2 : 1 split"],
          "captions": [
            "Three points always lie in a plane, so a triangle is a flat figure even when its vertices sit in space. That is why this picture is drawn flat and why every result here has the same proof in 2D and in 3D: only the number of coordinates changes. Vertices A(0, 0), B(6, 0), C(3, 6).",
            "The median from A runs to D, the midpoint of the side A does not touch. Find D by averaging B and C: D = (4.5, 3). The commonest slip in a median question is running to the midpoint of a side that touches the vertex.",
            "All three medians drawn. They meet at a single point G(3, 2), and that is not an accident: the centroid formula is symmetric in the three vertices, so starting from any vertex lands on the same point. G is the plain average, ((0 + 6 + 3)/3, (0 + 0 + 6)/3).",
            "The 2 : 1 split, measured from the vertex. Along AD the centroid sits two parts from A and one part from D, so it is two thirds of the way along. Check it: A = (0, 0), D = (4.5, 3), and two thirds of the way is (3, 2), which is G."
          ],
          "frames": [
            {
              "x": [-1.5, 7.5],
              "y": [-1.5, 7],
              "points": [
                { "x": 0, "y": 0, "label": "A" },
                { "x": 6, "y": 0, "label": "B" },
                { "x": 3, "y": 6, "label": "C" }
              ],
              "segments": [
                { "from": [0, 0], "to": [6, 0] },
                { "from": [6, 0], "to": [3, 6] },
                { "from": [3, 6], "to": [0, 0] }
              ]
            },
            {
              "x": [-1.5, 7.5],
              "y": [-1.5, 7],
              "points": [
                { "x": 0, "y": 0, "label": "A" },
                { "x": 6, "y": 0, "label": "B" },
                { "x": 3, "y": 6, "label": "C" },
                { "x": 4.5, "y": 3, "label": "D" }
              ],
              "segments": [
                { "from": [0, 0], "to": [6, 0], "soft": true },
                { "from": [6, 0], "to": [3, 6], "soft": true },
                { "from": [3, 6], "to": [0, 0], "soft": true },
                { "from": [0, 0], "to": [4.5, 3], "dash": true }
              ]
            },
            {
              "x": [-1.5, 7.5],
              "y": [-1.5, 7],
              "points": [
                { "x": 0, "y": 0, "label": "A" },
                { "x": 6, "y": 0, "label": "B" },
                { "x": 3, "y": 6, "label": "C" },
                { "x": 3, "y": 2, "label": "G", "at": "se" }
              ],
              "segments": [
                { "from": [0, 0], "to": [6, 0], "soft": true },
                { "from": [6, 0], "to": [3, 6], "soft": true },
                { "from": [3, 6], "to": [0, 0], "soft": true },
                { "from": [0, 0], "to": [4.5, 3], "dash": true },
                { "from": [6, 0], "to": [1.5, 3], "dash": true },
                { "from": [3, 6], "to": [3, 0], "dash": true }
              ]
            },
            {
              "x": [-1.5, 7.5],
              "y": [-1.5, 7],
              "points": [
                { "x": 0, "y": 0, "label": "A" },
                { "x": 4.5, "y": 3, "label": "D" },
                { "x": 3, "y": 2, "label": "G", "at": "se" }
              ],
              "segments": [
                { "from": [0, 0], "to": [6, 0], "soft": true },
                { "from": [6, 0], "to": [3, 6], "soft": true },
                { "from": [3, 6], "to": [0, 0], "soft": true },
                { "from": [0, 0], "to": [4.5, 3], "dash": true }
              ],
              "labels": [
                { "x": 1.3, "y": 1.35, "text": "2 parts" },
                { "x": 3.6, "y": 3.0, "text": "1 part" }
              ]
            }
          ]
        },
        {
          "t": "proc",
          "title": "Testing collinearity by ratio",
          "steps": [
            "<b>Suppose <i>B</i> divides <i>AC</i> in the ratio <i>k</i> : 1.</b> Two of the three points become the ends and the third becomes the dividing point. Which one you pick as the middle does not matter, but say it out loud so you know what your <i>k</i> means.",
            "<b>Solve for <i>k</i> from one coordinate alone.</b> Set (<i>kx</i><sub>3</sub> + <i>x</i><sub>1</sub>)/(<i>k</i> + 1) = <i>x</i><sub>2</sub> and solve. If that coordinate happens to be equal at both ends, pick a different one.",
            "<b>Verify that the same <i>k</i> reproduces <i>y</i><sub>2</sub> and <i>z</i><sub>2</sub>.</b> This step is not optional. A single coordinate can match by coincidence, and stopping after <i>x</i> is the classic false positive.",
            "<b>Report.</b> If all three agree the points are collinear and you already have the dividing ratio for free. If any one disagrees they are not collinear, and no amount of algebra elsewhere will change that.",
            "<b>The alternative.</b> Compute <i>AB</i>, <i>BC</i>, <i>CA</i> and check whether the largest equals the sum of the other two. It works, but it costs three square roots and it does not hand you the ratio."
          ]
        },
        {
          "t": "proc",
          "title": "Reading a quadrilateral, and finding a missing vertex",
          "steps": [
            "<b>Parallelogram.</b> Both pairs of opposite sides equal and parallel. The cleanest check is on the side steps: <i>B</i> − <i>A</i> = <i>C</i> − <i>D</i> and <i>D</i> − <i>A</i> = <i>C</i> − <i>B</i>, coordinate by coordinate.",
            "<b>Then narrow it.</b> All four sides equal makes it a rhombus. Equal diagonals make it a rectangle. Both together make it a square. Compute all four sides and both diagonals once and read off all three verdicts.",
            "<b>Fourth vertex of <i>ABCD</i>.</b> The diagonals of a parallelogram bisect each other, so <i>AC</i> and <i>BD</i> share a midpoint. Equating them gives <b><i>D</i> = <i>A</i> + <i>C</i> − <i>B</i></b>: add the two vertices adjacent to the unknown and subtract the one opposite it.",
            "<b>Watch the naming.</b> In <i>ABCD</i> the opposite pairs are <i>A</i>, <i>C</i> and <i>B</i>, <i>D</i>, which is why <i>B</i> carries the minus. If the question merely says “three vertices of a parallelogram” without fixing the order, there are <b>three</b> answers, one for each choice of which given point is opposite the new one.",
            "<b>Verify in ten seconds.</b> Check that the step <i>A</i> → <i>B</i> equals the step <i>D</i> → <i>C</i>. If the two triples match, the figure closes."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "(a) Find the centroid of the triangle <i>A</i>(2, −1, 4), <i>B</i>(6, 3, −2), <i>C</i>(1, 4, 5). (b) Two vertices of a triangle are (2, −1, 4) and (6, 3, −2) and its centroid is (3, 2, 7/3). Find the third vertex.",
          "steps": [
            "(a) Average each coordinate: <i>G</i> = ((2 + 6 + 1)/3, (−1 + 3 + 4)/3, (4 − 2 + 5)/3) = (3, 2, 7/3).",
            "(b) The reverse problem is just “sum of vertices = 3 × centroid”. Multiply through by 3 first.",
            "<i>x</i> = 3(3) − 2 − 6 = 1, <i>y</i> = 3(2) − (−1) − 3 = 4, <i>z</i> = 3(7/3) − 4 − (−2) = 5.",
            "The third vertex is (1, 4, 5), consistent with part (a) as it must be. The only common slip here is forgetting the factor of 3."
          ],
          "ans": "G = (3, 2, 7/3) · third vertex (1, 4, 5)"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Are <i>A</i>(2, 1, −1), <i>B</i>(4, 4, 3) and <i>C</i>(8, 10, 11) collinear?",
          "steps": [
            "Let <i>B</i> divide <i>AC</i> in <i>k</i> : 1 and solve from <i>x</i> alone: (8<i>k</i> + 2)/(<i>k</i> + 1) = 4, so 8<i>k</i> + 2 = 4<i>k</i> + 4 and <i>k</i> = 1/2.",
            "Now the mandatory check. With <i>k</i> = 1/2 the <i>y</i>-coordinate is (10(1/2) + 1)/(3/2) = 6/(3/2) = 4, which matches <i>B</i>.",
            "And the <i>z</i>-coordinate is (11(1/2) − 1)/(3/2) = 4.5/1.5 = 3, which also matches.",
            "All three agree, so the points are collinear and <i>B</i> divides <i>AC</i> in 1 : 2. Had the <i>y</i>- or <i>z</i>-check failed, the answer would flip entirely; one coordinate is never proof."
          ],
          "ans": "Collinear, with B dividing AC in 1 : 2"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Show that <i>A</i>(1, 0, 2), <i>B</i>(4, 2, 3), <i>C</i>(5, 7, 2), <i>D</i>(2, 5, 1) are the vertices of a parallelogram <i>ABCD</i>, and decide whether it is a rectangle.",
          "steps": [
            "Compare side steps rather than lengths. <i>B</i> − <i>A</i> = (3, 2, 1) and <i>C</i> − <i>D</i> = (3, 2, 1), so <i>AB</i> and <i>DC</i> are equal and parallel.",
            "<i>D</i> − <i>A</i> = (1, 5, −1) and <i>C</i> − <i>B</i> = (1, 5, −1), so <i>AD</i> and <i>BC</i> match too. Both pairs of opposite sides equal and parallel makes it a parallelogram.",
            "A parallelogram is a rectangle exactly when its diagonals are equal. |<i>AC</i>|<sup>2</sup> = 16 + 49 + 0 = 65 and |<i>BD</i>|<sup>2</sup> = 4 + 9 + 4 = 17.",
            "Since 65 ≠ 17 the diagonals are unequal, so it is <b>not</b> a rectangle. Comparing squares is enough; there was never any need to take a root."
          ],
          "ans": "A parallelogram, but not a rectangle"
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Three vertices of a parallelogram <i>ABCD</i> are <i>A</i>(3, −1, 2), <i>B</i>(1, 2, −4) and <i>C</i>(−1, 1, 2). Find <i>D</i>.",
          "steps": [
            "The diagonals <i>AC</i> and <i>BD</i> share a midpoint, so <i>D</i> = <i>A</i> + <i>C</i> − <i>B</i>. In <i>ABCD</i> the vertex opposite <i>D</i> is <i>B</i>, which is why <i>B</i> carries the minus.",
            "<i>x</i> = 3 + (−1) − 1 = 1, <i>y</i> = −1 + 1 − 2 = −2, <i>z</i> = 2 + 2 − (−4) = 8.",
            "So <i>D</i>(1, −2, 8). Verify: the step <i>A</i> → <i>B</i> is (−2, 3, −6) and the step <i>D</i> → <i>C</i> is (−2, 3, −6). Identical, so the figure closes.",
            "Because the question named the vertices in order, the answer is unique. If it had merely said “three vertices of a parallelogram”, there would be three answers."
          ],
          "ans": "D(1, −2, 8)"
        },
        {
          "t": "mcq",
          "q": "The centroid of the triangle with vertices (2, 3, −1), (4, −1, 3) and (0, 4, 1) is:",
          "correct": 0,
          "opts": [
            { "label": "(2, 2, 1)", "nudge": null },
            { "label": "(6, 6, 3)", "nudge": "This is the sum of the vertices with the division by 3 forgotten. Notice it is exactly three times the right answer, which is the fingerprint of this slip." },
            { "label": "(2, 2, 3)", "nudge": "The <i>x</i> and <i>y</i> are right, so the slip is in <i>z</i> alone: −1 was read as +1, giving 5/3 rather than 1. Recheck the signs before averaging." },
            { "label": "(3, 3, 1.5)", "nudge": "This divided by 2 instead of 3, which is the midpoint denominator. A centroid balances three vertices, so three is what goes underneath." }
          ],
          "solution": "((2 + 4 + 0)/3, (3 − 1 + 4)/3, (−1 + 3 + 1)/3) = (2, 2, 1)."
        },
        {
          "t": "mcq",
          "q": "The points (1, 2, 3), (2, 3, 4) and (<i>k</i>, 5, 6) are collinear. Then <i>k</i> equals:",
          "correct": 1,
          "opts": [
            { "label": "3", "nudge": "This advances only two steps along the direction, which would land at <i>z</i> = 5, not 6. Count the <i>z</i>-gap from the first point: it is 3." },
            { "label": "4", "nudge": null },
            { "label": "5", "nudge": "This over-advances: four steps would put <i>z</i> at 7. Every coordinate has to move by the same number of steps." },
            { "label": "6", "nudge": "Five steps, which would give <i>z</i> = 8. This looks like reading the <i>y</i>-value 5 off the third point and copying it into <i>x</i>." }
          ],
          "solution": "The first two points differ by the direction (1, 1, 1). Reaching z = 6 from the first point needs +3, so every coordinate advances by 3 and x = 1 + 3 = 4. Check y: 2 + 3 = 5, which matches."
        },
        {
          "t": "mcq",
          "q": "The centroid divides a median of a triangle in the ratio (vertex : midpoint):",
          "correct": 2,
          "opts": [
            { "label": "1 : 1", "nudge": "That would put the centroid at the middle of the median, which is a different point entirely. The median's midpoint is not a triangle centre." },
            { "label": "1 : 2", "nudge": "This is the same ratio read the wrong way round, from the midpoint towards the vertex. The centroid sits nearer the opposite side, not nearer the vertex." },
            { "label": "2 : 1", "nudge": null },
            { "label": "3 : 1", "nudge": "3 : 1 is the tetrahedron's ratio, vertex to the centroid of the opposite <b>face</b>. Triangle 2 : 1 with denominator 3, tetrahedron 3 : 1 with denominator 4." }
          ],
          "solution": "The centroid sits twice as far from the vertex as from the opposite midpoint, so the ratio measured from the vertex is 2 : 1. That is exactly the ratio the section formula uses to derive G."
        },
        {
          "t": "mcq",
          "q": "Three points are given as “three vertices of a parallelogram”, with no order specified. How many positions are possible for the fourth vertex?",
          "correct": 2,
          "opts": [
            { "label": "one", "nudge": "One answer requires the question to fix which vertices are opposite, for instance by naming the figure <i>ABCD</i>. Without that, the labelling is genuinely free." },
            { "label": "two", "nudge": "This counts only two of the three choices of “which given point is opposite the new one”. There are three given points, so three choices." },
            { "label": "three", "nudge": null },
            { "label": "infinitely many", "nudge": "Once you choose which given point is opposite the fourth, <i>D</i> = <i>A</i> + <i>C</i> − <i>B</i> pins it down exactly. Three choices, three points, and no freedom left." }
          ],
          "solution": "The unknown vertex is opposite exactly one of the three given points, and each choice gives one answer via D = A + C − B. Three given points therefore sit inside three different parallelograms."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Find the centroid of the triangle with vertices (3, −1, 2), (1, 2, −4) and (−1, 5, 2).",
              "a": "((3 + 1 − 1)/3, (−1 + 2 + 5)/3, (2 − 4 + 2)/3) = (1, 2, 0)."
            },
            {
              "q": "[JEE Main] Show that A(−2, 3, 5), B(1, 2, 3), C(7, 0, −1) are collinear and find the ratio in which B divides AC.",
              "a": "From x: (7k − 2)/(k + 1) = 1 gives 6k = 3, so k = 1/2. Check y: (0 + 3)/(3/2) = 2, correct. Check z: (−1(1/2) + 5)/(3/2) = 4.5/1.5 = 3, correct. All three agree, so the points are collinear and B divides AC in 1 : 2."
            },
            {
              "q": "[CBSE] Find the lengths of the medians of the triangle A(0, 0, 6), B(0, 4, 0), C(6, 0, 0).",
              "a": "Midpoint of BC is (3, 2, 0), so AD = √(9 + 4 + 36) = 7. Midpoint of CA is (3, 0, 3), so BE = √(9 + 16 + 9) = √34. Midpoint of AB is (0, 2, 3), so CF = √(36 + 4 + 9) = 7. Two are equal because |AB| = |BC| = √52, so the triangle is isosceles about B."
            },
            {
              "q": "[JEE Main] Find the incentre of the triangle A(2, 3, 5), B(11, 3, 5), C(2, 15, 5).",
              "a": "a = |BC| = √(81 + 144) = 15, b = |CA| = √144 = 12, c = |AB| = √81 = 9, so a + b + c = 36. Then x = (15(2) + 12(11) + 9(2))/36 = 180/36 = 5 and y = (15(3) + 12(3) + 9(15))/36 = 216/36 = 6, with z = 5 throughout. The incentre is (5, 6, 5)."
            },
            {
              "q": "[JEE Main] Three vertices of a tetrahedron are A(2, −1, 3), B(4, 3, −2), C(0, 5, 1) and its centroid is G(1, 2, 1). Find the fourth vertex D.",
              "a": "The sum of the four vertices is 4G = (4, 8, 4). The three given ones sum to (6, 7, 2), so D = (4, 8, 4) − (6, 7, 2) = (−2, 1, 2)."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Declaring collinearity from one coordinate.</b> Solving <i>k</i> from <i>x</i> and stopping is the top error in this topic. Always confirm the same <i>k</i> fits <i>y</i> and <i>z</i>.",
            "<b>Forgetting the ×3 in reverse centroid problems.</b> The sum of the vertices is 3<i>G</i>, not <i>G</i>. Scale before you solve, and the arithmetic stays trivial.",
            "<b>Averaging the incentre.</b> The centroid divides by 3 and the tetrahedron centroid by 4, but the incentre is a <i>weighted</i> average by opposite side lengths. Averaging it plainly gives the wrong point.",
            "<b>Attaching the incentre weights to the wrong vertices.</b> The weight next to <i>A</i> is <i>a</i> = |<i>BC</i>|, the side opposite <i>A</i>. Pairing <i>A</i> with |<i>AB</i>| is the standard reversal.",
            "<b>Assuming three points make a triangle.</b> They may be collinear, in which case there is no centroid worth having and no angles to classify. Test first."
          ]
        },
        {
          "t": "protip",
          "html": "for any “are these collinear, and in what ratio” question, go straight to the section-ratio method: solve <i>k</i> from one coordinate, then verify across the other two. it is faster than three distance computations <i>and</i> it hands you the ratio as a bonus. and for “what type of figure”, compute all four sides and both diagonals once: sides equal means rhombus, diagonals equal means rectangle, both means square."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "G = ((Σx)/3, (Σy)/3, (Σz)/3)", "note": "plain average, and A + B + C = 3G in reverse" },
            { "f": "G divides each median 2 : 1 from the vertex", "note": "tetrahedron: 3 : 1, denominator 4" },
            { "f": "Collinear ⇔ one k : 1 fits x, y and z together", "note": "or AB + BC = AC, which costs three roots" },
            { "f": "Incentre I = (aA + bB + cC)/(a + b + c)", "note": "a = |BC|, the side opposite A" },
            { "f": "Fourth vertex of ABCD: D = A + C − B", "note": "order unspecified gives three answers" },
            { "f": "Sides equal ⇒ rhombus · diagonals equal ⇒ rectangle", "note": "both together give a square" }
          ],
          "aids": [
            "“centroid is a plain average, incentre is a weighted one”",
            "“one ratio must fit all three coordinates”",
            "“triangle 2 : 1 over 3, tetrahedron 3 : 1 over 4”"
          ]
        }
      ]
    },
    {
      "n": "05",
      "title": "Locus: Planes, Spheres and Cylinders",
      "chip": "05 LOCUS",
      "kalam": "a rule, turned into an equation",
      "blocks": [
        {
          "t": "p",
          "html": "A <b>locus</b> is the set of <i>all</i> points obeying a stated condition. In two dimensions a distance rule carves out a curve; in three dimensions it carves out a <b>surface</b>. The whole skill of this topic is translating a sentence into an equation and then recognising, from the shape of that equation, what you have drawn."
        },
        {
          "t": "def",
          "term": "Locus",
          "html": "The set of every point satisfying a given rule, and nothing else. Two words carry all the weight: <b>every</b>, so you may not throw away half the answer, and <b>only</b>, so you may not include points the rule excludes. A tethered goat grazes a circle in the plane; in space it grazes a sphere."
        },
        {
          "t": "p",
          "html": "Three rules do almost all the work in this chapter, and they are worth knowing by their answers rather than by their algebra. <b>Equidistant from two fixed points</b> gives a flat plane, the perpendicular bisector of the segment joining them. <b>At a fixed distance from one fixed point</b> gives a sphere. <b>At a fixed distance from a fixed line</b> gives a right circular cylinder. A richer condition, a constant <i>sum</i> of distances from two fixed points, bends space into an <b>ellipsoid</b>, the spatial cousin of the ellipse."
        },
        {
          "t": "think",
          "html": "count the squares before you expand anything. two points subtract their squares away and you are left with a plane. one point keeps its square and you get a sphere. that single glance tells you whether the answer is linear or quadratic before you have written a line."
        },
        {
          "t": "p",
          "html": "That last observation is the load-bearing one. Imposing <i>PA</i> = <i>PB</i> on a variable point and squaring gives <i>PA</i><sup>2</sup> = <i>PB</i><sup>2</sup>; every <i>x</i><sup>2</sup>, <i>y</i><sup>2</sup> and <i>z</i><sup>2</sup> appears on both sides and cancels, leaving a <b>linear</b> equation. So <b>each equidistance condition costs exactly one linear equation</b>, and the problem becomes simultaneous linear equations. Impose a distance from a single point instead and nothing cancels: the equation stays quadratic, and that is why one gives a plane and the other a sphere."
        },
        {
          "t": "formula",
          "kicker": "PERPENDICULAR BISECTOR PLANE",
          "tag": "two points give a plane",
          "main": "<i>PA</i><sup>2</sup> = <i>PB</i><sup>2</sup> ⇒ a linear equation in <i>x</i>, <i>y</i>, <i>z</i>",
          "legend": [
            "the squared terms cancel on both sides, which is why an equidistance condition can never produce a curved surface",
            "the plane passes through the midpoint of <i>AB</i> and is perpendicular to <i>AB</i>, which is a free two-second check on your answer"
          ],
          "note": "Recognise this <b>before</b> expanding. Spotting that an “equidistant from two fixed points” condition must collapse to a plane saves a full page of algebra under exam pressure."
        },
        {
          "t": "formula",
          "kicker": "SPHERE AND CYLINDER",
          "tag": "one point, or one axis",
          "main": "(<i>x</i> − <i>a</i>)<sup>2</sup> + (<i>y</i> − <i>b</i>)<sup>2</sup> + (<i>z</i> − <i>c</i>)<sup>2</sup> = <i>r</i><sup>2</sup> · <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> = <i>c</i><sup>2</sup>",
          "legend": [
            "the first is every point at distance <i>r</i> from the centre (<i>a</i>, <i>b</i>, <i>c</i>): all three coordinates are constrained, so you get a closed surface",
            "the second is every point at distance <i>c</i> from the <i>z</i>-axis: <i>z</i> never appears, so it is <b>free</b>, and the circle sweeps vertically into a tube"
          ],
          "note": "The free coordinate is the giveaway. If a coordinate is missing from the equation, the figure you drew in one plane extends unchanged in that direction, which is exactly what turns a circle into a cylinder."
        },
        {
          "t": "defgrid",
          "title": "What each rule carves out",
          "tag": "learn the answers, not the algebra",
          "rows": [
            { "k": "Equidistant from two points", "v": "a <b>plane</b>, the perpendicular bisector of <i>AB</i>" },
            { "k": "Fixed distance from one point", "v": "a <b>sphere</b> about that point" },
            { "k": "Fixed distance from an axis", "v": "a <b>right circular cylinder</b> about that axis" },
            { "k": "Constant sum of distances from two points", "v": "an <b>ellipsoid of revolution</b>, with <i>b</i><sup>2</sup> = <i>a</i><sup>2</sup> − <i>c</i><sup>2</sup>" },
            { "k": "Equidistant from two coordinate planes", "v": "a <b>pair</b> of planes, because |<i>x</i>| = |<i>z</i>| has two branches" }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "DIAGRAM · FIVE LOCI, SEEN EDGE ON",
          "chips": ["Plane", "Sphere", "Cylinder", "Pair of planes", "Ellipsoid"],
          "captions": [
            "Looking down the y-axis, so x runs across and z runs up. A(0, 0, 0) and B(2, 0, 0), and P is equidistant from both. The condition PA squared = PB squared kills every square and leaves x = 1, drawn here as a vertical line. In space that line is a whole plane: y and z are both free, so it extends in two directions at once.",
            "Fixed distance from one point. Nothing cancels this time, so the equation keeps its squares and the locus closes up on itself: a sphere of radius r about the centre C. What you see is the cross-section through C, which is a circle of the same radius.",
            "Now look down the z-axis instead, at the XY-plane. The dot at the centre is the z-axis seen end on. Every point at distance c from that axis satisfies x squared plus y squared equals c squared, and z never appears, so it is free: the circle sweeps up and down into a tube. Fixed distance from a line gives a cylinder.",
            "Back to looking down the y-axis. Equidistant from the XY-plane and the YZ-plane means the absolute value of z equals the absolute value of x, which factors into z = x and z = −x. That is two lines here and two planes in space, both containing the whole y-axis. Solving z = x alone throws away half the locus.",
            "Constant sum of distances from two fixed points. The two marked points are the foci, and P is joined to both; the two segments always add to the same total. In the plane this is an ellipse; spun about the line through the foci it is an ellipsoid of revolution, with semi-axis 6 along the axis and root 11 across it."
          ],
          "frames": [
            {
              "x": [-3, 5],
              "y": [-4, 4],
              "curves": [{ "c": "vline", "x": 1 }],
              "points": [
                { "x": 0, "y": 0, "label": "A" },
                { "x": 2, "y": 0, "label": "B" },
                { "x": 1, "y": 2.6, "label": "P" }
              ],
              "segments": [
                { "from": [0, 0], "to": [1, 2.6], "dash": true },
                { "from": [2, 0], "to": [1, 2.6], "dash": true }
              ]
            },
            { "aspect": 0.987,
              "x": [-4, 4],
              "y": [-4, 4],
              "curves": [{ "c": "circle", "r": 2.8 }],
              "points": [{ "x": 0, "y": 0, "label": "C", "at": "sw" }],
              "segments": [{ "from": [0, 0], "to": [1.98, 1.98], "dash": true, "label": "r" }]
            },
            { "aspect": 0.987,
              "x": [-4, 4],
              "y": [-4, 4],
              "curves": [{ "c": "circle", "r": 2.4 }],
              "points": [{ "x": 0, "y": 0, "label": "z-axis" }],
              "segments": [{ "from": [0, 0], "to": [2.4, 0], "dash": true, "label": "c" }]
            },
            {
              "x": [-4, 4],
              "y": [-4, 4],
              "curves": [
                { "c": "line", "m": 1, "k": 0 },
                { "c": "line", "m": -1, "k": 0 }
              ],
              "labels": [
                { "x": 2.7, "y": 3.4, "text": "z = x" },
                { "x": -2.7, "y": 3.4, "text": "z = −x" }
              ]
            },
            {
              "x": [-8, 8],
              "y": [-6, 6],
              "curves": [{ "c": "ellipse", "a": 6, "b": 3.32 }],
              "points": [
                { "x": 5, "y": 0, "label": "A" },
                { "x": -5, "y": 0, "label": "B", "at": "sw" },
                { "x": 2.4, "y": 3.04, "label": "P" }
              ],
              "segments": [
                { "from": [5, 0], "to": [2.4, 3.04], "dash": true },
                { "from": [-5, 0], "to": [2.4, 3.04], "dash": true }
              ]
            }
          ]
        },
        {
          "t": "p",
          "html": "Once you know that each equidistance condition is worth one linear equation, “find the point equidistant from these” becomes bookkeeping. <b>Two</b> given points leave one equation in three unknowns, so the answer is a plane. <b>Three</b> non-collinear points leave two equations, so the answer is a line, and a unique point then needs one more restriction, typically “the point lies in the <i>XY</i>-plane” or “on the <i>y</i>-axis”, which is exactly what exam questions supply. <b>Four</b> non-coplanar points give three equations in three unknowns and pin the point down uniquely: it is the circumcentre of the tetrahedron they form."
        },
        {
          "t": "proc",
          "title": "Finding the equation of a locus",
          "steps": [
            "<b>Name the moving point <i>P</i>(<i>x</i>, <i>y</i>, <i>z</i>)</b> and write the stated condition as an equation between distances, exactly as the words give it.",
            "<b>Square before you do anything else.</b> Write <i>PA</i><sup>2</sup> = <i>PB</i><sup>2</sup>, never <i>PA</i> = <i>PB</i> with radicals standing. If two radicals appear, as in a sum-of-distances condition, isolate <b>one</b> radical, square, then isolate the survivor and square again. Squaring the sum in one shot is the standard wreck.",
            "<b>Keep every modulus.</b> A distance from a plane is |<i>x</i>|, not <i>x</i>. Dropping the bars on |<i>x</i>| = |<i>z</i>| silently discards one of the two planes.",
            "<b>Expand and watch what cancels.</b> If the squared terms vanish you have a plane. If they survive with equal coefficients you have a sphere. If they survive with unequal coefficients you have an ellipsoid.",
            "<b>Read the answer, do not just compute it.</b> Name the surface and state its centre, radius or axis. A locus question that ends with an unnamed equation has done only half the work.",
            "<b>Check the reality.</b> A sphere is real only if its computed radius squared is positive: zero means a single point and negative means the empty set. A sum-of-distances ellipsoid is real only if the constant sum exceeds the gap between the two fixed points, because you cannot beat a straight line."
          ]
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Find the equation of the set of points equidistant from <i>A</i>(1, 2, 3) and <i>B</i>(3, 2, −1), and name the surface.",
          "steps": [
            "Let <i>P</i>(<i>x</i>, <i>y</i>, <i>z</i>) with <i>PA</i><sup>2</sup> = <i>PB</i><sup>2</sup>: (<i>x</i> − 1)<sup>2</sup> + (<i>y</i> − 2)<sup>2</sup> + (<i>z</i> − 3)<sup>2</sup> = (<i>x</i> − 3)<sup>2</sup> + (<i>y</i> − 2)<sup>2</sup> + (<i>z</i> + 1)<sup>2</sup>.",
            "The (<i>y</i> − 2)<sup>2</sup> terms are identical and go at once. Expanding the rest: −2<i>x</i> + 1 − 6<i>z</i> + 9 = −6<i>x</i> + 9 + 2<i>z</i> + 1.",
            "Every squared term has cancelled, exactly as promised, leaving 4<i>x</i> − 8<i>z</i> = 0, that is <b><i>x</i> − 2<i>z</i> = 0</b>.",
            "It is a plane, the perpendicular bisector plane of <i>AB</i>. Check: the midpoint (2, 2, 1) satisfies 2 − 2 = 0. Where equidistance from two coordinate <i>planes</i> gave a pair of planes in Topic 01, equidistance from two <i>points</i> gives a single one."
          ],
          "ans": "x − 2z = 0, the perpendicular bisector plane of AB"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Find the point equidistant from <i>O</i>(0, 0, 0), <i>A</i>(2, 0, 0), <i>B</i>(0, 3, 0) and <i>C</i>(0, 0, 4).",
          "steps": [
            "Four non-coplanar points give three linear equations in three unknowns, so expect exactly one answer. Let <i>P</i>(<i>x</i>, <i>y</i>, <i>z</i>).",
            "<i>PO</i><sup>2</sup> = <i>PA</i><sup>2</sup>: <i>x</i><sup>2</sup> = (<i>x</i> − 2)<sup>2</sup>, so 0 = −4<i>x</i> + 4 and <i>x</i> = 1. The <i>y</i> and <i>z</i> terms were identical on both sides and never entered.",
            "The same move twice more: <i>PO</i><sup>2</sup> = <i>PB</i><sup>2</sup> gives <i>y</i> = 3/2, and <i>PO</i><sup>2</sup> = <i>PC</i><sup>2</sup> gives <i>z</i> = 2.",
            "The point is (1, 3/2, 2), at common distance √(1 + 9/4 + 4) = √29 / 2. Read the answer: each coordinate is <b>half</b> the matching intercept, so from <i>O</i>, (<i>a</i>, 0, 0), (0, <i>b</i>, 0), (0, 0, <i>c</i>) the point is always (<i>a</i>/2, <i>b</i>/2, <i>c</i>/2), the centre of the box built on those edges."
          ],
          "ans": "(1, 3/2, 2), at distance √29 / 2 from each"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "Find the locus of a point <i>P</i> the sum of whose distances from <i>A</i>(5, 0, 0) and <i>B</i>(−5, 0, 0) is 12, and identify the surface.",
          "steps": [
            "Write √((<i>x</i> − 5)<sup>2</sup> + <i>y</i><sup>2</sup> + <i>z</i><sup>2</sup>) = 12 − √((<i>x</i> + 5)<sup>2</sup> + <i>y</i><sup>2</sup> + <i>z</i><sup>2</sup>). Isolate <b>one</b> radical first; squaring the sum in one shot is the standard wreck.",
            "Square. The common <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> + <i>z</i><sup>2</sup> + 25 cancels, leaving 24√((<i>x</i> + 5)<sup>2</sup> + <i>y</i><sup>2</sup> + <i>z</i><sup>2</sup>) = 144 + 20<i>x</i>. Divide by 4 and square again.",
            "36[(<i>x</i> + 5)<sup>2</sup> + <i>y</i><sup>2</sup> + <i>z</i><sup>2</sup>] = (36 + 5<i>x</i>)<sup>2</sup>. The linear terms in <i>x</i> cancel and 11<i>x</i><sup>2</sup> + 36<i>y</i><sup>2</sup> + 36<i>z</i><sup>2</sup> = 396.",
            "Divide by 396: <i>x</i><sup>2</sup>/36 + <i>y</i><sup>2</sup>/11 + <i>z</i><sup>2</sup>/11 = 1. An ellipsoid of revolution with semi-axis <i>a</i> = 6 along <i>x</i> and <i>b</i> = √11 across it, since <i>b</i><sup>2</sup> = <i>a</i><sup>2</sup> − <i>c</i><sup>2</sup> = 36 − 25 = 11."
          ],
          "ans": "x²/36 + y²/11 + z²/11 = 1, a prolate ellipsoid of revolution"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Find the locus of a point whose distance from the <i>x</i>-axis is always 4, and name the surface. Contrast it with the locus of points at distance 5 from the fixed point (2, −1, 3).",
          "steps": [
            "Distance from the <i>x</i>-axis is √(<i>y</i><sup>2</sup> + <i>z</i><sup>2</sup>), so the condition is √(<i>y</i><sup>2</sup> + <i>z</i><sup>2</sup>) = 4, that is <b><i>y</i><sup>2</sup> + <i>z</i><sup>2</sup> = 16</b>.",
            "Notice what is missing: <i>x</i> never appears, so it is completely free. The circle of radius 4 in the <i>YZ</i>-plane is swept along the whole <i>x</i>-axis, giving a right circular cylinder of radius 4 whose axis is the <i>x</i>-axis.",
            "By contrast, distance 5 from the point (2, −1, 3) constrains all three coordinates: (<i>x</i> − 2)<sup>2</sup> + (<i>y</i> + 1)<sup>2</sup> + (<i>z</i> − 3)<sup>2</sup> = 25, a sphere of radius 5.",
            "A missing coordinate is always the giveaway. Fixed distance from a <b>line</b> leaves one direction free and gives a tube; fixed distance from a <b>point</b> leaves nothing free and gives a closed surface."
          ],
          "ans": "y² + z² = 16, a cylinder of radius 4 about the x-axis"
        },
        {
          "t": "mcq",
          "q": "The set of points equidistant from (0, 0, 0) and (2, 0, 0) is:",
          "correct": 1,
          "opts": [
            { "label": "the line <i>x</i> = 1", "nudge": "In 3D, “<i>x</i> = 1” is a plane, not a line. That was a two-dimensional habit: one equation removes one degree of freedom, and in space that still leaves two." },
            { "label": "the plane <i>x</i> = 1", "nudge": null },
            { "label": "the sphere <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> + <i>z</i><sup>2</sup> = 1", "nudge": "This confuses equidistance between two points with a fixed distance from one. The first cancels the squares, the second keeps them." },
            { "label": "the point (1, 0, 0)", "nudge": "That is the midpoint, which certainly lies on the locus but is very far from being all of it. A locus is <i>every</i> point obeying the rule." }
          ],
          "solution": "PA² = PB² gives x² + y² + z² = (x − 2)² + y² + z², so 4x = 4 and x = 1. Every square cancelled, so the answer is linear, and a single linear equation in space is a whole plane."
        },
        {
          "t": "mcq",
          "q": "The locus of points at a constant distance <i>c</i> from the <i>z</i>-axis is:",
          "correct": 2,
          "opts": [
            { "label": "a circle of radius <i>c</i>", "nudge": "A circle is what you see in one cross-section. Since <i>z</i> is unconstrained, that circle exists at every height, and the union of all of them is a surface, not a curve." },
            { "label": "a sphere of radius <i>c</i>", "nudge": "A sphere is a fixed distance from a <b>point</b>. Here the distance is measured to a whole line, so the answer must be unbounded in the direction of that line." },
            { "label": "a right circular cylinder of radius <i>c</i>", "nudge": null },
            { "label": "a pair of planes", "nudge": "A pair of planes comes from a condition like |<i>x</i>| = |<i>z</i>|, which factors into two linear pieces. <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> = <i>c</i><sup>2</sup> does not factor over the reals." }
          ],
          "solution": "Distance from the z-axis is √(x² + y²), so the condition is x² + y² = c² with z free. The circle of radius c sweeps vertically into a tube: a right circular cylinder with the z-axis as its axis."
        },
        {
          "t": "mcq",
          "q": "How many given points, in general position, must a point be equidistant from for its position to be pinned down uniquely?",
          "correct": 3,
          "opts": [
            { "label": "one", "nudge": "One point gives no equation at all until a distance is specified, and a specified distance gives a whole sphere. Equidistance needs at least two points to compare." },
            { "label": "two", "nudge": "Two points give one linear equation in three unknowns, which leaves a plane's worth of solutions: the perpendicular bisector plane." },
            { "label": "three", "nudge": "Three non-collinear points give two equations, so the solutions form a line. Exam questions rescue this with an extra restriction such as “in the <i>XY</i>-plane”." },
            { "label": "four", "nudge": null }
          ],
          "solution": "Each equidistance condition is one linear equation. Four non-coplanar points give three equations in three unknowns and fix the point uniquely: it is the circumcentre of the tetrahedron they span."
        },
        {
          "t": "mcq",
          "q": "For fixed <i>A</i> and <i>B</i>, the locus of <i>P</i> with <i>PA</i><sup>2</sup> + <i>PB</i><sup>2</sup> = 2<i>k</i><sup>2</sup> is:",
          "correct": 1,
          "opts": [
            { "label": "a plane", "nudge": "A plane appears when the squares <b>cancel</b>, which needs a difference of two distance conditions. Here they are added, so the squares survive and reinforce each other." },
            { "label": "a sphere centred at the midpoint of <i>AB</i>", "nudge": null },
            { "label": "a cylinder about the line <i>AB</i>", "nudge": "A cylinder needs a coordinate to be free. Here all three appear squared with the same coefficient, so the surface closes in every direction." },
            { "label": "an ellipsoid with foci <i>A</i> and <i>B</i>", "nudge": "An ellipsoid comes from a constant <b>sum of distances</b>, not a constant sum of their squares. Squares add cleanly; roots do not." }
          ],
          "solution": "Adding the two expanded squares gives 2x² + 2y² + 2z² plus linear terms, so all three squared coefficients are equal and the locus is a sphere. Its centre is the midpoint of AB, and it is real only when k is large enough to make the radius squared positive."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[JEE Advanced] Find the equation of the locus of points at distance 5 from the centre (2, −1, 3), and state its radius.",
              "a": "(x − 2)² + (y + 1)² + (z − 3)² = 25, a sphere of radius 5 centred at (2, −1, 3). All three coordinates are constrained, so nothing is free and the surface closes."
            },
            {
              "q": "[JEE Advanced] Find the equation of the set of points P with PA² + PB² = 2k², where A(3, 4, 5) and B(−1, 3, −7), and identify the surface.",
              "a": "Adding the two expansions gives 2x² + 2y² + 2z² − 4x − 14y + 4z + 109 = 2k². Halving: x² + y² + z² − 2x − 7y + 2z + 54.5 = k². That is a sphere centred at (1, 7/2, −1), the midpoint of AB, and it is real only when k is large enough for the radius squared to be positive."
            },
            {
              "q": "[JEE Main] Find the point in the XY-plane equidistant from A(2, 0, 3), B(0, 3, 2) and C(0, 0, 1).",
              "a": "In the XY-plane means z = 0, so write P(x, y, 0). From PA² = PC²: (x − 2)² + 9 = x² + 1, giving −4x + 13 = 1 and x = 3. From PB² = PC²: (y − 3)² + 4 = y² + 1, giving −6y + 13 = 1 and y = 2. The point is (3, 2, 0), and all three distances are √14."
            },
            {
              "q": "[JEE Main] Find the point in the XY-plane equidistant from A(1, −1, 0), B(2, 1, 2) and C(3, 2, −1).",
              "a": "With P(x, y, 0), PA² = PB² gives 2x + 4y = 7 and PA² = PC² gives 2x + 3y = 6. Subtracting, y = 1, then x = 3/2. The point is (3/2, 1, 0), at common distance √17 / 2."
            },
            {
              "q": "[JEE Main] Find the locus of a point whose distance from the x-axis is always 4, and name the surface.",
              "a": "√(y² + z²) = 4, so y² + z² = 16 with x free. It is a right circular cylinder of radius 4 whose axis is the x-axis."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Dropping a modulus.</b> Distance from a coordinate plane is |<i>x</i>|, not <i>x</i>. Solving <i>x</i> = <i>z</i> instead of |<i>x</i>| = |<i>z</i>| throws away one of the two planes, and that is a whole half of the answer.",
            "<b>Squaring a sum of radicals in one shot.</b> Isolate one radical, square, then isolate the survivor and square again. Squaring √<i>u</i> + √<i>v</i> = 12 directly leaves a cross term that is worse than what you started with.",
            "<b>Carrying the “always linear” habit too far.</b> Equidistant from two points is linear because the squares cancel. At a fixed distance from one point nothing cancels and the equation stays quadratic. The two are not the same rule.",
            "<b>Leaving the surface unnamed.</b> An equation is half the answer. Say “a plane, the perpendicular bisector of <i>AB</i>” or “a sphere of radius 5 centred at (2, −1, 3)”; the naming carries marks.",
            "<b>Ignoring the reality condition.</b> A sphere whose computed radius squared is negative is the empty set, and zero gives a single point. Similarly a constant sum of distances below |<i>AB</i>| has no solutions at all."
          ]
        },
        {
          "t": "protip",
          "html": "learn these four by their answers, not their algebra: two points give a plane, one point gives a sphere, one axis gives a cylinder, a constant sum of distances gives an ellipsoid. then when a question opens with “find the set of all points such that…”, you already know the shape of the last line before you write the first one, and you can tell instantly whether a surviving <i>x</i><sup>2</sup> is a discovery or a mistake."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "PA = PB ⇒ a plane, the perpendicular bisector of AB", "note": "squares cancel, so the equation is linear" },
            { "f": "PC = r ⇒ (x − a)² + (y − b)² + (z − c)² = r²", "note": "nothing cancels, so a sphere" },
            { "f": "Distance c from the z-axis ⇒ x² + y² = c², z free", "note": "the missing coordinate is what makes it a cylinder" },
            { "f": "PA + PB = 2a ⇒ an ellipsoid, b² = a² − c²", "note": "isolate and square one radical at a time" },
            { "f": "Equidistant from n points: each condition is one linear equation", "note": "2 give a plane, 3 a line, 4 a unique point" },
            { "f": "From O, (a,0,0), (0,b,0), (0,0,c) the point is (a/2, b/2, c/2)", "note": "the centre of the box on those three edges" }
          ],
          "aids": [
            "“two points a plane, one point a sphere, one line a cylinder”",
            "“a free coordinate means the figure sweeps”",
            "“keep the modulus or lose half the locus”"
          ]
        }
      ]
    }
  ]
};

export default ch11ThreeD;
