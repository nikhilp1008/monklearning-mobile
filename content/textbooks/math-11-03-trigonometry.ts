/**
 * Chapter 03 · Trigonometric Functions. Mathematics, Class 11.
 *
 * Restructured from pages 144 to 282 of the Drona Class 11 Mathematics Master
 * Reference into the block system in design_handoff_textbooks/CONTENT_SPEC.md,
 * following math-11-01-sets.ts for voice and density.
 *
 * The source is three documents stacked: a typeset chapter of six subtopics, a
 * Round 1 supplement (subtopics 07 and 08 plus a product-to-sum addendum) and a
 * Round 2 addendum (subtopics 09 to 12 plus Addendum D). Six topics is the
 * schema's ceiling, so the supplementary material is folded into the topic it
 * actually belongs to rather than given topics of its own:
 *
 *   - Subtopic 07, the sub-multiple and half-angle family (the ± radical forms,
 *     the sign discipline, the t = tan(A/2) substitution, sin 18°), sits inside
 *     Topic 05: every one of those results is the compound-angle machinery run
 *     backwards, and separating them would teach the same idea twice.
 *   - Subtopics 09 and 10, inequalities and maximum/minimum/range, sit inside
 *     Topic 04. Both are read off a curve, which is exactly what that topic
 *     installs, and the source itself solves its inequality example there.
 *   - Addendum D, simultaneous equations and the boundedness argument, sits
 *     inside Topic 06 next to the general-solution machinery it extends.
 *   - The product-to-sum and triple-angle addendum (examples C1 to C4) restates
 *     no new formulas, so its content is absorbed into Topic 05's examples.
 *
 * Three deliberate omissions, all from the addenda. Subtopic 08, properties of
 * triangles, is dropped because the source states outright that the rationalised
 * NCERT and the current CBSE Class 11 syllabus have removed it; sine rule,
 * cosine rule and Heron belong to a Properties of Triangles chapter, not to
 * this one. Subtopics 11 and 12 (trigonometric series in AP, telescoping
 * products, the fourth to sixth multiples, the n-angle tangent) are dropped for
 * altitude: they are JEE Advanced enrichment built entirely out of Topic 05's
 * formulas, and carrying them would thin all six core topics to fit.
 *
 * The exam hook is authored once, on topic 1, with a bold heading per topic,
 * because the reader renders `hook` only there. Same convention, and the same
 * reason, as the Sets chapter.
 *
 * Eight `diagram` blocks, all of the parameterised kinds: one `numberline`, two
 * `unitcircle` and five `plot`. Two notes for whoever edits them. Diagram chips
 * and captions render as plain text, not markup, so they carry no inline tags.
 * And `PlotCurve` declares a `vline` variant that plot.tsx does not implement
 * (neither `evalCurve` nor `parametricPath` has a case for it, so it draws an
 * empty path); the tangent asymptotes here are dashed `segments` instead.
 */
import type { Chapter } from '@/lib/textbooks';

