/**
 * Chapter 03 · Motion in a Plane. Physics, Class 11.
 *
 * Restructured from pages 131 to 193 of the Drona Class 11 Physics Master
 * Reference (Chapter 3: Vector Algebra and Resolution, Vector Products,
 * Two-Dimensional Kinematics, Projectile Motion, Relative Velocity in Two
 * Dimensions, Circular Motion Dynamics) into the block system in
 * design_handoff_textbooks/CONTENT_SPEC.md and lib/textbooks.ts, matching the
 * voice and density of phy-11-02-motion-straight-line.ts.
 *
 * SIX TOPICS, because the source has exactly six sub-topics in this range and
 * they map 1:1 onto the six below. Nothing was merged or split. The Round 2
 * Addendum (pages 181 to 193: A projectiles that do not land at launch level,
 * B the vertical circle, C banking with friction, D the river the boat cannot
 * beat plus closest approach by geometry) is not a topic, per the brief. Every
 * line drawn from it lives in a `protip`, a `mistakes` item, or the hardest
 * `ex`/`mcq` of the group it extends: A into Topic 04's projectile material,
 * B and C into Topic 06's circular-motion material, D into Topic 05's river
 * and closest-approach material. No `formula`, `defgrid`, `deriv`, `proc` or
 * `diagram` block below is sourced from the addendum.
 *
 * ERRATA REVIEWED (source pages 977 to 981, all five errata pages read in
 * full). NO ENTRY TOUCHES THIS RANGE. The list carries entries for Chapter 1
 * (SI adoption year), Chapter 2 (contents omission, a phantom MCQ option),
 * Chapter 4 (two duplicated option labels, one wrong key), Chapter 6 (a
 * metre-stick MCQ whose options miss the answer, a dropped mass factor in an
 * angular-momentum answer), Chapter 8 (leaked LaTeX), Chapter 9 (shifted part
 * labels) and Chapter 11 (a molar-quantity arithmetic error, CO2 misdescribed
 * as bent). Chapter 3 is absent from the list entirely, so nothing printed in
 * pages 131 to 193 was flagged by the publisher.
 *
 * CORRECTIONS BEYOND THE ERRATA. Every worked example, practice answer and
 * MCQ key across all six sub-topics, plus the eight addendum examples and
 * twenty addendum practice answers, was recomputed independently. One genuine
 * defect found:
 *
 *   - Sub-topic 05, Practice answer 4 (page 169). The question: "To a man
 *     walking east at 5 m/s, the wind appears to blow from the north at 5 m/s.
 *     Find the actual velocity of the wind." The printed answer block appears
 *     TWICE on the page in contradictory forms, one ending "(i.e. velocity
 *     5i − 5j, toward south-east)" and the other ending "−5i − 5j, toward
 *     south-west)". Only the first is right. Working: the apparent wind blows
 *     FROM the north, so it travels southward and v(wind, man) = (0, −5).
 *     Since v(wind, man) = v(wind) − v(man), v(wind) = (0, −5) + (5, 0) =
 *     (5, −5) m/s, magnitude 5√2 ≈ 7.07 m/s, pointing south-east, which is a
 *     wind blowing FROM the north-west. The south-west variant comes from
 *     subtracting the man's velocity a second time instead of adding it. This
 *     chapter's Topic 05 practice item 4 carries the corrected answer with the
 *     sign reasoning spelled out.
 *
 *   Everything else matched: all 24 worked examples, all 30 practice answers,
 *   all 24 MCQ keys, and every addendum result used below. In particular the
 *   Example 3 note that a zero-drift crossing (10 s) is slower than the
 *   minimum-time crossing (8 s), the complementary-angle sum H1 + H2 = u2/2g
 *   = 20 m, the radius of curvature 20√2 ≈ 28.3 m, the closest approach
 *   10√2 ≈ 14.1 km at t = 1 h, and the vertical-circle tensions 44 N and
 *   164 N differing by exactly 6mg = 120 N were each re-derived from scratch
 *   and agree with the print.
 *
 *   Two items that look like errors and are not, recorded so the next author
 *   does not "fix" them:
 *
 *   - Addendum B, Practice answer 4 prints a visible self-correction ("and
 *     √3 > 2 is false... check carefully"). Its final verdict, that a bead on
 *     a rigid wire launched at u = √(3gl) does NOT complete the loop because
 *     3gl < 4gl, is correct. The wandering is editorial, not arithmetic.
 *   - The Addendum's own preface says "five examinable patterns" and then
 *     prints four lettered addenda. Addendum A really does carry two distinct
 *     patterns (the tower shot and the inclined plane), so the count is honest.
 *
 * SOURCE DAMAGE. Every passage below was re-authored from context, never
 * transcribed. The patterns actually present in pages 131 to 193:
 *
 *   - NON-ASCII MATH OPERATORS DIE AS BACKSLASH TOKENS, four distinct ones,
 *     58 occurrences in this range. `\n7` is a minus sign: page 133's
 *     "|A \n7 B| <= R <= A + B" is the resultant range |A − B| ≤ R ≤ A + B;
 *     page 142's cross-product component "(AyBz \n7 AzBy)" is a subtraction;
 *     page 158's "y = (u sin t) t \n7 ½gt2" is the projectile's vertical
 *     position; page 166's rain formula "vrm = vr \n7 vm" is a vector
 *     subtraction; page 176's "T = mv2/r \n7 mg" is the top-of-loop tension.
 *     `\nA` (20 times) is the dot operator, so page 133's "A \nA B = AB cos"
 *     is A · B = AB cos θ, and page 158's range derivation "(u cos) \nA
 *     2u sin/g" is a plain multiplication. `\nN` (14 times) is the cross
 *     operator: page 133's "A \nN B = (AB sin) n" is A × B. `\nK` (4 times)
 *     is the degree sign, so page 158's "2θ = 90 \nK" is 2θ = 90° and page
 *     177's banking answer "θ ≈ 24.2 \nK" is 24.2°.
 *   - GREEK LETTERS AND ITALIC SYMBOLS VANISH WITH NO PLACEHOLDER wherever a
 *     run is set in the figure-caption face. The worst two, both reconstructed
 *     entirely from the surrounding argument rather than token by token:
 *     (a) Figure 3.1's trailing derivation on pages 133 and 134 extracts as
 *     "Drop a perpendicular from to the line extended, meeting it at . In the
 *     right triangle : = cos , = sin . Now in the right triangle , with = +
 *     = + cos : 2 = 2 + 2 = (+ cos )2 + (sin )2." Rebuilt against the intact
 *     body text on page 135 and the figure brief on the same page, this is:
 *     drop QS perpendicular to the extension of OP, meeting it at S; in right
 *     triangle PQS, PS = B cos θ and QS = B sin θ; then in right triangle OQS,
 *     with OS = OP + PS = A + B cos θ, R2 = OS2 + QS2 = (A + B cos θ)2 +
 *     (B sin θ)2, which expands to A2 + B2 + 2AB cos θ. Topic 01's `deriv`
 *     block below is that reconstruction.
 *     (b) Figure 3.6's trailing derivation on pages 174 and 175 extracts as
 *     "the length of this third side is |Δ | = Δ. The magnitude of the
 *     acceleration is therefore = lim Δ→0 |Δ | Δ= lim Δ→0 Δ Δ= . Using = to
 *     rewrite this: = = 2 = 2." Rebuilt from the intact prose on page 174 (the
 *     isosceles velocity triangle, the tangent turning by the same Δθ as the
 *     radius) this is: |Δv| = v Δθ; a(c) = lim(Δt→0) |Δv|/Δt = lim(Δt→0)
 *     v Δθ/Δt = vω; and using v = ωr, a(c) = vω = v2/r = ω2r. Topic 06's
 *     `deriv` block below is that reconstruction, and it is the only route to
 *     the chapter's headline formula, so it could not simply be dropped.
 *     The same loss hits every angle in every second-copy figure caption on
 *     pages 134, 143, 151, 159, 167, 175 and 178.
 *   - SUPERSCRIPTS AND SUBSCRIPTS LAND ON THEIR OWN LINES, which breaks every
 *     squared quantity, every unit with an exponent, and every subscripted
 *     component in the range: "m/s" then "2" on the next line for m/s2, "sin"
 *     then "2" then the angle for sin2θ, "A" then "x" for the x-component,
 *     "v" then "max" for the maximum speed. Recomputing all 24 worked examples
 *     (see above) was the check that these were reassembled correctly, since a
 *     misplaced exponent changes an answer.
 *   - INTER-WORD SPACES VANISH at tight kerning, throughout. Instances used in
 *     or adjacent to prose written below: "forallof" (p.131, "for all of"),
 *     "magnitudeanda direction" (p.131, "magnitude and a direction"),
 *     "donotsimply add" (p.132, "do not simply add"), "theeffectivecombined
 *     push" (p.132), "thedirectionis exactly what speed throws away" (p.137),
 *     "andtime-of-closest-direction" (p.148), "travels farsideways
 *     whilefalling" (p.156), "carries thewhole boat downstream" (p.164),
 *     "can't speed upor slow down" (p.170), "centripetaldynamics" and
 *     "isamarriage of two things" (p.181), "loop nearlyevery other year"
 *     (p.185), "below the available0.5" (p.188).
 *   - ONE PAGE'S ANSWER BLOCK IS REFLOWED OUT OF ORDER. Page 169's Sub-topic
 *     05 answer key is split into two runs that the extraction interleaves
 *     with the page number, so answers 1 and 2 are lost entirely and answer 4
 *     appears twice with opposite directions. Answers 1 and 2 were recomputed
 *     rather than read (40 s and 160 m; 45° from the vertical); answer 4 is
 *     the correction recorded above.
 *   - NOT OBSERVED IN THIS RANGE: the ASCII-shifted-by-29 heading run. Every
 *     printable token in pages 131 to 193 was decoded by −29 and none produced
 *     English, so this chapter's headings are intact.
 *
 * DIMENSIONS. Every formula printed below, reduced to M L T. Angles, and
 * therefore sin, cos, tan and every ratio of two like quantities, are pure
 * numbers throughout.
 *
 *   Topic 01, vectors and resolution:
 *   - Unit vector A/|A|: [X]/[X] = 1, dimensionless, as the chapter states.
 *   - Ax = A cos θ, Ay = A sin θ: both carry A's own dimension. ✓
 *   - A = √(Ax2 + Ay2): [X]. tan θ = Ay/Ax: dimensionless. ✓
 *   - R = √(A2 + B2 + 2AB cos θ): every term under the root is [X2], so R is
 *     [X]. This is also the check that the parallelogram law can only ever
 *     combine LIKE quantities: a force and a velocity have no resultant.
 *   - tan α = B sin θ/(A + B cos θ): [X]/[X] = 1. ✓
 *   - |A − B| ≤ R ≤ A + B: three quantities of the same dimension. ✓
 *
 *   Topic 02, products:
 *   - A · B = AB cos θ: [A][B]. A × B: |A||B| sin θ, also [A][B]. The two
 *     products are dimensionally IDENTICAL and differ only in rank, which is
 *     exactly why a dimension check cannot catch the cos-for-sin slip and the
 *     chapter has to teach the physics test instead.
 *   - W = F · d: [M L T−2][L] = [M L2 T−2], energy. ✓
 *   - P = F · v: [M L T−2][L T−1] = [M L2 T−3], power. ✓
 *   - τ = r × F: [L][M L T−2] = [M L2 T−2]. Same dimensions as work and a
 *     completely different quantity, flagged in Topic 02 as the standing
 *     counterexample to "same dimensions means same thing".
 *   - L = r × p: [L][M L T−1] = [M L2 T−1]. ✓
 *   - Scalar triple product of three displacements: [L3], a volume. ✓
 *
 *   Topic 03, plane kinematics:
 *   - v = dr/dt: [L T−1]. a = dv/dt: [L T−2]. ✓
 *   - |v| = √(vx2 + vy2): [L T−1]. ✓
 *   - v = v0 + at: [L T−1] = [L T−1] + [L T−2][T]. ✓
 *   - r = r0 + v0t + ½at2: [L] = [L] + [L T−1][T] + [L T−2][T2]. ✓
 *   - vx2 = v0x2 + 2ax Δx: [L2 T−2] = [L2 T−2] + [L T−2][L]. ✓
 *   - Radius of curvature r = v2/a(perp): [L2 T−2]/[L T−2] = [L]. ✓
 *
 *   Topic 04, projectiles:
 *   - T = 2u sin θ/g: [L T−1]/[L T−2] = [T]. ✓
 *   - H = u2 sin2θ/2g: [L2 T−2]/[L T−2] = [L]. ✓
 *   - R = u2 sin 2θ/g: [L]. Rmax = u2/g: [L]. ✓
 *   - y = x tan θ − gx2/(2u2cos2θ): [L] − [L T−2][L2]/[L2 T−2] = [L] − [L].
 *     ✓ This one is worth doing slowly: the second term's u2 in the
 *     denominator is what rescues it, and dropping it is a real exam error.
 *   - Horizontal launch, T = √(2h/g): √([L]/[L T−2]) = √[T2] = [T]. ✓
 *     R = u√(2h/g): [L T−1][T] = [L]. ✓
 *   - R = 4H cot θ: [L] = [L]. H1 + H2 = u2/2g: [L]. ✓
 *
 *   Topic 05, relative velocity:
 *   - vAB = vA − vB and vAg = vAb + vbg: [L T−1] throughout. ✓
 *   - t = d/vb: [L]/[L T−1] = [T]. Drift = vr d/vb: [L T−1][L]/[L T−1] = [L].
 *     ✓
 *   - sin θ = vr/vb: dimensionless, which is also why the crossing is
 *     impossible when the ratio exceeds 1. t = d/√(vb2 − vr2): [T]. ✓
 *   - tan α = vm/vr: dimensionless. ✓
 *   - Closest approach s = |r0 × v|/|v|: [L][L T−1]/[L T−1] = [L]. ✓
 *
 *   Topic 06, circular motion:
 *   - s = rθ: [L], θ being a pure number, which is the whole reason radians
 *     and not degrees.
 *   - v = ωr: [T−1][L] = [L T−1]. at = αr: [T−2][L] = [L T−2]. ✓
 *   - ω = 2π/T = 2πf: [T−1]. ✓
 *   - ac = v2/r = ω2r = vω: [L2 T−2]/[L] and [T−2][L] and [L T−1][T−1] all
 *     reduce to [L T−2]. Three forms, one dimension, which is the fastest
 *     check that they really are the same acceleration.
 *   - Fc = mv2/r = mω2r: [M L T−2]. ✓
 *   - a = √(at2 + ac2): [L T−2]. ✓
 *   - ω = ω0 + αt, θ = ω0t + ½αt2, ω2 = ω02 + 2αθ: [T−1], dimensionless,
 *     [T−2]. ✓
 *   - tan θ = v2/rg: [L2 T−2]/([L][L T−2]) = 1, dimensionless as an angle's
 *     tangent must be. ✓
 *   - vmax = √(μrg): √([L][L T−2]) = [L T−1], μ being dimensionless. ✓
 *
 *   38 formula lines checked, 38 dimensionally consistent, none informal.
 *
 * PHYSICAL PLAUSIBILITY AND LIMITING CASES. No speed anywhere approaches c
 * (the fastest number in the chapter is 43.6 m/s, an impact speed). No
 * negative time or negative distance survives any solution: the projectile
 * flight-time quadratic in Topic 04 explicitly discards its negative root, and
 * Topic 05's closest-approach work names what a negative t means physically
 * rather than silently dropping it. Limiting cases used to teach rather than
 * merely quoted:
 *   - θ → 0°, 90°, 180° in the parallelogram law, read straight off
 *     R = √(A2 + B2 + 2AB cos θ) as A + B, √(A2 + B2) and |A − B|. These are
 *     drawn as three chips of the Topic 01 range figure, so the band
 *     |A − B| ≤ R ≤ A + B is something a student has seen, not memorised.
 *   - θ → 90° for a projectile: R = u2 sin 2θ/g goes to zero, which is the
 *     answer to "why isn't steeper always farther", used as an MCQ nudge.
 *   - θ → 0° for a projectile: both R and H vanish. Together with the above,
 *     the maximum at 45° is bracketed rather than asserted.
 *   - α → 0 collapses the angular equations to θ = ωt, i.e. uniform circular
 *     motion, named in Topic 06's snapshot.
 *   - μ → 0 on a banked road collapses the safe-speed band to the single
 *     design speed √(rg tan θ), and θ → 0 collapses it to the flat-road
 *     √(μrg). Both appear in Topic 06's `protip`, drawn from Addendum C's own
 *     consistency checks.
 *   - vb → vr in the river problem: the minimum-drift heading goes to 90°,
 *     the drift goes to zero and the crossing time goes to infinity. Topic
 *     05's `protip` uses this, from Addendum D, as the case where two correct
 *     limits genuinely disagree.
 *
 * SEAMS: what is quoted as already known and never re-derived here, all from
 * math-11-03-trigonometry.ts, the Class 11 maths prerequisite.
 *   - sin, cos and tan as the coordinates of a point on the unit circle (that
 *     file's Topic 02). Resolution in Topic 01 below is named as exactly that
 *     identification, in one `think` block, rather than re-taught.
 *   - sin2θ + cos2θ = 1 (that file's Topic 02 snapshot). Used without comment
 *     wherever components reassemble into a magnitude, and it is the single
 *     step that finishes the parallelogram-law derivation in Topic 01 and the
 *     complementary-height result in Topic 04.
 *   - The standard values sin 30° = 1/2, cos 30° = √3/2, sin 45° = cos 45° =
 *     1/√2, sin 60° = √3/2 (that file's Topic 03). Used numerically
 *     throughout and never listed.
 *   - The allied-angle rule sin(180° − θ) = sin θ (that file's Topic 03
 *     snapshot). This is the whole proof that complementary launch angles
 *     share a range, and Topic 04 cites it by name in one line instead of
 *     proving it.
 *   - sin 2A = 2 sin A cos A (that file's Topic 05). This is the only step
 *     between R = 2u2 sin θ cos θ/g and R = u2 sin 2θ/g, and Topic 04's
 *     `deriv` names it as a quotation.
 *   - Radian measure and s = rθ (that file's Topic 01). Topic 06 uses it as
 *     the definition it already is, and differentiates it; it does not
 *     re-establish why an angle in radians is a pure number.
 *   NOT quoted, deliberately: math-12-10-vector-algebra.ts. That is a Class 12
 *   chapter, so a Class 11 physics student has not met it, and every vector
 *   idea this chapter needs (components, the parallelogram law, the two
 *   products, the determinant form, the triple products) is therefore built
 *   here from scratch in Topics 01 and 02 rather than assumed.
 *
 * FIGURES. Eleven `diagram` blocks, all of kind `plot`, carrying eighteen
 * frames between them. All seven figures the source names are drawn: 3.1
 * (Topic 01), 3.2 (Topic 02), 3.3 (Topic 03), 3.4 (Topic 04), 3.5 (Topic 05),
 * 3.6 and 3.7 (Topic 06). Four more were designed where the text plainly needs
 * a picture the source never asks for: the resolution-and-range chart in Topic
 * 01, the dropped-versus-fired independence pair in Topic 03, the rain-man
 * pair in Topic 05, and the two-accelerations pair in Topic 06. None dropped,
 * and no new figure vocabulary requested.
 *
 * THE PANEL RULE, applied. The source describes 3.2, 3.5 and 3.6 as "two
 * side-by-side panels". Each is one diagram block with two chips, never two
 * panels inside one frame: at 316pt a half-frame is 150pt and unreadable, and
 * comparing by tapping beats squinting. The same treatment gives the Topic 01
 * range chart four chips and the three designed pairs two chips each.
 */
import type { Chapter } from '@/lib/textbooks';

