/**
 * Chapter 10 · Conic Sections. Mathematics, Class 11.
 *
 * Restructured from pages 780 to 877 of the Drona Class 11 Mathematics Master
 * Reference into the block system in design_handoff_textbooks/CONTENT_SPEC.md,
 * following math-11-01-sets.ts and math-11-03-trigonometry.ts for voice and
 * density.
 *
 * The source is three documents stacked: a typeset chapter of five units
 * (Introduction, The Circle, The Parabola, The Ellipse, The Hyperbola), a
 * Round 1 Supplement of four more (Parametric Forms and the Auxiliary Circle,
 * Tangents to a Conic, Normals to a Conic, Applied Problems) and a Round 2
 * Addendum of four lettered items (A the chord bisected at a point, B pole and
 * polar, C asymptotes as an object and the conjugate hyperbola, D families of
 * conics). Thirteen units into six topics, so the supplementary material is
 * folded into the curve it actually belongs to rather than given topics of its
 * own:
 *
 *   - The parametric forms are split across the curves they parametrise. The
 *     parabola's (at², 2at) sits in Topic 03, where the focal-chord condition
 *     t₁t₂ = −1 needs it; the ellipse's eccentric angle and auxiliary circle
 *     sit in Topic 04, where the b : a squash is the whole picture; the
 *     hyperbola's (a sec θ, b tan θ) sits in Topic 05 next to the identity
 *     sec²θ − tan²θ = 1 that forces it.
 *   - Applied Problems is an applications unit that introduces no formula of
 *     its own, so its four NCERT staples go to their curves: the parabolic
 *     reflector and the suspension cable into Topic 03, the semi-elliptical
 *     archway and the whispering gallery into Topic 04, the hyperbolic cooling
 *     tower into Topic 05. The one transferable skill it does carry, choosing
 *     where to put the origin, is stated once in Topic 03 and reused after.
 *   - Addendum D, the family S + λS′ = 0, sits in Topic 02, which is where the
 *     source says to read it and where the three-point circle it replaces was
 *     worked.
 *   - Addendum C, the asymptotes as a second-degree object and the conjugate
 *     hyperbola, sits in Topic 05 next to the limiting-slope derivation it
 *     completes.
 *   - Tangents, Normals and Addenda A and B are one topic, Topic 06. They are
 *     four questions about the same expression T, and separating them would
 *     teach the substitution rule four times.
 *
 * Two deliberate omissions, both from the Round 2 Addendum. The hyperbolic
 * alternative parametrisation (a cosh u, b sinh u) is dropped: the source
 * itself says it is worth recognising but that (a sec θ, b tan θ) is what CBSE
 * and JEE expect, and cosh has not been defined anywhere in Class 11. The
 * conjugate-diameter half of Addendum A is dropped for altitude, and the
 * bisected chord T = S₁ that it is built on is kept.
 *
 * The exam hook is authored once, on topic 1, with a bold heading per topic,
 * because the reader renders `hook` only there. Same convention, and the same
 * reason, as the Sets and Trigonometry chapters.
 *
 * Nine `diagram` blocks, all `plot`, which is the parameterised kind that draws
 * conics natively. Chips and captions render as plain text, not markup, so they
 * carry no inline tags. Two limits of the drawing vocabulary shaped the
 * figures: `parabola` takes no centre, so every parabola here is drawn at the
 * origin and the shifted-centre case is carried by the circle in Topic 02; and
 * `hyperbola` draws only the horizontal orientation, so the conjugate hyperbola
 * (which is vertical) is carried in prose and in the defgrid rather than drawn.
 * Frame windows keep an x-to-y range ratio near 1.4, which is the plot's own
 * aspect, so a circle reads as round.
 */
import type { Chapter } from '@/lib/textbooks';