export const ch03Trigonometry: Chapter = {
  "chapter": "03",
  "title": "Trigonometric Functions",
  "subject": "Mathematics",
  "klass": "Class 11",
  "topics": [
    {
      "n": "01",
      "title": "Angles and Radian Measure",
      "chip": "01 RADIANS",
      "kalam": "arc over radius, that is the whole idea",
      "blocks": [
        {
          "t": "hook",
          "html": "<b>01 · Angles and Radian Measure</b><br>Low marks, enormous leverage. CBSE Boards almost guarantee a 1–2 mark degree ↔ radian conversion and a 3-mark arc-length or sector question, lifted near-verbatim from NCERT Exercise 3.1. JEE Main and NEET rarely ask it alone but bake it into every trigonometry and rotational-motion problem, revolutions per minute into radians per second is a NEET staple. JEE Advanced hides it as a trap layer inside multi-step sector problems, where the angle work is never the hard part, only the silent prerequisite.<br><br><b>02 · Trigonometric Functions on the Unit Circle</b><br>The single most predictable board question in the chapter: <b>“if sin <i>x</i> = 3/5 and <i>x</i> lies in the second quadrant, find the other five functions.”</b> Domain and range turn up as 1-markers. JEE Main uses range as a filter, |sin <i>x</i>| ≤ 1 kills an algebra problem in one line. JEE Advanced treats sign and range as silent prerequisites, and one dropped sign propagates all the way to a wrong final answer.<br><br><b>03 · Standard Values and Allied Angles</b><br>CBSE asks direct evaluations (sin 210°, cos 765°) and 3-mark allied-angle simplifications. NEET is speed-critical here, reducing sin 1230° in seconds is the difference between finishing the paper and not. JEE Main favours long allied-angle products that collapse to ±1. Five standard angles and one reduction rule cover every angle there is.<br><br><b>04 · Graphs, Periodicity and Range</b><br>CBSE asks you to sketch sin <i>x</i>, cos <i>x</i>, tan <i>x</i> and state period, domain and range (NCERT §3.3), with <b>“find the period of sin 3<i>x</i>”</b> as a stock 1-marker. NEET feeds periodicity and amplitude straight into SHM and waves. JEE Main asks for periods of composites, ranges, and solution counts read off a graph. JEE Advanced reads inequalities and root counts off the curve, which separates students who visualise from those who only manipulate.<br><br><b>05 · Identities and Compound Angles</b><br>Guaranteed marks, and the highest-yield topic in the whole chapter. CBSE wants an exact value (cos 15°, tan 75°), a 3-mark identity proof, and often a 5-mark conditional identity in a triangle. JEE Main runs 1–2 questions every year on the maximum of <i>a</i> sin <i>x</i> + <i>b</i> cos <i>x</i> or a product like cos 20° cos 40° cos 80°. JEE Advanced treats these identities as tools inside harder problems, so mastery here is not optional.<br><br><b>06 · Trigonometric Equations</b><br>A near-certain board question: principal solutions for 1–2 marks, general solution for 3, straight out of NCERT Exercise 3.4. NEET meets it as a quadratic in sin <i>x</i> and inside SHM phase work. JEE Main asks for solution counts in an interval and for <i>a</i> sin <i>x</i> + <i>b</i> cos <i>x</i> = <i>c</i>. JEE Advanced hinges on <b>not losing roots by dividing and not gaining them by squaring</b>, the two traps that separate careful solvers from the rest."
        },
        {
          "t": "p",
          "html": "Ask why a full turn is cut into 360 parts and there is no good answer. The Babylonians liked 360 because it divides cleanly, and the convention stuck. Nothing about a circle wants to be sliced into 360 pieces, a degree is as arbitrary as measuring cloth in cubits. Every later formula then has to carry a correction factor to undo that arbitrariness."
        },
        {
          "t": "p",
          "html": "The radian fixes this by measuring an angle with the circle itself. Take any circle, walk along its rim a distance exactly equal to the radius, and the angle you have swept out at the centre is <b>1 radian</b>. Picture the giant wheel at a mela with a 7-metre arm. “How many degrees around am I?” is a made-up number. “How far have I actually travelled along the rim, counted in arm-lengths?” is the radian, and it is a real distance you could pace out."
        },
        {
          "t": "p",
          "html": "Because a radian is one length divided by another, it is a pure number carrying no dimension at all. That is why the unit word is almost always dropped, why an angular velocity ω = θ/<i>t</i> comes out in s<sup>−1</sup> with no radians left to cancel, and why radians are allowed inside power series and derivatives. A degree secretly hides the factor π/180, which is the whole reason the Class 12 result d/d<i>x</i>(sin <i>x</i>) = cos <i>x</i> is true only in radians."
        },
        {
          "t": "think",
          "html": "a radian answers one question: how much arc, per unit radius. and π is not decoration in 2π radians, it literally counts how many radius-lengths fit around a rim, halved."
        },
        {
          "t": "def",
          "term": "Angle, as rotation",
          "html": "An angle is formed by rotating a ray about its endpoint, the <b>vertex</b>, from an initial side to a terminal side, and its measure is the amount of rotation. <b>Anticlockwise is positive, clockwise is negative.</b> An old analog clock’s hands move clockwise, which is the negative direction. This convention is fixed for the whole chapter and never changes."
        },
        {
          "t": "def",
          "term": "Degree measure",
          "html": "A rotation of 1/360 of one complete revolution measures one degree, 1°. Its subdivisions are base 60: 1° = 60′ and 1′ = 60″. So 0.5° is 30′, never 50′, and 20′ is 1/3 of a degree, not 0.20°."
        },
        {
          "t": "def",
          "term": "Radian measure",
          "html": "The angle subtended at the centre of a circle by an arc whose length equals the radius is <b>one radian</b>. Written 1<sup>c</sup>, though the unit word is nearly always omitted. In this chapter a bare number is always a radian measure: π/4 and 45° are the same angle."
        },
        {
          "t": "defgrid",
          "title": "The conversions to memorise",
          "rows": [
            {
              "k": "30° · 45°",
              "v": "π/6 · π/4"
            },
            {
              "k": "60° · 90°",
              "v": "π/3 · π/2"
            },
            {
              "k": "120° · 180°",
              "v": "2π/3 · π"
            },
            {
              "k": "270° · 360°",
              "v": "3π/2 · 2π"
            },
            {
              "k": "Benchmarks",
              "v": "1 radian ≈ 57°16′ ≈ 57.2958° · 1° ≈ 0.01746 radian"
            },
            {
              "k": "DMS",
              "v": "1° = 60′ · 1′ = 60″, base 60 all the way down"
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "THE CORNERSTONE DEFINITION",
          "tag": "one relation, everything else scales",
          "main": "θ = s / r   (θ in radians)",
          "legend": [
            "s = arc length · r = radius, both lengths, which is why θ is a pure number",
            "master relation: 2π radian = 360°, hence π radian = 180°"
          ],
          "note": "Degree to radian: multiply by π/180. Radian to degree: multiply by 180/π. The two factors are reciprocals, so there is only one relation to remember and never two."
        },
        {
          "t": "formula",
          "kicker": "ARC LENGTH AND SECTOR AREA",
          "tag": "θ in radians, always",
          "main": "s = r θ · A = ½ r² θ",
          "legend": [
            "equivalently A = ½ r s once the arc is known, which is often faster",
            "perimeter of a sector = 2r + s, the two radii plus the arc, not 2r + rθ misremembered as 2r"
          ],
          "note": "Both are defined with θ in radians. Feed them degrees and the answer comes out roughly 57 times too big, which is the fingerprint of this error."
        },
        {
          "t": "diagram",
          "kind": "numberline",
          "kicker": "DIAGRAM · ONE TURN, MEASURED IN RADIUS-LENGTHS",
          "mathChips": true,
          "chips": ["π/6", "π/3", "π/2", "π", "2π"],
          "captions": [
            "π/6 radian is 30°. Walk about 0.52 radius-lengths along the rim and you have swept one twelfth of the turn. The grey bar is the whole lap, for scale.",
            "π/3 radian is 60°, about 1.05 radius-lengths. Just over one radius of arc, and already a sixth of the circle.",
            "π/2 radian is 90°, about 1.57 radius-lengths. A right angle is barely more than one and a half radii of arc, which is worth feeling before you trust any formula.",
            "π radian is 180°, about 3.14 radius-lengths. Half the rim. This is where π enters, and it is not a coincidence.",
            "2π radian is 360°, about 6.28 radius-lengths. The whole circumference is 2πr, so one full turn is 2π radians in every circle, large or small. The radius cancels."
          ],
          "frames": [
            {
              "x": [0, 6.6],
              "intervals": [
                { "from": 0, "to": 6.2832, "soft": true },
                { "from": 0, "to": 0.5236, "label": "π/6 = 30°" }
              ]
            },
            {
              "x": [0, 6.6],
              "intervals": [
                { "from": 0, "to": 6.2832, "soft": true },
                { "from": 0, "to": 1.0472, "label": "π/3 = 60°" }
              ]
            },
            {
              "x": [0, 6.6],
              "intervals": [
                { "from": 0, "to": 6.2832, "soft": true },
                { "from": 0, "to": 1.5708, "label": "π/2 = 90°" }
              ]
            },
            {
              "x": [0, 6.6],
              "intervals": [
                { "from": 0, "to": 6.2832, "soft": true },
                { "from": 0, "to": 3.1416, "label": "π = 180°" }
              ]
            },
            {
              "x": [0, 6.6],
              "intervals": [
                { "from": 0, "to": 6.2832, "label": "2π = 360°" }
              ]
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHERE π/180 COMES FROM, TAP A LINE",
          "steps": [
            {
              "eq": "θ = s / r",
              "why": "The definition, and the only assumption in the whole argument: the angle at the centre is the arc divided by the radius."
            },
            {
              "eq": "full turn: s = 2πr, so θ = 2πr / r = 2π",
              "why": "Walking the entire rim covers the whole circumference, and the circumference of any circle is 2πr. The radius cancels, so a full turn is 2π radians in a bangle and in a stadium alike."
            },
            {
              "eq": "but a full turn is also 360°",
              "why": "That is the degree definition. Two names for the same rotation have to be equal, which is the bridge between the two systems."
            },
            {
              "eq": "2π radian = 360° ⇒ π radian = 180°",
              "why": "Halve both sides. This single equation is the only thing worth memorising; every conversion in the chapter is it, rescaled."
            },
            {
              "eq": "1° = π/180 radian · 1 radian = 180/π ≈ 57.3°",
              "why": "Divide the master relation by 180 for the first and by π for the second. The two factors are reciprocals, so if one is right the other cannot be wrong. Sanity check: 1 radian is a bit less than 60°, so a small angle whose radian measure comes out huge means you flipped the factor."
            }
          ]
        },
        {
          "t": "proc",
          "title": "Converting, and when not to",
          "steps": [
            "<b>Degrees to radians.</b> Bring minutes and seconds down to a fraction of a degree first, 40°20′ = 40 + 20/60 = 121/3 degrees, then multiply by π/180. Leave π symbolic unless a decimal is demanded.",
            "<b>Radians to degrees.</b> Multiply by 180/π, taking π = 22/7 when a number is wanted. Keep the whole-degree part, multiply the leftover fraction by 60 for minutes, and the next leftover by 60 again for seconds.",
            "<b>Anything with an arc or a sector.</b> Convert to radians <i>before</i> touching <i>s</i> = <i>r</i>θ or <i>A</i> = ½<i>r</i><sup>2</sup>θ. This is the single step that most marks are lost on.",
            "<b>Ratios are exempt.</b> If the angles appear only as a ratio of two angles, the conversion factor cancels and you may leave both in degrees. That is a genuine time saving, not a shortcut."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Convert 40°20′ into radian measure.",
          "steps": [
            "20′ = 20/60 of a degree = 1/3°, so 40°20′ = 121/3 degrees.",
            "Multiply by π/180: (121/3) × (π/180) = 121π/540."
          ],
          "ans": "40°20′ = 121π/540 radian"
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A central angle of 60° cuts an arc of length 37.4 cm. Find the radius. (Take π = 22/7.)",
          "steps": [
            "Convert first: 60° = 60 × π/180 = π/3 radian. The formula <i>s</i> = <i>r</i>θ refuses degrees.",
            "<i>r</i> = <i>s</i>/θ = 37.4 ÷ (π/3) = 37.4 × 3/π = 112.2 × 7/22."
          ],
          "ans": "r = 35.7 cm"
        },
        {
          "t": "ex",
          "tag": "NEET PATTERN",
          "q": "A wheel makes 360 revolutions in one minute. Through how many radians does it turn in one second?",
          "steps": [
            "Revolutions per second: 360/60 = 6.",
            "One revolution is 2π radian, so ω = 6 × 2π = 12π ≈ 37.7.",
            "This is the bridge to rotational mechanics: ω in rad s<sup>−1</sup> feeds straight into <i>v</i> = <i>r</i>ω."
          ],
          "ans": "ω = 12π rad s⁻¹ ≈ 37.7 rad s⁻¹"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "A sector of a circle has perimeter 16 cm and area 16 cm<sup>2</sup>. Find its radius and central angle in radians.",
          "steps": [
            "Two conditions, two unknowns: 2<i>r</i> + <i>s</i> = 16 and ½<i>r</i><sup>2</sup>θ = 16, with <i>s</i> = <i>r</i>θ.",
            "From the area, <i>r</i><sup>2</sup>θ = 32, so <i>s</i> = <i>r</i>θ = 32/<i>r</i>. Substitute into the perimeter: 2<i>r</i> + 32/<i>r</i> = 16.",
            "2<i>r</i><sup>2</sup> − 16<i>r</i> + 32 = 0 ⇒ (<i>r</i> − 4)<sup>2</sup> = 0 ⇒ <i>r</i> = 4, so <i>s</i> = 8 and θ = <i>s</i>/<i>r</i> = 2. The angle work is elementary; the algebra is the whole difficulty, which is the Advanced design pattern."
          ],
          "ans": "r = 4 cm · θ = 2 radian"
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Convert into radians: (a) 25°, (b) −47°30′.",
              "a": "(a) 25 × π/180 = 5π/36. (b) −47.5 × π/180 = −19π/72."
            },
            {
              "q": "[CBSE] Convert 11/16 radian into degree measure. (Take π = 22/7.)",
              "a": "(11/16) × 180/π = (11/16) × 180 × 7/22 = 39°22′30″."
            },
            {
              "q": "[CBSE] An arc of 22 cm subtends an angle at the centre of a circle of radius 100 cm. Find it in degrees. (π = 22/7.)",
              "a": "θ = 22/100 = 0.22 radian = 0.22 × 180/π ≈ 12°36′."
            },
            {
              "q": "[JEE Main] Arcs of equal length subtend 60° and 75° at the centres of two circles. Find the ratio of the radii.",
              "a": "r₁θ₁ = r₂θ₂, and the angles appear only as a ratio, so r₁ : r₂ = θ₂ : θ₁ = 75 : 60 = 5 : 4."
            },
            {
              "q": "[JEE Main] A chord of 20 cm is drawn in a circle of diameter 40 cm. Find the minor arc it cuts off.",
              "a": "r = 20. The perpendicular from the centre bisects the chord, so sin(θ/2) = 10/20 = 1/2, θ/2 = π/6 and θ = π/3. Then s = rθ = 20π/3 ≈ 20.94 cm."
            }
          ]
        },
        {
          "t": "mcq",
          "q": "The radian measure of 75° is:",
          "correct": 0,
          "opts": [
            {
              "label": "5π/12",
              "nudge": null
            },
            {
              "label": "5π/6",
              "nudge": "This divides by 90 instead of 180, a careless reduction of 75/180."
            },
            {
              "label": "7π/12",
              "nudge": "That is 105°, an arithmetic slip while simplifying the fraction 75/180."
            },
            {
              "label": "12/(5π)",
              "nudge": "This multiplies by 180/π, the radian-to-degree factor, running the conversion backwards."
            }
          ],
          "solution": "75 × π/180 = 75π/180 = 5π/12."
        },
        {
          "t": "mcq",
          "q": "An arc of length 15 cm subtends an angle of π/4 at the centre. The radius is:",
          "correct": 1,
          "opts": [
            {
              "label": "15π/4 cm",
              "nudge": "This multiplies by θ instead of dividing, confusing s = rθ with r = sθ."
            },
            {
              "label": "60/π cm",
              "nudge": null
            },
            {
              "label": "4/(15π) cm",
              "nudge": "The whole fraction is inverted, that is θ/s rather than s/θ."
            },
            {
              "label": "60 cm",
              "nudge": "This quietly drops the π, treating π/4 as plain one quarter. A radian measure is a number, π and all."
            }
          ],
          "solution": "r = s/θ = 15 ÷ (π/4) = 60/π cm."
        },
        {
          "t": "mcq",
          "q": "Using <i>s</i> = <i>r</i>θ a student computes the arc for <i>r</i> = 6 cm and a 30° angle as <i>s</i> = 6 × 30 = 180 cm. The error is:",
          "correct": 1,
          "opts": [
            {
              "label": "the radius should have been doubled",
              "nudge": "The radius is given and used correctly. Nothing about the 6 is wrong."
            },
            {
              "label": "θ was used in degrees instead of radians",
              "nudge": null
            },
            {
              "label": "a factor of 60 is missing",
              "nudge": "60 belongs to minutes and seconds, and no DMS work appears anywhere in this problem."
            },
            {
              "label": "there is no error",
              "nudge": "An arc of 180 cm on a circle of radius 6 cm is longer than the whole circumference, 12π ≈ 37.7 cm. Impossible."
            }
          ],
          "solution": "s = rθ is defined with θ in radians. 30° = π/6, so s = 6 × π/6 = π ≈ 3.14 cm. An answer roughly 57 times too big is the signature of this trap."
        },
        {
          "t": "mcq",
          "q": "1 radian is approximately:",
          "correct": 1,
          "opts": [
            {
              "label": "1°",
              "nudge": "This treats radian and degree as interchangeable numbers, the deepest version of the mix-up."
            },
            {
              "label": "57°16′",
              "nudge": null
            },
            {
              "label": "60°",
              "nudge": "Rounding 57° up to a nicer number is guessing, and 180/π is not 3."
            },
            {
              "label": "90°",
              "nudge": "A right angle is π/2 ≈ 1.571 radian, not 1 radian."
            }
          ],
          "solution": "1 radian = 180°/π ≈ 57.2958°, which is 57°16′ in degree-minute form."
        },
        {
          "t": "mistakes",
          "items": [
            "Using degrees in <b><i>s</i> = <i>r</i>θ</b> or <b><i>A</i> = ½<i>r</i><sup>2</sup>θ</b>. Both are defined in radians, and an answer about 57 times too big is the fingerprint.",
            "Flipping the conversion factor. Degree to radian uses <b>π/180</b>, radian to degree uses <b>180/π</b>. Heading towards the bigger-looking number means the bigger factor.",
            "Carrying “radian” as if it were a unit. It is <b>dimensionless</b>, so ω = θ/<i>t</i> comes out in s<sup>−1</sup> with nothing left to cancel.",
            "Base-60 slips. <b>0.5° = 30′</b>, not 50′, and 20′ = 1/3 of a degree, not 0.20°.",
            "Forgetting that clockwise is <b>negative</b>. Rotation has a direction, and the chapter never relaxes the convention."
          ]
        },
        {
          "t": "protip",
          "html": "lock 30°, 45°, 60° and 90° with their radian twins so cold that you never compute them. and when a problem hands you only a ratio of two angles, leave both in degrees, the conversion factor cancels and you save thirty seconds you will want later."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "θ = s / r, in radians",
              "note": "arc over radius, so a pure number"
            },
            {
              "f": "π radian = 180°",
              "note": "the only relation worth memorising"
            },
            {
              "f": "deg → rad × π/180 · rad → deg × 180/π",
              "note": "reciprocal factors, never both wrong"
            },
            {
              "f": "s = rθ · A = ½r²θ = ½rs",
              "note": "convert first or the answer is nonsense"
            },
            {
              "f": "1 rad ≈ 57°16′ · 1° ≈ 0.01746 rad",
              "note": "the sanity check on every answer"
            }
          ],
          "aids": [
            "“convert first, compute second”",
            "“anticlockwise plus, clockwise minus”"
          ]
        }
      ]
    },
    {
      "n": "02",
      "title": "Trigonometric Functions on the Unit Circle",
      "chip": "02 UNIT CIRCLE",
      "kalam": "cos is across, sin is up",
      "blocks": [
        {
          "t": "p",
          "html": "Until now sin, cos and tan were ratios of sides in a right triangle, and a right triangle can only hold angles between 0° and 90°. To say anything at all about sin 210° or cos(−40°) you need a frame with no such cap. That frame is the <b>unit circle</b>, a circle of radius 1 centred at the origin. Stand a ray from the origin, rotate it through θ, and look at where its tip <i>P</i> lands."
        },
        {
          "t": "p",
          "html": "Everything in this topic falls out of one sentence. For the point <i>P</i>(<i>a</i>, <i>b</i>) where the terminal ray meets the unit circle, <b>cos θ = <i>a</i></b>, the across-coordinate, and <b>sin θ = <i>b</i></b>, the up-coordinate. Signs, ranges, quadrantal values and the Pythagorean identity are all consequences of that, not separate facts to store."
        },
        {
          "t": "p",
          "html": "Picture a mark on the tip of a slowly turning ceiling fan, with the centre at the origin. Its height above or below the centre is sin θ, positive in the top half and negative in the bottom. Its left-right position is cos θ, positive on the right half and negative on the left. You do not memorise these signs, you read them off the fan. And because the blade tip never gets further than one radius from the centre, |sin θ| ≤ 1 and |cos θ| ≤ 1 are a physical impossibility turned into a mathematical range."
        },
        {
          "t": "think",
          "html": "cosine is the across-coordinate and sine is the up-coordinate. every sign question in this chapter is really the question “which half of the circle am i standing in.”"
        },
        {
          "t": "def",
          "term": "The general definition, any radius",
          "html": "Take any point <i>P</i>(<i>x</i>, <i>y</i>) on the terminal side of θ, at distance <i>r</i> = √(<i>x</i><sup>2</sup> + <i>y</i><sup>2</sup>) > 0 from the origin. Then sin θ = <i>y</i>/<i>r</i>, cos θ = <i>x</i>/<i>r</i>, tan θ = <i>y</i>/<i>x</i>. Because <b><i>r</i> > 0 always</b>, the sign of every function is decided purely by the signs of <i>x</i> and <i>y</i>, which is to say by the quadrant. That is the entire engine of quadrant signs."
        },
        {
          "t": "defgrid",
          "title": "Reciprocal and quotient relations",
          "rows": [
            {
              "k": "csc θ",
              "v": "1/sin θ, so cosec pairs with <b>sine</b>, despite the “co”"
            },
            {
              "k": "sec θ",
              "v": "1/cos θ, so sec pairs with <b>cosine</b>"
            },
            {
              "k": "cot θ",
              "v": "1/tan θ = cos θ / sin θ"
            },
            {
              "k": "tan θ",
              "v": "sin θ / cos θ, undefined wherever cos θ = 0"
            },
            {
              "k": "Third-letter rule",
              "v": "co<b>sec</b> ↔ <b>sine</b> · <b>sec</b> ↔ co<b>sine</b>. Read the third letter and the pairing is fixed."
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "THE PYTHAGOREAN IDENTITIES",
          "tag": "one circle, three identities",
          "main": "sin²θ + cos²θ = 1",
          "legend": [
            "1 + tan²θ = sec²θ, the first identity divided through by cos²θ",
            "1 + cot²θ = csc²θ, divided through by sin²θ instead"
          ],
          "note": "The “1 +” sits with the function whose reciprocal squared is on the right: tan pairs with sec, cot pairs with csc. Swapping them is the standard slip."
        },
        {
          "t": "defgrid",
          "title": "Domain and range",
          "rows": [
            {
              "k": "sin θ · cos θ",
              "v": "all θ ∈ ℝ · range [−1, 1]"
            },
            {
              "k": "tan θ",
              "v": "θ ≠ (2<i>n</i> + 1)π/2 · range ℝ"
            },
            {
              "k": "cot θ",
              "v": "θ ≠ <i>n</i>π · range ℝ"
            },
            {
              "k": "sec θ",
              "v": "θ ≠ (2<i>n</i> + 1)π/2 · range (−∞, −1] ∪ [1, ∞)"
            },
            {
              "k": "csc θ",
              "v": "θ ≠ <i>n</i>π · range (−∞, −1] ∪ [1, ∞)"
            },
            {
              "k": "The two locks",
              "v": "sin and cos never leave [−1, 1]; sec and csc never enter (−1, 1). Here <i>n</i> ∈ ℤ."
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "SIGNS BY QUADRANT",
          "tag": "All Silver Tea Cups",
          "main": "QI all + · QII sin, csc · QIII tan, cot · QIV cos, sec",
          "legend": [
            "anticlockwise from QI: All, Silver (sine), Tea (tangent), Cups (cosine); everything else is negative",
            "quadrantal values at 0, π/2, π, 3π/2: sin = 0, 1, 0, −1 and cos = 1, 0, −1, 0, with tan undefined at π/2 and 3π/2"
          ],
          "note": "A reciprocal always carries its parent’s sign, and tan = sin/cos is positive exactly where sine and cosine agree, which is QI and QIII. The mnemonic is a summary of that, not a substitute for it."
        },
        {
          "t": "diagram",
          "kind": "unitcircle",
          "kicker": "DIAGRAM · TAP A QUADRANT, READ THE SIGNS",
          "mathChips": true,
          "chips": ["30°", "150°", "210°", "330°"],
          "captions": [
            "Quadrant I. Both coordinates are positive, so cos 30° = √3/2 and sin 30° = 1/2 are both positive. All six functions are positive here.",
            "Quadrant II. The across-coordinate has gone negative while the height stays positive: sin 150° = +1/2 but cos 150° = −√3/2. Sine and cosecant only.",
            "Quadrant III. Both coordinates are negative, so sine and cosine are both negative, and their ratio tan 210° = +1/√3 comes out positive. Tangent and cotangent only.",
            "Quadrant IV. Back on the right half with a negative height: cos 330° = +√3/2, sin 330° = −1/2. Cosine and secant only. Reading anticlockwise: All, Sine, Tangent, Cosine."
          ],
          "frames": [
            { "angle": 30, "show": ["sin", "cos"] },
            { "angle": 150, "show": ["sin", "cos"] },
            { "angle": 210, "show": ["sin", "cos"] },
            { "angle": 330, "show": ["sin", "cos"] }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THREE IDENTITIES FROM ONE CIRCLE, TAP A LINE",
          "steps": [
            {
              "eq": "P(a, b) lies on x² + y² = 1",
              "why": "The unit circle has radius 1, so every point on it satisfies the circle's own equation. Nothing trigonometric has been used yet."
            },
            {
              "eq": "a = cos x, b = sin x",
              "why": "That is the definition of the two functions on the unit circle: cosine is the across-coordinate, sine is the up-coordinate."
            },
            {
              "eq": "sin²x + cos²x = 1",
              "why": "Substitute. The first Pythagorean identity is not a fact to memorise, it is the equation of the circle rewritten in trigonometric names."
            },
            {
              "eq": "÷ cos²x: tan²x + 1 = sec²x",
              "why": "Valid wherever cos x ≠ 0. Each term becomes the square of a ratio: sin/cos is tan, and 1/cos is sec."
            },
            {
              "eq": "÷ sin²x: 1 + cot²x = csc²x",
              "why": "The same move with the other divisor, valid wherever sin x ≠ 0. All three identities descend from one circle, which is why forgetting one is never a reason to guess: rebuild it in ten seconds."
            }
          ]
        },
        {
          "t": "proc",
          "title": "Finding the other five functions",
          "steps": [
            "<b>Split the job in two.</b> Magnitudes come from the identity or a reference triangle; signs come from the quadrant. Keeping the stages separate is what stops the sign step being skipped.",
            "<b>Get the magnitude.</b> From sin <i>x</i> = 3/5, cos<sup>2</sup><i>x</i> = 1 − 9/25 = 16/25, so |cos <i>x</i>| = 4/5. Or build the 3-4-5 reference triangle straight away.",
            "<b>Choose the sign from the quadrant.</b> The ± left behind by a square root is decided by ASTC, never defaulted to +.",
            "<b>Reduce a large angle first.</b> Beyond one turn, subtract multiples of 360° or 2π to find the terminal quadrant, then read the sign. Never guess a sign from “the angle is big.”",
            "<b>Check the range last.</b> A sine or cosine outside [−1, 1], or a secant or cosecant inside (−1, 1), means an error upstream. Stop and recheck rather than pressing on."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "If sin <i>x</i> = 3/5 and <i>x</i> lies in the second quadrant, find the other five functions.",
          "steps": [
            "cos<sup>2</sup><i>x</i> = 1 − (3/5)<sup>2</sup> = 16/25, so cos <i>x</i> = ±4/5.",
            "<i>x</i> is in QII, where cosine is <b>negative</b>: cos <i>x</i> = −4/5. That sign decision is the whole question.",
            "tan <i>x</i> = (3/5)/(−4/5) = −3/4, and the reciprocals follow."
          ],
          "ans": "cos x = −4/5 · tan x = −3/4 · cot x = −4/3 · sec x = −5/4 · csc x = 5/3"
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Find the value of sin(3π/2) + cos π − tan π.",
          "steps": [
            "Read the quadrantal values straight off the circle: at 3π/2 the point is (0, −1), so sin(3π/2) = −1.",
            "At π the point is (−1, 0), so cos π = −1 and tan π = 0/(−1) = 0.",
            "−1 + (−1) − 0."
          ],
          "ans": "−2"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "If cot θ = −4/3 and θ lies in the second quadrant, find (2 cos θ − 3 sin θ) / (4 sin θ − 9 cos θ).",
          "steps": [
            "In QII, sin θ > 0 and cos θ < 0, so cot θ is negative as given. The data is consistent, which is worth one line.",
            "|cos θ| : |sin θ| = 4 : 3 with hypotenuse 5, so cos θ = −4/5 and sin θ = 3/5.",
            "Numerator = −8/5 − 9/5 = −17/5. Denominator = 12/5 + 36/5 = 48/5."
          ],
          "ans": "−17/48"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "For non-zero reals <i>a</i>, <i>b</i>, find all real <i>x</i> with sin <i>x</i> = (<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>)/(2<i>ab</i>), and state the condition on <i>a</i>, <i>b</i>.",
          "steps": [
            "For <i>a</i>, <i>b</i> of the same sign, AM–GM gives <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> ≥ 2<i>ab</i>, so the right side is ≥ 1, with equality only when <i>a</i> = <i>b</i>.",
            "But sin <i>x</i> ≤ 1 for every real <i>x</i>. So a solution needs the right side to be exactly 1, forcing <i>a</i> = <i>b</i> and sin <i>x</i> = 1, that is <i>x</i> = π/2 + 2<i>n</i>π.",
            "Opposite signs push the right side to ≤ −1 by the same argument, forcing <i>a</i> = −<i>b</i> and sin <i>x</i> = −1. The bounded range turned a trigonometric equation into an inequality problem."
          ],
          "ans": "Solutions exist only when |a| = |b|, and then sin x = ±1"
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] If cos <i>x</i> = −1/2 and <i>x</i> is in the third quadrant, find sin <i>x</i> and tan <i>x</i>.",
              "a": "QIII: both are negative. sin x = −√(1 − 1/4) = −√3/2, so tan x = (−√3/2)/(−1/2) = √3."
            },
            {
              "q": "[CBSE] State the sign of each: (a) sin 200°, (b) tan 300°, (c) sec(−120°), (d) cot 100°.",
              "a": "(a) QIII, sine negative. (b) QIV, tangent negative. (c) −120° ≡ 240°, QIII, cosine negative so secant negative. (d) QII, cotangent negative."
            },
            {
              "q": "[CBSE] Find cos(π/2) + sin π − cos 2π + sin(3π/2).",
              "a": "0 + 0 − 1 + (−1) = −2."
            },
            {
              "q": "[JEE Main] If sec <i>x</i> = 13/12 and <i>x</i> is in the fourth quadrant, find the other five functions.",
              "a": "QIV: cos +, sin −. cos x = 12/13, sin x = −5/13, tan x = −5/12, cot x = −12/5, csc x = −13/5."
            },
            {
              "q": "[JEE Main] Show that tan <i>x</i> = 4/3 cannot hold with sin <i>x</i> > 0 and cos <i>x</i> < 0, and name the only quadrant where tan <i>x</i> = 4/3 with cos <i>x</i> < 0.",
              "a": "tan x > 0 needs sine and cosine to share a sign, so QI or QIII. But sin x > 0 with cos x < 0 is QII, where tan < 0, a contradiction. With cos x < 0 the only survivor is QIII."
            }
          ]
        },
        {
          "t": "mcq",
          "q": "If tan θ = 5/12 and θ lies in the third quadrant, then sin θ =",
          "correct": 1,
          "opts": [
            {
              "label": "5/13",
              "nudge": "The 5-12-13 triangle is right, but the quadrant sign was dropped: sine is negative in QIII."
            },
            {
              "label": "−5/13",
              "nudge": null
            },
            {
              "label": "−12/13",
              "nudge": "That is cos θ, using 12 as the opposite side instead of the adjacent one."
            },
            {
              "label": "12/13",
              "nudge": "Both errors at once: the cosine value and the missing QIII sign."
            }
          ],
          "solution": "Reference triangle 5-12-13. In QIII both sine and cosine are negative, so sin θ = −5/13."
        },
        {
          "t": "mcq",
          "q": "Which of these is impossible for every real θ?",
          "correct": 1,
          "opts": [
            {
              "label": "sin θ = −0.9",
              "nudge": "Perfectly possible, since |sin θ| ≤ 1 and 0.9 ≤ 1."
            },
            {
              "label": "sec θ = 0.5",
              "nudge": null
            },
            {
              "label": "tan θ = 1000",
              "nudge": "Tangent is unbounded, it takes every real value on every branch."
            },
            {
              "label": "cos θ = 0",
              "nudge": "cos(π/2) = 0, one of the quadrantal values."
            }
          ],
          "solution": "sec θ = 1/cos θ with |cos θ| ≤ 1, so |sec θ| ≥ 1 always. Secant and cosecant never enter (−1, 1)."
        },
        {
          "t": "mcq",
          "q": "cos θ is positive and sin θ is negative. The angle θ lies in:",
          "correct": 3,
          "opts": [
            {
              "label": "Quadrant I",
              "nudge": "Both are positive in QI, which fails the sine condition."
            },
            {
              "label": "Quadrant II",
              "nudge": "Cosine is negative in QII, which fails the cosine condition."
            },
            {
              "label": "Quadrant III",
              "nudge": "Both are negative in QIII, so the cosine condition fails."
            },
            {
              "label": "Quadrant IV",
              "nudge": null
            }
          ],
          "solution": "Cosine positive is the right half, QI and QIV. Sine negative is the bottom half, QIII and QIV. The intersection is QIV."
        },
        {
          "t": "mcq",
          "q": "The value of sin<sup>2</sup>30° + sin<sup>2</sup>60° is:",
          "correct": 1,
          "opts": [
            {
              "label": "1/2",
              "nudge": "That is 1/4 + 1/4, taking sin 60° to be 1/2 as well. The two values are different."
            },
            {
              "label": "1",
              "nudge": null
            },
            {
              "label": "3/2",
              "nudge": "That is 3/4 + 3/4, taking sin 30° to be √3/2. The smaller angle must take the smaller sine."
            },
            {
              "label": "2",
              "nudge": "This double-counts, as though each square were 1 on its own."
            }
          ],
          "solution": "sin 60° = cos 30°, so the sum is sin²30° + cos²30° = 1. Spotting the complementary pair beats grinding out values."
        },
        {
          "t": "mistakes",
          "items": [
            "Defaulting a square root to <b>+</b>. cos <i>x</i> = ±√(1 − sin<sup>2</sup><i>x</i>), and only the quadrant decides which. Highest-yield error in this topic.",
            "Letting sin or cos leave <b>[−1, 1]</b>, or letting sec or csc into <b>(−1, 1)</b>. Either one signals a slip further back.",
            "Mis-pairing the reciprocals. <b>sec = 1/cos</b> and <b>csc = 1/sin</b>, despite the “co”. Read the third letter.",
            "Swapping the Pythagorean forms. It is <b>1 + tan<sup>2</sup> = sec<sup>2</sup></b> and <b>1 + cot<sup>2</sup> = csc<sup>2</sup></b>, never crossed over.",
            "Treating tan(π/2) or csc 0 as ∞ or 0. They are <b>undefined</b>: the angle is outside the domain, which is a different statement."
          ]
        },
        {
          "t": "protip",
          "html": "answer every “find the other five” question in two visible stages: magnitudes from the identity, then signs from the quadrant. writing the three signs down before you compute anything stops you rationalising the wrong one once a number is staring at you."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "cos θ = x-coordinate · sin θ = y-coordinate",
              "note": "on the unit circle, radius 1"
            },
            {
              "f": "sin = y/r · cos = x/r · tan = y/x, r > 0",
              "note": "so the quadrant fixes every sign"
            },
            {
              "f": "sin²θ + cos²θ = 1 · 1 + tan² = sec² · 1 + cot² = csc²",
              "note": "one circle, three identities"
            },
            {
              "f": "All Silver Tea Cups",
              "note": "QI all · QII sin · QIII tan · QIV cos"
            },
            {
              "f": "sin, cos ∈ [−1, 1] · sec, csc outside (−1, 1)",
              "note": "tan and cot sweep all of ℝ"
            }
          ],
          "aids": [
            "“magnitude from the identity, sign from the quadrant”",
            "“cosec goes with sine, read the third letter”"
          ]
        }
      ]
    },
    {
      "n": "03",
      "title": "Standard Values and Allied Angles",
      "chip": "03 REDUCE",
      "kalam": "odd ninety flips, even ninety doesn’t",
      "blocks": [
        {
          "t": "p",
          "html": "The values sin 30° = 1/2, sin 45° = 1/√2 and sin 60° = √3/2 are not magic. They are side ratios in two triangles you already know: the 45-45-90, which is half a square, and the 30-60-90, which is half an equilateral triangle. Every standard value is one of those ratios, read off and placed on the unit circle."
        },
        {
          "t": "p",
          "html": "Once you can evaluate an acute angle θ, the unit circle hands you 90° ± θ, 180° ± θ, 270° ± θ and 360° ± θ for free, because those points are reflections and rotations of the point at θ. Think of a Ferris wheel: a cabin at θ has a mirror twin straight across the vertical axis at 180° − θ, at the same height on the opposite side, and another straight below at 360° − θ. Same magnitudes, only the signs move."
        },
        {
          "t": "p",
          "html": "So you never compute an allied angle afresh. You <b>reduce it back to θ</b> with a sign and, sometimes, a swap of function. There are exactly five standard angles to memorise and one reduction rule to master, and together they evaluate any angle whatsoever."
        },
        {
          "t": "think",
          "html": "an allied angle is just a mirror position of a standard one. the size of the answer is already decided, all you are choosing is a sign and whether sine and cosine trade places."
        },
        {
          "t": "defgrid",
          "title": "Standard values, non-negotiable",
          "rows": [
            {
              "k": "sin θ",
              "v": "0° 0 · 30° 1/2 · 45° 1/√2 · 60° √3/2 · 90° 1"
            },
            {
              "k": "cos θ",
              "v": "the same list <b>reversed</b>: 1, √3/2, 1/√2, 1/2, 0"
            },
            {
              "k": "tan θ",
              "v": "0 · 1/√3 · 1 · √3 · undefined"
            },
            {
              "k": "cot θ",
              "v": "undefined · √3 · 1 · 1/√3 · 0"
            },
            {
              "k": "sec θ",
              "v": "1 · 2/√3 · √2 · 2 · undefined"
            },
            {
              "k": "csc θ",
              "v": "undefined · 2 · √2 · 2/√3 · 1"
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "THE SINE ROW, AS A PATTERN",
          "tag": "so you never guess a value",
          "main": "sin 0°, 30°, 45°, 60°, 90° = √0/2, √1/2, √2/2, √3/2, √4/2",
          "legend": [
            "the cosine row is the same list read backwards, and tan = sin / cos fills itself in",
            "the source triangles: legs 1, 1 with hypotenuse √2 for 45°, and sides 1, √3, 2 for 30° and 60°"
          ],
          "note": "√2/2 is 1/√2 and √4/2 is 1, so the pattern reproduces the familiar entries exactly. Write the pattern, then simplify, rather than recalling five unrelated surds."
        },
        {
          "t": "def",
          "term": "Even and odd",
          "html": "Replacing θ by −θ reflects the point across the <i>x</i>-axis: the across-coordinate is untouched, the height flips. So <b>cos(−θ) = cos θ</b> and <b>sec(−θ) = sec θ</b> are even, while sin, csc, tan and cot are all <b>odd</b> and pick up a minus sign. Only cosine and secant are even, so pulling a minus out of cos(−θ) is simply wrong."
        },
        {
          "t": "formula",
          "kicker": "THE ONE REDUCTION RULE",
          "tag": "it replaces eight formulas",
          "main": "f(n · 90° ± θ)",
          "legend": [
            "n odd (90°, 270°): the function changes to its co-function, sin ↔ cos, tan ↔ cot, sec ↔ csc",
            "n even (180°, 360°): the function stays exactly as it was",
            "sign: find the quadrant the whole angle lands in for a small θ, and give the answer the sign the original function carries there"
          ],
          "note": "Reduce anything beyond one turn modulo 360° (or 2π) before applying the rule, and clear a negative angle first with the even/odd rule."
        },
        {
          "t": "defgrid",
          "title": "The table the rule generates",
          "rows": [
            {
              "k": "90° − θ",
              "v": "sin → cos θ · cos → sin θ · tan → cot θ"
            },
            {
              "k": "90° + θ",
              "v": "sin → cos θ · cos → −sin θ · tan → −cot θ"
            },
            {
              "k": "180° − θ",
              "v": "sin → sin θ · cos → −cos θ · tan → −tan θ"
            },
            {
              "k": "180° + θ",
              "v": "sin → −sin θ · cos → −cos θ · tan → tan θ"
            },
            {
              "k": "270° + θ",
              "v": "sin → −cos θ · cos → sin θ · tan → −cot θ"
            },
            {
              "k": "360° − θ",
              "v": "sin → −sin θ · cos → cos θ · tan → −tan θ"
            }
          ]
        },
        {
          "t": "p",
          "html": "The one row left out follows the same recipe. For 270° − θ, <i>n</i> = 3 is odd so the function swaps, and the angle lands in QIII: sin(270° − θ) = −cos θ, cos(270° − θ) = −sin θ, and tan(270° − θ) = cot θ. There is nothing to memorise in that row that the rule does not already give you, which is the point of learning the rule instead of the table."
        },
        {
          "t": "diagram",
          "kind": "unitcircle",
          "kicker": "DIAGRAM · THE FOUR MIRROR POSITIONS OF 60°",
          "mathChips": true,
          "chips": ["θ", "180° − θ", "180° + θ", "360° − θ"],
          "captions": [
            "The original point, at θ = 60°. Its height is sin 60° = √3/2 and its across-coordinate is cos 60° = 1/2. Every other frame is this same point, moved by a mirror.",
            "120° = 180° − 60°, the reflection across the vertical axis. The height is unchanged, so sin(180° − θ) = sin θ. The across-coordinate has flipped, so cos(180° − θ) = −cos θ.",
            "240° = 180° + 60°, the reflection through the origin. Both coordinates flip, so sine and cosine both change sign, and their ratio, the tangent, does not change at all.",
            "300° = 360° − 60°, the reflection across the horizontal axis. The across-coordinate survives and the height flips: cos(360° − θ) = cos θ and sin(360° − θ) = −sin θ. This is also the picture of cosine being even and sine being odd."
          ],
          "frames": [
            { "angle": 60, "show": ["sin", "cos"] },
            { "angle": 120, "show": ["sin", "cos"] },
            { "angle": 240, "show": ["sin", "cos"] },
            { "angle": 300, "show": ["sin", "cos"] }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY ODD MULTIPLES OF 90° SWAP THE FUNCTION, TAP A LINE",
          "steps": [
            {
              "eq": "P at θ is (cos θ, sin θ)",
              "why": "The starting point on the unit circle: the across-coordinate is the cosine, the up-coordinate is the sine. Every allied angle is this point moved."
            },
            {
              "eq": "180° − θ: (−cos θ, sin θ)",
              "why": "A reflection in the vertical axis negates the across-coordinate and leaves the height alone. So cos(180° − θ) = −cos θ and sin(180° − θ) = sin θ: the function is unchanged, only a sign moved."
            },
            {
              "eq": "−θ: (cos θ, −sin θ)",
              "why": "The mirror in the horizontal axis keeps the across-coordinate and flips the height. That is exactly the statement that cosine is even and sine is odd, with tan(−θ) = −tan θ following by division."
            },
            {
              "eq": "90° + θ: (−sin θ, cos θ)",
              "why": "A quarter turn sends the up-coordinate into the across slot and the negated across-coordinate into the up slot. The two coordinates have exchanged roles, which is precisely why cos(90° + θ) = −sin θ and sin(90° + θ) = cos θ."
            },
            {
              "eq": "180°, 360° lie on the horizontal axis; 90°, 270° on the vertical",
              "why": "Even multiples of 90° preserve the horizontal and vertical roles, so the function is unchanged. Odd multiples exchange them, so the function becomes its co-function. That single geometric fact is the entire reduction rule, and the eight-row table is just its output."
            }
          ]
        },
        {
          "t": "proc",
          "title": "Reducing any angle at all",
          "steps": [
            "<b>Bring it inside one turn.</b> Add or subtract multiples of 360° (or 2π) until the angle sits in [0°, 360°). cos 765° becomes cos 45°.",
            "<b>Write it as <i>n</i> · 90° ± θ</b> with θ acute. Two decompositions usually exist, 135° = 90° + 45° = 180° − 45°, and either works, so use them to cross-check each other.",
            "<b>Decide the function.</b> <i>n</i> odd means swap to the co-function; <i>n</i> even means keep it.",
            "<b>Decide the sign.</b> See which quadrant the whole angle lands in and give the answer the sign the <i>original</i> function carries there.",
            "<b>Clear a negative angle first</b> with the even/odd rule: cos(−300°) = cos 300°, but sin(−300°) = −sin 300°."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Evaluate sin 210°.",
          "steps": [
            "210° = 180° + 30°, so <i>n</i> = 2 is even and the function stays sine.",
            "180° + 30° lands in QIII, where sine is negative."
          ],
          "ans": "sin 210° = −sin 30° = −1/2"
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Evaluate cos(−300°) and tan 135°.",
          "steps": [
            "Cosine is even, so cos(−300°) = cos 300°. Then 300° = 360° − 60° lies in QIV where cosine is positive: cos 300° = cos 60° = 1/2.",
            "135° = 90° + 45°: <i>n</i> = 1 is odd so tan swaps to cot, and QII makes tangent negative, giving −cot 45° = −1.",
            "Cross-check with the other decomposition, 135° = 180° − 45°, which gives −tan 45° = −1. Both routes agree, which is the point of having two."
          ],
          "ans": "cos(−300°) = 1/2 · tan 135° = −1"
        },
        {
          "t": "ex",
          "tag": "NEET PATTERN",
          "q": "Evaluate sin 1230°.",
          "steps": [
            "Subtract full turns: 1230° − 3(360°) = 1230° − 1080° = 150°.",
            "150° = 180° − 30°, in QII, where sine is positive and the function is unchanged."
          ],
          "ans": "sin 1230° = sin 30° = 1/2"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "Simplify [cos(90° + θ) sec(−θ) tan(180° − θ)] ÷ [sec(360° − θ) sin(180° + θ) cot(90° − θ)].",
          "steps": [
            "Numerator: cos(90° + θ) = −sin θ, sec(−θ) = sec θ, tan(180° − θ) = −tan θ. Product = sin θ sec θ tan θ = tan<sup>2</sup>θ.",
            "Denominator: sec(360° − θ) = sec θ, sin(180° + θ) = −sin θ, cot(90° − θ) = tan θ. Product = −tan<sup>2</sup>θ.",
            "Nothing was expanded anywhere. Every term collapsed by the rule alone, which is exactly what the question is testing."
          ],
          "ans": "−1"
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Evaluate (a) cos 120°, (b) tan 240°, (c) sin(−45°), (d) sec 300°.",
              "a": "(a) 180° − 60°, QII, cosine negative: −1/2. (b) 180° + 60°, QIII, tangent positive: √3. (c) sine is odd: −sin 45° = −1/√2. (d) 360° − 60°, QIV, secant positive: 2."
            },
            {
              "q": "[CBSE] Evaluate cos 765°.",
              "a": "765° − 2(360°) = 45°, so cos 765° = cos 45° = 1/√2."
            },
            {
              "q": "[CBSE] Find sin 150° cos 120° + cos 330° sin 660°.",
              "a": "sin 150° = 1/2, cos 120° = −1/2, cos 330° = √3/2, sin 660° = sin 300° = −√3/2. Total = −1/4 − 3/4 = −1."
            },
            {
              "q": "[JEE Main] Simplify sin(180° + θ) cos(90° − θ) ÷ [cos(180° − θ) sin(270° − θ)].",
              "a": "(−sin θ)(sin θ) ÷ [(−cos θ)(−cos θ)] = −tan²θ."
            },
            {
              "q": "[JEE Main] If cos θ = 3/5 with θ in the first quadrant, find cos(180° + θ) and sin(90° + θ).",
              "a": "cos(180° + θ) = −cos θ = −3/5, and sin(90° + θ) = cos θ = 3/5."
            }
          ]
        },
        {
          "t": "mcq",
          "q": "sin 120° =",
          "correct": 1,
          "opts": [
            {
              "label": "−√3/2",
              "nudge": "The magnitude is right but QII sine is positive, not negative."
            },
            {
              "label": "√3/2",
              "nudge": null
            },
            {
              "label": "−1/2",
              "nudge": "This uses 30° as the reference angle. Since 120° = 180° − 60°, the reference is 60°."
            },
            {
              "label": "1/2",
              "nudge": "Right sign, wrong reference angle: you need the sine of 60°, not of 30°."
            }
          ],
          "solution": "120° = 180° − 60°, n = 2 is even so the function stays sine, and QII sine is positive: +sin 60° = √3/2."
        },
        {
          "t": "mcq",
          "q": "cos(90° + θ) =",
          "correct": 1,
          "opts": [
            {
              "label": "sin θ",
              "nudge": "The co-function swap is right but the sign was dropped: 90° + θ lies in QII, where cosine is negative."
            },
            {
              "label": "−sin θ",
              "nudge": null
            },
            {
              "label": "cos θ",
              "nudge": "n = 1 is odd, so the function must swap to its co-function. Keeping cosine is the classic miss."
            },
            {
              "label": "−cos θ",
              "nudge": "The sign is right but the function never swapped. Odd multiples of 90° always swap."
            }
          ],
          "solution": "n = 1 is odd, so cos becomes sin, and 90° + θ lies in QII where cosine is negative. Hence −sin θ."
        },
        {
          "t": "mcq",
          "q": "Which trigonometric functions are even?",
          "correct": 2,
          "opts": [
            {
              "label": "sin and csc",
              "nudge": "These are odd: sin(−θ) = −sin θ, and the reciprocal inherits it."
            },
            {
              "label": "tan and cot",
              "nudge": "Also odd, both flip sign with the angle because sine does and cosine does not."
            },
            {
              "label": "cos and sec",
              "nudge": null
            },
            {
              "label": "all six",
              "nudge": "Only two of the six are even. Reflecting across the x-axis flips the height, which the other four depend on."
            }
          ],
          "solution": "Only cosine and secant satisfy f(−θ) = f(θ), because the reflection in the x-axis leaves the across-coordinate untouched."
        },
        {
          "t": "mcq",
          "q": "tan 225° =",
          "correct": 1,
          "opts": [
            {
              "label": "−1",
              "nudge": "225° = 180° + 45° lies in QIII, where tangent is positive, not negative."
            },
            {
              "label": "1",
              "nudge": null
            },
            {
              "label": "−√3",
              "nudge": "That is the tangent of 120°, a different reference angle entirely."
            },
            {
              "label": "1/√3",
              "nudge": "That is tan 30°. The reference angle here is 45°."
            }
          ],
          "solution": "225° = 180° + 45°, n even so tangent stays, and QIII tangent is positive: +tan 45° = 1."
        },
        {
          "t": "mistakes",
          "items": [
            "Taking the sign from θ instead of from the <b>whole allied angle</b>. Land the full angle in a quadrant first, then apply ASTC to the original function.",
            "Forgetting the co-function swap at <b>90° and 270°</b>. Odd multiples of 90° flip sin ↔ cos; 180° and 360° never do.",
            "Guessing a standard value. Use the √0, √1, √2, √3, √4 over 2 pattern for sine and read it backwards for cosine.",
            "Pulling a minus out of cos(−θ). <b>Only cosine and secant are even</b>, so cos(−θ) = cos θ with no sign to extract.",
            "Applying the rule before reducing. Beyond 360°, or below 0°, add or subtract whole turns first."
          ]
        },
        {
          "t": "protip",
          "html": "long allied-angle products almost always collapse to ±1. if yours does not, you have a sign wrong somewhere, so go back and recheck the quadrant of each factor rather than expanding anything."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "sine row: √0/2, √1/2, √2/2, √3/2, √4/2",
              "note": "cosine is the same list reversed"
            },
            {
              "f": "even: cos, sec · odd: sin, csc, tan, cot",
              "note": "only two of the six are even"
            },
            {
              "f": "f(n · 90° ± θ): n odd swaps the function",
              "note": "n even leaves it alone"
            },
            {
              "f": "sign from the quadrant of the whole angle",
              "note": "applied to the original function"
            },
            {
              "f": "sin(180° − θ) = sin θ · cos(90° + θ) = −sin θ",
              "note": "the two most-asked rows"
            }
          ],
          "aids": [
            "“odd ninety flips, even ninety doesn’t”",
            "“reduce past 360 first, then read the quadrant”"
          ]
        }
      ]
    },
    {
      "n": "04",
      "title": "Graphs, Periodicity and Range",
      "chip": "04 GRAPHS",
      "kalam": "divide for the period, never multiply",
      "blocks": [
        {
          "t": "p",
          "html": "A graph turns trigonometry from algebra you compute into behaviour you can see. At a glance it shows the domain, the range, where the function is positive or negative, where it climbs or falls, and how often it repeats. Draw <i>y</i> = sin <i>x</i> and the curve is literally the unit circle unrolled: walk anticlockwise around the rim and plot your height against the distance walked. The height rises to 1 at π/2, returns to 0 at π, dips to −1 at 3π/2, comes back to 0 at 2π, and then the whole pattern repeats, because you have started another lap."
        },
        {
          "t": "p",
          "html": "That repetition is <b>periodicity</b>, and it is what makes trigonometry the language of every repeating phenomenon in Physics. The sea level at a harbour rises and falls on a smooth swell with a period of about twelve hours; the voltage in your wall socket is a sine wave repeating fifty times a second. “How high?” is the amplitude, “how often?” is the period. Reading a tide chart is reading a sine graph."
        },
        {
          "t": "p",
          "html": "Graphs also give the fastest route to two questions that algebra answers slowly. <b>How many solutions does this equation have?</b> Draw both sides and count crossings. <b>Which <i>x</i> satisfy this inequality?</b> Draw the horizontal cut line and shade. An equation returns isolated points; an inequality returns <b>bands</b>, and the bands repeat with exactly the function’s own period."
        },
        {
          "t": "think",
          "html": "the graph is the circle unrolled. every sign and range fact you already know is now a shape, which is why counting on a picture beats solving on paper."
        },
        {
          "t": "def",
          "term": "Periodic function",
          "html": "<i>f</i> is periodic with period <i>T</i> if <i>f</i>(<i>x</i> + <i>T</i>) = <i>f</i>(<i>x</i>) for every <i>x</i> in the domain, and <i>T</i> is the <b>smallest</b> such positive number. Sine, cosine, secant and cosecant have base period 2π; tangent and cotangent have base period π, because a line through the origin points the same way after half a turn."
        },
        {
          "t": "formula",
          "kicker": "PERIODS AND THE SCALING RULE",
          "tag": "divide, never multiply",
          "main": "period of f(bx + c) = base / |b|",
          "legend": [
            "base 2π for sin, cos, sec, csc · base π for tan, cot",
            "|sin x|, |cos x|, sin²x and cos²x all have period π, since sin²x = (1 − cos 2x)/2",
            "the period of a sum is the LCM of the parts, and can be shorter than either"
          ],
          "note": "The constant c only shifts the graph sideways, it never changes the period. A bigger |b| squeezes the wave, so it gives a shorter period, which is the whole reason you divide."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "DIAGRAM · THE CIRCLE, UNROLLED",
          "mathChips": true,
          "chips": ["sin x", "cos x", "both", "sin x ≥ ½"],
          "captions": [
            "One period of the sine wave, with one more on each side. It rises to 1 at π/2, returns to 0 at π, dips to −1 at 3π/2 and closes the lap at 2π. Then it repeats, forever, and that is periodicity.",
            "Cosine is the same wave started from the top, because it is the across-coordinate rather than the height. It peaks at every even multiple of π and is symmetric about the y-axis, which is what being even looks like.",
            "Laid over each other the shift becomes visible: cos x = sin(x + π/2). One curve is the other slid left by a quarter turn, which is why both have period 2π and identical range.",
            "An inequality is a band, not a point. The cut line y = 1/2 meets the sine curve at π/6 and 5π/6, and the wave sits on or above the line between them. Every multiple of 2π repeats the band."
          ],
          "frames": [
            {
              "x": [-6.6, 6.6],
              "y": [-1.5, 1.5],
              "piTicks": true,
              "curves": [{ "c": "sin" }]
            },
            {
              "x": [-6.6, 6.6],
              "y": [-1.5, 1.5],
              "piTicks": true,
              "curves": [{ "c": "cos" }]
            },
            {
              "x": [-6.6, 6.6],
              "y": [-1.5, 1.5],
              "piTicks": true,
              "curves": [{ "c": "sin" }, { "c": "cos", "dash": true }]
            },
            {
              "x": [0, 6.6],
              "y": [-1.5, 1.5],
              "piTicks": true,
              "curves": [{ "c": "sin" }, { "c": "line", "m": 0, "k": 0.5, "dash": true }],
              "bands": [{ "x0": 0.5236, "x1": 2.618 }],
              "points": [
                { "x": 0.5236, "y": 0.5, "label": "π/6" },
                { "x": 2.618, "y": 0.5, "label": "5π/6" }
              ]
            }
          ]
        },
        {
          "t": "defgrid",
          "title": "What each graph looks like",
          "rows": [
            {
              "k": "y = sin x",
              "v": "range [−1, 1], odd, zero at <i>n</i>π, maximum +1 at π/2 + 2<i>n</i>π"
            },
            {
              "k": "y = cos x",
              "v": "range [−1, 1], even, maximum +1 at 2<i>n</i>π, zero at (2<i>n</i> + 1)π/2"
            },
            {
              "k": "y = tan x",
              "v": "range ℝ, increasing branches, asymptotes at (2<i>n</i> + 1)π/2"
            },
            {
              "k": "y = cot x",
              "v": "range ℝ, decreasing branches, asymptotes at <i>n</i>π"
            },
            {
              "k": "y = sec x",
              "v": "U-shapes sitting in the caps of the cosine wave, asymptotes at (2<i>n</i> + 1)π/2"
            },
            {
              "k": "y = csc x",
              "v": "U-shapes in the caps of the sine wave, asymptotes at <i>n</i>π"
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "DIAGRAM · TANGENT AND ITS ASYMPTOTES",
          "mathChips": true,
          "chips": ["tan x", "where cos x = 0", "one period"],
          "captions": [
            "Tangent is not a wave. It climbs from far below to far above on each branch, passes through every real value exactly once per branch, and so has no maximum and no minimum at all.",
            "The breaks sit precisely where cos x = 0, at odd multiples of π/2, because tan x = sin x / cos x. Those dashed lines are asymptotes, not zeros: tangent is undefined there, which is a different statement from infinite.",
            "The shaded branch is one whole period. Tangent repeats after π rather than 2π, because adding π flips the signs of both sine and cosine and the two minus signs cancel in the ratio."
          ],
          "frames": [
            {
              "x": [-5, 5],
              "y": [-4, 4],
              "piTicks": true,
              "curves": [{ "c": "tan" }]
            },
            {
              "x": [-5, 5],
              "y": [-4, 4],
              "piTicks": true,
              "curves": [{ "c": "tan" }],
              "segments": [
                { "from": [1.5708, -4], "to": [1.5708, 4], "dash": true, "soft": true },
                { "from": [-1.5708, -4], "to": [-1.5708, 4], "dash": true, "soft": true },
                { "from": [4.7124, -4], "to": [4.7124, 4], "dash": true, "soft": true },
                { "from": [-4.7124, -4], "to": [-4.7124, 4], "dash": true, "soft": true }
              ]
            },
            {
              "x": [-5, 5],
              "y": [-4, 4],
              "piTicks": true,
              "curves": [{ "c": "tan" }],
              "bands": [{ "x0": -1.5708, "x1": 1.5708 }]
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "TRANSFORMING y = a sin(bx + c) + d",
          "tag": "identical for cosine",
          "main": "amplitude |a| · period 2π/|b| · phase −c/b · shift d",
          "legend": [
            "range = [d − |a|, d + |a|], the whole wave lifted bodily by d",
            "a negative a flips the graph vertically but changes neither the amplitude nor the period"
          ],
          "note": "For a sin x + b cos x the amplitude is √(a² + b²), so the range is [−√(a² + b²), √(a² + b²)] and the maximum of a sin x + b cos x + c is c + √(a² + b²). Both bounds are actually reached."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "DIAGRAM · WHAT a, b AND d ACTUALLY DO",
          "mathChips": true,
          "chips": ["sin x", "2 sin x", "sin 2x", "sin x + 1"],
          "captions": [
            "The reference wave: amplitude 1, period 2π, centred on the x-axis. The next three frames change one parameter each and keep this one in grey underneath.",
            "a = 2 stretches it vertically. The amplitude doubles and the range becomes [−2, 2], but the wave still repeats every 2π. Amplitude and period are independent of each other.",
            "b = 2 squeezes it horizontally. Two full cycles now fit where one did, so the period is 2π/2 = π. Bigger b means shorter period, which is why you divide and never multiply.",
            "d = 1 lifts the whole wave. The shape is untouched and the range moves bodily to [0, 2]: amplitude still 1, period still 2π, centre line now y = 1."
          ],
          "frames": [
            {
              "x": [-6.6, 6.6],
              "y": [-2.4, 2.6],
              "piTicks": true,
              "curves": [{ "c": "sin" }]
            },
            {
              "x": [-6.6, 6.6],
              "y": [-2.4, 2.6],
              "piTicks": true,
              "curves": [{ "c": "sin", "a": 2 }, { "c": "sin", "soft": true, "dash": true }]
            },
            {
              "x": [-6.6, 6.6],
              "y": [-2.4, 2.6],
              "piTicks": true,
              "curves": [{ "c": "sin", "b": 2 }, { "c": "sin", "soft": true, "dash": true }]
            },
            {
              "x": [-6.6, 6.6],
              "y": [-2.4, 2.6],
              "piTicks": true,
              "curves": [{ "c": "sin", "d": 1 }, { "c": "sin", "soft": true, "dash": true }]
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "READING AN INEQUALITY OFF THE CURVE",
          "tag": "n ∈ ℤ throughout",
          "main": "sin x > k ⟺ x ∈ (2nπ + α, 2nπ + π − α)",
          "legend": [
            "with α chosen so that k = sin α and −π/2 ≤ α ≤ π/2",
            "cos x > k ⟺ x ∈ (2nπ − β, 2nπ + β), where k = cos β and 0 ≤ β ≤ π",
            "tan x > k ⟺ x ∈ (nπ + γ, nπ + π/2), where k = tan γ. Period π here, never 2π"
          ],
          "note": "Close the brackets for ≥ and ≤. If k ≥ 1 then sin x > k is impossible, and if k < −1 every real x works, so test the boundary cases before quoting any formula."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHERE THE PERIODS COME FROM, TAP A LINE",
          "steps": [
            {
              "eq": "sin(x + 2π) = sin x, and no smaller shift works",
              "why": "A point on the unit circle returns to the same place only after a whole turn, so its height repeats only after 2π. Cosine is the other coordinate of the same point, so it repeats on the same schedule."
            },
            {
              "eq": "sin(x + π) = −sin x, cos(x + π) = −cos x",
              "why": "Adding half a turn sends the point to the diametrically opposite one, so both coordinates flip sign. Neither sine nor cosine has repeated yet, which is why their period is not π."
            },
            {
              "eq": "tan(x + π) = (−sin x)/(−cos x) = tan x",
              "why": "In the ratio the two minus signs cancel, so tangent has already repeated after half a turn. That is why tan and cot have base period π while the other four have 2π."
            },
            {
              "eq": "sin(bx) completes a cycle when bx grows by 2π",
              "why": "The sine only ever sees its own argument. One full cycle of the inside means one full cycle of the outside, whatever b is doing."
            },
            {
              "eq": "so x grows by 2π/|b|: period = 2π/|b|",
              "why": "Divide, never multiply. A bigger |b| squeezes the wave into a shorter period, and the absolute value is there because a negative b reflects the graph without changing how often it repeats. The constant c only slides it, so it drops out entirely."
            }
          ]
        },
        {
          "t": "proc",
          "title": "Reading a graph question",
          "steps": [
            "<b>Period.</b> Identify the base (2π, or π for tan and cot) and divide by |<i>b</i>|. For a sum, take the LCM of the parts, then check whether a symmetry shrinks it further, as it does for |sin <i>x</i>| + |cos <i>x</i>|.",
            "<b>Amplitude, shift and range.</b> Read |<i>a</i>| and <i>d</i> straight off, then write the range as [<i>d</i> − |<i>a</i>|, <i>d</i> + |<i>a</i>|]. For <i>a</i> sin <i>x</i> + <i>b</i> cos <i>x</i>, the amplitude is √(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>).",
            "<b>Maximum or minimum of a quadratic in sin <i>x</i>.</b> Put <i>t</i> = sin <i>x</i> with <i>t</i> ∈ [−1, 1], then check <i>t</i> = −1, <i>t</i> = 1 and the vertex if it lands inside. There is never anything else to test.",
            "<b>Number of solutions.</b> Graph both sides and count crossings, which is far faster than solving.",
            "<b>Inequality.</b> Draw the horizontal cut line, find the two boundary crossings in one period, shade between them, then slide the band by the period. Decide open or closed brackets from whether the inequality is strict."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Find the period of (a) sin 3<i>x</i>, (b) tan 2<i>x</i>, (c) cos(<i>x</i>/2). Then find the range and period of <i>f</i>(<i>x</i>) = 3 + 2 sin <i>x</i>.",
          "steps": [
            "(a) 2π/3. (b) tangent’s base is π, so π/2. (c) 2π ÷ (1/2) = 4π.",
            "For 3 + 2 sin <i>x</i>: amplitude 2 about a centre of 3, so the range is [3 − 2, 3 + 2].",
            "The <i>x</i> is unscaled, so the period is unchanged at 2π. A vertical shift never touches the period."
          ],
          "ans": "2π/3 · π/2 · 4π · range [1, 5] with period 2π"
        },
        {
          "t": "ex",
          "tag": "NEET PATTERN",
          "q": "State the amplitude and period of <i>y</i> = −4 cos(<i>x</i>/3).",
          "steps": [
            "Amplitude = |−4| = 4. The minus flips the graph vertically, but amplitude is a size, not a sign.",
            "Period = 2π ÷ (1/3) = 6π."
          ],
          "ans": "amplitude 4 · period 6π"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Find the period of (a) <i>f</i>(<i>x</i>) = |sin <i>x</i>| + |cos <i>x</i>|, (b) <i>g</i>(<i>x</i>) = sin<sup>2</sup><i>x</i>.",
          "steps": [
            "(a) Each of |sin <i>x</i>| and |cos <i>x</i>| has period π, so the LCM suggests π. But |cos <i>x</i>| = |sin(<i>x</i> + π/2)|, so a shift of π/2 simply swaps the two terms and leaves the sum alone.",
            "Hence <i>f</i>(<i>x</i> + π/2) = <i>f</i>(<i>x</i>), and no smaller shift works: <i>T</i> = π/2. The sum has a shorter period than either part, which is why LCM must be checked rather than assumed.",
            "(b) sin<sup>2</sup><i>x</i> = (1 − cos 2<i>x</i>)/2, and cos 2<i>x</i> has period 2π/2 = π."
          ],
          "ans": "(a) π/2 · (b) π, not 2π"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "Solve sin <i>x</i> ≥ 1/2 on [0, 2π] and give the general solution. Then count the solutions of |sin <i>x</i>| = |cos <i>x</i>| on [0, 2π].",
          "steps": [
            "The cut line <i>y</i> = 1/2 meets the sine curve at π/6 and 5π/6, and the wave sits on or above it between them: <i>x</i> ∈ [π/6, 5π/6]. Closed brackets, because the inequality is not strict.",
            "By periodicity the general answer is <i>x</i> ∈ [2<i>n</i>π + π/6, 2<i>n</i>π + 5π/6], <i>n</i> ∈ ℤ.",
            "|sin <i>x</i>| = |cos <i>x</i>| ⟺ |tan <i>x</i>| = 1, which is where the two tent-shaped graphs cross: <i>x</i> = π/4, 3π/4, 5π/4, 7π/4."
          ],
          "ans": "[π/6, 5π/6], generally [2nπ + π/6, 2nπ + 5π/6] · 4 solutions"
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Find the period of (a) cos 4<i>x</i>, (b) cot(<i>x</i>/2), (c) sin(2<i>x</i> + 1).",
              "a": "(a) 2π/4 = π/2. (b) π ÷ (1/2) = 2π. (c) 2π/2 = π; the +1 shifts the graph but does not scale it."
            },
            {
              "q": "[CBSE] State the domain and range of <i>y</i> = 2 sec <i>x</i>.",
              "a": "Domain x ≠ (2n + 1)π/2. The secant gap scales by 2, so the range is (−∞, −2] ∪ [2, ∞)."
            },
            {
              "q": "[JEE Main] Find the amplitude, period and range of <i>y</i> = 5 sin(2<i>x</i> − π/3) + 1.",
              "a": "Amplitude 5, period 2π/2 = π, range [1 − 5, 1 + 5] = [−4, 6]."
            },
            {
              "q": "[JEE Main] Find the period of <i>f</i>(<i>x</i>) = cos<sup>2</sup><i>x</i> + sin <i>x</i>, and the range of <i>g</i>(<i>x</i>) = 3 cos <i>x</i> + 4 sin <i>x</i> − 5.",
              "a": "cos²x has period π and sin x has period 2π, so the LCM is 2π. For g, R = √(3² + 4²) = 5, so the range is [−5 − 5, 5 − 5] = [−10, 0]."
            },
            {
              "q": "[JEE Main] Solve cos <i>x</i> ≤ −1/2 for <i>x</i> ∈ [0, 2π].",
              "a": "The cosine curve sits on or below −1/2 between its two crossings: x ∈ [2π/3, 4π/3]."
            }
          ]
        },
        {
          "t": "mcq",
          "q": "The period of sin 5<i>x</i> is:",
          "correct": 1,
          "opts": [
            {
              "label": "10π",
              "nudge": "This multiplies by 5 instead of dividing. A larger coefficient squeezes the wave, it cannot stretch it."
            },
            {
              "label": "2π/5",
              "nudge": null
            },
            {
              "label": "2π",
              "nudge": "That is the period of sin x itself; the coefficient 5 has been ignored entirely."
            },
            {
              "label": "π/5",
              "nudge": "This uses π, the tangent base period, for a sine. Sine and cosine start from 2π."
            }
          ],
          "solution": "Period = base / |b| = 2π/5."
        },
        {
          "t": "mcq",
          "q": "The range of <i>y</i> = 3 cos <i>x</i> − 2 is:",
          "correct": 1,
          "opts": [
            {
              "label": "[−2, 3]",
              "nudge": "This reads the shift and the amplitude as the two endpoints. They are a centre and a half-width, not endpoints."
            },
            {
              "label": "[−5, 1]",
              "nudge": null
            },
            {
              "label": "[−1, 5]",
              "nudge": "The shift is −2, not +2, so the whole band moves down rather than up."
            },
            {
              "label": "[−3, 3]",
              "nudge": "That is the range before the shift; the −2 lowers both ends by 2."
            }
          ],
          "solution": "Amplitude 3 about a centre of −2: [−2 − 3, −2 + 3] = [−5, 1]."
        },
        {
          "t": "mcq",
          "q": "<i>y</i> = tan <i>x</i> has vertical asymptotes at:",
          "correct": 1,
          "opts": [
            {
              "label": "x = nπ",
              "nudge": "Those are the zeros of tan x, and they are the asymptotes of cot x instead."
            },
            {
              "label": "x = (2n + 1)π/2",
              "nudge": null
            },
            {
              "label": "x = 2nπ",
              "nudge": "Only every second zero of tan x, and still zeros rather than asymptotes."
            },
            {
              "label": "nowhere",
              "nudge": "tan x grows without bound near π/2, so the graph must break there."
            }
          ],
          "solution": "tan x = sin x / cos x blows up exactly where cos x = 0, that is at odd multiples of π/2."
        },
        {
          "t": "mcq",
          "q": "The period of tan 3<i>x</i> is:",
          "correct": 1,
          "opts": [
            {
              "label": "2π/3",
              "nudge": "This uses 2π, the sine and cosine base period. Tangent’s base is π."
            },
            {
              "label": "π/3",
              "nudge": null
            },
            {
              "label": "2π",
              "nudge": "Wrong base and the coefficient ignored, both at once."
            },
            {
              "label": "3π",
              "nudge": "This multiplies by the coefficient instead of dividing by it."
            }
          ],
          "solution": "Tangent’s base period is π, scaled by 1/|b|: π/3."
        },
        {
          "t": "mistakes",
          "items": [
            "Multiplying instead of dividing for the period. sin(<i>bx</i>) has period <b>2π/|<i>b</i>|</b>, never 2π<i>b</i>. Bigger <i>b</i> means shorter.",
            "Using 2π for tangent. <b>tan and cot have base period π</b>, so tan 3<i>x</i> repeats every π/3.",
            "Adding periods for a sum. Take the <b>LCM</b>, and watch for hidden shrinkage: |sin <i>x</i>| + |cos <i>x</i>| has period π/2, shorter than either part.",
            "Dropping the vertical shift from the range. <i>a</i> sin <i>x</i> + <i>d</i> ranges over <b>[<i>d</i> − |<i>a</i>|, <i>d</i> + |<i>a</i>|]</b>, not [−|<i>a</i>|, |<i>a</i>|].",
            "Swapping asymptote locations, or guessing an inequality’s brackets. tan and sec break where cos = 0, cot and csc where sin = 0; strict inequalities give open ends."
          ]
        },
        {
          "t": "protip",
          "html": "sketch from five points per period, the quadrantal values, and join them smoothly. it is faster and far less error-prone than a table of values, and for “how many solutions” questions you draw both sides and count crossings instead of solving anything at all."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "base periods: sin, cos, sec, csc 2π · tan, cot π",
              "note": "everything else scales from these"
            },
            {
              "f": "period of f(bx + c) = base / |b|",
              "note": "c shifts only, it never scales"
            },
            {
              "f": "|sin x|, |cos x|, sin²x, cos²x have period π",
              "note": "a sum takes the LCM, sometimes less"
            },
            {
              "f": "a sin(bx + c) + d: range [d − |a|, d + |a|]",
              "note": "amplitude |a|, phase −c/b"
            },
            {
              "f": "a sin x + b cos x ∈ [−√(a² + b²), √(a² + b²)]",
              "note": "max and min with no calculus"
            },
            {
              "f": "an inequality gives a band, not a point",
              "note": "and the band repeats every period"
            }
          ],
          "aids": [
            "“divide for the period, never multiply”",
            "“draw the cut line and shade”"
          ]
        }
      ]
    },
    {
      "n": "05",
      "title": "Identities and Compound Angles",
      "chip": "05 IDENTITIES",
      "kalam": "one master key, eight costumes",
      "blocks": [
        {
          "t": "p",
          "html": "It looks like a forest: sum, difference, double, half, triple, product-to-sum, sum-to-product. The liberating truth is that every one of them is cut from a single master key, the cosine difference formula <b>cos(<i>A</i> − <i>B</i>) = cos <i>A</i> cos <i>B</i> + sin <i>A</i> sin <i>B</i></b>. Replace <i>B</i> with −<i>B</i> and you have cos(<i>A</i> + <i>B</i>). Use the co-function shift and you have sin(<i>A</i> ± <i>B</i>). Set <i>B</i> = <i>A</i> and you have the double angle. Halve it and you have the half angle. Add and subtract two of them and you have product-to-sum. Learn the tree and you never memorise blindly, you reconstruct."
        },
        {
          "t": "p",
          "html": "First, kill the instinct that these functions distribute. sin(<i>A</i> + <i>B</i>) is <b>not</b> sin <i>A</i> + sin <i>B</i>. Test it: with <i>A</i> = <i>B</i> = 30°, sin 60° = √3/2 ≈ 0.87 while sin 30° + sin 30° = 1. Not close, not even nearly. The compound-angle formulas exist precisely because trigonometric functions are not linear, and internalising that prevents the most common error in the whole chapter."
        },
        {
          "t": "p",
          "html": "Two pictures make the rest feel inevitable. Pluck two sitar strings tuned a hair apart and you hear a slow throb, a beat: two pure tones add, and cos <i>C</i> + cos <i>D</i> = 2 cos((<i>C</i> + <i>D</i>)/2) cos((<i>C</i> − <i>D</i>)/2) rewrites their sum as one tone at the average frequency, modulated at the difference. The average is the note you hear, the difference is the throb. And if you push a swing partly sideways with strength <i>a</i> and partly forward with strength <i>b</i>, the net push has strength √(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>), which is exactly why <i>a</i> cos <i>x</i> + <i>b</i> sin <i>x</i> can never exceed that number."
        },
        {
          "t": "think",
          "html": "you are not learning twenty formulas, you are learning one and four moves: flip the sign of B, use the co-function shift, set B equal to A, and add or subtract two of the results."
        },
        {
          "t": "formula",
          "kicker": "SUM AND DIFFERENCE",
          "tag": "the master key first",
          "main": "cos(A − B) = cos A cos B + sin A sin B",
          "legend": [
            "cos(A + B) = cos A cos B − sin A sin B",
            "sin(A ± B) = sin A cos B ± cos A sin B",
            "tan(A ± B) = (tan A ± tan B) / (1 ∓ tan A tan B)",
            "sin(A + B) sin(A − B) = sin²A − sin²B · cos(A + B) cos(A − B) = cos²A − sin²B"
          ],
          "note": "Cosine disagrees with the angle’s sign, sine agrees with it, and for tangent the denominator’s sign is always opposite the numerator’s. That one sentence is the whole sign discipline."
        },
        {
          "t": "formula",
          "kicker": "DOUBLE AND TRIPLE ANGLE",
          "tag": "set B = A, then 3A = 2A + A",
          "main": "sin 2A = 2 sin A cos A · tan 2A = 2 tan A / (1 − tan²A)",
          "legend": [
            "cos 2A = cos²A − sin²A = 2cos²A − 1 = 1 − 2sin²A = (1 − tan²A)/(1 + tan²A)",
            "sin 3A = 3 sin A − 4 sin³A · cos 3A = 4 cos³A − 3 cos A",
            "tan 3A = (3 tan A − tan³A)/(1 − 3 tan²A) · sin 2A = 2 tan A/(1 + tan²A)"
          ],
          "note": "Pick the cos 2A form that matches your data: given sin A use 1 − 2sin²A, given cos A use 2cos²A − 1, given tan A use the tangent form. Choosing badly costs a page of algebra."
        },
        {
          "t": "formula",
          "kicker": "HALF ANGLE AND POWER REDUCTION",
          "tag": "size from algebra, sign from the interval",
          "main": "sin(A/2) = ±√((1 − cos A)/2) · cos(A/2) = ±√((1 + cos A)/2)",
          "legend": [
            "1 − cos A = 2sin²(A/2) · 1 + cos A = 2cos²(A/2) · sin A = 2 sin(A/2) cos(A/2)",
            "sign-free tangent, no ± required: tan(A/2) = sin A/(1 + cos A) = (1 − cos A)/sin A",
            "with t = tan(A/2): sin A = 2t/(1 + t²), cos A = (1 − t²)/(1 + t²), tan A = 2t/(1 − t²)"
          ],
          "note": "Choose each ± from the quadrant of A/2, obtained by halving the given interval for A, never by reading the quadrant label of A. The t-substitution is blind to A = (2n + 1)π, so test those angles separately."
        },
        {
          "t": "formula",
          "kicker": "PRODUCT TO SUM, SUM TO PRODUCT",
          "tag": "watch the leading 2 and the one minus",
          "main": "2 sin A cos B = sin(A + B) + sin(A − B)",
          "legend": [
            "2 cos A cos B = cos(A + B) + cos(A − B) · 2 sin A sin B = cos(A − B) − cos(A + B)",
            "sin C + sin D = 2 sin((C + D)/2) cos((C − D)/2) · sin C − sin D = 2 cos((C + D)/2) sin((C − D)/2)",
            "cos C + cos D = 2 cos((C + D)/2) cos((C − D)/2) · cos C − cos D = −2 sin((C + D)/2) sin((C − D)/2)"
          ],
          "note": "The leading 2 is part of the formula, not decoration. And the single minus sign lives in cos C − cos D and nowhere else in the family."
        },
        {
          "t": "formula",
          "kicker": "AMPLITUDE FORM AND CONDITIONAL IDENTITIES",
          "tag": "maximum and minimum without calculus",
          "main": "a cos x + b sin x = R cos(x − α), R = √(a² + b²), tan α = b/a",
          "legend": [
            "range [−R, R], so max(a sin x + b cos x + c) = c + R and min = c − R",
            "when A + B + C = π: tan A + tan B + tan C = tan A tan B tan C, and cot A cot B + cot B cot C + cot C cot A = 1",
            "also for A + B + C = π: sin 2A + sin 2B + sin 2C = 4 sin A sin B sin C and cos A + cos B + cos C = 1 + 4 sin(A/2) sin(B/2) sin(C/2)"
          ],
          "note": "The conditional identities are false without A + B + C = π. Quoting one on three unrelated angles is a guaranteed zero, so state the condition at the first step where you use it."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "DIAGRAM · TWO PUSHES COMBINE INTO ONE",
          "mathChips": true,
          "chips": ["3 cos x", "4 sin x", "the sum", "R = 5"],
          "captions": [
            "The first component on its own: 3 cos x, capped at 3 and never higher.",
            "The second on its own: 4 sin x, capped at 4. Notice that neither component ever reaches 5.",
            "Their sum, drawn over both parts in grey, is not a jagged thing. It is another pure sine wave of exactly the same period, just shifted sideways.",
            "And its amplitude is exactly R = √(3² + 4²) = 5, marked by the two horizontal lines it touches. That is why the maximum of 3 cos x + 4 sin x is 5 and the minimum is −5, with no calculus anywhere in sight."
          ],
          "frames": [
            {
              "x": [-6.6, 6.6],
              "y": [-5.8, 5.8],
              "piTicks": true,
              "curves": [{ "c": "cos", "a": 3 }]
            },
            {
              "x": [-6.6, 6.6],
              "y": [-5.8, 5.8],
              "piTicks": true,
              "curves": [{ "c": "sin", "a": 4 }]
            },
            {
              "x": [-6.6, 6.6],
              "y": [-5.8, 5.8],
              "piTicks": true,
              "curves": [
                { "c": "sin", "a": 5, "shift": -0.6435 },
                { "c": "cos", "a": 3, "soft": true, "dash": true },
                { "c": "sin", "a": 4, "soft": true, "dash": true }
              ]
            },
            {
              "x": [-6.6, 6.6],
              "y": [-5.8, 5.8],
              "piTicks": true,
              "curves": [
                { "c": "sin", "a": 5, "shift": -0.6435 },
                { "c": "line", "m": 0, "k": 5, "dash": true, "soft": true },
                { "c": "line", "m": 0, "k": -5, "dash": true, "soft": true }
              ]
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE MASTER KEY FROM ONE CHORD, TAP A LINE",
          "steps": [
            {
              "eq": "P₁ = (cos A, sin A), P₂ = (cos B, sin B)",
              "why": "Two points on the unit circle, at angles A and B. The chord joining them subtends the angle A − B at the centre."
            },
            {
              "eq": "P₃ = (cos(A − B), sin(A − B)), P₄ = (1, 0)",
              "why": "A second pair, placed so that the chord P₃P₄ subtends exactly the same central angle A − B, measured from the positive x-axis."
            },
            {
              "eq": "P₁P₂² = P₃P₄²",
              "why": "Equal central angles in the same circle cut equal chords. This is the only geometric input in the whole derivation; everything after it is algebra."
            },
            {
              "eq": "P₁P₂² = 2 − 2(cos A cos B + sin A sin B)",
              "why": "Expand (cos A − cos B)² + (sin A − sin B)² by the distance formula, then use sin² + cos² = 1 twice to collapse the four squares into 2."
            },
            {
              "eq": "P₃P₄² = 2 − 2 cos(A − B)",
              "why": "The same expansion on the second pair: (cos(A − B) − 1)² + sin²(A − B) = 2 − 2cos(A − B)."
            },
            {
              "eq": "cos(A − B) = cos A cos B + sin A sin B",
              "why": "Set the two expressions equal and cancel the 2 and the −2. Everything else in this topic now follows by substitution: B → −B gives the cosine sum, the co-function shift gives the sine pair, dividing gives the tangent, and B = A gives the double angle."
            }
          ]
        },
        {
          "t": "proc",
          "title": "Choosing the right move",
          "steps": [
            "<b>Exact value of an awkward angle?</b> Decompose into 30°, 45° and 60°: 15° = 45° − 30°, 75° = 45° + 30°, 7π/12 = π/4 + π/3.",
            "<b>A ratio of sums of sines or cosines?</b> Convert top and bottom to products with sum-to-product. The common factor cancels and a clean tangent survives.",
            "<b>A product of cosines at doubling angles?</b> Multiply and divide by 2 sin(smallest angle) and cascade 2 sin θ cos θ = sin 2θ until everything collapses.",
            "<b>Maximum or minimum of <i>a</i> sin <i>x</i> + <i>b</i> cos <i>x</i> + <i>c</i>?</b> The answer is <i>c</i> ± √(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>). No calculus is needed and none is expected.",
            "<b>Given cos <i>A</i> and an interval, want the half angle?</b> Write the interval as an inequality, divide every part by 2, read the quadrant of <i>A</i>/2, and write the three signs down <i>before</i> computing any magnitude.",
            "<b>Nothing factorises?</b> Put <i>t</i> = tan(<i>A</i>/2). Every rational expression in sin <i>A</i> and cos <i>A</i> becomes a rational function of <i>t</i>, which is algebra rather than trigonometry, and it never requires insight."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Find cos 15°, and prove cos(<i>A</i> + <i>B</i>) cos(<i>A</i> − <i>B</i>) = cos<sup>2</sup><i>A</i> − sin<sup>2</sup><i>B</i>.",
          "steps": [
            "cos 15° = cos(45° − 30°) = cos 45° cos 30° + sin 45° sin 30° = (1/√2)(√3/2) + (1/√2)(1/2) = (√6 + √2)/4.",
            "For the identity, the product is (cos <i>A</i> cos <i>B</i>)<sup>2</sup> − (sin <i>A</i> sin <i>B</i>)<sup>2</sup>, a difference of squares.",
            "Write cos<sup>2</sup><i>B</i> = 1 − sin<sup>2</sup><i>B</i> and sin<sup>2</sup><i>A</i> = 1 − cos<sup>2</sup><i>A</i>; the cross terms cancel and cos<sup>2</sup><i>A</i> − sin<sup>2</sup><i>B</i> survives."
          ],
          "ans": "cos 15° = (√6 + √2)/4"
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "If cos <i>x</i> = −1/3 and <i>x</i> lies in the third quadrant, find sin(<i>x</i>/2), cos(<i>x</i>/2) and tan(<i>x</i>/2).",
          "steps": [
            "Write the interval and halve it: π < <i>x</i> < 3π/2 gives π/2 < <i>x</i>/2 < 3π/4, so <i>x</i>/2 lies in the <b>second</b> quadrant, not the third. This step is the whole question.",
            "Write the three signs down first: sin(<i>x</i>/2) > 0, cos(<i>x</i>/2) < 0, tan(<i>x</i>/2) < 0.",
            "sin(<i>x</i>/2) = +√((1 + 1/3)/2) = √(2/3) = √6/3 and cos(<i>x</i>/2) = −√((1 − 1/3)/2) = −√3/3, so their ratio is −√2.",
            "Check with the sign-sensitive identity: sin <i>x</i> = 2 sin(<i>x</i>/2) cos(<i>x</i>/2) = −2√2/3, correctly negative for QIII."
          ],
          "ans": "sin(x/2) = √6/3 · cos(x/2) = −√3/3 · tan(x/2) = −√2"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "If sin <i>A</i> = 3/5 with <i>A</i> acute and cos <i>B</i> = −12/13 with <i>B</i> obtuse, find sin(<i>A</i> + <i>B</i>). Then find the maximum and minimum of 7 cos <i>x</i> + 24 sin <i>x</i> + 5.",
          "steps": [
            "<i>A</i> acute is QI, so cos <i>A</i> = 4/5. <i>B</i> obtuse is QII, where sine is positive, so sin <i>B</i> = 5/13. That sign is the entire difficulty.",
            "sin(<i>A</i> + <i>B</i>) = (3/5)(−12/13) + (4/5)(5/13) = (−36 + 20)/65.",
            "For the second part, <i>R</i> = √(7<sup>2</sup> + 24<sup>2</sup>) = 25, so the expression sweeps [5 − 25, 5 + 25]."
          ],
          "ans": "sin(A + B) = −16/65 · maximum 30, minimum −20"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "Prove cos 20° cos 40° cos 80° = 1/8.",
          "steps": [
            "Multiply and divide by 2 sin 20°, deliberately manufacturing a double angle to start a cascade.",
            "2 sin 20° cos 20° = sin 40°, so the product becomes sin 40° cos 40° cos 80° ÷ (2 sin 20°) = sin 80° cos 80° ÷ (4 sin 20°).",
            "One more doubling gives sin 160° ÷ (8 sin 20°), and sin 160° = sin 20°, so everything cancels. The Advanced move is choosing 2 sin(smallest angle) as the multiplier, which no amount of pattern matching suggests."
          ],
          "ans": "= 1/8"
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Find the exact value of tan 75°.",
              "a": "tan(45° + 30°) = (1 + 1/√3)/(1 − 1/√3) = (√3 + 1)/(√3 − 1) = 2 + √3."
            },
            {
              "q": "[CBSE] Prove sin 2<i>A</i> / (1 + cos 2<i>A</i>) = tan <i>A</i>.",
              "a": "Numerator 2 sin A cos A, denominator 2cos²A. The common 2 cos A cancels, leaving tan A."
            },
            {
              "q": "[JEE Main] Simplify (sin 5<i>x</i> + sin 3<i>x</i>) / (cos 5<i>x</i> + cos 3<i>x</i>).",
              "a": "sin 5x + sin 3x = 2 sin 4x cos x and cos 5x + cos 3x = 2 cos 4x cos x, so the ratio is tan 4x."
            },
            {
              "q": "[JEE Main] If tan <i>A</i> = 1/2 and tan <i>B</i> = 1/3, find <i>A</i> + <i>B</i>.",
              "a": "tan(A + B) = (1/2 + 1/3)/(1 − 1/6) = (5/6)/(5/6) = 1, so A + B = π/4."
            },
            {
              "q": "[JEE Advanced] Show sin 18° = (√5 − 1)/4 and deduce cos 36°.",
              "a": "Put θ = 18°, so 5θ = 90° and 2θ = 90° − 3θ. Then sin 2θ = cos 3θ gives 2 sin θ cos θ = cos θ(4cos²θ − 3). Cancel cos θ, which is non-zero, to get 4sin²θ + 2 sin θ − 1 = 0; the positive root is (√5 − 1)/4. Then cos 36° = 1 − 2sin²18° = (√5 + 1)/4."
            }
          ]
        },
        {
          "t": "mcq",
          "q": "cos(<i>A</i> + <i>B</i>) =",
          "correct": 1,
          "opts": [
            {
              "label": "cos A cos B + sin A sin B",
              "nudge": "That is cos(A − B). Cosine takes the sign opposite to the one inside the bracket, which is the single most common slip in the chapter."
            },
            {
              "label": "cos A cos B − sin A sin B",
              "nudge": null
            },
            {
              "label": "cos A sin B + sin A cos B",
              "nudge": "That is sin(A + B), the sine formula with its terms reordered."
            },
            {
              "label": "sin A sin B − cos A cos B",
              "nudge": "That is −cos(A − B): the wrong formula and the wrong overall sign, both at once."
            }
          ],
          "solution": "Cosine disagrees with the angle sign: the plus inside gives the minus outside."
        },
        {
          "t": "mcq",
          "q": "The maximum value of 5 sin <i>x</i> + 12 cos <i>x</i> is:",
          "correct": 1,
          "opts": [
            {
              "label": "17",
              "nudge": "This adds the coefficients. The amplitude is √(a² + b²), never a + b, because the two components peak at different x."
            },
            {
              "label": "13",
              "nudge": null
            },
            {
              "label": "√17",
              "nudge": "This takes the square root of a + b instead of a² + b²."
            },
            {
              "label": "7",
              "nudge": "This subtracts the coefficients, which is not a bound on anything here."
            }
          ],
          "solution": "R = √(5² + 12²) = 13, and a sin x + b cos x sweeps the whole of [−R, R]."
        },
        {
          "t": "mcq",
          "q": "cos <i>C</i> − cos <i>D</i> =",
          "correct": 1,
          "opts": [
            {
              "label": "2 sin((C + D)/2) sin((C − D)/2)",
              "nudge": "The right shape, but this is the one sum-to-product formula that carries a leading minus."
            },
            {
              "label": "−2 sin((C + D)/2) sin((C − D)/2)",
              "nudge": null
            },
            {
              "label": "2 cos((C + D)/2) cos((C − D)/2)",
              "nudge": "That is cos C + cos D, the sum rather than the difference."
            },
            {
              "label": "−2 cos((C + D)/2) sin((C − D)/2)",
              "nudge": "The functions are mismatched: a difference of cosines produces two sines, not a cosine and a sine."
            }
          ],
          "solution": "cos C − cos D = −2 sin((C + D)/2) sin((C − D)/2), the only one of the four with a leading minus."
        },
        {
          "t": "mcq",
          "q": "If 180° < θ < 270°, then sin(θ/2) is:",
          "correct": 0,
          "opts": [
            {
              "label": "positive",
              "nudge": null
            },
            {
              "label": "negative",
              "nudge": "This reads the quadrant of θ and applies it to θ/2. Halve the interval instead: 90° to 135° is QII."
            },
            {
              "label": "zero",
              "nudge": "sin(θ/2) = 0 would need θ/2 to be a multiple of 180°, which the open interval excludes."
            },
            {
              "label": "impossible to determine without cos θ",
              "nudge": "The sign depends only on the interval, never on the value of cos θ. The ± is always resolvable once the interval is known."
            }
          ],
          "solution": "Halving 180° < θ < 270° gives 90° < θ/2 < 135°, the second quadrant, where sine is positive."
        },
        {
          "t": "mistakes",
          "items": [
            "The cosine and tangent sign flip. <b>cos(<i>A</i> + <i>B</i>) takes the minus</b> and cos(<i>A</i> − <i>B</i>) the plus; tan(<i>A</i> + <i>B</i>) has 1 − tan <i>A</i> tan <i>B</i> below, tan(<i>A</i> − <i>B</i>) has 1 +.",
            "Assuming the functions distribute. <b>sin(<i>A</i> + <i>B</i>) ≠ sin <i>A</i> + sin <i>B</i></b>, at any values, ever.",
            "Choosing the wrong cos 2<i>A</i> form, or dropping the leading <b>2</b> in a product-to-sum conversion. The 2 is part of the formula, and the minus in <b>cos <i>C</i> − cos <i>D</i></b> is too.",
            "Signing a half-angle from the quadrant of <i>A</i>. <b>Halve the interval</b>, not the quadrant label: 180° < <i>A</i> < 270° puts <i>A</i>/2 in QII, not QIII.",
            "Quoting a conditional identity without its condition. tan <i>A</i> + tan <i>B</i> + tan <i>C</i> = tan <i>A</i> tan <i>B</i> tan <i>C</i> needs <b><i>A</i> + <i>B</i> + <i>C</i> = π</b> and is false otherwise."
          ]
        },
        {
          "t": "protip",
          "html": "memorise cos(A − B) alone and rebuild the rest under pressure, it takes twenty seconds and never fails. and check any half-angle answer with 2 sin(A/2) cos(A/2) = sin A, because that line is sign-sensitive, whereas sin² + cos² = 1 is blind to a wrong sign and will happily confirm a zero-mark answer."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "cos(A − B) = cos A cos B + sin A sin B",
              "note": "the master key, all else descends"
            },
            {
              "f": "sin(A ± B) = sin A cos B ± cos A sin B",
              "note": "sine agrees, cosine disagrees"
            },
            {
              "f": "cos 2A = 1 − 2sin²A = 2cos²A − 1",
              "note": "pick the form matching your data"
            },
            {
              "f": "cos C − cos D = −2 sin((C+D)/2) sin((C−D)/2)",
              "note": "the only leading minus in the family"
            },
            {
              "f": "a cos x + b sin x = R cos(x − α), R = √(a² + b²)",
              "note": "range [−R, R], no calculus"
            },
            {
              "f": "sin(A/2) = ±√((1 − cos A)/2)",
              "note": "size from algebra, sign from the halved interval"
            }
          ],
          "aids": [
            "“one master key, eight costumes”",
            "“halve the interval, not the quadrant name”"
          ]
        }
      ]
    },
    {
      "n": "06",
      "title": "Trigonometric Equations",
      "chip": "06 SOLVE",
      "kalam": "factor, never divide",
      "blocks": [
        {
          "t": "p",
          "html": "Ask where the hour hand points at 3 o’clock and the honest answer is “there, and again twelve hours later, and every twelve hours forever.” Trigonometric functions repeat, so if one angle satisfies sin θ = 1/2 then adding any whole number of turns gives another solution, and so does that angle’s mirror partner. The job here is never to find <i>a</i> solution. It is to describe <b>all</b> of them in one stroke."
        },
        {
          "t": "p",
          "html": "So the answer comes in two layers. A local train reaches your platform at 6:10 and 6:50 and then the pattern repeats hourly; nobody answers “when is a train here?” with one time, they hand you the timetable. A <b>principal solution</b> is the first-lap answer, and a <b>general solution</b> is the timetable, with an integer <i>n</i> counting the laps."
        },
        {
          "t": "p",
          "html": "The three master formulas are not arbitrary either. Move everything to one side and factorise with sum-to-product: sin θ − sin α = 0 becomes a product equal to zero, and a product vanishes exactly when one of its factors does. The periodic families drop straight out. Which is also the warning printed on the box: <b>a product is where the solutions live, so never cancel a factor</b>, because cancelling assumes it is non-zero and that is precisely the case you must not throw away."
        },
        {
          "t": "think",
          "html": "an equation hands you moments, and there are infinitely many of them. the integer n is not decoration, it is the part of the answer that says “and again, and again.”"
        },
        {
          "t": "def",
          "term": "Principal solution",
          "html": "A solution lying in [0, 2π), that is, within the first full turn. sin θ = 1/2 has <b>two</b> of them, π/6 and 5π/6, because sine is positive in both QI and QII. Answering with one is the standard way to lose half the marks on a two-mark question."
        },
        {
          "t": "def",
          "term": "General solution",
          "html": "An expression containing an integer <i>n</i> ∈ ℤ that produces every solution as <i>n</i> runs over the integers. Dropping the <i>n</i> when the question asks for the general solution discards infinitely many answers, and the marking scheme is built to notice."
        },
        {
          "t": "formula",
          "kicker": "THE THREE MASTER FAMILIES",
          "tag": "n ∈ ℤ throughout",
          "main": "sin θ = sin α ⟺ θ = nπ + (−1)ⁿ α",
          "legend": [
            "cos θ = cos α ⟺ θ = 2nπ ± α",
            "tan θ = tan α ⟺ θ = nπ + α",
            "squared cases, all three at once: sin²θ = sin²α (or cos², or tan²) ⟺ θ = nπ ± α"
          ],
          "note": "Each function keeps its own form. Borrowing the cosine family for a sine equation is the signature error of this topic, and it is invisible until the answers are counted."
        },
        {
          "t": "formula",
          "kicker": "SPECIAL VALUES AND THE LINEAR FORM",
          "tag": "check solvability before you solve",
          "main": "a cos θ + b sin θ = c ⟺ R cos(θ − α) = c, R = √(a² + b²)",
          "legend": [
            "solvable only if |c| ≤ √(a² + b²); otherwise write “no solution” and stop",
            "sin θ = 0 ⟺ θ = nπ · cos θ = 0 ⟺ θ = (2n + 1)π/2 · tan θ = 0 ⟺ θ = nπ",
            "sin θ = 1 ⟺ θ = (4n + 1)π/2 · sin θ = −1 ⟺ θ = (4n − 1)π/2 · cos θ = 1 ⟺ θ = 2nπ · cos θ = −1 ⟺ θ = (2n + 1)π"
          ],
          "note": "If sin θ = sin α and cos θ = cos α hold together, only θ = 2nπ + α survives: two independent conditions fix the quadrant, so only a whole turn preserves both. Never nπ, which flips it."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "DIAGRAM · WHY THE ANSWER CARRIES AN n",
          "mathChips": true,
          "chips": ["sin x = ½", "the two roots", "and again, forever"],
          "captions": [
            "The cut line y = 1/2 across one full lap, from 0 to 2π. Solving an equation means finding every place the curve meets that line, and no place more.",
            "Two meetings in one lap: x = π/6 in the first quadrant and x = 5π/6 in the second, where sine is still positive. Those are the principal solutions, and a question asking only for them stops right here.",
            "Widen the window to two laps and the same pair reappears, shifted by 2π. That is what nπ + (−1)ⁿ(π/6) packages: n even lands on the π/6 family, n odd lands on the 5π/6 family, and nothing is left out."
          ],
          "frames": [
            {
              "x": [0, 6.6],
              "y": [-1.4, 1.4],
              "piTicks": true,
              "curves": [{ "c": "sin" }, { "c": "line", "m": 0, "k": 0.5, "dash": true }]
            },
            {
              "x": [0, 6.6],
              "y": [-1.4, 1.4],
              "piTicks": true,
              "curves": [{ "c": "sin" }, { "c": "line", "m": 0, "k": 0.5, "dash": true }],
              "points": [
                { "x": 0.5236, "y": 0.5, "label": "π/6" },
                { "x": 2.618, "y": 0.5, "label": "5π/6" }
              ]
            },
            {
              "x": [-6.6, 6.6],
              "y": [-1.4, 1.4],
              "piTicks": true,
              "curves": [{ "c": "sin" }, { "c": "line", "m": 0, "k": 0.5, "dash": true }],
              "points": [
                { "x": -5.7596, "y": 0.5 },
                { "x": -3.6652, "y": 0.5 },
                { "x": 0.5236, "y": 0.5 },
                { "x": 2.618, "y": 0.5 }
              ]
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHERE nπ + (−1)ⁿα COMES FROM, TAP A LINE",
          "steps": [
            {
              "eq": "sin θ − sin α = 0",
              "why": "Move everything to one side. Nothing has been cancelled, and nothing needs to be, which is the habit the whole topic is trying to build."
            },
            {
              "eq": "2 cos((θ + α)/2) sin((θ − α)/2) = 0",
              "why": "Sum-to-product on a difference of sines. The equation is now a product, and a product is zero exactly when one of its factors is."
            },
            {
              "eq": "sin((θ − α)/2) = 0 ⇒ θ = 2mπ + α",
              "why": "The first factor vanishes when (θ − α)/2 is a whole multiple of π. That gives an even multiple of π, plus α."
            },
            {
              "eq": "cos((θ + α)/2) = 0 ⇒ θ = (2m + 1)π − α",
              "why": "The second factor vanishes when (θ + α)/2 is an odd multiple of π/2. That gives an odd multiple of π, minus α."
            },
            {
              "eq": "θ = nπ + (−1)ⁿ α",
              "why": "The two cases are “even multiple plus α” and “odd multiple minus α”, which is exactly what (−1)ⁿ encodes: n even takes the plus, n odd takes the minus along with the π shift. One compact formula, two geometric families, no memorisation."
            }
          ]
        },
        {
          "t": "proc",
          "title": "The strategy ladder, and the checks that finish it",
          "steps": [
            "<b>Reduce to one function.</b> Use identities to express everything in terms of a single trigonometric function of a single angle wherever you can.",
            "<b>Factorise to a product equal to zero.</b> Never cancel a common trigonometric factor: sin 2<i>x</i> = sin <i>x</i> becomes sin <i>x</i>(2 cos <i>x</i> − 1) = 0, and dividing by sin <i>x</i> silently destroys the entire <i>x</i> = <i>n</i>π family.",
            "<b>Match each factor to a master family</b> and quote its formula: sine, cosine or tangent, never borrowed from one another.",
            "<b>For <i>a</i> sin <i>x</i> + <i>b</i> cos <i>x</i> = <i>c</i>, convert first</b> to <i>R</i> cos(<i>x</i> − α) = <i>c</i>. That one move hands you both the solvability test |<i>c</i>| ≤ <i>R</i> and the clean general solution.",
            "<b>For a solution count in an interval</b>, solve generally, then count the integer values of <i>n</i> that land inside it.",
            "<b>Run the four validity checks.</b> Did I keep the integer <i>n</i>? Did I divide by something that can be zero? Did I square anywhere, and if so did I substitute every candidate back? Is every root inside the domain, with tan, sec, cot and csc defined?"
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Find the principal solutions of sin <i>x</i> = 1/2, and the general solution of cos <i>x</i> = −1/2.",
          "steps": [
            "sin <i>x</i> = 1/2 at <i>x</i> = π/6 in QI, and since sine is also positive in QII, at <i>x</i> = π − π/6 = 5π/6. Both lie in [0, 2π).",
            "cos <i>x</i> = −1/2 = cos(2π/3), the reference angle where cosine takes that value.",
            "Quote the cosine family: θ = 2<i>n</i>π ± α."
          ],
          "ans": "principal π/6 and 5π/6 · general x = 2nπ ± 2π/3, n ∈ ℤ"
        },
        {
          "t": "ex",
          "tag": "NEET PATTERN",
          "q": "Solve 2 sin<sup>2</sup><i>x</i> + sin <i>x</i> − 1 = 0.",
          "steps": [
            "Treat it as a quadratic in sin <i>x</i>: (2 sin <i>x</i> − 1)(sin <i>x</i> + 1) = 0.",
            "sin <i>x</i> = 1/2 = sin(π/6) gives <i>x</i> = <i>n</i>π + (−1)<sup><i>n</i></sup>(π/6).",
            "sin <i>x</i> = −1 is an extreme value with its own compact form: <i>x</i> = (4<i>n</i> − 1)π/2."
          ],
          "ans": "x = nπ + (−1)ⁿ(π/6) or x = (4n − 1)π/2"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Solve sin 2<i>x</i> = sin <i>x</i>, then solve √3 cos <i>x</i> + sin <i>x</i> = 1.",
          "steps": [
            "sin 2<i>x</i> − sin <i>x</i> = 2 sin <i>x</i> cos <i>x</i> − sin <i>x</i> = sin <i>x</i>(2 cos <i>x</i> − 1) = 0. Factor, do not divide: <i>x</i> = <i>n</i>π or cos <i>x</i> = 1/2.",
            "For the second, <i>R</i> = √(3 + 1) = 2 and tan α = 1/√3 gives α = π/6. Check |<i>c</i>| = 1 ≤ 2, so solutions do exist.",
            "2 cos(<i>x</i> − π/6) = 1 ⇒ cos(<i>x</i> − π/6) = cos(π/3) ⇒ <i>x</i> − π/6 = 2<i>n</i>π ± π/3."
          ],
          "ans": "x = nπ or 2nπ ± π/3 · and x = 2nπ + π/2 or x = 2nπ − π/6"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "Solve sin <i>x</i> + cos <i>x</i> = 1, and show why squaring is dangerous here.",
          "steps": [
            "Amplitude form avoids squaring entirely: sin <i>x</i> + cos <i>x</i> = √2 sin(<i>x</i> + π/4), so sin(<i>x</i> + π/4) = 1/√2 = sin(π/4).",
            "<i>x</i> + π/4 = <i>n</i>π + (−1)<sup><i>n</i></sup>(π/4). Even <i>n</i> gives <i>x</i> = 2<i>m</i>π; odd <i>n</i> gives <i>x</i> = 2<i>m</i>π + π/2.",
            "Squaring instead gives 1 + sin 2<i>x</i> = 1, so sin 2<i>x</i> = 0 and <i>x</i> = <i>n</i>π/2, which includes <i>x</i> = π. But sin π + cos π = −1 ≠ 1, so π is extraneous: squaring imported a false root that only back-substitution removes."
          ],
          "ans": "x = 2nπ or x = 2nπ + π/2"
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Find the principal solutions of tan <i>x</i> = √3.",
              "a": "tan x = tan(π/3), and tangent is positive in QI and QIII: x = π/3 and x = 4π/3."
            },
            {
              "q": "[CBSE] Find the general solution of sin <i>x</i> = −√3/2.",
              "a": "sin x = sin(−π/3), so x = nπ + (−1)ⁿ(−π/3) = nπ − (−1)ⁿ(π/3)."
            },
            {
              "q": "[JEE Main] Solve 2 cos<sup>2</sup><i>x</i> + 3 sin <i>x</i> = 0.",
              "a": "Write cos²x = 1 − sin²x: 2sin²x − 3 sin x − 2 = 0, so (2 sin x + 1)(sin x − 2) = 0. Reject sin x = 2, which is out of range; sin x = −1/2 gives x = nπ + (−1)ⁿ(−π/6)."
            },
            {
              "q": "[JEE Main] Find the general solution of sin 3<i>x</i> + sin <i>x</i> = 0.",
              "a": "sin 3x + sin x = 2 sin 2x cos x = 0, so sin 2x = 0 or cos x = 0, giving x = nπ/2. The cos x = 0 family is already contained in it."
            },
            {
              "q": "[JEE Main] For which real <i>k</i> does 3 cos <i>x</i> + 4 sin <i>x</i> = <i>k</i> have a solution?",
              "a": "Solvable exactly when |k| ≤ √(3² + 4²) = 5, that is −5 ≤ k ≤ 5."
            }
          ]
        },
        {
          "t": "mcq",
          "q": "The general solution of sin θ = sin α is:",
          "correct": 1,
          "opts": [
            {
              "label": "θ = 2nπ ± α",
              "nudge": "That is the cosine family. Borrowing another function’s form is the signature error of this topic."
            },
            {
              "label": "θ = nπ + (−1)ⁿα",
              "nudge": null
            },
            {
              "label": "θ = nπ + α",
              "nudge": "That is the tangent family, which repeats every π rather than every 2π."
            },
            {
              "label": "θ = 2nπ + α",
              "nudge": "That is the simultaneous case, used only when sine and cosine are both prescribed."
            }
          ],
          "solution": "Sine: nπ + (−1)ⁿα. Cosine: 2nπ ± α. Tangent: nπ + α. Each function keeps its own family."
        },
        {
          "t": "mcq",
          "q": "The number of solutions of sin <i>x</i> = 1/2 in [0, 2π) is:",
          "correct": 1,
          "opts": [
            {
              "label": "1",
              "nudge": "This finds π/6 and stops, forgetting that sine is positive in QII as well."
            },
            {
              "label": "2",
              "nudge": null
            },
            {
              "label": "3",
              "nudge": "The sine curve crosses the line y = 1/2 exactly twice per period, not three times."
            },
            {
              "label": "infinitely many",
              "nudge": "True over all of ℝ, but the question restricts to one lap. Principal and general are different questions."
            }
          ],
          "solution": "x = π/6 and x = 5π/6, the two principal solutions."
        },
        {
          "t": "mcq",
          "q": "5 sin <i>x</i> + 12 cos <i>x</i> = 15 has:",
          "correct": 2,
          "opts": [
            {
              "label": "two solutions in [0, 2π)",
              "nudge": "This starts solving mechanically without asking whether the left side can even reach 15."
            },
            {
              "label": "exactly one solution",
              "nudge": "The same trap: no value of x makes the left side as large as 15."
            },
            {
              "label": "no solution",
              "nudge": null
            },
            {
              "label": "infinitely many solutions",
              "nudge": "The left side is capped at 13, so it never equals 15, for any x whatsoever."
            }
          ],
          "solution": "R = √(5² + 12²) = 13 < 15, so |c| > R and the equation is unsatisfiable. Check |c| against R before solving."
        },
        {
          "t": "mcq",
          "q": "A student solves tan <i>x</i> = sin <i>x</i> by dividing by sin <i>x</i>, getting sec <i>x</i> = 1 and <i>x</i> = 2<i>n</i>π. What is missing?",
          "correct": 1,
          "opts": [
            {
              "label": "nothing, the answer is complete",
              "nudge": "Test x = π in the original: tan π = 0 and sin π = 0, so it solves the equation and the answer misses it."
            },
            {
              "label": "the roots from sin <i>x</i> = 0",
              "nudge": null
            },
            {
              "label": "an extraneous root must be removed",
              "nudge": "Dividing loses roots; it is squaring that manufactures them. This step lost solutions, it did not gain any."
            },
            {
              "label": "the cosine family",
              "nudge": "No cosine equation appears anywhere here. The missing family comes from the factor that was cancelled away."
            }
          ],
          "solution": "Dividing by sin x discards the case sin x = 0, that is x = nπ, which does solve the original. Factor instead: sin x(1/cos x − 1) = 0."
        },
        {
          "t": "mistakes",
          "items": [
            "Dividing by a trigonometric factor and losing roots. <b>Factor and set each factor to zero</b>. Cancelling assumes the factor is non-zero, which is exactly the case you must keep.",
            "Squaring and keeping the extras. Squaring can manufacture false solutions, so every candidate from a squared step must be <b>substituted back</b> into the original.",
            "Mixing the families. Sine gives <b><i>n</i>π + (−1)<sup><i>n</i></sup>α</b>, cosine gives <b>2<i>n</i>π ± α</b>, tangent gives <b><i>n</i>π + α</b>.",
            "Giving only principal solutions when the general solution was asked for. The integer <i>n</i> is not optional, and dropping it loses infinitely many answers.",
            "Grinding at <i>a</i> cos <i>x</i> + <i>b</i> sin <i>x</i> = <i>c</i> when |<i>c</i>| > √(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>). Declare <b>no solution</b>, and separately discard any root where tan, sec, cot or csc is undefined."
          ]
        },
        {
          "t": "protip",
          "html": "when two conditions are given at once, say sin θ = −1/2 together with tan θ = 1/√3, do not generalise each one first. list the principal solutions of each in [0, 2π), intersect the two lists, and only then add 2nπ. two conditions fix the quadrant, so a shift of π would break one of them."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "sin θ = sin α ⇒ θ = nπ + (−1)ⁿα",
              "note": "n ∈ ℤ, always carried"
            },
            {
              "f": "cos θ = cos α ⇒ θ = 2nπ ± α",
              "note": "tan θ = tan α ⇒ θ = nπ + α"
            },
            {
              "f": "sin²θ = sin²α ⇒ θ = nπ ± α",
              "note": "same form for cos² and tan²"
            },
            {
              "f": "a cos x + b sin x = c needs |c| ≤ √(a² + b²)",
              "note": "otherwise no solution, stop there"
            },
            {
              "f": "principal: inside [0, 2π) · general: carries n",
              "note": "different questions, different answers"
            }
          ],
          "aids": [
            "“factor, never divide”",
            "“squared it? substitute it back”"
          ]
        }
      ]
    }
  ]
};

export default ch03Trigonometry;