export const phy11MotionPlane: Chapter = {
  "chapter": "03",
  "title": "Motion in a Plane",
  "subject": "Physics",
  "klass": "Class 11",
  "topics": [
    {
      "n": "01",
      "title": "Vectors, Resolution and the Parallelogram Law",
      "chip": "01 VECTORS",
      "kalam": "resolve first, add second, recombine last",
      "blocks": [
        {
          "t": "hook",
          "html": "<b>01 · Vector Algebra and Resolution</b><br>This is the mathematical toolkit for all of two-dimensional physics: projectiles, forces, fields, everything downstream leans on it. CBSE Boards ask the parallelogram-law derivation for 2 to 3 marks, plus a component-resolution numerical. JEE Main reliably carries one or two questions on resultants, unit vectors, or the range of a resultant. NEET tests fast conceptual MCQs, scalar versus vector, the resultant range, perpendicularity. JEE Advanced folds vector algebra silently into mechanics and electromagnetism, so fluency here pays off across the whole syllabus.<br><br><b>02 · Vector Products, Dot and Cross</b><br>Vector multiplication resurfaces across mechanics, electromagnetism and modern physics. CBSE Boards ask the definitions, the properties, and a work-done numerical. JEE Main reliably carries a question on the angle between two vectors, a projection, an area, or the determinant form of the cross product. NEET tests quick conceptual MCQs: which quantity is a dot product, which is a cross product, what makes two vectors perpendicular. JEE Advanced exploits the scalar and vector triple products and hides these operations inside torque, angular momentum and Biot-Savart problems.<br><br><b>03 · Two-Dimensional Kinematics</b><br>This is the general framework that projectile and circular motion are special cases of. CBSE Boards ask the vector form of the equations of motion and position or velocity in component form, 2 to 3 marks. JEE Main carries questions on constant-acceleration motion in a plane, velocity and position vectors, and the shape of a trajectory. NEET tests the independence-of-motions idea and quick component-magnitude MCQs. JEE Advanced uses it for radius-of-curvature and closest-direction problems.<br><br><b>04 · Projectile Motion</b><br>One of the single most-tested topics in all of Class 11 mechanics. CBSE Boards reliably ask a derivation, time of flight, range or maximum height, plus a numerical. JEE Main carries one to two questions every year: trajectory, range and height relations, velocity at an instant, or a horizontal projectile launched from a height. NEET loves the conceptual traps, velocity and acceleration at the top, complementary angles. JEE Advanced layers it with inclined planes, radius of curvature and target-hitting constraints.<br><br><b>05 · Relative Velocity in Two Dimensions</b><br>A classic and heavily tested application of vectors. CBSE Boards ask the river-boat crossing, time and drift, and the rain-umbrella problem, 2 to 4 marks. JEE Main reliably carries one question: shortest path across a river, minimum time, or the relative velocity of two moving bodies. NEET tests the rain-man angle and a basic crossing. JEE Advanced layers it with closest-approach problems and currents stronger than the boat's own speed.<br><br><b>06 · Circular Motion Dynamics</b><br>A rich, high-yield topic that also seeds Rotational Motion and Gravitation later. CBSE Boards ask the centripetal-acceleration derivation and the definitions of the angular quantities, 2 to 3 marks. JEE Main reliably carries a question on centripetal force, angular kinematics, or banking. NEET tests the conceptual core hard: the direction of the acceleration, constant speed yet accelerating, the centrifugal-force misconception. JEE Advanced layers it with non-uniform circular motion, vertical circles, and banking with friction."
        },
        {
          "t": "p",
          "html": "Some quantities are fully described by a single number with a unit. The temperature in Jaipur today, the mass of a cricket ball, the time a train journey takes. Say 35 °C and there is nothing left to ask. These are <b>scalars</b>: magnitude only. But other quantities are useless without a direction. If a friend says the metro station is 500 m away, your very next question is <i>which way?</i> A quantity that needs both a magnitude and a direction, and that combines by a special geometric rule, is a <b>vector</b>: displacement, velocity, acceleration, force, momentum."
        },
        {
          "t": "p",
          "html": "That special rule is the whole reason vectors deserve an algebra of their own. Two scalars simply add: 2 kg + 3 kg = 5 kg, always. Two vectors do not add their magnitudes unless they happen to point the same way. Walk 3 km east and then 4 km north and you are not 7 km from home, you are 5 km away along a slanted line. Direction changes the arithmetic. Vectors add head to tail, which is the <b>triangle law</b>, or as the diagonal of a parallelogram, which is the <b>parallelogram law</b>, and that piece of geometry is the real content of this topic."
        },
        {
          "t": "think",
          "html": "picture two people pushing a stalled auto-rickshaw. if both push from behind in the same direction their efforts add fully, a 300 N and a 200 N push give 500 N. if one pushes from behind and the other from the side, the rickshaw lurches off at an angle and the effective combined push is less than 500 N and points somewhere between the two. the cart is quietly computing the parallelogram law for them. every vector sum is just this question: how do two arrows pointing different ways combine into one?"
        },
        {
          "t": "p",
          "html": "The reverse operation matters just as much, and in exams it matters more. <b>Resolution</b> splits a single vector into pieces along chosen directions, almost always the two perpendicular axes. A force pulling a sledge at an angle has one part dragging it forward, the <i>x</i>-component, and one part lifting it, the <i>y</i>-component. Resolving turns an awkward slanted vector into two clean, independent, perpendicular vectors you can handle with ordinary arithmetic, and then recombine at the end. Resolution is the single most powerful problem-solving move in this entire chapter, and every later topic is an application of it."
        },
        {
          "t": "think",
          "html": "you have already built this machine, in trigonometry. on the unit circle the point at angle θ has coordinates (cos θ, sin θ), the across-part and the up-part of a unit arrow. resolving a vector of length <i>A</i> is that same picture scaled by <i>A</i>: <i>A</i> cos θ across, <i>A</i> sin θ up. nothing new is being invented here, the physics is just giving the two coordinates their own names and calling them components."
        },
        {
          "t": "def",
          "term": "Axes, angles and signs for this chapter",
          "html": "Fix these once and hold them everywhere below. <b>The positive <i>x</i>-axis points right, or east; the positive <i>y</i>-axis points up, or north.</b> Every angle is measured <b>anticlockwise from the positive <i>x</i>-axis</b> unless a problem explicitly names another reference, and the angle θ between two vectors always means the angle when they are drawn <b>tail to tail</b>, so 0° ≤ θ ≤ 180°. For vertical motion, <b>up is positive, so the acceleration due to gravity is <i>a<sub>y</sub></i> = −<i>g</i></b>, and that sign is the one thing that decides whether a projectile problem works. A quantity that can point either way carries a sign; a magnitude never does. Different worked examples may choose a different positive direction where it is convenient, because that choice is genuinely free, but no single calculation ever changes it partway through."
        },
        {
          "t": "defgrid",
          "title": "The vocabulary, in one table",
          "rows": [
            { "k": "Scalar", "v": "magnitude only, e.g. mass in kg, time in s, speed in m/s" },
            { "k": "Vector", "v": "magnitude and direction, combining by the parallelogram law, e.g. force in N" },
            { "k": "Unit vector", "v": "<i>Â</i> = <i>A</i>/|<i>A</i>|, magnitude 1 and <b>dimensionless</b>. The axis set is î, ĵ, k̂" },
            { "k": "Null vector", "v": "zero magnitude and undefined direction; the result of <i>A</i> + (−<i>A</i>)" },
            { "k": "Components", "v": "<i>A<sub>x</sub></i>, <i>A<sub>y</sub></i>, <i>A<sub>z</sub></i>, in the same unit as <i>A</i>. They depend on the axes chosen; the vector itself does not" },
            { "k": "Resultant", "v": "the single vector that replaces two or more, unit unchanged" }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · RESOLUTION AND RECOMBINATION",
          "tag": "the move that unlocks every later topic",
          "main": "<i>A<sub>x</sub></i> = <i>A</i> cos θ,  <i>A<sub>y</sub></i> = <i>A</i> sin θ<br><i>A</i> = √(<i>A<sub>x</sub></i><sup>2</sup> + <i>A<sub>y</sub></i><sup>2</sup>),  tan θ = <i>A<sub>y</sub></i>/<i>A<sub>x</sub></i>",
          "legend": [
            "<i>A</i> is the vector's magnitude, in whatever SI unit the quantity carries: N for a force, m/s for a velocity, m for a displacement",
            "<i>A<sub>x</sub></i> and <i>A<sub>y</sub></i> carry that same unit; θ is the angle from the <i>x</i>-axis and is a pure number",
            "in component form a vector is written <i>A</i> = <i>A<sub>x</sub></i> î + <i>A<sub>y</sub></i> ĵ + <i>A<sub>z</sub></i> k̂"
          ],
          "note": "cos goes with the axis the angle is measured FROM. Measure the angle from the y-axis instead and cos and sin swap places, which is the commonest resolution error in the paper."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE PARALLELOGRAM LAW, AND THE BAND IT FORCES",
          "main": "<i>R</i> = √(<i>A</i><sup>2</sup> + <i>B</i><sup>2</sup> + 2<i>AB</i> cos θ)<br>tan α = <i>B</i> sin θ ÷ (<i>A</i> + <i>B</i> cos θ)<br>|<i>A</i> − <i>B</i>| ≤ <i>R</i> ≤ <i>A</i> + <i>B</i>",
          "legend": [
            "<i>A</i>, <i>B</i> are the two magnitudes and <i>R</i> the resultant's magnitude, all three in the same SI unit, because only like quantities have a resultant",
            "θ is the angle between the two vectors drawn tail to tail; α is the angle the resultant makes with <i>A</i>. Both are pure numbers",
            "component form, which scales to any number of vectors: <i>R<sub>x</sub></i> = Σ<i>A<sub>x</sub></i>, <i>R<sub>y</sub></i> = Σ<i>A<sub>y</sub></i>"
          ],
          "note": "read the three special cases straight off the cosine: θ = 0° gives R = A + B, θ = 90° gives the Pythagorean √(A² + B²), θ = 180° gives |A − B|. That is where the band comes from."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE PARALLELOGRAM LAW, TAP A LINE",
          "steps": [
            {
              "eq": "draw <i>A</i> as <i>OP</i> and <i>B</i> as <i>PQ</i> head to tail, so the resultant is <i>R</i> = <i>OQ</i>",
              "why": "The parallelogram law and the triangle law are the same statement. Placing B's tail at A's head makes the diagonal from O the resultant, which is what the law claims."
            },
            {
              "eq": "drop <i>QS</i> perpendicular to <i>OP</i> extended, meeting it at <i>S</i>",
              "why": "This is the one construction the whole proof needs. It manufactures a right triangle, and Pythagoras only speaks to right triangles."
            },
            {
              "eq": "in right triangle <i>PQS</i>: <i>PS</i> = <i>B</i> cos θ and <i>QS</i> = <i>B</i> sin θ",
              "why": "Resolving B along and across A, exactly the move of the last formula card. The along-part lengthens the base; the across-part becomes the height."
            },
            {
              "eq": "<i>OS</i> = <i>OP</i> + <i>PS</i> = <i>A</i> + <i>B</i> cos θ, so <i>R</i><sup>2</sup> = <i>OS</i><sup>2</sup> + <i>QS</i><sup>2</sup> = (<i>A</i> + <i>B</i> cos θ)<sup>2</sup> + (<i>B</i> sin θ)<sup>2</sup>",
              "why": "Pythagoras on triangle OQS. Every term on the right is now a length you can write down from the figure alone."
            },
            {
              "eq": "expand: <i>R</i><sup>2</sup> = <i>A</i><sup>2</sup> + 2<i>AB</i> cos θ + <i>B</i><sup>2</sup>cos<sup>2</sup>θ + <i>B</i><sup>2</sup>sin<sup>2</sup>θ = <i>A</i><sup>2</sup> + <i>B</i><sup>2</sup> + 2<i>AB</i> cos θ",
              "why": "The last two terms collapse because sin²θ + cos²θ = 1, the Pythagorean identity from trigonometry. That single identity is what turns a messy expansion into the clean law. For the direction, tan α = QS/OS = B sin θ/(A + B cos θ), read straight off the same right triangle."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 3.1 · THE PARALLELOGRAM CONSTRUCTION",
          "chips": ["the whole proof in one picture"],
          "captions": [
            "A runs from O to P. B runs from P to Q at angle θ. The resultant R is the diagonal OQ. Dropping QS perpendicular to OP extended splits B into B cos θ, which lengthens the base to A + B cos θ, and B sin θ, which becomes the height. Pythagoras on triangle OQS then gives R² = A² + B² + 2AB cos θ."
          ],
          "frames": [
            {
              "x": [0, 10], "y": [0, 7], "axes": "none",
              "points": [
                { "x": 1, "y": 1, "label": "O", "at": "sw" },
                { "x": 5.5, "y": 1, "label": "P", "at": "sw" },
                { "x": 7, "y": 3.598, "label": "Q" },
                { "x": 7, "y": 1, "label": "S", "at": "se" }
              ],
              "arrows": [
                { "from": [1, 1], "to": [5.5, 1], "tone": "ink", "label": "A", "at": "below" },
                { "from": [5.5, 1], "to": [7, 3.598], "tone": "ink", "label": "B" },
                { "from": [1, 1], "to": [7, 3.598], "tone": "amber", "label": "R" }
              ],
              "segments": [
                { "from": [5.5, 1], "to": [7, 1], "dash": true, "soft": true },
                { "from": [7, 3.598], "to": [7, 1], "dash": true, "soft": true }
              ],
              "arcs": [
                { "at": [5.5, 1], "r": 0.8, "from": 0, "to": 60, "label": "θ" },
                { "at": [1, 1], "r": 1.4, "from": 0, "to": 23.4, "label": "α", "tone": "soft" }
              ],
              "labels": [
                { "x": 7.5, "y": 2.3, "text": "B sin θ", "soft": true },
                { "x": 6.25, "y": 0.55, "text": "B cos θ", "soft": true }
              ]
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · RESOLUTION, AND THE BAND A RESULTANT LIVES IN",
          "chips": ["resolving one vector", "θ = 0°", "θ = 90°", "θ = 180°"],
          "captions": [
            "One slanted vector becomes two perpendicular ones, A cos θ across and A sin θ up, laid head to tail. Nothing is lost: √((A cos θ)² + (A sin θ)²) returns A.",
            "Aligned. The two arrows point the same way, so their magnitudes simply add: 4 + 3 = 7, and this is the largest a resultant of 4 and 3 can ever be.",
            "Perpendicular. The parallelogram law collapses to Pythagoras, √(4² + 3²) = 5, the case students compute first and then wrongly assume is the only one.",
            "Opposed. The two arrows fight, and only the difference survives: 4 − 3 = 1, the smallest a resultant of 4 and 3 can ever be. Any claimed resultant outside 1 to 7 is impossible."
          ],
          "frames": [
            {
              "x": [-1, 6], "y": [-1, 4.5], "axes": "cross",
              "axisX": "x", "axisY": "y",
              "arrows": [
                { "from": [0, 0], "to": [4, 2.8], "tone": "ink", "label": "A" },
                { "from": [0, 0], "to": [4, 0], "tone": "amber", "label": "A cos θ", "at": "below" },
                { "from": [4, 0], "to": [4, 2.8], "tone": "amber", "label": "A sin θ", "at": "mid" }
              ],
              "arcs": [{ "at": [0, 0], "r": 1, "from": 0, "to": 28, "label": "θ" }]
            },
            {
              "x": [0, 10], "y": [0, 5], "axes": "none", "aspect": 0.6,
              "arrows": [
                { "from": [1.5, 3], "to": [5.5, 3], "tone": "ink", "label": "A" },
                { "from": [5.5, 3], "to": [8.5, 3], "tone": "ink", "label": "B" },
                { "from": [1.5, 1.2], "to": [8.5, 1.2], "tone": "amber", "label": "R = 7", "at": "below" }
              ]
            },
            {
              "x": [0, 10], "y": [0, 5], "axes": "none", "aspect": 0.6,
              "arrows": [
                { "from": [1.5, 1], "to": [5.5, 1], "tone": "ink", "label": "A", "at": "below" },
                { "from": [5.5, 1], "to": [5.5, 4], "tone": "ink", "label": "B", "at": "mid" },
                { "from": [1.5, 1], "to": [5.5, 4], "tone": "amber", "label": "R = 5" }
              ],
              "arcs": [{ "at": [5.5, 1], "r": 0.5, "from": 0, "to": 90, "right": true }]
            },
            {
              "x": [0, 10], "y": [0, 5], "axes": "none", "aspect": 0.6,
              "arrows": [
                { "from": [1.5, 2.6], "to": [5.5, 2.6], "tone": "ink", "label": "A" },
                { "from": [5.5, 1.4], "to": [2.5, 1.4], "tone": "ink", "label": "B", "at": "below" },
                { "from": [1.5, 0.4], "to": [2.5, 0.4], "tone": "amber", "label": "R = 1", "at": "below" }
              ]
            }
          ]
        },
        {
          "t": "proc",
          "title": "Adding vectors by components, which never fails",
          "steps": [
            "<b>Draw the axes and commit to them.</b> Positive <i>x</i> right or east, positive <i>y</i> up or north, and note for every given angle which axis it is measured from.",
            "<b>Resolve every vector.</b> For an angle taken from the <i>x</i>-axis, the <i>x</i>-part is <i>A</i> cos θ and the <i>y</i>-part is <i>A</i> sin θ. Carry the signs: a vector pointing down or west has a negative component.",
            "<b>Add the columns separately.</b> <i>R<sub>x</sub></i> is the sum of all <i>x</i>-components, <i>R<sub>y</sub></i> the sum of all <i>y</i>-components. The two columns never talk to each other.",
            "<b>Recombine.</b> <i>R</i> = √(<i>R<sub>x</sub></i><sup>2</sup> + <i>R<sub>y</sub></i><sup>2</sup>) and tan α = <i>R<sub>y</sub></i>/<i>R<sub>x</sub></i>. Then read the quadrant off the two signs, because a calculator's inverse tangent cannot tell +/+ from −/−.",
            "<b>Check twice.</b> The answer must satisfy |<i>A</i> − <i>B</i>| ≤ <i>R</i> ≤ <i>A</i> + <i>B</i> for two vectors, and re-squaring the components must return each original magnitude."
          ]
        },
        {
          "t": "proc",
          "title": "Two vectors only: the parallelogram shortcut",
          "steps": [
            "<b>Find the angle between them tail to tail.</b> This is the step people get wrong: 6 m east then 8 m at 60° north of east means the turn is 60°, so θ = 60°, not 30° and not 120°.",
            "<b>Substitute into <i>R</i> = √(<i>A</i><sup>2</sup> + <i>B</i><sup>2</sup> + 2<i>AB</i> cos θ)</b> and take the positive root, since a magnitude is never negative.",
            "<b>Get the direction from tan α = <i>B</i> sin θ/(<i>A</i> + <i>B</i> cos θ)</b>, and say clearly which vector α is measured from, because α is not symmetric between A and B.",
            "<b>Use this only for exactly two vectors.</b> With three or more it is quicker and safer to resolve into components and add columns."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A child pulls a toy cart with a string, applying a force of 20 N directed at 60° above the horizontal. Find the horizontal and vertical components of this force.",
          "steps": [
            "The angle is measured from the horizontal, which is the <i>x</i>-axis, so the horizontal part takes cos and the vertical part takes sin.",
            "<i>F<sub>x</sub></i> = <i>F</i> cos θ = 20 cos 60° = 20 × 0.5 = 10 N.",
            "<i>F<sub>y</sub></i> = <i>F</i> sin θ = 20 sin 60° = 20 × (√3/2) = 10√3 ≈ 17.3 N.",
            "The horizontal part drags the cart forward; the vertical part tends to lift it. Check: √(10<sup>2</sup> + (10√3)<sup>2</sup>) = √(100 + 300) = √400 = 20 N, the original force recovered."
          ],
          "ans": "F<sub>x</sub> = 10 N horizontal · F<sub>y</sub> ≈ 17.3 N vertical"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "Two forces of magnitudes 3 N and 4 N act at a point. Which of these can <i>not</i> be the magnitude of their resultant: 1 N, 5 N, 7 N, or 8 N?",
          "steps": [
            "The instinct is to compute one specific case, usually the perpendicular one, √(3<sup>2</sup> + 4<sup>2</sup>) = 5 N, and stop there. That answers a question nobody asked.",
            "The resultant of two vectors always lies in the band |<i>A</i> − <i>B</i>| ≤ <i>R</i> ≤ <i>A</i> + <i>B</i>, so here 1 N ≤ <i>R</i> ≤ 7 N.",
            "1 N is the antiparallel end, 5 N is the perpendicular case, 7 N is the parallel end. 8 N exceeds the maximum and is impossible.",
            "Speed cue: for any possible-or-impossible resultant question, write the band [|<i>A</i> − <i>B</i>|, <i>A</i> + <i>B</i>] first and test against it. Almost no real calculation is needed."
          ],
          "ans": "8 N"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "A person walks 6 m due east, then 8 m in a direction 60° north of east. Find the magnitude and direction of the net displacement, by components and then by the parallelogram law as an independent check.",
          "steps": [
            "Take east as +<i>x</i> and north as +<i>y</i>. First leg: <i>A</i> = (6, 0) m. Second leg: <i>B</i> = (8 cos 60°, 8 sin 60°) = (4, 4√3) m, and 4√3 ≈ 6.93 m.",
            "Add the columns: <i>R</i> = (6 + 4, 0 + 6.93) = (10, 6.93) m. Then <i>R</i> = √(100 + 48) = √148 ≈ 12.2 m.",
            "Direction: tan α = 6.93/10 = 0.693, so α ≈ 34.7° north of east. Both components are positive, so the answer really is in the first quadrant.",
            "Parallelogram check, the angle between the two legs being 60°: <i>R</i> = √(6<sup>2</sup> + 8<sup>2</sup> + 2(6)(8) cos 60°) = √(36 + 64 + 48) = √148 ≈ 12.2 m. The two routes agree, and the band 2 m ≤ R ≤ 14 m holds."
          ],
          "ans": "R ≈ 12.2 m at ≈ 34.7° north of east"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "The resultant of two vectors <i>P</i> and <i>Q</i> is perpendicular to <i>P</i>, and its magnitude is half the magnitude of <i>Q</i>. Find the angle between <i>P</i> and <i>Q</i>.",
          "steps": [
            "Put <i>P</i> along the <i>x</i>-axis, so <i>P</i> = (<i>P</i>, 0) and <i>Q</i> = (<i>Q</i> cos θ, <i>Q</i> sin θ) with θ the angle between them. Then <i>R</i> = <i>P</i> + <i>Q</i> = (<i>P</i> + <i>Q</i> cos θ, <i>Q</i> sin θ).",
            "R is perpendicular to P, so R has no <i>x</i>-component at all: <i>P</i> + <i>Q</i> cos θ = 0, giving cos θ = −<i>P</i>/<i>Q</i>. Since P and Q are positive magnitudes, cos θ is negative, so θ is obtuse.",
            "The magnitude condition is |<i>Q</i> sin θ| = <i>Q</i>/2, so sin θ = 1/2 with θ between 0° and 180°. That allows θ = 30° or θ = 150°.",
            "Only θ = 150° is obtuse, so it is the answer, and then <i>P</i> = −<i>Q</i> cos 150° = <i>Q</i>√3/2. Check: <i>R</i> = <i>Q</i> sin 150° = <i>Q</i>/2 as required, and the resultant magnitude Q/2 does sit inside the band |P − Q| to P + Q."
          ],
          "ans": "θ = 150°"
        },
        {
          "t": "mcq",
          "q": "Which of the following is a vector quantity?",
          "opts": [
            { "label": "work", "nudge": "Work is itself a dot product of two vectors, and a dot product returns a scalar. It has no direction." },
            { "label": "speed", "nudge": "Speed is the magnitude of velocity, and the direction is exactly the thing speed throws away." },
            { "label": "displacement", "nudge": null },
            { "label": "energy", "nudge": "Energy is a scalar. The trap here is treating any physics-sounding quantity as a vector by default." }
          ],
          "correct": 2,
          "solution": "Displacement carries both a magnitude and a direction and obeys the parallelogram law, which is the real test. Work and energy are scalars, and speed is a magnitude with the direction deliberately discarded."
        },
        {
          "t": "mcq",
          "q": "Two vectors have equal magnitudes <i>A</i>, and their resultant also has magnitude <i>A</i>. The angle between them is:",
          "opts": [
            { "label": "60°", "nudge": "At 60° the resultant is A√3, larger than either vector, not equal to it." },
            { "label": "90°", "nudge": "At 90° the resultant is A√2, the Pythagorean case, still bigger than A." },
            { "label": "120°", "nudge": null },
            { "label": "180°", "nudge": "At 180° two equal vectors cancel completely and the resultant is zero, not A." }
          ],
          "correct": 2,
          "solution": "R² = A² + A² + 2A² cos θ = A² gives 2 + 2 cos θ = 1, so cos θ = −1/2 and θ = 120°. Worth remembering, because the same three vectors at 120° to one another are exactly the equilibrium configuration."
        },
        {
          "t": "mcq",
          "q": "A vector of magnitude <i>A</i> makes an angle θ with the <b><i>y</i>-axis</b>. Its <i>x</i>-component is:",
          "opts": [
            { "label": "<i>A</i> cos θ", "nudge": "This is the answer for an angle measured from the x-axis. Reaching for cos on autopilot is the single commonest resolution slip." },
            { "label": "<i>A</i> sin θ", "nudge": null },
            { "label": "<i>A</i>", "nudge": "That would need the vector to lie entirely along x, which happens only at θ = 90° from the y-axis." },
            { "label": "zero", "nudge": "That would need the vector to lie entirely along y, which happens only at θ = 0°." }
          ],
          "correct": 1,
          "solution": "Cosine always belongs to the axis the angle is measured FROM. With θ measured from y, the y-component is A cos θ and the x-component is A sin θ. Always note the reference axis before writing a single component."
        },
        {
          "t": "mcq",
          "q": "For two non-zero vectors, |<i>A</i> + <i>B</i>| = <i>A</i> + <i>B</i> holds:",
          "opts": [
            { "label": "always", "nudge": "This is the scalar habit. It holds for two arrows pointing the same way and for nothing else." },
            { "label": "only when they are parallel", "nudge": null },
            { "label": "only when they are perpendicular", "nudge": "Perpendicular vectors give √(A² + B²), which is strictly less than A + B whenever both are non-zero." },
            { "label": "only when they are antiparallel", "nudge": "Antiparallel gives |A − B|, the minimum of the band, the opposite extreme from the maximum asked about here." }
          ],
          "correct": 1,
          "solution": "The upper end of the band |A − B| ≤ R ≤ A + B is reached only at θ = 0°, where cos θ = 1. Everywhere else the geometry costs you something."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] A velocity of 100 m/s is directed 30° above the horizontal. Find its horizontal and vertical components.", "a": "<i>v<sub>x</sub></i> = 100 cos 30° = 50√3 ≈ 86.6 m/s. <i>v<sub>y</sub></i> = 100 sin 30° = 50 m/s." },
            { "q": "[NEET] Two forces of 5 N and 12 N act at a point. Find the maximum and minimum possible magnitudes of their resultant.", "a": "Maximum at 0°: 5 + 12 = 17 N. Minimum at 180°: |12 − 5| = 7 N. Any resultant must lie in 7 N to 17 N." },
            { "q": "[JEE Main] For <i>A</i> = 3î + 4ĵ, find |<i>A</i>| and the unit vector along <i>A</i>.", "a": "|<i>A</i>| = √(9 + 16) = 5. <i>Â</i> = (3î + 4ĵ)/5 = 0.6î + 0.8ĵ, and 0.6<sup>2</sup> + 0.8<sup>2</sup> = 1 confirms it." },
            { "q": "[JEE Main] Find the angle that <i>A</i> = î + ĵ + k̂ makes with the <i>x</i>-axis.", "a": "The direction cosine along x is <i>A<sub>x</sub></i>/|<i>A</i>| = 1/√3, so cos θ = 1/√3 ≈ 0.577 and θ ≈ 54.7°. By symmetry it makes the same angle with y and z." },
            { "q": "[JEE Advanced] Two vectors of magnitudes 10 and 6 units act at 60° to each other. Find the resultant's magnitude and the angle it makes with the larger vector.", "a": "<i>R</i> = √(100 + 36 + 2(10)(6)(0.5)) = √196 = 14 units. tan α = 6 sin 60°/(10 + 6 cos 60°) = 5.196/13 = 0.400, so α ≈ 21.8° from the 10-unit vector. Note 14 sits inside the band 4 to 16." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Adding magnitudes arithmetically.</b> |<i>A</i> + <i>B</i>| is not <i>A</i> + <i>B</i> unless the two vectors are parallel. For everything else, components or the parallelogram law, with no exceptions.",
            "<b>Swapping sin and cos in resolution.</b> When θ is measured from the <i>x</i>-axis the <i>x</i>-component uses cos; measure it from the <i>y</i>-axis instead and the two swap. Write down which axis before writing the component.",
            "<b>Using the wrong angle in the parallelogram law.</b> θ is the angle between the two vectors drawn <b>tail to tail</b>. Drawn head to tail, the angle in the triangle is 180° − θ, and using it flips the sign of the cross term.",
            "<b>Giving a unit vector units.</b> A unit vector is pure direction, magnitude 1, dimensionless. Writing 0.6î + 0.8ĵ m/s is a category error.",
            "<b>Forgetting the quadrant when inverting a tangent.</b> tan α = <i>R<sub>y</sub></i>/<i>R<sub>x</sub></i> gives the same value for (+, +) and (−, −). Read the two signs and place the answer in the right quadrant by hand."
          ]
        },
        {
          "t": "protip",
          "html": "when in doubt, resolve into components. it turns every messy geometry problem into clean axis-by-axis arithmetic and it scales effortlessly to three or more vectors, where the parallelogram law gets clumsy. keep two instant sanity checks in your pocket: the resultant must satisfy |A − B| ≤ R ≤ A + B, and after resolving, √(A<sub>x</sub>² + A<sub>y</sub>²) must hand back the original magnitude. and for the possible-resultant MCQ, write the band first and test the options against it, never compute a single case and guess."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "A<sub>x</sub> = A cos θ · A<sub>y</sub> = A sin θ", "note": "cos belongs to the axis the angle is measured from" },
            { "f": "A = √(A<sub>x</sub><sup>2</sup> + A<sub>y</sub><sup>2</sup>) · tan θ = A<sub>y</sub>/A<sub>x</sub>", "note": "recombination, and the check that resolution lost nothing" },
            { "f": "R = √(A<sup>2</sup> + B<sup>2</sup> + 2AB cos θ)", "note": "tan α = B sin θ/(A + B cos θ) gives the direction" },
            { "f": "|A − B| ≤ R ≤ A + B", "note": "0° gives the max, 90° gives Pythagoras, 180° gives the min" },
            { "f": "unit vector Â = A/|A|, dimensionless", "note": "axis set î, ĵ, k̂; a null vector has zero magnitude, no direction" }
          ],
          "aids": [
            "\"resolve first, add columns second, recombine last\"",
            "\"cos for the axis you measured from, sin for the other one\""
          ]
        }
      ]
    },
    {
      "n": "02",
      "title": "The Two Products: Dot and Cross",
      "chip": "02 PRODUCTS",
      "kalam": "dot agrees with cos, cross turns with sin",
      "blocks": [
        {
          "t": "p",
          "html": "You can already add vectors. Multiplication is where they get genuinely interesting, because there are <b>two completely different ways</b> to multiply them and each answers a different physical question. The first asks: how much do these two agree, how much of one points <i>along</i> the other? That is the <b>dot product</b>, also called the scalar product. It is largest when the vectors are parallel, shrinks as they turn apart, and is exactly zero when they are perpendicular. Its answer is a plain number, a scalar, because how much do they agree is a quantity with no direction of its own."
        },
        {
          "t": "p",
          "html": "The physical archetype of the dot product is <b>work</b>. Only the part of a force that lies along the displacement does any work. Push a loaded thela horizontally and the horizontal effort moves it; the vertical part of your push does nothing useful at all. Work is force dotted with displacement, <i>W</i> = <i>F</i> · <i>d</i>, and the cosine in the definition is doing exactly the job of picking out the along-part."
        },
        {
          "t": "p",
          "html": "The second product asks the opposite question: how much do these two <i>disagree</i>, how much does one point <b>across</b> the other? That is the <b>cross product</b>, the vector product. It is zero when the vectors are parallel and largest when they are perpendicular, a mirror image of the dot product. And its answer is itself a vector, pointing perpendicular to both originals. The archetype is <b>torque</b>: a force applied along a spanner handle does nothing, a force applied across it, at right angles, turns the bolt most effectively. The turning lives in a direction perpendicular to both the lever arm and the force, which is exactly where the cross product points."
        },
        {
          "t": "think",
          "html": "two cricketers pulling a heavy roller with ropes. the dot product is about cooperation along the motion, how much of each pull actually drags the roller forward, full when aligned and nothing when sideways, which is cos θ. the cross product is about twisting, strongest when the pulls are at right angles and nothing when aligned, which is sin θ. one measures togetherness, the other measures crossness. that single contrast, cos against sin and scalar against vector, is the whole sub-topic."
        },
        {
          "t": "defgrid",
          "title": "The two products, side by side",
          "rows": [
            { "k": "Dot, <i>A</i> · <i>B</i>", "v": "<i>AB</i> cos θ. Returns a <b>scalar</b>. Commutative: <i>A</i> · <i>B</i> = <i>B</i> · <i>A</i>" },
            { "k": "Cross, <i>A</i> × <i>B</i>", "v": "(<i>AB</i> sin θ) <i>n̂</i>. Returns a <b>vector</b>. Anticommutative: <i>A</i> × <i>B</i> = −<i>B</i> × <i>A</i>" },
            { "k": "Zero when", "v": "dot is zero for <b>perpendicular</b> vectors; cross is zero for <b>parallel or antiparallel</b> ones. Opposite conditions, easily swapped" },
            { "k": "Maximum when", "v": "dot at θ = 0°, cross at θ = 90°. As one peaks the other vanishes, like a seesaw" },
            { "k": "Unit vectors", "v": "î · î = 1 and î · ĵ = 0; î × ĵ = k̂, ĵ × k̂ = î, k̂ × î = ĵ, and î × î = 0" },
            { "k": "Geometry", "v": "|<i>A</i> × <i>B</i>| is the area of the parallelogram spanned by the two; half of it is the triangle" }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE DOT PRODUCT",
          "main": "<i>A</i> · <i>B</i> = <i>AB</i> cos θ = <i>A<sub>x</sub>B<sub>x</sub></i> + <i>A<sub>y</sub>B<sub>y</sub></i> + <i>A<sub>z</sub>B<sub>z</sub></i><br>cos θ = (<i>A</i> · <i>B</i>) ÷ <i>AB</i><br>projection of <i>A</i> on <i>B</i> = (<i>A</i> · <i>B</i>) ÷ <i>B</i>",
          "legend": [
            "<i>A</i>, <i>B</i> are the two magnitudes, each in its own SI unit; the product carries the product of those units, so <i>F</i> · <i>d</i> comes out in N m, which is the joule",
            "θ is the tail-to-tail angle, a pure number, and the projection carries <i>A</i>'s unit alone",
            "applications: work <i>W</i> = <i>F</i> · <i>d</i> in J, power <i>P</i> = <i>F</i> · <i>v</i> in W, flux Φ = <i>E</i> · <i>A</i>"
          ],
          "note": "the SIGN of a dot product is a free piece of information: positive means the angle is acute, negative means obtuse, zero means exactly perpendicular."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE CROSS PRODUCT",
          "main": "|<i>A</i> × <i>B</i>| = <i>AB</i> sin θ<br><i>A</i> × <i>B</i> = (<i>A<sub>y</sub>B<sub>z</sub></i> − <i>A<sub>z</sub>B<sub>y</sub></i>)î + (<i>A<sub>z</sub>B<sub>x</sub></i> − <i>A<sub>x</sub>B<sub>z</sub></i>)ĵ + (<i>A<sub>x</sub>B<sub>y</sub></i> − <i>A<sub>y</sub>B<sub>x</sub></i>)k̂",
          "legend": [
            "<i>A</i>, <i>B</i> are the magnitudes in their own SI units; the result carries the product of those units, so <i>r</i> × <i>F</i> comes out in N m",
            "θ is the tail-to-tail angle; the direction is <i>n̂</i>, the unit normal to the plane of the two vectors, fixed by the right-hand rule",
            "applications: torque <i>τ</i> = <i>r</i> × <i>F</i> in N m, angular momentum <i>L</i> = <i>r</i> × <i>p</i> in kg m<sup>2</sup>/s, magnetic force <i>F</i> = <i>qv</i> × <i>B</i> in N"
          ],
          "note": "the component form is the expansion of a 3 by 3 determinant with î, ĵ, k̂ on the top row and the two vectors' components beneath. The middle term carries a minus sign, and dropping it is the classic slip."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHERE THE COMPONENT FORMULAS COME FROM, TAP A LINE",
          "steps": [
            {
              "eq": "write <i>A</i> = <i>A<sub>x</sub></i>î + <i>A<sub>y</sub></i>ĵ + <i>A<sub>z</sub></i>k̂ and the same for <i>B</i>, then distribute",
              "why": "Both products are distributive over addition, so multiplying the two brackets out is legal and produces nine terms in each case. Everything after this is bookkeeping on those nine terms."
            },
            {
              "eq": "for the dot: î · î = ĵ · ĵ = k̂ · k̂ = 1 and î · ĵ = ĵ · k̂ = k̂ · î = 0",
              "why": "A unit vector agrees perfectly with itself, cos 0° = 1, and not at all with a perpendicular one, cos 90° = 0. So six of the nine terms die on the spot."
            },
            {
              "eq": "<i>A</i> · <i>B</i> = <i>A<sub>x</sub>B<sub>x</sub></i> + <i>A<sub>y</sub>B<sub>y</sub></i> + <i>A<sub>z</sub>B<sub>z</sub></i>",
              "why": "Only the three like terms survive. Perpendicular directions contribute nothing to agreement, so only matching components multiply through."
            },
            {
              "eq": "for the cross: î × î = 0 and the cyclic rules î × ĵ = k̂, ĵ × k̂ = î, k̂ × î = ĵ, with a sign flip when reversed",
              "why": "A vector has no component across itself, so the three self-products vanish. The remaining six carry the alternating signs, which is why the pattern comes out as a determinant."
            },
            {
              "eq": "<i>A</i> × <i>B</i> = (<i>A<sub>y</sub>B<sub>z</sub></i> − <i>A<sub>z</sub>B<sub>y</sub></i>)î + (<i>A<sub>z</sub>B<sub>x</sub></i> − <i>A<sub>x</sub>B<sub>z</sub></i>)ĵ + (<i>A<sub>x</sub>B<sub>y</sub></i> − <i>A<sub>y</sub>B<sub>x</sub></i>)k̂",
              "why": "Collecting the six surviving terms by direction. Each bracket is a 2 by 2 determinant of the components in the other two axes, which is exactly the cofactor expansion of the 3 by 3 array."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 3.2 · ALONG VERSUS ACROSS",
          "chips": ["dot: how much along", "cross: how much across"],
          "captions": [
            "Drop a perpendicular from the tip of B onto the line of A. The piece it lands on is B cos θ, the projection of B on A. The dot product is the length of A times that projection, a single number with no direction left in it.",
            "Now build the parallelogram on A and B instead. Its area is AB sin θ, which is exactly the magnitude of the cross product, and the result points straight out of the page, perpendicular to both. Curl the right hand's fingers from A to B and the thumb gives that direction."
          ],
          "frames": [
            {
              "x": [-0.5, 6], "y": [-0.8, 4], "axes": "none", "aspect": 0.66,
              "arrows": [
                { "from": [0, 0], "to": [5, 0], "tone": "ink", "label": "A", "at": "below" },
                { "from": [0, 0], "to": [2.6, 2.4], "tone": "ink", "label": "B" },
                { "from": [0, -0.35], "to": [2.6, -0.35], "head": "both", "tone": "amber", "label": "B cos θ", "at": "below" }
              ],
              "segments": [{ "from": [2.6, 2.4], "to": [2.6, 0], "dash": true, "soft": true }],
              "arcs": [{ "at": [0, 0], "r": 0.9, "from": 0, "to": 39, "label": "θ" }]
            },
            {
              "x": [-0.5, 6], "y": [-0.8, 4], "axes": "none", "aspect": 0.66,
              "arrows": [
                { "from": [0, 0], "to": [4, 0], "tone": "ink", "label": "A", "at": "below" },
                { "from": [0, 0], "to": [1.6, 2.4], "tone": "ink", "label": "B" }
              ],
              "polys": [
                { "pts": [[0, 0], [4, 0], [5.6, 2.4], [1.6, 2.4]], "close": true, "fill": "wash", "tone": "amber", "label": "area" }
              ],
              "marks": [{ "x": 4.6, "y": 1, "glyph": "outof", "label": "A × B" }],
              "arcs": [{ "at": [0, 0], "r": 0.9, "from": 0, "to": 53, "label": "θ" }]
            }
          ]
        },
        {
          "t": "proc",
          "title": "Choosing the right product, from the physics not the algebra",
          "steps": [
            "<b>Ask what the quantity means.</b> How much <i>along</i>, how much of one goes with the other, gives a dot product and a cos. How much <i>across</i>, how much turning or area, gives a cross product and a sin.",
            "<b>Check the rank of the answer you want.</b> A number, work, power, flux, a projection, means dot. A direction, torque, angular momentum, magnetic force, means cross.",
            "<b>Then compute in components, not with angles.</b> The dot is three products added; the cross is the determinant with î, ĵ, k̂ on top. Angles are for interpreting, not for calculating.",
            "<b>Reverse-engineer the angle only at the end,</b> from cos θ = (<i>A</i> · <i>B</i>)/<i>AB</i>, and use the sign of the dot to say straight away whether it is acute or obtuse."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A constant force <i>F</i> = (3î + 4ĵ) N acts on a body that undergoes a displacement <i>d</i> = (2î + 3ĵ) m. Find the work done.",
          "steps": [
            "Work is a dot product, <i>W</i> = <i>F</i> · <i>d</i>, because only the part of the force along the displacement does work.",
            "In components: <i>W</i> = (3)(2) + (4)(3) = 6 + 12 = 18 J.",
            "Notice you never needed the angle. The dot product automatically picks out the along-part, and the answer is a scalar in joules, which is what work must be."
          ],
          "ans": "W = 18 J"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "A force of 5 N is applied at the end of a spanner of length 0.2 m, at 30° to the handle. The magnitude of the torque about the bolt is: 0.5 N m, 0.87 N m, 1.0 N m, or 0 N m?",
          "steps": [
            "Under time pressure the hand reaches for cos, the work habit, and produces (0.2)(5) cos 30° = 0.87 N m. That is the trap option, and it is the wrong product entirely.",
            "Torque is a cross product, so it uses sin: τ = <i>rF</i> sin θ = (0.2)(5) sin 30° = (0.2)(5)(0.5) = 0.5 N m.",
            "Speed cue: turning effects, torque, area, angular momentum, magnetic force, are cross products and take sin. Along effects, work, power, flux, are dot products and take cos. Sort the quantity first, then reach for the trig."
          ],
          "ans": "0.5 N m"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "For <i>A</i> = 2î + 2ĵ + k̂ and <i>B</i> = 6î − 3ĵ + 2k̂, find the angle between them, the projection of <i>A</i> on <i>B</i>, and the magnitude of the component of <i>A</i> perpendicular to <i>B</i>.",
          "steps": [
            "<i>A</i> · <i>B</i> = (2)(6) + (2)(−3) + (1)(2) = 12 − 6 + 2 = 8. Magnitudes: |<i>A</i>| = √(4 + 4 + 1) = 3 and |<i>B</i>| = √(36 + 9 + 4) = 7.",
            "cos θ = 8/(3)(7) = 8/21 ≈ 0.381, so θ ≈ 67.6°. The dot product is positive, so an acute angle was expected.",
            "Projection of <i>A</i> on <i>B</i> = (<i>A</i> · <i>B</i>)/|<i>B</i>| = 8/7 ≈ 1.14 units. This is <i>A</i> cos θ, the along-part.",
            "The across-part is <i>A</i> sin θ = |<i>A</i> × <i>B</i>|/|<i>B</i>|. Here <i>A</i> × <i>B</i> = î(4 + 3) − ĵ(4 − 6) + k̂(−6 − 12) = 7î + 2ĵ − 18k̂, with magnitude √(49 + 4 + 324) = √377 ≈ 19.4, so <i>A</i> sin θ ≈ 19.4/7 ≈ 2.77 units.",
            "Cross-check: √(1.14<sup>2</sup> + 2.77<sup>2</sup>) = √(1.30 + 7.67) = √8.97 ≈ 3.0 = |<i>A</i>|. The along and across parts reassemble the original magnitude, exactly as resolution demands."
          ],
          "ans": "θ ≈ 67.6° · projection ≈ 1.14 units · perpendicular component ≈ 2.77 units"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "Given <i>A</i> = î + 2ĵ − k̂, <i>B</i> = 2î − ĵ + k̂ and <i>C</i> = 3î + ĵ + 2k̂, find the scalar triple product <i>A</i> · (<i>B</i> × <i>C</i>), state the volume of the parallelepiped and whether the three are coplanar, and find <i>A</i> × (<i>B</i> × <i>C</i>) by the BAC minus CAB rule.",
          "steps": [
            "The scalar triple product is the determinant of the nine components, rows <i>A</i>, <i>B</i>, <i>C</i>. Expanding along the first row: 1[(−1)(2) − (1)(1)] − 2[(2)(2) − (1)(3)] + (−1)[(2)(1) − (−1)(3)].",
            "= 1(−2 − 1) − 2(4 − 3) − 1(2 + 3) = −3 − 2 − 5 = −10. The volume of the parallelepiped is |−10| = 10 cubic units, and since it is non-zero the three vectors are <b>not</b> coplanar.",
            "For the vector triple product use <i>A</i> × (<i>B</i> × <i>C</i>) = <i>B</i>(<i>A</i> · <i>C</i>) − <i>C</i>(<i>A</i> · <i>B</i>). First the two dots: <i>A</i> · <i>C</i> = 3 + 2 − 2 = 3 and <i>A</i> · <i>B</i> = 2 − 2 − 1 = −1.",
            "So <i>A</i> × (<i>B</i> × <i>C</i>) = 3<i>B</i> − (−1)<i>C</i> = 3<i>B</i> + <i>C</i> = (6î − 3ĵ + 3k̂) + (3î + ĵ + 2k̂) = 9î − 2ĵ + 5k̂.",
            "The BAC minus CAB rule sidestepped computing <i>B</i> × <i>C</i> at all. Recognising that the triple product must collapse into a combination of <i>B</i> and <i>C</i>, because it lies in their plane, is the time-saving insight."
          ],
          "ans": "A · (B × C) = −10, volume 10 cubic units, not coplanar · A × (B × C) = 9î − 2ĵ + 5k̂"
        },
        {
          "t": "mcq",
          "q": "The scalar product of two non-zero vectors is zero. The vectors must be:",
          "opts": [
            { "label": "parallel", "nudge": "Parallel gives cos 0° = 1, the maximum dot product, the opposite of zero." },
            { "label": "antiparallel", "nudge": "Antiparallel gives cos 180° = −1, the most negative dot product, again not zero." },
            { "label": "perpendicular", "nudge": null },
            { "label": "identical", "nudge": "Identical vectors give A · A = A², which is zero only if the vector itself is zero, and the question says both are non-zero." }
          ],
          "correct": 2,
          "solution": "AB cos θ = 0 with A and B non-zero forces cos θ = 0, so θ = 90°. Only perpendicularity kills a dot product, and it is exactly the condition that makes a cross product maximum."
        },
        {
          "t": "mcq",
          "q": "Which of the following physical quantities is defined as a cross product?",
          "opts": [
            { "label": "work", "nudge": "Work is F · d, a dot product, and its answer is a scalar in joules." },
            { "label": "torque", "nudge": null },
            { "label": "power", "nudge": "Power is F · v, another dot product; the along-part of the force is what delivers energy." },
            { "label": "kinetic energy", "nudge": "Kinetic energy is a scalar not formed from any vector product at all." }
          ],
          "correct": 1,
          "solution": "Torque is r × F, a vector product. The giveaway is that the answer has a direction: torque points along the axis of rotation, which no dot product could ever produce."
        },
        {
          "t": "mcq",
          "q": "For two vectors, the magnitude of <i>A</i> × <i>B</i> equals <i>A</i> · <i>B</i> when the angle between them is:",
          "opts": [
            { "label": "0°", "nudge": "At 0° the cross product is zero while the dot product is at its maximum. They could hardly be further apart." },
            { "label": "45°", "nudge": null },
            { "label": "90°", "nudge": "At 90° the dot is zero and the cross is maximum, the other extreme of the same seesaw." },
            { "label": "180°", "nudge": "At 180° the cross product is zero again, and the dot product is at its most negative." }
          ],
          "correct": 1,
          "solution": "Setting AB sin θ = AB cos θ gives tan θ = 1, so θ = 45°. It is the one angle where the along-part and the across-part are equally large."
        },
        {
          "t": "mcq",
          "q": "If the scalar triple product <i>A</i> · (<i>B</i> × <i>C</i>) = 0 for three non-zero vectors, then the vectors are:",
          "opts": [
            { "label": "mutually perpendicular", "nudge": "Three mutually perpendicular vectors span a rectangular box with the largest possible volume, so their triple product is as far from zero as it gets." },
            { "label": "coplanar", "nudge": null },
            { "label": "identical", "nudge": "Identical vectors do give zero, but they are one special case; the question asks what zero implies in general." },
            { "label": "all parallel to one axis", "nudge": "Another special case that happens to be coplanar, but not the complete condition the zero forces." }
          ],
          "correct": 1,
          "solution": "The scalar triple product is the volume of the parallelepiped the three vectors span. Zero volume means they lie in a single plane, which is precisely coplanarity, and it is the fastest coplanarity test there is."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] Find the work done by a force <i>F</i> = (5î + 2ĵ) N in producing a displacement <i>d</i> = (3î + 4ĵ) m.", "a": "<i>W</i> = (5)(3) + (2)(4) = 15 + 8 = 23 J." },
            { "q": "[NEET] Two vectors have magnitudes 4 and 5 units with 30° between them. Find the magnitude of their cross product.", "a": "|<i>A</i> × <i>B</i>| = <i>AB</i> sin 30° = (4)(5)(0.5) = 10 units. The dot product would be (4)(5) cos 30° ≈ 17.3, a useful contrast." },
            { "q": "[JEE Main] Find the angle between <i>A</i> = î + 2ĵ and <i>B</i> = 2î + ĵ.", "a": "<i>A</i> · <i>B</i> = 2 + 2 = 4, |<i>A</i>| = |<i>B</i>| = √5, so cos θ = 4/5 = 0.8 and θ ≈ 36.9°." },
            { "q": "[JEE Main] Find the projection of <i>A</i> = 2î + 3ĵ + k̂ on <i>B</i> = î + ĵ + k̂.", "a": "<i>A</i> · <i>B</i> = 2 + 3 + 1 = 6 and |<i>B</i>| = √3, so the projection is 6/√3 = 2√3 ≈ 3.46 units." },
            { "q": "[JEE Advanced] For <i>A</i> = î + 2ĵ + 3k̂ and <i>B</i> = 3î + 2ĵ + k̂, find <i>A</i> × <i>B</i> and the area of the parallelogram they span. Then test whether <i>P</i> = î + ĵ + k̂, <i>Q</i> = î + 2ĵ + 3k̂ and <i>R</i> = î + 4ĵ + 9k̂ are coplanar.", "a": "<i>A</i> × <i>B</i> = î(2 − 6) − ĵ(1 − 9) + k̂(2 − 6) = −4î + 8ĵ − 4k̂, magnitude √(16 + 64 + 16) = √96 = 4√6 ≈ 9.80 square units. For the second part, the determinant is 1(18 − 12) − 1(9 − 3) + 1(4 − 2) = 6 − 6 + 2 = 2 ≠ 0, so they are <b>not</b> coplanar and span a volume of 2 cubic units." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Using cos where sin belongs, and the reverse.</b> Dot takes cos, cross takes sin. Writing torque with a cosine is the single most common slip in the whole chapter, and it costs the full mark even when the arithmetic is spotless.",
            "<b>Writing a dot product as a vector or a cross product as a number.</b> <i>A</i> · <i>B</i> is one number; <i>A</i> × <i>B</i> has three components and a direction. Mislabelling loses marks independently of the calculation.",
            "<b>Forgetting that the cross product is anticommutative.</b> <i>A</i> × <i>B</i> = −<i>B</i> × <i>A</i>. Order matters and the sign carries real physics, such as which way a torque turns.",
            "<b>Dropping the minus sign on the middle term of the determinant.</b> The ĵ cofactor is subtracted, not added. Every second cross-product error in a paper is this one sign.",
            "<b>Reading equal dimensions as equal quantities.</b> Torque and work are both N m, yet one is a vector that turns things and the other a scalar that transfers energy. A dimension check can never separate them, only the physics can."
          ]
        },
        {
          "t": "protip",
          "html": "decide which product you need from the physics, never from the algebra. how much along, work, power, flux, a projection, means dot and cos. how much across, torque, angular momentum, magnetic force, an area, means cross and sin. two instant checks worth owning: the sign of A · B tells you at once whether the angle is acute or obtuse, before you invert any cosine, and for three vectors a zero scalar triple product is the fastest coplanarity test in existence, with nothing to draw."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "A · B = AB cos θ = A<sub>x</sub>B<sub>x</sub> + A<sub>y</sub>B<sub>y</sub> + A<sub>z</sub>B<sub>z</sub>", "note": "a scalar; zero exactly when the vectors are perpendicular" },
            { "f": "|A × B| = AB sin θ, direction by the right hand", "note": "a vector; zero exactly when the vectors are parallel or antiparallel" },
            { "f": "projection of A on B = (A · B)/B", "note": "and the across-part is A sin θ = |A × B|/B" },
            { "f": "|A × B| = parallelogram area, half for a triangle", "note": "A · (B × C) = parallelepiped volume; zero means coplanar" },
            { "f": "W = F · d · P = F · v · τ = r × F · L = r × p", "note": "the dot family measures along, the cross family measures turning" }
          ],
          "aids": [
            "\"dot agrees with cos, cross turns with sin\"",
            "\"dot gives a number, cross gives an arrow, never the other way round\""
          ]
        }
      ]
    },
    {
      "n": "03",
      "title": "Kinematics in a Plane: Two Motions, One Clock",
      "chip": "03 PLANE KINEMATICS",
      "kalam": "two 1-D problems that only ever share a clock",
      "blocks": [
        {
          "t": "p",
          "html": "In a straight line a single signed number told you everything: position <i>x</i>, velocity <i>v</i>, acceleration <i>a</i>. But the moment a body can move sideways as well as forward, a footballer curling across the pitch, a boat angling across a river, a charged particle drifting in a field, one number is no longer enough. You need vectors: a <b>position vector</b> <i>r</i> pointing from the origin to the particle, a <b>velocity vector</b> <i>v</i> tangent to its path, and an <b>acceleration vector</b> <i>a</i> that may point in any direction at all, including sideways across the motion."
        },
        {
          "t": "p",
          "html": "Here is the single most powerful idea in the whole chapter, and it is deceptively simple. <b>Motion in a plane is just two independent one-dimensional motions happening at once.</b> The <i>x</i>-part of the motion evolves entirely on its own, governed only by the <i>x</i>-components of velocity and acceleration; the <i>y</i>-part does likewise. They never interfere. They share exactly one thing: the clock, <i>t</i>. This is the <b>principle of independence of perpendicular motions</b>, and it is what lets you take every tool from straight-line kinematics and apply it twice, once per axis."
        },
        {
          "t": "think",
          "html": "imagine a carrom striker sliding across the board while you separately nudge it sideways with a steady puff of air. its forward glide and its sideways drift do not argue with each other. the forward distance after two seconds is whatever the forward motion alone would have given, and the sideways distance is whatever the sideways push alone would have given. the path you actually see is those two simple motions superposed. resolve any plane motion into its x and y stories, solve each as an ordinary 1-D problem, then recombine with vector addition. that recipe never fails."
        },
        {
          "t": "p",
          "html": "Because vectors carry direction, the equations of motion you already know get a vector upgrade rather than a replacement. For <b>constant acceleration in a plane</b>, <i>v</i> = <i>v</i><sub>0</sub> + <i>at</i> and <i>r</i> = <i>r</i><sub>0</sub> + <i>v</i><sub>0</sub><i>t</i> + ½<i>at</i><sup>2</sup>. These look identical to the one-dimensional versions because they <i>are</i>, just promoted to vectors. Split each into components and you get two independent sets of scalar equations. Projectile motion is simply the special case where <i>a</i> = −<i>g</i>ĵ, gravity and nothing else; uniform circular motion is the case where <i>a</i> always points at a centre. Master the general framework and both special cases become bookkeeping."
        },
        {
          "t": "think",
          "html": "one subtlety worth flagging before it bites you in an exam. in two dimensions speed and the magnitude of velocity are still equal at any instant, but average speed and the magnitude of average velocity are not. average velocity uses the straight-line displacement while average speed uses the actual curved path length, and the moment the path bends the two part company. exactly the gap you met in straight-line motion, except that now the path bends without the body ever reversing."
        },
        {
          "t": "defgrid",
          "title": "Every quantity, in vector and component form",
          "rows": [
            { "k": "Position", "v": "<i>r</i> = <i>x</i>î + <i>y</i>ĵ, in m. |<i>r</i>| = √(<i>x</i><sup>2</sup> + <i>y</i><sup>2</sup>), tan θ<sub>r</sub> = <i>y</i>/<i>x</i>" },
            { "k": "Displacement", "v": "Δ<i>r</i> = Δ<i>x</i>î + Δ<i>y</i>ĵ, in m. Endpoints only, never the path" },
            { "k": "Velocity", "v": "<i>v</i> = <i>dr</i>/<i>dt</i> = <i>v<sub>x</sub></i>î + <i>v<sub>y</sub></i>ĵ, in m/s, always tangent to the path" },
            { "k": "Acceleration", "v": "<i>a</i> = <i>dv</i>/<i>dt</i> = <i>a<sub>x</sub></i>î + <i>a<sub>y</sub></i>ĵ, in m/s<sup>2</sup>, free to point anywhere" },
            { "k": "Averages", "v": "<i>v</i><sub>avg</sub> = Δ<i>r</i>/Δ<i>t</i> and <i>a</i><sub>avg</sub> = Δ<i>v</i>/Δ<i>t</i>, both in the same units as their instantaneous forms" },
            { "k": "Speed", "v": "|<i>v</i>| = √(<i>v<sub>x</sub></i><sup>2</sup> + <i>v<sub>y</sub></i><sup>2</sup>) in m/s, never <i>v<sub>x</sub></i> + <i>v<sub>y</sub></i>" }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE EQUATIONS OF MOTION, PROMOTED TO VECTORS",
          "tag": "valid only when a is constant in size AND direction",
          "main": "<i>v</i> = <i>v</i><sub>0</sub> + <i>at</i><br><i>r</i> = <i>r</i><sub>0</sub> + <i>v</i><sub>0</sub><i>t</i> + ½<i>at</i><sup>2</sup>",
          "legend": [
            "<i>v</i><sub>0</sub> and <i>v</i> are the initial and final velocity vectors in m/s; <i>a</i> is the constant acceleration in m/s<sup>2</sup>",
            "<i>r</i><sub>0</sub> and <i>r</i> are the initial and final position vectors in m; <i>t</i> is the elapsed time in s",
            "per component: <i>v<sub>x</sub></i> = <i>v</i><sub>0<i>x</i></sub> + <i>a<sub>x</sub>t</i>, <i>x</i> = <i>x</i><sub>0</sub> + <i>v</i><sub>0<i>x</i></sub><i>t</i> + ½<i>a<sub>x</sub>t</i><sup>2</sup>, and the identical pair in <i>y</i>"
          ],
          "note": "when time is neither given nor wanted, the third equation also survives per axis: v<sub>x</sub>² = v<sub>0x</sub>² + 2a<sub>x</sub>Δx, and separately v<sub>y</sub>² = v<sub>0y</sub>² + 2a<sub>y</sub>Δy. Never mix an x quantity into a y equation."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · RADIUS OF CURVATURE",
          "main": "<i>r</i> = <i>v</i><sup>2</sup> ÷ <i>a</i><sub>perp</sub>",
          "legend": [
            "<i>v</i> is the instantaneous speed in m/s and <i>r</i> the radius of the circle the path is momentarily bending along, in m",
            "<i>a</i><sub>perp</sub> is only the component of the acceleration <b>perpendicular to the velocity</b>, in m/s<sup>2</sup>. The parallel component changes the speed instead of the direction and does not appear",
            "at the top of a projectile's arc the velocity is horizontal and gravity is entirely perpendicular, so <i>a</i><sub>perp</sub> = <i>g</i> and <i>r</i> = <i>v</i><sup>2</sup>/<i>g</i>"
          ],
          "note": "split every acceleration into a part along the velocity, which changes speed, and a part across it, which curves the path. Only the across-part sets the radius."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY A VECTOR EQUATION PROVES INDEPENDENCE, TAP A LINE",
          "steps": [
            {
              "eq": "start from <i>a</i> = <i>dv</i>/<i>dt</i>, assumed constant, and integrate from <i>v</i><sub>0</sub> at <i>t</i> = 0 to <i>v</i> at time <i>t</i>",
              "why": "This is the same definition of acceleration you used in a straight line, with vectors in place of signed numbers. Integrating a constant over an interval is just multiplying it by the elapsed time."
            },
            {
              "eq": "<i>v</i> − <i>v</i><sub>0</sub> = <i>at</i>, so <i>v</i> = <i>v</i><sub>0</sub> + <i>at</i>",
              "why": "The first equation, unchanged in form. Because a vector equation is really one equation per axis, this single line already contains both the x-story and the y-story."
            },
            {
              "eq": "now use <i>v</i> = <i>dr</i>/<i>dt</i> and integrate again: <i>r</i> = <i>r</i><sub>0</sub> + <i>v</i><sub>0</sub><i>t</i> + ½<i>at</i><sup>2</sup>",
              "why": "Substituting the expression just found and integrating term by term. The t² appears for the same reason it did in one dimension: the velocity itself is growing linearly."
            },
            {
              "eq": "read off the î part: <i>v<sub>x</sub></i> = <i>v</i><sub>0<i>x</i></sub> + <i>a<sub>x</sub>t</i> and <i>x</i> = <i>x</i><sub>0</sub> + <i>v</i><sub>0<i>x</i></sub><i>t</i> + ½<i>a<sub>x</sub>t</i><sup>2</sup>",
              "why": "Two vectors are equal only if each component matches, so one vector equation splits into two scalar ones. Notice what the x-equations contain: only x-quantities."
            },
            {
              "eq": "read off the ĵ part: <i>v<sub>y</sub></i> = <i>v</i><sub>0<i>y</i></sub> + <i>a<sub>y</sub>t</i> and <i>y</i> = <i>y</i><sub>0</sub> + <i>v</i><sub>0<i>y</i></sub><i>t</i> + ½<i>a<sub>y</sub>t</i><sup>2</sup>",
              "why": "Only y-quantities again. Neither set mentions the other, and that is the mathematical statement of the independence of perpendicular motions: each axis runs its own one-dimensional show, coupled to the other solely through the shared time t."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 3.3 · POSITION, DISPLACEMENT AND TWO TANGENTS",
          "chips": ["one curved path, read four ways"],
          "captions": [
            "The particle runs from A to B along a curve. Its position vector r₀ points from the origin to A and r to B, and the displacement Δr = r − r₀ is the straight arrow from A to B, not the curve. The velocity is tangent at every instant, v₀ at A and v at B. The dashed lines show what the two axes are doing separately: the horizontal progress and the vertical progress, each an ordinary 1-D motion, sharing only the clock."
          ],
          "frames": [
            {
              "x": [0, 10], "y": [0, 7],
              "axisX": "x (m)", "axisY": "y (m)",
              "curves": [{ "c": "pts", "pts": [[0.5, 0.4], [2, 2], [3.5, 3.3], [5, 4.3], [7, 5.2], [8.5, 5.5]], "smooth": true }],
              "points": [
                { "x": 2, "y": 2, "label": "A", "at": "sw" },
                { "x": 7, "y": 5.2, "label": "B", "at": "se" }
              ],
              "arrows": [
                { "from": [0, 0], "to": [2, 2], "tone": "soft", "label": "r₀" },
                { "from": [0, 0], "to": [7, 5.2], "tone": "soft", "label": "r" },
                { "from": [2, 2], "to": [7, 5.2], "tone": "amber", "label": "Δr", "at": "below" },
                { "from": [2, 2], "to": [3.2, 3.16], "tone": "ink", "label": "v₀", "at": "end" },
                { "from": [7, 5.2], "to": [8.4, 5.68], "tone": "ink", "label": "v" }
              ],
              "segments": [
                { "from": [2, 2], "to": [2, 0], "dash": true, "soft": true },
                { "from": [7, 5.2], "to": [7, 0], "dash": true, "soft": true },
                { "from": [2, 2], "to": [0, 2], "dash": true, "soft": true },
                { "from": [7, 5.2], "to": [0, 5.2], "dash": true, "soft": true }
              ]
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · DROPPED AND FIRED, SIDE BY SIDE",
          "chips": ["dropped from rest", "fired horizontally"],
          "captions": [
            "A ball released from rest at 45 m. With g = 10 m/s², after 1 s it has fallen 5 m, after 2 s it has fallen 20 m, and it lands at 3 s. Pure vertical motion, nothing sideways.",
            "The same ball fired horizontally at the same instant. Compare the two chips at the same second: the heights are identical, 40 m, 25 m and 0 m. The sideways drift changed where it is, never when it lands. Horizontal motion and vertical motion do not talk to each other."
          ],
          "frames": [
            {
              "x": [0, 10], "y": [-5, 50],
              "axisY": "height (m)",
              "bodies": [{ "kind": "ground", "at": [5, -1.5], "w": 9, "h": 1 }],
              "segments": [{ "from": [2, 45], "to": [2, 0], "dash": true, "soft": true }],
              "marks": [
                { "x": 2, "y": 45, "glyph": "dot", "label": "t = 0" },
                { "x": 2, "y": 40, "glyph": "dot", "label": "1 s" },
                { "x": 2, "y": 25, "glyph": "dot", "label": "2 s" },
                { "x": 2, "y": 0, "glyph": "dot", "label": "3 s" }
              ]
            },
            {
              "x": [0, 10], "y": [-5, 50],
              "axisY": "height (m)",
              "bodies": [{ "kind": "ground", "at": [5, -1.5], "w": 9, "h": 1 }],
              "curves": [{ "c": "pts", "pts": [[0.5, 45], [2.5, 40], [4.5, 25], [6.5, 0]], "smooth": true }],
              "segments": [
                { "from": [0, 40], "to": [2.5, 40], "dash": true, "soft": true },
                { "from": [0, 25], "to": [4.5, 25], "dash": true, "soft": true }
              ],
              "marks": [
                { "x": 0.5, "y": 45, "glyph": "dot", "label": "t = 0" },
                { "x": 2.5, "y": 40, "glyph": "dot", "label": "1 s" },
                { "x": 4.5, "y": 25, "glyph": "dot", "label": "2 s" },
                { "x": 6.5, "y": 0, "glyph": "dot", "label": "3 s" }
              ]
            }
          ]
        },
        {
          "t": "proc",
          "title": "Any plane-motion problem, in five moves",
          "steps": [
            "<b>Choose axes that make the acceleration simple.</b> Usually one axis along the acceleration and one across it, because then one of <i>a<sub>x</sub></i>, <i>a<sub>y</sub></i> is zero and half the algebra disappears.",
            "<b>Write the four scalar equations,</b> two for <i>x</i> and two for <i>y</i>, filling in <i>v</i><sub>0<i>x</i></sub>, <i>v</i><sub>0<i>y</i></sub>, <i>a<sub>x</sub></i>, <i>a<sub>y</sub></i> from the problem, with signs.",
            "<b>Translate the question into a condition on one axis.</b> Velocity purely horizontal means <i>v<sub>y</sub></i> = 0. Back to the starting height means <i>y</i> = 0. Deepest point means <i>v<sub>y</sub></i> = 0 again. Almost every question is a one-axis condition in disguise.",
            "<b>Solve that axis for the time,</b> then feed that single number into the other axis. The clock is the only bridge, so it is always the thing you carry across.",
            "<b>Recombine and check.</b> |<i>v</i>| = √(<i>v<sub>x</sub></i><sup>2</sup> + <i>v<sub>y</sub></i><sup>2</sup>), tan θ = <i>v<sub>y</sub></i>/<i>v<sub>x</sub></i>, and confirm no x-quantity has leaked into a y-equation anywhere."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A particle starts from the origin with velocity <i>v</i><sub>0</sub> = 4î m/s and moves with constant acceleration <i>a</i> = 3ĵ m/s<sup>2</sup>. Find its velocity and position after 2 s, and the magnitude of each.",
          "steps": [
            "The two motions are separate. In <i>x</i>: <i>v</i><sub>0<i>x</i></sub> = 4 m/s and <i>a<sub>x</sub></i> = 0, so the <i>x</i>-motion is uniform. In <i>y</i>: <i>v</i><sub>0<i>y</i></sub> = 0 and <i>a<sub>y</sub></i> = 3 m/s<sup>2</sup>, so the <i>y</i>-motion starts from rest and accelerates.",
            "<i>v</i> = <i>v</i><sub>0</sub> + <i>at</i> = 4î + (3ĵ)(2) = 4î + 6ĵ m/s, so |<i>v</i>| = √(16 + 36) = √52 ≈ 7.2 m/s.",
            "<i>r</i> = <i>v</i><sub>0</sub><i>t</i> + ½<i>at</i><sup>2</sup> = (4)(2)î + ½(3)(4)ĵ = 8î + 6ĵ m, so |<i>r</i>| = √(64 + 36) = 10 m.",
            "Neither axis ever consulted the other. Note also that 8î + 6ĵ is not in the same direction as 4î + 6ĵ: in a plane the position vector and the velocity vector generally point different ways."
          ],
          "ans": "v = 4î + 6ĵ m/s (≈ 7.2 m/s) · r = 8î + 6ĵ m (10 m)"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "At an instant a particle's velocity is <i>v</i> = 6î + 8ĵ m/s. Its speed is: 10 m/s, 14 m/s, 2 m/s, or 48 m/s?",
          "steps": [
            "The eye adds the two numbers, 6 + 8 = 14, which is the trap option. But perpendicular components combine by Pythagoras, never by arithmetic.",
            "|<i>v</i>| = √(6<sup>2</sup> + 8<sup>2</sup>) = √(36 + 64) = √100 = 10 m/s.",
            "Speed cue: learn the right-triangle families 3-4-5, 6-8-10 and 5-12-13 by sight and these become instant. The other two distractors subtract the components and multiply them, both symptoms of forgetting the components are perpendicular."
          ],
          "ans": "10 m/s"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "A particle is launched with velocity <i>v</i><sub>0</sub> = 2î + 4ĵ m/s and experiences a constant acceleration <i>a</i> = −2ĵ m/s<sup>2</sup>. Find the time at which its velocity is directed purely along the <i>x</i>-axis, and its speed at that instant.",
          "steps": [
            "The acceleration has no <i>x</i>-part, so <i>v<sub>x</sub></i> = 2 m/s for ever. In <i>y</i>: <i>v<sub>y</sub></i> = 4 + (−2)<i>t</i> = 4 − 2<i>t</i>.",
            "Velocity along <i>x</i> means the <i>y</i>-component has vanished: 4 − 2<i>t</i> = 0, so <i>t</i> = 2 s.",
            "At <i>t</i> = 2 s the velocity is 2î + 0ĵ, so the speed is 2 m/s.",
            "This is also the instant of <b>minimum speed</b>, because √(2<sup>2</sup> + (4 − 2<i>t</i>)<sup>2</sup>) is smallest exactly when the <i>y</i>-part vanishes, the same logic that makes a projectile slowest at the top of its arc."
          ],
          "ans": "t = 2 s · speed = 2 m/s, the minimum of the whole motion"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "A particle is projected with velocity <i>v</i><sub>0</sub> = 10î m/s and moves under constant acceleration <i>a</i> = −10ĵ m/s<sup>2</sup>, a horizontal launch under gravity with <i>g</i> = 10 m/s<sup>2</sup>. Find the radius of curvature of its path at <i>t</i> = 1 s.",
          "steps": [
            "Radius of curvature uses only the acceleration perpendicular to the velocity: <i>r</i> = <i>v</i><sup>2</sup>/<i>a</i><sub>perp</sub>. So first the velocity, then the perpendicular slice of <i>a</i>.",
            "At <i>t</i> = 1 s: <i>v<sub>x</sub></i> = 10 m/s and <i>v<sub>y</sub></i> = 0 + (−10)(1) = −10 m/s, so |<i>v</i>| = √(100 + 100) = 10√2 m/s and the velocity points 45° below the horizontal.",
            "The acceleration is 10 m/s<sup>2</sup> straight down, which makes 45° with that velocity, so <i>a</i><sub>perp</sub> = 10 cos 45° = 10/√2 = 5√2 m/s<sup>2</sup>. The remaining 5√2 lies along the velocity and is busy speeding the particle up, not bending it.",
            "<i>r</i> = <i>v</i><sup>2</sup>/<i>a</i><sub>perp</sub> = 200/(5√2) = 40/√2 = 20√2 ≈ 28.3 m.",
            "Sanity check at the other end: at <i>t</i> = 0 the velocity is horizontal and gravity is entirely perpendicular, so <i>r</i> = 100/10 = 10 m. The path straightens out as it steepens, which is exactly what a parabola does."
          ],
          "ans": "r = 20√2 ≈ 28.3 m"
        },
        {
          "t": "mcq",
          "q": "For a particle moving in a plane with constant acceleration, the horizontal and vertical components of its motion are:",
          "opts": [
            { "label": "always equal", "nudge": "There is no reason for them to be, and they generally are not: a projectile has zero horizontal acceleration and a full g vertically." },
            { "label": "independent of each other", "nudge": null },
            { "label": "always opposite", "nudge": "This imposes a relationship the equations never contain." },
            { "label": "coupled through the acceleration", "nudge": "The common misconception. The x-acceleration acts only on x-quantities and the y-acceleration only on y-quantities; they never cross over." }
          ],
          "correct": 1,
          "solution": "The component equations contain only their own axis's quantities, so each axis evolves on its own. The one thing they share is the elapsed time."
        },
        {
          "t": "mcq",
          "q": "The position of a particle is <i>r</i> = (3<i>t</i>)î + (2<i>t</i><sup>2</sup>)ĵ in SI units. Its acceleration is:",
          "opts": [
            { "label": "3î m/s<sup>2</sup>", "nudge": "That is the constant x-velocity, not an acceleration. The x-motion has no acceleration at all." },
            { "label": "4ĵ m/s<sup>2</sup>", "nudge": null },
            { "label": "2ĵ m/s<sup>2</sup>", "nudge": "This forgets the factor of 2 that appears the second time you differentiate 2t²." },
            { "label": "0 m/s<sup>2</sup>", "nudge": "This assumes the velocity is constant, but the y-motion is accelerated." }
          ],
          "correct": 1,
          "solution": "v = dr/dt = 3î + 4tĵ, so a = dv/dt = 4ĵ m/s². Differentiate each component separately, twice."
        },
        {
          "t": "mcq",
          "q": "A particle moves in a plane with a constant acceleration that is <i>not</i> parallel to its initial velocity. Its path is:",
          "opts": [
            { "label": "a straight line", "nudge": "A straight line needs the acceleration parallel or antiparallel to the velocity, which the question rules out." },
            { "label": "a circle", "nudge": "A circle needs an acceleration that constantly turns to keep pointing at a centre, so it cannot be constant." },
            { "label": "a parabola", "nudge": null },
            { "label": "a spiral", "nudge": "A spiral needs a changing radius as well as a changing direction, which a constant acceleration cannot produce." }
          ],
          "correct": 2,
          "solution": "One axis runs at constant velocity and the other at constant acceleration, so eliminating t between x ∝ t and y ∝ t² gives y ∝ x², a parabola. Projectile motion is the everyday example."
        },
        {
          "t": "mcq",
          "q": "A particle travels once round a circular track of radius <i>R</i> at a steady speed, taking time <i>T</i>. Over that full lap, its average speed and the magnitude of its average velocity are respectively:",
          "opts": [
            { "label": "2π<i>R</i>/<i>T</i> and 2π<i>R</i>/<i>T</i>", "nudge": "This treats the two as interchangeable. They agree only on a straight, unreversed path, and a closed loop is the opposite extreme." },
            { "label": "2π<i>R</i>/<i>T</i> and 0", "nudge": null },
            { "label": "0 and 2π<i>R</i>/<i>T</i>", "nudge": "This swaps the two definitions: it is the displacement that vanishes on a closed loop, never the path length." },
            { "label": "0 and 0", "nudge": "The particle really did travel 2πR of track, so its average speed cannot be zero." }
          ],
          "correct": 1,
          "solution": "Average speed uses path length, the full circumference 2πR, over T. Average velocity uses displacement, and a full lap returns the particle to its start, so the displacement and therefore the average velocity are exactly zero."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] A particle starts from the origin with <i>v</i><sub>0</sub> = 5î m/s and constant acceleration <i>a</i> = 2ĵ m/s<sup>2</sup>. Find its position vector after 3 s.", "a": "<i>x</i> = (5)(3) = 15 m and <i>y</i> = ½(2)(9) = 9 m, so <i>r</i> = 15î + 9ĵ m, of magnitude √(225 + 81) ≈ 17.5 m." },
            { "q": "[NEET] A particle's velocity is <i>v</i> = 9î + 12ĵ m/s. Find its speed.", "a": "√(81 + 144) = √225 = 15 m/s. It is the 3-4-5 family scaled by 3." },
            { "q": "[JEE Main] A body has initial velocity <i>v</i><sub>0</sub> = 3î + 4ĵ m/s and acceleration <i>a</i> = 0.4î + 0.3ĵ m/s<sup>2</sup>. Find its velocity after 10 s and its magnitude.", "a": "<i>v<sub>x</sub></i> = 3 + 4 = 7 m/s and <i>v<sub>y</sub></i> = 4 + 3 = 7 m/s, so <i>v</i> = 7î + 7ĵ m/s and |<i>v</i>| = 7√2 ≈ 9.9 m/s, now at 45°." },
            { "q": "[JEE Main] A particle moves so that <i>x</i> = 3<i>t</i> and <i>y</i> = 4<i>t</i> − 5<i>t</i><sup>2</sup> in SI units. Find its velocity vector at <i>t</i> = 1 s and its acceleration.", "a": "<i>v</i> = 3î + (4 − 10<i>t</i>)ĵ, so <i>v</i>(1) = 3î − 6ĵ m/s. <i>a</i> = −10ĵ m/s<sup>2</sup>, constant: this is a projectile launched at 3î + 4ĵ." },
            { "q": "[JEE Advanced] A particle is projected horizontally at 20 m/s under gravity, <i>g</i> = 10 m/s<sup>2</sup>. Find the radius of curvature of its path at the instant of projection.", "a": "At <i>t</i> = 0 the velocity is horizontal at 20 m/s and gravity is entirely perpendicular to it, so <i>a</i><sub>perp</sub> = <i>g</i> = 10 m/s<sup>2</sup> and <i>r</i> = <i>v</i><sup>2</sup>/<i>g</i> = 400/10 = 40 m." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Adding velocity components arithmetically.</b> <i>v<sub>x</sub></i> and <i>v<sub>y</sub></i> are perpendicular, so the speed is √(<i>v<sub>x</sub></i><sup>2</sup> + <i>v<sub>y</sub></i><sup>2</sup>) and never <i>v<sub>x</sub></i> + <i>v<sub>y</sub></i>.",
            "<b>Letting the axes talk to each other.</b> A change in the <i>x</i>-motion does not alter the <i>y</i>-motion. Solve each as a separate one-dimensional problem; the only shared variable is time.",
            "<b>Applying the vector equations as if they were scalar.</b> <i>v</i> = <i>v</i><sub>0</sub> + <i>at</i> must be used component by component whenever <i>v</i><sub>0</sub> and <i>a</i> point in different directions, which in a plane is nearly always.",
            "<b>Confusing average speed with the magnitude of average velocity.</b> On a curved path they differ, because average velocity uses the straight-line displacement while average speed uses the actual path length.",
            "<b>Slipping on the second differentiation.</b> Given <i>x</i>(<i>t</i>) and <i>y</i>(<i>t</i>), differentiate each once for velocity and twice for acceleration, and keep the factor that a power drops each time."
          ]
        },
        {
          "t": "protip",
          "html": "treat every plane-motion problem as two 1-D problems sharing a clock. resolve along convenient perpendicular axes, usually one along the acceleration and one across it, write the four scalar equations, solve each axis with ordinary kinematics, then recombine with vector addition at the very end. recognising a problem as constant acceleration in a plane instantly unlocks v = v<sub>0</sub> + at and r = r<sub>0</sub> + v<sub>0</sub>t + ½at², the same equations you already trust. and when a question asks for a radius of curvature, do not reach for a circle formula, split the acceleration and use only the part across the velocity."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "r = xî + yĵ · v = dr/dt · a = dv/dt", "note": "differentiate component by component, never the magnitude" },
            { "f": "v = v<sub>0</sub> + at · r = r<sub>0</sub> + v<sub>0</sub>t + ½at<sup>2</sup>", "note": "constant a only, and applied one component at a time" },
            { "f": "independence: x-equations hold only x-quantities", "note": "the two axes share the clock and absolutely nothing else" },
            { "f": "|v| = √(v<sub>x</sub><sup>2</sup> + v<sub>y</sub><sup>2</sup>) · tan θ = v<sub>y</sub>/v<sub>x</sub>", "note": "perpendicular components combine by Pythagoras, never by adding" },
            { "f": "radius of curvature r = v<sup>2</sup>/a<sub>perp</sub>", "note": "only the across-the-velocity part bends the path" }
          ],
          "aids": [
            "\"two motions, one clock: resolve, solve, recombine\"",
            "\"the along-part changes speed, the across-part bends the path\""
          ]
        }
      ]
    },
    {
      "n": "04",
      "title": "Projectile Motion",
      "chip": "04 PROJECTILES",
      "kalam": "the horizontal coasts, the vertical falls, time ties them",
      "blocks": [
        {
          "t": "p",
          "html": "Throw a cricket ball across the maidan and it traces a graceful arch before landing. That arch, the <b>trajectory</b>, looks complicated, but the secret of projectile motion is that it is really two simple independent motions happening at the same time, stitched together only by the clock. Once the ball leaves your hand the only force on it, ignoring air, is gravity, and gravity pulls <b>straight down</b>. It has no sideways component at all."
        },
        {
          "t": "p",
          "html": "So think of the motion in two separate channels. <b>Horizontally</b> there is no force, so by Newton's first law the horizontal velocity never changes: the ball drifts sideways at a perfectly constant speed, uniform motion. <b>Vertically</b> gravity acts in full, so the vertical motion is exactly free fall: the ball rises, slows, stops momentarily, and comes back down, governed entirely by <i>g</i>. This is why you resolve the launch velocity <i>u</i> into <i>u</i> cos θ across and <i>u</i> sin θ up, and then treat each channel with tools you already own."
        },
        {
          "t": "think",
          "html": "fire one bullet horizontally from a gun and at the very same instant simply drop a second bullet from the same height. which lands first? they land together. the fired bullet's huge horizontal speed does nothing to delay its fall, because horizontal motion and vertical motion do not talk to each other. gravity pulls both downward identically, and the fired one merely travels far sideways while falling the same way the dropped one does. internalise that one demonstration and projectile motion stops being frightening: it is free fall with a sideways drift."
        },
        {
          "t": "p",
          "html": "Combine uniform horizontal drift with accelerated vertical fall and the path that emerges is a <b>parabola</b>, the shape of every air-free fountain jet, hose stream and basketball shot. The familiar quantities follow naturally: how long it stays up, the <b>time of flight</b>; how high it climbs, the <b>maximum height</b>; and how far it goes, the <b>horizontal range</b>, with the celebrated result that the range is greatest at a launch angle of 45°. All three come from the same two channels, and all three carry the same fine print."
        },
        {
          "t": "def",
          "term": "What the standard formulas assume, and when they break",
          "html": "<b>Air resistance is neglected.</b> Real drag reduces both range and height and destroys the up-down symmetry; the ideal parabola assumes a vacuum. <b><i>g</i> is constant</b> and the Earth flat over the flight, which is fine near the surface. <b>The symmetric formulas for <i>T</i>, <i>H</i> and <i>R</i> assume launch and landing at the same height.</b> If the projectile lands higher or lower, on a cliff, a tower or an incline, those three are simply wrong and you must return to the component equations and solve the vertical one as a quadratic. <b>Horizontal velocity is constant only because there is no horizontal force</b>: introduce wind or thrust and even that breaks."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE PROJECTILE, CHANNEL BY CHANNEL",
          "tag": "launch and landing at the same height",
          "main": "<i>x</i> = (<i>u</i> cos θ)<i>t</i>,  <i>y</i> = (<i>u</i> sin θ)<i>t</i> − ½<i>gt</i><sup>2</sup><br><i>v<sub>x</sub></i> = <i>u</i> cos θ,  <i>v<sub>y</sub></i> = <i>u</i> sin θ − <i>gt</i><br><i>y</i> = <i>x</i> tan θ − <i>gx</i><sup>2</sup> ÷ (2<i>u</i><sup>2</sup>cos<sup>2</sup>θ)",
          "legend": [
            "<i>u</i> is the launch speed in m/s and θ the launch angle above the horizontal, a pure number",
            "<i>x</i> and <i>y</i> are the horizontal and vertical positions in m, measured from the launch point, with up positive",
            "<i>g</i> = 9.8 m/s<sup>2</sup>, often rounded to 10 for quick arithmetic, and <i>t</i> is in s"
          ],
          "note": "the third line is the trajectory with time eliminated. It has the form y = ax − bx², which is a parabola, and that is the proof that the path really is one."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · TIME OF FLIGHT, HEIGHT AND RANGE",
          "main": "<i>T</i> = 2<i>u</i> sin θ ÷ <i>g</i><br><i>H</i> = <i>u</i><sup>2</sup>sin<sup>2</sup>θ ÷ 2<i>g</i><br><i>R</i> = <i>u</i><sup>2</sup>sin 2θ ÷ <i>g</i>,  <i>R</i><sub>max</sub> = <i>u</i><sup>2</sup>/<i>g</i> at θ = 45°",
          "legend": [
            "<i>T</i> is the total flight time in s, <i>H</i> the maximum height in m and <i>R</i> the horizontal range in m",
            "<i>u</i> is in m/s, <i>g</i> in m/s<sup>2</sup>, and θ is the launch angle above the horizontal",
            "handy relations: complementary angles θ and 90° − θ give the <b>same</b> range; for them <i>H</i><sub>1</sub> + <i>H</i><sub>2</sub> = <i>u</i><sup>2</sup>/2<i>g</i>, free of θ; and <i>R</i> = 4<i>H</i> cot θ, so at 45° exactly <i>R</i> = 4<i>H</i>"
          ],
          "note": "keep H and R apart: height carries sin²θ, range carries sin 2θ. Mixing them is the single most expensive slip in this topic."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · LAUNCHED HORIZONTALLY FROM A HEIGHT",
          "tag": "u sin θ = 0, so the fall is a pure drop",
          "main": "<i>T</i> = √(2<i>h</i>/<i>g</i>),  <i>R</i> = <i>u</i>√(2<i>h</i>/<i>g</i>),  <i>y</i> = <i>gx</i><sup>2</sup> ÷ 2<i>u</i><sup>2</sup>",
          "legend": [
            "<i>h</i> is the launch height above the landing surface in m and <i>u</i> the horizontal launch speed in m/s",
            "<i>T</i> is the fall time in s and <i>R</i> the horizontal distance from the base in m",
            "<i>y</i> here measures how far the body has dropped below the launch level, in m, so it is positive downward"
          ],
          "note": "the flight time does not contain u at all. Fire it faster and it goes further, in exactly the same time, which is the dropped-and-fired demonstration written as algebra."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · TIME OF FLIGHT, HEIGHT AND RANGE, TAP A LINE",
          "steps": [
            {
              "eq": "set the origin at the launch point, up positive, so <i>u<sub>x</sub></i> = <i>u</i> cos θ, <i>u<sub>y</sub></i> = <i>u</i> sin θ, <i>a<sub>x</sub></i> = 0, <i>a<sub>y</sub></i> = −<i>g</i>",
              "why": "Everything below is these four numbers fed into the two independent channels. Note a_x = 0 is the entire reason the horizontal speed is a constant."
            },
            {
              "eq": "landing means <i>y</i> = 0 again: <i>t</i>(<i>u</i> sin θ − ½<i>gt</i>) = 0, so <i>T</i> = 2<i>u</i> sin θ/<i>g</i>",
              "why": "The root t = 0 is the launch instant itself, so the other root is the one that matters. The vertical motion is symmetric free fall, and T is exactly twice the time to the top."
            },
            {
              "eq": "at the apex <i>v<sub>y</sub></i> = 0, so <i>t</i><sub>1</sub> = <i>u</i> sin θ/<i>g</i> = <i>T</i>/2, and <i>H</i> = <i>u</i><sup>2</sup>sin<sup>2</sup>θ/<i>g</i> − <i>u</i><sup>2</sup>sin<sup>2</sup>θ/2<i>g</i> = <i>u</i><sup>2</sup>sin<sup>2</sup>θ/2<i>g</i>",
              "why": "Substituting t₁ into y = u sin θ t − ½gt². Only the vertical channel decides how high it climbs; the horizontal drift is completely irrelevant to the height."
            },
            {
              "eq": "horizontal motion is uniform, so <i>R</i> = (<i>u</i> cos θ)<i>T</i> = 2<i>u</i><sup>2</sup>sin θ cos θ/<i>g</i>",
              "why": "Distance equals speed times time, because nothing accelerates the ball sideways. The two channels finally meet, and they meet only through T."
            },
            {
              "eq": "<i>R</i> = <i>u</i><sup>2</sup>sin 2θ/<i>g</i>, greatest when sin 2θ = 1, that is at θ = 45°",
              "why": "The last step is the double-angle identity sin 2A = 2 sin A cos A, quoted from trigonometry, not re-proved here. Since sin 2θ ≤ 1, the range peaks at 2θ = 90°. Check the two ends: θ → 0° and θ → 90° both send sin 2θ to zero and the range with it, so 45° really is a maximum and not merely a stationary point."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 3.4 · THE ARCH, WITH EVERY QUANTITY ON IT",
          "chips": ["launch, apex and landing"],
          "captions": [
            "The launch velocity u splits into u cos θ across, which never changes for the whole flight, and u sin θ up, which gravity erodes. At the apex the vertical part has been spent, v_y = 0, so the velocity there is horizontal and equal to u cos θ, never zero. H is the maximum height and R the range back at launch level. The landing velocity mirrors the launch: same speed, same angle, reflected below the horizontal."
          ],
          "frames": [
            {
              "x": [-0.5, 11], "y": [-1.5, 4], "axes": "none",
              "curves": [{ "c": "pts", "pts": [[0, 0], [1.25, 1.31], [2.5, 2.25], [3.75, 2.81], [5, 3], [6.25, 2.81], [7.5, 2.25], [8.75, 1.31], [10, 0]], "smooth": true }],
              "points": [
                { "x": 0, "y": 0, "label": "O", "at": "sw" },
                { "x": 10, "y": 0, "label": "B", "at": "se" }
              ],
              "arrows": [
                { "from": [0, 0], "to": [1.3, 1.56], "tone": "ink", "label": "u", "at": "end" },
                { "from": [0, 0], "to": [1.3, 0], "tone": "amber", "label": "u cos θ", "at": "below" },
                { "from": [1.3, 0], "to": [1.3, 1.56], "tone": "amber", "label": "u sin θ" },
                { "from": [5, 3], "to": [6.5, 3], "tone": "ink" },
                { "from": [5.9, 0], "to": [5.9, 3], "head": "both", "tone": "amber", "label": "H" },
                { "from": [0, -0.6], "to": [10, -0.6], "head": "both", "tone": "amber", "label": "R", "at": "below" },
                { "from": [10, 0], "to": [10.8, -0.96], "tone": "ink", "label": "v", "at": "mid" }
              ],
              "segments": [{ "from": [5, 3], "to": [5, 0], "dash": true, "soft": true }],
              "marks": [{ "x": 5, "y": 3, "glyph": "dot", "label": "vy = 0" }],
              "arcs": [{ "at": [0, 0], "r": 0.9, "from": 0, "to": 61, "label": "θ" }]
            }
          ]
        },
        {
          "t": "proc",
          "title": "Any projectile, in four moves",
          "steps": [
            "<b>Resolve the launch velocity.</b> <i>u<sub>x</sub></i> = <i>u</i> cos θ, constant for ever. <i>u<sub>y</sub></i> = <i>u</i> sin θ, and it obeys free fall with <i>a<sub>y</sub></i> = −<i>g</i>.",
            "<b>Get the time from the vertical channel.</b> Landing at launch level gives <i>y</i> = 0; landing a depth <i>h</i> lower gives <i>y</i> = −<i>h</i> and a quadratic in <i>t</i>. Keep the positive root only.",
            "<b>Feed that time into the horizontal channel.</b> Range is always <i>x</i> = (<i>u</i> cos θ)<i>t</i>, whatever the landing height, because the horizontal channel never changes.",
            "<b>For a velocity at an instant, combine the two components at that instant,</b> <i>v<sub>x</sub></i> = <i>u</i> cos θ and <i>v<sub>y</sub></i> = <i>u</i> sin θ − <i>gt</i>, then |<i>v</i>| = √(<i>v<sub>x</sub></i><sup>2</sup> + <i>v<sub>y</sub></i><sup>2</sup>) and tan φ = <i>v<sub>y</sub></i>/<i>v<sub>x</sub></i>."
          ]
        },
        {
          "t": "proc",
          "title": "The shortcuts that turn a problem into a one-liner",
          "steps": [
            "<b>Complementary angles share a range.</b> θ and 90° − θ give the same <i>R</i> at the same speed, because sin(180° − 2θ) = sin 2θ. So 25° and 65° land in the same place, and one of them is always a distractor.",
            "<b>Their heights add to a constant.</b> <i>H</i><sub>1</sub> + <i>H</i><sub>2</sub> = <i>u</i><sup>2</sup>/2<i>g</i>, independent of θ, because sin<sup>2</sup>θ + cos<sup>2</sup>θ = 1.",
            "<b><i>R</i> = 4<i>H</i> cot θ</b> converts one of the three quantities straight into another. A question saying the range is <i>n</i> times the height gives tan θ = 4/<i>n</i> in a single line.",
            "<b>Impact speed from energy, not components.</b> For a projectile landing a depth <i>h</i> below launch, <i>v</i><sup>2</sup> = <i>u</i><sup>2</sup> + 2<i>gh</i>, whatever the launch angle. It sidesteps the whole flight."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A ball is projected from the ground with a speed of 20 m/s at 30° above the horizontal. Taking <i>g</i> = 10 m/s<sup>2</sup>, find the time of flight, the maximum height and the horizontal range.",
          "steps": [
            "Given <i>u</i> = 20 m/s, θ = 30°, with sin 30° = 0.5 and sin 60° ≈ 0.866.",
            "<i>T</i> = 2<i>u</i> sin θ/<i>g</i> = 2(20)(0.5)/10 = 20/10 = 2 s.",
            "<i>H</i> = <i>u</i><sup>2</sup>sin<sup>2</sup>θ/2<i>g</i> = (400)(0.25)/20 = 100/20 = 5 m. Note sin<sup>2</sup>θ, not sin 2θ.",
            "<i>R</i> = <i>u</i><sup>2</sup>sin 2θ/<i>g</i> = (400)(sin 60°)/10 = (400)(0.866)/10 ≈ 34.6 m. Cross-check with <i>R</i> = 4<i>H</i> cot 30° = 4(5)(1.732) ≈ 34.6 m."
          ],
          "ans": "T = 2 s · H = 5 m · R ≈ 34.6 m"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "A ball is thrown at 20 m/s at 30° to the horizontal. Its speed at the highest point of the trajectory is: 0, 10 m/s, 10√3 m/s, or 20 m/s?",
          "steps": [
            "The memory says velocity is zero at the top, and that is the trap. It is true only for a ball thrown <b>straight up</b>. For an angled projectile only the vertical part vanishes at the apex.",
            "At the highest point <i>v<sub>y</sub></i> = 0, but <i>v<sub>x</sub></i> = <i>u</i> cos θ = 20 cos 30° = 20(√3/2) = 10√3 ≈ 17.3 m/s, and it has been that value since launch.",
            "Speed cue: at the top of any angled projectile the speed is <i>u</i> cos θ, never zero unless the launch was vertical. The 20 m/s option is the opposite error, forgetting that the vertical part has been spent."
          ],
          "ans": "10√3 ≈ 17.3 m/s"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "A ball is launched from the ground at 20 m/s at 53° above the horizontal, with sin 53° = 0.8, cos 53° = 0.6 and <i>g</i> = 10 m/s<sup>2</sup>. Find the magnitude and direction of its velocity 1 s after launch, and its height at that instant.",
          "steps": [
            "Resolve: <i>u<sub>x</sub></i> = 20(0.6) = 12 m/s and <i>u<sub>y</sub></i> = 20(0.8) = 16 m/s.",
            "At <i>t</i> = 1 s: <i>v<sub>x</sub></i> = 12 m/s, unchanged, and <i>v<sub>y</sub></i> = 16 − 10(1) = 6 m/s, still positive so the ball is still climbing.",
            "|<i>v</i>| = √(144 + 36) = √180 ≈ 13.4 m/s, and tan φ = 6/12 = 0.5, so φ ≈ 26.6° above the horizontal.",
            "Height: <i>y</i> = <i>u<sub>y</sub>t</i> − ½<i>gt</i><sup>2</sup> = 16 − 5 = 11 m.",
            "The velocity now points at a <b>smaller</b> angle than the launch, because gravity has eaten into the upward speed while the horizontal speed has not moved. That flattening continues until the apex, where the angle reaches zero."
          ],
          "ans": "|v| ≈ 13.4 m/s at ≈ 26.6° above horizontal · y = 11 m"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "From the top of a 75 m tower a ball is thrown at 20 m/s at 30° above the horizontal, <i>g</i> = 10 m/s<sup>2</sup>. Find the time of flight, the horizontal distance from the base of the tower where it lands, and the impact speed.",
          "steps": [
            "Launch and landing are <b>not</b> at the same height, so <i>T</i> = 2<i>u</i> sin θ/<i>g</i> does not apply. Keep the origin at the launch point with up positive, so the landing condition is <i>y</i> = −75 m.",
            "<i>u</i> sin θ = 10 m/s and <i>u</i> cos θ = 10√3 ≈ 17.3 m/s. Then −75 = 10<i>t</i> − 5<i>t</i><sup>2</sup>, that is 5<i>t</i><sup>2</sup> − 10<i>t</i> − 75 = 0, or <i>t</i><sup>2</sup> − 2<i>t</i> − 15 = 0.",
            "Factorising, (<i>t</i> − 5)(<i>t</i> + 3) = 0, so <i>t</i> = 5 s; the root <i>t</i> = −3 s is discarded as a time before the throw. Note the flight lasts far longer than the level-ground value 2<i>u</i> sin θ/<i>g</i> = 2 s, because there are 75 extra metres to fall.",
            "The horizontal channel is untouched: <i>R</i> = (10√3)(5) = 50√3 ≈ 86.6 m from the base.",
            "Impact speed from energy, no components needed: <i>v</i><sup>2</sup> = <i>u</i><sup>2</sup> + 2<i>gh</i> = 400 + 2(10)(75) = 1900, so <i>v</i> = √1900 ≈ 43.6 m/s. Component check: <i>v<sub>y</sub></i> = 10 − 50 = −40 m/s and √(300 + 1600) = √1900. Same number."
          ],
          "ans": "t = 5 s · horizontal distance ≈ 86.6 m · impact speed ≈ 43.6 m/s"
        },
        {
          "t": "mcq",
          "q": "At the highest point of its trajectory, the velocity of a projectile launched at an angle is:",
          "opts": [
            { "label": "zero", "nudge": "True only for a body thrown vertically upward. For an angled launch the horizontal component u cos θ sails on untouched, and this is the most common trap in the topic." },
            { "label": "horizontal", "nudge": null },
            { "label": "vertical", "nudge": "The velocity is most nearly vertical at the extremes of a steep flight, never at the top, where the vertical part is exactly what has vanished." },
            { "label": "directed at 45°", "nudge": "There is no general basis for this; the direction at the apex does not depend on the launch angle at all." }
          ],
          "correct": 1,
          "solution": "At the apex v_y = 0 and only the constant horizontal component u cos θ remains, so the velocity is purely horizontal. The acceleration there is still a full g downward."
        },
        {
          "t": "mcq",
          "q": "Two projectiles thrown with the same speed cover equal horizontal ranges. If one is launched at 25°, the other is launched at:",
          "opts": [
            { "label": "25°", "nudge": "That is the same projectile again, not a second, distinct launch angle." },
            { "label": "50°", "nudge": "This comes from doubling the angle, a misremembering of the sin 2θ in the range formula." },
            { "label": "65°", "nudge": null },
            { "label": "75°", "nudge": "75° does not pair with 25°, since the two must add to 90°, not to 100°." }
          ],
          "correct": 2,
          "solution": "Equal ranges at equal speed require complementary angles, θ + θ' = 90°, because sin(2(90° − θ)) = sin(180° − 2θ) = sin 2θ. Here 90° − 25° = 65°."
        },
        {
          "t": "mcq",
          "q": "Neglecting air resistance, the acceleration of a projectile during its flight is:",
          "opts": [
            { "label": "zero at the highest point", "nudge": "This confuses a zero velocity component with a zero acceleration. Gravity does not switch off just because the ball has paused vertically." },
            { "label": "<i>g</i>, directed downward throughout", "nudge": null },
            { "label": "reversed in direction at the top", "nudge": "Gravity always points down; nothing about it reverses at the apex or anywhere else." },
            { "label": "greatest at the moment of launch", "nudge": "The acceleration is constant for the whole flight, so it has no greatest moment." }
          ],
          "correct": 1,
          "solution": "Gravity is the only force, so the acceleration is a constant g downward at every instant, including the apex. This is the same misconception family as v = 0 implies a = 0, from free fall."
        },
        {
          "t": "mcq",
          "q": "Two balls are thrown from the same point with the same speed, one at 30° and the other at 60° to the horizontal. Compared with each other, they have:",
          "opts": [
            { "label": "equal ranges and equal maximum heights", "nudge": "Complementary angles do share a range, but their heights differ by a factor of 3 here: 5 m against 15 m for a 20 m/s launch." },
            { "label": "equal ranges but different maximum heights", "nudge": null },
            { "label": "different ranges but equal maximum heights", "nudge": "Exactly backwards. The ranges match because sin 2θ matches; the heights do not, because sin²θ differs." },
            { "label": "different ranges and different times of flight, with no relation between them", "nudge": "There is a relation: the ranges are equal, and the two heights always sum to u²/2g." }
          ],
          "correct": 1,
          "solution": "30° and 60° are complementary, so sin 2θ is the same for both and the ranges match. But H carries sin²θ, which is 0.25 against 0.75, so the 60° ball climbs three times as high, and the two heights sum to u²/2g."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] A projectile is fired from the ground at 40 m/s at 30°, with <i>g</i> = 10 m/s<sup>2</sup>. Find its maximum height and horizontal range.", "a": "<i>H</i> = (1600)(0.25)/20 = 20 m. <i>R</i> = (1600)(sin 60°)/10 = (1600)(0.866)/10 ≈ 138.6 m." },
            { "q": "[NEET] A projectile launched at 45° has a horizontal range of 80 m. Find its maximum height.", "a": "At 45°, <i>R</i> = 4<i>H</i>, so <i>H</i> = 80/4 = 20 m. No need for u or g at all." },
            { "q": "[JEE Main] A stone is thrown horizontally at 20 m/s from the top of a 45 m tower, <i>g</i> = 10 m/s<sup>2</sup>. Find the time to reach the ground and the horizontal distance from the base.", "a": "<i>T</i> = √(2<i>h</i>/<i>g</i>) = √9 = 3 s, independent of the launch speed. <i>R</i> = (20)(3) = 60 m." },
            { "q": "[JEE Main] A projectile's horizontal range is 3 times its maximum height. Find the angle of projection.", "a": "<i>R</i> = 4<i>H</i> cot θ with <i>R</i> = 3<i>H</i> gives cot θ = 3/4, so tan θ = 4/3 and θ ≈ 53.1°." },
            { "q": "[JEE Advanced] A ball is projected at 30 m/s at 37°, with sin 37° = 0.6, cos 37° = 0.8 and <i>g</i> = 10 m/s<sup>2</sup>. Find the radius of curvature of its path at the highest point.", "a": "At the top the speed is <i>u</i> cos θ = 24 m/s and gravity is entirely perpendicular to it, so <i>a</i><sub>perp</sub> = <i>g</i> = 10 m/s<sup>2</sup> and <i>r</i> = <i>v</i><sup>2</sup>/<i>g</i> = 576/10 = 57.6 m." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Believing the velocity is zero at the top.</b> Only the vertical component vanishes; the horizontal component <i>u</i> cos θ continues untouched. The projectile is at its slowest there, not at rest.",
            "<b>Believing the acceleration is zero at the top.</b> It is always <i>g</i> downward. Velocity and acceleration are independent quantities: one can be partly zero while the other is not.",
            "<b>Letting the two channels leak into each other.</b> Never put a horizontal quantity into a vertical equation. They share the time <i>t</i> and absolutely nothing else.",
            "<b>Mixing the <i>H</i> and <i>R</i> formulas.</b> Height uses sin<sup>2</sup>θ, range uses sin 2θ. They agree only at 45°, which is exactly why the mistake survives so many practice sessions.",
            "<b>Using <i>T</i> = 2<i>u</i> sin θ/<i>g</i> when the landing point is lower.</b> A shot from a tower or a cliff lands below launch level, so the symmetric formulas are void: set <i>y</i> = −<i>h</i> and solve the quadratic instead."
          ]
        },
        {
          "t": "protip",
          "html": "solve every projectile by splitting into two channels, horizontal at constant velocity and vertical in free fall, linked only by t. get the time from the vertical channel, then feed it into the horizontal one for the range. for a shot that lands lower than it started, the quadratic gt² − 2u sin θ t − 2h = 0 gives the flight time, and its discriminant u²sin²θ + 2gh is exactly the square of the vertical impact speed, so one square root answers two questions at once. and when only the impact speed is wanted, skip the flight entirely: v² = u² + 2gh, whatever the launch angle."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "u<sub>x</sub> = u cos θ constant · u<sub>y</sub> = u sin θ, falling at g", "note": "two channels, one clock, and gravity acts on one of them only" },
            { "f": "T = 2u sin θ/g · H = u<sup>2</sup>sin<sup>2</sup>θ/2g · R = u<sup>2</sup>sin 2θ/g", "note": "same launch and landing height only; height takes sin²θ, range takes sin 2θ" },
            { "f": "R<sub>max</sub> = u<sup>2</sup>/g at 45°, and there R = 4H", "note": "θ → 0° and θ → 90° both give R = 0, which brackets the maximum" },
            { "f": "complementary θ and 90° − θ: same R, H<sub>1</sub> + H<sub>2</sub> = u<sup>2</sup>/2g", "note": "R = 4H cot θ converts any one of the three into another" },
            { "f": "horizontal launch from h: T = √(2h/g), R = u√(2h/g)", "note": "the fall time carries no u: fired and dropped land together" }
          ],
          "aids": [
            "\"the horizontal coasts, the vertical falls, time ties them together\"",
            "\"height takes sin squared, range takes sin of twice\""
          ]
        }
      ]
    },
    {
      "n": "05",
      "title": "Relative Velocity in Two Dimensions",
      "chip": "05 RELATIVE MOTION",
      "kalam": "sit in one body's frame and stay there",
      "blocks": [
        {
          "t": "p",
          "html": "You met relative velocity in one dimension in the last chapter: same line, just add or subtract. In a plane it becomes far richer, because the velocities now point in <b>different directions</b> and must be combined as vectors. The governing rule, though, is unchanged: <i>v<sub>AB</sub></i> = <i>v<sub>A</sub></i> − <i>v<sub>B</sub></i>, the velocity of A as seen from B. The only new skill is doing that subtraction as a vector operation, by components or by the triangle law, instead of with signs alone."
        },
        {
          "t": "p",
          "html": "Two real-world problems carry almost everything in this topic. The first is the <b>river-boat problem</b>. A boat's engine drives it at some velocity <i>relative to the water</i>, but the water itself flows relative to the ground. What an observer on the bank sees is the vector sum of the two: <i>v</i>(boat, ground) = <i>v</i>(boat, water) + <i>v</i>(water, ground). That single equation answers every river question there is: how long to cross, where you land, which way to aim."
        },
        {
          "t": "think",
          "html": "picture rowing straight across the Ganga toward a temple on the far bank. you point the boat dead ahead, perpendicular to the flow, and still you drift downstream and land well past the temple. why? because while your oars carry you across, the current simultaneously carries the whole boat downstream, and those two motions are independent, exactly like the x and y motions of the last two topics. to actually reach the temple you must aim upstream at an angle, so your across-velocity still carries you over while your upstream-component exactly cancels the current. there is a genuine trade-off here: aim straight for the least time, or aim upstream for the straightest path. you cannot have both."
        },
        {
          "t": "p",
          "html": "The second classic is the <b>rain-man problem</b>. Rain falling vertically looks slanted to someone walking, which is why you tilt an umbrella <i>forward</i>, into your direction of motion. The rain's velocity relative to you is <i>v</i><sub>rain</sub> − <i>v</i><sub>you</sub>, and the umbrella must point along that relative velocity. Walk faster and the rain appears to come more horizontally, so the tilt goes further forward. Both problems are the same physics, a vector subtraction, wearing different clothes."
        },
        {
          "t": "think",
          "html": "relative velocity also answers a question that looks much harder than it is: how close do two moving objects get? two ships, two cars, an aircraft and a target. sit in one object's frame and it is at rest, so the other simply slides along a straight line at the constant relative velocity. the closest approach is then the perpendicular distance from where you are sitting to that line. a calculus minimisation collapses into a piece of school geometry, and you can usually read the answer off a sketch."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE RULE, AND THE FRAME CHAIN",
          "main": "<i>v<sub>AB</sub></i> = <i>v<sub>A</sub></i> − <i>v<sub>B</sub></i> = −<i>v<sub>BA</sub></i><br><i>v<sub>Ag</sub></i> = <i>v<sub>Ab</sub></i> + <i>v<sub>bg</sub></i>",
          "legend": [
            "every velocity here is in m/s, and all of them must be expressed relative to one common frame, usually the ground, before you combine anything",
            "<i>v<sub>AB</sub></i> reads as the velocity of A as measured by an observer riding on B; reversing the labels reverses the vector",
            "the chain rule for frames: A relative to the ground equals A relative to b plus b relative to the ground, and it is what turns the boat problem into one line"
          ],
          "note": "this is Galilean vector addition, valid at everyday speeds where v is far below c. The subtraction is a full vector subtraction: resolve, subtract componentwise, recombine."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE RIVER-BOAT PROBLEM, BOTH STRATEGIES",
          "tag": "two different headings, two different goals",
          "main": "minimum time: <i>t</i> = <i>d</i>/<i>v<sub>b</sub></i>,  drift = <i>v<sub>r</sub>d</i>/<i>v<sub>b</sub></i>,  <i>v</i><sub>ground</sub> = √(<i>v<sub>b</sub></i><sup>2</sup> + <i>v<sub>r</sub></i><sup>2</sup>)<br>zero drift: sin θ = <i>v<sub>r</sub></i>/<i>v<sub>b</sub></i>,  <i>t</i> = <i>d</i>/√(<i>v<sub>b</sub></i><sup>2</sup> − <i>v<sub>r</sub></i><sup>2</sup>)",
          "legend": [
            "<i>d</i> is the river's width in m, <i>v<sub>b</sub></i> the boat's speed in still water in m/s and <i>v<sub>r</sub></i> the current's speed in m/s",
            "θ is the angle upstream of the straight-across direction that the boat must be steered, a pure number",
            "the zero-drift crossing exists only if <i>v<sub>b</sub></i> > <i>v<sub>r</sub></i>, since sin θ can never exceed 1"
          ],
          "note": "minimum time and shortest path are different strategies needing different headings, and the zero-drift crossing is always the slower of the two. Read which one the question wants before writing anything."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · RAIN-MAN, AND CLOSEST APPROACH",
          "main": "umbrella along <i>v<sub>rm</sub></i> = <i>v<sub>r</sub></i> − <i>v<sub>m</sub></i>,  tan α = <i>v<sub>m</sub></i>/<i>v<sub>r</sub></i><br><i>s</i><sub>min</sub> = |<i>r</i><sub>0</sub> × <i>v</i>| ÷ |<i>v</i>|",
          "legend": [
            "<i>v<sub>r</sub></i> is the rain's speed relative to the ground and <i>v<sub>m</sub></i> the man's walking speed, both in m/s; α is the forward tilt from the vertical, valid for vertical rain and horizontal walking",
            "<i>r</i><sub>0</sub> is the initial position of one body relative to the other, in m, and <i>v</i> their constant relative velocity in m/s",
            "<i>s</i><sub>min</sub> comes out in m and is exactly the perpendicular distance from the stationary body to the straight line the other one traces in its frame"
          ],
          "note": "the tilt is ALWAYS forward, into the walking direction, and the ratio is walking speed over rain speed, never the other way up."
        },
        {
          "t": "proc",
          "title": "The river-boat problem, step by step",
          "steps": [
            "<b>Set axes along and across the current.</b> Let <i>x</i> run downstream, positive, and <i>y</i> run straight across. Every river question then splits into two independent one-dimensional problems.",
            "<b>Write the boat's ground velocity as a vector sum,</b> <i>v</i><sub>bg</sub> = <i>v</i><sub>bw</sub> + <i>v</i><sub>w</sub>, resolving the boat's heading into an across-component and an along-component.",
            "<b>The crossing time depends only on the across-component,</b> because only <i>y</i>-motion covers the width: <i>t</i> = <i>d</i>/(<i>v</i><sub>bg</sub>)<sub><i>y</i></sub>. The current can never change this, which is the independence principle again.",
            "<b>The drift is the net downstream velocity times the crossing time.</b> Compute the two separately and multiply at the end.",
            "<b>Then pick the strategy the question asked for.</b> Minimum time means maximise the across-component, so aim straight across and accept the drift. Zero drift means kill the net <i>x</i>-velocity, so aim upstream with <i>v<sub>b</sub></i> sin θ = <i>v<sub>r</sub></i>, possible only when <i>v<sub>b</sub></i> > <i>v<sub>r</sub></i>."
          ]
        },
        {
          "t": "proc",
          "title": "Rain, wind and closest approach",
          "steps": [
            "<b>Rain: write both velocities in the ground frame first,</b> the rain's <i>v<sub>r</sub></i>, often straight down, and the man's <i>v<sub>m</sub></i>, horizontal.",
            "<b>Subtract to get the apparent rain,</b> <i>v<sub>rm</sub></i> = <i>v<sub>r</sub></i> − <i>v<sub>m</sub></i>, which is the same as adding the reverse of the man's velocity to the rain's. Point the umbrella along that vector, tilted forward.",
            "<b>Wind problems are the same subtraction read backwards.</b> If the wind <i>appears</i> to blow from some direction, that is <i>v</i>(wind, man); recover the true wind from <i>v</i>(wind) = <i>v</i>(wind, man) + <i>v</i>(man). Adding, not subtracting again.",
            "<b>Closest approach: move into one body's frame</b> so it is at rest and the other travels in a straight line at <i>v</i><sub>rel</sub>. Then either drop a perpendicular from the stationary body to that line, or write |<i>r</i><sub>rel</sub>(<i>t</i>)|<sup>2</sup> as a quadratic in <i>t</i> and minimise it.",
            "<b>Check the sign of the answer's time.</b> A negative <i>t</i> means the two were already separating at the start, so the closest approach happened at <i>t</i> = 0 and not later."
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 3.5 · TWO WAYS TO CROSS A RIVER",
          "chips": ["minimum time", "zero drift"],
          "captions": [
            "Aim the boat straight across. The full v_b covers the width, so this is the quickest possible crossing, t = d/v_b. But the current acts the whole time and the boat lands downstream of the target by v_r t. Speed over the ground is √(v_b² + v_r²), faster than the boat can manage in still water, and entirely wasted on going the wrong way.",
            "Aim upstream at angle θ so that v_b sin θ exactly cancels the current. Now the net velocity points straight across and the boat lands directly opposite. Only v_b cos θ = √(v_b² − v_r²) is left to cover the width, so this crossing always takes longer. It is possible only when v_b > v_r."
          ],
          "frames": [
            {
              "x": [0, 10], "y": [0, 6], "axes": "none", "aspect": 0.8,
              "segments": [
                { "from": [0.3, 0.5], "to": [9.7, 0.5] },
                { "from": [0.3, 5], "to": [9.7, 5] }
              ],
              "arrows": [
                { "from": [1.0, 2.75], "to": [2.4, 2.75], "tone": "soft", "label": "vr" },
                { "from": [5.5, 1.4], "to": [6.9, 1.4], "tone": "soft" },
                { "from": [5.5, 4.1], "to": [6.9, 4.1], "tone": "soft" },
                { "from": [2, 0.5], "to": [2, 3.5], "tone": "ink", "label": "vb", "at": "mid" },
                { "from": [2, 0.5], "to": [5.6, 5], "tone": "amber", "label": "vg", "at": "mid" },
                { "from": [2, 5.35], "to": [5.6, 5.35], "head": "both", "tone": "amber", "label": "drift" }
              ],
              "marks": [
                { "x": 2, "y": 0.5, "glyph": "dot", "label": "start" },
                { "x": 5.6, "y": 5, "glyph": "cross", "label": "lands" }
              ]
            },
            {
              "x": [0, 10], "y": [0, 6], "axes": "none", "aspect": 0.8,
              "segments": [
                { "from": [0.3, 0.5], "to": [9.7, 0.5] },
                { "from": [0.3, 5], "to": [9.7, 5] }
              ],
              "arrows": [
                { "from": [5.5, 2.75], "to": [6.9, 2.75], "tone": "soft", "label": "vr" },
                { "from": [5.5, 1.4], "to": [6.9, 1.4], "tone": "soft" },
                { "from": [5.5, 4.1], "to": [6.9, 4.1], "tone": "soft" },
                { "from": [2, 0.5], "to": [0.8, 3.5], "tone": "ink", "label": "vb", "at": "mid" },
                { "from": [2, 0.5], "to": [2, 5], "tone": "amber", "label": "vg", "at": "mid" }
              ],
              "arcs": [{ "at": [2, 0.5], "r": 1.2, "from": 90, "to": 107, "label": "θ" }],
              "marks": [
                { "x": 2, "y": 0.5, "glyph": "dot", "label": "start" },
                { "x": 2, "y": 5, "glyph": "cross", "label": "lands" }
              ]
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · RAIN, AS THE WALKER SEES IT",
          "chips": ["standing still", "walking forward"],
          "captions": [
            "Stand still and the rain that falls vertically arrives vertically. Hold the umbrella straight up and you stay dry.",
            "Start walking and the picture changes, not because the rain changed but because you did. In your own frame you are at rest and the ground rushes backward, so add the reverse of your velocity to the rain's. The apparent rain v_rm slants toward your face, and the umbrella must tilt forward by tan α = v_m/v_r. Walk faster and the tilt grows."
          ],
          "frames": [
            {
              "x": [0, 8], "y": [0, 6], "axes": "none", "aspect": 0.75,
              "bodies": [
                { "kind": "ground", "at": [4, 0.4], "w": 7, "h": 0.3 },
                { "kind": "block", "at": [4, 1.2], "w": 0.6, "h": 1.4, "label": "you" }
              ],
              "arrows": [
                { "from": [2, 5], "to": [2, 2], "tone": "soft" },
                { "from": [4, 5.4], "to": [4, 2.4], "tone": "soft", "label": "vr", "at": "mid" },
                { "from": [6, 5], "to": [6, 2], "tone": "soft" }
              ]
            },
            {
              "x": [0, 8], "y": [0, 6], "axes": "none", "aspect": 0.75,
              "bodies": [
                { "kind": "ground", "at": [4, 0.4], "w": 7, "h": 0.3 },
                { "kind": "block", "at": [5, 1.2], "w": 0.6, "h": 1.4, "label": "you" }
              ],
              "arrows": [
                { "from": [2, 5], "to": [2, 2], "tone": "soft", "label": "vr", "at": "mid" },
                { "from": [2, 2], "to": [0.8, 2], "tone": "soft", "label": "−vm", "at": "below" },
                { "from": [2, 5], "to": [0.8, 2], "tone": "amber", "label": "vrm", "at": "mid" },
                { "from": [5, 1.9], "to": [6.4, 1.9], "tone": "ink", "label": "vm" }
              ],
              "arcs": [{ "at": [2, 5], "r": 1.0, "from": 248.2, "to": 270, "label": "α" }]
            }
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A river is 100 m wide and flows at 3 m/s. A boat that can move at 5 m/s in still water is steered straight across, perpendicular to the bank. Find the time to cross, how far downstream it drifts, and its speed relative to the ground.",
          "steps": [
            "Only the across-velocity covers the width, and with the boat aimed straight across that is the full 5 m/s: <i>t</i> = <i>d</i>/<i>v<sub>b</sub></i> = 100/5 = 20 s.",
            "During those 20 s the current carries the boat downstream at 3 m/s: drift = (3)(20) = 60 m.",
            "The ground velocity is the vector sum of two perpendicular parts: <i>v</i><sub>ground</sub> = √(5<sup>2</sup> + 3<sup>2</sup>) = √34 ≈ 5.83 m/s.",
            "Note what the current did and did not do. It did not slow the crossing at all, because it acts only along <i>x</i> and the width is covered in <i>y</i>. The price of the shortest crossing time is a 60 m drift."
          ],
          "ans": "t = 20 s · drift 60 m · v(ground) ≈ 5.83 m/s"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "Rain is falling vertically at 4 m/s. A man walks horizontally at 3 m/s. At what angle to the vertical should he tilt his umbrella: 37° forward, 53° forward, 37° backward, or 90°?",
          "steps": [
            "Two traps sit in this question. One is tilting the umbrella backward, against the motion, which would leave him completely exposed. The other is inverting the ratio to tan α = <i>v<sub>r</sub></i>/<i>v<sub>m</sub></i>, which gives 53° instead.",
            "The umbrella points along the rain's velocity relative to the man, and that vector tilts <b>forward</b>, into the walking direction.",
            "tan α = <i>v<sub>m</sub></i>/<i>v<sub>r</sub></i> = 3/4 = 0.75, so α = 37° forward of the vertical.",
            "Speed cue: always forward, and the ratio is walking speed over rain speed. The faster you walk the more the rain seems to come at your face, which is the physical check on which way the ratio must go."
          ],
          "ans": "37° forward of the vertical"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "A river is 80 m wide and flows at 6 m/s. A boat moves at 10 m/s in still water. The boatman wants to reach the point directly opposite his start. In which direction must he steer, and how long does the crossing take?",
          "steps": [
            "To land directly opposite, the net downstream velocity must be zero, so the boat's upstream component has to cancel the current exactly.",
            "Aiming upstream at angle θ from the straight-across direction: <i>v<sub>b</sub></i> sin θ = <i>v<sub>r</sub></i>, so sin θ = 6/10 = 0.6 and θ = 37° upstream of straight-across.",
            "What is left to cover the width is <i>v</i><sub>across</sub> = <i>v<sub>b</sub></i> cos θ = √(100 − 36) = √64 = 8 m/s.",
            "<i>t</i> = <i>d</i>/<i>v</i><sub>across</sub> = 80/8 = 10 s. Compare with the minimum-time route, 80/10 = 8 s: arriving with zero drift costs 2 extra seconds, and that trade-off is the whole point of the topic."
          ],
          "ans": "steer 37° upstream of straight-across · t = 10 s"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "Ship A sails due north at 10 km/h. At a certain instant, ship B is 20 km due east of A and sails due west at 10 km/h. Find the time of closest approach and the minimum distance between the ships.",
          "steps": [
            "Work in A's frame, where A is at rest and B slides along a straight line at the relative velocity. Take east as +<i>x</i> and north as +<i>y</i>, with A at the origin at <i>t</i> = 0.",
            "<i>v<sub>A</sub></i> = (0, 10) and <i>v<sub>B</sub></i> = (−10, 0), so <i>v<sub>BA</sub></i> = <i>v<sub>B</sub></i> − <i>v<sub>A</sub></i> = (−10, −10) km/h, pointing south-west. B's initial position relative to A is <i>r</i><sub>0</sub> = (20, 0) km.",
            "Position of B relative to A at time <i>t</i> in hours: <i>r</i>(<i>t</i>) = (20 − 10<i>t</i>, −10<i>t</i>). Separation squared: <i>s</i><sup>2</sup> = (20 − 10<i>t</i>)<sup>2</sup> + (10<i>t</i>)<sup>2</sup> = 200<i>t</i><sup>2</sup> − 400<i>t</i> + 400.",
            "Minimise: d(<i>s</i><sup>2</sup>)/d<i>t</i> = 400<i>t</i> − 400 = 0, so <i>t</i> = 1 h, and the coefficient of <i>t</i><sup>2</sup> is positive so this is a minimum, not a maximum.",
            "At <i>t</i> = 1 h: <i>r</i> = (10, −10), so <i>s</i><sub>min</sub> = √200 = 10√2 ≈ 14.1 km. Geometric check, no calculus: <i>s</i><sub>min</sub> = |<i>r</i><sub>0</sub> × <i>v</i>|/|<i>v</i>| = |(20)(−10) − (0)(−10)|/√200 = 200/(10√2) = 10√2. Same answer in one line, and the ships never collide."
          ],
          "ans": "t = 1 h · s(min) = 10√2 ≈ 14.1 km"
        },
        {
          "t": "mcq",
          "q": "A boat is steered straight across a flowing river. Compared with the same crossing in still water, its time to cross is:",
          "opts": [
            { "label": "longer", "nudge": "This assumes the current fights the crossing. It does not: the current acts along the bank and the width is covered across it." },
            { "label": "shorter", "nudge": "The current cannot help either. It has no component in the across direction at all." },
            { "label": "the same", "nudge": null },
            { "label": "zero", "nudge": "Nonsensical: the boat still has a finite width to cover at a finite speed." }
          ],
          "correct": 2,
          "solution": "The current acts purely downstream and does nothing to the across-component, so the crossing time d/v_b is unchanged. The current causes drift, not delay. This is the independence of perpendicular motions, applied to a boat."
        },
        {
          "t": "mcq",
          "q": "To cross a river and land at the point directly opposite the start, the boat's speed in still water must be:",
          "opts": [
            { "label": "less than the current speed", "nudge": "Then the boat cannot fully oppose the drift no matter how it is steered, and it must land downstream." },
            { "label": "equal to the current speed", "nudge": "Equality forces θ = 90°, heading straight upstream, which gives zero across-progress: the boat holds station and never crosses." },
            { "label": "greater than the current speed", "nudge": null },
            { "label": "exactly zero", "nudge": "A boat with zero speed relative to the water simply floats downstream." }
          ],
          "correct": 2,
          "solution": "Cancelling the drift needs v_b sin θ = v_r, and sin θ ≤ 1, so a solution exists only if v_b > v_r. When it does not, the best available strategy shifts to minimising the drift rather than removing it."
        },
        {
          "t": "mcq",
          "q": "Two objects move with the same constant velocity in the same direction. The velocity of one relative to the other is:",
          "opts": [
            { "label": "double their speed", "nudge": "Doubling belongs to the opposite-direction case, where the two velocities reinforce instead of cancelling." },
            { "label": "zero", "nudge": null },
            { "label": "equal to their speed", "nudge": "That would need one of them to be at rest in the ground frame." },
            { "label": "perpendicular to their motion", "nudge": "Subtracting two parallel vectors can only give a parallel result, never a perpendicular one." }
          ],
          "correct": 1,
          "solution": "v_AB = v_A − v_B = 0 when the two velocities are identical, so each sees the other as stationary. It is why two vehicles cruising side by side at the same speed appear motionless to each other."
        },
        {
          "t": "mcq",
          "q": "A man walking east at 5 m/s finds that the wind appears to blow from the north at 5 m/s. The true velocity of the wind is:",
          "opts": [
            { "label": "5 m/s toward the south", "nudge": "This is the apparent wind, what the walking man measures, not the wind's velocity in the ground frame." },
            { "label": "5√2 ≈ 7.07 m/s toward the south-east", "nudge": null },
            { "label": "5√2 ≈ 7.07 m/s toward the south-west", "nudge": "This subtracts the man's velocity a second time instead of adding it back. Recovering the true wind from the apparent one is an addition." },
            { "label": "5 m/s toward the east", "nudge": "That is the man's own velocity, not the wind's." }
          ],
          "correct": 1,
          "solution": "Blowing from the north means the apparent wind travels southward, so v(wind, man) = (0, −5) m/s. Since v(wind, man) = v(wind) − v(man), v(wind) = (0, −5) + (5, 0) = (5, −5) m/s, of magnitude 5√2 ≈ 7.07 m/s pointing south-east, that is, a wind blowing from the north-west."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] A 120 m wide river flows at 4 m/s. A swimmer who manages 3 m/s in still water heads straight across. Find the time to cross and the downstream drift.", "a": "Only the 3 m/s covers the width, so <i>t</i> = 120/3 = 40 s, and drift = (4)(40) = 160 m. Note the swimmer is slower than the current, so a zero-drift crossing is impossible for her at any heading." },
            { "q": "[NEET] Rain falls vertically at 10 m/s. A cyclist rides at 10 m/s. Find the angle from the vertical at which she should hold her umbrella.", "a": "tan α = <i>v<sub>m</sub></i>/<i>v<sub>r</sub></i> = 10/10 = 1, so α = 45° forward of the vertical." },
            { "q": "[JEE Main] A boat moving at 13 m/s in still water must cross a 60 m river flowing at 5 m/s and land directly opposite. Find the steering angle from straight-across and the crossing time.", "a": "sin θ = 5/13 ≈ 0.385, so θ ≈ 22.6° upstream. <i>v</i><sub>across</sub> = √(169 − 25) = 12 m/s, so <i>t</i> = 60/12 = 5 s." },
            { "q": "[JEE Main] To a man walking east at 5 m/s, the wind appears to blow from the north at 5 m/s. Find the actual velocity of the wind, magnitude and direction.", "a": "Apparent wind travels south: <i>v</i>(wind, man) = −5ĵ. So <i>v</i>(wind) = −5ĵ + 5î = 5î − 5ĵ m/s, magnitude 5√2 ≈ 7.07 m/s, directed toward the south-east, which means it blows <b>from</b> the north-west." },
            { "q": "[JEE Advanced] Car A moves east at 20 m/s; car B, initially 100 m north of A, moves south at 20 m/s. Find their closest approach distance and when it occurs.", "a": "<i>v</i><sub>rel</sub> = <i>v<sub>B</sub></i> − <i>v<sub>A</sub></i> = (−20, −20) m/s and <i>r</i><sub>0</sub> = (0, 100) m. Then <i>s</i><sup>2</sup> = 800<i>t</i><sup>2</sup> − 4000<i>t</i> + 10000, minimised at <i>t</i> = 2.5 s, giving <i>s</i><sup>2</sup> = 5000 and <i>s</i><sub>min</sub> = 50√2 ≈ 70.7 m." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Confusing minimum time with shortest path.</b> Aiming straight across minimises the time but drifts; aiming upstream gives zero drift but takes longer. They need different headings, so read which one the question actually asks for.",
            "<b>Tilting the umbrella backward.</b> It always tilts <b>forward</b>, into the direction of motion, along the rain's velocity relative to you. Backward would leave you completely exposed.",
            "<b>Inverting the rain-angle ratio.</b> For vertical rain and horizontal walking, tan α = <i>v<sub>m</sub></i>/<i>v<sub>r</sub></i>, walking over rain, measured from the vertical. The inverted version is always one of the four options.",
            "<b>Thinking the current changes the crossing time.</b> For a straight-across heading it does not; the downstream flow only produces drift.",
            "<b>Mixing reference frames mid-solution.</b> Express every velocity relative to one common frame, usually the ground, before adding or subtracting. The chain <i>v<sub>Ag</sub></i> = <i>v<sub>Ab</sub></i> + <i>v<sub>bg</sub></i> keeps the bookkeeping honest."
          ]
        },
        {
          "t": "protip",
          "html": "set up clean perpendicular axes, along the current and across the river, and the boat problem splits into two independent 1-D problems: the across-component sets the crossing time, the downstream-component sets the drift. for closest approach, jump into one body's frame so the other moves in a straight line, then it is pure geometry, s = |r<sub>0</sub> × v|/|v|, four lines and no derivatives. and when the current beats the boat, v<sub>b</sub> ≤ v<sub>r</sub>, zero drift is out of reach, but the drift is smallest at sin θ = v<sub>b</sub>/v<sub>r</sub>, giving x<sub>min</sub> = d√(v<sub>r</sub>² − v<sub>b</sub>²)/v<sub>b</sub>. watch what happens as v<sub>r</sub> approaches v<sub>b</sub>: the drift goes to zero and the crossing time goes to infinity. both limits are correct, and together they say you can hold station against an equal current for ever and cross it never."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "v<sub>AB</sub> = v<sub>A</sub> − v<sub>B</sub> = −v<sub>BA</sub>", "note": "a full vector subtraction; chain frames with v<sub>Ag</sub> = v<sub>Ab</sub> + v<sub>bg</sub>" },
            { "f": "straight across: t = d/v<sub>b</sub>, drift = v<sub>r</sub>d/v<sub>b</sub>", "note": "the fastest crossing, and the current costs you distance not time" },
            { "f": "land opposite: sin θ = v<sub>r</sub>/v<sub>b</sub>, t = d/√(v<sub>b</sub><sup>2</sup> − v<sub>r</sub><sup>2</sup>)", "note": "always slower, and only possible when v<sub>b</sub> > v<sub>r</sub>" },
            { "f": "umbrella along v<sub>r</sub> − v<sub>m</sub>, tan α = v<sub>m</sub>/v<sub>r</sub>", "note": "forward from the vertical, walking speed over rain speed" },
            { "f": "closest approach s = |r<sub>0</sub> × v|/|v|", "note": "perpendicular distance to the relative-velocity line, no calculus needed" }
          ],
          "aids": [
            "\"straight across for least time, angled upstream for no drift\"",
            "\"one frame for the whole problem, and the umbrella always tilts forward\""
          ]
        }
      ]
    },
    {
      "n": "06",
      "title": "Circular Motion Dynamics",
      "chip": "06 CIRCULAR MOTION",
      "kalam": "name the real force before you write a single equation",
      "blocks": [
        {
          "t": "p",
          "html": "Swing a stone tied to a string in a horizontal circle at a steady rate. Its <b>speed</b> is constant, and yet the stone is <b>accelerating</b> the entire time. How can both be true? Because velocity is a vector, and acceleration responds to <i>any</i> change in that vector, including a change of direction and not only a change of size. The stone's direction of motion changes every instant, so its velocity changes every instant, so it must be accelerating, even with the speedometer frozen."
        },
        {
          "t": "p",
          "html": "Which way does that acceleration point? Toward the <b>centre</b> of the circle. It is called <b>centripetal acceleration</b>, Latin for centre-seeking. And by Newton's second law an acceleration toward the centre demands a <b>force</b> toward the centre, the centripetal force. Stated bluntly: circular motion is impossible without a real, inward force. The string's tension supplies it for the whirling stone, friction for a car rounding a bend, gravity for a satellite, the road's normal force on a banked turn. Remove that inward force and the object obeys Newton's first law and flies off in a straight line along the <b>tangent</b>, not outward along the radius."
        },
        {
          "t": "think",
          "html": "picture a ball on a string being whirled overhead. people imagine that if you let go it shoots straight outward, away from your hand. it does not. the instant you release it the inward pull vanishes and the stone simply continues in the straight line it was already travelling, the tangent, like mud flinging off a spinning bicycle tyre, always sideways and never radially out. the famous outward feeling you sense while spinning is the centrifugal force, and it is not a real force at all, it is an artefact of sitting in a rotating frame. in the honest ground-frame view there is exactly one force here and it points inward."
        },
        {
          "t": "def",
          "term": "Centripetal force is a job description, not a new force",
          "html": "There is no such thing as a separate centripetal force in nature, alongside gravity and friction and tension. <b>Centripetal force is the name for whatever net inward force the real forces happen to add up to.</b> On a free-body diagram you never draw an arrow labelled centripetal; you draw the tension, the friction, the weight, the normal force, and then you resolve them along the radius and set that sum equal to <i>mv</i><sup>2</sup>/<i>r</i>. Every circular-motion problem opens with the same question: <b>which real force is supplying the centripetal requirement here?</b> And <b>centrifugal force is a pseudo-force</b>, valid only inside a rotating, non-inertial frame; it has no place in a ground-frame free-body diagram at all."
        },
        {
          "t": "defgrid",
          "title": "The angular quantities, and their linear mirrors",
          "rows": [
            { "k": "Angular displacement", "v": "θ, the angle swept, in <b>radians</b>, dimensionless. Linear mirror: arc length <i>s</i> = <i>rθ</i> in m" },
            { "k": "Angular velocity", "v": "ω = <i>dθ</i>/<i>dt</i> in rad/s. Linear mirror: <i>v</i> = ω<i>r</i> in m/s" },
            { "k": "Angular acceleration", "v": "α = <i>d</i>ω/<i>dt</i> in rad/s<sup>2</sup>. Linear mirror: <i>a<sub>t</sub></i> = α<i>r</i> in m/s<sup>2</sup>" },
            { "k": "Period and frequency", "v": "<i>T</i> in s, <i>f</i> = 1/<i>T</i> in Hz. ω = 2π/<i>T</i> = 2π<i>f</i>" },
            { "k": "Uniform circular motion", "v": "speed constant, so ω constant and α = 0. Only the centripetal acceleration acts" },
            { "k": "Non-uniform", "v": "speed also changing, so there is a tangential acceleration <i>a<sub>t</sub></i> as well as the centripetal <i>a<sub>c</sub></i>" }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · CENTRIPETAL ACCELERATION AND FORCE",
          "tag": "three forms of one quantity",
          "main": "<i>a<sub>c</sub></i> = <i>v</i><sup>2</sup>/<i>r</i> = ω<sup>2</sup><i>r</i> = <i>v</i>ω<br><i>F<sub>c</sub></i> = <i>mv</i><sup>2</sup>/<i>r</i> = <i>m</i>ω<sup>2</sup><i>r</i>",
          "legend": [
            "<i>v</i> is the speed in m/s, ω the angular speed in rad/s and <i>r</i> the radius in m, so <i>a<sub>c</sub></i> comes out in m/s<sup>2</sup>",
            "<i>m</i> is the mass in kg, so <i>F<sub>c</sub></i> is in N. Both point toward the centre at every instant",
            "the three forms are interchangeable through <i>v</i> = ω<i>r</i>; pick whichever the question hands you"
          ],
          "note": "note the square. Both a_c and F_c go as v², so doubling the speed on a fixed bend quadruples the force the road must supply, which is exactly why cornering too fast is so dangerous."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE ANGULAR EQUATIONS AND THE TWO ACCELERATIONS",
          "main": "ω = ω<sub>0</sub> + α<i>t</i>,  θ = ω<sub>0</sub><i>t</i> + ½α<i>t</i><sup>2</sup>,  ω<sup>2</sup> = ω<sub>0</sub><sup>2</sup> + 2αθ<br><i>a<sub>t</sub></i> = α<i>r</i>,  <i>a<sub>c</sub></i> = <i>v</i><sup>2</sup>/<i>r</i>,  <i>a</i> = √(<i>a<sub>t</sub></i><sup>2</sup> + <i>a<sub>c</sub></i><sup>2</sup>)",
          "legend": [
            "ω<sub>0</sub> and ω are the initial and final angular speeds in rad/s, α the constant angular acceleration in rad/s<sup>2</sup>, θ the angle swept in rad and <i>t</i> the time in s",
            "<i>a<sub>t</sub></i> is the tangential acceleration in m/s<sup>2</sup>, which changes the speed; <i>a<sub>c</sub></i> is the radial one, which changes the direction",
            "the two are perpendicular by construction, so they combine by Pythagoras into the net acceleration <i>a</i>"
          ],
          "note": "the three angular equations are the exact analogues of v = u + at and its siblings, and they carry the same expiry: constant α only. Set α = 0 and they collapse to θ = ωt, uniform circular motion."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · TAKING A BEND, FLAT OR BANKED",
          "main": "unbanked, friction only: <i>v</i><sub>max</sub> = √(μ<i>rg</i>)<br>banked, frictionless: tan θ = <i>v</i><sup>2</sup>/<i>rg</i>",
          "legend": [
            "μ is the coefficient of static friction, dimensionless; <i>r</i> is the radius of the bend in m and <i>g</i> = 9.8 m/s<sup>2</sup>",
            "<i>v</i><sub>max</sub> is in m/s and θ is the banking angle of the road surface to the horizontal, a pure number",
            "the mass cancels out of both, so the safe speed does not depend on how heavy the vehicle is"
          ],
          "note": "on a flat road friction alone must supply mv²/r, and friction runs out. On a banked road the inward component of the normal force does the work instead, so a car can corner safely even with no friction at all."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · CENTRIPETAL ACCELERATION, TAP A LINE",
          "steps": [
            {
              "eq": "first the link <i>v</i> = ω<i>r</i>: differentiate <i>s</i> = <i>rθ</i> with <i>r</i> constant, giving <i>v</i> = <i>ds</i>/<i>dt</i> = <i>r</i>(<i>dθ</i>/<i>dt</i>) = <i>r</i>ω",
              "why": "The arc-length relation s = rθ is the definition of radian measure from trigonometry, quoted, not re-established. Differentiating it once is the whole proof."
            },
            {
              "eq": "in a small time Δ<i>t</i> the particle moves from <i>P</i> to <i>Q</i>, turning through Δθ; the velocity turns through the same Δθ",
              "why": "The velocity is always tangent to the circle, and a tangent turns by exactly the angle its radius turns by. That is what ties the geometry of the path to the geometry of the velocity change."
            },
            {
              "eq": "draw <i>v</i><sub>1</sub> and <i>v</i><sub>2</sub> tail to tail; equal lengths <i>v</i> with angle Δθ between them, so |Δ<i>v</i>| = <i>v</i>Δθ for small Δθ",
              "why": "The speed being constant is exactly why this triangle is isosceles. For a small angle the third side of an isosceles triangle is the arc it subtends, length v Δθ."
            },
            {
              "eq": "<i>a<sub>c</sub></i> = lim(Δ<i>t</i> → 0) |Δ<i>v</i>|/Δ<i>t</i> = lim(Δ<i>t</i> → 0) <i>v</i>Δθ/Δ<i>t</i> = <i>v</i>ω",
              "why": "Taking the limit converts an average rate into the instantaneous acceleration, and Δθ/Δt becomes ω by definition. As Δt shrinks, Δv turns perpendicular to the velocity and points at the centre, which is where the name centripetal comes from."
            },
            {
              "eq": "using <i>v</i> = ω<i>r</i>: <i>a<sub>c</sub></i> = <i>v</i>ω = <i>v</i><sup>2</sup>/<i>r</i> = ω<sup>2</sup><i>r</i>, and <i>F<sub>c</sub></i> = <i>ma<sub>c</sub></i> = <i>mv</i><sup>2</sup>/<i>r</i>",
              "why": "One substitution turns the single result into the three familiar forms. Multiplying by mass gives the force, directed toward the centre, and Newton's second law does the rest."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 3.6 · WHY THE ACCELERATION POINTS INWARD",
          "chips": ["the circle", "the velocity triangle"],
          "captions": [
            "The particle runs from P to Q, and the radii OP and OQ subtend the small angle Δθ at the centre. Both speeds equal v; only the direction has changed. Because the velocity is tangent at each point, it has turned through exactly the same Δθ as the radius.",
            "Now lift v₁ and v₂ off the circle and draw them tail to tail. Equal lengths with Δθ between them make an isosceles triangle whose third side is Δv = v₂ − v₁, of length v Δθ for a small angle. Notice where that third side points: toward O. Divide by Δt and take the limit and you have a_c = vω = v²/r, aimed at the centre."
          ],
          "frames": [
            {
              "x": [-1.6, 1.6], "y": [-1.6, 1.6], "axes": "none", "aspect": 1.0,
              "curves": [{ "c": "circle", "r": 1 }],
              "segments": [
                { "from": [0, 0], "to": [-0.5, 0.866], "dash": true, "soft": true },
                { "from": [0, 0], "to": [0.5, 0.866], "dash": true, "soft": true }
              ],
              "arrows": [
                { "from": [-0.5, 0.866], "to": [0.106, 1.216], "tone": "ink", "label": "v₁", "at": "end" },
                { "from": [0.5, 0.866], "to": [1.106, 0.516], "tone": "ink", "label": "v₂", "at": "end" }
              ],
              "arcs": [{ "at": [0, 0], "r": 0.35, "from": 60, "to": 120, "label": "Δθ" }],
              "marks": [
                { "x": 0, "y": 0, "glyph": "dot", "label": "O" },
                { "x": -0.5, "y": 0.866, "glyph": "dot", "label": "P" },
                { "x": 0.5, "y": 0.866, "glyph": "dot", "label": "Q" }
              ]
            },
            {
              "x": [-1.6, 1.6], "y": [-1.6, 1.6], "axes": "none", "aspect": 1.0,
              "arrows": [
                { "from": [-0.8, 0.5], "to": [0.412, 1.2], "tone": "ink", "label": "v₁", "at": "end" },
                { "from": [-0.8, 0.5], "to": [0.412, -0.2], "tone": "ink", "label": "v₂", "at": "end" },
                { "from": [0.412, 1.2], "to": [0.412, -0.2], "tone": "amber", "label": "Δv", "at": "mid" }
              ],
              "arcs": [{ "at": [-0.8, 0.5], "r": 0.45, "from": -30, "to": 30, "label": "Δθ" }],
              "labels": [{ "x": 0.9, "y": -0.9, "text": "toward O", "soft": true }]
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · ONE ACCELERATION OR TWO",
          "chips": ["uniform: only a_c", "non-uniform: a_t as well"],
          "captions": [
            "Uniform circular motion. The speed never changes, so nothing acts along the direction of travel. The only acceleration is a_c, aimed squarely at the centre, and the velocity stays exactly perpendicular to it.",
            "Now let the speed change too. A tangential acceleration a_t appears along the velocity, doing the speeding up, while a_c keeps pointing inward, doing the turning. The two are perpendicular, so the net acceleration is √(a_t² + a_c²), tilted forward from the radius. Once the particle is fast the centripetal part dominates and the net acceleration points almost straight at the centre."
          ],
          "frames": [
            {
              "x": [-1.6, 1.6], "y": [-1.6, 1.6], "axes": "none", "aspect": 1.0,
              "curves": [{ "c": "circle", "r": 1 }],
              "arrows": [
                { "from": [0.866, 0.5], "to": [0.516, 1.106], "tone": "ink", "label": "v", "at": "end" },
                { "from": [0.866, 0.5], "to": [0.216, 0.125], "tone": "amber", "label": "ac", "at": "end" }
              ],
              "marks": [{ "x": 0, "y": 0, "glyph": "dot", "label": "O" }]
            },
            {
              "x": [-1.6, 1.6], "y": [-1.6, 1.6], "axes": "none", "aspect": 1.0,
              "curves": [{ "c": "circle", "r": 1 }],
              "arrows": [
                { "from": [0.866, 0.5], "to": [0.591, 0.976], "tone": "ink", "label": "at", "at": "end" },
                { "from": [0.866, 0.5], "to": [0.216, 0.125], "tone": "ink", "label": "ac", "at": "end" },
                { "from": [0.866, 0.5], "to": [-0.059, 0.601], "tone": "amber", "label": "a", "at": "mid" }
              ],
              "arcs": [{ "at": [0.866, 0.5], "r": 0.18, "from": 210, "to": 120, "right": true, "tone": "soft" }],
              "marks": [{ "x": 0, "y": 0, "glyph": "dot", "label": "O" }]
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 3.7 · WHY ROADS ARE BANKED",
          "chips": ["the free-body diagram on a bank"],
          "captions": [
            "The road is tilted at θ, with the centre of the turn away to the left. Two forces act on the car: its weight mg straight down, and the normal force N perpendicular to the road surface. Because the surface is tilted, N is tilted too, and it splits into N cos θ, which balances the weight, and N sin θ, which points horizontally toward the centre and supplies the whole centripetal requirement. Divide the two equations and both N and m cancel, leaving tan θ = v²/rg. The road itself does the cornering, so a car can hold the bend with no friction at all."
          ],
          "frames": [
            {
              "x": [0, 10], "y": [-0.5, 5], "axes": "none",
              "bodies": [{ "kind": "incline", "at": [2, 0.6], "w": 6, "h": 2.2 }],
              "arrows": [
                { "from": [5.3, 1.81], "to": [5.3, 0.55], "tone": "ink", "label": "mg", "at": "mid" },
                { "from": [5.3, 1.81], "to": [4.029, 3.858], "tone": "amber", "label": "N", "at": "start" },
                { "from": [2.2, 3.9], "to": [0.7, 3.9], "tone": "soft" }
              ],
              "segments": [
                { "from": [5.3, 1.81], "to": [5.3, 3.858], "dash": true, "soft": true, "label": "N cos θ" },
                { "from": [5.3, 3.858], "to": [4.029, 3.858], "dash": true, "soft": true, "label": "N sin θ" }
              ],
              "arcs": [{ "at": [2, 0.6], "r": 1.0, "from": 0, "to": 25.5, "label": "θ" }],
              "marks": [{ "x": 5.3, "y": 1.81, "glyph": "square", "label": "car" }],
              "labels": [{ "x": 2.2, "y": 4.3, "text": "centre of the turn", "soft": true }]
            }
          ]
        },
        {
          "t": "proc",
          "title": "Every circular-motion problem, in four moves",
          "steps": [
            "<b>Name the real force supplying the inward pull.</b> Tension, friction, gravity, the normal force, or a combination of them. Never write centripetal force on the diagram; write the physical force that is doing the job.",
            "<b>Draw the free-body diagram in the ground frame,</b> and resolve every force into a radial component, toward or away from the centre, and a perpendicular one. No centrifugal arrow anywhere.",
            "<b>Set the net inward force equal to <i>mv</i><sup>2</sup>/<i>r</i>,</b> and write the balance in the perpendicular direction separately. Two equations, and dividing one by the other usually eliminates the unknown normal force and the mass at once.",
            "<b>Work every angle in radians</b> before using <i>v</i> = ω<i>r</i> or <i>a<sub>t</sub></i> = α<i>r</i>, and check the limiting cases: μ = 0 must return the frictionless design speed, θ = 0 must return the flat-road result."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A particle of mass 0.5 kg moves in a horizontal circle of radius 2 m with a constant angular speed of 3 rad/s. Find its linear speed, its centripetal acceleration, and the centripetal force acting on it.",
          "steps": [
            "<i>v</i> = ω<i>r</i> = (3)(2) = 6 m/s. The angular speed is already in rad/s, which is what this relation demands.",
            "<i>a<sub>c</sub></i> = ω<sup>2</sup><i>r</i> = (9)(2) = 18 m/s<sup>2</sup>, directed toward the centre. Cross-check with the other form: <i>v</i><sup>2</sup>/<i>r</i> = 36/2 = 18 m/s<sup>2</sup>, the same number.",
            "<i>F<sub>c</sub></i> = <i>ma<sub>c</sub></i> = (0.5)(18) = 9 N, also toward the centre.",
            "That 9 N is not a new kind of force: it is whatever the string tension actually is, and the string is what is supplying it."
          ],
          "ans": "v = 6 m/s · a<sub>c</sub> = 18 m/s<sup>2</sup> · F<sub>c</sub> = 9 N, all directed toward the centre"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "A car rounds a circular curve of fixed radius. If its speed is doubled, the centripetal force required to keep it on the curve becomes: half, double, four times, or unchanged?",
          "steps": [
            "Double the speed, double the force feels right and is the trap. The force depends on the <b>square</b> of the speed, not on the speed.",
            "<i>F<sub>c</sub></i> = <i>mv</i><sup>2</sup>/<i>r</i> ∝ <i>v</i><sup>2</sup> at fixed <i>r</i>, so doubling <i>v</i> multiplies <i>F<sub>c</sub></i> by 2<sup>2</sup> = 4.",
            "Speed cue: this is the same v² scaling as braking distance. Whenever a quantity goes as v², doubling the speed quadruples it. It is also exactly why taking a bend too fast is so dangerous: the friction needed quadruples while the friction available does not move at all."
          ],
          "ans": "four times"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "A particle moves in a circle of radius 0.5 m, starting from rest, with its speed increasing uniformly at 4 m/s<sup>2</sup>. At <i>t</i> = 1 s, find its tangential acceleration, its centripetal acceleration, and the magnitude of its net acceleration.",
          "steps": [
            "Speed increasing at 4 m/s<sup>2</sup> <i>is</i> the tangential acceleration: <i>a<sub>t</sub></i> = 4 m/s<sup>2</sup>, constant, along the direction of motion. From rest, the speed at <i>t</i> = 1 s is <i>v</i> = (4)(1) = 4 m/s.",
            "<i>a<sub>c</sub></i> = <i>v</i><sup>2</sup>/<i>r</i> = 16/0.5 = 32 m/s<sup>2</sup>, toward the centre. Note it did not exist at <i>t</i> = 0, when the particle was at rest, and it has grown as the square of the speed.",
            "The two are perpendicular, so <i>a</i> = √(<i>a<sub>t</sub></i><sup>2</sup> + <i>a<sub>c</sub></i><sup>2</sup>) = √(16 + 1024) = √1040 ≈ 32.2 m/s<sup>2</sup>.",
            "The centripetal part dominates once the particle is moving quickly, so the net acceleration points almost straight at the centre, tilted only slightly forward by the small tangential part."
          ],
          "ans": "a<sub>t</sub> = 4 m/s<sup>2</sup> · a<sub>c</sub> = 32 m/s<sup>2</sup> · a ≈ 32.2 m/s<sup>2</sup>"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "A car of mass 1000 kg negotiates a circular turn of radius 50 m, <i>g</i> = 10 m/s<sup>2</sup>. On a flat road with coefficient of friction μ = 0.5, find the maximum speed for a safe turn. Then, with the road instead banked and frictionless for a design speed of 15 m/s, find the required banking angle.",
          "steps": [
            "Flat road: friction alone supplies the centripetal force, and at the limit of safety it is maximal, μ<i>mg</i> = <i>mv</i><sub>max</sub><sup>2</sup>/<i>r</i>.",
            "<i>v</i><sub>max</sub> = √(μ<i>rg</i>) = √((0.5)(50)(10)) = √250 ≈ 15.8 m/s. The mass cancelled, so a loaded truck and an empty hatchback have the same safe speed on the same bend.",
            "Banked and frictionless: the normal force tilts inward. Radially, <i>N</i> sin θ = <i>mv</i><sup>2</sup>/<i>r</i>. Vertically, <i>N</i> cos θ = <i>mg</i>.",
            "Dividing the first by the second eliminates both <i>N</i> and <i>m</i>: tan θ = <i>v</i><sup>2</sup>/<i>rg</i> = 225/500 = 0.45, so θ = tan<sup>−1</sup>(0.45) ≈ 24.2°.",
            "Two independent mechanisms, two different jobs. Friction runs out at 15.8 m/s; geometry alone holds the car at 15 m/s with nothing to spare and nothing needed. Put both on the same road and the safe band widens upward, which is the entire engineering point of banking a highway curve."
          ],
          "ans": "v<sub>max</sub> ≈ 15.8 m/s on the flat road · banking angle θ ≈ 24.2°"
        },
        {
          "t": "mcq",
          "q": "In uniform circular motion, which of the following remains constant?",
          "opts": [
            { "label": "velocity", "nudge": "The velocity's direction changes every instant, and a vector is constant only if both its size and its direction are." },
            { "label": "acceleration", "nudge": "The acceleration has a constant magnitude but its direction, always toward the centre, keeps rotating, so the acceleration vector is not constant." },
            { "label": "speed", "nudge": null },
            { "label": "the direction of the centripetal force", "nudge": "That direction points at the centre, which rotates continuously as the particle moves round." }
          ],
          "correct": 2,
          "solution": "The speed, the magnitude of the velocity, is constant by the definition of uniform circular motion. Everything else here is a vector whose direction is turning, so only the scalar speed is truly fixed."
        },
        {
          "t": "mcq",
          "q": "A stone is whirled in a horizontal circle at the end of a string. If the string suddenly breaks, the stone flies off:",
          "opts": [
            { "label": "radially outward", "nudge": "The single most common wrong answer, born of the centrifugal illusion. Nothing was ever pushing the stone outward, so nothing can send it that way." },
            { "label": "along the tangent to the circle", "nudge": null },
            { "label": "toward the centre", "nudge": "That would need a force that no longer exists; the tension was the only inward force and it has just vanished." },
            { "label": "spiralling outward", "nudge": "A spiral needs a continuing force. Once every force is removed the path can only be a straight line." }
          ],
          "correct": 1,
          "solution": "With the inward force gone, Newton's first law takes over and the stone continues in the straight line it was already travelling, which is the tangent at the instant of release. Mud flying off a bicycle tyre leaves sideways, never outward along a spoke."
        },
        {
          "t": "mcq",
          "q": "A particle in uniform circular motion has its speed doubled while the radius is kept the same. Its centripetal acceleration becomes:",
          "opts": [
            { "label": "double", "nudge": "This assumes linear scaling and ignores the square in v²/r." },
            { "label": "half", "nudge": "This has the dependence backwards: a_c grows with speed, it does not shrink." },
            { "label": "four times", "nudge": null },
            { "label": "unchanged", "nudge": "a_c depends directly on v², so it cannot be indifferent to the speed." }
          ],
          "correct": 2,
          "solution": "a_c = v²/r ∝ v² at fixed r, so doubling v gives 2² = 4 times the acceleration. The same v² law governs the centripetal force, which is why cornering speed is so safety-critical."
        },
        {
          "t": "mcq",
          "q": "A stone of mass <i>m</i> on a string of length <i>l</i> just barely completes a vertical circle. The tension at the lowest point exceeds the tension at the highest point by:",
          "opts": [
            { "label": "2<i>mg</i>", "nudge": "This counts only the direct weight reversal between top and bottom and forgets the speed difference that climbing 2l creates." },
            { "label": "4<i>mg</i>", "nudge": "This is the speed-difference contribution alone, m(u² − v²)/l = 4mg, without the 2mg from gravity flipping sides." },
            { "label": "6<i>mg</i>", "nudge": null },
            { "label": "a value that depends on <i>l</i> and on the launch speed", "nudge": "It looks as if it should, but both cancel: energy fixes u² − v² = 4gl whatever the actual numbers are." }
          ],
          "correct": 2,
          "solution": "At the bottom T₁ = mu²/l + mg and at the top T₂ = mv²/l − mg, so T₁ − T₂ = m(u² − v²)/l + 2mg. Energy over a height change of 2l fixes u² − v² = 4gl, giving 4mg + 2mg = 6mg, independent of both l and u provided the loop is completed. It is the most quoted result of the topic."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] A body moves in a circle of radius 4 m at a constant speed of 8 m/s. Find its centripetal acceleration.", "a": "<i>a<sub>c</sub></i> = <i>v</i><sup>2</sup>/<i>r</i> = 64/4 = 16 m/s<sup>2</sup>, directed toward the centre." },
            { "q": "[NEET] A particle in uniform circular motion completes 300 revolutions per minute in a circle of radius 0.2 m. Find its angular velocity and linear speed.", "a": "<i>f</i> = 300/60 = 5 rev/s, so ω = 2π<i>f</i> = 10π ≈ 31.4 rad/s and <i>v</i> = ω<i>r</i> = (10π)(0.2) = 2π ≈ 6.28 m/s." },
            { "q": "[JEE Main] A wheel starts from rest with a constant angular acceleration of 2 rad/s<sup>2</sup>. Find its angular velocity and the total angle turned after 5 s.", "a": "ω = ω<sub>0</sub> + α<i>t</i> = 0 + (2)(5) = 10 rad/s. θ = ½α<i>t</i><sup>2</sup> = ½(2)(25) = 25 rad, which is about 4 full turns." },
            { "q": "[JEE Main] A 2 kg stone is whirled in a vertical circle of radius 1 m. At the topmost point its speed is 5 m/s, with <i>g</i> = 10 m/s<sup>2</sup>. Find the tension in the string at the top.", "a": "At the top both the tension and the weight point inward: <i>T</i> + <i>mg</i> = <i>mv</i><sup>2</sup>/<i>r</i>, so <i>T</i> = (2)(25)/1 − (2)(10) = 50 − 20 = 30 N. It is positive, so the string is genuinely taut." },
            { "q": "[JEE Advanced] A car rounds an unbanked curve of radius 80 m with coefficient of friction μ = 0.4 and <i>g</i> = 10 m/s<sup>2</sup>. Find the maximum safe speed.", "a": "<i>v</i><sub>max</sub> = √(μ<i>rg</i>) = √((0.4)(80)(10)) = √320 ≈ 17.9 m/s, independent of the car's mass." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Reading constant speed as no acceleration.</b> In uniform circular motion the <i>direction</i> of the velocity changes constantly, so there is always a centripetal acceleration, even though the speedometer never moves.",
            "<b>Drawing centrifugal force on a ground-frame diagram.</b> In an inertial frame there is only the inward net force. Centrifugal force is a pseudo-force that appears solely in a rotating frame, and putting it on a free-body diagram in the ground frame is simply wrong.",
            "<b>Expecting a released object to fly outward.</b> It leaves along the tangent, not along the radius. The inward force stops acting; nothing outward ever starts.",
            "<b>Forgetting the tangential component when the speed changes.</b> Non-uniform circular motion has two perpendicular accelerations, <i>a<sub>t</sub></i> = α<i>r</i> changing the speed and <i>a<sub>c</sub></i> = <i>v</i><sup>2</sup>/<i>r</i> changing the direction, and the net is their Pythagorean combination.",
            "<b>Using degrees for θ, ω or α.</b> The relations <i>s</i> = <i>rθ</i>, <i>v</i> = ω<i>r</i> and <i>a<sub>t</sub></i> = α<i>r</i> hold only in radians, because radian measure is exactly what makes the arc length equal <i>rθ</i>."
          ]
        },
        {
          "t": "protip",
          "html": "for every circular-motion problem, ask one question first: what real force is supplying the centripetal requirement? tension, friction, gravity, the normal force, or a combination. then set that inward force equal to mv²/r and solve. two facts to keep at your fingertips: a<sub>c</sub> ∝ v², so speed changes hit hard, and in non-uniform motion the tangential and centripetal accelerations are perpendicular and combine as √(a<sub>t</sub>² + a<sub>c</sub>²). for a vertical circle on a string, a string can pull but never push, so completing the loop needs v<sub>top</sub> ≥ √(gl) and therefore u ≥ √(5gl) at the bottom, while a rigid rod, which can push, needs only u ≥ 2√(gl). and on a banked road with friction the legal speeds form a band, not a single value: strip the friction and the band pinches to the design speed √(rg tan θ), flatten the road and the upper limit falls back to √(μrg). both limits are the chapter's own results, recovered."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "s = rθ · v = ωr · a<sub>t</sub> = αr", "note": "radians only, never degrees, or every one of these fails" },
            { "f": "a<sub>c</sub> = v<sup>2</sup>/r = ω<sup>2</sup>r = vω, toward the centre", "note": "F<sub>c</sub> = mv<sup>2</sup>/r; both go as v², so double the speed and quadruple the force" },
            { "f": "ω = ω<sub>0</sub> + αt · θ = ω<sub>0</sub>t + ½αt<sup>2</sup> · ω<sup>2</sup> = ω<sub>0</sub><sup>2</sup> + 2αθ", "note": "constant α only; set α = 0 and they collapse to θ = ωt" },
            { "f": "non-uniform: a = √(a<sub>t</sub><sup>2</sup> + a<sub>c</sub><sup>2</sup>)", "note": "a<sub>t</sub> changes the speed, a<sub>c</sub> changes the direction, and they are perpendicular" },
            { "f": "flat road v<sub>max</sub> = √(μrg) · banked tan θ = v<sup>2</sup>/rg", "note": "mass cancels from both; centrifugal force belongs to no ground-frame diagram" }
          ],
          "aids": [
            "\"speed steady, direction never: that is why it accelerates inward\"",
            "\"name the real force first, then set it equal to mv squared over r\""
          ]
        }
      ]
    }
  ]
};

export default phy11MotionPlane;