export const ch10Conics: Chapter = {
  "chapter": "10",
  "title": "Conic Sections",
  "subject": "Mathematics",
  "klass": "Class 11",
  "topics": [
    {
      "n": "01",
      "title": "Cutting the Cone: the Conic Family",
      "chip": "01 THE FAMILY",
      "kalam": "one cone, four cuts, one dial",
      "blocks": [
        {
          "t": "hook",
          "html": "<b>01 · Cutting the Cone: the Conic Family</b><br>CBSE Boards ask 1–2 marks here: name the conic a described section or a given equation represents, or recall a degenerate case. JEE Main routinely hides one classification question inside the general second-degree equation. JEE Advanced expects fluency with the unifying eccentricity definition and with the discriminant test. Master this topic and the chapter stops being four disconnected curves and becomes one idea seen from four angles.<br><br><b>02 · The Circle</b><br>The most heavily examined conic at Board level, 2–4 marks for the equation, the centre or the radius. JEE Main carries 1–2 questions, usually the general-form centre and radius or the position of a point. JEE Advanced fuses it with tangent-length and locus reasoning, and with the family <i>S</i> + λ<i>S</i>′ = 0 that NCERT's own Historical Note names and then never uses.<br><br><b>03 · The Parabola</b><br>CBSE reliably asks 1–3 marks: read a standard equation and report focus, axis, directrix and latus rectum, or build the equation from given conditions. JEE Main carries 1–2 questions on standard-form manipulation plus the inside/outside test. JEE Advanced uses the parabola as a vehicle for focal-chord and reflection reasoning. The NCERT reflector and suspension-bridge problems are near-certain Board applications.<br><br><b>04 · The Ellipse</b><br>CBSE asks 1–4 marks, and the focal-sum derivation is a frequent long answer. JEE Main runs 1–2 questions on eccentricity and latus-rectum relationships. JEE Advanced builds whole problems on the auxiliary circle, because it converts ellipse geometry into circle geometry and circle geometry is easy. The semi-elliptical archway and the whispering gallery are the Board's favourite applications.<br><br><b>05 · The Hyperbola</b><br>CBSE asks 1–4 marks: foci, axes, eccentricity, latus rectum and asymptotes, and the difference-of-distances derivation is a recurring long answer. JEE Main asks about eccentricity and asymptote relationships. JEE Advanced treats the asymptotes as an object in their own right and adds the conjugate hyperbola. The hyperbolic cooling tower is the standard applied item.<br><br><b>06 · Tangents, Normals and the T-rule</b><br>The single highest-yield block in the chapter. JEE Main names the condition of tangency explicitly in its syllabus and asks it almost every session: for what <i>c</i> does the line touch, find the tangent of slope <i>m</i>, find the point of contact. CBSE asks the tangent and then the normal at a stated point for 2–4 marks. JEE Advanced pushes into the chord of contact, the pair of tangents <i>SS</i><sub>1</sub> = <i>T</i><sup>2</sup>, the director circle, the polar of a point, and the three-normals property <i>t</i><sub>1</sub> + <i>t</i><sub>2</sub> + <i>t</i><sub>3</sub> = 0."
        },
        {
          "t": "p",
          "html": "Here is the single most useful realisation in this chapter. The circle, the parabola, the ellipse and the hyperbola are not four unrelated curves you must memorise separately. They are <b>one family</b>, four different slices of the same object, and that object is a <b>double cone</b>. Learn the cut and the curves explain themselves."
        },
        {
          "t": "p",
          "html": "Picture a double cone as two ice-cream cones joined tip to tip, stretching away forever in both directions. The sharp meeting point is the <b>vertex</b>. The central line through both tips is the <b>axis</b>. Each half is a <b>nappe</b>, and any straight line lying on the surface and running from the vertex out along the slope is a <b>generator</b>. The angle a generator makes with the axis is the <b>semi-vertical angle</b> α, fixed for a given cone, like the steepness of a slope."
        },
        {
          "t": "p",
          "html": "Now pick up a torch in a dark room and point it straight at the wall. The beam is a cone and the wall is the cutting plane. Perpendicular, you get a clean <b>circle</b> of light. Tilt a little and the circle stretches into an <b>ellipse</b>. Keep tilting: at one exact angle the lower edge of the light-cone runs parallel to the wall, the loop breaks open at one end and spills off to infinity, and that is a <b>parabola</b>. Tilt past it and the beam opens into the two sweeping arms of a <b>hyperbola</b>. Four conics, and the only thing you changed was the tilt."
        },
        {
          "t": "think",
          "html": "the tilt of the torch is the whole chapter. every formula that follows is bookkeeping for one number: how steeply you cut."
        },
        {
          "t": "defgrid",
          "title": "The cut, and the curve it makes",
          "tag": "β is the angle the plane makes with the axis",
          "rows": [
            {
              "k": "β = 90°",
              "v": "plane square across the axis · <b>circle</b>"
            },
            {
              "k": "α < β < 90°",
              "v": "a gentle tilt, the slice still closes · <b>ellipse</b>"
            },
            {
              "k": "β = α",
              "v": "plane parallel to a generator · <b>parabola</b>, the knife-edge case"
            },
            {
              "k": "0 ≤ β < α",
              "v": "steep enough to reach the second nappe · <b>hyperbola</b>, two branches"
            },
            {
              "k": "Through the vertex",
              "v": "no ordinary curve at all · a <b>degenerate</b> conic"
            }
          ]
        },
        {
          "t": "def",
          "term": "Degenerate conic",
          "html": "When the cutting plane passes <b>through the vertex</b> the slice collapses. Meeting the vertex only gives a single <b>point</b>. Touching along one generator gives a single <b>straight line</b>. Cutting through the axis gives a <b>pair of intersecting straight lines</b>. These are the family's edge cases, and exams test them precisely because students skip them."
        },
        {
          "t": "def",
          "term": "A conic, without a cone",
          "html": "A conic is the set of points <i>P</i> whose distance to a fixed point (the <b>focus</b>) divided by its distance to a fixed line (the <b>directrix</b>) is a constant <i>e</i>, the <b>eccentricity</b>. This second definition needs no cone at all, and it is the one every curve in this chapter is actually built from. The focus must not lie on the directrix, or the locus degenerates."
        },
        {
          "t": "formula",
          "kicker": "THE ECCENTRICITY DIAL",
          "tag": "one number, four curves",
          "main": "e = (distance to focus) / (distance to directrix)",
          "legend": [
            "<i>e</i> = 0 circle · 0 < <i>e</i> < 1 ellipse · <i>e</i> = 1 parabola · <i>e</i> > 1 hyperbola",
            "the circle is the limiting ellipse whose two foci have merged at the centre",
            "the parabola is the single boundary between the bounded ellipse and the unbounded hyperbola"
          ],
          "note": "The angle test and the eccentricity test always agree, because they are two descriptions of the same cut. β = α and e = 1 are the same statement in different languages."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "DIAGRAM · TURN THE DIAL, CHANGE THE CURVE",
          "mathChips": true,
          "chips": ["e = 0", "e = 0.6", "e = 1", "e = 1.5", "through the vertex"],
          "captions": [
            "e = 0. The two foci have collapsed onto each other at the centre C, so every point of the curve is the same distance from it. Total symmetry, no long axis and no short one. A circle.",
            "0 < e < 1. Two separate foci S and S′, and the curve still closes around them. The dashed verticals are the two directrices at x = ±a/e, always outside the curve. Squash it further by pushing e towards 1 and it stretches into a cigar.",
            "e = 1. Exactly one focus and one directrix, and the balance is perfect: every point of the curve is as far from S as it is from the dashed line. The loop can no longer close, so the curve runs off to infinity in one direction. A parabola.",
            "e > 1. The directrix now wins for far-away points, the curve breaks into two branches, and each branch hugs a pair of straight lines through the centre. Those are the asymptotes, and only a hyperbola has them.",
            "Push the cutting plane through the vertex itself and there is no curve left. Here the plane has cut through the axis and the section is a pair of intersecting straight lines. Move it and you get a single line, or the bare vertex point. These are the degenerate conics."
          ],
          "frames": [
            {
              "x": [-7, 7],
              "y": [-5, 5],
              "curves": [{ "c": "circle", "r": 2.5 }],
              "points": [{ "x": 0, "y": 0, "label": "C" }]
            },
            {
              "x": [-7, 7],
              "y": [-5, 5],
              "curves": [
                { "c": "ellipse", "a": 3, "b": 2.4 },
                { "c": "vline", "x": 5, "dash": true, "soft": true },
                { "c": "vline", "x": -5, "dash": true, "soft": true }
              ],
              "points": [
                { "x": 1.8, "y": 0, "label": "S" },
                { "x": -1.8, "y": 0, "label": "S′", "soft": true }
              ],
              "labels": [{ "x": 5, "y": -4.4, "text": "x = a/e", "soft": true }]
            },
            {
              "x": [-7, 7],
              "y": [-5, 5],
              "curves": [
                { "c": "parabola", "a": 1, "horizontal": true },
                { "c": "vline", "x": -1, "dash": true, "soft": true }
              ],
              "points": [{ "x": 1, "y": 0, "label": "S" }],
              "labels": [{ "x": -1, "y": -4.4, "text": "x = −a", "soft": true }]
            },
            {
              "x": [-7, 7],
              "y": [-5, 5],
              "curves": [
                { "c": "hyperbola", "a": 2, "b": 2.236 },
                { "c": "line", "m": 1.118, "k": 0, "dash": true, "soft": true },
                { "c": "line", "m": -1.118, "k": 0, "dash": true, "soft": true }
              ],
              "points": [
                { "x": 3, "y": 0, "label": "S" },
                { "x": -3, "y": 0, "label": "S′", "soft": true }
              ]
            },
            {
              "x": [-7, 7],
              "y": [-5, 5],
              "curves": [
                { "c": "line", "m": 0.8, "k": 0 },
                { "c": "line", "m": -0.8, "k": 0 }
              ],
              "points": [{ "x": 0, "y": 0, "label": "vertex" }]
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "EVERY CONIC IS ONE EQUATION",
          "tag": "A, B, C not all zero",
          "main": "Ax<sup>2</sup> + Bxy + Cy<sup>2</sup> + Dx + Ey + F = 0",
          "legend": [
            "discriminant Δ = <i>B</i><sup>2</sup> − 4<i>AC</i> · negative ellipse, zero parabola, positive hyperbola",
            "circle when additionally <i>A</i> = <i>C</i> and <i>B</i> = 0",
            "<i>B</i> ≠ 0 means the conic is <b>rotated</b>, and rotation cannot change what kind of curve it is"
          ],
          "note": "B² − 4AC is a rotation invariant: turning the axes changes A, B and C individually and leaves the combination fixed. That is exactly why you never have to remove the xy term before naming the curve."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY THE SIGNS OF A AND C DECIDE IT, TAP A LINE",
          "steps": [
            {
              "eq": "Ax² + Cy² + Dx + Ey + F = 0",
              "why": "Take the common Class 11 case first, with no xy term, so B = 0 and the axes of the conic are parallel to the coordinate axes."
            },
            {
              "eq": "Δ = B² − 4AC = −4AC",
              "why": "With B = 0 the discriminant collapses to −4AC, so the sign of the single product AC decides everything. Nothing else in the equation matters for classification."
            },
            {
              "eq": "A = C ≠ 0 ⇒ circle",
              "why": "Complete both squares and the two squared terms carry the same coefficient, so the curve is equally wide in every direction. Divide through by that coefficient and it is (x − h)² + (y − k)² = r²."
            },
            {
              "eq": "A, C same sign but unequal ⇒ ellipse",
              "why": "Same-sign coefficients bend the graph the same way in both directions, so the curve closes. Unequal coefficients mean one direction is stretched more than the other, which is the squash."
            },
            {
              "eq": "one of A, C is zero ⇒ parabola",
              "why": "Then AC = 0, so Δ = 0, the boundary case. Only one variable is squared, and the other appears linearly, which is precisely the y² = 4ax shape."
            },
            {
              "eq": "A, C opposite signs ⇒ hyperbola",
              "why": "Δ = −4AC > 0. The graph bends one way along x and the opposite way along y, so it can never close, and it opens into two branches. Same sign closes, opposite opens."
            }
          ]
        },
        {
          "t": "proc",
          "title": "Name the curve in five seconds",
          "steps": [
            "<b>From a geometric description.</b> Ask first whether the plane passes through the vertex. If it does, the answer is a degenerate conic. If not, compare β with α and read the table.",
            "<b>From an equation with no <i>xy</i> term.</b> Look only at the coefficients of <i>x</i><sup>2</sup> and <i>y</i><sup>2</sup>. Equal is a circle, same sign but unequal is an ellipse, one of them missing is a parabola, opposite signs is a hyperbola. Never compute the centre just to classify.",
            "<b>From an equation with an <i>xy</i> term.</b> Compute <i>B</i><sup>2</sup> − 4<i>AC</i> and read its sign. Do not try to rotate the axes first, the invariant has already answered the question.",
            "<b>Sanity check with <i>e</i>.</b> Whatever the algebra says, the eccentricity band must agree: ellipse below 1, parabola exactly 1, hyperbola above 1. Two routes to the same answer means a free check."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A plane cuts a right circular cone of semi-vertical angle 30° at an angle of 50° to the axis, without passing through the vertex. Name the section. What would it be at exactly 30°?",
          "steps": [
            "Here β = 50° and α = 30°, and the plane misses the vertex, so the β-versus-α table applies.",
            "Since 30° < 50° < 90°, that is α < β < 90°, the plane tilts gently and the slice still closes.",
            "At β = 30° = α the plane runs parallel to a generator, the knife-edge case."
          ],
          "ans": "An ellipse · at 30° a parabola"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Identify the conic 3<i>x</i><sup>2</sup> + 3<i>y</i><sup>2</sup> − 12<i>x</i> + 6<i>y</i> − 4 = 0.",
          "steps": [
            "No <i>xy</i> term, so read the coefficients of <i>x</i><sup>2</sup> and <i>y</i><sup>2</sup> directly: <i>A</i> = <i>C</i> = 3.",
            "Equal coefficients with no cross term is the circle signature. That single observation is the whole answer.",
            "There is no need to complete the square or find the centre and radius, the question only asked what kind of curve it is."
          ],
          "ans": "A circle"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Classify 4<i>x</i><sup>2</sup> − 9<i>y</i><sup>2</sup> + 8<i>x</i> + 36<i>y</i> − 68 = 0 and state its eccentricity band.",
          "steps": [
            "<i>A</i> = 4 and <i>C</i> = −9 have opposite signs, so <i>B</i><sup>2</sup> − 4<i>AC</i> = 0 − 4(4)(−9) = 144 > 0.",
            "A positive discriminant is the hyperbola condition, and opposite signs are the reason: the graph opens instead of closing.",
            "The two tests agree, as they always do: a hyperbola has <i>e</i> > 1."
          ],
          "ans": "A hyperbola, with e > 1"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "A curve is 5<i>x</i><sup>2</sup> − 4<i>xy</i> + 8<i>y</i><sup>2</sup> − 16<i>x</i> − 14<i>y</i> + 5 = 0. Determine its type, and say why the <i>xy</i> term does not change the answer.",
          "steps": [
            "<i>A</i> = 5, <i>B</i> = −4, <i>C</i> = 8, so Δ = (−4)<sup>2</sup> − 4(5)(8) = 16 − 160 = −144 < 0.",
            "Negative discriminant, so an ellipse. The nonzero <i>B</i> only tells you the ellipse is tilted with respect to the coordinate axes.",
            "Rotating the frame changes <i>A</i>, <i>B</i> and <i>C</i> one at a time but leaves <i>B</i><sup>2</sup> − 4<i>AC</i> fixed, and rotation cannot turn an ellipse into anything else. So the invariant reports the right answer without any of the work of actually rotating."
          ],
          "ans": "A rotated ellipse"
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] A plane perpendicular to the axis of a cone, not through the vertex, makes what section? What if it passes through the vertex containing the axis?",
              "a": "β = 90° gives a circle. Through the vertex and containing the axis, the section degenerates to a pair of intersecting straight lines."
            },
            {
              "q": "[JEE Main] Identify the conic 2x² + 2y² + 5x − 3y + 1 = 0.",
              "a": "Equal x² and y² coefficients and no xy term, so a circle. No further work is needed to classify it."
            },
            {
              "q": "[JEE Main] Identify y² − 8x + 6y + 1 = 0 and give its eccentricity.",
              "a": "Only y² is present, so A = 0 and Δ = 0. It is a parabola, and e = 1 exactly."
            },
            {
              "q": "[JEE Main] Using the discriminant, classify x² + 4xy + 4y² + 3x − 2 = 0.",
              "a": "B² − 4AC = 16 − 4(1)(4) = 0, so a parabola. The xy term only rotates it."
            },
            {
              "q": "[JEE Advanced] For what relation between α and β is the section a parabola, and why is it the unique boundary between the bounded and unbounded conics?",
              "a": "β = α. It is the single angle at which the plane is parallel to a generator, so the slice can neither close (which needs β > α) nor reach the second nappe (which needs β < α). It mirrors e = 1 sitting alone between e < 1 and e > 1."
            }
          ]
        },
        {
          "t": "mcq",
          "q": "A section of a double cone that has <b>two</b> separate branches is a",
          "correct": 2,
          "opts": [
            {
              "label": "parabola",
              "nudge": "A parabola is unbounded but has a single branch. Being open and being in two pieces are different properties."
            },
            {
              "label": "ellipse",
              "nudge": "An ellipse is a closed curve living entirely on one nappe. It can never be in two pieces."
            },
            {
              "label": "hyperbola",
              "nudge": null
            },
            {
              "label": "circle",
              "nudge": "A circle is closed and sits on one nappe, like the ellipse it is a limiting case of."
            }
          ],
          "solution": "Two branches appear only when the cutting plane is steep enough to slice both nappes of the double cone, which is 0 ≤ β < α. That is the hyperbola."
        },
        {
          "t": "mcq",
          "q": "The conic 7<i>x</i><sup>2</sup> + 7<i>y</i><sup>2</sup> + 2<i>x</i> − 9 = 0 is a",
          "correct": 0,
          "opts": [
            {
              "label": "circle",
              "nudge": null
            },
            {
              "label": "ellipse",
              "nudge": "An ellipse needs the two squared coefficients to be unequal. Here they are both 7, which is stricter than the ellipse condition."
            },
            {
              "label": "parabola",
              "nudge": "A parabola needs one of the two squared terms to be missing altogether. Both are present here."
            },
            {
              "label": "hyperbola",
              "nudge": "A hyperbola needs the two squared coefficients to have opposite signs. Both are +7."
            }
          ],
          "solution": "Equal coefficients of x² and y² with no xy term is the circle signature, and nothing else needs checking to answer the question asked."
        },
        {
          "t": "mcq",
          "q": "For the general second-degree equation, <i>B</i><sup>2</sup> − 4<i>AC</i> = 0 indicates a",
          "correct": 2,
          "opts": [
            {
              "label": "circle",
              "nudge": "A circle is a special ellipse, so its discriminant is strictly negative, never zero."
            },
            {
              "label": "ellipse",
              "nudge": "An ellipse has B² − 4AC < 0. Zero is the boundary it never reaches."
            },
            {
              "label": "parabola",
              "nudge": null
            },
            {
              "label": "hyperbola",
              "nudge": "A hyperbola has B² − 4AC > 0. Zero sits below it, on the boundary."
            }
          ],
          "solution": "A zero discriminant is the parabola condition, the single boundary between negative (ellipse) and positive (hyperbola). It is the algebraic twin of β = α and of e = 1."
        },
        {
          "t": "mcq",
          "q": "A plane through the vertex of a cone, touching it along a single generator, produces",
          "correct": 1,
          "opts": [
            {
              "label": "a point",
              "nudge": "A single point arises when the plane meets the vertex and nothing else of the cone. Touching along a generator meets a whole line of it."
            },
            {
              "label": "a single straight line",
              "nudge": null
            },
            {
              "label": "a pair of intersecting lines",
              "nudge": "A pair of lines needs the plane to cut through the cone at the vertex, crossing into both nappes, not merely to touch it."
            },
            {
              "label": "a parabola",
              "nudge": "A parabola requires the plane to miss the vertex entirely. Any plane through the vertex gives a degenerate section."
            }
          ],
          "solution": "Touching along exactly one generator collapses the section to that generator: a single straight line, one of the three degenerate conics."
        },
        {
          "t": "mistakes",
          "items": [
            "Forgetting the degenerate cases. A plane <b>through the vertex</b> never gives an ordinary curve, only a point, a line, or a pair of intersecting lines.",
            "Treating the parabola as a range. It is the single boundary β = α, <i>e</i> = 1, <i>B</i><sup>2</sup> = 4<i>AC</i>, and never a band of angles.",
            "Misreading “equal coefficients”. A circle needs <i>A</i> = <i>C</i> <b>and</b> <i>B</i> = 0. Equal squared coefficients with an <i>xy</i> term present is a rotated ellipse, not a circle.",
            "Rotating before classifying. You never need to remove the <i>xy</i> term to name the curve, because <i>B</i><sup>2</sup> − 4<i>AC</i> has already told you.",
            "Reading β from the wrong reference. Both α and β are measured to the <b>axis</b>, not to the base or to a generator."
          ]
        },
        {
          "t": "protip",
          "html": "two five-second classifiers cover almost every question in this topic. from geometry: compare β with α, and check the vertex first. from an equation: no xy term means just look at the signs of A and C, and if there is an xy term fall back on the sign of B² − 4AC."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "β = 90° circle · α < β < 90° ellipse",
              "note": "the two closed cuts, both on one nappe"
            },
            {
              "f": "β = α parabola · β < α hyperbola",
              "note": "the boundary, then both nappes"
            },
            {
              "f": "e = 0, 0 < e < 1, e = 1, e > 1",
              "note": "circle, ellipse, parabola, hyperbola"
            },
            {
              "f": "Through the vertex ⇒ point, line, pair of lines",
              "note": "the degenerate conics, and a favourite 1-marker"
            },
            {
              "f": "Δ = B² − 4AC: < 0, = 0, > 0",
              "note": "ellipse, parabola, hyperbola · circle if A = C, B = 0"
            }
          ],
          "aids": [
            "“same sign closes, opposite opens”",
            "“the parabola is the hinge: β = α, e = 1, B² = 4AC”",
            "“through the vertex means degenerate”"
          ]
        }
      ]
    },
    {
      "n": "02",
      "title": "The Circle",
      "chip": "02 CIRCLE",
      "kalam": "centre is minus g, minus f",
      "blocks": [
        {
          "t": "p",
          "html": "Of all the conics the circle is the one your hand already knows. Tie a goat to a peg with a rope and let it wander with the rope taut. It traces a perfect circle, because every point it can reach is the <b>same distance</b>, the rope's length, from the peg. That is the entire idea: one centre, one distance, and no exceptions."
        },
        {
          "t": "p",
          "html": "In the eccentricity language of this chapter the circle is the calmest member of the family, <i>e</i> = 0. It is the limiting ellipse whose two foci have drifted together into a single point at the centre. Where an ellipse is a squashed loop with a long axis and a short one, the circle is the ellipse that refused to squash, equally wide in every direction. It has no foci, no directrix and no eccentricity worth computing, so do not go looking for them."
        },
        {
          "t": "think",
          "html": "there are only two faces of one equation here. the standard form wears its centre and radius openly. the general form hides them inside a tidy quadratic, and completing the square is how you take the costume off."
        },
        {
          "t": "def",
          "term": "Circle",
          "html": "A circle is the locus of a point that moves at a constant distance <i>r</i>, the <b>radius</b>, from a fixed point <i>C</i>, the <b>centre</b>. Written with the distance formula, a moving point <i>P</i>(<i>x</i>, <i>y</i>) at distance <i>r</i> from <i>C</i>(<i>h</i>, <i>k</i>) satisfies √((<i>x</i> − <i>h</i>)<sup>2</sup> + (<i>y</i> − <i>k</i>)<sup>2</sup>) = <i>r</i>. Everything else in this topic is that one statement, rearranged."
        },
        {
          "t": "formula",
          "kicker": "THE STANDARD FORM",
          "tag": "centre and radius on show",
          "main": "(x − h)<sup>2</sup> + (y − k)<sup>2</sup> = r<sup>2</sup>",
          "legend": [
            "centre (<i>h</i>, <i>k</i>) · radius <i>r</i>, read straight off with no work",
            "centred at the origin this collapses to <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> = <i>r</i><sup>2</sup>"
          ],
          "note": "Signs are the trap. The centre of (x − 3)² + (y + 4)² = 25 is (3, −4), not (3, 4) and certainly not (−3, 4). Read the form literally: the number subtracted from x is h."
        },
        {
          "t": "formula",
          "kicker": "THE GENERAL FORM",
          "tag": "the same circle in disguise",
          "main": "x<sup>2</sup> + y<sup>2</sup> + 2gx + 2fy + c = 0",
          "legend": [
            "centre = (−<i>g</i>, −<i>f</i>) · radius = √(<i>g</i><sup>2</sup> + <i>f</i><sup>2</sup> − <i>c</i>)",
            "halve the linear coefficients <b>and</b> flip the sign, both steps every time",
            "a real circle needs <i>g</i><sup>2</sup> + <i>f</i><sup>2</sup> − <i>c</i> > 0, and equal <i>x</i><sup>2</sup>, <i>y</i><sup>2</sup> coefficients with no <i>xy</i> term"
          ],
          "note": "If the squared terms carry a coefficient other than 1, divide the whole equation through first. Reading g and f off 3x² + 3y² + 12x = 0 without dividing by 3 is a guaranteed wrong centre."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "DIAGRAM · ONE CIRCLE, FOUR QUESTIONS",
          "chips": ["CENTRE AND RADIUS", "SHIFTED CENTRE", "INSIDE OR OUT", "TANGENT LENGTH"],
          "captions": [
            "The origin-centred circle x² + y² = 9. Every point of it is exactly r = 3 from C, in every direction. That single sentence is the definition, and squaring it is the equation.",
            "Slide the centre to C(h, k) and nothing about the shape changes, only the bookkeeping. The dashed legs are h across and k up. The equation becomes (x − h)² + (y − k)² = r², and expanding it is exactly how the general form is born.",
            "Substitute a point into the left side of the general form and call the number S₁. Negative puts the point inside, zero puts it on the curve, positive puts it outside. One substitution answers a question that would otherwise need a distance calculation.",
            "The same S₁ does a second job. From an outside point P the tangent touches at T, and the radius CT is perpendicular to PT, so CP² = r² + PT². That right angle is why the tangent length is exactly √S₁, here √16 = 4 from P(4, 3) to a circle of radius 3."
          ],
          "frames": [
            {
              "x": [-5, 5],
              "y": [-3.6, 3.6],
              "curves": [{ "c": "circle", "r": 3 }],
              "points": [{ "x": 0, "y": 0, "label": "C" }],
              "segments": [{ "from": [0, 0], "to": [2.121, 2.121], "label": "r" }]
            },
            {
              "x": [-5, 5],
              "y": [-3.6, 3.6],
              "curves": [{ "c": "circle", "cx": 1.4, "cy": 0.7, "r": 2.6 }],
              "points": [{ "x": 1.4, "y": 0.7, "label": "C" }],
              "segments": [
                { "from": [0, 0], "to": [1.4, 0], "dash": true, "soft": true, "label": "h" },
                { "from": [1.4, 0], "to": [1.4, 0.7], "dash": true, "soft": true, "label": "k" }
              ]
            },
            {
              "x": [-5, 5],
              "y": [-3.6, 3.6],
              "curves": [{ "c": "circle", "r": 3 }],
              "points": [
                { "x": 0.9, "y": 1.2, "label": "inside" },
                { "x": 2.121, "y": 2.121, "label": "on" },
                { "x": 3.2, "y": 2.4, "label": "outside" }
              ]
            },
            {
              "x": [-5, 5],
              "y": [-3.6, 3.6],
              "curves": [{ "c": "circle", "r": 3 }],
              "points": [
                { "x": 4, "y": 3, "label": "P" },
                { "x": 0, "y": 3, "label": "T" },
                { "x": 0, "y": 0, "label": "C", "soft": true }
              ],
              "segments": [
                { "from": [4, 3], "to": [0, 3], "label": "4" },
                { "from": [0, 0], "to": [0, 3], "dash": true, "soft": true },
                { "from": [0, 0], "to": [4, 3], "dash": true, "soft": true, "label": "5" }
              ]
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · GENERAL FORM BACK TO CENTRE AND RADIUS, TAP A LINE",
          "steps": [
            {
              "eq": "x² + y² + 2gx + 2fy + c = 0",
              "why": "Start from the general form. The centre and radius are in there, hidden by the fact that the squares are incomplete."
            },
            {
              "eq": "(x² + 2gx + g²) + (y² + 2fy + f²) = g² + f² − c",
              "why": "Group the x-terms and the y-terms, then complete each square by adding g² and f² to the left. Whatever you add on the left must be added on the right, and c moves across at the same time."
            },
            {
              "eq": "(x + g)² + (y + f)² = g² + f² − c",
              "why": "Both brackets are now perfect squares. Nothing has been assumed and nothing lost, this is the same equation written differently."
            },
            {
              "eq": "compare with (x − h)² + (y − k)² = r²",
              "why": "Matching the pieces gives h = −g, k = −f and r² = g² + f² − c. That is where the minus signs in the centre come from: x + g is x − (−g)."
            },
            {
              "eq": "r = √(g² + f² − c), and it can fail",
              "why": "A radius must be real and positive, so g² + f² − c has to be positive. Zero shrinks the circle to the single point (−g, −f), a point circle. Negative means no real circle exists at all. Check this before announcing any radius."
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "THE DIAMETER FORM",
          "tag": "when you are handed both ends",
          "main": "(x − x<sub>1</sub>)(x − x<sub>2</sub>) + (y − y<sub>1</sub>)(y − y<sub>2</sub>) = 0",
          "legend": [
            "the circle on the segment joining <i>A</i>(<i>x</i><sub>1</sub>, <i>y</i><sub>1</sub>) and <i>B</i>(<i>x</i><sub>2</sub>, <i>y</i><sub>2</sub>) as diameter",
            "it works because the angle in a semicircle is a right angle, so <i>PA</i> and <i>PB</i> are perpendicular for every other point <i>P</i> on the circle"
          ],
          "note": "Clearing that perpendicularity condition of fractions gives exactly this equation. One line, against three for the midpoint-and-half-distance route, and far fewer places to slip."
        },
        {
          "t": "defgrid",
          "title": "One quantity, two jobs",
          "tag": "S₁ is the left side of S = 0 evaluated at the point",
          "rows": [
            {
              "k": "<i>S</i><sub>1</sub> < 0",
              "v": "the point lies <b>inside</b> the circle"
            },
            {
              "k": "<i>S</i><sub>1</sub> = 0",
              "v": "the point lies <b>on</b> the circle"
            },
            {
              "k": "<i>S</i><sub>1</sub> > 0",
              "v": "the point lies <b>outside</b> the circle"
            },
            {
              "k": "√<i>S</i><sub>1</sub>",
              "v": "length of the tangent from that outside point, defined only when <i>S</i><sub>1</sub> > 0"
            },
            {
              "k": "<i>g</i><sup>2</sup> + <i>f</i><sup>2</sup> − <i>c</i>",
              "v": "positive real circle · zero point circle · negative no real circle"
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "THE FAMILY THROUGH TWO INTERSECTIONS",
          "tag": "one unknown instead of three",
          "main": "S + λS′ = 0",
          "legend": [
            "if <i>P</i> lies on both <i>S</i> = 0 and <i>S</i>′ = 0 then <i>S</i>(<i>P</i>) + λ<i>S</i>′(<i>P</i>) = 0 + λ·0 = 0 for every λ",
            "so the family passes through both intersection points automatically, and one extra condition fixes λ",
            "with a line <i>L</i> in place of the second circle, <i>S</i> + λ<i>L</i> = 0 is the family through the circle-line intersections"
          ],
          "note": "This replaces solving three simultaneous equations for g, f and c with solving one equation for λ. NCERT's own Historical Note credits Lamé with the idea in 1818 and then never uses it."
        },
        {
          "t": "proc",
          "title": "Three routes to a circle's equation",
          "steps": [
            "<b>Centre and radius given, or recoverable.</b> Write the standard form immediately. If the radius has to be found, it is the distance from the centre to any stated point on the circle.",
            "<b>Two ends of a diameter given.</b> Use the diameter form. Converting to centre and radius first is three lines of avoidable arithmetic.",
            "<b>Three points given.</b> Substitute each into <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> + 2<i>gx</i> + 2<i>fy</i> + <i>c</i> = 0 and solve for <i>g</i>, <i>f</i>, <i>c</i>. Take a point at the origin first if there is one, since it hands you <i>c</i> = 0 free.",
            "<b>Two curves given, and the circle must pass through where they cross.</b> Write <i>S</i> + λ<i>S</i>′ = 0 and fix λ with the one remaining condition. Never solve for the intersection points themselves.",
            "<b>Then check.</b> Confirm <i>g</i><sup>2</sup> + <i>f</i><sup>2</sup> − <i>c</i> > 0 and, if a point was given, that it satisfies your final equation."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Find the centre and radius of <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> − 6<i>x</i> + 8<i>y</i> − 11 = 0.",
          "steps": [
            "Compare with <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> + 2<i>gx</i> + 2<i>fy</i> + <i>c</i> = 0: 2<i>g</i> = −6 so <i>g</i> = −3, 2<i>f</i> = 8 so <i>f</i> = 4, and <i>c</i> = −11.",
            "Centre = (−<i>g</i>, −<i>f</i>) = (3, −4).",
            "Radius = √(<i>g</i><sup>2</sup> + <i>f</i><sup>2</sup> − <i>c</i>) = √(9 + 16 + 11) = √36. The quantity is positive, so this really is a circle."
          ],
          "ans": "Centre (3, −4) · radius 6 units"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Find the equation of the circle with <i>A</i>(1, 2) and <i>B</i>(5, 6) as the ends of a diameter.",
          "steps": [
            "The diameter form applies directly: (<i>x</i> − 1)(<i>x</i> − 5) + (<i>y</i> − 2)(<i>y</i> − 6) = 0.",
            "Expand: <i>x</i><sup>2</sup> − 6<i>x</i> + 5 + <i>y</i><sup>2</sup> − 8<i>y</i> + 12 = 0.",
            "Sanity check: the centre should be the midpoint (3, 4), and −<i>g</i> = 3, −<i>f</i> = 4. It is."
          ],
          "ans": "x² + y² − 6x − 8y + 17 = 0"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "A circle has centre (2, −1) and passes through (5, 3). Find its equation, and say whether (4, 2) lies inside, on or outside it.",
          "steps": [
            "The radius is the distance from the centre to the given point: <i>r</i> = √(3<sup>2</sup> + 4<sup>2</sup>) = 5.",
            "So (<i>x</i> − 2)<sup>2</sup> + (<i>y</i> + 1)<sup>2</sup> = 25, that is <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> − 4<i>x</i> + 2<i>y</i> − 20 = 0.",
            "Test (4, 2): <i>S</i><sub>1</sub> = 16 + 4 − 16 + 4 − 20 = −12, which is negative."
          ],
          "ans": "x² + y² − 4x + 2y − 20 = 0 · the point lies inside"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "Find the circle through <i>O</i>(0, 0), <i>A</i>(6, 0) and <i>B</i>(0, 8), and the length of the tangent to it from <i>P</i>(7, 9).",
          "steps": [
            "Through <i>O</i>: <i>c</i> = 0. Through <i>A</i>: 36 + 12<i>g</i> = 0 so <i>g</i> = −3. Through <i>B</i>: 64 + 16<i>f</i> = 0 so <i>f</i> = −4. The circle is <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> − 6<i>x</i> − 8<i>y</i> = 0, centre (3, 4), radius 5.",
            "Free check: <i>OA</i> and <i>OB</i> are perpendicular chords from the origin, so <i>AB</i> is a diameter. Its midpoint is (3, 4) and <i>AB</i> = 10 = 2<i>r</i>. Both agree.",
            "<i>S</i><sub>1</sub> at (7, 9) is 49 + 81 − 42 − 72 = 16, which is positive, so <i>P</i> is outside and a tangent exists."
          ],
          "ans": "x² + y² − 6x − 8y = 0 · tangent length √16 = 4 units"
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Find the centre and radius of x² + y² + 4x − 10y + 13 = 0.",
              "a": "g = 2, f = −5, c = 13. Centre (−2, 5), radius √(4 + 25 − 13) = √16 = 4."
            },
            {
              "q": "[JEE Main] Find the equation of the circle with centre (−3, 2) and radius 4.",
              "a": "(x + 3)² + (y − 2)² = 16, that is x² + y² + 6x − 4y − 3 = 0."
            },
            {
              "q": "[JEE Main] Find the circle having A(2, −3) and B(−2, 5) as the ends of a diameter.",
              "a": "(x − 2)(x + 2) + (y + 3)(y − 5) = 0, which gives x² + y² − 2y − 19 = 0."
            },
            {
              "q": "[JEE Main] Where does (1, 1) lie with respect to x² + y² − 2x − 4y + 3 = 0?",
              "a": "S₁ = 1 + 1 − 2 − 4 + 3 = −1, which is negative, so the point is inside. Note that no tangent can be drawn from it."
            },
            {
              "q": "[JEE Advanced] Find the circle through (1, 0), (0, 1) and (2, 1), and the tangent length to it from the origin.",
              "a": "Substituting the three points gives x² + y² − 3x − y + 2 = 0, centre (3/2, 1/2), radius √(1/2). From the origin S₁ = 2, so the tangent length is √2."
            }
          ]
        },
        {
          "t": "mcq",
          "q": "The centre of the circle <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> + 8<i>x</i> − 6<i>y</i> + 9 = 0 is",
          "correct": 1,
          "opts": [
            {
              "label": "(8, −6)",
              "nudge": "This reads the linear coefficients (2g, 2f) straight off, skipping both the halving and the sign flip."
            },
            {
              "label": "(−4, 3)",
              "nudge": null
            },
            {
              "label": "(4, −3)",
              "nudge": "The halving was done but the sign flip was not: this is (g, f), not (−g, −f)."
            },
            {
              "label": "(−8, 6)",
              "nudge": "The sign flip was done but the halving was not: this is (−2g, −2f)."
            }
          ],
          "solution": "2g = 8 gives g = 4, and 2f = −6 gives f = −3. The centre is (−g, −f) = (−4, 3). Halve and flip, both steps."
        },
        {
          "t": "mcq",
          "q": "For <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> − 4<i>x</i> − 6<i>y</i> + 13 = 0, the curve is",
          "correct": 1,
          "opts": [
            {
              "label": "a real circle of radius √13",
              "nudge": "This takes √c as the radius. The radius is √(g² + f² − c), and the constant term alone is never it."
            },
            {
              "label": "a point circle",
              "nudge": null
            },
            {
              "label": "imaginary",
              "nudge": "Imaginary needs g² + f² − c to be strictly negative. Here it is exactly zero, which is a different case."
            },
            {
              "label": "a real circle of radius 2",
              "nudge": "This assumes a positive radius without checking g² + f² − c at all, which is the step the question exists to test."
            }
          ],
          "solution": "g = −2, f = −3, c = 13, so g² + f² − c = 4 + 9 − 13 = 0. The radius is zero and the whole circle shrinks to the single point (2, 3)."
        },
        {
          "t": "mcq",
          "q": "The circle with (3, 4) and (−1, 2) as diameter ends is",
          "correct": 0,
          "opts": [
            {
              "label": "x² + y² − 2x − 6y + 5 = 0",
              "nudge": null
            },
            {
              "label": "x² + y² + 2x + 6y + 5 = 0",
              "nudge": "Both linear terms have the wrong sign, from expanding (x − 3)(x + 1) as if both brackets carried a plus."
            },
            {
              "label": "x² + y² − 2x − 6y − 5 = 0",
              "nudge": "The constant is wrong: −3 + 8 = +5, not −5. The two products were subtracted instead of added."
            },
            {
              "label": "x² + y² − 4x − 8y = 0",
              "nudge": "This uses the midpoint (1, 3) to build 2g and 2f but drops the constant term entirely, so the radius is wrong."
            }
          ],
          "solution": "Diameter form: (x − 3)(x + 1) + (y − 4)(y − 2) = 0 gives x² − 2x − 3 + y² − 6y + 8 = 0, that is x² + y² − 2x − 6y + 5 = 0."
        },
        {
          "t": "mcq",
          "q": "The length of the tangent from (0, 0) to <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> − 4<i>x</i> − 6<i>y</i> + 12 = 0 is",
          "correct": 0,
          "opts": [
            {
              "label": "2√3",
              "nudge": null
            },
            {
              "label": "12",
              "nudge": "This reports S₁ itself rather than its square root. S₁ locates the point; only the root measures a length."
            },
            {
              "label": "2",
              "nudge": "This is the radius-like quantity √(g² + f² − c) = √(4 + 9 − 12) = 1 mis-evaluated, or a root taken of the wrong S₁."
            },
            {
              "label": "no tangent can be drawn",
              "nudge": "A tangent exists exactly when S₁ > 0, and here S₁ = 12, so the origin is outside and two tangents exist."
            }
          ],
          "solution": "S₁ = 0 + 0 − 0 − 0 + 12 = 12 > 0, so the origin is outside and the tangent length is √12 = 2√3. Exam keys take the simplified surd."
        },
        {
          "t": "mistakes",
          "items": [
            "Getting the centre sign wrong. From <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> + 2<i>gx</i> + 2<i>fy</i> + <i>c</i> = 0 it is <b>(−<i>g</i>, −<i>f</i>)</b>, never (<i>g</i>, <i>f</i>) and never (2<i>g</i>, 2<i>f</i>).",
            "Skipping the nature check. Confirm <b><i>g</i><sup>2</sup> + <i>f</i><sup>2</sup> − <i>c</i> > 0</b> before announcing a radius: zero is a point circle, negative is no real circle.",
            "Forcing the general form when a diameter is given. The <b>diameter form</b> is one line and far safer.",
            "Not dividing through first. A real circle must have <b>equal coefficients of <i>x</i><sup>2</sup> and <i>y</i><sup>2</sup></b> and no <i>xy</i> term. If they are equal but not 1, divide before reading <i>g</i> and <i>f</i>.",
            "Claiming a tangent from an inside point. If <i>S</i><sub>1</sub> < 0 the honest answer is that <b>no tangent exists</b>."
          ]
        },
        {
          "t": "protip",
          "html": "reduce every general-form circle to three numbers in one pass: g is half the x coefficient, f is half the y coefficient, then centre (−g, −f) and radius √(g² + f² − c). and memorise the one expression S₁: plug the point into the circle's left side, its sign places the point and its square root is the tangent length. one quantity, two jobs."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "(x − h)² + (y − k)² = r²",
              "note": "standard form · origin-centred x² + y² = r²"
            },
            {
              "f": "centre (−g, −f) · r = √(g² + f² − c)",
              "note": "halve the linear coefficients and flip the sign"
            },
            {
              "f": "g² + f² − c: > 0, = 0, < 0",
              "note": "real circle, point circle, no real circle"
            },
            {
              "f": "(x − x₁)(x − x₂) + (y − y₁)(y − y₂) = 0",
              "note": "the diameter form, from the angle in a semicircle"
            },
            {
              "f": "S₁ sign locates · √S₁ measures",
              "note": "in, on, out · and the tangent length from outside"
            },
            {
              "f": "S + λS′ = 0",
              "note": "every circle through the two intersections, one unknown"
            }
          ],
          "aids": [
            "“centre is minus-g, minus-f”",
            "“check g² + f² − c before you trust the radius”",
            "“same number plugged in: sign locates, root measures”"
          ]
        }
      ]
    },
    {
      "n": "03",
      "title": "The Parabola",
      "chip": "03 PARABOLA",
      "kalam": "coefficient over four is a",
      "blocks": [
        {
          "t": "p",
          "html": "Picture a long straight boundary wall and a single flagpole planted some distance in front of it. Now ask where you can stand so that your distance to the flagpole is <b>exactly equal</b> to your distance to the wall. Stand too close to the pole and the pole wins, drift towards the wall and the wall wins, but there is a whole curving track of fair positions where the two distances stay perfectly balanced. That track is a parabola. The flagpole is the <b>focus</b> <i>S</i>, the wall is the <b>directrix</b>, and the rule is the entire definition."
        },
        {
          "t": "p",
          "html": "The ratio of those two distances is the eccentricity, and for a parabola it is always exactly <i>e</i> = 1: neither side ever gets an edge. If the focus could win you would have <i>e</i> < 1 and trace an ellipse, if the directrix could win you would have <i>e</i> > 1 and get a hyperbola. The parabola lives on the boundary, which is why it is the knife-edge cut, the one made by a plane parallel to the slant side of the cone."
        },
        {
          "t": "p",
          "html": "That single balancing property is why parabolas run our daily technology. A DTH dish bolted to a balcony is a parabola spun into a bowl: signals arriving parallel from a satellite all bounce off it and pile up at the focus, where the receiver sits. A solar cooker concentrates sunlight the same way. Run the idea backwards and a bulb at the focus throws a perfectly parallel beam, which is every headlight and every torch. And a cricket ball, once it leaves the bat, traces a parabola under gravity."
        },
        {
          "t": "think",
          "html": "the focus pulls you in by straight-line distance and the directrix pulls you in by perpendicular distance. the parabola is the locus of perfect ties."
        },
        {
          "t": "def",
          "term": "Parabola, and its three landmarks",
          "html": "A parabola is the locus of a point whose distance from a fixed point (the <b>focus</b>) equals its distance from a fixed line (the <b>directrix</b>). The <b>axis</b> is the line through the focus perpendicular to the directrix, and it is the curve's line of symmetry. The <b>vertex</b> <i>A</i> is where the curve meets its axis, exactly midway between focus and directrix. The <b>latus rectum</b> is the focal chord perpendicular to the axis, and its length measures how wide the parabola opens."
        },
        {
          "t": "defgrid",
          "title": "The four standard forms",
          "tag": "vertex at the origin, a > 0",
          "rows": [
            {
              "k": "<i>y</i><sup>2</sup> = 4<i>ax</i>",
              "v": "opens <b>right</b> · focus (<i>a</i>, 0) · directrix <i>x</i> = −<i>a</i> · axis the <i>x</i>-axis"
            },
            {
              "k": "<i>y</i><sup>2</sup> = −4<i>ax</i>",
              "v": "opens <b>left</b> · focus (−<i>a</i>, 0) · directrix <i>x</i> = <i>a</i> · axis the <i>x</i>-axis"
            },
            {
              "k": "<i>x</i><sup>2</sup> = 4<i>ay</i>",
              "v": "opens <b>up</b> · focus (0, <i>a</i>) · directrix <i>y</i> = −<i>a</i> · axis the <i>y</i>-axis"
            },
            {
              "k": "<i>x</i><sup>2</sup> = −4<i>ay</i>",
              "v": "opens <b>down</b> · focus (0, −<i>a</i>) · directrix <i>y</i> = <i>a</i> · axis the <i>y</i>-axis"
            },
            {
              "k": "All four",
              "v": "latus rectum = 4<i>a</i>, which <b>is</b> the coefficient · the un-squared variable names the axis"
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "DIAGRAM · READING y² = 4ax OFF THE PICTURE",
          "chips": ["VERTEX AND AXIS", "FOCUS AND DIRECTRIX", "THE EQUAL DISTANCES", "LATUS RECTUM"],
          "captions": [
            "The vertex A sits at the origin and the axis runs along the x-axis. Only y is squared, and that is exactly what tells you the curve opens along x. The un-squared variable always names the direction of opening.",
            "The focus S sits at (a, 0) inside the curve and the dashed directrix x = −a sits on the far side of the vertex. Focus and directrix always straddle the vertex, each at the same distance a from it. Putting them on the same side is the most common sketching error.",
            "Take any point P on the curve. The distance SP to the focus and the perpendicular distance PM to the directrix are always equal. That is the definition, and squaring it is the whole derivation: e = SP / PM = 1.",
            "The latus rectum is the chord through S perpendicular to the axis. Substituting x = a gives y = ±2a, so it runs from (a, 2a) to (a, −2a) and its length is 4a, the coefficient itself. A large 4a is a broad lazy curve, a small one is tight and narrow."
          ],
          "frames": [
            {
              "x": [-2.5, 7.5],
              "y": [-3.6, 3.6],
              "curves": [{ "c": "parabola", "a": 1, "horizontal": true }],
              "points": [{ "x": 0, "y": 0, "label": "A" }],
              "segments": [{ "from": [0, 0], "to": [7, 0], "dash": true, "soft": true }],
              "labels": [{ "x": 5.5, "y": 0.6, "text": "axis", "soft": true }]
            },
            {
              "x": [-2.5, 7.5],
              "y": [-3.6, 3.6],
              "curves": [
                { "c": "parabola", "a": 1, "horizontal": true },
                { "c": "vline", "x": -1, "dash": true, "soft": true }
              ],
              "points": [
                { "x": 1, "y": 0, "label": "S(a, 0)" },
                { "x": 0, "y": 0, "label": "A", "soft": true }
              ],
              "labels": [{ "x": -1, "y": -3.1, "text": "x = −a", "soft": true }]
            },
            {
              "x": [-2.5, 7.5],
              "y": [-3.6, 3.6],
              "curves": [
                { "c": "parabola", "a": 1, "horizontal": true },
                { "c": "vline", "x": -1, "dash": true, "soft": true }
              ],
              "points": [
                { "x": 1.69, "y": 2.6, "label": "P" },
                { "x": 1, "y": 0, "label": "S" },
                { "x": -1, "y": 2.6, "label": "M", "soft": true }
              ],
              "segments": [
                { "from": [1, 0], "to": [1.69, 2.6], "label": "SP" },
                { "from": [-1, 2.6], "to": [1.69, 2.6], "label": "PM" }
              ]
            },
            {
              "x": [-2.5, 7.5],
              "y": [-3.6, 3.6],
              "curves": [
                { "c": "parabola", "a": 1, "horizontal": true },
                { "c": "vline", "x": 1, "dash": true, "soft": true }
              ],
              "points": [
                { "x": 1, "y": 2, "label": "(a, 2a)" },
                { "x": 1, "y": -2 },
                { "x": 1, "y": 0, "label": "S", "soft": true }
              ],
              "segments": [{ "from": [1, -2], "to": [1, 2], "label": "4a" }]
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHERE y² = 4ax COMES FROM, TAP A LINE",
          "steps": [
            {
              "eq": "vertex at O, focus S(a, 0), directrix x = −a",
              "why": "Choose the frame so the algebra is kind. The vertex is the midpoint of focus and directrix, so if the focus sits at distance a on the positive x-axis the directrix must be the vertical line the same distance on the other side."
            },
            {
              "eq": "SP = PM",
              "why": "The defining property. P(x, y) is any point of the curve and M is the foot of the perpendicular from P to the directrix, so M = (−a, y)."
            },
            {
              "eq": "√((x − a)² + y²) = |x + a|",
              "why": "Write each distance. The distance to the focus is the distance formula; the distance to the vertical line x = −a is just the horizontal gap."
            },
            {
              "eq": "(x − a)² + y² = (x + a)²",
              "why": "Both sides are non-negative distances, so squaring is reversible and clears the square root and the modulus in one move without introducing false points."
            },
            {
              "eq": "x² − 2ax + a² + y² = x² + 2ax + a²",
              "why": "Expand both squares. The x² and a² terms are identical on the two sides, which is the whole point of placing the focus and directrix symmetrically about the vertex."
            },
            {
              "eq": "y² = 4ax",
              "why": "Cancel x² and a², leaving y² − 2ax = 2ax. The messy squared terms are exactly the ones that vanish, and the clean relation between y² and x is what survives. The other three forms come from the same argument with the focus on the negative x-axis, or on the y-axis."
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "LATUS RECTUM, FOCAL DISTANCE, POSITION",
          "tag": "for y² = 4ax",
          "main": "latus rectum = 4a · SP = x + a",
          "legend": [
            "put <i>x</i> = <i>a</i> in <i>y</i><sup>2</sup> = 4<i>ax</i>: <i>y</i> = ±2<i>a</i>, so the chord runs from (<i>a</i>, 2<i>a</i>) to (<i>a</i>, −2<i>a</i>) and has length 4<i>a</i>",
            "the focal distance equals the distance to the directrix <i>x</i> = −<i>a</i>, which is <i>x</i> + <i>a</i>: the un-squared coordinate plus <i>a</i>",
            "position of (<i>x</i><sub>1</sub>, <i>y</i><sub>1</sub>): the sign of <i>y</i><sub>1</sub><sup>2</sup> − 4<i>ax</i><sub>1</sub> gives outside, on, inside"
          ],
          "note": "For x² = 4ay everything mirrors: the latus rectum is still 4a and the focal distance is y + a. Always the un-squared coordinate, plus a."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "DIAGRAM · THE SIGN SETS THE DIRECTION",
          "mathChips": true,
          "chips": ["y² = 4ax", "y² = −4ax", "x² = 4ay", "x² = −4ay"],
          "captions": [
            "y is squared, so the curve opens along the x-axis, and the plus sign sends it right. Focus at (a, 0), directrix the dashed line x = −a.",
            "Same squared variable, so the same axis, but the minus flips the opening to the left. Focus at (−a, 0), and the directrix has swapped to x = a. Focus and directrix trade places with the sign, they never sit on the same side.",
            "Now x is squared, so the axis swings onto the y-axis and the curve opens up. Focus at (0, a), directrix the dashed horizontal y = −a. A directrix that is horizontal always belongs to a y-axis parabola.",
            "Minus with x squared: opens down. Focus (0, −a), directrix y = a. Read which variable is squared first and the sign second, and all four cases are decided in two seconds."
          ],
          "frames": [
            {
              "x": [-5, 5],
              "y": [-3.6, 3.6],
              "curves": [
                { "c": "parabola", "a": 1, "horizontal": true },
                { "c": "vline", "x": -1, "dash": true, "soft": true }
              ],
              "points": [{ "x": 1, "y": 0, "label": "S" }]
            },
            {
              "x": [-5, 5],
              "y": [-3.6, 3.6],
              "curves": [
                { "c": "parabola", "a": -1, "horizontal": true },
                { "c": "vline", "x": 1, "dash": true, "soft": true }
              ],
              "points": [{ "x": -1, "y": 0, "label": "S" }]
            },
            {
              "x": [-5, 5],
              "y": [-3.6, 3.6],
              "curves": [
                { "c": "parabola", "a": 1 },
                { "c": "line", "m": 0, "k": -1, "dash": true, "soft": true }
              ],
              "points": [{ "x": 0, "y": 1, "label": "S" }]
            },
            {
              "x": [-5, 5],
              "y": [-3.6, 3.6],
              "curves": [
                { "c": "parabola", "a": -1 },
                { "c": "line", "m": 0, "k": 1, "dash": true, "soft": true }
              ],
              "points": [{ "x": 0, "y": -1, "label": "S" }]
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "THE PARAMETRIC POINT",
          "tag": "two coordinates traded for one number",
          "main": "P ≡ (at<sup>2</sup>, 2at),  t ∈ ℝ",
          "legend": [
            "every point of <i>y</i><sup>2</sup> = 4<i>ax</i> has this form, and <i>t</i> = <i>y</i>/2<i>a</i> recovers the parameter",
            "focal chord condition: <i>PQ</i> passes through the focus if and only if <i>t</i><sub>1</sub><i>t</i><sub>2</sub> = −1",
            "focal distance in parameters: <i>SP</i> = <i>at</i><sup>2</sup> + <i>a</i> = <i>a</i>(1 + <i>t</i><sup>2</sup>)"
          ],
          "note": "Combining those two gives the harmonic property 1/SP + 1/SQ = 1/a for any focal chord PQ, which says the semi-latus rectum 2a is the harmonic mean of the two focal radii."
        },
        {
          "t": "proc",
          "title": "Read any standard parabola in ten seconds",
          "steps": [
            "<b>Which variable is squared?</b> The <b>un-squared</b> one names the axis the curve opens along. <i>y</i><sup>2</sup> = … opens along <i>x</i>, <i>x</i><sup>2</sup> = … opens along <i>y</i>.",
            "<b>What is the sign?</b> Plus opens right or up, minus opens left or down. Decide the direction before placing anything.",
            "<b>Divide the coefficient by 4.</b> That is <i>a</i>, the vertex-to-focus distance, and it is what places the focus and the directrix on opposite sides of the vertex.",
            "<b>The coefficient itself is the latus rectum.</b> Do not divide it by 4 twice, and do not report <i>a</i> when the question asked for 4<i>a</i>.",
            "<b>Check with a point.</b> Substitute any point you were given back into your equation. A parabola through it must satisfy it exactly."
          ]
        },
        {
          "t": "p",
          "html": "Applied questions arrive without a coordinate frame, and the entire difficulty is the first line of your solution. A dish arrives as “60 cm across and 15 cm deep”, a bridge cable as “span 100 m, longest wire 30 m, shortest 6 m”. You cannot move the object, so you move the frame: <b>put the origin where the object's own symmetry lives</b>, which for a parabola is the vertex. Then every stated measurement becomes one coordinate of one point, remembering that a width or a diameter is always <b>twice</b> a coordinate. One point on the curve is exactly what you need to pin down 4<i>a</i>, and only then do you answer what was actually asked."
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "For the parabola <i>y</i><sup>2</sup> = −12<i>x</i>, find the vertex, focus, axis, directrix and the length of the latus rectum.",
          "steps": [
            "<i>y</i> is squared and the sign is negative, so the curve opens <b>left</b> along the <i>x</i>-axis. Compare with <i>y</i><sup>2</sup> = −4<i>ax</i>: 4<i>a</i> = 12, so <i>a</i> = 3.",
            "Vertex (0, 0), focus (−<i>a</i>, 0) = (−3, 0), axis the <i>x</i>-axis, that is <i>y</i> = 0.",
            "The directrix is on the opposite side of the vertex from the focus: <i>x</i> = <i>a</i> = 3. The latus rectum is the coefficient, 12."
          ],
          "ans": "Vertex (0, 0) · focus (−3, 0) · axis y = 0 · directrix x = 3 · latus rectum 12 units"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Find the equation of the parabola with focus (0, −3) and directrix <i>y</i> = 3.",
          "steps": [
            "Read the geometry before computing. The focus is on the <i>y</i>-axis below the origin and the directrix is the horizontal line above it, so the vertex is their midpoint, the origin.",
            "The curve always opens away from the directrix and towards the focus, so it opens <b>downward</b>: the form is <i>x</i><sup>2</sup> = −4<i>ay</i>.",
            "The vertex-to-focus distance is <i>a</i> = 3, so 4<i>a</i> = 12. No distance formula was needed anywhere."
          ],
          "ans": "x² = −12y"
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A parabolic solar cooker is 20 cm across at the rim and 5 cm deep at its centre. Where should the vessel sit? If a larger dish of the same focal length is made 45 cm deep, find its rim diameter.",
          "steps": [
            "Put the origin at the <b>vertex</b>, the deepest point of the bowl, with the axis along the positive <i>x</i>-axis. The cross-section is <i>y</i><sup>2</sup> = 4<i>ax</i>.",
            "“20 cm across” is a diameter, so the rim half-width is <i>y</i> = 10, and “5 cm deep” puts it at <i>x</i> = 5. So 10<sup>2</sup> = 4<i>a</i>(5), giving 100 = 20<i>a</i> and <i>a</i> = 5. The vessel goes at the focus, 5 cm from the vertex along the axis, and the dish is <i>y</i><sup>2</sup> = 20<i>x</i>.",
            "Same focal length means the same <i>a</i> = 5. At <i>x</i> = 45, <i>y</i><sup>2</sup> = 20(45) = 900, so <i>y</i> = ±30 and the rim runs from (45, −30) to (45, 30)."
          ],
          "ans": "Focus 5 cm from the vertex · the larger rim is 60 cm across"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "<i>PQ</i> is a focal chord of <i>y</i><sup>2</sup> = 4<i>ax</i>. Prove 1/<i>SP</i> + 1/<i>SQ</i> = 1/<i>a</i>, and find the full chord length when <i>SP</i> = 3<i>a</i>.",
          "steps": [
            "Write the ends parametrically as (<i>at</i><sub>1</sub><sup>2</sup>, 2<i>at</i><sub>1</sub>) and (<i>at</i><sub>2</sub><sup>2</sup>, 2<i>at</i><sub>2</sub>). Collinearity with <i>S</i>(<i>a</i>, 0) forces the focal-chord condition <i>t</i><sub>1</sub><i>t</i><sub>2</sub> = −1.",
            "Focal distances are <i>SP</i> = <i>a</i>(1 + <i>t</i><sub>1</sub><sup>2</sup>) and <i>SQ</i> = <i>a</i>(1 + <i>t</i><sub>2</sub><sup>2</sup>). Substituting <i>t</i><sub>2</sub> = −1/<i>t</i><sub>1</sub> turns 1/<i>SQ</i> into <i>t</i><sub>1</sub><sup>2</sup> / [<i>a</i>(1 + <i>t</i><sub>1</sub><sup>2</sup>)].",
            "Adding, the numerators become 1 + <i>t</i><sub>1</sub><sup>2</sup>, which cancels the denominator and leaves 1/<i>a</i>. With <i>SP</i> = 3<i>a</i>: 1/<i>SQ</i> = 1/<i>a</i> − 1/3<i>a</i> = 2/3<i>a</i>, so <i>SQ</i> = 3<i>a</i>/2."
          ],
          "ans": "PQ = SP + SQ = 3a + 3a/2 = 9a/2"
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Find the focus, axis, directrix and latus rectum of x² = 20y.",
              "a": "x squared with a plus, so it opens up: 4a = 20, a = 5. Focus (0, 5), axis x = 0, directrix y = −5, latus rectum 20."
            },
            {
              "q": "[JEE Main] Find the parabola with vertex at the origin, axis along the x-axis, passing through (2, −6).",
              "a": "Form y² = 4ax. Then 36 = 4a(2), so 4a = 18 and the parabola is y² = 18x."
            },
            {
              "q": "[JEE Main] The focus of a parabola is (−4, 0) and its vertex is the origin. Write its equation and its directrix.",
              "a": "Focus on the negative x-axis, so it opens left with a = 4: y² = −16x, directrix x = 4."
            },
            {
              "q": "[JEE Main] Is (2, 5) inside, on or outside y² = 8x? And what is the focal distance of (2, 4) on it?",
              "a": "y₁² − 4ax₁ = 25 − 16 = 9 > 0, so (2, 5) is outside. Here 4a = 8 so a = 2, and the focal distance of (2, 4) is x + a = 2 + 2 = 4."
            },
            {
              "q": "[JEE Advanced] A focal chord of y² = 12x has one end at parameter t = 2. Find both ends and the chord length.",
              "a": "4a = 12 so a = 3. At t = 2 the end is (12, 12); the focal-chord condition t₁t₂ = −1 gives t₂ = −1/2 and the other end (3/4, −3). Length = a(1 + t₁²) + a(1 + t₂²) = 3(5) + 3(5/4) = 75/4 = 18.75."
            }
          ]
        },
        {
          "t": "mcq",
          "q": "The length of the latus rectum of <i>y</i><sup>2</sup> = 7<i>x</i> is",
          "correct": 0,
          "opts": [
            {
              "label": "7",
              "nudge": null
            },
            {
              "label": "7/4",
              "nudge": "This computes a = 7/4 correctly and then reports a instead of 4a. It is the classic “a versus 4a” slip, and the single biggest mark-loser in this topic."
            },
            {
              "label": "28",
              "nudge": "Here a = 7/4 was found and then multiplied by 4 twice over. The coefficient is already 4a."
            },
            {
              "label": "7/2",
              "nudge": "This halves the coefficient, confusing the latus rectum 4a with the semi-latus rectum 2a."
            }
          ],
          "solution": "Comparing y² = 7x with y² = 4ax gives 4a = 7. The latus rectum is 4a, which is the coefficient itself, so it is 7."
        },
        {
          "t": "mcq",
          "q": "The focus of the parabola <i>x</i><sup>2</sup> = −16<i>y</i> is",
          "correct": 1,
          "opts": [
            {
              "label": "(0, 4)",
              "nudge": "This ignores the negative sign and places the focus above the vertex. The sign decides which way the curve opens, and the focus always sits inside the curve."
            },
            {
              "label": "(0, −4)",
              "nudge": null
            },
            {
              "label": "(4, 0)",
              "nudge": "This puts the focus on the x-axis, confusing x² = … (axis along y) with y² = … (axis along x). Read which variable is squared first."
            },
            {
              "label": "(−4, 0)",
              "nudge": "Same axis confusion as the previous option, with the sign applied to the wrong coordinate."
            }
          ],
          "solution": "x is squared with a minus, so the parabola opens downward along the y-axis. From 4a = 16, a = 4, and the focus is (0, −a) = (0, −4)."
        },
        {
          "t": "mcq",
          "q": "If (<i>k</i>, 4) lies on <i>y</i><sup>2</sup> = 8<i>x</i>, its focal distance is",
          "correct": 1,
          "opts": [
            {
              "label": "2",
              "nudge": "This reports a alone. The focal distance is x + a, and the point's own abscissa has been dropped."
            },
            {
              "label": "4",
              "nudge": null
            },
            {
              "label": "6",
              "nudge": "This adds 4a instead of a: 2 + 4 rather than 2 + 2. Divide the coefficient by 4 before using it as a distance."
            },
            {
              "label": "8",
              "nudge": "This uses the y-coordinate, or the coefficient, as the distance. The focal distance is measured along x for a y² = 4ax parabola."
            }
          ],
          "solution": "From 16 = 8k, k = 2. From 4a = 8, a = 2. Focal distance = x + a = 2 + 2 = 4."
        },
        {
          "t": "mcq",
          "q": "A uniformly loaded suspension cable hangs as a parabola over a 100 m roadway. The longest wire is 30 m and the shortest is 6 m. The wire 18 m from the middle is",
          "correct": 2,
          "opts": [
            {
              "label": "3.11 m",
              "nudge": "This reports the height of the cable above the origin and forgets that the origin sits 6 m above the roadway. No wire can be shorter than the stated minimum of 6 m, so this answer is impossible on inspection."
            },
            {
              "label": "15.83 m",
              "nudge": "This answers a different question by reading “18 m from the middle” as 18 m from the end, and substituting x = 32 instead of x = 18."
            },
            {
              "label": "9.11 m",
              "nudge": null
            },
            {
              "label": "24 m",
              "nudge": "This is the cable height at the tower, 30 − 6, which is the number used to build the equation, not the answer to the question asked."
            }
          ],
          "solution": "Origin at the lowest point of the cable, x² = 4ay. Towers at x = ±50 with cable height 30 − 6 = 24 above the origin, so 2500 = 4a(24) and 4a = 625/6. At x = 18, y = 6(324)/625 = 3.1104. Every wire is measured from the roadway, so the length is 6 + 3.1104 ≈ 9.11 m."
        },
        {
          "t": "mistakes",
          "items": [
            "The <b><i>a</i> versus 4<i>a</i></b> disaster. The coefficient in <i>y</i><sup>2</sup> = 4<i>ax</i> is 4<i>a</i>, not <i>a</i>. The focus sits at distance <i>a</i>, the coefficient divided by 4, while the latus rectum <b>is</b> the coefficient.",
            "Putting the directrix on the wrong side. Focus and directrix always <b>straddle the vertex</b>, each at distance <i>a</i>. If the focus is (<i>a</i>, 0) the directrix cannot be <i>x</i> = <i>a</i>.",
            "Swapping the axis of symmetry. <i>y</i><sup>2</sup> = 4<i>ax</i> opens along <i>x</i>, <i>x</i><sup>2</sup> = 4<i>ay</i> opens along <i>y</i>. Read <b>which variable is squared</b> before anything else.",
            "Forgetting the sign sets the direction. A minus flips the opening to left or down, and drags the directrix across with it.",
            "In an applied problem, putting the origin at ground level instead of at the <b>vertex</b>, then reporting a height measured from the wrong line."
          ]
        },
        {
          "t": "protip",
          "html": "build a three-line reflex for any standard parabola. one, the un-squared variable names the axis it opens along. two, the coefficient divided by 4 is a, the focus and directrix distance. three, the coefficient itself is the latus rectum. with those three you can read off every feature in under ten seconds, no derivation needed in the hall."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "distance to focus = distance to directrix",
              "note": "the definition · eccentricity e = 1 exactly"
            },
            {
              "f": "y² = ±4ax · x² = ±4ay",
              "note": "the un-squared variable names the axis, the sign sets the direction"
            },
            {
              "f": "focus (a, 0) · directrix x = −a · LR = 4a",
              "note": "for y² = 4ax · ends (a, ±2a)"
            },
            {
              "f": "SP = x + a",
              "note": "the un-squared coordinate plus a"
            },
            {
              "f": "(at², 2at) · focal chord ⟺ t₁t₂ = −1",
              "note": "and 1/SP + 1/SQ = 1/a for that chord"
            },
            {
              "f": "sign of y₁² − 4ax₁",
              "note": "positive outside, zero on, negative inside"
            }
          ],
          "aids": [
            "“coefficient over four is a, the coefficient itself is the latus rectum”",
            "“the lonely variable points the way it opens”",
            "“focus and directrix straddle the vertex”"
          ]
        }
      ]
    },
    {
      "n": "04",
      "title": "The Ellipse",
      "chip": "04 ELLIPSE",
      "kalam": "bigger denominator points to the foci",
      "blocks": [
        {
          "t": "p",
          "html": "Take the parabola's one focus and one wall, and give it a <b>second focus</b> instead. An ellipse is what you get when a point moves so that the <b>sum</b> of its distances to two fixed points stays constant. There is a way to draw one that every student should try once: push two pins into a board, loop a single thread loosely around both, pull the loop taut with a pencil tip and slide the pencil all the way round. The thread length never changes, so the two distances always add to the same total. The pins are the <b>foci</b>, and the constant sum is 2<i>a</i>."
        },
        {
          "t": "p",
          "html": "How squashed the loop is gets measured by the same <i>e</i> as before, except now 0 < <i>e</i> < 1. An <i>e</i> near 0 is almost circular, an <i>e</i> near 1 is long and cigar-shaped, and at exactly <i>e</i> = 1 it would burst open into a parabola. Bring the pins together and the ellipse becomes a circle: a circle is just an ellipse whose foci have collapsed into one. Ellipses run quietly through real life, every planet orbits the Sun on one with the Sun at a focus, whispering galleries reconvene a whisper from one focus at the other, and lithotripsy machines put the stone at one focus and the shock-wave source at the other."
        },
        {
          "t": "think",
          "html": "the rope must be longer than the gap between the pins, 2a > 2c. if it were equal the ellipse would flatten onto the segment joining the foci and stop being a curve at all."
        },
        {
          "t": "def",
          "term": "Ellipse",
          "html": "An ellipse is the locus of a point the <b>sum</b> of whose distances from two fixed foci is a constant 2<i>a</i>. Equivalently it is the focus-directrix locus with 0 < <i>e</i> < 1. The <b>major axis</b> is the long one, of length 2<i>a</i>, and its ends are the <b>vertices</b>; the <b>minor axis</b> is the short one, of length 2<i>b</i>. The foci always lie on the <b>major</b> axis, never on the minor one, and which axis is major is decided by which denominator is larger, not by habit."
        },
        {
          "t": "formula",
          "kicker": "THE STANDARD EQUATION",
          "tag": "centre at the origin, a > b > 0",
          "main": "x<sup>2</sup>/a<sup>2</sup> + y<sup>2</sup>/b<sup>2</sup> = 1",
          "legend": [
            "<i>c</i> = <i>ae</i> · <i>c</i><sup>2</sup> = <i>a</i><sup>2</sup> − <i>b</i><sup>2</sup> · <i>b</i><sup>2</sup> = <i>a</i><sup>2</sup>(1 − <i>e</i><sup>2</sup>)",
            "<i>e</i> = <i>c</i>/<i>a</i> = √(1 − <i>b</i><sup>2</sup>/<i>a</i><sup>2</sup>), and it must land strictly between 0 and 1",
            "if the larger denominator sits under <i>y</i><sup>2</sup> the whole picture rotates: foci (0, ±<i>ae</i>), directrices <i>y</i> = ±<i>a</i>/<i>e</i>"
          ],
          "note": "The minus sign in c² = a² − b² belongs to the ellipse. The plus sign belongs to the hyperbola. Mixing them silently flips your eccentricity from below 1 to above it, which is the guard: an ellipse answer of e ≥ 1 is wrong before you check anything else."
        },
        {
          "t": "defgrid",
          "title": "Features of x²/a² + y²/b² = 1",
          "tag": "with a > b, so the major axis is the x-axis",
          "rows": [
            {
              "k": "Vertices · minor ends",
              "v": "(±<i>a</i>, 0) · (0, ±<i>b</i>)"
            },
            {
              "k": "Foci <i>S</i>, <i>S</i>′",
              "v": "(±<i>ae</i>, 0), that is (±<i>c</i>, 0)"
            },
            {
              "k": "Axis lengths",
              "v": "major 2<i>a</i> · minor 2<i>b</i>"
            },
            {
              "k": "Directrices",
              "v": "<i>x</i> = ±<i>a</i>/<i>e</i>, always outside the vertices"
            },
            {
              "k": "Latus rectum",
              "v": "ℓ = 2<i>b</i><sup>2</sup>/<i>a</i>, the focal chord perpendicular to the major axis"
            },
            {
              "k": "Focal radii of <i>P</i>(<i>x</i>, <i>y</i>)",
              "v": "<i>SP</i> = <i>a</i> − <i>ex</i> · <i>S</i>′<i>P</i> = <i>a</i> + <i>ex</i> · their sum is 2<i>a</i>"
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "DIAGRAM · ANATOMY OF AN ELLIPSE",
          "chips": ["a, b AND c", "FOCAL SUM", "LATUS RECTUM", "DIRECTRICES"],
          "captions": [
            "a = 4 along the major axis, b = 3 along the minor, and c = √(a² − b²) = √7 places the foci. The dashed slant from S to the minor-axis end B has length √(c² + b²) = √(a²e² + a²(1 − e²)) = a exactly. Focus to minor tip equals the semi-major axis, and that one fact collapses half the hard triangle problems in this topic.",
            "For every point P on the curve, SP + S′P = 2a = 8. That constant sum is the pins-and-thread definition, and it is also a free check on any focal-radius calculation you do.",
            "The latus rectum is the focal chord perpendicular to the major axis. Putting x = c into the equation gives y = ±b²/a, so its full length is 2b²/a, here 4.5. The dashed verticals mark both foci.",
            "The two directrices sit at x = ±a/e, well outside the vertices. Every point of the curve keeps its distance to the nearer focus at e times its distance to the nearer directrix, with e = √7/4 ≈ 0.66 here. Push e towards 1 and the directrices march inward as the ellipse stretches."
          ],
          "frames": [
            {
              "x": [-7, 7],
              "y": [-5, 5],
              "curves": [{ "c": "ellipse", "a": 4, "b": 3 }],
              "points": [
                { "x": 4, "y": 0, "label": "A" },
                { "x": 0, "y": 3, "label": "B" },
                { "x": 2.646, "y": 0, "label": "S" },
                { "x": -2.646, "y": 0, "label": "S′", "soft": true }
              ],
              "segments": [
                { "from": [0, 0], "to": [4, 0], "dash": true, "soft": true },
                { "from": [0, 0], "to": [0, 3], "dash": true, "soft": true },
                { "from": [2.646, 0], "to": [0, 3], "dash": true, "label": "= a" }
              ],
              "labels": [
                { "x": 3.2, "y": 0.5, "text": "a", "soft": true },
                { "x": -0.55, "y": 1.5, "text": "b", "soft": true }
              ]
            },
            {
              "x": [-7, 7],
              "y": [-5, 5],
              "curves": [{ "c": "ellipse", "a": 4, "b": 3 }],
              "points": [
                { "x": 2.646, "y": 0, "label": "S" },
                { "x": -2.646, "y": 0, "label": "S′" },
                { "x": 2, "y": 2.598, "label": "P" }
              ],
              "segments": [
                { "from": [2.646, 0], "to": [2, 2.598], "label": "SP" },
                { "from": [-2.646, 0], "to": [2, 2.598], "label": "S′P" }
              ]
            },
            {
              "x": [-7, 7],
              "y": [-5, 5],
              "curves": [
                { "c": "ellipse", "a": 4, "b": 3 },
                { "c": "vline", "x": 2.646, "dash": true, "soft": true },
                { "c": "vline", "x": -2.646, "dash": true, "soft": true }
              ],
              "points": [
                { "x": 2.646, "y": 2.25 },
                { "x": 2.646, "y": -2.25 },
                { "x": 2.646, "y": 0, "label": "S", "soft": true }
              ],
              "segments": [{ "from": [2.646, -2.25], "to": [2.646, 2.25], "label": "2b²/a" }]
            },
            {
              "x": [-7, 7],
              "y": [-5, 5],
              "curves": [
                { "c": "ellipse", "a": 4, "b": 3 },
                { "c": "vline", "x": 6.047, "dash": true, "soft": true },
                { "c": "vline", "x": -6.047, "dash": true, "soft": true }
              ],
              "points": [
                { "x": 2.646, "y": 0, "label": "S" },
                { "x": -2.646, "y": 0, "label": "S′", "soft": true }
              ],
              "labels": [{ "x": 0, "y": -4.4, "text": "directrices x = ±a/e", "soft": true }]
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE TWO SQUARINGS, TAP A LINE",
          "steps": [
            {
              "eq": "√((x − c)² + y²) + √((x + c)² + y²) = 2a",
              "why": "Centre at the origin, foci at S(c, 0) and S′(−c, 0), and the defining sum written out with the distance formula. We call the constant 2a because it will turn out to be the major axis."
            },
            {
              "eq": "√((x − c)² + y²) = 2a − √((x + c)² + y²)",
              "why": "Isolate one radical first. Squaring a sum of two radicals leaves a radical behind, so moving one across is what makes the first squaring worth doing."
            },
            {
              "eq": "−2cx = 4a² − 4a√((x + c)² + y²) + 2cx",
              "why": "Square both sides and expand. The common x² + c² + y² cancels from both sides, and only the cross terms −2cx and +2cx survive. Symmetric foci are exactly why the cancellation is this clean."
            },
            {
              "eq": "√((x + c)² + y²) = a + cx/a",
              "why": "Rearrange to isolate the surviving radical and divide through by 4a. The right side is now a polynomial, so one more squaring finishes the job."
            },
            {
              "eq": "x²(1 − c²/a²) + y² = a² − c²",
              "why": "Square again, cancel the 2cx that appears on both sides, and group. Every square root is gone."
            },
            {
              "eq": "x²/a² + y²/b² = 1, with b² = a² − c²",
              "why": "Name the positive quantity a² − c² as b², which is legitimate because a > c. The bracket becomes b²/a², and dividing through by b² gives the standard form. That naming is not a convenience, it IS the master relationship c² = a² − b²."
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "LATUS RECTUM AND FOCAL RADII",
          "tag": "both fall straight out of the equation",
          "main": "ℓ = 2b<sup>2</sup>/a · SP = a − ex · S′P = a + ex",
          "legend": [
            "put <i>x</i> = <i>c</i> = <i>ae</i> in the equation: <i>y</i><sup>2</sup>/<i>b</i><sup>2</sup> = 1 − <i>e</i><sup>2</sup> = <i>b</i><sup>2</sup>/<i>a</i><sup>2</sup>, so <i>y</i> = ±<i>b</i><sup>2</sup>/<i>a</i>",
            "the two focal radii always add to 2<i>a</i>, which is a free check on any answer",
            "distance from a focus to an end of the minor axis is exactly <i>a</i>"
          ],
          "note": "The latus rectum is 2b² over a: full numerator 2b², denominator the semi-major axis a. Dropping the 2 or dividing by 2a are the two standard slips, and the identical formula serves the hyperbola."
        },
        {
          "t": "p",
          "html": "There is one more way to describe a point of an ellipse, and it is the fastest legal route through half the questions Boards and JEE Main ask. Picture the giant wheel at a mela, a big vertical circle with seats around the rim: one angle locates a seat completely, because the radius never changes. Now shine a torch at that wheel and look at the shadow on the ground. The shadow is <b>squashed in one direction and stretched in none</b>, so it is an ellipse, and every seat throws its shadow to exactly one point of it. Each point of the ellipse still has an angle attached, not its own angle, but the angle of the seat that made it."
        },
        {
          "t": "def",
          "term": "Auxiliary circle and eccentric angle",
          "html": "The <b>auxiliary circle</b> of <i>x</i><sup>2</sup>/<i>a</i><sup>2</sup> + <i>y</i><sup>2</sup>/<i>b</i><sup>2</sup> = 1 is the circle on the <b>major axis as diameter</b>, so <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> = <i>a</i><sup>2</sup>. Drop the perpendicular from <i>P</i> on the ellipse to the major axis and produce it to meet the circle at <i>Q</i> on the same side. The angle θ that <i>OQ</i> makes with the positive <i>x</i>-axis is the <b>eccentric angle</b> of <i>P</i>, and <i>P</i> = (<i>a</i> cos θ, <i>b</i> sin θ). It is <b>not</b> <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> = <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>, which is the director circle, and not <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> = <i>b</i><sup>2</sup>, which is inscribed."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "DIAGRAM · THE CIRCLE THAT MADE THE ELLIPSE",
          "chips": ["AUXILIARY CIRCLE", "ECCENTRIC ANGLE", "θ IS NOT φ"],
          "captions": [
            "The dashed circle has radius a = 4, drawn on the major axis as diameter. It touches the ellipse at the two vertices and encloses it everywhere else. Multiply every ordinate of the circle by the fixed factor b/a and you land on the ellipse: nothing horizontal changes, everything vertical shrinks in the same proportion.",
            "Take Q on the circle at angle θ = 60°, drop the perpendicular to the major axis at N, and P is where it crosses the ellipse. Q = (a cos θ, a sin θ) and P = (a cos θ, b sin θ), so PN / QN = b / a exactly. That ratio is the squash factor, and PQ = (a − b) sin θ.",
            "Here is the single most examined subtlety in the whole topic. θ belongs to Q on the circle, not to P on the ellipse. The angle φ that OP actually makes with the x-axis is smaller, and the two are linked by tan φ = (b/a) tan θ. They agree only at the four axis ends. Compute θ from cos θ = x/a and sin θ = y/b, never from the arctangent of y over x."
          ],
          "frames": [
            {
              "x": [-7, 7],
              "y": [-5, 5],
              "curves": [
                { "c": "ellipse", "a": 4, "b": 3 },
                { "c": "circle", "r": 4, "dash": true, "soft": true }
              ],
              "points": [
                { "x": 4, "y": 0, "label": "(a, 0)" },
                { "x": -4, "y": 0 }
              ]
            },
            {
              "x": [-7, 7],
              "y": [-5, 5],
              "curves": [
                { "c": "ellipse", "a": 4, "b": 3 },
                { "c": "circle", "r": 4, "dash": true, "soft": true }
              ],
              "points": [
                { "x": 2, "y": 3.464, "label": "Q" },
                { "x": 2, "y": 2.598, "label": "P" },
                { "x": 2, "y": 0, "label": "N", "soft": true }
              ],
              "segments": [
                { "from": [0, 0], "to": [2, 3.464], "soft": true },
                { "from": [2, 0], "to": [2, 3.464], "dash": true, "soft": true }
              ],
              "labels": [{ "x": 0.95, "y": 0.55, "text": "θ", "soft": true }]
            },
            {
              "x": [-7, 7],
              "y": [-5, 5],
              "curves": [
                { "c": "ellipse", "a": 4, "b": 3 },
                { "c": "circle", "r": 4, "dash": true, "soft": true }
              ],
              "points": [
                { "x": 2, "y": 3.464, "label": "Q" },
                { "x": 2, "y": 2.598, "label": "P" }
              ],
              "segments": [
                { "from": [0, 0], "to": [2, 3.464], "dash": true, "soft": true },
                { "from": [0, 0], "to": [2, 2.598] }
              ],
              "labels": [
                { "x": 1.35, "y": 0.42, "text": "φ", "soft": true },
                { "x": 0.5, "y": 1.35, "text": "θ", "soft": true }
              ]
            }
          ]
        },
        {
          "t": "proc",
          "title": "Read any standard ellipse in four steps",
          "steps": [
            "<b>Find the bigger denominator.</b> It sits under the variable along the major axis, and that is where the vertices, the foci and the directrices all live. Check this before computing anything.",
            "<b>Use <i>c</i><sup>2</sup> = <i>a</i><sup>2</sup> − <i>b</i><sup>2</sup>.</b> Minus, always, for the ellipse. Here <i>a</i> is the larger semi-axis whatever letter the question used.",
            "<b>Then <i>e</i> = <i>c</i>/<i>a</i>,</b> and confirm it landed between 0 and 1. If it did not, you imported the hyperbola's plus sign.",
            "<b>Finally ℓ = 2<i>b</i><sup>2</sup>/<i>a</i></b> for the latus rectum, and <i>x</i> = ±<i>a</i>/<i>e</i> for the directrices.",
            "<b>If a variable point is involved, write it as (<i>a</i> cos θ, <i>b</i> sin θ) immediately.</b> Two unknowns tied by one equation become one free unknown, and the constraint is then satisfied automatically."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "For <i>x</i><sup>2</sup>/25 + <i>y</i><sup>2</sup>/9 = 1, find <i>a</i>, <i>b</i>, the eccentricity, the foci, the vertices, the axis lengths and the latus rectum.",
          "steps": [
            "The larger denominator, 25, sits under <i>x</i><sup>2</sup>, so the major axis is the <i>x</i>-axis: <i>a</i> = 5 and <i>b</i> = 3.",
            "<i>c</i><sup>2</sup> = <i>a</i><sup>2</sup> − <i>b</i><sup>2</sup> = 25 − 9 = 16, so <i>c</i> = 4 and <i>e</i> = <i>c</i>/<i>a</i> = 4/5, which is properly between 0 and 1.",
            "Foci (±4, 0), vertices (±5, 0), minor ends (0, ±3). Major axis 2<i>a</i> = 10, minor 2<i>b</i> = 6, latus rectum 2(9)/5."
          ],
          "ans": "e = 4/5 · foci (±4, 0) · axes 10 and 6 · latus rectum 18/5"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "In an ellipse the distance between the foci equals the length of the minor axis. Find the eccentricity.",
          "steps": [
            "Translate the sentence directly into symbols: 2<i>c</i> = 2<i>b</i>, so <i>c</i> = <i>b</i>. No coordinates are needed.",
            "Push that straight into <i>c</i><sup>2</sup> = <i>a</i><sup>2</sup> − <i>b</i><sup>2</sup>: <i>c</i><sup>2</sup> = <i>a</i><sup>2</sup> − <i>c</i><sup>2</sup>, so 2<i>c</i><sup>2</sup> = <i>a</i><sup>2</sup>.",
            "Then <i>c</i><sup>2</sup>/<i>a</i><sup>2</sup> = 1/2 and <i>e</i> = <i>c</i>/<i>a</i> = 1/√2 ≈ 0.71, comfortably inside the ellipse band."
          ],
          "ans": "e = 1/√2"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "The point <i>P</i>(2, 3√3/2) lies on <i>x</i><sup>2</sup>/16 + <i>y</i><sup>2</sup>/9 = 1. Find its eccentric angle θ, and the angle φ that <i>OP</i> makes with the <i>x</i>-axis.",
          "steps": [
            "Confirm <i>P</i> is on the curve first: 4/16 + (27/4)/9 = 1/4 + 3/4 = 1. Good.",
            "Here <i>a</i> = 4 and <i>b</i> = 3. Compare with (<i>a</i> cos θ, <i>b</i> sin θ): cos θ = 2/4 = 1/2 and sin θ = (3√3/2)/3 = √3/2. Both are positive, so θ is in the first quadrant and θ = π/3.",
            "The true central angle satisfies tan φ = <i>y</i>/<i>x</i> = 3√3/4 ≈ 1.299, so φ ≈ 52.41°. Check against the bridging line: tan φ = (<i>b</i>/<i>a</i>) tan θ = (3/4)√3 = 3√3/4. It matches."
          ],
          "ans": "θ = π/3 = 60° · φ ≈ 52.41°, and the two are never equal off the axes"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "<i>S</i> and <i>S</i>′ are the foci of an ellipse and <i>B</i> is one end of its minor axis. If triangle <i>SBS</i>′ is equilateral, find <i>e</i> and the latus rectum in terms of <i>a</i>.",
          "steps": [
            "The vertices are <i>S</i>(<i>ae</i>, 0), <i>S</i>′(−<i>ae</i>, 0) and <i>B</i>(0, <i>b</i>), so the base is <i>SS</i>′ = 2<i>ae</i>. The two slant sides are equal by symmetry, and each is the focus-to-minor-tip distance, which we already know is exactly <i>a</i>.",
            "Equilateral means all three sides match: 2<i>ae</i> = <i>a</i>, so <i>e</i> = 1/2. That is the whole question, and it is one line once you refuse to recompute <i>SB</i>.",
            "Then <i>b</i><sup>2</sup> = <i>a</i><sup>2</sup>(1 − 1/4) = 3<i>a</i><sup>2</sup>/4, so ℓ = 2<i>b</i><sup>2</sup>/<i>a</i> = 2(3<i>a</i><sup>2</sup>/4)/<i>a</i>."
          ],
          "ans": "e = 1/2 · latus rectum = 3a/2"
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Find the foci, eccentricity and latus rectum of x²/16 + y²/36 = 1. Watch the orientation.",
              "a": "The larger denominator is under y², so the major axis is the y-axis: a² = 36, b² = 16, c² = 20, c = 2√5. Foci (0, ±2√5), e = √5/3, latus rectum 2(16)/6 = 16/3."
            },
            {
              "q": "[JEE Main] Find the ellipse with centre at the origin, major axis along x, eccentricity 3/5 and major axis of length 10.",
              "a": "a = 5 and e = 3/5 give c = 3, so b² = 25 − 9 = 16. The ellipse is x²/25 + y²/16 = 1."
            },
            {
              "q": "[CBSE] An arch is a semi-ellipse, 8 m wide at the base and 2 m high at the centre. Find its height 1.5 m from one end of the base.",
              "a": "Origin at the centre of the base: 2a = 8 so a = 4, and b = 2, giving x²/16 + y²/4 = 1 with y ≥ 0. A point 1.5 m from an end is 2.5 m from the centre, so x = 2.5. Then 6.25/16 + y²/4 = 1 gives y² = 39/16 and y = √39/4 ≈ 1.56 m, which sits sensibly between 0 and 2."
            },
            {
              "q": "[JEE Main] A whispering gallery is an elliptical hall 100 m long and 50 m wide. How far from the centre must each listener stand, and how far apart are they?",
              "a": "a = 50 and b = 25, so c² = 2500 − 625 = 1875 and c = 25√3 ≈ 43.3 m from the centre. The two foci are 2c = 50√3 ≈ 86.6 m apart."
            },
            {
              "q": "[JEE Advanced] S and S′ are the foci and B an end of the minor axis. If angle SBS′ = 90°, find the eccentricity.",
              "a": "SB = S′B = a and SS′ = 2ae. A right angle at B gives SB² + S′B² = SS′², so 2a² = 4a²e², e² = 1/2 and e = 1/√2."
            }
          ]
        },
        {
          "t": "mcq",
          "q": "For <i>x</i><sup>2</sup>/9 + <i>y</i><sup>2</sup>/25 = 1, the foci lie on",
          "correct": 1,
          "opts": [
            {
              "label": "the x-axis",
              "nudge": "This assumes the foci are always on the x-axis. Here the larger denominator, 25, sits under y², so the major axis has swung vertical. It is the single most common ellipse error."
            },
            {
              "label": "the y-axis",
              "nudge": null
            },
            {
              "label": "the line y = x",
              "nudge": "The foci of a standard ellipse always sit on a coordinate axis, because the curve is symmetric about both."
            },
            {
              "label": "at the origin",
              "nudge": "Both foci sit at the centre only when c = 0, which is the circle. Here c² = 25 − 9 = 16, so they are 4 units apart from the centre."
            }
          ],
          "solution": "The larger denominator names the major axis, and the foci always lie on the major axis. Here 25 > 9 and 25 is under y², so the foci are (0, ±4)."
        },
        {
          "t": "mcq",
          "q": "The eccentricity of <i>x</i><sup>2</sup>/4 + <i>y</i><sup>2</sup>/3 = 1 is",
          "correct": 0,
          "opts": [
            {
              "label": "1/2",
              "nudge": null
            },
            {
              "label": "1/√3",
              "nudge": "This computes √(b²/a²) rather than √(1 − b²/a²), dropping the 1 minus that the whole formula turns on."
            },
            {
              "label": "√3/2",
              "nudge": "This is √(1 − 1/4), obtained by using b²/a² = 1/4 instead of 3/4. The two denominators have been swapped."
            },
            {
              "label": "1/4",
              "nudge": "This reports c²/a² without taking the square root. Eccentricity is c over a, not c squared over a squared."
            }
          ],
          "solution": "a² = 4 and b² = 3, so c² = a² − b² = 1 and c = 1. Then e = c/a = 1/2, comfortably inside the ellipse band."
        },
        {
          "t": "mcq",
          "q": "The length of the latus rectum of <i>x</i><sup>2</sup>/36 + <i>y</i><sup>2</sup>/16 = 1 is",
          "correct": 0,
          "opts": [
            {
              "label": "16/3",
              "nudge": null
            },
            {
              "label": "8/3",
              "nudge": "This uses b²/a and forgets the leading 2. The full numerator is 2b²."
            },
            {
              "label": "32/3",
              "nudge": "This divides 2b² by 3 rather than by the semi-major axis 6, mixing up a with something else."
            },
            {
              "label": "8",
              "nudge": "This reports the minor axis 2b instead of the latus rectum. They are different chords and only coincide in special cases."
            }
          ],
          "solution": "The major axis is along x, so a = 6 and b² = 16. Then ℓ = 2b²/a = 32/6 = 16/3."
        },
        {
          "t": "mcq",
          "q": "The auxiliary circle of the ellipse <i>x</i><sup>2</sup>/25 + <i>y</i><sup>2</sup>/9 = 1 is",
          "correct": 1,
          "opts": [
            {
              "label": "x² + y² = 9",
              "nudge": "This uses b instead of a. That circle is inscribed in the ellipse and touches it at the minor-axis ends, which is a different object entirely."
            },
            {
              "label": "x² + y² = 25",
              "nudge": null
            },
            {
              "label": "x² + y² = 34",
              "nudge": "This is a² + b², the director circle, the locus of points from which two perpendicular tangents can be drawn. Both are circles attached to the ellipse, which is exactly why they get confused."
            },
            {
              "label": "x² + y² = 16",
              "nudge": "This is c² = a² − b², the square of the focal distance, which is not the radius of any standard construction here."
            }
          ],
          "solution": "The auxiliary circle is drawn on the major axis as diameter, so its radius is the semi-major axis a = 5 and its equation is x² + y² = 25."
        },
        {
          "t": "mistakes",
          "items": [
            "Assuming the major axis is horizontal. It lives under the <b>larger denominator</b>. If <i>y</i><sup>2</sup> has the bigger one, the axis, the foci and the directrices all swing onto the <i>y</i>-axis.",
            "Importing the wrong sign. For an ellipse <i>c</i><sup>2</sup> = <i>a</i><sup>2</sup> − <b>minus</b> <i>b</i><sup>2</sup>. The plus belongs to the hyperbola, and mixing them pushes <i>e</i> above 1.",
            "Latus-rectum slips. It is <b>2<i>b</i><sup>2</sup>/<i>a</i></b>: full numerator 2<i>b</i><sup>2</sup>, denominator the semi-major axis. Dropping the 2 or dividing by 2<i>a</i> are both common.",
            "Reading the eccentric angle off the ellipse. θ belongs to <i>Q</i> on the <b>auxiliary circle</b>. Always get it from cos θ = <i>x</i>/<i>a</i> and sin θ = <i>y</i>/<i>b</i>, using both signs to fix the quadrant.",
            "Dividing by the wrong semi-axis. Each coordinate is divided by the semi-axis along <b>its own</b> direction: <i>x</i> by <i>a</i>, <i>y</i> by <i>b</i>."
          ]
        },
        {
          "t": "protip",
          "html": "lock a four-step reflex: bigger denominator names the major axis and so tells you where the foci are, then c² = a² − b², then e = c/a, then ℓ = 2b²/a. and memorise the one beautiful shortcut, focus to minor-axis tip equals a. it collapses half the advanced triangle problems into a single line."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "SP + S′P = 2a",
              "note": "the definition · eccentricity 0 < e < 1"
            },
            {
              "f": "x²/a² + y²/b² = 1",
              "note": "major axis under the larger denominator"
            },
            {
              "f": "c = ae · c² = a² − b² · e = √(1 − b²/a²)",
              "note": "ellipse minus, hyperbola plus"
            },
            {
              "f": "foci (±ae, 0) · directrices x = ±a/e · ℓ = 2b²/a",
              "note": "all three live on or about the major axis"
            },
            {
              "f": "SP = a − ex · S′P = a + ex",
              "note": "their sum is 2a, a free check every time"
            },
            {
              "f": "(a cos θ, b sin θ) on x² + y² = a²",
              "note": "eccentric angle θ · tan φ = (b/a) tan θ"
            }
          ],
          "aids": [
            "“bigger denominator points to the foci”",
            "“ellipse minus, hyperbola plus”",
            "“the eccentric angle lives on the circle, not on the ellipse”"
          ]
        }
      ]
    },
    {
      "n": "05",
      "title": "The Hyperbola",
      "chip": "05 HYPERBOLA",
      "kalam": "hyperbola plus, ellipse minus",
      "blocks": [
        {
          "t": "p",
          "html": "Turn the dial one notch further. Below 1 the curve closes into an ellipse, at exactly 1 it opens into a parabola, and past 1 it splits into <b>two separate branches</b> sweeping away from each other forever. That two-branched, <i>e</i> > 1 curve is the hyperbola. It is the steep cut, the one where the plane is tilted enough to slice both nappes of the cone, and the two nappes are literally why there are two branches."
        },
        {
          "t": "p",
          "html": "Where the ellipse was built on the <b>sum</b> of distances to two foci, the hyperbola is built on their <b>difference</b>. Imagine two stadiums far apart, each with a loudspeaker, blasting the same sound a fixed split-second apart. Stand anywhere and the gap between the two booms tells you the difference in your distances to the speakers, and every spot with the same time-gap lies on one branch. That is not a toy example: it is exactly how LORAN ship navigation and modern satellite positioning work. Fix the time differences from several transmitters, sit on intersecting hyperbolas, and where they cross is your location."
        },
        {
          "t": "think",
          "html": "the other unmistakable feature is the pair of asymptotes: two straight lines through the centre that the branches hug ever more closely and never touch, like rails the curve runs alongside as it races off to infinity."
        },
        {
          "t": "def",
          "term": "Hyperbola",
          "html": "A hyperbola is the locus of a point the <b>difference</b> of whose distances from two fixed foci is a constant 2<i>a</i>. Equivalently it is the focus-directrix locus with <i>e</i> > 1. Here <i>a</i> is the <b>semi-transverse</b> axis and <i>b</i> the <b>semi-conjugate</b> axis, and there is <b>no requirement that <i>a</i> > <i>b</i></b>: either may be larger. The constant difference must be less than the focal separation, 2<i>a</i> < 2<i>c</i>, or the curve degenerates into two rays."
        },
        {
          "t": "formula",
          "kicker": "THE STANDARD EQUATION",
          "tag": "mind the plus sign",
          "main": "x<sup>2</sup>/a<sup>2</sup> − y<sup>2</sup>/b<sup>2</sup> = 1",
          "legend": [
            "<i>c</i> = <i>ae</i> · <i>c</i><sup>2</sup> = <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> · <i>b</i><sup>2</sup> = <i>a</i><sup>2</sup>(<i>e</i><sup>2</sup> − 1)",
            "<i>e</i> = <i>c</i>/<i>a</i> = √(1 + <i>b</i><sup>2</sup>/<i>a</i><sup>2</sup>), which is automatically greater than 1",
            "if the positive term is under <i>y</i><sup>2</sup> the transverse axis is the <i>y</i>-axis, foci (0, ±<i>ae</i>), asymptotes <i>y</i> = ±(<i>a</i>/<i>b</i>)<i>x</i>"
          ],
          "note": "The positive term, not the larger denominator, picks the transverse axis. In an ellipse the larger denominator wins; in a hyperbola the plus sign wins whatever the denominators are. That single sentence is what most hyperbola trap questions are built to catch."
        },
        {
          "t": "defgrid",
          "title": "Features of x²/a² − y²/b² = 1",
          "tag": "transverse axis along x, because the plus is there",
          "rows": [
            {
              "k": "Vertices",
              "v": "(±<i>a</i>, 0) · nothing of the curve lies between them"
            },
            {
              "k": "Foci <i>S</i>, <i>S</i>′",
              "v": "(±<i>ae</i>, 0), always further out than the vertices since <i>e</i> > 1"
            },
            {
              "k": "Axis lengths",
              "v": "transverse 2<i>a</i> · conjugate 2<i>b</i>"
            },
            {
              "k": "Directrices",
              "v": "<i>x</i> = ±<i>a</i>/<i>e</i>, and here they fall <b>between</b> the vertices"
            },
            {
              "k": "Latus rectum",
              "v": "ℓ = 2<i>b</i><sup>2</sup>/<i>a</i>, identical in form to the ellipse's"
            },
            {
              "k": "Focal radii of <i>P</i>(<i>x</i>, <i>y</i>)",
              "v": "<i>PS</i> = <i>ex</i> − <i>a</i> · <i>PS</i>′ = <i>ex</i> + <i>a</i> · their difference is 2<i>a</i>"
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "DIAGRAM · ANATOMY OF A HYPERBOLA",
          "chips": ["a, b AND c", "ASYMPTOTES", "FOCAL DIFFERENCE", "LATUS RECTUM"],
          "captions": [
            "a = 2.5 is the semi-transverse axis, measured from the centre to a vertex A. b = 3 is the semi-conjugate axis, and notice that b is larger here, which is perfectly legal for a hyperbola and forbidden for an ellipse. Now c² = a² + b², with a plus, so the foci sit outside the vertices and e = c/a is always above 1.",
            "The two dashed lines y = ±(b/a)x pass through the centre and form an X. Each branch threads through an opposite pair of wedges and crowds ever closer to them without ever touching. The slope is b over a, never a over b, and the pair exists only for a hyperbola.",
            "For any P on the curve, PS′ − PS = 2a = 5. On the right branch you are always nearer the right focus by exactly 2a; on the left branch, nearer the left focus by the same amount. The constant difference is what carves out the two arms, and it is the free check the ellipse's constant sum is for that curve.",
            "The latus rectum is again the focal chord perpendicular to the transverse axis, and again its length is 2b²/a, here 7.2. The formula is identical to the ellipse's, which is worth one less thing to remember."
          ],
          "frames": [
            {
              "x": [-7, 7],
              "y": [-5, 5],
              "curves": [{ "c": "hyperbola", "a": 2.5, "b": 3 }],
              "points": [
                { "x": 2.5, "y": 0, "label": "A" },
                { "x": -2.5, "y": 0 },
                { "x": 3.905, "y": 0, "label": "S" },
                { "x": -3.905, "y": 0, "label": "S′", "soft": true }
              ],
              "segments": [
                { "from": [0, 0], "to": [2.5, 0], "dash": true, "soft": true },
                { "from": [0, 0], "to": [0, 3], "dash": true, "soft": true }
              ],
              "labels": [
                { "x": 1.25, "y": 0.5, "text": "a", "soft": true },
                { "x": -0.5, "y": 1.6, "text": "b", "soft": true },
                { "x": 0, "y": -1.4, "text": "c² = a² + b²", "soft": true }
              ]
            },
            {
              "x": [-7, 7],
              "y": [-5, 5],
              "curves": [
                { "c": "hyperbola", "a": 2.5, "b": 3 },
                { "c": "line", "m": 1.2, "k": 0, "dash": true, "soft": true },
                { "c": "line", "m": -1.2, "k": 0, "dash": true, "soft": true }
              ],
              "labels": [{ "x": 0, "y": -4.4, "text": "y = ±(b/a)x", "soft": true }]
            },
            {
              "x": [-7, 7],
              "y": [-5, 5],
              "curves": [{ "c": "hyperbola", "a": 2.5, "b": 3 }],
              "points": [
                { "x": 4, "y": 3.747, "label": "P" },
                { "x": 3.905, "y": 0, "label": "S" },
                { "x": -3.905, "y": 0, "label": "S′" }
              ],
              "segments": [
                { "from": [3.905, 0], "to": [4, 3.747], "label": "PS" },
                { "from": [-3.905, 0], "to": [4, 3.747], "label": "PS′" }
              ]
            },
            {
              "x": [-7, 7],
              "y": [-5, 5],
              "curves": [
                { "c": "hyperbola", "a": 2.5, "b": 3 },
                { "c": "vline", "x": 3.905, "dash": true, "soft": true },
                { "c": "vline", "x": -3.905, "dash": true, "soft": true }
              ],
              "points": [{ "x": 3.905, "y": 0, "label": "S", "soft": true }],
              "segments": [{ "from": [3.905, -3.6], "to": [3.905, 3.6], "label": "2b²/a" }]
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE ELLIPSE ARGUMENT WITH ONE SIGN CHANGED, TAP A LINE",
          "steps": [
            {
              "eq": "√((x + c)² + y²) − √((x − c)² + y²) = 2a",
              "why": "Centre at the origin, foci at S(c, 0) and S′(−c, 0), and the defining difference written out for a point P on the branch nearer S′. This is the ellipse set-up with a minus where the plus was, so the algebra runs in perfect parallel."
            },
            {
              "eq": "√((x + c)² + y²) = 2a + √((x − c)² + y²)",
              "why": "Move one radical across before squaring, for the same reason as in the ellipse: squaring a difference of two radicals would leave a radical behind."
            },
            {
              "eq": "4cx − 4a² = 4a√((x − c)² + y²)",
              "why": "Square and expand. The common x² + c² + y² cancels, and this time the surviving cross terms are +2cx and −2cx the other way round."
            },
            {
              "eq": "cx/a − a = √((x − c)² + y²)",
              "why": "Divide through by 4a to isolate the last radical cleanly, ready for the second squaring."
            },
            {
              "eq": "x²(c²/a² − 1) − y² = c² − a²",
              "why": "Square once more, cancel the −2cx that appears on both sides, and group the x and y terms."
            },
            {
              "eq": "x²/a² − y²/b² = 1, with b² = c² − a²",
              "why": "Here c² − a² is positive, because c > a for a hyperbola, so naming it b² is legitimate. That naming is the master relationship again, but flipped: c² = a² + b². Dividing by a² and using e = c/a gives b²/a² = e² − 1, which forces e > 1."
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "THE ASYMPTOTES",
          "tag": "the rails at infinity",
          "main": "y = ±(b/a)x",
          "legend": [
            "solve for <i>y</i>: <i>y</i><sup>2</sup> = (<i>b</i><sup>2</sup>/<i>a</i><sup>2</sup>)<i>x</i><sup>2</sup>(1 − <i>a</i><sup>2</sup>/<i>x</i><sup>2</sup>), and as |<i>x</i>| → ∞ the bracket tends to 1",
            "as a single second-degree equation the pair is <i>x</i><sup>2</sup>/<i>a</i><sup>2</sup> − <i>y</i><sup>2</sup>/<i>b</i><sup>2</sup> = 0, the hyperbola with its constant changed from 1 to 0",
            "<i>a</i> = <i>b</i> gives <i>y</i> = ±<i>x</i>, perpendicular asymptotes: the <b>rectangular</b> hyperbola, for which <i>e</i> = √2"
          ],
          "note": "The slope is b over a, not a over b. And a rectangular hyperbola referred to its own asymptotes as axes has the tidy form xy = c², parametrised by (ct, c/t)."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "DIAGRAM · CHANGE ONE CONSTANT, CHANGE THE OBJECT",
          "mathChips": true,
          "chips": ["S = 1", "S = 0", "a = b"],
          "captions": [
            "The hyperbola itself, x²/a² − y²/b² = 1 with a = 2.5 and b = 3. Two branches, opening left and right because the positive term is under x².",
            "Now set the constant to 0 instead of 1. The equation x²/a² − y²/b² = 0 factorises as (x/a − y/b)(x/a + y/b) = 0, which is precisely the pair of asymptotes drawn as one second-degree object. The hyperbola is dashed behind them. Change the constant once more to −1 and you get the conjugate hyperbola, which opens up and down instead.",
            "When a = b the asymptotes are y = ±x and cross at right angles. That is the rectangular, or equilateral, hyperbola, and its eccentricity is √2 for every size. Equal axes, perpendicular asymptotes and e = √2 are three names for one condition, so recognising any of them should trigger the other two instantly."
          ],
          "frames": [
            {
              "x": [-7, 7],
              "y": [-5, 5],
              "curves": [{ "c": "hyperbola", "a": 2.5, "b": 3 }],
              "points": [
                { "x": 2.5, "y": 0 },
                { "x": -2.5, "y": 0 }
              ]
            },
            {
              "x": [-7, 7],
              "y": [-5, 5],
              "curves": [
                { "c": "hyperbola", "a": 2.5, "b": 3, "dash": true, "soft": true },
                { "c": "line", "m": 1.2, "k": 0 },
                { "c": "line", "m": -1.2, "k": 0 }
              ],
              "points": [{ "x": 0, "y": 0, "label": "O" }]
            },
            {
              "x": [-7, 7],
              "y": [-5, 5],
              "curves": [
                { "c": "hyperbola", "a": 2.6, "b": 2.6 },
                { "c": "line", "m": 1, "k": 0, "dash": true, "soft": true },
                { "c": "line", "m": -1, "k": 0, "dash": true, "soft": true }
              ],
              "points": [
                { "x": 3.677, "y": 0, "label": "S" },
                { "x": -3.677, "y": 0, "soft": true }
              ]
            }
          ]
        },
        {
          "t": "def",
          "term": "Conjugate hyperbola",
          "html": "Changing the constant from 1 to 0 gives the asymptotes. Changing it to −1 gives a third curve, <i>x</i><sup>2</sup>/<i>a</i><sup>2</sup> − <i>y</i><sup>2</sup>/<i>b</i><sup>2</sup> = −1, the <b>conjugate hyperbola</b>. It has the same centre and the same asymptotes but opens <b>up and down</b> instead of left and right, so its transverse axis is the other one: vertices (0, ±<i>b</i>), foci (0, ±<i>be</i>′) and eccentricity <i>e</i>′ = √(1 + <i>a</i><sup>2</sup>/<i>b</i><sup>2</sup>). A hyperbola, its asymptotes and its conjugate differ only in a constant term."
        },
        {
          "t": "formula",
          "kicker": "THE PARAMETRIC POINT",
          "tag": "the minus sign chooses the functions",
          "main": "P ≡ (a sec θ, b tan θ)",
          "legend": [
            "the ellipse needs two squares that <b>add</b> to 1, and cos<sup>2</sup>θ + sin<sup>2</sup>θ = 1 supplies them",
            "the hyperbola needs two squares that <b>subtract</b> to 1, and sec<sup>2</sup>θ − tan<sup>2</sup>θ = 1 supplies those",
            "θ = π/2 and θ = 3π/2 are excluded, since sec θ and tan θ are undefined there"
          ],
          "note": "The sign of cos θ decides the branch: positive puts the point on the right branch, negative on the left. One formula covers both branches, which is exactly why it beats solving for y and tracking signs by hand. Feeding (a cos θ, b sin θ) to a hyperbola always produces a point that is not on the curve."
        },
        {
          "t": "proc",
          "title": "Read any standard hyperbola, contrasting with the ellipse",
          "steps": [
            "<b>Find the positive term.</b> That names the transverse axis and tells you where the vertices and foci are. Do <b>not</b> look for the larger denominator, that is the ellipse rule.",
            "<b>Use <i>c</i><sup>2</sup> = <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>.</b> Plus. Importing the ellipse's minus is the single most destructive error in this topic, because it silently produces an impossible <i>e</i> < 1.",
            "<b>Then <i>e</i> = <i>c</i>/<i>a</i>, and confirm <i>e</i> > 1.</b> A built-in sanity check that costs nothing.",
            "<b>Asymptotes are <i>y</i> = ±(<i>b</i>/<i>a</i>)<i>x</i></b> for the <i>x</i>-transverse case, and <i>y</i> = ±(<i>a</i>/<i>b</i>)<i>x</i> when the positive term is under <i>y</i><sup>2</sup>.",
            "<b>Latus rectum 2<i>b</i><sup>2</sup>/<i>a</i>,</b> the same as the ellipse's, and directrices <i>x</i> = ±<i>a</i>/<i>e</i>, which now sit inside the vertices."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "For <i>x</i><sup>2</sup>/16 − <i>y</i><sup>2</sup>/9 = 1, find <i>a</i>, <i>b</i>, the eccentricity, the foci, the axis lengths, the latus rectum and the asymptotes.",
          "steps": [
            "The positive term is under <i>x</i><sup>2</sup>, so the transverse axis is the <i>x</i>-axis: <i>a</i> = 4 and <i>b</i> = 3.",
            "<i>c</i><sup>2</sup> = <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> = 16 + 9 = 25, so <i>c</i> = 5 and <i>e</i> = 5/4. It is greater than 1, so the sanity check passes.",
            "Foci (±5, 0), vertices (±4, 0). Transverse axis 8, conjugate axis 6, latus rectum 2(9)/4, asymptotes <i>y</i> = ±(3/4)<i>x</i>."
          ],
          "ans": "e = 5/4 · foci (±5, 0) · axes 8 and 6 · latus rectum 9/2 · asymptotes y = ±3x/4"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "The transverse and conjugate axes of a hyperbola are equal in length. Find its eccentricity.",
          "steps": [
            "Equal axes means 2<i>a</i> = 2<i>b</i>, so <i>a</i> = <i>b</i>.",
            "Then <i>e</i><sup>2</sup> = 1 + <i>b</i><sup>2</sup>/<i>a</i><sup>2</sup> = 1 + 1 = 2.",
            "This is the rectangular hyperbola, whose asymptotes <i>y</i> = ±<i>x</i> are perpendicular. Equal axes, perpendicular asymptotes and <i>e</i> = √2 are one condition wearing three names."
          ],
          "ans": "e = √2, and it is worth memorising outright"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "A cooling tower is 150 m tall, its base diameter is 100 m, and its throat, the narrowest ring, has diameter 60 m and sits 100 m above the base. Find the diameter at the top.",
          "steps": [
            "Put the origin at the <b>centre of the throat</b>, with the <i>y</i>-axis up the tower's own axis. The throat is where the two vertices sit, so the transverse axis is horizontal and the cross-section is <i>x</i><sup>2</sup>/<i>a</i><sup>2</sup> − <i>y</i><sup>2</sup>/<i>b</i><sup>2</sup> = 1. Throat diameter 60 gives <i>a</i> = 30 and <i>a</i><sup>2</sup> = 900.",
            "The base is 100 m <b>below</b> the throat, so it is the point (50, −100), remembering that every stated diameter is twice a coordinate. Then 2500/900 − 10000/<i>b</i><sup>2</sup> = 1, so 10000/<i>b</i><sup>2</sup> = 1600/900 and <i>b</i><sup>2</sup> = 5625.",
            "The top is 150 − 100 = 50 m above the throat, at <i>y</i> = 50: <i>x</i><sup>2</sup>/900 = 1 + 2500/5625 = 13/9, so <i>x</i><sup>2</sup> = 1300 and <i>x</i> = 10√13 ≈ 36.06. Sanity check: 60 < 72.11 < 100, so the top is wider than the throat and narrower than the base, which is the silhouette of a real tower."
          ],
          "ans": "Diameter at the top = 20√13 ≈ 72.11 m"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "The angle between the asymptotes of a hyperbola, the one containing the transverse axis, is 60°. Find <i>e</i>. Then find it if that angle is instead the obtuse 120°.",
          "steps": [
            "Each asymptote <i>y</i> = ±(<i>b</i>/<i>a</i>)<i>x</i> makes an angle α with the <i>x</i>-axis where tan α = <i>b</i>/<i>a</i>, and the angle between them measured across the transverse axis is 2α.",
            "Case 1: 2α = 60° gives α = 30°, so <i>b</i>/<i>a</i> = tan 30° = 1/√3 and <i>e</i><sup>2</sup> = 1 + 1/3 = 4/3.",
            "Case 2: 2α = 120° gives α = 60°, so <i>b</i>/<i>a</i> = √3 and <i>e</i><sup>2</sup> = 1 + 3 = 4. The subtlety is that two lines make <b>two</b> supplementary angles, and which one contains the transverse axis decides the answer. A careful student gives both."
          ],
          "ans": "e = 2/√3 for the 60° case · e = 2 for the 120° case"
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Find the foci, vertices, eccentricity, latus rectum and asymptotes of x²/9 − y²/27 = 1.",
              "a": "a² = 9, b² = 27, c² = 36 so c = 6. Foci (±6, 0), vertices (±3, 0), e = 2, latus rectum 2(27)/3 = 18, asymptotes y = ±√3 x."
            },
            {
              "q": "[JEE Main] Find the hyperbola with foci (±5, 0) and transverse axis of length 6.",
              "a": "c = 5 and a = 3, so b² = c² − a² = 25 − 9 = 16. The hyperbola is x²/9 − y²/16 = 1."
            },
            {
              "q": "[JEE Main] If the latus rectum of a hyperbola equals half its transverse axis, find e.",
              "a": "2b²/a = a, so 2b² = a² and b²/a² = 1/2. Then e = √(1 + 1/2) = √(3/2) = √6/2, which is above 1 as it must be."
            },
            {
              "q": "[JEE Main] A point on x²/4 − y²/5 = 1 has x = 6. Find its two focal distances and verify their difference.",
              "a": "a = 2, b² = 5, c² = 9 so e = 3/2. PS = ex − a = 9 − 2 = 7 and PS′ = ex + a = 11. Difference 4 = 2a, the check passes."
            },
            {
              "q": "[JEE Advanced] Find the eccentricity of a hyperbola whose conjugate axis equals the distance between its foci.",
              "a": "The condition says 2b = 2c, so b = c. But c² = a² + b² would then give b² = a² + b², forcing a = 0. No such hyperbola exists: the conjugate axis is always shorter than the focal separation. Recognising the impossibility is the answer."
            }
          ]
        },
        {
          "t": "mcq",
          "q": "For the hyperbola <i>y</i><sup>2</sup>/9 − <i>x</i><sup>2</sup>/16 = 1, the transverse axis lies along",
          "correct": 1,
          "opts": [
            {
              "label": "the x-axis",
              "nudge": "This applies the ellipse rule, larger denominator wins, and picks the 16 under x². For a hyperbola the positive term decides, whatever the denominators are. This question exists purely to catch that habit."
            },
            {
              "label": "the y-axis",
              "nudge": null
            },
            {
              "label": "the line y = x",
              "nudge": "The transverse axis of a standard hyperbola is always a coordinate axis, because the curve is symmetric about both."
            },
            {
              "label": "neither axis",
              "nudge": "Only a rotated hyperbola, one with an xy term, has axes off the coordinate axes. This equation has no xy term."
            }
          ],
          "solution": "The positive term is under y², so the transverse axis is the y-axis and the foci are on it, even though 16 > 9."
        },
        {
          "t": "mcq",
          "q": "The eccentricity of <i>x</i><sup>2</sup>/16 − <i>y</i><sup>2</sup>/9 = 1 is",
          "correct": 2,
          "opts": [
            {
              "label": "3/4",
              "nudge": "This reports b/a, the asymptote slope, rather than c/a. They are different ratios and only the second is the eccentricity."
            },
            {
              "label": "4/5",
              "nudge": "This uses the ellipse relation c² = a² − b², the deadly sign import, and then mis-simplifies. Any hyperbola answer below 1 is wrong before you check the arithmetic."
            },
            {
              "label": "5/4",
              "nudge": null
            },
            {
              "label": "√7/4",
              "nudge": "This is exactly what the wrong minus sign produces: c² = 16 − 9 = 7. The hyperbola takes a plus."
            }
          ],
          "solution": "c² = a² + b² = 16 + 9 = 25, so c = 5 and e = c/a = 5/4, which is greater than 1 as every hyperbola's must be."
        },
        {
          "t": "mcq",
          "q": "The asymptotes of <i>x</i><sup>2</sup>/25 − <i>y</i><sup>2</sup>/16 = 1 are",
          "correct": 1,
          "opts": [
            {
              "label": "y = ±(5/4)x",
              "nudge": "The ratio is inverted: this is a/b. The asymptote slope is b over a."
            },
            {
              "label": "y = ±(4/5)x",
              "nudge": null
            },
            {
              "label": "y = ±x",
              "nudge": "Perpendicular asymptotes need a = b, the rectangular case. Here 25 ≠ 16, so the curve is not rectangular."
            },
            {
              "label": "y = ±(16/25)x",
              "nudge": "This uses b²/a², the ratio of the denominators, without taking square roots. The slope is b/a."
            }
          ],
          "solution": "a = 5 and b = 4, so the asymptotes are y = ±(b/a)x = ±(4/5)x."
        },
        {
          "t": "mcq",
          "q": "A point on the hyperbola <i>x</i><sup>2</sup>/<i>a</i><sup>2</sup> − <i>y</i><sup>2</sup>/<i>b</i><sup>2</sup> = 1 may be written as",
          "correct": 1,
          "opts": [
            {
              "label": "(a cos θ, b sin θ)",
              "nudge": "This is the ellipse form, imported by habit. It makes the two squared terms add to 1, which is exactly what the hyperbola's minus sign forbids, so the point never lands on the curve."
            },
            {
              "label": "(a sec θ, b tan θ)",
              "nudge": null
            },
            {
              "label": "(a tan θ, b sec θ)",
              "nudge": "Swapping the roles gives tan²θ − sec²θ = −1, so this point satisfies x²/a² − y²/b² = −1, which is the conjugate hyperbola, not this one."
            },
            {
              "label": "(at², 2at)",
              "nudge": "That is the parabola's parametric point, and it belongs to a curve with only one squared term."
            }
          ],
          "solution": "The hyperbola needs two quantities whose squares subtract to 1, and sec²θ − tan²θ = 1 supplies them. Plus takes cos and sin, minus takes sec and tan."
        },
        {
          "t": "mistakes",
          "items": [
            "Importing the ellipse's minus. For a hyperbola <i>c</i><sup>2</sup> = <i>a</i><sup>2</sup> + <b>plus</b> <i>b</i><sup>2</sup>. Using the minus silently produces an <i>e</i> < 1, which is impossible here.",
            "Letting the larger denominator pick the axis. That is the ellipse rule. For a hyperbola the <b>positive term</b> names the transverse axis, whatever the sizes.",
            "Inverting the asymptote slope. It is <b><i>b</i>/<i>a</i></b> for <i>x</i><sup>2</sup>/<i>a</i><sup>2</sup> − <i>y</i><sup>2</sup>/<i>b</i><sup>2</sup> = 1, never <i>a</i>/<i>b</i>.",
            "Forgetting both supplementary angles between the asymptotes. Check whether the angle asked about contains the transverse axis, and give <b>both cases</b> when the question is ambiguous.",
            "Assuming <i>a</i> > <i>b</i>. That is an ellipse habit. A hyperbola is perfectly happy with <i>b</i> larger, and forcing the bigger number to be <i>a</i> wrecks everything downstream."
          ]
        },
        {
          "t": "protip",
          "html": "build a hyperbola reflex that contrasts with the ellipse at every step. positive term names the transverse axis and so tells you where the foci are, then c² = a² + b² with a plus, then e = c/a and confirm it exceeds 1, then asymptotes y = ±(b/a)x, then latus rectum 2b²/a which is the same as the ellipse's. and lock e = √2 means rectangular as instant recall."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "|SP − S′P| = 2a",
              "note": "the definition · eccentricity e > 1 · two branches"
            },
            {
              "f": "x²/a² − y²/b² = 1",
              "note": "the positive term sets the transverse axis, a need not exceed b"
            },
            {
              "f": "c = ae · c² = a² + b² · e = √(1 + b²/a²)",
              "note": "plus, and it is what forces e above 1"
            },
            {
              "f": "asymptotes y = ±(b/a)x",
              "note": "perpendicular ⟺ a = b ⟺ rectangular ⟺ e = √2"
            },
            {
              "f": "S = 1 curve · S = 0 asymptotes · S = −1 conjugate",
              "note": "three objects, one constant apart"
            },
            {
              "f": "(a sec θ, b tan θ) · sign of cos θ picks the branch",
              "note": "exclude θ = π/2 and 3π/2 · ℓ = 2b²/a"
            }
          ],
          "aids": [
            "“hyperbola plus, ellipse minus”",
            "“positive term points to the foci”",
            "“asymptote slope is bee-over-ay”",
            "“plus takes cos-sin, minus takes sec-tan”"
          ]
        }
      ]
    },
    {
      "n": "06",
      "title": "Tangents, Normals and the T-rule",
      "chip": "06 TANGENTS",
      "kalam": "tangent means equal roots",
      "blocks": [
        {
          "t": "p",
          "html": "A tangent is a line that touches a curve without crossing it, but that phrasing is a picture, not a method. Here is the sharper idea. Imagine a straight railway track running past a circular lake and ask how much of the track is wet. Far away, none. Pushed closer, the track cuts the shore at two points, enters the water and leaves it. Closer still, those two crossing points slide towards each other, and <b>at exactly one position they merge into a single point</b>. That is a tangent."
        },
        {
          "t": "p",
          "html": "The merging is not a metaphor. Substitute a line into a conic and you always get a <b>quadratic</b>, whose two roots are the two intersection points. The line is a tangent precisely when that quadratic has <b>equal roots</b>, which is to say when its discriminant is zero. So this whole topic reduces to one algebraic move you already own: set the discriminant to zero, once for each conic, and then remember the result."
        },
        {
          "t": "think",
          "html": "there is a second, purely mechanical result that saves enormous time, and it looks like a joke until you use it once. write the conic as S = 0 and replace x² by xx₁, y² by yy₁, x by half of x plus x₁, y by half of y plus y₁. call the result T. then T = 0 is the tangent."
        },
        {
          "t": "def",
          "term": "Tangent, and the condition of tangency",
          "html": "A <b>tangent</b> to a conic is a line meeting it in two <b>coincident</b> points. Equivalently, substituting the line into the conic gives a quadratic with zero discriminant. The <b>condition of tangency</b> is the resulting relation between <i>c</i>, <i>m</i> and the conic's own constants that makes <i>y</i> = <i>mx</i> + <i>c</i> touch. Note the blind spot: the slope form can never represent a <b>vertical</b> line, so when a question asks for <b>all</b> tangents from a point, test the vertical separately."
        },
        {
          "t": "formula",
          "kicker": "THE UNIVERSAL T RULE",
          "tag": "one substitution, four conics",
          "main": "x<sup>2</sup> → xx<sub>1</sub> · y<sup>2</sup> → yy<sub>1</sub> · x → (x + x<sub>1</sub>)/2 · y → (y + y<sub>1</sub>)/2",
          "legend": [
            "the constant term is left alone, and <i>xy</i> becomes (<i>xy</i><sub>1</sub> + <i>x</i><sub>1</sub><i>y</i>)/2",
            "with (<i>x</i><sub>1</sub>, <i>y</i><sub>1</sub>) <b>on</b> the conic, <i>T</i> = 0 is the <b>tangent</b> there",
            "with (<i>x</i><sub>1</sub>, <i>y</i><sub>1</sub>) <b>outside</b>, <i>T</i> = 0 is the <b>chord of contact</b> of the two tangents from it"
          ],
          "note": "It works because T = 0 is exactly the line through (x₁, y₁) with the slope implicit differentiation would give, and it saves learning four separate tangent formulas. The pair of tangents themselves is SS₁ = T²."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "DIAGRAM · SLIDE THE LINE, WATCH THE ROOTS MERGE",
          "chips": ["MISSES", "TOUCHES", "CUTS TWICE", "DIRECTOR CIRCLE"],
          "captions": [
            "The line sits clear of the circle. Substituting it gives a quadratic with a negative discriminant, so there are no real intersection points at all. Geometrically the perpendicular distance from the centre is greater than the radius.",
            "Slide the line down and at one exact height the two would-be intersection points merge into the single point T. The quadratic now has equal roots, its discriminant is zero, and the distance from the centre equals the radius exactly. That is the tangent, and it is why the condition of tangency for a circle is c² = r²(1 + m²).",
            "Slide further and the line cuts the circle at two distinct points: positive discriminant, distance less than the radius. Note that the tangent case is not the same as a line meeting a curve once. A horizontal line meets a parabola exactly once and still crosses it, which is why the parabola's slope form excludes m = 0.",
            "From a point P outside, two tangents can be drawn, touching at two points whose join is the chord of contact, drawn dashed. When the two tangents happen to be perpendicular, P lies on the concentric director circle, of radius r√2 for a circle and √(a² + b²) for an ellipse."
          ],
          "frames": [
            {
              "x": [-5, 5],
              "y": [-3.6, 3.6],
              "curves": [
                { "c": "circle", "r": 2.5 },
                { "c": "line", "m": 0, "k": 3.2 }
              ],
              "segments": [{ "from": [0, 0], "to": [0, 3.2], "dash": true, "soft": true, "label": "d > r" }],
              "points": [{ "x": 0, "y": 0, "label": "C", "soft": true }]
            },
            {
              "x": [-5, 5],
              "y": [-3.6, 3.6],
              "curves": [
                { "c": "circle", "r": 2.5 },
                { "c": "line", "m": 0, "k": 2.5 }
              ],
              "segments": [{ "from": [0, 0], "to": [0, 2.5], "dash": true, "soft": true, "label": "d = r" }],
              "points": [
                { "x": 0, "y": 2.5, "label": "T" },
                { "x": 0, "y": 0, "label": "C", "soft": true }
              ]
            },
            {
              "x": [-5, 5],
              "y": [-3.6, 3.6],
              "curves": [
                { "c": "circle", "r": 2.5 },
                { "c": "line", "m": 0, "k": 1.5 }
              ],
              "segments": [{ "from": [0, 0], "to": [0, 1.5], "dash": true, "soft": true, "label": "d < r" }],
              "points": [
                { "x": -2, "y": 1.5 },
                { "x": 2, "y": 1.5 },
                { "x": 0, "y": 0, "label": "C", "soft": true }
              ]
            },
            {
              "x": [-5, 5],
              "y": [-3.6, 3.6],
              "curves": [
                { "c": "circle", "r": 2.5 },
                { "c": "circle", "r": 3.536, "dash": true, "soft": true },
                { "c": "line", "m": 1, "k": -3.536 },
                { "c": "line", "m": -1, "k": 3.536 }
              ],
              "points": [
                { "x": 3.536, "y": 0, "label": "P" },
                { "x": 1.768, "y": 1.768 },
                { "x": 1.768, "y": -1.768 }
              ],
              "segments": [{ "from": [1.768, 1.768], "to": [1.768, -1.768], "dash": true }]
            }
          ]
        },
        {
          "t": "defgrid",
          "title": "The tangent at a point on the conic",
          "tag": "every row is the T rule, already applied",
          "rows": [
            {
              "k": "<i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> = <i>r</i><sup>2</sup>",
              "v": "<i>xx</i><sub>1</sub> + <i>yy</i><sub>1</sub> = <i>r</i><sup>2</sup> · parametrically <i>x</i> cos θ + <i>y</i> sin θ = <i>r</i>"
            },
            {
              "k": "General circle",
              "v": "<i>xx</i><sub>1</sub> + <i>yy</i><sub>1</sub> + <i>g</i>(<i>x</i> + <i>x</i><sub>1</sub>) + <i>f</i>(<i>y</i> + <i>y</i><sub>1</sub>) + <i>c</i> = 0"
            },
            {
              "k": "<i>y</i><sup>2</sup> = 4<i>ax</i>",
              "v": "<i>yy</i><sub>1</sub> = 2<i>a</i>(<i>x</i> + <i>x</i><sub>1</sub>) · at (<i>at</i><sup>2</sup>, 2<i>at</i>) it is <i>ty</i> = <i>x</i> + <i>at</i><sup>2</sup>"
            },
            {
              "k": "<i>x</i><sup>2</sup>/<i>a</i><sup>2</sup> + <i>y</i><sup>2</sup>/<i>b</i><sup>2</sup> = 1",
              "v": "<i>xx</i><sub>1</sub>/<i>a</i><sup>2</sup> + <i>yy</i><sub>1</sub>/<i>b</i><sup>2</sup> = 1 · parametrically (<i>x</i> cos θ)/<i>a</i> + (<i>y</i> sin θ)/<i>b</i> = 1"
            },
            {
              "k": "<i>x</i><sup>2</sup>/<i>a</i><sup>2</sup> − <i>y</i><sup>2</sup>/<i>b</i><sup>2</sup> = 1",
              "v": "<i>xx</i><sub>1</sub>/<i>a</i><sup>2</sup> − <i>yy</i><sub>1</sub>/<i>b</i><sup>2</sup> = 1 · parametrically (<i>x</i> sec θ)/<i>a</i> − (<i>y</i> tan θ)/<i>b</i> = 1"
            },
            {
              "k": "<i>xy</i> = <i>c</i><sup>2</sup>",
              "v": "at (<i>ct</i>, <i>c</i>/<i>t</i>) it is <i>x</i> + <i>t</i><sup>2</sup><i>y</i> = 2<i>ct</i>"
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "CONDITIONS OF TANGENCY FOR y = mx + c",
          "tag": "and where the line touches",
          "main": "circle c<sup>2</sup> = r<sup>2</sup>(1 + m<sup>2</sup>) · parabola c = a/m",
          "legend": [
            "ellipse <i>c</i><sup>2</sup> = <i>a</i><sup>2</sup><i>m</i><sup>2</sup> + <i>b</i><sup>2</sup>, contact (−<i>a</i><sup>2</sup><i>m</i>/<i>c</i>, <i>b</i><sup>2</sup>/<i>c</i>)",
            "hyperbola <i>c</i><sup>2</sup> = <i>a</i><sup>2</sup><i>m</i><sup>2</sup> − <i>b</i><sup>2</sup>, contact (−<i>a</i><sup>2</sup><i>m</i>/<i>c</i>, −<i>b</i><sup>2</sup>/<i>c</i>), and it needs |<i>m</i>| > <i>b</i>/<i>a</i>",
            "parabola contact (<i>a</i>/<i>m</i><sup>2</sup>, 2<i>a</i>/<i>m</i>), and <i>m</i> ≠ 0 throughout"
          ],
          "note": "Two warnings. The tangency signs are the OPPOSITE pairing to the ones you already know: ellipse plus, hyperbola minus here, against c² = a² − b² and c² = a² + b² there. And a hyperbola tangent flatter than an asymptote does not exist, so check a²m² − b² > 0 before announcing a value of c."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE PARABOLA'S CONDITION AND SLOPE FORM, TAP A LINE",
          "steps": [
            {
              "eq": "my² − 4ay + 4ac = 0",
              "why": "Take y = mx + c with m ≠ 0, so x = (y − c)/m, and substitute into y² = 4ax. Eliminating x leaves a quadratic in y whose two roots are the ordinates of the two intersection points."
            },
            {
              "eq": "(−4a)² − 4(m)(4ac) = 0",
              "why": "Tangency means the two intersection points coincide, so the quadratic must have equal roots and its discriminant must vanish. Equal roots is the algebraic translation of the line touching."
            },
            {
              "eq": "16a² − 16amc = 0 ⇒ a = mc",
              "why": "Simplify. The condition of tangency for a parabola is therefore c = a/m, and it is linear in c, which is why a parabola has ONE tangent of a given slope while the circle, ellipse and hyperbola each have two."
            },
            {
              "eq": "y = mx + a/m,  m ≠ 0",
              "why": "The tangent of slope m, written out. There is no tangent of slope zero, because a horizontal line meets y² = 4ax exactly once but crosses it there rather than touching."
            },
            {
              "eq": "contact = (a/m², 2a/m)",
              "why": "The point of contact is the repeated root. From my² − 4ay + 4ac = 0 the repeated root is y = 4a/(2m) = 2a/m, and then x = y²/4a = a/m²."
            },
            {
              "eq": "same three lines give c² = a²m² ± b²",
              "why": "Run the identical computation on the ellipse and you get c² = a²m² + b²; on the hyperbola, c² = a²m² − b². The only thing that changes is the sign the two curves already differ by."
            }
          ]
        },
        {
          "t": "defgrid",
          "title": "Where the point sits decides what T = 0 means",
          "tag": "S₁ is the conic's left side evaluated at the point",
          "rows": [
            {
              "k": "On the conic",
              "v": "<i>S</i><sub>1</sub> = 0 · <i>T</i> = 0 is the <b>tangent</b> · exactly one tangent"
            },
            {
              "k": "Outside",
              "v": "<i>T</i> = 0 is the <b>chord of contact</b> · two tangents, and they are <i>SS</i><sub>1</sub> = <i>T</i><sup>2</sup>"
            },
            {
              "k": "Inside",
              "v": "no tangent at all · instead <i>T</i> = <i>S</i><sub>1</sub> is the <b>chord bisected</b> at that point"
            },
            {
              "k": "Any point",
              "v": "<i>T</i> = 0 is called the <b>polar</b> of the point, and the point is the <b>pole</b> of that line"
            },
            {
              "k": "Counting",
              "v": "circle, parabola, ellipse: <i>S</i><sub>1</sub> > 0 gives two · <b>hyperbola is reversed</b>, <i>S</i><sub>1</sub> < 0 gives two"
            },
            {
              "k": "Director circles",
              "v": "circle 2<i>r</i><sup>2</sup> · ellipse <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> · hyperbola <i>a</i><sup>2</sup> − <i>b</i><sup>2</sup>, real only if <i>a</i> > <i>b</i> · parabola: the directrix itself"
            }
          ]
        },
        {
          "t": "p",
          "html": "If the tangent is the direction you are <b>travelling</b>, the normal is the direction you are <b>leaning</b>. On a local train rounding a curve, the tangent is where the train is pointed and the normal is the line along which you get thrown against the door. They are perpendicular, they meet at the same point of the curve, and once you have one you have the other for free. That is the whole practical content: every normal formula is a tangent formula with its slope inverted and negated, so you are not learning a second body of theory. For a circle you have known it since Class 9 without the name, because the tangent is perpendicular to the radius, and so <b>the normal to a circle is the radius produced</b>, always through the centre."
        },
        {
          "t": "formula",
          "kicker": "THE NORMALS",
          "tag": "tangent two terms, normal three",
          "main": "parabola at (at<sup>2</sup>, 2at): y + tx = 2at + at<sup>3</sup>",
          "legend": [
            "parabola slope form <i>y</i> = <i>mx</i> − 2<i>am</i> − <i>am</i><sup>3</sup>, foot (<i>am</i><sup>2</sup>, −2<i>am</i>), slope at the parametric point is −<i>t</i>",
            "ellipse: <i>a</i><sup>2</sup><i>x</i>/<i>x</i><sub>1</sub> − <i>b</i><sup>2</sup><i>y</i>/<i>y</i><sub>1</sub> = <i>a</i><sup>2</sup> − <i>b</i><sup>2</sup>, parametrically <i>ax</i> sec θ − <i>by</i> csc θ = <i>a</i><sup>2</sup> − <i>b</i><sup>2</sup>",
            "hyperbola: <i>a</i><sup>2</sup><i>x</i>/<i>x</i><sub>1</sub> + <i>b</i><sup>2</sup><i>y</i>/<i>y</i><sub>1</sub> = <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>, parametrically <i>ax</i> cos θ + <i>by</i> cot θ = <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>"
          ],
          "note": "Three normals can be drawn from a general point (h, k) to y² = 4ax, and their slopes satisfy am³ + m(2a − h) + k = 0, whose roots give t₁ + t₂ + t₃ = 0. The reflection properties live here too: for a parabola parallel rays reflect through the focus, for an ellipse the normal bisects the angle SPS′, and for a hyperbola the tangent does."
        },
        {
          "t": "proc",
          "title": "Tangent or normal, in the right order",
          "steps": [
            "<b>Verify the point is on the conic.</b> Substitute it. Only <i>S</i><sub>1</sub> = 0 licenses the word tangent; from any other point <i>T</i> = 0 is a chord of contact or a polar, and you would be answering a different question.",
            "<b>For a tangent at a point, apply the <i>T</i> rule</b> and clear fractions to integer form. It is faster and safer than differentiating, and it handles the general circle's linear terms correctly.",
            "<b>For a tangent of a given slope, write down the condition of tangency</b> and solve for <i>c</i>. Expect two answers for circle, ellipse and hyperbola, and one for the parabola. If instead a line is given, just check whether the condition holds: a one-line yes or no.",
            "<b>For a circle, never run a discriminant.</b> Perpendicular distance from the centre equals the radius turns every circle tangency question into one application of the distance-from-a-point-to-a-line formula.",
            "<b>For the normal, invert and negate the tangent's slope</b> and use point-slope through the same point. For a circle, just join the point to the centre.",
            "<b>Check both ends.</b> A tangent must pass through its own point of contact, and the tangent and normal there must have slopes multiplying to −1. Two free ten-second guarantees."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Find the tangent and the normal to <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> − 4<i>x</i> + 6<i>y</i> − 12 = 0 at the point (5, 1).",
          "steps": [
            "Check the point first: 25 + 1 − 20 + 6 − 12 = 0. Here <i>g</i> = −2, <i>f</i> = 3, <i>c</i> = −12, so the centre is (2, −3) and the radius is √(4 + 9 + 12) = 5.",
            "Tangent by <i>T</i> = 0: 5<i>x</i> + <i>y</i> − 2(<i>x</i> + 5) + 3(<i>y</i> + 1) − 12 = 0, which tidies to 3<i>x</i> + 4<i>y</i> − 19 = 0. Independent check: the distance from (2, −3) to that line is |6 − 12 − 19|/5 = 5, the radius.",
            "The normal is the radius produced, so it is the line through (5, 1) and (2, −3), of slope 4/3."
          ],
          "ans": "Tangent 3x + 4y = 19 · normal 4x − 3y = 17, and the slopes −3/4 and 4/3 multiply to −1"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "For what values of <i>c</i> does <i>y</i> = 2<i>x</i> + <i>c</i> touch <i>x</i><sup>2</sup>/9 − <i>y</i><sup>2</sup>/4 = 1, and where does it touch?",
          "steps": [
            "Here <i>a</i><sup>2</sup> = 9, <i>b</i><sup>2</sup> = 4, <i>m</i> = 2. First check the line is steeper than the asymptotes: |<i>m</i>| = 2 > <i>b</i>/<i>a</i> = 2/3, so a tangent genuinely exists.",
            "Condition of tangency for a hyperbola: <i>c</i><sup>2</sup> = <i>a</i><sup>2</sup><i>m</i><sup>2</sup> − <i>b</i><sup>2</sup> = 36 − 4 = 32, so <i>c</i> = ±4√2. Two values means two parallel tangents, one on each side of the centre.",
            "Point of contact (−<i>a</i><sup>2</sup><i>m</i>/<i>c</i>, −<i>b</i><sup>2</sup>/<i>c</i>) = (−18/<i>c</i>, −4/<i>c</i>). For <i>c</i> = 4√2 that is (−9√2/4, −√2/2), and the other is its mirror image."
          ],
          "ans": "c = ±4√2 · contacts (−9√2/4, −√2/2) and (9√2/4, √2/2)"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Find the tangent to <i>y</i><sup>2</sup> = 16<i>x</i> of slope 2, and its point of contact.",
          "steps": [
            "The trap is using the coefficient 16 where the formula wants <i>a</i>. Writing <i>y</i> = 2<i>x</i> + 16/2 = 2<i>x</i> + 8 is not merely inelegant: substituting it gives <i>y</i><sup>2</sup> − 8<i>y</i> + 64 = 0 with discriminant −192, so that line misses the parabola entirely.",
            "Compare <i>y</i><sup>2</sup> = 16<i>x</i> with <i>y</i><sup>2</sup> = 4<i>ax</i> to get <i>a</i> = 4 <b>on its own line</b>, before touching any formula. Then <i>y</i> = <i>mx</i> + <i>a</i>/<i>m</i> = 2<i>x</i> + 2.",
            "Contact (<i>a</i>/<i>m</i><sup>2</sup>, 2<i>a</i>/<i>m</i>) = (1, 4). Verify: substituting gives <i>y</i><sup>2</sup> − 8<i>y</i> + 16 = 0, a repeated root at <i>y</i> = 4. Two coincident points, a genuine tangent."
          ],
          "ans": "y = 2x + 2, touching at (1, 4)"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "Prove the locus of the intersection of two perpendicular tangents to <i>x</i><sup>2</sup>/<i>a</i><sup>2</sup> + <i>y</i><sup>2</sup>/<i>b</i><sup>2</sup> = 1 is <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> = <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>. Hence show the tangents from <i>P</i>(3, 1) to <i>x</i><sup>2</sup>/8 + <i>y</i><sup>2</sup>/2 = 1 are perpendicular, and find their chord of contact.",
          "steps": [
            "A line through <i>P</i>(<i>h</i>, <i>k</i>) of slope <i>m</i> has <i>c</i> = <i>k</i> − <i>mh</i>. Imposing <i>c</i><sup>2</sup> = <i>a</i><sup>2</sup><i>m</i><sup>2</sup> + <i>b</i><sup>2</sup> and gathering powers gives <i>m</i><sup>2</sup>(<i>h</i><sup>2</sup> − <i>a</i><sup>2</sup>) − 2<i>hkm</i> + (<i>k</i><sup>2</sup> − <i>b</i><sup>2</sup>) = 0, a quadratic whose roots are the two tangent slopes.",
            "Perpendicularity is <i>m</i><sub>1</sub><i>m</i><sub>2</sub> = −1, and the product of the roots is (<i>k</i><sup>2</sup> − <i>b</i><sup>2</sup>)/(<i>h</i><sup>2</sup> − <i>a</i><sup>2</sup>). Setting that to −1 gives <i>h</i><sup>2</sup> + <i>k</i><sup>2</sup> = <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>, the director circle. The move that unlocks it is <b>refusing to find</b> <i>m</i><sub>1</sub> and <i>m</i><sub>2</sub>: a symmetric question about two tangents never needs either one.",
            "For <i>x</i><sup>2</sup>/8 + <i>y</i><sup>2</sup>/2 = 1 the director circle is <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> = 10, and <i>P</i>(3, 1) satisfies 9 + 1 = 10, so the tangents from it are perpendicular. <i>S</i><sub>1</sub> = 9/8 + 1/2 − 1 = 5/8 > 0 confirms <i>P</i> is external, and the chord of contact is <i>T</i> = 0: 3<i>x</i>/8 + <i>y</i>/2 = 1."
          ],
          "ans": "Locus x² + y² = a² + b² · chord of contact 3x + 4y = 8"
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Find the tangent to x² + y² = 25 at (3, −4), and the tangent to y² = 8x at (2, 4).",
              "a": "Circle: T = 0 gives 3x − 4y = 25. Parabola: 4a = 8 so a = 2, and yy₁ = 2a(x + x₁) gives 4y = 4(x + 2), that is y = x + 2."
            },
            {
              "q": "[JEE Main] For what values of c is y = 3x + c a tangent to x² + y² = 9?",
              "a": "c² = r²(1 + m²) = 9(1 + 9) = 90, so c = ±3√10. Two parallel tangents, one on each side."
            },
            {
              "q": "[JEE Main] Find the tangents to x²/9 + y²/4 = 1 of slope 2/3.",
              "a": "c² = a²m² + b² = 9(4/9) + 4 = 8, so c = ±2√2 and the tangents are y = 2x/3 ± 2√2."
            },
            {
              "q": "[JEE Main] How many tangents can be drawn to x² + y² − 2x − 4y + 3 = 0 from (1, 1)?",
              "a": "S₁ = 1 + 1 − 2 − 4 + 3 = −1 < 0, so the point is inside the circle and no tangent can be drawn. Zero."
            },
            {
              "q": "[JEE Main] Find the normal to x²/16 + y²/9 = 1 at the point whose eccentric angle is π/4.",
              "a": "a = 4, b = 3, a² − b² = 7, and sec(π/4) = csc(π/4) = √2. The parametric normal ax sec θ − by csc θ = a² − b² gives 4√2 x − 3√2 y = 7. The point itself is (2√2, 3/√2), and substituting it returns 16 − 9 = 7."
            }
          ]
        },
        {
          "t": "mcq",
          "q": "The line <i>y</i> = <i>mx</i> + <i>c</i> touches the parabola <i>y</i><sup>2</sup> = 4<i>ax</i> if",
          "correct": 1,
          "opts": [
            {
              "label": "c = am",
              "nudge": "This inverts the relation, mis-remembering “a over m” as “a times m”. It fails immediately on any numerical check."
            },
            {
              "label": "c = a/m",
              "nudge": null
            },
            {
              "label": "c² = a²m² + b²",
              "nudge": "This is the ellipse's condition imported wholesale. A parabola has no b at all, so the presence of b in an option is itself a red flag."
            },
            {
              "label": "c = −a/m",
              "nudge": "The magnitude is right but the sign is spurious. For m > 0 the tangent to a right-opening parabola has a positive intercept."
            }
          ],
          "solution": "Substituting the line gives my² − 4ay + 4ac = 0, and equal roots need 16a² = 16amc, that is a = mc, so c = a/m. Being linear in c, it yields exactly one tangent of each nonzero slope."
        },
        {
          "t": "mcq",
          "q": "The tangent to <i>x</i><sup>2</sup>/9 + <i>y</i><sup>2</sup>/4 = 1 at the point (3, 0) is",
          "correct": 0,
          "opts": [
            {
              "label": "x = 3",
              "nudge": null
            },
            {
              "label": "x = 9",
              "nudge": "This forgets to divide by a² and reports the numerator xx₁ = 9 as if it were the whole equation."
            },
            {
              "label": "y = 3",
              "nudge": "This confuses the vertex's abscissa with an ordinate, which is pattern-matching on the digit 3 rather than reading which axis the point is on."
            },
            {
              "label": "x + y = 3",
              "nudge": "This is the line through (3, 0) and (0, 3). It passes through the point but cuts the ellipse rather than touching it."
            }
          ],
          "solution": "T = 0 gives 3x/9 + 0·y/4 = 1, that is x/3 = 1, so x = 3. It is the vertical tangent at the vertex, which no slope form could ever produce."
        },
        {
          "t": "mcq",
          "q": "The director circle of the ellipse <i>x</i><sup>2</sup>/16 + <i>y</i><sup>2</sup>/9 = 1 is",
          "correct": 1,
          "opts": [
            {
              "label": "x² + y² = 7",
              "nudge": "This uses a² − b², which is the hyperbola's director circle and also c² for this ellipse. It is the same sign import the ellipse topic already warned about."
            },
            {
              "label": "x² + y² = 25",
              "nudge": null
            },
            {
              "label": "x² + y² = 16",
              "nudge": "This is the auxiliary circle, radius a. Auxiliary and director circles are different objects with different jobs."
            },
            {
              "label": "x² + y² = 9",
              "nudge": "Radius b corresponds to no standard construction here. The circle of radius b is inscribed in the ellipse and has nothing to do with perpendicular tangents."
            }
          ],
          "solution": "The director circle is x² + y² = a² + b² = 16 + 9 = 25, the locus of points from which two perpendicular tangents can be drawn."
        },
        {
          "t": "mcq",
          "q": "The number of tangents that can be drawn to <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> = 25 from the point (3, 4) is",
          "correct": 1,
          "opts": [
            {
              "label": "0",
              "nudge": "Zero is the answer for an interior point, S₁ < 0. Here S₁ is exactly 0, which is a different case."
            },
            {
              "label": "1",
              "nudge": null
            },
            {
              "label": "2",
              "nudge": "Two is the answer for an exterior point, S₁ > 0, and it is what gets picked by reflex without computing S₁ at all. “From a point” does not automatically mean “from outside”."
            },
            {
              "label": "infinitely many",
              "nudge": "This confuses tangents with the infinitely many lines through the point. Only one of those lines touches."
            }
          ],
          "solution": "S₁ = 9 + 16 − 25 = 0, so (3, 4) lies ON the circle, and there is exactly one tangent there, namely 3x + 4y = 25."
        },
        {
          "t": "mistakes",
          "items": [
            "Using <i>T</i> = 0 from a point <b>not</b> on the conic and calling it a tangent. From an external point it is the chord of contact, a completely different line. Substitute into <i>S</i> first.",
            "Importing the wrong sign into the tangency condition. Ellipse <i>c</i><sup>2</sup> = <i>a</i><sup>2</sup><i>m</i><sup>2</sup> + <i>b</i><sup>2</sup>, hyperbola <i>c</i><sup>2</sup> = <i>a</i><sup>2</sup><i>m</i><sup>2</sup> − <i>b</i><sup>2</sup>. Note this is the <b>opposite</b> pairing to <i>c</i><sup>2</sup> = <i>a</i><sup>2</sup> ∓ <i>b</i><sup>2</sup>.",
            "The <i>a</i> versus 4<i>a</i> slip inside <i>y</i> = <i>mx</i> + <i>a</i>/<i>m</i>. Reading 16 from <i>y</i><sup>2</sup> = 16<i>x</i> as <i>a</i> produces a line that misses the parabola altogether. Write <i>a</i> = … on its own line first.",
            "Forgetting that the slope form cannot produce a <b>vertical</b> tangent. From (0, 4) to <i>y</i><sup>2</sup> = 4<i>x</i> it yields only one line; the second tangent is <i>x</i> = 0, at the vertex.",
            "Assuming two tangents always come from a positive <i>S</i><sub>1</sub>. True for circle, parabola and ellipse, <b>reversed for the hyperbola</b>, where a point cradled inside a branch is walled in and sees none."
          ]
        },
        {
          "t": "protip",
          "html": "learn T once, not four tangent formulas. and when two tangents are drawn from a point and the question asks about the angle between them, or whether they are perpendicular, or the sum of their slopes, build the quadratic in m and stop. the sum and product of its roots answer the question without a single square root."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "tangent ⟺ equal roots ⟺ discriminant 0",
              "note": "two coincident intersection points, not merely one"
            },
            {
              "f": "T = 0 on the curve · T = 0 off it · T = S₁ inside",
              "note": "tangent, chord of contact or polar, bisected chord"
            },
            {
              "f": "c² = r²(1 + m²) · c = a/m",
              "note": "circle and parabola · for a circle use distance = radius"
            },
            {
              "f": "c² = a²m² + b² · c² = a²m² − b²",
              "note": "ellipse then hyperbola, the opposite pairing to c² = a² ∓ b²"
            },
            {
              "f": "SS₁ = T² · director circle 2r², a² + b², a² − b²",
              "note": "pair of tangents · and the parabola's is its directrix"
            },
            {
              "f": "normal at (at², 2at): y + tx = 2at + at³",
              "note": "slope −t · three normals give t₁ + t₂ + t₃ = 0"
            }
          ],
          "aids": [
            "“tangent means equal roots”",
            "“circle? distance equals radius, never a discriminant”",
            "“tangency flips the sign: ellipse plus, hyperbola minus”",
            "“tangent two terms, normal three”"
          ]
        }
      ]
    }
  ]
};

export default ch10Conics;
