/**
 * Chapter 05 · Work, Energy and Power. Physics, Class 11.
 *
 * Restructured from pages 281 to 355 of the Drona Class 11 Physics Master
 * Reference into the block system in design_handoff_textbooks/CONTENT_SPEC.md
 * and lib/textbooks.ts, matching the voice and density of
 * phy-11-02-motion-straight-line.ts.
 *
 * SIX TOPICS. The source's own contents page (page 282) lists eight sections:
 * "Foundations: The Scalar (Dot) Product", Sub-topics 1 to 5, a half-numbered
 * "Sub-topic 3.5: Various Forms of Energy & the Law of Conservation of
 * Energy", and "Application: Motion in a Vertical Circle". Eight will not fit
 * the reader's four-to-six topic range, and two of the eight are explicitly
 * not full subtopics: the Foundations section is a mathematical tool (work IS
 * a dot product, so it belongs inside Topic 01 rather than beside it), and 3.5
 * is the source's own admission that the forms of energy are the second half
 * of the conservation story told in Sub-topic 3. Folding exactly those two in
 * gives six: Work (Foundations + 1), Mechanical Energy (2), Conservative
 * Forces and Conservation (3 + 3.5), Power (4), Collisions (5), Vertical
 * Circle (Application). Nothing else was merged and nothing was split.
 *
 * The Round 2 Addendum (pages 341 to 355: A spring-block systems, B chains,
 * sand and conveyor belts, C restitution past the first bounce, D oblique
 * collisions by the line of impact, E connected bodies and cancelled string
 * work) is not a topic. Every line drawn from it below sits in a `protip`, a
 * `mistakes` item, or a worked example, never in a `formula`, `defgrid`,
 * `deriv` or `proc`: A into Topic 02's spring material, B into Topic 04's
 * mass-delivery power, C and D into Topic 05, E into Topic 03's conservation
 * material.
 *
 * ERRATA REVIEWED (source pages 977 to 981, read in full). NO ENTRY TOUCHES
 * THIS CHAPTER. The nine entries cover Chapter 1 (the SI adoption year),
 * Chapter 2 (two structural defects), Chapter 4 (two duplicated MCQ option
 * labels and one wrong key), Chapter 6 (an unanswerable metre-stick MCQ and a
 * dropped mass factor in an angular-momentum answer), Chapter 8 (leaked LaTeX),
 * Chapter 9 (shifted part labels) and Chapter 11 (a wrong mole count and CO2
 * misdescribed as bent). Chapter 5 is absent from the list, so nothing printed
 * in pages 281 to 355 has been retracted by the publisher.
 *
 * CORRECTIONS BEYOND THE ERRATA. The main body, pages 283 to 340, is
 * arithmetically clean: all thirty-two worked examples, all forty practice
 * answers and all twenty-eight MCQ keys were recomputed independently and
 * every one matches. Four defects were found, all of them in the Round 2
 * Addendum's practice answers, and none of them propagates into this chapter
 * because the affected material is either re-authored below or not used:
 *
 *   1. Addendum B, Practice 2 (page 346). A 4 kg, 2 m chain lies on a table
 *      with 1 m hanging; released, find its speed as the last link leaves.
 *      Printed: 2.24 m/s, computed as (1/2)Mv2 = (1/2)(lambda)g l2 with l = 1.
 *      That formula is B1's, and B1 derives it for a chain starting with NO
 *      overhang. Here the overhang starts at 1 m. Correct working: the centre
 *      of mass starts at (2 kg at 0.5 m below the edge, 2 kg at the edge)/4 kg
 *      = 0.25 m below, and ends 1.0 m below, so it falls 0.75 m. Energy
 *      released = (4)(10)(0.75) = 30 J, and (1/2)(4)v2 = 30 gives
 *      v = sqrt(15) = 3.9 m/s, not 2.24 m/s. Cross-check by integration:
 *      W = integral of (lambda)g y dy from y = 1 to y = 2 = (2)(10)(2 - 0.5)
 *      = 30 J. Agrees.
 *   2. Addendum B, Practice 5 (page 347). A chain hangs from its top end;
 *      find the work to coil it onto a platform level with its BOTTOM end.
 *      Printed reasoning: "element at height y above the bottom ... must be
 *      lifted y". Every element must be LOWERED onto that platform, not
 *      lifted, so the agent's work is MINUS MgL/2 and gravity's is plus MgL/2.
 *      The printed magnitude MgL/2 is right; only the direction is inverted.
 *      (The same magnitude would follow from a platform at the TOP end, where
 *      elements really are lifted, through (L - y): integral of
 *      (lambda)g(L - y) dy = MgL/2. So either the question means "top" or the
 *      reasoning is backwards; as printed the two contradict each other.)
 *   3. Addendum C, Practice 3 (page 349). A ball at 6 m/s catches a wall
 *      receding at 2 m/s, e = 0.5. Printed: 4 m/s, still forward. In the
 *      wall's frame the ball approaches at 6 - 2 = 4 m/s and leaves at
 *      e(4) = 2 m/s BACKWARD relative to the wall, so in the ground frame it
 *      is -2 + 2 = 0 m/s: the ball stops dead. Direct check by restitution in
 *      the ground frame: v(wall) - v(ball) = e[u(ball) - u(wall)] gives
 *      2 - v = 0.5(6 - 2) = 2, so v = 0 m/s. The printed answer added the
 *      wall's speed to a rebound whose sign it had already dropped, and it
 *      also contradicts the addendum's own formula in C2.
 *   4. Addendum C, Practice 5 (page 349). A 2 kg body at 6 m/s overtakes a
 *      4 kg body at 2 m/s, e = 0.5; the printed final velocities 2 m/s and
 *      4 m/s are correct, but the energy tally reads "4 + 16 = 20 J after, so
 *      24 J lost". The second term is (1/2)(4)(4)2 = 32 J, not 16 J, so the
 *      kinetic energy after is 4 + 32 = 36 J and the loss is 44 - 36 = 8 J.
 *      Confirmed independently by the restitution loss formula,
 *      (1/2)[m1m2/(m1+m2)](1 - e2)(u1 - u2)2
 *      = (1/2)(8/6)(0.75)(16) = 8 J. The printed 24 J is the loss a PERFECTLY
 *      inelastic collision of the same two bodies would suffer, which is what
 *      makes it a plausible-looking wrong number.
 *
 * SOURCE DAMAGE. Every passage below was re-authored from context, never
 * transcribed. Four distinct extraction faults run through pages 281 to 355:
 *
 *   - Mathematical glyphs are replaced by escape-like tokens rather than
 *     dropped. Confirmed substitutions, each verified against a place where
 *     the same expression also survives intact elsewhere in the range:
 *     "\n7" is the minus sign (page 291's derivation prints
 *     "(1/2)mv2f \n7 (1/2)mv2i = Kf \n7 Ki", which is Kf - Ki); "\nK" is the
 *     degree sign ("30 \nK", "90 \nK"); "\nA" is the dot operator
 *     ("A \nA B = 0" is the perpendicularity test); "\nN" is the multiplication
 *     sign ("f \nN d" and "3.6 \nN 10 6"). The brief predicted the "\n7" family
 *     from the pilot chapter; this chapter carries three more members of it.
 *   - Heading runs arrive under a substituted font encoding. Every cheat-sheet
 *     heading is affected: "T>E SCALA_ (DPT) P_PDlCT" is THE SCALAR (DOT)
 *     PRODUCT, "WP_K & WP_K-ENE_:u T>EP_EM" is WORK & WORK-ENERGY THEOREM,
 *     "MEC>ANICAL ENE_:u" is MECHANICAL ENERGY, "CPNSE_VATIVE & NPN-
 *     CPNSE_VATIVE FP_CES" is CONSERVATIVE & NON-CONSERVATIVE FORCES,
 *     "FP_MS PF ENE_:u & CPNSE_VATIPN" is FORMS OF ENERGY & CONSERVATION,
 *     "PPWE_" is POWER, "CPLLISIPNS" is COLLISIONS, "MPTIPN IN A VE_TICAL
 *     CI_CLE" is MOTION IN A VERTICAL CIRCLE, and "_APID _EVISIPN" is RAPID
 *     REVISION. The mapping is not the brief's uniform +29 shift (that shift
 *     decodes "$GGHQGXP$" to "AddendumA" but leaves these unreadable); it is
 *     a per-glyph substitution, and the page-287 Pro-Tip heading
 *     "S`Q@hBT UbT22/ Y ++m`+vV" is a third, different one again. All were
 *     read from context, never decoded character by character. "Exam
 *     _elevance" (Exam Relevance) opens all eight sections.
 *   - Superscripts and subscripts land on their own lines. This breaks every
 *     squared quantity in the chapter: "mv 2", "(1/2)kx 2", "10 -19", "3 x 10
 *     8", "v 2 top", "e 2n". Recomputing every example (see above) was the
 *     check that these were reassembled correctly.
 *   - Inter-word spaces vanish at tight kerning, pervasively. Instances in
 *     passages actually used below: "reasonwork" (page 283, "reason work"),
 *     "thedisplacement" and "anddisplacement" (page 289), "onlyverticaldis-
 *     placement" (page 292), "isnotconstant" (page 323), "themaximumproduct"
 *     (page 286), "networkdonebyallforces" (page 289, "net work done by all
 *     forces", where the run also reads as the unrelated English word
 *     "network" and had to be disambiguated from the surrounding sentence),
 *     "coeﬀicient" throughout (a broken ffi ligature, flagged by the errata's
 *     own preamble as an extraction artefact the printed page does not have).
 *
 * FIGURES. THE SOURCE NAMES NONE. There is not one "Figure N.M" callout in
 * all seventy-five pages, so all fourteen figures below are designed here.
 * Six of them realise a figure the source describes in prose but never draws
 * (the three-panel sign-of-work strip on page 288, the F-x area graph on page
 * 291, the potential-energy curve with turning points on page 299, the
 * three-position pendulum with energy bars on page 305, the P-t area and W-t
 * slope pair on page 319, and the head-on versus oblique collision schematic
 * on page 327); the other eight are drawn because the physics argues them in
 * prose and a picture teaches them faster. The panel rule is held throughout:
 * "before and after" is separate chips, never two panels in one frame, so the
 * collision figure is three chips and the vertical-circle force figure is two.
 * Region fills honour `tone`, so the positive area under an F-x graph really
 * reads green and the negative area really reads red; both also carry a "+"
 * and a "-" label so the figure survives with colour removed. No figure was
 * dropped and no new figure vocabulary is requested.
 *
 * DIMENSIONS. Every formula printed below, reduced to M L T:
 *
 *   - A.B = AB cos(theta): dimensionless cosine, so the product inherits the
 *     two factors' dimensions. F.S is therefore [M L T-2][L] = [M L2 T-2]. OK.
 *   - W = FS cos(theta) and W = integral F dx: both [M L T-2][L]
 *     = [M L2 T-2] = joule. OK.
 *   - K = (1/2)mv2: [M][L2 T-2] = [M L2 T-2]. OK.
 *   - K = p2/2m: [M L T-1]2/[M] = [M2 L2 T-2]/[M] = [M L2 T-2]. OK.
 *   - W(net) = (delta)K: both sides [M L2 T-2]. OK.
 *   - U = mgh: [M][L T-2][L] = [M L2 T-2]. OK.
 *   - U = (1/2)kx2: k is a force per length, [M T-2], so [M T-2][L2]
 *     = [M L2 T-2]. OK.
 *   - U = -Gm1m2/r: G is [M-1 L3 T-2], so [M-1 L3 T-2][M2]/[L] = [M L2 T-2].
 *     OK.
 *   - F = -dU/dx: [M L2 T-2]/[L] = [M L T-2] = newton. OK.
 *   - W(cons) = -(delta)U and W(nc) = (delta)E: both [M L2 T-2]. OK.
 *   - heat = f x d(sliding): [M L T-2][L] = [M L2 T-2]. OK.
 *   - E = mc2: [M][L2 T-2] = [M L2 T-2]. OK, which is why a mass and an
 *     energy can be quoted against each other at all.
 *   - P = W/t: [M L2 T-2]/[T] = [M L2 T-3] = watt. OK.
 *   - P = F.v: [M L T-2][L T-1] = [M L2 T-3]. OK, and the agreement of these
 *     two is the whole content of "power is force times velocity".
 *   - v = sqrt(2Pt/m): [M L2 T-3][T]/[M] = [L2 T-2], root [L T-1]. OK.
 *   - x = (2/3)sqrt(2P/m) t3/2: [M L2 T-3]/[M] = [L2 T-3], root
 *     [L T-3/2], times [T3/2] = [L]. OK. The fractional power is honest here
 *     precisely because the bracket carries T-3/2.
 *   - P = (mu)(gh + v2/2) for a pump: [M T-1][L2 T-2] = [M L2 T-3]. OK.
 *   - m1u1 + m2u2 = m1v1 + m2v2: [M][L T-1] = [M L T-1] termwise. OK.
 *   - e = (separation speed)/(approach speed): [L T-1]/[L T-1] = 1,
 *     dimensionless, as a ratio confined to [0, 1] must be.
 *   - v1 = [(m1-m2)u1 + 2m2u2]/(m1+m2): [M][L T-1]/[M] = [L T-1]. OK.
 *   - V = (m1u1 + m2u2)/(m1 + m2): [L T-1]. OK.
 *   - (delta)K = (1/2)[m1m2/(m1+m2)](u1-u2)2: [M][L2 T-2] = [M L2 T-2]. OK,
 *     and the bracket is a mass, which is why it is called a reduced mass.
 *   - T = mv2/R + mg cos(theta): [M][L2 T-2]/[L] = [M L T-2], and
 *     [M][L T-2] = [M L T-2]. Both terms are forces. OK.
 *   - v(top) = sqrt(gR): [L T-2][L] = [L2 T-2], root [L T-1]. OK. Likewise
 *     sqrt(3gR) and sqrt(5gR); the numbers are pure, so all three are speeds.
 *   - v2 = v(bottom)2 - 2gh: [L2 T-2] throughout. OK.
 *   - T(bottom) - T(top) = 6mg: [M L T-2], a force, as a difference of two
 *     tensions must be. OK.
 *   - h = R(1 - cos(theta)): [L]. OK.
 *   - e = sqrt(h'/h) and h(n) = e2n h: both sides [L] in the second, and the
 *     first is a ratio of two lengths under a root, dimensionless. OK.
 *
 *   30 formula lines checked, 30 dimensionally consistent, 0 defects.
 *
 * PHYSICAL PLAUSIBILITY AND LIMITING CASES. Kinetic energy is never negative
 * anywhere below (it is a square times a mass, and Topic 02 says so out loud);
 * no collision in the chapter gains kinetic energy, and the one bound that
 * guarantees it, that a perfectly inelastic collision is the MAXIMUM possible
 * loss because the bodies must still carry the system's momentum, is stated in
 * Topic 05 rather than assumed; the coefficient of restitution is confined to
 * [0, 1] in the same topic, with e > 1 named as non-physical in an MCQ nudge.
 * Limiting cases used where they teach something: e = 1 in the general
 * restitution formulas reproduces the elastic pair exactly and e = 0 collapses
 * them to the common velocity V, which is Topic 05's own consistency check;
 * equal masses in the elastic pair give the velocity exchange, m1 much greater
 * than m2 gives v2 = 2u1 and m1 much less than m2 gives v1 = -u1, all three
 * checked by substitution; u1 = u2 makes the inelastic loss vanish, because
 * nothing actually collides; the rigid rod in Topic 06 is the string result at
 * its own limit, v(top) = 0 instead of sqrt(gR), and the resulting sqrt(4gR)
 * against sqrt(5gR) is exactly the 2R of extra height the string demands.
 *
 * SEAMS: what is quoted as already known, from which file, and never
 * re-derived here.
 *
 *   - phy-11-02-motion-straight-line.ts, Topic 05: the master key
 *     a = dv/dt = (dv/dx)(dx/dt) = v dv/dx. Topic 01's work-energy derivation
 *     below is that same chain-rule rewrite used a second time, and names it
 *     as such rather than re-deriving it.
 *   - phy-11-02-motion-straight-line.ts, Topic 02: area under a graph is the
 *     accumulated quantity, and slope is the rate. Topic 01's F-x area and
 *     Topic 04's P-t area quote that reading directly.
 *   - phy-11-02-motion-straight-line.ts, Topic 03: v2 = u2 + 2as, free fall
 *     from rest, and the fact that a body thrown up returns with its launch
 *     speed. Used without proof in Topics 03, 05 and 06.
 *   - phy-11-02-motion-straight-line.ts, Topic 05 `think`: integration as the
 *     power rule run backward. Topic 01 needs an integral on its second page
 *     and leans on that one line rather than introducing calculus again.
 *   - math-11-12-limits.ts, Topic 05: the power rule and the chain rule.
 *     F = -dU/dx in Topic 02 and every differentiated U(x) below use them
 *     silently.
 *   - NOT a seam, deliberately: the scalar product. There is no Class 11
 *     mathematics chapter that teaches it (checked against lib/textbooks.ts:
 *     vector algebra is math-12-10, a Class 12 file), which is exactly why the
 *     source gives the dot product a Foundations section of its own, and why
 *     Topic 01 below builds it from the geometry rather than quoting it.
 *   - Newton's second law and Newton's third law are Chapter 4, which is not
 *     yet written. Both are used by name in Topics 01 and 05, as the source
 *     does, and neither is re-derived.
 */
import type { Chapter } from '@/lib/textbooks';

export const phy11WorkEnergyPower: Chapter = {
  "chapter": "05",
  "title": "Work, Energy and Power",
  "subject": "Physics",
  "klass": "Class 11",
  "topics": [
    {
      "n": "01",
      "title": "Work, and the Theorem That Turns It Into Speed",
      "chip": "01 WORK",
      "kalam": "name the force, then measure the angle",
      "blocks": [
        {
          "t": "hook",
          "html": "<b>01 · Work and the Work-Energy Theorem</b><br>The gateway of the whole chapter, and it pays off everywhere. CBSE Boards almost always carry the derivation of the work-energy theorem for 3 marks, plus a 1 to 2 mark question on positive, negative or zero work. JEE Main reliably asks one to two questions a year, usually a variable-force integration or a find-the-final-speed numerical. NEET asks one conceptual question on the sign of work or a zero-work case. JEE Advanced rarely tests it alone but folds the frame dependence of work and the positive work done by static friction silently into multi-concept problems. The scalar product underneath it is worth 1 to 2 marks on its own at Board level, and NEET tests the perpendicularity condition as a fast MCQ.<br><br><b>02 · Mechanical Energy: Kinetic and Potential</b><br>A guaranteed scorer. CBSE Boards ask direct definitions and the spring potential-energy expression. JEE Main asks one to two questions every year, very often find the force or the equilibrium position from a given <i>U</i>(<i>x</i>). NEET loves the kinetic-energy-momentum relation <i>K</i> = <i>p</i><sup>2</sup>/2<i>m</i> as a one-line trap. JEE Advanced almost always hides a potential-energy-curve or nature-of-equilibrium problem here, and it is exactly where a dropped minus sign costs the mark.<br><br><b>03 · Conservative Forces and the Conservation of Energy</b><br>The conceptual heart, and its payoff is one of the most-used tools in all of JEE and NEET physics. CBSE Boards ask the definition and distinction for 2 to 3 marks and the derivation of the conservation of mechanical energy, plus 1 to 3 marks on the forms of energy and on <i>E</i> = <i>mc</i><sup>2</sup>. JEE Main reliably asks one to two questions on energy accounting with friction. NEET tests path independence and the closed loop as quick MCQs and asks one question on energy transformations. JEE Advanced likes friction's round-trip work, testing whether a two-dimensional force is conservative, and heat computed from sliding distance rather than displacement.<br><br><b>04 · Power</b><br>High frequency, low difficulty, and you cannot afford to drop these marks. CBSE Boards ask the definition, the units, and a clean <i>P</i> = <i>W</i>/<i>t</i> numerical. NEET asks one question almost every year, very often a <i>P</i> = <i>Fv</i> problem with a sneaky km/h to m/s conversion. JEE Main reliably asks one to two questions combining power with a force balance on an incline, or a pump. JEE Advanced favours the constant-power kinematics result, <i>v</i> proportional to √<i>t</i> and <i>x</i> proportional to <i>t</i><sup>3/2</sup>, which catches everyone who never derived it.<br><br><b>05 · Collisions</b><br>Among the densest scoring zones in the chapter, blending momentum and energy conservation. CBSE Boards ask the elastic versus inelastic definitions and a clean perfectly-inelastic momentum numerical for 2 to 3 marks. NEET asks one to two questions yearly, loving the equal-mass velocity exchange and the momentum-is-conserved-but-energy-may-not-be trap. JEE Main reliably asks one to two questions on the coefficient of restitution and the one-dimensional elastic formulas. JEE Advanced favours oblique collisions, especially the elegant equal-masses-fly-apart-at-90° result.<br><br><b>06 · Motion in a Vertical Circle</b><br>The flagship application of energy conservation and a near-guaranteed exam topic. CBSE Boards ask the minimum-speed derivations for 3 marks. NEET asks one question yearly, usually the minimum speed at the top or the <i>T</i><sub>bottom</sub> − <i>T</i><sub>top</sub> = 6<i>mg</i> result. JEE Main reliably asks one to two questions threading energy conservation into the tension equation. JEE Advanced favours the regime analysis, complete the loop versus leave the track versus oscillate, and the angle at which the string goes slack."
        },
        {
          "t": "p",
          "html": "Here is the question that trips up almost everyone on day one. Your friend stands holding a heavy bag of cement on his head for ten full minutes, arms trembling, shirt soaked. Did he do any <b>work</b>? In ordinary speech, obviously yes. In physics the answer is a flat <b>zero</b>, and once you see why, you have the whole concept. Physics does not care about effort, sweat or exhaustion. It cares about exactly two things: is a force acting, and did the point where that force acts actually <b>move</b>? Work is the bridge between a push and a displacement. No displacement, no work, however tired you are. Tie the bag to a hook on the wall and it stays up with no effort from anyone at all, which tells you the holding was never transferring energy into the bag in the first place."
        },
        {
          "t": "p",
          "html": "So work is a precise piece of bookkeeping: it measures <b>how much energy a force transfers to an object, or steals from it, as the object moves</b>. And only the part of the force that lies <b>along</b> the motion counts. A man dragging a suitcase by a tilted handle finds that only the horizontal slice of his pull moves it forward; the vertical slice merely tries to lift it. Physics needed one operation that takes two vectors and automatically extracts how much of one lies along the other, times their sizes. That operation is the <b>scalar product</b>, also called the dot product, and it is the mathematical key to this entire chapter. You feed it two <i>vectors</i> and it returns a single <i>scalar</i>, a plain number with a sign and no direction, by multiplying the two magnitudes and weighting the result by cos θ."
        },
        {
          "t": "think",
          "html": "picture the sun low on the horizon, casting your shadow along the ground. the dot product of two vectors asks: if <i>B</i> were the ground and the sun shone straight down onto <i>A</i>, how long is <i>A</i>'s shadow on <i>B</i>, and then scale that by how long <i>B</i> itself is. point them the same way and the shadow is full length, so the product is at its biggest, <i>AB</i>. put them at right angles and the shadow shrinks to nothing, so the product is zero, which is exactly why a force perpendicular to the motion does no work. point them opposite ways and the product goes maximally negative, which is the whole basis of negative work."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 1 · THE SHADOW A DOT PRODUCT MEASURES",
          "chips": ["projection"],
          "captions": [
            "Drop a perpendicular from the tip of A onto the line of B and you cut off a length A cos θ, the part of A that lies along B. The dot product is that length multiplied by the whole of B. Nothing else about A survives the operation, which is precisely what makes it the right tool for work."
          ],
          "frames": [
            {
              "x": [0, 10], "y": [-1.4, 6.4], "axes": "none", "aspect": 0.62,
              "arrows": [
                { "from": [1, 1], "to": [8.6, 1], "tone": "ink", "label": "B", "at": "end" },
                { "from": [1, 1], "to": [5, 4.8], "tone": "ink", "label": "A", "at": "end" },
                { "from": [1, -0.7], "to": [5, -0.7], "head": "both", "tone": "amber", "label": "A cos θ", "at": "below" }
              ],
              "segments": [
                { "from": [5, 4.8], "to": [5, 1], "dash": true, "soft": true }
              ],
              "arcs": [
                { "at": [1, 1], "r": 1.5, "from": 0, "to": 44, "label": "θ" },
                { "at": [5, 1], "r": 0.5, "from": 90, "to": 180, "right": true, "tone": "soft" }
              ]
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE SCALAR PRODUCT",
          "tag": "the mathematical key to the whole chapter",
          "main": "<i>A</i> · <i>B</i> = <i>AB</i> cos θ<br><i>A</i> · <i>B</i> = <i>A<sub>x</sub>B<sub>x</sub></i> + <i>A<sub>y</sub>B<sub>y</sub></i> + <i>A<sub>z</sub>B<sub>z</sub></i>",
          "legend": [
            "<i>A</i> and <i>B</i> are the two vectors and <i>A</i>, <i>B</i> their magnitudes; the subscripted quantities are their components along the three axes, each in whatever unit the vector itself carries",
            "θ is the angle between them, with 0 ≤ θ ≤ 180°",
            "the result is a scalar, so it has no unit of its own: it inherits the product of the two vectors' units, which is why force dotted with displacement comes out in joules"
          ],
          "note": "Sign is the whole story. Positive means an acute angle, zero means a right angle, negative means an obtuse one, and a zero product with two non-zero vectors means they are perpendicular, never that one of them vanished."
        },
        {
          "t": "defgrid",
          "title": "The dot product, in one table",
          "rows": [
            { "k": "Geometric form", "v": "<i>A</i> · <i>B</i> = <i>AB</i> cos θ, a scalar that can be positive, zero or negative" },
            { "k": "Projection of <i>A</i> on <i>B</i>", "v": "<i>A</i> cos θ = (<i>A</i> · <i>B</i>)/<i>B</i>, the length of the shadow" },
            { "k": "Angle between two vectors", "v": "cos θ = (<i>A</i> · <i>B</i>)/<i>AB</i>, then take the inverse cosine" },
            { "k": "Unit vectors", "v": "î · î = ĵ · ĵ = k̂ · k̂ = 1, and î · ĵ = ĵ · k̂ = k̂ · î = 0. Like gives 1, unlike gives 0" },
            { "k": "Self product", "v": "<i>A</i> · <i>A</i> = <i>A</i><sup>2</sup>, since θ = 0" },
            { "k": "Properties", "v": "commutative and distributive over addition; used for work <i>W</i> = <i>F</i> · <i>S</i> and power <i>P</i> = <i>F</i> · <i>v</i>" }
          ]
        },
        {
          "t": "p",
          "html": "With the tool in hand, the sign intuition writes itself. Push a stalled auto-rickshaw forward and it rolls forward: your push and the motion point the same way, so you are pouring energy in. That is <b>positive work</b>, and you can feel it because the auto speeds up. Now the driver brakes: friction in the pads points backward while the auto still rolls forward, so friction is draining energy out. That is <b>negative work</b>, and you see it because the auto slows down. Finally, gravity pulls straight down on the auto while it rolls horizontally, a perfect right angle, helping neither and hindering neither. That is <b>zero work</b>. The angle between the force and the displacement decides the sign, and nothing else does."
        },
        {
          "t": "def",
          "term": "Work is signed; energy is not",
          "html": "Hold this distinction for the entire chapter. <b>Work carries a sign, and that sign is physics, not algebra:</b> negative work means energy is genuinely being removed from the body, and dropping the minus quietly corrupts every calculation downstream. <b>Energy never carries a sign of direction.</b> Kinetic energy is a mass times a squared speed, so it can only be zero or positive: a ball moving left and a ball moving right at the same speed have identical <i>K</i>. Potential energy can be printed as a negative number, but only because you were free to choose where its zero sits, never because it points backwards. So a velocity may be −3 m/s and a work may be −40 J, while a speed of −3 m/s and a kinetic energy of −40 J are both meaningless."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 2 · THE SIGN OF WORK, AS θ PASSES 90°",
          "chips": ["positive work", "negative work", "zero work"],
          "captions": [
            "The force has a slice pointing along the motion, so cos θ is positive and the force pours energy in. The block speeds up.",
            "The force has a slice pointing against the motion, the case of friction or a brake, so cos θ is negative and the force drains energy out. The block slows down.",
            "The force is square to the motion, so cos θ is exactly zero and the force does no work at all, however large it is. A normal reaction, and gravity during horizontal motion, both live here."
          ],
          "frames": [
            {
              "x": [0, 10], "y": [-0.2, 5.6], "axes": "none", "aspect": 0.6,
              "bodies": [
                { "kind": "ground", "at": [5, 0.95], "w": 9.4, "h": 0.22 },
                { "kind": "block", "at": [3.4, 1.65], "w": 1.7, "h": 1.05, "label": "m" }
              ],
              "segments": [
                { "from": [3.4, 1.65], "to": [6.2, 1.65], "dash": true, "soft": true }
              ],
              "arrows": [
                { "from": [3.4, 0.3], "to": [7.4, 0.3], "tone": "soft", "label": "S", "at": "end" },
                { "from": [3.4, 1.65], "to": [5.7, 3.58], "tone": "green", "label": "F", "at": "end" }
              ],
              "arcs": [
                { "at": [3.4, 1.65], "r": 1.1, "from": 0, "to": 40, "label": "θ" }
              ]
            },
            {
              "x": [0, 10], "y": [-0.2, 5.6], "axes": "none", "aspect": 0.6,
              "bodies": [
                { "kind": "ground", "at": [5, 0.95], "w": 9.4, "h": 0.22 },
                { "kind": "block", "at": [3.4, 1.65], "w": 1.7, "h": 1.05, "label": "m" }
              ],
              "segments": [
                { "from": [3.4, 1.65], "to": [6.2, 1.65], "dash": true, "soft": true }
              ],
              "arrows": [
                { "from": [3.4, 0.3], "to": [7.4, 0.3], "tone": "soft", "label": "S", "at": "end" },
                { "from": [3.4, 1.65], "to": [1.1, 3.58], "tone": "red", "label": "F", "at": "end" }
              ],
              "arcs": [
                { "at": [3.4, 1.65], "r": 1.1, "from": 0, "to": 140, "label": "θ" }
              ]
            },
            {
              "x": [0, 10], "y": [-0.2, 5.6], "axes": "none", "aspect": 0.6,
              "bodies": [
                { "kind": "ground", "at": [5, 0.95], "w": 9.4, "h": 0.22 },
                { "kind": "block", "at": [3.4, 1.65], "w": 1.7, "h": 1.05, "label": "m" }
              ],
              "segments": [
                { "from": [3.4, 1.65], "to": [6.2, 1.65], "dash": true, "soft": true }
              ],
              "arrows": [
                { "from": [3.4, 0.3], "to": [7.4, 0.3], "tone": "soft", "label": "S", "at": "end" },
                { "from": [3.4, 1.65], "to": [3.4, 4.2], "tone": "amber", "label": "F", "at": "end" }
              ],
              "arcs": [
                { "at": [3.4, 1.65], "r": 0.85, "from": 0, "to": 90, "right": true, "label": "90°" }
              ]
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · WORK, CONSTANT AND VARIABLE",
          "main": "<i>W</i> = <i>F</i> · <i>S</i> = <i>FS</i> cos θ<br><i>W</i> = ∫ <i>F</i> · <i>dr</i>, and along a straight line <i>W</i> = ∫ <i>F</i> <i>dx</i>",
          "legend": [
            "<i>W</i> is the work, in joules (J), where 1 J = 1 N m = 1 kg m<sup>2</sup>/s<sup>2</sup>",
            "<i>F</i> is the force in newtons (N) and <i>S</i> is the displacement in metres (m); θ is the angle between them",
            "the integral form is the area under the force-versus-position graph, and it is the one to reach for the instant the force changes size or direction, or the path bends"
          ],
          "note": "1 erg = 10<sup>−7</sup> J, 1 eV = 1.6 × 10<sup>−19</sup> J, and 1 kWh = 3.6 × 10<sup>6</sup> J. All three are energies, so all three carry the dimensions [M L<sup>2</sup> T<sup>−2</sup>]."
        },
        {
          "t": "p",
          "html": "Now the payoff that makes work worth defining at all. When you do positive work on an object, where does the energy go? It shows up as <b>motion</b>: the object speeds up. Do negative work and it slows down. So there is a tight, exact relationship waiting to be found between the work done and the energy of motion, which we call <b>kinetic energy</b>, <i>K</i> = ½<i>mv</i><sup>2</sup>. That relationship is the <b>work-energy theorem</b>, and it is not a definition pulled out of the air: it falls straight out of Newton's second law. Work is the currency, kinetic energy is the bank balance, and depositing or withdrawing currency changes the balance by exactly that amount. One warning built into the sentence: the theorem uses the <b>net</b> work, the sum over every force acting. The work of any single force generally does not equal Δ<i>K</i>."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · KINETIC ENERGY AND THE WORK-ENERGY THEOREM",
          "tag": "valid for any force, constant or not",
          "main": "<i>K</i> = ½<i>mv</i><sup>2</sup><br><i>W</i><sub>net</sub> = Δ<i>K</i> = ½<i>mv<sub>f</sub></i><sup>2</sup> − ½<i>mv<sub>i</sub></i><sup>2</sup>",
          "legend": [
            "<i>m</i> is the mass in kilograms (kg) and <i>v</i> is the speed in m/s, so <i>K</i> comes out in joules",
            "<i>W</i> is the net work, the sum over <i>all</i> the forces acting, and the subscripts <i>i</i> and <i>f</i> mark the initial and final states",
            "the theorem is derived without ever assuming the force is constant, which is what makes it strong enough to beat the equations of motion whenever the force varies"
          ],
          "note": "The converse is the fastest shortcut in the topic: if a body's speed is unchanged, then Δ<i>K</i> = 0, so <i>W</i><sub>net</sub> = 0 and you know the answer before computing anything."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE WORK-ENERGY THEOREM, TAP A LINE",
          "steps": [
            {
              "eq": "<i>W</i><sub>net</sub> = ∫ from <i>x<sub>i</sub></i> to <i>x<sub>f</sub></i> of <i>F</i> <i>dx</i>",
              "why": "Start from the integral definition of work by the net force, not from FS cos θ, precisely so the result survives a force that changes with position. This is what makes the theorem so much more powerful than the three equations of motion."
            },
            {
              "eq": "<i>F</i> = <i>ma</i> = <i>m</i> <i>dv</i>/<i>dt</i>",
              "why": "Newton's second law is the natural substitution: the net force is what changes the motion, so it is the bridge that brings speed into an expression that so far only mentions force and position."
            },
            {
              "eq": "<i>dv</i>/<i>dt</i> = (<i>dv</i>/<i>dx</i>)(<i>dx</i>/<i>dt</i>) = <i>v</i> <i>dv</i>/<i>dx</i>",
              "why": "The integral runs over position, not time, so rewrite the acceleration in a form that can be integrated against dx. This is exactly the master key from the last chapter's variable-acceleration topic, the chain rule read through dx/dt = v, used here a second time."
            },
            {
              "eq": "<i>W</i><sub>net</sub> = ∫ <i>mv</i> (<i>dv</i>/<i>dx</i>) <i>dx</i> = ∫ from <i>v<sub>i</sub></i> to <i>v<sub>f</sub></i> of <i>mv</i> <i>dv</i>",
              "why": "The dx in the integrand pairs off with the dx in the denominator and the limits switch from two positions to the two corresponding speeds. What was a force integral is now a clean speed integral."
            },
            {
              "eq": "<i>W</i><sub>net</sub> = ½<i>mv<sub>f</sub></i><sup>2</sup> − ½<i>mv<sub>i</sub></i><sup>2</sup> = <i>K<sub>f</sub></i> − <i>K<sub>i</sub></i> = Δ<i>K</i>",
              "why": "Integrating mv dv gives ½mv2 evaluated between the two speeds. Kinetic energy is therefore nothing but stored-up net work: positive net work speeds a body up by exactly that many joules, negative net work slows it by exactly that many."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 3 · THE AREA UNDER F-x IS THE WORK",
          "chips": ["area = work", "when F turns against S"],
          "captions": [
            "A thin strip of width dx at position x has area F dx, which is exactly the sliver of work done over that step. Add every strip and you have the whole work, which is why the area and the work are the same number. Break the region into a triangle, a rectangle and a triangle: 20 + 30 + 10 = 60 J, no calculus needed.",
            "Once the force reverses, its area drops below the axis and counts as negative. Here the region above contributes +32 J and the small region below −4 J, so the work done is 28 J even though the shape covers 36 J worth of area. Signed area gives the work; unsigned area gives nothing physical at all."
          ],
          "frames": [
            {
              "x": [0, 10], "y": [0, 12],
              "axisX": "x (m)", "axisY": "F (N)",
              "ticksX": { "every": 2 }, "ticksY": { "every": 4 },
              "curves": [{ "c": "pts", "pts": [[0, 0], [4, 10], [7, 10], [9, 0]] }],
              "polys": [
                { "pts": [[0, 0], [4, 10], [4, 0]], "close": true, "fill": "wash", "tone": "soft", "label": "20 J" },
                { "pts": [[4, 0], [4, 10], [7, 10], [7, 0]], "close": true, "fill": "wash", "tone": "amber", "label": "30 J" },
                { "pts": [[7, 10], [9, 0], [7, 0]], "close": true, "fill": "wash", "tone": "soft", "label": "10 J" }
              ]
            },
            {
              "x": [0, 10.5], "y": [-6, 10],
              "axisX": "x (m)", "axisY": "F (N)",
              "ticksX": { "every": 2 }, "ticksY": { "at": [-4, 0, 8] },
              "curves": [{ "c": "pts", "pts": [[0, 0], [4, 8], [10, -4]] }],
              "polys": [
                { "pts": [[0, 0], [4, 8], [8, 0]], "close": true, "fill": "wash", "tone": "green", "label": "+" },
                { "pts": [[8, 0], [10, -4], [10, 0]], "close": true, "fill": "wash", "tone": "red", "label": "−" }
              ]
            }
          ]
        },
        {
          "t": "proc",
          "title": "Computing the work done by one force",
          "steps": [
            "<b>Name the force first.</b> The work done is an incomplete sentence: always ask <i>work done by which force?</i> Different forces on the same body do different works, and the theorem needs all of them.",
            "<b>Ask the sign before you ask the size.</b> Force along the motion gives +, against gives −, square to it gives 0. This one question instantly kills the normal reaction, the tension in circular motion, and gravity during horizontal motion.",
            "<b>Constant force, straight path: use <i>W</i> = <i>FS</i> cos θ</b>, with θ the angle between the force and the displacement, not between the force and anything else.",
            "<b>Force given in components: take the dot product</b>, keeping every sign. A term like (3)(−4) contributes −12, not +12, and that single slip is the commonest arithmetic error in the topic.",
            "<b>Force varying with position: integrate, or read the area</b> under the F versus x graph, counting area below the axis as negative."
          ]
        },
        {
          "t": "proc",
          "title": "Using the work-energy theorem",
          "steps": [
            "<b>Decide what you actually want.</b> The theorem connects speeds to works, so reach for it whenever a question gives you a force and a distance and asks for a speed, or the reverse.",
            "<b>Tally every force that does work</b>, or find the single net force. Writing <i>W</i><sub>gravity</sub> = Δ<i>K</i> when friction or tension is also present is a classic mark-loser.",
            "<b>Add the works with their signs</b> to get <i>W</i><sub>net</sub>, then set it equal to ½<i>mv<sub>f</sub></i><sup>2</sup> − ½<i>mv<sub>i</sub></i><sup>2</sup>.",
            "<b>Prefer it over kinematics when the force is not constant.</b> If <i>F</i> depends on <i>x</i>, the three equations of motion are simply invalid, but the theorem is not: integration delivers the total work directly.",
            "<b>Fix one reference frame and stay in it.</b> Displacement differs between observers, so work does too. Use that frame's displacements and that frame's kinetic energies throughout."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A street vendor pulls a loaded cart along level ground by a rope making 60° with the horizontal. He applies a steady 200 N and the cart moves 10 m. Find the work done by his pull.",
          "steps": [
            "The force is constant and the path is straight, so <i>W</i> = <i>FS</i> cos θ applies directly, with <i>F</i> = 200 N, <i>S</i> = 10 m and θ = 60°.",
            "<i>W</i> = (200)(10) cos 60° = (200)(10)(0.5).",
            "Note what the cosine did: only the horizontal slice of the pull, 200 cos 60° = 100 N, is aligned with the displacement. The vertical slice does nothing but try to lift the cart."
          ],
          "ans": "1000 J transferred to the cart"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "A porter carries a 20 kg trunk on his head. He walks 40 m along a level platform, then climbs a staircase rising 5 m vertically. Taking <i>g</i> = 10 m/s<sup>2</sup> for quick arithmetic, the total work he does against gravity is: 9000 J, 8000 J, 1000 J, or 0 J?",
          "steps": [
            "The panic move is to add work for the 40 m walk to work for the 5 m climb and land on a large number. The 40 m is there only as bait.",
            "Gravity points straight down, so during the horizontal walk the angle between the weight and the displacement is 90° and the work against gravity is exactly zero. Only the vertical rise counts.",
            "<i>W</i> = <i>mgh</i> = (20)(10)(5) = 1000 J. The instant you see a horizontal distance in a work-against-gravity question, mentally delete it."
          ],
          "ans": "1000 J"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "A 2 kg particle, initially at rest at the origin, is pushed along the x-axis by a position-dependent force <i>F</i> = (3<i>x</i><sup>2</sup> + 2<i>x</i>) N. Find its speed when it reaches <i>x</i> = 4 m.",
          "steps": [
            "The force varies with position, so <i>FS</i> cos θ is unusable and the constant-acceleration equations are unusable too. Integrate for the work instead.",
            "<i>W</i> = ∫ from 0 to 4 of (3<i>x</i><sup>2</sup> + 2<i>x</i>) <i>dx</i> = [<i>x</i><sup>3</sup> + <i>x</i><sup>2</sup>] from 0 to 4 = 64 + 16 = 80 J.",
            "The particle starts from rest, so <i>K<sub>i</sub></i> = 0 and the theorem gives 80 = ½(2)<i>v</i><sup>2</sup>, hence <i>v</i><sup>2</sup> = 80 m<sup>2</sup>/s<sup>2</sup>.",
            "<i>v</i> = √80 = 4√5 ≈ 8.9 m/s. The theorem sidestepped both obstacles at once, because it only ever cares about the total work, which integration delivers directly."
          ],
          "ans": "v = 4√5 ≈ 8.9 m/s"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "A 2 kg block rests on the floor of a train that accelerates uniformly from rest at 3 m/s<sup>2</sup>, with friction just sufficient to prevent slipping. For <i>t</i> = 0 to <i>t</i> = 2 s, find the work done by friction on the block (i) in the ground frame and (ii) in the train's frame, and verify each against the work-energy theorem.",
          "steps": [
            "First identify the force, which is the same in both frames. The block moves with the train, so static friction is the only horizontal force on it and must supply its acceleration: <i>f</i> = <i>ma</i> = (2)(3) = 6 N, directed forward. Note that this is static friction doing <b>positive</b> work, already a surprise if you memorised that friction always opposes motion.",
            "(i) Ground frame. The block's displacement in 2 s is <i>S</i> = ½<i>at</i><sup>2</sup> = ½(3)(4) = 6 m, so <i>W</i> = (6)(6) = +36 J. Check: <i>v</i> = <i>at</i> = 6 m/s, so Δ<i>K</i> = ½(2)(36) = 36 J, and friction is the only horizontal force, so <i>W</i><sub>net</sub> = 36 J = Δ<i>K</i>.",
            "(ii) Train frame. Relative to the train the block never moves, so <i>S</i> = 0 and <i>W</i> = (6)(0) = 0 J. Check: the block is stationary in this frame, so Δ<i>K</i> = 0, and indeed the friction and the pseudo-force each act over zero displacement.",
            "The same 6 N force does +36 J to a platform observer and 0 J to a passenger, and both are correct. Work is frame-dependent because displacement is, and the theorem holds consistently <i>within</i> each frame provided you never mix the two."
          ],
          "ans": "ground frame +36 J · train frame 0 J · both consistent with the theorem"
        },
        {
          "t": "mcq",
          "q": "If <i>A</i> · <i>B</i> = 0 and neither <i>A</i> nor <i>B</i> is a zero vector, the two vectors are:",
          "opts": [
            { "label": "parallel", "nudge": "Parallel gives the maximum product, AB, not zero. This option confuses the largest value with the vanishing one." },
            { "label": "anti-parallel", "nudge": "Anti-parallel gives −AB, the most negative value the product can take, not zero." },
            { "label": "perpendicular", "nudge": null },
            { "label": "equal", "nudge": "Two equal vectors give A · A = A<sup>2</sup>, which is zero only if the vector itself is zero, and the question rules that out." }
          ],
          "correct": 2,
          "solution": "With both magnitudes non-zero, <i>AB</i> cos θ = 0 forces cos θ = 0, so θ = 90°. Always test the dot product first on any angle question: if it vanishes, the answer is 90° instantly."
        },
        {
          "t": "mcq",
          "q": "A force <i>F</i> = (3î + 4ĵ) N moves a particle through a displacement <i>S</i> = (4î − 3ĵ) m. The work done is:",
          "opts": [
            { "label": "24 J", "nudge": "This adds the cross term instead of subtracting it: (4)(−3) contributes −12 J, not +12 J. The single most common arithmetic slip in the dot product." },
            { "label": "0 J", "nudge": null },
            { "label": "25 J", "nudge": "This is |F||S| = 5 × 5, the product of the magnitudes, which would only be the work if the two vectors were parallel. Here they are square to each other." },
            { "label": "−12 J", "nudge": "This keeps one term and drops the other entirely." }
          ],
          "correct": 1,
          "solution": "<i>W</i> = <i>F</i> · <i>S</i> = (3)(4) + (4)(−3) = 12 − 12 = 0 J. The force and the displacement happen to be perpendicular, so the force does no work, a result you would never see by multiplying magnitudes."
        },
        {
          "t": "mcq",
          "q": "A body of mass <i>m</i> moves at constant speed <i>v</i> in a circle of radius <i>r</i>. The work done by the centripetal force in half a revolution is:",
          "opts": [
            { "label": "½<i>mv</i><sup>2</sup>", "nudge": "This is the kinetic energy, but the speed is constant here, so K does not change and no work is being done at all." },
            { "label": "<i>mv</i><sup>2</sup>", "nudge": "Same confusion with kinetic energy, and off by a factor of two besides." },
            { "label": "π<i>r</i> × <i>mv</i><sup>2</sup>/<i>r</i>", "nudge": "A multiply-everything-given trap: force times arc length, computed as though the two pointed the same way. Perpendicularity kills it." },
            { "label": "0 J", "nudge": null }
          ],
          "correct": 3,
          "solution": "The centripetal force points to the centre at every instant, square to the velocity and so square to the displacement. With θ = 90°, cos θ = 0 and the work is zero all the way round. It is the angle, not the magnitudes, that settles this."
        },
        {
          "t": "mcq",
          "q": "A block is pulled at <b>constant velocity</b> across a rough floor by a horizontal force. Which statement is correct?",
          "opts": [
            { "label": "the net work on the block is positive", "nudge": "Constant velocity means ΔK = 0, so the theorem forces the net work to be zero. The instinct that an applied force must mean positive net work is exactly what this question is testing." },
            { "label": "the work done by the applied force is zero", "nudge": "The applied force genuinely moves the block, so it does positive work; it is merely balanced by an equal negative work from friction." },
            { "label": "the net work is zero, but individual forces do non-zero work", "nudge": null },
            { "label": "the work done by friction is positive", "nudge": "Kinetic friction here opposes the sliding, so its work is negative. Static friction on a driving surface can be positive, but this is not that case." }
          ],
          "correct": 2,
          "solution": "Constant velocity gives Δ<i>K</i> = 0, so <i>W</i><sub>net</sub> = 0. The applied force does positive work and friction does an exactly equal negative work; the two cancel while both remain real."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] A force of 50 N acts at 37° to the horizontal on a body, moving it 6 m horizontally. Find the work done. Take cos 37° = 0.8.", "a": "<i>W</i> = <i>FS</i> cos θ = (50)(6)(0.8) = 240 J." },
            { "q": "[NEET] A stone tied to a string is whirled in a horizontal circle at constant speed. How much work does the tension do in one complete revolution, and why?", "a": "0 J. The tension points along the string toward the centre at every instant, and so is perpendicular to the instantaneous displacement throughout." },
            { "q": "[JEE Main] Find λ for which <i>A</i> = 2î + λĵ + k̂ is perpendicular to <i>B</i> = î − 2ĵ + 3k̂.", "a": "Perpendicular means <i>A</i> · <i>B</i> = 0, so (2)(1) + (λ)(−2) + (1)(3) = 5 − 2λ = 0, giving λ = 5/2 = 2.5 (a pure number, since λ scales a vector component)." },
            { "q": "[JEE Main] A variable force <i>F</i> = (6<i>x</i> − 2) N acts on a 3 kg particle moving along the x-axis from <i>x</i> = 1 m to <i>x</i> = 3 m. Find the work done.", "a": "<i>W</i> = [3<i>x</i><sup>2</sup> − 2<i>x</i>] from 1 to 3 = (27 − 6) − (3 − 2) = 20 J. The mass is not needed for the work." },
            { "q": "[JEE Advanced] A block slides from rest down a rough incline of height <i>H</i> = 2 m and base <i>l</i> = 3 m, with μ = 0.4. Using the work-energy theorem, find its speed at the bottom. Take <i>g</i> = 10 m/s<sup>2</sup>.", "a": "Friction's work is μ<i>mg</i> cos θ times the slope length, and (cos θ)(slope length) is just the base <i>l</i>. So ½<i>mv</i><sup>2</sup> = <i>mgH</i> − μ<i>mgl</i>, giving <i>v</i> = √(2<i>g</i>(<i>H</i> − μ<i>l</i>)) = √(2(10)(2 − 1.2)) = √16 = 4 m/s." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Equating one force's work with Δ<i>K</i>.</b> The theorem uses the <i>net</i> work, summed over every force. Writing <i>W</i><sub>gravity</sub> = Δ<i>K</i> while friction or tension is also acting is a guaranteed mark-loser: tally them all, or use the single net force.",
            "<b>Dropping the sign of work.</b> Students compute |<i>FS</i> cos θ| and forget that cos θ can be negative. Negative work is physically real, it means energy is being removed, and losing that minus quietly corrupts every energy calculation downstream.",
            "<b>Assuming friction always does negative work.</b> On the driven body of a system, a box on an accelerating truck bed or your own foot on the ground as you walk forward, static friction does <b>positive</b> work. Friction opposes relative slipping, not motion itself.",
            "<b>Forgetting that work is frame-dependent.</b> Displacement looks different to a passenger and to someone on the platform, so the same force does different work to each. Pick one frame and hold it for the whole problem.",
            "<b>Using <i>FS</i> cos θ when the force varies or the path curves.</b> That formula assumes a constant force on a straight path. The moment either fails, switch to the integral, which is the area under the F versus x graph."
          ]
        },
        {
          "t": "protip",
          "html": "before grinding through any work calculation, ask the sign first: along the motion gives +, against gives −, perpendicular gives 0. that one question zeroes out the normal reaction, the tension on a circular path, and gravity during horizontal motion, and it often turns a messy problem into a one-line answer. two more reflexes worth burning in: whenever a body's speed is unchanged you already know <i>W</i><sub>net</sub> = 0 without computing anything, and on any find-the-angle question compute the dot product first, because if it vanishes the answer is 90° and you are done."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "W = F · S = FS cos θ", "note": "a scalar, but a signed one: same direction +, against −, perpendicular 0" },
            { "f": "W = ∫ F dx = area under the F-x graph", "note": "the form to use the moment F varies; area below the axis is negative" },
            { "f": "K = ½mv<sup>2</sup>", "note": "never negative, and it doubles four times over when the speed doubles" },
            { "f": "W<sub>net</sub> = ΔK = K<sub>f</sub> − K<sub>i</sub>", "note": "net means all forces; one force's work is not ΔK" },
            { "f": "A · B = AB cos θ = A<sub>x</sub>B<sub>x</sub> + A<sub>y</sub>B<sub>y</sub> + A<sub>z</sub>B<sub>z</sub>", "note": "zero dot with non-zero vectors means a right angle" }
          ],
          "aids": [
            "\"same direction plus, against minus, dead perpendicular zero\"",
            "\"work is signed; energy is not\""
          ]
        }
      ]
    },
    {
      "n": "02",
      "title": "Mechanical Energy: Kinetic, Potential, and the Curve That Holds Both",
      "chip": "02 ENERGY",
      "kalam": "the slope of U is the force, and the sign of U'' is the verdict",
      "blocks": [
        {
          "t": "p",
          "html": "Work transfers energy. But what is energy itself, and where does it live? In mechanics it comes in exactly two flavours, and almost every problem in this chapter is the story of one turning into the other. <b>Kinetic energy</b> is the easy one: the energy a body has <i>because it is moving</i>. A cricket ball resting on the ground is harmless; the same ball at 140 km/h can crack a helmet. Same ball, same mass, and the only difference is motion. Two facts about <i>K</i> = ½<i>mv</i><sup>2</sup> to burn in immediately. It is <b>always positive</b>, because you are squaring the speed, so a ball going left and a ball going right at the same speed carry identical <i>K</i>. And it grows with the <b>square</b> of speed: double the speed and you quadruple the energy, which is exactly why high-speed accidents are so much more destructive than the speed ratio suggests."
        },
        {
          "t": "p",
          "html": "<b>Potential energy</b> is the subtle one. It is energy a body, or really a <i>system</i>, has stored up because of its <b>position or configuration</b>, waiting to be released. A stretched bowstring, a stone held at the edge of a terrace, a compressed spring in a toy gun: nothing is moving yet, but energy is locked in place, ready to become motion the instant you let go. One deep idea has to be accepted before any of it makes sense: <b>potential energy exists only for conservative forces</b>, the ones that give your energy back. Gravity and the spring force are the classics. Lift a stone and lower it, and gravity returns every joule. There is no such thing as friction potential energy, because friction eats energy as heat and never refunds it. Stored, recoverable energy is only possible for forces that play fair."
        },
        {
          "t": "think",
          "html": "imagine carrying a bucket of water up to the rooftop tank. you sweat, you do work against gravity, and that work does not vanish, it gets <i>deposited</i> into the water as gravitational potential energy. open a tap on the ground floor and the same energy comes rushing back out as the kinetic energy of falling water, which is exactly how a small hydro turbine spins. lifting charges the system up, releasing discharges it. potential energy is nature's rechargeable battery, and only conservative forces have one."
        },
        {
          "t": "p",
          "html": "A second idea trips up even strong students: <b>potential energy is always measured against a reference level you choose</b>. A book on a table has, say, 20 J relative to the floor, but 0 J relative to the table and a negative value relative to the ceiling. None of these is wrong. Only <b>differences</b> in <i>U</i> are physically meaningful, so you may plant the zero wherever it is convenient. And <i>U</i> really belongs to a <b>system</b>, not to a lone object: gravitational potential energy is a property of the body-and-Earth pair, because it arises from the interaction between them. We loosely say the potential energy of the book, but strictly it is the potential energy of the book-and-Earth configuration. Add the two flavours together and you have the headline quantity of the whole chapter, the <b>mechanical energy</b> <i>E</i> = <i>K</i> + <i>U</i>."
        },
        {
          "t": "def",
          "term": "Which gravitational formula, and when",
          "html": "There are two, for two different regimes, and reaching for the wrong one is a classic error. <b><i>U</i> = <i>mgh</i> is an approximation valid only near the Earth's surface</b>, where <i>g</i> is effectively constant over the heights involved, and its zero sits wherever you put <i>h</i> = 0. <b>For large distances you must use <i>U</i> = −<i>Gm</i><sub>1</sub><i>m</i><sub>2</sub>/<i>r</i></b>, which correctly accounts for gravity weakening with distance and takes its zero at infinity. That formula wears a minus sign because gravity is always attractive: you would have to <i>supply</i> energy to pull the two bodies apart out to infinity. A repulsive field, two like charges, carries a positive <i>U</i> instead, because energy was spent pushing them together and sits stored, ready to fling them apart. Satellites, escape speed, or any problem spanning large heights: switch to the general form. Spotting which regime you are in is half the battle."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE TWO ENERGIES",
          "main": "<i>K</i> = ½<i>mv</i><sup>2</sup> = <i>p</i><sup>2</sup>/2<i>m</i>, so <i>p</i> = √(2<i>mK</i>)<br>Δ<i>U</i> = −∫ <i>F</i> · <i>dr</i>, and in one dimension <i>F</i> = −<i>dU</i>/<i>dx</i>",
          "legend": [
            "<i>m</i> is the mass in kg, <i>v</i> the speed in m/s and <i>p</i> = <i>mv</i> the linear momentum in kg m/s; <i>K</i> is in joules and is never negative",
            "<i>U</i> is the potential energy in joules and <i>F</i> the conservative force in newtons; <i>x</i> and <i>r</i> are positions in metres",
            "the second line is one statement read both ways: potential energy is minus the work a conservative force does, and the force is minus the slope of the potential-energy curve"
          ],
          "note": "The force always points <i>downhill</i> on the <i>U</i> curve, toward lower potential energy. Drop that minus sign and every force in your answer reverses, turning stable equilibria into unstable ones."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE STANDARD POTENTIAL ENERGIES",
          "tag": "conservative forces only",
          "main": "gravity near Earth: <i>U</i> = <i>mgh</i><br>spring: <i>U</i> = ½<i>kx</i><sup>2</sup><br>gravity in general: <i>U</i> = −<i>Gm</i><sub>1</sub><i>m</i><sub>2</sub>/<i>r</i>",
          "legend": [
            "<i>h</i> is the height above the chosen reference in metres and <i>g</i> = 9.8 m/s<sup>2</sup> near the surface",
            "<i>k</i> is the spring constant in N/m, with dimensions [M T<sup>−2</sup>], and <i>x</i> is the deformation from the spring's <i>natural</i> length, stretch or compression alike",
            "<i>G</i> = 6.67 × 10<sup>−11</sup> N m<sup>2</sup>/kg<sup>2</sup>, <i>m</i><sub>1</sub> and <i>m</i><sub>2</sub> are the two masses in kg and <i>r</i> their separation in metres"
          ],
          "note": "The work to change a spring's deformation from <i>x</i><sub>1</sub> to <i>x</i><sub>2</sub> is ½<i>k</i>(<i>x</i><sub>2</sub><sup>2</sup> − <i>x</i><sub>1</sub><sup>2</sup>), the difference of the squares. It is never ½<i>k</i>(<i>x</i><sub>2</sub> − <i>x</i><sub>1</sub>)<sup>2</sup>, and this catches people constantly."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY A SPRING STORES ½kx², TAP A LINE",
          "steps": [
            {
              "eq": "Hooke's law: to hold a stretch <i>x</i> you must apply <i>F</i> = <i>kx</i>",
              "why": "The spring pulls back in proportion to how far you have deformed it, so the force you must supply grows linearly from zero as you stretch. This is why the naive F times S will not do."
            },
            {
              "eq": "<i>W</i> = ∫ from 0 to <i>x</i> of <i>kx'</i> <i>dx'</i>",
              "why": "The force is not constant, so add up the work over infinitesimal steps: over a sliver dx' at deformation x' the work is kx' dx'. This is exactly the area under the F versus x line from the last topic, and that line is a straight one through the origin."
            },
            {
              "eq": "<i>W</i> = ½<i>kx</i><sup>2</sup>",
              "why": "Integrating, or equivalently reading the triangle of base x and height kx, gives half the base times the height. The parabola in x is where the square comes from: doubling the deformation quadruples the stored energy."
            },
            {
              "eq": "<i>U</i><sub>spring</sub> = ½<i>kx</i><sup>2</sup>",
              "why": "The spring force is conservative, so it hands this work straight back on release. That is the whole justification for calling the stored quantity a potential energy rather than just a work you happened to do."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 4 · SPRING ENERGY IS THE TRIANGLE",
          "chips": ["area under F = kx"],
          "captions": [
            "The applied force rises linearly from zero, so the area under it is a triangle of base x and height kx. Half base times height is ½kx², and that is the energy the spring now holds. Read off why the change from x₁ to x₂ is the difference of two triangles, ½k(x₂² − x₁²), and never the triangle of the difference."
          ],
          "frames": [
            {
              "x": [0, 6.4], "y": [0, 7.6],
              "axisX": "x (m)", "axisY": "F (N)",
              "ticksX": { "every": 1 }, "ticksY": { "every": 2 },
              "curves": [{ "c": "line", "m": 1.2, "k": 0 }],
              "polys": [
                { "pts": [[0, 0], [5, 6], [5, 0]], "close": true, "fill": "wash", "tone": "amber", "label": "U = ½kx²" }
              ],
              "points": [{ "x": 5, "y": 6, "label": "kx", "at": "nw" }]
            }
          ]
        },
        {
          "t": "p",
          "html": "Now the single most examinable object in this topic: the <b>potential energy curve</b>. A graph of <i>U</i> against <i>x</i> encodes the entire one-dimensional dynamics of a particle, and three readings pull it all out. First, the <b>force at any point is minus the slope</b>. Where the curve rises to the right, the force points left; the steeper the slope, the stronger the force. Second, <b>equilibrium is where the curve is flat</b>, <i>dU</i>/<i>dx</i> = 0, because no slope means no force. Third, the <b>shape at that flat point classifies it</b>: a valley is <b>stable</b>, since a nudge puts the particle on a slope that pushes it back, while a hilltop is <b>unstable</b>, since a nudge puts it on a slope that shoves it further away. A flat plateau is neutral, and the particle simply stays wherever you leave it."
        },
        {
          "t": "p",
          "html": "One more reading, and it is the one JEE Advanced likes. Draw a horizontal line at the particle's <b>total energy</b> <i>E</i>. Wherever that line meets the curve, <i>K</i> = <i>E</i> − <i>U</i> = 0, so the particle is momentarily at rest and about to reverse: those are its <b>turning points</b>. And because kinetic energy can never be negative, the particle can only exist in regions where <i>U</i> ≤ <i>E</i>. A valley whose walls rise above the energy line is therefore a trap: the particle rattles back and forth inside it forever, unable to climb out. The hilltop beside it is an <b>energy barrier</b>, and if the particle ever has enough energy to cross it, it escapes for good. That single picture runs from a molecular bond to a planetary orbit."
        },
        {
          "t": "defgrid",
          "title": "Reading a U-x curve, in four lines",
          "rows": [
            { "k": "Force at a point", "v": "<i>F</i> = −<i>dU</i>/<i>dx</i>, the negative slope. Uphill to the right means the force points left" },
            { "k": "Equilibrium", "v": "wherever the curve is flat, <i>dU</i>/<i>dx</i> = 0, so the net force vanishes" },
            { "k": "Stable or unstable", "v": "<i>d</i><sup>2</sup><i>U</i>/<i>dx</i><sup>2</sup> > 0 is a valley and stable; < 0 is a hilltop and unstable; = 0 is a plateau and neutral" },
            { "k": "Turning points", "v": "where the horizontal line <i>E</i> cuts the curve. There <i>K</i> = <i>E</i> − <i>U</i> = 0 and the particle reverses" },
            { "k": "Forbidden region", "v": "anywhere <i>U</i> > <i>E</i>. Kinetic energy cannot be negative, so the particle simply never goes there" }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 5 · THE POTENTIAL ENERGY CURVE",
          "chips": ["equilibria", "turning points"],
          "captions": [
            "U(x) = 2x³ − 9x² + 12x. The curve is flat at x = 1 m and x = 2 m, so both are equilibria. The hilltop at x = 1 m is unstable, since a nudge sends the particle further away; the valley at x = 2 m is stable, since a nudge is pushed back. The second derivative, 12x − 18, is negative at the first and positive at the second, which is the same verdict written as arithmetic.",
            "Now draw the total energy at 4.6 J. It cuts the curve at about x = 1.44 m and x = 2.40 m, where K = E − U = 0 and the particle reverses. The barrier at x = 1 m stands at U = 5 J, higher than E, so a particle placed in the well is trapped between the two turning points and rattles there forever."
          ],
          "frames": [
            {
              "x": [-0.2, 3.4], "y": [-3, 16],
              "axisX": "x (m)", "axisY": "U (J)",
              "ticksX": { "every": 1 }, "ticksY": { "at": [0, 5, 10, 15] },
              "curves": [{ "c": "poly", "coeffs": [0, 12, -9, 2] }],
              "points": [
                { "x": 1, "y": 5, "label": "unstable", "at": "nw" },
                { "x": 2, "y": 4, "label": "stable", "at": "se" }
              ]
            },
            {
              "x": [-0.2, 3.4], "y": [-3, 16],
              "axisX": "x (m)", "axisY": "U (J)",
              "ticksX": { "every": 1 }, "ticksY": { "at": [0, 5, 10, 15] },
              "curves": [
                { "c": "poly", "coeffs": [0, 12, -9, 2] },
                { "c": "line", "m": 0, "k": 4.6, "dash": true, "soft": true }
              ],
              "points": [
                { "x": 1.44, "y": 4.6, "label": "K = 0", "at": "nw" },
                { "x": 2.4, "y": 4.6, "label": "K = 0", "at": "ne" }
              ],
              "labels": [{ "x": 0.4, "y": 7.5, "text": "E = 4.6 J", "soft": true }]
            }
          ]
        },
        {
          "t": "proc",
          "title": "The three-line drill for any U(x) question",
          "steps": [
            "<b>Differentiate once and flip the sign:</b> <i>F</i> = −<i>dU</i>/<i>dx</i>. Substitute the given position straight in if the question asks for a force, and read the sign as a direction.",
            "<b>Set <i>F</i> = 0 to find every equilibrium position.</b> Equilibrium is about the <i>slope</i> of <i>U</i>, never its value: setting <i>U</i> = 0 instead is the commonest wrong turn here.",
            "<b>Differentiate again and read the sign of <i>d</i><sup>2</sup><i>U</i>/<i>dx</i><sup>2</sup> at each one.</b> Positive is a valley and stable, negative is a hilltop and unstable.",
            "<b>If a total energy is given, draw its horizontal line and find where it cuts.</b> Those are the turning points, and the particle is confined between the pair it starts inside.",
            "<b>Sanity check with the physics, not the algebra.</b> The particle must sit lower in a valley than on the neighbouring hills, and it can never be found where <i>U</i> exceeds <i>E</i>."
          ]
        },
        {
          "t": "proc",
          "title": "Spring problems: finding a maximum compression",
          "steps": [
            "<b>Ask what is momentarily at rest at maximum compression.</b> The block is: that is what makes the compression maximum, so <i>K</i> = 0 there and the whole energy budget sits in the spring.",
            "<b>Write the full energy balance between the two instants</b>, with a spring term ½<i>kx</i><sup>2</sup> and a gravity term <i>mgh</i> measured from any fixed level you like, provided you use the same level twice.",
            "<b>If the block was already moving, its kinetic energy is part of the budget:</b> ½<i>mv</i><sup>2</sup> = ½<i>kx</i><sup>2</sup> for a block sliding into a spring on a smooth floor.",
            "<b>If the block falls onto a vertical spring, gravity keeps working <i>during</i> the compression.</b> The correct balance over a drop <i>h</i> followed by a compression <i>x</i> is <i>mg</i>(<i>h</i> + <i>x</i>) = ½<i>kx</i><sup>2</sup>, a quadratic, and the extra <i>mgx</i> is the term everybody forgets.",
            "<b>Solve and discard the negative root.</b> A compression is a length, so a negative answer is not a second solution, it is a sign that the quadratic was set up with the wrong reference level."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A 5 kg stone is lifted onto a shelf 3.0 m above the floor. (a) Find its gravitational potential energy relative to the floor. (b) It slips off and falls freely. Find its kinetic energy and speed just as it reaches the floor. Take <i>g</i> = 10 m/s<sup>2</sup> for quick arithmetic.",
          "steps": [
            "(a) Taking the floor as the reference, <i>U</i> = <i>mgh</i> = (5)(10)(3.0) = 150 J.",
            "(b) Falling freely, only gravity does work, so all that potential energy converts into kinetic energy: <i>K</i> = 150 J at the floor.",
            "From <i>K</i> = ½<i>mv</i><sup>2</sup>: 150 = ½(5)<i>v</i><sup>2</sup>, so <i>v</i><sup>2</sup> = 60 m<sup>2</sup>/s<sup>2</sup> and <i>v</i> = √60 ≈ 7.7 m/s.",
            "Note the mass cancelled out of the speed the moment you wrote <i>mgh</i> = ½<i>mv</i><sup>2</sup>, which is the hallmark of every free-fall energy problem: a heavier stone arrives with more energy but at exactly the same speed."
          ],
          "ans": "U = 150 J · K = 150 J · v ≈ 7.7 m/s"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "The kinetic energy of a moving truck is increased to 9 times its original value. By what factor does its linear momentum increase: 9, 81, 3, or √3?",
          "steps": [
            "The reflex is 9 times the energy, so 9 times the momentum. That would be true if <i>K</i> were proportional to <i>p</i>, and it is not.",
            "Use <i>K</i> = <i>p</i><sup>2</sup>/2<i>m</i>, so <i>p</i> = √(2<i>mK</i>) and with the mass unchanged <i>p</i> is proportional to √<i>K</i>.",
            "Therefore <i>p</i><sub>new</sub>/<i>p</i><sub>old</sub> = √(<i>K</i><sub>new</sub>/<i>K</i><sub>old</sub>) = √9 = 3.",
            "Keep <i>K</i> proportional to <i>p</i><sup>2</sup> on a mental sticky note: momentum scales with the <i>square root</i> of kinetic energy. It is the single most-tested relation in this topic."
          ],
          "ans": "3 (a pure ratio: the momentum triples)"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "The potential energy of a particle moving along the x-axis is <i>U</i>(<i>x</i>) = (<i>x</i><sup>2</sup> − 4<i>x</i> + 3) J, with <i>x</i> in metres. (a) Find the force on it at <i>x</i> = 3 m. (b) Locate the equilibrium position and say whether it is stable or unstable.",
          "steps": [
            "Run the drill. <i>F</i> = −<i>dU</i>/<i>dx</i> = −(2<i>x</i> − 4) = (4 − 2<i>x</i>) N.",
            "(a) At <i>x</i> = 3 m: <i>F</i> = 4 − 2(3) = −2 N. The minus sign means the force points in the −<i>x</i> direction, back toward smaller <i>x</i>.",
            "(b) Equilibrium is where <i>F</i> = 0, so 4 − 2<i>x</i> = 0 and <i>x</i> = 2 m.",
            "Classify with the second derivative: <i>d</i><sup>2</sup><i>U</i>/<i>dx</i><sup>2</sup> = 2, which is positive, so <i>U</i> has a minimum there and the equilibrium is stable. Consistent with part (a): at <i>x</i> = 3 m the particle is pushed back toward <i>x</i> = 2 m."
          ],
          "ans": "F = −2 N at x = 3 m · stable equilibrium at x = 2 m"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "A particle of mass <i>m</i> moves in one dimension under a conservative force with <i>U</i>(<i>x</i>) = (2<i>x</i><sup>3</sup> − 9<i>x</i><sup>2</sup> + 12<i>x</i>) J, <i>x</i> in metres. Find every equilibrium position and classify it, then say where the particle would oscillate if given a tiny kinetic energy at the stable point.",
          "steps": [
            "<i>F</i> = −<i>dU</i>/<i>dx</i> = −(6<i>x</i><sup>2</sup> − 18<i>x</i> + 12) = −6(<i>x</i> − 1)(<i>x</i> − 2), so <i>F</i> = 0 at <i>x</i> = 1 m and <i>x</i> = 2 m.",
            "<i>d</i><sup>2</sup><i>U</i>/<i>dx</i><sup>2</sup> = 12<i>x</i> − 18. At <i>x</i> = 1 m this is −6, negative, so <i>U</i> is a maximum and the equilibrium is <b>unstable</b>. At <i>x</i> = 2 m it is +6, positive, so <i>U</i> is a minimum and the equilibrium is <b>stable</b>.",
            "Check the values: <i>U</i>(1) = 5 J and <i>U</i>(2) = 4 J, so the picture is a hilltop at 5 J beside a valley floor at 4 J, exactly as the derivatives claim.",
            "Given a tiny <i>K</i> at <i>x</i> = 2 m, the particle rocks inside the valley. On the right the wall rises immediately. On the left the curve climbs only as far as the hilltop at <i>x</i> = 1 m, and with an energy barely above 4 J the particle cannot reach 5 J, so it turns back. It is trapped, oscillating about <i>x</i> = 2 m.",
            "The peak at <i>x</i> = 1 m is the energy barrier. Give the particle more than 1 J of kinetic energy at the valley floor and it clears the peak, after which the curve falls away to the left and it escapes for good."
          ],
          "ans": "x = 1 m unstable · x = 2 m stable · trapped in the well about x = 2 m, with a 1 J barrier at x = 1 m"
        },
        {
          "t": "mcq",
          "q": "A light body and a heavy body have the <b>same momentum</b>. Which has the greater kinetic energy?",
          "opts": [
            { "label": "the heavier body", "nudge": "This is the gut feeling that heavier means more energy, and it is true at equal <i>speed</i>, not at equal momentum. Here the mass sits in the denominator." },
            { "label": "the lighter body", "nudge": null },
            { "label": "both are equal", "nudge": "This ignores the mass dependence altogether; K = p<sup>2</sup>/2m plainly contains m." },
            { "label": "it depends on their velocities", "nudge": "The panic hedge. Fixing the momentum fixes the answer completely, so nothing further is needed." }
          ],
          "correct": 1,
          "solution": "Write <i>K</i> = <i>p</i><sup>2</sup>/2<i>m</i>. With <i>p</i> held fixed, <i>K</i> is inversely proportional to <i>m</i>, so the smaller mass carries the larger kinetic energy. This is the canonical NEET separator."
        },
        {
          "t": "mcq",
          "q": "Which statement about potential energy is correct?",
          "opts": [
            { "label": "it is always positive", "nudge": "Over-generalises the mgh case above the reference; below the reference the very same formula is negative." },
            { "label": "it is always negative", "nudge": "Over-generalises the −Gm<sub>1</sub>m<sub>2</sub>/r convention, which is negative only because its zero was placed at infinity." },
            { "label": "it can be positive, negative or zero depending on the chosen reference", "nudge": null },
            { "label": "it is always equal to the kinetic energy", "nudge": "Confuses the two: they are independent quantities that merely add to give the mechanical energy E." }
          ],
          "correct": 2,
          "solution": "Only <i>changes</i> in potential energy are physical. The absolute value depends entirely on where you set <i>U</i> = 0, which is your free choice."
        },
        {
          "t": "mcq",
          "q": "The potential energy of a particle is <i>U</i>(<i>x</i>) = (5<i>x</i><sup>2</sup> − 10<i>x</i>) J. The equilibrium position is at:",
          "opts": [
            { "label": "x = 0", "nudge": "This comes from setting U = 0 rather than dU/dx = 0, confusing zero energy with zero force. Equilibrium is about the slope, never the value." },
            { "label": "x = 1 m", "nudge": null },
            { "label": "x = 2 m", "nudge": "An arithmetic slip in solving 10x = 10." },
            { "label": "x = 0.5 m", "nudge": "The same slip in the other direction, dividing where you should not." }
          ],
          "correct": 1,
          "solution": "<i>F</i> = −<i>dU</i>/<i>dx</i> = −(10<i>x</i> − 10) = 10 − 10<i>x</i>. Setting <i>F</i> = 0 gives <i>x</i> = 1 m, and since <i>d</i><sup>2</sup><i>U</i>/<i>dx</i><sup>2</sup> = 10 > 0 it is a stable one."
        },
        {
          "t": "mcq",
          "q": "If the compression of a spring is doubled, the elastic potential energy stored becomes:",
          "opts": [
            { "label": "twice as large", "nudge": "Linear thinking applied to a squared quantity, and the most common error in the whole topic." },
            { "label": "four times as large", "nudge": null },
            { "label": "half as large", "nudge": "This reverses the dependence entirely." },
            { "label": "unchanged", "nudge": "This ignores the dependence on x altogether; the spring plainly stores more when squeezed harder." }
          ],
          "correct": 1,
          "solution": "<i>U</i> = ½<i>kx</i><sup>2</sup> is proportional to <i>x</i><sup>2</sup>, so doubling <i>x</i> multiplies <i>U</i> by 2<sup>2</sup> = 4. Any time a quantity goes as a square, doubling the input quadrupling the output should fire automatically."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] A spring of force constant 200 N/m is compressed by 0.10 m. Calculate the elastic potential energy stored.", "a": "<i>U</i> = ½<i>kx</i><sup>2</sup> = ½(200)(0.10)<sup>2</sup> = ½(200)(0.01) = 1.0 J." },
            { "q": "[NEET] Two bodies of masses <i>m</i> and 4<i>m</i> have equal kinetic energies. Find the ratio of the magnitudes of their linear momenta.", "a": "<i>p</i> = √(2<i>mK</i>), so at equal <i>K</i> the momentum goes as √<i>m</i>. The ratio is √<i>m</i> : √(4<i>m</i>) = 1 : 2 (a pure ratio)." },
            { "q": "[JEE Main] The potential energy of a particle is <i>U</i>(<i>x</i>) = (3<i>x</i><sup>2</sup> − 6<i>x</i> + 5) J. Find the position of stable equilibrium.", "a": "<i>F</i> = −(6<i>x</i> − 6) = 6 − 6<i>x</i>, zero at <i>x</i> = 1 m. Since <i>d</i><sup>2</sup><i>U</i>/<i>dx</i><sup>2</sup> = 6 > 0, that point is stable: <i>x</i> = 1 m." },
            { "q": "[JEE Main] A spring of constant 50 N/m is stretched from an extension of 5 cm to 15 cm. Find the work done.", "a": "Use the difference of the squares: <i>W</i> = ½<i>k</i>(<i>x</i><sub>2</sub><sup>2</sup> − <i>x</i><sub>1</sub><sup>2</sup>) = ½(50)(0.15<sup>2</sup> − 0.05<sup>2</sup>) = 25(0.0225 − 0.0025) = 0.50 J. Squaring the difference instead would give 0.25 J, which is wrong." },
            { "q": "[JEE Advanced] A particle moves in the potential <i>U</i>(<i>x</i>) = (<i>x</i><sup>4</sup> − 8<i>x</i><sup>2</sup>) J. Find all positions of stable equilibrium.", "a": "<i>dU</i>/<i>dx</i> = 4<i>x</i><sup>3</sup> − 16<i>x</i> = 4<i>x</i>(<i>x</i><sup>2</sup> − 4), zero at <i>x</i> = 0, +2 m, −2 m. Then <i>d</i><sup>2</sup><i>U</i>/<i>dx</i><sup>2</sup> = 12<i>x</i><sup>2</sup> − 16 is −16 at the origin (unstable) and +32 at both others. Stable at <i>x</i> = +2 m and <i>x</i> = −2 m." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Inventing a potential energy for a non-conservative force.</b> There is no friction potential energy and no air-drag potential energy. If a force dissipates energy as heat, it has no <i>U</i> at all, full stop.",
            "<b>Dropping the minus sign in <i>F</i> = −<i>dU</i>/<i>dx</i>.</b> The force points toward <i>decreasing</i> potential energy, downhill on the curve. Forget the minus and every force in your answer reverses, turning valleys into hilltops in your classification.",
            "<b>Confusing the <i>K</i> and <i>p</i> relation.</b> <i>K</i> goes as <i>p</i><sup>2</sup>, not as <i>p</i>. Doubling the speed doubles the momentum but quadruples the kinetic energy, and mixing these wrecks NEET MCQs.",
            "<b>Using ½<i>k</i>(Δ<i>x</i>)<sup>2</sup> for a change of stretch.</b> The work from <i>x</i><sub>1</sub> to <i>x</i><sub>2</sub> is ½<i>k</i>(<i>x</i><sub>2</sub><sup>2</sup> − <i>x</i><sub>1</sub><sup>2</sup>). Take the difference of the squares, never the square of the difference.",
            "<b>Writing <i>mgh</i> = ½<i>kx</i><sup>2</sup> for a block dropped onto a vertical spring.</b> Gravity keeps doing work all the way down through the compression too, so the correct balance is <i>mg</i>(<i>h</i> + <i>x</i>) = ½<i>kx</i><sup>2</sup>. Omitting <i>mgx</i> under-reads the compression by around a tenth, and an examiner who offers that number as a distractor knows exactly which term you dropped."
          ]
        },
        {
          "t": "protip",
          "html": "run the same three-line drill on every <i>U</i>(<i>x</i>) question: first <i>F</i> = −<i>U</i>′(<i>x</i>), then set <i>F</i> = 0 for the equilibrium positions, then check the sign of <i>U</i>″ there, positive meaning a valley meaning stable. valley stable, hilltop unstable, and the whole family of jee advanced pe-curve questions falls in under a minute. for springs, two habits pay for themselves: at maximum compression the block is momentarily at rest, so set <i>K</i> = 0 and let the spring hold the entire budget; and if the block <i>fell</i> onto the spring, write <i>mg</i>(<i>h</i> + <i>x</i>) = ½<i>kx</i><sup>2</sup> and solve the quadratic, because gravity does not stop working when the spring starts."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "K = ½mv<sup>2</sup> = p<sup>2</sup>/2m, always ≥ 0", "note": "K goes as p squared, so 9 times the energy is 3 times the momentum" },
            { "f": "U = mgh · U = ½kx<sup>2</sup> · U = −Gm<sub>1</sub>m<sub>2</sub>/r", "note": "mgh only near the surface; switch to the general form for satellites" },
            { "f": "F = −dU/dx", "note": "the force is the negative slope and always points downhill" },
            { "f": "dU/dx = 0 at equilibrium; U'' > 0 stable, U'' < 0 unstable", "note": "valley stable, hilltop unstable, plateau neutral" },
            { "f": "E = K + U, and K = E − U ≥ 0", "note": "turning points where E meets the curve; U > E is forbidden ground" }
          ],
          "aids": [
            "\"K goes as p squared, never as p\"",
            "\"valley stable, hilltop unstable\""
          ]
        }
      ]
    },
    {
      "n": "03",
      "title": "Conservative Forces, and the Law That Nothing Is Ever Lost",
      "chip": "03 CONSERVATION",
      "kalam": "scan the forces first, then pick the ledger",
      "blocks": [
        {
          "t": "p",
          "html": "Imagine two shopkeepers. The first is scrupulously honest: whatever you deposit, you can withdraw later, down to the last rupee. The second skims a little every time money passes through his hands, so you never get back quite what you put in. Forces split into exactly these two personalities. A <b>conservative force</b> gives back every joule. Lift a stone and gravity does negative work on it, storing energy in the stone-and-Earth system; let it fall and gravity does an exactly equal positive work, handing all of it back as motion. A <b>non-conservative force</b> skims. Slide a book across a table and friction turns its kinetic energy into heat; push it back to the start and friction does negative work <i>again</i>. It never reverses sign to refund you. The energy is not destroyed, it warms the table and the book, but it is gone from the <b>mechanical</b> budget forever."
        },
        {
          "t": "think",
          "html": "picture two routes from your house to the market, a short straight lane and a long winding one. carrying a heavy bag, the <i>gravitational</i> work is identical on both, because it depends only on the height difference between home and market, not on the path. that is path independence, the signature of a conservative force. but the effort you spend fighting friction depends entirely on the distance walked, and the winding route tires you far more. now take the round trip: go and come straight back. gravity's total work is exactly zero, you ended where you started. friction's total is decidedly not zero, and you are exhausted, and all of it became heat."
        },
        {
          "t": "p",
          "html": "So there are <b>three equivalent tests</b> for a conservative force, and they always agree: the work it does is <b>path-independent</b>, depending only on the endpoints; its work over <b>any closed loop is exactly zero</b>; and the energy it transfers is <b>fully recoverable</b>, which is what lets it own a potential energy at all. Pass one and you pass all three. Gravity, the spring force and the electrostatic force pass. Friction, viscous drag and air resistance fail, and the giveaway is that they depend on the <b>path</b> or on the <b>velocity</b>. In two dimensions there is a mechanical test too: a force <i>F</i> = <i>F<sub>x</sub></i>î + <i>F<sub>y</sub></i>ĵ is conservative exactly when ∂<i>F<sub>y</sub></i>/∂<i>x</i> = ∂<i>F<sub>x</sub></i>/∂<i>y</i>, the two cross-derivatives matching."
        },
        {
          "t": "p",
          "html": "Now the big consequence. If <b>only</b> conservative forces do work on a system, nothing skims energy away: kinetic and potential energy trade back and forth, but their <b>sum stays exactly constant</b>. That constant sum is the mechanical energy <i>E</i> = <i>K</i> + <i>U</i>, and its constancy is the <b>principle of conservation of mechanical energy</b>. A pendulum trades <i>U</i> for <i>K</i> on the way down and <i>K</i> back into <i>U</i> on the way up, swinging forever in an ideal frictionless world because the total never leaks. Let friction in and it skims a little each swing, and the pendulum slowly dies, its mechanical energy bleeding away as heat. The power of the principle is that it relates the state of a system at two instants <b>without knowing anything about the messy details in between</b>: no forces to resolve, no path to track."
        },
        {
          "t": "defgrid",
          "title": "Sorting the forces into two bins",
          "rows": [
            { "k": "Conservative", "v": "path-independent · zero work on any closed loop · energy fully recoverable · owns a potential energy" },
            { "k": "Examples", "v": "gravitational, spring (elastic), electrostatic" },
            { "k": "Non-conservative", "v": "path-dependent or velocity-dependent · non-zero closed-loop work · dissipative · owns no potential energy" },
            { "k": "Examples", "v": "kinetic friction, viscous drag, air resistance" },
            { "k": "Two-dimensional test", "v": "conservative exactly when ∂<i>F<sub>y</sub></i>/∂<i>x</i> = ∂<i>F<sub>x</sub></i>/∂<i>y</i>" }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE TWO ENERGY LEDGERS",
          "tag": "pick one before writing a single line",
          "main": "only conservative forces work: <i>K<sub>i</sub></i> + <i>U<sub>i</sub></i> = <i>K<sub>f</sub></i> + <i>U<sub>f</sub></i><br>otherwise: <i>W</i><sub>nc</sub> = Δ<i>E</i> = (<i>K<sub>f</sub></i> + <i>U<sub>f</sub></i>) − (<i>K<sub>i</sub></i> + <i>U<sub>i</sub></i>)<br>for friction: |<i>W</i>| = <i>f</i> × <i>d</i><sub>sliding</sub> = heat produced",
          "legend": [
            "<i>K</i> is kinetic and <i>U</i> potential energy, both in joules; <i>E</i> = <i>K</i> + <i>U</i> is the mechanical energy",
            "<i>W</i><sub>nc</sub> is the work done by every non-conservative force, and it is negative whenever friction is doing the skimming",
            "<i>f</i> is the friction force in newtons and <i>d</i> is the total <b>sliding path length</b> in metres, never the net displacement"
          ],
          "note": "Also worth holding: <i>W</i><sub>cons</sub> = −Δ<i>U</i> = <i>U<sub>i</sub></i> − <i>U<sub>f</sub></i>. Positive conservative work means the potential energy went <i>down</i>, which is a falling stone, not a rising one."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · CONSERVATION OF MECHANICAL ENERGY, TAP A LINE",
          "steps": [
            {
              "eq": "<i>W</i><sub>net</sub> = Δ<i>K</i>",
              "why": "The work-energy theorem from the first topic, which holds for any force at all. This is the only input, and it is why the whole result is a consequence rather than a new law."
            },
            {
              "eq": "if every force doing work is conservative, <i>W</i><sub>net</sub> = <i>W</i><sub>cons</sub> = −Δ<i>U</i>",
              "why": "That is the defining property of a conservative force: its work is stored as minus the change in potential energy. This is the step that fails the moment friction is present, which is exactly where the second ledger comes from."
            },
            {
              "eq": "−Δ<i>U</i> = Δ<i>K</i>, so Δ<i>K</i> + Δ<i>U</i> = 0",
              "why": "Equate the two expressions for the same net work. Whatever kinetic energy is gained is exactly what potential energy lost, joule for joule."
            },
            {
              "eq": "Δ(<i>K</i> + <i>U</i>) = 0, so <i>K</i> + <i>U</i> = <i>E</i> = constant",
              "why": "The sum is unchanging: energy merely shuttles between the two forms. This single line lets you connect two instants of a motion without touching Newton's laws along the path in between."
            },
            {
              "eq": "with friction present: <i>W</i><sub>net</sub> = <i>W</i><sub>cons</sub> + <i>W</i><sub>nc</sub> = Δ<i>K</i>, so <i>W</i><sub>nc</sub> = Δ<i>K</i> + Δ<i>U</i> = Δ<i>E</i>",
              "why": "Split the net work into its two parts and substitute the same conservative relation. The work done by the non-conservative forces IS the change in mechanical energy, and since friction always opposes the sliding, that change is a decrease equal to the heat generated."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 6 · THE PENDULUM'S LEDGER",
          "chips": ["at the extreme", "at the bottom", "at the far extreme"],
          "captions": [
            "At the top of the swing the bob is momentarily at rest: the K box is empty and the U box is full. The bar heights are the two entries in the ledger.",
            "At the lowest point every joule has moved across: U is empty and K is full. The bob is at its fastest here, and nothing has been added or removed.",
            "At the far extreme the ledger reads exactly as it did at the first one. The total height of the two boxes is the same in all three pictures, and that constancy is the whole principle: E = K + U never changes."
          ],
          "frames": [
            {
              "x": [0, 10], "y": [0, 8], "axes": "none", "aspect": 0.75,
              "marks": [
                { "x": 3.2, "y": 7.2, "glyph": "square", "tone": "soft" },
                { "x": 0.94, "y": 5.17, "glyph": "dot" }
              ],
              "segments": [{ "from": [3.2, 7.2], "to": [0.94, 5.17], "soft": true }],
              "polys": [
                { "pts": [[7.0, 1], [7.0, 6], [7.9, 6], [7.9, 1]], "close": true, "fill": "wash", "tone": "amber" },
                { "pts": [[8.5, 1], [8.5, 6], [9.4, 6], [9.4, 1]], "close": true, "fill": "none", "tone": "soft" }
              ],
              "labels": [
                { "x": 7.45, "y": 0.45, "text": "U" },
                { "x": 8.95, "y": 0.45, "text": "K" }
              ]
            },
            {
              "x": [0, 10], "y": [0, 8], "axes": "none", "aspect": 0.75,
              "marks": [
                { "x": 3.2, "y": 7.2, "glyph": "square", "tone": "soft" },
                { "x": 3.2, "y": 4.04, "glyph": "dot" }
              ],
              "segments": [{ "from": [3.2, 7.2], "to": [3.2, 4.04], "soft": true }],
              "polys": [
                { "pts": [[7.0, 1], [7.0, 6], [7.9, 6], [7.9, 1]], "close": true, "fill": "none", "tone": "soft" },
                { "pts": [[8.5, 1], [8.5, 6], [9.4, 6], [9.4, 1]], "close": true, "fill": "wash", "tone": "green" }
              ],
              "labels": [
                { "x": 7.45, "y": 0.45, "text": "U" },
                { "x": 8.95, "y": 0.45, "text": "K" }
              ]
            },
            {
              "x": [0, 10], "y": [0, 8], "axes": "none", "aspect": 0.75,
              "marks": [
                { "x": 3.2, "y": 7.2, "glyph": "square", "tone": "soft" },
                { "x": 5.46, "y": 5.17, "glyph": "dot" }
              ],
              "segments": [{ "from": [3.2, 7.2], "to": [5.46, 5.17], "soft": true }],
              "polys": [
                { "pts": [[7.0, 1], [7.0, 6], [7.9, 6], [7.9, 1]], "close": true, "fill": "wash", "tone": "amber" },
                { "pts": [[8.5, 1], [8.5, 6], [9.4, 6], [9.4, 1]], "close": true, "fill": "none", "tone": "soft" }
              ],
              "labels": [
                { "x": 7.45, "y": 0.45, "text": "U" },
                { "x": 8.95, "y": 0.45, "text": "K" }
              ]
            }
          ]
        },
        {
          "t": "proc",
          "title": "Choosing your ledger, before writing an equation",
          "steps": [
            "<b>Scan every force that does work.</b> Gravity, springs and smooth surfaces on one side; friction, drag and anything that heats things up on the other.",
            "<b>All conservative? Jump straight to <i>E<sub>i</sub></i> = <i>E<sub>f</sub></i></b>, that is <i>K<sub>i</sub></i> + <i>U<sub>i</sub></i> = <i>K<sub>f</sub></i> + <i>U<sub>f</sub></i>. This is fast and the path is irrelevant, so a curved ramp of unknown shape costs you nothing.",
            "<b>Friction or drag present? Use <i>E<sub>i</sub></i> = <i>E<sub>f</sub></i> + heat</b>, with heat = <i>f</i> × <i>d</i><sub>sliding</sub>. Mechanical energy is no longer constant, and pretending otherwise is the commonest error in the topic.",
            "<b>Pick one reference level for <i>U</i> and use it at both instants.</b> Only differences matter, so any level works, but the same one must appear twice.",
            "<b>Stitch stages together where the physics changes.</b> A smooth ramp followed by a rough floor is two regimes with two ledgers, joined by the kinetic energy at the junction."
          ]
        },
        {
          "t": "diagram",
          "kind": "flow",
          "kicker": "FIGURE 7 · WHICH LEDGER DO YOU OWE?",
          "chips": ["the decision"],
          "captions": [
            "One question decides everything. If nothing dissipative is doing work, mechanical energy is constant and the path is irrelevant. If it is, the shortfall is exactly the heat, and heat is the friction force times the distance actually slid, never the net displacement."
          ],
          "frames": [
            {
              "flow": {
                "boxes": [
                  { "id": "q", "col": 0, "row": 1, "text": "is friction\nor drag at work?", "shape": "diamond" },
                  { "id": "no", "col": 1, "row": 0, "text": "no" },
                  { "id": "yes", "col": 1, "row": 2, "text": "yes" },
                  { "id": "cons", "col": 2, "row": 0, "text": "Ki+Ui = Kf+Uf\nE stays constant", "shape": "round" },
                  { "id": "diss", "col": 2, "row": 2, "text": "Ei = Ef + heat\nheat = f x d", "shape": "round" }
                ],
                "links": [
                  { "from": "q", "to": "no" },
                  { "from": "q", "to": "yes" },
                  { "from": "no", "to": "cons" },
                  { "from": "yes", "to": "diss" }
                ]
              }
            }
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A 0.5 kg ball is released from rest at a height of 5 m above the ground. Neglecting air resistance, use conservation of mechanical energy to find its speed just before it hits the ground. Take <i>g</i> = 10 m/s<sup>2</sup> for quick arithmetic.",
          "steps": [
            "Only gravity does work, so mechanical energy is conserved: <i>K<sub>i</sub></i> + <i>U<sub>i</sub></i> = <i>K<sub>f</sub></i> + <i>U<sub>f</sub></i>.",
            "Take the ground as the reference, so <i>U<sub>f</sub></i> = 0, and the ball starts from rest, so <i>K<sub>i</sub></i> = 0. The equation reduces to <i>mgh</i> = ½<i>mv</i><sup>2</sup>.",
            "The mass cancels: <i>v</i> = √(2<i>gh</i>) = √(2(10)(5)) = √100 = 10 m/s.",
            "All 25 J of potential energy, <i>mgh</i> = (0.5)(10)(5), converted cleanly into kinetic energy. No path details were needed, only the two end states."
          ],
          "ans": "v = 10 m/s"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "A block is carried from the floor up onto a shelf and then brought right back down to its original spot. Over this complete round trip, the work done by gravity and the work done by friction are respectively: zero and zero; zero and negative; negative and zero; or positive and negative?",
          "steps": [
            "The trap is to memorise closed loop means zero work and apply it to <b>both</b> forces, landing on zero and zero.",
            "Gravity is conservative, so over any closed path, ending where you started at the same height, its total work is exactly zero. That half is right.",
            "Friction is non-conservative. It opposes the motion on the way up <b>and</b> on the way down, doing negative work in both directions, so its round-trip total is negative and can never be zero.",
            "Burn in the qualifier: closed loop gives zero work <i>only</i> for conservative forces. The instant friction or drag appears in a round trip, that contribution is negative."
          ],
          "ans": "zero for gravity, negative for friction"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "A 5 kg block starts from rest and slides down a <b>smooth</b> curved ramp from a height of 1.8 m. At the bottom it slides onto a <b>rough</b> horizontal floor with μ = 0.4. How far does it travel on the floor before stopping? Take <i>g</i> = 10 m/s<sup>2</sup>.",
          "steps": [
            "Two regimes, two ledgers. Stage 1, the smooth ramp: only gravity does work, so all the potential energy becomes kinetic energy at the bottom. <i>K</i> = <i>mgh</i> = (5)(10)(1.8) = 90 J.",
            "Notice we never needed the ramp's shape, and we do not even need the speed at the bottom: energy methods do not care about the path.",
            "Stage 2, the rough floor: the block stops when friction has dissipated all 90 J. The friction force is <i>f</i> = μ<i>mg</i> = (0.4)(5)(10) = 20 N.",
            "Set the heat generated equal to the kinetic energy removed: <i>f</i> × <i>s</i> = 90, so 20<i>s</i> = 90 and <i>s</i> = 4.5 m."
          ],
          "ans": "s = 4.5 m"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "A particle is acted on by a force <i>F</i> = (<i>y</i>î + <i>x</i>ĵ) N, with <i>x</i> and <i>y</i> in metres. (a) Determine whether it is conservative. (b) Verify by computing the work from (0, 0) to (1, 1) along two different paths. (c) If conservative, find <i>U</i>(<i>x</i>, <i>y</i>).",
          "steps": [
            "(a) Cross-derivative test. With <i>F<sub>x</sub></i> = <i>y</i> and <i>F<sub>y</sub></i> = <i>x</i>: ∂<i>F<sub>y</sub></i>/∂<i>x</i> = 1 and ∂<i>F<sub>x</sub></i>/∂<i>y</i> = 1. They match, so the force <b>is</b> conservative.",
            "(b) The work is ∫(<i>F<sub>x</sub></i> <i>dx</i> + <i>F<sub>y</sub></i> <i>dy</i>) = ∫(<i>y</i> <i>dx</i> + <i>x</i> <i>dy</i>). Path 1, (0,0) to (1,0) to (1,1): along the first leg <i>y</i> = 0 so the integral is 0, and along the second <i>x</i> = 1 so it is ∫ from 0 to 1 of 1 <i>dy</i> = 1 J. Total 1 J.",
            "Path 2, (0,0) to (0,1) to (1,1): along the first leg <i>x</i> = 0 so the integral is 0, and along the second <i>y</i> = 1 so it is ∫ from 0 to 1 of 1 <i>dx</i> = 1 J. Total 1 J again. Path independence confirmed, exactly as a conservative force demands.",
            "(c) Since <i>F</i> = −∇<i>U</i>, we need −∂<i>U</i>/∂<i>x</i> = <i>y</i>. Integrating in <i>x</i> with <i>y</i> held fixed gives <i>U</i> = −<i>xy</i> + <i>g</i>(<i>y</i>). Then −∂<i>U</i>/∂<i>y</i> = <i>x</i> − <i>g</i>′(<i>y</i>) must equal <i>x</i>, so <i>g</i>′(<i>y</i>) = 0.",
            "Hence <i>U</i>(<i>x</i>, <i>y</i>) = −<i>xy</i> + constant, in joules. Quick check: −∂<i>U</i>/∂<i>x</i> = <i>y</i> and −∂<i>U</i>/∂<i>y</i> = <i>x</i>, both correct. And <i>U</i>(1,1) − <i>U</i>(0,0) = −1 J, which is minus the 1 J of work found in part (b), as <i>W</i><sub>cons</sub> = −Δ<i>U</i> requires."
          ],
          "ans": "conservative · W = 1 J on both paths · U(x, y) = −xy + constant, in joules"
        },
        {
          "t": "p",
          "html": "One subtlety must now be internalised, because it is the difference between a 2-mark answer and a 3-mark one. Even when mechanical energy is <b>not</b> conserved, <b>total</b> energy always is. When friction destroys 40 J of kinetic energy, that energy has not vanished: measure carefully and the block and the surface have warmed by exactly 40 J worth of heat. Rub your palms together on a cold morning and you feel it directly. So mechanical energy is lost is only shorthand for mechanical energy has been converted into a form we are no longer tracking. In an exam answer, write <b>converted to heat and sound</b>, never lost, and the marker knows you understand the broader law."
        },
        {
          "t": "p",
          "html": "And energy is far bigger than mechanics. The food you ate, the petrol in a scooter, the charge in a phone battery, the warmth of sunlight, the rumble of a loudspeaker, the output of a nuclear reactor: every one is <b>energy in a different costume</b>. The <b>law of conservation of energy</b> says energy can neither be created nor destroyed, only transformed from one form into another, and that the total energy of an isolated system stays constant forever. James Joule proved the mechanical-to-thermal conversion is exact, fixing the <b>mechanical equivalent of heat</b> at about 1 cal = 4.186 J. Then Einstein added the twist: <b>mass itself is a form of energy</b>, <i>E</i> = <i>mc</i><sup>2</sup>. Because <i>c</i> is so vast, even a sliver of mass is a flood of energy, which is exactly what powers the Sun and a nuclear reactor. The conservation law generalises to mass and energy taken together."
        },
        {
          "t": "defgrid",
          "title": "The forms of energy",
          "rows": [
            { "k": "Mechanical", "v": "kinetic and potential, the subject of the rest of this chapter" },
            { "k": "Heat (thermal)", "v": "the random jiggling motion of molecules. Hot chai has more of it than cold chai" },
            { "k": "Chemical", "v": "locked in the bonds between atoms; food, fuel and batteries all release it" },
            { "k": "Electrical", "v": "carried by moving charges; what flows through every wire in your home" },
            { "k": "Nuclear", "v": "stored in the nucleus, released in fission (reactors) and fusion (the Sun)" },
            { "k": "Radiant and sound", "v": "carried by electromagnetic waves and by pressure waves in a medium" }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · MASS-ENERGY EQUIVALENCE",
          "tag": "significant only where mass actually changes",
          "main": "<i>E</i> = <i>mc</i><sup>2</sup>, and for a mass defect Δ<i>E</i> = (Δ<i>m</i>)<i>c</i><sup>2</sup>",
          "legend": [
            "<i>m</i> is the mass in kilograms and <i>c</i> = 3 × 10<sup>8</sup> m/s is the speed of light in vacuum, so <i>c</i><sup>2</sup> = 9 × 10<sup>16</sup> m<sup>2</sup>/s<sup>2</sup> and <i>E</i> comes out in joules",
            "the anchor value to memorise: 1 kg of mass is equivalent to 9 × 10<sup>16</sup> J, and everything else scales from it",
            "the nuclear shortcut: 1 u (one atomic mass unit) corresponds to 931.5 MeV, which is this same relation applied once and cached"
          ],
          "note": "Useful conversions: 1 cal = 4.186 J ≈ 4.2 J, 1 eV = 1.6 × 10<sup>−19</sup> J, 1 MeV = 1.6 × 10<sup>−13</sup> J, and 1 kWh = 3.6 × 10<sup>6</sup> J. Convert grams and atomic mass units to kilograms <i>before</i> squaring <i>c</i>."
        },
        {
          "t": "diagram",
          "kind": "flow",
          "kicker": "FIGURE 8 · ENERGY CHANGES COSTUME, NEVER QUANTITY",
          "chips": ["a thermal power plant"],
          "captions": [
            "Follow the same joules through five costumes. At every arrow the form changes and some of it leaks off as waste heat, which is why no real machine is 100 per cent efficient, but the running total never falls. The shortfall always shows up as heat or sound, never as destroyed energy."
          ],
          "frames": [
            {
              "flow": {
                "boxes": [
                  { "id": "chem", "col": 0, "row": 0, "text": "chemical\nin the coal" },
                  { "id": "heat", "col": 1, "row": 0, "text": "heat\nin the boiler" },
                  { "id": "kin", "col": 2, "row": 0, "text": "kinetic\nin the turbine" },
                  { "id": "elec", "col": 2, "row": 1, "text": "electrical\nin the wires" },
                  { "id": "out", "col": 1, "row": 1, "text": "light and heat\nin your home", "shape": "round" }
                ],
                "links": [
                  { "from": "chem", "to": "heat" },
                  { "from": "heat", "to": "kin" },
                  { "from": "kin", "to": "elec" },
                  { "from": "elec", "to": "out" }
                ]
              }
            }
          ]
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "The energy equivalent of 1 gram of matter, taking <i>c</i> = 3 × 10<sup>8</sup> m/s, is: 9 × 10<sup>13</sup> J, 9 × 10<sup>16</sup> J, 3 × 10<sup>5</sup> J, or 9 × 10<sup>10</sup> J?",
          "steps": [
            "The planted error is 9 × 10<sup>16</sup> J, which is what you get by leaving the mass in grams and using <i>m</i> = 1.",
            "Convert first: 1 g = 10<sup>−3</sup> kg. The unit slip in any <i>E</i> = <i>mc</i><sup>2</sup> question is always the mass unit.",
            "<i>E</i> = <i>mc</i><sup>2</sup> = (10<sup>−3</sup>)(3 × 10<sup>8</sup>)<sup>2</sup> = (10<sup>−3</sup>)(9 × 10<sup>16</sup>) = 9 × 10<sup>13</sup> J.",
            "Feel the size of that: a single gram holds a city-scale amount of energy, which is exactly why nuclear processes are in a different league from chemical ones."
          ],
          "ans": "9 × 10<sup>13</sup> J"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "In a nuclear reaction the total mass of the products is less than that of the reactants by Δ<i>m</i> = 0.02 u. Calculate the energy released, in MeV.",
          "steps": [
            "Use the atomic-mass-unit shortcut, 1 u corresponds to 931.5 MeV, which already has <i>E</i> = <i>mc</i><sup>2</sup> baked into it. Going through SI units here is three times the work for the same number.",
            "Δ<i>E</i> = (Δ<i>m</i>) × 931.5 MeV/u = (0.02)(931.5).",
            "Δ<i>E</i> ≈ 18.6 MeV. The missing mass, the mass defect, has reappeared as energy, and it is the whole basis of nuclear energetics."
          ],
          "ans": "ΔE ≈ 18.6 MeV"
        },
        {
          "t": "mcq",
          "q": "Which of the following is a non-conservative force?",
          "opts": [
            { "label": "the gravitational force", "nudge": "Gravity is the textbook conservative force: path-independent, zero work on any closed loop, and it owns the potential energy mgh." },
            { "label": "the spring force", "nudge": "The spring hands back every joule on release, which is exactly why ½kx<sup>2</sup> can be called a potential energy at all." },
            { "label": "kinetic friction", "nudge": null },
            { "label": "the electrostatic force", "nudge": "Electrostatics is the third standard conservative force, with a well-defined potential energy of its own." }
          ],
          "correct": 2,
          "solution": "Kinetic friction is path-dependent and dissipative: its work grows with the distance slid and converts mechanical energy irreversibly into heat, so it fails all three tests and owns no potential energy."
        },
        {
          "t": "mcq",
          "q": "The work done by a conservative force around a closed path is:",
          "opts": [
            { "label": "maximum", "nudge": "Meaningless here: there is nothing being maximised, and a closed loop pins the answer exactly." },
            { "label": "always positive", "nudge": "This ignores that the work is negative on part of the loop; the whole point is that the two halves cancel." },
            { "label": "zero", "nudge": null },
            { "label": "dependent on the path taken", "nudge": "That describes a non-conservative force. Path independence is the defining property being tested." }
          ],
          "correct": 2,
          "solution": "This is one of the three equivalent tests. Over any closed loop, the energy given out on one part is taken back on another, netting exactly zero."
        },
        {
          "t": "mcq",
          "q": "The energy equivalent of 1 kg of mass is approximately:",
          "opts": [
            { "label": "3 × 10<sup>8</sup> J", "nudge": "This uses c instead of c<sup>2</sup>, forgetting to square. It under-reads the answer by a factor of 3 × 10<sup>8</sup>." },
            { "label": "9 × 10<sup>16</sup> J", "nudge": null },
            { "label": "9 × 10<sup>8</sup> J", "nudge": "A partial powers-of-ten slip: the 9 is right but the exponent was not squared with it." },
            { "label": "3 × 10<sup>16</sup> J", "nudge": "The exponent was squared but the coefficient was not, so 3 survived where 9 should be." }
          ],
          "correct": 1,
          "solution": "<i>E</i> = <i>mc</i><sup>2</sup> = (1)(3 × 10<sup>8</sup>)<sup>2</sup> = 9 × 10<sup>16</sup> J. The defining step is squaring the speed of light, coefficient and exponent together."
        },
        {
          "t": "mcq",
          "q": "In a hydroelectric power station, the main energy transformation is:",
          "opts": [
            { "label": "electrical to mechanical to potential", "nudge": "This runs the chain backwards; that is roughly what a pumped-storage scheme does when it is refilling, not what a station does when generating." },
            { "label": "potential to kinetic to electrical", "nudge": null },
            { "label": "chemical to heat to electrical", "nudge": "That is a thermal plant burning coal or gas, not a hydroelectric one." },
            { "label": "nuclear to heat to electrical", "nudge": "That is a nuclear plant. Match the chain to the actual source named in the question." }
          ],
          "correct": 1,
          "solution": "The stored water's gravitational potential energy becomes kinetic energy as it falls, and the turbine-generator converts that into electrical energy."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] A 2 kg stone is dropped from a height of 20 m. Using conservation of mechanical energy, find its speed just before it hits the ground. Neglect air resistance and take <i>g</i> = 10 m/s<sup>2</sup>.", "a": "<i>mgh</i> = ½<i>mv</i><sup>2</sup>, so <i>v</i> = √(2<i>gh</i>) = √(2(10)(20)) = √400 = 20 m/s. The mass cancels." },
            { "q": "[NEET] Convert 500 calories of heat energy into joules, taking 1 cal = 4.2 J.", "a": "500 × 4.2 = 2100 J." },
            { "q": "[JEE Main] A 1 kg block slides from rest down a smooth incline of height 2.5 m, then moves onto a rough horizontal floor with μ = 0.5. Find the distance it travels on the floor before stopping. Take <i>g</i> = 10 m/s<sup>2</sup>.", "a": "<i>K</i> at the bottom = <i>mgh</i> = 25 J. Friction <i>f</i> = μ<i>mg</i> = 5 N. Then 5<i>s</i> = 25, so <i>s</i> = 5 m." },
            { "q": "[JEE Main] The work done by a conservative force in moving a body from A to B is +30 J. If the potential energy at A is 50 J, find the potential energy at B.", "a": "<i>W</i><sub>cons</sub> = <i>U<sub>A</sub></i> − <i>U<sub>B</sub></i>, so 30 = 50 − <i>U<sub>B</sub></i> and <i>U<sub>B</sub></i> = 20 J. Positive conservative work means the potential energy fell." },
            { "q": "[JEE Advanced] A force <i>F</i> = (2<i>xy</i>)î + (<i>x</i><sup>2</sup>)ĵ acts on a particle. Determine whether it is conservative and, if so, find <i>U</i>(<i>x</i>, <i>y</i>).", "a": "∂<i>F<sub>y</sub></i>/∂<i>x</i> = 2<i>x</i> and ∂<i>F<sub>x</sub></i>/∂<i>y</i> = 2<i>x</i>, so it is conservative. Integrating −∂<i>U</i>/∂<i>x</i> = 2<i>xy</i> gives <i>U</i> = −<i>x</i><sup>2</sup><i>y</i> + constant, in joules, and −∂<i>U</i>/∂<i>y</i> = <i>x</i><sup>2</sup> checks out." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Treating friction's round-trip work as zero.</b> The closed loop gives zero work rule is exclusive to conservative forces. Friction does negative work on <i>every</i> leg of a journey, so its round-trip total is always negative.",
            "<b>Applying conservation of mechanical energy while friction is present.</b> If any non-conservative force does work, <i>K</i> + <i>U</i> is simply not constant. Switch to <i>W</i><sub>nc</sub> = Δ<i>E</i> and account for the heat.",
            "<b>Forgetting the minus sign in <i>W</i><sub>cons</sub> = −Δ<i>U</i>.</b> Positive conservative work means the potential energy <i>decreases</i>, which is a falling stone. Flip it and every energy balance in the solution inverts.",
            "<b>Using displacement instead of path length for friction heat.</b> Heat is <i>f</i> times the <b>total sliding distance</b>. On a back-and-forth path the displacement may be small or zero while the heat is large, and that gap is the entire question.",
            "<b>Forgetting to square <i>c</i> in <i>E</i> = <i>mc</i><sup>2</sup>.</b> The energy uses <i>c</i><sup>2</sup> = 9 × 10<sup>16</sup>, not <i>c</i>, and dropping the square under-reads the answer by a factor of 3 × 10<sup>8</sup>. Convert grams and atomic mass units to kilograms before squaring anything."
          ]
        },
        {
          "t": "protip",
          "html": "before writing one equation, scan the forces. everything conservative? jump to <i>E<sub>i</sub></i> = <i>E<sub>f</sub></i>, and the path stops mattering entirely, which is why a curved ramp of unstated shape is never a problem. friction in play? use <i>E<sub>i</sub></i> = <i>E<sub>f</sub></i> + heat, with heat = <i>f</i> × <i>d</i><sub>sliding</sub>. one more cancellation is worth memorising for connected systems: an ideal, inextensible, light string over ideal pulleys does <b>zero net work</b> on the system it joins, because it takes <i>Ts</i> out of one body and puts exactly <i>Ts</i> into the other. so for two masses over a pulley the whole ledger reads (potential energy lost) = (potential energy gained) + (kinetic energy gained), with the tension absent from start to finish. and in written answers say converted to heat, never lost."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "conservative: path-independent · zero closed-loop work · owns a U", "note": "gravity, spring, electrostatic. Test in 2-D: ∂F<sub>y</sub>/∂x = ∂F<sub>x</sub>/∂y" },
            { "f": "K<sub>i</sub> + U<sub>i</sub> = K<sub>f</sub> + U<sub>f</sub>", "note": "valid exactly when only conservative forces do work" },
            { "f": "W<sub>nc</sub> = ΔE · heat = f × d<sub>sliding</sub>", "note": "sliding path length, never net displacement" },
            { "f": "energy is transformed, never created or destroyed", "note": "1 cal = 4.186 J, the mechanical equivalent of heat" },
            { "f": "E = mc<sup>2</sup>, 1 kg ↔ 9 × 10<sup>16</sup> J", "note": "1 u ↔ 931.5 MeV; measurable mass loss means nuclear" }
          ],
          "aids": [
            "\"conservative gives it back; non-conservative burns it as heat\"",
            "\"energy changes costume, never quantity\""
          ]
        }
      ]
    },
    {
      "n": "04",
      "title": "Power: Not How Much Work, But How Fast",
      "chip": "04 POWER",
      "kalam": "see km/h, divide by 3.6 before anything else",
      "blocks": [
        {
          "t": "p",
          "html": "Two labourers each carry 100 bricks up to the first floor. Ramesh finishes in 10 minutes, Suresh takes 30. They did <b>exactly the same work</b>: same bricks, same height, same energy transferred. What is different is <b>speed</b>. Ramesh worked three times faster, and that rate of doing work is what physics calls <b>power</b>. Hold this one idea and the rest follows: power is not about how much work you do, it is about how fast you do it. Two engines that both lift a lift-car to the tenth floor do identical work against gravity, and the more powerful one simply gets there sooner. Energy answers how much. Power answers how quickly."
        },
        {
          "t": "think",
          "html": "picture two taps filling identical buckets. both eventually deliver the same litres, the same work, but the wide-open tap fills its bucket in seconds while the dripping tap takes an hour. the flow rate of the tap is the analogy for power, litres per second standing in for joules per second. a 100 watt motor pours out 100 joules every second; a 2000 watt motor pours out 2000 every second and finishes any given job twenty times sooner."
        },
        {
          "t": "p",
          "html": "Two ways of packaging it. Over a whole job you want the <b>average power</b>, total work divided by total time. But at a single instant the rate may be changing, as a car's engine delivers more power the faster it goes, so you also need <b>instantaneous power</b>, the rate right now. A sprinter might average 400 W over a race yet peak far higher during the explosive start and far lower while coasting; the average smooths over a story the instantaneous value tells moment by moment. And here is the most useful insight in the topic: instantaneous power can be written as force times velocity, <i>P</i> = <i>F</i> · <i>v</i> = <i>Fv</i> cos θ. In a tiny time <i>dt</i> the object moves <i>dx</i> = <i>v dt</i>, so the sliver of work is <i>dW</i> = <i>F dx</i> = <i>Fv dt</i>, and dividing by <i>dt</i> gives it."
        },
        {
          "t": "p",
          "html": "That formula is gold, because it says you need <b>both</b> force and motion to deliver power. A weightlifter straining to hold a barbell perfectly still delivers <b>zero</b> power, however much his muscles burn, exactly as he did zero work. The cos θ reminds you that only the component along the velocity counts, so a sideways force is powerless. It also explains an everyday fact: a car's engine has a maximum power, so at high speed the available pushing force <i>F</i> = <i>P</i>/<i>v</i> shrinks, which is precisely why a car accelerates briskly from rest and struggles to gain the last few km/h near its top speed. And power can be negative: brake, and the braking force points opposite to the velocity, so cos θ = −1 and <i>P</i> is negative. The sign of the power tells you which way energy is flowing."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · AVERAGE AND INSTANTANEOUS POWER",
          "main": "<i>P</i><sub>avg</sub> = <i>W</i><sub>total</sub> / <i>t</i><sub>total</sub><br><i>P</i> = <i>dW</i>/<i>dt</i> = <i>F</i> · <i>v</i> = <i>Fv</i> cos θ",
          "legend": [
            "<i>P</i> is the power in watts (W), where 1 W = 1 J/s, with dimensions [M L<sup>2</sup> T<sup>−3</sup>]",
            "<i>W</i> is the work in joules and <i>t</i> the time in seconds; <i>F</i> is the force in newtons and <i>v</i> the speed in m/s",
            "θ is the angle between the force and the velocity, so a force square to the motion, a normal reaction or a centripetal force, delivers exactly zero power"
          ],
          "note": "Power is a scalar, being a dot product of two vectors, but it carries a sign: positive power feeds energy in, negative power drains it out."
        },
        {
          "t": "defgrid",
          "title": "Units, and the one that is not a power",
          "rows": [
            { "k": "watt", "v": "the SI unit, 1 W = 1 J/s. Dimensions [M L<sup>2</sup> T<sup>−3</sup>], which is work's [M L<sup>2</sup> T<sup>−2</sup>] with one more T<sup>−1</sup>" },
            { "k": "horsepower", "v": "1 hp = 746 W. James Watt measured how fast a strong horse could work, so he could tell buyers how many horses his engine replaced" },
            { "k": "kilowatt-hour", "v": "1 kWh = 3.6 × 10<sup>6</sup> J. This is an <b>energy</b>, power times time, and it is what your electricity meter bills you for" },
            { "k": "km/h to m/s", "v": "divide by 3.6. Every power formula needs SI units, and this is the conversion NEET plants a distractor around every year" },
            { "k": "Graphs", "v": "area under a <i>P</i>-<i>t</i> graph is the work done; slope of a <i>W</i>-<i>t</i> graph is the instantaneous power" }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 9 · AREA AND SLOPE, ONE RUNG APART",
          "chips": ["area under P-t", "slope of W-t"],
          "captions": [
            "Power is the rate at which work accumulates, so over a sliver dt the work delivered is P dt. Add every sliver and the shaded area is the total work: 15 + 30 + 10 = 55 J here. This is the same area-is-the-accumulated-quantity reading you used on velocity-time graphs.",
            "Run it the other way. Plot the work delivered so far against time and the slope of the tangent at any instant is the power at that instant. A steepening curve means a machine ramping up; a straight line means constant power."
          ],
          "frames": [
            {
              "x": [0, 10], "y": [0, 12],
              "axisX": "t (s)", "axisY": "P (W)",
              "ticksX": { "every": 2 }, "ticksY": { "every": 4 },
              "curves": [{ "c": "pts", "pts": [[0, 0], [3, 10], [6, 10], [8, 0]] }],
              "polys": [
                { "pts": [[0, 0], [3, 10], [6, 10], [8, 0]], "close": true, "fill": "wash", "tone": "amber", "label": "W = 55 J" }
              ]
            },
            {
              "x": [0, 10], "y": [0, 60],
              "axisX": "t (s)", "axisY": "W (J)",
              "ticksX": { "every": 2 }, "ticksY": { "every": 20 },
              "curves": [{ "c": "poly", "coeffs": [0, 0, 0.6] }],
              "segments": [{ "from": [3, 3], "to": [8, 33] }],
              "points": [{ "x": 5, "y": 15, "label": "P", "at": "se" }],
              "labels": [{ "x": 1.2, "y": 48, "text": "slope = power", "soft": true }]
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · MOTION UNDER CONSTANT POWER, TAP A LINE",
          "steps": [
            {
              "eq": "<i>P</i> = <i>dK</i>/<i>dt</i>, so <i>K</i> = <i>Pt</i> for a body starting from rest",
              "why": "All the delivered power goes into kinetic energy here, and a constant P means energy is fed in at a steady rate, so K simply accumulates linearly with time. Integrating with K = 0 at t = 0 leaves no constant behind."
            },
            {
              "eq": "½<i>mv</i><sup>2</sup> = <i>Pt</i>, so <i>v</i> = √(2<i>Pt</i>/<i>m</i>), proportional to √<i>t</i>",
              "why": "Speed grows as the square root of time, not linearly. The particle speeds up rapidly at first and then more and more sluggishly, which is exactly the less-force-at-high-speed idea, since F = P/v shrinks as v grows."
            },
            {
              "eq": "<i>x</i> = ∫ <i>v</i> <i>dt</i> = √(2<i>P</i>/<i>m</i>) ∫ <i>t</i><sup>1/2</sup> <i>dt</i> = (2/3)√(2<i>P</i>/<i>m</i>) <i>t</i><sup>3/2</sup>",
              "why": "Integrate the speed, running the power rule backward on t to the half. Distance therefore goes as t to the three halves, and the two scalings together answer a whole family of exam questions on sight."
            },
            {
              "eq": "<i>a</i> = <i>dv</i>/<i>dt</i> = √(<i>P</i>/2<i>mt</i>), which <i>decreases</i> with time",
              "why": "Differentiate the speed and the acceleration falls away as time passes, blowing up at t = 0. That is the mathematical fingerprint of a constant-power drive, a huge initial push easing off, and it is precisely why the constant-acceleration equations are invalid here."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 10 · CONSTANT FORCE IS NOT CONSTANT POWER",
          "chips": ["two drives, two shapes"],
          "captions": [
            "Under a constant force the speed rises linearly, v = at, so the power P = Fv keeps growing as the body speeds up. Under constant power the energy arrives at a steady rate instead, so v goes as √t: a violent start that eases off. Reading the wrong curve is what the classic MCQ distractor is built on."
          ],
          "frames": [
            {
              "x": [0, 9], "y": [0, 10],
              "axisX": "t (s)", "axisY": "v (m/s)",
              "ticksX": { "every": 2 }, "ticksY": { "every": 2 },
              "curves": [
                { "c": "line", "m": 1, "k": 0, "dash": true, "soft": true },
                { "c": "sqrt", "a": 3 }
              ],
              "labels": [
                { "x": 4.2, "y": 8.4, "text": "constant power" },
                { "x": 6, "y": 3.4, "text": "constant force" }
              ]
            }
          ]
        },
        {
          "t": "proc",
          "title": "Choosing the right power move",
          "steps": [
            "<b>Read what is asked.</b> Over the whole trip or on average means <i>W</i><sub>total</sub>/<i>t</i><sub>total</sub>. At this moment, or when the speed is such-and-such, means the instantaneous <i>F</i> · <i>v</i>.",
            "<b>Convert units before multiplying anything.</b> km/h becomes m/s by dividing by 3.6, hp becomes watts by multiplying by 746, and kWh never enters a <i>P</i> = <i>Fv</i> calculation because it is an energy.",
            "<b>Constant velocity? Skip Newton's laws.</b> Zero acceleration means the driving force equals the total opposing force, so write <i>P</i> = <i>F</i><sub>opposing</sub> × <i>v</i> directly. On an incline the opposition is <i>mg</i> sin θ <i>plus</i> friction, and dropping either term is the standard error.",
            "<b>Constant power from rest? Do not reach for kinematics.</b> Use <i>K</i> = <i>Pt</i> to get the speed and <i>x</i> proportional to <i>t</i><sup>3/2</sup> for the distance. The acceleration is not constant, so <i>v</i> = <i>at</i> and <i>s</i> = ½<i>at</i><sup>2</sup> are both invalid.",
            "<b>A machine throwing mass at a steady rate? Think energy per kilogram times kilograms per second.</b> For a pump raising water through <i>h</i> and ejecting it at speed <i>v</i>, each kilogram costs <i>gh</i> + ½<i>v</i><sup>2</sup> joules, so <i>P</i> = μ(<i>gh</i> + ½<i>v</i><sup>2</sup>) with μ the mass rate in kg/s."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A crane lifts a 200 kg load to a height of 15 m in 30 s at a steady rate. Calculate the average power developed. Take <i>g</i> = 10 m/s<sup>2</sup> for quick arithmetic.",
          "steps": [
            "Work first: against gravity, <i>W</i> = <i>mgh</i> = (200)(10)(15) = 30000 J.",
            "Then divide by the time: <i>P</i><sub>avg</sub> = <i>W</i>/<i>t</i> = 30000/30 = 1000 W = 1.0 kW.",
            "Cross-check in familiar units: 1000/746 ≈ 1.3 hp, about the rating of a small workshop motor, which is physically sensible for this load."
          ],
          "ans": "P = 1000 W = 1.0 kW (≈ 1.3 hp)"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "A car engine keeps a car moving at a constant 72 km/h against a total resistive force of 800 N. The power developed is: 16 kW, 57.6 kW, 16 W, or 11.1 kW?",
          "steps": [
            "The planted answer is 57.6 kW, obtained by plugging 72 straight into <i>P</i> = <i>Fv</i> and getting 800 × 72 = 57600 W.",
            "Power formulas need SI units, so convert first: 72 km/h = 72/3.6 = 20 m/s.",
            "At constant speed the engine's driving force just balances the resistance, so <i>F</i> = 800 N and <i>P</i> = <i>Fv</i> = 800 × 20 = 16000 W = 16 kW.",
            "The habit worth a guaranteed mark: the instant you see km/h in a power or energy question, divide by 3.6 before doing anything else."
          ],
          "ans": "P = 16 kW"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "A 1000 kg car climbs a road inclined at 1 in 10, so sin θ = 0.1, at a constant 20 m/s. A constant friction force of 500 N opposes the motion. Find the power developed by the engine. Take <i>g</i> = 10 m/s<sup>2</sup>.",
          "steps": [
            "Constant speed means zero acceleration, so the engine's force must balance <b>both</b> the component of gravity along the slope and the friction.",
            "<i>F</i><sub>engine</sub> = <i>mg</i> sin θ + <i>f</i> = (1000)(10)(0.1) + 500 = 1000 + 500 = 1500 N.",
            "<i>P</i> = <i>F</i><sub>engine</sub> <i>v</i> = 1500 × 20 = 30000 W = 30 kW.",
            "Two ways to lose this mark, both common: forget the friction term and you get 20 kW, forget the gravity term and you get 10 kW. The force balance has to come first."
          ],
          "ans": "P = 30 kW"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "A 2 kg particle, initially at rest, is driven by a constant power source of 12 W, with all the power going into kinetic energy. Find (a) its speed at <i>t</i> = 3 s and (b) the distance travelled by then.",
          "steps": [
            "(a) Constant power feeding kinetic energy gives <i>K</i> = <i>Pt</i>: ½(2)<i>v</i><sup>2</sup> = (12)(3) = 36, so <i>v</i><sup>2</sup> = 36 m<sup>2</sup>/s<sup>2</sup> and <i>v</i> = 6 m/s.",
            "(b) Use the constant-power distance result: <i>x</i> = (2/3)√(2<i>P</i>/<i>m</i>) <i>t</i><sup>3/2</sup> = (2/3)√(24/2) (3)<sup>3/2</sup> = (2/3)√12 (3√3).",
            "Since √12 = 2√3, this is (2/3)(2√3)(3√3) = (2/3)(2 × 3 × 3) = (2/3)(18) = 12 m.",
            "Why this is not a kinematics problem: the acceleration here is √(<i>P</i>/2<i>mt</i>), which <i>falls</i> with time. Anyone reaching reflexively for <i>v</i> = <i>at</i> or <i>s</i> = ½<i>at</i><sup>2</sup> gets it wrong, because those need a constant acceleration and constant <i>power</i> guarantees the opposite."
          ],
          "ans": "v = 6 m/s at t = 3 s · x = 12 m"
        },
        {
          "t": "mcq",
          "q": "The dimensional formula of power is:",
          "opts": [
            { "label": "[M L<sup>2</sup> T<sup>−2</sup>]", "nudge": "That is work or energy. This is the commonest slip: forgetting the extra division by time that turns an amount into a rate." },
            { "label": "[M L<sup>2</sup> T<sup>−3</sup>]", "nudge": null },
            { "label": "[M L T<sup>−2</sup>]", "nudge": "That is a force, two powers of L and T away from a rate of energy transfer." },
            { "label": "[M L<sup>2</sup> T<sup>−1</sup>]", "nudge": "That is angular momentum, or action. It divides energy by a frequency rather than by a time." }
          ],
          "correct": 1,
          "solution": "Power is work divided by time: [M L<sup>2</sup> T<sup>−2</sup>]/[T] = [M L<sup>2</sup> T<sup>−3</sup>]. Always carry the per second through."
        },
        {
          "t": "mcq",
          "q": "A body starts from rest and moves under a <b>constant force</b>. Its instantaneous power:",
          "opts": [
            { "label": "remains constant", "nudge": "The classic conceptual error: constant force does not mean constant power. As the body speeds up, the same force delivers more power every second." },
            { "label": "increases linearly with time", "nudge": null },
            { "label": "increases as the square of the time", "nudge": "This misreads the v-t dependence; under a constant force v is linear in t, not quadratic." },
            { "label": "decreases with time", "nudge": "That is what happens under constant <i>power</i>, where the acceleration falls away, not under a constant force." }
          ],
          "correct": 1,
          "solution": "With a constant force the speed is <i>v</i> = <i>at</i>, so <i>P</i> = <i>Fv</i> = (<i>Fa</i>)<i>t</i>, which is proportional to <i>t</i>."
        },
        {
          "t": "mcq",
          "q": "One horsepower is approximately equal to:",
          "opts": [
            { "label": "746 W", "nudge": null },
            { "label": "550 W", "nudge": "550 is the value in foot-pounds per second, the imperial definition, not the number of watts." },
            { "label": "1000 W", "nudge": "This confuses horsepower with the kilowatt; they differ by about a third." },
            { "label": "100 W", "nudge": "Off by more than a factor of seven, and roughly the output of a person, not a horse." }
          ],
          "correct": 0,
          "solution": "1 hp ≈ 746 W, a defined conversion worth simply knowing. It is literally an estimate of one hard-working horse's output, which is why a 15 hp bike claims the muscle of fifteen horses."
        },
        {
          "t": "mcq",
          "q": "A particle starts from rest and moves under <b>constant power</b>. Its speed varies with time as:",
          "opts": [
            { "label": "<i>v</i> proportional to <i>t</i>", "nudge": "That is the constant-<i>force</i> answer, v = at. The whole question is whether you distinguish constant force from constant power." },
            { "label": "<i>v</i> proportional to <i>t</i><sup>2</sup>", "nudge": "No mechanism gives this; it would need a force that itself grew with time." },
            { "label": "<i>v</i> proportional to √<i>t</i>", "nudge": null },
            { "label": "<i>v</i> proportional to <i>t</i><sup>3/2</sup>", "nudge": "That is the <i>distance</i> dependence under constant power, a tempting mismatch parked one line away from the right answer." }
          ],
          "correct": 2,
          "solution": "From <i>K</i> = <i>Pt</i>: ½<i>mv</i><sup>2</sup> = <i>Pt</i>, so <i>v</i> = √(2<i>Pt</i>/<i>m</i>), proportional to √<i>t</i>. The distance then goes as <i>t</i><sup>3/2</sup>."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] A water pump raises 100 kg of water to a tank 20 m above in 25 s. Find the power of the pump. Take <i>g</i> = 10 m/s<sup>2</sup>.", "a": "<i>W</i> = <i>mgh</i> = (100)(10)(20) = 20000 J, so <i>P</i> = 20000/25 = 800 W." },
            { "q": "[NEET] An engine of power 10 kW pulls a train at a constant speed of 5 m/s. Find the tractive force exerted.", "a": "At constant speed <i>P</i> = <i>Fv</i>, so <i>F</i> = <i>P</i>/<i>v</i> = 10000/5 = 2000 N." },
            { "q": "[JEE Main] A vehicle of mass 800 kg ascends an incline of 1 in 20, sin θ = 0.05, at a constant 15 m/s against a resistive force of 300 N. Find the engine power. Take <i>g</i> = 10 m/s<sup>2</sup>.", "a": "<i>F</i> = <i>mg</i> sin θ + <i>f</i> = (800)(10)(0.05) + 300 = 400 + 300 = 700 N. Then <i>P</i> = 700 × 15 = 10500 W = 10.5 kW." },
            { "q": "[JEE Main] A pump lifts 600 kg of water per minute from a depth of 25 m and ejects it at 10 m/s. Find its power, accounting for both the lift and the kinetic energy given to the water. Take <i>g</i> = 10 m/s<sup>2</sup>.", "a": "Mass rate μ = 600/60 = 10 kg/s. Each kilogram costs <i>gh</i> + ½<i>v</i><sup>2</sup> = 250 + 50 = 300 J, so <i>P</i> = 10 × 300 = 3000 W = 3.0 kW." },
            { "q": "[JEE Advanced] A 1 kg particle starts from rest under a constant power of 9 W. Find (a) its speed at <i>t</i> = 2 s and (b) the distance covered by then.", "a": "(a) <i>v</i> = √(2<i>Pt</i>/<i>m</i>) = √(2 × 9 × 2/1) = √36 = 6 m/s. (b) <i>x</i> = (2/3)√(2<i>P</i>/<i>m</i>) <i>t</i><sup>3/2</sup> = (2/3)√18 × 2√2 = (2/3)(12) = 8 m." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Confusing power with work.</b> A more powerful machine does the <i>same</i> job <i>faster</i>, not necessarily more of it. Power is the rate, energy is the amount, and their dimensions differ by exactly one factor of T<sup>−1</sup>.",
            "<b>Forgetting the unit conversions.</b> km/h must become m/s by dividing by 3.6 and hp must become watts by multiplying by 746, both <i>before</i> anything is multiplied. And the kilowatt-hour is an energy, never a power, so it can never appear inside a <i>P</i> = <i>Fv</i> calculation.",
            "<b>Assuming a constant force means constant power.</b> Since <i>P</i> = <i>Fv</i>, a constant force delivers steadily growing power as the object accelerates. This one misconception drives several MCQ traps in a row.",
            "<b>Dropping cos θ in <i>P</i> = <i>F</i> · <i>v</i>.</b> Only the component of force along the velocity delivers power, so a normal reaction and a centripetal force each deliver exactly zero, however large they are.",
            "<b>Quoting the average when the question wanted the instantaneous, or the reverse.</b> They coincide only when the power is constant. For a body accelerating from rest under a constant force, the final instantaneous power is exactly <b>twice</b> the average, because a quantity climbing steadily from zero averages to half its final value."
          ]
        },
        {
          "t": "protip",
          "html": "for constant-speed problems, skip newton entirely: set the driving force equal to the total opposing force and write <i>P</i> = <i>F</i><sub>opposing</sub> × <i>v</i> in one line. for constant power from rest, recall the two scalings, <i>v</i> = √(2<i>Pt</i>/<i>m</i>) and <i>x</i> going as <i>t</i><sup>3/2</sup>, rather than re-deriving them. for pumps, hoses and machine guns, go straight to energy per kilogram times kilograms per second and the intimidating problem collapses to one line. and one result worth carrying for belts: sand falling at μ kg/s onto a belt running at <i>v</i> needs a force μ<i>v</i>, so the motor delivers μ<i>v</i><sup>2</sup> while the sand only gains ½μ<i>v</i><sup>2</sup>. exactly half the motor's power becomes kinetic energy and the other half is rubbing heat at the slipping contact, which is not an approximation but a theorem, and a standing jee advanced favourite."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "P<sub>avg</sub> = W/t · P = dW/dt = F · v = Fv cos θ", "note": "a scalar, but a signed one: braking delivers negative power" },
            { "f": "[M L<sup>2</sup> T<sup>−3</sup>] · watt = J/s · 1 hp = 746 W", "note": "1 kWh = 3.6 × 10<sup>6</sup> J is an energy, not a power" },
            { "f": "constant velocity: P = F<sub>resist</sub> v · crane: P = mgv", "note": "zero acceleration means the drive just balances the opposition" },
            { "f": "constant power from rest: K = Pt, v ∝ √t, x ∝ t<sup>3/2</sup>", "note": "the acceleration falls with time, so kinematics is invalid" },
            { "f": "area under P-t = work · slope of W-t = power", "note": "the same area-and-slope ladder as the motion graphs" }
          ],
          "aids": [
            "\"power is how FAST you work, not how MUCH\"",
            "\"see km/h? divide by 3.6 first\""
          ]
        }
      ]
    },
    {
      "n": "05",
      "title": "Collisions: Momentum Always, Energy Only If Elastic",
      "chip": "05 COLLISIONS",
      "kalam": "write momentum first, then attach the right partner equation",
      "blocks": [
        {
          "t": "p",
          "html": "A collision is any event where two bodies exert strong forces on each other for a very short time: a carrom striker smacking a coin, two cars crunching at an intersection, a cricket ball meeting the bat, two protons in an accelerator. The forces are huge and the contact time is tiny, and that combination is the key to everything. Because the two bodies push on each other with <b>equal and opposite</b> forces, by Newton's third law, their impulses are equal and opposite and cancel for the system as a whole. External forces like gravity and friction do exist, but they are feeble beside the violent contact force and act for so short a time that their impulse is negligible. So here is the master principle, and it must go in before anything else: <b>momentum is conserved in every single collision</b>, elastic, inelastic, sticky, explosive, all of them."
        },
        {
          "t": "p",
          "html": "Kinetic energy is a different story, and that is where collisions get their personalities. Sometimes the bodies bounce apart with the total kinetic energy exactly as it was, nothing buried in heat, sound or permanent dents. That is an <b>elastic collision</b>: two hard steel balls, or idealised billiard balls. Other times some kinetic energy is <b>lost</b>, converted into heat, the crunch of metal, the squish of clay. That is an <b>inelastic collision</b>, and almost every real collision is at least a little inelastic. The extreme case, where the bodies <b>stick together</b> and move as one afterwards, is <b>perfectly inelastic</b>, and it is the case of <b>maximum possible kinetic energy loss</b>. You cannot lose more than this, because the bodies must still carry between them whatever momentum the system started with."
        },
        {
          "t": "think",
          "html": "drop a steel ball-bearing and a lump of wet atta dough from the same height onto a hard floor. the steel ball bounces back up almost to where it started, barely any energy lost, near enough elastic. the dough goes splat and does not bounce at all, having handed every joule of its bounce-back over to deforming itself. that is the perfectly inelastic extreme. everything real lives somewhere between the two, and the number that says where is the coefficient of restitution."
        },
        {
          "t": "def",
          "term": "The coefficient of restitution, and why it lives in [0, 1]",
          "html": "<i>e</i> is the ratio of how fast the bodies separate afterwards to how fast they approached beforehand, and it is a pure number with no unit. <b><i>e</i> = 1 is perfectly elastic</b>: they separate exactly as fast as they approached, and kinetic energy is conserved. <b><i>e</i> = 0 is perfectly inelastic</b>: they do not separate at all, so they move off together. Everything real sits in between, 0 < <i>e</i> < 1. The bounds are physics, not convention. A negative <i>e</i> would mean the bodies pass through each other, and <i>e</i> > 1 would mean the collision handed out more kinetic energy than it received, which only an <b>explosive</b> event with its own stored chemical energy can do, and then you must say so. For an ordinary collision, an answer outside [0, 1] means an algebra error."
        },
        {
          "t": "p",
          "html": "Collisions are also classified by <b>geometry</b>. In a <b>head-on</b> (one-dimensional) collision the bodies travel along the same straight line both before and after, like two carrom coins meeting dead centre. In an <b>oblique</b> (two-dimensional) collision they approach and leave at angles, like a cue ball clipping another ball off centre. The crucial subtlety: the impact force acts only along the <b>line of impact</b>, the common normal at contact, which for two balls is the line joining their centres. So <b>only the velocity components along that line change</b>, and the components perpendicular to it sail through untouched. That single idea reduces most two-dimensional collision problems to a one-dimensional collision along the line of impact plus an unchanged sideways motion."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE TWO CONSERVATION LAWS, AND WHEN EACH APPLIES",
          "tag": "momentum always; energy only if e = 1",
          "main": "all collisions: <i>m</i><sub>1</sub><i>u</i><sub>1</sub> + <i>m</i><sub>2</sub><i>u</i><sub>2</sub> = <i>m</i><sub>1</sub><i>v</i><sub>1</sub> + <i>m</i><sub>2</sub><i>v</i><sub>2</sub><br><i>e</i> = (separation speed)/(approach speed) = (<i>v</i><sub>2</sub> − <i>v</i><sub>1</sub>)/(<i>u</i><sub>1</sub> − <i>u</i><sub>2</sub>)<br>elastic shortcut: <i>u</i><sub>1</sub> − <i>u</i><sub>2</sub> = <i>v</i><sub>2</sub> − <i>v</i><sub>1</sub>",
          "legend": [
            "<i>m</i><sub>1</sub> and <i>m</i><sub>2</sub> are the masses in kg; <i>u</i> denotes velocities before and <i>v</i> velocities after, all in m/s, and the signs encode direction",
            "<i>e</i> is the coefficient of restitution, a pure number in [0, 1], with 1 elastic and 0 perfectly inelastic",
            "the third line is the second with <i>e</i> = 1 substituted, and it replaces the messy quadratic kinetic-energy equation with a simple linear one"
          ],
          "note": "Fix a positive direction before writing a single number. A rebounding body has a negative velocity relative to its approach, and forgetting that sign corrupts the momentum equation outright."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE TWO STANDARD OUTCOMES",
          "main": "elastic, 1-D: <i>v</i><sub>1</sub> = [(<i>m</i><sub>1</sub> − <i>m</i><sub>2</sub>)<i>u</i><sub>1</sub> + 2<i>m</i><sub>2</sub><i>u</i><sub>2</sub>]/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>)<br>perfectly inelastic: <i>V</i> = (<i>m</i><sub>1</sub><i>u</i><sub>1</sub> + <i>m</i><sub>2</sub><i>u</i><sub>2</sub>)/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>)<br>and its loss: Δ<i>K</i> = ½[<i>m</i><sub>1</sub><i>m</i><sub>2</sub>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>)](<i>u</i><sub>1</sub> − <i>u</i><sub>2</sub>)<sup>2</sup>",
          "legend": [
            "<i>V</i> is the common final velocity in m/s when the bodies stick, and <i>v</i><sub>2</sub> follows from the first line by swapping the subscripts 1 and 2 throughout",
            "Δ<i>K</i> is the kinetic energy lost, in joules, and it is the MAXIMUM any collision with these initial conditions can lose",
            "the bracket <i>m</i><sub>1</sub><i>m</i><sub>2</sub>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>) is a mass, the reduced mass, which is why the whole expression has the dimensions of an energy"
          ],
          "note": "Two readings fall out of the loss formula. It depends on the <i>relative</i> velocity, so bodies already moving together lose nothing, since nothing actually collides. And it is largest when the masses are comparable."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY APPROACH SPEED EQUALS SEPARATION SPEED, TAP A LINE",
          "steps": [
            {
              "eq": "momentum: <i>m</i><sub>1</sub>(<i>u</i><sub>1</sub> − <i>v</i><sub>1</sub>) = <i>m</i><sub>2</sub>(<i>v</i><sub>2</sub> − <i>u</i><sub>2</sub>)",
              "why": "Just the conservation of momentum with the two bodies' terms gathered on opposite sides. What body 1 lost, body 2 gained, which is the content of Newton's third law during the impact."
            },
            {
              "eq": "energy, elastic only: <i>m</i><sub>1</sub>(<i>u</i><sub>1</sub><sup>2</sup> − <i>v</i><sub>1</sub><sup>2</sup>) = <i>m</i><sub>2</sub>(<i>v</i><sub>2</sub><sup>2</sup> − <i>u</i><sub>2</sub><sup>2</sup>)",
              "why": "Kinetic energy conservation, gathered the same way, with the factor of a half cancelled off both sides. This equation exists only because the collision is elastic; it is exactly what fails otherwise."
            },
            {
              "eq": "divide the second by the first, factoring each side as a difference of squares",
              "why": "Every difference of squares splits as (a - b)(a + b), and the (a - b) factors are precisely what the first equation contains, so they cancel top and bottom on both sides at once. The quadratic collapses into something linear."
            },
            {
              "eq": "<i>u</i><sub>1</sub> + <i>v</i><sub>1</sub> = <i>v</i><sub>2</sub> + <i>u</i><sub>2</sub>, so <i>u</i><sub>1</sub> − <i>u</i><sub>2</sub> = <i>v</i><sub>2</sub> − <i>v</i><sub>1</sub>",
              "why": "In any one-dimensional elastic collision the bodies separate exactly as fast as they approached, whatever their masses. This is the e = 1 statement, and pairing it with momentum solves any elastic collision in two linear equations instead of one linear and one quadratic."
            },
            {
              "eq": "equal masses: <i>u</i><sub>1</sub> + <i>u</i><sub>2</sub> = <i>v</i><sub>1</sub> + <i>v</i><sub>2</sub> alongside <i>u</i><sub>1</sub> − <i>u</i><sub>2</sub> = <i>v</i><sub>2</sub> − <i>v</i><sub>1</sub>",
              "why": "Put m1 = m2 into momentum and pair it with the shortcut. Adding and subtracting the two gives v1 = u2 and v2 = u1: the bodies simply trade velocities. That is the physics of Newton's cradle, where the incoming ball stops dead and the far ball leaves with its velocity."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 11 · THE SAME COLLISION, TWO ENDINGS",
          "chips": ["before", "after: perfectly inelastic", "after: elastic"],
          "captions": [
            "A 2 kg block at 6 m/s overtakes a stationary 4 kg block. The momentum on the books is (2)(6) + 0 = 12 kg m/s and the kinetic energy is ½(2)(36) = 36 J. Whatever happens next, the momentum must still read 12 kg m/s.",
            "They stick. One 6 kg body moves off at V = 12/6 = 2 m/s, so momentum is (6)(2) = 12 kg m/s, as it must be. But the kinetic energy is now ½(6)(4) = 12 J, so 24 J went to heat and deformation. No collision of these two bodies can lose more.",
            "They bounce elastically instead. The 2 kg block rebounds at 2 m/s and the 4 kg block goes forward at 4 m/s: momentum is −4 + 16 = 12 kg m/s, unchanged, and the kinetic energy is 4 + 32 = 36 J, also unchanged. The momentum ledger is identical in both endings; only the energy ledger tells them apart."
          ],
          "frames": [
            {
              "x": [0, 10], "y": [0, 4.6], "axes": "none", "aspect": 0.5,
              "bodies": [
                { "kind": "ground", "at": [5, 0.9], "w": 9.4, "h": 0.22 },
                { "kind": "block", "at": [2.6, 1.6], "w": 1.5, "h": 1, "label": "2 kg" },
                { "kind": "block", "at": [6.8, 1.6], "w": 1.5, "h": 1, "label": "4 kg" }
              ],
              "arrows": [
                { "from": [3.5, 1.6], "to": [5.3, 1.6], "tone": "amber", "label": "6 m/s", "at": "above" }
              ],
              "labels": [{ "x": 6.8, "y": 2.9, "text": "at rest" }]
            },
            {
              "x": [0, 10], "y": [0, 4.6], "axes": "none", "aspect": 0.5,
              "bodies": [
                { "kind": "ground", "at": [5, 0.9], "w": 9.4, "h": 0.22 },
                { "kind": "block", "at": [5, 1.6], "w": 2.6, "h": 1, "label": "6 kg" }
              ],
              "arrows": [
                { "from": [6.5, 1.6], "to": [7.8, 1.6], "tone": "amber", "label": "2 m/s", "at": "above" }
              ],
              "labels": [{ "x": 3, "y": 2.9, "text": "stuck together" }]
            },
            {
              "x": [0, 10], "y": [0, 4.6], "axes": "none", "aspect": 0.5,
              "bodies": [
                { "kind": "ground", "at": [5, 0.9], "w": 9.4, "h": 0.22 },
                { "kind": "block", "at": [2.6, 1.6], "w": 1.5, "h": 1, "label": "2 kg" },
                { "kind": "block", "at": [6.8, 1.6], "w": 1.5, "h": 1, "label": "4 kg" }
              ],
              "arrows": [
                { "from": [1.7, 1.6], "to": [0.6, 1.6], "tone": "amber", "label": "2 m/s", "at": "above" },
                { "from": [7.7, 1.6], "to": [9.4, 1.6], "tone": "amber", "label": "4 m/s", "at": "above" }
              ]
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 12 · THE LINE OF IMPACT",
          "chips": ["the geometry", "equal masses, elastic"],
          "captions": [
            "The contact force acts along the common normal, which for two balls is the line joining their centres. Resolve every velocity along that line and across it: the along components collide in the ordinary one-dimensional way, and the across components pass through completely untouched, because a smooth contact exerts no sideways force at all.",
            "Run that decomposition for identical balls with one at rest and something elegant falls out. The striker keeps only its across component and hands its entire along component to the target, so the two leave at right angles to each other. Here the striker arrives along the dotted path and the two depart at 30° and 60° on opposite sides, exactly 90° apart."
          ],
          "frames": [
            {
              "x": [0, 10], "y": [0, 7], "axes": "none", "aspect": 0.706,
              "curves": [
                { "c": "circle", "cx": 2.9, "cy": 2.4, "r": 1 },
                { "c": "circle", "cx": 6.1, "cy": 4.2, "r": 1 }
              ],
              "segments": [{ "from": [1.1, 1.3875], "to": [7.9, 5.2125], "dash": true, "soft": true }],
              "arrows": [{ "from": [0.4, 2.4], "to": [1.9, 2.4], "tone": "amber", "label": "u", "at": "start" }],
              "marks": [
                { "x": 2.9, "y": 2.4, "glyph": "dot", "tone": "soft" },
                { "x": 6.1, "y": 4.2, "glyph": "dot", "tone": "soft" }
              ],
              "labels": [{ "x": 6.2, "y": 1.2, "text": "line of impact", "soft": true }]
            },
            {
              "x": [0, 10], "y": [0, 7], "axes": "none", "aspect": 0.706,
              "marks": [{ "x": 4.6, "y": 3.3, "glyph": "open", "tone": "soft" }],
              "arrows": [
                { "from": [0.8, 3.3], "to": [3.9, 3.3], "tone": "ink", "label": "u", "at": "start" },
                { "from": [4.6, 3.3], "to": [7.5, 4.975], "tone": "amber", "label": "30°", "at": "end" },
                { "from": [4.6, 3.3], "to": [5.9, 1.05], "tone": "amber", "label": "60°", "at": "end" }
              ],
              "arcs": [{ "at": [4.6, 3.3], "r": 1.1, "from": 30, "to": -60, "right": true, "tone": "soft" }]
            }
          ]
        },
        {
          "t": "proc",
          "title": "Solving any collision, in four moves",
          "steps": [
            "<b>Fix a positive direction and write momentum conservation.</b> It holds for every collision without exception, so it is always your first line. Signs encode direction, so a rebounding body gets a minus.",
            "<b>Attach the right partner equation.</b> Elastic? Use <i>u</i><sub>1</sub> − <i>u</i><sub>2</sub> = <i>v</i><sub>2</sub> − <i>v</i><sub>1</sub>, which is cleaner than the kinetic-energy equation. Given <i>e</i>? Use <i>e</i> = (<i>v</i><sub>2</sub> − <i>v</i><sub>1</sub>)/(<i>u</i><sub>1</sub> − <i>u</i><sub>2</sub>). Perfectly inelastic? Set <i>v</i><sub>1</sub> = <i>v</i><sub>2</sub> = <i>V</i> and momentum alone suffices.",
            "<b>Solve the two linear equations</b> for the two unknown final velocities. Never pair momentum with the quadratic energy equation when a linear substitute exists.",
            "<b>Oblique? Resolve first, then run steps 1 to 3 on the along-the-line components only</b>, leaving the across components untouched, and recombine at the end.",
            "<b>Sanity check.</b> Momentum must balance; if elastic, kinetic energy must too; <i>e</i> must land in [0, 1]; and the kinetic energy after can never exceed the kinetic energy before unless the problem says the event was explosive."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A 2 kg lump of clay moving at 6 m/s strikes a stationary 4 kg block and sticks to it. (a) Find their common velocity after the collision. (b) How much kinetic energy is lost?",
          "steps": [
            "They stick, so this is perfectly inelastic. (a) Momentum conservation gives <i>V</i> = (<i>m</i><sub>1</sub><i>u</i><sub>1</sub> + <i>m</i><sub>2</sub><i>u</i><sub>2</sub>)/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>) = [(2)(6) + 0]/6 = 12/6 = 2.0 m/s.",
            "(b) Before: <i>K<sub>i</sub></i> = ½(2)(6)<sup>2</sup> = 36 J. After: <i>K<sub>f</sub></i> = ½(6)(2)<sup>2</sup> = 12 J.",
            "Δ<i>K</i> = 36 − 12 = 24 J lost. Cross-check with the compact formula: ½[(2)(4)/6](6 − 0)<sup>2</sup> = ½(4/3)(36) = 24 J. The two agree.",
            "Momentum was conserved because it always is, but 24 J went into heat and into deforming the clay. That gap between the two ledgers is the signature of an inelastic collision."
          ],
          "ans": "V = 2.0 m/s · 24 J of kinetic energy lost"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "A ball moving at 8 m/s makes a head-on <b>elastic</b> collision with an identical stationary ball. Their velocities afterwards are: both 4 m/s; 0 and 8 m/s; 8 and 0 m/s; or −8 and 8 m/s?",
          "steps": [
            "Both 4 m/s is the planted trap, because it <b>does</b> conserve momentum: 8 = 4 + 4. Anyone who checks only momentum picks it.",
            "But test the energy. Before: ½<i>m</i>(64) = 32<i>m</i>. After: ½<i>m</i>(16) + ½<i>m</i>(16) = 16<i>m</i>. Half the kinetic energy has vanished, so that outcome cannot be an <i>elastic</i> collision.",
            "Equal masses, elastic, head-on means they <b>exchange velocities</b>. The incoming ball stops and the target leaves at 8 m/s.",
            "An elastic collision demands <i>both</i> conservation laws. Whenever the masses are equal and the collision is elastic, skip the algebra entirely and just swap the velocities."
          ],
          "ans": "0 m/s and 8 m/s"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "A ball is dropped from 5 m onto a hard floor and rebounds to 1.8 m. (a) Find the coefficient of restitution. (b) To what height does it rise after the <b>second</b> bounce?",
          "steps": [
            "A ball falling from height <i>h</i> arrives at √(2<i>gh</i>), and to rebound to <i>h</i>′ it must leave at √(2<i>gh</i>′). The floor is stationary, so <i>e</i> = (speed after)/(speed before) = √(<i>h</i>′/<i>h</i>).",
            "(a) <i>e</i> = √(1.8/5) = √0.36 = 0.60, comfortably inside [0, 1] as it must be.",
            "(b) Each bounce multiplies the speed by <i>e</i>, and height goes as speed squared, so each bounce multiplies the rebound height by <i>e</i><sup>2</sup>. The first bounce reached 1.8 m, so the second reaches <i>e</i><sup>2</sup>(1.8) = 0.36 × 1.8 = 0.65 m.",
            "The clean pattern worth spotting rather than recomputing bounce by bounce: <i>h<sub>n</sub></i> = <i>e</i><sup>2<i>n</i></sup><i>h</i>, with <i>h</i> the original drop height and <i>n</i> the number of bounces."
          ],
          "ans": "e = 0.60 · second rebound ≈ 0.65 m"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "A particle makes an <b>oblique elastic</b> collision with a second, identical particle initially at rest, and both move afterwards. (a) Prove they move off at right angles. (b) If one goes off at 30° to the original line, find the direction of the other and the ratio of their speeds.",
          "steps": [
            "(a) With equal masses, momentum conservation reads <i>u</i> = <i>v</i><sub>1</sub> + <i>v</i><sub>2</sub> as a <b>vector</b> equation. Dot each side with itself: <i>u</i><sup>2</sup> = <i>v</i><sub>1</sub><sup>2</sup> + <i>v</i><sub>2</sub><sup>2</sup> + 2<i>v</i><sub>1</sub> · <i>v</i><sub>2</sub>.",
            "Elastic and equal masses also give kinetic energy conservation, <i>u</i><sup>2</sup> = <i>v</i><sub>1</sub><sup>2</sup> + <i>v</i><sub>2</sub><sup>2</sup>. Comparing the two forces <i>v</i><sub>1</sub> · <i>v</i><sub>2</sub> = 0, and since neither speed is zero the two final velocities are perpendicular. They separate at exactly 90°.",
            "(b) If one particle goes off at 30° on one side, the 90° result puts the other at 60° on the other side. Resolve momentum perpendicular to the original line: <i>v</i><sub>1</sub> sin 30° = <i>v</i><sub>2</sub> sin 60°, so <i>v</i><sub>1</sub>(0.5) = <i>v</i><sub>2</sub>(0.866) and <i>v</i><sub>1</sub> = √3 <i>v</i><sub>2</sub>.",
            "Along the original line: <i>v</i><sub>1</sub> cos 30° + <i>v</i><sub>2</sub> cos 60° = <i>u</i>, so (√3<i>v</i><sub>2</sub>)(0.866) + <i>v</i><sub>2</sub>(0.5) = <i>u</i>, giving 2<i>v</i><sub>2</sub> = <i>u</i>. Hence <i>v</i><sub>2</sub> = <i>u</i>/2, <i>v</i><sub>1</sub> = (√3/2)<i>u</i> and the speed ratio is √3.",
            "Check the energy: <i>v</i><sub>1</sub><sup>2</sup> + <i>v</i><sub>2</sub><sup>2</sup> = (3/4)<i>u</i><sup>2</sup> + (1/4)<i>u</i><sup>2</sup> = <i>u</i><sup>2</sup>, so kinetic energy is conserved, as elasticity demands."
          ],
          "ans": "they separate at 90° · the other goes at 60° on the far side · v<sub>1</sub>/v<sub>2</sub> = √3"
        },
        {
          "t": "mcq",
          "q": "In which type of collision is linear momentum conserved?",
          "opts": [
            { "label": "elastic only", "nudge": "This confuses the special property of an elastic collision, energy conservation, with the universal one. Momentum survives energy loss untouched." },
            { "label": "inelastic only", "nudge": "Backwards, and it misses the point: momentum conservation follows from Newton's third law and cares nothing about how much energy was dissipated." },
            { "label": "both elastic and inelastic", "nudge": null },
            { "label": "neither", "nudge": "This abandons the principle entirely; the internal impulses are equal and opposite in every collision, so the system total cannot change." }
          ],
          "correct": 2,
          "solution": "During the impact the two bodies push on each other with equal and opposite forces for the same time, so the impulses cancel for the system. Momentum always, energy only if elastic."
        },
        {
          "t": "mcq",
          "q": "The coefficient of restitution for a perfectly inelastic collision is:",
          "opts": [
            { "label": "1", "nudge": "That is the perfectly <i>elastic</i> value, a direct swap of the two extremes." },
            { "label": "0", "nudge": null },
            { "label": "infinite", "nudge": "Non-physical: e can never exceed 1 for an ordinary collision, since that would mean more kinetic energy came out than went in." },
            { "label": "between 0 and 1", "nudge": "That describes a partially inelastic collision, which is not the perfectly inelastic case being asked about." }
          ],
          "correct": 1,
          "solution": "The bodies stick and move off together, so their velocity of separation is exactly zero, giving <i>e</i> = 0. That is also the case of maximum possible kinetic energy loss."
        },
        {
          "t": "mcq",
          "q": "A very heavy ball moving at speed <i>u</i> collides head-on elastically with a very light stationary ball. The light ball moves off at approximately:",
          "opts": [
            { "label": "<i>u</i>", "nudge": "That is very nearly the <i>heavy</i> ball's own speed afterwards; it ploughs on almost unaffected. The question asks about the light one." },
            { "label": "2<i>u</i>", "nudge": null },
            { "label": "<i>u</i>/2", "nudge": "This halves the speed for no reason; nothing in the limiting case produces a factor of a half." },
            { "label": "zero", "nudge": "That is the answer with the masses reversed: a light ball hitting a heavy one leaves the heavy one nearly at rest while the light one bounces straight back at −u." }
          ],
          "correct": 1,
          "solution": "Put <i>m</i><sub>1</sub> much greater than <i>m</i><sub>2</sub> with <i>u</i><sub>2</sub> = 0 in the elastic formulas: <i>v</i><sub>1</sub> ≈ <i>u</i><sub>1</sub> and <i>v</i><sub>2</sub> ≈ 2<i>u</i><sub>1</sub>. Learn the three limiting cases as a set, equal masses swap, heavy hits light gives 2<i>u</i>, light hits heavy bounces back, so you never mix them up."
        },
        {
          "t": "mcq",
          "q": "Two identical balls, one moving and one stationary, undergo a head-on elastic collision. Immediately afterwards:",
          "opts": [
            { "label": "both move with half the original speed", "nudge": "The classic trap. It conserves momentum but halves the kinetic energy, so it cannot be an elastic collision." },
            { "label": "they exchange velocities", "nudge": null },
            { "label": "they stick and move together", "nudge": "That is a perfectly inelastic collision, e = 0, which is the opposite end of the scale from the one stated." },
            { "label": "both reverse direction", "nudge": "This violates momentum conservation outright: the system started with momentum in one direction and cannot end with all of it reversed." }
          ],
          "correct": 1,
          "solution": "Equal masses, elastic, head-on: the mover stops dead and the target leaves with the mover's velocity. It is the physics of Newton's cradle."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] A 3 kg body moving at 4 m/s collides with and sticks to a stationary 1 kg body. Find their common velocity afterwards.", "a": "<i>V</i> = (3 × 4 + 0)/(3 + 1) = 12/4 = 3.0 m/s, in the original direction." },
            { "q": "[NEET] Two identical balls undergo a head-on elastic collision; one moves at 10 m/s and the other is at rest. State their velocities afterwards.", "a": "They exchange: the incoming ball ends at 0 m/s and the target moves off at 10 m/s." },
            { "q": "[JEE Main] A ball dropped from 2 m rebounds to a height of 0.5 m. Find the coefficient of restitution.", "a": "<i>e</i> = √(<i>h</i>′/<i>h</i>) = √(0.5/2) = √0.25 = 0.50 (a pure number)." },
            { "q": "[JEE Main] A 2 kg body moving at 5 m/s collides head-on with a 3 kg body moving at 2 m/s in the <b>opposite</b> direction, and they stick together. Find the common velocity and state its direction.", "a": "Taking the 2 kg body's direction as positive: <i>V</i> = [2(5) + 3(−2)]/5 = (10 − 6)/5 = 0.80 m/s, in the direction the 2 kg body was originally moving." },
            { "q": "[JEE Advanced] A 1 kg ball moving at 6 m/s collides head-on <b>elastically</b> with a stationary 2 kg ball. Find the velocity of each ball afterwards.", "a": "<i>v</i><sub>1</sub> = [(1 − 2)(6)]/3 = −2.0 m/s, so it rebounds; <i>v</i><sub>2</sub> = [2(1)(6)]/3 = +4.0 m/s. Check: momentum 6 before, −2 + 8 = 6 after; energy 18 J before, 2 + 16 = 18 J after." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Applying kinetic-energy conservation to an inelastic collision.</b> Energy is conserved only when <i>e</i> = 1. For anything else use momentum plus <i>e</i>, or momentum plus the stick-together condition, and never write <i>K<sub>i</sub></i> = <i>K<sub>f</sub></i>.",
            "<b>Saying momentum is lost in an inelastic collision.</b> Momentum is <i>always</i> conserved. What is lost is kinetic energy, to heat, sound and deformation. The two conserved-or-not statuses are independent and mixing them up is the commonest conceptual error here.",
            "<b>Dropping the sign on a velocity.</b> Momentum is a vector, so a rebounding body carries a negative velocity relative to its approach. Fix a positive direction at the very start and every sign after that takes care of itself.",
            "<b>Over-using the velocity-exchange rule.</b> They swap velocities is true <i>only</i> for equal masses in an elastic head-on collision. Apply it to unequal masses or to an inelastic collision and the answer is nonsense.",
            "<b>Feeding whole speeds into the restitution formula in an oblique collision.</b> The collision equations and <i>e</i> apply only to the components <b>along the line of impact</b>; the perpendicular components do not change at all. Resolve first, collide second, recombine last."
          ]
        },
        {
          "t": "protip",
          "html": "build a fixed two-step reflex. first, always write momentum conservation, because it is true for every collision. second, attach the right partner: the approach-equals-separation shortcut if elastic, <i>e</i> = (<i>v</i><sub>2</sub> − <i>v</i><sub>1</sub>)/(<i>u</i><sub>1</sub> − <i>u</i><sub>2</sub>) if a restitution is given, or <i>v</i><sub>1</sub> = <i>v</i><sub>2</sub> = <i>V</i> if they stick. for oblique equal-mass elastic collisions, remember they fly apart at 90°, which often hands you an angle for free. three more results worth carrying: after <i>n</i> bounces off a floor the height is <i>e</i><sup>2<i>n</i></sup><i>h</i>; the whole bouncing sequence covers a total distance <i>h</i> + 2<i>he</i><sup>2</sup>/(1 − <i>e</i><sup>2</sup>) in a total time <i>t</i><sub>0</sub>(1 + <i>e</i>)/(1 − <i>e</i>), both of which behave properly at the limits, thudding dead at <i>e</i> → 0 and diverging at <i>e</i> → 1; and a ball bouncing off a wall that is itself advancing at <i>V</i> comes back at <i>e</i>(<i>u</i> + <i>V</i>) + <i>V</i>, which at <i>e</i> = 1 is <i>u</i> + 2<i>V</i>, the entire physics of hitting a cricket ball with a moving bat."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "m<sub>1</sub>u<sub>1</sub> + m<sub>2</sub>u<sub>2</sub> = m<sub>1</sub>v<sub>1</sub> + m<sub>2</sub>v<sub>2</sub>", "note": "true in every collision, elastic or not, by Newton's third law" },
            { "f": "e = (v<sub>2</sub> − v<sub>1</sub>)/(u<sub>1</sub> − u<sub>2</sub>), with 0 ≤ e ≤ 1", "note": "e = 1 elastic, 0 perfectly inelastic; e > 1 needs an explosion" },
            { "f": "elastic: u<sub>1</sub> − u<sub>2</sub> = v<sub>2</sub> − v<sub>1</sub>", "note": "linear, so it beats the quadratic energy equation every time" },
            { "f": "stick: V = (m<sub>1</sub>u<sub>1</sub> + m<sub>2</sub>u<sub>2</sub>)/(m<sub>1</sub> + m<sub>2</sub>), ΔK = ½[m<sub>1</sub>m<sub>2</sub>/(m<sub>1</sub>+m<sub>2</sub>)](u<sub>1</sub> − u<sub>2</sub>)<sup>2</sup>", "note": "the maximum loss any such collision can suffer" },
            { "f": "equal masses head-on elastic swap · equal masses oblique elastic separate at 90°", "note": "heavy hits light: v<sub>2</sub> ≈ 2u<sub>1</sub>. Light hits heavy: v<sub>1</sub> ≈ −u<sub>1</sub>" }
          ],
          "aids": [
            "\"momentum always; energy only if elastic\"",
            "\"stick together means e = 0 means maximum energy lost\""
          ]
        }
      ]
    },
    {
      "n": "06",
      "title": "Motion in a Vertical Circle",
      "chip": "06 VERTICAL CIRCLE",
      "kalam": "a string can only pull, and that one fact sets every answer",
      "blocks": [
        {
          "t": "p",
          "html": "Tie a small stone to a string and whirl it in a vertical circle, the thing you have seen done with a bucket of water swung overhead without a drop falling out. Something interesting is happening: the stone speeds up as it swings down and slows as it climbs, because gravity does positive work on the way down and negative work on the way up. So this is <b>not</b> uniform circular motion, and the speed changes continuously around the loop. That single fact rules out every shortcut based on a constant speed and forces you to connect any two points with <b>energy conservation</b> instead."
        },
        {
          "t": "p",
          "html": "Two forces act on the stone: gravity, always straight down, and the string tension, always along the string and pulling <b>inward</b> toward the centre. At every instant the <b>net inward force</b> must supply the centripetal force <i>mv</i><sup>2</sup>/<i>R</i> that keeps the stone on its circular path. The trouble spot is the <b>top</b>. There, both gravity and tension point downward, toward the centre, so they <b>add</b> to provide the centripetal force. But a string can only pull, never push. If the stone is too slow at the top, the centripetal force required drops below the weight alone, the string goes slack, and the stone leaves its circular path altogether."
        },
        {
          "t": "think",
          "html": "the bucket of water overhead stays full only if you swing it fast enough. at the very top the water needs a downward centripetal force to keep curving with the bucket. swing fast and gravity alone is not enough, so the bucket's base has to push down on the water too, and by newton's third law the water pushes up on the base and stays put. swing too slowly and gravity is <i>more</i> than the circle needs, the water wants to fall faster than the path curves, it leaves the base, and you get wet. the critical case, the slowest successful swing, is when gravity alone exactly supplies the centripetal force and the contact force drops to zero."
        },
        {
          "t": "p",
          "html": "That condition, <b>tension zero at the top</b>, is the key that unlocks every vertical-circle problem. Impose it and the radial equation at the top gives the minimum speed there, <i>v</i><sub>top</sub> = √(<i>gR</i>). Energy conservation then carries that condition anywhere else on the loop, most usefully to the bottom, where it gives the minimum launch speed <i>v</i><sub>bottom</sub> = √(5<i>gR</i>) needed to <i>just</i> complete the circle. Change the string for a <b>rigid rod</b> and the answers change with it: a rod can push outward as well as pull, so it can support the bob at the top with no speed at all, and the minimum top speed becomes zero, giving <i>v</i><sub>bottom</sub> = √(4<i>gR</i>) = 2√(<i>gR</i>). The whole difference between the two answers is the 2<i>R</i> of height a string demands you still be moving at."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE RADIAL EQUATION AND THE ENERGY LINK",
          "tag": "the two lines every problem needs",
          "main": "<i>T</i> = <i>mv</i><sup>2</sup>/<i>R</i> + <i>mg</i> cos θ<br><i>v</i><sup>2</sup> = <i>v</i><sub>bottom</sub><sup>2</sup> − 2<i>gh</i>, with <i>h</i> = <i>R</i>(1 − cos θ)",
          "legend": [
            "<i>T</i> is the string tension in newtons, <i>m</i> the mass in kg, <i>R</i> the radius in metres and <i>v</i> the speed at that point in m/s",
            "θ is measured from the <b>lowest</b> point, so θ = 0 at the bottom gives <i>T</i> − <i>mg</i> = <i>mv</i><sup>2</sup>/<i>R</i> and θ = 180° at the top gives <i>T</i> + <i>mg</i> = <i>mv</i><sup>2</sup>/<i>R</i>",
            "<i>h</i> is the height above the lowest point in metres, and <i>g</i> = 9.8 m/s<sup>2</sup>; the tension never appears in the energy line because it is always perpendicular to the motion and so does no work"
          ],
          "note": "Read the first line at θ = 180°: cos 180° = −1, so the <i>mg</i> term becomes negative and gravity is helping the tension rather than opposing it. That sign change is the entire reason the top is the critical point."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE CRITICAL SPEEDS AND THE TENSION RESULT",
          "main": "string, just completing: <i>v</i><sub>top</sub> = √(<i>gR</i>), <i>v</i><sub>side</sub> = √(3<i>gR</i>), <i>v</i><sub>bottom</sub> = √(5<i>gR</i>)<br>always true, at any speed: <i>T</i><sub>bottom</sub> − <i>T</i><sub>top</sub> = 6<i>mg</i><br>rigid rod: <i>v</i><sub>top</sub> = 0, so <i>v</i><sub>bottom</sub> = 2√(<i>gR</i>)",
          "legend": [
            "<i>v</i> is a speed in m/s, <i>R</i> the radius in metres, <i>g</i> = 9.8 m/s<sup>2</sup> and <i>m</i> the mass in kg; side means at the horizontal level of the centre",
            "in the just-completing case <i>T</i><sub>top</sub> = 0 and <i>T</i><sub>bottom</sub> = 6<i>mg</i>, but the <i>difference</i> of 6<i>mg</i> survives at every speed",
            "the difference is speed-independent because the 6<i>mg</i> comes purely from the height difference 2<i>R</i> through energy conservation, and the speed terms cancel"
          ],
          "note": "Three regimes, set entirely by the launch speed <i>u</i> at the bottom: <i>u</i> ≥ √(5<i>gR</i>) completes the circle; <i>u</i> ≤ √(2<i>gR</i>) oscillates like a pendulum without rising above the horizontal; anything between leaves the track in the upper half and becomes a projectile."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE MINIMUM SPEEDS, TAP A LINE",
          "steps": [
            {
              "eq": "at the top: <i>T</i> + <i>mg</i> = <i>mv</i><sub>top</sub><sup>2</sup>/<i>R</i>",
              "why": "At the topmost point both the weight and the tension point downward, toward the centre, so they add to supply the centripetal force. This is the only point on the loop where gravity is fully helping rather than partly opposing."
            },
            {
              "eq": "impose <i>T</i> = 0: <i>mg</i> = <i>mv</i><sub>top</sub><sup>2</sup>/<i>R</i>, so <i>v</i><sub>top</sub> = √(<i>gR</i>)",
              "why": "The slowest the bob can go while keeping the string taut is when the tension just reaches zero and gravity alone does the whole job. Below this speed gravity exceeds the centripetal requirement, the string slackens, and the bob leaves the circle."
            },
            {
              "eq": "bottom to top, rising 2<i>R</i>: ½<i>mv</i><sub>bottom</sub><sup>2</sup> = ½<i>mv</i><sub>top</sub><sup>2</sup> + <i>mg</i>(2<i>R</i>)",
              "why": "Only gravity does work, since the tension is always perpendicular to the motion, so mechanical energy is conserved between the two points. The mass cancels out at once, which is why the critical speeds never depend on it."
            },
            {
              "eq": "<i>v</i><sub>bottom</sub><sup>2</sup> = <i>gR</i> + 4<i>gR</i> = 5<i>gR</i>, so <i>v</i><sub>bottom</sub> = √(5<i>gR</i>)",
              "why": "Substituting the critical top speed gives the minimum launch speed at the bottom needed to just complete the loop. Notice the structure: 1 from the speed you must still have at the top, 4 from the height 2R you had to climb."
            },
            {
              "eq": "at the bottom: <i>T</i><sub>bottom</sub> − <i>mg</i> = <i>m</i>(5<i>gR</i>)/<i>R</i> = 5<i>mg</i>, so <i>T</i><sub>bottom</sub> = 6<i>mg</i>",
              "why": "Here the tension points up and gravity down, so they subtract. With T at the top equal to zero this gives the memorable T(bottom) - T(top) = 6mg, and the same 6mg survives at any speed because the extra speed adds equally to both tensions and cancels in the difference."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 13 · WHY THE TOP IS THE HARD PART",
          "chips": ["at the top", "at the bottom"],
          "captions": [
            "At the top, the tension and the weight both point down, toward the centre, so they ADD to supply mv²/R. A string can only pull, so T cannot go below zero: the slowest possible pass is the one where T = 0 and gravity does the whole job, giving v = √(gR).",
            "At the bottom, the tension points up and the weight down, so they SUBTRACT and the string must supply the centripetal force plus the whole weight besides. That is why the tension is largest here, and why the difference between the two ends comes out at a fixed 6mg."
          ],
          "frames": [
            {
              "x": [0, 10], "y": [0, 7], "axes": "none", "aspect": 0.706,
              "curves": [{ "c": "circle", "cx": 5, "cy": 3.5, "r": 2.2 }],
              "marks": [
                { "x": 5, "y": 3.5, "glyph": "square", "tone": "soft" },
                { "x": 5, "y": 5.7, "glyph": "dot" }
              ],
              "segments": [{ "from": [5, 3.5], "to": [5, 5.7], "soft": true, "label": "R", "at": "mid" }],
              "arrows": [
                { "from": [5, 5.7], "to": [5, 4.95], "tone": "amber", "label": "T", "at": "mid" },
                { "from": [5, 4.95], "to": [5, 4], "tone": "ink", "label": "mg", "at": "mid" }
              ]
            },
            {
              "x": [0, 10], "y": [0, 7], "axes": "none", "aspect": 0.706,
              "curves": [{ "c": "circle", "cx": 5, "cy": 3.5, "r": 2.2 }],
              "marks": [
                { "x": 5, "y": 3.5, "glyph": "square", "tone": "soft" },
                { "x": 5, "y": 1.3, "glyph": "dot" }
              ],
              "segments": [{ "from": [5, 3.5], "to": [5, 1.3], "soft": true, "label": "R", "at": "mid" }],
              "arrows": [
                { "from": [5, 1.3], "to": [5, 2.3], "tone": "amber", "label": "T", "at": "mid" },
                { "from": [5, 1.3], "to": [5, 0.4], "tone": "ink", "label": "mg", "at": "mid" }
              ]
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 14 · THE THREE CRITICAL SPEEDS",
          "chips": ["one loop, three numbers"],
          "captions": [
            "For a string just completing the loop, the speed at each of the three named points is fixed by g and R alone, with the mass nowhere in sight. The arrows show the direction of travel. Sketch this circle and label it before touching any vertical-circle question, and you will never swap √(gR) at the top for √(5gR) at the bottom."
          ],
          "frames": [
            {
              "x": [0, 10], "y": [0, 7], "axes": "none", "aspect": 0.706,
              "curves": [{ "c": "circle", "cx": 5, "cy": 3.5, "r": 2.2 }],
              "marks": [{ "x": 5, "y": 3.5, "glyph": "square", "tone": "soft" }],
              "points": [
                { "x": 5, "y": 5.7, "label": "√(gR)", "at": "nw" },
                { "x": 7.2, "y": 3.5, "label": "√(3gR)", "at": "ne" },
                { "x": 5, "y": 1.3, "label": "√(5gR)", "at": "se" }
              ],
              "arrows": [
                { "from": [5, 5.7], "to": [3.7, 5.7], "tone": "amber" },
                { "from": [7.2, 3.5], "to": [7.2, 4.8], "tone": "amber" },
                { "from": [5, 1.3], "to": [6.3, 1.3], "tone": "amber" }
              ]
            }
          ]
        },
        {
          "t": "defgrid",
          "title": "The three regimes, by launch speed at the bottom",
          "rows": [
            { "k": "<i>u</i> ≥ √(5<i>gR</i>)", "v": "completes the full vertical circle; the string stays taut the whole way round" },
            { "k": "<i>u</i> ≤ √(2<i>gR</i>)", "v": "oscillates like a pendulum, never rising above the horizontal; at exactly √(2<i>gR</i>) it just reaches the level of the centre and stops there" },
            { "k": "between the two", "v": "the string goes slack somewhere in the upper half and the bob leaves the circular path, becoming a projectile" },
            { "k": "Rigid rod instead", "v": "a rod can push outward, so <i>v</i><sub>top</sub> = 0 is allowed and only <i>v</i><sub>bottom</sub> = 2√(<i>gR</i>) is needed to complete the loop" }
          ]
        },
        {
          "t": "proc",
          "title": "Every vertical-circle problem, in the same order",
          "steps": [
            "<b>Sketch the circle and mark the point the question is about.</b> Label the top, the side and the bottom, so the three critical speeds cannot get swapped.",
            "<b>Write the radial equation at that point:</b> the net inward force equals <i>mv</i><sup>2</sup>/<i>R</i>. At the top both <i>T</i> and <i>mg</i> point inward and add; at the bottom they oppose; in between use <i>T</i> = <i>mv</i><sup>2</sup>/<i>R</i> + <i>mg</i> cos θ.",
            "<b>Connect two points with energy conservation</b>, <i>v</i><sup>2</sup> = <i>u</i><sup>2</sup> − 2<i>gh</i>. Never assume a single constant speed around the loop, because there is not one.",
            "<b>For a minimum-speed question, impose <i>T</i> = 0 at the top</b> and let energy conservation carry it wherever the question wants it.",
            "<b>For a does-it-complete question, compare the launch speed against √(2<i>gR</i>) and √(5<i>gR</i>)</b>, or compute the speed at the top and compare it with √(<i>gR</i>). Either route decides the regime in one line."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A 0.2 kg stone tied to a string of length 1 m is whirled in a vertical circle. Find (a) the minimum speed at the highest point and (b) the minimum speed at the lowest point needed to just complete the circle. Take <i>g</i> = 10 m/s<sup>2</sup> for quick arithmetic.",
          "steps": [
            "(a) The critical condition at the top is <i>T</i> = 0, so gravity alone supplies the centripetal force: <i>v</i><sub>top</sub> = √(<i>gR</i>) = √((10)(1)) = √10 ≈ 3.2 m/s.",
            "(b) Carry that condition to the bottom with energy conservation over the rise 2<i>R</i>: <i>v</i><sub>bottom</sub> = √(5<i>gR</i>) = √(5(10)(1)) = √50 ≈ 7.1 m/s.",
            "Notice the mass never entered either answer. The critical speeds depend only on <i>g</i> and <i>R</i>, because the mass cancels out of the energy equation and out of the radial equation alike. It would matter if the question had asked for a tension."
          ],
          "ans": "v<sub>top</sub> ≈ 3.2 m/s · v<sub>bottom</sub> ≈ 7.1 m/s"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "A 0.5 kg body is whirled in a vertical circle. The difference between the maximum and minimum tension in the string is: it needs the speed to find; 30 N; 5 N; or 15 N? Take <i>g</i> = 10 m/s<sup>2</sup>.",
          "steps": [
            "The trap is to assume you need the speed or the radius, and pick the it-cannot-be-found option, or to compute a tension at one point and stop there.",
            "The maximum tension is at the bottom and the minimum at the top, and their difference is speed-independent: <i>T</i><sub>bottom</sub> − <i>T</i><sub>top</sub> = 6<i>mg</i>.",
            "So the answer is 6(0.5)(10) = 30 N, and neither the speed nor the radius was ever needed.",
            "Why the speed cancels: extra speed raises <i>both</i> tensions by the same <i>mv</i><sup>2</sup>/<i>R</i> at each end, and energy conservation ties the two speeds together through the fixed height 2<i>R</i>. All that survives in the difference is 6<i>mg</i>."
          ],
          "ans": "30 N"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "A 2 kg ball is whirled in a vertical circle of radius 0.5 m, with a speed of 6 m/s at the lowest point. Find (a) its speed at the highest point and (b) the tension at the lowest point, and say whether it completes the circle. Take <i>g</i> = 10 m/s<sup>2</sup>.",
          "steps": [
            "(a) Energy conservation over the rise 2<i>R</i> = 1 m: <i>v</i><sub>top</sub><sup>2</sup> = <i>v</i><sub>bottom</sub><sup>2</sup> − 4<i>gR</i> = 36 − 4(10)(0.5) = 36 − 20 = 16, so <i>v</i><sub>top</sub> = 4.0 m/s.",
            "Completion check: the minimum top speed is √(<i>gR</i>) = √((10)(0.5)) = √5 ≈ 2.2 m/s. Since 4.0 > 2.2, the string stays taut and the ball does complete the circle.",
            "(b) At the bottom the tension points up and gravity down, so <i>T</i> = <i>mv</i><sup>2</sup>/<i>R</i> + <i>mg</i> = (2)(36)/0.5 + (2)(10) = 144 + 20 = 164 N.",
            "Cross-check the 6<i>mg</i> result: at the top <i>T</i> = <i>mv</i><sup>2</sup>/<i>R</i> − <i>mg</i> = (2)(16)/0.5 − 20 = 64 − 20 = 44 N, and 164 − 44 = 120 N = 6(2)(10). It holds, exactly as it must at any speed."
          ],
          "ans": "v<sub>top</sub> = 4.0 m/s · T<sub>bottom</sub> = 164 N · yes, it completes the circle"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "A bob on a string of length <i>R</i> is given a speed <i>u</i> = √(3<i>gR</i>) at the lowest point. Show that it does not complete the circle, and find the angle from the lowest point at which the string goes slack.",
          "steps": [
            "First identify the regime. Since √(2<i>gR</i>) < √(3<i>gR</i>) < √(5<i>gR</i>), the launch speed sits in the middle band: the bob rises past the horizontal but the string slackens before the top, so it does <b>not</b> complete the circle.",
            "Speed at angle θ from the bottom, where the height gained is <i>h</i> = <i>R</i>(1 − cos θ): <i>v</i><sup>2</sup> = <i>u</i><sup>2</sup> − 2<i>gR</i>(1 − cos θ) = 3<i>gR</i> − 2<i>gR</i> + 2<i>gR</i> cos θ = <i>gR</i>(1 + 2 cos θ).",
            "The string goes slack when <i>T</i> = 0. Setting <i>T</i> = <i>mv</i><sup>2</sup>/<i>R</i> + <i>mg</i> cos θ to zero gives <i>v</i><sup>2</sup> = −<i>gR</i> cos θ, which is only possible where cos θ < 0, that is in the upper half, exactly as expected.",
            "Equate the two expressions for <i>v</i><sup>2</sup>: <i>gR</i>(1 + 2 cos θ) = −<i>gR</i> cos θ, so 1 + 2 cos θ = −cos θ and 3 cos θ = −1, giving cos θ = −1/3.",
            "θ = cos<sup>−1</sup>(−1/3) ≈ 109.5° from the bottom, which is about 19.5° above the horizontal. Beyond that point the string is slack and the bob flies off as a projectile."
          ],
          "ans": "it does not complete the circle · the string goes slack at θ ≈ 109.5° from the bottom"
        },
        {
          "t": "mcq",
          "q": "The minimum speed at the highest point of a vertical circle of radius <i>R</i>, for a body on a <b>string</b>, is:",
          "opts": [
            { "label": "√(2<i>gR</i>)", "nudge": "This is the launch speed that just carries the bob to the horizontal level of the centre, the boundary of the oscillating regime, not a top-of-the-loop speed." },
            { "label": "√(<i>gR</i>)", "nudge": null },
            { "label": "√(5<i>gR</i>)", "nudge": "That is the minimum speed at the BOTTOM, not the top. The two are the most-swapped pair in the topic." },
            { "label": "zero", "nudge": "Zero applies to a rigid ROD, which can push outward and support the bob. A string would have gone slack long before." }
          ],
          "correct": 1,
          "solution": "At the top the minimum condition is <i>T</i> = 0, so gravity alone supplies the centripetal force: <i>mg</i> = <i>mv</i><sup>2</sup>/<i>R</i>, giving <i>v</i> = √(<i>gR</i>)."
        },
        {
          "t": "mcq",
          "q": "For a body just completing a vertical circle, the ratio of its maximum speed to its minimum speed, bottom to top, is:",
          "opts": [
            { "label": "5 : 1", "nudge": "That is the ratio of the SQUARES of the speeds, which is the ratio of the kinetic energies, not of the speeds themselves." },
            { "label": "√5 : 1", "nudge": null },
            { "label": "3 : 1", "nudge": "There is no basis for 3 here; √(3gR) is the speed at the side, and it is not either end of the range." },
            { "label": "6 : 1", "nudge": "6 belongs to the tension result, T(bottom) − T(top) = 6mg. It is a force relation, not a speed one." }
          ],
          "correct": 1,
          "solution": "The two speeds are √(5<i>gR</i>) and √(<i>gR</i>), so the ratio is √(5<i>gR</i>) : √(<i>gR</i>) = √5 : 1, about 2.24 : 1."
        },
        {
          "t": "mcq",
          "q": "The difference in tension between the lowest and highest points of a vertical circle, for a bob of mass <i>m</i>, is:",
          "opts": [
            { "label": "2<i>mg</i>", "nudge": "This counts only the direct weight reversal between the two ends and misses the contribution from the kinetic energy gained over the drop 2R." },
            { "label": "3<i>mg</i>", "nudge": "Under-counts the same way; the full accounting comes to exactly six." },
            { "label": "6<i>mg</i>", "nudge": null },
            { "label": "it depends on the speed", "nudge": "The tempting trap: it FEELS as though faster motion should widen the gap. The speed terms genuinely cancel, because energy conservation over the fixed height 2R ties the two speeds together." }
          ],
          "correct": 2,
          "solution": "Write the radial equation at both ends and subtract, using <i>v</i><sub>bottom</sub><sup>2</sup> − <i>v</i><sub>top</sub><sup>2</sup> = 4<i>gR</i> from energy conservation. The speed dependence cancels and exactly 6<i>mg</i> is left, at any speed."
        },
        {
          "t": "mcq",
          "q": "A ball on a string is given a speed of exactly √(2<i>gR</i>) at the lowest point of a vertical circle. It will:",
          "opts": [
            { "label": "complete the circle", "nudge": "Completing needs at least √(5gR), which is a good deal more than √(2gR)." },
            { "label": "oscillate without rising above the horizontal", "nudge": null },
            { "label": "leave the track in the upper half", "nudge": "That regime needs a launch speed strictly greater than √(2gR); at exactly this value the bob stops at the horizontal instead." },
            { "label": "stop at the top", "nudge": "Impossible on a string: it would have gone slack far earlier, and stopping at the top is a rigid-rod outcome anyway." }
          ],
          "correct": 1,
          "solution": "With <i>u</i> = √(2<i>gR</i>) the bob's speed reaches zero exactly at the height <i>h</i> = <i>R</i>, the level of the centre, and it swings back: pendulum motion. The launch speed sorts the outcome into one of the three regimes."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] A ball tied to a string of length 0.4 m is whirled in a vertical circle. Find the minimum speed at the top. Take <i>g</i> = 10 m/s<sup>2</sup>.", "a": "<i>v</i><sub>top</sub> = √(<i>gR</i>) = √((10)(0.4)) = √4 = 2.0 m/s." },
            { "q": "[NEET] For a 1 kg stone whirled in a vertical circle, find the difference between the tensions at the lowest and highest points. Take <i>g</i> = 10 m/s<sup>2</sup>.", "a": "6<i>mg</i> = 6(1)(10) = 60 N, independent of the speed and the radius." },
            { "q": "[JEE Main] A 0.5 kg bob on a string of radius 1 m has a speed of 5 m/s at the top of a vertical circle. Find the tension there. Take <i>g</i> = 10 m/s<sup>2</sup>.", "a": "At the top <i>T</i> = <i>mv</i><sup>2</sup>/<i>R</i> − <i>mg</i> = (0.5)(25)/1 − (0.5)(10) = 12.5 − 5 = 7.5 N." },
            { "q": "[JEE Main] What minimum speed at the lowest point lets a ball complete a vertical circle of radius 0.8 m? Take <i>g</i> = 10 m/s<sup>2</sup>.", "a": "<i>v</i><sub>bottom</sub> = √(5<i>gR</i>) = √(5(10)(0.8)) = √40 ≈ 6.3 m/s." },
            { "q": "[JEE Advanced] A mass on a <b>rigid rod</b> of length <i>R</i> is whirled in a vertical circle. Find the minimum speed at the lowest point needed to complete the circle, and explain why it differs from the string case.", "a": "<i>v</i><sub>bottom</sub> = √(4<i>gR</i>) = 2√(<i>gR</i>). A rod can <i>push</i> outward as well as pull, so it can hold the bob at the top with zero speed, whereas a string must stay taut and so needs <i>v</i><sub>top</sub> = √(<i>gR</i>). Energy conservation over the same 2<i>R</i> then turns 0 into 4<i>gR</i> instead of <i>gR</i> into 5<i>gR</i>." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Using one constant speed around the loop.</b> The speed changes continuously, slowest at the top and fastest at the bottom, so this is not uniform circular motion. Always link two points with energy conservation before touching a tension.",
            "<b>Forgetting that a string cannot push.</b> The whole <i>T</i> = 0 critical condition exists <i>because</i> a string only pulls. A rigid rod can push, so its minimum top speed is zero and its answer, 2√(<i>gR</i>) at the bottom, is genuinely different.",
            "<b>Mixing up the three critical speeds.</b> √(<i>gR</i>) is at the <b>top</b>, √(3<i>gR</i>) at the <b>side</b>, √(5<i>gR</i>) at the <b>bottom</b>. Sketch the circle and label all three before writing anything, because swapping the first and the last is the single commonest slip.",
            "<b>Believing <i>T</i><sub>bottom</sub> − <i>T</i><sub>top</sub> = 6<i>mg</i> needs the speed.</b> It does not: the speed dependence cancels, so reaching for a speed or a radius here only wastes time.",
            "<b>Forgetting that gravity's component changes sign around the loop.</b> In <i>T</i> = <i>mv</i><sup>2</sup>/<i>R</i> + <i>mg</i> cos θ, the cosine is positive in the lower half and negative in the upper half. Dropping that sign makes the top look no harder than the bottom, which is the opposite of the truth."
          ]
        },
        {
          "t": "protip",
          "html": "tackle every vertical-circle problem in the same three moves: write the radial equation at the point you care about, connect points with <i>v</i><sup>2</sup> = <i>u</i><sup>2</sup> − 2<i>gh</i>, and impose <i>T</i> = 0 at the top when the question says minimum or just completes. keep √(<i>gR</i>), √(3<i>gR</i>), √(5<i>gR</i>) and <i>T</i><sub>bottom</sub> − <i>T</i><sub>top</sub> = 6<i>mg</i> on instant recall, because those four alone answer most mcqs without a line of algebra. and check the regime before solving anything: below √(2<i>gR</i>) it swings like a pendulum, above √(5<i>gR</i>) it goes all the way round, and in between it leaves the track, so a question asking where does it leave is telling you which band it is in before you start."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "T = mv<sup>2</sup>/R + mg cos θ, θ from the bottom", "note": "cos θ is negative in the upper half, which is what makes the top critical" },
            { "f": "v<sup>2</sup> = v<sub>bottom</sub><sup>2</sup> − 2gh, h = R(1 − cos θ)", "note": "the tension never appears: it is always perpendicular and does no work" },
            { "f": "string: top √(gR) · side √(3gR) · bottom √(5gR)", "note": "the mass cancels out of all three" },
            { "f": "T<sub>bottom</sub> − T<sub>top</sub> = 6mg, at any speed", "note": "in the just-completing case T<sub>top</sub> = 0 and T<sub>bottom</sub> = 6mg" },
            { "f": "u ≥ √(5gR) completes · u ≤ √(2gR) oscillates · between, leaves the track", "note": "a rigid rod needs only 2√(gR), since it can push" }
          ],
          "aids": [
            "\"top needs root gR, bottom needs root 5gR\"",
            "\"a string pulls only; a rod can push\""
          ]
        }
      ]
    }
  ]
};

export default phy11WorkEnergyPower;
